import {
    AliasName,
    ASTTypeOf,
    Definition,
    NodeName,
    NodeNameOfAlias,
} from "./definition"
import { IndexRange } from "./index-range"
import { LineColumnRange } from "./line-column-range"

/**
 * `true` if the `T` type is `never`.
 */
type IsNever<T> = false extends (T extends never ? true : false) ? false : true

type NeverToNull<T> = IsNever<T> extends true ? null | undefined : T

type NodePropertyNames<D extends Definition, N extends NodeName<D>> =
    | "loc"
    | "parent"
    | "range"
    | "type"
    | keyof D["nodes"][N]

/**
 * The node of given node names.
 * ※ `N extends any` is needed to distribute over union types.
 * @template D The AST definition.
 * @template N A node name.
 */
export type NodeOfNodeName<
    D extends Definition,
    N extends NodeName<D>
> = string extends N
    ? {
          "!! INVALID NODE NAME !!": N
          "Node name must be a string literal type, but got non literal type.": N
      }
    : N extends any
    ? Node<D, N>
    : never

/**
 * Resolve given `NodeRef<T>` to the corresponded nodes.
 * @template D The AST definition.
 * @template V The value that may be `NodeRef<T>`
 */
type ResolveNodeRef_<D extends Definition, V> = V extends { $ref: infer N }
    ? N extends "Node"
        ? NodeOfNodeName<D, NodeName<D>>
        : N extends AliasName<D>
        ? NodeOfNodeName<D, NodeNameOfAlias<D, N>>
        : N extends NodeName<D>
        ? Node<D, N>
        : {
              "!! UNKNOWN NODE NAME !!": N
              "Please check 'NodeRef<T>' in your AST definition": N
          }
    : V

/**
 * Get the `T` of `NodeRef<T>` or `NodeRef<T>[]`.
 * @template D The AST definition.
 * @template V The value that may be `NodeRef<T>`
 */
type NameOfNodeRef_<D extends Definition, V> = V extends { $ref: infer N }
    ? N extends "Node"
        ? NodeName<D>
        : N extends AliasName<D>
        ? NodeNameOfAlias<D, N>
        : N extends NodeName<D>
        ? N
        : never // TODO(mysticatea): Show error message.
    : never

/**
 * Resolve given `NodeRef<T>` or `NodeRef<T>[]` to the corresponded nodes.
 * @template D The AST definition.
 * @template V The value that may be `NodeRef<T>`
 */
type ResolveNodeRef<D extends Definition, V> = V extends readonly (infer E)[]
    ? readonly ResolveNodeRef_<D, E>[]
    : ResolveNodeRef_<D, V>

/**
 * Get the `T` of `NodeRef<T>` or `NodeRef<T>[]`.
 * @template D The AST definition.
 * @template V The value that may be `NodeRef<T>`
 */
type NameOfNodeRef<D extends Definition, V> = V extends readonly (infer E)[]
    ? NameOfNodeRef_<D, E>
    : NameOfNodeRef_<D, V>

/**
 * Collect all referenced node names in a given node definition.
 * @template D The AST definition.
 * @template O The node definition to check.
 */
type ChildNodeType<D extends Definition, O> = {
    [P in keyof O]: NameOfNodeRef<D, O[P]>
}[keyof O]

/**
 * Collect all node names which reference to the given node name.
 * This is used to calculate the `parent` property of each node.
 * @template D The AST definition.
 * @template N The node name.
 */
type ParentNodeType<D extends Definition, N extends NodeName<D>> = {
    [P in NodeName<D>]: N extends ChildNodeType<D, D["nodes"][P]> ? P : never
}[NodeName<D>]

/**
 * The type of the `parent` property.
 * @template D The AST definition.
 * @template N The node name to calculate the `parent` property.
 */
type ParentNode<D extends Definition, N extends NodeName<D>> = NeverToNull<
    NodeOfNodeName<D, ParentNodeType<D, N>>
>

/**
 * Define the actual node of the given node name.
 *
 * - `D["nodes"][N]` is the node definition.
 * - Resolve all `NodeRef<T>`s in the node definition.
 * - Calculate the `parent` property automatically.
 * - Add the common properties (`type`, `range`, `loc`).
 *
 * You cannot give union types to `N`. This is not distributive.
 *
 * `N` is different from ESTree's node types because an ESTree node can be
 * represented by the union of multiple types.
 * For example, ESTree the `MemberExpression` node is represented by two types:
 * `BasicMemberExpression` and `ComputedMemberExpression`.
 * So we can distinguish the two by the control flow type narrowing.
 * I.e., `!node.computed && node.property.name === "foo"` is valid code because
 * TypeScript narrowed the type `node.property` to `Identifier` node by
 * the `!node.computed`.
 *
 * @template D The AST definition.
 * @template N The node name to calculate the node.
 */
export type Node<D extends Definition, N extends NodeName<D>> = {
    readonly [P in NodePropertyNames<D, N>]: P extends "loc"
        ? LineColumnRange
        : P extends "parent"
        ? ParentNode<D, N>
        : P extends "range"
        ? IndexRange
        : P extends "type"
        ? ASTTypeOf<D, N>
        : P extends keyof D["nodes"][N]
        ? ResolveNodeRef<D, D["nodes"][N][P]>
        : never
}
