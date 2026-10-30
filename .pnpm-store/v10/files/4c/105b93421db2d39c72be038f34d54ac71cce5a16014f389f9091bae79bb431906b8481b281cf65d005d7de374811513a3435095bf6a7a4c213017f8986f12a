function Th(t) {
  for (var e = [], i = 1; i < arguments.length; i++)
    e[i - 1] = arguments[i];
  var r = Array.from(typeof t == "string" ? [t] : t);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = r.reduce(function(a, l) {
    var h = l.match(/\n([\t ]+|(?!\s).)/g);
    return h ? a.concat(h.map(function(u) {
      var f, c;
      return (c = (f = u.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && c !== void 0 ? c : 0;
    })) : a;
  }, []);
  if (n.length) {
    var o = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    r = r.map(function(a) {
      return a.replace(o, `
`);
    });
  }
  r[0] = r[0].replace(/^\r?\n/, "");
  var s = r[0];
  return e.forEach(function(a, l) {
    var h = s.match(/(?:^|\n)( *)$/), u = h ? h[1] : "", f = a;
    typeof a == "string" && a.includes(`
`) && (f = String(a).split(`
`).map(function(c, p) {
      return p === 0 ? c : "" + u + c;
    }).join(`
`)), s += f + r[l + 1];
  }), s;
}
var Sh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var js = { exports: {} };
(function(t, e) {
  (function(i, r) {
    t.exports = r();
  })(Sh, function() {
    var i = 1e3, r = 6e4, n = 36e5, o = "millisecond", s = "second", a = "minute", l = "hour", h = "day", u = "week", f = "month", c = "quarter", p = "year", y = "date", S = "Invalid Date", O = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, q = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, T = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(M) {
      var b = ["th", "st", "nd", "rd"], C = M % 100;
      return "[" + M + (b[(C - 20) % 10] || b[C] || b[0]) + "]";
    } }, U = function(M, b, C) {
      var v = String(M);
      return !v || v.length >= b ? M : "" + Array(b + 1 - v.length).join(C) + M;
    }, W = { s: U, z: function(M) {
      var b = -M.utcOffset(), C = Math.abs(b), v = Math.floor(C / 60), x = C % 60;
      return (b <= 0 ? "+" : "-") + U(v, 2, "0") + ":" + U(x, 2, "0");
    }, m: function M(b, C) {
      if (b.date() < C.date())
        return -M(C, b);
      var v = 12 * (C.year() - b.year()) + (C.month() - b.month()), x = b.clone().add(v, f), A = C - x < 0, N = b.clone().add(v + (A ? -1 : 1), f);
      return +(-(v + (C - x) / (A ? x - N : N - x)) || 0);
    }, a: function(M) {
      return M < 0 ? Math.ceil(M) || 0 : Math.floor(M);
    }, p: function(M) {
      return { M: f, y: p, w: u, d: h, D: y, h: l, m: a, s, ms: o, Q: c }[M] || String(M || "").toLowerCase().replace(/s$/, "");
    }, u: function(M) {
      return M === void 0;
    } }, Y = "en", G = {};
    G[Y] = T;
    var H = "$isDayjsObject", ae = function(M) {
      return M instanceof _t || !(!M || !M[H]);
    }, Jt = function M(b, C, v) {
      var x;
      if (!b)
        return Y;
      if (typeof b == "string") {
        var A = b.toLowerCase();
        G[A] && (x = A), C && (G[A] = C, x = A);
        var N = b.split("-");
        if (!x && N.length > 1)
          return M(N[0]);
      } else {
        var D = b.name;
        G[D] = b, x = D;
      }
      return !v && x && (Y = x), x || !v && Y;
    }, j = function(M, b) {
      if (ae(M))
        return M.clone();
      var C = typeof b == "object" ? b : {};
      return C.date = M, C.args = arguments, new _t(C);
    }, I = W;
    I.l = Jt, I.i = ae, I.w = function(M, b) {
      return j(M, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var _t = function() {
      function M(C) {
        this.$L = Jt(C.locale, null, !0), this.parse(C), this.$x = this.$x || C.x || {}, this[H] = !0;
      }
      var b = M.prototype;
      return b.parse = function(C) {
        this.$d = function(v) {
          var x = v.date, A = v.utc;
          if (x === null)
            return /* @__PURE__ */ new Date(NaN);
          if (I.u(x))
            return /* @__PURE__ */ new Date();
          if (x instanceof Date)
            return new Date(x);
          if (typeof x == "string" && !/Z$/i.test(x)) {
            var N = x.match(O);
            if (N) {
              var D = N[2] - 1 || 0, X = (N[7] || "0").substring(0, 3);
              return A ? new Date(Date.UTC(N[1], D, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, X)) : new Date(N[1], D, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, X);
            }
          }
          return new Date(x);
        }(C), this.init();
      }, b.init = function() {
        var C = this.$d;
        this.$y = C.getFullYear(), this.$M = C.getMonth(), this.$D = C.getDate(), this.$W = C.getDay(), this.$H = C.getHours(), this.$m = C.getMinutes(), this.$s = C.getSeconds(), this.$ms = C.getMilliseconds();
      }, b.$utils = function() {
        return I;
      }, b.isValid = function() {
        return this.$d.toString() !== S;
      }, b.isSame = function(C, v) {
        var x = j(C);
        return this.startOf(v) <= x && x <= this.endOf(v);
      }, b.isAfter = function(C, v) {
        return j(C) < this.startOf(v);
      }, b.isBefore = function(C, v) {
        return this.endOf(v) < j(C);
      }, b.$g = function(C, v, x) {
        return I.u(C) ? this[v] : this.set(x, C);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(C, v) {
        var x = this, A = !!I.u(v) || v, N = I.p(C), D = function(Bt, et) {
          var Ft = I.w(x.$u ? Date.UTC(x.$y, et, Bt) : new Date(x.$y, et, Bt), x);
          return A ? Ft : Ft.endOf(h);
        }, X = function(Bt, et) {
          return I.w(x.toDate()[Bt].apply(x.toDate("s"), (A ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(et)), x);
        }, P = this.$W, Q = this.$M, z = this.$D, Ct = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case p:
            return A ? D(1, 0) : D(31, 11);
          case f:
            return A ? D(1, Q) : D(0, Q + 1);
          case u:
            var wt = this.$locale().weekStart || 0, Qt = (P < wt ? P + 7 : P) - wt;
            return D(A ? z - Qt : z + (6 - Qt), Q);
          case h:
          case y:
            return X(Ct + "Hours", 0);
          case l:
            return X(Ct + "Minutes", 1);
          case a:
            return X(Ct + "Seconds", 2);
          case s:
            return X(Ct + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(C) {
        return this.startOf(C, !1);
      }, b.$set = function(C, v) {
        var x, A = I.p(C), N = "set" + (this.$u ? "UTC" : ""), D = (x = {}, x[h] = N + "Date", x[y] = N + "Date", x[f] = N + "Month", x[p] = N + "FullYear", x[l] = N + "Hours", x[a] = N + "Minutes", x[s] = N + "Seconds", x[o] = N + "Milliseconds", x)[A], X = A === h ? this.$D + (v - this.$W) : v;
        if (A === f || A === p) {
          var P = this.clone().set(y, 1);
          P.$d[D](X), P.init(), this.$d = P.set(y, Math.min(this.$D, P.daysInMonth())).$d;
        } else
          D && this.$d[D](X);
        return this.init(), this;
      }, b.set = function(C, v) {
        return this.clone().$set(C, v);
      }, b.get = function(C) {
        return this[I.p(C)]();
      }, b.add = function(C, v) {
        var x, A = this;
        C = Number(C);
        var N = I.p(v), D = function(Q) {
          var z = j(A);
          return I.w(z.date(z.date() + Math.round(Q * C)), A);
        };
        if (N === f)
          return this.set(f, this.$M + C);
        if (N === p)
          return this.set(p, this.$y + C);
        if (N === h)
          return D(1);
        if (N === u)
          return D(7);
        var X = (x = {}, x[a] = r, x[l] = n, x[s] = i, x)[N] || 1, P = this.$d.getTime() + C * X;
        return I.w(P, this);
      }, b.subtract = function(C, v) {
        return this.add(-1 * C, v);
      }, b.format = function(C) {
        var v = this, x = this.$locale();
        if (!this.isValid())
          return x.invalidDate || S;
        var A = C || "YYYY-MM-DDTHH:mm:ssZ", N = I.z(this), D = this.$H, X = this.$m, P = this.$M, Q = x.weekdays, z = x.months, Ct = x.meridiem, wt = function(et, Ft, xt, te) {
          return et && (et[Ft] || et(v, A)) || xt[Ft].slice(0, te);
        }, Qt = function(et) {
          return I.s(D % 12 || 12, et, "0");
        }, Bt = Ct || function(et, Ft, xt) {
          var te = et < 12 ? "AM" : "PM";
          return xt ? te.toLowerCase() : te;
        };
        return A.replace(q, function(et, Ft) {
          return Ft || function(xt) {
            switch (xt) {
              case "YY":
                return String(v.$y).slice(-2);
              case "YYYY":
                return I.s(v.$y, 4, "0");
              case "M":
                return P + 1;
              case "MM":
                return I.s(P + 1, 2, "0");
              case "MMM":
                return wt(x.monthsShort, P, z, 3);
              case "MMMM":
                return wt(z, P);
              case "D":
                return v.$D;
              case "DD":
                return I.s(v.$D, 2, "0");
              case "d":
                return String(v.$W);
              case "dd":
                return wt(x.weekdaysMin, v.$W, Q, 2);
              case "ddd":
                return wt(x.weekdaysShort, v.$W, Q, 3);
              case "dddd":
                return Q[v.$W];
              case "H":
                return String(D);
              case "HH":
                return I.s(D, 2, "0");
              case "h":
                return Qt(1);
              case "hh":
                return Qt(2);
              case "a":
                return Bt(D, X, !0);
              case "A":
                return Bt(D, X, !1);
              case "m":
                return String(X);
              case "mm":
                return I.s(X, 2, "0");
              case "s":
                return String(v.$s);
              case "ss":
                return I.s(v.$s, 2, "0");
              case "SSS":
                return I.s(v.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(et) || N.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(C, v, x) {
        var A, N = this, D = I.p(v), X = j(C), P = (X.utcOffset() - this.utcOffset()) * r, Q = this - X, z = function() {
          return I.m(N, X);
        };
        switch (D) {
          case p:
            A = z() / 12;
            break;
          case f:
            A = z();
            break;
          case c:
            A = z() / 3;
            break;
          case u:
            A = (Q - P) / 6048e5;
            break;
          case h:
            A = (Q - P) / 864e5;
            break;
          case l:
            A = Q / n;
            break;
          case a:
            A = Q / r;
            break;
          case s:
            A = Q / i;
            break;
          default:
            A = Q;
        }
        return x ? A : I.a(A);
      }, b.daysInMonth = function() {
        return this.endOf(f).$D;
      }, b.$locale = function() {
        return G[this.$L];
      }, b.locale = function(C, v) {
        if (!C)
          return this.$L;
        var x = this.clone(), A = Jt(C, v, !0);
        return A && (x.$L = A), x;
      }, b.clone = function() {
        return I.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, M;
    }(), zt = _t.prototype;
    return j.prototype = zt, [["$ms", o], ["$s", s], ["$m", a], ["$H", l], ["$W", h], ["$M", f], ["$y", p], ["$D", y]].forEach(function(M) {
      zt[M[1]] = function(b) {
        return this.$g(b, M[0], M[1]);
      };
    }), j.extend = function(M, b) {
      return M.$i || (M(b, _t, j), M.$i = !0), j;
    }, j.locale = Jt, j.isDayjs = ae, j.unix = function(M) {
      return j(1e3 * M);
    }, j.en = G[Y], j.Ls = G, j.p = {}, j;
  });
})(js);
var vh = js.exports;
const wh = /* @__PURE__ */ kh(vh), jt = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, L = {
  trace: (...t) => {
  },
  debug: (...t) => {
  },
  info: (...t) => {
  },
  warn: (...t) => {
  },
  error: (...t) => {
  },
  fatal: (...t) => {
  }
}, Fn = function(t = "fatal") {
  let e = jt.fatal;
  typeof t == "string" ? (t = t.toLowerCase(), t in jt && (e = jt[t])) : typeof t == "number" && (e = t), L.trace = () => {
  }, L.debug = () => {
  }, L.info = () => {
  }, L.warn = () => {
  }, L.error = () => {
  }, L.fatal = () => {
  }, e <= jt.fatal && (L.fatal = console.error ? console.error.bind(console, bt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", bt("FATAL"))), e <= jt.error && (L.error = console.error ? console.error.bind(console, bt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", bt("ERROR"))), e <= jt.warn && (L.warn = console.warn ? console.warn.bind(console, bt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", bt("WARN"))), e <= jt.info && (L.info = console.info ? console.info.bind(console, bt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", bt("INFO"))), e <= jt.debug && (L.debug = console.debug ? console.debug.bind(console, bt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", bt("DEBUG"))), e <= jt.trace && (L.trace = console.debug ? console.debug.bind(console, bt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", bt("TRACE")));
}, bt = (t) => `%c${wh().format("ss.SSS")} : ${t} : `;
var Us = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sanitizeUrl = t.BLANK_URL = void 0;
  var e = /^([^\w]*)(javascript|data|vbscript)/im, i = /&#(\w+)(^\w|;)?/g, r = /&(newline|tab);/gi, n = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, o = /^.+(:|&colon;)/gim, s = [".", "/"];
  t.BLANK_URL = "about:blank";
  function a(u) {
    return s.indexOf(u[0]) > -1;
  }
  function l(u) {
    var f = u.replace(n, "");
    return f.replace(i, function(c, p) {
      return String.fromCharCode(p);
    });
  }
  function h(u) {
    if (!u)
      return t.BLANK_URL;
    var f = l(u).replace(r, "").replace(n, "").trim();
    if (!f)
      return t.BLANK_URL;
    if (a(f))
      return f;
    var c = f.match(o);
    if (!c)
      return f;
    var p = c[0];
    return e.test(p) ? t.BLANK_URL : f;
  }
  t.sanitizeUrl = h;
})(Us);
var Bh = { value: () => {
} };
function Ys() {
  for (var t = 0, e = arguments.length, i = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in i || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    i[r] = [];
  }
  return new Ri(i);
}
function Ri(t) {
  this._ = t;
}
function Fh(t, e) {
  return t.trim().split(/^|\s+/).map(function(i) {
    var r = "", n = i.indexOf(".");
    if (n >= 0 && (r = i.slice(n + 1), i = i.slice(0, n)), i && !e.hasOwnProperty(i))
      throw new Error("unknown type: " + i);
    return { type: i, name: r };
  });
}
Ri.prototype = Ys.prototype = {
  constructor: Ri,
  on: function(t, e) {
    var i = this._, r = Fh(t + "", i), n, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((n = (t = r[o]).type) && (n = Ah(i[n], t.name)))
          return n;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < s; )
      if (n = (t = r[o]).type)
        i[n] = Bo(i[n], t.name, e);
      else if (e == null)
        for (n in i)
          i[n] = Bo(i[n], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var i in e)
      t[i] = e[i].slice();
    return new Ri(t);
  },
  call: function(t, e) {
    if ((n = arguments.length - 2) > 0)
      for (var i = new Array(n), r = 0, n, o; r < n; ++r)
        i[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, n = o.length; r < n; ++r)
      o[r].value.apply(e, i);
  },
  apply: function(t, e, i) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], n = 0, o = r.length; n < o; ++n)
      r[n].value.apply(e, i);
  }
};
function Ah(t, e) {
  for (var i = 0, r = t.length, n; i < r; ++i)
    if ((n = t[i]).name === e)
      return n.value;
}
function Bo(t, e, i) {
  for (var r = 0, n = t.length; r < n; ++r)
    if (t[r].name === e) {
      t[r] = Bh, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return i != null && t.push({ name: e, value: i }), t;
}
var sn = "http://www.w3.org/1999/xhtml";
const Fo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: sn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function yr(t) {
  var e = t += "", i = e.indexOf(":");
  return i >= 0 && (e = t.slice(0, i)) !== "xmlns" && (t = t.slice(i + 1)), Fo.hasOwnProperty(e) ? { space: Fo[e], local: t } : t;
}
function Lh(t) {
  return function() {
    var e = this.ownerDocument, i = this.namespaceURI;
    return i === sn && e.documentElement.namespaceURI === sn ? e.createElement(t) : e.createElementNS(i, t);
  };
}
function Eh(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Gs(t) {
  var e = yr(t);
  return (e.local ? Eh : Lh)(e);
}
function Mh() {
}
function An(t) {
  return t == null ? Mh : function() {
    return this.querySelector(t);
  };
}
function Oh(t) {
  typeof t != "function" && (t = An(t));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = new Array(s), l, h, u = 0; u < s; ++u)
      (l = o[u]) && (h = t.call(l, l.__data__, u, o)) && ("__data__" in l && (h.__data__ = l.__data__), a[u] = h);
  return new yt(r, this._parents);
}
function $h(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ih() {
  return [];
}
function Vs(t) {
  return t == null ? Ih : function() {
    return this.querySelectorAll(t);
  };
}
function Dh(t) {
  return function() {
    return $h(t.apply(this, arguments));
  };
}
function Nh(t) {
  typeof t == "function" ? t = Dh(t) : t = Vs(t);
  for (var e = this._groups, i = e.length, r = [], n = [], o = 0; o < i; ++o)
    for (var s = e[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && (r.push(t.call(l, l.__data__, h, s)), n.push(l));
  return new yt(r, n);
}
function Xs(t) {
  return function() {
    return this.matches(t);
  };
}
function Ks(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Rh = Array.prototype.find;
function Ph(t) {
  return function() {
    return Rh.call(this.children, t);
  };
}
function qh() {
  return this.firstElementChild;
}
function zh(t) {
  return this.select(t == null ? qh : Ph(typeof t == "function" ? t : Ks(t)));
}
var Wh = Array.prototype.filter;
function Hh() {
  return Array.from(this.children);
}
function jh(t) {
  return function() {
    return Wh.call(this.children, t);
  };
}
function Uh(t) {
  return this.selectAll(t == null ? Hh : jh(typeof t == "function" ? t : Ks(t)));
}
function Yh(t) {
  typeof t != "function" && (t = Xs(t));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t.call(l, l.__data__, h, o) && a.push(l);
  return new yt(r, this._parents);
}
function Zs(t) {
  return new Array(t.length);
}
function Gh() {
  return new yt(this._enter || this._groups.map(Zs), this._parents);
}
function Xi(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Xi.prototype = {
  constructor: Xi,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Vh(t) {
  return function() {
    return t;
  };
}
function Xh(t, e, i, r, n, o) {
  for (var s = 0, a, l = e.length, h = o.length; s < h; ++s)
    (a = e[s]) ? (a.__data__ = o[s], r[s] = a) : i[s] = new Xi(t, o[s]);
  for (; s < l; ++s)
    (a = e[s]) && (n[s] = a);
}
function Kh(t, e, i, r, n, o, s) {
  var a, l, h = /* @__PURE__ */ new Map(), u = e.length, f = o.length, c = new Array(u), p;
  for (a = 0; a < u; ++a)
    (l = e[a]) && (c[a] = p = s.call(l, l.__data__, a, e) + "", h.has(p) ? n[a] = l : h.set(p, l));
  for (a = 0; a < f; ++a)
    p = s.call(t, o[a], a, o) + "", (l = h.get(p)) ? (r[a] = l, l.__data__ = o[a], h.delete(p)) : i[a] = new Xi(t, o[a]);
  for (a = 0; a < u; ++a)
    (l = e[a]) && h.get(c[a]) === l && (n[a] = l);
}
function Zh(t) {
  return t.__data__;
}
function Jh(t, e) {
  if (!arguments.length)
    return Array.from(this, Zh);
  var i = e ? Kh : Xh, r = this._parents, n = this._groups;
  typeof t != "function" && (t = Vh(t));
  for (var o = n.length, s = new Array(o), a = new Array(o), l = new Array(o), h = 0; h < o; ++h) {
    var u = r[h], f = n[h], c = f.length, p = Qh(t.call(u, u && u.__data__, h, r)), y = p.length, S = a[h] = new Array(y), O = s[h] = new Array(y), q = l[h] = new Array(c);
    i(u, f, S, O, q, p, e);
    for (var T = 0, U = 0, W, Y; T < y; ++T)
      if (W = S[T]) {
        for (T >= U && (U = T + 1); !(Y = O[U]) && ++U < y; )
          ;
        W._next = Y || null;
      }
  }
  return s = new yt(s, r), s._enter = a, s._exit = l, s;
}
function Qh(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function tc() {
  return new yt(this._exit || this._groups.map(Zs), this._parents);
}
function ec(t, e, i) {
  var r = this.enter(), n = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (n = e(n), n && (n = n.selection())), i == null ? o.remove() : i(o), r && n ? r.merge(n).order() : n;
}
function ic(t) {
  for (var e = t.selection ? t.selection() : t, i = this._groups, r = e._groups, n = i.length, o = r.length, s = Math.min(n, o), a = new Array(n), l = 0; l < s; ++l)
    for (var h = i[l], u = r[l], f = h.length, c = a[l] = new Array(f), p, y = 0; y < f; ++y)
      (p = h[y] || u[y]) && (c[y] = p);
  for (; l < n; ++l)
    a[l] = i[l];
  return new yt(a, this._parents);
}
function rc() {
  for (var t = this._groups, e = -1, i = t.length; ++e < i; )
    for (var r = t[e], n = r.length - 1, o = r[n], s; --n >= 0; )
      (s = r[n]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function nc(t) {
  t || (t = oc);
  function e(f, c) {
    return f && c ? t(f.__data__, c.__data__) : !f - !c;
  }
  for (var i = this._groups, r = i.length, n = new Array(r), o = 0; o < r; ++o) {
    for (var s = i[o], a = s.length, l = n[o] = new Array(a), h, u = 0; u < a; ++u)
      (h = s[u]) && (l[u] = h);
    l.sort(e);
  }
  return new yt(n, this._parents).order();
}
function oc(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function sc() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ac() {
  return Array.from(this);
}
function lc() {
  for (var t = this._groups, e = 0, i = t.length; e < i; ++e)
    for (var r = t[e], n = 0, o = r.length; n < o; ++n) {
      var s = r[n];
      if (s)
        return s;
    }
  return null;
}
function hc() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function cc() {
  return !this.node();
}
function uc(t) {
  for (var e = this._groups, i = 0, r = e.length; i < r; ++i)
    for (var n = e[i], o = 0, s = n.length, a; o < s; ++o)
      (a = n[o]) && t.call(a, a.__data__, o, n);
  return this;
}
function fc(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function dc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function pc(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function gc(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function mc(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttribute(t) : this.setAttribute(t, i);
  };
}
function yc(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, i);
  };
}
function _c(t, e) {
  var i = yr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return i.local ? r.getAttributeNS(i.space, i.local) : r.getAttribute(i);
  }
  return this.each((e == null ? i.local ? dc : fc : typeof e == "function" ? i.local ? yc : mc : i.local ? gc : pc)(i, e));
}
function Js(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Cc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function xc(t, e, i) {
  return function() {
    this.style.setProperty(t, e, i);
  };
}
function bc(t, e, i) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, i);
  };
}
function Tc(t, e, i) {
  return arguments.length > 1 ? this.each((e == null ? Cc : typeof e == "function" ? bc : xc)(t, e, i ?? "")) : Le(this.node(), t);
}
function Le(t, e) {
  return t.style.getPropertyValue(e) || Js(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Sc(t) {
  return function() {
    delete this[t];
  };
}
function kc(t, e) {
  return function() {
    this[t] = e;
  };
}
function vc(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? delete this[t] : this[t] = i;
  };
}
function wc(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Sc : typeof e == "function" ? vc : kc)(t, e)) : this.node()[t];
}
function Qs(t) {
  return t.trim().split(/^|\s+/);
}
function Ln(t) {
  return t.classList || new ta(t);
}
function ta(t) {
  this._node = t, this._names = Qs(t.getAttribute("class") || "");
}
ta.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ea(t, e) {
  for (var i = Ln(t), r = -1, n = e.length; ++r < n; )
    i.add(e[r]);
}
function ia(t, e) {
  for (var i = Ln(t), r = -1, n = e.length; ++r < n; )
    i.remove(e[r]);
}
function Bc(t) {
  return function() {
    ea(this, t);
  };
}
function Fc(t) {
  return function() {
    ia(this, t);
  };
}
function Ac(t, e) {
  return function() {
    (e.apply(this, arguments) ? ea : ia)(this, t);
  };
}
function Lc(t, e) {
  var i = Qs(t + "");
  if (arguments.length < 2) {
    for (var r = Ln(this.node()), n = -1, o = i.length; ++n < o; )
      if (!r.contains(i[n]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Ac : e ? Bc : Fc)(i, e));
}
function Ec() {
  this.textContent = "";
}
function Mc(t) {
  return function() {
    this.textContent = t;
  };
}
function Oc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function $c(t) {
  return arguments.length ? this.each(t == null ? Ec : (typeof t == "function" ? Oc : Mc)(t)) : this.node().textContent;
}
function Ic() {
  this.innerHTML = "";
}
function Dc(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Nc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Rc(t) {
  return arguments.length ? this.each(t == null ? Ic : (typeof t == "function" ? Nc : Dc)(t)) : this.node().innerHTML;
}
function Pc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function qc() {
  return this.each(Pc);
}
function zc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Wc() {
  return this.each(zc);
}
function Hc(t) {
  var e = typeof t == "function" ? t : Gs(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function jc() {
  return null;
}
function Uc(t, e) {
  var i = typeof t == "function" ? t : Gs(t), r = e == null ? jc : typeof e == "function" ? e : An(e);
  return this.select(function() {
    return this.insertBefore(i.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Yc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Gc() {
  return this.each(Yc);
}
function Vc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Xc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Kc(t) {
  return this.select(t ? Xc : Vc);
}
function Zc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Jc(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Qc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var i = "", r = e.indexOf(".");
    return r >= 0 && (i = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: i };
  });
}
function tu(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var i = 0, r = -1, n = e.length, o; i < n; ++i)
        o = e[i], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function eu(t, e, i) {
  return function() {
    var r = this.__on, n, o = Jc(e);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((n = r[s]).type === t.type && n.name === t.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = o, n.options = i), n.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, i), n = { type: t.type, name: t.name, value: e, listener: o, options: i }, r ? r.push(n) : this.__on = [n];
  };
}
function iu(t, e, i) {
  var r = Qc(t + ""), n, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, h = a.length, u; l < h; ++l)
        for (n = 0, u = a[l]; n < o; ++n)
          if ((s = r[n]).type === u.type && s.name === u.name)
            return u.value;
    }
    return;
  }
  for (a = e ? eu : tu, n = 0; n < o; ++n)
    this.each(a(r[n], e, i));
  return this;
}
function ra(t, e, i) {
  var r = Js(t), n = r.CustomEvent;
  typeof n == "function" ? n = new n(e, i) : (n = r.document.createEvent("Event"), i ? (n.initEvent(e, i.bubbles, i.cancelable), n.detail = i.detail) : n.initEvent(e, !1, !1)), t.dispatchEvent(n);
}
function ru(t, e) {
  return function() {
    return ra(this, t, e);
  };
}
function nu(t, e) {
  return function() {
    return ra(this, t, e.apply(this, arguments));
  };
}
function ou(t, e) {
  return this.each((typeof e == "function" ? nu : ru)(t, e));
}
function* su() {
  for (var t = this._groups, e = 0, i = t.length; e < i; ++e)
    for (var r = t[e], n = 0, o = r.length, s; n < o; ++n)
      (s = r[n]) && (yield s);
}
var na = [null];
function yt(t, e) {
  this._groups = t, this._parents = e;
}
function mi() {
  return new yt([[document.documentElement]], na);
}
function au() {
  return this;
}
yt.prototype = mi.prototype = {
  constructor: yt,
  select: Oh,
  selectAll: Nh,
  selectChild: zh,
  selectChildren: Uh,
  filter: Yh,
  data: Jh,
  enter: Gh,
  exit: tc,
  join: ec,
  merge: ic,
  selection: au,
  order: rc,
  sort: nc,
  call: sc,
  nodes: ac,
  node: lc,
  size: hc,
  empty: cc,
  each: uc,
  attr: _c,
  style: Tc,
  property: wc,
  classed: Lc,
  text: $c,
  html: Rc,
  raise: qc,
  lower: Wc,
  append: Hc,
  insert: Uc,
  remove: Gc,
  clone: Kc,
  datum: Zc,
  on: iu,
  dispatch: ou,
  [Symbol.iterator]: su
};
function Tt(t) {
  return typeof t == "string" ? new yt([[document.querySelector(t)]], [document.documentElement]) : new yt([[t]], na);
}
function En(t, e, i) {
  t.prototype = e.prototype = i, i.constructor = t;
}
function oa(t, e) {
  var i = Object.create(t.prototype);
  for (var r in e)
    i[r] = e[r];
  return i;
}
function yi() {
}
var ai = 0.7, Ki = 1 / ai, Ae = "\\s*([+-]?\\d+)\\s*", li = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", It = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", lu = /^#([0-9a-f]{3,8})$/, hu = new RegExp(`^rgb\\(${Ae},${Ae},${Ae}\\)$`), cu = new RegExp(`^rgb\\(${It},${It},${It}\\)$`), uu = new RegExp(`^rgba\\(${Ae},${Ae},${Ae},${li}\\)$`), fu = new RegExp(`^rgba\\(${It},${It},${It},${li}\\)$`), du = new RegExp(`^hsl\\(${li},${It},${It}\\)$`), pu = new RegExp(`^hsla\\(${li},${It},${It},${li}\\)$`), Ao = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
En(yi, hi, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Lo,
  // Deprecated! Use color.formatHex.
  formatHex: Lo,
  formatHex8: gu,
  formatHsl: mu,
  formatRgb: Eo,
  toString: Eo
});
function Lo() {
  return this.rgb().formatHex();
}
function gu() {
  return this.rgb().formatHex8();
}
function mu() {
  return sa(this).formatHsl();
}
function Eo() {
  return this.rgb().formatRgb();
}
function hi(t) {
  var e, i;
  return t = (t + "").trim().toLowerCase(), (e = lu.exec(t)) ? (i = e[1].length, e = parseInt(e[1], 16), i === 6 ? Mo(e) : i === 3 ? new gt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : i === 8 ? Ai(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : i === 4 ? Ai(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = hu.exec(t)) ? new gt(e[1], e[2], e[3], 1) : (e = cu.exec(t)) ? new gt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = uu.exec(t)) ? Ai(e[1], e[2], e[3], e[4]) : (e = fu.exec(t)) ? Ai(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = du.exec(t)) ? Io(e[1], e[2] / 100, e[3] / 100, 1) : (e = pu.exec(t)) ? Io(e[1], e[2] / 100, e[3] / 100, e[4]) : Ao.hasOwnProperty(t) ? Mo(Ao[t]) : t === "transparent" ? new gt(NaN, NaN, NaN, 0) : null;
}
function Mo(t) {
  return new gt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ai(t, e, i, r) {
  return r <= 0 && (t = e = i = NaN), new gt(t, e, i, r);
}
function yu(t) {
  return t instanceof yi || (t = hi(t)), t ? (t = t.rgb(), new gt(t.r, t.g, t.b, t.opacity)) : new gt();
}
function an(t, e, i, r) {
  return arguments.length === 1 ? yu(t) : new gt(t, e, i, r ?? 1);
}
function gt(t, e, i, r) {
  this.r = +t, this.g = +e, this.b = +i, this.opacity = +r;
}
En(gt, an, oa(yi, {
  brighter(t) {
    return t = t == null ? Ki : Math.pow(Ki, t), new gt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ai : Math.pow(ai, t), new gt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new gt(fe(this.r), fe(this.g), fe(this.b), Zi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Oo,
  // Deprecated! Use color.formatHex.
  formatHex: Oo,
  formatHex8: _u,
  formatRgb: $o,
  toString: $o
}));
function Oo() {
  return `#${ue(this.r)}${ue(this.g)}${ue(this.b)}`;
}
function _u() {
  return `#${ue(this.r)}${ue(this.g)}${ue(this.b)}${ue((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function $o() {
  const t = Zi(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${fe(this.r)}, ${fe(this.g)}, ${fe(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Zi(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function fe(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ue(t) {
  return t = fe(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Io(t, e, i, r) {
  return r <= 0 ? t = e = i = NaN : i <= 0 || i >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Lt(t, e, i, r);
}
function sa(t) {
  if (t instanceof Lt)
    return new Lt(t.h, t.s, t.l, t.opacity);
  if (t instanceof yi || (t = hi(t)), !t)
    return new Lt();
  if (t instanceof Lt)
    return t;
  t = t.rgb();
  var e = t.r / 255, i = t.g / 255, r = t.b / 255, n = Math.min(e, i, r), o = Math.max(e, i, r), s = NaN, a = o - n, l = (o + n) / 2;
  return a ? (e === o ? s = (i - r) / a + (i < r) * 6 : i === o ? s = (r - e) / a + 2 : s = (e - i) / a + 4, a /= l < 0.5 ? o + n : 2 - o - n, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Lt(s, a, l, t.opacity);
}
function Cu(t, e, i, r) {
  return arguments.length === 1 ? sa(t) : new Lt(t, e, i, r ?? 1);
}
function Lt(t, e, i, r) {
  this.h = +t, this.s = +e, this.l = +i, this.opacity = +r;
}
En(Lt, Cu, oa(yi, {
  brighter(t) {
    return t = t == null ? Ki : Math.pow(Ki, t), new Lt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ai : Math.pow(ai, t), new Lt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, i = this.l, r = i + (i < 0.5 ? i : 1 - i) * e, n = 2 * i - r;
    return new gt(
      Hr(t >= 240 ? t - 240 : t + 120, n, r),
      Hr(t, n, r),
      Hr(t < 120 ? t + 240 : t - 120, n, r),
      this.opacity
    );
  },
  clamp() {
    return new Lt(Do(this.h), Li(this.s), Li(this.l), Zi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Zi(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Do(this.h)}, ${Li(this.s) * 100}%, ${Li(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Do(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Li(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Hr(t, e, i) {
  return (t < 60 ? e + (i - e) * t / 60 : t < 180 ? i : t < 240 ? e + (i - e) * (240 - t) / 60 : e) * 255;
}
const Mn = (t) => () => t;
function aa(t, e) {
  return function(i) {
    return t + i * e;
  };
}
function xu(t, e, i) {
  return t = Math.pow(t, i), e = Math.pow(e, i) - t, i = 1 / i, function(r) {
    return Math.pow(t + r * e, i);
  };
}
function y1(t, e) {
  var i = e - t;
  return i ? aa(t, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i) : Mn(isNaN(t) ? e : t);
}
function bu(t) {
  return (t = +t) == 1 ? la : function(e, i) {
    return i - e ? xu(e, i, t) : Mn(isNaN(e) ? i : e);
  };
}
function la(t, e) {
  var i = e - t;
  return i ? aa(t, i) : Mn(isNaN(t) ? e : t);
}
const No = function t(e) {
  var i = bu(e);
  function r(n, o) {
    var s = i((n = an(n)).r, (o = an(o)).r), a = i(n.g, o.g), l = i(n.b, o.b), h = la(n.opacity, o.opacity);
    return function(u) {
      return n.r = s(u), n.g = a(u), n.b = l(u), n.opacity = h(u), n + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ie(t, e) {
  return t = +t, e = +e, function(i) {
    return t * (1 - i) + e * i;
  };
}
var ln = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, jr = new RegExp(ln.source, "g");
function Tu(t) {
  return function() {
    return t;
  };
}
function Su(t) {
  return function(e) {
    return t(e) + "";
  };
}
function ku(t, e) {
  var i = ln.lastIndex = jr.lastIndex = 0, r, n, o, s = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = ln.exec(t)) && (n = jr.exec(e)); )
    (o = n.index) > i && (o = e.slice(i, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (n = n[0]) ? a[s] ? a[s] += n : a[++s] = n : (a[++s] = null, l.push({ i: s, x: ie(r, n) })), i = jr.lastIndex;
  return i < e.length && (o = e.slice(i), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? l[0] ? Su(l[0].x) : Tu(e) : (e = l.length, function(h) {
    for (var u = 0, f; u < e; ++u)
      a[(f = l[u]).i] = f.x(h);
    return a.join("");
  });
}
var Ro = 180 / Math.PI, hn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ha(t, e, i, r, n, o) {
  var s, a, l;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * i + e * r) && (i -= t * l, r -= e * l), (a = Math.sqrt(i * i + r * r)) && (i /= a, r /= a, l /= a), t * r < e * i && (t = -t, e = -e, l = -l, s = -s), {
    translateX: n,
    translateY: o,
    rotate: Math.atan2(e, t) * Ro,
    skewX: Math.atan(l) * Ro,
    scaleX: s,
    scaleY: a
  };
}
var Ei;
function vu(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? hn : ha(e.a, e.b, e.c, e.d, e.e, e.f);
}
function wu(t) {
  return t == null || (Ei || (Ei = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ei.setAttribute("transform", t), !(t = Ei.transform.baseVal.consolidate())) ? hn : (t = t.matrix, ha(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ca(t, e, i, r) {
  function n(h) {
    return h.length ? h.pop() + " " : "";
  }
  function o(h, u, f, c, p, y) {
    if (h !== f || u !== c) {
      var S = p.push("translate(", null, e, null, i);
      y.push({ i: S - 4, x: ie(h, f) }, { i: S - 2, x: ie(u, c) });
    } else
      (f || c) && p.push("translate(" + f + e + c + i);
  }
  function s(h, u, f, c) {
    h !== u ? (h - u > 180 ? u += 360 : u - h > 180 && (h += 360), c.push({ i: f.push(n(f) + "rotate(", null, r) - 2, x: ie(h, u) })) : u && f.push(n(f) + "rotate(" + u + r);
  }
  function a(h, u, f, c) {
    h !== u ? c.push({ i: f.push(n(f) + "skewX(", null, r) - 2, x: ie(h, u) }) : u && f.push(n(f) + "skewX(" + u + r);
  }
  function l(h, u, f, c, p, y) {
    if (h !== f || u !== c) {
      var S = p.push(n(p) + "scale(", null, ",", null, ")");
      y.push({ i: S - 4, x: ie(h, f) }, { i: S - 2, x: ie(u, c) });
    } else
      (f !== 1 || c !== 1) && p.push(n(p) + "scale(" + f + "," + c + ")");
  }
  return function(h, u) {
    var f = [], c = [];
    return h = t(h), u = t(u), o(h.translateX, h.translateY, u.translateX, u.translateY, f, c), s(h.rotate, u.rotate, f, c), a(h.skewX, u.skewX, f, c), l(h.scaleX, h.scaleY, u.scaleX, u.scaleY, f, c), h = u = null, function(p) {
      for (var y = -1, S = c.length, O; ++y < S; )
        f[(O = c[y]).i] = O.x(p);
      return f.join("");
    };
  };
}
var Bu = ca(vu, "px, ", "px)", "deg)"), Fu = ca(wu, ", ", ")", ")"), Ee = 0, Je = 0, Ue = 0, ua = 1e3, Ji, Qe, Qi = 0, ge = 0, _r = 0, ci = typeof performance == "object" && performance.now ? performance : Date, fa = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function On() {
  return ge || (fa(Au), ge = ci.now() + _r);
}
function Au() {
  ge = 0;
}
function tr() {
  this._call = this._time = this._next = null;
}
tr.prototype = da.prototype = {
  constructor: tr,
  restart: function(t, e, i) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    i = (i == null ? On() : +i) + (e == null ? 0 : +e), !this._next && Qe !== this && (Qe ? Qe._next = this : Ji = this, Qe = this), this._call = t, this._time = i, cn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, cn());
  }
};
function da(t, e, i) {
  var r = new tr();
  return r.restart(t, e, i), r;
}
function Lu() {
  On(), ++Ee;
  for (var t = Ji, e; t; )
    (e = ge - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Ee;
}
function Po() {
  ge = (Qi = ci.now()) + _r, Ee = Je = 0;
  try {
    Lu();
  } finally {
    Ee = 0, Mu(), ge = 0;
  }
}
function Eu() {
  var t = ci.now(), e = t - Qi;
  e > ua && (_r -= e, Qi = t);
}
function Mu() {
  for (var t, e = Ji, i, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (i = e._next, e._next = null, e = t ? t._next = i : Ji = i);
  Qe = t, cn(r);
}
function cn(t) {
  if (!Ee) {
    Je && (Je = clearTimeout(Je));
    var e = t - ge;
    e > 24 ? (t < 1 / 0 && (Je = setTimeout(Po, t - ci.now() - _r)), Ue && (Ue = clearInterval(Ue))) : (Ue || (Qi = ci.now(), Ue = setInterval(Eu, ua)), Ee = 1, fa(Po));
  }
}
function qo(t, e, i) {
  var r = new tr();
  return e = e == null ? 0 : +e, r.restart((n) => {
    r.stop(), t(n + e);
  }, e, i), r;
}
var Ou = Ys("start", "end", "cancel", "interrupt"), $u = [], pa = 0, zo = 1, un = 2, Pi = 3, Wo = 4, fn = 5, qi = 6;
function Cr(t, e, i, r, n, o) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (i in s)
    return;
  Iu(t, i, {
    name: e,
    index: r,
    // For context during callback.
    group: n,
    // For context during callback.
    on: Ou,
    tween: $u,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: pa
  });
}
function $n(t, e) {
  var i = Mt(t, e);
  if (i.state > pa)
    throw new Error("too late; already scheduled");
  return i;
}
function Pt(t, e) {
  var i = Mt(t, e);
  if (i.state > Pi)
    throw new Error("too late; already running");
  return i;
}
function Mt(t, e) {
  var i = t.__transition;
  if (!i || !(i = i[e]))
    throw new Error("transition not found");
  return i;
}
function Iu(t, e, i) {
  var r = t.__transition, n;
  r[e] = i, i.timer = da(o, 0, i.time);
  function o(h) {
    i.state = zo, i.timer.restart(s, i.delay, i.time), i.delay <= h && s(h - i.delay);
  }
  function s(h) {
    var u, f, c, p;
    if (i.state !== zo)
      return l();
    for (u in r)
      if (p = r[u], p.name === i.name) {
        if (p.state === Pi)
          return qo(s);
        p.state === Wo ? (p.state = qi, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[u]) : +u < e && (p.state = qi, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[u]);
      }
    if (qo(function() {
      i.state === Pi && (i.state = Wo, i.timer.restart(a, i.delay, i.time), a(h));
    }), i.state = un, i.on.call("start", t, t.__data__, i.index, i.group), i.state === un) {
      for (i.state = Pi, n = new Array(c = i.tween.length), u = 0, f = -1; u < c; ++u)
        (p = i.tween[u].value.call(t, t.__data__, i.index, i.group)) && (n[++f] = p);
      n.length = f + 1;
    }
  }
  function a(h) {
    for (var u = h < i.duration ? i.ease.call(null, h / i.duration) : (i.timer.restart(l), i.state = fn, 1), f = -1, c = n.length; ++f < c; )
      n[f].call(t, u);
    i.state === fn && (i.on.call("end", t, t.__data__, i.index, i.group), l());
  }
  function l() {
    i.state = qi, i.timer.stop(), delete r[e];
    for (var h in r)
      return;
    delete t.__transition;
  }
}
function Du(t, e) {
  var i = t.__transition, r, n, o = !0, s;
  if (i) {
    e = e == null ? null : e + "";
    for (s in i) {
      if ((r = i[s]).name !== e) {
        o = !1;
        continue;
      }
      n = r.state > un && r.state < fn, r.state = qi, r.timer.stop(), r.on.call(n ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete i[s];
    }
    o && delete t.__transition;
  }
}
function Nu(t) {
  return this.each(function() {
    Du(this, t);
  });
}
function Ru(t, e) {
  var i, r;
  return function() {
    var n = Pt(this, t), o = n.tween;
    if (o !== i) {
      r = i = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    n.tween = r;
  };
}
function Pu(t, e, i) {
  var r, n;
  if (typeof i != "function")
    throw new Error();
  return function() {
    var o = Pt(this, t), s = o.tween;
    if (s !== r) {
      n = (r = s).slice();
      for (var a = { name: e, value: i }, l = 0, h = n.length; l < h; ++l)
        if (n[l].name === e) {
          n[l] = a;
          break;
        }
      l === h && n.push(a);
    }
    o.tween = n;
  };
}
function qu(t, e) {
  var i = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Mt(this.node(), i).tween, n = 0, o = r.length, s; n < o; ++n)
      if ((s = r[n]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? Ru : Pu)(i, t, e));
}
function In(t, e, i) {
  var r = t._id;
  return t.each(function() {
    var n = Pt(this, r);
    (n.value || (n.value = {}))[e] = i.apply(this, arguments);
  }), function(n) {
    return Mt(n, r).value[e];
  };
}
function ga(t, e) {
  var i;
  return (typeof e == "number" ? ie : e instanceof hi ? No : (i = hi(e)) ? (e = i, No) : ku)(t, e);
}
function zu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Wu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Hu(t, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttribute(t);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function ju(t, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Uu(t, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function Yu(t, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function Gu(t, e) {
  var i = yr(t), r = i === "transform" ? Fu : ga;
  return this.attrTween(t, typeof e == "function" ? (i.local ? Yu : Uu)(i, r, In(this, "attr." + t, e)) : e == null ? (i.local ? Wu : zu)(i) : (i.local ? ju : Hu)(i, r, e));
}
function Vu(t, e) {
  return function(i) {
    this.setAttribute(t, e.call(this, i));
  };
}
function Xu(t, e) {
  return function(i) {
    this.setAttributeNS(t.space, t.local, e.call(this, i));
  };
}
function Ku(t, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && Xu(t, o)), i;
  }
  return n._value = e, n;
}
function Zu(t, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && Vu(t, o)), i;
  }
  return n._value = e, n;
}
function Ju(t, e) {
  var i = "attr." + t;
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  var r = yr(t);
  return this.tween(i, (r.local ? Ku : Zu)(r, e));
}
function Qu(t, e) {
  return function() {
    $n(this, t).delay = +e.apply(this, arguments);
  };
}
function tf(t, e) {
  return e = +e, function() {
    $n(this, t).delay = e;
  };
}
function ef(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Qu : tf)(e, t)) : Mt(this.node(), e).delay;
}
function rf(t, e) {
  return function() {
    Pt(this, t).duration = +e.apply(this, arguments);
  };
}
function nf(t, e) {
  return e = +e, function() {
    Pt(this, t).duration = e;
  };
}
function of(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rf : nf)(e, t)) : Mt(this.node(), e).duration;
}
function sf(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    Pt(this, t).ease = e;
  };
}
function af(t) {
  var e = this._id;
  return arguments.length ? this.each(sf(e, t)) : Mt(this.node(), e).ease;
}
function lf(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    if (typeof i != "function")
      throw new Error();
    Pt(this, t).ease = i;
  };
}
function hf(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(lf(this._id, t));
}
function cf(t) {
  typeof t != "function" && (t = Xs(t));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t.call(l, l.__data__, h, o) && a.push(l);
  return new Kt(r, this._parents, this._name, this._id);
}
function uf(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, i = t._groups, r = e.length, n = i.length, o = Math.min(r, n), s = new Array(r), a = 0; a < o; ++a)
    for (var l = e[a], h = i[a], u = l.length, f = s[a] = new Array(u), c, p = 0; p < u; ++p)
      (c = l[p] || h[p]) && (f[p] = c);
  for (; a < r; ++a)
    s[a] = e[a];
  return new Kt(s, this._parents, this._name, this._id);
}
function ff(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var i = e.indexOf(".");
    return i >= 0 && (e = e.slice(0, i)), !e || e === "start";
  });
}
function df(t, e, i) {
  var r, n, o = ff(e) ? $n : Pt;
  return function() {
    var s = o(this, t), a = s.on;
    a !== r && (n = (r = a).copy()).on(e, i), s.on = n;
  };
}
function pf(t, e) {
  var i = this._id;
  return arguments.length < 2 ? Mt(this.node(), i).on.on(t) : this.each(df(i, t, e));
}
function gf(t) {
  return function() {
    var e = this.parentNode;
    for (var i in this.__transition)
      if (+i !== t)
        return;
    e && e.removeChild(this);
  };
}
function mf() {
  return this.on("end.remove", gf(this._id));
}
function yf(t) {
  var e = this._name, i = this._id;
  typeof t != "function" && (t = An(t));
  for (var r = this._groups, n = r.length, o = new Array(n), s = 0; s < n; ++s)
    for (var a = r[s], l = a.length, h = o[s] = new Array(l), u, f, c = 0; c < l; ++c)
      (u = a[c]) && (f = t.call(u, u.__data__, c, a)) && ("__data__" in u && (f.__data__ = u.__data__), h[c] = f, Cr(h[c], e, i, c, h, Mt(u, i)));
  return new Kt(o, this._parents, e, i);
}
function _f(t) {
  var e = this._name, i = this._id;
  typeof t != "function" && (t = Vs(t));
  for (var r = this._groups, n = r.length, o = [], s = [], a = 0; a < n; ++a)
    for (var l = r[a], h = l.length, u, f = 0; f < h; ++f)
      if (u = l[f]) {
        for (var c = t.call(u, u.__data__, f, l), p, y = Mt(u, i), S = 0, O = c.length; S < O; ++S)
          (p = c[S]) && Cr(p, e, i, S, c, y);
        o.push(c), s.push(u);
      }
  return new Kt(o, s, e, i);
}
var Cf = mi.prototype.constructor;
function xf() {
  return new Cf(this._groups, this._parents);
}
function bf(t, e) {
  var i, r, n;
  return function() {
    var o = Le(this, t), s = (this.style.removeProperty(t), Le(this, t));
    return o === s ? null : o === i && s === r ? n : n = e(i = o, r = s);
  };
}
function ma(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Tf(t, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = Le(this, t);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Sf(t, e, i) {
  var r, n, o;
  return function() {
    var s = Le(this, t), a = i(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), Le(this, t))), s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a));
  };
}
function kf(t, e) {
  var i, r, n, o = "style." + e, s = "end." + o, a;
  return function() {
    var l = Pt(this, t), h = l.on, u = l.value[o] == null ? a || (a = ma(e)) : void 0;
    (h !== i || n !== u) && (r = (i = h).copy()).on(s, n = u), l.on = r;
  };
}
function vf(t, e, i) {
  var r = (t += "") == "transform" ? Bu : ga;
  return e == null ? this.styleTween(t, bf(t, r)).on("end.style." + t, ma(t)) : typeof e == "function" ? this.styleTween(t, Sf(t, r, In(this, "style." + t, e))).each(kf(this._id, t)) : this.styleTween(t, Tf(t, r, e), i).on("end.style." + t, null);
}
function wf(t, e, i) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), i);
  };
}
function Bf(t, e, i) {
  var r, n;
  function o() {
    var s = e.apply(this, arguments);
    return s !== n && (r = (n = s) && wf(t, s, i)), r;
  }
  return o._value = e, o;
}
function Ff(t, e, i) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, Bf(t, e, i ?? ""));
}
function Af(t) {
  return function() {
    this.textContent = t;
  };
}
function Lf(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Ef(t) {
  return this.tween("text", typeof t == "function" ? Lf(In(this, "text", t)) : Af(t == null ? "" : t + ""));
}
function Mf(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Of(t) {
  var e, i;
  function r() {
    var n = t.apply(this, arguments);
    return n !== i && (e = (i = n) && Mf(n)), e;
  }
  return r._value = t, r;
}
function $f(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, Of(t));
}
function If() {
  for (var t = this._name, e = this._id, i = ya(), r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      if (l = s[h]) {
        var u = Mt(l, e);
        Cr(l, t, i, h, s, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new Kt(r, this._parents, t, i);
}
function Df() {
  var t, e, i = this, r = i._id, n = i.size();
  return new Promise(function(o, s) {
    var a = { value: s }, l = { value: function() {
      --n === 0 && o();
    } };
    i.each(function() {
      var h = Pt(this, r), u = h.on;
      u !== t && (e = (t = u).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), h.on = e;
    }), n === 0 && o();
  });
}
var Nf = 0;
function Kt(t, e, i, r) {
  this._groups = t, this._parents = e, this._name = i, this._id = r;
}
function ya() {
  return ++Nf;
}
var Ut = mi.prototype;
Kt.prototype = {
  constructor: Kt,
  select: yf,
  selectAll: _f,
  selectChild: Ut.selectChild,
  selectChildren: Ut.selectChildren,
  filter: cf,
  merge: uf,
  selection: xf,
  transition: If,
  call: Ut.call,
  nodes: Ut.nodes,
  node: Ut.node,
  size: Ut.size,
  empty: Ut.empty,
  each: Ut.each,
  on: pf,
  attr: Gu,
  attrTween: Ju,
  style: vf,
  styleTween: Ff,
  text: Ef,
  textTween: $f,
  remove: mf,
  tween: qu,
  delay: ef,
  duration: of,
  ease: af,
  easeVarying: hf,
  end: Df,
  [Symbol.iterator]: Ut[Symbol.iterator]
};
function Rf(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Pf = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Rf
};
function qf(t, e) {
  for (var i; !(i = t.__transition) || !(i = i[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return i;
}
function zf(t) {
  var e, i;
  t instanceof Kt ? (e = t._id, t = t._name) : (e = ya(), (i = Pf).time = On(), t = t == null ? null : t + "");
  for (var r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && Cr(l, t, e, h, s, i || qf(l, e));
  return new Kt(r, this._parents, t, e);
}
mi.prototype.interrupt = Nu;
mi.prototype.transition = zf;
const _1 = Math.abs, C1 = Math.atan2, x1 = Math.cos, b1 = Math.max, T1 = Math.min, S1 = Math.sin, k1 = Math.sqrt, Ho = 1e-12, Dn = Math.PI, jo = Dn / 2, v1 = 2 * Dn;
function w1(t) {
  return t > 1 ? 0 : t < -1 ? Dn : Math.acos(t);
}
function B1(t) {
  return t >= 1 ? jo : t <= -1 ? -jo : Math.asin(t);
}
function _a(t) {
  this._context = t;
}
_a.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, e);
        break;
    }
  }
};
function Wf(t) {
  return new _a(t);
}
class Ca {
  constructor(e, i) {
    this._context = e, this._x = i;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, i) {
    switch (e = +e, i = +i, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, i, e, i) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i) / 2, e, this._y0, e, i);
        break;
      }
    }
    this._x0 = e, this._y0 = i;
  }
}
function Hf(t) {
  return new Ca(t, !0);
}
function jf(t) {
  return new Ca(t, !1);
}
function ne() {
}
function er(t, e, i) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + e) / 6,
    (t._y0 + 4 * t._y1 + i) / 6
  );
}
function xr(t) {
  this._context = t;
}
xr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        er(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        er(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function Uf(t) {
  return new xr(t);
}
function xa(t) {
  this._context = t;
}
xa.prototype = {
  areaStart: ne,
  areaEnd: ne,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._x2 = t, this._y2 = e;
        break;
      case 1:
        this._point = 2, this._x3 = t, this._y3 = e;
        break;
      case 2:
        this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
        break;
      default:
        er(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function Yf(t) {
  return new xa(t);
}
function ba(t) {
  this._context = t;
}
ba.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var i = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(i, r) : this._context.moveTo(i, r);
        break;
      case 3:
        this._point = 4;
      default:
        er(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function Gf(t) {
  return new ba(t);
}
function Ta(t, e) {
  this._basis = new xr(t), this._beta = e;
}
Ta.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t = this._x, e = this._y, i = t.length - 1;
    if (i > 0)
      for (var r = t[0], n = e[0], o = t[i] - r, s = e[i] - n, a = -1, l; ++a <= i; )
        l = a / i, this._basis.point(
          this._beta * t[a] + (1 - this._beta) * (r + l * o),
          this._beta * e[a] + (1 - this._beta) * (n + l * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
const Vf = function t(e) {
  function i(r) {
    return e === 1 ? new xr(r) : new Ta(r, e);
  }
  return i.beta = function(r) {
    return t(+r);
  }, i;
}(0.85);
function ir(t, e, i) {
  t._context.bezierCurveTo(
    t._x1 + t._k * (t._x2 - t._x0),
    t._y1 + t._k * (t._y2 - t._y0),
    t._x2 + t._k * (t._x1 - e),
    t._y2 + t._k * (t._y1 - i),
    t._x2,
    t._y2
  );
}
function Nn(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
Nn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        ir(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2, this._x1 = t, this._y1 = e;
        break;
      case 2:
        this._point = 3;
      default:
        ir(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const Xf = function t(e) {
  function i(r) {
    return new Nn(r, e);
  }
  return i.tension = function(r) {
    return t(+r);
  }, i;
}(0);
function Rn(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
Rn.prototype = {
  areaStart: ne,
  areaEnd: ne,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._x3 = t, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t, this._y5 = e;
        break;
      default:
        ir(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const Kf = function t(e) {
  function i(r) {
    return new Rn(r, e);
  }
  return i.tension = function(r) {
    return t(+r);
  }, i;
}(0);
function Pn(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
Pn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        ir(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const Zf = function t(e) {
  function i(r) {
    return new Pn(r, e);
  }
  return i.tension = function(r) {
    return t(+r);
  }, i;
}(0);
function qn(t, e, i) {
  var r = t._x1, n = t._y1, o = t._x2, s = t._y2;
  if (t._l01_a > Ho) {
    var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, l = 3 * t._l01_a * (t._l01_a + t._l12_a);
    r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / l, n = (n * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / l;
  }
  if (t._l23_a > Ho) {
    var h = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, u = 3 * t._l23_a * (t._l23_a + t._l12_a);
    o = (o * h + t._x1 * t._l23_2a - e * t._l12_2a) / u, s = (s * h + t._y1 * t._l23_2a - i * t._l12_2a) / u;
  }
  t._context.bezierCurveTo(r, n, o, s, t._x2, t._y2);
}
function Sa(t, e) {
  this._context = t, this._alpha = e;
}
Sa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    if (t = +t, e = +e, this._point) {
      var i = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        qn(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const Jf = function t(e) {
  function i(r) {
    return e ? new Sa(r, e) : new Nn(r, 0);
  }
  return i.alpha = function(r) {
    return t(+r);
  }, i;
}(0.5);
function ka(t, e) {
  this._context = t, this._alpha = e;
}
ka.prototype = {
  areaStart: ne,
  areaEnd: ne,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t, e) {
    if (t = +t, e = +e, this._point) {
      var i = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t, this._y5 = e;
        break;
      default:
        qn(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const Qf = function t(e) {
  function i(r) {
    return e ? new ka(r, e) : new Rn(r, 0);
  }
  return i.alpha = function(r) {
    return t(+r);
  }, i;
}(0.5);
function va(t, e) {
  this._context = t, this._alpha = e;
}
va.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    if (t = +t, e = +e, this._point) {
      var i = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        qn(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const td = function t(e) {
  function i(r) {
    return e ? new va(r, e) : new Pn(r, 0);
  }
  return i.alpha = function(r) {
    return t(+r);
  }, i;
}(0.5);
function wa(t) {
  this._context = t;
}
wa.prototype = {
  areaStart: ne,
  areaEnd: ne,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(t, e) {
    t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
  }
};
function ed(t) {
  return new wa(t);
}
function Uo(t) {
  return t < 0 ? -1 : 1;
}
function Yo(t, e, i) {
  var r = t._x1 - t._x0, n = e - t._x1, o = (t._y1 - t._y0) / (r || n < 0 && -0), s = (i - t._y1) / (n || r < 0 && -0), a = (o * n + s * r) / (r + n);
  return (Uo(o) + Uo(s)) * Math.min(Math.abs(o), Math.abs(s), 0.5 * Math.abs(a)) || 0;
}
function Go(t, e) {
  var i = t._x1 - t._x0;
  return i ? (3 * (t._y1 - t._y0) / i - e) / 2 : e;
}
function Ur(t, e, i) {
  var r = t._x0, n = t._y0, o = t._x1, s = t._y1, a = (o - r) / 3;
  t._context.bezierCurveTo(r + a, n + a * e, o - a, s - a * i, o, s);
}
function rr(t) {
  this._context = t;
}
rr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Ur(this, this._t0, Go(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    var i = NaN;
    if (t = +t, e = +e, !(t === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Ur(this, Go(this, i = Yo(this, t, e)), i);
          break;
        default:
          Ur(this, this._t0, i = Yo(this, t, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = i;
    }
  }
};
function Ba(t) {
  this._context = new Fa(t);
}
(Ba.prototype = Object.create(rr.prototype)).point = function(t, e) {
  rr.prototype.point.call(this, e, t);
};
function Fa(t) {
  this._context = t;
}
Fa.prototype = {
  moveTo: function(t, e) {
    this._context.moveTo(e, t);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t, e) {
    this._context.lineTo(e, t);
  },
  bezierCurveTo: function(t, e, i, r, n, o) {
    this._context.bezierCurveTo(e, t, r, i, o, n);
  }
};
function id(t) {
  return new rr(t);
}
function rd(t) {
  return new Ba(t);
}
function Aa(t) {
  this._context = t;
}
Aa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var t = this._x, e = this._y, i = t.length;
    if (i)
      if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), i === 2)
        this._context.lineTo(t[1], e[1]);
      else
        for (var r = Vo(t), n = Vo(e), o = 0, s = 1; s < i; ++o, ++s)
          this._context.bezierCurveTo(r[0][o], n[0][o], r[1][o], n[1][o], t[s], e[s]);
    (this._line || this._line !== 0 && i === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
function Vo(t) {
  var e, i = t.length - 1, r, n = new Array(i), o = new Array(i), s = new Array(i);
  for (n[0] = 0, o[0] = 2, s[0] = t[0] + 2 * t[1], e = 1; e < i - 1; ++e)
    n[e] = 1, o[e] = 4, s[e] = 4 * t[e] + 2 * t[e + 1];
  for (n[i - 1] = 2, o[i - 1] = 7, s[i - 1] = 8 * t[i - 1] + t[i], e = 1; e < i; ++e)
    r = n[e] / o[e - 1], o[e] -= r, s[e] -= r * s[e - 1];
  for (n[i - 1] = s[i - 1] / o[i - 1], e = i - 2; e >= 0; --e)
    n[e] = (s[e] - n[e + 1]) / o[e];
  for (o[i - 1] = (t[i] + n[i - 1]) / 2, e = 0; e < i - 1; ++e)
    o[e] = 2 * t[e + 1] - n[e + 1];
  return [n, o];
}
function nd(t) {
  return new Aa(t);
}
function br(t, e) {
  this._context = t, this._t = e;
}
br.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(t, e);
        else {
          var i = this._x * (1 - this._t) + t * this._t;
          this._context.lineTo(i, this._y), this._context.lineTo(i, e);
        }
        break;
      }
    }
    this._x = t, this._y = e;
  }
};
function od(t) {
  return new br(t, 0.5);
}
function sd(t) {
  return new br(t, 0);
}
function ad(t) {
  return new br(t, 1);
}
function ti(t, e, i) {
  this.k = t, this.x = e, this.y = i;
}
ti.prototype = {
  constructor: ti,
  scale: function(t) {
    return t === 1 ? this : new ti(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new ti(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
ti.prototype;
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
const {
  entries: La,
  setPrototypeOf: Xo,
  isFrozen: ld,
  getPrototypeOf: hd,
  getOwnPropertyDescriptor: cd
} = Object;
let {
  freeze: ut,
  seal: kt,
  create: Ea
} = Object, {
  apply: dn,
  construct: pn
} = typeof Reflect < "u" && Reflect;
ut || (ut = function(e) {
  return e;
});
kt || (kt = function(e) {
  return e;
});
dn || (dn = function(e, i, r) {
  return e.apply(i, r);
});
pn || (pn = function(e, i) {
  return new e(...i);
});
const Mi = ft(Array.prototype.forEach), ud = ft(Array.prototype.lastIndexOf), Ko = ft(Array.prototype.pop), Ye = ft(Array.prototype.push), fd = ft(Array.prototype.splice), zi = ft(String.prototype.toLowerCase), Yr = ft(String.prototype.toString), Zo = ft(String.prototype.match), Ge = ft(String.prototype.replace), dd = ft(String.prototype.indexOf), pd = ft(String.prototype.trim), At = ft(Object.prototype.hasOwnProperty), lt = ft(RegExp.prototype.test), Ve = gd(TypeError);
function ft(t) {
  return function(e) {
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
      r[n - 1] = arguments[n];
    return dn(t, e, r);
  };
}
function gd(t) {
  return function() {
    for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
      i[r] = arguments[r];
    return pn(t, i);
  };
}
function R(t, e) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : zi;
  Xo && Xo(t, null);
  let r = e.length;
  for (; r--; ) {
    let n = e[r];
    if (typeof n == "string") {
      const o = i(n);
      o !== n && (ld(e) || (e[r] = o), n = o);
    }
    t[n] = !0;
  }
  return t;
}
function md(t) {
  for (let e = 0; e < t.length; e++)
    At(t, e) || (t[e] = null);
  return t;
}
function he(t) {
  const e = Ea(null);
  for (const [i, r] of La(t))
    At(t, i) && (Array.isArray(r) ? e[i] = md(r) : r && typeof r == "object" && r.constructor === Object ? e[i] = he(r) : e[i] = r);
  return e;
}
function Xe(t, e) {
  for (; t !== null; ) {
    const r = cd(t, e);
    if (r) {
      if (r.get)
        return ft(r.get);
      if (typeof r.value == "function")
        return ft(r.value);
    }
    t = hd(t);
  }
  function i() {
    return null;
  }
  return i;
}
const Jo = ut(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Gr = ut(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Vr = ut(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yd = ut(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Xr = ut(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), _d = ut(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Qo = ut(["#text"]), ts = ut(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Kr = ut(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), es = ut(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Oi = ut(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Cd = kt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), xd = kt(/<%[\w\W]*|[\w\W]*%>/gm), bd = kt(/\$\{[\w\W]*/gm), Td = kt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Sd = kt(/^aria-[\-\w]+$/), Ma = kt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), kd = kt(/^(?:\w+script|data):/i), vd = kt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Oa = kt(/^html$/i), wd = kt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var is = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Sd,
  ATTR_WHITESPACE: vd,
  CUSTOM_ELEMENT: wd,
  DATA_ATTR: Td,
  DOCTYPE_NAME: Oa,
  ERB_EXPR: xd,
  IS_ALLOWED_URI: Ma,
  IS_SCRIPT_OR_DATA: kd,
  MUSTACHE_EXPR: Cd,
  TMPLIT_EXPR: bd
});
const Ke = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, Bd = function() {
  return typeof window > "u" ? null : window;
}, Fd = function(e, i) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (r = i.getAttribute(n));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, rs = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function $a() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Bd();
  const e = (F) => $a(F);
  if (e.version = "3.2.4", e.removed = [], !t || !t.document || t.document.nodeType !== Ke.document || !t.Element)
    return e.isSupported = !1, e;
  let {
    document: i
  } = t;
  const r = i, n = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: s,
    Node: a,
    Element: l,
    NodeFilter: h,
    NamedNodeMap: u = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: f,
    DOMParser: c,
    trustedTypes: p
  } = t, y = l.prototype, S = Xe(y, "cloneNode"), O = Xe(y, "remove"), q = Xe(y, "nextSibling"), T = Xe(y, "childNodes"), U = Xe(y, "parentNode");
  if (typeof s == "function") {
    const F = i.createElement("template");
    F.content && F.content.ownerDocument && (i = F.content.ownerDocument);
  }
  let W, Y = "";
  const {
    implementation: G,
    createNodeIterator: H,
    createDocumentFragment: ae,
    getElementsByTagName: Jt
  } = i, {
    importNode: j
  } = r;
  let I = rs();
  e.isSupported = typeof La == "function" && typeof U == "function" && G && G.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: _t,
    ERB_EXPR: zt,
    TMPLIT_EXPR: M,
    DATA_ATTR: b,
    ARIA_ATTR: C,
    IS_SCRIPT_OR_DATA: v,
    ATTR_WHITESPACE: x,
    CUSTOM_ELEMENT: A
  } = is;
  let {
    IS_ALLOWED_URI: N
  } = is, D = null;
  const X = R({}, [...Jo, ...Gr, ...Vr, ...Xr, ...Qo]);
  let P = null;
  const Q = R({}, [...ts, ...Kr, ...es, ...Oi]);
  let z = Object.seal(Ea(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ct = null, wt = null, Qt = !0, Bt = !0, et = !1, Ft = !0, xt = !1, te = !0, le = !1, Ir = !1, Dr = !1, be = !1, Ti = !1, Si = !1, lo = !0, ho = !1;
  const ph = "user-content-";
  let Nr = !0, We = !1, Te = {}, Se = null;
  const co = R({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let uo = null;
  const fo = R({}, ["audio", "video", "img", "source", "image", "track"]);
  let Rr = null;
  const po = R({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ki = "http://www.w3.org/1998/Math/MathML", vi = "http://www.w3.org/2000/svg", Wt = "http://www.w3.org/1999/xhtml";
  let ke = Wt, Pr = !1, qr = null;
  const gh = R({}, [ki, vi, Wt], Yr);
  let wi = R({}, ["mi", "mo", "mn", "ms", "mtext"]), Bi = R({}, ["annotation-xml"]);
  const mh = R({}, ["title", "style", "font", "a", "script"]);
  let He = null;
  const yh = ["application/xhtml+xml", "text/html"], _h = "text/html";
  let tt = null, ve = null;
  const Ch = i.createElement("form"), go = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, zr = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ve && ve === d)) {
      if ((!d || typeof d != "object") && (d = {}), d = he(d), He = // eslint-disable-next-line unicorn/prefer-includes
      yh.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? _h : d.PARSER_MEDIA_TYPE, tt = He === "application/xhtml+xml" ? Yr : zi, D = At(d, "ALLOWED_TAGS") ? R({}, d.ALLOWED_TAGS, tt) : X, P = At(d, "ALLOWED_ATTR") ? R({}, d.ALLOWED_ATTR, tt) : Q, qr = At(d, "ALLOWED_NAMESPACES") ? R({}, d.ALLOWED_NAMESPACES, Yr) : gh, Rr = At(d, "ADD_URI_SAFE_ATTR") ? R(he(po), d.ADD_URI_SAFE_ATTR, tt) : po, uo = At(d, "ADD_DATA_URI_TAGS") ? R(he(fo), d.ADD_DATA_URI_TAGS, tt) : fo, Se = At(d, "FORBID_CONTENTS") ? R({}, d.FORBID_CONTENTS, tt) : co, Ct = At(d, "FORBID_TAGS") ? R({}, d.FORBID_TAGS, tt) : {}, wt = At(d, "FORBID_ATTR") ? R({}, d.FORBID_ATTR, tt) : {}, Te = At(d, "USE_PROFILES") ? d.USE_PROFILES : !1, Qt = d.ALLOW_ARIA_ATTR !== !1, Bt = d.ALLOW_DATA_ATTR !== !1, et = d.ALLOW_UNKNOWN_PROTOCOLS || !1, Ft = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, xt = d.SAFE_FOR_TEMPLATES || !1, te = d.SAFE_FOR_XML !== !1, le = d.WHOLE_DOCUMENT || !1, be = d.RETURN_DOM || !1, Ti = d.RETURN_DOM_FRAGMENT || !1, Si = d.RETURN_TRUSTED_TYPE || !1, Dr = d.FORCE_BODY || !1, lo = d.SANITIZE_DOM !== !1, ho = d.SANITIZE_NAMED_PROPS || !1, Nr = d.KEEP_CONTENT !== !1, We = d.IN_PLACE || !1, N = d.ALLOWED_URI_REGEXP || Ma, ke = d.NAMESPACE || Wt, wi = d.MATHML_TEXT_INTEGRATION_POINTS || wi, Bi = d.HTML_INTEGRATION_POINTS || Bi, z = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && go(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (z.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && go(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (z.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (z.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), xt && (Bt = !1), Ti && (be = !0), Te && (D = R({}, Qo), P = [], Te.html === !0 && (R(D, Jo), R(P, ts)), Te.svg === !0 && (R(D, Gr), R(P, Kr), R(P, Oi)), Te.svgFilters === !0 && (R(D, Vr), R(P, Kr), R(P, Oi)), Te.mathMl === !0 && (R(D, Xr), R(P, es), R(P, Oi))), d.ADD_TAGS && (D === X && (D = he(D)), R(D, d.ADD_TAGS, tt)), d.ADD_ATTR && (P === Q && (P = he(P)), R(P, d.ADD_ATTR, tt)), d.ADD_URI_SAFE_ATTR && R(Rr, d.ADD_URI_SAFE_ATTR, tt), d.FORBID_CONTENTS && (Se === co && (Se = he(Se)), R(Se, d.FORBID_CONTENTS, tt)), Nr && (D["#text"] = !0), le && R(D, ["html", "head", "body"]), D.table && (R(D, ["tbody"]), delete Ct.tbody), d.TRUSTED_TYPES_POLICY) {
        if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ve('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ve('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        W = d.TRUSTED_TYPES_POLICY, Y = W.createHTML("");
      } else
        W === void 0 && (W = Fd(p, n)), W !== null && typeof Y == "string" && (Y = W.createHTML(""));
      ut && ut(d), ve = d;
    }
  }, mo = R({}, [...Gr, ...Vr, ...yd]), yo = R({}, [...Xr, ..._d]), xh = function(d) {
    let m = U(d);
    (!m || !m.tagName) && (m = {
      namespaceURI: ke,
      tagName: "template"
    });
    const k = zi(d.tagName), K = zi(m.tagName);
    return qr[d.namespaceURI] ? d.namespaceURI === vi ? m.namespaceURI === Wt ? k === "svg" : m.namespaceURI === ki ? k === "svg" && (K === "annotation-xml" || wi[K]) : !!mo[k] : d.namespaceURI === ki ? m.namespaceURI === Wt ? k === "math" : m.namespaceURI === vi ? k === "math" && Bi[K] : !!yo[k] : d.namespaceURI === Wt ? m.namespaceURI === vi && !Bi[K] || m.namespaceURI === ki && !wi[K] ? !1 : !yo[k] && (mh[k] || !mo[k]) : !!(He === "application/xhtml+xml" && qr[d.namespaceURI]) : !1;
  }, Ot = function(d) {
    Ye(e.removed, {
      element: d
    });
    try {
      U(d).removeChild(d);
    } catch {
      O(d);
    }
  }, Fi = function(d, m) {
    try {
      Ye(e.removed, {
        attribute: m.getAttributeNode(d),
        from: m
      });
    } catch {
      Ye(e.removed, {
        attribute: null,
        from: m
      });
    }
    if (m.removeAttribute(d), d === "is")
      if (be || Ti)
        try {
          Ot(m);
        } catch {
        }
      else
        try {
          m.setAttribute(d, "");
        } catch {
        }
  }, _o = function(d) {
    let m = null, k = null;
    if (Dr)
      d = "<remove></remove>" + d;
    else {
      const it = Zo(d, /^[\r\n\t ]+/);
      k = it && it[0];
    }
    He === "application/xhtml+xml" && ke === Wt && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const K = W ? W.createHTML(d) : d;
    if (ke === Wt)
      try {
        m = new c().parseFromString(K, He);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = G.createDocument(ke, "template", null);
      try {
        m.documentElement.innerHTML = Pr ? Y : K;
      } catch {
      }
    }
    const rt = m.body || m.documentElement;
    return d && k && rt.insertBefore(i.createTextNode(k), rt.childNodes[0] || null), ke === Wt ? Jt.call(m, le ? "html" : "body")[0] : le ? m.documentElement : rt;
  }, Co = function(d) {
    return H.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, Wr = function(d) {
    return d instanceof f && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof u) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function");
  }, xo = function(d) {
    return typeof a == "function" && d instanceof a;
  };
  function Ht(F, d, m) {
    Mi(F, (k) => {
      k.call(e, d, m, ve);
    });
  }
  const bo = function(d) {
    let m = null;
    if (Ht(I.beforeSanitizeElements, d, null), Wr(d))
      return Ot(d), !0;
    const k = tt(d.nodeName);
    if (Ht(I.uponSanitizeElement, d, {
      tagName: k,
      allowedTags: D
    }), d.hasChildNodes() && !xo(d.firstElementChild) && lt(/<[/\w]/g, d.innerHTML) && lt(/<[/\w]/g, d.textContent) || d.nodeType === Ke.progressingInstruction || te && d.nodeType === Ke.comment && lt(/<[/\w]/g, d.data))
      return Ot(d), !0;
    if (!D[k] || Ct[k]) {
      if (!Ct[k] && So(k) && (z.tagNameCheck instanceof RegExp && lt(z.tagNameCheck, k) || z.tagNameCheck instanceof Function && z.tagNameCheck(k)))
        return !1;
      if (Nr && !Se[k]) {
        const K = U(d) || d.parentNode, rt = T(d) || d.childNodes;
        if (rt && K) {
          const it = rt.length;
          for (let dt = it - 1; dt >= 0; --dt) {
            const $t = S(rt[dt], !0);
            $t.__removalCount = (d.__removalCount || 0) + 1, K.insertBefore($t, q(d));
          }
        }
      }
      return Ot(d), !0;
    }
    return d instanceof l && !xh(d) || (k === "noscript" || k === "noembed" || k === "noframes") && lt(/<\/no(script|embed|frames)/i, d.innerHTML) ? (Ot(d), !0) : (xt && d.nodeType === Ke.text && (m = d.textContent, Mi([_t, zt, M], (K) => {
      m = Ge(m, K, " ");
    }), d.textContent !== m && (Ye(e.removed, {
      element: d.cloneNode()
    }), d.textContent = m)), Ht(I.afterSanitizeElements, d, null), !1);
  }, To = function(d, m, k) {
    if (lo && (m === "id" || m === "name") && (k in i || k in Ch))
      return !1;
    if (!(Bt && !wt[m] && lt(b, m))) {
      if (!(Qt && lt(C, m))) {
        if (!P[m] || wt[m]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(So(d) && (z.tagNameCheck instanceof RegExp && lt(z.tagNameCheck, d) || z.tagNameCheck instanceof Function && z.tagNameCheck(d)) && (z.attributeNameCheck instanceof RegExp && lt(z.attributeNameCheck, m) || z.attributeNameCheck instanceof Function && z.attributeNameCheck(m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            m === "is" && z.allowCustomizedBuiltInElements && (z.tagNameCheck instanceof RegExp && lt(z.tagNameCheck, k) || z.tagNameCheck instanceof Function && z.tagNameCheck(k)))
          )
            return !1;
        } else if (!Rr[m]) {
          if (!lt(N, Ge(k, x, ""))) {
            if (!((m === "src" || m === "xlink:href" || m === "href") && d !== "script" && dd(k, "data:") === 0 && uo[d])) {
              if (!(et && !lt(v, Ge(k, x, "")))) {
                if (k)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, So = function(d) {
    return d !== "annotation-xml" && Zo(d, A);
  }, ko = function(d) {
    Ht(I.beforeSanitizeAttributes, d, null);
    const {
      attributes: m
    } = d;
    if (!m || Wr(d))
      return;
    const k = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: P,
      forceKeepAttr: void 0
    };
    let K = m.length;
    for (; K--; ) {
      const rt = m[K], {
        name: it,
        namespaceURI: dt,
        value: $t
      } = rt, je = tt(it);
      let at = it === "value" ? $t : pd($t);
      if (k.attrName = je, k.attrValue = at, k.keepAttr = !0, k.forceKeepAttr = void 0, Ht(I.uponSanitizeAttribute, d, k), at = k.attrValue, ho && (je === "id" || je === "name") && (Fi(it, d), at = ph + at), te && lt(/((--!?|])>)|<\/(style|title)/i, at)) {
        Fi(it, d);
        continue;
      }
      if (k.forceKeepAttr || (Fi(it, d), !k.keepAttr))
        continue;
      if (!Ft && lt(/\/>/i, at)) {
        Fi(it, d);
        continue;
      }
      xt && Mi([_t, zt, M], (wo) => {
        at = Ge(at, wo, " ");
      });
      const vo = tt(d.nodeName);
      if (To(vo, je, at)) {
        if (W && typeof p == "object" && typeof p.getAttributeType == "function" && !dt)
          switch (p.getAttributeType(vo, je)) {
            case "TrustedHTML": {
              at = W.createHTML(at);
              break;
            }
            case "TrustedScriptURL": {
              at = W.createScriptURL(at);
              break;
            }
          }
        try {
          dt ? d.setAttributeNS(dt, it, at) : d.setAttribute(it, at), Wr(d) ? Ot(d) : Ko(e.removed);
        } catch {
        }
      }
    }
    Ht(I.afterSanitizeAttributes, d, null);
  }, bh = function F(d) {
    let m = null;
    const k = Co(d);
    for (Ht(I.beforeSanitizeShadowDOM, d, null); m = k.nextNode(); )
      Ht(I.uponSanitizeShadowNode, m, null), bo(m), ko(m), m.content instanceof o && F(m.content);
    Ht(I.afterSanitizeShadowDOM, d, null);
  };
  return e.sanitize = function(F) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = null, k = null, K = null, rt = null;
    if (Pr = !F, Pr && (F = "<!-->"), typeof F != "string" && !xo(F))
      if (typeof F.toString == "function") {
        if (F = F.toString(), typeof F != "string")
          throw Ve("dirty is not a string, aborting");
      } else
        throw Ve("toString is not a function");
    if (!e.isSupported)
      return F;
    if (Ir || zr(d), e.removed = [], typeof F == "string" && (We = !1), We) {
      if (F.nodeName) {
        const $t = tt(F.nodeName);
        if (!D[$t] || Ct[$t])
          throw Ve("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (F instanceof a)
      m = _o("<!---->"), k = m.ownerDocument.importNode(F, !0), k.nodeType === Ke.element && k.nodeName === "BODY" || k.nodeName === "HTML" ? m = k : m.appendChild(k);
    else {
      if (!be && !xt && !le && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return W && Si ? W.createHTML(F) : F;
      if (m = _o(F), !m)
        return be ? null : Si ? Y : "";
    }
    m && Dr && Ot(m.firstChild);
    const it = Co(We ? F : m);
    for (; K = it.nextNode(); )
      bo(K), ko(K), K.content instanceof o && bh(K.content);
    if (We)
      return F;
    if (be) {
      if (Ti)
        for (rt = ae.call(m.ownerDocument); m.firstChild; )
          rt.appendChild(m.firstChild);
      else
        rt = m;
      return (P.shadowroot || P.shadowrootmode) && (rt = j.call(r, rt, !0)), rt;
    }
    let dt = le ? m.outerHTML : m.innerHTML;
    return le && D["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && lt(Oa, m.ownerDocument.doctype.name) && (dt = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + dt), xt && Mi([_t, zt, M], ($t) => {
      dt = Ge(dt, $t, " ");
    }), W && Si ? W.createHTML(dt) : dt;
  }, e.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(F), Ir = !0;
  }, e.clearConfig = function() {
    ve = null, Ir = !1;
  }, e.isValidAttribute = function(F, d, m) {
    ve || zr({});
    const k = tt(F), K = tt(d);
    return To(k, K, m);
  }, e.addHook = function(F, d) {
    typeof d == "function" && Ye(I[F], d);
  }, e.removeHook = function(F, d) {
    if (d !== void 0) {
      const m = ud(I[F], d);
      return m === -1 ? void 0 : fd(I[F], m, 1)[0];
    }
    return Ko(I[F]);
  }, e.removeHooks = function(F) {
    I[F] = [];
  }, e.removeAllHooks = function() {
    I = rs();
  }, e;
}
var Me = $a();
const _i = /<br\s*\/?>/gi, Ad = (t) => t ? Da(t).replace(/\\n/g, "#br#").split("#br#") : [""], Ld = (() => {
  let t = !1;
  return () => {
    t || (Ed(), t = !0);
  };
})();
function Ed() {
  const t = "data-temp-href-target";
  Me.addHook("beforeSanitizeAttributes", (e) => {
    e.tagName === "A" && e.hasAttribute("target") && e.setAttribute(t, e.getAttribute("target") ?? "");
  }), Me.addHook("afterSanitizeAttributes", (e) => {
    e.tagName === "A" && e.hasAttribute(t) && (e.setAttribute("target", e.getAttribute(t) ?? ""), e.removeAttribute(t), e.getAttribute("target") === "_blank" && e.setAttribute("rel", "noopener"));
  });
}
const Ia = (t) => (Ld(), Me.sanitize(t)), ns = (t, e) => {
  var i;
  if (((i = e.flowchart) == null ? void 0 : i.htmlLabels) !== !1) {
    const r = e.securityLevel;
    r === "antiscript" || r === "strict" ? t = Ia(t) : r !== "loose" && (t = Da(t), t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t = t.replace(/=/g, "&equals;"), t = Id(t));
  }
  return t;
}, Oe = (t, e) => t && (e.dompurifyConfig ? t = Me.sanitize(ns(t, e), e.dompurifyConfig).toString() : t = Me.sanitize(ns(t, e), {
  FORBID_TAGS: ["style"]
}).toString(), t), Md = (t, e) => typeof t == "string" ? Oe(t, e) : t.flat().map((i) => Oe(i, e)), Od = (t) => _i.test(t), $d = (t) => t.split(_i), Id = (t) => t.replace(/#br#/g, "<br/>"), Da = (t) => t.replace(_i, "#br#"), Dd = (t) => {
  let e = "";
  return t && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = e.replaceAll(/\(/g, "\\("), e = e.replaceAll(/\)/g, "\\)")), e;
}, Na = (t) => !(t === !1 || ["false", "null", "0"].includes(String(t).trim().toLowerCase())), Nd = function(...t) {
  const e = t.filter((i) => !isNaN(i));
  return Math.max(...e);
}, Rd = function(...t) {
  const e = t.filter((i) => !isNaN(i));
  return Math.min(...e);
}, F1 = function(t) {
  const e = t.split(/(,)/), i = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (n === "," && r > 0 && r + 1 < e.length) {
      const o = e[r - 1], s = e[r + 1];
      Pd(o, s) && (n = o + "," + s, r++, i.pop());
    }
    i.push(qd(n));
  }
  return i.join("");
}, gn = (t, e) => Math.max(0, t.split(e).length - 1), Pd = (t, e) => {
  const i = gn(t, "~"), r = gn(e, "~");
  return i === 1 && r === 1;
}, qd = (t) => {
  const e = gn(t, "~");
  let i = !1;
  if (e <= 1)
    return t;
  e % 2 !== 0 && t.startsWith("~") && (t = t.substring(1), i = !0);
  const r = [...t];
  let n = r.indexOf("~"), o = r.lastIndexOf("~");
  for (; n !== -1 && o !== -1 && n !== o; )
    r[n] = "<", r[o] = ">", n = r.indexOf("~"), o = r.lastIndexOf("~");
  return i && r.unshift("~"), r.join("");
}, os = () => window.MathMLElement !== void 0, mn = /\$\$(.*)\$\$/g, ss = (t) => {
  var e;
  return (((e = t.match(mn)) == null ? void 0 : e.length) ?? 0) > 0;
}, A1 = async (t, e) => {
  const i = document.createElement("div");
  i.innerHTML = await Wd(t, e), i.id = "katex-temp", i.style.visibility = "hidden", i.style.position = "absolute", i.style.top = "0";
  const r = document.querySelector("body");
  r == null || r.insertAdjacentElement("beforeend", i);
  const n = { width: i.clientWidth, height: i.clientHeight };
  return i.remove(), n;
}, zd = async (t, e) => {
  if (!ss(t))
    return t;
  if (!os() && !e.legacyMathML)
    return t.replace(mn, "MathML is unsupported in this environment.");
  const { default: i } = await import("./katex-fa3848e8.js");
  return t.split(_i).map(
    (r) => ss(r) ? `
            <div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">
              ${r}
            </div>
          ` : `<div>${r}</div>`
  ).join("").replace(
    mn,
    (r, n) => i.renderToString(n, {
      throwOnError: !0,
      displayMode: !0,
      output: os() ? "mathml" : "htmlAndMathml"
    }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
  );
}, Wd = async (t, e) => Oe(await zd(t, e), e), zn = {
  getRows: Ad,
  sanitizeText: Oe,
  sanitizeTextOrArray: Md,
  hasBreaks: Od,
  splitBreaks: $d,
  lineBreakRegex: _i,
  removeScript: Ia,
  getUrl: Dd,
  evaluate: Na,
  getMax: Nd,
  getMin: Rd
}, Wi = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    g: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    b: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    h: (t) => t % 360,
    s: (t) => t >= 100 ? 100 : t < 0 ? 0 : t,
    l: (t) => t >= 100 ? 100 : t < 0 ? 0 : t,
    a: (t) => t >= 1 ? 1 : t < 0 ? 0 : t
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (t) => {
    const e = t / 255;
    return t > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (t, e, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + (e - t) * 6 * i : i < 1 / 2 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t),
  hsl2rgb: ({ h: t, s: e, l: i }, r) => {
    if (!e)
      return i * 2.55;
    t /= 360, e /= 100, i /= 100;
    const n = i < 0.5 ? i * (1 + e) : i + e - i * e, o = 2 * i - n;
    switch (r) {
      case "r":
        return Wi.hue2rgb(o, n, t + 1 / 3) * 255;
      case "g":
        return Wi.hue2rgb(o, n, t) * 255;
      case "b":
        return Wi.hue2rgb(o, n, t - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: t, g: e, b: i }, r) => {
    t /= 255, e /= 255, i /= 255;
    const n = Math.max(t, e, i), o = Math.min(t, e, i), s = (n + o) / 2;
    if (r === "l")
      return s * 100;
    if (n === o)
      return 0;
    const a = n - o, l = s > 0.5 ? a / (2 - n - o) : a / (n + o);
    if (r === "s")
      return l * 100;
    switch (n) {
      case t:
        return ((e - i) / a + (e < i ? 6 : 0)) * 60;
      case e:
        return ((i - t) / a + 2) * 60;
      case i:
        return ((t - e) / a + 4) * 60;
      default:
        return -1;
    }
  }
}, Hd = Wi, jd = {
  /* API */
  clamp: (t, e, i) => e > i ? Math.min(e, Math.max(i, t)) : Math.min(i, Math.max(e, t)),
  round: (t) => Math.round(t * 1e10) / 1e10
}, Ud = jd, Yd = {
  /* API */
  dec2hex: (t) => {
    const e = Math.round(t).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }
}, Gd = Yd, Vd = {
  channel: Hd,
  lang: Ud,
  unit: Gd
}, $ = Vd, ee = {};
for (let t = 0; t <= 255; t++)
  ee[t] = $.unit.dec2hex(t);
const nt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class Xd {
  constructor() {
    this.type = nt.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(e) {
    if (this.type && this.type !== e)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = e;
  }
  reset() {
    this.type = nt.ALL;
  }
  is(e) {
    return this.type === e;
  }
}
const Kd = Xd;
class Zd {
  /* CONSTRUCTOR */
  constructor(e, i) {
    this.color = i, this.changed = !1, this.data = e, this.type = new Kd();
  }
  /* API */
  set(e, i) {
    return this.color = i, this.changed = !1, this.data = e, this.type.type = nt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const e = this.data, { h: i, s: r, l: n } = e;
    i === void 0 && (e.h = $.channel.rgb2hsl(e, "h")), r === void 0 && (e.s = $.channel.rgb2hsl(e, "s")), n === void 0 && (e.l = $.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    const e = this.data, { r: i, g: r, b: n } = e;
    i === void 0 && (e.r = $.channel.hsl2rgb(e, "r")), r === void 0 && (e.g = $.channel.hsl2rgb(e, "g")), n === void 0 && (e.b = $.channel.hsl2rgb(e, "b"));
  }
  /* GETTERS */
  get r() {
    const e = this.data, i = e.r;
    return !this.type.is(nt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "r"));
  }
  get g() {
    const e = this.data, i = e.g;
    return !this.type.is(nt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "g"));
  }
  get b() {
    const e = this.data, i = e.b;
    return !this.type.is(nt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "b"));
  }
  get h() {
    const e = this.data, i = e.h;
    return !this.type.is(nt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "h"));
  }
  get s() {
    const e = this.data, i = e.s;
    return !this.type.is(nt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "s"));
  }
  get l() {
    const e = this.data, i = e.l;
    return !this.type.is(nt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(e) {
    this.type.set(nt.RGB), this.changed = !0, this.data.r = e;
  }
  set g(e) {
    this.type.set(nt.RGB), this.changed = !0, this.data.g = e;
  }
  set b(e) {
    this.type.set(nt.RGB), this.changed = !0, this.data.b = e;
  }
  set h(e) {
    this.type.set(nt.HSL), this.changed = !0, this.data.h = e;
  }
  set s(e) {
    this.type.set(nt.HSL), this.changed = !0, this.data.s = e;
  }
  set l(e) {
    this.type.set(nt.HSL), this.changed = !0, this.data.l = e;
  }
  set a(e) {
    this.changed = !0, this.data.a = e;
  }
}
const Jd = Zd, Qd = new Jd({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), Tr = Qd, Ra = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (t) => {
    if (t.charCodeAt(0) !== 35)
      return;
    const e = t.match(Ra.re);
    if (!e)
      return;
    const i = e[1], r = parseInt(i, 16), n = i.length, o = n % 4 === 0, s = n > 4, a = s ? 1 : 17, l = s ? 8 : 4, h = o ? 0 : -1, u = s ? 255 : 15;
    return Tr.set({
      r: (r >> l * (h + 3) & u) * a,
      g: (r >> l * (h + 2) & u) * a,
      b: (r >> l * (h + 1) & u) * a,
      a: o ? (r & u) * a / 255 : 1
    }, t);
  },
  stringify: (t) => {
    const { r: e, g: i, b: r, a: n } = t;
    return n < 1 ? `#${ee[Math.round(e)]}${ee[Math.round(i)]}${ee[Math.round(r)]}${ee[Math.round(n * 255)]}` : `#${ee[Math.round(e)]}${ee[Math.round(i)]}${ee[Math.round(r)]}`;
  }
}, ei = Ra, Hi = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (t) => {
    const e = t.match(Hi.hueRe);
    if (e) {
      const [, i, r] = e;
      switch (r) {
        case "grad":
          return $.channel.clamp.h(parseFloat(i) * 0.9);
        case "rad":
          return $.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
        case "turn":
          return $.channel.clamp.h(parseFloat(i) * 360);
      }
    }
    return $.channel.clamp.h(parseFloat(t));
  },
  /* API */
  parse: (t) => {
    const e = t.charCodeAt(0);
    if (e !== 104 && e !== 72)
      return;
    const i = t.match(Hi.re);
    if (!i)
      return;
    const [, r, n, o, s, a] = i;
    return Tr.set({
      h: Hi._hue2deg(r),
      s: $.channel.clamp.s(parseFloat(n)),
      l: $.channel.clamp.l(parseFloat(o)),
      a: s ? $.channel.clamp.a(a ? parseFloat(s) / 100 : parseFloat(s)) : 1
    }, t);
  },
  stringify: (t) => {
    const { h: e, s: i, l: r, a: n } = t;
    return n < 1 ? `hsla(${$.lang.round(e)}, ${$.lang.round(i)}%, ${$.lang.round(r)}%, ${n})` : `hsl(${$.lang.round(e)}, ${$.lang.round(i)}%, ${$.lang.round(r)}%)`;
  }
}, $i = Hi, ji = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (t) => {
    t = t.toLowerCase();
    const e = ji.colors[t];
    if (e)
      return ei.parse(e);
  },
  stringify: (t) => {
    const e = ei.stringify(t);
    for (const i in ji.colors)
      if (ji.colors[i] === e)
        return i;
  }
}, as = ji, Pa = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (t) => {
    const e = t.charCodeAt(0);
    if (e !== 114 && e !== 82)
      return;
    const i = t.match(Pa.re);
    if (!i)
      return;
    const [, r, n, o, s, a, l, h, u] = i;
    return Tr.set({
      r: $.channel.clamp.r(n ? parseFloat(r) * 2.55 : parseFloat(r)),
      g: $.channel.clamp.g(s ? parseFloat(o) * 2.55 : parseFloat(o)),
      b: $.channel.clamp.b(l ? parseFloat(a) * 2.55 : parseFloat(a)),
      a: h ? $.channel.clamp.a(u ? parseFloat(h) / 100 : parseFloat(h)) : 1
    }, t);
  },
  stringify: (t) => {
    const { r: e, g: i, b: r, a: n } = t;
    return n < 1 ? `rgba(${$.lang.round(e)}, ${$.lang.round(i)}, ${$.lang.round(r)}, ${$.lang.round(n)})` : `rgb(${$.lang.round(e)}, ${$.lang.round(i)}, ${$.lang.round(r)})`;
  }
}, Ii = Pa, tp = {
  /* VARIABLES */
  format: {
    keyword: as,
    hex: ei,
    rgb: Ii,
    rgba: Ii,
    hsl: $i,
    hsla: $i
  },
  /* API */
  parse: (t) => {
    if (typeof t != "string")
      return t;
    const e = ei.parse(t) || Ii.parse(t) || $i.parse(t) || as.parse(t);
    if (e)
      return e;
    throw new Error(`Unsupported color format: "${t}"`);
  },
  stringify: (t) => !t.changed && t.color ? t.color : t.type.is(nt.HSL) || t.data.r === void 0 ? $i.stringify(t) : t.a < 1 || !Number.isInteger(t.r) || !Number.isInteger(t.g) || !Number.isInteger(t.b) ? Ii.stringify(t) : ei.stringify(t)
}, Nt = tp, ep = (t, e) => {
  const i = Nt.parse(t);
  for (const r in e)
    i[r] = $.channel.clamp[r](e[r]);
  return Nt.stringify(i);
}, qa = ep, ip = (t, e, i = 0, r = 1) => {
  if (typeof t != "number")
    return qa(t, { a: e });
  const n = Tr.set({
    r: $.channel.clamp.r(t),
    g: $.channel.clamp.g(e),
    b: $.channel.clamp.b(i),
    a: $.channel.clamp.a(r)
  });
  return Nt.stringify(n);
}, ii = ip, rp = (t) => {
  const { r: e, g: i, b: r } = Nt.parse(t), n = 0.2126 * $.channel.toLinear(e) + 0.7152 * $.channel.toLinear(i) + 0.0722 * $.channel.toLinear(r);
  return $.lang.round(n);
}, np = rp, op = (t) => np(t) >= 0.5, sp = op, ap = (t) => !sp(t), Ci = ap, lp = (t, e, i) => {
  const r = Nt.parse(t), n = r[e], o = $.channel.clamp[e](n + i);
  return n !== o && (r[e] = o), Nt.stringify(r);
}, za = lp, hp = (t, e) => za(t, "l", e), w = hp, cp = (t, e) => za(t, "l", -e), E = cp, up = (t, e) => {
  const i = Nt.parse(t), r = {};
  for (const n in e)
    e[n] && (r[n] = i[n] + e[n]);
  return qa(t, r);
}, g = up, fp = (t, e, i = 50) => {
  const { r, g: n, b: o, a: s } = Nt.parse(t), { r: a, g: l, b: h, a: u } = Nt.parse(e), f = i / 100, c = f * 2 - 1, p = s - u, S = ((c * p === -1 ? c : (c + p) / (1 + c * p)) + 1) / 2, O = 1 - S, q = r * S + a * O, T = n * S + l * O, U = o * S + h * O, W = s * f + u * (1 - f);
  return ii(q, T, U, W);
}, dp = fp, pp = (t, e = 100) => {
  const i = Nt.parse(t);
  return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, dp(i, t, e);
}, _ = pp, ct = (t, e) => e ? g(t, { s: -40, l: 10 }) : g(t, { s: -40, l: -10 }), Sr = "#ffffff", kr = "#f2f2f2";
let gp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    var i, r, n, o, s, a, l, h, u, f, c;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || g(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || g(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || ct(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || ct(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || "grey", this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || E(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || w(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this.darkMode)
      for (let p = 0; p < this.THEME_COLOR_LIMIT; p++)
        this["cScale" + p] = E(this["cScale" + p], 75);
    else
      for (let p = 0; p < this.THEME_COLOR_LIMIT; p++)
        this["cScale" + p] = E(this["cScale" + p], 25);
    for (let p = 0; p < this.THEME_COLOR_LIMIT; p++)
      this["cScaleInv" + p] = this["cScaleInv" + p] || _(this["cScale" + p]);
    for (let p = 0; p < this.THEME_COLOR_LIMIT; p++)
      this.darkMode ? this["cScalePeer" + p] = this["cScalePeer" + p] || w(this["cScale" + p], 10) : this["cScalePeer" + p] = this["cScalePeer" + p] || E(this["cScale" + p], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let p = 0; p < this.THEME_COLOR_LIMIT; p++)
      this["cScaleLabel" + p] = this["cScaleLabel" + p] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let p = 0; p < 5; p++)
      this["surface" + p] = this["surface" + p] || g(this.mainBkg, { h: 180, s: -15, l: e * (5 + p * 3) }), this["surfacePeer" + p] = this["surfacePeer" + p] || g(this.mainBkg, { h: 180, s: -15, l: e * (8 + p * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || g(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || g(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || g(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || g(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || g(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || g(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ci(this.quadrant1Fill) ? w(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((i = this.xyChart) == null ? void 0 : i.backgroundColor) || this.background,
      titleColor: ((r = this.xyChart) == null ? void 0 : r.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((a = this.xyChart) == null ? void 0 : a.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((u = this.xyChart) == null ? void 0 : u.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((f = this.xyChart) == null ? void 0 : f.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((c = this.xyChart) == null ? void 0 : c.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = w(this.git0, 25), this.git1 = w(this.git1, 25), this.git2 = w(this.git2, 25), this.git3 = w(this.git3, 25), this.git4 = w(this.git4, 25), this.git5 = w(this.git5, 25), this.git6 = w(this.git6, 25), this.git7 = w(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const mp = (t) => {
  const e = new gp();
  return e.calculate(t), e;
};
let yp = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = w(this.primaryColor, 16), this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = _(this.background), this.secondaryBorderColor = ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = w(_("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#81B1DB", this.border2 = ii(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = E("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = E(this.sectionBkgColor, 10), this.taskBorderColor = ii(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = ii(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    var e, i, r, n, o, s, a, l, h, u, f;
    this.secondBkg = w(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = w(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.mainContrastColor, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = w(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 });
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || _(this["cScale" + c]);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScalePeer" + c] = this["cScalePeer" + c] || w(this["cScale" + c], 10);
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || g(this.mainBkg, { h: 30, s: -30, l: -(-10 + c * 4) }), this["surfacePeer" + c] = this["surfacePeer" + c] || g(this.mainBkg, { h: 30, s: -30, l: -(-7 + c * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.scaleLabelColor;
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["pie" + c] = this["cScale" + c];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ci(this.quadrant1Fill) ? w(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((o = this.xyChart) == null ? void 0 : o.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((s = this.xyChart) == null ? void 0 : s.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((h = this.xyChart) == null ? void 0 : h.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = w(this.secondaryColor, 20), this.git1 = w(this.pie2 || this.secondaryColor, 20), this.git2 = w(this.pie3 || this.tertiaryColor, 20), this.git3 = w(this.pie4 || g(this.primaryColor, { h: -30 }), 20), this.git4 = w(this.pie5 || g(this.primaryColor, { h: -60 }), 20), this.git5 = w(this.pie6 || g(this.primaryColor, { h: -90 }), 10), this.git6 = w(this.pie7 || g(this.primaryColor, { h: 60 }), 10), this.git7 = w(this.pie8 || g(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || w(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || w(this.background, 2);
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const _p = (t) => {
  const e = new yp();
  return e.calculate(t), e;
};
let Cp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = g(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#e8e8e8", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = ii(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    var e, i, r, n, o, s, a, l, h, u, f;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || E(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || E(this.tertiaryColor, 40);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScale" + c] = E(this["cScale" + c], 10), this["cScalePeer" + c] = this["cScalePeer" + c] || E(this["cScale" + c], 25);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || g(this["cScale" + c], { h: 180 });
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || g(this.mainBkg, { h: 30, l: -(5 + c * 5) }), this["surfacePeer" + c] = this["surfacePeer" + c] || g(this.mainBkg, { h: 30, l: -(7 + c * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || _(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || _(this.labelTextColor);
      for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
        this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = w(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || g(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || g(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ci(this.quadrant1Fill) ? w(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((o = this.xyChart) == null ? void 0 : o.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((s = this.xyChart) == null ? void 0 : s.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((h = this.xyChart) == null ? void 0 : h.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = w(this.git0, 25), this.git1 = w(this.git1, 25), this.git2 = w(this.git2, 25), this.git3 = w(this.git3, 25), this.git4 = w(this.git4, 25), this.git5 = w(this.git5, 25), this.git6 = w(this.git6, 25), this.git7 = w(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || E(_(this.git0), 25), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const xp = (t) => {
  const e = new Cp();
  return e.calculate(t), e;
};
let bp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = w("#cde498", 10), this.primaryBorderColor = ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.primaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, i, r, n, o, s, a, l, h, u, f;
    this.actorBorder = E(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || E(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || E(this.tertiaryColor, 40);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScale" + c] = E(this["cScale" + c], 10), this["cScalePeer" + c] = this["cScalePeer" + c] || E(this["cScale" + c], 25);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || g(this["cScale" + c], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.scaleLabelColor;
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || g(this.mainBkg, { h: 30, s: -30, l: -(5 + c * 5) }), this["surfacePeer" + c] = this["surfacePeer" + c] || g(this.mainBkg, { h: 30, s: -30, l: -(8 + c * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || g(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ci(this.quadrant1Fill) ? w(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((o = this.xyChart) == null ? void 0 : o.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((s = this.xyChart) == null ? void 0 : s.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((h = this.xyChart) == null ? void 0 : h.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = w(this.git0, 25), this.git1 = w(this.git1, 25), this.git2 = w(this.git2, 25), this.git3 = w(this.git3, 25), this.git4 = w(this.git4, 25), this.git5 = w(this.git5, 25), this.git6 = w(this.git6, 25), this.git7 = w(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const Tp = (t) => {
  const e = new bp();
  return e.calculate(t), e;
};
class Sp {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = w(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, i, r, n, o, s, a, l, h, u, f;
    this.secondBkg = w(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = w(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.lineColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || _(this["cScale" + c]);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this.darkMode ? this["cScalePeer" + c] = this["cScalePeer" + c] || w(this["cScale" + c], 10) : this["cScalePeer" + c] = this["cScalePeer" + c] || E(this["cScale" + c], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.scaleLabelColor;
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || g(this.mainBkg, { l: -(5 + c * 5) }), this["surfacePeer" + c] = this["surfacePeer" + c] || g(this.mainBkg, { l: -(8 + c * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = w(this.contrast, 30), this.sectionBkgColor2 = w(this.contrast, 30), this.taskBorderColor = E(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = w(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = E(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 });
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["pie" + c] = this["cScale" + c];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ci(this.quadrant1Fill) ? w(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((o = this.xyChart) == null ? void 0 : o.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((s = this.xyChart) == null ? void 0 : s.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((h = this.xyChart) == null ? void 0 : h.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = E(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || g(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || g(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || g(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || g(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || g(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
}
const kp = (t) => {
  const e = new Sp();
  return e.calculate(t), e;
}, Xt = {
  base: {
    getThemeVariables: mp
  },
  dark: {
    getThemeVariables: _p
  },
  default: {
    getThemeVariables: xp
  },
  forest: {
    getThemeVariables: Tp
  },
  neutral: {
    getThemeVariables: kp
  }
}, Yt = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: !0,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ]
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showTitle: !0,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    parallelCommits: !1,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: ""
  },
  block: {
    useMaxWidth: !0,
    padding: 8
  },
  theme: "default",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "maxEdges"
  ],
  legacyMathML: !1,
  deterministicIds: !1,
  fontSize: 16
}, Wa = {
  ...Yt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Xt.default.getThemeVariables(),
  sequence: {
    ...Yt.sequence,
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    noteFont: function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    },
    actorFont: function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }
  },
  gantt: {
    ...Yt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...Yt.c4,
    useWidth: void 0,
    personFont: function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    },
    external_personFont: function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    },
    systemFont: function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    },
    external_systemFont: function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    },
    system_dbFont: function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    },
    external_system_dbFont: function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    },
    system_queueFont: function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    },
    external_system_queueFont: function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    },
    containerFont: function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    },
    external_containerFont: function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    },
    container_dbFont: function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    },
    external_container_dbFont: function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    },
    container_queueFont: function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    },
    external_container_queueFont: function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    },
    componentFont: function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    },
    external_componentFont: function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    },
    component_dbFont: function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    },
    external_component_dbFont: function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    },
    component_queueFont: function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    },
    external_component_queueFont: function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    },
    boundaryFont: function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    },
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }
  },
  pie: {
    ...Yt.pie,
    useWidth: 984
  },
  xyChart: {
    ...Yt.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...Yt.requirement,
    useWidth: void 0
  },
  gitGraph: {
    ...Yt.gitGraph,
    // TODO: This is a temporary override for `gitGraph`, since every other
    //       diagram does have `useMaxWidth`, but instead sets it to `true`.
    //       Should we set this to `true` instead?
    useMaxWidth: !1
  },
  sankey: {
    ...Yt.sankey,
    // this is false, unlike every other diagram (other than gitGraph)
    // TODO: can we make this default to `true` instead?
    useMaxWidth: !1
  }
}, Ha = (t, e = "") => Object.keys(t).reduce((i, r) => Array.isArray(t[r]) ? i : typeof t[r] == "object" && t[r] !== null ? [...i, e + r, ...Ha(t[r], "")] : [...i, e + r], []), vp = new Set(Ha(Wa, "")), wp = Wa, nr = (t) => {
  if (L.debug("sanitizeDirective called with", t), !(typeof t != "object" || t == null)) {
    if (Array.isArray(t)) {
      t.forEach((e) => nr(e));
      return;
    }
    for (const e of Object.keys(t)) {
      if (L.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !vp.has(e) || t[e] == null) {
        L.debug("sanitize deleting key: ", e), delete t[e];
        continue;
      }
      if (typeof t[e] == "object") {
        L.debug("sanitizing object", e), nr(t[e]);
        continue;
      }
      const i = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const r of i)
        e.includes(r) && (L.debug("sanitizing css option", e), t[e] = Bp(t[e]));
    }
    if (t.themeVariables)
      for (const e of Object.keys(t.themeVariables)) {
        const i = t.themeVariables[e];
        i != null && i.match && !i.match(/^[\d "#%(),.;A-Za-z]+$/) && (t.themeVariables[e] = "");
      }
    L.debug("After sanitization", t);
  }
}, Bp = (t) => {
  let e = 0, i = 0;
  for (const r of t) {
    if (e < i)
      return "{ /* ERROR: Unbalanced CSS */ }";
    r === "{" ? e++ : r === "}" && i++;
  }
  return e !== i ? "{ /* ERROR: Unbalanced CSS */ }" : t;
}, ja = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, ri = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Fp = /\s*%%.*\n/gm;
class Ua extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
}
const $e = {}, vr = function(t, e) {
  t = t.replace(ja, "").replace(ri, "").replace(Fp, `
`);
  for (const [i, { detector: r }] of Object.entries($e))
    if (r(t, e))
      return i;
  throw new Ua(
    `No diagram type detected matching given configuration for text: ${t}`
  );
}, Ya = (...t) => {
  for (const { id: e, detector: i, loader: r } of t)
    Ga(e, i, r);
}, Ga = (t, e, i) => {
  $e[t] ? L.error(`Detector with key ${t} already exists`) : $e[t] = { detector: e, loader: i }, L.debug(`Detector with key ${t} added${i ? " with loader" : ""}`);
}, Ap = (t) => $e[t].loader, yn = (t, e, { depth: i = 2, clobber: r = !1 } = {}) => {
  const n = { depth: i, clobber: r };
  return Array.isArray(e) && !Array.isArray(t) ? (e.forEach((o) => yn(t, o, n)), t) : Array.isArray(e) && Array.isArray(t) ? (e.forEach((o) => {
    t.includes(o) || t.push(o);
  }), t) : t === void 0 || i <= 0 ? t != null && typeof t == "object" && typeof e == "object" ? Object.assign(t, e) : e : (e !== void 0 && typeof t == "object" && typeof e == "object" && Object.keys(e).forEach((o) => {
    typeof e[o] == "object" && (t[o] === void 0 || typeof t[o] == "object") ? (t[o] === void 0 && (t[o] = Array.isArray(e[o]) ? [] : {}), t[o] = yn(t[o], e[o], { depth: i - 1, clobber: r })) : (r || typeof t[o] != "object" && typeof e[o] != "object") && (t[o] = e[o]);
  }), t);
}, ot = yn;
var Lp = typeof global == "object" && global && global.Object === Object && global;
const Va = Lp;
var Ep = typeof self == "object" && self && self.Object === Object && self, Mp = Va || Ep || Function("return this")();
const qt = Mp;
var Op = qt.Symbol;
const or = Op;
var Xa = Object.prototype, $p = Xa.hasOwnProperty, Ip = Xa.toString, Ze = or ? or.toStringTag : void 0;
function Dp(t) {
  var e = $p.call(t, Ze), i = t[Ze];
  try {
    t[Ze] = void 0;
    var r = !0;
  } catch {
  }
  var n = Ip.call(t);
  return r && (e ? t[Ze] = i : delete t[Ze]), n;
}
var Np = Object.prototype, Rp = Np.toString;
function Pp(t) {
  return Rp.call(t);
}
var qp = "[object Null]", zp = "[object Undefined]", ls = or ? or.toStringTag : void 0;
function Pe(t) {
  return t == null ? t === void 0 ? zp : qp : ls && ls in Object(t) ? Dp(t) : Pp(t);
}
function _e(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Wp = "[object AsyncFunction]", Hp = "[object Function]", jp = "[object GeneratorFunction]", Up = "[object Proxy]";
function Wn(t) {
  if (!_e(t))
    return !1;
  var e = Pe(t);
  return e == Hp || e == jp || e == Wp || e == Up;
}
var Yp = qt["__core-js_shared__"];
const Zr = Yp;
var hs = function() {
  var t = /[^.]+$/.exec(Zr && Zr.keys && Zr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Gp(t) {
  return !!hs && hs in t;
}
var Vp = Function.prototype, Xp = Vp.toString;
function Ce(t) {
  if (t != null) {
    try {
      return Xp.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Kp = /[\\^$.*+?()[\]{}|]/g, Zp = /^\[object .+?Constructor\]$/, Jp = Function.prototype, Qp = Object.prototype, tg = Jp.toString, eg = Qp.hasOwnProperty, ig = RegExp(
  "^" + tg.call(eg).replace(Kp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rg(t) {
  if (!_e(t) || Gp(t))
    return !1;
  var e = Wn(t) ? ig : Zp;
  return e.test(Ce(t));
}
function ng(t, e) {
  return t == null ? void 0 : t[e];
}
function xe(t, e) {
  var i = ng(t, e);
  return rg(i) ? i : void 0;
}
var og = xe(Object, "create");
const ui = og;
function sg() {
  this.__data__ = ui ? ui(null) : {}, this.size = 0;
}
function ag(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var lg = "__lodash_hash_undefined__", hg = Object.prototype, cg = hg.hasOwnProperty;
function ug(t) {
  var e = this.__data__;
  if (ui) {
    var i = e[t];
    return i === lg ? void 0 : i;
  }
  return cg.call(e, t) ? e[t] : void 0;
}
var fg = Object.prototype, dg = fg.hasOwnProperty;
function pg(t) {
  var e = this.__data__;
  return ui ? e[t] !== void 0 : dg.call(e, t);
}
var gg = "__lodash_hash_undefined__";
function mg(t, e) {
  var i = this.__data__;
  return this.size += this.has(t) ? 0 : 1, i[t] = ui && e === void 0 ? gg : e, this;
}
function me(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
me.prototype.clear = sg;
me.prototype.delete = ag;
me.prototype.get = ug;
me.prototype.has = pg;
me.prototype.set = mg;
function yg() {
  this.__data__ = [], this.size = 0;
}
function wr(t, e) {
  return t === e || t !== t && e !== e;
}
function Br(t, e) {
  for (var i = t.length; i--; )
    if (wr(t[i][0], e))
      return i;
  return -1;
}
var _g = Array.prototype, Cg = _g.splice;
function xg(t) {
  var e = this.__data__, i = Br(e, t);
  if (i < 0)
    return !1;
  var r = e.length - 1;
  return i == r ? e.pop() : Cg.call(e, i, 1), --this.size, !0;
}
function bg(t) {
  var e = this.__data__, i = Br(e, t);
  return i < 0 ? void 0 : e[i][1];
}
function Tg(t) {
  return Br(this.__data__, t) > -1;
}
function Sg(t, e) {
  var i = this.__data__, r = Br(i, t);
  return r < 0 ? (++this.size, i.push([t, e])) : i[r][1] = e, this;
}
function Zt(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Zt.prototype.clear = yg;
Zt.prototype.delete = xg;
Zt.prototype.get = bg;
Zt.prototype.has = Tg;
Zt.prototype.set = Sg;
var kg = xe(qt, "Map");
const fi = kg;
function vg() {
  this.size = 0, this.__data__ = {
    hash: new me(),
    map: new (fi || Zt)(),
    string: new me()
  };
}
function wg(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Fr(t, e) {
  var i = t.__data__;
  return wg(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map;
}
function Bg(t) {
  var e = Fr(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Fg(t) {
  return Fr(this, t).get(t);
}
function Ag(t) {
  return Fr(this, t).has(t);
}
function Lg(t, e) {
  var i = Fr(this, t), r = i.size;
  return i.set(t, e), this.size += i.size == r ? 0 : 1, this;
}
function se(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
se.prototype.clear = vg;
se.prototype.delete = Bg;
se.prototype.get = Fg;
se.prototype.has = Ag;
se.prototype.set = Lg;
var Eg = "Expected a function";
function xi(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Eg);
  var i = function() {
    var r = arguments, n = e ? e.apply(this, r) : r[0], o = i.cache;
    if (o.has(n))
      return o.get(n);
    var s = t.apply(this, r);
    return i.cache = o.set(n, s) || o, s;
  };
  return i.cache = new (xi.Cache || se)(), i;
}
xi.Cache = se;
function Mg() {
  this.__data__ = new Zt(), this.size = 0;
}
function Og(t) {
  var e = this.__data__, i = e.delete(t);
  return this.size = e.size, i;
}
function $g(t) {
  return this.__data__.get(t);
}
function Ig(t) {
  return this.__data__.has(t);
}
var Dg = 200;
function Ng(t, e) {
  var i = this.__data__;
  if (i instanceof Zt) {
    var r = i.__data__;
    if (!fi || r.length < Dg - 1)
      return r.push([t, e]), this.size = ++i.size, this;
    i = this.__data__ = new se(r);
  }
  return i.set(t, e), this.size = i.size, this;
}
function qe(t) {
  var e = this.__data__ = new Zt(t);
  this.size = e.size;
}
qe.prototype.clear = Mg;
qe.prototype.delete = Og;
qe.prototype.get = $g;
qe.prototype.has = Ig;
qe.prototype.set = Ng;
var Rg = function() {
  try {
    var t = xe(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const sr = Rg;
function Hn(t, e, i) {
  e == "__proto__" && sr ? sr(t, e, {
    configurable: !0,
    enumerable: !0,
    value: i,
    writable: !0
  }) : t[e] = i;
}
function _n(t, e, i) {
  (i !== void 0 && !wr(t[e], i) || i === void 0 && !(e in t)) && Hn(t, e, i);
}
function Pg(t) {
  return function(e, i, r) {
    for (var n = -1, o = Object(e), s = r(e), a = s.length; a--; ) {
      var l = s[t ? a : ++n];
      if (i(o[l], l, o) === !1)
        break;
    }
    return e;
  };
}
var qg = Pg();
const zg = qg;
var Ka = typeof exports == "object" && exports && !exports.nodeType && exports, cs = Ka && typeof module == "object" && module && !module.nodeType && module, Wg = cs && cs.exports === Ka, us = Wg ? qt.Buffer : void 0, fs = us ? us.allocUnsafe : void 0;
function Hg(t, e) {
  if (e)
    return t.slice();
  var i = t.length, r = fs ? fs(i) : new t.constructor(i);
  return t.copy(r), r;
}
var jg = qt.Uint8Array;
const ds = jg;
function Ug(t) {
  var e = new t.constructor(t.byteLength);
  return new ds(e).set(new ds(t)), e;
}
function Yg(t, e) {
  var i = e ? Ug(t.buffer) : t.buffer;
  return new t.constructor(i, t.byteOffset, t.length);
}
function Gg(t, e) {
  var i = -1, r = t.length;
  for (e || (e = Array(r)); ++i < r; )
    e[i] = t[i];
  return e;
}
var ps = Object.create, Vg = function() {
  function t() {
  }
  return function(e) {
    if (!_e(e))
      return {};
    if (ps)
      return ps(e);
    t.prototype = e;
    var i = new t();
    return t.prototype = void 0, i;
  };
}();
const Xg = Vg;
function Za(t, e) {
  return function(i) {
    return t(e(i));
  };
}
var Kg = Za(Object.getPrototypeOf, Object);
const Ja = Kg;
var Zg = Object.prototype;
function Ar(t) {
  var e = t && t.constructor, i = typeof e == "function" && e.prototype || Zg;
  return t === i;
}
function Jg(t) {
  return typeof t.constructor == "function" && !Ar(t) ? Xg(Ja(t)) : {};
}
function bi(t) {
  return t != null && typeof t == "object";
}
var Qg = "[object Arguments]";
function gs(t) {
  return bi(t) && Pe(t) == Qg;
}
var Qa = Object.prototype, tm = Qa.hasOwnProperty, em = Qa.propertyIsEnumerable, im = gs(function() {
  return arguments;
}()) ? gs : function(t) {
  return bi(t) && tm.call(t, "callee") && !em.call(t, "callee");
};
const ar = im;
var rm = Array.isArray;
const lr = rm;
var nm = 9007199254740991;
function tl(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= nm;
}
function Lr(t) {
  return t != null && tl(t.length) && !Wn(t);
}
function om(t) {
  return bi(t) && Lr(t);
}
function sm() {
  return !1;
}
var el = typeof exports == "object" && exports && !exports.nodeType && exports, ms = el && typeof module == "object" && module && !module.nodeType && module, am = ms && ms.exports === el, ys = am ? qt.Buffer : void 0, lm = ys ? ys.isBuffer : void 0, hm = lm || sm;
const jn = hm;
var cm = "[object Object]", um = Function.prototype, fm = Object.prototype, il = um.toString, dm = fm.hasOwnProperty, pm = il.call(Object);
function gm(t) {
  if (!bi(t) || Pe(t) != cm)
    return !1;
  var e = Ja(t);
  if (e === null)
    return !0;
  var i = dm.call(e, "constructor") && e.constructor;
  return typeof i == "function" && i instanceof i && il.call(i) == pm;
}
var mm = "[object Arguments]", ym = "[object Array]", _m = "[object Boolean]", Cm = "[object Date]", xm = "[object Error]", bm = "[object Function]", Tm = "[object Map]", Sm = "[object Number]", km = "[object Object]", vm = "[object RegExp]", wm = "[object Set]", Bm = "[object String]", Fm = "[object WeakMap]", Am = "[object ArrayBuffer]", Lm = "[object DataView]", Em = "[object Float32Array]", Mm = "[object Float64Array]", Om = "[object Int8Array]", $m = "[object Int16Array]", Im = "[object Int32Array]", Dm = "[object Uint8Array]", Nm = "[object Uint8ClampedArray]", Rm = "[object Uint16Array]", Pm = "[object Uint32Array]", V = {};
V[Em] = V[Mm] = V[Om] = V[$m] = V[Im] = V[Dm] = V[Nm] = V[Rm] = V[Pm] = !0;
V[mm] = V[ym] = V[Am] = V[_m] = V[Lm] = V[Cm] = V[xm] = V[bm] = V[Tm] = V[Sm] = V[km] = V[vm] = V[wm] = V[Bm] = V[Fm] = !1;
function qm(t) {
  return bi(t) && tl(t.length) && !!V[Pe(t)];
}
function zm(t) {
  return function(e) {
    return t(e);
  };
}
var rl = typeof exports == "object" && exports && !exports.nodeType && exports, ni = rl && typeof module == "object" && module && !module.nodeType && module, Wm = ni && ni.exports === rl, Jr = Wm && Va.process, Hm = function() {
  try {
    var t = ni && ni.require && ni.require("util").types;
    return t || Jr && Jr.binding && Jr.binding("util");
  } catch {
  }
}();
const _s = Hm;
var Cs = _s && _s.isTypedArray, jm = Cs ? zm(Cs) : qm;
const Un = jm;
function Cn(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
var Um = Object.prototype, Ym = Um.hasOwnProperty;
function Gm(t, e, i) {
  var r = t[e];
  (!(Ym.call(t, e) && wr(r, i)) || i === void 0 && !(e in t)) && Hn(t, e, i);
}
function Vm(t, e, i, r) {
  var n = !i;
  i || (i = {});
  for (var o = -1, s = e.length; ++o < s; ) {
    var a = e[o], l = r ? r(i[a], t[a], a, i, t) : void 0;
    l === void 0 && (l = t[a]), n ? Hn(i, a, l) : Gm(i, a, l);
  }
  return i;
}
function Xm(t, e) {
  for (var i = -1, r = Array(t); ++i < t; )
    r[i] = e(i);
  return r;
}
var Km = 9007199254740991, Zm = /^(?:0|[1-9]\d*)$/;
function nl(t, e) {
  var i = typeof t;
  return e = e ?? Km, !!e && (i == "number" || i != "symbol" && Zm.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var Jm = Object.prototype, Qm = Jm.hasOwnProperty;
function t0(t, e) {
  var i = lr(t), r = !i && ar(t), n = !i && !r && jn(t), o = !i && !r && !n && Un(t), s = i || r || n || o, a = s ? Xm(t.length, String) : [], l = a.length;
  for (var h in t)
    (e || Qm.call(t, h)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    nl(h, l))) && a.push(h);
  return a;
}
function e0(t) {
  var e = [];
  if (t != null)
    for (var i in Object(t))
      e.push(i);
  return e;
}
var i0 = Object.prototype, r0 = i0.hasOwnProperty;
function n0(t) {
  if (!_e(t))
    return e0(t);
  var e = Ar(t), i = [];
  for (var r in t)
    r == "constructor" && (e || !r0.call(t, r)) || i.push(r);
  return i;
}
function ol(t) {
  return Lr(t) ? t0(t, !0) : n0(t);
}
function o0(t) {
  return Vm(t, ol(t));
}
function s0(t, e, i, r, n, o, s) {
  var a = Cn(t, i), l = Cn(e, i), h = s.get(l);
  if (h) {
    _n(t, i, h);
    return;
  }
  var u = o ? o(a, l, i + "", t, e, s) : void 0, f = u === void 0;
  if (f) {
    var c = lr(l), p = !c && jn(l), y = !c && !p && Un(l);
    u = l, c || p || y ? lr(a) ? u = a : om(a) ? u = Gg(a) : p ? (f = !1, u = Hg(l, !0)) : y ? (f = !1, u = Yg(l, !0)) : u = [] : gm(l) || ar(l) ? (u = a, ar(a) ? u = o0(a) : (!_e(a) || Wn(a)) && (u = Jg(l))) : f = !1;
  }
  f && (s.set(l, u), n(u, l, r, o, s), s.delete(l)), _n(t, i, u);
}
function sl(t, e, i, r, n) {
  t !== e && zg(e, function(o, s) {
    if (n || (n = new qe()), _e(o))
      s0(t, e, s, i, sl, r, n);
    else {
      var a = r ? r(Cn(t, s), o, s + "", t, e, n) : void 0;
      a === void 0 && (a = o), _n(t, s, a);
    }
  }, ol);
}
function al(t) {
  return t;
}
function a0(t, e, i) {
  switch (i.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, i[0]);
    case 2:
      return t.call(e, i[0], i[1]);
    case 3:
      return t.call(e, i[0], i[1], i[2]);
  }
  return t.apply(e, i);
}
var xs = Math.max;
function l0(t, e, i) {
  return e = xs(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, n = -1, o = xs(r.length - e, 0), s = Array(o); ++n < o; )
      s[n] = r[e + n];
    n = -1;
    for (var a = Array(e + 1); ++n < e; )
      a[n] = r[n];
    return a[e] = i(s), a0(t, this, a);
  };
}
function h0(t) {
  return function() {
    return t;
  };
}
var c0 = sr ? function(t, e) {
  return sr(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: h0(e),
    writable: !0
  });
} : al;
const u0 = c0;
var f0 = 800, d0 = 16, p0 = Date.now;
function g0(t) {
  var e = 0, i = 0;
  return function() {
    var r = p0(), n = d0 - (r - i);
    if (i = r, n > 0) {
      if (++e >= f0)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
var m0 = g0(u0);
const y0 = m0;
function _0(t, e) {
  return y0(l0(t, e, al), t + "");
}
function C0(t, e, i) {
  if (!_e(i))
    return !1;
  var r = typeof e;
  return (r == "number" ? Lr(i) && nl(e, i.length) : r == "string" && e in i) ? wr(i[e], t) : !1;
}
function x0(t) {
  return _0(function(e, i) {
    var r = -1, n = i.length, o = n > 1 ? i[n - 1] : void 0, s = n > 2 ? i[2] : void 0;
    for (o = t.length > 3 && typeof o == "function" ? (n--, o) : void 0, s && C0(i[0], i[1], s) && (o = n < 3 ? void 0 : o, n = 1), e = Object(e); ++r < n; ) {
      var a = i[r];
      a && t(e, a, r, o);
    }
    return e;
  });
}
var b0 = x0(function(t, e, i) {
  sl(t, e, i);
});
const T0 = b0, S0 = "​", k0 = {
  curveBasis: Uf,
  curveBasisClosed: Yf,
  curveBasisOpen: Gf,
  curveBumpX: Hf,
  curveBumpY: jf,
  curveBundle: Vf,
  curveCardinalClosed: Kf,
  curveCardinalOpen: Zf,
  curveCardinal: Xf,
  curveCatmullRomClosed: Qf,
  curveCatmullRomOpen: td,
  curveCatmullRom: Jf,
  curveLinear: Wf,
  curveLinearClosed: ed,
  curveMonotoneX: id,
  curveMonotoneY: rd,
  curveNatural: nd,
  curveStep: od,
  curveStepAfter: ad,
  curveStepBefore: sd
}, v0 = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, w0 = function(t, e) {
  const i = ll(t, /(?:init\b)|(?:initialize\b)/);
  let r = {};
  if (Array.isArray(i)) {
    const s = i.map((a) => a.args);
    nr(s), r = ot(r, [...s]);
  } else
    r = i.args;
  if (!r)
    return;
  let n = vr(t, e);
  const o = "config";
  return r[o] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), r[n] = r[o], delete r[o]), r;
}, ll = function(t, e = null) {
  try {
    const i = new RegExp(
      `[%]{2}(?![{]${v0.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    t = t.trim().replace(i, "").replace(/'/gm, '"'), L.debug(
      `Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t}`
    );
    let r;
    const n = [];
    for (; (r = ri.exec(t)) !== null; )
      if (r.index === ri.lastIndex && ri.lastIndex++, r && !e || e && r[1] && r[1].match(e) || e && r[2] && r[2].match(e)) {
        const o = r[1] ? r[1] : r[2], s = r[3] ? r[3].trim() : r[4] ? JSON.parse(r[4].trim()) : null;
        n.push({ type: o, args: s });
      }
    return n.length === 0 ? { type: t, args: null } : n.length === 1 ? n[0] : n;
  } catch (i) {
    return L.error(
      `ERROR: ${i.message} - Unable to parse directive type: '${e}' based on the text: '${t}'`
    ), { type: void 0, args: null };
  }
}, B0 = function(t) {
  return t.replace(ri, "");
}, F0 = function(t, e) {
  for (const [i, r] of e.entries())
    if (r.match(t))
      return i;
  return -1;
};
function A0(t, e) {
  if (!t)
    return e;
  const i = `curve${t.charAt(0).toUpperCase() + t.slice(1)}`;
  return k0[i] ?? e;
}
function L0(t, e) {
  const i = t.trim();
  if (i)
    return e.securityLevel !== "loose" ? Us.sanitizeUrl(i) : i;
}
const E0 = (t, ...e) => {
  const i = t.split("."), r = i.length - 1, n = i[r];
  let o = window;
  for (let s = 0; s < r; s++)
    if (o = o[i[s]], !o) {
      L.error(`Function name: ${t} not found in window`);
      return;
    }
  o[n](...e);
};
function hl(t, e) {
  return !t || !e ? 0 : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function M0(t) {
  let e, i = 0;
  t.forEach((n) => {
    i += hl(n, e), e = n;
  });
  const r = i / 2;
  return Yn(t, r);
}
function O0(t) {
  return t.length === 1 ? t[0] : M0(t);
}
const bs = (t, e = 2) => {
  const i = Math.pow(10, e);
  return Math.round(t * i) / i;
}, Yn = (t, e) => {
  let i, r = e;
  for (const n of t) {
    if (i) {
      const o = hl(n, i);
      if (o < r)
        r -= o;
      else {
        const s = r / o;
        if (s <= 0)
          return i;
        if (s >= 1)
          return { x: n.x, y: n.y };
        if (s > 0 && s < 1)
          return {
            x: bs((1 - s) * i.x + s * n.x, 5),
            y: bs((1 - s) * i.y + s * n.y, 5)
          };
      }
    }
    i = n;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, $0 = (t, e, i) => {
  L.info(`our points ${JSON.stringify(e)}`), e[0] !== i && (e = e.reverse());
  const n = Yn(e, 25), o = t ? 10 : 5, s = Math.atan2(e[0].y - n.y, e[0].x - n.x), a = { x: 0, y: 0 };
  return a.x = Math.sin(s) * o + (e[0].x + n.x) / 2, a.y = -Math.cos(s) * o + (e[0].y + n.y) / 2, a;
};
function I0(t, e, i) {
  const r = structuredClone(i);
  L.info("our points", r), e !== "start_left" && e !== "start_right" && r.reverse();
  const n = 25 + t, o = Yn(r, n), s = 10 + t * 0.5, a = Math.atan2(r[0].y - o.y, r[0].x - o.x), l = { x: 0, y: 0 };
  return e === "start_left" ? (l.x = Math.sin(a + Math.PI) * s + (r[0].x + o.x) / 2, l.y = -Math.cos(a + Math.PI) * s + (r[0].y + o.y) / 2) : e === "end_right" ? (l.x = Math.sin(a - Math.PI) * s + (r[0].x + o.x) / 2 - 5, l.y = -Math.cos(a - Math.PI) * s + (r[0].y + o.y) / 2 - 5) : e === "end_left" ? (l.x = Math.sin(a) * s + (r[0].x + o.x) / 2 - 5, l.y = -Math.cos(a) * s + (r[0].y + o.y) / 2 - 5) : (l.x = Math.sin(a) * s + (r[0].x + o.x) / 2, l.y = -Math.cos(a) * s + (r[0].y + o.y) / 2), l;
}
function D0(t) {
  let e = "", i = "";
  for (const r of t)
    r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? i = i + r + ";" : e = e + r + ";");
  return { style: e, labelStyle: i };
}
let Ts = 0;
const N0 = () => (Ts++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Ts);
function R0(t) {
  let e = "";
  const i = "0123456789abcdef", r = i.length;
  for (let n = 0; n < t; n++)
    e += i.charAt(Math.floor(Math.random() * r));
  return e;
}
const P0 = (t) => R0(t.length), q0 = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, z0 = function(t, e) {
  const i = e.text.replace(zn.lineBreakRegex, " "), [, r] = Vn(e.fontSize), n = t.append("text");
  n.attr("x", e.x), n.attr("y", e.y), n.style("text-anchor", e.anchor), n.style("font-family", e.fontFamily), n.style("font-size", r), n.style("font-weight", e.fontWeight), n.attr("fill", e.fill), e.class !== void 0 && n.attr("class", e.class);
  const o = n.append("tspan");
  return o.attr("x", e.x + e.textMargin * 2), o.attr("fill", e.fill), o.text(i), n;
}, W0 = xi(
  (t, e, i) => {
    if (!t || (i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      i
    ), zn.lineBreakRegex.test(t)))
      return t;
    const r = t.split(" "), n = [];
    let o = "";
    return r.forEach((s, a) => {
      const l = hr(`${s} `, i), h = hr(o, i);
      if (l > e) {
        const { hyphenatedStrings: c, remainingWord: p } = H0(s, e, "-", i);
        n.push(o, ...c), o = p;
      } else
        h + l >= e ? (n.push(o), o = s) : o = [o, s].filter(Boolean).join(" ");
      a + 1 === r.length && n.push(o);
    }), n.filter((s) => s !== "").join(i.joinWith);
  },
  (t, e, i) => `${t}${e}${i.fontSize}${i.fontWeight}${i.fontFamily}${i.joinWith}`
), H0 = xi(
  (t, e, i = "-", r) => {
    r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      r
    );
    const n = [...t], o = [];
    let s = "";
    return n.forEach((a, l) => {
      const h = `${s}${a}`;
      if (hr(h, r) >= e) {
        const f = l + 1, c = n.length === f, p = `${h}${i}`;
        o.push(c ? h : p), s = "";
      } else
        s = h;
    }), { hyphenatedStrings: o, remainingWord: s };
  },
  (t, e, i = "-", r) => `${t}${e}${i}${r.fontSize}${r.fontWeight}${r.fontFamily}`
);
function j0(t, e) {
  return Gn(t, e).height;
}
function hr(t, e) {
  return Gn(t, e).width;
}
const Gn = xi(
  (t, e) => {
    const { fontSize: i = 12, fontFamily: r = "Arial", fontWeight: n = 400 } = e;
    if (!t)
      return { width: 0, height: 0 };
    const [, o] = Vn(i), s = ["sans-serif", r], a = t.split(zn.lineBreakRegex), l = [], h = Tt("body");
    if (!h.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const u = h.append("svg");
    for (const c of s) {
      let p = 0;
      const y = { width: 0, height: 0, lineHeight: 0 };
      for (const S of a) {
        const O = q0();
        O.text = S || S0;
        const q = z0(u, O).style("font-size", o).style("font-weight", n).style("font-family", c), T = (q._groups || q)[0][0].getBBox();
        if (T.width === 0 && T.height === 0)
          throw new Error("svg element not in render tree");
        y.width = Math.round(Math.max(y.width, T.width)), p = Math.round(T.height), y.height += p, y.lineHeight = Math.round(Math.max(y.lineHeight, p));
      }
      l.push(y);
    }
    u.remove();
    const f = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[f];
  },
  (t, e) => `${t}${e.fontSize}${e.fontWeight}${e.fontFamily}`
);
class U0 {
  constructor(e = !1, i) {
    this.count = 0, this.count = i ? i.length : 0, this.next = e ? () => this.count++ : () => Date.now();
  }
}
let Di;
const Y0 = function(t) {
  return Di = Di || document.createElement("div"), t = escape(t).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Di.innerHTML = t, unescape(Di.textContent);
};
function cl(t) {
  return "str" in t;
}
const G0 = (t, e, i, r) => {
  var o;
  if (!r)
    return;
  const n = (o = t.node()) == null ? void 0 : o.getBBox();
  n && t.append("text").text(r).attr("x", n.x + n.width / 2).attr("y", -i).attr("class", e);
}, Vn = (t) => {
  if (typeof t == "number")
    return [t, t + "px"];
  const e = parseInt(t ?? "", 10);
  return Number.isNaN(e) ? [void 0, void 0] : t === String(e) ? [e, t + "px"] : [e, t];
};
function ul(t, e) {
  return T0({}, t, e);
}
const oi = {
  assignWithDepth: ot,
  wrapLabel: W0,
  calculateTextHeight: j0,
  calculateTextWidth: hr,
  calculateTextDimensions: Gn,
  cleanAndMerge: ul,
  detectInit: w0,
  detectDirective: ll,
  isSubstringInArray: F0,
  interpolateToCurve: A0,
  calcLabelPosition: O0,
  calcCardinalityPosition: $0,
  calcTerminalLabelPosition: I0,
  formatUrl: L0,
  getStylesFromArray: D0,
  generateId: N0,
  random: P0,
  runFunc: E0,
  entityDecode: Y0,
  insertTitle: G0,
  parseFontSize: Vn,
  InitIDGenerator: U0
}, V0 = function(t) {
  let e = t;
  return e = e.replace(/style.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/classDef.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/#\w+;/g, function(i) {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? "ﬂ°°" + r + "¶ß" : "ﬂ°" + r + "¶ß";
  }), e;
}, X0 = function(t) {
  return t.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
};
var fl = "comm", dl = "rule", pl = "decl", K0 = "@import", Z0 = "@keyframes", J0 = "@layer", gl = Math.abs, Xn = String.fromCharCode;
function ml(t) {
  return t.trim();
}
function Ui(t, e, i) {
  return t.replace(e, i);
}
function Q0(t, e, i) {
  return t.indexOf(e, i);
}
function di(t, e) {
  return t.charCodeAt(e) | 0;
}
function pi(t, e, i) {
  return t.slice(e, i);
}
function Gt(t) {
  return t.length;
}
function ty(t) {
  return t.length;
}
function Ni(t, e) {
  return e.push(t), t;
}
var Er = 1, Ie = 1, yl = 0, vt = 0, Z = 0, ze = "";
function Kn(t, e, i, r, n, o, s, a) {
  return { value: t, root: e, parent: i, type: r, props: n, children: o, line: Er, column: Ie, length: s, return: "", siblings: a };
}
function ey() {
  return Z;
}
function iy() {
  return Z = vt > 0 ? di(ze, --vt) : 0, Ie--, Z === 10 && (Ie = 1, Er--), Z;
}
function Et() {
  return Z = vt < yl ? di(ze, vt++) : 0, Ie++, Z === 10 && (Ie = 1, Er++), Z;
}
function de() {
  return di(ze, vt);
}
function Yi() {
  return vt;
}
function Mr(t, e) {
  return pi(ze, t, e);
}
function xn(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ry(t) {
  return Er = Ie = 1, yl = Gt(ze = t), vt = 0, [];
}
function ny(t) {
  return ze = "", t;
}
function Qr(t) {
  return ml(Mr(vt - 1, bn(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function oy(t) {
  for (; (Z = de()) && Z < 33; )
    Et();
  return xn(t) > 2 || xn(Z) > 3 ? "" : " ";
}
function sy(t, e) {
  for (; --e && Et() && !(Z < 48 || Z > 102 || Z > 57 && Z < 65 || Z > 70 && Z < 97); )
    ;
  return Mr(t, Yi() + (e < 6 && de() == 32 && Et() == 32));
}
function bn(t) {
  for (; Et(); )
    switch (Z) {
      case t:
        return vt;
      case 34:
      case 39:
        t !== 34 && t !== 39 && bn(Z);
        break;
      case 40:
        t === 41 && bn(t);
        break;
      case 92:
        Et();
        break;
    }
  return vt;
}
function ay(t, e) {
  for (; Et() && t + Z !== 47 + 10; )
    if (t + Z === 42 + 42 && de() === 47)
      break;
  return "/*" + Mr(e, vt - 1) + "*" + Xn(t === 47 ? t : Et());
}
function ly(t) {
  for (; !xn(de()); )
    Et();
  return Mr(t, vt);
}
function hy(t) {
  return ny(Gi("", null, null, null, [""], t = ry(t), 0, [0], t));
}
function Gi(t, e, i, r, n, o, s, a, l) {
  for (var h = 0, u = 0, f = s, c = 0, p = 0, y = 0, S = 1, O = 1, q = 1, T = 0, U = "", W = n, Y = o, G = r, H = U; O; )
    switch (y = T, T = Et()) {
      case 40:
        if (y != 108 && di(H, f - 1) == 58) {
          Q0(H += Ui(Qr(T), "&", "&\f"), "&\f", gl(h ? a[h - 1] : 0)) != -1 && (q = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        H += Qr(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        H += oy(y);
        break;
      case 92:
        H += sy(Yi() - 1, 7);
        continue;
      case 47:
        switch (de()) {
          case 42:
          case 47:
            Ni(cy(ay(Et(), Yi()), e, i, l), l);
            break;
          default:
            H += "/";
        }
        break;
      case 123 * S:
        a[h++] = Gt(H) * q;
      case 125 * S:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            O = 0;
          case 59 + u:
            q == -1 && (H = Ui(H, /\f/g, "")), p > 0 && Gt(H) - f && Ni(p > 32 ? ks(H + ";", r, i, f - 1, l) : ks(Ui(H, " ", "") + ";", r, i, f - 2, l), l);
            break;
          case 59:
            H += ";";
          default:
            if (Ni(G = Ss(H, e, i, h, u, n, a, U, W = [], Y = [], f, o), o), T === 123)
              if (u === 0)
                Gi(H, e, G, G, W, o, f, a, Y);
              else
                switch (c === 99 && di(H, 3) === 110 ? 100 : c) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gi(t, G, G, r && Ni(Ss(t, G, G, 0, 0, n, a, U, n, W = [], f, Y), Y), n, Y, f, a, r ? W : Y);
                    break;
                  default:
                    Gi(H, G, G, G, [""], Y, 0, a, Y);
                }
        }
        h = u = p = 0, S = q = 1, U = H = "", f = s;
        break;
      case 58:
        f = 1 + Gt(H), p = y;
      default:
        if (S < 1) {
          if (T == 123)
            --S;
          else if (T == 125 && S++ == 0 && iy() == 125)
            continue;
        }
        switch (H += Xn(T), T * S) {
          case 38:
            q = u > 0 ? 1 : (H += "\f", -1);
            break;
          case 44:
            a[h++] = (Gt(H) - 1) * q, q = 1;
            break;
          case 64:
            de() === 45 && (H += Qr(Et())), c = de(), u = f = Gt(U = H += ly(Yi())), T++;
            break;
          case 45:
            y === 45 && Gt(H) == 2 && (S = 0);
        }
    }
  return o;
}
function Ss(t, e, i, r, n, o, s, a, l, h, u, f) {
  for (var c = n - 1, p = n === 0 ? o : [""], y = ty(p), S = 0, O = 0, q = 0; S < r; ++S)
    for (var T = 0, U = pi(t, c + 1, c = gl(O = s[S])), W = t; T < y; ++T)
      (W = ml(O > 0 ? p[T] + " " + U : Ui(U, /&\f/g, p[T]))) && (l[q++] = W);
  return Kn(t, e, i, n === 0 ? dl : a, l, h, u, f);
}
function cy(t, e, i, r) {
  return Kn(t, e, i, fl, Xn(ey()), pi(t, 2, -2), 0, r);
}
function ks(t, e, i, r, n) {
  return Kn(t, e, i, pl, pi(t, 0, r), pi(t, r + 1, -1), r, n);
}
function Tn(t, e) {
  for (var i = "", r = 0; r < t.length; r++)
    i += e(t[r], r, t, e) || "";
  return i;
}
function uy(t, e, i, r) {
  switch (t.type) {
    case J0:
      if (t.children.length)
        break;
    case K0:
    case pl:
      return t.return = t.return || t.value;
    case fl:
      return "";
    case Z0:
      return t.return = t.value + "{" + Tn(t.children, r) + "}";
    case dl:
      if (!Gt(t.value = t.props.join(",")))
        return "";
  }
  return Gt(i = Tn(t.children, r)) ? t.return = t.value + "{" + i + "}" : "";
}
const vs = "10.9.5", De = Object.freeze(wp);
let pt = ot({}, De), _l, Ne = [], si = ot({}, De);
const Or = (t, e) => {
  let i = ot({}, t), r = {};
  for (const n of e)
    bl(n), r = ot(r, n);
  if (i = ot(i, r), r.theme && r.theme in Xt) {
    const n = ot({}, _l), o = ot(
      n.themeVariables || {},
      r.themeVariables
    );
    i.theme && i.theme in Xt && (i.themeVariables = Xt[i.theme].getThemeVariables(o));
  }
  return si = i, Tl(si), si;
}, fy = (t) => (pt = ot({}, De), pt = ot(pt, t), t.theme && Xt[t.theme] && (pt.themeVariables = Xt[t.theme].getThemeVariables(t.themeVariables)), Or(pt, Ne), pt), dy = (t) => {
  _l = ot({}, t);
}, py = (t) => (pt = ot(pt, t), Or(pt, Ne), pt), Cl = () => ot({}, pt), xl = (t) => (Tl(t), ot(si, t), Rt()), Rt = () => ot({}, si), bl = (t) => {
  t && (["secure", ...pt.secure ?? []].forEach((e) => {
    Object.hasOwn(t, e) && (L.debug(`Denied attempt to modify a secure key ${e}`, t[e]), delete t[e]);
  }), Object.keys(t).forEach((e) => {
    e.startsWith("__") && delete t[e];
  }), Object.keys(t).forEach((e) => {
    typeof t[e] == "string" && (t[e].includes("<") || t[e].includes(">") || t[e].includes("url(data:")) && delete t[e], typeof t[e] == "object" && bl(t[e]);
  }));
}, gy = (t) => {
  nr(t), t.fontFamily && (!t.themeVariables || !t.themeVariables.fontFamily) && (t.themeVariables = { fontFamily: t.fontFamily }), Ne.push(t), Or(pt, Ne);
}, cr = (t = pt) => {
  Ne = [], Or(t, Ne);
}, my = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, ws = {}, yy = (t) => {
  ws[t] || (L.warn(my[t]), ws[t] = !0);
}, Tl = (t) => {
  t && (t.lazyLoadedDiagrams || t.loadExternalDiagramsAtStartup) && yy("LAZY_LOAD_DEPRECATED");
}, Sl = "c4", _y = (t) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t), Cy = async () => {
  const { diagram: t } = await import("./c4Diagram-11725ab3.js");
  return { id: Sl, diagram: t };
}, xy = {
  id: Sl,
  detector: _y,
  loader: Cy
}, by = xy, kl = "flowchart", Ty = (t, e) => {
  var i, r;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(t);
}, Sy = async () => {
  const { diagram: t } = await import("./flowDiagram-d9de4fee.js");
  return { id: kl, diagram: t };
}, ky = {
  id: kl,
  detector: Ty,
  loader: Sy
}, vy = ky, vl = "flowchart-v2", wy = (t, e) => {
  var i, r, n;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-d3" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(t) && ((n = e == null ? void 0 : e.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(t);
}, By = async () => {
  const { diagram: t } = await import("./flowDiagram-v2-8a954bf0.js");
  return { id: vl, diagram: t };
}, Fy = {
  id: vl,
  detector: wy,
  loader: By
}, Ay = Fy, wl = "er", Ly = (t) => /^\s*erDiagram/.test(t), Ey = async () => {
  const { diagram: t } = await import("./erDiagram-b0a85d60.js");
  return { id: wl, diagram: t };
}, My = {
  id: wl,
  detector: Ly,
  loader: Ey
}, Oy = My, Bl = "gitGraph", $y = (t) => /^\s*gitGraph/.test(t), Iy = async () => {
  const { diagram: t } = await import("./gitGraphDiagram-e9a2600b.js");
  return { id: Bl, diagram: t };
}, Dy = {
  id: Bl,
  detector: $y,
  loader: Iy
}, Ny = Dy, Fl = "gantt", Ry = (t) => /^\s*gantt/.test(t), Py = async () => {
  const { diagram: t } = await import("./ganttDiagram-68513147.js");
  return { id: Fl, diagram: t };
}, qy = {
  id: Fl,
  detector: Ry,
  loader: Py
}, zy = qy, Al = "info", Wy = (t) => /^\s*info/.test(t), Hy = async () => {
  const { diagram: t } = await import("./infoDiagram-3de034a5.js");
  return { id: Al, diagram: t };
}, jy = {
  id: Al,
  detector: Wy,
  loader: Hy
}, Ll = "pie", Uy = (t) => /^\s*pie/.test(t), Yy = async () => {
  const { diagram: t } = await import("./pieDiagram-2b639856.js");
  return { id: Ll, diagram: t };
}, Gy = {
  id: Ll,
  detector: Uy,
  loader: Yy
}, El = "quadrantChart", Vy = (t) => /^\s*quadrantChart/.test(t), Xy = async () => {
  const { diagram: t } = await import("./quadrantDiagram-39965fa8.js");
  return { id: El, diagram: t };
}, Ky = {
  id: El,
  detector: Vy,
  loader: Xy
}, Zy = Ky, Ml = "xychart", Jy = (t) => /^\s*xychart-beta/.test(t), Qy = async () => {
  const { diagram: t } = await import("./xychartDiagram-66f36244.js");
  return { id: Ml, diagram: t };
}, t_ = {
  id: Ml,
  detector: Jy,
  loader: Qy
}, e_ = t_, Ol = "requirement", i_ = (t) => /^\s*requirement(Diagram)?/.test(t), r_ = async () => {
  const { diagram: t } = await import("./requirementDiagram-a9a1ab5b.js");
  return { id: Ol, diagram: t };
}, n_ = {
  id: Ol,
  detector: i_,
  loader: r_
}, o_ = n_, $l = "sequence", s_ = (t) => /^\s*sequenceDiagram/.test(t), a_ = async () => {
  const { diagram: t } = await import("./sequenceDiagram-a77d5917.js");
  return { id: $l, diagram: t };
}, l_ = {
  id: $l,
  detector: s_,
  loader: a_
}, h_ = l_, Il = "class", c_ = (t, e) => {
  var i;
  return ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(t);
}, u_ = async () => {
  const { diagram: t } = await import("./classDiagram-5e12d5cf.js");
  return { id: Il, diagram: t };
}, f_ = {
  id: Il,
  detector: c_,
  loader: u_
}, d_ = f_, Dl = "classDiagram", p_ = (t, e) => {
  var i;
  return /^\s*classDiagram/.test(t) && ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(t);
}, g_ = async () => {
  const { diagram: t } = await import("./classDiagram-v2-bbc92249.js");
  return { id: Dl, diagram: t };
}, m_ = {
  id: Dl,
  detector: p_,
  loader: g_
}, y_ = m_, Nl = "state", __ = (t, e) => {
  var i;
  return ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(t);
}, C_ = async () => {
  const { diagram: t } = await import("./stateDiagram-e4aff18a.js");
  return { id: Nl, diagram: t };
}, x_ = {
  id: Nl,
  detector: __,
  loader: C_
}, b_ = x_, Rl = "stateDiagram", T_ = (t, e) => {
  var i;
  return !!(/^\s*stateDiagram-v2/.test(t) || /^\s*stateDiagram/.test(t) && ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper");
}, S_ = async () => {
  const { diagram: t } = await import("./stateDiagram-v2-f5ecddeb.js");
  return { id: Rl, diagram: t };
}, k_ = {
  id: Rl,
  detector: T_,
  loader: S_
}, v_ = k_, Pl = "journey", w_ = (t) => /^\s*journey/.test(t), B_ = async () => {
  const { diagram: t } = await import("./journeyDiagram-682f54fe.js");
  return { id: Pl, diagram: t };
}, F_ = {
  id: Pl,
  detector: w_,
  loader: B_
}, A_ = F_, L_ = function(t, e) {
  for (let i of e)
    t.attr(i[0], i[1]);
}, E_ = function(t, e, i) {
  let r = /* @__PURE__ */ new Map();
  return i ? (r.set("width", "100%"), r.set("style", `max-width: ${e}px;`)) : (r.set("height", t), r.set("width", e)), r;
}, ql = function(t, e, i, r) {
  const n = E_(e, i, r);
  L_(t, n);
}, M_ = function(t, e, i, r) {
  const n = e.node().getBBox(), o = n.width, s = n.height;
  L.info(`SVG bounds: ${o}x${s}`, n);
  let a = 0, l = 0;
  L.info(`Graph bounds: ${a}x${l}`, t), a = o + i * 2, l = s + i * 2, L.info(`Calculated bounds: ${a}x${l}`), ql(e, l, a, r);
  const h = `${n.x - i} ${n.y - i} ${n.width + 2 * i} ${n.height + 2 * i}`;
  e.attr("viewBox", h);
}, Vi = {}, O_ = (t, e, i) => {
  let r = "";
  return t in Vi && Vi[t] ? r = Vi[t](i) : L.warn(`No theme found for ${t}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }

  ${r}

  ${e}
`;
}, $_ = (t, e) => {
  e !== void 0 && (Vi[t] = e);
}, I_ = O_;
let Zn = "", Jn = "", Qn = "";
const to = (t) => Oe(t, Rt()), D_ = () => {
  Zn = "", Qn = "", Jn = "";
}, N_ = (t) => {
  Zn = to(t).replace(/^\s+/g, "");
}, R_ = () => Zn, P_ = (t) => {
  Qn = to(t).replace(/\n\s+/g, `
`);
}, q_ = () => Qn, z_ = (t) => {
  Jn = to(t);
}, W_ = () => Jn, H_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: D_,
  getAccDescription: q_,
  getAccTitle: R_,
  getDiagramTitle: W_,
  setAccDescription: P_,
  setAccTitle: N_,
  setDiagramTitle: z_
}, Symbol.toStringTag, { value: "Module" })), j_ = L, U_ = Fn, eo = Rt, $1 = xl, I1 = De, Y_ = (t) => Oe(t, eo()), G_ = M_, V_ = () => H_, ur = {}, fr = (t, e, i) => {
  var r;
  if (ur[t])
    throw new Error(`Diagram ${t} already registered.`);
  ur[t] = e, i && Ga(t, i), $_(t, e.styles), (r = e.injectUtils) == null || r.call(
    e,
    j_,
    U_,
    eo,
    Y_,
    G_,
    V_(),
    () => {
    }
  );
}, io = (t) => {
  if (t in ur)
    return ur[t];
  throw new X_(t);
};
class X_ extends Error {
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
}
const K_ = (t) => {
  var n;
  const { securityLevel: e } = eo();
  let i = Tt("body");
  if (e === "sandbox") {
    const s = ((n = Tt(`#i${t}`).node()) == null ? void 0 : n.contentDocument) ?? document;
    i = Tt(s.body);
  }
  return i.select(`#${t}`);
}, Z_ = (t, e, i) => {
  L.debug(`rendering svg for syntax error
`);
  const r = K_(e), n = r.append("g");
  r.attr("viewBox", "0 0 2412 512"), ql(r, 100, 512, !0), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${i}`);
}, zl = { draw: Z_ }, J_ = zl, Q_ = {
  db: {},
  renderer: zl,
  parser: {
    parser: { yy: {} },
    parse: () => {
    }
  }
}, tC = Q_, Wl = "flowchart-elk", eC = (t, e) => {
  var i;
  return (
    // If diagram explicitly states flowchart-elk
    !!(/^\s*flowchart-elk/.test(t) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(t) && ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk")
  );
}, iC = async () => {
  const { diagram: t } = await import("./flowchart-elk-definition-54b6c9ab.js");
  return { id: Wl, diagram: t };
}, rC = {
  id: Wl,
  detector: eC,
  loader: iC
}, nC = rC, Hl = "timeline", oC = (t) => /^\s*timeline/.test(t), sC = async () => {
  const { diagram: t } = await import("./timeline-definition-d25df101.js");
  return { id: Hl, diagram: t };
}, aC = {
  id: Hl,
  detector: oC,
  loader: sC
}, lC = aC, jl = "mindmap", hC = (t) => /^\s*mindmap/.test(t), cC = async () => {
  const { diagram: t } = await import("./mindmap-definition-aebd360e.js");
  return { id: jl, diagram: t };
}, uC = {
  id: jl,
  detector: hC,
  loader: cC
}, fC = uC, Ul = "sankey", dC = (t) => /^\s*sankey-beta/.test(t), pC = async () => {
  const { diagram: t } = await import("./sankeyDiagram-bcf67920.js");
  return { id: Ul, diagram: t };
}, gC = {
  id: Ul,
  detector: dC,
  loader: pC
}, mC = gC, Yl = "block", yC = (t) => /^\s*block-beta/.test(t), _C = async () => {
  const { diagram: t } = await import("./blockDiagram-3894b6f4.js");
  return { id: Yl, diagram: t };
}, CC = {
  id: Yl,
  detector: yC,
  loader: _C
}, xC = CC;
let Bs = !1;
const ro = () => {
  Bs || (Bs = !0, fr("error", tC, (t) => t.toLowerCase().trim() === "error"), fr(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {
        draw: () => {
        }
      },
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (t) => t.toLowerCase().trimStart().startsWith("---")
  ), Ya(
    by,
    y_,
    d_,
    Oy,
    zy,
    jy,
    Gy,
    o_,
    h_,
    nC,
    Ay,
    vy,
    fC,
    lC,
    Ny,
    v_,
    b_,
    A_,
    Zy,
    mC,
    e_,
    xC
  ));
};
class Gl {
  constructor(e, i = {}) {
    this.text = e, this.metadata = i, this.type = "graph", this.text = V0(e), this.text += `
`;
    const r = Rt();
    try {
      this.type = vr(e, r);
    } catch (o) {
      this.type = "error", this.detectError = o;
    }
    const n = io(this.type);
    L.debug("Type " + this.type), this.db = n.db, this.renderer = n.renderer, this.parser = n.parser, this.parser.parser.yy = this.db, this.init = n.init, this.parse();
  }
  parse() {
    var i, r, n, o, s;
    if (this.detectError)
      throw this.detectError;
    (r = (i = this.db).clear) == null || r.call(i);
    const e = Rt();
    (n = this.init) == null || n.call(this, e), this.metadata.title && ((s = (o = this.db).setDiagramTitle) == null || s.call(o, this.metadata.title)), this.parser.parse(this.text);
  }
  async render(e, i) {
    await this.renderer.draw(this.text, e, i, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}
const bC = async (t, e = {}) => {
  const i = vr(t, Rt());
  try {
    io(i);
  } catch {
    const n = Ap(i);
    if (!n)
      throw new Ua(`Diagram ${i} not found.`);
    const { id: o, diagram: s } = await n();
    fr(o, s);
  }
  return new Gl(t, e);
};
let Fs = [];
const TC = () => {
  Fs.forEach((t) => {
    t();
  }), Fs = [];
};
var SC = Za(Object.keys, Object);
const kC = SC;
var vC = Object.prototype, wC = vC.hasOwnProperty;
function BC(t) {
  if (!Ar(t))
    return kC(t);
  var e = [];
  for (var i in Object(t))
    wC.call(t, i) && i != "constructor" && e.push(i);
  return e;
}
var FC = xe(qt, "DataView");
const Sn = FC;
var AC = xe(qt, "Promise");
const kn = AC;
var LC = xe(qt, "Set");
const vn = LC;
var EC = xe(qt, "WeakMap");
const wn = EC;
var As = "[object Map]", MC = "[object Object]", Ls = "[object Promise]", Es = "[object Set]", Ms = "[object WeakMap]", Os = "[object DataView]", OC = Ce(Sn), $C = Ce(fi), IC = Ce(kn), DC = Ce(vn), NC = Ce(wn), ce = Pe;
(Sn && ce(new Sn(new ArrayBuffer(1))) != Os || fi && ce(new fi()) != As || kn && ce(kn.resolve()) != Ls || vn && ce(new vn()) != Es || wn && ce(new wn()) != Ms) && (ce = function(t) {
  var e = Pe(t), i = e == MC ? t.constructor : void 0, r = i ? Ce(i) : "";
  if (r)
    switch (r) {
      case OC:
        return Os;
      case $C:
        return As;
      case IC:
        return Ls;
      case DC:
        return Es;
      case NC:
        return Ms;
    }
  return e;
});
const RC = ce;
var PC = "[object Map]", qC = "[object Set]", zC = Object.prototype, WC = zC.hasOwnProperty;
function tn(t) {
  if (t == null)
    return !0;
  if (Lr(t) && (lr(t) || typeof t == "string" || typeof t.splice == "function" || jn(t) || Un(t) || ar(t)))
    return !t.length;
  var e = RC(t);
  if (e == PC || e == qC)
    return !t.size;
  if (Ar(t))
    return !BC(t).length;
  for (var i in t)
    if (WC.call(t, i))
      return !1;
  return !0;
}
const HC = "graphics-document document";
function jC(t, e) {
  t.attr("role", HC), e !== "" && t.attr("aria-roledescription", e);
}
function UC(t, e, i, r) {
  if (t.insert !== void 0) {
    if (i) {
      const n = `chart-desc-${r}`;
      t.attr("aria-describedby", n), t.insert("desc", ":first-child").attr("id", n).text(i);
    }
    if (e) {
      const n = `chart-title-${r}`;
      t.attr("aria-labelledby", n), t.insert("title", ":first-child").attr("id", n).text(e);
    }
  }
}
const YC = (t) => t.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Vl(t) {
  return typeof t > "u" || t === null;
}
function GC(t) {
  return typeof t == "object" && t !== null;
}
function VC(t) {
  return Array.isArray(t) ? t : Vl(t) ? [] : [t];
}
function XC(t, e) {
  var i, r, n, o;
  if (e)
    for (o = Object.keys(e), i = 0, r = o.length; i < r; i += 1)
      n = o[i], t[n] = e[n];
  return t;
}
function KC(t, e) {
  var i = "", r;
  for (r = 0; r < e; r += 1)
    i += t;
  return i;
}
function ZC(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var JC = Vl, QC = GC, tx = VC, ex = KC, ix = ZC, rx = XC, ht = {
  isNothing: JC,
  isObject: QC,
  toArray: tx,
  repeat: ex,
  isNegativeZero: ix,
  extend: rx
};
function Xl(t, e) {
  var i = "", r = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (i += 'in "' + t.mark.name + '" '), i += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (i += `

` + t.mark.snippet), r + " " + i) : r;
}
function gi(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Xl(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
gi.prototype = Object.create(Error.prototype);
gi.prototype.constructor = gi;
gi.prototype.toString = function(e) {
  return this.name + ": " + Xl(this, e);
};
var Vt = gi;
function en(t, e, i, r, n) {
  var o = "", s = "", a = Math.floor(n / 2) - 1;
  return r - e > a && (o = " ... ", e = r - a + o.length), i - r > a && (s = " ...", i = r + a - s.length), {
    str: o + t.slice(e, i).replace(/\t/g, "→") + s,
    pos: r - e + o.length
    // relative position
  };
}
function rn(t, e) {
  return ht.repeat(" ", e - t.length) + t;
}
function nx(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var i = /\r?\n|\r|\0/g, r = [0], n = [], o, s = -1; o = i.exec(t.buffer); )
    n.push(o.index), r.push(o.index + o[0].length), t.position <= o.index && s < 0 && (s = r.length - 2);
  s < 0 && (s = r.length - 1);
  var a = "", l, h, u = Math.min(t.line + e.linesAfter, n.length).toString().length, f = e.maxLength - (e.indent + u + 3);
  for (l = 1; l <= e.linesBefore && !(s - l < 0); l++)
    h = en(
      t.buffer,
      r[s - l],
      n[s - l],
      t.position - (r[s] - r[s - l]),
      f
    ), a = ht.repeat(" ", e.indent) + rn((t.line - l + 1).toString(), u) + " | " + h.str + `
` + a;
  for (h = en(t.buffer, r[s], n[s], t.position, f), a += ht.repeat(" ", e.indent) + rn((t.line + 1).toString(), u) + " | " + h.str + `
`, a += ht.repeat("-", e.indent + u + 3 + h.pos) + `^
`, l = 1; l <= e.linesAfter && !(s + l >= n.length); l++)
    h = en(
      t.buffer,
      r[s + l],
      n[s + l],
      t.position - (r[s] - r[s + l]),
      f
    ), a += ht.repeat(" ", e.indent) + rn((t.line + l + 1).toString(), u) + " | " + h.str + `
`;
  return a.replace(/\n$/, "");
}
var ox = nx, sx = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], ax = [
  "scalar",
  "sequence",
  "mapping"
];
function lx(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(i) {
    t[i].forEach(function(r) {
      e[String(r)] = i;
    });
  }), e;
}
function hx(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(i) {
    if (sx.indexOf(i) === -1)
      throw new Vt('Unknown option "' + i + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(i) {
    return i;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = lx(e.styleAliases || null), ax.indexOf(this.kind) === -1)
    throw new Vt('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var st = hx;
function $s(t, e) {
  var i = [];
  return t[e].forEach(function(r) {
    var n = i.length;
    i.forEach(function(o, s) {
      o.tag === r.tag && o.kind === r.kind && o.multi === r.multi && (n = s);
    }), i[n] = r;
  }), i;
}
function cx() {
  var t = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, i;
  function r(n) {
    n.multi ? (t.multi[n.kind].push(n), t.multi.fallback.push(n)) : t[n.kind][n.tag] = t.fallback[n.tag] = n;
  }
  for (e = 0, i = arguments.length; e < i; e += 1)
    arguments[e].forEach(r);
  return t;
}
function Bn(t) {
  return this.extend(t);
}
Bn.prototype.extend = function(e) {
  var i = [], r = [];
  if (e instanceof st)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (i = i.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new Vt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  i.forEach(function(o) {
    if (!(o instanceof st))
      throw new Vt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new Vt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new Vt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(o) {
    if (!(o instanceof st))
      throw new Vt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(Bn.prototype);
  return n.implicit = (this.implicit || []).concat(i), n.explicit = (this.explicit || []).concat(r), n.compiledImplicit = $s(n, "implicit"), n.compiledExplicit = $s(n, "explicit"), n.compiledTypeMap = cx(n.compiledImplicit, n.compiledExplicit), n;
};
var ux = Bn, fx = new st("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), dx = new st("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), px = new st("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), gx = new ux({
  explicit: [
    fx,
    dx,
    px
  ]
});
function mx(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function yx() {
  return null;
}
function _x(t) {
  return t === null;
}
var Cx = new st("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: mx,
  construct: yx,
  predicate: _x,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function xx(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function bx(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function Tx(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var Sx = new st("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: xx,
  construct: bx,
  predicate: Tx,
  represent: {
    lowercase: function(t) {
      return t ? "true" : "false";
    },
    uppercase: function(t) {
      return t ? "TRUE" : "FALSE";
    },
    camelcase: function(t) {
      return t ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function kx(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function vx(t) {
  return 48 <= t && t <= 55;
}
function wx(t) {
  return 48 <= t && t <= 57;
}
function Bx(t) {
  if (t === null)
    return !1;
  var e = t.length, i = 0, r = !1, n;
  if (!e)
    return !1;
  if (n = t[i], (n === "-" || n === "+") && (n = t[++i]), n === "0") {
    if (i + 1 === e)
      return !0;
    if (n = t[++i], n === "b") {
      for (i++; i < e; i++)
        if (n = t[i], n !== "_") {
          if (n !== "0" && n !== "1")
            return !1;
          r = !0;
        }
      return r && n !== "_";
    }
    if (n === "x") {
      for (i++; i < e; i++)
        if (n = t[i], n !== "_") {
          if (!kx(t.charCodeAt(i)))
            return !1;
          r = !0;
        }
      return r && n !== "_";
    }
    if (n === "o") {
      for (i++; i < e; i++)
        if (n = t[i], n !== "_") {
          if (!vx(t.charCodeAt(i)))
            return !1;
          r = !0;
        }
      return r && n !== "_";
    }
  }
  if (n === "_")
    return !1;
  for (; i < e; i++)
    if (n = t[i], n !== "_") {
      if (!wx(t.charCodeAt(i)))
        return !1;
      r = !0;
    }
  return !(!r || n === "_");
}
function Fx(t) {
  var e = t, i = 1, r;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), r = e[0], (r === "-" || r === "+") && (r === "-" && (i = -1), e = e.slice(1), r = e[0]), e === "0")
    return 0;
  if (r === "0") {
    if (e[1] === "b")
      return i * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return i * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return i * parseInt(e.slice(2), 8);
  }
  return i * parseInt(e, 10);
}
function Ax(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !ht.isNegativeZero(t);
}
var Lx = new st("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Bx,
  construct: Fx,
  predicate: Ax,
  represent: {
    binary: function(t) {
      return t >= 0 ? "0b" + t.toString(2) : "-0b" + t.toString(2).slice(1);
    },
    octal: function(t) {
      return t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1);
    },
    decimal: function(t) {
      return t.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(t) {
      return t >= 0 ? "0x" + t.toString(16).toUpperCase() : "-0x" + t.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), Ex = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Mx(t) {
  return !(t === null || !Ex.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function Ox(t) {
  var e, i;
  return e = t.replace(/_/g, "").toLowerCase(), i = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : i * parseFloat(e, 10);
}
var $x = /^[-+]?[0-9]+e/;
function Ix(t, e) {
  var i;
  if (isNaN(t))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (ht.isNegativeZero(t))
    return "-0.0";
  return i = t.toString(10), $x.test(i) ? i.replace("e", ".e") : i;
}
function Dx(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || ht.isNegativeZero(t));
}
var Nx = new st("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Mx,
  construct: Ox,
  predicate: Dx,
  represent: Ix,
  defaultStyle: "lowercase"
}), Kl = gx.extend({
  implicit: [
    Cx,
    Sx,
    Lx,
    Nx
  ]
}), Rx = Kl, Zl = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), Jl = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function Px(t) {
  return t === null ? !1 : Zl.exec(t) !== null || Jl.exec(t) !== null;
}
function qx(t) {
  var e, i, r, n, o, s, a, l = 0, h = null, u, f, c;
  if (e = Zl.exec(t), e === null && (e = Jl.exec(t)), e === null)
    throw new Error("Date resolve error");
  if (i = +e[1], r = +e[2] - 1, n = +e[3], !e[4])
    return new Date(Date.UTC(i, r, n));
  if (o = +e[4], s = +e[5], a = +e[6], e[7]) {
    for (l = e[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return e[9] && (u = +e[10], f = +(e[11] || 0), h = (u * 60 + f) * 6e4, e[9] === "-" && (h = -h)), c = new Date(Date.UTC(i, r, n, o, s, a, l)), h && c.setTime(c.getTime() - h), c;
}
function zx(t) {
  return t.toISOString();
}
var Wx = new st("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Px,
  construct: qx,
  instanceOf: Date,
  represent: zx
});
function Hx(t) {
  return t === "<<" || t === null;
}
var jx = new st("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Hx
}), no = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Ux(t) {
  if (t === null)
    return !1;
  var e, i, r = 0, n = t.length, o = no;
  for (i = 0; i < n; i++)
    if (e = o.indexOf(t.charAt(i)), !(e > 64)) {
      if (e < 0)
        return !1;
      r += 6;
    }
  return r % 8 === 0;
}
function Yx(t) {
  var e, i, r = t.replace(/[\r\n=]/g, ""), n = r.length, o = no, s = 0, a = [];
  for (e = 0; e < n; e++)
    e % 4 === 0 && e && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)), s = s << 6 | o.indexOf(r.charAt(e));
  return i = n % 4 * 6, i === 0 ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)) : i === 18 ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : i === 12 && a.push(s >> 4 & 255), new Uint8Array(a);
}
function Gx(t) {
  var e = "", i = 0, r, n, o = t.length, s = no;
  for (r = 0; r < o; r++)
    r % 3 === 0 && r && (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]), i = (i << 8) + t[r];
  return n = o % 3, n === 0 ? (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]) : n === 2 ? (e += s[i >> 10 & 63], e += s[i >> 4 & 63], e += s[i << 2 & 63], e += s[64]) : n === 1 && (e += s[i >> 2 & 63], e += s[i << 4 & 63], e += s[64], e += s[64]), e;
}
function Vx(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var Xx = new st("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Ux,
  construct: Yx,
  predicate: Vx,
  represent: Gx
}), Kx = Object.prototype.hasOwnProperty, Zx = Object.prototype.toString;
function Jx(t) {
  if (t === null)
    return !0;
  var e = [], i, r, n, o, s, a = t;
  for (i = 0, r = a.length; i < r; i += 1) {
    if (n = a[i], s = !1, Zx.call(n) !== "[object Object]")
      return !1;
    for (o in n)
      if (Kx.call(n, o))
        if (!s)
          s = !0;
        else
          return !1;
    if (!s)
      return !1;
    if (e.indexOf(o) === -1)
      e.push(o);
    else
      return !1;
  }
  return !0;
}
function Qx(t) {
  return t !== null ? t : [];
}
var tb = new st("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Jx,
  construct: Qx
}), eb = Object.prototype.toString;
function ib(t) {
  if (t === null)
    return !0;
  var e, i, r, n, o, s = t;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1) {
    if (r = s[e], eb.call(r) !== "[object Object]" || (n = Object.keys(r), n.length !== 1))
      return !1;
    o[e] = [n[0], r[n[0]]];
  }
  return !0;
}
function rb(t) {
  if (t === null)
    return [];
  var e, i, r, n, o, s = t;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1)
    r = s[e], n = Object.keys(r), o[e] = [n[0], r[n[0]]];
  return o;
}
var nb = new st("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: ib,
  construct: rb
}), ob = Object.prototype.hasOwnProperty;
function sb(t) {
  if (t === null)
    return !0;
  var e, i = t;
  for (e in i)
    if (ob.call(i, e) && i[e] !== null)
      return !1;
  return !0;
}
function ab(t) {
  return t !== null ? t : {};
}
var lb = new st("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: sb,
  construct: ab
}), hb = Rx.extend({
  implicit: [
    Wx,
    jx
  ],
  explicit: [
    Xx,
    tb,
    nb,
    lb
  ]
}), oe = Object.prototype.hasOwnProperty, dr = 1, Ql = 2, th = 3, pr = 4, nn = 1, cb = 2, Is = 3, ub = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, fb = /[\x85\u2028\u2029]/, db = /[,\[\]\{\}]/, eh = /^(?:!|!!|![a-z\-]+!)$/i, ih = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Ds(t) {
  return Object.prototype.toString.call(t);
}
function Dt(t) {
  return t === 10 || t === 13;
}
function pe(t) {
  return t === 9 || t === 32;
}
function mt(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Be(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function pb(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function gb(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function mb(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function Ns(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function yb(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var rh = new Array(256), nh = new Array(256);
for (var we = 0; we < 256; we++)
  rh[we] = Ns(we) ? 1 : 0, nh[we] = Ns(we);
function _b(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || hb, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function oh(t, e) {
  var i = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return i.snippet = ox(i), new Vt(e, i);
}
function B(t, e) {
  throw oh(t, e);
}
function gr(t, e) {
  t.onWarning && t.onWarning.call(null, oh(t, e));
}
var Rs = {
  YAML: function(e, i, r) {
    var n, o, s;
    e.version !== null && B(e, "duplication of %YAML directive"), r.length !== 1 && B(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), n === null && B(e, "ill-formed argument of the YAML directive"), o = parseInt(n[1], 10), s = parseInt(n[2], 10), o !== 1 && B(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = s < 2, s !== 1 && s !== 2 && gr(e, "unsupported YAML version of the document");
  },
  TAG: function(e, i, r) {
    var n, o;
    r.length !== 2 && B(e, "TAG directive accepts exactly two arguments"), n = r[0], o = r[1], eh.test(n) || B(e, "ill-formed tag handle (first argument) of the TAG directive"), oe.call(e.tagMap, n) && B(e, 'there is a previously declared suffix for "' + n + '" tag handle'), ih.test(o) || B(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      B(e, "tag prefix is malformed: " + o);
    }
    e.tagMap[n] = o;
  }
};
function re(t, e, i, r) {
  var n, o, s, a;
  if (e < i) {
    if (a = t.input.slice(e, i), r)
      for (n = 0, o = a.length; n < o; n += 1)
        s = a.charCodeAt(n), s === 9 || 32 <= s && s <= 1114111 || B(t, "expected valid JSON character");
    else
      ub.test(a) && B(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function Ps(t, e, i, r) {
  var n, o, s, a;
  for (ht.isObject(i) || B(t, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(i), s = 0, a = n.length; s < a; s += 1)
    o = n[s], oe.call(e, o) || (e[o] = i[o], r[o] = !0);
}
function Fe(t, e, i, r, n, o, s, a, l) {
  var h, u;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), h = 0, u = n.length; h < u; h += 1)
      Array.isArray(n[h]) && B(t, "nested arrays are not supported inside keys"), typeof n == "object" && Ds(n[h]) === "[object Object]" && (n[h] = "[object Object]");
  if (typeof n == "object" && Ds(n) === "[object Object]" && (n = "[object Object]"), n = String(n), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (h = 0, u = o.length; h < u; h += 1)
        Ps(t, e, o[h], i);
    else
      Ps(t, e, o, i);
  else
    !t.json && !oe.call(i, n) && oe.call(e, n) && (t.line = s || t.line, t.lineStart = a || t.lineStart, t.position = l || t.position, B(t, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: o
    }) : e[n] = o, delete i[n];
  return e;
}
function oo(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : B(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function J(t, e, i) {
  for (var r = 0, n = t.input.charCodeAt(t.position); n !== 0; ) {
    for (; pe(n); )
      n === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), n = t.input.charCodeAt(++t.position);
    if (e && n === 35)
      do
        n = t.input.charCodeAt(++t.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (Dt(n))
      for (oo(t), n = t.input.charCodeAt(t.position), r++, t.lineIndent = 0; n === 32; )
        t.lineIndent++, n = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return i !== -1 && r !== 0 && t.lineIndent < i && gr(t, "deficient indentation"), r;
}
function $r(t) {
  var e = t.position, i;
  return i = t.input.charCodeAt(e), !!((i === 45 || i === 46) && i === t.input.charCodeAt(e + 1) && i === t.input.charCodeAt(e + 2) && (e += 3, i = t.input.charCodeAt(e), i === 0 || mt(i)));
}
function so(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += ht.repeat(`
`, e - 1));
}
function Cb(t, e, i) {
  var r, n, o, s, a, l, h, u, f = t.kind, c = t.result, p;
  if (p = t.input.charCodeAt(t.position), mt(p) || Be(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (n = t.input.charCodeAt(t.position + 1), mt(n) || i && Be(n)))
    return !1;
  for (t.kind = "scalar", t.result = "", o = s = t.position, a = !1; p !== 0; ) {
    if (p === 58) {
      if (n = t.input.charCodeAt(t.position + 1), mt(n) || i && Be(n))
        break;
    } else if (p === 35) {
      if (r = t.input.charCodeAt(t.position - 1), mt(r))
        break;
    } else {
      if (t.position === t.lineStart && $r(t) || i && Be(p))
        break;
      if (Dt(p))
        if (l = t.line, h = t.lineStart, u = t.lineIndent, J(t, !1, -1), t.lineIndent >= e) {
          a = !0, p = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = s, t.line = l, t.lineStart = h, t.lineIndent = u;
          break;
        }
    }
    a && (re(t, o, s, !1), so(t, t.line - l), o = s = t.position, a = !1), pe(p) || (s = t.position + 1), p = t.input.charCodeAt(++t.position);
  }
  return re(t, o, s, !1), t.result ? !0 : (t.kind = f, t.result = c, !1);
}
function xb(t, e) {
  var i, r, n;
  if (i = t.input.charCodeAt(t.position), i !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (i = t.input.charCodeAt(t.position)) !== 0; )
    if (i === 39)
      if (re(t, r, t.position, !0), i = t.input.charCodeAt(++t.position), i === 39)
        r = t.position, t.position++, n = t.position;
      else
        return !0;
    else
      Dt(i) ? (re(t, r, n, !0), so(t, J(t, !1, e)), r = n = t.position) : t.position === t.lineStart && $r(t) ? B(t, "unexpected end of the document within a single quoted scalar") : (t.position++, n = t.position);
  B(t, "unexpected end of the stream within a single quoted scalar");
}
function bb(t, e) {
  var i, r, n, o, s, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, i = r = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return re(t, i, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (re(t, i, t.position, !0), a = t.input.charCodeAt(++t.position), Dt(a))
        J(t, !1, e);
      else if (a < 256 && rh[a])
        t.result += nh[a], t.position++;
      else if ((s = gb(a)) > 0) {
        for (n = s, o = 0; n > 0; n--)
          a = t.input.charCodeAt(++t.position), (s = pb(a)) >= 0 ? o = (o << 4) + s : B(t, "expected hexadecimal character");
        t.result += yb(o), t.position++;
      } else
        B(t, "unknown escape sequence");
      i = r = t.position;
    } else
      Dt(a) ? (re(t, i, r, !0), so(t, J(t, !1, e)), i = r = t.position) : t.position === t.lineStart && $r(t) ? B(t, "unexpected end of the document within a double quoted scalar") : (t.position++, r = t.position);
  }
  B(t, "unexpected end of the stream within a double quoted scalar");
}
function Tb(t, e) {
  var i = !0, r, n, o, s = t.tag, a, l = t.anchor, h, u, f, c, p, y = /* @__PURE__ */ Object.create(null), S, O, q, T;
  if (T = t.input.charCodeAt(t.position), T === 91)
    u = 93, p = !1, a = [];
  else if (T === 123)
    u = 125, p = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), T = t.input.charCodeAt(++t.position); T !== 0; ) {
    if (J(t, !0, e), T = t.input.charCodeAt(t.position), T === u)
      return t.position++, t.tag = s, t.anchor = l, t.kind = p ? "mapping" : "sequence", t.result = a, !0;
    i ? T === 44 && B(t, "expected the node content, but found ','") : B(t, "missed comma between flow collection entries"), O = S = q = null, f = c = !1, T === 63 && (h = t.input.charCodeAt(t.position + 1), mt(h) && (f = c = !0, t.position++, J(t, !0, e))), r = t.line, n = t.lineStart, o = t.position, Re(t, e, dr, !1, !0), O = t.tag, S = t.result, J(t, !0, e), T = t.input.charCodeAt(t.position), (c || t.line === r) && T === 58 && (f = !0, T = t.input.charCodeAt(++t.position), J(t, !0, e), Re(t, e, dr, !1, !0), q = t.result), p ? Fe(t, a, y, O, S, q, r, n, o) : f ? a.push(Fe(t, null, y, O, S, q, r, n, o)) : a.push(S), J(t, !0, e), T = t.input.charCodeAt(t.position), T === 44 ? (i = !0, T = t.input.charCodeAt(++t.position)) : i = !1;
  }
  B(t, "unexpected end of the stream within a flow collection");
}
function Sb(t, e) {
  var i, r, n = nn, o = !1, s = !1, a = e, l = 0, h = !1, u, f;
  if (f = t.input.charCodeAt(t.position), f === 124)
    r = !1;
  else if (f === 62)
    r = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; f !== 0; )
    if (f = t.input.charCodeAt(++t.position), f === 43 || f === 45)
      nn === n ? n = f === 43 ? Is : cb : B(t, "repeat of a chomping mode identifier");
    else if ((u = mb(f)) >= 0)
      u === 0 ? B(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? B(t, "repeat of an indentation width identifier") : (a = e + u - 1, s = !0);
    else
      break;
  if (pe(f)) {
    do
      f = t.input.charCodeAt(++t.position);
    while (pe(f));
    if (f === 35)
      do
        f = t.input.charCodeAt(++t.position);
      while (!Dt(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for (oo(t), t.lineIndent = 0, f = t.input.charCodeAt(t.position); (!s || t.lineIndent < a) && f === 32; )
      t.lineIndent++, f = t.input.charCodeAt(++t.position);
    if (!s && t.lineIndent > a && (a = t.lineIndent), Dt(f)) {
      l++;
      continue;
    }
    if (t.lineIndent < a) {
      n === Is ? t.result += ht.repeat(`
`, o ? 1 + l : l) : n === nn && o && (t.result += `
`);
      break;
    }
    for (r ? pe(f) ? (h = !0, t.result += ht.repeat(`
`, o ? 1 + l : l)) : h ? (h = !1, t.result += ht.repeat(`
`, l + 1)) : l === 0 ? o && (t.result += " ") : t.result += ht.repeat(`
`, l) : t.result += ht.repeat(`
`, o ? 1 + l : l), o = !0, s = !0, l = 0, i = t.position; !Dt(f) && f !== 0; )
      f = t.input.charCodeAt(++t.position);
    re(t, i, t.position, !1);
  }
  return !0;
}
function qs(t, e) {
  var i, r = t.tag, n = t.anchor, o = [], s, a = !1, l;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = o), l = t.input.charCodeAt(t.position); l !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, B(t, "tab characters must not be used in indentation")), !(l !== 45 || (s = t.input.charCodeAt(t.position + 1), !mt(s)))); ) {
    if (a = !0, t.position++, J(t, !0, -1) && t.lineIndent <= e) {
      o.push(null), l = t.input.charCodeAt(t.position);
      continue;
    }
    if (i = t.line, Re(t, e, th, !1, !0), o.push(t.result), J(t, !0, -1), l = t.input.charCodeAt(t.position), (t.line === i || t.lineIndent > e) && l !== 0)
      B(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = r, t.anchor = n, t.kind = "sequence", t.result = o, !0) : !1;
}
function kb(t, e, i) {
  var r, n, o, s, a, l, h = t.tag, u = t.anchor, f = {}, c = /* @__PURE__ */ Object.create(null), p = null, y = null, S = null, O = !1, q = !1, T;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = f), T = t.input.charCodeAt(t.position); T !== 0; ) {
    if (!O && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, B(t, "tab characters must not be used in indentation")), r = t.input.charCodeAt(t.position + 1), o = t.line, (T === 63 || T === 58) && mt(r))
      T === 63 ? (O && (Fe(t, f, c, p, y, null, s, a, l), p = y = S = null), q = !0, O = !0, n = !0) : O ? (O = !1, n = !0) : B(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, T = r;
    else {
      if (s = t.line, a = t.lineStart, l = t.position, !Re(t, i, Ql, !1, !0))
        break;
      if (t.line === o) {
        for (T = t.input.charCodeAt(t.position); pe(T); )
          T = t.input.charCodeAt(++t.position);
        if (T === 58)
          T = t.input.charCodeAt(++t.position), mt(T) || B(t, "a whitespace character is expected after the key-value separator within a block mapping"), O && (Fe(t, f, c, p, y, null, s, a, l), p = y = S = null), q = !0, O = !1, n = !1, p = t.tag, y = t.result;
        else if (q)
          B(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = h, t.anchor = u, !0;
      } else if (q)
        B(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = h, t.anchor = u, !0;
    }
    if ((t.line === o || t.lineIndent > e) && (O && (s = t.line, a = t.lineStart, l = t.position), Re(t, e, pr, !0, n) && (O ? y = t.result : S = t.result), O || (Fe(t, f, c, p, y, S, s, a, l), p = y = S = null), J(t, !0, -1), T = t.input.charCodeAt(t.position)), (t.line === o || t.lineIndent > e) && T !== 0)
      B(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return O && Fe(t, f, c, p, y, null, s, a, l), q && (t.tag = h, t.anchor = u, t.kind = "mapping", t.result = f), q;
}
function vb(t) {
  var e, i = !1, r = !1, n, o, s;
  if (s = t.input.charCodeAt(t.position), s !== 33)
    return !1;
  if (t.tag !== null && B(t, "duplication of a tag property"), s = t.input.charCodeAt(++t.position), s === 60 ? (i = !0, s = t.input.charCodeAt(++t.position)) : s === 33 ? (r = !0, n = "!!", s = t.input.charCodeAt(++t.position)) : n = "!", e = t.position, i) {
    do
      s = t.input.charCodeAt(++t.position);
    while (s !== 0 && s !== 62);
    t.position < t.length ? (o = t.input.slice(e, t.position), s = t.input.charCodeAt(++t.position)) : B(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; s !== 0 && !mt(s); )
      s === 33 && (r ? B(t, "tag suffix cannot contain exclamation marks") : (n = t.input.slice(e - 1, t.position + 1), eh.test(n) || B(t, "named tag handle cannot contain such characters"), r = !0, e = t.position + 1)), s = t.input.charCodeAt(++t.position);
    o = t.input.slice(e, t.position), db.test(o) && B(t, "tag suffix cannot contain flow indicator characters");
  }
  o && !ih.test(o) && B(t, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    B(t, "tag name is malformed: " + o);
  }
  return i ? t.tag = o : oe.call(t.tagMap, n) ? t.tag = t.tagMap[n] + o : n === "!" ? t.tag = "!" + o : n === "!!" ? t.tag = "tag:yaml.org,2002:" + o : B(t, 'undeclared tag handle "' + n + '"'), !0;
}
function wb(t) {
  var e, i;
  if (i = t.input.charCodeAt(t.position), i !== 38)
    return !1;
  for (t.anchor !== null && B(t, "duplication of an anchor property"), i = t.input.charCodeAt(++t.position), e = t.position; i !== 0 && !mt(i) && !Be(i); )
    i = t.input.charCodeAt(++t.position);
  return t.position === e && B(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function Bb(t) {
  var e, i, r;
  if (r = t.input.charCodeAt(t.position), r !== 42)
    return !1;
  for (r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !mt(r) && !Be(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && B(t, "name of an alias node must contain at least one character"), i = t.input.slice(e, t.position), oe.call(t.anchorMap, i) || B(t, 'unidentified alias "' + i + '"'), t.result = t.anchorMap[i], J(t, !0, -1), !0;
}
function Re(t, e, i, r, n) {
  var o, s, a, l = 1, h = !1, u = !1, f, c, p, y, S, O;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, o = s = a = pr === i || th === i, r && J(t, !0, -1) && (h = !0, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)), l === 1)
    for (; vb(t) || wb(t); )
      J(t, !0, -1) ? (h = !0, a = o, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)) : a = !1;
  if (a && (a = h || n), (l === 1 || pr === i) && (dr === i || Ql === i ? S = e : S = e + 1, O = t.position - t.lineStart, l === 1 ? a && (qs(t, O) || kb(t, O, S)) || Tb(t, S) ? u = !0 : (s && Sb(t, S) || xb(t, S) || bb(t, S) ? u = !0 : Bb(t) ? (u = !0, (t.tag !== null || t.anchor !== null) && B(t, "alias node should not have any properties")) : Cb(t, S, dr === i) && (u = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : l === 0 && (u = a && qs(t, O))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && B(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), f = 0, c = t.implicitTypes.length; f < c; f += 1)
      if (y = t.implicitTypes[f], y.resolve(t.result)) {
        t.result = y.construct(t.result), t.tag = y.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (oe.call(t.typeMap[t.kind || "fallback"], t.tag))
      y = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (y = null, p = t.typeMap.multi[t.kind || "fallback"], f = 0, c = p.length; f < c; f += 1)
        if (t.tag.slice(0, p[f].tag.length) === p[f].tag) {
          y = p[f];
          break;
        }
    y || B(t, "unknown tag !<" + t.tag + ">"), t.result !== null && y.kind !== t.kind && B(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + y.kind + '", not "' + t.kind + '"'), y.resolve(t.result, t.tag) ? (t.result = y.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : B(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || u;
}
function Fb(t) {
  var e = t.position, i, r, n, o = !1, s;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (s = t.input.charCodeAt(t.position)) !== 0 && (J(t, !0, -1), s = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || s !== 37)); ) {
    for (o = !0, s = t.input.charCodeAt(++t.position), i = t.position; s !== 0 && !mt(s); )
      s = t.input.charCodeAt(++t.position);
    for (r = t.input.slice(i, t.position), n = [], r.length < 1 && B(t, "directive name must not be less than one character in length"); s !== 0; ) {
      for (; pe(s); )
        s = t.input.charCodeAt(++t.position);
      if (s === 35) {
        do
          s = t.input.charCodeAt(++t.position);
        while (s !== 0 && !Dt(s));
        break;
      }
      if (Dt(s))
        break;
      for (i = t.position; s !== 0 && !mt(s); )
        s = t.input.charCodeAt(++t.position);
      n.push(t.input.slice(i, t.position));
    }
    s !== 0 && oo(t), oe.call(Rs, r) ? Rs[r](t, r, n) : gr(t, 'unknown document directive "' + r + '"');
  }
  if (J(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, J(t, !0, -1)) : o && B(t, "directives end mark is expected"), Re(t, t.lineIndent - 1, pr, !1, !0), J(t, !0, -1), t.checkLineBreaks && fb.test(t.input.slice(e, t.position)) && gr(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && $r(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, J(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    B(t, "end of the stream or a document separator is expected");
  else
    return;
}
function sh(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var i = new _b(t, e), r = t.indexOf("\0");
  for (r !== -1 && (i.position = r, B(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32; )
    i.lineIndent += 1, i.position += 1;
  for (; i.position < i.length - 1; )
    Fb(i);
  return i.documents;
}
function Ab(t, e, i) {
  e !== null && typeof e == "object" && typeof i > "u" && (i = e, e = null);
  var r = sh(t, i);
  if (typeof e != "function")
    return r;
  for (var n = 0, o = r.length; n < o; n += 1)
    e(r[n]);
}
function Lb(t, e) {
  var i = sh(t, e);
  if (i.length !== 0) {
    if (i.length === 1)
      return i[0];
    throw new Vt("expected a single document in the stream, but found more");
  }
}
var Eb = Ab, Mb = Lb, Ob = {
  loadAll: Eb,
  load: Mb
}, $b = Kl, Ib = Ob.load;
function Db(t) {
  const e = t.match(ja);
  if (!e)
    return {
      text: t,
      metadata: {}
    };
  let i = Ib(e[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: $b
  }) ?? {};
  i = typeof i == "object" && !Array.isArray(i) ? i : {};
  const r = {};
  return i.displayMode && (r.displayMode = i.displayMode.toString()), i.title && (r.title = i.title.toString()), i.config && (r.config = i.config), {
    text: t.slice(e[0].length),
    metadata: r
  };
}
const Nb = (t) => t.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (e, i, r) => "<" + i + r.replace(/="([^"]*)"/g, "='$1'") + ">"
), Rb = (t) => {
  const { text: e, metadata: i } = Db(t), { displayMode: r, title: n, config: o = {} } = i;
  return r && (o.gantt || (o.gantt = {}), o.gantt.displayMode = r), { title: n, config: o, text: e };
}, Pb = (t) => {
  const e = oi.detectInit(t) ?? {}, i = oi.detectDirective(t, "wrap");
  return Array.isArray(i) ? e.wrap = i.some(({ type: r }) => {
  }) : (i == null ? void 0 : i.type) === "wrap" && (e.wrap = !0), {
    text: B0(t),
    directive: e
  };
};
function ah(t) {
  const e = Nb(t), i = Rb(e), r = Pb(i.text), n = ul(i.config, r.directive);
  return t = YC(r.text), {
    code: t,
    title: i.title,
    config: n
  };
}
const qb = 5e4, zb = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", Wb = "sandbox", Hb = "loose", jb = "http://www.w3.org/2000/svg", Ub = "http://www.w3.org/1999/xlink", Yb = "http://www.w3.org/1999/xhtml", Gb = "100%", Vb = "100%", Xb = "border:0;margin:0;", Kb = "margin:0", Zb = "allow-top-navigation-by-user-activation allow-popups", Jb = 'The "iframe" tag is not supported by your browser.', Qb = ["foreignobject"], t1 = ["dominant-baseline"];
function lh(t) {
  const e = ah(t);
  return cr(), gy(e.config ?? {}), e;
}
async function e1(t, e) {
  ro(), t = lh(t).code;
  try {
    await ao(t);
  } catch (i) {
    if (e != null && e.suppressErrors)
      return !1;
    throw i;
  }
  return !0;
}
const zs = (t, e, i = []) => `
.${t} ${e} { ${i.join(" !important; ")} !important; }`, i1 = (t, e = {}) => {
  var r;
  let i = "";
  if (t.themeCSS !== void 0 && (i += `
${t.themeCSS}`), t.fontFamily !== void 0 && (i += `
:root { --mermaid-font-family: ${t.fontFamily}}`), t.altFontFamily !== void 0 && (i += `
:root { --mermaid-alt-font-family: ${t.altFontFamily}}`), !tn(e)) {
    const a = t.htmlLabels || ((r = t.flowchart) == null ? void 0 : r.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const l in e) {
      const h = e[l];
      tn(h.styles) || a.forEach((u) => {
        i += zs(h.id, u, h.styles);
      }), tn(h.textStyles) || (i += zs(h.id, "tspan", h.textStyles));
    }
  }
  return i;
}, r1 = (t, e, i, r) => {
  const n = i1(t, i), o = I_(e, n, t.themeVariables);
  return Tn(hy(`${r}{${o}}`), uy);
}, n1 = (t = "", e, i) => {
  let r = t;
  return !i && !e && (r = r.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), r = X0(r), r = r.replace(/<br>/g, "<br/>"), r;
}, o1 = (t = "", e) => {
  var n, o;
  const i = (o = (n = e == null ? void 0 : e.viewBox) == null ? void 0 : n.baseVal) != null && o.height ? e.viewBox.baseVal.height + "px" : Vb, r = btoa('<body style="' + Kb + '">' + t + "</body>");
  return `<iframe style="width:${Gb};height:${i};${Xb}" src="data:text/html;base64,${r}" sandbox="${Zb}">
  ${Jb}
</iframe>`;
}, Ws = (t, e, i, r, n) => {
  const o = t.append("div");
  o.attr("id", i), r && o.attr("style", r);
  const s = o.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", jb);
  return n && s.attr("xmlns:xlink", n), s.append("g"), t;
};
function Hs(t, e) {
  return t.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
const s1 = (t, e, i, r) => {
  var n, o, s;
  (n = t.getElementById(e)) == null || n.remove(), (o = t.getElementById(i)) == null || o.remove(), (s = t.getElementById(r)) == null || s.remove();
}, a1 = async function(t, e, i) {
  var zt, M, b, C, v, x;
  ro();
  const r = lh(e);
  e = r.code;
  const n = Rt();
  L.debug(n), e.length > ((n == null ? void 0 : n.maxTextSize) ?? qb) && (e = zb);
  const o = "#" + t, s = "i" + t, a = "#" + s, l = "d" + t, h = "#" + l;
  let u = Tt("body");
  const f = n.securityLevel === Wb, c = n.securityLevel === Hb, p = n.fontFamily;
  if (i !== void 0) {
    if (i && (i.innerHTML = ""), f) {
      const A = Hs(Tt(i), s);
      u = Tt(A.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = Tt(i);
    Ws(u, t, l, `font-family: ${p}`, Ub);
  } else {
    if (s1(document, t, l, s), f) {
      const A = Hs(Tt("body"), s);
      u = Tt(A.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = Tt("body");
    Ws(u, t, l);
  }
  let y, S;
  try {
    y = await ao(e, { title: r.title });
  } catch (A) {
    y = new Gl("error"), S = A;
  }
  const O = u.select(h).node(), q = y.type, T = O.firstChild, U = T.firstChild, W = (M = (zt = y.renderer).getClasses) == null ? void 0 : M.call(zt, e, y), Y = r1(n, q, W, o), G = document.createElement("style");
  G.innerHTML = Y, T.insertBefore(G, U);
  try {
    await y.renderer.draw(e, t, vs, y);
  } catch (A) {
    throw J_.draw(e, t, vs), A;
  }
  const H = u.select(`${h} svg`), ae = (C = (b = y.db).getAccTitle) == null ? void 0 : C.call(b), Jt = (x = (v = y.db).getAccDescription) == null ? void 0 : x.call(v);
  h1(q, H, ae, Jt), u.select(`[id="${t}"]`).selectAll("foreignobject > *").attr("xmlns", Yb);
  let j = u.select(h).node().innerHTML;
  if (L.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), j = n1(j, f, Na(n.arrowMarkerAbsolute)), f) {
    const A = u.select(h + " svg").node();
    j = o1(j, A);
  } else
    c || (j = Me.sanitize(j, {
      ADD_TAGS: Qb,
      ADD_ATTR: t1,
      HTML_INTEGRATION_POINTS: { foreignobject: !0 }
    }));
  if (TC(), S)
    throw S;
  const _t = Tt(f ? a : h).node();
  return _t && "remove" in _t && _t.remove(), {
    svg: j,
    bindFunctions: y.db.bindFunctions
  };
};
function l1(t = {}) {
  var i;
  t != null && t.fontFamily && !((i = t.themeVariables) != null && i.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), dy(t), t != null && t.theme && t.theme in Xt ? t.themeVariables = Xt[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = Xt.default.getThemeVariables(t.themeVariables));
  const e = typeof t == "object" ? fy(t) : Cl();
  Fn(e.logLevel), ro();
}
const ao = (t, e = {}) => {
  const { code: i } = ah(t);
  return bC(i, e);
};
function h1(t, e, i, r) {
  jC(e, t), UC(e, i, r, e.attr("id"));
}
const ye = Object.freeze({
  render: a1,
  parse: e1,
  getDiagramFromText: ao,
  initialize: l1,
  getConfig: Rt,
  setConfig: xl,
  getSiteConfig: Cl,
  updateSiteConfig: py,
  reset: () => {
    cr();
  },
  globalReset: () => {
    cr(De);
  },
  defaultConfig: De
});
Fn(Rt().logLevel);
cr(Rt());
const c1 = async () => {
  L.debug("Loading registered diagrams");
  const e = (await Promise.allSettled(
    Object.entries($e).map(async ([i, { detector: r, loader: n }]) => {
      if (n)
        try {
          io(i);
        } catch {
          try {
            const { diagram: s, id: a } = await n();
            fr(a, s, r);
          } catch (s) {
            throw L.error(`Failed to load external diagram with key ${i}. Removing from detectors.`), delete $e[i], s;
          }
        }
    })
  )).filter((i) => i.status === "rejected");
  if (e.length > 0) {
    L.error(`Failed to load ${e.length} external diagrams`);
    for (const i of e)
      L.error(i);
    throw new Error(`Failed to load ${e.length} external diagrams`);
  }
}, u1 = (t, e, i) => {
  L.warn(t), cl(t) ? (i && i(t.str, t.hash), e.push({ ...t, message: t.str, error: t })) : (i && i(t), t instanceof Error && e.push({
    str: t.message,
    message: t.message,
    hash: t.name,
    error: t
  }));
}, hh = async function(t = {
  querySelector: ".mermaid"
}) {
  try {
    await f1(t);
  } catch (e) {
    if (cl(e) && L.error(e.str), St.parseError && St.parseError(e), !t.suppressErrors)
      throw L.error("Use the suppressErrors option to suppress these errors"), e;
  }
}, f1 = async function({ postRenderCallback: t, querySelector: e, nodes: i } = {
  querySelector: ".mermaid"
}) {
  const r = ye.getConfig();
  L.debug(`${t ? "" : "No "}Callback function found`);
  let n;
  if (i)
    n = i;
  else if (e)
    n = document.querySelectorAll(e);
  else
    throw new Error("Nodes and querySelector are both undefined");
  L.debug(`Found ${n.length} diagrams`), (r == null ? void 0 : r.startOnLoad) !== void 0 && (L.debug("Start On Load: " + (r == null ? void 0 : r.startOnLoad)), ye.updateSiteConfig({ startOnLoad: r == null ? void 0 : r.startOnLoad }));
  const o = new oi.InitIDGenerator(r.deterministicIds, r.deterministicIDSeed);
  let s;
  const a = [];
  for (const l of Array.from(n)) {
    L.info("Rendering diagram: " + l.id);
    /*! Check if previously processed */
    if (l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const h = `mermaid-${o.next()}`;
    s = l.innerHTML, s = Th(oi.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const u = oi.detectInit(s);
    u && L.debug("Detected early reinit: ", u);
    try {
      const { svg: f, bindFunctions: c } = await dh(h, s, l);
      l.innerHTML = f, t && await t(h), c && c(l);
    } catch (f) {
      u1(f, a, St.parseError);
    }
  }
  if (a.length > 0)
    throw a[0];
}, ch = function(t) {
  ye.initialize(t);
}, d1 = async function(t, e, i) {
  L.warn("mermaid.init is deprecated. Please use run instead."), t && ch(t);
  const r = { postRenderCallback: i, querySelector: ".mermaid" };
  typeof e == "string" ? r.querySelector = e : e && (e instanceof HTMLElement ? r.nodes = [e] : r.nodes = e), await hh(r);
}, p1 = async (t, {
  lazyLoad: e = !0
} = {}) => {
  Ya(...t), e === !1 && await c1();
}, uh = function() {
  if (St.startOnLoad) {
    const { startOnLoad: t } = ye.getConfig();
    t && St.run().catch((e) => L.error("Mermaid failed to initialize", e));
  }
};
if (typeof document < "u") {
  /*!
   * Wait for document loaded before starting the execution
   */
  window.addEventListener("load", uh, !1);
}
const g1 = function(t) {
  St.parseError = t;
}, mr = [];
let on = !1;
const fh = async () => {
  if (!on) {
    for (on = !0; mr.length > 0; ) {
      const t = mr.shift();
      if (t)
        try {
          await t();
        } catch (e) {
          L.error("Error executing queue", e);
        }
    }
    on = !1;
  }
}, m1 = async (t, e) => new Promise((i, r) => {
  const n = () => new Promise((o, s) => {
    ye.parse(t, e).then(
      (a) => {
        o(a), i(a);
      },
      (a) => {
        var l;
        L.error("Error parsing", a), (l = St.parseError) == null || l.call(St, a), s(a), r(a);
      }
    );
  });
  mr.push(n), fh().catch(r);
}), dh = (t, e, i) => new Promise((r, n) => {
  const o = () => new Promise((s, a) => {
    ye.render(t, e, i).then(
      (l) => {
        s(l), r(l);
      },
      (l) => {
        var h;
        L.error("Error parsing", l), (h = St.parseError) == null || h.call(St, l), a(l), n(l);
      }
    );
  });
  mr.push(o), fh().catch(n);
}), St = {
  startOnLoad: !0,
  mermaidAPI: ye,
  parse: m1,
  render: dh,
  init: d1,
  run: hh,
  registerExternalDiagrams: p1,
  initialize: ch,
  parseError: void 0,
  contentLoaded: uh,
  setParseErrorHandler: g1,
  detectType: vr
};
export {
  Mn as $,
  oi as A,
  ii as B,
  z_ as C,
  W_ as D,
  D_ as E,
  Uf as F,
  F1 as G,
  P0 as H,
  G_ as I,
  En as J,
  oa as K,
  yi as L,
  yu as M,
  la as N,
  y1 as O,
  Sh as P,
  kh as Q,
  gt as R,
  yt as S,
  wh as T,
  K_ as U,
  v1 as V,
  wp as W,
  ul as X,
  Vn as Y,
  xp as Z,
  Rt as _,
  q_ as a,
  qe as a$,
  ie as a0,
  hi as a1,
  No as a2,
  ku as a3,
  ss as a4,
  S0 as a5,
  A1 as a6,
  N0 as a7,
  _e as a8,
  y0 as a9,
  Ho as aA,
  k1 as aB,
  T1 as aC,
  _1 as aD,
  C1 as aE,
  B1 as aF,
  w1 as aG,
  b1 as aH,
  $ as aI,
  Nt as aJ,
  bi as aK,
  Pe as aL,
  or as aM,
  t0 as aN,
  BC as aO,
  xi as aP,
  ar as aQ,
  Vm as aR,
  Ja as aS,
  Ug as aT,
  Yg as aU,
  RC as aV,
  _s as aW,
  Gg as aX,
  jn as aY,
  Hg as aZ,
  Jg as a_,
  l0 as aa,
  qt as ab,
  _0 as ac,
  C0 as ad,
  ol as ae,
  wr as af,
  Lr as ag,
  lr as ah,
  zg as ai,
  Hn as aj,
  al as ak,
  nl as al,
  Gm as am,
  zm as an,
  h0 as ao,
  T0 as ap,
  _i as aq,
  I1 as ar,
  H_ as as,
  Ci as at,
  w as au,
  E as av,
  Dn as aw,
  x1 as ax,
  S1 as ay,
  jo as az,
  P_ as b,
  se as b0,
  ds as b1,
  Un as b2,
  tl as b3,
  vn as b4,
  om as b5,
  tn as b6,
  X0 as b7,
  Th as b8,
  St as b9,
  eo as c,
  Oe as d,
  Us as e,
  zn as f,
  R_ as g,
  ot as h,
  hr as i,
  Tt as j,
  ql as k,
  L as l,
  j0 as m,
  Wf as n,
  D0 as o,
  Na as p,
  A0 as q,
  Wd as r,
  N_ as s,
  M_ as t,
  $1 as u,
  na as v,
  W0 as w,
  $h as x,
  gm as y,
  Wn as z
};
