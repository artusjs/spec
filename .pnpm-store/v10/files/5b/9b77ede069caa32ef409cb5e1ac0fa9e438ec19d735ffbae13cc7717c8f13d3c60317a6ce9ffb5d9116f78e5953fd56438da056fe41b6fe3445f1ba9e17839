import { jsx, jsxs } from "react/jsx-runtime";
import { useI18n } from "@rspress/core/runtime";
import { IconScrollToTop, SvgWrapper, useReadPercent } from "@rspress/core/theme";
function ScrollToTop() {
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const t = useI18n();
    const [, scrollTop] = useReadPercent();
    if (scrollTop < 100) return null;
    return /*#__PURE__*/ jsxs("button", {
        className: "rp-outline__action-row rp-scroll-to-top",
        onClick: scrollToTop,
        children: [
            /*#__PURE__*/ jsx(SvgWrapper, {
                icon: IconScrollToTop,
                width: "16",
                height: "16"
            }),
            /*#__PURE__*/ jsx("span", {
                children: t('scrollToTopText')
            })
        ]
    });
}
export { ScrollToTop };
