import { jsx, jsxs } from "react/jsx-runtime";
import { getCustomMDXComponent } from "@rspress/core/theme";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { codeToHast, createCssVariablesTheme } from "shiki";
const cssVariablesTheme = createCssVariablesTheme({
    name: 'css-variables',
    variablePrefix: '--shiki-',
    variableDefaults: {},
    fontStyle: true
});
const useLatest = (value)=>{
    const ref = useRef(value);
    ref.current = value;
    return ref;
};
function CodeBlockRuntime({ lang, title, code, shikiOptions, codeButtonGroupProps, children: _, containerElementClassName, onRendered, wrapCode, lineNumbers, fold, height }) {
    const mdxComponents = useMemo(()=>getCustomMDXComponent(), []);
    const { pre: ShikiPre, code: Code, ...otherMdxComponents } = mdxComponents;
    const fallback = useMemo(()=>/*#__PURE__*/ jsx(ShikiPre, {
            title: title,
            lang: lang,
            wrapCode: wrapCode,
            lineNumbers: lineNumbers,
            fold: fold,
            height: height,
            containerElementClassName: containerElementClassName,
            codeButtonGroupProps: codeButtonGroupProps,
            className: "shiki css-variables",
            children: /*#__PURE__*/ jsx(Code, {
                style: {
                    padding: '1rem 1.25rem'
                },
                children: code
            })
        }), [
        title,
        lang,
        wrapCode,
        lineNumbers,
        fold,
        height,
        containerElementClassName,
        codeButtonGroupProps,
        code
    ]);
    const [child, setChild] = useState(fallback);
    const codeRef = useLatest(code);
    useEffect(()=>{
        const highlightCode = async ()=>{
            const hast = await codeToHast(code, {
                lang,
                theme: cssVariablesTheme,
                ...shikiOptions
            });
            if (codeRef.current.length !== code.length) return;
            const reactNode = toJsxRuntime(hast, {
                jsx: jsx,
                jsxs: jsxs,
                development: false,
                components: {
                    ...otherMdxComponents,
                    pre: (props)=>/*#__PURE__*/ jsx(ShikiPre, {
                            title: title,
                            lang: lang,
                            containerElementClassName: containerElementClassName,
                            codeButtonGroupProps: codeButtonGroupProps,
                            wrapCode: wrapCode,
                            lineNumbers: lineNumbers,
                            fold: fold,
                            height: height,
                            ...props
                        }),
                    code: (props)=>/*#__PURE__*/ jsx(Code, {
                            ...props
                        })
                },
                Fragment: Fragment
            });
            setChild(reactNode);
        };
        highlightCode();
    }, [
        code,
        codeButtonGroupProps,
        containerElementClassName,
        lang,
        lineNumbers,
        fold,
        height,
        shikiOptions,
        title,
        wrapCode
    ]);
    useEffect(()=>{
        if (child) onRendered?.();
    }, [
        child
    ]);
    return child;
}
export { CodeBlockRuntime };
