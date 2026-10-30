import type { PageIndexInfo } from '@rspress/core';
import { type MatchResult, type SearchOptions } from './types.js';
export declare class PageSearcher {
    #private;
    constructor(options: SearchOptions & {
        indexName?: string;
    });
    init(): Promise<void>;
    fetchSearchIndex(): Promise<PageIndexInfo[] | undefined>;
    match(keyword: string, limit?: number): Promise<MatchResult>;
}
