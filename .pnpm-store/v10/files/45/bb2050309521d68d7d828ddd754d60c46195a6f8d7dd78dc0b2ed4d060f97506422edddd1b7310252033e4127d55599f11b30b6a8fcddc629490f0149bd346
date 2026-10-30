import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { NoSSR, useI18n, useSite } from "@rspress/core/runtime";
import { SwitchAppearance } from "@rspress/core/theme";
import "./NavScreenAppearance.css";
function NavScreenAppearance() {
    const { site } = useSite();
    const hasAppearanceSwitch = false !== site.themeConfig.darkMode;
    const t = useI18n();
    return /*#__PURE__*/ jsx(Fragment, {
        children: hasAppearanceSwitch && /*#__PURE__*/ jsxs("div", {
            className: "rp-nav-screen-appearance",
            children: [
                /*#__PURE__*/ jsx("div", {
                    className: "rp-nav-screen-appearance__left",
                    children: t('themeText')
                }),
                /*#__PURE__*/ jsx("div", {
                    className: "rp-nav-screen-appearance__right",
                    children: /*#__PURE__*/ jsx(NoSSR, {
                        children: /*#__PURE__*/ jsx(SwitchAppearance, {})
                    })
                })
            ]
        })
    });
}
export { NavScreenAppearance };
