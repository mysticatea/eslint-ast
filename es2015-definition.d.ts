/**
 * @fileoverview The AST definition for EcmaScript 2015 snapshot.
 */
import { Extends } from "./lib/extends";
import { NodeRef } from "./lib/node-ref";
import { Comment, Definition as ES5Definition, IndexRange, LineColumnRange, LineColumn, Token } from "./es5-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
export declare namespace Enhancement {
    /**
     * Definition for arrow functions.
     */
    interface ArrowFunction {
        nodes: {
            ArrowFunctionExpression: {
                id: NodeRef<"Identifier"> | null;
                params: (NodeRef<"BindingAssignmentPattern"> | NodeRef<"BindingRestElement"> | NodeRef<"BindingTarget">)[];
                body: NodeRef<"BlockStatement"> | NodeRef<"Expression">;
            };
        };
        aliases: {
            Expression: "ArrowFunctionExpression";
            Function: "ArrowFunctionExpression";
        };
    }
    /**
     * Definition for classes.
     */
    interface Class {
        nodes: {
            CallExpression: {
                callee: NodeRef<"Super">;
            };
            SimpleMemberExpression: {
                object: NodeRef<"Super">;
            };
            ComputedMemberExpression: {
                object: NodeRef<"Super">;
            };
            ClassDeclaration: {
                id: NodeRef<"Identifier">;
                superClass: NodeRef<"Expression"> | null;
                body: NodeRef<"ClassBody">;
            };
            ClassExpression: {
                id: NodeRef<"Identifier"> | null;
                superClass: NodeRef<"Expression"> | null;
                body: NodeRef<"ClassBody">;
            };
            MetaProperty: {
                meta: NodeRef<"Identifier">;
                property: NodeRef<"Identifier">;
            };
            ClassBody: {
                body: NodeRef<"MethodDefinition">[];
            };
            ComputedMethodDefinition: {
                type: "MethodDefinition";
                computed: true;
                kind: "method" | "get" | "set";
                static: boolean;
                key: NodeRef<"Expression">;
                value: NodeRef<"FunctionExpression">;
            };
            ConstructorDefinition: {
                type: "MethodDefinition";
                computed: false;
                kind: "constructor";
                static: false;
                key: NodeRef<"Identifier"> | NodeRef<"StringLiteral">;
                value: NodeRef<"FunctionExpression">;
            };
            SimpleMethodDefinition: {
                type: "MethodDefinition";
                computed: false;
                kind: "method" | "get" | "set";
                static: boolean;
                key: NodeRef<"StaticPropertyKey">;
                value: NodeRef<"FunctionExpression">;
            };
            Super: {};
        };
        aliases: {
            Declaration: "ClassDeclaration";
            Expression: "ClassExpression" | "MetaProperty";
            Statement: "ClassDeclaration";
            Class: "ClassDeclaration" | "ClassExpression";
        };
    }
    /**
     * Definition for destructuring assignments.
     */
    interface DestructuringAssignment {
        nodes: {
            AssignmentArrayPattern: {
                type: "ArrayPattern";
                elements: (NodeRef<"AssignmentAssignmentPattern"> | NodeRef<"AssignmentTarget"> | NodeRef<"AssignmentRestElement"> | null)[];
            };
            AssignmentAssignmentPattern: {
                type: "AssignmentPattern";
                left: NodeRef<"AssignmentTarget">;
                right: NodeRef<"Expression">;
            };
            AssignmentShorthandProperty: {
                type: "Property";
                kind: "init";
                computed: false;
                method: false;
                shorthand: true;
                key: NodeRef<"Identifier">;
                value: NodeRef<"Identifier">;
            };
            AssignmentSimpleProperty: {
                type: "Property";
                kind: "init";
                computed: false;
                method: false;
                shorthand: false;
                key: NodeRef<"StaticPropertyKey">;
                value: NodeRef<"AssignmentAssignmentPattern"> | NodeRef<"AssignmentTarget">;
            };
            AssignmentComputedProperty: {
                type: "Property";
                kind: "init";
                computed: true;
                method: false;
                shorthand: false;
                key: NodeRef<"Expression">;
                value: NodeRef<"AssignmentAssignmentPattern"> | NodeRef<"AssignmentTarget">;
            };
            AssignmentObjectPattern: {
                type: "ObjectPattern";
                properties: NodeRef<"AssignmentProperty">[];
            };
            AssignmentRestElement: {
                type: "RestElement";
                argument: NodeRef<"AssignmentTarget">;
            };
        };
        aliases: {
            AssignmentTarget: "AssignmentArrayPattern" | "AssignmentObjectPattern";
            AssignmentProperty: "AssignmentComputedProperty" | "AssignmentShorthandProperty" | "AssignmentSimpleProperty";
        };
    }
    /**
     * Definition for destructuring binding.
     * This is similar to destructuring assignments, but disallows member
     * expressions.
     */
    interface DestructuringBinding {
        nodes: {
            FunctionDeclaration: {
                params: (NodeRef<"BindingAssignmentPattern"> | NodeRef<"BindingRestElement">)[];
            };
            FunctionExpression: {
                params: (NodeRef<"BindingAssignmentPattern"> | NodeRef<"BindingRestElement">)[];
            };
            BindingArrayPattern: {
                type: "ArrayPattern";
                elements: (NodeRef<"BindingAssignmentPattern"> | NodeRef<"BindingRestElement"> | NodeRef<"BindingTarget"> | null)[];
            };
            BindingAssignmentPattern: {
                type: "AssignmentPattern";
                left: NodeRef<"BindingTarget">;
                right: NodeRef<"Expression">;
            };
            BindingSimpleProperty: {
                type: "Property";
                kind: "init";
                computed: false;
                method: false;
                shorthand: false;
                key: NodeRef<"StaticPropertyKey">;
                value: NodeRef<"BindingAssignmentPattern"> | NodeRef<"BindingTarget">;
            };
            BindingShorthandProperty: {
                type: "Property";
                kind: "init";
                computed: false;
                method: false;
                shorthand: true;
                key: NodeRef<"Identifier">;
                value: NodeRef<"Identifier">;
            };
            BindingComputedProperty: {
                type: "Property";
                kind: "init";
                computed: true;
                method: false;
                shorthand: false;
                key: NodeRef<"Expression">;
                value: NodeRef<"BindingAssignmentPattern"> | NodeRef<"BindingTarget">;
            };
            BindingObjectPattern: {
                type: "ObjectPattern";
                properties: NodeRef<"BindingProperty">[];
            };
            BindingRestElement: {
                type: "RestElement";
                argument: NodeRef<"Identifier">;
            };
        };
        aliases: {
            BindingTarget: "BindingArrayPattern" | "BindingObjectPattern";
            BindingProperty: "BindingComputedProperty" | "BindingShorthandProperty" | "BindingSimpleProperty";
        };
    }
    /**
     * Definition for `for-of` statement and generators.
     */
    interface Iteration {
        nodes: {
            FunctionDeclaration: {
                generator: boolean;
            };
            FunctionExpression: {
                generator: boolean;
            };
            ForOfStatement: {
                left: NodeRef<"AssignmentTarget"> | NodeRef<"VariableDeclaration">;
                right: NodeRef<"Expression">;
                body: NodeRef<"Statement">;
            };
            YieldExpression: {
                delegate: boolean;
                argument: NodeRef<"Expression"> | null;
            };
        };
        aliases: {
            Expression: "YieldExpression";
            Statement: "ForOfStatement";
        };
    }
    /**
     * Definition for lexical bindings.
     */
    interface LexicalBinding {
        nodes: {
            VariableDeclaration: {
                kind: "var" | "let" | "const";
            };
        };
    }
    /**
     * Definition for modules.
     */
    interface Module {
        nodes: {
            ScriptProgram: {
                sourceType: "script";
            };
            ModuleProgram: {
                type: "Program";
                sourceType: "module";
                body: (NodeRef<"Statement"> | NodeRef<"ModuleItem">)[];
                comments: Comment[];
                tokens: Token[];
            };
            ExportAllDeclaration: {
                source: NodeRef<"StringLiteral">;
            };
            ExportDefaultDeclaration: {
                declaration: NodeRef<"AnonymousDefaultExportedClassDeclaration"> | NodeRef<"AnonymousDefaultExportedFunctionDeclaration"> | NodeRef<"ClassDeclaration"> | NodeRef<"FunctionDeclaration"> | NodeRef<"Expression">;
            };
            ExportNamedDeclDeclaration: {
                type: "ExportNamedDeclaration";
                declaration: NodeRef<"ClassDeclaration"> | NodeRef<"FunctionDeclaration"> | NodeRef<"VariableDeclaration">;
                specifiers: [];
                source: null;
            };
            ExportNamedFromDeclaration: {
                type: "ExportNamedDeclaration";
                declaration: null;
                specifiers: NodeRef<"ExportSpecifier">[];
                source: NodeRef<"StringLiteral">;
            };
            ImportDeclaration: {
                specifiers: (NodeRef<"ImportSpecifier"> | NodeRef<"ImportDefaultSpecifier"> | NodeRef<"ImportNamespaceSpecifier">)[];
                source: NodeRef<"StringLiteral">;
            };
            AnonymousDefaultExportedClassDeclaration: {
                type: "ClassDeclaration";
                id: null;
                superClass: NodeRef<"Expression"> | null;
                body: NodeRef<"ClassBody">;
            };
            AnonymousDefaultExportedFunctionDeclaration: {
                type: "FunctionDeclaration";
                generator: boolean;
                id: null;
                params: (NodeRef<"BindingAssignmentPattern"> | NodeRef<"BindingTarget"> | NodeRef<"BindingRestElement">)[];
                body: NodeRef<"BlockStatement">;
            };
            ExportSpecifier: {
                local: NodeRef<"Identifier">;
                exported: NodeRef<"Identifier">;
            };
            ImportDefaultSpecifier: {
                local: NodeRef<"Identifier">;
            };
            ImportNamespaceSpecifier: {
                local: NodeRef<"Identifier">;
            };
            ImportSpecifier: {
                imported: NodeRef<"Identifier">;
                local: NodeRef<"Identifier">;
            };
        };
        aliases: {
            ModuleItem: "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportNamedDeclDeclaration" | "ExportNamedFromDeclaration" | "ImportDeclaration";
        };
    }
    /**
     * Definition for object literal enhancements.
     */
    interface ObjectLiteralEnhancement {
        nodes: {
            AccessorProperty: {
                computed: false;
                method: false;
                shorthand: false;
            };
            SimpleProperty: {
                computed: false;
                method: false;
                shorthand: false;
            };
            ComputedAccessorProperty: {
                type: "Property";
                kind: "get" | "set";
                computed: true;
                method: false;
                shorthand: false;
                key: NodeRef<"Expression">;
                value: NodeRef<"FunctionExpression">;
            };
            ComputedMethodProperty: {
                type: "Property";
                kind: "init";
                computed: true;
                method: true;
                shorthand: false;
                key: NodeRef<"Expression">;
                value: NodeRef<"FunctionExpression">;
            };
            ComputedProperty: {
                type: "Property";
                kind: "init";
                computed: true;
                method: false;
                shorthand: false;
                key: NodeRef<"Expression">;
                value: NodeRef<"Expression">;
            };
            MethodProperty: {
                type: "Property";
                kind: "init";
                computed: false;
                method: true;
                shorthand: false;
                key: NodeRef<"StaticPropertyKey">;
                value: NodeRef<"FunctionExpression">;
            };
            ShorthandProperty: {
                type: "Property";
                kind: "init";
                computed: false;
                method: false;
                shorthand: true;
                key: NodeRef<"Identifier">;
                value: NodeRef<"Identifier">;
            };
        };
        aliases: {
            ObjectProperty: "ComputedAccessorProperty" | "ComputedMethodProperty" | "ComputedProperty" | "MethodProperty" | "ShorthandProperty";
        };
    }
    /**
     * Definition for RegExp `u`, `y` flags.
     */
    interface RegExpEnhancement {
        nodes: {
            RegExpLiteral: {
                value: null;
            };
        };
    }
    /**
     * Definition for spread elements.
     */
    interface Spread {
        nodes: {
            ArrayExpression: {
                elements: NodeRef<"SpreadElement">[];
            };
            CallExpression: {
                arguments: NodeRef<"SpreadElement">[];
            };
            NewExpression: {
                arguments: NodeRef<"SpreadElement">[];
            };
            SpreadElement: {
                argument: NodeRef<"Expression">;
            };
        };
    }
    /**
     * Definition for template literals.
     */
    interface TemplateLiteral {
        nodes: {
            TaggedTemplateExpression: {
                tag: NodeRef<"Expression">;
                quasi: NodeRef<"TemplateLiteral">;
            };
            TemplateLiteral: {
                quasis: NodeRef<"TemplateElement">[];
                expressions: NodeRef<"Expression">[];
            };
            TemplateElement: {
                tail: boolean;
                value: {
                    cooked: string;
                    raw: string;
                };
            };
        };
        aliases: {
            Expression: "TaggedTemplateExpression" | "TemplateLiteral";
        };
    }
}
/**
 * The AST definition of ES2015.
 */
export interface Definition extends Extends<ES5Definition, [Enhancement.ArrowFunction, Enhancement.Class, Enhancement.DestructuringAssignment, Enhancement.DestructuringBinding, Enhancement.Iteration, Enhancement.LexicalBinding, Enhancement.Module, Enhancement.ObjectLiteralEnhancement, Enhancement.RegExpEnhancement, Enhancement.Spread, Enhancement.TemplateLiteral]> {
}
