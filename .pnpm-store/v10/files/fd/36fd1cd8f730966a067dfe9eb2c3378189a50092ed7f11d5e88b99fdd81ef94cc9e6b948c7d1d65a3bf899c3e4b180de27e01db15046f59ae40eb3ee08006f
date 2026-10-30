import { join, normalize, resolve, sep } from "node:path";
import { join as external_path_join, resolve as external_path_resolve } from "path";
import { readdirSync, statSync } from "fs";
import { lookup as mrmime_lookup } from "./mrmime.js";
import * as __rspack_external_node_fs_5ea92f0c from "node:fs";
import * as __rspack_external_node_querystring_aeb3c0b4 from "node:querystring";
function totalist(dir, callback, pre = '') {
    let arr = readdirSync(dir = external_path_resolve('.', dir)), i = 0, abs, stats;
    for(; i < arr.length; i++)(stats = statSync(abs = external_path_join(dir, arr[i]))).isDirectory() ? totalist(abs, callback, external_path_join(pre, arr[i])) : callback(external_path_join(pre, arr[i]), abs, stats);
}
function parse(req) {
    let raw = req.url;
    if (null == raw) return;
    let prev = req._parsedUrl;
    if (prev && prev.raw === raw) return prev;
    let pathname = raw, search = '', query, hash;
    if (raw.length > 1) {
        let idx = raw.indexOf('#', 1);
        -1 !== idx && (hash = raw.substring(idx), pathname = raw.substring(0, idx)), -1 !== (idx = pathname.indexOf('?', 1)) && (search = pathname.substring(idx), pathname = pathname.substring(0, idx), search.length > 1 && (query = __rspack_external_node_querystring_aeb3c0b4.parse(search.substring(1))));
    }
    return req._parsedUrl = {
        pathname,
        search,
        query,
        hash,
        raw
    };
}
let noop = ()=>{};
function isMatch(uri, arr) {
    for(let i = 0; i < arr.length; i++)if (arr[i].test(uri)) return !0;
}
function toAssume(uri, extns) {
    let i = 0, x, len = uri.length - 1;
    47 === uri.charCodeAt(len) && (uri = uri.substring(0, len));
    let arr = [], tmp = `${uri}/index`;
    for(; i < extns.length; i++)x = extns[i] ? `.${extns[i]}` : '', uri && arr.push(uri + x), arr.push(tmp + x);
    return arr;
}
function viaCache(cache, uri, extns) {
    let i = 0, data, arr = toAssume(uri, extns);
    for(; i < arr.length; i++)if (data = cache[arr[i]]) return data;
}
function viaLocal(dir, isEtag, uri, extns) {
    let abs, stats, name, headers, i = 0, arr = toAssume(uri, extns);
    for(; i < arr.length; i++)if ((abs = normalize(join(dir, name = arr[i]))).startsWith(dir) && __rspack_external_node_fs_5ea92f0c.existsSync(abs)) {
        if ((stats = __rspack_external_node_fs_5ea92f0c.statSync(abs)).isDirectory()) continue;
        return (headers = toHeaders(name, stats, isEtag))['Cache-Control'] = isEtag ? 'no-cache' : 'no-store', {
            abs,
            stats,
            headers
        };
    }
}
function is404(req, res) {
    return res.statusCode = 404, res.end();
}
function send(req, res, file, stats, headers) {
    let code = 200, tmp, opts = {};
    for(let key in headers = {
        ...headers
    })(tmp = res.getHeader(key)) && (headers[key] = tmp);
    if ((tmp = res.getHeader('content-type')) && (headers['Content-Type'] = tmp), req.headers.range) {
        code = 206;
        let [x, y] = req.headers.range.replace('bytes=', '').split('-'), end = opts.end = parseInt(y, 10) || stats.size - 1, start = opts.start = parseInt(x, 10) || 0;
        if (end >= stats.size && (end = stats.size - 1), start >= stats.size) return res.setHeader('Content-Range', `bytes */${stats.size}`), res.statusCode = 416, res.end();
        headers['Content-Range'] = `bytes ${start}-${end}/${stats.size}`, headers['Content-Length'] = end - start + 1, headers['Accept-Ranges'] = 'bytes';
    }
    res.writeHead(code, headers), __rspack_external_node_fs_5ea92f0c.createReadStream(file, opts).pipe(res);
}
let ENCODING = {
    '.br': 'br',
    '.gz': 'gzip'
};
function toHeaders(name, stats, isEtag) {
    let enc = ENCODING[name.slice(-3)], ctype = mrmime_lookup(name.slice(0, enc && -3)) || '';
    'text/html' === ctype && (ctype += ';charset=utf-8');
    let headers = {
        'Content-Length': stats.size,
        'Content-Type': ctype,
        'Last-Modified': stats.mtime.toUTCString()
    };
    return enc && (headers['Content-Encoding'] = enc), isEtag && (headers.ETag = `W/"${stats.size}-${stats.mtime.getTime()}"`), headers;
}
function build(dir, opts = {}) {
    dir = resolve(dir || '.');
    let isNotFound = opts.onNoMatch || is404, setHeaders = opts.setHeaders || noop, extensions = opts.extensions || [
        'html',
        'htm'
    ], gzips = opts.gzip && extensions.map((x)=>`${x}.gz`).concat('gz'), brots = opts.brotli && extensions.map((x)=>`${x}.br`).concat('br'), FILES = {}, fallback = '/', isEtag = !!opts.etag, isSPA = !!opts.single;
    if ('string' == typeof opts.single) {
        let idx = opts.single.lastIndexOf('.');
        fallback += ~idx ? opts.single.substring(0, idx) : opts.single;
    }
    let ignores = [];
    !1 !== opts.ignores && (ignores.push(/[/]([A-Za-z\s\d~$._-]+\.\w+){1,}$/), opts.dotfiles ? ignores.push(/\/\.\w/) : ignores.push(/\/\.well-known/), [].concat(opts.ignores || []).forEach((x)=>{
        ignores.push(RegExp(x, 'i'));
    }));
    let cc = null != opts.maxAge && `public,max-age=${opts.maxAge}`;
    cc && opts.immutable ? cc += ',immutable' : cc && 0 === opts.maxAge && (cc += ',must-revalidate'), opts.dev || totalist(dir, (name, abs, stats)=>{
        if (/\.well-known[\\+\/]/.test(name)) ;
        else if (!opts.dotfiles && /(^\.|[\\+|\/+]\.)/.test(name)) return;
        let headers = toHeaders(name, stats, isEtag);
        cc && (headers['Cache-Control'] = cc), FILES['/' + name.normalize().replace(/\\+/g, '/')] = {
            abs,
            stats,
            headers
        };
    });
    let lookup = opts.dev ? viaLocal.bind(0, dir + sep, isEtag) : viaCache.bind(0, FILES);
    return function(req, res, next) {
        let extns = [
            ''
        ], pathname = parse(req).pathname, val = req.headers['accept-encoding'] || '';
        if (gzips && val.includes('gzip') && extns.unshift(...gzips), brots && /(br|brotli)/i.test(val) && extns.unshift(...brots), extns.push(...extensions), -1 !== pathname.indexOf('%')) try {
            pathname = decodeURI(pathname);
        } catch (err) {}
        let data = lookup(pathname, extns) || isSPA && !isMatch(pathname, ignores) && lookup(fallback, extns);
        return data ? isEtag && req.headers['if-none-match'] === data.headers.ETag ? (res.writeHead(304), res.end()) : void ((gzips || brots) && res.setHeader('Vary', 'Accept-Encoding'), setHeaders(res, pathname, data.stats), send(req, res, data.abs, data.stats, data.headers)) : next ? next() : isNotFound(req, res);
    };
}
export default build;
