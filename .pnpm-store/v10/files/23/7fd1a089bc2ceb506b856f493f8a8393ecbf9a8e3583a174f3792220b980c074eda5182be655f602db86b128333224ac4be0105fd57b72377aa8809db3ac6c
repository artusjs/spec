import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useI18n, useSite } from "@rspress/core/runtime";
import { EditLink, LlmsCopyRow, LlmsOpenRow, ReadPercent, Toc, useDynamicToc } from "@rspress/core/theme";
import "./index.css";
import { ScrollToTop } from "./ScrollToTop.js";
function Outline() {
    const t = useI18n();
    const headers = useDynamicToc();
    const { site: { themeConfig: { enableScrollToTop = true, llmsUI } } } = useSite();
    if (0 === headers.length) return /*#__PURE__*/ jsx(Fragment, {});
    const placement = 'object' == typeof llmsUI ? llmsUI?.placement ?? 'title' : 'title';
    return /*#__PURE__*/ jsxs("div", {
        className: "rp-outline",
        children: [
            /*#__PURE__*/ jsxs("div", {
                className: "rp-outline__title",
                children: [
                    t('outlineTitle'),
                    /*#__PURE__*/ jsx(ReadPercent, {
                        size: 14,
                        strokeWidth: 2
                    })
                ]
            }),
            /*#__PURE__*/ jsx("nav", {
                className: "rp-outline__toc rp-scrollbar",
                children: /*#__PURE__*/ jsx(Toc, {})
            }),
            /*#__PURE__*/ jsx("div", {
                className: "rp-outline__divider"
            }),
            /*#__PURE__*/ jsxs("div", {
                className: "rp-outline__bottom",
                children: [
                    /*#__PURE__*/ jsx(EditLink, {
                        isOutline: true
                    }),
                    process.env.ENABLE_LLMS_UI && 'outline' === placement && /*#__PURE__*/ jsxs(Fragment, {
                        children: [
                            /*#__PURE__*/ jsx(LlmsCopyRow, {}),
                            /*#__PURE__*/ jsx(LlmsOpenRow, {})
                        ]
                    }),
                    enableScrollToTop && /*#__PURE__*/ jsx(ScrollToTop, {})
                ]
            })
        ]
    });
}
export { Outline };
