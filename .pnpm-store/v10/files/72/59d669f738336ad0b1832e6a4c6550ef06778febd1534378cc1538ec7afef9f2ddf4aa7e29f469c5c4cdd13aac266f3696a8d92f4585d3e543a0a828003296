import type { Compiler } from '../Compiler.js';
import type { OptimizationSplitChunksOptions, RspackOptionsNormalized } from '../config/index.js';
export declare function applyLimits(options: RspackOptionsNormalized): void;
export declare class EsmLibraryPlugin {
    static PLUGIN_NAME: string;
    options: {
        preserveModules?: string;
        splitChunks?: OptimizationSplitChunksOptions | false;
    };
    constructor(options?: {
        preserveModules?: string;
        splitChunks?: OptimizationSplitChunksOptions | false;
    });
    apply(compiler: Compiler): void;
}
