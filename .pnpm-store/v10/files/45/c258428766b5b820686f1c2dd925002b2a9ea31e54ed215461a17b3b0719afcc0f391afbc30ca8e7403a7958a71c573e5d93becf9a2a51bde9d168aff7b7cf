import * as liteTapable from '../compiled/@rspack/lite-tapable/dist/index.js';
import type { Compilation } from './Compilation.js';
import type { LoaderContext } from './config/index.js';
import type { Module } from './Module.js';
export interface NormalModuleCompilationHooks {
    loader: liteTapable.SyncHook<[LoaderContext, Module]>;
    readResource: liteTapable.HookMap<liteTapable.AsyncSeriesBailHook<[LoaderContext], string | Buffer>>;
}
declare module '@rspack/binding' {
    interface NormalModuleConstructor {
        getCompilationHooks(compilation: Compilation): NormalModuleCompilationHooks;
    }
}
export { NormalModule } from '@rspack/binding';
