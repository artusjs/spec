import { type BuiltinPlugin, BuiltinPluginName } from '@rspack/binding';
import * as liteTapable from '../../compiled/@rspack/lite-tapable/dist/index.js';
import type { Chunk } from '../Chunk.js';
import { type Compilation } from '../Compilation.js';
import type Hash from '../util/hash/index.js';
import { RspackBuiltinPlugin } from './base.js';
export type CompilationHooks = {
    chunkHash: liteTapable.SyncHook<[Chunk, Hash]>;
};
export declare class JavascriptModulesPlugin extends RspackBuiltinPlugin {
    name: BuiltinPluginName;
    affectedHooks: "compilation";
    raw(): BuiltinPlugin;
    static getCompilationHooks(compilation: Compilation): CompilationHooks;
}
