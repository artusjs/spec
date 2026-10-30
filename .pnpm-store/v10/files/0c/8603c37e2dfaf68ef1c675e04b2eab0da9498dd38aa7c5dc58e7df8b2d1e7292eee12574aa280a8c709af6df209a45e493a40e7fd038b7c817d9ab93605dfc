import { jsx } from "react/jsx-runtime";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import { useEffect, useMemo, useRef, useState } from "react";
import { SidebarMenu } from "./index.js";
import { useClickOutside } from "./useClickOutside.js";
function useSidebarMenu() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOutlineOpen, setIsOutlineOpen] = useState(false);
    const sidebarMenuRef = useRef(null);
    const sidebarLayoutRef = useRef(null);
    const asideLayoutRef = useRef(null);
    useEffect(()=>{
        sidebarMenuRef.current && isSidebarOpen && disableBodyScroll(sidebarMenuRef.current, {
            reserveScrollBarGap: true,
            allowTouchMove: ()=>true
        });
        return ()=>{
            clearAllBodyScrollLocks();
        };
    }, [
        isSidebarOpen
    ]);
    useClickOutside([
        sidebarMenuRef,
        sidebarLayoutRef
    ], ()=>{
        setIsSidebarOpen(false);
    });
    useClickOutside([
        sidebarMenuRef,
        asideLayoutRef
    ], ()=>{
        setIsOutlineOpen(false);
    });
    const sidebarMenu = useMemo(()=>/*#__PURE__*/ jsx(SidebarMenu, {
            isSidebarOpen: isSidebarOpen,
            onIsSidebarOpenChange: setIsSidebarOpen,
            isOutlineOpen: isOutlineOpen,
            onIsOutlineOpenChange: setIsOutlineOpen,
            ref: sidebarMenuRef
        }), [
        isOutlineOpen,
        isSidebarOpen,
        setIsOutlineOpen,
        setIsSidebarOpen
    ]);
    return {
        sidebarMenu,
        isOutlineOpen,
        isSidebarOpen,
        sidebarLayoutRef,
        asideLayoutRef
    };
}
export { useSidebarMenu };
