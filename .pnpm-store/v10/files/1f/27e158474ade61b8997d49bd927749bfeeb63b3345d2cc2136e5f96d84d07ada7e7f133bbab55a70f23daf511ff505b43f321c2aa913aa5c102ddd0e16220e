import { addLeadingSlash, addTrailingSlash, isDataUrl, isExternalUrl, isProduction, normalizeHref, removeBase, removeHash, removeTrailingSlash, withBase } from "@rspress/shared";
import virtual_site_data from "virtual-site-data";
function utils_withBase(url = '/') {
    return withBase(url, virtual_site_data.base);
}
function utils_removeBase(url) {
    return removeBase(url, virtual_site_data.base);
}
function isEqualPath(a, b) {
    return utils_removeBase(normalizeHref(removeHash(a), true)) === utils_removeBase(normalizeHref(removeHash(b), true));
}
function normalizeHrefInRuntime(link) {
    const cleanUrls = Boolean(virtual_site_data?.route?.cleanUrls);
    return normalizeHref(link, cleanUrls);
}
function cleanUrlByConfig(link) {
    if (virtual_site_data?.route?.cleanUrls) return normalizeHref(link, true);
    return link;
}
function normalizeImagePath(imagePath) {
    if (isAbsoluteUrl(imagePath)) return imagePath;
    if (!imagePath.startsWith('/')) return imagePath;
    return utils_withBase(imagePath);
}
function routePathToMdPath(routePath) {
    let url = routePath;
    url = normalizeHref(url, false);
    url = url.replace(/\.html(?=#|\?|$)/, '.md');
    return utils_withBase(url);
}
function isAbsoluteUrl(path) {
    return isExternalUrl(path) || isDataUrl(path) || path.startsWith('//');
}
export { addLeadingSlash, addTrailingSlash, cleanUrlByConfig, isEqualPath, isProduction, normalizeHrefInRuntime, normalizeImagePath, removeTrailingSlash, routePathToMdPath, utils_removeBase as removeBase, utils_withBase as withBase };
