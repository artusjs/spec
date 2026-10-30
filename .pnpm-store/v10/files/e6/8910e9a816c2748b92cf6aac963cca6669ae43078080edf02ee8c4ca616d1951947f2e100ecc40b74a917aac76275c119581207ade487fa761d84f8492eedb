import binding from '@rspack/binding';
import * as liteTapable from '../../compiled/@rspack/lite-tapable/dist/index.js';
import type { Chunk } from '../Chunk.js';
import { type Compilation } from '../Compilation.js';
import type { CreatePartialRegisters } from '../taps/types.js';
export declare const RuntimePluginImpl: {
    new (): {
        name: string;
        _args: [];
        affectedHooks: keyof import("../index.js").CompilerHooks | undefined;
        raw(compiler: import("../index.js").Compiler): binding.BuiltinPlugin;
        apply(compiler: import("../index.js").Compiler): void;
    };
};
export type RuntimePluginHooks = {
    createScript: liteTapable.SyncWaterfallHook<[string, Chunk]>;
    createLink: liteTapable.SyncWaterfallHook<[string, Chunk]>;
    linkPreload: liteTapable.SyncWaterfallHook<[string, Chunk]>;
    linkPrefetch: liteTapable.SyncWaterfallHook<[string, Chunk]>;
};
declare const RuntimePlugin: typeof RuntimePluginImpl & {
    getCompilationHooks: (compilation: Compilation) => RuntimePluginHooks;
};
export declare const createRuntimePluginHooksRegisters: CreatePartialRegisters<`RuntimePlugin`>;
export { RuntimePlugin };
