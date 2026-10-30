import type { BuiltinPlugin } from '@rspack/binding';
import { BuiltinPluginName } from '@rspack/binding';
import { RspackBuiltinPlugin } from '../builtin-plugin/base.js';
import { type ModuleFederationManifestPluginOptions } from '../container/ModuleFederationManifestPlugin.js';
import type { NormalizedSharedOptions } from './SharePlugin.js';
export declare class SharedUsedExportsOptimizerPlugin extends RspackBuiltinPlugin {
    name: BuiltinPluginName;
    private sharedOptions;
    private injectTreeShakingUsedExports;
    private manifestOptions;
    constructor(sharedOptions: NormalizedSharedOptions, injectTreeShakingUsedExports?: boolean, manifestOptions?: ModuleFederationManifestPluginOptions);
    private buildOptions;
    raw(): BuiltinPlugin | undefined;
}
