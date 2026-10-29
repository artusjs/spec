import type { Compiler } from '../Compiler.js';
import type { EntryRuntime, ExternalsType, LibraryOptions } from '../config/index.js';
import { type Shared, type ShareScope } from '../sharing/SharePlugin.js';
import { type Exposes } from './ContainerPlugin.js';
import { type Remotes } from './ContainerReferencePlugin.js';
export interface ModuleFederationPluginV1Options {
    exposes?: Exposes;
    filename?: string;
    library?: LibraryOptions;
    name: string;
    remoteType?: ExternalsType;
    remotes?: Remotes;
    runtime?: EntryRuntime;
    shareScope?: ShareScope;
    shared?: Shared;
    enhanced?: boolean;
}
export declare class ModuleFederationPluginV1 {
    private _options;
    constructor(_options: ModuleFederationPluginV1Options);
    apply(compiler: Compiler): void;
}
