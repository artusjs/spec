import { jsx } from "react/jsx-runtime";
import { ProgressCircle } from "./ProgressCircle.js";
import { useReadPercent } from "./useReadPercent.js";
function ReadPercent({ size, strokeWidth }) {
    const [readPercent] = useReadPercent();
    return /*#__PURE__*/ jsx(ProgressCircle, {
        percent: readPercent,
        size: size,
        strokeWidth: strokeWidth
    });
}
export { ReadPercent };
