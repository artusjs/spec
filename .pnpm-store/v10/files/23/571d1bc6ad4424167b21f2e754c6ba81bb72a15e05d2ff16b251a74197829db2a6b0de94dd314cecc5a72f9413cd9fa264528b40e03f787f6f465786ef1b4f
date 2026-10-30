export type DllEntryPluginOptions = {
    name: string;
};
export declare const DllEntryPlugin: {
    new (context: string, entries: string[], options: DllEntryPluginOptions): {
        name: string;
        _args: [context: string, entries: string[], options: DllEntryPluginOptions];
        affectedHooks: keyof import("../index.js").CompilerHooks | undefined;
        raw(compiler: import("../index.js").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("../index.js").Compiler): void;
    };
};
