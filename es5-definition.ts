/**
 * @fileoverview The AST definition for EcmaScript 5.
 */
import { NodeRef } from "./lib/node-ref"

/**
 * A range in the 0-based indices.
 */
export type IndexRange = readonly [number, number]

/**
 * The pair of a line number and a column number.
 */
export interface LineColumn {
    /** The 1-based line number. */
    readonly line: number
    /** The 0-based column number. */
    readonly column: number
}

/**
 * A range in the line/column pairs.
 */
export interface LineColumnRange {
    /** The begin location. */
    readonly start: LineColumn
    /** The end location. */
    readonly end: LineColumn
}

/**
 * Token's information.
 */
export interface Token {
    /** Token type. */
    readonly type: string
    /** Token value. */
    readonly value: string
    /** The range of this token in indices. */
    readonly range: IndexRange
    /** The range of this token in line/column. */
    readonly loc: LineColumnRange
}

/**
 * Comment's information.
 */
export interface Comment {
    /** Comment type. */
    readonly type: "Block" | "Line" | "Shebang"
    /** Comment content. */
    readonly value: string
    /** The range of this token in indices. */
    readonly range: IndexRange
    /** The range of this token in line/column. */
    readonly loc: LineColumnRange
}

/**
 * The AST definition of ES5.
 */
export interface Definition {
    nodes: {
        //----------------------------------------------------------------------
        // Root
        //----------------------------------------------------------------------

        ScriptProgram: {
            type: "Program"
            body: NodeRef<"Statement">[]
            comments: Comment[]
            tokens: Token[]
        }

        //----------------------------------------------------------------------
        // Statements
        //----------------------------------------------------------------------

        BlockStatement: {
            body: NodeRef<"Statement">[]
        }
        BreakStatement: {
            label: NodeRef<"Identifier"> | null
        }
        ContinueStatement: {
            label: NodeRef<"Identifier"> | null
        }
        DebuggerStatement: {}
        DoWhileStatement: {
            body: NodeRef<"Statement">
            test: NodeRef<"Expression">
        }
        EmptyStatement: {}
        ExpressionStatement: {
            expression: NodeRef<"Expression">
            directive: string | undefined
        }
        ForInStatement: {
            left: NodeRef<"AssignmentTarget"> | NodeRef<"VariableDeclaration">
            right: NodeRef<"Expression">
            body: NodeRef<"Statement">
        }
        ForStatement: {
            init: NodeRef<"VariableDeclaration"> | NodeRef<"Expression"> | null
            test: NodeRef<"Expression"> | null
            update: NodeRef<"Expression"> | null
            body: NodeRef<"Statement">
        }
        IfStatement: {
            test: NodeRef<"Expression">
            consequent: NodeRef<"Statement">
            alternate: NodeRef<"Statement"> | null
        }
        LabeledStatement: {
            label: NodeRef<"Identifier">
            body: NodeRef<"Statement">
        }
        PlainFunctionDeclaration: {
            type: "FunctionDeclaration"
            id: NodeRef<"Identifier">
            params: NodeRef<"BindingTarget">[]
            body: NodeRef<"BlockStatement">
        }
        ReturnStatement: {
            argument: NodeRef<"Expression"> | null
        }
        SwitchStatement: {
            discriminant: NodeRef<"Expression">
            cases: NodeRef<"SwitchCase">[]
        }
        ThrowStatement: {
            argument: NodeRef<"Expression">
        }
        TryStatement: {
            block: NodeRef<"BlockStatement">
            handler: NodeRef<"CatchClause"> | null
            finalizer: NodeRef<"BlockStatement"> | null
        }
        VariableDeclaration: {
            declarations: NodeRef<"VariableDeclarator">[]
        }
        WhileStatement: {
            test: NodeRef<"Expression">
            body: NodeRef<"Statement">
        }
        WithStatement: {
            object: NodeRef<"Expression">
            body: NodeRef<"Statement">
        }

        //----------------------------------------------------------------------
        // Expressions
        //----------------------------------------------------------------------

        ArrayExpression: {
            elements: (NodeRef<"Expression"> | null)[]
        }
        BinaryExpression: {
            operator:
                | "=="
                | "!="
                | "==="
                | "!=="
                | "<"
                | "<="
                | ">"
                | ">="
                | "<<"
                | ">>"
                | ">>>"
                | "|"
                | "^"
                | "&"
                | "+"
                | "-"
                | "*"
                | "/"
                | "%"
                | "in"
                | "instanceof"
            left: NodeRef<"Expression">
            right: NodeRef<"Expression">
        }
        BooleanLiteral: {
            type: "Literal"
            value: boolean
            regex: undefined
            raw: string
        }
        CallExpression: {
            callee: NodeRef<"Expression">
            arguments: NodeRef<"Expression">[]
        }
        CompoundAssignmentExpression: {
            type: "AssignmentExpression"
            operator:
                | "+="
                | "-="
                | "*="
                | "/="
                | "%="
                | "<<="
                | ">>="
                | ">>>="
                | "|="
                | "^="
                | "&="
            left: NodeRef<"SimpleAssignmentTarget">
            right: NodeRef<"Expression">
        }
        ComputedMemberExpression: {
            type: "MemberExpression"
            computed: true
            object: NodeRef<"Expression">
            property: NodeRef<"Expression">
        }
        ConditionalExpression: {
            test: NodeRef<"Expression">
            alternate: NodeRef<"Expression">
            consequent: NodeRef<"Expression">
        }
        FunctionExpression: {
            id: NodeRef<"Identifier"> | null
            params: NodeRef<"BindingTarget">[]
            body: NodeRef<"BlockStatement">
        }
        Identifier: {
            name: string
        }
        NewExpression: {
            callee: NodeRef<"Expression">
            arguments: NodeRef<"Expression">[]
        }
        NullLiteral: {
            type: "Literal"
            value: null
            regex: undefined
            raw: string
        }
        NumberLiteral: {
            type: "Literal"
            value: number
            regex: undefined
            raw: string
        }
        ObjectExpression: {
            properties: NodeRef<"ObjectProperty">[]
        }
        PlainAssignmentExpression: {
            type: "AssignmentExpression"
            operator: "="
            left: NodeRef<"AssignmentTarget">
            right: NodeRef<"Expression">
        }
        PlainLogicalExpression: {
            type: "LogicalExpression"
            operator: "||" | "&&"
            left: NodeRef<"Expression">
            right: NodeRef<"Expression">
        }
        PlainMemberExpression: {
            type: "MemberExpression"
            computed: false
            object: NodeRef<"Expression">
            property: NodeRef<"Identifier">
        }
        RegExpLiteral: {
            type: "Literal"
            value: RegExp
            regex: { readonly pattern: string; readonly flags: string }
            raw: string
        }
        SequenceExpression: {
            expressions: NodeRef<"Expression">[]
        }
        StringLiteral: {
            type: "Literal"
            value: string
            regex: undefined
            raw: string
        }
        ThisExpression: {}
        UnaryExpression: {
            operator: "-" | "+" | "!" | "~" | "typeof" | "void" | "delete"
            prefix: boolean
            argument: NodeRef<"Expression">
        }
        UpdateExpression: {
            operator: "++" | "--"
            argument: NodeRef<"SimpleAssignmentTarget">
            prefix: boolean
        }

        //----------------------------------------------------------------------
        // Others
        //----------------------------------------------------------------------

        AccessorProperty: {
            type: "Property"
            kind: "get" | "set"
            key: NodeRef<"StaticPropertyKey">
            value: NodeRef<"FunctionExpression">
        }
        CatchClause: {
            param: NodeRef<"BindingTarget">
            body: NodeRef<"BlockStatement">
        }
        PlainProperty: {
            type: "Property"
            kind: "init"
            key: NodeRef<"StaticPropertyKey">
            value: NodeRef<"Expression">
        }
        SwitchCase: {
            test: NodeRef<"Expression"> | null
            consequent: NodeRef<"Statement">[]
        }
        VariableDeclarator: {
            id: NodeRef<"BindingTarget">
            init: NodeRef<"Expression"> | null
        }
    }

    aliases: {
        AssignmentTarget:
            | "ComputedMemberExpression"
            | "Identifier"
            | "PlainMemberExpression"
        BindingTarget: "Identifier"
        Expression:
            | "ArrayExpression"
            | "BinaryExpression"
            | "BooleanLiteral"
            | "CallExpression"
            | "CompoundAssignmentExpression"
            | "ComputedMemberExpression"
            | "ConditionalExpression"
            | "FunctionExpression"
            | "Identifier"
            | "NewExpression"
            | "NullLiteral"
            | "NumberLiteral"
            | "ObjectExpression"
            | "PlainAssignmentExpression"
            | "PlainLogicalExpression"
            | "PlainMemberExpression"
            | "RegExpLiteral"
            | "SequenceExpression"
            | "StringLiteral"
            | "ThisExpression"
            | "UnaryExpression"
            | "UpdateExpression"
        Declaration: "PlainFunctionDeclaration" | "VariableDeclaration"
        Function: "FunctionExpression" | "PlainFunctionDeclaration"
        ObjectProperty: "AccessorProperty" | "PlainProperty"
        SimpleAssignmentTarget:
            | "Identifier"
            | "ComputedMemberExpression"
            | "PlainMemberExpression"
        Statement:
            | "BlockStatement"
            | "BreakStatement"
            | "ContinueStatement"
            | "DebuggerStatement"
            | "DoWhileStatement"
            | "EmptyStatement"
            | "ExpressionStatement"
            | "ForInStatement"
            | "ForStatement"
            | "IfStatement"
            | "LabeledStatement"
            | "PlainFunctionDeclaration"
            | "ReturnStatement"
            | "SwitchStatement"
            | "ThrowStatement"
            | "TryStatement"
            | "VariableDeclaration"
            | "WhileStatement"
            | "WithStatement"
        StaticPropertyKey: "Identifier" | "NumberLiteral" | "StringLiteral"
    }
    commonProperties: {
        loc: LineColumnRange
        range: IndexRange
    }
}
