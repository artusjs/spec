import { jsx, jsxs } from "react/jsx-runtime";
import "react";
const SvgLoading = (props)=>/*#__PURE__*/ jsx("svg", {
        width: 32,
        height: 32,
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ jsxs("g", {
            fill: "none",
            stroke: "var(--rp-c-brand)",
            strokeLinecap: "round",
            strokeWidth: 2,
            children: [
                /*#__PURE__*/ jsx("path", {
                    strokeDasharray: 60,
                    strokeDashoffset: 60,
                    strokeOpacity: 0.3,
                    d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z",
                    children: /*#__PURE__*/ jsx("animate", {
                        fill: "freeze",
                        attributeName: "stroke-dashoffset",
                        dur: "1.3s",
                        values: "60;0"
                    })
                }),
                /*#__PURE__*/ jsxs("path", {
                    strokeDasharray: 15,
                    strokeDashoffset: 15,
                    d: "M12 3a9 9 0 0 1 9 9",
                    children: [
                        /*#__PURE__*/ jsx("animate", {
                            fill: "freeze",
                            attributeName: "stroke-dashoffset",
                            dur: "0.3s",
                            values: "15;0"
                        }),
                        /*#__PURE__*/ jsx("animateTransform", {
                            attributeName: "transform",
                            dur: "1.5s",
                            repeatCount: "indefinite",
                            type: "rotate",
                            values: "0 12 12;360 12 12"
                        })
                    ]
                })
            ]
        })
    });
var loading = SvgLoading;
export default loading;
