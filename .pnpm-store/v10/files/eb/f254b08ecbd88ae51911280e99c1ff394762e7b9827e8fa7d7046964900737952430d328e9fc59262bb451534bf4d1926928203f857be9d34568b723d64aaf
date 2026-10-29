import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { matchNavbar, useLocation } from "@rspress/core/runtime";
import { IconArrowDown, Link, SvgWrapper, Tag, useHoverGroup } from "@rspress/core/theme";
import clsx from "clsx";
import { useMemo } from "react";
import { useLangsMenu, useVersionsMenu } from "./hooks.js";
import "./NavMenu.css";
const SvgDown = (props)=>/*#__PURE__*/ jsx(SvgWrapper, {
        icon: IconArrowDown,
        ...props
    });
function NavMenuItemInner({ menuItem, children }) {
    return /*#__PURE__*/ jsx(Fragment, {
        children: 'link' in menuItem && 'string' == typeof menuItem.link ? /*#__PURE__*/ jsxs(Link, {
            href: menuItem.link,
            download: menuItem.download,
            className: "rp-nav-menu__item__container",
            hrefLang: menuItem.lang,
            lang: menuItem.lang,
            rel: menuItem.rel,
            children: [
                menuItem.text,
                menuItem.tag && /*#__PURE__*/ jsx(Tag, {
                    tag: menuItem.tag
                }),
                children
            ]
        }) : /*#__PURE__*/ jsxs("div", {
            className: "rp-nav-menu__item__container",
            children: [
                menuItem.text,
                menuItem.tag && /*#__PURE__*/ jsx(Tag, {
                    tag: menuItem.tag
                }),
                children
            ]
        })
    });
}
function NavMenuItemWithChildren({ menuItem, activeMatcher }) {
    const { handleMouseEnter, handleMouseLeave, hoverGroup } = useHoverGroup({
        items: menuItem.items,
        activeMatcher
    });
    const hasItems = menuItem.items.length > 0;
    return /*#__PURE__*/ jsxs("li", {
        className: "rp-nav-menu__item",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onClick: handleMouseEnter,
        children: [
            /*#__PURE__*/ jsx(NavMenuItemInner, {
                menuItem: menuItem,
                children: hasItems && /*#__PURE__*/ jsx(SvgDown, {
                    className: "rp-nav-menu__item__icon"
                })
            }),
            hoverGroup
        ]
    });
}
function NavMenuItemWithLink({ menuItem }) {
    const { pathname } = useLocation();
    const isActive = useMemo(()=>matchNavbar(menuItem, pathname), [
        menuItem,
        pathname
    ]);
    return /*#__PURE__*/ jsx("li", {
        className: clsx('rp-nav-menu__item', isActive ? 'rp-nav-menu__item--active' : ''),
        children: /*#__PURE__*/ jsx(NavMenuItemInner, {
            menuItem: menuItem
        })
    });
}
function NavMenuItem({ menuItem }) {
    if ('items' in menuItem && Array.isArray(menuItem.items) && menuItem.items.length > 0) return /*#__PURE__*/ jsx(NavMenuItemWithChildren, {
        menuItem: menuItem
    });
    if ('link' in menuItem && menuItem.link.length > 0) return /*#__PURE__*/ jsx(NavMenuItemWithLink, {
        menuItem: menuItem
    });
    return /*#__PURE__*/ jsx("li", {
        className: "rp-nav-menu__item",
        children: /*#__PURE__*/ jsx(NavMenuItemInner, {
            menuItem: menuItem
        })
    });
}
function NavMenuDivider() {
    return /*#__PURE__*/ jsx("div", {
        className: "rp-nav-menu__divider"
    });
}
function NavLangs() {
    const { items, activeValue } = useLangsMenu();
    return items.length > 1 ? /*#__PURE__*/ jsx(NavMenuItemWithChildren, {
        menuItem: {
            text: activeValue,
            items
        },
        activeMatcher: (item)=>item.text === activeValue
    }) : null;
}
function NavVersions() {
    const { activeValue, items } = useVersionsMenu();
    return items.length > 1 ? /*#__PURE__*/ jsx(NavMenuItemWithChildren, {
        menuItem: {
            text: activeValue,
            items
        },
        activeMatcher: (item)=>item.text === activeValue
    }) : null;
}
function NavMenu({ menuItems, position }) {
    const getPosition = (menuItem)=>menuItem.position ?? 'right';
    const leftOrRightMenuItems = useMemo(()=>menuItems.filter((item)=>getPosition(item) === position), [
        menuItems
    ]);
    if (0 === leftOrRightMenuItems.length) return null;
    return /*#__PURE__*/ jsx("ul", {
        className: clsx('rp-nav-menu', `rp-nav-menu--${position}`),
        children: leftOrRightMenuItems.map((item, index)=>/*#__PURE__*/ jsx(NavMenuItem, {
                menuItem: item
            }, index))
    });
}
export { NavLangs, NavMenu, NavMenuDivider, NavMenuItem, NavMenuItemInner, NavMenuItemWithChildren, NavMenuItemWithLink, NavVersions, SvgDown };
