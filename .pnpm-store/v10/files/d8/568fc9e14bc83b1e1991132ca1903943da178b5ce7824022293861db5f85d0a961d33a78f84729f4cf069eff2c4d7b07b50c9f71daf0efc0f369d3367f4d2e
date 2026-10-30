import { PluginDriver } from "./PluginDriver.js";
import { RouteService } from "./route/RouteService.js";
import { initRsbuild } from "./initRsbuild.js";
import { checkLanguageParity } from "./utils/checkLanguageParity.js";
async function dev(options) {
    const { docDirectory, config, extraBuilderConfig, configFilePath } = options;
    const isProd = false;
    const pluginDriver = await PluginDriver.create(config, configFilePath, isProd);
    const modifiedConfig = await pluginDriver.modifyConfig();
    try {
        const additionalPages = await pluginDriver.addPages();
        const routeService = await RouteService.create({
            config: modifiedConfig,
            scanDir: docDirectory,
            externalPages: additionalPages
        });
        await pluginDriver.routeGenerated(routeService.getRoutes());
        await pluginDriver.routeServiceGenerated(routeService);
        await pluginDriver.beforeBuild();
        const rsbuild = await initRsbuild(docDirectory, modifiedConfig, pluginDriver, routeService, false, extraBuilderConfig);
        rsbuild.onAfterDevCompile(async ()=>{
            await pluginDriver.afterBuild();
        });
        const { server } = await rsbuild.startDevServer({
            getPortSilently: true
        });
        return server;
    } finally{
        await checkLanguageParity(modifiedConfig);
    }
}
export { dev };
