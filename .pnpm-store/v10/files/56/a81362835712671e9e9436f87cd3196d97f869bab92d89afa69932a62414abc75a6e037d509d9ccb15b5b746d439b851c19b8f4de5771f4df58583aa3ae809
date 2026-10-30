import type { Rspack } from '../types';
export declare function toRelativePath(base: string, filepath: string): string;
export declare function getCommonParentPath(paths: string[]): string;
export declare const getCompiledPath: (packageName: string) => string;
/**
 * ensure absolute file path.
 * @param base - Base path to resolve relative from.
 * @param filePath - Absolute or relative file path.
 * @returns Resolved absolute file path.
 */
export declare const ensureAbsolutePath: (base: string, filePath: string) => string;
export declare const getPathnameFromUrl: (url: string) => string;
/** dedupe and remove nested paths */
export declare const dedupeNestedPaths: (paths: string[]) => string[];
/**
 * Convert Windows backslash paths to posix forward slashes
 * @example
 * toPosixPath('foo\\bar') // returns 'foo/bar'
 */
export declare const toPosixPath: (filepath: string) => string;
/**
 * Normalize filepaths for `source.include` and `source.exclude` configuration.
 * On Windows, `require.resolve` returns paths with posix forward slashes,
 * This function normalizes the path to use backslashes.
 */
export declare const normalizeRuleConditionPath: (filepath: Rspack.RuleSetCondition) => Rspack.RuleSetCondition;
