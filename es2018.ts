// ========================================================================== //
// DON'T EDIT THIS FILE DIRECTLY!                                             //
// This file is automatically generated by the 'scripts/update-ast-files.ts'. //
// ========================================================================== //
/**
 * @fileoverview The AST definition for ES2018.
 */
import * as ast from "./lib/ast"
import { Definition as ES2018 } from "./es2018-definition"

/**
 * The map-like object that has all nodes and aliases.
 */
export type AST = ast.AST<ES2018>

/**
 * The namespace that has all nodes and aliases.
 */
export namespace AST {
    /**
     * The union type for all nodes.
     */
    export type Node = AST["Node"]

    /**
     * The union type for the `AssignmentExpression` alias.
     */
    export type AssignmentExpression = AST["AssignmentExpression"]

    /**
     * The union type for the `AssignmentProperty` alias.
     */
    export type AssignmentProperty = AST["AssignmentProperty"]

    /**
     * The union type for the `AssignmentTarget` alias.
     */
    export type AssignmentTarget = AST["AssignmentTarget"]

    /**
     * The union type for the `BindingProperty` alias.
     */
    export type BindingProperty = AST["BindingProperty"]

    /**
     * The union type for the `BindingTarget` alias.
     */
    export type BindingTarget = AST["BindingTarget"]

    /**
     * The union type for the `Class` alias.
     */
    export type Class = AST["Class"]

    /**
     * The union type for the `Declaration` alias.
     */
    export type Declaration = AST["Declaration"]

    /**
     * The union type for the `Expression` alias.
     */
    export type Expression = AST["Expression"]

    /**
     * The union type for the `Function` alias.
     */
    export type Function = AST["Function"]

    /**
     * The union type for the `Literal` alias.
     */
    export type Literal = AST["Literal"]

    /**
     * The union type for the `MemberExpression` alias.
     */
    export type MemberExpression = AST["MemberExpression"]

    /**
     * The union type for the `MethodDefinition` alias.
     */
    export type MethodDefinition = AST["MethodDefinition"]

    /**
     * The union type for the `ModuleItem` alias.
     */
    export type ModuleItem = AST["ModuleItem"]

    /**
     * The union type for the `Program` alias.
     */
    export type Program = AST["Program"]

    /**
     * The union type for the `Property` alias.
     */
    export type Property = AST["Property"]

    /**
     * The union type for the `SimpleAssignmentTarget` alias.
     */
    export type SimpleAssignmentTarget = AST["SimpleAssignmentTarget"]

    /**
     * The union type for the `Statement` alias.
     */
    export type Statement = AST["Statement"]

    /**
     * The union type for the `StaticPropertyKey` alias.
     */
    export type StaticPropertyKey = AST["StaticPropertyKey"]

    /**
     * The node type for the `AccessorProperty` node.
     */
    export type AccessorProperty = AST["AccessorProperty"]

    /**
     * The node type for the `AnonymousDefaultExportedClassDeclaration` node.
     */
    export type AnonymousDefaultExportedClassDeclaration = AST["AnonymousDefaultExportedClassDeclaration"]

    /**
     * The node type for the `AnonymousDefaultExportedFunctionDeclaration` node.
     */
    export type AnonymousDefaultExportedFunctionDeclaration = AST["AnonymousDefaultExportedFunctionDeclaration"]

    /**
     * The node type for the `ArrayExpression` node.
     */
    export type ArrayExpression = AST["ArrayExpression"]

    /**
     * The node type for the `ArrowFunctionExpression` node.
     */
    export type ArrowFunctionExpression = AST["ArrowFunctionExpression"]

    /**
     * The node type for the `AssignmentArrayPattern` node.
     */
    export type AssignmentArrayPattern = AST["AssignmentArrayPattern"]

    /**
     * The node type for the `AssignmentAssignmentPattern` node.
     */
    export type AssignmentAssignmentPattern = AST["AssignmentAssignmentPattern"]

    /**
     * The node type for the `AssignmentComputedProperty` node.
     */
    export type AssignmentComputedProperty = AST["AssignmentComputedProperty"]

    /**
     * The node type for the `AssignmentObjectPattern` node.
     */
    export type AssignmentObjectPattern = AST["AssignmentObjectPattern"]

    /**
     * The node type for the `AssignmentRestElement` node.
     */
    export type AssignmentRestElement = AST["AssignmentRestElement"]

    /**
     * The node type for the `AssignmentShorthandProperty` node.
     */
    export type AssignmentShorthandProperty = AST["AssignmentShorthandProperty"]

    /**
     * The node type for the `AssignmentSimpleProperty` node.
     */
    export type AssignmentSimpleProperty = AST["AssignmentSimpleProperty"]

    /**
     * The node type for the `AwaitExpression` node.
     */
    export type AwaitExpression = AST["AwaitExpression"]

    /**
     * The node type for the `BinaryExpression` node.
     */
    export type BinaryExpression = AST["BinaryExpression"]

    /**
     * The node type for the `BindingArrayPattern` node.
     */
    export type BindingArrayPattern = AST["BindingArrayPattern"]

    /**
     * The node type for the `BindingAssignmentPattern` node.
     */
    export type BindingAssignmentPattern = AST["BindingAssignmentPattern"]

    /**
     * The node type for the `BindingComputedProperty` node.
     */
    export type BindingComputedProperty = AST["BindingComputedProperty"]

    /**
     * The node type for the `BindingObjectPattern` node.
     */
    export type BindingObjectPattern = AST["BindingObjectPattern"]

    /**
     * The node type for the `BindingRestElement` node.
     */
    export type BindingRestElement = AST["BindingRestElement"]

    /**
     * The node type for the `BindingShorthandProperty` node.
     */
    export type BindingShorthandProperty = AST["BindingShorthandProperty"]

    /**
     * The node type for the `BindingSimpleProperty` node.
     */
    export type BindingSimpleProperty = AST["BindingSimpleProperty"]

    /**
     * The node type for the `BlockStatement` node.
     */
    export type BlockStatement = AST["BlockStatement"]

    /**
     * The node type for the `BooleanLiteral` node.
     */
    export type BooleanLiteral = AST["BooleanLiteral"]

    /**
     * The node type for the `BreakStatement` node.
     */
    export type BreakStatement = AST["BreakStatement"]

    /**
     * The node type for the `CallExpression` node.
     */
    export type CallExpression = AST["CallExpression"]

    /**
     * The node type for the `CatchClause` node.
     */
    export type CatchClause = AST["CatchClause"]

    /**
     * The node type for the `ClassBody` node.
     */
    export type ClassBody = AST["ClassBody"]

    /**
     * The node type for the `ClassDeclaration` node.
     */
    export type ClassDeclaration = AST["ClassDeclaration"]

    /**
     * The node type for the `ClassExpression` node.
     */
    export type ClassExpression = AST["ClassExpression"]

    /**
     * The node type for the `CompoundAssignmentExpression` node.
     */
    export type CompoundAssignmentExpression = AST["CompoundAssignmentExpression"]

    /**
     * The node type for the `ComputedAccessorProperty` node.
     */
    export type ComputedAccessorProperty = AST["ComputedAccessorProperty"]

    /**
     * The node type for the `ComputedMemberExpression` node.
     */
    export type ComputedMemberExpression = AST["ComputedMemberExpression"]

    /**
     * The node type for the `ComputedMethodDefinition` node.
     */
    export type ComputedMethodDefinition = AST["ComputedMethodDefinition"]

    /**
     * The node type for the `ComputedMethodProperty` node.
     */
    export type ComputedMethodProperty = AST["ComputedMethodProperty"]

    /**
     * The node type for the `ComputedProperty` node.
     */
    export type ComputedProperty = AST["ComputedProperty"]

    /**
     * The node type for the `ConditionalExpression` node.
     */
    export type ConditionalExpression = AST["ConditionalExpression"]

    /**
     * The node type for the `ConstructorDefinition` node.
     */
    export type ConstructorDefinition = AST["ConstructorDefinition"]

    /**
     * The node type for the `ContinueStatement` node.
     */
    export type ContinueStatement = AST["ContinueStatement"]

    /**
     * The node type for the `DebuggerStatement` node.
     */
    export type DebuggerStatement = AST["DebuggerStatement"]

    /**
     * The node type for the `DirectiveStatement` node.
     */
    export type DirectiveStatement = AST["DirectiveStatement"]

    /**
     * The node type for the `DoWhileStatement` node.
     */
    export type DoWhileStatement = AST["DoWhileStatement"]

    /**
     * The node type for the `EmptyStatement` node.
     */
    export type EmptyStatement = AST["EmptyStatement"]

    /**
     * The node type for the `ExportDefaultDeclaration` node.
     */
    export type ExportDefaultDeclaration = AST["ExportDefaultDeclaration"]

    /**
     * The node type for the `ExportNamedDeclaration` node.
     */
    export type ExportNamedDeclaration = AST["ExportNamedDeclaration"]

    /**
     * The node type for the `ExportSpecifier` node.
     */
    export type ExportSpecifier = AST["ExportSpecifier"]

    /**
     * The node type for the `ExpressionStatement` node.
     */
    export type ExpressionStatement = AST["ExpressionStatement"]

    /**
     * The node type for the `ForInStatement` node.
     */
    export type ForInStatement = AST["ForInStatement"]

    /**
     * The node type for the `ForOfStatement` node.
     */
    export type ForOfStatement = AST["ForOfStatement"]

    /**
     * The node type for the `ForStatement` node.
     */
    export type ForStatement = AST["ForStatement"]

    /**
     * The node type for the `FunctionDeclaration` node.
     */
    export type FunctionDeclaration = AST["FunctionDeclaration"]

    /**
     * The node type for the `FunctionExpression` node.
     */
    export type FunctionExpression = AST["FunctionExpression"]

    /**
     * The node type for the `Identifier` node.
     */
    export type Identifier = AST["Identifier"]

    /**
     * The node type for the `IfStatement` node.
     */
    export type IfStatement = AST["IfStatement"]

    /**
     * The node type for the `ImportDeclaration` node.
     */
    export type ImportDeclaration = AST["ImportDeclaration"]

    /**
     * The node type for the `ImportDefaultSpecifier` node.
     */
    export type ImportDefaultSpecifier = AST["ImportDefaultSpecifier"]

    /**
     * The node type for the `ImportNamespaceSpecifier` node.
     */
    export type ImportNamespaceSpecifier = AST["ImportNamespaceSpecifier"]

    /**
     * The node type for the `ImportSpecifier` node.
     */
    export type ImportSpecifier = AST["ImportSpecifier"]

    /**
     * The node type for the `LabeledStatement` node.
     */
    export type LabeledStatement = AST["LabeledStatement"]

    /**
     * The node type for the `LogicalExpression` node.
     */
    export type LogicalExpression = AST["LogicalExpression"]

    /**
     * The node type for the `MetaProperty` node.
     */
    export type MetaProperty = AST["MetaProperty"]

    /**
     * The node type for the `MethodProperty` node.
     */
    export type MethodProperty = AST["MethodProperty"]

    /**
     * The node type for the `ModuleProgram` node.
     */
    export type ModuleProgram = AST["ModuleProgram"]

    /**
     * The node type for the `NewExpression` node.
     */
    export type NewExpression = AST["NewExpression"]

    /**
     * The node type for the `NullLiteral` node.
     */
    export type NullLiteral = AST["NullLiteral"]

    /**
     * The node type for the `NumberLiteral` node.
     */
    export type NumberLiteral = AST["NumberLiteral"]

    /**
     * The node type for the `ObjectExpression` node.
     */
    export type ObjectExpression = AST["ObjectExpression"]

    /**
     * The node type for the `ReexportAllDeclaration` node.
     */
    export type ReexportAllDeclaration = AST["ReexportAllDeclaration"]

    /**
     * The node type for the `ReexportNamedDeclaration` node.
     */
    export type ReexportNamedDeclaration = AST["ReexportNamedDeclaration"]

    /**
     * The node type for the `RegExpLiteral` node.
     */
    export type RegExpLiteral = AST["RegExpLiteral"]

    /**
     * The node type for the `ReturnStatement` node.
     */
    export type ReturnStatement = AST["ReturnStatement"]

    /**
     * The node type for the `ScriptProgram` node.
     */
    export type ScriptProgram = AST["ScriptProgram"]

    /**
     * The node type for the `SequenceExpression` node.
     */
    export type SequenceExpression = AST["SequenceExpression"]

    /**
     * The node type for the `ShorthandProperty` node.
     */
    export type ShorthandProperty = AST["ShorthandProperty"]

    /**
     * The node type for the `SimpleAssignmentExpression` node.
     */
    export type SimpleAssignmentExpression = AST["SimpleAssignmentExpression"]

    /**
     * The node type for the `SimpleMemberExpression` node.
     */
    export type SimpleMemberExpression = AST["SimpleMemberExpression"]

    /**
     * The node type for the `SimpleMethodDefinition` node.
     */
    export type SimpleMethodDefinition = AST["SimpleMethodDefinition"]

    /**
     * The node type for the `SimpleProperty` node.
     */
    export type SimpleProperty = AST["SimpleProperty"]

    /**
     * The node type for the `SpreadElement` node.
     */
    export type SpreadElement = AST["SpreadElement"]

    /**
     * The node type for the `StringLiteral` node.
     */
    export type StringLiteral = AST["StringLiteral"]

    /**
     * The node type for the `Super` node.
     */
    export type Super = AST["Super"]

    /**
     * The node type for the `SwitchCase` node.
     */
    export type SwitchCase = AST["SwitchCase"]

    /**
     * The node type for the `SwitchStatement` node.
     */
    export type SwitchStatement = AST["SwitchStatement"]

    /**
     * The node type for the `TaggedTemplateExpression` node.
     */
    export type TaggedTemplateExpression = AST["TaggedTemplateExpression"]

    /**
     * The node type for the `TemplateElement` node.
     */
    export type TemplateElement = AST["TemplateElement"]

    /**
     * The node type for the `TemplateLiteral` node.
     */
    export type TemplateLiteral = AST["TemplateLiteral"]

    /**
     * The node type for the `ThisExpression` node.
     */
    export type ThisExpression = AST["ThisExpression"]

    /**
     * The node type for the `ThrowStatement` node.
     */
    export type ThrowStatement = AST["ThrowStatement"]

    /**
     * The node type for the `TryStatement` node.
     */
    export type TryStatement = AST["TryStatement"]

    /**
     * The node type for the `UnaryExpression` node.
     */
    export type UnaryExpression = AST["UnaryExpression"]

    /**
     * The node type for the `UpdateExpression` node.
     */
    export type UpdateExpression = AST["UpdateExpression"]

    /**
     * The node type for the `VariableDeclaration` node.
     */
    export type VariableDeclaration = AST["VariableDeclaration"]

    /**
     * The node type for the `VariableDeclarator` node.
     */
    export type VariableDeclarator = AST["VariableDeclarator"]

    /**
     * The node type for the `WhileStatement` node.
     */
    export type WhileStatement = AST["WhileStatement"]

    /**
     * The node type for the `WithStatement` node.
     */
    export type WithStatement = AST["WithStatement"]

    /**
     * The node type for the `YieldExpression` node.
     */
    export type YieldExpression = AST["YieldExpression"]
}

/**
 * The union type for all alias names.
 */
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

/**
 * The union type for all nodes.
 */
export type Node = AST.Node

/**
 * The union type for all statement nodes.
 * This union type doesn't include module items. Refer the `ModuleItem` type as well.
 */
export type Statement = AST.Statement

/**
 * The union type for all module item nodes.
 */
export type ModuleItem = AST.ModuleItem

/**
 * The union type for all expression nodes.
 */
export type Expression = AST.Expression

/**
 * The node type for the ESTree `ArrayExpression` node.
 */
export type ArrayExpression = ast.NodeOfType<ES2018, "ArrayExpression">

/**
 * The node type for the ESTree `ArrayPattern` node.
 */
export type ArrayPattern = ast.NodeOfType<ES2018, "ArrayPattern">

/**
 * The node type for the ESTree `ArrowFunctionExpression` node.
 */
export type ArrowFunctionExpression = ast.NodeOfType<
    ES2018,
    "ArrowFunctionExpression"
>

/**
 * The node type for the ESTree `AssignmentExpression` node.
 */
export type AssignmentExpression = ast.NodeOfType<
    ES2018,
    "AssignmentExpression"
>

/**
 * The node type for the ESTree `AssignmentPattern` node.
 */
export type AssignmentPattern = ast.NodeOfType<ES2018, "AssignmentPattern">

/**
 * The node type for the ESTree `AwaitExpression` node.
 */
export type AwaitExpression = ast.NodeOfType<ES2018, "AwaitExpression">

/**
 * The node type for the ESTree `BinaryExpression` node.
 */
export type BinaryExpression = ast.NodeOfType<ES2018, "BinaryExpression">

/**
 * The node type for the ESTree `BlockStatement` node.
 */
export type BlockStatement = ast.NodeOfType<ES2018, "BlockStatement">

/**
 * The node type for the ESTree `BreakStatement` node.
 */
export type BreakStatement = ast.NodeOfType<ES2018, "BreakStatement">

/**
 * The node type for the ESTree `CallExpression` node.
 */
export type CallExpression = ast.NodeOfType<ES2018, "CallExpression">

/**
 * The node type for the ESTree `CatchClause` node.
 */
export type CatchClause = ast.NodeOfType<ES2018, "CatchClause">

/**
 * The node type for the ESTree `ClassBody` node.
 */
export type ClassBody = ast.NodeOfType<ES2018, "ClassBody">

/**
 * The node type for the ESTree `ClassDeclaration` node.
 */
export type ClassDeclaration = ast.NodeOfType<ES2018, "ClassDeclaration">

/**
 * The node type for the ESTree `ClassExpression` node.
 */
export type ClassExpression = ast.NodeOfType<ES2018, "ClassExpression">

/**
 * The node type for the ESTree `ConditionalExpression` node.
 */
export type ConditionalExpression = ast.NodeOfType<
    ES2018,
    "ConditionalExpression"
>

/**
 * The node type for the ESTree `ContinueStatement` node.
 */
export type ContinueStatement = ast.NodeOfType<ES2018, "ContinueStatement">

/**
 * The node type for the ESTree `DebuggerStatement` node.
 */
export type DebuggerStatement = ast.NodeOfType<ES2018, "DebuggerStatement">

/**
 * The node type for the ESTree `DoWhileStatement` node.
 */
export type DoWhileStatement = ast.NodeOfType<ES2018, "DoWhileStatement">

/**
 * The node type for the ESTree `EmptyStatement` node.
 */
export type EmptyStatement = ast.NodeOfType<ES2018, "EmptyStatement">

/**
 * The node type for the ESTree `ExportAllDeclaration` node.
 */
export type ExportAllDeclaration = ast.NodeOfType<
    ES2018,
    "ExportAllDeclaration"
>

/**
 * The node type for the ESTree `ExportDefaultDeclaration` node.
 */
export type ExportDefaultDeclaration = ast.NodeOfType<
    ES2018,
    "ExportDefaultDeclaration"
>

/**
 * The node type for the ESTree `ExportNamedDeclaration` node.
 */
export type ExportNamedDeclaration = ast.NodeOfType<
    ES2018,
    "ExportNamedDeclaration"
>

/**
 * The node type for the ESTree `ExportSpecifier` node.
 */
export type ExportSpecifier = ast.NodeOfType<ES2018, "ExportSpecifier">

/**
 * The node type for the ESTree `ExpressionStatement` node.
 */
export type ExpressionStatement = ast.NodeOfType<ES2018, "ExpressionStatement">

/**
 * The node type for the ESTree `ForInStatement` node.
 */
export type ForInStatement = ast.NodeOfType<ES2018, "ForInStatement">

/**
 * The node type for the ESTree `ForOfStatement` node.
 */
export type ForOfStatement = ast.NodeOfType<ES2018, "ForOfStatement">

/**
 * The node type for the ESTree `ForStatement` node.
 */
export type ForStatement = ast.NodeOfType<ES2018, "ForStatement">

/**
 * The node type for the ESTree `FunctionDeclaration` node.
 */
export type FunctionDeclaration = ast.NodeOfType<ES2018, "FunctionDeclaration">

/**
 * The node type for the ESTree `FunctionExpression` node.
 */
export type FunctionExpression = ast.NodeOfType<ES2018, "FunctionExpression">

/**
 * The node type for the ESTree `Identifier` node.
 */
export type Identifier = ast.NodeOfType<ES2018, "Identifier">

/**
 * The node type for the ESTree `IfStatement` node.
 */
export type IfStatement = ast.NodeOfType<ES2018, "IfStatement">

/**
 * The node type for the ESTree `ImportDeclaration` node.
 */
export type ImportDeclaration = ast.NodeOfType<ES2018, "ImportDeclaration">

/**
 * The node type for the ESTree `ImportDefaultSpecifier` node.
 */
export type ImportDefaultSpecifier = ast.NodeOfType<
    ES2018,
    "ImportDefaultSpecifier"
>

/**
 * The node type for the ESTree `ImportNamespaceSpecifier` node.
 */
export type ImportNamespaceSpecifier = ast.NodeOfType<
    ES2018,
    "ImportNamespaceSpecifier"
>

/**
 * The node type for the ESTree `ImportSpecifier` node.
 */
export type ImportSpecifier = ast.NodeOfType<ES2018, "ImportSpecifier">

/**
 * The node type for the ESTree `LabeledStatement` node.
 */
export type LabeledStatement = ast.NodeOfType<ES2018, "LabeledStatement">

/**
 * The node type for the ESTree `Literal` node.
 */
export type Literal = ast.NodeOfType<ES2018, "Literal">

/**
 * The node type for the ESTree `LogicalExpression` node.
 */
export type LogicalExpression = ast.NodeOfType<ES2018, "LogicalExpression">

/**
 * The node type for the ESTree `MemberExpression` node.
 */
export type MemberExpression = ast.NodeOfType<ES2018, "MemberExpression">

/**
 * The node type for the ESTree `MetaProperty` node.
 */
export type MetaProperty = ast.NodeOfType<ES2018, "MetaProperty">

/**
 * The node type for the ESTree `MethodDefinition` node.
 */
export type MethodDefinition = ast.NodeOfType<ES2018, "MethodDefinition">

/**
 * The node type for the ESTree `NewExpression` node.
 */
export type NewExpression = ast.NodeOfType<ES2018, "NewExpression">

/**
 * The node type for the ESTree `ObjectExpression` node.
 */
export type ObjectExpression = ast.NodeOfType<ES2018, "ObjectExpression">

/**
 * The node type for the ESTree `ObjectPattern` node.
 */
export type ObjectPattern = ast.NodeOfType<ES2018, "ObjectPattern">

/**
 * The node type for the ESTree `Program` node.
 */
export type Program = ast.NodeOfType<ES2018, "Program">

/**
 * The node type for the ESTree `Property` node.
 */
export type Property = ast.NodeOfType<ES2018, "Property">

/**
 * The node type for the ESTree `RestElement` node.
 */
export type RestElement = ast.NodeOfType<ES2018, "RestElement">

/**
 * The node type for the ESTree `ReturnStatement` node.
 */
export type ReturnStatement = ast.NodeOfType<ES2018, "ReturnStatement">

/**
 * The node type for the ESTree `SequenceExpression` node.
 */
export type SequenceExpression = ast.NodeOfType<ES2018, "SequenceExpression">

/**
 * The node type for the ESTree `SpreadElement` node.
 */
export type SpreadElement = ast.NodeOfType<ES2018, "SpreadElement">

/**
 * The node type for the ESTree `Super` node.
 */
export type Super = ast.NodeOfType<ES2018, "Super">

/**
 * The node type for the ESTree `SwitchCase` node.
 */
export type SwitchCase = ast.NodeOfType<ES2018, "SwitchCase">

/**
 * The node type for the ESTree `SwitchStatement` node.
 */
export type SwitchStatement = ast.NodeOfType<ES2018, "SwitchStatement">

/**
 * The node type for the ESTree `TaggedTemplateExpression` node.
 */
export type TaggedTemplateExpression = ast.NodeOfType<
    ES2018,
    "TaggedTemplateExpression"
>

/**
 * The node type for the ESTree `TemplateElement` node.
 */
export type TemplateElement = ast.NodeOfType<ES2018, "TemplateElement">

/**
 * The node type for the ESTree `TemplateLiteral` node.
 */
export type TemplateLiteral = ast.NodeOfType<ES2018, "TemplateLiteral">

/**
 * The node type for the ESTree `ThisExpression` node.
 */
export type ThisExpression = ast.NodeOfType<ES2018, "ThisExpression">

/**
 * The node type for the ESTree `ThrowStatement` node.
 */
export type ThrowStatement = ast.NodeOfType<ES2018, "ThrowStatement">

/**
 * The node type for the ESTree `TryStatement` node.
 */
export type TryStatement = ast.NodeOfType<ES2018, "TryStatement">

/**
 * The node type for the ESTree `UnaryExpression` node.
 */
export type UnaryExpression = ast.NodeOfType<ES2018, "UnaryExpression">

/**
 * The node type for the ESTree `UpdateExpression` node.
 */
export type UpdateExpression = ast.NodeOfType<ES2018, "UpdateExpression">

/**
 * The node type for the ESTree `VariableDeclaration` node.
 */
export type VariableDeclaration = ast.NodeOfType<ES2018, "VariableDeclaration">

/**
 * The node type for the ESTree `VariableDeclarator` node.
 */
export type VariableDeclarator = ast.NodeOfType<ES2018, "VariableDeclarator">

/**
 * The node type for the ESTree `WhileStatement` node.
 */
export type WhileStatement = ast.NodeOfType<ES2018, "WhileStatement">

/**
 * The node type for the ESTree `WithStatement` node.
 */
export type WithStatement = ast.NodeOfType<ES2018, "WithStatement">

/**
 * The node type for the ESTree `YieldExpression` node.
 */
export type YieldExpression = ast.NodeOfType<ES2018, "YieldExpression">