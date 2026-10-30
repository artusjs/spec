import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useSearchParams } from "@rspress/core/runtime";
import clsx from "clsx";
import { Children, forwardRef, isValidElement, useEffect, useMemo } from "react";
import "./index.css";
function getTabValuesFromChildren(children) {
    return Children.map(children, (child, index)=>{
        if (/*#__PURE__*/ isValidElement(child)) return {
            label: child.props?.label || void 0,
            content: children[index]
        };
        return {
            label: index,
            content: children[index]
        };
    });
}
function usePageTabs(id, children) {
    const [searchParams, setSearchParams] = useSearchParams();
    const tabValues = useMemo(()=>getTabValuesFromChildren(children), [
        children
    ]);
    function navigateToTab(index) {
        if (0 === index) searchParams.delete(id);
        else searchParams.set(id, String(index));
        setSearchParams(searchParams);
    }
    useEffect(()=>{
        const currIndex = Number(searchParams.get(id) ?? '0');
        if (!Number.isNaN(currIndex)) document.body.dataset.pageTabsActiveIndex = currIndex.toString();
    }, [
        searchParams
    ]);
    const injectScript = `(function () {
    var searchParams = new URLSearchParams(window.location.search);
    var currIndex = Number(searchParams.get('${id}') || 0);
    if (!Number.isNaN(currIndex)) {
      document.body.dataset.pageTabsActiveIndex = currIndex;
    }
  })();`;
    return {
        tabValues,
        navigateToTab,
        injectScript
    };
}
let renderCountForTocUpdate = 0;
const PageTabs = /*#__PURE__*/ forwardRef((props, ref)=>{
    const { children: rawChildren, tabPosition = 'left', className, id = 'page' } = props;
    const children = Children.toArray(rawChildren).filter((child)=>!('string' == typeof child && '' === child.trim()) && /*#__PURE__*/ isValidElement(child));
    const { tabValues, navigateToTab, injectScript } = usePageTabs(id, children);
    renderCountForTocUpdate++;
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx("script", {
                suppressHydrationWarning: true,
                dangerouslySetInnerHTML: {
                    __html: injectScript
                }
            }),
            /*#__PURE__*/ jsxs("div", {
                className: clsx('rp-page-tabs', className),
                ref: ref,
                children: [
                    tabValues.length ? /*#__PURE__*/ jsx("div", {
                        className: "rp-page-tabs__label",
                        style: {
                            justifyContent: 'center' === tabPosition ? 'center' : 'flex-start'
                        },
                        children: tabValues.map(({ label }, index)=>/*#__PURE__*/ jsx("div", {
                                className: "rp-page-tabs__label__item",
                                "data-index": index,
                                onClick: ()=>{
                                    navigateToTab(index);
                                },
                                children: label
                            }, 'string' == typeof label ? label : index))
                    }) : null,
                    /*#__PURE__*/ jsx("div", {
                        className: "rp-page-tabs__content",
                        children: tabValues.map(({ label, content }, index)=>/*#__PURE__*/ jsx("div", {
                                className: "rp-page-tabs__content__item",
                                "data-index": index,
                                children: content
                            }, 'string' == typeof label ? label : index))
                    })
                ]
            }),
            renderCountForTocUpdate % 2 === 0 ? /*#__PURE__*/ jsx("h2", {
                style: {
                    display: 'none'
                }
            }) : null
        ]
    });
});
function PageTab({ children }) {
    return /*#__PURE__*/ jsx(Fragment, {
        children: children
    });
}
export { PageTab, PageTabs };
