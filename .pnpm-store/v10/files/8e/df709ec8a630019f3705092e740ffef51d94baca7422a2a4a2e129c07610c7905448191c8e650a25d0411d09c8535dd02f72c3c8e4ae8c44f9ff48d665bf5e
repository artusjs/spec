import type { FrontMatterMeta, UserConfig } from '@rspress/shared';
import type { PluginDriver } from '../PluginDriver.js';
import type { RouteService } from '../route/RouteService.js';
import type { TocItem } from './remarkPlugins/toc.js';
export interface MdxLoaderOptions {
    config: UserConfig;
    docDirectory: string;
    checkDeadLinks: boolean;
    routeService: RouteService;
    pluginDriver: PluginDriver;
    /**
     * @default false
     */
    isSsgMd?: boolean;
}
export interface PageMeta {
    toc: TocItem[];
    title: string;
    headingTitle: string;
    frontmatter?: FrontMatterMeta;
}
