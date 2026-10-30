var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", intToChar = new Uint8Array(64), charToInt = new Uint8Array(128);
for(let i = 0; i < chars.length; i++){
    let c = chars.charCodeAt(i);
    intToChar[i] = c, charToInt[c] = i;
}
function decodeInteger(reader, relative) {
    let value = 0, shift = 0, integer = 0;
    do value |= (31 & (integer = charToInt[reader.next()])) << shift, shift += 5;
    while (32 & integer);
    let shouldNegate = 1 & value;
    return value >>>= 1, shouldNegate && (value = -2147483648 | -value), relative + value;
}
function encodeInteger(builder, num, relative) {
    let delta = num - relative;
    delta = delta < 0 ? -delta << 1 | 1 : delta << 1;
    do {
        let clamped = 31 & delta;
        (delta >>>= 5) > 0 && (clamped |= 32), builder.write(intToChar[clamped]);
    }while (delta > 0);
    return num;
}
function hasMoreVlq(reader, max) {
    return !(reader.pos >= max) && 44 !== reader.peek();
}
var td = "u" > typeof TextDecoder ? new TextDecoder() : "u" > typeof Buffer ? {
    decode: (buf)=>Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength).toString()
} : {
    decode (buf) {
        let out = "";
        for(let i = 0; i < buf.length; i++)out += String.fromCharCode(buf[i]);
        return out;
    }
}, StringWriter = class {
    constructor(){
        this.pos = 0, this.out = "", this.buffer = new Uint8Array(16384);
    }
    write(v) {
        let { buffer } = this;
        buffer[this.pos++] = v, 16384 === this.pos && (this.out += td.decode(buffer), this.pos = 0);
    }
    flush() {
        let { buffer, out, pos } = this;
        return pos > 0 ? out + td.decode(buffer.subarray(0, pos)) : out;
    }
}, StringReader = class {
    constructor(buffer){
        this.pos = 0, this.buffer = buffer;
    }
    next() {
        return this.buffer.charCodeAt(this.pos++);
    }
    peek() {
        return this.buffer.charCodeAt(this.pos);
    }
    indexOf(char) {
        let { buffer, pos } = this, idx = buffer.indexOf(char, pos);
        return -1 === idx ? buffer.length : idx;
    }
};
function decode(mappings) {
    let { length } = mappings, reader = new StringReader(mappings), decoded = [], genColumn = 0, sourcesIndex = 0, sourceLine = 0, sourceColumn = 0, namesIndex = 0;
    do {
        let semi = reader.indexOf(";"), line = [], sorted = !0, lastCol = 0;
        for(genColumn = 0; reader.pos < semi;){
            let seg;
            (genColumn = decodeInteger(reader, genColumn)) < lastCol && (sorted = !1), lastCol = genColumn, hasMoreVlq(reader, semi) ? (sourcesIndex = decodeInteger(reader, sourcesIndex), sourceLine = decodeInteger(reader, sourceLine), sourceColumn = decodeInteger(reader, sourceColumn), seg = hasMoreVlq(reader, semi) ? [
                genColumn,
                sourcesIndex,
                sourceLine,
                sourceColumn,
                namesIndex = decodeInteger(reader, namesIndex)
            ] : [
                genColumn,
                sourcesIndex,
                sourceLine,
                sourceColumn
            ]) : seg = [
                genColumn
            ], line.push(seg), reader.pos++;
        }
        sorted || sort(line), decoded.push(line), reader.pos = semi + 1;
    }while (reader.pos <= length);
    return decoded;
}
function sort(line) {
    line.sort(sortComparator);
}
function sortComparator(a, b) {
    return a[0] - b[0];
}
function sourcemap_codec_encode(decoded) {
    let writer = new StringWriter(), sourcesIndex = 0, sourceLine = 0, sourceColumn = 0, namesIndex = 0;
    for(let i = 0; i < decoded.length; i++){
        let line = decoded[i];
        if (i > 0 && writer.write(59), 0 === line.length) continue;
        let genColumn = 0;
        for(let j = 0; j < line.length; j++){
            let segment = line[j];
            j > 0 && writer.write(44), genColumn = encodeInteger(writer, segment[0], genColumn), 1 !== segment.length && (sourcesIndex = encodeInteger(writer, segment[1], sourcesIndex), sourceLine = encodeInteger(writer, segment[2], sourceLine), sourceColumn = encodeInteger(writer, segment[3], sourceColumn), 4 !== segment.length && (namesIndex = encodeInteger(writer, segment[4], namesIndex)));
        }
    }
    return writer.flush();
}
let schemeRegex = /^[\w+.-]+:\/\//, urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
function isAbsoluteUrl(input) {
    return schemeRegex.test(input);
}
function isSchemeRelativeUrl(input) {
    return input.startsWith('//');
}
function isAbsolutePath(input) {
    return input.startsWith('/');
}
function isFileUrl(input) {
    return input.startsWith('file:');
}
function isRelative(input) {
    return /^[.?#]/.test(input);
}
function parseAbsoluteUrl(input) {
    let match = urlRegex.exec(input);
    return makeUrl(match[1], match[2] || '', match[3], match[4] || '', match[5] || '/', match[6] || '', match[7] || '');
}
function parseFileUrl(input) {
    let match = fileRegex.exec(input), path = match[2];
    return makeUrl('file:', '', match[1] || '', '', isAbsolutePath(path) ? path : '/' + path, match[3] || '', match[4] || '');
}
function makeUrl(scheme, user, host, port, path, query, hash) {
    return {
        scheme,
        user,
        host,
        port,
        path,
        query,
        hash,
        type: 7
    };
}
function parseUrl(input) {
    if (isSchemeRelativeUrl(input)) {
        let url = parseAbsoluteUrl('http:' + input);
        return url.scheme = '', url.type = 6, url;
    }
    if (isAbsolutePath(input)) {
        let url = parseAbsoluteUrl('http://foo.com' + input);
        return url.scheme = '', url.host = '', url.type = 5, url;
    }
    if (isFileUrl(input)) return parseFileUrl(input);
    if (isAbsoluteUrl(input)) return parseAbsoluteUrl(input);
    let url = parseAbsoluteUrl('http://foo.com/' + input);
    return url.scheme = '', url.host = '', url.type = input ? input.startsWith('?') ? 3 : input.startsWith('#') ? 2 : 4 : 1, url;
}
function stripPathFilename(path) {
    if (path.endsWith('/..')) return path;
    let index = path.lastIndexOf('/');
    return path.slice(0, index + 1);
}
function mergePaths(url, base) {
    normalizePath(base, base.type), '/' === url.path ? url.path = base.path : url.path = stripPathFilename(base.path) + url.path;
}
function normalizePath(url, type) {
    let rel = type <= 4, pieces = url.path.split('/'), pointer = 1, positive = 0, addTrailingSlash = !1;
    for(let i = 1; i < pieces.length; i++){
        let piece = pieces[i];
        if (!piece) {
            addTrailingSlash = !0;
            continue;
        }
        if (addTrailingSlash = !1, '.' !== piece) {
            if ('..' === piece) {
                positive ? (addTrailingSlash = !0, positive--, pointer--) : rel && (pieces[pointer++] = piece);
                continue;
            }
            pieces[pointer++] = piece, positive++;
        }
    }
    let path = '';
    for(let i = 1; i < pointer; i++)path += '/' + pieces[i];
    path && (!addTrailingSlash || path.endsWith('/..')) || (path += '/'), url.path = path;
}
function resolve_uri_resolve(input, base) {
    if (!input && !base) return '';
    let url = parseUrl(input), inputType = url.type;
    if (base && 7 !== inputType) {
        let baseUrl = parseUrl(base), baseType = baseUrl.type;
        switch(inputType){
            case 1:
                url.hash = baseUrl.hash;
            case 2:
                url.query = baseUrl.query;
            case 3:
            case 4:
                mergePaths(url, baseUrl);
            case 5:
                url.user = baseUrl.user, url.host = baseUrl.host, url.port = baseUrl.port;
            case 6:
                url.scheme = baseUrl.scheme;
        }
        baseType > inputType && (inputType = baseType);
    }
    normalizePath(url, inputType);
    let queryHash = url.query + url.hash;
    switch(inputType){
        case 2:
        case 3:
            return queryHash;
        case 4:
            {
                let path = url.path.slice(1);
                if (!path) return queryHash || '.';
                if (isRelative(base || input) && !isRelative(path)) return './' + path + queryHash;
                return path + queryHash;
            }
        case 5:
            return url.path + queryHash;
        default:
            return url.scheme + '//' + url.user + url.host + url.port + url.path + queryHash;
    }
}
function stripFilename(path) {
    if (!path) return "";
    let index = path.lastIndexOf("/");
    return path.slice(0, index + 1);
}
function resolver(mapUrl, sourceRoot) {
    let from = stripFilename(mapUrl), prefix = sourceRoot ? sourceRoot + "/" : "";
    return (source)=>resolve_uri_resolve(prefix + (source || ""), from);
}
function maybeSort(mappings, owned) {
    let unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
    if (unsortedIndex === mappings.length) return mappings;
    owned || (mappings = mappings.slice());
    for(let i = unsortedIndex; i < mappings.length; i = nextUnsortedSegmentLine(mappings, i + 1))mappings[i] = sortSegments(mappings[i], owned);
    return mappings;
}
function nextUnsortedSegmentLine(mappings, start) {
    for(let i = start; i < mappings.length; i++)if (!isSorted(mappings[i])) return i;
    return mappings.length;
}
function isSorted(line) {
    for(let j = 1; j < line.length; j++)if (line[j][0] < line[j - 1][0]) return !1;
    return !0;
}
function sortSegments(line, owned) {
    return owned || (line = line.slice()), line.sort(trace_mapping_sortComparator);
}
function trace_mapping_sortComparator(a, b) {
    return a[0] - b[0];
}
var found = !1;
function binarySearch(haystack, needle, low, high) {
    for(; low <= high;){
        let mid = low + (high - low >> 1), cmp = haystack[mid][0] - needle;
        if (0 === cmp) return found = !0, mid;
        cmp < 0 ? low = mid + 1 : high = mid - 1;
    }
    return found = !1, low - 1;
}
function upperBound(haystack, needle, index) {
    for(let i = index + 1; i < haystack.length && haystack[i][0] === needle; index = i++);
    return index;
}
function lowerBound(haystack, needle, index) {
    for(let i = index - 1; i >= 0 && haystack[i][0] === needle; index = i--);
    return index;
}
function memoizedState() {
    return {
        lastKey: -1,
        lastNeedle: -1,
        lastIndex: -1
    };
}
function memoizedBinarySearch(haystack, needle, state, key) {
    let { lastKey, lastNeedle, lastIndex } = state, low = 0, high = haystack.length - 1;
    if (key === lastKey) {
        if (needle === lastNeedle) return found = -1 !== lastIndex && haystack[lastIndex][0] === needle, lastIndex;
        needle >= lastNeedle ? low = -1 === lastIndex ? 0 : lastIndex : high = lastIndex;
    }
    return state.lastKey = key, state.lastNeedle = needle, state.lastIndex = binarySearch(haystack, needle, low, high);
}
function parse(map) {
    return "string" == typeof map ? JSON.parse(map) : map;
}
var TraceMap = class {
    constructor(map, mapUrl){
        let isString = "string" == typeof map;
        if (!isString && map._decodedMemo) return map;
        let parsed = parse(map), { version, file, names, sourceRoot, sources, sourcesContent } = parsed;
        this.version = version, this.file = file, this.names = names || [], this.sourceRoot = sourceRoot, this.sources = sources, this.sourcesContent = sourcesContent, this.ignoreList = parsed.ignoreList || parsed.x_google_ignoreList || void 0;
        let resolve = resolver(mapUrl, sourceRoot);
        this.resolvedSources = sources.map(resolve);
        let { mappings } = parsed;
        if ("string" == typeof mappings) this._encoded = mappings, this._decoded = void 0;
        else if (Array.isArray(mappings)) this._encoded = void 0, this._decoded = maybeSort(mappings, isString);
        else if (parsed.sections) throw Error("TraceMap passed sectioned source map, please use FlattenMap export instead");
        else throw Error(`invalid source map: ${JSON.stringify(parsed)}`);
        this._decodedMemo = memoizedState(), this._bySources = void 0, this._bySourceMemos = void 0;
    }
};
function decodedMappings(map) {
    return map._decoded || (map._decoded = decode(map._encoded));
}
function traceSegment(map, line, column) {
    let decoded = decodedMappings(map);
    if (line >= decoded.length) return null;
    let segments = decoded[line], index = traceSegmentInternal(segments, map._decodedMemo, line, column, 1);
    return -1 === index ? null : segments[index];
}
function originalPositionFor(map, needle) {
    let { line, column, bias } = needle;
    if (--line < 0) throw Error("`line` must be greater than 0 (lines start at line 1)");
    if (column < 0) throw Error("`column` must be greater than or equal to 0 (columns start at column 0)");
    let decoded = decodedMappings(map);
    if (line >= decoded.length) return OMapping(null, null, null, null);
    let segments = decoded[line], index = traceSegmentInternal(segments, map._decodedMemo, line, column, bias || 1);
    if (-1 === index) return OMapping(null, null, null, null);
    let segment = segments[index];
    if (1 === segment.length) return OMapping(null, null, null, null);
    let { names, resolvedSources } = map;
    return OMapping(resolvedSources[segment[1]], segment[2] + 1, segment[3], 5 === segment.length ? names[segment[4]] : null);
}
function OMapping(source, line, column, name) {
    return {
        source,
        line,
        column,
        name
    };
}
function traceSegmentInternal(segments, memo, line, column, bias) {
    let index = memoizedBinarySearch(segments, column, memo, line);
    return (found ? index = (-1 === bias ? upperBound : lowerBound)(segments, column, index) : -1 === bias && index++, -1 === index || index === segments.length) ? -1 : index;
}
export { TraceMap, decodedMappings, originalPositionFor, sourcemap_codec_encode, traceSegment };
