"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    ReactRefreshRspackPlugin: ()=>ReactRefreshRspackPlugin,
    default: ()=>src
});
const external_node_path_namespaceObject = require("node:path");
var external_node_path_default = /*#__PURE__*/ __webpack_require__.n(external_node_path_namespaceObject);
const d = (object, property, defaultValue)=>{
    if (void 0 === object[property] && void 0 !== defaultValue) object[property] = defaultValue;
    return object[property];
};
const normalizeOverlay = (options)=>{
    const defaultOverlay = {
        entry: external_node_path_default().join(__dirname, '../client/errorOverlayEntry.js'),
        module: external_node_path_default().join(__dirname, '../client/overlay/index.js'),
        sockIntegration: 'wds'
    };
    if (!options) return false;
    if (void 0 === options || true === options) return defaultOverlay;
    options.entry = options.entry ?? defaultOverlay.entry;
    options.module = options.module ?? defaultOverlay.module;
    options.sockIntegration = options.sockIntegration ?? defaultOverlay.sockIntegration;
    return options;
};
function normalizeOptions(options) {
    d(options, 'exclude', /node_modules/i);
    d(options, 'include', /\.([cm]js|[jt]sx?|flow)$/i);
    d(options, 'library');
    d(options, 'forceEnable', false);
    d(options, 'injectLoader', true);
    d(options, 'injectEntry', true);
    d(options, 'reloadOnRuntimeErrors', false);
    d(options, 'reactRefreshLoader', 'builtin:react-refresh-loader');
    options.overlay = normalizeOverlay(options.overlay);
    return options;
}
const reactRefreshPath = external_node_path_default().join(__dirname, '../client/reactRefresh.js');
const reactRefreshEntryPath = external_node_path_default().join(__dirname, '../client/reactRefreshEntry.js');
const refreshUtilsPath = external_node_path_default().join(__dirname, '../client/refreshUtils.js');
let refreshRuntimeDirPath;
function getRefreshRuntimeDirPath() {
    if (!refreshRuntimeDirPath) refreshRuntimeDirPath = external_node_path_default().dirname(require.resolve('react-refresh', {
        paths: [
            reactRefreshPath
        ]
    }));
    return refreshRuntimeDirPath;
}
const getRefreshRuntimePaths = ()=>[
        reactRefreshEntryPath,
        reactRefreshPath,
        refreshUtilsPath,
        getRefreshRuntimeDirPath()
    ];
const external_node_querystring_namespaceObject = require("node:querystring");
var external_node_querystring_default = /*#__PURE__*/ __webpack_require__.n(external_node_querystring_namespaceObject);
function getAdditionalEntries({ devServer, options }) {
    const resourceQuery = {};
    if (devServer) {
        const { client, https, http2, sockHost, sockPath, sockPort } = devServer;
        let { host, path, port } = devServer;
        let protocol = https || http2 ? 'https' : 'http';
        if (sockHost) host = sockHost;
        if (sockPath) path = sockPath;
        if (sockPort) port = sockPort;
        if (client && null != client.webSocketURL) {
            let parsedUrl = client.webSocketURL;
            if ('string' == typeof parsedUrl) parsedUrl = new URL(parsedUrl);
            let auth;
            if (parsedUrl.username) {
                auth = parsedUrl.username;
                if (parsedUrl.password) auth += `:${parsedUrl.password}`;
            }
            if (null != parsedUrl.hostname) host = [
                null != auth && auth,
                parsedUrl.hostname
            ].filter(Boolean).join('@');
            if (null != parsedUrl.pathname) path = parsedUrl.pathname;
            if (null != parsedUrl.port) port = [
                '0',
                'auto'
            ].includes(String(parsedUrl.port)) ? void 0 : parsedUrl.port;
            if (null != parsedUrl.protocol) protocol = 'auto' !== parsedUrl.protocol ? parsedUrl.protocol.replace(':', '') : 'ws';
        }
        if (host) resourceQuery.sockHost = host;
        if (path) resourceQuery.sockPath = path;
        if (port) resourceQuery.sockPort = port;
        resourceQuery.sockProtocol = protocol;
    }
    if (options.overlay) {
        const { sockHost, sockPath, sockPort, sockProtocol } = options.overlay;
        if (sockHost) resourceQuery.sockHost = sockHost;
        if (sockPath) resourceQuery.sockPath = sockPath;
        if (sockPort) resourceQuery.sockPort = sockPort;
        if (sockProtocol) resourceQuery.sockProtocol = sockProtocol;
    }
    const queryString = external_node_querystring_default().stringify(resourceQuery, void 0, void 0, {
        encodeURIComponent (str) {
            return str;
        }
    });
    const prependEntries = [
        reactRefreshEntryPath
    ];
    const overlayEntries = [
        false !== options.overlay && options.overlay?.entry && `${require.resolve(options.overlay.entry)}${queryString ? `?${queryString}` : ''}`
    ].filter(Boolean);
    return {
        prependEntries,
        overlayEntries
    };
}
function getIntegrationEntry(integrationType) {
    let resolvedEntry;
    switch(integrationType){
        case 'whm':
            resolvedEntry = 'webpack-hot-middleware/client';
            break;
    }
    return resolvedEntry;
}
function getSocketIntegration(integrationType) {
    let resolvedSocketIntegration;
    switch(integrationType){
        case 'wds':
            resolvedSocketIntegration = external_node_path_default().join(__dirname, './sockets/WDSSocket.js');
            break;
        case 'whm':
            resolvedSocketIntegration = external_node_path_default().join(__dirname, './sockets/WHMEventSource.js');
            break;
        default:
            resolvedSocketIntegration = require.resolve(integrationType);
            break;
    }
    return resolvedSocketIntegration;
}
function addEntry(entry, compiler) {
    new compiler.rspack.EntryPlugin(compiler.context, entry, {
        name: void 0
    }).apply(compiler);
}
function addSocketEntry(sockIntegration, compiler) {
    const integrationEntry = getIntegrationEntry(sockIntegration);
    if (integrationEntry) addEntry(integrationEntry, compiler);
}
const PLUGIN_NAME = 'ReactRefreshRspackPlugin';
class ReactRefreshRspackPlugin {
    options;
    static get deprecated_runtimePaths() {
        return getRefreshRuntimePaths();
    }
    constructor(options = {}){
        this.options = normalizeOptions(options);
    }
    apply(compiler) {
        if (('development' !== compiler.options.mode || process.env.NODE_ENV && 'production' === process.env.NODE_ENV) && !this.options.forceEnable) return;
        const addEntries = getAdditionalEntries({
            devServer: compiler.options.devServer,
            options: this.options
        });
        if (this.options.injectEntry) for (const entry of addEntries.prependEntries)addEntry(entry, compiler);
        if (false !== this.options.overlay && this.options.overlay.sockIntegration) addSocketEntry(this.options.overlay.sockIntegration, compiler);
        for (const entry of addEntries.overlayEntries)addEntry(entry, compiler);
        new compiler.rspack.ProvidePlugin({
            $ReactRefreshRuntime$: reactRefreshPath
        }).apply(compiler);
        if (this.options.injectLoader) compiler.options.module.rules.unshift({
            test: this.options.test,
            include: this.options.include,
            exclude: {
                or: [
                    this.options.exclude,
                    [
                        ...getRefreshRuntimePaths()
                    ]
                ].filter(Boolean)
            },
            resourceQuery: this.options.resourceQuery,
            dependency: {
                not: [
                    'url'
                ]
            },
            use: this.options.reactRefreshLoader
        });
        const definedModules = {
            __react_refresh_library__: JSON.stringify(compiler.rspack.Template.toIdentifier(this.options.library || compiler.options.output.uniqueName || compiler.options.output.library)),
            __reload_on_runtime_errors__: this.options.reloadOnRuntimeErrors
        };
        const providedModules = {
            __react_refresh_utils__: refreshUtilsPath
        };
        if (false === this.options.overlay) {
            definedModules.__react_refresh_error_overlay__ = false;
            definedModules.__react_refresh_socket__ = false;
        } else {
            if (this.options.overlay.module) providedModules.__react_refresh_error_overlay__ = require.resolve(this.options.overlay.module);
            if (this.options.overlay.sockIntegration) providedModules.__react_refresh_socket__ = getSocketIntegration(this.options.overlay.sockIntegration);
        }
        new compiler.rspack.DefinePlugin(definedModules).apply(compiler);
        new compiler.rspack.ProvidePlugin(providedModules).apply(compiler);
        compiler.options.resolve.alias = {
            'react-refresh': getRefreshRuntimeDirPath(),
            ...compiler.options.resolve.alias
        };
        compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation)=>{
            compilation.hooks.additionalTreeRuntimeRequirements.tap(PLUGIN_NAME, (_, runtimeRequirements)=>{
                runtimeRequirements.add(compiler.rspack.RuntimeGlobals.moduleCache);
            });
        });
    }
}
const src = ReactRefreshRspackPlugin;
exports.ReactRefreshRspackPlugin = __webpack_exports__.ReactRefreshRspackPlugin;
exports["default"] = __webpack_exports__["default"];
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "ReactRefreshRspackPlugin",
    "default"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});
