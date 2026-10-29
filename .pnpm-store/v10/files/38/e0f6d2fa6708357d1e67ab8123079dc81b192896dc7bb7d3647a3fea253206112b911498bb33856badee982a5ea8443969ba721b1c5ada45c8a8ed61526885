import binding from '@rspack/binding';
import { type Resolve } from './config/index.js';
import { Resolver } from './Resolver.js';
export type ResolveOptionsWithDependencyType = Resolve & {
    dependencyType?: string;
    resolveToContext?: boolean;
};
export type WithOptions = {
    withOptions: (options: ResolveOptionsWithDependencyType) => ResolverWithOptions;
};
export type ResolverWithOptions = Resolver & WithOptions;
export declare class ResolverFactory {
    #private;
    static __to_binding(resolver_factory: ResolverFactory): binding.JsResolverFactory;
    constructor(pnp: boolean, resolveOptions: Resolve, loaderResolveOptions: Resolve);
    get(type: string, resolveOptions?: ResolveOptionsWithDependencyType): ResolverWithOptions;
}
