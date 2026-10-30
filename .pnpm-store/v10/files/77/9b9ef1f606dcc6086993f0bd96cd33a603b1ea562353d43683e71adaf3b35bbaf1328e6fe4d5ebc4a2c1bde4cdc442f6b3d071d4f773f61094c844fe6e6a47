import rehypeShikiFromHighlighter from "./core.mjs";
import { bundledLanguages, getSingletonHighlighter } from "shiki";

//#region src/index.ts
const rehypeShiki = function(options = {}) {
	const themeNames = ("themes" in options ? Object.values(options.themes) : [options.theme]).filter(Boolean);
	const langs = options.langs || Object.keys(bundledLanguages);
	const langAlias = options.langAlias || {};
	let getHandler;
	return async (tree) => {
		if (!getHandler) getHandler = getSingletonHighlighter({
			themes: themeNames,
			langs,
			langAlias
		}).then((highlighter) => rehypeShikiFromHighlighter.call(this, highlighter, options));
		return (await getHandler)(tree);
	};
};

//#endregion
export { rehypeShiki as default };