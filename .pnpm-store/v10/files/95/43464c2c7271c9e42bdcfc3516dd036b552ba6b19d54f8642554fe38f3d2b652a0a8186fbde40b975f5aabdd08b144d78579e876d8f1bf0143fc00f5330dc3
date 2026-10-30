import { EntryDependency, type JsEntryOptions } from '@rspack/binding';
import type { EntryDescriptionNormalized } from '../config/index.js';
/**
 * Options for the `EntryPlugin`.
 */
export type EntryOptions = Omit<EntryDescriptionNormalized, 'import'> & {
    /**
     * The name of the entry chunk.
     */
    name?: string;
};
/**
 * The entry plugin that will handle creation of the `EntryDependency`.
 * It adds an entry chunk on compilation. The chunk is named `options.name` and
 * contains only one module (plus dependencies). The module is resolved from
 * `entry` in `context` (absolute path).
 */
declare const OriginEntryPlugin: {
    new (context: string, entry: string, options?: string | EntryOptions | undefined): {
        name: string;
        _args: [context: string, entry: string, options?: string | EntryOptions | undefined];
        affectedHooks: keyof import("../index.js").CompilerHooks | undefined;
        raw(compiler: import("../index.js").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("../index.js").Compiler): void;
    };
};
type EntryPluginType = typeof OriginEntryPlugin & {
    createDependency(entry: string): EntryDependency;
};
export declare const EntryPlugin: EntryPluginType;
export declare function getRawEntryOptions(entry: EntryOptions): JsEntryOptions;
export {};
