/**
 * @fileoverview The AST definition for EcmaScript 2021 candidate (include stage 4 proposals).
 */
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import {
    Comment,
    Definition as ESNextDefinition,
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./esnext-definition"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

export namespace Enhancement {
    /**
     * Definition for class fields.
     */
    export interface ClassField {
        nodes: {
            // Enhancements
            ClassBody: {
                body: NodeRef<"PropertyDefinition">[]
            }

            // New others
            ComputedPropertyDefinition: {
                type: "PropertyDefinition"
                computed: true
                static: boolean
                key: NodeRef<"Expression">
                value: NodeRef<"Expression"> | null
            }
            PlainPropertyDefinition: {
                type: "PropertyDefinition"
                computed: false
                static: boolean
                key: NodeRef<"StaticPropertyKey">
                value: NodeRef<"Expression"> | null
            }
        }
        aliases: {}
    }

    /**
     * Definition for private class elements.
     */
    export interface PrivateClassElement {
        nodes: {
            // Enhancements
            PlainMemberExpression: {
                property: NodeRef<"PrivateName">
            }
            PlainMethodDefinition: {
                key: NodeRef<"PrivateName">
            }
            PlainPropertyDefinition: {
                key: NodeRef<"PrivateName">
            }

            // New others
            PrivateName: {
                name: string
            }
        }
        aliases: {}
    }

    /**
     * Definition for private class elements.
     */
    export interface LogicalAssignment {
        nodes: {
            // Enhancements
            CompoundAssignmentExpression: {
                operator: "||=" | "&&=" | "??="
            }
        }
        aliases: {}
    }
}

/**
 * The AST definition of ES Next.
 * This definition includes the Stage 4 proposals for ES2021.
 */
export interface Definition
    extends Extends<
        ESNextDefinition,
        [
            Enhancement.ClassField,
            Enhancement.PrivateClassElement,
            Enhancement.LogicalAssignment,
        ]
    > {}
