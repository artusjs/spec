import node_path from "node:path";
function isAbsolutePath(str) {
    return node_path.posix.isAbsolute(str) || node_path.win32.isAbsolute(str);
}
let PLUGIN_NAME = 'css-extract-rspack-plugin', RELATIVE_PATH_REGEXP = /^\.\.?[/\\]/, BASE_URI = 'rspack-css-extract://', MODULE_TYPE = 'css/mini-extract', AUTO_PUBLIC_PATH = '__css_extract_public_path_auto__', ABSOLUTE_PUBLIC_PATH = `${BASE_URI}/css-extract-plugin/`, SINGLE_DOT_PATH_SEGMENT = '__css_extract_single_dot_path_segment__';
function hotLoader(content, context) {
    let localsJsonString = JSON.stringify(JSON.stringify(context.locals));
    return `${content}
    if(module.hot) {
      (function() {
        var localsJsonString = ${localsJsonString};
        // ${Date.now()}
        var cssReload = require(${function(loaderContext, request) {
        if (void 0 !== loaderContext.utils && 'function' == typeof loaderContext.utils.contextify) return JSON.stringify(loaderContext.utils.contextify(loaderContext.context || loaderContext.rootContext, request));
        let splitted = request.split('!'), { context } = loaderContext;
        return JSON.stringify(splitted.map((part)=>{
            let splittedPart = part.match(/^(.*?)(\?.*)/), query = splittedPart ? splittedPart[2] : '', singlePath = splittedPart ? splittedPart[1] : part;
            if (isAbsolutePath(singlePath) && context) {
                var str;
                if (isAbsolutePath(singlePath = node_path.relative(context, singlePath))) return singlePath + query;
                str = singlePath, RELATIVE_PATH_REGEXP.test(str) || (singlePath = `./${singlePath}`);
            }
            return singlePath.replace(/\\/g, '/') + query;
        }).join('!'));
    }(context.loaderContext, node_path.join(import.meta.dirname, 'cssExtractHmr.js'))}).cssReload(module.id, ${JSON.stringify(context.options ?? {})});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  `;
}
let pitch = function(request, _, data) {
    let publicPathForExtract;
    if (this._module && ('css' === this._module.type || 'css/auto' === this._module.type || 'css/global' === this._module.type || 'css/module' === this._module.type)) {
        let e = Error("use type 'css' and `CssExtractRspackPlugin` together, please set `{ type: \"javascript/auto\" }` for rules with `CssExtractRspackPlugin` in your rspack config (now `CssExtractRspackPlugin` does nothing).");
        e.stack = void 0, this.emitWarning(e);
        return;
    }
    let options = this.getOptions(), emit = void 0 === options.emit || options.emit, callback = this.async(), filepath = this.resourcePath;
    this.addDependency(filepath);
    let { publicPath } = this._compilation.outputOptions;
    'string' == typeof options.publicPath ? publicPath = options.publicPath : 'function' == typeof options.publicPath && (publicPath = options.publicPath(this.resourcePath, this.rootContext)), 'auto' === publicPath && (publicPath = AUTO_PUBLIC_PATH), publicPathForExtract = 'string' == typeof publicPath ? /^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(publicPath) ? publicPath : `${ABSOLUTE_PUBLIC_PATH}${publicPath.replace(/\./g, SINGLE_DOT_PATH_SEGMENT)}` : publicPath;
    let handleExports = (originalExports)=>{
        let locals, namedExport, esModule = void 0 === options.esModule || options.esModule, dependencies = [];
        try {
            let exports = originalExports.__esModule ? originalExports.default : originalExports;
            if (namedExport = originalExports.__esModule && (!originalExports.default || !('locals' in originalExports.default))) for (let key of Object.keys(originalExports))'default' !== key && (locals || (locals = {}), locals[key] = originalExports[key]);
            else locals = exports?.locals;
            if (Array.isArray(exports) && emit) {
                let identifierCountMap = new Map();
                dependencies = exports.map(([id, content, media, sourceMap, supports, layer])=>{
                    let context = this.rootContext, count = identifierCountMap.get(id) || 0;
                    return identifierCountMap.set(id, count + 1), {
                        identifier: id,
                        context,
                        content,
                        media,
                        supports,
                        layer,
                        identifierIndex: count,
                        sourceMap: sourceMap ? JSON.stringify(sourceMap) : void 0,
                        filepath
                    };
                }).filter((item)=>null !== item);
            }
        } catch (e) {
            callback(e);
            return;
        }
        let result = function() {
            if (locals) {
                if (namedExport) {
                    let identifiers = Array.from(function*() {
                        let identifierId = 0;
                        for (let key of Object.keys(locals))identifierId += 1, yield [
                            `_${identifierId.toString(16)}`,
                            key
                        ];
                    }()), localsString = identifiers.map(([id, key])=>{
                        var value;
                        return `\nvar ${id} = ${'function' == typeof (value = locals[key]) ? value.toString() : JSON.stringify(value)};`;
                    }).join(''), exportsString = `export { ${identifiers.map(([id, key])=>`${id} as ${JSON.stringify(key)}`).join(', ')} }`;
                    return void 0 !== options.defaultExport && options.defaultExport ? `${localsString}\n${exportsString}\nexport default { ${identifiers.map(([id, key])=>`${JSON.stringify(key)}: ${id}`).join(', ')} }\n` : `${localsString}\n${exportsString}\n`;
                }
                return `\n${esModule ? 'export default' : 'module.exports = '} ${JSON.stringify(locals)};`;
            }
            return esModule ? '\nexport {};' : '';
        }(), resultSource = `// extracted by ${PLUGIN_NAME}`;
        resultSource += this.hot && emit ? hotLoader(result, {
            loaderContext: this,
            options,
            locals: locals
        }) : result, dependencies.length > 0 && this.__internal__setParseMeta(PLUGIN_NAME, JSON.stringify(dependencies)), callback(null, resultSource, void 0, data);
    };
    this.importModule(`${this.resourcePath}.rspack[javascript/auto]!=!!!${request}`, {
        layer: options.layer,
        publicPath: publicPathForExtract,
        baseUri: `${BASE_URI}/`
    }, (error, exports)=>{
        error ? callback(error) : handleExports(exports);
    });
};
export default function(content) {
    if (this._module && ('css' === this._module.type || 'css/auto' === this._module.type || 'css/global' === this._module.type || 'css/module' === this._module.type)) return content;
};
export { ABSOLUTE_PUBLIC_PATH, AUTO_PUBLIC_PATH, BASE_URI, MODULE_TYPE, SINGLE_DOT_PATH_SEGMENT, hotLoader, pitch };
