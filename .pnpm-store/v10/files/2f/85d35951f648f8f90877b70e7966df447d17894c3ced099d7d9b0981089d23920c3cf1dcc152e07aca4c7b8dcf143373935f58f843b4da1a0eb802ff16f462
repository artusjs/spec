import type { IncomingMessage, Server } from 'node:http';
import type { Http2SecureServer } from 'node:http2';
import type { Socket } from 'node:net';
import type { Logger } from '../logger';
import type { Connect, InternalContext, NormalizedConfig, OutputStructure, PrintUrls, Routes, RsbuildConfig, RsbuildEntry } from '../types';
import type { RsbuildDevServer } from './devServer';
import type { RsbuildPreviewServer } from './previewServer';
/**
 * It used to subscribe http upgrade event
 */
export type UpgradeEvent = (req: IncomingMessage, socket: Socket, head: any) => void;
export type ServerStartResult<T> = {
    /**
     * The URLs that server is listening on.
     */
    urls: string[];
    /**
     * The actual port used by the server.
     */
    port: number;
    /**
     * The dev server or preview server instance.
     */
    server: T;
};
export type StartDevServerResult = ServerStartResult<RsbuildDevServer>;
export type StartPreviewServerResult = ServerStartResult<RsbuildPreviewServer>;
export declare const normalizeUrl: (url: string) => string;
export declare const joinUrlSegments: (s1: string, s2: string) => string;
export declare const stripBase: (path: string, base: string) => string;
export declare const getRoutes: (context: InternalContext) => Routes;
export declare const formatRoutes: (entry: RsbuildEntry, base: string, distPathPrefix: string | undefined, outputStructure: OutputStructure | undefined) => Routes;
export declare function printServerURLs({ urls: originalUrls, port, routes, protocol, printUrls, trailingLineBreak, originalConfig, logger, }: {
    urls: {
        url: string;
        label: string;
    }[];
    port: number;
    routes: Routes;
    protocol: string;
    printUrls?: PrintUrls;
    trailingLineBreak?: boolean;
    originalConfig?: Readonly<RsbuildConfig>;
    logger: Logger;
}): string | null;
/**
 * Get available free port.
 * @param port - Current port want to use.
 * @param tryLimits - Maximum number of retries.
 * @param strictPort - Whether to throw an error when the port is occupied.
 * @returns Available port number.
 */
export declare const getPort: ({ host, port, strictPort, tryLimits, }: {
    host: string;
    port: string | number;
    strictPort: boolean;
    tryLimits?: number;
}) => Promise<number>;
export declare const resolvePort: (config: NormalizedConfig) => Promise<{
    port: number;
    portTip: string | undefined;
}>;
export declare const isWildcardHost: (host: string) => boolean;
export declare const getHostInUrl: (host: string) => Promise<string>;
type AddressUrl = {
    label: string;
    url: string;
};
export declare const getAddressUrls: ({ protocol, port, host, }: {
    protocol: string;
    port: number;
    host?: string;
}) => Promise<AddressUrl[]>;
export declare function getServerTerminator(server: Server | Http2SecureServer): () => Promise<void>;
/**
 * Escape HTML characters
 * @example
 * escapeHtml('<div>Hello</div>') // '&lt;div&gt;Hello&lt;/div&gt;'
 */
export declare function escapeHtml(text: string | null | undefined): string;
export declare const HttpCode: {
    readonly Ok: 200;
    readonly NotModified: 304;
    readonly BadRequest: 400;
    readonly Forbidden: 403;
    readonly NotFound: 404;
    readonly PreconditionFailed: 412;
    readonly RangeNotSatisfiable: 416;
    readonly InternalServerError: 500;
};
/**
 * The public server API shared by both the dev and preview servers.
 */
export type RsbuildServerBase = {
    /**
     * Close the server.
     * In the dev server, this will call the `onCloseDevServer` hook.
     */
    close: () => Promise<void>;
    /**
     * The Node.js HTTP server instance.
     * - Will be `Http2SecureServer` if `server.https` config is used.
     * - Will be `null` if `server.middlewareMode` is enabled.
     */
    httpServer: import('node:http').Server | import('node:http2').Http2SecureServer | null;
    /**
     * The `connect` app instance.
     * Can be used to attach custom middlewares to the server.
     */
    middlewares: Connect.Server;
    /**
     * Open URL in the browser after starting the server.
     */
    open: () => Promise<void>;
    /**
     * The resolved port.
     * By default, Rsbuild server listens on port `3000` and automatically increments
     * the port number if the port is occupied.
     */
    port: number;
    /**
     * Print the server URLs.
     */
    printUrls: () => void;
};
export {};
