import { cleanUrlByConfig, isActive, isExternalUrl, pathnameToRouteService, removeBase, useLocation, useNavigate, withBase } from "@rspress/core/runtime";
import nprogress from "nprogress";
import { startTransition as external_react_startTransition, useCallback } from "react";
nprogress.configure({
    showSpinner: false
});
function isAbsoluteUrl(url) {
    return url.startsWith('/');
}
function getLinkType(href) {
    if (isExternalUrl(href)) return 'external';
    if (href.startsWith('#')) return 'hashOnly';
    if (!isAbsoluteUrl(href)) return 'relative';
    return 'internal';
}
function getHref(href) {
    let withBaseHref;
    const linkType = getLinkType(href);
    if ('external' === linkType || 'hashOnly' === linkType) return {
        linkType: linkType,
        withBaseHref: href,
        removeBaseHref: href
    };
    withBaseHref = 'relative' !== linkType || process.env.__SSR__ ? withBase(cleanUrlByConfig(href)) : new URL(href, window.location.href).pathname;
    const removeBaseHref = removeBase(withBaseHref);
    return {
        withBaseHref,
        removeBaseHref,
        linkType
    };
}
function useLinkNavigate({ startTransition } = {
    startTransition: external_react_startTransition
}) {
    const { pathname: currPagePathname } = useLocation();
    const navigate = useNavigate();
    return useCallback(async (href)=>{
        const { linkType, removeBaseHref, withBaseHref } = getHref(href);
        if ('external' === linkType || 'hashOnly' === linkType) return void window.location.assign(href);
        const preloadChunkThenNavigate = async ()=>{
            const inCurrPage = isActive(removeBaseHref, currPagePathname);
            if (!process.env.__SSR__ && !inCurrPage) {
                const matchedRoute = pathnameToRouteService(removeBaseHref);
                if (!matchedRoute) return void window.location.assign(withBaseHref);
                {
                    const timer = setTimeout(()=>{
                        nprogress.start();
                    }, 200);
                    await matchedRoute.preload();
                    clearTimeout(timer);
                    nprogress.done();
                }
            }
            navigate(removeBaseHref, {
                replace: false
            });
        };
        if (startTransition) startTransition(preloadChunkThenNavigate);
        else preloadChunkThenNavigate();
    }, [
        currPagePathname,
        navigate
    ]);
}
export { getHref, useLinkNavigate };
