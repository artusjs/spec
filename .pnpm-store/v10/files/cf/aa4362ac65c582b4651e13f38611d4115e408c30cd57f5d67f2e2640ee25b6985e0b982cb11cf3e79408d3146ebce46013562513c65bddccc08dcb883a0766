import { createContext, useContext } from "react";
const ThemeContext = createContext({});
function useDark() {
    const ctx = useContext(ThemeContext);
    return 'dark' === ctx.theme;
}
export { ThemeContext, useDark };
