import { Comment } from "./lib/comment"
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import { Token } from "./lib/token"
import { Definition as ES2019Definition } from "./es2019-definition"

export { Comment, Token }

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
            Literal: "BigIntLiteral"
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
            // Enhancements
            LogicalExpression: {
                operator: "??"
            }
        }
        aliases: {}
    }

    /**
     * Definition for optional chaining.
     */
    export interface OptionalChaining {
        nodes: {
            // TODO(mysticatea): https://github.com/estree/estree/pull/204
        }
        aliases: {}
    }

    /**
     * Definition for `export * as ns from "source"`.
     */
    export interface ReexportAllWithName {
        nodes: {
            // Enhancements
            ReexportAllDeclaration: {
                exported: NodeRef<"Identifier"> | null
            }
        }
        aliases: {}
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
            Enhancement.ReexportAllWithName,
        ]
    > {}
