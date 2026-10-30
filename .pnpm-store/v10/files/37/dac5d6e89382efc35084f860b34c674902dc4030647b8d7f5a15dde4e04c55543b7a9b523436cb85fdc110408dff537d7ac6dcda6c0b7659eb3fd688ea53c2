import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useFrontmatter, useI18n, useLocation } from "@rspress/core/runtime";
import { IconArrowRight, IconMenu, ReadPercent, SvgWrapper, renderInlineMarkdown, useActiveAnchor, useDynamicToc } from "@rspress/core/theme";
import { forwardRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./index.css";
const SidebarMenu = /*#__PURE__*/ forwardRef(({ isSidebarOpen, onIsSidebarOpenChange, isOutlineOpen, onIsOutlineOpenChange }, forwardedRef)=>{
    const sidebarMenuRef = useRef(null);
    const t = useI18n();
    const { pathname, hash } = useLocation();
    const headers = useDynamicToc();
    const { scrolledHeader } = useActiveAnchor(headers);
    const { frontmatter: { sidebar: showSidebar = true, outline: showOutline = true } } = useFrontmatter();
    function openSidebar() {
        onIsSidebarOpenChange(true);
    }
    function closeSidebar() {
        onIsSidebarOpenChange(false);
    }
    function openOutline() {
        onIsOutlineOpenChange(!isOutlineOpen);
    }
    function closeOutline() {
        onIsOutlineOpenChange(false);
    }
    useEffect(()=>{
        closeSidebar();
    }, [
        pathname
    ]);
    useEffect(()=>{
        if (hash) closeOutline();
    }, [
        hash
    ]);
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsxs("div", {
                className: "rp-sidebar-menu",
                ref: (ref)=>{
                    sidebarMenuRef.current = ref;
                    if ('function' == typeof forwardedRef) forwardedRef(sidebarMenuRef.current);
                    else if (forwardedRef) forwardedRef.current = sidebarMenuRef.current;
                },
                children: [
                    showSidebar ? /*#__PURE__*/ jsxs("button", {
                        type: "button",
                        onClick: openSidebar,
                        className: "rp-sidebar-menu__left",
                        children: [
                            /*#__PURE__*/ jsx(SvgWrapper, {
                                icon: IconMenu
                            }),
                            /*#__PURE__*/ jsx("span", {
                                children: t('menuTitle')
                            })
                        ]
                    }) : /*#__PURE__*/ jsx("div", {
                        className: "rp-sidebar-menu__left"
                    }),
                    showOutline ? /*#__PURE__*/ jsxs("button", {
                        type: "button",
                        disabled: 0 === headers.length,
                        onClick: (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            openOutline();
                        },
                        className: "rp-sidebar-menu__right",
                        children: [
                            scrolledHeader?.text ? /*#__PURE__*/ jsx("span", {
                                className: "rp-sidebar-menu__right__text rp-doc",
                                ...renderInlineMarkdown(scrolledHeader.text)
                            }) : /*#__PURE__*/ jsx("span", {
                                className: "rp-sidebar-menu__right__text",
                                children: t('outlineTitle')
                            }),
                            /*#__PURE__*/ jsx(ReadPercent, {
                                size: 14,
                                strokeWidth: 2
                            }),
                            0 !== headers.length && /*#__PURE__*/ jsx(SvgWrapper, {
                                icon: IconArrowRight,
                                className: "rp-sidebar-menu__right__icon",
                                style: {
                                    transform: isOutlineOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease-out'
                                }
                            })
                        ]
                    }) : /*#__PURE__*/ jsx("div", {
                        className: "rp-sidebar-menu__right"
                    })
                ]
            }),
            (isSidebarOpen || isOutlineOpen) && /*#__PURE__*/ createPortal(/*#__PURE__*/ jsx("div", {
                onClick: closeSidebar,
                className: "rp-sidebar-menu__mask"
            }), document.getElementById('__rspress_modal_container'))
        ]
    });
});
export { SidebarMenu };
