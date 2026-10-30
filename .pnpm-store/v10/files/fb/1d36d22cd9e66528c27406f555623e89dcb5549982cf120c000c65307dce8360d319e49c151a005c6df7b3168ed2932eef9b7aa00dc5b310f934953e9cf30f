import { jsx, jsxs } from "react/jsx-runtime";
import { useI18n } from "@rspress/core/runtime";
import { IconArrowRight, Link, SvgWrapper, renderInlineMarkdown, usePrevNextPage } from "@rspress/core/theme";
import clsx from "clsx";
import "./index.css";
function PrevNextPage() {
    const { prevPage, nextPage } = usePrevNextPage();
    const t = useI18n();
    return /*#__PURE__*/ jsxs("div", {
        className: "rp-prev-next-page",
        children: [
            prevPage ? /*#__PURE__*/ jsxs(Link, {
                href: prevPage.link,
                className: clsx('rp-prev-next-page__item', 'rp-prev-next-page__prev'),
                children: [
                    /*#__PURE__*/ jsx("span", {
                        className: "rp-prev-next-page__item__desc",
                        children: t('prevPageText')
                    }),
                    /*#__PURE__*/ jsxs("span", {
                        className: "rp-prev-next-page__item__title",
                        children: [
                            /*#__PURE__*/ jsx(SvgWrapper, {
                                icon: IconArrowRight,
                                className: "rp-prev-next-page__icon rp-prev-next-page__rotate_180"
                            }),
                            /*#__PURE__*/ jsx("span", {
                                ...renderInlineMarkdown(prevPage.text)
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ jsx("div", {
                className: "rp-prev-next-page__placeholder"
            }),
            nextPage ? /*#__PURE__*/ jsxs(Link, {
                href: nextPage.link,
                className: clsx('rp-prev-next-page__item', 'rp-prev-next-page__next'),
                children: [
                    /*#__PURE__*/ jsx("span", {
                        className: "rp-prev-next-page__item__desc",
                        children: t('nextPageText')
                    }),
                    /*#__PURE__*/ jsxs("span", {
                        className: "rp-prev-next-page__item__title",
                        children: [
                            /*#__PURE__*/ jsx("span", {
                                ...renderInlineMarkdown(nextPage.text)
                            }),
                            /*#__PURE__*/ jsx(SvgWrapper, {
                                icon: IconArrowRight,
                                className: "rp-prev-next-page__icon"
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ jsx("div", {
                className: "rp-prev-next-page__placeholder"
            })
        ]
    });
}
export { PrevNextPage };
