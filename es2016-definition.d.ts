/**
 * @fileoverview The AST definition for EcmaScript 2016 snapshot.
 */
import { Extends } from "./lib/extends";
import { NodeRef } from "./lib/node-ref";
import { Comment, Definition as ES2015Definition, IndexRange, LineColumnRange, LineColumn, Token } from "./es2015-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
export declare namespace Enhancement {
    /**
     * Definition for exponential operators.
     */
    interface ExponentialOperator {
        nodes: {
            CompoundAssignmentExpression: {
                operator: "**=";
            };
            BinaryExpression: {
                operator: "**";
            };
        };
    }
    /**
     * Definition for update of `BindingRestElement`.
     */
    interface BindingRestEnhancement {
        nodes: {
            BindingRestElement: {
                argument: NodeRef<"BindingTarget">;
            };
        };
    }
}
/**
 * The AST definition of ES2016.
 */
export interface Definition extends Extends<ES2015Definition, [Enhancement.ExponentialOperator, Enhancement.BindingRestEnhancement]> {
}
