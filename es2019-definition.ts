import { Extends } from "./lib/extends"
import {
    Comment,
    Definition as ES2018Definition,
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./es2018-definition"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

export namespace Enhancement {
    /**
     * Definition for optional catch binding.
     */
    export interface OptionalCatchBinding {
        nodes: {
            // Enhancements
            CatchClause: {
                param: null
            }
        }
    }
}

/**
 * The AST definition of ES2017.
 */
export interface Definition
    extends Extends<ES2018Definition, [Enhancement.OptionalCatchBinding]> {}
