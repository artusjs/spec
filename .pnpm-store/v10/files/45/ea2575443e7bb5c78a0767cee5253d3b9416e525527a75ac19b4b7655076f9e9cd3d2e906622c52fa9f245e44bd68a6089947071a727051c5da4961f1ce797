import { jsx } from "react/jsx-runtime";
import "./SidebarDivider.css";
function SidebarDivider(props) {
    const { depth, dividerType } = props;
    const className = 'dashed' === dividerType ? 'rp-sidebar-divider--dashed' : 'rp-sidebar-divider';
    return /*#__PURE__*/ jsx("div", {
        className: className,
        style: {
            paddingLeft: 0 === depth ? '12px' : `calc(12px * ${depth} + 12px)`
        }
    });
}
export { SidebarDivider };
