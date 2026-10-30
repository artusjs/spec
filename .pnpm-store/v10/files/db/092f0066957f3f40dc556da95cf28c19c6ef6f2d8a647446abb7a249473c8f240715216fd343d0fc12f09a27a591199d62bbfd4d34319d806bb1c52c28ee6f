import { jsx, jsxs } from "react/jsx-runtime";
import { useI18n } from "@rspress/core/runtime";
import { IconEmpty, SvgWrapper } from "@rspress/core/theme";
import "./NoSearchResult.css";
function NoSearchResult({ query }) {
    const t = useI18n();
    return /*#__PURE__*/ jsxs("div", {
        className: "rp-no-search-result",
        children: [
            /*#__PURE__*/ jsx(SvgWrapper, {
                icon: IconEmpty,
                className: "rp-no-search-result__icon"
            }),
            /*#__PURE__*/ jsxs("p", {
                className: "rp-no-search-result__text",
                children: [
                    t('searchNoResultsText'),
                    " ",
                    /*#__PURE__*/ jsxs("b", {
                        children: [
                            '"',
                            query,
                            '"'
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx("p", {
                className: "rp-no-search-result__suggestion",
                children: t('searchSuggestedQueryText')
            })
        ]
    });
}
export { NoSearchResult };
