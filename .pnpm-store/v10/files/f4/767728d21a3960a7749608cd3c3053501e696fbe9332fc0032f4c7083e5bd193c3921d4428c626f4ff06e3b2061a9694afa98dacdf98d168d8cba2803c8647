import { type BuiltinPlugin, BuiltinPluginName, type RawProvideOptions } from '@rspack/binding';
import { RspackBuiltinPlugin } from '../builtin-plugin/base.js';
import type { Compiler } from '../Compiler.js';
import type { ShareScope } from './SharePlugin.js';
export type ProvideSharedPluginOptions<Enhanced extends boolean = false> = {
    provides: Provides<Enhanced>;
    shareScope?: ShareScope;
    enhanced?: Enhanced;
};
export type Provides<Enhanced extends boolean> = (ProvidesItem | ProvidesObject<Enhanced>)[] | ProvidesObject<Enhanced>;
export type ProvidesItem = string;
export type ProvidesObject<Enhanced extends boolean> = {
    [k: string]: ProvidesConfig<Enhanced> | ProvidesItem;
};
export type ProvidesConfig<Enhanced extends boolean> = Enhanced extends true ? ProvidesEnhancedConfig : ProvidesV1Config;
type ProvidesV1Config = {
    eager?: boolean;
    shareKey: string;
    shareScope?: ShareScope;
    version?: false | string;
};
type ProvidesEnhancedConfig = ProvidesV1Config & ProvidesEnhancedExtraConfig;
type ProvidesEnhancedExtraConfig = {
    singleton?: boolean;
    strictVersion?: boolean;
    requiredVersion?: false | string;
    /**
     * Tree shaking strategy for the shared module.
     */
    treeShakingMode?: 'server-calc' | 'runtime-infer';
};
export declare function normalizeProvideShareOptions<Enhanced extends boolean = false>(options: Provides<Enhanced>, shareScope?: ShareScope, enhanced?: boolean): [string, {
    shareKey: string;
    version: string | false | undefined;
    shareScope: ShareScope;
    eager: boolean;
} | {
    singleton: boolean | undefined;
    requiredVersion: string | false | undefined;
    strictVersion: boolean | undefined;
    treeShakingMode: "server-calc" | "runtime-infer" | undefined;
    shareKey: string;
    version: string | false | undefined;
    shareScope: ShareScope;
    eager: boolean;
}][];
export declare class ProvideSharedPlugin<Enhanced extends boolean = false> extends RspackBuiltinPlugin {
    name: BuiltinPluginName;
    _provides: [string, Omit<RawProvideOptions, 'key'>][];
    _enhanced?: Enhanced;
    constructor(options: ProvideSharedPluginOptions<Enhanced>);
    raw(compiler: Compiler): BuiltinPlugin;
}
export {};
