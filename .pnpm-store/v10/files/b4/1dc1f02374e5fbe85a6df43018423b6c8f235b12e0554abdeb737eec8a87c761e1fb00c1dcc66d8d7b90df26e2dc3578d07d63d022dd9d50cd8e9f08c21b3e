import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { matchNavbar, useLocation } from "@rspress/core/runtime";
import { IconArrowDown, Link, SvgWrapper, Tag } from "@rspress/core/theme";
import clsx from "clsx";
import { useMemo, useState } from "react";
import "./NavScreenMenuItem.css";
const SvgDown = (props)=>/*#__PURE__*/ jsx(SvgWrapper, {
        icon: IconArrowDown,
        ...props
    });
function NavScreenMenuItemRaw({ left, right, isOpen, isActive, onClick, href, download }) {
    if (href) return /*#__PURE__*/ jsxs(Link, {
        href: href,
        className: clsx('rp-nav-screen-menu-item', isOpen && 'rp-nav-screen-menu-item--open', isActive && 'rp-nav-screen-menu-item--active'),
        onClick: onClick,
        download: download,
        children: [
            /*#__PURE__*/ jsx("div", {
                className: "rp-nav-screen-menu-item__left",
                children: left
            }),
            /*#__PURE__*/ jsx("div", {
                className: "rp-nav-screen-menu-item__right",
                children: right
            })
        ]
    });
    return /*#__PURE__*/ jsxs("div", {
        className: clsx('rp-nav-screen-menu-item', isOpen && 'rp-nav-screen-menu-item--open', isActive && 'rp-nav-screen-menu-item--active'),
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx("div", {
                className: "rp-nav-screen-menu-item__left",
                children: left
            }),
            /*#__PURE__*/ jsx("div", {
                className: "rp-nav-screen-menu-item__right",
                children: right
            })
        ]
    });
}
function NavScreenMenuItemWithLink({ menuItem }) {
    const { pathname } = useLocation();
    const isActive = useMemo(()=>matchNavbar(menuItem, pathname), [
        menuItem,
        pathname
    ]);
    return /*#__PURE__*/ jsx(NavScreenMenuItemRaw, {
        left: /*#__PURE__*/ jsxs(Fragment, {
            children: [
                menuItem.text,
                menuItem.tag && /*#__PURE__*/ jsx(Tag, {
                    tag: menuItem.tag
                })
            ]
        }),
        right: null,
        href: menuItem.link,
        download: menuItem.download,
        isActive: isActive
    });
}
function NavScreenMenuItemWithChildren({ menuItem }) {
    const [isOpen, setIsOpen] = useState(false);
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx(NavScreenMenuItemRaw, {
                left: /*#__PURE__*/ jsxs(Fragment, {
                    children: [
                        menuItem.text,
                        menuItem.tag && /*#__PURE__*/ jsx(Tag, {
                            tag: menuItem.tag
                        })
                    ]
                }),
                right: /*#__PURE__*/ jsx(SvgDown, {
                    className: "rp-nav-screen-menu-item__icon"
                }),
                isOpen: isOpen,
                onClick: ()=>setIsOpen(!isOpen),
                href: 'link' in menuItem ? menuItem.link : void 0
            }),
            /*#__PURE__*/ jsx("div", {
                className: "rp-nav-screen-menu-item__group",
                style: {
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows .2s ease-out',
                    width: '100%'
                },
                children: /*#__PURE__*/ jsx("div", {
                    className: "rp-nav-screen-menu-item__group-inner",
                    children: menuItem.items.map((item)=>/*#__PURE__*/ jsx(NavScreenMenuItem, {
                            menuItem: item
                        }, item.text))
                })
            })
        ]
    });
}
function NavScreenMenuItem({ menuItem }) {
    if ('items' in menuItem && Array.isArray(menuItem.items) && menuItem.items.length > 0) return /*#__PURE__*/ jsx(NavScreenMenuItemWithChildren, {
        menuItem: menuItem
    });
    if ('link' in menuItem && 'string' == typeof menuItem.link) return /*#__PURE__*/ jsx(NavScreenMenuItemWithLink, {
        menuItem: menuItem
    });
    return /*#__PURE__*/ jsx(NavScreenMenuItemRaw, {
        left: /*#__PURE__*/ jsxs(Fragment, {
            children: [
                menuItem.text,
                menuItem.tag && /*#__PURE__*/ jsx(Tag, {
                    tag: menuItem.tag
                })
            ]
        }),
        right: null
    });
}
export { NavScreenMenuItem, NavScreenMenuItemRaw, NavScreenMenuItemWithChildren, NavScreenMenuItemWithLink, SvgDown };
