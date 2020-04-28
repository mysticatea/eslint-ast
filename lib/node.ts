import {
    AliasName,
    ASTType,
    ASTTypeOfNodeName,
    CommonPropertyName,
    Definition,
    NodeName,
    NodeNameOfAliasName,
    NodeNameOfASTType,
} from "./definition"

/**
 * `true` if the `T` type is `never`.
 * @template T The type to check.
 */
type IsNever<T> = false extends (T extends never ? true : false) ? false : true

/**
 * If `T` is `never` then `null | undefined`, otherwise `T` as is.
 * @template T The type to convert.
 */
type NeverToNull<T> = IsNever<T> extends true ? null | undefined : T

/**
 * Builtin types that don't have readonly type.
 */
type Builtins =
    | ArrayBuffer
    | BigInt
    | BigInt64Array
    | BigUint64Array
    | Boolean
    | DataView
    | Date
    | Error
    | Float32Array
    | Float64Array
    | Function
    | Int16Array
    | Int32Array
    | Int8Array
    | Number
    | Promise<any>
    | RegExp
    | SharedArrayBuffer
    | String
    | Symbol
    | Uint16Array
    | Uint32Array
    | Uint8Array
    | Uint8ClampedArray
    | WeakMap<any, any>
    | WeakSet<any>

/**
 * All property names of a node.
 * @template D The AST definition.
 * @template N A node name.
 */
type NodePropertyNames<D extends Definition, N extends NodeName<D>> =
    | "type"
    | keyof D["nodes"][N]
    | CommonPropertyName<D>
    | "parent"

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
 * Resolve given `NodeRef<T>` to the corresponded nodes, for `"Node"`.
 * @template D The AST definition.
 */
type ResolveNodeRefNodeString<D extends Definition> = "Node" extends NodeName<D>
    ? {
          "!! CONFLICTED NAME !!": "Node"
          'Node name must not be "Node".': "Node"
      }
    : "Node" extends AliasName<D>
    ? {
          "!! CONFLICTED NAME !!": "Node"
          'Alias name must not be "Node".': "Node"
      }
    : "Node" extends ASTType<D>
    ? {
          "!! CONFLICTED NAME !!": "Node"
          "The 'type' property of nodes must not be \"Node\".": "Node"
      }
    : NodeOfNodeName<D, NodeName<D>>

/**
 * Resolve given `NodeRef<T>` to the corresponded nodes, for alias names.
 * @template D The AST definition.
 * @template N The `T` of `NodeRef<T>`
 */
type ResolveNodeRefAliasName<
    D extends Definition,
    N extends AliasName<D>
> = N extends NodeName<D>
    ? {
          "!! CONFLICTED NAME !!": N
          "Alias name must not conflict with Node name.": N
      }
    : N extends ASTType<D>
    ? {
          "!! CONFLICTED NAME !!": N
          "Alias name must not conflict with the 'type' property of nodes.": N
      }
    : NodeOfNodeName<D, NodeNameOfAliasName<D, N>>

/**
 * Resolve given `NodeRef<T>` to the corresponded nodes.
 * @template D The AST definition.
 * @template V The value that may be `NodeRef<T>`
 */
type ResolveNodeRef_<D extends Definition, V> = V extends { $ref: infer N }
    ? N extends "Node"
        ? ResolveNodeRefNodeString<D>
        : N extends AliasName<D>
        ? ResolveNodeRefAliasName<D, N>
        : N extends NodeName<D>
        ? Node<D, N>
        : N extends ASTType<D>
        ? NodeOfNodeName<D, NodeNameOfASTType<D, N>>
        : {
              "!! UNKNOWN NODE NAME !!": N
              "Please check 'NodeRef<T>' in your AST definition": N
          }
    : V extends {}
    ? V extends Builtins
        ? V // TODO(mysticatea): use Readonly type?
        : Readonly<V>
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
        ? NodeNameOfAliasName<D, N>
        : N extends NodeName<D>
        ? N
        : N extends ASTType<D>
        ? NodeNameOfASTType<D, N>
        : never
    : never

/**
 * Resolve given `NodeRef<T>` or `NodeRef<T>[]` to the corresponded nodes.
 * @template D The AST definition.
 * @template V The value that may be `NodeRef<T>`
 */
type ResolveNodeRef<D extends Definition, V> = V extends readonly any[]
    ? { readonly [P in keyof V]: ResolveNodeRef_<D, V[P]> }
    : V extends ReadonlyMap<infer K, infer V>
    ? ReadonlyMap<ResolveNodeRef_<D, K>, ResolveNodeRef_<D, V>>
    : V extends ReadonlySet<infer E>
    ? ReadonlySet<ResolveNodeRef_<D, E>>
    : ResolveNodeRef_<D, V>

/**
 * Get the `T` of `NodeRef<T>` or `NodeRef<T>[]`.
 * @template D The AST definition.
 * @template V The value that may be `NodeRef<T>`
 */
type NameOfNodeRef<D extends Definition, V> = V extends readonly (infer E)[]
    ? NameOfNodeRef_<D, E>
    : V extends ReadonlyMap<infer K, infer V>
    ? NameOfNodeRef_<D, K> | NameOfNodeRef_<D, V>
    : V extends ReadonlySet<infer E>
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
    readonly [P in NodePropertyNames<D, N>]: P extends "parent"
        ? ParentNode<D, N>
        : P extends "type"
        ? ASTTypeOfNodeName<D, N>
        : P extends keyof D["nodes"][N]
        ? ResolveNodeRef<D, D["nodes"][N][P]>
        : P extends CommonPropertyName<D>
        ? ResolveNodeRef<D, D["commonProperties"][P]>
        : never
}
