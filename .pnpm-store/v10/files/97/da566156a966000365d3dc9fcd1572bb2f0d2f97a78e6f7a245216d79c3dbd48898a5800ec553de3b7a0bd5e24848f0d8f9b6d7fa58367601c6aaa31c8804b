import _remarkParseDirective from 'remark-mdc';
import { toString } from 'mdast-util-to-string';
import { unistVisit } from '../Exports/Unist';
import { createTuple } from '../Utils/createTuple';
import { ensureArray } from '../Utils/ensureArray';
import { MdxAttrNodeFactory } from '../NodeFactory/MdxAttrNodeFactory';
/**
 * Directives can be transformed to:
 *
 * - MDAST Node, reference directive usually, like `:comment` referencing to JSDoc comment node.
 * - Global component, like `:info` referencing to built-in `Info` component.
 */
const directiveTypes = createTuple('textComponent', 'containerComponent');
const directiveTransformerTypes = createTuple('globalComponent', 'astNode');
export const remarkTransformDirective = (options = []) => {
    const directiveTransformers = ensureArray(options);
    return (tree, vfile) => {
        unistVisit(tree, (node, index = 0, parent) => {
            if (!directiveTypes.includes(node.type)) {
                return;
            }
            directiveTransformers.forEach((trdirectiveTransformeransformer) => {
                var _a;
                const { transformer, directive } = trdirectiveTransformeransformer;
                if (node.name !== directive) {
                    return;
                }
                const meta = {
                    type: node.type,
                    name: node.name,
                    attributes: node.attributes,
                };
                const transformerType = transformer.type;
                if (transformerType === 'astNode') {
                    const content = transformer.getContent(meta, vfile);
                    parent.children.splice(index, 1, ...content);
                }
                else if (transformerType === 'globalComponent') {
                    const attrsNormalizer = (_a = transformer === null || transformer === void 0 ? void 0 : transformer.getComponentProps) !== null && _a !== void 0 ? _a : MdxAttrNodeFactory.createMdxJsxAttributeNodes;
                    parent.children.splice(index, 1, {
                        type: 'mdxJsxFlowElement',
                        name: transformer.getComponentName(meta, vfile),
                        attributes: attrsNormalizer(meta.attributes, vfile),
                        children: transformer.getComponentChildren
                            ? [
                                {
                                    type: 'text',
                                    value: transformer.getComponentChildren(meta, node, vfile),
                                },
                            ]
                            : [
                                {
                                    type: 'text',
                                    value: toString(node),
                                },
                            ],
                    });
                }
                else {
                }
            });
        });
    };
};
export const remarkParseDirective = _remarkParseDirective;
