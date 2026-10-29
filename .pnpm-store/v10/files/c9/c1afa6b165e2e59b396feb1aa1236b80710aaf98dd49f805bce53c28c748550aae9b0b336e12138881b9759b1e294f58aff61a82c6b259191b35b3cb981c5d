import copy_to_clipboard from "copy-to-clipboard";
async function copyToClipboard(text) {
    if (navigator.clipboard?.writeText) try {
        await navigator.clipboard.writeText(text);
        return;
    } catch  {}
    copy_to_clipboard(text);
}
export { copyToClipboard };
