export type ProvidePluginOptions = Record<string, string | string[]>;
export declare const ProvidePlugin: {
    new (provide: ProvidePluginOptions): {
        name: string;
        _args: [provide: ProvidePluginOptions];
        affectedHooks: keyof import("../index.js").CompilerHooks | undefined;
        raw(compiler: import("../index.js").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("../index.js").Compiler): void;
    };
};
