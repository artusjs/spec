import { Fragment, jsx } from "react/jsx-runtime";
import { Suspense, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { pathnameToRouteService } from "./route.js";
const Content = ({ fallback = /*#__PURE__*/ jsx(Fragment, {}) })=>{
    const { pathname } = useLocation();
    const matchedElement = useMemo(()=>{
        const route = pathnameToRouteService(pathname);
        return route?.element;
    }, [
        pathname
    ]);
    return /*#__PURE__*/ jsx(Suspense, {
        fallback: fallback,
        children: matchedElement
    });
};
export { Content };
