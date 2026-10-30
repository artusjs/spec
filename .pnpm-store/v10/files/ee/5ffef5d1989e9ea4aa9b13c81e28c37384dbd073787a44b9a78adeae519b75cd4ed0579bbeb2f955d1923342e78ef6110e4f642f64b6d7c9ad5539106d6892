import { useLocation } from "@rspress/core/runtime";
import { useEffect, useState } from "react";
function parseCSSLength(value) {
    if (!value || 'auto' === value || 'none' === value) return 0;
    const numValue = Number.parseFloat(value);
    if (Number.isNaN(numValue)) return 0;
    return numValue;
}
const useActiveAnchor = (headers)=>{
    const [activeAnchorId, setActiveAnchorId] = useState();
    const [scrolledHeader, setScrolledHeader] = useState();
    const { hash } = useLocation();
    useEffect(()=>{
        if ("u" < typeof window) return;
        const handleScroll = ()=>{
            const scrollPaddingTop = parseCSSLength(window.getComputedStyle(document.documentElement).getPropertyValue('scroll-padding-top'));
            const topOffset = scrollPaddingTop - 5;
            const offsets = headers.map((header)=>{
                const el = document.getElementById(header.id);
                if (!el) return {
                    id: header.id,
                    top: 1 / 0
                };
                const rect = el.getBoundingClientRect();
                return {
                    id: header.id,
                    top: rect.top
                };
            });
            const scrolledIds = offsets.filter((offset)=>offset.top < topOffset).map((offset)=>offset.id);
            const visibleIds = offsets.filter((offset)=>offset.top >= topOffset && offset.top <= window.innerHeight).map((offset)=>offset.id);
            const scrolledHeaderId = scrolledIds[scrolledIds.length - 1];
            const scrolledHeader = headers.find((header)=>header.id === scrolledHeaderId);
            0 === visibleIds.length ? setActiveAnchorId(scrolledHeaderId) : setActiveAnchorId(visibleIds[0]);
            setScrolledHeader(scrolledHeader);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, [
        headers,
        hash
    ]);
    return {
        scrolledHeader,
        activeAnchorId
    };
};
export { useActiveAnchor };
