/**
 * @fileoverview The AST definition for EcmaScript 2016 snapshot.
 */
import { Extends } from "./lib/extends";
import { NodeRef } from "./lib/node-ref";
import { Comment, Definition as ES2015, IndexRange, LineColumnRange, LineColumn, Token } from "./es2015-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
export interface Enhancement {
    nodes: {
        CompoundAssignmentExpression: {
            operator: "**=";
        };
        BinaryExpression: {
            operator: "**";
        };
        BindingRestElement: {
            argument: NodeRef<"BindingTarget">;
        };
    };
}
/**
 * The AST definition of ES2016.
 */
interface ES2016 extends Extends<ES2015, Enhancement> {
}
export { ES2016 as Definition };
