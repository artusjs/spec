import type { Route } from '@rspress/shared';
/**
 * Simple implementation of matchPath to check if a pattern matches a pathname
 * Better performance alternative of `import { matchPath } from 'react-router-dom'`
 * @param pattern - The route pattern to match against
 * @param pathname - The pathname to check
 * @returns Match object if matched, null otherwise
 *
 * @example
 * matchPath('/api/config', '/api/config') // { path: '/api/config' }
 * matchPath('/api/config/', '/api/config') // { path: '/api/config/' }
 * matchPath('/api/config', '/api/other') // null
 */
export declare function matchPath(pattern: string, pathname: string): {
    path: string;
} | null;
/**
 * this is a bridge of two core features Sidebar and RouteService
 * @param pathname useLocation().pathname
 * @returns
 */
export declare function pathnameToRouteService(pathname: string): Route | undefined;
/**
 * link: /api/config
 * currentPathname:
 *  0. /api/config
 *  1. /api/config.html
 *  2. /api/config/
 *  3. /api/config/index
 *  4. /api/config/index.html
 * @param itemLink
 * @param currentPathname
 * @returns
 */
export declare function isActive(itemLink: string, currentPathname: string): boolean;
export declare const preloadLink: (link: string) => void;
