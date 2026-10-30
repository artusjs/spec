import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useFrontmatter } from "@rspress/core/runtime";
import { DocContent, DocFooter, Outline, Overview, Sidebar, useWatchToc } from "@rspress/core/theme";
import clsx from "clsx";
import { useSidebarMenu } from "../../components/SidebarMenu/useSidebarMenu.js";
import "./index.css";
function DocLayout(props) {
    const { beforeDocFooter, afterDocFooter, beforeDoc, afterDoc, beforeDocContent, afterDocContent, beforeOutline, afterOutline, beforeSidebar, afterSidebar, components } = props;
    const { frontmatter } = useFrontmatter();
    const isOverviewPage = frontmatter?.overview ?? false;
    const { sidebar: showSidebar = true, outline: showOutline = true, footer: showDocFooter = true, pageType } = frontmatter;
    if (process.env.__SSR_MD__) return /*#__PURE__*/ jsx(Fragment, {
        children: isOverviewPage ? /*#__PURE__*/ jsx(Overview, {
            content: /*#__PURE__*/ jsx(DocContent, {
                components: components,
                isOverviewPage: true
            })
        }) : /*#__PURE__*/ jsx(DocContent, {
            components: components
        })
    });
    const isDocWide = 'doc-wide' === pageType;
    const { isOutlineOpen, isSidebarOpen, sidebarMenu, asideLayoutRef, sidebarLayoutRef } = useSidebarMenu();
    const { rspressDocRef } = useWatchToc();
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx("div", {
                className: "rp-doc-layout__menu",
                children: sidebarMenu
            }),
            beforeDoc,
            /*#__PURE__*/ jsxs("div", {
                className: "rp-doc-layout__container",
                children: [
                    showSidebar ? /*#__PURE__*/ jsxs("aside", {
                        className: clsx('rp-doc-layout__sidebar', isSidebarOpen && 'rp-doc-layout__sidebar--open', 'rp-scrollbar'),
                        ref: sidebarLayoutRef,
                        children: [
                            beforeSidebar,
                            /*#__PURE__*/ jsx(Sidebar, {}),
                            afterSidebar
                        ]
                    }) : /*#__PURE__*/ jsx("aside", {
                        className: "rp-doc-layout__sidebar-placeholder",
                        style: isDocWide ? {
                            width: '0'
                        } : {}
                    }),
                    isOverviewPage ? /*#__PURE__*/ jsx(Fragment, {
                        children: /*#__PURE__*/ jsxs("main", {
                            className: "rp-doc-layout__overview",
                            children: [
                                beforeDocContent,
                                /*#__PURE__*/ jsx(Overview, {
                                    content: /*#__PURE__*/ jsx(DocContent, {
                                        components: components,
                                        isOverviewPage: true
                                    })
                                }),
                                afterDocContent
                            ]
                        })
                    }) : /*#__PURE__*/ jsx("div", {
                        className: clsx('rp-doc-layout__doc', isDocWide && 'rp-doc-layout__doc--wide'),
                        children: /*#__PURE__*/ jsxs("main", {
                            className: "rp-doc-layout__doc-container",
                            children: [
                                beforeDocContent,
                                /*#__PURE__*/ jsx("div", {
                                    className: "rp-doc rspress-doc",
                                    ref: rspressDocRef,
                                    children: /*#__PURE__*/ jsx(DocContent, {
                                        components: components
                                    })
                                }),
                                afterDocContent,
                                beforeDocFooter,
                                showDocFooter && /*#__PURE__*/ jsx(DocFooter, {}),
                                afterDocFooter
                            ]
                        })
                    }),
                    isOverviewPage ? null : showOutline ? /*#__PURE__*/ jsxs("aside", {
                        className: clsx('rp-doc-layout__outline', isOutlineOpen && 'rp-doc-layout__outline--open', 'rp-scrollbar'),
                        ref: asideLayoutRef,
                        children: [
                            beforeOutline,
                            /*#__PURE__*/ jsx(Outline, {}),
                            afterOutline
                        ]
                    }) : /*#__PURE__*/ jsx("aside", {
                        className: "rp-doc-layout__outline-placeholder",
                        style: isDocWide ? {
                            width: '0'
                        } : {}
                    })
                ]
            }),
            afterDoc
        ]
    });
}
export { DocLayout };
