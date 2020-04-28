import { promises as fs } from "fs" //eslint-disable-line @mysticatea/node/no-unsupported-features/node-builtins
import path from "path"
import { CLIEngine } from "eslint"
import ts from "typescript"

interface DefinitionFileInfo {
    definitionName: string
    definitionFilePath: string
    targetFilePath: string
    typeCheckFilePath: string
}

async function findDefinitionFiles(
    rootPath: string,
): Promise<DefinitionFileInfo[]> {
    const filenames = await fs.readdir(rootPath)

    return filenames
        .filter(f => f.endsWith("-definition.ts"))
        .map(f => {
            const rawName = f.replace(/-definition\.ts$/u, "")
            const definitionName = `ES${rawName[2].toUpperCase()}${rawName.slice(
                3,
            )}`
            return {
                definitionName,
                definitionFilePath: path.join(rootPath, f),
                targetFilePath: path.join(rootPath, `${rawName}.ts`),
                typeCheckFilePath: path.join(rootPath, `__${rawName}__.ts`),
            }
        })
}

function compile(
    rootPath: string,
    definitionFiles: DefinitionFileInfo[],
): ts.Program {
    // Define virtual files to calculate alias names, node names, and node
    // types.
    const virtualFiles = new Map(
        definitionFiles.map(e => {
            const definitionFilePath = path
                .relative(rootPath, e.definitionFilePath)
                .slice(0, -3)
                .replace(/\\/gu, "/")
            return [
                e.typeCheckFilePath,
                [
                    'import * as d from "./lib/definition"',
                    `import { Definition } from "./${definitionFilePath}"`,
                    "export type AliasName = d.AliasName<Definition>",
                    "export type NodeName = d.NodeName<Definition>",
                    "export type ASTType = d.ASTType<Definition>",
                ].join("\n"),
            ]
        }),
    )
    const targetFilePaths = new Set(definitionFiles.map(e => e.targetFilePath))

    // Create customized host to add virtual files and remove result files.
    const host = ts.createWatchCompilerHost(
        path.join(rootPath, "tsconfig.json"),
        {},
        {
            ...ts.sys,
            readDirectory(filePath, ...args): string[] {
                if (path.normalize(filePath) === rootPath) {
                    return [
                        // Add virtual files
                        ...virtualFiles.keys(),
                        // Remove result files
                        ...ts.sys
                            .readDirectory(filePath, ...args)
                            .filter(
                                f => !targetFilePaths.has(path.normalize(f)),
                            ),
                    ]
                }
                return ts.sys.readDirectory(filePath, ...args)
            },
            readFile(filePath): string | undefined {
                return (
                    virtualFiles.get(path.normalize(filePath)) ||
                    ts.sys.readFile(filePath)
                )
            },
            fileExists(filePath): boolean {
                return (
                    virtualFiles.has(path.normalize(filePath)) ||
                    ts.sys.fileExists(filePath)
                )
            },
        },
        undefined,
        () => {},
        () => {},
    )
    const watch = ts.createWatchProgram(host)
    const retv = watch.getProgram().getProgram()
    watch.close()

    return retv
}

void (async function main() {
    console.log("Find definition files.")
    const rootPath = path.resolve(__dirname, "..")
    const definitionFiles = await findDefinitionFiles(rootPath)

    console.log("Compile codebase.")
    const program = compile(rootPath, definitionFiles)
    const types = program.getTypeChecker()

    for (const {
        definitionFilePath,
        definitionName,
        targetFilePath,
        typeCheckFilePath,
    } of definitionFiles) {
        console.log("Start for %o", definitionFilePath)
        console.log("- Calculate type names.")

        const typeCheckFile = program.getSourceFile(typeCheckFilePath)!
        const nodeNameSet = new Set<string>()
        const aliasNameSet = new Set<string>()
        const typeNameSet = new Set<string>()
        ts.forEachChild(typeCheckFile, node => {
            if (ts.isTypeAliasDeclaration(node)) {
                const type = types.getTypeFromTypeNode(node.type)
                const kind = node.name.text
                const nameSet =
                    kind === "AliasName"
                        ? aliasNameSet
                        : kind === "NodeName"
                        ? nodeNameSet
                        : typeNameSet

                if (!type.isUnion()) {
                    throw new Error(`"${kind}" must be a union type`)
                }
                for (const t of type.types) {
                    if (!t.isStringLiteral()) {
                        throw new Error(
                            `"${kind}" must include only a string literal type`,
                        )
                    }
                    nameSet.add(t.value)
                }
            }
        })
        for (const name of nodeNameSet) {
            typeNameSet.delete(name)
        }

        console.log("- Generate code.")
        const importPath = path
            .relative(rootPath, definitionFilePath)
            .slice(0, -3)
        const aliasCode = [...aliasNameSet, ...typeNameSet]
            .sort(undefined)
            .flatMap(name => [
                `/** The union type for the \`${name}\` alias. */`,
                `export type ${name} = AST["${name}"]`,
            ])
        const nodeCode = [...nodeNameSet]
            .sort(undefined)
            .flatMap(name => [
                `/** The type for the \`${name}\` node. */`,
                `export type ${name} = AST["${name}"]`,
            ])
        const rawCode = `// ========================================================================== //
// DON'T EDIT THIS FILE DIRECTLY!                                             //
// This file is automatically generated by the 'scripts/update-ast-files.ts'. //
// ========================================================================== //
/**
 * @fileoverview The AST types for ${definitionName}.
 */
import * as ast from "./lib/ast"
import {
    Comment,
    Definition as ${definitionName},
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./${importPath}"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

/** The map-like object that has all nodes and aliases. */
export type AST = ast.AST<${definitionName}>

/** The namespace that has all nodes and aliases. */
export namespace AST {
    /** The union type for all nodes. */
    export type Node = AST["Node"]
    ${aliasCode.join("\n    ")}
    ${nodeCode.join("\n    ")}
}

/** The union type for all alias names. */
export type AliasName = ast.AliasName<${definitionName}>

/**
 * The union type for all node type names in TypeScript.
 *
 * This is not the node type of ESTree because it may represent each ESTree node
 * by multiple TypeScript types.
 * Use the \`TypeName\` type if you want ESTree node type names.
 */
export type NodeName = ast.NodeName<${definitionName}>

/**
 * The union type for all node type names in ESTree.
 *
 * This is not the type name in TypeScript because it may represent each ESTree
 * node by multiple TypeScript types.
 * Use the \`NodeName\` type if you want node type names in TypeScript.
 */
export type TypeName = ast.ASTType<${definitionName}>

/** The union type for all nodes. */
export type Node = AST["Node"]
${aliasCode.join("\n")}
${nodeCode.join("\n")}
`
        const eslint = new CLIEngine({ fix: true })
        const [fixResult] = eslint.executeOnText(
            rawCode,
            targetFilePath,
        ).results
        const fixedCode = fixResult.output || fixResult.source

        console.log("- Write code to %o.", targetFilePath)
        await fs.writeFile(targetFilePath, fixedCode)

        console.log("- Completed.")
    }

    console.log("All completed.")
})().catch(error => {
    process.exitCode = 1
    console.error(error)
})
