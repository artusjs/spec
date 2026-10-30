export declare function renderHtmlOrText(str?: string | number | null): {
    children: string | null;
} | {
    dangerouslySetInnerHTML: {
        __html: string;
    };
};
/**
 * In this method, we will render the markdown text to inline html and support basic markdown syntax, including the following:
 * - bold
 * - emphasis
 * - delete
 * - inline code
 * @param text The markdown text to render.
 * @internal
 * @private
 */
export declare function renderInlineMarkdown(text: string): {
    children: string | null;
} | {
    dangerouslySetInnerHTML: {
        __html: string;
    };
};
/**
 * @internal
 * @private
 */
export declare function parseInlineMarkdownText(mdx: string): string;
