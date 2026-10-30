import type { Compiler } from '../Compiler.js';
import type { ExternalsType } from '../config/index.js';
import type { ShareScope } from '../sharing/SharePlugin.js';
import { type ModuleFederationManifestPluginOptions } from './ModuleFederationManifestPlugin.js';
import type { ModuleFederationPluginV1Options } from './ModuleFederationPluginV1.js';
import { type ModuleFederationRuntimeExperimentsOptions } from './ModuleFederationRuntimePlugin.js';
export interface ModuleFederationPluginOptions extends Omit<ModuleFederationPluginV1Options, 'enhanced'> {
    runtimePlugins?: RuntimePlugins;
    implementation?: string;
    shareStrategy?: 'version-first' | 'loaded-first';
    manifest?: ModuleFederationManifestPluginOptions;
    injectTreeShakingUsedExports?: boolean;
    treeShakingSharedDir?: string;
    treeShakingSharedExcludePlugins?: string[];
    treeShakingSharedPlugins?: string[];
    experiments?: ModuleFederationRuntimeExperimentsOptions;
}
export type RuntimePlugins = string[] | [string, Record<string, unknown>][];
export declare class ModuleFederationPlugin {
    private _options;
    private _treeShakingSharedPlugin?;
    constructor(_options: ModuleFederationPluginOptions);
    apply(compiler: Compiler): void;
}
interface RemoteInfo {
    alias: string;
    name?: string;
    entry?: string;
    externalType: ExternalsType;
    shareScope: ShareScope;
}
type RemoteInfos = Record<string, RemoteInfo[]>;
export declare function getRemoteInfos(options: ModuleFederationPluginOptions): RemoteInfos;
export {};
