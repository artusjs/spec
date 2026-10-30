import { type BuiltinPlugin, BuiltinPluginName, type RawSplitChunksOptions } from '@rspack/binding';
import type { Compiler } from '../Compiler.js';
import type { OptimizationSplitChunksOptions } from '../config/index.js';
import { RspackBuiltinPlugin } from './base.js';
export declare class SplitChunksPlugin extends RspackBuiltinPlugin {
    private options;
    name: BuiltinPluginName;
    affectedHooks: "thisCompilation";
    constructor(options: OptimizationSplitChunksOptions);
    raw(compiler: Compiler): BuiltinPlugin;
}
export declare function toRawSplitChunksOptions(sc: false | OptimizationSplitChunksOptions, compiler: Compiler): RawSplitChunksOptions | undefined;
