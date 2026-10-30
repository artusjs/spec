import { cleanUrl } from "@rspress/shared";
import { routes } from "virtual-routes";
function normalizeRoutePath(routePath) {
    return cleanUrl(decodeURIComponent(routePath)).replace(/\.html$/, '').replace(/\/index$/, '/').toLowerCase();
}
function matchPath(pattern, pathname) {
    const normalizedPattern = normalizeRoutePath(pattern);
    const normalizedPathname = normalizeRoutePath(pathname);
    const normalizedPatternWithSlash = normalizedPattern.endsWith('/') ? normalizedPattern : `${normalizedPattern}/`;
    const normalizedPathnameWithSlash = normalizedPathname.endsWith('/') ? normalizedPathname : `${normalizedPathname}/`;
    if (normalizedPatternWithSlash === normalizedPathnameWithSlash) return {
        path: pattern
    };
    return null;
}
const sortedRoutes = [
    ...routes
].sort((a, b)=>{
    const pathA = a.path || '';
    const pathB = b.path || '';
    return pathB.length - pathA.length;
});
function matchRoutes(_routes, pathname) {
    for (const route of sortedRoutes){
        const routePath = route.path || '';
        const match = matchPath(routePath, pathname);
        if (match) return [
            {
                route
            }
        ];
    }
    return null;
}
const cache = new Map();
function pathnameToRouteService(pathname) {
    const normalizedPathname = normalizeRoutePath(pathname);
    const cacheItem = cache.get(normalizedPathname);
    if (cacheItem) return cacheItem;
    const matched = matchRoutes(routes, normalizedPathname);
    const route = matched?.[0]?.route;
    if (route) cache.set(normalizedPathname, route);
    return route;
}
function isActive(itemLink, currentPathname) {
    const linkMatched = matchPath(itemLink, currentPathname);
    return null !== linkMatched;
}
const preloadLink = (link)=>{
    const route = pathnameToRouteService(link);
    if (route) route.preload();
};
export { isActive, matchPath, pathnameToRouteService, preloadLink };
