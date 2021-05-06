/**
 * @fileoverview The AST definition for EcmaScript stage 3 proposals.
 */
import { Extends } from "./lib/extends";
import { NodeRef } from "./lib/node-ref";
import { Comment, Definition as ESNext, IndexRange, LineColumnRange, LineColumn, Token } from "./esnext-definition";
export { Comment, IndexRange, LineColumnRange, LineColumn, Token };
export declare namespace Enhancement {
    /**
     * Definition for class static initialization blocks.
     */
    interface StaticBlock {
        nodes: {
            ClassBody: {
                body: NodeRef<"StaticBlock">[];
            };
            StaticBlock: {
                body: NodeRef<"Statement">[];
            };
        };
    }
    /**
     * Definition for import assertions.
     */
    interface ImportAssertions {
        nodes: {
            ExportAllDeclaration: {
                assertions: NodeRef<"ImportAttribute">[];
            };
            ExportNamedDeclDeclaration: {
                assertions: null;
            };
            ExportNamedFromDeclaration: {
                assertions: NodeRef<"ImportAttribute">[];
            };
            ImportDeclaration: {
                assertions: NodeRef<"ImportAttribute">[];
            };
            ImportExpression: {
                attributes: NodeRef<"Expression"> | null;
            };
            ImportAttribute: {
                key: NodeRef<"Identifier"> | NodeRef<"StringLiteral">;
                value: NodeRef<"StringLiteral">;
            };
        };
    }
    /**
     * Definition for ergonomic brand checks for private class members.
     */
    interface PrivateClassMemberChecks {
        nodes: {
            BinaryExpression: {
                left: NodeRef<"PrivateIdentifier">;
            };
        };
    }
}
/**
 * The AST definition of ES Next.
 * This definition includes the Stage 3 proposals.
 */
interface Experimental extends Extends<Extends<Extends<ESNext, Enhancement.ImportAssertions>, Enhancement.PrivateClassMemberChecks>, Enhancement.StaticBlock> {
}
export { Experimental as Definition };
