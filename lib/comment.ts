import { IndexRange } from "./index-range"
import { LineColumnRange } from "./line-column-range"

/**
 * Comment's information.
 */
export interface Comment {
    /** Comment type. */
    readonly type: "Block" | "Line" | "Shebang"
    /** Comment content. */
    readonly value: string
    /** The range of this token in indices. */
    readonly range: IndexRange
    /** The range of this token in line/column. */
    readonly loc: LineColumnRange
}
