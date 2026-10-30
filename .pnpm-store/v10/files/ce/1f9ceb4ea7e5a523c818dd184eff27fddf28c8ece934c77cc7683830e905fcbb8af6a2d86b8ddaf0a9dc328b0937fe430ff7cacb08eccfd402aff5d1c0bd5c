import type { Logger } from '../logger';
import type { NormalizedConfig, Routes } from '../types';
export declare const replacePortPlaceholder: (url: string, port: number) => string;
export declare function resolveUrl(str: string, base: string): string;
export declare function open({ port, routes, config, protocol, clearCache, logger, }: {
    port: number;
    routes: Routes;
    config: NormalizedConfig;
    protocol: string;
    clearCache?: boolean;
    logger: Logger;
}): Promise<void>;
