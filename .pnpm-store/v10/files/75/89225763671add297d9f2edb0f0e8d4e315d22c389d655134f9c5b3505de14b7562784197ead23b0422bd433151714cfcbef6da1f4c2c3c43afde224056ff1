import * as liteTapable from '../compiled/@rspack/lite-tapable/dist/index.js';
import type { ContextModuleFactoryAfterResolveResult, ContextModuleFactoryBeforeResolveResult } from './Module.js';
export declare class ContextModuleFactory {
    hooks: {
        beforeResolve: liteTapable.AsyncSeriesWaterfallHook<[
            ContextModuleFactoryBeforeResolveResult
        ], ContextModuleFactoryBeforeResolveResult | void>;
        afterResolve: liteTapable.AsyncSeriesWaterfallHook<[
            ContextModuleFactoryAfterResolveResult
        ], ContextModuleFactoryAfterResolveResult | void>;
    };
    constructor();
}
