import type { Logger } from './logger';
import type { InternalContext, NormalizedEnvironmentConfig, ResolvedCreateRsbuildOptions, RsbuildConfig, RsbuildContext } from './types';
export declare function getBrowserslist(path: string): string[] | null;
export declare function getBrowserslistByEnvironment(path: string, config: NormalizedEnvironmentConfig): string[];
export declare function updateEnvironmentContext(context: InternalContext, configs: Record<string, NormalizedEnvironmentConfig>): Promise<void>;
export declare function updateContextByNormalizedConfig(context: InternalContext): void;
export declare function createPublicContext(context: InternalContext): Readonly<RsbuildContext>;
/**
 * Generate the actual context used in the build,
 * which can have a lot of overhead and take some side effects.
 */
export declare function createContext(options: ResolvedCreateRsbuildOptions, userConfig: RsbuildConfig, logger: Logger): Promise<InternalContext>;
