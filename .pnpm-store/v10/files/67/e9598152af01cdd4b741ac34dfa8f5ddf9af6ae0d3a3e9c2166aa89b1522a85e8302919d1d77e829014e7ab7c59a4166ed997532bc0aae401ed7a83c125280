import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { IconFile, IconHeader, IconJump, IconTitle, Link, SvgWrapper } from "@rspress/core/theme";
import { useRef } from "react";
import "./SuggestItem.css";
import { getSlicedStrByByteLength } from "./logic/util.js";
function SuggestItem({ suggestion, closeSearch, isCurrent, setCurrentSuggestionIndex, scrollTo, onMouseMove }) {
    const ICON_MAP = {
        title: IconTitle,
        header: IconHeader,
        content: IconFile
    };
    const HitIcon = ICON_MAP[suggestion.type];
    const selfRef = useRef(null);
    if (isCurrent && selfRef.current?.offsetTop) scrollTo(selfRef.current?.offsetTop, selfRef.current?.offsetHeight);
    const getHighlightedFragments = (rawText, highlights)=>{
        const fragmentList = [];
        let lastIndex = 0;
        for (const highlightInfo of highlights){
            const { start, length } = highlightInfo;
            const prefix = rawText.slice(lastIndex, start);
            const queryStr = getSlicedStrByByteLength(rawText, start, length);
            fragmentList.push(prefix);
            fragmentList.push(/*#__PURE__*/ jsx("span", {
                className: "rp-suggest-item__mark",
                children: queryStr
            }, start));
            lastIndex = start + queryStr.length;
        }
        if (lastIndex < rawText.length) fragmentList.push(rawText.slice(lastIndex));
        return fragmentList;
    };
    const renderHeaderMatch = ()=>{
        if ('header' === suggestion.type || 'title' === suggestion.type) {
            const { header, highlightInfoList } = suggestion;
            return /*#__PURE__*/ jsx("div", {
                className: "rp-suggest-item__header",
                children: getHighlightedFragments(header, highlightInfoList)
            });
        }
        return /*#__PURE__*/ jsx("div", {
            className: "rp-suggest-item__header",
            children: suggestion.header
        });
    };
    const renderStatementMatch = ()=>{
        if ('content' !== suggestion.type) return /*#__PURE__*/ jsx("div", {});
        const { statement, highlightInfoList } = suggestion;
        return /*#__PURE__*/ jsx("div", {
            className: "rp-suggest-item__statement",
            children: getHighlightedFragments(statement, highlightInfoList)
        });
    };
    let hitContent = null;
    switch(suggestion.type){
        case 'title':
        case 'header':
            hitContent = renderHeaderMatch();
            break;
        case 'content':
            hitContent = /*#__PURE__*/ jsxs(Fragment, {
                children: [
                    renderStatementMatch(),
                    /*#__PURE__*/ jsx("p", {
                        className: "rp-suggest-item__title",
                        children: suggestion.title
                    })
                ]
            });
            break;
        default:
            break;
    }
    return /*#__PURE__*/ jsx("li", {
        className: `rp-suggest-item ${isCurrent ? 'rp-suggest-item--current' : ''}`,
        onMouseEnter: setCurrentSuggestionIndex,
        onMouseMove: onMouseMove,
        ref: selfRef,
        children: /*#__PURE__*/ jsx(Link, {
            href: suggestion.link,
            className: "rp-suggest-item__link",
            onClick: (e)=>{
                closeSearch();
                e.stopPropagation();
            },
            children: /*#__PURE__*/ jsxs("div", {
                className: "rp-suggest-item__container",
                children: [
                    /*#__PURE__*/ jsx("div", {
                        className: "rp-suggest-item__icon",
                        children: /*#__PURE__*/ jsx(SvgWrapper, {
                            icon: HitIcon
                        })
                    }),
                    /*#__PURE__*/ jsx("div", {
                        className: "rp-suggest-item__content",
                        children: /*#__PURE__*/ jsx("span", {
                            children: hitContent
                        })
                    }),
                    /*#__PURE__*/ jsx("div", {
                        className: "rp-suggest-item__action-icon",
                        children: /*#__PURE__*/ jsx(SvgWrapper, {
                            icon: IconJump
                        })
                    })
                ]
            })
        })
    }, suggestion.link);
}
export { SuggestItem };
