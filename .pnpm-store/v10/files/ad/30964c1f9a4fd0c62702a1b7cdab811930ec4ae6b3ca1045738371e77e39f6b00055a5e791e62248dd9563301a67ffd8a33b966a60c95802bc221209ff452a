import { PluginDriver } from "./PluginDriver.js";
import { RouteService } from "./route/RouteService.js";
import { modifyConfigWithAutoNavSide } from "./auto-nav-sidebar/index.js";
import { initRsbuild } from "./initRsbuild.js";
import { checkLanguageParity } from "./utils/checkLanguageParity.js";
import { hintSSGFalse } from "./logger/hint.js";
async function build(options) {
    const { docDirectory, config, configFilePath } = options;
    const pluginDriver = await PluginDriver.create(config, configFilePath, true);
    const modifiedConfig = await pluginDriver.modifyConfig();
    const enableSSG = Boolean((modifiedConfig.ssg || modifiedConfig.llms) ?? true);
    const additionalPages = await pluginDriver.addPages();
    const routeService = await RouteService.create({
        config: modifiedConfig,
        scanDir: docDirectory,
        externalPages: additionalPages
    });
    await pluginDriver.routeGenerated(routeService.getRoutes());
    await pluginDriver.routeServiceGenerated(routeService);
    await modifyConfigWithAutoNavSide(modifiedConfig);
    try {
        await pluginDriver.beforeBuild();
        const rsbuild = await initRsbuild(docDirectory, modifiedConfig, pluginDriver, routeService, enableSSG);
        await rsbuild.build();
    } finally{
        await checkLanguageParity(config);
    }
    await pluginDriver.afterBuild();
    if (!enableSSG) hintSSGFalse();
}
export { build };
