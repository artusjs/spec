import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Content, useFrontmatter, useLocaleSiteData, usePage, useSite } from "@rspress/core/runtime";
import { DocLayout, HomeLayout as theme_HomeLayout, Nav, NotFoundLayout as theme_NotFoundLayout, useRedirect4FirstVisit, useScrollReset, useSetup } from "@rspress/core/theme";
import { Head, useHead } from "@unhead/react";
import react, { memo, useMemo } from "react";
const concatTitle = (title, suffix)=>{
    if (!suffix) return title;
    title = title.trim();
    suffix = suffix.trim();
    if (!suffix.startsWith('-') && !suffix.startsWith('|')) return `${title} - ${suffix}`;
    return `${title} ${suffix}`;
};
const HeadTags = /*#__PURE__*/ memo((props)=>{
    const { lang, frontmatter, description, title } = props;
    const head = frontmatter.head;
    const frontmatterTags = useMemo(()=>head?.map(([tagName, attrs])=>tagName ? /*#__PURE__*/ react.createElement(tagName, {
                ...attrs
            }) : null), [
        head
    ]);
    const frontmatterMetaProperties = useMemo(()=>{
        const properties = new Set();
        if (head) for (const [tagName, attrs] of head){
            if ('meta' === tagName && attrs?.property) properties.add(attrs.property);
            if ('meta' === tagName && attrs?.name) properties.add(attrs.name);
        }
        return properties;
    }, [
        head
    ]);
    useHead({
        htmlAttrs: {
            lang: lang || 'en'
        },
        title: title || void 0,
        meta: [
            frontmatterMetaProperties.has('og:type') ? void 0 : {
                property: 'og:type',
                content: 'website'
            },
            title && !frontmatterMetaProperties.has('og:title') ? {
                property: 'og:title',
                content: title
            } : void 0,
            ...description ? [
                frontmatterMetaProperties.has("description") ? void 0 : {
                    name: "description",
                    content: description
                },
                frontmatterMetaProperties.has("og:description") ? void 0 : {
                    property: "og:description",
                    content: description
                }
            ] : []
        ]
    });
    return /*#__PURE__*/ jsx(Head, {
        children: frontmatterTags ?? null
    });
});
function Layout(props) {
    const { top, bottom, beforeDocFooter, afterDocFooter, beforeDoc, afterDoc, beforeDocContent, afterDocContent, beforeSidebar, afterSidebar, beforeOutline, afterOutline, beforeNavTitle, afterNavTitle, navTitle, beforeNav, afterNav, beforeHero, afterHero, beforeFeatures, afterFeatures, beforeNavMenu, afterNavMenu, components, HomeLayout = theme_HomeLayout, NotFoundLayout = theme_NotFoundLayout } = props;
    const docProps = {
        beforeDocFooter,
        afterDocFooter,
        beforeDocContent,
        afterDocContent,
        beforeDoc,
        afterDoc,
        beforeSidebar,
        afterSidebar,
        beforeOutline,
        afterOutline,
        components
    };
    const homeProps = {
        beforeHero,
        afterHero,
        beforeFeatures,
        afterFeatures
    };
    const { page } = usePage();
    const { site } = useSite();
    const { frontmatter } = useFrontmatter();
    const { pageType, lang: currentLang, title: articleTitle } = page;
    const localesData = useLocaleSiteData();
    let title = frontmatter.title ?? articleTitle;
    const mainTitle = site.title || localesData.title || '';
    title = title && ('doc' === pageType || 'doc-wide' === pageType) ? concatTitle(title, frontmatter.titleSuffix || mainTitle) : 'home' === pageType ? concatTitle(mainTitle, frontmatter.titleSuffix) : '404' === pageType ? concatTitle('404', mainTitle) : mainTitle;
    const description = page.description || site.description || localesData.description;
    const getContentLayout = ()=>{
        switch(pageType){
            case 'home':
                return /*#__PURE__*/ jsx(HomeLayout, {
                    ...homeProps
                });
            case 'doc':
            case 'doc-wide':
                return /*#__PURE__*/ jsx(DocLayout, {
                    ...docProps,
                    navTitle: navTitle
                });
            case '404':
                return /*#__PURE__*/ jsx(NotFoundLayout, {});
            case 'custom':
            case 'blank':
                return /*#__PURE__*/ jsx(Content, {});
            default:
                return /*#__PURE__*/ jsx(DocLayout, {
                    ...docProps
                });
        }
    };
    if (process.env.__SSR_MD__) return /*#__PURE__*/ jsx(Fragment, {
        children: getContentLayout()
    });
    useSetup();
    useScrollReset();
    useRedirect4FirstVisit();
    const { frontmatter: { navbar: showNavbar = true } } = useFrontmatter();
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx(HeadTags, {
                lang: currentLang,
                title: title,
                description: description,
                frontmatter: frontmatter
            }),
            top,
            'blank' !== pageType && showNavbar && /*#__PURE__*/ jsxs(Fragment, {
                children: [
                    beforeNav,
                    /*#__PURE__*/ jsx(Nav, {
                        beforeNavTitle: beforeNavTitle,
                        afterNavTitle: afterNavTitle,
                        navTitle: navTitle,
                        beforeNavMenu: beforeNavMenu,
                        afterNavMenu: afterNavMenu
                    }),
                    afterNav
                ]
            }),
            getContentLayout(),
            bottom
        ]
    });
}
export { Layout };
