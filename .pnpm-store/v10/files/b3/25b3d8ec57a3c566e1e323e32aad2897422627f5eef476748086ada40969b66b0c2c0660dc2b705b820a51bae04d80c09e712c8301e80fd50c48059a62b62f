import { jsx } from "react/jsx-runtime";
import { useSite } from "@rspress/core/runtime";
import { renderHtmlOrText } from "@rspress/core/theme";
import "./index.css";
function HomeFooter() {
    const { site } = useSite();
    const { message } = site.themeConfig.footer || {};
    if (!message) return null;
    return /*#__PURE__*/ jsx("footer", {
        className: "rp-home-footer",
        children: /*#__PURE__*/ jsx("div", {
            className: "rp-home-footer__container",
            children: /*#__PURE__*/ jsx("div", {
                className: "rp-home-footer__message",
                ...renderHtmlOrText(message)
            })
        })
    });
}
export { HomeFooter };
