import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useSite } from "@rspress/core/runtime";
import { IconWrap, IconWrapped, SvgWrapper } from "@rspress/core/theme";
import clsx from "clsx";
import { useRef, useState } from "react";
import "./index.css";
import { CopyCodeButton } from "./CopyCodeButton.js";
const useCodeButtonGroup = (initialWrapCode)=>{
    const { site } = useSite();
    const { defaultWrapCode } = site.markdown;
    const [wrapCode, setWrapCode] = useState(initialWrapCode ?? defaultWrapCode);
    const copyElementRef = useRef(null);
    const toggleWrapCode = ()=>{
        setWrapCode(!wrapCode);
    };
    return {
        copyElementRef,
        wrapCode,
        toggleWrapCode
    };
};
function CodeButtonGroup({ wrapCode, toggleWrapCode, copyElementRef, showWrapCodeButton = true, showCopyButton = true }) {
    return /*#__PURE__*/ jsx(Fragment, {
        children: /*#__PURE__*/ jsxs("div", {
            className: "rp-code-button-group",
            children: [
                showWrapCodeButton && /*#__PURE__*/ jsxs("button", {
                    className: clsx('rp-code-button-group__button', 'rp-code-wrap-button', wrapCode && 'rp-code-wrap-button--wrapped'),
                    onClick: ()=>toggleWrapCode(),
                    title: "Toggle code wrap",
                    children: [
                        /*#__PURE__*/ jsx(SvgWrapper, {
                            icon: IconWrapped,
                            className: "rp-code-button-group__icon rp-code-button-group__icon--wrapped"
                        }),
                        /*#__PURE__*/ jsx(SvgWrapper, {
                            icon: IconWrap,
                            className: "rp-code-button-group__icon rp-code-button-group__icon--wrap"
                        })
                    ]
                }),
                showCopyButton && /*#__PURE__*/ jsx(CopyCodeButton, {
                    codeBlockRef: copyElementRef
                })
            ]
        })
    });
}
export { CodeButtonGroup, useCodeButtonGroup };
