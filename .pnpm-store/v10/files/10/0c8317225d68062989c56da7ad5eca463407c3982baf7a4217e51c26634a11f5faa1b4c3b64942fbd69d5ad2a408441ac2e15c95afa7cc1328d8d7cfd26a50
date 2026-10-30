import { Fragment, jsx } from "react/jsx-runtime";
import { useActiveAnchor, useDynamicToc } from "@rspress/core/theme";
import { TocItem } from "./TocItem.js";
const baseHeaderLevel = 2;
function Toc() {
    const headers = useDynamicToc();
    const { activeAnchorId } = useActiveAnchor(headers);
    return /*#__PURE__*/ jsx(Fragment, {
        children: headers.map((header, index)=>/*#__PURE__*/ jsx(TocItem, {
                baseHeaderLevel: baseHeaderLevel,
                header: header,
                active: activeAnchorId === header.id
            }, `${header.depth}_${header.text}_${header.id}_${index}`))
    });
}
export { Toc };
