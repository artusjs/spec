import type { AsyncHook, EnvironmentAsyncHook, InternalContext, ModifyBundlerChainFn, ModifyEnvironmentConfigFn, ModifyHTMLFn, ModifyHTMLTagsFn, ModifyRsbuildConfigFn, ModifyRspackConfigFn, OnAfterBuildFn, OnAfterCreateCompilerFn, OnAfterDevCompileFn, OnAfterEnvironmentCompileFn, OnAfterStartDevServerFn, OnAfterStartPreviewServerFn, OnBeforeBuildFn, OnBeforeCreateCompilerFn, OnBeforeDevCompileFn, OnBeforeEnvironmentCompileFn, OnBeforeStartDevServerFn, OnBeforeStartPreviewServerFn, OnCloseBuildFn, OnCloseDevServerFn, OnExitFn, Rspack } from './types';
export declare function createEnvironmentAsyncHook<Callback extends (...args: any[]) => any>(): EnvironmentAsyncHook<Callback>;
export declare function createAsyncHook<Callback extends (...args: any[]) => any>(): AsyncHook<Callback>;
export declare function initHooks(): {
    /** The following hooks are global hooks */
    onExit: AsyncHook<OnExitFn>;
    onAfterBuild: AsyncHook<OnAfterBuildFn>;
    onCloseBuild: AsyncHook<OnCloseBuildFn>;
    onBeforeBuild: AsyncHook<OnBeforeBuildFn>;
    onBeforeDevCompile: AsyncHook<OnBeforeDevCompileFn>;
    onAfterDevCompile: AsyncHook<OnAfterDevCompileFn>;
    onCloseDevServer: AsyncHook<OnCloseDevServerFn>;
    onAfterStartDevServer: AsyncHook<OnAfterStartDevServerFn>;
    onBeforeStartDevServer: AsyncHook<OnBeforeStartDevServerFn>;
    onAfterStartPreviewServer: AsyncHook<OnAfterStartPreviewServerFn>;
    onBeforeStartPreviewServer: AsyncHook<OnBeforeStartPreviewServerFn>;
    onAfterCreateCompiler: AsyncHook<OnAfterCreateCompilerFn>;
    onBeforeCreateCompiler: AsyncHook<OnBeforeCreateCompilerFn>;
    /**  The following hooks are related to the environment */
    modifyHTML: EnvironmentAsyncHook<ModifyHTMLFn>;
    modifyHTMLTags: EnvironmentAsyncHook<ModifyHTMLTagsFn>;
    modifyRspackConfig: EnvironmentAsyncHook<ModifyRspackConfigFn>;
    modifyBundlerChain: EnvironmentAsyncHook<ModifyBundlerChainFn>;
    modifyRsbuildConfig: AsyncHook<ModifyRsbuildConfigFn>;
    modifyEnvironmentConfig: EnvironmentAsyncHook<ModifyEnvironmentConfigFn>;
    onBeforeEnvironmentCompile: EnvironmentAsyncHook<OnBeforeEnvironmentCompileFn>;
    onAfterEnvironmentCompile: EnvironmentAsyncHook<OnAfterEnvironmentCompileFn>;
};
export type Hooks = ReturnType<typeof initHooks>;
export declare const registerBuildHook: ({ context, isWatch, compiler, rspackConfigs, MultiStatsCtor, }: {
    rspackConfigs: Rspack.Configuration[];
    context: InternalContext;
    compiler: Rspack.Compiler | Rspack.MultiCompiler;
    isWatch: boolean;
    MultiStatsCtor: new (stats: Rspack.Stats[]) => Rspack.MultiStats;
}) => void;
export declare const registerDevHook: ({ context, compiler, bundlerConfigs, MultiStatsCtor, }: {
    bundlerConfigs: Rspack.Configuration[];
    context: InternalContext;
    compiler: Rspack.Compiler | Rspack.MultiCompiler;
    MultiStatsCtor: new (stats: Rspack.Stats[]) => Rspack.MultiStats;
}) => void;
