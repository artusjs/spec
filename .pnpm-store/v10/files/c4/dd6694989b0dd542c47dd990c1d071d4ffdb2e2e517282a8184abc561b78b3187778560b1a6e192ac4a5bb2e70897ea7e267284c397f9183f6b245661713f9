import { type MarkdownOptions } from '@rspress/shared';
import type { Root } from 'mdast';
import type { VFile } from 'vfile';
import type { RouteService } from '../../route/RouteService.js';
/**
 * Remark plugin to normalize a link href
 * 1. add version and lang prefix to the link
 * 2. checkDeadLinks
 */
export declare const remarkLink: ({ cleanUrls, routeService, remarkLinkOptions, lint, __base, }: {
    cleanUrls: boolean | string;
    routeService: RouteService | null;
    remarkLinkOptions?: MarkdownOptions["link"];
    lint?: boolean;
    __base?: string;
}) => (tree: Root, file: VFile) => void;
