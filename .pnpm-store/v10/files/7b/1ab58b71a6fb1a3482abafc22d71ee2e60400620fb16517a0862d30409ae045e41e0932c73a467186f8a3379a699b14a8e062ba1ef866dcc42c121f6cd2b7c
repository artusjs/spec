import fs_0, * as __rspack_external_fs from "fs";
import path_0, { basename, dirname, normalize, posix, relative as external_path_relative, resolve, sep } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import { __webpack_require__ } from "./1~rslib-runtime.js";
__webpack_require__.add({
    "../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/index.js" (module, __unused_rspack_exports, __webpack_require__) {
        let pico = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/picomatch.js"), utils = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/utils.js");
        function picomatch(glob, options, returnState = !1) {
            return options && (null === options.windows || void 0 === options.windows) && (options = {
                ...options,
                windows: utils.isWindows()
            }), pico(glob, options, returnState);
        }
        Object.assign(picomatch, pico), module.exports = picomatch;
    },
    "../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/constants.js" (module) {
        let WIN_NO_SLASH = "[^\\\\/]", QMARK = '[^/]', END_ANCHOR = "(?:\\/|$)", START_ANCHOR = "(?:^|\\/)", DOTS_SLASH = `\\.{1,2}${END_ANCHOR}`, NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`, NO_DOT_SLASH = `(?!\\.{0,1}${END_ANCHOR})`, NO_DOTS_SLASH = `(?!${DOTS_SLASH})`, STAR = `${QMARK}*?`, POSIX_CHARS = {
            DOT_LITERAL: '\\.',
            PLUS_LITERAL: '\\+',
            QMARK_LITERAL: '\\?',
            SLASH_LITERAL: '\\/',
            ONE_CHAR: '(?=.)',
            QMARK,
            END_ANCHOR,
            DOTS_SLASH,
            NO_DOT: "(?!\\.)",
            NO_DOTS,
            NO_DOT_SLASH,
            NO_DOTS_SLASH,
            QMARK_NO_DOT: "[^.\\/]",
            STAR,
            START_ANCHOR,
            SEP: '/'
        }, WINDOWS_CHARS = {
            ...POSIX_CHARS,
            SLASH_LITERAL: "[\\\\/]",
            QMARK: WIN_NO_SLASH,
            STAR: `${WIN_NO_SLASH}*?`,
            DOTS_SLASH: "\\.{1,2}(?:[\\\\/]|$)",
            NO_DOT: "(?!\\.)",
            NO_DOTS: "(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",
            NO_DOT_SLASH: "(?!\\.{0,1}(?:[\\\\/]|$))",
            NO_DOTS_SLASH: "(?!\\.{1,2}(?:[\\\\/]|$))",
            QMARK_NO_DOT: "[^.\\\\/]",
            START_ANCHOR: "(?:^|[\\\\/])",
            END_ANCHOR: "(?:[\\\\/]|$)",
            SEP: '\\'
        };
        module.exports = {
            MAX_LENGTH: 65536,
            POSIX_REGEX_SOURCE: {
                alnum: 'a-zA-Z0-9',
                alpha: 'a-zA-Z',
                ascii: '\\x00-\\x7F',
                blank: ' \\t',
                cntrl: '\\x00-\\x1F\\x7F',
                digit: '0-9',
                graph: '\\x21-\\x7E',
                lower: 'a-z',
                print: '\\x20-\\x7E ',
                punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
                space: ' \\t\\r\\n\\v\\f',
                upper: 'A-Z',
                word: 'A-Za-z0-9_',
                xdigit: 'A-Fa-f0-9'
            },
            REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
            REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
            REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
            REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
            REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
            REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
            REPLACEMENTS: {
                __proto__: null,
                '***': '*',
                '**/**': '**',
                '**/**/**': '**'
            },
            CHAR_0: 48,
            CHAR_9: 57,
            CHAR_UPPERCASE_A: 65,
            CHAR_LOWERCASE_A: 97,
            CHAR_UPPERCASE_Z: 90,
            CHAR_LOWERCASE_Z: 122,
            CHAR_LEFT_PARENTHESES: 40,
            CHAR_RIGHT_PARENTHESES: 41,
            CHAR_ASTERISK: 42,
            CHAR_AMPERSAND: 38,
            CHAR_AT: 64,
            CHAR_BACKWARD_SLASH: 92,
            CHAR_CARRIAGE_RETURN: 13,
            CHAR_CIRCUMFLEX_ACCENT: 94,
            CHAR_COLON: 58,
            CHAR_COMMA: 44,
            CHAR_DOT: 46,
            CHAR_DOUBLE_QUOTE: 34,
            CHAR_EQUAL: 61,
            CHAR_EXCLAMATION_MARK: 33,
            CHAR_FORM_FEED: 12,
            CHAR_FORWARD_SLASH: 47,
            CHAR_GRAVE_ACCENT: 96,
            CHAR_HASH: 35,
            CHAR_HYPHEN_MINUS: 45,
            CHAR_LEFT_ANGLE_BRACKET: 60,
            CHAR_LEFT_CURLY_BRACE: 123,
            CHAR_LEFT_SQUARE_BRACKET: 91,
            CHAR_LINE_FEED: 10,
            CHAR_NO_BREAK_SPACE: 160,
            CHAR_PERCENT: 37,
            CHAR_PLUS: 43,
            CHAR_QUESTION_MARK: 63,
            CHAR_RIGHT_ANGLE_BRACKET: 62,
            CHAR_RIGHT_CURLY_BRACE: 125,
            CHAR_RIGHT_SQUARE_BRACKET: 93,
            CHAR_SEMICOLON: 59,
            CHAR_SINGLE_QUOTE: 39,
            CHAR_SPACE: 32,
            CHAR_TAB: 9,
            CHAR_UNDERSCORE: 95,
            CHAR_VERTICAL_LINE: 124,
            CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
            extglobChars: (chars)=>({
                    '!': {
                        type: 'negate',
                        open: '(?:(?!(?:',
                        close: `))${chars.STAR})`
                    },
                    '?': {
                        type: 'qmark',
                        open: '(?:',
                        close: ')?'
                    },
                    '+': {
                        type: 'plus',
                        open: '(?:',
                        close: ')+'
                    },
                    '*': {
                        type: 'star',
                        open: '(?:',
                        close: ')*'
                    },
                    '@': {
                        type: 'at',
                        open: '(?:',
                        close: ')'
                    }
                }),
            globChars: (win32)=>!0 === win32 ? WINDOWS_CHARS : POSIX_CHARS
        };
    },
    "../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/parse.js" (module, __unused_rspack_exports, __webpack_require__) {
        let constants = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/constants.js"), utils = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/utils.js"), { MAX_LENGTH, POSIX_REGEX_SOURCE, REGEX_NON_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_BACKREF, REPLACEMENTS } = constants, expandRange = (args, options)=>{
            if ('function' == typeof options.expandRange) return options.expandRange(...args, options);
            args.sort();
            let value = `[${args.join('-')}]`;
            try {
                new RegExp(value);
            } catch (ex) {
                return args.map((v)=>utils.escapeRegex(v)).join('..');
            }
            return value;
        }, syntaxError = (type, char)=>`Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`, parse = (input, options)=>{
            let value;
            if ('string' != typeof input) throw TypeError('Expected a string');
            input = REPLACEMENTS[input] || input;
            let opts = {
                ...options
            }, max = 'number' == typeof opts.maxLength ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH, len = input.length;
            if (len > max) throw SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
            let bos = {
                type: 'bos',
                value: '',
                output: opts.prepend || ''
            }, tokens = [
                bos
            ], capture = opts.capture ? '' : '?:', PLATFORM_CHARS = constants.globChars(opts.windows), EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS), { DOT_LITERAL, PLUS_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOT_SLASH, NO_DOTS_SLASH, QMARK, QMARK_NO_DOT, STAR, START_ANCHOR } = PLATFORM_CHARS, globstar = (opts)=>`(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`, nodot = opts.dot ? '' : NO_DOT, qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT, star = !0 === opts.bash ? globstar(opts) : STAR;
            opts.capture && (star = `(${star})`), 'boolean' == typeof opts.noext && (opts.noextglob = opts.noext);
            let state = {
                input,
                index: -1,
                start: 0,
                dot: !0 === opts.dot,
                consumed: '',
                output: '',
                prefix: '',
                backtrack: !1,
                negated: !1,
                brackets: 0,
                braces: 0,
                parens: 0,
                quotes: 0,
                globstar: !1,
                tokens
            };
            len = (input = utils.removePrefix(input, state)).length;
            let extglobs = [], braces = [], stack = [], prev = bos, eos = ()=>state.index === len - 1, peek = state.peek = (n = 1)=>input[state.index + n], advance = state.advance = ()=>input[++state.index] || '', remaining = ()=>input.slice(state.index + 1), consume = (value = '', num = 0)=>{
                state.consumed += value, state.index += num;
            }, append = (token)=>{
                state.output += null != token.output ? token.output : token.value, consume(token.value);
            }, negate = ()=>{
                let count = 1;
                for(; '!' === peek() && ('(' !== peek(2) || '?' === peek(3));)advance(), state.start++, count++;
                return count % 2 != 0 && (state.negated = !0, state.start++, !0);
            }, increment = (type)=>{
                state[type]++, stack.push(type);
            }, decrement = (type)=>{
                state[type]--, stack.pop();
            }, push = (tok)=>{
                if ('globstar' === prev.type) {
                    let isBrace = state.braces > 0 && ('comma' === tok.type || 'brace' === tok.type), isExtglob = !0 === tok.extglob || extglobs.length && ('pipe' === tok.type || 'paren' === tok.type);
                    'slash' === tok.type || 'paren' === tok.type || isBrace || isExtglob || (state.output = state.output.slice(0, -prev.output.length), prev.type = 'star', prev.value = '*', prev.output = star, state.output += prev.output);
                }
                if (extglobs.length && 'paren' !== tok.type && (extglobs[extglobs.length - 1].inner += tok.value), (tok.value || tok.output) && append(tok), prev && 'text' === prev.type && 'text' === tok.type) {
                    prev.output = (prev.output || prev.value) + tok.value, prev.value += tok.value;
                    return;
                }
                tok.prev = prev, tokens.push(tok), prev = tok;
            }, extglobOpen = (type, value)=>{
                let token = {
                    ...EXTGLOB_CHARS[value],
                    conditions: 1,
                    inner: ''
                };
                token.prev = prev, token.parens = state.parens, token.output = state.output;
                let output = (opts.capture ? '(' : '') + token.open;
                increment('parens'), push({
                    type,
                    value,
                    output: state.output ? '' : ONE_CHAR
                }), push({
                    type: 'paren',
                    extglob: !0,
                    value: advance(),
                    output
                }), extglobs.push(token);
            }, extglobClose = (token)=>{
                let rest, output = token.close + (opts.capture ? ')' : '');
                if ('negate' === token.type) {
                    let extglobStar = star;
                    if (token.inner && token.inner.length > 1 && token.inner.includes('/') && (extglobStar = globstar(opts)), (extglobStar !== star || eos() || /^\)+$/.test(remaining())) && (output = token.close = `)$))${extglobStar}`), token.inner.includes('*') && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
                        let expression = parse(rest, {
                            ...options,
                            fastpaths: !1
                        }).output;
                        output = token.close = `)${expression})${extglobStar})`;
                    }
                    'bos' === token.prev.type && (state.negatedExtglob = !0);
                }
                push({
                    type: 'paren',
                    extglob: !0,
                    value,
                    output
                }), decrement('parens');
            };
            if (!1 !== opts.fastpaths && !/(^[*!]|[/()[\]{}"])/.test(input)) {
                let backslashes = !1, output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index)=>'\\' === first ? (backslashes = !0, m) : '?' === first ? esc ? esc + first + (rest ? QMARK.repeat(rest.length) : '') : 0 === index ? qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '') : QMARK.repeat(chars.length) : '.' === first ? DOT_LITERAL.repeat(chars.length) : '*' === first ? esc ? esc + first + (rest ? star : '') : star : esc ? m : `\\${m}`);
                return (!0 === backslashes && (output = !0 === opts.unescape ? output.replace(/\\/g, '') : output.replace(/\\+/g, (m)=>m.length % 2 == 0 ? '\\\\' : m ? '\\' : '')), output === input && !0 === opts.contains) ? state.output = input : state.output = utils.wrapOutput(output, state, options), state;
            }
            for(; !eos();){
                if ('\u0000' === (value = advance())) continue;
                if ('\\' === value) {
                    let next = peek();
                    if ('/' === next && !0 !== opts.bash || '.' === next || ';' === next) continue;
                    if (!next) {
                        push({
                            type: 'text',
                            value: value += '\\'
                        });
                        continue;
                    }
                    let match = /^\\+/.exec(remaining()), slashes = 0;
                    if (match && match[0].length > 2 && (slashes = match[0].length, state.index += slashes, slashes % 2 != 0 && (value += '\\')), !0 === opts.unescape ? value = advance() : value += advance(), 0 === state.brackets) {
                        push({
                            type: 'text',
                            value
                        });
                        continue;
                    }
                }
                if (state.brackets > 0 && (']' !== value || '[' === prev.value || '[^' === prev.value)) {
                    if (!1 !== opts.posix && ':' === value) {
                        let inner = prev.value.slice(1);
                        if (inner.includes('[') && (prev.posix = !0, inner.includes(':'))) {
                            let idx = prev.value.lastIndexOf('['), pre = prev.value.slice(0, idx), posix = POSIX_REGEX_SOURCE[prev.value.slice(idx + 2)];
                            if (posix) {
                                prev.value = pre + posix, state.backtrack = !0, advance(), bos.output || 1 !== tokens.indexOf(prev) || (bos.output = ONE_CHAR);
                                continue;
                            }
                        }
                    }
                    ('[' === value && ':' !== peek() || '-' === value && ']' === peek()) && (value = `\\${value}`), ']' === value && ('[' === prev.value || '[^' === prev.value) && (value = `\\${value}`), !0 === opts.posix && '!' === value && '[' === prev.value && (value = '^'), prev.value += value, append({
                        value
                    });
                    continue;
                }
                if (1 === state.quotes && '"' !== value) {
                    value = utils.escapeRegex(value), prev.value += value, append({
                        value
                    });
                    continue;
                }
                if ('"' === value) {
                    state.quotes = +(1 !== state.quotes), !0 === opts.keepQuotes && push({
                        type: 'text',
                        value
                    });
                    continue;
                }
                if ('(' === value) {
                    increment('parens'), push({
                        type: 'paren',
                        value
                    });
                    continue;
                }
                if (')' === value) {
                    if (0 === state.parens && !0 === opts.strictBrackets) throw SyntaxError(syntaxError('opening', '('));
                    let extglob = extglobs[extglobs.length - 1];
                    if (extglob && state.parens === extglob.parens + 1) {
                        extglobClose(extglobs.pop());
                        continue;
                    }
                    push({
                        type: 'paren',
                        value,
                        output: state.parens ? ')' : '\\)'
                    }), decrement('parens');
                    continue;
                }
                if ('[' === value) {
                    if (!0 !== opts.nobracket && remaining().includes(']')) increment('brackets');
                    else {
                        if (!0 !== opts.nobracket && !0 === opts.strictBrackets) throw SyntaxError(syntaxError('closing', ']'));
                        value = `\\${value}`;
                    }
                    push({
                        type: 'bracket',
                        value
                    });
                    continue;
                }
                if (']' === value) {
                    if (!0 === opts.nobracket || prev && 'bracket' === prev.type && 1 === prev.value.length) {
                        push({
                            type: 'text',
                            value,
                            output: `\\${value}`
                        });
                        continue;
                    }
                    if (0 === state.brackets) {
                        if (!0 === opts.strictBrackets) throw SyntaxError(syntaxError('opening', '['));
                        push({
                            type: 'text',
                            value,
                            output: `\\${value}`
                        });
                        continue;
                    }
                    decrement('brackets');
                    let prevValue = prev.value.slice(1);
                    if (!0 === prev.posix || '^' !== prevValue[0] || prevValue.includes('/') || (value = `/${value}`), prev.value += value, append({
                        value
                    }), !1 === opts.literalBrackets || utils.hasRegexChars(prevValue)) continue;
                    let escaped = utils.escapeRegex(prev.value);
                    if (state.output = state.output.slice(0, -prev.value.length), !0 === opts.literalBrackets) {
                        state.output += escaped, prev.value = escaped;
                        continue;
                    }
                    prev.value = `(${capture}${escaped}|${prev.value})`, state.output += prev.value;
                    continue;
                }
                if ('{' === value && !0 !== opts.nobrace) {
                    increment('braces');
                    let open = {
                        type: 'brace',
                        value,
                        output: '(',
                        outputIndex: state.output.length,
                        tokensIndex: state.tokens.length
                    };
                    braces.push(open), push(open);
                    continue;
                }
                if ('}' === value) {
                    let brace = braces[braces.length - 1];
                    if (!0 === opts.nobrace || !brace) {
                        push({
                            type: 'text',
                            value,
                            output: value
                        });
                        continue;
                    }
                    let output = ')';
                    if (!0 === brace.dots) {
                        let arr = tokens.slice(), range = [];
                        for(let i = arr.length - 1; i >= 0 && (tokens.pop(), 'brace' !== arr[i].type); i--)'dots' !== arr[i].type && range.unshift(arr[i].value);
                        output = expandRange(range, opts), state.backtrack = !0;
                    }
                    if (!0 !== brace.comma && !0 !== brace.dots) {
                        let out = state.output.slice(0, brace.outputIndex), toks = state.tokens.slice(brace.tokensIndex);
                        for (let t of (brace.value = brace.output = '\\{', value = output = '\\}', state.output = out, toks))state.output += t.output || t.value;
                    }
                    push({
                        type: 'brace',
                        value,
                        output
                    }), decrement('braces'), braces.pop();
                    continue;
                }
                if ('|' === value) {
                    extglobs.length > 0 && extglobs[extglobs.length - 1].conditions++, push({
                        type: 'text',
                        value
                    });
                    continue;
                }
                if (',' === value) {
                    let output = value, brace = braces[braces.length - 1];
                    brace && 'braces' === stack[stack.length - 1] && (brace.comma = !0, output = '|'), push({
                        type: 'comma',
                        value,
                        output
                    });
                    continue;
                }
                if ('/' === value) {
                    if ('dot' === prev.type && state.index === state.start + 1) {
                        state.start = state.index + 1, state.consumed = '', state.output = '', tokens.pop(), prev = bos;
                        continue;
                    }
                    push({
                        type: 'slash',
                        value,
                        output: SLASH_LITERAL
                    });
                    continue;
                }
                if ('.' === value) {
                    if (state.braces > 0 && 'dot' === prev.type) {
                        '.' === prev.value && (prev.output = DOT_LITERAL);
                        let brace = braces[braces.length - 1];
                        prev.type = 'dots', prev.output += value, prev.value += value, brace.dots = !0;
                        continue;
                    }
                    if (state.braces + state.parens === 0 && 'bos' !== prev.type && 'slash' !== prev.type) {
                        push({
                            type: 'text',
                            value,
                            output: DOT_LITERAL
                        });
                        continue;
                    }
                    push({
                        type: 'dot',
                        value,
                        output: DOT_LITERAL
                    });
                    continue;
                }
                if ('?' === value) {
                    if (!(prev && '(' === prev.value) && !0 !== opts.noextglob && '(' === peek() && '?' !== peek(2)) {
                        extglobOpen('qmark', value);
                        continue;
                    }
                    if (prev && 'paren' === prev.type) {
                        let next = peek(), output = value;
                        ('(' !== prev.value || /[!=<:]/.test(next)) && ('<' !== next || /<([!=]|\w+>)/.test(remaining())) || (output = `\\${value}`), push({
                            type: 'text',
                            value,
                            output
                        });
                        continue;
                    }
                    if (!0 !== opts.dot && ('slash' === prev.type || 'bos' === prev.type)) {
                        push({
                            type: 'qmark',
                            value,
                            output: QMARK_NO_DOT
                        });
                        continue;
                    }
                    push({
                        type: 'qmark',
                        value,
                        output: QMARK
                    });
                    continue;
                }
                if ('!' === value) {
                    if (!0 !== opts.noextglob && '(' === peek() && ('?' !== peek(2) || !/[!=<:]/.test(peek(3)))) {
                        extglobOpen('negate', value);
                        continue;
                    }
                    if (!0 !== opts.nonegate && 0 === state.index) {
                        negate();
                        continue;
                    }
                }
                if ('+' === value) {
                    if (!0 !== opts.noextglob && '(' === peek() && '?' !== peek(2)) {
                        extglobOpen('plus', value);
                        continue;
                    }
                    if (prev && '(' === prev.value || !1 === opts.regex) {
                        push({
                            type: 'plus',
                            value,
                            output: PLUS_LITERAL
                        });
                        continue;
                    }
                    if (prev && ('bracket' === prev.type || 'paren' === prev.type || 'brace' === prev.type) || state.parens > 0) {
                        push({
                            type: 'plus',
                            value
                        });
                        continue;
                    }
                    push({
                        type: 'plus',
                        value: PLUS_LITERAL
                    });
                    continue;
                }
                if ('@' === value) {
                    if (!0 !== opts.noextglob && '(' === peek() && '?' !== peek(2)) {
                        push({
                            type: 'at',
                            extglob: !0,
                            value,
                            output: ''
                        });
                        continue;
                    }
                    push({
                        type: 'text',
                        value
                    });
                    continue;
                }
                if ('*' !== value) {
                    ('$' === value || '^' === value) && (value = `\\${value}`);
                    let match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
                    match && (value += match[0], state.index += match[0].length), push({
                        type: 'text',
                        value
                    });
                    continue;
                }
                if (prev && ('globstar' === prev.type || !0 === prev.star)) {
                    prev.type = 'star', prev.star = !0, prev.value += value, prev.output = star, state.backtrack = !0, state.globstar = !0, consume(value);
                    continue;
                }
                let rest = remaining();
                if (!0 !== opts.noextglob && /^\([^?]/.test(rest)) {
                    extglobOpen('star', value);
                    continue;
                }
                if ('star' === prev.type) {
                    if (!0 === opts.noglobstar) {
                        consume(value);
                        continue;
                    }
                    let prior = prev.prev, before = prior.prev, isStart = 'slash' === prior.type || 'bos' === prior.type, afterStar = before && ('star' === before.type || 'globstar' === before.type);
                    if (!0 === opts.bash && (!isStart || rest[0] && '/' !== rest[0])) {
                        push({
                            type: 'star',
                            value,
                            output: ''
                        });
                        continue;
                    }
                    let isBrace = state.braces > 0 && ('comma' === prior.type || 'brace' === prior.type), isExtglob = extglobs.length && ('pipe' === prior.type || 'paren' === prior.type);
                    if (!isStart && 'paren' !== prior.type && !isBrace && !isExtglob) {
                        push({
                            type: 'star',
                            value,
                            output: ''
                        });
                        continue;
                    }
                    for(; '/**' === rest.slice(0, 3);){
                        let after = input[state.index + 4];
                        if (after && '/' !== after) break;
                        rest = rest.slice(3), consume('/**', 3);
                    }
                    if ('bos' === prior.type && eos()) {
                        prev.type = 'globstar', prev.value += value, prev.output = globstar(opts), state.output = prev.output, state.globstar = !0, consume(value);
                        continue;
                    }
                    if ('slash' === prior.type && 'bos' !== prior.prev.type && !afterStar && eos()) {
                        state.output = state.output.slice(0, -(prior.output + prev.output).length), prior.output = `(?:${prior.output}`, prev.type = 'globstar', prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)'), prev.value += value, state.globstar = !0, state.output += prior.output + prev.output, consume(value);
                        continue;
                    }
                    if ('slash' === prior.type && 'bos' !== prior.prev.type && '/' === rest[0]) {
                        let end = void 0 !== rest[1] ? '|$' : '';
                        state.output = state.output.slice(0, -(prior.output + prev.output).length), prior.output = `(?:${prior.output}`, prev.type = 'globstar', prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`, prev.value += value, state.output += prior.output + prev.output, state.globstar = !0, consume(value + advance()), push({
                            type: 'slash',
                            value: '/',
                            output: ''
                        });
                        continue;
                    }
                    if ('bos' === prior.type && '/' === rest[0]) {
                        prev.type = 'globstar', prev.value += value, prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`, state.output = prev.output, state.globstar = !0, consume(value + advance()), push({
                            type: 'slash',
                            value: '/',
                            output: ''
                        });
                        continue;
                    }
                    state.output = state.output.slice(0, -prev.output.length), prev.type = 'globstar', prev.output = globstar(opts), prev.value += value, state.output += prev.output, state.globstar = !0, consume(value);
                    continue;
                }
                let token = {
                    type: 'star',
                    value,
                    output: star
                };
                if (!0 === opts.bash) {
                    token.output = '.*?', ('bos' === prev.type || 'slash' === prev.type) && (token.output = nodot + token.output), push(token);
                    continue;
                }
                if (prev && ('bracket' === prev.type || 'paren' === prev.type) && !0 === opts.regex) {
                    token.output = value, push(token);
                    continue;
                }
                (state.index === state.start || 'slash' === prev.type || 'dot' === prev.type) && ('dot' === prev.type ? (state.output += NO_DOT_SLASH, prev.output += NO_DOT_SLASH) : !0 === opts.dot ? (state.output += NO_DOTS_SLASH, prev.output += NO_DOTS_SLASH) : (state.output += nodot, prev.output += nodot), '*' !== peek() && (state.output += ONE_CHAR, prev.output += ONE_CHAR)), push(token);
            }
            for(; state.brackets > 0;){
                if (!0 === opts.strictBrackets) throw SyntaxError(syntaxError('closing', ']'));
                state.output = utils.escapeLast(state.output, '['), decrement('brackets');
            }
            for(; state.parens > 0;){
                if (!0 === opts.strictBrackets) throw SyntaxError(syntaxError('closing', ')'));
                state.output = utils.escapeLast(state.output, '('), decrement('parens');
            }
            for(; state.braces > 0;){
                if (!0 === opts.strictBrackets) throw SyntaxError(syntaxError('closing', '}'));
                state.output = utils.escapeLast(state.output, '{'), decrement('braces');
            }
            if (!0 !== opts.strictSlashes && ('star' === prev.type || 'bracket' === prev.type) && push({
                type: 'maybe_slash',
                value: '',
                output: `${SLASH_LITERAL}?`
            }), !0 === state.backtrack) for (let token of (state.output = '', state.tokens))state.output += null != token.output ? token.output : token.value, token.suffix && (state.output += token.suffix);
            return state;
        };
        parse.fastpaths = (input, options)=>{
            let opts = {
                ...options
            }, max = 'number' == typeof opts.maxLength ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH, len = input.length;
            if (len > max) throw SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
            input = REPLACEMENTS[input] || input;
            let { DOT_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOTS, NO_DOTS_SLASH, STAR, START_ANCHOR } = constants.globChars(opts.windows), nodot = opts.dot ? NO_DOTS : NO_DOT, slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT, capture = opts.capture ? '' : '?:', star = !0 === opts.bash ? '.*?' : STAR;
            opts.capture && (star = `(${star})`);
            let globstar = (opts)=>!0 === opts.noglobstar ? star : `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`, create = (str)=>{
                switch(str){
                    case '*':
                        return `${nodot}${ONE_CHAR}${star}`;
                    case '.*':
                        return `${DOT_LITERAL}${ONE_CHAR}${star}`;
                    case '*.*':
                        return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
                    case '*/*':
                        return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
                    case '**':
                        return nodot + globstar(opts);
                    case '**/*':
                        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
                    case '**/*.*':
                        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
                    case '**/.*':
                        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
                    default:
                        {
                            let match = /^(.*?)\.(\w+)$/.exec(str);
                            if (!match) return;
                            let source = create(match[1]);
                            if (!source) return;
                            return source + DOT_LITERAL + match[2];
                        }
                }
            }, source = create(utils.removePrefix(input, {
                negated: !1,
                prefix: ''
            }));
            return source && !0 !== opts.strictSlashes && (source += `${SLASH_LITERAL}?`), source;
        }, module.exports = parse;
    },
    "../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/picomatch.js" (module, __unused_rspack_exports, __webpack_require__) {
        let scan = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/scan.js"), parse = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/parse.js"), utils = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/utils.js"), constants = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/constants.js"), picomatch = (glob, options, returnState = !1)=>{
            if (Array.isArray(glob)) {
                let fns = glob.map((input)=>picomatch(input, options, returnState));
                return (str)=>{
                    for (let isMatch of fns){
                        let state = isMatch(str);
                        if (state) return state;
                    }
                    return !1;
                };
            }
            let isState = glob && 'object' == typeof glob && !Array.isArray(glob) && glob.tokens && glob.input;
            if ('' === glob || 'string' != typeof glob && !isState) throw TypeError('Expected pattern to be a non-empty string');
            let opts = options || {}, posix = opts.windows, regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, !1, !0), state = regex.state;
            delete regex.state;
            let isIgnored = ()=>!1;
            if (opts.ignore) {
                let ignoreOpts = {
                    ...options,
                    ignore: null,
                    onMatch: null,
                    onResult: null
                };
                isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
            }
            let matcher = (input, returnObject = !1)=>{
                let { isMatch, match, output } = picomatch.test(input, regex, options, {
                    glob,
                    posix
                }), result = {
                    glob,
                    state,
                    regex,
                    posix,
                    input,
                    output,
                    match,
                    isMatch
                };
                return ('function' == typeof opts.onResult && opts.onResult(result), !1 === isMatch) ? (result.isMatch = !1, !!returnObject && result) : isIgnored(input) ? ('function' == typeof opts.onIgnore && opts.onIgnore(result), result.isMatch = !1, !!returnObject && result) : ('function' == typeof opts.onMatch && opts.onMatch(result), !returnObject || result);
            };
            return returnState && (matcher.state = state), matcher;
        };
        picomatch.test = (input, regex, options, { glob, posix } = {})=>{
            if ('string' != typeof input) throw TypeError('Expected input to be a string');
            if ('' === input) return {
                isMatch: !1,
                output: ''
            };
            let opts = options || {}, format = opts.format || (posix ? utils.toPosixSlashes : null), match = input === glob, output = match && format ? format(input) : input;
            return !1 === match && (match = (output = format ? format(input) : input) === glob), (!1 === match || !0 === opts.capture) && (match = !0 === opts.matchBase || !0 === opts.basename ? picomatch.matchBase(input, regex, options, posix) : regex.exec(output)), {
                isMatch: !!match,
                match,
                output
            };
        }, picomatch.matchBase = (input, glob, options)=>(glob instanceof RegExp ? glob : picomatch.makeRe(glob, options)).test(utils.basename(input)), picomatch.isMatch = (str, patterns, options)=>picomatch(patterns, options)(str), picomatch.parse = (pattern, options)=>Array.isArray(pattern) ? pattern.map((p)=>picomatch.parse(p, options)) : parse(pattern, {
                ...options,
                fastpaths: !1
            }), picomatch.scan = (input, options)=>scan(input, options), picomatch.compileRe = (state, options, returnOutput = !1, returnState = !1)=>{
            if (!0 === returnOutput) return state.output;
            let opts = options || {}, prepend = opts.contains ? '' : '^', append = opts.contains ? '' : '$', source = `${prepend}(?:${state.output})${append}`;
            state && !0 === state.negated && (source = `^(?!${source}).*$`);
            let regex = picomatch.toRegex(source, options);
            return !0 === returnState && (regex.state = state), regex;
        }, picomatch.makeRe = (input, options = {}, returnOutput = !1, returnState = !1)=>{
            if (!input || 'string' != typeof input) throw TypeError('Expected a non-empty string');
            let parsed = {
                negated: !1,
                fastpaths: !0
            };
            return !1 !== options.fastpaths && ('.' === input[0] || '*' === input[0]) && (parsed.output = parse.fastpaths(input, options)), parsed.output || (parsed = parse(input, options)), picomatch.compileRe(parsed, options, returnOutput, returnState);
        }, picomatch.toRegex = (source, options)=>{
            try {
                let opts = options || {};
                return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
            } catch (err) {
                if (options && !0 === options.debug) throw err;
                return /$^/;
            }
        }, picomatch.constants = constants, module.exports = picomatch;
    },
    "../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/scan.js" (module, __unused_rspack_exports, __webpack_require__) {
        let utils = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/utils.js"), { CHAR_ASTERISK, CHAR_AT, CHAR_BACKWARD_SLASH, CHAR_COMMA, CHAR_DOT, CHAR_EXCLAMATION_MARK, CHAR_FORWARD_SLASH, CHAR_LEFT_CURLY_BRACE, CHAR_LEFT_PARENTHESES, CHAR_LEFT_SQUARE_BRACKET, CHAR_PLUS, CHAR_QUESTION_MARK, CHAR_RIGHT_CURLY_BRACE, CHAR_RIGHT_PARENTHESES, CHAR_RIGHT_SQUARE_BRACKET } = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/constants.js"), isPathSeparator = (code)=>code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH, depth = (token)=>{
            !0 !== token.isPrefix && (token.depth = token.isGlobstar ? 1 / 0 : 1);
        };
        module.exports = (input, options)=>{
            let prev, code, opts = options || {}, length = input.length - 1, scanToEnd = !0 === opts.parts || !0 === opts.scanToEnd, slashes = [], tokens = [], parts = [], str = input, index = -1, start = 0, lastIndex = 0, isBrace = !1, isBracket = !1, isGlob = !1, isExtglob = !1, isGlobstar = !1, braceEscaped = !1, backslashes = !1, negated = !1, negatedExtglob = !1, finished = !1, braces = 0, token = {
                value: '',
                depth: 0,
                isGlob: !1
            }, eos = ()=>index >= length, peek = ()=>str.charCodeAt(index + 1), advance = ()=>(prev = code, str.charCodeAt(++index));
            for(; index < length;){
                let next;
                if ((code = advance()) === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = !0, (code = advance()) === CHAR_LEFT_CURLY_BRACE && (braceEscaped = !0);
                    continue;
                }
                if (!0 === braceEscaped || code === CHAR_LEFT_CURLY_BRACE) {
                    for(braces++; !0 !== eos() && (code = advance());){
                        if (code === CHAR_BACKWARD_SLASH) {
                            backslashes = token.backslashes = !0, advance();
                            continue;
                        }
                        if (code === CHAR_LEFT_CURLY_BRACE) {
                            braces++;
                            continue;
                        }
                        if (!0 !== braceEscaped && code === CHAR_DOT && (code = advance()) === CHAR_DOT || !0 !== braceEscaped && code === CHAR_COMMA) {
                            if (isBrace = token.isBrace = !0, isGlob = token.isGlob = !0, finished = !0, !0 === scanToEnd) continue;
                            break;
                        }
                        if (code === CHAR_RIGHT_CURLY_BRACE && 0 == --braces) {
                            braceEscaped = !1, isBrace = token.isBrace = !0, finished = !0;
                            break;
                        }
                    }
                    if (!0 === scanToEnd) continue;
                    break;
                }
                if (code === CHAR_FORWARD_SLASH) {
                    if (slashes.push(index), tokens.push(token), token = {
                        value: '',
                        depth: 0,
                        isGlob: !1
                    }, !0 === finished) continue;
                    if (prev === CHAR_DOT && index === start + 1) {
                        start += 2;
                        continue;
                    }
                    lastIndex = index + 1;
                    continue;
                }
                if (!0 !== opts.noext && !0 == (code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK) && peek() === CHAR_LEFT_PARENTHESES) {
                    if (isGlob = token.isGlob = !0, isExtglob = token.isExtglob = !0, finished = !0, code === CHAR_EXCLAMATION_MARK && index === start && (negatedExtglob = !0), !0 === scanToEnd) {
                        for(; !0 !== eos() && (code = advance());){
                            if (code === CHAR_BACKWARD_SLASH) {
                                backslashes = token.backslashes = !0, code = advance();
                                continue;
                            }
                            if (code === CHAR_RIGHT_PARENTHESES) {
                                isGlob = token.isGlob = !0, finished = !0;
                                break;
                            }
                        }
                        continue;
                    }
                    break;
                }
                if (code === CHAR_ASTERISK) {
                    if (prev === CHAR_ASTERISK && (isGlobstar = token.isGlobstar = !0), isGlob = token.isGlob = !0, finished = !0, !0 === scanToEnd) continue;
                    break;
                }
                if (code === CHAR_QUESTION_MARK) {
                    if (isGlob = token.isGlob = !0, finished = !0, !0 === scanToEnd) continue;
                    break;
                }
                if (code === CHAR_LEFT_SQUARE_BRACKET) {
                    for(; !0 !== eos() && (next = advance());){
                        if (next === CHAR_BACKWARD_SLASH) {
                            backslashes = token.backslashes = !0, advance();
                            continue;
                        }
                        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                            isBracket = token.isBracket = !0, isGlob = token.isGlob = !0, finished = !0;
                            break;
                        }
                    }
                    if (!0 === scanToEnd) continue;
                    break;
                }
                if (!0 !== opts.nonegate && code === CHAR_EXCLAMATION_MARK && index === start) {
                    negated = token.negated = !0, start++;
                    continue;
                }
                if (!0 !== opts.noparen && code === CHAR_LEFT_PARENTHESES) {
                    if (isGlob = token.isGlob = !0, !0 === scanToEnd) {
                        for(; !0 !== eos() && (code = advance());){
                            if (code === CHAR_LEFT_PARENTHESES) {
                                backslashes = token.backslashes = !0, code = advance();
                                continue;
                            }
                            if (code === CHAR_RIGHT_PARENTHESES) {
                                finished = !0;
                                break;
                            }
                        }
                        continue;
                    }
                    break;
                }
                if (!0 === isGlob) {
                    if (finished = !0, !0 === scanToEnd) continue;
                    break;
                }
            }
            !0 === opts.noext && (isExtglob = !1, isGlob = !1);
            let base = str, prefix = '', glob = '';
            start > 0 && (prefix = str.slice(0, start), str = str.slice(start), lastIndex -= start), base && !0 === isGlob && lastIndex > 0 ? (base = str.slice(0, lastIndex), glob = str.slice(lastIndex)) : !0 === isGlob ? (base = '', glob = str) : base = str, base && '' !== base && '/' !== base && base !== str && isPathSeparator(base.charCodeAt(base.length - 1)) && (base = base.slice(0, -1)), !0 === opts.unescape && (glob && (glob = utils.removeBackslashes(glob)), base && !0 === backslashes && (base = utils.removeBackslashes(base)));
            let state = {
                prefix,
                input,
                start,
                base,
                glob,
                isBrace,
                isBracket,
                isGlob,
                isExtglob,
                isGlobstar,
                negated,
                negatedExtglob
            };
            if (!0 === opts.tokens && (state.maxDepth = 0, isPathSeparator(code) || tokens.push(token), state.tokens = tokens), !0 === opts.parts || !0 === opts.tokens) {
                let prevIndex;
                for(let idx = 0; idx < slashes.length; idx++){
                    let n = prevIndex ? prevIndex + 1 : start, i = slashes[idx], value = input.slice(n, i);
                    opts.tokens && (0 === idx && 0 !== start ? (tokens[idx].isPrefix = !0, tokens[idx].value = prefix) : tokens[idx].value = value, depth(tokens[idx]), state.maxDepth += tokens[idx].depth), (0 !== idx || '' !== value) && parts.push(value), prevIndex = i;
                }
                if (prevIndex && prevIndex + 1 < input.length) {
                    let value = input.slice(prevIndex + 1);
                    parts.push(value), opts.tokens && (tokens[tokens.length - 1].value = value, depth(tokens[tokens.length - 1]), state.maxDepth += tokens[tokens.length - 1].depth);
                }
                state.slashes = slashes, state.parts = parts;
            }
            return state;
        };
    },
    "../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/utils.js" (__unused_rspack_module, exports, __webpack_require__) {
        let { REGEX_BACKSLASH, REGEX_REMOVE_BACKSLASH, REGEX_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_GLOBAL } = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/lib/constants.js");
        exports.isObject = (val)=>null !== val && 'object' == typeof val && !Array.isArray(val), exports.hasRegexChars = (str)=>REGEX_SPECIAL_CHARS.test(str), exports.isRegexChar = (str)=>1 === str.length && exports.hasRegexChars(str), exports.escapeRegex = (str)=>str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1'), exports.toPosixSlashes = (str)=>str.replace(REGEX_BACKSLASH, '/'), exports.isWindows = ()=>{
            if ("u" > typeof navigator && navigator.platform) {
                let platform = navigator.platform.toLowerCase();
                return 'win32' === platform || 'windows' === platform;
            }
            return "u" > typeof process && !!process.platform && 'win32' === process.platform;
        }, exports.removeBackslashes = (str)=>str.replace(REGEX_REMOVE_BACKSLASH, (match)=>'\\' === match ? '' : match), exports.escapeLast = (input, char, lastIdx)=>{
            let idx = input.lastIndexOf(char, lastIdx);
            return -1 === idx ? input : '\\' === input[idx - 1] ? exports.escapeLast(input, char, idx - 1) : `${input.slice(0, idx)}\\${input.slice(idx)}`;
        }, exports.removePrefix = (input, state = {})=>{
            let output = input;
            return output.startsWith('./') && (output = output.slice(2), state.prefix = './'), output;
        }, exports.wrapOutput = (input, state = {}, options = {})=>{
            let prepend = options.contains ? '' : '^', append = options.contains ? '' : '$', output = `${prepend}(?:${input})${append}`;
            return !0 === state.negated && (output = `(?:^(?!${output}).*$)`), output;
        }, exports.basename = (path, { windows } = {})=>{
            let segs = path.split(windows ? /[\\/]/ : '/'), last = segs[segs.length - 1];
            return '' === last ? segs[segs.length - 2] : last;
        };
    }
});
var __require = createRequire(import.meta.url);
function cleanPath(path) {
    let normalized = normalize(path);
    return normalized.length > 1 && normalized[normalized.length - 1] === sep && (normalized = normalized.substring(0, normalized.length - 1)), normalized;
}
let SLASHES_REGEX = /[\\/]/g;
function convertSlashes(path, separator) {
    return path.replace(SLASHES_REGEX, separator);
}
let WINDOWS_ROOT_DIR_REGEX = /^[a-z]:[\\/]$/i;
function isRootDirectory(path) {
    return "/" === path || WINDOWS_ROOT_DIR_REGEX.test(path);
}
function normalizePath(path, options) {
    let { resolvePaths, normalizePath: normalizePath$1, pathSeparator } = options, pathNeedsCleaning = "win32" === process.platform && path.includes("/") || path.startsWith(".");
    return (resolvePaths && (path = resolve(path)), (normalizePath$1 || pathNeedsCleaning) && (path = cleanPath(path)), "." === path) ? "" : convertSlashes(path[path.length - 1] !== pathSeparator ? path + pathSeparator : path, pathSeparator);
}
function joinPathWithBasePath(filename, directoryPath) {
    return directoryPath + filename;
}
function joinPathWithRelativePath(root, options) {
    return function(filename, directoryPath) {
        return directoryPath.startsWith(root) ? directoryPath.slice(root.length) + filename : convertSlashes(external_path_relative(root, directoryPath), options.pathSeparator) + options.pathSeparator + filename;
    };
}
function joinPath(filename) {
    return filename;
}
function joinDirectoryPath(filename, directoryPath, separator) {
    return directoryPath + filename + separator;
}
function build$7(root, options) {
    let { relativePaths, includeBasePath } = options;
    return relativePaths && root ? joinPathWithRelativePath(root, options) : includeBasePath ? joinPathWithBasePath : joinPath;
}
function pushDirectoryWithRelativePath(root) {
    return function(directoryPath, paths) {
        paths.push(directoryPath.substring(root.length) || ".");
    };
}
function pushDirectoryFilterWithRelativePath(root) {
    return function(directoryPath, paths, filters) {
        let relativePath = directoryPath.substring(root.length) || ".";
        filters.every((filter)=>filter(relativePath, !0)) && paths.push(relativePath);
    };
}
let pushDirectory = (directoryPath, paths)=>{
    paths.push(directoryPath || ".");
}, pushDirectoryFilter = (directoryPath, paths, filters)=>{
    let path = directoryPath || ".";
    filters.every((filter)=>filter(path, !0)) && paths.push(path);
}, empty$2 = ()=>{};
function build$6(root, options) {
    let { includeDirs, filters, relativePaths } = options;
    return includeDirs ? relativePaths ? filters && filters.length ? pushDirectoryFilterWithRelativePath(root) : pushDirectoryWithRelativePath(root) : filters && filters.length ? pushDirectoryFilter : pushDirectory : empty$2;
}
let pushFileFilterAndCount = (filename, _paths, counts, filters)=>{
    filters.every((filter)=>filter(filename, !1)) && counts.files++;
}, pushFileFilter = (filename, paths, _counts, filters)=>{
    filters.every((filter)=>filter(filename, !1)) && paths.push(filename);
}, pushFileCount = (_filename, _paths, counts, _filters)=>{
    counts.files++;
}, pushFile = (filename, paths)=>{
    paths.push(filename);
}, empty$1 = ()=>{};
function build$5(options) {
    let { excludeFiles, filters, onlyCounts } = options;
    return excludeFiles ? empty$1 : filters && filters.length ? onlyCounts ? pushFileFilterAndCount : pushFileFilter : onlyCounts ? pushFileCount : pushFile;
}
let getArray = (paths)=>paths, getArrayGroup = ()=>[
        ""
    ].slice(0, 0);
function build$4(options) {
    return options.group ? getArrayGroup : getArray;
}
let groupFiles = (groups, directory, files)=>{
    groups.push({
        directory,
        files,
        dir: directory
    });
}, empty = ()=>{};
function build$3(options) {
    return options.group ? groupFiles : empty;
}
let resolveSymlinksAsync = function(path, state, callback$1) {
    let { queue, fs, options: { suppressErrors } } = state;
    queue.enqueue(), fs.realpath(path, (error, resolvedPath)=>{
        if (error) return queue.dequeue(suppressErrors ? null : error, state);
        fs.stat(resolvedPath, (error$1, stat)=>error$1 ? queue.dequeue(suppressErrors ? null : error$1, state) : stat.isDirectory() && isRecursive(path, resolvedPath, state) ? queue.dequeue(null, state) : void (callback$1(stat, resolvedPath), queue.dequeue(null, state)));
    });
}, resolveSymlinks = function(path, state, callback$1) {
    let { queue, fs, options: { suppressErrors } } = state;
    queue.enqueue();
    try {
        let resolvedPath = fs.realpathSync(path), stat = fs.statSync(resolvedPath);
        if (stat.isDirectory() && isRecursive(path, resolvedPath, state)) return;
        callback$1(stat, resolvedPath);
    } catch (e) {
        if (!suppressErrors) throw e;
    }
};
function build$2(options, isSynchronous) {
    return !options.resolveSymlinks || options.excludeSymlinks ? null : isSynchronous ? resolveSymlinks : resolveSymlinksAsync;
}
function isRecursive(path, resolved, state) {
    if (state.options.useRealPaths) return isRecursiveUsingRealPaths(resolved, state);
    let parent = dirname(path), depth = 1;
    for(; parent !== state.root && depth < 2;){
        let resolvedPath = state.symlinks.get(parent);
        resolvedPath && (resolvedPath === resolved || resolvedPath.startsWith(resolved) || resolved.startsWith(resolvedPath)) ? depth++ : parent = dirname(parent);
    }
    return state.symlinks.set(path, resolved), depth > 1;
}
function isRecursiveUsingRealPaths(resolved, state) {
    return state.visited.includes(resolved + state.options.pathSeparator);
}
let onlyCountsSync = (state)=>state.counts, groupsSync = (state)=>state.groups, defaultSync = (state)=>state.paths, limitFilesSync = (state)=>state.paths.slice(0, state.options.maxFiles), onlyCountsAsync = (state, error, callback$1)=>(report(error, callback$1, state.counts, state.options.suppressErrors), null), defaultAsync = (state, error, callback$1)=>(report(error, callback$1, state.paths, state.options.suppressErrors), null), limitFilesAsync = (state, error, callback$1)=>(report(error, callback$1, state.paths.slice(0, state.options.maxFiles), state.options.suppressErrors), null), groupsAsync = (state, error, callback$1)=>(report(error, callback$1, state.groups, state.options.suppressErrors), null);
function report(error, callback$1, output, suppressErrors) {
    callback$1(error && !suppressErrors ? error : null, output);
}
function build$1(options, isSynchronous) {
    let { onlyCounts, group, maxFiles } = options;
    return onlyCounts ? isSynchronous ? onlyCountsSync : onlyCountsAsync : group ? isSynchronous ? groupsSync : groupsAsync : maxFiles ? isSynchronous ? limitFilesSync : limitFilesAsync : isSynchronous ? defaultSync : defaultAsync;
}
let readdirOpts = {
    withFileTypes: !0
}, walkAsync = (state, crawlPath, directoryPath, currentDepth, callback$1)=>{
    if (state.queue.enqueue(), currentDepth < 0) return state.queue.dequeue(null, state);
    let { fs } = state;
    state.visited.push(crawlPath), state.counts.directories++, fs.readdir(crawlPath || ".", readdirOpts, (error, entries = [])=>{
        callback$1(entries, directoryPath, currentDepth), state.queue.dequeue(state.options.suppressErrors ? null : error, state);
    });
}, walkSync = (state, crawlPath, directoryPath, currentDepth, callback$1)=>{
    let { fs } = state;
    if (currentDepth < 0) return;
    state.visited.push(crawlPath), state.counts.directories++;
    let entries = [];
    try {
        entries = fs.readdirSync(crawlPath || ".", readdirOpts);
    } catch (e) {
        if (!state.options.suppressErrors) throw e;
    }
    callback$1(entries, directoryPath, currentDepth);
};
function build(isSynchronous) {
    return isSynchronous ? walkSync : walkAsync;
}
var Queue = class {
    count = 0;
    constructor(onQueueEmpty){
        this.onQueueEmpty = onQueueEmpty;
    }
    enqueue() {
        return this.count++, this.count;
    }
    dequeue(error, output) {
        this.onQueueEmpty && (--this.count <= 0 || error) && (this.onQueueEmpty(error, output), error && (output.controller.abort(), this.onQueueEmpty = void 0));
    }
}, Counter = class {
    _files = 0;
    _directories = 0;
    set files(num) {
        this._files = num;
    }
    get files() {
        return this._files;
    }
    set directories(num) {
        this._directories = num;
    }
    get directories() {
        return this._directories;
    }
    get dirs() {
        return this._directories;
    }
}, Aborter = class {
    aborted = !1;
    abort() {
        this.aborted = !0;
    }
}, Walker = class {
    root;
    isSynchronous;
    state;
    joinPath;
    pushDirectory;
    pushFile;
    getArray;
    groupFiles;
    resolveSymlink;
    walkDirectory;
    callbackInvoker;
    constructor(root, options, callback$1){
        this.isSynchronous = !callback$1, this.callbackInvoker = build$1(options, this.isSynchronous), this.root = normalizePath(root, options), this.state = {
            root: isRootDirectory(this.root) ? this.root : this.root.slice(0, -1),
            paths: [
                ""
            ].slice(0, 0),
            groups: [],
            counts: new Counter(),
            options,
            queue: new Queue((error, state)=>this.callbackInvoker(state, error, callback$1)),
            symlinks: new Map(),
            visited: [
                ""
            ].slice(0, 0),
            controller: new Aborter(),
            fs: options.fs || __rspack_external_fs
        }, this.joinPath = build$7(this.root, options), this.pushDirectory = build$6(this.root, options), this.pushFile = build$5(options), this.getArray = build$4(options), this.groupFiles = build$3(options), this.resolveSymlink = build$2(options, this.isSynchronous), this.walkDirectory = build(this.isSynchronous);
    }
    start() {
        return this.pushDirectory(this.root, this.state.paths, this.state.options.filters), this.walkDirectory(this.state, this.root, this.root, this.state.options.maxDepth, this.walk), this.isSynchronous ? this.callbackInvoker(this.state, null) : null;
    }
    walk = (entries, directoryPath, depth)=>{
        let { paths, options: { filters, resolveSymlinks: resolveSymlinks$1, excludeSymlinks, exclude, maxFiles, signal, useRealPaths, pathSeparator }, controller } = this.state;
        if (controller.aborted || signal && signal.aborted || maxFiles && paths.length > maxFiles) return;
        let files = this.getArray(this.state.paths);
        for(let i = 0; i < entries.length; ++i){
            let entry = entries[i];
            if (entry.isFile() || entry.isSymbolicLink() && !resolveSymlinks$1 && !excludeSymlinks) {
                let filename = this.joinPath(entry.name, directoryPath);
                this.pushFile(filename, files, this.state.counts, filters);
            } else if (entry.isDirectory()) {
                let path = joinDirectoryPath(entry.name, directoryPath, this.state.options.pathSeparator);
                if (exclude && exclude(entry.name, path)) continue;
                this.pushDirectory(path, paths, filters), this.walkDirectory(this.state, path, path, depth - 1, this.walk);
            } else if (this.resolveSymlink && entry.isSymbolicLink()) {
                let path = directoryPath + entry.name;
                this.resolveSymlink(path, this.state, (stat, resolvedPath)=>{
                    if (stat.isDirectory()) resolvedPath = normalizePath(resolvedPath, this.state.options), exclude && exclude(entry.name, useRealPaths ? resolvedPath : path + pathSeparator) || this.walkDirectory(this.state, resolvedPath, useRealPaths ? resolvedPath : path + pathSeparator, depth - 1, this.walk);
                    else {
                        let filename = basename(resolvedPath = useRealPaths ? resolvedPath : path), directoryPath$1 = normalizePath(dirname(resolvedPath), this.state.options);
                        resolvedPath = this.joinPath(filename, directoryPath$1), this.pushFile(resolvedPath, files, this.state.counts, filters);
                    }
                });
            }
        }
        this.groupFiles(this.state.groups, directoryPath, files);
    };
};
function promise(root, options) {
    return new Promise((resolve$1, reject)=>{
        callback(root, options, (err, output)=>{
            if (err) return reject(err);
            resolve$1(output);
        });
    });
}
function callback(root, options, callback$1) {
    new Walker(root, options, callback$1).start();
}
function sync(root, options) {
    return new Walker(root, options).start();
}
var APIBuilder = class {
    constructor(root, options){
        this.root = root, this.options = options;
    }
    withPromise() {
        return promise(this.root, this.options);
    }
    withCallback(cb) {
        callback(this.root, this.options, cb);
    }
    sync() {
        return sync(this.root, this.options);
    }
};
let pm = null;
try {
    __require.resolve("picomatch"), pm = __require("picomatch");
} catch  {}
var Builder = class {
    globCache = {};
    options = {
        maxDepth: 1 / 0,
        suppressErrors: !0,
        pathSeparator: sep,
        filters: []
    };
    globFunction;
    constructor(options){
        this.options = {
            ...this.options,
            ...options
        }, this.globFunction = this.options.globFunction;
    }
    group() {
        return this.options.group = !0, this;
    }
    withPathSeparator(separator) {
        return this.options.pathSeparator = separator, this;
    }
    withBasePath() {
        return this.options.includeBasePath = !0, this;
    }
    withRelativePaths() {
        return this.options.relativePaths = !0, this;
    }
    withDirs() {
        return this.options.includeDirs = !0, this;
    }
    withMaxDepth(depth) {
        return this.options.maxDepth = depth, this;
    }
    withMaxFiles(limit) {
        return this.options.maxFiles = limit, this;
    }
    withFullPaths() {
        return this.options.resolvePaths = !0, this.options.includeBasePath = !0, this;
    }
    withErrors() {
        return this.options.suppressErrors = !1, this;
    }
    withSymlinks({ resolvePaths = !0 } = {}) {
        return this.options.resolveSymlinks = !0, this.options.useRealPaths = resolvePaths, this.withFullPaths();
    }
    withAbortSignal(signal) {
        return this.options.signal = signal, this;
    }
    normalize() {
        return this.options.normalizePath = !0, this;
    }
    filter(predicate) {
        return this.options.filters.push(predicate), this;
    }
    onlyDirs() {
        return this.options.excludeFiles = !0, this.options.includeDirs = !0, this;
    }
    exclude(predicate) {
        return this.options.exclude = predicate, this;
    }
    onlyCounts() {
        return this.options.onlyCounts = !0, this;
    }
    crawl(root) {
        return new APIBuilder(root || ".", this.options);
    }
    withGlobFunction(fn) {
        return this.globFunction = fn, this;
    }
    crawlWithOptions(root, options) {
        return this.options = {
            ...this.options,
            ...options
        }, new APIBuilder(root || ".", this.options);
    }
    glob(...patterns) {
        return this.globFunction ? this.globWithOptions(patterns) : this.globWithOptions(patterns, {
            dot: !0
        });
    }
    globWithOptions(patterns, ...options) {
        let globFn = this.globFunction || pm;
        if (!globFn) throw Error("Please specify a glob function to use glob matching.");
        var isMatch = this.globCache[patterns.join("\0")];
        return isMatch || (isMatch = globFn(patterns, ...options), this.globCache[patterns.join("\0")] = isMatch), this.options.filters.push((path)=>isMatch(path)), this;
    }
};
let picomatch = __webpack_require__("../../node_modules/.pnpm/picomatch@4.0.3/node_modules/picomatch/index.js"), isReadonlyArray = Array.isArray, isWin = "win32" === process.platform, ONLY_PARENT_DIRECTORIES = /^(\/?\.\.)+$/;
function getPartialMatcher(patterns, options = {}) {
    let patternsCount = patterns.length, patternsParts = Array(patternsCount), matchers = Array(patternsCount), globstarEnabled = !options.noglobstar;
    for(let i = 0; i < patternsCount; i++){
        let parts = splitPattern(patterns[i]);
        patternsParts[i] = parts;
        let partsCount = parts.length, partMatchers = Array(partsCount);
        for(let j = 0; j < partsCount; j++)partMatchers[j] = picomatch(parts[j], options);
        matchers[i] = partMatchers;
    }
    return (input)=>{
        let inputParts = input.split("/");
        if (".." === inputParts[0] && ONLY_PARENT_DIRECTORIES.test(input)) return !0;
        for(let i = 0; i < patterns.length; i++){
            let patternParts = patternsParts[i], matcher = matchers[i], inputPatternCount = inputParts.length, minParts = Math.min(inputPatternCount, patternParts.length), j = 0;
            for(; j < minParts;){
                let part = patternParts[j];
                if (part.includes("/")) return !0;
                if (!matcher[j](inputParts[j])) break;
                if (globstarEnabled && "**" === part) return !0;
                j++;
            }
            if (j === inputPatternCount) return !0;
        }
        return !1;
    };
}
let WIN32_ROOT_DIR = /^[A-Z]:\/$/i, isRoot = isWin ? (p)=>WIN32_ROOT_DIR.test(p) : (p)=>"/" === p;
function buildFormat(cwd, root, absolute) {
    if (cwd === root || root.startsWith(`${cwd}/`)) {
        if (absolute) {
            let start = isRoot(cwd) ? cwd.length : cwd.length + 1;
            return (p, isDir)=>p.slice(start, isDir ? -1 : void 0) || ".";
        }
        let prefix = root.slice(cwd.length + 1);
        return prefix ? (p, isDir)=>{
            if ("." === p) return prefix;
            let result = `${prefix}/${p}`;
            return isDir ? result.slice(0, -1) : result;
        } : (p, isDir)=>isDir && "." !== p ? p.slice(0, -1) : p;
    }
    return absolute ? (p)=>posix.relative(cwd, p) || "." : (p)=>posix.relative(cwd, `${root}/${p}`) || ".";
}
function buildRelative(cwd, root) {
    if (root.startsWith(`${cwd}/`)) {
        let prefix = root.slice(cwd.length + 1);
        return (p)=>`${prefix}/${p}`;
    }
    return (p)=>{
        let result = posix.relative(cwd, `${root}/${p}`);
        return p.endsWith("/") && "" !== result ? `${result}/` : result || ".";
    };
}
let splitPatternOptions = {
    parts: !0
};
function splitPattern(path$1) {
    var _result$parts;
    let result = picomatch.scan(path$1, splitPatternOptions);
    return (null == (_result$parts = result.parts) ? void 0 : _result$parts.length) ? result.parts : [
        path$1
    ];
}
let POSIX_UNESCAPED_GLOB_SYMBOLS = /(?<!\\)([()[\]{}*?|]|^!|[!+@](?=\()|\\(?![()[\]{}!*+?@|]))/g, WIN32_UNESCAPED_GLOB_SYMBOLS = /(?<!\\)([()[\]{}]|^!|[!+@](?=\())/g, escapePath = isWin ? (path$1)=>path$1.replace(WIN32_UNESCAPED_GLOB_SYMBOLS, "\\$&") : (path$1)=>path$1.replace(POSIX_UNESCAPED_GLOB_SYMBOLS, "\\$&");
function isDynamicPattern(pattern, options) {
    if ((null == options ? void 0 : options.caseSensitiveMatch) === !1) return !0;
    let scan = picomatch.scan(pattern);
    return scan.isGlob || scan.negated;
}
function log(...tasks) {
    console.log(`[tinyglobby ${new Date().toLocaleTimeString("es")}]`, ...tasks);
}
let PARENT_DIRECTORY = /^(\/?\.\.)+/, ESCAPING_BACKSLASHES = /\\(?=[()[\]{}!*+?@|])/g, BACKSLASHES = /\\/g;
function normalizePattern(pattern, expandDirectories, cwd, props, isIgnore) {
    let result = pattern;
    pattern.endsWith("/") && (result = pattern.slice(0, -1)), !result.endsWith("*") && expandDirectories && (result += "/**");
    let escapedCwd = escapePath(cwd);
    result = path_0.isAbsolute(result.replace(ESCAPING_BACKSLASHES, "")) ? posix.relative(escapedCwd, result) : posix.normalize(result);
    let parentDirectoryMatch = PARENT_DIRECTORY.exec(result), parts = splitPattern(result);
    if (null == parentDirectoryMatch ? void 0 : parentDirectoryMatch[0]) {
        let n = (parentDirectoryMatch[0].length + 1) / 3, i = 0, cwdParts = escapedCwd.split("/");
        for(; i < n && parts[i + n] === cwdParts[cwdParts.length + i - n];)result = result.slice(0, (n - i - 1) * 3) + result.slice((n - i) * 3 + parts[i + n].length + 1) || ".", i++;
        let potentialRoot = posix.join(cwd, parentDirectoryMatch[0].slice(3 * i));
        !potentialRoot.startsWith(".") && props.root.length > potentialRoot.length && (props.root = potentialRoot, props.depthOffset = -n + i);
    }
    if (!isIgnore && props.depthOffset >= 0) {
        null != props.commonPath || (props.commonPath = parts);
        let newCommonPath = [], length = Math.min(props.commonPath.length, parts.length);
        for(let i = 0; i < length; i++){
            let part = parts[i];
            if ("**" === part && !parts[i + 1]) {
                newCommonPath.pop();
                break;
            }
            if (part !== props.commonPath[i] || isDynamicPattern(part) || i === parts.length - 1) break;
            newCommonPath.push(part);
        }
        props.depthOffset = newCommonPath.length, props.commonPath = newCommonPath, props.root = newCommonPath.length > 0 ? posix.join(cwd, ...newCommonPath) : cwd;
    }
    return result;
}
function processPatterns({ patterns = [
    "**/*"
], ignore = [], expandDirectories = !0 }, cwd, props) {
    "string" == typeof patterns && (patterns = [
        patterns
    ]), "string" == typeof ignore && (ignore = [
        ignore
    ]);
    let matchPatterns = [], ignorePatterns = [];
    for (let pattern of ignore)pattern && ("!" !== pattern[0] || "(" === pattern[1]) && ignorePatterns.push(normalizePattern(pattern, expandDirectories, cwd, props, !0));
    for (let pattern of patterns)pattern && ("!" !== pattern[0] || "(" === pattern[1] ? matchPatterns.push(normalizePattern(pattern, expandDirectories, cwd, props, !1)) : ("!" !== pattern[1] || "(" === pattern[2]) && ignorePatterns.push(normalizePattern(pattern.slice(1), expandDirectories, cwd, props, !0)));
    return {
        match: matchPatterns,
        ignore: ignorePatterns
    };
}
function formatPaths(paths, relative) {
    for(let i = paths.length - 1; i >= 0; i--){
        let path$1 = paths[i];
        paths[i] = relative(path$1);
    }
    return paths;
}
function normalizeCwd(cwd) {
    return cwd ? cwd instanceof URL ? fileURLToPath(cwd).replace(BACKSLASHES, "/") : path_0.resolve(cwd).replace(BACKSLASHES, "/") : process.cwd().replace(BACKSLASHES, "/");
}
function getCrawler(patterns, inputOptions = {}) {
    let options = process.env.TINYGLOBBY_DEBUG ? {
        ...inputOptions,
        debug: !0
    } : inputOptions, cwd = normalizeCwd(options.cwd);
    if (options.debug && log("globbing with:", {
        patterns,
        options,
        cwd
    }), Array.isArray(patterns) && 0 === patterns.length) return [
        {
            sync: ()=>[],
            withPromise: async ()=>[]
        },
        !1
    ];
    let props = {
        root: cwd,
        commonPath: null,
        depthOffset: 0
    }, processed = processPatterns({
        ...options,
        patterns
    }, cwd, props);
    options.debug && log("internal processing patterns:", processed);
    let matchOptions = {
        dot: options.dot,
        nobrace: !1 === options.braceExpansion,
        nocase: !1 === options.caseSensitiveMatch,
        noextglob: !1 === options.extglob,
        noglobstar: !1 === options.globstar,
        posix: !0
    }, matcher = picomatch(processed.match, {
        ...matchOptions,
        ignore: processed.ignore
    }), ignore = picomatch(processed.ignore, matchOptions), partialMatcher = getPartialMatcher(processed.match, matchOptions), format = buildFormat(cwd, props.root, options.absolute), formatExclude = options.absolute ? format : buildFormat(cwd, props.root, !0), fdirOptions = {
        filters: [
            options.debug ? (p, isDirectory)=>{
                let path$1 = format(p, isDirectory), matches = matcher(path$1);
                return matches && log(`matched ${path$1}`), matches;
            } : (p, isDirectory)=>matcher(format(p, isDirectory))
        ],
        exclude: options.debug ? (_, p)=>{
            let relativePath = formatExclude(p, !0), skipped = "." !== relativePath && !partialMatcher(relativePath) || ignore(relativePath);
            return skipped ? log(`skipped ${p}`) : log(`crawling ${p}`), skipped;
        } : (_, p)=>{
            let relativePath = formatExclude(p, !0);
            return "." !== relativePath && !partialMatcher(relativePath) || ignore(relativePath);
        },
        fs: options.fs ? {
            readdir: options.fs.readdir || fs_0.readdir,
            readdirSync: options.fs.readdirSync || fs_0.readdirSync,
            realpath: options.fs.realpath || fs_0.realpath,
            realpathSync: options.fs.realpathSync || fs_0.realpathSync,
            stat: options.fs.stat || fs_0.stat,
            statSync: options.fs.statSync || fs_0.statSync
        } : void 0,
        pathSeparator: "/",
        relativePaths: !0,
        resolveSymlinks: !0,
        signal: options.signal
    };
    void 0 !== options.deep && (fdirOptions.maxDepth = Math.round(options.deep - props.depthOffset)), options.absolute && (fdirOptions.relativePaths = !1, fdirOptions.resolvePaths = !0, fdirOptions.includeBasePath = !0), !1 === options.followSymbolicLinks && (fdirOptions.resolveSymlinks = !1, fdirOptions.excludeSymlinks = !0), options.onlyDirectories ? (fdirOptions.excludeFiles = !0, fdirOptions.includeDirs = !0) : !1 === options.onlyFiles && (fdirOptions.includeDirs = !0), props.root = props.root.replace(BACKSLASHES, "");
    let root = props.root;
    options.debug && log("internal properties:", props);
    let relative = cwd !== root && !options.absolute && buildRelative(cwd, props.root);
    return [
        new Builder(fdirOptions).crawl(root),
        relative
    ];
}
async function glob(patternsOrOptions, options) {
    if (patternsOrOptions && (null == options ? void 0 : options.patterns)) throw Error("Cannot pass patterns as both an argument and an option");
    let isModern = isReadonlyArray(patternsOrOptions) || "string" == typeof patternsOrOptions, opts = isModern ? options : patternsOrOptions, [crawler, relative] = getCrawler(isModern ? patternsOrOptions : patternsOrOptions.patterns, opts);
    return relative ? formatPaths(await crawler.withPromise(), relative) : crawler.withPromise();
}
function globSync(patternsOrOptions, options) {
    if (patternsOrOptions && (null == options ? void 0 : options.patterns)) throw Error("Cannot pass patterns as both an argument and an option");
    let isModern = isReadonlyArray(patternsOrOptions) || "string" == typeof patternsOrOptions, opts = isModern ? options : patternsOrOptions, [crawler, relative] = getCrawler(isModern ? patternsOrOptions : patternsOrOptions.patterns, opts);
    return relative ? formatPaths(crawler.sync(), relative) : crawler.sync();
}
export { glob, globSync };
