import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useActiveMatcher } from "@rspress/core/runtime";
import { Link, Tag, renderInlineMarkdown } from "@rspress/core/theme";
import clsx from "clsx";
import { useEffect, useRef, useTransition } from "react";
import "./SidebarItem.css";
import scroll_into_view_if_needed from "scroll-into-view-if-needed";
function SidebarItemRaw({ active, text, tag, link, context, className, left, right, onClick, depth }) {
    const ref = useRef(null);
    const [isPending, startTransition] = useTransition();
    useEffect(()=>{
        if (active && ref.current) scroll_into_view_if_needed(ref.current, {
            scrollMode: 'if-needed',
            block: 'center',
            inline: 'center',
            boundary: (element)=>{
                const isBoundary = element.classList.contains('rp-doc-layout__sidebar') || element.classList.contains('rspress-doc');
                return !isBoundary;
            }
        });
    }, [
        active
    ]);
    const innerContent = /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsxs("div", {
                className: "rp-sidebar-item__left",
                ref: ref,
                children: [
                    /*#__PURE__*/ jsx("span", {
                        ...renderInlineMarkdown(text)
                    }),
                    left
                ]
            }),
            /*#__PURE__*/ jsxs("div", {
                className: "rp-sidebar-item__right",
                children: [
                    /*#__PURE__*/ jsx(Tag, {
                        tag: tag
                    }),
                    right
                ]
            })
        ]
    });
    if (link) return /*#__PURE__*/ jsx(Link, {
        href: link,
        startTransition: startTransition,
        className: clsx('rp-sidebar-item', {
            'rp-sidebar-item--active': active,
            'rp-sidebar-item--pending': isPending
        }, className),
        style: {
            paddingLeft: 0 === depth ? '12px' : `calc(12px * ${depth} + 12px)`
        },
        'data-depth': depth,
        ...context ? {
            'data-context': context
        } : {},
        onClick: onClick,
        children: innerContent
    });
    return /*#__PURE__*/ jsx("div", {
        ref: ref,
        className: clsx('rp-sidebar-item', {
            'rp-sidebar-item--active': active
        }, className),
        style: {
            paddingLeft: 0 === depth ? '12px' : `calc(12px * ${depth} + 12px)`
        },
        'data-depth': depth,
        ...context ? {
            'data-context': context
        } : {},
        onClick: onClick,
        children: innerContent
    });
}
function SidebarItem(props) {
    const { item, depth, className } = props;
    const activeMatcher = useActiveMatcher();
    const active = Boolean('link' in item && item.link && activeMatcher(item.link));
    return /*#__PURE__*/ jsx(SidebarItemRaw, {
        className: className,
        active: active,
        link: item.link,
        tag: item.tag,
        text: item.text,
        context: item.context,
        depth: depth
    });
}
export { SidebarItem, SidebarItemRaw };
