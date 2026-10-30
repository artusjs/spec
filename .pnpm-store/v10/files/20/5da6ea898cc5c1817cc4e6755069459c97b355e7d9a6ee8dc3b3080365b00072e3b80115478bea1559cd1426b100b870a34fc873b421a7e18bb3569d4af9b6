import type { Compiler } from '../Compiler.js';
import type { ModuleFederationPluginOptions } from '../container/ModuleFederationPlugin.js';
export interface TreeshakingSharedPluginOptions {
    mfConfig: ModuleFederationPluginOptions;
    secondary?: boolean;
}
export declare class TreeShakingSharedPlugin {
    mfConfig: ModuleFederationPluginOptions;
    outputDir: string;
    secondary?: boolean;
    private _independentSharePlugin?;
    name: string;
    constructor(options: TreeshakingSharedPluginOptions);
    apply(compiler: Compiler): void;
    get buildAssets(): import("./IndependentSharedPlugin.js").ShareFallback;
}
