/**
 * @fileoverview The AST definition for EcmaScript 2020 snapshot.
 */
import { Extends } from "./lib/extends";
import { NodeRef } from "./lib/node-ref";
import { Comment, Definition as ES2019Definition, IndexRange, LineColumnRange, LineColumn, Token } from "./es2019-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
export declare namespace Enhancement {
    /**
     * Definition for BigInt literals.
     */
    interface BigInt {
        nodes: {
            BooleanLiteral: {
                bigint: undefined;
            };
            NullLiteral: {
                bigint: undefined;
            };
            NumberLiteral: {
                bigint: undefined;
            };
            RegExpLiteral: {
                bigint: undefined;
            };
            StringLiteral: {
                bigint: undefined;
            };
            BigIntLiteral: {
                type: "Literal";
                value: bigint | null;
                bigint: string;
                regex: undefined;
                raw: string;
            };
        };
        aliases: {
            Expression: "BigIntLiteral";
            StaticPropertyKey: "BigIntLiteral";
        };
    }
    /**
     * Definition for `import(source)`.
     */
    interface DynamicImport {
        nodes: {
            ImportExpression: {
                source: NodeRef<"Expression">;
            };
        };
        aliases: {
            Expression: "ImportExpression";
        };
    }
    /**
     * Definition for nullish coalescing.
     */
    interface NullishCoalescing {
        nodes: {
            LogicalExpression: {
                operator: "??";
            };
        };
    }
    /**
     * Definition for optional chaining.
     */
    interface OptionalChaining {
        nodes: {};
        aliases: {};
    }
    /**
     * Definition for `export * as ns from "source"`.
     */
    interface ExportAllWithName {
        nodes: {
            ExportAllDeclaration: {
                exported: NodeRef<"Identifier"> | null;
            };
        };
    }
}
/**
 * The AST definition of ES2020.
 */
export interface Definition extends Extends<ES2019Definition, [Enhancement.BigInt, Enhancement.DynamicImport, Enhancement.NullishCoalescing, Enhancement.OptionalChaining, Enhancement.ExportAllWithName]> {
}
