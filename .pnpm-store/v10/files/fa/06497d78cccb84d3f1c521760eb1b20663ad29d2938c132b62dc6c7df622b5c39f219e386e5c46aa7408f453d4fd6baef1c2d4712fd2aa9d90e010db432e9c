import type React from 'react';
import './index.scss';
import './LlmsViewOptions.scss';
type Option = {
    title: string;
    icon?: React.ReactNode;
    onClick?: () => void;
} | {
    title: string;
    href: string;
    icon?: React.ReactNode;
} | 'markdownLink' | 'chatgpt' | 'claude';
export interface LlmsViewOptionsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Default options for the dropdown.
     * @default ['markdownLink', 'chatgpt', 'claude']
     * - 'chatgpt': Open in ChatGPT
     * - 'claude': Open in Claude
     */
    options?: Option[];
    /**
     * Button text by language, used with `useLang`.
     * @default en: 'Open', zh: '\u6253\u5f00'
     */
    textByLang?: Record<string, string>;
    /**
     * Button text.
     * Priority is higher than textByLang
     * @default ''
     */
    text?: string;
}
export declare function LlmsViewOptions({ options: propsOptions, }: LlmsViewOptionsProps): import("react/jsx-runtime").JSX.Element;
export {};
