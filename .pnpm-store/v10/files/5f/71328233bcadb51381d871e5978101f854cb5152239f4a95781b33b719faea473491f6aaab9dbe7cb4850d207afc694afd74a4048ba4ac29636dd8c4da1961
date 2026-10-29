import { SyntaxKind } from 'ts-morph';
import { TSParserUtils } from './ParserUtils.mjs';
export class TSSourceParser {
    static parseTypingDeclaration(filePath, name) {
        var _a, _b;
        const source = TSParserUtils.ParserProject.addSourceFileAtPath(filePath);
        const input = TSParserUtils.getTypingDeclaration(source, name);
        if (!input)
            return null;
        const declarationName = input.getName();
        const declarationDescription = (_b = (_a = input
            .getJsDocs()[0]) === null || _a === void 0 ? void 0 : _a.getComment()) === null || _b === void 0 ? void 0 : _b.toString();
        const parsedMembers = [];
        input
            .getType()
            .getProperties()
            .forEach((propertyKey) => {
            var _a;
            const property = propertyKey
                .getValueDeclarationOrThrow()
                .asKind(SyntaxKind.PropertySignature);
            const memberName = propertyKey.getName();
            const memberType = property === null || property === void 0 ? void 0 : property.getType().getText();
            const memberRequired = !property.hasQuestionToken();
            const memberJSDocComment = property.getJsDocs()[0];
            if (!memberJSDocComment) {
                parsedMembers.push({
                    name: memberName,
                    typingDescription: memberType,
                    required: memberRequired,
                    description: '',
                    default: null,
                });
                return;
            }
            const memberDescription = memberJSDocComment.getCommentText();
            const memberDefault = (_a = memberJSDocComment
                .getTags()
                .find((tag) => tag.getTagName() === 'default')) === null || _a === void 0 ? void 0 : _a.getCommentText();
            parsedMembers.push({
                name: memberName,
                description: memberDescription || '',
                typingDescription: memberType,
                default: memberDefault || null,
                required: memberRequired,
            });
        });
        TSParserUtils.ParserProject.removeSourceFile(source);
        return {
            name: declarationName,
            description: declarationDescription || '',
            members: parsedMembers,
        };
    }
    static findTargetExport(filePath, functionName) {
        var _a, _b;
        const source = TSParserUtils.ParserProject.addSourceFileAtPath(filePath);
        const allExports = source.getStatements();
        const targetExport = allExports.find((statement) => {
            var _a, _b, _c;
            const kind = statement.getKind();
            if (kind === SyntaxKind.FunctionDeclaration) {
                const currentFunctionName = (_a = statement
                    .asKind(SyntaxKind.FunctionDeclaration)) === null || _a === void 0 ? void 0 : _a.getName();
                return currentFunctionName && currentFunctionName === functionName;
            }
            if (kind === SyntaxKind.VariableStatement) {
                const declaration = (_b = statement
                    .asKind(SyntaxKind.VariableStatement)) === null || _b === void 0 ? void 0 : _b.getDeclarations()[0];
                const isArrowFunc = ((_c = declaration === null || declaration === void 0 ? void 0 : declaration.getInitializer()) === null || _c === void 0 ? void 0 : _c.getKind()) === SyntaxKind.ArrowFunction;
                if (!isArrowFunc)
                    return false;
                const currentFunctionName = declaration === null || declaration === void 0 ? void 0 : declaration.getName();
                return currentFunctionName && currentFunctionName === functionName;
            }
        });
        if (!targetExport)
            return null;
        const jsdocContent = (_b = (_a = targetExport
            .asKind(SyntaxKind.VariableStatement)) === null || _a === void 0 ? void 0 : _a.getJsDocs()[0]) === null || _b === void 0 ? void 0 : _b.getText();
        TSParserUtils.ParserProject.removeSourceFile(source);
        return `${jsdocContent}\n${targetExport.getText()}`;
    }
}
