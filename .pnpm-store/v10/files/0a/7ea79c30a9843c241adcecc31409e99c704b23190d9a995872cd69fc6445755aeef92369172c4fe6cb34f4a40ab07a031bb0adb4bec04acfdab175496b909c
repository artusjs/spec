import { ESTreeNodeFactory } from './ESTreeNodeFactory';
import { isObject } from '../Utils/is';
export class MdxAttrNodeFactory {
    static createMdxJsxAttributeNodes(attributes) {
        var _a, _b;
        const parsedAttrs = (_b = (_a = Object.entries(attributes)) === null || _a === void 0 ? void 0 : _a.filter(([_, v]) => typeof v !== 'undefined' && v !== null)) === null || _b === void 0 ? void 0 : _b.map(([key, val]) => {
            return isObject(val) || Array.isArray(val)
                ? MdxAttrNodeFactory.createMdxJsxExpressionAttributeNode(key, val)
                : MdxAttrNodeFactory.createMdxJsxLiteralAttributeNode(key, val);
        });
        return parsedAttrs;
    }
    static createMdxJsxLiteralAttributeNode(name, value) {
        return {
            type: 'mdxJsxAttribute',
            name,
            value: value.toString(),
        };
    }
    static createMdxJsxExpressionAttributeNode(name, value) {
        return {
            type: 'mdxJsxExpressionAttribute',
            value: `{...${JSON.stringify({
                [name]: value,
            })}`,
            data: {
                estree: ESTreeNodeFactory.createESTreeProgramNode([
                    ESTreeNodeFactory.createSpreadObjectExpressionNode({
                        [name]: value,
                    }),
                ]),
            },
        };
    }
}
