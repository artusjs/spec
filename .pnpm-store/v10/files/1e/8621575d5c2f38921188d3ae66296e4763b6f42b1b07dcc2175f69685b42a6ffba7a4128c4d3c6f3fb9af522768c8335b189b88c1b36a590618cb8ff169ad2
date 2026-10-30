import { jsx } from "react/jsx-runtime";
import { preloadLink } from "@rspress/core/runtime";
import clsx from "clsx";
import nprogress from "nprogress";
import { forwardRef } from "react";
import "./index.css";
import { getHref, useLinkNavigate } from "./useLinkNavigate.js";
nprogress.configure({
    showSpinner: false
});
const Link = /*#__PURE__*/ forwardRef((props, ref)=>{
    const { href = '/', children, className = '', onClick, onMouseEnter, startTransition, ...otherProps } = props;
    const { linkType, removeBaseHref, withBaseHref } = getHref(href);
    const navigate = useLinkNavigate({
        startTransition
    });
    if ('external' === linkType) return /*#__PURE__*/ jsx("a", {
        ref: ref,
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: clsx(className, 'rp-link'),
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        ...otherProps,
        children: children
    });
    if ('hashOnly' === linkType) return /*#__PURE__*/ jsx("a", {
        ref: ref,
        href: href,
        className: clsx(className, 'rp-link'),
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        ...otherProps,
        children: children
    });
    if ('relative' === linkType) return /*#__PURE__*/ jsx("a", {
        ref: ref,
        href: href,
        className: clsx(className, 'rp-link'),
        onMouseEnter: (event)=>{
            onMouseEnter?.(event);
            preloadLink(removeBaseHref);
        },
        onClick: (e)=>{
            onClick?.(e);
            if (0 !== e.button || e.currentTarget.target && '_self' !== e.currentTarget.target || e.metaKey || e.shiftKey || e.altKey || e.ctrlKey) return;
            e.preventDefault();
            navigate(href);
        },
        ...otherProps,
        children: children
    });
    return /*#__PURE__*/ jsx("a", {
        ref: ref,
        href: withBaseHref,
        className: clsx(className, 'rp-link'),
        onMouseEnter: (event)=>{
            onMouseEnter?.(event);
            preloadLink(removeBaseHref);
        },
        onClick: (e)=>{
            onClick?.(e);
            if (0 !== e.button || e.currentTarget.target && '_self' !== e.currentTarget.target || e.metaKey || e.shiftKey || e.altKey || e.ctrlKey) return;
            e.preventDefault();
            navigate(removeBaseHref);
        },
        ...otherProps,
        children: children
    });
});
Link.displayName = 'Link';
export { Link };
