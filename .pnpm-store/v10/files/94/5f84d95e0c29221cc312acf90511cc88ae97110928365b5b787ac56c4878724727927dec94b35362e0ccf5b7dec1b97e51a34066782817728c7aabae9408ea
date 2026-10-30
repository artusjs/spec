import type { Compiler } from '../Compiler.js';
export type ShareScope = string | string[];
export declare function validateShareScope(shareScope: ShareScope, enhanced: boolean, pluginName: string): void;
export type SharePluginOptions = {
    shareScope?: ShareScope;
    shared: Shared;
    enhanced: boolean;
};
export type Shared = (SharedItem | SharedObject)[] | SharedObject;
export type SharedItem = string;
export type SharedObject = {
    [k: string]: SharedConfig | SharedItem;
};
export type TreeShakingConfig = {
    usedExports?: string[];
    mode?: 'server-calc' | 'runtime-infer';
    filename?: string;
};
export type SharedConfig = {
    eager?: boolean;
    import?: false | SharedItem;
    packageName?: string;
    requiredVersion?: false | string;
    shareKey?: string;
    shareScope?: ShareScope;
    singleton?: boolean;
    strictVersion?: boolean;
    version?: false | string;
    treeShaking?: TreeShakingConfig;
};
export type NormalizedSharedOptions = [string, SharedConfig][];
export declare function normalizeSharedOptions(shared: Shared): NormalizedSharedOptions;
export declare function createProvideShareOptions(normalizedSharedOptions: NormalizedSharedOptions): {
    [x: string]: {
        shareKey: string;
        shareScope: ShareScope | undefined;
        version: string | false | undefined;
        eager: boolean | undefined;
        singleton: boolean | undefined;
        requiredVersion: string | false | undefined;
        strictVersion: boolean | undefined;
        treeShakingMode: "server-calc" | "runtime-infer" | undefined;
    };
}[];
export declare function createConsumeShareOptions(normalizedSharedOptions: NormalizedSharedOptions): {
    [x: string]: {
        import: string | false | undefined;
        shareKey: string;
        shareScope: ShareScope | undefined;
        requiredVersion: string | false | undefined;
        strictVersion: boolean | undefined;
        singleton: boolean | undefined;
        packageName: string | undefined;
        eager: boolean | undefined;
        treeShakingMode: "server-calc" | "runtime-infer" | undefined;
    };
}[];
export declare class SharePlugin {
    _shareScope: ShareScope | undefined;
    _consumes: {
        [x: string]: {
            import: string | false | undefined;
            shareKey: string;
            shareScope: ShareScope | undefined;
            requiredVersion: string | false | undefined;
            strictVersion: boolean | undefined;
            singleton: boolean | undefined;
            packageName: string | undefined;
            eager: boolean | undefined;
            treeShakingMode: "server-calc" | "runtime-infer" | undefined;
        };
    }[];
    _provides: {
        [x: string]: {
            shareKey: string;
            shareScope: ShareScope | undefined;
            version: string | false | undefined;
            eager: boolean | undefined;
            singleton: boolean | undefined;
            requiredVersion: string | false | undefined;
            strictVersion: boolean | undefined;
            treeShakingMode: "server-calc" | "runtime-infer" | undefined;
        };
    }[];
    _enhanced: boolean;
    _sharedOptions: NormalizedSharedOptions;
    constructor(options: SharePluginOptions);
    apply(compiler: Compiler): void;
}
