import { Comment } from "./lib/comment"
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import { Token } from "./lib/token"
import { Definition as ES2016Definition } from "./es2016-definition"

export { Comment, Token }

export namespace Enhancement {
    /**
     * Definition for async functions.
     */
    export interface AsyncFunction {
        nodes: {
            // Enhancements
            AnonymousDefaultExportedFunctionDeclaration: {
                async: boolean
            }
            ArrowFunctionExpression: {
                async: boolean
            }
            FunctionDeclaration: {
                async: boolean
            }
            FunctionExpression: {
                async: boolean
            }

            // New expressions
            AwaitExpression: {
                argument: NodeRef<"Expression">
            }
        }
        aliases: {
            Expression: "AwaitExpression"
        }
    }
}

/**
 * The AST definition of ES2017.
 */
export interface Definition
    extends Extends<ES2016Definition, [Enhancement.AsyncFunction]> {}
