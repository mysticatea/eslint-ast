/**
 * The Type of AST definition.
 */
export interface Definition {
    /**
     * A map-like object type to define nodes.
     * Each key is the node name and its value is the node definition.
     * `NodeRef<T>` in the node definitions will be replaced by the actual node types.
     */
    nodes: Record<string, { type?: string; [key: string]: any }>

    /**
     * A map-like object type to define aliases.
     * Each key is the alias name and its value is the actual node names.
     */
    aliases: Record<string, string>

    /**
     * The common properties of all node types.
     */
    commonProperties: Record<string, any>
}

/**
 * The union type of alias names.
 * @template D The AST definition.
 */
export type AliasName<D extends Definition> = keyof D["aliases"] & string

/**
 * The `type` property of all node definitions.
 * @template D The AST definition.
 */
export type ASTType<D extends Definition> = {
    [P in NodeName<D>]: ASTTypeOfNodeName<D, P>
}[NodeName<D>]

/**
 * The union type of common property names.
 * @template D The AST definition.
 */
export type CommonPropertyName<
    D extends Definition
> = keyof D["commonProperties"] & string

/**
 * The union type of node names.
 * @template D The AST definition.
 */
export type NodeName<D extends Definition> = keyof D["nodes"] & string

/**
 * The actual node names of alias names.
 * @template D The AST definition.
 * @template N An alias name.
 */
export type NodeNameOfAliasName<
    D extends Definition,
    N extends AliasName<D> | "Node"
> = N extends "Node" ? NodeName<D> : Extract<NodeName<D>, D["aliases"][N]>

/**
 * The actual node names of AST type names.
 * @template D The AST definition.
 * @template T An alias name.
 */
export type NodeNameOfASTType<D extends Definition, T extends ASTType<D>> = {
    [P in NodeName<D>]: T extends ASTTypeOfNodeName<D, P> ? P : never
}[NodeName<D>]

/**
 * The `type` property of a node definition.
 * If the `type` property doesn't exist, this is the node name.
 * @template D The AST definition.
 * @template N A node name.
 */
export type ASTTypeOfNodeName<
    D extends Definition,
    N extends NodeName<D>
> = D["nodes"][N] extends { type: infer T } ? (T extends string ? T : N) : N
