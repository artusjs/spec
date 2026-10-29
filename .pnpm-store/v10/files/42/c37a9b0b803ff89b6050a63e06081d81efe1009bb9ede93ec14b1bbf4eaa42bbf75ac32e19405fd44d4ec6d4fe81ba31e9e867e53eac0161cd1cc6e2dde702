import { n as RehypeShikiCoreOptions } from "./types-Wi2EaRpk.mjs";
import { BuiltinLanguage } from "shiki";
import { LanguageInput } from "@shikijs/types";
import { Root } from "hast";
import { Plugin } from "unified";

//#region src/index.d.ts
type RehypeShikiOptions = RehypeShikiCoreOptions & {
  /**
   * Language names to include.
   *
   * @default Object.keys(bundledLanguages)
   */
  langs?: Array<LanguageInput | BuiltinLanguage>;
  /**
   * Alias of languages
   * @example { 'my-lang': 'javascript' }
   */
  langAlias?: Record<string, string>;
};
declare const rehypeShiki: Plugin<[RehypeShikiOptions], Root>;
//#endregion
export { RehypeShikiOptions, rehypeShiki as default };