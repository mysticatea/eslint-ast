/**
 * A range in the 0-based indices.
 */
export interface IndexRange extends ReadonlyArray<number> {
    /** The begin point. */
    readonly 0: number;
    /** The end point. */
    readonly 1: number;
    /** The length of this tuple. */
    readonly length: 2;
}
