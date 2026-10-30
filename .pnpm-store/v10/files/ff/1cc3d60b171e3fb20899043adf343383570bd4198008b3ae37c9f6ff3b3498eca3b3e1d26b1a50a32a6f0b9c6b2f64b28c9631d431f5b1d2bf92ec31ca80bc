import { type Logger } from '../logger';
import type { Connect, EnvironmentAPI, RequestHandler } from '../types';
import type { BuildManager } from './buildManager';
export declare const faviconFallbackMiddleware: RequestHandler;
export declare const getRequestLoggerMiddleware: (logger: Logger) => Connect.NextHandleFunction;
export declare const notFoundMiddleware: RequestHandler;
export declare const optionsFallbackMiddleware: RequestHandler;
/**
 * Support access HTML without suffix
 */
export declare const getHtmlCompletionMiddleware: (params: {
    distPath: string;
    buildManager: BuildManager;
}) => RequestHandler;
/**
 * handle `server.base`
 */
export declare const getBaseUrlMiddleware: (params: {
    base: string;
}) => RequestHandler;
/**
 * support HTML fallback in some edge cases
 */
export declare const getHtmlFallbackMiddleware: (params: {
    distPath: string;
    buildManager: BuildManager;
    logger: Logger;
}) => RequestHandler;
/**
 * Support viewing served files via `/rsbuild-dev-server` route
 */
export declare const viewingServedFilesMiddleware: (params: {
    environments: EnvironmentAPI;
    logger: Logger;
}) => RequestHandler;
