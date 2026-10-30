import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { PageContext, useLocation } from "@rspress/core/runtime";
import { Layout, Root } from "@theme";
import react, { useContext, useLayoutEffect } from "react";
import virtual_global_components from "virtual-global-components";
import { initPageData } from "./initPageData.js";
function App() {
    const { setData: setPageData, data } = useContext(PageContext);
    const { pathname, search } = useLocation();
    useLayoutEffect(()=>{
        async function refetchData() {
            try {
                const pageData = await initPageData(pathname);
                setPageData?.(pageData);
            } catch (e) {
                console.log(e);
            }
        }
        refetchData();
    }, [
        pathname,
        setPageData
    ]);
    if (!data) return /*#__PURE__*/ jsx(Fragment, {});
    const frontmatter = data.frontmatter || {};
    const GLOBAL_COMPONENTS_KEY = 'globalUIComponents';
    const query = new URLSearchParams(search);
    const hideGlobalUIComponents = false === frontmatter[GLOBAL_COMPONENTS_KEY] || "0" === query.get(GLOBAL_COMPONENTS_KEY);
    if (process.env.__SSR_MD__) return /*#__PURE__*/ jsx(Root, {
        children: /*#__PURE__*/ jsx(Layout, {})
    });
    return /*#__PURE__*/ jsxs(Root, {
        children: [
            /*#__PURE__*/ jsx(Layout, {}),
            !hideGlobalUIComponents && virtual_global_components.map((componentInfo, index)=>{
                if (Array.isArray(componentInfo)) {
                    const [component, props] = componentInfo;
                    return /*#__PURE__*/ react.createElement(component, {
                        key: index,
                        ...props
                    });
                }
                return /*#__PURE__*/ react.createElement(componentInfo, {
                    key: index
                });
            })
        ]
    });
}
export { App };
