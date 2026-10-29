import type { Dictionary } from 'util-ts-types';
import type { ObjectExpression, SimpleLiteral, ExpressionStatement, Program, Property, Statement, Identifier, ArrayExpression, ImportDeclaration, ModuleDeclaration } from 'estree-jsx';
import type { Primitive } from '../Shared';
export declare class ESTreeNodeFactory {
    private static createNamedImportSpecifierNode;
    private static createDefaultImportSpecifierNode;
    static createNamedImportDeclarationNode(specifiers: string[], source: string): ImportDeclaration;
    static createDefaultImportDeclarationNode(specifier: string, source: string): ImportDeclaration;
    private static createBasePropertyNode;
    static createIdentifierNode(name: string): Identifier;
    static createLiteralNode(val: Primitive): SimpleLiteral;
    static createObjectExpressionNode(val: Dictionary<any>): ObjectExpression;
    static createArrayExpressionNode(val: Array<any>): ArrayExpression;
    static createValueNode(input: Primitive): SimpleLiteral;
    static createValueNode(input: Array<any>): ArrayExpression;
    static createValueNode(input: Dictionary): ObjectExpression;
    static createLiteralPropertyNode(key: string, val: Primitive): Property;
    static createObjectPropertyNode(key: string, val: Dictionary): Property;
    static createArrayPropertyNode(key: string, val: Array<any>): Property;
    static createPropertyNode(key: string, val: Primitive | Array<any> | Dictionary): Property;
    static createSpreadObjectExpressionNode(spread: Dictionary): ExpressionStatement;
    static createESTreeProgramNode(statements: (Statement | ModuleDeclaration)[]): Program;
}
