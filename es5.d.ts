/**
 * @fileoverview The AST types for ES5.
 */
import * as ast from "./lib/ast";
import { Comment, Definition as ES5, IndexRange, LineColumnRange, LineColumn, Token } from "./es5-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
/** The map-like object that has all nodes and aliases. */
export declare type AST = ast.AST<ES5>;
/** The namespace that has all nodes and aliases. */
export declare namespace AST {
    /** The union type for all nodes. */
    type Node = AST["Node"];
    /** The union type for the `AssignmentExpression` alias. */
    type AssignmentExpression = AST["AssignmentExpression"];
    /** The union type for the `AssignmentTarget` alias. */
    type AssignmentTarget = AST["AssignmentTarget"];
    /** The union type for the `BindingTarget` alias. */
    type BindingTarget = AST["BindingTarget"];
    /** The union type for the `Declaration` alias. */
    type Declaration = AST["Declaration"];
    /** The union type for the `Expression` alias. */
    type Expression = AST["Expression"];
    /** The union type for the `Function` alias. */
    type Function = AST["Function"];
    /** The union type for the `FunctionDeclaration` alias. */
    type FunctionDeclaration = AST["FunctionDeclaration"];
    /** The union type for the `Literal` alias. */
    type Literal = AST["Literal"];
    /** The union type for the `LogicalExpression` alias. */
    type LogicalExpression = AST["LogicalExpression"];
    /** The union type for the `MemberExpression` alias. */
    type MemberExpression = AST["MemberExpression"];
    /** The union type for the `ObjectProperty` alias. */
    type ObjectProperty = AST["ObjectProperty"];
    /** The union type for the `Program` alias. */
    type Program = AST["Program"];
    /** The union type for the `Property` alias. */
    type Property = AST["Property"];
    /** The union type for the `SimpleAssignmentTarget` alias. */
    type SimpleAssignmentTarget = AST["SimpleAssignmentTarget"];
    /** The union type for the `Statement` alias. */
    type Statement = AST["Statement"];
    /** The union type for the `StaticPropertyKey` alias. */
    type StaticPropertyKey = AST["StaticPropertyKey"];
    /** The type for the `AccessorProperty` node. */
    type AccessorProperty = AST["AccessorProperty"];
    /** The type for the `ArrayExpression` node. */
    type ArrayExpression = AST["ArrayExpression"];
    /** The type for the `BinaryExpression` node. */
    type BinaryExpression = AST["BinaryExpression"];
    /** The type for the `BlockStatement` node. */
    type BlockStatement = AST["BlockStatement"];
    /** The type for the `BooleanLiteral` node. */
    type BooleanLiteral = AST["BooleanLiteral"];
    /** The type for the `BreakStatement` node. */
    type BreakStatement = AST["BreakStatement"];
    /** The type for the `CallExpression` node. */
    type CallExpression = AST["CallExpression"];
    /** The type for the `CatchClause` node. */
    type CatchClause = AST["CatchClause"];
    /** The type for the `CompoundAssignmentExpression` node. */
    type CompoundAssignmentExpression = AST["CompoundAssignmentExpression"];
    /** The type for the `ComputedMemberExpression` node. */
    type ComputedMemberExpression = AST["ComputedMemberExpression"];
    /** The type for the `ConditionalExpression` node. */
    type ConditionalExpression = AST["ConditionalExpression"];
    /** The type for the `ContinueStatement` node. */
    type ContinueStatement = AST["ContinueStatement"];
    /** The type for the `DebuggerStatement` node. */
    type DebuggerStatement = AST["DebuggerStatement"];
    /** The type for the `DoWhileStatement` node. */
    type DoWhileStatement = AST["DoWhileStatement"];
    /** The type for the `EmptyStatement` node. */
    type EmptyStatement = AST["EmptyStatement"];
    /** The type for the `ExpressionStatement` node. */
    type ExpressionStatement = AST["ExpressionStatement"];
    /** The type for the `ForInStatement` node. */
    type ForInStatement = AST["ForInStatement"];
    /** The type for the `ForStatement` node. */
    type ForStatement = AST["ForStatement"];
    /** The type for the `FunctionExpression` node. */
    type FunctionExpression = AST["FunctionExpression"];
    /** The type for the `Identifier` node. */
    type Identifier = AST["Identifier"];
    /** The type for the `IfStatement` node. */
    type IfStatement = AST["IfStatement"];
    /** The type for the `LabeledStatement` node. */
    type LabeledStatement = AST["LabeledStatement"];
    /** The type for the `NewExpression` node. */
    type NewExpression = AST["NewExpression"];
    /** The type for the `NullLiteral` node. */
    type NullLiteral = AST["NullLiteral"];
    /** The type for the `NumberLiteral` node. */
    type NumberLiteral = AST["NumberLiteral"];
    /** The type for the `ObjectExpression` node. */
    type ObjectExpression = AST["ObjectExpression"];
    /** The type for the `PlainAssignmentExpression` node. */
    type PlainAssignmentExpression = AST["PlainAssignmentExpression"];
    /** The type for the `PlainFunctionDeclaration` node. */
    type PlainFunctionDeclaration = AST["PlainFunctionDeclaration"];
    /** The type for the `PlainLogicalExpression` node. */
    type PlainLogicalExpression = AST["PlainLogicalExpression"];
    /** The type for the `PlainMemberExpression` node. */
    type PlainMemberExpression = AST["PlainMemberExpression"];
    /** The type for the `PlainProperty` node. */
    type PlainProperty = AST["PlainProperty"];
    /** The type for the `RegExpLiteral` node. */
    type RegExpLiteral = AST["RegExpLiteral"];
    /** The type for the `ReturnStatement` node. */
    type ReturnStatement = AST["ReturnStatement"];
    /** The type for the `ScriptProgram` node. */
    type ScriptProgram = AST["ScriptProgram"];
    /** The type for the `SequenceExpression` node. */
    type SequenceExpression = AST["SequenceExpression"];
    /** The type for the `StringLiteral` node. */
    type StringLiteral = AST["StringLiteral"];
    /** The type for the `SwitchCase` node. */
    type SwitchCase = AST["SwitchCase"];
    /** The type for the `SwitchStatement` node. */
    type SwitchStatement = AST["SwitchStatement"];
    /** The type for the `ThisExpression` node. */
    type ThisExpression = AST["ThisExpression"];
    /** The type for the `ThrowStatement` node. */
    type ThrowStatement = AST["ThrowStatement"];
    /** The type for the `TryStatement` node. */
    type TryStatement = AST["TryStatement"];
    /** The type for the `UnaryExpression` node. */
    type UnaryExpression = AST["UnaryExpression"];
    /** The type for the `UpdateExpression` node. */
    type UpdateExpression = AST["UpdateExpression"];
    /** The type for the `VariableDeclaration` node. */
    type VariableDeclaration = AST["VariableDeclaration"];
    /** The type for the `VariableDeclarator` node. */
    type VariableDeclarator = AST["VariableDeclarator"];
    /** The type for the `WhileStatement` node. */
    type WhileStatement = AST["WhileStatement"];
    /** The type for the `WithStatement` node. */
    type WithStatement = AST["WithStatement"];
}
/** The union type for all alias names. */
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
/** The union type for all nodes. */
export declare type Node = AST["Node"];
/** The union type for the `AssignmentExpression` alias. */
export declare type AssignmentExpression = AST["AssignmentExpression"];
/** The union type for the `AssignmentTarget` alias. */
export declare type AssignmentTarget = AST["AssignmentTarget"];
/** The union type for the `BindingTarget` alias. */
export declare type BindingTarget = AST["BindingTarget"];
/** The union type for the `Declaration` alias. */
export declare type Declaration = AST["Declaration"];
/** The union type for the `Expression` alias. */
export declare type Expression = AST["Expression"];
/** The union type for the `Function` alias. */
export declare type Function = AST["Function"];
/** The union type for the `FunctionDeclaration` alias. */
export declare type FunctionDeclaration = AST["FunctionDeclaration"];
/** The union type for the `Literal` alias. */
export declare type Literal = AST["Literal"];
/** The union type for the `LogicalExpression` alias. */
export declare type LogicalExpression = AST["LogicalExpression"];
/** The union type for the `MemberExpression` alias. */
export declare type MemberExpression = AST["MemberExpression"];
/** The union type for the `ObjectProperty` alias. */
export declare type ObjectProperty = AST["ObjectProperty"];
/** The union type for the `Program` alias. */
export declare type Program = AST["Program"];
/** The union type for the `Property` alias. */
export declare type Property = AST["Property"];
/** The union type for the `SimpleAssignmentTarget` alias. */
export declare type SimpleAssignmentTarget = AST["SimpleAssignmentTarget"];
/** The union type for the `Statement` alias. */
export declare type Statement = AST["Statement"];
/** The union type for the `StaticPropertyKey` alias. */
export declare type StaticPropertyKey = AST["StaticPropertyKey"];
/** The type for the `AccessorProperty` node. */
export declare type AccessorProperty = AST["AccessorProperty"];
/** The type for the `ArrayExpression` node. */
export declare type ArrayExpression = AST["ArrayExpression"];
/** The type for the `BinaryExpression` node. */
export declare type BinaryExpression = AST["BinaryExpression"];
/** The type for the `BlockStatement` node. */
export declare type BlockStatement = AST["BlockStatement"];
/** The type for the `BooleanLiteral` node. */
export declare type BooleanLiteral = AST["BooleanLiteral"];
/** The type for the `BreakStatement` node. */
export declare type BreakStatement = AST["BreakStatement"];
/** The type for the `CallExpression` node. */
export declare type CallExpression = AST["CallExpression"];
/** The type for the `CatchClause` node. */
export declare type CatchClause = AST["CatchClause"];
/** The type for the `CompoundAssignmentExpression` node. */
export declare type CompoundAssignmentExpression = AST["CompoundAssignmentExpression"];
/** The type for the `ComputedMemberExpression` node. */
export declare type ComputedMemberExpression = AST["ComputedMemberExpression"];
/** The type for the `ConditionalExpression` node. */
export declare type ConditionalExpression = AST["ConditionalExpression"];
/** The type for the `ContinueStatement` node. */
export declare type ContinueStatement = AST["ContinueStatement"];
/** The type for the `DebuggerStatement` node. */
export declare type DebuggerStatement = AST["DebuggerStatement"];
/** The type for the `DoWhileStatement` node. */
export declare type DoWhileStatement = AST["DoWhileStatement"];
/** The type for the `EmptyStatement` node. */
export declare type EmptyStatement = AST["EmptyStatement"];
/** The type for the `ExpressionStatement` node. */
export declare type ExpressionStatement = AST["ExpressionStatement"];
/** The type for the `ForInStatement` node. */
export declare type ForInStatement = AST["ForInStatement"];
/** The type for the `ForStatement` node. */
export declare type ForStatement = AST["ForStatement"];
/** The type for the `FunctionExpression` node. */
export declare type FunctionExpression = AST["FunctionExpression"];
/** The type for the `Identifier` node. */
export declare type Identifier = AST["Identifier"];
/** The type for the `IfStatement` node. */
export declare type IfStatement = AST["IfStatement"];
/** The type for the `LabeledStatement` node. */
export declare type LabeledStatement = AST["LabeledStatement"];
/** The type for the `NewExpression` node. */
export declare type NewExpression = AST["NewExpression"];
/** The type for the `NullLiteral` node. */
export declare type NullLiteral = AST["NullLiteral"];
/** The type for the `NumberLiteral` node. */
export declare type NumberLiteral = AST["NumberLiteral"];
/** The type for the `ObjectExpression` node. */
export declare type ObjectExpression = AST["ObjectExpression"];
/** The type for the `PlainAssignmentExpression` node. */
export declare type PlainAssignmentExpression = AST["PlainAssignmentExpression"];
/** The type for the `PlainFunctionDeclaration` node. */
export declare type PlainFunctionDeclaration = AST["PlainFunctionDeclaration"];
/** The type for the `PlainLogicalExpression` node. */
export declare type PlainLogicalExpression = AST["PlainLogicalExpression"];
/** The type for the `PlainMemberExpression` node. */
export declare type PlainMemberExpression = AST["PlainMemberExpression"];
/** The type for the `PlainProperty` node. */
export declare type PlainProperty = AST["PlainProperty"];
/** The type for the `RegExpLiteral` node. */
export declare type RegExpLiteral = AST["RegExpLiteral"];
/** The type for the `ReturnStatement` node. */
export declare type ReturnStatement = AST["ReturnStatement"];
/** The type for the `ScriptProgram` node. */
export declare type ScriptProgram = AST["ScriptProgram"];
/** The type for the `SequenceExpression` node. */
export declare type SequenceExpression = AST["SequenceExpression"];
/** The type for the `StringLiteral` node. */
export declare type StringLiteral = AST["StringLiteral"];
/** The type for the `SwitchCase` node. */
export declare type SwitchCase = AST["SwitchCase"];
/** The type for the `SwitchStatement` node. */
export declare type SwitchStatement = AST["SwitchStatement"];
/** The type for the `ThisExpression` node. */
export declare type ThisExpression = AST["ThisExpression"];
/** The type for the `ThrowStatement` node. */
export declare type ThrowStatement = AST["ThrowStatement"];
/** The type for the `TryStatement` node. */
export declare type TryStatement = AST["TryStatement"];
/** The type for the `UnaryExpression` node. */
export declare type UnaryExpression = AST["UnaryExpression"];
/** The type for the `UpdateExpression` node. */
export declare type UpdateExpression = AST["UpdateExpression"];
/** The type for the `VariableDeclaration` node. */
export declare type VariableDeclaration = AST["VariableDeclaration"];
/** The type for the `VariableDeclarator` node. */
export declare type VariableDeclarator = AST["VariableDeclarator"];
/** The type for the `WhileStatement` node. */
export declare type WhileStatement = AST["WhileStatement"];
/** The type for the `WithStatement` node. */
export declare type WithStatement = AST["WithStatement"];
