import type { LightningCssMinimizerRspackPluginOptions, SwcJsMinimizerRspackPluginOptions } from '@rspack/core';
import type { NormalizedEnvironmentConfig, RsbuildPlugin } from '../types';
export declare function getSwcMinimizerOptions(config: NormalizedEnvironmentConfig, jsOptions?: SwcJsMinimizerRspackPluginOptions): SwcJsMinimizerRspackPluginOptions;
export declare function parseMinifyOptions(config: NormalizedEnvironmentConfig): {
    minifyJs: boolean;
    minifyCss: boolean;
    jsOptions?: SwcJsMinimizerRspackPluginOptions;
    cssOptions?: LightningCssMinimizerRspackPluginOptions;
};
export declare const pluginMinimize: () => RsbuildPlugin;
