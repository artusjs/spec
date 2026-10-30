import type { InternalContext, NormalizedConfig, Rspack } from '../types';
import { type AssetsMiddleware } from './assets-middleware';
import { SocketServer } from './socketServer';
type Options = {
    context: InternalContext;
    config: NormalizedConfig;
    compiler: Rspack.Compiler | Rspack.MultiCompiler;
    resolvedPort: number;
};
/**
 * Setup compiler related logic:
 * 1. setup assets middleware
 * 2. establish webSocket connect
 */
export declare class BuildManager {
    assetsMiddleware: AssetsMiddleware;
    outputFileSystem: Rspack.OutputFileSystem;
    socketServer: SocketServer;
    compiler: Rspack.Compiler | Rspack.MultiCompiler;
    private config;
    private resolvedPort;
    private context;
    constructor({ config, context, compiler, resolvedPort }: Options);
    init(): Promise<void>;
    /**
     * Call `compiler.watch()` to start compiling.
     */
    watch(): void;
    close(): Promise<void>;
    readFileSync: (fileName: string) => string;
    private setupCompilationMiddleware;
}
export {};
