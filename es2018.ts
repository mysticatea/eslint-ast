// ========================================================================== //
// DON'T EDIT THIS FILE DIRECTLY!                                             //
// This file is automatically generated by the 'scripts/update-ast-files.ts'. //
// ========================================================================== //
/**
 * @fileoverview The AST types for ES2018.
 */
import * as ast from "./lib/ast"
import {
    Comment,
    Definition as ES2018,
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./es2018-definition"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

/** The map-like object that has all nodes and aliases. */
export type AST = ast.AST<ES2018>

/** The namespace that has all nodes and aliases. */
export namespace AST {
    /** The union type for all nodes. */
    export type Node = AST["Node"]
    /** The union type for the `ArrayPattern` alias. */
    export type ArrayPattern = AST["ArrayPattern"]
    /** The union type for the `AssignmentExpression` alias. */
    export type AssignmentExpression = AST["AssignmentExpression"]
    /** The union type for the `AssignmentPattern` alias. */
    export type AssignmentPattern = AST["AssignmentPattern"]
    /** The union type for the `AssignmentProperty` alias. */
    export type AssignmentProperty = AST["AssignmentProperty"]
    /** The union type for the `AssignmentTarget` alias. */
    export type AssignmentTarget = AST["AssignmentTarget"]
    /** The union type for the `BindingProperty` alias. */
    export type BindingProperty = AST["BindingProperty"]
    /** The union type for the `BindingTarget` alias. */
    export type BindingTarget = AST["BindingTarget"]
    /** The union type for the `Class` alias. */
    export type Class = AST["Class"]
    /** The union type for the `ClassDeclaration` alias. */
    export type ClassDeclaration = AST["ClassDeclaration"]
    /** The union type for the `Declaration` alias. */
    export type Declaration = AST["Declaration"]
    /** The union type for the `ExportNamedDeclaration` alias. */
    export type ExportNamedDeclaration = AST["ExportNamedDeclaration"]
    /** The union type for the `Expression` alias. */
    export type Expression = AST["Expression"]
    /** The union type for the `Function` alias. */
    export type Function = AST["Function"]
    /** The union type for the `FunctionDeclaration` alias. */
    export type FunctionDeclaration = AST["FunctionDeclaration"]
    /** The union type for the `Literal` alias. */
    export type Literal = AST["Literal"]
    /** The union type for the `LogicalExpression` alias. */
    export type LogicalExpression = AST["LogicalExpression"]
    /** The union type for the `MemberExpression` alias. */
    export type MemberExpression = AST["MemberExpression"]
    /** The union type for the `MethodDefinition` alias. */
    export type MethodDefinition = AST["MethodDefinition"]
    /** The union type for the `ModuleItem` alias. */
    export type ModuleItem = AST["ModuleItem"]
    /** The union type for the `ObjectPattern` alias. */
    export type ObjectPattern = AST["ObjectPattern"]
    /** The union type for the `ObjectProperty` alias. */
    export type ObjectProperty = AST["ObjectProperty"]
    /** The union type for the `Program` alias. */
    export type Program = AST["Program"]
    /** The union type for the `Property` alias. */
    export type Property = AST["Property"]
    /** The union type for the `RestElement` alias. */
    export type RestElement = AST["RestElement"]
    /** The union type for the `SimpleAssignmentTarget` alias. */
    export type SimpleAssignmentTarget = AST["SimpleAssignmentTarget"]
    /** The union type for the `Statement` alias. */
    export type Statement = AST["Statement"]
    /** The union type for the `StaticPropertyKey` alias. */
    export type StaticPropertyKey = AST["StaticPropertyKey"]
    /** The type for the `AccessorProperty` node. */
    export type AccessorProperty = AST["AccessorProperty"]
    /** The type for the `AnonymousDefaultExportedClassDeclaration` node. */
    export type AnonymousDefaultExportedClassDeclaration = AST["AnonymousDefaultExportedClassDeclaration"]
    /** The type for the `AnonymousDefaultExportedFunctionDeclaration` node. */
    export type AnonymousDefaultExportedFunctionDeclaration = AST["AnonymousDefaultExportedFunctionDeclaration"]
    /** The type for the `ArrayExpression` node. */
    export type ArrayExpression = AST["ArrayExpression"]
    /** The type for the `ArrowFunctionExpression` node. */
    export type ArrowFunctionExpression = AST["ArrowFunctionExpression"]
    /** The type for the `AssignmentArrayPattern` node. */
    export type AssignmentArrayPattern = AST["AssignmentArrayPattern"]
    /** The type for the `AssignmentAssignmentPattern` node. */
    export type AssignmentAssignmentPattern = AST["AssignmentAssignmentPattern"]
    /** The type for the `AssignmentComputedProperty` node. */
    export type AssignmentComputedProperty = AST["AssignmentComputedProperty"]
    /** The type for the `AssignmentObjectPattern` node. */
    export type AssignmentObjectPattern = AST["AssignmentObjectPattern"]
    /** The type for the `AssignmentPlainProperty` node. */
    export type AssignmentPlainProperty = AST["AssignmentPlainProperty"]
    /** The type for the `AssignmentRestElement` node. */
    export type AssignmentRestElement = AST["AssignmentRestElement"]
    /** The type for the `AssignmentRestProperty` node. */
    export type AssignmentRestProperty = AST["AssignmentRestProperty"]
    /** The type for the `AssignmentShorthandProperty` node. */
    export type AssignmentShorthandProperty = AST["AssignmentShorthandProperty"]
    /** The type for the `AwaitExpression` node. */
    export type AwaitExpression = AST["AwaitExpression"]
    /** The type for the `BinaryExpression` node. */
    export type BinaryExpression = AST["BinaryExpression"]
    /** The type for the `BindingArrayPattern` node. */
    export type BindingArrayPattern = AST["BindingArrayPattern"]
    /** The type for the `BindingAssignmentPattern` node. */
    export type BindingAssignmentPattern = AST["BindingAssignmentPattern"]
    /** The type for the `BindingComputedProperty` node. */
    export type BindingComputedProperty = AST["BindingComputedProperty"]
    /** The type for the `BindingObjectPattern` node. */
    export type BindingObjectPattern = AST["BindingObjectPattern"]
    /** The type for the `BindingPlainProperty` node. */
    export type BindingPlainProperty = AST["BindingPlainProperty"]
    /** The type for the `BindingRestElement` node. */
    export type BindingRestElement = AST["BindingRestElement"]
    /** The type for the `BindingRestProperty` node. */
    export type BindingRestProperty = AST["BindingRestProperty"]
    /** The type for the `BindingShorthandProperty` node. */
    export type BindingShorthandProperty = AST["BindingShorthandProperty"]
    /** The type for the `BlockStatement` node. */
    export type BlockStatement = AST["BlockStatement"]
    /** The type for the `BooleanLiteral` node. */
    export type BooleanLiteral = AST["BooleanLiteral"]
    /** The type for the `BreakStatement` node. */
    export type BreakStatement = AST["BreakStatement"]
    /** The type for the `CallExpression` node. */
    export type CallExpression = AST["CallExpression"]
    /** The type for the `CatchClause` node. */
    export type CatchClause = AST["CatchClause"]
    /** The type for the `ClassBody` node. */
    export type ClassBody = AST["ClassBody"]
    /** The type for the `ClassExpression` node. */
    export type ClassExpression = AST["ClassExpression"]
    /** The type for the `CompoundAssignmentExpression` node. */
    export type CompoundAssignmentExpression = AST["CompoundAssignmentExpression"]
    /** The type for the `ComputedAccessorProperty` node. */
    export type ComputedAccessorProperty = AST["ComputedAccessorProperty"]
    /** The type for the `ComputedMemberExpression` node. */
    export type ComputedMemberExpression = AST["ComputedMemberExpression"]
    /** The type for the `ComputedMethodDefinition` node. */
    export type ComputedMethodDefinition = AST["ComputedMethodDefinition"]
    /** The type for the `ComputedMethodProperty` node. */
    export type ComputedMethodProperty = AST["ComputedMethodProperty"]
    /** The type for the `ComputedProperty` node. */
    export type ComputedProperty = AST["ComputedProperty"]
    /** The type for the `ConditionalExpression` node. */
    export type ConditionalExpression = AST["ConditionalExpression"]
    /** The type for the `ConstructorDefinition` node. */
    export type ConstructorDefinition = AST["ConstructorDefinition"]
    /** The type for the `ContinueStatement` node. */
    export type ContinueStatement = AST["ContinueStatement"]
    /** The type for the `DebuggerStatement` node. */
    export type DebuggerStatement = AST["DebuggerStatement"]
    /** The type for the `DoWhileStatement` node. */
    export type DoWhileStatement = AST["DoWhileStatement"]
    /** The type for the `EmptyStatement` node. */
    export type EmptyStatement = AST["EmptyStatement"]
    /** The type for the `ExportAllDeclaration` node. */
    export type ExportAllDeclaration = AST["ExportAllDeclaration"]
    /** The type for the `ExportDefaultDeclaration` node. */
    export type ExportDefaultDeclaration = AST["ExportDefaultDeclaration"]
    /** The type for the `ExportNamedDeclDeclaration` node. */
    export type ExportNamedDeclDeclaration = AST["ExportNamedDeclDeclaration"]
    /** The type for the `ExportNamedFromDeclaration` node. */
    export type ExportNamedFromDeclaration = AST["ExportNamedFromDeclaration"]
    /** The type for the `ExportSpecifier` node. */
    export type ExportSpecifier = AST["ExportSpecifier"]
    /** The type for the `ExpressionStatement` node. */
    export type ExpressionStatement = AST["ExpressionStatement"]
    /** The type for the `ForInStatement` node. */
    export type ForInStatement = AST["ForInStatement"]
    /** The type for the `ForOfStatement` node. */
    export type ForOfStatement = AST["ForOfStatement"]
    /** The type for the `ForStatement` node. */
    export type ForStatement = AST["ForStatement"]
    /** The type for the `FunctionExpression` node. */
    export type FunctionExpression = AST["FunctionExpression"]
    /** The type for the `Identifier` node. */
    export type Identifier = AST["Identifier"]
    /** The type for the `IfStatement` node. */
    export type IfStatement = AST["IfStatement"]
    /** The type for the `ImportDeclaration` node. */
    export type ImportDeclaration = AST["ImportDeclaration"]
    /** The type for the `ImportDefaultSpecifier` node. */
    export type ImportDefaultSpecifier = AST["ImportDefaultSpecifier"]
    /** The type for the `ImportNamespaceSpecifier` node. */
    export type ImportNamespaceSpecifier = AST["ImportNamespaceSpecifier"]
    /** The type for the `ImportSpecifier` node. */
    export type ImportSpecifier = AST["ImportSpecifier"]
    /** The type for the `LabeledStatement` node. */
    export type LabeledStatement = AST["LabeledStatement"]
    /** The type for the `MetaProperty` node. */
    export type MetaProperty = AST["MetaProperty"]
    /** The type for the `MethodProperty` node. */
    export type MethodProperty = AST["MethodProperty"]
    /** The type for the `ModuleProgram` node. */
    export type ModuleProgram = AST["ModuleProgram"]
    /** The type for the `NewExpression` node. */
    export type NewExpression = AST["NewExpression"]
    /** The type for the `NullLiteral` node. */
    export type NullLiteral = AST["NullLiteral"]
    /** The type for the `NumberLiteral` node. */
    export type NumberLiteral = AST["NumberLiteral"]
    /** The type for the `ObjectExpression` node. */
    export type ObjectExpression = AST["ObjectExpression"]
    /** The type for the `PlainAssignmentExpression` node. */
    export type PlainAssignmentExpression = AST["PlainAssignmentExpression"]
    /** The type for the `PlainClassDeclaration` node. */
    export type PlainClassDeclaration = AST["PlainClassDeclaration"]
    /** The type for the `PlainFunctionDeclaration` node. */
    export type PlainFunctionDeclaration = AST["PlainFunctionDeclaration"]
    /** The type for the `PlainLogicalExpression` node. */
    export type PlainLogicalExpression = AST["PlainLogicalExpression"]
    /** The type for the `PlainMemberExpression` node. */
    export type PlainMemberExpression = AST["PlainMemberExpression"]
    /** The type for the `PlainMethodDefinition` node. */
    export type PlainMethodDefinition = AST["PlainMethodDefinition"]
    /** The type for the `PlainProperty` node. */
    export type PlainProperty = AST["PlainProperty"]
    /** The type for the `RegExpLiteral` node. */
    export type RegExpLiteral = AST["RegExpLiteral"]
    /** The type for the `ReturnStatement` node. */
    export type ReturnStatement = AST["ReturnStatement"]
    /** The type for the `ScriptProgram` node. */
    export type ScriptProgram = AST["ScriptProgram"]
    /** The type for the `SequenceExpression` node. */
    export type SequenceExpression = AST["SequenceExpression"]
    /** The type for the `ShorthandProperty` node. */
    export type ShorthandProperty = AST["ShorthandProperty"]
    /** The type for the `SpreadElement` node. */
    export type SpreadElement = AST["SpreadElement"]
    /** The type for the `StringLiteral` node. */
    export type StringLiteral = AST["StringLiteral"]
    /** The type for the `Super` node. */
    export type Super = AST["Super"]
    /** The type for the `SwitchCase` node. */
    export type SwitchCase = AST["SwitchCase"]
    /** The type for the `SwitchStatement` node. */
    export type SwitchStatement = AST["SwitchStatement"]
    /** The type for the `TaggedTemplateExpression` node. */
    export type TaggedTemplateExpression = AST["TaggedTemplateExpression"]
    /** The type for the `TemplateElement` node. */
    export type TemplateElement = AST["TemplateElement"]
    /** The type for the `TemplateLiteral` node. */
    export type TemplateLiteral = AST["TemplateLiteral"]
    /** The type for the `ThisExpression` node. */
    export type ThisExpression = AST["ThisExpression"]
    /** The type for the `ThrowStatement` node. */
    export type ThrowStatement = AST["ThrowStatement"]
    /** The type for the `TryStatement` node. */
    export type TryStatement = AST["TryStatement"]
    /** The type for the `UnaryExpression` node. */
    export type UnaryExpression = AST["UnaryExpression"]
    /** The type for the `UpdateExpression` node. */
    export type UpdateExpression = AST["UpdateExpression"]
    /** The type for the `VariableDeclaration` node. */
    export type VariableDeclaration = AST["VariableDeclaration"]
    /** The type for the `VariableDeclarator` node. */
    export type VariableDeclarator = AST["VariableDeclarator"]
    /** The type for the `WhileStatement` node. */
    export type WhileStatement = AST["WhileStatement"]
    /** The type for the `WithStatement` node. */
    export type WithStatement = AST["WithStatement"]
    /** The type for the `YieldExpression` node. */
    export type YieldExpression = AST["YieldExpression"]
}

/** The union type for all alias names. */
export type AliasName = ast.AliasName<ES2018>

/**
 * The union type for all node type names in TypeScript.
 *
 * This is not the node type of ESTree because it may represent each ESTree node
 * by multiple TypeScript types.
 * Use the `TypeName` type if you want ESTree node type names.
 */
export type NodeName = ast.NodeName<ES2018>

/**
 * The union type for all node type names in ESTree.
 *
 * This is not the type name in TypeScript because it may represent each ESTree
 * node by multiple TypeScript types.
 * Use the `NodeName` type if you want node type names in TypeScript.
 */
export type TypeName = ast.ASTType<ES2018>

/** The union type for all nodes. */
export type Node = AST["Node"]
/** The union type for the `ArrayPattern` alias. */
export type ArrayPattern = AST["ArrayPattern"]
/** The union type for the `AssignmentExpression` alias. */
export type AssignmentExpression = AST["AssignmentExpression"]
/** The union type for the `AssignmentPattern` alias. */
export type AssignmentPattern = AST["AssignmentPattern"]
/** The union type for the `AssignmentProperty` alias. */
export type AssignmentProperty = AST["AssignmentProperty"]
/** The union type for the `AssignmentTarget` alias. */
export type AssignmentTarget = AST["AssignmentTarget"]
/** The union type for the `BindingProperty` alias. */
export type BindingProperty = AST["BindingProperty"]
/** The union type for the `BindingTarget` alias. */
export type BindingTarget = AST["BindingTarget"]
/** The union type for the `Class` alias. */
export type Class = AST["Class"]
/** The union type for the `ClassDeclaration` alias. */
export type ClassDeclaration = AST["ClassDeclaration"]
/** The union type for the `Declaration` alias. */
export type Declaration = AST["Declaration"]
/** The union type for the `ExportNamedDeclaration` alias. */
export type ExportNamedDeclaration = AST["ExportNamedDeclaration"]
/** The union type for the `Expression` alias. */
export type Expression = AST["Expression"]
/** The union type for the `Function` alias. */
export type Function = AST["Function"]
/** The union type for the `FunctionDeclaration` alias. */
export type FunctionDeclaration = AST["FunctionDeclaration"]
/** The union type for the `Literal` alias. */
export type Literal = AST["Literal"]
/** The union type for the `LogicalExpression` alias. */
export type LogicalExpression = AST["LogicalExpression"]
/** The union type for the `MemberExpression` alias. */
export type MemberExpression = AST["MemberExpression"]
/** The union type for the `MethodDefinition` alias. */
export type MethodDefinition = AST["MethodDefinition"]
/** The union type for the `ModuleItem` alias. */
export type ModuleItem = AST["ModuleItem"]
/** The union type for the `ObjectPattern` alias. */
export type ObjectPattern = AST["ObjectPattern"]
/** The union type for the `ObjectProperty` alias. */
export type ObjectProperty = AST["ObjectProperty"]
/** The union type for the `Program` alias. */
export type Program = AST["Program"]
/** The union type for the `Property` alias. */
export type Property = AST["Property"]
/** The union type for the `RestElement` alias. */
export type RestElement = AST["RestElement"]
/** The union type for the `SimpleAssignmentTarget` alias. */
export type SimpleAssignmentTarget = AST["SimpleAssignmentTarget"]
/** The union type for the `Statement` alias. */
export type Statement = AST["Statement"]
/** The union type for the `StaticPropertyKey` alias. */
export type StaticPropertyKey = AST["StaticPropertyKey"]
/** The type for the `AccessorProperty` node. */
export type AccessorProperty = AST["AccessorProperty"]
/** The type for the `AnonymousDefaultExportedClassDeclaration` node. */
export type AnonymousDefaultExportedClassDeclaration = AST["AnonymousDefaultExportedClassDeclaration"]
/** The type for the `AnonymousDefaultExportedFunctionDeclaration` node. */
export type AnonymousDefaultExportedFunctionDeclaration = AST["AnonymousDefaultExportedFunctionDeclaration"]
/** The type for the `ArrayExpression` node. */
export type ArrayExpression = AST["ArrayExpression"]
/** The type for the `ArrowFunctionExpression` node. */
export type ArrowFunctionExpression = AST["ArrowFunctionExpression"]
/** The type for the `AssignmentArrayPattern` node. */
export type AssignmentArrayPattern = AST["AssignmentArrayPattern"]
/** The type for the `AssignmentAssignmentPattern` node. */
export type AssignmentAssignmentPattern = AST["AssignmentAssignmentPattern"]
/** The type for the `AssignmentComputedProperty` node. */
export type AssignmentComputedProperty = AST["AssignmentComputedProperty"]
/** The type for the `AssignmentObjectPattern` node. */
export type AssignmentObjectPattern = AST["AssignmentObjectPattern"]
/** The type for the `AssignmentPlainProperty` node. */
export type AssignmentPlainProperty = AST["AssignmentPlainProperty"]
/** The type for the `AssignmentRestElement` node. */
export type AssignmentRestElement = AST["AssignmentRestElement"]
/** The type for the `AssignmentRestProperty` node. */
export type AssignmentRestProperty = AST["AssignmentRestProperty"]
/** The type for the `AssignmentShorthandProperty` node. */
export type AssignmentShorthandProperty = AST["AssignmentShorthandProperty"]
/** The type for the `AwaitExpression` node. */
export type AwaitExpression = AST["AwaitExpression"]
/** The type for the `BinaryExpression` node. */
export type BinaryExpression = AST["BinaryExpression"]
/** The type for the `BindingArrayPattern` node. */
export type BindingArrayPattern = AST["BindingArrayPattern"]
/** The type for the `BindingAssignmentPattern` node. */
export type BindingAssignmentPattern = AST["BindingAssignmentPattern"]
/** The type for the `BindingComputedProperty` node. */
export type BindingComputedProperty = AST["BindingComputedProperty"]
/** The type for the `BindingObjectPattern` node. */
export type BindingObjectPattern = AST["BindingObjectPattern"]
/** The type for the `BindingPlainProperty` node. */
export type BindingPlainProperty = AST["BindingPlainProperty"]
/** The type for the `BindingRestElement` node. */
export type BindingRestElement = AST["BindingRestElement"]
/** The type for the `BindingRestProperty` node. */
export type BindingRestProperty = AST["BindingRestProperty"]
/** The type for the `BindingShorthandProperty` node. */
export type BindingShorthandProperty = AST["BindingShorthandProperty"]
/** The type for the `BlockStatement` node. */
export type BlockStatement = AST["BlockStatement"]
/** The type for the `BooleanLiteral` node. */
export type BooleanLiteral = AST["BooleanLiteral"]
/** The type for the `BreakStatement` node. */
export type BreakStatement = AST["BreakStatement"]
/** The type for the `CallExpression` node. */
export type CallExpression = AST["CallExpression"]
/** The type for the `CatchClause` node. */
export type CatchClause = AST["CatchClause"]
/** The type for the `ClassBody` node. */
export type ClassBody = AST["ClassBody"]
/** The type for the `ClassExpression` node. */
export type ClassExpression = AST["ClassExpression"]
/** The type for the `CompoundAssignmentExpression` node. */
export type CompoundAssignmentExpression = AST["CompoundAssignmentExpression"]
/** The type for the `ComputedAccessorProperty` node. */
export type ComputedAccessorProperty = AST["ComputedAccessorProperty"]
/** The type for the `ComputedMemberExpression` node. */
export type ComputedMemberExpression = AST["ComputedMemberExpression"]
/** The type for the `ComputedMethodDefinition` node. */
export type ComputedMethodDefinition = AST["ComputedMethodDefinition"]
/** The type for the `ComputedMethodProperty` node. */
export type ComputedMethodProperty = AST["ComputedMethodProperty"]
/** The type for the `ComputedProperty` node. */
export type ComputedProperty = AST["ComputedProperty"]
/** The type for the `ConditionalExpression` node. */
export type ConditionalExpression = AST["ConditionalExpression"]
/** The type for the `ConstructorDefinition` node. */
export type ConstructorDefinition = AST["ConstructorDefinition"]
/** The type for the `ContinueStatement` node. */
export type ContinueStatement = AST["ContinueStatement"]
/** The type for the `DebuggerStatement` node. */
export type DebuggerStatement = AST["DebuggerStatement"]
/** The type for the `DoWhileStatement` node. */
export type DoWhileStatement = AST["DoWhileStatement"]
/** The type for the `EmptyStatement` node. */
export type EmptyStatement = AST["EmptyStatement"]
/** The type for the `ExportAllDeclaration` node. */
export type ExportAllDeclaration = AST["ExportAllDeclaration"]
/** The type for the `ExportDefaultDeclaration` node. */
export type ExportDefaultDeclaration = AST["ExportDefaultDeclaration"]
/** The type for the `ExportNamedDeclDeclaration` node. */
export type ExportNamedDeclDeclaration = AST["ExportNamedDeclDeclaration"]
/** The type for the `ExportNamedFromDeclaration` node. */
export type ExportNamedFromDeclaration = AST["ExportNamedFromDeclaration"]
/** The type for the `ExportSpecifier` node. */
export type ExportSpecifier = AST["ExportSpecifier"]
/** The type for the `ExpressionStatement` node. */
export type ExpressionStatement = AST["ExpressionStatement"]
/** The type for the `ForInStatement` node. */
export type ForInStatement = AST["ForInStatement"]
/** The type for the `ForOfStatement` node. */
export type ForOfStatement = AST["ForOfStatement"]
/** The type for the `ForStatement` node. */
export type ForStatement = AST["ForStatement"]
/** The type for the `FunctionExpression` node. */
export type FunctionExpression = AST["FunctionExpression"]
/** The type for the `Identifier` node. */
export type Identifier = AST["Identifier"]
/** The type for the `IfStatement` node. */
export type IfStatement = AST["IfStatement"]
/** The type for the `ImportDeclaration` node. */
export type ImportDeclaration = AST["ImportDeclaration"]
/** The type for the `ImportDefaultSpecifier` node. */
export type ImportDefaultSpecifier = AST["ImportDefaultSpecifier"]
/** The type for the `ImportNamespaceSpecifier` node. */
export type ImportNamespaceSpecifier = AST["ImportNamespaceSpecifier"]
/** The type for the `ImportSpecifier` node. */
export type ImportSpecifier = AST["ImportSpecifier"]
/** The type for the `LabeledStatement` node. */
export type LabeledStatement = AST["LabeledStatement"]
/** The type for the `MetaProperty` node. */
export type MetaProperty = AST["MetaProperty"]
/** The type for the `MethodProperty` node. */
export type MethodProperty = AST["MethodProperty"]
/** The type for the `ModuleProgram` node. */
export type ModuleProgram = AST["ModuleProgram"]
/** The type for the `NewExpression` node. */
export type NewExpression = AST["NewExpression"]
/** The type for the `NullLiteral` node. */
export type NullLiteral = AST["NullLiteral"]
/** The type for the `NumberLiteral` node. */
export type NumberLiteral = AST["NumberLiteral"]
/** The type for the `ObjectExpression` node. */
export type ObjectExpression = AST["ObjectExpression"]
/** The type for the `PlainAssignmentExpression` node. */
export type PlainAssignmentExpression = AST["PlainAssignmentExpression"]
/** The type for the `PlainClassDeclaration` node. */
export type PlainClassDeclaration = AST["PlainClassDeclaration"]
/** The type for the `PlainFunctionDeclaration` node. */
export type PlainFunctionDeclaration = AST["PlainFunctionDeclaration"]
/** The type for the `PlainLogicalExpression` node. */
export type PlainLogicalExpression = AST["PlainLogicalExpression"]
/** The type for the `PlainMemberExpression` node. */
export type PlainMemberExpression = AST["PlainMemberExpression"]
/** The type for the `PlainMethodDefinition` node. */
export type PlainMethodDefinition = AST["PlainMethodDefinition"]
/** The type for the `PlainProperty` node. */
export type PlainProperty = AST["PlainProperty"]
/** The type for the `RegExpLiteral` node. */
export type RegExpLiteral = AST["RegExpLiteral"]
/** The type for the `ReturnStatement` node. */
export type ReturnStatement = AST["ReturnStatement"]
/** The type for the `ScriptProgram` node. */
export type ScriptProgram = AST["ScriptProgram"]
/** The type for the `SequenceExpression` node. */
export type SequenceExpression = AST["SequenceExpression"]
/** The type for the `ShorthandProperty` node. */
export type ShorthandProperty = AST["ShorthandProperty"]
/** The type for the `SpreadElement` node. */
export type SpreadElement = AST["SpreadElement"]
/** The type for the `StringLiteral` node. */
export type StringLiteral = AST["StringLiteral"]
/** The type for the `Super` node. */
export type Super = AST["Super"]
/** The type for the `SwitchCase` node. */
export type SwitchCase = AST["SwitchCase"]
/** The type for the `SwitchStatement` node. */
export type SwitchStatement = AST["SwitchStatement"]
/** The type for the `TaggedTemplateExpression` node. */
export type TaggedTemplateExpression = AST["TaggedTemplateExpression"]
/** The type for the `TemplateElement` node. */
export type TemplateElement = AST["TemplateElement"]
/** The type for the `TemplateLiteral` node. */
export type TemplateLiteral = AST["TemplateLiteral"]
/** The type for the `ThisExpression` node. */
export type ThisExpression = AST["ThisExpression"]
/** The type for the `ThrowStatement` node. */
export type ThrowStatement = AST["ThrowStatement"]
/** The type for the `TryStatement` node. */
export type TryStatement = AST["TryStatement"]
/** The type for the `UnaryExpression` node. */
export type UnaryExpression = AST["UnaryExpression"]
/** The type for the `UpdateExpression` node. */
export type UpdateExpression = AST["UpdateExpression"]
/** The type for the `VariableDeclaration` node. */
export type VariableDeclaration = AST["VariableDeclaration"]
/** The type for the `VariableDeclarator` node. */
export type VariableDeclarator = AST["VariableDeclarator"]
/** The type for the `WhileStatement` node. */
export type WhileStatement = AST["WhileStatement"]
/** The type for the `WithStatement` node. */
export type WithStatement = AST["WithStatement"]
/** The type for the `YieldExpression` node. */
export type YieldExpression = AST["YieldExpression"]
