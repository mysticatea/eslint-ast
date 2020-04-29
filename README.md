# TypeScript Types for ESLint AST

[![npm version](https://img.shields.io/npm/v/eslint-ast.svg)](https://www.npmjs.com/package/eslint-ast)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-ast.svg)](http://www.npmtrends.com/eslint-ast)
[![Build Status](https://github.com/mysticatea/eslint-ast/workflows/CI/badge.svg)](https://github.com/mysticatea/eslint-ast/actions)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-ast.svg)](https://david-dm.org/mysticatea/eslint-ast)

This package provides TypeScript types for ESLint AST and the utilities to extend the AST types.

## 💿 Installation

Use [npm](https://www.npmjs.com/) or a compatible tool.

```
$ npm install eslint-ast
```

## 📖 Usage

### ■ Using types

There are several type definition files. Those files exports [AST node](https://github.com/estree/estree) types.

```ts
// The latest snapshot. Currently this is ES2020.
import * as latest from "eslint-ast" // or `eslint-ast/latest`

// The living standard, contains the proposals that have arrived at Stage 4.
// This types will be updated in minor releases.
import * as esNext from "eslint-ast/esnext"

// The specific snapshots.
import * as es2020 from "eslint-ast/es2020"
import * as es2019 from "eslint-ast/es2019"
import * as es2018 from "eslint-ast/es2018"
import * as es2017 from "eslint-ast/es2017"
import * as es2016 from "eslint-ast/es2016"
import * as es2015 from "eslint-ast/es2015"
import * as es5 from "eslint-ast/es5"
```

### ■ Defining your own AST

This package provides the utilities to define your own AST types.

1. Declare the AST definition.
1. Convert the AST definition to the AST types.

```ts
import { AST, NodeRef } from "eslint-ast/util"

// Declare the AST definition.
// This has three properties: `nodes`, `aliases`, and `commonProperties`.
interface MyDefinition {
    // Each node's definition.
    nodes: {
        Program: {
            // `NodeRef< node-name-or-alias >` will be replaced by actual node type later.
            expression: NodeRef<"Expression">
        }
        ConstantValue: {
            value: number
        }
        BinaryExpression: {
            operator: "+" | "-" | "*" | "/"
            left: NodeRef<"Expression">
            right: NodeRef<"Expression">
        }
    }

    // Alias definitions to use `NodeRef`.
    aliases: {
        Expression: "ConstantValue" | "BinaryExpression"
    }

    // You can define common properties for every node.
    // The `parent` and `type` properties are automatically defined.
    commonProperties: {
        range: readonly [number, number]
    }
}

// Convert the AST definition to AST types.
type MyAST = AST<MyDefinition>

// Every types is in the properties of `MyAST`.
type Program = MyAST["Program"] //= { type: "Program"
                                //    parent: null | undefined
                                //    expression: MyAST["Expression"]
                                //    range: readonly [number, number] }

type ConstantValue = MyAST["ConstantValue"] //= { type: "ConstantValue"
                                            //    parent: MyAST["Program"] | MyAST["BinaryExpression"]
                                            //    value: number
                                            //    range: readonly [number, number] }

type BinaryExpression = MyAST["BinaryExpression"] //= { type: "BinaryExpression"
                                                  //    parent: MyAST["Program"] | MyAST["BinaryExpression"]
                                                  //    operator: "+" | "-" | "*" | "/"
                                                  //    left: MyAST["Expression"]
                                                  //    right: MyAST["Expression"]
                                                  //    range: readonly [number, number] }

type Expression = MyAST["Expression"] //= MyAST["ConstantValue"] | MyAST["BinaryExpression"]
```

- [./es5-definition.ts](./es5-definition.ts) is an example for AST definitions.
- [./es5.ts](./es5.ts) is an example for converting to AST.

### ■ Extending existing AST

This package provides the utilities to define your own AST types as extended from other existing AST definition.

1. Declare the differential of AST definition.
1. Merge the differential and an existing AST definition.
1. Convert the AST definition to the AST types.

```ts
import { Definition as ES2019Definition } from "eslint-ast/es2019-definition"
import { AST, Extends, NodeRef } from "eslint-ast/util"

// Declare the differential of AST definition.
interface BigInt {
    nodes: {
        // Adding a new property into existing node types.
        BooleanLiteral: {
            bigint: undefined
        }
        NullLiteral: {
            bigint: undefined
        }
        NumberLiteral: {
            bigint: undefined
        }
        RegExpLiteral: {
            bigint: undefined
        }
        StringLiteral: {
            bigint: undefined
        }

        // Adding a new node.
        BigIntLiteral: {
            type: "Literal"
            value: bigint | null
            bigint: string
            regex: undefined
            raw: string
        }
    }

    aliases: {
        // Adding the new node into existing aliases.
        Expression: "BigIntLiteral"
        StaticPropertyKey: "BigIntLiteral"
    }
}

// Merge the differential and an existing AST definition.
// I'd like to recommend to use `interface` for readability in VSCode popups.
interface MyDefinition extends Extends<ES2019Definition, [BigInt]> {}

// Convert the AST definition to the AST types.
type MyAST = AST<MyDefinition>
```

- [./es2015-definition.ts](./es2015-definition.ts) is an example for extending.
- [./es2016-definition.ts](./es2016-definition.ts) is an example for extending.
- [./es2017-definition.ts](./es2017-definition.ts) is an example for extending.
- [./es2018-definition.ts](./es2018-definition.ts) is an example for extending.
- [./es2019-definition.ts](./es2019-definition.ts) is an example for extending.
- [./es2020-definition.ts](./es2020-definition.ts) is an example for extending.

## 📰 Release Notes

See [GitHub releases](https://github.com/mysticatea/eslint-ast/releases).

## 🚥 Semantic Versioning Policy

If the type of libraries is updated, it causes compile errors in userland in most cases. Therefore, this package declare semantic versioning policy.

### Major

The major version bump allows any breaking changes. For example, the following things can happen:

- Changes exposed files.
- Changes existing types.
- Changes the API of `eslint-ast/util`.
- Changes the minimum supported TypeScript version.
- etc...

### Minor

The minor version bump allows any breaking changes only in `eslint-ast/esnext`, `eslint-ast/esnext-definition`, and `eslint-ast/lib/`. It doesn't change the types in the other files.

It happens when new proposals arrived at Stage 4 and ESTree was updated.

### Patch

The minor version bump allows any breaking changes only in `eslint-ast/esnext`, `eslint-ast/esnext-definition`, and `eslint-ast/lib/`. It doesn't change the types in the other files.

It happens when bugs found in new types.

## ❤️ Contributing

Contributing is welcome. Use GitHub issues and pull requests.

### Development tools

- `npm test` runs tests.
- `npm run build` compiles codebase and makes `dist/` directory.
- `npm run update-ast` updates `es*.ts` files by the content of `es*-definition.ts` files.
- `npm version <major|minor|patch>` bump a new version and releases it.
