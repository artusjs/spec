function renderHtmlOrText(str) {
    if (!str) return {
        children: null
    };
    if ('number' == typeof str) return {
        children: str.toString()
    };
    const hasValidHtmlElements = /<([a-z]+)([^<]*)(?:>(.*?)<\/\1>|\s*\/>)/i.test(str);
    const hasValidHtmlEntities = /&(?:[a-z][0-9a-z]*|#(?:\d+|x[0-9a-f]+));/i.test(str);
    if (hasValidHtmlElements || hasValidHtmlEntities) return {
        dangerouslySetInnerHTML: {
            __html: str
        }
    };
    return {
        children: str.replace(/\\</g, '<').replace(/\\>/g, '>').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    };
}
const CODE_TEXT_PATTERN = /`(.*?)`/g;
const STRONG_TEXT_PATTERN = /\*{2}(?!\*)(.*?)\*{2}(?!\*)/g;
const EMPHASIS_TEXT_PATTERN = /\*(?!\*)(.*?)\*(?!\*)/g;
const DELETE_TEXT_PATTERN = /~{2}(.*?)~{2}/g;
function renderInlineMarkdown(text) {
    const htmlText = text.replace(/`[^`]+`/g, (match)=>match.replace(/</g, '&lt;')).replace(STRONG_TEXT_PATTERN, '<strong>$1</strong>').replace(EMPHASIS_TEXT_PATTERN, '<em>$1</em>').replace(DELETE_TEXT_PATTERN, '<del>$1</del>').replace(CODE_TEXT_PATTERN, '<code>$1</code>');
    return renderHtmlOrText(htmlText);
}
function parseInlineMarkdownText(mdx) {
    return mdx.replace(STRONG_TEXT_PATTERN, '$1').replace(EMPHASIS_TEXT_PATTERN, '$1').replace(DELETE_TEXT_PATTERN, '$1').replace(CODE_TEXT_PATTERN, '$1');
}
export { parseInlineMarkdownText, renderHtmlOrText, renderInlineMarkdown };
