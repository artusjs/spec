import { getNamedImportAstNode } from "../../utils/getImportAstNode.js";
const DIRECTIVE_TYPES = [
    'tip',
    'note',
    'warning',
    'caution',
    'danger',
    'info',
    'details'
];
const REGEX_BEGIN = /^\s*:::\s*(\w+)\s*(.*)?/;
const REGEX_END = /\s*:::$/;
const REGEX_GH_BEGIN = /^\s*\s*\[!(\w+)\]\s*(.*)?/;
const TITLE_REGEX_IN_MD = /{\s*title=["']?(.+)}\s*/;
const TITLE_REGEX_IN_MDX = /\s*title=["']?(.+)\s*/;
const CALLOUT_COMPONENT = '$$$callout$$$';
const trimTailingQuote = (str)=>str.replace(/['"]$/g, '');
const parseTitle = (rawTitle = '', isMDX = false)=>{
    const matched = rawTitle?.match(isMDX ? TITLE_REGEX_IN_MDX : TITLE_REGEX_IN_MD);
    return trimTailingQuote(matched?.[1] || rawTitle);
};
const getTypeName = (type)=>type[0].toUpperCase() + type.slice(1).toLowerCase();
const createContainer = (type, title, children)=>({
        type: 'containerDirective',
        name: CALLOUT_COMPONENT,
        attributes: {
            type: type,
            title: title || getTypeName(type)
        },
        data: {
            hName: CALLOUT_COMPONENT,
            hProperties: {
                type: type,
                title: title || getTypeName(type)
            }
        },
        children: children
    });
function transformer(tree, warnUnknownType) {
    let i = 0;
    while(i < tree.children.length){
        const node = tree.children[i];
        if ('children' in node) transformer(node, warnUnknownType);
        if ('containerDirective' === node.type) {
            const type = node.name;
            if (type === CALLOUT_COMPONENT) {
                i++;
                continue;
            }
            if (DIRECTIVE_TYPES.includes(type)) tree.children.splice(i, 1, createContainer(type, node.attributes?.title ?? type.toUpperCase(), node.children));
            else warnUnknownType(type);
        } else if ('blockquote' === node.type && node.children[0]?.type === 'paragraph' && node.children[0].children?.[0] && 'value' in node.children[0].children[0]) {
            const initiatorTag = node.children[0].children[0].value;
            const match = initiatorTag.match(REGEX_GH_BEGIN);
            if (match) {
                const [, type] = match;
                if (!DIRECTIVE_TYPES.includes(type.toLowerCase())) {
                    warnUnknownType(type);
                    i++;
                    continue;
                }
                if (1 === node.children.length && 'paragraph' === node.children[0].type) node.children[0].children[0].value = match[2] ?? '';
                const newChild = createContainer(type.toLowerCase(), type.toUpperCase(), 0 === node.children.slice(1).length ? node.children.slice(0) : node.children.slice(1));
                tree.children.splice(i, 1, newChild);
            }
        }
        if ('paragraph' !== node.type || 'text' !== node.children[0].type) {
            i++;
            continue;
        }
        const firstTextNode = node.children[0];
        const text = firstTextNode.value;
        const metaText = text.split('\n')[0];
        const content = text.slice(metaText.length);
        const match = metaText.match(REGEX_BEGIN);
        if (!match) {
            i++;
            continue;
        }
        const [, type, rawTitle] = match;
        let title = parseTitle(rawTitle);
        const titleExpressionNode = node.children[1] && 'mdxTextExpression' === node.children[1].type ? node.children[1] : null;
        if (titleExpressionNode) {
            title = parseTitle(titleExpressionNode.value, true);
            node.children.splice(1, 1);
        }
        if (!DIRECTIVE_TYPES.includes(type)) {
            warnUnknownType(type);
            i++;
            continue;
        }
        const wrappedChildren = [];
        if (content?.endsWith(':::')) {
            wrappedChildren.push({
                type: 'paragraph',
                children: [
                    {
                        type: 'text',
                        value: content.replace(REGEX_END, '')
                    }
                ]
            });
            const newChild = createContainer(type, title, wrappedChildren);
            tree.children.splice(i, 1, newChild);
        } else {
            const paragraphChild = {
                type: 'paragraph',
                children: []
            };
            wrappedChildren.push(paragraphChild);
            if (content.length) paragraphChild.children.push({
                type: 'text',
                value: content
            });
            paragraphChild.children.push(...node.children.slice(1, -1));
            if (0 === paragraphChild.children.length) wrappedChildren.pop();
            const lastChildInNode = node.children[node.children.length - 1];
            if ('text' === lastChildInNode.type && REGEX_END.test(lastChildInNode.value)) {
                const lastChildInNodeText = lastChildInNode.value;
                const matchedEndContent = lastChildInNodeText.slice(0, -3).trimEnd();
                if (wrappedChildren.length) wrappedChildren[0].children.push({
                    type: 'text',
                    value: matchedEndContent
                });
                else if (matchedEndContent) wrappedChildren.push({
                    type: 'paragraph',
                    children: [
                        {
                            type: 'text',
                            value: matchedEndContent
                        }
                    ]
                });
                const newChild = createContainer(type, title, wrappedChildren);
                tree.children.splice(i, 1, newChild);
                i++;
                continue;
            }
            if (lastChildInNode !== firstTextNode && wrappedChildren.length) wrappedChildren[0].children.push(lastChildInNode);
            let j = i + 1;
            while(j < tree.children.length){
                const currentParagraph = tree.children[j];
                if ('paragraph' !== currentParagraph.type) {
                    wrappedChildren.push(currentParagraph);
                    j++;
                    continue;
                }
                const lastChild = currentParagraph.children[currentParagraph.children.length - 1];
                if (lastChild === firstTextNode || 'text' === lastChild.type && REGEX_END.test(lastChild.value)) {
                    const lastChildText = lastChild.value;
                    const matchedEndContent = lastChildText.slice(0, -3).trimEnd();
                    const filteredChildren = currentParagraph.children.filter((child)=>child !== firstTextNode && child !== lastChild);
                    if (matchedEndContent) wrappedChildren.push({
                        type: 'paragraph',
                        children: [
                            ...filteredChildren,
                            {
                                type: 'text',
                                value: matchedEndContent
                            }
                        ]
                    });
                    else wrappedChildren.push(...filteredChildren);
                    const newChild = createContainer(type, title, wrappedChildren);
                    tree.children.splice(i, j - i + 1, newChild);
                    break;
                }
                wrappedChildren.push({
                    ...currentParagraph,
                    children: currentParagraph.children.filter((child)=>child !== firstTextNode)
                });
                j++;
            }
        }
        i++;
    }
}
const remarkContainerSyntax = ()=>{
    const unknownTypes = new Set();
    const warnUnknownType = (type)=>{
        if (!type || type === CALLOUT_COMPONENT) return;
        if (unknownTypes.has(type)) return;
        unknownTypes.add(type);
    };
    return (tree)=>{
        transformer(tree, warnUnknownType);
        tree.children.unshift(getNamedImportAstNode('Callout', CALLOUT_COMPONENT, '@theme'));
    };
};
var containerSyntax_DIRECTIVE_TYPES = void 0;
var containerSyntax_REGEX_BEGIN = void 0;
var containerSyntax_REGEX_END = void 0;
var containerSyntax_REGEX_GH_BEGIN = void 0;
var containerSyntax_TITLE_REGEX_IN_MD = void 0;
var containerSyntax_TITLE_REGEX_IN_MDX = void 0;
export { containerSyntax_DIRECTIVE_TYPES as DIRECTIVE_TYPES, containerSyntax_REGEX_BEGIN as REGEX_BEGIN, containerSyntax_REGEX_END as REGEX_END, containerSyntax_REGEX_GH_BEGIN as REGEX_GH_BEGIN, containerSyntax_TITLE_REGEX_IN_MD as TITLE_REGEX_IN_MD, containerSyntax_TITLE_REGEX_IN_MDX as TITLE_REGEX_IN_MDX, remarkContainerSyntax };
