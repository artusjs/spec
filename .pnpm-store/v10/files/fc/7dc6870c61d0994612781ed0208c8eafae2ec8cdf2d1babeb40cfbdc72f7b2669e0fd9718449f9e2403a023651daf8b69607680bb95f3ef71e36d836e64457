import type { FSWatcher } from '../../compiled/chokidar';
import type { ChokidarOptions, NormalizedConfig } from '../types';
import type { BuildManager } from './buildManager';
type WatchFilesOptions = {
    root: string;
    config: NormalizedConfig;
    buildManager?: BuildManager;
};
export type WatchFilesResult = {
    close(): Promise<void>;
};
export declare function setupWatchFiles(options: WatchFilesOptions): Promise<WatchFilesResult | undefined>;
export declare function createChokidar(pathOrGlobs: string[], root: string, options: ChokidarOptions): Promise<FSWatcher>;
export {};
