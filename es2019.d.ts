/**
 * @fileoverview The AST types for ES2019.
 */
import * as ast from "./lib/ast";
import { Comment, Definition as ES2019, IndexRange, LineColumnRange, LineColumn, Token } from "./es2019-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
/** The map-like object that has all nodes and aliases. */
export declare type AST = ast.AST<ES2019>;
/** The namespace that has all nodes and aliases. */
export declare namespace AST {
    /** The union type for all nodes. */
    type Node = AST["Node"];
    /** The union type for the `ArrayPattern` alias. */
    type ArrayPattern = AST["ArrayPattern"];
    /** The union type for the `AssignmentExpression` alias. */
    type AssignmentExpression = AST["AssignmentExpression"];
    /** The union type for the `AssignmentPattern` alias. */
    type AssignmentPattern = AST["AssignmentPattern"];
    /** The union type for the `AssignmentProperty` alias. */
    type AssignmentProperty = AST["AssignmentProperty"];
    /** The union type for the `AssignmentTarget` alias. */
    type AssignmentTarget = AST["AssignmentTarget"];
    /** The union type for the `BindingProperty` alias. */
    type BindingProperty = AST["BindingProperty"];
    /** The union type for the `BindingTarget` alias. */
    type BindingTarget = AST["BindingTarget"];
    /** The union type for the `Class` alias. */
    type Class = AST["Class"];
    /** The union type for the `Declaration` alias. */
    type Declaration = AST["Declaration"];
    /** The union type for the `ExportNamedDeclaration` alias. */
    type ExportNamedDeclaration = AST["ExportNamedDeclaration"];
    /** The union type for the `Expression` alias. */
    type Expression = AST["Expression"];
    /** The union type for the `Function` alias. */
    type Function = AST["Function"];
    /** The union type for the `Literal` alias. */
    type Literal = AST["Literal"];
    /** The union type for the `MemberExpression` alias. */
    type MemberExpression = AST["MemberExpression"];
    /** The union type for the `MethodDefinition` alias. */
    type MethodDefinition = AST["MethodDefinition"];
    /** The union type for the `ModuleItem` alias. */
    type ModuleItem = AST["ModuleItem"];
    /** The union type for the `ObjectPattern` alias. */
    type ObjectPattern = AST["ObjectPattern"];
    /** The union type for the `ObjectProperty` alias. */
    type ObjectProperty = AST["ObjectProperty"];
    /** The union type for the `Program` alias. */
    type Program = AST["Program"];
    /** The union type for the `Property` alias. */
    type Property = AST["Property"];
    /** The union type for the `RestElement` alias. */
    type RestElement = AST["RestElement"];
    /** The union type for the `SimpleAssignmentTarget` alias. */
    type SimpleAssignmentTarget = AST["SimpleAssignmentTarget"];
    /** The union type for the `Statement` alias. */
    type Statement = AST["Statement"];
    /** The union type for the `StaticPropertyKey` alias. */
    type StaticPropertyKey = AST["StaticPropertyKey"];
    /** The type for the `AccessorProperty` node. */
    type AccessorProperty = AST["AccessorProperty"];
    /** The type for the `AnonymousDefaultExportedClassDeclaration` node. */
    type AnonymousDefaultExportedClassDeclaration = AST["AnonymousDefaultExportedClassDeclaration"];
    /** The type for the `AnonymousDefaultExportedFunctionDeclaration` node. */
    type AnonymousDefaultExportedFunctionDeclaration = AST["AnonymousDefaultExportedFunctionDeclaration"];
    /** The type for the `ArrayExpression` node. */
    type ArrayExpression = AST["ArrayExpression"];
    /** The type for the `ArrowFunctionExpression` node. */
    type ArrowFunctionExpression = AST["ArrowFunctionExpression"];
    /** The type for the `AssignmentArrayPattern` node. */
    type AssignmentArrayPattern = AST["AssignmentArrayPattern"];
    /** The type for the `AssignmentAssignmentPattern` node. */
    type AssignmentAssignmentPattern = AST["AssignmentAssignmentPattern"];
    /** The type for the `AssignmentComputedProperty` node. */
    type AssignmentComputedProperty = AST["AssignmentComputedProperty"];
    /** The type for the `AssignmentObjectPattern` node. */
    type AssignmentObjectPattern = AST["AssignmentObjectPattern"];
    /** The type for the `AssignmentRestElement` node. */
    type AssignmentRestElement = AST["AssignmentRestElement"];
    /** The type for the `AssignmentShorthandProperty` node. */
    type AssignmentShorthandProperty = AST["AssignmentShorthandProperty"];
    /** The type for the `AssignmentSimpleProperty` node. */
    type AssignmentSimpleProperty = AST["AssignmentSimpleProperty"];
    /** The type for the `AwaitExpression` node. */
    type AwaitExpression = AST["AwaitExpression"];
    /** The type for the `BinaryExpression` node. */
    type BinaryExpression = AST["BinaryExpression"];
    /** The type for the `BindingArrayPattern` node. */
    type BindingArrayPattern = AST["BindingArrayPattern"];
    /** The type for the `BindingAssignmentPattern` node. */
    type BindingAssignmentPattern = AST["BindingAssignmentPattern"];
    /** The type for the `BindingComputedProperty` node. */
    type BindingComputedProperty = AST["BindingComputedProperty"];
    /** The type for the `BindingObjectPattern` node. */
    type BindingObjectPattern = AST["BindingObjectPattern"];
    /** The type for the `BindingRestElement` node. */
    type BindingRestElement = AST["BindingRestElement"];
    /** The type for the `BindingShorthandProperty` node. */
    type BindingShorthandProperty = AST["BindingShorthandProperty"];
    /** The type for the `BindingSimpleProperty` node. */
    type BindingSimpleProperty = AST["BindingSimpleProperty"];
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
    /** The type for the `ClassBody` node. */
    type ClassBody = AST["ClassBody"];
    /** The type for the `ClassDeclaration` node. */
    type ClassDeclaration = AST["ClassDeclaration"];
    /** The type for the `ClassExpression` node. */
    type ClassExpression = AST["ClassExpression"];
    /** The type for the `CompoundAssignmentExpression` node. */
    type CompoundAssignmentExpression = AST["CompoundAssignmentExpression"];
    /** The type for the `ComputedAccessorProperty` node. */
    type ComputedAccessorProperty = AST["ComputedAccessorProperty"];
    /** The type for the `ComputedMemberExpression` node. */
    type ComputedMemberExpression = AST["ComputedMemberExpression"];
    /** The type for the `ComputedMethodDefinition` node. */
    type ComputedMethodDefinition = AST["ComputedMethodDefinition"];
    /** The type for the `ComputedMethodProperty` node. */
    type ComputedMethodProperty = AST["ComputedMethodProperty"];
    /** The type for the `ComputedProperty` node. */
    type ComputedProperty = AST["ComputedProperty"];
    /** The type for the `ConditionalExpression` node. */
    type ConditionalExpression = AST["ConditionalExpression"];
    /** The type for the `ConstructorDefinition` node. */
    type ConstructorDefinition = AST["ConstructorDefinition"];
    /** The type for the `ContinueStatement` node. */
    type ContinueStatement = AST["ContinueStatement"];
    /** The type for the `DebuggerStatement` node. */
    type DebuggerStatement = AST["DebuggerStatement"];
    /** The type for the `DoWhileStatement` node. */
    type DoWhileStatement = AST["DoWhileStatement"];
    /** The type for the `EmptyStatement` node. */
    type EmptyStatement = AST["EmptyStatement"];
    /** The type for the `ExportAllDeclaration` node. */
    type ExportAllDeclaration = AST["ExportAllDeclaration"];
    /** The type for the `ExportDefaultDeclaration` node. */
    type ExportDefaultDeclaration = AST["ExportDefaultDeclaration"];
    /** The type for the `ExportNamedDeclDeclaration` node. */
    type ExportNamedDeclDeclaration = AST["ExportNamedDeclDeclaration"];
    /** The type for the `ExportNamedFromDeclaration` node. */
    type ExportNamedFromDeclaration = AST["ExportNamedFromDeclaration"];
    /** The type for the `ExportSpecifier` node. */
    type ExportSpecifier = AST["ExportSpecifier"];
    /** The type for the `ExpressionStatement` node. */
    type ExpressionStatement = AST["ExpressionStatement"];
    /** The type for the `ForInStatement` node. */
    type ForInStatement = AST["ForInStatement"];
    /** The type for the `ForOfStatement` node. */
    type ForOfStatement = AST["ForOfStatement"];
    /** The type for the `ForStatement` node. */
    type ForStatement = AST["ForStatement"];
    /** The type for the `FunctionDeclaration` node. */
    type FunctionDeclaration = AST["FunctionDeclaration"];
    /** The type for the `FunctionExpression` node. */
    type FunctionExpression = AST["FunctionExpression"];
    /** The type for the `Identifier` node. */
    type Identifier = AST["Identifier"];
    /** The type for the `IfStatement` node. */
    type IfStatement = AST["IfStatement"];
    /** The type for the `ImportDeclaration` node. */
    type ImportDeclaration = AST["ImportDeclaration"];
    /** The type for the `ImportDefaultSpecifier` node. */
    type ImportDefaultSpecifier = AST["ImportDefaultSpecifier"];
    /** The type for the `ImportNamespaceSpecifier` node. */
    type ImportNamespaceSpecifier = AST["ImportNamespaceSpecifier"];
    /** The type for the `ImportSpecifier` node. */
    type ImportSpecifier = AST["ImportSpecifier"];
    /** The type for the `LabeledStatement` node. */
    type LabeledStatement = AST["LabeledStatement"];
    /** The type for the `LogicalExpression` node. */
    type LogicalExpression = AST["LogicalExpression"];
    /** The type for the `MetaProperty` node. */
    type MetaProperty = AST["MetaProperty"];
    /** The type for the `MethodProperty` node. */
    type MethodProperty = AST["MethodProperty"];
    /** The type for the `ModuleProgram` node. */
    type ModuleProgram = AST["ModuleProgram"];
    /** The type for the `NewExpression` node. */
    type NewExpression = AST["NewExpression"];
    /** The type for the `NullLiteral` node. */
    type NullLiteral = AST["NullLiteral"];
    /** The type for the `NumberLiteral` node. */
    type NumberLiteral = AST["NumberLiteral"];
    /** The type for the `ObjectExpression` node. */
    type ObjectExpression = AST["ObjectExpression"];
    /** The type for the `RegExpLiteral` node. */
    type RegExpLiteral = AST["RegExpLiteral"];
    /** The type for the `ReturnStatement` node. */
    type ReturnStatement = AST["ReturnStatement"];
    /** The type for the `ScriptProgram` node. */
    type ScriptProgram = AST["ScriptProgram"];
    /** The type for the `SequenceExpression` node. */
    type SequenceExpression = AST["SequenceExpression"];
    /** The type for the `ShorthandProperty` node. */
    type ShorthandProperty = AST["ShorthandProperty"];
    /** The type for the `SimpleAssignmentExpression` node. */
    type SimpleAssignmentExpression = AST["SimpleAssignmentExpression"];
    /** The type for the `SimpleMemberExpression` node. */
    type SimpleMemberExpression = AST["SimpleMemberExpression"];
    /** The type for the `SimpleMethodDefinition` node. */
    type SimpleMethodDefinition = AST["SimpleMethodDefinition"];
    /** The type for the `SimpleProperty` node. */
    type SimpleProperty = AST["SimpleProperty"];
    /** The type for the `SpreadElement` node. */
    type SpreadElement = AST["SpreadElement"];
    /** The type for the `StringLiteral` node. */
    type StringLiteral = AST["StringLiteral"];
    /** The type for the `Super` node. */
    type Super = AST["Super"];
    /** The type for the `SwitchCase` node. */
    type SwitchCase = AST["SwitchCase"];
    /** The type for the `SwitchStatement` node. */
    type SwitchStatement = AST["SwitchStatement"];
    /** The type for the `TaggedTemplateExpression` node. */
    type TaggedTemplateExpression = AST["TaggedTemplateExpression"];
    /** The type for the `TemplateElement` node. */
    type TemplateElement = AST["TemplateElement"];
    /** The type for the `TemplateLiteral` node. */
    type TemplateLiteral = AST["TemplateLiteral"];
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
    /** The type for the `YieldExpression` node. */
    type YieldExpression = AST["YieldExpression"];
}
/** The union type for all alias names. */
export declare type AliasName = ast.AliasName<ES2019>;
/**
 * The union type for all node type names in TypeScript.
 *
 * This is not the node type of ESTree because it may represent each ESTree node
 * by multiple TypeScript types.
 * Use the `TypeName` type if you want ESTree node type names.
 */
export declare type NodeName = ast.NodeName<ES2019>;
/**
 * The union type for all node type names in ESTree.
 *
 * This is not the type name in TypeScript because it may represent each ESTree
 * node by multiple TypeScript types.
 * Use the `NodeName` type if you want node type names in TypeScript.
 */
export declare type TypeName = ast.ASTType<ES2019>;
/** The union type for all nodes. */
export declare type Node = AST["Node"];
/** The union type for the `ArrayPattern` alias. */
export declare type ArrayPattern = AST["ArrayPattern"];
/** The union type for the `AssignmentExpression` alias. */
export declare type AssignmentExpression = AST["AssignmentExpression"];
/** The union type for the `AssignmentPattern` alias. */
export declare type AssignmentPattern = AST["AssignmentPattern"];
/** The union type for the `AssignmentProperty` alias. */
export declare type AssignmentProperty = AST["AssignmentProperty"];
/** The union type for the `AssignmentTarget` alias. */
export declare type AssignmentTarget = AST["AssignmentTarget"];
/** The union type for the `BindingProperty` alias. */
export declare type BindingProperty = AST["BindingProperty"];
/** The union type for the `BindingTarget` alias. */
export declare type BindingTarget = AST["BindingTarget"];
/** The union type for the `Class` alias. */
export declare type Class = AST["Class"];
/** The union type for the `Declaration` alias. */
export declare type Declaration = AST["Declaration"];
/** The union type for the `ExportNamedDeclaration` alias. */
export declare type ExportNamedDeclaration = AST["ExportNamedDeclaration"];
/** The union type for the `Expression` alias. */
export declare type Expression = AST["Expression"];
/** The union type for the `Function` alias. */
export declare type Function = AST["Function"];
/** The union type for the `Literal` alias. */
export declare type Literal = AST["Literal"];
/** The union type for the `MemberExpression` alias. */
export declare type MemberExpression = AST["MemberExpression"];
/** The union type for the `MethodDefinition` alias. */
export declare type MethodDefinition = AST["MethodDefinition"];
/** The union type for the `ModuleItem` alias. */
export declare type ModuleItem = AST["ModuleItem"];
/** The union type for the `ObjectPattern` alias. */
export declare type ObjectPattern = AST["ObjectPattern"];
/** The union type for the `ObjectProperty` alias. */
export declare type ObjectProperty = AST["ObjectProperty"];
/** The union type for the `Program` alias. */
export declare type Program = AST["Program"];
/** The union type for the `Property` alias. */
export declare type Property = AST["Property"];
/** The union type for the `RestElement` alias. */
export declare type RestElement = AST["RestElement"];
/** The union type for the `SimpleAssignmentTarget` alias. */
export declare type SimpleAssignmentTarget = AST["SimpleAssignmentTarget"];
/** The union type for the `Statement` alias. */
export declare type Statement = AST["Statement"];
/** The union type for the `StaticPropertyKey` alias. */
export declare type StaticPropertyKey = AST["StaticPropertyKey"];
/** The type for the `AccessorProperty` node. */
export declare type AccessorProperty = AST["AccessorProperty"];
/** The type for the `AnonymousDefaultExportedClassDeclaration` node. */
export declare type AnonymousDefaultExportedClassDeclaration = AST["AnonymousDefaultExportedClassDeclaration"];
/** The type for the `AnonymousDefaultExportedFunctionDeclaration` node. */
export declare type AnonymousDefaultExportedFunctionDeclaration = AST["AnonymousDefaultExportedFunctionDeclaration"];
/** The type for the `ArrayExpression` node. */
export declare type ArrayExpression = AST["ArrayExpression"];
/** The type for the `ArrowFunctionExpression` node. */
export declare type ArrowFunctionExpression = AST["ArrowFunctionExpression"];
/** The type for the `AssignmentArrayPattern` node. */
export declare type AssignmentArrayPattern = AST["AssignmentArrayPattern"];
/** The type for the `AssignmentAssignmentPattern` node. */
export declare type AssignmentAssignmentPattern = AST["AssignmentAssignmentPattern"];
/** The type for the `AssignmentComputedProperty` node. */
export declare type AssignmentComputedProperty = AST["AssignmentComputedProperty"];
/** The type for the `AssignmentObjectPattern` node. */
export declare type AssignmentObjectPattern = AST["AssignmentObjectPattern"];
/** The type for the `AssignmentRestElement` node. */
export declare type AssignmentRestElement = AST["AssignmentRestElement"];
/** The type for the `AssignmentShorthandProperty` node. */
export declare type AssignmentShorthandProperty = AST["AssignmentShorthandProperty"];
/** The type for the `AssignmentSimpleProperty` node. */
export declare type AssignmentSimpleProperty = AST["AssignmentSimpleProperty"];
/** The type for the `AwaitExpression` node. */
export declare type AwaitExpression = AST["AwaitExpression"];
/** The type for the `BinaryExpression` node. */
export declare type BinaryExpression = AST["BinaryExpression"];
/** The type for the `BindingArrayPattern` node. */
export declare type BindingArrayPattern = AST["BindingArrayPattern"];
/** The type for the `BindingAssignmentPattern` node. */
export declare type BindingAssignmentPattern = AST["BindingAssignmentPattern"];
/** The type for the `BindingComputedProperty` node. */
export declare type BindingComputedProperty = AST["BindingComputedProperty"];
/** The type for the `BindingObjectPattern` node. */
export declare type BindingObjectPattern = AST["BindingObjectPattern"];
/** The type for the `BindingRestElement` node. */
export declare type BindingRestElement = AST["BindingRestElement"];
/** The type for the `BindingShorthandProperty` node. */
export declare type BindingShorthandProperty = AST["BindingShorthandProperty"];
/** The type for the `BindingSimpleProperty` node. */
export declare type BindingSimpleProperty = AST["BindingSimpleProperty"];
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
/** The type for the `ClassBody` node. */
export declare type ClassBody = AST["ClassBody"];
/** The type for the `ClassDeclaration` node. */
export declare type ClassDeclaration = AST["ClassDeclaration"];
/** The type for the `ClassExpression` node. */
export declare type ClassExpression = AST["ClassExpression"];
/** The type for the `CompoundAssignmentExpression` node. */
export declare type CompoundAssignmentExpression = AST["CompoundAssignmentExpression"];
/** The type for the `ComputedAccessorProperty` node. */
export declare type ComputedAccessorProperty = AST["ComputedAccessorProperty"];
/** The type for the `ComputedMemberExpression` node. */
export declare type ComputedMemberExpression = AST["ComputedMemberExpression"];
/** The type for the `ComputedMethodDefinition` node. */
export declare type ComputedMethodDefinition = AST["ComputedMethodDefinition"];
/** The type for the `ComputedMethodProperty` node. */
export declare type ComputedMethodProperty = AST["ComputedMethodProperty"];
/** The type for the `ComputedProperty` node. */
export declare type ComputedProperty = AST["ComputedProperty"];
/** The type for the `ConditionalExpression` node. */
export declare type ConditionalExpression = AST["ConditionalExpression"];
/** The type for the `ConstructorDefinition` node. */
export declare type ConstructorDefinition = AST["ConstructorDefinition"];
/** The type for the `ContinueStatement` node. */
export declare type ContinueStatement = AST["ContinueStatement"];
/** The type for the `DebuggerStatement` node. */
export declare type DebuggerStatement = AST["DebuggerStatement"];
/** The type for the `DoWhileStatement` node. */
export declare type DoWhileStatement = AST["DoWhileStatement"];
/** The type for the `EmptyStatement` node. */
export declare type EmptyStatement = AST["EmptyStatement"];
/** The type for the `ExportAllDeclaration` node. */
export declare type ExportAllDeclaration = AST["ExportAllDeclaration"];
/** The type for the `ExportDefaultDeclaration` node. */
export declare type ExportDefaultDeclaration = AST["ExportDefaultDeclaration"];
/** The type for the `ExportNamedDeclDeclaration` node. */
export declare type ExportNamedDeclDeclaration = AST["ExportNamedDeclDeclaration"];
/** The type for the `ExportNamedFromDeclaration` node. */
export declare type ExportNamedFromDeclaration = AST["ExportNamedFromDeclaration"];
/** The type for the `ExportSpecifier` node. */
export declare type ExportSpecifier = AST["ExportSpecifier"];
/** The type for the `ExpressionStatement` node. */
export declare type ExpressionStatement = AST["ExpressionStatement"];
/** The type for the `ForInStatement` node. */
export declare type ForInStatement = AST["ForInStatement"];
/** The type for the `ForOfStatement` node. */
export declare type ForOfStatement = AST["ForOfStatement"];
/** The type for the `ForStatement` node. */
export declare type ForStatement = AST["ForStatement"];
/** The type for the `FunctionDeclaration` node. */
export declare type FunctionDeclaration = AST["FunctionDeclaration"];
/** The type for the `FunctionExpression` node. */
export declare type FunctionExpression = AST["FunctionExpression"];
/** The type for the `Identifier` node. */
export declare type Identifier = AST["Identifier"];
/** The type for the `IfStatement` node. */
export declare type IfStatement = AST["IfStatement"];
/** The type for the `ImportDeclaration` node. */
export declare type ImportDeclaration = AST["ImportDeclaration"];
/** The type for the `ImportDefaultSpecifier` node. */
export declare type ImportDefaultSpecifier = AST["ImportDefaultSpecifier"];
/** The type for the `ImportNamespaceSpecifier` node. */
export declare type ImportNamespaceSpecifier = AST["ImportNamespaceSpecifier"];
/** The type for the `ImportSpecifier` node. */
export declare type ImportSpecifier = AST["ImportSpecifier"];
/** The type for the `LabeledStatement` node. */
export declare type LabeledStatement = AST["LabeledStatement"];
/** The type for the `LogicalExpression` node. */
export declare type LogicalExpression = AST["LogicalExpression"];
/** The type for the `MetaProperty` node. */
export declare type MetaProperty = AST["MetaProperty"];
/** The type for the `MethodProperty` node. */
export declare type MethodProperty = AST["MethodProperty"];
/** The type for the `ModuleProgram` node. */
export declare type ModuleProgram = AST["ModuleProgram"];
/** The type for the `NewExpression` node. */
export declare type NewExpression = AST["NewExpression"];
/** The type for the `NullLiteral` node. */
export declare type NullLiteral = AST["NullLiteral"];
/** The type for the `NumberLiteral` node. */
export declare type NumberLiteral = AST["NumberLiteral"];
/** The type for the `ObjectExpression` node. */
export declare type ObjectExpression = AST["ObjectExpression"];
/** The type for the `RegExpLiteral` node. */
export declare type RegExpLiteral = AST["RegExpLiteral"];
/** The type for the `ReturnStatement` node. */
export declare type ReturnStatement = AST["ReturnStatement"];
/** The type for the `ScriptProgram` node. */
export declare type ScriptProgram = AST["ScriptProgram"];
/** The type for the `SequenceExpression` node. */
export declare type SequenceExpression = AST["SequenceExpression"];
/** The type for the `ShorthandProperty` node. */
export declare type ShorthandProperty = AST["ShorthandProperty"];
/** The type for the `SimpleAssignmentExpression` node. */
export declare type SimpleAssignmentExpression = AST["SimpleAssignmentExpression"];
/** The type for the `SimpleMemberExpression` node. */
export declare type SimpleMemberExpression = AST["SimpleMemberExpression"];
/** The type for the `SimpleMethodDefinition` node. */
export declare type SimpleMethodDefinition = AST["SimpleMethodDefinition"];
/** The type for the `SimpleProperty` node. */
export declare type SimpleProperty = AST["SimpleProperty"];
/** The type for the `SpreadElement` node. */
export declare type SpreadElement = AST["SpreadElement"];
/** The type for the `StringLiteral` node. */
export declare type StringLiteral = AST["StringLiteral"];
/** The type for the `Super` node. */
export declare type Super = AST["Super"];
/** The type for the `SwitchCase` node. */
export declare type SwitchCase = AST["SwitchCase"];
/** The type for the `SwitchStatement` node. */
export declare type SwitchStatement = AST["SwitchStatement"];
/** The type for the `TaggedTemplateExpression` node. */
export declare type TaggedTemplateExpression = AST["TaggedTemplateExpression"];
/** The type for the `TemplateElement` node. */
export declare type TemplateElement = AST["TemplateElement"];
/** The type for the `TemplateLiteral` node. */
export declare type TemplateLiteral = AST["TemplateLiteral"];
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
/** The type for the `YieldExpression` node. */
export declare type YieldExpression = AST["YieldExpression"];
