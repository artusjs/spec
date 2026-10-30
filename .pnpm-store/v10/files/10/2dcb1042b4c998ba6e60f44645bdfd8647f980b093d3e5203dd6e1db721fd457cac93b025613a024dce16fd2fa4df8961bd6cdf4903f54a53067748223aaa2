import type { RsbuildPlugin, Rspack } from '@rsbuild/core';
import type { PluginOptions as ReactRefreshOptions } from '@rspack/plugin-react-refresh';
export type SplitReactChunkOptions = {
    /**
     * Whether to enable split chunking for React-related dependencies (e.g., react, react-dom, scheduler).
     *
     * @default true
     */
    react?: boolean;
    /**
     * Whether to enable split chunking for routing-related dependencies (e.g., react-router, react-router-dom, history).
     *
     * @default true
     */
    router?: boolean;
};
export type PluginReactOptions = {
    /**
     * Configure the behavior of SWC to transform React code,
     * the same as SWC's [jsc.transform.react](https://swc.rs/docs/configuration/compilation#jsctransformreact).
     */
    swcReactOptions?: Rspack.SwcLoaderTransformConfig['react'];
    /**
     * Configuration for chunk splitting of React-related dependencies when `chunkSplit.strategy`
     * is set to `split-by-experience`.
     * @default true
     */
    splitChunks?: boolean | SplitReactChunkOptions;
    /**
     * When set to `true`, enables the React Profiler for performance analysis in production builds.
     * @default false
     */
    enableProfiler?: boolean;
    /**
     * Options passed to `@rspack/plugin-react-refresh`
     * @default
     * {
     *   include: [/\.(?:js|jsx|mjs|cjs|ts|tsx|mts|cts)$/],
     *   exclude: [/[\\/]node_modules[\\/]/],
     *   resourceQuery: { not: /^\?raw$/ },
     * }
     * @see https://rspack.rs/guide/tech/react#rspackplugin-react-refresh
     */
    reactRefreshOptions?: ReactRefreshOptions;
    /**
     * Whether to enable React Fast Refresh in development mode.
     * @default true
     */
    fastRefresh?: boolean;
};
export declare const PLUGIN_REACT_NAME = "rsbuild:react";
export declare const pluginReact: (options?: PluginReactOptions) => RsbuildPlugin;
