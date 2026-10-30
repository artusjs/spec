import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useFrontmatter, useSite } from "@rspress/core/runtime";
import { LlmsContainer, LlmsCopyButton, LlmsViewOptions, Tag } from "@rspress/core/theme";
import clsx from "clsx";
const H1 = (props)=>{
    const { className, children, ...rest } = props;
    const { frontmatter: { tag } } = useFrontmatter();
    const { site } = useSite();
    const llmsUI = site?.themeConfig?.llmsUI;
    const placement = 'object' == typeof llmsUI ? llmsUI?.placement ?? 'title' : 'title';
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsxs("h1", {
                className: clsx('rp-toc-include', className),
                ...rest,
                children: [
                    children,
                    " ",
                    /*#__PURE__*/ jsx(Tag, {
                        tag: tag
                    })
                ]
            }),
            process.env.ENABLE_LLMS_UI && 'title' === placement && /*#__PURE__*/ jsxs(LlmsContainer, {
                children: [
                    /*#__PURE__*/ jsx(LlmsCopyButton, {}),
                    /*#__PURE__*/ jsx(LlmsViewOptions, {})
                ]
            })
        ]
    });
};
const H2 = (props)=>{
    const { className, ...rest } = props;
    return /*#__PURE__*/ jsx("h2", {
        className: clsx('rp-toc-include', className),
        ...rest
    });
};
const H3 = (props)=>{
    const { className, ...rest } = props;
    return /*#__PURE__*/ jsx("h3", {
        className: clsx('rp-toc-include', className),
        ...rest
    });
};
const H4 = (props)=>{
    const { className, ...rest } = props;
    return /*#__PURE__*/ jsx("h4", {
        className: clsx('rp-toc-include', className),
        ...rest
    });
};
const H5 = (props)=>{
    const { className, ...rest } = props;
    return /*#__PURE__*/ jsx("h5", {
        className: clsx('rp-toc-include', className),
        ...rest
    });
};
const H6 = (props)=>{
    const { className, ...rest } = props;
    return /*#__PURE__*/ jsx("h6", {
        className: clsx('rp-toc-include', className),
        ...rest
    });
};
export { H1, H2, H3, H4, H5, H6 };
