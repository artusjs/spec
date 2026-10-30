import type { PageIndexInfo } from '@rspress/core';
import type { SearchOptions } from './types.js';
export interface SearchQuery {
    keyword: string;
    limit: number;
}
export interface NormalizedSearchResultItem {
    hits: PageIndexInfo[];
    index: string;
}
export type NormalizedSearchResult = NormalizedSearchResultItem[];
export declare const LOCAL_INDEX = "default";
/**
 * Implement universal behavior of different search engine
 */
export declare abstract class Provider {
    /**
     * Init the search engine
     */
    init(_options: SearchOptions): Promise<void>;
    /**
     * Fetch the search index
     */
    fetchSearchIndex(_options: SearchOptions): Promise<PageIndexInfo[]>;
    /**
     * Search the pages according to the query
     */
    search(_query: SearchQuery): Promise<NormalizedSearchResult>;
}
