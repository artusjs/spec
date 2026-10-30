import { type RemarkPluginFactory } from '../Exports/Unist';
import type { Content } from 'mdast';
import type { VFile } from 'vfile';
import type { Dictionary, MaybeArray } from 'util-ts-types';
/**
 * Directives can be transformed to:
 *
 * - MDAST Node, reference directive usually, like `:comment` referencing to JSDoc comment node.
 * - Global component, like `:info` referencing to built-in `Info` component.
 */
declare const directiveTypes: string[] & {
    _type: "textComponent" | "containerComponent";
};
declare const directiveTransformerTypes: string[] & {
    _type: "globalComponent" | "astNode";
};
export type DirectiveTypes = typeof directiveTypes._type;
export type DirectiveTransformerTypes = typeof directiveTransformerTypes._type;
type ParsedDirectiveMeta<Attrs = Dictionary<string>> = {
    type: DirectiveTypes;
    name: string;
    attributes: Attrs;
};
type Directive2ComponentTransformer<DirectiveAttributes = Dictionary<string>, Ext = {}> = {
    type: 'globalComponent';
    getComponentName: (meta: ParsedDirectiveMeta<DirectiveAttributes>, vfile: VFile) => string;
    getComponentProps?: (attributes: DirectiveAttributes, vfile: VFile) => Dictionary<string>;
    getComponentChildren?: (meta: ParsedDirectiveMeta<DirectiveAttributes>, node: any, vfile: VFile) => string;
} & Ext;
type Directive2AstNodeTransformer<DirectiveAttributes = Dictionary<string>, Ext = {}> = {
    type: 'astNode';
    getContent: (meta: ParsedDirectiveMeta<DirectiveAttributes>, vfile: VFile) => Content[];
} & Ext;
export type RemarkDirectiveTransformer<DirectiveAttributes = Dictionary<string>, GlobalComponentExt = {}, ASTNodeExt = {}> = {
    directive: string;
    transformer: Directive2ComponentTransformer<DirectiveAttributes, GlobalComponentExt> | Directive2AstNodeTransformer<DirectiveAttributes, ASTNodeExt>;
};
export type RemarkTransformDirectiveOptions = MaybeArray<RemarkDirectiveTransformer>;
export declare const remarkTransformDirective: RemarkPluginFactory<RemarkTransformDirectiveOptions>;
export declare const remarkParseDirective: RemarkPluginFactory;
export {};
