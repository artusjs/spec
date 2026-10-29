import { jsx } from "react/jsx-runtime";
import { removeBase } from "@rspress/core/runtime";
import { startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { ClientApp } from "./ClientApp.js";
import { initPageData } from "./initPageData.js";
async function renderInBrowser() {
    const container = document.getElementById('__rspress_root');
    const initialPageData = await initPageData(removeBase(window.location.pathname));
    startTransition(()=>{
        hydrateRoot(container, /*#__PURE__*/ jsx(ClientApp, {
            initialPageData: initialPageData
        }), {
            onRecoverableError (error, errorInfo) {
                if (error instanceof Error) console.warn('hydrateRoot recoverable error:', error, errorInfo);
            }
        });
    });
}
renderInBrowser();
