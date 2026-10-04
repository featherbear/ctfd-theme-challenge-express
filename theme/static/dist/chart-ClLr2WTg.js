var xf = function(r, t) {
  return xf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }, xf(r, t);
};
function k(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  xf(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var LS = /* @__PURE__ */ (function() {
  function r() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return r;
})(), PS = /* @__PURE__ */ (function() {
  function r() {
    this.browser = new LS(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return r;
})(), et = new PS();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (et.wxa = !0, et.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? et.worker = !0 : !et.hasGlobalWindow || "Deno" in window || typeof navigator < "u" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Node.js") > -1 ? (et.node = !0, et.svgSupported = !0) : RS(navigator.userAgent, et);
function RS(r, t) {
  var e = t.browser, n = r.match(/Firefox\/([\d.]+)/), i = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
  n && (e.firefox = !0, e.version = n[1]), i && (e.ie = !0, e.version = i[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11);
  var s = t.domSupported = typeof document < "u";
  if (s) {
    var u = document.documentElement.style;
    t.transform3dSupported = (e.ie && "transition" in u || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in u) && !("OTransition" in u), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
  }
}
var Zh = 12, ES = "sans-serif", Er = Zh + "px " + ES, OS = 20, kS = 100, BS = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function NS(r) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var e = 0; e < r.length; e++) {
    var n = String.fromCharCode(e + 32), i = (r.charCodeAt(e) - OS) / kS;
    t[n] = i;
  }
  return t;
}
var FS = NS(BS), ue = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: /* @__PURE__ */ (function() {
    var r, t;
    return function(e, n) {
      if (!r) {
        var i = ue.createCanvas();
        r = i && i.getContext("2d");
      }
      if (r)
        return t !== n && (t = r.font = n || Er), r.measureText(e);
      e = e || "", n = n || Er;
      var a = /((?:\d+)?\.?\d*)px/.exec(n), o = a && +a[1] || Zh, s = 0;
      if (n.indexOf("mono") >= 0)
        s = o * e.length;
      else
        for (var u = 0; u < e.length; u++) {
          var l = FS[e[u]];
          s += l == null ? o : l * o;
        }
      return { width: s };
    };
  })(),
  loadImage: function(r, t, e) {
    var n = new Image();
    return n.onload = t, n.onerror = e, n.src = r, n;
  },
  getTime: function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }
}, Km = Li([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(r, t) {
  return r["[object " + t + "]"] = !0, r;
}, {}), Qm = Li([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(r, t) {
  return r["[object " + t + "Array]"] = !0, r;
}, {}), qa = Object.prototype.toString, cu = Array.prototype, zS = cu.forEach, HS = cu.filter, Xh = cu.slice, VS = cu.map, Dc = (function() {
}).constructor, co = Dc ? Dc.prototype : null, $h = "__proto__", Zu = 2311, GS = Math.pow(2, 53) - 1;
function Jm() {
  return Zu >= GS && (Zu = 0), Zu++;
}
function qh() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function tt(r) {
  if (r == null || typeof r != "object")
    return r;
  var t = r, e = qa.call(r);
  if (e === "[object Array]") {
    if (!da(r)) {
      t = [];
      for (var n = 0, i = r.length; n < i; n++)
        t[n] = tt(r[n]);
    }
  } else if (Qm[e]) {
    if (!da(r)) {
      var a = r.constructor;
      if (a.from)
        t = a.from(r);
      else {
        t = new a(r.length);
        for (var n = 0, i = r.length; n < i; n++)
          t[n] = r[n];
      }
    }
  } else if (!Km[e] && !da(r) && !pi(r)) {
    t = {};
    for (var o in r)
      r.hasOwnProperty(o) && o !== $h && (t[o] = tt(r[o]));
  }
  return t;
}
function at(r, t, e) {
  if (!Z(t) || !Z(r))
    return e ? tt(t) : r;
  for (var n in t)
    if (t.hasOwnProperty(n) && n !== $h) {
      var i = r[n], a = t[n];
      Z(a) && Z(i) && !z(a) && !z(i) && !pi(a) && !pi(i) && !Ac(a) && !Ac(i) && !da(a) && !da(i) ? at(i, a, e) : (e || !(n in r)) && (r[n] = tt(t[n]));
    }
  return r;
}
function B(r, t) {
  if (Object.assign)
    Object.assign(r, t);
  else
    for (var e in t)
      t.hasOwnProperty(e) && e !== $h && (r[e] = t[e]);
  return r;
}
function US(r, t, e) {
  r = r || {};
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    r[i] = t[i];
  }
  return r;
}
function ut(r, t, e) {
  for (var n = xt(t), i = 0, a = n.length; i < a; i++) {
    var o = n[i];
    r[o] == null && (r[o] = t[o]);
  }
  return r;
}
function ot(r, t) {
  if (r) {
    if (r.indexOf)
      return r.indexOf(t);
    for (var e = 0, n = r.length; e < n; e++)
      if (r[e] === t)
        return e;
  }
  return -1;
}
function WS(r, t) {
  var e = r.prototype;
  function n() {
  }
  n.prototype = t.prototype, r.prototype = new n();
  for (var i in e)
    e.hasOwnProperty(i) && (r.prototype[i] = e[i]);
  r.prototype.constructor = r, r.superClass = t;
}
function Je(r, t, e) {
  if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
      var a = n[i];
      a !== "constructor" && r[a] == null && (r[a] = t[a]);
    }
  else
    ut(r, t);
}
function ne(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function T(r, t, e) {
  if (r && t)
    if (r.forEach && r.forEach === zS)
      r.forEach(t, e);
    else if (r.length === +r.length)
      for (var n = 0, i = r.length; n < i; n++)
        t.call(e, r[n], n, r);
    else
      for (var a in r)
        r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function U(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Kh(r);
  if (r.map && r.map === VS)
    return r.map(t, e);
  for (var n = [], i = 0, a = r.length; i < a; i++)
    n.push(t.call(e, r[i], i, r));
  return n;
}
function Li(r, t, e, n) {
  if (r && t) {
    for (var i = 0, a = r.length; i < a; i++)
      e = t.call(n, e, r[i], i, r);
    return e;
  }
}
function kt(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Kh(r);
  if (r.filter && r.filter === HS)
    return r.filter(t, e);
  for (var n = [], i = 0, a = r.length; i < a; i++)
    t.call(e, r[i], i, r) && n.push(r[i]);
  return n;
}
function YS(r, t, e) {
  if (r && t) {
    for (var n = 0, i = r.length; n < i; n++)
      if (t.call(e, r[n], n, r))
        return r[n];
  }
}
function xt(r) {
  if (!r)
    return [];
  if (Object.keys)
    return Object.keys(r);
  var t = [];
  for (var e in r)
    r.hasOwnProperty(e) && t.push(e);
  return t;
}
function ZS(r, t) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  return function() {
    return r.apply(t, e.concat(Xh.call(arguments)));
  };
}
var K = co && Q(co.bind) ? co.call.bind(co.bind) : ZS;
function ht(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return function() {
    return r.apply(this, t.concat(Xh.call(arguments)));
  };
}
function z(r) {
  return Array.isArray ? Array.isArray(r) : qa.call(r) === "[object Array]";
}
function Q(r) {
  return typeof r == "function";
}
function V(r) {
  return typeof r == "string";
}
function wf(r) {
  return qa.call(r) === "[object String]";
}
function wt(r) {
  return typeof r == "number";
}
function Z(r) {
  var t = typeof r;
  return t === "function" || !!r && t === "object";
}
function Ac(r) {
  return !!Km[qa.call(r)];
}
function ie(r) {
  return !!Qm[qa.call(r)];
}
function pi(r) {
  return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
}
function du(r) {
  return r.colorStops != null;
}
function XS(r) {
  return r.image != null;
}
function Aa(r) {
  return r !== r;
}
function Ds() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  for (var e = 0, n = r.length; e < n; e++)
    if (r[e] != null)
      return r[e];
}
function X(r, t) {
  return r ?? t;
}
function si(r, t, e) {
  return r ?? t ?? e;
}
function Kh(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return Xh.apply(r, t);
}
function Qh(r) {
  if (typeof r == "number")
    return [r, r, r, r];
  var t = r.length;
  return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
}
function qe(r, t) {
  if (!r)
    throw new Error(t);
}
function Ve(r) {
  return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var jm = "__ec_primitive__";
function Tf(r) {
  r[jm] = !0;
}
function da(r) {
  return r[jm];
}
var $S = (function() {
  function r() {
    this.data = {};
  }
  return r.prototype.delete = function(t) {
    var e = this.has(t);
    return e && delete this.data[t], e;
  }, r.prototype.has = function(t) {
    return this.data.hasOwnProperty(t);
  }, r.prototype.get = function(t) {
    return this.data[t];
  }, r.prototype.set = function(t, e) {
    return this.data[t] = e, this;
  }, r.prototype.keys = function() {
    return xt(this.data);
  }, r.prototype.forEach = function(t) {
    var e = this.data;
    for (var n in e)
      e.hasOwnProperty(n) && t(e[n], n);
  }, r;
})(), ty = typeof Map == "function";
function qS() {
  return ty ? /* @__PURE__ */ new Map() : new $S();
}
var KS = (function() {
  function r(t) {
    var e = z(t);
    this.data = qS();
    var n = this;
    t instanceof r ? t.each(i) : t && T(t, i);
    function i(a, o) {
      e ? n.set(a, o) : n.set(o, a);
    }
  }
  return r.prototype.hasKey = function(t) {
    return this.data.has(t);
  }, r.prototype.get = function(t) {
    return this.data.get(t);
  }, r.prototype.set = function(t, e) {
    return this.data.set(t, e), e;
  }, r.prototype.each = function(t, e) {
    this.data.forEach(function(n, i) {
      t.call(e, n, i);
    });
  }, r.prototype.keys = function() {
    var t = this.data.keys();
    return ty ? Array.from(t) : t;
  }, r.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, r;
})();
function Y(r) {
  return new KS(r);
}
function QS(r, t) {
  for (var e = new r.constructor(r.length + t.length), n = 0; n < r.length; n++)
    e[n] = r[n];
  for (var i = r.length, n = 0; n < t.length; n++)
    e[n + i] = t[n];
  return e;
}
function pu(r, t) {
  var e;
  if (Object.create)
    e = Object.create(r);
  else {
    var n = function() {
    };
    n.prototype = r, e = new n();
  }
  return t && B(e, t), e;
}
function ey(r) {
  var t = r.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function ee(r, t) {
  return r.hasOwnProperty(t);
}
function Nt() {
}
var JS = 180 / Math.PI;
function Pi(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function Ic(r, t) {
  return r[0] = t[0], r[1] = t[1], r;
}
function jS(r) {
  return [r[0], r[1]];
}
function Xu(r, t, e) {
  return r[0] = t, r[1] = e, r;
}
function Lc(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function tb(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function eb(r) {
  return Math.sqrt(rb(r));
}
function rb(r) {
  return r[0] * r[0] + r[1] * r[1];
}
function $u(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function nb(r, t) {
  var e = eb(t);
  return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
}
function Cf(r, t) {
  return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
}
var ib = Cf;
function ab(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var ui = ab;
function re(r, t, e) {
  var n = t[0], i = t[1];
  return r[0] = e[0] * n + e[2] * i + e[4], r[1] = e[1] * n + e[3] * i + e[5], r;
}
function ti(r, t, e) {
  return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
}
function ei(r, t, e) {
  return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
}
var kn = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.target = t, this.topTarget = e && e.topTarget;
  }
  return r;
})(), ob = (function() {
  function r(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return r.prototype._dragStart = function(t) {
    for (var e = t.target; e && !e.draggable; )
      e = e.parent || e.__hostTarget;
    e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new kn(e, t), "dragstart", t.event));
  }, r.prototype._drag = function(t) {
    var e = this._draggingTarget;
    if (e) {
      var n = t.offsetX, i = t.offsetY, a = n - this._x, o = i - this._y;
      this._x = n, this._y = i, e.drift(a, o, t), this.handler.dispatchToElement(new kn(e, t), "drag", t.event);
      var s = this.handler.findHover(n, i, e).target, u = this._dropTarget;
      this._dropTarget = s, e !== s && (u && s !== u && this.handler.dispatchToElement(new kn(u, t), "dragleave", t.event), s && s !== u && this.handler.dispatchToElement(new kn(s, t), "dragenter", t.event));
    }
  }, r.prototype._dragEnd = function(t) {
    var e = this._draggingTarget;
    e && (e.dragging = !1), this.handler.dispatchToElement(new kn(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new kn(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, r;
})(), Te = (function() {
  function r(t) {
    t && (this._$eventProcessor = t);
  }
  return r.prototype.on = function(t, e, n, i) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof e == "function" && (i = n, n = e, e = null), !n || !t)
      return this;
    var o = this._$eventProcessor;
    e != null && o && o.normalizeQuery && (e = o.normalizeQuery(e)), a[t] || (a[t] = []);
    for (var s = 0; s < a[t].length; s++)
      if (a[t][s].h === n)
        return this;
    var u = {
      h: n,
      query: e,
      ctx: i || this,
      callAtLast: n.zrEventfulCallAtLast
    }, l = a[t].length - 1, f = a[t][l];
    return f && f.callAtLast ? a[t].splice(l, 0, u) : a[t].push(u), this;
  }, r.prototype.isSilent = function(t) {
    var e = this._$handlers;
    return !e || !e[t] || !e[t].length;
  }, r.prototype.off = function(t, e) {
    var n = this._$handlers;
    if (!n)
      return this;
    if (!t)
      return this._$handlers = {}, this;
    if (e) {
      if (n[t]) {
        for (var i = [], a = 0, o = n[t].length; a < o; a++)
          n[t][a].h !== e && i.push(n[t][a]);
        n[t] = i;
      }
      n[t] && n[t].length === 0 && delete n[t];
    } else
      delete n[t];
    return this;
  }, r.prototype.trigger = function(t) {
    for (var e = [], n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[t], a = this._$eventProcessor;
    if (i)
      for (var o = e.length, s = i.length, u = 0; u < s; u++) {
        var l = i[u];
        if (!(a && a.filter && l.query != null && !a.filter(t, l.query)))
          switch (o) {
            case 0:
              l.h.call(l.ctx);
              break;
            case 1:
              l.h.call(l.ctx, e[0]);
              break;
            case 2:
              l.h.call(l.ctx, e[0], e[1]);
              break;
            default:
              l.h.apply(l.ctx, e);
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r.prototype.triggerWithContext = function(t) {
    for (var e = [], n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[t], a = this._$eventProcessor;
    if (i)
      for (var o = e.length, s = e[o - 1], u = i.length, l = 0; l < u; l++) {
        var f = i[l];
        if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
          switch (o) {
            case 0:
              f.h.call(s);
              break;
            case 1:
              f.h.call(s, e[0]);
              break;
            case 2:
              f.h.call(s, e[0], e[1]);
              break;
            default:
              f.h.apply(s, e.slice(1, o - 1));
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r;
})(), sb = Math.log(2);
function Mf(r, t, e, n, i, a) {
  var o = n + "-" + i, s = r.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~i) / sb);
    return r[e][u];
  }
  for (var l = n | 1 << e, f = e + 1; n & 1 << f; )
    f++;
  for (var h = 0, v = 0, c = 0; v < s; v++) {
    var d = 1 << v;
    d & i || (h += (c % 2 ? -1 : 1) * r[e][v] * Mf(r, t - 1, f, l, i | d, a), c++);
  }
  return a[o] = h, h;
}
function Pc(r, t) {
  var e = [
    [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
    [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
    [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
    [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
    [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
    [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
    [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
    [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]
  ], n = {}, i = Mf(e, 8, 0, 0, 0, n);
  if (i !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * Mf(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * t[o];
    return function(u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var As = "___zrEVENTSAVED", qu = [];
function ub(r, t, e, n, i) {
  return Df(qu, t, n, i, !0) && Df(r, e, qu[0], qu[1]);
}
function lb(r, t) {
  r && e(r), t && e(t);
  function e(n) {
    var i = n[As];
    i && (i.clearMarkers && i.clearMarkers(), delete n[As]);
  }
}
function Df(r, t, e, n, i) {
  if (t.getBoundingClientRect && et.domSupported && !ry(t)) {
    var a = t[As] || (t[As] = {}), o = fb(t, a), s = hb(o, a, i);
    if (s)
      return s(r, e, n), !0;
  }
  return !1;
}
function fb(r, t) {
  var e = t.markers;
  if (e)
    return e;
  e = t.markers = [];
  for (var n = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"), s = o.style, u = a % 2, l = (a >> 1) % 2;
    s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      n[u] + ":0",
      i[l] + ":0",
      n[1 - u] + ":auto",
      i[1 - l] + ":auto",
      ""
    ].join("!important;"), r.appendChild(o), e.push(o);
  }
  return t.clearMarkers = function() {
    T(e, function(f) {
      f.parentNode && f.parentNode.removeChild(f);
    });
  }, e;
}
function hb(r, t, e) {
  for (var n = e ? "invTrans" : "trans", i = t[n], a = t.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = r[l].getBoundingClientRect(), h = 2 * l, v = f.left, c = f.top;
    o.push(v, c), u = u && a && v === a[h] && c === a[h + 1], s.push(r[l].offsetLeft, r[l].offsetTop);
  }
  return u && i ? i : (t.srcCoords = o, t[n] = e ? Pc(s, o) : Pc(o, s));
}
function ry(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var vb = /([&<>"'])/g, cb = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function qt(r) {
  return r == null ? "" : (r + "").replace(vb, function(t, e) {
    return cb[e];
  });
}
var db = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ku = [], pb = et.browser.firefox && +et.browser.version.split(".")[0] < 39;
function Af(r, t, e, n) {
  return e = e || {}, n ? Rc(r, t, e) : pb && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : Rc(r, t, e), e;
}
function Rc(r, t, e) {
  if (et.domSupported && r.getBoundingClientRect) {
    var n = t.clientX, i = t.clientY;
    if (ry(r)) {
      var a = r.getBoundingClientRect();
      e.zrX = n - a.left, e.zrY = i - a.top;
      return;
    } else if (Df(Ku, r, n, i)) {
      e.zrX = Ku[0], e.zrY = Ku[1];
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function Jh(r) {
  return r || window.event;
}
function de(r, t, e) {
  if (t = Jh(t), t.zrX != null)
    return t;
  var n = t.type, i = n && n.indexOf("touch") >= 0;
  if (i) {
    var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && Af(r, o, t, e);
  } else {
    Af(r, t, t, e);
    var a = gb(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && db.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function gb(r) {
  var t = r.wheelDelta;
  if (t)
    return t;
  var e = r.deltaX, n = r.deltaY;
  if (e == null || n == null)
    return t;
  var i = Math.abs(n !== 0 ? n : e), a = n > 0 ? -1 : n < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * i * a;
}
function If(r, t, e, n) {
  r.addEventListener(t, e, n);
}
function mb(r, t, e, n) {
  r.removeEventListener(t, e, n);
}
var gi = function(r) {
  r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
};
function Ec(r) {
  return r.which === 2 || r.which === 3;
}
var yb = (function() {
  function r() {
    this._track = [];
  }
  return r.prototype.recognize = function(t, e, n) {
    return this._doTrack(t, e, n), this._recognize(t);
  }, r.prototype.clear = function() {
    return this._track.length = 0, this;
  }, r.prototype._doTrack = function(t, e, n) {
    var i = t.touches;
    if (i) {
      for (var a = {
        points: [],
        touches: [],
        target: e,
        event: t
      }, o = 0, s = i.length; o < s; o++) {
        var u = i[o], l = Af(n, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, r.prototype._recognize = function(t) {
    for (var e in Qu)
      if (Qu.hasOwnProperty(e)) {
        var n = Qu[e](this._track, t);
        if (n)
          return n;
      }
  }, r;
})();
function Oc(r) {
  var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function _b(r) {
  return [
    (r[0][0] + r[1][0]) / 2,
    (r[0][1] + r[1][1]) / 2
  ];
}
var Qu = {
  pinch: function(r, t) {
    var e = r.length;
    if (e) {
      var n = (r[e - 1] || {}).points, i = (r[e - 2] || {}).points || n;
      if (i && i.length > 1 && n && n.length > 1) {
        var a = Oc(n) / Oc(i);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = _b(n);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: r[0].target,
          event: t
        };
      }
    }
  }
};
function te() {
  return [1, 0, 0, 1, 0, 0];
}
function Ka(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
}
function gu(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function pa(r, t, e) {
  var n = t[0] * e[0] + t[2] * e[1], i = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], u = t[1] * e[4] + t[3] * e[5] + t[5];
  return r[0] = n, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = u, r;
}
function Lf(r, t, e) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
}
function jh(r, t, e, n) {
  n === void 0 && (n = [0, 0]);
  var i = t[0], a = t[2], o = t[4], s = t[1], u = t[3], l = t[5], f = Math.sin(e), h = Math.cos(e);
  return r[0] = i * h + s * f, r[1] = -i * f + s * h, r[2] = a * h + u * f, r[3] = -a * f + h * u, r[4] = h * (o - n[0]) + f * (l - n[1]) + n[0], r[5] = h * (l - n[1]) - f * (o - n[0]) + n[1], r;
}
function Sb(r, t, e) {
  var n = e[0], i = e[1];
  return r[0] = t[0] * n, r[1] = t[1] * i, r[2] = t[2] * n, r[3] = t[3] * i, r[4] = t[4] * n, r[5] = t[5] * i, r;
}
function Qa(r, t) {
  var e = t[0], n = t[2], i = t[4], a = t[1], o = t[3], s = t[5], u = e * o - a * n;
  return u ? (u = 1 / u, r[0] = o * u, r[1] = -a * u, r[2] = -n * u, r[3] = e * u, r[4] = (n * s - o * i) * u, r[5] = (a * i - e * s) * u, r) : null;
}
var mt = (function() {
  function r(t, e) {
    this.x = t || 0, this.y = e || 0;
  }
  return r.prototype.copy = function(t) {
    return this.x = t.x, this.y = t.y, this;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y);
  }, r.prototype.set = function(t, e) {
    return this.x = t, this.y = e, this;
  }, r.prototype.equal = function(t) {
    return t.x === this.x && t.y === this.y;
  }, r.prototype.add = function(t) {
    return this.x += t.x, this.y += t.y, this;
  }, r.prototype.scale = function(t) {
    this.x *= t, this.y *= t;
  }, r.prototype.scaleAndAdd = function(t, e) {
    this.x += t.x * e, this.y += t.y * e;
  }, r.prototype.sub = function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }, r.prototype.dot = function(t) {
    return this.x * t.x + this.y * t.y;
  }, r.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, r.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, r.prototype.normalize = function() {
    var t = this.len();
    return this.x /= t, this.y /= t, this;
  }, r.prototype.distance = function(t) {
    var e = this.x - t.x, n = this.y - t.y;
    return Math.sqrt(e * e + n * n);
  }, r.prototype.distanceSquare = function(t) {
    var e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }, r.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, r.prototype.transform = function(t) {
    if (t) {
      var e = this.x, n = this.y;
      return this.x = t[0] * e + t[2] * n + t[4], this.y = t[1] * e + t[3] * n + t[5], this;
    }
  }, r.prototype.toArray = function(t) {
    return t[0] = this.x, t[1] = this.y, t;
  }, r.prototype.fromArray = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.set = function(t, e, n) {
    t.x = e, t.y = n;
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y;
  }, r.len = function(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }, r.lenSquare = function(t) {
    return t.x * t.x + t.y * t.y;
  }, r.dot = function(t, e) {
    return t.x * e.x + t.y * e.y;
  }, r.add = function(t, e, n) {
    t.x = e.x + n.x, t.y = e.y + n.y;
  }, r.sub = function(t, e, n) {
    t.x = e.x - n.x, t.y = e.y - n.y;
  }, r.scale = function(t, e, n) {
    t.x = e.x * n, t.y = e.y * n;
  }, r.scaleAndAdd = function(t, e, n, i) {
    t.x = e.x + n.x * i, t.y = e.y + n.y * i;
  }, r.lerp = function(t, e, n, i) {
    var a = 1 - i;
    t.x = a * e.x + i * n.x, t.y = a * e.y + i * n.y;
  }, r;
})(), gn = Math.min, ri = Math.max, Pf = Math.abs, kc = ["x", "y"], bb = ["width", "height"], Gr = new mt(), Ur = new mt(), Wr = new mt(), Yr = new mt(), se = iy(), sa = se.minTv, Rf = se.maxTv, ga = [0, 0], j = (function() {
  function r(t, e, n, i) {
    Ju(this, t, e, n, i);
  }
  return r.set = function(t, e, n, i, a) {
    return i < 0 && (e = e + i, i = -i), a < 0 && (n = n + a, a = -a), t.x = e, t.y = n, t.width = i, t.height = a, t;
  }, r.prototype.union = function(t) {
    var e = gn(t.x, this.x), n = gn(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = ri(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = ri(t.y + t.height, this.y + this.height) - n : this.height = t.height, this.x = e, this.y = n;
  }, r.prototype.applyTransform = function(t) {
    r.applyTransform(this, this, t);
  }, r.prototype.calculateTransform = function(t) {
    return xb(te(), this, t);
  }, r.prototype.intersect = function(t, e, n) {
    return r.intersect(this, t, e, n);
  }, r.intersect = function(t, e, n, i) {
    n && mt.set(n, 0, 0);
    var a = i && i.outIntersectRect || null, o = i && i.clamp;
    if (a && (a.x = a.y = a.width = a.height = NaN), !t || !e)
      return !1;
    t instanceof r || (t = Ju(Tb, t.x, t.y, t.width, t.height)), e instanceof r || (e = Ju(Cb, e.x, e.y, e.width, e.height));
    var s = !!n;
    se.reset(i, s);
    var u = se.touchThreshold, l = t.x + u, f = t.x + t.width - u, h = t.y + u, v = t.y + t.height - u, c = e.x + u, d = e.x + e.width - u, p = e.y + u, m = e.y + e.height - u;
    if (l > f || h > v || c > d || p > m)
      return !1;
    var g = !(f < c || d < l || v < p || m < h);
    return (s || a) && (ga[0] = 1 / 0, ga[1] = 0, Bc(l, f, c, d, 0, s, a, o), Bc(h, v, p, m, 1, s, a, o), s && mt.copy(n, g ? se.useDir ? se.dirMinTv : sa : Rf)), g;
  }, r.contain = function(t, e, n) {
    return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height;
  }, r.prototype.contain = function(t, e) {
    return r.contain(this, t, e);
  }, r.prototype.clone = function() {
    return new r(this.x, this.y, this.width, this.height);
  }, r.prototype.copy = function(t) {
    Ia(this, t);
  }, r.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, r.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, r.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, r.create = function(t) {
    return new r(t ? t.x : 0, t ? t.y : 0, t ? t.width : 0, t ? t.height : 0);
  }, r.copy = function(t, e) {
    return t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height, t;
  }, r.applyTransform = function(t, e, n) {
    if (!n) {
      t !== e && Ia(t, e);
      return;
    }
    if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
      var i = n[0], a = n[3], o = n[4], s = n[5];
      t.x = e.x * i + o, t.y = e.y * a + s, t.width = e.width * i, t.height = e.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
      return;
    }
    Gr.x = Wr.x = e.x, Gr.y = Yr.y = e.y, Ur.x = Yr.x = e.x + e.width, Ur.y = Wr.y = e.y + e.height, Gr.transform(n), Yr.transform(n), Ur.transform(n), Wr.transform(n), t.x = gn(Gr.x, Ur.x, Wr.x, Yr.x), t.y = gn(Gr.y, Ur.y, Wr.y, Yr.y);
    var u = ri(Gr.x, Ur.x, Wr.x, Yr.x), l = ri(Gr.y, Ur.y, Wr.y, Yr.y);
    t.width = u - t.x, t.height = l - t.y;
  }, r.calculateTransform = function(t, e, n) {
    var i = n.width / e.width, a = n.height / e.height;
    return t = Ka(t || []), Lf(t, t, Xu(ju, -e.x, -e.y)), Sb(t, t, Xu(ju, i, a)), Lf(t, t, Xu(ju, n.x, n.y)), t;
  }, r;
})(), mu = j.create, Ju = j.set, Ia = j.copy, xb = j.calculateTransform, ny = j.applyTransform, wb = j.contain, Tb = new j(0, 0, 0, 0), Cb = new j(0, 0, 0, 0), ju = [];
function Bc(r, t, e, n, i, a, o, s) {
  var u = Pf(t - e), l = Pf(n - r), f = gn(u, l), h = kc[i], v = kc[1 - i], c = bb[i];
  t < e || n < r ? u < l ? (a && (Rf[h] = -u), s && (o[h] = t, o[c] = 0)) : (a && (Rf[h] = l), s && (o[h] = r, o[c] = 0)) : (o && (o[h] = ri(r, e), o[c] = gn(t, n) - o[h]), a && (f < ga[0] || se.useDir) && (ga[0] = gn(f, ga[0]), (u < l || !se.bidirectional) && (sa[h] = u, sa[v] = 0, se.useDir && se.calcDirMTV()), (u >= l || !se.bidirectional) && (sa[h] = -l, sa[v] = 0, se.useDir && se.calcDirMTV())));
}
function iy() {
  var r = 0, t = new mt(), e = new mt(), n = {
    minTv: new mt(),
    maxTv: new mt(),
    useDir: !1,
    dirMinTv: new mt(),
    touchThreshold: 0,
    bidirectional: !0,
    negativeSize: !1,
    reset: function(a, o) {
      n.touchThreshold = 0, a && a.touchThreshold != null && (n.touchThreshold = ri(0, a.touchThreshold)), n.negativeSize = !1, o && (n.minTv.set(1 / 0, 1 / 0), n.maxTv.set(0, 0), n.useDir = !1, a && a.direction != null && (n.useDir = !0, n.dirMinTv.copy(n.minTv), e.copy(n.minTv), r = a.direction, n.bidirectional = a.bidirectional == null || !!a.bidirectional, n.bidirectional || t.set(Math.cos(r), Math.sin(r))));
    },
    calcDirMTV: function() {
      var a = n.minTv, o = n.dirMinTv, s = a.y * a.y + a.x * a.x, u = Math.sin(r), l = Math.cos(r), f = u * a.y + l * a.x;
      if (i(f)) {
        i(a.x) && i(a.y) && o.set(0, 0);
        return;
      }
      if (e.x = s * l / f, e.y = s * u / f, i(e.x) && i(e.y)) {
        o.set(0, 0);
        return;
      }
      (n.bidirectional || t.dot(e) > 0) && e.len() < o.len() && o.copy(e);
    }
  };
  function i(a) {
    return Pf(a) < 1e-10;
  }
  return n;
}
var ay = "silent";
function Mb(r, t, e) {
  return {
    type: r,
    event: e,
    target: t.target,
    topTarget: t.topTarget,
    cancelBubble: !1,
    offsetX: e.zrX,
    offsetY: e.zrY,
    gestureEvent: e.gestureEvent,
    pinchX: e.pinchX,
    pinchY: e.pinchY,
    pinchScale: e.pinchScale,
    wheelDelta: e.zrDelta,
    zrByTouch: e.zrByTouch,
    which: e.which,
    stop: Db
  };
}
function Db() {
  gi(this.event);
}
var Ab = (function(r) {
  k(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.handler = null, e;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
})(Te), Bi = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.x = t, this.y = e;
  }
  return r;
})(), Ib = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], tl = new j(0, 0, 0, 0), oy = (function(r) {
  k(t, r);
  function t(e, n, i, a, o) {
    var s = r.call(this) || this;
    return s._hovered = new Bi(0, 0), s.storage = e, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new Ab(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new ob(s), s;
  }
  return t.prototype.setHandlerProxy = function(e) {
    this.proxy && this.proxy.dispose(), e && (T(Ib, function(n) {
      e.on && e.on(n, this[n], this);
    }, this), e.handler = this), this.proxy = e;
  }, t.prototype.mousemove = function(e) {
    var n = e.zrX, i = e.zrY, a = sy(this, n, i), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new Bi(n, i) : this.findHover(n, i), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(u, "mousemove", e), l && l !== s && this.dispatchToElement(u, "mouseover", e);
  }, t.prototype.mouseout = function(e) {
    var n = e.zrEventControl;
    n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), n !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: e });
  }, t.prototype.resize = function() {
    this._hovered = new Bi(0, 0);
  }, t.prototype.dispatch = function(e, n) {
    var i = this[e];
    i && i.call(this, n);
  }, t.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, t.prototype.setCursorStyle = function(e) {
    var n = this.proxy;
    n.setCursor && n.setCursor(e);
  }, t.prototype.dispatchToElement = function(e, n, i) {
    e = e || {};
    var a = e.target;
    if (!(a && a.silent)) {
      for (var o = "on" + n, s = Mb(n, e, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(n, s);
      }));
    }
  }, t.prototype.findHover = function(e, n, i) {
    var a = this.storage.getDisplayList(), o = new Bi(e, n);
    if (Nc(a, o, e, n, i), this._pointerSize && !o.target) {
      for (var s = [], u = this._pointerSize, l = u / 2, f = new j(e - l, n - l, u, u), h = a.length - 1; h >= 0; h--) {
        var v = a[h];
        v !== i && !v.ignore && !v.ignoreCoarsePointer && (!v.parent || !v.parent.ignoreCoarsePointer) && (tl.copy(v.getBoundingRect()), v.transform && tl.applyTransform(v.transform), tl.intersect(f) && s.push(v));
      }
      if (s.length)
        for (var c = 4, d = Math.PI / 12, p = Math.PI * 2, m = 0; m < l; m += c)
          for (var g = 0; g < p; g += d) {
            var y = e + m * Math.cos(g), _ = n + m * Math.sin(g);
            if (Nc(s, o, y, _, i), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(e, n) {
    this._gestureMgr || (this._gestureMgr = new yb());
    var i = this._gestureMgr;
    n === "start" && i.clear();
    var a = i.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
    if (n === "end" && i.clear(), a) {
      var o = a.type;
      e.gestureEvent = o;
      var s = new Bi();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
})(Te);
T(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
  oy.prototype[r] = function(t) {
    var e = t.zrX, n = t.zrY, i = sy(this, e, n), a, o;
    if ((r !== "mouseup" || !i) && (a = this.findHover(e, n), o = a.target), r === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (r === "mouseup")
      this._upEl = o;
    else if (r === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || ib(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, r, t);
  };
});
function Lb(r, t, e) {
  if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
    for (var n = r, i = void 0, a = !1; n; ) {
      if (n.ignoreClip && (a = !0), !a) {
        var o = n.getClipPath();
        if (o && !o.contain(t, e))
          return !1;
      }
      n.silent && (i = !0);
      var s = n.__hostTarget;
      n = s ? n.ignoreHostSilent ? null : s : n.parent;
    }
    return i ? ay : !0;
  }
  return !1;
}
function Nc(r, t, e, n, i) {
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a], s = void 0;
    if (o !== i && !o.ignore && (s = Lb(o, e, n)) && (!t.topTarget && (t.topTarget = o), s !== ay)) {
      t.target = o;
      break;
    }
  }
}
function sy(r, t, e) {
  var n = r.painter;
  return t < 0 || t > n.getWidth() || e < 0 || e > n.getHeight();
}
var uy = 32, Ni = 7;
function Pb(r) {
  for (var t = 0; r >= uy; )
    t |= r & 1, r >>= 1;
  return r + t;
}
function Fc(r, t, e, n) {
  var i = t + 1;
  if (i === e)
    return 1;
  if (n(r[i++], r[t]) < 0) {
    for (; i < e && n(r[i], r[i - 1]) < 0; )
      i++;
    Rb(r, t, i);
  } else
    for (; i < e && n(r[i], r[i - 1]) >= 0; )
      i++;
  return i - t;
}
function Rb(r, t, e) {
  for (e--; t < e; ) {
    var n = r[t];
    r[t++] = r[e], r[e--] = n;
  }
}
function zc(r, t, e, n, i) {
  for (n === t && n++; n < e; n++) {
    for (var a = r[n], o = t, s = n, u; o < s; )
      u = o + s >>> 1, i(a, r[u]) < 0 ? s = u : o = u + 1;
    var l = n - o;
    switch (l) {
      case 3:
        r[o + 3] = r[o + 2];
      case 2:
        r[o + 2] = r[o + 1];
      case 1:
        r[o + 1] = r[o];
        break;
      default:
        for (; l > 0; )
          r[o + l] = r[o + l - 1], l--;
    }
    r[o] = a;
  }
}
function el(r, t, e, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(r, t[e + i]) > 0) {
    for (s = n - i; u < s && a(r, t[e + i + u]) > 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  } else {
    for (s = i + 1; u < s && a(r, t[e + i - u]) <= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(r, t[e + f]) > 0 ? o = f + 1 : u = f;
  }
  return u;
}
function rl(r, t, e, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(r, t[e + i]) < 0) {
    for (s = i + 1; u < s && a(r, t[e + i - u]) < 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  } else {
    for (s = n - i; u < s && a(r, t[e + i + u]) >= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(r, t[e + f]) < 0 ? u = f : o = f + 1;
  }
  return u;
}
function Eb(r, t) {
  var e = Ni, n, i, a = 0, o = [];
  n = [], i = [];
  function s(c, d) {
    n[a] = c, i[a] = d, a += 1;
  }
  function u() {
    for (; a > 1; ) {
      var c = a - 2;
      if (c >= 1 && i[c - 1] <= i[c] + i[c + 1] || c >= 2 && i[c - 2] <= i[c] + i[c - 1])
        i[c - 1] < i[c + 1] && c--;
      else if (i[c] > i[c + 1])
        break;
      f(c);
    }
  }
  function l() {
    for (; a > 1; ) {
      var c = a - 2;
      c > 0 && i[c - 1] < i[c + 1] && c--, f(c);
    }
  }
  function f(c) {
    var d = n[c], p = i[c], m = n[c + 1], g = i[c + 1];
    i[c] = p + g, c === a - 3 && (n[c + 1] = n[c + 2], i[c + 1] = i[c + 2]), a--;
    var y = rl(r[m], r, d, p, 0, t);
    d += y, p -= y, p !== 0 && (g = el(r[d + p - 1], r, m, g, g - 1, t), g !== 0 && (p <= g ? h(d, p, m, g) : v(d, p, m, g)));
  }
  function h(c, d, p, m) {
    var g = 0;
    for (g = 0; g < d; g++)
      o[g] = r[c + g];
    var y = 0, _ = p, S = c;
    if (r[S++] = r[_++], --m === 0) {
      for (g = 0; g < d; g++)
        r[S + g] = o[y + g];
      return;
    }
    if (d === 1) {
      for (g = 0; g < m; g++)
        r[S + g] = r[_ + g];
      r[S + m] = o[y];
      return;
    }
    for (var b = e, x, w, D; ; ) {
      x = 0, w = 0, D = !1;
      do
        if (t(r[_], o[y]) < 0) {
          if (r[S++] = r[_++], w++, x = 0, --m === 0) {
            D = !0;
            break;
          }
        } else if (r[S++] = o[y++], x++, w = 0, --d === 1) {
          D = !0;
          break;
        }
      while ((x | w) < b);
      if (D)
        break;
      do {
        if (x = rl(r[_], o, y, d, 0, t), x !== 0) {
          for (g = 0; g < x; g++)
            r[S + g] = o[y + g];
          if (S += x, y += x, d -= x, d <= 1) {
            D = !0;
            break;
          }
        }
        if (r[S++] = r[_++], --m === 0) {
          D = !0;
          break;
        }
        if (w = el(o[y], r, _, m, 0, t), w !== 0) {
          for (g = 0; g < w; g++)
            r[S + g] = r[_ + g];
          if (S += w, _ += w, m -= w, m === 0) {
            D = !0;
            break;
          }
        }
        if (r[S++] = o[y++], --d === 1) {
          D = !0;
          break;
        }
        b--;
      } while (x >= Ni || w >= Ni);
      if (D)
        break;
      b < 0 && (b = 0), b += 2;
    }
    if (e = b, e < 1 && (e = 1), d === 1) {
      for (g = 0; g < m; g++)
        r[S + g] = r[_ + g];
      r[S + m] = o[y];
    } else {
      if (d === 0)
        throw new Error();
      for (g = 0; g < d; g++)
        r[S + g] = o[y + g];
    }
  }
  function v(c, d, p, m) {
    var g = 0;
    for (g = 0; g < m; g++)
      o[g] = r[p + g];
    var y = c + d - 1, _ = m - 1, S = p + m - 1, b = 0, x = 0;
    if (r[S--] = r[y--], --d === 0) {
      for (b = S - (m - 1), g = 0; g < m; g++)
        r[b + g] = o[g];
      return;
    }
    if (m === 1) {
      for (S -= d, y -= d, x = S + 1, b = y + 1, g = d - 1; g >= 0; g--)
        r[x + g] = r[b + g];
      r[S] = o[_];
      return;
    }
    for (var w = e; ; ) {
      var D = 0, C = 0, M = !1;
      do
        if (t(o[_], r[y]) < 0) {
          if (r[S--] = r[y--], D++, C = 0, --d === 0) {
            M = !0;
            break;
          }
        } else if (r[S--] = o[_--], C++, D = 0, --m === 1) {
          M = !0;
          break;
        }
      while ((D | C) < w);
      if (M)
        break;
      do {
        if (D = d - rl(o[_], r, c, d, d - 1, t), D !== 0) {
          for (S -= D, y -= D, d -= D, x = S + 1, b = y + 1, g = D - 1; g >= 0; g--)
            r[x + g] = r[b + g];
          if (d === 0) {
            M = !0;
            break;
          }
        }
        if (r[S--] = o[_--], --m === 1) {
          M = !0;
          break;
        }
        if (C = m - el(r[y], o, 0, m, m - 1, t), C !== 0) {
          for (S -= C, _ -= C, m -= C, x = S + 1, b = _ + 1, g = 0; g < C; g++)
            r[x + g] = o[b + g];
          if (m <= 1) {
            M = !0;
            break;
          }
        }
        if (r[S--] = r[y--], --d === 0) {
          M = !0;
          break;
        }
        w--;
      } while (D >= Ni || C >= Ni);
      if (M)
        break;
      w < 0 && (w = 0), w += 2;
    }
    if (e = w, e < 1 && (e = 1), m === 1) {
      for (S -= d, y -= d, x = S + 1, b = y + 1, g = d - 1; g >= 0; g--)
        r[x + g] = r[b + g];
      r[S] = o[_];
    } else {
      if (m === 0)
        throw new Error();
      for (b = S - (m - 1), g = 0; g < m; g++)
        r[b + g] = o[g];
    }
  }
  return {
    mergeRuns: u,
    forceMergeRuns: l,
    pushRun: s
  };
}
function as(r, t, e, n) {
  e || (e = 0), n || (n = r.length);
  var i = n - e;
  if (!(i < 2)) {
    var a = 0;
    if (i < uy) {
      a = Fc(r, e, n, t), zc(r, e, n, e + a, t);
      return;
    }
    var o = Eb(r, t), s = Pb(i);
    do {
      if (a = Fc(r, e, n, t), a < s) {
        var u = i;
        u > s && (u = s), zc(r, e, e + u, e + a, t), a = u;
      }
      o.pushRun(e, a), o.mergeRuns(), i -= a, e += a;
    } while (i !== 0);
    o.forceMergeRuns();
  }
}
var jt = 1, ua = 2, Jn = 4, Hc = !1;
function nl() {
  Hc || (Hc = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function Vc(r, t) {
  return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
}
var Ob = (function() {
  function r() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Vc;
  }
  return r.prototype.traverse = function(t, e) {
    for (var n = 0; n < this._roots.length; n++)
      this._roots[n].traverse(t, e);
  }, r.prototype.getDisplayList = function(t, e) {
    e = e || !1;
    var n = this._displayList;
    return (t || !n.length) && this.updateDisplayList(e), n;
  }, r.prototype.updateDisplayList = function(t) {
    this._displayListLen = 0;
    for (var e = this._roots, n = this._displayList, i = 0, a = e.length; i < a; i++)
      this._updateAndAddDisplayable(e[i], null, t);
    n.length = this._displayListLen, as(n, Vc);
  }, r.prototype._updateAndAddDisplayable = function(t, e, n) {
    if (!(t.ignore && !n)) {
      t.beforeUpdate(), t.update(), t.afterUpdate();
      var i = t.getClipPath(), a = e && e.length, o = 0, s = t.__clipPaths;
      if (!t.ignoreClip && (a || i)) {
        if (s || (s = t.__clipPaths = []), a)
          for (var u = 0; u < e.length; u++)
            s[o++] = e[u];
        for (var l = i, f = t; l; )
          l.parent = f, l.updateTransform(), s[o++] = l, f = l, l = l.getClipPath();
      }
      if (s && (s.length = o), t.childrenRef) {
        for (var h = t.childrenRef(), v = 0; v < h.length; v++) {
          var c = h[v];
          t.__dirty && (c.__dirty |= jt), this._updateAndAddDisplayable(c, s, n);
        }
        t.__dirty = 0;
      } else {
        var d = t;
        isNaN(d.z) && (nl(), d.z = 0), isNaN(d.z2) && (nl(), d.z2 = 0), isNaN(d.zlevel) && (nl(), d.zlevel = 0), this._displayList[this._displayListLen++] = d;
      }
      var p = t.getDecalElement && t.getDecalElement();
      p && this._updateAndAddDisplayable(p, s, n);
      var m = t.getTextGuideLine();
      m && this._updateAndAddDisplayable(m, s, n);
      var g = t.getTextContent();
      g && this._updateAndAddDisplayable(g, s, n);
    }
  }, r.prototype.addRoot = function(t) {
    t.__zr && t.__zr.storage === this || this._roots.push(t);
  }, r.prototype.delRoot = function(t) {
    if (t instanceof Array) {
      for (var e = 0, n = t.length; e < n; e++)
        this.delRoot(t[e]);
      return;
    }
    var i = ot(this._roots, t);
    i >= 0 && this._roots.splice(i, 1);
  }, r.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, r.prototype.getRoots = function() {
    return this._roots;
  }, r.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, r;
})(), Is;
Is = et.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
  return setTimeout(r, 16);
};
var ma = {
  linear: function(r) {
    return r;
  },
  quadraticIn: function(r) {
    return r * r;
  },
  quadraticOut: function(r) {
    return r * (2 - r);
  },
  quadraticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1);
  },
  cubicIn: function(r) {
    return r * r * r;
  },
  cubicOut: function(r) {
    return --r * r * r + 1;
  },
  cubicInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2);
  },
  quarticIn: function(r) {
    return r * r * r * r;
  },
  quarticOut: function(r) {
    return 1 - --r * r * r * r;
  },
  quarticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r : -0.5 * ((r -= 2) * r * r * r - 2);
  },
  quinticIn: function(r) {
    return r * r * r * r * r;
  },
  quinticOut: function(r) {
    return --r * r * r * r * r + 1;
  },
  quinticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r * r : 0.5 * ((r -= 2) * r * r * r * r + 2);
  },
  sinusoidalIn: function(r) {
    return 1 - Math.cos(r * Math.PI / 2);
  },
  sinusoidalOut: function(r) {
    return Math.sin(r * Math.PI / 2);
  },
  sinusoidalInOut: function(r) {
    return 0.5 * (1 - Math.cos(Math.PI * r));
  },
  exponentialIn: function(r) {
    return r === 0 ? 0 : Math.pow(1024, r - 1);
  },
  exponentialOut: function(r) {
    return r === 1 ? 1 : 1 - Math.pow(2, -10 * r);
  },
  exponentialInOut: function(r) {
    return r === 0 ? 0 : r === 1 ? 1 : (r *= 2) < 1 ? 0.5 * Math.pow(1024, r - 1) : 0.5 * (-Math.pow(2, -10 * (r - 1)) + 2);
  },
  circularIn: function(r) {
    return 1 - Math.sqrt(1 - r * r);
  },
  circularOut: function(r) {
    return Math.sqrt(1 - --r * r);
  },
  circularInOut: function(r) {
    return (r *= 2) < 1 ? -0.5 * (Math.sqrt(1 - r * r) - 1) : 0.5 * (Math.sqrt(1 - (r -= 2) * r) + 1);
  },
  elasticIn: function(r) {
    var t, e = 0.1, n = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n)));
  },
  elasticOut: function(r) {
    var t, e = 0.1, n = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * r) * Math.sin((r - t) * (2 * Math.PI) / n) + 1);
  },
  elasticInOut: function(r) {
    var t, e = 0.1, n = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), (r *= 2) < 1 ? -0.5 * (e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n)) : e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n) * 0.5 + 1);
  },
  backIn: function(r) {
    var t = 1.70158;
    return r * r * ((t + 1) * r - t);
  },
  backOut: function(r) {
    var t = 1.70158;
    return --r * r * ((t + 1) * r + t) + 1;
  },
  backInOut: function(r) {
    var t = 2.5949095;
    return (r *= 2) < 1 ? 0.5 * (r * r * ((t + 1) * r - t)) : 0.5 * ((r -= 2) * r * ((t + 1) * r + t) + 2);
  },
  bounceIn: function(r) {
    return 1 - ma.bounceOut(1 - r);
  },
  bounceOut: function(r) {
    return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  },
  bounceInOut: function(r) {
    return r < 0.5 ? ma.bounceIn(r * 2) * 0.5 : ma.bounceOut(r * 2 - 1) * 0.5 + 0.5;
  }
}, po = Math.pow, Ir = Math.sqrt, Ls = 1e-8, ly = 1e-4, Gc = Ir(3), go = 1 / 3, He = Pi(), me = Pi(), li = Pi();
function Tr(r) {
  return r > -Ls && r < Ls;
}
function fy(r) {
  return r > Ls || r < -Ls;
}
function Bt(r, t, e, n, i) {
  var a = 1 - i;
  return a * a * (a * r + 3 * i * t) + i * i * (i * n + 3 * a * e);
}
function Uc(r, t, e, n, i) {
  var a = 1 - i;
  return 3 * (((t - r) * a + 2 * (e - t) * i) * a + (n - e) * i * i);
}
function Ps(r, t, e, n, i, a) {
  var o = n + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), u = 3 * (t - r), l = r - i, f = s * s - 3 * o * u, h = s * u - 9 * o * l, v = u * u - 3 * s * l, c = 0;
  if (Tr(f) && Tr(h))
    if (Tr(s))
      a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[c++] = d);
    }
  else {
    var p = h * h - 4 * f * v;
    if (Tr(p)) {
      var m = h / f, d = -s / o + m, g = -m / 2;
      d >= 0 && d <= 1 && (a[c++] = d), g >= 0 && g <= 1 && (a[c++] = g);
    } else if (p > 0) {
      var y = Ir(p), _ = f * s + 1.5 * o * (-h + y), S = f * s + 1.5 * o * (-h - y);
      _ < 0 ? _ = -po(-_, go) : _ = po(_, go), S < 0 ? S = -po(-S, go) : S = po(S, go);
      var d = (-s - (_ + S)) / (3 * o);
      d >= 0 && d <= 1 && (a[c++] = d);
    } else {
      var b = (2 * f * s - 3 * o * h) / (2 * Ir(f * f * f)), x = Math.acos(b) / 3, w = Ir(f), D = Math.cos(x), d = (-s - 2 * w * D) / (3 * o), g = (-s + w * (D + Gc * Math.sin(x))) / (3 * o), C = (-s + w * (D - Gc * Math.sin(x))) / (3 * o);
      d >= 0 && d <= 1 && (a[c++] = d), g >= 0 && g <= 1 && (a[c++] = g), C >= 0 && C <= 1 && (a[c++] = C);
    }
  }
  return c;
}
function hy(r, t, e, n, i) {
  var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * n - 3 * r - 9 * e, s = 3 * t - 3 * r, u = 0;
  if (Tr(o)) {
    if (fy(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (Tr(f))
      i[0] = -a / (2 * o);
    else if (f > 0) {
      var h = Ir(f), l = (-a + h) / (2 * o), v = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (i[u++] = l), v >= 0 && v <= 1 && (i[u++] = v);
    }
  }
  return u;
}
function Rs(r, t, e, n, i, a) {
  var o = (t - r) * i + r, s = (e - t) * i + t, u = (n - e) * i + e, l = (s - o) * i + o, f = (u - s) * i + s, h = (f - l) * i + l;
  a[0] = r, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = n;
}
function kb(r, t, e, n, i, a, o, s, u, l, f) {
  var h, v = 5e-3, c = 1 / 0, d, p, m, g;
  He[0] = u, He[1] = l;
  for (var y = 0; y < 1; y += 0.05)
    me[0] = Bt(r, e, i, o, y), me[1] = Bt(t, n, a, s, y), m = ui(He, me), m < c && (h = y, c = m);
  c = 1 / 0;
  for (var _ = 0; _ < 32 && !(v < ly); _++)
    d = h - v, p = h + v, me[0] = Bt(r, e, i, o, d), me[1] = Bt(t, n, a, s, d), m = ui(me, He), d >= 0 && m < c ? (h = d, c = m) : (li[0] = Bt(r, e, i, o, p), li[1] = Bt(t, n, a, s, p), g = ui(li, He), p <= 1 && g < c ? (h = p, c = g) : v *= 0.5);
  return Ir(c);
}
function Bb(r, t, e, n, i, a, o, s, u) {
  for (var l = r, f = t, h = 0, v = 1 / u, c = 1; c <= u; c++) {
    var d = c * v, p = Bt(r, e, i, o, d), m = Bt(t, n, a, s, d), g = p - l, y = m - f;
    h += Math.sqrt(g * g + y * y), l = p, f = m;
  }
  return h;
}
function Kt(r, t, e, n) {
  var i = 1 - n;
  return i * (i * r + 2 * n * t) + n * n * e;
}
function Wc(r, t, e, n) {
  return 2 * ((1 - n) * (t - r) + n * (e - t));
}
function Nb(r, t, e, n, i) {
  var a = r - 2 * t + e, o = 2 * (t - r), s = r - n, u = 0;
  if (Tr(a)) {
    if (fy(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (Tr(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l);
    } else if (f > 0) {
      var h = Ir(f), l = (-o + h) / (2 * a), v = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l), v >= 0 && v <= 1 && (i[u++] = v);
    }
  }
  return u;
}
function vy(r, t, e) {
  var n = r + e - 2 * t;
  return n === 0 ? 0.5 : (r - t) / n;
}
function Es(r, t, e, n, i) {
  var a = (t - r) * n + r, o = (e - t) * n + t, s = (o - a) * n + a;
  i[0] = r, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = e;
}
function Fb(r, t, e, n, i, a, o, s, u) {
  var l, f = 5e-3, h = 1 / 0;
  He[0] = o, He[1] = s;
  for (var v = 0; v < 1; v += 0.05) {
    me[0] = Kt(r, e, i, v), me[1] = Kt(t, n, a, v);
    var c = ui(He, me);
    c < h && (l = v, h = c);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < ly); d++) {
    var p = l - f, m = l + f;
    me[0] = Kt(r, e, i, p), me[1] = Kt(t, n, a, p);
    var c = ui(me, He);
    if (p >= 0 && c < h)
      l = p, h = c;
    else {
      li[0] = Kt(r, e, i, m), li[1] = Kt(t, n, a, m);
      var g = ui(li, He);
      m <= 1 && g < h ? (l = m, h = g) : f *= 0.5;
    }
  }
  return Ir(h);
}
function zb(r, t, e, n, i, a, o) {
  for (var s = r, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var v = h * f, c = Kt(r, e, i, v), d = Kt(t, n, a, v), p = c - s, m = d - u;
    l += Math.sqrt(p * p + m * m), s = c, u = d;
  }
  return l;
}
var Hb = /cubic-bezier\(([0-9,\.e ]+)\)/;
function cy(r) {
  var t = r && Hb.exec(r);
  if (t) {
    var e = t[1].split(","), n = +Ve(e[0]), i = +Ve(e[1]), a = +Ve(e[2]), o = +Ve(e[3]);
    if (isNaN(n + i + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : Ps(0, n, a, 1, u, s) && Bt(0, i, o, 1, s[0]);
    };
  }
}
var Vb = (function() {
  function r(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || Nt, this.ondestroy = t.ondestroy || Nt, this.onrestart = t.onrestart || Nt, t.easing && this.setEasing(t.easing);
  }
  return r.prototype.step = function(t, e) {
    if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += e;
      return;
    }
    var n = this._life, i = t - this._startTime - this._pausedTime, a = i / n;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var u = i % n;
        this._startTime = t - u, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, r.prototype.pause = function() {
    this._paused = !0;
  }, r.prototype.resume = function() {
    this._paused = !1;
  }, r.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = Q(t) ? t : ma[t] || cy(t);
  }, r;
})(), dy = /* @__PURE__ */ (function() {
  function r(t) {
    this.value = t;
  }
  return r;
})(), Gb = (function() {
  function r() {
    this._len = 0;
  }
  return r.prototype.insert = function(t) {
    var e = new dy(t);
    return this.insertEntry(e), e;
  }, r.prototype.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, r.prototype.remove = function(t) {
    var e = t.prev, n = t.next;
    e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, r;
})(), mi = (function() {
  function r(t) {
    this._list = new Gb(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return r.prototype.put = function(t, e) {
    var n = this._list, i = this._map, a = null;
    if (i[t] == null) {
      var o = n.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = n.head;
        n.remove(u), delete i[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = e : s = new dy(e), s.key = t, n.insertEntry(s), i[t] = s;
    }
    return a;
  }, r.prototype.get = function(t) {
    var e = this._map[t], n = this._list;
    if (e != null)
      return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value;
  }, r.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, r.prototype.len = function() {
    return this._list.len();
  }, r;
})(), Yc = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};
function Lr(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
}
function Ef(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function il(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? Lr(parseFloat(t) / 100 * 255) : Lr(parseInt(t, 10));
}
function Sn(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? Ef(parseFloat(t) / 100) : Ef(parseFloat(t));
}
function al(r, t, e) {
  return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
}
function mo(r, t, e) {
  return r + (t - r) * e;
}
function ve(r, t, e, n, i) {
  return r[0] = t, r[1] = e, r[2] = n, r[3] = i, r;
}
function Of(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
var py = new mi(20), yo = null;
function Bn(r, t) {
  yo && Of(yo, t), yo = py.put(r, yo || t.slice());
}
function Ue(r, t) {
  if (r) {
    t = t || [];
    var e = py.get(r);
    if (e)
      return Of(t, e);
    r = r + "";
    var n = r.replace(/ /g, "").toLowerCase();
    if (n in Yc)
      return Of(t, Yc[n]), Bn(r, t), t;
    var i = n.length;
    if (n.charAt(0) === "#") {
      if (i === 4 || i === 5) {
        var a = parseInt(n.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          ve(t, 0, 0, 0, 1);
          return;
        }
        return ve(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), Bn(r, t), t;
      } else if (i === 7 || i === 9) {
        var a = parseInt(n.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          ve(t, 0, 0, 0, 1);
          return;
        }
        return ve(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), Bn(r, t), t;
      }
      return;
    }
    var o = n.indexOf("("), s = n.indexOf(")");
    if (o !== -1 && s + 1 === i) {
      var u = n.substr(0, o), l = n.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3 ? ve(t, +l[0], +l[1], +l[2], 1) : ve(t, 0, 0, 0, 1);
          f = Sn(l.pop());
        case "rgb":
          if (l.length >= 3)
            return ve(t, il(l[0]), il(l[1]), il(l[2]), l.length === 3 ? f : Sn(l[3])), Bn(r, t), t;
          ve(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (l.length !== 4) {
            ve(t, 0, 0, 0, 1);
            return;
          }
          return l[3] = Sn(l[3]), kf(l, t), Bn(r, t), t;
        case "hsl":
          if (l.length !== 3) {
            ve(t, 0, 0, 0, 1);
            return;
          }
          return kf(l, t), Bn(r, t), t;
        default:
          return;
      }
    }
    ve(t, 0, 0, 0, 1);
  }
}
function kf(r, t) {
  var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, n = Sn(r[1]), i = Sn(r[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
  return t = t || [], ve(t, Lr(al(o, a, e + 1 / 3) * 255), Lr(al(o, a, e) * 255), Lr(al(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
}
function Ub(r) {
  if (r) {
    var t = r[0] / 255, e = r[1] / 255, n = r[2] / 255, i = Math.min(t, e, n), a = Math.max(t, e, n), o = a - i, s = (a + i) / 2, u, l;
    if (o === 0)
      u = 0, l = 0;
    else {
      s < 0.5 ? l = o / (a + i) : l = o / (2 - a - i);
      var f = ((a - t) / 6 + o / 2) / o, h = ((a - e) / 6 + o / 2) / o, v = ((a - n) / 6 + o / 2) / o;
      t === a ? u = v - h : e === a ? u = 1 / 3 + f - v : n === a && (u = 2 / 3 + h - f), u < 0 && (u += 1), u > 1 && (u -= 1);
    }
    var c = [u * 360, l, s];
    return r[3] != null && c.push(r[3]), c;
  }
}
function Zc(r, t) {
  var e = Ue(r);
  if (e) {
    for (var n = 0; n < 3; n++)
      e[n] = e[n] * (1 - t) | 0, e[n] > 255 ? e[n] = 255 : e[n] < 0 && (e[n] = 0);
    return Ja(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function Wb(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = Ue(t[i]), s = Ue(t[a]), u = n - i, l = Ja([
      Lr(mo(o[0], s[0], u)),
      Lr(mo(o[1], s[1], u)),
      Lr(mo(o[2], s[2], u)),
      Ef(mo(o[3], s[3], u))
    ], "rgba");
    return e ? {
      color: l,
      leftIndex: i,
      rightIndex: a,
      value: n
    } : l;
  }
}
function Bf(r, t, e, n) {
  var i = Ue(r);
  if (r)
    return i = Ub(i), e != null && (i[1] = Sn(Q(e) ? e(i[1]) : e)), n != null && (i[2] = Sn(Q(n) ? n(i[2]) : n)), Ja(kf(i), "rgba");
}
function Ja(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
  }
}
function Os(r, t) {
  var e = Ue(r);
  return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
}
var Xc = new mi(100);
function $c(r) {
  if (V(r)) {
    var t = Xc.get(r);
    return t || (t = Zc(r, -0.1), Xc.put(r, t)), t;
  } else if (du(r)) {
    var e = B({}, r);
    return e.colorStops = U(r.colorStops, function(n) {
      return {
        offset: n.offset,
        color: Zc(n.color, -0.1)
      };
    }), e;
  }
  return r;
}
function Yb(r) {
  return r.type === "linear";
}
function Zb(r) {
  return r.type === "radial";
}
(function() {
  return typeof Buffer < "u" && typeof Buffer.from == "function" ? function(r) {
    return Buffer.from(r).toString("base64");
  } : typeof btoa == "function" && typeof unescape == "function" && typeof encodeURIComponent == "function" ? function(r) {
    return btoa(unescape(encodeURIComponent(r)));
  } : function(r) {
    return null;
  };
})();
var Nf = Array.prototype.slice;
function or(r, t, e) {
  return (t - r) * e + r;
}
function ol(r, t, e, n) {
  for (var i = t.length, a = 0; a < i; a++)
    r[a] = or(t[a], e[a], n);
  return r;
}
function Xb(r, t, e, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = or(t[o][s], e[o][s], n);
  }
  return r;
}
function _o(r, t, e, n) {
  for (var i = t.length, a = 0; a < i; a++)
    r[a] = t[a] + e[a] * n;
  return r;
}
function qc(r, t, e, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = t[o][s] + e[o][s] * n;
  }
  return r;
}
function $b(r, t) {
  for (var e = r.length, n = t.length, i = e > n ? t : r, a = Math.min(e, n), o = i[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(e, n); s++)
    i.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function qb(r, t, e) {
  var n = r, i = t;
  if (!(!n.push || !i.push)) {
    var a = n.length, o = i.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        n.length = o;
      else
        for (var u = a; u < o; u++)
          n.push(e === 1 ? i[u] : Nf.call(i[u]));
    }
    for (var l = n[0] && n[0].length, u = 0; u < n.length; u++)
      if (e === 1)
        isNaN(n[u]) && (n[u] = i[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(n[u][f]) && (n[u][f] = i[u][f]);
  }
}
function os(r) {
  if (ne(r)) {
    var t = r.length;
    if (ne(r[0])) {
      for (var e = [], n = 0; n < t; n++)
        e.push(Nf.call(r[n]));
      return e;
    }
    return Nf.call(r);
  }
  return r;
}
function ss(r) {
  return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
}
function Kb(r) {
  return ne(r && r[0]) ? 2 : 1;
}
var So = 0, us = 1, gy = 2, la = 3, Ff = 4, zf = 5, Kc = 6;
function Qc(r) {
  return r === Ff || r === zf;
}
function bo(r) {
  return r === us || r === gy;
}
var Fi = [0, 0, 0, 0], Qb = (function() {
  function r(t) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t;
  }
  return r.prototype.isFinished = function() {
    return this._finished;
  }, r.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, r.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, r.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, r.prototype.addKeyframe = function(t, e, n) {
    this._needsSort = !0;
    var i = this.keyframes, a = i.length, o = !1, s = Kc, u = e;
    if (ne(e)) {
      var l = Kb(e);
      s = l, (l === 1 && !wt(e[0]) || l === 2 && !wt(e[0][0])) && (o = !0);
    } else if (wt(e) && !Aa(e))
      s = So;
    else if (V(e))
      if (!isNaN(+e))
        s = So;
      else {
        var f = Ue(e);
        f && (u = f, s = la);
      }
    else if (du(e)) {
      var h = B({}, u);
      h.colorStops = U(e.colorStops, function(c) {
        return {
          offset: c.offset,
          color: Ue(c.color)
        };
      }), Yb(e) ? s = Ff : Zb(e) && (s = zf), u = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === Kc) && (o = !0), this.discrete = this.discrete || o;
    var v = {
      time: t,
      value: u,
      rawValue: e,
      percent: 0
    };
    return n && (v.easing = n, v.easingFunc = Q(n) ? n : ma[n] || cy(n)), i.push(v), v;
  }, r.prototype.prepare = function(t, e) {
    var n = this.keyframes;
    this._needsSort && n.sort(function(p, m) {
      return p.time - m.time;
    });
    for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, u = bo(i), l = Qc(i), f = 0; f < a; f++) {
      var h = n[f], v = h.value, c = o.value;
      h.percent = h.time / t, s || (u && f !== a - 1 ? qb(v, c, i) : l && $b(v.colorStops, c.colorStops));
    }
    if (!s && i !== zf && e && this.needsAnimate() && e.needsAnimate() && i === e.valType && !e._finished) {
      this._additiveTrack = e;
      for (var d = n[0].value, f = 0; f < a; f++)
        i === So ? n[f].additiveValue = n[f].value - d : i === la ? n[f].additiveValue = _o([], n[f].value, d, -1) : bo(i) && (n[f].additiveValue = i === us ? _o([], n[f].value, d, -1) : qc([], n[f].value, d, -1));
    }
  }, r.prototype.step = function(t, e) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === la, f, h = this._lastFr, v = Math.min, c, d;
      if (s === 1)
        c = d = o[0];
      else {
        if (e < 0)
          f = 0;
        else if (e < this._lastFrP) {
          var p = v(h + 1, s - 1);
          for (f = p; f >= 0 && !(o[f].percent <= e); f--)
            ;
          f = v(f, s - 2);
        } else {
          for (f = h; f < s && !(o[f].percent > e); f++)
            ;
          f = v(f - 1, s - 2);
        }
        d = o[f + 1], c = o[f];
      }
      if (c && d) {
        this._lastFr = f, this._lastFrP = e;
        var m = d.percent - c.percent, g = m === 0 ? 1 : v((e - c.percent) / m, 1);
        d.easingFunc && (g = d.easingFunc(g));
        var y = n ? this._additiveValue : l ? Fi : t[u];
        if ((bo(a) || l) && !y && (y = this._additiveValue = []), this.discrete)
          t[u] = g < 1 ? c.rawValue : d.rawValue;
        else if (bo(a))
          a === us ? ol(y, c[i], d[i], g) : Xb(y, c[i], d[i], g);
        else if (Qc(a)) {
          var _ = c[i], S = d[i], b = a === Ff;
          t[u] = {
            type: b ? "linear" : "radial",
            x: or(_.x, S.x, g),
            y: or(_.y, S.y, g),
            colorStops: U(_.colorStops, function(w, D) {
              var C = S.colorStops[D];
              return {
                offset: or(w.offset, C.offset, g),
                color: ss(ol([], w.color, C.color, g))
              };
            }),
            global: S.global
          }, b ? (t[u].x2 = or(_.x2, S.x2, g), t[u].y2 = or(_.y2, S.y2, g)) : t[u].r = or(_.r, S.r, g);
        } else if (l)
          ol(y, c[i], d[i], g), n || (t[u] = ss(y));
        else {
          var x = or(c[i], d[i], g);
          n ? this._additiveValue = x : t[u] = x;
        }
        n && this._addToTarget(t);
      }
    }
  }, r.prototype._addToTarget = function(t) {
    var e = this.valType, n = this.propName, i = this._additiveValue;
    e === So ? t[n] = t[n] + i : e === la ? (Ue(t[n], Fi), _o(Fi, Fi, i, 1), t[n] = ss(Fi)) : e === us ? _o(t[n], t[n], i, 1) : e === gy && qc(t[n], t[n], i, 1);
  }, r;
})(), tv = (function() {
  function r(t, e, n, i) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && i) {
      qh("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = i, this._allowDiscrete = n;
  }
  return r.prototype.getMaxTime = function() {
    return this._maxTime;
  }, r.prototype.getDelay = function() {
    return this._delay;
  }, r.prototype.getLoop = function() {
    return this._loop;
  }, r.prototype.getTarget = function() {
    return this._target;
  }, r.prototype.changeTarget = function(t) {
    this._target = t;
  }, r.prototype.when = function(t, e, n) {
    return this.whenWithKeys(t, e, xt(e), n);
  }, r.prototype.whenWithKeys = function(t, e, n, i) {
    for (var a = this._tracks, o = 0; o < n.length; o++) {
      var s = n[o], u = a[s];
      if (!u) {
        u = a[s] = new Qb(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, v = h[h.length - 1];
          l = v && v.value, f.valType === la && l && (l = ss(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        t > 0 && u.addKeyframe(0, os(l), i), this._trackKeys.push(s);
      }
      u.addKeyframe(t, os(e[s]), i);
    }
    return this._maxTime = Math.max(this._maxTime, t), this;
  }, r.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, r.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, r.prototype.isPaused = function() {
    return !!this._paused;
  }, r.prototype.duration = function(t) {
    return this._maxTime = t, this._force = !0, this;
  }, r.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var t = this._doneCbs;
    if (t)
      for (var e = t.length, n = 0; n < e; n++)
        t[n].call(this);
  }, r.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t = this.animation, e = this._abortedCbs;
    if (t && t.removeClip(this._clip), this._clip = null, e)
      for (var n = 0; n < e.length; n++)
        e[n].call(this);
  }, r.prototype._setTracksFinished = function() {
    for (var t = this._tracks, e = this._trackKeys, n = 0; n < e.length; n++)
      t[e[n]].setFinished();
  }, r.prototype._getAdditiveTrack = function(t) {
    var e, n = this._additiveAnimators;
    if (n)
      for (var i = 0; i < n.length; i++) {
        var a = n[i].getTrack(t);
        a && (e = a);
      }
    return e;
  }, r.prototype.start = function(t) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var e = this, n = [], i = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], u = this._getAdditiveTrack(o), l = s.keyframes, f = l.length;
        if (s.prepare(i, u), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var h = l[f - 1];
            h && (e._target[s.propName] = h.rawValue), s.setFinished();
          } else
            n.push(s);
      }
      if (n.length || this._force) {
        var v = new Vb({
          life: i,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(c) {
            e._started = 2;
            var d = e._additiveAnimators;
            if (d) {
              for (var p = !1, m = 0; m < d.length; m++)
                if (d[m]._clip) {
                  p = !0;
                  break;
                }
              p || (e._additiveAnimators = null);
            }
            for (var m = 0; m < n.length; m++)
              n[m].step(e._target, c);
            var g = e._onframeCbs;
            if (g)
              for (var m = 0; m < g.length; m++)
                g[m](e._target, c);
          },
          ondestroy: function() {
            e._doneCallback();
          }
        });
        this._clip = v, this.animation && this.animation.addClip(v), t && v.setEasing(t);
      } else
        this._doneCallback();
      return this;
    }
  }, r.prototype.stop = function(t) {
    if (this._clip) {
      var e = this._clip;
      t && e.onframe(1), this._abortedCallback();
    }
  }, r.prototype.delay = function(t) {
    return this._delay = t, this;
  }, r.prototype.during = function(t) {
    return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
  }, r.prototype.done = function(t) {
    return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
  }, r.prototype.aborted = function(t) {
    return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
  }, r.prototype.getClip = function() {
    return this._clip;
  }, r.prototype.getTrack = function(t) {
    return this._tracks[t];
  }, r.prototype.getTracks = function() {
    var t = this;
    return U(this._trackKeys, function(e) {
      return t._tracks[e];
    });
  }, r.prototype.stopTracks = function(t, e) {
    if (!t.length || !this._clip)
      return !0;
    for (var n = this._tracks, i = this._trackKeys, a = 0; a < t.length; a++) {
      var o = n[t[a]];
      o && !o.isFinished() && (e ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < i.length; a++)
      if (!n[i[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, r.prototype.saveTo = function(t, e, n) {
    if (t) {
      e = e || this._trackKeys;
      for (var i = 0; i < e.length; i++) {
        var a = e[i], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, u = s[n ? 0 : s.length - 1];
          u && (t[a] = os(u.rawValue));
        }
      }
    }
  }, r.prototype.__changeFinalValue = function(t, e) {
    e = e || xt(t);
    for (var n = 0; n < e.length; n++) {
      var i = e[n], a = this._tracks[i];
      if (a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, t[i]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, r;
})();
function ni() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var Jb = (function(r) {
  k(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, e = e || {}, n.stage = e.stage || {}, n;
  }
  return t.prototype.addClip = function(e) {
    e.animation && this.removeClip(e), this._head ? (this._tail.next = e, e.prev = this._tail, e.next = null, this._tail = e) : this._head = this._tail = e, e.animation = this;
  }, t.prototype.addAnimator = function(e) {
    e.animation = this;
    var n = e.getClip();
    n && this.addClip(n);
  }, t.prototype.removeClip = function(e) {
    if (e.animation) {
      var n = e.prev, i = e.next;
      n ? n.next = i : this._head = i, i ? i.prev = n : this._tail = n, e.next = e.prev = e.animation = null;
    }
  }, t.prototype.removeAnimator = function(e) {
    var n = e.getClip();
    n && this.removeClip(n), e.animation = null;
  }, t.prototype.update = function(e) {
    for (var n = ni() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(n, i);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = n, e || (this.trigger("frame", i), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var e = this;
    this._running = !0;
    function n() {
      e._running && (Is(n), !e._paused && e.update());
    }
    Is(n);
  }, t.prototype.start = function() {
    this._running || (this._time = ni(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = ni(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += ni() - this._pauseStart, this._paused = !1);
  }, t.prototype.clear = function() {
    for (var e = this._head; e; ) {
      var n = e.next;
      e.prev = e.next = e.animation = null, e = n;
    }
    this._head = this._tail = null;
  }, t.prototype.isFinished = function() {
    return this._head == null;
  }, t.prototype.animate = function(e, n) {
    n = n || {}, this.start();
    var i = new tv(e, n.loop);
    return this.addAnimator(i), i;
  }, t;
})(Te), jb = 300, sl = et.domSupported, ul = (function() {
  var r = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], t = [
    "touchstart",
    "touchend",
    "touchmove"
  ], e = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, n = U(r, function(i) {
    var a = i.replace("mouse", "pointer");
    return e.hasOwnProperty(a) ? a : i;
  });
  return {
    mouse: r,
    touch: t,
    pointer: n
  };
})(), Jc = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, jc = !1;
function Hf(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function tx(r) {
  r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
    r.touching = !1, r.touchTimer = null;
  }, 700);
}
function ll(r) {
  r && (r.zrByTouch = !0);
}
function ex(r, t) {
  return de(r.dom, new rx(r, t), !0);
}
function my(r, t) {
  for (var e = t, n = !1; e && e.nodeType !== 9 && !(n = e.domBelongToZr || e !== t && e === r.painterRoot); )
    e = e.parentNode;
  return n;
}
var rx = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.stopPropagation = Nt, this.stopImmediatePropagation = Nt, this.preventDefault = Nt, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }
  return r;
})(), Ie = {
  mousedown: function(r) {
    r = de(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
  },
  mousemove: function(r) {
    r = de(this.dom, r);
    var t = this.__mayPointerCapture;
    t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    r = de(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
  },
  mouseout: function(r) {
    r = de(this.dom, r);
    var t = r.toElement || r.relatedTarget;
    my(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
  },
  wheel: function(r) {
    jc = !0, r = de(this.dom, r), this.trigger("mousewheel", r);
  },
  mousewheel: function(r) {
    jc || (r = de(this.dom, r), this.trigger("mousewheel", r));
  },
  touchstart: function(r) {
    r = de(this.dom, r), ll(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), Ie.mousemove.call(this, r), Ie.mousedown.call(this, r);
  },
  touchmove: function(r) {
    r = de(this.dom, r), ll(r), this.handler.processGesture(r, "change"), Ie.mousemove.call(this, r);
  },
  touchend: function(r) {
    r = de(this.dom, r), ll(r), this.handler.processGesture(r, "end"), Ie.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < jb && Ie.click.call(this, r);
  },
  pointerdown: function(r) {
    Ie.mousedown.call(this, r);
  },
  pointermove: function(r) {
    Hf(r) || Ie.mousemove.call(this, r);
  },
  pointerup: function(r) {
    Ie.mouseup.call(this, r);
  },
  pointerout: function(r) {
    Hf(r) || Ie.mouseout.call(this, r);
  }
};
T(["click", "dblclick", "contextmenu"], function(r) {
  Ie[r] = function(t) {
    t = de(this.dom, t), this.trigger(r, t);
  };
});
var Vf = {
  pointermove: function(r) {
    Hf(r) || Vf.mousemove.call(this, r);
  },
  pointerup: function(r) {
    Vf.mouseup.call(this, r);
  },
  mousemove: function(r) {
    this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
  }
};
function nx(r, t) {
  var e = t.domHandlers;
  et.pointerEventsSupported ? T(ul.pointer, function(n) {
    ls(t, n, function(i) {
      e[n].call(r, i);
    });
  }) : (et.touchEventsSupported && T(ul.touch, function(n) {
    ls(t, n, function(i) {
      e[n].call(r, i), tx(t);
    });
  }), T(ul.mouse, function(n) {
    ls(t, n, function(i) {
      i = Jh(i), t.touching || e[n].call(r, i);
    });
  }));
}
function ix(r, t) {
  et.pointerEventsSupported ? T(Jc.pointer, e) : et.touchEventsSupported || T(Jc.mouse, e);
  function e(n) {
    function i(a) {
      a = Jh(a), my(r, a.target) || (a = ex(r, a), t.domHandlers[n].call(r, a));
    }
    ls(t, n, i, { capture: !0 });
  }
}
function ls(r, t, e, n) {
  r.mounted[t] = e, r.listenerOpts[t] = n, If(r.domTarget, t, e, n);
}
function fl(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && mb(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var td = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
  }
  return r;
})(), ax = (function(r) {
  k(t, r);
  function t(e, n) {
    var i = r.call(this) || this;
    return i.__pointerCapturing = !1, i.dom = e, i.painterRoot = n, i._localHandlerScope = new td(e, Ie), sl && (i._globalHandlerScope = new td(document, Vf)), nx(i, i._localHandlerScope), i;
  }
  return t.prototype.dispose = function() {
    fl(this._localHandlerScope), sl && fl(this._globalHandlerScope);
  }, t.prototype.setCursor = function(e) {
    this.dom.style && (this.dom.style.cursor = e || "default");
  }, t.prototype.__togglePointerCapture = function(e) {
    if (this.__mayPointerCapture = null, sl && +this.__pointerCapturing ^ +e) {
      this.__pointerCapturing = e;
      var n = this._globalHandlerScope;
      e ? ix(this, n) : fl(n);
    }
  }, t;
})(Te), yy = 1;
et.hasGlobalWindow && (yy = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var ks = yy, Gf = 0.4, Uf = "#333", Wf = "#ccc", ox = "#eee", ed = Ka, rd = 5e-5;
function Zr(r) {
  return r > rd || r < -rd;
}
var Xr = [], Nn = [], hl = te(), vl = Math.abs, Rn = (function() {
  function r() {
  }
  return r.prototype.getLocalTransform = function(t) {
    return _y(this, t);
  }, r.prototype.setPosition = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.prototype.setScale = function(t) {
    this.scaleX = t[0], this.scaleY = t[1];
  }, r.prototype.setSkew = function(t) {
    this.skewX = t[0], this.skewY = t[1];
  }, r.prototype.setOrigin = function(t) {
    this.originX = t[0], this.originY = t[1];
  }, r.prototype.needLocalTransform = function() {
    return Zr(this.rotation) || Zr(this.x) || Zr(this.y) || Zr(this.scaleX - 1) || Zr(this.scaleY - 1) || Zr(this.skewX) || Zr(this.skewY);
  }, r.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, e = this.needLocalTransform(), n = this.transform;
    if (!(e || t)) {
      n && (ed(n), this.invTransform = null);
      return;
    }
    n = n || te(), e ? this.getLocalTransform(n) : ed(n), t && (e ? pa(n, t, n) : gu(n, t)), this.transform = n, this._resolveGlobalScaleRatio(n), this.invTransform = this.invTransform || te(), Qa(this.invTransform, n);
  }, r.prototype._resolveGlobalScaleRatio = function(t) {
    var e = this.globalScaleRatio;
    if (e != null && e !== 1) {
      this.getGlobalScale(Xr);
      var n = Xr[0] < 0 ? -1 : 1, i = Xr[1] < 0 ? -1 : 1, a = ((Xr[0] - n) * e + n) / Xr[0] || 0, o = ((Xr[1] - i) * e + i) / Xr[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
  }, r.prototype.getComputedTransform = function() {
    for (var t = this, e = []; t; )
      e.push(t), t = t.parent;
    for (; t = e.pop(); )
      t.updateTransform();
    return this.transform;
  }, r.prototype.setLocalTransform = function(t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = Math.atan2(t[1], t[0]), a = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
      n = Math.sqrt(n) * Math.cos(a), e = Math.sqrt(e), this.skewX = a, this.skewY = 0, this.rotation = -i, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = n, this.originX = 0, this.originY = 0;
    }
  }, r.prototype.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent, e = this.transform;
      t && t.transform && (t.invTransform = t.invTransform || te(), pa(Nn, t.invTransform, e), e = Nn);
      var n = this.originX, i = this.originY;
      (n || i) && (hl[4] = n, hl[5] = i, pa(Nn, e, hl), Nn[4] -= n, Nn[5] -= i, e = Nn), this.setLocalTransform(e);
    }
  }, r.prototype.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, r.prototype.transformCoordToLocal = function(t, e) {
    var n = [t, e], i = this.invTransform;
    return i && re(n, n, i), n;
  }, r.prototype.transformCoordToGlobal = function(t, e) {
    var n = [t, e], i = this.transform;
    return i && re(n, n, i), n;
  }, r.prototype.getLineScale = function() {
    var t = this.transform;
    return t && vl(t[0] - 1) > 1e-10 && vl(t[3] - 1) > 1e-10 ? Math.sqrt(vl(t[0] * t[3] - t[2] * t[1])) : 1;
  }, r.prototype.copyTransform = function(t) {
    Bs(this, t);
  }, r.getLocalTransform = function(t, e) {
    e = e || [];
    var n = t.originX || 0, i = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, u = t.anchorY, l = t.rotation || 0, f = t.x, h = t.y, v = t.skewX ? Math.tan(t.skewX) : 0, c = t.skewY ? Math.tan(-t.skewY) : 0;
    if (n || i || s || u) {
      var d = n + s, p = i + u;
      e[4] = -d * a - v * p * o, e[5] = -p * o - c * d * a;
    } else
      e[4] = e[5] = 0;
    return e[0] = a, e[3] = o, e[1] = c * a, e[2] = v * o, l && jh(e, e, l), e[4] += n + f, e[5] += i + h, e;
  }, r.initDefaultProps = (function() {
    var t = r.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  })(), r;
})(), _y = Rn.getLocalTransform;
function cl() {
  return new Rn();
}
var yu = [
  "x",
  "y",
  "originX",
  "originY",
  "anchorX",
  "anchorY",
  "rotation",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY"
];
function Bs(r, t) {
  return US(r, t, yu);
}
function We(r) {
  xo || (xo = new mi(100)), r = r || Er;
  var t = xo.get(r);
  return t || (t = {
    font: r,
    strWidthCache: new mi(500),
    asciiWidthMap: null,
    asciiWidthMapTried: !1,
    stWideCharWidth: ue.measureText("国", r).width,
    asciiCharWidth: ue.measureText("a", r).width
  }, xo.put(r, t)), t;
}
var xo;
function sx(r) {
  if (!(dl >= nd)) {
    r = r || Er;
    for (var t = [], e = +/* @__PURE__ */ new Date(), n = 0; n <= 127; n++)
      t[n] = ue.measureText(String.fromCharCode(n), r).width;
    var i = +/* @__PURE__ */ new Date() - e;
    return i > 16 ? dl = nd : i > 2 && dl++, t;
  }
}
var dl = 0, nd = 5;
function Sy(r, t) {
  return r.asciiWidthMapTried || (r.asciiWidthMap = sx(r.font), r.asciiWidthMapTried = !0), 0 <= t && t <= 127 ? r.asciiWidthMap != null ? r.asciiWidthMap[t] : r.asciiCharWidth : r.stWideCharWidth;
}
function Ye(r, t) {
  var e = r.strWidthCache, n = e.get(t);
  return n == null && (n = ue.measureText(t, r.font).width, e.put(t, n)), n;
}
function id(r, t, e, n) {
  var i = Ye(We(t), r), a = _u(t), o = yi(0, i, e), s = bn(0, a, n), u = new j(o, s, i, a);
  return u;
}
function ev(r, t, e, n) {
  var i = ((r || "") + "").split(`
`), a = i.length;
  if (a === 1)
    return id(i[0], t, e, n);
  for (var o = new j(0, 0, 0, 0), s = 0; s < i.length; s++) {
    var u = id(i[s], t, e, n);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function yi(r, t, e, n) {
  return e === "right" ? n ? r += t : r -= t : e === "center" && (n ? r += t / 2 : r -= t / 2), r;
}
function bn(r, t, e, n) {
  return e === "middle" ? n ? r += t / 2 : r -= t / 2 : e === "bottom" && (n ? r += t : r -= t), r;
}
function _u(r) {
  return We(r).stWideCharWidth;
}
function _i(r, t) {
  return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
}
function by(r, t, e) {
  var n = t.position || "inside", i = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, u = e.x, l = e.y, f = "left", h = "top";
  if (n instanceof Array)
    u += _i(n[0], e.width), l += _i(n[1], e.height), f = null, h = null;
  else
    switch (n) {
      case "left":
        u -= i, l += s, f = "right", h = "middle";
        break;
      case "right":
        u += i + o, l += s, h = "middle";
        break;
      case "top":
        u += o / 2, l -= i, f = "center", h = "bottom";
        break;
      case "bottom":
        u += o / 2, l += a + i, f = "center";
        break;
      case "inside":
        u += o / 2, l += s, f = "center", h = "middle";
        break;
      case "insideLeft":
        u += i, l += s, h = "middle";
        break;
      case "insideRight":
        u += o - i, l += s, f = "right", h = "middle";
        break;
      case "insideTop":
        u += o / 2, l += i, f = "center";
        break;
      case "insideBottom":
        u += o / 2, l += a - i, f = "center", h = "bottom";
        break;
      case "insideTopLeft":
        u += i, l += i;
        break;
      case "insideTopRight":
        u += o - i, l += i, f = "right";
        break;
      case "insideBottomLeft":
        u += i, l += a - i, h = "bottom";
        break;
      case "insideBottomRight":
        u += o - i, l += a - i, f = "right", h = "bottom";
        break;
    }
  return r = r || {}, r.x = u, r.y = l, r.align = f, r.verticalAlign = h, r;
}
var pl = "__zr_normal__", gl = yu.concat(["ignore"]), ux = Li(yu, function(r, t) {
  return r[t] = !0, r;
}, { ignore: !1 }), Fn = {}, lx = new j(0, 0, 0, 0), wo = [], fs = 0, Su = 1, bu = (function() {
  function r(t) {
    this.id = Jm(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
  }
  return r.prototype._init = function(t) {
    this.attr(t);
  }, r.prototype.drift = function(t, e, n) {
    switch (this.draggable) {
      case "horizontal":
        e = 0;
        break;
      case "vertical":
        t = 0;
        break;
    }
    var i = this.transform;
    i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.markRedraw();
  }, r.prototype.beforeUpdate = function() {
  }, r.prototype.afterUpdate = function() {
  }, r.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, r.prototype.updateInnerText = function(t) {
    var e = this._textContent;
    if (e && (!e.ignore || t)) {
      this.textConfig || (this.textConfig = {});
      var n = this.textConfig, i = n.local, a = e.innerTransformable, o = void 0, s = void 0, u = !1;
      a.parent = i ? this : null;
      var l = !1;
      a.copyTransform(e);
      var f = n.position != null, h = n.autoOverflowArea, v = void 0;
      if ((h || f) && (v = lx, n.layoutRect ? v.copy(n.layoutRect) : v.copy(this.getBoundingRect()), i || v.applyTransform(this.transform)), f) {
        this.calculateTextPosition ? this.calculateTextPosition(Fn, n, v) : by(Fn, n, v), a.x = Fn.x, a.y = Fn.y, o = Fn.align, s = Fn.verticalAlign;
        var c = n.origin;
        if (c && n.rotation != null) {
          var d = void 0, p = void 0;
          c === "center" ? (d = v.width * 0.5, p = v.height * 0.5) : (d = _i(c[0], v.width), p = _i(c[1], v.height)), l = !0, a.originX = -a.x + d + (i ? 0 : v.x), a.originY = -a.y + p + (i ? 0 : v.y);
        }
      }
      n.rotation != null && (a.rotation = n.rotation);
      var m = n.offset;
      m && (a.x += m[0], a.y += m[1], l || (a.originX = -m[0], a.originY = -m[1]));
      var g = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {});
      if (h) {
        var y = g.overflowRect = g.overflowRect || new j(0, 0, 0, 0);
        a.getLocalTransform(wo), Qa(wo, wo), j.copy(y, v), y.applyTransform(wo);
      } else
        g.overflowRect = null;
      var _ = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, S = void 0, b = void 0, x = void 0;
      _ && this.canBeInsideText() ? (S = n.insideFill, b = n.insideStroke, (S == null || S === "auto") && (S = this.getInsideTextFill()), (b == null || b === "auto") && (b = this.getInsideTextStroke(S), x = !0)) : (S = n.outsideFill, b = n.outsideStroke, (S == null || S === "auto") && (S = this.getOutsideFill()), (b == null || b === "auto") && (b = this.getOutsideStroke(S), x = !0)), S = S || "#000", (S !== g.fill || b !== g.stroke || x !== g.autoStroke || o !== g.align || s !== g.verticalAlign) && (u = !0, g.fill = S, g.stroke = b, g.autoStroke = x, g.align = o, g.verticalAlign = s, e.setDefaultTextStyle(g)), e.__dirty |= jt, u && e.dirtyStyle(!0);
    }
  }, r.prototype.canBeInsideText = function() {
    return !0;
  }, r.prototype.getInsideTextFill = function() {
    return "#fff";
  }, r.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, r.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? Wf : Uf;
  }, r.prototype.getOutsideStroke = function(t) {
    var e = this.__zr && this.__zr.getBackgroundColor(), n = typeof e == "string" && Ue(e);
    n || (n = [255, 255, 255, 1]);
    for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
    return n[3] = 1, Ja(n, "rgba");
  }, r.prototype.traverse = function(t, e) {
  }, r.prototype.attrKV = function(t, e) {
    t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, B(this.extra, e)) : this[t] = e;
  }, r.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, r.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, r.prototype.attr = function(t, e) {
    if (typeof t == "string")
      this.attrKV(t, e);
    else if (Z(t))
      for (var n = t, i = xt(n), a = 0; a < i.length; a++) {
        var o = i[a];
        this.attrKV(o, t[o]);
      }
    return this.markRedraw(), this;
  }, r.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
      var i = this.animators[n], a = i.__fromStateTransition;
      if (!(i.getLoop() || a && a !== pl)) {
        var o = i.targetName, s = o ? e[o] : e;
        i.saveTo(s);
      }
    }
  }, r.prototype._innerSaveToNormal = function(t) {
    var e = this._normalState;
    e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, gl);
  }, r.prototype._savePrimaryToNormal = function(t, e, n) {
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      t[a] != null && !(a in e) && (e[a] = this[a]);
    }
  }, r.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, r.prototype.getState = function(t) {
    return this.states[t];
  }, r.prototype.ensureState = function(t) {
    var e = this.states;
    return e[t] || (e[t] = {}), e[t];
  }, r.prototype.clearStates = function(t) {
    this.useState(pl, !1, t);
  }, r.prototype.useState = function(t, e, n, i) {
    var a = t === pl, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(ot(s, t) >= 0 && (e || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), !l && !a) {
          qh("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = this._textContent, h = ad(this, f, l, i);
        h && !this.__inHover && (this.__inHover = h), this._applyStateObj(t, l, this._normalState, e, sd(this, n, u), u);
        var v = this._textGuide;
        return f && f.useState(t, e, n, !!h), v && v.useState(t, e, n, !!h), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !h && this.__inHover && (this.__inHover = fs, this.__dirty &= ~jt), l;
      }
    }
  }, r.prototype.useStates = function(t, e, n) {
    if (!t.length)
      this.clearStates();
    else {
      var i = [], a = this.currentStates, o = t.length, s = o === a.length;
      if (s) {
        for (var u = 0; u < o; u++)
          if (t[u] !== a[u]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var u = 0; u < o; u++) {
        var l = t[u], f = void 0;
        this.stateProxy && (f = this.stateProxy(l, t)), f || (f = this.states[l]), f && i.push(f);
      }
      var h = i[o - 1], v = this._textContent, c = ad(this, v, h, n);
      c && !this.__inHover && (this.__inHover = c);
      var d = this._mergeStates(i), p = this.stateTransition;
      this.saveCurrentToNormalState(d), this._applyStateObj(t.join(","), d, this._normalState, !1, sd(this, e, p), p);
      var m = this._textGuide;
      v && v.useStates(t, e, !!c), m && m.useStates(t, e, !!c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this.__inHover = fs, this.__dirty &= ~jt);
    }
  }, r.prototype.isSilent = function() {
    for (var t = this; t; ) {
      if (t.silent)
        return !0;
      var e = t.__hostTarget;
      t = e ? t.ignoreHostSilent ? null : e : t.parent;
    }
    return !1;
  }, r.prototype._updateAnimationTargets = function() {
    for (var t = 0; t < this.animators.length; t++) {
      var e = this.animators[t];
      e.targetName && e.changeTarget(this[e.targetName]);
    }
  }, r.prototype.removeState = function(t) {
    var e = ot(this.currentStates, t);
    if (e >= 0) {
      var n = this.currentStates.slice();
      n.splice(e, 1), this.useStates(n);
    }
  }, r.prototype.replaceState = function(t, e, n) {
    var i = this.currentStates.slice(), a = ot(i, t), o = ot(i, e) >= 0;
    a >= 0 ? o ? i.splice(a, 1) : i[a] = e : n && !o && i.push(e), this.useStates(i);
  }, r.prototype.toggleState = function(t, e) {
    e ? this.useState(t, !0) : this.removeState(t);
  }, r.prototype._mergeStates = function(t) {
    for (var e = {}, n, i = 0; i < t.length; i++) {
      var a = t[i];
      B(e, a), a.textConfig && (n = n || {}, B(n, a.textConfig));
    }
    return n && (e.textConfig = n), e;
  }, r.prototype._applyStateObj = function(t, e, n, i, a, o) {
    if (this.__inHover !== Su) {
      var s = !(e && i);
      e && e.textConfig ? (this.textConfig = B({}, i ? this.textConfig : n.textConfig), B(this.textConfig, e.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
      for (var u = {}, l = !1, f = 0; f < gl.length; f++) {
        var h = gl[f], v = a && ux[h];
        e && e[h] != null ? v ? (l = !0, u[h] = e[h]) : this[h] = e[h] : s && n[h] != null && (v ? (l = !0, u[h] = n[h]) : this[h] = n[h]);
      }
      if (!a)
        for (var f = 0; f < this.animators.length; f++) {
          var c = this.animators[f], d = c.targetName;
          c.getLoop() || c.__changeFinalValue(d ? (e || n)[d] : e || n);
        }
      l && this._transitionState(t, u, o);
    }
  }, r.prototype._attachComponent = function(t) {
    if (!(t.__zr && !t.__hostTarget) && t !== this) {
      var e = this.__zr;
      e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this;
    }
  }, r.prototype._detachComponent = function(t) {
    t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
  }, r.prototype.getClipPath = function() {
    return this._clipPath;
  }, r.prototype.setClipPath = function(t) {
    this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw();
  }, r.prototype.removeClipPath = function() {
    var t = this._clipPath;
    t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
  }, r.prototype.getTextContent = function() {
    return this._textContent;
  }, r.prototype.setTextContent = function(t) {
    var e = this._textContent;
    e !== t && (e && e !== t && this.removeTextContent(), t.innerTransformable = new Rn(), this._attachComponent(t), this._textContent = t, this.markRedraw());
  }, r.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), B(this.textConfig, t), this.markRedraw();
  }, r.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, r.prototype.removeTextContent = function() {
    var t = this._textContent;
    t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, r.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, r.prototype.setTextGuideLine = function(t) {
    this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw();
  }, r.prototype.removeTextGuideLine = function() {
    var t = this._textGuide;
    t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
  }, r.prototype.markRedraw = function() {
    this.__dirty |= jt;
    var t = this.__zr;
    t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, r.prototype.dirty = function() {
    this.markRedraw();
  }, r.prototype.addSelfToZr = function(t) {
    if (this.__zr !== t) {
      this.__zr = t;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++)
          t.animation.addAnimator(e[n]);
      this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
    }
  }, r.prototype.removeSelfFromZr = function(t) {
    if (this.__zr) {
      this.__zr = null;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++)
          t.animation.removeAnimator(e[n]);
      this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
    }
  }, r.prototype.animate = function(t, e, n) {
    var i = t ? this[t] : this, a = new tv(i, e, n);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, r.prototype.addAnimator = function(t, e) {
    var n = this.__zr, i = this;
    t.during(function() {
      i.updateDuringAnimation(e);
    }).done(function() {
      var a = i.animators, o = ot(a, t);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp();
  }, r.prototype.updateDuringAnimation = function(t) {
    this.markRedraw();
  }, r.prototype.stopAnimation = function(t, e) {
    for (var n = this.animators, i = n.length, a = [], o = 0; o < i; o++) {
      var s = n[o];
      !t || t === s.scope ? s.stop(e) : a.push(s);
    }
    return this.animators = a, this;
  }, r.prototype.animateTo = function(t, e, n) {
    ml(this, t, e, n);
  }, r.prototype.animateFrom = function(t, e, n) {
    ml(this, t, e, n, !0);
  }, r.prototype._transitionState = function(t, e, n, i) {
    for (var a = ml(this, e, n, i), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, r.prototype.getBoundingRect = function() {
    return null;
  }, r.prototype.getPaintRect = function() {
    return null;
  }, r.initDefaultProps = (function() {
    var t = r.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.ignoreHostSilent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = !1, t.__inHover = fs, t.__dirty = jt;
    function e(n, i, a, o) {
      Object.defineProperty(t, n, {
        get: function() {
          if (!this[i]) {
            var u = this[i] = [];
            s(this, u);
          }
          return this[i];
        },
        set: function(u) {
          this[a] = u[0], this[o] = u[1], this[i] = u, s(this, u);
        }
      });
      function s(u, l) {
        Object.defineProperty(l, 0, {
          get: function() {
            return u[a];
          },
          set: function(f) {
            u[a] = f;
          }
        }), Object.defineProperty(l, 1, {
          get: function() {
            return u[o];
          },
          set: function(f) {
            u[o] = f;
          }
        });
      }
    }
    Object.defineProperty && (e("position", "_legacyPos", "x", "y"), e("scale", "_legacyScale", "scaleX", "scaleY"), e("origin", "_legacyOrigin", "originX", "originY"));
  })(), r;
})();
Je(bu, Te);
Je(bu, Rn);
function ml(r, t, e, n, i) {
  e = e || {};
  var a = [];
  xy(r, "", r, t, e, n, a, i);
  var o = a.length, s = !1, u = e.done, l = e.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? u && u() : l && l());
  }, h = function() {
    o--, o <= 0 && (s ? u && u() : l && l());
  };
  o || u && u(), a.length > 0 && e.during && a[0].during(function(d, p) {
    e.during(p);
  });
  for (var v = 0; v < a.length; v++) {
    var c = a[v];
    f && c.done(f), h && c.aborted(h), e.force && c.duration(e.duration), c.start(e.easing);
  }
  return a;
}
function yl(r, t, e) {
  for (var n = 0; n < e; n++)
    r[n] = t[n];
}
function fx(r) {
  return ne(r[0]);
}
function hx(r, t, e) {
  if (ne(t[e]))
    if (ne(r[e]) || (r[e] = []), ie(t[e])) {
      var n = t[e].length;
      r[e].length !== n && (r[e] = new t[e].constructor(n), yl(r[e], t[e], n));
    } else {
      var i = t[e], a = r[e], o = i.length;
      if (fx(i))
        for (var s = i[0].length, u = 0; u < o; u++)
          a[u] ? yl(a[u], i[u], s) : a[u] = Array.prototype.slice.call(i[u]);
      else
        yl(a, i, o);
      a.length = i.length;
    }
  else
    r[e] = t[e];
}
function vx(r, t) {
  return r === t || ne(r) && ne(t) && cx(r, t);
}
function cx(r, t) {
  var e = r.length;
  if (e !== t.length)
    return !1;
  for (var n = 0; n < e; n++)
    if (r[n] !== t[n])
      return !1;
  return !0;
}
function xy(r, t, e, n, i, a, o, s) {
  for (var u = xt(n), l = i.duration, f = i.delay, h = i.additive, v = i.setToFinal, c = !Z(a), d = r.animators, p = [], m = 0; m < u.length; m++) {
    var g = u[m], y = n[g];
    if (y != null && e[g] != null && (c || a[g]))
      if (Z(y) && !ne(y) && !du(y)) {
        if (t) {
          s || (e[g] = y, r.updateDuringAnimation(t));
          continue;
        }
        xy(r, g, e[g], y, i, a && a[g], o, s);
      } else
        p.push(g);
    else s || (e[g] = y, r.updateDuringAnimation(t), p.push(g));
  }
  var _ = p.length;
  if (!h && _)
    for (var S = 0; S < d.length; S++) {
      var b = d[S];
      if (b.targetName === t) {
        var x = b.stopTracks(p);
        if (x) {
          var w = ot(d, b);
          d.splice(w, 1);
        }
      }
    }
  if (i.force || (p = kt(p, function(A) {
    return !vx(n[A], e[A]);
  }), _ = p.length), _ > 0 || i.force && !o.length) {
    var D = void 0, C = void 0, M = void 0;
    if (s) {
      C = {}, v && (D = {});
      for (var S = 0; S < _; S++) {
        var g = p[S];
        C[g] = e[g], v ? D[g] = n[g] : e[g] = n[g];
      }
    } else if (v) {
      M = {};
      for (var S = 0; S < _; S++) {
        var g = p[S];
        M[g] = os(e[g]), hx(e, n, g);
      }
    }
    var b = new tv(e, !1, !1, h ? kt(d, function(L) {
      return L.targetName === t;
    }) : null);
    b.targetName = t, i.scope && (b.scope = i.scope), v && D && b.whenWithKeys(0, D, p), M && b.whenWithKeys(0, M, p), b.whenWithKeys(l ?? 500, s ? C : n, p).delay(f || 0), r.addAnimator(b, t), o.push(b);
  }
}
function ad(r, t, e, n) {
  return !(e && e.hoverLayer || n) || od(r) || t && od(t) ? fs : Su;
}
function od(r) {
  return r.type === "text" || r.type === "tspan";
}
function sd(r, t, e) {
  return !t && !r.__inHover && e && e.duration > 0;
}
var Mt = (function(r) {
  k(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return n.isGroup = !0, n._children = [], n.attr(e), n;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.children = function() {
    return this._children.slice();
  }, t.prototype.childAt = function(e) {
    return this._children[e];
  }, t.prototype.childOfName = function(e) {
    for (var n = this._children, i = 0; i < n.length; i++)
      if (n[i].name === e)
        return n[i];
  }, t.prototype.childCount = function() {
    return this._children.length;
  }, t.prototype.add = function(e) {
    return e && e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), this;
  }, t.prototype.addBefore = function(e, n) {
    if (e && e !== this && e.parent !== this && n && n.parent === this) {
      var i = this._children, a = i.indexOf(n);
      a >= 0 && (i.splice(a, 0, e), this._doAdd(e));
    }
    return this;
  }, t.prototype.replace = function(e, n) {
    var i = ot(this._children, e);
    return i >= 0 && this.replaceAt(n, i), this;
  }, t.prototype.replaceAt = function(e, n) {
    var i = this._children, a = i[n];
    if (e && e !== this && e.parent !== this && e !== a) {
      i[n] = e, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(e);
    }
    return this;
  }, t.prototype._doAdd = function(e) {
    e.parent && e.parent.remove(e), e.parent = this;
    var n = this.__zr;
    n && n !== e.__zr && e.addSelfToZr(n), n && n.refresh();
  }, t.prototype.remove = function(e) {
    var n = this.__zr, i = this._children, a = ot(i, e);
    return a < 0 ? this : (i.splice(a, 1), e.parent = null, n && e.removeSelfFromZr(n), n && n.refresh(), this);
  }, t.prototype.removeAll = function() {
    for (var e = this._children, n = this.__zr, i = 0; i < e.length; i++) {
      var a = e[i];
      n && a.removeSelfFromZr(n), a.parent = null;
    }
    return e.length = 0, this;
  }, t.prototype.eachChild = function(e, n) {
    for (var i = this._children, a = 0; a < i.length; a++) {
      var o = i[a];
      e.call(n, o, a);
    }
    return this;
  }, t.prototype.traverse = function(e, n) {
    for (var i = 0; i < this._children.length; i++) {
      var a = this._children[i], o = e.call(n, a);
      a.isGroup && !o && a.traverse(e, n);
    }
    return this;
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.addSelfToZr(e);
    }
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.removeSelfFromZr(e);
    }
  }, t.prototype.getBoundingRect = function(e) {
    for (var n = new j(0, 0, 0, 0), i = e || this._children, a = [], o = null, s = 0; s < i.length; s++) {
      var u = i[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (j.applyTransform(n, l, f), o = o || n.clone(), o.union(n)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || n;
  }, t;
})(bu);
Mt.prototype.type = "group";
var hs = {}, wy = {};
function dx(r) {
  delete wy[r];
}
function px(r) {
  if (!r)
    return !1;
  if (typeof r == "string")
    return Os(r, 1) < Gf;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, n = t.length, i = 0; i < n; i++)
      e += Os(t[i].color, 1);
    return e /= n, e < Gf;
  }
  return !1;
}
var gx = (function() {
  function r(t, e, n) {
    var i = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !1, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t;
    var a = new Ob(), o = n.renderer || "canvas";
    hs[o] || (o = xt(hs)[0]), n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
    var s = new hs[o](e, a, n, t), u = n.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !et.node && !et.worker && !u ? new ax(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, h = f == null || f === "auto" ? et.touchEventsSupported : !!f, v = 44, c;
    h && (c = X(n.pointerSize, v)), this.handler = new oy(a, s, l, s.root, c), this.animation = new Jb({
      stage: {
        update: u ? null : function() {
          return i._flush(!1);
        }
      }
    }), u || this.animation.start();
  }
  return r.prototype.add = function(t) {
    this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }, r.prototype.remove = function(t) {
    this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
  }, r.prototype.configLayer = function(t, e) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(t, e), this.refresh());
  }, r.prototype.setBackgroundColor = function(t) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = px(t));
  }, r.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, r.prototype.setDarkMode = function(t) {
    this._darkMode = t;
  }, r.prototype.isDarkMode = function() {
    return this._darkMode;
  }, r.prototype.refreshImmediately = function(t) {
    this._disposed || this._refresh({
      animUpdate: !t,
      refresh: !0,
      refreshHover: !1
    });
  }, r.prototype._refresh = function(t) {
    t.animUpdate && this.animation.update(!0), this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh({
      refresh: t.refresh,
      refreshHover: t.refreshHover
    }), this._needsRefresh = this._needsRefreshHover = !1;
  }, r.prototype.refresh = function() {
    this._disposed || (this._needsRefresh = !0, this.animation.start());
  }, r.prototype.flush = function() {
    this._disposed || this._flush(!0);
  }, r.prototype._flush = function(t) {
    var e, n = ni(), i = this._needsRefresh, a = this._needsRefreshHover;
    (i || a) && (e = !0, this._refresh({
      animUpdate: t,
      refresh: i,
      refreshHover: a
    }));
    var o = ni();
    e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: o - n
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, r.prototype.setSleepAfterStill = function(t) {
    this._sleepAfterStill = t;
  }, r.prototype.wakeUp = function() {
    this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
  }, r.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, r.prototype.refreshHoverImmediately = function() {
    this._disposed || this._refresh({
      animUpdate: !1,
      refresh: !1,
      refreshHover: !0
    });
  }, r.prototype.resize = function(t) {
    this._disposed || (t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize());
  }, r.prototype.clearAnimation = function() {
    this._disposed || this.animation.clear();
  }, r.prototype.getWidth = function() {
    if (!this._disposed)
      return this.painter.getWidth();
  }, r.prototype.getHeight = function() {
    if (!this._disposed)
      return this.painter.getHeight();
  }, r.prototype.setCursorStyle = function(t) {
    this._disposed || this.handler.setCursorStyle(t);
  }, r.prototype.findHover = function(t, e) {
    if (!this._disposed)
      return this.handler.findHover(t, e);
  }, r.prototype.on = function(t, e, n) {
    return this._disposed || this.handler.on(t, e, n), this;
  }, r.prototype.off = function(t, e) {
    this._disposed || this.handler.off(t, e);
  }, r.prototype.trigger = function(t, e) {
    this._disposed || this.handler.trigger(t, e);
  }, r.prototype.clear = function() {
    if (!this._disposed) {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof Mt && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, r.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, dx(this.id));
  }, r;
})();
function ud(r, t) {
  var e = new gx(Jm(), r, t);
  return wy[e.id] = e, e;
}
function mx(r, t) {
  hs[r] = t;
}
var ld = 1e-4, Ty = 20;
function yx(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
var ae = Math.min, gt = Math.max, Pt = Math.abs, lr = Math.round, Cn = Math.floor, Ri = Math.ceil, Ei = Math.pow, La = Math.log, Yf = Math.LN10, _x = Math.PI, Sx = Math.random;
function It(r, t, e, n) {
  var i = t[0], a = t[1], o = e[0], s = e[1], u = a - i, l = s - o;
  if (u === 0)
    return l === 0 ? o : (o + s) / 2;
  if (n)
    if (u > 0) {
      if (r <= i)
        return o;
      if (r >= a)
        return s;
    } else {
      if (r >= i)
        return o;
      if (r <= a)
        return s;
    }
  else {
    if (r === i)
      return o;
    if (r === a)
      return s;
  }
  return (r - i) / u * l + o;
}
var ye = bx;
function bx(r, t, e) {
  switch (r) {
    case "center":
    case "middle":
      r = "50%";
      break;
    case "left":
    case "top":
      r = "0%";
      break;
    case "right":
    case "bottom":
      r = "100%";
      break;
  }
  return Zf(r, t, e);
}
function Zf(r, t, e) {
  return V(r) ? xx(r) ? parseFloat(r) / 100 * t + (e || 0) : parseFloat(r) : r == null ? NaN : +r;
}
function xx(r) {
  return !!yx(r).match(/%$/);
}
function st(r, t, e) {
  return isNaN(t) ? e ? "" + r : +r : (t = ae(gt(0, t), Ty), r = (+r).toFixed(t), e ? r : +r);
}
function Cr(r) {
  return r.sort(function(t, e) {
    return t - e;
  }), r;
}
function Mr(r) {
  if (r = +r, isNaN(r))
    return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (lr(r * t) / t === r)
        return e;
  }
  return Tx(r);
}
function Tx(r) {
  var t = r.toString().toLowerCase(), e = t.indexOf("e"), n = e > 0 ? +t.slice(e + 1) : 0, i = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
  return gt(0, o - n);
}
function rv(r, t, e) {
  var n = Pt(r[1] - r[0]);
  if (!isFinite(n) || n === 0)
    return NaN;
  var i = La(2 * Pt(e || 1) * Pt(n)) / Yf, a = La(Pt(t)) / Yf, o = gt(0, Ri(-i + a));
  return isFinite(o) || (o = NaN), o;
}
function cn(r, t) {
  var e = gt(Mr(r), Mr(t)), n = r + t;
  return e > Ty ? n : st(n, e);
}
var fd = Ei(2, 53) - 1;
function Cy(r) {
  var t = _x * 2;
  return (r % t + t) % t;
}
function Ns(r) {
  return r > -ld && r < ld;
}
var Cx = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Oi(r) {
  if (r instanceof Date)
    return r;
  if (V(r)) {
    var t = Cx.exec(r);
    if (!t)
      return /* @__PURE__ */ new Date(NaN);
    if (t[8]) {
      var e = +t[4] || 0;
      return t[8].toUpperCase() !== "Z" && (e -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, e, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
    } else
      return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
  } else if (r == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(lr(r));
}
function My(r) {
  return Ei(10, nv(r));
}
function nv(r) {
  if (r === 0)
    return 0;
  var t = Cn(La(r) / Yf);
  return r / Ei(10, t) >= 10 && t++, t;
}
var Dy = 2;
function iv(r, t) {
  var e = nv(r), n = Ei(10, e), i = r / n, a;
  return t === Dy ? a = 1 : t ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, r = a * n, st(r, -e);
}
function Fs(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !V(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function Mx(r) {
  return !isNaN(Fs(r));
}
function av() {
  return lr(Sx() * 9);
}
function Ay(r, t) {
  return t === 0 ? r : Ay(t, r % t);
}
function hd(r, t) {
  return r == null ? t : t == null ? r : r * t / Ay(r, t);
}
function Ke(r) {
  return r != null && isFinite(r);
}
var Dx = "[ECharts] ", Ax = typeof console < "u" && console.warn && console.log;
function Ix(r, t, e) {
  Ax && console[r](Dx + t);
}
function Iy(r, t) {
  Ix("error", r);
}
function Qt(r) {
  throw new Error(r);
}
function vd(r, t, e) {
  return (t - r) * e + r;
}
var Ly = "series\0", Py = "\0_ec_\0";
function Xt(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function cd(r, t, e) {
  if (r) {
    r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
    for (var n = 0, i = e.length; n < i; n++) {
      var a = e[n];
      !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var dd = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function ja(r) {
  return Z(r) && !z(r) && !(r instanceof Date) ? r.value : r;
}
function Lx(r) {
  return Z(r) && !(r instanceof Array);
}
function Px(r, t, e) {
  var n = e === "normalMerge", i = e === "replaceMerge", a = e === "replaceAll";
  r = r || [], t = (t || []).slice();
  var o = Y();
  T(t, function(u, l) {
    if (!Z(u)) {
      t[l] = null;
      return;
    }
  });
  var s = Rx(r, o, e);
  return (n || i) && Ex(s, r, o, t), n && Ox(s, t), n || i ? kx(s, t, i) : a && Bx(s, t), Nx(s), s;
}
function Rx(r, t, e) {
  var n = [];
  if (e === "replaceAll")
    return n;
  for (var i = 0; i < r.length; i++) {
    var a = r[i];
    a && a.id != null && t.set(a.id, i), n.push({
      existing: e === "replaceMerge" || Pa(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return n;
}
function Ex(r, t, e, n) {
  T(n, function(i, a) {
    if (!(!i || i.id == null)) {
      var o = ya(i.id), s = e.get(o);
      if (s != null) {
        var u = r[s];
        qe(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = i, u.existing = t[s], n[a] = null;
      }
    }
  });
}
function Ox(r, t) {
  T(t, function(e, n) {
    if (!(!e || e.name == null))
      for (var i = 0; i < r.length; i++) {
        var a = r[i].existing;
        if (!r[i].newOption && a && (a.id == null || e.id == null) && !Pa(e) && !Pa(a) && Ry("name", a, e)) {
          r[i].newOption = e, t[n] = null;
          return;
        }
      }
  });
}
function kx(r, t, e) {
  T(t, function(n) {
    if (n) {
      for (
        var i, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (i = r[a]) && (i.newOption || Pa(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        i.existing && n.id != null && !Ry("id", n, i.existing));
      )
        a++;
      i ? (i.newOption = n, i.brandNew = e) : r.push({
        newOption: n,
        brandNew: e,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function Bx(r, t) {
  T(t, function(e) {
    r.push({
      newOption: e,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function Nx(r) {
  var t = Y();
  T(r, function(e) {
    var n = e.existing;
    n && t.set(n.id, e);
  }), T(r, function(e) {
    var n = e.newOption;
    qe(!n || n.id == null || !t.get(n.id) || t.get(n.id) === e, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, e), !e.keyInfo && (e.keyInfo = {});
  }), T(r, function(e, n) {
    var i = e.existing, a = e.newOption, o = e.keyInfo;
    if (Z(a)) {
      if (o.name = a.name != null ? ya(a.name) : i ? i.name : Ly + n, i)
        o.id = ya(i.id);
      else if (a.id != null)
        o.id = ya(a.id);
      else {
        var s = 0;
        do
          o.id = "\0" + o.name + "\0" + s++;
        while (t.get(o.id));
      }
      t.set(o.id, e);
    }
  });
}
function Ry(r, t, e) {
  var n = Ze(t[r], null), i = Ze(e[r], null);
  return n != null && i != null && n === i;
}
function ya(r) {
  return Ze(r, "");
}
function Ze(r, t) {
  return r == null ? t : V(r) ? r : wt(r) || wf(r) ? r + "" : t;
}
function ov(r) {
  var t = r.name;
  return !!(t && t.indexOf(Ly));
}
function Pa(r) {
  return r && r.id != null && ya(r.id).indexOf(Py) === 0;
}
function Fx(r) {
  return Py + r;
}
function zx(r, t, e) {
  T(r, function(n) {
    var i = n.newOption;
    Z(i) && (n.keyInfo.mainType = t, n.keyInfo.subType = Hx(t, i, n.existing, e));
  });
}
function Hx(r, t, e, n) {
  var i = t.type ? t.type : e ? e.subType : n.determineSubType(r, t);
  return i;
}
function Mn(r, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return z(t.dataIndex) ? U(t.dataIndex, function(e) {
      return r.indexOfRawIndex(e);
    }) : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return z(t.name) ? U(t.name, function(e) {
      return r.indexOfName(e);
    }) : r.indexOfName(t.name);
}
function vt() {
  var r = "__ec_inner_" + Vx++;
  return function(t) {
    return t[r] || (t[r] = {});
  };
}
var Vx = av();
function _a(r, t, e) {
  var n = sv(t, e), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, u = e ? e.defaultMainType : null;
  return !i && u && a.set(u, {}), a.each(function(l, f) {
    var h = to(r, f, l, {
      useDefault: u === f,
      enableAll: e && e.enableAll != null ? e.enableAll : !0,
      enableNone: e && e.enableNone != null ? e.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function sv(r, t) {
  var e;
  if (V(r)) {
    var n = {};
    n[r + "Index"] = 0, e = n;
  } else
    e = r;
  var i = Y(), a = {}, o = !1;
  return T(e, function(s, u) {
    if (u === "dataIndex" || u === "dataIndexInside") {
      a[u] = s;
      return;
    }
    var l = u.match(/^(\w+)(Index|Id|Name)$/) || [], f = l[1], h = (l[2] || "").toLowerCase();
    if (!(!f || !h || t && t.includeMainTypes && ot(t.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var v = i.get(f) || i.set(f, {});
      v[h] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: i,
    others: a
  };
}
var Vt = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
}, Gx = {
  useDefault: !1,
  enableAll: !0,
  enableNone: !0
};
function to(r, t, e, n) {
  n = n || Vt;
  var i = e.index, a = e.id, o = e.name, s = {
    models: null,
    specified: i != null || a != null || o != null
  };
  if (!s.specified) {
    var u = void 0;
    return s.models = n.useDefault && (u = r.getComponent(t)) ? [u] : [], s;
  }
  if (i === "none" || i === !1) {
    if (n.enableNone)
      return s.models = [], s;
    i = -1;
  }
  return i === "all" && (n.enableAll ? i = a = o = null : i = -1), s.models = r.queryComponents({
    mainType: t,
    index: i,
    id: a,
    name: o
  }), s;
}
function Ux(r, t, e) {
  var n = {};
  n[t + "Id"] = r[t + "Id"], n[t + "Index"] = r[t + "Index"], n[t + "Name"] = r[t + "Name"];
  var i = {
    mainType: t,
    query: n
  };
  return e && (i.subType = e), i;
}
function Ey(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
}
function Wx(r, t) {
  return r.getAttribute ? r.getAttribute(t) : r[t];
}
function Yx(r) {
  return r === "auto" ? et.domSupported ? "html" : "richText" : r || "html";
}
function Zx(r, t, e, n, i) {
  var a = t == null || t === "auto";
  if (n == null)
    return n;
  if (wt(n)) {
    var o = vd(e || 0, n, i);
    return st(o, a ? Math.max(Mr(e || 0), Mr(n)) : t);
  } else {
    if (V(n))
      return i < 1 ? e : n;
    for (var s = [], u = e, l = n, f = Math.max(u ? u.length : 0, l.length), h = 0; h < f; ++h) {
      var v = r.getDimensionInfo(h);
      if (v && v.type === "ordinal")
        s[h] = (i < 1 && u ? u : l)[h];
      else {
        var c = u && u[h] ? u[h] : 0, d = l[h], o = vd(c, d, i);
        s[h] = st(o, a ? Math.max(Mr(c), Mr(d)) : t);
      }
    }
    return s;
  }
}
function Jt() {
  return [1 / 0, -1 / 0];
}
function Xf(r, t) {
  fr(t) && (t < r[0] && (r[0] = t), t > r[1] && (r[1] = t));
}
function Oy(r, t) {
  fr(t) && t < r[0] && (r[0] = t);
}
function ky(r, t) {
  fr(t) && t > r[1] && (r[1] = t);
}
function Xx(r, t) {
  Si(t[0], t[1]) && (t[0] < r[0] && (r[0] = t[0]), t[1] > r[1] && (r[1] = t[1]));
}
function fr(r) {
  return r != null && isFinite(r);
}
function Si(r, t) {
  return fr(r) && fr(t) && r <= t;
}
function $x(r) {
  var t = r[1] - r[0];
  return isFinite(t) && t >= 0;
}
function vs(r) {
  Si(r[0], r[1]) && r[0] > r[1] && (r[0] = r[1]);
}
function By() {
  var r = "__ec_once_" + qx++;
  return function(t, e) {
    ee(t, r) || (t[r] = 1, e());
  };
}
var qx = av();
function uv(r, t, e) {
  var n = Y(), i = 0;
  T(r, function(a) {
    var o = t(a), s = n.get(o) || 0;
    e && e(a, s), !s && !e && (r[i++] = a), n.set(o, s + 1);
  }), e || (r.length = i);
}
function Kx(r) {
  return r.value + "";
}
function Qx(r) {
  return r + "";
}
function Jx(r, t, e) {
  var n = r.getData().count();
  return {
    progressiveRender: e.progressiveEnabled && t.incrementalPrepareRender && n >= e.threshold,
    large: r.get("large") && n >= r.get("largeThreshold"),
    // TODO: modDataCount should not updated if `appendData`, otherwise cause whole repaint.
    // see `test/candlestick-large3.html`
    modDataCount: r.get("progressiveChunkMode") === "mod" ? r.getData().count() : null
  };
}
function lv(r) {
  return {
    overallReset: r
  };
}
var jx = ".", $r = "___EC__COMPONENT__CONTAINER___", Ny = "___EC__EXTENDED_CLASS___";
function Ge(r) {
  var t = {
    main: "",
    sub: ""
  };
  if (r) {
    var e = r.split(jx);
    t.main = e[0] || "", t.sub = e[1] || "";
  }
  return t;
}
function tw(r) {
  qe(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
}
function ew(r) {
  return !!(r && r[Ny]);
}
function fv(r, t) {
  r.$constructor = r, r.extend = function(e) {
    var n = this, i;
    return rw(n) ? i = /** @class */
    (function(a) {
      k(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    })(n) : (i = function() {
      (e.$constructor || n).apply(this, arguments);
    }, WS(i, this)), B(i.prototype, e), i[Ny] = !0, i.extend = this.extend, i.superCall = aw, i.superApply = ow, i.superClass = n, i;
  };
}
function rw(r) {
  return Q(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function Fy(r, t) {
  r.extend = t.extend;
}
var nw = Math.round(Math.random() * 10);
function iw(r) {
  var t = ["__\0is_clz", nw++].join("_");
  r.prototype[t] = !0, r.isInstance = function(e) {
    return !!(e && e[t]);
  };
}
function aw(r, t) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  return this.superClass.prototype[t].apply(r, e);
}
function ow(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function xu(r) {
  var t = {};
  r.registerClass = function(n) {
    var i = n.type || n.prototype.type;
    if (i) {
      tw(i), n.prototype.type = i;
      var a = Ge(i);
      if (!a.sub)
        t[a.main] = n;
      else if (a.sub !== $r) {
        var o = e(a);
        o[a.sub] = n;
      }
    }
    return n;
  }, r.getClass = function(n, i, a) {
    var o = t[n];
    if (o && o[$r] && (o = i ? o[i] : null), a && !o)
      throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
    return o;
  }, r.getClassesByMainType = function(n) {
    var i = Ge(n), a = [], o = t[i.main];
    return o && o[$r] ? T(o, function(s, u) {
      u !== $r && a.push(s);
    }) : a.push(o), a;
  }, r.hasClass = function(n) {
    var i = Ge(n);
    return !!t[i.main];
  }, r.getAllClassMainTypes = function() {
    var n = [];
    return T(t, function(i, a) {
      n.push(a);
    }), n;
  }, r.hasSubTypes = function(n) {
    var i = Ge(n), a = t[i.main];
    return a && a[$r];
  };
  function e(n) {
    var i = t[n.main];
    return (!i || !i[$r]) && (i = t[n.main] = {}, i[$r] = !0), i;
  }
}
function Ra(r, t) {
  for (var e = 0; e < r.length; e++)
    r[e][1] || (r[e][1] = r[e][0]);
  return t = t || !1, function(n, i, a) {
    for (var o = {}, s = 0; s < r.length; s++) {
      var u = r[s][1];
      if (!(i && ot(i, u) >= 0 || a && ot(a, u) < 0)) {
        var l = n.getShallow(u, t);
        l != null && (o[r[s][0]] = l);
      }
    }
    return o;
  };
}
var sw = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], uw = Ra(sw), lw = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getAreaStyle = function(t, e) {
      return uw(this, t, e);
    }, r;
  })()
), $f = new mi(50);
function fw(r) {
  if (typeof r == "string") {
    var t = $f.get(r);
    return t && t.image;
  } else
    return r;
}
function zy(r, t, e, n, i) {
  if (r)
    if (typeof r == "string") {
      if (t && t.__zrImageSrc === r || !e)
        return t;
      var a = $f.get(r), o = { hostEl: e, cb: n, cbPayload: i };
      return a ? (t = a.image, !wu(t) && a.pending.push(o)) : (t = ue.loadImage(r, pd, pd), t.__zrImageSrc = r, $f.put(r, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return r;
  else return t;
}
function pd() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t], n = e.cb;
    n && n(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function wu(r) {
  return r && r.width && r.height;
}
var _l = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function hw(r, t, e, n, i, a) {
  if (!e) {
    r.text = "", r.isTruncated = !1;
    return;
  }
  var o = (t + "").split(`
`);
  a = Hy(e, n, i, a);
  for (var s = !1, u = {}, l = 0, f = o.length; l < f; l++)
    Vy(u, o[l], a), o[l] = u.textLine, s = s || u.isTruncated;
  r.text = o.join(`
`), r.isTruncated = s;
}
function Hy(r, t, e, n) {
  n = n || {};
  var i = B({}, n);
  e = X(e, "..."), i.maxIterations = X(n.maxIterations, 2);
  var a = i.minChar = X(n.minChar, 0), o = i.fontMeasureInfo = We(t), s = o.asciiCharWidth;
  i.placeholder = X(n.placeholder, "");
  for (var u = r = Math.max(0, r - 1), l = 0; l < a && u >= s; l++)
    u -= s;
  var f = Ye(o, e);
  return f > u && (e = "", f = 0), u = r - f, i.ellipsis = e, i.ellipsisWidth = f, i.contentWidth = u, i.containerWidth = r, i;
}
function Vy(r, t, e) {
  var n = e.containerWidth, i = e.contentWidth, a = e.fontMeasureInfo;
  if (!n) {
    r.textLine = "", r.isTruncated = !1;
    return;
  }
  var o = Ye(a, t);
  if (o <= n) {
    r.textLine = t, r.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= i || s >= e.maxIterations) {
      t += e.ellipsis;
      break;
    }
    var u = s === 0 ? vw(t, i, a) : o > 0 ? Math.floor(t.length * i / o) : 0;
    t = t.substr(0, u), o = Ye(a, t);
  }
  t === "" && (t = e.placeholder), r.textLine = t, r.isTruncated = !0;
}
function vw(r, t, e) {
  for (var n = 0, i = 0, a = r.length; i < a && n < t; i++)
    n += Sy(e, r.charCodeAt(i));
  return i;
}
function cw(r, t, e, n) {
  var i = hv(r), a = t.overflow, o = t.padding, s = o ? o[1] + o[3] : 0, u = o ? o[0] + o[2] : 0, l = t.font, f = a === "truncate", h = _u(l), v = X(t.lineHeight, h), c = t.lineOverflow === "truncate", d = !1, p = t.width;
  p == null && e != null && (p = e - s);
  var m = t.height;
  m == null && n != null && (m = n - u);
  var g;
  p != null && (a === "break" || a === "breakAll") ? g = i ? Gy(i, t.font, p, a === "breakAll", 0).lines : [] : g = i ? i.split(`
`) : [];
  var y = g.length * v;
  if (m == null && (m = y), y > m && c) {
    var _ = Math.floor(m / v);
    d = d || g.length > _, g = g.slice(0, _), y = g.length * v;
  }
  if (i && f && p != null)
    for (var S = Hy(p, l, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), b = {}, x = 0; x < g.length; x++)
      Vy(b, g[x], S), g[x] = b.textLine, d = d || b.isTruncated;
  for (var w = m, D = 0, C = We(l), x = 0; x < g.length; x++)
    D = Math.max(Ye(C, g[x]), D);
  p == null && (p = D);
  var M = p;
  return w += u, M += s, {
    lines: g,
    height: m,
    outerWidth: M,
    outerHeight: w,
    lineHeight: v,
    calculatedLineHeight: h,
    contentWidth: D,
    contentHeight: y,
    width: p,
    isTruncated: d
  };
}
var dw = /* @__PURE__ */ (function() {
  function r() {
  }
  return r;
})(), gd = /* @__PURE__ */ (function() {
  function r(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return r;
})(), pw = /* @__PURE__ */ (function() {
  function r() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return r;
})();
function gw(r, t, e, n, i) {
  var a = new pw(), o = hv(r);
  if (!o)
    return a;
  var s = t.padding, u = s ? s[1] + s[3] : 0, l = s ? s[0] + s[2] : 0, f = t.width;
  f == null && e != null && (f = e - u);
  var h = t.height;
  h == null && n != null && (h = n - l);
  for (var v = t.overflow, c = (v === "break" || v === "breakAll") && f != null ? { width: f, accumWidth: 0, breakAll: v === "breakAll" } : null, d = _l.lastIndex = 0, p; (p = _l.exec(o)) != null; ) {
    var m = p.index;
    m > d && Sl(a, o.substring(d, m), t, c), Sl(a, p[2], t, c, p[1]), d = _l.lastIndex;
  }
  d < o.length && Sl(a, o.substring(d, o.length), t, c);
  var g = [], y = 0, _ = 0, S = v === "truncate", b = t.lineOverflow === "truncate", x = {};
  function w(lt, Ut, Me) {
    lt.width = Ut, lt.lineHeight = Me, y += Me, _ = Math.max(_, Ut);
  }
  t: for (var D = 0; D < a.lines.length; D++) {
    for (var C = a.lines[D], M = 0, A = 0, L = 0; L < C.tokens.length; L++) {
      var I = C.tokens[L], P = I.styleName && t.rich[I.styleName] || {}, E = I.textPadding = P.padding, R = E ? E[1] + E[3] : 0, F = I.font = P.font || t.font;
      I.contentHeight = _u(F);
      var G = X(P.height, I.contentHeight);
      if (I.innerHeight = G, E && (G += E[0] + E[2]), I.height = G, I.lineHeight = si(P.lineHeight, t.lineHeight, G), I.align = P && P.align || i, I.verticalAlign = P && P.verticalAlign || "middle", b && h != null && y + I.lineHeight > h) {
        var W = a.lines.length;
        L > 0 ? (C.tokens = C.tokens.slice(0, L), w(C, A, M), a.lines = a.lines.slice(0, D + 1)) : a.lines = a.lines.slice(0, D), a.isTruncated = a.isTruncated || a.lines.length < W;
        break t;
      }
      var J = P.width, q = J == null || J === "auto";
      if (typeof J == "string" && J.charAt(J.length - 1) === "%")
        I.percentWidth = J, g.push(I), I.contentWidth = Ye(We(F), I.text);
      else {
        if (q) {
          var rt = P.backgroundColor, $ = rt && rt.image;
          $ && ($ = fw($), wu($) && (I.width = Math.max(I.width, $.width * G / $.height)));
        }
        var H = S && f != null ? f - A : null;
        H != null && H < I.width ? !q || H < R ? (I.text = "", I.width = I.contentWidth = 0) : (hw(x, I.text, H - R, F, t.ellipsis, { minChar: t.truncateMinChar }), I.text = x.text, a.isTruncated = a.isTruncated || x.isTruncated, I.width = I.contentWidth = Ye(We(F), I.text)) : I.contentWidth = Ye(We(F), I.text);
      }
      I.width += R, A += I.width, P && (M = Math.max(M, I.lineHeight));
    }
    w(C, A, M);
  }
  a.outerWidth = a.width = X(f, _), a.outerHeight = a.height = X(h, y), a.contentHeight = y, a.contentWidth = _, a.outerWidth += u, a.outerHeight += l;
  for (var D = 0; D < g.length; D++) {
    var I = g[D], it = I.percentWidth;
    I.width = parseInt(it, 10) / 100 * a.width;
  }
  return a;
}
function Sl(r, t, e, n, i) {
  var a = t === "", o = i && e.rich[i] || {}, s = r.lines, u = o.font || e.font, l = !1, f, h;
  if (n) {
    var v = o.padding, c = v ? v[1] + v[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = _i(o.width, n.width) + c;
      s.length > 0 && d + n.accumWidth > n.width && (f = t.split(`
`), l = !0), n.accumWidth = d;
    } else {
      var p = Gy(t, u, n.width, n.breakAll, n.accumWidth);
      n.accumWidth = p.accumWidth + c, h = p.linesWidths, f = p.lines;
    }
  }
  f || (f = t.split(`
`));
  for (var m = We(u), g = 0; g < f.length; g++) {
    var y = f[g], _ = new dw();
    if (_.styleName = i, _.text = y, _.isLineHolder = !y && !a, typeof o.width == "number" ? _.width = o.width : _.width = h ? h[g] : Ye(m, y), !g && !l) {
      var S = (s[s.length - 1] || (s[0] = new gd())).tokens, b = S.length;
      b === 1 && S[0].isLineHolder ? S[0] = _ : (y || !b || a) && S.push(_);
    } else
      s.push(new gd([_]));
  }
}
function mw(r) {
  var t = r.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var yw = Li(",&?/;] ".split(""), function(r, t) {
  return r[t] = !0, r;
}, {});
function _w(r) {
  return mw(r) ? !!yw[r] : !0;
}
function Gy(r, t, e, n, i) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = We(t), v = 0; v < r.length; v++) {
    var c = r.charAt(v);
    if (c === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var d = Sy(h, c.charCodeAt(0)), p = n ? !1 : !_w(c);
    if (a.length ? f + d > e : i + f + d > e) {
      f ? (s || u) && (p ? (s || (s = u, u = "", l = 0, f = l), a.push(s), o.push(f - l), u += c, l += d, s = "", f = l) : (u && (s += u, u = "", l = 0), a.push(s), o.push(f), s = c, f = d)) : p ? (a.push(u), o.push(l), u = c, l = d) : (a.push(c), o.push(d));
      continue;
    }
    f += d, p ? (u += c, l += d) : (u && (s += u, u = "", l = 0), s += c);
  }
  return u && (s += u), s && (a.push(s), o.push(f)), a.length === 1 && (f += i), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
function md(r, t, e, n, i, a) {
  if (r.baseX = e, r.baseY = n, r.outerWidth = r.outerHeight = null, !!t) {
    var o = t.width * 2, s = t.height * 2;
    j.set(yd, yi(e, o, i), bn(n, s, a), o, s), j.intersect(t, yd, null, _d);
    var u = _d.outIntersectRect;
    r.outerWidth = u.width, r.outerHeight = u.height, r.baseX = yi(u.x, u.width, i, !0), r.baseY = bn(u.y, u.height, a, !0);
  }
}
var yd = new j(0, 0, 0, 0), _d = { outIntersectRect: {}, clamp: !0 };
function hv(r) {
  return r != null ? r += "" : r = "";
}
function Sw(r) {
  var t = hv(r.text), e = r.font, n = Ye(We(e), t), i = _u(e);
  return qf(r, n, i, null);
}
function qf(r, t, e, n) {
  var i = new j(yi(r.x || 0, t, r.textAlign), bn(r.y || 0, e, r.textBaseline), t, e), a = n ?? (Uy(r) ? r.lineWidth : 0);
  return a > 0 && (i.x -= a / 2, i.y -= a / 2, i.width += a, i.height += a), i;
}
function Uy(r) {
  var t = r.stroke;
  return t != null && t !== "none" && r.lineWidth > 0;
}
var Kf = "__zr_style_" + Math.round(Math.random() * 10), xn = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, Tu = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
xn[Kf] = !0;
var Sd = ["z", "z2", "invisible"], bw = ["invisible"], eo = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype._init = function(e) {
    for (var n = xt(e), i = 0; i < n.length; i++) {
      var a = n[i];
      a === "style" ? this.useStyle(e[a]) : r.prototype.attrKV.call(this, a, e[a]);
    }
    this.style || this.useStyle({});
  }, t.prototype.beforeBrush = function(e) {
  }, t.prototype.afterBrush = function() {
  }, t.prototype.innerBeforeBrush = function() {
  }, t.prototype.innerAfterBrush = function() {
  }, t.prototype.shouldBePainted = function(e, n, i, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && xw(this, e, n) || o && !o[0] && !o[3])
      return !1;
    if (i && this.__clipPaths && this.__clipPaths.length) {
      for (var s = 0; s < this.__clipPaths.length; ++s)
        if (this.__clipPaths[s].isZeroArea())
          return !1;
    }
    if (a && this.parent)
      for (var u = this.parent; u; ) {
        if (u.ignore)
          return !1;
        u = u.parent;
      }
    return !0;
  }, t.prototype.contain = function(e, n) {
    return this.rectContain(e, n);
  }, t.prototype.traverse = function(e, n) {
    e.call(n, this);
  }, t.prototype.rectContain = function(e, n) {
    var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect();
    return a.contain(i[0], i[1]);
  }, t.prototype.getPaintRect = function() {
    var e = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var n = this.transform, i = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, u = a.shadowOffsetY || 0;
      e = this._paintRect || (this._paintRect = new j(0, 0, 0, 0)), n ? j.applyTransform(e, i, n) : e.copy(i), (o || s || u) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(u), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + u - o));
      var l = this.dirtyRectTolerance;
      e.isZero() || (e.x = Math.floor(e.x - l), e.y = Math.floor(e.y - l), e.width = Math.ceil(e.width + 1 + l * 2), e.height = Math.ceil(e.height + 1 + l * 2));
    }
    return e;
  }, t.prototype.setPrevPaintRect = function(e) {
    e ? (this._prevPaintRect = this._prevPaintRect || new j(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(e) {
    return this.animate("style", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(e, n) {
    e !== "style" ? r.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n);
  }, t.prototype.setStyle = function(e, n) {
    return typeof e == "string" ? this.style[e] = n : B(this.style, e), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(e) {
    e || this.markRedraw(), this.__dirty |= ua, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & ua);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~ua;
  }, t.prototype.createStyle = function(e) {
    return pu(xn, e);
  }, t.prototype.useStyle = function(e) {
    e[Kf] || (e = this.createStyle(e)), this.style = e, this.dirtyStyle();
  }, t.prototype._useHoverStyle = function(e) {
    this.__hoverStyle = e;
  }, t.prototype.isStyleObject = function(e) {
    return e[Kf];
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var n = this._normalState;
    e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, n, Sd);
  }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
    r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
    var u = !(n && a), l = this.__inHover === Su, f;
    if (n && n.style ? o ? a ? f = n.style : (f = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(f, n.style)) : (f = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(f, n.style)) : u && (f = i.style), f)
      if (o) {
        var h = this.style;
        if (this.style = this.createStyle(u ? {} : h), u)
          for (var v = xt(h), c = 0; c < v.length; c++) {
            var d = v[c];
            d in f && (f[d] = f[d], this.style[d] = h[d]);
          }
        for (var p = xt(f), c = 0; c < p.length; c++) {
          var d = p[c];
          this.style[d] = this.style[d];
        }
        this._transitionState(e, {
          style: f
        }, s, this.getAnimationStyleProps());
      } else
        l ? this._useHoverStyle(f) : this.useStyle(f);
    if (!l)
      for (var m = this.__inHover ? bw : Sd, c = 0; c < m.length; c++) {
        var d = m[c];
        n && n[d] != null ? this[d] = n[d] : u && i[d] != null && (this[d] = i[d]);
      }
  }, t.prototype._mergeStates = function(e) {
    for (var n = r.prototype._mergeStates.call(this, e), i, a = 0; a < e.length; a++) {
      var o = e[a];
      o.style && (i = i || {}, this._mergeStyle(i, o.style));
    }
    return i && (n.style = i), n;
  }, t.prototype._mergeStyle = function(e, n) {
    return B(e, n), e;
  }, t.prototype.getAnimationStyleProps = function() {
    return Tu;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = 0, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = jt | ua;
  })(), t;
})(bu), bl = new j(0, 0, 0, 0), xl = new j(0, 0, 0, 0);
function xw(r, t, e) {
  return bl.copy(r.getBoundingRect()), r.transform && bl.applyTransform(r.transform), xl.width = t, xl.height = e, !bl.intersect(xl);
}
var _e = Math.min, Se = Math.max, wl = Math.sin, Tl = Math.cos, qr = Math.PI * 2, To = Pi(), Co = Pi(), Mo = Pi();
function bd(r, t, e, n, i, a) {
  i[0] = _e(r, e), i[1] = _e(t, n), a[0] = Se(r, e), a[1] = Se(t, n);
}
var xd = [], wd = [];
function ww(r, t, e, n, i, a, o, s, u, l) {
  var f = hy, h = Bt, v = f(r, e, i, o, xd);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var c = 0; c < v; c++) {
    var d = h(r, e, i, o, xd[c]);
    u[0] = _e(d, u[0]), l[0] = Se(d, l[0]);
  }
  v = f(t, n, a, s, wd);
  for (var c = 0; c < v; c++) {
    var p = h(t, n, a, s, wd[c]);
    u[1] = _e(p, u[1]), l[1] = Se(p, l[1]);
  }
  u[0] = _e(r, u[0]), l[0] = Se(r, l[0]), u[0] = _e(o, u[0]), l[0] = Se(o, l[0]), u[1] = _e(t, u[1]), l[1] = Se(t, l[1]), u[1] = _e(s, u[1]), l[1] = Se(s, l[1]);
}
function Tw(r, t, e, n, i, a, o, s) {
  var u = vy, l = Kt, f = Se(_e(u(r, e, i), 1), 0), h = Se(_e(u(t, n, a), 1), 0), v = l(r, e, i, f), c = l(t, n, a, h);
  o[0] = _e(r, i, v), o[1] = _e(t, a, c), s[0] = Se(r, i, v), s[1] = Se(t, a, c);
}
function Cw(r, t, e, n, i, a, o, s, u) {
  var l = ti, f = ei, h = Math.abs(i - a);
  if (h % qr < 1e-4 && h > 1e-4) {
    s[0] = r - e, s[1] = t - n, u[0] = r + e, u[1] = t + n;
    return;
  }
  if (To[0] = Tl(i) * e + r, To[1] = wl(i) * n + t, Co[0] = Tl(a) * e + r, Co[1] = wl(a) * n + t, l(s, To, Co), f(u, To, Co), i = i % qr, i < 0 && (i = i + qr), a = a % qr, a < 0 && (a = a + qr), i > a && !o ? a += qr : i < a && o && (i += qr), o) {
    var v = a;
    a = i, i = v;
  }
  for (var c = 0; c < a; c += Math.PI / 2)
    c > i && (Mo[0] = Tl(c) * e + r, Mo[1] = wl(c) * n + t, l(s, Mo, s), f(u, Mo, u));
}
var dt = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, Kr = [], Qr = [], ke = [], dr = [], Be = [], Ne = [], Cl = Math.min, Ml = Math.max, Jr = Math.cos, jr = Math.sin, er = Math.abs, Qf = Math.PI, xr = Qf * 2, Dl = typeof Float32Array < "u", zi = [];
function Al(r) {
  var t = Math.round(r / Qf * 1e8) / 1e8;
  return t % 2 * Qf;
}
function Mw(r, t) {
  var e = Al(r[0]);
  e < 0 && (e += xr);
  var n = e - r[0], i = r[1];
  i += n, !t && i - e >= xr ? i = e + xr : t && e - i >= xr ? i = e - xr : !t && e > i ? i = e + (xr - Al(e - i)) : t && e < i && (i = e - (xr - Al(i - e))), r[0] = e, r[1] = i;
}
var Dn = (function() {
  function r(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return r.prototype.increaseVersion = function() {
    this._version++;
  }, r.prototype.getVersion = function() {
    return this._version;
  }, r.prototype.setScale = function(t, e, n) {
    n = n || 0, n > 0 && (this._ux = er(n / ks / t) || 0, this._uy = er(n / ks / e) || 0);
  }, r.prototype.setDPR = function(t) {
    this.dpr = t;
  }, r.prototype.setContext = function(t) {
    this._ctx = t;
  }, r.prototype.getContext = function() {
    return this._ctx;
  }, r.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, r.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, r.prototype.moveTo = function(t, e) {
    return this._drawPendingPt(), this.addData(dt.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
  }, r.prototype.lineTo = function(t, e) {
    var n = er(t - this._xi), i = er(e - this._yi), a = n > this._ux || i > this._uy;
    if (this.addData(dt.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
      this._xi = t, this._yi = e, this._pendingPtDist = 0;
    else {
      var o = n * n + i * i;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
    }
    return this;
  }, r.prototype.bezierCurveTo = function(t, e, n, i, a, o) {
    return this._drawPendingPt(), this.addData(dt.C, t, e, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, n, i, a, o), this._xi = a, this._yi = o, this;
  }, r.prototype.quadraticCurveTo = function(t, e, n, i) {
    return this._drawPendingPt(), this.addData(dt.Q, t, e, n, i), this._ctx && this._ctx.quadraticCurveTo(t, e, n, i), this._xi = n, this._yi = i, this;
  }, r.prototype.arc = function(t, e, n, i, a, o) {
    this._drawPendingPt(), zi[0] = i, zi[1] = a, Mw(zi, o), i = zi[0], a = zi[1];
    var s = a - i;
    return this.addData(dt.A, t, e, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, a, o), this._xi = Jr(a) * n + t, this._yi = jr(a) * n + e, this;
  }, r.prototype.arcTo = function(t, e, n, i, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, a), this;
  }, r.prototype.rect = function(t, e, n, i) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, n, i), this.addData(dt.R, t, e, n, i), this;
  }, r.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(dt.Z);
    var t = this._ctx, e = this._x0, n = this._y0;
    return t && t.closePath(), this._xi = e, this._yi = n, this;
  }, r.prototype.fill = function(t) {
    t && t.fill(), this.toStatic();
  }, r.prototype.stroke = function(t) {
    t && t.stroke(), this.toStatic();
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.setData = function(t) {
    if (this._saveData) {
      var e = t.length;
      !(this.data && this.data.length === e) && Dl && (this.data = new Float32Array(e));
      for (var n = 0; n < e; n++)
        this.data[n] = t[n];
      this._len = e;
    }
  }, r.prototype.appendPath = function(t) {
    if (this._saveData) {
      t instanceof Array || (t = [t]);
      for (var e = t.length, n = 0, i = this._len, a = 0; a < e; a++)
        n += t[a].len();
      var o = this.data;
      if (Dl && (o instanceof Float32Array || !o) && (this.data = new Float32Array(i + n), i > 0 && o))
        for (var s = 0; s < i; s++)
          this.data[s] = o[s];
      for (var a = 0; a < e; a++)
        for (var u = t[a].data, s = 0; s < u.length; s++)
          this.data[i++] = u[s];
      this._len = i;
    }
  }, r.prototype.addData = function(t, e, n, i, a, o, s, u, l) {
    if (this._saveData) {
      var f = this.data;
      this._len + arguments.length > f.length && (this._expandData(), f = this.data);
      for (var h = 0; h < arguments.length; h++)
        f[this._len++] = arguments[h];
    }
  }, r.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, r.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var t = [], e = 0; e < this._len; e++)
        t[e] = this.data[e];
      this.data = t;
    }
  }, r.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var t = this.data;
      t instanceof Array && (t.length = this._len, Dl && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, r.prototype.getBoundingRect = function() {
    ke[0] = ke[1] = Be[0] = Be[1] = Number.MAX_VALUE, dr[0] = dr[1] = Ne[0] = Ne[1] = -Number.MAX_VALUE;
    var t = this.data, e = 0, n = 0, i = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], u = o === 1;
      switch (u && (e = t[o], n = t[o + 1], i = e, a = n), s) {
        case dt.M:
          e = i = t[o++], n = a = t[o++], Be[0] = i, Be[1] = a, Ne[0] = i, Ne[1] = a;
          break;
        case dt.L:
          bd(e, n, t[o], t[o + 1], Be, Ne), e = t[o++], n = t[o++];
          break;
        case dt.C:
          ww(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Be, Ne), e = t[o++], n = t[o++];
          break;
        case dt.Q:
          Tw(e, n, t[o++], t[o++], t[o], t[o + 1], Be, Ne), e = t[o++], n = t[o++];
          break;
        case dt.A:
          var l = t[o++], f = t[o++], h = t[o++], v = t[o++], c = t[o++], d = t[o++] + c;
          o += 1;
          var p = !t[o++];
          u && (i = Jr(c) * h + l, a = jr(c) * v + f), Cw(l, f, h, v, c, d, p, Be, Ne), e = Jr(d) * h + l, n = jr(d) * v + f;
          break;
        case dt.R:
          i = e = t[o++], a = n = t[o++];
          var m = t[o++], g = t[o++];
          bd(i, a, i + m, a + g, Be, Ne);
          break;
        case dt.Z:
          e = i, n = a;
          break;
      }
      ti(ke, ke, Be), ei(dr, dr, Ne);
    }
    return o === 0 && (ke[0] = ke[1] = dr[0] = dr[1] = 0), new j(ke[0], ke[1], dr[0] - ke[0], dr[1] - ke[1]);
  }, r.prototype._calculateLength = function() {
    var t = this.data, e = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, h = 0, v = 0; v < e; ) {
      var c = t[v++], d = v === 1;
      d && (a = t[v], o = t[v + 1], s = a, u = o);
      var p = -1;
      switch (c) {
        case dt.M:
          a = s = t[v++], o = u = t[v++];
          break;
        case dt.L: {
          var m = t[v++], g = t[v++], y = m - a, _ = g - o;
          (er(y) > n || er(_) > i || v === e - 1) && (p = Math.sqrt(y * y + _ * _), a = m, o = g);
          break;
        }
        case dt.C: {
          var S = t[v++], b = t[v++], m = t[v++], g = t[v++], x = t[v++], w = t[v++];
          p = Bb(a, o, S, b, m, g, x, w, 10), a = x, o = w;
          break;
        }
        case dt.Q: {
          var S = t[v++], b = t[v++], m = t[v++], g = t[v++];
          p = zb(a, o, S, b, m, g, 10), a = m, o = g;
          break;
        }
        case dt.A:
          var D = t[v++], C = t[v++], M = t[v++], A = t[v++], L = t[v++], I = t[v++], P = I + L;
          v += 1, d && (s = Jr(L) * M + D, u = jr(L) * A + C), p = Ml(M, A) * Cl(xr, Math.abs(I)), a = Jr(P) * M + D, o = jr(P) * A + C;
          break;
        case dt.R: {
          s = a = t[v++], u = o = t[v++];
          var E = t[v++], R = t[v++];
          p = E * 2 + R * 2;
          break;
        }
        case dt.Z: {
          var y = s - a, _ = u - o;
          p = Math.sqrt(y * y + _ * _), a = s, o = u;
          break;
        }
      }
      p >= 0 && (l[h++] = p, f += p);
    }
    return this._pathLen = f, f;
  }, r.prototype.rebuildPath = function(t, e) {
    var n = this.data, i = this._ux, a = this._uy, o = this._len, s, u, l, f, h, v, c = e < 1, d, p, m = 0, g = 0, y, _ = 0, S, b;
    if (!(c && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, p = this._pathLen, y = e * p, !y)))
      t: for (var x = 0; x < o; ) {
        var w = n[x++], D = x === 1;
        switch (D && (l = n[x], f = n[x + 1], s = l, u = f), w !== dt.L && _ > 0 && (t.lineTo(S, b), _ = 0), w) {
          case dt.M:
            s = l = n[x++], u = f = n[x++], t.moveTo(l, f);
            break;
          case dt.L: {
            h = n[x++], v = n[x++];
            var C = er(h - l), M = er(v - f);
            if (C > i || M > a) {
              if (c) {
                var A = d[g++];
                if (m + A > y) {
                  var L = (y - m) / A;
                  t.lineTo(l * (1 - L) + h * L, f * (1 - L) + v * L);
                  break t;
                }
                m += A;
              }
              t.lineTo(h, v), l = h, f = v, _ = 0;
            } else {
              var I = C * C + M * M;
              I > _ && (S = h, b = v, _ = I);
            }
            break;
          }
          case dt.C: {
            var P = n[x++], E = n[x++], R = n[x++], F = n[x++], G = n[x++], W = n[x++];
            if (c) {
              var A = d[g++];
              if (m + A > y) {
                var L = (y - m) / A;
                Rs(l, P, R, G, L, Kr), Rs(f, E, F, W, L, Qr), t.bezierCurveTo(Kr[1], Qr[1], Kr[2], Qr[2], Kr[3], Qr[3]);
                break t;
              }
              m += A;
            }
            t.bezierCurveTo(P, E, R, F, G, W), l = G, f = W;
            break;
          }
          case dt.Q: {
            var P = n[x++], E = n[x++], R = n[x++], F = n[x++];
            if (c) {
              var A = d[g++];
              if (m + A > y) {
                var L = (y - m) / A;
                Es(l, P, R, L, Kr), Es(f, E, F, L, Qr), t.quadraticCurveTo(Kr[1], Qr[1], Kr[2], Qr[2]);
                break t;
              }
              m += A;
            }
            t.quadraticCurveTo(P, E, R, F), l = R, f = F;
            break;
          }
          case dt.A:
            var J = n[x++], q = n[x++], rt = n[x++], $ = n[x++], H = n[x++], it = n[x++], lt = n[x++], Ut = !n[x++], Me = rt > $ ? rt : $, bt = er(rt - $) > 1e-3, Lt = H + it, nt = !1;
            if (c) {
              var A = d[g++];
              m + A > y && (Lt = H + it * (y - m) / A, nt = !0), m += A;
            }
            if (bt && t.ellipse ? t.ellipse(J, q, rt, $, lt, H, Lt, Ut) : t.arc(J, q, Me, H, Lt, Ut), nt)
              break t;
            D && (s = Jr(H) * rt + J, u = jr(H) * $ + q), l = Jr(Lt) * rt + J, f = jr(Lt) * $ + q;
            break;
          case dt.R:
            s = l = n[x], u = f = n[x + 1], h = n[x++], v = n[x++];
            var ft = n[x++], Vr = n[x++];
            if (c) {
              var A = d[g++];
              if (m + A > y) {
                var Wt = y - m;
                t.moveTo(h, v), t.lineTo(h + Cl(Wt, ft), v), Wt -= ft, Wt > 0 && t.lineTo(h + ft, v + Cl(Wt, Vr)), Wt -= Vr, Wt > 0 && t.lineTo(h + Ml(ft - Wt, 0), v + Vr), Wt -= ft, Wt > 0 && t.lineTo(h, v + Ml(Vr - Wt, 0));
                break t;
              }
              m += A;
            }
            t.rect(h, v, ft, Vr);
            break;
          case dt.Z:
            if (c) {
              var A = d[g++];
              if (m + A > y) {
                var L = (y - m) / A;
                t.lineTo(l * (1 - L) + s * L, f * (1 - L) + u * L);
                break t;
              }
              m += A;
            }
            t.closePath(), l = s, f = u;
        }
      }
  }, r.prototype.clone = function() {
    var t = new r(), e = this.data;
    return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t;
  }, r.prototype.canSave = function() {
    return !!this._saveData;
  }, r.CMD = dt, r.initDefaultProps = (function() {
    var t = r.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  })(), r;
})();
function zn(r, t, e, n, i, a, o) {
  if (i === 0)
    return !1;
  var s = i, u = 0, l = r;
  if (o > t + s && o > n + s || o < t - s && o < n - s || a > r + s && a > e + s || a < r - s && a < e - s)
    return !1;
  if (r !== e)
    u = (t - n) / (r - e), l = (r * n - e * t) / (r - e);
  else
    return Math.abs(a - r) <= s / 2;
  var f = u * a - o + l, h = f * f / (u * u + 1);
  return h <= s / 2 * s / 2;
}
function Dw(r, t, e, n, i, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var h = u;
  if (f > t + h && f > n + h && f > a + h && f > s + h || f < t - h && f < n - h && f < a - h && f < s - h || l > r + h && l > e + h && l > i + h && l > o + h || l < r - h && l < e - h && l < i - h && l < o - h)
    return !1;
  var v = kb(r, t, e, n, i, a, o, s, l, f);
  return v <= h / 2;
}
function Aw(r, t, e, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > t + l && u > n + l && u > a + l || u < t - l && u < n - l && u < a - l || s > r + l && s > e + l && s > i + l || s < r - l && s < e - l && s < i - l)
    return !1;
  var f = Fb(r, t, e, n, i, a, s, u);
  return f <= l / 2;
}
var Td = Math.PI * 2;
function Do(r) {
  return r %= Td, r < 0 && (r += Td), r;
}
var Hi = Math.PI * 2;
function Iw(r, t, e, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= r, u -= t;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > e || f + l < e)
    return !1;
  if (Math.abs(n - i) % Hi < 1e-4)
    return !0;
  if (a) {
    var h = n;
    n = Do(i), i = Do(h);
  } else
    n = Do(n), i = Do(i);
  n > i && (i += Hi);
  var v = Math.atan2(u, s);
  return v < 0 && (v += Hi), v >= n && v <= i || v + Hi >= n && v + Hi <= i;
}
function tn(r, t, e, n, i, a) {
  if (a > t && a > n || a < t && a < n || n === t)
    return 0;
  var o = (a - t) / (n - t), s = n < t ? 1 : -1;
  (o === 1 || o === 0) && (s = n < t ? 0.5 : -0.5);
  var u = o * (e - r) + r;
  return u === i ? 1 / 0 : u > i ? s : 0;
}
var pr = Dn.CMD, en = Math.PI * 2, Lw = 1e-4;
function Pw(r, t) {
  return Math.abs(r - t) < Lw;
}
var Yt = [-1, -1, -1], ge = [-1, -1];
function Rw() {
  var r = ge[0];
  ge[0] = ge[1], ge[1] = r;
}
function Ew(r, t, e, n, i, a, o, s, u, l) {
  if (l > t && l > n && l > a && l > s || l < t && l < n && l < a && l < s)
    return 0;
  var f = Ps(t, n, a, s, l, Yt);
  if (f === 0)
    return 0;
  for (var h = 0, v = -1, c = void 0, d = void 0, p = 0; p < f; p++) {
    var m = Yt[p], g = m === 0 || m === 1 ? 0.5 : 1, y = Bt(r, e, i, o, m);
    y < u || (v < 0 && (v = hy(t, n, a, s, ge), ge[1] < ge[0] && v > 1 && Rw(), c = Bt(t, n, a, s, ge[0]), v > 1 && (d = Bt(t, n, a, s, ge[1]))), v === 2 ? m < ge[0] ? h += c < t ? g : -g : m < ge[1] ? h += d < c ? g : -g : h += s < d ? g : -g : m < ge[0] ? h += c < t ? g : -g : h += s < c ? g : -g);
  }
  return h;
}
function Ow(r, t, e, n, i, a, o, s) {
  if (s > t && s > n && s > a || s < t && s < n && s < a)
    return 0;
  var u = Nb(t, n, a, s, Yt);
  if (u === 0)
    return 0;
  var l = vy(t, n, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = Kt(t, n, a, l), v = 0; v < u; v++) {
      var c = Yt[v] === 0 || Yt[v] === 1 ? 0.5 : 1, d = Kt(r, e, i, Yt[v]);
      d < o || (Yt[v] < l ? f += h < t ? c : -c : f += a < h ? c : -c);
    }
    return f;
  } else {
    var c = Yt[0] === 0 || Yt[0] === 1 ? 0.5 : 1, d = Kt(r, e, i, Yt[0]);
    return d < o ? 0 : a < t ? c : -c;
  }
}
function kw(r, t, e, n, i, a, o, s) {
  if (s -= t, s > e || s < -e)
    return 0;
  var u = Math.sqrt(e * e - s * s);
  Yt[0] = -u, Yt[1] = u;
  var l = Math.abs(n - i);
  if (l < 1e-4)
    return 0;
  if (l >= en - 1e-4) {
    n = 0, i = en;
    var f = a ? 1 : -1;
    return o >= Yt[0] + r && o <= Yt[1] + r ? f : 0;
  }
  if (n > i) {
    var h = n;
    n = i, i = h;
  }
  n < 0 && (n += en, i += en);
  for (var v = 0, c = 0; c < 2; c++) {
    var d = Yt[c];
    if (d + r > o) {
      var p = Math.atan2(s, d), f = a ? 1 : -1;
      p < 0 && (p = en + p), (p >= n && p <= i || p + en >= n && p + en <= i) && (p > Math.PI / 2 && p < Math.PI * 1.5 && (f = -f), v += f);
    }
  }
  return v;
}
function Wy(r, t, e, n, i) {
  for (var a = r.data, o = r.len(), s = 0, u = 0, l = 0, f = 0, h = 0, v, c, d = 0; d < o; ) {
    var p = a[d++], m = d === 1;
    switch (p === pr.M && d > 1 && (e || (s += tn(u, l, f, h, n, i))), m && (u = a[d], l = a[d + 1], f = u, h = l), p) {
      case pr.M:
        f = a[d++], h = a[d++], u = f, l = h;
        break;
      case pr.L:
        if (e) {
          if (zn(u, l, a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += tn(u, l, a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case pr.C:
        if (e) {
          if (Dw(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += Ew(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case pr.Q:
        if (e) {
          if (Aw(u, l, a[d++], a[d++], a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += Ow(u, l, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case pr.A:
        var g = a[d++], y = a[d++], _ = a[d++], S = a[d++], b = a[d++], x = a[d++];
        d += 1;
        var w = !!(1 - a[d++]);
        v = Math.cos(b) * _ + g, c = Math.sin(b) * S + y, m ? (f = v, h = c) : s += tn(u, l, v, c, n, i);
        var D = (n - g) * S / _ + g;
        if (e) {
          if (Iw(g, y, S, b, b + x, w, t, D, i))
            return !0;
        } else
          s += kw(g, y, S, b, b + x, w, D, i);
        u = Math.cos(b + x) * _ + g, l = Math.sin(b + x) * S + y;
        break;
      case pr.R:
        f = u = a[d++], h = l = a[d++];
        var C = a[d++], M = a[d++];
        if (v = f + C, c = h + M, e) {
          if (zn(f, h, v, h, t, n, i) || zn(v, h, v, c, t, n, i) || zn(v, c, f, c, t, n, i) || zn(f, c, f, h, t, n, i))
            return !0;
        } else
          s += tn(v, h, v, c, n, i), s += tn(f, c, f, h, n, i);
        break;
      case pr.Z:
        if (e) {
          if (zn(u, l, f, h, t, n, i))
            return !0;
        } else
          s += tn(u, l, f, h, n, i);
        u = f, l = h;
        break;
    }
  }
  return !e && !Pw(l, h) && (s += tn(u, l, f, h, n, i) || 0), s !== 0;
}
function Bw(r, t, e) {
  return Wy(r, 0, !1, t, e);
}
function Nw(r, t, e, n) {
  return Wy(r, t, !0, e, n);
}
var Yy = ut({
  fill: "#000",
  stroke: null,
  strokePercent: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
  lineDashOffset: 0,
  lineWidth: 1,
  lineCap: "butt",
  miterLimit: 10,
  strokeNoScale: !1,
  strokeFirst: !1
}, xn), Fw = {
  style: ut({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, Tu.style)
}, Il = yu.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), yt = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.update = function() {
    var e = this;
    r.prototype.update.call(this);
    var n = this.style;
    if (n.decal) {
      var i = this._decalEl = this._decalEl || new t();
      i.buildPath === t.prototype.buildPath && (i.buildPath = function(u) {
        e.buildPath(u, e.shape);
      }), i.silent = !0;
      var a = i.style;
      for (var o in n)
        a[o] !== n[o] && (a[o] = n[o]);
      a.fill = n.fill ? n.decal : null, a.decal = null, a.shadowColor = null, n.strokeFirst && (a.stroke = null);
      for (var s = 0; s < Il.length; ++s)
        i[Il[s]] = this[Il[s]];
      i.__dirty |= jt;
    } else this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(e) {
    var n = xt(e);
    this.shape = this.getDefaultShape();
    var i = this.getDefaultStyle();
    i && this.useStyle(i);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = e[o];
      o === "style" ? this.style ? B(this.style, s) : this.useStyle(s) : o === "shape" ? B(this.shape, s) : r.prototype.attrKV.call(this, o, s);
    }
    this.style || this.useStyle({});
  }, t.prototype.getDefaultStyle = function() {
    return null;
  }, t.prototype.getDefaultShape = function() {
    return {};
  }, t.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, t.prototype.getInsideTextFill = function() {
    var e = this.style.fill;
    if (e !== "none") {
      if (V(e)) {
        var n = Os(e, 0);
        return n > 0.5 ? Uf : n > 0.2 ? ox : Wf;
      } else if (e)
        return Wf;
    }
    return Uf;
  }, t.prototype.getInsideTextStroke = function(e) {
    var n = this.style.fill;
    if (V(n)) {
      var i = this.__zr, a = !!(i && i.isDarkMode()), o = Os(e, 0) < Gf;
      if (a === o)
        return n;
    }
  }, t.prototype.buildPath = function(e, n, i) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~Jn;
  }, t.prototype.getUpdatedPathProxy = function(e) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new Dn(!1);
  }, t.prototype.hasStroke = function() {
    var e = this.style, n = e.stroke;
    return !(n == null || n === "none" || !(e.lineWidth > 0));
  }, t.prototype.hasFill = function() {
    var e = this.style, n = e.fill;
    return n != null && n !== "none";
  }, t.prototype.getBoundingRect = function() {
    var e = this._rect, n = this.style, i = !e;
    if (i) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & Jn) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
    }
    if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = e.clone());
      if (this.__dirty || i) {
        s.copy(e);
        var u = n.strokeNoScale ? this.getLineScale() : 1, l = n.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          l = Math.max(l, f ?? 4);
        }
        u > 1e-10 && (s.width += l / u, s.height += l / u, s.x -= l / u / 2, s.y -= l / u / 2);
      }
      return s;
    }
    return e;
  }, t.prototype.contain = function(e, n) {
    var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect(), o = this.style;
    if (e = i[0], n = i[1], a.contain(e, n)) {
      var s = this.path;
      if (this.hasStroke()) {
        var u = o.lineWidth, l = o.strokeNoScale ? this.getLineScale() : 1;
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), Nw(s, u / l, e, n)))
          return !0;
      }
      if (this.hasFill())
        return Bw(s, e, n);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= Jn, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, t.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, t.prototype.animateShape = function(e) {
    return this.animate("shape", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : e === "shape" ? this.dirtyShape() : this.markRedraw();
  }, t.prototype.attrKV = function(e, n) {
    e === "shape" ? this.setShape(n) : r.prototype.attrKV.call(this, e, n);
  }, t.prototype.setShape = function(e, n) {
    var i = this.shape;
    return i || (i = this.shape = {}), typeof e == "string" ? i[e] = n : B(i, e), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & Jn);
  }, t.prototype.createStyle = function(e) {
    return pu(Yy, e);
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var n = this._normalState;
    e.shape && !n.shape && (n.shape = B({}, this.shape));
  }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
    if (r.prototype._applyStateObj.call(this, e, n, i, a, o, s), this.__inHover !== Su) {
      var u = !(n && a), l;
      if (n && n.shape ? o ? a ? l = n.shape : (l = B({}, i.shape), B(l, n.shape)) : (l = B({}, a ? this.shape : i.shape), B(l, n.shape)) : u && (l = i.shape), l)
        if (o) {
          this.shape = B({}, this.shape);
          for (var f = {}, h = xt(l), v = 0; v < h.length; v++) {
            var c = h[v];
            typeof l[c] == "object" ? this.shape[c] = l[c] : f[c] = l[c];
          }
          this._transitionState(e, {
            shape: f
          }, s);
        } else
          this.shape = l, this.dirtyShape();
    }
  }, t.prototype._mergeStates = function(e) {
    for (var n = r.prototype._mergeStates.call(this, e), i, a = 0; a < e.length; a++) {
      var o = e[a];
      o.shape && (i = i || {}, this._mergeStyle(i, o.shape));
    }
    return i && (n.shape = i), n;
  }, t.prototype.getAnimationStyleProps = function() {
    return Fw;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(e) {
    var n = (function(a) {
      k(o, a);
      function o(s) {
        var u = a.call(this, s) || this;
        return e.init && e.init.call(u, s), u;
      }
      return o.prototype.getDefaultStyle = function() {
        return tt(e.style);
      }, o.prototype.getDefaultShape = function() {
        return tt(e.shape);
      }, o;
    })(t);
    for (var i in e)
      typeof e[i] == "function" && (n.prototype[i] = e[i]);
    return n;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = jt | ua | Jn;
  })(), t;
})(eo), zw = ut({
  strokeFirst: !0,
  font: Er,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, Yy), zs = (function(r) {
  k(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.hasStroke = function() {
    return Uy(this.style);
  }, t.prototype.hasFill = function() {
    var e = this.style, n = e.fill;
    return n != null && n !== "none";
  }, t.prototype.createStyle = function(e) {
    return pu(zw, e);
  }, t.prototype.setBoundingRect = function(e) {
    this._rect = e;
  }, t.prototype.getBoundingRect = function() {
    return this._rect || (this._rect = Sw(this.style)), this._rect;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.dirtyRectTolerance = 10;
  })(), t;
})(eo);
zs.prototype.type = "tspan";
var Hw = ut({
  x: 0,
  y: 0
}, xn), Vw = {
  style: ut({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, Tu.style)
};
function Gw(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var Hr = (function(r) {
  k(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(e) {
    return pu(Hw, e);
  }, t.prototype._getSize = function(e) {
    var n = this.style, i = n[e];
    if (i != null)
      return i;
    var a = Gw(n.image) ? n.image : this.__image;
    if (!a)
      return 0;
    var o = e === "width" ? "height" : "width", s = n[o];
    return s == null ? a[e] : a[e] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return Vw;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    return this._rect || (this._rect = new j(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
})(eo);
Hr.prototype.type = "image";
function Uw(r, t) {
  var e = t.x, n = t.y, i = t.width, a = t.height, o = t.r, s, u, l, f;
  i < 0 && (e = e + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var h;
  s + u > i && (h = s + u, s *= i / h, u *= i / h), l + f > i && (h = l + f, l *= i / h, f *= i / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), r.moveTo(e + s, n), r.lineTo(e + i - u, n), u !== 0 && r.arc(e + i - u, n + u, u, -Math.PI / 2, 0), r.lineTo(e + i, n + a - l), l !== 0 && r.arc(e + i - l, n + a - l, l, 0, Math.PI / 2), r.lineTo(e + f, n + a), f !== 0 && r.arc(e + f, n + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, n + s), s !== 0 && r.arc(e + s, n + s, s, Math.PI, Math.PI * 1.5), r.closePath();
}
var ii = Math.round;
function Zy(r, t, e) {
  if (t) {
    var n = t.x1, i = t.x2, a = t.y1, o = t.y2;
    r.x1 = n, r.x2 = i, r.y1 = a, r.y2 = o;
    var s = e && e.lineWidth;
    return s && (ii(n * 2) === ii(i * 2) && (r.x1 = r.x2 = mn(n, s, !0)), ii(a * 2) === ii(o * 2) && (r.y1 = r.y2 = mn(a, s, !0))), r;
  }
}
function Xy(r, t, e) {
  if (t) {
    var n = t.x, i = t.y, a = t.width, o = t.height;
    r.x = n, r.y = i, r.width = a, r.height = o;
    var s = e && e.lineWidth;
    return s && (r.x = mn(n, s, !0), r.y = mn(i, s, !0), r.width = Math.max(mn(n + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(mn(i + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
  }
}
function mn(r, t, e) {
  if (!t)
    return r;
  var n = ii(r * 2);
  return (n + ii(t)) % 2 === 0 ? n / 2 : (n + (e ? 1 : -1)) / 2;
}
var Ww = /* @__PURE__ */ (function() {
  function r() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return r;
})(), Yw = {}, St = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Ww();
  }, t.prototype.buildPath = function(e, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = Xy(Yw, n, this.style);
      i = u.x, a = u.y, o = u.width, s = u.height, u.r = n.r, n = u;
    } else
      i = n.x, a = n.y, o = n.width, s = n.height;
    n.r ? Uw(e, n) : e.rect(i, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
})(yt);
St.prototype.type = "rect";
var Cd = {
  fill: "#000"
}, Md = 2, Fe = {}, Zw = {
  style: ut({
    fill: !0,
    stroke: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineWidth: !0,
    fontSize: !0,
    lineHeight: !0,
    width: !0,
    height: !0,
    textShadowColor: !0,
    textShadowBlur: !0,
    textShadowOffsetX: !0,
    textShadowOffsetY: !0,
    backgroundColor: !0,
    padding: !0,
    borderColor: !0,
    borderWidth: !0,
    borderRadius: !0
  }, Tu.style)
}, Rt = (function(r) {
  k(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return n.type = "text", n._children = [], n._defaultStyle = Cd, n.attr(e), n;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.update = function() {
    r.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var e = 0; e < this._children.length; e++) {
      var n = this._children[e];
      n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible;
    }
  }, t.prototype.updateTransform = function() {
    var e = this.innerTransformable;
    e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : r.prototype.updateTransform.call(this);
  }, t.prototype.getLocalTransform = function(e) {
    var n = this.innerTransformable;
    return n ? n.getLocalTransform(e) : r.prototype.getLocalTransform.call(this, e);
  }, t.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), r.prototype.getComputedTransform.call(this);
  }, t.prototype._updateSubTexts = function() {
    this._childCursor = 0, Qw(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = e;
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = null;
  }, t.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var e = new j(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
        var s = n[o], u = s.getBoundingRect(), l = s.getLocalTransform(i);
        l ? (e.copy(u), e.applyTransform(l), a = a || e.clone(), a.union(e)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || e;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(e) {
    this._defaultStyle = e || Cd;
  }, t.prototype.setTextContent = function(e) {
  }, t.prototype._mergeStyle = function(e, n) {
    if (!n)
      return e;
    var i = n.rich, a = e.rich || i && {};
    return B(e, n), i && a ? (this._mergeRich(a, i), e.rich = a) : a && (e.rich = a), e;
  }, t.prototype._mergeRich = function(e, n) {
    for (var i = xt(n), a = 0; a < i.length; a++) {
      var o = i[a];
      e[o] = e[o] || {}, B(e[o], n[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return Zw;
  }, t.prototype._getOrCreateChild = function(e) {
    var n = this._children[this._childCursor];
    return (!n || !(n instanceof e)) && (n = new e()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
  }, t.prototype._updatePlainTexts = function() {
    var e = this.style, n = e.font || Er, i = e.padding, a = this._defaultStyle, o = e.x || 0, s = e.y || 0, u = e.align || a.align || "left", l = e.verticalAlign || a.verticalAlign || "top";
    md(Fe, a.overflowRect, o, s, u, l), o = Fe.baseX, s = Fe.baseY;
    var f = Ed(e), h = cw(f, e, Fe.outerWidth, Fe.outerHeight), v = Ll(e), c = !!e.backgroundColor, d = h.outerHeight, p = h.outerWidth, m = h.lines, g = h.lineHeight;
    this.isTruncated = !!h.isTruncated;
    var y = o, _ = bn(s, h.contentHeight, l);
    if (v || i) {
      var S = yi(o, p, u), b = bn(s, d, l);
      v && this._renderBackground(e, e, S, b, p, d);
    }
    _ += g / 2, i && (y = Rd(o, u, i), l === "top" ? _ += i[0] : l === "bottom" && (_ -= i[2]));
    for (var x = 0, w = !1, D = !1, C = Pd("fill" in e ? e.fill : (D = !0, a.fill)), M = Ld("stroke" in e ? e.stroke : !c && (!a.autoStroke || D) ? (x = Md, w = !0, a.stroke) : null), A = e.textShadowBlur > 0, L = 0; L < m.length; L++) {
      var I = this._getOrCreateChild(zs), P = I.createStyle();
      I.useStyle(P), P.text = m[L], P.x = y, P.y = _, P.textAlign = u, P.textBaseline = "middle", P.opacity = e.opacity, P.strokeFirst = !0, A && (P.shadowBlur = e.textShadowBlur || 0, P.shadowColor = e.textShadowColor || "transparent", P.shadowOffsetX = e.textShadowOffsetX || 0, P.shadowOffsetY = e.textShadowOffsetY || 0), P.stroke = M, P.fill = C, M && (P.lineWidth = e.lineWidth || x, P.lineDash = e.lineDash, P.lineDashOffset = e.lineDashOffset || 0), P.font = n, Ad(P, e), _ += g, I.setBoundingRect(qf(P, h.contentWidth, h.calculatedLineHeight, w ? 0 : null));
    }
  }, t.prototype._updateRichTexts = function() {
    var e = this.style, n = this._defaultStyle, i = e.align || n.align, a = e.verticalAlign || n.verticalAlign, o = e.x || 0, s = e.y || 0;
    md(Fe, n.overflowRect, o, s, i, a), o = Fe.baseX, s = Fe.baseY;
    var u = Ed(e), l = gw(u, e, Fe.outerWidth, Fe.outerHeight, i), f = l.width, h = l.outerWidth, v = l.outerHeight, c = e.padding;
    this.isTruncated = !!l.isTruncated;
    var d = yi(o, h, i), p = bn(s, v, a), m = d, g = p;
    c && (m += c[3], g += c[0]);
    var y = m + f;
    Ll(e) && this._renderBackground(e, e, d, p, h, v);
    for (var _ = !!e.backgroundColor, S = 0; S < l.lines.length; S++) {
      for (var b = l.lines[S], x = b.tokens, w = x.length, D = b.lineHeight, C = b.width, M = 0, A = m, L = y, I = w - 1, P = void 0; M < w && (P = x[M], !P.align || P.align === "left"); )
        this._placeToken(P, e, D, g, A, "left", _), C -= P.width, A += P.width, M++;
      for (; I >= 0 && (P = x[I], P.align === "right"); )
        this._placeToken(P, e, D, g, L, "right", _), C -= P.width, L -= P.width, I--;
      for (A += (f - (A - m) - (y - L) - C) / 2; M <= I; )
        P = x[M], this._placeToken(P, e, D, g, A + P.width / 2, "center", _), A += P.width, M++;
      g += D;
    }
  }, t.prototype._placeToken = function(e, n, i, a, o, s, u) {
    var l = n.rich[e.styleName] || {};
    l.text = e.text;
    var f = e.verticalAlign, h = a + i / 2;
    f === "top" ? h = a + e.height / 2 : f === "bottom" && (h = a + i - e.height / 2);
    var v = !e.isLineHolder && Ll(l);
    v && this._renderBackground(l, n, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, h - e.height / 2, e.width, e.height);
    var c = !!l.backgroundColor, d = e.textPadding;
    d && (o = Rd(o, s, d), h -= e.height / 2 - d[0] - e.innerHeight / 2);
    var p = this._getOrCreateChild(zs), m = p.createStyle();
    p.useStyle(m);
    var g = this._defaultStyle, y = !1, _ = 0, S = !1, b = Pd("fill" in l ? l.fill : "fill" in n ? n.fill : (y = !0, g.fill)), x = Ld("stroke" in l ? l.stroke : "stroke" in n ? n.stroke : !c && !u && (!g.autoStroke || y) ? (_ = Md, S = !0, g.stroke) : null), w = l.textShadowBlur > 0 || n.textShadowBlur > 0;
    m.text = e.text, m.x = o, m.y = h, w && (m.shadowBlur = l.textShadowBlur || n.textShadowBlur || 0, m.shadowColor = l.textShadowColor || n.textShadowColor || "transparent", m.shadowOffsetX = l.textShadowOffsetX || n.textShadowOffsetX || 0, m.shadowOffsetY = l.textShadowOffsetY || n.textShadowOffsetY || 0), m.textAlign = s, m.textBaseline = "middle", m.font = e.font || Er, m.opacity = si(l.opacity, n.opacity, 1), Ad(m, l), x && (m.lineWidth = si(l.lineWidth, n.lineWidth, _), m.lineDash = X(l.lineDash, n.lineDash), m.lineDashOffset = n.lineDashOffset || 0, m.stroke = x), b && (m.fill = b), p.setBoundingRect(qf(m, e.contentWidth, e.contentHeight, S ? 0 : null));
  }, t.prototype._renderBackground = function(e, n, i, a, o, s) {
    var u = e.backgroundColor, l = e.borderWidth, f = e.borderColor, h = u && u.image, v = u && !h, c = e.borderRadius, d = this, p, m;
    if (v || e.lineHeight || l && f) {
      p = this._getOrCreateChild(St), p.useStyle(p.createStyle()), p.style.fill = null;
      var g = p.shape;
      g.x = i, g.y = a, g.width = o, g.height = s, g.r = c, p.dirtyShape();
    }
    if (v) {
      var y = p.style;
      y.fill = u || null, y.fillOpacity = X(e.fillOpacity, 1);
    } else if (h) {
      m = this._getOrCreateChild(Hr), m.onload = function() {
        d.dirtyStyle();
      };
      var _ = m.style;
      _.image = u.image, _.x = i, _.y = a, _.width = o, _.height = s;
    }
    if (l && f) {
      var y = p.style;
      y.lineWidth = l, y.stroke = f, y.strokeOpacity = X(e.strokeOpacity, 1), y.lineDash = e.borderDash, y.lineDashOffset = e.borderDashOffset || 0, p.strokeContainThreshold = 0, p.hasFill() && p.hasStroke() && (y.strokeFirst = !0, y.lineWidth *= 2);
    }
    var S = (p || m).style;
    S.shadowBlur = e.shadowBlur || 0, S.shadowColor = e.shadowColor || "transparent", S.shadowOffsetX = e.shadowOffsetX || 0, S.shadowOffsetY = e.shadowOffsetY || 0, S.opacity = si(e.opacity, n.opacity, 1);
  }, t.makeFont = function(e) {
    var n = "";
    return Kw(e) && (n = [
      e.fontStyle,
      e.fontWeight,
      qw(e.fontSize),
      e.fontFamily || "sans-serif"
    ].join(" ")), n && Ve(n) || e.textFont || e.font;
  }, t;
})(eo), Xw = { left: !0, right: 1, center: 1 }, $w = { top: 1, bottom: 1, middle: 1 }, Dd = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function qw(r) {
  return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? Zh + "px" : r + "px";
}
function Ad(r, t) {
  for (var e = 0; e < Dd.length; e++) {
    var n = Dd[e], i = t[n];
    i != null && (r[n] = i);
  }
}
function Kw(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function Qw(r) {
  return Id(r), T(r.rich, Id), r;
}
function Id(r) {
  if (r) {
    r.font = Rt.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"), r.align = t == null || Xw[t] ? t : "left";
    var e = r.verticalAlign;
    e === "center" && (e = "middle"), r.verticalAlign = e == null || $w[e] ? e : "top";
    var n = r.padding;
    n && (r.padding = Qh(r.padding));
  }
}
function Ld(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function Pd(r) {
  return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function Rd(r, t, e) {
  return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
}
function Ed(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function Ll(r) {
  return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
}
var pt = vt(), Jw = function(r, t, e, n) {
  if (n) {
    var i = pt(n);
    i.dataIndex = e, i.dataType = t, i.seriesIndex = r, i.ssrType = "chart", n.type === "group" && n.traverse(function(a) {
      var o = pt(a);
      o.seriesIndex = r, o.dataIndex = e, o.dataType = t, o.ssrType = "chart";
    });
  }
}, ro = "undefined", $y = "series", qy = Y(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), fe = "original", Gt = "arrayRows", Re = "objectRows", je = "keyedColumns", Pr = "typedArray", Ky = "unknown", Xe = "column", En = "row", jw = [
  "getDom",
  "getZr",
  "getWidth",
  "getHeight",
  "getDevicePixelRatio",
  "dispatchAction",
  "isSSR",
  "isDisposed",
  "on",
  "off",
  "getDataURL",
  "getConnectedDataURL",
  // 'getModel',
  "getOption",
  // 'getViewOfComponentModel',
  // 'getViewOfSeriesModel',
  "getId",
  "updateLabelLayout"
], Qy = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      T(jw, function(e) {
        this[e] = K(t[e], t);
      }, this);
    }
    return r;
  })()
);
function tT(r, t) {
  return t.mainType === $y ? r.getViewOfSeriesModel(t) : r.getViewOfComponentModel(t);
}
var Od = 1, kd = {}, Jy = vt(), vv = vt(), cv = 0, Cu = 1, Mu = 2, Qe = ["emphasis", "blur", "select"], Bd = ["normal", "emphasis", "blur", "select"], eT = 10, rT = 9, wn = "highlight", cs = "downplay", Hs = "select", Jf = "unselect", Vs = "toggleSelect", dv = "selectchanged";
function Hn(r) {
  return r != null && r !== "none";
}
function Du(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
}
function jy(r) {
  Du(r, "emphasis", Mu);
}
function t0(r) {
  r.hoverState === Mu && Du(r, "normal", cv);
}
function pv(r) {
  Du(r, "blur", Cu);
}
function e0(r) {
  r.hoverState === Cu && Du(r, "normal", cv);
}
function nT(r) {
  r.selected = !0;
}
function iT(r) {
  r.selected = !1;
}
function Nd(r, t, e) {
  t(r, e);
}
function cr(r, t, e) {
  Nd(r, t, e), r.isGroup && r.traverse(function(n) {
    Nd(n, t, e);
  });
}
function Fd(r, t) {
  switch (t) {
    case "emphasis":
      r.hoverState = Mu;
      break;
    case "normal":
      r.hoverState = cv;
      break;
    case "blur":
      r.hoverState = Cu;
      break;
    case "select":
      r.selected = !0;
  }
}
function aT(r, t, e, n) {
  for (var i = r.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o], u = i[s];
    a[s] = u ?? (n && n[s]);
  }
  for (var o = 0; o < r.animators.length; o++) {
    var l = r.animators[o];
    l.__fromStateTransition && l.__fromStateTransition.indexOf(e) < 0 && l.targetName === "style" && l.saveTo(a, t);
  }
  return a;
}
function oT(r, t, e, n) {
  var i = e && ot(e, "select") >= 0, a = !1;
  if (r instanceof yt) {
    var o = Jy(r), s = i && o.selectFill || o.normalFill, u = i && o.selectStroke || o.normalStroke;
    if (Hn(s) || Hn(u)) {
      n = n || {};
      var l = n.style || {};
      l.fill === "inherit" ? (a = !0, n = B({}, n), l = B({}, l), l.fill = s) : !Hn(l.fill) && Hn(s) ? (a = !0, n = B({}, n), l = B({}, l), l.fill = $c(s)) : !Hn(l.stroke) && Hn(u) && (a || (n = B({}, n), l = B({}, l)), l.stroke = $c(u)), n.style = l;
    }
  }
  if (n && n.z2 == null) {
    a || (n = B({}, n));
    var f = r.z2EmphasisLift;
    n.z2 = r.z2 + (f ?? eT);
  }
  return n;
}
function sT(r, t, e) {
  if (e && e.z2 == null) {
    e = B({}, e);
    var n = r.z2SelectLift;
    e.z2 = r.z2 + (n ?? rT);
  }
  return e;
}
function uT(r, t, e) {
  var n = ot(r.currentStates, t) >= 0, i = r.style.opacity, a = n ? null : aT(r, ["opacity"], t, {
    opacity: 1
  });
  e = e || {};
  var o = e.style || {};
  return o.opacity == null && (e = B({}, e), o = B({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: n ? i : a.opacity * 0.1
  }, o), e.style = o), e;
}
function Pl(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis")
      return oT(this, r, t, e);
    if (r === "blur")
      return uT(this, r, e);
    if (r === "select")
      return sT(this, r, e);
  }
  return e;
}
function lT(r) {
  r.stateProxy = Pl;
  var t = r.getTextContent(), e = r.getTextGuideLine();
  t && (t.stateProxy = Pl), e && (e.stateProxy = Pl);
}
function zd(r, t) {
  !a0(r, t) && !r.__highByOuter && cr(r, jy);
}
function Hd(r, t) {
  !a0(r, t) && !r.__highByOuter && cr(r, t0);
}
function bi(r, t) {
  r.__highByOuter |= 1 << (t || 0), cr(r, jy);
}
function xi(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && cr(r, t0);
}
function fT(r) {
  cr(r, pv);
}
function r0(r) {
  cr(r, e0);
}
function n0(r) {
  cr(r, nT);
}
function i0(r) {
  cr(r, iT);
}
function a0(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function o0(r) {
  var t = r.getModel(), e = [], n = [];
  t.eachComponent(function(i, a) {
    var o = vv(a), s = tT(r, a), u = i === "series";
    !u && n.push(s), o.isBlured && (s.group.traverse(function(l) {
      e0(l);
    }), u && e.push(a)), o.isBlured = !1;
  }), T(n, function(i) {
    i && i.toggleBlurSeries && i.toggleBlurSeries(e, !1, t);
  });
}
function jf(r, t, e, n) {
  var i = n.getModel();
  e = e || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var v = l.getItemGraphicEl(f[h]);
      v && r0(v);
    }
  }
  if (r != null && !(!t || t === "none")) {
    var o = i.getSeriesByIndex(r), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var u = [];
    i.eachSeries(function(l) {
      var f = o === l, h = l.coordinateSystem;
      h && h.master && (h = h.master);
      var v = h && s ? h === s : f;
      if (!// Not blur other series if blurScope series
      (e === "series" && !f || e === "coordinateSystem" && !v || t === "series" && f)) {
        var c = n.getViewOfSeriesModel(l);
        if (c.group.traverse(function(m) {
          m.__highByOuter && f && t === "self" || pv(m);
        }), ne(t))
          a(l.getData(), t);
        else if (Z(t))
          for (var d = xt(t), p = 0; p < d.length; p++)
            a(l.getData(d[p]), t[d[p]]);
        u.push(l), vv(l).isBlured = !0;
      }
    }), i.eachComponent(function(l, f) {
      if (l !== "series") {
        var h = n.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, i);
      }
    });
  }
}
function th(r, t, e) {
  if (!(r == null || t == null)) {
    var n = e.getModel().getComponent(r, t);
    if (n) {
      vv(n).isBlured = !0;
      var i = e.getViewOfComponentModel(n);
      !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
        pv(a);
      });
    }
  }
}
function hT(r, t, e) {
  var n = r.seriesIndex, i = r.getData(t.dataType);
  if (i) {
    var a = Mn(i, t);
    a = (z(a) ? a[0] : a) || 0;
    var o = i.getItemGraphicEl(a);
    if (!o)
      for (var s = i.count(), u = 0; !o && u < s; )
        o = i.getItemGraphicEl(u++);
    if (o) {
      var l = pt(o);
      jf(n, l.focus, l.blurScope, e);
    } else {
      var f = r.get(["emphasis", "focus"]), h = r.get(["emphasis", "blurScope"]);
      f != null && jf(n, f, h, e);
    }
  }
}
function gv(r, t, e, n) {
  var i = {
    focusSelf: !1,
    dispatchers: null
  };
  if (r == null || r === "series" || t == null || e == null)
    return i;
  var a = n.getModel().getComponent(r, t);
  if (!a)
    return i;
  var o = n.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return i;
  for (var s = o.findHighDownDispatchers(e), u, l = 0; l < s.length; l++)
    if (pt(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function vT(r, t, e) {
  var n = pt(r), i = gv(n.componentMainType, n.componentIndex, n.componentHighDownName, e), a = i.dispatchers, o = i.focusSelf;
  a ? (o && th(n.componentMainType, n.componentIndex, e), T(a, function(s) {
    return zd(s, t);
  })) : (jf(n.seriesIndex, n.focus, n.blurScope, e), n.focus === "self" && th(n.componentMainType, n.componentIndex, e), zd(r, t));
}
function cT(r, t, e) {
  o0(e);
  var n = pt(r), i = gv(n.componentMainType, n.componentIndex, n.componentHighDownName, e).dispatchers;
  i ? T(i, function(a) {
    return Hd(a, t);
  }) : Hd(r, t);
}
function dT(r, t, e) {
  if (nh(t)) {
    var n = t.dataType, i = r.getData(n), a = Mn(i, t);
    z(a) || (a = [a]), r[t.type === Vs ? "toggleSelect" : t.type === Hs ? "select" : "unselect"](a, n);
  }
}
function Vd(r) {
  var t = r.getAllData();
  T(t, function(e) {
    var n = e.data, i = e.type;
    n.eachItemGraphicEl(function(a, o) {
      r.isSelected(o, i) ? n0(a) : i0(a);
    });
  });
}
function pT(r) {
  var t = [];
  return r.eachSeries(function(e) {
    var n = e.getAllData();
    T(n, function(i) {
      i.data;
      var a = i.type, o = e.getSelectedDataIndices();
      if (o.length > 0) {
        var s = {
          dataIndex: o,
          seriesIndex: e.seriesIndex
        };
        a != null && (s.dataType = a), t.push(s);
      }
    });
  }), t;
}
function Gs(r, t, e) {
  s0(r, !0), cr(r, lT), mT(r, t, e);
}
function gT(r) {
  s0(r, !1);
}
function eh(r, t, e, n) {
  n ? gT(r) : Gs(r, t, e);
}
function mT(r, t, e) {
  var n = pt(r);
  t != null ? (n.focus = t, n.blurScope = e) : n.focus && (n.focus = null);
}
var Gd = ["emphasis", "blur", "select"], yT = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function Ud(r, t, e, n) {
  e = e || "itemStyle";
  for (var i = 0; i < Gd.length; i++) {
    var a = Gd[i], o = t.getModel([a, e]), s = r.ensureState(a);
    s.style = o[yT[e]]();
  }
}
function s0(r, t) {
  var e = t === !1, n = r;
  r.highDownSilentOnTouch && (n.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !e);
}
function rh(r) {
  return !!(r && r.__highDownDispatcher);
}
function _T(r) {
  var t = kd[r];
  return t == null && Od <= 32 && (t = kd[r] = Od++), t;
}
function nh(r) {
  var t = r.type;
  return t === Hs || t === Jf || t === Vs;
}
function Wd(r) {
  var t = r.type;
  return t === wn || t === cs;
}
function ST(r) {
  var t = Jy(r);
  t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
  var e = r.states.select || {};
  t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
}
var Vn = Dn.CMD, bT = [[], [], []], Yd = Math.sqrt, xT = Math.atan2;
function wT(r, t) {
  if (t) {
    var e = r.data, n = r.len(), i, a, o, s, u, l, f = Vn.M, h = Vn.C, v = Vn.L, c = Vn.R, d = Vn.A, p = Vn.Q;
    for (o = 0, s = 0; o < n; ) {
      switch (i = e[o++], s = o, a = 0, i) {
        case f:
          a = 1;
          break;
        case v:
          a = 1;
          break;
        case h:
          a = 3;
          break;
        case p:
          a = 2;
          break;
        case d:
          var m = t[4], g = t[5], y = Yd(t[0] * t[0] + t[1] * t[1]), _ = Yd(t[2] * t[2] + t[3] * t[3]), S = xT(-t[1] / _, t[0] / y);
          e[o] *= y, e[o++] += m, e[o] *= _, e[o++] += g, e[o++] *= y, e[o++] *= _, e[o++] += S, e[o++] += S, o += 2, s = o;
          break;
        case c:
          l[0] = e[o++], l[1] = e[o++], re(l, l, t), e[s++] = l[0], e[s++] = l[1], l[0] += e[o++], l[1] += e[o++], re(l, l, t), e[s++] = l[0], e[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var b = bT[u];
        b[0] = e[o++], b[1] = e[o++], re(b, b, t), e[s++] = b[0], e[s++] = b[1];
      }
    }
    r.increaseVersion();
  }
}
var Rl = Math.sqrt, Ao = Math.sin, Io = Math.cos, Vi = Math.PI;
function Zd(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function ih(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (Zd(r) * Zd(t));
}
function Xd(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(ih(r, t));
}
function $d(r, t, e, n, i, a, o, s, u, l, f) {
  var h = u * (Vi / 180), v = Io(h) * (r - e) / 2 + Ao(h) * (t - n) / 2, c = -1 * Ao(h) * (r - e) / 2 + Io(h) * (t - n) / 2, d = v * v / (o * o) + c * c / (s * s);
  d > 1 && (o *= Rl(d), s *= Rl(d));
  var p = (i === a ? -1 : 1) * Rl((o * o * (s * s) - o * o * (c * c) - s * s * (v * v)) / (o * o * (c * c) + s * s * (v * v))) || 0, m = p * o * c / s, g = p * -s * v / o, y = (r + e) / 2 + Io(h) * m - Ao(h) * g, _ = (t + n) / 2 + Ao(h) * m + Io(h) * g, S = Xd([1, 0], [(v - m) / o, (c - g) / s]), b = [(v - m) / o, (c - g) / s], x = [(-1 * v - m) / o, (-1 * c - g) / s], w = Xd(b, x);
  if (ih(b, x) <= -1 && (w = Vi), ih(b, x) >= 1 && (w = 0), w < 0) {
    var D = Math.round(w / Vi * 1e6) / 1e6;
    w = Vi * 2 + D % 2 * Vi;
  }
  f.addData(l, y, _, o, s, S, w, h, a);
}
var TT = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, CT = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function MT(r) {
  var t = new Dn();
  if (!r)
    return t;
  var e = 0, n = 0, i = e, a = n, o, s = Dn.CMD, u = r.match(TT);
  if (!u)
    return t;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], h = f.charAt(0), v = void 0, c = f.match(CT) || [], d = c.length, p = 0; p < d; p++)
      c[p] = parseFloat(c[p]);
    for (var m = 0; m < d; ) {
      var g = void 0, y = void 0, _ = void 0, S = void 0, b = void 0, x = void 0, w = void 0, D = e, C = n, M = void 0, A = void 0;
      switch (h) {
        case "l":
          e += c[m++], n += c[m++], v = s.L, t.addData(v, e, n);
          break;
        case "L":
          e = c[m++], n = c[m++], v = s.L, t.addData(v, e, n);
          break;
        case "m":
          e += c[m++], n += c[m++], v = s.M, t.addData(v, e, n), i = e, a = n, h = "l";
          break;
        case "M":
          e = c[m++], n = c[m++], v = s.M, t.addData(v, e, n), i = e, a = n, h = "L";
          break;
        case "h":
          e += c[m++], v = s.L, t.addData(v, e, n);
          break;
        case "H":
          e = c[m++], v = s.L, t.addData(v, e, n);
          break;
        case "v":
          n += c[m++], v = s.L, t.addData(v, e, n);
          break;
        case "V":
          n = c[m++], v = s.L, t.addData(v, e, n);
          break;
        case "C":
          v = s.C, t.addData(v, c[m++], c[m++], c[m++], c[m++], c[m++], c[m++]), e = c[m - 2], n = c[m - 1];
          break;
        case "c":
          v = s.C, t.addData(v, c[m++] + e, c[m++] + n, c[m++] + e, c[m++] + n, c[m++] + e, c[m++] + n), e += c[m - 2], n += c[m - 1];
          break;
        case "S":
          g = e, y = n, M = t.len(), A = t.data, o === s.C && (g += e - A[M - 4], y += n - A[M - 3]), v = s.C, D = c[m++], C = c[m++], e = c[m++], n = c[m++], t.addData(v, g, y, D, C, e, n);
          break;
        case "s":
          g = e, y = n, M = t.len(), A = t.data, o === s.C && (g += e - A[M - 4], y += n - A[M - 3]), v = s.C, D = e + c[m++], C = n + c[m++], e += c[m++], n += c[m++], t.addData(v, g, y, D, C, e, n);
          break;
        case "Q":
          D = c[m++], C = c[m++], e = c[m++], n = c[m++], v = s.Q, t.addData(v, D, C, e, n);
          break;
        case "q":
          D = c[m++] + e, C = c[m++] + n, e += c[m++], n += c[m++], v = s.Q, t.addData(v, D, C, e, n);
          break;
        case "T":
          g = e, y = n, M = t.len(), A = t.data, o === s.Q && (g += e - A[M - 4], y += n - A[M - 3]), e = c[m++], n = c[m++], v = s.Q, t.addData(v, g, y, e, n);
          break;
        case "t":
          g = e, y = n, M = t.len(), A = t.data, o === s.Q && (g += e - A[M - 4], y += n - A[M - 3]), e += c[m++], n += c[m++], v = s.Q, t.addData(v, g, y, e, n);
          break;
        case "A":
          _ = c[m++], S = c[m++], b = c[m++], x = c[m++], w = c[m++], D = e, C = n, e = c[m++], n = c[m++], v = s.A, $d(D, C, e, n, x, w, _, S, b, v, t);
          break;
        case "a":
          _ = c[m++], S = c[m++], b = c[m++], x = c[m++], w = c[m++], D = e, C = n, e += c[m++], n += c[m++], v = s.A, $d(D, C, e, n, x, w, _, S, b, v, t);
          break;
      }
    }
    (h === "z" || h === "Z") && (v = s.Z, t.addData(v), e = i, n = a), o = v;
  }
  return t.toStatic(), t;
}
var u0 = (function(r) {
  k(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(e) {
  }, t;
})(yt);
function l0(r) {
  return r.setData != null;
}
function f0(r, t) {
  var e = MT(r), n = B({}, t);
  return n.buildPath = function(i) {
    var a = l0(i);
    if (a && i.canSave()) {
      i.appendPath(e);
      var o = i.getContext();
      o && i.rebuildPath(o, 1);
    } else {
      var o = a ? i.getContext() : i;
      o && e.rebuildPath(o, 1);
    }
  }, n.applyTransform = function(i) {
    wT(e, i), this.dirtyShape();
  }, n;
}
function DT(r, t) {
  return new u0(f0(r, t));
}
function AT(r, t) {
  var e = f0(r, t), n = (function(i) {
    k(a, i);
    function a(o) {
      var s = i.call(this, o) || this;
      return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s;
    }
    return a;
  })(u0);
  return n;
}
function IT(r, t) {
  for (var e = [], n = r.length, i = 0; i < n; i++) {
    var a = r[i];
    e.push(a.getUpdatedPathProxy(!0));
  }
  var o = new yt(t);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (l0(s)) {
      s.appendPath(e);
      var u = s.getContext();
      u && s.rebuildPath(u, 1);
    }
  }, o;
}
var LT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return r;
})(), Au = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new LT();
  }, t.prototype.buildPath = function(e, n) {
    e.moveTo(n.cx + n.r, n.cy), e.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
  }, t;
})(yt);
Au.prototype.type = "circle";
var PT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return r;
})(), mv = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new PT();
  }, t.prototype.buildPath = function(e, n) {
    var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, u = n.ry, l = s * i, f = u * i;
    e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u), e.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o), e.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u), e.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o), e.closePath();
  }, t;
})(yt);
mv.prototype.type = "ellipse";
var h0 = Math.PI, El = h0 * 2, rn = Math.sin, Gn = Math.cos, RT = Math.acos, Ft = Math.atan2, qd = Math.abs, Sa = Math.sqrt, fa = Math.max, ze = Math.min, Ae = 1e-4;
function ET(r, t, e, n, i, a, o, s) {
  var u = e - r, l = n - t, f = o - i, h = s - a, v = h * u - f * l;
  if (!(v * v < Ae))
    return v = (f * (t - a) - h * (r - i)) / v, [r + v * u, t + v * l];
}
function Lo(r, t, e, n, i, a, o) {
  var s = r - e, u = t - n, l = (o ? a : -a) / Sa(s * s + u * u), f = l * u, h = -l * s, v = r + f, c = t + h, d = e + f, p = n + h, m = (v + d) / 2, g = (c + p) / 2, y = d - v, _ = p - c, S = y * y + _ * _, b = i - a, x = v * p - d * c, w = (_ < 0 ? -1 : 1) * Sa(fa(0, b * b * S - x * x)), D = (x * _ - y * w) / S, C = (-x * y - _ * w) / S, M = (x * _ + y * w) / S, A = (-x * y + _ * w) / S, L = D - m, I = C - g, P = M - m, E = A - g;
  return L * L + I * I > P * P + E * E && (D = M, C = A), {
    cx: D,
    cy: C,
    x0: -f,
    y0: -h,
    x1: D * (i / b - 1),
    y1: C * (i / b - 1)
  };
}
function OT(r) {
  var t;
  if (z(r)) {
    var e = r.length;
    if (!e)
      return r;
    e === 1 ? t = [r[0], r[0], 0, 0] : e === 2 ? t = [r[0], r[0], r[1], r[1]] : e === 3 ? t = r.concat(r[2]) : t = r;
  } else
    t = [r, r, r, r];
  return t;
}
function kT(r, t) {
  var e, n = fa(t.r, 0), i = fa(t.r0 || 0, 0), a = n > 0, o = i > 0;
  if (!(!a && !o)) {
    if (a || (n = i, i = 0), i > n) {
      var s = n;
      n = i, i = s;
    }
    var u = t.startAngle, l = t.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = t.cx, h = t.cy, v = !!t.clockwise, c = qd(l - u), d = c > El && c % El;
      if (d > Ae && (c = d), !(n > Ae))
        r.moveTo(f, h);
      else if (c > El - Ae)
        r.moveTo(f + n * Gn(u), h + n * rn(u)), r.arc(f, h, n, u, l, !v), i > Ae && (r.moveTo(f + i * Gn(l), h + i * rn(l)), r.arc(f, h, i, l, u, v));
      else {
        var p = void 0, m = void 0, g = void 0, y = void 0, _ = void 0, S = void 0, b = void 0, x = void 0, w = void 0, D = void 0, C = void 0, M = void 0, A = void 0, L = void 0, I = void 0, P = void 0, E = n * Gn(u), R = n * rn(u), F = i * Gn(l), G = i * rn(l), W = c > Ae;
        if (W) {
          var J = t.cornerRadius;
          J && (e = OT(J), p = e[0], m = e[1], g = e[2], y = e[3]);
          var q = qd(n - i) / 2;
          if (_ = ze(q, g), S = ze(q, y), b = ze(q, p), x = ze(q, m), C = w = fa(_, S), M = D = fa(b, x), (w > Ae || D > Ae) && (A = n * Gn(l), L = n * rn(l), I = i * Gn(u), P = i * rn(u), c < h0)) {
            var rt = ET(E, R, I, P, A, L, F, G);
            if (rt) {
              var $ = E - rt[0], H = R - rt[1], it = A - rt[0], lt = L - rt[1], Ut = 1 / rn(RT(($ * it + H * lt) / (Sa($ * $ + H * H) * Sa(it * it + lt * lt))) / 2), Me = Sa(rt[0] * rt[0] + rt[1] * rt[1]);
              C = ze(w, (n - Me) / (Ut + 1)), M = ze(D, (i - Me) / (Ut - 1));
            }
          }
        }
        if (!W)
          r.moveTo(f + E, h + R);
        else if (C > Ae) {
          var bt = ze(g, C), Lt = ze(y, C), nt = Lo(I, P, E, R, n, bt, v), ft = Lo(A, L, F, G, n, Lt, v);
          r.moveTo(f + nt.cx + nt.x0, h + nt.cy + nt.y0), C < w && bt === Lt ? r.arc(f + nt.cx, h + nt.cy, C, Ft(nt.y0, nt.x0), Ft(ft.y0, ft.x0), !v) : (bt > 0 && r.arc(f + nt.cx, h + nt.cy, bt, Ft(nt.y0, nt.x0), Ft(nt.y1, nt.x1), !v), r.arc(f, h, n, Ft(nt.cy + nt.y1, nt.cx + nt.x1), Ft(ft.cy + ft.y1, ft.cx + ft.x1), !v), Lt > 0 && r.arc(f + ft.cx, h + ft.cy, Lt, Ft(ft.y1, ft.x1), Ft(ft.y0, ft.x0), !v));
        } else
          r.moveTo(f + E, h + R), r.arc(f, h, n, u, l, !v);
        if (!(i > Ae) || !W)
          r.lineTo(f + F, h + G);
        else if (M > Ae) {
          var bt = ze(p, M), Lt = ze(m, M), nt = Lo(F, G, A, L, i, -Lt, v), ft = Lo(E, R, I, P, i, -bt, v);
          r.lineTo(f + nt.cx + nt.x0, h + nt.cy + nt.y0), M < D && bt === Lt ? r.arc(f + nt.cx, h + nt.cy, M, Ft(nt.y0, nt.x0), Ft(ft.y0, ft.x0), !v) : (Lt > 0 && r.arc(f + nt.cx, h + nt.cy, Lt, Ft(nt.y0, nt.x0), Ft(nt.y1, nt.x1), !v), r.arc(f, h, i, Ft(nt.cy + nt.y1, nt.cx + nt.x1), Ft(ft.cy + ft.y1, ft.cx + ft.x1), v), bt > 0 && r.arc(f + ft.cx, h + ft.cy, bt, Ft(ft.y1, ft.x1), Ft(ft.y0, ft.x0), !v));
        } else
          r.lineTo(f + F, h + G), r.arc(f, h, i, l, u, v);
      }
      r.closePath();
    }
  }
}
var BT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return r;
})(), Iu = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new BT();
  }, t.prototype.buildPath = function(e, n) {
    kT(e, n);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
})(yt);
Iu.prototype.type = "sector";
var NT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return r;
})(), yv = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new NT();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.cx, a = n.cy, o = Math.PI * 2;
    e.moveTo(i + n.r, a), e.arc(i, a, n.r, 0, o, !1), e.moveTo(i + n.r0, a), e.arc(i, a, n.r0, 0, o, !0);
  }, t;
})(yt);
yv.prototype.type = "ring";
function FT(r, t, e, n) {
  var i = [], a = [], o = [], s = [], u, l, f, h;
  if (n) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var v = 0, c = r.length; v < c; v++)
      ti(f, f, r[v]), ei(h, h, r[v]);
    ti(f, f, n[0]), ei(h, h, n[1]);
  }
  for (var v = 0, c = r.length; v < c; v++) {
    var d = r[v];
    if (e)
      u = r[v ? v - 1 : c - 1], l = r[(v + 1) % c];
    else if (v === 0 || v === c - 1) {
      i.push(jS(r[v]));
      continue;
    } else
      u = r[v - 1], l = r[v + 1];
    tb(a, l, u), $u(a, a, t);
    var p = Cf(d, u), m = Cf(d, l), g = p + m;
    g !== 0 && (p /= g, m /= g), $u(o, a, -p), $u(s, a, m);
    var y = Lc([], d, o), _ = Lc([], d, s);
    n && (ei(y, y, f), ti(y, y, h), ei(_, _, f), ti(_, _, h)), i.push(y), i.push(_);
  }
  return e && i.push(i.shift()), i;
}
function v0(r, t, e) {
  var n = t.smooth, i = t.points;
  if (i && i.length >= 2) {
    if (n) {
      var a = FT(i, n, e, t.smoothConstraint);
      r.moveTo(i[0][0], i[0][1]);
      for (var o = i.length, s = 0; s < (e ? o : o - 1); s++) {
        var u = a[s * 2], l = a[s * 2 + 1], f = i[(s + 1) % o];
        r.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1]);
      }
    } else {
      r.moveTo(i[0][0], i[0][1]);
      for (var s = 1, h = i.length; s < h; s++)
        r.lineTo(i[s][0], i[s][1]);
    }
    e && r.closePath();
  }
}
var zT = /* @__PURE__ */ (function() {
  function r() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
})(), no = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new zT();
  }, t.prototype.buildPath = function(e, n) {
    v0(e, n, !0);
  }, t;
})(yt);
no.prototype.type = "polygon";
var HT = /* @__PURE__ */ (function() {
  function r() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
})(), io = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new HT();
  }, t.prototype.buildPath = function(e, n) {
    v0(e, n, !1);
  }, t;
})(yt);
io.prototype.type = "polyline";
var VT = {}, GT = /* @__PURE__ */ (function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return r;
})(), Or = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new GT();
  }, t.prototype.buildPath = function(e, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = Zy(VT, n, this.style);
      i = u.x1, a = u.y1, o = u.x2, s = u.y2;
    } else
      i = n.x1, a = n.y1, o = n.x2, s = n.y2;
    var l = n.percent;
    l !== 0 && (e.moveTo(i, a), l < 1 && (o = i * (1 - l) + o * l, s = a * (1 - l) + s * l), e.lineTo(o, s));
  }, t.prototype.pointAt = function(e) {
    var n = this.shape;
    return [
      n.x1 * (1 - e) + n.x2 * e,
      n.y1 * (1 - e) + n.y2 * e
    ];
  }, t;
})(yt);
Or.prototype.type = "line";
var $t = [], UT = /* @__PURE__ */ (function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return r;
})();
function Kd(r, t, e) {
  var n = r.cpx2, i = r.cpy2;
  return n != null || i != null ? [
    (e ? Uc : Bt)(r.x1, r.cpx1, r.cpx2, r.x2, t),
    (e ? Uc : Bt)(r.y1, r.cpy1, r.cpy2, r.y2, t)
  ] : [
    (e ? Wc : Kt)(r.x1, r.cpx1, r.x2, t),
    (e ? Wc : Kt)(r.y1, r.cpy1, r.y2, t)
  ];
}
var _v = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new UT();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.x1, a = n.y1, o = n.x2, s = n.y2, u = n.cpx1, l = n.cpy1, f = n.cpx2, h = n.cpy2, v = n.percent;
    v !== 0 && (e.moveTo(i, a), f == null || h == null ? (v < 1 && (Es(i, u, o, v, $t), u = $t[1], o = $t[2], Es(a, l, s, v, $t), l = $t[1], s = $t[2]), e.quadraticCurveTo(u, l, o, s)) : (v < 1 && (Rs(i, u, f, o, v, $t), u = $t[1], f = $t[2], o = $t[3], Rs(a, l, h, s, v, $t), l = $t[1], h = $t[2], s = $t[3]), e.bezierCurveTo(u, l, f, h, o, s)));
  }, t.prototype.pointAt = function(e) {
    return Kd(this.shape, e, !1);
  }, t.prototype.tangentAt = function(e) {
    var n = Kd(this.shape, e, !0);
    return nb(n, n);
  }, t;
})(yt);
_v.prototype.type = "bezier-curve";
var WT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return r;
})(), Lu = (function(r) {
  k(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new WT();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, u = n.endAngle, l = n.clockwise, f = Math.cos(s), h = Math.sin(s);
    e.moveTo(f * o + i, h * o + a), e.arc(i, a, o, s, u, !l);
  }, t;
})(yt);
Lu.prototype.type = "arc";
var YT = (function(r) {
  k(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.type = "compound", e;
  }
  return t.prototype._updatePathDirty = function() {
    for (var e = this.shape.paths, n = this.shapeChanged(), i = 0; i < e.length; i++)
      n = n || e[i].shapeChanged();
    n && this.dirtyShape();
  }, t.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var e = this.shape.paths || [], n = this.getGlobalScale(), i = 0; i < e.length; i++)
      e[i].path || e[i].createPathProxy(), e[i].path.setScale(n[0], n[1], e[i].segmentIgnoreThreshold);
  }, t.prototype.buildPath = function(e, n) {
    for (var i = n.paths || [], a = 0; a < i.length; a++)
      i[a].buildPath(e, i[a].shape, !0);
  }, t.prototype.afterBrush = function() {
    for (var e = this.shape.paths || [], n = 0; n < e.length; n++)
      e[n].pathUpdated();
  }, t.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), yt.prototype.getBoundingRect.call(this);
  }, t;
})(yt), c0 = (function() {
  function r(t) {
    this.colorStops = t || [];
  }
  return r.prototype.addColorStop = function(t, e) {
    this.colorStops.push({
      offset: t,
      color: e
    });
  }, r;
})(), d0 = (function(r) {
  k(t, r);
  function t(e, n, i, a, o, s) {
    var u = r.call(this, o) || this;
    return u.x = e ?? 0, u.y = n ?? 0, u.x2 = i ?? 1, u.y2 = a ?? 0, u.type = "linear", u.global = s || !1, u;
  }
  return t;
})(c0), ZT = (function(r) {
  k(t, r);
  function t(e, n, i, a, o) {
    var s = r.call(this, a) || this;
    return s.x = e ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return t;
})(c0), Ol = Math.min, XT = Math.max, Po = Math.abs, nn = [0, 0], an = [0, 0], Ot = iy(), Ro = Ot.minTv, Eo = Ot.maxTv, p0 = (function() {
  function r(t, e) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var n = 0; n < 4; n++)
      this._corners[n] = new mt();
    for (var n = 0; n < 2; n++)
      this._axes[n] = new mt();
    t && this.fromBoundingRect(t, e);
  }
  return r.prototype.fromBoundingRect = function(t, e) {
    var n = this._corners, i = this._axes, a = t.x, o = t.y, s = a + t.width, u = o + t.height;
    if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, u), n[3].set(a, u), e)
      for (var l = 0; l < 4; l++)
        n[l].transform(e);
    mt.sub(i[0], n[1], n[0]), mt.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
    for (var l = 0; l < 2; l++)
      this._origin[l] = i[l].dot(n[0]);
  }, r.prototype.intersect = function(t, e, n) {
    var i = !0, a = !e;
    return e && mt.set(e, 0, 0), Ot.reset(n, !a), !this._intersectCheckOneSide(this, t, a, 1) && (i = !1, a) || !this._intersectCheckOneSide(t, this, a, -1) && (i = !1, a) || !a && !Ot.negativeSize && mt.copy(e, i ? Ot.useDir ? Ot.dirMinTv : Ro : Eo), i;
  }, r.prototype._intersectCheckOneSide = function(t, e, n, i) {
    for (var a = !0, o = 0; o < 2; o++) {
      var s = t._axes[o];
      if (t._getProjMinMaxOnAxis(o, t._corners, nn), t._getProjMinMaxOnAxis(o, e._corners, an), Ot.negativeSize || nn[1] < an[0] || nn[0] > an[1]) {
        if (a = !1, Ot.negativeSize || n)
          return a;
        var u = Po(an[0] - nn[1]), l = Po(nn[0] - an[1]);
        Ol(u, l) > Eo.len() && (u < l ? mt.scale(Eo, s, -u * i) : mt.scale(Eo, s, l * i));
      } else if (!n) {
        var u = Po(an[0] - nn[1]), l = Po(nn[0] - an[1]);
        (Ot.useDir || Ol(u, l) < Ro.len()) && ((u < l || !Ot.bidirectional) && (mt.scale(Ro, s, u * i), Ot.useDir && Ot.calcDirMTV()), (u >= l || !Ot.bidirectional) && (mt.scale(Ro, s, -l * i), Ot.useDir && Ot.calcDirMTV()));
      }
    }
    return a;
  }, r.prototype._getProjMinMaxOnAxis = function(t, e, n) {
    for (var i = this._axes[t], a = this._origin, o = e[0].dot(i) + a[t], s = o, u = o, l = 1; l < e.length; l++) {
      var f = e[l].dot(i) + a[t];
      s = Ol(f, s), u = XT(f, u);
    }
    n[0] = s + Ot.touchThreshold, n[1] = u - Ot.touchThreshold, Ot.negativeSize = n[1] < n[0];
  }, r;
})(), g0 = 0, $T = 1, qT = 2, KT = 1, ds = 0, QT = [], JT = (function(r) {
  k(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.notClear = !0, e.incremental = $T, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e;
  }
  return t.prototype.traverse = function(e, n) {
    e.call(n, this);
  }, t.prototype.useStyle = function() {
    this.style = {};
  }, t.prototype._useHoverStyle = function() {
    this.__hoverStyle = null;
  }, t.prototype.getCursor = function() {
    return this._cursor;
  }, t.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, t.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
  }, t.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, t.prototype.addDisplayable = function(e, n) {
    n ? this._temporaryDisplayables.push(e) : this._displayables.push(e), this.markRedraw();
  }, t.prototype.addDisplayables = function(e, n) {
    n = n || !1;
    for (var i = 0; i < e.length; i++)
      this.addDisplayable(e[i], n);
  }, t.prototype.getDisplayables = function() {
    return this._displayables;
  }, t.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, t.prototype.eachPendingDisplayable = function(e) {
    for (var n = this._cursor; n < this._displayables.length; n++)
      e && e(this._displayables[n]);
    for (var n = 0; n < this._temporaryDisplayables.length; n++)
      e && e(this._temporaryDisplayables[n]);
  }, t.prototype.update = function() {
    this.updateTransform();
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var n = this._displayables[e];
      n.parent = this, n.update(), n.parent = null;
    }
    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var n = this._temporaryDisplayables[e];
      n.parent = this, n.update(), n.parent = null;
    }
  }, t.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var e = new j(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
        var i = this._displayables[n], a = i.getBoundingRect().clone();
        i.needLocalTransform() && a.applyTransform(i.getLocalTransform(QT)), e.union(a);
      }
      this._rect = e;
    }
    return this._rect;
  }, t.prototype.contain = function(e, n) {
    var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect();
    if (a.contain(i[0], i[1]))
      for (var o = 0; o < this._displayables.length; o++) {
        var s = this._displayables[o];
        if (s.contain(e, n))
          return !0;
      }
    return !1;
  }, t;
})(eo), jT = vt();
function tC(r, t, e, n, i) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), u = r === "update";
  if (s) {
    var l = void 0, f = void 0, h = void 0;
    n ? (l = X(n.duration, 200), f = X(n.easing, "cubicOut"), h = 0) : (l = t.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), Q(h) && (h = h(e, i)), Q(l) && (l = l(e));
    var v = {
      duration: l || 0,
      delay: h,
      easing: f
    };
    return v;
  } else
    return null;
}
function Sv(r, t, e, n, i, a, o) {
  var s = !1, u;
  Q(i) ? (o = a, a = i, i = null) : Z(i) && (a = i.cb, o = i.during, s = i.isFrom, u = i.removeOpt, i = i.dataIndex);
  var l = r === "leave";
  l || t.stopAnimation("leave");
  var f = tC(r, n, i, l ? u || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, i) : null);
  if (f && f.duration > 0) {
    var h = f.duration, v = f.delay, c = f.easing, d = {
      duration: h,
      delay: v || 0,
      easing: c,
      done: a,
      force: !!a || !!o,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !l,
      scope: r,
      during: o
    };
    s ? t.animateFrom(e, d) : t.animateTo(e, d);
  } else
    t.stopAnimation(), !s && t.attr(e), o && o(1), a && a();
}
function kr(r, t, e, n, i, a) {
  Sv("update", r, t, e, n, i, a);
}
function ao(r, t, e, n, i, a) {
  Sv("enter", r, t, e, n, i, a);
}
function ba(r) {
  if (!r.__zr)
    return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave")
      return !0;
  }
  return !1;
}
function Us(r, t, e, n, i, a) {
  ba(r) || Sv("leave", r, t, e, n, i, a);
}
function Qd(r, t, e, n) {
  r.removeTextContent(), r.removeTextGuideLine(), Us(r, {
    style: {
      opacity: 0
    }
  }, t, e, n);
}
function eC(r, t, e) {
  function n() {
    r.parent && r.parent.remove(r);
  }
  r.isGroup ? r.traverse(function(i) {
    i.isGroup || Qd(i, t, e, n);
  }) : Qd(r, t, e, n);
}
function rC(r) {
  jT(r).oldStyle = r.style;
}
var ah = {}, dn = ["x", "y"], Ea = ["width", "height"], m0 = 0, y0 = 1, bv = 2;
function nC(r) {
  return yt.extend(r);
}
var iC = AT;
function aC(r, t) {
  return iC(r, t);
}
function Ee(r, t) {
  ah[r] = t;
}
function oC(r) {
  if (ah.hasOwnProperty(r))
    return ah[r];
}
function xv(r, t, e, n) {
  var i = DT(r, t);
  return e && (n === "center" && (e = S0(e, i.getBoundingRect())), b0(i, e)), i;
}
function _0(r, t, e) {
  var n = new Hr({
    style: {
      image: r,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height
    },
    onload: function(i) {
      if (e === "center") {
        var a = {
          width: i.width,
          height: i.height
        };
        n.setStyle(S0(t, a));
      }
    }
  });
  return n;
}
function S0(r, t) {
  var e = t.width / t.height, n = r.height * e, i;
  n <= r.width ? i = r.height : (n = r.width, i = n / e);
  var a = r.x + r.width / 2, o = r.y + r.height / 2;
  return {
    x: a - n / 2,
    y: o - i / 2,
    width: n,
    height: i
  };
}
var sC = IT;
function b0(r, t) {
  if (r.applyTransform) {
    var e = r.getBoundingRect(), n = e.calculateTransform(t);
    r.applyTransform(n);
  }
}
function Oa(r, t) {
  return Zy(r, r, {
    lineWidth: t
  }), r;
}
function uC(r, t) {
  return Xy(r, r, t), r;
}
var lC = mn;
function wv(r, t) {
  for (var e = Ka([]); r && r !== t; )
    pa(e, r.getLocalTransform(), e), r = r.parent;
  return e;
}
function ka(r, t, e) {
  return t && !ne(t) && (t = Rn.getLocalTransform(t)), e && (t = Qa([], t)), re([], r, t);
}
function Tv(r, t, e) {
  var n = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Pt(2 * t[4] / t[0]), i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Pt(2 * t[4] / t[2]), a = [r === "left" ? -n : r === "right" ? n : 0, r === "top" ? -i : r === "bottom" ? i : 0];
  return a = ka(a, t, e), Pt(a[0]) > Pt(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function Jd(r) {
  return !r.isGroup;
}
function fC(r) {
  return r.shape != null;
}
function x0(r, t, e) {
  if (!r || !t)
    return;
  function n(o) {
    var s = {};
    return o.traverse(function(u) {
      Jd(u) && u.anid && (s[u.anid] = u);
    }), s;
  }
  function i(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return fC(o) && (s.shape = tt(o.shape)), s;
  }
  var a = n(r);
  t.traverse(function(o) {
    if (Jd(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = i(o);
        o.attr(i(s)), kr(o, u, e, pt(o).dataIndex);
      }
    }
  });
}
function w0(r, t) {
  return U(r, function(e) {
    var n = e[0];
    n = gt(n, t.x), n = ae(n, t.x + t.width);
    var i = e[1];
    return i = gt(i, t.y), i = ae(i, t.y + t.height), [n, i];
  });
}
function hC(r, t) {
  var e = gt(r.x, t.x), n = ae(r.x + r.width, t.x + t.width), i = gt(r.y, t.y), a = ae(r.y + r.height, t.y + t.height);
  if (n >= e && a >= i)
    return {
      x: e,
      y: i,
      width: n - e,
      height: a - i
    };
}
function Pu(r, t, e) {
  var n = B({
    rectHover: !0
  }, t), i = n.style = {
    strokeNoScale: !0
  };
  if (e = e || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }, r)
    return r.indexOf("image://") === 0 ? (i.image = r.slice(8), ut(i, e), new Hr(n)) : xv(r.replace("path://", ""), n, e, "center");
}
function vC(r, t, e, n, i) {
  for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
    var s = i[a];
    if (T0(r, t, e, n, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function T0(r, t, e, n, i, a, o, s) {
  var u = e - r, l = n - t, f = o - i, h = s - a, v = kl(f, h, u, l);
  if (cC(v))
    return !1;
  var c = r - i, d = t - a, p = kl(c, d, u, l) / v;
  if (p < 0 || p > 1)
    return !1;
  var m = kl(c, d, f, h) / v;
  return !(m < 0 || m > 1);
}
function kl(r, t, e, n) {
  return r * n - e * t;
}
function cC(r) {
  return r <= 1e-6 && r >= -1e-6;
}
function Ws(r, t, e, n, i) {
  return t == null || (wt(t) ? _t[0] = _t[1] = _t[2] = _t[3] = t : (_t[0] = t[0], _t[1] = t[1], _t[2] = t[2], _t[3] = t[3]), n && (_t[0] = gt(0, _t[0]), _t[1] = gt(0, _t[1]), _t[2] = gt(0, _t[2]), _t[3] = gt(0, _t[3])), e && (_t[0] = -_t[0], _t[1] = -_t[1], _t[2] = -_t[2], _t[3] = -_t[3]), jd(r, _t, "x", "width", 3, 1, i && i[0] || 0), jd(r, _t, "y", "height", 0, 2, i && i[1] || 0)), r;
}
var _t = [0, 0, 0, 0];
function jd(r, t, e, n, i, a, o) {
  var s = t[a] + t[i], u = r[n];
  r[n] += s, o = gt(0, ae(o, u)), r[n] < o ? (r[n] = o, r[e] += t[i] >= 0 ? -t[i] : t[a] >= 0 ? u + t[a] : Pt(s) > 1e-8 ? (u - o) * t[i] / s : 0) : r[e] -= t[i];
}
function oo(r) {
  var t = r.itemTooltipOption, e = r.componentModel, n = r.itemName, i = V(t) ? {
    formatter: t
  } : t, a = e.mainType, o = e.componentIndex, s = {
    componentType: a,
    name: n,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var u = r.formatterParamsExtra;
  u && T(xt(u), function(f) {
    ee(s, f) || (s[f] = u[f], s.$vars.push(f));
  });
  var l = pt(r.el);
  l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
    name: n,
    option: ut({
      content: n,
      encodeHTMLContent: !0,
      formatterParams: s
    }, i)
  };
}
function oh(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function Cv(r, t) {
  if (r)
    if (z(r))
      for (var e = 0; e < r.length; e++)
        oh(r[e], t);
    else
      oh(r, t);
}
function Mv(r) {
  return !r || Pt(r[1]) < Oo && Pt(r[2]) < Oo || Pt(r[0]) < Oo && Pt(r[3]) < Oo;
}
var Oo = 1e-5;
function Ba(r, t) {
  return r ? j.copy(r, t) : t.clone();
}
function Dv(r, t) {
  return t ? gu(r || te(), t) : void 0;
}
function Na(r) {
  return {
    z: r.get("z") || 0,
    zlevel: r.get("zlevel") || 0
  };
}
function dC(r) {
  var t = -1 / 0, e = 1 / 0;
  oh(r, function(a) {
    n(a), n(a.getTextContent()), n(a.getTextGuideLine());
  });
  function n(a) {
    if (!(!a || a.isGroup)) {
      var o = a.currentStates;
      if (o.length)
        for (var s = 0; s < o.length; s++)
          i(a.states[o[s]]);
      i(a);
    }
  }
  function i(a) {
    if (a) {
      var o = a.z2;
      o > t && (t = o), o < e && (e = o);
    }
  }
  return e > t && (e = t = 0), {
    min: e,
    max: t
  };
}
function C0(r, t, e) {
  M0(r, t, e, -1 / 0);
}
function M0(r, t, e, n) {
  if (r.ignoreModelZ)
    return n;
  var i = r.getTextContent(), a = r.getTextGuideLine(), o = r.isGroup;
  if (o)
    for (var s = r.childrenRef(), u = 0; u < s.length; u++)
      n = gt(M0(s[u], t, e, n), n);
  else
    r.z = t, r.zlevel = e, n = gt(r.z2 || 0, n);
  if (i && (i.z = t, i.zlevel = e, isFinite(n) && (i.z2 = n + 2)), a) {
    var l = r.textGuideLineConfig;
    a.z = t, a.zlevel = e, isFinite(n) && (a.z2 = n + (l && l.showAbove ? 1 : -1));
  }
  return n;
}
function pC(r) {
  return r.animation = {
    duration: 0
  }, r;
}
function gC(r, t) {
  return t ? gu(ha.transform, t) : Ka(ha.transform), ha.decomposeTransform(), Bs(r, ha), r;
}
var ha = new Rn();
ha.transform = te();
function mC(r) {
  var t = r.getZr().painter;
  return t.getType() === "canvas" ? t : null;
}
Ee("circle", Au);
Ee("ellipse", mv);
Ee("sector", Iu);
Ee("ring", yv);
Ee("polygon", no);
Ee("polyline", io);
Ee("rect", St);
Ee("line", Or);
Ee("bezierCurve", _v);
Ee("arc", Lu);
const yC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: Lu,
  BezierCurve: _v,
  BoundingRect: j,
  Circle: Au,
  CompoundPath: YT,
  Ellipse: mv,
  Group: Mt,
  HOVER_LAYER_FOR_INCREMENTAL: bv,
  HOVER_LAYER_FROM_THRESHOLD: y0,
  HOVER_LAYER_NO: m0,
  Image: Hr,
  IncrementalDisplayable: JT,
  Line: Or,
  LinearGradient: d0,
  OrientedBoundingRect: p0,
  Path: yt,
  Point: mt,
  Polygon: no,
  Polyline: io,
  RadialGradient: ZT,
  Rect: St,
  Ring: yv,
  Sector: Iu,
  Text: Rt,
  WH: Ea,
  XY: dn,
  applyTransform: ka,
  calcZ2Range: dC,
  clipPointsByRect: w0,
  clipRectByRect: hC,
  createIcon: Pu,
  decomposeTransform: gC,
  ensureCopyRect: Ba,
  ensureCopyTransform: Dv,
  expandOrShrinkRect: Ws,
  extendPath: aC,
  extendShape: nC,
  getCurrentCanvasPainter: mC,
  getShapeClass: oC,
  getTransform: wv,
  groupTransition: x0,
  initProps: ao,
  isBoundingRectAxisAligned: Mv,
  isElementRemoved: ba,
  lineLineIntersect: T0,
  linePolygonIntersect: vC,
  makeImage: _0,
  makePath: xv,
  mergePath: sC,
  payloadDisableAnimation: pC,
  registerShape: Ee,
  removeElement: Us,
  removeElementWithFadeOut: eC,
  resizePath: b0,
  retrieveZInfo: Na,
  setTooltipConfig: oo,
  subPixelOptimize: lC,
  subPixelOptimizeLine: Oa,
  subPixelOptimizeRect: uC,
  transformDirection: Tv,
  traverseElements: Cv,
  traverseUpdateZ: C0,
  updateProps: kr
}, Symbol.toStringTag, { value: "Module" }));
var Ru = {};
function _C(r, t) {
  for (var e = 0; e < Qe.length; e++) {
    var n = Qe[e], i = t[n], a = r.ensureState(n);
    a.style = a.style || {}, a.style.text = i;
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({
    text: t.normal
  }), r.useStates(o, !0);
}
function tp(r, t, e) {
  var n = r.labelFetcher, i = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
  n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), e != null ? {
    interpolatedValue: e
  } : null)), s == null && (s = Q(r.defaultText) ? r.defaultText(i, r, e) : r.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < Qe.length; l++) {
    var f = Qe[l], h = t[f];
    u[f] = X(n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null, s);
  }
  return u;
}
function Av(r, t, e, n) {
  e = e || Ru;
  for (var i = r instanceof Rt, a = !1, o = 0; o < Bd.length; o++) {
    var s = t[Bd[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = i ? r : r.getTextContent();
  if (a) {
    i || (u || (u = new Rt(), r.setTextContent(u)), r.stateProxy && (u.stateProxy = r.stateProxy));
    var l = tp(e, t), f = t.normal, h = !!f.getShallow("show"), v = hr(f, n && n.normal, e, !1, !i);
    v.text = l.normal, i || r.setTextConfig(ep(f, e, !1));
    for (var o = 0; o < Qe.length; o++) {
      var c = Qe[o], s = t[c];
      if (s) {
        var d = u.ensureState(c), p = !!X(s.getShallow("show"), h);
        if (p !== h && (d.ignore = !p), d.style = hr(s, n && n[c], e, !0, !i), d.style.text = l[c], !i) {
          var m = r.ensureState(c);
          m.textConfig = ep(s, e, !0);
        }
      }
    }
    u.silent = !!f.getShallow("silent"), u.style.x != null && (v.x = u.style.x), u.style.y != null && (v.y = u.style.y), u.ignore = !h, u.useStyle(v), u.dirty(), e.enableTextSetter && (A0(u).setLabelText = function(g) {
      var y = tp(e, t, g);
      _C(u, y);
    });
  } else u && (u.ignore = !0);
  r.dirty();
}
function Iv(r, t) {
  t = t || "label";
  for (var e = {
    normal: r.getModel(t)
  }, n = 0; n < Qe.length; n++) {
    var i = Qe[n];
    e[i] = r.getModel([i, t]);
  }
  return e;
}
function hr(r, t, e, n, i) {
  var a = {};
  return SC(a, r, e, n, i), t && B(a, t), a;
}
function ep(r, t, e) {
  t = t || {};
  var n = {}, i, a = r.getShallow("rotate"), o = X(r.getShallow("distance"), e ? null : 5), s = r.getShallow("offset");
  return i = r.getShallow("position") || (e ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", t.autoOverflowArea != null && (n.autoOverflowArea = t.autoOverflowArea), t.layoutRect != null && (n.layoutRect = t.layoutRect), n;
}
function SC(r, t, e, n, i) {
  e = e || Ru;
  var a = t.ecModel, o = a && a.option.textStyle, s = bC(t), u;
  if (s) {
    u = {};
    var l = "richInheritPlainLabel", f = X(t.get(l), a ? a.get(l) : void 0);
    for (var h in s)
      if (s.hasOwnProperty(h)) {
        var v = t.getModel(["rich", h]);
        ap(u[h] = {}, v, o, t, f, e, n, i, !1, !0);
      }
  }
  u && (r.rich = u);
  var c = t.get("overflow");
  c && (r.overflow = c);
  var d = t.get("lineOverflow");
  d && (r.lineOverflow = d);
  var p = r, m = t.get("minMargin");
  if (m != null)
    m = wt(m) ? m / 2 : 0, p.margin = [m, m, m, m], p.__marginType = ai.minMargin;
  else {
    var g = t.get("textMargin");
    g != null && (p.margin = Qh(g), p.__marginType = ai.textMargin);
  }
  ap(r, t, o, null, null, e, n, i, !0, !1);
}
function bC(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || Ru).rich;
    if (e) {
      t = t || {};
      for (var n = xt(e), i = 0; i < n.length; i++) {
        var a = n[i];
        t[a] = 1;
      }
    }
    r = r.parentModel;
  }
  return t;
}
var rp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], np = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], ip = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function ap(r, t, e, n, i, a, o, s, u, l) {
  e = !o && e || Ru;
  var f = a && a.inheritColor, h = t.getShallow("color"), v = t.getShallow("textBorderColor"), c = X(t.getShallow("opacity"), e.opacity);
  (h === "inherit" || h === "auto") && (f ? h = f : h = null), (v === "inherit" || v === "auto") && (f ? v = f : v = null), s || (h = h || e.color, v = v || e.textBorderColor), h != null && (r.fill = h), v != null && (r.stroke = v);
  var d = X(t.getShallow("textBorderWidth"), e.textBorderWidth);
  d != null && (r.lineWidth = d);
  var p = X(t.getShallow("textBorderType"), e.textBorderType);
  p != null && (r.lineDash = p);
  var m = X(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  m != null && (r.lineDashOffset = m), !o && c == null && !l && (c = a && a.defaultOpacity), c != null && (r.opacity = c), !o && !s && r.fill == null && a.inheritColor && (r.fill = a.inheritColor);
  for (var g = 0; g < rp.length; g++) {
    var y = rp[g], _ = i !== !1 && n ? si(t.getShallow(y), n.getShallow(y), e[y]) : X(t.getShallow(y), e[y]);
    _ != null && (r[y] = _);
  }
  for (var g = 0; g < np.length; g++) {
    var y = np[g], _ = t.getShallow(y);
    _ != null && (r[y] = _);
  }
  if (r.verticalAlign == null) {
    var S = t.getShallow("baseline");
    S != null && (r.verticalAlign = S);
  }
  if (!u || !a.disableBox) {
    for (var g = 0; g < ip.length; g++) {
      var y = ip[g], _ = t.getShallow(y);
      _ != null && (r[y] = _);
    }
    var b = t.getShallow("borderType");
    b != null && (r.borderDash = b), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && f && (r.backgroundColor = f), (r.borderColor === "auto" || r.borderColor === "inherit") && f && (r.borderColor = f);
  }
}
function D0(r, t) {
  var e = t && t.getModel("textStyle");
  return Ve([
    // FIXME in node-canvas fontWeight is before fontStyle
    r.fontStyle || e && e.getShallow("fontStyle") || "",
    r.fontWeight || e && e.getShallow("fontWeight") || "",
    (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
    r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var A0 = vt(), ai = {
  minMargin: 1,
  textMargin: 2
}, xC = ["textStyle", "color"], Bl = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Nl = new Rt(), wC = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getTextColor = function(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(xC) : null);
    }, r.prototype.getFont = function() {
      return D0({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, r.prototype.getTextRect = function(t) {
      for (var e = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, n = 0; n < Bl.length; n++)
        e[Bl[n]] = this.getShallow(Bl[n]);
      return Nl.useStyle(e), Nl.update(), Nl.getBoundingRect();
    }, r;
  })()
), I0 = [
  ["lineWidth", "width"],
  ["stroke", "color"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "type"],
  ["lineDashOffset", "dashOffset"],
  ["lineCap", "cap"],
  ["lineJoin", "join"],
  ["miterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], TC = Ra(I0), CC = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getLineStyle = function(t) {
      return TC(this, t);
    }, r;
  })()
), L0 = [
  ["fill", "color"],
  ["stroke", "borderColor"],
  ["lineWidth", "borderWidth"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "borderType"],
  ["lineDashOffset", "borderDashOffset"],
  ["lineCap", "borderCap"],
  ["lineJoin", "borderJoin"],
  ["miterLimit", "borderMiterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], MC = Ra(L0), DC = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getItemStyle = function(t, e) {
      return MC(this, t, e);
    }, r;
  })()
), Tt = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this.parentModel = e, this.ecModel = n, this.option = t;
    }
    return r.prototype.init = function(t, e, n) {
    }, r.prototype.mergeOption = function(t, e) {
      at(this.option, t, !0);
    }, r.prototype.get = function(t, e) {
      return t == null ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel);
    }, r.prototype.getShallow = function(t, e) {
      var n = this.option, i = n == null ? n : n[t];
      if (i == null && !e) {
        var a = this.parentModel;
        a && (i = a.getShallow(t));
      }
      return i;
    }, r.prototype.getModel = function(t, e) {
      var n = t != null, i = n ? this.parsePath(t) : null, a = n ? this._doGet(i) : this.option;
      return e = e || this.parentModel && this.parentModel.getModel(this.resolveParentPath(i)), new r(a, e, this.ecModel);
    }, r.prototype.isEmpty = function() {
      return this.option == null;
    }, r.prototype.restoreData = function() {
    }, r.prototype.clone = function() {
      var t = this.constructor;
      return new t(tt(this.option));
    }, r.prototype.parsePath = function(t) {
      return typeof t == "string" ? t.split(".") : t;
    }, r.prototype.resolveParentPath = function(t) {
      return t;
    }, r.prototype.isAnimationEnabled = function() {
      if (!et.node && this.option) {
        if (this.option.animation != null)
          return !!this.option.animation;
        if (this.parentModel)
          return this.parentModel.isAnimationEnabled();
      }
    }, r.prototype._doGet = function(t, e) {
      var n = this.option;
      if (!t)
        return n;
      for (var i = 0; i < t.length && !(t[i] && (n = n && typeof n == "object" ? n[t[i]] : null, n == null)); i++)
        ;
      return n == null && e && (n = e._doGet(this.resolveParentPath(t), e.parentModel)), n;
    }, r;
  })()
);
fv(Tt);
iw(Tt);
Je(Tt, CC);
Je(Tt, DC);
Je(Tt, lw);
Je(Tt, wC);
var AC = Math.round(Math.random() * 10);
function so(r) {
  return [r || "", AC++].join("_");
}
function IC(r) {
  var t = {};
  r.registerSubTypeDefaulter = function(e, n) {
    var i = Ge(e);
    t[i.main] = n;
  }, r.determineSubType = function(e, n) {
    var i = n.type;
    if (!i) {
      var a = Ge(e).main;
      r.hasSubTypes(e) && t[a] && (i = t[a](n));
    }
    return i;
  };
}
function LC(r, t) {
  r.topologicalTravel = function(a, o, s, u) {
    if (!a.length)
      return;
    var l = e(o), f = l.graph, h = l.noEntryList, v = {};
    for (T(a, function(y) {
      v[y] = !0;
    }); h.length; ) {
      var c = h.pop(), d = f[c], p = !!v[c];
      p && (s.call(u, c, d.originalDeps.slice()), delete v[c]), T(d.successor, p ? g : m);
    }
    T(v, function() {
      var y = "";
      throw new Error(y);
    });
    function m(y) {
      f[y].entryCount--, f[y].entryCount === 0 && h.push(y);
    }
    function g(y) {
      v[y] = !0, m(y);
    }
  };
  function e(a) {
    var o = {}, s = [];
    return T(a, function(u) {
      var l = n(o, u), f = l.originalDeps = t(u), h = i(f, a);
      l.entryCount = h.length, l.entryCount === 0 && s.push(u), T(h, function(v) {
        ot(l.predecessor, v) < 0 && l.predecessor.push(v);
        var c = n(o, v);
        ot(c.successor, v) < 0 && c.successor.push(u);
      });
    }), {
      graph: o,
      noEntryList: s
    };
  }
  function n(a, o) {
    return a[o] || (a[o] = {
      predecessor: [],
      successor: []
    }), a[o];
  }
  function i(a, o) {
    var s = [];
    return T(a, function(u) {
      ot(o, u) >= 0 && s.push(u);
    }), s;
  }
}
function Lv(r, t) {
  return at(at({}, r, !0), t, !0);
}
const PC = {
  time: {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  legend: {
    selector: {
      all: "All",
      inverse: "Inv"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "Box Select",
        polygon: "Lasso Select",
        lineX: "Horizontally Select",
        lineY: "Vertically Select",
        keep: "Keep Selections",
        clear: "Clear Selections"
      }
    },
    dataView: {
      title: "Data View",
      lang: ["Data View", "Close", "Refresh"]
    },
    dataZoom: {
      title: {
        zoom: "Zoom",
        back: "Zoom Reset"
      }
    },
    magicType: {
      title: {
        line: "Switch to Line Chart",
        bar: "Switch to Bar Chart",
        stack: "Stack",
        tiled: "Tile"
      }
    },
    restore: {
      title: "Restore"
    },
    saveAsImage: {
      title: "Save as Image",
      lang: ["Right Click to Save Image"]
    }
  },
  series: {
    typeNames: {
      pie: "Pie chart",
      bar: "Bar chart",
      line: "Line chart",
      scatter: "Scatter plot",
      effectScatter: "Ripple scatter plot",
      radar: "Radar chart",
      tree: "Tree",
      treemap: "Treemap",
      boxplot: "Boxplot",
      candlestick: "Candlestick",
      k: "K line chart",
      heatmap: "Heat map",
      map: "Map",
      parallel: "Parallel coordinate map",
      lines: "Line graph",
      graph: "Relationship graph",
      sankey: "Sankey diagram",
      funnel: "Funnel chart",
      gauge: "Gauge",
      pictorialBar: "Pictorial bar",
      themeRiver: "Theme River Map",
      sunburst: "Sunburst",
      custom: "Custom chart",
      chart: "Chart"
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: "This is a chart"
    },
    series: {
      single: {
        prefix: "",
        withName: " with type {seriesType} named {seriesName}.",
        withoutName: " with type {seriesType}."
      },
      multiple: {
        prefix: ". It consists of {seriesCount} series count.",
        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
        withoutName: " The {seriesId} series is a {seriesType}.",
        separator: {
          middle: "",
          end: ""
        }
      }
    },
    data: {
      allData: "The data is as follows: ",
      partialData: "The first {displayCnt} items are: ",
      withName: "the data for {name} is {value}",
      withoutName: "{value}",
      separator: {
        middle: ", ",
        end: ". "
      }
    }
  }
}, RC = {
  time: {
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
  },
  legend: {
    selector: {
      all: "全选",
      inverse: "反选"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "矩形选择",
        polygon: "圈选",
        lineX: "横向选择",
        lineY: "纵向选择",
        keep: "保持选择",
        clear: "清除选择"
      }
    },
    dataView: {
      title: "数据视图",
      lang: ["数据视图", "关闭", "刷新"]
    },
    dataZoom: {
      title: {
        zoom: "区域缩放",
        back: "区域缩放还原"
      }
    },
    magicType: {
      title: {
        line: "切换为折线图",
        bar: "切换为柱状图",
        stack: "切换为堆叠",
        tiled: "切换为平铺"
      }
    },
    restore: {
      title: "还原"
    },
    saveAsImage: {
      title: "保存为图片",
      lang: ["右键另存为图片"]
    }
  },
  series: {
    typeNames: {
      pie: "饼图",
      bar: "柱状图",
      line: "折线图",
      scatter: "散点图",
      effectScatter: "涟漪散点图",
      radar: "雷达图",
      tree: "树图",
      treemap: "矩形树图",
      boxplot: "箱型图",
      candlestick: "K线图",
      k: "K线图",
      heatmap: "热力图",
      map: "地图",
      parallel: "平行坐标图",
      lines: "线图",
      graph: "关系图",
      sankey: "桑基图",
      funnel: "漏斗图",
      gauge: "仪表盘图",
      pictorialBar: "象形柱图",
      themeRiver: "主题河流图",
      sunburst: "旭日图",
      custom: "自定义图表",
      chart: "图表"
    }
  },
  aria: {
    general: {
      withTitle: "这是一个关于“{title}”的图表。",
      withoutTitle: "这是一个图表，"
    },
    series: {
      single: {
        prefix: "",
        withName: "图表类型是{seriesType}，表示{seriesName}。",
        withoutName: "图表类型是{seriesType}。"
      },
      multiple: {
        prefix: "它由{seriesCount}个图表系列组成。",
        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
        withoutName: "第{seriesId}个系列是一个{seriesType}，",
        separator: {
          middle: "；",
          end: "。"
        }
      }
    },
    data: {
      allData: "其数据是——",
      partialData: "其中，前{displayCnt}项是——",
      withName: "{name}的数据是{value}",
      withoutName: "{value}",
      separator: {
        middle: "，",
        end: ""
      }
    }
  }
};
var Ys = "ZH", Pv = "EN", fi = Pv, ps = {}, Rv = {}, P0 = et.domSupported ? (function() {
  var r = (document.documentElement.lang || navigator.language || navigator.browserLanguage || fi).toUpperCase();
  return r.indexOf(Ys) > -1 ? Ys : fi;
})() : fi;
function R0(r, t) {
  r = r.toUpperCase(), Rv[r] = new Tt(t), ps[r] = t;
}
function EC(r) {
  if (V(r)) {
    var t = ps[r.toUpperCase()] || {};
    return r === Ys || r === Pv ? tt(t) : at(tt(t), tt(ps[fi]), !1);
  } else
    return at(tt(r), tt(ps[fi]), !1);
}
function OC(r) {
  return Rv[r];
}
function kC() {
  return Rv[fi];
}
R0(Pv, PC);
R0(Ys, RC);
var BC = null;
function Eu() {
  return BC;
}
function E0(r, t) {
  t.breakOption;
  var e = t.breakParsed;
  return e;
}
function Ev(r) {
  var t = r.brk;
  return t ? t.breaks : [];
}
function Zs(r) {
  var t = r.brk;
  return t ? t.hasBreaks() : !1;
}
var Ov = 1e3, kv = Ov * 60, xa = kv * 60, be = xa * 24, op = be * 365, NC = {
  year: /({yyyy}|{yy})/,
  month: /({MMMM}|{MMM}|{MM}|{M})/,
  day: /({dd}|{d})/,
  hour: /({HH}|{H}|{hh}|{h})/,
  minute: /({mm}|{m})/,
  second: /({ss}|{s})/,
  millisecond: /({SSS}|{S})/
}, gs = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}"
}, FC = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}", ko = "{yyyy}-{MM}-{dd}", sp = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: ko,
  hour: ko + " " + gs.hour,
  minute: ko + " " + gs.minute,
  second: ko + " " + gs.second,
  millisecond: FC
}, Tn = ["year", "month", "day", "hour", "minute", "second", "millisecond"], zC = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function HC(r) {
  return !V(r) && !Q(r) ? VC(r) : r;
}
function VC(r) {
  r = r || {};
  var t = {}, e = !0;
  return T(Tn, function(n) {
    e && (e = r[n] == null);
  }), T(Tn, function(n, i) {
    var a = r[n];
    t[n] = {};
    for (var o = null, s = i; s >= 0; s--) {
      var u = Tn[s], l = Z(a) && !z(a) ? a[u] : a, f = void 0;
      z(l) ? (f = l.slice(), o = f[0] || "") : V(l) ? (o = l, f = [o]) : (o == null ? o = gs[n] : NC[u].test(o) || (o = t[u][u][0] + " " + o), f = [o], e && (f[1] = "{primary|" + o + "}")), t[n][u] = f;
    }
  }), t;
}
function gr(r, t) {
  return r += "", "0000".substr(0, t - r.length) + r;
}
function wa(r) {
  switch (r) {
    case "half-year":
    case "quarter":
      return "month";
    case "week":
    case "half-week":
      return "day";
    case "half-day":
    case "quarter-day":
      return "hour";
    default:
      return r;
  }
}
function GC(r) {
  return r === wa(r);
}
function UC(r) {
  switch (r) {
    case "year":
    case "month":
      return "day";
    case "millisecond":
      return "millisecond";
    default:
      return "second";
  }
}
function Ou(r, t, e, n) {
  var i = Oi(r), a = i[O0(e)](), o = i[Bv(e)]() + 1, s = Math.floor((o - 1) / 3) + 1, u = i[Nv(e)](), l = i["get" + (e ? "UTC" : "") + "Day"](), f = i[Fv(e)](), h = (f - 1) % 12 + 1, v = i[zv(e)](), c = i[Hv(e)](), d = i[Vv(e)](), p = f >= 12 ? "pm" : "am", m = p.toUpperCase(), g = n instanceof Tt ? n : OC(n || P0) || kC(), y = g.getModel("time"), _ = y.get("month"), S = y.get("monthAbbr"), b = y.get("dayOfWeek"), x = y.get("dayOfWeekAbbr");
  return (t || "").replace(/{a}/g, p + "").replace(/{A}/g, m + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, gr(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, _[o - 1]).replace(/{MMM}/g, S[o - 1]).replace(/{MM}/g, gr(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, gr(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, b[l]).replace(/{ee}/g, x[l]).replace(/{e}/g, l + "").replace(/{HH}/g, gr(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, gr(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, gr(v, 2)).replace(/{m}/g, v + "").replace(/{ss}/g, gr(c, 2)).replace(/{s}/g, c + "").replace(/{SSS}/g, gr(d, 3)).replace(/{S}/g, d + "");
}
function WC(r, t, e, n, i) {
  var a = null;
  if (V(e))
    a = e;
  else if (Q(e)) {
    var o = {
      time: r.time,
      level: r.time ? r.time.level : 0
    }, s = Eu();
    s && s.makeAxisLabelFormatterParamBreak(o, r.break), a = e(r.value, t, o);
  } else {
    var u = r.time;
    if (u) {
      var l = e[u.lowerTimeUnit][u.upperTimeUnit];
      a = l[Math.min(u.level, l.length - 1)] || "";
    } else {
      var f = ms(r.value, i);
      a = e[f][f][0];
    }
  }
  return Ou(new Date(r.value), a, i, n);
}
function ms(r, t) {
  var e = Oi(r), n = e[Bv(t)]() + 1, i = e[Nv(t)](), a = e[Fv(t)](), o = e[zv(t)](), s = e[Hv(t)](), u = e[Vv(t)](), l = u === 0, f = l && s === 0, h = f && o === 0, v = h && a === 0, c = v && i === 1, d = c && n === 1;
  return d ? "year" : c ? "month" : v ? "day" : h ? "hour" : f ? "minute" : l ? "second" : "millisecond";
}
function sh(r, t, e) {
  switch (t) {
    case "year":
      r[k0(e)](0);
    case "month":
      r[B0(e)](1);
    case "day":
      r[N0(e)](0);
    case "hour":
      r[F0(e)](0);
    case "minute":
      r[z0(e)](0);
    case "second":
      r[H0(e)](0);
  }
  return r;
}
function O0(r) {
  return r ? "getUTCFullYear" : "getFullYear";
}
function Bv(r) {
  return r ? "getUTCMonth" : "getMonth";
}
function Nv(r) {
  return r ? "getUTCDate" : "getDate";
}
function Fv(r) {
  return r ? "getUTCHours" : "getHours";
}
function zv(r) {
  return r ? "getUTCMinutes" : "getMinutes";
}
function Hv(r) {
  return r ? "getUTCSeconds" : "getSeconds";
}
function Vv(r) {
  return r ? "getUTCMilliseconds" : "getMilliseconds";
}
function YC(r) {
  return r ? "setUTCFullYear" : "setFullYear";
}
function k0(r) {
  return r ? "setUTCMonth" : "setMonth";
}
function B0(r) {
  return r ? "setUTCDate" : "setDate";
}
function N0(r) {
  return r ? "setUTCHours" : "setHours";
}
function F0(r) {
  return r ? "setUTCMinutes" : "setMinutes";
}
function z0(r) {
  return r ? "setUTCSeconds" : "setSeconds";
}
function H0(r) {
  return r ? "setUTCMilliseconds" : "setMilliseconds";
}
function V0(r) {
  if (!Mx(r))
    return V(r) ? r : "-";
  var t = (r + "").split(".");
  return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function G0(r, t) {
  return r = (r || "").toLowerCase().replace(/-(.)/g, function(e, n) {
    return n.toUpperCase();
  }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r;
}
var ku = Qh;
function uh(r, t, e) {
  var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function i(f) {
    return f && Ve(f) ? f : "-";
  }
  function a(f) {
    return Ke(f);
  }
  var o = t === "time", s = r instanceof Date;
  if (o || s) {
    var u = o ? Oi(r) : r;
    if (isNaN(+u)) {
      if (s)
        return "-";
    } else return Ou(u, n, e);
  }
  if (t === "ordinal")
    return wf(r) ? i(r) : wt(r) && a(r) ? r + "" : "-";
  var l = Fs(r);
  return a(l) ? V0(l) : wf(r) ? i(r) : typeof r == "boolean" ? r + "" : "-";
}
var up = ["a", "b", "c", "d", "e", "f", "g"], Fl = function(r, t) {
  return "{" + r + (t ?? "") + "}";
};
function U0(r, t, e) {
  z(t) || (t = [t]);
  var n = t.length;
  if (!n)
    return "";
  for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
    var o = up[a];
    r = r.replace(Fl(o), Fl(o, 0));
  }
  for (var s = 0; s < n; s++)
    for (var u = 0; u < i.length; u++) {
      var l = t[s][i[u]];
      r = r.replace(Fl(up[u], s), e ? qt(l) : l);
    }
  return r;
}
function ZC(r, t) {
  var e = V(r) ? {
    color: r,
    extraCssText: t
  } : r || {}, n = e.color, i = e.type;
  t = e.extraCssText;
  var a = e.renderMode || "html";
  if (!n)
    return "";
  if (a === "html")
    return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + qt(n) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + qt(n) + ";" + (t || "") + '"></span>';
  var o = e.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style: i === "subItem" ? {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: n
    } : {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: n
    }
  };
}
function An(r, t) {
  return t = t || "transparent", V(r) ? r : Z(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
}
function lp(r, t) {
  if (t === "_blank" || t === "blank") {
    var e = window.open();
    e.opener = null, e.location.href = r;
  } else
    window.open(r, t);
}
var ys = {}, zl = {}, Gv = (
  /** @class */
  (function() {
    function r() {
      this._normalMasterList = [], this._nonSeriesBoxMasterList = [];
    }
    return r.prototype.create = function(t, e) {
      this._nonSeriesBoxMasterList = n(ys), this._normalMasterList = n(zl);
      function n(i, a) {
        var o = [];
        return T(i, function(s, u) {
          var l = s.create(t, e);
          o = o.concat(l || []);
        }), o;
      }
    }, r.prototype.update = function(t, e) {
      T(this._normalMasterList, function(n) {
        n.update && n.update(t, e);
      });
    }, r.prototype.getCoordinateSystems = function() {
      return this._normalMasterList.concat(this._nonSeriesBoxMasterList);
    }, r.register = function(t, e) {
      if (t === "matrix" || t === "calendar") {
        ys[t] = e;
        return;
      }
      zl[t] = e;
    }, r.get = function(t) {
      return zl[t] || ys[t];
    }, r;
  })()
);
function XC(r) {
  return !!ys[r];
}
var $C = 1, qC = 2, KC = Y();
function W0(r) {
  var t = r.getShallow("coord", !0), e = $C;
  if (t == null) {
    var n = KC.get(r.type);
    n && n.getCoord2 && (e = qC, t = n.getCoord2(r));
  }
  return {
    coord: t,
    from: e
  };
}
var hi = 0, _s = 1, QC = 2;
function JC(r, t) {
  var e = r.getShallow("coordinateSystem"), n = r.getShallow("coordinateSystemUsage", !0), i = hi;
  if (e) {
    var a = r.mainType === "series";
    n == null && (n = a ? "data" : "box"), n === "data" ? (i = _s, a || (i = hi)) : n === "box" && (i = QC, !a && !XC(e) && (i = hi));
  }
  return {
    coordSysType: e,
    kind: i
  };
}
function jC(r) {
  var t = r.targetModel, e = r.coordSysType, n = r.coordSysProvider, i = r.isDefaultDataCoordSys, a = JC(t), o = a.kind, s = a.coordSysType;
  if (i && o !== _s && (o = _s, s = e), o === hi || s !== e)
    return hi;
  var u = n(e, t);
  return u ? (o === _s ? t.coordinateSystem = u : t.boxCoordinateSystem = u, o) : hi;
}
var Ss = T, tM = ["left", "right", "top", "bottom", "width", "height"], Bo = [["width", "left", "right"], ["height", "top", "bottom"]];
function Uv(r, t, e, n, i) {
  var a = 0, o = 0;
  n == null && (n = 1 / 0), i == null && (i = 1 / 0);
  var s = 0;
  t.eachChild(function(u, l) {
    var f = u.getBoundingRect(), h = t.childAt(l + 1), v = h && h.getBoundingRect(), c, d;
    if (r === "horizontal") {
      var p = f.width + (v ? -v.x + f.x : 0);
      c = a + p, c > n || u.newline ? (a = 0, c = p, o += s + e, s = f.height) : s = Math.max(s, f.height);
    } else {
      var m = f.height + (v ? -v.y + f.y : 0);
      d = o + m, d > i || u.newline ? (a += s + e, o = 0, d = m, s = f.width) : s = Math.max(s, f.width);
    }
    u.newline || (u.x = a, u.y = o, u.markRedraw(), r === "horizontal" ? a = c + e : o = d + e);
  });
}
var vi = Uv;
ht(Uv, "vertical");
ht(Uv, "horizontal");
function eM(r, t) {
  return {
    left: r.getShallow("left", t),
    top: r.getShallow("top", t),
    right: r.getShallow("right", t),
    bottom: r.getShallow("bottom", t),
    width: r.getShallow("width", t),
    height: r.getShallow("height", t)
  };
}
function vr(r, t, e) {
  e = ku(e || 0);
  var n = t.width, i = t.height, a = ye(r.left, n), o = ye(r.top, i), s = ye(r.right, n), u = ye(r.bottom, i), l = ye(r.width, n), f = ye(r.height, i), h = e[2] + e[0], v = e[1] + e[3], c = r.aspect;
  switch (isNaN(l) && (l = n - s - v - a), isNaN(f) && (f = i - u - h - o), c != null && (isNaN(l) && isNaN(f) && (c > n / i ? l = n * 0.8 : f = i * 0.8), isNaN(l) && (l = c * f), isNaN(f) && (f = l / c)), isNaN(a) && (a = n - s - l - v), isNaN(o) && (o = i - u - f - h), r.left || r.right) {
    case "center":
      a = n / 2 - l / 2 - e[3];
      break;
    case "right":
      a = n - l - v;
      break;
  }
  switch (r.top || r.bottom) {
    case "middle":
    case "center":
      o = i / 2 - f / 2 - e[0];
      break;
    case "bottom":
      o = i - f - h;
      break;
  }
  a = a || 0, o = o || 0, isNaN(l) && (l = n - v - a - (s || 0)), isNaN(f) && (f = i - h - o - (u || 0));
  var d = new j((t.x || 0) + a + e[3], (t.y || 0) + o + e[0], l, f);
  return d.margin = e, d;
}
var Hl = {
  rect: 1
};
function uo(r, t, e) {
  var n, i, a, o = r.boxCoordinateSystem, s;
  if (o) {
    var u = W0(r), l = u.coord, f = u.from;
    if (o.dataToLayout) {
      a = Hl.rect, s = f;
      var h = o.dataToLayout(l);
      n = h.contentRect || h.rect;
    }
  }
  return a == null && (a = Hl.rect), a === Hl.rect && (n || (n = {
    x: 0,
    y: 0,
    width: t.getWidth(),
    height: t.getHeight()
  }), i = [n.x + n.width / 2, n.y + n.height / 2]), {
    type: a,
    refContainer: n,
    refPoint: i,
    boxCoordFrom: s
  };
}
function rM(r, t, e, n, i, a) {
  a = a || r, a.x = r.x, a.y = r.y;
  var o;
  if (o = r.getBoundingRect(), r.needLocalTransform()) {
    var s = r.getLocalTransform();
    o = o.clone(), o.applyTransform(s);
  }
  var u = vr(ut({
    width: o.width,
    height: o.height
  }, t), e, n), l = u.x - o.x, f = u.y - o.y;
  return a.x += l, a.y += f, a === r && r.markRedraw(), !0;
}
function Fa(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return Z(t) ? t : t ? {
    type: t
  } : null;
}
function Br(r, t, e) {
  var n = e && e.ignoreSize;
  !z(n) && (n = [n, n]);
  var i = o(Bo[0], 0), a = o(Bo[1], 1);
  u(Bo[0], r, i), u(Bo[1], r, a);
  function o(l, f) {
    var h = {}, v = 0, c = {}, d = 0, p = 2;
    if (Ss(l, function(y) {
      c[y] = r[y];
    }), Ss(l, function(y) {
      ee(t, y) && (h[y] = c[y] = t[y]), s(h, y) && v++, s(c, y) && d++;
    }), n[f])
      return s(t, l[1]) ? c[l[2]] = null : s(t, l[2]) && (c[l[1]] = null), c;
    if (d === p || !v)
      return c;
    if (v >= p)
      return h;
    for (var m = 0; m < l.length; m++) {
      var g = l[m];
      if (!ee(h, g) && ee(r, g)) {
        h[g] = r[g];
        break;
      }
    }
    return h;
  }
  function s(l, f) {
    return l[f] != null && l[f] !== "auto";
  }
  function u(l, f, h) {
    Ss(l, function(v) {
      f[v] = h[v];
    });
  }
}
function ki(r) {
  return nM({}, r);
}
function nM(r, t) {
  return t && r && Ss(tM, function(e) {
    ee(t, e) && (r[e] = t[e]);
  }), r;
}
var iM = vt(), ct = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e, n, i) {
      var a = r.call(this, e, n, i) || this;
      return a.uid = so("ec_cpt_model"), a;
    }
    return t.prototype.init = function(e, n, i) {
      this.mergeDefaultAndTheme(e, i);
    }, t.prototype.mergeDefaultAndTheme = function(e, n) {
      var i = Fa(this), a = i ? ki(e) : {}, o = n.getTheme();
      at(e, o.get(this.mainType)), at(e, this.getDefaultOption()), i && Br(e, a, i);
    }, t.prototype.mergeOption = function(e, n) {
      at(this.option, e, !0);
      var i = Fa(this);
      i && Br(this.option, e, i);
    }, t.prototype.optionUpdated = function(e, n) {
    }, t.prototype.getDefaultOption = function() {
      var e = this.constructor;
      if (!ew(e))
        return e.defaultOption;
      var n = iM(this);
      if (!n.defaultOption) {
        for (var i = [], a = e; a; ) {
          var o = a.prototype.defaultOption;
          o && i.push(o), a = a.superClass;
        }
        for (var s = {}, u = i.length - 1; u >= 0; u--)
          s = at(s, i[u], !0);
        n.defaultOption = s;
      }
      return n.defaultOption;
    }, t.prototype.getReferringComponents = function(e, n) {
      var i = e + "Index", a = e + "Id";
      return to(this.ecModel, e, {
        index: this.get(i, !0),
        id: this.get(a, !0)
      }, n);
    }, t.prototype.getBoxLayoutParams = function() {
      return eM(this, !1);
    }, t.prototype.getZLevelKey = function() {
      return "";
    }, t.prototype.setZLevel = function(e) {
      this.option.zlevel = e;
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.type = "component", e.id = "", e.name = "", e.mainType = "", e.subType = "", e.componentIndex = 0;
    })(), t;
  })(Tt)
);
Fy(ct, Tt);
xu(ct);
IC(ct);
LC(ct, aM);
function aM(r) {
  var t = [];
  return T(ct.getClassesByMainType(r), function(e) {
    t = t.concat(e.dependencies || e.prototype.dependencies || []);
  }), t = U(t, function(e) {
    return Ge(e).main;
  }), r !== "dataset" && ot(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
var O = {
  color: {},
  darkColor: {},
  size: {}
}, Ct = O.color = {
  theme: ["#5070dd", "#b6d634", "#505372", "#ff994d", "#0ca8df", "#ffd10a", "#fb628b", "#785db0", "#3fbe95"],
  neutral00: "#fff",
  neutral05: "#f4f7fd",
  neutral10: "#e8ebf0",
  neutral15: "#dbdee4",
  neutral20: "#cfd2d7",
  neutral25: "#c3c5cb",
  neutral30: "#b7b9be",
  neutral35: "#aaacb2",
  neutral40: "#9ea0a5",
  neutral45: "#929399",
  neutral50: "#86878c",
  neutral55: "#797b7f",
  neutral60: "#6d6e73",
  neutral65: "#616266",
  neutral70: "#54555a",
  neutral75: "#48494d",
  neutral80: "#3c3c41",
  neutral85: "#303034",
  neutral90: "#232328",
  neutral95: "#17171b",
  neutral99: "#000",
  accent05: "#eff1f9",
  accent10: "#e0e4f2",
  accent15: "#d0d6ec",
  accent20: "#c0c9e6",
  accent25: "#b1bbdf",
  accent30: "#a1aed9",
  accent35: "#91a0d3",
  accent40: "#8292cc",
  accent45: "#7285c6",
  accent50: "#6578ba",
  accent55: "#5c6da9",
  accent60: "#536298",
  accent65: "#4a5787",
  accent70: "#404c76",
  accent75: "#374165",
  accent80: "#2e3654",
  accent85: "#252b43",
  accent90: "#1b2032",
  accent95: "#121521",
  transparent: "rgba(0,0,0,0)",
  highlight: "rgba(255,231,130,0.8)"
};
B(Ct, {
  primary: Ct.neutral80,
  secondary: Ct.neutral70,
  tertiary: Ct.neutral60,
  quaternary: Ct.neutral50,
  disabled: Ct.neutral20,
  border: Ct.neutral30,
  borderTint: Ct.neutral20,
  borderShade: Ct.neutral40,
  background: Ct.neutral05,
  backgroundTint: "rgba(234,237,245,0.5)",
  backgroundTransparent: "rgba(255,255,255,0)",
  backgroundShade: Ct.neutral10,
  shadow: "rgba(0,0,0,0.2)",
  shadowTint: "rgba(129,130,136,0.2)",
  axisLine: Ct.neutral70,
  axisLineTint: Ct.neutral40,
  axisTick: Ct.neutral70,
  axisTickMinor: Ct.neutral60,
  axisLabel: Ct.neutral70,
  axisSplitLine: Ct.neutral15,
  axisMinorSplitLine: Ct.neutral05
});
for (var on in Ct)
  if (Ct.hasOwnProperty(on)) {
    var fp = Ct[on];
    on === "theme" ? O.darkColor.theme = Ct.theme.slice() : on === "highlight" ? O.darkColor.highlight = "rgba(255,231,130,0.4)" : on.indexOf("accent") === 0 ? O.darkColor[on] = Bf(fp, null, function(r) {
      return r * 0.5;
    }, function(r) {
      return Math.min(1, 1.3 - r);
    }) : O.darkColor[on] = Bf(fp, null, function(r) {
      return r * 0.9;
    }, function(r) {
      return 1 - Math.pow(r, 1.5);
    });
  }
O.size = {
  xxs: 2,
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 30,
  xxl: 40,
  xxxl: 50
};
var Y0 = "";
typeof navigator < "u" && (Y0 = navigator.platform || "");
var Un = "rgba(0, 0, 0, 0.2)", Z0 = O.color.theme[0], oM = Bf(Z0, null, null, 0.9);
const X0 = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: O.color.theme,
  gradientColor: [oM, Z0],
  aria: {
    decal: {
      decals: [{
        color: Un,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: Un,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: Un,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: Un,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: Un,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: Un,
        symbol: "triangle",
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  // If xAxis and yAxis declared, grid is created by default.
  // grid: {},
  textStyle: {
    // color: '#000',
    // decoration: 'none',
    // PENDING
    fontFamily: Y0.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    // fontFamily: 'Arial, Verdana, sans-serif',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  // Default is source-over
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut"
  },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  // Configuration for progressive/incremental rendering
  progressiveThreshold: 3e3,
  progressive: 400,
  // Threshold of if use single hover layer to optimize.
  // It is recommended that `hoverLayerThreshold` is equivalent to or less than
  // `progressiveThreshold`, otherwise hover will cause restart of progressive,
  // which is unexpected.
  // see example <echarts/test/heatmap-large.html>.
  hoverLayerThreshold: 3e3,
  // See: module:echarts/scale/Time
  useUTC: !1
};
var oe = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, $0 = vt();
function sM(r) {
  $0(r).datasetMap = Y();
}
function uM(r, t, e) {
  var n = {}, i = q0(t);
  if (!i || !r)
    return n;
  var a = [], o = [], s = t.ecModel, u = $0(s).datasetMap, l = i.uid + "_" + e.seriesLayoutBy, f, h;
  r = r.slice(), T(r, function(p, m) {
    var g = Z(p) ? p : r[m] = {
      name: p
    };
    g.type === "ordinal" && f == null && (f = m, h = d(g)), n[g.name] = [];
  });
  var v = u.get(l) || u.set(l, {
    categoryWayDim: h,
    valueWayDim: 0
  });
  T(r, function(p, m) {
    var g = p.name, y = d(p);
    if (f == null) {
      var _ = v.valueWayDim;
      c(n[g], _, y), c(o, _, y), v.valueWayDim += y;
    } else if (f === m)
      c(n[g], 0, y), c(a, 0, y);
    else {
      var _ = v.categoryWayDim;
      c(n[g], _, y), c(o, _, y), v.categoryWayDim += y;
    }
  });
  function c(p, m, g) {
    for (var y = 0; y < g; y++)
      p.push(m + y);
  }
  function d(p) {
    var m = p.dimsDef;
    return m ? m.length : 1;
  }
  return a.length && (n.itemName = a), o.length && (n.seriesName = o), n;
}
function q0(r) {
  var t = r.get("data", !0);
  if (!t)
    return to(r.ecModel, "dataset", {
      index: r.get("datasetIndex", !0),
      id: r.get("datasetId", !0)
    }, Vt).models[0];
}
function lM(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : to(r.ecModel, "dataset", {
    index: r.get("fromDatasetIndex", !0),
    id: r.get("fromDatasetId", !0)
  }, Vt).models;
}
function K0(r, t) {
  return fM(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
}
function fM(r, t, e, n, i, a) {
  var o, s = 5;
  if (ie(r))
    return oe.Not;
  var u, l;
  if (n) {
    var f = n[a];
    Z(f) ? (u = f.name, l = f.type) : V(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? oe.Must : oe.Not;
  if (t === Gt) {
    var h = r;
    if (e === En) {
      for (var v = h[a], c = 0; c < (v || []).length && c < s; c++)
        if ((o = S(v[i + c])) != null)
          return o;
    } else
      for (var c = 0; c < h.length && c < s; c++) {
        var d = h[i + c];
        if (d && (o = S(d[a])) != null)
          return o;
      }
  } else if (t === Re) {
    var p = r;
    if (!u)
      return oe.Not;
    for (var c = 0; c < p.length && c < s; c++) {
      var m = p[c];
      if (m && (o = S(m[u])) != null)
        return o;
    }
  } else if (t === je) {
    var g = r;
    if (!u)
      return oe.Not;
    var v = g[u];
    if (!v || ie(v))
      return oe.Not;
    for (var c = 0; c < v.length && c < s; c++)
      if ((o = S(v[c])) != null)
        return o;
  } else if (t === fe)
    for (var y = r, c = 0; c < y.length && c < s; c++) {
      var m = y[c], _ = ja(m);
      if (!z(_))
        return oe.Not;
      if ((o = S(_[a])) != null)
        return o;
    }
  function S(b) {
    var x = V(b);
    if (b != null && isFinite(Number(b)) && b !== "")
      return x ? oe.Might : oe.Not;
    if (x && b !== "-")
      return oe.Must;
  }
  return oe.Not;
}
var lh = Y();
function hM(r, t) {
  qe(lh.get(r) == null && t), lh.set(r, t);
}
function vM(r, t, e) {
  var n = lh.get(t);
  if (!n)
    return e;
  var i = n(r);
  return i ? e.concat(i) : e;
}
var hp = vt();
vt();
var Wv = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getColorFromPalette = function(t, e, n) {
      var i = Xt(this.get("color", !0)), a = this.get("colorLayer", !0);
      return dM(this, hp, i, a, t, e, n);
    }, r.prototype.clearColorPalette = function() {
      pM(this, hp);
    }, r;
  })()
);
function cM(r, t) {
  for (var e = r.length, n = 0; n < e; n++)
    if (r[n].length > t)
      return r[n];
  return r[e - 1];
}
function dM(r, t, e, n, i, a, o) {
  a = a || r;
  var s = t(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(i))
    return l[i];
  var f = o == null || !n ? e : cM(n, o);
  if (f = f || e, !(!f || !f.length)) {
    var h = f[u];
    return i && (l[i] = h), s.paletteIdx = (u + 1) % f.length, h;
  }
}
function pM(r, t) {
  t(r).paletteIdx = 0, t(r).paletteNameMap = {};
}
var No, Gi, vp, cp = "\0_ec_inner", gM = 1, Yv = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e, n, i, a, o, s) {
      a = a || {}, this.option = null, this._theme = new Tt(a), this._locale = new Tt(o), this._optionManager = s;
    }, t.prototype.setOption = function(e, n, i) {
      var a = gp(n);
      this._optionManager.setOption(e, i, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(e, n) {
      return this._resetOption(e, gp(n));
    }, t.prototype._resetOption = function(e, n) {
      var i = !1, a = this._optionManager;
      if (!e || e === "recreate") {
        var o = a.mountOption(e === "recreate");
        !this.option || e === "recreate" ? vp(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
      }
      if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
        var s = a.getTimelineOption(this);
        s && (i = !0, this._mergeOption(s, n));
      }
      if (!e || e === "recreate" || e === "media") {
        var u = a.getMediaOption(this);
        u.length && T(u, function(l) {
          i = !0, this._mergeOption(l, n);
        }, this);
      }
      return i;
    }, t.prototype.mergeOption = function(e) {
      this._mergeOption(e, null);
    }, t.prototype._mergeOption = function(e, n) {
      var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], u = Y(), l = n && n.replaceMergeMainTypeMap;
      sM(this), T(e, function(h, v) {
        h != null && (ct.hasClass(v) ? v && (s.push(v), u.set(v, !0)) : i[v] = i[v] == null ? tt(h) : at(i[v], h, !0));
      }), l && l.each(function(h, v) {
        ct.hasClass(v) && !u.get(v) && (s.push(v), u.set(v, !0));
      }), ct.topologicalTravel(s, ct.getAllClassMainTypes(), f, this);
      function f(h) {
        var v = vM(this, h, Xt(e[h])), c = a.get(h), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          c ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), p = Px(c, v, d);
        zx(p, h, ct), i[h] = null, a.set(h, null), o.set(h, 0);
        var m = [], g = [], y = 0, _;
        T(p, function(S, b) {
          var x = S.existing, w = S.newOption;
          if (!w)
            x && (x.mergeOption({}, this), x.optionUpdated({}, !1));
          else {
            var D = h === "series", C = ct.getClass(
              h,
              S.keyInfo.subType,
              !D
              // Give a more detailed warn later if series don't exists
            );
            if (!C)
              return;
            if (h === "tooltip") {
              if (_)
                return;
              _ = !0;
            }
            if (x && x.constructor === C)
              x.name = S.keyInfo.name, x.mergeOption(w, this), x.optionUpdated(w, !1);
            else {
              var M = B({
                componentIndex: b
              }, S.keyInfo);
              x = new C(w, this, this, M), B(x, M), S.brandNew && (x.__requireNewView = !0), x.init(w, this, this), x.optionUpdated(null, !0);
            }
          }
          x ? (m.push(x.option), g.push(x), y++) : (m.push(void 0), g.push(void 0));
        }, this), i[h] = m, a.set(h, g), o.set(h, y), h === "series" && No(this);
      }
      this._seriesIndices || No(this);
    }, t.prototype.getOption = function() {
      var e = tt(this.option);
      return T(e, function(n, i) {
        if (ct.hasClass(i)) {
          for (var a = Xt(n), o = a.length, s = !1, u = o - 1; u >= 0; u--)
            a[u] && !Pa(a[u]) ? s = !0 : (a[u] = null, !s && o--);
          a.length = o, e[i] = a;
        }
      }), delete e[cp], e;
    }, t.prototype.setTheme = function(e) {
      this._theme = new Tt(e), this._resetOption("recreate", null);
    }, t.prototype.getTheme = function() {
      return this._theme;
    }, t.prototype.getLocaleModel = function() {
      return this._locale;
    }, t.prototype.setUpdatePayload = function(e) {
      this._payload = e;
    }, t.prototype.getUpdatePayload = function() {
      return this._payload;
    }, t.prototype.getComponent = function(e, n) {
      var i = this._componentsMap.get(e);
      if (i) {
        var a = i[n || 0];
        if (a)
          return a;
        if (n == null) {
          for (var o = 0; o < i.length; o++)
            if (i[o])
              return i[o];
        }
      }
    }, t.prototype.queryComponents = function(e) {
      var n = e.mainType;
      if (!n)
        return [];
      var i = e.index, a = e.id, o = e.name, s = this._componentsMap.get(n);
      if (!s || !s.length)
        return [];
      var u;
      return i != null ? (u = [], T(Xt(i), function(l) {
        s[l] && u.push(s[l]);
      })) : a != null ? u = dp("id", a, s) : o != null ? u = dp("name", o, s) : u = kt(s, function(l) {
        return !!l;
      }), pp(u, e);
    }, t.prototype.findComponents = function(e) {
      var n = e.query, i = e.mainType, a = s(n), o = a ? this.queryComponents(a) : kt(this._componentsMap.get(i), function(l) {
        return !!l;
      });
      return u(pp(o, e));
      function s(l) {
        var f = i + "Index", h = i + "Id", v = i + "Name";
        return l && (l[f] != null || l[h] != null || l[v] != null) ? {
          mainType: i,
          // subType will be filtered finally.
          index: l[f],
          id: l[h],
          name: l[v]
        } : null;
      }
      function u(l) {
        return e.filter ? kt(l, e.filter) : l;
      }
    }, t.prototype.eachComponent = function(e, n, i) {
      var a = this._componentsMap;
      if (Q(e)) {
        var o = n, s = e;
        a.each(function(h, v) {
          for (var c = 0; h && c < h.length; c++) {
            var d = h[c];
            d && s.call(o, v, d, d.componentIndex);
          }
        });
      } else
        for (var u = V(e) ? a.get(e) : Z(e) ? this.findComponents(e) : null, l = 0; u && l < u.length; l++) {
          var f = u[l];
          f && n.call(i, f, f.componentIndex);
        }
    }, t.prototype.getSeriesByName = function(e) {
      var n = Ze(e, null);
      return kt(this._componentsMap.get("series"), function(i) {
        return !!i && n != null && i.name === n;
      });
    }, t.prototype.getSeriesByIndex = function(e) {
      return this._componentsMap.get("series")[e];
    }, t.prototype.getSeriesByType = function(e) {
      return kt(this._componentsMap.get("series"), function(n) {
        return !!n && n.subType === e;
      });
    }, t.prototype.getSeries = function() {
      return kt(this._componentsMap.get("series"), function(e) {
        return !!e;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(e, n) {
      Gi(this), T(this._seriesIndices, function(i) {
        var a = this._componentsMap.get("series")[i];
        e.call(n, a, i);
      }, this);
    }, t.prototype.eachRawSeries = function(e, n) {
      T(this._componentsMap.get("series"), function(i) {
        i && e.call(n, i, i.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(e, n, i) {
      Gi(this), T(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === e && n.call(i, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(e, n, i) {
      return T(this.getSeriesByType(e), n, i);
    }, t.prototype.isSeriesFiltered = function(e) {
      return Gi(this), this._seriesIndicesMap.get(e.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(e, n) {
      Gi(this);
      var i = [];
      T(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        e.call(n, o, a) && i.push(a);
      }, this), this._seriesIndices = i, this._seriesIndicesMap = Y(i);
    }, t.prototype.restoreData = function(e) {
      No(this);
      var n = this._componentsMap, i = [];
      n.each(function(a, o) {
        ct.hasClass(o) && i.push(o);
      }), ct.topologicalTravel(i, ct.getAllClassMainTypes(), function(a) {
        T(n.get(a), function(o) {
          o && (a !== "series" || !mM(o, e)) && o.restoreData();
        });
      });
    }, t.internalField = (function() {
      No = function(e) {
        var n = e._seriesIndices = [];
        T(e._componentsMap.get("series"), function(i) {
          i && n.push(i.componentIndex);
        }), e._seriesIndicesMap = Y(n);
      }, Gi = function(e) {
      }, vp = function(e, n) {
        e.option = {}, e.option[cp] = gM, e._componentsMap = Y({
          series: []
        }), e._componentsCount = Y();
        var i = n.aria;
        Z(i) && i.enabled == null && (i.enabled = !0), yM(n, e._theme.option), at(n, X0, !1), e._mergeOption(n, null);
      };
    })(), t;
  })(Tt)
);
function mM(r, t) {
  if (t) {
    var e = t.seriesIndex, n = t.seriesId, i = t.seriesName;
    return e != null && r.componentIndex !== e || n != null && r.id !== n || i != null && r.name !== i;
  }
}
function yM(r, t) {
  var e = r.color && !r.colorLayer;
  T(t, function(n, i) {
    i === "colorLayer" && e || i === "color" && r.color || ct.hasClass(i) || (typeof n == "object" ? r[i] = r[i] ? at(r[i], n, !1) : tt(n) : r[i] == null && (r[i] = n));
  });
}
function dp(r, t, e) {
  if (z(t)) {
    var n = Y();
    return T(t, function(a) {
      if (a != null) {
        var o = Ze(a, null);
        o != null && n.set(a, !0);
      }
    }), kt(e, function(a) {
      return a && n.get(a[r]);
    });
  } else {
    var i = Ze(t, null);
    return kt(e, function(a) {
      return a && i != null && a[r] === i;
    });
  }
}
function pp(r, t) {
  return t.hasOwnProperty("subType") ? kt(r, function(e) {
    return e && e.subType === t.subType;
  }) : r;
}
function gp(r) {
  var t = Y();
  return r && T(Xt(r.replaceMerge), function(e) {
    t.set(e, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
Je(Yv, Wv);
var _M = /^(min|max)?(.+)$/, SM = (
  /** @class */
  (function() {
    function r(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return r.prototype.setOption = function(t, e, n) {
      t && (T(Xt(t.series), function(o) {
        o && o.data && ie(o.data) && Tf(o.data);
      }), T(Xt(t.dataset), function(o) {
        o && o.source && ie(o.source) && Tf(o.source);
      })), t = tt(t);
      var i = this._optionBackup, a = bM(t, e, !i);
      this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, r.prototype.mountOption = function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], tt(t ? e.baseOption : this._newBaseOption);
    }, r.prototype.getTimelineOption = function(t) {
      var e, n = this._timelineOptions;
      if (n.length) {
        var i = t.getComponent("timeline");
        i && (e = tt(
          // FIXME:TS as TimelineModel or quivlant interface
          n[i.getCurrentIndex()]
        ));
      }
      return e;
    }, r.prototype.getMediaOption = function(t) {
      var e = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!i.length && !a)
        return s;
      for (var u = 0, l = i.length; u < l; u++)
        xM(i[u].query, e, n) && o.push(u);
      return !o.length && a && (o = [-1]), o.length && !TM(o, this._currentMediaIndices) && (s = U(o, function(f) {
        return tt(f === -1 ? a.option : i[f].option);
      })), this._currentMediaIndices = o, s;
    }, r;
  })()
);
function bM(r, t, e) {
  var n = [], i, a, o = r.baseOption, s = r.timeline, u = r.options, l = r.media, f = !!r.media, h = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (r.options = r.media = null), a = r), f && z(l) && T(l, function(c) {
    c && c.option && (c.query ? n.push(c) : i || (i = c));
  }), v(a), T(u, function(c) {
    return v(c);
  }), T(n, function(c) {
    return v(c.option);
  });
  function v(c) {
    T(t, function(d) {
      d(c, e);
    });
  }
  return {
    baseOption: a,
    timelineOptions: u || [],
    mediaDefault: i,
    mediaList: n
  };
}
function xM(r, t, e) {
  var n = {
    width: t,
    height: e,
    aspectratio: t / e
    // lower case for convenience.
  }, i = !0;
  return T(r, function(a, o) {
    var s = o.match(_M);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      wM(n[l], a, u) || (i = !1);
    }
  }), i;
}
function wM(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function TM(r, t) {
  return r.join(",") === t.join(",");
}
var De = T, za = Z, mp = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function Vl(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0, n = mp.length; e < n; e++) {
      var i = mp[e], a = t.normal, o = t.emphasis;
      a && a[i] && (r[i] = r[i] || {}, r[i].normal ? at(r[i].normal, a[i]) : r[i].normal = a[i], a[i] = null), o && o[i] && (r[i] = r[i] || {}, r[i].emphasis ? at(r[i].emphasis, o[i]) : r[i].emphasis = o[i], o[i] = null);
    }
}
function Ht(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var n = r[t].normal, i = r[t].emphasis;
    n && (e ? (r[t].normal = r[t].emphasis = null, ut(r[t], n)) : r[t] = n), i && (r.emphasis = r.emphasis || {}, r.emphasis[t] = i, i.focus && (r.emphasis.focus = i.focus), i.blurScope && (r.emphasis.blurScope = i.blurScope));
  }
}
function va(r) {
  Ht(r, "itemStyle"), Ht(r, "lineStyle"), Ht(r, "areaStyle"), Ht(r, "label"), Ht(r, "labelLine"), Ht(r, "upperLabel"), Ht(r, "edgeLabel");
}
function Dt(r, t) {
  var e = za(r) && r[t], n = za(e) && e.textStyle;
  if (n)
    for (var i = 0, a = dd.length; i < a; i++) {
      var o = dd[i];
      n.hasOwnProperty(o) && (e[o] = n[o]);
    }
}
function pe(r) {
  r && (va(r), Dt(r, "label"), r.emphasis && Dt(r.emphasis, "label"));
}
function CM(r) {
  if (za(r)) {
    Vl(r), va(r), Dt(r, "label"), Dt(r, "upperLabel"), Dt(r, "edgeLabel"), r.emphasis && (Dt(r.emphasis, "label"), Dt(r.emphasis, "upperLabel"), Dt(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (Vl(t), pe(t));
    var e = r.markLine;
    e && (Vl(e), pe(e));
    var n = r.markArea;
    n && pe(n);
    var i = r.data;
    if (r.type === "graph") {
      i = i || r.nodes;
      var a = r.links || r.edges;
      if (a && !ie(a))
        for (var o = 0; o < a.length; o++)
          pe(a[o]);
      T(r.categories, function(l) {
        va(l);
      });
    }
    if (i && !ie(i))
      for (var o = 0; o < i.length; o++)
        pe(i[o]);
    if (t = r.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        pe(s[o]);
    if (e = r.markLine, e && e.data)
      for (var u = e.data, o = 0; o < u.length; o++)
        z(u[o]) ? (pe(u[o][0]), pe(u[o][1])) : pe(u[o]);
    r.type === "gauge" ? (Dt(r, "axisLabel"), Dt(r, "title"), Dt(r, "detail")) : r.type === "treemap" ? (Ht(r.breadcrumb, "itemStyle"), T(r.levels, function(l) {
      va(l);
    })) : r.type === "tree" && va(r.leaves);
  }
}
function rr(r) {
  return z(r) ? r : r ? [r] : [];
}
function yp(r) {
  return (z(r) ? r[0] : r) || {};
}
function MM(r, t) {
  De(rr(r.series), function(n) {
    za(n) && CM(n);
  });
  var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), De(e, function(n) {
    De(rr(r[n]), function(i) {
      i && (Dt(i, "axisLabel"), Dt(i.axisPointer, "label"));
    });
  }), De(rr(r.parallel), function(n) {
    var i = n && n.parallelAxisDefault;
    Dt(i, "axisLabel"), Dt(i && i.axisPointer, "label");
  }), De(rr(r.calendar), function(n) {
    Ht(n, "itemStyle"), Dt(n, "dayLabel"), Dt(n, "monthLabel"), Dt(n, "yearLabel");
  }), De(rr(r.radar), function(n) {
    Dt(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap);
  }), De(rr(r.geo), function(n) {
    za(n) && (pe(n), De(rr(n.regions), function(i) {
      pe(i);
    }));
  }), De(rr(r.timeline), function(n) {
    pe(n), Ht(n, "label"), Ht(n, "itemStyle"), Ht(n, "controlStyle", !0);
    var i = n.data;
    z(i) && T(i, function(a) {
      Z(a) && (Ht(a, "label"), Ht(a, "itemStyle"));
    });
  }), De(rr(r.toolbox), function(n) {
    Ht(n, "iconStyle"), De(n.feature, function(i) {
      Ht(i, "iconStyle");
    });
  }), Dt(yp(r.axisPointer), "label"), Dt(yp(r.tooltip).axisPointer, "label");
}
function DM(r, t) {
  for (var e = t.split(","), n = r, i = 0; i < e.length && (n = n && n[e[i]], n != null); i++)
    ;
  return n;
}
function AM(r, t, e, n) {
  for (var i = t.split(","), a = r, o, s = 0; s < i.length - 1; s++)
    o = i[s], a[o] == null && (a[o] = {}), a = a[o];
  a[i[s]] == null && (a[i[s]] = e);
}
function _p(r) {
  r && T(IM, function(t) {
    t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
  });
}
var IM = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], LM = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], Gl = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function Ui(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < Gl.length; e++) {
      var n = Gl[e][1], i = Gl[e][0];
      t[n] != null && (t[i] = t[n]);
    }
}
function Sp(r) {
  r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (r.edgeDistance = r.margin);
}
function bp(r) {
  r && r.downplay && !r.blur && (r.blur = r.downplay);
}
function PM(r) {
  r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (r.emphasis.focus = "adjacency"));
}
function Q0(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++)
      t(r[e]), r[e] && Q0(r[e].children, t);
}
function J0(r, t) {
  MM(r, t), r.series = Xt(r.series), T(r.series, function(e) {
    if (Z(e)) {
      var n = e.type;
      if (n === "line")
        e.clipOverflow != null && (e.clip = e.clipOverflow);
      else if (n === "pie" || n === "gauge") {
        e.clockWise != null && (e.clockwise = e.clockWise), Sp(e.label);
        var i = e.data;
        if (i && !ie(i))
          for (var a = 0; a < i.length; a++)
            Sp(i[a]);
        e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (e.emphasis.scaleSize = e.hoverOffset));
      } else if (n === "gauge") {
        var o = DM(e, "pointer.color");
        o != null && AM(e, "itemStyle.color", o);
      } else if (n === "bar") {
        Ui(e), Ui(e.backgroundStyle), Ui(e.emphasis);
        var i = e.data;
        if (i && !ie(i))
          for (var a = 0; a < i.length; a++)
            typeof i[a] == "object" && (Ui(i[a]), Ui(i[a] && i[a].emphasis));
      } else if (n === "sunburst") {
        var s = e.highlightPolicy;
        s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s)), bp(e), Q0(e.data, bp);
      } else n === "graph" || n === "sankey" ? PM(e) : n === "map" && (e.mapType && !e.map && (e.map = e.mapType), e.mapLocation && ut(e, e.mapLocation));
      e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (e.emphasis.scale = e.hoverAnimation)), _p(e);
    }
  }), r.dataRange && (r.visualMap = r.dataRange), T(LM, function(e) {
    var n = r[e];
    n && (z(n) || (n = [n]), T(n, function(i) {
      _p(i);
    }));
  });
}
var RM = lv(EM);
function EM(r) {
  var t = Y();
  r.eachSeries(function(e) {
    var n = e.get("stack");
    if (n) {
      var i = t.get(n) || t.set(n, []), a = e.getData(), o = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: a.getCalculationInfo("stackResultDimension"),
        stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
        stackedDimension: a.getCalculationInfo("stackedDimension"),
        stackedByDimension: a.getCalculationInfo("stackedByDimension"),
        isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
        data: a,
        seriesModel: e
      };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      i.push(o);
    }
  }), t.each(function(e) {
    if (e.length !== 0) {
      var n = e[0].seriesModel, i = n.get("stackOrder") || "seriesAsc";
      i === "seriesDesc" && e.reverse(), T(e, function(a, o) {
        a.data.setCalculationInfo("stackedOnSeries", o > 0 ? e[o - 1].seriesModel : null);
      }), OM(e);
    }
  });
}
function OM(r) {
  T(r, function(t, e) {
    var n = [], i = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, u = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(l, f, h) {
      var v = o.get(t.stackedDimension, h);
      if (isNaN(v))
        return i;
      var c, d;
      s ? d = o.getRawIndex(h) : c = o.get(t.stackedByDimension, h);
      for (var p = NaN, m = e - 1; m >= 0; m--) {
        var g = r[m];
        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
          var y = g.data.getByRawIndex(g.stackResultDimension, d);
          if (u === "all" || u === "positive" && y > 0 || u === "negative" && y < 0 || u === "samesign" && v >= 0 && y > 0 || u === "samesign" && v <= 0 && y < 0) {
            v = cn(v, y), p = y;
            break;
          }
        }
      }
      return n[0] = v, n[1] = p, n;
    });
  });
}
var Bu = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.data = t.data || (t.sourceFormat === je ? {} : []), this.sourceFormat = t.sourceFormat || Ky, this.seriesLayoutBy = t.seriesLayoutBy || Xe, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var e = this.dimensionsDefine = t.dimensionsDefine;
      if (e)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.type == null && K0(this, n) === oe.Must && (i.type = "ordinal");
        }
    }
    return r;
  })()
);
function Zv(r) {
  return r instanceof Bu;
}
function fh(r, t, e) {
  e = e || t_(r);
  var n = t.seriesLayoutBy, i = BM(r, e, n, t.sourceHeader, t.dimensions), a = new Bu({
    data: r,
    sourceFormat: e,
    seriesLayoutBy: n,
    dimensionsDefine: i.dimensionsDefine,
    startIndex: i.startIndex,
    dimensionsDetectedCount: i.dimensionsDetectedCount,
    metaRawOption: tt(t)
  });
  return a;
}
function j0(r) {
  return new Bu({
    data: r,
    sourceFormat: ie(r) ? Pr : fe
  });
}
function kM(r) {
  return new Bu({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: tt(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount
  });
}
function t_(r) {
  var t = Ky;
  if (ie(r))
    t = Pr;
  else if (z(r)) {
    r.length === 0 && (t = Gt);
    for (var e = 0, n = r.length; e < n; e++) {
      var i = r[e];
      if (i != null) {
        if (z(i) || ie(i)) {
          t = Gt;
          break;
        } else if (Z(i)) {
          t = Re;
          break;
        }
      }
    }
  } else if (Z(r)) {
    for (var a in r)
      if (ee(r, a) && ne(r[a])) {
        t = je;
        break;
      }
  }
  return t;
}
function BM(r, t, e, n, i) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: xp(i),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === Gt) {
    var s = r;
    n === "auto" || n == null ? wp(function(l) {
      l != null && l !== "-" && (V(l) ? o == null && (o = 1) : o = 0);
    }, e, s, 10) : o = wt(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], wp(function(l, f) {
      i[f] = l != null ? l + "" : "";
    }, e, s, 1 / 0)), a = i ? i.length : e === En ? s.length : s[0] ? s[0].length : null;
  } else if (t === Re)
    i || (i = NM(r));
  else if (t === je)
    i || (i = [], T(r, function(l, f) {
      i.push(f);
    }));
  else if (t === fe) {
    var u = ja(r[0]);
    a = z(u) && u.length || 1;
  }
  return {
    startIndex: o,
    dimensionsDefine: xp(i),
    dimensionsDetectedCount: a
  };
}
function NM(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); )
    ;
  if (e)
    return xt(e);
}
function xp(r) {
  if (r) {
    var t = Y();
    return U(r, function(e, n) {
      e = Z(e) ? e : {
        name: e
      };
      var i = {
        name: e.name,
        displayName: e.displayName,
        type: e.type
      };
      if (i.name == null)
        return i;
      i.name += "", i.displayName == null && (i.displayName = i.name);
      var a = t.get(i.name);
      return a ? i.name += "-" + a.count++ : t.set(i.name, {
        count: 1
      }), i;
    });
  }
}
function wp(r, t, e, n) {
  if (t === En)
    for (var i = 0; i < e.length && i < n; i++)
      r(e[i] ? e[i][0] : null, i);
  else
    for (var a = e[0] || [], i = 0; i < a.length && i < n; i++)
      r(a[i], i);
}
function e_(r) {
  var t = r.sourceFormat;
  return t === Re || t === je;
}
var sn, un, ln, fn, Tp, Cp, r_ = (
  /** @class */
  (function() {
    function r(t, e) {
      var n = Zv(t) ? t : j0(t);
      this._source = n;
      var i = this._data = n.data, a = n.sourceFormat;
      n.seriesLayoutBy, a === Pr && (this._offset = 0, this._dimSize = e, this._data = i), Cp(this, i, n);
    }
    return r.prototype.getSource = function() {
      return this._source;
    }, r.prototype.count = function() {
      return 0;
    }, r.prototype.getItem = function(t, e) {
    }, r.prototype.appendData = function(t) {
    }, r.prototype.clean = function() {
    }, r.protoInitialize = (function() {
      var t = r.prototype;
      t.pure = !1, t.persistent = !0;
    })(), r.internalField = (function() {
      var t;
      Cp = function(o, s, u) {
        var l = u.sourceFormat, f = u.seriesLayoutBy, h = u.startIndex, v = u.dimensionsDefine, c = Tp[Xv(l, f)];
        if (B(o, c), l === Pr)
          o.getItem = e, o.count = i, o.fillStorage = n;
        else {
          var d = n_(l, f);
          o.getItem = K(d, null, s, h, v);
          var p = i_(l, f);
          o.count = K(p, null, s, h, v);
        }
      };
      var e = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var u = this._data, l = this._dimSize, f = l * o, h = 0; h < l; h++)
          s[h] = u[f + h];
        return s;
      }, n = function(o, s, u, l) {
        for (var f = this._data, h = this._dimSize, v = 0; v < h; v++) {
          for (var c = l[v], d = c[0] == null ? 1 / 0 : c[0], p = c[1] == null ? -1 / 0 : c[1], m = s - o, g = u[v], y = 0; y < m; y++) {
            var _ = f[y * h + v];
            g[o + y] = _, _ < d && (d = _), _ > p && (p = _);
          }
          c[0] = d, c[1] = p;
        }
      }, i = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      Tp = (t = {}, t[Gt + "_" + Xe] = {
        pure: !0,
        appendData: a
      }, t[Gt + "_" + En] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[Re] = {
        pure: !0,
        appendData: a
      }, t[je] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          T(o, function(u, l) {
            for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++)
              f.push(u[h]);
          });
        }
      }, t[fe] = {
        appendData: a
      }, t[Pr] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          this._data = o;
        },
        // Clean self if data is already used.
        clean: function() {
          this._offset += this.count(), this._data = null;
        }
      }, t);
      function a(o) {
        for (var s = 0; s < o.length; s++)
          this._data.push(o[s]);
      }
    })(), r;
  })()
), Fo = function(r) {
  z(r) || Iy("series.data or dataset.source must be an array.");
};
sn = {}, sn[Gt + "_" + Xe] = Fo, sn[Gt + "_" + En] = Fo, sn[Re] = Fo, sn[je] = function(r, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e].name;
    n == null && Iy("dimension name must not be null/undefined.");
  }
}, sn[fe] = Fo;
var Mp = function(r, t, e, n) {
  return r[n];
}, FM = (un = {}, un[Gt + "_" + Xe] = function(r, t, e, n) {
  return r[n + t];
}, un[Gt + "_" + En] = function(r, t, e, n, i) {
  n += t;
  for (var a = i || [], o = r, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[n] : null;
  }
  return a;
}, un[Re] = Mp, un[je] = function(r, t, e, n, i) {
  for (var a = i || [], o = 0; o < e.length; o++) {
    var s = e[o].name, u = s != null ? r[s] : null;
    a[o] = u ? u[n] : null;
  }
  return a;
}, un[fe] = Mp, un);
function n_(r, t) {
  var e = FM[Xv(r, t)];
  return e;
}
var Dp = function(r, t, e) {
  return r.length;
}, zM = (ln = {}, ln[Gt + "_" + Xe] = function(r, t, e) {
  return Math.max(0, r.length - t);
}, ln[Gt + "_" + En] = function(r, t, e) {
  var n = r[0];
  return n ? Math.max(0, n.length - t) : 0;
}, ln[Re] = Dp, ln[je] = function(r, t, e) {
  var n = e[0].name, i = n != null ? r[n] : null;
  return i ? i.length : 0;
}, ln[fe] = Dp, ln);
function i_(r, t) {
  var e = zM[Xv(r, t)];
  return e;
}
var Ul = function(r, t, e) {
  return r[t];
}, HM = (fn = {}, fn[Gt] = Ul, fn[Re] = function(r, t, e) {
  return r[e];
}, fn[je] = Ul, fn[fe] = function(r, t, e) {
  var n = ja(r);
  return n instanceof Array ? n[t] : n;
}, fn[Pr] = Ul, fn);
function a_(r) {
  var t = HM[r];
  return t;
}
function Xv(r, t) {
  return r === Gt ? r + "_" + t : r;
}
function wi(r, t, e) {
  if (r) {
    var n = r.getRawDataItem(t);
    if (n != null) {
      var i = r.getStore(), a = i.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e), s = i.getDimensionProperty(o);
        return a_(a)(n, o, s);
      } else {
        var u = n;
        return a === fe && (u = ja(n)), u;
      }
    }
  }
}
var VM = /\{@(.+?)\}/g, GM = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getDataParams = function(t, e) {
      var n = this.getData(e), i = this.getRawValue(t, e), a = n.getRawIndex(t), o = n.getName(t), s = n.getRawDataItem(t), u = n.getItemVisual(t, "style"), l = u && u[n.getItemVisual(t, "drawType") || "fill"], f = u && u.stroke, h = this.mainType, v = h === "series", c = n.userOutput && n.userOutput.get();
      return {
        componentType: h,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: v ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: v ? this.id : null,
        seriesName: v ? this.name : null,
        name: o,
        dataIndex: a,
        data: s,
        dataType: e,
        value: i,
        color: l,
        borderColor: f,
        dimensionNames: c ? c.fullDimensions : null,
        encode: c ? c.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    }, r.prototype.getFormattedLabel = function(t, e, n, i, a, o) {
      e = e || "normal";
      var s = this.getData(n), u = this.getDataParams(t, n);
      if (o && (u.value = o.interpolatedValue), i != null && z(u.value) && (u.value = u.value[i]), !a) {
        var l = s.getItemModel(t);
        a = l.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
      }
      if (Q(a))
        return u.status = e, u.dimensionIndex = i, a(u);
      if (V(a)) {
        var f = U0(a, u);
        return f.replace(VM, function(h, v) {
          var c = v.length, d = v;
          d.charAt(0) === "[" && d.charAt(c - 1) === "]" && (d = +d.slice(1, c - 1));
          var p = wi(s, t, d);
          if (o && z(o.interpolatedValue)) {
            var m = s.getDimensionIndex(d);
            m >= 0 && (p = o.interpolatedValue[m]);
          }
          return p != null ? p + "" : "";
        });
      }
    }, r.prototype.getRawValue = function(t, e) {
      return wi(this.getData(e), t);
    }, r.prototype.formatTooltip = function(t, e, n) {
    }, r;
  })()
);
function Ap(r) {
  var t, e;
  return Z(r) ? r.type && (e = r) : t = r, {
    text: t,
    // markers: markers || markersExisting,
    frag: e
  };
}
function Ta(r) {
  return new UM(r);
}
var UM = (
  /** @class */
  (function() {
    function r(t) {
      t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0;
    }
    return r.prototype.perform = function(t) {
      var e = this._upstream, n = t && t.skip;
      if (this._dirty && e) {
        var i = this.context;
        i.data = i.outputData = e.context.outputData;
      }
      this.__pipeline && (this.__pipeline.currentTask = this);
      var a;
      this._plan && !n && (a = this._plan(this.context));
      var o = f(this._modBy), s = this._modDataCount || 0, u = f(t && t.modBy), l = t && t.modDataCount || 0;
      (o !== u || s !== l) && (a = "reset");
      function f(y) {
        return !(y >= 1) && (y = 1), y;
      }
      var h;
      (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(n)), this._modBy = u, this._modDataCount = l;
      var v = t && t.step;
      if (e ? this._dueEnd = e._outputDueEnd : this._dueEnd = this._count ? this._count(this.context) : 1 / 0, this._progress) {
        var c = this._dueIndex, d = Math.min(v != null ? this._dueIndex + v : 1 / 0, this._dueEnd);
        if (!n && (h || c < d)) {
          var p = this._progress;
          if (z(p))
            for (var m = 0; m < p.length; m++)
              this._doProgress(p[m], c, d, u, l);
          else
            this._doProgress(p, c, d, u, l);
        }
        this._dueIndex = d;
        var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        this._outputDueEnd = g;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, r.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, r.prototype._doProgress = function(t, e, n, i, a) {
      Ip.reset(e, n, i, a), this._callingProgress = t, this._callingProgress({
        start: e,
        end: n,
        count: n - e,
        next: Ip.next
      }, this.context);
    }, r.prototype._doReset = function(t) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var e, n;
      !t && this._reset && (e = this._reset(this.context), e && e.progress && (n = e.forceFirstProgress, e = e.progress), z(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
      var i = this._downstream;
      return i && i.dirty(), n;
    }, r.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, r.prototype.pipe = function(t) {
      (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
    }, r.prototype.dispose = function() {
      this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
    }, r.prototype.getUpstream = function() {
      return this._upstream;
    }, r.prototype.getDownstream = function() {
      return this._downstream;
    }, r.prototype.setOutputEnd = function(t) {
      this._outputDueEnd = this._settedOutputEnd = t;
    }, r;
  })()
), Ip = /* @__PURE__ */ (function() {
  var r, t, e, n, i, a = {
    reset: function(u, l, f, h) {
      t = u, r = l, e = f, n = h, i = Math.ceil(n / e), a.next = e > 1 && n > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return t < r ? t++ : null;
  }
  function s() {
    var u = t % i * e + Math.ceil(t / i), l = t >= r ? null : u < n ? u : t;
    return t++, l;
  }
})();
function bs(r, t) {
  var e = t && t.type;
  return e === "ordinal" ? r : (e === "time" && !wt(r) && r != null && r !== "-" && (r = +Oi(r)), r == null || r === "" ? NaN : Number(r));
}
Y({
  number: function(r) {
    return parseFloat(r);
  },
  time: function(r) {
    return +Oi(r);
  },
  trim: function(r) {
    return V(r) ? Ve(r) : r;
  }
});
var WM = (
  /** @class */
  (function() {
    function r(t, e) {
      var n = t === "desc";
      this._resultLT = n ? 1 : -1, e == null && (e = n ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0;
    }
    return r.prototype.evaluate = function(t, e) {
      var n = wt(t) ? t : Fs(t), i = wt(e) ? e : Fs(e), a = isNaN(n), o = isNaN(i);
      if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
        var s = V(t), u = V(e);
        s && (n = u ? t : 0), u && (i = s ? e : 0);
      }
      return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
    }, r;
  })()
);
function YM(r) {
  var t = "", e = -1 / 0, n = -1 / 0, i = 1 / 0, a = 1 / 0;
  return r && (r.g != null && (t += "G" + r.g, e = r.g), r.ge != null && (t += "GE" + r.ge, n = r.ge), r.l != null && (t += "L" + r.l, i = r.l), r.le != null && (t += "LE" + r.le, a = r.le)), {
    key: t,
    g: e,
    ge: n,
    l: i,
    le: a
  };
}
function ZM(r, t) {
  return t > r.g && t >= r.ge && t < r.l && t <= r.le;
}
var XM = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getRawData = function() {
      throw new Error("not supported");
    }, r.prototype.getRawDataItem = function(t) {
      throw new Error("not supported");
    }, r.prototype.cloneRawData = function() {
    }, r.prototype.getDimensionInfo = function(t) {
    }, r.prototype.cloneAllDimensionInfo = function() {
    }, r.prototype.count = function() {
    }, r.prototype.retrieveValue = function(t, e) {
    }, r.prototype.retrieveValueFromItem = function(t, e) {
    }, r.prototype.convertValue = function(t, e) {
      return bs(t, e);
    }, r;
  })()
);
function $M(r, t) {
  var e = new XM(), n = r.data, i = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
  r.seriesLayoutBy !== Xe && Qt(o);
  var s = [], u = {}, l = r.dimensionsDefine;
  if (l)
    T(l, function(p, m) {
      var g = p.name, y = {
        index: m,
        name: g,
        displayName: p.displayName
      };
      if (s.push(y), g != null) {
        var _ = "";
        ee(u, g) && Qt(_), u[g] = y;
      }
    });
  else
    for (var f = 0; f < r.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = n_(i, Xe);
  t.__isBuiltIn && (e.getRawDataItem = function(p) {
    return h(n, a, s, p);
  }, e.getRawData = K(qM, null, r)), e.cloneRawData = K(KM, null, r);
  var v = i_(i, Xe);
  e.count = K(v, null, n, a, s);
  var c = a_(i);
  e.retrieveValue = function(p, m) {
    var g = h(n, a, s, p);
    return d(g, m);
  };
  var d = e.retrieveValueFromItem = function(p, m) {
    if (p != null) {
      var g = s[m];
      if (g)
        return c(p, m, g.name);
    }
  };
  return e.getDimensionInfo = K(QM, null, s, u), e.cloneAllDimensionInfo = K(JM, null, s), e;
}
function qM(r) {
  var t = r.sourceFormat;
  if (!$v(t)) {
    var e = "";
    Qt(e);
  }
  return r.data;
}
function KM(r) {
  var t = r.sourceFormat, e = r.data;
  if (!$v(t)) {
    var n = "";
    Qt(n);
  }
  if (t === Gt) {
    for (var i = [], a = 0, o = e.length; a < o; a++)
      i.push(e[a].slice());
    return i;
  } else if (t === Re) {
    for (var i = [], a = 0, o = e.length; a < o; a++)
      i.push(B({}, e[a]));
    return i;
  }
}
function QM(r, t, e) {
  if (e != null) {
    if (wt(e) || !isNaN(e) && !ee(t, e))
      return r[e];
    if (ee(t, e))
      return t[e];
  }
}
function JM(r) {
  return tt(r);
}
var o_ = Y();
function jM(r) {
  r = tt(r);
  var t = r.type, e = "";
  t || Qt(e);
  var n = t.split(":");
  n.length !== 2 && Qt(e);
  var i = !1;
  n[0] === "echarts" && (t = n[1], i = !0), r.__isBuiltIn = i, o_.set(t, r);
}
function tD(r, t, e) {
  var n = Xt(r), i = n.length, a = "";
  i || Qt(a);
  for (var o = 0, s = i; o < s; o++) {
    var u = n[o];
    t = eD(u, t), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function eD(r, t, e, n) {
  var i = "";
  t.length || Qt(i), Z(r) || Qt(i);
  var a = r.type, o = o_.get(a);
  o || Qt(i);
  var s = U(t, function(l) {
    return $M(l, o);
  }), u = Xt(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: tt(r.config)
  }));
  return U(u, function(l, f) {
    var h = "";
    Z(l) || Qt(h), l.data || Qt(h);
    var v = t_(l.data);
    $v(v) || Qt(h);
    var c, d = t[0];
    if (d && f === 0 && !l.dimensions) {
      var p = d.startIndex;
      p && (l.data = d.data.slice(0, p).concat(l.data)), c = {
        seriesLayoutBy: Xe,
        sourceHeader: p,
        dimensions: d.metaRawOption.dimensions
      };
    } else
      c = {
        seriesLayoutBy: Xe,
        sourceHeader: 0,
        dimensions: l.dimensions
      };
    return fh(l.data, c, null);
  });
}
function $v(r) {
  return r === Gt || r === Re;
}
var rD = typeof Uint32Array === ro ? Array : Uint32Array, nD = typeof Uint16Array === ro ? Array : Uint16Array, s_ = typeof Int32Array === ro ? Array : Int32Array, Lp = typeof Float64Array === ro ? Array : Float64Array, u_ = {
  float: Lp,
  int: s_,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: Lp
}, Wl;
function Wn(r) {
  return r > 65535 ? rD : nD;
}
function iD(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function Pp(r, t, e, n, i) {
  var a = u_[e || "float"];
  if (i) {
    var o = r[t], s = o && o.length;
    if (s !== n) {
      for (var u = new a(n), l = 0; l < s; l++)
        u[l] = o[l];
      r[t] = u;
    }
  } else
    r[t] = new a(n);
}
var hh = (
  /** @class */
  (function() {
    function r() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = Y();
    }
    return r.prototype.initData = function(t, e, n) {
      this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var i = t.getSource(), a = this.defaultDimValueGetter = Wl[i.sourceFormat];
      this._dimValueGetter = n || a, this._rawExtent = [], e_(i), this._dimensions = U(e, function(o) {
        return {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: o.type,
          property: o.property
        };
      }), this._initDataFromProvider(0, t.count());
    }, r.prototype.getProvider = function() {
      return this._provider;
    }, r.prototype.getSource = function() {
      return this._provider.getSource();
    }, r.prototype.ensureCalculationDimension = function(t, e) {
      var n = this._calcDimNameToIdx, i = this._dimensions, a = n.get(t);
      if (a != null) {
        if (i[a].type === e)
          return a;
      } else
        a = i.length;
      return i[a] = {
        type: e
      }, n.set(t, a), this._chunks[a] = new u_[e || "float"](this._rawCount), this._rawExtent[a] = Jt(), a;
    }, r.prototype.collectOrdinalMeta = function(t, e) {
      var n = this._chunks[t], i = this._dimensions[t], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
      o === 0 && (a[t] = Jt());
      for (var u = a[t], l = o; l < s; l++) {
        var f = n[l] = e.parseAndCollect(n[l]);
        isNaN(f) || (u[0] = Math.min(f, u[0]), u[1] = Math.max(f, u[1]));
      }
      i.ordinalMeta = e, i.ordinalOffset = s, i.type = "ordinal";
    }, r.prototype.getOrdinalMeta = function(t) {
      var e = this._dimensions[t], n = e.ordinalMeta;
      return n;
    }, r.prototype.getDimensionProperty = function(t) {
      var e = this._dimensions[t];
      return e && e.property;
    }, r.prototype.appendData = function(t) {
      var e = this._provider, n = this.count();
      e.appendData(t);
      var i = e.count();
      return e.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
    }, r.prototype.appendValues = function(t, e) {
      for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), u = s + Math.max(t.length, e || 0), l = 0; l < a; l++) {
        var f = i[l];
        Pp(n, l, f.type, u, !0);
      }
      for (var h = [], v = s; v < u; v++)
        for (var c = v - s, d = 0; d < a; d++) {
          var f = i[d], p = Wl.arrayRows.call(this, t[c] || h, f.property, c, d);
          n[d][v] = p;
          var m = o[d];
          p < m[0] && (m[0] = p), p > m[1] && (m[1] = p);
        }
      return this._rawCount = this._count = u, {
        start: s,
        end: u
      };
    }, r.prototype._initDataFromProvider = function(t, e, n) {
      for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = U(o, function(y) {
        return y.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        u[f] || (u[f] = Jt()), Pp(a, f, h.type, e, n);
      }
      if (i.fillStorage)
        i.fillStorage(t, e, a, u);
      else
        for (var v = [], c = t; c < e; c++) {
          v = i.getItem(c, v);
          for (var d = 0; d < s; d++) {
            var p = a[d], m = this._dimValueGetter(v, l[d], c, d);
            p[c] = m;
            var g = u[d];
            m < g[0] && (g[0] = m), m > g[1] && (g[1] = m);
          }
        }
      !i.persistent && i.clean && i.clean(), this._rawCount = this._count = e, this._extent = [];
    }, r.prototype.count = function() {
      return this._count;
    }, r.prototype.get = function(t, e) {
      if (!(e >= 0 && e < this._count))
        return NaN;
      var n = this._chunks[t];
      return n ? n[this.getRawIndex(e)] : NaN;
    }, r.prototype.getValues = function(t, e) {
      var n = [], i = [];
      if (e == null) {
        e = t, t = [];
        for (var a = 0; a < this._dimensions.length; a++)
          i.push(a);
      } else
        i = t;
      for (var a = 0, o = i.length; a < o; a++)
        n.push(this.get(i[a], e));
      return n;
    }, r.prototype.getByRawIndex = function(t, e) {
      if (!(e >= 0 && e < this._rawCount))
        return NaN;
      var n = this._chunks[t];
      return n ? n[e] : NaN;
    }, r.prototype.getSum = function(t) {
      var e = this._chunks[t], n = 0;
      if (e)
        for (var i = 0, a = this.count(); i < a; i++) {
          var o = this.get(t, i);
          isNaN(o) || (n += o);
        }
      return n;
    }, r.prototype.getMedian = function(t) {
      var e = [];
      this.each([t], function(i) {
        isNaN(i) || e.push(i);
      }), Cr(e);
      var n = this.count();
      return n === 0 ? 0 : n % 2 === 1 ? e[(n - 1) / 2] : (e[n / 2] + e[n / 2 - 1]) / 2;
    }, r.prototype.indexOfRawIndex = function(t) {
      if (t >= this._rawCount || t < 0)
        return -1;
      if (!this._indices)
        return t;
      var e = this._indices, n = e[t];
      if (n != null && n < this._count && n === t)
        return t;
      for (var i = 0, a = this._count - 1; i <= a; ) {
        var o = (i + a) / 2 | 0;
        if (e[o] < t)
          i = o + 1;
        else if (e[o] > t)
          a = o - 1;
        else
          return o;
      }
      return -1;
    }, r.prototype.getIndices = function() {
      var t, e = this._indices;
      if (e) {
        var n = e.constructor, i = this._count;
        if (n === Array) {
          t = new n(i);
          for (var a = 0; a < i; a++)
            t[a] = e[a];
        } else
          t = new n(e.buffer, 0, i);
      } else {
        var n = Wn(this._rawCount);
        t = new n(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, r.prototype.filter = function(t, e) {
      if (!this._count)
        return this;
      for (var n = this.clone(), i = n.count(), a = Wn(n._rawCount), o = new a(i), s = [], u = t.length, l = 0, f = t[0], h = n._chunks, v = 0; v < i; v++) {
        var c = void 0, d = n.getRawIndex(v);
        if (u === 0)
          c = e(v);
        else if (u === 1) {
          var p = h[f][d];
          c = e(p, v);
        } else {
          for (var m = 0; m < u; m++)
            s[m] = h[t[m]][d];
          s[m] = v, c = e.apply(null, s);
        }
        c && (o[l++] = d);
      }
      return l < i && (n._indices = o), n._count = l, n._extent = [], n._updateGetRawIdx(), n;
    }, r.prototype.selectRange = function(t) {
      var e = this.clone(), n = e._count;
      if (!n)
        return this;
      var i = xt(t), a = i.length;
      if (!a)
        return this;
      var o = e.count(), s = Wn(e._rawCount), u = new s(o), l = 0, f = i[0], h = t[f][0], v = t[f][1], c = e._chunks, d = !1;
      if (!e._indices) {
        var p = 0;
        if (a === 1) {
          for (var m = c[i[0]], g = 0; g < n; g++) {
            var y = m[g];
            (y >= h && y <= v || isNaN(y)) && (u[l++] = p), p++;
          }
          d = !0;
        } else if (a === 2) {
          for (var m = c[i[0]], _ = c[i[1]], S = t[i[1]][0], b = t[i[1]][1], g = 0; g < n; g++) {
            var y = m[g], x = _[g];
            (y >= h && y <= v || isNaN(y)) && (x >= S && x <= b || isNaN(x)) && (u[l++] = p), p++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var g = 0; g < o; g++) {
            var w = e.getRawIndex(g), y = c[i[0]][w];
            (y >= h && y <= v || isNaN(y)) && (u[l++] = w);
          }
        else
          for (var g = 0; g < o; g++) {
            for (var D = !0, w = e.getRawIndex(g), C = 0; C < a; C++) {
              var M = i[C], y = c[M][w];
              (y < t[M][0] || y > t[M][1]) && (D = !1);
            }
            D && (u[l++] = e.getRawIndex(g));
          }
      return l < o && (e._indices = u), e._count = l, e._extent = [], e._updateGetRawIdx(), e;
    }, r.prototype.map = function(t, e) {
      var n = this.clone(t);
      return this._updateDims(n, t, e), n;
    }, r.prototype.modify = function(t, e) {
      this._updateDims(this, t, e);
    }, r.prototype._updateDims = function(t, e, n) {
      for (var i = t._chunks, a = [], o = e.length, s = t.count(), u = [], l = t._rawExtent, f = 0; f < e.length; f++)
        l[e[f]] = Jt();
      for (var h = 0; h < s; h++) {
        for (var v = t.getRawIndex(h), c = 0; c < o; c++)
          u[c] = i[e[c]][v];
        u[o] = h;
        var d = n && n.apply(null, u);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var p = e[f], m = d[f], g = l[p], y = i[p];
            y && (y[v] = m), m < g[0] && (g[0] = m), m > g[1] && (g[1] = m);
          }
        }
      }
    }, r.prototype.lttbDownSample = function(t, e) {
      var n = this.clone([t], !0), i = n._chunks, a = i[t], o = this.count(), s = 0, u = Math.floor(1 / e), l = this.getRawIndex(0), f, h, v, c = new (Wn(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
      c[s++] = l;
      for (var d = 1; d < o - 1; d += u) {
        for (var p = Math.min(d + u, o - 1), m = Math.min(d + u * 2, o), g = (m + p) / 2, y = 0, _ = p; _ < m; _++) {
          var S = this.getRawIndex(_), b = a[S];
          isNaN(b) || (y += b);
        }
        y /= m - p;
        var x = d, w = Math.min(d + u, o), D = d - 1, C = a[l];
        f = -1, v = x;
        for (var M = -1, A = 0, _ = x; _ < w; _++) {
          var S = this.getRawIndex(_), b = a[S];
          if (isNaN(b)) {
            A++, M < 0 && (M = S);
            continue;
          }
          h = Math.abs((D - g) * (b - C) - (D - _) * (y - C)), h > f && (f = h, v = S);
        }
        A > 0 && A < w - x && (c[s++] = Math.min(M, v), v = Math.max(M, v)), c[s++] = v, l = v;
      }
      return c[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = c, n.getRawIndex = this._getRawIdx, n;
    }, r.prototype.minmaxDownSample = function(t, e) {
      for (var n = this.clone([t], !0), i = n._chunks, a = Math.floor(1 / e), o = i[t], s = this.count(), u = new (Wn(this._rawCount))(Math.ceil(s / a) * 2), l = 0, f = 0; f < s; f += a) {
        var h = f, v = o[this.getRawIndex(h)], c = f, d = o[this.getRawIndex(c)], p = a;
        f + a > s && (p = s - f);
        for (var m = 0; m < p; m++) {
          var g = this.getRawIndex(f + m), y = o[g];
          y < v && (v = y, h = f + m), y > d && (d = y, c = f + m);
        }
        var _ = this.getRawIndex(h), S = this.getRawIndex(c);
        h < c ? (u[l++] = _, u[l++] = S) : (u[l++] = S, u[l++] = _);
      }
      return n._count = l, n._indices = u, n._updateGetRawIdx(), n;
    }, r.prototype.downSample = function(t, e, n, i) {
      for (var a = this.clone([t], !0), o = a._chunks, s = [], u = Math.floor(1 / e), l = o[t], f = this.count(), h = a._rawExtent[t] = Jt(), v = new (Wn(this._rawCount))(Math.ceil(f / u)), c = 0, d = 0; d < f; d += u) {
        u > f - d && (u = f - d, s.length = u);
        for (var p = 0; p < u; p++) {
          var m = this.getRawIndex(d + p);
          s[p] = l[m];
        }
        var g = n(s), y = this.getRawIndex(Math.min(d + i(s, g) || 0, f - 1));
        l[y] = g, g < h[0] && (h[0] = g), g > h[1] && (h[1] = g), v[c++] = y;
      }
      return a._count = c, a._indices = v, a._updateGetRawIdx(), a;
    }, r.prototype.each = function(t, e) {
      if (this._count)
        for (var n = t.length, i = this._chunks, a = 0, o = this.count(); a < o; a++) {
          var s = this.getRawIndex(a);
          switch (n) {
            case 0:
              e(a);
              break;
            case 1:
              e(i[t[0]][s], a);
              break;
            case 2:
              e(i[t[0]][s], i[t[1]][s], a);
              break;
            default:
              for (var u = 0, l = []; u < n; u++)
                l[u] = i[t[u]][s];
              l[u] = a, e.apply(null, l);
          }
        }
    }, r.prototype.getDataExtent = function(t, e) {
      var n = this._chunks[t], i = Jt();
      if (!n)
        return i;
      var a = this.count(), o = !this._indices && !e;
      if (o)
        return this._rawExtent[t].slice();
      var s = this._extent, u = s[t] || (s[t] = {}), l = YM(e), f = l.key, h = u[f];
      if (h)
        return h.slice();
      for (var v = i[0], c = i[1], d = 0; d < a; d++) {
        var p = this.getRawIndex(d), m = n[p];
        (!e || ZM(l, m)) && (m < v && (v = m), m > c && (c = m));
      }
      return u[f] = [v, c];
    }, r.prototype.getRawDataItem = function(t) {
      var e = this.getRawIndex(t);
      if (this._provider.persistent)
        return this._provider.getItem(e);
      for (var n = [], i = this._chunks, a = 0; a < i.length; a++)
        n.push(i[a][e]);
      return n;
    }, r.prototype.clone = function(t, e) {
      var n = new r(), i = this._chunks, a = t && Li(t, function(s, u) {
        return s[u] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < i.length; o++)
          n._chunks[o] = a[o] ? iD(i[o]) : i[o];
      else
        n._chunks = i;
      return this._copyCommonProps(n), e || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
    }, r.prototype._copyCommonProps = function(t) {
      t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = tt(this._extent), t._rawExtent = tt(this._rawExtent);
    }, r.prototype._cloneIndices = function() {
      if (this._indices) {
        var t = this._indices.constructor, e = void 0;
        if (t === Array) {
          var n = this._indices.length;
          e = new t(n);
          for (var i = 0; i < n; i++)
            e[i] = this._indices[i];
        } else
          e = new t(this._indices);
        return e;
      }
      return null;
    }, r.prototype._getRawIdxIdentity = function(t) {
      return t;
    }, r.prototype._getRawIdx = function(t) {
      return t < this._count && t >= 0 ? this._indices[t] : -1;
    }, r.prototype._updateGetRawIdx = function() {
      this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
    }, r.internalField = (function() {
      function t(e, n, i, a) {
        return bs(e[a], this._dimensions[a]);
      }
      Wl = {
        arrayRows: t,
        objectRows: function(e, n, i, a) {
          return bs(e[n], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(e, n, i, a) {
          var o = e && (e.value == null ? e : e.value);
          return bs(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(e, n, i, a) {
          return e[a];
        }
      };
    })(), r;
  })()
), aD = (
  /** @class */
  (function() {
    function r(t) {
      this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t;
    }
    return r.prototype.dirty = function() {
      this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
    }, r.prototype._setLocalSource = function(t, e) {
      this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
    }, r.prototype._getVersionSign = function() {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }, r.prototype.prepareSource = function() {
      this._isDirty() && (this._createSource(), this._dirty = !1);
    }, r.prototype._createSource = function() {
      this._setLocalSource([], []);
      var t = this._sourceHost, e = this._getUpstreamSourceManagers(), n = !!e.length, i, a;
      if (zo(t)) {
        var o = t, s = void 0, u = void 0, l = void 0;
        if (n) {
          var f = e[0];
          f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), u = ie(s) ? Pr : fe, a = [];
        var h = this._getSourceMetaRawOption() || {}, v = l && l.metaRawOption || {}, c = X(h.seriesLayoutBy, v.seriesLayoutBy) || null, d = X(h.sourceHeader, v.sourceHeader), p = X(h.dimensions, v.dimensions), m = c !== v.seriesLayoutBy || !!d != !!v.sourceHeader || p;
        i = m ? [fh(s, {
          seriesLayoutBy: c,
          sourceHeader: d,
          dimensions: p
        }, u)] : [];
      } else {
        var g = t;
        if (n) {
          var y = this._applyTransform(e);
          i = y.sourceList, a = y.upstreamSignList;
        } else {
          var _ = g.get("source", !0);
          i = [fh(_, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      this._setLocalSource(i, a);
    }, r.prototype._applyTransform = function(t) {
      var e = this._sourceHost, n = e.get("transform", !0), i = e.get("fromTransformResult", !0);
      if (i != null) {
        var a = "";
        t.length !== 1 && Rp(a);
      }
      var o, s = [], u = [];
      return T(t, function(l) {
        l.prepareSource();
        var f = l.getSource(i || 0), h = "";
        i != null && !f && Rp(h), s.push(f), u.push(l._getVersionSign());
      }), n ? o = tD(n, s, {
        datasetIndex: e.componentIndex
      }) : i != null && (o = [kM(s[0])]), {
        sourceList: o,
        upstreamSignList: u
      };
    }, r.prototype._isDirty = function() {
      if (this._dirty)
        return !0;
      for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
        var n = t[e];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign()
        )
          return !0;
      }
    }, r.prototype.getSource = function(t) {
      t = t || 0;
      var e = this._sourceList[t];
      if (!e) {
        var n = this._getUpstreamSourceManagers();
        return n[0] && n[0].getSource(t);
      }
      return e;
    }, r.prototype.getSharedDataStore = function(t) {
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }, r.prototype._innerGetDataStore = function(t, e, n) {
      var i = 0, a = this._storeList, o = a[i];
      o || (o = a[i] = {});
      var s = o[n];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        zo(this._sourceHost) && u ? s = u._innerGetDataStore(t, e, n) : (s = new hh(), s.initData(new r_(e, t.length), t)), o[n] = s;
      }
      return s;
    }, r.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if (zo(t)) {
        var e = q0(t);
        return e ? [e.getSourceManager()] : [];
      } else
        return U(lM(t), function(n) {
          return n.getSourceManager();
        });
    }, r.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, e, n, i;
      if (zo(t))
        e = t.get("seriesLayoutBy", !0), n = t.get("sourceHeader", !0), i = t.get("dimensions", !0);
      else if (!this._getUpstreamSourceManagers().length) {
        var a = t;
        e = a.get("seriesLayoutBy", !0), n = a.get("sourceHeader", !0), i = a.get("dimensions", !0);
      }
      return {
        seriesLayoutBy: e,
        sourceHeader: n,
        dimensions: i
      };
    }, r;
  })()
);
function zo(r) {
  return r.mainType === "series";
}
function Rp(r) {
  throw new Error(r);
}
var oD = "line-height:1";
function l_(r) {
  var t = r.lineHeight;
  return t == null ? oD : "line-height:" + qt(t + "") + "px";
}
function f_(r, t) {
  var e = r.color || O.color.tertiary, n = r.fontSize || 12, i = r.fontWeight || "400", a = r.color || O.color.secondary, o = r.fontSize || 14, s = r.fontWeight || "900";
  return t === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + qt(n + "") + "px;color:" + qt(e) + ";font-weight:" + qt(i + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + qt(o + "") + "px;color:" + qt(a) + ";font-weight:" + qt(s + "")
  } : {
    nameStyle: {
      fontSize: n,
      fill: e,
      fontWeight: i
    },
    valueStyle: {
      fontSize: o,
      fill: a,
      fontWeight: s
    }
  };
}
var sD = [0, 10, 20, 30], uD = ["", `
`, `

`, `


`];
function Ha(r, t) {
  return t.type = r, t;
}
function vh(r) {
  return r.type === "section";
}
function h_(r) {
  return vh(r) ? lD : fD;
}
function v_(r) {
  if (vh(r)) {
    var t = 0, e = r.blocks.length, n = e > 1 || e > 0 && !r.noHeader;
    return T(r.blocks, function(i) {
      var a = v_(i);
      a >= t && (t = a + +(n && // 0 always can not be readable gap level.
      (!a || vh(i) && !i.noHeader)));
    }), t;
  }
  return 0;
}
function lD(r, t, e, n) {
  var i = t.noHeader, a = hD(v_(t)), o = [], s = t.blocks || [];
  qe(!s || z(s)), s = s || [];
  var u = r.orderMode;
  if (t.sortBlocks && u) {
    s = s.slice();
    var l = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (ee(l, u)) {
      var f = new WM(l[u], null);
      s.sort(function(p, m) {
        return f.evaluate(p.sortParam, m.sortParam);
      });
    } else u === "seriesDesc" && s.reverse();
  }
  T(s, function(p, m) {
    var g = t.valueFormatter, y = h_(p)(
      // Inherit valueFormatter
      g ? B(B({}, r), {
        valueFormatter: g
      }) : r,
      p,
      m > 0 ? a.html : 0,
      n
    );
    y != null && o.push(y);
  });
  var h = r.renderMode === "richText" ? o.join(a.richText) : ch(n, o.join(""), i ? e : a.html);
  if (i)
    return h;
  var v = uh(t.header, "ordinal", r.useUTC), c = f_(n, r.renderMode).nameStyle, d = l_(n);
  return r.renderMode === "richText" ? c_(r, v, c) + a.richText + h : ch(n, '<div style="' + c + ";" + d + ';">' + qt(v) + "</div>" + h, e);
}
function fD(r, t, e, n) {
  var i = r.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, u = t.name, l = r.useUTC, f = t.valueFormatter || r.valueFormatter || function(S) {
    return S = z(S) ? S : [S], U(S, function(b, x) {
      return uh(b, z(c) ? c[x] : c, l);
    });
  };
  if (!(a && o)) {
    var h = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || O.color.secondary, i), v = a ? "" : uh(u, "ordinal", l), c = t.valueType, d = o ? [] : f(t.value, t.rawDataIndex), p = !s || !a, m = !s && a, g = f_(n, i), y = g.nameStyle, _ = g.valueStyle;
    return i === "richText" ? (s ? "" : h) + (a ? "" : c_(r, v, y)) + (o ? "" : dD(r, d, p, m, _)) : ch(n, (s ? "" : h) + (a ? "" : vD(v, !s, y)) + (o ? "" : cD(d, p, m, _)), e);
  }
}
function Ep(r, t, e, n, i, a) {
  if (r) {
    var o = h_(r), s = {
      useUTC: i,
      renderMode: e,
      orderMode: n,
      markupStyleCreator: t,
      valueFormatter: r.valueFormatter
    };
    return o(s, r, 0, a);
  }
}
function hD(r) {
  return {
    html: sD[r],
    richText: uD[r]
  };
}
function ch(r, t, e) {
  var n = '<div style="clear:both"></div>', i = "margin: " + e + "px 0 0", a = l_(r);
  return '<div style="' + i + ";" + a + ';">' + t + n + "</div>";
}
function vD(r, t, e) {
  var n = t ? "margin-left:2px" : "";
  return '<span style="' + e + ";" + n + '">' + qt(r) + "</span>";
}
function cD(r, t, e, n) {
  var i = e ? "10px" : "20px", a = t ? "float:right;margin-left:" + i : "";
  return r = z(r) ? r : [r], '<span style="' + a + ";" + n + '">' + U(r, function(o) {
    return qt(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function c_(r, t, e) {
  return r.markupStyleCreator.wrapRichTextStyle(t, e);
}
function dD(r, t, e, n, i) {
  var a = [i], o = n ? 10 : 20;
  return e && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), r.markupStyleCreator.wrapRichTextStyle(z(t) ? t.join("  ") : t, a);
}
function pD(r, t) {
  var e = r.getData().getItemVisual(t, "style"), n = e[r.visualDrawType];
  return An(n);
}
function d_(r, t) {
  var e = r.get("padding");
  return e ?? (t === "richText" ? [8, 10] : 10);
}
var Yl = (
  /** @class */
  (function() {
    function r() {
      this.richTextStyles = {}, this._nextStyleNameId = av();
    }
    return r.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, r.prototype.makeTooltipMarker = function(t, e, n) {
      var i = n === "richText" ? this._generateStyleName() : null, a = ZC({
        color: e,
        type: t,
        renderMode: n,
        markerId: i
      });
      return V(a) ? a : (this.richTextStyles[i] = a.style, a.content);
    }, r.prototype.wrapRichTextStyle = function(t, e) {
      var n = {};
      z(e) ? T(e, function(a) {
        return B(n, a);
      }) : B(n, e);
      var i = this._generateStyleName();
      return this.richTextStyles[i] = n, "{" + i + "|" + t + "}";
    }, r;
  })()
);
function gD(r) {
  var t = r.series, e = r.dataIndex, n = r.multipleSeries, i = t.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), u = z(s), l = pD(t, e), f, h, v, c;
  if (o > 1 || u && !o) {
    var d = mD(s, t, e, a, l);
    f = d.inlineValues, h = d.inlineValueTypes, v = d.blocks, c = d.inlineValues[0];
  } else if (o) {
    var p = i.getDimensionInfo(a[0]);
    c = f = wi(i, e, a[0]), h = p.type;
  } else
    c = f = u ? s[0] : s;
  var m = ov(t), g = m && t.name || "", y = i.getName(e), _ = n ? g : y;
  return Ha("section", {
    header: g,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: n || !m,
    sortParam: c,
    blocks: [Ha("nameValue", {
      markerType: "item",
      markerColor: l,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: _,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !Ve(_),
      value: f,
      valueType: h,
      rawDataIndex: i.getRawIndex(e)
    })].concat(v || [])
  });
}
function mD(r, t, e, n, i) {
  var a = t.getData(), o = Li(r, function(h, v, c) {
    var d = a.getDimensionInfo(c);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  n.length ? T(n, function(h) {
    f(wi(a, e, h), h);
  }) : T(r, f);
  function f(h, v) {
    var c = a.getDimensionInfo(v);
    !c || c.otherDims.tooltip === !1 || (o ? l.push(Ha("nameValue", {
      markerType: "subItem",
      markerColor: i,
      name: c.displayName,
      value: h,
      valueType: c.type
    })) : (s.push(h), u.push(c.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: u,
    blocks: l
  };
}
var mr = vt();
function Ho(r, t) {
  return r.getName(t) || r.getId(t);
}
var yD = "__universalTransitionEnabled", Nr = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._selectedDataIndicesMap = {}, e;
    }
    return t.prototype.init = function(e, n, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = Ta({
        count: SD,
        reset: bD
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(e, i);
      var a = mr(this).sourceManager = new aD(this);
      a.prepareSource();
      var o = this.getInitialData(e, i);
      kp(o, this), this.dataTask.context.data = o, mr(this).dataBeforeProcessed = o, Op(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(e, n) {
      var i = Fa(this), a = i ? ki(e) : {}, o = this.subType;
      ct.hasClass(o) && (o += "Series"), at(e, n.getTheme().get(this.subType)), at(e, this.getDefaultOption()), cd(e, "label", ["show"]), this.fillDataTextStyle(e.data), i && Br(e, a, i);
    }, t.prototype.mergeOption = function(e, n) {
      e = at(this.option, e, !0), this.fillDataTextStyle(e.data);
      var i = Fa(this);
      i && Br(this.option, e, i);
      var a = mr(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(e, n);
      kp(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, mr(this).dataBeforeProcessed = o, Op(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(e) {
      if (e && !ie(e))
        for (var n = ["show"], i = 0; i < e.length; i++)
          e[i] && e[i].label && cd(e[i], "label", n);
    }, t.prototype.getInitialData = function(e, n) {
    }, t.prototype.appendData = function(e) {
      var n = this.getRawData();
      n.appendData(e.data);
    }, t.prototype.getData = function(e) {
      var n = dh(this);
      if (n) {
        var i = n.context.data;
        return e == null || !i.getLinkedData ? i : i.getLinkedData(e);
      } else
        return mr(this).data;
    }, t.prototype.getAllData = function() {
      var e = this.getData();
      return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
        data: e
      }];
    }, t.prototype.setData = function(e) {
      var n = dh(this);
      if (n) {
        var i = n.context;
        i.outputData = e, n !== this.dataTask && (i.data = e);
      }
      mr(this).data = e;
    }, t.prototype.getEncode = function() {
      var e = this.get("encode", !0);
      if (e)
        return Y(e);
    }, t.prototype.getSourceManager = function() {
      return mr(this).sourceManager;
    }, t.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, t.prototype.getRawData = function() {
      return mr(this).dataBeforeProcessed;
    }, t.prototype.getColorBy = function() {
      var e = this.get("colorBy");
      return e || "series";
    }, t.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, t.prototype.getBaseAxis = function() {
      var e = this.coordinateSystem;
      return e && e.getBaseAxis && e.getBaseAxis();
    }, t.prototype.indicesOfNearest = function(e, n, i, a) {
      var o = this.getData(), s = this.coordinateSystem, u = s && s.getAxis(e);
      if (!s || !u)
        return [];
      var l = u.dataToCoord(i);
      a == null && (a = 1 / 0);
      for (var f = [], h = 1 / 0, v = -1, c = 0, d = o.getDimensionIndex(n), p = o.getStore(), m = 0, g = p.count(); m < g; m++) {
        var y = p.get(d, m), _ = u.dataToCoord(y), S = l - _, b = Math.abs(S);
        b <= a && ((b < h || b === h && S >= 0 && v < 0) && (h = b, v = S, c = 0), S === v && (f[c++] = m));
      }
      return f.length = c, f;
    }, t.prototype.formatTooltip = function(e, n, i) {
      return gD({
        series: this,
        dataIndex: e,
        multipleSeries: n
      });
    }, t.prototype.isAnimationEnabled = function() {
      var e = this.ecModel;
      if (et.node && !(e && e.ssr))
        return !1;
      var n = this.getShallow("animation");
      return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
    }, t.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, t.prototype.getColorFromPalette = function(e, n, i) {
      var a = this.ecModel, o = Wv.prototype.getColorFromPalette.call(this, e, n, i);
      return o || (o = a.getColorFromPalette(e, n, i)), o;
    }, t.prototype.coordDimToDataDim = function(e) {
      return this.getRawData().mapDimensionsAll(e);
    }, t.prototype.getProgressive = function() {
      return this.get("progressive");
    }, t.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    }, t.prototype.select = function(e, n) {
      this._innerSelect(this.getData(n), e);
    }, t.prototype.unselect = function(e, n) {
      var i = this.option.selectedMap;
      if (i) {
        var a = this.option.selectedMode, o = this.getData(n);
        if (a === "series" || i === "all") {
          this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
          return;
        }
        for (var s = 0; s < e.length; s++) {
          var u = e[s], l = Ho(o, u);
          i[l] = !1, this._selectedDataIndicesMap[l] = -1;
        }
      }
    }, t.prototype.toggleSelect = function(e, n) {
      for (var i = [], a = 0; a < e.length; a++)
        i[0] = e[a], this.isSelected(e[a], n) ? this.unselect(i, n) : this.select(i, n);
    }, t.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var e = this._selectedDataIndicesMap, n = xt(e), i = [], a = 0; a < n.length; a++) {
        var o = e[n[a]];
        o >= 0 && i.push(o);
      }
      return i;
    }, t.prototype.isSelected = function(e, n) {
      var i = this.option.selectedMap;
      if (!i)
        return !1;
      var a = this.getData(n);
      return (i === "all" || i[Ho(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[yD])
        return !0;
      var e = this.option.universalTransition;
      return e ? e === !0 ? !0 : e && e.enabled : !1;
    }, t.prototype._innerSelect = function(e, n) {
      var i, a, o = this.option, s = o.selectedMode, u = n.length;
      if (!(!s || !u)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          Z(o.selectedMap) || (o.selectedMap = {});
          for (var l = o.selectedMap, f = 0; f < u; f++) {
            var h = n[f], v = Ho(e, h);
            l[v] = !0, this._selectedDataIndicesMap[v] = e.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var c = n[u - 1], v = Ho(e, c);
          o.selectedMap = (i = {}, i[v] = !0, i), this._selectedDataIndicesMap = (a = {}, a[v] = e.getRawIndex(c), a);
        }
      }
    }, t.prototype._initSelectedMapFromData = function(e) {
      if (!this.option.selectedMap) {
        var n = [];
        e.hasItemOption && e.each(function(i) {
          var a = e.getRawDataItem(i);
          a && a.selected && n.push(i);
        }), n.length > 0 && this._innerSelect(e, n);
      }
    }, t.registerClass = function(e) {
      return ct.registerClass(e);
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
    })(), t;
  })(ct)
);
Je(Nr, GM);
Je(Nr, Wv);
Fy(Nr, ct);
function Op(r) {
  var t = r.name;
  ov(r) || (r.name = _D(r) || t);
}
function _D(r) {
  var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), n = [];
  return T(e, function(i) {
    var a = t.getDimensionInfo(i);
    a.displayName && n.push(a.displayName);
  }), n.join(" ");
}
function SD(r) {
  return r.model.getRawData().count();
}
function bD(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), xD;
}
function xD(r, t) {
  t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function kp(r, t) {
  T(QS(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
    r.wrapMethod(e, ht(wD, t));
  });
}
function wD(r, t) {
  var e = dh(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function dh(r) {
  var t = (r.ecModel || {}).scheduler, e = t && t.getPipeline(r.uid);
  if (e) {
    var n = e.currentTask;
    if (n) {
      var i = n.agentStubMap;
      i && (n = i.get(r.uid));
    }
    return n;
  }
}
var le = (
  /** @class */
  (function() {
    function r() {
      this.group = new Mt(), this.uid = so("viewComponent");
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, n, i) {
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, n, i) {
    }, r.prototype.updateLayout = function(t, e, n, i) {
    }, r.prototype.updateVisual = function(t, e, n, i) {
    }, r.prototype.toggleBlurSeries = function(t, e, n) {
    }, r.prototype.eachRendered = function(t) {
      var e = this.group;
      e && e.traverse(t);
    }, r;
  })()
);
fv(le);
xu(le);
function p_() {
  var r = vt();
  return function(t) {
    var e = r(t), n = t.pipelineContext, i = !!e.large, a = !!e.progressiveRender, o = e.large = !!(n && n.large), s = e.progressiveRender = !!(n && n.progressiveRender);
    return (i !== o || a !== s) && "reset";
  };
}
var g_ = vt(), TD = p_(), $e = (
  /** @class */
  (function() {
    function r() {
      this.group = new Mt(), this.uid = so("viewChart"), this.renderTask = Ta({
        plan: CD,
        reset: MD
      }), this.renderTask.context = {
        view: this
      };
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, n, i) {
    }, r.prototype.highlight = function(t, e, n, i) {
      var a = t.getData(i && i.dataType);
      a && Np(a, i, "emphasis");
    }, r.prototype.downplay = function(t, e, n, i) {
      var a = t.getData(i && i.dataType);
      a && Np(a, i, "normal");
    }, r.prototype.remove = function(t, e) {
      this.group.removeAll();
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, n, i) {
      this.render(t, e, n, i);
    }, r.prototype.updateVisual = function(t, e, n, i) {
      this.render(t, e, n, i);
    }, r.prototype.eachRendered = function(t) {
      Cv(this.group, t);
    }, r.markUpdateMethod = function(t, e) {
      g_(t).updateMethod = e;
    }, r.protoInitialize = (function() {
      var t = r.prototype;
      t.type = "chart";
    })(), r;
  })()
);
function Bp(r, t, e) {
  r && rh(r) && (t === "emphasis" ? bi : xi)(r, e);
}
function Np(r, t, e) {
  var n = Mn(r, t), i = t && t.highlightKey != null ? _T(t.highlightKey) : null;
  n != null ? T(Xt(n), function(a) {
    Bp(r.getItemGraphicEl(a), e, i);
  }) : r.eachItemGraphicEl(function(a) {
    Bp(a, e, i);
  });
}
fv($e);
xu($e);
function CD(r) {
  return TD(r.model);
}
function MD(r) {
  var t = r.model, e = r.ecModel, n = r.api, i = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = i && g_(i).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](t, e, n, i), DD[u];
}
var DD = {
  incrementalPrepareRender: {
    progress: function(r, t) {
      t.view.incrementalRender(r, t.model, t.ecModel, t.api, t.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: !0,
    progress: function(r, t) {
      t.view.render(t.model, t.ecModel, t.api, t.payload);
    }
  }
}, Xs = "\0__throttleOriginMethod", Fp = "\0__throttleRate", zp = "\0__throttleType";
function m_(r, t, e) {
  var n, i = 0, a = 0, o = null, s, u, l, f;
  t = t || 0;
  function h() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, r.apply(u, l || []);
  }
  var v = function() {
    for (var c = [], d = 0; d < arguments.length; d++)
      c[d] = arguments[d];
    n = (/* @__PURE__ */ new Date()).getTime(), u = this, l = c;
    var p = f || t, m = f || e;
    f = null, s = n - (m ? i : a) - p, clearTimeout(o), m ? o = setTimeout(h, p) : s >= 0 ? h() : o = setTimeout(h, -s), i = n;
  };
  return v.clear = function() {
    o && (clearTimeout(o), o = null);
  }, v.debounceNextCall = function(c) {
    f = c;
  }, v;
}
function Nu(r, t, e, n) {
  var i = r[t];
  if (i) {
    var a = i[Xs] || i, o = i[zp], s = i[Fp];
    if (s !== e || o !== n) {
      if (e == null || !n)
        return r[t] = a;
      i = r[t] = m_(a, e, n === "debounce"), i[Xs] = a, i[zp] = n, i[Fp] = e;
    }
    return i;
  }
}
function $s(r, t) {
  var e = r[t];
  e && e[Xs] && (e.clear && e.clear(), r[t] = e[Xs]);
}
var Hp = vt(), Vp = {
  itemStyle: Ra(L0, !0),
  lineStyle: Ra(I0, !0)
}, AD = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function y_(r, t) {
  var e = r.visualStyleMapper || Vp[t];
  return e || (console.warn("Unknown style type '" + t + "'."), Vp.itemStyle);
}
function __(r, t) {
  var e = r.visualDrawType || AD[t];
  return e || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var ID = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = r.getModel(n), a = y_(r, n), o = a(i), s = i.getShallow("decal");
    s && (e.setVisual("decal", s), s.dirty = !0);
    var u = __(r, n), l = o[u], f = Q(l) ? l : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || h) {
      var v = r.getColorFromPalette(
        // TODO series count changed.
        r.name,
        null,
        t.getSeriesCount()
      );
      o[u] || (o[u] = v, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || Q(o.fill) ? v : o.fill, o.stroke = o.stroke === "auto" || Q(o.stroke) ? v : o.stroke;
    }
    if (e.setVisual("style", o), e.setVisual("drawType", u), !t.isSeriesFiltered(r) && f)
      return e.setVisual("colorFromPalette", !1), {
        dataEach: function(c, d) {
          var p = r.getDataParams(d), m = B({}, o);
          m[u] = f(p), c.setItemVisual(d, "style", m);
        }
      };
  }
}, Wi = new Tt(), LD = {
  createOnAllSeries: !0,
  reset: function(r, t) {
    if (!r.ignoreStyleOnData) {
      var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = y_(r, n), a = e.getVisual("drawType");
      return {
        dataEach: e.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[n]) {
            Wi.option = u[n];
            var l = i(Wi), f = o.ensureUniqueItemVisual(s, "style");
            B(f, l), Wi.option.decal && (o.setItemVisual(s, "decal", Wi.option.decal), Wi.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, PD = {
  performRawSeries: !0,
  overallReset: function(r) {
    var t = Y();
    r.eachSeries(function(e) {
      if (!e.isColorBySeries()) {
        var n = e.type + "-" + e.getColorBy();
        Hp(e).scope = t.get(n) || t.set(n, {});
      }
    }), r.eachSeries(function(e) {
      if (!e.isColorBySeries()) {
        var n = e.getRawData(), i = {}, a = e.getData(), o = Hp(e).scope, s = e.visualStyleAccessPath || "itemStyle", u = __(e, s);
        a.each(function(l) {
          var f = a.getRawIndex(l);
          i[f] = l;
        }), n.each(function(l) {
          var f = i[l], h = a.getItemVisual(f, "colorFromPalette");
          if (h) {
            var v = a.ensureUniqueItemVisual(f, "style"), c = n.getName(l) || l + "", d = n.count();
            v[u] = e.getColorFromPalette(c, o, d);
          }
        });
      }
    });
  }
}, Vo = Math.PI;
function RD(r, t) {
  t = t || {}, ut(t, {
    text: "loading",
    textColor: O.color.primary,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255,255,255,0.8)",
    showSpinner: !0,
    color: O.color.theme[0],
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var e = new Mt(), n = new St({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  e.add(n);
  var i = new Rt({
    style: {
      text: t.text,
      fill: t.textColor,
      fontSize: t.fontSize,
      fontWeight: t.fontWeight,
      fontStyle: t.fontStyle,
      fontFamily: t.fontFamily
    },
    zlevel: t.zlevel,
    z: 10001
  }), a = new St({
    style: {
      fill: "none"
    },
    textContent: i,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: t.zlevel,
    z: 10001
  });
  e.add(a);
  var o;
  return t.showSpinner && (o = new Lu({
    shape: {
      startAngle: -Vo / 2,
      endAngle: -Vo / 2 + 0.1,
      r: t.spinnerRadius
    },
    style: {
      stroke: t.color,
      lineCap: "round",
      lineWidth: t.lineWidth
    },
    zlevel: t.zlevel,
    z: 10001
  }), o.animateShape(!0).when(1e3, {
    endAngle: Vo * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: Vo * 3 / 2
  }).delay(300).start("circularInOut"), e.add(o)), e.resize = function() {
    var s = i.getBoundingRect().width, u = t.showSpinner ? t.spinnerRadius : 0, l = (r.getWidth() - u * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : u), f = r.getHeight() / 2;
    t.showSpinner && o.setShape({
      cx: l,
      cy: f
    }), a.setShape({
      x: l - u,
      y: f - u,
      width: u * 2,
      height: u * 2
    }), n.setShape({
      x: 0,
      y: 0,
      width: r.getWidth(),
      height: r.getHeight()
    });
  }, e.resize(), e;
}
var S_ = (
  /** @class */
  (function() {
    function r(t, e, n, i) {
      this._stageTaskMap = Y(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
    }
    return r.prototype.restoreData = function(t, e) {
      t.restoreData(e), this._stageTaskMap.each(function(n) {
        var i = n.overallTask;
        i && i.dirty();
      });
    }, r.prototype.getPerformArgs = function(t, e) {
      if (t.__pipeline) {
        var n = this._pipelineMap.get(t.__pipeline.id), i = n.context, a = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex, o = a ? n.step : null, s = i && i.modDataCount, u = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: u,
          modDataCount: s
        };
      }
    }, r.prototype.getPipeline = function(t) {
      return this._pipelineMap.get(t);
    }, r.prototype.updateStreamModes = function(t, e) {
      var n = this._pipelineMap.get(t.uid), i = t.__preparePipelineContext ? t.__preparePipelineContext(e, n) : Jx(t, e, n);
      t.pipelineContext = n.context = i;
    }, r.prototype.restorePipelines = function(t, e) {
      var n = this, i = n._pipelineMap = Y();
      e.eachSeries(function(a) {
        var o = t.painter.type === "canvas" && a.getProgressive(), s = a.uid;
        i.set(s, {
          id: s,
          head: null,
          tail: null,
          threshold: a.getProgressiveThreshold(),
          progressiveEnabled: o && !(a.preventIncremental && a.preventIncremental()),
          blockIndex: -1,
          step: Math.round(o || 700),
          count: 0
        }), n._pipe(a, a.dataTask);
      });
    }, r.prototype.prepareStageTasks = function() {
      var t = this._stageTaskMap, e = this.api.getModel(), n = this.api;
      T(this._allHandlers, function(i) {
        var a = t.get(i.uid) || t.set(i.uid, {}), o = "";
        qe(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, e, n), i.overallReset && this._createOverallStageTask(i, a, e, n);
      }, this);
    }, r.prototype.prepareView = function(t, e, n, i) {
      var a = t.renderTask, o = a.context;
      o.model = e, o.ecModel = n, o.api = i, a.__block = !t.incrementalPrepareRender, this._pipe(e, a);
    }, r.prototype.performDataProcessorTasks = function(t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, {
        block: !0
      });
    }, r.prototype.performVisualTasks = function(t, e, n) {
      this._performStageTasks(this._visualHandlers, t, e, n);
    }, r.prototype._performStageTasks = function(t, e, n, i) {
      i = i || {};
      var a = !1, o = this;
      T(t, function(u, l) {
        if (!(i.visualType && i.visualType !== u.visualType)) {
          var f = o._stageTaskMap.get(u.uid), h = f.seriesTaskMap, v = f.overallTask;
          if (v) {
            var c, d = v.agentStubMap;
            d.each(function(m) {
              s(i, m) && (m.dirty(), c = !0);
            }), c && v.dirty(), o.updatePayload(v, n);
            var p = o.getPerformArgs(v, i.block);
            d.each(function(m) {
              m.perform(p);
            }), v.perform(p) && (a = !0);
          } else h && h.each(function(m, g) {
            s(i, m) && m.dirty();
            var y = o.getPerformArgs(m, i.block);
            y.skip = !u.performRawSeries && e.isSeriesFiltered(m.context.model), o.updatePayload(m, n), m.perform(y) && (a = !0);
          });
        }
      });
      function s(u, l) {
        return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }, r.prototype.performSeriesTasks = function(t) {
      var e;
      t.eachSeries(function(n) {
        e = n.dataTask.perform() || e;
      }), this.unfinished = e || this.unfinished;
    }, r.prototype.plan = function() {
      this._pipelineMap.each(function(t) {
        var e = t.tail;
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline;
            break;
          }
          e = e.getUpstream();
        } while (e);
      });
    }, r.prototype.updatePayload = function(t, e) {
      e !== "remain" && (t.context.payload = e);
    }, r.prototype._createSeriesStageTask = function(t, e, n, i) {
      var a = this, o = e.seriesTaskMap, s = e.seriesTaskMap = Y(), u = t.seriesType, l = t.getTargetSeries;
      t.createOnAllSeries ? n.eachRawSeries(f) : u ? n.eachRawSeriesByType(u, f) : l && l(n, i).each(f);
      function f(h) {
        var v = h.uid, c = s.set(v, o && o.get(v) || Ta({
          plan: ND,
          reset: FD,
          count: HD
        }));
        c.context = {
          model: h,
          ecModel: n,
          api: i,
          // PENDING: `useClearVisual` not used?
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: a
        }, a._pipe(h, c);
      }
    }, r.prototype._createOverallStageTask = function(t, e, n, i) {
      var a = this, o = e.overallTask = e.overallTask || Ta({
        reset: ED
      });
      o.context = {
        ecModel: n,
        api: i,
        overallReset: t.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, u = o.agentStubMap = Y(), l = t.seriesType, f = t.getTargetSeries, h = t.dirtyOnOverallProgress, v = !1, c = "";
      qe(!t.createOnAllSeries, c), l ? n.eachRawSeriesByType(l, d) : f ? f(n, i).each(d) : T(n.getSeries(), d);
      function d(p) {
        var m = p.uid, g = u.set(m, s && s.get(m) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (v = !0, Ta({
          reset: OD,
          onDirty: BD
        })));
        g.context = {
          model: p,
          dirtyOnOverallProgress: h
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, g.agent = o, g.__block = h, a._pipe(p, g);
      }
      v && o.dirty();
    }, r.prototype._pipe = function(t, e) {
      var n = t.uid, i = this._pipelineMap.get(n);
      !i.head && (i.head = e), i.tail && i.tail.pipe(e), i.tail = e, e.__idxInPipeline = i.count++, e.__pipeline = i;
    }, r.wrapStageHandler = function(t, e) {
      return Q(t) && (t = {
        overallReset: t,
        seriesType: VD(t)
      }), t.uid = so("stageHandler"), e && (t.visualType = e), t;
    }, r;
  })()
);
function ED(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function OD(r) {
  return r.dirtyOnOverallProgress && kD;
}
function kD() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function BD() {
  this.agent && this.agent.dirty();
}
function ND(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function FD(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = r.resetDefines = Xt(r.reset(r.model, r.ecModel, r.api, r.payload));
  return t.length > 1 ? U(t, function(e, n) {
    return b_(n);
  }) : zD;
}
var zD = b_(0);
function b_(r) {
  return function(t, e) {
    var n = e.data, i = e.resetDefines[r];
    if (i && i.dataEach)
      for (var a = t.start; a < t.end; a++)
        i.dataEach(n, a);
    else i && i.progress && i.progress(t, n);
  };
}
function HD(r) {
  return r.data.count();
}
function VD(r) {
  qs = null;
  try {
    r(Va, x_);
  } catch {
  }
  return qs;
}
var Va = {}, x_ = {}, qs;
w_(Va, Yv);
w_(x_, Qy);
Va.eachSeriesByType = Va.eachRawSeriesByType = function(r) {
  qs = r;
};
Va.eachComponent = function(r) {
  r.mainType === "series" && r.subType && (qs = r.subType);
};
function w_(r, t) {
  for (var e in t.prototype)
    r[e] = Nt;
}
var N = O.darkColor, Gp = N.background, Yi = function() {
  return {
    axisLine: {
      lineStyle: {
        color: N.axisLine
      }
    },
    splitLine: {
      lineStyle: {
        color: N.axisSplitLine
      }
    },
    splitArea: {
      areaStyle: {
        color: [N.backgroundTint, N.backgroundTransparent]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: N.axisMinorSplitLine
      }
    },
    axisLabel: {
      color: N.axisLabel
    },
    axisName: {}
  };
}, Up = {
  label: {
    color: N.secondary
  },
  itemStyle: {
    borderColor: N.borderTint
  },
  dividerLineStyle: {
    color: N.border
  }
}, T_ = {
  darkMode: !0,
  color: N.theme,
  backgroundColor: Gp,
  axisPointer: {
    lineStyle: {
      color: N.border
    },
    crossStyle: {
      color: N.borderShade
    },
    label: {
      color: N.tertiary
    }
  },
  legend: {
    textStyle: {
      color: N.secondary
    },
    pageTextStyle: {
      color: N.tertiary
    }
  },
  textStyle: {
    color: N.secondary
  },
  title: {
    textStyle: {
      color: N.primary
    },
    subtextStyle: {
      color: N.quaternary
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: N.accent50
    },
    feature: {
      dataView: {
        backgroundColor: Gp,
        textColor: N.primary,
        textareaColor: N.background,
        textareaBorderColor: N.border,
        buttonColor: N.accent50,
        buttonTextColor: N.neutral00
      }
    }
  },
  tooltip: {
    backgroundColor: N.neutral20,
    defaultBorderColor: N.border,
    textStyle: {
      color: N.tertiary
    }
  },
  dataZoom: {
    borderColor: N.accent10,
    textStyle: {
      color: N.tertiary
    },
    brushStyle: {
      color: N.backgroundTint
    },
    handleStyle: {
      color: N.neutral00,
      borderColor: N.accent20
    },
    moveHandleStyle: {
      color: N.accent40
    },
    emphasis: {
      handleStyle: {
        borderColor: N.accent50
      }
    },
    dataBackground: {
      lineStyle: {
        color: N.accent30
      },
      areaStyle: {
        color: N.accent20
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: N.accent50
      },
      areaStyle: {
        color: N.accent30
      }
    }
  },
  visualMap: {
    textStyle: {
      color: N.secondary
    },
    handleStyle: {
      borderColor: N.neutral30
    }
  },
  timeline: {
    lineStyle: {
      color: N.accent10
    },
    label: {
      color: N.tertiary
    },
    controlStyle: {
      color: N.accent30,
      borderColor: N.accent30
    }
  },
  calendar: {
    itemStyle: {
      color: N.neutral00,
      borderColor: N.neutral20
    },
    dayLabel: {
      color: N.tertiary
    },
    monthLabel: {
      color: N.secondary
    },
    yearLabel: {
      color: N.secondary
    }
  },
  matrix: {
    x: Up,
    y: Up,
    backgroundColor: {
      borderColor: N.axisLine
    },
    body: {
      itemStyle: {
        borderColor: N.borderTint
      }
    }
  },
  timeAxis: Yi(),
  logAxis: Yi(),
  valueAxis: Yi(),
  categoryAxis: Yi(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: N.theme
  },
  gauge: {
    title: {
      color: N.secondary
    },
    axisLine: {
      lineStyle: {
        color: [[1, N.neutral05]]
      }
    },
    axisLabel: {
      color: N.axisLabel
    },
    detail: {
      color: N.primary
    }
  },
  candlestick: {
    itemStyle: {
      color: "#f64e56",
      color0: "#54ea92",
      borderColor: "#f64e56",
      borderColor0: "#54ea92"
      // borderColor: '#ca2824',
      // borderColor0: '#09a443'
    }
  },
  funnel: {
    itemStyle: {
      borderColor: N.background
    }
  },
  radar: (function() {
    var r = Yi();
    return r.axisName = {
      color: N.axisLabel
    }, r.axisLine.lineStyle.color = N.neutral20, r;
  })(),
  treemap: {
    breadcrumb: {
      itemStyle: {
        color: N.neutral20,
        textStyle: {
          color: N.secondary
        }
      },
      emphasis: {
        itemStyle: {
          color: N.neutral30
        }
      }
    }
  },
  sunburst: {
    itemStyle: {
      borderColor: N.background
    }
  },
  map: {
    itemStyle: {
      borderColor: N.border,
      areaColor: N.neutral10
    },
    label: {
      color: N.tertiary
    },
    emphasis: {
      label: {
        color: N.primary
      },
      itemStyle: {
        areaColor: N.highlight
      }
    },
    select: {
      label: {
        color: N.primary
      },
      itemStyle: {
        areaColor: N.highlight
      }
    }
  },
  geo: {
    itemStyle: {
      borderColor: N.border,
      areaColor: N.neutral10
    },
    emphasis: {
      label: {
        color: N.primary
      },
      itemStyle: {
        areaColor: N.highlight
      }
    },
    select: {
      label: {
        color: N.primary
      },
      itemStyle: {
        color: N.highlight
      }
    }
  }
};
T_.categoryAxis.splitLine.show = !1;
var GD = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.normalizeQuery = function(t) {
      var e = {}, n = {}, i = {};
      if (V(t)) {
        var a = Ge(t);
        e.mainType = a.main || null, e.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        T(t, function(u, l) {
          for (var f = !1, h = 0; h < o.length; h++) {
            var v = o[h], c = l.lastIndexOf(v);
            if (c > 0 && c === l.length - v.length) {
              var d = l.slice(0, c);
              d !== "data" && (e.mainType = d, e[v.toLowerCase()] = u, f = !0);
            }
          }
          s.hasOwnProperty(l) && (n[l] = u, f = !0), f || (i[l] = u);
        });
      }
      return {
        cptQuery: e,
        dataQuery: n,
        otherQuery: i
      };
    }, r.prototype.filter = function(t, e) {
      var n = this.eventInfo;
      if (!n)
        return !0;
      var i = n.targetEl, a = n.packedEvent, o = n.model, s = n.view;
      if (!o || !s)
        return !0;
      var u = e.cptQuery, l = e.dataQuery;
      return f(u, o, "mainType") && f(u, o, "subType") && f(u, o, "index", "componentIndex") && f(u, o, "name") && f(u, o, "id") && f(l, a, "name") && f(l, a, "dataIndex") && f(l, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, i, a));
      function f(h, v, c, d) {
        return h[c] == null || v[d || c] === h[c];
      }
    }, r.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, r;
  })()
), ph = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], Wp = ph.concat(["symbolKeepAspect"]), UD = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData();
    if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
      return;
    for (var n = {}, i = {}, a = !1, o = 0; o < ph.length; o++) {
      var s = ph[o], u = r.get(s);
      Q(u) ? (a = !0, i[s] = u) : n[s] = u;
    }
    if (n.symbol = n.symbol || r.defaultSymbol, e.setVisual(B({
      legendIcon: r.legendIcon || n.symbol,
      symbolKeepAspect: r.get("symbolKeepAspect")
    }, n)), t.isSeriesFiltered(r))
      return;
    var l = xt(i);
    function f(h, v) {
      for (var c = r.getRawValue(v), d = r.getDataParams(v), p = 0; p < l.length; p++) {
        var m = l[p];
        h.setItemVisual(v, m, i[m](c, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, WD = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
      return;
    var e = r.getData();
    function n(i, a) {
      for (var o = i.getItemModel(a), s = 0; s < Wp.length; s++) {
        var u = Wp[s], l = o.getShallow(u, !0);
        l != null && i.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: e.hasItemOption ? n : null
    };
  }
};
function YD(r, t, e) {
  switch (e) {
    case "color":
      var n = r.getItemVisual(t, "style");
      return n[r.getVisual("drawType")];
    case "opacity":
      return r.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getItemVisual(t, e);
  }
}
function ZD(r, t) {
  switch (t) {
    case "color":
      var e = r.getVisual("style");
      return e[r.getVisual("drawType")];
    case "opacity":
      return r.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getVisual(t);
  }
}
function Yn(r, t, e, n, i) {
  var a = r + t;
  e.isSilent(a) || n.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = i.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var h = o.getData(), v = Mn(h, i.fromActionPayload);
        e.trigger(a, {
          type: a,
          seriesId: o.id,
          name: z(v) ? h.getName(v[0]) : h.getName(v),
          selected: V(u) ? u : B({}, u)
        });
      }
  });
}
function XD(r, t, e) {
  r.on("selectchanged", function(n) {
    var i = e.getModel();
    n.isFromClick ? (Yn("map", "selectchanged", t, i, n), Yn("pie", "selectchanged", t, i, n)) : n.fromAction === "select" ? (Yn("map", "selected", t, i, n), Yn("pie", "selected", t, i, n)) : n.fromAction === "unselect" && (Yn("map", "unselected", t, i, n), Yn("pie", "unselected", t, i, n));
  });
}
function ca(r, t, e) {
  for (var n; r && !(t(r) && (n = r, e)); )
    r = r.__hostTarget || r.parent;
  return n;
}
var ce = new Te(), C_ = {};
function $D(r, t) {
  C_[r] = t;
}
function qD(r) {
  return C_[r];
}
var Fu = vt();
function KD(r) {
  Fu(r).prepare = {};
}
function QD(r) {
  Fu(r).fullUpdate = {};
}
function JD(r) {
  return Fu(r).prepare;
}
function lo(r) {
  return Fu(r).fullUpdate;
}
var jD = Math.round(Math.random() * 9), tA = typeof Object.defineProperty == "function", eA = (function() {
  function r() {
    this._id = "__ec_inner_" + jD++;
  }
  return r.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, r.prototype.set = function(t, e) {
    var n = this._guard(t);
    return tA ? Object.defineProperty(n, this._id, {
      value: e,
      enumerable: !1,
      configurable: !0
    }) : n[this._id] = e, this;
  }, r.prototype.delete = function(t) {
    return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
  }, r.prototype.has = function(t) {
    return !!this._guard(t)[this._id];
  }, r.prototype._guard = function(t) {
    if (t !== Object(t))
      throw TypeError("Value of WeakMap is not a non-null object.");
    return t;
  }, r;
})(), rA = yt.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
    r.moveTo(e, n - a), r.lineTo(e + i, n + a), r.lineTo(e - i, n + a), r.closePath();
  }
}), nA = yt.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
    r.moveTo(e, n - a), r.lineTo(e + i, n), r.lineTo(e, n + a), r.lineTo(e - i, n), r.closePath();
  }
}), iA = yt.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.x, n = t.y, i = t.width / 5 * 3, a = Math.max(i, t.height), o = i / 2, s = o * o / (a - o), u = n - a + o + s, l = Math.asin(s / o), f = Math.cos(l) * o, h = Math.sin(l), v = Math.cos(l), c = o * 0.6, d = o * 0.7;
    r.moveTo(e - f, u + s), r.arc(e, u, o, Math.PI - l, Math.PI * 2 + l), r.bezierCurveTo(e + f - h * c, u + s + v * c, e, n - d, e, n), r.bezierCurveTo(e, n - d, e - f + h * c, u + s + v * c, e - f, u + s), r.closePath();
  }
}), aA = yt.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.height, n = t.width, i = t.x, a = t.y, o = n / 3 * 2;
    r.moveTo(i, a), r.lineTo(i + o, a + e), r.lineTo(i, a + e / 4 * 3), r.lineTo(i - o, a + e), r.lineTo(i, a), r.closePath();
  }
}), oA = {
  line: Or,
  rect: St,
  roundRect: St,
  square: St,
  circle: Au,
  diamond: nA,
  pin: iA,
  arrow: aA,
  triangle: rA
}, sA = {
  line: function(r, t, e, n, i) {
    i.x1 = r, i.y1 = t + n / 2, i.x2 = r + e, i.y2 = t + n / 2;
  },
  rect: function(r, t, e, n, i) {
    i.x = r, i.y = t, i.width = e, i.height = n;
  },
  roundRect: function(r, t, e, n, i) {
    i.x = r, i.y = t, i.width = e, i.height = n, i.r = Math.min(e, n) / 4;
  },
  square: function(r, t, e, n, i) {
    var a = Math.min(e, n);
    i.x = r, i.y = t, i.width = a, i.height = a;
  },
  circle: function(r, t, e, n, i) {
    i.cx = r + e / 2, i.cy = t + n / 2, i.r = Math.min(e, n) / 2;
  },
  diamond: function(r, t, e, n, i) {
    i.cx = r + e / 2, i.cy = t + n / 2, i.width = e, i.height = n;
  },
  pin: function(r, t, e, n, i) {
    i.x = r + e / 2, i.y = t + n / 2, i.width = e, i.height = n;
  },
  arrow: function(r, t, e, n, i) {
    i.x = r + e / 2, i.y = t + n / 2, i.width = e, i.height = n;
  },
  triangle: function(r, t, e, n, i) {
    i.cx = r + e / 2, i.cy = t + n / 2, i.width = e, i.height = n;
  }
}, Ks = {};
T(oA, function(r, t) {
  Ks[t] = new r();
});
var uA = yt.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(r, t, e) {
    var n = by(r, t, e), i = this.shape;
    return i && i.symbolType === "pin" && t.position === "inside" && (n.y = e.y + e.height * 0.4), n;
  },
  buildPath: function(r, t, e) {
    var n = t.symbolType;
    if (n !== "none") {
      var i = Ks[n];
      i || (n = "rect", i = Ks[n]), sA[n](t.x, t.y, t.width, t.height, i.shape), i.buildPath(r, i.shape, e);
    }
  }
});
function lA(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush ? (e.stroke = r, e.fill = t || O.color.neutral00, e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
  }
}
function Fr(r, t, e, n, i, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var u;
  return r.indexOf("image://") === 0 ? u = _0(r.slice(8), new j(t, e, n, i), o ? "center" : "cover") : r.indexOf("path://") === 0 ? u = xv(r.slice(7), {}, new j(t, e, n, i), o ? "center" : "cover") : u = new uA({
    shape: {
      symbolType: r,
      x: t,
      y: e,
      width: n,
      height: i
    }
  }), u.__isEmptyBrush = s, u.setColor = lA, a && u.setColor(a), u;
}
function fA(r) {
  return z(r) || (r = [+r, +r]), [r[0] || 0, r[1] || 0];
}
function M_(r, t) {
  if (r != null)
    return z(r) || (r = [r, r]), [ye(r[0], t[0]) || 0, ye(X(r[1], r[0]), t[1]) || 0];
}
function yn(r) {
  return isFinite(r);
}
function hA(r, t, e) {
  var n = t.x == null ? 0 : t.x, i = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (n = n * e.width + e.x, i = i * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), n = yn(n) ? n : 0, i = yn(i) ? i : 1, a = yn(a) ? a : 0, o = yn(o) ? o : 0;
  var s = r.createLinearGradient(n, a, i, o);
  return s;
}
function vA(r, t, e) {
  var n = e.width, i = e.height, a = Math.min(n, i), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, u = t.r == null ? 0.5 : t.r;
  t.global || (o = o * n + e.x, s = s * i + e.y, u = u * a), o = yn(o) ? o : 0.5, s = yn(s) ? s : 0.5, u = u >= 0 && yn(u) ? u : 0.5;
  var l = r.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function gh(r, t, e) {
  for (var n = t.type === "radial" ? vA(r, t, e) : hA(r, t, e), i = t.colorStops, a = 0; a < i.length; a++)
    n.addColorStop(i[a].offset, i[a].color);
  return n;
}
function cA(r, t) {
  if (r === t || !r && !t)
    return !1;
  if (!r || !t || r.length !== t.length)
    return !0;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !0;
  return !1;
}
function Go(r) {
  return parseInt(r, 10);
}
function Uo(r, t, e) {
  var n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (e[n] != null && e[n] !== "auto")
    return parseFloat(e[n]);
  var s = document.defaultView.getComputedStyle(r);
  return (r[i] || Go(s[n]) || Go(r.style[n])) - (Go(s[a]) || 0) - (Go(s[o]) || 0) || 0;
}
function dA(r, t) {
  return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : wt(r) ? [r] : z(r) ? r : null;
}
function D_(r) {
  var t = r.style, e = t.lineDash && t.lineWidth > 0 && dA(t.lineDash, t.lineWidth), n = t.lineDashOffset;
  if (e) {
    var i = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    i && i !== 1 && (e = U(e, function(a) {
      return a / i;
    }), n /= i);
  }
  return [e, n];
}
var pA = new Dn(!0);
function Qs(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function Yp(r) {
  return typeof r == "string" && r !== "none";
}
function Js(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function Zp(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
  } else
    r.fill();
}
function Xp(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
  } else
    r.stroke();
}
function mh(r, t, e) {
  var n = zy(t.image, t.__image, e);
  if (wu(n)) {
    var i = r.createPattern(n, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && i && i.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * JS), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a);
    }
    return i;
  }
}
function gA(r, t, e, n, i) {
  var a, o = Qs(e), s = Js(e), u = e.strokePercent, l = u < 1, f = !t.path;
  (!t.silent || l) && f && t.createPathProxy();
  var h = t.path || pA, v = t.__dirty;
  if (!n) {
    var c = e.fill, d = e.stroke, p = s && !!c.colorStops, m = o && !!d.colorStops, g = s && !!c.image, y = o && !!d.image, _ = void 0, S = void 0, b = void 0, x = void 0, w = void 0;
    (p || m) && (w = t.getBoundingRect()), p && (_ = v ? gh(r, c, w) : t.__canvasFillGradient, t.__canvasFillGradient = _), m && (S = v ? gh(r, d, w) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = S), g && (b = v || !t.__canvasFillPattern ? mh(r, c, t) : t.__canvasFillPattern, t.__canvasFillPattern = b), y && (x = v || !t.__canvasStrokePattern ? mh(r, d, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = x), p ? r.fillStyle = _ : g && (b ? r.fillStyle = b : s = !1), m ? r.strokeStyle = S : y && (x ? r.strokeStyle = x : o = !1);
  }
  var D = t.getGlobalScale();
  h.setScale(D[0], D[1], t.segmentIgnoreThreshold);
  var C, M;
  r.setLineDash && e.lineDash && (a = D_(t), C = a[0], M = a[1]);
  var A = !0;
  (f || v & Jn) && (h.setDPR(r.dpr), l ? h.setContext(null) : (h.setContext(r), A = !1), h.reset(), t.buildPath(h, t.shape, n), h.toStatic(), t.pathUpdated()), A && h.rebuildPath(r, l ? u : 1), C && (r.setLineDash(C), r.lineDashOffset = M), n ? (i.batchFill = s, i.batchStroke = o) : e.strokeFirst ? (o && Xp(r, e), s && Zp(r, e)) : (s && Zp(r, e), o && Xp(r, e)), C && r.setLineDash([]);
}
function mA(r, t, e) {
  var n = t.__image = zy(e.image, t.__image, t, t.onload);
  if (!(!n || !wu(n))) {
    var i = e.x || 0, a = e.y || 0, o = t.getWidth(), s = t.getHeight(), u = n.width / n.height;
    if (o == null && s != null ? o = s * u : s == null && o != null ? s = o / u : o == null && s == null && (o = n.width, s = n.height), e.sWidth && e.sHeight) {
      var l = e.sx || 0, f = e.sy || 0;
      r.drawImage(n, l, f, e.sWidth, e.sHeight, i, a, o, s);
    } else if (e.sx && e.sy) {
      var l = e.sx, f = e.sy, h = o - l, v = s - f;
      r.drawImage(n, l, f, h, v, i, a, o, s);
    } else
      r.drawImage(n, i, a, o, s);
  }
}
function yA(r, t, e) {
  var n, i = e.text;
  if (i != null && (i += ""), i) {
    r.font = e.font || Er, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
    var a = void 0, o = void 0;
    r.setLineDash && e.lineDash && (n = D_(t), a = n[0], o = n[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (Qs(e) && r.strokeText(i, e.x, e.y), Js(e) && r.fillText(i, e.x, e.y)) : (Js(e) && r.fillText(i, e.x, e.y), Qs(e) && r.strokeText(i, e.x, e.y)), a && r.setLineDash([]);
  }
}
var $p = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], qp = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function A_(r, t, e, n, i) {
  var a = !1;
  if (!n && (e = e || {}, t === e))
    return !1;
  if (n || t.opacity !== e.opacity) {
    Zt(r, i), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? xn.opacity : o;
  }
  (n || t.blend !== e.blend) && (a || (Zt(r, i), a = !0), r.globalCompositeOperation = t.blend || xn.blend);
  for (var s = 0; s < $p.length; s++) {
    var u = $p[s];
    (n || t[u] !== e[u]) && (a || (Zt(r, i), a = !0), r[u] = r.dpr * (t[u] || 0));
  }
  return (n || t.shadowColor !== e.shadowColor) && (a || (Zt(r, i), a = !0), r.shadowColor = t.shadowColor || xn.shadowColor), a;
}
function Kp(r, t, e, n, i) {
  var a = t.style, o = n ? null : e && e.style || {};
  if (a === o)
    return !1;
  var s = A_(r, a, o, n, i);
  if ((n || a.fill !== o.fill) && (s || (Zt(r, i), s = !0), Yp(a.fill) && (r.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (Zt(r, i), s = !0), Yp(a.stroke) && (r.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (Zt(r, i), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== l && (s || (Zt(r, i), s = !0), r.lineWidth = l);
  }
  for (var f = 0; f < qp.length; f++) {
    var h = qp[f], v = h[0];
    (n || a[v] !== o[v]) && (s || (Zt(r, i), s = !0), r[v] = a[v] || h[1]);
  }
  return s;
}
function _A(r, t, e, n, i) {
  return A_(r, t.style, e && e.style, n, i);
}
function I_(r, t) {
  var e = t.transform, n = r.dpr || 1;
  e ? r.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : r.setTransform(n, 0, 0, n, 0, 0);
}
function SA(r, t, e) {
  for (var n = !1, i = 0; i < r.length; i++) {
    var a = r[i];
    n = n || a.isZeroArea(), I_(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  e.allClipped = n;
}
function bA(r, t) {
  return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
}
var Qp = 1, Jp = 2, jp = 3, tg = 4;
function xA(r) {
  var t = Js(r), e = Qs(r);
  return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
}
function Zt(r, t) {
  t.batchFill && (t.batchFill = !1, r.fill()), t.batchStroke && (t.batchStroke = !1, r.stroke());
}
function L_(r, t) {
  var e = { inHover: !1, viewWidth: 0, viewHeight: 0, beforeBrushParam: {} };
  _n(r, t, e), ci(r, e);
}
function _n(r, t, e) {
  var n = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    t.__dirty &= ~jt, t.__isRendered = !1;
    return;
  }
  var i = t.__clipPaths, a = e.prevElClipPaths, o = t.style, s = !1, u = !1;
  if ((!a || cA(i, a)) && (a && (Zt(r, e), r.restore(), u = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), i && i.length && (Zt(r, e), r.save(), SA(i, r, e), s = !0, e.prevElClipPaths = i)), e.allClipped) {
    t.__dirty &= ~jt, t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(e.beforeBrushParam), t.innerBeforeBrush();
  var l = e.prevEl;
  l || (u = s = !0);
  var f = t instanceof yt && t.autoBatch && xA(o);
  s || bA(n, l.transform) ? (Zt(r, e), I_(r, t)) : f || Zt(r, e), t instanceof yt ? (e.lastDrawType !== Qp && (u = !0, e.lastDrawType = Qp), Kp(r, t, l, u, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), gA(r, t, o, f, e)) : t instanceof zs ? (e.lastDrawType !== jp && (u = !0, e.lastDrawType = jp), Kp(r, t, l, u, e), yA(r, t, o)) : t instanceof Hr ? (e.lastDrawType !== Jp && (u = !0, e.lastDrawType = Jp), _A(r, t, l, u, e), mA(r, t, o)) : t.getTemporalDisplayables && (e.lastDrawType !== tg && (u = !0, e.lastDrawType = tg), wA(r, t, e)), t.innerAfterBrush(), t.afterBrush && (f && Zt(r, e), t.afterBrush()), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function ci(r, t) {
  Zt(r, t), t.prevElClipPaths && r.restore();
}
function wA(r, t, e) {
  var n = t.getDisplayables(), i = t.getTemporalDisplayables();
  r.save();
  var a = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: e.viewWidth,
    viewHeight: e.viewHeight,
    inHover: e.inHover,
    beforeBrushParam: {}
  }, o, s;
  for (o = t.getCursor(), s = n.length; o < s; o++) {
    var u = n[o];
    u.beforeBrush && u.beforeBrush(e.beforeBrushParam), u.innerBeforeBrush(), _n(r, u, a), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  ci(r, a);
  for (var l = 0, f = i.length; l < f; l++) {
    var u = i[l];
    u.beforeBrush && u.beforeBrush(e.beforeBrushParam), u.innerBeforeBrush(), _n(r, u, a), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  ci(r, a), t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
}
var Zl = new eA(), eg = new mi(100), rg = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function yh(r, t) {
  if (r === "none")
    return null;
  var e = t.getDevicePixelRatio(), n = t.getZr(), i = n.painter.type === "svg";
  r.dirty && Zl.delete(r);
  var a = Zl.get(r);
  if (a)
    return a;
  var o = ut(r, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = {
    repeat: "repeat"
  };
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / e, Zl.set(r, s), r.dirty = !1, s;
  function u(l) {
    for (var f = [e], h = !0, v = 0; v < rg.length; ++v) {
      var c = o[rg[v]];
      if (c != null && !z(c) && !V(c) && !wt(c) && typeof c != "boolean") {
        h = !1;
        break;
      }
      f.push(c);
    }
    var d;
    if (h) {
      d = f.join(",") + (i ? "-svg" : "");
      var p = eg.get(d);
      p && (i ? l.svgElement = p : l.image = p);
    }
    var m = R_(o.dashArrayX), g = TA(o.dashArrayY), y = P_(o.symbol), _ = CA(m), S = E_(g), b = !i && ue.createCanvas(), x = i && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, w = C(), D;
    b && (b.width = w.width * e, b.height = w.height * e, D = b.getContext("2d")), M(), h && eg.put(d, b || x), l.image = b, l.svgElement = x, l.svgWidth = w.width, l.svgHeight = w.height;
    function C() {
      for (var A = 1, L = 0, I = _.length; L < I; ++L)
        A = hd(A, _[L]);
      for (var P = 1, L = 0, I = y.length; L < I; ++L)
        P = hd(P, y[L].length);
      A *= P;
      var E = S * _.length * y.length;
      return {
        width: Math.max(1, Math.min(A, o.maxTileWidth)),
        height: Math.max(1, Math.min(E, o.maxTileHeight))
      };
    }
    function M() {
      D && (D.clearRect(0, 0, b.width, b.height), o.backgroundColor && (D.fillStyle = o.backgroundColor, D.fillRect(0, 0, b.width, b.height)));
      for (var A = 0, L = 0; L < g.length; ++L)
        A += g[L];
      if (A <= 0)
        return;
      for (var I = -S, P = 0, E = 0, R = 0; I < w.height; ) {
        if (P % 2 === 0) {
          for (var F = E / 2 % y.length, G = 0, W = 0, J = 0; G < w.width * 2; ) {
            for (var q = 0, L = 0; L < m[R].length; ++L)
              q += m[R][L];
            if (q <= 0)
              break;
            if (W % 2 === 0) {
              var rt = (1 - o.symbolSize) * 0.5, $ = G + m[R][W] * rt, H = I + g[P] * rt, it = m[R][W] * o.symbolSize, lt = g[P] * o.symbolSize, Ut = J / 2 % y[F].length;
              Me($, H, it, lt, y[F][Ut]);
            }
            G += m[R][W], ++J, ++W, W === m[R].length && (W = 0);
          }
          ++R, R === m.length && (R = 0);
        }
        I += g[P], ++E, ++P, P === g.length && (P = 0);
      }
      function Me(bt, Lt, nt, ft, Vr) {
        var Wt = i ? 1 : e, Cc = Fr(Vr, bt * Wt, Lt * Wt, nt * Wt, ft * Wt, o.color, o.symbolKeepAspect);
        if (i) {
          var Mc = n.painter.renderOneToVNode(Cc);
          Mc && x.children.push(Mc);
        } else
          L_(D, Cc);
      }
    }
  }
}
function P_(r) {
  if (!r || r.length === 0)
    return [["rect"]];
  if (V(r))
    return [[r]];
  for (var t = !0, e = 0; e < r.length; ++e)
    if (!V(r[e])) {
      t = !1;
      break;
    }
  if (t)
    return P_([r]);
  for (var n = [], e = 0; e < r.length; ++e)
    V(r[e]) ? n.push([r[e]]) : n.push(r[e]);
  return n;
}
function R_(r) {
  if (!r || r.length === 0)
    return [[0, 0]];
  if (wt(r)) {
    var t = Math.ceil(r);
    return [[t, t]];
  }
  for (var e = !0, n = 0; n < r.length; ++n)
    if (!wt(r[n])) {
      e = !1;
      break;
    }
  if (e)
    return R_([r]);
  for (var i = [], n = 0; n < r.length; ++n)
    if (wt(r[n])) {
      var t = Math.ceil(r[n]);
      i.push([t, t]);
    } else {
      var t = U(r[n], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? i.push(t.concat(t)) : i.push(t);
    }
  return i;
}
function TA(r) {
  if (!r || typeof r == "object" && r.length === 0)
    return [0, 0];
  if (wt(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = U(r, function(n) {
    return Math.ceil(n);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function CA(r) {
  return U(r, function(t) {
    return E_(t);
  });
}
function E_(r) {
  for (var t = 0, e = 0; e < r.length; ++e)
    t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
var MA = lv(DA);
function DA(r, t) {
  r.eachRawSeries(function(e) {
    if (!r.isSeriesFiltered(e)) {
      var n = e.getData();
      n.hasItemVisual() && n.each(function(o) {
        var s = n.getItemVisual(o, "decal");
        if (s) {
          var u = n.ensureUniqueItemVisual(o, "style");
          u.decal = yh(s, t);
        }
      });
      var i = n.getVisual("decal");
      if (i) {
        var a = n.getVisual("style");
        a.decal = yh(i, t);
      }
    }
  });
}
var AA = 1, IA = 800, LA = 900, PA = 920, RA = 1e3, EA = 2e3, ng = 5e3, O_ = 1e3, OA = 1100, qv = 2e3, k_ = 3e3, kA = 4e3, zu = 4500, BA = 4600, NA = 5e3, FA = 6e3, B_ = 7e3, zA = {
  PROCESSOR: {
    SERIES_FILTER: IA,
    AXIS_STATISTICS: PA,
    FILTER: RA,
    STATISTIC: ng,
    STATISTICS: ng
  },
  VISUAL: {
    LAYOUT: O_,
    PROGRESSIVE_LAYOUT: OA,
    GLOBAL: qv,
    CHART: k_,
    POST_CHART_LAYOUT: BA,
    COMPONENT: kA,
    BRUSH: NA,
    CHART_ITEM: zu,
    ARIA: FA,
    DECAL: B_
  }
}, At = "__flagInMainProcess", Wo = "__mainProcessVersion", Et = "__pendingUpdate", Xl = "__needsUpdateStatus", ig = /^[a-zA-Z0-9_]+$/, $l = "__connectUpdateStatus", ag = 0, HA = 1, VA = 2;
function N_(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    if (this.isDisposed()) {
      this.id;
      return;
    }
    return z_(this, r, t);
  };
}
function F_(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return z_(this, r, t);
  };
}
function z_(r, t, e) {
  return e[0] = e[0] && e[0].toLowerCase(), Te.prototype[t].apply(r, e);
}
var H_ = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  })(Te)
), V_ = H_.prototype;
V_.on = F_("on");
V_.off = F_("off");
var hn, ql, Yo, nr, Zo, Kl, Ql, Zn, Xn, og, sg, Jl, ug, Xo, lg, G_, he, fg, $n, U_ = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e, n, i) {
      var a = r.call(this, new GD()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, a.__v_skip = !0, a._dom = e;
      var o = "canvas", s = "auto", u = !1;
      a[Wo] = 1, i.ssr;
      var l = a._zr = ud(e, {
        renderer: i.renderer || o,
        devicePixelRatio: i.devicePixelRatio,
        width: i.width,
        height: i.height,
        ssr: i.ssr,
        useDirtyRect: X(i.useDirtyRect, u),
        useCoarsePointer: X(i.useCoarsePointer, s),
        pointerSize: i.pointerSize
      });
      a._ssr = i.ssr, a._throttledZrFlush = m_(K(l.flush, l), 17), a._updateTheme(n), a._locale = EC(i.locale || P0), a._coordSysMgr = new Gv();
      var f = a._api = lg(a);
      function h(v, c) {
        return v.__prio - c.__prio;
      }
      return as(tu, h), as(bh, h), a._scheduler = new S_(a, f, bh, tu), a._messageCenter = new H_(), a._initEvents(), a.resize = K(a.resize, a), l.animation.on("frame", a._onframe, a), og(l, a), sg(l, a), Tf(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        var e = this._scheduler, n = this._model, i = this._api;
        if (fg(this), this[Et]) {
          var a = this[Et].silent;
          this[At] = !0, $n(this);
          try {
            hn(this), nr.update.call(this, null, this[Et].updateParams);
          } catch (u) {
            throw this[At] = !1, this[Et] = null, u;
          }
          this._zr.flush(), this[At] = !1, this[Et] = null, Zn.call(this, a), Xn.call(this, a);
        } else if (e.unfinished) {
          var o = AA;
          do {
            e.unfinished = !1;
            var s = ue.getTime();
            e.performSeriesTasks(n), e.performDataProcessorTasks(n), Kl(this, n), e.performVisualTasks(n), Xo(this, this._model, i, "remain", {}), o -= ue.getTime() - s;
          } while (o > 0 && e.unfinished);
          e.unfinished || this._zr.flush();
        }
      }
    }, t.prototype.getDom = function() {
      return this._dom;
    }, t.prototype.getId = function() {
      return this.id;
    }, t.prototype.getZr = function() {
      return this._zr;
    }, t.prototype.isSSR = function() {
      return this._ssr;
    }, t.prototype.setOption = function(e, n, i) {
      if (!this[At]) {
        if (this._disposed) {
          this.id;
          return;
        }
        var a, o, s;
        if (Z(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[At] = !0, $n(this), !this._model || n) {
          var u = new SM(this._api), l = this._theme, f = this._model = new Yv();
          f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
        }
        this._model.setOption(e, {
          replaceMerge: o
        }, xh);
        var h = {
          seriesTransition: s,
          optionChanged: !0
        };
        if (i)
          this[Et] = {
            silent: a,
            updateParams: h
          }, this[At] = !1, this.getZr().wakeUp();
        else {
          try {
            hn(this), nr.update.call(this, null, h);
          } catch (v) {
            throw this[Et] = null, this[At] = !1, v;
          }
          this._ssr || this._zr.flush(), this[Et] = null, this[At] = !1, Zn.call(this, a), Xn.call(this, a);
        }
      }
    }, t.prototype.setTheme = function(e, n) {
      if (!this[At]) {
        if (this._disposed) {
          this.id;
          return;
        }
        var i = this._model;
        if (i) {
          var a = n && n.silent, o = null;
          this[Et] && (a == null && (a = this[Et].silent), o = this[Et].updateParams, this[Et] = null), this[At] = !0, $n(this);
          try {
            this._updateTheme(e), i.setTheme(this._theme), hn(this), nr.update.call(this, {
              type: "setTheme"
            }, o);
          } catch (s) {
            throw this[At] = !1, s;
          }
          this[At] = !1, Zn.call(this, a), Xn.call(this, a);
        }
      }
    }, t.prototype._updateTheme = function(e) {
      V(e) && (e = W_[e]), e && (e = tt(e), e && J0(e, !0), this._theme = e);
    }, t.prototype.getModel = function() {
      return this._model;
    }, t.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, t.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, t.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, t.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || et.hasGlobalWindow && window.devicePixelRatio || 1;
    }, t.prototype.getRenderedCanvas = function(e) {
      return this.renderToCanvas(e);
    }, t.prototype.renderToCanvas = function(e) {
      e = e || {};
      var n = this._zr.painter;
      return n.getRenderedCanvas({
        backgroundColor: e.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: e.pixelRatio || this.getDevicePixelRatio()
      });
    }, t.prototype.renderToSVGString = function(e) {
      e = e || {};
      var n = this._zr.painter;
      return n.renderToString({
        useViewBox: e.useViewBox
      });
    }, t.prototype.getSvgDataURL = function() {
      var e = this._zr, n = e.storage.getDisplayList();
      return T(n, function(i) {
        i.stopAnimation(null, !0);
      }), e.painter.toDataURL();
    }, t.prototype.getDataURL = function(e) {
      if (this._disposed) {
        this.id;
        return;
      }
      e = e || {};
      var n = e.excludeComponents, i = this._model, a = [], o = this;
      T(n, function(u) {
        i.eachComponent({
          mainType: u
        }, function(l) {
          var f = o._componentsMap[l.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
      return T(a, function(u) {
        u.group.ignore = !1;
      }), s;
    }, t.prototype.getConnectedDataURL = function(e) {
      if (this._disposed) {
        this.id;
        return;
      }
      var n = e.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (hg[i]) {
        var u = s, l = s, f = -s, h = -s, v = [], c = e && e.pixelRatio || this.getDevicePixelRatio();
        T(Ca, function(_, S) {
          if (_.group === i) {
            var b = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(tt(e)), x = _.getDom().getBoundingClientRect();
            u = a(x.left, u), l = a(x.top, l), f = o(x.right, f), h = o(x.bottom, h), v.push({
              dom: b,
              left: x.left,
              top: x.top
            });
          }
        }), u *= c, l *= c, f *= c, h *= c;
        var d = f - u, p = h - l, m = ue.createCanvas(), g = ud(m, {
          renderer: n ? "svg" : "canvas"
        });
        if (g.resize({
          width: d,
          height: p
        }), n) {
          var y = "";
          return T(v, function(_) {
            var S = _.left - u, b = _.top - l;
            y += '<g transform="translate(' + S + "," + b + ')">' + _.dom + "</g>";
          }), g.painter.getSvgRoot().innerHTML = y, e.connectedBackgroundColor && g.painter.setBackgroundColor(e.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL();
        } else
          return e.connectedBackgroundColor && g.add(new St({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: p
            },
            style: {
              fill: e.connectedBackgroundColor
            }
          })), T(v, function(_) {
            var S = new Hr({
              style: {
                x: _.left * c - u,
                y: _.top * c - l,
                image: _.dom
              }
            });
            g.add(S);
          }), g.refreshImmediately(), m.toDataURL("image/" + (e && e.type || "png"));
      } else
        return this.getDataURL(e);
    }, t.prototype.convertToPixel = function(e, n, i) {
      return Zo(this, "convertToPixel", e, n, i);
    }, t.prototype.convertToLayout = function(e, n, i) {
      return Zo(this, "convertToLayout", e, n, i);
    }, t.prototype.convertFromPixel = function(e, n, i) {
      return Zo(this, "convertFromPixel", e, n, i);
    }, t.prototype.containPixel = function(e, n) {
      if (this._disposed) {
        this.id;
        return;
      }
      var i = this._model, a, o = _a(i, e);
      return T(o, function(s, u) {
        u.indexOf("Models") >= 0 && T(s, function(l) {
          var f = l.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(n);
          else if (u === "seriesModels") {
            var h = this._chartsMap[l.__viewId];
            h && h.containPoint && (a = a || h.containPoint(n, l));
          }
        }, this);
      }, this), !!a;
    }, t.prototype.getVisual = function(e, n) {
      var i = this._model, a = _a(i, e, {
        defaultMainType: "series"
      }), o = a.seriesModel, s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return u != null ? YD(s, u, n) : ZD(s, n);
    }, t.prototype.getViewOfComponentModel = function(e) {
      return this._componentsMap[e.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(e) {
      return this._chartsMap[e.__viewId];
    }, t.prototype._initEvents = function() {
      var e = this;
      T(GA, function(i) {
        var a = function(o) {
          var s = e.getModel(), u = o.target, l, f = i === "globalout";
          if (f ? l = {} : u && ca(u, function(p) {
            var m = pt(p);
            if (m && m.dataIndex != null) {
              var g = m.dataModel || s.getSeriesByIndex(m.seriesIndex);
              return l = g && g.getDataParams(m.dataIndex, m.dataType, u) || {}, !0;
            } else if (m.eventData)
              return l = B({}, m.eventData), !0;
          }, !0), l) {
            var h = l.componentType, v = l.componentIndex;
            (h === "markLine" || h === "markPoint" || h === "markArea") && (h = "series", v = l.seriesIndex);
            var c = h && v != null && s.getComponent(h, v), d = c && e[c.mainType === "series" ? "_chartsMap" : "_componentsMap"][c.__viewId];
            l.event = o, l.type = i, e._$eventProcessor.eventInfo = {
              targetEl: u,
              packedEvent: l,
              model: c,
              view: d
            }, e.trigger(i, l);
          }
        };
        a.zrEventfulCallAtLast = !0, e._zr.on(i, a, e);
      });
      var n = this._messageCenter;
      T(Sh, function(i, a) {
        n.on(a, function(o) {
          e.trigger(a, o);
        });
      }), XD(n, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        this.id;
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        this.id;
        return;
      }
      this._disposed = !0;
      var e = this.getDom();
      e && Ey(this.getDom(), Qv, "");
      var n = this, i = n._api, a = n._model;
      T(n._componentsViews, function(o) {
        o.dispose(a, i);
      }), T(n._chartsViews, function(o) {
        o.dispose(a, i);
      }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete Ca[n.id];
    }, t.prototype.resize = function(e) {
      if (!this[At]) {
        if (this._disposed) {
          this.id;
          return;
        }
        this._zr.resize(e);
        var n = this._model;
        if (this._loadingFX && this._loadingFX.resize(), !!n) {
          var i = n.resetOption("media"), a = e && e.silent;
          this[Et] && (a == null && (a = this[Et].silent), i = !0, this[Et] = null), this[At] = !0, $n(this);
          try {
            i && hn(this), nr.update.call(this, {
              type: "resize",
              animation: B({
                // Disable animation
                duration: 0
              }, e && e.animation)
            });
          } catch (o) {
            throw this[At] = !1, o;
          }
          this[At] = !1, Zn.call(this, a), Xn.call(this, a);
        }
      }
    }, t.prototype.showLoading = function(e, n) {
      if (this._disposed) {
        this.id;
        return;
      }
      if (Z(e) && (n = e, e = ""), e = e || "default", this.hideLoading(), !!wh[e]) {
        var i = wh[e](this._api, n), a = this._zr;
        this._loadingFX = i, a.add(i);
      }
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        this.id;
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(e) {
      var n = B({}, e);
      return n.type = _h[e.type], n;
    }, t.prototype.dispatchAction = function(e, n) {
      if (this._disposed) {
        this.id;
        return;
      }
      if (Z(n) || (n = {
        silent: !!n
      }), !!js[e.type] && this._model) {
        if (this[At]) {
          this._pendingActions.push(e);
          return;
        }
        var i = n.silent;
        Ql.call(this, e, i);
        var a = n.flush;
        a ? this._zr.flush() : a !== !1 && et.browser.weChat && this._throttledZrFlush(), Zn.call(this, i), Xn.call(this, i);
      }
    }, t.prototype.updateLabelLayout = function() {
      ce.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(e) {
      if (this._disposed) {
        this.id;
        return;
      }
      var n = e.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
      a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = (function() {
      hn = function(h) {
        KD(h._model);
        var v = h._scheduler;
        v.restorePipelines(h._zr, h._model), v.prepareStageTasks(), ql(h, !0), ql(h, !1), v.plan();
      }, ql = function(h, v) {
        for (var c = h._model, d = h._scheduler, p = v ? h._componentsViews : h._chartsViews, m = v ? h._componentsMap : h._chartsMap, g = h._zr, y = h._api, _ = 0; _ < p.length; _++)
          p[_].__alive = !1;
        v ? c.eachComponent(function(x, w) {
          x !== "series" && S(w);
        }) : c.eachSeries(S);
        function S(x) {
          var w = x.__requireNewView;
          x.__requireNewView = !1;
          var D = "_ec_" + x.id + "_" + x.type, C = !w && m[D];
          if (!C) {
            var M = Ge(x.type), A = v ? le.getClass(M.main, M.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              $e.getClass(M.sub)
            );
            C = new A(), C.init(c, y), m[D] = C, p.push(C), g.add(C.group);
          }
          x.__viewId = C.__id = D, C.__alive = !0, C.__model = x, C.group.__ecComponentInfo = {
            mainType: x.mainType,
            index: x.componentIndex
          }, !v && d.prepareView(C, x, c, y);
        }
        for (var _ = 0; _ < p.length; ) {
          var b = p[_];
          b.__alive ? _++ : (!v && b.renderTask.dispose(), g.remove(b.group), b.dispose(c, y), p.splice(_, 1), m[b.__id] === b && delete m[b.__id], b.__id = b.group.__ecComponentInfo = null);
        }
      }, Yo = function(h, v, c, d, p) {
        var m = h._model;
        if (m.setUpdatePayload(c), !d) {
          T([].concat(h._componentsViews).concat(h._chartsViews), S);
          return;
        }
        var g = Ux(c, d, p), y = c.excludeSeriesId, _;
        y != null && (_ = Y(), T(Xt(y), function(b) {
          var x = Ze(b, null);
          x != null && _.set(x, !0);
        })), m && m.eachComponent(g, function(b) {
          var x = _ && _.get(b.id) != null;
          if (!x)
            if (Wd(c))
              if (b instanceof Nr)
                c.type === wn && !c.notBlur && !b.get(["emphasis", "disabled"]) && hT(b, c, h._api);
              else {
                var w = gv(b.mainType, b.componentIndex, c.name, h._api), D = w.focusSelf, C = w.dispatchers;
                c.type === wn && D && !c.notBlur && th(b.mainType, b.componentIndex, h._api), C && T(C, function(M) {
                  c.type === wn ? bi(M) : xi(M);
                });
              }
            else nh(c) && b instanceof Nr && (dT(b, c, h._api), Vd(b), he(h));
        }, h), m && m.eachComponent(g, function(b) {
          var x = _ && _.get(b.id) != null;
          x || S(h[d === "series" ? "_chartsMap" : "_componentsMap"][b.__viewId]);
        }, h);
        function S(b) {
          b && b.__alive && b[v] && b[v](b.__model, m, h._api, c);
        }
      }, nr = {
        prepareAndUpdate: function(h) {
          hn(this), nr.update.call(this, h, h && {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, v) {
          var c = this._model, d = this._api, p = this._zr, m = this._coordSysMgr, g = this._scheduler;
          if (c) {
            QD(c), c.setUpdatePayload(h), g.restoreData(c, h), g.performSeriesTasks(c), m.create(c, d), ce.trigger("coordsys:aftercreate", c, d), g.performDataProcessorTasks(c, h), Kl(this, c), m.update(c, d), n(c), g.performVisualTasks(c, h);
            var y = c.get("backgroundColor") || "transparent";
            p.setBackgroundColor(y);
            var _ = c.get("darkMode");
            _ != null && _ !== "auto" && p.setDarkMode(_), Jl(this, c, d, h, v), ce.trigger("afterupdate", c, d);
          }
        },
        /**
         * PENDING: See INCONSISTENCY_OF_BRUSH_SELECTED_EVENT_IN_UPDATE_TRANSFORM
         */
        updateTransform: function(h) {
          var v = this, c = v._model, d = v._api;
          if (c) {
            c.setUpdatePayload(h);
            var p = [];
            c.eachComponent(function(g, y) {
              if (g !== $y) {
                var _ = v.getViewOfComponentModel(y);
                if (_ && _.__alive)
                  if (_.updateTransform) {
                    var S = _.updateTransform(y, c, d, h);
                    S && S.update && p.push(_);
                  } else
                    p.push(_);
              }
            });
            var m = Y();
            c.eachSeries(function(g) {
              var y = v._chartsMap[g.__viewId], _ = g.pipelineContext;
              if (y.updateTransform && !_.progressiveRender) {
                var S = y.updateTransform(g, c, d, h);
                S && S.update && m.set(g.uid, 1);
              } else
                m.set(g.uid, 1);
            }), v._scheduler.performVisualTasks(c, h, {
              setDirty: !0,
              dirtyMap: m
            }), Xo(v, c, d, h, {}, m), ce.trigger("afterupdate", c, d);
          }
        },
        updateView: function(h) {
          var v = this._model;
          v && (v.setUpdatePayload(h), $e.markUpdateMethod(h, "updateView"), n(v), this._scheduler.performVisualTasks(v, h, {
            setDirty: !0
          }), Jl(this, v, this._api, h, {}), ce.trigger("afterupdate", v, this._api));
        },
        updateVisual: function(h) {
          var v = this, c = this._model;
          c && (c.setUpdatePayload(h), c.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), $e.markUpdateMethod(h, "updateVisual"), n(c), this._scheduler.performVisualTasks(c, h, {
            visualType: "visual",
            setDirty: !0
          }), c.eachComponent(function(d, p) {
            if (d !== "series") {
              var m = v.getViewOfComponentModel(p);
              m && m.__alive && m.updateVisual(p, c, v._api, h);
            }
          }), c.eachSeries(function(d) {
            var p = v._chartsMap[d.__viewId];
            p.updateVisual(d, c, v._api, h);
          }), ce.trigger("afterupdate", c, this._api));
        },
        /**
         * @deprecated
         */
        updateLayout: function(h) {
          nr.update.call(this, h);
        }
      };
      function e(h, v, c, d, p) {
        if (h._disposed) {
          h.id;
          return;
        }
        for (var m = h._model, g = h._coordSysMgr.getCoordinateSystems(), y, _ = _a(m, c), S = 0; S < g.length; S++) {
          var b = g[S];
          if (b[v] && (y = b[v](m, _, d, p)) != null)
            return y;
        }
      }
      Zo = e, Kl = function(h, v) {
        var c = h._chartsMap, d = h._scheduler;
        v.eachSeries(function(p) {
          d.updateStreamModes(p, c[p.__viewId]);
        });
      }, Ql = function(h, v) {
        var c = this, d = this.getModel(), p = h.type, m = h.escapeConnect, g = js[p], y = (g.update || "update").split(":"), _ = y.pop(), S = y[0] != null && Ge(y[0]);
        this[At] = !0, $n(this);
        var b = [h], x = !1;
        h.batch && (x = !0, b = U(h.batch, function(R) {
          return R = ut(B({}, R), h), R.batch = null, R;
        }));
        var w = [], D, C = [], M = g.nonRefinedEventType, A = nh(h), L = Wd(h);
        if (L && o0(this._api), T(b, function(R) {
          var F = g.action(R, d, c._api);
          if (g.refineEvent ? C.push(F) : D = F, D = D || B({}, R), D.type = M, w.push(D), L) {
            var G = sv(h), W = G.queryOptionMap, J = G.mainTypeSpecified, q = J ? W.keys()[0] : "series";
            Yo(c, _, R, q), he(c);
          } else A ? (Yo(c, _, R, "series"), he(c)) : S && Yo(c, _, R, S.main, S.sub);
        }), _ !== "none" && !L && !A && !S)
          try {
            this[Et] ? (hn(this), nr.update.call(this, h), this[Et] = null) : nr[_].call(this, h);
          } catch (R) {
            throw this[At] = !1, R;
          }
        if (x ? D = {
          type: M,
          escapeConnect: m,
          batch: w
        } : D = w[0], this[At] = !1, !v) {
          var I = void 0;
          if (g.refineEvent) {
            var P = g.refineEvent(C, h, d, this._api).eventContent;
            qe(Z(P)), I = ut({
              type: g.refinedEventType
            }, P), I.fromAction = h.type, I.fromActionPayload = h, I.escapeConnect = !0;
          }
          var E = this._messageCenter;
          E.trigger(D.type, D), I && E.trigger(I.type, I);
        }
      }, Zn = function(h) {
        for (var v = this._pendingActions; v.length; ) {
          var c = v.shift();
          Ql.call(this, c, h);
        }
      }, Xn = function(h) {
        !h && this.trigger("updated");
      }, og = function(h, v) {
        h.on("rendered", function(c) {
          v.trigger("rendered", c), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !v[Et] && !v._scheduler.unfinished && !v._pendingActions.length ? v.trigger("finished") : h.refresh();
        });
      }, sg = function(h, v) {
        h.on("mouseover", function(c) {
          var d = c.target, p = ca(d, rh);
          p && (vT(p, c, v._api), he(v));
        }).on("mouseout", function(c) {
          var d = c.target, p = ca(d, rh);
          p && (cT(p, c, v._api), he(v));
        }).on("click", function(c) {
          var d = c.target, p = ca(d, function(y) {
            return pt(y).dataIndex != null;
          }, !0);
          if (p) {
            var m = p.selected ? "unselect" : "select", g = pt(p);
            v._api.dispatchAction({
              type: m,
              dataType: g.dataType,
              dataIndexInside: g.dataIndex,
              seriesIndex: g.seriesIndex,
              isFromClick: !0
            });
          }
        });
      };
      function n(h) {
        h.clearColorPalette(), h.eachSeries(function(v) {
          v.clearColorPalette();
        });
      }
      function i(h) {
        var v = [], c = [], d = !1;
        if (h.eachComponent(function(y, _) {
          var S = _.get("zlevel") || 0, b = _.get("z") || 0, x = _.getZLevelKey();
          d = d || !!x, (y === "series" ? c : v).push({
            zlevel: S,
            z: b,
            idx: _.componentIndex,
            type: y,
            key: x
          });
        }), d) {
          var p = v.concat(c), m, g;
          as(p, function(y, _) {
            return y.zlevel === _.zlevel ? y.z - _.z : y.zlevel - _.zlevel;
          }), T(p, function(y) {
            var _ = h.getComponent(y.type, y.idx), S = y.zlevel, b = y.key;
            m != null && (S = Math.max(m, S)), b ? (S === m && b !== g && S++, g = b) : g && (S === m && S++, g = ""), m = S, _.setZLevel(S);
          });
        }
      }
      Jl = function(h, v, c, d, p) {
        i(v), ug(h, v, c, d, p), T(h._chartsViews, function(m) {
          m.__alive = !1;
        }), Xo(h, v, c, d, p), T(h._chartsViews, function(m) {
          m.__alive || m.remove(v, c);
        });
      }, ug = function(h, v, c, d, p, m) {
        T(m || h._componentsViews, function(g) {
          var y = g.__model;
          l(y, g), g.render(y, v, c, d), u(y, g), f(y, g);
        });
      }, Xo = function(h, v, c, d, p, m) {
        var g = h._scheduler;
        p = B(p || {}, {
          updatedSeries: v.getSeries()
        }), ce.trigger("series:beforeupdate", v, c, p);
        var y = !1;
        v.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          S.__alive = !0;
          var b = S.renderTask;
          g.updatePayload(b, d), l(_, S), m && m.get(_.uid) && b.dirty(), b.perform(g.getPerformArgs(b)) && (y = !0), S.group.silent = !!_.get("silent"), s(_, S), Vd(_);
        }), g.unfinished = y || g.unfinished, ce.trigger("series:layoutlabels", v, c, p), ce.trigger("series:transition", v, c, p), v.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          u(_, S), f(_, S);
        }), o(h, v), ce.trigger("series:afterupdate", v, c, p);
      }, he = function(h) {
        h[Xl] = !0, h.getZr().wakeUp();
      }, $n = function(h) {
        h[Wo] = (h[Wo] + 1) % 1e6;
      }, fg = function(h) {
        h[Xl] && (h.getZr().storage.traverse(function(v) {
          ba(v) || a(v);
        }), h[Xl] = !1);
      };
      function a(h) {
        for (var v = [], c = h.currentStates, d = 0; d < c.length; d++) {
          var p = c[d];
          p === "emphasis" || p === "blur" || p === "select" || v.push(p);
        }
        h.selected && h.states.select && v.push("select"), h.hoverState === Mu && h.states.emphasis ? v.push("emphasis") : h.hoverState === Cu && h.states.blur && v.push("blur"), h.useStates(v);
      }
      function o(h, v) {
        var c = h._zr;
        if (c.painter.type === "canvas") {
          var d = c.storage, p = 0;
          d.traverse(function(g) {
            g.isGroup || p++;
          });
          var m = p > X(v.get("hoverLayerThreshold"), X0.hoverLayerThreshold) && !et.node && !et.worker;
          (h._usingTHL || m) && (v.eachSeries(function(g) {
            if (!g.preventUsingHoverLayer) {
              var y = h._chartsMap[g.__viewId];
              y.__alive && y.eachRendered(function(_) {
                var S = _.states.emphasis;
                S && S.hoverLayer !== bv && (S.hoverLayer = m ? y0 : m0);
              });
            }
          }), h._usingTHL = m);
        }
      }
      function s(h, v) {
        var c = h.get("blendMode") || null;
        v.eachRendered(function(d) {
          d.isGroup || (d.style.blend = c);
        });
      }
      function u(h, v) {
        if (!h.preventAutoZ) {
          var c = Na(h);
          v.eachRendered(function(d) {
            return C0(d, c.z, c.zlevel), !0;
          });
        }
      }
      function l(h, v) {
        v.eachRendered(function(c) {
          if (!ba(c)) {
            var d = c.getTextContent(), p = c.getTextGuideLine();
            c.stateTransition && (c.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), p && p.stateTransition && (p.stateTransition = null), c.hasState() ? (c.prevStates = c.currentStates, c.clearStates()) : c.prevStates && (c.prevStates = null);
          }
        });
      }
      function f(h, v) {
        var c = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), p = c.get("duration"), m = p > 0 ? {
          duration: p,
          delay: c.get("delay"),
          easing: c.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        v.eachRendered(function(g) {
          if (g.states && g.states.emphasis) {
            if (ba(g))
              return;
            if (g instanceof yt && ST(g), g.__dirty) {
              var y = g.prevStates;
              y && g.useStates(y);
            }
            if (d) {
              g.stateTransition = m;
              var _ = g.getTextContent(), S = g.getTextGuideLine();
              _ && (_.stateTransition = m), S && (S.stateTransition = m);
            }
            g.__dirty && a(g);
          }
        });
      }
      lg = function(h) {
        return new /** @class */
        ((function(v) {
          k(c, v);
          function c() {
            return v !== null && v.apply(this, arguments) || this;
          }
          return c.prototype.getCoordinateSystems = function() {
            return h._coordSysMgr.getCoordinateSystems();
          }, c.prototype.getComponentByElement = function(d) {
            for (; d; ) {
              var p = d.__ecComponentInfo;
              if (p != null)
                return h._model.getComponent(p.mainType, p.index);
              d = d.parent;
            }
          }, c.prototype.enterEmphasis = function(d, p) {
            bi(d, p), he(h);
          }, c.prototype.leaveEmphasis = function(d, p) {
            xi(d, p), he(h);
          }, c.prototype.enterBlur = function(d) {
            fT(d), he(h);
          }, c.prototype.leaveBlur = function(d) {
            r0(d), he(h);
          }, c.prototype.enterSelect = function(d) {
            n0(d), he(h);
          }, c.prototype.leaveSelect = function(d) {
            i0(d), he(h);
          }, c.prototype.getModel = function() {
            return h.getModel();
          }, c.prototype.getViewOfComponentModel = function(d) {
            return h.getViewOfComponentModel(d);
          }, c.prototype.getViewOfSeriesModel = function(d) {
            return h.getViewOfSeriesModel(d);
          }, c.prototype.getECUpdateCycleVersion = function() {
            return h[Wo];
          }, c.prototype.usingTHL = function() {
            return h._usingTHL;
          }, c;
        })(Qy))(h);
      }, G_ = function(h) {
        function v(c, d) {
          for (var p = 0; p < c.length; p++) {
            var m = c[p];
            m[$l] = d;
          }
        }
        T(_h, function(c, d) {
          h._messageCenter.on(d, function(p) {
            if (hg[h.group] && h[$l] !== ag) {
              if (p && p.escapeConnect)
                return;
              var m = h.makeActionFromEvent(p), g = [];
              T(Ca, function(y) {
                y !== h && y.group === h.group && g.push(y);
              }), v(g, ag), T(g, function(y) {
                y[$l] !== HA && y.dispatchAction(m);
              }), v(g, VA);
            }
          });
        });
      };
    })(), t;
  })(Te)
), Kv = U_.prototype;
Kv.on = N_("on");
Kv.off = N_("off");
Kv.one = function(r, t, e) {
  var n = this;
  function i() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), n.off(r, i);
  }
  this.on.call(this, r, i, e);
};
var GA = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
var js = {}, _h = {}, Sh = {}, bh = [], xh = [], tu = [], W_ = {}, wh = {}, Ca = {}, hg = {}, UA = +/* @__PURE__ */ new Date() - 0, Qv = "_echarts_instance_";
function pO(r, t, e) {
  var n = !(e && e.ssr);
  if (n) {
    var i = WA(r);
    if (i)
      return i;
  }
  var a = new U_(r, t, e);
  return a.id = "ec_" + UA++, Ca[a.id] = a, n && Ey(r, Qv, a.id), G_(a), ce.trigger("afterinit", a), a;
}
function WA(r) {
  return Ca[Wx(r, Qv)];
}
function Y_(r, t) {
  W_[r] = t;
}
function Z_(r) {
  ot(xh, r) < 0 && xh.push(r);
}
function X_(r, t) {
  jv(bh, r, t, EA);
}
function YA(r) {
  Jv("afterinit", r);
}
function ZA(r) {
  Jv("afterupdate", r);
}
function Jv(r, t) {
  ce.on(r, t);
}
function tr(r, t, e) {
  var n, i, a, o, s;
  Q(t) && (e = t, t = ""), Z(r) ? (n = r.type, i = r.event, o = r.update, s = r.publishNonRefinedEvent, e || (e = r.action), a = r.refineEvent) : (n = r, i = t);
  function u(f) {
    return f.toLowerCase();
  }
  i = u(i || n);
  var l = a ? u(n) : i;
  js[n] || (qe(ig.test(n) && ig.test(i)), a && qe(i !== n), js[n] = {
    actionType: n,
    refinedEventType: i,
    nonRefinedEventType: l,
    update: o,
    action: e,
    refineEvent: a
  }, Sh[i] = 1, a && s && (Sh[l] = 1), _h[l] = n);
}
function XA(r, t) {
  Gv.register(r, t);
}
function $A(r, t) {
  jv(tu, r, t, O_, "layout");
}
function On(r, t) {
  jv(tu, r, t, k_, "visual");
}
var vg = [];
function jv(r, t, e, n, i, a) {
  if ((Q(t) || Z(t)) && (e = t, t = n), !(ot(vg, e) >= 0)) {
    vg.push(e);
    var o = S_.wrapStageHandler(e, i);
    o.__prio = t, o.__raw = e, r.push(o);
  }
}
function $_(r, t) {
  wh[r] = t;
}
function qA(r, t, e) {
  var n = qD("registerMap");
  n && n(r, t, e);
}
var KA = jM;
On(qv, ID);
On(zu, LD);
On(zu, PD);
On(qv, UD);
On(zu, WD);
On(B_, MA);
Z_(J0);
X_(LA, RM);
$_("default", RD);
tr({
  type: wn,
  event: wn,
  update: wn
}, Nt);
tr({
  type: cs,
  event: cs,
  update: cs
}, Nt);
tr({
  type: Hs,
  event: dv,
  update: Hs,
  action: Nt,
  refineEvent: tc,
  publishNonRefinedEvent: !0
});
tr({
  type: Jf,
  event: dv,
  update: Jf,
  action: Nt,
  refineEvent: tc,
  publishNonRefinedEvent: !0
});
tr({
  type: Vs,
  event: dv,
  update: Vs,
  action: Nt,
  refineEvent: tc,
  publishNonRefinedEvent: !0
});
function tc(r, t, e, n) {
  return {
    eventContent: {
      selected: pT(e),
      isFromClick: t.isFromClick || !1
    }
  };
}
Y_("default", {});
Y_("dark", T_);
function Zi(r) {
  return r == null ? 0 : r.length || 1;
}
function cg(r) {
  return r;
}
var ec = (
  /** @class */
  (function() {
    function r(t, e, n, i, a, o) {
      this._old = t, this._new = e, this._oldKeyGetter = n || cg, this._newKeyGetter = i || cg, this.context = a, this._diffModeMultiple = o === "multiple";
    }
    return r.prototype.add = function(t) {
      return this._add = t, this;
    }, r.prototype.update = function(t) {
      return this._update = t, this;
    }, r.prototype.updateManyToOne = function(t) {
      return this._updateManyToOne = t, this;
    }, r.prototype.updateOneToMany = function(t) {
      return this._updateOneToMany = t, this;
    }, r.prototype.updateManyToMany = function(t) {
      return this._updateManyToMany = t, this;
    }, r.prototype.remove = function(t) {
      return this._remove = t, this;
    }, r.prototype.execute = function() {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }, r.prototype._executeOneToOne = function() {
      var t = this._old, e = this._new, n = {}, i = new Array(t.length), a = new Array(e.length);
      this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(e, n, a, "_newKeyGetter");
      for (var o = 0; o < t.length; o++) {
        var s = i[o], u = n[s], l = Zi(u);
        if (l > 1) {
          var f = u.shift();
          u.length === 1 && (n[s] = u[0]), this._update && this._update(f, o);
        } else l === 1 ? (n[s] = null, this._update && this._update(u, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, n);
    }, r.prototype._executeMultiple = function() {
      var t = this._old, e = this._new, n = {}, i = {}, a = [], o = [];
      this._initIndexMap(t, n, a, "_oldKeyGetter"), this._initIndexMap(e, i, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var u = a[s], l = n[u], f = i[u], h = Zi(l), v = Zi(f);
        if (h > 1 && v === 1)
          this._updateManyToOne && this._updateManyToOne(f, l), i[u] = null;
        else if (h === 1 && v > 1)
          this._updateOneToMany && this._updateOneToMany(f, l), i[u] = null;
        else if (h === 1 && v === 1)
          this._update && this._update(f, l), i[u] = null;
        else if (h > 1 && v > 1)
          this._updateManyToMany && this._updateManyToMany(f, l), i[u] = null;
        else if (h > 1)
          for (var c = 0; c < h; c++)
            this._remove && this._remove(l[c]);
        else
          this._remove && this._remove(l);
      }
      this._performRestAdd(o, i);
    }, r.prototype._performRestAdd = function(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n], a = e[i], o = Zi(a);
        if (o > 1)
          for (var s = 0; s < o; s++)
            this._add && this._add(a[s]);
        else o === 1 && this._add && this._add(a);
        e[i] = null;
      }
    }, r.prototype._initIndexMap = function(t, e, n, i) {
      for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var s = "_ec_" + this[i](t[o], o);
        if (a || (n[o] = s), !!e) {
          var u = e[s], l = Zi(u);
          l === 0 ? (e[s] = o, a && n.push(s)) : l === 1 ? e[s] = [u, o] : u.push(o);
        }
      }
    }, r;
  })()
), QA = (
  /** @class */
  (function() {
    function r(t, e) {
      this._encode = t, this._schema = e;
    }
    return r.prototype.get = function() {
      return {
        // Do not generate full dimension name until fist used.
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode
      };
    }, r.prototype._getFullDimensionNames = function() {
      return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
    }, r;
  })()
);
function JA(r, t) {
  var e = {}, n = e.encode = {}, i = Y(), a = [], o = [], s = {};
  T(r.dimensions, function(v) {
    var c = r.getDimensionInfo(v), d = c.coordDim;
    if (d) {
      var p = c.coordDimIndex;
      jl(n, d)[p] = v, c.isExtraCoord || (i.set(d, 1), tI(c.type) && (a[0] = v), jl(s, d)[p] = r.getDimensionIndex(c.name)), c.defaultTooltip && o.push(v);
    }
    qy.each(function(m, g) {
      var y = jl(n, g), _ = c.otherDims[g];
      _ != null && _ !== !1 && (y[_] = c.name);
    });
  });
  var u = [], l = {};
  i.each(function(v, c) {
    var d = n[c];
    l[c] = d[0], u = u.concat(d);
  }), e.dataDimsOnCoord = u, e.dataDimIndicesOnCoord = U(u, function(v) {
    return r.getDimensionInfo(v).storeDimIndex;
  }), e.encodeFirstDimNotExtra = l;
  var f = n.label;
  f && f.length && (a = f.slice());
  var h = n.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, e.userOutput = new QA(s, t), e;
}
function jl(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function jA(r) {
  return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
}
function tI(r) {
  return !(r === "ordinal" || r === "time");
}
var xs = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.otherDims = {}, t != null && B(this, t);
    }
    return r;
  })()
), eI = vt(), rI = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, q_ = (
  /** @class */
  (function() {
    function r(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return r.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, r.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = Q_(this.source)));
    }, r.prototype.getSourceDimensionIndex = function(t) {
      return X(this._dimNameMap.get(t), -1);
    }, r.prototype.getSourceDimension = function(t) {
      var e = this.source.dimensionsDefine;
      if (e)
        return e[t];
    }, r.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, e = e_(this.source), n = !J_(t), i = "", a = [], o = 0, s = 0; o < t; o++) {
        var u = void 0, l = void 0, f = void 0, h = this.dimensions[s];
        if (h && h.storeDimIndex === o)
          u = e ? h.name : null, l = h.type, f = h.ordinalMeta, s++;
        else {
          var v = this.getSourceDimension(o);
          v && (u = e ? v.name : null, l = v.type);
        }
        a.push({
          property: u,
          type: l,
          ordinalMeta: f
        }), e && u != null && (!h || !h.isCalculationCoord) && (i += n ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), i += "$", i += rI[l] || "f", f && (i += f.uid), i += "$";
      }
      var c = this.source, d = [c.seriesLayoutBy, c.startIndex, i].join("$$");
      return {
        dimensions: a,
        hash: d
      };
    }, r.prototype.makeOutputDimensionNames = function() {
      for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
        var i = void 0, a = this.dimensions[n];
        if (a && a.storeDimIndex === e)
          a.isCalculationCoord || (i = a.name), n++;
        else {
          var o = this.getSourceDimension(e);
          o && (i = o.name);
        }
        t.push(i);
      }
      return t;
    }, r.prototype.appendCalculationDimension = function(t) {
      this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
    }, r;
  })()
);
function K_(r) {
  return r instanceof q_;
}
function rc(r) {
  for (var t = Y(), e = 0; e < (r || []).length; e++) {
    var n = r[e], i = Z(n) ? n.name : n;
    i != null && t.get(i) == null && t.set(i, e);
  }
  return t;
}
function Q_(r) {
  var t = eI(r);
  return t.dimNameMap || (t.dimNameMap = rc(r.dimensionsDefine));
}
function J_(r) {
  return r > 30;
}
var Xi = Z, yr = U, nI = typeof Int32Array > "u" ? Array : Int32Array, iI = "e\0\0", dg = -1, aI = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], oI = ["_approximateExtent"], pg, $o, $i, qi, tf, Ki, ef, sI = (
  /** @class */
  (function() {
    function r(t, e) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var n, i = !1;
      K_(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
      for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < n.length; f++) {
        var h = n[f], v = V(h) ? new xs({
          name: h
        }) : h instanceof xs ? h : new xs(h), c = v.name;
        v.type = v.type || "float", v.coordDim || (v.coordDim = c, v.coordDimIndex = 0);
        var d = v.otherDims = v.otherDims || {};
        o.push(c), a[c] = v, l[c] != null && (u = !0), v.createInvertedIndices && (s[c] = []), i && (v.storeDimIndex = f), d.itemName === 0 && (this._nameDimIdx = v.storeDimIndex), d.itemId === 0 && (this._idDimIdx = v.storeDimIndex);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
        var p = this._dimIdxToName = Y();
        T(o, function(m) {
          p.set(a[m].storeDimIndex, m);
        });
      }
    }
    return r.prototype.getDimension = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e == null)
        return t;
      if (e = t, !this._dimOmitted)
        return this.dimensions[e];
      var n = this._dimIdxToName.get(e);
      if (n != null)
        return n;
      var i = this._schema.getSourceDimension(e);
      if (i)
        return i.name;
    }, r.prototype.getDimensionIndex = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e != null)
        return e;
      if (t == null)
        return -1;
      var n = this._getDimInfo(t);
      return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
    }, r.prototype._recognizeDimIndex = function(t) {
      if (wt(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        return +t;
    }, r.prototype._getStoreDimIndex = function(t) {
      var e = this.getDimensionIndex(t);
      return e;
    }, r.prototype.getDimensionInfo = function(t) {
      return this._getDimInfo(this.getDimension(t));
    }, r.prototype._initGetDimensionInfo = function(t) {
      var e = this._dimInfos;
      this._getDimInfo = t ? function(n) {
        return e.hasOwnProperty(n) ? e[n] : void 0;
      } : function(n) {
        return e[n];
      };
    }, r.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    }, r.prototype.mapDimension = function(t, e) {
      var n = this._dimSummary;
      if (e == null)
        return n.encodeFirstDimNotExtra[t];
      var i = n.encode[t];
      return i ? i[e] : null;
    }, r.prototype.mapDimensionsAll = function(t) {
      var e = this._dimSummary, n = e.encode[t];
      return (n || []).slice();
    }, r.prototype.getStore = function() {
      return this._store;
    }, r.prototype.initData = function(t, e, n) {
      var i = this, a;
      if (t instanceof hh && (a = t), !a) {
        var o = this.dimensions, s = Zv(t) || ne(t) ? new r_(t, o.length) : t;
        a = new hh();
        var u = yr(o, function(l) {
          return {
            type: i._dimInfos[l].type,
            property: l
          };
        });
        a.initData(s, u, n);
      }
      this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = JA(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, r.prototype.appendData = function(t) {
      var e = this._store.appendData(t);
      this._doInit(e[0], e[1]);
    }, r.prototype.appendValues = function(t, e) {
      var n = this._store.appendValues(t, e && e.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), e)
        for (var s = i; s < a; s++) {
          var u = s - i;
          this._nameList[s] = e[u], o && ef(this, s);
        }
    }, r.prototype._updateOrdinalMeta = function() {
      for (var t = this._store, e = this.dimensions, n = 0; n < e.length; n++) {
        var i = this._dimInfos[e[n]];
        i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
      }
    }, r.prototype._shouldMakeIdFromName = function() {
      var t = this._store.getProvider();
      return this._idDimIdx == null && t.getSource().sourceFormat !== Pr && !t.fillStorage;
    }, r.prototype._doInit = function(t, e) {
      if (!(t >= e)) {
        var n = this._store, i = n.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, u = s === fe;
        if (u && !i.pure)
          for (var l = [], f = t; f < e; f++) {
            var h = i.getItem(f, l);
            if (!this.hasItemOption && Lx(h) && (this.hasItemOption = !0), h) {
              var v = h.name;
              a[f] == null && v != null && (a[f] = Ze(v, null));
              var c = h.id;
              o[f] == null && c != null && (o[f] = Ze(c, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < e; f++)
            ef(this, f);
        pg(this);
      }
    }, r.prototype.getApproximateExtent = function(t, e) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t), e);
    }, r.prototype.setApproximateExtent = function(t, e) {
      e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, r.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, r.prototype.setCalculationInfo = function(t, e) {
      Xi(t) ? B(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, r.prototype.getName = function(t) {
      var e = this.getRawIndex(t), n = this._nameList[e];
      return n == null && this._nameDimIdx != null && (n = $i(this, this._nameDimIdx, e)), n == null && (n = ""), n;
    }, r.prototype._getCategory = function(t, e) {
      var n = this._store.get(t, e), i = this._store.getOrdinalMeta(t);
      return i ? i.categories[n] : n;
    }, r.prototype.getId = function(t) {
      return $o(this, this.getRawIndex(t));
    }, r.prototype.count = function() {
      return this._store.count();
    }, r.prototype.get = function(t, e) {
      var n = this._store, i = this._dimInfos[t];
      if (i)
        return n.get(i.storeDimIndex, e);
    }, r.prototype.getByRawIndex = function(t, e) {
      var n = this._store, i = this._dimInfos[t];
      if (i)
        return n.getByRawIndex(i.storeDimIndex, e);
    }, r.prototype.getIndices = function() {
      return this._store.getIndices();
    }, r.prototype.getDataExtent = function(t) {
      return this._store.getDataExtent(this._getStoreDimIndex(t), null);
    }, r.prototype.getSum = function(t) {
      return this._store.getSum(this._getStoreDimIndex(t));
    }, r.prototype.getMedian = function(t) {
      return this._store.getMedian(this._getStoreDimIndex(t));
    }, r.prototype.getValues = function(t, e) {
      var n = this, i = this._store;
      return z(t) ? i.getValues(yr(t, function(a) {
        return n._getStoreDimIndex(a);
      }), e) : i.getValues(t);
    }, r.prototype.hasValue = function(t) {
      for (var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length; n < i; n++)
        if (isNaN(this._store.get(e[n], t)))
          return !1;
      return !0;
    }, r.prototype.indexOfName = function(t) {
      for (var e = 0, n = this._store.count(); e < n; e++)
        if (this.getName(e) === t)
          return e;
      return -1;
    }, r.prototype.getRawIndex = function(t) {
      return this._store.getRawIndex(t);
    }, r.prototype.indexOfRawIndex = function(t) {
      return this._store.indexOfRawIndex(t);
    }, r.prototype.rawIndexOf = function(t, e) {
      var n = t && this._invertedIndicesMap[t], i = n && n[e];
      return i == null || isNaN(i) ? dg : i;
    }, r.prototype.each = function(t, e, n) {
      Q(t) && (n = e, e = t, t = []);
      var i = n || this, a = yr(qi(t), this._getStoreDimIndex, this);
      this._store.each(a, i ? K(e, i) : e);
    }, r.prototype.filterSelf = function(t, e, n) {
      Q(t) && (n = e, e = t, t = []);
      var i = n || this, a = yr(qi(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, i ? K(e, i) : e), this;
    }, r.prototype.selectRange = function(t) {
      var e = this, n = {}, i = xt(t);
      return T(i, function(a) {
        var o = e._getStoreDimIndex(a);
        n[o] = t[a];
      }), this._store = this._store.selectRange(n), this;
    }, r.prototype.mapArray = function(t, e, n) {
      Q(t) && (n = e, e = t, t = []), n = n || this;
      var i = [];
      return this.each(t, function() {
        i.push(e && e.apply(this, arguments));
      }, n), i;
    }, r.prototype.map = function(t, e, n, i) {
      var a = n || i || this, o = yr(qi(t), this._getStoreDimIndex, this), s = Ki(this);
      return s._store = this._store.map(o, a ? K(e, a) : e), s;
    }, r.prototype.modify = function(t, e, n, i) {
      var a = n || i || this, o = yr(qi(t), this._getStoreDimIndex, this);
      this._store.modify(o, a ? K(e, a) : e);
    }, r.prototype.downSample = function(t, e, n, i) {
      var a = Ki(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), e, n, i), a;
    }, r.prototype.minmaxDownSample = function(t, e) {
      var n = Ki(this);
      return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(t), e), n;
    }, r.prototype.lttbDownSample = function(t, e) {
      var n = Ki(this);
      return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), n;
    }, r.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, r.prototype.getItemModel = function(t) {
      var e = this.hostModel, n = this.getRawDataItem(t);
      return new Tt(n, e, e && e.ecModel);
    }, r.prototype.diff = function(t) {
      var e = this;
      return new ec(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
        return $o(t, n);
      }, function(n) {
        return $o(e, n);
      });
    }, r.prototype.getVisual = function(t) {
      var e = this._visual;
      return e && e[t];
    }, r.prototype.setVisual = function(t, e) {
      this._visual = this._visual || {}, Xi(t) ? B(this._visual, t) : this._visual[t] = e;
    }, r.prototype.getItemVisual = function(t, e) {
      var n = this._itemVisuals[t], i = n && n[e];
      return i ?? this.getVisual(e);
    }, r.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, r.prototype.ensureUniqueItemVisual = function(t, e) {
      var n = this._itemVisuals, i = n[t];
      i || (i = n[t] = {});
      var a = i[e];
      return a == null && (a = this.getVisual(e), z(a) ? a = a.slice() : Xi(a) && (a = B({}, a)), i[e] = a), a;
    }, r.prototype.setItemVisual = function(t, e, n) {
      var i = this._itemVisuals[t] || {};
      this._itemVisuals[t] = i, Xi(e) ? B(i, e) : i[e] = n;
    }, r.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, r.prototype.setLayout = function(t, e) {
      Xi(t) ? B(this._layout, t) : this._layout[t] = e;
    }, r.prototype.getLayout = function(t) {
      return this._layout[t];
    }, r.prototype.getItemLayout = function(t) {
      return this._itemLayouts[t];
    }, r.prototype.setItemLayout = function(t, e, n) {
      this._itemLayouts[t] = n ? B(this._itemLayouts[t] || {}, e) : e;
    }, r.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, r.prototype.setItemGraphicEl = function(t, e) {
      var n = this.hostModel && this.hostModel.seriesIndex;
      Jw(n, this.dataType, t, e), this._graphicEls[t] = e;
    }, r.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, r.prototype.eachItemGraphicEl = function(t, e) {
      T(this._graphicEls, function(n, i) {
        n && t && t.call(e, n, i);
      });
    }, r.prototype.cloneShallow = function(t) {
      return t || (t = new r(this._schema ? this._schema : yr(this.dimensions, this._getDimInfo, this), this.hostModel)), tf(t, this), t._store = this._store, t;
    }, r.prototype.wrapMethod = function(t, e) {
      var n = this[t];
      Q(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var i = n.apply(this, arguments);
        return e.apply(this, [i].concat(Kh(arguments)));
      });
    }, r.internalField = (function() {
      pg = function(t) {
        var e = t._invertedIndicesMap;
        T(e, function(n, i) {
          var a = t._dimInfos[i], o = a.ordinalMeta, s = t._store;
          if (o) {
            n = e[i] = new nI(o.categories.length);
            for (var u = 0; u < n.length; u++)
              n[u] = dg;
            for (var u = 0; u < s.count(); u++)
              n[s.get(a.storeDimIndex, u)] = u;
          }
        });
      }, $i = function(t, e, n) {
        return Ze(t._getCategory(e, n), null);
      }, $o = function(t, e) {
        var n = t._idList[e];
        return n == null && t._idDimIdx != null && (n = $i(t, t._idDimIdx, e)), n == null && (n = iI + e), n;
      }, qi = function(t) {
        return z(t) || (t = t != null ? [t] : []), t;
      }, Ki = function(t) {
        var e = new r(t._schema ? t._schema : yr(t.dimensions, t._getDimInfo, t), t.hostModel);
        return tf(e, t), e;
      }, tf = function(t, e) {
        T(aI.concat(e.__wrappedMethods || []), function(n) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }), t.__wrappedMethods = e.__wrappedMethods, T(oI, function(n) {
          t[n] = tt(e[n]);
        }), t._calculationInfo = B({}, e._calculationInfo);
      }, ef = function(t, e) {
        var n = t._nameList, i = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = n[e], u = i[e];
        if (s == null && a != null && (n[e] = s = $i(t, a, e)), u == null && o != null && (i[e] = u = $i(t, o, e)), u == null && s != null) {
          var l = t._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
          u = s, f > 1 && (u += "__ec__" + f), i[e] = u;
        }
      };
    })(), r;
  })()
);
function uI(r, t) {
  Zv(r) || (r = j0(r)), t = t || {};
  var e = t.coordDimensions || [], n = t.dimensionsDefine || r.dimensionsDefine || [], i = Y(), a = [], o = lI(r, e, n, t.dimensionsCount), s = t.canOmitUnusedDimensions && J_(o), u = n === r.dimensionsDefine, l = u ? Q_(r) : rc(n), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var h = Y(f), v = new s_(o), c = 0; c < v.length; c++)
    v[c] = -1;
  function d(C) {
    var M = v[C];
    if (M < 0) {
      var A = n[C], L = Z(A) ? A : {
        name: A
      }, I = new xs(), P = L.name;
      P != null && l.get(P) != null && (I.name = I.displayName = P), L.type != null && (I.type = L.type), L.displayName != null && (I.displayName = L.displayName);
      var E = a.length;
      return v[C] = E, I.storeDimIndex = C, a.push(I), I;
    }
    return a[M];
  }
  if (!s)
    for (var c = 0; c < o; c++)
      d(c);
  h.each(function(C, M) {
    var A = Xt(C).slice();
    if (A.length === 1 && !V(A[0]) && A[0] < 0) {
      h.set(M, !1);
      return;
    }
    var L = h.set(M, []);
    T(A, function(I, P) {
      var E = V(I) ? l.get(I) : I;
      E != null && E < o && (L[P] = E, m(d(E), M, P));
    });
  });
  var p = 0;
  T(e, function(C) {
    var M, A, L, I;
    if (V(C))
      M = C, I = {};
    else {
      I = C, M = I.name;
      var P = I.ordinalMeta;
      I.ordinalMeta = null, I = B({}, I), I.ordinalMeta = P, A = I.dimsDef, L = I.otherDims, I.name = I.coordDim = I.coordDimIndex = I.dimsDef = I.otherDims = null;
    }
    var E = h.get(M);
    if (E !== !1) {
      if (E = Xt(E), !E.length)
        for (var R = 0; R < (A && A.length || 1); R++) {
          for (; p < o && d(p).coordDim != null; )
            p++;
          p < o && E.push(p++);
        }
      T(E, function(F, G) {
        var W = d(F);
        if (u && I.type != null && (W.type = I.type), m(ut(W, I), M, G), W.name == null && A) {
          var J = A[G];
          !Z(J) && (J = {
            name: J
          }), W.name = W.displayName = J.name, W.defaultTooltip = J.defaultTooltip;
        }
        L && ut(W.otherDims, L);
      });
    }
  });
  function m(C, M, A) {
    qy.get(M) != null ? C.otherDims[M] = A : (C.coordDim = M, C.coordDimIndex = A, i.set(M, !0));
  }
  var g = t.generateCoord, y = t.generateCoordCount, _ = y != null;
  y = g ? y || 1 : 0;
  var S = g || "value";
  function b(C) {
    C.name == null && (C.name = C.coordDim);
  }
  if (s)
    T(a, function(C) {
      b(C);
    }), a.sort(function(C, M) {
      return C.storeDimIndex - M.storeDimIndex;
    });
  else
    for (var x = 0; x < o; x++) {
      var w = d(x), D = w.coordDim;
      D == null && (w.coordDim = fI(S, i, _), w.coordDimIndex = 0, (!g || y <= 0) && (w.isExtraCoord = !0), y--), b(w), w.type == null && (K0(r, x) === oe.Must || w.isExtraCoord && (w.otherDims.itemName != null || w.otherDims.seriesName != null)) && (w.type = "ordinal");
    }
  return uv(a, function(C) {
    return C.name;
  }, function(C, M) {
    M > 0 && (C.name = C.name + (M - 1));
  }), new q_({
    source: r,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function lI(r, t, e, n) {
  var i = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, n || 0);
  return T(t, function(a) {
    var o;
    Z(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
  }), i;
}
function fI(r, t, e) {
  if (e || t.hasKey(r)) {
    for (var n = 0; t.hasKey(r + n); )
      n++;
    r += n;
  }
  return t.set(r, !0), r;
}
var hI = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.coordSysDims = [], this.axisMap = Y(), this.categoryAxisMap = Y(), this.coordSysName = t;
    }
    return r;
  })()
);
function vI(r) {
  var t = r.get("coordinateSystem"), e = new hI(t), n = cI[t];
  if (n)
    return n(r, e, e.axisMap, e.categoryAxisMap), e;
}
var cI = {
  cartesian2d: function(r, t, e, n) {
    var i = r.getReferringComponents("xAxis", Vt).models[0], a = r.getReferringComponents("yAxis", Vt).models[0];
    t.coordSysDims = ["x", "y"], e.set("x", i), e.set("y", a), qn(i) && (n.set("x", i), t.firstCategoryDimIndex = 0), qn(a) && (n.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  singleAxis: function(r, t, e, n) {
    var i = r.getReferringComponents("singleAxis", Vt).models[0];
    t.coordSysDims = ["single"], e.set("single", i), qn(i) && (n.set("single", i), t.firstCategoryDimIndex = 0);
  },
  polar: function(r, t, e, n) {
    var i = r.getReferringComponents("polar", Vt).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
    t.coordSysDims = ["radius", "angle"], e.set("radius", a), e.set("angle", o), qn(a) && (n.set("radius", a), t.firstCategoryDimIndex = 0), qn(o) && (n.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  geo: function(r, t, e, n) {
    t.coordSysDims = ["lng", "lat"];
  },
  parallel: function(r, t, e, n) {
    var i = r.ecModel, a = i.getComponent("parallel", r.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
    T(a.parallelAxisIndex, function(s, u) {
      var l = i.getComponent("parallelAxis", s), f = o[u];
      e.set(f, l), qn(l) && (n.set(f, l), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = u));
    });
  },
  matrix: function(r, t, e, n) {
    var i = r.getReferringComponents("matrix", Vt).models[0];
    t.coordSysDims = ["x", "y"];
    var a = i.getDimensionModel("x"), o = i.getDimensionModel("y");
    e.set("x", a), e.set("y", o), n.set("x", a), n.set("y", o);
  }
};
function qn(r) {
  return r.get("type") === "category";
}
function dI(r, t, e) {
  e = e || {};
  var n = e.byIndex, i = e.stackedCoordDimension, a, o, s;
  pI(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
  var u = !!(r && r.get("stack")), l, f, h, v, c = !0;
  function d(S) {
    return S.type !== "ordinal" && S.type !== "time";
  }
  if (T(a, function(S, b) {
    V(S) && (a[b] = S = {
      name: S
    }), d(S) || (c = !1);
  }), T(a, function(S, b) {
    u && !S.isExtraCoord && (!n && !l && S.ordinalMeta && (l = S), !f && d(S) && (!c || S.coordDim !== "x" && S.coordDim !== "angle") && (!i || i === S.coordDim) && (f = S));
  }), f && !n && !l && (n = !0), f) {
    h = "__\0ecstackresult_" + r.id, v = "__\0ecstackedover_" + r.id, l && (l.createInvertedIndices = !0);
    var p = f.coordDim, m = f.type, g = 0;
    T(a, function(S) {
      S.coordDim === p && g++;
    });
    var y = {
      name: h,
      coordDim: p,
      coordDimIndex: g,
      type: m,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length
    }, _ = {
      name: v,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: v,
      coordDimIndex: g + 1,
      type: m,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length + 1
    };
    o ? (s && (y.storeDimIndex = s.ensureCalculationDimension(v, m), _.storeDimIndex = s.ensureCalculationDimension(h, m)), o.appendCalculationDimension(y), o.appendCalculationDimension(_)) : (a.push(y), a.push(_));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: n,
    stackedOverDimension: v,
    stackResultDimension: h
  };
}
function pI(r) {
  return !K_(r.schema);
}
function Ga(r, t) {
  return !!t && t === r.getCalculationInfo("stackedDimension");
}
function gI(r, t) {
  return Ga(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
}
function mI(r, t) {
  var e = r.get("coordinateSystem"), n = Gv.get(e), i;
  return t && t.coordSysDims && (i = U(t.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = t.axisMap.get(a);
    if (s) {
      var u = s.get("type");
      o.type = jA(u);
    }
    return o;
  })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
}
function yI(r, t, e) {
  var n, i;
  return e && T(r, function(a, o) {
    var s = a.coordDim, u = e.categoryAxisMap.get(s);
    u && (n == null && (n = o), a.ordinalMeta = u.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
  }), !i && n != null && (r[n].otherDims.itemName = 0), n;
}
function _I(r, t, e) {
  e = e || {};
  var n = t.getSourceManager(), i, a = !1;
  i = n.getSource(), a = i.sourceFormat === fe;
  var o = vI(t), s = mI(t, o), u = e.useEncodeDefaulter, l = Q(u) ? u : u ? ht(uM, s, t) : null, f = {
    coordDimensions: s,
    generateCoord: e.generateCoord,
    encodeDefine: t.getEncode(),
    encodeDefaulter: l,
    canOmitUnusedDimensions: !a
  }, h = uI(i, f), v = yI(h.dimensions, e.createInvertedIndices, o), c = a ? null : n.getSharedDataStore(h), d = dI(t, {
    schema: h,
    store: c
  }), p = new sI(h, t);
  p.setCalculationInfo(d);
  var m = v != null && SI(i) ? function(g, y, _, S) {
    return S === v ? _ : this.defaultDimValueGetter(g, y, _, S);
  } : null;
  return p.hasItemOption = !1, p.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? i : c,
    null,
    m
  ), p;
}
function SI(r) {
  if (r.sourceFormat === fe) {
    var t = bI(r.data || []);
    return !z(ja(t));
  }
}
function bI(r) {
  for (var t = 0; t < r.length && r[t] == null; )
    t++;
  return r[t];
}
var Oe = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.isBlank = function() {
      return this._isBlank;
    }, r.prototype.setBlank = function(t) {
      this._isBlank = t;
    }, r;
  })()
);
xu(Oe);
var xI = 0, Th = (
  /** @class */
  (function() {
    function r(t) {
      this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++xI, this._onCollect = t.onCollect;
    }
    return r.createByAxisModel = function(t) {
      var e = t.option, n = e.data, i = n && U(n, wI);
      return new r({
        categories: i,
        needCollect: !i,
        // deduplication is default in axis.
        deduplication: e.dedplication !== !1
      });
    }, r.prototype.getOrdinal = function(t) {
      return this._getOrCreateMap().get(t);
    }, r.prototype.parseAndCollect = function(t) {
      var e, n = this._needCollect;
      if (!V(t) && !n)
        return t;
      if (n && !this._deduplication)
        return e = this.categories.length, this.categories[e] = t, this._onCollect && this._onCollect(t, e), e;
      var i = this._getOrCreateMap();
      return e = i.get(t), e == null && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e), this._onCollect && this._onCollect(t, e)) : e = NaN), e;
    }, r.prototype._getOrCreateMap = function() {
      return this._map || (this._map = Y(this.categories));
    }, r;
  })()
);
function wI(r) {
  return Z(r) && r.value != null ? r.value : r + "";
}
var xe = 0, Ua = 1, TI = {
  needTransform: 1,
  normalize: 1,
  scale: 1,
  transformIn: 1,
  transformOut: 1,
  contain: 1,
  getExtent: 1,
  getExtentUnsafe: 1,
  setExtent: 1,
  setExtent2: 1,
  getFilter: 1,
  sanitize: 1,
  getDefaultStartValue: 1,
  freeze: 1
}, CI = xt(TI), eu = 2, j_ = 3;
function nc(r, t, e) {
  var n;
  return r = r || {}, DI(r, e), {
    brk: n,
    mapper: r
  };
}
function t1(r, t) {
  T(CI, function(e) {
    r[e] = t[e];
  });
}
function e1(r, t) {
  r.freeze = Nt;
}
function Wa(r) {
  return r.getExtentUnsafe(xe, eu);
}
function ru(r, t) {
  return r.getExtentUnsafe(Ua, t) || r.getExtentUnsafe(xe, t);
}
function MI(r) {
  var t = ru(r, j_);
  return t[1] - t[0];
}
function Hu(r) {
  var t = r.getExtentUnsafe(xe, j_);
  return t[1] - t[0];
}
function DI(r, t) {
  var e = r || {}, n = [];
  return e._extents = n, n[xe] = t ? t.slice() : Jt(), B(e, AI), e;
}
var AI = {
  needTransform: function() {
    return !1;
  },
  normalize: function(r) {
    var t = this._extents[Ua] || this._extents[xe];
    return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
  },
  scale: function(r) {
    var t = this._extents[Ua] || this._extents[xe];
    return r * (t[1] - t[0]) + t[0];
  },
  transformIn: function(r) {
    return r;
  },
  transformOut: function(r) {
    return r;
  },
  contain: function(r) {
    var t = ru(this, null);
    return r >= t[0] && r <= t[1];
  },
  getExtent: function() {
    return this._extents[xe].slice();
  },
  getExtentUnsafe: function(r) {
    return this._extents[r];
  },
  setExtent: function(r, t) {
    gg(this._extents, xe, r, t);
  },
  setExtent2: function(r, t, e) {
    var n = this._extents;
    n[r] || (n[r] = n[xe].slice()), gg(n, r, t, e);
  },
  freeze: function() {
  }
};
function gg(r, t, e, n) {
  Si(e, n) && (r[t][0] = e, r[t][1] = n);
}
function r1(r) {
  return nu(r) || Ti(r);
}
function nu(r) {
  return r.type === "interval";
}
function fo(r) {
  return r.type === "time";
}
function Ti(r) {
  return r.type === "log";
}
function Ce(r) {
  return r.type === "ordinal";
}
function II(r) {
  var t = nv(r), e = Ei(10, t), n = lr(r / e);
  return n ? n === 2 ? n = 3 : n === 3 ? n = 5 : n *= 2 : n = 1, st(n * e, -t);
}
function In(r) {
  return Mr(r) + 2;
}
function qo(r, t) {
  return La(r) / La(t);
}
function rf(r, t, e) {
  var n = e && e.lookup;
  if (n) {
    for (var i = 0; i < n.from.length; i++)
      if (r === n.from[i])
        return n.to[i];
  }
  return Ei(t, r);
}
function n1(r, t, e) {
  var n = r.slice();
  if (n[0] === n[1]) {
    var i = e && e.ctnShp;
    if (n[0] !== 0) {
      var a = Pt(n[0]);
      t[1] || (n[1] += a / 2), n[0] -= a / 2;
    } else
      i && (n[0] = -1), n[1] = 1;
  }
  return (!fr(n[0]) || !fr(n[1])) && (n[0] = 0, n[1] = 1), n[1] < n[0] && n.reverse(), n;
}
function LI(r, t) {
  return [r[0] !== t[0], r[1] !== t[1]];
}
function ic(r, t) {
  return r = r || t, lr(gt(r, 1));
}
function i1(r, t, e) {
  var n = Wa(r), i = n[0], a = r.count(), o = Math.max((t || 0) + 1, 1);
  i !== 0 && o > 1 && a / o > 2 && (i = Math.round(Math.ceil(i / o) * o)), i !== n[0] && u(n[0], !0, !0);
  for (var s = i; s <= n[1]; s += o)
    u(s, !1, s === n[0] || s === n[1]);
  s - o !== n[1] && u(n[1], !0, !0);
  function u(l, f, h) {
    e({
      value: l,
      offInterval: f
    }, h);
  }
}
var a1 = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e) {
      var n = r.call(this) || this;
      n.type = "ordinal", n.parse = t.parse, t1(n, t.decoratedMethods);
      var i = e.ordinalMeta;
      i || (i = new Th({})), z(i) && (i = new Th({
        categories: U(i, function(o) {
          return Z(o) ? o.value : o;
        })
      })), n._ordinalMeta = i;
      var a = nc(
        null,
        null,
        // Do not support break in OrdinalScale yet.
        e.extent || [0, i.categories.length - 1]
      );
      return n._mapper = a.mapper, e1(n), n;
    }
    return t.parse = function(e) {
      return e == null ? e = NaN : V(e) ? (e = this._ordinalMeta.getOrdinal(e), e == null && (e = NaN)) : e = lr(e), e;
    }, t.prototype.getTicks = function() {
      var e = [];
      return i1(this, 0, function(n) {
        e.push(n);
      }), e;
    }, t.prototype.getMinorTicks = function(e) {
    }, t.prototype.setSortInfo = function(e) {
      if (e == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (var n = e.ordinalNumbers, i = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, u = ae(s, n.length); o < u; ++o) {
        var l = i[o] = n[o];
        a[l] = o;
      }
      for (var f = 0; o < s; ++o) {
        for (; a[f] != null; )
          f++;
        i[o] = f, a[f] = o;
      }
    }, t.prototype._getTickNumber = function(e) {
      var n = this._ticksByOrdinalNumber;
      return n && e >= 0 && e < n.length ? n[e] : e;
    }, t.prototype.getRawOrdinalNumber = function(e) {
      var n = this._ordinalNumbersByTick;
      return n && e >= 0 && e < n.length ? n[e] : e;
    }, t.prototype.getLabel = function(e) {
      if (!this.isBlank()) {
        var n = this.getRawOrdinalNumber(e.value), i = this._ordinalMeta.categories[n];
        return i == null ? "" : i + "";
      }
    }, t.prototype.count = function() {
      var e = Wa(this._mapper);
      return e[1] - e[0] + 1;
    }, t.prototype.getOrdinalMeta = function() {
      return this._ordinalMeta;
    }, t.type = "ordinal", t.decoratedMethods = {
      needTransform: function() {
        return this._mapper.needTransform();
      },
      contain: function(e) {
        return this._mapper.contain(this._getTickNumber(e)) && e >= 0 && e < this._ordinalMeta.categories.length;
      },
      normalize: function(e) {
        return this._mapper.normalize(this._getTickNumber(e));
      },
      scale: function(e) {
        return this.getRawOrdinalNumber(lr(this._mapper.scale(e)));
      },
      transformIn: function(e, n) {
        return this._mapper.transformIn(this._getTickNumber(e), n);
      },
      transformOut: function(e, n) {
        return this.getRawOrdinalNumber(this._mapper.transformOut(e, n));
      },
      getExtent: function() {
        return this._mapper.getExtent();
      },
      getExtentUnsafe: function(e, n) {
        return this._mapper.getExtentUnsafe(e, n);
      },
      /**
       * NOTICE: OrdinalScale extent should always originates from
       * `[0, ordinalMeta.categories.length - 1]`, regardless of min/max of `series.data`.
       * But settings like `xxxAxis.min/max` can still modify the extent.
       * It is handled by constructor of `ScaleRawExtentInfo`.
       */
      setExtent: function(e, n) {
        return this._mapper.setExtent(e, n);
      },
      setExtent2: function(e, n, i) {
        return this._mapper.setExtent2(e, n, i);
      }
    }, t;
  })(Oe)
);
Oe.registerClass(a1);
function ac(r, t, e, n) {
  for (var i = r.getTicks({
    expandToNicedExtent: !0
  }), a = [], o = r.getExtent(), s = 1; s < i.length; s++) {
    var u = i[s], l = i[s - 1];
    if (!(l.break || u.break)) {
      for (var f = 0, h = [], v = u.value - l.value, c = v / t, d = In(c); f < t - 1; ) {
        var p = st(l.value + (f + 1) * c, d);
        p > o[0] && p < o[1] && h.push(p), f++;
      }
      var m = Eu();
      m && m.pruneTicksByBreak("auto", h, e, function(g) {
        return g;
      }, n, o), a.push(h);
    }
  }
  return a;
}
var di = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e) {
      var n = r.call(this) || this;
      n.type = "interval", n.parse = t.parse, e = e || {};
      var i = E0(n, e), a = nc(n, i, null);
      return n.brk = a.brk, n._cfg = {
        interval: 0,
        intervalPrecision: 2,
        intervalCount: void 0,
        niceExtent: void 0
      }, n;
    }
    return t.parse = function(e) {
      return e == null || e === "" ? NaN : Number(e);
    }, t.prototype.getConfig = function() {
      return tt(this._cfg);
    }, t.prototype.setConfig = function(e) {
      var n = Wa(this);
      this._cfg = e = tt(e), e.niceExtent == null && (e.niceExtent = n.slice()), e.intervalPrecision == null && (e.intervalPrecision = In(e.interval));
    }, t.prototype.getTicks = function(e) {
      e = e || {};
      var n = this._cfg, i = n.interval, a = Wa(this), o = n.niceExtent, s = n.intervalPrecision, u = Eu(), l = this.brk, f = u, h = [];
      if (!i)
        return h;
      e.breakTicks;
      var v = 3e3;
      a[0] < o[0] && h.push({
        value: e.expandToNicedExtent ? st(o[0] - i, s) : a[0]
      });
      for (var c = function(_, S) {
        return lr((S - _) / i);
      }, d = n.intervalCount, p = o[0], m = 0; ; m++) {
        if (d == null) {
          if (p > o[1] || !isFinite(p) || !isFinite(o[1]))
            break;
        } else {
          if (m > d)
            break;
          p = ae(p, o[1]), m === d && (p = o[1]);
        }
        if (h.push({
          value: p
        }), p = st(p + i, s), l) {
          var g = l.calcNiceTickMultiple(p, c);
          g >= 0 && (p = st(p + g * i, s));
        }
        if (h.length > 0 && p === h[h.length - 1].value)
          break;
        if (h.length > v)
          return [];
      }
      var y = h.length ? h[h.length - 1].value : o[1];
      return a[1] > y && h.push({
        value: e.expandToNicedExtent ? st(y + i, s) : a[1]
      }), h;
    }, t.prototype.getMinorTicks = function(e) {
      return ac(this, e, Ev(this), this._cfg.interval);
    }, t.prototype.getLabel = function(e, n) {
      if (e == null)
        return "";
      var i = n && n.precision;
      i == null ? i = Mr(e.value) || 0 : i === "auto" && (i = this._cfg.intervalPrecision);
      var a = st(e.value, i, !0);
      return V0(a);
    }, t.type = "interval", t;
  })(Oe)
);
Oe.registerClass(di);
var PI = function(r, t, e, n) {
  for (; e < n; ) {
    var i = e + n >>> 1;
    r[i][1] < t ? e = i + 1 : n = i;
  }
  return e;
}, o1 = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e) {
      var n = r.call(this) || this;
      n.type = "time", n.parse = t.parse, n._locale = e.locale, n._useUTC = e.useUTC, n._interval = 0;
      var i = E0(n, e), a = nc(n, i, null);
      return n.brk = a.brk, n;
    }
    return t.prototype.getLabel = function(e) {
      return Ou(e.value, sp[UC(wa(this._minLevelUnit))] || sp.second, this._useUTC, this._locale);
    }, t.prototype.getFormattedLabel = function(e, n, i) {
      return WC(e, n, i, this._locale, this._useUTC);
    }, t.prototype.getTicks = function(e) {
      var n = this._interval, i = Wa(this), a = this.brk, o = [];
      if (!n)
        return o;
      var s = this._useUTC;
      o = zI(this._minLevelUnit, this._approxInterval, s, i, Hu(this), a);
      var u = Tn.length - 1, l = 0;
      return T(o, function(f) {
        f.time && (u = Math.min(u, ot(Tn, f.time.upperTimeUnit)), l = Math.max(l, f.time.level));
      }), o;
    }, t.prototype.getMinorTicks = function(e) {
      return ac(this, e, Ev(this), this._interval);
    }, t.prototype.setTimeInterval = function(e) {
      this._interval = e.interval, this._approxInterval = e.approxInterval, this._minLevelUnit = e.minLevelUnit;
    }, t.parse = function(e) {
      return wt(e) ? Math.round(e) : +Oi(e);
    }, t.type = "time", t;
  })(Oe)
), Ko = [
  // Format                           interval
  ["second", Ov],
  ["minute", kv],
  ["hour", xa],
  ["quarter-day", xa * 6],
  ["half-day", xa * 12],
  ["day", be * 1.2],
  ["half-week", be * 3.5],
  ["week", be * 7],
  ["month", be * 31],
  ["quarter", be * 95],
  ["half-year", op / 2],
  ["year", op]
  // 1Y
];
function RI(r, t, e, n) {
  return sh(new Date(t), r, n).getTime() === sh(new Date(e), r, n).getTime();
}
function EI(r, t) {
  return r /= be, r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
}
function OI(r) {
  var t = 30 * be;
  return r /= t, r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
}
function kI(r) {
  return r /= xa, r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
}
function mg(r, t) {
  return r /= t ? kv : Ov, r > 30 ? 30 : r > 20 ? 20 : r > 15 ? 15 : r > 10 ? 10 : r > 5 ? 5 : r > 2 ? 2 : 1;
}
function BI(r) {
  return gt(iv(r, !0), 1);
}
function NI(r, t, e) {
  var n = Math.max(0, ot(Tn, t) - 1);
  return sh(new Date(r), Tn[n], e).getTime();
}
function FI(r, t) {
  var e = /* @__PURE__ */ new Date(0);
  e[r](1);
  var n = e.getTime();
  e[r](1 + t);
  var i = e.getTime() - n;
  return function(a, o) {
    return Math.max(0, Math.round((o - a) / i));
  };
}
function zI(r, t, e, n, i, a) {
  var o = 3e3, s = zC, u = 0;
  function l(R, F, G, W, J, q, rt) {
    for (var $ = FI(J, R), H = F, it = new Date(H); H < G && H <= n[1] && (rt.push({
      value: H
    }), !(u++ > o)); )
      if (it[J](it[W]() + R), H = it.getTime(), a) {
        var lt = a.calcNiceTickMultiple(H, $);
        lt > 0 && (it[J](it[W]() + lt * R), H = it.getTime());
      }
    rt.push({
      value: H,
      // extent[1] should be added; deduplication will be performed later.
      notAdd: H > n[1]
    });
  }
  function f(R, F, G) {
    var W = [], J = !F.length;
    if (!RI(wa(R), n[0], n[1], e)) {
      J && (F = [{
        value: NI(n[0], R, e)
      }, {
        value: n[1]
      }]);
      for (var q = 0; q < F.length - 1; q++) {
        var rt = F[q].value, $ = F[q + 1].value;
        if (rt !== $) {
          var H = void 0, it = void 0, lt = void 0, Ut = !1;
          switch (R) {
            case "year":
              H = Math.max(1, Math.round(t / be / 365)), it = O0(e), lt = YC(e);
              break;
            case "half-year":
            case "quarter":
            case "month":
              H = OI(t), it = Bv(e), lt = k0(e);
              break;
            case "week":
            // PENDING If week is added. Ignore day.
            case "half-week":
            case "day":
              H = EI(t), it = Nv(e), lt = B0(e), Ut = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              H = kI(t), it = Fv(e), lt = N0(e);
              break;
            case "minute":
              H = mg(t, !0), it = zv(e), lt = F0(e);
              break;
            case "second":
              H = mg(t, !1), it = Hv(e), lt = z0(e);
              break;
            case "millisecond":
              H = BI(t), it = Vv(e), lt = H0(e);
              break;
          }
          $ >= n[0] && rt <= n[1] && l(H, rt, $, it, lt, Ut, W), R === "year" && G.length > 1 && q === 0 && G.unshift({
            value: G[0].value - H
          });
        }
      }
      for (var q = 0; q < W.length; q++)
        G.push(W[q]);
    }
  }
  for (var h = [], v = [], c = 0, d = 0, p = 0; p < s.length; ++p) {
    var m = wa(s[p]);
    if (GC(s[p])) {
      f(s[p], h[h.length - 1] || [], v);
      var g = s[p + 1] ? wa(s[p + 1]) : null;
      if (m !== g) {
        if (v.length) {
          d = c, v.sort(function(R, F) {
            return R.value - F.value;
          });
          for (var y = [], _ = 0; _ < v.length; ++_) {
            var S = v[_].value;
            (_ === 0 || v[_ - 1].value !== S) && (y.push(v[_]), S >= n[0] && S <= n[1] && c++);
          }
          var b = i / t;
          if (c > b * 1.5 && d > b / 1.5 || (h.push(y), c > b || r === s[p]))
            break;
        }
        v = [];
      }
    }
  }
  for (var x = kt(U(h, function(R) {
    return kt(R, function(F) {
      return F.value >= n[0] && F.value <= n[1] && !F.notAdd;
    });
  }), function(R) {
    return R.length > 0;
  }), w = x.length - 1, D = [], p = 0; p < x.length; ++p)
    for (var C = x[p], M = 0; M < C.length; ++M) {
      var A = ms(C[M].value, e);
      D.push({
        value: C[M].value,
        time: {
          level: w - p,
          upperTimeUnit: A,
          lowerTimeUnit: A
        }
      });
    }
  uv(D, Kx, null), D.sort(function(R, F) {
    return R.value - F.value;
  });
  var L = D[0], I = D[D.length - 1], P = ms(n[0], e), E = ms(n[1], e);
  return (!L || L.value > n[0]) && D.unshift({
    value: n[0],
    time: {
      level: 0,
      upperTimeUnit: P,
      lowerTimeUnit: P
    },
    notNice: !0
  }), (!I || I.value < n[1]) && D.push({
    value: n[1],
    time: {
      level: 0,
      upperTimeUnit: E,
      lowerTimeUnit: E
    },
    notNice: !0
  }), D;
}
var HI = function(r, t) {
  var e = r.getExtent();
  if (e[0] === e[1] && (e[0] -= be, e[1] += be), e[1] === -1 / 0 && e[0] === 1 / 0) {
    var n = /* @__PURE__ */ new Date();
    e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - be;
  }
  r.setExtent(e[0], e[1]);
  var i = ic(t.splitNumber, 10), a = Hu(r) / i, o = t.minInterval, s = t.maxInterval;
  o != null && a < o && (a = o), s != null && a > s && (a = s);
  var u = Ko.length, l = Math.min(PI(Ko, a, 0, u), u - 1), f = Ko[l][1], h = Ko[Math.max(l - 1, 0)][0];
  r.setTimeInterval({
    approxInterval: a,
    interval: f,
    minLevelUnit: h
  });
};
Oe.registerClass(o1);
var Qo = 0, Jo = 1, s1 = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e) {
      var n = r.call(this) || this;
      n.type = "log", n.parse = di.parse, n.base = e.logBase || 10;
      var i = [], a = [];
      n._lookup = {
        from: i,
        to: a
      }, i[Qo] = i[Jo] = a[Qo] = a[Jo] = NaN, t1(n, t.mapperMethods), e.breakOption;
      var o = {};
      return n.powStub = new di({
        breakParsed: o.original
      }), n.intervalStub = new di({
        breakParsed: o.transformed
      }), e1(n, n.intervalStub), n;
    }
    return t.prototype.getTicks = function(e) {
      var n = this.base, i = this.powStub, a = this.intervalStub, o = a.getExtent(), s = i.getExtent(), u = {
        lookup: {
          from: o,
          to: s
        }
      };
      return U(a.getTicks(e || {}), function(l) {
        var f = l.value, h = rf(f, n, u), v;
        return {
          value: h,
          break: v
        };
      }, this);
    }, t.prototype.getMinorTicks = function(e) {
      return ac(
        this,
        e,
        Ev(this.powStub),
        // NOTE: minor ticks are in the log scale value to visually hint users "logarithm".
        this.intervalStub.getConfig().interval
      );
    }, t.prototype.getLabel = function(e, n) {
      return this.intervalStub.getLabel(e, n);
    }, t.type = "log", t.mapperMethods = {
      needTransform: function() {
        return !0;
      },
      normalize: function(e) {
        return this.intervalStub.normalize(qo(e, this.base));
      },
      scale: function(e) {
        return rf(this.intervalStub.scale(e), this.base, null);
      },
      transformIn: function(e, n) {
        return e = qo(e, this.base), n && n.depth === eu ? e : this.intervalStub.transformIn(e, n);
      },
      transformOut: function(e, n) {
        var i = n ? n.depth : null;
        return yg.depth = i, _g.lookup = this._lookup, rf(i === eu ? e : this.intervalStub.transformOut(e, yg), this.base, _g);
      },
      contain: function(e) {
        return this.powStub.contain(e);
      },
      /**
       * NOTICE: The caller should ensure `start` and `end` are both non-negative.
       */
      setExtent: function(e, n) {
        this.setExtent2(xe, e, n);
      },
      setExtent2: function(e, n, i) {
        if (!(!Si(n, i) || n <= 0 || i <= 0)) {
          var a = Sg, o = Sg;
          if (e === xe) {
            var s = this._lookup;
            a = s.to, o = s.from;
          }
          this.powStub.setExtent2(e, a[Qo] = n, a[Jo] = i);
          var u = this.base;
          this.intervalStub.setExtent2(e, o[Qo] = qo(n, u), o[Jo] = qo(i, u));
        }
      },
      getFilter: function() {
        return {
          g: 0
        };
      },
      sanitize: function(e, n) {
        return Si(n[0], n[1]) && Ke(e) && e <= 0 && (e = n[0]), e;
      },
      getDefaultStartValue: function() {
        return 1;
      },
      getExtent: function() {
        return this.powStub.getExtent();
      },
      getExtentUnsafe: function(e, n) {
        return n === null ? this.powStub.getExtentUnsafe(e, null) : this.intervalStub.getExtentUnsafe(e, n);
      }
    }, t;
  })(Oe)
);
Oe.registerClass(s1);
var yg = {}, _g = {}, Sg = [], u1 = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
}, l1 = vt();
function VI(r) {
  var t = r.get("type");
  return (
    // In ec option, `xxxAxis.type` may be undefined.
    (t == null || !ee(u1, t) && !Oe.getClass(t)) && (t = "value"), t
  );
}
function GI(r, t, e) {
  var n;
  switch (t) {
    case "category":
      return new a1({
        ordinalMeta: r.getOrdinalMeta ? r.getOrdinalMeta() : r.getCategories(),
        extent: Jt()
      });
    case "time":
      return new o1({
        locale: r.ecModel.getLocaleModel(),
        useUTC: r.ecModel.get("useUTC"),
        breakOption: n
      });
    case "log":
      return new s1({
        logBase: r.get("logBase"),
        breakOption: n
      });
    case "value":
      return new di({
        breakOption: n
      });
    default:
      return new (Oe.getClass(t) || di)({});
  }
}
function UI(r, t, e) {
  var n = r.getExtentUnsafe(xe, null), i = n[0], a = n[1];
  return Si(i, a) ? i === t || a === t ? YI : i < t && a > t ? WI : Ch : Ch;
}
var WI = 1, YI = 2, Ch = 3;
function ZI(r) {
  l1(r).noOnMyZero = !0;
}
function XI(r) {
  return l1(r).noOnMyZero;
}
function Vu(r) {
  var t = r.getLabelModel().get("formatter");
  if (r.type === "time") {
    var e = HC(t);
    return function(i, a) {
      return r.scale.getFormattedLabel(i, a, e);
    };
  } else {
    if (V(t))
      return function(i) {
        var a = r.scale.getLabel(i), o = t.replace("{value}", a ?? "");
        return o;
      };
    if (Q(t)) {
      if (r.type === "category")
        return function(i, a) {
          return t(
            iu(r, i),
            i.value - r.scale.getExtent()[0],
            null
            // Using `null` just for backward compat.
          );
        };
      var n = Eu();
      return function(i, a) {
        var o = null;
        return n && (o = n.makeAxisLabelFormatterParamBreak(o, i.break)), t(iu(r, i), a, o);
      };
    } else
      return function(i) {
        return r.scale.getLabel(i);
      };
  }
}
function iu(r, t) {
  var e = r.scale;
  return Ce(e) ? e.getLabel(t) : t.value;
}
function oc(r) {
  var t = r.get("interval");
  return t ?? "auto";
}
function $I(r) {
  return r.type === "category" && oc(r.getLabelModel()) === 0;
}
function qI(r, t) {
  var e = {};
  return T(r.mapDimensionsAll(t), function(n) {
    e[gI(r, n)] = !0;
  }), xt(e);
}
function Ci(r) {
  return r === "middle" || r === "center";
}
function Ya(r) {
  return r.getShallow("show");
}
function KI(r, t, e) {
  var n = r.get("breaks", !0);
  n == null;
}
function f1(r, t, e, n, i, a) {
  var o = Ti(r), s = o ? r.intervalStub : r;
  if (s.setExtent(n[0], n[1]), o) {
    var u = r.powStub, l = {
      depth: eu
    }, f = r.transformOut(n[0], l), h = r.transformOut(n[1], l), v = LI(e, n);
    t[0] && !v[0] && (f = i[0]), t[1] && !v[1] && (h = i[1]), u.setExtent(f, h);
  }
  s.setConfig(a);
}
function ho(r, t) {
  return Ce(r) ? r.getRawOrdinalNumber(t.value) : t.value;
}
function h1(r, t) {
  return Ce(r) && !!t.get("boundaryGap");
}
var QI = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.needIncludeZero = function() {
      return !this.option.scale;
    }, r.prototype.getCoordSysModel = function() {
    }, r;
  })()
);
By();
var bg = "|&", vo = vt(), JI = -2;
vt();
function jI(r, t) {
  var e = r.model, n = vo(lo(e.ecModel)).keyed, i = n && n.get(t);
  return i && i.get(e.uid);
}
function tL(r, t) {
  return v1(jI(r, t));
}
function eL(r, t) {
  var e = [];
  return rL(r.model.ecModel, function(n) {
    for (var i = 0; i < t.length; i++)
      t[i] && n.serByIdx[t[i].seriesIndex] && e.push(v1(n));
  }), e;
}
function rL(r, t) {
  var e = vo(lo(r)).keyed;
  e && e.each(function(n, i) {
    n.each(function(a, o) {
      t(a, i, o);
    });
  });
}
function v1(r) {
  return {
    liPosMinGap: r ? r.liPosMinGap : void 0
  };
}
function nL(r, t) {
  var e = r.model.ecModel, n = vo(lo(e)).axSer;
  n && iL(e, n.get(r.model.uid), t);
}
function iL(r, t, e) {
  if (t)
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      r.isSeriesFiltered(i) || e(i);
    }
}
function c1(r, t) {
  var e = r.model, n = vo(lo(e.ecModel)).keys;
  n && T(n.get(e.uid), function(i) {
    t(i);
  });
}
function xg(r, t, e) {
  if (r) {
    var n = t.ecModel, i = vo(lo(n)), a = r.model.uid, o = i.axSer || (i.axSer = Y()), s = o.get(a) || o.set(a, []);
    s.push(t);
    var u = t.subType, l = t.getBaseAxis() === r, f = Tg.get(wg(u, l, e)) || Tg.get(wg(u, l, null));
    if (f) {
      var h = i.keyed || (i.keyed = Y()), v = i.keys || (i.keys = Y()), c = f.key, d = h.get(c) || h.set(c, Y()), p = d.get(a);
      p || (p = d.set(a, {
        axis: r,
        sers: [],
        serByIdx: []
      }), p.metrics = f.getMetrics(r), (v.get(a) || v.set(a, [])).push(c)), p.sers.push(t), p.serByIdx[t.seriesIndex] = t;
    }
  }
}
function wg(r, t, e) {
  return r + bg + X(t, !0) + bg + (e || "");
}
var Tg = Y(), aL = vt(), oL = 1, sL = 2, uL = 3, d1 = (
  /** @class */
  (function() {
    function r(t, e, n, i, a) {
      var o = Ce(t), s = o ? e.getCategories().length : null, u;
      if (o) {
        var l = e.getCategories(!0);
        u = l && !l.length;
      }
      var f = n.slice();
      (nu(t) || Ti(t) || fo(t)) && (Oy(f, Qi(t, e.get("dataMin", !0))), ky(f, Qi(t, e.get("dataMax", !0)))), $x(f) || (f[0] = f[1] = NaN);
      var h = [], v = [!1, !1], c = e.get("min", !0);
      c === "dataMin" ? (h[0] = f[0], v[0] = !0) : (h[0] = Qi(t, Q(c) ? c({
        min: f[0],
        max: f[1]
      }) : c), v[0] = h[0] != null);
      var d = e.get("max", !0);
      d === "dataMax" ? (h[1] = f[1], v[1] = !0) : (h[1] = Qi(t, Q(d) ? d({
        min: f[0],
        max: f[1]
      }) : d), v[1] = h[1] != null);
      var p = lL(t, e), m = o ? null : f[1] - f[0] || Math.abs(f[0]);
      h[0] == null && (h[0] = o ? u ? f[0] : s ? 0 : NaN : f[0] - p[0] * m), h[1] == null && (h[1] = o ? u ? f[1] : s ? s - 1 : NaN : f[1] + p[1] * m), !fr(h[0]) && (h[0] = NaN), !fr(h[1]) && (h[1] = NaN);
      var g = u || Aa(h[0]) || Aa(h[1]) || o && !s, y = nu(t), _ = y && e.needIncludeZero && e.needIncludeZero();
      _ && (h[0] > 0 && h[1] > 0 && !v[0] && (h[0] = 0), h[0] < 0 && h[1] < 0 && !v[1] && (h[1] = 0));
      var S = !1;
      h[0] > h[1] && (h.reverse(), S = !0);
      var b = Qi(t, e.get("startValue", !0)), x = b != null;
      !Ke(b) && i && (b = t.getDefaultStartValue ? t.getDefaultStartValue() : 0), Ke(b) && (x || !y || _) && (b < h[0] && !v[0] ? (h[0] = b, v[0] = !0) : b > h[1] && !v[1] && (h[1] = b, v[1] = !0));
      var w = this._i = {
        scale: t,
        dataMM: f,
        noZoomEffMM: h,
        zoomMM: [],
        fixMM: v,
        zoomFixMM: [!1, !1],
        startValue: b,
        isBlank: g,
        incl0: _,
        tggAxInv: S,
        ctnShp: a
      };
      Cg(w, h);
    }
    return r.prototype.makeNoZoom = function() {
      return this._i.noZoomEffMM.slice();
    }, r.prototype.makeFinal = function() {
      var t = this._i, e = t.zoomMM, n = t.noZoomEffMM, i = t.zoomFixMM, a = t.fixMM, o = {
        fixMM: a,
        zoomFixMM: i,
        isBlank: t.isBlank,
        incl0: t.incl0,
        tggAxInv: t.tggAxInv,
        ctnShp: t.ctnShp,
        effMM: n.slice()
      }, s = o.effMM;
      return e[0] != null && (s[0] = e[0], a[0] = i[0] = !0), e[1] != null && (s[1] = e[1], a[1] = i[1] = !0), Cg(t, s), o;
    }, r.prototype.makeRenderInfo = function() {
      return {
        startValue: this._i.startValue
      };
    }, r.prototype.setZoomMM = function(t, e) {
      this._i.zoomMM[t] = e;
    }, r;
  })()
);
function Cg(r, t) {
  var e = r.scale, n = r.dataMM;
  e.sanitize && (t[0] = e.sanitize(t[0], n), t[1] = e.sanitize(t[1], n), vs(t));
}
function Qi(r, t) {
  return t == null ? null : Aa(t) ? NaN : r.parse(t);
}
function lL(r, t) {
  var e;
  if (Ce(r))
    e = [0, 0];
  else {
    var n = t.get("boundaryGap");
    typeof n == "boolean" && (n = null), e = z(n) ? n : [n, n];
  }
  return [Mg(e[0]), Mg(e[1])];
}
function Mg(r) {
  return _i(typeof r == "boolean" ? 0 : r, 1) || 0;
}
function p1(r) {
  var t = aL(r.scale);
  return t.extent || (t.extent = Jt()), t;
}
function fL(r, t) {
  p1(r).dimIdxInCoord = t.get(r.dim);
}
function g1(r, t) {
  var e = r.scale, n = r.model, i = r.dim;
  e.rawExtentInfo || hL(e, r, i, n, t);
}
function hL(r, t, e, n, i) {
  var a = p1(t), o = a.extent, s = !1;
  nL(t, function(f) {
    if (f.boxCoordinateSystem) {
      var h = W0(f).coord, v = a.dimIdxInCoord;
      if (v >= 0) {
        if (z(h)) {
          var c = h[v];
          c != null && !z(c) && Xf(o, r.parse(c));
        }
      }
    } else if (f.coordinateSystem) {
      var d = f.getData();
      if (d) {
        var p = r.getFilter ? r.getFilter() : null;
        T(qI(d, e), function(m) {
          Xx(o, d.getApproximateExtent(m, p));
        });
      }
      f.__requireStartValue && f.__requireStartValue(t) && (s = !0);
    }
  });
  var u = cL(r, t, n), l = new d1(r, n, o, s, u);
  m1(r, l, i), a.extent = null;
}
function vL(r, t) {
  var e = r.scale;
  m1(e, new d1(e, r.model, t, !1, !1), uL);
}
function m1(r, t, e) {
  r.rawExtentInfo = t, t.from = e;
}
var y1 = Y();
function _1(r, t, e, n, i) {
  r.rawExtentInfo || vL({
    scale: r,
    model: t
  }, Jt());
  var a = r.rawExtentInfo.makeFinal(), o = a.effMM;
  return r.setExtent(o[0], o[1]), r.setBlank(a.isBlank), n && a.tggAxInv && e && !e.get("legacyMinMaxDontInverseAxis") && (n.inverse = !n.inverse), a;
}
function cL(r, t, e) {
  var n = h1(r, e), i = e.get("containShape", !0);
  if (i == null && !n && (i = !0), !i)
    return !1;
  var a = !1;
  return c1(t, function(o) {
    a = !!y1.get(o) || a;
  }), a;
}
function dL(r, t, e, n) {
  if (e.ctnShp) {
    var i;
    if (c1(r, function(s) {
      var u = y1.get(s);
      if (u) {
        var l = u(r, n);
        l && (i = i || [0, 0], Oy(i, l[0]), ky(i, l[1]), ZI(r));
      }
    }), !!i) {
      var a = t.getExtent();
      if (Ce(t))
        r.onBand || t.setExtent2(Ua, ae(a[0], a[0] + i[0]), gt(a[1], a[1] + i[1]));
      else {
        var o = a.slice();
        e.zoomFixMM[0] || (o[0] = ae(o[0], t.transformOut(t.transformIn(o[0], null) + i[0], null))), e.zoomFixMM[1] || (o[1] = gt(o[1], t.transformOut(t.transformIn(o[1], null) + i[1], null))), (o[0] < a[0] || o[1] > a[1]) && t.setExtent2(Ua, o[0], o[1]);
      }
    }
  }
}
function Dg(r, t) {
  var e = Ti(r), n = e ? r.intervalStub : r, i = t.fixMinMax || [], a = e ? r.getExtent() : null, o = n.getExtent(), s = n1(o, i, t.rawExtentResult);
  n.setExtent(s[0], s[1]), s = n.getExtent();
  var u = e ? gL(n, t) : pL(n, t), l = u.intervalPrecision, f = u.interval, h = t.userInterval;
  h != null && (u.interval = h, u.intervalPrecision = In(h)), i[0] || (s[0] = st(Cn(s[0] / f) * f, l)), i[1] || (s[1] = st(Ri(s[1] / f) * f, l)), h != null && (u.niceExtent = s.slice()), f1(r, i, o, s, a, u);
}
function pL(r, t) {
  var e = ic(t.splitNumber, 5), n = Hu(r), i = t.minInterval, a = t.maxInterval, o = iv(n / e, !0);
  i != null && o < i && (o = i), a != null && o > a && (o = a);
  var s = In(o), u = r.getExtent(), l = [st(Ri(u[0] / o) * o, s), st(Cn(u[1] / o) * o, s)];
  return {
    interval: o,
    intervalPrecision: s,
    niceExtent: l
  };
}
function gL(r, t) {
  var e = ic(t.splitNumber, 10), n = r.getExtent(), i = Hu(r), a = gt(My(i), 1), o = e / i * a;
  o <= 0.5 && (a *= 10);
  var s = In(a), u = [st(Ri(n[0] / a) * a, s), st(Cn(n[1] / a) * a, s)];
  return {
    intervalPrecision: s,
    interval: a,
    niceExtent: u
  };
}
function Ag(r) {
  var t = r.scale, e = r.model, n = e.axis, i = e.ecModel;
  mL(t, e, n, i);
}
function mL(r, t, e, n, i) {
  var a = _1(r, t, n, e), o = nu(r) || fo(r);
  yL(r, {
    splitNumber: t.get("splitNumber"),
    fixMinMax: a.fixMM,
    userInterval: t.get("interval"),
    minInterval: o ? t.get("minInterval") : null,
    maxInterval: o ? t.get("maxInterval") : null,
    rawExtentResult: a
  }), e && n && dL(e, r, a, n);
}
function yL(r, t) {
  _L[r.type](r, t);
}
var _L = {
  interval: Dg,
  log: Dg,
  time: HI,
  ordinal: Nt
}, Ig = [], SL = {
  registerPreprocessor: Z_,
  registerProcessor: X_,
  registerPostInit: YA,
  registerPostUpdate: ZA,
  registerUpdateLifecycle: Jv,
  registerAction: tr,
  registerCoordinateSystem: XA,
  registerLayout: $A,
  registerVisual: On,
  registerTransform: KA,
  registerLoading: $_,
  registerMap: qA,
  registerImpl: $D,
  PRIORITY: zA,
  ComponentModel: ct,
  ComponentView: le,
  SeriesModel: Nr,
  ChartView: $e,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(r) {
    ct.registerClass(r);
  },
  registerComponentView: function(r) {
    le.registerClass(r);
  },
  registerSeriesModel: function(r) {
    Nr.registerClass(r);
  },
  registerChartView: function(r) {
    $e.registerClass(r);
  },
  registerCustomSeries: function(r, t) {
  },
  registerSubTypeDefaulter: function(r, t) {
    ct.registerSubTypeDefaulter(r, t);
  },
  registerPainter: function(r, t) {
    mx(r, t);
  }
};
function Le(r) {
  if (z(r)) {
    T(r, function(t) {
      Le(t);
    });
    return;
  }
  ot(Ig, r) >= 0 || (Ig.push(r), Q(r) && (r = {
    install: r
  }), r.install(SL));
}
var bL = vt(), Ma = vt(), Pe = {
  estimate: 1,
  determine: 2
};
function au(r) {
  return {
    out: {
      noPxChangeTryDetermine: []
    },
    kind: r
  };
}
function xL(r, t) {
  var e = r.getLabelModel().get("customValues");
  if (e) {
    var n = r.scale;
    return {
      labels: U(S1(e, n), function(i, a) {
        return {
          formattedLabel: Vu(r)(i, a),
          rawLabel: n.getLabel(i),
          tick: i
        };
      })
    };
  }
  return r.type === "category" ? TL(r, t) : ML(r);
}
function wL(r, t, e) {
  var n = r.scale, i = r.getTickModel().get("customValues");
  return i ? {
    ticks: S1(i, n)
  } : r.type === "category" ? CL(r, t) : {
    ticks: n.getTicks(e)
  };
}
function S1(r, t) {
  var e = t.getExtent(), n = [];
  return T(r, function(i) {
    i = t.parse(i), i >= e[0] && i <= e[1] && n.push(i);
  }), uv(n, Qx, null), Cr(n), U(n, function(i) {
    return {
      value: i
    };
  });
}
function TL(r, t) {
  var e = r.getLabelModel(), n = b1(r, e, t);
  return !e.get("show") || r.scale.isBlank() ? {
    labels: []
  } : n;
}
function b1(r, t, e) {
  var n = AL(r), i = oc(t), a = e.kind === Pe.estimate;
  if (!a) {
    var o = w1(n, i);
    if (o)
      return o;
  }
  var s, u;
  Q(i) ? s = ou(r, i, !1) : (u = i === "auto" ? IL(r, e) : i, s = ou(r, u, !1));
  var l = {
    labels: s,
    labelCategoryInterval: u
  };
  return a ? e.out.noPxChangeTryDetermine.push(function() {
    return Mh(n, i, l), !0;
  }) : Mh(n, i, l), l;
}
function CL(r, t) {
  var e = DL(r), n = oc(t), i = w1(e, n);
  if (i)
    return i;
  var a, o;
  if ((!t.get("show") || r.scale.isBlank()) && (a = []), Q(n))
    a = ou(r, n, !0);
  else if (n === "auto") {
    var s = b1(r, r.getLabelModel(), au(Pe.determine));
    o = s.labelCategoryInterval, a = U(s.labels, function(u) {
      return u.tick;
    });
  } else
    o = n, a = ou(r, o, !0);
  return Mh(e, n, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function ML(r) {
  var t = r.scale.getTicks(), e = Vu(r);
  return {
    labels: U(t, function(n, i) {
      return {
        formattedLabel: e(n, i),
        rawLabel: r.scale.getLabel(n),
        tick: n
      };
    })
  };
}
var DL = x1("axisTick"), AL = x1("axisLabel");
function x1(r) {
  return function(e) {
    return Ma(e)[r] || (Ma(e)[r] = {
      list: []
    });
  };
}
function w1(r, t) {
  for (var e = 0; e < r.list.length; e++)
    if (r.list[e].key === t)
      return r.list[e].value;
}
function Mh(r, t, e) {
  return r.list.push({
    key: t,
    value: e
  }), e;
}
function IL(r, t) {
  if (t.kind === Pe.estimate) {
    var e = r.calculateCategoryInterval(t);
    return t.out.noPxChangeTryDetermine.push(function() {
      return Ma(r).autoInterval = e, !0;
    }), e;
  }
  var n = Ma(r).autoInterval;
  return n ?? (Ma(r).autoInterval = r.calculateCategoryInterval(t));
}
function LL(r, t) {
  var e = t.kind, n = RL(r), i = Vu(r), a = (n.axisRotate - n.labelRotate) / 180 * Math.PI, o = r.scale, s = o.getExtent(), u = o.count();
  if (s[1] - s[0] < 1)
    return 0;
  var l = 1, f = 40;
  u > f && (l = Math.max(1, Math.floor(u / f)));
  for (var h = s[0], v = r.dataToCoord(h + 1) - r.dataToCoord(h), c = Math.abs(v * Math.cos(a)), d = Math.abs(v * Math.sin(a)), p = 0, m = 0; h <= s[1]; h += l) {
    var g = 0, y = 0, _ = ev(i({
      value: h
    }), n.font, "center", "top");
    g = _.width * 1.3, y = _.height * 1.3, p = Math.max(p, g, 7), m = Math.max(m, y, 7);
  }
  var S = p / c, b = m / d;
  isNaN(S) && (S = 1 / 0), isNaN(b) && (b = 1 / 0);
  var x = Math.max(0, Math.floor(Math.min(S, b)));
  if (e === Pe.estimate)
    return t.out.noPxChangeTryDetermine.push(K(PL, null, r, x, u)), x;
  var w = T1(r, x, u);
  return w ?? x;
}
function PL(r, t, e) {
  return T1(r, t, e) == null;
}
function T1(r, t, e) {
  var n = bL(r.model), i = r.getExtent(), a = n.lastAutoInterval, o = n.lastTickCount;
  if (a != null && o != null && Math.abs(a - t) <= 1 && Math.abs(o - e) <= 1 && a > t && n.axisExtent0 === i[0] && n.axisExtent1 === i[1])
    return a;
  n.lastTickCount = e, n.lastAutoInterval = t, n.axisExtent0 = i[0], n.axisExtent1 = i[1];
}
function RL(r) {
  var t = r.getLabelModel();
  return {
    axisRotate: r.getRotate ? r.getRotate() : r.isHorizontal && !r.isHorizontal() ? 90 : 0,
    labelRotate: t.get("rotate") || 0,
    font: t.getFont()
  };
}
function ou(r, t, e) {
  var n = Vu(r), i = r.scale, a = [], o = Q(t);
  return i1(i, o ? 0 : t, function(s, u) {
    var l = i.getLabel(s);
    if (o) {
      var f = !!t(s.value, l);
      if (s.offInterval = !f, !f && !u)
        return;
    }
    a.push(e ? s : {
      formattedLabel: n(s),
      rawLabel: l,
      tick: s
    });
  }), a;
}
var EL = 0.8;
function Gu(r, t) {
  t = t || {};
  var e = {
    w: NaN,
    w2: NaN
  }, n = r.scale, i = t.fromStat, a = t.min, o = MI(n);
  Ke(o) || (o = NaN);
  var s = r.getExtent(), u = Pt(s[1] - s[0]);
  return Ce(n) ? OL(e, r, o, u) : i && kL(e, r, o, u, i), a != null && (e.w = Ke(e.w) ? gt(a, e.w) : a), e;
}
function OL(r, t, e, n) {
  var i = t.onBand, a = e + (i ? 1 : 0);
  a === 0 && (a = 1), r.w = n / a, !i && e && n && (r.w2 = r.w * e / n);
}
function kL(r, t, e, n, i) {
  var a = !1, o = -1 / 0;
  T(i.key ? [tL(t, i.key)] : eL(t, i.sers || []), function(s) {
    var u = s.liPosMinGap;
    u != null && (u > 0 ? (u > o && (o = u), a = !1) : u === JI && (a = !0));
  }), Ke(e) && e > 0 && Ke(o) ? (r.w = n / e * o, r.w2 = o) : a && (r.w = n * EL, r.w2 = r.w * e / n);
}
var Lg = [0, 1], BL = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = n || [0, 0];
    }
    return r.prototype.contain = function(t) {
      var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
      return t >= n && t <= i;
    }, r.prototype.containData = function(t) {
      return this.scale.contain(this.scale.parse(t));
    }, r.prototype.getExtent = function() {
      return this._extent.slice();
    }, r.prototype.setExtent = function(t, e) {
      var n = this._extent;
      n[0] = t, n[1] = e;
    }, r.prototype.dataToCoord = function(t, e) {
      var n = this.scale;
      return t = n.normalize(n.parse(t)), It(t, Lg, Pg(this), e);
    }, r.prototype.coordToData = function(t, e) {
      var n = It(t, Pg(this), Lg, e);
      return this.scale.scale(n);
    }, r.prototype.pointToData = function(t, e) {
    }, r.prototype.getTicksCoords = function(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(), n = wL(this, e, {
        breakTicks: t.breakTicks,
        pruneByBreak: t.pruneByBreak
      }), i = U(n.ticks, function(s) {
        return {
          coord: this.dataToCoord(ho(this.scale, s)),
          tick: s
        };
      }, this), a = e.get("alignWithLabel"), o = NL(this, i, a);
      return U(i, function(s) {
        return {
          coord: s.coord,
          tickValue: s.tick.value,
          onBand: o
        };
      });
    }, r.prototype.getMinorTicksCoords = function() {
      if (Ce(this.scale))
        return [];
      var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
      e > 0 && e < 100 || (e = 5);
      var n = this.scale.getMinorTicks(e), i = U(n, function(a) {
        return U(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return i;
    }, r.prototype.getViewLabels = function(t) {
      return t = t || au(Pe.determine), xL(this, t).labels;
    }, r.prototype.getLabelModel = function() {
      return this.model.getModel("axisLabel");
    }, r.prototype.getTickModel = function() {
      return this.model.getModel("axisTick");
    }, r.prototype.getBandWidth = function() {
      return Gu(this, {
        min: 1
      }).w;
    }, r.prototype.calculateCategoryInterval = function(t) {
      return t = t || au(Pe.determine), LL(this, t);
    }, r;
  })()
);
function Pg(r) {
  var t = r.getExtent();
  if (r.onBand) {
    var e = t[1] - t[0], n = e / r.scale.count() / 2;
    t[0] += n, t[1] -= n;
  }
  return t;
}
function NL(r, t, e) {
  var n = t.length;
  if (!r.onBand || e || !n)
    return !1;
  var i = Gu(r).w;
  if (!i)
    return !1;
  T(t, function(s) {
    s.coord -= i / 2;
  });
  var a = r.scale.getExtent(), o = t[n - 1];
  return o.tick.offInterval && t.pop(), t.push({
    coord: o.coord + i,
    tick: {
      value: a[1] + 1
    }
  }), !0;
}
var Rg = ["label", "labelLine", "layoutOption", "priority", "defaultAttr", "marginForce", "minMarginForce", "marginDefault", "suggestIgnore"], FL = 1, su = 2, C1 = FL | su;
function uu(r, t, e) {
  e = e || C1, t ? r.dirty |= e : r.dirty &= ~e;
}
function M1(r, t) {
  return t = t || C1, r.dirty == null || !!(r.dirty & t);
}
function zr(r) {
  if (r)
    return M1(r) && zL(r, r.label, r), r;
}
function zL(r, t, e) {
  var n = t.getComputedTransform();
  r.transform = Dv(r.transform, n);
  var i = r.localRect = Ba(r.localRect, t.getBoundingRect()), a = t.style, o = a.margin, s = e && e.marginForce, u = e && e.minMarginForce, l = e && e.marginDefault, f = a.__marginType;
  f == null && l && (o = l, f = ai.textMargin);
  for (var h = 0; h < 4; h++)
    nf[h] = f === ai.minMargin && u && u[h] != null ? u[h] : s && s[h] != null ? s[h] : o ? o[h] : 0;
  f === ai.textMargin && Ws(i, nf, !1, !1);
  var v = r.rect = Ba(r.rect, i);
  return n && v.applyTransform(n), f === ai.minMargin && Ws(v, nf, !1, !1), r.axisAligned = Mv(n), (r.label = r.label || {}).ignore = t.ignore, uu(r, !1), uu(r, !0, su), r;
}
var nf = [0, 0, 0, 0];
function HL(r, t, e) {
  return r.transform = Dv(r.transform, e), r.localRect = Ba(r.localRect, t), r.rect = Ba(r.rect, t), e && r.rect.applyTransform(e), r.axisAligned = Mv(e), r.obb = void 0, (r.label = r.label || {}).ignore = !1, r;
}
function VL(r, t) {
  if (r) {
    r.label.x += t.x, r.label.y += t.y, r.label.markRedraw();
    var e = r.transform;
    e && (e[4] += t.x, e[5] += t.y);
    var n = r.rect;
    n && (n.x += t.x, n.y += t.y);
    var i = r.obb;
    i && i.fromBoundingRect(r.localRect, e);
  }
}
function Eg(r, t) {
  for (var e = 0; e < Rg.length; e++) {
    var n = Rg[e];
    r[n] == null && (r[n] = t[n]);
  }
  return zr(r);
}
function Og(r) {
  var t = r.obb;
  return (!t || M1(r, su)) && (r.obb = t = t || new p0(), t.fromBoundingRect(r.localRect, r.transform), uu(r, !1, su)), t;
}
function GL(r) {
  var t = [];
  r.sort(function(l, f) {
    return (f.suggestIgnore ? 1 : 0) - (l.suggestIgnore ? 1 : 0) || f.priority - l.priority;
  });
  function e(l) {
    if (!l.ignore) {
      var f = l.ensureState("emphasis");
      f.ignore == null && (f.ignore = !1);
    }
    l.ignore = !0;
  }
  for (var n = 0; n < r.length; n++) {
    var i = zr(r[n]);
    if (!i.label.ignore) {
      for (var a = i.label, o = i.labelLine, s = !1, u = 0; u < t.length; u++)
        if (sc(i, t[u], null, {
          touchThreshold: 0.05
        })) {
          s = !0;
          break;
        }
      s ? (e(a), o && e(o)) : t.push(i);
    }
  }
}
function sc(r, t, e, n) {
  return !r || !t || r.label && r.label.ignore || t.label && t.label.ignore || !r.rect.intersect(t.rect, e, n) ? !1 : r.axisAligned && t.axisAligned ? !0 : Og(r).intersect(Og(t), e, n);
}
var UL = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.hasSymbolVisual = !0, e;
    }
    return t.prototype.getInitialData = function(e) {
      return _I(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getLegendIcon = function(e) {
      var n = new Mt(), i = Fr("line", 0, e.itemHeight / 2, e.itemWidth, 0, e.lineStyle.stroke, !1);
      n.add(i), i.setStyle(e.lineStyle);
      var a = this.getData().getVisual("symbol"), o = this.getData().getVisual("symbolRotate"), s = a === "none" ? "circle" : a, u = e.itemHeight * 0.8, l = Fr(s, (e.itemWidth - u) / 2, (e.itemHeight - u) / 2, u, u, e.itemStyle.fill);
      n.add(l), l.setStyle(e.itemStyle);
      var f = e.iconRotate === "inherit" ? o : e.iconRotate || 0;
      return l.rotation = f * Math.PI / 180, l.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), s.indexOf("empty") > -1 && (l.style.stroke = l.style.fill, l.style.fill = O.color.neutral00, l.style.lineWidth = 2), n;
    }, t.type = "series.line", t.dependencies = ["grid", "polar"], t.defaultOption = {
      // zlevel: 0,
      z: 3,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      clip: !0,
      label: {
        position: "top"
      },
      // itemStyle: {
      // },
      endLabel: {
        show: !1,
        valueAnimation: !0,
        distance: 8
      },
      lineStyle: {
        width: 2,
        type: "solid"
      },
      emphasis: {
        scale: !0
      },
      // areaStyle: {
      // origin of areaStyle. Valid values:
      // `'auto'/null/undefined`: from axisLine to data
      // `'start'`: from min to data
      // `'end'`: from data to max
      // origin: 'auto'
      // },
      // false, 'start', 'end', 'middle'
      step: !1,
      // Disabled if step is true
      smooth: !1,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 6,
      symbolRotate: null,
      showSymbol: !0,
      // `false`: follow the label interval strategy.
      // `true`: show all symbols.
      // `'auto'`: If possible, show all symbols, otherwise
      //           follow the label interval strategy.
      showAllSymbol: "auto",
      // Whether to connect break point. (non-finite values)
      connectNulls: !1,
      // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
      sampling: "none",
      animationEasing: "linear",
      // Disable progressive
      progressive: 0,
      hoverLayerThreshold: 1 / 0,
      universalTransition: {
        divideShape: "clone"
      },
      /**
       * @deprecated
       */
      triggerLineEvent: !1,
      triggerEvent: !1
    }, t;
  })(Nr)
);
function D1(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel"), n = e.length;
  if (n === 1) {
    var i = wi(r, t, e[0]);
    return i != null ? i + "" : null;
  } else if (n) {
    for (var a = [], o = 0; o < e.length; o++)
      a.push(wi(r, t, e[o]));
    return a.join(" ");
  }
}
function WL(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel");
  if (!z(t))
    return t + "";
  for (var n = [], i = 0; i < e.length; i++) {
    var a = r.getDimensionIndex(e[i]);
    a >= 0 && n.push(t[a]);
  }
  return n.join(" ");
}
var uc = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e, n, i, a) {
      var o = r.call(this) || this;
      return o.updateData(e, n, i, a), o;
    }
    return t.prototype._createSymbol = function(e, n, i, a, o, s) {
      this.removeAll();
      var u = Fr(e, -1, -1, 2, 2, null, s);
      u.attr({
        z2: X(o, 100),
        culling: !0,
        scaleX: a[0] / 2,
        scaleY: a[1] / 2
      }), u.drift = YL, this._symbolType = e, this.add(u);
    }, t.prototype.stopSymbolAnimation = function(e) {
      this.childAt(0).stopAnimation(null, e);
    }, t.prototype.getSymbolType = function() {
      return this._symbolType;
    }, t.prototype.getSymbolPath = function() {
      return this.childAt(0);
    }, t.prototype.highlight = function() {
      bi(this.childAt(0));
    }, t.prototype.downplay = function() {
      xi(this.childAt(0));
    }, t.prototype.setZ = function(e, n) {
      var i = this.childAt(0);
      i.zlevel = e, i.z = n;
    }, t.prototype.setDraggable = function(e, n) {
      var i = this.childAt(0);
      i.draggable = e, i.cursor = !n && e ? "move" : i.cursor;
    }, t.prototype.updateData = function(e, n, i, a) {
      this.silent = !1;
      var o = e.getItemVisual(n, "symbol") || "circle", s = e.hostModel, u = t.getSymbolSize(e, n), l = t.getSymbolZ2(e, n), f = o !== this._symbolType, h = a && a.disableAnimation;
      if (f) {
        var v = e.getItemVisual(n, "symbolKeepAspect");
        this._createSymbol(o, e, n, u, l, v);
      } else {
        var c = this.childAt(0);
        c.silent = !1;
        var d = {
          scaleX: u[0] / 2,
          scaleY: u[1] / 2
        };
        h ? c.attr(d) : kr(c, d, s, n), rC(c);
      }
      if (this._updateCommon(e, n, u, i, a), f) {
        var c = this.childAt(0);
        if (!h) {
          var d = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: {
              // Always fadeIn. Because it has fadeOut animation when symbol is removed..
              opacity: c.style.opacity
            }
          };
          c.scaleX = c.scaleY = 0, c.style.opacity = 0, ao(c, d, s, n);
        }
      }
      h && this.childAt(0).stopAnimation("leave");
    }, t.prototype._updateCommon = function(e, n, i, a, o) {
      var s = this.childAt(0), u = e.hostModel, l, f, h, v, c, d, p, m, g;
      if (a && (l = a.emphasisItemStyle, f = a.blurItemStyle, h = a.selectItemStyle, v = a.focus, c = a.blurScope, p = a.labelStatesModels, m = a.hoverScale, g = a.cursorStyle, d = a.emphasisDisabled), !a || e.hasItemOption) {
        var y = a && a.itemModel ? a.itemModel : e.getItemModel(n), _ = y.getModel("emphasis");
        l = _.getModel("itemStyle").getItemStyle(), h = y.getModel(["select", "itemStyle"]).getItemStyle(), f = y.getModel(["blur", "itemStyle"]).getItemStyle(), v = _.get("focus"), c = _.get("blurScope"), d = _.get("disabled"), p = Iv(y), m = _.getShallow("scale"), g = y.getShallow("cursor");
      }
      var S = e.getItemVisual(n, "symbolRotate");
      s.attr("rotation", (S || 0) * Math.PI / 180 || 0);
      var b = M_(e.getItemVisual(n, "symbolOffset"), i);
      b && (s.x = b[0], s.y = b[1]), g && s.attr("cursor", g);
      var x = e.getItemVisual(n, "style"), w = x.fill;
      if (s instanceof Hr) {
        var D = s.style;
        s.useStyle(B({
          // TODO other properties like x, y ?
          image: D.image,
          x: D.x,
          y: D.y,
          width: D.width,
          height: D.height
        }, x));
      } else
        s.__isEmptyBrush ? s.useStyle(B({}, x)) : s.useStyle(x), s.style.decal = null, s.setColor(w, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
      var C = e.getItemVisual(n, "liftZ"), M = this._z2;
      C != null ? M == null && (this._z2 = s.z2, s.z2 += C) : M != null && (s.z2 = M, this._z2 = null);
      var A = o && o.useNameLabel;
      Av(s, p, {
        labelFetcher: u,
        labelDataIndex: n,
        defaultText: L,
        inheritColor: w,
        defaultOpacity: x.opacity
      });
      function L(E) {
        return A ? e.getName(E) : D1(e, E);
      }
      this._sizeX = i[0] / 2, this._sizeY = i[1] / 2;
      var I = s.ensureState("emphasis");
      I.style = l, s.ensureState("select").style = h, s.ensureState("blur").style = f;
      var P = m == null || m === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(m) && m > 0 ? +m : 1;
      I.scaleX = this._sizeX * P, I.scaleY = this._sizeY * P, this.setSymbolScale(1), eh(this, v, c, d);
    }, t.prototype.setSymbolScale = function(e) {
      this.scaleX = this.scaleY = e;
    }, t.prototype.fadeOut = function(e, n, i) {
      var a = this.childAt(0), o = pt(this).dataIndex, s = i && i.animation;
      if (this.silent = a.silent = !0, i && i.fadeLabel) {
        var u = a.getTextContent();
        u && Us(u, {
          style: {
            opacity: 0
          }
        }, n, {
          dataIndex: o,
          removeOpt: s,
          cb: function() {
            a.removeTextContent();
          }
        });
      } else
        a.removeTextContent();
      Us(a, {
        style: {
          opacity: 0
        },
        scaleX: 0,
        scaleY: 0
      }, n, {
        dataIndex: o,
        cb: e,
        removeOpt: s
      });
    }, t.getSymbolSize = function(e, n) {
      return fA(e.getItemVisual(n, "symbolSize"));
    }, t.getSymbolZ2 = function(e, n) {
      return e.getItemVisual(n, "z2");
    }, t;
  })(Mt)
);
function YL(r, t) {
  this.parent.drift(r, t);
}
function jo(r, t, e, n) {
  return t && !isNaN(t[0]) && !isNaN(t[1]) && !(n && n.isIgnore && n.isIgnore(e)) && !(n && n.clipShape && !n.clipShape.contain(t[0], t[1])) && r.getItemVisual(e, "symbol") !== "none";
}
function kg(r) {
  return r != null && !Z(r) && (r = {
    isIgnore: r
  }), r || {};
}
function Bg(r) {
  var t = r.hostModel, e = t.getModel("emphasis");
  return {
    emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
    blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: e.get("focus"),
    blurScope: e.get("blurScope"),
    emphasisDisabled: e.get("disabled"),
    hoverScale: e.get("scale"),
    labelStatesModels: Iv(t),
    cursorStyle: t.get("cursor")
  };
}
function Ng(r, t, e, n, i, a, o) {
  var s = new r(t, e, n, i);
  return s.setPosition(a), t.setItemGraphicEl(e, s), o.add(s), s;
}
var ZL = (
  /** @class */
  (function() {
    function r(t) {
      this.group = new Mt(), this._SymbolCtor = t || uc;
    }
    return r.prototype.updateData = function(t, e) {
      this._progressiveEls = null, e = kg(e);
      var n = this.group, i = t.hostModel, a = this._data, o = this._SymbolCtor, s = e.disableAnimation, u = this._seriesScope = Bg(t), l = {
        disableAnimation: s
      }, f = e.getSymbolPoint || function(h) {
        return t.getItemLayout(h);
      };
      a || n.removeAll(), t.diff(a).add(function(h) {
        var v = f(h);
        jo(t, v, h, e) && Ng(o, t, h, u, l, v, n);
      }).update(function(h, v) {
        var c = a.getItemGraphicEl(v), d = f(h);
        if (!jo(t, d, h, e)) {
          n.remove(c);
          return;
        }
        var p = t.getItemVisual(h, "symbol") || "circle", m = c && c.getSymbolType && c.getSymbolType();
        if (!c || m && m !== p)
          n.remove(c), c = new o(t, h, u, l), c.setPosition(d);
        else {
          c.updateData(t, h, u, l);
          var g = {
            x: d[0],
            y: d[1]
          };
          s ? c.attr(g) : kr(c, g, i);
        }
        n.add(c), t.setItemGraphicEl(h, c);
      }).remove(function(h) {
        var v = a.getItemGraphicEl(h);
        v && v.fadeOut(function() {
          n.remove(v);
        }, i);
      }).execute(), this._getSymbolPoint = f, this._data = t;
    }, r.prototype.updateLayout = function(t) {
      var e = this._data;
      if (e)
        for (var n = this, i = e.getStore(), a = 0, o = i.count(); a < o; a++) {
          var s = e.getItemGraphicEl(a), u = n._getSymbolPoint(a);
          jo(e, u, a, t) ? (s = s || Ng(n._SymbolCtor, e, a, n._seriesScope, {
            disableAnimation: !0
          }, u, n.group), s.stopAnimation(), s.setPosition(u), s.markRedraw()) : s && (n.group.remove(s), e.setItemGraphicEl(a, null));
        }
    }, r.prototype.incrementalPrepareUpdate = function(t) {
      this._seriesScope = Bg(t), this._data = null, this.group.removeAll();
    }, r.prototype.incrementalUpdate = function(t, e, n, i) {
      this._progressiveEls = [], i = kg(i);
      function a(l) {
        l.isGroup || (l.incremental = n, l.ensureState("emphasis").hoverLayer = bv);
      }
      for (var o = t.start; o < t.end; o++) {
        var s = e.getItemLayout(o);
        if (jo(e, s, o, i)) {
          var u = new this._SymbolCtor(e, o, this._seriesScope);
          u.traverse(a), u.setPosition(s), this.group.add(u), e.setItemGraphicEl(o, u), this._progressiveEls.push(u);
        }
      }
    }, r.prototype.eachRendered = function(t) {
      Cv(this._progressiveEls || this.group, t);
    }, r.prototype.remove = function(t) {
      var e = this.group, n = this._data;
      n && t ? n.eachItemGraphicEl(function(i) {
        i.fadeOut(function() {
          e.remove(i);
        }, n.hostModel);
      }) : e.removeAll();
    }, r;
  })()
);
function A1(r, t, e) {
  var n = r.getBaseAxis(), i = r.getOtherAxis(n), a = XL(i, e), o = n.dim, s = i.dim, u = t.mapDimension(s), l = t.mapDimension(o), f = s === "x" || s === "radius" ? 1 : 0, h = U(r.dimensions, function(d) {
    return t.mapDimension(d);
  }), v = !1, c = t.getCalculationInfo("stackResultDimension");
  return Ga(
    t,
    h[0]
    /* , dims[1] */
  ) && (v = !0, h[0] = c), Ga(
    t,
    h[1]
    /* , dims[0] */
  ) && (v = !0, h[1] = c), {
    dataDimsForPoint: h,
    valueStart: a,
    valueAxisDim: s,
    baseAxisDim: o,
    stacked: !!v,
    valueDim: u,
    baseDim: l,
    baseDataOffset: f,
    stackedOverDimension: t.getCalculationInfo("stackedOverDimension")
  };
}
function XL(r, t) {
  var e = 0, n = r.scale.getExtent();
  return t === "start" ? e = n[0] : t === "end" ? e = n[1] : wt(t) && !isNaN(t) ? e = t : n[0] > 0 ? e = n[0] : n[1] < 0 && (e = n[1]), e;
}
function I1(r, t, e, n) {
  var i = NaN;
  r.stacked && (i = e.get(e.getCalculationInfo("stackedOverDimension"), n)), isNaN(i) && (i = r.valueStart);
  var a = r.baseDataOffset, o = [];
  return o[a] = e.get(r.baseDim, n), o[1 - a] = i, t.dataToPoint(o);
}
function we(r, t) {
  return !isFinite(r) || !isFinite(t);
}
var $L = typeof Float32Array !== ro ? Float32Array : void 0;
function oi(r) {
  return qL({
    ctor: $L
  }, r).arr;
}
function qL(r, t) {
  var e = r.arr, n = r.ctor;
  if (t > fd && (t = fd), !e || r.typed && e.length < t) {
    var i = void 0;
    if (n)
      try {
        i = new n(t), r.typed = !0, e && i.set(e);
      } catch {
      }
    if (!i && (i = [], r.typed = !1, e))
      for (var a = 0, o = e.length; a < o; a++)
        i[a] = e[a];
    r.arr = i;
  }
  return r;
}
function KL(r, t) {
  var e = [];
  return t.diff(r).add(function(n) {
    e.push({
      cmd: "+",
      idx: n
    });
  }).update(function(n, i) {
    e.push({
      cmd: "=",
      idx: i,
      idx1: n
    });
  }).remove(function(n) {
    e.push({
      cmd: "-",
      idx: n
    });
  }).execute(), e;
}
function QL(r, t, e, n, i, a, o, s) {
  for (var u = KL(r, t), l = [], f = [], h = [], v = [], c = [], d = [], p = [], m = A1(i, t, o), g = r.getLayout("points") || [], y = t.getLayout("points") || [], _ = 0; _ < u.length; _++) {
    var S = u[_], b = !0, x = void 0, w = void 0;
    switch (S.cmd) {
      case "=":
        x = S.idx * 2, w = S.idx1 * 2;
        var D = g[x], C = g[x + 1], M = y[w], A = y[w + 1];
        (isNaN(D) || isNaN(C)) && (D = M, C = A), l.push(D, C), f.push(M, A), h.push(e[x], e[x + 1]), v.push(n[w], n[w + 1]), p.push(t.getRawIndex(S.idx1));
        break;
      case "+":
        var L = S.idx, I = m.dataDimsForPoint, P = i.dataToPoint([t.get(I[0], L), t.get(I[1], L)]);
        w = L * 2, l.push(P[0], P[1]), f.push(y[w], y[w + 1]);
        var E = I1(m, i, t, L);
        h.push(E[0], E[1]), v.push(n[w], n[w + 1]), p.push(t.getRawIndex(L));
        break;
      case "-":
        b = !1;
    }
    b && (c.push(S), d.push(d.length));
  }
  d.sort(function(it, lt) {
    return p[it] - p[lt];
  });
  for (var R = l.length, F = oi(R), G = oi(R), W = oi(R), J = oi(R), q = [], _ = 0; _ < d.length; _++) {
    var rt = d[_], $ = _ * 2, H = rt * 2;
    F[$] = l[H], F[$ + 1] = l[H + 1], G[$] = f[H], G[$ + 1] = f[H + 1], W[$] = h[H], W[$ + 1] = h[H + 1], J[$] = v[H], J[$ + 1] = v[H + 1], q[_] = c[rt];
  }
  return {
    current: F,
    next: G,
    stackedOnCurrent: W,
    stackedOnNext: J,
    status: q
  };
}
var _r = Math.min, Sr = Math.max;
function Dh(r, t, e, n, i, a, o, s, u) {
  for (var l, f, h, v, c, d, p = e, m = 0; m < n; m++) {
    var g = t[p * 2], y = t[p * 2 + 1];
    if (p >= i || p < 0)
      break;
    if (we(g, y)) {
      if (u) {
        p += a;
        continue;
      }
      break;
    }
    if (p === e)
      r[a > 0 ? "moveTo" : "lineTo"](g, y), h = g, v = y;
    else {
      var _ = g - l, S = y - f;
      if (_ * _ + S * S < 0.5) {
        p += a;
        continue;
      }
      if (o > 0) {
        for (var b = p + a, x = t[b * 2], w = t[b * 2 + 1]; x === g && w === y && m < n; )
          m++, b += a, p += a, x = t[b * 2], w = t[b * 2 + 1], g = t[p * 2], y = t[p * 2 + 1], _ = g - l, S = y - f;
        var D = m + 1;
        if (u)
          for (; we(x, w) && D < n; )
            D++, b += a, x = t[b * 2], w = t[b * 2 + 1];
        var C = 0.5, M = 0, A = 0, L = void 0, I = void 0;
        if (D >= n || we(x, w))
          c = g, d = y;
        else {
          M = x - l, A = w - f;
          var P = g - l, E = x - g, R = y - f, F = w - y, G = void 0, W = void 0;
          if (s === "x") {
            G = Math.abs(P), W = Math.abs(E);
            var J = M > 0 ? 1 : -1;
            c = g - J * G * o, d = y, L = g + J * W * o, I = y;
          } else if (s === "y") {
            G = Math.abs(R), W = Math.abs(F);
            var q = A > 0 ? 1 : -1;
            c = g, d = y - q * G * o, L = g, I = y + q * W * o;
          } else
            G = Math.sqrt(P * P + R * R), W = Math.sqrt(E * E + F * F), C = W / (W + G), c = g - M * o * (1 - C), d = y - A * o * (1 - C), L = g + M * o * C, I = y + A * o * C, L = _r(L, Sr(x, g)), I = _r(I, Sr(w, y)), L = Sr(L, _r(x, g)), I = Sr(I, _r(w, y)), M = L - g, A = I - y, c = g - M * G / W, d = y - A * G / W, c = _r(c, Sr(l, g)), d = _r(d, Sr(f, y)), c = Sr(c, _r(l, g)), d = Sr(d, _r(f, y)), M = g - c, A = y - d, L = g + M * W / G, I = y + A * W / G;
        }
        r.bezierCurveTo(h, v, c, d, g, y), h = L, v = I;
      } else
        r.lineTo(g, y);
    }
    l = g, f = y, p += a;
  }
  return m;
}
var L1 = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return r;
  })()
), JL = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "ec-polyline", n;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: O.color.neutral99,
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new L1();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.points, a = 0, o = i.length / 2;
      if (n.connectNulls) {
        for (; o > 0 && we(i[o * 2 - 2], i[o * 2 - 1]); o--)
          ;
        for (; a < o && we(i[a * 2], i[a * 2 + 1]); a++)
          ;
      }
      for (; a < o; )
        a += Dh(e, i, a, o, o, 1, n.smooth, n.smoothMonotone, n.connectNulls) + 1;
    }, t.prototype.getPointOn = function(e, n) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var i = this.path, a = i.data, o = Dn.CMD, s, u, l = n === "x", f = [], h = 0; h < a.length; ) {
        var v = a[h++], c = void 0, d = void 0, p = void 0, m = void 0, g = void 0, y = void 0, _ = void 0;
        switch (v) {
          case o.M:
            s = a[h++], u = a[h++];
            break;
          case o.L:
            if (c = a[h++], d = a[h++], _ = l ? (e - s) / (c - s) : (e - u) / (d - u), _ <= 1 && _ >= 0) {
              var S = l ? (d - u) * _ + u : (c - s) * _ + s;
              return l ? [e, S] : [S, e];
            }
            s = c, u = d;
            break;
          case o.C:
            c = a[h++], d = a[h++], p = a[h++], m = a[h++], g = a[h++], y = a[h++];
            var b = l ? Ps(s, c, p, g, e, f) : Ps(u, d, m, y, e, f);
            if (b > 0)
              for (var x = 0; x < b; x++) {
                var w = f[x];
                if (w <= 1 && w >= 0) {
                  var S = l ? Bt(u, d, m, y, w) : Bt(s, c, p, g, w);
                  return l ? [e, S] : [S, e];
                }
              }
            s = g, u = y;
            break;
        }
      }
    }, t;
  })(yt)
), jL = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  })(L1)
), t2 = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "ec-polygon", n;
    }
    return t.prototype.getDefaultShape = function() {
      return new jL();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.points, a = n.stackedOnPoints, o = 0, s = i.length / 2, u = n.smoothMonotone;
      if (n.connectNulls) {
        for (; s > 0 && we(i[s * 2 - 2], i[s * 2 - 1]); s--)
          ;
        for (; o < s && we(i[o * 2], i[o * 2 + 1]); o++)
          ;
      }
      for (; o < s; ) {
        var l = Dh(e, i, o, s, s, 1, n.smooth, u, n.connectNulls);
        Dh(e, a, o + l - 1, l, s, -1, n.stackedOnSmooth, u, n.connectNulls), o += l + 1, e.closePath();
      }
    }, t;
  })(yt)
);
function e2(r, t, e, n, i) {
  var a = r.getArea(), o = a.x, s = a.y, u = a.width, l = a.height, f = e.get(["lineStyle", "width"]) || 0;
  o -= f / 2, s -= f / 2, u += f, l += f, u = Math.ceil(u), o !== Math.floor(o) && (o = Math.floor(o), u++);
  var h = new St({
    shape: {
      x: o,
      y: s,
      width: u,
      height: l
    }
  });
  if (t) {
    var v = r.getBaseAxis(), c = v.isHorizontal(), d = v.inverse;
    c ? (d && (h.shape.x += u), h.shape.width = 0) : (d || (h.shape.y += l), h.shape.height = 0);
    var p = Q(i) ? function(m) {
      i(m, h);
    } : null;
    ao(h, {
      shape: {
        width: u,
        height: l,
        x: o,
        y: s
      }
    }, e, null, n, p);
  }
  return h;
}
function r2(r, t, e) {
  var n = r.getArea(), i = st(n.r0, 1), a = st(n.r, 1), o = new Iu({
    shape: {
      cx: st(r.cx, 1),
      cy: st(r.cy, 1),
      r0: i,
      r: a,
      startAngle: n.startAngle,
      endAngle: n.endAngle,
      clockwise: n.clockwise
    }
  });
  if (t) {
    var s = r.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = n.startAngle : o.shape.r = i, ao(o, {
      shape: {
        endAngle: n.endAngle,
        r: a
      }
    }, e);
  }
  return o;
}
function n2(r, t) {
  return r.type === t;
}
function Fg(r, t) {
  if (r.length === t.length) {
    for (var e = 0; e < r.length; e++)
      if (r[e] !== t[e])
        return;
    return !0;
  }
}
function zg(r) {
  for (var t = Jt(), e = Jt(), n = 0; n < r.length; ) {
    var i = r[n++], a = r[n++];
    we(i, a) || (Xf(t, i), Xf(e, a));
  }
  return [t, e];
}
function Hg(r, t) {
  var e = zg(r), n = e[0], i = e[1], a = zg(t), o = a[0], s = a[1];
  return Math.max(Math.abs(n[0] - o[0]), Math.abs(i[0] - s[0]), Math.abs(n[1] - o[1]), Math.abs(i[1] - s[1]));
}
function Vg(r) {
  return wt(r) ? r : r ? 0.5 : 0;
}
function i2(r, t, e) {
  if (e.valueDim == null)
    return [];
  for (var n = t.count(), i = oi(n * 2), a = 0; a < n; a++) {
    var o = I1(e, r, t, a);
    i[a * 2] = o[0], i[a * 2 + 1] = o[1];
  }
  return i;
}
function br(r, t, e, n, i) {
  var a = e.getBaseAxis(), o = a.dim === "x" || a.dim === "radius" ? 0 : 1, s = [], u = 0, l = [], f = [], h = [], v = [];
  if (i) {
    for (u = 0; u < r.length; u += 2) {
      var c = t || r;
      we(c[u], c[u + 1]) || v.push(r[u], r[u + 1]);
    }
    r = v;
  }
  for (u = 0; u < r.length - 2; u += 2)
    switch (h[0] = r[u + 2], h[1] = r[u + 3], f[0] = r[u], f[1] = r[u + 1], s.push(f[0], f[1]), n) {
      case "end":
        l[o] = h[o], l[1 - o] = f[1 - o], s.push(l[0], l[1]);
        break;
      case "middle":
        var d = (f[o] + h[o]) / 2, p = [];
        l[o] = p[o] = d, l[1 - o] = f[1 - o], p[1 - o] = h[1 - o], s.push(l[0], l[1]), s.push(p[0], p[1]);
        break;
      default:
        l[o] = f[o], l[1 - o] = h[1 - o], s.push(l[0], l[1]);
    }
  return s.push(r[u++], r[u++]), s;
}
function a2(r, t) {
  var e = [], n = r.length, i, a;
  function o(f, h, v) {
    var c = f.coord, d = (v - c) / (h.coord - c), p = Wb(d, [f.color, h.color]);
    return {
      coord: v,
      color: p
    };
  }
  for (var s = 0; s < n; s++) {
    var u = r[s], l = u.coord;
    if (l < 0)
      i = u;
    else if (l > t) {
      a ? e.push(o(a, u, t)) : i && e.push(o(i, u, 0), o(i, u, t));
      break;
    } else
      i && (e.push(o(i, u, 0)), i = null), e.push(u), a = u;
  }
  return e;
}
function o2(r, t, e) {
  var n = r.getVisual("visualMeta");
  if (!(!n || !n.length || !r.count()) && t.type === "cartesian2d") {
    for (var i, a, o = n.length - 1; o >= 0; o--) {
      var s = r.getDimensionInfo(n[o].dimension);
      if (i = s && s.coordDim, i === "x" || i === "y") {
        a = n[o];
        break;
      }
    }
    if (a) {
      var u = t.getAxis(i), l = U(a.stops, function(_) {
        return {
          coord: u.toGlobalCoord(u.dataToCoord(_.value)),
          color: _.color
        };
      }), f = l.length, h = a.outerColors.slice();
      f && l[0].coord > l[f - 1].coord && (l.reverse(), h.reverse());
      var v = a2(l, i === "x" ? e.getWidth() : e.getHeight()), c = v.length;
      if (!c && f)
        return l[0].coord < 0 ? h[1] ? h[1] : l[f - 1].color : h[0] ? h[0] : l[0].color;
      var d = 10, p = v[0].coord - d, m = v[c - 1].coord + d, g = m - p;
      if (g < 1e-3)
        return "transparent";
      T(v, function(_) {
        _.offset = (_.coord - p) / g;
      }), v.push({
        // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
        offset: c ? v[c - 1].offset : 0.5,
        color: h[1] || "transparent"
      }), v.unshift({
        offset: c ? v[0].offset : 0.5,
        color: h[0] || "transparent"
      });
      var y = new d0(0, 0, 0, 0, v, !0);
      return y[i] = p, y[i + "2"] = m, y;
    }
  }
}
function s2(r, t, e) {
  var n = r.get("showAllSymbol"), i = n === "auto";
  if (!(n && !i)) {
    var a = e.getAxesByScale("ordinal")[0];
    if (a && !(i && u2(a, t))) {
      var o = t.mapDimension(a.dim), s = {};
      return T(a.getViewLabels(), function(u) {
        u.tick.offInterval || (s[ho(a.scale, u.tick)] = 1);
      }), function(u) {
        return !s.hasOwnProperty(t.get(o, u));
      };
    }
  }
}
function u2(r, t) {
  var e = r.getExtent(), n = Math.abs(e[1] - e[0]) / r.scale.count();
  isNaN(n) && (n = 0);
  for (var i = t.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a)
    if (uc.getSymbolSize(
      t,
      o
      // Only for cartesian, where `isHorizontal` exists.
    )[r.isHorizontal() ? 1 : 0] * 1.5 > n)
      return !1;
  return !0;
}
function l2(r) {
  for (var t = r.length / 2; t > 0 && we(r[t * 2 - 2], r[t * 2 - 1]); t--)
    ;
  return t - 1;
}
function Gg(r, t) {
  return [r[t * 2], r[t * 2 + 1]];
}
function f2(r, t, e) {
  for (var n = r.length / 2, i = e === "x" ? 0 : 1, a, o, s = 0, u = -1, l = 0; l < n; l++)
    if (o = r[l * 2 + i], !we(o, r[l * 2 + 1 - i])) {
      if (l === 0) {
        a = o;
        continue;
      }
      if (a <= t && o >= t || a >= t && o <= t) {
        u = l;
        break;
      }
      s = l, a = o;
    }
  return {
    range: [s, u],
    t: (t - a) / (o - a)
  };
}
function P1(r) {
  if (r.get(["endLabel", "show"]))
    return !0;
  for (var t = 0; t < Qe.length; t++)
    if (r.get([Qe[t], "endLabel", "show"]))
      return !0;
  return !1;
}
function af(r, t, e, n) {
  if (n2(t, "cartesian2d")) {
    var i = n.getModel("endLabel"), a = i.get("valueAnimation"), o = n.getData(), s = {
      lastFrameIndex: 0
    }, u = P1(n) ? function(c, d) {
      r._endLabelOnDuring(c, d, o, s, a, i, t);
    } : null, l = t.getBaseAxis().isHorizontal(), f = e2(t, e, n, function() {
      var c = r._endLabel;
      c && e && s.originalX != null && c.attr({
        x: s.originalX,
        y: s.originalY
      });
    }, u);
    if (!n.get("clip", !0)) {
      var h = f.shape, v = Math.max(h.width, h.height);
      l ? (h.y -= v, h.height += v * 2) : (h.x -= v, h.width += v * 2);
    }
    return u && u(1, f), f;
  } else
    return r2(t, e, n);
}
function h2(r, t) {
  var e = t.getBaseAxis(), n = e.isHorizontal(), i = e.inverse, a = n ? i ? "right" : "left" : "center", o = n ? "middle" : i ? "top" : "bottom";
  return {
    normal: {
      align: r.get("align") || a,
      verticalAlign: r.get("verticalAlign") || o
    }
  };
}
var v2 = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function() {
      var e = new Mt(), n = new ZL();
      this.group.add(n.group), this._symbolDraw = n, this._lineGroup = e, this._changePolyState = K(this._changePolyState, this);
    }, t.prototype.render = function(e, n, i) {
      var a = e.coordinateSystem, o = this.group, s = e.getData(), u = e.getModel("lineStyle"), l = e.getModel("areaStyle"), f = s.getLayout("points") || [], h = a.type === "polar", v = this._coordSys, c = this._symbolDraw, d = this._polyline, p = this._polygon, m = this._lineGroup, g = !n.ssr && e.get("animation"), y = !l.isEmpty(), _ = l.get("origin"), S = A1(a, s, _), b = y && i2(a, s, S), x = e.get("showSymbol"), w = e.get("connectNulls"), D = x && !h && s2(e, s, a), C = this._data;
      C && C.eachItemGraphicEl(function(bt, Lt) {
        bt.__temp && (o.remove(bt), C.setItemGraphicEl(Lt, null));
      }), x || c.remove(), o.add(m);
      var M = h ? !1 : e.get("step"), A;
      a && a.getArea && e.get("clip", !0) && (A = a.getArea(), A.width != null ? (A.x -= 0.1, A.y -= 0.1, A.width += 0.2, A.height += 0.2) : A.r0 && (A.r0 -= 0.5, A.r += 0.5)), this._clipShapeForSymbol = A;
      var L = o2(s, a, i) || s.getVisual("style")[s.getVisual("drawType")];
      if (!(d && v.type === a.type && M === this._step))
        x && c.updateData(s, {
          isIgnore: D,
          clipShape: A,
          disableAnimation: !0,
          getSymbolPoint: function(bt) {
            return [f[bt * 2], f[bt * 2 + 1]];
          }
        }), g && this._initSymbolLabelAnimation(s, a, A), M && (b && (b = br(b, f, a, M, w)), f = br(f, null, a, M, w)), d = this._newPolyline(f), y ? p = this._newPolygon(f, b) : p && (m.remove(p), p = this._polygon = null), h || this._initOrUpdateEndLabel(e, a, An(L)), m.setClipPath(af(this, a, !0, e));
      else {
        y && !p ? p = this._newPolygon(f, b) : p && !y && (m.remove(p), p = this._polygon = null), h || this._initOrUpdateEndLabel(e, a, An(L));
        var I = m.getClipPath();
        if (I) {
          var P = af(this, a, !1, e);
          ao(I, {
            shape: P.shape
          }, e);
        } else
          m.setClipPath(af(this, a, !0, e));
        x && c.updateData(s, {
          isIgnore: D,
          clipShape: A,
          disableAnimation: !0,
          getSymbolPoint: function(bt) {
            return [f[bt * 2], f[bt * 2 + 1]];
          }
        }), (!Fg(this._stackedOnPoints, b) || !Fg(this._points, f)) && (g ? this._doUpdateAnimation(s, b, a, i, M, _, w) : (M && (b && (b = br(b, f, a, M, w)), f = br(f, null, a, M, w)), d.setShape({
          points: f
        }), p && p.setShape({
          points: f,
          stackedOnPoints: b
        })));
      }
      var E = e.getModel("emphasis"), R = E.get("focus"), F = E.get("blurScope"), G = E.get("disabled");
      if (d.useStyle(ut(
        // Use color in lineStyle first
        u.getLineStyle(),
        {
          fill: "none",
          stroke: L,
          lineJoin: "bevel"
        }
      )), Ud(d, e, "lineStyle"), d.style.lineWidth > 0 && e.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var W = d.getState("emphasis").style;
        W.lineWidth = +d.style.lineWidth + 1;
      }
      pt(d).seriesIndex = e.seriesIndex, eh(d, R, F, G);
      var J = Vg(e.get("smooth")), q = e.get("smoothMonotone");
      if (d.setShape({
        smooth: J,
        smoothMonotone: q,
        connectNulls: w
      }), p) {
        var rt = s.getCalculationInfo("stackedOnSeries"), $ = 0;
        p.useStyle(ut(l.getAreaStyle(), {
          fill: L,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: s.getVisual("style").decal
        })), rt && ($ = Vg(rt.get("smooth"))), p.setShape({
          smooth: J,
          stackedOnSmooth: $,
          smoothMonotone: q,
          connectNulls: w
        }), Ud(p, e, "areaStyle"), pt(p).seriesIndex = e.seriesIndex, eh(p, R, F, G);
      }
      var H = this._changePolyState;
      s.eachItemGraphicEl(function(bt) {
        bt && (bt.onHoverStateChange = H);
      }), this._polyline.onHoverStateChange = H, this._data = s, this._coordSys = a, this._stackedOnPoints = b, this._points = f, this._step = M, this._valueOrigin = _;
      var it = e.get("triggerEvent"), lt = e.get("triggerLineEvent"), Ut = lt === !0 || it === !0 || it === "line", Me = lt === !0 || it === !0 || it === "area";
      this.packEventData(e, d, Ut), p && this.packEventData(e, p, Me);
    }, t.prototype.packEventData = function(e, n, i) {
      pt(n).eventData = i ? {
        componentType: "series",
        componentSubType: "line",
        componentIndex: e.componentIndex,
        seriesIndex: e.seriesIndex,
        seriesName: e.name,
        seriesType: "line",
        // for determining this event is triggered by area or line
        selfType: n === this._polygon ? "area" : "line"
      } : null;
    }, t.prototype.highlight = function(e, n, i, a) {
      var o = e.getData(), s = Mn(o, a);
      if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
        var u = o.getLayout("points"), l = o.getItemGraphicEl(s);
        if (!l) {
          var f = u[s * 2], h = u[s * 2 + 1];
          if (we(f, h) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(f, h))
            return;
          var v = e.get("zlevel") || 0, c = e.get("z") || 0;
          l = new uc(o, s), l.x = f, l.y = h, l.setZ(v, c);
          var d = l.getSymbolPath().getTextContent();
          d && (d.zlevel = v, d.z = c, d.z2 = this._polyline.z2 + 1), l.__temp = !0, o.setItemGraphicEl(s, l), l.stopSymbolAnimation(!0), this.group.add(l);
        }
        l.highlight();
      } else
        $e.prototype.highlight.call(this, e, n, i, a);
    }, t.prototype.downplay = function(e, n, i, a) {
      var o = e.getData(), s = Mn(o, a);
      if (this._changePolyState("normal"), s != null && s >= 0) {
        var u = o.getItemGraphicEl(s);
        u && (u.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(u)) : u.downplay());
      } else
        $e.prototype.downplay.call(this, e, n, i, a);
    }, t.prototype._changePolyState = function(e) {
      var n = this._polygon;
      Fd(this._polyline, e), n && Fd(n, e);
    }, t.prototype._newPolyline = function(e) {
      var n = this._polyline;
      return n && this._lineGroup.remove(n), n = new JL({
        shape: {
          points: e
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(n), this._polyline = n, n;
    }, t.prototype._newPolygon = function(e, n) {
      var i = this._polygon;
      return i && this._lineGroup.remove(i), i = new t2({
        shape: {
          points: e,
          stackedOnPoints: n
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(i), this._polygon = i, i;
    }, t.prototype._initSymbolLabelAnimation = function(e, n, i) {
      var a, o, s = n.getBaseAxis(), u = s.inverse;
      n.type === "cartesian2d" ? (a = s.isHorizontal(), o = !1) : n.type === "polar" && (a = s.dim === "angle", o = !0);
      var l = e.hostModel, f = l.get("animationDuration");
      Q(f) && (f = f(null));
      var h = l.get("animationDelay") || 0, v = Q(h) ? h(null) : h;
      e.eachItemGraphicEl(function(c, d) {
        var p = c;
        if (p) {
          var m = [c.x, c.y], g = void 0, y = void 0, _ = void 0;
          if (i)
            if (o) {
              var S = i, b = n.pointToCoord(m);
              a ? (g = S.startAngle, y = S.endAngle, _ = -b[1] / 180 * Math.PI) : (g = S.r0, y = S.r, _ = b[0]);
            } else {
              var x = i;
              a ? (g = x.x, y = x.x + x.width, _ = c.x) : (g = x.y + x.height, y = x.y, _ = c.y);
            }
          var w = y === g ? 0 : (_ - g) / (y - g);
          u && (w = 1 - w);
          var D = Q(h) ? h(d) : f * w + v, C = p.getSymbolPath(), M = C.getTextContent();
          p.attr({
            scaleX: 0,
            scaleY: 0
          }), p.animateTo({
            scaleX: 1,
            scaleY: 1
          }, {
            duration: 200,
            setToFinal: !0,
            delay: D
          }), M && M.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: D
          }), C.disableLabelAnimation = !0;
        }
      });
    }, t.prototype._initOrUpdateEndLabel = function(e, n, i) {
      var a = e.getModel("endLabel");
      if (P1(e)) {
        var o = e.getData(), s = this._polyline, u = o.getLayout("points");
        if (!u) {
          s.removeTextContent(), this._endLabel = null;
          return;
        }
        var l = this._endLabel;
        l || (l = this._endLabel = new Rt({
          z2: 200
          // should be higher than item symbol
        }), l.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
        var f = l2(u);
        f >= 0 && (Av(s, Iv(e, "endLabel"), {
          inheritColor: i,
          labelFetcher: e,
          labelDataIndex: f,
          defaultText: function(h, v, c) {
            return c != null ? WL(o, c) : D1(o, h);
          },
          enableTextSetter: !0
        }, h2(a, n)), s.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, t.prototype._endLabelOnDuring = function(e, n, i, a, o, s, u) {
      var l = this._endLabel, f = this._polyline;
      if (l) {
        e < 1 && a.originalX == null && (a.originalX = l.x, a.originalY = l.y);
        var h = i.getLayout("points"), v = i.hostModel, c = v.get("connectNulls"), d = s.get("precision"), p = s.get("distance") || 0, m = u.getBaseAxis(), g = m.isHorizontal(), y = m.inverse, _ = n.shape, S = y ? g ? _.x : _.y + _.height : g ? _.x + _.width : _.y, b = (g ? p : 0) * (y ? -1 : 1), x = (g ? 0 : -p) * (y ? -1 : 1), w = g ? "x" : "y", D = f2(h, S, w), C = D.range, M = C[1] - C[0], A = void 0;
        if (M >= 1) {
          if (M > 1 && !c) {
            var L = Gg(h, C[0]);
            l.attr({
              x: L[0] + b,
              y: L[1] + x
            }), o && (A = v.getRawValue(C[0]));
          } else {
            var L = f.getPointOn(S, w);
            L && l.attr({
              x: L[0] + b,
              y: L[1] + x
            });
            var I = v.getRawValue(C[0]), P = v.getRawValue(C[1]);
            o && (A = Zx(i, d, I, P, D.t));
          }
          a.lastFrameIndex = C[0];
        } else {
          var E = e === 1 || a.lastFrameIndex > 0 ? C[0] : 0, L = Gg(h, E);
          o && (A = v.getRawValue(E)), l.attr({
            x: L[0] + b,
            y: L[1] + x
          });
        }
        if (o) {
          var R = A0(l);
          typeof R.setLabelText == "function" && R.setLabelText(A);
        }
      }
    }, t.prototype._doUpdateAnimation = function(e, n, i, a, o, s, u) {
      var l = this._polyline, f = this._polygon, h = e.hostModel, v = QL(this._data, e, this._stackedOnPoints, n, this._coordSys, i, this._valueOrigin), c = v.current, d = v.stackedOnCurrent, p = v.next, m = v.stackedOnNext;
      if (o && (d = br(v.stackedOnCurrent, v.current, i, o, u), c = br(v.current, null, i, o, u), m = br(v.stackedOnNext, v.next, i, o, u), p = br(v.next, null, i, o, u)), Hg(c, p) > 3e3 || f && Hg(d, m) > 3e3) {
        l.stopAnimation(), l.setShape({
          points: p
        }), f && (f.stopAnimation(), f.setShape({
          points: p,
          stackedOnPoints: m
        }));
        return;
      }
      l.shape.__points = v.current, l.shape.points = c;
      var g = {
        shape: {
          points: p
        }
      };
      v.current !== c && (g.shape.__points = v.next), l.stopAnimation(), kr(l, g, h), f && (f.setShape({
        // Reuse the points with polyline.
        points: c,
        stackedOnPoints: d
      }), f.stopAnimation(), kr(f, {
        shape: {
          stackedOnPoints: m
        }
      }, h), l.shape.points !== f.shape.points && (f.shape.points = l.shape.points));
      for (var y = [], _ = v.status, S = 0; S < _.length; S++) {
        var b = _[S].cmd;
        if (b === "=") {
          var x = e.getItemGraphicEl(_[S].idx1);
          x && y.push({
            el: x,
            ptIdx: S
            // Index of points
          });
        }
      }
      l.animators && l.animators.length && l.animators[0].during(function() {
        f && f.dirtyShape();
        for (var w = l.shape.__points, D = 0; D < y.length; D++) {
          var C = y[D].el, M = y[D].ptIdx * 2;
          C.x = w[M], C.y = w[M + 1], C.markRedraw();
        }
      });
    }, t.prototype.remove = function(e) {
      var n = this.group, i = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function(a, o) {
        a.__temp && (n.remove(a), i.setItemGraphicEl(o, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, t.type = "line", t;
  })($e)
);
function c2(r, t) {
  return {
    seriesType: r,
    plan: p_(),
    reset: function(e) {
      var n = e.getData(), i = e.coordinateSystem;
      if (e.pipelineContext, !!i) {
        var a = U(i.dimensions, function(h) {
          return n.mapDimension(h);
        }).slice(0, 2), o = a.length, s = n.getCalculationInfo("stackResultDimension");
        Ga(n, a[0]) && (a[0] = s), Ga(n, a[1]) && (a[1] = s);
        var u = n.getStore(), l = n.getDimensionIndex(a[0]), f = n.getDimensionIndex(a[1]);
        return o && {
          progress: function(h, v) {
            for (var c = h.end - h.start, d = oi(c * o), p = [], m = [], g = h.start, y = 0; g < h.end; g++) {
              var _ = void 0;
              if (o === 1) {
                var S = u.get(l, g);
                _ = i.dataToPoint(S, null, m);
              } else
                p[0] = u.get(l, g), p[1] = u.get(f, g), _ = i.dataToPoint(p, null, m);
              d[y++] = _[0], d[y++] = _[1];
            }
            v.setLayout("points", d), v.setLayout("pointsRange", {
              start: h.start,
              end: h.end
            });
          }
        };
      }
    }
  };
}
var d2 = {
  average: function(r) {
    for (var t = 0, e = 0, n = 0; n < r.length; n++)
      isNaN(r[n]) || (t += r[n], e++);
    return e === 0 ? NaN : t / e;
  },
  sum: function(r) {
    for (var t = 0, e = 0; e < r.length; e++)
      t += r[e] || 0;
    return t;
  },
  max: function(r) {
    for (var t = -1 / 0, e = 0; e < r.length; e++)
      r[e] > t && (t = r[e]);
    return isFinite(t) ? t : NaN;
  },
  min: function(r) {
    for (var t = 1 / 0, e = 0; e < r.length; e++)
      r[e] < t && (t = r[e]);
    return isFinite(t) ? t : NaN;
  },
  // TODO
  // Median
  nearest: function(r) {
    return r[0];
  }
}, p2 = function(r) {
  return Math.round(r.length / 2);
};
function g2(r) {
  return {
    seriesType: r,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(t, e, n) {
      var i = t.getData(), a = t.get("sampling"), o = t.coordinateSystem, s = i.count();
      if (s > 10 && o.type === "cartesian2d" && a) {
        var u = o.getBaseAxis(), l = o.getOtherAxis(u), f = u.getExtent(), h = n.getDevicePixelRatio(), v = Math.abs(f[1] - f[0]) * (h || 1), c = Math.round(s / v);
        if (isFinite(c) && c > 1) {
          a === "lttb" ? t.setData(i.lttbDownSample(i.mapDimension(l.dim), 1 / c)) : a === "minmax" && t.setData(i.minmaxDownSample(i.mapDimension(l.dim), 1 / c));
          var d = void 0;
          V(a) ? d = d2[a] : Q(a) && (d = a), d && t.setData(i.downSample(i.mapDimension(l.dim), 1 / c, d, p2));
        }
      }
    }
  };
}
function m2(r) {
  r.registerChartView(v2), r.registerSeriesModel(UL), r.registerLayout(c2("line")), r.registerVisual({
    seriesType: "line",
    reset: function(t) {
      var e = t.getData(), n = t.getModel("lineStyle").getLineStyle();
      n && !n.stroke && (n.stroke = e.getVisual("style").fill), e.setVisual("legendLineStyle", n);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, g2("line"));
}
var y2 = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e, n, i, a, o) {
      var s = r.call(this, e, n, i) || this;
      return s.index = 0, s.type = a || "value", s.position = o || "bottom", s;
    }
    return t.prototype.isHorizontal = function() {
      var e = this.position;
      return e === "top" || e === "bottom";
    }, t.prototype.getGlobalExtent = function(e) {
      var n = this.getExtent();
      return n[0] = this.toGlobalCoord(n[0]), n[1] = this.toGlobalCoord(n[1]), e && n[0] > n[1] && n.reverse(), n;
    }, t.prototype.pointToData = function(e, n) {
      return this.coordToData(this.toLocalCoord(e[this.dim === "x" ? 0 : 1]), n);
    }, t.prototype.setCategorySortInfo = function(e) {
      if (this.type !== "category")
        return !1;
      this.model.option.categorySortInfo = e, this.scale.setSortInfo(e);
    }, t;
  })(BL)
), _2 = null;
function S2() {
  return _2;
}
var b2 = "expandAxisBreak", Dr = Math.PI, x2 = [[1, 2, 1, 2], [5, 3, 5, 3], [8, 3, 8, 3]], w2 = [[0, 1, 0, 1], [0, 3, 0, 3], [0, 3, 0, 3]], Mi = vt(), R1 = vt(), E1 = (
  /** @class */
  (function() {
    function r(t) {
      this.recordMap = {}, this.resolveAxisNameOverlap = t;
    }
    return r.prototype.ensureRecord = function(t) {
      var e = t.axis.dim, n = t.componentIndex, i = this.recordMap, a = i[e] || (i[e] = []);
      return a[n] || (a[n] = {
        ready: {}
      });
    }, r;
  })()
);
function T2(r, t, e, n) {
  var i = e.axis, a = t.ensureRecord(e), o = [], s, u = lc(r.axisName) && Ci(r.nameLocation);
  T(n, function(d) {
    var p = zr(d);
    if (!(!p || p.label.ignore)) {
      o.push(p);
      var m = a.transGroup;
      u && (m.transform ? Qa(Ji, m.transform) : Ka(Ji), p.transform && pa(Ji, Ji, p.transform), j.copy(ts, p.localRect), ts.applyTransform(Ji), s ? s.union(ts) : j.copy(s = new j(0, 0, 0, 0), ts));
    }
  });
  var l = Math.abs(a.dirVec.x) > 0.1 ? "x" : "y", f = a.transGroup[l];
  if (o.sort(function(d, p) {
    return Math.abs(d.label[l] - f) - Math.abs(p.label[l] - f);
  }), u && s) {
    var h = i.getExtent(), v = Math.min(h[0], h[1]), c = Math.max(h[0], h[1]) - v;
    s.union(new j(v, 0, c, 1));
  }
  a.stOccupiedRect = s, a.labelInfoList = o;
}
var Ji = te(), ts = new j(0, 0, 0, 0), O1 = function(r, t, e, n, i, a) {
  if (Ci(r.nameLocation)) {
    var o = a.stOccupiedRect;
    o && k1(HL({}, o, a.transGroup.transform), n, i);
  } else
    B1(a.labelInfoList, a.dirVec, n, i);
};
function k1(r, t, e) {
  var n = new mt();
  sc(r, t, n, {
    direction: Math.atan2(e.y, e.x),
    bidirectional: !1,
    touchThreshold: 0.05
  }) && VL(t, n);
}
function B1(r, t, e, n) {
  for (var i = mt.dot(n, t) >= 0, a = 0, o = r.length; a < o; a++) {
    var s = r[i ? a : o - 1 - a];
    s.label.ignore || k1(s, e, n);
  }
}
var Rr = (
  /** @class */
  (function() {
    function r(t, e, n, i) {
      this.group = new Mt(), this._axisModel = t, this._api = e, this._local = {}, this._shared = i || new E1(O1), this._resetCfgDetermined(n);
    }
    return r.prototype.updateCfg = function(t) {
      var e = this._cfg.raw;
      e.position = t.position, e.labelOffset = t.labelOffset, this._resetCfgDetermined(e);
    }, r.prototype.__getRawCfg = function() {
      return this._cfg.raw;
    }, r.prototype._resetCfgDetermined = function(t) {
      var e = this._axisModel, n = e.getDefaultOption ? e.getDefaultOption() : {}, i = X(t.axisName, e.get("name")), a = e.get("nameMoveOverlap");
      (a == null || a === "auto") && (a = X(t.defaultNameMoveOverlap, !0));
      var o = {
        raw: t,
        position: t.position,
        rotation: t.rotation,
        nameDirection: X(t.nameDirection, 1),
        tickDirection: X(t.tickDirection, 1),
        labelDirection: X(t.labelDirection, 1),
        labelOffset: X(t.labelOffset, 0),
        silent: X(t.silent, !0),
        axisName: i,
        nameLocation: si(e.get("nameLocation"), n.nameLocation, "end"),
        shouldNameMoveOverlap: lc(i) && a,
        optionHideOverlap: e.get(["axisLabel", "hideOverlap"]),
        showMinorTicks: e.get(["minorTick", "show"])
      };
      this._cfg = o;
      var s = new Mt({
        x: o.position[0],
        y: o.position[1],
        rotation: o.rotation
      });
      s.updateTransform(), this._transformGroup = s;
      var u = this._shared.ensureRecord(e);
      u.transGroup = this._transformGroup, u.dirVec = new mt(Math.cos(-o.rotation), Math.sin(-o.rotation));
    }, r.prototype.build = function(t, e) {
      var n = this;
      return t || (t = {
        axisLine: !0,
        axisTickLabelEstimate: !1,
        axisTickLabelDetermine: !0,
        axisName: !0
      }), T(C2, function(i) {
        t[i] && M2[i](n._cfg, n._local, n._shared, n._axisModel, n.group, n._transformGroup, n._api, e || {});
      }), this;
    }, r.innerTextLayout = function(t, e, n) {
      var i = Cy(e - t), a, o;
      return Ns(i) ? (o = n > 0 ? "top" : "bottom", a = "center") : Ns(i - Dr) ? (o = n > 0 ? "bottom" : "top", a = "center") : (o = "middle", i > 0 && i < Dr ? a = n > 0 ? "right" : "left" : a = n > 0 ? "left" : "right"), {
        rotation: i,
        textAlign: a,
        textVerticalAlign: o
      };
    }, r.makeAxisEventDataBase = function(t) {
      var e = {
        componentType: t.mainType,
        componentIndex: t.componentIndex
      };
      return e[t.mainType + "Index"] = t.componentIndex, e;
    }, r.isLabelSilent = function(t) {
      var e = t.get("tooltip");
      return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
    }, r;
  })()
), C2 = ["axisLine", "axisTickLabelEstimate", "axisTickLabelDetermine", "axisName"], M2 = {
  axisLine: function(r, t, e, n, i, a, o) {
    var s = n.get(["axisLine", "show"]);
    if (s === "auto" && (s = !0, r.raw.axisLineAutoShow != null && (s = !!r.raw.axisLineAutoShow)), !!s) {
      var u = n.axis.getExtent(), l = a.transform, f = [u[0], 0], h = [u[1], 0], v = f[0] > h[0];
      l && (re(f, f, l), re(h, h, l));
      var c = B({
        lineCap: "round"
      }, n.getModel(["axisLine", "lineStyle"]).getLineStyle()), d = {
        strokeContainThreshold: r.raw.strokeContainThreshold || 5,
        silent: !0,
        z2: 1,
        style: c
      };
      if (n.get(["axisLine", "breakLine"]) && Zs(n.axis.scale))
        S2().buildAxisBreakLine(n, i, a, d);
      else {
        var p = new Or(B({
          shape: {
            x1: f[0],
            y1: f[1],
            x2: h[0],
            y2: h[1]
          }
        }, d));
        Oa(p.shape, p.style.lineWidth), p.anid = "line", i.add(p);
      }
      var m = n.get(["axisLine", "symbol"]);
      if (m != null) {
        var g = n.get(["axisLine", "symbolSize"]);
        V(m) && (m = [m, m]), (V(g) || wt(g)) && (g = [g, g]);
        var y = M_(n.get(["axisLine", "symbolOffset"]) || 0, g), _ = g[0], S = g[1];
        T([{
          rotate: r.rotation + Math.PI / 2,
          offset: y[0],
          r: 0
        }, {
          rotate: r.rotation - Math.PI / 2,
          offset: y[1],
          r: Math.sqrt((f[0] - h[0]) * (f[0] - h[0]) + (f[1] - h[1]) * (f[1] - h[1]))
        }], function(b, x) {
          if (m[x] !== "none" && m[x] != null) {
            var w = Fr(m[x], -_ / 2, -S / 2, _, S, c.stroke, !0), D = b.r + b.offset, C = v ? h : f;
            w.attr({
              rotation: b.rotate,
              x: C[0] + D * Math.cos(r.rotation),
              y: C[1] - D * Math.sin(r.rotation),
              silent: !0,
              z2: 11
            }), i.add(w);
          }
        });
      }
    }
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisTickLabelEstimate: function(r, t, e, n, i, a, o, s) {
    var u = Wg(t, i, s);
    u && Ug(r, t, e, n, i, a, o, Pe.estimate);
  },
  /**
   * Finish axis tick label build.
   * Can be only called once.
   */
  axisTickLabelDetermine: function(r, t, e, n, i, a, o, s) {
    var u = Wg(t, i, s);
    u && Ug(r, t, e, n, i, a, o, Pe.determine);
    var l = L2(r, i, a, n);
    I2(r, t.labelLayoutList, l), P2(r, i, a, n, r.tickDirection);
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisName: function(r, t, e, n, i, a, o, s) {
    var u = e.ensureRecord(n);
    t.nameEl && (i.remove(t.nameEl), t.nameEl = u.nameLayout = u.nameLocation = null);
    var l = r.axisName;
    if (lc(l)) {
      var f = r.nameLocation, h = r.nameDirection, v = n.getModel("nameTextStyle"), c = n.get("nameGap") || 0, d = n.axis.getExtent(), p = n.axis.inverse ? -1 : 1, m = new mt(0, 0), g = new mt(0, 0);
      f === "start" ? (m.x = d[0] - p * c, g.x = -p) : f === "end" ? (m.x = d[1] + p * c, g.x = p) : (m.x = (d[0] + d[1]) / 2, m.y = r.labelOffset + h * c, g.y = h);
      var y = te();
      g.transform(jh(y, y, r.rotation));
      var _ = n.get("nameRotate");
      _ != null && (_ = _ * Dr / 180);
      var S, b;
      Ci(f) ? S = Rr.innerTextLayout(
        r.rotation,
        _ ?? r.rotation,
        // Adapt to axis.
        h
      ) : (S = D2(r.rotation, f, _ || 0, d), b = r.raw.axisNameAvailableWidth, b != null && (b = Math.abs(b / Math.sin(S.rotation)), !isFinite(b) && (b = null)));
      var x = v.getFont(), w = n.get("nameTruncate", !0) || {}, D = w.ellipsis, C = Ds(r.raw.nameTruncateMaxWidth, w.maxWidth, b), M = s.nameMarginLevel || 0, A = new Rt({
        x: m.x,
        y: m.y,
        rotation: S.rotation,
        silent: Rr.isLabelSilent(n),
        style: hr(v, {
          text: l,
          font: x,
          overflow: "truncate",
          width: C,
          ellipsis: D,
          fill: v.getTextColor() || n.get(["axisLine", "lineStyle", "color"]),
          align: v.get("align") || S.textAlign,
          verticalAlign: v.get("verticalAlign") || S.textVerticalAlign
        }),
        z2: 1
      });
      if (oo({
        el: A,
        componentModel: n,
        itemName: l
      }), A.__fullText = l, A.anid = "name", n.get("triggerEvent")) {
        var L = Rr.makeAxisEventDataBase(n);
        L.targetType = "axisName", L.name = l, pt(A).eventData = L;
      }
      a.add(A), A.updateTransform(), t.nameEl = A;
      var I = u.nameLayout = zr({
        label: A,
        priority: A.z2,
        defaultAttr: {
          ignore: A.ignore
        },
        marginDefault: Ci(f) ? x2[M] : w2[M]
      });
      if (u.nameLocation = f, i.add(A), A.decomposeTransform(), r.shouldNameMoveOverlap && I) {
        var P = e.ensureRecord(n);
        e.resolveAxisNameOverlap(r, e, n, I, g, P);
      }
    }
  }
};
function Ug(r, t, e, n, i, a, o, s) {
  F1(t) || R2(r, t, i, s, n, o);
  var u = t.labelLayoutList;
  E2(r, n, u, a), r.rotation;
  var l = r.optionHideOverlap;
  A2(n, u, l), l && GL(
    // Filter the already ignored labels by the previous overlap resolving methods.
    kt(u, function(f) {
      return f && !f.label.ignore;
    })
  ), T2(r, e, n, u);
}
function D2(r, t, e, n) {
  var i = Cy(e - r), a, o, s = n[0] > n[1], u = t === "start" && !s || t !== "start" && s;
  return Ns(i - Dr / 2) ? (o = u ? "bottom" : "top", a = "center") : Ns(i - Dr * 1.5) ? (o = u ? "top" : "bottom", a = "center") : (o = "middle", i < Dr * 1.5 && i > Dr / 2 ? a = u ? "left" : "right" : a = u ? "right" : "left"), {
    rotation: i,
    textAlign: a,
    textVerticalAlign: o
  };
}
function A2(r, t, e) {
  var n = r.axis, i = r.get(["axisLabel", "customValues"]);
  if ($I(n))
    return;
  function a(l, f, h) {
    var v = zr(t[f]), c = zr(t[h]), d = n.scale;
    if (!(!v || !c)) {
      if (l == null) {
        if (!e && i)
          return;
        var p = Mi(v.label).labelInfo.tick;
        if (
          // TimeScale does not expand extent to "nice", so eliminate labels that are not nice.
          fo(d) && p.notNice || Ce(d) && p.offInterval
        ) {
          jn(v.label);
          return;
        }
      }
      if (l === !1 || v.suggestIgnore) {
        jn(v.label);
        return;
      }
      if (c.suggestIgnore) {
        jn(c.label);
        return;
      }
      var m = 0.1;
      if (!e) {
        var g = [0, 0, 0, 0];
        v = Eg({
          marginForce: g
        }, v), c = Eg({
          marginForce: g
        }, c);
      }
      sc(v, c, null, {
        touchThreshold: m
      }) && jn(l ? c.label : v.label);
    }
  }
  var o = r.get(["axisLabel", "showMinLabel"]), s = r.get(["axisLabel", "showMaxLabel"]), u = t.length;
  a(o, 0, 1), a(s, u - 1, u - 2);
}
function I2(r, t, e) {
  r.showMinorTicks || T(t, function(n) {
    if (n && n.label.ignore)
      for (var i = 0; i < e.length; i++) {
        var a = e[i], o = R1(a), s = Mi(n.label);
        if (o.tickValue != null && !o.onBand && o.tickValue === s.labelInfo.tick.value) {
          jn(a);
          return;
        }
      }
  });
}
function jn(r) {
  r && (r.ignore = !0);
}
function N1(r, t, e, n, i) {
  for (var a = [], o = [], s = [], u = 0; u < r.length; u++) {
    var l = r[u].coord;
    o[0] = l, o[1] = 0, s[0] = l, s[1] = e, t && (re(o, o, t), re(s, s, t));
    var f = new Or({
      shape: {
        x1: o[0],
        y1: o[1],
        x2: s[0],
        y2: s[1]
      },
      style: n,
      z2: 2,
      autoBatch: !0,
      silent: !0
    });
    Oa(f.shape, f.style.lineWidth), f.anid = i + "_" + r[u].tickValue, a.push(f);
    var h = R1(f);
    h.onBand = !!r[u].onBand, h.tickValue = r[u].tickValue;
  }
  return a;
}
function L2(r, t, e, n) {
  var i = n.axis, a = n.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && (o = !0, r.raw.axisTickAutoShow != null && (o = !!r.raw.axisTickAutoShow)), !o || i.scale.isBlank())
    return [];
  for (var s = a.getModel("lineStyle"), u = r.tickDirection * a.get("length"), l = i.getTicksCoords(), f = N1(l, e.transform, u, ut(s.getLineStyle(), {
    stroke: n.get(["axisLine", "lineStyle", "color"])
  }), "ticks"), h = 0; h < f.length; h++)
    t.add(f[h]);
  return f;
}
function P2(r, t, e, n, i) {
  var a = n.axis, o = n.getModel("minorTick");
  if (!(!r.showMinorTicks || a.scale.isBlank())) {
    var s = a.getMinorTicksCoords();
    if (s.length)
      for (var u = o.getModel("lineStyle"), l = i * o.get("length"), f = ut(u.getLineStyle(), ut(n.getModel("axisTick").getLineStyle(), {
        stroke: n.get(["axisLine", "lineStyle", "color"])
      })), h = 0; h < s.length; h++)
        for (var v = N1(s[h], e.transform, l, f, "minorticks_" + h), c = 0; c < v.length; c++)
          t.add(v[c]);
  }
}
function Wg(r, t, e) {
  if (F1(r)) {
    var n = r.axisLabelsCreationContext, i = n.out.noPxChangeTryDetermine;
    if (e.noPxChange) {
      for (var a = !0, o = 0; o < i.length; o++)
        a = a && i[o]();
      if (a)
        return !1;
    }
    i.length && (t.remove(r.labelGroup), Ah(r, null, null, null));
  }
  return !0;
}
function R2(r, t, e, n, i, a) {
  var o = i.axis, s = Ds(r.raw.axisLabelShow, i.get(["axisLabel", "show"])), u = new Mt();
  e.add(u);
  var l = au(n);
  if (!s || o.scale.isBlank()) {
    Ah(t, [], u, l);
    return;
  }
  var f = i.getModel("axisLabel"), h = o.getViewLabels(l), v = (Ds(r.raw.labelRotate, f.get("rotate")) || 0) * Dr / 180, c = Rr.innerTextLayout(r.rotation, v, r.labelDirection), d = i.getCategories && i.getCategories(!0), p = [], m = i.get("triggerEvent"), g = 1 / 0, y = -1 / 0;
  T(h, function(S, b) {
    var x, w = S.tick, D = S.formattedLabel, C = S.rawLabel, M = f, A = ho(o.scale, w);
    if (d && d[A]) {
      var L = d[A];
      Z(L) && L.textStyle && (M = new Tt(L.textStyle, f, i.ecModel));
    }
    var I = M.getTextColor() || i.get(["axisLine", "lineStyle", "color"]), P = M.getShallow("align", !0) || c.textAlign, E = X(M.getShallow("alignMinLabel", !0), P), R = X(M.getShallow("alignMaxLabel", !0), P), F = M.getShallow("verticalAlign", !0) || M.getShallow("baseline", !0) || c.textVerticalAlign, G = X(M.getShallow("verticalAlignMinLabel", !0), F), W = X(M.getShallow("verticalAlignMaxLabel", !0), F), J = 10 + (((x = w.time) === null || x === void 0 ? void 0 : x.level) || 0);
    g = Math.min(g, J), y = Math.max(y, J);
    var q = new Rt({
      // --- transform props start ---
      // All of the transform props MUST not be set here, but should be set in
      // `updateAxisLabelChangableProps`, because they may change in estimation,
      // and need to calculate based on global coord sys by `decomposeTransform`.
      x: 0,
      y: 0,
      rotation: 0,
      // --- transform props end ---
      silent: Rr.isLabelSilent(i),
      z2: J,
      style: hr(M, {
        text: D,
        align: b === 0 ? E : b === h.length - 1 ? R : P,
        verticalAlign: b === 0 ? G : b === h.length - 1 ? W : F,
        fill: Q(I) ? I(
          // (1) In category axis with data zoom, tick is not the original
          // index of axis.data. So tick should not be exposed to user
          // in category axis.
          // (2) Compatible with previous version, which always use formatted label as
          // input. But in interval scale the formatted label is like '223,445', which
          // maked user replace ','. So we modify it to return original val but remain
          // it as 'string' to avoid error in replacing.
          o.type === "category" ? C : o.type === "value" ? A + "" : A,
          b
        ) : I
      })
    });
    q.anid = "label_" + A;
    var rt = Mi(q);
    if (rt.labelInfo = S, rt.layoutRotation = c.rotation, oo({
      el: q,
      componentModel: i,
      itemName: D,
      formatterParamsExtra: {
        isTruncated: function() {
          return q.isTruncated;
        },
        value: C,
        tickIndex: b
      }
    }), m) {
      var $ = Rr.makeAxisEventDataBase(i);
      $.targetType = "axisLabel", $.value = C, $.tickIndex = b;
      var H = S.tick.break;
      if (H) {
        var it = H.parsedBreak;
        $.break = {
          // type: labelItem.break.type,
          start: it.vmin,
          end: it.vmax
        };
      }
      o.type === "category" && ($.dataIndex = A), pt(q).eventData = $, H && k2(i, a, q, H);
    }
    p.push(q), u.add(q);
  });
  var _ = U(p, function(S) {
    return {
      label: S,
      priority: Mi(S).labelInfo.tick.break ? S.z2 + (y - g + 1) : S.z2,
      defaultAttr: {
        ignore: S.ignore
      }
    };
  });
  Ah(t, _, u, l);
}
function F1(r) {
  return !!r.labelLayoutList;
}
function Ah(r, t, e, n) {
  r.labelLayoutList = t, r.labelGroup = e, r.axisLabelsCreationContext = n;
}
function E2(r, t, e, n) {
  var i = t.get(["axisLabel", "margin"]);
  T(e, function(a, o) {
    var s = zr(a);
    if (s) {
      var u = s.label, l = Mi(u);
      s.suggestIgnore = u.ignore, u.ignore = !1, Bs(ir, O2);
      var f = t.axis;
      ir.x = f.dataToCoord(ho(f.scale, l.labelInfo.tick)), ir.y = r.labelOffset + r.labelDirection * i, ir.rotation = l.layoutRotation, n.add(ir), ir.updateTransform(), n.remove(ir), ir.decomposeTransform(), Bs(u, ir), u.markRedraw(), uu(s, !0), zr(s);
    }
  });
}
var ir = new St(), O2 = new St();
function lc(r) {
  return !!r;
}
function k2(r, t, e, n) {
  e.on("click", function(i) {
    var a = {
      type: b2,
      breaks: [{
        start: n.parsedBreak.breakOption.start,
        end: n.parsedBreak.breakOption.end
      }]
    };
    a[r.axis.dim + "AxisIndex"] = r.componentIndex, t.dispatchAction(a);
  });
}
function lu(r, t, e) {
  e = e || {};
  var n = t.axis, i = {}, a = n.getAxesOnZeroOf()[0], o = n.position, s = a ? "onZero" : o, u = n.dim, l = [r.x, r.x + r.width, r.y, r.y + r.height], f = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  }, h = t.get("offset") || 0, v = u === "x" ? [l[2] - h, l[3] + h] : [l[0] - h, l[1] + h];
  if (a) {
    var c = a.toGlobalCoord(a.dataToCoord(0));
    v[f.onZero] = Math.max(Math.min(c, v[1]), v[0]);
  }
  i.position = [u === "y" ? v[f[s]] : l[0], u === "x" ? v[f[s]] : l[3]], i.rotation = Math.PI / 2 * (u === "x" ? 0 : 1);
  var d = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  i.labelDirection = i.tickDirection = i.nameDirection = d[o], i.labelOffset = a ? v[f[o]] - v[f.onZero] : 0, t.get(["axisTick", "inside"]) && (i.tickDirection = -i.tickDirection), Ds(e.labelInside, t.get(["axisLabel", "inside"])) && (i.labelDirection = -i.labelDirection);
  var p = t.get(["axisLabel", "rotate"]);
  return i.labelRotate = s === "top" ? -p : p, i.z2 = 1, i;
}
function B2(r) {
  var t = {
    xAxisModel: null,
    yAxisModel: null
  };
  return T(t, function(e, n) {
    var i = n.replace(/Model$/, ""), a = r.getReferringComponents(i, Vt).models[0];
    t[n] = a;
  }), t;
}
function N2(r, t, e, n, i, a) {
  for (var o = lu(r, e), s = !1, u = !1, l = 0; l < t.length; l++)
    r1(t[l].getOtherAxis(e.axis).scale) && (s = u = !0, e.axis.type === "category" && e.axis.onBand && (u = !1));
  return o.axisLineAutoShow = s, o.axisTickAutoShow = u, o.defaultNameMoveOverlap = a, new Rr(e, n, o, i);
}
function F2(r, t, e) {
  var n = lu(t, e);
  r.updateCfg(n);
}
function z2(r) {
  return r.dim + "_" + r.index;
}
var z1 = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, fu = ["25%", "25%"], ws = "cartesian2d", H2 = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.mergeDefaultAndTheme = function(e, n) {
      var i = ki(e.outerBounds);
      r.prototype.mergeDefaultAndTheme.apply(this, arguments), i && e.outerBounds && Br(e.outerBounds, i);
    }, t.prototype.mergeOption = function(e, n) {
      r.prototype.mergeOption.apply(this, arguments), this.option.outerBounds && e.outerBounds && Br(this.option.outerBounds, e.outerBounds);
    }, t.type = "grid", t.dependencies = ["xAxis", "yAxis"], t.layoutMode = "box", t.defaultOption = {
      show: !1,
      // zlevel: 0,
      z: 0,
      left: "15%",
      top: 65,
      right: "10%",
      bottom: 80,
      // If grid size contain label
      containLabel: !1,
      outerBoundsMode: "auto",
      outerBounds: z1,
      outerBoundsContain: "all",
      outerBoundsClampWidth: fu[0],
      outerBoundsClampHeight: fu[1],
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      backgroundColor: O.color.transparent,
      borderWidth: 1,
      borderColor: O.color.neutral30
    }, t;
  })(ct)
), Ih = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", Vt).models[0];
    }, t.type = "cartesian2dAxis", t;
  })(ct)
);
Je(Ih, QI);
var H1 = {
  show: !0,
  // zlevel: 0,
  z: 0,
  // Inverse the axis.
  inverse: !1,
  // Axis name displayed.
  name: "",
  // 'start' | 'middle' | 'end'
  nameLocation: "end",
  // By degree. By default auto rotate by nameLocation.
  nameRotate: null,
  nameTruncate: {
    maxWidth: null,
    ellipsis: "...",
    placeholder: "."
  },
  // Use global text style by default.
  nameTextStyle: {
    // textMargin: never, // The default value will be specified based on `nameLocation`.
  },
  // The gap between axisName and axisLine.
  nameGap: 15,
  // Default `false` to support tooltip.
  silent: !1,
  // Default `false` to avoid legacy user event listener fail.
  triggerEvent: !1,
  tooltip: {
    show: !1
  },
  axisPointer: {},
  axisLine: {
    show: !0,
    onZero: "auto",
    onZeroAxisIndex: null,
    lineStyle: {
      color: O.color.axisLine,
      width: 1,
      type: "solid"
    },
    // The arrow at both ends the the axis.
    symbol: ["none", "none"],
    symbolSize: [10, 15],
    breakLine: !0
  },
  axisTick: {
    show: !0,
    // Whether axisTick is inside the grid or outside the grid.
    inside: !1,
    // The length of axisTick.
    length: 5,
    lineStyle: {
      width: 1
    }
  },
  axisLabel: {
    show: !0,
    // Whether axisLabel is inside the grid or outside the grid.
    inside: !1,
    rotate: 0,
    // true | false | null/undefined (auto)
    showMinLabel: null,
    // true | false | null/undefined (auto)
    showMaxLabel: null,
    margin: 8,
    // formatter: null,
    fontSize: 12,
    color: O.color.axisLabel,
    // In scenarios like axis labels, when labels text's progression direction matches the label
    // layout direction (e.g., when all letters are in a single line), extra start/end margin is
    // needed to prevent the text from appearing visually joined. In the other case, when lables
    // are stacked (e.g., having rotation or horizontal labels on yAxis), the layout needs to be
    // compact, so NO extra top/bottom margin should be applied.
    textMargin: [0, 3]
  },
  splitLine: {
    show: !0,
    showMinLine: !0,
    showMaxLine: !0,
    lineStyle: {
      color: O.color.axisSplitLine,
      width: 1,
      type: "solid"
    }
  },
  splitArea: {
    show: !1,
    areaStyle: {
      color: [O.color.backgroundTint, O.color.backgroundTransparent]
    }
  },
  breakArea: {
    show: !0,
    itemStyle: {
      color: O.color.neutral00,
      // Break border color should be darker than the splitLine
      // because it has opacity and should be more prominent
      borderColor: O.color.border,
      borderWidth: 1,
      borderType: [3, 3],
      opacity: 0.6
    },
    zigzagAmplitude: 4,
    zigzagMinSpan: 4,
    zigzagMaxSpan: 20,
    zigzagZ: 100,
    expandOnClick: !0
  },
  breakLabelLayout: {
    moveOverlap: "auto"
  }
}, V2 = at({
  // The gap at both ends of the axis. For categoryAxis, boolean.
  boundaryGap: !0,
  // Set false to faster category collection.
  deduplication: null,
  jitter: 0,
  jitterOverlap: !0,
  jitterMargin: 2,
  // splitArea: {
  // show: false
  // },
  splitLine: {
    show: !1
  },
  axisTick: {
    // If tick is align with label when boundaryGap is true
    alignWithLabel: !1,
    interval: "auto",
    show: "auto"
  },
  axisLabel: {
    interval: "auto"
  }
}, H1), fc = at({
  boundaryGap: [0, 0],
  axisLine: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  axisTick: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  // TODO
  // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
  splitNumber: 5,
  minorTick: {
    // Minor tick, not available for cateogry axis.
    show: !1,
    // Split number of minor ticks. The value should be in range of (0, 100)
    splitNumber: 5,
    // Length of minor tick
    length: 3,
    // Line style
    lineStyle: {
      // Default to be same with axisTick
    }
  },
  minorSplitLine: {
    show: !1,
    lineStyle: {
      color: O.color.axisMinorSplitLine,
      width: 1
    }
  }
}, H1), G2 = at({
  splitNumber: 6,
  axisLabel: {
    // The default value of TimeScale is determined in `AxisBuilder`
    // showMinLabel: false,
    // showMaxLabel: false,
    rich: {
      primary: {
        fontWeight: "bold"
      }
    }
  },
  splitLine: {
    show: !1
  }
}, fc), U2 = ut({
  logBase: 10
}, fc);
const W2 = {
  category: V2,
  value: fc,
  time: G2,
  log: U2
};
function Yg(r, t, e, n) {
  T(u1, function(i, a) {
    var o = at(at({}, W2[a], !0), n, !0), s = (
      /** @class */
      (function(u) {
        k(l, u);
        function l() {
          var f = u !== null && u.apply(this, arguments) || this;
          return f.type = t + "Axis." + a, f;
        }
        return l.prototype.mergeDefaultAndTheme = function(f, h) {
          var v = Fa(this), c = v ? ki(f) : {}, d = h.getTheme();
          at(f, d.get(a + "Axis")), at(f, this.getDefaultOption()), f.type = Zg(f), v && Br(f, c, v);
        }, l.prototype.optionUpdated = function() {
          var f = this.option;
          f.type === "category" && (this.__ordinalMeta = Th.createByAxisModel(this));
        }, l.prototype.getCategories = function(f) {
          var h = this.option;
          if (h.type === "category")
            return f ? h.data : this.__ordinalMeta.categories;
        }, l.prototype.getOrdinalMeta = function() {
          return this.__ordinalMeta;
        }, l.prototype.updateAxisBreaks = function(f) {
          return {
            breaks: []
          };
        }, l.type = t + "Axis." + a, l.defaultOption = o, l;
      })(e)
    );
    r.registerComponentModel(s);
  }), r.registerSubTypeDefaulter(t + "Axis", Zg);
}
function Zg(r) {
  return r.type || (r.data ? "category" : "value");
}
var Y2 = (
  /** @class */
  (function() {
    function r(t) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
    }
    return r.prototype.getAxis = function(t) {
      return this._axes[t];
    }, r.prototype.getAxes = function() {
      return U(this._dimList, function(t) {
        return this._axes[t];
      }, this);
    }, r.prototype.getAxesByScale = function(t) {
      return t = t.toLowerCase(), kt(this.getAxes(), function(e) {
        return e.scale.type === t;
      });
    }, r.prototype.addAxis = function(t) {
      var e = t.dim;
      this._axes[e] = t, this._dimList.push(e);
    }, r;
  })()
), Ts = ["x", "y"];
function Xg(r) {
  return (r.type === "interval" || r.type === "time") && !Zs(r);
}
var Z2 = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = ws, e.dimensions = Ts, e;
    }
    return t.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var e = this.getAxis("x").scale, n = this.getAxis("y").scale;
      if (!(!Xg(e) || !Xg(n))) {
        var i = ru(e, null), a = ru(n, null), o = this.dataToPoint([i[0], a[0]]), s = this.dataToPoint([i[1], a[1]]), u = i[1] - i[0], l = a[1] - a[0];
        if (!(!u || !l)) {
          var f = (s[0] - o[0]) / u, h = (s[1] - o[1]) / l, v = o[0] - i[0] * f, c = o[1] - a[0] * h, d = this._transform = [f, 0, 0, h, v, c];
          this._invTransform = Qa([], d);
        }
      }
    }, t.prototype.getBaseAxis = function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, t.prototype.containPoint = function(e) {
      var n = this.getAxis("x"), i = this.getAxis("y");
      return n.contain(n.toLocalCoord(e[0])) && i.contain(i.toLocalCoord(e[1]));
    }, t.prototype.containData = function(e) {
      return this.getAxis("x").containData(e[0]) && this.getAxis("y").containData(e[1]);
    }, t.prototype.containZone = function(e, n) {
      var i = this.dataToPoint(e), a = this.dataToPoint(n), o = this.getArea(), s = new j(i[0], i[1], a[0] - i[0], a[1] - i[1]);
      return o.intersect(s);
    }, t.prototype.dataToPoint = function(e, n, i) {
      i = i || [];
      var a = e[0], o = e[1];
      if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
        return re(i, e, this._transform);
      var s = this.getAxis("x"), u = this.getAxis("y");
      return i[0] = s.toGlobalCoord(s.dataToCoord(a, n)), i[1] = u.toGlobalCoord(u.dataToCoord(o, n)), i;
    }, t.prototype.clampData = function(e, n) {
      var i = this.getAxis("x").scale, a = this.getAxis("y").scale, o = i.getExtent(), s = a.getExtent(), u = i.parse(e[0]), l = a.parse(e[1]);
      return n = n || [], n[0] = Math.min(Math.max(Math.min(o[0], o[1]), u), Math.max(o[0], o[1])), n[1] = Math.min(Math.max(Math.min(s[0], s[1]), l), Math.max(s[0], s[1])), n;
    }, t.prototype.pointToData = function(e, n, i) {
      if (i = i || [], this._invTransform)
        return re(i, e, this._invTransform);
      var a = this.getAxis("x"), o = this.getAxis("y");
      return i[0] = a.coordToData(a.toLocalCoord(e[0]), n), i[1] = o.coordToData(o.toLocalCoord(e[1]), n), i;
    }, t.prototype.getOtherAxis = function(e) {
      return this.getAxis(e.dim === "x" ? "y" : "x");
    }, t.prototype.getArea = function(e) {
      e = e || 0;
      var n = this.getAxis("x").getGlobalExtent(), i = this.getAxis("y").getGlobalExtent(), a = Math.min(n[0], n[1]) - e, o = Math.min(i[0], i[1]) - e, s = Math.max(n[0], n[1]) - a + e, u = Math.max(i[0], i[1]) - o + e;
      return new j(a, o, s, u);
    }, t;
  })(Y2)
);
function X2(r, t) {
  var e = r.scale, n = r.model, i = _1(e, n, n.ecModel, r), a = Ti(e), o = Ti(t) ? t.intervalStub : t, s = a ? e.intervalStub : e, u = e.base, l = o.getTicks(), f = o.getTicks({
    expandToNicedExtent: !0
  }), h = l.length - 1, v, c, d;
  if (h === 1)
    v = c = 0, d = 1;
  else if (h === 2) {
    var p = Pt(l[0].value - l[1].value), m = Pt(l[1].value - l[2].value);
    v = c = 0, p === m ? d = 2 : (d = 1, p < m ? v = p / m : c = m / p);
  } else {
    var g = o.getConfig().interval;
    v = (1 - (l[0].value - f[0].value) / g) % 1, c = (1 - (f[h].value - l[h].value) / g) % 1, d = h - (v ? 1 : 0) - (c ? 1 : 0);
  }
  var y = i.zoomFixMM, _ = y[0] || y[1], S = [i.fixMM[0] || _, i.fixMM[1] || _], b = e.getExtent(), x = s.getExtent(), w = n1(x, S), D, C, M, A, L, I;
  function P(rt) {
    for (var $ = 50, H = 0; H < $ && !rt(); H++)
      M = a ? M * gt(u, 2) : II(M), A = In(M);
  }
  function E() {
    D = st(I - M * v, A);
  }
  function R() {
    C = st(L + M * c, A);
  }
  function F() {
    I = v ? st(D + M * v, A) : D;
  }
  function G() {
    L = c ? st(C - M * c, A) : C;
  }
  if (S[0] && S[1]) {
    D = w[0], C = w[1], M = (C - D) / (d + v + c);
    var W = r.getExtent(), J = Pt(W[1] - W[0]);
    A = rv([C, D], J, 0.5 / d), F(), G(), Ke(A) && (M = st(M, A));
  } else {
    var q = w[1] - w[0];
    M = a ? gt(My(q), 1) : iv(q / d, Dy), A = In(M), S[0] ? (D = w[0], P(function() {
      if (F(), L = st(I + M * d, A), R(), C >= w[1])
        return !0;
    })) : S[1] ? (C = w[1], P(function() {
      if (G(), I = st(L - M * d, A), E(), D <= w[0])
        return !0;
    })) : P(function() {
      I = st(Ri(w[0] / M) * M, A), L = st(Cn(w[1] / M) * M, A);
      var rt = lr((L - I) / M);
      if (rt <= d) {
        var $ = d - rt, H = void 0, it = i.incl0 || a;
        if (it && w[0] === 0)
          H = [0, $];
        else if (it && w[1] === 0)
          H = [$, 0];
        else {
          var lt = Cn($ / 2);
          H = $ % 2 === 0 ? [lt, lt] : D + C < w[0] + w[1] ? [lt, lt + 1] : [lt + 1, lt];
        }
        if (I = st(I - M * H[0], A), L = st(L + M * H[1], A), E(), R(), D <= w[0] && C >= w[1])
          return !0;
      }
    });
  }
  f1(e, S, x, [D, C], b, {
    // NOTE: Even in LogScale, `interval` should not be in log space.
    interval: M,
    // Force ticks count, otherwise cumulative error may cause more unexpected ticks to be generated.
    // Though the overlapping tick labels may be auto-ignored, but probably unexpected, e.g., the min
    // tick label is ignored but the secondary min tick label is shown, which is unexpected when
    // `axis.min` is user-specified or dataZoom-specified.
    intervalCount: d,
    intervalPrecision: A,
    niceExtent: [I, L]
  });
}
var $g = [
  [3, 1],
  [0, 2]
  // xyIdx 1 => 'y'
], $2 = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = Ts, this._initCartesian(t, e, n), this.model = t;
    }
    return r.prototype.getRect = function() {
      return this._rect;
    }, r.prototype.update = function(t, e) {
      var n = this._axesMap;
      T(this._axesList, function(o) {
        g1(o, oL);
        var s = o.scale;
        Ce(s) && s.setSortInfo(o.model.get("categorySortInfo"));
      });
      function i(o) {
        for (var s = xt(o), u = [], l = s.length - 1; l >= 0; l--) {
          var f = o[+s[l]];
          f.__alignTo ? u.push(f) : Ag(f);
        }
        T(u, function(h) {
          K2(h, h.__alignTo) ? Ag(h) : X2(h, h.__alignTo.scale);
        });
      }
      i(n.x), i(n.y);
      var a = {};
      T(n.x, function(o) {
        qg(n, "y", o, a);
      }), T(n.y, function(o) {
        qg(n, "x", o, a);
      }), this.resize(this.model, e);
    }, r.prototype.resize = function(t, e, n) {
      var i = uo(t, e), a = this._rect = vr(t.getBoxLayoutParams(), i.refContainer), o = this._axesMap, s = this._coordsList, u = t.get("containLabel");
      if (V1(o, a), !n) {
        var l = J2(a, s, o, u, e), f = void 0;
        if (u)
          f = jg(a.clone(), "axisLabel", null, a, o, l, i);
        else {
          var h = j2(t, a, i), v = h.outerBoundsRect, c = h.parsedOuterBoundsContain, d = h.outerBoundsClamp;
          v && (f = jg(v, c, d, a, o, l, i));
        }
        G1(a, o, Pe.determine, null, f, i), T(this._coordsList, function(p) {
          p.calcAffineTransform();
        });
      }
    }, r.prototype.getAxis = function(t, e) {
      var n = this._axesMap[t];
      if (n != null)
        return n[e || 0];
    }, r.prototype.getAxes = function() {
      return this._axesList.slice();
    }, r.prototype.getCartesian = function(t, e) {
      if (t != null && e != null) {
        var n = "x" + t + "y" + e;
        return this._coordsMap[n];
      }
      Z(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
      for (var i = 0, a = this._coordsList; i < a.length; i++)
        if (a[i].getAxis("x").index === t || a[i].getAxis("y").index === e)
          return a[i];
    }, r.prototype.getCartesians = function() {
      return this._coordsList.slice();
    }, r.prototype.convertToPixel = function(t, e, n) {
      var i = this._findConvertTarget(e);
      return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
    }, r.prototype.convertFromPixel = function(t, e, n) {
      var i = this._findConvertTarget(e);
      return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
    }, r.prototype._findConvertTarget = function(t) {
      var e = t.seriesModel, n = t.xAxisModel || e && e.getReferringComponents("xAxis", Vt).models[0], i = t.yAxisModel || e && e.getReferringComponents("yAxis", Vt).models[0], a = t.gridModel, o = this._coordsList, s, u;
      if (e)
        s = e.coordinateSystem, ot(o, s) < 0 && (s = null);
      else if (n && i)
        s = this.getCartesian(n.componentIndex, i.componentIndex);
      else if (n)
        u = this.getAxis("x", n.componentIndex);
      else if (i)
        u = this.getAxis("y", i.componentIndex);
      else if (a) {
        var l = a.coordinateSystem;
        l === this && (s = this._coordsList[0]);
      }
      return {
        cartesian: s,
        axis: u
      };
    }, r.prototype.containPoint = function(t) {
      var e = this._coordsList[0];
      if (e)
        return e.containPoint(t);
    }, r.prototype._initCartesian = function(t, e, n) {
      var i = this, a = this, o = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      }, s = {
        x: {},
        y: {}
      }, u = {
        x: 0,
        y: 0
      };
      if (e.eachComponent("xAxis", l("x"), this), e.eachComponent("yAxis", l("y"), this), !u.x || !u.y) {
        this._axesMap = {}, this._axesList = [];
        return;
      }
      this._axesMap = s, T(s.x, function(f, h) {
        T(s.y, function(v, c) {
          var d = "x" + h + "y" + c, p = new Z2(d);
          p.master = i, p.model = t, i._coordsMap[d] = p, i._coordsList.push(p), p.addAxis(f), p.addAxis(v);
        });
      }), Qg(s.x), Qg(s.y);
      function l(f) {
        return function(h, v) {
          if (q2(h, t)) {
            var c = h.get("position");
            f === "x" ? c !== "top" && c !== "bottom" && (c = o.bottom ? "top" : "bottom") : c !== "left" && c !== "right" && (c = o.left ? "right" : "left"), o[c] = !0;
            var d = VI(h), p = new y2(f, GI(h, d), [0, 0], d, c);
            p.onBand = h1(p.scale, h), p.inverse = h.get("inverse"), h.axis = p, p.model = h, p.grid = a, p.index = v, a._axesList.push(p), s[f][v] = p, u[f]++;
          }
        };
      }
    }, r.prototype.getTooltipAxes = function(t) {
      var e = [], n = [];
      return T(this.getCartesians(), function(i) {
        var a = t != null && t !== "auto" ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(a);
        ot(e, a) < 0 && e.push(a), ot(n, o) < 0 && n.push(o);
      }), {
        baseAxes: e,
        otherAxes: n
      };
    }, r.create = function(t, e) {
      var n = [];
      return t.eachComponent("grid", function(i, a) {
        var o = new r(i, t, e);
        o.name = "grid_" + a, o.resize(i, e, !0), i.coordinateSystem = o, n.push(o), T(o._axesList, function(s) {
          fL(s, r.dimIdxMap);
        });
      }), t.eachSeries(function(i) {
        var a, o;
        jC({
          targetModel: i,
          coordSysType: ws,
          coordSysProvider: s
        });
        function s() {
          var u = B2(i), l = u.xAxisModel, f = u.yAxisModel;
          a = l.axis, o = f.axis;
          var h = l.getCoordSysModel(), v = h.coordinateSystem;
          return v.getCartesian(l.componentIndex, f.componentIndex);
        }
        a && o && (xg(a, i, ws), xg(o, i, ws));
      }, this), n;
    }, r.dimensions = Ts, r.dimIdxMap = rc(Ts), r;
  })()
);
function q2(r, t) {
  return r.getCoordSysModel() === t;
}
function qg(r, t, e, n) {
  e.getAxesOnZeroOf = function() {
    return a ? [a] : [];
  };
  var i = r[t], a, o = e.model, s = o.get(["axisLine", "onZero"]), u = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (u != null)
    Kg(s, i[u]) && (a = i[u]);
  else
    for (var l in i)
      if (ee(i, l) && Kg(s, i[l]) && !n[f(i[l])]) {
        a = i[l];
        break;
      }
  a && (n[f(a)] = !0);
  function f(h) {
    return h.dim + "_" + h.index;
  }
}
function Kg(r, t) {
  if (!t)
    return !1;
  var e = t.scale, n = UI(e, 0), i = t && t.type !== "category" && t.type !== "time" && n !== Ch;
  return i && r === "auto" && XI(t) && (i = !1), i;
}
function Qg(r) {
  for (var t = xt(r), e, n = [], i = t.length - 1; i >= 0; i--) {
    var a = r[+t[i]];
    r1(a.scale) && KI(a.model, a.type) == null && (a.model.get("alignTicks") && a.model.get("interval") == null ? n.push(a) : e = a);
  }
  e || (e = n.pop()), e && T(n, function(o) {
    o.__alignTo = e;
  });
}
function K2(r, t) {
  return Zs(r.scale) || Zs(t.scale) || t.scale.getTicks().length < 2;
}
function Q2(r, t) {
  var e = r.getExtent(), n = e[0] + e[1];
  r.toGlobalCoord = r.dim === "x" ? function(i) {
    return i + t;
  } : function(i) {
    return n - i + t;
  }, r.toLocalCoord = r.dim === "x" ? function(i) {
    return i - t;
  } : function(i) {
    return n - i + t;
  };
}
function V1(r, t) {
  T(r.x, function(e) {
    return Jg(e, t.x, t.width);
  }), T(r.y, function(e) {
    return Jg(e, t.y, t.height);
  });
}
function Jg(r, t, e) {
  var n = [0, e], i = r.inverse ? 1 : 0;
  r.setExtent(n[i], n[1 - i]), Q2(r, t);
}
function jg(r, t, e, n, i, a, o) {
  G1(n, i, Pe.estimate, t, !1, o);
  var s = [0, 0, 0, 0];
  l(0), l(1), f(n, 0, NaN), f(n, 1, NaN);
  var u = YS(s, function(v) {
    return v > 0;
  }) == null;
  return Ws(n, s, !0, !0, e), V1(i, n), u;
  function l(v) {
    T(i[dn[v]], function(c) {
      if (Ya(c.model)) {
        var d = a.ensureRecord(c.model), p = d.labelInfoList;
        if (p)
          for (var m = 0; m < p.length; m++) {
            var g = p[m], y = c.scale.normalize(ho(c.scale, Mi(g.label).labelInfo.tick));
            y = v === 1 ? 1 - y : y, f(g.rect, v, y), f(g.rect, 1 - v, NaN);
          }
        var _ = d.nameLayout;
        if (_) {
          var y = Ci(d.nameLocation) ? 0.5 : NaN;
          f(_.rect, v, y), f(_.rect, 1 - v, NaN);
        }
      }
    });
  }
  function f(v, c, d) {
    var p = r[dn[c]] - v[dn[c]], m = v[Ea[c]] + v[dn[c]] - (r[Ea[c]] + r[dn[c]]);
    p = h(p, 1 - d), m = h(m, d);
    var g = $g[c][0], y = $g[c][1];
    s[g] = gt(s[g], p), s[y] = gt(s[y], m);
  }
  function h(v, c) {
    return v > 0 && !Aa(c) && c > 1e-4 && (v /= c), v;
  }
}
function J2(r, t, e, n, i) {
  var a = new E1(tP);
  return T(e, function(o) {
    return T(o, function(s) {
      if (Ya(s.model)) {
        var u = !n;
        s.axisBuilder = N2(r, t, s.model, i, a, u);
      }
    });
  }), a;
}
function G1(r, t, e, n, i, a) {
  var o = e === Pe.determine;
  T(t, function(l) {
    return T(l, function(f) {
      Ya(f.model) && (F2(f.axisBuilder, r, f.model), f.axisBuilder.build(o ? {
        axisTickLabelDetermine: !0
      } : {
        axisTickLabelEstimate: !0
      }, {
        noPxChange: i
      }));
    });
  });
  var s = {
    x: 0,
    y: 0
  };
  u(0), u(1);
  function u(l) {
    s[dn[1 - l]] = r[Ea[l]] <= a.refContainer[Ea[l]] * 0.5 ? 0 : 1 - l === 1 ? 2 : 1;
  }
  T(t, function(l, f) {
    return T(l, function(h) {
      Ya(h.model) && ((n === "all" || o) && h.axisBuilder.build({
        axisName: !0
      }, {
        nameMarginLevel: s[f]
      }), o && h.axisBuilder.build({
        axisLine: !0
      }));
    });
  });
}
function j2(r, t, e) {
  var n, i = r.get("outerBoundsMode", !0);
  i === "same" ? n = t.clone() : (i == null || i === "auto") && (n = vr(r.get("outerBounds", !0) || z1, e.refContainer));
  var a = r.get("outerBoundsContain", !0), o;
  a == null || a === "auto" || ot(["all", "axisLabel"], a) < 0 ? o = "all" : o = a;
  var s = [Zf(X(r.get("outerBoundsClampWidth", !0), fu[0]), t.width), Zf(X(r.get("outerBoundsClampHeight", !0), fu[1]), t.height)];
  return {
    outerBoundsRect: n,
    parsedOuterBoundsContain: o,
    outerBoundsClamp: s
  };
}
var tP = function(r, t, e, n, i, a) {
  var o = e.axis.dim === "x" ? "y" : "x";
  O1(r, t, e, n, i, a), Ci(r.nameLocation) || T(t.recordMap[o], function(s) {
    s && s.labelInfoList && s.dirVec && B1(s.labelInfoList, s.dirVec, n, i);
  });
};
function eP(r, t) {
  var e = {
    /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */
    axesInfo: {},
    seriesInvolved: !1,
    /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */
    coordSysAxesInfo: {},
    coordSysMap: {}
  };
  return rP(e, r, t), e.seriesInvolved && iP(e, r), e;
}
function rP(r, t, e) {
  var n = t.getComponent("tooltip"), i = t.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
  T(e.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var u = Za(s.model), l = r.coordSysAxesInfo[u] = {};
    r.coordSysMap[u] = s;
    var f = s.model, h = f.getModel("tooltip", n);
    if (T(s.getAxes(), ht(p, !1, null)), s.getTooltipAxes && n && h.get("show")) {
      var v = h.get("trigger") === "axis", c = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (v || c) && T(d.baseAxes, ht(p, c ? "cross" : !0, v)), c && T(d.otherAxes, ht(p, "cross", !1));
    }
    function p(m, g, y) {
      var _ = y.model.getModel("axisPointer", i), S = _.get("show");
      if (!(!S || S === "auto" && !m && !Lh(_))) {
        g == null && (g = _.get("triggerTooltip")), _ = m ? nP(y, h, i, t, m, g) : _;
        var b = _.get("snap"), x = _.get("triggerEmphasis"), w = Za(y.model), D = g || b || y.type === "category", C = r.axesInfo[w] = {
          key: w,
          axis: y,
          coordSys: s,
          axisPointerModel: _,
          triggerTooltip: g,
          triggerEmphasis: x,
          involveSeries: D,
          snap: b,
          useHandle: Lh(_),
          seriesModels: [],
          linkGroup: null
        };
        l[w] = C, r.seriesInvolved = r.seriesInvolved || D;
        var M = aP(a, y);
        if (M != null) {
          var A = o[M] || (o[M] = {
            axesInfo: {}
          });
          A.axesInfo[w] = C, A.mapper = a[M].mapper, C.linkGroup = A;
        }
      }
    }
  });
}
function nP(r, t, e, n, i, a) {
  var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], u = {};
  T(s, function(v) {
    u[v] = tt(o.get(v));
  }), u.snap = r.type !== "category" && !!a, o.get("type") === "cross" && (u.type = "line");
  var l = u.label || (u.label = {});
  if (l.show == null && (l.show = !1), i === "cross") {
    var f = o.get(["label", "show"]);
    if (l.show = f ?? !0, !a) {
      var h = u.lineStyle = o.get("crossStyle");
      h && ut(l, h.textStyle);
    }
  }
  return r.model.getModel("axisPointer", new Tt(u, e, n));
}
function iP(r, t) {
  t.eachSeries(function(e) {
    var n = e.coordinateSystem, i = e.get(["tooltip", "trigger"], !0), a = e.get(["tooltip", "show"], !0);
    !n || !n.model || i === "none" || i === !1 || i === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || T(r.coordSysAxesInfo[Za(n.model)], function(o) {
      var s = o.axis;
      n.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count());
    });
  });
}
function aP(r, t) {
  for (var e = t.model, n = t.dim, i = 0; i < r.length; i++) {
    var a = r[i] || {};
    if (of(a[n + "AxisId"], e.id) || of(a[n + "AxisIndex"], e.componentIndex) || of(a[n + "AxisName"], e.name))
      return i;
  }
}
function of(r, t) {
  return r === "all" || z(r) && ot(r, t) >= 0 || r === t;
}
function oP(r) {
  var t = hc(r);
  if (t) {
    var e = t.axisPointerModel, n = t.axis.scale, i = e.option, a = e.get("status"), o = e.get("value");
    o != null && (o = n.parse(o));
    var s = Lh(e);
    a == null && (i.status = s ? "show" : "hide");
    var u = n.getExtent();
    // Pick a value on axis when initializing.
    (o == null || o > u[1]) && (o = u[1]), o < u[0] && (o = u[0]), i.value = o, s && (i.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function hc(r) {
  var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[Za(r)];
}
function sP(r) {
  var t = hc(r);
  return t && t.axisPointerModel;
}
function Lh(r) {
  return !!r.get(["handle", "show"]);
}
function Za(r) {
  return r.type + "||" + r.id;
}
var tm = {}, U1 = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i, a) {
      this.axisPointerClass && oP(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, i, !0);
    }, t.prototype.updateAxisPointer = function(e, n, i, a) {
      this._doUpdateAxisPointerClass(e, i, !1);
    }, t.prototype.remove = function(e, n) {
      var i = this._axisPointer;
      i && i.remove(n);
    }, t.prototype.dispose = function(e, n) {
      this._disposeAxisPointer(n), r.prototype.dispose.apply(this, arguments);
    }, t.prototype._doUpdateAxisPointerClass = function(e, n, i) {
      var a = t.getAxisPointerClass(this.axisPointerClass);
      if (a) {
        var o = sP(e);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(e, o, n, i) : this._disposeAxisPointer(n);
      }
    }, t.prototype._disposeAxisPointer = function(e) {
      this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
    }, t.registerAxisPointerClass = function(e, n) {
      tm[e] = n;
    }, t.getAxisPointerClass = function(e) {
      return e && tm[e];
    }, t.type = "axis", t;
  })(le)
), Ph = vt();
function uP(r, t, e, n) {
  var i = e.axis;
  if (!i.scale.isBlank()) {
    var a = e.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), u = n.coordinateSystem.getRect(), l = i.getTicksCoords({
      tickModel: a,
      breakTicks: "none",
      pruneByBreak: "preserve_extent_bound"
    });
    if (l.length) {
      var f = s.length, h = Ph(r).splitAreaColors, v = Y(), c = 0;
      if (h)
        for (var d = 0; d < l.length; d++) {
          var p = h.get(l[d].tickValue);
          if (p != null) {
            c = (p + (f - 1) * d) % f;
            break;
          }
        }
      var m = i.toGlobalCoord(l[0].coord), g = o.getAreaStyle();
      s = z(s) ? s : [s];
      for (var d = 1; d < l.length; d++) {
        var y = i.toGlobalCoord(l[d].coord), _ = void 0, S = void 0, b = void 0, x = void 0;
        i.isHorizontal() ? (_ = m, S = u.y, b = y - _, x = u.height, m = _ + b) : (_ = u.x, S = m, b = u.width, x = y - S, m = S + x);
        var w = l[d - 1].tickValue;
        w != null && v.set(w, c), t.add(new St({
          anid: w != null ? "area_" + w : null,
          shape: {
            x: _,
            y: S,
            width: b,
            height: x
          },
          style: ut({
            fill: s[c]
          }, g),
          autoBatch: !0,
          silent: !0
        })), c = (c + 1) % f;
      }
      Ph(r).splitAreaColors = v;
    }
  }
}
function lP(r) {
  Ph(r).splitAreaColors = null;
}
var fP = ["splitArea", "splitLine", "minorSplitLine", "breakArea"], W1 = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.axisPointerClass = "CartesianAxisPointer", e;
    }
    return t.prototype.render = function(e, n, i, a) {
      this.group.removeAll();
      var o = this._axisGroup;
      if (this._axisGroup = new Mt(), this.group.add(this._axisGroup), !!Ya(e)) {
        this._axisGroup.add(e.axis.axisBuilder.group), T(fP, function(u) {
          e.get([u, "show"]) && hP[u](this, this._axisGroup, e, e.getCoordSysModel(), i);
        }, this);
        var s = a && a.type === "changeAxisOrder" && a.isInitSort;
        s || x0(o, this._axisGroup, e), r.prototype.render.call(this, e, n, i, a);
      }
    }, t.prototype.remove = function() {
      lP(this);
    }, t.type = "cartesianAxis", t;
  })(U1)
), hP = {
  splitLine: function(r, t, e, n, i) {
    var a = e.axis;
    if (!a.scale.isBlank()) {
      var o = e.getModel("splitLine"), s = o.getModel("lineStyle"), u = s.get("color"), l = o.get("showMinLine") !== !1, f = o.get("showMaxLine") !== !1;
      u = z(u) ? u : [u];
      for (var h = n.coordinateSystem.getRect(), v = a.isHorizontal(), c = 0, d = a.getTicksCoords({
        tickModel: o,
        breakTicks: "none",
        pruneByBreak: "preserve_extent_bound"
      }), p = [], m = [], g = s.getLineStyle(), y = 0; y < d.length; y++) {
        var _ = a.toGlobalCoord(d[y].coord);
        if (!(y === 0 && !l || y === d.length - 1 && !f)) {
          var S = d[y].tickValue;
          v ? (p[0] = _, p[1] = h.y, m[0] = _, m[1] = h.y + h.height) : (p[0] = h.x, p[1] = _, m[0] = h.x + h.width, m[1] = _);
          var b = c++ % u.length, x = new Or({
            anid: S != null ? "line_" + S : null,
            autoBatch: !0,
            shape: {
              x1: p[0],
              y1: p[1],
              x2: m[0],
              y2: m[1]
            },
            style: ut({
              stroke: u[b]
            }, g),
            silent: !0
          });
          Oa(x.shape, g.lineWidth), t.add(x);
        }
      }
    }
  },
  minorSplitLine: function(r, t, e, n, i) {
    var a = e.axis, o = e.getModel("minorSplitLine"), s = o.getModel("lineStyle"), u = n.coordinateSystem.getRect(), l = a.isHorizontal(), f = a.getMinorTicksCoords();
    if (f.length)
      for (var h = [], v = [], c = s.getLineStyle(), d = 0; d < f.length; d++)
        for (var p = 0; p < f[d].length; p++) {
          var m = a.toGlobalCoord(f[d][p].coord);
          l ? (h[0] = m, h[1] = u.y, v[0] = m, v[1] = u.y + u.height) : (h[0] = u.x, h[1] = m, v[0] = u.x + u.width, v[1] = m);
          var g = new Or({
            anid: "minor_line_" + f[d][p].tickValue,
            autoBatch: !0,
            shape: {
              x1: h[0],
              y1: h[1],
              x2: v[0],
              y2: v[1]
            },
            style: c,
            silent: !0
          });
          Oa(g.shape, c.lineWidth), t.add(g);
        }
  },
  splitArea: function(r, t, e, n, i) {
    uP(r, t, e, n);
  },
  breakArea: function(r, t, e, n, i) {
    e.axis.scale;
  }
}, Y1 = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "xAxis", t;
  })(W1)
), vP = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = Y1.type, e;
    }
    return t.type = "yAxis", t;
  })(W1)
), cP = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "grid", e;
    }
    return t.prototype.render = function(e, n) {
      this.group.removeAll(), e.get("show") && this.group.add(new St({
        shape: e.coordinateSystem.getRect(),
        style: ut({
          fill: e.get("backgroundColor")
        }, e.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, t.type = "grid", t;
  })(le)
), em = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function dP(r) {
  r.registerComponentView(cP), r.registerComponentModel(H2), r.registerCoordinateSystem("cartesian2d", $2), Yg(r, "x", Ih, em), Yg(r, "y", Ih, em), r.registerComponentView(Y1), r.registerComponentView(vP), r.registerPreprocessor(function(t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  });
}
var vc = vt();
function pP(r, t, e) {
  vc(r)[t] = e;
}
function gP(r, t, e) {
  var n = vc(r), i = n[t];
  i === e && (n[t] = null);
}
function rm(r, t) {
  return !!vc(r)[t];
}
tr({
  type: "takeGlobalCursor",
  event: "globalCursorTaken",
  update: "update"
}, Nt);
var mP = {
  axisPointer: 1,
  tooltip: 1,
  brush: 1
};
function Z1(r, t, e) {
  var n = t.getComponentByElement(r.topTarget);
  if (!n || n === e || mP.hasOwnProperty(n.mainType))
    return !1;
  var i = n.coordinateSystem;
  if (!i || i.model === e)
    return !1;
  var a = Na(n), o = Na(e);
  return !((a.zlevel - o.zlevel || a.z - o.z) <= 0);
}
var yP = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e) {
      var n = r.call(this) || this;
      n._zr = e;
      var i = K(n._mousedownHandler, n), a = K(n._mousemoveHandler, n), o = K(n._mouseupHandler, n), s = K(n._mousewheelHandler, n), u = K(n._pinchHandler, n);
      return n.enable = function(l, f) {
        var h = f.zInfo, v = Na(h.component), c = v.z, d = v.zlevel, p = {
          component: h.component,
          z: c,
          zlevel: d,
          // By default roam controller is the lowest z2 comparing to other elememts in a component.
          z2: X(h.z2, -1 / 0)
        }, m = B({}, f.triggerInfo);
        this._opt = ut(B({}, f), {
          zoomOnMouseWheel: !0,
          moveOnMouseMove: !0,
          // By default, wheel do not trigger move.
          moveOnMouseWheel: !1,
          preventDefaultMouseMove: !0,
          zInfoParsed: p,
          triggerInfo: m,
          cursorGrab: "grab",
          cursorGrabbing: "grabbing"
        }), l == null && (l = !0), (!this._enabled || this._controlType !== l) && (this.disable(), this._enabled = !0, (l === !0 || l === "move" || l === "pan") && (ta(e, "mousedown", i, p), ta(e, "mousemove", a, p), ta(e, "mouseup", o, p)), (l === !0 || l === "scale" || l === "zoom") && (ta(e, "mousewheel", s, p), ta(e, "pinch", u, p)));
      }, n.disable = function() {
        this._enabled && (this._enabled = !1, ea(e, "mousedown", i), ea(e, "mousemove", a), ea(e, "mouseup", o), ea(e, "mousewheel", s), ea(e, "pinch", u));
      }, n;
    }
    return t.prototype.isDragging = function() {
      return this._dragging;
    }, t.prototype.isPinching = function() {
      return this._pinching;
    }, t.prototype._checkPointer = function(e, n, i) {
      var a = this._opt, o = a.zInfoParsed;
      if (Z1(e, a.api, o.component))
        return !1;
      var s = a.triggerInfo, u = s.roamTrigger, l = !1;
      return u === "global" && (l = !0), l || (l = s.isInSelf(e, n, i)), l && s.isInClip && !s.isInClip(e, n, i) && (l = !1), l;
    }, t.prototype._decideCursorStyle = function(e, n, i, a) {
      var o = e.target;
      if (!o && this._checkPointer(e, n, i))
        return this._opt.cursorGrab;
      if (a)
        return o && o.cursor || "default";
    }, t.prototype.dispose = function() {
      this.disable();
    }, t.prototype._mousedownHandler = function(e) {
      if (!(Ec(e) || ji(e))) {
        for (var n = e.target; n; ) {
          if (n.draggable)
            return;
          n = n.__hostTarget || n.parent;
        }
        var i = e.offsetX, a = e.offsetY;
        this._checkPointer(e, i, a) && (this._x = i, this._y = a, this._dragging = !0);
      }
    }, t.prototype._mousemoveHandler = function(e) {
      var n = this._zr;
      if (!(e.gestureEvent === "pinch" || rm(n, "globalPan") || ji(e))) {
        var i = e.offsetX, a = e.offsetY;
        if (!this._dragging || !Cs("moveOnMouseMove", e, this._opt)) {
          var o = this._decideCursorStyle(e, i, a, !1);
          o && n.setCursorStyle(o);
          return;
        }
        n.setCursorStyle(this._opt.cursorGrabbing);
        var s = this._x, u = this._y, l = i - s, f = a - u;
        this._x = i, this._y = a, this._opt.preventDefaultMouseMove && gi(e.event), e.__ecRoamConsumed = !0, nm(this, "pan", "moveOnMouseMove", e, {
          dx: l,
          dy: f,
          oldX: s,
          oldY: u,
          newX: i,
          newY: a,
          isAvailableBehavior: null
        });
      }
    }, t.prototype._mouseupHandler = function(e) {
      if (!ji(e)) {
        var n = this._zr;
        if (!Ec(e)) {
          this._dragging = !1;
          var i = this._decideCursorStyle(e, e.offsetX, e.offsetY, !0);
          i && n.setCursorStyle(i);
        }
      }
    }, t.prototype._mousewheelHandler = function(e) {
      if (!ji(e)) {
        var n = Cs("zoomOnMouseWheel", e, this._opt), i = Cs("moveOnMouseWheel", e, this._opt), a = e.wheelDelta, o = Math.abs(a), s = e.offsetX, u = e.offsetY;
        if (!(a === 0 || !n && !i)) {
          if (n) {
            var l = o > 3 ? 1.4 : o > 1 ? 1.2 : 1.1, f = a > 0 ? l : 1 / l;
            this._checkTriggerMoveZoom(this, "zoom", "zoomOnMouseWheel", e, {
              scale: f,
              originX: s,
              originY: u,
              isAvailableBehavior: null
            });
          }
          if (i) {
            var h = Math.abs(a), v = (a > 0 ? 1 : -1) * (h > 3 ? 0.4 : h > 1 ? 0.15 : 0.05);
            this._checkTriggerMoveZoom(this, "scrollMove", "moveOnMouseWheel", e, {
              scrollDelta: v,
              originX: s,
              originY: u,
              isAvailableBehavior: null
            });
          }
        }
      }
    }, t.prototype._pinchHandler = function(e) {
      if (!(rm(this._zr, "globalPan") || ji(e))) {
        var n = e.pinchScale > 1 ? 1.1 : 1 / 1.1;
        this._checkTriggerMoveZoom(this, "zoom", null, e, {
          scale: n,
          originX: e.pinchX,
          originY: e.pinchY,
          isAvailableBehavior: null
        });
      }
    }, t.prototype._checkTriggerMoveZoom = function(e, n, i, a, o) {
      e._checkPointer(a, o.originX, o.originY) && (gi(a.event), a.__ecRoamConsumed = !0, nm(e, n, i, a, o));
    }, t;
  })(Te)
);
function ji(r) {
  return r.__ecRoamConsumed;
}
var _P = vt();
function Uu(r) {
  var t = _P(r);
  return t.roam = t.roam || {}, t.uniform = t.uniform || {}, t;
}
function ta(r, t, e, n) {
  for (var i = Uu(r), a = i.roam, o = a[t] = a[t] || [], s = 0; s < o.length; s++) {
    var u = o[s].zInfoParsed;
    if ((u.zlevel - n.zlevel || u.z - n.z || u.z2 - n.z2) <= 0)
      break;
  }
  o.splice(s, 0, {
    listener: e,
    zInfoParsed: n
  }), SP(r, t);
}
function ea(r, t, e) {
  for (var n = Uu(r), i = n.roam[t] || [], a = 0; a < i.length; a++)
    if (i[a].listener === e) {
      i.splice(a, 1), i.length || bP(r, t);
      return;
    }
}
function SP(r, t) {
  var e = Uu(r);
  e.uniform[t] || r.on(t, e.uniform[t] = function(n) {
    var i = e.roam[t];
    if (i)
      for (var a = 0; a < i.length; a++)
        i[a].listener(n);
  });
}
function bP(r, t) {
  var e = Uu(r), n = e.uniform;
  n[t] && (r.off(t, n[t]), n[t] = null);
}
function nm(r, t, e, n, i) {
  i.isAvailableBehavior = K(Cs, null, e, n), r.trigger(t, i);
}
function Cs(r, t, e) {
  var n = e[r];
  return !r || n && (!V(n) || t.event[n + "Key"]);
}
var xP = 0, im = 1, wP = 2;
var TP = "view";
/** @class */
(function(r) {
  k(t, r);
  function t(e, n, i) {
    var a = r.call(this) || this;
    a.type = TP, a.dimensions = ["x", "y"];
    var o = a;
    o.invertY = e, o.lgCt = n, o.lgGeo = i;
    var s = o.trans = [];
    return s[xP] = cl(), s[im] = cl(), s[wP] = cl(), o.mtRaw = te(), o.mtRawInv = te(), o.mtOverall = te(), o.mtOverallInv = te(), o.zoom = 1, a;
  }
  return t.prototype.getBoundingRect = function() {
    return X1(null, this);
  }, t.prototype.getViewRect = function() {
    return MP(null, this);
  }, t.prototype.getRoamTransform = function() {
    return _y(this.trans[im]);
  }, t.prototype.dataToPoint = function(e, n, i) {
    var a = n ? this.mtRaw : this.mtOverall;
    return i = i || [], a ? re(i, e, a) : Ic(i, e);
  }, t.prototype.pointToData = function(e, n, i) {
    i = i || [];
    var a = this.mtOverallInv;
    return a ? re(i, e, a) : Ic(i, e);
  }, t.prototype.convertToPixel = function(e, n, i) {
    var a = am(n);
    return a === this ? a.dataToPoint(i) : null;
  }, t.prototype.convertFromPixel = function(e, n, i) {
    var a = am(n);
    return a === this ? a.pointToData(i) : null;
  }, t.prototype.containPoint = function(e) {
    var n = this;
    return Ia(es, n.dataRect), ny(es, es, n.mtOverall), wb(es, e[0], e[1]);
  }, t.dimensions = ["x", "y"], t;
})(Rn);
var es = mu();
function CP(r, t) {
  return gu([], t.mtOverall);
}
function X1(r, t) {
  return Ia(mu(), t.dataRect);
}
function MP(r, t) {
  return Ia(mu(), t.viewRect);
}
mu();
function am(r) {
  var t = r.seriesModel;
  return t ? t.coordinateSystem : null;
}
function Di(r, t, e, n, i, a) {
  r = r || 0;
  var o = cn(e[1], -e[0]);
  if (i != null && (i = Kn(i, [0, o])), a != null && (a = Math.max(a, i ?? 0)), n === "all") {
    var s = Math.abs(cn(t[1], -t[0]));
    s = Kn(s, [0, o]), i = a = Kn(s, [i, a]), n = 0;
  }
  t[0] = Kn(t[0], e), t[1] = Kn(t[1], e);
  var u = sf(t, n);
  t[n] += r;
  var l = i || 0, f = e.slice();
  u.sign < 0 ? f[0] = cn(f[0], l) : f[1] = cn(f[1], -l), t[n] = Kn(t[n], f);
  var h;
  return h = sf(t, n), i != null && (h.sign !== u.sign || h.span < i) && (t[1 - n] = cn(t[n], u.sign * i)), h = sf(t, n), a != null && h.span > a && (t[1 - n] = cn(t[n], h.sign * a)), t;
}
function sf(r, t) {
  var e = r[t] - r[1 - t];
  return {
    span: Math.abs(e),
    sign: e > 0 ? -1 : e < 0 ? 1 : t ? -1 : 1
  };
}
function Kn(r, t) {
  return Math.min(t[1] != null ? t[1] : 1 / 0, Math.max(t[0] != null ? t[0] : -1 / 0, r));
}
var Ln = !0, Xa = Math.min, Ai = Math.max, DP = Math.pow, AP = 1e4, IP = 6, LP = 6, om = "globalPan", PP = {
  w: [0, 0],
  e: [0, 1],
  n: [1, 0],
  s: [1, 1]
}, RP = {
  w: "ew",
  e: "ew",
  n: "ns",
  s: "ns",
  ne: "nesw",
  sw: "nesw",
  nw: "nwse",
  se: "nwse"
}, sm = {
  brushStyle: {
    lineWidth: 2,
    stroke: O.color.backgroundTint,
    fill: O.color.borderTint
  },
  transformable: !0,
  brushMode: "single",
  removeOnClick: !1
}, EP = 0, OP = (
  /** @class */
  (function(r) {
    k(t, r);
    function t(e) {
      var n = r.call(this) || this;
      return n._track = [], n._covers = [], n._handlers = {}, n._zr = e, n.group = new Mt(), n._uid = "brushController_" + EP++, T(VP, function(i, a) {
        this._handlers[a] = K(i, this);
      }, n), n;
    }
    return t.prototype.enableBrush = function(e) {
      return this._brushType && this._doDisableBrush(), e.brushType && this._doEnableBrush(e), this;
    }, t.prototype._doEnableBrush = function(e) {
      var n = this._zr;
      this._enableGlobalPan || pP(n, om, this._uid), T(this._handlers, function(i, a) {
        n.on(a, i);
      }), this._brushType = e.brushType, this._brushOption = at(tt(sm), e, !0);
    }, t.prototype._doDisableBrush = function() {
      var e = this._zr;
      gP(e, om, this._uid), T(this._handlers, function(n, i) {
        e.off(i, n);
      }), this._brushType = this._brushOption = null;
    }, t.prototype.setPanels = function(e) {
      if (e && e.length) {
        var n = this._panels = {};
        T(e, function(i) {
          n[i.panelId] = tt(i);
        });
      } else
        this._panels = null;
      return this;
    }, t.prototype.mount = function(e) {
      e = e || {}, this._enableGlobalPan = e.enableGlobalPan;
      var n = this.group;
      return this._zr.add(n), n.attr({
        x: e.x || 0,
        y: e.y || 0,
        rotation: e.rotation || 0,
        scaleX: e.scaleX || 1,
        scaleY: e.scaleY || 1
      }), this._transform = n.getLocalTransform(), this;
    }, t.prototype.updateCovers = function(e) {
      e = U(e, function(v) {
        return at(tt(sm), v, !0);
      });
      var n = "\0-brush-index-", i = this._covers, a = this._covers = [], o = this, s = this._creatingCover;
      return new ec(i, e, l, u).add(f).update(f).remove(h).execute(), this;
      function u(v, c) {
        return (v.id != null ? v.id : n + c) + "-" + v.brushType;
      }
      function l(v, c) {
        return u(v.__brushOption, c);
      }
      function f(v, c) {
        var d = e[v];
        if (c != null && i[c] === s)
          a[v] = i[c];
        else {
          var p = a[v] = c != null ? (i[c].__brushOption = d, i[c]) : q1(o, $1(o, d));
          cc(o, p);
        }
      }
      function h(v) {
        i[v] !== s && o.group.remove(i[v]);
      }
    }, t.prototype.unmount = function() {
      return this.enableBrush(!1), Rh(this), this._zr.remove(this.group), this;
    }, t.prototype.dispose = function() {
      this.unmount(), this.off();
    }, t;
  })(Te)
);
function $1(r, t) {
  var e = Wu[t.brushType].createCover(r, t);
  return e.__brushOption = t, Q1(e, t), r.group.add(e), e;
}
function q1(r, t) {
  var e = dc(t);
  return e.endCreating && (e.endCreating(r, t), Q1(t, t.__brushOption)), t;
}
function K1(r, t) {
  var e = t.__brushOption;
  dc(t).updateCoverShape(r, t, e.range, e);
}
function Q1(r, t) {
  var e = t.z;
  e == null && (e = AP), r.traverse(function(n) {
    n.z = e, n.z2 = e;
  });
}
function cc(r, t) {
  dc(t).updateCommon(r, t), K1(r, t);
}
function dc(r) {
  return Wu[r.__brushOption.brushType];
}
function pc(r, t, e) {
  var n = r._panels;
  if (!n)
    return Ln;
  var i, a = r._transform;
  return T(n, function(o) {
    o.isTargetByCursor(t, e, a) && (i = o);
  }), i;
}
function J1(r, t) {
  var e = r._panels;
  if (!e)
    return Ln;
  var n = t.__brushOption.panelId;
  return n != null ? e[n] : Ln;
}
function Rh(r) {
  var t = r._covers, e = t.length;
  return T(t, function(n) {
    r.group.remove(n);
  }, r), t.length = 0, !!e;
}
function Pn(r, t) {
  var e = U(r._covers, function(n) {
    var i = n.__brushOption, a = tt(i.range);
    return {
      brushType: i.brushType,
      panelId: i.panelId,
      range: a
    };
  });
  r.trigger("brush", {
    areas: e,
    isEnd: !!t.isEnd,
    removeOnClick: !!t.removeOnClick
  });
}
function kP(r) {
  var t = r._track;
  if (!t.length)
    return !1;
  var e = t[t.length - 1], n = t[0], i = e[0] - n[0], a = e[1] - n[1], o = DP(i * i + a * a, 0.5);
  return o > IP;
}
function j1(r) {
  var t = r.length - 1;
  return t < 0 && (t = 0), [r[0], r[t]];
}
function tS(r, t, e, n) {
  var i = new Mt();
  return i.add(new St({
    name: "main",
    style: gc(e),
    silent: !0,
    draggable: !0,
    cursor: "move",
    drift: ht(um, r, t, i, ["n", "s", "w", "e"]),
    ondragend: ht(Pn, t, {
      isEnd: !0
    })
  })), T(n, function(a) {
    i.add(new St({
      name: a.join(""),
      style: {
        opacity: 0
      },
      draggable: !0,
      silent: !0,
      invisible: !0,
      drift: ht(um, r, t, i, a),
      ondragend: ht(Pn, t, {
        isEnd: !0
      })
    }));
  }), i;
}
function eS(r, t, e, n) {
  var i = n.brushStyle.lineWidth || 0, a = Ai(i, LP), o = e[0][0], s = e[1][0], u = o - i / 2, l = s - i / 2, f = e[0][1], h = e[1][1], v = f - a + i / 2, c = h - a + i / 2, d = f - o, p = h - s, m = d + i, g = p + i;
  ar(r, t, "main", o, s, d, p), n.transformable && (ar(r, t, "w", u, l, a, g), ar(r, t, "e", v, l, a, g), ar(r, t, "n", u, l, m, a), ar(r, t, "s", u, c, m, a), ar(r, t, "nw", u, l, a, a), ar(r, t, "ne", v, l, a, a), ar(r, t, "sw", u, c, a, a), ar(r, t, "se", v, c, a, a));
}
function Eh(r, t) {
  var e = t.__brushOption, n = e.transformable, i = t.childAt(0);
  i.useStyle(gc(e)), i.attr({
    silent: !n,
    cursor: n ? "move" : "default"
  }), T([["w"], ["e"], ["n"], ["s"], ["s", "e"], ["s", "w"], ["n", "e"], ["n", "w"]], function(a) {
    var o = t.childOfName(a.join("")), s = a.length === 1 ? Oh(r, a[0]) : NP(r, a);
    o && o.attr({
      silent: !n,
      invisible: !n,
      cursor: n ? RP[s] + "-resize" : null
    });
  });
}
function ar(r, t, e, n, i, a, o) {
  var s = t.childOfName(e);
  s && s.setShape(zP(mc(r, t, [[n, i], [n + a, i + o]])));
}
function gc(r) {
  return ut({
    strokeNoScale: !0
  }, r.brushStyle);
}
function rS(r, t, e, n) {
  var i = [Xa(r, e), Xa(t, n)], a = [Ai(r, e), Ai(t, n)];
  return [
    [i[0], a[0]],
    [i[1], a[1]]
    // y range
  ];
}
function BP(r) {
  return wv(r.group);
}
function Oh(r, t) {
  var e = {
    w: "left",
    e: "right",
    n: "top",
    s: "bottom"
  }, n = {
    left: "w",
    right: "e",
    top: "n",
    bottom: "s"
  }, i = Tv(e[t], BP(r));
  return n[i];
}
function NP(r, t) {
  var e = [Oh(r, t[0]), Oh(r, t[1])];
  return (e[0] === "e" || e[0] === "w") && e.reverse(), e.join("");
}
function um(r, t, e, n, i, a) {
  var o = e.__brushOption, s = r.toRectRange(o.range), u = nS(t, i, a);
  T(n, function(l) {
    var f = PP[l];
    s[f[0]][f[1]] += u[f[0]];
  }), o.range = r.fromRectRange(rS(s[0][0], s[1][0], s[0][1], s[1][1])), cc(t, e), Pn(t, {
    isEnd: !1
  });
}
function FP(r, t, e, n) {
  var i = t.__brushOption.range, a = nS(r, e, n);
  T(i, function(o) {
    o[0] += a[0], o[1] += a[1];
  }), cc(r, t), Pn(r, {
    isEnd: !1
  });
}
function nS(r, t, e) {
  var n = r.group, i = n.transformCoordToLocal(t, e), a = n.transformCoordToLocal(0, 0);
  return [i[0] - a[0], i[1] - a[1]];
}
function mc(r, t, e) {
  var n = J1(r, t);
  return n && n !== Ln ? n.clipPath(e, r._transform) : tt(e);
}
function zP(r) {
  var t = Xa(r[0][0], r[1][0]), e = Xa(r[0][1], r[1][1]), n = Ai(r[0][0], r[1][0]), i = Ai(r[0][1], r[1][1]);
  return {
    x: t,
    y: e,
    width: n - t,
    height: i - e
  };
}
function HP(r, t, e) {
  if (
    // Check active
    !(!r._brushType || GP(r, t.offsetX, t.offsetY))
  ) {
    var n = r._zr, i = r._covers, a = pc(r, t, e);
    if (!r._dragging)
      for (var o = 0; o < i.length; o++) {
        var s = i[o].__brushOption;
        if (a && (a === Ln || s.panelId === a.panelId) && Wu[s.brushType].contain(i[o], e[0], e[1]))
          return;
      }
    a && n.setCursorStyle("crosshair");
  }
}
function kh(r) {
  var t = r.event;
  t.preventDefault && t.preventDefault();
}
function Bh(r, t, e) {
  return r.childOfName("main").contain(t, e);
}
function iS(r, t, e, n) {
  var i = r._creatingCover, a = r._creatingPanel, o = r._brushOption, s;
  if (r._track.push(e.slice()), kP(r) || i) {
    if (a && !i) {
      o.brushMode === "single" && Rh(r);
      var u = tt(o);
      u.brushType = lm(u.brushType, a), u.panelId = a === Ln ? null : a.panelId, i = r._creatingCover = $1(r, u), r._covers.push(i);
    }
    if (i) {
      var l = Wu[lm(r._brushType, a)], f = i.__brushOption;
      f.range = l.getCreatingRange(mc(r, i, r._track)), n && (q1(r, i), l.updateCommon(r, i)), K1(r, i), s = {
        isEnd: n
      };
    }
  } else n && o.brushMode === "single" && o.removeOnClick && pc(r, t, e) && Rh(r) && (s = {
    isEnd: n,
    removeOnClick: !0
  });
  return s;
}
function lm(r, t) {
  return r === "auto" ? t.defaultBrushType : r;
}
var VP = {
  mousedown: function(r) {
    if (this._dragging)
      fm(this, r);
    else if (!r.target || !r.target.draggable) {
      kh(r);
      var t = this.group.transformCoordToLocal(r.offsetX, r.offsetY);
      this._creatingCover = null;
      var e = this._creatingPanel = pc(this, r, t);
      e && (this._dragging = !0, this._track = [t.slice()]);
    }
  },
  mousemove: function(r) {
    var t = r.offsetX, e = r.offsetY, n = this.group.transformCoordToLocal(t, e);
    if (HP(this, r, n), this._dragging) {
      kh(r);
      var i = iS(this, r, n, !1);
      i && Pn(this, i);
    }
  },
  mouseup: function(r) {
    fm(this, r);
  }
};
function fm(r, t) {
  if (r._dragging) {
    kh(t);
    var e = t.offsetX, n = t.offsetY, i = r.group.transformCoordToLocal(e, n), a = iS(r, t, i, !0);
    r._dragging = !1, r._track = [], r._creatingCover = null, a && Pn(r, a);
  }
}
function GP(r, t, e) {
  var n = r._zr;
  return t < 0 || t > n.getWidth() || e < 0 || e > n.getHeight();
}
var Wu = {
  lineX: hm(0),
  lineY: hm(1),
  rect: {
    createCover: function(r, t) {
      function e(n) {
        return n;
      }
      return tS({
        toRectRange: e,
        fromRectRange: e
      }, r, t, [["w"], ["e"], ["n"], ["s"], ["s", "e"], ["s", "w"], ["n", "e"], ["n", "w"]]);
    },
    getCreatingRange: function(r) {
      var t = j1(r);
      return rS(t[1][0], t[1][1], t[0][0], t[0][1]);
    },
    updateCoverShape: function(r, t, e, n) {
      eS(r, t, e, n);
    },
    updateCommon: Eh,
    contain: Bh
  },
  polygon: {
    createCover: function(r, t) {
      var e = new Mt();
      return e.add(new io({
        name: "main",
        style: gc(t),
        silent: !0
      })), e;
    },
    getCreatingRange: function(r) {
      return r;
    },
    endCreating: function(r, t) {
      t.remove(t.childAt(0)), t.add(new no({
        name: "main",
        draggable: !0,
        drift: ht(FP, r, t),
        ondragend: ht(Pn, r, {
          isEnd: !0
        })
      }));
    },
    updateCoverShape: function(r, t, e, n) {
      t.childAt(0).setShape({
        points: mc(r, t, e)
      });
    },
    updateCommon: Eh,
    contain: Bh
  }
};
function hm(r) {
  return {
    createCover: function(t, e) {
      return tS({
        toRectRange: function(n) {
          var i = [n, [0, 100]];
          return r && i.reverse(), i;
        },
        fromRectRange: function(n) {
          return n[r];
        }
      }, t, e, [[["w"], ["e"]], [["n"], ["s"]]][r]);
    },
    getCreatingRange: function(t) {
      var e = j1(t), n = Xa(e[0][r], e[1][r]), i = Ai(e[0][r], e[1][r]);
      return [n, i];
    },
    updateCoverShape: function(t, e, n, i) {
      var a, o = J1(t, e);
      if (o !== Ln && o.getLinearBrushOtherExtent)
        a = o.getLinearBrushOtherExtent(r);
      else {
        var s = t._zr;
        a = [0, [s.getWidth(), s.getHeight()][1 - r]];
      }
      var u = [n, a];
      r && u.reverse(), eS(t, e, u, i);
    },
    updateCommon: Eh,
    contain: Bh
  };
}
function UP(r) {
  return r = yc(r), function(t) {
    return w0(t, r);
  };
}
function WP(r, t) {
  return r = yc(r), function(e) {
    var n = t ?? e, i = n ? r.width : r.height, a = n ? r.x : r.y;
    return [a, a + (i || 0)];
  };
}
function YP(r, t, e) {
  var n = yc(r);
  return function(i, a) {
    return n.contain(a[0], a[1]) && !Z1(i, t, e);
  };
}
function yc(r) {
  return j.create(r);
}
var pn = vt(), vm = tt, uf = K, ZP = (
  /** @class */
  (function() {
    function r() {
      this._dragging = !1, this.animationThreshold = 15;
    }
    return r.prototype.render = function(t, e, n, i) {
      var a = e.get("value"), o = e.get("status");
      if (this._axisModel = t, this._axisPointerModel = e, this._api = n, !(!i && this._lastValue === a && this._lastStatus === o)) {
        this._lastValue = a, this._lastStatus = o;
        var s = this._group, u = this._handle;
        if (!o || o === "hide") {
          s && s.hide(), u && u.hide();
          return;
        }
        s && s.show(), u && u.show();
        var l = {};
        this.makeElOption(l, a, t, e, n);
        var f = l.graphicKey;
        f !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = f;
        var h = this._moveAnimation = this.determineAnimation(t, e);
        if (!s)
          s = this._group = new Mt(), this.createPointerEl(s, l, t, e), this.createLabelEl(s, l, t, e), n.getZr().add(s);
        else {
          var v = ht(cm, e, h);
          this.updatePointerEl(s, l, v), this.updateLabelEl(s, l, v, e);
        }
        pm(s, e, !0), this._renderHandle(a);
      }
    }, r.prototype.remove = function(t) {
      this.clear(t);
    }, r.prototype.dispose = function(t) {
      this.clear(t);
    }, r.prototype.determineAnimation = function(t, e) {
      var n = e.get("animation"), i = t.axis, a = i.type === "category", o = e.get("snap");
      if (!o && !a)
        return !1;
      if (n === "auto" || n == null) {
        var s = this.animationThreshold;
        if (a && Gu(i).w > s)
          return !0;
        if (o) {
          var u = hc(t).seriesDataCount, l = i.getExtent();
          return Math.abs(l[0] - l[1]) / u > s;
        }
        return !1;
      }
      return n === !0;
    }, r.prototype.makeElOption = function(t, e, n, i, a) {
    }, r.prototype.createPointerEl = function(t, e, n, i) {
      var a = e.pointer;
      if (a) {
        var o = pn(t).pointerEl = new yC[a.type](vm(e.pointer));
        t.add(o);
      }
    }, r.prototype.createLabelEl = function(t, e, n, i) {
      if (e.label) {
        var a = pn(t).labelEl = new Rt(vm(e.label));
        t.add(a), dm(a, i);
      }
    }, r.prototype.updatePointerEl = function(t, e, n) {
      var i = pn(t).pointerEl;
      i && e.pointer && (i.setStyle(e.pointer.style), n(i, {
        shape: e.pointer.shape
      }));
    }, r.prototype.updateLabelEl = function(t, e, n, i) {
      var a = pn(t).labelEl;
      a && (a.setStyle(e.label.style), n(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: e.label.x,
        y: e.label.y
      }), dm(a, i));
    }, r.prototype._renderHandle = function(t) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, a = e.getModel("handle"), o = e.get("status");
        if (!a.get("show") || !o || o === "hide") {
          i && n.remove(i), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, i = this._handle = Pu(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(l) {
            gi(l.event);
          },
          onmousedown: uf(this._onHandleDragMove, this, 0, 0),
          drift: uf(this._onHandleDragMove, this),
          ondragend: uf(this._onHandleDragEnd, this)
        }), n.add(i)), pm(i, e, !1), i.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var u = a.get("size");
        z(u) || (u = [u, u]), i.scaleX = u[0] / 2, i.scaleY = u[1] / 2, Nu(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
      }
    }, r.prototype._moveHandleToValue = function(t, e) {
      cm(this._axisPointerModel, !e && this._moveAnimation, this._handle, lf(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    }, r.prototype._onHandleDragMove = function(t, e) {
      var n = this._handle;
      if (n) {
        this._dragging = !0;
        var i = this.updateHandleTransform(lf(n), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = i, n.stopAnimation(), n.attr(lf(i)), pn(n).lastProp = null, this._doDispatchAxisPointer();
      }
    }, r.prototype._doDispatchAxisPointer = function() {
      var t = this._handle;
      if (t) {
        var e = this._payloadInfo, n = this._axisModel;
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: e.cursorPoint[0],
          y: e.cursorPoint[1],
          tooltipOption: e.tooltipOption,
          axesInfo: [{
            axisDim: n.axis.dim,
            axisIndex: n.componentIndex
          }]
        });
      }
    }, r.prototype._onHandleDragEnd = function() {
      this._dragging = !1;
      var t = this._handle;
      if (t) {
        var e = this._axisPointerModel.get("value");
        this._moveHandleToValue(e), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    }, r.prototype.clear = function(t) {
      this._lastValue = null, this._lastStatus = null;
      var e = t.getZr(), n = this._group, i = this._handle;
      e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), $s(this, "_doDispatchAxisPointer");
    }, r.prototype.doClear = function() {
    }, r.prototype.buildLabel = function(t, e, n) {
      return n = n || 0, {
        x: t[n],
        y: t[1 - n],
        width: e[n],
        height: e[1 - n]
      };
    }, r;
  })()
);
function cm(r, t, e, n) {
  aS(pn(e).lastProp, n) || (pn(e).lastProp = n, t ? kr(e, n, r) : (e.stopAnimation(), e.attr(n)));
}
function aS(r, t) {
  if (Z(r) && Z(t)) {
    var e = !0;
    return T(t, function(n, i) {
      e = e && aS(r[i], n);
    }), !!e;
  } else
    return r === t;
}
function dm(r, t) {
  r[t.get(["label", "show"]) ? "show" : "hide"]();
}
function lf(r) {
  return {
    x: r.x || 0,
    y: r.y || 0,
    rotation: r.rotation || 0
  };
}
function pm(r, t, e) {
  var n = t.get("z"), i = t.get("zlevel");
  r && r.traverse(function(a) {
    a.type !== "group" && (n != null && (a.z = n), i != null && (a.zlevel = i), a.silent = e);
  });
}
function XP(r) {
  var t = r.get("type"), e = r.getModel(t + "Style"), n;
  return t === "line" ? (n = e.getLineStyle(), n.fill = null) : t === "shadow" && (n = e.getAreaStyle(), n.stroke = null), n;
}
function $P(r, t, e, n, i) {
  var a = e.get("value"), o = oS(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
    precision: e.get(["label", "precision"]),
    formatter: e.get(["label", "formatter"])
  }), s = e.getModel("label"), u = ku(s.get("padding") || 0), l = s.getFont(), f = ev(o, l), h = i.position, v = f.width + u[1] + u[3], c = f.height + u[0] + u[2], d = i.align;
  d === "right" && (h[0] -= v), d === "center" && (h[0] -= v / 2);
  var p = i.verticalAlign;
  p === "bottom" && (h[1] -= c), p === "middle" && (h[1] -= c / 2), qP(h, v, c, n);
  var m = s.get("backgroundColor");
  (!m || m === "auto") && (m = t.get(["axisLine", "lineStyle", "color"])), r.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: h[0],
    y: h[1],
    style: hr(s, {
      text: o,
      font: l,
      fill: s.getTextColor(),
      padding: u,
      backgroundColor: m
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function qP(r, t, e, n) {
  var i = n.getWidth(), a = n.getHeight();
  r[0] = Math.min(r[0] + t, i) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0);
}
function oS(r, t, e, n, i) {
  r = t.scale.parse(r);
  var a = t.scale.getLabel({
    value: r
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: i.precision
  }), o = i.formatter;
  if (o) {
    var s = {
      value: iu(t, {
        value: r
      }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: []
    };
    T(n, function(u) {
      var l = e.getSeriesByIndex(u.seriesIndex), f = u.dataIndexInside, h = l && l.getDataParams(f);
      h && s.seriesData.push(h);
    }), V(o) ? a = o.replace("{value}", a) : Q(o) && (a = o(s));
  }
  return a;
}
function sS(r, t, e) {
  var n = te();
  return jh(n, n, e.rotation), Lf(n, n, e.position), ka([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], n);
}
function KP(r, t, e, n, i, a) {
  var o = Rr.innerTextLayout(e.rotation, 0, e.labelDirection);
  e.labelMargin = i.get(["label", "margin"]), $P(t, n, i, a, {
    position: sS(n.axis, r, e),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function QP(r, t, e) {
  return e = e || 0, {
    x1: r[e],
    y1: r[1 - e],
    x2: t[e],
    y2: t[1 - e]
  };
}
function JP(r, t, e) {
  return e = e || 0, {
    x: r[e],
    y: r[1 - e],
    width: t[e],
    height: t[1 - e]
  };
}
function jP(r, t, e) {
  return Gu(r, {
    fromStat: {
      sers: U(t, function(n) {
        return e.getSeriesByIndex(n.seriesIndex);
      })
    },
    min: 1
  }).w;
}
function tR(r, t, e) {
  return [gt(ae(t[0], t[1]), r - e / 2), ae(r + e / 2, gt(t[0], t[1]))];
}
var eR = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.makeElOption = function(e, n, i, a, o) {
      var s = i.axis, u = s.grid, l = a.get("type"), f = s.getGlobalExtent(), h = gm(u, s).getOtherAxis(s).getGlobalExtent(), v = s.toGlobalCoord(s.dataToCoord(n, !0));
      if (l && l !== "none") {
        var c = XP(a), d = rR[l](s, v, f, h, a.get("seriesDataIndices"), a.ecModel);
        d.style = c, e.graphicKey = d.type, e.pointer = d;
      }
      var p = lu(u.getRect(), i);
      KP(n, e, p, i, a, o);
    }, t.prototype.getHandleTransform = function(e, n, i) {
      var a = lu(n.axis.grid.getRect(), n, {
        labelInside: !1
      });
      a.labelMargin = i.get(["handle", "margin"]);
      var o = sS(n.axis, e, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, t.prototype.updateHandleTransform = function(e, n, i, a) {
      var o = i.axis, s = o.grid, u = o.getGlobalExtent(!0), l = gm(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [e.x, e.y];
      h[f] += n[f], h[f] = ae(u[1], h[f]), h[f] = gt(u[0], h[f]);
      var v = (l[1] + l[0]) / 2, c = [v, v];
      c[f] = h[f];
      var d = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: h[0],
        y: h[1],
        rotation: e.rotation,
        cursorPoint: c,
        tooltipOption: d[f]
      };
    }, t;
  })(ZP)
);
function gm(r, t) {
  var e = {};
  return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e);
}
var rR = {
  line: function(r, t, e, n) {
    var i = QP([t, n[0]], [t, n[1]], mm(r));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: i
    };
  },
  shadow: function(r, t, e, n, i, a) {
    var o = jP(r, i, a), s = n[1] - n[0], u = tR(t, e, o), l = u[0], f = u[1];
    return {
      type: "Rect",
      shape: JP([l, n[0]], [f - l, s], mm(r))
    };
  }
};
function mm(r) {
  return r.dim === "x" ? 0 : 1;
}
var nR = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "axisPointer", t.defaultOption = {
      // 'auto' means that show when triggered by tooltip or handle.
      show: "auto",
      // zlevel: 0,
      z: 50,
      type: "line",
      // axispointer triggered by tootip determine snap automatically,
      // see `modelHelper`.
      snap: !1,
      triggerTooltip: !0,
      triggerEmphasis: !0,
      value: null,
      status: null,
      link: [],
      // Do not set 'auto' here, otherwise global animation: false
      // will not effect at this axispointer.
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: O.color.border,
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: O.color.shadowTint
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: O.color.neutral00,
        padding: [5, 7, 5, 7],
        backgroundColor: O.color.accent60,
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle: {
        show: !1,
        // eslint-disable-next-line
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        // handle margin is from symbol center to axis, which is stable when circular move.
        margin: 50,
        // color: '#1b8bbd'
        // color: '#2f4554'
        color: O.color.accent40,
        // For mobile performance
        throttle: 40
      }
    }, t;
  })(ct)
), sr = vt(), iR = T;
function uS(r, t, e) {
  if (!et.node) {
    var n = t.getZr();
    sr(n).records || (sr(n).records = {}), aR(n, t);
    var i = sr(n).records[r] || (sr(n).records[r] = {});
    i.handler = e;
  }
}
function aR(r, t) {
  if (sr(r).initialized)
    return;
  sr(r).initialized = !0, e("click", ht(ff, "click")), e("mousemove", ht(ff, "mousemove")), e("mousewheel", ht(ff, "mousewheel")), e("globalout", sR);
  function e(n, i) {
    r.on(n, function(a) {
      var o = uR(t);
      iR(sr(r).records, function(s) {
        s && i(s, a, o.dispatchAction);
      }), oR(o.pendings, t);
    });
  }
}
function oR(r, t) {
  var e = r.showTip.length, n = r.hideTip.length, i;
  e ? i = r.showTip[e - 1] : n && (i = r.hideTip[n - 1]), i && (i.dispatchAction = null, t.dispatchAction(i));
}
function sR(r, t, e) {
  r.handler("leave", null, e);
}
function ff(r, t, e, n) {
  t.handler(r, e, n);
}
function uR(r) {
  var t = {
    showTip: [],
    hideTip: []
  }, e = function(n) {
    var i = t[n.type];
    i ? i.push(n) : (n.dispatchAction = e, r.dispatchAction(n));
  };
  return {
    dispatchAction: e,
    pendings: t
  };
}
function Nh(r, t) {
  if (!et.node) {
    var e = t.getZr(), n = (sr(e).records || {})[r];
    n && (sr(e).records[r] = null);
  }
}
var lR = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i) {
      var a = n.getComponent("tooltip"), o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click|mousewheel";
      uS("axisPointer", i, function(s, u, l) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && l({
          type: "updateAxisPointer",
          currTrigger: s,
          x: u && u.offsetX,
          y: u && u.offsetY
        });
      });
    }, t.prototype.remove = function(e, n) {
      Nh("axisPointer", n);
    }, t.prototype.dispose = function(e, n) {
      Nh("axisPointer", n);
    }, t.type = "axisPointer", t;
  })(le)
);
function lS(r, t) {
  var e = [], n = r.seriesIndex, i;
  if (n == null || !(i = t.getSeriesByIndex(n)))
    return {
      point: []
    };
  var a = i.getData(), o = Mn(a, r);
  if (o == null || o < 0 || z(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), u = i.coordinateSystem;
  if (i.getTooltipPosition)
    e = i.getTooltipPosition(o) || [];
  else if (u && u.dataToPoint)
    if (r.isStacked) {
      var l = u.getBaseAxis(), f = u.getOtherAxis(l), h = f.dim, v = l.dim, c = h === "x" || h === "radius" ? 1 : 0, d = a.mapDimension(v), p = [];
      p[c] = a.get(d, o), p[1 - c] = a.get(a.getCalculationInfo("stackResultDimension"), o), e = u.dataToPoint(p) || [];
    } else
      e = u.dataToPoint(a.getValues(U(u.dimensions, function(g) {
        return a.mapDimension(g);
      }), o)) || [];
  else if (s) {
    var m = s.getBoundingRect().clone();
    m.applyTransform(s.transform), e = [m.x + m.width / 2, m.y + m.height / 2];
  }
  return {
    point: e,
    el: s
  };
}
var ym = vt();
function fR(r, t, e) {
  var n = r.currTrigger, i = [r.x, r.y], a = r, o = r.dispatchAction || K(e.dispatchAction, e), s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    Ms(i) && (i = lS({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, t).point);
    var u = Ms(i), l = a.axesInfo, f = s.axesInfo, h = n === "leave" || Ms(i), v = {}, c = {}, d = {
      list: [],
      map: {}
    }, p = {
      showPointer: ht(vR, c),
      showTooltip: ht(cR, d)
    };
    T(s.coordSysMap, function(g, y) {
      var _ = u || g.containPoint(i);
      T(s.coordSysAxesInfo[y], function(S, b) {
        var x = S.axis, w = mR(l, S);
        if (!h && _ && (!l || w)) {
          var D = w && w.value;
          D == null && !u && (D = x.pointToData(i)), D != null && _m(S, D, p, !1, v);
        }
      });
    });
    var m = {};
    return T(f, function(g, y) {
      var _ = g.linkGroup;
      _ && !c[y] && T(_.axesInfo, function(S, b) {
        var x = c[b];
        if (S !== g && x) {
          var w = x.value;
          _.mapper && (w = g.axis.scale.parse(_.mapper(w, Sm(S), Sm(g)))), m[g.key] = w;
        }
      });
    }), T(m, function(g, y) {
      _m(f[y], g, p, !0, v);
    }), dR(c, f, v), pR(d, i, r, o), gR(f, o, e), v;
  }
}
function _m(r, t, e, n, i) {
  var a = r.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!r.involveSeries) {
      e.showPointer(r, t);
      return;
    }
    var o = hR(t, r), s = o.payloadBatch, u = o.snapToValue;
    s[0] && i.seriesIndex == null && B(i, s[0]), !n && r.snap && a.containData(u) && u != null && (t = u), e.showPointer(r, t, s), e.showTooltip(r, o, u);
  }
}
function hR(r, t) {
  var e = t.axis, n = e.dim, i = r, a = [], o = Number.MAX_VALUE, s = -1;
  return T(t.seriesModels, function(u, l) {
    var f = u.getData().mapDimensionsAll(n), h, v;
    if (u.getAxisTooltipData) {
      var c = u.getAxisTooltipData(f, r, e);
      v = c.dataIndices, h = c.nestestValue;
    } else {
      if (v = u.indicesOfNearest(
        n,
        f[0],
        r,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        e.type === "category" ? 0.5 : null
      ), !v.length)
        return;
      h = u.getData().get(f[0], v[0]);
    }
    if (Ke(h)) {
      var d = r - h, p = Math.abs(d);
      p <= o && ((p < o || d >= 0 && s < 0) && (o = p, s = d, i = h, a.length = 0), T(v, function(m) {
        a.push({
          seriesIndex: u.seriesIndex,
          dataIndexInside: m,
          dataIndex: u.getData().getRawIndex(m)
        });
      }));
    }
  }), {
    payloadBatch: a,
    snapToValue: i
  };
}
function vR(r, t, e, n) {
  r[t.key] = {
    value: e,
    payloadBatch: n
  };
}
function cR(r, t, e, n) {
  var i = e.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !i.length)) {
    var u = t.coordSys.model, l = Za(u), f = r.map[l];
    f || (f = r.map[l] = {
      coordSysId: u.id,
      coordSysIndex: u.componentIndex,
      coordSysType: u.type,
      coordSysMainType: u.mainType,
      dataByAxis: []
    }, r.list.push(f)), f.dataByAxis.push({
      axisDim: a.dim,
      axisIndex: o.componentIndex,
      axisType: o.type,
      axisId: o.id,
      value: n,
      // Caution: viewHelper.getValueLabel is actually on "view stage", which
      // depends that all models have been updated. So it should not be performed
      // here. Considering axisPointerModel used here is volatile, which is hard
      // to be retrieve in TooltipView, we prepare parameters here.
      valueLabelOpt: {
        precision: s.get(["label", "precision"]),
        formatter: s.get(["label", "formatter"])
      },
      seriesDataIndices: i.slice()
    });
  }
}
function dR(r, t, e) {
  var n = e.axesInfo = [];
  T(t, function(i, a) {
    var o = i.axisPointerModel.option, s = r[a];
    s ? (!i.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !i.useHandle && (o.status = "hide"), o.status === "show" && n.push({
      axisDim: i.axis.dim,
      axisIndex: i.axis.model.componentIndex,
      value: o.value
    });
  });
}
function pR(r, t, e, n) {
  if (Ms(t) || !r.list.length) {
    n({
      type: "hideTip"
    });
    return;
  }
  var i = ((r.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  n({
    type: "showTip",
    escapeConnect: !0,
    x: t[0],
    y: t[1],
    tooltipOption: e.tooltipOption,
    position: e.position,
    dataIndexInside: i.dataIndexInside,
    dataIndex: i.dataIndex,
    seriesIndex: i.seriesIndex,
    dataByCoordSys: r.list
  });
}
function gR(r, t, e) {
  var n = e.getZr(), i = "axisPointerLastHighlights", a = ym(n)[i] || {}, o = ym(n)[i] = {};
  T(r, function(f, h) {
    var v = f.axisPointerModel.option;
    v.status === "show" && f.triggerEmphasis && T(v.seriesDataIndices, function(c) {
      o[c.seriesIndex + "|" + c.dataIndex] = c;
    });
  });
  var s = [], u = [];
  function l(f) {
    return {
      seriesIndex: f.seriesIndex,
      dataIndex: f.dataIndex
    };
  }
  T(a, function(f, h) {
    !o[h] && u.push(l(f));
  }), T(o, function(f, h) {
    !a[h] && s.push(l(f));
  }), u.length && e.dispatchAction({
    type: "downplay",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: u
  }), s.length && e.dispatchAction({
    type: "highlight",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: s
  });
}
function mR(r, t) {
  for (var e = 0; e < (r || []).length; e++) {
    var n = r[e];
    if (t.axis.dim === n.axisDim && t.axis.model.componentIndex === n.axisIndex)
      return n;
  }
}
function Sm(r) {
  var t = r.axis.model, e = {}, n = e.axisDim = r.axis.dim;
  return e.axisIndex = e[n + "AxisIndex"] = t.componentIndex, e.axisName = e[n + "AxisName"] = t.name, e.axisId = e[n + "AxisId"] = t.id, e;
}
function Ms(r) {
  return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
}
function fS(r) {
  U1.registerAxisPointerClass("CartesianAxisPointer", eR), r.registerComponentModel(nR), r.registerComponentView(lR), r.registerPreprocessor(function(t) {
    if (t) {
      (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !z(e) && (t.axisPointer.link = [e]);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, {
    overallReset: function(t, e) {
      t.getComponent("axisPointer").coordSysAxesInfo = eP(t, e);
    }
  }), r.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, fR);
}
function yR(r) {
  Le(dP), Le(fS);
}
var bm = ["x", "y", "radius", "angle", "single"], _R = vt(), SR = ["cartesian2d", "polar", "singleAxis"];
function bR(r) {
  var t = r.get("coordinateSystem");
  return ot(SR, t) >= 0;
}
function Ar(r) {
  return r + "Axis";
}
function xR(r, t) {
  var e = Y(), n = [], i = Y();
  r.eachComponent({
    mainType: "dataZoom",
    query: t
  }, function(f) {
    i.get(f.uid) || s(f);
  });
  var a;
  do
    a = !1, r.eachComponent("dataZoom", o);
  while (a);
  function o(f) {
    !i.get(f.uid) && u(f) && (s(f), a = !0);
  }
  function s(f) {
    i.set(f.uid, !0), n.push(f), l(f);
  }
  function u(f) {
    var h = !1;
    return f.eachTargetAxis(function(v, c) {
      var d = e.get(v);
      d && d[c] && (h = !0);
    }), h;
  }
  function l(f) {
    f.eachTargetAxis(function(h, v) {
      (e.get(h) || e.set(h, []))[v] = !0;
    });
  }
  return n;
}
function hS(r) {
  var t = r.ecModel, e = {
    infoList: [],
    infoMap: Y()
  };
  return r.eachTargetAxis(function(n, i) {
    var a = t.getComponent(Ar(n), i);
    if (a) {
      var o = a.getCoordSysModel();
      if (o) {
        var s = o.uid, u = e.infoMap.get(s);
        u || (u = {
          model: o,
          axisModels: []
        }, e.infoList.push(u), e.infoMap.set(s, u)), u.axisModels.push(a);
      }
    }
  }), e;
}
function vS(r) {
  var t = _R(JD(r));
  return t.axisProxyMap || (t.axisProxyMap = Y());
}
function hu(r) {
  if (r)
    return vS(r.ecModel).get(r.uid);
}
function wR(r, t) {
  vS(r.ecModel).set(r.uid, t);
}
function cS(r, t) {
  var e = t.getAxisModel().axis.__alignTo;
  return e && r.getAxisProxy(e.dim, e.model.componentIndex) ? hu(e.model) : null;
}
var hf = (
  /** @class */
  (function() {
    function r() {
      this.indexList = [], this.indexMap = [];
    }
    return r.prototype.add = function(t) {
      this.indexMap[t] || (this.indexList.push(t), this.indexMap[t] = !0);
    }, r;
  })()
), $a = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e._autoThrottle = !0, e._noTarget = !0, e._rangePropMode = ["percent", "percent"], e;
    }
    return t.prototype.init = function(e, n, i) {
      var a = xm(e);
      this.settledOption = a, this.mergeDefaultAndTheme(e, i), this._doInit(a);
    }, t.prototype.mergeOption = function(e) {
      var n = xm(e);
      at(this.option, e, !0), at(this.settledOption, n, !0), this._doInit(n);
    }, t.prototype._doInit = function(e) {
      var n = this.option;
      this._setDefaultThrottle(e), this._updateRangeUse(e);
      var i = this.settledOption;
      T([["start", "startValue"], ["end", "endValue"]], function(a, o) {
        this._rangePropMode[o] === "value" && (n[a[0]] = i[a[0]] = null);
      }, this), this._resetTarget();
    }, t.prototype._resetTarget = function() {
      var e = this.get("orient", !0), n = this._targetAxisInfoMap = Y(), i = this._fillSpecifiedTargetAxis(n);
      i ? this._orient = e || this._makeAutoOrientByTargetAxis() : (this._orient = e || "horizontal", this._fillAutoTargetAxisByOrient(n, this._orient)), this._noTarget = !0, n.each(function(a) {
        a.indexList.length && (this._noTarget = !1);
      }, this);
    }, t.prototype._fillSpecifiedTargetAxis = function(e) {
      var n = !1;
      return T(bm, function(i) {
        var a = this.getReferringComponents(Ar(i), Gx);
        if (a.specified) {
          n = !0;
          var o = new hf();
          T(a.models, function(s) {
            o.add(s.componentIndex);
          }), e.set(i, o);
        }
      }, this), n;
    }, t.prototype._fillAutoTargetAxisByOrient = function(e, n) {
      var i = this.ecModel, a = !0;
      if (a) {
        var o = n === "vertical" ? "y" : "x", s = i.findComponents({
          mainType: o + "Axis"
        });
        u(s, o);
      }
      if (a) {
        var s = i.findComponents({
          mainType: "singleAxis",
          filter: function(f) {
            return f.get("orient", !0) === n;
          }
        });
        u(s, "single");
      }
      function u(l, f) {
        var h = l[0];
        if (h) {
          var v = new hf();
          if (v.add(h.componentIndex), e.set(f, v), a = !1, f === "x" || f === "y") {
            var c = h.getReferringComponents("grid", Vt).models[0];
            c && T(l, function(d) {
              h.componentIndex !== d.componentIndex && c === d.getReferringComponents("grid", Vt).models[0] && v.add(d.componentIndex);
            });
          }
        }
      }
      a && T(bm, function(l) {
        if (a) {
          var f = i.findComponents({
            mainType: Ar(l),
            filter: function(v) {
              return v.get("type", !0) === "category";
            }
          });
          if (f[0]) {
            var h = new hf();
            h.add(f[0].componentIndex), e.set(l, h), a = !1;
          }
        }
      }, this);
    }, t.prototype._makeAutoOrientByTargetAxis = function() {
      var e;
      return this.eachTargetAxis(function(n) {
        !e && (e = n);
      }, this), e === "y" ? "vertical" : "horizontal";
    }, t.prototype._setDefaultThrottle = function(e) {
      if (e.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
        var n = this.ecModel.option;
        this.option.throttle = n.animation && n.animationDurationUpdate > 0 ? 100 : 20;
      }
    }, t.prototype._updateRangeUse = function(e) {
      var n = this._rangePropMode, i = this.get("rangeMode");
      T([["start", "startValue"], ["end", "endValue"]], function(a, o) {
        var s = e[a[0]] != null, u = e[a[1]] != null;
        s && !u ? n[o] = "percent" : !s && u ? n[o] = "value" : i ? n[o] = i[o] : s && (n[o] = "percent");
      });
    }, t.prototype.noTarget = function() {
      return this._noTarget;
    }, t.prototype.getFirstTargetAxisModel = function() {
      var e;
      return this.eachTargetAxis(function(n, i) {
        e == null && (e = this.ecModel.getComponent(Ar(n), i));
      }, this), e;
    }, t.prototype.eachTargetAxis = function(e, n) {
      this._targetAxisInfoMap.each(function(i, a) {
        T(i.indexList, function(o) {
          e.call(n, a, o);
        });
      });
    }, t.prototype.getAxisProxy = function(e, n) {
      return hu(this.getAxisModel(e, n));
    }, t.prototype.getAxisModel = function(e, n) {
      var i = this._targetAxisInfoMap.get(e);
      if (i && i.indexMap[n])
        return this.ecModel.getComponent(Ar(e), n);
    }, t.prototype.setRawRange = function(e) {
      var n = this.option, i = this.settledOption;
      T([["start", "startValue"], ["end", "endValue"]], function(a) {
        (e[a[0]] != null || e[a[1]] != null) && (n[a[0]] = i[a[0]] = e[a[0]], n[a[1]] = i[a[1]] = e[a[1]]);
      }, this), this._updateRangeUse(e);
    }, t.prototype.setCalculatedRange = function(e) {
      var n = this.option;
      T(["start", "startValue", "end", "endValue"], function(i) {
        n[i] = e[i];
      });
    }, t.prototype.getPercentRange = function() {
      var e = this.findRepresentativeAxisProxy();
      if (e)
        return e.getWindow().percent;
    }, t.prototype.getValueRange = function(e, n) {
      if (e == null && n == null) {
        var i = this.findRepresentativeAxisProxy();
        if (i)
          return i.getWindow().value;
      } else
        return this.getAxisProxy(e, n).getWindow().value;
    }, t.prototype.findRepresentativeAxisProxy = function(e) {
      if (e)
        return hu(e);
      for (var n, i = this._targetAxisInfoMap.keys(), a = 0; a < i.length; a++)
        for (var o = i[a], s = this._targetAxisInfoMap.get(o), u = 0; u < s.indexList.length; u++) {
          var l = this.getAxisProxy(o, s.indexList[u]);
          if (l.hostedBy(this))
            return l;
          n || (n = l);
        }
      return n;
    }, t.prototype.getRangePropMode = function() {
      return this._rangePropMode.slice();
    }, t.prototype.getOrient = function() {
      return this._orient;
    }, t.type = "dataZoom", t.dependencies = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "series", "toolbox"], t.defaultOption = {
      // zlevel: 0,
      z: 4,
      filterMode: "filter",
      start: 0,
      end: 100
    }, t;
  })(ct)
);
function xm(r) {
  var t = {};
  return T(["start", "end", "startValue", "endValue", "throttle"], function(e) {
    r.hasOwnProperty(e) && (t[e] = r[e]);
  }), t;
}
var TR = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "dataZoom.select", t;
  })($a)
), _c = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i, a) {
      this.dataZoomModel = e, this.ecModel = n, this.api = i;
    }, t.type = "dataZoom", t;
  })(le)
), CR = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "dataZoom.select", t;
  })(_c)
), MR = (
  /** @class */
  (function() {
    function r(t, e, n, i) {
      this._dimName = t, this._axisIndex = e, this.ecModel = i, this._dataZoomModel = n;
    }
    return r.prototype.hostedBy = function(t) {
      return this._dataZoomModel === t;
    }, r.prototype.getWindow = function() {
      return tt(this._window);
    }, r.prototype.getTargetSeriesModels = function() {
      var t = [];
      return this.ecModel.eachSeries(function(e) {
        if (bR(e)) {
          var n = Ar(this._dimName), i = e.getReferringComponents(n, Vt).models[0];
          i && this._axisIndex === i.componentIndex && t.push(e);
        }
      }, this), t;
    }, r.prototype.getAxisModel = function() {
      return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex);
    }, r.prototype.getMinMaxSpan = function() {
      return tt(this._minMaxSpan);
    }, r.prototype.calculateDataWindow = function(t) {
      var e = this._extent, n = this.getAxisModel().axis, i = n.scale, a = this._dataZoomModel, o = a.getRangePropMode(), s = [0, 100], u = [], l = [], f, h = [!1, !1];
      T(["start", "end"], function(_, S) {
        var b = t[_], x = t[_ + "Value"];
        o[S] === "percent" ? (b == null && (b = s[S]), x = It(b, s, e), h[S] = !0) : (f = !0, x == null ? x = e[S] : (x = i.parse(x), i.sanitize && (x = i.sanitize(x, e))), b = It(x, e, s)), l[S] = x == null || isNaN(x) ? e[S] : x, u[S] = b == null || isNaN(b) ? s[S] : b;
      }), Cr(l), Cr(u);
      var v = this._minMaxSpan;
      f ? c(l, u, e, s, !1) : c(u, l, s, e, !0);
      function c(_, S, b, x, w) {
        var D = w ? "Span" : "ValueSpan";
        Di(0, _, b, "all", v["min" + D], v["max" + D]);
        for (var C = 0; C < 2; C++)
          S[C] = It(_[C], b, x, !0), w && (S[C] = S[C], h[C] = !0);
        vs(S);
      }
      var d = Ce(i) || fo(i), p = n.getExtent(), m = Pt(p[1] - p[0]), g = d ? 0 : rv(l, m, 0.5);
      T([[0, Ri], [1, Cn]], function(_) {
        var S = _[0], b = _[1];
        !h[S] || !isFinite(g) || (l[S] = st(l[S], g), l[S] = ae(e[1], gt(e[0], l[S])), u[S] === s[S] && (l[S] = e[S], d && (l[S] = b(l[S]))));
      }), vs(l);
      var y = [It(l[0], e, s, !0), It(l[1], e, s, !0)];
      return vs(y), {
        value: l,
        percent: u,
        percentInverted: y,
        valuePrecision: g
      };
    }, r.prototype.reset = function(t, e) {
      if (this.hostedBy(t)) {
        var n = this.getAxisModel().axis;
        g1(n, sL);
        var i = n.scale.rawExtentInfo;
        this._extent = i.makeNoZoom(), this._updateMinMaxSpan();
        var a = t.settledOption;
        e && (a = ut({
          start: e[0],
          end: e[1]
        }, a));
        var o = this._window = this.calculateDataWindow(a), s = o.percent, u = o.value;
        s[0] !== 0 && i.setZoomMM(0, u[0]), s[1] !== 100 && i.setZoomMM(1, u[1]);
      }
    }, r.prototype.filterData = function(t, e) {
      if (!this.hostedBy(t))
        return;
      var n = this._dimName, i = this.getTargetSeriesModels(), a = t.get("filterMode"), o = this._window.value;
      if (a === "none")
        return;
      T(i, function(u) {
        var l = u.getData(), f = l.mapDimensionsAll(n);
        if (f.length) {
          if (a === "weakFilter") {
            var h = l.getStore(), v = U(f, function(c) {
              return l.getDimensionIndex(c);
            }, l);
            l.filterSelf(function(c) {
              for (var d, p, m, g = 0; g < f.length; g++) {
                var y = h.get(v[g], c), _ = !isNaN(y), S = y < o[0], b = y > o[1];
                if (_ && !S && !b)
                  return !0;
                _ && (m = !0), S && (d = !0), b && (p = !0);
              }
              return m && d && p;
            });
          } else
            T(f, function(c) {
              if (a === "empty")
                u.setData(l = l.map(c, function(p) {
                  return s(p) ? p : NaN;
                }));
              else {
                var d = {};
                d[c] = o, l.selectRange(d);
              }
            });
          T(f, function(c) {
            l.setApproximateExtent(o, c);
          });
        }
      });
      function s(u) {
        return u >= o[0] && u <= o[1];
      }
    }, r.prototype._updateMinMaxSpan = function() {
      var t = this._minMaxSpan = {}, e = this._dataZoomModel, n = this._extent;
      T(["min", "max"], function(i) {
        var a = e.get(i + "Span"), o = e.get(i + "ValueSpan");
        o != null && (o = this.getAxisModel().axis.scale.parse(o)), o != null ? a = It(n[0] + o, n, [0, 100], !0) : a != null && (o = It(a, [0, 100], n, !0) - n[0]), t[i + "Span"] = a, t[i + "ValueSpan"] = o;
      }, this);
    }, r;
  })()
), DR = {
  dirtyOnOverallProgress: !0,
  // `dataZoomProcessor` will only be performed in needed series. Consider if
  // there is a line series and a pie series, it is better not to update the
  // line series if only pie series is needed to be updated.
  getTargetSeries: function(r) {
    function t(i) {
      r.eachComponent("dataZoom", function(a) {
        a.eachTargetAxis(function(o, s) {
          var u = r.getComponent(Ar(o), s);
          i(o, s, u, a);
        });
      });
    }
    var e = [];
    t(function(i, a, o, s) {
      if (!hu(o)) {
        var u = new MR(i, a, s, r);
        e.push(u), wR(o, u);
      }
    });
    var n = Y();
    return T(e, function(i) {
      T(i.getTargetSeriesModels(), function(a) {
        n.set(a.uid, a);
      });
    }), n;
  },
  // Consider appendData, where filter should be performed. Because data process is
  // in block mode currently, it is not need to worry about that the overallProgress
  // execute every frame.
  overallReset: function(r, t) {
    r.eachComponent("dataZoom", function(e) {
      var n = [];
      e.eachTargetAxis(function(i, a) {
        var o = e.getAxisProxy(i, a), s = cS(e, o);
        s ? n.push([o, s]) : o.reset(e, null);
      }), T(n, function(i) {
        i[0].reset(e, i[1].getWindow().percentInverted);
      }), e.eachTargetAxis(function(i, a) {
        e.getAxisProxy(i, a).filterData(e, t);
      });
    }), r.eachComponent("dataZoom", function(e) {
      var n = e.findRepresentativeAxisProxy();
      if (n) {
        var i = n.getWindow(), a = i.percent, o = i.value;
        e.setCalculatedRange({
          start: a[0],
          end: a[1],
          startValue: o[0],
          endValue: o[1]
        });
      }
    });
  }
};
function AR(r) {
  r.registerAction("dataZoom", function(t, e) {
    var n = xR(e, t);
    T(n, function(i) {
      i.setRawRange({
        start: t.start,
        end: t.end,
        startValue: t.startValue,
        endValue: t.endValue
      });
    });
  });
}
var IR = By();
function Sc(r) {
  IR(r, function() {
    r.registerProcessor(r.PRIORITY.PROCESSOR.FILTER, DR), AR(r), r.registerSubTypeDefaulter("dataZoom", function() {
      return "slider";
    });
  });
}
function LR(r) {
  r.registerComponentModel(TR), r.registerComponentView(CR), Sc(r);
}
var ur = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
    }
    return r;
  })()
), dS = {};
function ra(r, t) {
  dS[r] = t;
}
function pS(r) {
  return dS[r];
}
var PR = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function(e, n, i) {
      var a = i.getTheme().get("toolbox"), o = a ? a.feature : null;
      o && (this._themeFeatureOption = B({}, o), a.feature = {}), r.prototype.init.call(this, e, n, i), o && (a.feature = o);
    }, t.prototype.optionUpdated = function() {
      T(this.option.feature, function(e, n) {
        var i = this._themeFeatureOption, a = pS(n);
        a && (a.getDefaultOption && (a.defaultOption = a.getDefaultOption(this.ecModel)), i && i[n] && (at(e, i[n]), i[n] = null), at(e, a.defaultOption));
      }, this);
    }, t.type = "toolbox", t.layoutMode = {
      type: "box",
      ignoreSize: !0
    }, t.defaultOption = {
      show: !0,
      z: 6,
      // zlevel: 0,
      orient: "horizontal",
      left: "right",
      top: "top",
      // right
      // bottom
      backgroundColor: "transparent",
      borderColor: O.color.border,
      borderRadius: 0,
      borderWidth: 0,
      padding: O.size.m,
      itemSize: 15,
      itemGap: O.size.s,
      showTitle: !0,
      iconStyle: {
        borderColor: O.color.accent50,
        color: "none"
      },
      emphasis: {
        iconStyle: {
          borderColor: O.color.accent70
        }
      },
      // textStyle: {},
      // feature
      tooltip: {
        show: !1,
        position: "bottom"
      }
    }, t;
  })(ct)
);
function gS(r, t) {
  var e = ku(t.get("padding")), n = t.getItemStyle(["color", "opacity"]);
  n.fill = t.get("backgroundColor");
  var i = new St({
    shape: {
      x: r.x - e[3],
      y: r.y - e[0],
      width: r.width + e[1] + e[3],
      height: r.height + e[0] + e[2],
      r: t.get("borderRadius")
    },
    style: n,
    silent: !0,
    z2: -1
  });
  return i;
}
var RR = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.render = function(e, n, i, a) {
      var o = this.group;
      if (o.removeAll(), !e.get("show"))
        return;
      var s = +e.get("itemSize"), u = e.get("orient") === "vertical", l = e.get("feature") || {}, f = this._features || (this._features = Y()), h = [];
      T(l, function(y, _) {
        h.push(_);
      }), new ec(this._featureNames || [], h).add(v).update(v).remove(ht(v, null)).execute(), this._featureNames = kt(h, function(y) {
        return f.hasKey(y);
      });
      function v(y, _) {
        var S = y != null && _ == null, b = y != null && _ != null, x = y == null, w = S || b ? h[y] : h[_], D = l[w], C = S || b ? new Tt(D, e, n) : null, M = C && C.get("show"), A;
        if (S) {
          if (!M)
            return;
          if (ER(w))
            A = {
              onclick: C.option.onclick,
              featureName: w
            };
          else {
            var L = pS(w);
            if (!L)
              return;
            A = new L();
          }
          f.set(w, A);
        } else
          A = f.get(w);
        if (x || !M) {
          wm(A) && A.dispose && A.dispose(n, i), f.removeKey(w);
          return;
        }
        a && a.newTitle != null && a.featureName === w && (D.title = a.newTitle), S && (A.uid = so("toolbox-feature")), A.model = C, A.ecModel = n, A.api = i, c(C, A, w), C.setIconStatus = function(I, P) {
          var E = this.option, R = this.iconPaths;
          E.iconStatus = E.iconStatus || {}, E.iconStatus[I] = P, R[I] && (P === "emphasis" ? bi : xi)(R[I]);
        }, wm(A) && A.render && A.render(C, n, i, a);
      }
      function c(y, _, S) {
        var b = y.getModel("iconStyle"), x = y.getModel(["emphasis", "iconStyle"]), w = _ instanceof ur && _.getIcons ? _.getIcons() : y.get("icon"), D = y.get("title") || {}, C, M;
        V(w) ? (C = {}, C[S] = w) : C = w, V(D) ? (M = {}, M[S] = D) : M = D;
        var A = y.iconPaths = {};
        T(C, function(L, I) {
          var P = Pu(L, {}, {
            x: -s / 2,
            y: -s / 2,
            width: s,
            height: s
          });
          P.setStyle(b.getItemStyle());
          var E = P.ensureState("emphasis");
          E.style = x.getItemStyle();
          var R = new Rt({
            style: {
              text: M[I],
              align: x.get("textAlign"),
              borderRadius: x.get("textBorderRadius"),
              padding: x.get("textPadding"),
              fill: null,
              font: D0({
                fontStyle: x.get("textFontStyle"),
                fontFamily: x.get("textFontFamily"),
                fontSize: x.get("textFontSize"),
                fontWeight: x.get("textFontWeight")
              }, n)
            },
            ignore: !0
          });
          P.setTextContent(R), oo({
            el: P,
            componentModel: e,
            itemName: I,
            formatterParamsExtra: {
              title: M[I]
            }
          }), P.__title = M[I], P.on("mouseover", function() {
            var F = x.getItemStyle(), G = u ? e.get("right") == null && e.get("left") !== "right" ? "right" : "left" : e.get("bottom") == null && e.get("top") !== "bottom" ? "bottom" : "top";
            R.setStyle({
              fill: x.get("textFill") || F.fill || F.stroke || O.color.neutral99,
              backgroundColor: x.get("textBackgroundColor")
            }), P.setTextConfig({
              position: x.get("textPosition") || G
            }), R.ignore = !e.get("showTitle"), i.enterEmphasis(this);
          }).on("mouseout", function() {
            y.get(["iconStatus", I]) !== "emphasis" && i.leaveEmphasis(this), R.hide();
          }), (y.get(["iconStatus", I]) === "emphasis" ? bi : xi)(P), o.add(P), P.on("click", K(_.onclick, _, n, i, I)), A[I] = P;
        });
      }
      var d = uo(e, i).refContainer, p = e.getBoxLayoutParams(), m = e.get("padding"), g = vr(p, d, m);
      vi(e.get("orient"), o, e.get("itemGap"), g.width, g.height), rM(o, p, d, m), o.add(gS(o.getBoundingRect(), e)), u || o.eachChild(function(y) {
        var _ = y.__title, S = y.ensureState("emphasis"), b = S.textConfig || (S.textConfig = {}), x = y.getTextContent(), w = x && x.ensureState("emphasis");
        if (w && !Q(w) && _) {
          var D = w.style || (w.style = {}), C = ev(_, Rt.makeFont(D)), M = y.x + o.x, A = y.y + o.y + s, L = !1;
          A + C.height > i.getHeight() && (b.position = "top", L = !0);
          var I = L ? -5 - C.height : s + 10;
          M + C.width / 2 > i.getWidth() ? (b.position = ["100%", I], D.align = "right") : M - C.width / 2 < 0 && (b.position = [0, I], D.align = "left");
        }
      });
    }, t.prototype.updateView = function(e, n, i, a) {
      T(this._features, function(o) {
        o && o instanceof ur && o.updateView && o.updateView(o.model, n, i, a);
      });
    }, t.prototype.dispose = function(e, n) {
      T(this._features, function(i) {
        i && i instanceof ur && i.dispose && i.dispose(e, n);
      });
    }, t.type = "toolbox", t;
  })(le)
);
function ER(r) {
  return r.indexOf("my") === 0;
}
function wm(r) {
  return r instanceof ur;
}
var OR = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.onclick = function(e, n) {
      var i = this.model, a = i.get("name") || e.get("title.0.text") || "echarts", o = n.getZr().painter.getType() === "svg", s = o ? "svg" : i.get("type", !0) || "png", u = n.getConnectedDataURL({
        type: s,
        backgroundColor: i.get("backgroundColor", !0) || e.get("backgroundColor") || O.color.neutral00,
        connectedBackgroundColor: i.get("connectedBackgroundColor"),
        excludeComponents: i.get("excludeComponents"),
        pixelRatio: i.get("pixelRatio")
      }), l = et.browser;
      if (typeof MouseEvent == "function" && (l.newEdge || !l.ie && !l.edge)) {
        var f = document.createElement("a");
        f.download = a + "." + s, f.target = "_blank", f.href = u;
        var h = new MouseEvent("click", {
          // some micro front-end framework， window maybe is a Proxy
          view: document.defaultView,
          bubbles: !0,
          cancelable: !1
        });
        f.dispatchEvent(h);
      } else if (window.navigator.msSaveOrOpenBlob || o) {
        var v = u.split(","), c = v[0].indexOf("base64") > -1, d = o ? decodeURIComponent(v[1]) : v[1];
        c && (d = window.atob(d));
        var p = a + "." + s;
        if (window.navigator.msSaveOrOpenBlob) {
          for (var m = d.length, g = new Uint8Array(m); m--; )
            g[m] = d.charCodeAt(m);
          var y = new Blob([g]);
          window.navigator.msSaveOrOpenBlob(y, p);
        } else {
          var _ = document.createElement("iframe");
          document.body.appendChild(_);
          var S = _.contentWindow, b = S.document;
          b.open("image/svg+xml", "replace"), b.write(d), b.close(), S.focus(), b.execCommand("SaveAs", !0, p), document.body.removeChild(_);
        }
      } else {
        var x = i.get("lang"), w = '<body style="margin:0;"><img src="' + u + '" style="max-width:100%;" title="' + (x && x[0] || "") + '" /></body>', D = window.open();
        D.document.write(w), D.document.title = a;
      }
    }, t.getDefaultOption = function(e) {
      var n = {
        show: !0,
        icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
        title: e.getLocaleModel().get(["toolbox", "saveAsImage", "title"]),
        type: "png",
        // Default use option.backgroundColor
        // backgroundColor: '#fff',
        connectedBackgroundColor: O.color.neutral00,
        name: "",
        excludeComponents: ["toolbox"],
        // use current pixel ratio of device by default
        // pixelRatio: 1,
        lang: e.getLocaleModel().get(["toolbox", "saveAsImage", "lang"])
      };
      return n;
    }, t;
  })(ur)
), Tm = "__ec_magicType_stack__", kR = [["line", "bar"], ["stack"]], BR = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.getIcons = function() {
      var e = this.model, n = e.get("icon"), i = {};
      return T(e.get("type"), function(a) {
        n[a] && (i[a] = n[a]);
      }), i;
    }, t.getDefaultOption = function(e) {
      var n = {
        show: !0,
        type: [],
        // Icon group
        icon: {
          line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
          bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
          // eslint-disable-next-line
          stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z"
          // jshint ignore:line
        },
        // `line`, `bar`, `stack`, `tiled`
        title: e.getLocaleModel().get(["toolbox", "magicType", "title"]),
        option: {},
        seriesIndex: {}
      };
      return n;
    }, t.prototype.onclick = function(e, n, i) {
      var a = this.model, o = a.get(["seriesIndex", i]);
      if (Cm[i]) {
        var s = {
          series: []
        }, u = function(h) {
          var v = h.subType, c = h.id, d = Cm[i](v, c, h, a);
          d && (ut(d, h.option), s.series.push(d));
          var p = h.coordinateSystem;
          if (p && p.type === "cartesian2d" && (i === "line" || i === "bar")) {
            var m = p.getAxesByScale("ordinal")[0];
            if (m) {
              var g = m.dim, y = g + "Axis", _ = h.getReferringComponents(y, Vt).models[0], S = _.componentIndex;
              s[y] = s[y] || [];
              for (var b = 0; b <= S; b++)
                s[y][S] = s[y][S] || {};
              s[y][S].boundaryGap = i === "bar";
            }
          }
        };
        T(kR, function(h) {
          ot(h, i) >= 0 && T(h, function(v) {
            a.setIconStatus(v, "normal");
          });
        }), a.setIconStatus(i, "emphasis"), e.eachComponent({
          mainType: "series",
          query: o == null ? null : {
            seriesIndex: o
          }
        }, u);
        var l, f = i;
        i === "stack" && (l = at({
          stack: a.option.title.tiled,
          tiled: a.option.title.stack
        }, a.option.title), a.get(["iconStatus", i]) !== "emphasis" && (f = "tiled")), n.dispatchAction({
          type: "changeMagicType",
          currentType: f,
          newOption: s,
          newTitle: l,
          featureName: "magicType"
        });
      }
    }, t;
  })(ur)
), Cm = {
  line: function(r, t, e, n) {
    if (r === "bar")
      return at({
        id: t,
        type: "line",
        // Preserve data related option
        data: e.get("data"),
        stack: e.get("stack"),
        markPoint: e.get("markPoint"),
        markLine: e.get("markLine")
      }, n.get(["option", "line"]) || {}, !0);
  },
  bar: function(r, t, e, n) {
    if (r === "line")
      return at({
        id: t,
        type: "bar",
        // Preserve data related option
        data: e.get("data"),
        stack: e.get("stack"),
        markPoint: e.get("markPoint"),
        markLine: e.get("markLine")
      }, n.get(["option", "bar"]) || {}, !0);
  },
  stack: function(r, t, e, n) {
    var i = e.get("stack") === Tm;
    if (r === "line" || r === "bar")
      return n.setIconStatus("stack", i ? "normal" : "emphasis"), at({
        id: t,
        stack: i ? "" : Tm
      }, n.get(["option", "stack"]) || {}, !0);
  }
};
tr({
  type: "changeMagicType",
  event: "magicTypeChanged",
  update: "prepareAndUpdate"
}, function(r, t) {
  t.mergeOption(r.newOption);
});
var Yu = new Array(60).join("-"), Ii = "	";
function NR(r) {
  var t = {}, e = [], n = [];
  return r.eachRawSeries(function(i) {
    var a = i.coordinateSystem;
    if (a && (a.type === "cartesian2d" || a.type === "polar")) {
      var o = a.getBaseAxis();
      if (o.type === "category") {
        var s = z2(o);
        t[s] || (t[s] = {
          categoryAxis: o,
          valueAxis: a.getOtherAxis(o),
          series: []
        }, n.push({
          axisDim: o.dim,
          axisIndex: o.index
        })), t[s].series.push(i);
      } else
        e.push(i);
    } else
      e.push(i);
  }), {
    seriesGroupByCategoryAxis: t,
    other: e,
    meta: n
  };
}
function FR(r) {
  var t = [];
  return T(r, function(e, n) {
    var i = e.categoryAxis, a = e.valueAxis, o = a.dim, s = [" "].concat(U(e.series, function(c) {
      return c.name;
    })), u = [i.model.getCategories()];
    T(e.series, function(c) {
      var d = c.getRawData();
      u.push(c.getRawData().mapArray(d.mapDimension(o), function(p) {
        return p;
      }));
    });
    for (var l = [s.join(Ii)], f = 0; f < u[0].length; f++) {
      for (var h = [], v = 0; v < u.length; v++)
        h.push(u[v][f]);
      l.push(h.join(Ii));
    }
    t.push(l.join(`
`));
  }), t.join(`

` + Yu + `

`);
}
function zR(r) {
  return U(r, function(t) {
    var e = t.getRawData(), n = [t.name], i = [];
    return e.each(e.dimensions, function() {
      for (var a = arguments.length, o = arguments[a - 1], s = e.getName(o), u = 0; u < a - 1; u++)
        i[u] = arguments[u];
      n.push((s ? s + Ii : "") + i.join(Ii));
    }), n.join(`
`);
  }).join(`

` + Yu + `

`);
}
function HR(r) {
  var t = NR(r);
  return {
    value: kt([FR(t.seriesGroupByCategoryAxis), zR(t.other)], function(e) {
      return !!e.replace(/[\n\t\s]/g, "");
    }).join(`

` + Yu + `

`),
    meta: t.meta
  };
}
function vu(r) {
  return r.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function VR(r) {
  var t = r.slice(0, r.indexOf(`
`));
  if (t.indexOf(Ii) >= 0)
    return !0;
}
var Fh = new RegExp("[" + Ii + "]+", "g");
function GR(r) {
  for (var t = r.split(/\n+/g), e = vu(t.shift()).split(Fh), n = [], i = U(e, function(u) {
    return {
      name: u,
      data: []
    };
  }), a = 0; a < t.length; a++) {
    var o = vu(t[a]).split(Fh);
    n.push(o.shift());
    for (var s = 0; s < o.length; s++)
      i[s] && (i[s].data[a] = o[s]);
  }
  return {
    series: i,
    categories: n
  };
}
function UR(r) {
  for (var t = r.split(/\n+/g), e = vu(t.shift()), n = [], i = 0; i < t.length; i++) {
    var a = vu(t[i]);
    if (a) {
      var o = a.split(Fh), s = "", u = void 0, l = !1;
      isNaN(o[0]) ? (l = !0, s = o[0], o = o.slice(1), n[i] = {
        name: s,
        value: []
      }, u = n[i].value) : u = n[i] = [];
      for (var f = 0; f < o.length; f++)
        u.push(+o[f]);
      u.length === 1 && (l ? n[i].value = u[0] : n[i] = u[0]);
    }
  }
  return {
    name: e,
    data: n
  };
}
function WR(r, t) {
  var e = r.split(new RegExp(`
*` + Yu + `
*`, "g")), n = {
    series: []
  };
  return T(e, function(i, a) {
    if (VR(i)) {
      var o = GR(i), s = t[a], u = s.axisDim + "Axis";
      s && (n[u] = n[u] || [], n[u][s.axisIndex] = {
        data: o.categories
      }, n.series = n.series.concat(o.series));
    } else {
      var o = UR(i);
      n.series.push(o);
    }
  }), n;
}
var YR = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.onclick = function(e, n) {
      setTimeout(function() {
        n.dispatchAction({
          type: "hideTip"
        });
      });
      var i = n.getDom(), a = this.model;
      this._dom && i.removeChild(this._dom);
      var o = document.createElement("div");
      o.style.cssText = "position:absolute;top:0;bottom:0;left:0;right:0;padding:5px", o.style.backgroundColor = a.get("backgroundColor") || O.color.neutral00;
      var s = document.createElement("h4"), u = a.get("lang") || [];
      s.innerHTML = u[0] || a.get("title"), s.style.cssText = "margin:10px 20px", s.style.color = a.get("textColor");
      var l = document.createElement("div"), f = document.createElement("textarea");
      l.style.cssText = "overflow:auto";
      var h = a.get("optionToContent"), v = a.get("contentToOption"), c = HR(e);
      if (Q(h)) {
        var d = h(n.getOption());
        V(d) ? l.innerHTML = d : pi(d) && l.appendChild(d);
      } else {
        f.readOnly = a.get("readOnly");
        var p = f.style;
        p.cssText = "display:block;width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;resize:none;box-sizing:border-box;outline:none", p.color = a.get("textColor"), p.borderColor = a.get("textareaBorderColor"), p.backgroundColor = a.get("textareaColor"), f.value = c.value, l.appendChild(f);
      }
      var m = c.meta, g = document.createElement("div");
      g.style.cssText = "position:absolute;bottom:5px;left:0;right:0";
      var y = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px", _ = document.createElement("div"), S = document.createElement("div");
      y += ";background-color:" + a.get("buttonColor"), y += ";color:" + a.get("buttonTextColor");
      var b = this;
      function x() {
        i.removeChild(o), b._dom = null;
      }
      If(_, "click", x), If(S, "click", function() {
        if (v == null && h != null || v != null && h == null) {
          x();
          return;
        }
        var w;
        try {
          Q(v) ? w = v(l, n.getOption()) : w = WR(f.value, m);
        } catch (D) {
          throw x(), new Error("Data view format error " + D);
        }
        w && n.dispatchAction({
          type: "changeDataView",
          newOption: w
        }), x();
      }), _.innerHTML = u[1], S.innerHTML = u[2], S.style.cssText = _.style.cssText = y, !a.get("readOnly") && g.appendChild(S), g.appendChild(_), o.appendChild(s), o.appendChild(l), o.appendChild(g), l.style.height = i.clientHeight - 80 + "px", i.appendChild(o), this._dom = o;
    }, t.prototype.dispose = function(e, n) {
      this._dom && n.getDom().removeChild(this._dom);
    }, t.getDefaultOption = function(e) {
      var n = {
        show: !0,
        readOnly: !1,
        optionToContent: null,
        contentToOption: null,
        // eslint-disable-next-line
        icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
        title: e.getLocaleModel().get(["toolbox", "dataView", "title"]),
        lang: e.getLocaleModel().get(["toolbox", "dataView", "lang"]),
        backgroundColor: O.color.background,
        textColor: O.color.primary,
        textareaColor: O.color.background,
        textareaBorderColor: O.color.border,
        buttonColor: O.color.accent50,
        buttonTextColor: O.color.neutral00
      };
      return n;
    }, t;
  })(ur)
);
function ZR(r, t) {
  return U(r, function(e, n) {
    var i = t && t[n];
    if (Z(i) && !z(i)) {
      var a = Z(e) && !z(e);
      a || (e = {
        value: e
      });
      var o = i.name != null && e.name == null;
      return e = ut(e, i), o && delete e.name, e;
    } else
      return e;
  });
}
tr({
  type: "changeDataView",
  event: "dataViewChanged",
  update: "prepareAndUpdate"
}, function(r, t) {
  var e = [];
  T(r.newOption.series, function(n) {
    var i = t.getSeriesByName(n.name)[0];
    if (!i)
      e.push(B({
        // Default is scatter
        type: "scatter"
      }, n));
    else {
      var a = i.get("data");
      e.push({
        name: n.name,
        data: ZR(n.data, a)
      });
    }
  }), t.mergeOption(ut({
    series: e
  }, r.newOption));
});
var mS = T, yS = vt();
function XR(r, t) {
  var e = bc(r);
  mS(t, function(n, i) {
    for (var a = e.length - 1; a >= 0; a--) {
      var o = e[a];
      if (o[i])
        break;
    }
    if (a < 0) {
      var s = r.queryComponents({
        mainType: "dataZoom",
        subType: "select",
        id: i
      })[0];
      if (s) {
        var u = s.getPercentRange();
        e[0][i] = {
          dataZoomId: i,
          start: u[0],
          end: u[1]
        };
      }
    }
  }), e.push(t);
}
function $R(r) {
  var t = bc(r), e = t[t.length - 1];
  t.length > 1 && t.pop();
  var n = {};
  return mS(e, function(i, a) {
    for (var o = t.length - 1; o >= 0; o--)
      if (i = t[o][a], i) {
        n[a] = i;
        break;
      }
  }), n;
}
function qR(r) {
  yS(r).snapshots = null;
}
function KR(r) {
  return bc(r).length;
}
function bc(r) {
  var t = yS(r);
  return t.snapshots || (t.snapshots = [{}]), t.snapshots;
}
var QR = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.onclick = function(e, n) {
      qR(e), n.dispatchAction({
        type: "restore",
        from: this.uid
      });
    }, t.getDefaultOption = function(e) {
      var n = {
        show: !0,
        // eslint-disable-next-line
        icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
        title: e.getLocaleModel().get(["toolbox", "restore", "title"])
      };
      return n;
    }, t;
  })(ur)
);
tr({
  type: "restore",
  event: "restore",
  update: "prepareAndUpdate"
}, function(r, t) {
  t.resetOption("recreate");
});
var JR = ["grid", "xAxis", "yAxis", "geo", "graph", "polar", "radiusAxis", "angleAxis", "bmap"], _S = (
  /** @class */
  (function() {
    function r(t, e, n) {
      var i = this;
      this._targetInfoList = [];
      var a = Mm(e, t);
      T(jR, function(o, s) {
        (!n || !n.include || ot(n.include, s) >= 0) && o(a, i._targetInfoList);
      });
    }
    return r.prototype.setOutputRanges = function(t, e) {
      return this.matchOutputRanges(t, e, function(n, i, a) {
        if ((n.coordRanges || (n.coordRanges = [])).push(i), !n.coordRange) {
          n.coordRange = i;
          var o = vf[n.brushType](0, a, i);
          n.__rangeOffset = {
            offset: Lm[n.brushType](o.values, n.range, [1, 1]),
            xyMinMax: o.xyMinMax
          };
        }
      }), t;
    }, r.prototype.matchOutputRanges = function(t, e, n) {
      T(t, function(i) {
        var a = this.findTargetInfo(i, e);
        a && a !== !0 && T(a.coordSyses, function(o) {
          var s = vf[i.brushType](1, o, i.range, !0);
          n(i, s.values, o, e);
        });
      }, this);
    }, r.prototype.setInputRanges = function(t, e) {
      T(t, function(n) {
        var i = this.findTargetInfo(n, e);
        if (n.range = n.range || [], i && i !== !0) {
          n.panelId = i.panelId;
          var a = vf[n.brushType](0, i.coordSys, n.coordRange), o = n.__rangeOffset;
          n.range = o ? Lm[n.brushType](a.values, o.offset, tE(a.xyMinMax, o.xyMinMax)) : a.values;
        }
      }, this);
    }, r.prototype.makePanelOpts = function(t, e) {
      return U(this._targetInfoList, function(n) {
        var i = n.getPanelRect();
        return {
          panelId: n.panelId,
          defaultBrushType: e ? e(n) : null,
          clipPath: UP(i),
          isTargetByCursor: YP(i, t, n.coordSysModel),
          getLinearBrushOtherExtent: WP(i)
        };
      });
    }, r.prototype.controlSeries = function(t, e, n) {
      var i = this.findTargetInfo(t, n);
      return i === !0 || i && ot(i.coordSyses, e.coordinateSystem) >= 0;
    }, r.prototype.findTargetInfo = function(t, e) {
      for (var n = this._targetInfoList, i = Mm(e, t), a = 0; a < n.length; a++) {
        var o = n[a], s = t.panelId;
        if (s) {
          if (o.panelId === s)
            return o;
        } else
          for (var u = 0; u < Dm.length; u++)
            if (Dm[u](i, o))
              return o;
      }
      return !0;
    }, r;
  })()
);
function zh(r) {
  return r[0] > r[1] && r.reverse(), r;
}
function Mm(r, t) {
  return _a(r, t, {
    includeMainTypes: JR
  });
}
var jR = {
  grid: function(r, t) {
    var e = r.xAxisModels, n = r.yAxisModels, i = r.gridModels, a = Y(), o = {}, s = {};
    !e && !n && !i || (T(e, function(u) {
      var l = u.axis.grid.model;
      a.set(l.id, l), o[l.id] = !0;
    }), T(n, function(u) {
      var l = u.axis.grid.model;
      a.set(l.id, l), s[l.id] = !0;
    }), T(i, function(u) {
      a.set(u.id, u), o[u.id] = !0, s[u.id] = !0;
    }), a.each(function(u) {
      var l = u.coordinateSystem, f = [];
      T(l.getCartesians(), function(h, v) {
        (ot(e, h.getAxis("x").model) >= 0 || ot(n, h.getAxis("y").model) >= 0) && f.push(h);
      }), t.push({
        panelId: "grid--" + u.id,
        gridModel: u,
        coordSysModel: u,
        // Use the first one as the representitive coordSys.
        coordSys: f[0],
        coordSyses: f,
        getPanelRect: Am.grid,
        xAxisDeclared: o[u.id],
        yAxisDeclared: s[u.id]
      });
    }));
  },
  geo: function(r, t) {
    T(r.geoModels, function(e) {
      var n = e.coordinateSystem;
      t.push({
        panelId: "geo--" + e.id,
        geoModel: e,
        coordSysModel: e,
        coordSys: n,
        coordSyses: [n],
        getPanelRect: Am.geo
      });
    });
  }
}, Dm = [
  // grid
  function(r, t) {
    var e = r.xAxisModel, n = r.yAxisModel, i = r.gridModel;
    return !i && e && (i = e.axis.grid.model), !i && n && (i = n.axis.grid.model), i && i === t.gridModel;
  },
  // geo
  function(r, t) {
    var e = r.geoModel;
    return e && e === t.geoModel;
  }
], Am = {
  grid: function() {
    return this.coordSys.master.getRect().clone();
  },
  geo: function() {
    var r = this.coordSys.view, t = X1(null, r);
    return ny(t, t, CP(null, r)), t;
  }
}, vf = {
  lineX: ht(Im, 0),
  lineY: ht(Im, 1),
  rect: function(r, t, e, n) {
    var i = r ? t.pointToData([e[0][0], e[1][0]], n) : t.dataToPoint([e[0][0], e[1][0]], n), a = r ? t.pointToData([e[0][1], e[1][1]], n) : t.dataToPoint([e[0][1], e[1][1]], n), o = [zh([i[0], a[0]]), zh([i[1], a[1]])];
    return {
      values: o,
      xyMinMax: o
    };
  },
  polygon: function(r, t, e, n) {
    var i = [Jt(), Jt()], a = U(e, function(o) {
      var s = r ? t.pointToData(o, n) : t.dataToPoint(o, n);
      return i[0][0] = Math.min(i[0][0], s[0]), i[1][0] = Math.min(i[1][0], s[1]), i[0][1] = Math.max(i[0][1], s[0]), i[1][1] = Math.max(i[1][1], s[1]), s;
    });
    return {
      values: a,
      xyMinMax: i
    };
  }
};
function Im(r, t, e, n) {
  var i = e.getAxis(["x", "y"][r]), a = zh(U([0, 1], function(s) {
    return t ? i.coordToData(i.toLocalCoord(n[s]), !0) : i.toGlobalCoord(i.dataToCoord(n[s]));
  })), o = [];
  return o[r] = a, o[1 - r] = [NaN, NaN], {
    values: a,
    xyMinMax: o
  };
}
var Lm = {
  lineX: ht(Pm, 0),
  lineY: ht(Pm, 1),
  rect: function(r, t, e) {
    return [[r[0][0] - e[0] * t[0][0], r[0][1] - e[0] * t[0][1]], [r[1][0] - e[1] * t[1][0], r[1][1] - e[1] * t[1][1]]];
  },
  polygon: function(r, t, e) {
    return U(r, function(n, i) {
      return [n[0] - e[0] * t[i][0], n[1] - e[1] * t[i][1]];
    });
  }
};
function Pm(r, t, e, n) {
  return [t[0] - n[r] * e[0], t[1] - n[r] * e[1]];
}
function tE(r, t) {
  var e = Rm(r), n = Rm(t), i = [e[0] / n[0], e[1] / n[1]];
  return isNaN(i[0]) && (i[0] = 1), isNaN(i[1]) && (i[1] = 1), i;
}
function Rm(r) {
  return r ? [r[0][1] - r[0][0], r[1][1] - r[1][0]] : [NaN, NaN];
}
var Hh = T, eE = Fx("toolbox-dataZoom_"), rE = {
  x: "width",
  y: "height"
}, nE = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.render = function(e, n, i, a) {
      this._brushController || (this._brushController = new OP(i.getZr()), this._brushController.on("brush", K(this._onBrush, this)).mount()), oE(e, n, this, a, i), aE(e, n);
    }, t.prototype.onclick = function(e, n, i) {
      iE[i].call(this);
    }, t.prototype.dispose = function(e, n) {
      this._brushController && this._brushController.dispose();
    }, t.prototype._onBrush = function(e) {
      var n = e.areas;
      if (!e.isEnd || !n.length)
        return;
      var i = {}, a = this.ecModel;
      this._brushController.updateCovers([]);
      var o = new _S(xc(this.model), a, {
        include: ["grid"]
      });
      o.matchOutputRanges(n, a, function(l, f, h) {
        if (h.type === "cartesian2d") {
          var v = h.master.getRect().clone(), c = l.brushType;
          c === "rect" ? (s("x", h, v, f[0]), s("y", h, v, f[1])) : s({
            lineX: "x",
            lineY: "y"
          }[c], h, v, f);
        }
      }), XR(a, i), this._dispatchZoomAction(i);
      function s(l, f, h, v) {
        var c = f.getAxis(l), d = c.model, p = u(l, d, a), m = p.findRepresentativeAxisProxy(d).getMinMaxSpan(), g = c.scale.getExtent();
        (m.minValueSpan != null || m.maxValueSpan != null) && (v = Di(0, v.slice(), g, 0, m.minValueSpan, m.maxValueSpan));
        var y = rv(g, h[rE[l]], 0.5);
        p && (i[p.id] = {
          dataZoomId: p.id,
          startValue: isFinite(y) ? st(v[0], y) : v[0],
          endValue: isFinite(y) ? st(v[1], y) : v[1]
        });
      }
      function u(l, f, h) {
        var v;
        return h.eachComponent({
          mainType: "dataZoom",
          subType: "select"
        }, function(c) {
          var d = c.getAxisModel(l, f.componentIndex);
          d && (v = c);
        }), v;
      }
    }, t.prototype._dispatchZoomAction = function(e) {
      var n = [];
      Hh(e, function(i, a) {
        n.push(tt(i));
      }), n.length && this.api.dispatchAction({
        type: "dataZoom",
        from: this.uid,
        batch: n
      });
    }, t.getDefaultOption = function(e) {
      var n = {
        show: !0,
        filterMode: "filter",
        // Icon group
        icon: {
          zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
          back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
        },
        // `zoom`, `back`
        title: e.getLocaleModel().get(["toolbox", "dataZoom", "title"]),
        brushStyle: {
          borderWidth: 0,
          color: O.color.backgroundTint
        }
      };
      return n;
    }, t;
  })(ur)
), iE = {
  zoom: function() {
    var r = !this._isZoomActive;
    this.api.dispatchAction({
      type: "takeGlobalCursor",
      key: "dataZoomSelect",
      dataZoomSelectActive: r
    });
  },
  back: function() {
    this._dispatchZoomAction($R(this.ecModel));
  }
};
function xc(r) {
  var t = {
    xAxisIndex: r.get("xAxisIndex", !0),
    yAxisIndex: r.get("yAxisIndex", !0),
    xAxisId: r.get("xAxisId", !0),
    yAxisId: r.get("yAxisId", !0)
  };
  return t.xAxisIndex == null && t.xAxisId == null && (t.xAxisIndex = "all"), t.yAxisIndex == null && t.yAxisId == null && (t.yAxisIndex = "all"), t;
}
function aE(r, t) {
  r.setIconStatus("back", KR(t) > 1 ? "emphasis" : "normal");
}
function oE(r, t, e, n, i) {
  var a = e._isZoomActive;
  n && n.type === "takeGlobalCursor" && (a = n.key === "dataZoomSelect" ? n.dataZoomSelectActive : !1), e._isZoomActive = a, r.setIconStatus("zoom", a ? "emphasis" : "normal");
  var o = new _S(xc(r), t, {
    include: ["grid"]
  }), s = o.makePanelOpts(i, function(u) {
    return u.xAxisDeclared && !u.yAxisDeclared ? "lineX" : !u.xAxisDeclared && u.yAxisDeclared ? "lineY" : "rect";
  });
  e._brushController.setPanels(s).enableBrush(a && s.length ? {
    brushType: "auto",
    brushStyle: r.getModel("brushStyle").getItemStyle()
  } : !1);
}
hM("dataZoom", function(r) {
  var t = r.getComponent("toolbox", 0), e = ["feature", "dataZoom"];
  if (!t || t.get(e) == null)
    return;
  var n = t.getModel(e), i = [], a = xc(n), o = _a(r, a);
  Hh(o.xAxisModels, function(u) {
    return s(u, "xAxis", "xAxisIndex");
  }), Hh(o.yAxisModels, function(u) {
    return s(u, "yAxis", "yAxisIndex");
  });
  function s(u, l, f) {
    var h = u.componentIndex, v = {
      type: "select",
      $fromToolbox: !0,
      // Default to be filter
      filterMode: n.get("filterMode", !0) || "filter",
      // Id for merge mapping.
      id: eE + l + h
    };
    v[f] = h, i.push(v);
  }
  return i;
});
function sE(r) {
  r.registerComponentModel(PR), r.registerComponentView(RR), ra("saveAsImage", OR), ra("magicType", BR), ra("dataView", YR), ra("dataZoom", nE), ra("restore", QR), Le(LR);
}
var uE = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "tooltip", t.dependencies = ["axisPointer"], t.defaultOption = {
      // zlevel: 0,
      z: 60,
      show: !0,
      // tooltip main content
      showContent: !0,
      // 'trigger' only works on coordinate system.
      // 'item' | 'axis' | 'none'
      trigger: "item",
      // 'click' | 'mousemove' | 'none'
      triggerOn: "mousemove|click|mousewheel",
      alwaysShowContent: !1,
      renderMode: "auto",
      // whether restraint content inside viewRect.
      // If renderMode: 'richText', default true.
      // If renderMode: 'html', defaults to `false` (for backward compat).
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      // Animation transition time, unit is second
      transitionDuration: 0.4,
      displayTransition: !0,
      enterable: !1,
      backgroundColor: O.color.neutral00,
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      defaultBorderColor: O.color.border,
      // Tooltip inside padding, default is 5 for all direction
      // Array is allowed to set up, right, bottom, left, same with css
      // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
      padding: null,
      // Extra css text
      extraCssText: "",
      // axis indicator, trigger by axis
      axisPointer: {
        // default is line
        // legal values: 'line' | 'shadow' | 'cross'
        type: "line",
        // Valid when type is line, appoint tooltip line locate on which line. Optional
        // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
        // default is 'auto', chose the axis which type is category.
        // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: O.color.borderShade,
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: O.color.tertiary,
        fontSize: 14
      }
    }, t;
  })(ct)
);
function SS(r) {
  var t = r.get("confine");
  return t != null ? !!t : r.get("renderMode") === "richText";
}
function bS(r) {
  if (et.domSupported) {
    for (var t = document.documentElement.style, e = 0, n = r.length; e < n; e++)
      if (r[e] in t)
        return r[e];
  }
}
var xS = bS(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), lE = bS(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function wS(r, t) {
  if (!r)
    return t;
  t = G0(t, !0);
  var e = r.indexOf(t);
  return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase();
}
function fE(r, t) {
  var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
  return e ? e[t] : null;
}
var hE = wS(lE, "transition"), wc = wS(xS, "transform"), vE = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (et.transform3dSupported ? "will-change:transform;" : "");
function cE(r) {
  return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r;
}
function dE(r, t, e) {
  if (!V(e) || e === "inside")
    return "";
  var n = r.get("backgroundColor"), i = r.get("borderWidth");
  t = An(t);
  var a = cE(e), o = Math.max(Math.round(i) * 1.5, 6), s = "", u = wc + ":", l;
  ot(["left", "right"], a) > -1 ? (s += "top:50%", u += "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", u += "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)");
  var f = l * Math.PI / 180, h = o + i, v = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), c = Math.round(((v - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (v - h) / 2) * 100) / 100;
  s += ";" + a + ":-" + c + "px";
  var d = t + " solid " + i + "px;", p = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + u + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + n + ";"];
  return '<div style="' + p.join("") + '"></div>';
}
function pE(r, t, e) {
  var n = "cubic-bezier(0.23,1,0.32,1)", i = "", a = "";
  return e && (i = " " + r / 2 + "s " + n, a = "opacity" + i + ",visibility" + i), t || (i = " " + r + "s " + n, a += (a.length ? "," : "") + (et.transformSupported ? "" + wc + i : ",left" + i + ",top" + i)), hE + ":" + a;
}
function Em(r, t, e) {
  var n = r.toFixed(0) + "px", i = t.toFixed(0) + "px";
  if (!et.transformSupported)
    return e ? "top:" + i + ";left:" + n + ";" : [["top", i], ["left", n]];
  var a = et.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
  return e ? "top:0;left:0;" + wc + ":" + o + ";" : [["top", 0], ["left", 0], [xS, o]];
}
function gE(r) {
  var t = [], e = r.get("fontSize"), n = r.getTextColor();
  n && t.push("color:" + n), t.push("font:" + r.getFont());
  var i = X(r.get("lineHeight"), Math.round(e * 3 / 2));
  e && t.push("line-height:" + i + "px");
  var a = r.get("textShadowColor"), o = r.get("textShadowBlur") || 0, s = r.get("textShadowOffsetX") || 0, u = r.get("textShadowOffsetY") || 0;
  return a && o && t.push("text-shadow:" + s + "px " + u + "px " + o + "px " + a), T(["decoration", "align"], function(l) {
    var f = r.get(l);
    f && t.push("text-" + l + ":" + f);
  }), t.join(";");
}
function mE(r, t, e, n) {
  var i = [], a = r.get("transitionDuration"), o = r.get("backgroundColor"), s = r.get("shadowBlur"), u = r.get("shadowColor"), l = r.get("shadowOffsetX"), f = r.get("shadowOffsetY"), h = r.getModel("textStyle"), v = d_(r, "html"), c = l + "px " + f + "px " + s + "px " + u;
  return i.push("box-shadow:" + c), t && a > 0 && i.push(pE(a, e, n)), o && i.push("background-color:" + o), T(["width", "color", "radius"], function(d) {
    var p = "border-" + d, m = G0(p), g = r.get(m);
    g != null && i.push(p + ":" + g + (d === "color" ? "" : "px"));
  }), i.push(gE(h)), v != null && i.push("padding:" + ku(v).join("px ") + "px"), i.join(";") + ";";
}
function Om(r, t, e, n, i) {
  var a = t && t.painter;
  if (e) {
    var o = a && a.getViewportRoot();
    o && ub(r, o, e, n, i);
  } else {
    r[0] = n, r[1] = i;
    var s = a && a.getViewportRootOffset();
    s && (r[0] += s.offsetLeft, r[1] += s.offsetTop);
  }
  r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var yE = (
  /** @class */
  (function() {
    function r(t, e) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, et.wxa)
        return null;
      var n = document.createElement("div");
      n.domBelongToZr = !0, this.el = n;
      var i = this._zr = t.getZr(), a = e.appendTo, o = a && (V(a) ? document.querySelector(a) : pi(a) ? a : Q(a) && a(t.getDom()));
      Om(this._styleCoord, i, o, t.getWidth() / 2, t.getHeight() / 2), (o || t.getDom()).appendChild(n), this._api = t, this._container = o;
      var s = this;
      n.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, n.onmousemove = function(u) {
        if (u = u || window.event, !s._enterable) {
          var l = i.handler, f = i.painter.getViewportRoot();
          de(f, u, !0), l.dispatch("mousemove", u);
        }
      }, n.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return r.prototype.update = function(t) {
      if (!this._container) {
        var e = this._api.getDom(), n = fE(e, "position"), i = e.style;
        i.position !== "absolute" && n !== "absolute" && (i.position = "relative");
      }
      var a = t.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this._enableDisplayTransition = t.get("displayTransition") && t.get("transitionDuration") > 0, this.el.className = t.get("className") || "";
    }, r.prototype.show = function(t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var n = this.el, i = n.style, a = this._styleCoord;
      n.innerHTML ? i.cssText = vE + mE(t, !this._firstShow, this._longHide, this._enableDisplayTransition) + Em(a[0], a[1], !0) + ("border-color:" + An(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, r.prototype.setContent = function(t, e, n, i, a) {
      var o = this.el;
      if (t == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (V(a) && n.get("trigger") === "item" && !SS(n) && (s = dE(n, i, a)), V(t))
        o.innerHTML = t + s;
      else if (t) {
        o.innerHTML = "", z(t) || (t = [t]);
        for (var u = 0; u < t.length; u++)
          pi(t[u]) && t[u].parentNode !== o && o.appendChild(t[u]);
        if (s && o.childNodes.length) {
          var l = document.createElement("div");
          l.innerHTML = s, o.appendChild(l);
        }
      }
    }, r.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, r.prototype.getSize = function() {
      var t = this.el;
      return t ? [t.offsetWidth, t.offsetHeight] : [0, 0];
    }, r.prototype.moveTo = function(t, e) {
      if (this.el) {
        var n = this._styleCoord;
        if (Om(n, this._zr, this._container, t, e), n[0] != null && n[1] != null) {
          var i = this.el.style, a = Em(n[0], n[1]);
          T(a, function(o) {
            i[o[0]] = o[1];
          });
        }
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      var t = this, e = this.el.style;
      this._enableDisplayTransition ? (e.visibility = "hidden", e.opacity = "0") : e.display = "none", et.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
        return t._longHide = !0;
      }, 500);
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(K(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var t = this._zr;
      lb(t && t.painter && t.painter.getViewportRoot(), this._container);
      var e = this.el;
      if (e) {
        e.onmouseenter = e.onmousemove = e.onmouseleave = null;
        var n = e.parentNode;
        n && n.removeChild(e);
      }
      this.el = this._container = null;
    }, r;
  })()
), _E = (
  /** @class */
  (function() {
    function r(t) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), Bm(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
    }
    return r.prototype.update = function(t) {
      var e = t.get("alwaysShowContent");
      e && this._moveIfResized(), this._alwaysShowContent = e;
    }, r.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, r.prototype.setContent = function(t, e, n, i, a) {
      var o = this;
      Z(t) && Qt(""), this.el && this._zr.remove(this.el);
      var s = n.getModel("textStyle");
      this.el = new Rt({
        style: {
          rich: e.richTextStyles,
          text: t,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: i,
          textShadowColor: s.get("textShadowColor"),
          fill: n.get(["textStyle", "color"]),
          padding: d_(n, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: n.get("z")
      }), T(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(l) {
        o.el.style[l] = n.get(l);
      }), T(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(l) {
        o.el.style[l] = s.get(l) || 0;
      }), this._zr.add(this.el);
      var u = this;
      this.el.on("mouseover", function() {
        u._enterable && (clearTimeout(u._hideTimeout), u._show = !0), u._inContent = !0;
      }), this.el.on("mouseout", function() {
        u._enterable && u._show && u.hideLater(u._hideDelay), u._inContent = !1;
      });
    }, r.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, r.prototype.getSize = function() {
      var t = this.el, e = this.el.getBoundingRect(), n = km(t.style);
      return [e.width + n.left + n.right, e.height + n.top + n.bottom];
    }, r.prototype.moveTo = function(t, e) {
      var n = this.el;
      if (n) {
        var i = this._styleCoord;
        Bm(i, this._zr, t, e), t = i[0], e = i[1];
        var a = n.style, o = wr(a.borderWidth || 0), s = km(a);
        n.x = t + o + s.left, n.y = e + o + s.top, n.markRedraw();
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(K(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, r;
  })()
);
function wr(r) {
  return Math.max(0, r);
}
function km(r) {
  var t = wr(r.shadowBlur || 0), e = wr(r.shadowOffsetX || 0), n = wr(r.shadowOffsetY || 0);
  return {
    left: wr(t - e),
    right: wr(t + e),
    top: wr(t - n),
    bottom: wr(t + n)
  };
}
function Bm(r, t, e, n) {
  r[0] = e, r[1] = n, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var SE = new St({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), bE = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function(e, n) {
      if (!(et.node || !n.getDom())) {
        var i = e.getComponent("tooltip"), a = this._renderMode = Yx(i.get("renderMode"));
        this._tooltipContent = a === "richText" ? new _E(n) : new yE(n, {
          appendTo: i.get("appendToBody", !0) ? "body" : i.get("appendTo", !0)
        });
      }
    }, t.prototype.render = function(e, n, i) {
      if (!(et.node || !i.getDom())) {
        this.group.removeAll(), this._tooltipModel = e, this._ecModel = n, this._api = i;
        var a = this._tooltipContent;
        a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? Nu(this, "_updatePosition", 50, "fixRate") : $s(this, "_updatePosition");
      }
    }, t.prototype._initGlobalListener = function() {
      var e = this._tooltipModel, n = e.get("triggerOn");
      uS("itemTooltip", this._api, K(function(i, a, o) {
        n !== "none" && (n.indexOf(i) >= 0 ? this._tryShow(a, o) : i === "leave" && this._hide(o));
      }, this));
    }, t.prototype._keepShow = function() {
      var e = this._tooltipModel, n = this._ecModel, i = this._api, a = e.get("triggerOn");
      if (e.get("trigger") !== "axis" && (this._lastDataByCoordSys = null, this._cbParamsList = null), this._lastX != null && this._lastY != null && a !== "none" && a !== "click") {
        var o = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
          !i.isDisposed() && o.manuallyShowTip(e, n, i, {
            x: o._lastX,
            y: o._lastY,
            dataByCoordSys: o._lastDataByCoordSys
          });
        });
      }
    }, t.prototype.manuallyShowTip = function(e, n, i, a) {
      if (!(a.from === this.uid || et.node || !i.getDom())) {
        var o = Nm(a, i);
        this._ticket = "";
        var s = a.dataByCoordSys, u = CE(a, n, i);
        if (u) {
          var l = u.el.getBoundingRect().clone();
          l.applyTransform(u.el.transform), this._tryShow({
            offsetX: l.x + l.width / 2,
            offsetY: l.y + l.height / 2,
            target: u.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else if (a.tooltip && a.x != null && a.y != null) {
          var f = SE;
          f.x = a.x, f.y = a.y, f.update(), pt(f).tooltipConfig = {
            name: null,
            option: a.tooltip
          }, this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            target: f
          }, o);
        } else if (s)
          this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            position: a.position,
            dataByCoordSys: s,
            tooltipOption: a.tooltipOption
          }, o);
        else if (a.seriesIndex != null) {
          if (this._manuallyAxisShowTip(e, n, i, a))
            return;
          var h = lS(a, n), v = h.point[0], c = h.point[1];
          v != null && c != null && this._tryShow({
            offsetX: v,
            offsetY: c,
            target: h.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else a.x != null && a.y != null && (i.dispatchAction({
          type: "updateAxisPointer",
          x: a.x,
          y: a.y
        }), this._tryShow({
          offsetX: a.x,
          offsetY: a.y,
          position: a.position,
          target: i.getZr().findHover(a.x, a.y).target
        }, o));
      }
    }, t.prototype.manuallyHideTip = function(e, n, i, a) {
      var o = this._tooltipContent;
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, this._cbParamsList = null, a.from !== this.uid && this._hide(Nm(a, i));
    }, t.prototype._manuallyAxisShowTip = function(e, n, i, a) {
      var o = a.seriesIndex, s = a.dataIndex, u = n.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || u == null)) {
        var l = n.getSeriesByIndex(o);
        if (l) {
          var f = l.getData(), h = na([f.getItemModel(s), l, (l.coordinateSystem || {}).model], this._tooltipModel);
          if (h.get("trigger") === "axis")
            return i.dispatchAction({
              type: "updateAxisPointer",
              seriesIndex: o,
              dataIndex: s,
              position: a.position
            }), !0;
        }
      }
    }, t.prototype._tryShow = function(e, n) {
      var i = e.target, a = this._tooltipModel;
      if (a) {
        this._lastX = e.offsetX, this._lastY = e.offsetY;
        var o = e.dataByCoordSys;
        if (o && o.length)
          this._showAxisTooltip(o, e);
        else if (i) {
          var s = pt(i);
          if (s.ssrType === "legend")
            return;
          this._lastDataByCoordSys = null, this._cbParamsList = null;
          var u, l;
          ca(i, function(f) {
            if (f.tooltipDisabled)
              return u = l = null, !0;
            u || l || (pt(f).dataIndex != null ? u = f : pt(f).tooltipConfig != null && (l = f));
          }, !0), u ? this._showSeriesItemTooltip(e, u, n) : l ? this._showComponentItemTooltip(e, l, n) : this._hide(n);
        } else
          this._lastDataByCoordSys = null, this._cbParamsList = null, this._hide(n);
      }
    }, t.prototype._showOrMove = function(e, n) {
      var i = e.get("showDelay");
      n = K(n, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(n, i) : n();
    }, t.prototype._showAxisTooltip = function(e, n) {
      var i = this._ecModel, a = this._tooltipModel, o = [n.offsetX, n.offsetY], s = na([n.tooltipOption], a), u = this._renderMode, l = [], f = Ha("section", {
        blocks: [],
        noHeader: !0
      }), h = [], v = new Yl();
      T(e, function(y) {
        T(y.dataByAxis, function(_) {
          var S = i.getComponent(_.axisDim + "Axis", _.axisIndex), b = _.value, x = S.axis, w = x.scale.parse(b);
          if (!(!S || b == null)) {
            var D = oS(b, x, i, _.seriesDataIndices, _.valueLabelOpt), C = Ha("section", {
              header: D,
              noHeader: !Ve(D),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(C), T(_.seriesDataIndices, function(M) {
              var A = i.getSeriesByIndex(M.seriesIndex), L = M.dataIndexInside, I = A.getDataParams(L);
              if (!(I.dataIndex < 0)) {
                I.axisDim = _.axisDim, I.axisIndex = _.axisIndex, I.axisType = _.axisType, I.axisId = _.axisId, I.axisValue = iu(S.axis, {
                  value: w
                }), I.axisValueLabel = D, I.marker = v.makeTooltipMarker("item", An(I.color), u);
                var P = Ap(A.formatTooltip(L, !0, null)), E = P.frag;
                if (E) {
                  var R = na([A], a).get("valueFormatter");
                  C.blocks.push(R ? B({
                    valueFormatter: R
                  }, E) : E);
                }
                P.text && h.push(P.text), l.push(I);
              }
            });
          }
        });
      }), f.blocks.reverse(), h.reverse();
      var c = n.position, d = s.get("order"), p = Ep(f, v, u, d, i.get("useUTC"), s.get("textStyle"));
      p && h.unshift(p);
      var m = u === "richText" ? `

` : "<br/>", g = h.join(m);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(e, l) ? this._updatePosition(s, c, o[0], o[1], this._tooltipContent, l) : this._showTooltipContent(s, g, l, Math.random() + "", o[0], o[1], c, null, v);
      });
    }, t.prototype._showSeriesItemTooltip = function(e, n, i) {
      var a = this._ecModel, o = pt(n), s = o.seriesIndex, u = a.getSeriesByIndex(s), l = o.dataModel || u, f = o.dataIndex, h = o.dataType, v = l.getData(h), c = this._renderMode, d = e.positionDefault, p = na([v.getItemModel(f), l, u && (u.coordinateSystem || {}).model], this._tooltipModel, d ? {
        position: d
      } : null), m = p.get("trigger");
      if (!(m != null && m !== "item")) {
        var g = l.getDataParams(f, h), y = new Yl();
        g.marker = y.makeTooltipMarker("item", An(g.color), c);
        var _ = Ap(l.formatTooltip(f, !1, h)), S = p.get("order"), b = p.get("valueFormatter"), x = _.frag, w = x ? Ep(b ? B({
          valueFormatter: b
        }, x) : x, y, c, S, a.get("useUTC"), p.get("textStyle")) : _.text, D = "item_" + l.name + "_" + f;
        this._showOrMove(p, function() {
          this._showTooltipContent(p, w, g, D, e.offsetX, e.offsetY, e.position, e.target, y);
        }), i({
          type: "showTip",
          dataIndexInside: f,
          dataIndex: v.getRawIndex(f),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, t.prototype._showComponentItemTooltip = function(e, n, i) {
      var a = this._renderMode === "html", o = pt(n), s = o.tooltipConfig, u = s.option || {}, l = u.encodeHTMLContent;
      if (V(u)) {
        var f = u;
        u = {
          content: f,
          // Fixed formatter
          formatter: f
        }, l = !0;
      }
      l && a && u.content && (u = tt(u), u.content = qt(u.content));
      var h = [u], v = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      v && h.push(v), h.push({
        formatter: u.content
      });
      var c = e.positionDefault, d = na(h, this._tooltipModel, c ? {
        position: c
      } : null), p = d.get("content"), m = Math.random() + "", g = new Yl();
      this._showOrMove(d, function() {
        var y = tt(d.get("formatterParams") || {});
        this._showTooltipContent(d, p, y, m, e.offsetX, e.offsetY, e.position, n, g);
      }), i({
        type: "showTip",
        from: this.uid
      });
    }, t.prototype._showTooltipContent = function(e, n, i, a, o, s, u, l, f) {
      if (this._ticket = "", !(!e.get("showContent") || !e.get("show"))) {
        var h = this._tooltipContent;
        h.setEnterable(e.get("enterable"));
        var v = e.get("formatter");
        u = u || e.get("position");
        var c = n, d = this._getNearestPoint([o, s], i, e.get("trigger"), e.get("borderColor"), e.get("defaultBorderColor", !0)), p = d.color;
        if (v)
          if (V(v)) {
            var m = e.ecModel.get("useUTC"), g = z(i) ? i[0] : i, y = g && g.axisType && g.axisType.indexOf("time") >= 0;
            c = v, y && (c = Ou(g.axisValue, c, m)), c = U0(c, i, !0);
          } else if (Q(v)) {
            var _ = K(function(S, b) {
              S === this._ticket && (h.setContent(b, f, e, p, u), this._updatePosition(e, u, o, s, h, i, l));
            }, this);
            this._ticket = a, c = v(i, a, _);
          } else
            c = v;
        h.setContent(c, f, e, p, u), h.show(e, p), this._updatePosition(e, u, o, s, h, i, l);
      }
    }, t.prototype._getNearestPoint = function(e, n, i, a, o) {
      if (i === "axis" || z(n))
        return {
          color: a || o
        };
      if (!z(n))
        return {
          color: a || n.color || n.borderColor
        };
    }, t.prototype._updatePosition = function(e, n, i, a, o, s, u) {
      var l = this._api.getWidth(), f = this._api.getHeight();
      n = n || e.get("position");
      var h = o.getSize(), v = e.get("align"), c = e.get("verticalAlign"), d = u && u.getBoundingRect().clone();
      if (u && d.applyTransform(u.transform), Q(n) && (n = n([i, a], s, o.el, d, {
        viewSize: [l, f],
        contentSize: h.slice()
      })), z(n))
        i = ye(n[0], l), a = ye(n[1], f);
      else if (Z(n)) {
        var p = n;
        p.width = h[0], p.height = h[1];
        var m = vr(p, {
          width: l,
          height: f
        });
        i = m.x, a = m.y, v = null, c = null;
      } else if (V(n) && u) {
        var g = TE(n, d, h, e.get("borderWidth"));
        i = g[0], a = g[1];
      } else {
        var g = xE(i, a, o, l, f, v ? null : 20, c ? null : 20);
        i = g[0], a = g[1];
      }
      if (v && (i -= Fm(v) ? h[0] / 2 : v === "right" ? h[0] : 0), c && (a -= Fm(c) ? h[1] / 2 : c === "bottom" ? h[1] : 0), SS(e)) {
        var g = wE(i, a, o, l, f);
        i = g[0], a = g[1];
      }
      o.moveTo(i, a);
    }, t.prototype._updateContentNotChangedOnAxis = function(e, n) {
      var i = this._lastDataByCoordSys, a = this._cbParamsList, o = !!i && i.length === e.length;
      return o && T(i, function(s, u) {
        var l = s.dataByAxis || [], f = e[u] || {}, h = f.dataByAxis || [];
        o = o && l.length === h.length, o && T(l, function(v, c) {
          var d = h[c] || {}, p = v.seriesDataIndices || [], m = d.seriesDataIndices || [];
          o = o && v.value === d.value && v.axisType === d.axisType && v.axisId === d.axisId && p.length === m.length, o && T(p, function(g, y) {
            var _ = m[y];
            o = o && g.seriesIndex === _.seriesIndex && g.dataIndex === _.dataIndex;
          }), a && T(v.seriesDataIndices, function(g) {
            var y = g.seriesIndex, _ = n[y], S = a[y];
            _ && S && S.data !== _.data && (o = !1);
          });
        });
      }), this._lastDataByCoordSys = e, this._cbParamsList = n, !!o;
    }, t.prototype._hide = function(e) {
      this._lastDataByCoordSys = null, this._cbParamsList = null, e({
        type: "hideTip",
        from: this.uid
      });
    }, t.prototype.dispose = function(e, n) {
      et.node || !n.getDom() || ($s(this, "_updatePosition"), this._tooltipContent.dispose(), Nh("itemTooltip", n), this._tooltipContent = null, this._tooltipModel = null, this._lastDataByCoordSys = null, this._cbParamsList = null);
    }, t.type = "tooltip", t;
  })(le)
);
function na(r, t, e) {
  var n = t.ecModel, i;
  e ? (i = new Tt(e, n, n), i = new Tt(t.option, i, n)) : i = t;
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a];
    o && (o instanceof Tt && (o = o.get("tooltip", !0)), V(o) && (o = {
      formatter: o
    }), o && (i = new Tt(o, i, n)));
  }
  return i;
}
function Nm(r, t) {
  return r.dispatchAction || K(t.dispatchAction, t);
}
function xE(r, t, e, n, i, a, o) {
  var s = e.getSize(), u = s[0], l = s[1];
  return a != null && (r + u + a + 2 > n ? r -= u + a : r += a), o != null && (t + l + o > i ? t -= l + o : t += o), [r, t];
}
function wE(r, t, e, n, i) {
  var a = e.getSize(), o = a[0], s = a[1];
  return r = Math.min(r + o, n) - o, t = Math.min(t + s, i) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t];
}
function TE(r, t, e, n) {
  var i = e[0], a = e[1], o = Math.ceil(Math.SQRT2 * n) + 8, s = 0, u = 0, l = t.width, f = t.height;
  switch (r) {
    case "inside":
      s = t.x + l / 2 - i / 2, u = t.y + f / 2 - a / 2;
      break;
    case "top":
      s = t.x + l / 2 - i / 2, u = t.y - a - o;
      break;
    case "bottom":
      s = t.x + l / 2 - i / 2, u = t.y + f + o;
      break;
    case "left":
      s = t.x - i - o, u = t.y + f / 2 - a / 2;
      break;
    case "right":
      s = t.x + l + o, u = t.y + f / 2 - a / 2;
  }
  return [s, u];
}
function Fm(r) {
  return r === "center" || r === "middle";
}
function CE(r, t, e) {
  var n = sv(r).queryOptionMap, i = n.keys()[0];
  if (!(!i || i === "series")) {
    var a = to(t, i, n.get(i), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (o) {
      var s = e.getViewOfComponentModel(o), u;
      if (s.group.traverse(function(l) {
        var f = pt(l).tooltipConfig;
        if (f && f.name === r.name)
          return u = l, !0;
      }), u)
        return {
          componentMainType: i,
          componentIndex: o.componentIndex,
          el: u
        };
    }
  }
}
function ME(r) {
  Le(fS), r.registerComponentModel(uE), r.registerComponentView(bE), r.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, Nt), r.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, Nt);
}
var DE = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.layoutMode = {
        type: "box",
        ignoreSize: !0
      }, e;
    }
    return t.type = "title", t.defaultOption = {
      // zlevel: 0,
      z: 6,
      show: !0,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: "center",
      top: O.size.m,
      backgroundColor: O.color.transparent,
      borderColor: O.color.primary,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: O.color.primary
      },
      subtextStyle: {
        fontSize: 12,
        color: O.color.quaternary
      }
    }, t;
  })(ct)
), AE = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i) {
      if (this.group.removeAll(), !!e.get("show")) {
        var a = this.group, o = e.getModel("textStyle"), s = e.getModel("subtextStyle"), u = e.get("textAlign"), l = X(e.get("textBaseline"), e.get("textVerticalAlign")), f = new Rt({
          style: hr(o, {
            text: e.get("text"),
            fill: o.getTextColor()
          }, {
            disableBox: !0
          }),
          z2: 10
        }), h = f.getBoundingRect(), v = e.get("subtext"), c = new Rt({
          style: hr(s, {
            text: v,
            fill: s.getTextColor(),
            y: h.height + e.get("itemGap"),
            verticalAlign: "top"
          }, {
            disableBox: !0
          }),
          z2: 10
        }), d = e.get("link"), p = e.get("sublink"), m = e.get("triggerEvent", !0);
        f.silent = !d && !m, c.silent = !p && !m, d && f.on("click", function() {
          lp(d, "_" + e.get("target"));
        }), p && c.on("click", function() {
          lp(p, "_" + e.get("subtarget"));
        }), pt(f).eventData = pt(c).eventData = m ? {
          componentType: "title",
          componentIndex: e.componentIndex
        } : null, a.add(f), v && a.add(c);
        var g = a.getBoundingRect(), y = e.getBoxLayoutParams();
        y.width = g.width, y.height = g.height;
        var _ = uo(e, i), S = vr(y, _.refContainer, e.get("padding"));
        u || (u = e.get("left") || e.get("right"), u === "middle" && (u = "center"), u === "right" ? S.x += S.width : u === "center" && (S.x += S.width / 2)), l || (l = e.get("top") || e.get("bottom"), l === "center" && (l = "middle"), l === "bottom" ? S.y += S.height : l === "middle" && (S.y += S.height / 2), l = l || "top"), a.x = S.x, a.y = S.y, a.markRedraw();
        var b = {
          align: u,
          verticalAlign: l
        };
        f.setStyle(b), c.setStyle(b), g = a.getBoundingRect();
        var x = S.margin, w = e.getItemStyle(["color", "opacity"]);
        w.fill = e.get("backgroundColor");
        var D = new St({
          shape: {
            x: g.x - x[3],
            y: g.y - x[0],
            width: g.width + x[1] + x[3],
            height: g.height + x[0] + x[2],
            r: e.get("borderRadius")
          },
          style: w,
          subPixelOptimize: !0,
          silent: !0
        });
        a.add(D);
      }
    }, t.type = "title", t;
  })(le)
);
function IE(r) {
  r.registerComponentModel(DE), r.registerComponentView(AE);
}
var LE = function(r, t) {
  if (t === "all")
    return {
      type: "all",
      title: r.getLocaleModel().get(["legend", "selector", "all"])
    };
  if (t === "inverse")
    return {
      type: "inverse",
      title: r.getLocaleModel().get(["legend", "selector", "inverse"])
    };
}, Vh = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.layoutMode = {
        type: "box",
        // legend.width/height are maxWidth/maxHeight actually,
        // whereas real width/height is calculated by its content.
        // (Setting {left: 10, right: 10} does not make sense).
        // So consider the case:
        // `setOption({legend: {left: 10});`
        // then `setOption({legend: {right: 10});`
        // The previous `left` should be cleared by setting `ignoreSize`.
        ignoreSize: !0
      }, e;
    }
    return t.prototype.init = function(e, n, i) {
      this.mergeDefaultAndTheme(e, i), e.selected = e.selected || {}, this._updateSelector(e);
    }, t.prototype.mergeOption = function(e, n) {
      r.prototype.mergeOption.call(this, e, n), this._updateSelector(e);
    }, t.prototype._updateSelector = function(e) {
      var n = e.selector, i = this.ecModel;
      n === !0 && (n = e.selector = ["all", "inverse"]), z(n) && T(n, function(a, o) {
        V(a) && (a = {
          type: a
        }), n[o] = at(a, LE(i, a.type));
      });
    }, t.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var e = this._data;
      if (e[0] && this.get("selectedMode") === "single") {
        for (var n = !1, i = 0; i < e.length; i++) {
          var a = e[i].get("name");
          if (this.isSelected(a)) {
            this.select(a), n = !0;
            break;
          }
        }
        !n && this.select(e[0].get("name"));
      }
    }, t.prototype._updateData = function(e) {
      var n = [], i = [];
      e.eachRawSeries(function(u) {
        var l = u.name;
        i.push(l);
        var f;
        if (u.legendVisualProvider) {
          var h = u.legendVisualProvider, v = h.getAllNames();
          e.isSeriesFiltered(u) || (i = i.concat(v)), v.length ? n = n.concat(v) : f = !0;
        } else
          f = !0;
        f && ov(u) && n.push(u.name);
      }), this._availableNames = i;
      var a = this.get("data") || n, o = Y(), s = U(a, function(u) {
        return (V(u) || wt(u)) && (u = {
          name: u
        }), o.get(u.name) ? null : (o.set(u.name, !0), new Tt(u, this, this.ecModel));
      }, this);
      this._data = kt(s, function(u) {
        return !!u;
      });
    }, t.prototype.getData = function() {
      return this._data;
    }, t.prototype.select = function(e) {
      var n = this.option.selected, i = this.get("selectedMode");
      if (i === "single") {
        var a = this._data;
        T(a, function(o) {
          n[o.get("name")] = !1;
        });
      }
      n[e] = !0;
    }, t.prototype.unSelect = function(e) {
      this.get("selectedMode") !== "single" && (this.option.selected[e] = !1);
    }, t.prototype.toggleSelected = function(e) {
      var n = this.option.selected;
      n.hasOwnProperty(e) || (n[e] = !0), this[n[e] ? "unSelect" : "select"](e);
    }, t.prototype.allSelect = function() {
      var e = this._data, n = this.option.selected;
      T(e, function(i) {
        n[i.get("name", !0)] = !0;
      });
    }, t.prototype.inverseSelect = function() {
      var e = this._data, n = this.option.selected;
      T(e, function(i) {
        var a = i.get("name", !0);
        n.hasOwnProperty(a) || (n[a] = !0), n[a] = !n[a];
      });
    }, t.prototype.isSelected = function(e) {
      var n = this.option.selected;
      return !(n.hasOwnProperty(e) && !n[e]) && ot(this._availableNames, e) >= 0;
    }, t.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    }, t.type = "legend.plain", t.dependencies = ["series"], t.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      // top: 0,
      bottom: O.size.m,
      align: "auto",
      backgroundColor: O.color.transparent,
      borderColor: O.color.border,
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 8,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: O.color.disabled,
      inactiveBorderColor: O.color.disabled,
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit"
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: O.color.disabled,
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: O.color.secondary
      },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: O.color.tertiary,
        borderWidth: 1,
        borderColor: O.color.border
      },
      emphasis: {
        selectorLabel: {
          show: !0,
          color: O.color.quaternary
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: !1
      },
      triggerEvent: !1
    }, t;
  })(ct)
), Qn = ht, Gh = T, rs = Mt, TS = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !1, e;
    }
    return t.prototype.init = function() {
      this.group.add(this._contentGroup = new rs()), this.group.add(this._selectorGroup = new rs()), this._isFirstRender = !0;
    }, t.prototype.getContentGroup = function() {
      return this._contentGroup;
    }, t.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    }, t.prototype.render = function(e, n, i) {
      var a = this._isFirstRender;
      if (this._isFirstRender = !1, this.resetInner(), !!e.get("show", !0)) {
        var o = e.get("align"), s = e.get("orient");
        (!o || o === "auto") && (o = e.get("left") === "right" && s === "vertical" ? "right" : "left");
        var u = e.get("selector", !0), l = e.get("selectorPosition", !0);
        u && (!l || l === "auto") && (l = s === "horizontal" ? "end" : "start"), this.renderInner(o, e, n, i, u, s, l);
        var f = uo(e, i).refContainer, h = e.getBoxLayoutParams(), v = e.get("padding"), c = vr(h, f, v), d = this.layoutInner(e, o, c, a, u, l), p = vr(ut({
          width: d.width,
          height: d.height
        }, h), f, v);
        this.group.x = p.x - d.x, this.group.y = p.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = gS(
          d,
          // FXIME: most itemStyle options does not work in background because inherit is not handled yet.
          e
        ));
      }
    }, t.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, t.prototype.renderInner = function(e, n, i, a, o, s, u) {
      var l = this.getContentGroup(), f = Y(), h = n.get("selectedMode"), v = n.get("triggerEvent"), c = [];
      i.eachRawSeries(function(d) {
        !d.get("legendHoverLink") && c.push(d.id);
      }), Gh(n.getData(), function(d, p) {
        var m = this, g = d.get("name");
        if (!this.newlineDisabled && (g === "" || g === `
`)) {
          var y = new rs();
          y.newline = !0, l.add(y);
          return;
        }
        var _ = i.getSeriesByName(g)[0];
        if (!f.get(g))
          if (_) {
            var S = _.getData(), b = S.getVisual("legendLineStyle") || {}, x = S.getVisual("legendIcon"), w = S.getVisual("style"), D = this._createItem(_, g, p, d, n, e, b, w, x, h, a);
            D.on("click", Qn(zm, g, null, a, c)).on("mouseover", Qn(Uh, _.name, null, a, c)).on("mouseout", Qn(Wh, _.name, null, a, c)), i.ssr && D.eachChild(function(C) {
              var M = pt(C);
              M.seriesIndex = _.seriesIndex, M.dataIndex = p, M.ssrType = "legend";
            }), v && D.eachChild(function(C) {
              m.packEventData(C, n, _, p, g);
            }), f.set(g, !0);
          } else
            i.eachRawSeries(function(C) {
              var M = this;
              if (!f.get(g) && C.legendVisualProvider) {
                var A = C.legendVisualProvider;
                if (!A.containName(g))
                  return;
                var L = A.indexOfName(g), I = A.getItemVisual(L, "style"), P = A.getItemVisual(L, "legendIcon"), E = Ue(I.fill);
                E && E[3] === 0 && (E[3] = 0.2, I = B(B({}, I), {
                  fill: Ja(E, "rgba")
                }));
                var R = this._createItem(C, g, p, d, n, e, {}, I, P, h, a);
                R.on("click", Qn(zm, null, g, a, c)).on("mouseover", Qn(Uh, null, g, a, c)).on("mouseout", Qn(Wh, null, g, a, c)), i.ssr && R.eachChild(function(F) {
                  var G = pt(F);
                  G.seriesIndex = C.seriesIndex, G.dataIndex = p, G.ssrType = "legend";
                }), v && R.eachChild(function(F) {
                  M.packEventData(F, n, C, p, g);
                }), f.set(g, !0);
              }
            }, this);
      }, this), o && this._createSelector(o, n, a, s, u);
    }, t.prototype.packEventData = function(e, n, i, a, o) {
      var s = {
        componentType: "legend",
        componentIndex: n.componentIndex,
        dataIndex: a,
        value: o,
        seriesIndex: i.seriesIndex
      };
      pt(e).eventData = s;
    }, t.prototype._createSelector = function(e, n, i, a, o) {
      var s = this.getSelectorGroup();
      Gh(e, function(l) {
        var f = l.type, h = new Rt({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            i.dispatchAction({
              type: f === "all" ? "legendAllSelect" : "legendInverseSelect",
              legendId: n.id
            });
          }
        });
        s.add(h);
        var v = n.getModel("selectorLabel"), c = n.getModel(["emphasis", "selectorLabel"]);
        Av(h, {
          normal: v,
          emphasis: c
        }, {
          defaultText: l.title
        }), Gs(h);
      });
    }, t.prototype._createItem = function(e, n, i, a, o, s, u, l, f, h, v) {
      var c = e.visualDrawType, d = o.get("itemWidth"), p = o.get("itemHeight"), m = o.isSelected(n), g = a.get("symbolRotate"), y = a.get("symbolKeepAspect"), _ = a.get("icon");
      f = _ || f || "roundRect";
      var S = PE(f, a, u, l, c, m, v), b = new rs(), x = a.getModel("textStyle");
      if (Q(e.getLegendIcon) && (!_ || _ === "inherit"))
        b.add(e.getLegendIcon({
          itemWidth: d,
          itemHeight: p,
          icon: f,
          iconRotate: g,
          itemStyle: S.itemStyle,
          lineStyle: S.lineStyle,
          symbolKeepAspect: y
        }));
      else {
        var w = _ === "inherit" && e.getData().getVisual("symbol") ? g === "inherit" ? e.getData().getVisual("symbolRotate") : g : 0;
        b.add(RE({
          itemWidth: d,
          itemHeight: p,
          icon: f,
          iconRotate: w,
          itemStyle: S.itemStyle,
          symbolKeepAspect: y
        }));
      }
      var D = s === "left" ? d + 5 : -5, C = s, M = o.get("formatter"), A = n;
      V(M) && M ? A = M.replace("{name}", n ?? "") : Q(M) && (A = M(n));
      var L = m ? x.getTextColor() : a.get("inactiveColor");
      b.add(new Rt({
        style: hr(x, {
          text: A,
          x: D,
          y: p / 2,
          fill: L,
          align: C,
          verticalAlign: "middle"
        }, {
          inheritColor: L
        })
      }));
      var I = new St({
        shape: b.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), P = a.getModel("tooltip");
      return P.get("show") && oo({
        el: I,
        componentModel: o,
        itemName: n,
        itemTooltipOption: P.option
      }), b.add(I), b.eachChild(function(E) {
        E.silent = !0;
      }), I.silent = !h, this.getContentGroup().add(b), Gs(b), b.__legendDataIndex = i, b;
    }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
      var u = this.getContentGroup(), l = this.getSelectorGroup();
      vi(e.get("orient"), u, e.get("itemGap"), i.width, i.height);
      var f = u.getBoundingRect(), h = [-f.x, -f.y];
      if (l.markRedraw(), u.markRedraw(), o) {
        vi(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          l,
          e.get("selectorItemGap", !0)
        );
        var v = l.getBoundingRect(), c = [-v.x, -v.y], d = e.get("selectorButtonGap", !0), p = e.getOrient().index, m = p === 0 ? "width" : "height", g = p === 0 ? "height" : "width", y = p === 0 ? "y" : "x";
        s === "end" ? c[p] += f[m] + d : h[p] += v[m] + d, c[1 - p] += f[g] / 2 - v[g] / 2, l.x = c[0], l.y = c[1], u.x = h[0], u.y = h[1];
        var _ = {
          x: 0,
          y: 0
        };
        return _[m] = f[m] + d + v[m], _[g] = Math.max(f[g], v[g]), _[y] = Math.min(0, v[y] + c[1 - p]), _;
      } else
        return u.x = h[0], u.y = h[1], this.group.getBoundingRect();
    }, t.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, t.type = "legend.plain", t;
  })(le)
);
function PE(r, t, e, n, i, a, o) {
  function s(m, g) {
    m.lineWidth === "auto" && (m.lineWidth = g.lineWidth > 0 ? 2 : 0), Gh(m, function(y, _) {
      m[_] === "inherit" && (m[_] = g[_]);
    });
  }
  var u = t.getModel("itemStyle"), l = u.getItemStyle(), f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = u.getShallow("decal");
  l.decal = !h || h === "inherit" ? n.decal : yh(h, o), l.fill === "inherit" && (l.fill = n[i]), l.stroke === "inherit" && (l.stroke = n[f]), l.opacity === "inherit" && (l.opacity = (i === "fill" ? n : e).opacity), s(l, n);
  var v = t.getModel("lineStyle"), c = v.getLineStyle();
  if (s(c, e), l.fill === "auto" && (l.fill = n.fill), l.stroke === "auto" && (l.stroke = n.fill), c.stroke === "auto" && (c.stroke = n.fill), !a) {
    var d = t.get("inactiveBorderWidth"), p = l[f];
    l.lineWidth = d === "auto" ? n.lineWidth > 0 && p ? 2 : 0 : l.lineWidth, l.fill = t.get("inactiveColor"), l.stroke = t.get("inactiveBorderColor"), c.stroke = v.get("inactiveColor"), c.lineWidth = v.get("inactiveWidth");
  }
  return {
    itemStyle: l,
    lineStyle: c
  };
}
function RE(r) {
  var t = r.icon || "roundRect", e = Fr(t, 0, 0, r.itemWidth, r.itemHeight, r.itemStyle.fill, r.symbolKeepAspect);
  return e.setStyle(r.itemStyle), e.rotation = (r.iconRotate || 0) * Math.PI / 180, e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), t.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = O.color.neutral00, e.style.lineWidth = 2), e;
}
function zm(r, t, e, n) {
  Wh(r, t, e, n), e.dispatchAction({
    type: "legendToggleSelect",
    name: r ?? t
  }), Uh(r, t, e, n);
}
function Uh(r, t, e, n) {
  e.usingTHL() || e.dispatchAction({
    type: "highlight",
    seriesName: r,
    name: t,
    excludeSeriesId: n
  });
}
function Wh(r, t, e, n) {
  e.usingTHL() || e.dispatchAction({
    type: "downplay",
    seriesName: r,
    name: t,
    excludeSeriesId: n
  });
}
function ia(r, t, e) {
  var n = r === "allSelect" || r === "inverseSelect", i = {}, a = [];
  e.eachComponent({
    mainType: "legend",
    query: t
  }, function(s) {
    n ? s[r]() : s[r](t.name), Hm(s, i), a.push(s.componentIndex);
  });
  var o = {};
  return e.eachComponent("legend", function(s) {
    T(i, function(u, l) {
      s[u ? "select" : "unSelect"](l);
    }), Hm(s, o);
  }), n ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: t.name,
    selected: o
  };
}
function Hm(r, t) {
  var e = t || {};
  return T(r.getData(), function(n) {
    var i = n.get("name");
    if (!(i === `
` || i === "")) {
      var a = r.isSelected(i);
      ee(e, i) ? e[i] = e[i] && a : e[i] = a;
    }
  }), e;
}
function EE(r) {
  r.registerAction("legendToggleSelect", "legendselectchanged", ht(ia, "toggleSelected")), r.registerAction("legendAllSelect", "legendselectall", ht(ia, "allSelect")), r.registerAction("legendInverseSelect", "legendinverseselect", ht(ia, "inverseSelect")), r.registerAction("legendSelect", "legendselected", ht(ia, "select")), r.registerAction("legendUnSelect", "legendunselected", ht(ia, "unSelect"));
}
var OE = lv(kE);
function kE(r) {
  var t = r.findComponents({
    mainType: "legend"
  });
  t && t.length && r.filterSeries(function(e) {
    for (var n = 0; n < t.length; n++)
      if (!t[n].isSelected(e.name))
        return !1;
    return !0;
  });
}
function CS(r) {
  r.registerComponentModel(Vh), r.registerComponentView(TS), r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, OE), r.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), EE(r);
}
var BE = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.setScrollDataIndex = function(e) {
      this.option.scrollDataIndex = e;
    }, t.prototype.init = function(e, n, i) {
      var a = ki(e);
      r.prototype.init.call(this, e, n, i), Vm(this, e, a);
    }, t.prototype.mergeOption = function(e, n) {
      r.prototype.mergeOption.call(this, e, n), Vm(this, this.option, e);
    }, t.type = "legend.scroll", t.defaultOption = Lv(Vh.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: O.color.accent50,
      pageIconInactiveColor: O.color.accent10,
      pageIconSize: 15,
      pageTextStyle: {
        color: O.color.tertiary
      },
      animationDurationUpdate: 800
    }), t;
  })(Vh)
);
function Vm(r, t, e) {
  var n = r.getOrient(), i = [1, 1];
  i[n.index] = 0, Br(t, e, {
    type: "box",
    ignoreSize: !!i
  });
}
var Gm = Mt, cf = ["width", "height"], df = ["x", "y"], NE = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
    }
    return t.prototype.init = function() {
      r.prototype.init.call(this), this.group.add(this._containerGroup = new Gm()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new Gm());
    }, t.prototype.resetInner = function() {
      r.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, t.prototype.renderInner = function(e, n, i, a, o, s, u) {
      var l = this;
      r.prototype.renderInner.call(this, e, n, i, a, o, s, u);
      var f = this._controllerGroup, h = n.get("pageIconSize", !0), v = z(h) ? h : [h, h];
      d("pagePrev", 0);
      var c = n.getModel("pageTextStyle");
      f.add(new Rt({
        name: "pageText",
        style: {
          // Placeholder to calculate a proper layout.
          text: "xx/xx",
          fill: c.getTextColor(),
          font: c.getFont(),
          verticalAlign: "middle",
          align: "center"
        },
        silent: !0
      })), d("pageNext", 1);
      function d(p, m) {
        var g = p + "DataIndex", y = Pu(n.get("pageIcons", !0)[n.getOrient().name][m], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: K(l._pageGo, l, g, n, a)
        }, {
          x: -v[0] / 2,
          y: -v[1] / 2,
          width: v[0],
          height: v[1]
        });
        y.name = p, f.add(y);
      }
    }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
      var u = this.getSelectorGroup(), l = e.getOrient().index, f = cf[l], h = df[l], v = cf[1 - l], c = df[1 - l];
      o && vi(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        u,
        e.get("selectorItemGap", !0)
      );
      var d = e.get("selectorButtonGap", !0), p = u.getBoundingRect(), m = [-p.x, -p.y], g = tt(i);
      o && (g[f] = i[f] - p[f] - d);
      var y = this._layoutContentAndController(e, a, g, l, f, v, c, h);
      if (o) {
        if (s === "end")
          m[l] += y[f] + d;
        else {
          var _ = p[f] + d;
          m[l] -= _, y[h] -= _;
        }
        y[f] += p[f] + d, m[1 - l] += y[c] + y[v] / 2 - p[v] / 2, y[v] = Math.max(y[v], p[v]), y[c] = Math.min(y[c], p[c] + m[1 - l]), u.x = m[0], u.y = m[1], u.markRedraw();
      }
      return y;
    }, t.prototype._layoutContentAndController = function(e, n, i, a, o, s, u, l) {
      var f = this.getContentGroup(), h = this._containerGroup, v = this._controllerGroup;
      vi(e.get("orient"), f, e.get("itemGap"), a ? i.width : null, a ? null : i.height), vi(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        v,
        e.get("pageButtonItemGap", !0)
      );
      var c = f.getBoundingRect(), d = v.getBoundingRect(), p = this._showController = c[o] > i[o], m = [-c.x, -c.y];
      n || (m[a] = f[l]);
      var g = [0, 0], y = [-d.x, -d.y], _ = X(e.get("pageButtonGap", !0), e.get("itemGap", !0));
      if (p) {
        var S = e.get("pageButtonPosition", !0);
        S === "end" ? y[a] += i[o] - d[o] : g[a] += d[o] + _;
      }
      y[1 - a] += c[s] / 2 - d[s] / 2, f.setPosition(m), h.setPosition(g), v.setPosition(y);
      var b = {
        x: 0,
        y: 0
      };
      if (b[o] = p ? i[o] : c[o], b[s] = Math.max(c[s], d[s]), b[u] = Math.min(0, d[u] + y[1 - a]), h.__rectSize = i[o], p) {
        var x = {
          x: 0,
          y: 0
        };
        x[o] = Math.max(i[o] - d[o] - _, 0), x[s] = b[s], h.setClipPath(new St({
          shape: x
        })), h.__rectSize = x[o];
      } else
        v.eachChild(function(D) {
          D.attr({
            invisible: !0,
            silent: !0
          });
        });
      var w = this._getPageInfo(e);
      return w.pageIndex != null && kr(
        f,
        {
          x: w.contentPosition[0],
          y: w.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        p ? e : null
      ), this._updatePageInfoView(e, w), b;
    }, t.prototype._pageGo = function(e, n, i) {
      var a = this._getPageInfo(n)[e];
      a != null && i.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: a,
        legendId: n.id
      });
    }, t.prototype._updatePageInfoView = function(e, n) {
      var i = this._controllerGroup;
      T(["pagePrev", "pageNext"], function(f) {
        var h = f + "DataIndex", v = n[h] != null, c = i.childOfName(f);
        c && (c.setStyle("fill", v ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), c.cursor = v ? "pointer" : "default");
      });
      var a = i.childOfName("pageText"), o = e.get("pageFormatter"), s = n.pageIndex, u = s != null ? s + 1 : 0, l = n.pageCount;
      a && o && a.setStyle("text", V(o) ? o.replace("{current}", u == null ? "" : u + "").replace("{total}", l == null ? "" : l + "") : o({
        current: u,
        total: l
      }));
    }, t.prototype._getPageInfo = function(e) {
      var n = e.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, o = e.getOrient().index, s = cf[o], u = df[o], l = this._findTargetItemIndex(n), f = i.children(), h = f[l], v = f.length, c = v ? 1 : 0, d = {
        contentPosition: [i.x, i.y],
        pageCount: c,
        pageIndex: c - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!h)
        return d;
      var p = S(h);
      d.contentPosition[o] = -p.s;
      for (var m = l + 1, g = p, y = p, _ = null; m <= v; ++m)
        _ = S(f[m]), // Half of the last item is out of the window.
        (!_ && y.e > g.s + a || _ && !b(_, g.s)) && (y.i > g.i ? g = y : g = _, g && (d.pageNextDataIndex == null && (d.pageNextDataIndex = g.i), ++d.pageCount)), y = _;
      for (var m = l - 1, g = p, y = p, _ = null; m >= -1; --m)
        _ = S(f[m]), // If the the end item does not intersect with the window started
        // from the current item, a page can be settled.
        (!_ || !b(y, _.s)) && g.i < y.i && (y = g, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = g.i), ++d.pageCount, ++d.pageIndex), g = _;
      return d;
      function S(x) {
        if (x) {
          var w = x.getBoundingRect(), D = w[u] + x[u];
          return {
            s: D,
            e: D + w[s],
            i: x.__legendDataIndex
          };
        }
      }
      function b(x, w) {
        return x.e >= w && x.s <= w + a;
      }
    }, t.prototype._findTargetItemIndex = function(e) {
      if (!this._showController)
        return 0;
      var n, i = this.getContentGroup(), a;
      return i.eachChild(function(o, s) {
        var u = o.__legendDataIndex;
        a == null && u != null && (a = s), u === e && (n = s);
      }), n ?? a;
    }, t.type = "legend.scroll", t;
  })(TS)
);
function FE(r) {
  r.registerAction("legendScroll", "legendscroll", function(t, e) {
    var n = t.scrollDataIndex;
    n != null && e.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: t
    }, function(i) {
      i.setScrollDataIndex(n);
    });
  });
}
function zE(r) {
  Le(CS), r.registerComponentModel(BE), r.registerComponentView(NE), FE(r);
}
function HE(r) {
  Le(CS), Le(zE);
}
var VE = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "dataZoom.inside", t.defaultOption = Lv($a.defaultOption, {
      disabled: !1,
      zoomLock: !1,
      zoomOnMouseWheel: !0,
      moveOnMouseMove: !0,
      moveOnMouseWheel: !1,
      preventDefaultMouseMove: !0
    }), t;
  })($a)
), Tc = vt();
function GE(r, t, e) {
  Tc(r).coordSysRecordMap.each(function(n) {
    var i = n.dataZoomInfoMap.get(t.uid);
    i && (i.getRange = e);
  });
}
function UE(r, t) {
  for (var e = Tc(r).coordSysRecordMap, n = e.keys(), i = 0; i < n.length; i++) {
    var a = n[i], o = e.get(a), s = o.dataZoomInfoMap;
    if (s) {
      var u = t.uid, l = s.get(u);
      l && (s.removeKey(u), s.keys().length || MS(e, o));
    }
  }
}
function MS(r, t) {
  if (t) {
    r.removeKey(t.model.uid);
    var e = t.controller;
    e && e.dispose();
  }
}
function WE(r, t) {
  var e = {
    model: t,
    containsPoint: ht(ZE, t),
    dispatchAction: ht(YE, r),
    dataZoomInfoMap: null,
    controller: null
  }, n = e.controller = new yP(r.getZr());
  return T(["pan", "zoom", "scrollMove"], function(i) {
    n.on(i, function(a) {
      var o = [];
      e.dataZoomInfoMap.each(function(s) {
        if (a.isAvailableBehavior(s.model.option)) {
          var u = (s.getRange || {})[i], l = u && u(s.dzReferCoordSysInfo, e.model.mainType, e.controller, a);
          !s.model.get("disabled", !0) && l && o.push({
            dataZoomId: s.model.id,
            start: l[0],
            end: l[1]
          });
        }
      }), o.length && e.dispatchAction(o);
    });
  }), e;
}
function YE(r, t) {
  r.isDisposed() || r.dispatchAction({
    type: "dataZoom",
    animation: {
      easing: "cubicOut",
      duration: 100
    },
    batch: t
  });
}
function ZE(r, t, e, n) {
  return r.coordinateSystem.containPoint([e, n]);
}
function XE(r, t, e) {
  var n, i = "type_", a = {
    type_true: 2,
    type_move: 1,
    type_false: 0,
    type_undefined: -1
  }, o = !0, s, u;
  return r.each(function(l) {
    var f = l.model, h = f.get("disabled", !0) ? !1 : f.get("zoomLock", !0) ? "move" : !0;
    a[i + h] > a[i + n] && (n = h), o = o && f.get("preventDefaultMouseMove", !0), s = X(f.get("cursorGrab", !0), s), u = X(f.get("cursorGrabbing", !0), u);
  }), {
    controlType: n,
    opt: {
      // RoamController will enable all of these functionalities,
      // and the final behavior is determined by its event listener
      // provided by each inside zoom.
      zoomOnMouseWheel: !0,
      moveOnMouseMove: !0,
      moveOnMouseWheel: !0,
      preventDefaultMouseMove: !!o,
      api: e,
      zInfo: {
        component: t.model
      },
      triggerInfo: {
        roamTrigger: null,
        isInSelf: t.containsPoint
      },
      cursorGrab: s,
      cursorGrabbing: u
    }
  };
}
function $E(r) {
  r.registerUpdateLifecycle("coordsys:aftercreate", function(t, e) {
    var n = Tc(e), i = n.coordSysRecordMap || (n.coordSysRecordMap = Y());
    i.each(function(a) {
      a.dataZoomInfoMap = null;
    }), t.eachComponent({
      mainType: "dataZoom",
      subType: "inside"
    }, function(a) {
      var o = hS(a);
      T(o.infoList, function(s) {
        var u = s.model.uid, l = i.get(u) || i.set(u, WE(e, s.model)), f = l.dataZoomInfoMap || (l.dataZoomInfoMap = Y());
        f.set(a.uid, {
          dzReferCoordSysInfo: s,
          model: a,
          getRange: null
        });
      });
    }), i.each(function(a) {
      var o = a.controller, s, u = a.dataZoomInfoMap;
      if (u) {
        var l = u.keys()[0];
        l != null && (s = u.get(l));
      }
      if (!s) {
        MS(i, a);
        return;
      }
      var f = XE(u, a, e);
      o.enable(f.controlType, f.opt), Nu(a, "dispatchAction", s.model.get("throttle", !0), "fixRate");
    });
  });
}
var qE = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "dataZoom.inside", e;
    }
    return t.prototype.render = function(e, n, i) {
      if (r.prototype.render.apply(this, arguments), e.noTarget()) {
        this._clear();
        return;
      }
      this.range = e.getPercentRange(), GE(i, e, {
        pan: K(pf.pan, this),
        zoom: K(pf.zoom, this),
        scrollMove: K(pf.scrollMove, this)
      });
    }, t.prototype.dispose = function() {
      this._clear(), r.prototype.dispose.apply(this, arguments);
    }, t.prototype._clear = function() {
      UE(this.api, this.dataZoomModel), this.range = null;
    }, t.type = "dataZoom.inside", t;
  })(_c)
), pf = {
  zoom: function(r, t, e, n) {
    var i = this.range, a = i.slice(), o = r.axisModels[0];
    if (o) {
      var s = gf[t](null, [n.originX, n.originY], o, e, r), u = (s.signal > 0 ? s.pixelStart + s.pixelLength - s.pixel : s.pixel - s.pixelStart) / s.pixelLength * (a[1] - a[0]) + a[0], l = Math.max(1 / n.scale, 0);
      a[0] = (a[0] - u) * l + u, a[1] = (a[1] - u) * l + u;
      var f = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
      if (Di(0, a, [0, 100], 0, f.minSpan, f.maxSpan), this.range = a, i[0] !== a[0] || i[1] !== a[1])
        return a;
    }
  },
  pan: Um(function(r, t, e, n, i, a) {
    var o = gf[n]([a.oldX, a.oldY], [a.newX, a.newY], t, i, e);
    return o.signal * (r[1] - r[0]) * o.pixel / o.pixelLength;
  }),
  scrollMove: Um(function(r, t, e, n, i, a) {
    var o = gf[n]([0, 0], [a.scrollDelta, a.scrollDelta], t, i, e);
    return o.signal * (r[1] - r[0]) * a.scrollDelta;
  })
};
function Um(r) {
  return function(t, e, n, i) {
    var a = this.range, o = a.slice(), s = t.axisModels[0];
    if (s) {
      var u = r(o, s, t, e, n, i);
      if (Di(u, o, [0, 100], "all"), this.range = o, a[0] !== o[0] || a[1] !== o[1])
        return o;
    }
  };
}
var gf = {
  grid: function(r, t, e, n, i) {
    var a = e.axis, o = {}, s = i.model.coordinateSystem.getRect();
    return r = r || [0, 0], a.dim === "x" ? (o.pixel = t[0] - r[0], o.pixelLength = s.width, o.pixelStart = s.x, o.signal = a.inverse ? 1 : -1) : (o.pixel = t[1] - r[1], o.pixelLength = s.height, o.pixelStart = s.y, o.signal = a.inverse ? -1 : 1), o;
  },
  polar: function(r, t, e, n, i) {
    var a = e.axis, o = {}, s = i.model.coordinateSystem, u = s.getRadiusAxis().getExtent(), l = s.getAngleAxis().getExtent();
    return r = r ? s.pointToCoord(r) : [0, 0], t = s.pointToCoord(t), e.mainType === "radiusAxis" ? (o.pixel = t[0] - r[0], o.pixelLength = u[1] - u[0], o.pixelStart = u[0], o.signal = a.inverse ? 1 : -1) : (o.pixel = t[1] - r[1], o.pixelLength = l[1] - l[0], o.pixelStart = l[0], o.signal = a.inverse ? -1 : 1), o;
  },
  singleAxis: function(r, t, e, n, i) {
    var a = e.axis, o = i.model.coordinateSystem.getRect(), s = {};
    return r = r || [0, 0], a.orient === "horizontal" ? (s.pixel = t[0] - r[0], s.pixelLength = o.width, s.pixelStart = o.x, s.signal = a.inverse ? 1 : -1) : (s.pixel = t[1] - r[1], s.pixelLength = o.height, s.pixelStart = o.y, s.signal = a.inverse ? -1 : 1), s;
  }
};
function KE(r) {
  Sc(r), r.registerComponentModel(VE), r.registerComponentView(qE), $E(r);
}
var QE = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "dataZoom.slider", t.layoutMode = "box", t.defaultOption = Lv($a.defaultOption, {
      show: !0,
      // deault value can only be drived in view stage.
      right: "ph",
      top: "ph",
      width: "ph",
      height: "ph",
      left: null,
      bottom: null,
      borderColor: O.color.accent10,
      borderRadius: 0,
      backgroundColor: O.color.transparent,
      // dataBackgroundColor: '#ddd',
      dataBackground: {
        lineStyle: {
          color: O.color.accent30,
          width: 0.5
        },
        areaStyle: {
          color: O.color.accent20,
          opacity: 0.2
        }
      },
      selectedDataBackground: {
        lineStyle: {
          color: O.color.accent40,
          width: 0.5
        },
        areaStyle: {
          color: O.color.accent20,
          opacity: 0.3
        }
      },
      // Color of selected window.
      fillerColor: "rgba(135,175,274,0.2)",
      handleIcon: "path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z",
      // Percent of the slider height
      handleSize: "100%",
      handleStyle: {
        color: O.color.neutral00,
        borderColor: O.color.accent20
      },
      moveHandleSize: 7,
      moveHandleIcon: "path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z",
      moveHandleStyle: {
        color: O.color.accent40,
        opacity: 0.5
      },
      showDetail: !0,
      showDataShadow: "auto",
      realtime: !0,
      zoomLock: !1,
      textStyle: {
        color: O.color.tertiary
      },
      brushSelect: !0,
      brushStyle: {
        color: O.color.accent30,
        opacity: 0.3
      },
      emphasis: {
        handleLabel: {
          show: !0
        },
        handleStyle: {
          borderColor: O.color.accent40
        },
        moveHandleStyle: {
          opacity: 0.8
        }
      },
      defaultLocationEdgeGap: 15
    }), t;
  })($a)
), aa = St, JE = 1, mf = 30, jE = 7, oa = "horizontal", Wm = "vertical", tO = 5, eO = ["line", "bar", "candlestick", "scatter"], rO = {
  easing: "cubicOut",
  duration: 100,
  delay: 0
}, nO = (
  /** @class */
  (function(r) {
    k(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e._displayables = {}, e;
    }
    return t.prototype.init = function(e, n) {
      this.api = n, this._onBrush = K(this._onBrush, this), this._onBrushEnd = K(this._onBrushEnd, this);
    }, t.prototype.render = function(e, n, i, a) {
      if (r.prototype.render.apply(this, arguments), Nu(this, "_dispatchZoomAction", e.get("throttle"), "fixRate"), this._orient = e.getOrient(), e.get("show") === !1) {
        this.group.removeAll();
        return;
      }
      if (e.noTarget()) {
        this._clear(), this.group.removeAll();
        return;
      }
      (!a || a.type !== "dataZoom" || a.from !== this.uid) && this._buildView(), this._updateView();
    }, t.prototype.dispose = function() {
      this._clear(), r.prototype.dispose.apply(this, arguments);
    }, t.prototype._clear = function() {
      $s(this, "_dispatchZoomAction");
      var e = this.api.getZr();
      e.off("mousemove", this._onBrush), e.off("mouseup", this._onBrushEnd);
    }, t.prototype._buildView = function() {
      var e = this.group;
      e.removeAll(), this._brushing = !1, this._displayables.brushRect = null, this._resetLocation(), this._resetInterval();
      var n = this._displayables.sliderGroup = new Mt();
      this._renderBackground(), this._renderHandle(), this._renderDataShadow(), e.add(n), this._positionGroup();
    }, t.prototype._resetLocation = function() {
      var e = this.dataZoomModel, n = this.api, i = e.get("brushSelect"), a = i ? jE : 0, o = uo(e, n).refContainer, s = this._findCoordRect(), u = e.get("defaultLocationEdgeGap", !0) || 0, l = this._orient === oa ? {
        // Why using 'right', because right should be used in vertical,
        // and it is better to be consistent for dealing with position param merge.
        right: o.width - s.x - s.width,
        top: o.height - mf - u - a,
        width: s.width,
        height: mf
      } : {
        right: u,
        top: s.y,
        width: mf,
        height: s.height
      }, f = ki(e.option);
      T(["right", "top", "width", "height"], function(v) {
        f[v] === "ph" && (f[v] = l[v]);
      });
      var h = vr(f, o);
      this._location = {
        x: h.x,
        y: h.y
      }, this._size = [h.width, h.height], this._orient === Wm && this._size.reverse();
    }, t.prototype._positionGroup = function() {
      var e = this.group, n = this._location, i = this._orient, a = this.dataZoomModel.getFirstTargetAxisModel(), o = a && a.get("inverse"), s = this._displayables.sliderGroup, u = (this._dataShadowInfo || {}).otherAxisInverse;
      s.attr(i === oa && !o ? {
        scaleY: u ? 1 : -1,
        scaleX: 1
      } : i === oa && o ? {
        scaleY: u ? 1 : -1,
        scaleX: -1
      } : i === Wm && !o ? {
        scaleY: u ? -1 : 1,
        scaleX: 1,
        rotation: Math.PI / 2
      } : {
        scaleY: u ? -1 : 1,
        scaleX: -1,
        rotation: Math.PI / 2
      });
      var l = e.getBoundingRect([s]), f = isNaN(l.x) ? 0 : l.x, h = isNaN(l.y) ? 0 : l.y;
      e.x = n.x - f, e.y = n.y - h, e.markRedraw();
    }, t.prototype._getViewExtent = function() {
      return [0, this._size[0]];
    }, t.prototype._renderBackground = function() {
      var e = this.dataZoomModel, n = this._size, i = this._displayables.sliderGroup, a = e.get("brushSelect");
      i.add(new aa({
        silent: !0,
        shape: {
          x: 0,
          y: 0,
          width: n[0],
          height: n[1]
        },
        style: {
          fill: e.get("backgroundColor")
        },
        z2: -40
      }));
      var o = new aa({
        shape: {
          x: 0,
          y: 0,
          width: n[0],
          height: n[1]
        },
        style: {
          fill: "transparent"
        },
        z2: 0,
        onclick: K(this._onClickPanel, this)
      }), s = this.api.getZr();
      a ? (o.on("mousedown", this._onBrushStart, this), o.cursor = "crosshair", s.on("mousemove", this._onBrush), s.on("mouseup", this._onBrushEnd)) : (s.off("mousemove", this._onBrush), s.off("mouseup", this._onBrushEnd)), i.add(o);
    }, t.prototype._renderDataShadow = function() {
      var e = this._dataShadowInfo = this._prepareDataShadowInfo();
      if (this._displayables.dataShadowSegs = [], !e)
        return;
      var n = this._size, i = this._shadowSize || [], a = e.series, o = a.getRawData(), s = a.getShadowDim && a.getShadowDim(), u = s && o.getDimensionInfo(s) ? a.getShadowDim() : e.otherDim;
      if (u == null)
        return;
      var l = this._shadowPolygonPts, f = this._shadowPolylinePts;
      if (o !== this._shadowData || u !== this._shadowDim || n[0] !== i[0] || n[1] !== i[1]) {
        var h = o.getDataExtent(e.thisDim), v = o.getDataExtent(u), c = (v[1] - v[0]) * 0.3;
        v = [v[0] - c, v[1] + c];
        var d = [0, n[1]], p = [0, n[0]], m = [[n[0], 0], [0, 0]], g = [], y = p[1] / Math.max(1, o.count() - 1), _ = n[0] / (h[1] - h[0]), S = e.thisAxis.type === "time", b = -y, x = Math.round(o.count() / n[0]), w;
        o.each([e.thisDim, u], function(L, I, P) {
          if (x > 0 && P % x) {
            S || (b += y);
            return;
          }
          b = S ? (+L - h[0]) * _ : b + y;
          var E = I == null || isNaN(I) || I === "", R = E ? 0 : It(I, v, d, !0);
          E && !w && P ? (m.push([m[m.length - 1][0], 0]), g.push([g[g.length - 1][0], 0])) : !E && w && (m.push([b, 0]), g.push([b, 0])), E || (m.push([b, R]), g.push([b, R])), w = E;
        }), l = this._shadowPolygonPts = m, f = this._shadowPolylinePts = g;
      }
      this._shadowData = o, this._shadowDim = u, this._shadowSize = [n[0], n[1]];
      var D = this.dataZoomModel;
      function C(L) {
        var I = D.getModel(L ? "selectedDataBackground" : "dataBackground"), P = new Mt(), E = new no({
          shape: {
            points: l
          },
          segmentIgnoreThreshold: 1,
          style: I.getModel("areaStyle").getAreaStyle(),
          silent: !0,
          z2: -20
        }), R = new io({
          shape: {
            points: f
          },
          segmentIgnoreThreshold: 1,
          style: I.getModel("lineStyle").getLineStyle(),
          silent: !0,
          z2: -19
        });
        return P.add(E), P.add(R), P;
      }
      for (var M = 0; M < 3; M++) {
        var A = C(M === 1);
        this._displayables.sliderGroup.add(A), this._displayables.dataShadowSegs.push(A);
      }
    }, t.prototype._prepareDataShadowInfo = function() {
      var e = this.dataZoomModel, n = e.get("showDataShadow");
      if (n !== !1) {
        var i, a = this.ecModel;
        return e.eachTargetAxis(function(o, s) {
          var u = e.getAxisProxy(o, s).getTargetSeriesModels();
          T(u, function(l) {
            if (!i && !(n !== !0 && ot(eO, l.get("type")) < 0)) {
              var f = a.getComponent(Ar(o), s).axis, h = iO(o), v, c = l.coordinateSystem;
              h != null && c.getOtherAxis && (v = c.getOtherAxis(f).inverse), h = l.getData().mapDimension(h);
              var d = l.getData().mapDimension(o);
              i = {
                thisAxis: f,
                series: l,
                thisDim: d,
                otherDim: h,
                otherAxisInverse: v
              };
            }
          }, this);
        }, this), i;
      }
    }, t.prototype._renderHandle = function() {
      var e = this.group, n = this._displayables, i = n.handles = [null, null], a = n.handleLabels = [null, null], o = this._displayables.sliderGroup, s = this._size, u = this.dataZoomModel, l = this.api, f = u.get("borderRadius") || 0, h = u.get("brushSelect"), v = n.filler = new aa({
        silent: h,
        style: {
          fill: u.get("fillerColor")
        },
        textConfig: {
          position: "inside"
        }
      });
      o.add(v), o.add(new aa({
        silent: !0,
        subPixelOptimize: !0,
        shape: {
          x: 0,
          y: 0,
          width: s[0],
          height: s[1],
          r: f
        },
        style: {
          // deprecated option
          stroke: u.get("dataBackgroundColor") || u.get("borderColor"),
          lineWidth: JE,
          fill: O.color.transparent
        }
      })), T([0, 1], function(_) {
        var S = u.get("handleIcon");
        !Ks[S] && S.indexOf("path://") < 0 && S.indexOf("image://") < 0 && (S = "path://" + S);
        var b = Fr(S, -1, 0, 2, 2, null, !0);
        b.attr({
          cursor: aO(this._orient),
          draggable: !0,
          drift: K(this._onDragMove, this, _),
          ondragend: K(this._onDragEnd, this),
          onmouseover: K(this._onOverDataInfoTriggerArea, this, !0),
          onmouseout: K(this._onOverDataInfoTriggerArea, this, !1),
          z2: 5
        });
        var x = b.getBoundingRect(), w = u.get("handleSize");
        this._handleHeight = ye(w, this._size[1]), this._handleWidth = x.width / x.height * this._handleHeight, b.setStyle(u.getModel("handleStyle").getItemStyle()), b.style.strokeNoScale = !0, b.rectHover = !0, b.ensureState("emphasis").style = u.getModel(["emphasis", "handleStyle"]).getItemStyle(), Gs(b);
        var D = u.get("handleColor");
        D != null && (b.style.fill = D), o.add(i[_] = b);
        var C = u.getModel("textStyle"), M = u.get("handleLabel") || {}, A = M.show || !1;
        e.add(a[_] = new Rt({
          silent: !0,
          invisible: !A,
          style: hr(C, {
            x: 0,
            y: 0,
            text: "",
            verticalAlign: "middle",
            align: "center",
            fill: C.getTextColor(),
            font: C.getFont()
          }),
          z2: 10
        }));
      }, this);
      var c = v;
      if (h) {
        var d = ye(u.get("moveHandleSize"), s[1]), p = n.moveHandle = new St({
          style: u.getModel("moveHandleStyle").getItemStyle(),
          silent: !0,
          shape: {
            r: [0, 0, 2, 2],
            y: s[1] - 0.5,
            height: d
          }
        }), m = d * 0.8, g = n.moveHandleIcon = Fr(u.get("moveHandleIcon"), -m / 2, -m / 2, m, m, O.color.neutral00, !0);
        g.silent = !0, g.y = s[1] + d / 2 - 0.5, p.ensureState("emphasis").style = u.getModel(["emphasis", "moveHandleStyle"]).getItemStyle();
        var y = Math.min(s[1] / 2, Math.max(d, 10));
        c = n.moveZone = new St({
          invisible: !0,
          shape: {
            y: s[1] - y,
            height: d + y
          }
        }), c.on("mouseover", function() {
          l.enterEmphasis(p);
        }).on("mouseout", function() {
          l.leaveEmphasis(p);
        }), o.add(p), o.add(g), o.add(c);
      }
      c.attr({
        draggable: !0,
        cursor: "grab",
        drift: K(this._onActualMoveZoneDrift, this),
        ondragstart: K(this._onActualMoveZoneDragStart, this),
        ondragend: K(this._onActualMoveZoneDragEnd, this),
        onmouseover: K(this._onOverDataInfoTriggerArea, this, !0),
        onmouseout: K(this._onOverDataInfoTriggerArea, this, !1)
      });
    }, t.prototype._resetInterval = function() {
      var e = this._range = this.dataZoomModel.getPercentRange(), n = this._getViewExtent();
      this._handleEnds = [It(e[0], [0, 100], n, !0), It(e[1], [0, 100], n, !0)];
    }, t.prototype._updateInterval = function(e, n) {
      var i = this.dataZoomModel, a = this._handleEnds, o = this._getViewExtent(), s = i.findRepresentativeAxisProxy().getMinMaxSpan(), u = [0, 100];
      Di(n, a, o, i.get("zoomLock") ? "all" : e, s.minSpan != null ? It(s.minSpan, u, o, !0) : null, s.maxSpan != null ? It(s.maxSpan, u, o, !0) : null);
      var l = this._range, f = this._range = Cr([It(a[0], o, u, !0), It(a[1], o, u, !0)]);
      return !l || l[0] !== f[0] || l[1] !== f[1];
    }, t.prototype._updateView = function(e) {
      var n = this._displayables, i = this._handleEnds, a = Cr(i.slice()), o = this._size;
      T([0, 1], function(c) {
        var d = n.handles[c], p = this._handleHeight;
        d.attr({
          scaleX: p / 2,
          scaleY: p / 2,
          // This is a trick, by adding an extra tiny offset to let the default handle's end point align to the drag window.
          // NOTE: It may affect some custom shapes a bit. But we prefer to have better result by default.
          x: i[c] + (c ? -1 : 1),
          y: o[1] / 2 - p / 2
        });
      }, this), n.filler.setShape({
        x: a[0],
        y: 0,
        width: a[1] - a[0],
        height: o[1]
      });
      var s = {
        x: a[0],
        width: a[1] - a[0]
      };
      n.moveHandle && (n.moveHandle.setShape(s), n.moveZone.setShape(s), n.moveZone.getBoundingRect(), n.moveHandleIcon && n.moveHandleIcon.attr("x", s.x + s.width / 2));
      for (var u = n.dataShadowSegs, l = [0, a[0], a[1], o[0]], f = 0; f < u.length; f++) {
        var h = u[f], v = h.getClipPath();
        v || (v = new St(), h.setClipPath(v)), v.setShape({
          x: l[f],
          y: 0,
          width: l[f + 1] - l[f],
          height: o[1]
        });
      }
      this._updateDataInfo(e);
    }, t.prototype._updateDataInfo = function(e) {
      var n = this.dataZoomModel, i = this._displayables, a = i.handleLabels, o = this._orient, s = ["", ""];
      if (n.get("showDetail")) {
        var u = n.findRepresentativeAxisProxy(), l = u.getAxisModel().axis.scale;
        if (u) {
          var f = this._range, h;
          if (e) {
            var v = {
              start: f[0],
              end: f[1]
            }, c = cS(n, u);
            if (c) {
              var d = c.calculateDataWindow(v).percentInverted;
              v = {
                start: d[0],
                end: d[1]
              };
            }
            h = u.calculateDataWindow(v);
          } else
            h = u.getWindow();
          s = [Ym(n, 0, h, l), Ym(n, 1, h, l)];
        }
      }
      var p = Cr(this._handleEnds.slice());
      m.call(this, 0), m.call(this, 1);
      function m(g) {
        var y = wv(i.handles[g].parent, this.group), _ = Tv(g === 0 ? "right" : "left", y), S = this._handleWidth / 2 + tO, b = ka([p[g] + (g === 0 ? -S : S), this._size[1] / 2], y);
        a[g].setStyle({
          x: b[0],
          y: b[1],
          verticalAlign: o === oa ? "middle" : _,
          align: o === oa ? _ : "center",
          text: s[g]
        });
      }
    }, t.prototype._onOverDataInfoTriggerArea = function(e) {
      this._isOverDataInfoTriggerArea = e, this._showDataInfo(e);
    }, t.prototype._showDataInfo = function(e) {
      var n = this.dataZoomModel.get("handleLabel") || {}, i = n.show || !1, a = this.dataZoomModel.getModel(["emphasis", "handleLabel"]), o = a.get("show") || !1, s = e || this._dragging ? o : i, u = this._displayables, l = u.handleLabels;
      l[0].attr("invisible", !s), l[1].attr("invisible", !s), u.moveHandle && this.api[s ? "enterEmphasis" : "leaveEmphasis"](u.moveHandle, 1);
    }, t.prototype._onActualMoveZoneDrift = function(e, n, i) {
      this.api.getZr().setCursorStyle("grabbing"), this._onDragMove("all", e, n, i);
    }, t.prototype._onActualMoveZoneDragStart = function(e) {
      e.target.attr("cursor", "grabbing"), this._showDataInfo(!0);
    }, t.prototype._onActualMoveZoneDragEnd = function(e) {
      e.target.attr("cursor", "grab"), this._onDragEnd();
    }, t.prototype._onDragMove = function(e, n, i, a) {
      this._dragging = !0, gi(a.event);
      var o = this._displayables.sliderGroup.getLocalTransform(), s = ka([n, i], o, !0), u = this._updateInterval(e, s[0]), l = this.dataZoomModel.get("realtime");
      this._updateView(!l), u && l && this._dispatchZoomAction(!0);
    }, t.prototype._onDragEnd = function() {
      this._dragging = !1, this._isOverDataInfoTriggerArea || this._showDataInfo(!1);
      var e = this.dataZoomModel.get("realtime");
      !e && this._dispatchZoomAction(!1);
    }, t.prototype._onClickPanel = function(e) {
      var n = this._size, i = this._displayables.sliderGroup.transformCoordToLocal(e.offsetX, e.offsetY);
      if (!(i[0] < 0 || i[0] > n[0] || i[1] < 0 || i[1] > n[1])) {
        var a = this._handleEnds, o = (a[0] + a[1]) / 2, s = this._updateInterval("all", i[0] - o);
        this._updateView(), s && this._dispatchZoomAction(!1);
      }
    }, t.prototype._onBrushStart = function(e) {
      var n = e.offsetX, i = e.offsetY;
      this._brushStart = new mt(n, i), this._brushing = !0, this._brushStartTime = +/* @__PURE__ */ new Date();
    }, t.prototype._onBrushEnd = function(e) {
      if (this._brushing) {
        var n = this._displayables.brushRect;
        if (this._brushing = !1, !!n) {
          n.attr("ignore", !0);
          var i = n.shape, a = +/* @__PURE__ */ new Date();
          if (!(a - this._brushStartTime < 200 && Math.abs(i.width) < 5)) {
            var o = this._getViewExtent(), s = [0, 100], u = this._handleEnds = [i.x, i.x + i.width], l = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
            Di(0, u, o, 0, l.minSpan != null ? It(l.minSpan, s, o, !0) : null, l.maxSpan != null ? It(l.maxSpan, s, o, !0) : null), this._range = Cr([It(u[0], o, s, !0), It(u[1], o, s, !0)]), this._updateView(), this._dispatchZoomAction(!1);
          }
        }
      }
    }, t.prototype._onBrush = function(e) {
      this._brushing && (gi(e.event), this._updateBrushRect(e.offsetX, e.offsetY));
    }, t.prototype._updateBrushRect = function(e, n) {
      var i = this._displayables, a = this.dataZoomModel, o = i.brushRect;
      o || (o = i.brushRect = new aa({
        silent: !0,
        style: a.getModel("brushStyle").getItemStyle()
      }), i.sliderGroup.add(o)), o.attr("ignore", !1);
      var s = this._brushStart, u = this._displayables.sliderGroup, l = u.transformCoordToLocal(e, n), f = u.transformCoordToLocal(s.x, s.y), h = this._size;
      l[0] = Math.max(Math.min(h[0], l[0]), 0), o.setShape({
        x: f[0],
        y: 0,
        width: l[0] - f[0],
        height: h[1]
      });
    }, t.prototype._dispatchZoomAction = function(e) {
      var n = this._range;
      this.api.dispatchAction({
        type: "dataZoom",
        from: this.uid,
        dataZoomId: this.dataZoomModel.id,
        animation: e ? rO : null,
        start: n[0],
        end: n[1]
      });
    }, t.prototype._findCoordRect = function() {
      var e, n = hS(this.dataZoomModel).infoList;
      if (!e && n.length) {
        var i = n[0].model.coordinateSystem;
        e = i.getRect && i.getRect();
      }
      if (!e) {
        var a = this.api.getWidth(), o = this.api.getHeight();
        e = {
          x: a * 0.2,
          y: o * 0.2,
          width: a * 0.6,
          height: o * 0.6
        };
      }
      return e;
    }, t.type = "dataZoom.slider", t;
  })(_c)
);
function Ym(r, t, e, n) {
  var i = r.get("labelFormatter"), a = r.get("labelPrecision");
  (a == null || a === "auto") && (a = e.valuePrecision);
  var o = e.value[t], s = o == null || isNaN(o) ? "" : Ce(n) || fo(n) ? n.getLabel({
    value: Math.round(o)
  }) : isFinite(a) ? st(o, a, !0) : o + "";
  return Q(i) ? i(o, s) : V(i) ? i.replace("{value}", s) : s;
}
function iO(r) {
  var t = {
    x: "y",
    y: "x",
    radius: "angle",
    angle: "radius"
  };
  return t[r];
}
function aO(r) {
  return r === "vertical" ? "ns-resize" : "ew-resize";
}
function oO(r) {
  r.registerComponentModel(QE), r.registerComponentView(nO), Sc(r);
}
function sO(r) {
  Le(KE), Le(oO);
}
function Zm(r, t, e) {
  var n = ue.createCanvas(), i = t.getWidth(), a = t.getHeight(), o = n.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", r)), n.width = i * e, n.height = a * e, n;
}
function yf(r) {
  return !r.__cursors.get(g0);
}
function Xm(r) {
  var t = r.__cursors.get(g0);
  return {
    startIdx: t ? t.startIdx : 0,
    endIdx: t ? t.endIdx : 0
  };
}
var DS = (function(r) {
  k(t, r);
  function t(e, n, i) {
    var a = r.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.zlevel = 0, a.zlevel2 = ds, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__prevIdx = { startIdx: 0, endIdx: 0 };
    var o;
    i = i || ks, typeof e == "string" ? o = Zm(e, n, i) : Z(e) && (o = e, e = o.id), a.id = e, a.dom = o;
    var s = o.style;
    return s && (ey(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = n, a.dpr = i, a;
  }
  return t.prototype.afterBrush = function() {
    this.__prevIdx = Xm(this);
  }, t.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, t.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, t.prototype.createBackBuffer = function() {
    var e = this.dpr;
    this.domBack = Zm("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
  }, t.prototype.createRepaintRects = function(e, n, i, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, u = !1, l = new j(0, 0, 0, 0);
    function f(S) {
      if (!(!S.isFinite() || S.isZero()))
        if (o.length === 0) {
          var b = new j(0, 0, 0, 0);
          b.copy(S), o.push(b);
        } else {
          for (var x = !1, w = 1 / 0, D = 0, C = 0; C < o.length; ++C) {
            var M = o[C];
            if (M.intersect(S)) {
              var A = new j(0, 0, 0, 0);
              A.copy(M), A.union(S), o[C] = A, x = !0;
              break;
            } else if (u) {
              l.copy(S), l.union(M);
              var L = S.width * S.height, I = M.width * M.height, P = l.width * l.height, E = P - L - I;
              E < w && (w = E, D = C);
            }
          }
          if (u && (o[D].union(S), x = !0), !x) {
            var b = new j(0, 0, 0, 0);
            b.copy(S), o.push(b);
          }
          u || (u = o.length >= s);
        }
    }
    for (var h = Xm(this), v = h.startIdx; v < h.endIdx; ++v) {
      var c = e[v];
      if (c) {
        var d = c.shouldBePainted(i, a, !0, !0), p = c.__isRendered && (c.__dirty & jt || !d) ? c.getPrevPaintRect() : null;
        p && f(p);
        var m = d && (c.__dirty & jt || !c.__isRendered) ? c.getPaintRect() : null;
        m && f(m);
      }
    }
    for (var g = this.__prevIdx, v = g.startIdx; v < g.endIdx; ++v) {
      var c = n[v], d = c && c.shouldBePainted(i, a, !0, !0);
      if (c && (!d || !c.__zr) && c.__isRendered) {
        var p = c.getPrevPaintRect();
        p && f(p);
      }
    }
    var y;
    do {
      y = !1;
      for (var v = 0; v < o.length; ) {
        if (o[v].isZero()) {
          o.splice(v, 1);
          continue;
        }
        for (var _ = v + 1; _ < o.length; )
          o[v].intersect(o[_]) ? (y = !0, o[v].union(o[_]), o.splice(_, 1)) : _++;
        v++;
      }
    } while (y);
    return this._paintRects = o, o;
  }, t.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, t.prototype.resize = function(e, n) {
    var i = this.dpr, a = this.dom, o = a.style, s = this.domBack;
    o && (o.width = e + "px", o.height = n + "px"), a.width = e * i, a.height = n * i, s && (s.width = e * i, s.height = n * i, i !== 1 && this.ctxBack.scale(i, i));
  }, t.prototype.clear = function(e, n, i) {
    var a = this.dom, o = this.ctx, s = a.width, u = a.height;
    n = n || this.clearColor;
    var l = this.motionBlur && !e, f = this.lastFrameAlpha, h = this.dpr, v = this;
    l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / h, u / h));
    var c = this.domBack;
    function d(p, m, g, y) {
      if (o.clearRect(p, m, g, y), n && n !== "transparent") {
        var _ = void 0;
        if (du(n)) {
          var S = n.global || n.__width === g && n.__height === y;
          _ = S && n.__canvasGradient || gh(o, n, {
            x: 0,
            y: 0,
            width: g,
            height: y
          }), n.__canvasGradient = _, n.__width = g, n.__height = y;
        } else XS(n) && (n.scaleX = n.scaleX || h, n.scaleY = n.scaleY || h, _ = mh(o, n, {
          dirty: function() {
            v.setUnpainted(), v.painter.refresh();
          }
        }));
        o.save(), o.fillStyle = _ || n, o.fillRect(p, m, g, y), o.restore();
      }
      l && (o.save(), o.globalAlpha = f, o.drawImage(c, p, m, g, y), o.restore());
    }
    !i || l ? d(0, 0, s, u) : i.length && T(i, function(p) {
      d(p.x * h, p.y * h, p.width * h, p.height * h);
    });
  }, t;
})(Te), $m = 1e5, vn = 314159, _f = void 0, uO = 1, Sf = 2;
function lO(r) {
  return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
}
function fO(r, t) {
  var e = document.createElement("div");
  return e.style.cssText = [
    "position:relative",
    "width:" + r + "px",
    "height:" + t + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", e;
}
function qm(r, t, e, n) {
  var i = new DS(r, t, t.dpr);
  return i.zlevel = e, i.zlevel2 = n, i.__builtin__ = !0, AS(i), i;
}
function AS(r) {
  r.__cursorStack = [], r.__cursors = Y();
}
function hO(r) {
  return r.startIdx = r.drawIdx = r.endIdx = r.endIdxNew = 0, r.used = !1, r.first = r.last = NaN, r.notClearIdx = -1, r;
}
function vO(r, t) {
  var e = r.__cursors, n = +t;
  return e.get(n) || (r.__cursorStack.push(n), e.set(n, hO({ key: n })));
}
function ns(r, t) {
  for (var e = r.__cursorStack, n = 0; n < e.length; n++)
    t(r.__cursors.get(e[n]));
}
function bf(r, t) {
  var e = r.layers;
  return e[t] || (e[t] = new Array(3));
}
function zt(r, t, e) {
  for (var n = r.layerStack, i = 0; i < n.length; i++) {
    var a = n[i].zl, o = n[i].zl2, s = r.layers[a][o];
    (!e || (!(e & Da) || s.__builtin__) && (!(e & Yh) || !s.__builtin__) && (!(e & IS) || s !== r.hoverlayer)) && t(s, a, o, i);
  }
}
var Da = 1, Yh = 2, IS = 4, is = Da | IS, cO = (function() {
  function r(t, e, n, i) {
    this.type = "canvas", this._prevDisplayList = [], this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas", this._i = {
      layerStack: [],
      layers: []
    };
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = n = B({}, n || {}), this.dpr = n.devicePixelRatio || ks, this._singleCanvas = a, this.root = t;
    var o = t.style;
    if (o && (ey(t), t.innerHTML = ""), this.storage = e, this._prevDisplayList = [], a) {
      var u = t, l = u.width, f = u.height;
      n.width != null && (l = n.width), n.height != null && (f = n.height), this.dpr = n.devicePixelRatio || 1, u.width = l * this.dpr, u.height = f * this.dpr, this._width = l, this._height = f;
      var h = qm(u, this, vn, ds);
      h.initContext(), this._insertLayer(h, vn, ds, !0), this._domRoot = t;
    } else {
      this._width = Uo(t, 0, n), this._height = Uo(t, 1, n);
      var s = this._domRoot = fO(this._width, this._height);
      t.appendChild(s);
    }
  }
  return r.prototype.getType = function() {
    return "canvas";
  }, r.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, r.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, r.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t)
      return {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      };
  }, r.prototype.refresh = function(t) {
    var e;
    t && !Z(t) ? e = { paintAll: !!t } : e = t || {};
    var n = X(e.refresh, !0), i = X(e.refreshHover, !1);
    if (i && (this._hoverLayerDirty = Sf), !n)
      return i && this._paintHoverList(this.storage.getDisplayList(!1)), this;
    var a = this.storage.getDisplayList(!0);
    this._updateLayerStatus(a, e.paintAll), this._redrawId = Math.random();
    var o = this._prevDisplayList;
    this._paintList(a, o, this._redrawId);
    var s = this._backgroundColor;
    return zt(this._i, function(u, l, f, h) {
      u.refresh && u.refresh(h === 0 ? s : null);
    }, Yh), this._opts.useDirtyRect && (this._prevDisplayList = a.slice()), this;
  }, r.prototype._paintHoverList = function(t) {
    var e = this._i.hoverlayer, n = this._hoverLayerDirty;
    if (this._hoverLayerDirty = _f, n !== _f && (!e && n === Sf && (e = this._i.hoverlayer = this._ensureLayer($m)), !!e)) {
      e.clear();
      for (var i = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, a, o = 0, s = t.length; o < s; o++) {
        var u = t[o];
        if (u.__inHover) {
          a || (a = e.ctx, a.save());
          var l = u.__hoverStyle, f = void 0;
          l && (f = u.style, u.style = l), _n(a, u, i), l && (u.style = f);
        }
      }
      a && (ci(a, i), a.restore());
    }
  }, r.prototype.getHoverLayer = function() {
    return this._ensureLayer($m);
  }, r.prototype.paintOne = function(t, e) {
    L_(t, e);
  }, r.prototype._paintList = function(t, e, n) {
    if (this._redrawId === n) {
      var i = this._doPaintList(t, e);
      if (this._needsManuallyCompositing && this._compositeManually(), i)
        zt(this._i, function(o) {
          o.afterBrush && o.afterBrush();
        }, is), this._paintHoverList(t);
      else {
        var a = this;
        Is(function() {
          a._paintList(t, e, n);
        });
      }
    }
  }, r.prototype._compositeManually = function() {
    var t = this._ensureLayer(vn).ctx, e = this._domRoot.width, n = this._domRoot.height;
    t.clearRect(0, 0, e, n), zt(this._i, function(i) {
      i.virtual && t.drawImage(i.dom, 0, 0, e, n);
    }, Da);
  }, r.prototype._doPaintList = function(t, e) {
    var n = this, i = !0;
    return zt(this._i, function(a) {
      var o = !1;
      if (ns(a, function(h) {
        (h.drawIdx < h.endIdx || h.notClearIdx >= 0) && (o = !0);
      }), !(!o && !a.__dirty)) {
        var s = n._opts.useDirtyRect && !yf(a) ? a.createRepaintRects(t, e, n._width, n._height) : null, u = n._i.layerStack[0], l = !0;
        if (a.__dirty) {
          l = !1, a.__dirty = !1;
          var f = a.zlevel === u.zl && a.zlevel2 === u.zl2 ? n._backgroundColor : null;
          a.clear(!1, f, s);
        }
        ns(a, function(h) {
          var v = n._paintPerCursor(a, h, t, s, l);
          i = i && v;
        });
      }
    }, is), et.wxa && zt(this._i, function(a) {
      a && a.ctx && a.ctx.draw && a.ctx.draw();
    }), i;
  }, r.prototype._paintPerCursor = function(t, e, n, i, a) {
    var o = t.ctx;
    if (i)
      if (!i.length)
        e.drawIdx = e.endIdx;
      else
        for (var s = this.dpr, u = 0; u < i.length; ++u) {
          var l = i[u];
          o.save(), o.beginPath(), o.rect(l.x * s, l.y * s, l.width * s, l.height * s), o.clip(), this._paintPerCursorInRect(t, e, n, l, a), o.restore();
        }
    else
      o.save(), this._paintPerCursorInRect(t, e, n, null, a), o.restore();
    return e.drawIdx >= e.endIdx;
  }, r.prototype._paintPerCursorInRect = function(t, e, n, i, a) {
    for (var o = {
      inHover: !1,
      allClipped: !1,
      prevEl: null,
      viewWidth: this._width,
      viewHeight: this._height,
      beforeBrushParam: { contentRetained: a }
    }, s = t.ctx, u = yf(t), l = u && ue.getTime(), f = e.drawIdx, h = e.notClearIdx, v = h >= 0 ? Math.min(h, f) : f; v < e.endIdx; v++) {
      var c = n[v];
      if (!(v < f && !c.notClear)) {
        if (c.__inHover && (this._hoverLayerDirty = Sf), i != null) {
          var d = c.getPaintRect();
          d && d.intersect(i) && (_n(s, c, o), c.setPrevPaintRect(d));
        } else
          _n(s, c, o);
        if (u) {
          var p = ue.getTime() - l;
          if (p > 15) {
            v++;
            break;
          }
        }
      }
    }
    ci(s, o), e.drawIdx = Math.max(v, f);
  }, r.prototype.getLayer = function(t, e) {
    return this._ensureLayer(t, 0, e);
  }, r.prototype._ensureLayer = function(t, e, n) {
    e = e || 0;
    var i = this._singleCanvas;
    i && !this._needsManuallyCompositing && (t = vn, e = 0);
    var a = bf(this._i, t)[e];
    return a || (a = qm("zr_" + t + "." + e, this, t, e), this._layerConfig[t] && at(a, this._layerConfig[t], !0), (n || i && t !== vn) && (a.virtual = !0), this._insertLayer(a, t, e, !1), a.initContext()), a;
  }, r.prototype.insertLayer = function(t, e) {
    this._insertLayer(e, t, 0, !1);
  }, r.prototype._insertLayer = function(t, e, n, i) {
    var a = this._i, o = a.layers, s = a.layerStack, u = this._domRoot, l = null;
    if (!(o[e] && o[e][n]) && lO(t)) {
      for (var f = s.length, h = 0; h < f && (s[h].zl < e || s[h].zl === e && s[h].zl2 < n); )
        h++;
      if (h > 0 && (l = bf(a, s[h - 1].zl)[s[h - 1].zl2]), s.splice(h, 0, { zl: e, zl2: n }), bf(a, e)[n] = t, !i && !t.virtual)
        if (l) {
          var v = l.dom;
          v.nextSibling ? u.insertBefore(t.dom, v.nextSibling) : u.appendChild(t.dom);
        } else
          u.firstChild ? u.insertBefore(t.dom, u.firstChild) : u.appendChild(t.dom);
      t.painter || (t.painter = this);
    }
  }, r.prototype.eachLayer = function(t, e) {
    return zt(this._i, function(n, i) {
      t.call(e, n, i);
    });
  }, r.prototype.eachBuiltinLayer = function(t, e) {
    return zt(this._i, function(n, i) {
      t.call(e, n, i);
    }, Da);
  }, r.prototype.eachOtherLayer = function(t, e) {
    return zt(this._i, function(n, i) {
      t.call(e, n, i);
    }, Yh);
  }, r.prototype.getLayers = function() {
    var t = {};
    return zt(this._i, function(e, n, i) {
      t[e.id] = e;
    }), t;
  }, r.prototype._updateLayerStatus = function(t, e) {
    var n = this;
    if (n._singleCanvas)
      for (var i = 1; i < t.length; i++) {
        var a = t[i];
        if (a.zlevel !== t[i - 1].zlevel || a.incremental) {
          n._needsManuallyCompositing = !0;
          break;
        }
      }
    zt(n._i, function(m) {
      m.__dirty = !1, ns(m, function(g) {
        g.used = !1, g.endIdxNew = 0, g.notClearIdx = -1;
      });
    }, is);
    for (var o, s = null, u = null, l = !1, f = 0, h = t.length; f < h; f++) {
      var a = t[f], v = a.zlevel, c = a.incremental, d = void 0;
      if (o !== v && (o = v, l = !1), c ? (l = !0, d = KT) : d = l ? qT : ds, (!s || v !== s.zlevel || d !== s.zlevel2) && (s = n._ensureLayer(v, d), u = null, !s.__builtin__)) {
        qh("ZLevel " + v + " has been used by unknown layer " + s.id);
        continue;
      }
      if ((!u || c !== u.key) && (u = vO(s, c), !u.used))
        if (u.used = !0, !e && u.first === a.id) {
          var p = f - u.startIdx;
          u.startIdx = f, u.drawIdx += p, u.endIdx += p;
        } else
          s.__dirty = !0, u.first = a.id, u.startIdx = u.drawIdx = f, u.endIdx = f + 1;
      u.endIdxNew = f + 1, a.__dirty & jt && !a.__inHover && ((!c || !a.notClear && f < u.drawIdx) && (s.__dirty = !0), c && a.notClear && u.notClearIdx < 0 && (u.notClearIdx = f));
    }
    zt(n._i, function(m) {
      for (var g = m.__cursorStack, y = m.__cursors, _ = g.length - 1; _ >= 0; _--) {
        var S = y.get(g[_]);
        if (!S.used)
          m.__dirty = !0, y.removeKey(g[_]), g.splice(_, 1);
        else {
          var b = S.endIdxNew;
          (yf(m) ? b < S.drawIdx : b !== S.endIdx || !b || t[b - 1].id !== S.last) && (m.__dirty = !0), S.endIdx = S.endIdxNew, S.last = b ? t[b - 1].id : NaN;
        }
      }
      m.__dirty && (ns(m, function(x) {
        x.drawIdx = x.startIdx;
      }), n._hoverLayerDirty === _f && (n._hoverLayerDirty = uO));
    }, is);
  }, r.prototype.clear = function() {
    return zt(this._i, function(t) {
      t.clear(), AS(t);
    }, Da), this;
  }, r.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, zt(this._i, function(e) {
      e.setUnpainted();
    });
  }, r.prototype.configLayer = function(t, e) {
    if (e) {
      var n = this._layerConfig;
      n[t] ? at(n[t], e, !0) : n[t] = e, zt(this._i, function(i, a) {
        at(i, n[a], !0);
      });
    }
  }, r.prototype.delLayer = function(t) {
    for (var e = this._i.layerStack, n = this._i.layers, i = e.length - 1; i >= 0; i--) {
      var a = e[i];
      if (a.zl === t) {
        var o = n[t][a.zl2];
        if (o.__builtin__)
          continue;
        if (e.splice(i, 1), n[t][a.zl2] = void 0, !o.virtual) {
          var s = o.dom.parentNode;
          s && s.removeChild(o.dom);
        }
      }
    }
  }, r.prototype.resize = function(t, e) {
    if (this._domRoot.style) {
      var n = this._domRoot;
      n.style.display = "none";
      var i = this._opts, a = this.root;
      t != null && (i.width = t), e != null && (i.height = e), t = Uo(a, 0, i), e = Uo(a, 1, i), n.style.display = "", (this._width !== t || e !== this._height) && (n.style.width = t + "px", n.style.height = e + "px", zt(this._i, function(o) {
        o.resize(t, e);
      }), this.refresh({ paintAll: !0 })), this._width = t, this._height = e;
    } else {
      if (t == null || e == null)
        return;
      this._width = t, this._height = e, this._ensureLayer(vn).resize(t, e);
    }
    return this;
  }, r.prototype.clearLayer = function(t) {
    T(this._i.layers[t], function(e) {
      e && !e.__builtin__ && e.clear();
    });
  }, r.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._i = null;
  }, r.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually)
      return this._i.layers[vn][0].dom;
    var e = new DS("image", this, t.pixelRatio || this.dpr);
    e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
    var n = e.ctx;
    if (t.pixelRatio <= this.dpr) {
      this.refresh();
      var i = e.dom.width, a = e.dom.height;
      zt(this._i, function(h) {
        h.__builtin__ ? n.drawImage(h.dom, 0, 0, i, a) : h.renderToCanvas && (n.save(), h.renderToCanvas(n), n.restore());
      });
    } else {
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, s = this.storage.getDisplayList(!0), u = 0, l = s.length; u < l; u++) {
        var f = s[u];
        _n(n, f, o);
      }
      ci(n, o);
    }
    return e.dom;
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r;
})();
function dO(r) {
  r.registerPainter("canvas", cO);
}
Le([m2, IE, ME, yR, HE, sO, sE, dO]);
export {
  pO as init
};
