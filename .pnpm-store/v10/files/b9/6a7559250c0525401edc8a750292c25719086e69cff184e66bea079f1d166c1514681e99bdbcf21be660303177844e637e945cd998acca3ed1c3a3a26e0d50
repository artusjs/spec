import type { InitConfigsOptions } from './initConfigs';
import type { InspectConfigOptions, InspectConfigResult, Rspack } from './types';
export declare function stringifyConfig(config: unknown, verbose?: boolean): string;
export declare function inspectConfig({ context, pluginManager, bundlerConfigs, inspectOptions, }: InitConfigsOptions & {
    inspectOptions?: InspectConfigOptions;
    bundlerConfigs: Rspack.Configuration[];
}): Promise<InspectConfigResult>;
