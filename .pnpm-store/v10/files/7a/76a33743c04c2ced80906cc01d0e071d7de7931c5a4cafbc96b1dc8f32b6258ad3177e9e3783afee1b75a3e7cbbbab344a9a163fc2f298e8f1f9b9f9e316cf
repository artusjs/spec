import { RemarkPluginFactoryBase, type ComponentRegistration } from './FactoryBase';
import type { Plugin } from 'unified';
import type { Root } from 'mdast';
type InsertPosition = 'pre' | 'post' | 'after-first-heading';
interface ComponentInsertDescriptor extends ComponentRegistration<void> {
    position: InsertPosition;
}
interface Options {
    components: ComponentInsertDescriptor[];
}
export declare class RemarkInsertComponentPluginFactory extends RemarkPluginFactoryBase {
    readonly options: Options;
    constructor(options: Options);
    get remarkPlugin(): Plugin<[unknown], Root>;
}
export {};
