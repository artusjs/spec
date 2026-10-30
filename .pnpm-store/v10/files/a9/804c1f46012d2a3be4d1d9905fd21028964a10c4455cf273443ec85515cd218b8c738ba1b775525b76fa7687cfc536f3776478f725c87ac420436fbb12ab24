import { matchSidebar } from "@rspress/shared";
import { useLayoutEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useActiveMatcher } from "./useActiveMatcher.js";
import { useLocaleSiteData } from "./useLocaleSiteData.js";
const getSidebarDataGroup = (sidebar, currentPathname)=>{
    const navRoutes = Object.keys(sidebar).sort((a, b)=>b.length - a.length);
    for (const name of navRoutes)if (matchSidebar(name, currentPathname)) {
        const sidebarGroup = sidebar[name];
        return sidebarGroup;
    }
    return [];
};
function useSidebar() {
    const { sidebar } = useLocaleSiteData();
    const { pathname: rawPathname } = useLocation();
    const pathname = decodeURIComponent(rawPathname);
    const sidebarData = useMemo(()=>getSidebarDataGroup(sidebar, pathname), [
        sidebar,
        pathname
    ]);
    return sidebarData;
}
function createInitialSidebar(rawSidebarData, activeMatcher) {
    const matchCache = new WeakMap();
    const match = (item)=>{
        if (matchCache.has(item)) return matchCache.get(item);
        if ('link' in item && item.link && activeMatcher(item.link)) {
            matchCache.set(item, true);
            return true;
        }
        if ('items' in item) {
            const result = item.items.some((child)=>match(child));
            if (result) {
                matchCache.set(item, true);
                return true;
            }
        }
        matchCache.set(item, false);
        return false;
    };
    const traverse = (item)=>{
        if ('items' in item) {
            item.items.forEach(traverse);
            if (match(item)) item.collapsed = false;
        }
    };
    const newSidebarData = rawSidebarData.filter(Boolean).flat();
    newSidebarData.forEach(traverse);
    return newSidebarData;
}
function useSidebarDynamic() {
    const rawSidebarData = useSidebar();
    const activeMatcher = useActiveMatcher();
    const [sidebar, setSidebar] = useState(()=>createInitialSidebar(structuredClone(rawSidebarData), activeMatcher));
    useLayoutEffect(()=>{
        setSidebar(createInitialSidebar(rawSidebarData, activeMatcher));
    }, [
        activeMatcher,
        rawSidebarData
    ]);
    return [
        sidebar,
        setSidebar
    ];
}
export { getSidebarDataGroup, useSidebar, useSidebarDynamic };
