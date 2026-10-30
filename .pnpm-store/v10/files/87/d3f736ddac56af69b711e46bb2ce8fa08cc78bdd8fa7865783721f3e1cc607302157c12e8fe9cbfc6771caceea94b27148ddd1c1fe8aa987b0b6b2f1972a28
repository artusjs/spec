import { Link } from "@rspress/core/theme";
import clsx from "clsx";
import react from "react";
import "./index.css";
function Button(props) {
    const { theme = 'brand', size = 'big', href = '/', className = '', children, dangerouslySetInnerHTML } = props;
    let type = null;
    if ('button' === props.type) type = 'button';
    else if ('a' === props.type) type = Link;
    return /*#__PURE__*/ react.createElement(type ?? 'a', {
        className: clsx('rp-button', `rp-button--${theme}`, `rp-button--${size}`, className),
        href,
        ...dangerouslySetInnerHTML
    }, children);
}
export { Button };
