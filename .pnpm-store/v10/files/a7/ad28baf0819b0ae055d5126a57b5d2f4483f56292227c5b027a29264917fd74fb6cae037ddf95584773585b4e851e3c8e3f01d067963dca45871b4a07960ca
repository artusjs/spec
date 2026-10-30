import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { NoSSR } from "@rspress/core/runtime";
import { SearchButton, SearchPanel } from "@rspress/core/theme";
import { useState } from "react";
function Search() {
    const [focused, setFocused] = useState(false);
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsx(SearchButton, {
                setFocused: setFocused
            }),
            /*#__PURE__*/ jsx(NoSSR, {
                children: /*#__PURE__*/ jsx(SearchPanel, {
                    focused: focused,
                    setFocused: setFocused
                })
            })
        ]
    });
}
export { Search };
