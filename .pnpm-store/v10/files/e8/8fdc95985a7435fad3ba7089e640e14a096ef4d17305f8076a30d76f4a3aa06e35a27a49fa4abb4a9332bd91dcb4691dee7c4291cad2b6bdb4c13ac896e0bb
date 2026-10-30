import { type BuiltinPlugin, BuiltinPluginName } from '@rspack/binding';
import { RspackBuiltinPlugin } from '../builtin-plugin/base.js';
import type { Compiler } from '../Compiler.js';
export type ConsumeSharedPluginOptions = {
    consumes: Consumes;
    shareScope?: string | string[];
    enhanced?: boolean;
};
export type Consumes = (ConsumesItem | ConsumesObject)[] | ConsumesObject;
export type ConsumesItem = string;
export type ConsumesObject = {
    [k: string]: ConsumesConfig | ConsumesItem;
};
export type ConsumesConfig = {
    eager?: boolean;
    import?: false | ConsumesItem;
    packageName?: string;
    requiredVersion?: false | string;
    shareKey?: string;
    shareScope?: string | string[];
    singleton?: boolean;
    strictVersion?: boolean;
    treeShakingMode?: 'server-calc' | 'runtime-infer';
};
export declare function normalizeConsumeShareOptions(consumes: Consumes, shareScope?: string | string[]): [string, {
    import: string | undefined;
    shareScope: string | string[];
    shareKey: string;
    requiredVersion: string | false | undefined;
    strictVersion: boolean;
    packageName: string | undefined;
    singleton: boolean;
    eager: boolean;
    treeShakingMode: "server-calc" | "runtime-infer" | undefined;
}][];
export declare class ConsumeSharedPlugin extends RspackBuiltinPlugin {
    name: BuiltinPluginName;
    _options: {
        consumes: [string, {
            import: string | undefined;
            shareScope: string | string[];
            shareKey: string;
            requiredVersion: string | false | undefined;
            strictVersion: boolean;
            packageName: string | undefined;
            singleton: boolean;
            eager: boolean;
            treeShakingMode: "server-calc" | "runtime-infer" | undefined;
        }][];
        enhanced: boolean;
    };
    constructor(options: ConsumeSharedPluginOptions);
    raw(compiler: Compiler): BuiltinPlugin;
}
