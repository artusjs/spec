import { RemarkPluginFactoryBase, } from './FactoryBase';
import { unistVisit } from '../Exports/Unist';
import { MdxJsxElementFactory } from '../NodeFactory/MdxJsxElementFactory';
import { getComponentName } from '../Utils/registerComponent';
export class RemarkCodeBlockToGlobalComponentPluginFactory extends RemarkPluginFactoryBase {
    constructor(options) {
        super(options);
        this.options = options;
    }
    get remarkPlugin() {
        var _a, _b;
        const components = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.components) !== null && _b !== void 0 ? _b : [];
        return () => (tree, vfile) => {
            unistVisit(tree, 'code', (code, index = 0, parent) => {
                components.forEach(({ lang, componentPath, propsProvider, childrenProvider }) => {
                    if (code.lang === lang) {
                        parent.children.splice(index, 1, MdxJsxElementFactory.createMdxJsxFlowElementNode(code.value, {
                            componentName: getComponentName(componentPath),
                            propsProvider,
                            childrenProvider,
                        }));
                    }
                });
            });
        };
    }
}
