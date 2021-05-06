/**
 * @fileoverview The AST definition for EcmaScript 2019 snapshot.
 */
import { Extends } from "./lib/extends";
import { Comment, Definition as ES2018, IndexRange, LineColumnRange, LineColumn, Token } from "./es2018-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
export interface Enhancement {
    nodes: {
        CatchClause: {
            param: null;
        };
    };
}
/**
 * The AST definition of ES2017.
 */
interface ES2019 extends Extends<ES2018, Enhancement> {
}
export { ES2019 as Definition };
