import { jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
const useCardAnimation = ()=>{
    const [pageX, setPageX] = useState(null);
    const [pageY, setPageY] = useState(null);
    const [isHovering, setIsHovering] = useState(false);
    const ref = useRef(null);
    const handleMove = ({ pageX, pageY })=>{
        setPageX(pageX);
        setPageY(pageY);
    };
    const handleTouchMove = (evt)=>{
        evt.preventDefault();
        const { pageX, pageY } = evt.touches[0];
        handleMove({
            pageX,
            pageY
        });
    };
    let shine;
    let shineBg;
    let container;
    let outerContainer;
    const handleEnter = ()=>{
        setIsHovering(true);
    };
    const handleLeave = ()=>{
        setIsHovering(false);
    };
    const ele = ref.current;
    if (pageX && pageY && ele && isHovering) {
        const rootElemWidth = ele.clientWidth || ele.offsetWidth || ele.scrollWidth;
        const rootElemHeight = ele.clientHeight || ele.offsetHeight || ele.scrollHeight;
        const bodyScrollTop = document.body.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
        const bodyScrollLeft = document.body.scrollLeft;
        const offsets = ele.getBoundingClientRect();
        const wMultiple = 320 / rootElemWidth;
        const multiple = 0.05 * wMultiple;
        const offsetX = 0.52 - (pageX - offsets.left - bodyScrollLeft) / rootElemWidth;
        const offsetY = 0.52 - (pageY - offsets.top - bodyScrollTop) / rootElemHeight;
        const dy = pageY - offsets.top - bodyScrollTop - rootElemHeight / 2;
        const dx = pageX - offsets.left - bodyScrollLeft - rootElemWidth / 2;
        const yRotate = (offsetX - dx) * multiple;
        const xRotate = (dy - offsetY) * (Math.min(offsets.width / offsets.height, 1) * multiple);
        const arad = Math.atan2(dy, dx);
        const rawAngle = 180 * arad / Math.PI - 90;
        const angle = rawAngle < 0 ? rawAngle + 360 : rawAngle;
        shine = `translateX(${offsetX - 0.1}px) translateY(${offsetY - 0.1}px)`;
        shineBg = `linear-gradient(${angle}deg, rgba(255, 255, 255, ${(pageY - offsets.top - bodyScrollTop) / rootElemHeight * 0.2}) 0%, rgba(255, 255, 255, 0) 50%)`;
        container = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
        outerContainer = `perspective(${2 * rootElemWidth}px)`;
    } else {
        shine = '';
        shineBg = '';
        container = '';
        outerContainer = '';
    }
    const outerProps = {
        style: {
            transform: outerContainer,
            transformStyle: 'preserve-3d'
        },
        onMouseEnter: handleEnter,
        onMouseLeave: handleLeave,
        onMouseMove: handleMove,
        onTouchMove: handleTouchMove,
        onTouchStart: handleEnter,
        onTouchEnd: handleLeave
    };
    const outerRef = ref;
    const innerProps = {
        style: {
            transform: container
        }
    };
    const shineDom = /*#__PURE__*/ jsx("div", {
        className: "rp-home-feature__item__shine",
        style: {
            position: 'absolute',
            userSelect: 'none',
            pointerEvents: 'none',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            borderRadius: '20px',
            zIndex: '8',
            ...shine ? {
                transform: shine
            } : {},
            ...shineBg ? {
                background: shineBg
            } : {}
        }
    });
    return {
        outerProps,
        outerRef,
        innerProps,
        shineDom
    };
};
export { useCardAnimation };
