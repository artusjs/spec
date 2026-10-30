/// <reference types="node" />
import * as http from 'http';
import events from 'events';
import * as net from 'net';
import stream from 'stream';
import * as url from 'url';

interface ProxyTargetDetailed {
    host: string;
    port: number;
    protocol?: string | undefined;
    hostname?: string | undefined;
    socketPath?: string | undefined;
    key?: string | undefined;
    passphrase?: string | undefined;
    pfx?: Buffer | string | undefined;
    cert?: string | undefined;
    ca?: string | undefined;
    ciphers?: string | undefined;
    secureProtocol?: string | undefined;
}

declare class Server<TIncomingMessage = http.IncomingMessage, TServerResponse = http.ServerResponse>
    extends events.EventEmitter
{
    /**
     * Creates the proxy server with specified options.
     * @param options - Config object passed to the proxy
     */
    constructor(options?: Server.ServerOptions);

    /**
     * Used for proxying regular HTTP(S) requests
     * @param req - Client request.
     * @param res - Client response.
     * @param options - Additional options.
     */
    web(
        req: http.IncomingMessage,
        res: http.ServerResponse,
        options?: Server.ServerOptions,
        callback?: Server.ErrorCallback,
    ): void;

    /**
     * Used for proxying WS(S) requests
     * @param req - Client request.
     * @param socket - Client socket.
     * @param head - Client head.
     * @param options - Additionnal options.
     */
    ws(
        req: http.IncomingMessage,
        socket: any,
        head: any,
        options?: Server.ServerOptions,
        callback?: Server.ErrorCallback,
    ): void;

    /**
     * A function that wraps the object in a webserver, for your convenience
     * @param port - Port to listen on
     * @param hostname - The hostname to listen on
     */
    listen(port: number, hostname?: string): Server<TIncomingMessage, TServerResponse>;

    /**
     * A function that closes the inner webserver and stops listening on given port
     */
    close(callback?: () => void): void;

    /**
     * Creates the proxy server with specified options.
     * @param options Config object passed to the proxy
     * @returns Proxy object with handlers for `ws` and `web` requests
     */
    // tslint:disable:no-unnecessary-generics
    static createProxyServer<TIncomingMessage = http.IncomingMessage, TServerResponse = http.ServerResponse>(
        options?: Server.ServerOptions,
    ): Server<TIncomingMessage, TServerResponse>;

    /**
     * Creates the proxy server with specified options.
     * @param options Config object passed to the proxy
     * @returns Proxy object with handlers for `ws` and `web` requests
     */
    // tslint:disable:no-unnecessary-generics
    static createServer<TIncomingMessage = http.IncomingMessage, TServerResponse = http.ServerResponse>(
        options?: Server.ServerOptions,
    ): Server<TIncomingMessage, TServerResponse>;

    /**
     * Creates the proxy server with specified options.
     * @param options Config object passed to the proxy
     * @returns Proxy object with handlers for `ws` and `web` requests
     */
    // tslint:disable:no-unnecessary-generics
    static createProxy<TIncomingMessage = http.IncomingMessage, TServerResponse = http.ServerResponse>(
        options?: Server.ServerOptions,
    ): Server<TIncomingMessage, TServerResponse>;

    addListener(event: string, listener: () => void): this;
    on(event: string, listener: () => void): this;
    on(event: "error", listener: Server.ErrorCallback<Error, TIncomingMessage, TServerResponse>): this;
    on(event: "start", listener: Server.StartCallback<TIncomingMessage, TServerResponse>): this;
    on(
        event: "proxyReq",
        listener: Server.ProxyReqCallback<http.ClientRequest, TIncomingMessage, TServerResponse>,
    ): this;
    on(event: "proxyRes", listener: Server.ProxyResCallback<TIncomingMessage, TServerResponse>): this;
    on(event: "proxyReqWs", listener: Server.ProxyReqWsCallback<http.ClientRequest, TIncomingMessage>): this;
    on(event: "econnreset", listener: Server.EconnresetCallback<Error, TIncomingMessage, TServerResponse>): this;
    on(event: "end", listener: Server.EndCallback<TIncomingMessage, TServerResponse>): this;
    on(event: "open", listener: Server.OpenCallback): this;
    on(event: "close", listener: Server.CloseCallback<TIncomingMessage>): this;

    once(event: string, listener: () => void): this;
    once(event: "error", listener: Server.ErrorCallback<Error, TIncomingMessage, TServerResponse>): this;
    once(event: "start", listener: Server.StartCallback<TIncomingMessage, TServerResponse>): this;
    once(
        event: "proxyReq",
        listener: Server.ProxyReqCallback<http.ClientRequest, TIncomingMessage, TServerResponse>,
    ): this;
    once(event: "proxyRes", listener: Server.ProxyResCallback<TIncomingMessage, TServerResponse>): this;
    once(event: "proxyReqWs", listener: Server.ProxyReqWsCallback<http.ClientRequest, TIncomingMessage>): this;
    once(event: "econnreset", listener: Server.EconnresetCallback<Error, TIncomingMessage, TServerResponse>): this;
    once(event: "end", listener: Server.EndCallback<TIncomingMessage, TServerResponse>): this;
    once(event: "open", listener: Server.OpenCallback): this;
    once(event: "close", listener: Server.CloseCallback<TIncomingMessage>): this;
    removeListener(event: string, listener: () => void): this;
    removeAllListeners(event?: string): this;
    getMaxListeners(): number;
    setMaxListeners(n: number): this;
    listeners(event: string): Array<() => void>;
    emit(event: string, ...args: any[]): boolean;
    listenerCount(type: string): number;
}

declare namespace Server {
    type ProxyTarget = ProxyTargetUrl | ProxyTargetDetailed;
    type ProxyTargetUrl = string | Partial<url.Url>;

    interface ServerOptions {
        /** URL string to be parsed with the url module. */
        target?: ProxyTarget | undefined;
        /** URL string to be parsed with the url module. */
        forward?: ProxyTargetUrl | undefined;
        /** Object to be passed to http(s).request. */
        agent?: any;
        /** Object to be passed to https.createServer(). */
        ssl?: any;
        /** If you want to proxy websockets. */
        ws?: boolean | undefined;
        /** Adds x- forward headers. */
        xfwd?: boolean | undefined;
        /** Verify SSL certificate. */
        secure?: boolean | undefined;
        /** Explicitly specify if we are proxying to another proxy. */
        toProxy?: boolean | undefined;
        /** Specify whether you want to prepend the target's path to the proxy path. */
        prependPath?: boolean | undefined;
        /** Specify whether you want to ignore the proxy path of the incoming request. */
        ignorePath?: boolean | undefined;
        /** Local interface string to bind for outgoing connections. */
        localAddress?: string | undefined;
        /** Changes the origin of the host header to the target URL. */
        changeOrigin?: boolean | undefined;
        /** specify whether you want to keep letter case of response header key */
        preserveHeaderKeyCase?: boolean | undefined;
        /** Basic authentication i.e. 'user:password' to compute an Authorization header. */
        auth?: string | undefined;
        /** Rewrites the location hostname on (301 / 302 / 307 / 308) redirects, Default: null. */
        hostRewrite?: string | undefined;
        /** Rewrites the location host/ port on (301 / 302 / 307 / 308) redirects based on requested host/ port.Default: false. */
        autoRewrite?: boolean | undefined;
        /** Rewrites the location protocol on (301 / 302 / 307 / 308) redirects to 'http' or 'https'.Default: null. */
        protocolRewrite?: string | undefined;
        /** rewrites domain of set-cookie headers. */
        cookieDomainRewrite?: false | string | { [oldDomain: string]: string } | undefined;
        /** rewrites path of set-cookie headers. Default: false */
        cookiePathRewrite?: false | string | { [oldPath: string]: string } | undefined;
        /** object with extra headers to be added to target requests. */
        headers?: { [header: string]: string } | undefined;
        /** Timeout (in milliseconds) when proxy receives no response from target. Default: 120000 (2 minutes) */
        proxyTimeout?: number | undefined;
        /** Timeout (in milliseconds) for incoming requests */
        timeout?: number | undefined;
        /** Specify whether you want to follow redirects. Default: false */
        followRedirects?: boolean | undefined;
        /** If set to true, none of the webOutgoing passes are called and it's your responsibility to appropriately return the response by listening and acting on the proxyRes event */
        selfHandleResponse?: boolean | undefined;
        /** Buffer */
        buffer?: stream.Stream | undefined;
        /** Explicitly set the method type of the ProxyReq */
        method?: string | undefined;
    }

    type StartCallback<TIncomingMessage = http.IncomingMessage, TServerResponse = http.ServerResponse> = (
        req: TIncomingMessage,
        res: TServerResponse,
        target: ProxyTargetUrl,
    ) => void;
    type ProxyReqCallback<
        TClientRequest = http.ClientRequest,
        TIncomingMessage = http.IncomingMessage,
        TServerResponse = http.ServerResponse,
    > = (proxyReq: TClientRequest, req: TIncomingMessage, res: TServerResponse, options: ServerOptions) => void;
    type ProxyResCallback<TIncomingMessage = http.IncomingMessage, TServerResponse = http.ServerResponse> = (
        proxyRes: TIncomingMessage,
        req: TIncomingMessage,
        res: TServerResponse,
    ) => void;
    type ProxyReqWsCallback<TClientRequest = http.ClientRequest, TIncomingMessage = http.IncomingMessage> = (
        proxyReq: TClientRequest,
        req: TIncomingMessage,
        socket: net.Socket,
        options: ServerOptions,
        head: any,
    ) => void;
    type EconnresetCallback<
        TError = Error,
        TIncomingMessage = http.IncomingMessage,
        TServerResponse = http.ServerResponse,
    > = (
        err: TError,
        req: TIncomingMessage,
        res: TServerResponse,
        target: ProxyTargetUrl,
    ) => void;
    type EndCallback<TIncomingMessage = http.IncomingMessage, TServerResponse = http.ServerResponse> = (
        req: TIncomingMessage,
        res: TServerResponse,
        proxyRes: TIncomingMessage,
    ) => void;
    type OpenCallback = (proxySocket: net.Socket) => void;
    type CloseCallback<TIncomingMessage = http.IncomingMessage> = (
        proxyRes: TIncomingMessage,
        proxySocket: net.Socket,
        proxyHead: any,
    ) => void;
    type ErrorCallback<TError = Error, TIncomingMessage = http.IncomingMessage, TServerResponse = http.ServerResponse> =
        (
            err: TError,
            req: TIncomingMessage,
            res: TServerResponse | net.Socket,
            target?: ProxyTargetUrl,
        ) => void;
}

/**
 * Based on definition by DefinitelyTyped:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/6f529c6c67a447190f86bfbf894d1061e41e07b7/types/http-proxy-middleware/index.d.ts
 */

type NextFunction<T = (err?: any) => void> = T;
interface RequestHandler<TReq = http.IncomingMessage, TRes = http.ServerResponse, TNext = NextFunction> {
    (req: TReq, res: TRes, next?: TNext): Promise<void>;
    upgrade: (req: http.IncomingMessage, socket: net.Socket, head: Buffer) => void;
}
type Filter<TReq = http.IncomingMessage> = string | string[] | ((pathname: string, req: TReq) => boolean);
interface Plugin<TReq = http.IncomingMessage, TRes = http.ServerResponse> {
    (proxyServer: Server<TReq, TRes>, options: Options<TReq, TRes>): void;
}
interface OnProxyEvent<TReq = http.IncomingMessage, TRes = http.ServerResponse> {
    error?: Server.ErrorCallback<Error, TReq, TRes>;
    proxyReq?: Server.ProxyReqCallback<http.ClientRequest, TReq, TRes>;
    proxyReqWs?: Server.ProxyReqWsCallback<http.ClientRequest, TReq>;
    proxyRes?: Server.ProxyResCallback<TReq, TRes>;
    open?: Server.OpenCallback;
    close?: Server.CloseCallback<TReq>;
    start?: Server.StartCallback<TReq, TRes>;
    end?: Server.EndCallback<TReq, TRes>;
    econnreset?: Server.EconnresetCallback<Error, TReq, TRes>;
}
type Logger = Pick<Console, 'info' | 'warn' | 'error'>;
interface Options<TReq = http.IncomingMessage, TRes = http.ServerResponse> extends Server.ServerOptions {
    /**
     * Narrow down requests to proxy or not.
     * Filter on {@link http.IncomingMessage.url `pathname`} which is relative to the proxy's "mounting" point in the server.
     * Or use the {@link http.IncomingMessage `req`}  object for more complex filtering.
     * @link https://github.com/chimurai/http-proxy-middleware/blob/master/recipes/pathFilter.md
     * @since v3.0.0
     */
    pathFilter?: Filter<TReq>;
    /**
     * Modify request paths before requests are send to the target.
     * @example
     * ```js
     * createProxyMiddleware({
     *   pathRewrite: {
     *     '^/api/old-path': '/api/new-path', // rewrite path
     *   }
     * });
     * ```
     * @link https://github.com/chimurai/http-proxy-middleware/blob/master/recipes/pathRewrite.md
     */
    pathRewrite?: {
        [regexp: string]: string;
    } | ((path: string, req: TReq) => string | undefined) | ((path: string, req: TReq) => Promise<string>);
    /**
     * Access the internal http-proxy server instance to customize behavior
     *
     * @example
     * ```js
     * createProxyMiddleware({
     *   plugins: [(proxyServer, options) => {
     *     proxyServer.on('error', (error, req, res) => {
     *       console.error(error);
     *     });
     *   }]
     * });
     * ```
     * @link https://github.com/chimurai/http-proxy-middleware#plugins-array
     * @since v3.0.0
     */
    plugins?: Plugin<TReq, TRes>[];
    /**
     * Eject pre-configured plugins.
     * NOTE: register your own error handlers to prevent server from crashing.
     *
     * @link https://github.com/chimurai/http-proxy-middleware#ejectplugins-boolean-default-false
     * @since v3.0.0
     */
    ejectPlugins?: boolean;
    /**
     * Listen to http-proxy events
     * @see {@link OnProxyEvent} for available events
     * @example
     * ```js
     * createProxyMiddleware({
     *   on: {
     *     error: (error, req, res, target) => {
     *       console.error(error);
     *     }
     *   }
     * });
     * ```
     * @link https://github.com/chimurai/http-proxy-middleware/blob/master/recipes/proxy-events.md
     * @since v3.0.0
     */
    on?: OnProxyEvent<TReq, TRes>;
    /**
     * Dynamically set the {@link Options.target `options.target`}.
     * @example
     * ```js
     * createProxyMiddleware({
     *   router: async (req) => {
     *     return 'http://127:0.0.1:3000';
     *   }
     * });
     * ```
     * @link https://github.com/chimurai/http-proxy-middleware/blob/master/recipes/router.md
     */
    router?: {
        [hostOrPath: string]: Server.ServerOptions['target'];
    } | ((req: TReq) => Server.ServerOptions['target']) | ((req: TReq) => Promise<Server.ServerOptions['target']>);
    /**
     * Log information from http-proxy-middleware
     * @example
     * ```js
     * createProxyMiddleware({
     *  logger: console
     * });
     * ```
     * @link https://github.com/chimurai/http-proxy-middleware/blob/master/recipes/logger.md
     * @since v3.0.0
     */
    logger?: Logger | any;
}

declare function createProxyMiddleware<TReq = http.IncomingMessage, TRes = http.ServerResponse, TNext = NextFunction>(options: Options<TReq, TRes>): RequestHandler<TReq, TRes, TNext>;

type Interceptor<TReq = http.IncomingMessage, TRes = http.ServerResponse> = (buffer: Buffer, proxyRes: TReq, req: TReq, res: TRes) => Promise<Buffer | string>;
/**
 * Intercept responses from upstream.
 * Automatically decompress (deflate, gzip, brotli).
 * Give developer the opportunity to modify intercepted Buffer and http.ServerResponse
 *
 * NOTE: must set options.selfHandleResponse=true (prevent automatic call of res.end())
 */
declare function responseInterceptor<TReq extends http.IncomingMessage = http.IncomingMessage, TRes extends http.ServerResponse = http.ServerResponse>(interceptor: Interceptor<TReq, TRes>): (proxyRes: TReq, req: TReq, res: TRes) => Promise<void>;

type BodyParserLikeRequest = http.IncomingMessage & {
    body?: any;
};
/**
 * Fix proxied body if bodyParser is involved.
 */
declare function fixRequestBody<TReq extends BodyParserLikeRequest = BodyParserLikeRequest>(proxyReq: http.ClientRequest, req: TReq): void;

/**
 * Subscribe to {@link https://www.npmjs.com/package/http-proxy#listening-for-proxy-events http-proxy error events} to prevent server from crashing.
 * Errors are logged with {@link https://www.npmjs.com/package/debug debug} library.
 */
declare const debugProxyErrorsPlugin: Plugin;

declare const errorResponsePlugin: Plugin;

declare const loggerPlugin: Plugin;

/**
 * Implements option.on object to subscribe to http-proxy events.
 *
 * @example
 * ```js
 * createProxyMiddleware({
 *  on: {
 *    error: (error, req, res, target) => {},
 *    proxyReq: (proxyReq, req, res, options) => {},
 *    proxyReqWs: (proxyReq, req, socket, options) => {},
 *    proxyRes: (proxyRes, req, res) => {},
 *    open: (proxySocket) => {},
 *    close: (proxyRes, proxySocket, proxyHead) => {},
 *    start: (req, res, target) => {},
 *    end: (req, res, proxyRes) => {},
 *    econnreset: (error, req, res, target) => {},
 *  }
 * });
 * ```
 */
declare const proxyEventsPlugin: Plugin;

/**
 * @deprecated
 *
 * Will be removed in a future version.
 */
interface LegacyOptions<TReq = http.IncomingMessage, TRes = http.ServerResponse> extends Options<TReq, TRes> {
    /**
     * @deprecated
     * Use `on.error` instead.
     *
     * @example
     * ```js
     * {
     *   on: {
     *    error: () => {}
     * }
     * ```
     */
    onError?: (...args: any[]) => void;
    /**
     * @deprecated
     * Use `on.proxyRes` instead.
     *
     * @example
     * ```js
     * {
     *   on: {
     *    proxyRes: () => {}
     * }
     * ```
     */
    onProxyRes?: (...args: any[]) => void;
    /**
     * @deprecated
     * Use `on.proxyReq` instead.
     *
     * @example
     * ```js
     * {
     *   on: {
     *    proxyReq: () => {}
     * }
     * ```
     */
    onProxyReq?: (...args: any[]) => void;
    /**
     * @deprecated
     * Use `on.proxyReqWs` instead.
     *
     * @example
     * ```js
     * {
     *   on: {
     *    proxyReqWs: () => {}
     * }
     * ```
     */
    onProxyReqWs?: (...args: any[]) => void;
    /**
     * @deprecated
     * Use `on.open` instead.
     *
     * @example
     * ```js
     * {
     *   on: {
     *    open: () => {}
     * }
     * ```
     */
    onOpen?: (...args: any[]) => void;
    /**
     * @deprecated
     * Use `on.close` instead.
     *
     * @example
     * ```js
     * {
     *   on: {
     *    close: () => {}
     * }
     * ```
     */
    onClose?: (...args: any[]) => void;
    /**
     * @deprecated
     * Use `logger` instead.
     *
     * @example
     * ```js
     * {
     *  logger: console
     * }
     * ```
     */
    logProvider?: any;
    /**
     * @deprecated
     * Use `logger` instead.
     *
     * @example
     * ```js
     * {
     *  logger: console
     * }
     * ```
     */
    logLevel?: any;
}

/**
 * @deprecated
 * This function is deprecated and will be removed in a future version.
 *
 * Use {@link createProxyMiddleware} instead.
 */
declare function legacyCreateProxyMiddleware<TReq = http.IncomingMessage, TRes = http.ServerResponse>(shortHand: string): RequestHandler<TReq, TRes>;
declare function legacyCreateProxyMiddleware<TReq = http.IncomingMessage, TRes = http.ServerResponse>(legacyOptions: LegacyOptions<TReq, TRes>): RequestHandler<TReq, TRes>;
declare function legacyCreateProxyMiddleware<TReq = http.IncomingMessage, TRes = http.ServerResponse>(legacyContext: Filter<TReq>, legacyOptions: LegacyOptions<TReq, TRes>): RequestHandler<TReq, TRes>;

export { createProxyMiddleware, debugProxyErrorsPlugin, errorResponsePlugin, fixRequestBody, legacyCreateProxyMiddleware, loggerPlugin, proxyEventsPlugin, responseInterceptor };
export type { Filter, LegacyOptions, Options, Plugin, RequestHandler };
