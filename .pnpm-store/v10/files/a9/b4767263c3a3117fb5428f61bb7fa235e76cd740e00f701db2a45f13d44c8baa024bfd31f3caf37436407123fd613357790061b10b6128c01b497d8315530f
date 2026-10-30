import { cjkFriendlyExtension } from "micromark-extension-cjk-friendly";

//#region src/index.ts
/**
* Make Markdown emphasis (`**`) in CommonMark more friendly with Chinese, Japanese, and Korean (CJK).
*/
function remarkCjkFriendly() {
	const data = this.data();
	(data.micromarkExtensions || (data.micromarkExtensions = [])).push(cjkFriendlyExtension());
}

//#endregion
export { remarkCjkFriendly as default };