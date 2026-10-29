import { type AdditionalPage, type PageModule, type RouteMeta, type UserConfig } from '@rspress/shared';
import type { ComponentType } from 'react';
import { RoutePage } from './RoutePage.js';
interface InitOptions {
    scanDir: string;
    config: UserConfig;
    externalPages: AdditionalPage[];
}
export interface Route {
    path: string;
    element: React.ReactElement;
    filePath: string;
    preload: () => Promise<PageModule<ComponentType<unknown>>>;
    lang: string;
}
export interface RouteOptions {
    extensions?: string[];
    include?: string[];
    exclude?: string[];
}
export declare class RouteService {
    #private;
    routeData: Map<string, RoutePage>;
    static __instance__: RouteService | null;
    static getInstance(): RouteService;
    static create(options: InitOptions): Promise<RouteService>;
    static createSimple(): Promise<RouteService>;
    private constructor();
    get extensions(): readonly string[];
    addRoute(routePage: RoutePage): Promise<void>;
    getRoutes(): RouteMeta[];
    getRoutePages(): RoutePage[];
    isExistRoute(link: string): boolean;
    generateRoutesCode(): string;
    private generateRoutesCodeByRouteMeta;
    getRoutePathParts(relativePath: string): string[];
    splitRoutePathParts(relativePath: string): readonly [string, string, string];
    normalizeRoutePath(relativePath: string): {
        pureRoutePath: string;
        routePath: string;
        lang: string;
        version: string;
    };
    absolutePathToRoutePath(absolutePath: string): string;
    isInDocsDir(absolutePath: string): boolean;
    absolutePathToRelativePath(absolutePath: string): string;
    getRoutePageByRoutePath(routePath: string): RoutePage | undefined;
    getDocsDir(): string;
    getLangs(): string[];
    getDefaultLang(): string;
    getVersions(): string[];
    getDefaultVersion(): string;
}
export {};
