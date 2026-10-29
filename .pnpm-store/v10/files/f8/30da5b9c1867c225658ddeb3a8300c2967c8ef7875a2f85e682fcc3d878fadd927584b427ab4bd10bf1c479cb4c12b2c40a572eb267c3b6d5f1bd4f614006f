import type { Compiler } from '../Compiler.js';
import type { LibraryOptions, Plugins } from '../config/index.js';
import { type ModuleFederationManifestPluginOptions } from '../container/ModuleFederationManifestPlugin.js';
import type { Shared, SharedConfig } from './SharePlugin.js';
export type MakeRequired<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;
export interface IndependentSharePluginOptions {
    name: string;
    shared: Shared;
    library?: LibraryOptions;
    outputDir?: string;
    plugins?: Plugins;
    treeShaking?: boolean;
    manifest?: ModuleFederationManifestPluginOptions;
    injectTreeShakingUsedExports?: boolean;
    treeShakingSharedExcludePlugins?: string[];
}
export type ShareFallback = Record<string, [string, string, string][]>;
export declare class IndependentSharedPlugin {
    mfName: string;
    shared: Shared;
    library?: LibraryOptions;
    sharedOptions: [string, SharedConfig][];
    outputDir: string;
    plugins: Plugins;
    treeShaking?: boolean;
    manifest?: ModuleFederationManifestPluginOptions;
    buildAssets: ShareFallback;
    injectTreeShakingUsedExports?: boolean;
    treeShakingSharedExcludePlugins?: string[];
    name: string;
    constructor(options: IndependentSharePluginOptions);
    apply(compiler: Compiler): void;
    private createIndependentCompilers;
    private createIndependentCompiler;
}
