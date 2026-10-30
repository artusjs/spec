import { jsx, jsxs } from "react/jsx-runtime";
import { NoSSR, useSite } from "@rspress/core/runtime";
import { SocialLinks, SwitchAppearance } from "@rspress/core/theme";
import "./index.css";
import { NavScreenLangs } from "./NavScreenLangs.js";
import { NavScreenVersions } from "./NavScreenVersions.js";
function NavScreenMenuOthers() {
    const { site } = useSite();
    const hasAppearanceSwitch = false !== site.themeConfig.darkMode;
    const socialLinks = site?.themeConfig?.socialLinks || [];
    const hasSocialLinks = socialLinks.length > 0;
    return /*#__PURE__*/ jsxs("div", {
        className: "rp-nav-screen__others",
        children: [
            hasAppearanceSwitch && /*#__PURE__*/ jsx("div", {
                className: "rp-nav-screen__appearance",
                children: /*#__PURE__*/ jsx(NoSSR, {
                    children: /*#__PURE__*/ jsx(SwitchAppearance, {})
                })
            }),
            /*#__PURE__*/ jsx(NavScreenLangs, {}),
            /*#__PURE__*/ jsx(NavScreenVersions, {}),
            hasSocialLinks && /*#__PURE__*/ jsx(SocialLinks, {
                socialLinks: socialLinks
            })
        ]
    });
}
export { NavScreenMenuOthers };
