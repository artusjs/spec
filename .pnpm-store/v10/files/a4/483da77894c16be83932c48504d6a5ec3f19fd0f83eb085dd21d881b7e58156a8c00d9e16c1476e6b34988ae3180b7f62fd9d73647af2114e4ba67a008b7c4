import { toString as mdastToString } from 'mdast-util-to-string';
export class MDASTNodeFactory {
    static matchAllLinks(str) {
        const regex = /\[(.*?)\]\((.*?)\)/g;
        const matches = [...str.matchAll(regex)];
        return matches.map((match) => {
            return { text: match[1], url: match[2] };
        });
    }
    static createRoot(children) {
        return {
            type: 'root',
            children,
        };
    }
    static createAnyNodeParagraphNode(...contents) {
        const children = contents.map((content) => typeof content === 'string'
            ? MDASTNodeFactory.createTextChildren(content)[0]
            : content);
        return {
            type: 'paragraph',
            children,
        };
    }
    static createLinkNode(text, url) {
        return {
            type: 'link',
            url,
            children: MDASTNodeFactory.createTextChildren(text),
        };
    }
    static createHeadingNode(text, depth) {
        return {
            type: 'heading',
            depth,
            children: MDASTNodeFactory.createTextChildren(text),
        };
    }
    static createTextNode(text) {
        return {
            type: 'text',
            value: text,
        };
    }
    static createTextChildren(text) {
        return [MDASTNodeFactory.createTextNode(text)];
    }
    static createParagraphNode(text) {
        return {
            type: 'paragraph',
            children: MDASTNodeFactory.createTextChildren(text),
        };
    }
    static createBlockquote(...contents) {
        const children = contents.map((content) => typeof content === 'string'
            ? MDASTNodeFactory.createParagraphNode(content)
            : content);
        return {
            type: 'blockquote',
            children,
        };
    }
    static createThematicBreakNode() {
        return {
            type: 'thematicBreak',
        };
    }
    static createCodeBlockNode(input) {
        var _a;
        return {
            type: 'code',
            lang: input.lang,
            meta: input.meta,
            value: input.value,
            data: (_a = input.data) !== null && _a !== void 0 ? _a : {},
        };
    }
    static crateTableNode(source, getter) {
        const argTableFirstRow = {
            type: 'tableRow',
            children: Object.keys(getter).map((rowTitle) => {
                return {
                    type: 'tableCell',
                    children: MDASTNodeFactory.createTextChildren(rowTitle),
                };
            }),
        };
        return {
            type: 'table',
            align: Object.keys(getter).map(() => 'center'),
            children: [argTableFirstRow].concat(source.map((member) => {
                return {
                    type: 'tableRow',
                    children: Object.keys(getter).map((rowTitle) => {
                        var _a;
                        const targetGetter = getter[rowTitle];
                        const value = (_a = targetGetter(member)) !== null && _a !== void 0 ? _a : '';
                        const node = typeof value === 'object'
                            ? 'url' in value
                                ? [MDASTNodeFactory.createLinkNode(value.text, value.url)]
                                : [value]
                            : MDASTNodeFactory.createTextChildren(value);
                        return {
                            type: 'tableCell',
                            children: node,
                        };
                    }),
                };
            })),
        };
    }
}
MDASTNodeFactory.toString = mdastToString;
