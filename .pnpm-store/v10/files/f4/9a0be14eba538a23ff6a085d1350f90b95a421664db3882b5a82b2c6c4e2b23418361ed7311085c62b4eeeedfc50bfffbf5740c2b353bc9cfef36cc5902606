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
    init: ()=>init
});
const getSocketUrlParts_js_namespaceObject = require("./utils/getSocketUrlParts.js");
var getSocketUrlParts_js_default = /*#__PURE__*/ __webpack_require__.n(getSocketUrlParts_js_namespaceObject);
const getUrlFromParts_js_namespaceObject = require("./utils/getUrlFromParts.js");
var getUrlFromParts_js_default = /*#__PURE__*/ __webpack_require__.n(getUrlFromParts_js_namespaceObject);
const getWDSMetadata_js_namespaceObject = require("./utils/getWDSMetadata.js");
var getWDSMetadata_js_default = /*#__PURE__*/ __webpack_require__.n(getWDSMetadata_js_namespaceObject);
function init(messageHandler, resourceQuery) {
    if ('undefined' != typeof __webpack_dev_server_client__) {
        let SocketClient;
        SocketClient = 'default' in __webpack_dev_server_client__ ? __webpack_dev_server_client__.default : __webpack_dev_server_client__;
        const wdsMeta = getWDSMetadata_js_default()(SocketClient);
        const urlParts = getSocketUrlParts_js_default()(resourceQuery, wdsMeta);
        const connection = new SocketClient(getUrlFromParts_js_default()(urlParts, wdsMeta));
        connection.onMessage(function(data) {
            const message = JSON.parse(data);
            messageHandler(message);
        });
    }
}
exports.init = __webpack_exports__.init;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "init"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});
