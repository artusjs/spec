import { type BuiltinPlugin, BuiltinPluginName } from '@rspack/binding';
import { RspackBuiltinPlugin } from '../builtin-plugin/base.js';
import type { Compiler } from '../Compiler.js';
import type { ExternalsType } from '../config/index.js';
import { type ShareScope } from '../sharing/SharePlugin.js';
export type ContainerReferencePluginOptions = {
    remoteType: ExternalsType;
    remotes: Remotes;
    shareScope?: ShareScope;
    enhanced?: boolean;
};
export type Remotes = (RemotesItem | RemotesObject)[] | RemotesObject;
export type RemotesItem = string;
export type RemotesItems = RemotesItem[];
export type RemotesObject = {
    [k: string]: RemotesConfig | RemotesItem | RemotesItems;
};
export type RemotesConfig = {
    external: RemotesItem | RemotesItems;
    shareScope?: ShareScope;
};
export declare class ContainerReferencePlugin extends RspackBuiltinPlugin {
    name: BuiltinPluginName;
    _options: {
        remoteType: ExternalsType;
        remotes: [string, {
            external: string[];
            shareScope: ShareScope;
        }][];
        enhanced: boolean;
    };
    constructor(options: ContainerReferencePluginOptions);
    raw(compiler: Compiler): BuiltinPlugin;
}
