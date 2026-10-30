import type { CodeBlockProps } from '@rspress/core/theme';
import { type ReactNode } from 'react';
import { type BundledLanguage, type BundledTheme, type CodeToHastOptions } from 'shiki';
export interface CodeBlockRuntimeProps extends CodeBlockProps {
    lang: string;
    code: string;
    shikiOptions?: Omit<CodeToHastOptions<BundledLanguage, BundledTheme>, 'lang' | 'theme'>;
    /**
     * Callback when the code block is rendered.
     * For some DOM operations, such as scroll operations.
     */
    onRendered?: () => void;
}
export declare function CodeBlockRuntime({ lang, title, code, shikiOptions, codeButtonGroupProps, children: _, containerElementClassName, onRendered, wrapCode, lineNumbers, fold, height, }: CodeBlockRuntimeProps): ReactNode;
