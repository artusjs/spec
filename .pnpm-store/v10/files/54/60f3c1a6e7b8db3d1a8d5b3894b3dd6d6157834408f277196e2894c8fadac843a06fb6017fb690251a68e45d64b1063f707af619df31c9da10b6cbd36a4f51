import { type BuiltinPlugin, BuiltinPluginName } from '@rspack/binding';
import { RspackBuiltinPlugin } from '../builtin-plugin/base.js';
import type { Compiler } from '../Compiler.js';
import { type NormalizedSharedOptions, type ShareScope } from './SharePlugin.js';
export type CollectSharedEntryPluginOptions = {
    sharedOptions: NormalizedSharedOptions;
    shareScope?: ShareScope;
};
export type ShareRequestsMap = Record<string, {
    shareScope: string;
    requests: [string, string][];
}>;
export declare class CollectSharedEntryPlugin extends RspackBuiltinPlugin {
    name: BuiltinPluginName;
    sharedOptions: NormalizedSharedOptions;
    private _collectedEntries;
    constructor(options: CollectSharedEntryPluginOptions);
    getData(): ShareRequestsMap;
    getFilename(): string;
    apply(compiler: Compiler): void;
    raw(): BuiltinPlugin;
}
