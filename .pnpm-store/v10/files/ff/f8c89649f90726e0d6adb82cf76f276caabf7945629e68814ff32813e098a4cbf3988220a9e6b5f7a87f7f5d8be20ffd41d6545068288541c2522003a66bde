import type { ConfigLoader } from '../loadConfig';
import type { LogLevel, RsbuildMode } from '../types';
export type CommonOptions = {
    base?: string;
    root?: string;
    mode?: RsbuildMode;
    config?: string;
    configLoader?: ConfigLoader;
    env?: boolean;
    envDir?: string;
    envMode?: string;
    open?: boolean | string;
    host?: true | string;
    port?: number;
    environment?: string[];
    logLevel?: LogLevel;
};
export type BuildOptions = CommonOptions & {
    watch?: boolean;
};
export type InspectOptions = CommonOptions & {
    mode: RsbuildMode;
    output: string;
    verbose?: boolean;
};
export type DevOptions = CommonOptions;
export type PreviewOptions = CommonOptions;
export declare function setupCommands(): void;
