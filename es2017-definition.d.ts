/**
 * @fileoverview The AST definition for EcmaScript 2017 snapshot.
 */
import { Extends } from "./lib/extends";
import { NodeRef } from "./lib/node-ref";
import { Comment, Definition as ES2016, IndexRange, LineColumnRange, LineColumn, Token } from "./es2016-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
export interface Enhancement {
    nodes: {
        AnonymousDefaultExportedFunctionDeclaration: {
            async: boolean;
        };
        ArrowFunctionExpression: {
            async: boolean;
        };
        FunctionExpression: {
            async: boolean;
        };
        PlainFunctionDeclaration: {
            async: boolean;
        };
        AwaitExpression: {
            argument: NodeRef<"Expression">;
        };
    };
    aliases: {
        Expression: "AwaitExpression";
    };
}
/**
 * The AST definition of ES2017.
 */
interface ES2017 extends Extends<ES2016, Enhancement> {
}
export { ES2017 as Definition };
