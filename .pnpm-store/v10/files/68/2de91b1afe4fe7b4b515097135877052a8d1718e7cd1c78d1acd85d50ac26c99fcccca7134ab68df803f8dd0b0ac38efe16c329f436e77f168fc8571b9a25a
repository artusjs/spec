import type { Logger } from './logger';
import type { InternalContext, PluginManager, PluginMeta } from './types';
/**
 * Determines whether the plugin is registered in the specified environment.
 * If the pluginEnvironment is undefined, it means it can match any environment.
 */
export declare const isEnvironmentMatch: (pluginEnvironment?: string, specifiedEnvironment?: string) => boolean;
export declare function createPluginManager(logger: Logger): PluginManager;
/**
 * Sorts plugins by their `enforce` property.
 */
export declare const sortPluginsByEnforce: (plugins: PluginMeta[]) => PluginMeta[];
/**
 * Performs topological sorting on plugins based on their dependencies.
 * Uses the `pre` and `post` properties of plugins to determine the correct
 * execution order.
 */
export declare const sortPluginsByDependencies: (plugins: PluginMeta[]) => PluginMeta[];
export declare function initPlugins({ context, pluginManager, }: {
    context: InternalContext;
    pluginManager: PluginManager;
}): Promise<void>;
