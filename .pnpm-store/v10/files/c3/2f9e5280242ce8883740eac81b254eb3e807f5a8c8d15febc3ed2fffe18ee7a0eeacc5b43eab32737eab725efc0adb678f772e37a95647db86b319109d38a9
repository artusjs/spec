import type { Server } from 'node:http';
import type { Http2SecureServer } from 'node:http2';
import type { CreateCompiler, CreateDevServerOptions, EnvironmentAPI, InternalContext, NormalizedConfig } from '../types';
import { type RsbuildServerBase, type StartDevServerResult } from './helper';
import type { ServerMessage } from './socketServer';
type HTTPServer = Server | Http2SecureServer;
type ExtractSocketMessageData<T extends ServerMessage['type']> = Extract<ServerMessage, {
    type: T;
}> extends {
    data: infer D;
} ? D : undefined;
export type SockWrite = <T extends ServerMessage['type']>(type: T, data?: ExtractSocketMessageData<T>) => void;
export type RsbuildDevServer = RsbuildServerBase & {
    /**
     * Notifies Rsbuild that the custom server has successfully started.
     * Rsbuild will trigger the `onAfterStartDevServer` hook at this stage.
     */
    afterListen: () => Promise<void>;
    /**
     * Activate socket connection.
     * This ensures that HMR works properly.
     */
    connectWebSocket: (options: {
        server: HTTPServer;
    }) => void;
    /**
     * Environment API of Rsbuild server.
     */
    environments: EnvironmentAPI;
    /**
     * Start listening on the Rsbuild dev server.
     * Do not call this method if you are using a custom server.
     */
    listen: () => Promise<StartDevServerResult>;
    /**
     * Allows middleware to send some message to HMR client, and then the HMR
     * client will take different actions depending on the message type.
     * - `static-changed`: The page will reload.
     */
    sockWrite: SockWrite;
};
export declare function createDevServer<Options extends {
    context: InternalContext;
}>(options: Options, createCompiler: CreateCompiler, config: NormalizedConfig, { getPortSilently, runCompile }?: CreateDevServerOptions): Promise<RsbuildDevServer>;
export {};
