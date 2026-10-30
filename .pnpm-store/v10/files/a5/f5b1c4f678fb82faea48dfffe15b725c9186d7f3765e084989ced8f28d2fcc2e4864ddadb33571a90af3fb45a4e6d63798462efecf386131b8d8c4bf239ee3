import { type RawRslibPluginOptions } from '@rspack/binding';
export type RslibPluginArgument = Partial<Omit<RawRslibPluginOptions, 'handler'>> | ((percentage: number, msg: string, ...args: string[]) => void) | undefined;
export declare const RslibPlugin: {
    new (rslib: RawRslibPluginOptions): {
        name: string;
        _args: [rslib: RawRslibPluginOptions];
        affectedHooks: keyof import("../index.js").CompilerHooks | undefined;
        raw(compiler: import("../index.js").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("../index.js").Compiler): void;
    };
};
