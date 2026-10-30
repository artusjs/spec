import { isEqualPath, useLocation, useSidebar } from "@rspress/core/runtime";
function usePrevNextPage() {
    const { pathname } = useLocation();
    const items = useSidebar();
    const flattenTitles = [];
    const walk = (sidebarItem)=>{
        if ('items' in sidebarItem) {
            if (sidebarItem.link) flattenTitles.push({
                text: sidebarItem.text,
                link: sidebarItem.link
            });
            sidebarItem.items.forEach((item)=>{
                'dividerType' in item || 'sectionHeaderText' in item || walk(item);
            });
        } else if ('link' in sidebarItem && sidebarItem.link) flattenTitles.push(sidebarItem);
    };
    items.forEach((item)=>walk(item));
    const pageIndex = flattenTitles.findIndex((item)=>isEqualPath(item.link, pathname));
    const prevPage = flattenTitles[pageIndex - 1] || null;
    const nextPage = flattenTitles[pageIndex + 1] || null;
    return {
        prevPage,
        nextPage
    };
}
export { usePrevNextPage };
