import { Plugin } from 'unified';
import { ParseOptions, ToStringOptions } from 'yaml';
import * as micromark_util_types from 'micromark-util-types';

interface ComponentHandler {
  name: string
  instance: any
  options?: any
}

interface YamlParseOptions extends ParseOptions {
  preserveOrder?: boolean
}

interface YamlToStringOptions extends ToStringOptions {
  prefix?: string
  suffix?: string
  preserveOrder?: boolean
}

interface RemarkMDCOptions {
  components?: ComponentHandler[]
  frontmatter?: YamlParseOptions
  attributes?: {
    maxLength?: number
    preserveOrder?: boolean
    yamlCodeBlock?: boolean
  }
  autoUnwrap?: boolean | {}
  /**
   * @deprecated Use `attributes.yamlCodeBlock`
   */
  yamlCodeBlockProps?: boolean
  /**
   * @deprecated Use `attributes.maxLength`
   */
  maxAttributesLength?: number
  experimental?: {
    /**
     * @deprecated This feature is out of experimental, use `autoUnwrap`
     */
    autoUnwrap?: boolean
    /**
     * @deprecated This feature is out of experimental, use `yamlCodeBlockProps`
     */
    componentCodeBlockYamlProps?: boolean
  }
}

declare function stringifyFrontMatter(data: any, content?: string, options?: YamlToStringOptions): string;
declare function parseFrontMatter(content: string, options?: YamlParseOptions): {
    content: string;
    data: Record<string, any>;
};

declare const Codes: {
    /**
     * null
     */
    EOF: null;
    /**
     * ' '
     */
    space: number;
    /**
     * '"'
     */
    quotationMark: number;
    /**
     * '#'
     */
    hash: number;
    /**
     * ' ' '
     */
    apostrophe: number;
    /**
     * '('
     */
    openingParentheses: number;
    /**
     * ')'
     */
    closingParentheses: number;
    /**
     * '*'
     */
    star: number;
    /**
     * ','
     */
    comma: number;
    /**
     * '-'
     */
    dash: number;
    /**
     * '.'
     */
    dot: number;
    /**
     * ':'
     */
    colon: number;
    /**
     * '<'
     */
    LessThan: number;
    /**
     * '='
     */
    equals: number;
    /**
     * '>'
     */
    greaterThan: number;
    /**
     * 'X'
     */
    uppercaseX: number;
    /**
     * '['
     */
    openingSquareBracket: number;
    /**
     * '\'
     */
    backSlash: number;
    /**
     * ']'
     */
    closingSquareBracket: number;
    /**
     * '_'
     */
    underscore: number;
    /**
     * '`'
     */
    backTick: number;
    /**
     * 'x'
     */
    lowercaseX: number;
    /**
     * '{'
     */
    openingCurlyBracket: number;
    /**
     * '}'
     */
    closingCurlyBracket: number;
    /**
     * '~'
     */
    tilde: number;
};

declare function micromarkComponentsExtension(): {
    text: {
        [Codes.colon]: {
            tokenize: (this: micromark_util_types.TokenizeContext, effects: micromark_util_types.Effects, ok: micromark_util_types.State, nok: micromark_util_types.State) => (code: micromark_util_types.Code) => undefined | micromark_util_types.State;
            previous: (this: micromark_util_types.TokenizeContext, code: micromark_util_types.Code) => boolean;
        };
        [Codes.openingSquareBracket]: {
            tokenize: (this: micromark_util_types.TokenizeContext, effects: micromark_util_types.Effects, ok: micromark_util_types.State, nok: micromark_util_types.State) => (code: micromark_util_types.Code) => micromark_util_types.State | undefined;
        }[];
        [Codes.openingCurlyBracket]: {
            tokenize: (this: micromark_util_types.TokenizeContext, effects: micromark_util_types.Effects, ok: micromark_util_types.State, nok: micromark_util_types.State) => (code: micromark_util_types.Code) => undefined | micromark_util_types.State;
        }[];
    };
    flow: {
        [Codes.colon]: {
            tokenize: (this: micromark_util_types.TokenizeContext, effects: micromark_util_types.Effects, ok: micromark_util_types.State, nok: micromark_util_types.State) => micromark_util_types.State;
        }[];
    };
    flowInitial: {
        [Codes.space]: {
            tokenize: (this: micromark_util_types.TokenizeContext, effects: micromark_util_types.Effects, ok: micromark_util_types.State, nok: micromark_util_types.State) => micromark_util_types.State;
        };
        '-2': {
            tokenize: (this: micromark_util_types.TokenizeContext, effects: micromark_util_types.Effects, ok: micromark_util_types.State, nok: micromark_util_types.State) => micromark_util_types.State;
        };
        '-1': {
            tokenize: (this: micromark_util_types.TokenizeContext, effects: micromark_util_types.Effects, ok: micromark_util_types.State, nok: micromark_util_types.State) => micromark_util_types.State;
        };
    };
};

declare function convertHtmlEntitiesToChars(text: string): string;

declare module 'unist' {
    interface Data {
        hName?: string;
        hProperties?: Record<string, any>;
    }
}
declare const _default: Plugin<Array<RemarkMDCOptions>>;

export { convertHtmlEntitiesToChars, _default as default, micromarkComponentsExtension as micromarkExtension, parseFrontMatter, stringifyFrontMatter };
export type { RemarkMDCOptions, YamlParseOptions, YamlToStringOptions };
