import { jsx } from "react/jsx-runtime";
import { BrowserRouter, PageContext, ThemeContext, removeTrailingSlash, withBase } from "@rspress/core/runtime";
import { useThemeState } from "@theme";
import { UnheadProvider, createHead } from "@unhead/react/client";
import { useMemo, useState } from "react";
import { App } from "./App.js";
const head = createHead();
function ClientApp({ initialPageData = null }) {
    const [data, setData] = useState(initialPageData);
    const [theme, setTheme] = useThemeState();
    return /*#__PURE__*/ jsx(ThemeContext.Provider, {
        value: useMemo(()=>({
                theme,
                setTheme
            }), [
            theme,
            setTheme
        ]),
        children: /*#__PURE__*/ jsx(PageContext.Provider, {
            value: useMemo(()=>({
                    data,
                    setData
                }), [
                data,
                setData
            ]),
            children: /*#__PURE__*/ jsx(BrowserRouter, {
                basename: removeTrailingSlash(withBase('/')),
                children: /*#__PURE__*/ jsx(UnheadProvider, {
                    head: head,
                    children: /*#__PURE__*/ jsx(App, {})
                })
            })
        })
    });
}
export { ClientApp };
