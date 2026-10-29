import { toString as mdastToString } from 'mdast-util-to-string';
import type { Root, Heading, Code, Paragraph, Link, Text, Table, Blockquote, ThematicBreak, Content } from 'mdast';
export type Depth = Heading['depth'];
export declare class MDASTNodeFactory {
    static matchAllLinks(str: string): {
        text: string;
        url: string;
    }[];
    static createRoot(children: Content[]): Root;
    static createAnyNodeParagraphNode(...contents: any): Paragraph;
    static createLinkNode(text: string, url: string): Link;
    static createHeadingNode(text: string, depth: Depth): Heading;
    static createTextNode(text: string): Text;
    static toString: typeof mdastToString;
    static createTextChildren(text: string): Text[];
    static createParagraphNode(text: string): Paragraph;
    static createBlockquote(...contents: any[]): Blockquote;
    static createThematicBreakNode(): ThematicBreak;
    static createCodeBlockNode(input: {
        lang: string;
        value: string;
        meta?: string | null;
        data?: Record<string, unknown>;
    }): Code;
    static crateTableNode<T extends any = any>(source: T[], getter: {
        [key: string]: (source: T) => string | {
            text: string;
            url: string;
        } | Paragraph;
    }): Table;
}
