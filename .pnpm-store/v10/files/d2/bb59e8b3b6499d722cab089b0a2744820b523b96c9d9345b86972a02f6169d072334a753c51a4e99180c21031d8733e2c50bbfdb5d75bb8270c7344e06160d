export type LimitChunkCountOptions = {
    chunkOverhead?: number;
    entryChunkMultiplicator?: number;
    maxChunks: number;
};
export declare const LimitChunkCountPlugin: {
    new (options: LimitChunkCountOptions): {
        name: string;
        _args: [options: LimitChunkCountOptions];
        affectedHooks: keyof import("../index.js").CompilerHooks | undefined;
        raw(compiler: import("../index.js").Compiler): import("@rspack/binding").BuiltinPlugin;
        apply(compiler: import("../index.js").Compiler): void;
    };
};
