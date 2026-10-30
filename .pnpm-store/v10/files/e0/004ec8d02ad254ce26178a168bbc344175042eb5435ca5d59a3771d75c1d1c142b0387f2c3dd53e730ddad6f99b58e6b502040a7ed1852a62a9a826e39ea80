import './index.scss';
import './LlmsCopyButton.scss';
export interface LlmsCopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Text by language, used with `useLang`.
     * @default en: 'Copy Markdown', zh: '\u590d\u5236 Markdown'
     */
    textByLang?: Record<string, string>;
    /**
     * Priority is higher than textByLang
     * @default ''
     */
    text?: string;
    /**
     * Overrides the default click handler.
     * If provided, the default copy to clipboard functionality will not be executed.
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export declare function LlmsCopyButton(props: LlmsCopyButtonProps): import("react/jsx-runtime").JSX.Element;
