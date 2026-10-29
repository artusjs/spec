"use strict";
var __webpack_require__ = {};
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
    default: ()=>urlFromParts
});
function urlFromParts(urlParts, metadata = {}) {
    let fullProtocol = 'http:';
    if (urlParts.protocol) fullProtocol = urlParts.protocol;
    if (metadata.enforceWs) fullProtocol = fullProtocol.replace(/^(?:http|.+-extension|file)/i, 'ws');
    fullProtocol = `${fullProtocol}//`;
    let fullHost = urlParts.hostname;
    if (urlParts.auth) {
        const fullAuth = `${urlParts.auth.split(':').map(encodeURIComponent).join(':')}@`;
        fullHost = fullAuth + fullHost;
    }
    if (urlParts.port) fullHost = `${fullHost}:${urlParts.port}`;
    const url = new URL(urlParts.pathname, fullProtocol + fullHost);
    return url.href;
}
exports["default"] = __webpack_exports__["default"];
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});
