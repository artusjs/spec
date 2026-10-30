import { a as S, b as gn, c as Xn, d as O, k as zn, e as Hn, f as Un, g as T, h as yn, j as xn, l as Jn, m as En, t as Kn, n as kn, o as Zn, p as Qn, q as f, G as g, i as m, r as I, v as E, s as $ } from "./graph-80608c14.js";
import { a8 as F, a9 as ne, aa as ee, ab as re, ac as On, ad as A, ae as Nn, af as te, ag as Ln, ah as U, ai as ie, aj as ae, ak as J, al as oe, am as Pn, an as ue, ao as de, ap as z } from "./mermaid-b92f6f74.js";
var se = /\s/;
function fe(n) {
  for (var e = n.length; e-- && se.test(n.charAt(e)); )
    ;
  return e;
}
var ce = /^\s+/;
function le(n) {
  return n && n.slice(0, fe(n) + 1).replace(ce, "");
}
var on = 0 / 0, he = /^[-+]0x[0-9a-f]+$/i, ve = /^0b[01]+$/i, pe = /^0o[0-7]+$/i, we = parseInt;
function be(n) {
  if (typeof n == "number")
    return n;
  if (S(n))
    return on;
  if (F(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = F(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = le(n);
  var r = ve.test(n);
  return r || pe.test(n) ? we(n.slice(2), r ? 2 : 8) : he.test(n) ? on : +n;
}
var un = 1 / 0, me = 17976931348623157e292;
function M(n) {
  if (!n)
    return n === 0 ? n : 0;
  if (n = be(n), n === un || n === -un) {
    var e = n < 0 ? -1 : 1;
    return e * me;
  }
  return n === n ? n : 0;
}
function ge(n) {
  var e = M(n), r = e % 1;
  return e === e ? r ? e - r : e : 0;
}
function N(n) {
  var e = n == null ? 0 : n.length;
  return e ? gn(n, 1) : [];
}
function ye(n) {
  return ne(ee(n, void 0, N), n + "");
}
var xe = 1, Ee = 4;
function ke(n) {
  return Xn(n, xe | Ee);
}
var Oe = function() {
  return re.Date.now();
};
const dn = Oe;
var _n = Object.prototype, Ne = _n.hasOwnProperty, Le = On(function(n, e) {
  n = Object(n);
  var r = -1, t = e.length, i = t > 2 ? e[2] : void 0;
  for (i && A(e[0], e[1], i) && (t = 1); ++r < t; )
    for (var o = e[r], a = Nn(o), u = -1, d = a.length; ++u < d; ) {
      var s = a[u], c = n[s];
      (c === void 0 || te(c, _n[s]) && !Ne.call(n, s)) && (n[s] = o[s]);
    }
  return n;
});
const Pe = Le;
function B(n) {
  var e = n == null ? 0 : n.length;
  return e ? n[e - 1] : void 0;
}
function _e(n) {
  return function(e, r, t) {
    var i = Object(e);
    if (!Ln(e)) {
      var o = O(r);
      e = zn(e), r = function(u) {
        return o(i[u], u, i);
      };
    }
    var a = n(e, r, t);
    return a > -1 ? i[o ? e[a] : a] : void 0;
  };
}
var Ce = Math.max;
function Ie(n, e, r) {
  var t = n == null ? 0 : n.length;
  if (!t)
    return -1;
  var i = r == null ? 0 : ge(r);
  return i < 0 && (i = Ce(t + i, 0)), Hn(n, O(e), i);
}
var Re = _e(Ie);
const K = Re;
function Cn(n, e) {
  var r = -1, t = Ln(n) ? Array(n.length) : [];
  return Un(n, function(i, o, a) {
    t[++r] = e(i, o, a);
  }), t;
}
function w(n, e) {
  var r = U(n) ? T : Cn;
  return r(n, O(e));
}
function Te(n, e) {
  return n == null ? n : ie(n, yn(e), Nn);
}
function Me(n, e) {
  return n && xn(n, yn(e));
}
function Se(n, e) {
  return n > e;
}
var Fe = Object.prototype, Ae = Fe.hasOwnProperty;
function Be(n, e) {
  return n != null && Ae.call(n, e);
}
function In(n, e) {
  return n != null && Jn(n, e, Be);
}
function Rn(n, e) {
  return n < e;
}
function G(n, e) {
  var r = {};
  return e = O(e), xn(n, function(t, i, o) {
    ae(r, i, e(t, i, o));
  }), r;
}
function Z(n, e, r) {
  for (var t = -1, i = n.length; ++t < i; ) {
    var o = n[t], a = e(o);
    if (a != null && (u === void 0 ? a === a && !S(a) : r(a, u)))
      var u = a, d = o;
  }
  return d;
}
function y(n) {
  return n && n.length ? Z(n, J, Se) : void 0;
}
function _(n) {
  return n && n.length ? Z(n, J, Rn) : void 0;
}
function Q(n, e) {
  return n && n.length ? Z(n, O(e), Rn) : void 0;
}
function je(n, e, r, t) {
  if (!F(n))
    return n;
  e = En(e, n);
  for (var i = -1, o = e.length, a = o - 1, u = n; u != null && ++i < o; ) {
    var d = Kn(e[i]), s = r;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return n;
    if (i != a) {
      var c = u[d];
      s = t ? t(c, d, u) : void 0, s === void 0 && (s = F(c) ? c : oe(e[i + 1]) ? [] : {});
    }
    Pn(u, d, s), u = u[d];
  }
  return n;
}
function $e(n, e, r) {
  for (var t = -1, i = e.length, o = {}; ++t < i; ) {
    var a = e[t], u = kn(n, a);
    r(u, a) && je(o, En(a, n), u);
  }
  return o;
}
function Ge(n, e) {
  var r = n.length;
  for (n.sort(e); r--; )
    n[r] = n[r].value;
  return n;
}
function Ve(n, e) {
  if (n !== e) {
    var r = n !== void 0, t = n === null, i = n === n, o = S(n), a = e !== void 0, u = e === null, d = e === e, s = S(e);
    if (!u && !s && !o && n > e || o && a && d && !u && !s || t && a && d || !r && d || !i)
      return 1;
    if (!t && !o && !s && n < e || s && r && i && !t && !o || u && r && i || !a && i || !d)
      return -1;
  }
  return 0;
}
function Ye(n, e, r) {
  for (var t = -1, i = n.criteria, o = e.criteria, a = i.length, u = r.length; ++t < a; ) {
    var d = Ve(i[t], o[t]);
    if (d) {
      if (t >= u)
        return d;
      var s = r[t];
      return d * (s == "desc" ? -1 : 1);
    }
  }
  return n.index - e.index;
}
function De(n, e, r) {
  e.length ? e = T(e, function(o) {
    return U(o) ? function(a) {
      return kn(a, o.length === 1 ? o[0] : o);
    } : o;
  }) : e = [J];
  var t = -1;
  e = T(e, ue(O));
  var i = Cn(n, function(o, a, u) {
    var d = T(e, function(s) {
      return s(o);
    });
    return { criteria: d, index: ++t, value: o };
  });
  return Ge(i, function(o, a) {
    return Ye(o, a, r);
  });
}
function qe(n, e) {
  return $e(n, e, function(r, t) {
    return Zn(n, t);
  });
}
var We = ye(function(n, e) {
  return n == null ? {} : qe(n, e);
});
const j = We;
var Xe = Math.ceil, ze = Math.max;
function He(n, e, r, t) {
  for (var i = -1, o = ze(Xe((e - n) / (r || 1)), 0), a = Array(o); o--; )
    a[t ? o : ++i] = n, n += r;
  return a;
}
function Ue(n) {
  return function(e, r, t) {
    return t && typeof t != "number" && A(e, r, t) && (r = t = void 0), e = M(e), r === void 0 ? (r = e, e = 0) : r = M(r), t = t === void 0 ? e < r ? 1 : -1 : M(t), He(e, r, t, n);
  };
}
var Je = Ue();
const k = Je;
var Ke = On(function(n, e) {
  if (n == null)
    return [];
  var r = e.length;
  return r > 1 && A(n, e[0], e[1]) ? e = [] : r > 2 && A(e[0], e[1], e[2]) && (e = [e[0]]), De(n, gn(e, 1), []);
});
const R = Ke;
var Ze = 0;
function nn(n) {
  var e = ++Ze;
  return Qn(n) + e;
}
function Qe(n, e, r) {
  for (var t = -1, i = n.length, o = e.length, a = {}; ++t < i; ) {
    var u = t < o ? e[t] : void 0;
    r(a, n[t], u);
  }
  return a;
}
function nr(n, e) {
  return Qe(n || [], e || [], Pn);
}
class er {
  constructor() {
    var e = {};
    e._next = e._prev = e, this._sentinel = e;
  }
  dequeue() {
    var e = this._sentinel, r = e._prev;
    if (r !== e)
      return sn(r), r;
  }
  enqueue(e) {
    var r = this._sentinel;
    e._prev && e._next && sn(e), e._next = r._next, r._next._prev = e, r._next = e, e._prev = r;
  }
  toString() {
    for (var e = [], r = this._sentinel, t = r._prev; t !== r; )
      e.push(JSON.stringify(t, rr)), t = t._prev;
    return "[" + e.join(", ") + "]";
  }
}
function sn(n) {
  n._prev._next = n._next, n._next._prev = n._prev, delete n._next, delete n._prev;
}
function rr(n, e) {
  if (n !== "_next" && n !== "_prev")
    return e;
}
var tr = de(1);
function ir(n, e) {
  if (n.nodeCount() <= 1)
    return [];
  var r = or(n, e || tr), t = ar(r.graph, r.buckets, r.zeroIdx);
  return N(
    w(t, function(i) {
      return n.outEdges(i.v, i.w);
    })
  );
}
function ar(n, e, r) {
  for (var t = [], i = e[e.length - 1], o = e[0], a; n.nodeCount(); ) {
    for (; a = o.dequeue(); )
      Y(n, e, r, a);
    for (; a = i.dequeue(); )
      Y(n, e, r, a);
    if (n.nodeCount()) {
      for (var u = e.length - 2; u > 0; --u)
        if (a = e[u].dequeue(), a) {
          t = t.concat(Y(n, e, r, a, !0));
          break;
        }
    }
  }
  return t;
}
function Y(n, e, r, t, i) {
  var o = i ? [] : void 0;
  return f(n.inEdges(t.v), function(a) {
    var u = n.edge(a), d = n.node(a.v);
    i && o.push({ v: a.v, w: a.w }), d.out -= u, H(e, r, d);
  }), f(n.outEdges(t.v), function(a) {
    var u = n.edge(a), d = a.w, s = n.node(d);
    s.in -= u, H(e, r, s);
  }), n.removeNode(t.v), o;
}
function or(n, e) {
  var r = new g(), t = 0, i = 0;
  f(n.nodes(), function(u) {
    r.setNode(u, { v: u, in: 0, out: 0 });
  }), f(n.edges(), function(u) {
    var d = r.edge(u.v, u.w) || 0, s = e(u), c = d + s;
    r.setEdge(u.v, u.w, c), i = Math.max(i, r.node(u.v).out += s), t = Math.max(t, r.node(u.w).in += s);
  });
  var o = k(i + t + 3).map(function() {
    return new er();
  }), a = t + 1;
  return f(r.nodes(), function(u) {
    H(o, a, r.node(u));
  }), { graph: r, buckets: o, zeroIdx: a };
}
function H(n, e, r) {
  r.out ? r.in ? n[r.out - r.in + e].enqueue(r) : n[n.length - 1].enqueue(r) : n[0].enqueue(r);
}
function ur(n) {
  var e = n.graph().acyclicer === "greedy" ? ir(n, r(n)) : dr(n);
  f(e, function(t) {
    var i = n.edge(t);
    n.removeEdge(t), i.forwardName = t.name, i.reversed = !0, n.setEdge(t.w, t.v, i, nn("rev"));
  });
  function r(t) {
    return function(i) {
      return t.edge(i).weight;
    };
  }
}
function dr(n) {
  var e = [], r = {}, t = {};
  function i(o) {
    Object.prototype.hasOwnProperty.call(t, o) || (t[o] = !0, r[o] = !0, f(n.outEdges(o), function(a) {
      Object.prototype.hasOwnProperty.call(r, a.w) ? e.push(a) : i(a.w);
    }), delete r[o]);
  }
  return f(n.nodes(), i), e;
}
function sr(n) {
  f(n.edges(), function(e) {
    var r = n.edge(e);
    if (r.reversed) {
      n.removeEdge(e);
      var t = r.forwardName;
      delete r.reversed, delete r.forwardName, n.setEdge(e.w, e.v, r, t);
    }
  });
}
function L(n, e, r, t) {
  var i;
  do
    i = nn(t);
  while (n.hasNode(i));
  return r.dummy = e, n.setNode(i, r), i;
}
function fr(n) {
  var e = new g().setGraph(n.graph());
  return f(n.nodes(), function(r) {
    e.setNode(r, n.node(r));
  }), f(n.edges(), function(r) {
    var t = e.edge(r.v, r.w) || { weight: 0, minlen: 1 }, i = n.edge(r);
    e.setEdge(r.v, r.w, {
      weight: t.weight + i.weight,
      minlen: Math.max(t.minlen, i.minlen)
    });
  }), e;
}
function Tn(n) {
  var e = new g({ multigraph: n.isMultigraph() }).setGraph(n.graph());
  return f(n.nodes(), function(r) {
    n.children(r).length || e.setNode(r, n.node(r));
  }), f(n.edges(), function(r) {
    e.setEdge(r, n.edge(r));
  }), e;
}
function fn(n, e) {
  var r = n.x, t = n.y, i = e.x - r, o = e.y - t, a = n.width / 2, u = n.height / 2;
  if (!i && !o)
    throw new Error("Not possible to find intersection inside of the rectangle");
  var d, s;
  return Math.abs(o) * a > Math.abs(i) * u ? (o < 0 && (u = -u), d = u * i / o, s = u) : (i < 0 && (a = -a), d = a, s = a * o / i), { x: r + d, y: t + s };
}
function V(n) {
  var e = w(k(Mn(n) + 1), function() {
    return [];
  });
  return f(n.nodes(), function(r) {
    var t = n.node(r), i = t.rank;
    m(i) || (e[i][t.order] = r);
  }), e;
}
function cr(n) {
  var e = _(
    w(n.nodes(), function(r) {
      return n.node(r).rank;
    })
  );
  f(n.nodes(), function(r) {
    var t = n.node(r);
    In(t, "rank") && (t.rank -= e);
  });
}
function lr(n) {
  var e = _(
    w(n.nodes(), function(o) {
      return n.node(o).rank;
    })
  ), r = [];
  f(n.nodes(), function(o) {
    var a = n.node(o).rank - e;
    r[a] || (r[a] = []), r[a].push(o);
  });
  var t = 0, i = n.graph().nodeRankFactor;
  f(r, function(o, a) {
    m(o) && a % i !== 0 ? --t : t && f(o, function(u) {
      n.node(u).rank += t;
    });
  });
}
function cn(n, e, r, t) {
  var i = {
    width: 0,
    height: 0
  };
  return arguments.length >= 4 && (i.rank = r, i.order = t), L(n, "border", i, e);
}
function Mn(n) {
  return y(
    w(n.nodes(), function(e) {
      var r = n.node(e).rank;
      if (!m(r))
        return r;
    })
  );
}
function hr(n, e) {
  var r = { lhs: [], rhs: [] };
  return f(n, function(t) {
    e(t) ? r.lhs.push(t) : r.rhs.push(t);
  }), r;
}
function vr(n, e) {
  var r = dn();
  try {
    return e();
  } finally {
    console.log(n + " time: " + (dn() - r) + "ms");
  }
}
function pr(n, e) {
  return e();
}
function wr(n) {
  function e(r) {
    var t = n.children(r), i = n.node(r);
    if (t.length && f(t, e), Object.prototype.hasOwnProperty.call(i, "minRank")) {
      i.borderLeft = [], i.borderRight = [];
      for (var o = i.minRank, a = i.maxRank + 1; o < a; ++o)
        ln(n, "borderLeft", "_bl", r, i, o), ln(n, "borderRight", "_br", r, i, o);
    }
  }
  f(n.children(), e);
}
function ln(n, e, r, t, i, o) {
  var a = { width: 0, height: 0, rank: o, borderType: e }, u = i[e][o - 1], d = L(n, "border", a, r);
  i[e][o] = d, n.setParent(d, t), u && n.setEdge(u, d, { weight: 1 });
}
function br(n) {
  var e = n.graph().rankdir.toLowerCase();
  (e === "lr" || e === "rl") && Sn(n);
}
function mr(n) {
  var e = n.graph().rankdir.toLowerCase();
  (e === "bt" || e === "rl") && gr(n), (e === "lr" || e === "rl") && (yr(n), Sn(n));
}
function Sn(n) {
  f(n.nodes(), function(e) {
    hn(n.node(e));
  }), f(n.edges(), function(e) {
    hn(n.edge(e));
  });
}
function hn(n) {
  var e = n.width;
  n.width = n.height, n.height = e;
}
function gr(n) {
  f(n.nodes(), function(e) {
    D(n.node(e));
  }), f(n.edges(), function(e) {
    var r = n.edge(e);
    f(r.points, D), Object.prototype.hasOwnProperty.call(r, "y") && D(r);
  });
}
function D(n) {
  n.y = -n.y;
}
function yr(n) {
  f(n.nodes(), function(e) {
    q(n.node(e));
  }), f(n.edges(), function(e) {
    var r = n.edge(e);
    f(r.points, q), Object.prototype.hasOwnProperty.call(r, "x") && q(r);
  });
}
function q(n) {
  var e = n.x;
  n.x = n.y, n.y = e;
}
function xr(n) {
  n.graph().dummyChains = [], f(n.edges(), function(e) {
    Er(n, e);
  });
}
function Er(n, e) {
  var r = e.v, t = n.node(r).rank, i = e.w, o = n.node(i).rank, a = e.name, u = n.edge(e), d = u.labelRank;
  if (o !== t + 1) {
    n.removeEdge(e);
    var s = void 0, c, l;
    for (l = 0, ++t; t < o; ++l, ++t)
      u.points = [], s = {
        width: 0,
        height: 0,
        edgeLabel: u,
        edgeObj: e,
        rank: t
      }, c = L(n, "edge", s, "_d"), t === d && (s.width = u.width, s.height = u.height, s.dummy = "edge-label", s.labelpos = u.labelpos), n.setEdge(r, c, { weight: u.weight }, a), l === 0 && n.graph().dummyChains.push(c), r = c;
    n.setEdge(r, i, { weight: u.weight }, a);
  }
}
function kr(n) {
  f(n.graph().dummyChains, function(e) {
    var r = n.node(e), t = r.edgeLabel, i;
    for (n.setEdge(r.edgeObj, t); r.dummy; )
      i = n.successors(e)[0], n.removeNode(e), t.points.push({ x: r.x, y: r.y }), r.dummy === "edge-label" && (t.x = r.x, t.y = r.y, t.width = r.width, t.height = r.height), e = i, r = n.node(e);
  });
}
function en(n) {
  var e = {};
  function r(t) {
    var i = n.node(t);
    if (Object.prototype.hasOwnProperty.call(e, t))
      return i.rank;
    e[t] = !0;
    var o = _(
      w(n.outEdges(t), function(a) {
        return r(a.w) - n.edge(a).minlen;
      })
    );
    return (o === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
    o === void 0 || // return value of _.map([]) for Lodash 4
    o === null) && (o = 0), i.rank = o;
  }
  f(n.sources(), r);
}
function C(n, e) {
  return n.node(e.w).rank - n.node(e.v).rank - n.edge(e).minlen;
}
function Fn(n) {
  var e = new g({ directed: !1 }), r = n.nodes()[0], t = n.nodeCount();
  e.setNode(r, {});
  for (var i, o; Or(e, n) < t; )
    i = Nr(e, n), o = e.hasNode(i.v) ? C(n, i) : -C(n, i), Lr(e, n, o);
  return e;
}
function Or(n, e) {
  function r(t) {
    f(e.nodeEdges(t), function(i) {
      var o = i.v, a = t === o ? i.w : o;
      !n.hasNode(a) && !C(e, i) && (n.setNode(a, {}), n.setEdge(t, a, {}), r(a));
    });
  }
  return f(n.nodes(), r), n.nodeCount();
}
function Nr(n, e) {
  return Q(e.edges(), function(r) {
    if (n.hasNode(r.v) !== n.hasNode(r.w))
      return C(e, r);
  });
}
function Lr(n, e, r) {
  f(n.nodes(), function(t) {
    e.node(t).rank += r;
  });
}
function Pr() {
}
Pr.prototype = new Error();
function An(n, e, r) {
  U(e) || (e = [e]);
  var t = (n.isDirected() ? n.successors : n.neighbors).bind(n), i = [], o = {};
  return f(e, function(a) {
    if (!n.hasNode(a))
      throw new Error("Graph does not have node: " + a);
    Bn(n, a, r === "post", o, t, i);
  }), i;
}
function Bn(n, e, r, t, i, o) {
  Object.prototype.hasOwnProperty.call(t, e) || (t[e] = !0, r || o.push(e), f(i(e), function(a) {
    Bn(n, a, r, t, i, o);
  }), r && o.push(e));
}
function _r(n, e) {
  return An(n, e, "post");
}
function Cr(n, e) {
  return An(n, e, "pre");
}
x.initLowLimValues = tn;
x.initCutValues = rn;
x.calcCutValue = jn;
x.leaveEdge = Gn;
x.enterEdge = Vn;
x.exchangeEdges = Yn;
function x(n) {
  n = fr(n), en(n);
  var e = Fn(n);
  tn(e), rn(e, n);
  for (var r, t; r = Gn(e); )
    t = Vn(e, n, r), Yn(e, n, r, t);
}
function rn(n, e) {
  var r = _r(n, n.nodes());
  r = r.slice(0, r.length - 1), f(r, function(t) {
    Ir(n, e, t);
  });
}
function Ir(n, e, r) {
  var t = n.node(r), i = t.parent;
  n.edge(r, i).cutvalue = jn(n, e, r);
}
function jn(n, e, r) {
  var t = n.node(r), i = t.parent, o = !0, a = e.edge(r, i), u = 0;
  return a || (o = !1, a = e.edge(i, r)), u = a.weight, f(e.nodeEdges(r), function(d) {
    var s = d.v === r, c = s ? d.w : d.v;
    if (c !== i) {
      var l = s === o, h = e.edge(d).weight;
      if (u += l ? h : -h, Tr(n, r, c)) {
        var v = n.edge(r, c).cutvalue;
        u += l ? -v : v;
      }
    }
  }), u;
}
function tn(n, e) {
  arguments.length < 2 && (e = n.nodes()[0]), $n(n, {}, 1, e);
}
function $n(n, e, r, t, i) {
  var o = r, a = n.node(t);
  return e[t] = !0, f(n.neighbors(t), function(u) {
    Object.prototype.hasOwnProperty.call(e, u) || (r = $n(n, e, r, u, t));
  }), a.low = o, a.lim = r++, i ? a.parent = i : delete a.parent, r;
}
function Gn(n) {
  return K(n.edges(), function(e) {
    return n.edge(e).cutvalue < 0;
  });
}
function Vn(n, e, r) {
  var t = r.v, i = r.w;
  e.hasEdge(t, i) || (t = r.w, i = r.v);
  var o = n.node(t), a = n.node(i), u = o, d = !1;
  o.lim > a.lim && (u = a, d = !0);
  var s = I(e.edges(), function(c) {
    return d === vn(n, n.node(c.v), u) && d !== vn(n, n.node(c.w), u);
  });
  return Q(s, function(c) {
    return C(e, c);
  });
}
function Yn(n, e, r, t) {
  var i = r.v, o = r.w;
  n.removeEdge(i, o), n.setEdge(t.v, t.w, {}), tn(n), rn(n, e), Rr(n, e);
}
function Rr(n, e) {
  var r = K(n.nodes(), function(i) {
    return !e.node(i).parent;
  }), t = Cr(n, r);
  t = t.slice(1), f(t, function(i) {
    var o = n.node(i).parent, a = e.edge(i, o), u = !1;
    a || (a = e.edge(o, i), u = !0), e.node(i).rank = e.node(o).rank + (u ? a.minlen : -a.minlen);
  });
}
function Tr(n, e, r) {
  return n.hasEdge(e, r);
}
function vn(n, e, r) {
  return r.low <= e.lim && e.lim <= r.lim;
}
function Mr(n) {
  switch (n.graph().ranker) {
    case "network-simplex":
      pn(n);
      break;
    case "tight-tree":
      Fr(n);
      break;
    case "longest-path":
      Sr(n);
      break;
    default:
      pn(n);
  }
}
var Sr = en;
function Fr(n) {
  en(n), Fn(n);
}
function pn(n) {
  x(n);
}
function Ar(n) {
  var e = L(n, "root", {}, "_root"), r = Br(n), t = y(E(r)) - 1, i = 2 * t + 1;
  n.graph().nestingRoot = e, f(n.edges(), function(a) {
    n.edge(a).minlen *= i;
  });
  var o = jr(n) + 1;
  f(n.children(), function(a) {
    Dn(n, e, i, o, t, r, a);
  }), n.graph().nodeRankFactor = i;
}
function Dn(n, e, r, t, i, o, a) {
  var u = n.children(a);
  if (!u.length) {
    a !== e && n.setEdge(e, a, { weight: 0, minlen: r });
    return;
  }
  var d = cn(n, "_bt"), s = cn(n, "_bb"), c = n.node(a);
  n.setParent(d, a), c.borderTop = d, n.setParent(s, a), c.borderBottom = s, f(u, function(l) {
    Dn(n, e, r, t, i, o, l);
    var h = n.node(l), v = h.borderTop ? h.borderTop : l, p = h.borderBottom ? h.borderBottom : l, b = h.borderTop ? t : 2 * t, P = v !== p ? 1 : i - o[a] + 1;
    n.setEdge(d, v, {
      weight: b,
      minlen: P,
      nestingEdge: !0
    }), n.setEdge(p, s, {
      weight: b,
      minlen: P,
      nestingEdge: !0
    });
  }), n.parent(a) || n.setEdge(e, d, { weight: 0, minlen: i + o[a] });
}
function Br(n) {
  var e = {};
  function r(t, i) {
    var o = n.children(t);
    o && o.length && f(o, function(a) {
      r(a, i + 1);
    }), e[t] = i;
  }
  return f(n.children(), function(t) {
    r(t, 1);
  }), e;
}
function jr(n) {
  return $(
    n.edges(),
    function(e, r) {
      return e + n.edge(r).weight;
    },
    0
  );
}
function $r(n) {
  var e = n.graph();
  n.removeNode(e.nestingRoot), delete e.nestingRoot, f(n.edges(), function(r) {
    var t = n.edge(r);
    t.nestingEdge && n.removeEdge(r);
  });
}
function Gr(n, e, r) {
  var t = {}, i;
  f(r, function(o) {
    for (var a = n.parent(o), u, d; a; ) {
      if (u = n.parent(a), u ? (d = t[u], t[u] = a) : (d = i, i = a), d && d !== a) {
        e.setEdge(d, a);
        return;
      }
      a = u;
    }
  });
}
function Vr(n, e, r) {
  var t = Yr(n), i = new g({ compound: !0 }).setGraph({ root: t }).setDefaultNodeLabel(function(o) {
    return n.node(o);
  });
  return f(n.nodes(), function(o) {
    var a = n.node(o), u = n.parent(o);
    (a.rank === e || a.minRank <= e && e <= a.maxRank) && (i.setNode(o), i.setParent(o, u || t), f(n[r](o), function(d) {
      var s = d.v === o ? d.w : d.v, c = i.edge(s, o), l = m(c) ? 0 : c.weight;
      i.setEdge(s, o, { weight: n.edge(d).weight + l });
    }), Object.prototype.hasOwnProperty.call(a, "minRank") && i.setNode(o, {
      borderLeft: a.borderLeft[e],
      borderRight: a.borderRight[e]
    }));
  }), i;
}
function Yr(n) {
  for (var e; n.hasNode(e = nn("_root")); )
    ;
  return e;
}
function Dr(n, e) {
  for (var r = 0, t = 1; t < e.length; ++t)
    r += qr(n, e[t - 1], e[t]);
  return r;
}
function qr(n, e, r) {
  for (var t = nr(
    r,
    w(r, function(s, c) {
      return c;
    })
  ), i = N(
    w(e, function(s) {
      return R(
        w(n.outEdges(s), function(c) {
          return { pos: t[c.w], weight: n.edge(c).weight };
        }),
        "pos"
      );
    })
  ), o = 1; o < r.length; )
    o <<= 1;
  var a = 2 * o - 1;
  o -= 1;
  var u = w(new Array(a), function() {
    return 0;
  }), d = 0;
  return f(
    // @ts-expect-error
    i.forEach(function(s) {
      var c = s.pos + o;
      u[c] += s.weight;
      for (var l = 0; c > 0; )
        c % 2 && (l += u[c + 1]), c = c - 1 >> 1, u[c] += s.weight;
      d += s.weight * l;
    })
  ), d;
}
function Wr(n) {
  var e = {}, r = I(n.nodes(), function(u) {
    return !n.children(u).length;
  }), t = y(
    w(r, function(u) {
      return n.node(u).rank;
    })
  ), i = w(k(t + 1), function() {
    return [];
  });
  function o(u) {
    if (!In(e, u)) {
      e[u] = !0;
      var d = n.node(u);
      i[d.rank].push(u), f(n.successors(u), o);
    }
  }
  var a = R(r, function(u) {
    return n.node(u).rank;
  });
  return f(a, o), i;
}
function Xr(n, e) {
  return w(e, function(r) {
    var t = n.inEdges(r);
    if (t.length) {
      var i = $(
        t,
        function(o, a) {
          var u = n.edge(a), d = n.node(a.v);
          return {
            sum: o.sum + u.weight * d.order,
            weight: o.weight + u.weight
          };
        },
        { sum: 0, weight: 0 }
      );
      return {
        v: r,
        barycenter: i.sum / i.weight,
        weight: i.weight
      };
    } else
      return { v: r };
  });
}
function zr(n, e) {
  var r = {};
  f(n, function(i, o) {
    var a = r[i.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [i.v],
      i: o
    };
    m(i.barycenter) || (a.barycenter = i.barycenter, a.weight = i.weight);
  }), f(e.edges(), function(i) {
    var o = r[i.v], a = r[i.w];
    !m(o) && !m(a) && (a.indegree++, o.out.push(r[i.w]));
  });
  var t = I(r, function(i) {
    return !i.indegree;
  });
  return Hr(t);
}
function Hr(n) {
  var e = [];
  function r(o) {
    return function(a) {
      a.merged || (m(a.barycenter) || m(o.barycenter) || a.barycenter >= o.barycenter) && Ur(o, a);
    };
  }
  function t(o) {
    return function(a) {
      a.in.push(o), --a.indegree === 0 && n.push(a);
    };
  }
  for (; n.length; ) {
    var i = n.pop();
    e.push(i), f(i.in.reverse(), r(i)), f(i.out, t(i));
  }
  return w(
    I(e, function(o) {
      return !o.merged;
    }),
    function(o) {
      return j(o, ["vs", "i", "barycenter", "weight"]);
    }
  );
}
function Ur(n, e) {
  var r = 0, t = 0;
  n.weight && (r += n.barycenter * n.weight, t += n.weight), e.weight && (r += e.barycenter * e.weight, t += e.weight), n.vs = e.vs.concat(n.vs), n.barycenter = r / t, n.weight = t, n.i = Math.min(e.i, n.i), e.merged = !0;
}
function Jr(n, e) {
  var r = hr(n, function(c) {
    return Object.prototype.hasOwnProperty.call(c, "barycenter");
  }), t = r.lhs, i = R(r.rhs, function(c) {
    return -c.i;
  }), o = [], a = 0, u = 0, d = 0;
  t.sort(Kr(!!e)), d = wn(o, i, d), f(t, function(c) {
    d += c.vs.length, o.push(c.vs), a += c.barycenter * c.weight, u += c.weight, d = wn(o, i, d);
  });
  var s = { vs: N(o) };
  return u && (s.barycenter = a / u, s.weight = u), s;
}
function wn(n, e, r) {
  for (var t; e.length && (t = B(e)).i <= r; )
    e.pop(), n.push(t.vs), r++;
  return r;
}
function Kr(n) {
  return function(e, r) {
    return e.barycenter < r.barycenter ? -1 : e.barycenter > r.barycenter ? 1 : n ? r.i - e.i : e.i - r.i;
  };
}
function qn(n, e, r, t) {
  var i = n.children(e), o = n.node(e), a = o ? o.borderLeft : void 0, u = o ? o.borderRight : void 0, d = {};
  a && (i = I(i, function(p) {
    return p !== a && p !== u;
  }));
  var s = Xr(n, i);
  f(s, function(p) {
    if (n.children(p.v).length) {
      var b = qn(n, p.v, r, t);
      d[p.v] = b, Object.prototype.hasOwnProperty.call(b, "barycenter") && Qr(p, b);
    }
  });
  var c = zr(s, r);
  Zr(c, d);
  var l = Jr(c, t);
  if (a && (l.vs = N([a, l.vs, u]), n.predecessors(a).length)) {
    var h = n.node(n.predecessors(a)[0]), v = n.node(n.predecessors(u)[0]);
    Object.prototype.hasOwnProperty.call(l, "barycenter") || (l.barycenter = 0, l.weight = 0), l.barycenter = (l.barycenter * l.weight + h.order + v.order) / (l.weight + 2), l.weight += 2;
  }
  return l;
}
function Zr(n, e) {
  f(n, function(r) {
    r.vs = N(
      r.vs.map(function(t) {
        return e[t] ? e[t].vs : t;
      })
    );
  });
}
function Qr(n, e) {
  m(n.barycenter) ? (n.barycenter = e.barycenter, n.weight = e.weight) : (n.barycenter = (n.barycenter * n.weight + e.barycenter * e.weight) / (n.weight + e.weight), n.weight += e.weight);
}
function nt(n) {
  var e = Mn(n), r = bn(n, k(1, e + 1), "inEdges"), t = bn(n, k(e - 1, -1, -1), "outEdges"), i = Wr(n);
  mn(n, i);
  for (var o = Number.POSITIVE_INFINITY, a, u = 0, d = 0; d < 4; ++u, ++d) {
    et(u % 2 ? r : t, u % 4 >= 2), i = V(n);
    var s = Dr(n, i);
    s < o && (d = 0, a = ke(i), o = s);
  }
  mn(n, a);
}
function bn(n, e, r) {
  return w(e, function(t) {
    return Vr(n, t, r);
  });
}
function et(n, e) {
  var r = new g();
  f(n, function(t) {
    var i = t.graph().root, o = qn(t, i, r, e);
    f(o.vs, function(a, u) {
      t.node(a).order = u;
    }), Gr(t, r, o.vs);
  });
}
function mn(n, e) {
  f(e, function(r) {
    f(r, function(t, i) {
      n.node(t).order = i;
    });
  });
}
function rt(n) {
  var e = it(n);
  f(n.graph().dummyChains, function(r) {
    for (var t = n.node(r), i = t.edgeObj, o = tt(n, e, i.v, i.w), a = o.path, u = o.lca, d = 0, s = a[d], c = !0; r !== i.w; ) {
      if (t = n.node(r), c) {
        for (; (s = a[d]) !== u && n.node(s).maxRank < t.rank; )
          d++;
        s === u && (c = !1);
      }
      if (!c) {
        for (; d < a.length - 1 && n.node(s = a[d + 1]).minRank <= t.rank; )
          d++;
        s = a[d];
      }
      n.setParent(r, s), r = n.successors(r)[0];
    }
  });
}
function tt(n, e, r, t) {
  var i = [], o = [], a = Math.min(e[r].low, e[t].low), u = Math.max(e[r].lim, e[t].lim), d, s;
  d = r;
  do
    d = n.parent(d), i.push(d);
  while (d && (e[d].low > a || u > e[d].lim));
  for (s = d, d = t; (d = n.parent(d)) !== s; )
    o.push(d);
  return { path: i.concat(o.reverse()), lca: s };
}
function it(n) {
  var e = {}, r = 0;
  function t(i) {
    var o = r;
    f(n.children(i), t), e[i] = { low: o, lim: r++ };
  }
  return f(n.children(), t), e;
}
function at(n, e) {
  var r = {};
  function t(i, o) {
    var a = 0, u = 0, d = i.length, s = B(o);
    return f(o, function(c, l) {
      var h = ut(n, c), v = h ? n.node(h).order : d;
      (h || c === s) && (f(o.slice(u, l + 1), function(p) {
        f(n.predecessors(p), function(b) {
          var P = n.node(b), an = P.order;
          (an < a || v < an) && !(P.dummy && n.node(p).dummy) && Wn(r, b, p);
        });
      }), u = l + 1, a = v);
    }), o;
  }
  return $(e, t), r;
}
function ot(n, e) {
  var r = {};
  function t(o, a, u, d, s) {
    var c;
    f(k(a, u), function(l) {
      c = o[l], n.node(c).dummy && f(n.predecessors(c), function(h) {
        var v = n.node(h);
        v.dummy && (v.order < d || v.order > s) && Wn(r, h, c);
      });
    });
  }
  function i(o, a) {
    var u = -1, d, s = 0;
    return f(a, function(c, l) {
      if (n.node(c).dummy === "border") {
        var h = n.predecessors(c);
        h.length && (d = n.node(h[0]).order, t(a, s, l, u, d), s = l, u = d);
      }
      t(a, s, a.length, d, o.length);
    }), a;
  }
  return $(e, i), r;
}
function ut(n, e) {
  if (n.node(e).dummy)
    return K(n.predecessors(e), function(r) {
      return n.node(r).dummy;
    });
}
function Wn(n, e, r) {
  if (e > r) {
    var t = e;
    e = r, r = t;
  }
  Object.prototype.hasOwnProperty.call(n, e) || Object.defineProperty(n, e, {
    enumerable: !0,
    configurable: !0,
    value: {},
    writable: !0
  });
  var i = n[e];
  Object.defineProperty(i, r, {
    enumerable: !0,
    configurable: !0,
    value: !0,
    writable: !0
  });
}
function dt(n, e, r) {
  if (e > r) {
    var t = e;
    e = r, r = t;
  }
  return !!n[e] && Object.prototype.hasOwnProperty.call(n[e], r);
}
function st(n, e, r, t) {
  var i = {}, o = {}, a = {};
  return f(e, function(u) {
    f(u, function(d, s) {
      i[d] = d, o[d] = d, a[d] = s;
    });
  }), f(e, function(u) {
    var d = -1;
    f(u, function(s) {
      var c = t(s);
      if (c.length) {
        c = R(c, function(b) {
          return a[b];
        });
        for (var l = (c.length - 1) / 2, h = Math.floor(l), v = Math.ceil(l); h <= v; ++h) {
          var p = c[h];
          o[s] === s && d < a[p] && !dt(r, s, p) && (o[p] = s, o[s] = i[s] = i[p], d = a[p]);
        }
      }
    });
  }), { root: i, align: o };
}
function ft(n, e, r, t, i) {
  var o = {}, a = ct(n, e, r, i), u = i ? "borderLeft" : "borderRight";
  function d(l, h) {
    for (var v = a.nodes(), p = v.pop(), b = {}; p; )
      b[p] ? l(p) : (b[p] = !0, v.push(p), v = v.concat(h(p))), p = v.pop();
  }
  function s(l) {
    o[l] = a.inEdges(l).reduce(function(h, v) {
      return Math.max(h, o[v.v] + a.edge(v));
    }, 0);
  }
  function c(l) {
    var h = a.outEdges(l).reduce(function(p, b) {
      return Math.min(p, o[b.w] - a.edge(b));
    }, Number.POSITIVE_INFINITY), v = n.node(l);
    h !== Number.POSITIVE_INFINITY && v.borderType !== u && (o[l] = Math.max(o[l], h));
  }
  return d(s, a.predecessors.bind(a)), d(c, a.successors.bind(a)), f(t, function(l) {
    o[l] = o[r[l]];
  }), o;
}
function ct(n, e, r, t) {
  var i = new g(), o = n.graph(), a = wt(o.nodesep, o.edgesep, t);
  return f(e, function(u) {
    var d;
    f(u, function(s) {
      var c = r[s];
      if (i.setNode(c), d) {
        var l = r[d], h = i.edge(l, c);
        i.setEdge(l, c, Math.max(a(n, s, d), h || 0));
      }
      d = s;
    });
  }), i;
}
function lt(n, e) {
  return Q(E(e), function(r) {
    var t = Number.NEGATIVE_INFINITY, i = Number.POSITIVE_INFINITY;
    return Te(r, function(o, a) {
      var u = bt(n, a) / 2;
      t = Math.max(o + u, t), i = Math.min(o - u, i);
    }), t - i;
  });
}
function ht(n, e) {
  var r = E(e), t = _(r), i = y(r);
  f(["u", "d"], function(o) {
    f(["l", "r"], function(a) {
      var u = o + a, d = n[u], s;
      if (d !== e) {
        var c = E(d);
        s = a === "l" ? t - _(c) : i - y(c), s && (n[u] = G(d, function(l) {
          return l + s;
        }));
      }
    });
  });
}
function vt(n, e) {
  return G(n.ul, function(r, t) {
    if (e)
      return n[e.toLowerCase()][t];
    var i = R(w(n, t));
    return (i[1] + i[2]) / 2;
  });
}
function pt(n) {
  var e = V(n), r = z(at(n, e), ot(n, e)), t = {}, i;
  f(["u", "d"], function(a) {
    i = a === "u" ? e : E(e).reverse(), f(["l", "r"], function(u) {
      u === "r" && (i = w(i, function(l) {
        return E(l).reverse();
      }));
      var d = (a === "u" ? n.predecessors : n.successors).bind(n), s = st(n, i, r, d), c = ft(n, i, s.root, s.align, u === "r");
      u === "r" && (c = G(c, function(l) {
        return -l;
      })), t[a + u] = c;
    });
  });
  var o = lt(n, t);
  return ht(t, o), vt(t, n.graph().align);
}
function wt(n, e, r) {
  return function(t, i, o) {
    var a = t.node(i), u = t.node(o), d = 0, s;
    if (d += a.width / 2, Object.prototype.hasOwnProperty.call(a, "labelpos"))
      switch (a.labelpos.toLowerCase()) {
        case "l":
          s = -a.width / 2;
          break;
        case "r":
          s = a.width / 2;
          break;
      }
    if (s && (d += r ? s : -s), s = 0, d += (a.dummy ? e : n) / 2, d += (u.dummy ? e : n) / 2, d += u.width / 2, Object.prototype.hasOwnProperty.call(u, "labelpos"))
      switch (u.labelpos.toLowerCase()) {
        case "l":
          s = u.width / 2;
          break;
        case "r":
          s = -u.width / 2;
          break;
      }
    return s && (d += r ? s : -s), s = 0, d;
  };
}
function bt(n, e) {
  return n.node(e).width;
}
function mt(n) {
  n = Tn(n), gt(n), Me(pt(n), function(e, r) {
    n.node(r).x = e;
  });
}
function gt(n) {
  var e = V(n), r = n.graph().ranksep, t = 0;
  f(e, function(i) {
    var o = y(
      w(i, function(a) {
        return n.node(a).height;
      })
    );
    f(i, function(a) {
      n.node(a).y = t + o / 2;
    }), t += o + r;
  });
}
function Wt(n, e) {
  var r = e && e.debugTiming ? vr : pr;
  r("layout", () => {
    var t = r("  buildLayoutGraph", () => It(n));
    r("  runLayout", () => yt(t, r)), r("  updateInputGraph", () => xt(n, t));
  });
}
function yt(n, e) {
  e("    makeSpaceForEdgeLabels", () => Rt(n)), e("    removeSelfEdges", () => Gt(n)), e("    acyclic", () => ur(n)), e("    nestingGraph.run", () => Ar(n)), e("    rank", () => Mr(Tn(n))), e("    injectEdgeLabelProxies", () => Tt(n)), e("    removeEmptyRanks", () => lr(n)), e("    nestingGraph.cleanup", () => $r(n)), e("    normalizeRanks", () => cr(n)), e("    assignRankMinMax", () => Mt(n)), e("    removeEdgeLabelProxies", () => St(n)), e("    normalize.run", () => xr(n)), e("    parentDummyChains", () => rt(n)), e("    addBorderSegments", () => wr(n)), e("    order", () => nt(n)), e("    insertSelfEdges", () => Vt(n)), e("    adjustCoordinateSystem", () => br(n)), e("    position", () => mt(n)), e("    positionSelfEdges", () => Yt(n)), e("    removeBorderNodes", () => $t(n)), e("    normalize.undo", () => kr(n)), e("    fixupEdgeLabelCoords", () => Bt(n)), e("    undoCoordinateSystem", () => mr(n)), e("    translateGraph", () => Ft(n)), e("    assignNodeIntersects", () => At(n)), e("    reversePoints", () => jt(n)), e("    acyclic.undo", () => sr(n));
}
function xt(n, e) {
  f(n.nodes(), function(r) {
    var t = n.node(r), i = e.node(r);
    t && (t.x = i.x, t.y = i.y, e.children(r).length && (t.width = i.width, t.height = i.height));
  }), f(n.edges(), function(r) {
    var t = n.edge(r), i = e.edge(r);
    t.points = i.points, Object.prototype.hasOwnProperty.call(i, "x") && (t.x = i.x, t.y = i.y);
  }), n.graph().width = e.graph().width, n.graph().height = e.graph().height;
}
var Et = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], kt = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, Ot = ["acyclicer", "ranker", "rankdir", "align"], Nt = ["width", "height"], Lt = { width: 0, height: 0 }, Pt = ["minlen", "weight", "width", "height", "labeloffset"], _t = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: "r"
}, Ct = ["labelpos"];
function It(n) {
  var e = new g({ multigraph: !0, compound: !0 }), r = X(n.graph());
  return e.setGraph(
    z({}, kt, W(r, Et), j(r, Ot))
  ), f(n.nodes(), function(t) {
    var i = X(n.node(t));
    e.setNode(t, Pe(W(i, Nt), Lt)), e.setParent(t, n.parent(t));
  }), f(n.edges(), function(t) {
    var i = X(n.edge(t));
    e.setEdge(
      t,
      z({}, _t, W(i, Pt), j(i, Ct))
    );
  }), e;
}
function Rt(n) {
  var e = n.graph();
  e.ranksep /= 2, f(n.edges(), function(r) {
    var t = n.edge(r);
    t.minlen *= 2, t.labelpos.toLowerCase() !== "c" && (e.rankdir === "TB" || e.rankdir === "BT" ? t.width += t.labeloffset : t.height += t.labeloffset);
  });
}
function Tt(n) {
  f(n.edges(), function(e) {
    var r = n.edge(e);
    if (r.width && r.height) {
      var t = n.node(e.v), i = n.node(e.w), o = { rank: (i.rank - t.rank) / 2 + t.rank, e };
      L(n, "edge-proxy", o, "_ep");
    }
  });
}
function Mt(n) {
  var e = 0;
  f(n.nodes(), function(r) {
    var t = n.node(r);
    t.borderTop && (t.minRank = n.node(t.borderTop).rank, t.maxRank = n.node(t.borderBottom).rank, e = y(e, t.maxRank));
  }), n.graph().maxRank = e;
}
function St(n) {
  f(n.nodes(), function(e) {
    var r = n.node(e);
    r.dummy === "edge-proxy" && (n.edge(r.e).labelRank = r.rank, n.removeNode(e));
  });
}
function Ft(n) {
  var e = Number.POSITIVE_INFINITY, r = 0, t = Number.POSITIVE_INFINITY, i = 0, o = n.graph(), a = o.marginx || 0, u = o.marginy || 0;
  function d(s) {
    var c = s.x, l = s.y, h = s.width, v = s.height;
    e = Math.min(e, c - h / 2), r = Math.max(r, c + h / 2), t = Math.min(t, l - v / 2), i = Math.max(i, l + v / 2);
  }
  f(n.nodes(), function(s) {
    d(n.node(s));
  }), f(n.edges(), function(s) {
    var c = n.edge(s);
    Object.prototype.hasOwnProperty.call(c, "x") && d(c);
  }), e -= a, t -= u, f(n.nodes(), function(s) {
    var c = n.node(s);
    c.x -= e, c.y -= t;
  }), f(n.edges(), function(s) {
    var c = n.edge(s);
    f(c.points, function(l) {
      l.x -= e, l.y -= t;
    }), Object.prototype.hasOwnProperty.call(c, "x") && (c.x -= e), Object.prototype.hasOwnProperty.call(c, "y") && (c.y -= t);
  }), o.width = r - e + a, o.height = i - t + u;
}
function At(n) {
  f(n.edges(), function(e) {
    var r = n.edge(e), t = n.node(e.v), i = n.node(e.w), o, a;
    r.points ? (o = r.points[0], a = r.points[r.points.length - 1]) : (r.points = [], o = i, a = t), r.points.unshift(fn(t, o)), r.points.push(fn(i, a));
  });
}
function Bt(n) {
  f(n.edges(), function(e) {
    var r = n.edge(e);
    if (Object.prototype.hasOwnProperty.call(r, "x"))
      switch ((r.labelpos === "l" || r.labelpos === "r") && (r.width -= r.labeloffset), r.labelpos) {
        case "l":
          r.x -= r.width / 2 + r.labeloffset;
          break;
        case "r":
          r.x += r.width / 2 + r.labeloffset;
          break;
      }
  });
}
function jt(n) {
  f(n.edges(), function(e) {
    var r = n.edge(e);
    r.reversed && r.points.reverse();
  });
}
function $t(n) {
  f(n.nodes(), function(e) {
    if (n.children(e).length) {
      var r = n.node(e), t = n.node(r.borderTop), i = n.node(r.borderBottom), o = n.node(B(r.borderLeft)), a = n.node(B(r.borderRight));
      r.width = Math.abs(a.x - o.x), r.height = Math.abs(i.y - t.y), r.x = o.x + r.width / 2, r.y = t.y + r.height / 2;
    }
  }), f(n.nodes(), function(e) {
    n.node(e).dummy === "border" && n.removeNode(e);
  });
}
function Gt(n) {
  f(n.edges(), function(e) {
    if (e.v === e.w) {
      var r = n.node(e.v);
      r.selfEdges || (r.selfEdges = []), r.selfEdges.push({ e, label: n.edge(e) }), n.removeEdge(e);
    }
  });
}
function Vt(n) {
  var e = V(n);
  f(e, function(r) {
    var t = 0;
    f(r, function(i, o) {
      var a = n.node(i);
      a.order = o + t, f(a.selfEdges, function(u) {
        L(
          n,
          "selfedge",
          {
            width: u.label.width,
            height: u.label.height,
            rank: a.rank,
            order: o + ++t,
            e: u.e,
            label: u.label
          },
          "_se"
        );
      }), delete a.selfEdges;
    });
  });
}
function Yt(n) {
  f(n.nodes(), function(e) {
    var r = n.node(e);
    if (r.dummy === "selfedge") {
      var t = n.node(r.e.v), i = t.x + t.width / 2, o = t.y, a = r.x - i, u = t.height / 2;
      n.setEdge(r.e, r.label), n.removeNode(e), r.label.points = [
        { x: i + 2 * a / 3, y: o - u },
        { x: i + 5 * a / 6, y: o - u },
        { x: i + a, y: o },
        { x: i + 5 * a / 6, y: o + u },
        { x: i + 2 * a / 3, y: o + u }
      ], r.label.x = r.x, r.label.y = r.y;
    }
  });
}
function W(n, e) {
  return G(j(n, e), Number);
}
function X(n) {
  var e = {};
  return f(n, function(r, t) {
    e[t.toLowerCase()] = r;
  }), e;
}
export {
  Pe as d,
  Wt as l,
  w as m,
  j as p,
  k as r,
  nn as u
};
