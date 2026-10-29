import { jsx, jsxs } from "react/jsx-runtime";
import { useI18n, usePage, useSite } from "@rspress/core/runtime";
import "./index.css";
function LastUpdated() {
    const { page: { lastUpdatedTime } } = usePage();
    const { site } = useSite();
    const { themeConfig } = site;
    const showLastUpdated = themeConfig.lastUpdated;
    const t = useI18n();
    if (!showLastUpdated) return null;
    return /*#__PURE__*/ jsx("div", {
        className: "rp-last-updated",
        children: /*#__PURE__*/ jsxs("p", {
            children: [
                t('lastUpdatedText'),
                ": ",
                /*#__PURE__*/ jsx("span", {
                    children: lastUpdatedTime
                })
            ]
        })
    });
}
export { LastUpdated };
