import { routePathToMdPath, usePageData } from "@rspress/core/runtime";
import { useMemo } from "react";
function useMdUrl() {
    const { page } = usePageData();
    const mdPath = useMemo(()=>{
        const pathname = routePathToMdPath(page.routePath);
        return {
            pathname
        };
    }, [
        page.routePath
    ]);
    return mdPath;
}
export { useMdUrl };
