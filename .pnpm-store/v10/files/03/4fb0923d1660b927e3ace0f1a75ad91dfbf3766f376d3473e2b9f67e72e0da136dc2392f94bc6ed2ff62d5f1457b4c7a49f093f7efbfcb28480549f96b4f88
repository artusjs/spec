import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import virtual_social_links from "virtual-social-links";
import "./index.css";
import { useHoverGroup } from "../HoverGroup/useHoverGroup.js";
const SocialLink = (props)=>{
    const { link, hoverGroupPosition = 'center' } = props;
    const { icon, mode = 'link', content } = link;
    let IconComp = /*#__PURE__*/ jsx(Fragment, {});
    if (icon) {
        const html = 'string' == typeof icon ? virtual_social_links[icon] : icon.svg;
        IconComp = /*#__PURE__*/ jsx("div", {
            className: "rp-social-links__icon",
            dangerouslySetInnerHTML: {
                __html: html
            }
        });
    }
    const { handleMouseEnter, handleMouseLeave, hoverGroup } = useHoverGroup({
        position: hoverGroupPosition,
        customChildren: /*#__PURE__*/ jsx("div", {
            className: "rp-social-links__item__hover-group",
            children: 'text' === mode ? /*#__PURE__*/ jsx("div", {
                className: "rp-social-links__item__text",
                children: content
            }) : 'dom' === mode ? /*#__PURE__*/ jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: content
                }
            }) : 'img' === mode ? /*#__PURE__*/ jsx("img", {
                src: content,
                alt: "img"
            }) : null
        })
    });
    if ('link' === mode) return /*#__PURE__*/ jsx("a", {
        href: content,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "rp-social-links__item",
        children: /*#__PURE__*/ jsx("div", {
            className: "rp-social-links__icon",
            children: IconComp
        })
    }, content);
    if ('text' === mode) return /*#__PURE__*/ jsxs("div", {
        className: "rp-social-links__item",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            IconComp,
            hoverGroup
        ]
    });
    if ('img' === mode) return /*#__PURE__*/ jsxs("div", {
        className: "rp-social-links__item",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            IconComp,
            hoverGroup
        ]
    });
    if ('dom' === mode) return /*#__PURE__*/ jsxs("div", {
        className: "rp-social-links__item",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            IconComp,
            hoverGroup
        ]
    });
    return /*#__PURE__*/ jsx("div", {
        className: "rp-social-links__item"
    });
};
export { SocialLink };
