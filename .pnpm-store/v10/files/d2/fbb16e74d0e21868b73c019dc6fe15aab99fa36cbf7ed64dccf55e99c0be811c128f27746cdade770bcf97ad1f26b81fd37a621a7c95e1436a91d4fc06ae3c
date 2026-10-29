import { jsx } from "react/jsx-runtime";
import { PageContext, ThemeContext, pathnameToRouteService, removeTrailingSlash, withBase } from "@rspress/core/runtime";
import { UnheadProvider } from "@unhead/react/server";
import { renderToMarkdownString } from "react-render-to-markdown";
import { StaticRouter } from "react-router-dom";
import { App } from "./App.js";
import { initPageData } from "./initPageData.js";
const DEFAULT_THEME = 'light';
async function preloadRoute(pathname) {
    const route = pathnameToRouteService(pathname);
    await route?.preload();
}
async function render(routePath, head) {
    const initialPageData = await initPageData(routePath);
    await preloadRoute(routePath);
    const appMd = await renderToMarkdownString(/*#__PURE__*/ jsx(ThemeContext.Provider, {
        value: {
            theme: DEFAULT_THEME
        },
        children: /*#__PURE__*/ jsx(PageContext.Provider, {
            value: {
                data: initialPageData
            },
            children: /*#__PURE__*/ jsx(StaticRouter, {
                location: withBase(routePath),
                basename: removeTrailingSlash(withBase('/')),
                children: /*#__PURE__*/ jsx(UnheadProvider, {
                    value: head,
                    children: /*#__PURE__*/ jsx(App, {})
                })
            })
        })
    }));
    return {
        appMd
    };
}
export { routes } from "virtual-routes";
export { render };
