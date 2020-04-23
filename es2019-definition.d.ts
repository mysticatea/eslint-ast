import { Comment } from "./lib/comment";
import { Extends } from "./lib/extends";
import { Token } from "./lib/token";
import { Definition as ES2018Definition } from "./es2018-definition";
export { Comment, Token };
export declare namespace Enhancement {
    /**
     * Definition for optional catch binding.
     */
    interface OptionalCatchBinding {
        nodes: {
            CatchClause: {
                param: null;
            };
        };
        aliases: {};
    }
}
/**
 * The AST definition of ES2017.
 */
export interface Definition extends Extends<ES2018Definition, [Enhancement.OptionalCatchBinding]> {
}
