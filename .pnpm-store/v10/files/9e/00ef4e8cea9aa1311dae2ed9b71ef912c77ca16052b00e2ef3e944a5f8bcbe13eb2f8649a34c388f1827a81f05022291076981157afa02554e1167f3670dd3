export interface ModuleFederationRuntimeExperimentsOptions {
    asyncStartup?: boolean;
}
export interface ModuleFederationRuntimeOptions {
    entryRuntime?: string;
    experiments?: ModuleFederationRuntimeExperimentsOptions;
}
export declare const ModuleFederationRuntimePlugin: {
    new (options?: ModuleFederationRuntimeOptions | undefined): {
        name: string;
        _args: [options?: ModuleFederationRuntimeOptions | undefined];
        affectedHooks: keyof import("../index.js").CompilerHooks | undefined;
        raw(compiler: import("../index.js").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("../index.js").Compiler): void;
    };
};
