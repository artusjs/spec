import { getSocialIcons } from "../utils/getSocialIcons.js";
const socialLinksVMPlugin = (context)=>{
    const { config } = context;
    return {
        ["virtual-social-links"]: ()=>`export default ${JSON.stringify(getSocialIcons(config.themeConfig?.socialLinks), null, 2)}`
    };
};
export { socialLinksVMPlugin };
