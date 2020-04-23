import { Comment } from "./lib/comment";
import { Extends } from "./lib/extends";
import { NodeRef } from "./lib/node-ref";
import { Token } from "./lib/token";
import { Definition as ES2015Definition } from "./es2015-definition";
export { Comment, Token };
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
        aliases: {};
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
        aliases: {};
    }
}
/**
 * The AST definition of ES2016.
 */
export interface Definition extends Extends<ES2015Definition, [Enhancement.ExponentialOperator, Enhancement.BindingRestEnhancement]> {
}
