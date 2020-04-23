import { Comment } from "./lib/comment"
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import { Token } from "./lib/token"
import { Definition as ES2017Definition } from "./es2017-definition"

export { Comment, Token }

export namespace Enhancement {
    /**
     * Definition for async iteration.
     */
    export interface AsyncIteration {
        nodes: {
            // Enhancements
            ForOfStatement: {
                await: boolean
            }
        }
        aliases: {}
    }

    /**
     * Definition for malformed tagged template.
     */
    export interface MalformedTaggedTemplate {
        nodes: {
            // Enhancements
            TemplateElement: {
                value: { cooked: null; raw: string }
            }
        }
        aliases: {}
    }

    /**
     * Definition for rest/spread properties.
     */
    export interface ObjectRestSpread {
        nodes: {
            // Enhancements
            AssignmentObjectPattern: {
                properties: NodeRef<"AssignmentRestElement">[]
            }
            BindingObjectPattern: {
                properties: NodeRef<"BindingRestElement">[]
            }
            ObjectExpression: {
                properties: NodeRef<"SpreadElement">[]
            }
        }
        aliases: {}
    }
}

/**
 * The AST definition of ES2018.
 */
export interface Definition
    extends Extends<
        ES2017Definition,
        [
            Enhancement.AsyncIteration,
            Enhancement.MalformedTaggedTemplate,
            Enhancement.ObjectRestSpread,
        ]
    > {}