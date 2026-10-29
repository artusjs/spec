import { aK as L, aL as He, aM as O, ah as y, ag as Ae, aN as Ze, aO as qe, aP as Xe, aQ as Te, aR as R, ae as q, aS as Qe, aT as Oe, aU as We, aV as I, aW as D, an as Ee, a8 as we, aX as Je, aY as H, aZ as ze, a_ as Ve, a$ as v, am as ke, b0 as en, af as nn, b1 as ne, b2 as rn, b3 as tn, al as sn, ak as $e, ai as an, b4 as j, ac as un, b5 as fn, ao as F, z as re, b6 as te } from "./mermaid-b92f6f74.js";
var on = "[object Symbol]";
function X(e) {
  return typeof e == "symbol" || L(e) && He(e) == on;
}
function me(e, n) {
  for (var r = -1, t = e == null ? 0 : e.length, i = Array(t); ++r < t; )
    i[r] = n(e[r], r, e);
  return i;
}
var ln = 1 / 0, ie = O ? O.prototype : void 0, se = ie ? ie.toString : void 0;
function Pe(e) {
  if (typeof e == "string")
    return e;
  if (y(e))
    return me(e, Pe) + "";
  if (X(e))
    return se ? se.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -ln ? "-0" : n;
}
function hn() {
}
function ve(e, n) {
  for (var r = -1, t = e == null ? 0 : e.length; ++r < t && n(e[r], r, e) !== !1; )
    ;
  return e;
}
function dn(e, n, r, t) {
  for (var i = e.length, s = r + (t ? 1 : -1); t ? s-- : ++s < i; )
    if (n(e[s], s, e))
      return s;
  return -1;
}
function gn(e) {
  return e !== e;
}
function cn(e, n, r) {
  for (var t = r - 1, i = e.length; ++t < i; )
    if (e[t] === n)
      return t;
  return -1;
}
function _n(e, n, r) {
  return n === n ? cn(e, n, r) : dn(e, gn, r);
}
function pn(e, n) {
  var r = e == null ? 0 : e.length;
  return !!r && _n(e, n, 0) > -1;
}
function T(e) {
  return Ae(e) ? Ze(e) : qe(e);
}
var bn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yn = /^\w*$/;
function Q(e, n) {
  if (y(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || X(e) ? !0 : yn.test(e) || !bn.test(e) || n != null && e in Object(n);
}
var An = 500;
function Tn(e) {
  var n = Xe(e, function(t) {
    return r.size === An && r.clear(), t;
  }), r = n.cache;
  return n;
}
var On = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, En = /\\(\\)?/g, wn = Tn(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(On, function(r, t, i, s) {
    n.push(i ? s.replace(En, "$1") : t || r);
  }), n;
});
const $n = wn;
function mn(e) {
  return e == null ? "" : Pe(e);
}
function Le(e, n) {
  return y(e) ? e : Q(e, n) ? [e] : $n(mn(e));
}
var Pn = 1 / 0;
function G(e) {
  if (typeof e == "string" || X(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -Pn ? "-0" : n;
}
function Ie(e, n) {
  n = Le(n, e);
  for (var r = 0, t = n.length; e != null && r < t; )
    e = e[G(n[r++])];
  return r && r == t ? e : void 0;
}
function vn(e, n, r) {
  var t = e == null ? void 0 : Ie(e, n);
  return t === void 0 ? r : t;
}
function W(e, n) {
  for (var r = -1, t = n.length, i = e.length; ++r < t; )
    e[i + r] = n[r];
  return e;
}
var ae = O ? O.isConcatSpreadable : void 0;
function Ln(e) {
  return y(e) || Te(e) || !!(ae && e && e[ae]);
}
function Ce(e, n, r, t, i) {
  var s = -1, a = e.length;
  for (r || (r = Ln), i || (i = []); ++s < a; ) {
    var u = e[s];
    n > 0 && r(u) ? n > 1 ? Ce(u, n - 1, r, t, i) : W(i, u) : t || (i[i.length] = u);
  }
  return i;
}
function In(e, n, r, t) {
  var i = -1, s = e == null ? 0 : e.length;
  for (t && s && (r = e[++i]); ++i < s; )
    r = n(r, e[i], i, e);
  return r;
}
function Cn(e, n) {
  return e && R(n, T(n), e);
}
function Sn(e, n) {
  return e && R(n, q(n), e);
}
function Se(e, n) {
  for (var r = -1, t = e == null ? 0 : e.length, i = 0, s = []; ++r < t; ) {
    var a = e[r];
    n(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Ne() {
  return [];
}
var Nn = Object.prototype, Fn = Nn.propertyIsEnumerable, ue = Object.getOwnPropertySymbols, Mn = ue ? function(e) {
  return e == null ? [] : (e = Object(e), Se(ue(e), function(n) {
    return Fn.call(e, n);
  }));
} : Ne;
const J = Mn;
function xn(e, n) {
  return R(e, J(e), n);
}
var Dn = Object.getOwnPropertySymbols, Rn = Dn ? function(e) {
  for (var n = []; e; )
    W(n, J(e)), e = Qe(e);
  return n;
} : Ne;
const Fe = Rn;
function Gn(e, n) {
  return R(e, Fe(e), n);
}
function Me(e, n, r) {
  var t = n(e);
  return y(e) ? t : W(t, r(e));
}
function Z(e) {
  return Me(e, T, J);
}
function jn(e) {
  return Me(e, q, Fe);
}
var Un = Object.prototype, Bn = Un.hasOwnProperty;
function Kn(e) {
  var n = e.length, r = new e.constructor(n);
  return n && typeof e[0] == "string" && Bn.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
function Yn(e, n) {
  var r = n ? Oe(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Hn = /\w*$/;
function Zn(e) {
  var n = new e.constructor(e.source, Hn.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var fe = O ? O.prototype : void 0, oe = fe ? fe.valueOf : void 0;
function qn(e) {
  return oe ? Object(oe.call(e)) : {};
}
var Xn = "[object Boolean]", Qn = "[object Date]", Wn = "[object Map]", Jn = "[object Number]", zn = "[object RegExp]", Vn = "[object Set]", kn = "[object String]", er = "[object Symbol]", nr = "[object ArrayBuffer]", rr = "[object DataView]", tr = "[object Float32Array]", ir = "[object Float64Array]", sr = "[object Int8Array]", ar = "[object Int16Array]", ur = "[object Int32Array]", fr = "[object Uint8Array]", or = "[object Uint8ClampedArray]", lr = "[object Uint16Array]", hr = "[object Uint32Array]";
function dr(e, n, r) {
  var t = e.constructor;
  switch (n) {
    case nr:
      return Oe(e);
    case Xn:
    case Qn:
      return new t(+e);
    case rr:
      return Yn(e, r);
    case tr:
    case ir:
    case sr:
    case ar:
    case ur:
    case fr:
    case or:
    case lr:
    case hr:
      return We(e, r);
    case Wn:
      return new t();
    case Jn:
    case kn:
      return new t(e);
    case zn:
      return Zn(e);
    case Vn:
      return new t();
    case er:
      return qn(e);
  }
}
var gr = "[object Map]";
function cr(e) {
  return L(e) && I(e) == gr;
}
var le = D && D.isMap, _r = le ? Ee(le) : cr;
const pr = _r;
var br = "[object Set]";
function yr(e) {
  return L(e) && I(e) == br;
}
var he = D && D.isSet, Ar = he ? Ee(he) : yr;
const Tr = Ar;
var Or = 1, Er = 2, wr = 4, xe = "[object Arguments]", $r = "[object Array]", mr = "[object Boolean]", Pr = "[object Date]", vr = "[object Error]", De = "[object Function]", Lr = "[object GeneratorFunction]", Ir = "[object Map]", Cr = "[object Number]", Re = "[object Object]", Sr = "[object RegExp]", Nr = "[object Set]", Fr = "[object String]", Mr = "[object Symbol]", xr = "[object WeakMap]", Dr = "[object ArrayBuffer]", Rr = "[object DataView]", Gr = "[object Float32Array]", jr = "[object Float64Array]", Ur = "[object Int8Array]", Br = "[object Int16Array]", Kr = "[object Int32Array]", Yr = "[object Uint8Array]", Hr = "[object Uint8ClampedArray]", Zr = "[object Uint16Array]", qr = "[object Uint32Array]", h = {};
h[xe] = h[$r] = h[Dr] = h[Rr] = h[mr] = h[Pr] = h[Gr] = h[jr] = h[Ur] = h[Br] = h[Kr] = h[Ir] = h[Cr] = h[Re] = h[Sr] = h[Nr] = h[Fr] = h[Mr] = h[Yr] = h[Hr] = h[Zr] = h[qr] = !0;
h[vr] = h[De] = h[xr] = !1;
function U(e, n, r, t, i, s) {
  var a, u = n & Or, f = n & Er, g = n & wr;
  if (r && (a = i ? r(e, t, i, s) : r(e)), a !== void 0)
    return a;
  if (!we(e))
    return e;
  var d = y(e);
  if (d) {
    if (a = Kn(e), !u)
      return Je(e, a);
  } else {
    var o = I(e), l = o == De || o == Lr;
    if (H(e))
      return ze(e, u);
    if (o == Re || o == xe || l && !i) {
      if (a = f || l ? {} : Ve(e), !u)
        return f ? Gn(e, Sn(a, e)) : xn(e, Cn(a, e));
    } else {
      if (!h[o])
        return i ? e : {};
      a = dr(e, o, u);
    }
  }
  s || (s = new v());
  var A = s.get(e);
  if (A)
    return A;
  s.set(e, a), Tr(e) ? e.forEach(function(c) {
    a.add(U(c, n, r, c, e, s));
  }) : pr(e) && e.forEach(function(c, _) {
    a.set(_, U(c, n, r, _, e, s));
  });
  var p = g ? f ? jn : Z : f ? q : T, b = d ? void 0 : p(e);
  return ve(b || e, function(c, _) {
    b && (_ = c, c = e[_]), ke(a, _, U(c, n, r, _, e, s));
  }), a;
}
var Xr = "__lodash_hash_undefined__";
function Qr(e) {
  return this.__data__.set(e, Xr), this;
}
function Wr(e) {
  return this.__data__.has(e);
}
function C(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new en(); ++n < r; )
    this.add(e[n]);
}
C.prototype.add = C.prototype.push = Qr;
C.prototype.has = Wr;
function Jr(e, n) {
  for (var r = -1, t = e == null ? 0 : e.length; ++r < t; )
    if (n(e[r], r, e))
      return !0;
  return !1;
}
function Ge(e, n) {
  return e.has(n);
}
var zr = 1, Vr = 2;
function je(e, n, r, t, i, s) {
  var a = r & zr, u = e.length, f = n.length;
  if (u != f && !(a && f > u))
    return !1;
  var g = s.get(e), d = s.get(n);
  if (g && d)
    return g == n && d == e;
  var o = -1, l = !0, A = r & Vr ? new C() : void 0;
  for (s.set(e, n), s.set(n, e); ++o < u; ) {
    var p = e[o], b = n[o];
    if (t)
      var c = a ? t(b, p, o, n, e, s) : t(p, b, o, e, n, s);
    if (c !== void 0) {
      if (c)
        continue;
      l = !1;
      break;
    }
    if (A) {
      if (!Jr(n, function(_, E) {
        if (!Ge(A, E) && (p === _ || i(p, _, r, t, s)))
          return A.push(E);
      })) {
        l = !1;
        break;
      }
    } else if (!(p === b || i(p, b, r, t, s))) {
      l = !1;
      break;
    }
  }
  return s.delete(e), s.delete(n), l;
}
function kr(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(t, i) {
    r[++n] = [i, t];
  }), r;
}
function z(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(t) {
    r[++n] = t;
  }), r;
}
var et = 1, nt = 2, rt = "[object Boolean]", tt = "[object Date]", it = "[object Error]", st = "[object Map]", at = "[object Number]", ut = "[object RegExp]", ft = "[object Set]", ot = "[object String]", lt = "[object Symbol]", ht = "[object ArrayBuffer]", dt = "[object DataView]", de = O ? O.prototype : void 0, B = de ? de.valueOf : void 0;
function gt(e, n, r, t, i, s, a) {
  switch (r) {
    case dt:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case ht:
      return !(e.byteLength != n.byteLength || !s(new ne(e), new ne(n)));
    case rt:
    case tt:
    case at:
      return nn(+e, +n);
    case it:
      return e.name == n.name && e.message == n.message;
    case ut:
    case ot:
      return e == n + "";
    case st:
      var u = kr;
    case ft:
      var f = t & et;
      if (u || (u = z), e.size != n.size && !f)
        return !1;
      var g = a.get(e);
      if (g)
        return g == n;
      t |= nt, a.set(e, n);
      var d = je(u(e), u(n), t, i, s, a);
      return a.delete(e), d;
    case lt:
      if (B)
        return B.call(e) == B.call(n);
  }
  return !1;
}
var ct = 1, _t = Object.prototype, pt = _t.hasOwnProperty;
function bt(e, n, r, t, i, s) {
  var a = r & ct, u = Z(e), f = u.length, g = Z(n), d = g.length;
  if (f != d && !a)
    return !1;
  for (var o = f; o--; ) {
    var l = u[o];
    if (!(a ? l in n : pt.call(n, l)))
      return !1;
  }
  var A = s.get(e), p = s.get(n);
  if (A && p)
    return A == n && p == e;
  var b = !0;
  s.set(e, n), s.set(n, e);
  for (var c = a; ++o < f; ) {
    l = u[o];
    var _ = e[l], E = n[l];
    if (t)
      var ee = a ? t(E, _, l, n, e, s) : t(_, E, l, e, n, s);
    if (!(ee === void 0 ? _ === E || i(_, E, r, t, s) : ee)) {
      b = !1;
      break;
    }
    c || (c = l == "constructor");
  }
  if (b && !c) {
    var S = e.constructor, N = n.constructor;
    S != N && "constructor" in e && "constructor" in n && !(typeof S == "function" && S instanceof S && typeof N == "function" && N instanceof N) && (b = !1);
  }
  return s.delete(e), s.delete(n), b;
}
var yt = 1, ge = "[object Arguments]", ce = "[object Array]", M = "[object Object]", At = Object.prototype, _e = At.hasOwnProperty;
function Tt(e, n, r, t, i, s) {
  var a = y(e), u = y(n), f = a ? ce : I(e), g = u ? ce : I(n);
  f = f == ge ? M : f, g = g == ge ? M : g;
  var d = f == M, o = g == M, l = f == g;
  if (l && H(e)) {
    if (!H(n))
      return !1;
    a = !0, d = !1;
  }
  if (l && !d)
    return s || (s = new v()), a || rn(e) ? je(e, n, r, t, i, s) : gt(e, n, f, r, t, i, s);
  if (!(r & yt)) {
    var A = d && _e.call(e, "__wrapped__"), p = o && _e.call(n, "__wrapped__");
    if (A || p) {
      var b = A ? e.value() : e, c = p ? n.value() : n;
      return s || (s = new v()), i(b, c, r, t, s);
    }
  }
  return l ? (s || (s = new v()), bt(e, n, r, t, i, s)) : !1;
}
function V(e, n, r, t, i) {
  return e === n ? !0 : e == null || n == null || !L(e) && !L(n) ? e !== e && n !== n : Tt(e, n, r, t, V, i);
}
var Ot = 1, Et = 2;
function wt(e, n, r, t) {
  var i = r.length, s = i, a = !t;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var u = r[i];
    if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    u = r[i];
    var f = u[0], g = e[f], d = u[1];
    if (a && u[2]) {
      if (g === void 0 && !(f in e))
        return !1;
    } else {
      var o = new v();
      if (t)
        var l = t(g, d, f, e, n, o);
      if (!(l === void 0 ? V(d, g, Ot | Et, t, o) : l))
        return !1;
    }
  }
  return !0;
}
function Ue(e) {
  return e === e && !we(e);
}
function $t(e) {
  for (var n = T(e), r = n.length; r--; ) {
    var t = n[r], i = e[t];
    n[r] = [t, i, Ue(i)];
  }
  return n;
}
function Be(e, n) {
  return function(r) {
    return r == null ? !1 : r[e] === n && (n !== void 0 || e in Object(r));
  };
}
function mt(e) {
  var n = $t(e);
  return n.length == 1 && n[0][2] ? Be(n[0][0], n[0][1]) : function(r) {
    return r === e || wt(r, e, n);
  };
}
function Pt(e, n) {
  return e != null && n in Object(e);
}
function vt(e, n, r) {
  n = Le(n, e);
  for (var t = -1, i = n.length, s = !1; ++t < i; ) {
    var a = G(n[t]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++t != i ? s : (i = e == null ? 0 : e.length, !!i && tn(i) && sn(a, i) && (y(e) || Te(e)));
}
function Lt(e, n) {
  return e != null && vt(e, n, Pt);
}
var It = 1, Ct = 2;
function St(e, n) {
  return Q(e) && Ue(n) ? Be(G(e), n) : function(r) {
    var t = vn(r, e);
    return t === void 0 && t === n ? Lt(r, e) : V(n, t, It | Ct);
  };
}
function Nt(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
function Ft(e) {
  return function(n) {
    return Ie(n, e);
  };
}
function Mt(e) {
  return Q(e) ? Nt(G(e)) : Ft(e);
}
function Ke(e) {
  return typeof e == "function" ? e : e == null ? $e : typeof e == "object" ? y(e) ? St(e[0], e[1]) : mt(e) : Mt(e);
}
function xt(e, n) {
  return e && an(e, n, T);
}
function Dt(e, n) {
  return function(r, t) {
    if (r == null)
      return r;
    if (!Ae(r))
      return e(r, t);
    for (var i = r.length, s = n ? i : -1, a = Object(r); (n ? s-- : ++s < i) && t(a[s], s, a) !== !1; )
      ;
    return r;
  };
}
var Rt = Dt(xt);
const k = Rt;
function Gt(e, n, r) {
  for (var t = -1, i = e == null ? 0 : e.length; ++t < i; )
    if (r(n, e[t]))
      return !0;
  return !1;
}
function jt(e) {
  return typeof e == "function" ? e : $e;
}
function w(e, n) {
  var r = y(e) ? ve : k;
  return r(e, jt(n));
}
function Ut(e, n) {
  var r = [];
  return k(e, function(t, i, s) {
    n(t, i, s) && r.push(t);
  }), r;
}
function x(e, n) {
  var r = y(e) ? Se : Ut;
  return r(e, Ke(n));
}
function Bt(e, n) {
  return me(n, function(r) {
    return e[r];
  });
}
function K(e) {
  return e == null ? [] : Bt(e, T(e));
}
function m(e) {
  return e === void 0;
}
function Kt(e, n, r, t, i) {
  return i(e, function(s, a, u) {
    r = t ? (t = !1, s) : n(r, s, a, u);
  }), r;
}
function Yt(e, n, r) {
  var t = y(e) ? In : Kt, i = arguments.length < 3;
  return t(e, Ke(n), r, i, k);
}
var Ht = 1 / 0, Zt = j && 1 / z(new j([, -0]))[1] == Ht ? function(e) {
  return new j(e);
} : hn;
const qt = Zt;
var Xt = 200;
function Qt(e, n, r) {
  var t = -1, i = pn, s = e.length, a = !0, u = [], f = u;
  if (r)
    a = !1, i = Gt;
  else if (s >= Xt) {
    var g = n ? null : qt(e);
    if (g)
      return z(g);
    a = !1, i = Ge, f = new C();
  } else
    f = n ? [] : u;
  e:
    for (; ++t < s; ) {
      var d = e[t], o = n ? n(d) : d;
      if (d = r || d !== 0 ? d : 0, a && o === o) {
        for (var l = f.length; l--; )
          if (f[l] === o)
            continue e;
        n && f.push(o), u.push(d);
      } else
        i(f, o, r) || (f !== u && f.push(o), u.push(d));
    }
  return u;
}
var Wt = un(function(e) {
  return Qt(Ce(e, 1, fn, !0));
});
const Jt = Wt;
var zt = "\0", $ = "\0", pe = "";
class Ye {
  constructor(n = {}) {
    this._isDirected = Object.prototype.hasOwnProperty.call(n, "directed") ? n.directed : !0, this._isMultigraph = Object.prototype.hasOwnProperty.call(n, "multigraph") ? n.multigraph : !1, this._isCompound = Object.prototype.hasOwnProperty.call(n, "compound") ? n.compound : !1, this._label = void 0, this._defaultNodeLabelFn = F(void 0), this._defaultEdgeLabelFn = F(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[$] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  /* === Graph functions ========= */
  isDirected() {
    return this._isDirected;
  }
  isMultigraph() {
    return this._isMultigraph;
  }
  isCompound() {
    return this._isCompound;
  }
  setGraph(n) {
    return this._label = n, this;
  }
  graph() {
    return this._label;
  }
  /* === Node functions ========== */
  setDefaultNodeLabel(n) {
    return re(n) || (n = F(n)), this._defaultNodeLabelFn = n, this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return T(this._nodes);
  }
  sources() {
    var n = this;
    return x(this.nodes(), function(r) {
      return te(n._in[r]);
    });
  }
  sinks() {
    var n = this;
    return x(this.nodes(), function(r) {
      return te(n._out[r]);
    });
  }
  setNodes(n, r) {
    var t = arguments, i = this;
    return w(n, function(s) {
      t.length > 1 ? i.setNode(s, r) : i.setNode(s);
    }), this;
  }
  setNode(n, r) {
    return Object.prototype.hasOwnProperty.call(this._nodes, n) ? (arguments.length > 1 && (this._nodes[n] = r), this) : (this._nodes[n] = arguments.length > 1 ? r : this._defaultNodeLabelFn(n), this._isCompound && (this._parent[n] = $, this._children[n] = {}, this._children[$][n] = !0), this._in[n] = {}, this._preds[n] = {}, this._out[n] = {}, this._sucs[n] = {}, ++this._nodeCount, this);
  }
  node(n) {
    return this._nodes[n];
  }
  hasNode(n) {
    return Object.prototype.hasOwnProperty.call(this._nodes, n);
  }
  removeNode(n) {
    if (Object.prototype.hasOwnProperty.call(this._nodes, n)) {
      var r = (t) => this.removeEdge(this._edgeObjs[t]);
      delete this._nodes[n], this._isCompound && (this._removeFromParentsChildList(n), delete this._parent[n], w(this.children(n), (t) => {
        this.setParent(t);
      }), delete this._children[n]), w(T(this._in[n]), r), delete this._in[n], delete this._preds[n], w(T(this._out[n]), r), delete this._out[n], delete this._sucs[n], --this._nodeCount;
    }
    return this;
  }
  setParent(n, r) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (m(r))
      r = $;
    else {
      r += "";
      for (var t = r; !m(t); t = this.parent(t))
        if (t === n)
          throw new Error("Setting " + r + " as parent of " + n + " would create a cycle");
      this.setNode(r);
    }
    return this.setNode(n), this._removeFromParentsChildList(n), this._parent[n] = r, this._children[r][n] = !0, this;
  }
  _removeFromParentsChildList(n) {
    delete this._children[this._parent[n]][n];
  }
  parent(n) {
    if (this._isCompound) {
      var r = this._parent[n];
      if (r !== $)
        return r;
    }
  }
  children(n) {
    if (m(n) && (n = $), this._isCompound) {
      var r = this._children[n];
      if (r)
        return T(r);
    } else {
      if (n === $)
        return this.nodes();
      if (this.hasNode(n))
        return [];
    }
  }
  predecessors(n) {
    var r = this._preds[n];
    if (r)
      return T(r);
  }
  successors(n) {
    var r = this._sucs[n];
    if (r)
      return T(r);
  }
  neighbors(n) {
    var r = this.predecessors(n);
    if (r)
      return Jt(r, this.successors(n));
  }
  isLeaf(n) {
    var r;
    return this.isDirected() ? r = this.successors(n) : r = this.neighbors(n), r.length === 0;
  }
  filterNodes(n) {
    var r = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    r.setGraph(this.graph());
    var t = this;
    w(this._nodes, function(a, u) {
      n(u) && r.setNode(u, a);
    }), w(this._edgeObjs, function(a) {
      r.hasNode(a.v) && r.hasNode(a.w) && r.setEdge(a, t.edge(a));
    });
    var i = {};
    function s(a) {
      var u = t.parent(a);
      return u === void 0 || r.hasNode(u) ? (i[a] = u, u) : u in i ? i[u] : s(u);
    }
    return this._isCompound && w(r.nodes(), function(a) {
      r.setParent(a, s(a));
    }), r;
  }
  /* === Edge functions ========== */
  setDefaultEdgeLabel(n) {
    return re(n) || (n = F(n)), this._defaultEdgeLabelFn = n, this;
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return K(this._edgeObjs);
  }
  setPath(n, r) {
    var t = this, i = arguments;
    return Yt(n, function(s, a) {
      return i.length > 1 ? t.setEdge(s, a, r) : t.setEdge(s, a), a;
    }), this;
  }
  /*
   * setEdge(v, w, [value, [name]])
   * setEdge({ v, w, [name] }, [value])
   */
  setEdge() {
    var n, r, t, i, s = !1, a = arguments[0];
    typeof a == "object" && a !== null && "v" in a ? (n = a.v, r = a.w, t = a.name, arguments.length === 2 && (i = arguments[1], s = !0)) : (n = a, r = arguments[1], t = arguments[3], arguments.length > 2 && (i = arguments[2], s = !0)), n = "" + n, r = "" + r, m(t) || (t = "" + t);
    var u = P(this._isDirected, n, r, t);
    if (Object.prototype.hasOwnProperty.call(this._edgeLabels, u))
      return s && (this._edgeLabels[u] = i), this;
    if (!m(t) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(n), this.setNode(r), this._edgeLabels[u] = s ? i : this._defaultEdgeLabelFn(n, r, t);
    var f = Vt(this._isDirected, n, r, t);
    return n = f.v, r = f.w, Object.freeze(f), this._edgeObjs[u] = f, be(this._preds[r], n), be(this._sucs[n], r), this._in[r][u] = f, this._out[n][u] = f, this._edgeCount++, this;
  }
  edge(n, r, t) {
    var i = arguments.length === 1 ? Y(this._isDirected, arguments[0]) : P(this._isDirected, n, r, t);
    return this._edgeLabels[i];
  }
  hasEdge(n, r, t) {
    var i = arguments.length === 1 ? Y(this._isDirected, arguments[0]) : P(this._isDirected, n, r, t);
    return Object.prototype.hasOwnProperty.call(this._edgeLabels, i);
  }
  removeEdge(n, r, t) {
    var i = arguments.length === 1 ? Y(this._isDirected, arguments[0]) : P(this._isDirected, n, r, t), s = this._edgeObjs[i];
    return s && (n = s.v, r = s.w, delete this._edgeLabels[i], delete this._edgeObjs[i], ye(this._preds[r], n), ye(this._sucs[n], r), delete this._in[r][i], delete this._out[n][i], this._edgeCount--), this;
  }
  inEdges(n, r) {
    var t = this._in[n];
    if (t) {
      var i = K(t);
      return r ? x(i, function(s) {
        return s.v === r;
      }) : i;
    }
  }
  outEdges(n, r) {
    var t = this._out[n];
    if (t) {
      var i = K(t);
      return r ? x(i, function(s) {
        return s.w === r;
      }) : i;
    }
  }
  nodeEdges(n, r) {
    var t = this.inEdges(n, r);
    if (t)
      return t.concat(this.outEdges(n, r));
  }
}
Ye.prototype._nodeCount = 0;
Ye.prototype._edgeCount = 0;
function be(e, n) {
  e[n] ? e[n]++ : e[n] = 1;
}
function ye(e, n) {
  --e[n] || delete e[n];
}
function P(e, n, r, t) {
  var i = "" + n, s = "" + r;
  if (!e && i > s) {
    var a = i;
    i = s, s = a;
  }
  return i + pe + s + pe + (m(t) ? zt : t);
}
function Vt(e, n, r, t) {
  var i = "" + n, s = "" + r;
  if (!e && i > s) {
    var a = i;
    i = s, s = a;
  }
  var u = { v: i, w: s };
  return t && (u.name = t), u;
}
function Y(e, n) {
  return P(e, n.v, n.w, n.name);
}
export {
  Ye as G,
  X as a,
  Ce as b,
  U as c,
  Ke as d,
  dn as e,
  k as f,
  me as g,
  jt as h,
  m as i,
  xt as j,
  T as k,
  vt as l,
  Le as m,
  Ie as n,
  Lt as o,
  mn as p,
  w as q,
  x as r,
  Yt as s,
  G as t,
  K as v
};
