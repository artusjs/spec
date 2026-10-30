import type binding from '@rspack/binding';
import type { Compiler } from '../../index.js';
import { RspackBuiltinPlugin } from '../base.js';
import { type Coordinator } from './Coordinator.js';
/** Manifest export entry (server/client actions, module refs). */
export interface RscManifestExport {
    id: string;
    name: string;
    chunks: string[];
    async?: boolean;
}
/** Map of export name to manifest export. */
export type RscManifestNode = Record<string, RscManifestExport>;
/** Module loading config (prefix, crossOrigin). */
export interface RscModuleLoading {
    prefix: string;
    crossOrigin?: 'use-credentials' | '';
}
export interface RscManifestPerEntry {
    serverManifest: Record<string, RscManifestExport>;
    clientManifest: Record<string, RscManifestExport>;
    serverConsumerModuleMap: Record<string, RscManifestNode>;
    moduleLoading: RscModuleLoading;
    entryCssFiles: Record<string, string[]>;
    entryJsFiles: string[];
}
/** Full RSC manifest (all entries) passed to onManifest. Map from entry name to per-entry manifest. */
export type RscManifest = Record<string, RscManifestPerEntry>;
export type RscServerPluginOptions = {
    coordinator: Coordinator;
    onServerComponentChanges?: () => Promise<void>;
    onManifest?: (manifest: RscManifest) => void | Promise<void>;
};
export declare class RscServerPlugin extends RspackBuiltinPlugin {
    #private;
    name: string;
    constructor(options: RscServerPluginOptions);
    raw(compiler: Compiler): binding.BuiltinPlugin;
}
