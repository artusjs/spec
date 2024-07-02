!(function () {
  'use strict';
  try {
    self['workbox:core:7.0.0'] && _();
  } catch (e) {}
  const e = {
      'invalid-value': ({ paramName: e, validValueDescription: t, value: r }) => {
        if (!e || !t) throw new Error("Unexpected input to 'invalid-value' error.");
        return `The '${e}' parameter was given a value with an unexpected value. ${t} Received a value of ${JSON.stringify(
          r
        )}.`;
      },
      'not-an-array': ({ moduleName: e, className: t, funcName: r, paramName: a }) => {
        if (!(e && t && r && a)) throw new Error("Unexpected input to 'not-an-array' error.");
        return `The parameter '${a}' passed into '${e}.${t}.${r}()' must be an array.`;
      },
      'incorrect-type': ({
        expectedType: e,
        paramName: t,
        moduleName: r,
        className: a,
        funcName: s,
      }) => {
        if (!(e && t && r && s)) throw new Error("Unexpected input to 'incorrect-type' error.");
        return `The parameter '${t}' passed into '${r}.${
          a ? `${a}.` : ''
        }${s}()' must be of type ${e}.`;
      },
      'incorrect-class': ({
        expectedClassName: e,
        paramName: t,
        moduleName: r,
        className: a,
        funcName: s,
        isReturnValueProblem: n,
      }) => {
        if (!e || !r || !s) throw new Error("Unexpected input to 'incorrect-class' error.");
        const o = a ? `${a}.` : '';
        return n
          ? `The return value from '${r}.${o}${s}()' must be an instance of class ${e}.`
          : `The parameter '${t}' passed into '${r}.${o}${s}()' must be an instance of class ${e}.`;
      },
      'missing-a-method': ({
        expectedMethod: e,
        paramName: t,
        moduleName: r,
        className: a,
        funcName: s,
      }) => {
        if (!(e && t && r && a && s))
          throw new Error("Unexpected input to 'missing-a-method' error.");
        return `${r}.${a}.${s}() expected the '${t}' parameter to expose a '${e}' method.`;
      },
      'add-to-cache-list-unexpected-type': ({ entry: e }) =>
        `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(
          e
        )}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,
      'add-to-cache-list-conflicting-entries': ({ firstEntry: e, secondEntry: t }) => {
        if (!e || !t)
          throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");
        return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
      },
      'plugin-error-request-will-fetch': ({ thrownErrorMessage: e }) => {
        if (!e) throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");
        return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${e}'.`;
      },
      'invalid-cache-name': ({ cacheNameId: e, value: t }) => {
        if (!e) throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");
        return `You must provide a name containing at least one character for setCacheDetails({${e}: '...'}). Received a value of '${JSON.stringify(
          t
        )}'`;
      },
      'unregister-route-but-not-found-with-method': ({ method: e }) => {
        if (!e)
          throw new Error(
            "Unexpected input to 'unregister-route-but-not-found-with-method' error."
          );
        return `The route you're trying to unregister was not  previously registered for the method type '${e}'.`;
      },
      'unregister-route-route-not-registered': () =>
        "The route you're trying to unregister was not previously registered.",
      'queue-replay-failed': ({ name: e }) => `Replaying the background sync queue '${e}' failed.`,
      'duplicate-queue-name': ({ name: e }) =>
        `The Queue name '${e}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,
      'expired-test-without-max-age': ({ methodName: e, paramName: t }) =>
        `The '${e}()' method can only be used when the '${t}' is used in the constructor.`,
      'unsupported-route-type': ({ moduleName: e, className: t, funcName: r, paramName: a }) =>
        `The supplied '${a}' parameter was an unsupported type. Please check the docs for ${e}.${t}.${r} for valid input types.`,
      'not-array-of-class': ({
        value: e,
        expectedClass: t,
        moduleName: r,
        className: a,
        funcName: s,
        paramName: n,
      }) =>
        `The supplied '${n}' parameter must be an array of '${t}' objects. Received '${JSON.stringify(
          e
        )},'. Please check the call to ${r}.${a}.${s}() to fix the issue.`,
      'max-entries-or-age-required': ({ moduleName: e, className: t, funcName: r }) =>
        `You must define either config.maxEntries or config.maxAgeSecondsin ${e}.${t}.${r}`,
      'statuses-or-headers-required': ({ moduleName: e, className: t, funcName: r }) =>
        `You must define either config.statuses or config.headersin ${e}.${t}.${r}`,
      'invalid-string': ({ moduleName: e, funcName: t, paramName: r }) => {
        if (!r || !e || !t) throw new Error("Unexpected input to 'invalid-string' error.");
        return `When using strings, the '${r}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${e}.${t}() for more info.`;
      },
      'channel-name-required': () =>
        'You must provide a channelName to construct a BroadcastCacheUpdate instance.',
      'invalid-responses-are-same-args': () =>
        'The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.',
      'expire-custom-caches-only': () =>
        "You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.",
      'unit-must-be-bytes': ({ normalizedRangeHeader: e }) => {
        if (!e) throw new Error("Unexpected input to 'unit-must-be-bytes' error.");
        return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${e}"`;
      },
      'single-range-only': ({ normalizedRangeHeader: e }) => {
        if (!e) throw new Error("Unexpected input to 'single-range-only' error.");
        return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${e}"`;
      },
      'invalid-range-values': ({ normalizedRangeHeader: e }) => {
        if (!e) throw new Error("Unexpected input to 'invalid-range-values' error.");
        return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${e}"`;
      },
      'no-range-header': () => 'No Range header was found in the Request provided.',
      'range-not-satisfiable': ({ size: e, start: t, end: r }) =>
        `The start (${t}) and end (${r}) values in the Range are not satisfiable by the cached response, which is ${e} bytes.`,
      'attempt-to-cache-non-get-request': ({ url: e, method: t }) =>
        `Unable to cache '${e}' because it is a '${t}' request and only 'GET' requests can be cached.`,
      'cache-put-with-no-response': ({ url: e }) =>
        `There was an attempt to cache '${e}' but the response was not defined.`,
      'no-response': ({ url: e, error: t }) => {
        let r = `The strategy could not generate a response for '${e}'.`;
        return t && (r += ` The underlying error is ${t}.`), r;
      },
      'bad-precaching-response': ({ url: e, status: t }) =>
        `The precaching request for '${e}' failed` + (t ? ` with an HTTP status of ${t}.` : '.'),
      'non-precached-url': ({ url: e }) =>
        `createHandlerBoundToURL('${e}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,
      'add-to-cache-list-conflicting-integrities': ({ url: e }) =>
        `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e} with different integrity values. Please remove one of them.`,
      'missing-precache-entry': ({ cacheName: e, url: t }) =>
        `Unable to find a precached response in ${e} for ${t}.`,
      'cross-origin-copy-response': ({ origin: e }) =>
        `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${e}.`,
      'opaque-streams-source': ({ type: e }) => {
        const t = `One of the workbox-streams sources resulted in an '${e}' response.`;
        return 'opaqueredirect' === e
          ? `${t} Please do not use a navigation request that results in a redirect as a source.`
          : `${t} Please ensure your sources are CORS-enabled.`;
      },
    },
    t = (t, r = {}) => {
      const a = e[t];
      if (!a) throw new Error(`Unable to find message for code '${t}'.`);
      return a(r);
    };
  class r extends Error {
    constructor(e, r) {
      super(t(e, r)), (this.name = e), (this.details = r);
    }
  }
  const a = (e, t, a) => {
      if ('function' !== typeof e[t]) throw ((a.expectedMethod = t), new r('missing-a-method', a));
    },
    s = (e, t) => {
      if (!Array.isArray(e)) throw new r('not-an-array', t);
    },
    n = (e, t, a) => {
      if (!(e instanceof t)) throw ((a.expectedClassName = t.name), new r('incorrect-class', a));
    },
    o = (e, t, a) => {
      if (!t.includes(e))
        throw (
          ((a.validValueDescription = `Valid values are ${JSON.stringify(t)}.`),
          new r('invalid-value', a))
        );
    },
    i = (e, t, a) => {
      if (typeof e !== t) throw ((a.expectedType = t), new r('incorrect-type', a));
    },
    c = (() => {
      '__WB_DISABLE_DEV_LOGS' in globalThis || (self.__WB_DISABLE_DEV_LOGS = !1);
      let e = !1;
      const t = {
          debug: '#7f8c8d',
          log: '#2ecc71',
          warn: '#f39c12',
          error: '#c0392b',
          groupCollapsed: '#3498db',
          groupEnd: null,
        },
        r = function (r, a) {
          if (self.__WB_DISABLE_DEV_LOGS) return;
          if ('groupCollapsed' === r && /^((?!chrome|android).)*safari/i.test(navigator.userAgent))
            return void console[r](...a);
          const s = e
            ? []
            : [
                '%cworkbox',
                [
                  `background: ${t[r]}`,
                  'border-radius: 0.5em',
                  'color: white',
                  'font-weight: bold',
                  'padding: 2px 0.5em',
                ].join(';'),
              ];
          console[r](...s, ...a), 'groupCollapsed' === r && (e = !0), 'groupEnd' === r && (e = !1);
        },
        a = {},
        s = Object.keys(t);
      for (const e of s) {
        const t = e;
        a[t] = (...e) => {
          r(t, e);
        };
      }
      return a;
    })(),
    l = {
      googleAnalytics: 'googleAnalytics',
      precache: 'precache-v2',
      prefix: 'workbox',
      runtime: 'runtime',
      suffix: 'undefined' != typeof registration ? registration.scope : '',
    },
    h = (e) => [l.prefix, e, l.suffix].filter((e) => e && e.length > 0).join('-'),
    u = (e) => e || h(l.precache),
    d = (e) => e || h(l.runtime),
    p = (e) =>
      new URL(String(e), location.href).href.replace(new RegExp(`^${location.origin}`), '');
  function f(e, t) {
    const r = new URL(e);
    for (const e of t) r.searchParams.delete(e);
    return r.href;
  }
  class g {
    constructor() {
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  }
  const m = new Set();
  try {
    self['workbox:strategies:7.0.0'] && _();
  } catch (e) {}
  function w(e) {
    return 'string' == typeof e ? new Request(e) : e;
  }
  class y {
    constructor(e, t) {
      (this._cacheKeys = {}),
        n(t.event, ExtendableEvent, {
          moduleName: 'workbox-strategies',
          className: 'StrategyHandler',
          funcName: 'constructor',
          paramName: 'options.event',
        }),
        Object.assign(this, t),
        (this.event = t.event),
        (this._strategy = e),
        (this._handlerDeferred = new g()),
        (this._extendLifetimePromises = []),
        (this._plugins = [...e.plugins]),
        (this._pluginStateMap = new Map());
      for (const e of this._plugins) this._pluginStateMap.set(e, {});
      this.event.waitUntil(this._handlerDeferred.promise);
    }
    async fetch(e) {
      const { event: t } = this;
      let a = w(e);
      if ('navigate' === a.mode && t instanceof FetchEvent && t.preloadResponse) {
        const e = await t.preloadResponse;
        if (e) return c.log(`Using a preloaded navigation response for '${p(a.url)}'`), e;
      }
      const s = this.hasCallback('fetchDidFail') ? a.clone() : null;
      try {
        for (const e of this.iterateCallbacks('requestWillFetch'))
          a = await e({ request: a.clone(), event: t });
      } catch (e) {
        if (e instanceof Error)
          throw new r('plugin-error-request-will-fetch', { thrownErrorMessage: e.message });
      }
      const n = a.clone();
      try {
        let e;
        (e = await fetch(a, 'navigate' === a.mode ? void 0 : this._strategy.fetchOptions)),
          c.debug(
            `Network request for '${p(a.url)}' returned a response with status '${e.status}'.`
          );
        for (const r of this.iterateCallbacks('fetchDidSucceed'))
          e = await r({ event: t, request: n, response: e });
        return e;
      } catch (e) {
        throw (
          (c.log(`Network request for '${p(a.url)}' threw an error.`, e),
          s &&
            (await this.runCallbacks('fetchDidFail', {
              error: e,
              event: t,
              originalRequest: s.clone(),
              request: n.clone(),
            })),
          e)
        );
      }
    }
    async fetchAndCachePut(e) {
      const t = await this.fetch(e),
        r = t.clone();
      return this.waitUntil(this.cachePut(e, r)), t;
    }
    async cacheMatch(e) {
      const t = w(e);
      let r;
      const { cacheName: a, matchOptions: s } = this._strategy,
        n = await this.getCacheKey(t, 'read'),
        o = Object.assign(Object.assign({}, s), { cacheName: a });
      (r = await caches.match(n, o)),
        r
          ? c.debug(`Found a cached response in '${a}'.`)
          : c.debug(`No cached response found in '${a}'.`);
      for (const e of this.iterateCallbacks('cachedResponseWillBeUsed'))
        r =
          (await e({
            cacheName: a,
            matchOptions: s,
            cachedResponse: r,
            request: n,
            event: this.event,
          })) || void 0;
      return r;
    }
    async cachePut(e, t) {
      const a = w(e);
      var s;
      await ((s = 0), new Promise((e) => setTimeout(e, s)));
      const n = await this.getCacheKey(a, 'write');
      {
        if (n.method && 'GET' !== n.method)
          throw new r('attempt-to-cache-non-get-request', { url: p(n.url), method: n.method });
        const e = t.headers.get('Vary');
        e &&
          c.debug(
            `The response for ${p(
              n.url
            )} has a 'Vary: ${e}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`
          );
      }
      if (!t)
        throw (
          (c.error(`Cannot cache non-existent response for '${p(n.url)}'.`),
          new r('cache-put-with-no-response', { url: p(n.url) }))
        );
      const o = await this._ensureResponseSafeToCache(t);
      if (!o) return c.debug(`Response '${p(n.url)}' will not be cached.`, o), !1;
      const { cacheName: i, matchOptions: l } = this._strategy,
        h = await self.caches.open(i),
        u = this.hasCallback('cacheDidUpdate'),
        d = u
          ? await (async function (e, t, r, a) {
              const s = f(t.url, r);
              if (t.url === s) return e.match(t, a);
              const n = Object.assign(Object.assign({}, a), { ignoreSearch: !0 }),
                o = await e.keys(t, n);
              for (const t of o) if (s === f(t.url, r)) return e.match(t, a);
            })(h, n.clone(), ['__WB_REVISION__'], l)
          : null;
      c.debug(`Updating the '${i}' cache with a new Response for ${p(n.url)}.`);
      try {
        await h.put(n, u ? o.clone() : o);
      } catch (e) {
        if (e instanceof Error)
          throw (
            ('QuotaExceededError' === e.name &&
              (await (async function () {
                c.log(`About to run ${m.size} callbacks to clean up caches.`);
                for (const e of m) await e(), c.log(e, 'is complete.');
                c.log('Finished running callbacks.');
              })()),
            e)
          );
      }
      for (const e of this.iterateCallbacks('cacheDidUpdate'))
        await e({
          cacheName: i,
          oldResponse: d,
          newResponse: o.clone(),
          request: n,
          event: this.event,
        });
      return !0;
    }
    async getCacheKey(e, t) {
      const r = `${e.url} | ${t}`;
      if (!this._cacheKeys[r]) {
        let a = e;
        for (const e of this.iterateCallbacks('cacheKeyWillBeUsed'))
          a = w(await e({ mode: t, request: a, event: this.event, params: this.params }));
        this._cacheKeys[r] = a;
      }
      return this._cacheKeys[r];
    }
    hasCallback(e) {
      for (const t of this._strategy.plugins) if (e in t) return !0;
      return !1;
    }
    async runCallbacks(e, t) {
      for (const r of this.iterateCallbacks(e)) await r(t);
    }
    *iterateCallbacks(e) {
      for (const t of this._strategy.plugins)
        if ('function' == typeof t[e]) {
          const r = this._pluginStateMap.get(t),
            a = (a) => {
              const s = Object.assign(Object.assign({}, a), { state: r });
              return t[e](s);
            };
          yield a;
        }
    }
    waitUntil(e) {
      return this._extendLifetimePromises.push(e), e;
    }
    async doneWaiting() {
      let e;
      for (; (e = this._extendLifetimePromises.shift()); ) await e;
    }
    destroy() {
      this._handlerDeferred.resolve(null);
    }
    async _ensureResponseSafeToCache(e) {
      let t = e,
        r = !1;
      for (const e of this.iterateCallbacks('cacheWillUpdate'))
        if (
          ((t = (await e({ request: this.request, response: t, event: this.event })) || void 0),
          (r = !0),
          !t)
        )
          break;
      return (
        r ||
          (t && 200 !== t.status && (t = void 0),
          t &&
            200 !== t.status &&
            (0 === t.status
              ? c.warn(
                  `The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`
                )
              : c.debug(
                  `The response for '${this.request.url}' returned a status code of '${e.status}' and won't be cached as a result.`
                ))),
        t
      );
    }
  }
  class b {
    constructor(e = {}) {
      (this.cacheName = d(e.cacheName)),
        (this.plugins = e.plugins || []),
        (this.fetchOptions = e.fetchOptions),
        (this.matchOptions = e.matchOptions);
    }
    handle(e) {
      const [t] = this.handleAll(e);
      return t;
    }
    handleAll(e) {
      e instanceof FetchEvent && (e = { event: e, request: e.request });
      const t = e.event,
        r = 'string' == typeof e.request ? new Request(e.request) : e.request,
        a = 'params' in e ? e.params : void 0,
        s = new y(this, { event: t, request: r, params: a }),
        n = this._getResponse(s, r, t);
      return [n, this._awaitComplete(n, s, r, t)];
    }
    async _getResponse(e, t, a) {
      let s;
      await e.runCallbacks('handlerWillStart', { event: a, request: t });
      try {
        if (((s = await this._handle(t, e)), !s || 'error' === s.type))
          throw new r('no-response', { url: t.url });
      } catch (r) {
        if (r instanceof Error)
          for (const n of e.iterateCallbacks('handlerDidError'))
            if (((s = await n({ error: r, event: a, request: t })), s)) break;
        if (!s) throw r;
        c.log(
          `While responding to '${p(t.url)}', an ${
            r instanceof Error ? r.toString() : ''
          } error occurred. Using a fallback response provided by a handlerDidError plugin.`
        );
      }
      for (const r of e.iterateCallbacks('handlerWillRespond'))
        s = await r({ event: a, request: t, response: s });
      return s;
    }
    async _awaitComplete(e, t, r, a) {
      let s, n;
      try {
        s = await e;
      } catch (n) {}
      try {
        await t.runCallbacks('handlerDidRespond', { event: a, request: r, response: s }),
          await t.doneWaiting();
      } catch (e) {
        e instanceof Error && (n = e);
      }
      if (
        (await t.runCallbacks('handlerDidComplete', {
          event: a,
          request: r,
          response: s,
          error: n,
        }),
        t.destroy(),
        n)
      )
        throw n;
    }
  }
  const v = (e, t) => `Using ${e} to respond to '${p(t.url)}'`,
    R = (e) => {
      e &&
        (c.groupCollapsed('View the final response here.'),
        c.log(e || '[No response returned]'),
        c.groupEnd());
    },
    N = {
      cacheWillUpdate: async ({ response: e }) => (200 === e.status || 0 === e.status ? e : null),
    };
  class $ extends b {
    constructor(e = {}) {
      super(e), this.plugins.some((e) => 'cacheWillUpdate' in e) || this.plugins.unshift(N);
    }
    async _handle(e, t) {
      const a = [];
      n(e, Request, {
        moduleName: 'workbox-strategies',
        className: this.constructor.name,
        funcName: 'handle',
        paramName: 'request',
      });
      const s = t.fetchAndCachePut(e).catch(() => {});
      t.waitUntil(s);
      let o,
        i = await t.cacheMatch(e);
      if (i)
        a.push(
          `Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`
        );
      else {
        a.push(
          `No response found in the '${this.cacheName}' cache. Will wait for the network response.`
        );
        try {
          i = await s;
        } catch (e) {
          e instanceof Error && (o = e);
        }
      }
      c.groupCollapsed(v(this.constructor.name, e));
      for (const e of a) c.log(e);
      if ((R(i), c.groupEnd(), !i)) throw new r('no-response', { url: e.url, error: o });
      return i;
    }
  }
  function C(e, t) {
    const r = t();
    return e.waitUntil(r), r;
  }
  try {
    self['workbox:precaching:7.0.0'] && _();
  } catch (e) {}
  function x(e) {
    if (!e) throw new r('add-to-cache-list-unexpected-type', { entry: e });
    if ('string' == typeof e) {
      const t = new URL(e, location.href);
      return { cacheKey: t.href, url: t.href };
    }
    const { revision: t, url: a } = e;
    if (!a) throw new r('add-to-cache-list-unexpected-type', { entry: e });
    if (!t) {
      const e = new URL(a, location.href);
      return { cacheKey: e.href, url: e.href };
    }
    const s = new URL(a, location.href),
      n = new URL(a, location.href);
    return s.searchParams.set('__WB_REVISION__', t), { cacheKey: s.href, url: n.href };
  }
  class q {
    constructor() {
      (this.updatedURLs = []),
        (this.notUpdatedURLs = []),
        (this.handlerWillStart = async ({ request: e, state: t }) => {
          t && (t.originalRequest = e);
        }),
        (this.cachedResponseWillBeUsed = async ({ event: e, state: t, cachedResponse: r }) => {
          if (
            'install' === e.type &&
            t &&
            t.originalRequest &&
            t.originalRequest instanceof Request
          ) {
            const e = t.originalRequest.url;
            r ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e);
          }
          return r;
        });
    }
  }
  class T {
    constructor({ precacheController: e }) {
      (this.cacheKeyWillBeUsed = async ({ request: e, params: t }) => {
        const r =
          (null == t ? void 0 : t.cacheKey) || this._precacheController.getCacheKeyForURL(e.url);
        return r ? new Request(r, { headers: e.headers }) : e;
      }),
        (this._precacheController = e);
    }
  }
  function U(e) {
    const t = e.length;
    t > 0 &&
      (c.groupCollapsed(
        `During precaching cleanup, ${t} cached request${1 === t ? ' was' : 's were'} deleted.`
      ),
      ((e, t) => {
        c.groupCollapsed(e);
        for (const e of t) c.log(e);
        c.groupEnd();
      })('Deleted Cache Requests', e),
      c.groupEnd());
  }
  function k(e, t) {
    if (0 !== t.length) {
      c.groupCollapsed(e);
      for (const e of t) c.log(e);
      c.groupEnd();
    }
  }
  let E, L;
  async function P(e, t) {
    let a = null;
    if (e.url) {
      a = new URL(e.url).origin;
    }
    if (a !== self.location.origin) throw new r('cross-origin-copy-response', { origin: a });
    const s = e.clone(),
      n = { headers: new Headers(s.headers), status: s.status, statusText: s.statusText },
      o = (function () {
        if (void 0 === E) {
          const e = new Response('');
          if ('body' in e)
            try {
              new Response(e.body), (E = !0);
            } catch (e) {
              E = !1;
            }
          E = !1;
        }
        return E;
      })()
        ? s.body
        : await s.blob();
    return new Response(o, n);
  }
  class K extends b {
    constructor(e = {}) {
      (e.cacheName = u(e.cacheName)),
        super(e),
        (this._fallbackToNetwork = !1 !== e.fallbackToNetwork),
        this.plugins.push(K.copyRedirectedCacheableResponsesPlugin);
    }
    async _handle(e, t) {
      const r = await t.cacheMatch(e);
      return (
        r ||
        (t.event && 'install' === t.event.type
          ? await this._handleInstall(e, t)
          : await this._handleFetch(e, t))
      );
    }
    async _handleFetch(e, t) {
      let a;
      const s = t.params || {};
      if (!this._fallbackToNetwork)
        throw new r('missing-precache-entry', { cacheName: this.cacheName, url: e.url });
      {
        c.warn(
          `The precached response for ${p(e.url)} in ${
            this.cacheName
          } was not found. Falling back to the network.`
        );
        const r = s.integrity,
          n = e.integrity,
          o = !n || n === r;
        if (
          ((a = await t.fetch(
            new Request(e, { integrity: 'no-cors' !== e.mode ? n || r : void 0 })
          )),
          r && o && 'no-cors' !== e.mode)
        ) {
          this._useDefaultCacheabilityPluginIfNeeded();
          (await t.cachePut(e, a.clone())) &&
            c.log(`A response for ${p(e.url)} was used to "repair" the precache.`);
        }
      }
      {
        const r = s.cacheKey || (await t.getCacheKey(e, 'read'));
        c.groupCollapsed('Precaching is responding to: ' + p(e.url)),
          c.log(`Serving the precached url: ${p(r instanceof Request ? r.url : r)}`),
          c.groupCollapsed('View request details here.'),
          c.log(e),
          c.groupEnd(),
          c.groupCollapsed('View response details here.'),
          c.log(a),
          c.groupEnd(),
          c.groupEnd();
      }
      return a;
    }
    async _handleInstall(e, t) {
      this._useDefaultCacheabilityPluginIfNeeded();
      const a = await t.fetch(e);
      if (!(await t.cachePut(e, a.clone())))
        throw new r('bad-precaching-response', { url: e.url, status: a.status });
      return a;
    }
    _useDefaultCacheabilityPluginIfNeeded() {
      let e = null,
        t = 0;
      for (const [r, a] of this.plugins.entries())
        a !== K.copyRedirectedCacheableResponsesPlugin &&
          (a === K.defaultPrecacheCacheabilityPlugin && (e = r), a.cacheWillUpdate && t++);
      0 === t
        ? this.plugins.push(K.defaultPrecacheCacheabilityPlugin)
        : t > 1 && null !== e && this.plugins.splice(e, 1);
    }
  }
  (K.defaultPrecacheCacheabilityPlugin = {
    cacheWillUpdate: async ({ response: e }) => (!e || e.status >= 400 ? null : e),
  }),
    (K.copyRedirectedCacheableResponsesPlugin = {
      cacheWillUpdate: async ({ response: e }) => (e.redirected ? await P(e) : e),
    });
  class W {
    constructor({ cacheName: e, plugins: t = [], fallbackToNetwork: r = !0 } = {}) {
      (this._urlsToCacheKeys = new Map()),
        (this._urlsToCacheModes = new Map()),
        (this._cacheKeysToIntegrities = new Map()),
        (this._strategy = new K({
          cacheName: u(e),
          plugins: [...t, new T({ precacheController: this })],
          fallbackToNetwork: r,
        })),
        (this.install = this.install.bind(this)),
        (this.activate = this.activate.bind(this));
    }
    get strategy() {
      return this._strategy;
    }
    precache(e) {
      this.addToCacheList(e),
        this._installAndActiveListenersAdded ||
          (self.addEventListener('install', this.install),
          self.addEventListener('activate', this.activate),
          (this._installAndActiveListenersAdded = !0));
    }
    addToCacheList(e) {
      s(e, {
        moduleName: 'workbox-precaching',
        className: 'PrecacheController',
        funcName: 'addToCacheList',
        paramName: 'entries',
      });
      const t = [];
      for (const a of e) {
        'string' == typeof a ? t.push(a) : a && void 0 === a.revision && t.push(a.url);
        const { cacheKey: e, url: s } = x(a),
          n = 'string' != typeof a && a.revision ? 'reload' : 'default';
        if (this._urlsToCacheKeys.has(s) && this._urlsToCacheKeys.get(s) !== e)
          throw new r('add-to-cache-list-conflicting-entries', {
            firstEntry: this._urlsToCacheKeys.get(s),
            secondEntry: e,
          });
        if ('string' != typeof a && a.integrity) {
          if (
            this._cacheKeysToIntegrities.has(e) &&
            this._cacheKeysToIntegrities.get(e) !== a.integrity
          )
            throw new r('add-to-cache-list-conflicting-integrities', { url: s });
          this._cacheKeysToIntegrities.set(e, a.integrity);
        }
        if ((this._urlsToCacheKeys.set(s, e), this._urlsToCacheModes.set(s, n), t.length > 0)) {
          const e = `Workbox is precaching URLs without revision info: ${t.join(
            ', '
          )}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
          c.warn(e);
        }
      }
    }
    install(e) {
      return C(e, async () => {
        const t = new q();
        this.strategy.plugins.push(t);
        for (const [t, r] of this._urlsToCacheKeys) {
          const a = this._cacheKeysToIntegrities.get(r),
            s = this._urlsToCacheModes.get(t),
            n = new Request(t, { integrity: a, cache: s, credentials: 'same-origin' });
          await Promise.all(
            this.strategy.handleAll({ params: { cacheKey: r }, request: n, event: e })
          );
        }
        const { updatedURLs: r, notUpdatedURLs: a } = t;
        return (
          (function (e, t) {
            const r = e.length,
              a = t.length;
            if (r || a) {
              let s = `Precaching ${r} file${1 === r ? '' : 's'}.`;
              a > 0 && (s += ` ${a} file${1 === a ? ' is' : 's are'} already cached.`),
                c.groupCollapsed(s),
                k('View newly precached URLs.', e),
                k('View previously precached URLs.', t),
                c.groupEnd();
            }
          })(r, a),
          { updatedURLs: r, notUpdatedURLs: a }
        );
      });
    }
    activate(e) {
      return C(e, async () => {
        const e = await self.caches.open(this.strategy.cacheName),
          t = await e.keys(),
          r = new Set(this._urlsToCacheKeys.values()),
          a = [];
        for (const s of t) r.has(s.url) || (await e.delete(s), a.push(s.url));
        return U(a), { deletedURLs: a };
      });
    }
    getURLsToCacheKeys() {
      return this._urlsToCacheKeys;
    }
    getCachedURLs() {
      return [...this._urlsToCacheKeys.keys()];
    }
    getCacheKeyForURL(e) {
      const t = new URL(e, location.href);
      return this._urlsToCacheKeys.get(t.href);
    }
    getIntegrityForCacheKey(e) {
      return this._cacheKeysToIntegrities.get(e);
    }
    async matchPrecache(e) {
      const t = e instanceof Request ? e.url : e,
        r = this.getCacheKeyForURL(t);
      if (r) {
        return (await self.caches.open(this.strategy.cacheName)).match(r);
      }
    }
    createHandlerBoundToURL(e) {
      const t = this.getCacheKeyForURL(e);
      if (!t) throw new r('non-precached-url', { url: e });
      return (r) => (
        (r.request = new Request(e)),
        (r.params = Object.assign({ cacheKey: t }, r.params)),
        this.strategy.handle(r)
      );
    }
  }
  const S = () => (L || (L = new W()), L);
  try {
    self['workbox:routing:7.0.0'] && _();
  } catch (e) {}
  const O = ['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT'],
    A = (e) =>
      e && 'object' == typeof e
        ? (a(e, 'handle', {
            moduleName: 'workbox-routing',
            className: 'Route',
            funcName: 'constructor',
            paramName: 'handler',
          }),
          e)
        : (i(e, 'function', {
            moduleName: 'workbox-routing',
            className: 'Route',
            funcName: 'constructor',
            paramName: 'handler',
          }),
          { handle: e });
  class M {
    constructor(e, t, r = 'GET') {
      i(e, 'function', {
        moduleName: 'workbox-routing',
        className: 'Route',
        funcName: 'constructor',
        paramName: 'match',
      }),
        r && o(r, O, { paramName: 'method' }),
        (this.handler = A(t)),
        (this.match = e),
        (this.method = r);
    }
    setCatchHandler(e) {
      this.catchHandler = A(e);
    }
  }
  class D extends M {
    constructor(e, t, r) {
      n(e, RegExp, {
        moduleName: 'workbox-routing',
        className: 'RegExpRoute',
        funcName: 'constructor',
        paramName: 'pattern',
      });
      super(
        ({ url: t }) => {
          const r = e.exec(t.href);
          if (r) {
            if (t.origin === location.origin || 0 === r.index) return r.slice(1);
            c.debug(
              `The regular expression '${e.toString()}' only partially matched against the cross-origin URL '${t.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`
            );
          }
        },
        t,
        r
      );
    }
  }
  class I {
    constructor() {
      (this._routes = new Map()), (this._defaultHandlerMap = new Map());
    }
    get routes() {
      return this._routes;
    }
    addFetchListener() {
      self.addEventListener('fetch', (e) => {
        const { request: t } = e,
          r = this.handleRequest({ request: t, event: e });
        r && e.respondWith(r);
      });
    }
    addCacheListener() {
      self.addEventListener('message', (e) => {
        if (e.data && 'CACHE_URLS' === e.data.type) {
          const { payload: t } = e.data;
          c.debug('Caching URLs from the window', t.urlsToCache);
          const r = Promise.all(
            t.urlsToCache.map((t) => {
              'string' == typeof t && (t = [t]);
              const r = new Request(...t);
              return this.handleRequest({ request: r, event: e });
            })
          );
          e.waitUntil(r), e.ports && e.ports[0] && r.then(() => e.ports[0].postMessage(!0));
        }
      });
    }
    handleRequest({ request: e, event: t }) {
      n(e, Request, {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'handleRequest',
        paramName: 'options.request',
      });
      const r = new URL(e.url, location.href);
      if (!r.protocol.startsWith('http'))
        return void c.debug("Workbox Router only supports URLs that start with 'http'.");
      const a = r.origin === location.origin,
        { params: s, route: o } = this.findMatchingRoute({
          event: t,
          request: e,
          sameOrigin: a,
          url: r,
        });
      let i = o && o.handler;
      const l = [];
      i &&
        (l.push(['Found a route to handle this request:', o]),
        s && l.push(["Passing the following params to the route's handler:", s]));
      const h = e.method;
      if (
        (!i &&
          this._defaultHandlerMap.has(h) &&
          (l.push(`Failed to find a matching route. Falling back to the default handler for ${h}.`),
          (i = this._defaultHandlerMap.get(h))),
        !i)
      )
        return void c.debug(`No route found for: ${p(r)}`);
      let u;
      c.groupCollapsed(`Router is responding to: ${p(r)}`),
        l.forEach((e) => {
          Array.isArray(e) ? c.log(...e) : c.log(e);
        }),
        c.groupEnd();
      try {
        u = i.handle({ url: r, request: e, event: t, params: s });
      } catch (e) {
        u = Promise.reject(e);
      }
      const d = o && o.catchHandler;
      return (
        u instanceof Promise &&
          (this._catchHandler || d) &&
          (u = u.catch(async (a) => {
            if (d) {
              c.groupCollapsed(
                `Error thrown when responding to:  ${p(r)}. Falling back to route's Catch Handler.`
              ),
                c.error('Error thrown by:', o),
                c.error(a),
                c.groupEnd();
              try {
                return await d.handle({ url: r, request: e, event: t, params: s });
              } catch (e) {
                e instanceof Error && (a = e);
              }
            }
            if (this._catchHandler)
              return (
                c.groupCollapsed(
                  `Error thrown when responding to:  ${p(r)}. Falling back to global Catch Handler.`
                ),
                c.error('Error thrown by:', o),
                c.error(a),
                c.groupEnd(),
                this._catchHandler.handle({ url: r, request: e, event: t })
              );
            throw a;
          })),
        u
      );
    }
    findMatchingRoute({ url: e, sameOrigin: t, request: r, event: a }) {
      const s = this._routes.get(r.method) || [];
      for (const n of s) {
        let s;
        const o = n.match({ url: e, sameOrigin: t, request: r, event: a });
        if (o)
          return (
            o instanceof Promise &&
              c.warn(
                `While routing ${p(
                  e
                )}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`,
                n
              ),
            (s = o),
            ((Array.isArray(s) && 0 === s.length) ||
              (o.constructor === Object && 0 === Object.keys(o).length) ||
              'boolean' == typeof o) &&
              (s = void 0),
            { route: n, params: s }
          );
      }
      return {};
    }
    setDefaultHandler(e, t = 'GET') {
      this._defaultHandlerMap.set(t, A(e));
    }
    setCatchHandler(e) {
      this._catchHandler = A(e);
    }
    registerRoute(e) {
      i(e, 'object', {
        moduleName: 'workbox-routing',
        className: 'Router',
        funcName: 'registerRoute',
        paramName: 'route',
      }),
        a(e, 'match', {
          moduleName: 'workbox-routing',
          className: 'Router',
          funcName: 'registerRoute',
          paramName: 'route',
        }),
        i(e.handler, 'object', {
          moduleName: 'workbox-routing',
          className: 'Router',
          funcName: 'registerRoute',
          paramName: 'route',
        }),
        a(e.handler, 'handle', {
          moduleName: 'workbox-routing',
          className: 'Router',
          funcName: 'registerRoute',
          paramName: 'route.handler',
        }),
        i(e.method, 'string', {
          moduleName: 'workbox-routing',
          className: 'Router',
          funcName: 'registerRoute',
          paramName: 'route.method',
        }),
        this._routes.has(e.method) || this._routes.set(e.method, []),
        this._routes.get(e.method).push(e);
    }
    unregisterRoute(e) {
      if (!this._routes.has(e.method))
        throw new r('unregister-route-but-not-found-with-method', { method: e.method });
      const t = this._routes.get(e.method).indexOf(e);
      if (!(t > -1)) throw new r('unregister-route-route-not-registered');
      this._routes.get(e.method).splice(t, 1);
    }
  }
  let H;
  const F = () => (H || ((H = new I()), H.addFetchListener(), H.addCacheListener()), H);
  function j(e, t, a) {
    let s;
    if ('string' == typeof e) {
      const n = new URL(e, location.href);
      {
        if (!e.startsWith('/') && !e.startsWith('http'))
          throw new r('invalid-string', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
          });
        const t = e.startsWith('http') ? n.pathname : e,
          a = '[*:?+]';
        new RegExp(`${a}`).exec(t) &&
          c.debug(
            `The '$capture' parameter contains an Express-style wildcard character (${a}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`
          );
      }
      s = new M(
        ({ url: t }) => (
          t.pathname === n.pathname &&
            t.origin !== n.origin &&
            c.debug(
              `${e} only partially matches the cross-origin URL ${t.toString()}. This route will only handle cross-origin requests if they match the entire URL.`
            ),
          t.href === n.href
        ),
        t,
        a
      );
    } else if (e instanceof RegExp) s = new D(e, t, a);
    else if ('function' == typeof e) s = new M(e, t, a);
    else {
      if (!(e instanceof M))
        throw new r('unsupported-route-type', {
          moduleName: 'workbox-routing',
          funcName: 'registerRoute',
          paramName: 'capture',
        });
      s = e;
    }
    return F().registerRoute(s), s;
  }
  class V extends M {
    constructor(e, t) {
      super(({ request: r }) => {
        const a = e.getURLsToCacheKeys();
        for (const s of (function* (
          e,
          {
            ignoreURLParametersMatching: t = [/^utm_/, /^fbclid$/],
            directoryIndex: r = 'index.html',
            cleanURLs: a = !0,
            urlManipulation: s,
          } = {}
        ) {
          const n = new URL(e, location.href);
          (n.hash = ''), yield n.href;
          const o = (function (e, t = []) {
            for (const r of [...e.searchParams.keys()])
              t.some((e) => e.test(r)) && e.searchParams.delete(r);
            return e;
          })(n, t);
          if ((yield o.href, r && o.pathname.endsWith('/'))) {
            const e = new URL(o.href);
            (e.pathname += r), yield e.href;
          }
          if (a) {
            const e = new URL(o.href);
            (e.pathname += '.html'), yield e.href;
          }
          if (s) {
            const e = s({ url: n });
            for (const t of e) yield t.href;
          }
        })(r.url, t)) {
          const t = a.get(s);
          if (t) {
            return { cacheKey: t, integrity: e.getIntegrityForCacheKey(t) };
          }
        }
        c.debug('Precaching did not find a match for ' + p(r.url));
      }, e.strategy);
    }
  }
  var B;
  self.addEventListener('install', function (e) {
    self.skipWaiting();
  }),
    self.addEventListener('message', function (e) {
      var t;
      console.log('SW Received Message: ', e),
        'SKIP_WAITING' ===
          (null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.type) &&
          self.skipWaiting();
    }),
    self.addEventListener('fetch', function (e) {
      var t = e.request,
        r = new URL(t.url);
      r.origin === location.origin &&
        '/' === r.pathname &&
        e.respondWith(new $().handle({ event: e, request: t }));
    }),
    (function (e) {
      S().precache(e);
    })([{ url: '/logo/nodejs-logo.svg', revision: '1719910831924' }]),
    (function (e) {
      const t = S();
      j(new V(t, e));
    })(B),
    self.addEventListener('activate', (e) => {
      const t = u();
      e.waitUntil(
        (async (e, t = '-precache-') => {
          const r = (await self.caches.keys()).filter(
            (r) => r.includes(t) && r.includes(self.registration.scope) && r !== e
          );
          return await Promise.all(r.map((e) => self.caches.delete(e))), r;
        })(t).then((e) => {
          e.length > 0 &&
            c.log('The following out-of-date precaches were cleaned up automatically:', e);
        })
      );
    });
  var G = new M(
      function (e) {
        return 'font' === e.request.destination;
      },
      new $({ cacheName: 'font' })
    ),
    Y = new M(
      function (e) {
        return 'image' === e.request.destination;
      },
      new $({ cacheName: 'images' })
    ),
    z = new M(
      function (e) {
        return 'style' === e.request.destination;
      },
      new $({ cacheName: 'styles' })
    ),
    J = new M(
      function (e) {
        var t = e.request;
        return (
          !(
            t.url.includes('service-worker') ||
            t.url.includes('workbox') ||
            t.url.includes('hot-update')
          ) && 'script' === t.destination
        );
      },
      new $({ cacheName: 'scripts', matchOptions: { ignoreVary: !0 } })
    );
  j(G), j(Y), j(z), j(J);
})();
