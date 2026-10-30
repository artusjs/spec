import type { RsbuildConfig } from '@rsbuild/core';
import type { UserConfig } from '@rspress/shared';
interface ServerInstance {
    close: () => Promise<void>;
}
interface DevOptions {
    appDirectory: string;
    docDirectory: string;
    config: UserConfig;
    configFilePath: string;
    extraBuilderConfig?: RsbuildConfig;
}
export declare function dev(options: DevOptions): Promise<ServerInstance>;
export {};
