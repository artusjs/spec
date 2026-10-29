import { usePage } from "@rspress/core/runtime";
import { useCallback, useEffect, useState } from "react";
import { processTitleElement } from "./processTitleElement.js";
const updateFns = {};
const useForceUpdate = ()=>{
    const [, setTick] = useState(0);
    return ()=>setTick((tick)=>tick + 1);
};
const distributeUpdate = ()=>{
    for (const fn of Object.values(updateFns))fn();
};
const useSubScribe = ()=>{
    const forceUpdate = useForceUpdate();
    useEffect(()=>{
        const id = Math.random().toString(36).slice(2);
        updateFns[id] = forceUpdate;
        return ()=>{
            delete updateFns[id];
        };
    }, [
        forceUpdate
    ]);
};
const headers = {
    current: []
};
function isElementOnlyVisible(element) {
    const style = window.getComputedStyle(element);
    return 'none' !== style.display && '0' !== style.opacity && 'hidden' !== style.visibility;
}
function isElementVisible(element) {
    let currentElement = element;
    const rootElement = document.querySelector('.rspress-doc');
    while(currentElement)if (!isElementOnlyVisible(currentElement)) return false;
    else {
        currentElement = currentElement.parentElement;
        if (currentElement === rootElement) break;
    }
    return true;
}
const useDynamicToc = ()=>{
    const { page: { toc = [] } } = usePage();
    useSubScribe();
    return headers.current.length > 0 ? headers.current : toc;
};
function updateHeaders(target) {
    const collectedHeaders = [];
    const elements = target?.querySelectorAll('.rspress-doc h2.rp-toc-include, h3.rp-toc-include, h4.rp-toc-include');
    elements?.forEach((el)=>{
        if (!el.closest('.rspress-toc-exclude,.rp-toc-exclude') && isElementVisible(el)) collectedHeaders.push({
            id: el.id,
            text: processTitleElement(el).innerHTML,
            depth: Number.parseInt(el.tagName[1], 10),
            charIndex: 0
        });
    });
    headers.current = [
        ...collectedHeaders
    ];
    distributeUpdate();
}
const TOC_HEADING_TAGS = new Set([
    'H2',
    'H3',
    'H4'
]);
const useWatchToc = ()=>{
    const [innerRef, setRef] = useState(null);
    useEffect(()=>{
        let observer = null;
        const target = innerRef;
        if (target) updateHeaders(target);
        if (target && !observer) {
            observer = new MutationObserver((mutationList)=>{
                let needUpdate = false;
                check: for (const mutation of mutationList)for (const nodes of [
                    mutation.addedNodes,
                    mutation.removedNodes
                ])for (const node of nodes){
                    if (TOC_HEADING_TAGS.has(node.tagName) || node.parentElement?.closest('h2,h3,h4')) {
                        needUpdate = true;
                        break check;
                    }
                    for (const child of node.childNodes)if (TOC_HEADING_TAGS.has(child.tagName)) {
                        needUpdate = true;
                        break check;
                    }
                }
                needUpdate && updateHeaders(target);
            });
            observer.observe(target, {
                childList: true,
                subtree: true
            });
        }
        return ()=>{
            observer?.disconnect();
            observer = null;
        };
    }, [
        innerRef
    ]);
    const rspressDocRef = useCallback((ref)=>{
        setRef(ref);
    }, [
        setRef
    ]);
    return {
        rspressDocRef
    };
};
export { useDynamicToc, useWatchToc };
