import { type BuiltinPlugin, BuiltinPluginName, type RawSharedContainerPluginOptions } from '@rspack/binding';
import { RspackBuiltinPlugin } from '../builtin-plugin/base.js';
import type { Compiler } from '../Compiler.js';
import type { LibraryOptions } from '../config/index.js';
export type SharedContainerPluginOptions = {
    mfName: string;
    shareName: string;
    version: string;
    request: string;
    library?: LibraryOptions;
    independentShareFileName?: string;
};
export declare class SharedContainerPlugin extends RspackBuiltinPlugin {
    name: BuiltinPluginName;
    filename: string;
    _options: RawSharedContainerPluginOptions;
    _shareName: string;
    _globalName: string;
    constructor(options: SharedContainerPluginOptions);
    getData(): (string | undefined)[];
    raw(compiler: Compiler): BuiltinPlugin;
    apply(compiler: Compiler): void;
}
