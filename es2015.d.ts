/**
 * @fileoverview The AST definition for ES2015.
 */
import * as ast from "./lib/ast";
import { Definition as ES2015 } from "./es2015-definition";
/**
 * The map-like object that has all nodes and aliases.
 */
export declare type AST = ast.AST<ES2015>;
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
     * The union type for the `AssignmentProperty` alias.
     */
    type AssignmentProperty = AST["AssignmentProperty"];
    /**
     * The union type for the `AssignmentTarget` alias.
     */
    type AssignmentTarget = AST["AssignmentTarget"];
    /**
     * The union type for the `BindingProperty` alias.
     */
    type BindingProperty = AST["BindingProperty"];
    /**
     * The union type for the `BindingTarget` alias.
     */
    type BindingTarget = AST["BindingTarget"];
    /**
     * The union type for the `Class` alias.
     */
    type Class = AST["Class"];
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
     * The union type for the `MethodDefinition` alias.
     */
    type MethodDefinition = AST["MethodDefinition"];
    /**
     * The union type for the `ModuleItem` alias.
     */
    type ModuleItem = AST["ModuleItem"];
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
     * The node type for the `AnonymousDefaultExportedClassDeclaration` node.
     */
    type AnonymousDefaultExportedClassDeclaration = AST["AnonymousDefaultExportedClassDeclaration"];
    /**
     * The node type for the `AnonymousDefaultExportedFunctionDeclaration` node.
     */
    type AnonymousDefaultExportedFunctionDeclaration = AST["AnonymousDefaultExportedFunctionDeclaration"];
    /**
     * The node type for the `ArrayExpression` node.
     */
    type ArrayExpression = AST["ArrayExpression"];
    /**
     * The node type for the `ArrowFunctionExpression` node.
     */
    type ArrowFunctionExpression = AST["ArrowFunctionExpression"];
    /**
     * The node type for the `AssignmentArrayPattern` node.
     */
    type AssignmentArrayPattern = AST["AssignmentArrayPattern"];
    /**
     * The node type for the `AssignmentAssignmentPattern` node.
     */
    type AssignmentAssignmentPattern = AST["AssignmentAssignmentPattern"];
    /**
     * The node type for the `AssignmentComputedProperty` node.
     */
    type AssignmentComputedProperty = AST["AssignmentComputedProperty"];
    /**
     * The node type for the `AssignmentObjectPattern` node.
     */
    type AssignmentObjectPattern = AST["AssignmentObjectPattern"];
    /**
     * The node type for the `AssignmentRestElement` node.
     */
    type AssignmentRestElement = AST["AssignmentRestElement"];
    /**
     * The node type for the `AssignmentShorthandProperty` node.
     */
    type AssignmentShorthandProperty = AST["AssignmentShorthandProperty"];
    /**
     * The node type for the `AssignmentSimpleProperty` node.
     */
    type AssignmentSimpleProperty = AST["AssignmentSimpleProperty"];
    /**
     * The node type for the `BinaryExpression` node.
     */
    type BinaryExpression = AST["BinaryExpression"];
    /**
     * The node type for the `BindingArrayPattern` node.
     */
    type BindingArrayPattern = AST["BindingArrayPattern"];
    /**
     * The node type for the `BindingAssignmentPattern` node.
     */
    type BindingAssignmentPattern = AST["BindingAssignmentPattern"];
    /**
     * The node type for the `BindingComputedProperty` node.
     */
    type BindingComputedProperty = AST["BindingComputedProperty"];
    /**
     * The node type for the `BindingObjectPattern` node.
     */
    type BindingObjectPattern = AST["BindingObjectPattern"];
    /**
     * The node type for the `BindingRestElement` node.
     */
    type BindingRestElement = AST["BindingRestElement"];
    /**
     * The node type for the `BindingShorthandProperty` node.
     */
    type BindingShorthandProperty = AST["BindingShorthandProperty"];
    /**
     * The node type for the `BindingSimpleProperty` node.
     */
    type BindingSimpleProperty = AST["BindingSimpleProperty"];
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
     * The node type for the `ClassBody` node.
     */
    type ClassBody = AST["ClassBody"];
    /**
     * The node type for the `ClassDeclaration` node.
     */
    type ClassDeclaration = AST["ClassDeclaration"];
    /**
     * The node type for the `ClassExpression` node.
     */
    type ClassExpression = AST["ClassExpression"];
    /**
     * The node type for the `CompoundAssignmentExpression` node.
     */
    type CompoundAssignmentExpression = AST["CompoundAssignmentExpression"];
    /**
     * The node type for the `ComputedAccessorProperty` node.
     */
    type ComputedAccessorProperty = AST["ComputedAccessorProperty"];
    /**
     * The node type for the `ComputedMemberExpression` node.
     */
    type ComputedMemberExpression = AST["ComputedMemberExpression"];
    /**
     * The node type for the `ComputedMethodDefinition` node.
     */
    type ComputedMethodDefinition = AST["ComputedMethodDefinition"];
    /**
     * The node type for the `ComputedMethodProperty` node.
     */
    type ComputedMethodProperty = AST["ComputedMethodProperty"];
    /**
     * The node type for the `ComputedProperty` node.
     */
    type ComputedProperty = AST["ComputedProperty"];
    /**
     * The node type for the `ConditionalExpression` node.
     */
    type ConditionalExpression = AST["ConditionalExpression"];
    /**
     * The node type for the `ConstructorDefinition` node.
     */
    type ConstructorDefinition = AST["ConstructorDefinition"];
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
     * The node type for the `ExportDefaultDeclaration` node.
     */
    type ExportDefaultDeclaration = AST["ExportDefaultDeclaration"];
    /**
     * The node type for the `ExportNamedDeclaration` node.
     */
    type ExportNamedDeclaration = AST["ExportNamedDeclaration"];
    /**
     * The node type for the `ExportSpecifier` node.
     */
    type ExportSpecifier = AST["ExportSpecifier"];
    /**
     * The node type for the `ExpressionStatement` node.
     */
    type ExpressionStatement = AST["ExpressionStatement"];
    /**
     * The node type for the `ForInStatement` node.
     */
    type ForInStatement = AST["ForInStatement"];
    /**
     * The node type for the `ForOfStatement` node.
     */
    type ForOfStatement = AST["ForOfStatement"];
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
     * The node type for the `ImportDeclaration` node.
     */
    type ImportDeclaration = AST["ImportDeclaration"];
    /**
     * The node type for the `ImportDefaultSpecifier` node.
     */
    type ImportDefaultSpecifier = AST["ImportDefaultSpecifier"];
    /**
     * The node type for the `ImportNamespaceSpecifier` node.
     */
    type ImportNamespaceSpecifier = AST["ImportNamespaceSpecifier"];
    /**
     * The node type for the `ImportSpecifier` node.
     */
    type ImportSpecifier = AST["ImportSpecifier"];
    /**
     * The node type for the `LabeledStatement` node.
     */
    type LabeledStatement = AST["LabeledStatement"];
    /**
     * The node type for the `LogicalExpression` node.
     */
    type LogicalExpression = AST["LogicalExpression"];
    /**
     * The node type for the `MetaProperty` node.
     */
    type MetaProperty = AST["MetaProperty"];
    /**
     * The node type for the `MethodProperty` node.
     */
    type MethodProperty = AST["MethodProperty"];
    /**
     * The node type for the `ModuleProgram` node.
     */
    type ModuleProgram = AST["ModuleProgram"];
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
     * The node type for the `ReexportAllDeclaration` node.
     */
    type ReexportAllDeclaration = AST["ReexportAllDeclaration"];
    /**
     * The node type for the `ReexportNamedDeclaration` node.
     */
    type ReexportNamedDeclaration = AST["ReexportNamedDeclaration"];
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
     * The node type for the `ShorthandProperty` node.
     */
    type ShorthandProperty = AST["ShorthandProperty"];
    /**
     * The node type for the `SimpleAssignmentExpression` node.
     */
    type SimpleAssignmentExpression = AST["SimpleAssignmentExpression"];
    /**
     * The node type for the `SimpleMemberExpression` node.
     */
    type SimpleMemberExpression = AST["SimpleMemberExpression"];
    /**
     * The node type for the `SimpleMethodDefinition` node.
     */
    type SimpleMethodDefinition = AST["SimpleMethodDefinition"];
    /**
     * The node type for the `SimpleProperty` node.
     */
    type SimpleProperty = AST["SimpleProperty"];
    /**
     * The node type for the `SpreadElement` node.
     */
    type SpreadElement = AST["SpreadElement"];
    /**
     * The node type for the `StringLiteral` node.
     */
    type StringLiteral = AST["StringLiteral"];
    /**
     * The node type for the `Super` node.
     */
    type Super = AST["Super"];
    /**
     * The node type for the `SwitchCase` node.
     */
    type SwitchCase = AST["SwitchCase"];
    /**
     * The node type for the `SwitchStatement` node.
     */
    type SwitchStatement = AST["SwitchStatement"];
    /**
     * The node type for the `TaggedTemplateExpression` node.
     */
    type TaggedTemplateExpression = AST["TaggedTemplateExpression"];
    /**
     * The node type for the `TemplateElement` node.
     */
    type TemplateElement = AST["TemplateElement"];
    /**
     * The node type for the `TemplateLiteral` node.
     */
    type TemplateLiteral = AST["TemplateLiteral"];
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
    /**
     * The node type for the `YieldExpression` node.
     */
    type YieldExpression = AST["YieldExpression"];
}
/**
 * The union type for all alias names.
 */
export declare type AliasName = ast.AliasName<ES2015>;
/**
 * The union type for all node type names in TypeScript.
 *
 * This is not the node type of ESTree because it may represent each ESTree node
 * by multiple TypeScript types.
 * Use the `TypeName` type if you want ESTree node type names.
 */
export declare type NodeName = ast.NodeName<ES2015>;
/**
 * The union type for all node type names in ESTree.
 *
 * This is not the type name in TypeScript because it may represent each ESTree
 * node by multiple TypeScript types.
 * Use the `NodeName` type if you want node type names in TypeScript.
 */
export declare type TypeName = ast.ASTType<ES2015>;
/**
 * The union type for all nodes.
 */
export declare type Node = AST.Node;
/**
 * The union type for all statement nodes.
 * This union type doesn't include module items. Refer the `ModuleItem` type as well.
 */
export declare type Statement = AST.Statement;
/**
 * The union type for all module item nodes.
 */
export declare type ModuleItem = AST.ModuleItem;
/**
 * The union type for all expression nodes.
 */
export declare type Expression = AST.Expression;
/**
 * The node type for the ESTree `ArrayExpression` node.
 */
export declare type ArrayExpression = ast.NodeOfType<ES2015, "ArrayExpression">;
/**
 * The node type for the ESTree `ArrayPattern` node.
 */
export declare type ArrayPattern = ast.NodeOfType<ES2015, "ArrayPattern">;
/**
 * The node type for the ESTree `ArrowFunctionExpression` node.
 */
export declare type ArrowFunctionExpression = ast.NodeOfType<ES2015, "ArrowFunctionExpression">;
/**
 * The node type for the ESTree `AssignmentExpression` node.
 */
export declare type AssignmentExpression = ast.NodeOfType<ES2015, "AssignmentExpression">;
/**
 * The node type for the ESTree `AssignmentPattern` node.
 */
export declare type AssignmentPattern = ast.NodeOfType<ES2015, "AssignmentPattern">;
/**
 * The node type for the ESTree `BinaryExpression` node.
 */
export declare type BinaryExpression = ast.NodeOfType<ES2015, "BinaryExpression">;
/**
 * The node type for the ESTree `BlockStatement` node.
 */
export declare type BlockStatement = ast.NodeOfType<ES2015, "BlockStatement">;
/**
 * The node type for the ESTree `BreakStatement` node.
 */
export declare type BreakStatement = ast.NodeOfType<ES2015, "BreakStatement">;
/**
 * The node type for the ESTree `CallExpression` node.
 */
export declare type CallExpression = ast.NodeOfType<ES2015, "CallExpression">;
/**
 * The node type for the ESTree `CatchClause` node.
 */
export declare type CatchClause = ast.NodeOfType<ES2015, "CatchClause">;
/**
 * The node type for the ESTree `ClassBody` node.
 */
export declare type ClassBody = ast.NodeOfType<ES2015, "ClassBody">;
/**
 * The node type for the ESTree `ClassDeclaration` node.
 */
export declare type ClassDeclaration = ast.NodeOfType<ES2015, "ClassDeclaration">;
/**
 * The node type for the ESTree `ClassExpression` node.
 */
export declare type ClassExpression = ast.NodeOfType<ES2015, "ClassExpression">;
/**
 * The node type for the ESTree `ConditionalExpression` node.
 */
export declare type ConditionalExpression = ast.NodeOfType<ES2015, "ConditionalExpression">;
/**
 * The node type for the ESTree `ContinueStatement` node.
 */
export declare type ContinueStatement = ast.NodeOfType<ES2015, "ContinueStatement">;
/**
 * The node type for the ESTree `DebuggerStatement` node.
 */
export declare type DebuggerStatement = ast.NodeOfType<ES2015, "DebuggerStatement">;
/**
 * The node type for the ESTree `DoWhileStatement` node.
 */
export declare type DoWhileStatement = ast.NodeOfType<ES2015, "DoWhileStatement">;
/**
 * The node type for the ESTree `EmptyStatement` node.
 */
export declare type EmptyStatement = ast.NodeOfType<ES2015, "EmptyStatement">;
/**
 * The node type for the ESTree `ExportAllDeclaration` node.
 */
export declare type ExportAllDeclaration = ast.NodeOfType<ES2015, "ExportAllDeclaration">;
/**
 * The node type for the ESTree `ExportDefaultDeclaration` node.
 */
export declare type ExportDefaultDeclaration = ast.NodeOfType<ES2015, "ExportDefaultDeclaration">;
/**
 * The node type for the ESTree `ExportNamedDeclaration` node.
 */
export declare type ExportNamedDeclaration = ast.NodeOfType<ES2015, "ExportNamedDeclaration">;
/**
 * The node type for the ESTree `ExportSpecifier` node.
 */
export declare type ExportSpecifier = ast.NodeOfType<ES2015, "ExportSpecifier">;
/**
 * The node type for the ESTree `ExpressionStatement` node.
 */
export declare type ExpressionStatement = ast.NodeOfType<ES2015, "ExpressionStatement">;
/**
 * The node type for the ESTree `ForInStatement` node.
 */
export declare type ForInStatement = ast.NodeOfType<ES2015, "ForInStatement">;
/**
 * The node type for the ESTree `ForOfStatement` node.
 */
export declare type ForOfStatement = ast.NodeOfType<ES2015, "ForOfStatement">;
/**
 * The node type for the ESTree `ForStatement` node.
 */
export declare type ForStatement = ast.NodeOfType<ES2015, "ForStatement">;
/**
 * The node type for the ESTree `FunctionDeclaration` node.
 */
export declare type FunctionDeclaration = ast.NodeOfType<ES2015, "FunctionDeclaration">;
/**
 * The node type for the ESTree `FunctionExpression` node.
 */
export declare type FunctionExpression = ast.NodeOfType<ES2015, "FunctionExpression">;
/**
 * The node type for the ESTree `Identifier` node.
 */
export declare type Identifier = ast.NodeOfType<ES2015, "Identifier">;
/**
 * The node type for the ESTree `IfStatement` node.
 */
export declare type IfStatement = ast.NodeOfType<ES2015, "IfStatement">;
/**
 * The node type for the ESTree `ImportDeclaration` node.
 */
export declare type ImportDeclaration = ast.NodeOfType<ES2015, "ImportDeclaration">;
/**
 * The node type for the ESTree `ImportDefaultSpecifier` node.
 */
export declare type ImportDefaultSpecifier = ast.NodeOfType<ES2015, "ImportDefaultSpecifier">;
/**
 * The node type for the ESTree `ImportNamespaceSpecifier` node.
 */
export declare type ImportNamespaceSpecifier = ast.NodeOfType<ES2015, "ImportNamespaceSpecifier">;
/**
 * The node type for the ESTree `ImportSpecifier` node.
 */
export declare type ImportSpecifier = ast.NodeOfType<ES2015, "ImportSpecifier">;
/**
 * The node type for the ESTree `LabeledStatement` node.
 */
export declare type LabeledStatement = ast.NodeOfType<ES2015, "LabeledStatement">;
/**
 * The node type for the ESTree `Literal` node.
 */
export declare type Literal = ast.NodeOfType<ES2015, "Literal">;
/**
 * The node type for the ESTree `LogicalExpression` node.
 */
export declare type LogicalExpression = ast.NodeOfType<ES2015, "LogicalExpression">;
/**
 * The node type for the ESTree `MemberExpression` node.
 */
export declare type MemberExpression = ast.NodeOfType<ES2015, "MemberExpression">;
/**
 * The node type for the ESTree `MetaProperty` node.
 */
export declare type MetaProperty = ast.NodeOfType<ES2015, "MetaProperty">;
/**
 * The node type for the ESTree `MethodDefinition` node.
 */
export declare type MethodDefinition = ast.NodeOfType<ES2015, "MethodDefinition">;
/**
 * The node type for the ESTree `NewExpression` node.
 */
export declare type NewExpression = ast.NodeOfType<ES2015, "NewExpression">;
/**
 * The node type for the ESTree `ObjectExpression` node.
 */
export declare type ObjectExpression = ast.NodeOfType<ES2015, "ObjectExpression">;
/**
 * The node type for the ESTree `ObjectPattern` node.
 */
export declare type ObjectPattern = ast.NodeOfType<ES2015, "ObjectPattern">;
/**
 * The node type for the ESTree `Program` node.
 */
export declare type Program = ast.NodeOfType<ES2015, "Program">;
/**
 * The node type for the ESTree `Property` node.
 */
export declare type Property = ast.NodeOfType<ES2015, "Property">;
/**
 * The node type for the ESTree `RestElement` node.
 */
export declare type RestElement = ast.NodeOfType<ES2015, "RestElement">;
/**
 * The node type for the ESTree `ReturnStatement` node.
 */
export declare type ReturnStatement = ast.NodeOfType<ES2015, "ReturnStatement">;
/**
 * The node type for the ESTree `SequenceExpression` node.
 */
export declare type SequenceExpression = ast.NodeOfType<ES2015, "SequenceExpression">;
/**
 * The node type for the ESTree `SpreadElement` node.
 */
export declare type SpreadElement = ast.NodeOfType<ES2015, "SpreadElement">;
/**
 * The node type for the ESTree `Super` node.
 */
export declare type Super = ast.NodeOfType<ES2015, "Super">;
/**
 * The node type for the ESTree `SwitchCase` node.
 */
export declare type SwitchCase = ast.NodeOfType<ES2015, "SwitchCase">;
/**
 * The node type for the ESTree `SwitchStatement` node.
 */
export declare type SwitchStatement = ast.NodeOfType<ES2015, "SwitchStatement">;
/**
 * The node type for the ESTree `TaggedTemplateExpression` node.
 */
export declare type TaggedTemplateExpression = ast.NodeOfType<ES2015, "TaggedTemplateExpression">;
/**
 * The node type for the ESTree `TemplateElement` node.
 */
export declare type TemplateElement = ast.NodeOfType<ES2015, "TemplateElement">;
/**
 * The node type for the ESTree `TemplateLiteral` node.
 */
export declare type TemplateLiteral = ast.NodeOfType<ES2015, "TemplateLiteral">;
/**
 * The node type for the ESTree `ThisExpression` node.
 */
export declare type ThisExpression = ast.NodeOfType<ES2015, "ThisExpression">;
/**
 * The node type for the ESTree `ThrowStatement` node.
 */
export declare type ThrowStatement = ast.NodeOfType<ES2015, "ThrowStatement">;
/**
 * The node type for the ESTree `TryStatement` node.
 */
export declare type TryStatement = ast.NodeOfType<ES2015, "TryStatement">;
/**
 * The node type for the ESTree `UnaryExpression` node.
 */
export declare type UnaryExpression = ast.NodeOfType<ES2015, "UnaryExpression">;
/**
 * The node type for the ESTree `UpdateExpression` node.
 */
export declare type UpdateExpression = ast.NodeOfType<ES2015, "UpdateExpression">;
/**
 * The node type for the ESTree `VariableDeclaration` node.
 */
export declare type VariableDeclaration = ast.NodeOfType<ES2015, "VariableDeclaration">;
/**
 * The node type for the ESTree `VariableDeclarator` node.
 */
export declare type VariableDeclarator = ast.NodeOfType<ES2015, "VariableDeclarator">;
/**
 * The node type for the ESTree `WhileStatement` node.
 */
export declare type WhileStatement = ast.NodeOfType<ES2015, "WhileStatement">;
/**
 * The node type for the ESTree `WithStatement` node.
 */
export declare type WithStatement = ast.NodeOfType<ES2015, "WithStatement">;
/**
 * The node type for the ESTree `YieldExpression` node.
 */
export declare type YieldExpression = ast.NodeOfType<ES2015, "YieldExpression">;
