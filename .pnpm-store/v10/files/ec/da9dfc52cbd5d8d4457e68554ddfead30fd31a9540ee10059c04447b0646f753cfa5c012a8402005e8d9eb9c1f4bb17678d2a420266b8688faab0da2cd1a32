import { type JsHtmlPluginTag } from '@rspack/binding';
import type { Compilation } from '../../Compilation.js';
import type { Compiler } from '../../Compiler.js';
import { type HtmlRspackPluginHooks } from './hooks.js';
import { type HtmlRspackPluginOptions } from './options.js';
declare const HtmlRspackPluginImpl: {
    new (c?: HtmlRspackPluginOptions | undefined): {
        name: string;
        _args: [c?: HtmlRspackPluginOptions | undefined];
        affectedHooks: keyof import("../../index.js").CompilerHooks | undefined;
        raw(compiler: Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: Compiler): void;
    };
};
declare const HtmlRspackPlugin: typeof HtmlRspackPluginImpl & {
    getCompilationHooks: (compilation: Compilation) => HtmlRspackPluginHooks;
    createHtmlTagObject: (tagName: string, attributes?: Record<string, string | boolean>, innerHTML?: string) => JsHtmlPluginTag;
    version: number;
};
export { HtmlRspackPlugin };
