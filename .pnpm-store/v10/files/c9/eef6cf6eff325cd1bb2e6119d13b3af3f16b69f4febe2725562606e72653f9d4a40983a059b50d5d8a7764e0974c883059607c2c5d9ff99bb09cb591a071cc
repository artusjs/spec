import { ensureArray } from '../Utils/ensureArray';
import { ESTreeNodeFactory } from './ESTreeNodeFactory';
import { MdxAttrNodeFactory } from './MdxAttrNodeFactory';
export class MdxJsxElementFactory {
    static createMdxJsxImportStatementNode(spcifiers, source) {
        return {
            type: 'mdxjsEsm',
            value: Array.isArray(spcifiers)
                ? `import { ${spcifiers.join(', ')} } from '${source}';`
                : `import ${spcifiers} from '${source}';`,
            data: {
                estree: ESTreeNodeFactory.createESTreeProgramNode([
                    Array.isArray(spcifiers)
                        ? ESTreeNodeFactory.createNamedImportDeclarationNode(spcifiers, source)
                        : ESTreeNodeFactory.createDefaultImportDeclarationNode(spcifiers, source),
                ]),
            },
        };
    }
    static createMdxJsxFlowElementNode(meta, component) {
        var _a, _b, _c, _d;
        const componentProvider = typeof component === 'string' ? { componentName: component } : component;
        return {
            type: 'mdxJsxFlowElement',
            name: componentProvider.componentName,
            // @ts-expect-error
            children: meta
                ? ensureArray((_b = (_a = componentProvider.childrenProvider) === null || _a === void 0 ? void 0 : _a.call(componentProvider, meta)) !== null && _b !== void 0 ? _b : [])
                : [],
            attributes: MdxAttrNodeFactory.createMdxJsxAttributeNodes(meta ? (_d = (_c = componentProvider.propsProvider) === null || _c === void 0 ? void 0 : _c.call(componentProvider, meta)) !== null && _d !== void 0 ? _d : {} : {}),
        };
    }
}
