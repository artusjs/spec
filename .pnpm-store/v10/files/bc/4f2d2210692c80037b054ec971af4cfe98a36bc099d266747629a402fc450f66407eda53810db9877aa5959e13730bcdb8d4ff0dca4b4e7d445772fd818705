const SHIKI_TRANSFORMER_ADD_FOLD = 'shiki-transformer:add-fold';
const DEFAULT_FOLD_HEIGHT = 300;
function hasFoldInMeta(meta) {
    if (!meta) return;
    const kvList = meta.split(' ').filter(Boolean);
    if (kvList.includes('fold=false')) return false;
    if (kvList.includes('fold') || kvList.includes('fold=true')) return true;
}
function parseHeightFromMeta(meta) {
    if (!meta) return;
    const kvList = meta.split(' ').filter(Boolean);
    for (const item of kvList){
        const [k, v = ''] = item.split('=').filter(Boolean);
        if ('height' === k && v.length > 0) {
            const num = Number(v.replace(/["'`]/g, ''));
            if (!Number.isNaN(num) && num > 0) return num;
        }
    }
}
function transformerAddFold(options = {}) {
    const { defaultCodeOverflow } = options;
    return {
        name: SHIKI_TRANSFORMER_ADD_FOLD,
        pre (pre) {
            const meta = this.options.meta?.__raw;
            const metaFold = hasFoldInMeta(meta);
            const metaHeight = parseHeightFromMeta(meta);
            const hasExplicitMeta = void 0 !== metaFold || void 0 !== metaHeight;
            if (hasExplicitMeta) {
                if (metaFold) pre.properties = {
                    ...pre.properties,
                    fold: true,
                    height: metaHeight ?? DEFAULT_FOLD_HEIGHT
                };
                else if (void 0 !== metaHeight) pre.properties = {
                    ...pre.properties,
                    height: metaHeight
                };
            } else if (defaultCodeOverflow?.height !== void 0) {
                const behavior = defaultCodeOverflow.behavior ?? 'scroll';
                if ('fold' === behavior) pre.properties = {
                    ...pre.properties,
                    fold: true,
                    height: defaultCodeOverflow.height
                };
                else pre.properties = {
                    ...pre.properties,
                    height: defaultCodeOverflow.height
                };
            }
            return pre;
        }
    };
}
export { SHIKI_TRANSFORMER_ADD_FOLD, transformerAddFold };
