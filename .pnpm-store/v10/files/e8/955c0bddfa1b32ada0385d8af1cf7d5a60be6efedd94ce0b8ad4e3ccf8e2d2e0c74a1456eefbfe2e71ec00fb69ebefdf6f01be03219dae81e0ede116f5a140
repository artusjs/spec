import { addTrailingSlash } from "@rspress/shared";
import { useLang } from "./useLang.js";
import { useSite } from "./useSite.js";
function useLocaleSiteData() {
    const { site } = useSite();
    const lang = useLang();
    const themeConfig = site?.themeConfig ?? {};
    const defaultLang = site.lang ?? '';
    const locales = themeConfig?.locales;
    if (!locales || 0 === locales.length) return {
        nav: themeConfig.nav,
        sidebar: themeConfig.sidebar
    };
    const localeInfo = locales.find((locale)=>locale.lang === lang);
    return {
        ...localeInfo,
        langRoutePrefix: lang === defaultLang ? '/' : addTrailingSlash(lang)
    };
}
export { useLocaleSiteData };
