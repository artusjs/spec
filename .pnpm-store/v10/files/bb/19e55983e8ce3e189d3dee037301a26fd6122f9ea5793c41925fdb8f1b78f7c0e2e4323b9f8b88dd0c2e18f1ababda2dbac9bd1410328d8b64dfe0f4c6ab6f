import { gfmStrikethroughCjkFriendly } from "micromark-extension-cjk-friendly-gfm-strikethrough";

//#region src/index.ts
/**
* Make Markdown strikethrough (`~~`) in GFM more friendly with Chinese, Japanese, and Korean (CJK)
*/
function remarkGfmStrikethroughCjkFriendly(options) {
	const data = this.data();
	(data.micromarkExtensions || (data.micromarkExtensions = [])).push(gfmStrikethroughCjkFriendly(options));
}

//#endregion
export { remarkGfmStrikethroughCjkFriendly as default };