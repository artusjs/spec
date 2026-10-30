/**
 * This file is used to get/set the global instance for html-plugin and css-extract plugin.
 */
import { rspack } from '@rspack/core';
import type { HtmlRspackPlugin, NormalizedEnvironmentConfig } from './types';
/**
 * This method is used to override the Rsbuild default html-plugin (html-rspack-plugin).
 */
export declare const setHTMLPlugin: (plugin: typeof HtmlRspackPlugin) => void;
export declare function getHTMLPlugin(config?: NormalizedEnvironmentConfig): typeof HtmlRspackPlugin;
export declare const setCssExtractPlugin: (plugin: unknown) => void;
export declare const getCssExtractPlugin: () => typeof rspack.CssExtractRspackPlugin;
