import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { IconClose, Link, SvgWrapper, mergeRefs } from "@rspress/core/theme";
import clsx from "clsx";
import { forwardRef, useEffect, useState } from "react";
import "./index.css";
const Banner = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { href, message, display = true, className, storageKey = 'rp-banner-closed', storage = 'localStorage', customChildren } = props;
    const [height, setHeight] = useState(36);
    const ref = mergeRefs(forwardedRef, (element)=>{
        if (element?.offsetHeight) setHeight(element?.offsetHeight);
    });
    const [disable, setDisable] = useState(false);
    useEffect(()=>{
        if ("u" < typeof window || !storage || !storageKey) return;
        setDisable(Boolean(window[storage].getItem(storageKey)));
    }, []);
    if (!display || disable) return null;
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx("div", {
                className: clsx('rp-banner', className),
                ref: ref,
                children: customChildren ?? /*#__PURE__*/ jsxs(Fragment, {
                    children: [
                        /*#__PURE__*/ jsx(Link, {
                            href: href,
                            className: "rp-banner__link",
                            children: message
                        }),
                        /*#__PURE__*/ jsx(SvgWrapper, {
                            icon: IconClose,
                            onClick: ()=>{
                                setDisable(true);
                                if (storage) window[storage].setItem(storageKey, 'true');
                            },
                            className: "rp-banner__close"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx("style", {
                children: `:root {--rp-banner-height: ${height}px;}`
            })
        ]
    });
});
export { Banner };
