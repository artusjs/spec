const SHIKI_TRANSFORMER_ADD_LINE_NUMBERS = 'shiki-transformer:add-line-numbers';
function hasLineNumbersInMeta(meta) {
    if (!meta) return;
    const kvList = meta.split(' ').filter(Boolean);
    if (kvList.includes('lineNumbers=false')) return false;
    if (kvList.includes('lineNumbers') || kvList.includes('lineNumbers=true')) return true;
}
function transformerAddLineNumbers(options = {}) {
    const { defaultShowLineNumbers = false } = options;
    return {
        name: SHIKI_TRANSFORMER_ADD_LINE_NUMBERS,
        pre (pre) {
            const metaHasLineNumbers = hasLineNumbersInMeta(this.options.meta?.__raw);
            const shouldShowLineNumbers = metaHasLineNumbers ?? defaultShowLineNumbers;
            if (void 0 !== metaHasLineNumbers || shouldShowLineNumbers) pre.properties = {
                ...pre.properties,
                lineNumbers: shouldShowLineNumbers
            };
            return pre;
        }
    };
}
export { SHIKI_TRANSFORMER_ADD_LINE_NUMBERS, transformerAddLineNumbers };
