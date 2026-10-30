import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { isActive } from "../route.js";
const useActiveMatcher = ()=>{
    const { pathname: rawPathname } = useLocation();
    const activeMatcher = useCallback((link)=>{
        const pathname = decodeURIComponent(rawPathname);
        return isActive(link, pathname);
    }, [
        rawPathname
    ]);
    return activeMatcher;
};
export { useActiveMatcher };
