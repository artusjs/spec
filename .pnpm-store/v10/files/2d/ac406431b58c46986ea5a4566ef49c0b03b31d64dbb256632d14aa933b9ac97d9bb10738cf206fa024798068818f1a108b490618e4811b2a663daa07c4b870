import { createContext, useContext } from "react";
const PageContext = createContext({});
function usePage() {
    const ctx = useContext(PageContext);
    return {
        page: ctx.data
    };
}
export { PageContext, usePage };
