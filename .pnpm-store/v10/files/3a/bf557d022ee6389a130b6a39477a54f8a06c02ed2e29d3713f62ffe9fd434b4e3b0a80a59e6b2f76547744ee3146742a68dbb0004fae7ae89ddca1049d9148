import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { matchNavbar, useLocation } from "@rspress/core/runtime";
import { Link, Tag } from "@rspress/core/theme";
import clsx from "clsx";
import "./index.css";
function HoverGroupItem({ item, activeMatcher, depth = 0 }) {
    const { pathname } = useLocation();
    if ('items' in item && item.items && item.items.length > 0) {
        const hasLink = 'link' in item && item.link;
        return /*#__PURE__*/ jsxs(Fragment, {
            children: [
                hasLink && /*#__PURE__*/ jsx("li", {
                    className: "rp-hover-group__item",
                    style: {
                        paddingLeft: `${8 + 12 * depth}px`
                    },
                    "data-depth": depth,
                    children: /*#__PURE__*/ jsxs(Link, {
                        href: item.link,
                        download: 'download' in item ? item.download : void 0,
                        "aria-label": item.text,
                        className: "rp-hover-group__item__link",
                        lang: item.lang,
                        hrefLang: item.lang,
                        rel: item.rel,
                        children: [
                            item.text,
                            'tag' in item && item.tag && /*#__PURE__*/ jsx(Tag, {
                                tag: item.tag
                            })
                        ]
                    })
                }, item.text),
                item.items.map((subItem)=>/*#__PURE__*/ jsx(HoverGroupItem, {
                        item: subItem,
                        activeMatcher: activeMatcher,
                        depth: depth + 1
                    }, subItem.text))
            ]
        });
    }
    if ('link' in item) {
        const { text, link, lang, rel } = item;
        const download = 'download' in item ? item.download : void 0;
        const isActiveItem = activeMatcher ? activeMatcher(item) : matchNavbar(item, pathname);
        return /*#__PURE__*/ jsx("li", {
            className: clsx('rp-hover-group__item', {
                'rp-hover-group__item--active': isActiveItem
            }),
            style: {
                paddingLeft: `${8 + 12 * depth}px`
            },
            "data-depth": depth,
            children: link ? /*#__PURE__*/ jsxs(Link, {
                href: link,
                download: download,
                "aria-label": text,
                className: "rp-hover-group__item__link",
                lang: lang,
                hrefLang: lang,
                rel: rel,
                children: [
                    text,
                    'tag' in item && item.tag && /*#__PURE__*/ jsx(Tag, {
                        tag: item.tag
                    })
                ]
            }) : /*#__PURE__*/ jsxs("div", {
                className: "rp-hover-group__item__link",
                lang: lang,
                children: [
                    text,
                    'tag' in item && item.tag && /*#__PURE__*/ jsx(Tag, {
                        tag: item.tag
                    })
                ]
            })
        }, text + link);
    }
    return /*#__PURE__*/ jsx("li", {
        className: "rp-hover-group__item",
        style: {
            paddingLeft: `${8 + 12 * depth}px`
        },
        "data-depth": depth,
        children: /*#__PURE__*/ jsxs("div", {
            className: "rp-hover-group__item__link",
            children: [
                item.text,
                'tag' in item && item.tag && /*#__PURE__*/ jsx(Tag, {
                    tag: item.tag
                })
            ]
        })
    }, item.text);
}
function HoverGroup({ items, customChildren, isOpen, position = 'center', activeMatcher }) {
    return /*#__PURE__*/ jsx("ul", {
        className: clsx('rp-hover-group', {
            'rp-hover-group--hidden': !isOpen,
            'rp-hover-group--left': 'left' === position,
            'rp-hover-group--center': 'center' === position,
            'rp-hover-group--right': 'right' === position
        }),
        children: customChildren ?? items?.map((item)=>/*#__PURE__*/ jsx(HoverGroupItem, {
                item: item,
                activeMatcher: activeMatcher
            }, item.text))
    });
}
export { HoverGroup };
