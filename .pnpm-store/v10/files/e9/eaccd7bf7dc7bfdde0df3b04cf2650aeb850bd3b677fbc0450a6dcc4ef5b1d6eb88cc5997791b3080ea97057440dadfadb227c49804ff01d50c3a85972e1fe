import type { EnvironmentContext, Rspack } from '../types';
export type ServerUtils = {
    readFileSync: (fileName: string) => string;
    environment: EnvironmentContext;
};
export declare const loadBundle: <T>(stats: Rspack.Stats, entryName: string, utils: ServerUtils) => Promise<T>;
export declare const getTransformedHtml: (entryName: string, utils: ServerUtils) => string;
export declare const createCacheableFunction: <T>(getter: (stats: Rspack.Stats, entryName: string, utils: ServerUtils) => Promise<T> | T) => (stats: Rspack.Stats, entryName: string, utils: ServerUtils) => Promise<T>;
