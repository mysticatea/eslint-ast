/**
 * @fileoverview The AST definition for EcmaScript 2020 snapshot.
 */
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import {
    Comment,
    Definition as ES2019Definition,
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./es2019-definition"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

export namespace Enhancement {
    /**
     * Definition for BigInt literals.
     */
    export interface BigInt {
        nodes: {
            // Enhancements
            BooleanLiteral: {
                bigint: undefined
            }
            NullLiteral: {
                bigint: undefined
            }
            NumberLiteral: {
                bigint: undefined
            }
            RegExpLiteral: {
                bigint: undefined
            }
            StringLiteral: {
                bigint: undefined
            }

            // New expressions
            BigIntLiteral: {
                type: "Literal"
                value: bigint | null
                bigint: string
                regex: undefined
                raw: string
            }
        }
        aliases: {
            // Enhancements
            Expression: "BigIntLiteral"
            StaticPropertyKey: "BigIntLiteral"
        }
    }

    /**
     * Definition for `import(source)`.
     */
    export interface DynamicImport {
        nodes: {
            // New expressions
            ImportExpression: {
                source: NodeRef<"Expression">
            }
        }
        aliases: {
            // Enhancements
            Expression: "ImportExpression"
        }
    }

    /**
     * Definition for nullish coalescing.
     */
    export interface NullishCoalescing {
        nodes: {
            // New expressions
            CoalesceExpression: {
                type: "LogicalExpression"
                operator: "??"
                left: NodeRef<"Expression">
                right: NodeRef<"Expression">
            }
        }
        aliases: {
            // Enhancements
            Expression: "CoalesceExpression"
        }
    }

    /**
     * Definition for optional chaining.
     */
    export interface OptionalChaining {
        nodes: {
            // Enhancements
            CallExpression: {
                optional: boolean
                callee: NodeRef<"ChainExpression">
            }
            ComputedMemberExpression: {
                optional: boolean
                object: NodeRef<"ChainExpression">
            }
            PlainMemberExpression: {
                optional: boolean
                object: NodeRef<"ChainExpression">
            }

            // New expressions
            ChainExpression: {
                expression:
                    | NodeRef<"CallExpression">
                    | NodeRef<"MemberExpression">
            }
        }
        aliases: {
            // Don't add `ChainExpression` node to `Expression` alias because it
            // appears at only `CallExpression#callee` and
            // `MemberExpression#object`.
        }
    }

    /**
     * Definition for `export * as ns from "source"`.
     */
    export interface ExportAllWithName {
        nodes: {
            // Enhancements
            ExportAllDeclaration: {
                exported: NodeRef<"Identifier"> | null
            }
        }
    }
}

/**
 * The AST definition of ES2020.
 */
export interface Definition
    extends Extends<
        ES2019Definition,
        [
            Enhancement.BigInt,
            Enhancement.DynamicImport,
            Enhancement.NullishCoalescing,
            Enhancement.OptionalChaining,
            Enhancement.ExportAllWithName,
        ]
    > {}
