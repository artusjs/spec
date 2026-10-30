import { RemarkPluginFactoryBase, type ComponentRegistration } from './FactoryBase';
import type { Plugin } from 'unified';
import type { Root } from 'mdast';
interface ComponentTransform extends ComponentRegistration<string> {
    lang: string;
}
interface Options {
    components: ComponentTransform[];
}
export declare class RemarkCodeBlockToGlobalComponentPluginFactory extends RemarkPluginFactoryBase {
    private readonly options;
    constructor(options: Options);
    get remarkPlugin(): Plugin<[unknown], Root>;
}
export {};
