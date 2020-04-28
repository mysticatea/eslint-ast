/**
 * @fileoverview The AST definition for EcmaScript 2016 snapshot.
 */
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import {
    Comment,
    Definition as ES2015Definition,
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./es2015-definition"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

export namespace Enhancement {
    /**
     * Definition for exponential operators.
     */
    export interface ExponentialOperator {
        nodes: {
            // Enhancements
            CompoundAssignmentExpression: {
                operator: "**="
            }
            BinaryExpression: {
                operator: "**"
            }
        }
    }

    /**
     * Definition for update of `BindingRestElement`.
     */
    export interface BindingRestEnhancement {
        nodes: {
            // Enhancements
            BindingRestElement: {
                argument: NodeRef<"BindingTarget">
            }
        }
    }
}

/**
 * The AST definition of ES2016.
 */
export interface Definition
    extends Extends<
        ES2015Definition,
        [Enhancement.ExponentialOperator, Enhancement.BindingRestEnhancement]
    > {}
