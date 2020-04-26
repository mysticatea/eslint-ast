import {
    ASTType,
    AliasName,
    Definition,
    NodeName,
    NodeNameOfAliasName,
    NodeNameOfASTType,
} from "./definition"
import { Node, NodeOfNodeName } from "./node"

export { ASTType, AliasName, Definition, NodeName }

/**
 * The map-like object that has all nodes.
 * The keys are node names and each value is the node.
 * @template D The AST definition.
 */
export type AST<D extends Definition> = {
    [N in NodeName<D> | AliasName<D> | ASTType<D> | "Node"]: N extends "Node"
        ? NodeOfNodeName<D, NodeName<D>>
        : N extends AliasName<D>
        ? NodeOfNodeName<D, NodeNameOfAliasName<D, N>>
        : N extends ASTType<D>
        ? NodeOfNodeName<D, NodeNameOfASTType<D, N>>
        : Node<D, N>
}
