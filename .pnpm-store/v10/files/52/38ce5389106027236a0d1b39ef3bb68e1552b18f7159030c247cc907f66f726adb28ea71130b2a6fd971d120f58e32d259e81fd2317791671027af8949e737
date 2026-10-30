import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useActiveMatcher } from "@rspress/core/runtime";
import { IconArrowRight, SvgWrapper, useLinkNavigate } from "@rspress/core/theme";
import clsx from "clsx";
import { SidebarDivider } from "./SidebarDivider.js";
import "./SidebarGroup.css";
import { SidebarItem, SidebarItemRaw } from "./SidebarItem.js";
import { SidebarSectionHeader } from "./SidebarSectionHeader.js";
import { isSidebarDivider, isSidebarGroup, isSidebarSectionHeader } from "./utils.js";
const CollapsibleIcon = ({ collapsed })=>/*#__PURE__*/ jsx("div", {
        style: {
            cursor: 'pointer',
            transition: 'transform 0.2s ease-out',
            transform: collapsed ? 'rotate(0deg)' : 'rotate(90deg)'
        },
        children: /*#__PURE__*/ jsx(SvgWrapper, {
            icon: IconArrowRight
        })
    });
function SidebarGroup(props) {
    const activeMatcher = useActiveMatcher();
    const { item, depth, id, setSidebarData, className } = props;
    const navigate = useLinkNavigate();
    const active = item.link && activeMatcher(item.link);
    const { collapsed = false, collapsible = true } = item;
    const toggleCollapse = ()=>{
        setSidebarData((sidebarData)=>{
            const newSidebarData = [
                ...sidebarData
            ];
            const indexes = id.split('-').map(Number);
            const initialIndex = indexes.shift();
            const root = newSidebarData[initialIndex];
            let current = root;
            for (const index of indexes)current = current.items[index];
            if ('items' in current) current.collapsed = !current.collapsed;
            return newSidebarData;
        });
    };
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx(SidebarItemRaw, {
                active: Boolean(active),
                link: item.link,
                tag: item.tag,
                text: item.text,
                context: item.context,
                className: clsx('rp-sidebar-group', className),
                depth: depth,
                onClick: (e)=>{
                    if (!active && item.link && !collapsed) return void navigate(item.link);
                    if (item.link) {
                        e.stopPropagation();
                        navigate(item.link).then(()=>{
                            collapsible && toggleCollapse();
                        });
                        return;
                    }
                    e.stopPropagation();
                    collapsible && toggleCollapse();
                },
                right: collapsible && /*#__PURE__*/ jsx(CollapsibleIcon, {
                    collapsed: collapsed
                })
            }),
            /*#__PURE__*/ jsx("div", {
                style: {
                    display: 'grid',
                    gridTemplateRows: collapsed ? '0fr' : '1fr',
                    transition: 'grid-template-rows 0.2s ease-out'
                },
                children: /*#__PURE__*/ jsx("div", {
                    style: {
                        overflow: 'hidden'
                    },
                    children: item.items?.map((item, index)=>isSidebarGroup(item) ? /*#__PURE__*/ jsx(SidebarGroup, {
                            id: `${id}-${index}`,
                            depth: depth + 1,
                            item: item,
                            setSidebarData: setSidebarData,
                            className: "rp-sidebar-item--group-item"
                        }, `${id}-${index}`) : isSidebarDivider(item) ? /*#__PURE__*/ jsx(SidebarDivider, {
                            depth: depth + 1,
                            dividerType: item.dividerType
                        }, index) : isSidebarSectionHeader(item) ? /*#__PURE__*/ jsx(SidebarSectionHeader, {
                            sectionHeaderText: item.sectionHeaderText
                        }, index) : /*#__PURE__*/ jsx(SidebarItem, {
                            item: item,
                            depth: depth + 1,
                            className: "rp-sidebar-item--group-item"
                        }, index))
                })
            })
        ]
    });
}
export { SidebarGroup };
