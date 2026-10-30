import type { Compiler } from '../index.js';
import type { InfrastructureLogging } from '../config/index.js';
export interface NodeEnvironmentPluginOptions {
    infrastructureLogging: InfrastructureLogging;
}
export default class NodeEnvironmentPlugin {
    options: NodeEnvironmentPluginOptions;
    constructor(options: NodeEnvironmentPluginOptions);
    apply(compiler: Compiler): void;
}
