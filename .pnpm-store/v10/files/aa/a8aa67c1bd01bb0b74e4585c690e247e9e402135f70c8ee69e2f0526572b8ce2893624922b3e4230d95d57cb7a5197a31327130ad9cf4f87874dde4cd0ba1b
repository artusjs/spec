import { mkdir, stat, writeFile } from "node:fs/promises";
import { dirname, isAbsolute } from "node:path";
import { logger } from "@rspress/core";
const generateNode = (sitemap)=>{
    let result = '<url>';
    for (const [tag, value] of Object.entries(sitemap))result += `<${tag}>${value}</${tag}>`;
    result += '</url>';
    return result;
};
const generateXml = (sitemaps)=>{
    logger.info(`Generate sitemap.xml for ${sitemaps.length} pages.`);
    return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps.reduce((node, sitemap)=>node + generateNode(sitemap), '')}</urlset>`;
};
function pluginSitemap(options) {
    const { siteUrl, customMaps = {}, defaultChangeFreq = 'monthly', defaultPriority = '0.5' } = options;
    const sitemaps = [];
    const set = new Set();
    return {
        name: '@rspress/plugin-sitemap',
        async extendPageData (pageData, isProd) {
            if (isProd) {
                if (!set.has(pageData.routePath)) {
                    set.add(pageData.routePath);
                    sitemaps.push({
                        loc: `${siteUrl.replace(/\/$/, '')}${pageData.routePath}`,
                        lastmod: (await stat(pageData._filepath)).mtime.toISOString(),
                        priority: '/' === pageData.routePath ? '1.0' : defaultPriority,
                        changefreq: defaultChangeFreq,
                        ...customMaps?.[pageData.routePath] ?? {}
                    });
                }
            }
        },
        async afterBuild (config, isProd) {
            if (isProd) {
                const distPathRoot = 'string' == typeof config.builderConfig?.output?.distPath ? config.builderConfig?.output?.distPath : config.builderConfig?.output?.distPath?.root;
                const configPath = config.outDir || distPathRoot;
                let outputPath = `./${configPath || 'doc_build'}/sitemap.xml`;
                if (isAbsolute(configPath || '')) outputPath = `${configPath}/sitemap.xml`;
                await mkdir(dirname(outputPath), {
                    recursive: true
                });
                await writeFile(outputPath, generateXml(sitemaps));
            }
        }
    };
}
export { pluginSitemap };
