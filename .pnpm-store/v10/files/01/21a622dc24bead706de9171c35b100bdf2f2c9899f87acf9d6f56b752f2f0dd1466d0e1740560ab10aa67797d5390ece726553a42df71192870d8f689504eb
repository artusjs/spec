import { jsx, jsxs } from "react/jsx-runtime";
import { useFrontmatter } from "@rspress/core/runtime";
import { SvgWrapper, renderHtmlOrText, useLinkNavigate } from "@rspress/core/theme";
import "./index.css";
import { useCardAnimation } from "./useCardAnimation.js";
const getGridClass = (feature)=>{
    const { span } = feature;
    switch(span){
        case 2:
            return 'rp-home-feature__item--span-2';
        case 3:
            return 'rp-home-feature__item--span-3';
        case 4:
            return 'rp-home-feature__item--span-4';
        case 6:
            return 'rp-home-feature__item--span-6';
        case void 0:
            return 'rp-home-feature__item--span-4';
        default:
            return '';
    }
};
function HomeFeatureItem({ feature }) {
    const { icon, title, details, link } = feature;
    const { innerProps, outerProps, outerRef, shineDom } = useCardAnimation();
    const navigate = useLinkNavigate();
    return /*#__PURE__*/ jsxs("div", {
        ...outerProps,
        className: `rp-home-feature__item ${getGridClass(feature)}`,
        ref: outerRef,
        children: [
            /*#__PURE__*/ jsx("div", {
                className: "rp-home-feature__item-wrapper",
                ...innerProps,
                children: /*#__PURE__*/ jsxs("article", {
                    className: `rp-home-feature__card ${link ? 'rp-home-feature__card--clickable' : ''}`,
                    onClick: ()=>{
                        if (link) navigate(link);
                    },
                    children: [
                        /*#__PURE__*/ jsxs("div", {
                            className: "rp-home-feature__title-wrapper",
                            children: [
                                icon ? /*#__PURE__*/ jsx("div", {
                                    className: "rp-home-feature__icon",
                                    children: /*#__PURE__*/ jsx(SvgWrapper, {
                                        icon: icon
                                    })
                                }) : null,
                                /*#__PURE__*/ jsx("h2", {
                                    className: "rp-home-feature__title",
                                    children: title
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx("p", {
                            className: "rp-home-feature__detail",
                            ...renderHtmlOrText(details)
                        })
                    ]
                }, title)
            }),
            shineDom
        ]
    }, title);
}
function HomeFeature({ features: featuresProp }) {
    const { frontmatter } = useFrontmatter();
    const features = featuresProp ?? frontmatter?.features;
    return /*#__PURE__*/ jsx("div", {
        className: "rp-home-feature",
        children: features?.map((feature)=>/*#__PURE__*/ jsx(HomeFeatureItem, {
                feature: feature
            }, feature.title))
    });
}
export { HomeFeature };
