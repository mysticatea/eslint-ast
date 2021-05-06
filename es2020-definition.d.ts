/**
 * @fileoverview The AST definition for EcmaScript 2020 snapshot.
 */
import { Extends } from "./lib/extends";
import { NodeRef } from "./lib/node-ref";
import { Comment, Definition as ES2019, IndexRange, LineColumnRange, LineColumn, Token } from "./es2019-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
export interface Enhancement {
    nodes: {
        BooleanLiteral: {
            bigint: undefined;
        };
        CallExpression: {
            optional: boolean;
        };
        ComputedMemberExpression: {
            optional: boolean;
        };
        ExportAllDeclaration: {
            exported: NodeRef<"Identifier"> | null;
        };
        NullLiteral: {
            bigint: undefined;
        };
        NumberLiteral: {
            bigint: undefined;
        };
        PlainMemberExpression: {
            optional: boolean;
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
        ChainExpression: {
            expression: NodeRef<"CallExpression"> | NodeRef<"MemberExpression">;
        };
        CoalesceExpression: {
            type: "LogicalExpression";
            operator: "??";
            left: NodeRef<"Expression">;
            right: NodeRef<"Expression">;
        };
        ImportExpression: {
            source: NodeRef<"Expression">;
        };
    };
    aliases: {
        Expression: "BigIntLiteral" | "ChainExpression" | "CoalesceExpression" | "ImportExpression";
        StaticPropertyKey: "BigIntLiteral";
    };
}
/**
 * The AST definition of ES2020.
 */
interface ES2020 extends Extends<ES2019, Enhancement> {
}
export { ES2020 as Definition };
