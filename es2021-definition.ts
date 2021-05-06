/**
 * @fileoverview The AST definition for EcmaScript 2021 snapshot.
 */
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import {
    Comment,
    Definition as ES2020,
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./es2020-definition"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

export interface Enhancement {
    nodes: {
        // New expressions
        LogicalAssignmentExpression: {
            type: "AssignmentExpression"
            operator: "||=" | "&&=" | "??="
            left: NodeRef<"SimpleAssignmentTarget">
            right: NodeRef<"Expression">
        }
    }

    aliases: {
        // Enhancements
        Expression: "LogicalAssignmentExpression"
    }
}

/**
 * The AST definition of ES2021.
 */
interface ES2021 extends Extends<ES2020, Enhancement> {}

export { ES2021 as Definition }
