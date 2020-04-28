/**
 * @fileoverview The AST definition for EcmaScript 2018 snapshot.
 */
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import {
    Comment,
    Definition as ES2017Definition,
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./es2017-definition"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

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
