/**
 * The Type of AST definition.
 */
export interface Definition {
    /**
     * A map-like object type to define nodes.
     *
     * Each key is the node type and its value is the node definition.
     * `Def.NodeRef<T>` in the node definitions will be replaced by the actual node types.
     */
    nodes: Record<string, {
        type?: string;
        [key: string]: any;
    }>;
    /**
     * A map-like object type to define aliases.
     *
     * Each key is the alias name and its value is the actual node types.
     * `Def.NodeRef<T>` in the node definitions will be replaced by the actual node types.
     */
    aliases: Record<string, string>;
}
/**
 * The union type of alias names.
 * @template D The AST definition.
 */
export declare type AliasName<D extends Definition> = keyof D["aliases"] & string;
/**
 * The union type of node names.
 * @template D The AST definition.
 */
export declare type NodeName<D extends Definition> = keyof D["nodes"] & string;
/**
 * The actual node names of alias names.
 * @template D The AST definition.
 * @template N An alias name.
 */
export declare type NodeNameOfAlias<D extends Definition, N extends AliasName<D> | "Node"> = N extends "Node" ? NodeName<D> : Extract<NodeName<D>, D["aliases"][N]>;
/**
 * The `type` property of a node definition.
 * @template D The AST definition.
 * @template N A node name.
 */
export declare type ASTTypeOf<D extends Definition, N extends NodeName<D>> = D["nodes"][N] extends {
    type: infer T;
} ? (T extends string ? T : N) : N;
/**
 * The `type` property of all node definitions.
 * @template D The AST definition.
 */
export declare type ASTType<D extends Definition> = {
    [P in NodeName<D>]: ASTTypeOf<D, P>;
}[NodeName<D>];
