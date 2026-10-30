"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    default: ()=>getSocketUrlParts
});
const external_getCurrentScriptSource_js_namespaceObject = require("./getCurrentScriptSource.js");
var external_getCurrentScriptSource_js_default = /*#__PURE__*/ __webpack_require__.n(external_getCurrentScriptSource_js_namespaceObject);
function getSocketUrlParts(resourceQuery, metadata = {}) {
    const urlParts = {};
    if (resourceQuery) {
        const parsedQuery = {};
        const searchParams = new URLSearchParams(resourceQuery.slice(1));
        searchParams.forEach((value, key)=>{
            parsedQuery[key] = value;
        });
        urlParts.hostname = parsedQuery.sockHost;
        urlParts.pathname = parsedQuery.sockPath;
        urlParts.port = parsedQuery.sockPort;
        if (parsedQuery.sockProtocol) urlParts.protocol = `${parsedQuery.sockProtocol}:`;
    } else {
        const scriptSource = external_getCurrentScriptSource_js_default()();
        let url = {};
        try {
            url = new URL(scriptSource, window.location.href);
        } catch (e) {}
        if (url.username) {
            urlParts.auth = url.username;
            if (url.password) urlParts.auth += `:${url.password}`;
        }
        if ('null' !== url.origin) urlParts.hostname = url.hostname;
        urlParts.protocol = url.protocol;
        urlParts.port = url.port;
    }
    if (!urlParts.pathname) if (4 === metadata.version) urlParts.pathname = '/ws';
    else urlParts.pathname = '/sockjs-node';
    const isEmptyHostname = '0.0.0.0' === urlParts.hostname || '[::]' === urlParts.hostname || !urlParts.hostname;
    if (isEmptyHostname && window.location.hostname && 0 === window.location.protocol.indexOf('http')) urlParts.hostname = window.location.hostname;
    if (!urlParts.protocol || urlParts.hostname && (isEmptyHostname || 'https:' === window.location.protocol)) urlParts.protocol = window.location.protocol;
    if (!urlParts.port) urlParts.port = window.location.port;
    if (!urlParts.hostname || !urlParts.pathname) throw new Error("[React Refresh] Failed to get an URL for the socket connection.\nThis usually means that the current executed script doesn't have a `src` attribute set.\nYou should either specify the socket path parameters under the `devServer` key in your Rspack config, or use the `overlay` option.\nhttps://rspack.rs/guide/tech/react#fast-refresh");
    return {
        auth: urlParts.auth,
        hostname: urlParts.hostname,
        pathname: urlParts.pathname,
        protocol: urlParts.protocol,
        port: urlParts.port || void 0
    };
}
exports["default"] = __webpack_exports__["default"];
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});
