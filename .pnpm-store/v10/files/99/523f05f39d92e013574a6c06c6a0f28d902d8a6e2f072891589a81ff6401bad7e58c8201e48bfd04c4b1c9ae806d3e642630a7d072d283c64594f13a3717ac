const isDeno = "Deno" in globalThis;
export function createJiti(parentURL, jitiOptions) {
    parentURL = normalizeParentURL(parentURL);
    function jiti() {
        throw unsupportedError("`jiti()` is not supported in native mode, use `jiti.import()` instead.");
    }
    jiti.resolve = ()=>{
        throw unsupportedError("`jiti.resolve()` is not supported in native mode.");
    };
    jiti.esmResolve = (id, opts)=>{
        try {
            const importMeta = jitiOptions?.importMeta || import.meta;
            if (isDeno) return importMeta.resolve(id);
            const parent = normalizeParentURL(opts?.parentURL || parentURL);
            return importMeta.resolve(id, parent);
        } catch (error) {
            if (opts?.try) return;
            throw error;
        }
    };
    jiti.import = async function(id, opts) {
        for (const suffix of [
            "",
            "/index"
        ])for (const ext of [
            "",
            ".js",
            ".mjs",
            ".cjs",
            ".ts",
            ".tsx",
            ".mts",
            ".cts"
        ])try {
            const resolved = this.esmResolve(id + suffix + ext, opts);
            if (!resolved) continue;
            let importAttrs;
            if (resolved.endsWith('.json')) importAttrs = {
                with: {
                    type: 'json'
                }
            };
            return await import(resolved, importAttrs);
        } catch (error) {
            if ('ERR_MODULE_NOT_FOUND' === error.code || 'ERR_UNSUPPORTED_DIR_IMPORT' === error.code) continue;
            if (opts?.try) return;
            throw error;
        }
        if (!opts?.try) {
            const parent = normalizeParentURL(opts?.parentURL || parentURL);
            const error = new Error(`[jiti] [ERR_MODULE_NOT_FOUND] Cannot import '${id}' from '${parent}'.`);
            error.code = "ERR_MODULE_NOT_FOUND";
            throw error;
        }
    };
    jiti.transform = ()=>{
        throw unsupportedError("`jiti.transform()` is not supported in native mode.");
    };
    jiti.evalModule = ()=>{
        throw unsupportedError("`jiti.evalModule()` is not supported in native mode.");
    };
    jiti.main = void 0;
    jiti.extensions = Object.create(null);
    jiti.cache = Object.create(null);
    return jiti;
}
export default createJiti;
function unsupportedError(message) {
    throw new Error(`[jiti] ${message} (import or require 'jiti' instead of 'jiti/native' for more features).`);
}
function normalizeParentURL(input) {
    if (!input) return "file:///";
    if ("string" != typeof filename || input.startsWith("file://")) return input;
    if (input.endsWith("/")) input += "_";
    return `file://${input}`;
}
