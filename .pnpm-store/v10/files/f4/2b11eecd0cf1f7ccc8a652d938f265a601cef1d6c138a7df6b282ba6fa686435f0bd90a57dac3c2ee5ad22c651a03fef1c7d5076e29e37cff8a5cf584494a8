import { n as PreHandler, t as InlineCodeHandlers } from "./handlers-DyniaZhL.mjs";
import { isSpecialLang } from "shiki/core";
import { visit } from "unist-util-visit";

//#region src/core.ts
const languagePrefix = "language-";
function rehypeShikiFromHighlighter(highlighter, options) {
	const { addLanguageClass = false, parseMetaString, cache, defaultLanguage, fallbackLanguage, onError, stripEndNewline = true, inline = false, lazy = false, ...rest } = options;
	function highlight(lang, code, metaString = "", meta = {}) {
		const cacheKey = `${lang}:${metaString}:${code}`;
		const cachedValue = cache?.get(cacheKey);
		if (cachedValue) return cachedValue;
		const codeOptions = {
			...rest,
			lang,
			meta: {
				...rest.meta,
				...meta,
				__raw: metaString
			}
		};
		if (addLanguageClass) codeOptions.transformers = [...codeOptions.transformers ?? [], {
			name: "rehype-shiki:code-language-class",
			code(node) {
				this.addClassToHast(node, `${languagePrefix}${lang}`);
				return node;
			}
		}];
		if (stripEndNewline && code.endsWith("\n")) code = code.slice(0, -1);
		try {
			const fragment = highlighter.codeToHast(code, codeOptions);
			cache?.set(cacheKey, fragment);
			return fragment;
		} catch (error) {
			if (onError) onError(error);
			else throw error;
		}
	}
	return (tree) => {
		const queue = [];
		visit(tree, "element", (node, index, parent) => {
			let handler;
			if (!parent || index == null) return;
			if (node.tagName === "pre") handler = PreHandler;
			else if (node.tagName === "code" && inline) handler = InlineCodeHandlers[inline];
			else return;
			const parsed = handler(tree, node);
			if (!parsed) return;
			let lang;
			let lazyLoad = false;
			if (!parsed.lang) lang = defaultLanguage;
			else if (highlighter.getLoadedLanguages().includes(parsed.lang) || isSpecialLang(parsed.lang)) lang = parsed.lang;
			else if (lazy) {
				lazyLoad = true;
				lang = parsed.lang;
			} else if (fallbackLanguage) lang = fallbackLanguage;
			if (!lang) return;
			const meta = parsed.meta ? parseMetaString?.(parsed.meta, node, tree) : void 0;
			const processNode = (targetLang) => {
				const fragment = highlight(targetLang, parsed.code, parsed.meta, meta ?? {});
				if (!fragment) return;
				if (parsed.type === "inline") {
					const head = fragment.children[0];
					if (head.type === "element" && head.tagName === "pre") head.tagName = "span";
				}
				parent.children[index] = fragment;
			};
			if (lazyLoad) try {
				queue.push(highlighter.loadLanguage(lang).then(() => processNode(lang)).catch((error) => {
					if (fallbackLanguage) processNode(fallbackLanguage);
					else if (onError) onError(error);
					else throw error;
				}));
			} catch (error) {
				if (fallbackLanguage) return processNode(fallbackLanguage);
				else if (onError) onError(error);
				else throw error;
			}
			else processNode(lang);
			return "skip";
		});
		if (queue.length > 0) {
			async function run() {
				await Promise.all(queue);
			}
			return run();
		}
	};
}

//#endregion
export { rehypeShikiFromHighlighter as default };