/*! LICENSE: LlmsCopyButton.js.LICENSE.txt */
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useI18n } from "@rspress/core/runtime";
import { IconCopy, IconSuccess } from "@rspress/core/theme";
import { useCallback, useRef, useState } from "react";
import { SvgWrapper } from "../SvgWrapper/index.js";
import "./index.css";
import "./LlmsCopyButton.css";
import { copyToClipboard } from "./copy.js";
import { useMdUrl } from "./useMdUrl.js";
/**
 * Inspired from fumadocs docsite
 * @from https://github.com/fuma-nama/fumadocs/blob/5723bbe58ef805a5421a780abf235a10b251be2f/apps/docs/app/docs/%5B...slug%5D/page.client.tsx#L11
 * @license MIT
 */ const cache = new Map();
function LlmsCopyButton(props) {
    const { onClick, ...otherProps } = props;
    const t = useI18n();
    const { pathname } = useMdUrl();
    const [isLoading, setLoading] = useState(false);
    const [isFinished, setFinished] = useState(false);
    const timer = useRef(null);
    const handleClick = useCallback(async ()=>{
        setLoading(true);
        const url = pathname;
        try {
            const content = cache.get(url) ?? await fetch(url).then((res)=>res.text());
            cache.set(url, content);
            await copyToClipboard(content);
        } finally{
            setLoading(false);
            setFinished(true);
            if (timer.current) {
                clearTimeout(timer.current);
                timer.current = null;
            }
            timer.current = window.setTimeout(()=>{
                setFinished(false);
                timer.current = null;
            }, 500);
        }
    }, [
        pathname
    ]);
    if (!pathname) return /*#__PURE__*/ jsx(Fragment, {});
    return /*#__PURE__*/ jsxs("button", {
        ...otherProps,
        disabled: isLoading,
        className: [
            'rp-not-doc',
            'rp-llms-button',
            'rp-llms-copy-button',
            isLoading ? 'rp-llms-copy-button--loading' : '',
            isFinished ? 'rp-llms-copy-button--success' : ''
        ].filter(Boolean).join(' '),
        onClick: onClick ?? handleClick,
        children: [
            /*#__PURE__*/ jsxs("div", {
                className: "rp-llms-copy-button__icon-wrapper",
                children: [
                    /*#__PURE__*/ jsx(SvgWrapper, {
                        icon: IconSuccess,
                        className: "rp-llms-copy-button__icon-success"
                    }),
                    /*#__PURE__*/ jsx(SvgWrapper, {
                        icon: IconCopy,
                        className: "rp-llms-copy-button__icon-copy"
                    })
                ]
            }),
            /*#__PURE__*/ jsx("span", {
                children: t('copyMarkdownText')
            })
        ]
    });
}
export { LlmsCopyButton };
