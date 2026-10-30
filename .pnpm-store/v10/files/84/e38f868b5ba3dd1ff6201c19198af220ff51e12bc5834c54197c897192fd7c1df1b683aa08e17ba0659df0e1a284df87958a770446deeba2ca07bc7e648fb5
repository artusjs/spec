const globalStylesVMPlugin = (context)=>({
        ["virtual-global-styles"]: ()=>{
            const { config, pluginDriver } = context;
            const globalStylesByPlugins = pluginDriver.globalStyles();
            const moduleContent = [
                config?.globalStyles,
                ...globalStylesByPlugins
            ].filter(Boolean).map((source)=>`import ${JSON.stringify(source)};`).join('');
            return moduleContent;
        }
    });
export { globalStylesVMPlugin };
