import { jsx } from "react/jsx-runtime";
import { normalizeImagePath } from "@rspress/core/runtime";
import { renderHtmlOrText } from "@rspress/core/theme";
function isUrlOrPath(str) {
    return str.startsWith('/') || str.startsWith('./') || str.startsWith('../') || str.startsWith('http://') || str.startsWith('https://') || str.startsWith('data:');
}
function SvgWrapper({ icon: Icon, ...rest }) {
    if (!Icon) return null;
    if ('string' == typeof Icon) {
        const { className } = rest;
        if (Icon.trim().startsWith('<svg')) return /*#__PURE__*/ jsx("span", {
            className: className,
            dangerouslySetInnerHTML: {
                __html: Icon
            }
        });
        if (isUrlOrPath(Icon)) return /*#__PURE__*/ jsx("img", {
            className: className,
            src: normalizeImagePath(Icon),
            alt: ""
        });
        return /*#__PURE__*/ jsx("span", {
            className: className,
            ...renderHtmlOrText(Icon)
        });
    }
    return /*#__PURE__*/ jsx(Icon, {
        ...rest
    });
}
export { SvgWrapper };
