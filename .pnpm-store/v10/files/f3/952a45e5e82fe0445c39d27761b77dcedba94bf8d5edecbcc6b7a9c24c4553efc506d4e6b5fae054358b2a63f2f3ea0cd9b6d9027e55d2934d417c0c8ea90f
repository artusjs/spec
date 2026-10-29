import { jsx, jsxs } from "react/jsx-runtime";
import { IconCopy, IconSuccess, SvgWrapper } from "@rspress/core/theme";
import copy_to_clipboard from "copy-to-clipboard";
import { useRef } from "react";
import "./CopyCodeButton.css";
import { useI18n } from "@rspress/core/runtime";
const timeoutIdMap = new Map();
const COPIED_CLASS = 'rp-code-copy-button--copied';
function copyCode(codeBlockElement, copyButtonElement) {
    let text = '';
    if (!codeBlockElement) return;
    const walk = document.createTreeWalker(codeBlockElement, NodeFilter.SHOW_TEXT, null);
    let node = walk.nextNode();
    while(node){
        if (!node.parentElement.classList.contains('linenumber') && !node.parentElement.closest('.rp-copy-ignore')) text += node.nodeValue;
        node = walk.nextNode();
    }
    const isCopied = copy_to_clipboard(text);
    if (isCopied && copyButtonElement) {
        copyButtonElement.classList.add(COPIED_CLASS);
        clearTimeout(timeoutIdMap.get(copyButtonElement));
        const timeoutId = setTimeout(()=>{
            copyButtonElement.classList.remove(COPIED_CLASS);
            copyButtonElement.blur();
            timeoutIdMap.delete(copyButtonElement);
        }, 2000);
        timeoutIdMap.set(copyButtonElement, timeoutId);
    }
}
function CopyCodeButton({ codeBlockRef }) {
    const copyButtonRef = useRef(null);
    const t = useI18n();
    return /*#__PURE__*/ jsxs("button", {
        className: "rp-code-button-group__button rp-code-copy-button",
        onClick: ()=>copyCode(codeBlockRef.current, copyButtonRef.current),
        ref: copyButtonRef,
        title: t('codeButtonGroupCopyButtonText'),
        children: [
            /*#__PURE__*/ jsx(SvgWrapper, {
                icon: IconCopy,
                className: "rp-code-button-group__icon rp-code-copy-button__icon rp-code-copy-button__icon--copy"
            }),
            /*#__PURE__*/ jsx(SvgWrapper, {
                icon: IconSuccess,
                className: "rp-code-button-group__icon rp-code-copy-button__icon rp-code-copy-button__icon--success"
            })
        ]
    });
}
export { CopyCodeButton };
