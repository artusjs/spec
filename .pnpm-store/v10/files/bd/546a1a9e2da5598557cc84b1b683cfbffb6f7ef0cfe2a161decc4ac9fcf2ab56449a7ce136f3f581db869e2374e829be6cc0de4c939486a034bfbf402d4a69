export type SvgWrapperProps = {
    icon: string | React.FC<React.SVGProps<SVGSVGElement>>;
} & React.SVGProps<SVGSVGElement>;
/**
 * A wrapper for custom SVG icon.
 * When the user uses a custom SVG, the imported icon can be a string or a React component.
 * - React component: render directly
 * - SVG string (starts with `<svg`): render with dangerouslySetInnerHTML
 * - URL/path: render with `<img>`
 * - Other strings (emoji/text/HTML): render with renderHtmlOrText
 * @internal
 */
export declare function SvgWrapper({ icon: Icon, ...rest }: SvgWrapperProps): import("react/jsx-runtime").JSX.Element | null;
