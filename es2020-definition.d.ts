import { Comment } from "./lib/comment";
import { Extends } from "./lib/extends";
import { NodeRef } from "./lib/node-ref";
import { Token } from "./lib/token";
import { Definition as ES2019Definition } from "./es2019-definition";
export { Comment, Token };
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
            Literal: "BigIntLiteral";
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
        aliases: {};
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
    interface ReexportAllWithName {
        nodes: {
            ReexportAllDeclaration: {
                exported: NodeRef<"Identifier"> | null;
            };
        };
        aliases: {};
    }
}
/**
 * The AST definition of ES2020.
 */
export interface Definition extends Extends<ES2019Definition, [Enhancement.BigInt, Enhancement.DynamicImport, Enhancement.NullishCoalescing, Enhancement.OptionalChaining, Enhancement.ReexportAllWithName]> {
}
