import { renderCSRPages } from "./renderPages.js";
const rsbuildPluginCSR = ({ routeService, config })=>({
        name: 'rspress-inner-rsbuild-plugin-csr',
        async setup (api) {
            api.onBeforeBuild(()=>{
                api.processAssets({
                    stage: 'report',
                    environments: [
                        'web'
                    ]
                }, async ({ assets, compilation, compiler })=>{
                    if (compilation.errors.length > 0) return;
                    const emitAsset = (assetName, content)=>{
                        compilation.emitAsset(assetName, new compiler.webpack.sources.RawSource(content));
                    };
                    let htmlTemplate = '';
                    for (const [assetName, assetSource] of Object.entries(assets))if ('index.html' === assetName) {
                        htmlTemplate = assetSource.source().toString();
                        compilation.deleteAsset(assetName);
                        break;
                    }
                    await renderCSRPages(routeService, config, htmlTemplate, emitAsset);
                });
            });
        }
    });
export { rsbuildPluginCSR };
