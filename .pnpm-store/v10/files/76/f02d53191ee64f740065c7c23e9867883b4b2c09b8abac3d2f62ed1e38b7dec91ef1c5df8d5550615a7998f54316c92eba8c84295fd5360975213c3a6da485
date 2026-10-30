import { addLeadingSlash, normalizeHrefInRuntime, removeBase, useLocation, usePage, useSite, useVersion } from "@rspress/core/runtime";
function replaceLang(rawUrl, lang, version, cleanUrls, isPageNotFound) {
    let url = removeBase(rawUrl);
    if (!url || isPageNotFound) url = '/';
    url = normalizeHrefInRuntime(url);
    let versionPart = '';
    let langPart = '';
    let purePathPart = '';
    const parts = url.split('/').filter(Boolean);
    if (version.current && version.current !== version.default) versionPart = parts.shift() || '';
    if (lang.target !== lang.default) {
        langPart = lang.target;
        if (lang.current !== lang.default) parts.shift();
    } else parts.shift();
    purePathPart = parts.join('/') || '';
    if ((versionPart || langPart) && !purePathPart) purePathPart = cleanUrls ? 'index' : 'index.html';
    return addLeadingSlash([
        versionPart,
        langPart,
        purePathPart
    ].filter(Boolean).join('/'));
}
function useLangsMenu() {
    const { page } = usePage();
    const { site } = useSite();
    const currentVersion = useVersion();
    const { pathname, search } = useLocation();
    const defaultLang = site.lang || '';
    const defaultVersion = site.multiVersion.default || '';
    const localeLanguages = Object.values(site.locales || site.themeConfig.locales || {});
    const cleanUrls = site.route?.cleanUrls || false;
    const hasMultiLanguage = localeLanguages.length > 1;
    const { lang: currentLang, pageType } = page;
    const translationMenuData = hasMultiLanguage ? {
        items: localeLanguages.map((item)=>({
                text: item?.label,
                link: replaceLang(pathname + search, {
                    current: currentLang,
                    target: item.lang,
                    default: defaultLang
                }, {
                    current: currentVersion,
                    default: defaultVersion
                }, cleanUrls, '404' === pageType),
                lang: item.lang,
                rel: 'alternate'
            })),
        activeValue: localeLanguages.find((item)=>currentLang === item.lang)?.label
    } : {
        items: []
    };
    return translationMenuData;
}
function replaceVersion(rawUrl, version, cleanUrls, isPageNotFound) {
    let url = removeBase(rawUrl);
    if (!url || isPageNotFound) url = normalizeHrefInRuntime('/');
    let versionPart = '';
    const parts = url.split('/').filter(Boolean);
    if (version.target !== version.default) {
        versionPart = version.target;
        if (version.current !== version.default) parts.shift();
    } else parts.shift();
    let restPart = parts.join('/') || '';
    if (versionPart && !restPart) restPart = cleanUrls ? 'index' : 'index.html';
    return addLeadingSlash([
        versionPart,
        restPart
    ].filter(Boolean).join('/'));
}
function useVersionsMenu() {
    const { page } = usePage();
    const { site } = useSite();
    const currentVersion = useVersion();
    const { pathname } = useLocation();
    const cleanUrls = site.route?.cleanUrls || false;
    const defaultVersion = site.multiVersion.default || '';
    const versions = site.multiVersion.versions || [];
    const versionsMenuData = {
        items: versions.map((version)=>({
                text: version,
                link: replaceVersion(pathname, {
                    current: currentVersion,
                    target: version,
                    default: defaultVersion
                }, cleanUrls, '404' === page.pageType)
            })),
        text: currentVersion,
        activeValue: currentVersion
    };
    return versionsMenuData;
}
export { useLangsMenu, useVersionsMenu };
