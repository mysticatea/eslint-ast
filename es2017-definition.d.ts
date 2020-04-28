/**
 * @fileoverview The AST definition for EcmaScript 2017 snapshot.
 */
import { Extends } from "./lib/extends";
import { NodeRef } from "./lib/node-ref";
import { Comment, Definition as ES2016Definition, IndexRange, LineColumnRange, LineColumn, Token } from "./es2016-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
export declare namespace Enhancement {
    /**
     * Definition for async functions.
     */
    interface AsyncFunction {
        nodes: {
            AnonymousDefaultExportedFunctionDeclaration: {
                async: boolean;
            };
            ArrowFunctionExpression: {
                async: boolean;
            };
            FunctionDeclaration: {
                async: boolean;
            };
            FunctionExpression: {
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
}
/**
 * The AST definition of ES2017.
 */
export interface Definition extends Extends<ES2016Definition, [Enhancement.AsyncFunction]> {
}
