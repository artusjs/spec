import { useCallback } from "react";
import virtual_i18n_text from "virtual-i18n-text";
import { useLang } from "./useLang.js";
function useI18n() {
    const lang = useLang();
    return useCallback((key, params)=>{
        const text = virtual_i18n_text[key]?.[lang];
        if ('string' != typeof text) throw new Error(`i18n key "${key}" not found for language "${lang}"`);
        return text.replace(/\{\{(\w+)\}\}/g, (_, p1)=>params?.[p1] ?? `${p1}`);
    }, [
        lang
    ]);
}
export { useI18n };
