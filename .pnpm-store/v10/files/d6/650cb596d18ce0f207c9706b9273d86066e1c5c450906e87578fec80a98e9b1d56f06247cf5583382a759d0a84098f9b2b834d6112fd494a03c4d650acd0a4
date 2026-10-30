/**
 * The local search provider.
 * Powered by FlexSearch. https://github.com/nextapps-de/flexsearch
 */
import { type PageIndexInfo } from '@rspress/shared';
import { type Provider, type SearchQuery } from '../Provider.js';
import type { SearchOptions } from '../types.js';
export declare class LocalProvider implements Provider {
    #private;
    fetchSearchIndex(options: SearchOptions): Promise<PageIndexInfo[]>;
    init(options: SearchOptions): Promise<void>;
    search(query: SearchQuery): Promise<{
        index: string;
        hits: PageIndexInfo[];
    }[]>;
}
