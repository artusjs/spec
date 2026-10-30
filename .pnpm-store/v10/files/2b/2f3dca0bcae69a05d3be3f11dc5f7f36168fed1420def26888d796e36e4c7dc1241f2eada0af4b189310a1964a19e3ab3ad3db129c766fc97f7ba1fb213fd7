import { useLocaleSiteData } from "./useLocaleSiteData.js";
import { useVersion } from "./useVersion.js";
function useNav() {
    const { nav } = useLocaleSiteData();
    const version = useVersion();
    if (Array.isArray(nav)) return nav;
    const navKey = version.length > 0 ? version : 'default';
    return [
        ...nav[navKey]
    ];
}
export { useNav };
