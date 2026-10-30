import { useI18n, usePageData } from "@rspress/core/runtime";
function useEditLink() {
    const { siteData, page } = usePageData();
    const editLink = siteData.themeConfig?.editLink;
    const t = useI18n();
    const text = t('editLinkText');
    if (!editLink?.docRepoBaseUrl || !text) return null;
    let { docRepoBaseUrl } = editLink;
    if (!docRepoBaseUrl.endsWith('/')) docRepoBaseUrl += '/';
    const relativePagePath = page._relativePath.replace(/\\/g, '/');
    const link = `${docRepoBaseUrl}${relativePagePath}`;
    return {
        text,
        link
    };
}
export { useEditLink };
