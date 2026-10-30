import { useLocation } from "@rspress/core/runtime";
import { useEffect, useState } from "react";
function useNavScreen() {
    const { pathname, hash } = useLocation();
    const [isScreenOpen, setIsScreenOpen] = useState(false);
    function openScreen() {
        setIsScreenOpen(true);
        window.addEventListener('resize', closeScreenOnTabletWindow);
    }
    function closeScreen() {
        setIsScreenOpen(false);
        window.removeEventListener('resize', closeScreenOnTabletWindow);
    }
    function toggleScreen() {
        if (isScreenOpen) closeScreen();
        else openScreen();
    }
    useEffect(()=>{
        closeScreen();
    }, [
        pathname,
        hash
    ]);
    function closeScreenOnTabletWindow() {
        window.outerWidth >= 768 && closeScreen();
    }
    return {
        isScreenOpen,
        openScreen,
        closeScreen,
        toggleScreen
    };
}
export { useNavScreen };
