/**
 * @fileoverview The AST definition for EcmaScript 2018 snapshot.
 */
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import {
    Comment,
    Definition as ES2017,
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./es2017-definition"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

export interface Enhancement {
    nodes: {
        // Enhancements
        AssignmentObjectPattern: {
            properties: NodeRef<"AssignmentRestProperty">[]
        }
        BindingObjectPattern: {
            properties: NodeRef<"BindingRestProperty">[]
        }
        ForOfStatement: {
            await: boolean
        }
        ObjectExpression: {
            properties: NodeRef<"SpreadElement">[]
        }
        TemplateElement: {
            value: { cooked: null; raw: string }
        }

        // New others
        AssignmentRestProperty: {
            type: "RestElement"
            argument: NodeRef<"SimpleAssignmentTarget">
        }
        BindingRestProperty: {
            type: "RestElement"
            argument: NodeRef<"Identifier">
        }
    }
}

/**
 * The AST definition of ES2018.
 */
interface ES2018 extends Extends<ES2017, Enhancement> {}

export { ES2018 as Definition }
