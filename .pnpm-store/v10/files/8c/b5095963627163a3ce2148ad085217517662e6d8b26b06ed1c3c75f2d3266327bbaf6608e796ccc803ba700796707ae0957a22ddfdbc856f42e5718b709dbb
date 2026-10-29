import { execa } from "../../0~execa.js";
function transform(timestamp, lang) {
    return new Date(timestamp).toLocaleString(lang || 'zh');
}
async function getGitLastUpdatedTimeStamp(filePath) {
    let lastUpdated;
    try {
        const { stdout } = await execa('git', [
            'log',
            '-1',
            '--format=%at',
            filePath
        ]);
        lastUpdated = 1000 * Number(stdout);
    } catch (_e) {}
    return lastUpdated;
}
function pluginLastUpdated() {
    return {
        name: '@rspress/plugin-last-updated',
        async extendPageData (pageData) {
            const { _filepath, lang } = pageData;
            const lastUpdated = await getGitLastUpdatedTimeStamp(_filepath);
            if (lastUpdated) pageData.lastUpdatedTime = transform(lastUpdated, lang);
        }
    };
}
export { pluginLastUpdated };
