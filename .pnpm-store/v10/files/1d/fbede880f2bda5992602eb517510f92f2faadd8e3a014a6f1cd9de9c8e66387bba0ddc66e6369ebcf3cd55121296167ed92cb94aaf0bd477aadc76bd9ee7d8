import { jsx } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { text as consumers_text } from "node:stream/consumers";
import { PageContext, ThemeContext, pathnameToRouteService, removeTrailingSlash, withBase } from "@rspress/core/runtime";
import { UnheadProvider } from "@unhead/react/server";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "./App.js";
import { initPageData } from "./initPageData.js";
const DEFAULT_THEME = 'light';
async function preloadRoute(pathname) {
    const route = pathnameToRouteService(pathname);
    await route?.preload();
}
function renderToHtml(app) {
    return new Promise((resolve, reject)=>{
        const passThrough = new PassThrough();
        const { pipe } = renderToPipeableStream(app, {
            progressiveChunkSize: 1 / 0,
            onError (error) {
                reject(error);
            },
            onAllReady () {
                pipe(passThrough);
                consumers_text(passThrough).then(resolve, reject);
            }
        });
    });
}
async function render(routePath, head) {
    const initialPageData = await initPageData(routePath);
    await preloadRoute(routePath);
    const appHtml = await renderToHtml(/*#__PURE__*/ jsx(ThemeContext.Provider, {
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
        appHtml
    };
}
export { routes } from "virtual-routes";
export { render };
