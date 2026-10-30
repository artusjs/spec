import { Fragment, jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
function NoSSR(props) {
    const { children } = props;
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    return /*#__PURE__*/ jsx(Fragment, {
        children: children
    });
}
export { NoSSR };
