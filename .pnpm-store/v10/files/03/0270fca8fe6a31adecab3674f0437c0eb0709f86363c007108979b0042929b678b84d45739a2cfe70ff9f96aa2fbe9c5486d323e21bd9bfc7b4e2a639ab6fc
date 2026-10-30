import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { FallbackHeading, Link, SvgWrapper, renderInlineMarkdown } from "@rspress/core/theme";
import "./index.css";
import { routePathToMdPath } from "@rspress/core/runtime";
import { useMemo } from "react";
import icons_plugin from "./icons/plugin.js";
function OverviewGroupMarkdown({ group }) {
    const lines = [];
    if (group.name) {
        lines.push(`## ${group.name}`);
        lines.push('');
    }
    for (const item of group.items){
        const itemTitle = item.link ? `[${item.text}](${routePathToMdPath(item.link)})` : `**${item.text}**`;
        lines.push(`### ${itemTitle}`);
        lines.push('');
        if (item.headers && item.headers.length > 0) {
            for (const header of item.headers){
                const headerLink = item.link ? `[${header.text}](${routePathToMdPath(item.link)}#${header.id})` : header.text;
                lines.push(`- ${headerLink}`);
            }
            lines.push('');
        }
        if (item.items && item.items.length > 0) {
            for (const subItem of item.items){
                const subItemLink = subItem.link ? `[${subItem.text}](${routePathToMdPath(subItem.link)})` : subItem.text;
                lines.push(`- ${subItemLink}`);
            }
            lines.push('');
        }
    }
    return /*#__PURE__*/ jsx(Fragment, {
        children: lines.join('\n')
    });
}
const OverviewGroup = ({ group })=>{
    if (process.env.__SSR_MD__) return /*#__PURE__*/ jsx(OverviewGroupMarkdown, {
        group: group
    });
    const { itemsWithContent, itemsWithoutContent } = useMemo(()=>{
        const itemsWithContent = group.items.filter((item)=>item.headers && item.headers.length > 0 || item.items && item.items.length > 0);
        const itemsWithoutContent = group.items.filter((item)=>!(item.headers && item.headers.length > 0) && !(item.items && item.items.length > 0));
        return {
            itemsWithContent,
            itemsWithoutContent
        };
    }, [
        group
    ]);
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx(FallbackHeading, {
                level: 2,
                title: group.name
            }),
            /*#__PURE__*/ jsxs("div", {
                className: "rp-overview-group rp-not-doc",
                children: [
                    itemsWithContent.map((item)=>/*#__PURE__*/ jsxs("div", {
                            className: "rp-overview-group__item",
                            children: [
                                /*#__PURE__*/ jsxs("div", {
                                    className: "rp-overview-group__item__title",
                                    children: [
                                        item.link ? /*#__PURE__*/ jsx(Link, {
                                            href: item.link,
                                            className: "rp-overview-group__item__title__link",
                                            ...renderInlineMarkdown(item.text)
                                        }) : /*#__PURE__*/ jsx("span", {
                                            className: "rp-overview-group__item__title__text",
                                            ...renderInlineMarkdown(item.text)
                                        }),
                                        /*#__PURE__*/ jsx(SvgWrapper, {
                                            icon: icons_plugin,
                                            className: "rp-overview-group__item__title__icon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsxs("ul", {
                                    className: "rp-overview-group__item__content",
                                    children: [
                                        item.headers?.map((header)=>/*#__PURE__*/ jsx("li", {
                                                className: "rp-overview-group__item__content__item",
                                                children: /*#__PURE__*/ jsx(Link, {
                                                    className: "rp-overview-group__item__content__item__link",
                                                    href: `${item.link}#${header.id}`,
                                                    ...renderInlineMarkdown(header.text)
                                                })
                                            }, header.id)),
                                        item.items?.map(({ link, text })=>/*#__PURE__*/ jsx("li", {
                                                className: "rp-overview-group__item__content__item",
                                                children: /*#__PURE__*/ jsx(Link, {
                                                    className: "rp-overview-group__item__content__item__link",
                                                    href: link,
                                                    ...renderInlineMarkdown(text)
                                                })
                                            }, link))
                                    ]
                                })
                            ]
                        }, item.link)),
                    itemsWithoutContent.length > 0 && /*#__PURE__*/ jsx("div", {
                        className: "rp-overview-group__grid",
                        children: itemsWithoutContent.map((item)=>/*#__PURE__*/ jsx("div", {
                                className: "rp-overview-group__grid-item rp-overview-group__item__title",
                                children: item.link ? /*#__PURE__*/ jsx(Link, {
                                    href: item.link,
                                    className: "rp-overview-group__item__title__link",
                                    ...renderInlineMarkdown(item.text)
                                }) : /*#__PURE__*/ jsx("span", {
                                    className: "rp-overview-group__item__title__text",
                                    ...renderInlineMarkdown(item.text)
                                })
                            }, item.link))
                    })
                ]
            })
        ]
    });
};
export { OverviewGroup };
