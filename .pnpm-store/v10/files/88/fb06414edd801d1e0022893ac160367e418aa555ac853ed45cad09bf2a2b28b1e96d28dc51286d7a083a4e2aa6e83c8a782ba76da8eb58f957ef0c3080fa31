(() => {
  "use strict";
  var __webpack_modules__ = {
    715: (module, __unused_webpack_exports, __nccwpck_require__) => {
      const loader = __nccwpck_require__(709);
      module.exports = loader.default;
    },
    709: (__unused_webpack_module, exports, __nccwpck_require__) => {
      Object.defineProperty(exports, "__esModule", { value: true });
      exports["default"] = void 0;
      var _path = _interopRequireDefault(__nccwpck_require__(928));
      var _utils = __nccwpck_require__(736);
      var _options = _interopRequireDefault(__nccwpck_require__(119));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      const loader = function loader(content) {
        if (
          this._compiler &&
          this._compiler.options &&
          this._compiler.options.experiments &&
          this._compiler.options.experiments.css &&
          this._module &&
          (this._module.type === "css" ||
            this._module.type === "css/global" ||
            this._module.type === "css/module" ||
            this._module.type === "css/auto")
        ) {
          return content;
        }
      };
      loader.pitch = function pitch(request) {
        if (
          this._compiler &&
          this._compiler.options &&
          this._compiler.options.experiments &&
          this._compiler.options.experiments.css &&
          this._module &&
          (this._module.type === "css" ||
            this._module.type === "css/global" ||
            this._module.type === "css/module" ||
            this._module.type === "css/auto")
        ) {
          this.emitWarning(
            new Error(
              'You can\'t use `experiments.css` (`experiments.futureDefaults` enable built-in CSS support by default) and `style-loader` together, please set `experiments.css` to `false` or set `{ type: "javascript/auto" }` for rules with `style-loader` in your webpack config (now `style-loader` does nothing).',
            ),
          );
          return;
        }
        const options = this.getOptions(_options.default);
        const injectType = options.injectType || "styleTag";
        const esModule =
          typeof options.esModule !== "undefined" ? options.esModule : true;
        const runtimeOptions = {};
        if (options.attributes) {
          runtimeOptions.attributes = options.attributes;
        }
        if (options.base) {
          runtimeOptions.base = options.base;
        }
        const insertType =
          options.insert && _path.default.isAbsolute(options.insert)
            ? "module-path"
            : "selector";
        switch (injectType) {
          case "linkTag": {
            const hmrCode = this.hot
              ? (0, _utils.getLinkHmrCode)(esModule, this, request)
              : "";
            return `\n      ${(0, _utils.getImportLinkAPICode)(esModule, this)}\n      ${(0, _utils.getImportInsertBySelectorCode)(esModule, this, insertType, options)}\n      ${(0, _utils.getImportLinkContentCode)(esModule, this, request)}\n      ${esModule ? "" : `content = content.__esModule ? content.default : content;`}\n\nvar options = ${JSON.stringify(runtimeOptions)};\n\n${(0, _utils.getInsertOptionCode)(insertType, options)}\n\nvar update = API(content, options);\n\n${hmrCode}\n\n${esModule ? "export default {}" : ""}`;
          }
          case "lazyStyleTag":
          case "lazyAutoStyleTag":
          case "lazySingletonStyleTag": {
            const isSingleton = injectType === "lazySingletonStyleTag";
            const isAuto = injectType === "lazyAutoStyleTag";
            const hmrCode = this.hot
              ? (0, _utils.getStyleHmrCode)(esModule, this, request, true)
              : "";
            return `\n      var exported = {};\n\n      ${(0, _utils.getImportStyleAPICode)(esModule, this)}\n      ${(0, _utils.getImportStyleDomAPICode)(esModule, this, isSingleton, isAuto)}\n      ${(0, _utils.getImportInsertBySelectorCode)(esModule, this, insertType, options)}\n      ${(0, _utils.getSetAttributesCode)(esModule, this, options)}\n      ${(0, _utils.getImportInsertStyleElementCode)(esModule, this)}\n      ${(0, _utils.getStyleTagTransformFnCode)(esModule, this, options, isSingleton)}\n      ${(0, _utils.getImportStyleContentCode)(esModule, this, request)}\n      ${isAuto ? (0, _utils.getImportIsOldIECode)(esModule, this) : ""}\n      ${esModule ? `if (content && content.locals) {\n              exported.locals = content.locals;\n            }\n            ` : `content = content.__esModule ? content.default : content;\n\n            exported.locals = content.locals || {};`}\n\nvar refs = 0;\nvar update;\nvar options = ${JSON.stringify(runtimeOptions)};\n\n${(0, _utils.getStyleTagTransformFn)(options, isSingleton)};\noptions.setAttributes = setAttributes;\n${(0, _utils.getInsertOptionCode)(insertType, options)}\noptions.domAPI = ${(0, _utils.getdomAPI)(isAuto)};\noptions.insertStyleElement = insertStyleElement;\n\nexported.use = function(insertOptions) {\n  options.options = insertOptions || {};\n\n  if (!(refs++)) {\n    update = API(content, options);\n  }\n\n  return exported;\n};\nexported.unuse = function() {\n  if (refs > 0 && !--refs) {\n    update();\n    update = null;\n  }\n};\n\n${hmrCode}\n\n${(0, _utils.getExportLazyStyleCode)(esModule, this, request)}\n`;
          }
          case "styleTag":
          case "autoStyleTag":
          case "singletonStyleTag":
          default: {
            const isSingleton = injectType === "singletonStyleTag";
            const isAuto = injectType === "autoStyleTag";
            const hmrCode = this.hot
              ? (0, _utils.getStyleHmrCode)(esModule, this, request, false)
              : "";
            return `\n      ${(0, _utils.getImportStyleAPICode)(esModule, this)}\n      ${(0, _utils.getImportStyleDomAPICode)(esModule, this, isSingleton, isAuto)}\n      ${(0, _utils.getImportInsertBySelectorCode)(esModule, this, insertType, options)}\n      ${(0, _utils.getSetAttributesCode)(esModule, this, options)}\n      ${(0, _utils.getImportInsertStyleElementCode)(esModule, this)}\n      ${(0, _utils.getStyleTagTransformFnCode)(esModule, this, options, isSingleton)}\n      ${(0, _utils.getImportStyleContentCode)(esModule, this, request)}\n      ${isAuto ? (0, _utils.getImportIsOldIECode)(esModule, this) : ""}\n      ${esModule ? "" : `content = content.__esModule ? content.default : content;`}\n\nvar options = ${JSON.stringify(runtimeOptions)};\n\n${(0, _utils.getStyleTagTransformFn)(options, isSingleton)};\noptions.setAttributes = setAttributes;\n${(0, _utils.getInsertOptionCode)(insertType, options)}\noptions.domAPI = ${(0, _utils.getdomAPI)(isAuto)};\noptions.insertStyleElement = insertStyleElement;\n\nvar update = API(content, options);\n\n${hmrCode}\n\n${(0, _utils.getExportStyleCode)(esModule, this, request)}\n`;
          }
        }
      };
      var _default = (exports["default"] = loader);
    },
    962: (module) => {
      function isEqualLocals(a, b, isNamedExport) {
        if ((!a && b) || (a && !b)) {
          return false;
        }
        var p;
        for (p in a) {
          if (isNamedExport && p === "default") {
            continue;
          }
          if (a[p] !== b[p]) {
            return false;
          }
        }
        for (p in b) {
          if (isNamedExport && p === "default") {
            continue;
          }
          if (!a[p]) {
            return false;
          }
        }
        return true;
      }
      module.exports = isEqualLocals;
    },
    736: (__unused_webpack_module, exports, __nccwpck_require__) => {
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getExportLazyStyleCode = getExportLazyStyleCode;
      exports.getExportStyleCode = getExportStyleCode;
      exports.getImportInsertBySelectorCode = getImportInsertBySelectorCode;
      exports.getImportInsertStyleElementCode = getImportInsertStyleElementCode;
      exports.getImportIsOldIECode = getImportIsOldIECode;
      exports.getImportLinkAPICode = getImportLinkAPICode;
      exports.getImportLinkContentCode = getImportLinkContentCode;
      exports.getImportStyleAPICode = getImportStyleAPICode;
      exports.getImportStyleContentCode = getImportStyleContentCode;
      exports.getImportStyleDomAPICode = getImportStyleDomAPICode;
      exports.getInsertOptionCode = getInsertOptionCode;
      exports.getLinkHmrCode = getLinkHmrCode;
      exports.getSetAttributesCode = getSetAttributesCode;
      exports.getStyleHmrCode = getStyleHmrCode;
      exports.getStyleTagTransformFn = getStyleTagTransformFn;
      exports.getStyleTagTransformFnCode = getStyleTagTransformFnCode;
      exports.getdomAPI = getdomAPI;
      exports.stringifyRequest = stringifyRequest;
      var _path = _interopRequireDefault(__nccwpck_require__(928));
      var _isEqualLocals = _interopRequireDefault(__nccwpck_require__(962));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function stringifyRequest(loaderContext, request) {
        return JSON.stringify(
          loaderContext.utils.contextify(loaderContext.context, request),
        );
      }
      function getImportLinkAPICode(esModule, loaderContext) {
        const modulePath = stringifyRequest(
          loaderContext,
          `!${_path.default.join(__dirname, "runtime/injectStylesIntoLinkTag.js")}`,
        );
        return esModule
          ? `import API from ${modulePath};`
          : `var API = require(${modulePath});`;
      }
      function getImportLinkContentCode(esModule, loaderContext, request) {
        const modulePath = stringifyRequest(loaderContext, `!!${request}`);
        return esModule
          ? `import content from ${modulePath};`
          : `var content = require(${modulePath});`;
      }
      function getImportStyleAPICode(esModule, loaderContext) {
        const modulePath = stringifyRequest(
          loaderContext,
          `!${_path.default.join(__dirname, "runtime/injectStylesIntoStyleTag.js")}`,
        );
        return esModule
          ? `import API from ${modulePath};`
          : `var API = require(${modulePath});`;
      }
      function getImportStyleDomAPICode(
        esModule,
        loaderContext,
        isSingleton,
        isAuto,
      ) {
        const styleAPI = stringifyRequest(
          loaderContext,
          `!${_path.default.join(__dirname, "runtime/styleDomAPI.js")}`,
        );
        const singletonAPI = stringifyRequest(
          loaderContext,
          `!${_path.default.join(__dirname, "runtime/singletonStyleDomAPI.js")}`,
        );
        if (isAuto) {
          return esModule
            ? `import domAPI from ${styleAPI};\n        import domAPISingleton from ${singletonAPI};`
            : `var domAPI = require(${styleAPI});\n        var domAPISingleton = require(${singletonAPI});`;
        }
        return esModule
          ? `import domAPI from ${isSingleton ? singletonAPI : styleAPI};`
          : `var domAPI = require(${isSingleton ? singletonAPI : styleAPI});`;
      }
      function getImportStyleContentCode(esModule, loaderContext, request) {
        const modulePath = stringifyRequest(loaderContext, `!!${request}`);
        return esModule
          ? `import content, * as namedExport from ${modulePath};`
          : `var content = require(${modulePath});`;
      }
      function getImportInsertBySelectorCode(
        esModule,
        loaderContext,
        insertType,
        options,
      ) {
        if (insertType === "module-path") {
          const modulePath = stringifyRequest(
            loaderContext,
            `${options.insert}`,
          );
          loaderContext.addBuildDependency(options.insert);
          return esModule
            ? `import insertFn from ${modulePath};`
            : `var insertFn = require(${modulePath});`;
        }
        const modulePath = stringifyRequest(
          loaderContext,
          `!${_path.default.join(__dirname, "runtime/insertBySelector.js")}`,
        );
        return esModule
          ? `import insertFn from ${modulePath};`
          : `var insertFn = require(${modulePath});`;
      }
      function getInsertOptionCode(insertType, options) {
        if (insertType === "module-path") {
          return `options.insert = insertFn;`;
        }
        const insert = options.insert
          ? JSON.stringify(options.insert)
          : '"head"';
        return `options.insert = insertFn.bind(null, ${insert});`;
      }
      function getImportInsertStyleElementCode(esModule, loaderContext) {
        const modulePath = stringifyRequest(
          loaderContext,
          `!${_path.default.join(__dirname, "runtime/insertStyleElement.js")}`,
        );
        return esModule
          ? `import insertStyleElement from ${modulePath};`
          : `var insertStyleElement = require(${modulePath});`;
      }
      function getStyleHmrCode(esModule, loaderContext, request, lazy) {
        const modulePath = stringifyRequest(loaderContext, `!!${request}`);
        return `\nif (module.hot) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = ${_isEqualLocals.default.toString()};\n    var isNamedExport = ${esModule ? "!content.locals" : false};\n    var oldLocals = isNamedExport ? namedExport : content.locals;\n\n    module.hot.accept(\n      ${modulePath},\n      function () {\n        ${esModule ? `if (!isEqualLocals(oldLocals, isNamedExport ? namedExport : content.locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? namedExport : content.locals;\n\n              ${lazy ? `if (update && refs > 0) {\n                      update(content);\n                    }` : `update(content);`}` : `content = require(${modulePath});\n\n              content = content.__esModule ? content.default : content;\n\n              ${lazy ? "" : `if (typeof content === 'string') {\n                      content = [[module.id, content, '']];\n                    }`}\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              ${lazy ? `if (update && refs > 0) {\n                        update(content);\n                      }` : `update(content);`}`}\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    ${lazy ? `if (update) {\n            update();\n          }` : `update();`}\n  });\n}\n`;
      }
      function getLinkHmrCode(esModule, loaderContext, request) {
        const modulePath = stringifyRequest(loaderContext, `!!${request}`);
        return `\nif (module.hot) {\n  module.hot.accept(\n    ${modulePath},\n    function() {\n     ${esModule ? "update(content);" : `content = require(${modulePath});\n\n           content = content.__esModule ? content.default : content;\n\n           update(content);`}\n    }\n  );\n\n  module.hot.dispose(function() {\n    update();\n  });\n}`;
      }
      function getdomAPI(isAuto) {
        return isAuto ? "isOldIE() ? domAPISingleton : domAPI" : "domAPI";
      }
      function getImportIsOldIECode(esModule, loaderContext) {
        const modulePath = stringifyRequest(
          loaderContext,
          `!${_path.default.join(__dirname, "runtime/isOldIE.js")}`,
        );
        return esModule
          ? `import isOldIE from ${modulePath};`
          : `var isOldIE = require(${modulePath});`;
      }
      function getStyleTagTransformFnCode(
        esModule,
        loaderContext,
        options,
        isSingleton,
      ) {
        if (isSingleton) {
          return "";
        }
        if (typeof options.styleTagTransform !== "undefined") {
          const modulePath = stringifyRequest(
            loaderContext,
            `${options.styleTagTransform}`,
          );
          loaderContext.addBuildDependency(options.styleTagTransform);
          return esModule
            ? `import styleTagTransformFn from ${modulePath};`
            : `var styleTagTransformFn = require(${modulePath});`;
        }
        const modulePath = stringifyRequest(
          loaderContext,
          `!${_path.default.join(__dirname, "runtime/styleTagTransform.js")}`,
        );
        return esModule
          ? `import styleTagTransformFn from ${modulePath};`
          : `var styleTagTransformFn = require(${modulePath});`;
      }
      function getStyleTagTransformFn(options, isSingleton) {
        return isSingleton
          ? ""
          : `options.styleTagTransform = styleTagTransformFn`;
      }
      function getExportStyleCode(esModule, loaderContext, request) {
        const modulePath = stringifyRequest(loaderContext, `!!${request}`);
        return esModule
          ? `export * from ${modulePath};\n       export default content && content.locals ? content.locals : undefined;`
          : "module.exports = content && content.locals || {};";
      }
      function getExportLazyStyleCode(esModule, loaderContext, request) {
        const modulePath = stringifyRequest(loaderContext, `!!${request}`);
        return esModule
          ? `export * from ${modulePath};\n       export default exported;`
          : "module.exports = exported;";
      }
      function getSetAttributesCode(esModule, loaderContext, options) {
        let modulePath;
        if (typeof options.attributes !== "undefined") {
          modulePath =
            options.attributes.nonce !== "undefined"
              ? stringifyRequest(
                  loaderContext,
                  `!${_path.default.join(__dirname, "runtime/setAttributesWithAttributesAndNonce.js")}`,
                )
              : stringifyRequest(
                  loaderContext,
                  `!${_path.default.join(__dirname, "runtime/setAttributesWithAttributes.js")}`,
                );
        } else {
          modulePath = stringifyRequest(
            loaderContext,
            `!${_path.default.join(__dirname, "runtime/setAttributesWithoutAttributes.js")}`,
          );
        }
        return esModule
          ? `import setAttributes from ${modulePath};`
          : `var setAttributes = require(${modulePath});`;
      }
    },
    928: (module) => {
      module.exports = require("path");
    },
    119: (module) => {
      module.exports = JSON.parse(
        '{"title":"Style Loader options","type":"object","properties":{"injectType":{"description":"Allows to setup how styles will be injected into DOM.","link":"https://github.com/webpack-contrib/style-loader#injecttype","enum":["styleTag","singletonStyleTag","autoStyleTag","lazyStyleTag","lazySingletonStyleTag","lazyAutoStyleTag","linkTag"]},"attributes":{"description":"Adds custom attributes to tag.","link":"https://github.com/webpack-contrib/style-loader#attributes","type":"object"},"insert":{"description":"Inserts `<style>`/`<link>` at the given position.","link":"https://github.com/webpack-contrib/style-loader#insert","type":"string"},"base":{"description":"Sets module ID base for DLLPlugin.","link":"https://github.com/webpack-contrib/style-loader#base","type":"number"},"esModule":{"description":"Use the ES modules syntax.","link":"https://github.com/webpack-contrib/css-loader#esmodule","type":"boolean"},"styleTagTransform":{"description":"Transform tag and css when insert \'style\' tag into the DOM","link":"https://github.com/webpack-contrib/style-loader#styleTagTransform","type":"string"}},"additionalProperties":false}',
      );
    },
  };
  var __webpack_module_cache__ = {};
  function __nccwpck_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = { exports: {} });
    var threw = true;
    try {
      __webpack_modules__[moduleId](
        module,
        module.exports,
        __nccwpck_require__,
      );
      threw = false;
    } finally {
      if (threw) delete __webpack_module_cache__[moduleId];
    }
    return module.exports;
  }
  if (typeof __nccwpck_require__ !== "undefined")
    __nccwpck_require__.ab = __dirname + "/";
  var __webpack_exports__ = __nccwpck_require__(715);
  module.exports = __webpack_exports__;
})();
