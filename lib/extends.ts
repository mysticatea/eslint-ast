import { Definition } from "./definition"

/**
 * `true` if the `T` type is `any`.
 */
type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false

/**
 * Convert `A[] | B[]` to `(A | B)[]`.
 * @template T The type to convert.
 */
type UniteArray<T> = IsAny<T> extends true
    ? T
    : [T] extends [readonly any[]]
    ? any[] extends T // ← rejects tuple types
        ? readonly T[0][]
        : T
    : T

/**
 * Extract only string literals.
 * @template T The type to extract.
 */
type ExtractStringLiteral<T> = T extends string
    ? string extends T
        ? never
        : T
    : never

/**
 * Get a property of an object if the property is the expected value.
 * Otherwise, this is the default value.
 * @template TObject The object to get.
 * @template TKey The property name to get.
 * @template TExpected The expected value of the property.
 * @template TDefault The default value.
 */
type Prop<TObject, TKey extends keyof any, TExpected, TDefault> = [
    TObject,
] extends [{ [P in TKey]: infer TResult }]
    ? TResult extends TExpected
        ? TResult
        : TDefault
    : TDefault

/**
 * Merge the properties of a node definition from a base definition and an enhancement.
 * @template D The value of definition.
 * @template E The value of enhancement.
 */
type MergeNodeDef<D, E> = {
    [P in ExtractStringLiteral<keyof (D & E)>]: UniteArray<
        Prop<D, P, any, never> | Prop<E, P, any, never>
    >
}

/**
 * Merge every node definition from a base definition and an enhancement.
 * @template D The value of definition.
 * @template E The value of enhancement.
 */
type MergeNodes<D, E> = {
    [P in ExtractStringLiteral<keyof (D & E)>]: MergeNodeDef<
        Prop<D, P, {}, {}>,
        Prop<E, P, {}, {}>
    >
}

/**
 * Merge the properties of aliases from a base definition and an enhancement.
 * @template D The value of definition.
 * @template E The value of enhancement.
 */
type MergeAliases<D, E> = {
    [P in ExtractStringLiteral<keyof (D & E)>]: ExtractStringLiteral<
        Prop<D, P, string, never> | Prop<E, P, string, never>
    >
}

/**
 * Apply one or more enhancements to the base definition.
 * @template D The base definition.
 * @template E The enhancements.
 */
export type Extends<D extends Definition, E extends Definition> = {
    nodes: MergeNodes<D["nodes"], E["nodes"]>
    aliases: MergeAliases<D["aliases"], E["aliases"]>
    commonProperties: MergeNodeDef<D["commonProperties"], E["commonProperties"]>
}
