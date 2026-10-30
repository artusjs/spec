import { type BuiltinPlugin, BuiltinPluginName } from '@rspack/binding';
import type { Compiler } from '../Compiler.js';
import type { EntryDynamicNormalized } from '../config/index.js';
import { RspackBuiltinPlugin } from './base.js';
export declare class DynamicEntryPlugin extends RspackBuiltinPlugin {
    private context;
    private entry;
    name: BuiltinPluginName;
    affectedHooks: "make";
    constructor(context: string, entry: EntryDynamicNormalized);
    raw(compiler: Compiler): BuiltinPlugin | undefined;
}
