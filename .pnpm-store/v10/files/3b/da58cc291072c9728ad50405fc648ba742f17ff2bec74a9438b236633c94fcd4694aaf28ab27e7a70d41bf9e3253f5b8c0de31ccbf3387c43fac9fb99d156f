/* This loader renders the template with lodash.template if no other loader was found */
// @ts-nocheck

/**
 * This is a minimal implementation of `lodash.template`
 * Modified based on lodash v4.17.21
 * License: https://github.com/lodash/lodash/blob/main/LICENSE
 */
/** Used to match template delimiters. */
const reEscape = /<%-([\s\S]+?)%>/g;
/** Used to match template delimiters. */
const reEvaluate = /<%([\s\S]+?)%>/g;
/** Used to match template delimiters. */
const reInterpolate = /<%=([\s\S]+?)%>/g;
/** Used to match empty string literals in compiled template source. */
const reEmptyStringLeading = /\b__p \+= '';/g,
  reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
  reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

/** Used to match unescaped characters in compiled string literals. */
const reUnescapedString = /['\n\r\u2028\u2029\\]/g;

/** Used to escape characters for inclusion in compiled string literals. */
const stringEscapes = {
  '\\': '\\',
  "'": "'",
  '\n': 'n',
  '\r': 'r',
  '\u2028': 'u2028',
  '\u2029': 'u2029',
};

const WITH_PLACEHOLDER = 'function __with_placeholder__';
const escapeStringChar = (chr) => '\\' + stringEscapes[chr];

function template(string) {
  let isEscaping;
  let isEvaluating;
  let index = 0;
  let source = "__p += '";

  // Compile the regexp to match each delimiter.
  const reDelimiters = RegExp(
    reEscape.source +
      '|' +
      reInterpolate.source +
      '|' +
      reEvaluate.source +
      '|$',
    'g',
  );

  string.replace(
    reDelimiters,
    function (
      match,
      escapeValue,
      interpolateValue,
      evaluateValue,
      offset,
    ) {
      // Escape characters that can't be included in string literals.
      source += string
        .slice(index, offset)
        .replace(reUnescapedString, escapeStringChar);

      // Replace delimiters with snippets.
      if (escapeValue) {
        isEscaping = true;
        source += "' +\n__e(" + escapeValue + ") +\n'";
      }
      if (evaluateValue) {
        isEvaluating = true;
        source += "';\n" + evaluateValue + ";\n__p += '";
      }
      if (interpolateValue) {
        source +=
          "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
      }
      index = offset + match.length;

      // The JS engine embedded in Adobe products needs `match` returned in
      // order to produce the correct `offset` value.
      return match;
    },
  );

  source += "';\n";

  // Cleanup code by stripping empty strings.
  source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
    .replace(reEmptyStringMiddle, '$1')
    .replace(reEmptyStringTrailing, '$1;');

  // Frame code as the function body.
  source =
    'function(' +
    'data' +
    ') {\n' +
    "let __t, __p = ''" +
    (isEscaping ? ', __e = lodashEscape' : '') +
    (isEvaluating
      ? ', __j = Array.prototype.join;\n' +
        "function print() { __p += __j.call(arguments, '') }\n"
      : ';\n') +
    source +
    'return __p\n}';

  return { compiled: source, isEscaping };
}

module.exports = function (source) {
  const allLoadersButThisOne = this.loaders.filter(
    (loader) => loader.normal !== module.exports,
  );

  // This loader shouldn't kick in if there is any other loader
  if (allLoadersButThisOne.length > 0) {
    return source;
  }

  // Allow only one html-webpack-plugin loader to allow loader options in the webpack config
  const htmlWebpackPluginLoaders = this.loaders.filter(
    (loader) => loader.normal === module.exports,
  );
  const lastHtmlRspackPluginLoader =
    htmlWebpackPluginLoaders[htmlWebpackPluginLoaders.length - 1];
  if (this.loaders[this.loaderIndex] !== lastHtmlRspackPluginLoader) {
    return source;
  }

  if (/\.(c|m)?js$/.test(this.resourcePath)) {
    return source;
  }

  const escapeCode = `const htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
const escapeHtmlChar = (key) => htmlEscapes[key];
const reUnescapedHtml = /[&<>"']/g, reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

function lodashEscape(input) {
  if (input === null || input === undefined) {
    return '';
  }
  const string = typeof input === 'string' ? input : String(input);
  return string && reHasUnescapedHtml.test(string)
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
};`;

  // The following part renders the template with lodash as a minimalistic loader
  // The WITH_PLACEHOLDER will be replaced with `with` in the next step
  // to make the code compatible with SWC strict mode
  const { compiled, isEscaping } = template(source);
  return `
module.exports = function (templateParams) { ${WITH_PLACEHOLDER}(templateParams) {
  ${isEscaping ? escapeCode : ''}
  // Execute the lodash template
  return (${compiled})(); 
}}`;
};
