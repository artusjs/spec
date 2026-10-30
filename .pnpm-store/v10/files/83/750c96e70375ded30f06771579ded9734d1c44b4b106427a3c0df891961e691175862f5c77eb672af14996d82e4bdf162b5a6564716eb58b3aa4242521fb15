import { type BuiltinPlugin, BuiltinPluginName } from '@rspack/binding';
import { RspackBuiltinPlugin } from '../builtin-plugin/base.js';
import type { Compiler } from '../Compiler.js';
import { type ModuleFederationPluginOptions } from './ModuleFederationPlugin.js';
export type RemoteAliasMap = Record<string, {
    name: string;
    entry?: string;
}>;
export type ManifestExposeOption = {
    path: string;
    name: string;
};
export type ManifestSharedOption = {
    name: string;
    version?: string;
    requiredVersion?: string;
    singleton?: boolean;
};
type InternalManifestPluginOptions = {
    name?: string;
    globalName?: string;
    filePath?: string;
    disableAssetsAnalyze?: boolean;
    fileName?: string;
    remoteAliasMap?: RemoteAliasMap;
    exposes?: ManifestExposeOption[];
    shared?: ManifestSharedOption[];
};
export type ModuleFederationManifestPluginOptions = boolean | Pick<InternalManifestPluginOptions, 'disableAssetsAnalyze' | 'filePath' | 'fileName'>;
export declare function getFileName(manifestOptions: ModuleFederationManifestPluginOptions): {
    statsFileName: string;
    manifestFileName: string;
};
/**
 * JS-side post-processing plugin: reads mf-manifest.json and mf-stats.json, executes additionalData callback and merges/overwrites manifest.
 * To avoid cross-NAPI callback complexity, this plugin runs at the afterProcessAssets stage to ensure Rust-side MfManifestPlugin has already output its artifacts.
 */
export declare class ModuleFederationManifestPlugin extends RspackBuiltinPlugin {
    name: BuiltinPluginName;
    private rawOpts;
    constructor(opts: ModuleFederationPluginOptions);
    raw(compiler: Compiler): BuiltinPlugin;
}
export {};
