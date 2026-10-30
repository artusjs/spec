import { jsx, jsxs } from "react/jsx-runtime";
import { useI18n, usePageData } from "@rspress/core/runtime";
import { Link } from "@rspress/core/theme";
import "./index.css";
function NotFoundLayout() {
    const { siteData, page } = usePageData();
    const defaultLang = siteData.lang;
    const defaultVersion = siteData.multiVersion.default;
    const t = useI18n();
    if (defaultLang && "u" > typeof window) {
        const regexp = new RegExp(`/${defaultLang}(\\/|$)`);
        if (regexp.test(location.pathname)) {
            const redirectUrl = location.pathname.replace(regexp, '/');
            window.location.replace(redirectUrl);
            return null;
        }
    }
    let root = '/';
    if (defaultVersion && page.version !== defaultVersion) root += `${page.version}/`;
    if (defaultLang && page.lang !== defaultLang) root += `${page.lang}/`;
    return /*#__PURE__*/ jsxs("div", {
        className: "rp-not-found",
        children: [
            /*#__PURE__*/ jsx("p", {
                className: "rp-not-found__error-code",
                children: "404"
            }),
            /*#__PURE__*/ jsx("h1", {
                className: "rp-not-found__title",
                children: t('notFoundText')
            }),
            /*#__PURE__*/ jsx("div", {
                className: "rp-not-found__divider"
            }),
            /*#__PURE__*/ jsx("div", {
                className: "rp-not-found__action",
                children: /*#__PURE__*/ jsx(Link, {
                    className: "rp-not-found__home-link",
                    href: root,
                    "aria-label": "go to home",
                    children: t('takeMeHomeText')
                })
            })
        ]
    });
}
export { NotFoundLayout };
