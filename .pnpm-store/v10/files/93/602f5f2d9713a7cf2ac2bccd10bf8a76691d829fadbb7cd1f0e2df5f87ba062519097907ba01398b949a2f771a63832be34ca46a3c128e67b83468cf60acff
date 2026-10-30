/*! LICENSE: chokidar.js.LICENSE.txt */
import { EventEmitter } from "node:events";
import { stat as external_node_fs_stat, unwatchFile, watch, watchFile } from "node:fs";
import { lstat, open as promises_open, readdir, realpath as promises_realpath, stat as promises_stat } from "node:fs/promises";
import { join, relative as external_node_path_relative, resolve as external_node_path_resolve, sep } from "node:path";
import { Readable } from "node:stream";
import { type as external_node_os_type } from "node:os";
import * as __rspack_external_node_path_c5b9b54f from "node:path";
let EntryTypes_FILE_TYPE = 'files', EntryTypes_DIR_TYPE = 'directories', EntryTypes_FILE_DIR_TYPE = 'files_directories', defaultOptions = {
    root: '.',
    fileFilter: (_entryInfo)=>!0,
    directoryFilter: (_entryInfo)=>!0,
    type: EntryTypes_FILE_TYPE,
    lstat: !1,
    depth: 2147483648,
    alwaysStat: !1,
    highWaterMark: 4096
};
Object.freeze(defaultOptions);
let RECURSIVE_ERROR_CODE = 'READDIRP_RECURSIVE_ERROR', NORMAL_FLOW_ERRORS = new Set([
    'ENOENT',
    'EPERM',
    'EACCES',
    'ELOOP',
    RECURSIVE_ERROR_CODE
]), ALL_TYPES = [
    EntryTypes_DIR_TYPE,
    'all',
    EntryTypes_FILE_DIR_TYPE,
    EntryTypes_FILE_TYPE
], DIR_TYPES = new Set([
    EntryTypes_DIR_TYPE,
    'all',
    EntryTypes_FILE_DIR_TYPE
]), FILE_TYPES = new Set([
    'all',
    EntryTypes_FILE_DIR_TYPE,
    EntryTypes_FILE_TYPE
]), wantBigintFsStats = 'win32' === process.platform, emptyFn = (_entryInfo)=>!0, normalizeFilter = (filter)=>{
    if (void 0 === filter) return emptyFn;
    if ('function' == typeof filter) return filter;
    if ('string' == typeof filter) {
        let fl = filter.trim();
        return (entry)=>entry.basename === fl;
    }
    if (Array.isArray(filter)) {
        let trItems = filter.map((item)=>item.trim());
        return (entry)=>trItems.some((f)=>entry.basename === f);
    }
    return emptyFn;
};
class ReaddirpStream extends Readable {
    parents;
    reading;
    parent;
    _stat;
    _maxDepth;
    _wantsDir;
    _wantsFile;
    _wantsEverything;
    _root;
    _isDirent;
    _statsProp;
    _rdOptions;
    _fileFilter;
    _directoryFilter;
    constructor(options = {}){
        super({
            objectMode: !0,
            autoDestroy: !0,
            highWaterMark: options.highWaterMark
        });
        let opts = {
            ...defaultOptions,
            ...options
        }, { root, type } = opts;
        this._fileFilter = normalizeFilter(opts.fileFilter), this._directoryFilter = normalizeFilter(opts.directoryFilter);
        let statMethod = opts.lstat ? lstat : promises_stat;
        wantBigintFsStats ? this._stat = (path)=>statMethod(path, {
                bigint: !0
            }) : this._stat = statMethod, this._maxDepth = null != opts.depth && Number.isSafeInteger(opts.depth) ? opts.depth : defaultOptions.depth, this._wantsDir = !!type && DIR_TYPES.has(type), this._wantsFile = !!type && FILE_TYPES.has(type), this._wantsEverything = 'all' === type, this._root = external_node_path_resolve(root), this._isDirent = !opts.alwaysStat, this._statsProp = this._isDirent ? 'dirent' : 'stats', this._rdOptions = {
            encoding: 'utf8',
            withFileTypes: this._isDirent
        }, this.parents = [
            this._exploreDir(root, 1)
        ], this.reading = !1, this.parent = void 0;
    }
    async _read(batch) {
        if (!this.reading) {
            this.reading = !0;
            try {
                for(; !this.destroyed && batch > 0;){
                    let par = this.parent, fil = par && par.files;
                    if (fil && fil.length > 0) {
                        let { path, depth } = par, slice = fil.splice(0, batch).map((dirent)=>this._formatEntry(dirent, path));
                        for (let entry of (await Promise.all(slice))){
                            if (!entry) continue;
                            if (this.destroyed) return;
                            let entryType = await this._getEntryType(entry);
                            'directory' === entryType && this._directoryFilter(entry) ? (depth <= this._maxDepth && this.parents.push(this._exploreDir(entry.fullPath, depth + 1)), this._wantsDir && (this.push(entry), batch--)) : ('file' === entryType || this._includeAsFile(entry)) && this._fileFilter(entry) && this._wantsFile && (this.push(entry), batch--);
                        }
                    } else {
                        let parent = this.parents.pop();
                        if (!parent) {
                            this.push(null);
                            break;
                        }
                        if (this.parent = await parent, this.destroyed) return;
                    }
                }
            } catch (error) {
                this.destroy(error);
            } finally{
                this.reading = !1;
            }
        }
    }
    async _exploreDir(path, depth) {
        let files;
        try {
            files = await readdir(path, this._rdOptions);
        } catch (error) {
            this._onError(error);
        }
        return {
            files,
            depth,
            path
        };
    }
    async _formatEntry(dirent, path) {
        let entry, basename = this._isDirent ? dirent.name : dirent;
        try {
            let fullPath = external_node_path_resolve(join(path, basename));
            (entry = {
                path: external_node_path_relative(this._root, fullPath),
                fullPath,
                basename
            })[this._statsProp] = this._isDirent ? dirent : await this._stat(fullPath);
        } catch (err) {
            this._onError(err);
            return;
        }
        return entry;
    }
    _onError(err) {
        NORMAL_FLOW_ERRORS.has(err.code) && !this.destroyed ? this.emit('warn', err) : this.destroy(err);
    }
    async _getEntryType(entry) {
        if (!entry && this._statsProp in entry) return '';
        let stats = entry[this._statsProp];
        if (stats.isFile()) return 'file';
        if (stats.isDirectory()) return 'directory';
        if (stats && stats.isSymbolicLink()) {
            let full = entry.fullPath;
            try {
                let entryRealPath = await promises_realpath(full), entryRealPathStats = await lstat(entryRealPath);
                if (entryRealPathStats.isFile()) return 'file';
                if (entryRealPathStats.isDirectory()) {
                    let len = entryRealPath.length;
                    if (full.startsWith(entryRealPath) && full.substr(len, 1) === sep) {
                        let recursiveError = Error(`Circular symlink detected: "${full}" points to "${entryRealPath}"`);
                        return recursiveError.code = RECURSIVE_ERROR_CODE, this._onError(recursiveError);
                    }
                    return 'directory';
                }
            } catch (error) {
                return this._onError(error), '';
            }
        }
    }
    _includeAsFile(entry) {
        let stats = entry && entry[this._statsProp];
        return stats && this._wantsEverything && !stats.isDirectory();
    }
}
function readdirp(root, options = {}) {
    let type = options.entryType || options.type;
    if ('both' === type && (type = EntryTypes_FILE_DIR_TYPE), type && (options.type = type), root) {
        if ('string' != typeof root) throw TypeError('readdirp: root argument must be a string. Usage: readdirp(root, options)');
        else if (type && !ALL_TYPES.includes(type)) throw Error(`readdirp: Invalid type passed. Use one of ${ALL_TYPES.join(', ')}`);
    } else throw Error('readdirp: root argument is required. Usage: readdirp(root, options)');
    return options.root = root, new ReaddirpStream(options);
}
let EMPTY_FN = ()=>{}, pl = process.platform, isWindows = 'win32' === pl, isMacos = 'darwin' === pl, isLinux = 'linux' === pl, isFreeBSD = 'freebsd' === pl, isIBMi = 'OS400' === external_node_os_type(), EVENTS_ALL = 'all', EVENTS_READY = 'ready', EVENTS_ADD = 'add', EVENTS_CHANGE = 'change', EVENTS_ADD_DIR = 'addDir', EVENTS_UNLINK = 'unlink', EVENTS_UNLINK_DIR = 'unlinkDir', EVENTS_RAW = 'raw', EVENTS_ERROR = 'error', statMethods = {
    lstat: lstat,
    stat: promises_stat
}, KEY_LISTENERS = 'listeners', KEY_ERR = 'errHandlers', KEY_RAW = 'rawEmitters', HANDLER_KEYS = [
    KEY_LISTENERS,
    KEY_ERR,
    KEY_RAW
], binaryExtensions = new Set([
    '3dm',
    '3ds',
    '3g2',
    '3gp',
    '7z',
    'a',
    'aac',
    'adp',
    'afdesign',
    'afphoto',
    'afpub',
    'ai',
    'aif',
    'aiff',
    'alz',
    'ape',
    'apk',
    'appimage',
    'ar',
    'arj',
    'asf',
    'au',
    'avi',
    'bak',
    'baml',
    'bh',
    'bin',
    'bk',
    'bmp',
    'btif',
    'bz2',
    'bzip2',
    'cab',
    'caf',
    'cgm',
    'class',
    'cmx',
    'cpio',
    'cr2',
    'cur',
    'dat',
    'dcm',
    'deb',
    'dex',
    'djvu',
    'dll',
    'dmg',
    'dng',
    'doc',
    'docm',
    'docx',
    'dot',
    'dotm',
    'dra',
    'DS_Store',
    'dsk',
    'dts',
    'dtshd',
    'dvb',
    'dwg',
    'dxf',
    'ecelp4800',
    'ecelp7470',
    'ecelp9600',
    'egg',
    'eol',
    'eot',
    'epub',
    'exe',
    'f4v',
    'fbs',
    'fh',
    'fla',
    'flac',
    'flatpak',
    'fli',
    'flv',
    'fpx',
    'fst',
    'fvt',
    'g3',
    'gh',
    'gif',
    'graffle',
    'gz',
    'gzip',
    'h261',
    'h263',
    'h264',
    'icns',
    'ico',
    'ief',
    'img',
    'ipa',
    'iso',
    'jar',
    'jpeg',
    'jpg',
    'jpgv',
    'jpm',
    'jxr',
    'key',
    'ktx',
    'lha',
    'lib',
    'lvp',
    'lz',
    'lzh',
    'lzma',
    'lzo',
    'm3u',
    'm4a',
    'm4v',
    'mar',
    'mdi',
    'mht',
    'mid',
    'midi',
    'mj2',
    'mka',
    'mkv',
    'mmr',
    'mng',
    'mobi',
    'mov',
    'movie',
    'mp3',
    'mp4',
    'mp4a',
    'mpeg',
    'mpg',
    'mpga',
    'mxu',
    'nef',
    'npx',
    'numbers',
    'nupkg',
    'o',
    'odp',
    'ods',
    'odt',
    'oga',
    'ogg',
    'ogv',
    'otf',
    'ott',
    'pages',
    'pbm',
    'pcx',
    'pdb',
    'pdf',
    'pea',
    'pgm',
    'pic',
    'png',
    'pnm',
    'pot',
    'potm',
    'potx',
    'ppa',
    'ppam',
    'ppm',
    'pps',
    'ppsm',
    'ppsx',
    'ppt',
    'pptm',
    'pptx',
    'psd',
    'pya',
    'pyc',
    'pyo',
    'pyv',
    'qt',
    'rar',
    'ras',
    'raw',
    'resources',
    'rgb',
    'rip',
    'rlc',
    'rmf',
    'rmvb',
    'rpm',
    'rtf',
    'rz',
    's3m',
    's7z',
    'scpt',
    'sgi',
    'shar',
    'snap',
    'sil',
    'sketch',
    'slk',
    'smv',
    'snk',
    'so',
    'stl',
    'suo',
    'sub',
    'swf',
    'tar',
    'tbz',
    'tbz2',
    'tga',
    'tgz',
    'thmx',
    'tif',
    'tiff',
    'tlz',
    'ttc',
    'ttf',
    'txz',
    'udf',
    'uvh',
    'uvi',
    'uvm',
    'uvp',
    'uvs',
    'uvu',
    'viv',
    'vob',
    'war',
    'wav',
    'wax',
    'wbmp',
    'wdp',
    'weba',
    'webm',
    'webp',
    'whl',
    'wim',
    'wm',
    'wma',
    'wmv',
    'wmx',
    'woff',
    'woff2',
    'wrm',
    'wvx',
    'xbm',
    'xif',
    'xla',
    'xlam',
    'xls',
    'xlsb',
    'xlsm',
    'xlsx',
    'xlt',
    'xltm',
    'xltx',
    'xm',
    'xmind',
    'xpi',
    'xpm',
    'xwd',
    'xz',
    'z',
    'zip',
    'zipx'
]), foreach = (val, fn)=>{
    val instanceof Set ? val.forEach(fn) : fn(val);
}, addAndConvert = (main, prop, item)=>{
    let container = main[prop];
    container instanceof Set || (main[prop] = container = new Set([
        container
    ])), container.add(item);
}, delFromSet = (main, prop, item)=>{
    let container = main[prop];
    container instanceof Set ? container.delete(item) : container === item && delete main[prop];
}, isEmptySet = (val)=>val instanceof Set ? 0 === val.size : !val, FsWatchInstances = new Map();
function createFsWatchInstance(path, options, listener, errHandler, emitRaw) {
    try {
        return watch(path, {
            persistent: options.persistent
        }, (rawEvent, evPath)=>{
            listener(path), emitRaw(rawEvent, evPath, {
                watchedPath: path
            }), evPath && path !== evPath && fsWatchBroadcast(__rspack_external_node_path_c5b9b54f.resolve(path, evPath), KEY_LISTENERS, __rspack_external_node_path_c5b9b54f.join(path, evPath));
        });
    } catch (error) {
        errHandler(error);
        return;
    }
}
let fsWatchBroadcast = (fullPath, listenerType, val1, val2, val3)=>{
    let cont = FsWatchInstances.get(fullPath);
    cont && foreach(cont[listenerType], (listener)=>{
        listener(val1, val2, val3);
    });
}, FsWatchFileInstances = new Map();
class NodeFsHandler {
    fsw;
    _boundHandleError;
    constructor(fsW){
        this.fsw = fsW, this._boundHandleError = (error)=>fsW._handleError(error);
    }
    _watchWithNodeFs(path, listener) {
        let closer, opts = this.fsw.options, directory = __rspack_external_node_path_c5b9b54f.dirname(path), basename = __rspack_external_node_path_c5b9b54f.basename(path);
        this.fsw._getWatchedDir(directory).add(basename);
        let absolutePath = __rspack_external_node_path_c5b9b54f.resolve(path), options = {
            persistent: opts.persistent
        };
        if (listener || (listener = EMPTY_FN), opts.usePolling) options.interval = opts.interval !== opts.binaryInterval && binaryExtensions.has(__rspack_external_node_path_c5b9b54f.extname(basename).slice(1).toLowerCase()) ? opts.binaryInterval : opts.interval, closer = ((path, fullPath, options, handlers)=>{
            let { listener, rawEmitter } = handlers, cont = FsWatchFileInstances.get(fullPath), copts = cont && cont.options;
            return copts && (copts.persistent < options.persistent || copts.interval > options.interval) && (unwatchFile(fullPath), cont = void 0), cont ? (addAndConvert(cont, KEY_LISTENERS, listener), addAndConvert(cont, KEY_RAW, rawEmitter)) : (cont = {
                listeners: listener,
                rawEmitters: rawEmitter,
                options,
                watcher: watchFile(fullPath, options, (curr, prev)=>{
                    foreach(cont.rawEmitters, (rawEmitter)=>{
                        rawEmitter(EVENTS_CHANGE, fullPath, {
                            curr,
                            prev
                        });
                    });
                    let currmtime = curr.mtimeMs;
                    (curr.size !== prev.size || currmtime > prev.mtimeMs || 0 === currmtime) && foreach(cont.listeners, (listener)=>listener(path, curr));
                })
            }, FsWatchFileInstances.set(fullPath, cont)), ()=>{
                delFromSet(cont, KEY_LISTENERS, listener), delFromSet(cont, KEY_RAW, rawEmitter), isEmptySet(cont.listeners) && (FsWatchFileInstances.delete(fullPath), unwatchFile(fullPath), cont.options = cont.watcher = void 0, Object.freeze(cont));
            };
        })(path, absolutePath, options, {
            listener,
            rawEmitter: this.fsw._emitRaw
        });
        else closer = ((path, fullPath, options, handlers)=>{
            let watcher, { listener, errHandler, rawEmitter } = handlers, cont = FsWatchInstances.get(fullPath);
            if (!options.persistent) {
                if (!(watcher = createFsWatchInstance(path, options, listener, errHandler, rawEmitter))) return;
                return watcher.close.bind(watcher);
            }
            if (cont) addAndConvert(cont, KEY_LISTENERS, listener), addAndConvert(cont, KEY_ERR, errHandler), addAndConvert(cont, KEY_RAW, rawEmitter);
            else {
                if (!(watcher = createFsWatchInstance(path, options, fsWatchBroadcast.bind(null, fullPath, KEY_LISTENERS), errHandler, fsWatchBroadcast.bind(null, fullPath, KEY_RAW)))) return;
                watcher.on(EVENTS_ERROR, async (error)=>{
                    let broadcastErr = fsWatchBroadcast.bind(null, fullPath, KEY_ERR);
                    if (cont && (cont.watcherUnusable = !0), isWindows && 'EPERM' === error.code) try {
                        let fd = await promises_open(path, 'r');
                        await fd.close(), broadcastErr(error);
                    } catch (err) {}
                    else broadcastErr(error);
                }), cont = {
                    listeners: listener,
                    errHandlers: errHandler,
                    rawEmitters: rawEmitter,
                    watcher
                }, FsWatchInstances.set(fullPath, cont);
            }
            return ()=>{
                if (delFromSet(cont, KEY_LISTENERS, listener), delFromSet(cont, KEY_ERR, errHandler), delFromSet(cont, KEY_RAW, rawEmitter), isEmptySet(cont.listeners)) {
                    let cont1;
                    cont.watcher.close(), FsWatchInstances.delete(fullPath), HANDLER_KEYS.forEach((cont1 = cont, (key)=>{
                        let set = cont1[key];
                        set instanceof Set ? set.clear() : delete cont1[key];
                    })), cont.watcher = void 0, Object.freeze(cont);
                }
            };
        })(path, absolutePath, options, {
            listener,
            errHandler: this._boundHandleError,
            rawEmitter: this.fsw._emitRaw
        });
        return closer;
    }
    _handleFile(file, stats, initialAdd) {
        if (this.fsw.closed) return;
        let dirname = __rspack_external_node_path_c5b9b54f.dirname(file), basename = __rspack_external_node_path_c5b9b54f.basename(file), parent = this.fsw._getWatchedDir(dirname), prevStats = stats;
        if (parent.has(basename)) return;
        let listener = async (path, newStats)=>{
            if (this.fsw._throttle('watch', file, 5)) if (newStats && 0 !== newStats.mtimeMs) {
                if (parent.has(basename)) {
                    let at = newStats.atimeMs, mt = newStats.mtimeMs;
                    (!at || at <= mt || mt !== prevStats.mtimeMs) && this.fsw._emit(EVENTS_CHANGE, file, newStats), prevStats = newStats;
                }
            } else try {
                let newStats = await promises_stat(file);
                if (this.fsw.closed) return;
                let at = newStats.atimeMs, mt = newStats.mtimeMs;
                if ((!at || at <= mt || mt !== prevStats.mtimeMs) && this.fsw._emit(EVENTS_CHANGE, file, newStats), (isMacos || isLinux || isFreeBSD) && prevStats.ino !== newStats.ino) {
                    this.fsw._closeFile(path), prevStats = newStats;
                    let closer = this._watchWithNodeFs(file, listener);
                    closer && this.fsw._addPathCloser(path, closer);
                } else prevStats = newStats;
            } catch (error) {
                this.fsw._remove(dirname, basename);
            }
        }, closer = this._watchWithNodeFs(file, listener);
        if (!(initialAdd && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(file)) {
            if (!this.fsw._throttle(EVENTS_ADD, file, 0)) return;
            this.fsw._emit(EVENTS_ADD, file, stats);
        }
        return closer;
    }
    async _handleSymlink(entry, directory, path, item) {
        if (this.fsw.closed) return;
        let full = entry.fullPath, dir = this.fsw._getWatchedDir(directory);
        if (!this.fsw.options.followSymlinks) {
            let linkPath;
            this.fsw._incrReadyCount();
            try {
                linkPath = await promises_realpath(path);
            } catch (e) {
                return this.fsw._emitReady(), !0;
            }
            if (this.fsw.closed) return;
            return dir.has(item) ? this.fsw._symlinkPaths.get(full) !== linkPath && (this.fsw._symlinkPaths.set(full, linkPath), this.fsw._emit(EVENTS_CHANGE, path, entry.stats)) : (dir.add(item), this.fsw._symlinkPaths.set(full, linkPath), this.fsw._emit(EVENTS_ADD, path, entry.stats)), this.fsw._emitReady(), !0;
        }
        if (this.fsw._symlinkPaths.has(full)) return !0;
        this.fsw._symlinkPaths.set(full, !0);
    }
    _handleRead(directory, initialAdd, wh, target, dir, depth, throttler) {
        directory = __rspack_external_node_path_c5b9b54f.join(directory, '');
        let throttleKey = target ? `${directory}:${target}` : directory;
        if (!(throttler = this.fsw._throttle('readdir', throttleKey, 1000))) return;
        let previous = this.fsw._getWatchedDir(wh.path), current = new Set(), stream = this.fsw._readdirp(directory, {
            fileFilter: (entry)=>wh.filterPath(entry),
            directoryFilter: (entry)=>wh.filterDir(entry)
        });
        if (stream) return stream.on('data', async (entry)=>{
            if (this.fsw.closed) {
                stream = void 0;
                return;
            }
            let item = entry.path, path = __rspack_external_node_path_c5b9b54f.join(directory, item);
            if (current.add(item), !(entry.stats.isSymbolicLink() && await this._handleSymlink(entry, directory, path, item))) {
                if (this.fsw.closed) {
                    stream = void 0;
                    return;
                }
                item !== target && (target || previous.has(item)) || (this.fsw._incrReadyCount(), path = __rspack_external_node_path_c5b9b54f.join(dir, __rspack_external_node_path_c5b9b54f.relative(dir, path)), this._addToNodeFs(path, initialAdd, wh, depth + 1));
            }
        }).on(EVENTS_ERROR, this._boundHandleError), new Promise((resolve, reject)=>{
            if (!stream) return reject();
            stream.once('end', ()=>{
                if (this.fsw.closed) {
                    stream = void 0;
                    return;
                }
                let wasThrottled = !!throttler && throttler.clear();
                resolve(void 0), previous.getChildren().filter((item)=>item !== directory && !current.has(item)).forEach((item)=>{
                    this.fsw._remove(directory, item);
                }), stream = void 0, wasThrottled && this._handleRead(directory, !1, wh, target, dir, depth, throttler);
            });
        });
    }
    async _handleDir(dir, stats, initialAdd, depth, target, wh, realpath) {
        let throttler, closer, parentDir = this.fsw._getWatchedDir(__rspack_external_node_path_c5b9b54f.dirname(dir)), tracked = parentDir.has(__rspack_external_node_path_c5b9b54f.basename(dir));
        initialAdd && this.fsw.options.ignoreInitial || target || tracked || this.fsw._emit(EVENTS_ADD_DIR, dir, stats), parentDir.add(__rspack_external_node_path_c5b9b54f.basename(dir)), this.fsw._getWatchedDir(dir);
        let oDepth = this.fsw.options.depth;
        if ((null == oDepth || depth <= oDepth) && !this.fsw._symlinkPaths.has(realpath)) {
            if (!target && (await this._handleRead(dir, initialAdd, wh, target, dir, depth, throttler), this.fsw.closed)) return;
            closer = this._watchWithNodeFs(dir, (dirPath, stats)=>{
                stats && 0 === stats.mtimeMs || this._handleRead(dirPath, !1, wh, target, dir, depth, throttler);
            });
        }
        return closer;
    }
    async _addToNodeFs(path, initialAdd, priorWh, depth, target) {
        let ready = this.fsw._emitReady;
        if (this.fsw._isIgnored(path) || this.fsw.closed) return ready(), !1;
        let wh = this.fsw._getWatchHelpers(path);
        priorWh && (wh.filterPath = (entry)=>priorWh.filterPath(entry), wh.filterDir = (entry)=>priorWh.filterDir(entry));
        try {
            let closer, stats = await statMethods[wh.statMethod](wh.watchPath);
            if (this.fsw.closed) return;
            if (this.fsw._isIgnored(wh.watchPath, stats)) return ready(), !1;
            let follow = this.fsw.options.followSymlinks;
            if (stats.isDirectory()) {
                let absPath = __rspack_external_node_path_c5b9b54f.resolve(path), targetPath = follow ? await promises_realpath(path) : path;
                if (this.fsw.closed || (closer = await this._handleDir(wh.watchPath, stats, initialAdd, depth, target, wh, targetPath), this.fsw.closed)) return;
                absPath !== targetPath && void 0 !== targetPath && this.fsw._symlinkPaths.set(absPath, targetPath);
            } else if (stats.isSymbolicLink()) {
                let targetPath = follow ? await promises_realpath(path) : path;
                if (this.fsw.closed) return;
                let parent = __rspack_external_node_path_c5b9b54f.dirname(wh.watchPath);
                if (this.fsw._getWatchedDir(parent).add(wh.watchPath), this.fsw._emit(EVENTS_ADD, wh.watchPath, stats), closer = await this._handleDir(parent, stats, initialAdd, depth, path, wh, targetPath), this.fsw.closed) return;
                void 0 !== targetPath && this.fsw._symlinkPaths.set(__rspack_external_node_path_c5b9b54f.resolve(path), targetPath);
            } else closer = this._handleFile(wh.watchPath, stats, initialAdd);
            return ready(), closer && this.fsw._addPathCloser(path, closer), !1;
        } catch (error) {
            if (this.fsw._handleError(error)) return ready(), path;
        }
    }
}
let BACK_SLASH_RE = /\\/g, DOUBLE_SLASH_RE = /\/\//g, DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/, REPLACER_RE = /^\.[/\\]/;
function arrify(item) {
    return Array.isArray(item) ? item : [
        item
    ];
}
let isMatcherObject = (matcher)=>'object' == typeof matcher && null !== matcher && !(matcher instanceof RegExp);
function createPattern(matcher) {
    return 'function' == typeof matcher ? matcher : 'string' == typeof matcher ? (string)=>matcher === string : matcher instanceof RegExp ? (string)=>matcher.test(string) : 'object' == typeof matcher && null !== matcher ? (string)=>{
        if (matcher.path === string) return !0;
        if (matcher.recursive) {
            let relative = __rspack_external_node_path_c5b9b54f.relative(matcher.path, string);
            return !!relative && !relative.startsWith('..') && !__rspack_external_node_path_c5b9b54f.isAbsolute(relative);
        }
        return !1;
    } : ()=>!1;
}
function normalizePath(path) {
    if ('string' != typeof path) throw Error('string expected');
    path = (path = __rspack_external_node_path_c5b9b54f.normalize(path)).replace(/\\/g, '/');
    let prepend = !1;
    return path.startsWith('//') && (prepend = !0), path = path.replace(DOUBLE_SLASH_RE, '/'), prepend && (path = '/' + path), path;
}
function matchPatterns(patterns, testString, stats) {
    let path = normalizePath(testString);
    for(let index = 0; index < patterns.length; index++)if ((0, patterns[index])(path, stats)) return !0;
    return !1;
}
function anymatch(matchers, testString) {
    if (null == matchers) throw TypeError('anymatch: specify first argument');
    let patterns = arrify(matchers).map((matcher)=>createPattern(matcher));
    return null == testString ? (testString, stats)=>matchPatterns(patterns, testString, stats) : matchPatterns(patterns, testString);
}
let unifyPaths = (paths_)=>{
    let paths = arrify(paths_).flat();
    if (!paths.every((p)=>'string' == typeof p)) throw TypeError(`Non-string provided as watch path: ${paths}`);
    return paths.map(normalizePathToUnix);
}, toUnix = (string)=>{
    let str = string.replace(BACK_SLASH_RE, '/'), prepend = !1;
    return str.startsWith('//') && (prepend = !0), str = str.replace(DOUBLE_SLASH_RE, '/'), prepend && (str = '/' + str), str;
}, normalizePathToUnix = (path)=>toUnix(__rspack_external_node_path_c5b9b54f.normalize(toUnix(path))), normalizeIgnored = (cwd = '')=>(path)=>'string' == typeof path ? normalizePathToUnix(__rspack_external_node_path_c5b9b54f.isAbsolute(path) ? path : __rspack_external_node_path_c5b9b54f.join(cwd, path)) : path, EMPTY_SET = Object.freeze(new Set());
class DirEntry {
    path;
    _removeWatcher;
    items;
    constructor(dir, removeWatcher){
        this.path = dir, this._removeWatcher = removeWatcher, this.items = new Set();
    }
    add(item) {
        let { items } = this;
        items && '.' !== item && '..' !== item && items.add(item);
    }
    async remove(item) {
        let { items } = this;
        if (!items || (items.delete(item), items.size > 0)) return;
        let dir = this.path;
        try {
            await readdir(dir);
        } catch (err) {
            this._removeWatcher && this._removeWatcher(__rspack_external_node_path_c5b9b54f.dirname(dir), __rspack_external_node_path_c5b9b54f.basename(dir));
        }
    }
    has(item) {
        let { items } = this;
        if (items) return items.has(item);
    }
    getChildren() {
        let { items } = this;
        return items ? [
            ...items.values()
        ] : [];
    }
    dispose() {
        this.items.clear(), this.path = '', this._removeWatcher = EMPTY_FN, this.items = EMPTY_SET, Object.freeze(this);
    }
}
class WatchHelper {
    fsw;
    path;
    watchPath;
    fullWatchPath;
    dirParts;
    followSymlinks;
    statMethod;
    constructor(path, follow, fsw){
        this.fsw = fsw;
        let watchPath = path;
        this.path = path = path.replace(REPLACER_RE, ''), this.watchPath = watchPath, this.fullWatchPath = __rspack_external_node_path_c5b9b54f.resolve(watchPath), this.dirParts = [], this.dirParts.forEach((parts)=>{
            parts.length > 1 && parts.pop();
        }), this.followSymlinks = follow, this.statMethod = follow ? 'stat' : 'lstat';
    }
    entryPath(entry) {
        return __rspack_external_node_path_c5b9b54f.join(this.watchPath, __rspack_external_node_path_c5b9b54f.relative(this.watchPath, entry.fullPath));
    }
    filterPath(entry) {
        let { stats } = entry;
        if (stats && stats.isSymbolicLink()) return this.filterDir(entry);
        let resolvedPath = this.entryPath(entry);
        return this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
    }
    filterDir(entry) {
        return this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
    }
}
class FSWatcher extends EventEmitter {
    closed;
    options;
    _closers;
    _ignoredPaths;
    _throttled;
    _streams;
    _symlinkPaths;
    _watched;
    _pendingWrites;
    _pendingUnlinks;
    _readyCount;
    _emitReady;
    _closePromise;
    _userIgnored;
    _readyEmitted;
    _emitRaw;
    _boundRemove;
    _nodeFsHandler;
    constructor(_opts = {}){
        super(), this.closed = !1, this._closers = new Map(), this._ignoredPaths = new Set(), this._throttled = new Map(), this._streams = new Set(), this._symlinkPaths = new Map(), this._watched = new Map(), this._pendingWrites = new Map(), this._pendingUnlinks = new Map(), this._readyCount = 0, this._readyEmitted = !1;
        let awf = _opts.awaitWriteFinish, DEF_AWF = {
            stabilityThreshold: 2000,
            pollInterval: 100
        }, opts = {
            persistent: !0,
            ignoreInitial: !1,
            ignorePermissionErrors: !1,
            interval: 100,
            binaryInterval: 300,
            followSymlinks: !0,
            usePolling: !1,
            atomic: !0,
            ..._opts,
            ignored: _opts.ignored ? arrify(_opts.ignored) : arrify([]),
            awaitWriteFinish: !0 === awf ? DEF_AWF : 'object' == typeof awf && {
                ...DEF_AWF,
                ...awf
            }
        };
        isIBMi && (opts.usePolling = !0), void 0 === opts.atomic && (opts.atomic = !opts.usePolling);
        let envPoll = process.env.CHOKIDAR_USEPOLLING;
        if (void 0 !== envPoll) {
            let envLower = envPoll.toLowerCase();
            'false' === envLower || '0' === envLower ? opts.usePolling = !1 : 'true' === envLower || '1' === envLower ? opts.usePolling = !0 : opts.usePolling = !!envLower;
        }
        let envInterval = process.env.CHOKIDAR_INTERVAL;
        envInterval && (opts.interval = Number.parseInt(envInterval, 10));
        let readyCalls = 0;
        this._emitReady = ()=>{
            ++readyCalls >= this._readyCount && (this._emitReady = EMPTY_FN, this._readyEmitted = !0, process.nextTick(()=>this.emit(EVENTS_READY)));
        }, this._emitRaw = (...args)=>this.emit(EVENTS_RAW, ...args), this._boundRemove = this._remove.bind(this), this.options = opts, this._nodeFsHandler = new NodeFsHandler(this), Object.freeze(opts);
    }
    _addIgnoredPath(matcher) {
        if (isMatcherObject(matcher)) {
            for (let ignored of this._ignoredPaths)if (isMatcherObject(ignored) && ignored.path === matcher.path && ignored.recursive === matcher.recursive) return;
        }
        this._ignoredPaths.add(matcher);
    }
    _removeIgnoredPath(matcher) {
        if (this._ignoredPaths.delete(matcher), 'string' == typeof matcher) for (let ignored of this._ignoredPaths)isMatcherObject(ignored) && ignored.path === matcher && this._ignoredPaths.delete(ignored);
    }
    add(paths_, _origAdd, _internal) {
        let { cwd } = this.options;
        this.closed = !1, this._closePromise = void 0;
        let paths = unifyPaths(paths_);
        return cwd && (paths = paths.map((path)=>__rspack_external_node_path_c5b9b54f.isAbsolute(path) ? path : __rspack_external_node_path_c5b9b54f.join(cwd, path))), paths.forEach((path)=>{
            this._removeIgnoredPath(path);
        }), this._userIgnored = void 0, this._readyCount || (this._readyCount = 0), this._readyCount += paths.length, Promise.all(paths.map(async (path)=>{
            let res = await this._nodeFsHandler._addToNodeFs(path, !_internal, void 0, 0, _origAdd);
            return res && this._emitReady(), res;
        })).then((results)=>{
            this.closed || results.forEach((item)=>{
                item && this.add(__rspack_external_node_path_c5b9b54f.dirname(item), __rspack_external_node_path_c5b9b54f.basename(_origAdd || item));
            });
        }), this;
    }
    unwatch(paths_) {
        if (this.closed) return this;
        let paths = unifyPaths(paths_), { cwd } = this.options;
        return paths.forEach((path)=>{
            __rspack_external_node_path_c5b9b54f.isAbsolute(path) || this._closers.has(path) || (cwd && (path = __rspack_external_node_path_c5b9b54f.join(cwd, path)), path = __rspack_external_node_path_c5b9b54f.resolve(path)), this._closePath(path), this._addIgnoredPath(path), this._watched.has(path) && this._addIgnoredPath({
                path,
                recursive: !0
            }), this._userIgnored = void 0;
        }), this;
    }
    close() {
        if (this._closePromise) return this._closePromise;
        this.closed = !0, this.removeAllListeners();
        let closers = [];
        return this._closers.forEach((closerList)=>closerList.forEach((closer)=>{
                let promise = closer();
                promise instanceof Promise && closers.push(promise);
            })), this._streams.forEach((stream)=>stream.destroy()), this._userIgnored = void 0, this._readyCount = 0, this._readyEmitted = !1, this._watched.forEach((dirent)=>dirent.dispose()), this._closers.clear(), this._watched.clear(), this._streams.clear(), this._symlinkPaths.clear(), this._throttled.clear(), this._closePromise = closers.length ? Promise.all(closers).then(()=>void 0) : Promise.resolve(), this._closePromise;
    }
    getWatched() {
        let watchList = {};
        return this._watched.forEach((entry, dir)=>{
            watchList[(this.options.cwd ? __rspack_external_node_path_c5b9b54f.relative(this.options.cwd, dir) : dir) || '.'] = entry.getChildren().sort();
        }), watchList;
    }
    emitWithAll(event, args) {
        this.emit(event, ...args), event !== EVENTS_ERROR && this.emit(EVENTS_ALL, event, ...args);
    }
    async _emit(event, path, stats) {
        let pw;
        if (this.closed) return;
        let opts = this.options;
        isWindows && (path = __rspack_external_node_path_c5b9b54f.normalize(path)), opts.cwd && (path = __rspack_external_node_path_c5b9b54f.relative(opts.cwd, path));
        let args = [
            path
        ];
        null != stats && args.push(stats);
        let awf = opts.awaitWriteFinish;
        if (awf && (pw = this._pendingWrites.get(path))) return pw.lastChange = new Date(), this;
        if (opts.atomic) {
            if (event === EVENTS_UNLINK) return this._pendingUnlinks.set(path, [
                event,
                ...args
            ]), setTimeout(()=>{
                this._pendingUnlinks.forEach((entry, path)=>{
                    this.emit(...entry), this.emit(EVENTS_ALL, ...entry), this._pendingUnlinks.delete(path);
                });
            }, 'number' == typeof opts.atomic ? opts.atomic : 100), this;
            event === EVENTS_ADD && this._pendingUnlinks.has(path) && (event = EVENTS_CHANGE, this._pendingUnlinks.delete(path));
        }
        if (awf && (event === EVENTS_ADD || event === EVENTS_CHANGE) && this._readyEmitted) {
            let awfEmit = (err, stats)=>{
                err ? (event = EVENTS_ERROR, args[0] = err, this.emitWithAll(event, args)) : stats && (args.length > 1 ? args[1] = stats : args.push(stats), this.emitWithAll(event, args));
            };
            return this._awaitWriteFinish(path, awf.stabilityThreshold, event, awfEmit), this;
        }
        if (event === EVENTS_CHANGE && !this._throttle(EVENTS_CHANGE, path, 50)) return this;
        if (opts.alwaysStat && void 0 === stats && (event === EVENTS_ADD || event === EVENTS_ADD_DIR || event === EVENTS_CHANGE)) {
            let stats, fullPath = opts.cwd ? __rspack_external_node_path_c5b9b54f.join(opts.cwd, path) : path;
            try {
                stats = await promises_stat(fullPath);
            } catch (err) {}
            if (!stats || this.closed) return;
            args.push(stats);
        }
        return this.emitWithAll(event, args), this;
    }
    _handleError(error) {
        let code = error && error.code;
        return error && 'ENOENT' !== code && 'ENOTDIR' !== code && (!this.options.ignorePermissionErrors || 'EPERM' !== code && 'EACCES' !== code) && this.emit(EVENTS_ERROR, error), error || this.closed;
    }
    _throttle(actionType, path, timeout) {
        let timeoutObject;
        this._throttled.has(actionType) || this._throttled.set(actionType, new Map());
        let action = this._throttled.get(actionType);
        if (!action) throw Error('invalid throttle');
        let actionPath = action.get(path);
        if (actionPath) return actionPath.count++, !1;
        let clear = ()=>{
            let item = action.get(path), count = item ? item.count : 0;
            return action.delete(path), clearTimeout(timeoutObject), item && clearTimeout(item.timeoutObject), count;
        }, thr = {
            timeoutObject: timeoutObject = setTimeout(clear, timeout),
            clear,
            count: 0
        };
        return action.set(path, thr), thr;
    }
    _incrReadyCount() {
        return this._readyCount++;
    }
    _awaitWriteFinish(path, threshold, event, awfEmit) {
        let timeoutHandler, awf = this.options.awaitWriteFinish;
        if ('object' != typeof awf) return;
        let pollInterval = awf.pollInterval, fullPath = path;
        this.options.cwd && !__rspack_external_node_path_c5b9b54f.isAbsolute(path) && (fullPath = __rspack_external_node_path_c5b9b54f.join(this.options.cwd, path));
        let now = new Date(), writes = this._pendingWrites;
        function awaitWriteFinishFn(prevStat) {
            external_node_fs_stat(fullPath, (err, curStat)=>{
                if (err || !writes.has(path)) {
                    err && 'ENOENT' !== err.code && awfEmit(err);
                    return;
                }
                let now = Number(new Date());
                prevStat && curStat.size !== prevStat.size && (writes.get(path).lastChange = now), now - writes.get(path).lastChange >= threshold ? (writes.delete(path), awfEmit(void 0, curStat)) : timeoutHandler = setTimeout(awaitWriteFinishFn, pollInterval, curStat);
            });
        }
        writes.has(path) || (writes.set(path, {
            lastChange: now,
            cancelWait: ()=>(writes.delete(path), clearTimeout(timeoutHandler), event)
        }), timeoutHandler = setTimeout(awaitWriteFinishFn, pollInterval));
    }
    _isIgnored(path, stats) {
        if (this.options.atomic && DOT_RE.test(path)) return !0;
        if (!this._userIgnored) {
            let { cwd } = this.options, ignored = (this.options.ignored || []).map(normalizeIgnored(cwd)), list = [
                ...[
                    ...this._ignoredPaths
                ].map(normalizeIgnored(cwd)),
                ...ignored
            ];
            this._userIgnored = anymatch(list, void 0);
        }
        return this._userIgnored(path, stats);
    }
    _isntIgnored(path, stat) {
        return !this._isIgnored(path, stat);
    }
    _getWatchHelpers(path) {
        return new WatchHelper(path, this.options.followSymlinks, this);
    }
    _getWatchedDir(directory) {
        let dir = __rspack_external_node_path_c5b9b54f.resolve(directory);
        return this._watched.has(dir) || this._watched.set(dir, new DirEntry(dir, this._boundRemove)), this._watched.get(dir);
    }
    _hasReadPermissions(stats) {
        return !!this.options.ignorePermissionErrors || !!(256 & Number(stats.mode));
    }
    _remove(directory, item, isDirectory) {
        let path = __rspack_external_node_path_c5b9b54f.join(directory, item), fullPath = __rspack_external_node_path_c5b9b54f.resolve(path);
        if (isDirectory = null != isDirectory ? isDirectory : this._watched.has(path) || this._watched.has(fullPath), !this._throttle('remove', path, 100)) return;
        isDirectory || 1 !== this._watched.size || this.add(directory, item, !0), this._getWatchedDir(path).getChildren().forEach((nested)=>this._remove(path, nested));
        let parent = this._getWatchedDir(directory), wasTracked = parent.has(item);
        parent.remove(item), this._symlinkPaths.has(fullPath) && this._symlinkPaths.delete(fullPath);
        let relPath = path;
        if (this.options.cwd && (relPath = __rspack_external_node_path_c5b9b54f.relative(this.options.cwd, path)), this.options.awaitWriteFinish && this._pendingWrites.has(relPath) && this._pendingWrites.get(relPath).cancelWait() === EVENTS_ADD) return;
        this._watched.delete(path), this._watched.delete(fullPath);
        let eventName = isDirectory ? EVENTS_UNLINK_DIR : EVENTS_UNLINK;
        wasTracked && !this._isIgnored(path) && this._emit(eventName, path), this._closePath(path);
    }
    _closePath(path) {
        this._closeFile(path);
        let dir = __rspack_external_node_path_c5b9b54f.dirname(path);
        this._getWatchedDir(dir).remove(__rspack_external_node_path_c5b9b54f.basename(path));
    }
    _closeFile(path) {
        let closers = this._closers.get(path);
        closers && (closers.forEach((closer)=>closer()), this._closers.delete(path));
    }
    _addPathCloser(path, closer) {
        if (!closer) return;
        let list = this._closers.get(path);
        list || (list = [], this._closers.set(path, list)), list.push(closer);
    }
    _readdirp(root, opts) {
        if (this.closed) return;
        let stream = readdirp(root, {
            type: EVENTS_ALL,
            alwaysStat: !0,
            lstat: !0,
            ...opts,
            depth: 0
        });
        return this._streams.add(stream), stream.once('close', ()=>{
            stream = void 0;
        }), stream.once('end', ()=>{
            stream && (this._streams.delete(stream), stream = void 0);
        }), stream;
    }
}
function chokidar_watch(paths, options = {}) {
    let watcher = new FSWatcher(options);
    return watcher.add(paths), watcher;
}
export default {
    watch: chokidar_watch,
    FSWatcher: FSWatcher
};
