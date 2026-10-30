/**
 * This method is modified based on source found in
 * https://github.com/vuejs/preload-webpack-plugin/blob/master/src/index.js
 *
 * Copyright 2018 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { Compiler, RspackPluginInstance } from '@rspack/core';
import type { HtmlRspackPlugin, ResourceHintsOptions } from '../../types';
type LinkType = 'preload' | 'prefetch';
export declare class HtmlResourceHintsPlugin implements RspackPluginInstance {
    readonly options: ResourceHintsOptions;
    name: string;
    resourceHints: HtmlRspackPlugin.HtmlTagObject[];
    type: LinkType;
    HTMLCount: number;
    isDev: boolean;
    getHTMLPlugin: () => typeof HtmlRspackPlugin;
    constructor(options: ResourceHintsOptions, type: LinkType, HTMLCount: number, isDev: boolean, getHTMLPlugin: () => typeof HtmlRspackPlugin);
    apply(compiler: Compiler): void;
}
export {};
