import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useI18n } from "@rspress/core/runtime";
import { IconSearch, SvgWrapper } from "@rspress/core/theme";
import { useEffect, useState } from "react";
import "./SearchButton.css";
function SearchButton({ setFocused }) {
    const [metaKey, setMetaKey] = useState(null);
    const t = useI18n();
    useEffect(()=>{
        setMetaKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl');
    }, []);
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsxs("button", {
                className: "rp-search-button",
                onClick: ()=>setFocused(true),
                children: [
                    /*#__PURE__*/ jsxs("div", {
                        className: "rp-search-button__content",
                        children: [
                            /*#__PURE__*/ jsx(SvgWrapper, {
                                icon: IconSearch,
                                className: "rp-search-button__icon"
                            }),
                            /*#__PURE__*/ jsx("span", {
                                className: "rp-search-button__word",
                                children: t('searchPlaceholderText')
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsxs("div", {
                        className: "rp-search-button__hotkey",
                        style: {
                            opacity: metaKey ? 1 : 0
                        },
                        children: [
                            /*#__PURE__*/ jsx("span", {
                                children: metaKey
                            }),
                            /*#__PURE__*/ jsx("span", {
                                children: "K"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx("div", {
                className: "rp-search-button--mobile",
                onClick: ()=>setFocused(true),
                children: /*#__PURE__*/ jsx(SvgWrapper, {
                    icon: IconSearch
                })
            })
        ]
    });
}
export { SearchButton };
