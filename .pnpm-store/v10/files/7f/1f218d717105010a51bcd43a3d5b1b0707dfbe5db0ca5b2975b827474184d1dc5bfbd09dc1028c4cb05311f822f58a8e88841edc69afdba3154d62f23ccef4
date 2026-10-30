import { MdxJsxElementFactory } from '../NodeFactory/MdxJsxElementFactory';
import { RemarkPluginFactoryBase, } from './FactoryBase';
import { getComponentName } from '../Utils/registerComponent';
export class RemarkInsertComponentPluginFactory extends RemarkPluginFactoryBase {
    constructor(options) {
        super(options);
        this.options = options;
    }
    get remarkPlugin() {
        var _a, _b;
        const components = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.components) !== null && _b !== void 0 ? _b : [];
        return () => (tree, vfile) => {
            if (!(components === null || components === void 0 ? void 0 : components.length))
                return;
            function getInsertIndex(position) {
                var _a;
                if (!((_a = tree.children) === null || _a === void 0 ? void 0 : _a.length))
                    return 0;
                switch (position) {
                    case 'pre':
                        return (tree.children.findLastIndex((node) => node.type === 'mdxjsEsm') +
                            1);
                    case 'post':
                        const beforeInsertCount = components.filter(({ position }) => position === 'pre' || position === 'after-first-heading').length;
                        const insertIndexAtPost = tree.children.length + beforeInsertCount;
                        return insertIndexAtPost;
                    case 'after-first-heading':
                        const firstHeadingIndex = tree.children.findIndex((node) => node.type === 'heading');
                        return firstHeadingIndex + 1;
                    default:
                        throw new Error(`Unknown insert position: ${position}`);
                }
            }
            components.forEach(({ position, componentPath, propsProvider, childrenProvider }) => {
                const insertIndex = getInsertIndex(position);
                tree.children.splice(insertIndex, 0, MdxJsxElementFactory.createMdxJsxFlowElementNode({}, {
                    componentName: getComponentName(componentPath),
                    propsProvider,
                    childrenProvider,
                }));
            });
        };
    }
}
