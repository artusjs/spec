/*! LICENSE: cors.js.LICENSE.txt */
import { __webpack_require__ } from "./1~rslib-runtime.js";
__webpack_require__.add({
    "../../node_modules/.pnpm/cors@2.8.6/node_modules/cors/lib/index.js" (module, __unused_rspack_exports, __webpack_require__) {
        !function() {
            'use strict';
            var assign = __webpack_require__("../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"), vary = __webpack_require__("../../node_modules/.pnpm/vary@1.1.2/node_modules/vary/index.js"), defaults = {
                origin: '*',
                methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
                preflightContinue: !1,
                optionsSuccessStatus: 204
            };
            function isString(s) {
                return 'string' == typeof s || s instanceof String;
            }
            function isOriginAllowed(origin, allowedOrigin) {
                if (Array.isArray(allowedOrigin)) {
                    for(var i = 0; i < allowedOrigin.length; ++i)if (isOriginAllowed(origin, allowedOrigin[i])) return !0;
                    return !1;
                }
                return isString(allowedOrigin) ? origin === allowedOrigin : allowedOrigin instanceof RegExp ? allowedOrigin.test(origin) : !!allowedOrigin;
            }
            function configureOrigin(options, req) {
                var requestOrigin = req.headers.origin, headers = [];
                return options.origin && '*' !== options.origin ? (isString(options.origin) ? headers.push([
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: options.origin
                    }
                ]) : headers.push([
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: !!isOriginAllowed(requestOrigin, options.origin) && requestOrigin
                    }
                ]), headers.push([
                    {
                        key: 'Vary',
                        value: 'Origin'
                    }
                ])) : headers.push([
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*'
                    }
                ]), headers;
            }
            function configureMethods(options) {
                var methods = options.methods;
                return methods.join && (methods = options.methods.join(',')), {
                    key: 'Access-Control-Allow-Methods',
                    value: methods
                };
            }
            function configureCredentials(options) {
                return !0 === options.credentials ? {
                    key: 'Access-Control-Allow-Credentials',
                    value: 'true'
                } : null;
            }
            function configureAllowedHeaders(options, req) {
                var allowedHeaders = options.allowedHeaders || options.headers, headers = [];
                return allowedHeaders ? allowedHeaders.join && (allowedHeaders = allowedHeaders.join(',')) : (allowedHeaders = req.headers['access-control-request-headers'], headers.push([
                    {
                        key: 'Vary',
                        value: 'Access-Control-Request-Headers'
                    }
                ])), allowedHeaders && allowedHeaders.length && headers.push([
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: allowedHeaders
                    }
                ]), headers;
            }
            function configureExposedHeaders(options) {
                var headers = options.exposedHeaders;
                return headers && (headers.join && (headers = headers.join(',')), headers && headers.length) ? {
                    key: 'Access-Control-Expose-Headers',
                    value: headers
                } : null;
            }
            function configureMaxAge(options) {
                var maxAge = ('number' == typeof options.maxAge || options.maxAge) && options.maxAge.toString();
                return maxAge && maxAge.length ? {
                    key: 'Access-Control-Max-Age',
                    value: maxAge
                } : null;
            }
            function applyHeaders(headers, res) {
                for(var i = 0, n = headers.length; i < n; i++){
                    var header = headers[i];
                    header && (Array.isArray(header) ? applyHeaders(header, res) : 'Vary' === header.key && header.value ? vary(res, header.value) : header.value && res.setHeader(header.key, header.value));
                }
            }
            function cors(options, req, res, next) {
                var headers = [];
                'OPTIONS' === (req.method && req.method.toUpperCase && req.method.toUpperCase()) ? (headers.push(configureOrigin(options, req)), headers.push(configureCredentials(options)), headers.push(configureMethods(options)), headers.push(configureAllowedHeaders(options, req)), headers.push(configureMaxAge(options)), headers.push(configureExposedHeaders(options)), applyHeaders(headers, res), options.preflightContinue ? next() : (res.statusCode = options.optionsSuccessStatus, res.setHeader('Content-Length', '0'), res.end())) : (headers.push(configureOrigin(options, req)), headers.push(configureCredentials(options)), headers.push(configureExposedHeaders(options)), applyHeaders(headers, res), next());
            }
            module.exports = function middlewareWrapper(o) {
                var optionsCallback = null;
                return optionsCallback = 'function' == typeof o ? o : function(req, cb) {
                    cb(null, o);
                }, function corsMiddleware(req, res, next) {
                    optionsCallback(req, function(err, options) {
                        if (err) next(err);
                        else {
                            var corsOptions = assign({}, defaults, options), originCallback = null;
                            corsOptions.origin && 'function' == typeof corsOptions.origin ? originCallback = corsOptions.origin : corsOptions.origin && (originCallback = function(origin, cb) {
                                cb(null, corsOptions.origin);
                            }), originCallback ? originCallback(req.headers.origin, function(err2, origin) {
                                err2 || !origin ? next(err2) : (corsOptions.origin = origin, cors(corsOptions, req, res, next));
                            }) : next();
                        }
                    });
                };
            };
        }();
    },
    "../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js" (module) {
        var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
        function toObject(val) {
            if (null == val) throw TypeError('Object.assign cannot be called with null or undefined');
            return Object(val);
        }
        module.exports = !function shouldUseNative() {
            try {
                if (!Object.assign) return !1;
                var test1 = new String('abc');
                if (test1[5] = 'de', '5' === Object.getOwnPropertyNames(test1)[0]) return !1;
                for(var test2 = {}, i = 0; i < 10; i++)test2['_' + String.fromCharCode(i)] = i;
                var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                    return test2[n];
                });
                if ('0123456789' !== order2.join('')) return !1;
                var test3 = {};
                if ('abcdefghijklmnopqrst'.split('').forEach(function(letter) {
                    test3[letter] = letter;
                }), 'abcdefghijklmnopqrst' !== Object.keys(Object.assign({}, test3)).join('')) return !1;
                return !0;
            } catch (err) {
                return !1;
            }
        }() ? function(target, source) {
            for(var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++){
                for(var key in from = Object(arguments[s]))hasOwnProperty.call(from, key) && (to[key] = from[key]);
                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for(var i = 0; i < symbols.length; i++)propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
                }
            }
            return to;
        } : Object.assign;
    },
    "../../node_modules/.pnpm/vary@1.1.2/node_modules/vary/index.js" (module) {
        module.exports = vary, module.exports.append = append;
        var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
        function append(header, field) {
            if ('string' != typeof header) throw TypeError('header argument is required');
            if (!field) throw TypeError('field argument is required');
            for(var fields = Array.isArray(field) ? field : parse(String(field)), j = 0; j < fields.length; j++)if (!FIELD_NAME_REGEXP.test(fields[j])) throw TypeError('field argument contains an invalid header name');
            if ('*' === header) return header;
            var val = header, vals = parse(header.toLowerCase());
            if (-1 !== fields.indexOf('*') || -1 !== vals.indexOf('*')) return '*';
            for(var i = 0; i < fields.length; i++){
                var fld = fields[i].toLowerCase();
                -1 === vals.indexOf(fld) && (vals.push(fld), val = val ? val + ', ' + fields[i] : fields[i]);
            }
            return val;
        }
        function parse(header) {
            for(var end = 0, list = [], start = 0, i = 0, len = header.length; i < len; i++)switch(header.charCodeAt(i)){
                case 0x20:
                    start === end && (start = end = i + 1);
                    break;
                case 0x2c:
                    list.push(header.substring(start, end)), start = end = i + 1;
                    break;
                default:
                    end = i + 1;
            }
            return list.push(header.substring(start, end)), list;
        }
        function vary(res, field) {
            if (!res || !res.getHeader || !res.setHeader) throw TypeError('res argument is required');
            var val = res.getHeader('Vary') || '';
            (val = append(Array.isArray(val) ? val.join(', ') : String(val), field)) && res.setHeader('Vary', val);
        }
    }
}), __webpack_require__("../../node_modules/.pnpm/cors@2.8.6/node_modules/cors/lib/index.js");
