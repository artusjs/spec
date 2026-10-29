import { normalizeHref } from "@rspress/core/runtime";
import { isSidebarDivider, isSidebarSectionHeader } from "../Sidebar/utils.js";
function removeIndex(link) {
    return normalizeHref(link, true);
}
function findItemByRoutePath(items, routePath) {
    function isRoutePathMatch(item) {
        if (isSidebarDivider(item)) return false;
        if (isSidebarSectionHeader(item)) return false;
        const removeIndexUrl = removeIndex(item.link || '/');
        const removeBackSlashedRoutePath = routePath.replace(/\/$/, '');
        return removeIndexUrl === routePath || removeIndexUrl === removeBackSlashedRoutePath;
    }
    const matchRoutePathItemIndex = items.findIndex((item)=>isRoutePathMatch(item));
    if (-1 === matchRoutePathItemIndex) return items.map((item)=>{
        if (!('items' in item)) return [];
        return findItemByRoutePath(item.items, routePath);
    }).flat();
    const matchRoutePathItem = items[matchRoutePathItemIndex];
    const isArray = (i)=>Array.isArray(i) && i.length >= 1;
    if ('items' in matchRoutePathItem && isArray(matchRoutePathItem.items)) {
        if (matchRoutePathItem.items.every((item)=>!('items' in item))) return [
            matchRoutePathItem
        ];
        return matchRoutePathItem.items.filter((item)=>!isSidebarDivider(item));
    }
    const result = [
        ...items
    ];
    if (!('items' in matchRoutePathItem)) result.splice(matchRoutePathItemIndex, 1);
    const res = result.filter((item)=>!isSidebarDivider(item));
    return res;
}
export { findItemByRoutePath };
