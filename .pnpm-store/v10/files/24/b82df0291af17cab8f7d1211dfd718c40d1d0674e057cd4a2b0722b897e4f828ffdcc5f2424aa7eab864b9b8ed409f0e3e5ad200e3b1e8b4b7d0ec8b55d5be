function processTitleElement(element) {
    const elementClone = element.cloneNode(true);
    const anchorElement = elementClone.querySelector('.rp-header-anchor');
    if (anchorElement) elementClone.removeChild(anchorElement);
    const excludeElements = elementClone.querySelectorAll('.rspress-toc-exclude,.rp-toc-exclude');
    excludeElements.forEach((excludeElement)=>{
        const parentElement = excludeElement.parentElement;
        if (parentElement) parentElement.removeChild(excludeElement);
    });
    const anchorElements = elementClone.querySelectorAll('a');
    anchorElements.forEach((anchor)=>{
        const tempContainer = document.createDocumentFragment();
        while(anchor.firstChild)tempContainer.appendChild(anchor.firstChild);
        anchor.replaceWith(tempContainer);
    });
    const commentNodes = elementClone.childNodes;
    commentNodes.forEach((node)=>{
        if (node.nodeType === Node.COMMENT_NODE) node.remove();
    });
    return elementClone;
}
export { processTitleElement };
