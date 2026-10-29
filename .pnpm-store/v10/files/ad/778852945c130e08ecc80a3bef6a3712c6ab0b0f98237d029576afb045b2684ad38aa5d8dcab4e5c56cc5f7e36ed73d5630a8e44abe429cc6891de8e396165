import { jsx } from "react/jsx-runtime";
import { CodeBlock } from "@rspress/core/theme";
function ShikiPre({ title, lang, wrapCode, lineNumbers, fold, height, containerElementClassName, codeButtonGroupProps, ...otherProps }) {
    return /*#__PURE__*/ jsx(CodeBlock, {
        title: title,
        lang: lang,
        wrapCode: wrapCode,
        lineNumbers: lineNumbers,
        fold: fold,
        height: height,
        containerElementClassName: containerElementClassName,
        codeButtonGroupProps: codeButtonGroupProps,
        children: /*#__PURE__*/ jsx("pre", {
            ...otherProps,
            "data-lang": lang,
            "data-title": title
        })
    });
}
export { ShikiPre };
