import { jsx } from "react/jsx-runtime";
import { useCallback, useMemo, useRef, useState } from "react";
import { HoverGroup } from "./index.js";
function useHoverGroup(props) {
    const { items, activeMatcher, customChildren, position } = props;
    const closeTimerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const clearCloseTimer = useCallback(()=>{
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    }, []);
    const handleMouseEnter = useCallback(()=>{
        setIsOpen(true);
        clearCloseTimer();
    }, [
        setIsOpen
    ]);
    const handleMouseLeave = useCallback(()=>{
        closeTimerRef.current = window.setTimeout(()=>{
            setIsOpen(false);
        }, 150);
    }, [
        setIsOpen
    ]);
    const hoverGroup = useMemo(()=>/*#__PURE__*/ jsx(HoverGroup, {
            items: items,
            customChildren: customChildren,
            isOpen: isOpen,
            activeMatcher: activeMatcher,
            position: position
        }), [
        items,
        customChildren,
        isOpen,
        activeMatcher
    ]);
    return {
        hoverGroup,
        handleMouseEnter,
        handleMouseLeave
    };
}
export { useHoverGroup };
