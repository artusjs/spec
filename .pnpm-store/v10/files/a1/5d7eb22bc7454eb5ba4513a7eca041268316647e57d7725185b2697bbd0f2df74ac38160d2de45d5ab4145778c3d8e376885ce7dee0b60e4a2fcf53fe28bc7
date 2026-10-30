import { Chunk, Compiler, Compilation, RspackPluginInstance } from '@rspack/core';

interface FileDescriptor {
    chunk?: Chunk;
    isAsset: boolean;
    isChunk: boolean;
    isInitial: boolean;
    isModuleAsset: boolean;
    name: string;
    path: string;
    integrity?: string;
}

declare const getCompilerHooks: (compiler: Compiler) => any;

type Manifest = Record<string, any>;
interface InternalOptions {
    [key: string]: any;
    assetHookStage: number;
    basePath: string;
    fileName: string;
    filter: (file: FileDescriptor) => boolean;
    generate: (seed: Record<any, any>, files: FileDescriptor[], entries: Record<string, string[]>, context: {
        compilation: Compilation;
    }) => Manifest;
    map: (file: FileDescriptor) => FileDescriptor;
    publicPath: string;
    removeKeyHash: RegExp | false;
    seed: Record<any, any>;
    serialize: (manifest: Manifest) => string;
    sort: (fileA: FileDescriptor, fileB: FileDescriptor) => Number;
    transformExtensions: RegExp;
    useEntryKeys: boolean;
    useLegacyEmit: boolean;
    writeToFileEmit: boolean;
}
type ManifestPluginOptions = Partial<InternalOptions>;
type EmitCountMap = Map<any, any>;
declare class WebpackManifestPlugin implements RspackPluginInstance {
    private options;
    constructor(opts: ManifestPluginOptions);
    apply(compiler: Compiler): void;
}

declare const RspackManifestPlugin: typeof WebpackManifestPlugin;

export { RspackManifestPlugin, WebpackManifestPlugin, getCompilerHooks };
export type { EmitCountMap, FileDescriptor, InternalOptions, Manifest, ManifestPluginOptions };
