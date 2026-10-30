import { jsx, jsxs } from "react/jsx-runtime";
import { IconEdit, Link, SvgWrapper } from "@rspress/core/theme";
import "./index.css";
import { useEditLink } from "./useEditLink.js";
function EditLink({ isOutline }) {
    const editLinkObj = useEditLink();
    if (!editLinkObj) return null;
    const { text, link } = editLinkObj;
    if (isOutline) return /*#__PURE__*/ jsxs(Link, {
        href: link,
        className: "rp-outline__action-row rp-edit-link",
        children: [
            /*#__PURE__*/ jsx(SvgWrapper, {
                icon: IconEdit,
                width: "16",
                height: "16"
            }),
            /*#__PURE__*/ jsx("span", {
                children: text
            })
        ]
    });
    return /*#__PURE__*/ jsx(Link, {
        href: link,
        className: "rp-edit-link",
        children: text
    });
}
export { EditLink };
