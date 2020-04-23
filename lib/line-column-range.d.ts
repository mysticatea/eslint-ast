/**
 * A range in the line/column pairs.
 */
export interface LineColumnRange {
    /** The begin location. */
    readonly start: LineColumn;
    /** The end location. */
    readonly end: LineColumn;
}
/**
 * The pair of a line number and a column number.
 */
export interface LineColumn {
    /** The 1-based line number. */
    readonly line: number;
    /** The 0-based column number. */
    readonly column: number;
}
