import type { Logger } from '../logger';
import type { Rspack } from '../types';
export declare const isFileSync: (filePath: string) => boolean | undefined;
export declare function isEmptyDir(path: string): boolean;
/**
 * Find first already exists file.
 * @param files - Absolute file paths with extension.
 * @returns The file path if exists, or false if no file exists.
 */
export declare const findExists: (files: string[]) => string | false;
export declare function pathExists(path: string): Promise<boolean>;
export declare function isFileExists(file: string): Promise<boolean>;
export declare function fileExistsByCompilation({ inputFileSystem }: Rspack.Compilation, filePath: string): Promise<boolean>;
/**
 * Read file asynchronously using Rspack compiler's filesystem.
 */
export declare function readFileAsync(fs: NonNullable<Rspack.Compilation['inputFileSystem'] | Rspack.OutputFileSystem>, filename: string): Promise<Buffer | string>;
export declare function emptyDir(dir: string, logger: Logger, keep?: RegExp[], checkExists?: boolean): Promise<void>;
