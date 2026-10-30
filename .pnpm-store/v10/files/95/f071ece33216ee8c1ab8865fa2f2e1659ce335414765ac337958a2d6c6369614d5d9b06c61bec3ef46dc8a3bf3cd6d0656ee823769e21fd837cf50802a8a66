import { type RawProgressPluginHandlerInfo, type RawProgressPluginOptions } from '@rspack/binding';
export type ProgressPluginOptions = Partial<Omit<RawProgressPluginOptions, 'handler'>> | ((percentage: number, msg: string, info: RawProgressPluginHandlerInfo) => void) | undefined;
export type ProgressPluginHandlerInfo = RawProgressPluginHandlerInfo;
export declare const ProgressPlugin: {
    new (progress?: ProgressPluginOptions): {
        name: string;
        _args: [progress?: ProgressPluginOptions];
        affectedHooks: keyof import("../index.js").CompilerHooks | undefined;
        raw(compiler: import("../index.js").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("../index.js").Compiler): void;
    };
};
