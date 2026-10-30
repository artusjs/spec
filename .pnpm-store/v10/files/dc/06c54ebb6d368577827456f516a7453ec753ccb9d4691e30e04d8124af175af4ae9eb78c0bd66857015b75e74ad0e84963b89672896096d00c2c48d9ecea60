import type { InternalContext, NormalizedConfig, PluginManager, ResolvedCreateRsbuildOptions, Rspack } from './types';
export type InitConfigsOptions = {
    context: InternalContext;
    pluginManager: PluginManager;
    rsbuildOptions: ResolvedCreateRsbuildOptions;
};
/**
 * Initialize the Rsbuild config
 * 1. Initialize the Rsbuild plugins
 * 2. Run all the `modifyRsbuildConfig` hooks
 * 3. Normalize the Rsbuild config, merge with the default config
 * 4. Initialize the configs for each environment
 * 5. Run all the `modifyEnvironmentConfig` hooks
 * 6. Validate the final Rsbuild config
 */
export declare function initRsbuildConfig({ context, pluginManager, }: Pick<InitConfigsOptions, 'context' | 'pluginManager'>): Promise<NormalizedConfig>;
export declare function initConfigs({ context, pluginManager, rsbuildOptions, }: InitConfigsOptions): Promise<{
    rspackConfigs: Rspack.Configuration[];
}>;
