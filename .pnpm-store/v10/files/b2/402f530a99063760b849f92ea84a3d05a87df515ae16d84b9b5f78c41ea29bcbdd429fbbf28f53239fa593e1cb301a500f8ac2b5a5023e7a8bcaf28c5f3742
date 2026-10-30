import { isObject } from '../Utils/is';
export class ESTreeNodeFactory {
    static createNamedImportSpecifierNode(name) {
        return {
            type: 'ImportSpecifier',
            imported: ESTreeNodeFactory.createIdentifierNode(name),
            local: ESTreeNodeFactory.createIdentifierNode(name),
        };
    }
    static createDefaultImportSpecifierNode(name) {
        return {
            type: 'ImportDefaultSpecifier',
            local: ESTreeNodeFactory.createIdentifierNode(name),
        };
    }
    static createNamedImportDeclarationNode(specifiers, source) {
        return {
            type: 'ImportDeclaration',
            specifiers: specifiers.map((specifier) => ESTreeNodeFactory.createNamedImportSpecifierNode(specifier)),
            source: ESTreeNodeFactory.createLiteralNode(source),
        };
    }
    static createDefaultImportDeclarationNode(specifier, source) {
        return {
            type: 'ImportDeclaration',
            specifiers: [
                ESTreeNodeFactory.createDefaultImportSpecifierNode(specifier),
            ],
            source: ESTreeNodeFactory.createLiteralNode(source),
        };
    }
    static createBasePropertyNode() {
        return {
            type: 'Property',
            method: false,
            shorthand: false,
            computed: false,
            kind: 'init',
        };
    }
    static createIdentifierNode(name) {
        return {
            type: 'Identifier',
            name,
        };
    }
    static createLiteralNode(val) {
        return {
            type: 'Literal',
            value: val !== null && val !== void 0 ? val : '',
            raw: JSON.stringify(val),
        };
    }
    static createObjectExpressionNode(val) {
        return {
            type: 'ObjectExpression',
            properties: Object.entries(val).map(([k, v]) => ESTreeNodeFactory.createPropertyNode(k, v)),
        };
    }
    static createArrayExpressionNode(val) {
        return {
            type: 'ArrayExpression',
            elements: val.map((v) => ESTreeNodeFactory.createValueNode(v)),
        };
    }
    static createValueNode(input) {
        if (Array.isArray(input)) {
            return ESTreeNodeFactory.createArrayExpressionNode(input);
        }
        if (isObject(input)) {
            return ESTreeNodeFactory.createObjectExpressionNode(input);
        }
        return ESTreeNodeFactory.createLiteralNode(input);
    }
    static createLiteralPropertyNode(key, val) {
        return {
            ...ESTreeNodeFactory.createBasePropertyNode(),
            key: ESTreeNodeFactory.createIdentifierNode(key),
            value: ESTreeNodeFactory.createLiteralNode(val),
        };
    }
    static createObjectPropertyNode(key, val) {
        return {
            ...ESTreeNodeFactory.createBasePropertyNode(),
            key: ESTreeNodeFactory.createIdentifierNode(key),
            value: ESTreeNodeFactory.createObjectExpressionNode(val),
        };
    }
    static createArrayPropertyNode(key, val) {
        return {
            ...ESTreeNodeFactory.createBasePropertyNode(),
            key: ESTreeNodeFactory.createIdentifierNode(key),
            value: ESTreeNodeFactory.createArrayExpressionNode(val),
        };
    }
    static createPropertyNode(key, val) {
        if (Array.isArray(val)) {
            return ESTreeNodeFactory.createArrayPropertyNode(key, val);
        }
        if (isObject(val)) {
            return ESTreeNodeFactory.createObjectPropertyNode(key, val);
        }
        return ESTreeNodeFactory.createLiteralPropertyNode(key, val);
    }
    static createSpreadObjectExpressionNode(spread) {
        return {
            type: 'ExpressionStatement',
            expression: {
                type: 'ObjectExpression',
                properties: [
                    {
                        type: 'SpreadElement',
                        argument: ESTreeNodeFactory.createObjectExpressionNode(spread),
                    },
                ],
            },
        };
    }
    static createESTreeProgramNode(statements) {
        return {
            type: 'Program',
            sourceType: 'module',
            body: statements,
        };
    }
}
