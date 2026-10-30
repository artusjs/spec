import { removeBase, usePageData, withBase } from "@rspress/core/runtime";
import { useEffect } from "react";
function useRedirect4FirstVisit() {
    const { siteData, page } = usePageData();
    const defaultLang = siteData.lang || '';
    const localeLanguages = Object.values(siteData.themeConfig.locales || {});
    const langs = localeLanguages.map((item)=>item.lang) || [];
    const currentLang = page.lang;
    useEffect(()=>{
        const localeRedirect = siteData.themeConfig.localeRedirect ?? 'auto';
        if ('never' === localeRedirect) return;
        if (!defaultLang || '1' === process.env.TEST) return;
        const botRegex = /bot|spider|crawl|lighthouse/i;
        if (botRegex.test(window.navigator.userAgent)) return;
        const { pathname, search } = window.location;
        const cleanPathname = removeBase(pathname);
        const FIRST_VISIT_KEY = 'rspress-visited';
        const visited = localStorage.getItem(FIRST_VISIT_KEY);
        if (visited) return;
        localStorage.setItem(FIRST_VISIT_KEY, '1');
        const targetLang = window.navigator.language.split('-')[0];
        if (!langs.includes(targetLang)) return;
        if (targetLang === currentLang) return;
        let newPath;
        if (targetLang === defaultLang) newPath = pathname.replace(`/${currentLang}`, '');
        else if (currentLang === defaultLang) newPath = withBase(`/${targetLang}${cleanPathname}`);
        else if ('auto' === localeRedirect) newPath = pathname.replace(`/${currentLang}`, `/${targetLang}`);
        if (newPath) window.location.replace(newPath + search);
    }, []);
}
export { useRedirect4FirstVisit };
