import { type Drafts, type FeatureOptions, type NonStandard, type PseudoClasses, type Targets } from '../builtin-loader/lightningcss/index.js';
import type { Compiler } from '../Compiler.js';
import type { AssetConditions } from '../util/assetCondition.js';
export type LightningCssMinimizerRspackPluginOptions = {
    test?: AssetConditions;
    include?: AssetConditions;
    exclude?: AssetConditions;
    removeUnusedLocalIdents?: boolean;
    minimizerOptions?: {
        errorRecovery?: boolean;
        targets?: string[] | string | Targets;
        include?: FeatureOptions;
        exclude?: FeatureOptions;
        drafts?: Drafts;
        nonStandard?: NonStandard;
        pseudoClasses?: PseudoClasses;
        unusedSymbols?: string[];
    };
};
export declare const LightningCssMinimizerRspackPlugin: {
    new (options?: LightningCssMinimizerRspackPluginOptions | undefined): {
        name: string;
        _args: [options?: LightningCssMinimizerRspackPluginOptions | undefined];
        affectedHooks: keyof import("../index.js").CompilerHooks | undefined;
        raw(compiler: Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: Compiler): void;
    };
};
