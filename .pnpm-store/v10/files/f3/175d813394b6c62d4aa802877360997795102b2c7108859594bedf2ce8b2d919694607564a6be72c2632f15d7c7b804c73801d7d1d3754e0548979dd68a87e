const getDefaultImportAstNode = (name, from)=>({
        type: 'mdxjsEsm',
        value: `import ${name} from ${JSON.stringify(from)}`,
        data: {
            estree: {
                type: 'Program',
                sourceType: 'module',
                body: [
                    {
                        type: 'ImportDeclaration',
                        specifiers: [
                            {
                                type: 'ImportDefaultSpecifier',
                                local: {
                                    type: 'Identifier',
                                    name
                                }
                            }
                        ],
                        source: {
                            type: 'Literal',
                            value: from,
                            raw: `${JSON.stringify(from)}`
                        }
                    }
                ]
            }
        }
    });
const getNamedImportAstNode = (name, alias, from)=>({
        type: 'mdxjsEsm',
        value: `import { ${name} as ${alias} } from ${JSON.stringify(from)}`,
        data: {
            estree: {
                type: 'Program',
                sourceType: 'module',
                body: [
                    {
                        type: 'ImportDeclaration',
                        specifiers: [
                            {
                                type: 'ImportSpecifier',
                                imported: {
                                    type: 'Identifier',
                                    name
                                },
                                local: {
                                    type: 'Identifier',
                                    name: alias
                                }
                            }
                        ],
                        source: {
                            type: 'Literal',
                            value: from,
                            raw: `${JSON.stringify(from)}`
                        }
                    }
                ]
            }
        }
    });
export { getDefaultImportAstNode, getNamedImportAstNode };
