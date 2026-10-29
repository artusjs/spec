import { jsx, jsxs } from "react/jsx-runtime";
import { MDXProvider } from "@mdx-js/react";
import { Content, usePage, useSite } from "@rspress/core/runtime";
import { Callout, FallbackHeading, getCustomMDXComponent, useScrollAfterNav } from "@rspress/core/theme";
import "./doc.css";
function FallbackTitle() {
    const { site } = useSite();
    const { page } = usePage();
    const { headingTitle, title } = page;
    return false !== site.themeConfig.fallbackHeadingTitle && !headingTitle && /*#__PURE__*/ jsx(FallbackHeading, {
        level: 1,
        title: title
    });
}
function DocContent({ components, isOverviewPage = false, afterDocContent, beforeDocContent }) {
    useScrollAfterNav();
    const mdxComponents = {
        ...getCustomMDXComponent(),
        ...components,
        $$$callout$$$: Callout
    };
    return /*#__PURE__*/ jsxs(MDXProvider, {
        components: mdxComponents,
        children: [
            beforeDocContent,
            !isOverviewPage && /*#__PURE__*/ jsx(FallbackTitle, {}),
            /*#__PURE__*/ jsx(Content, {}),
            afterDocContent
        ]
    });
}
export { DocContent };
