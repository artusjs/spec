import { jsx, jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import "./index.css";
const ProgressCircle = ({ percent, size = 100, strokeWidth = 8, strokeColor = 'var(--rp-c-brand)', backgroundColor = 'var(--rp-c-divider-light)', className })=>{
    const normalizedPercent = Math.min(100, Math.max(0, percent));
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * radius * Math.PI;
    const offset = circumference - normalizedPercent / 100 * circumference;
    return /*#__PURE__*/ jsxs("svg", {
        width: size,
        height: size,
        className: clsx('rp-progress-circle', className),
        children: [
            /*#__PURE__*/ jsx("circle", {
                cx: size / 2,
                cy: size / 2,
                r: radius,
                strokeLinecap: "round",
                fill: "none",
                stroke: backgroundColor,
                strokeWidth: strokeWidth
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: size / 2,
                cy: size / 2,
                r: radius,
                strokeLinecap: "round",
                fill: "none",
                stroke: strokeColor,
                strokeWidth: strokeWidth,
                strokeDasharray: circumference,
                strokeDashoffset: offset,
                transform: `rotate(-90 ${size / 2} ${size / 2})`,
                style: {
                    transition: 'stroke-dashoffset 0.3s'
                }
            })
        ]
    });
};
export { ProgressCircle };
