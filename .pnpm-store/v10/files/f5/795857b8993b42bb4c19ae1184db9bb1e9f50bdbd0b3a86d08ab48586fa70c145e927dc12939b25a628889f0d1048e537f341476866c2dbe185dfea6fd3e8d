import { useLocation } from "@rspress/core/runtime";
import { useLayoutEffect } from "react";
function parseCSSLength(value) {
    if (!value || 'auto' === value || 'none' === value) return 0;
    const numValue = Number.parseFloat(value);
    if (Number.isNaN(numValue)) return 0;
    return numValue;
}
function getTargetTop(element) {
    const scrollPaddingTop = parseCSSLength(window.getComputedStyle(document.documentElement).getPropertyValue('scroll-padding-top'));
    const targetTop = window.scrollY + element.getBoundingClientRect().top - scrollPaddingTop;
    return Math.round(targetTop);
}
function scrollToTarget(target) {
    const offsetTop = getTargetTop(target);
    window.scrollTo({
        left: 0,
        top: offsetTop
    });
}
function useScrollAfterNav() {
    const location = useLocation();
    useLayoutEffect(()=>{
        if ("u" < typeof window) return;
        const decodedHash = decodeURIComponent(window.location.hash);
        if (decodedHash.length > 0) {
            const target = document.getElementById(decodedHash.slice(1));
            if (target) scrollToTarget(target);
        }
    }, [
        location,
        location.pathname
    ]);
}
export { useScrollAfterNav };
