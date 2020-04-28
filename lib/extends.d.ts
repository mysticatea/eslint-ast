import { Definition } from "./definition";
/**
 * `true` if the `T` type is `any`.
 */
declare type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false;
/**
 * Get the first element of the given tuple.
 * @template T The tuple to get.
 */
declare type At0<T extends any[]> = T extends [infer X, ...any[]] ? X : never;
/**
 * Get the second element of the given tuple.
 * @template T The tuple to get.
 */
declare type At1<T extends any[]> = T extends [any, infer X, ...any[]] ? X : never;
/**
 * Get the third element of the given tuple.
 * @template T The tuple to get.
 */
declare type At2<T extends any[]> = T extends [any, any, infer X, ...any[]] ? X : never;
/**
 * Get the forth element of the given tuple.
 * @template T The tuple to get.
 */
declare type At3<T extends any[]> = T extends [any, any, any, infer X, ...any[]] ? X : never;
/**
 * Get the fifth and later elements of the given tuple.
 * @template T The tuple to get.
 */
declare type Shift4<T extends any[]> = ((...x: T) => void) extends (_0: any, _1: any, _2: any, _3: any, ...xs: infer XS) => void ? XS : never;
/**
 * Convert `A[] | B[]` to `(A | B)[]`.
 * @template T The type to convert.
 */
declare type UniteArray<T> = IsAny<T> extends true ? T : [T] extends [readonly any[]] ? any[] extends T ? readonly T[0][] : T : T;
/**
 * Extract only string literals.
 * @template T The type to extract.
 */
declare type ExtractStringLiteral<T> = T extends string ? string extends T ? never : T : never;
/**
 * Get a property of an object if the property is the expected value.
 * Otherwise, this is the default value.
 * @template TObject The object to get.
 * @template TKey The property name to get.
 * @template TExpected The expected value of the property.
 * @template TDefault The default value.
 */
declare type Prop<TObject, TKey extends keyof any, TExpected = any, TDefault = never> = [TObject] extends [{
    [P in TKey]: infer TResult;
}] ? TResult extends TExpected ? TResult : TDefault : TDefault;
/**
 * Merge the properties of a node definition from a base definition and four enhancements.
 * @template D The value of definition.
 * @template E0 The value of the first enhancement.
 * @template E1 The value of the second enhancement.
 * @template E2 The value of the third enhancement.
 * @template E3 The value of the forth enhancement.
 */
declare type MergeNodeDef<D, E0, E1, E2, E3> = {
    [P in ExtractStringLiteral<keyof (D & E0 & E1 & E2 & E3)>]: UniteArray<Prop<D, P> | Prop<E0, P> | Prop<E1, P> | Prop<E2, P> | Prop<E3, P>>;
};
/**
 * Merge every node definition from a base definition and four enhancements.
 * @template D The value of definition.
 * @template E0 The value of the first enhancement.
 * @template E1 The value of the second enhancement.
 * @template E2 The value of the third enhancement.
 * @template E3 The value of the forth enhancement.
 */
declare type MergeNodes<D, E0, E1, E2, E3> = {
    [P in ExtractStringLiteral<keyof (D & E0 & E1 & E2 & E3)>]: MergeNodeDef<Prop<D, P, {}, {}>, Prop<E0, P, {}, {}>, Prop<E1, P, {}, {}>, Prop<E2, P, {}, {}>, Prop<E3, P, {}, {}>>;
};
/**
 * Merge the properties of aliases from a base definition and four enhancements.
 * @template D The value of definition.
 * @template E0 The value of the first enhancement.
 * @template E1 The value of the second enhancement.
 * @template E2 The value of the third enhancement.
 * @template E3 The value of the forth enhancement.
 */
declare type MergeAliases<D, E0, E1, E2, E3> = {
    [P in ExtractStringLiteral<keyof (D & E0 & E1 & E2 & E3)>]: ExtractStringLiteral<Prop<D, P, string> | Prop<E0, P, string> | Prop<E1, P, string> | Prop<E2, P, string> | Prop<E3, P, string>>;
};
/**
 * Apply one or more enhancements to the base definition.
 *
 * This applies four enhancements at a time because TypeScript's threshold of recursive error is small.
 *
 * @template D The base definition.
 * @template E The enhancements.
 */
export declare type Extends<D extends Definition, E extends Partial<Definition>[]> = {
    0: D;
    1: Extends<{
        nodes: MergeNodes<D["nodes"], Prop<At0<E>, "nodes", {}, {}>, Prop<At1<E>, "nodes", {}, {}>, Prop<At2<E>, "nodes", {}, {}>, Prop<At3<E>, "nodes", {}, {}>>;
        aliases: MergeAliases<D["aliases"], Prop<At0<E>, "aliases", {}, {}>, Prop<At1<E>, "aliases", {}, {}>, Prop<At2<E>, "aliases", {}, {}>, Prop<At3<E>, "aliases", {}, {}>>;
        commonProperties: MergeNodeDef<D["commonProperties"], Prop<At0<E>, "commonProperties", {}, {}>, Prop<At1<E>, "commonProperties", {}, {}>, Prop<At2<E>, "commonProperties", {}, {}>, Prop<At3<E>, "commonProperties", {}, {}>>;
    }, Shift4<E>>;
}[E extends [] ? 0 : 1];
export {};
