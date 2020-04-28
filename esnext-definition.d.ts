/**
 * @fileoverview The AST definition for EcmaScript 2021 candidate (include stage 4 proposals).
 */
import { Extends } from "./lib/extends";
import { Comment, Definition as ES2020Definition, IndexRange, LineColumnRange, LineColumn, Token } from "./es2020-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
export declare namespace Enhancement {
}
/**
 * The AST definition of ES Next.
 * This definition includes the Stage 4 proposals for ES2021.
 */
export interface Definition extends Extends<ES2020Definition, []> {
}
