/**
 * these codes are copied from @shiki/transformers, transformerMetaHighlight
 * @source https://github.com/shikijs/shiki/blob/f5cf06f55a0b4643d7b02f15ee2c5033be6f1245/packages/transformers/src/transformers/meta-highlight.ts#L56
 * @license MIT
 */
import type { ShikiTransformer } from 'shiki';
export interface TransformerMetaHighlightOptions {
    /**
     * Class for highlighted lines
     *
     * @default 'highlighted'
     */
    classActiveLine?: string;
    /**
     *
     * @default 'has-highlighted'
     */
    classActivePre?: string;
}
export declare const SHIKI_TRANSFORMER_META_HIGHLIGHT = "shiki-transformer:compatible-meta-highlight";
/**
 * Allow using `{1,3-5}` in the code snippet meta to mark highlighted lines.
 * @deprecated This is a workaround when migrating to Rspress 2.0, you should migrate to `import { transformerNotationHighlight } from '@shikijs/transformers'` instead.
 */
export declare function transformerCompatibleMetaHighlight(options?: TransformerMetaHighlightOptions): ShikiTransformer;
