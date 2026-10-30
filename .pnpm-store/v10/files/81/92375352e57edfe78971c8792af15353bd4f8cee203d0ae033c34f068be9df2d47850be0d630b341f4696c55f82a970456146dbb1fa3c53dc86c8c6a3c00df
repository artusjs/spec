import { type NavItemWithLink } from '@rspress/shared';
import type { RouteService } from '../../route/RouteService.js';
declare function routePathToMdPath(routePath: string, base: string): string;
declare function generateLlmsTxt(routeGroups: string[][], others: string[], navList: {
    text: string;
}[], title: string | undefined, description: string | undefined, base: string, routeService: RouteService): Promise<string>;
declare function generateLlmsFullTxt(routeGroups: string[][], navList: (NavItemWithLink & {
    lang: string;
})[], others: string[], base: string, mdContents: Map<string, string>): string;
export { generateLlmsFullTxt, generateLlmsTxt, routePathToMdPath };
