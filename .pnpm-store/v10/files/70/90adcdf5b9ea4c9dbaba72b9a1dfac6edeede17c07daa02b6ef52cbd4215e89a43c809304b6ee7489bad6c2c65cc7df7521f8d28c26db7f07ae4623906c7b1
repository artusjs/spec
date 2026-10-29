import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { normalizeImagePath, useFrontmatter } from "@rspress/core/runtime";
import { Button, Link, renderHtmlOrText } from "@rspress/core/theme";
import "./index.css";
import clsx from "clsx";
const DEFAULT_HERO = {
    badge: '',
    name: '',
    text: '',
    tagline: '',
    actions: [],
    image: void 0
};
function HomeHero({ beforeHeroActions, afterHeroActions, image }) {
    const { frontmatter } = useFrontmatter();
    const hero = frontmatter?.hero || DEFAULT_HERO;
    const hasImage = void 0 !== hero.image || void 0 !== image;
    const multiHeroText = hero.text ? hero.text.toString().split(/\n/g).filter((text)=>'' !== text) : [];
    const imageSrc = 'string' == typeof hero.image?.src ? {
        light: hero.image.src,
        dark: hero.image.src
    } : hero.image?.src || {
        light: '',
        dark: ''
    };
    return /*#__PURE__*/ jsxs("div", {
        className: clsx('rp-home-hero', {
            'rp-home-hero--no-image': !hasImage
        }),
        children: [
            /*#__PURE__*/ jsxs("div", {
                className: "rp-home-hero__container",
                children: [
                    hero.badge && ('string' == typeof hero.badge ? /*#__PURE__*/ jsx("div", {
                        className: "rp-home-hero__badge",
                        children: hero.badge
                    }) : hero.badge.link ? /*#__PURE__*/ jsx(Link, {
                        href: hero.badge.link,
                        className: "rp-home-hero__badge",
                        children: hero.badge.text
                    }) : /*#__PURE__*/ jsx("div", {
                        className: "rp-home-hero__badge",
                        children: hero.badge.text
                    })),
                    /*#__PURE__*/ jsxs("div", {
                        className: "rp-home-hero__content",
                        children: [
                            /*#__PURE__*/ jsx("div", {
                                className: "rp-home-hero__title",
                                children: /*#__PURE__*/ jsx("span", {
                                    className: "rp-home-hero__title-brand",
                                    ...renderHtmlOrText(hero.name)
                                })
                            }),
                            0 !== multiHeroText.length && multiHeroText.map((heroText)=>/*#__PURE__*/ jsx("div", {
                                    className: "rp-home-hero__subtitle",
                                    ...renderHtmlOrText(heroText)
                                }, heroText))
                        ]
                    }),
                    /*#__PURE__*/ jsx("p", {
                        className: "rp-home-hero__tagline",
                        ...renderHtmlOrText(hero.tagline)
                    }),
                    /*#__PURE__*/ jsxs(Fragment, {
                        children: [
                            beforeHeroActions,
                            /*#__PURE__*/ jsx("div", {
                                className: "rp-home-hero__actions",
                                children: hero.actions?.map((action)=>/*#__PURE__*/ jsx(Button, {
                                        type: "a",
                                        href: action.link,
                                        theme: action.theme,
                                        className: "rp-home-hero__action",
                                        ...renderHtmlOrText(action.text)
                                    }, action.link))
                            }),
                            afterHeroActions
                        ]
                    })
                ]
            }),
            image ? /*#__PURE__*/ jsx("div", {
                className: "rp-home-hero__image",
                children: image
            }) : hero.image ? /*#__PURE__*/ jsxs("div", {
                className: "rp-home-hero__image",
                children: [
                    /*#__PURE__*/ jsx("img", {
                        src: normalizeImagePath(imageSrc.light),
                        alt: hero.image?.alt,
                        srcSet: normalizeSrcsetAndSizes(hero.image?.srcset),
                        sizes: normalizeSrcsetAndSizes(hero.image?.sizes),
                        width: 375,
                        height: 375,
                        className: "rp-home-hero__image-img rp-home-hero__image-img--light"
                    }),
                    /*#__PURE__*/ jsx("img", {
                        src: normalizeImagePath(imageSrc.dark),
                        alt: hero.image?.alt,
                        srcSet: normalizeSrcsetAndSizes(hero.image?.srcset),
                        sizes: normalizeSrcsetAndSizes(hero.image?.sizes),
                        width: 375,
                        height: 375,
                        className: "rp-home-hero__image-img rp-home-hero__image-img--dark"
                    })
                ]
            }) : null
        ]
    });
}
function normalizeSrcsetAndSizes(field) {
    const r = (Array.isArray(field) ? field : [
        field
    ]).filter(Boolean).join(', ');
    return r || void 0;
}
export { HomeHero };
