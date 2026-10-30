/**
 * 🚀 This plugin is used to support container directive in unified.
 * Taking into account the compatibility of the VuePress/Docusaurus container directive, current remark plugin in unified ecosystem only supports the following syntax:
 * ::: tip {title="foo"}
 * This is a tip
 * :::
 * But the following syntax is not supported:
 * ::: tip foo
 * This is a tip
 * :::
 * In fact, the syntax is usually used in SSG Frameworks, such as VuePress/Docusaurus.
 * So the plugin is used to solve the problem and support both syntaxes in above cases.
 */
import type { Root } from 'mdast';
import type { Plugin } from 'unified';
export declare const DIRECTIVE_TYPES: readonly ["tip", "note", "warning", "caution", "danger", "info", "details"];
export declare const REGEX_BEGIN: RegExp;
export declare const REGEX_END: RegExp;
export declare const REGEX_GH_BEGIN: RegExp;
export declare const TITLE_REGEX_IN_MD: RegExp;
export declare const TITLE_REGEX_IN_MDX: RegExp;
export type DirectiveType = (typeof DIRECTIVE_TYPES)[number];
export declare const remarkContainerSyntax: Plugin<[], Root>;
