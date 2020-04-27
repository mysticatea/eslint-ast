import { AST, Comment, IndexRange, LineColumnRange, Token } from "../es5"
import { Equals, EqualsObject, assert } from "./lib/assert"

//------------------------------------------------------------------------------
// Root
//------------------------------------------------------------------------------

assert<
    EqualsObject<
        AST.Program,
        {
            readonly parent: null | undefined
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "Program"
            readonly body: readonly AST.Statement[]
            readonly tokens: readonly Token[]
            readonly comments: readonly Comment[]
        }
    >
>()

//------------------------------------------------------------------------------
// Statements
//------------------------------------------------------------------------------

type StatementParent =
    | AST.Program
    | AST.BlockStatement
    | AST.DoWhileStatement
    | AST.ForInStatement
    | AST.ForStatement
    | AST.IfStatement
    | AST.LabeledStatement
    | AST.WhileStatement
    | AST.WithStatement
    | AST.SwitchCase

assert<
    EqualsObject<
        AST.BlockStatement,
        {
            readonly parent:
                | StatementParent
                | AST.Function
                | AST.TryStatement
                | AST.CatchClause
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "BlockStatement"
            readonly body: readonly AST.Statement[]
        }
    >
>()

assert<
    EqualsObject<
        AST.BreakStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "BreakStatement"
            readonly label: AST.Identifier | null
        }
    >
>()

assert<
    EqualsObject<
        AST.ContinueStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ContinueStatement"
            readonly label: AST.Identifier | null
        }
    >
>()

assert<
    EqualsObject<
        AST.DebuggerStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "DebuggerStatement"
        }
    >
>()

assert<
    EqualsObject<
        AST.DoWhileStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "DoWhileStatement"
            readonly body: AST.Statement
            readonly test: AST.Expression
        }
    >
>()

assert<
    EqualsObject<
        AST.EmptyStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "EmptyStatement"
        }
    >
>()

assert<
    EqualsObject<
        AST.ExpressionStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ExpressionStatement"
            readonly expression: AST.Expression
            readonly directive: string | undefined
        }
    >
>()

assert<
    EqualsObject<
        AST.ForInStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ForInStatement"
            readonly left: AST.VariableDeclaration | AST.AssignmentTarget
            readonly right: AST.Expression
            readonly body: AST.Statement
        }
    >
>()

assert<
    EqualsObject<
        AST.ForStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ForStatement"
            readonly init: AST.VariableDeclaration | AST.Expression | null
            readonly test: AST.Expression | null
            readonly update: AST.Expression | null
            readonly body: AST.Statement
        }
    >
>()

assert<
    EqualsObject<
        AST.FunctionDeclaration,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "FunctionDeclaration"
            readonly id: AST.Identifier
            readonly params: readonly AST.BindingTarget[]
            readonly body: AST.BlockStatement
        }
    >
>()

assert<
    EqualsObject<
        AST.IfStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "IfStatement"
            readonly test: AST.Expression
            readonly consequent: AST.Statement
            readonly alternate: AST.Statement | null
        }
    >
>()

assert<
    EqualsObject<
        AST.LabeledStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "LabeledStatement"
            readonly label: AST.Identifier
            readonly body: AST.Statement
        }
    >
>()

assert<
    EqualsObject<
        AST.ReturnStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ReturnStatement"
            readonly argument: AST.Expression | null
        }
    >
>()

assert<
    EqualsObject<
        AST.SwitchStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "SwitchStatement"
            readonly discriminant: AST.Expression
            readonly cases: readonly AST.SwitchCase[]
        }
    >
>()
assert<
    EqualsObject<
        AST.SwitchCase,
        {
            readonly parent: AST.SwitchStatement
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "SwitchCase"
            readonly test: AST.Expression | null
            readonly consequent: readonly AST.Statement[]
        }
    >
>()

assert<
    EqualsObject<
        AST.ThrowStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ThrowStatement"
            readonly argument: AST.Expression
        }
    >
>()

assert<
    EqualsObject<
        AST.TryStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "TryStatement"
            readonly block: AST.BlockStatement
            readonly handler: AST.CatchClause | null
            readonly finalizer: AST.BlockStatement | null
        }
    >
>()
assert<
    EqualsObject<
        AST.CatchClause,
        {
            readonly parent: AST.TryStatement
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "CatchClause"
            readonly param: AST.BindingTarget
            readonly body: AST.BlockStatement
        }
    >
>()

assert<
    EqualsObject<
        AST.VariableDeclaration,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "VariableDeclaration"
            readonly declarations: readonly AST.VariableDeclarator[]
        }
    >
>()
assert<
    EqualsObject<
        AST.VariableDeclarator,
        {
            readonly parent: AST.VariableDeclaration
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "VariableDeclarator"
            readonly id: AST.BindingTarget
            readonly init: AST.Expression | null
        }
    >
>()

assert<
    EqualsObject<
        AST.WhileStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "WhileStatement"
            readonly test: AST.Expression
            readonly body: AST.Statement
        }
    >
>()

assert<
    EqualsObject<
        AST.WithStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "WithStatement"
            readonly object: AST.Expression
            readonly body: AST.Statement
        }
    >
>()

//------------------------------------------------------------------------------
// Expressions
//------------------------------------------------------------------------------

type ExpressionParent =
    | AST.DoWhileStatement
    | AST.ExpressionStatement
    | AST.ForInStatement
    | AST.ForStatement
    | AST.IfStatement
    | AST.ReturnStatement
    | AST.SwitchStatement
    | AST.ThrowStatement
    | AST.WhileStatement
    | AST.WithStatement
    | AST.ArrayExpression
    | AST.BinaryExpression
    | AST.CallExpression
    | AST.CompoundAssignmentExpression
    | AST.ComputedMemberExpression
    | AST.ConditionalExpression
    | AST.LogicalExpression
    | AST.NewExpression
    | AST.SequenceExpression
    | AST.SimpleAssignmentExpression
    | AST.SimpleMemberExpression
    | AST.UnaryExpression
    | AST.SimpleProperty
    | AST.SwitchCase
    | AST.VariableDeclarator

assert<
    EqualsObject<
        AST.ArrayExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ArrayExpression"
            readonly elements: readonly (AST.Expression | null)[]
        }
    >
>()

assert<
    EqualsObject<
        AST.AssignmentExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "AssignmentExpression"
            readonly operator:
                | "="
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
            readonly left: AST.AssignmentTarget
            readonly right: AST.Expression
        }
    >
>()

assert<
    EqualsObject<
        AST.BinaryExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "BinaryExpression"
            readonly operator:
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
            readonly left: AST.Expression
            readonly right: AST.Expression
        }
    >
>()

assert<
    EqualsObject<
        AST.CallExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "CallExpression"
            readonly callee: AST.Expression
            readonly arguments: readonly AST.Expression[]
        }
    >
>()

assert<
    EqualsObject<
        AST.ConditionalExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ConditionalExpression"
            readonly test: AST.Expression
            readonly consequent: AST.Expression
            readonly alternate: AST.Expression
        }
    >
>()

assert<
    EqualsObject<
        AST.FunctionExpression,
        {
            readonly parent: ExpressionParent | AST.AccessorProperty
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "FunctionExpression"
            readonly id: AST.Identifier | null
            readonly params: readonly AST.BindingTarget[]
            readonly body: AST.BlockStatement
        }
    >
>()

assert<
    EqualsObject<
        AST.Identifier,
        {
            readonly parent:
                | ExpressionParent
                | AST.BreakStatement
                | AST.ContinueStatement
                | AST.FunctionDeclaration
                | AST.LabeledStatement
                | AST.FunctionExpression
                | AST.UpdateExpression
                | AST.AccessorProperty
                | AST.CatchClause
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "Identifier"
            readonly name: string
        }
    >
>()

assert<
    EqualsObject<
        AST.Literal,
        {
            readonly parent: ExpressionParent | AST.AccessorProperty
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "Literal"
            readonly value: boolean | null | number | string | RegExp
            readonly regex?: {
                readonly pattern: string
                readonly flags: string
            }
            readonly raw: string
        }
    >
>()
{
    const node = {} as AST.Literal
    if (node.regex) {
        assert<Equals<typeof node.value, RegExp>>()
    } else {
        assert<Equals<typeof node.value, boolean | null | number | string>>()
    }
}

assert<
    EqualsObject<
        AST.LogicalExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "LogicalExpression"
            readonly operator: "||" | "&&"
            readonly left: AST.Expression
            readonly right: AST.Expression
        }
    >
>()

assert<
    EqualsObject<
        AST.MemberExpression,
        {
            readonly parent: ExpressionParent | AST.UpdateExpression
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "MemberExpression"
            readonly computed: boolean
            readonly object: AST.Expression
            readonly property: AST.Expression
        }
    >
>()
{
    const node = {} as AST.MemberExpression
    if (node.computed) {
        assert<Equals<typeof node.property, AST.Expression>>()
    } else {
        assert<Equals<typeof node.property, AST.Identifier>>()
    }
}

assert<
    EqualsObject<
        AST.NewExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "NewExpression"
            readonly callee: AST.Expression
            readonly arguments: readonly AST.Expression[]
        }
    >
>()

assert<
    EqualsObject<
        AST.ObjectExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ObjectExpression"
            readonly properties: readonly AST.ObjectProperty[]
        }
    >
>()
assert<
    EqualsObject<
        AST.ObjectProperty,
        {
            readonly parent: AST.ObjectExpression
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "Property"
            readonly kind: "init" | "get" | "set"
            readonly key: AST.StaticPropertyKey
            readonly value: AST.Expression
        }
    >
>()
{
    const node = {} as AST.ObjectProperty
    if (node.kind === "init") {
        assert<Equals<typeof node.value, AST.Expression>>()
    } else {
        assert<Equals<typeof node.value, AST.FunctionExpression>>()
    }
}

assert<
    EqualsObject<
        AST.SequenceExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "SequenceExpression"
            readonly expressions: readonly AST.Expression[]
        }
    >
>()

assert<
    EqualsObject<
        AST.ThisExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ThisExpression"
        }
    >
>()

assert<
    EqualsObject<
        AST.UnaryExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "UnaryExpression"
            readonly operator:
                | "-"
                | "+"
                | "!"
                | "~"
                | "typeof"
                | "void"
                | "delete"
            readonly prefix: boolean
            readonly argument: AST.Expression
        }
    >
>()

assert<
    EqualsObject<
        AST.UpdateExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "UpdateExpression"
            readonly operator: "++" | "--"
            readonly prefix: boolean
            readonly argument: AST.SimpleAssignmentTarget
        }
    >
>()

//------------------------------------------------------------------------------
// Aliases
//------------------------------------------------------------------------------

assert<
    EqualsObject<
        AST.AssignmentTarget,
        | AST.Identifier
        | AST.ComputedMemberExpression
        | AST.SimpleMemberExpression
    >
>()

assert<EqualsObject<AST.BindingTarget, AST.Identifier>>()

assert<
    EqualsObject<
        AST.Expression,
        | AST.ArrayExpression
        | AST.BinaryExpression
        | AST.BooleanLiteral
        | AST.CallExpression
        | AST.CompoundAssignmentExpression
        | AST.ComputedMemberExpression
        | AST.ConditionalExpression
        | AST.FunctionExpression
        | AST.Identifier
        | AST.LogicalExpression
        | AST.NewExpression
        | AST.NullLiteral
        | AST.NumberLiteral
        | AST.ObjectExpression
        | AST.RegExpLiteral
        | AST.SequenceExpression
        | AST.SimpleAssignmentExpression
        | AST.SimpleMemberExpression
        | AST.StringLiteral
        | AST.ThisExpression
        | AST.UnaryExpression
        | AST.UpdateExpression
    >
>()

assert<
    EqualsObject<
        AST.Declaration,
        AST.FunctionDeclaration | AST.VariableDeclaration
    >
>()

assert<
    EqualsObject<AST.Function, AST.FunctionDeclaration | AST.FunctionExpression>
>()

assert<
    EqualsObject<AST.ObjectProperty, AST.AccessorProperty | AST.SimpleProperty>
>()

assert<
    EqualsObject<
        AST.SimpleAssignmentTarget,
        | AST.Identifier
        | AST.ComputedMemberExpression
        | AST.SimpleMemberExpression
    >
>()

assert<
    EqualsObject<
        AST.Statement,
        | AST.BlockStatement
        | AST.BreakStatement
        | AST.ContinueStatement
        | AST.DebuggerStatement
        | AST.DoWhileStatement
        | AST.EmptyStatement
        | AST.ExpressionStatement
        | AST.ForInStatement
        | AST.ForStatement
        | AST.FunctionDeclaration
        | AST.IfStatement
        | AST.LabeledStatement
        | AST.ReturnStatement
        | AST.SwitchStatement
        | AST.ThrowStatement
        | AST.TryStatement
        | AST.VariableDeclaration
        | AST.WhileStatement
        | AST.WithStatement
    >
>()

assert<
    EqualsObject<
        AST.StaticPropertyKey,
        AST.Identifier | AST.NumberLiteral | AST.StringLiteral
    >
>()
