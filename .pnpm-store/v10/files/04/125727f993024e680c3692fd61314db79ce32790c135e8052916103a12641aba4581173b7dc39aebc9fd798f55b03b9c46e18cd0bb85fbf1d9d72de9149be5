import { type Logger } from '../logger';
import type { ActionType, RsbuildStats, Rspack } from '../types';
/**
 * If stats has errors, return stats errors directly
 * If stats has no errors, return child errors, as some errors exist in both
 * stats and childCompiler
 */
export declare const getStatsErrors: ({ errors, children, }: RsbuildStats) => Rspack.StatsError[];
export declare const getStatsWarnings: ({ warnings, children, }: RsbuildStats) => Rspack.StatsError[];
export declare function getRsbuildStats(statsInstance: Rspack.Stats | Rspack.MultiStats, compiler: Rspack.Compiler | Rspack.MultiCompiler, logger: Logger, action?: ActionType): RsbuildStats;
export declare function formatStats(stats: RsbuildStats, hasErrors: boolean, root: string, logger: Logger): {
    message?: string;
    level?: string;
};
/**
 * Remove the loader chain delimiter from the module identifier.
 * @example ./src/index.js!=!/node_modules/my-loader/index.js -> ./src/index.js
 */
export declare const removeLoaderChainDelimiter: (moduleId: string, logger: Logger) => string;
