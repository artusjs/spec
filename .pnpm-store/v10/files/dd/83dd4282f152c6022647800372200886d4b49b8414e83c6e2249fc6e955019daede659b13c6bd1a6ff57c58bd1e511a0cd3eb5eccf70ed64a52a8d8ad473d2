import type { Compiler } from '@rspack/core';
import type { Logger } from '../../logger';
import type { EnvironmentContext, NormalizedDevConfig } from '../../types';
declare module '@rspack/core' {
    interface Compiler {
        __hasRsbuildAssetEmittedCallback?: boolean;
    }
}
export type ResolvedWriteToDisk = boolean | ((filePath: string, name?: string) => boolean);
/**
 * Resolve writeToDisk config across multiple environments.
 * Returns the unified config if all environments have the same value,
 * otherwise returns a function that resolves config based on compilation.
 */
export declare const resolveWriteToDiskConfig: (config: NormalizedDevConfig, environments: Record<string, EnvironmentContext>, environmentList: EnvironmentContext[]) => ResolvedWriteToDisk;
export declare function setupWriteToDisk(compilers: Compiler[], writeToDisk: ResolvedWriteToDisk, logger: Logger): void;
