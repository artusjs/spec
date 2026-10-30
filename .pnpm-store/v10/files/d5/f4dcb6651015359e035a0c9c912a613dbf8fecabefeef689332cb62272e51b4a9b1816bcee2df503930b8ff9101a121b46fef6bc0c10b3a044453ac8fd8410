import { RspackChain } from './helpers';
import type { InternalContext, ModifyBundlerChainUtils } from './types';
export declare function modifyBundlerChain(context: InternalContext, utils: ModifyBundlerChainUtils): Promise<RspackChain>;
export declare const CHAIN_ID: {
    /** Predefined rules */
    readonly RULE: {
        /** Rule for .mjs */
        readonly MJS: "mjs";
        /** Rule for fonts */
        readonly FONT: "font";
        /** Rule for JSON */
        readonly JSON: "json";
        /** Rule for images */
        readonly IMAGE: "image";
        /** Rule for media */
        readonly MEDIA: "media";
        /** Rule for additional assets */
        readonly ADDITIONAL_ASSETS: "additional-assets";
        /** Rule for JS */
        readonly JS: "js";
        /** Rule for data uri encoded javascript */
        readonly JS_DATA_URI: "js-data-uri";
        /** Rule for CSS */
        readonly CSS: "css";
        /** Rule for Less */
        readonly LESS: "less";
        /** Rule for Sass */
        readonly SASS: "sass";
        /** Rule for stylus */
        readonly STYLUS: "stylus";
        /** Rule for svg */
        readonly SVG: "svg";
        /** Rule for Vue */
        readonly VUE: "vue";
        /** Rule for wasm */
        readonly WASM: "wasm";
        /** Rule for svelte */
        readonly SVELTE: "svelte";
    };
    /** Predefined rule groups */
    readonly ONE_OF: {
        /** JS oneOf rules */
        readonly JS_MAIN: "js";
        readonly JS_RAW: "js-raw";
        /** CSS oneOf rules */
        readonly CSS_MAIN: "css";
        readonly CSS_RAW: "css-raw";
        readonly CSS_INLINE: "css-inline";
        /** SVG oneOf rules */
        readonly SVG: "svg";
        readonly SVG_RAW: "svg-asset-raw";
        readonly SVG_URL: "svg-asset-url";
        readonly SVG_ASSET: "svg-asset";
        readonly SVG_REACT: "svg-react";
        readonly SVG_INLINE: "svg-asset-inline";
    };
    /** Predefined loaders */
    readonly USE: {
        /** ts-loader */
        readonly TS: "ts";
        /** css-loader */
        readonly CSS: "css";
        /** sass-loader */
        readonly SASS: "sass";
        /** less-loader */
        readonly LESS: "less";
        /** stylus-loader */
        readonly STYLUS: "stylus";
        /** url-loader */
        readonly URL: "url";
        /** vue-loader */
        readonly VUE: "vue";
        /** swc-loader */
        readonly SWC: "swc";
        /** svgr */
        readonly SVGR: "svgr";
        /** babel-loader */
        readonly BABEL: "babel";
        /** style-loader */
        readonly STYLE: "style-loader";
        /** svelte-loader */
        readonly SVELTE: "svelte";
        /** postcss-loader */
        readonly POSTCSS: "postcss";
        /** lightningcss-loader */
        readonly LIGHTNINGCSS: "lightningcss";
        /** ignore-css-loader */
        readonly IGNORE_CSS: "ignore-css";
        /** CssExtractRspackPlugin.loader */
        readonly MINI_CSS_EXTRACT: "mini-css-extract";
        /** resolve-url-loader */
        readonly RESOLVE_URL: "resolve-url-loader";
    };
    /** Predefined plugins */
    readonly PLUGIN: {
        /** HotModuleReplacementPlugin */
        readonly HMR: "hmr";
        /** CopyRspackPlugin */
        readonly COPY: "copy";
        /** HtmlRspackPlugin */
        readonly HTML: "html";
        /** DefinePlugin */
        readonly DEFINE: "define";
        /** ProgressPlugin */
        readonly PROGRESS: "progress";
        /** RspackManifestPlugin */
        readonly MANIFEST: "rspack-manifest";
        /** ForkTsCheckerWebpackPlugin */
        readonly TS_CHECKER: "ts-checker";
        /** ModuleFederationPlugin */
        readonly MODULE_FEDERATION: "module-federation";
        /** HtmlResourceHintsPlugin (prefetch) */
        readonly HTML_PREFETCH: "html-prefetch-plugin";
        /** HtmlResourceHintsPlugin (preload) */
        readonly HTML_PRELOAD: "html-preload-plugin";
        /** CssExtractRspackPlugin */
        readonly MINI_CSS_EXTRACT: "mini-css-extract";
        /** VueLoaderPlugin */
        readonly VUE_LOADER_PLUGIN: "vue-loader-plugin";
        /** ReactFastRefreshPlugin */
        readonly REACT_FAST_REFRESH: "react-fast-refresh";
        /** SubresourceIntegrityPlugin */
        readonly SUBRESOURCE_INTEGRITY: "subresource-integrity";
    };
    /** Predefined minimizers */
    readonly MINIMIZER: {
        /** SwcJsMinimizerRspackPlugin */
        readonly JS: "js";
        /** LightningCssMinimizerRspackPlugin */
        readonly CSS: "css";
    };
};
export type ChainIdentifier = typeof CHAIN_ID;
