import { toString } from "hast-util-to-string";

//#region src/handlers.ts
const InlineCodeHandlers = { "tailing-curly-colon": (_tree, node) => {
	const raw = toString(node);
	const match = raw.match(/(.+)\{:([\w-]+)\}$/);
	if (!match) return;
	return {
		type: "inline",
		code: match[1] ?? raw,
		lang: match.at(2)
	};
} };
const languagePrefix = "language-";
const PreHandler = (_tree, node) => {
	const head = node.children[0];
	if (!head || head.type !== "element" || head.tagName !== "code" || !head.properties) return;
	const classes = head.properties.className;
	const languageClass = Array.isArray(classes) ? classes.find((d) => typeof d === "string" && d.startsWith(languagePrefix)) : void 0;
	return {
		type: "pre",
		lang: typeof languageClass === "string" ? languageClass.slice(9) : void 0,
		code: toString(head),
		meta: head.data?.meta ?? head.properties.metastring?.toString() ?? ""
	};
};

//#endregion
export { PreHandler as n, InlineCodeHandlers as t };