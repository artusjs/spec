import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useVersionsMenu } from "../Nav/hooks.js";
import "./NavScreenVersions.css";
import { useI18n } from "@rspress/core/runtime";
import { Link } from "@rspress/core/theme";
import clsx from "clsx";
import { SvgDown } from "./NavScreenMenuItem.js";
function NavScreenVersions() {
    const { items, activeValue } = useVersionsMenu();
    const [isOpen, setIsOpen] = useState(false);
    const t = useI18n();
    return items.length > 1 ? /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsxs("div", {
                className: "rp-nav-screen-versions",
                onClick: ()=>setIsOpen(!isOpen),
                children: [
                    /*#__PURE__*/ jsx("div", {
                        className: "rp-nav-screen-versions__left",
                        children: t('versionsText')
                    }),
                    /*#__PURE__*/ jsxs("div", {
                        className: "rp-nav-screen-versions__right",
                        children: [
                            activeValue,
                            /*#__PURE__*/ jsx(SvgDown, {
                                className: clsx('rp-nav-screen-versions__icon', {
                                    'rp-nav-screen-versions__icon--open': isOpen
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx("div", {
                className: clsx('rp-nav-screen-versions-group', isOpen && 'rp-nav-screen-versions-group--open'),
                children: items.map((item)=>{
                    const isActive = item.text === activeValue;
                    const className = clsx('rp-nav-screen-versions-group__item', isActive && 'rp-nav-screen-versions-group__item--active');
                    return isActive ? /*#__PURE__*/ jsx("span", {
                        className: className,
                        "aria-current": "page",
                        "aria-disabled": true,
                        children: item.text
                    }, item.text) : /*#__PURE__*/ jsx(Link, {
                        href: item.link,
                        className: className,
                        children: item.text
                    }, item.text);
                })
            })
        ]
    }) : null;
}
export { NavScreenVersions };
