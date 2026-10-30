import type binding from '@rspack/binding';
import * as liteTapable from '../compiled/@rspack/lite-tapable/dist/index.js';
import type { ResolveData, ResourceDataWithData } from './Module.js';
import type { ResolveOptionsWithDependencyType, ResolverFactory } from './ResolverFactory.js';
export type NormalModuleCreateData = binding.JsNormalModuleFactoryCreateModuleArgs & {
    settings: {};
};
export declare class NormalModuleFactory {
    hooks: {
        resolveForScheme: liteTapable.HookMap<liteTapable.AsyncSeriesBailHook<[ResourceDataWithData], true | void>>;
        beforeResolve: liteTapable.AsyncSeriesBailHook<[ResolveData], false | void>;
        factorize: liteTapable.AsyncSeriesBailHook<[ResolveData], void>;
        resolve: liteTapable.AsyncSeriesBailHook<[ResolveData], void>;
        afterResolve: liteTapable.AsyncSeriesBailHook<[ResolveData], false | void>;
        createModule: liteTapable.AsyncSeriesBailHook<[
            NormalModuleCreateData,
            {}
        ], void>;
    };
    resolverFactory: ResolverFactory;
    constructor(resolverFactory: ResolverFactory);
    getResolver(type: string, resolveOptions: ResolveOptionsWithDependencyType): import("./ResolverFactory.js").ResolverWithOptions;
}
