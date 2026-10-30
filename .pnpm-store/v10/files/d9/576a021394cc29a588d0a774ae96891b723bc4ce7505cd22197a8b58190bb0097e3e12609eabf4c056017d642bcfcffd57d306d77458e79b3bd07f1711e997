function escapeMarkdownHeadingIds(content) {
    const markdownHeadingRegexp = /(?:^|\n)#{1,6}(?!#).*/g;
    return content.replace(markdownHeadingRegexp, (substring)=>substring.replace('{#', '\\{#').replace('\\\\{#', '\\{#'));
}
export { escapeMarkdownHeadingIds };
