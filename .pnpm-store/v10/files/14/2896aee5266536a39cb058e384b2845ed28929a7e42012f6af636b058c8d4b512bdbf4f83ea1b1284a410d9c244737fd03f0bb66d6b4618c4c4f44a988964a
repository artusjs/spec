import { jsx } from "react/jsx-runtime";
import { Link, parseInlineMarkdownText, renderInlineMarkdown } from "@rspress/core/theme";
import clsx from "clsx";
import "./TocItem.css";
import { useEffect, useRef } from "react";
import scroll_into_view_if_needed from "scroll-into-view-if-needed";
const TocItem = ({ header, baseHeaderLevel, active })=>{
    const ref = useRef(null);
    useEffect(()=>{
        if (active && ref.current) scroll_into_view_if_needed(ref.current, {
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
            boundary: (element)=>{
                const isBoundary = element.classList.contains('rp-doc-layout__outline') || element.classList.contains('rspress-doc');
                return !isBoundary;
            }
        });
    }, [
        active
    ]);
    return /*#__PURE__*/ jsx(Link, {
        href: `#${header.id}`,
        ref: ref,
        title: parseInlineMarkdownText(header.text),
        className: clsx('rp-toc-item', {
            'rp-toc-item--active': active
        }),
        style: {
            paddingLeft: (header.depth - baseHeaderLevel) * 12
        },
        'data-depth': header.depth - baseHeaderLevel,
        children: /*#__PURE__*/ jsx("span", {
            className: "rp-toc-item__text rp-doc",
            ...renderInlineMarkdown(header.text)
        })
    });
};
export { TocItem };
