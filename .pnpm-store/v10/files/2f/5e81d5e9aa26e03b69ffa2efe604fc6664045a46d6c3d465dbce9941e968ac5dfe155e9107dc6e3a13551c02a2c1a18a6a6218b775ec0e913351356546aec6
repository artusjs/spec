import type { Rspack } from '@rsbuild/core';
import type { UserConfig } from '@rspress/shared';
import type { PluginDriver } from '../PluginDriver.js';
import type { RouteService } from '../route/RouteService.js';
interface CompileOptions {
    source: string;
    filepath: string;
    docDirectory: string;
    config: UserConfig | null;
    routeService: RouteService | null;
    pluginDriver: PluginDriver | null;
    addDependency?: Rspack.LoaderContext['addDependency'];
    /**
     * @default false
     */
    isSsgMd?: boolean;
}
declare function compile(options: CompileOptions): Promise<string>;
declare function compileWithCrossCompilerCache(options: CompileOptions): Promise<string>;
export { compile, compileWithCrossCompilerCache };
