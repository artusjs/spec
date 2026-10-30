const SHIKI_TRANSFORMER_ADD_WRAP_CODE = 'shiki-transformer:wrap-code';
function hasWrapCodeInMeta(meta) {
    if (!meta) return;
    const kvList = meta.split(' ').filter(Boolean);
    if (kvList.includes('wrapCode=false')) return false;
    if (kvList.includes('wrapCode') || kvList.includes('wrapCode=true')) return true;
}
function transformerAddWrapCode(options = {}) {
    const { defaultWrapCode = false } = options;
    return {
        name: SHIKI_TRANSFORMER_ADD_WRAP_CODE,
        pre (pre) {
            const metaHasWrapCode = hasWrapCodeInMeta(this.options.meta?.__raw);
            const shouldWrapCode = metaHasWrapCode ?? defaultWrapCode;
            if (void 0 !== metaHasWrapCode || shouldWrapCode) pre.properties = {
                ...pre.properties,
                wrapCode: shouldWrapCode
            };
            return pre;
        }
    };
}
export { SHIKI_TRANSFORMER_ADD_WRAP_CODE, transformerAddWrapCode };
