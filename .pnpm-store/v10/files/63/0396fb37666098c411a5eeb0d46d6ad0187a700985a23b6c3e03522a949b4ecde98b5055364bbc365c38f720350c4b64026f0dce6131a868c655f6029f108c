import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useStorageValue } from "@rspress/core/theme";
import clsx from "clsx";
import { Children, forwardRef, isValidElement, useMemo, useState } from "react";
import "./index.css";
function getTabValuesFromChildren(children, defaultValues) {
    if (defaultValues?.every((item)=>isTabItem(item) && item.content)) return defaultValues;
    if (defaultValues && defaultValues.length > 0) return defaultValues.map((item, index)=>{
        if (isTabItem(item)) return item;
        return {
            label: item,
            content: children[index]
        };
    });
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
function isTabItem(item) {
    if (item && 'object' == typeof item && 'label' in item) return true;
    return false;
}
const groupIdPrefix = 'rspress.tabs.';
const Tabs = /*#__PURE__*/ forwardRef((props, ref)=>{
    const { values, defaultIndex, onChange, children: rawChildren, groupId, tabPosition = 'left', className, labelItemClassName, contentItemClassName, keepDOM = true } = props;
    const children = Children.toArray(rawChildren).filter((child)=>!('string' == typeof child && '' === child.trim()) && /*#__PURE__*/ isValidElement(child));
    const tabValues = useMemo(()=>getTabValuesFromChildren(children, values), [
        values,
        children
    ]);
    if (process.env.__SSR_MD__) return /*#__PURE__*/ jsx(Fragment, {
        children: tabValues.map(({ label, content })=>/*#__PURE__*/ jsxs(Fragment, {
                children: [
                    `\n**${label}**\n\n`,
                    content,
                    `\n`
                ]
            }))
    });
    const [activeIndex, setActiveIndex] = useState(defaultIndex ?? 0);
    const [storageIndex, setStorageIndex] = useStorageValue(`${groupIdPrefix}${groupId}`, activeIndex.toString());
    const currentIndex = groupId ? Number(storageIndex) : activeIndex;
    return /*#__PURE__*/ jsxs("div", {
        className: clsx('rp-tabs', className),
        ref: ref,
        children: [
            tabValues.length ? /*#__PURE__*/ jsx("div", {
                className: "rp-tabs__label rp-tabs__label--no-scrollbar",
                style: {
                    justifyContent: 'center' === tabPosition ? 'center' : 'flex-start'
                },
                children: tabValues.map(({ label }, index)=>{
                    const isActive = index === currentIndex;
                    return /*#__PURE__*/ jsx("div", {
                        className: clsx('rp-tabs__label__item', isActive ? 'rp-tabs__label__item--selected' : 'rp-tabs__label__item--not-selected', labelItemClassName),
                        "data-index": index,
                        onClick: ()=>{
                            onChange?.(index);
                            if (groupId) setStorageIndex(index.toString());
                            else setActiveIndex(index);
                        },
                        children: label
                    }, 'string' == typeof label ? label : index);
                })
            }) : null,
            /*#__PURE__*/ jsx("div", {
                className: "rp-tabs__content",
                children: tabValues.map(({ label, content }, index)=>{
                    const isActive = index === currentIndex;
                    if (!keepDOM && !isActive) return null;
                    return /*#__PURE__*/ jsx("div", {
                        className: clsx('rp-tabs__content__item', isActive ? 'rp-tabs__content__item--active' : 'rp-tabs__content__item--hidden', contentItemClassName),
                        "aria-hidden": !isActive,
                        "data-index": index,
                        children: content
                    }, 'string' == typeof label ? label : index);
                })
            })
        ]
    });
});
Tabs.displayName = 'Tabs';
function Tab({ children }) {
    return /*#__PURE__*/ jsx(Fragment, {
        children: children
    });
}
export { Tab, Tabs };
