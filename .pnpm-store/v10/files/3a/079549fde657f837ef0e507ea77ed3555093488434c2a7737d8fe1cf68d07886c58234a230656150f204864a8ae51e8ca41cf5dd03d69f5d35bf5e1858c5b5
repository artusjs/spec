import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavTransparent } from "./useNavTransparent.js";
import "./index.css";
import clsx from "clsx";
function HomeBackground({ className, ...otherProps }) {
    const styleDom = useNavTransparent();
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            styleDom,
            /*#__PURE__*/ jsx("div", {
                className: clsx('rp-home-background', className),
                ...otherProps
            })
        ]
    });
}
export { HomeBackground };
