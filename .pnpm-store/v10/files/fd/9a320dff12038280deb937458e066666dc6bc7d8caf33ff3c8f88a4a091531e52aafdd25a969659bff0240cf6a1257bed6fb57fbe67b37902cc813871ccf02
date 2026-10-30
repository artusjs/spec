import { type CodeButtonGroupProps } from '@rspress/core/theme';
import './index.scss';
export type CodeBlockProps = {
    title?: string;
    lang?: string;
    /**
     * @default false
     */
    wrapCode?: boolean;
    /**
     * @default false
     */
    lineNumbers?: boolean;
    /**
     * @default false
     */
    fold?: boolean;
    height?: number;
    containerElementClassName?: string;
    codeButtonGroupProps?: Omit<CodeButtonGroupProps, 'preElementRef' | 'wrapCode' | 'toggleWrapCode'>;
    children?: React.ReactNode;
};
/**
 * This component only provides styling and must be used with Shiki.
 * If you need runtime code highlighting, please use <CodeBlockRuntime /> instead.
 *
 * @example
 *
 * Input:
 *
 * ```tsx
 * <CodeBlock lang="js" title="test.js">
 *    <pre class="shiki css-variables">
 *      <code></code>
 *    </pre>
 * </CodeBlock>
 * ```
 *
 * Expected html output:
 *
 * ```html
 * <div class="rp-codeblock language-js">
 *  <div class="rp-codeblock__title">test.js</div>
 *  <div class="rp-codeblock__content">
 *    <div>
 *      <pre class="shiki css-variables">
 *        <code>
 *        </code>
 *      </pre>
 *    </div>
 *    <div class="rp-code-button-group">
 *      <button class="rp-code-button-group__button rp-code-wrap-button" title="Toggle code wrap"></button>
 *      <button class="rp-code-button-group__button rp-code-copy-button" title="Copy code"></button>
 *    </div>
 *  </div>
 *</div>
 *```
 */
export declare function CodeBlock({ containerElementClassName, title, lang, wrapCode: wrapCodeProp, lineNumbers: lineNumbersProp, fold, height, codeButtonGroupProps, children, }: CodeBlockProps): import("react/jsx-runtime").JSX.Element;
