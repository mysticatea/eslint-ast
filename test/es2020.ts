import { AST, Comment, IndexRange, LineColumnRange, Token } from "../es2020"
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
            readonly sourceType: "script" | "module"
            readonly body: readonly (AST.Statement | AST.ModuleItem)[]
            readonly tokens: readonly Token[]
            readonly comments: readonly Comment[]
        }
    >
>()
{
    const node = {} as AST.Program
    if (node.sourceType === "script") {
        assert<Equals<typeof node.body, readonly AST.Statement[]>>()
    } else {
        assert<
            Equals<
                typeof node.body,
                readonly (AST.Statement | AST.ModuleItem)[]
            >
        >()
    }
}

//------------------------------------------------------------------------------
// Module Items
//------------------------------------------------------------------------------

assert<
    EqualsObject<
        AST.ExportAllDeclaration,
        {
            readonly parent: AST.ModuleProgram
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ExportAllDeclaration"
            readonly exported: AST.Identifier | null
            readonly source: AST.StringLiteral
        }
    >
>()

assert<
    EqualsObject<
        AST.ExportDefaultDeclaration,
        {
            readonly parent: AST.ModuleProgram
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ExportDefaultDeclaration"
            readonly declaration:
                | AST.AnonymousDefaultExportedClassDeclaration
                | AST.AnonymousDefaultExportedFunctionDeclaration
                | AST.PlainClassDeclaration
                | AST.Expression
                | AST.PlainFunctionDeclaration
        }
    >
>()
assert<
    EqualsObject<
        AST.AnonymousDefaultExportedClassDeclaration,
        {
            readonly parent: AST.ExportDefaultDeclaration
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ClassDeclaration"
            readonly id: null
            readonly superClass: AST.Expression | null
            readonly body: AST.ClassBody
        }
    >
>()
assert<
    EqualsObject<
        AST.AnonymousDefaultExportedFunctionDeclaration,
        {
            readonly parent: AST.ExportDefaultDeclaration
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "FunctionDeclaration"
            readonly async: boolean
            readonly generator: boolean
            readonly id: null
            readonly params: readonly (
                | AST.BindingAssignmentPattern
                | AST.BindingRestElement
                | AST.BindingTarget
            )[]
            readonly body: AST.BlockStatement
        }
    >
>()

assert<
    EqualsObject<
        AST.ExportNamedDeclaration,
        {
            readonly parent: AST.ModuleProgram
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ExportNamedDeclaration"
            readonly declaration: AST.Declaration | null
            readonly specifiers: readonly AST.ExportSpecifier[]
            readonly source: AST.StringLiteral | null
        }
    >
>()
assert<
    EqualsObject<
        AST.ExportSpecifier,
        {
            readonly parent: AST.ExportNamedFromDeclaration
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ExportSpecifier"
            readonly local: AST.Identifier
            readonly exported: AST.Identifier
        }
    >
>()

assert<
    EqualsObject<
        AST.ImportDeclaration,
        {
            readonly parent: AST.ModuleProgram
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ImportDeclaration"
            readonly specifiers: readonly (
                | AST.ImportDefaultSpecifier
                | AST.ImportNamespaceSpecifier
                | AST.ImportSpecifier
            )[]
            readonly source: AST.StringLiteral
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
    | AST.ForOfStatement
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
                | AST.AnonymousDefaultExportedFunctionDeclaration
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
        AST.ClassDeclaration,
        {
            readonly parent:
                | StatementParent
                | AST.ExportDefaultDeclaration
                | AST.ExportNamedDeclDeclaration
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ClassDeclaration"
            readonly id: AST.Identifier | null
            readonly superClass: AST.Expression | null
            readonly body: AST.ClassBody
        }
    >
>()
assert<
    EqualsObject<
        AST.ClassBody,
        {
            readonly parent:
                | AST.AnonymousDefaultExportedClassDeclaration
                | AST.Class
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ClassBody"
            readonly body: readonly AST.MethodDefinition[]
        }
    >
>()
assert<
    EqualsObject<
        AST.MethodDefinition,
        {
            readonly parent: AST.ClassBody
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "MethodDefinition"
            readonly kind: "constructor" | "method" | "get" | "set"
            readonly static: boolean
            readonly computed: boolean
            readonly key: AST.Expression
            readonly value: AST.FunctionExpression
        }
    >
>()
{
    const node = {} as AST.MethodDefinition
    if (node.kind === "constructor") {
        assert<Equals<typeof node.computed, false>>()
        assert<Equals<typeof node.key, AST.Identifier | AST.StringLiteral>>()
    }
    if (node.computed) {
        assert<Equals<typeof node.kind, "method" | "get" | "set">>()
        assert<Equals<typeof node.key, AST.Expression>>()
    } else {
        assert<
            Equals<typeof node.kind, "constructor" | "method" | "get" | "set">
        >()
        assert<Equals<typeof node.key, AST.StaticPropertyKey>>()
    }
}

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
        AST.ForOfStatement,
        {
            readonly parent: StatementParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ForOfStatement"
            readonly await: boolean
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
            readonly parent:
                | StatementParent
                | AST.ExportDefaultDeclaration
                | AST.ExportNamedDeclDeclaration
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "FunctionDeclaration"
            readonly async: boolean
            readonly generator: boolean
            readonly id: AST.Identifier | null
            readonly params: readonly (
                | AST.BindingAssignmentPattern
                | AST.BindingRestElement
                | AST.BindingTarget
            )[]
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
            readonly param: AST.BindingTarget | null
            readonly body: AST.BlockStatement
        }
    >
>()

assert<
    EqualsObject<
        AST.VariableDeclaration,
        {
            readonly parent: StatementParent | AST.ExportNamedDeclDeclaration
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "VariableDeclaration"
            readonly kind: "const" | "let" | "var"
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
        AST.BindingArrayPattern,
        {
            readonly parent:
                | AST.AnonymousDefaultExportedFunctionDeclaration
                | AST.ArrowFunctionExpression
                | AST.BindingArrayPattern
                | AST.BindingAssignmentPattern
                | AST.BindingComputedProperty
                | AST.BindingRestElement
                | AST.BindingPlainProperty
                | AST.CatchClause
                | AST.PlainFunctionDeclaration
                | AST.FunctionExpression
                | AST.VariableDeclarator
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ArrayPattern"
            readonly elements: readonly (
                | AST.BindingAssignmentPattern
                | AST.BindingRestElement
                | AST.BindingTarget
                | null
            )[]
        }
    >
>()
assert<
    EqualsObject<
        AST.BindingObjectPattern,
        {
            readonly parent:
                | AST.AnonymousDefaultExportedFunctionDeclaration
                | AST.ArrowFunctionExpression
                | AST.BindingArrayPattern
                | AST.BindingAssignmentPattern
                | AST.BindingComputedProperty
                | AST.BindingRestElement
                | AST.BindingPlainProperty
                | AST.CatchClause
                | AST.PlainFunctionDeclaration
                | AST.FunctionExpression
                | AST.VariableDeclarator
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ObjectPattern"
            readonly properties: readonly (
                | AST.BindingProperty
                | AST.BindingRestProperty
            )[]
        }
    >
>()
assert<
    EqualsObject<
        AST.BindingProperty,
        {
            readonly parent: AST.BindingObjectPattern
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "Property"
            readonly kind: "init"
            readonly computed: boolean
            readonly method: false
            readonly shorthand: boolean
            readonly key: AST.Expression
            readonly value: AST.BindingAssignmentPattern | AST.BindingTarget
        }
    >
>()
assert<
    EqualsObject<
        AST.BindingAssignmentPattern,
        {
            readonly parent:
                | AST.AnonymousDefaultExportedFunctionDeclaration
                | AST.ArrowFunctionExpression
                | AST.BindingArrayPattern
                | AST.BindingComputedProperty
                | AST.BindingPlainProperty
                | AST.PlainFunctionDeclaration
                | AST.FunctionExpression
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "AssignmentPattern"
            readonly left: AST.BindingTarget
            readonly right: AST.Expression
        }
    >
>()
assert<
    EqualsObject<
        AST.BindingRestElement,
        {
            readonly parent:
                | AST.AnonymousDefaultExportedFunctionDeclaration
                | AST.ArrowFunctionExpression
                | AST.BindingArrayPattern
                | AST.PlainFunctionDeclaration
                | AST.FunctionExpression
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "RestElement"
            readonly argument: AST.BindingTarget
        }
    >
>()
assert<
    EqualsObject<
        AST.BindingRestProperty,
        {
            readonly parent: AST.BindingObjectPattern
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "RestElement"
            readonly argument: AST.Identifier
        }
    >
>()
{
    const node = {} as AST.BindingProperty
    if (node.computed) {
        assert<Equals<typeof node.shorthand, false>>()
        assert<Equals<typeof node.key, AST.Expression>>()
        assert<
            Equals<
                typeof node.value,
                AST.BindingAssignmentPattern | AST.BindingTarget
            >
        >()
    } else {
        assert<Equals<typeof node.shorthand, boolean>>()
        assert<Equals<typeof node.key, AST.StaticPropertyKey>>()
        assert<
            Equals<
                typeof node.value,
                AST.BindingAssignmentPattern | AST.BindingTarget
            >
        >()
    }
    if (node.shorthand) {
        assert<Equals<typeof node.computed, false>>()
        assert<Equals<typeof node.key, AST.Identifier>>()
        assert<Equals<typeof node.value, AST.Identifier>>()
    }
}

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
    | AST.PlainClassDeclaration
    | AST.DoWhileStatement
    | AST.ExportDefaultDeclaration
    | AST.ExpressionStatement
    | AST.ForInStatement
    | AST.ForOfStatement
    | AST.ForStatement
    | AST.IfStatement
    | AST.ReturnStatement
    | AST.SwitchStatement
    | AST.ThrowStatement
    | AST.WhileStatement
    | AST.WithStatement
    | AST.ArrayExpression
    | AST.ArrowFunctionExpression
    | AST.AwaitExpression
    | AST.BinaryExpression
    | AST.CallExpression
    | AST.ClassExpression
    | AST.CompoundAssignmentExpression
    | AST.ComputedMemberExpression
    | AST.ConditionalExpression
    | AST.ImportExpression
    | AST.LogicalExpression
    | AST.NewExpression
    | AST.SequenceExpression
    | AST.PlainAssignmentExpression
    | AST.PlainMemberExpression
    | AST.TaggedTemplateExpression
    | AST.TemplateLiteral
    | AST.UnaryExpression
    | AST.YieldExpression
    | AST.AnonymousDefaultExportedClassDeclaration
    | AST.AssignmentAssignmentPattern
    | AST.AssignmentComputedProperty
    | AST.BindingAssignmentPattern
    | AST.BindingComputedProperty
    | AST.ComputedAccessorProperty
    | AST.ComputedMethodDefinition
    | AST.ComputedMethodProperty
    | AST.ComputedProperty
    | AST.PlainProperty
    | AST.SpreadElement
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
            readonly elements: readonly (
                | AST.Expression
                | AST.SpreadElement
                | null
            )[]
        }
    >
>()
assert<
    EqualsObject<
        AST.SpreadElement,
        {
            readonly parent:
                | AST.ArrayExpression
                | AST.CallExpression
                | AST.NewExpression
                | AST.ObjectExpression
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "SpreadElement"
            readonly argument: AST.Expression
        }
    >
>()

assert<
    EqualsObject<
        AST.ArrowFunctionExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ArrowFunctionExpression"
            readonly async: boolean
            readonly id: AST.Identifier | null
            readonly params: readonly (
                | AST.BindingAssignmentPattern
                | AST.BindingRestElement
                | AST.BindingTarget
            )[]
            readonly body: AST.BlockStatement | AST.Expression
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
                | "**="
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
        AST.AssignmentArrayPattern,
        {
            readonly parent:
                | AST.AssignmentArrayPattern
                | AST.AssignmentAssignmentPattern
                | AST.AssignmentComputedProperty
                | AST.AssignmentRestElement
                | AST.AssignmentPlainProperty
                | AST.ForInStatement
                | AST.ForOfStatement
                | AST.PlainAssignmentExpression
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ArrayPattern"
            readonly elements: readonly (
                | AST.AssignmentAssignmentPattern
                | AST.AssignmentRestElement
                | AST.AssignmentTarget
                | null
            )[]
        }
    >
>()
assert<
    EqualsObject<
        AST.AssignmentObjectPattern,
        {
            readonly parent:
                | AST.AssignmentArrayPattern
                | AST.AssignmentAssignmentPattern
                | AST.AssignmentComputedProperty
                | AST.AssignmentRestElement
                | AST.AssignmentPlainProperty
                | AST.ForInStatement
                | AST.ForOfStatement
                | AST.PlainAssignmentExpression
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ObjectPattern"
            readonly properties: readonly (
                | AST.AssignmentProperty
                | AST.AssignmentRestProperty
            )[]
        }
    >
>()
assert<
    EqualsObject<
        AST.AssignmentProperty,
        {
            readonly parent: AST.AssignmentObjectPattern
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "Property"
            readonly kind: "init"
            readonly computed: boolean
            readonly method: false
            readonly shorthand: boolean
            readonly key: AST.Expression
            readonly value:
                | AST.AssignmentAssignmentPattern
                | AST.AssignmentTarget
        }
    >
>()
assert<
    EqualsObject<
        AST.AssignmentAssignmentPattern,
        {
            readonly parent:
                | AST.AssignmentArrayPattern
                | AST.AssignmentComputedProperty
                | AST.AssignmentPlainProperty
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "AssignmentPattern"
            readonly left: AST.AssignmentTarget
            readonly right: AST.Expression
        }
    >
>()
assert<
    EqualsObject<
        AST.AssignmentRestElement,
        {
            readonly parent: AST.AssignmentArrayPattern
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "RestElement"
            readonly argument: AST.AssignmentTarget
        }
    >
>()
assert<
    EqualsObject<
        AST.AssignmentRestProperty,
        {
            readonly parent: AST.AssignmentObjectPattern
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "RestElement"
            readonly argument: AST.SimpleAssignmentTarget
        }
    >
>()
{
    const node = {} as AST.AssignmentExpression
    if (node.operator === "=") {
        assert<Equals<typeof node.left, AST.AssignmentTarget>>()
    } else {
        assert<Equals<typeof node.left, AST.SimpleAssignmentTarget>>()
    }
}
{
    const node = {} as AST.AssignmentProperty
    if (node.computed) {
        assert<Equals<typeof node.shorthand, false>>()
        assert<Equals<typeof node.key, AST.Expression>>()
        assert<
            Equals<
                typeof node.value,
                AST.AssignmentAssignmentPattern | AST.AssignmentTarget
            >
        >()
    } else {
        assert<Equals<typeof node.shorthand, boolean>>()
        assert<Equals<typeof node.key, AST.StaticPropertyKey>>()
        assert<
            Equals<
                typeof node.value,
                AST.AssignmentAssignmentPattern | AST.AssignmentTarget
            >
        >()
    }
    if (node.shorthand) {
        assert<Equals<typeof node.computed, false>>()
        assert<Equals<typeof node.key, AST.Identifier>>()
        assert<Equals<typeof node.value, AST.Identifier>>()
    }
}

assert<
    EqualsObject<
        AST.AwaitExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "AwaitExpression"
            readonly argument: AST.Expression
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
                | "**"
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
            readonly callee: AST.Expression | AST.Super
            readonly arguments: readonly (AST.Expression | AST.SpreadElement)[]
        }
    >
>()
assert<
    EqualsObject<
        AST.Super,
        {
            readonly parent: AST.CallExpression | AST.MemberExpression
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "Super"
        }
    >
>()

assert<
    EqualsObject<
        AST.ClassExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ClassExpression"
            readonly id: AST.Identifier | null
            readonly superClass: AST.Expression | null
            readonly body: AST.ClassBody
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
            readonly parent:
                | ExpressionParent
                | AST.AccessorProperty
                | AST.MethodProperty
                | AST.MethodDefinition
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "FunctionExpression"
            readonly async: boolean
            readonly generator: boolean
            readonly id: AST.Identifier | null
            readonly params: readonly (
                | AST.BindingAssignmentPattern
                | AST.BindingRestElement
                | AST.BindingTarget
            )[]
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
                | AST.PlainFunctionDeclaration
                | AST.LabeledStatement
                | AST.ExportAllDeclaration
                | AST.FunctionExpression
                | AST.MetaProperty
                | AST.UpdateExpression
                | AST.AccessorProperty
                | AST.AnonymousDefaultExportedFunctionDeclaration
                | AST.AssignmentArrayPattern
                | AST.AssignmentRestElement
                | AST.AssignmentRestProperty
                | AST.AssignmentShorthandProperty
                | AST.AssignmentPlainProperty
                | AST.BindingArrayPattern
                | AST.BindingRestElement
                | AST.BindingRestProperty
                | AST.BindingShorthandProperty
                | AST.BindingPlainProperty
                | AST.CatchClause
                | AST.ConstructorDefinition
                | AST.ExportSpecifier
                | AST.ImportDefaultSpecifier
                | AST.ImportNamespaceSpecifier
                | AST.ImportSpecifier
                | AST.MethodProperty
                | AST.PlainMethodDefinition
                | AST.ShorthandProperty
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "Identifier"
            readonly name: string
        }
    >
>()

assert<
    EqualsObject<
        AST.ImportExpression,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "ImportExpression"
            readonly source: AST.Expression
        }
    >
>()

assert<
    EqualsObject<
        AST.Literal,
        {
            readonly parent:
                | ExpressionParent
                | AST.AccessorProperty
                | AST.AssignmentPlainProperty
                | AST.BindingPlainProperty
                | AST.ConstructorDefinition
                | AST.ExportAllDeclaration
                | AST.ExportNamedFromDeclaration
                | AST.ImportDeclaration
                | AST.MethodProperty
                | AST.PlainMethodDefinition
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "Literal"
            readonly value: bigint | boolean | null | number | string | RegExp
            readonly regex:
                | { readonly pattern: string; readonly flags: string }
                | undefined
            readonly bigint: string | undefined
            readonly raw: string
        }
    >
>()
{
    const node = {} as AST.Literal
    if (node.regex) {
        assert<Equals<typeof node.value, RegExp | null>>()
    } else {
        assert<
            Equals<typeof node.value, bigint | boolean | null | number | string>
        >()
    }
    if (node.bigint != null) {
        assert<Equals<typeof node.value, bigint | null>>()
    } else {
        assert<
            Equals<typeof node.value, boolean | null | number | string | RegExp>
        >()
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
            readonly operator: "||" | "&&" | "??"
            readonly left: AST.Expression
            readonly right: AST.Expression
        }
    >
>()

assert<
    EqualsObject<
        AST.MemberExpression,
        {
            readonly parent:
                | ExpressionParent
                | AST.AssignmentArrayPattern
                | AST.AssignmentRestElement
                | AST.AssignmentRestProperty
                | AST.AssignmentPlainProperty
                | AST.UpdateExpression
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "MemberExpression"
            readonly computed: boolean
            readonly object: AST.Expression | AST.Super
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
            readonly arguments: readonly (AST.Expression | AST.SpreadElement)[]
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
            readonly properties: readonly (
                | AST.ObjectProperty
                | AST.SpreadElement
            )[]
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
            readonly computed: boolean
            readonly method: boolean
            readonly shorthand: boolean
            readonly key: AST.Expression
            readonly value: AST.Expression
        }
    >
>()
{
    const node = {} as AST.ObjectProperty
    if (node.kind === "init") {
        assert<Equals<typeof node.computed, boolean>>()
        assert<Equals<typeof node.method, boolean>>()
        assert<Equals<typeof node.shorthand, boolean>>()
        assert<Equals<typeof node.key, AST.Expression>>()
        assert<Equals<typeof node.value, AST.Expression>>()
    } else {
        assert<Equals<typeof node.kind, "get" | "set">>()
        assert<Equals<typeof node.computed, boolean>>()
        assert<Equals<typeof node.method, false>>()
        assert<Equals<typeof node.shorthand, false>>()
        assert<Equals<typeof node.key, AST.Expression>>()
        assert<Equals<typeof node.value, AST.FunctionExpression>>()
    }
    if (node.computed) {
        assert<Equals<typeof node.kind, "init" | "get" | "set">>()
        assert<Equals<typeof node.method, boolean>>()
        assert<Equals<typeof node.shorthand, false>>()
        assert<Equals<typeof node.key, AST.Expression>>()
        assert<Equals<typeof node.value, AST.Expression>>()
    }
    if (node.method) {
        assert<Equals<typeof node.kind, "init">>()
        assert<Equals<typeof node.computed, boolean>>()
        assert<Equals<typeof node.shorthand, false>>()
        assert<Equals<typeof node.key, AST.Expression>>()
        assert<Equals<typeof node.value, AST.FunctionExpression>>()
    }
    if (node.shorthand) {
        assert<Equals<typeof node.kind, "init">>()
        assert<Equals<typeof node.computed, false>>()
        assert<Equals<typeof node.method, false>>()
        assert<Equals<typeof node.key, AST.Identifier>>()
        assert<Equals<typeof node.value, AST.Identifier>>()
    }
    if (
        (node.kind === "get" || node.kind === "set") &&
        (node.method || node.shorthand)
    ) {
        assert<Equals<typeof node, never>>()
    }
    if ((node.computed || node.method) && node.shorthand) {
        assert<Equals<typeof node, never>>()
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
        AST.TemplateLiteral,
        {
            readonly parent: ExpressionParent
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "TemplateLiteral"
            readonly quasis: readonly AST.TemplateElement[]
            readonly expressions: readonly AST.Expression[]
        }
    >
>()
assert<
    EqualsObject<
        AST.TemplateElement,
        {
            readonly parent: AST.TemplateLiteral
            readonly range: IndexRange
            readonly loc: LineColumnRange
            readonly type: "TemplateElement"
            readonly tail: boolean
            readonly value:
                | { readonly cooked: string; readonly raw: string }
                | { readonly cooked: null; readonly raw: string }
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
        AST.AssignmentProperty,
        | AST.AssignmentComputedProperty
        | AST.AssignmentShorthandProperty
        | AST.AssignmentPlainProperty
    >
>()

assert<
    EqualsObject<
        AST.AssignmentTarget,
        | AST.AssignmentArrayPattern
        | AST.AssignmentObjectPattern
        | AST.Identifier
        | AST.ComputedMemberExpression
        | AST.PlainMemberExpression
    >
>()

assert<
    EqualsObject<
        AST.BindingProperty,
        | AST.BindingComputedProperty
        | AST.BindingShorthandProperty
        | AST.BindingPlainProperty
    >
>()

assert<
    EqualsObject<
        AST.BindingTarget,
        AST.BindingArrayPattern | AST.BindingObjectPattern | AST.Identifier
    >
>()

assert<
    EqualsObject<AST.Class, AST.PlainClassDeclaration | AST.ClassExpression>
>()

assert<
    EqualsObject<
        AST.Expression,
        | AST.ArrayExpression
        | AST.ArrowFunctionExpression
        | AST.AwaitExpression
        | AST.BigIntLiteral
        | AST.BinaryExpression
        | AST.BooleanLiteral
        | AST.CallExpression
        | AST.ClassExpression
        | AST.CompoundAssignmentExpression
        | AST.ComputedMemberExpression
        | AST.ConditionalExpression
        | AST.FunctionExpression
        | AST.Identifier
        | AST.ImportExpression
        | AST.LogicalExpression
        | AST.MetaProperty
        | AST.NewExpression
        | AST.NullLiteral
        | AST.NumberLiteral
        | AST.ObjectExpression
        | AST.RegExpLiteral
        | AST.SequenceExpression
        | AST.PlainAssignmentExpression
        | AST.PlainMemberExpression
        | AST.StringLiteral
        | AST.TaggedTemplateExpression
        | AST.TemplateLiteral
        | AST.ThisExpression
        | AST.UnaryExpression
        | AST.UpdateExpression
        | AST.YieldExpression
    >
>()

assert<
    EqualsObject<
        AST.Declaration,
        | AST.PlainClassDeclaration
        | AST.PlainFunctionDeclaration
        | AST.VariableDeclaration
    >
>()

assert<
    EqualsObject<
        AST.Function,
        | AST.ArrowFunctionExpression
        | AST.PlainFunctionDeclaration
        | AST.FunctionExpression
    >
>()

assert<
    EqualsObject<
        AST.ModuleItem,
        | AST.ExportAllDeclaration
        | AST.ExportDefaultDeclaration
        | AST.ExportNamedDeclaration
        | AST.ImportDeclaration
    >
>()

assert<
    EqualsObject<
        AST.ObjectProperty,
        | AST.AccessorProperty
        | AST.ComputedAccessorProperty
        | AST.ComputedMethodProperty
        | AST.ComputedProperty
        | AST.MethodProperty
        | AST.ShorthandProperty
        | AST.PlainProperty
    >
>()

assert<
    EqualsObject<
        AST.SimpleAssignmentTarget,
        | AST.Identifier
        | AST.ComputedMemberExpression
        | AST.PlainMemberExpression
    >
>()

assert<
    EqualsObject<
        AST.Statement,
        | AST.BlockStatement
        | AST.BreakStatement
        | AST.PlainClassDeclaration
        | AST.ContinueStatement
        | AST.DebuggerStatement
        | AST.DoWhileStatement
        | AST.EmptyStatement
        | AST.ExpressionStatement
        | AST.ForInStatement
        | AST.ForOfStatement
        | AST.ForStatement
        | AST.PlainFunctionDeclaration
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
        | AST.Identifier
        | AST.NumberLiteral
        | AST.StringLiteral
        | AST.BigIntLiteral
    >
>()
