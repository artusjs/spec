import type { Module } from '../../Module.js';
export declare const BuiltinLazyCompilationPlugin: {
    new (currentActiveModules: () => Set<string>, entries: boolean, imports: boolean, client: string, test?: RegExp | ((module: Module) => boolean) | undefined): {
        name: string;
        _args: [currentActiveModules: () => Set<string>, entries: boolean, imports: boolean, client: string, test?: RegExp | ((module: Module) => boolean) | undefined];
        affectedHooks: keyof import("../../index.js").CompilerHooks | undefined;
        raw(compiler: import("../../index.js").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("../../index.js").Compiler): void;
    };
};
