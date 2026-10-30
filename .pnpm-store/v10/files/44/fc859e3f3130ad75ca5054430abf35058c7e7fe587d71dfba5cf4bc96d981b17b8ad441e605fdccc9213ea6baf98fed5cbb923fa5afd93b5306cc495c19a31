import type { TransformHandler } from '@rsbuild/core';
import type { UserConfig } from '@rspress/shared';
import type { PluginDriver } from '../PluginDriver.js';
import type { RouteService } from '../route/RouteService.js';
export interface FactoryContext {
    userDocRoot: string;
    config: UserConfig;
    alias: Record<string, string | string[]>;
    routeService: RouteService;
    pluginDriver: PluginDriver;
}
export type VirtualModulePlugin = (context: Omit<FactoryContext, 'alias'>) => Record<string, TransformHandler>;
export declare enum RuntimeModuleID {
    GlobalStyles = "virtual-global-styles",
    GlobalComponents = "virtual-global-components",
    Routes = "virtual-routes",
    SiteData = "virtual-site-data",
    PageData = "virtual-page-data",
    socialLinks = "virtual-social-links",
    I18nText = "virtual-i18n-text",
    SearchHooks = "virtual-search-hooks"
}
