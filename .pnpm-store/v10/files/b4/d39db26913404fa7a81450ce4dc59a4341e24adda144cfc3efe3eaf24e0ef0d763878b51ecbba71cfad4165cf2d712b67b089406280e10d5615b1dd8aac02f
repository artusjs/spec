import { type RawCopyPattern } from '@rspack/binding';
export type CopyRspackPluginOptions = {
    /** An array of objects that describe the copy operations to be performed. */
    patterns: (string | (Pick<RawCopyPattern, 'from'> & Partial<Omit<RawCopyPattern, 'from'>>))[];
};
export declare const CopyRspackPlugin: {
    new (copy: CopyRspackPluginOptions): {
        name: string;
        _args: [copy: CopyRspackPluginOptions];
        affectedHooks: keyof import("../index.js").CompilerHooks | undefined;
        raw(compiler: import("../index.js").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("../index.js").Compiler): void;
    };
};
