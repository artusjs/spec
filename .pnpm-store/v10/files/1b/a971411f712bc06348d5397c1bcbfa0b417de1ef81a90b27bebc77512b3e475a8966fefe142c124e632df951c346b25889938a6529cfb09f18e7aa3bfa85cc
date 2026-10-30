import type { PageIndexInfo, RouteMeta } from '@rspress/shared';
import { RouteService } from './RouteService.js';
export declare class RoutePage {
    #private;
    routeMeta: RouteMeta;
    pageIndexInfo?: PageIndexInfo;
    setPageIndexInfo(info: PageIndexInfo): void;
    static create(absolutePath: string, docsDir: string): RoutePage;
    static createFromExternal(routePath: string, filepath: string, docDir: string): RoutePage;
    private constructor();
    static generateRouteMeta(routePath: string, filepath: string, docDir: string): RouteMeta;
}
export declare function absolutePathToRelativePath(absolutePath: string, docsDir: string): string;
/**
 *
 * @returns runtime cleanUrl like "/api/guide"
 */
export declare function absolutePathToRoutePath(absolutePath: string, docsDir: string, routeService?: RouteService): string;
export declare function addRoutePrefix(workDir: string, docsDir: string, link: string): string;
