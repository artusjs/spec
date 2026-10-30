import { EventEmitter } from 'node:events';
import { Dirent, Stats, WatchEventType } from 'node:fs';
import { Readable } from 'node:stream';

/**
 * Recursive version of readdir. Exposes a streaming API and promise API.
 * Streaming API allows to use a small amount of RAM.
 *
 * @module
 * @example
```js
import readdirp from 'readdirp';
for await (const entry of readdirp('.')) {
  const {path} = entry;
  console.log(`${JSON.stringify({path})}`);
}
```
 */
/*! readdirp - MIT License (c) 2012-2019 Thorsten Lorenz, Paul Miller (https://paulmillr.com) */

/** Path in file system. */
type Path$1 = string;
/** Emitted entry. Contains relative & absolute path, basename, and either stats or dirent. */
interface EntryInfo {
    path: string;
    fullPath: string;
    stats?: Stats;
    dirent?: Dirent;
    basename: string;
}
/** Path or dir entries (files) */
type PathOrDirent = Dirent | Path$1;
/** Filterer for files */
type Tester = (entryInfo: EntryInfo) => boolean;
type Predicate = string[] | string | Tester;
declare const EntryTypes: {
    readonly FILE_TYPE: "files";
    readonly DIR_TYPE: "directories";
    readonly FILE_DIR_TYPE: "files_directories";
    readonly EVERYTHING_TYPE: "all";
};
type EntryType = (typeof EntryTypes)[keyof typeof EntryTypes];
/**
 * Options for readdirp.
 * * type: files, directories, or both
 * * lstat: whether to use symlink-friendly stat
 * * depth: max depth
 * * alwaysStat: whether to use stat (more resources) or dirent
 * * highWaterMark: streaming param, specifies max amount of resources per entry
 */
type ReaddirpOptions = {
    root: string;
    fileFilter?: Predicate;
    directoryFilter?: Predicate;
    type?: EntryType;
    lstat?: boolean;
    depth?: number;
    alwaysStat?: boolean;
    highWaterMark?: number;
};
/** Directory entry. Contains path, depth count, and files. */
interface DirEntry$1 {
    files: PathOrDirent[];
    depth: number;
    path: Path$1;
}
/** Readable readdir stream, emitting new files as they're being listed. */
declare class ReaddirpStream extends Readable {
    parents: any[];
    reading: boolean;
    parent?: DirEntry$1;
    _stat: Function;
    _maxDepth: number;
    _wantsDir: boolean;
    _wantsFile: boolean;
    _wantsEverything: boolean;
    _root: Path$1;
    _isDirent: boolean;
    _statsProp: 'dirent' | 'stats';
    _rdOptions: {
        encoding: 'utf8';
        withFileTypes: boolean;
    };
    _fileFilter: Tester;
    _directoryFilter: Tester;
    constructor(options?: Partial<ReaddirpOptions>);
    _read(batch: number): Promise<void>;
    _exploreDir(path: Path$1, depth: number): Promise<{
        files: string[] | undefined;
        depth: number;
        path: string;
    }>;
    _formatEntry(dirent: PathOrDirent, path: Path$1): Promise<EntryInfo | undefined>;
    _onError(err: Error): void;
    _getEntryType(entry: EntryInfo): Promise<void | '' | 'file' | 'directory'>;
    _includeAsFile(entry: EntryInfo): boolean | undefined;
}

type Path = string;
declare const EVENTS: {
    readonly ALL: "all";
    readonly READY: "ready";
    readonly ADD: "add";
    readonly CHANGE: "change";
    readonly ADD_DIR: "addDir";
    readonly UNLINK: "unlink";
    readonly UNLINK_DIR: "unlinkDir";
    readonly RAW: "raw";
    readonly ERROR: "error";
};
type EventName = (typeof EVENTS)[keyof typeof EVENTS];
interface WatchHandlers {
    listener: (path: string) => void;
    errHandler: (err: unknown) => void;
    rawEmitter: (ev: WatchEventType, path: string, opts: unknown) => void;
}
/**
 * @mixin
 */
declare class NodeFsHandler {
    fsw: FSWatcher;
    _boundHandleError: (error: unknown) => void;
    constructor(fsW: FSWatcher);
    /**
     * Watch file for changes with fs_watchFile or fs_watch.
     * @param path to file or dir
     * @param listener on fs change
     * @returns closer for the watcher instance
     */
    _watchWithNodeFs(path: string, listener: (path: string, newStats?: any) => void | Promise<void>): (() => void) | undefined;
    /**
     * Watch a file and emit add event if warranted.
     * @returns closer for the watcher instance
     */
    _handleFile(file: Path, stats: Stats, initialAdd: boolean): (() => void) | undefined;
    /**
     * Handle symlinks encountered while reading a dir.
     * @param entry returned by readdirp
     * @param directory path of dir being read
     * @param path of this item
     * @param item basename of this item
     * @returns true if no more processing is needed for this entry.
     */
    _handleSymlink(entry: EntryInfo, directory: string, path: Path, item: string): Promise<boolean | undefined>;
    _handleRead(directory: string, initialAdd: boolean, wh: WatchHelper, target: Path | undefined, dir: Path, depth: number, throttler: Throttler): Promise<unknown> | undefined;
    /**
     * Read directory to add / remove files from `@watched` list and re-read it on change.
     * @param dir fs path
     * @param stats
     * @param initialAdd
     * @param depth relative to user-supplied path
     * @param target child path targeted for watch
     * @param wh Common watch helpers for this path
     * @param realpath
     * @returns closer for the watcher instance.
     */
    _handleDir(dir: string, stats: Stats, initialAdd: boolean, depth: number, target: string | undefined, wh: WatchHelper, realpath: string): Promise<(() => void) | undefined>;
    /**
     * Handle added file, directory, or glob pattern.
     * Delegates call to _handleFile / _handleDir after checks.
     * @param path to file or ir
     * @param initialAdd was the file added at watch instantiation?
     * @param priorWh depth relative to user-supplied path
     * @param depth Child path actually targeted for watch
     * @param target Child path actually targeted for watch
     */
    _addToNodeFs(path: string, initialAdd: boolean, priorWh: WatchHelper | undefined, depth: number, target?: string): Promise<string | false | undefined>;
}

/*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */

type AWF = {
    stabilityThreshold: number;
    pollInterval: number;
};
type BasicOpts = {
    persistent: boolean;
    ignoreInitial: boolean;
    followSymlinks: boolean;
    cwd?: string;
    usePolling: boolean;
    interval: number;
    binaryInterval: number;
    alwaysStat?: boolean;
    depth?: number;
    ignorePermissionErrors: boolean;
    atomic: boolean | number;
};
type Throttler = {
    timeoutObject: NodeJS.Timeout;
    clear: () => void;
    count: number;
};
type ChokidarOptions = Partial<BasicOpts & {
    ignored: Matcher | Matcher[];
    awaitWriteFinish: boolean | Partial<AWF>;
}>;
type FSWInstanceOptions = BasicOpts & {
    ignored: Matcher[];
    awaitWriteFinish: false | AWF;
};
type ThrottleType = 'readdir' | 'watch' | 'add' | 'remove' | 'change';
type EmitArgs = [path: Path, stats?: Stats];
type EmitErrorArgs = [error: Error, stats?: Stats];
type EmitArgsWithName = [event: EventName, ...EmitArgs];
type MatchFunction = (val: string, stats?: Stats) => boolean;
interface MatcherObject {
    path: string;
    recursive?: boolean;
}
type Matcher = string | RegExp | MatchFunction | MatcherObject;
/**
 * Directory entry.
 */
declare class DirEntry {
    path: Path;
    _removeWatcher: (dir: string, base: string) => void;
    items: Set<Path>;
    constructor(dir: Path, removeWatcher: (dir: string, base: string) => void);
    add(item: string): void;
    remove(item: string): Promise<void>;
    has(item: string): boolean | undefined;
    getChildren(): string[];
    dispose(): void;
}
declare class WatchHelper {
    fsw: FSWatcher;
    path: string;
    watchPath: string;
    fullWatchPath: string;
    dirParts: string[][];
    followSymlinks: boolean;
    statMethod: 'stat' | 'lstat';
    constructor(path: string, follow: boolean, fsw: FSWatcher);
    entryPath(entry: EntryInfo): Path;
    filterPath(entry: EntryInfo): boolean;
    filterDir(entry: EntryInfo): boolean;
}
interface FSWatcherEventMap {
    [EVENTS.READY]: [];
    [EVENTS.RAW]: Parameters<WatchHandlers['rawEmitter']>;
    [EVENTS.ERROR]: Parameters<WatchHandlers['errHandler']>;
    [EVENTS.ALL]: [event: EventName, ...EmitArgs];
    [EVENTS.ADD]: EmitArgs;
    [EVENTS.CHANGE]: EmitArgs;
    [EVENTS.ADD_DIR]: EmitArgs;
    [EVENTS.UNLINK]: EmitArgs;
    [EVENTS.UNLINK_DIR]: EmitArgs;
}
/**
 * Watches files & directories for changes. Emitted events:
 * `add`, `addDir`, `change`, `unlink`, `unlinkDir`, `all`, `error`
 *
 *     new FSWatcher()
 *       .add(directories)
 *       .on('add', path => log('File', path, 'was added'))
 */
declare class FSWatcher extends EventEmitter<FSWatcherEventMap> {
    closed: boolean;
    options: FSWInstanceOptions;
    _closers: Map<string, Array<any>>;
    _ignoredPaths: Set<Matcher>;
    _throttled: Map<ThrottleType, Map<any, any>>;
    _streams: Set<ReaddirpStream>;
    _symlinkPaths: Map<Path, string | boolean>;
    _watched: Map<string, DirEntry>;
    _pendingWrites: Map<string, any>;
    _pendingUnlinks: Map<string, EmitArgsWithName>;
    _readyCount: number;
    _emitReady: () => void;
    _closePromise?: Promise<void>;
    _userIgnored?: MatchFunction;
    _readyEmitted: boolean;
    _emitRaw: WatchHandlers['rawEmitter'];
    _boundRemove: (dir: string, item: string) => void;
    _nodeFsHandler: NodeFsHandler;
    constructor(_opts?: ChokidarOptions);
    _addIgnoredPath(matcher: Matcher): void;
    _removeIgnoredPath(matcher: Matcher): void;
    /**
     * Adds paths to be watched on an existing FSWatcher instance.
     * @param paths_ file or file list. Other arguments are unused
     */
    add(paths_: Path | Path[], _origAdd?: string, _internal?: boolean): FSWatcher;
    /**
     * Close watchers or start ignoring events from specified paths.
     */
    unwatch(paths_: Path | Path[]): FSWatcher;
    /**
     * Close watchers and remove all listeners from watched paths.
     */
    close(): Promise<void>;
    /**
     * Expose list of watched paths
     * @returns for chaining
     */
    getWatched(): Record<string, string[]>;
    emitWithAll(event: EventName, args: EmitArgs): void;
    /**
     * Normalize and emit events.
     * Calling _emit DOES NOT MEAN emit() would be called!
     * @param event Type of event
     * @param path File or directory path
     * @param stats arguments to be passed with event
     * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
     */
    _emit(event: EventName, path: Path, stats?: Stats): Promise<this | undefined>;
    /**
     * Common handler for errors
     * @returns The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
     */
    _handleError(error: Error): Error | boolean;
    /**
     * Helper utility for throttling
     * @param actionType type being throttled
     * @param path being acted upon
     * @param timeout duration of time to suppress duplicate actions
     * @returns tracking object or false if action should be suppressed
     */
    _throttle(actionType: ThrottleType, path: Path, timeout: number): Throttler | false;
    _incrReadyCount(): number;
    /**
     * Awaits write operation to finish.
     * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
     * @param path being acted upon
     * @param threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
     * @param event
     * @param awfEmit Callback to be called when ready for event to be emitted.
     */
    _awaitWriteFinish(path: Path, threshold: number, event: EventName, awfEmit: (err?: Error, stat?: Stats) => void): void;
    /**
     * Determines whether user has asked to ignore this path.
     */
    _isIgnored(path: Path, stats?: Stats): boolean;
    _isntIgnored(path: Path, stat?: Stats): boolean;
    /**
     * Provides a set of common helpers and properties relating to symlink handling.
     * @param path file or directory pattern being watched
     */
    _getWatchHelpers(path: Path): WatchHelper;
    /**
     * Provides directory tracking objects
     * @param directory path of the directory
     */
    _getWatchedDir(directory: string): DirEntry;
    /**
     * Check for read permissions: https://stackoverflow.com/a/11781404/1358405
     */
    _hasReadPermissions(stats: Stats): boolean;
    /**
     * Handles emitting unlink events for
     * files and directories, and via recursion, for
     * files and directories within directories that are unlinked
     * @param directory within which the following item is located
     * @param item      base path of item/directory
     */
    _remove(directory: string, item: string, isDirectory?: boolean): void;
    /**
     * Closes all watchers for a path
     */
    _closePath(path: Path): void;
    /**
     * Closes only file-specific watchers
     */
    _closeFile(path: Path): void;
    _addPathCloser(path: Path, closer: () => void): void;
    _readdirp(root: Path, opts?: Partial<ReaddirpOptions>): ReaddirpStream | undefined;
}
/**
 * Instantiates watcher with paths to be tracked.
 * @param paths file / directory paths
 * @param options opts, such as `atomic`, `awaitWriteFinish`, `ignored`, and others
 * @returns an instance of FSWatcher for chaining.
 * @example
 * const watcher = watch('.').on('all', (event, path) => { console.log(event, path); });
 * watch('.', { atomic: true, awaitWriteFinish: true, ignored: (f, stats) => stats?.isFile() && !f.endsWith('.js') })
 */
declare function watch(paths: string | string[], options?: ChokidarOptions): FSWatcher;
declare const _default: {
    watch: typeof watch;
    FSWatcher: typeof FSWatcher;
};

export { FSWatcher, WatchHelper, _default as default, watch };
export type { AWF, ChokidarOptions, EmitArgs, EmitArgsWithName, EmitErrorArgs, FSWInstanceOptions, FSWatcherEventMap, MatchFunction, Matcher, MatcherObject, ThrottleType, Throttler };
