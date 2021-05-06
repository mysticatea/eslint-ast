/**
 * @fileoverview The AST definition for EcmaScript 2022 candidate (include stage 4 proposals).
 */
import { Extends } from "./lib/extends"
import { NodeRef } from "./lib/node-ref"
import {
    Comment,
    Definition as ES2021,
    IndexRange,
    LineColumnRange,
    LineColumn,
    Token,
} from "./es2021-definition"

export { Comment, IndexRange, LineColumnRange, LineColumn, Token }

export interface Enhancement {
    nodes: {
        // Enhancements
        ClassBody: {
            body: NodeRef<"PropertyDefinition">[]
        }

        // New expressions
        PrivateMemberExpression: {
            type: "MemberExpression"
            computed: false
            optional: boolean
            object: NodeRef<"Expression">
            property: NodeRef<"PrivateIdentifier">
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
        PrivateIdentifier: {
            name: string
        }
        PrivateMethodDefinition: {
            type: "MethodDefinition"
            computed: false
            kind: "method" | "get" | "set"
            static: boolean
            key: NodeRef<"PrivateIdentifier">
            value: NodeRef<"FunctionExpression">
        }
        PrivatePropertyDefinition: {
            type: "PropertyDefinition"
            computed: false
            static: boolean
            key: NodeRef<"PrivateIdentifier">
            value: NodeRef<"Expression"> | null
        }
    }
    aliases: {
        AssignmentTarget: "PrivateMemberExpression"
        Expression: "PrivateMemberExpression"
        SimpleAssignmentTarget: "PrivateMemberExpression"
    }
}

/**
 * The AST definition of ES Next.
 * This definition includes the Stage 4 proposals for ES2022.
 */
interface ESNext extends Extends<ES2021, Enhancement> {}

export { ESNext as Definition }
