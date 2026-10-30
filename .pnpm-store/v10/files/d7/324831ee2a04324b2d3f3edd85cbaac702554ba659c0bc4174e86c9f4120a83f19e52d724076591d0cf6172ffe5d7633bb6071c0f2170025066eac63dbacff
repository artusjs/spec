import createReconciler from 'react-reconciler';
export declare class TextNode {
    text: string;
    parent?: MarkdownNode;
    constructor(text: string);
    setText(text: string): void;
}
export declare class MarkdownNode {
    type: string;
    props: Record<string, unknown>;
    children: (MarkdownNode | TextNode)[];
    parent?: MarkdownNode;
    constructor(type: string, props?: Record<string, unknown>);
    appendChild(child: MarkdownNode | TextNode): void;
    removeChild(child: MarkdownNode | TextNode): void;
    insertBefore(child: MarkdownNode | TextNode, beforeChild: MarkdownNode | TextNode): void;
}
export declare const reconciler: createReconciler.Reconciler<MarkdownNode, MarkdownNode, TextNode, MarkdownNode, unknown, unknown>;
