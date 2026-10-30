import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { IconSmallMenu, SocialLinks, SvgWrapper, useHoverGroup } from "@rspress/core/theme";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { NavVersions } from "../Nav/NavMenu.js";
import { NavScreen, NavScreenDivider } from "../NavScreen/index.js";
import { NavScreenAppearance } from "../NavScreen/NavScreenAppearance.js";
import { NavScreenLangs } from "../NavScreen/NavScreenLangs.js";
import "./index.css";
import { useNavScreen } from "./useNavScreen.js";
function NavHamburger() {
    const items = /*#__PURE__*/ jsxs("div", {
        className: "rp-nav-hamburger__md__hover-group",
        children: [
            /*#__PURE__*/ jsx(NavScreenAppearance, {}),
            /*#__PURE__*/ jsx(NavVersions, {}),
            /*#__PURE__*/ jsx(NavScreenLangs, {}),
            /*#__PURE__*/ jsx(NavScreenDivider, {}),
            /*#__PURE__*/ jsx(SocialLinks, {})
        ]
    });
    const { isScreenOpen, toggleScreen } = useNavScreen();
    const { handleMouseEnter, handleMouseLeave, hoverGroup } = useHoverGroup({
        position: 'right',
        customChildren: /*#__PURE__*/ jsx("div", {
            className: "rp-nav-menu__others-mobile__container",
            children: items
        })
    });
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            isScreenOpen && /*#__PURE__*/ createPortal(/*#__PURE__*/ jsx(NavScreen, {
                isScreenOpen: isScreenOpen,
                toggleScreen: toggleScreen
            }), document.getElementById('__rspress_modal_container')),
            /*#__PURE__*/ jsx("button", {
                onClick: toggleScreen,
                "aria-label": "mobile hamburger",
                className: clsx('rp-nav-hamburger', 'rp-nav-hamburger__sm', {
                    'rp-nav-hamburger--active': isScreenOpen
                }),
                children: /*#__PURE__*/ jsx(SvgWrapper, {
                    icon: IconSmallMenu
                })
            }),
            /*#__PURE__*/ jsxs("button", {
                "aria-label": "mobile hamburger",
                className: clsx('rp-nav-hamburger', 'rp-nav-hamburger__md', {
                    'rp-nav-hamburger--active': isScreenOpen
                }),
                onClick: handleMouseEnter,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                children: [
                    /*#__PURE__*/ jsx(SvgWrapper, {
                        icon: IconSmallMenu
                    }),
                    hoverGroup
                ]
            })
        ]
    });
}
export { NavHamburger };
