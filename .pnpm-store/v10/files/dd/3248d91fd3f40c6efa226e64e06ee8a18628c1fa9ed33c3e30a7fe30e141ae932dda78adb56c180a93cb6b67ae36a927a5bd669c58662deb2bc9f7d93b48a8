import { jsx, jsxs } from "react/jsx-runtime";
import { useI18n } from "@rspress/core/runtime";
import { IconGithub, IconGitlab, SvgWrapper } from "@rspress/core/theme";
import "./index.css";
function SourceCode(props) {
    const { href, platform = 'github' } = props;
    const t = useI18n();
    return /*#__PURE__*/ jsx("div", {
        className: "rp-not-doc rp-source-code",
        children: /*#__PURE__*/ jsxs("a", {
            href: href,
            target: "_blank",
            className: "rp-source-code__link",
            children: [
                /*#__PURE__*/ jsx("span", {
                    className: "rp-source-code__icon",
                    children: /*#__PURE__*/ jsx(SvgWrapper, {
                        icon: 'gitlab' === platform ? IconGitlab : IconGithub
                    })
                }),
                /*#__PURE__*/ jsx("span", {
                    className: "rp-source-code__text",
                    children: t('sourceCodeText')
                })
            ]
        })
    });
}
export { SourceCode };
