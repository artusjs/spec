import { usePage } from "./usePage.js";
import { usePages } from "./usePages.js";
import { useSite } from "./useSite.js";
function usePageData() {
    const { page } = usePage();
    const { pages } = usePages();
    const { site } = useSite();
    return {
        page,
        siteData: {
            ...site,
            pages
        }
    };
}
export { usePageData };
