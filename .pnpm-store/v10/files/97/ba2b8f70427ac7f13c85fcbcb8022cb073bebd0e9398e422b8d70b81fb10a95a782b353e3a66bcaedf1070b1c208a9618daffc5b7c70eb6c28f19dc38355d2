import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CodeButtonGroup, IconArrowDown, SvgWrapper, useCodeButtonGroup } from "@rspress/core/theme";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";
const DEFAULT_FOLD_HEIGHT = 300;
function CodeBlock({ containerElementClassName, title, lang = 'txt', wrapCode: wrapCodeProp = false, lineNumbers: lineNumbersProp = false, fold = false, height, codeButtonGroupProps, children }) {
    if (process.env.__SSR_MD__) return /*#__PURE__*/ jsx(Fragment, {
        children: children
    });
    const { wrapCode: wrapCodeState, toggleWrapCode, copyElementRef } = useCodeButtonGroup(wrapCodeProp);
    const [expanded, setExpanded] = useState(false);
    const [needFold, setNeedFold] = useState(false);
    const hasScroll = !fold && void 0 !== height;
    const codeBlockRef = useRef(null);
    const contentRef = useRef(null);
    useEffect(()=>{
        if (!fold || !contentRef.current) return void setNeedFold(false);
        const foldHeight = height ?? DEFAULT_FOLD_HEIGHT;
        const realHeight = contentRef.current.scrollHeight;
        setNeedFold(realHeight > foldHeight);
    }, [
        fold,
        height
    ]);
    const handleFoldToggle = useCallback(()=>{
        if (expanded) {
            setExpanded(false);
            requestAnimationFrame(()=>{
                if (codeBlockRef.current) {
                    const rect = codeBlockRef.current.getBoundingClientRect();
                    if (rect.top < 0) window.scrollBy({
                        top: rect.top - 16,
                        behavior: 'smooth'
                    });
                }
            });
        } else setExpanded(true);
    }, [
        expanded
    ]);
    return /*#__PURE__*/ jsxs("div", {
        className: clsx('rp-codeblock', `language-${lang}`, containerElementClassName),
        ref: codeBlockRef,
        children: [
            title && /*#__PURE__*/ jsx("div", {
                className: "rp-codeblock__title",
                children: title
            }),
            /*#__PURE__*/ jsxs("div", {
                className: clsx('rp-codeblock__content', wrapCodeState && 'rp-codeblock__content--wrap-code', lineNumbersProp && 'rp-codeblock__content--line-numbers', needFold && !expanded && 'rp-codeblock__content--fold', hasScroll && 'rp-codeblock__content--scroll'),
                style: needFold && !expanded ? {
                    maxHeight: `${height ?? DEFAULT_FOLD_HEIGHT}px`
                } : hasScroll ? {
                    maxHeight: `${height}px`
                } : void 0,
                ref: contentRef,
                children: [
                    /*#__PURE__*/ jsx("div", {
                        className: "rp-codeblock__content__scroll-container rp-scrollbar rp-scrollbar--always",
                        ref: copyElementRef,
                        children: children
                    }),
                    /*#__PURE__*/ jsx(CodeButtonGroup, {
                        ...codeButtonGroupProps,
                        copyElementRef: copyElementRef,
                        wrapCode: wrapCodeState,
                        toggleWrapCode: toggleWrapCode
                    })
                ]
            }),
            needFold && /*#__PURE__*/ jsx("button", {
                type: "button",
                className: clsx('rp-codeblock__fold-btn', expanded && 'rp-codeblock__fold-btn--expanded'),
                onClick: handleFoldToggle,
                "aria-label": expanded ? 'Collapse code' : 'Expand code',
                "aria-expanded": expanded,
                children: /*#__PURE__*/ jsx(SvgWrapper, {
                    icon: IconArrowDown,
                    className: "rp-codeblock__fold-btn__icon"
                })
            })
        ]
    });
}
export { CodeBlock };
