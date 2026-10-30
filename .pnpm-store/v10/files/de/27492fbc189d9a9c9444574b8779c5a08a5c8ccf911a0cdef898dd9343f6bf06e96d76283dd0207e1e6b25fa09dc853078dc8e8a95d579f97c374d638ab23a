const MAX_TITLE_LENGTH = 20;
const kRegex = /[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/u;
const cyrillicRegex = /[\u0400-\u04FF]/u;
function backTrackHeaders(rawHeaders, index) {
    let current = rawHeaders[index];
    let currentIndex = index;
    const res = [
        current
    ];
    while(current && current.depth > 2){
        let matchedParent = false;
        for(let i = currentIndex - 1; i >= 0; i--){
            const header = rawHeaders[i];
            if (header.depth > 1 && header.depth === current.depth - 1) {
                current = header;
                currentIndex = i;
                res.unshift(current);
                matchedParent = true;
                break;
            }
        }
        if (!matchedParent) break;
    }
    return res;
}
function formatText(text) {
    return text.length > MAX_TITLE_LENGTH ? `${text.slice(0, MAX_TITLE_LENGTH)}...` : text;
}
function normalizeTextCase(text) {
    const textNormalized = text.toString().toLowerCase().normalize('NFD');
    if (cyrillicRegex.test(String(text))) return textNormalized.normalize('NFC');
    const resultWithoutAccents = textNormalized.replace(/[\u0300-\u036f]/g, '');
    if (kRegex.test(String(text))) return resultWithoutAccents.normalize('NFC');
    return resultWithoutAccents;
}
function removeDomain(url) {
    return url.replace(/https?:\/\/[^/]+/, '');
}
function getCharByteCount(char) {
    const charCode = char.charCodeAt(0);
    if (charCode > 255) return 3;
    return 1;
}
function substrByBytes(str, start, len) {
    let resultStr = '';
    let bytesCount = 0;
    const strLength = str.length;
    for(let i = 0; i < strLength; i++){
        bytesCount += getCharByteCount(str.charAt(i));
        if (bytesCount > start + len) break;
        if (bytesCount > start) resultStr += str.charAt(i);
    }
    return resultStr;
}
function byteToCharIndex(str, byteIndex) {
    let charIndex = 0;
    let byteCount = 0;
    for(let i = 0; i < str.length; i++){
        if (byteCount >= byteIndex) break;
        byteCount += getCharByteCount(str.charAt(i));
        charIndex++;
    }
    return charIndex;
}
function getSlicedStrByByteLength(str, start, length) {
    const slicedStr = str.slice(start);
    return substrByBytes(slicedStr, 0, length);
}
function getStrByteLength(str) {
    let byteLength = 0;
    for(let i = 0; i < str.length; i++)byteLength += getCharByteCount(str.charAt(i));
    return byteLength;
}
export { backTrackHeaders, byteToCharIndex, formatText, getSlicedStrByByteLength, getStrByteLength, normalizeTextCase, removeDomain, substrByBytes };
