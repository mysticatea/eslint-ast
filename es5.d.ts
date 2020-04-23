/**
 * @fileoverview The AST definition for ES5.
 */
import * as ast from "./lib/ast";
import { Definition as ES5 } from "./es5-definition";
/**
 * The map-like object that has all nodes and aliases.
 */
export declare type AST = ast.AST<ES5>;
/**
 * The namespace that has all nodes and aliases.
 */
export declare namespace AST {
    /**
     * The union type for all nodes.
     */
    type Node = AST["Node"];
    /**
     * The union type for the `AssignmentExpression` alias.
     */
    type AssignmentExpression = AST["AssignmentExpression"];
    /**
     * The union type for the `AssignmentTarget` alias.
     */
    type AssignmentTarget = AST["AssignmentTarget"];
    /**
     * The union type for the `BindingTarget` alias.
     */
    type BindingTarget = AST["BindingTarget"];
    /**
     * The union type for the `Declaration` alias.
     */
    type Declaration = AST["Declaration"];
    /**
     * The union type for the `Expression` alias.
     */
    type Expression = AST["Expression"];
    /**
     * The union type for the `Function` alias.
     */
    type Function = AST["Function"];
    /**
     * The union type for the `Literal` alias.
     */
    type Literal = AST["Literal"];
    /**
     * The union type for the `MemberExpression` alias.
     */
    type MemberExpression = AST["MemberExpression"];
    /**
     * The union type for the `Program` alias.
     */
    type Program = AST["Program"];
    /**
     * The union type for the `Property` alias.
     */
    type Property = AST["Property"];
    /**
     * The union type for the `SimpleAssignmentTarget` alias.
     */
    type SimpleAssignmentTarget = AST["SimpleAssignmentTarget"];
    /**
     * The union type for the `Statement` alias.
     */
    type Statement = AST["Statement"];
    /**
     * The union type for the `StaticPropertyKey` alias.
     */
    type StaticPropertyKey = AST["StaticPropertyKey"];
    /**
     * The node type for the `AccessorProperty` node.
     */
    type AccessorProperty = AST["AccessorProperty"];
    /**
     * The node type for the `ArrayExpression` node.
     */
    type ArrayExpression = AST["ArrayExpression"];
    /**
     * The node type for the `BinaryExpression` node.
     */
    type BinaryExpression = AST["BinaryExpression"];
    /**
     * The node type for the `BlockStatement` node.
     */
    type BlockStatement = AST["BlockStatement"];
    /**
     * The node type for the `BooleanLiteral` node.
     */
    type BooleanLiteral = AST["BooleanLiteral"];
    /**
     * The node type for the `BreakStatement` node.
     */
    type BreakStatement = AST["BreakStatement"];
    /**
     * The node type for the `CallExpression` node.
     */
    type CallExpression = AST["CallExpression"];
    /**
     * The node type for the `CatchClause` node.
     */
    type CatchClause = AST["CatchClause"];
    /**
     * The node type for the `CompoundAssignmentExpression` node.
     */
    type CompoundAssignmentExpression = AST["CompoundAssignmentExpression"];
    /**
     * The node type for the `ComputedMemberExpression` node.
     */
    type ComputedMemberExpression = AST["ComputedMemberExpression"];
    /**
     * The node type for the `ConditionalExpression` node.
     */
    type ConditionalExpression = AST["ConditionalExpression"];
    /**
     * The node type for the `ContinueStatement` node.
     */
    type ContinueStatement = AST["ContinueStatement"];
    /**
     * The node type for the `DebuggerStatement` node.
     */
    type DebuggerStatement = AST["DebuggerStatement"];
    /**
     * The node type for the `DirectiveStatement` node.
     */
    type DirectiveStatement = AST["DirectiveStatement"];
    /**
     * The node type for the `DoWhileStatement` node.
     */
    type DoWhileStatement = AST["DoWhileStatement"];
    /**
     * The node type for the `EmptyStatement` node.
     */
    type EmptyStatement = AST["EmptyStatement"];
    /**
     * The node type for the `ExpressionStatement` node.
     */
    type ExpressionStatement = AST["ExpressionStatement"];
    /**
     * The node type for the `ForInStatement` node.
     */
    type ForInStatement = AST["ForInStatement"];
    /**
     * The node type for the `ForStatement` node.
     */
    type ForStatement = AST["ForStatement"];
    /**
     * The node type for the `FunctionDeclaration` node.
     */
    type FunctionDeclaration = AST["FunctionDeclaration"];
    /**
     * The node type for the `FunctionExpression` node.
     */
    type FunctionExpression = AST["FunctionExpression"];
    /**
     * The node type for the `Identifier` node.
     */
    type Identifier = AST["Identifier"];
    /**
     * The node type for the `IfStatement` node.
     */
    type IfStatement = AST["IfStatement"];
    /**
     * The node type for the `LabeledStatement` node.
     */
    type LabeledStatement = AST["LabeledStatement"];
    /**
     * The node type for the `LogicalExpression` node.
     */
    type LogicalExpression = AST["LogicalExpression"];
    /**
     * The node type for the `NewExpression` node.
     */
    type NewExpression = AST["NewExpression"];
    /**
     * The node type for the `NullLiteral` node.
     */
    type NullLiteral = AST["NullLiteral"];
    /**
     * The node type for the `NumberLiteral` node.
     */
    type NumberLiteral = AST["NumberLiteral"];
    /**
     * The node type for the `ObjectExpression` node.
     */
    type ObjectExpression = AST["ObjectExpression"];
    /**
     * The node type for the `RegExpLiteral` node.
     */
    type RegExpLiteral = AST["RegExpLiteral"];
    /**
     * The node type for the `ReturnStatement` node.
     */
    type ReturnStatement = AST["ReturnStatement"];
    /**
     * The node type for the `ScriptProgram` node.
     */
    type ScriptProgram = AST["ScriptProgram"];
    /**
     * The node type for the `SequenceExpression` node.
     */
    type SequenceExpression = AST["SequenceExpression"];
    /**
     * The node type for the `SimpleAssignmentExpression` node.
     */
    type SimpleAssignmentExpression = AST["SimpleAssignmentExpression"];
    /**
     * The node type for the `SimpleMemberExpression` node.
     */
    type SimpleMemberExpression = AST["SimpleMemberExpression"];
    /**
     * The node type for the `SimpleProperty` node.
     */
    type SimpleProperty = AST["SimpleProperty"];
    /**
     * The node type for the `StringLiteral` node.
     */
    type StringLiteral = AST["StringLiteral"];
    /**
     * The node type for the `SwitchCase` node.
     */
    type SwitchCase = AST["SwitchCase"];
    /**
     * The node type for the `SwitchStatement` node.
     */
    type SwitchStatement = AST["SwitchStatement"];
    /**
     * The node type for the `ThisExpression` node.
     */
    type ThisExpression = AST["ThisExpression"];
    /**
     * The node type for the `ThrowStatement` node.
     */
    type ThrowStatement = AST["ThrowStatement"];
    /**
     * The node type for the `TryStatement` node.
     */
    type TryStatement = AST["TryStatement"];
    /**
     * The node type for the `UnaryExpression` node.
     */
    type UnaryExpression = AST["UnaryExpression"];
    /**
     * The node type for the `UpdateExpression` node.
     */
    type UpdateExpression = AST["UpdateExpression"];
    /**
     * The node type for the `VariableDeclaration` node.
     */
    type VariableDeclaration = AST["VariableDeclaration"];
    /**
     * The node type for the `VariableDeclarator` node.
     */
    type VariableDeclarator = AST["VariableDeclarator"];
    /**
     * The node type for the `WhileStatement` node.
     */
    type WhileStatement = AST["WhileStatement"];
    /**
     * The node type for the `WithStatement` node.
     */
    type WithStatement = AST["WithStatement"];
}
/**
 * The union type for all alias names.
 */
export declare type AliasName = ast.AliasName<ES5>;
/**
 * The union type for all node type names in TypeScript.
 *
 * This is not the node type of ESTree because it may represent each ESTree node
 * by multiple TypeScript types.
 * Use the `TypeName` type if you want ESTree node type names.
 */
export declare type NodeName = ast.NodeName<ES5>;
/**
 * The union type for all node type names in ESTree.
 *
 * This is not the type name in TypeScript because it may represent each ESTree
 * node by multiple TypeScript types.
 * Use the `NodeName` type if you want node type names in TypeScript.
 */
export declare type TypeName = ast.ASTType<ES5>;
/**
 * The union type for all nodes.
 */
export declare type Node = AST.Node;
/**
 * The union type for all statement nodes.
 *
 */
export declare type Statement = AST.Statement;
/**
 * The union type for all expression nodes.
 */
export declare type Expression = AST.Expression;
/**
 * The node type for the ESTree `ArrayExpression` node.
 */
export declare type ArrayExpression = ast.NodeOfType<ES5, "ArrayExpression">;
/**
 * The node type for the ESTree `AssignmentExpression` node.
 */
export declare type AssignmentExpression = ast.NodeOfType<ES5, "AssignmentExpression">;
/**
 * The node type for the ESTree `BinaryExpression` node.
 */
export declare type BinaryExpression = ast.NodeOfType<ES5, "BinaryExpression">;
/**
 * The node type for the ESTree `BlockStatement` node.
 */
export declare type BlockStatement = ast.NodeOfType<ES5, "BlockStatement">;
/**
 * The node type for the ESTree `BreakStatement` node.
 */
export declare type BreakStatement = ast.NodeOfType<ES5, "BreakStatement">;
/**
 * The node type for the ESTree `CallExpression` node.
 */
export declare type CallExpression = ast.NodeOfType<ES5, "CallExpression">;
/**
 * The node type for the ESTree `CatchClause` node.
 */
export declare type CatchClause = ast.NodeOfType<ES5, "CatchClause">;
/**
 * The node type for the ESTree `ConditionalExpression` node.
 */
export declare type ConditionalExpression = ast.NodeOfType<ES5, "ConditionalExpression">;
/**
 * The node type for the ESTree `ContinueStatement` node.
 */
export declare type ContinueStatement = ast.NodeOfType<ES5, "ContinueStatement">;
/**
 * The node type for the ESTree `DebuggerStatement` node.
 */
export declare type DebuggerStatement = ast.NodeOfType<ES5, "DebuggerStatement">;
/**
 * The node type for the ESTree `DoWhileStatement` node.
 */
export declare type DoWhileStatement = ast.NodeOfType<ES5, "DoWhileStatement">;
/**
 * The node type for the ESTree `EmptyStatement` node.
 */
export declare type EmptyStatement = ast.NodeOfType<ES5, "EmptyStatement">;
/**
 * The node type for the ESTree `ExpressionStatement` node.
 */
export declare type ExpressionStatement = ast.NodeOfType<ES5, "ExpressionStatement">;
/**
 * The node type for the ESTree `ForInStatement` node.
 */
export declare type ForInStatement = ast.NodeOfType<ES5, "ForInStatement">;
/**
 * The node type for the ESTree `ForStatement` node.
 */
export declare type ForStatement = ast.NodeOfType<ES5, "ForStatement">;
/**
 * The node type for the ESTree `FunctionDeclaration` node.
 */
export declare type FunctionDeclaration = ast.NodeOfType<ES5, "FunctionDeclaration">;
/**
 * The node type for the ESTree `FunctionExpression` node.
 */
export declare type FunctionExpression = ast.NodeOfType<ES5, "FunctionExpression">;
/**
 * The node type for the ESTree `Identifier` node.
 */
export declare type Identifier = ast.NodeOfType<ES5, "Identifier">;
/**
 * The node type for the ESTree `IfStatement` node.
 */
export declare type IfStatement = ast.NodeOfType<ES5, "IfStatement">;
/**
 * The node type for the ESTree `LabeledStatement` node.
 */
export declare type LabeledStatement = ast.NodeOfType<ES5, "LabeledStatement">;
/**
 * The node type for the ESTree `Literal` node.
 */
export declare type Literal = ast.NodeOfType<ES5, "Literal">;
/**
 * The node type for the ESTree `LogicalExpression` node.
 */
export declare type LogicalExpression = ast.NodeOfType<ES5, "LogicalExpression">;
/**
 * The node type for the ESTree `MemberExpression` node.
 */
export declare type MemberExpression = ast.NodeOfType<ES5, "MemberExpression">;
/**
 * The node type for the ESTree `NewExpression` node.
 */
export declare type NewExpression = ast.NodeOfType<ES5, "NewExpression">;
/**
 * The node type for the ESTree `ObjectExpression` node.
 */
export declare type ObjectExpression = ast.NodeOfType<ES5, "ObjectExpression">;
/**
 * The node type for the ESTree `Program` node.
 */
export declare type Program = ast.NodeOfType<ES5, "Program">;
/**
 * The node type for the ESTree `Property` node.
 */
export declare type Property = ast.NodeOfType<ES5, "Property">;
/**
 * The node type for the ESTree `ReturnStatement` node.
 */
export declare type ReturnStatement = ast.NodeOfType<ES5, "ReturnStatement">;
/**
 * The node type for the ESTree `SequenceExpression` node.
 */
export declare type SequenceExpression = ast.NodeOfType<ES5, "SequenceExpression">;
/**
 * The node type for the ESTree `SwitchCase` node.
 */
export declare type SwitchCase = ast.NodeOfType<ES5, "SwitchCase">;
/**
 * The node type for the ESTree `SwitchStatement` node.
 */
export declare type SwitchStatement = ast.NodeOfType<ES5, "SwitchStatement">;
/**
 * The node type for the ESTree `ThisExpression` node.
 */
export declare type ThisExpression = ast.NodeOfType<ES5, "ThisExpression">;
/**
 * The node type for the ESTree `ThrowStatement` node.
 */
export declare type ThrowStatement = ast.NodeOfType<ES5, "ThrowStatement">;
/**
 * The node type for the ESTree `TryStatement` node.
 */
export declare type TryStatement = ast.NodeOfType<ES5, "TryStatement">;
/**
 * The node type for the ESTree `UnaryExpression` node.
 */
export declare type UnaryExpression = ast.NodeOfType<ES5, "UnaryExpression">;
/**
 * The node type for the ESTree `UpdateExpression` node.
 */
export declare type UpdateExpression = ast.NodeOfType<ES5, "UpdateExpression">;
/**
 * The node type for the ESTree `VariableDeclaration` node.
 */
export declare type VariableDeclaration = ast.NodeOfType<ES5, "VariableDeclaration">;
/**
 * The node type for the ESTree `VariableDeclarator` node.
 */
export declare type VariableDeclarator = ast.NodeOfType<ES5, "VariableDeclarator">;
/**
 * The node type for the ESTree `WhileStatement` node.
 */
export declare type WhileStatement = ast.NodeOfType<ES5, "WhileStatement">;
/**
 * The node type for the ESTree `WithStatement` node.
 */
export declare type WithStatement = ast.NodeOfType<ES5, "WithStatement">;
