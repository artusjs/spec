const SHIKI_TRANSFORMER_ADD_TITLE = 'shiki-transformer:add-title';
function parseTitleFromMeta(meta) {
    if (!meta) return '';
    const kvList = meta.split(' ').filter(Boolean);
    for (const item of kvList){
        const [k, v = ''] = item.split('=').filter(Boolean);
        if ('title' === k && v.length > 0) return v.replace(/["'`]/g, '');
    }
    return '';
}
function transformerAddTitle() {
    return {
        name: SHIKI_TRANSFORMER_ADD_TITLE,
        pre (pre) {
            const title = parseTitleFromMeta(this.options.meta?.__raw);
            if (title.length > 0) pre.properties = {
                ...pre.properties,
                title
            };
            return pre;
        }
    };
}
export { SHIKI_TRANSFORMER_ADD_TITLE, transformerAddTitle };
