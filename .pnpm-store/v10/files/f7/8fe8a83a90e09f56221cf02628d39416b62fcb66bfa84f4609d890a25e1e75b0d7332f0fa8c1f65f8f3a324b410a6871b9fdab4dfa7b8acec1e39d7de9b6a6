import { useEffect } from "react";
function useClickOutside(ref, handler) {
    useEffect(()=>{
        const listener = (event)=>{
            const refs = Array.isArray(ref) ? ref : [
                ref
            ];
            for (const r of refs){
                const { current: el } = r;
                if (el?.contains(event.target)) return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchend', listener);
        return ()=>{
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchend', listener);
        };
    }, [
        ref,
        handler
    ]);
}
export { useClickOutside };
