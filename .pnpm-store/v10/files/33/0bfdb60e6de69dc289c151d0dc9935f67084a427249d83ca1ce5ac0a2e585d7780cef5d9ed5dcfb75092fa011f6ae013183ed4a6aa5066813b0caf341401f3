import { usePageData } from "@rspress/core/runtime";
import { useEffect, useRef, useState } from "react";
import { PageSearcher } from "../components/Search/logic/search.js";
function useFullTextSearch() {
    const { siteData, page } = usePageData();
    const [initialized, setInitialized] = useState(false);
    const searchRef = useRef(null);
    useEffect(()=>{
        async function init() {
            if (!initialized) {
                const searcher = new PageSearcher({
                    ...siteData.search,
                    mode: 'local',
                    currentLang: page.lang,
                    currentVersion: page.version
                });
                searchRef.current = searcher;
                await searcher.init();
                setInitialized(true);
            }
        }
        init();
    }, []);
    return {
        initialized,
        search: searchRef.current?.match.bind(searchRef.current)
    };
}
export { useFullTextSearch };
