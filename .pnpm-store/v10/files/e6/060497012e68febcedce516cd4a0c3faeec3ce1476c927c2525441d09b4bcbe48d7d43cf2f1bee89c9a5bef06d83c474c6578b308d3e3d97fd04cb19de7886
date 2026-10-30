import type { ChokidarOptions } from '../compiled/chokidar';
import type { Logger } from './logger';
import type { RsbuildInstance } from './types';
type Cleaner = () => unknown;
/**
 * Add a cleaner to handle side effects
 */
export declare const onBeforeRestartServer: (cleaner: Cleaner) => void;
export declare const restartDevServer: ({ filePath, clear, logger, }: {
    filePath?: string;
    clear?: boolean;
    logger: Logger;
}) => Promise<boolean>;
export declare function watchFilesForRestart({ files, rsbuild, isBuildWatch, watchOptions, }: {
    files: string[];
    rsbuild: RsbuildInstance;
    isBuildWatch: boolean;
    watchOptions?: ChokidarOptions;
}): Promise<void>;
export {};
