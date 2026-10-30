import type { RsbuildConfig } from './types';
export type ConfigParams = {
    env: string;
    command: string;
    envMode?: string;
    meta?: Record<string, unknown>;
};
export type RsbuildConfigAsyncFn = (env: ConfigParams) => Promise<RsbuildConfig>;
export type RsbuildConfigSyncFn = (env: ConfigParams) => RsbuildConfig;
export type RsbuildConfigExport = RsbuildConfig | RsbuildConfigSyncFn | RsbuildConfigAsyncFn;
export type LoadConfigOptions = {
    /**
     * The root path to resolve the config file.
     * @default process.cwd()
     */
    cwd?: string;
    /**
     * The path to the config file, can be a relative or absolute path.
     * If `path` is not provided, the function will search for the config file in the `cwd`.
     */
    path?: string;
    /**
     * A custom meta object to be passed into the config function of `defineConfig`.
     */
    meta?: Record<string, unknown>;
    /**
     * The `envMode` passed into the config function of `defineConfig`.
     * @default process.env.NODE_ENV
     */
    envMode?: string;
    /**
     * Specify the config loader, can be `auto`, `jiti` or `native`.
     * - 'auto': Use native Node.js loader first, fallback to jiti if failed
     * - 'jiti': Use `jiti` as loader, which supports TypeScript and ESM out of the box
     * - 'native': Use native Node.js loader, requires TypeScript support in Node.js >= 22.6
     * @default 'auto'
     */
    loader?: ConfigLoader;
};
export type LoadConfigResult = {
    /**
     * The loaded configuration object.
     */
    content: RsbuildConfig;
    /**
     * The path to the loaded configuration file.
     * Return `null` if the configuration file is not found.
     */
    filePath: string | null;
};
/**
 * This function helps you to autocomplete configuration types.
 * It accepts a Rsbuild config object, or a function that returns a config.
 */
export declare function defineConfig(config: RsbuildConfig): RsbuildConfig;
export declare function defineConfig(config: RsbuildConfigSyncFn): RsbuildConfigSyncFn;
export declare function defineConfig(config: RsbuildConfigAsyncFn): RsbuildConfigAsyncFn;
export declare function defineConfig(config: RsbuildConfigExport): RsbuildConfigExport;
export type ConfigLoader = 'auto' | 'jiti' | 'native';
export declare function loadConfig({ cwd, path, envMode, meta, loader, }?: LoadConfigOptions): Promise<LoadConfigResult>;
