import { jsx, jsxs } from "react/jsx-runtime";
import { useI18n } from "@rspress/core/runtime";
import { IconCopy, IconSuccess, SvgWrapper } from "@rspress/core/theme";
import { useCallback, useRef, useState } from "react";
import { copyToClipboard } from "./copy.js";
import { useMdUrl } from "./useMdUrl.js";
const cache = new Map();
function LlmsCopyRow() {
    const t = useI18n();
    const { pathname } = useMdUrl();
    const [isLoading, setLoading] = useState(false);
    const [isFinished, setFinished] = useState(false);
    const timer = useRef(null);
    const handleClick = useCallback(async ()=>{
        if (!pathname) return;
        setLoading(true);
        try {
            const content = cache.get(pathname) ?? await fetch(pathname).then((res)=>res.text());
            cache.set(pathname, content);
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
            }, 1500);
        }
    }, [
        pathname
    ]);
    if (!pathname) return null;
    return /*#__PURE__*/ jsxs("button", {
        className: "rp-outline__action-row",
        onClick: handleClick,
        disabled: isLoading,
        children: [
            /*#__PURE__*/ jsx(SvgWrapper, {
                icon: isFinished ? IconSuccess : IconCopy
            }),
            /*#__PURE__*/ jsx("span", {
                children: t('copyMarkdownText')
            })
        ]
    });
}
export { LlmsCopyRow };
