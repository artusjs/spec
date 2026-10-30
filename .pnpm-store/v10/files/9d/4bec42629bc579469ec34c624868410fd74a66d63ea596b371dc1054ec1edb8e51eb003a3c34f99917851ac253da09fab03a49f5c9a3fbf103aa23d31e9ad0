import { SyntaxKind, Project, } from 'ts-morph';
export class TSParserUtils {
    static isFunctionDeclaration(input) {
        return input.getKind() === SyntaxKind.FunctionDeclaration;
    }
    static getFunctionDeclaration(source, name) {
        return source.getFunction(name) || source.getVariableStatement(name);
    }
    static isInterfaceDeclaration(input) {
        return input.getKind() === SyntaxKind.InterfaceDeclaration;
    }
    static getTypingDeclaration(source, name) {
        return source.getTypeAlias(name) || source.getInterface(name);
    }
}
TSParserUtils.ParserProject = new Project();
