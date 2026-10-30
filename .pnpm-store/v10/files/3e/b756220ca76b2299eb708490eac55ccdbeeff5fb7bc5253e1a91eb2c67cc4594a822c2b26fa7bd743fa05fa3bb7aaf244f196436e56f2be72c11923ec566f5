import { Fragment, jsx } from "react/jsx-runtime";
import { useSidebarDynamic } from "@rspress/core/runtime";
import { SidebarDivider } from "./SidebarDivider.js";
import { SidebarGroup } from "./SidebarGroup.js";
import { SidebarItem } from "./SidebarItem.js";
import { SidebarSectionHeader } from "./SidebarSectionHeader.js";
import { isSidebarDivider, isSidebarGroup, isSidebarSectionHeader } from "./utils.js";
function Sidebar() {
    const [sidebarData, setSidebarData] = useSidebarDynamic();
    return /*#__PURE__*/ jsx(SidebarList, {
        sidebarData: sidebarData,
        setSidebarData: setSidebarData
    });
}
function SidebarList({ sidebarData, setSidebarData }) {
    return /*#__PURE__*/ jsx(Fragment, {
        children: sidebarData.map((item, index)=>/*#__PURE__*/ jsx(SidebarListItem, {
                item: item,
                index: index,
                setSidebarData: setSidebarData
            }, index))
    });
}
function SidebarListItem(props) {
    const { item, index, setSidebarData } = props;
    if (isSidebarDivider(item)) return /*#__PURE__*/ jsx(SidebarDivider, {
        depth: 0,
        dividerType: item.dividerType
    }, index);
    if (isSidebarSectionHeader(item)) return /*#__PURE__*/ jsx(SidebarSectionHeader, {
        sectionHeaderText: item.sectionHeaderText,
        tag: item.tag
    }, index);
    if (isSidebarGroup(item)) return /*#__PURE__*/ jsx(SidebarGroup, {
        id: String(index),
        item: item,
        depth: 0,
        setSidebarData: setSidebarData
    }, `${item.text}-${index}`);
    return /*#__PURE__*/ jsx(SidebarItem, {
        item: item,
        depth: 0
    }, index);
}
export { Sidebar, SidebarList };
