import type { Root as HastRoot } from 'hast';
import type { Root as MdastRoot } from 'mdast';
import type { Plugin } from 'unified';
export interface TocItem {
    id: string;
    text: string;
    depth: number;
}
export declare const parseToc: (tree: MdastRoot | HastRoot) => {
    title: string;
    toc: TocItem[];
};
export declare const remarkToc: Plugin<[], HastRoot>;
