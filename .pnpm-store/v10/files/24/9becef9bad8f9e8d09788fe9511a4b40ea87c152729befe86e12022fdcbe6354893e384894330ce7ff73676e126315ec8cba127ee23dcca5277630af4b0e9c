import { META_GENERATOR, RSPRESS_VERSION, APP_HTML_MARKER, HEAD_MARKER } from "../constants.js";
import { createError } from "../utils/error.js";
async function renderConfigHead(head, route) {
    if (!isRouteMeta(route)) return '';
    if (!head || 0 === head.length) return '';
    return head.map((head)=>{
        if ('string' == typeof head) return head;
        if ('function' == typeof head) {
            const resultHead = head(route);
            if (!resultHead) return '';
            if ('string' == typeof resultHead) return resultHead;
            return `<${resultHead[0]} ${renderAttrs(resultHead[1])}>`;
        }
        return `<${head[0]} ${renderAttrs(head[1])}>`;
    }).join('');
}
async function renderHtmlTemplate(htmlTemplate, head, route, appHtml = '') {
    const replacedHtmlTemplate = htmlTemplate.replace(APP_HTML_MARKER, ()=>appHtml).replace(META_GENERATOR, ()=>`<meta name="generator" content="Rspress v${RSPRESS_VERSION}">`).replace(HEAD_MARKER, [
        await renderConfigHead(head, route)
    ].join(''));
    return replacedHtmlTemplate;
}
function renderAttrs(attrs) {
    return Object.entries(attrs).map(([key, value])=>{
        if ('boolean' == typeof value) return key;
        if ('string' == typeof value || 'number' == typeof value) return `${key}="${value}"`;
        throw createError(`Invalid value for attribute ${key}:${JSON.stringify(value)}`);
    }).join('');
}
function isRouteMeta(route) {
    return !!route && 'object' == typeof route && 'routePath' in route && 'absolutePath' in route;
}
export { renderHtmlTemplate };
