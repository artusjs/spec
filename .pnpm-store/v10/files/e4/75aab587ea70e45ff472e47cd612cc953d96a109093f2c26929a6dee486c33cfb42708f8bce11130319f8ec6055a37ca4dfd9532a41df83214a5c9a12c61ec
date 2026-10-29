import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
function useScrollReset() {
    const { pathname } = useLocation();
    useLayoutEffect(()=>{
        const decodedHash = decodeURIComponent(window.location.hash);
        if (0 === decodedHash.length) window.scrollTo(0, 0);
    }, [
        pathname
    ]);
}
export { useScrollReset };
