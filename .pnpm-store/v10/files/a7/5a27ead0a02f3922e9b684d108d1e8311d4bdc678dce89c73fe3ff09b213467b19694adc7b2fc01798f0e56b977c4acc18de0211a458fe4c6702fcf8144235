import { jsx, jsxs } from "react/jsx-runtime";
import { useNav } from "@rspress/core/runtime";
import { SocialLinks } from "@rspress/core/theme";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import "./index.css";
import { NavScreenAppearance } from "./NavScreenAppearance.js";
import { NavScreenLangs } from "./NavScreenLangs.js";
import { NavScreenMenu } from "./NavScreenMenu.js";
import { NavScreenVersions } from "./NavScreenVersions.js";
function NavScreenDivider() {
    return /*#__PURE__*/ jsx("div", {
        className: "rp-nav-screen-divider"
    });
}
function NavScreen(props) {
    const { isScreenOpen, toggleScreen } = props;
    const screen = useRef(null);
    const menuItems = useNav();
    useEffect(()=>{
        if (screen.current && isScreenOpen) {
            disableBodyScroll(screen.current, {
                reserveScrollBarGap: true
            });
            const style = ":root { --rp-home-background-bg: transparent; }";
            const styleElement = document.createElement('style');
            styleElement.id = 'rp-nav-screen-body-lock-style';
            styleElement.innerHTML = style;
            document.head.appendChild(styleElement);
        }
        return ()=>{
            clearAllBodyScrollLocks();
            const styleElement = document.getElementById('rp-nav-screen-body-lock-style');
            if (styleElement) document.head.removeChild(styleElement);
        };
    }, [
        isScreenOpen
    ]);
    return /*#__PURE__*/ jsx("div", {
        className: clsx('rp-nav-screen', {
            'rp-nav-screen--open': isScreenOpen
        }),
        ref: screen,
        onClick: toggleScreen,
        children: /*#__PURE__*/ jsxs("div", {
            className: "rp-nav-screen__container",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ jsx(NavScreenMenu, {
                    menuItems: menuItems
                }),
                /*#__PURE__*/ jsx(NavScreenDivider, {}),
                /*#__PURE__*/ jsx(NavScreenAppearance, {}),
                /*#__PURE__*/ jsx(NavScreenLangs, {}),
                /*#__PURE__*/ jsx(NavScreenVersions, {}),
                /*#__PURE__*/ jsx(NavScreenDivider, {}),
                /*#__PURE__*/ jsx(SocialLinks, {})
            ]
        })
    });
}
export { NavScreen, NavScreenDivider };
