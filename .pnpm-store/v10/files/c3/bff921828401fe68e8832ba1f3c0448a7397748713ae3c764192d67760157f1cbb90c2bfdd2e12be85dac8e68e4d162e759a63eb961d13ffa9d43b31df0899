import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { isEqualPath, useI18n, usePageData, useSidebar } from "@rspress/core/runtime";
import { FallbackHeading, OverviewGroup } from "@rspress/core/theme";
import { useEffect, useMemo, useRef, useState } from "react";
import { isSidebarDivider, isSidebarSectionHeader, isSidebarSingleFile } from "../Sidebar/utils.js";
import "./index.css";
import { findItemByRoutePath } from "./utils.js";
const normalizeText = (s)=>s.toLowerCase().replace(/-/g, ' ');
const matchesQuery = (text, query)=>normalizeText(text).includes(normalizeText(query));
const OverviewSearchInput = ({ query, setQuery, searchRef })=>{
    const t = useI18n();
    return /*#__PURE__*/ jsxs("div", {
        className: "rp-overview-search",
        children: [
            /*#__PURE__*/ jsx("label", {
                htmlFor: "api-filter",
                className: "rp-overview-search__label",
                children: t('overview.filterNameText')
            }),
            /*#__PURE__*/ jsx("input", {
                ref: searchRef,
                type: "search",
                placeholder: t('overview.filterPlaceholderText'),
                id: "api-filter",
                value: query,
                onChange: (e)=>setQuery(e.target.value),
                className: "rp-overview-search__input"
            })
        ]
    });
};
function Overview(props) {
    const { siteData, page: { routePath, title, frontmatter } } = usePageData();
    const { content, groups: customGroups } = props;
    const t = useI18n();
    const [query, setQuery] = useState('');
    const searchRef = useRef(null);
    useEffect(()=>{
        if (true === frontmatter.overview) searchRef.current?.focus();
    }, []);
    const subFilter = (link)=>link.startsWith(routePath.replace(/overview$/, '')) && !isEqualPath(link, routePath);
    const getChildLink = (traverseItem)=>{
        if ('link' in traverseItem && traverseItem.link) return traverseItem.link;
        if ('items' in traverseItem) return getChildLink(traverseItem.items[0]);
        return '';
    };
    const { pages } = siteData;
    const overviewModules = pages.filter((page)=>subFilter(page.routePath));
    let overviewSidebarGroups = useSidebar();
    if (overviewSidebarGroups[0]?.link !== routePath) overviewSidebarGroups = findItemByRoutePath(overviewSidebarGroups, routePath);
    function normalizeSidebarItem(item, sidebarGroup, frontmatter) {
        if (isSidebarDivider(item)) return false;
        if (isSidebarSectionHeader(item)) return false;
        if (item.link === `${routePath}index` && frontmatter?.overview === true) return false;
        const overviewHeaders = props?.overviewHeaders ?? item.overviewHeaders ?? frontmatter?.overviewHeaders ?? sidebarGroup?.overviewHeaders ?? [
            2
        ];
        const pageModule = overviewModules.find((m)=>isEqualPath(m.routePath, item.link || ''));
        const link = getChildLink(item);
        return {
            text: item.text,
            link,
            headers: pageModule?.toc?.filter((header)=>overviewHeaders.some((depth)=>header.depth === depth)) || []
        };
    }
    const groups = customGroups ?? useMemo(()=>{
        const group = overviewSidebarGroups.filter((normalizedSidebarGroup)=>{
            const sidebarGroup = normalizedSidebarGroup;
            if (Array.isArray(sidebarGroup?.items)) return sidebarGroup.items.filter((item)=>subFilter(getChildLink(item))).length > 0;
            if (isSidebarSingleFile(sidebarGroup) && subFilter(getChildLink(sidebarGroup))) return true;
            return false;
        }).map((normalizedSidebarGroup)=>{
            const sidebarGroup = normalizedSidebarGroup;
            let items = [];
            if (sidebarGroup?.items) items = sidebarGroup?.items?.map((item)=>normalizeSidebarItem(item, sidebarGroup, frontmatter)).filter(Boolean);
            else if (isSidebarSingleFile(sidebarGroup)) items = [
                normalizeSidebarItem({
                    link: sidebarGroup.link,
                    text: sidebarGroup.text || '',
                    tag: sidebarGroup.tag,
                    _fileKey: sidebarGroup._fileKey,
                    overviewHeaders: sidebarGroup.overviewHeaders
                }, void 0, frontmatter)
            ];
            return {
                name: sidebarGroup.text || '',
                items
            };
        });
        return group;
    }, [
        overviewSidebarGroups,
        routePath,
        frontmatter
    ]);
    const filtered = useMemo(()=>{
        if (!query) return groups;
        return groups.map((group)=>{
            if (matchesQuery(group.name, query)) return group;
            const matchedItems = group.items.map((item)=>{
                if (matchesQuery(item.text || '', query)) return item;
                const matchedHeaders = item.headers?.filter(({ text })=>matchesQuery(text, query));
                return matchedHeaders?.length ? {
                    ...item,
                    headers: matchedHeaders
                } : null;
            }).filter(Boolean);
            return matchedItems.length ? {
                ...group,
                items: matchedItems
            } : null;
        }).filter(Boolean);
    }, [
        groups,
        query
    ]);
    const overviewTitle = title || 'Overview';
    if (process.env.__SSR_MD__) return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx(FallbackHeading, {
                level: 1,
                title: overviewTitle
            }),
            groups.map((group)=>/*#__PURE__*/ jsx(OverviewGroup, {
                    group: group
                }, group?.name))
        ]
    });
    return /*#__PURE__*/ jsxs("div", {
        className: "rspress-doc rp-doc rspress-overview rp-overview",
        children: [
            /*#__PURE__*/ jsx(FallbackHeading, {
                level: 1,
                title: overviewTitle
            }),
            /*#__PURE__*/ jsx(OverviewSearchInput, {
                query: query,
                setQuery: setQuery,
                searchRef: searchRef
            }),
            content,
            filtered.length > 0 ? filtered.map((group)=>/*#__PURE__*/ jsx(OverviewGroup, {
                    group: group
                }, group?.name)) : /*#__PURE__*/ jsx("div", {
                className: "rp-overview__empty",
                children: `${t('overview.filterNoResultText')}: ${query}`
            })
        ]
    });
}
export { Overview };
