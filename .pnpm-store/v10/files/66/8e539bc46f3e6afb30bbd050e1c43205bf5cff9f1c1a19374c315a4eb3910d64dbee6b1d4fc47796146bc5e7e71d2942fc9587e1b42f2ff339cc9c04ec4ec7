import { jsx, jsxs } from "react/jsx-runtime";
import { useNav, useSite } from "@rspress/core/runtime";
import { NavHamburger, NavTitle, Search, SocialLinks, SwitchAppearance } from "@rspress/core/theme";
import "./index.css";
import { NavLangs, NavMenu, NavMenuDivider, NavVersions } from "./NavMenu.js";
function Nav(props) {
    const { beforeNavTitle, afterNavTitle, beforeNavMenu, afterNavMenu, navTitle } = props;
    const navList = useNav();
    const { site } = useSite();
    const hasAppearanceSwitch = false !== site.themeConfig.darkMode;
    return /*#__PURE__*/ jsxs("header", {
        className: "rp-nav",
        children: [
            /*#__PURE__*/ jsxs("div", {
                className: "rp-nav__left",
                children: [
                    beforeNavTitle,
                    navTitle ?? /*#__PURE__*/ jsx(NavTitle, {}),
                    /*#__PURE__*/ jsx(NavMenu, {
                        menuItems: navList,
                        position: "left"
                    }),
                    afterNavTitle
                ]
            }),
            /*#__PURE__*/ jsxs("div", {
                className: "rp-nav__right",
                children: [
                    beforeNavMenu,
                    /*#__PURE__*/ jsx(Search, {}),
                    /*#__PURE__*/ jsx(NavMenu, {
                        menuItems: navList,
                        position: "right"
                    }),
                    /*#__PURE__*/ jsxs("div", {
                        className: "rp-nav__others",
                        children: [
                            /*#__PURE__*/ jsx(NavMenuDivider, {}),
                            /*#__PURE__*/ jsx(NavLangs, {}),
                            /*#__PURE__*/ jsx(NavVersions, {}),
                            hasAppearanceSwitch && /*#__PURE__*/ jsx(SwitchAppearance, {}),
                            /*#__PURE__*/ jsx(SocialLinks, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx(NavHamburger, {}),
                    afterNavMenu
                ]
            })
        ]
    });
}
export { Nav };
