import type { Logger } from '../logger';
import type { RequestHandler as Middleware, ProxyConfig } from '../types';
import { type UpgradeEvent } from './helper';
export declare function createProxyMiddleware(proxyOptions: ProxyConfig, logger: Logger): Promise<{
    middlewares: Middleware[];
    upgrade: UpgradeEvent;
}>;
