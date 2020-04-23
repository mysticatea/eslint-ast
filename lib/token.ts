import { IndexRange } from "./index-range"
import { LineColumnRange } from "./line-column-range"

/**
 * Token's information.
 */
export interface Token {
    /** Token type. */
    readonly type: string
    /** Token value. */
    readonly value: string
    /** The range of this token in indices. */
    readonly range: IndexRange
    /** The range of this token in line/column. */
    readonly loc: LineColumnRange
}
