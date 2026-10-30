import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useFrontmatter } from "@rspress/core/runtime";
import { HomeBackground, HomeFeature, HomeFooter, HomeHero } from "@rspress/core/theme";
function HomeLayoutMarkdown() {
    const { frontmatter } = useFrontmatter();
    const hero = frontmatter?.hero;
    const features = frontmatter?.features;
    const lines = [];
    if (hero) {
        if (hero.name) {
            lines.push(`# ${hero.name}`);
            lines.push('');
        }
        if (hero.text) {
            lines.push(hero.text);
            lines.push('');
        }
        if (hero.tagline) {
            lines.push(`> ${hero.tagline}`);
            lines.push('');
        }
        if (hero.actions && hero.actions.length > 0) {
            const actionLinks = hero.actions.map((action)=>`[${action.text}](${action.link})`).join(' | ');
            lines.push(actionLinks);
            lines.push('');
        }
    }
    if (features && features.length > 0) {
        lines.push('## Features');
        lines.push('');
        for (const feature of features){
            const icon = feature.icon ? `${feature.icon} ` : '';
            const title = feature.link ? `[${icon}**${feature.title}**](${feature.link})` : `${icon}**${feature.title}**`;
            lines.push(`- ${title}: ${feature.details}`);
        }
        lines.push('');
    }
    return /*#__PURE__*/ jsx(Fragment, {
        children: lines.join('\n')
    });
}
function HomeLayout(props) {
    if (process.env.__SSR_MD__) return /*#__PURE__*/ jsx(HomeLayoutMarkdown, {});
    const { beforeHero, afterHero, beforeFeatures, afterFeatures, beforeHeroActions, afterHeroActions } = props;
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx(HomeBackground, {}),
            beforeHero,
            /*#__PURE__*/ jsx(HomeHero, {
                beforeHeroActions: beforeHeroActions,
                afterHeroActions: afterHeroActions
            }),
            afterHero,
            beforeFeatures,
            /*#__PURE__*/ jsx(HomeFeature, {}),
            afterFeatures,
            /*#__PURE__*/ jsx(HomeFooter, {})
        ]
    });
}
export { HomeLayout };
