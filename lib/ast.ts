import {
    ASTType,
    AliasName,
    Definition,
    NodeName,
    NodeNameOfAlias,
} from "./definition"
import { Node, NodeOfNodeName } from "./node"

export { ASTType, AliasName, Definition, NodeName }

/**
 * The map-like object that has all nodes.
 * The keys are node names and each value is the node.
 * @template D The AST definition.
 */
export type AST<D extends Definition> = {
    [N in NodeName<D> | AliasName<D> | "Node"]: N extends "Node"
        ? NodeOfNodeName<D, NodeName<D>>
        : N extends AliasName<D>
        ? NodeOfNodeName<D, NodeNameOfAlias<D, N>>
        : Node<D, N>
}

/**
 * The union type of the given AST type.
 * @template D The AST definition.
 * @template T The AST type to extract.
 */
export type NodeOfType<D extends Definition, T extends ASTType<D>> = Extract<
    AST<D>["Node"],
    { type: T }
>
