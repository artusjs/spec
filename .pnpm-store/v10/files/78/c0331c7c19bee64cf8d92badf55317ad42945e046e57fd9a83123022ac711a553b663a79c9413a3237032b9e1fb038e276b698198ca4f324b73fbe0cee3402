export type LibManifestPluginOptions = {
    context?: string;
    entryOnly?: boolean;
    format?: boolean;
    name?: string;
    path: string;
    type?: string;
};
export declare const LibManifestPlugin: {
    new (options: LibManifestPluginOptions): {
        name: string;
        _args: [options: LibManifestPluginOptions];
        affectedHooks: keyof import("../index.js").CompilerHooks | undefined;
        raw(compiler: import("../index.js").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("../index.js").Compiler): void;
    };
};
