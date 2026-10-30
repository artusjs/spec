import type { InternalContext, NormalizedConfig } from '../types';
import type { BuildManager } from './buildManager';
import type { RsbuildDevServer } from './devServer';
import type { UpgradeEvent } from './helper';
export type RsbuildDevMiddlewareOptions = {
    config: NormalizedConfig;
    context: InternalContext;
    buildManager?: BuildManager;
    devServer: RsbuildDevServer;
    /**
     * Callbacks returned by `onBeforeStartDevServer` hook and `server.setup` config
     */
    postCallbacks: (() => Promise<void> | void)[];
};
export type GetDevMiddlewaresResult = {
    close: () => Promise<void>;
    onUpgrade: UpgradeEvent;
};
export declare const getDevMiddlewares: (options: RsbuildDevMiddlewareOptions) => Promise<GetDevMiddlewaresResult>;
