import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useSite } from "@rspress/core/runtime";
import { IconArrowDown, SvgWrapper } from "@rspress/core/theme";
import "./index.css";
import { useHoverGroup } from "../HoverGroup/useHoverGroup.js";
import { SocialLink } from "./SocialLink.js";
const MORE_LENGTH = 5;
const SocialLinks = ({ socialLinks: socialLinksFromProps })=>{
    const { site } = useSite();
    const socialLinks = site.themeConfig.socialLinks || socialLinksFromProps || [];
    const isMore = socialLinks.length > MORE_LENGTH;
    const shownLinks = socialLinks.slice(0, MORE_LENGTH);
    const hiddenLinks = socialLinks.slice(MORE_LENGTH);
    const { hoverGroup, handleMouseEnter, handleMouseLeave } = useHoverGroup({
        position: 'right',
        customChildren: isMore ? /*#__PURE__*/ jsx("div", {
            className: "rp-social-links__hidden",
            children: hiddenLinks.map((item, index)=>/*#__PURE__*/ jsx(SocialLink, {
                    link: item,
                    hoverGroupPosition: index === hiddenLinks.length - 1 ? 'right' : 'center'
                }, item.content))
        }) : null
    });
    if (0 === socialLinks.length) return /*#__PURE__*/ jsx(Fragment, {});
    return /*#__PURE__*/ jsxs("div", {
        className: "rp-social-links",
        onMouseLeave: handleMouseLeave,
        children: [
            shownLinks.map((item, index)=>/*#__PURE__*/ jsx(SocialLink, {
                    link: item,
                    hoverGroupPosition: index === shownLinks.length - 1 ? 'right' : 'center'
                }, item.content)),
            isMore ? /*#__PURE__*/ jsx(SvgWrapper, {
                icon: IconArrowDown,
                onMouseEnter: handleMouseEnter,
                fontSize: 20
            }) : null,
            hoverGroup
        ]
    });
};
export { SocialLinks };
