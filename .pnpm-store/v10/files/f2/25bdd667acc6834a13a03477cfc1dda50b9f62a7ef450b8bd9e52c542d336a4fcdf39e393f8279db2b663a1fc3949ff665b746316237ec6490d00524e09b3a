import { type Compiler } from '@rspack/core';
import type { EnvironmentContext, HtmlRspackPlugin, HtmlTag, HtmlTagDescriptor, InternalContext } from '../types';
type HtmlTagObject = HtmlRspackPlugin.HtmlTagObject;
export type TagConfig = {
    tags?: HtmlTagDescriptor[];
    hash?: HtmlTag['hash'];
    append?: HtmlTag['append'];
    publicPath?: HtmlTag['publicPath'];
};
/**
 * A unique identifier for providing extra data to RsbuildHtmlPlugin
 */
export declare const entryNameSymbol: unique symbol;
export type HtmlExtraData = {
    entryName: string;
    context: InternalContext;
    environment: EnvironmentContext;
    favicon?: string;
    faviconDistPath: string;
    tagConfig?: TagConfig;
    templateContent?: string;
};
export type AlterAssetTagGroupsData = {
    headTags: HtmlTagObject[];
    bodyTags: HtmlTagObject[];
    outputName: string;
    publicPath: string;
    plugin: HtmlRspackPlugin;
};
export declare const hasTitle: (html?: string) => boolean;
export declare class RsbuildHtmlPlugin {
    readonly name: string;
    readonly getExtraData: (entryName: string) => HtmlExtraData | undefined;
    readonly getHTMLPlugin: () => typeof HtmlRspackPlugin;
    constructor(getExtraData: (entryName: string) => HtmlExtraData | undefined, getHTMLPlugin: () => typeof HtmlRspackPlugin);
    apply(compiler: Compiler): void;
}
export {};
