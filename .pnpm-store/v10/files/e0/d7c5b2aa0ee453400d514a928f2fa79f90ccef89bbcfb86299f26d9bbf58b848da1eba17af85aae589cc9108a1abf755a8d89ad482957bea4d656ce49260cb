import { type PageIndexInfo, type ReplaceRule, type RouteMeta } from '@rspress/shared';
import type { RouteService } from './RouteService.js';
interface ExtractPageDataOptions {
    root: string;
    searchCodeBlocks: boolean;
    replaceRules: ReplaceRule[];
    alias: Record<string, string | string[]>;
    extractDescription?: boolean;
    /**
     * Whether search is enabled. When false, skip search index content generation.
     */
    searchEnabled?: boolean;
}
declare function getPageIndexInfoByRoute(route: RouteMeta, options: ExtractPageDataOptions): Promise<PageIndexInfo>;
declare function extractPageData(routeService: RouteService, options: ExtractPageDataOptions): Promise<PageIndexInfo[]>;
export type { ExtractPageDataOptions };
export { extractPageData, getPageIndexInfoByRoute };
