import { jsx } from "react/jsx-runtime";
import clsx from "clsx";
import "./index.css";
function Badge({ children, type = 'tip', text, outline = false }) {
    const content = children || text;
    return /*#__PURE__*/ jsx("span", {
        className: clsx('rp-badge', `rp-badge--${type}`, outline && 'rp-badge--outline'),
        children: content
    });
}
export { Badge };
