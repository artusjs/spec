import { Project, InterfaceDeclaration, TypeAliasDeclaration } from 'ts-morph';
import { FunctionDeclaration, VariableStatement, SourceFile } from 'ts-morph';
export declare class TSParserUtils {
    static ParserProject: Project;
    static isFunctionDeclaration(input: FunctionDeclaration | VariableStatement): input is FunctionDeclaration;
    static getFunctionDeclaration(source: SourceFile, name: string): FunctionDeclaration | VariableStatement | undefined;
    static isInterfaceDeclaration(input: InterfaceDeclaration | TypeAliasDeclaration): input is InterfaceDeclaration;
    static getTypingDeclaration(source: SourceFile, name: string): InterfaceDeclaration | TypeAliasDeclaration | undefined;
}
