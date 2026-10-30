"use strict";
const __rslib_import_meta_url__ = "u" < typeof document ? new (require('url'.replace('', ''))).URL('file:' + __filename).href : document.currentScript && document.currentScript.src || new URL('main.js', document.baseURI).href;
var __webpack_require__ = {};
__webpack_require__.n = (module)=>{
    var getter = module && module.__esModule ? ()=>module.default : ()=>module;
    return __webpack_require__.d(getter, {
        a: getter
    }), getter;
}, __webpack_require__.d = (exports1, definition)=>{
    for(var key in definition)__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key) && Object.defineProperty(exports1, key, {
        enumerable: !0,
        get: definition[key]
    });
}, __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop), __webpack_require__.r = (exports1)=>{
    "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports1, Symbol.toStringTag, {
        value: 'Module'
    }), Object.defineProperty(exports1, '__esModule', {
        value: !0
    });
};
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
    PLUGIN_REACT_NAME: ()=>PLUGIN_REACT_NAME,
    pluginReact: ()=>pluginReact
});
const external_node_module_namespaceObject = require("node:module"), external_node_path_namespaceObject = require("node:path");
var external_node_path_default = __webpack_require__.n(external_node_path_namespaceObject);
const react_require = (0, external_node_module_namespaceObject.createRequire)(__rslib_import_meta_url__);
function applyBasicReactSupport(api, options) {
    let REACT_REFRESH_PATH = options.fastRefresh ? react_require.resolve('react-refresh') : '';
    api.modifyEnvironmentConfig((config, { mergeEnvironmentConfig })=>{
        let isDev = 'development' === config.mode, usingHMR = isDev && config.dev.hmr && 'web' === config.output.target;
        return mergeEnvironmentConfig({
            tools: {
                swc: {
                    jsc: {
                        parser: {
                            syntax: "typescript",
                            tsx: !0
                        },
                        transform: {
                            react: {
                                development: isDev,
                                refresh: usingHMR && options.fastRefresh,
                                runtime: 'automatic',
                                ...options.swcReactOptions
                            }
                        }
                    }
                }
            }
        }, config);
    }), options.swcReactOptions?.runtime === 'preserve' && api.modifyBundlerChain((chain)=>{
        chain.module.parser.merge({
            javascript: {
                jsx: !0
            }
        });
    }), api.modifyBundlerChain(async (chain, { CHAIN_ID, environment, isDev, target })=>{
        let { config } = environment;
        if (!(isDev && config.dev.hmr && 'web' === target) || !options.fastRefresh) return;
        chain.resolve.alias.set('react-refresh', external_node_path_default().dirname(REACT_REFRESH_PATH));
        let { ReactRefreshRspackPlugin } = await import("@rspack/plugin-react-refresh"), jsRule = chain.module.rules.get(CHAIN_ID.RULE.JS);
        chain.plugin(CHAIN_ID.PLUGIN.REACT_FAST_REFRESH).use(ReactRefreshRspackPlugin, [
            {
                test: jsRule.get('test'),
                include: jsRule.include.values(),
                exclude: jsRule.exclude.values(),
                resourceQuery: {
                    not: /^\?raw$/
                },
                ...options.reactRefreshOptions
            }
        ]);
    });
}
function applyReactProfiler(api) {
    let hasReactDomClientCache;
    api.modifyEnvironmentConfig((config, { mergeEnvironmentConfig })=>{
        if ('production' === config.mode) return mergeEnvironmentConfig(config, {
            output: {
                minify: {
                    jsOptions: {
                        minimizerOptions: {
                            mangle: {
                                keep_classnames: !0,
                                keep_fnames: !0
                            }
                        }
                    }
                }
            }
        });
    }), api.modifyBundlerChain((chain, { isProd })=>{
        isProd && (chain.resolve.alias.set((()=>{
            if (void 0 !== hasReactDomClientCache) return hasReactDomClientCache;
            try {
                react_require.resolve('react-dom/client', {
                    paths: [
                        api.context.rootPath
                    ]
                }), hasReactDomClientCache = !0;
            } catch  {
                hasReactDomClientCache = !1;
            }
            return hasReactDomClientCache;
        })() ? 'react-dom/client$' : 'react-dom$', 'react-dom/profiling'), chain.resolve.alias.set('scheduler/tracing', 'scheduler/tracing-profiling'));
    });
}
const isDefaultPreset = (config)=>{
    let { performance, splitChunks } = config;
    return performance.chunkSplit ? performance.chunkSplit?.strategy === 'split-by-experience' : 'object' == typeof splitChunks && (!splitChunks.preset || 'default' === splitChunks.preset);
};
function applySplitChunksRule(api, options) {
    api.modifyBundlerChain((chain, { environment, isProd })=>{
        let { config } = environment;
        if (!isDefaultPreset(config) || 'web' !== config.output.target || !1 === options) return;
        let normalizedOptions = !0 === options ? {
            react: !0,
            router: !0
        } : options, currentConfig = chain.optimization.splitChunks.values();
        if ('object' != typeof currentConfig) return;
        let extraGroups = {};
        normalizedOptions.react && (extraGroups.react = {
            name: 'lib-react',
            test: isProd ? /node_modules[\\/](?:react|react-dom|scheduler)[\\/]/ : /node_modules[\\/](?:react|react-dom|scheduler|react-refresh|@rspack[\\/]plugin-react-refresh)[\\/]/,
            priority: 0
        }), normalizedOptions.router && (extraGroups.router = {
            name: 'lib-router',
            test: /node_modules[\\/](?:react-router|react-router-dom|history|@remix-run[\\/]router)[\\/]/,
            priority: 0
        }), Object.keys(extraGroups).length && chain.optimization.splitChunks({
            ...currentConfig,
            cacheGroups: {
                ...extraGroups,
                ...currentConfig.cacheGroups
            }
        });
    });
}
const PLUGIN_REACT_NAME = 'rsbuild:react', pluginReact = (options = {})=>({
        name: PLUGIN_REACT_NAME,
        setup (api) {
            let finalOptions = {
                fastRefresh: !0,
                splitChunks: !0,
                enableProfiler: !1,
                ...options
            };
            'rspack' === api.context.bundlerType && (applyBasicReactSupport(api, finalOptions), finalOptions.enableProfiler && applyReactProfiler(api)), applySplitChunksRule(api, finalOptions.splitChunks);
        }
    });
for(var __rspack_i in exports.PLUGIN_REACT_NAME = __webpack_exports__.PLUGIN_REACT_NAME, exports.pluginReact = __webpack_exports__.pluginReact, __webpack_exports__)-1 === [
    "PLUGIN_REACT_NAME",
    "pluginReact"
].indexOf(__rspack_i) && (exports[__rspack_i] = __webpack_exports__[__rspack_i]);
Object.defineProperty(exports, '__esModule', {
    value: !0
});
