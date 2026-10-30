import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useLangsMenu } from "../Nav/hooks.js";
import "./NavScreenLangs.css";
import { useI18n } from "@rspress/core/runtime";
import { Link } from "@rspress/core/theme";
import clsx from "clsx";
import { SvgDown } from "./NavScreenMenuItem.js";
function NavScreenLangs() {
    const { items, activeValue } = useLangsMenu();
    const [isOpen, setIsOpen] = useState(false);
    const t = useI18n();
    return items.length > 1 ? /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsxs("div", {
                className: "rp-nav-screen-langs",
                onClick: ()=>setIsOpen(!isOpen),
                children: [
                    /*#__PURE__*/ jsx("div", {
                        className: "rp-nav-screen-langs__left",
                        children: t('languagesText')
                    }),
                    /*#__PURE__*/ jsxs("div", {
                        className: "rp-nav-screen-langs__right",
                        children: [
                            activeValue,
                            /*#__PURE__*/ jsx(SvgDown, {
                                className: `rp-nav-screen-langs__icon ${isOpen ? 'rp-nav-screen-langs__icon--open' : ''}`
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx("div", {
                className: "rp-nav-screen-langs-group",
                style: {
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.2s ease-out'
                },
                children: /*#__PURE__*/ jsx("div", {
                    className: "rp-nav-screen-langs-group__inner",
                    children: items.map((item)=>{
                        const isActive = item.text === activeValue;
                        const className = clsx('rp-nav-screen-langs-group__item', isActive && 'rp-nav-screen-langs-group__item--active');
                        return isActive ? /*#__PURE__*/ jsx("span", {
                            className: className,
                            "aria-current": "page",
                            "aria-disabled": true,
                            children: item.text
                        }, item.text) : /*#__PURE__*/ jsx(Link, {
                            href: item.link,
                            className: className,
                            hrefLang: item.lang,
                            lang: item.lang,
                            rel: "alternate",
                            children: item.text
                        }, item.text);
                    })
                })
            })
        ]
    }) : null;
}
export { NavScreenLangs };
