import type { Content } from 'mdast';
import type { Dictionary, MaybeArray } from 'util-ts-types';
import type { MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import type { MdxjsEsm } from 'mdast-util-mdxjs-esm';
export interface ComponentRegistration<ComponentMetaProvider = any> {
    componentName: string;
    propsProvider?: (input: ComponentMetaProvider) => Dictionary<unknown>;
    childrenProvider?: (input: ComponentMetaProvider) => Content[];
}
export declare class MdxJsxElementFactory {
    static createMdxJsxImportStatementNode(spcifiers: MaybeArray<string>, source: string): MdxjsEsm;
    static createMdxJsxFlowElementNode<ComponentMetaProvider>(meta: ComponentMetaProvider, component: string | ComponentRegistration<ComponentMetaProvider>): MdxJsxFlowElement;
}
