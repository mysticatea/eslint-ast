import { Comment } from "./lib/comment"
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import { Token } from "./lib/token"
import { Definition as ES5Definition } from "./es5-definition"

export { Comment, Token }

export namespace Enhancement {
    /**
     * Definition for arrow functions.
     */
    export interface ArrowFunction {
        nodes: {
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
        }
        aliases: {
            // Enhancements
            Expression: "ArrowFunctionExpression"
            Function: "ArrowFunctionExpression"
        }
    }

    /**
     * Definition for classes.
     */
    export interface Class {
        nodes: {
            // Enhancements
            CallExpression: {
                callee: NodeRef<"Super">
            }
            SimpleMemberExpression: {
                object: NodeRef<"Super">
            }
            ComputedMemberExpression: {
                object: NodeRef<"Super">
            }

            // New statements
            ClassDeclaration: {
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

            // New other nodes.
            ClassBody: {
                body: NodeRef<"MethodDefinition">[]
            }
            ComputedMethodDefinition: {
                type: "MethodDefinition"
                computed: true
                kind: "method" | "get" | "set"
                static: boolean
                key: NodeRef<"Expression">
                value: NodeRef<"FunctionExpression">
            }
            ConstructorDefinition: {
                type: "MethodDefinition"
                computed: false
                kind: "constructor"
                static: false
                key: NodeRef<"Identifier"> | NodeRef<"StringLiteral">
                value: NodeRef<"FunctionExpression">
            }
            SimpleMethodDefinition: {
                type: "MethodDefinition"
                computed: false
                kind: "method" | "get" | "set"
                static: boolean
                key: NodeRef<"StaticPropertyKey">
                value: NodeRef<"FunctionExpression">
            }
            Super: {}
        }
        aliases: {
            // Enhancements
            Declaration: "ClassDeclaration"
            Expression: "ClassExpression" | "MetaProperty"
            Statement: "ClassDeclaration"

            // New aliases
            Class: "ClassDeclaration" | "ClassExpression"
            MethodDefinition:
                | "ComputedMethodDefinition"
                | "ConstructorDefinition"
                | "SimpleMethodDefinition"
        }
    }

    /**
     * Definition for destructuring assignments.
     */
    export interface DestructuringAssignment {
        nodes: {
            // New other nodes.
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
            AssignmentShorthandProperty: {
                type: "Property"
                kind: "init"
                computed: false
                method: false
                shorthand: true
                key: NodeRef<"Identifier">
                value: NodeRef<"Identifier">
            }
            AssignmentSimpleProperty: {
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
            AssignmentRestElement: {
                type: "RestElement"
                argument: NodeRef<"AssignmentTarget">
            }
        }
        aliases: {
            // Enhancements
            AssignmentTarget:
                | "AssignmentArrayPattern"
                | "AssignmentObjectPattern"

            // New aliases
            AssignmentProperty:
                | "AssignmentComputedProperty"
                | "AssignmentShorthandProperty"
                | "AssignmentSimpleProperty"
        }
    }

    /**
     * Definition for destructuring binding.
     * This is similar to destructuring assignments, but disallows member
     * expressions.
     */
    export interface DestructuringBinding {
        nodes: {
            // Enhancements
            FunctionDeclaration: {
                params: (
                    | NodeRef<"BindingAssignmentPattern">
                    | NodeRef<"BindingRestElement">
                )[]
            }
            FunctionExpression: {
                params: (
                    | NodeRef<"BindingAssignmentPattern">
                    | NodeRef<"BindingRestElement">
                )[]
            }

            // New other nodes.
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
            BindingSimpleProperty: {
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
            BindingShorthandProperty: {
                type: "Property"
                kind: "init"
                computed: false
                method: false
                shorthand: true
                key: NodeRef<"Identifier">
                value: NodeRef<"Identifier">
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
            BindingRestElement: {
                type: "RestElement"
                argument: NodeRef<"Identifier">
            }
        }
        aliases: {
            // Enhancements
            BindingTarget: "BindingArrayPattern" | "BindingObjectPattern"

            // New aliases
            BindingProperty:
                | "BindingComputedProperty"
                | "BindingShorthandProperty"
                | "BindingSimpleProperty"
        }
    }

    /**
     * Definition for `for-of` statement and generators.
     */
    export interface Iteration {
        nodes: {
            // Enhancements
            FunctionDeclaration: {
                generator: boolean
            }
            FunctionExpression: {
                generator: boolean
            }

            // New statements
            ForOfStatement: {
                left:
                    | NodeRef<"AssignmentTarget">
                    | NodeRef<"VariableDeclaration">
                right: NodeRef<"Expression">
                body: NodeRef<"Statement">
            }

            // New expressions
            YieldExpression: {
                delegate: boolean
                argument: NodeRef<"Expression"> | null
            }
        }
        aliases: {
            // Enhancements
            Expression: "YieldExpression"
            Statement: "ForOfStatement"
        }
    }

    /**
     * Definition for lexical bindings.
     */
    export interface LexicalBinding {
        nodes: {
            // Enhancements
            VariableDeclaration: {
                kind: "var" | "let" | "const"
            }
        }
        aliases: {}
    }

    /**
     * Definition for modules.
     */
    export interface Module {
        nodes: {
            // Enhancements
            ScriptProgram: {
                sourceType: "script"
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
            ExportDefaultDeclaration: {
                declaration:
                    | NodeRef<"AnonymousDefaultExportedClassDeclaration">
                    | NodeRef<"AnonymousDefaultExportedFunctionDeclaration">
                    | NodeRef<"ClassDeclaration">
                    | NodeRef<"FunctionDeclaration">
                    | NodeRef<"Expression">
            }
            ExportNamedDeclaration: {
                declaration:
                    | NodeRef<"ClassDeclaration">
                    | NodeRef<"FunctionDeclaration">
                    | NodeRef<"VariableDeclaration">
                specifiers: []
                source: null
            }
            ImportDeclaration: {
                specifiers: (
                    | NodeRef<"ImportSpecifier">
                    | NodeRef<"ImportDefaultSpecifier">
                    | NodeRef<"ImportNamespaceSpecifier">
                )[]
                source: NodeRef<"StringLiteral">
            }
            ReexportAllDeclaration: {
                type: "ExportAllDeclaration"
                source: NodeRef<"StringLiteral">
            }
            ReexportNamedDeclaration: {
                type: "ExportNamedDeclaration"
                declaration: null
                specifiers: NodeRef<"ExportSpecifier">[]
                source: NodeRef<"StringLiteral">
            }

            // New others
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
        }
        aliases: {
            // Enhancements
            Program: "ModuleProgram"

            // New aliases
            ModuleItem:
                | "ExportDefaultDeclaration"
                | "ExportNamedDeclaration"
                | "ImportDeclaration"
                | "ReexportAllDeclaration"
                | "ReexportNamedDeclaration"
        }
    }

    /**
     * Definition for object literal enhancements.
     */
    export interface ObjectLiteralEnhancement {
        nodes: {
            // Enhancements
            AccessorProperty: {
                computed: false
                method: false
                shorthand: false
            }
            SimpleProperty: {
                computed: false
                method: false
                shorthand: false
            }

            // New others
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
            ComputedProperty: {
                type: "Property"
                kind: "init"
                computed: true
                method: false
                shorthand: false
                key: NodeRef<"Expression">
                value: NodeRef<"Expression">
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
            ShorthandProperty: {
                type: "Property"
                kind: "init"
                computed: false
                method: false
                shorthand: true
                key: NodeRef<"Identifier">
                value: NodeRef<"Identifier">
            }
        }
        aliases: {
            // Enhancements
            Property:
                | "ComputedAccessorProperty"
                | "ComputedMethodProperty"
                | "ComputedProperty"
                | "MethodProperty"
                | "ShorthandProperty"
        }
    }

    /**
     * Definition for RegExp `u`, `y` flags.
     */
    export interface RegExpEnhancement {
        nodes: {
            // Enhancements
            RegExpLiteral: {
                value: null
            }
        }
        aliases: {}
    }

    /**
     * Definition for spread elements.
     */
    export interface Spread {
        nodes: {
            // Enhancements
            ArrayExpression: {
                elements: NodeRef<"SpreadElement">[]
            }
            CallExpression: {
                arguments: NodeRef<"SpreadElement">[]
            }
            NewExpression: {
                arguments: NodeRef<"SpreadElement">[]
            }

            // New others
            SpreadElement: {
                argument: NodeRef<"Expression">
            }
        }
        aliases: {}
    }

    /**
     * Definition for template literals.
     */
    export interface TemplateLiteral {
        nodes: {
            // Expressions
            TaggedTemplateExpression: {
                tag: NodeRef<"Expression">
                quasi: NodeRef<"TemplateLiteral">
            }
            TemplateLiteral: {
                quasis: NodeRef<"TemplateElement">[]
                expressions: NodeRef<"Expression">[]
            }

            // Others
            TemplateElement: {
                tail: boolean
                value: { cooked: string; raw: string }
            }
        }
        aliases: {
            // Enhancements
            Expression: "TaggedTemplateExpression" | "TemplateLiteral"
        }
    }
}

/**
 * The AST definition of ES2015.
 */
export interface Definition
    extends Extends<
        ES5Definition,
        [
            Enhancement.ArrowFunction,
            Enhancement.Class,
            Enhancement.DestructuringAssignment,
            Enhancement.DestructuringBinding,
            Enhancement.Iteration,
            Enhancement.LexicalBinding,
            Enhancement.Module,
            Enhancement.ObjectLiteralEnhancement,
            Enhancement.RegExpEnhancement,
            Enhancement.Spread,
            Enhancement.TemplateLiteral,
        ]
    > {}
