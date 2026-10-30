import { type ProcessorOptions } from '@mdx-js/mdx';
import type { Rspack } from '@rsbuild/core';
import type { UserConfig } from '@rspress/shared';
import type { PluginDriver } from '../PluginDriver.js';
import type { RouteService } from '../route/RouteService.js';
export declare function createMDXOptions(options: {
    docDirectory: string;
    filepath: string;
    config: UserConfig | null;
    routeService: RouteService | null;
    pluginDriver: PluginDriver | null;
    addDependency?: Rspack.LoaderContext['addDependency'];
    isSsgMd?: boolean;
}): Promise<ProcessorOptions>;
