/**
 * @fileoverview The AST definition for EcmaScript stage 3 proposals.
 */
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import {
    Comment,
    Definition as ESNext,
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./esnext-definition"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

export namespace Enhancement {
    /**
     * Definition for class static initialization blocks.
     */
    export interface StaticBlock {
        nodes: {
            // Enhancements
            ClassBody: {
                body: NodeRef<"StaticBlock">[]
            }

            // New others
            StaticBlock: {
                body: NodeRef<"Statement">[]
            }
        }
    }

    /**
     * Definition for import assertions.
     */
    export interface ImportAssertions {
        nodes: {
            // Enhancements
            ExportAllDeclaration: {
                assertions: NodeRef<"ImportAttribute">[]
            }
            ExportNamedDeclDeclaration: {
                assertions: null
            }
            ExportNamedFromDeclaration: {
                assertions: NodeRef<"ImportAttribute">[]
            }
            ImportDeclaration: {
                assertions: NodeRef<"ImportAttribute">[]
            }
            ImportExpression: {
                attributes: NodeRef<"Expression"> | null
            }

            // New others
            ImportAttribute: {
                key: NodeRef<"Identifier"> | NodeRef<"StringLiteral">
                value: NodeRef<"StringLiteral">
            }
        }
    }

    /**
     * Definition for ergonomic brand checks for private class members.
     */
    export interface PrivateClassMemberChecks {
        nodes: {
            // Enhancements
            BinaryExpression: {
                left: NodeRef<"PrivateIdentifier">
            }
        }
    }
}

/**
 * The AST definition of ES Next.
 * This definition includes the Stage 3 proposals.
 */
interface Experimental
    extends Extends<
        Extends<
            Extends<ESNext, Enhancement.ImportAssertions>,
            Enhancement.PrivateClassMemberChecks
        >,
        Enhancement.StaticBlock
    > {}

export { Experimental as Definition }
