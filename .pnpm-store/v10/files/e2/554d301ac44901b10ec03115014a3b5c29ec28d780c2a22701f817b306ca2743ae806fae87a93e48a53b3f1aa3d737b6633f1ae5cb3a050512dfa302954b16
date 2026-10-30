import { jsx, jsxs } from "react/jsx-runtime";
import "./index.css";
function capitalize(type) {
    return type.charAt(0).toUpperCase() + type.slice(1);
}
function Callout({ type, title, children }) {
    const isDetails = 'details' === type;
    if (isDetails) return /*#__PURE__*/ jsxs("details", {
        className: `rp-callout rp-callout--${type}`,
        children: [
            /*#__PURE__*/ jsx("summary", {
                className: "rp-callout__title",
                children: title ?? capitalize(type)
            }),
            /*#__PURE__*/ jsx("div", {
                className: "rp-callout__content",
                children: children
            })
        ]
    });
    return /*#__PURE__*/ jsxs("div", {
        className: `rp-callout rp-callout--${type}`,
        children: [
            /*#__PURE__*/ jsx("div", {
                className: "rp-callout__title",
                children: title ?? capitalize(type)
            }),
            /*#__PURE__*/ jsx("div", {
                className: "rp-callout__content",
                children: children
            })
        ]
    });
}
var components_Callout = Callout;
export default components_Callout;
export { Callout };
