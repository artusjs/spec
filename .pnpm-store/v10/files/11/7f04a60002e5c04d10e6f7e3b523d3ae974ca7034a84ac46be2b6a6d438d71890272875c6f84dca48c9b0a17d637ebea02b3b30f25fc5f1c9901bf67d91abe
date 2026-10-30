import { RspressPlugin } from '@rspress/core';

declare type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

declare interface CustomMaps {
    [routePath: string]: Sitemap;
}

export declare function pluginSitemap(options: PluginSitemapOptions): RspressPlugin;

export declare interface PluginSitemapOptions {
    siteUrl: string;
    customMaps?: CustomMaps;
    defaultPriority?: Priority;
    defaultChangeFreq?: ChangeFreq;
}

declare type Priority = '0.0' | '0.1' | '0.2' | '0.3' | '0.4' | '0.5' | '0.6' | '0.7' | '0.8' | '0.9' | '1.0';

declare interface Sitemap {
    loc: string;
    lastmod?: string;
    changefreq?: ChangeFreq;
    priority?: Priority;
}

export { }
