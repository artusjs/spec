import { LOCAL_INDEX } from "./Provider.js";
import { LocalProvider } from "./providers/LocalProvider.js";
import { RenderType } from "./types.js";
import { backTrackHeaders, byteToCharIndex, getStrByteLength, normalizeTextCase } from "./util.js";
const THRESHOLD_CONTENT_LENGTH = 100;
class PageSearcher {
    #options;
    #indexName = LOCAL_INDEX;
    #provider;
    constructor(options){
        this.#options = options;
        this.#indexName = options.indexName ?? LOCAL_INDEX;
        this.#provider = new LocalProvider();
    }
    async init() {
        await this.#provider?.init(this.#options);
    }
    async fetchSearchIndex() {
        return this.#provider?.fetchSearchIndex(this.#options);
    }
    async match(keyword, limit = 7) {
        const searchResult = await this.#provider?.search({
            keyword,
            limit
        });
        const normalizedKeyWord = normalizeTextCase(keyword);
        const currentIndexInfo = searchResult?.find((res)=>this.#isCurrentIndex(res.index)) || {
            index: LOCAL_INDEX,
            renderType: RenderType.Default,
            hits: []
        };
        const matchResult = [
            {
                group: this.#indexName,
                renderType: RenderType.Default,
                result: this.#matchResultItem(normalizedKeyWord, currentIndexInfo)
            },
            ...(searchResult?.filter((res)=>!this.#isCurrentIndex(res.index)) || []).map((res)=>({
                    group: res.index,
                    renderType: RenderType.Default,
                    result: this.#matchResultItem(normalizedKeyWord, res)
                }))
        ];
        return matchResult;
    }
    #matchResultItem(normalizedKeyWord, resultItem) {
        const matchedResult = [];
        resultItem?.hits.forEach((item)=>{
            this.#matchTitle(item, normalizedKeyWord, matchedResult);
            const matchHeaderSet = this.#matchHeader(item, normalizedKeyWord, matchedResult);
            this.#matchContent(item, normalizedKeyWord, matchedResult, matchHeaderSet);
        });
        return matchedResult;
    }
    #matchTitle(item, query, matchedResult) {
        const { title = '' } = item;
        const normalizedTitle = normalizeTextCase(title);
        if (normalizedTitle.includes(query)) {
            matchedResult.push({
                type: 'title',
                title,
                header: title,
                link: item.routePath,
                query,
                highlightInfoList: [
                    {
                        start: normalizedTitle.indexOf(query),
                        length: getStrByteLength(query)
                    }
                ]
            });
            return true;
        }
        return false;
    }
    #matchHeader(item, query, matchedResult) {
        const matchHeaderSet = new WeakSet();
        const { toc = [], title = '' } = item;
        for (const [index, header] of toc.entries()){
            const normalizedHeader = normalizeTextCase(header.text);
            if (normalizedHeader.includes(query)) {
                const headerGroup = backTrackHeaders(toc, index);
                const headerStr = headerGroup.map((item)=>item.text).join(' > ');
                const headerMatchIndex = normalizeTextCase(headerStr).indexOf(query);
                const titlePrefix = `${title} > `;
                matchedResult.push({
                    type: 'header',
                    title: item.title,
                    header: `${titlePrefix}${headerStr}`,
                    highlightInfoList: [
                        {
                            start: headerMatchIndex + titlePrefix.length,
                            length: getStrByteLength(query)
                        }
                    ],
                    link: `${item.routePath}#${header.id}`,
                    query
                });
                matchHeaderSet.add(header);
            }
        }
        return matchHeaderSet;
    }
    #matchContent(item, query, matchedResult, matchHeaderSet) {
        const { content, toc } = item;
        if (!content.length) return;
        const normalizedContent = normalizeTextCase(content);
        let queryIndex = normalizedContent.indexOf(query);
        const headersIndex = toc.map((h)=>h.charIndex);
        const getCurrentHeader = (currentIndex)=>{
            const currentHeaderIndex = headersIndex.findIndex((hIndex, position)=>{
                if (!(position < toc.length - 1)) return hIndex < currentIndex;
                {
                    const next = headersIndex[position + 1];
                    if (hIndex <= currentIndex && next >= currentIndex) return true;
                }
                return false;
            });
            return toc[currentHeaderIndex];
        };
        const isHeaderMatched = (header)=>header && matchHeaderSet?.has(header);
        if (-1 === queryIndex) {
            const highlightItems = item._matchesPosition?.content;
            if (!highlightItems?.length) return;
            const highlightStartIndex = item._matchesPosition.content[0].start;
            const currentHeader = getCurrentHeader(highlightStartIndex);
            if (isHeaderMatched(currentHeader)) return;
            const statementStartIndex = byteToCharIndex(content, highlightStartIndex);
            const statementEndIndex = byteToCharIndex(content, highlightStartIndex + THRESHOLD_CONTENT_LENGTH);
            const statement = content.slice(statementStartIndex, statementEndIndex);
            const highlightInfoList = item._matchesPosition.content.filter((match)=>match.start >= highlightStartIndex && match.start + match.length <= highlightStartIndex + THRESHOLD_CONTENT_LENGTH).map((match)=>{
                const startCharIndex = byteToCharIndex(content, match.start) - statementStartIndex + 3;
                return {
                    start: startCharIndex,
                    length: match.length
                };
            });
            matchedResult.push({
                type: 'content',
                title: item.title,
                header: currentHeader?.text ?? item.title,
                link: `${item.routePath}${currentHeader ? `#${currentHeader.id}` : ''}`,
                query,
                highlightInfoList,
                statement: `...${statement}...`
            });
            return;
        }
        while(-1 !== queryIndex){
            const currentHeader = getCurrentHeader(queryIndex);
            let statementStartIndex = content.slice(0, queryIndex).lastIndexOf('\n');
            statementStartIndex = -1 === statementStartIndex ? 0 : statementStartIndex;
            const statementEndIndex = content.indexOf('\n\n', queryIndex + query.length);
            let statement = content.slice(statementStartIndex, statementEndIndex);
            if (statement.length > THRESHOLD_CONTENT_LENGTH) statement = this.#normalizeStatement(statement, query);
            const highlightIndex = normalizeTextCase(statement).indexOf(query);
            const highlightInfoList = [
                {
                    start: highlightIndex,
                    length: getStrByteLength(query)
                }
            ];
            if (!isHeaderMatched(currentHeader)) {
                matchedResult.push({
                    type: 'content',
                    title: item.title,
                    header: currentHeader?.text ?? item.title,
                    statement,
                    highlightInfoList,
                    link: `${item.routePath}${currentHeader ? `#${currentHeader.id}` : ''}`,
                    query
                });
                currentHeader && matchHeaderSet?.add(currentHeader);
            }
            queryIndex = normalizedContent.indexOf(query, queryIndex + statement.length - highlightIndex);
        }
    }
    #normalizeStatement(statement, query) {
        const queryIndex = normalizeTextCase(statement).indexOf(normalizeTextCase(query));
        const maxPrefixOrSuffix = Math.floor((THRESHOLD_CONTENT_LENGTH - query.length) / 2);
        let prefix = statement.slice(0, queryIndex);
        if (prefix.length > maxPrefixOrSuffix) prefix = `...${statement.slice(queryIndex - maxPrefixOrSuffix + 3, queryIndex)}`;
        let suffix = statement.slice(queryIndex + query.length);
        if (suffix.length > maxPrefixOrSuffix) suffix = `${statement.slice(queryIndex + query.length, queryIndex + maxPrefixOrSuffix - 3)}...`;
        return prefix + query + suffix;
    }
    #isCurrentIndex(index) {
        return index === this.#indexName || index === LOCAL_INDEX;
    }
}
export { PageSearcher };
