const SHIKI_TRANSFORMER_ADD_LANG = 'shiki-transformer:add-lang';
function transformerAddLang() {
    return {
        name: SHIKI_TRANSFORMER_ADD_LANG,
        pre (pre) {
            const lang = this.options.lang;
            if (lang.length > 0) pre.properties = {
                ...pre.properties,
                lang
            };
            return pre;
        }
    };
}
export { SHIKI_TRANSFORMER_ADD_LANG, transformerAddLang };
