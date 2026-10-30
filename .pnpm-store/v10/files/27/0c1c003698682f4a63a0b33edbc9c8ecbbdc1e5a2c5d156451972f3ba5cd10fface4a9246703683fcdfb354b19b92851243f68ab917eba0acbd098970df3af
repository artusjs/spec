import { jsx, jsxs } from "react/jsx-runtime";
import { Tag, renderInlineMarkdown } from "@rspress/core/theme";
import "./SidebarSectionHeader.css";
function SidebarSectionHeader({ sectionHeaderText, tag }) {
    return /*#__PURE__*/ jsxs("div", {
        className: "rp-sidebar-section-header",
        children: [
            /*#__PURE__*/ jsx("div", {
                className: "rp-sidebar-section-header__left",
                children: /*#__PURE__*/ jsx("span", {
                    ...renderInlineMarkdown(sectionHeaderText)
                })
            }),
            /*#__PURE__*/ jsx("div", {
                className: "rp-sidebar-section-header__right",
                children: /*#__PURE__*/ jsx(Tag, {
                    tag: tag
                })
            })
        ]
    });
}
export { SidebarSectionHeader };
