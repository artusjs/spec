import type { NormalizedConfig, RsbuildConfig, RsbuildEntry } from './types';
/**
 * Default allowed origins for CORS.
 * - localhost
 * - 127.0.0.1
 * - [::1]
 *
 * Can be used in `server.cors.origin` config.
 * @example
 * ```ts
 * server: {
 *   cors: {
 *     origin: [defaultAllowedOrigins, 'https://example.com'],
 *   },
 * }
 * ```
 */
export declare const defaultAllowedOrigins: RegExp;
export declare function getDefaultEntry(root: string): RsbuildEntry;
export declare const withDefaultConfig: (rootPath: string, userConfig: RsbuildConfig) => Promise<RsbuildConfig>;
/**
 * Normalizes the user configuration by merging it with defaults and ensuring
 * consistent structure.
 */
export declare const normalizeConfig: (config: RsbuildConfig, rootPath: string) => NormalizedConfig;
