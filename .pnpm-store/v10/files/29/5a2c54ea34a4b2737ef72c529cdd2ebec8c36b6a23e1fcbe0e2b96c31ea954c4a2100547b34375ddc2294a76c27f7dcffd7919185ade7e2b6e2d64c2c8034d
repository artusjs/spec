import { type Compiler, MultiCompiler } from '../../index.js';
import type { DevServerMiddlewareHandler } from '../../config/devServer.js';
export declare const LAZY_COMPILATION_PREFIX = "/_rspack/lazy/trigger";
/**
 * Create a middleware that handles lazy compilation requests from the client.
 * This function returns an Express-style middleware that listens for
 * requests triggered by lazy compilation in the dev server client,
 * then invokes the Rspack compiler to compile modules on demand.
 * Use this middleware when integrating lazy compilation into a
 * custom development server instead of relying on the built-in server.
 */
export declare const lazyCompilationMiddleware: (compiler: Compiler | MultiCompiler) => DevServerMiddlewareHandler;
