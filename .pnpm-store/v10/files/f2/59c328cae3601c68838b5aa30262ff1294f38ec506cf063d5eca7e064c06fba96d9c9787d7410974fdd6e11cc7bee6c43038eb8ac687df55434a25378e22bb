"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazyWithPreload = void 0;
var react_1 = require("react");
function lazyWithPreload(factory) {
    var ReactLazyComponent = (0, react_1.lazy)(factory);
    var PreloadedComponent;
    var factoryPromise;
    var Component = (0, react_1.forwardRef)(function LazyWithPreload(props, ref) {
        // Once one of these is chosen, we must ensure that it continues to be
        // used for all subsequent renders, otherwise it can cause the
        // underlying component to be unmounted and remounted.
        var ComponentToRender = (0, react_1.useRef)(PreloadedComponent !== null && PreloadedComponent !== void 0 ? PreloadedComponent : ReactLazyComponent);
        return (0, react_1.createElement)(ComponentToRender.current, Object.assign(ref ? { ref: ref } : {}, props));
    });
    var LazyWithPreload = Component;
    LazyWithPreload.preload = function () {
        if (!factoryPromise) {
            factoryPromise = factory().then(function (module) {
                PreloadedComponent = module.default;
                return PreloadedComponent;
            });
        }
        return factoryPromise;
    };
    return LazyWithPreload;
}
exports.lazyWithPreload = lazyWithPreload;
exports.default = lazyWithPreload;
