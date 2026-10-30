/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/MultiCompiler.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
import * as liteTapable from '../compiled/@rspack/lite-tapable/dist/index.js';
import type { CompilationParams, Compiler, CompilerHooks, RspackOptions } from './index.js';
import type { WatchOptions } from './config/index.js';
import MultiStats from './MultiStats.js';
import MultiWatching from './MultiWatching.js';
import type { InputFileSystem, IntermediateFileSystem, WatchFileSystem } from './util/fs.js';
export interface MultiCompilerOptions {
    /**
     * how many Compilers are allows to run at the same time in parallel
     */
    parallelism?: number;
}
export type MultiRspackOptions = readonly RspackOptions[] & MultiCompilerOptions;
export declare class MultiCompiler {
    #private;
    compilers: Compiler[];
    dependencies: WeakMap<Compiler, string[]>;
    hooks: {
        done: liteTapable.SyncHook<MultiStats>;
        invalid: liteTapable.MultiHook<liteTapable.SyncHook<[string | null, number]>>;
        beforeCompile: liteTapable.MultiHook<liteTapable.AsyncSeriesHook<[CompilationParams]>>;
        shutdown: liteTapable.MultiHook<liteTapable.AsyncSeriesHook<[]>>;
        run: liteTapable.MultiHook<liteTapable.AsyncSeriesHook<[Compiler]>>;
        watchClose: liteTapable.SyncHook<[]>;
        watchRun: liteTapable.MultiHook<liteTapable.AsyncSeriesHook<[Compiler]>>;
        /**
         * @see {@link CompilerHooks['infrastructureLog']}
         */
        infrastructureLog: liteTapable.MultiHook<CompilerHooks['infrastructureLog']>;
    };
    _options: MultiCompilerOptions;
    running: boolean;
    watching?: MultiWatching;
    constructor(compilers: Compiler[] | Record<string, Compiler>, options?: MultiCompilerOptions);
    set unsafeFastDrop(value: boolean);
    get options(): import("./config/index.js").RspackOptionsNormalized[] & MultiCompilerOptions;
    get outputPath(): string;
    get inputFileSystem(): InputFileSystem;
    get outputFileSystem(): typeof import("fs");
    get watchFileSystem(): WatchFileSystem;
    get intermediateFileSystem(): IntermediateFileSystem;
    set inputFileSystem(value: InputFileSystem);
    set outputFileSystem(value: typeof import('fs'));
    set watchFileSystem(value: WatchFileSystem);
    set intermediateFileSystem(value: IntermediateFileSystem);
    getInfrastructureLogger(name: string): import("./logging/Logger.js").Logger;
    /**
     * @param compiler - the child compiler
     * @param dependencies - its dependencies
     */
    setDependencies(compiler: Compiler, dependencies: string[]): void;
    /**
     * @param callback - signals when the validation is complete
     * @returns true if the dependencies are valid
     */
    validateDependencies(callback: liteTapable.Callback<Error, MultiStats>): boolean;
    /**
     * @param watchOptions - the watcher's options
     * @param handler - signals when the call finishes
     * @returns a compiler watcher
     */
    watch(watchOptions: WatchOptions | WatchOptions[], handler: liteTapable.Callback<Error, MultiStats>): MultiWatching;
    /**
     * @param callback - signals when the call finishes
     * @param options - additional data like modifiedFiles, removedFiles
     */
    run(callback: liteTapable.Callback<Error, MultiStats>, options?: {
        modifiedFiles?: ReadonlySet<string>;
        removedFiles?: ReadonlySet<string>;
    }): void;
    purgeInputFileSystem(): void;
    close(callback: liteTapable.Callback<Error, void>): void;
}
