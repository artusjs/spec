import type binding from '@rspack/binding';
import type { Compiler } from '../../index.js';
import { RspackBuiltinPlugin } from '../base.js';
import { type Coordinator } from './Coordinator.js';
export type RscClientPluginOptions = {
    coordinator: Coordinator;
};
export declare class RscClientPlugin extends RspackBuiltinPlugin {
    #private;
    name: string;
    constructor(options: RscClientPluginOptions);
    raw(compiler: Compiler): binding.BuiltinPlugin;
}
