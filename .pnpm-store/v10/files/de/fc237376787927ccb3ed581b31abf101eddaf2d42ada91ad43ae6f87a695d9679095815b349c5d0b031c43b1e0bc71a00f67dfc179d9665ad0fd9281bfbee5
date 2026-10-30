import { useLayoutEffect, useState } from "react";
const RESIZE_DEBOUNCE_MS = 150;
function useWindowSize(initialWidth, initialHeight) {
    const [size, setSize] = useState({
        width: initialWidth ?? 1 / 0,
        height: initialHeight ?? 1 / 0
    });
    useLayoutEffect(()=>{
        let timeoutId = null;
        const handleResize = ()=>{
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(()=>{
                setSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }, RESIZE_DEBOUNCE_MS);
        };
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
        window.addEventListener('resize', handleResize);
        return ()=>{
            if (timeoutId) clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return size;
}
export { useWindowSize };
