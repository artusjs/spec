import { decodedMappings as trace_mapping_decodedMappings, sourcemap_codec_encode, traceSegment, TraceMap as trace_mapping_TraceMap } from "./trace-mapping.js";
var SetArray = class {
    constructor(){
        this._indexes = {
            __proto__: null
        }, this.array = [];
    }
};
function put(setarr, key) {
    var setarr1, key1;
    let index = (setarr1 = setarr, key1 = key, setarr1._indexes[key1]);
    if (void 0 !== index) return index;
    let { array, _indexes: indexes } = setarr, length = array.push(key);
    return indexes[key] = length - 1;
}
function remove(setarr, key) {
    var setarr1, key1;
    let index = (setarr1 = setarr, key1 = key, setarr1._indexes[key1]);
    if (void 0 === index) return;
    let { array, _indexes: indexes } = setarr;
    for(let i = index + 1; i < array.length; i++){
        let k = array[i];
        array[i - 1] = k, indexes[k]--;
    }
    indexes[key] = void 0, array.pop();
}
var GenMapping = class {
    constructor({ file, sourceRoot } = {}){
        this._names = new SetArray(), this._sources = new SetArray(), this._sourcesContent = [], this._mappings = [], this.file = file, this.sourceRoot = sourceRoot, this._ignoreList = new SetArray();
    }
}, maybeAddSegment = (map, genLine, genColumn, source, sourceLine, sourceColumn, name, content)=>addSegmentInternal(!0, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
function setSourceContent(map, source, content) {
    let { _sources: sources, _sourcesContent: sourcesContent } = map;
    sourcesContent[put(sources, source)] = content;
}
function setIgnore(map, source, ignore = !0) {
    let { _sources: sources, _sourcesContent: sourcesContent, _ignoreList: ignoreList } = map, index = put(sources, source);
    index === sourcesContent.length && (sourcesContent[index] = null), ignore ? put(ignoreList, index) : remove(ignoreList, index);
}
function toDecodedMap(map) {
    let { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names, _ignoreList: ignoreList } = map;
    return removeEmptyFinalLines(mappings), {
        version: 3,
        file: map.file || void 0,
        names: names.array,
        sourceRoot: map.sourceRoot || void 0,
        sources: sources.array,
        sourcesContent,
        mappings,
        ignoreList: ignoreList.array
    };
}
function toEncodedMap(map) {
    let decoded = toDecodedMap(map);
    return Object.assign({}, decoded, {
        mappings: sourcemap_codec_encode(decoded.mappings)
    });
}
function addSegmentInternal(skipable, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
    let { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names } = map, line = getIndex(mappings, genLine), index = getColumnIndex(line, genColumn);
    if (!source) {
        if (skipable && skipSourceless(line, index)) return;
        return insert(line, index, [
            genColumn
        ]);
    }
    let sourcesIndex = put(sources, source), namesIndex = name ? put(names, name) : -1;
    if (sourcesIndex === sourcesContent.length && (sourcesContent[sourcesIndex] = null != content ? content : null), !(skipable && skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex))) return insert(line, index, name ? [
        genColumn,
        sourcesIndex,
        sourceLine,
        sourceColumn,
        namesIndex
    ] : [
        genColumn,
        sourcesIndex,
        sourceLine,
        sourceColumn
    ]);
}
function getIndex(arr, index) {
    for(let i = arr.length; i <= index; i++)arr[i] = [];
    return arr[index];
}
function getColumnIndex(line, genColumn) {
    let index = line.length;
    for(let i = index - 1; i >= 0 && !(genColumn >= line[i][0]); index = i--);
    return index;
}
function insert(array, index, value) {
    for(let i = array.length; i > index; i--)array[i] = array[i - 1];
    array[index] = value;
}
function removeEmptyFinalLines(mappings) {
    let { length } = mappings, len = length;
    for(let i = len - 1; i >= 0 && !(mappings[i].length > 0); len = i, i--);
    len < length && (mappings.length = len);
}
function skipSourceless(line, index) {
    return 0 === index || 1 === line[index - 1].length;
}
function skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex) {
    if (0 === index) return !1;
    let prev = line[index - 1];
    return 1 !== prev.length && sourcesIndex === prev[1] && sourceLine === prev[2] && sourceColumn === prev[3] && namesIndex === (5 === prev.length ? prev[4] : -1);
}
var SOURCELESS_MAPPING = SegmentObject("", -1, -1, "", null, !1), EMPTY_SOURCES = [];
function SegmentObject(source, line, column, name, content, ignore) {
    return {
        source,
        line,
        column,
        name,
        content,
        ignore
    };
}
function Source(map, sources, source, content, ignore) {
    return {
        map,
        sources,
        source,
        content,
        ignore
    };
}
function MapSource(map, sources) {
    return Source(map, sources, "", null, !1);
}
function OriginalSource(source, content, ignore) {
    return Source(null, EMPTY_SOURCES, source, content, ignore);
}
function traceMappings(tree) {
    let gen = new GenMapping({
        file: tree.map.file
    }), { sources: rootSources, map } = tree, rootNames = map.names, rootMappings = trace_mapping_decodedMappings(map);
    for(let i = 0; i < rootMappings.length; i++){
        let segments = rootMappings[i];
        for(let j = 0; j < segments.length; j++){
            let segment = segments[j], genCol = segment[0], traced = SOURCELESS_MAPPING;
            if (1 !== segment.length && null == (traced = originalPositionFor(rootSources[segment[1]], segment[2], segment[3], 5 === segment.length ? rootNames[segment[4]] : ""))) continue;
            let { column, line, name, content, source, ignore } = traced;
            maybeAddSegment(gen, i, genCol, source, line, column, name), source && null != content && setSourceContent(gen, source, content), ignore && setIgnore(gen, source, !0);
        }
    }
    return gen;
}
function originalPositionFor(source, line, column, name) {
    if (!source.map) return SegmentObject(source.source, line, column, name, source.content, source.ignore);
    let segment = traceSegment(source.map, line, column);
    return null == segment ? null : 1 === segment.length ? SOURCELESS_MAPPING : originalPositionFor(source.sources[segment[1]], segment[2], segment[3], 5 === segment.length ? source.map.names[segment[4]] : name);
}
function asArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function buildSourceMapTree(input, loader) {
    let maps = asArray(input).map((m)=>new trace_mapping_TraceMap(m, "")), map = maps.pop();
    for(let i = 0; i < maps.length; i++)if (maps[i].sources.length > 1) throw Error(`Transformation map ${i} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);
    let tree = build(map, loader, "", 0);
    for(let i = maps.length - 1; i >= 0; i--)tree = MapSource(maps[i], [
        tree
    ]);
    return tree;
}
function build(map, loader, importer, importerDepth) {
    let { resolvedSources, sourcesContent, ignoreList } = map, depth = importerDepth + 1;
    return MapSource(map, resolvedSources.map((sourceFile, i)=>{
        let ctx = {
            importer,
            depth,
            source: sourceFile || "",
            content: void 0,
            ignore: void 0
        }, sourceMap = loader(ctx.source, ctx), { source, content, ignore } = ctx;
        return sourceMap ? build(new trace_mapping_TraceMap(sourceMap, source), loader, source, depth) : OriginalSource(source, void 0 !== content ? content : sourcesContent ? sourcesContent[i] : null, void 0 !== ignore ? ignore : !!ignoreList && ignoreList.includes(i));
    }));
}
var SourceMap = class {
    constructor(map, options){
        let out = options.decodedMappings ? toDecodedMap(map) : toEncodedMap(map);
        this.version = out.version, this.file = out.file, this.mappings = out.mappings, this.names = out.names, this.ignoreList = out.ignoreList, this.sourceRoot = out.sourceRoot, this.sources = out.sources, options.excludeContent || (this.sourcesContent = out.sourcesContent);
    }
    toString() {
        return JSON.stringify(this);
    }
};
function remapping(input, loader, options) {
    return new SourceMap(traceMappings(buildSourceMapTree(input, loader)), "object" == typeof options ? options : {
        excludeContent: !!options,
        decodedMappings: !1
    });
}
export default remapping;
