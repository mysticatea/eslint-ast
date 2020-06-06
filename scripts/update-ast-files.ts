import { promises as fs } from "fs" //eslint-disable-line @mysticatea/node/no-unsupported-features/node-builtins
import path from "path"
import { CLIEngine } from "eslint"
import ts from "typescript"

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

interface DefinitionFileInfo {
    definitionName: string
    definitionFilePath: string
    targetFilePath: string
    typeCheckFilePath: string
}

async function findDefinitionFiles(
    rootPath: string,
): Promise<DefinitionFileInfo[]> {
    console.log("Find definition files.")

    const filenames = await fs.readdir(rootPath)
    return filenames
        .filter(
            f =>
                f.endsWith("-definition.ts") &&
                !f.endsWith("latest-definition.ts"),
        )
        .map(f => {
            const rawName = f.replace(/-definition\.ts$/u, "")
            const definitionName =
                rawName === "experimental"
                    ? "Experimental"
                    : rawName === "esnext"
                    ? "ESNext"
                    : `ES${rawName.slice(2)}`
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
    console.log("Compile codebase.")

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
                    "export type NodeName = d.NodeName<Definition>",
                    "export type AliasName = Exclude<d.AliasName<Definition> | d.ASTType<Definition>, NodeName>",
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

async function generateAstFile(
    rootPath: string,
    program: ts.Program,
    {
        definitionFilePath,
        definitionName,
        targetFilePath,
        typeCheckFilePath,
    }: DefinitionFileInfo,
): Promise<void> {
    console.log("Start for %o", path.relative(rootPath, definitionFilePath))
    console.log("- Calculate type names.")

    const typeCheckFile = program.getSourceFile(typeCheckFilePath)!
    const types = program.getTypeChecker()
    const nodeNameSet = new Set<string>()
    const aliasNameSet = new Set<string>()

    ts.forEachChild(typeCheckFile, node => {
        if (!ts.isTypeAliasDeclaration(node)) {
            return
        }
        const type = types.getTypeFromTypeNode(node.type)
        const kind = node.name.text
        const nameSet = kind === "NodeName" ? nodeNameSet : aliasNameSet

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
    })

    console.log("- Generate code.")
    const importPath = path.relative(rootPath, definitionFilePath).slice(0, -3)
    const aliasCode = [...aliasNameSet]
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
    const [fixResult] = eslint.executeOnText(rawCode, targetFilePath).results
    const fixedCode = fixResult.output || fixResult.source || rawCode

    console.log("- Write code to %o.", path.relative(rootPath, targetFilePath))
    await fs.writeFile(targetFilePath, fixedCode)

    console.log("- Completed.")
}

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------

void (async function main() {
    console.log("Started.")

    const rootPath = path.resolve(__dirname, "..")
    const definitionFiles = await findDefinitionFiles(rootPath)
    const program = compile(rootPath, definitionFiles)
    for (const definitionFile of definitionFiles) {
        await generateAstFile(rootPath, program, definitionFile)
    }

    console.log("All completed.")
})().catch(error => {
    process.exitCode = 1
    console.error(error)
})
