/**
 * @fileoverview The AST definition for EcmaScript 2015 snapshot.
 */
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import {
    Comment,
    Definition as ES5,
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./es5-definition"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

export interface Enhancement {
    nodes: {
        // Enhancements
        AccessorProperty: {
            computed: false
            method: false
            shorthand: false
        }
        ArrayExpression: {
            elements: NodeRef<"SpreadElement">[]
        }
        CallExpression: {
            callee: NodeRef<"Super">
            arguments: NodeRef<"SpreadElement">[]
        }
        ComputedMemberExpression: {
            object: NodeRef<"Super">
        }
        FunctionExpression: {
            generator: boolean
            params: (
                | NodeRef<"BindingAssignmentPattern">
                | NodeRef<"BindingRestElement">
            )[]
        }
        NewExpression: {
            arguments: NodeRef<"SpreadElement">[]
        }
        PlainFunctionDeclaration: {
            generator: boolean
            params: (
                | NodeRef<"BindingAssignmentPattern">
                | NodeRef<"BindingRestElement">
            )[]
        }
        PlainMemberExpression: {
            object: NodeRef<"Super">
        }
        PlainProperty: {
            computed: false
            method: false
            shorthand: false
        }
        RegExpLiteral: {
            value: null
        }
        ScriptProgram: {
            sourceType: "script"
        }
        VariableDeclaration: {
            kind: "var" | "let" | "const"
        }

        // New root
        ModuleProgram: {
            type: "Program"
            sourceType: "module"
            body: (NodeRef<"Statement"> | NodeRef<"ModuleItem">)[]
            comments: Comment[]
            tokens: Token[]
        }

        // New statements
        ArrowFunctionExpression: {
            id: NodeRef<"Identifier"> | null
            params: (
                | NodeRef<"BindingAssignmentPattern">
                | NodeRef<"BindingRestElement">
                | NodeRef<"BindingTarget">
            )[]
            body: NodeRef<"BlockStatement"> | NodeRef<"Expression">
        }
        ExportAllDeclaration: {
            source: NodeRef<"StringLiteral">
        }
        ExportDefaultDeclaration: {
            declaration:
                | NodeRef<"AnonymousDefaultExportedClassDeclaration">
                | NodeRef<"AnonymousDefaultExportedFunctionDeclaration">
                | NodeRef<"PlainClassDeclaration">
                | NodeRef<"PlainFunctionDeclaration">
                | NodeRef<"Expression">
        }
        ExportNamedDeclDeclaration: {
            type: "ExportNamedDeclaration"
            declaration:
                | NodeRef<"PlainClassDeclaration">
                | NodeRef<"PlainFunctionDeclaration">
                | NodeRef<"VariableDeclaration">
            specifiers: []
            source: null
        }
        ExportNamedFromDeclaration: {
            type: "ExportNamedDeclaration"
            declaration: null
            specifiers: NodeRef<"ExportSpecifier">[]
            source: NodeRef<"StringLiteral">
        }
        ForOfStatement: {
            left: NodeRef<"AssignmentTarget"> | NodeRef<"VariableDeclaration">
            right: NodeRef<"Expression">
            body: NodeRef<"Statement">
        }
        ImportDeclaration: {
            specifiers: (
                | NodeRef<"ImportSpecifier">
                | NodeRef<"ImportDefaultSpecifier">
                | NodeRef<"ImportNamespaceSpecifier">
            )[]
            source: NodeRef<"StringLiteral">
        }
        PlainClassDeclaration: {
            type: "ClassDeclaration"
            id: NodeRef<"Identifier">
            superClass: NodeRef<"Expression"> | null
            body: NodeRef<"ClassBody">
        }

        // New expressions
        ClassExpression: {
            id: NodeRef<"Identifier"> | null
            superClass: NodeRef<"Expression"> | null
            body: NodeRef<"ClassBody">
        }
        MetaProperty: {
            meta: NodeRef<"Identifier">
            property: NodeRef<"Identifier">
        }
        TaggedTemplateExpression: {
            tag: NodeRef<"Expression">
            quasi: NodeRef<"TemplateLiteral">
        }
        TemplateLiteral: {
            quasis: NodeRef<"TemplateElement">[]
            expressions: NodeRef<"Expression">[]
        }
        YieldExpression: {
            delegate: boolean
            argument: NodeRef<"Expression"> | null
        }

        // New other nodes.
        AnonymousDefaultExportedClassDeclaration: {
            type: "ClassDeclaration"
            id: null
            superClass: NodeRef<"Expression"> | null
            body: NodeRef<"ClassBody">
        }
        AnonymousDefaultExportedFunctionDeclaration: {
            type: "FunctionDeclaration"
            generator: boolean
            id: null
            params: (
                | NodeRef<"BindingAssignmentPattern">
                | NodeRef<"BindingTarget">
                | NodeRef<"BindingRestElement">
            )[]
            body: NodeRef<"BlockStatement">
        }
        AssignmentArrayPattern: {
            type: "ArrayPattern"
            elements: (
                | NodeRef<"AssignmentAssignmentPattern">
                | NodeRef<"AssignmentTarget">
                | NodeRef<"AssignmentRestElement">
                | null
            )[]
        }
        AssignmentAssignmentPattern: {
            type: "AssignmentPattern"
            left: NodeRef<"AssignmentTarget">
            right: NodeRef<"Expression">
        }
        AssignmentComputedProperty: {
            type: "Property"
            kind: "init"
            computed: true
            method: false
            shorthand: false
            key: NodeRef<"Expression">
            value:
                | NodeRef<"AssignmentAssignmentPattern">
                | NodeRef<"AssignmentTarget">
        }
        AssignmentObjectPattern: {
            type: "ObjectPattern"
            properties: NodeRef<"AssignmentProperty">[]
        }
        AssignmentPlainProperty: {
            type: "Property"
            kind: "init"
            computed: false
            method: false
            shorthand: false
            key: NodeRef<"StaticPropertyKey">
            value:
                | NodeRef<"AssignmentAssignmentPattern">
                | NodeRef<"AssignmentTarget">
        }
        AssignmentRestElement: {
            type: "RestElement"
            argument: NodeRef<"AssignmentTarget">
        }
        AssignmentShorthandProperty: {
            type: "Property"
            kind: "init"
            computed: false
            method: false
            shorthand: true
            key: NodeRef<"Identifier">
            value: NodeRef<"Identifier">
        }
        BindingArrayPattern: {
            type: "ArrayPattern"
            elements: (
                | NodeRef<"BindingAssignmentPattern">
                | NodeRef<"BindingRestElement">
                | NodeRef<"BindingTarget">
                | null
            )[]
        }
        BindingAssignmentPattern: {
            type: "AssignmentPattern"
            left: NodeRef<"BindingTarget">
            right: NodeRef<"Expression">
        }
        BindingComputedProperty: {
            type: "Property"
            kind: "init"
            computed: true
            method: false
            shorthand: false
            key: NodeRef<"Expression">
            value:
                | NodeRef<"BindingAssignmentPattern">
                | NodeRef<"BindingTarget">
        }
        BindingObjectPattern: {
            type: "ObjectPattern"
            properties: NodeRef<"BindingProperty">[]
        }
        BindingPlainProperty: {
            type: "Property"
            kind: "init"
            computed: false
            method: false
            shorthand: false
            key: NodeRef<"StaticPropertyKey">
            value:
                | NodeRef<"BindingAssignmentPattern">
                | NodeRef<"BindingTarget">
        }
        BindingRestElement: {
            type: "RestElement"
            argument: NodeRef<"Identifier">
        }
        BindingShorthandProperty: {
            type: "Property"
            kind: "init"
            computed: false
            method: false
            shorthand: true
            key: NodeRef<"Identifier">
            value: NodeRef<"Identifier">
        }
        ClassBody: {
            body: NodeRef<"MethodDefinition">[]
        }
        ComputedAccessorProperty: {
            type: "Property"
            kind: "get" | "set"
            computed: true
            method: false
            shorthand: false
            key: NodeRef<"Expression">
            value: NodeRef<"FunctionExpression">
        }
        ComputedMethodProperty: {
            type: "Property"
            kind: "init"
            computed: true
            method: true
            shorthand: false
            key: NodeRef<"Expression">
            value: NodeRef<"FunctionExpression">
        }
        ComputedMethodDefinition: {
            type: "MethodDefinition"
            computed: true
            kind: "method" | "get" | "set"
            static: boolean
            key: NodeRef<"Expression">
            value: NodeRef<"FunctionExpression">
        }
        ComputedProperty: {
            type: "Property"
            kind: "init"
            computed: true
            method: false
            shorthand: false
            key: NodeRef<"Expression">
            value: NodeRef<"Expression">
        }
        ConstructorDefinition: {
            type: "MethodDefinition"
            computed: false
            kind: "constructor"
            static: false
            key: NodeRef<"Identifier"> | NodeRef<"StringLiteral">
            value: NodeRef<"FunctionExpression">
        }
        ExportSpecifier: {
            local: NodeRef<"Identifier">
            exported: NodeRef<"Identifier">
        }
        ImportDefaultSpecifier: {
            local: NodeRef<"Identifier">
        }
        ImportNamespaceSpecifier: {
            local: NodeRef<"Identifier">
        }
        ImportSpecifier: {
            imported: NodeRef<"Identifier">
            local: NodeRef<"Identifier">
        }
        MethodProperty: {
            type: "Property"
            kind: "init"
            computed: false
            method: true
            shorthand: false
            key: NodeRef<"StaticPropertyKey">
            value: NodeRef<"FunctionExpression">
        }
        PlainMethodDefinition: {
            type: "MethodDefinition"
            computed: false
            kind: "method" | "get" | "set"
            static: boolean
            key: NodeRef<"StaticPropertyKey">
            value: NodeRef<"FunctionExpression">
        }
        ShorthandProperty: {
            type: "Property"
            kind: "init"
            computed: false
            method: false
            shorthand: true
            key: NodeRef<"Identifier">
            value: NodeRef<"Identifier">
        }
        SpreadElement: {
            argument: NodeRef<"Expression">
        }
        Super: {}
        TemplateElement: {
            tail: boolean
            value: { cooked: string; raw: string }
        }
    }

    aliases: {
        // Enhancements
        AssignmentTarget: "AssignmentArrayPattern" | "AssignmentObjectPattern"
        BindingTarget: "BindingArrayPattern" | "BindingObjectPattern"
        Declaration: "PlainClassDeclaration"
        Expression:
            | "ArrowFunctionExpression"
            | "ClassExpression"
            | "MetaProperty"
            | "TaggedTemplateExpression"
            | "TemplateLiteral"
            | "YieldExpression"
        Function: "ArrowFunctionExpression"
        ObjectProperty:
            | "ComputedAccessorProperty"
            | "ComputedMethodProperty"
            | "ComputedProperty"
            | "MethodProperty"
            | "ShorthandProperty"
        Statement: "ForOfStatement" | "PlainClassDeclaration"

        // New aliases
        AssignmentProperty:
            | "AssignmentComputedProperty"
            | "AssignmentPlainProperty"
            | "AssignmentShorthandProperty"
        BindingProperty:
            | "BindingComputedProperty"
            | "BindingPlainProperty"
            | "BindingShorthandProperty"
        Class: "ClassExpression" | "PlainClassDeclaration"
        ModuleItem:
            | "ExportAllDeclaration"
            | "ExportDefaultDeclaration"
            | "ExportNamedDeclDeclaration"
            | "ExportNamedFromDeclaration"
            | "ImportDeclaration"
    }
}

/**
 * The AST definition of ES2015.
 */
interface ES2015 extends Extends<ES5, Enhancement> {}

export { ES2015 as Definition }
