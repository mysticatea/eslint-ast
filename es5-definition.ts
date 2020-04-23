import { Comment } from "./lib/comment"
import { NodeRef } from "./lib/node-ref"
import { Token } from "./lib/token"

export { Comment, Token }

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
        DirectiveStatement: {
            type: "ExpressionStatement"
            expression: NodeRef<"StringLiteral">
            directive: string
        }
        DoWhileStatement: {
            body: NodeRef<"Statement">
            test: NodeRef<"Expression">
        }
        EmptyStatement: {}
        ExpressionStatement: {
            expression: NodeRef<"Expression">
            directive?: undefined
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
        FunctionDeclaration: {
            id: NodeRef<"Identifier">
            params: NodeRef<"BindingTarget">[]
            body: NodeRef<"BlockStatement">
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
        LogicalExpression: {
            operator: "||" | "&&"
            left: NodeRef<"Expression">
            right: NodeRef<"Expression">
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
            properties: NodeRef<"Property">[]
        }
        RegExpLiteral: {
            type: "Literal"
            value: RegExp
            regex: { pattern: string; flags: string }
            raw: string
        }
        SequenceExpression: {
            expressions: NodeRef<"Expression">[]
        }
        SimpleAssignmentExpression: {
            type: "AssignmentExpression"
            operator: "="
            left: NodeRef<"AssignmentTarget">
            right: NodeRef<"Expression">
        }
        SimpleMemberExpression: {
            type: "MemberExpression"
            computed: false
            object: NodeRef<"Expression">
            property: NodeRef<"Identifier">
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

        CatchClause: {
            param: NodeRef<"BindingTarget">
            body: NodeRef<"BlockStatement">
        }
        SimpleProperty: {
            type: "Property"
            kind: "init"
            key: NodeRef<"StaticPropertyKey">
            value: NodeRef<"Expression">
        }
        AccessorProperty: {
            type: "Property"
            kind: "get" | "set"
            key: NodeRef<"StaticPropertyKey">
            value: NodeRef<"FunctionExpression">
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
        AssignmentExpression:
            | "CompoundAssignmentExpression"
            | "SimpleAssignmentExpression"
        AssignmentTarget:
            | "Identifier"
            | "ComputedMemberExpression"
            | "SimpleMemberExpression"
        BindingTarget: "Identifier"
        SimpleAssignmentTarget:
            | "Identifier"
            | "ComputedMemberExpression"
            | "SimpleMemberExpression"
        Expression:
            | "BlockStatement"
            | "BreakStatement"
            | "ContinueStatement"
            | "DebuggerStatement"
            | "DoWhileStatement"
            | "EmptyStatement"
            | "ExpressionStatement"
            | "ForInStatement"
            | "ForStatement"
            | "FunctionDeclaration"
            | "IfStatement"
            | "LabeledStatement"
            | "ReturnStatement"
            | "SwitchStatement"
            | "ThrowStatement"
            | "TryStatement"
            | "VariableDeclaration"
            | "WhileStatement"
            | "WithStatement"
        Declaration: "FunctionDeclaration" | "VariableDeclaration"
        Function: "FunctionDeclaration" | "FunctionExpression"
        Literal:
            | "BooleanLiteral"
            | "NullLiteral"
            | "NumberLiteral"
            | "RegExpLiteral"
            | "StringLiteral"
        MemberExpression: "ComputedMemberExpression" | "SimpleMemberExpression"
        Program: "ScriptProgram"
        Property: "AccessorProperty" | "SimpleProperty"
        Statement:
            | "ArrayExpression"
            | "BinaryExpression"
            | "BooleanLiteral"
            | "CallExpression"
            | "CompoundAssignmentExpression"
            | "ComputedMemberExpression"
            | "ConditionalExpression"
            | "FunctionExpression"
            | "Identifier"
            | "LogicalExpression"
            | "NewExpression"
            | "NullLiteral"
            | "NumberLiteral"
            | "ObjectExpression"
            | "RegExpLiteral"
            | "SequenceExpression"
            | "SimpleAssignmentExpression"
            | "SimpleMemberExpression"
            | "StringLiteral"
            | "ThisExpression"
            | "UnaryExpression"
            | "UpdateExpression"
        StaticPropertyKey: "Identifier" | "NumberLiteral" | "StringLiteral"
    }
}
