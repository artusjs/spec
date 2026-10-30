import type { EnvironmentContext, InternalContext, ModifyChainUtils, ModifyRspackConfigUtils, RsbuildTarget, Rspack } from './types';
export declare function getConfigUtils(getCurrentConfig: () => Rspack.Configuration, chainUtils: ModifyChainUtils): ModifyRspackConfigUtils;
export declare function getChainUtils(target: RsbuildTarget, environment: EnvironmentContext, environments: Record<string, EnvironmentContext>): ModifyChainUtils;
export declare function generateRspackConfig({ target, context, environmentName, }: {
    target: RsbuildTarget;
    context: InternalContext;
    environmentName: string;
}): Promise<Rspack.Configuration>;
