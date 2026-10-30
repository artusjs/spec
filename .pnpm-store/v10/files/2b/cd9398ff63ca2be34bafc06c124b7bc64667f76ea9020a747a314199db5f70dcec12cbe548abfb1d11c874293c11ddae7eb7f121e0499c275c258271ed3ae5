/**
 * The assets middleware is modified based on
 * https://github.com/webpack/webpack-dev-middleware
 *
 * MIT Licensed
 * Copyright JS Foundation and other contributors
 * https://github.com/webpack/webpack-dev-middleware/blob/master/LICENSE
 */
import { type Compiler, type MultiCompiler } from '@rspack/core';
import type { InternalContext, LiveReload, NormalizedConfig, RequestHandler } from '../../types';
import type { SocketServer } from '../socketServer';
export type MultiWatching = ReturnType<MultiCompiler['watch']>;
export type AssetsMiddlewareClose = (callback: (err?: Error | null) => void) => void;
export type AssetsMiddleware = RequestHandler & {
    watch: () => void;
    close: AssetsMiddlewareClose;
};
export declare const isClientCompiler: (compiler: Compiler) => boolean;
export declare const setupServerHooks: ({ context, compiler, token, socketServer, liveReload, }: {
    context: InternalContext;
    compiler: Compiler;
    token: string;
    socketServer: SocketServer;
    liveReload: LiveReload;
}) => void;
/**
 * The assets middleware handles compiler setup for development:
 * - Call `compiler.watch`
 * - Inject the HMR client path into page
 * - Notify server when compiler hooks are triggered
 */
export declare const assetsMiddleware: ({ config, compiler, context, socketServer, resolvedPort, }: {
    config: NormalizedConfig;
    compiler: Compiler | MultiCompiler;
    context: InternalContext;
    socketServer: SocketServer;
    resolvedPort: number;
}) => Promise<AssetsMiddleware>;
