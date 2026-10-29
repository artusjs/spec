import { type BuiltinPlugin, BuiltinPluginName } from '@rspack/binding';
import { RspackBuiltinPlugin } from '../builtin-plugin/base.js';
import type { Compiler } from '../Compiler.js';
import type { EntryRuntime, FilenameTemplate, LibraryOptions } from '../config/index.js';
import { type ShareScope } from '../sharing/SharePlugin.js';
export type ContainerPluginOptions = {
    exposes: Exposes;
    filename?: FilenameTemplate;
    library?: LibraryOptions;
    name: string;
    runtime?: EntryRuntime;
    shareScope?: ShareScope;
    enhanced?: boolean;
};
export type Exposes = (ExposesItem | ExposesObject)[] | ExposesObject;
export type ExposesItem = string;
export type ExposesItems = ExposesItem[];
export type ExposesObject = {
    [k: string]: ExposesConfig | ExposesItem | ExposesItems;
};
export type ExposesConfig = {
    import: ExposesItem | ExposesItems;
    name?: string;
};
export declare class ContainerPlugin extends RspackBuiltinPlugin {
    name: BuiltinPluginName;
    _options: {
        name: string;
        shareScope: ShareScope;
        library: LibraryOptions;
        runtime: EntryRuntime | undefined;
        filename: string | undefined;
        exposes: [string, {
            import: string[];
            name: string | undefined;
        }][];
        enhanced: boolean;
    };
    constructor(options: ContainerPluginOptions);
    raw(compiler: Compiler): BuiltinPlugin;
}
