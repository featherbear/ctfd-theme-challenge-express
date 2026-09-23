var rr = Array.isArray, oi = Array.prototype.indexOf, Bt = Array.prototype.includes, Jt = Array.from, ir = Object.defineProperty, St = Object.getOwnPropertyDescriptor, sr = Object.getOwnPropertyDescriptors, fi = Object.prototype, ui = Array.prototype, An = Object.getPrototypeOf, Yn = Object.isExtensible;
const ci = () => {
};
function di(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ar() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const ne = 2, ft = 4, Zt = 8, lr = 1 << 24, Se = 16, me = 32, Be = 64, vn = 128, kn = 256, Ae = 512, J = 1024, G = 2048, ge = 4096, ae = 8192, ue = 16384, pt = 32768, Ut = 1 << 25, ut = 65536, Yt = 1 << 17, hi = 1 << 18, gt = 1 << 19, vi = 1 << 20, Re = 1 << 25, Vt = 1 << 21, lt = 1 << 22, ze = 1 << 23, ot = /* @__PURE__ */ Symbol("$state"), or = /* @__PURE__ */ Symbol("component"), _i = /* @__PURE__ */ Symbol(""), fr = /* @__PURE__ */ Symbol("attributes"), _n = /* @__PURE__ */ Symbol("class"), pn = /* @__PURE__ */ Symbol("style"), gn = /* @__PURE__ */ Symbol("text"), jt = /* @__PURE__ */ Symbol("form reset"), Mt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), pi = 1, gi = 2, ur = 4, mi = 8, wi = 16, bi = 1, yi = 2, K = /* @__PURE__ */ Symbol("uninitialized"), cr = "http://www.w3.org/1999/xhtml", Ei = "http://www.w3.org/2000/svg", xi = "http://www.w3.org/1998/Math/MathML";
function Si() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ti() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function dr(e) {
  return e === this.v;
}
function hr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function vr(e) {
  return !hr(e, this.v);
}
function _r(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ci() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ai(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ki(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Mi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ri(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ni() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Oi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Li() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Di() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let ee = null;
function ct(e) {
  ee = e;
}
function Rt(e, t = !1, n) {
  ee = {
    p: ee,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      O
    ),
    l: null
  };
}
function Nt(e) {
  var t = (
    /** @type {ComponentContext} */
    ee
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Lr(r);
  }
  return t.i = !0, ee = t.p, Mn(e);
}
function Mn(e = {}) {
  return ir(e, or, { value: !0 }), e;
}
function pr() {
  return !0;
}
let Qe = [];
function gr() {
  var e = Qe;
  Qe = [], di(e);
}
function Ie(e) {
  if (Qe.length === 0 && !Tt) {
    var t = Qe;
    queueMicrotask(() => {
      t === Qe && gr();
    });
  }
  Qe.push(e);
}
function Fi() {
  for (; Qe.length > 0; )
    gr();
}
const Ii = -7169;
function U(e, t) {
  e.f = e.f & Ii | t;
}
function Rn(e) {
  (e.f & Ae) !== 0 || e.deps === null ? U(e, J) : U(e, ge);
}
function mr(e, t, n) {
  (e.f & G) !== 0 ? t.add(e) : (e.f & ge) !== 0 && n.add(e), U(e, J);
}
let Vn = !1;
function ji() {
  Vn || (Vn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[jt]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function mt(e) {
  var t = M, n = O;
  we(null), Le(null);
  try {
    return e();
  } finally {
    we(t), Le(n);
  }
}
function Hi(e, t, n, r = n) {
  e.addEventListener(t, () => mt(n));
  const i = (
    /** @type {any} */
    e[jt]
  );
  i ? e[jt] = () => {
    i(), r(!0);
  } : e[jt] = () => r(!0), ji();
}
function qi(e, t, n, r) {
  const i = Nn;
  var s = e.filter((v) => !v.settled), l = t.map(i);
  if (n.length === 0 && s.length === 0) {
    r(l);
    return;
  }
  var a = (
    /** @type {Effect} */
    O
  ), o = Bi(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function c(v) {
    if ((a.f & ue) === 0) {
      o();
      try {
        r([...l, ...v]);
      } catch (p) {
        Me(p, a);
      }
      zt();
    }
  }
  var d = wr();
  if (n.length === 0) {
    u.then(() => c([])).finally(d);
    return;
  }
  function h() {
    Promise.all(n.map((v) => /* @__PURE__ */ Ui(v))).then(c).catch((v) => Me(v, a)).finally(d);
  }
  u ? u.then(() => {
    o(), h(), zt();
  }) : h();
}
function Bi() {
  var e = (
    /** @type {Effect} */
    O
  ), t = M, n = ee, r = (
    /** @type {Batch} */
    T
  );
  return function(s = !0) {
    Le(e), we(t), ct(n), s && (e.f & ue) === 0 && (r?.activate(), r?.apply());
  };
}
function zt(e = !0) {
  Le(null), we(null), ct(null), e && T?.deactivate();
}
function wr() {
  var e = (
    /** @type {Effect} */
    O
  ), t = e.b, n = (
    /** @type {Batch} */
    T
  ), r = !!t?.is_rendered();
  return t?.update_pending_count(1, n), n.increment(r, e), () => {
    t?.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Nn(e) {
  var t = ne | G;
  return O !== null && (O.f |= gt), {
    ctx: ee,
    deps: null,
    effects: null,
    equals: dr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      K
    ),
    wv: 0,
    parent: O,
    ac: null
  };
}
const yt = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Ui(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    O
  );
  r === null && Ci();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = it(
    /** @type {V} */
    K
  ), l = !M, a = /* @__PURE__ */ new Set();
  return rs(() => {
    var o = (
      /** @type {Effect} */
      O
    ), u = ar();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (v) => {
        v !== Mt && u.reject(v);
      }).finally(zt);
    } catch (v) {
      u.reject(v), zt();
    }
    var c = (
      /** @type {Batch} */
      T
    );
    if (l) {
      if ((o.f & pt) !== 0)
        var d = wr();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        r.b?.is_rendered()
      )
        c.async_deriveds.get(o)?.reject(yt);
      else
        for (const v of a.values())
          v.reject(yt);
      a.add(u), c.async_deriveds.set(o, u);
    }
    const h = (v, p = void 0) => {
      d?.(), a.delete(u), p !== yt && (c.activate(), p ? (s.f |= ze, dt(s, p)) : ((s.f & ze) !== 0 && (s.f ^= ze), dt(s, v)), c.deactivate());
    };
    u.promise.then(h, (v) => h(null, v || "unknown"));
  }), Fn(() => {
    for (const o of a)
      o.reject(yt);
  }), new Promise((o) => {
    function u(c) {
      function d() {
        c === i ? o(s) : u(i);
      }
      c.then(d, d);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  const t = /* @__PURE__ */ Nn(e);
  return qr(t), t;
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  const t = /* @__PURE__ */ Nn(e);
  return t.equals = vr, t;
}
function Vi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ce(
        /** @type {Effect} */
        t[n]
      );
  }
}
function On(e) {
  var t, n = O, r = e.parent;
  if (!We && r !== null && e.v !== K && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (ue | ae)) !== 0)
    return Si(), e.v;
  Le(r);
  try {
    Vi(e), t = Vr(e);
  } finally {
    Le(n);
  }
  return t;
}
function br(e) {
  var t = On(e);
  if (!e.equals(t) && (e.wv = Ur(), (!T?.is_fork || e.deps === null) && (T !== null ? (T.capture(e, t, !0), mn?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    U(e, J);
    return;
  }
  We || (Te !== null ? (Dn() || T?.is_fork) && Te.set(e, t) : Rn(e));
}
function zi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && mt(() => {
        t.ac.abort(Mt), t.ac = null;
      }), t.fn !== null && (t.teardown = ci), kt(t, 0), In(t));
}
function yr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && ht(t);
}
let an = null, at = null, T = null, mn = null, Te = null, wn = null, Tt = !1, ln = !1, Ct = null, Ht = null;
var zn = 0;
let Xi = 1;
class Ge {
  id = Xi++;
  /** True as soon as `#process` was called */
  #t = !1;
  linked = !0;
  /** @type {Batch | null} */
  #a = null;
  /** @type {Batch | null} */
  #e = null;
  /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
  async_deriveds = /* @__PURE__ */ new Map();
  /**
   * The current values of any signals that are updated in this batch.
   * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Value, [any, boolean]>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Value, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<(batch: Batch) => void>}
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #s = 0;
  /**
   * Async effects that are currently in flight, _not_ inside a pending boundary
   * @type {Map<Effect, number>}
   */
  #n = /* @__PURE__ */ new Map();
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #l = null;
  /**
   * Effects that were scheduled in this batch but not yet 'resolved' into the
   * root effects that need to be flushed. Resolving — the upwards traversal that
   * marks the path to each effect on the shared effect tree (see #resolve) — is
   * deferred until the batch is processed, so that the markers are created and
   * consumed within a single traversal. Scheduling into other batches (which can
   * happen concurrently, e.g. while a batch is committed) can therefore never
   * observe (and be confused by) this batch's markers.
   * May contain duplicates — deduplication happens during resolving
   * @type {Effect[]}
   */
  #i = [];
  /**
   * Effects created while this batch was active.
   * @type {Effect[]}
   */
  #v = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #f = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #u = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #d = /* @__PURE__ */ new Map();
  /**
   * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
   * @type {Set<Effect>}
   */
  #p = /* @__PURE__ */ new Set();
  is_fork = !1;
  #c = !1;
  constructor() {
    at === null ? an = at = this : (at.#e = this, this.#a = at), at = this;
  }
  #w() {
    if (this.is_fork) return !0;
    for (const r of this.#n.keys()) {
      for (var t = r, n = !1; t.parent !== null; ) {
        if (this.#d.has(t)) {
          n = !0;
          break;
        }
        t = t.parent;
      }
      if (!n)
        return !0;
    }
    return !1;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    this.#d.has(t) || this.#d.set(t, { d: [], m: [] }), this.#p.delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = this.#d.get(t);
    if (r) {
      this.#d.delete(t);
      for (var i of r.d)
        U(i, G), n(i);
      for (i of r.m)
        U(i, ge), n(i);
    }
    this.#p.add(t);
  }
  /**
   * Convert the effects that were scheduled in this batch into the root effects
   * that need to be traversed, marking the path to each effect (by clearing the
   * `CLEAN` flag on ancestor branches) so that the traversal can find them.
   * This happens right before traversal rather than at scheduling time, so that
   * the markers left on the (shared) effect tree are created and consumed within
   * a single traversal — scheduling into other batches can never observe them
   * @returns {Effect[]}
   */
  #E() {
    var t = [];
    for (const s of this.#i)
      if (!((s.f & ue) !== 0 || (s.f & (G | ge)) === 0)) {
        for (var n = s, r = !1; n.parent !== null; ) {
          n = n.parent;
          var i = n.f;
          if ((i & (Be | me)) !== 0) {
            if ((i & J) === 0) {
              r = !0;
              break;
            }
            n.f ^= J;
          }
        }
        r || t.push(n);
      }
    return this.#i = [], t;
  }
  #g() {
    this.#t = !0;
    for (const a of this.#f)
      this.#u.delete(a), U(a, G), this.schedule(a);
    for (const a of this.#u)
      U(a, ge), this.schedule(a);
    this.apply();
    for (var t = Ct = [], n = [], r = Ht = []; this.#i.length > 0; ) {
      zn++ > 1e3 && (this.#_(), Wi());
      for (const a of this.#E())
        try {
          this.#m(a, t, n);
        } catch (o) {
          throw Sr(a), this.#w() || this.discard(), o;
        }
    }
    if (T = null, r.length > 0) {
      var i = Ge.ensure();
      for (const a of r)
        i.schedule(a);
    }
    if (Ct = null, Ht = null, this.#w()) {
      this.#h(n), this.#h(t);
      for (const [a, o] of this.#d)
        xr(a, o);
      r.length > 0 && /** @type {unknown} */
      T.#g();
      return;
    }
    const s = this.#x();
    if (s) {
      this.#h(n), this.#h(t), s.#b(this);
      return;
    }
    this.#f.clear(), this.#u.clear();
    for (const a of this.#o) a(this);
    this.#o.clear(), mn = this, Xn(n), Xn(t), mn = null, this.#l?.resolve();
    var l = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      T
    );
    if (this.#s === 0 && (this.#i.length === 0 || l !== null) && this.#_(), this.#i.length > 0)
      if (l !== null) {
        for (const a of this.#i)
          l.#i.push(a);
        this.#i = [];
      } else
        l = this;
    l !== null && (Ne.clear(), l.#g());
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #m(t, n, r) {
    t.f ^= J;
    for (var i = t.first; i !== null; ) {
      var s = i.f, l = (s & (me | Be)) !== 0, a = l && (s & J) !== 0, o = a || (s & ae) !== 0 || this.#d.has(i);
      if (!o && i.fn !== null) {
        l ? i.f ^= J : (s & ft) !== 0 ? n.push(i) : Pt(i) && ((s & Se) !== 0 && this.#u.add(i), ht(i));
        var u = i.first;
        if (u !== null) {
          i = u;
          continue;
        }
      }
      for (; i !== null; ) {
        var c = i.next;
        if (c !== null) {
          i = c;
          break;
        }
        i = i.parent;
      }
    }
  }
  #x() {
    for (var t = this.#a; t !== null; ) {
      if (!t.is_fork) {
        for (const [n, [, r]] of this.current)
          if (t.current.has(n) && !r)
            return t;
      }
      t = t.#a;
    }
    return null;
  }
  /**
   * @param {Batch} batch
   */
  #b(t) {
    for (const [r, i] of t.current)
      !this.previous.has(r) && t.previous.has(r) && this.previous.set(r, t.previous.get(r)), this.current.set(r, i);
    for (const [r, i] of t.async_deriveds) {
      const s = this.async_deriveds.get(r);
      s && i.promise.then(s.resolve).catch(s.reject);
    }
    t.async_deriveds.clear(), this.transfer_effects(t.#f, t.#u);
    const n = (r) => {
      var i = r.reactions;
      if (i !== null && !((r.f & ne) !== 0 && (r.f & (G | ge)) === 0))
        for (const a of i) {
          var s = a.f;
          if ((s & ne) !== 0)
            n(
              /** @type {Derived} */
              a
            );
          else {
            var l = (
              /** @type {Effect} */
              a
            );
            s & (lt | Se) && !this.async_deriveds.has(l) && (this.#u.delete(l), U(l, G), this.schedule(l));
          }
        }
    };
    for (const r of this.current.keys())
      n(r);
    this.oncommit(() => t.discard()), t.#_(), T = this, this.#g();
  }
  /**
   * @param {Effect[]} effects
   */
  #h(t) {
    for (var n = 0; n < t.length; n += 1)
      mr(t[n], this.#f, this.#u);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== K && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ze) === 0 && (this.current.set(t, [n, r]), Te?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    T = this;
  }
  deactivate() {
    T = null, Te = null;
  }
  flush() {
    try {
      ln = !0, T = this, this.#g();
    } finally {
      zn = 0, wn = null, Ct = null, Ht = null, ln = !1, T = null, Te = null, Ne.clear();
    }
  }
  discard() {
    for (const t of this.#r) t(this);
    this.#r.clear();
    for (const t of this.async_deriveds.values())
      t.reject(yt);
    this.#_(), this.#l?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    this.#v.push(t);
  }
  #y() {
    for (let d = an; d !== null; d = d.#e) {
      var t = d.id < this.id, n = [];
      for (const [h, [v, p]] of this.current) {
        if (d.current.has(h)) {
          var r = (
            /** @type {[any, boolean]} */
            d.current.get(h)[0]
          );
          if (t && v !== r)
            d.current.set(h, [v, p]);
          else
            continue;
        }
        n.push(h);
      }
      if (t)
        for (const [h, v] of this.async_deriveds) {
          const p = d.async_deriveds.get(h);
          p && v.promise.then(p.resolve).catch(p.reject);
        }
      var i = [...d.current.keys()].filter(
        (h) => !/** @type {[any, boolean]} */
        d.current.get(h)[1]
      );
      if (!(!d.#t || i.length === 0)) {
        var s = i.filter((h) => !this.current.has(h));
        if (s.length === 0)
          t && d.discard();
        else if (n.length > 0) {
          if (t)
            for (const h of this.#p)
              d.unskip_effect(h, (v) => {
                (v.f & (Se | lt)) !== 0 ? d.schedule(v) : d.#h([v]);
              });
          d.activate();
          var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
          for (var o of n)
            Er(o, s, l, a);
          a = /* @__PURE__ */ new Map();
          var u = [...d.current].filter(([h, v]) => {
            const p = this.current.get(h);
            return p ? p[0] !== v[0] || p[1] !== v[1] : !0;
          }).map(([h]) => h);
          if (u.length > 0)
            for (const h of this.#v)
              (h.f & (ue | ae | Yt)) === 0 && Ln(h, u, a) && ((h.f & (lt | Se)) !== 0 ? (U(h, G), d.schedule(h)) : d.#f.add(h));
          if (d.#i.length > 0 && !d.#c) {
            d.apply();
            for (var c of d.#E())
              d.#m(c, [], []);
          }
          d.deactivate();
        }
      }
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (this.#s += 1, t) {
      let r = this.#n.get(n) ?? 0;
      this.#n.set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (this.#s -= 1, t) {
      let r = this.#n.get(n) ?? 0;
      r === 1 ? this.#n.delete(n) : this.#n.set(n, r - 1);
    }
    this.#c || (this.#c = !0, Ie(() => {
      this.#c = !1, this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      this.#f.add(r);
    for (const r of n)
      this.#u.add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    this.#o.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#r.add(t);
  }
  settled() {
    return (this.#l ??= ar()).promise;
  }
  static ensure() {
    if (T === null) {
      const t = T = new Ge();
      !ln && !Tt && Ie(() => {
        t.#t || t.flush();
      });
    }
    return T;
  }
  apply() {
    {
      Te = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (wn = t, t.b?.is_pending && (t.f & (ft | Zt | lr)) !== 0 && (t.f & pt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    this.#i.push(t);
  }
  #_() {
    if (this.linked) {
      var t = this.#a, n = this.#e;
      t === null ? an = n : t.#e = n, n === null ? at = t : n.#a = t, this.linked = !1;
    }
  }
}
function Gi(e) {
  var t = Tt;
  Tt = !0;
  try {
    for (var n; ; ) {
      if (Fi(), T === null)
        return (
          /** @type {T} */
          n
        );
      T.flush();
    }
  } finally {
    Tt = t;
  }
}
function Wi() {
  try {
    Ni();
  } catch (e) {
    Me(e, wn);
  }
}
let Fe = null;
function Xn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ue | ae)) === 0 && Pt(r) && (Fe = /* @__PURE__ */ new Set(), ht(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ir(r), Fe?.size > 0)) {
        Ne.clear();
        for (const i of Fe) {
          if ((i.f & (ue | ae)) !== 0) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            Fe.has(l) && (Fe.delete(l), s.push(l)), l = l.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const o = s[a];
            (o.f & (ue | ae)) === 0 && ht(o);
          }
        }
        Fe.clear();
      }
    }
    Fe = null;
  }
}
function Er(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & ne) !== 0 ? Er(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (lt | Se)) !== 0 && (s & G) === 0 && Ln(i, t, r) && (U(i, G), Pn(
        /** @type {Effect} */
        i
      ));
    }
}
function Ln(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Bt.call(t, i))
        return !0;
      if ((i.f & ne) !== 0 && Ln(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Pn(e) {
  T.schedule(e);
}
function xr(e, t) {
  if (!((e.f & me) !== 0 && (e.f & J) !== 0)) {
    (e.f & G) !== 0 ? t.d.push(e) : (e.f & ge) !== 0 && t.m.push(e), U(e, J);
    for (var n = e.first; n !== null; )
      xr(n, t), n = n.next;
  }
}
function Sr(e) {
  U(e, J);
  for (var t = e.first; t !== null; )
    Sr(t), t = t.next;
}
let Xt = /* @__PURE__ */ new Set();
const Ne = /* @__PURE__ */ new Map();
let Tr = !1;
function it(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: dr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  const n = it(e);
  return qr(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ki(e, t = !1, n = !0) {
  const r = it(e);
  return t || (r.equals = vr), r;
}
function y(e, t, n = !1) {
  M !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ce || (M.f & Yt) !== 0) && pr() && (M.f & (ne | Se | lt | Yt)) !== 0 && (Oe === null || !Oe.has(e)) && Pi();
  let r = n ? je(t) : t;
  return dt(e, r, Ht);
}
var Ze = null, bn = 0;
function dt(e, t, n = null) {
  if (!e.equals(t)) {
    We ? Ne.set(e, t) : Ne.has(e) || Ne.set(e, e.v);
    var r = Ge.ensure();
    if (r.capture(e, t), (e.f & ne) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & G) !== 0 && On(i), Te === null && Rn(i);
    }
    e.wv = Ur(), Ze = null, bn = 0, Cr(e, G, n), Ze = null, O !== null && (O.f & J) !== 0 && (O.f & (me | Be)) === 0 && (_e === null ? ss([e]) : _e.push(e)), !r.is_fork && Xt.size > 0 && !Tr && Ji();
  }
  return t;
}
function Ji() {
  Tr = !1;
  for (const e of Xt) {
    (e.f & J) !== 0 && U(e, ge);
    let t;
    try {
      t = Pt(e);
    } catch {
      t = !0;
    }
    t && ht(e);
  }
  Xt.clear();
}
function At(e) {
  y(e, e.v + 1);
}
function Cr(e, t, n) {
  var r = e.reactions;
  if (r !== null) {
    var i = r.length;
    if (bn += i, bn > 1e5 && Ze === null && (Ze = /* @__PURE__ */ new Set()), Ze !== null) {
      if (Ze.has(e)) return;
      Ze.add(e);
    }
    for (var s = 0; s < i; s++) {
      var l = r[s], a = l.f, o = (a & G) === 0;
      if (o && U(l, t), (a & Yt) !== 0)
        Xt.add(
          /** @type {Effect} */
          l
        );
      else if ((a & ne) !== 0) {
        var u = (
          /** @type {Derived} */
          l
        );
        Te?.delete(u), Cr(u, ge, n);
      } else if (o) {
        var c = (
          /** @type {Effect} */
          l
        );
        (a & Se) !== 0 && Fe !== null && Fe.add(c), n !== null ? n.push(c) : Pn(c);
      }
    }
  }
}
function je(e) {
  if (typeof e != "object" || e === null || ot in e || or in e)
    return e;
  const t = An(e);
  if (t !== fi && t !== ui)
    return e;
  var n = /* @__PURE__ */ new Map(), r = rr(e), i = /* @__PURE__ */ L(0), s = tt, l = (a) => {
    if (tt === s)
      return a();
    var o = M, u = tt;
    we(null), Wn(s);
    var c = a();
    return we(o), Wn(u), c;
  };
  return r && n.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Oi();
        var c = n.get(o);
        return c === void 0 ? l(() => {
          var d = /* @__PURE__ */ L(u.value);
          return n.set(o, d), d;
        }) : y(c, u.value, !0), !0;
      },
      deleteProperty(a, o) {
        var u = n.get(o);
        if (u === void 0) {
          if (o in a) {
            const c = l(() => /* @__PURE__ */ L(K));
            n.set(o, c), At(i);
          }
        } else
          y(u, K), At(i);
        return !0;
      },
      get(a, o, u) {
        if (o === ot)
          return e;
        var c = n.get(o), d = o in a;
        if (c === void 0 && (!d || St(a, o)?.writable) && (c = l(() => {
          var v = je(d ? a[o] : K), p = /* @__PURE__ */ L(v);
          return p;
        }), n.set(o, c)), c !== void 0) {
          var h = f(c);
          return h === K ? void 0 : h;
        }
        return Reflect.get(a, o, u);
      },
      getOwnPropertyDescriptor(a, o) {
        this.has?.(a, o);
        var u = Reflect.getOwnPropertyDescriptor(a, o), c = n.get(o);
        if (c !== void 0) {
          var d = f(c);
          if (d === K)
            return;
          if (u && "value" in u)
            u.value = d;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(a, o) {
        if (o === ot)
          return !0;
        var u = n.get(o), c = u !== void 0 && u.v !== K || Reflect.has(a, o);
        if (u !== void 0 || O !== null && (!c || St(a, o)?.writable)) {
          u === void 0 && (u = l(() => {
            var h = c ? je(a[o]) : K, v = /* @__PURE__ */ L(h);
            return v;
          }), n.set(o, u));
          var d = f(u);
          if (d === K)
            return !1;
        }
        return c;
      },
      set(a, o, u, c) {
        var d = n.get(o), h = o in a;
        if (r && o === "length")
          for (var v = u; v < /** @type {Source<number>} */
          d.v; v += 1) {
            var p = n.get(v + "");
            p !== void 0 ? y(p, K) : v in a && (p = l(() => /* @__PURE__ */ L(K)), n.set(v + "", p));
          }
        if (d === void 0)
          (!h || St(a, o)?.writable) && (d = l(() => /* @__PURE__ */ L(void 0)), y(d, je(u)), n.set(o, d));
        else {
          h = d.v !== K;
          var C = l(() => je(u));
          y(d, C);
        }
        var _ = Reflect.getOwnPropertyDescriptor(a, o);
        if (_?.set && _.set.call(c, u), !h) {
          if (r && typeof o == "string") {
            var g = (
              /** @type {Source<number>} */
              n.get("length")
            ), j = Number(o);
            Number.isInteger(j) && j >= g.v && y(g, j + 1);
          }
          At(i);
        }
        return !0;
      },
      ownKeys(a) {
        f(i);
        var o = Reflect.ownKeys(a).filter((d) => {
          var h = n.get(d);
          return h === void 0 || h.v !== K;
        });
        for (var [u, c] of n)
          c.v !== K && !(u in a) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        Li();
      }
    }
  );
}
var yn, Ar, kr, Mr;
function Zi() {
  if (yn === void 0) {
    yn = window, Ar = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    kr = St(t, "firstChild").get, Mr = St(t, "nextSibling").get, Yn(e) && (e[_n] = void 0, e[fr] = null, e[pn] = void 0, e.__e = void 0), Yn(n) && (n[gn] = void 0);
  }
}
function qe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return (
    /** @type {TemplateNode | null} */
    kr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return (
    /** @type {TemplateNode | null} */
    Mr.call(e)
  );
}
function I(e, t) {
  return /* @__PURE__ */ He(e);
}
function Ve(e, t = !1) {
  {
    var n = /* @__PURE__ */ He(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ot(n) : n;
  }
}
function se(e, t = !1) {
  return /* @__PURE__ */ He(e);
}
function S(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ot(r);
  return r;
}
function Qi(e) {
  e.textContent = "";
}
function Rr() {
  return !1;
}
function Nr(e, t, n) {
  return t == null || t === cr ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e)
  );
}
function $i(e) {
  var t = O;
  if (t === null)
    return M.f |= ze, e;
  if ((t.f & pt) === 0 && (t.f & ft) === 0)
    throw e;
  Me(e, t);
}
function Me(e, t) {
  if (!(t !== null && (t.f & ue) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & vn) !== 0 && (t.f & (ue | Ut)) === 0) {
        if ((t.f & pt) === 0)
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (n) {
          e = n;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
function es(e) {
  O === null && (M === null && Ri(), Mi()), We && ki();
}
function ts(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ue(e, t) {
  var n = O;
  n !== null && (n.f & ae) !== 0 && (e |= ae);
  var r = {
    ctx: ee,
    deps: null,
    nodes: null,
    f: e | G | Ae,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  T?.register_created_effect(r);
  var i = r;
  if ((e & ft) !== 0)
    Ct !== null ? Ct.push(r) : Ge.ensure().schedule(r);
  else if (t !== null) {
    try {
      ht(r);
    } catch (l) {
      throw ce(r), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & gt) === 0 && (i = i.first, (e & Se) !== 0 && (e & ut) !== 0 && i !== null && (i.f |= ut));
  }
  if (i !== null && (i.parent = n, n !== null && ts(i, n), M !== null && (M.f & ne) !== 0 && (e & Be) === 0)) {
    var s = (
      /** @type {Derived} */
      M
    );
    (s.effects ??= []).push(i);
  }
  return r;
}
function Dn() {
  return M !== null && !Ce;
}
function Fn(e) {
  const t = Ue(Zt, null);
  return U(t, J), t.teardown = e, t;
}
function Or(e) {
  es();
  var t = (
    /** @type {Effect} */
    O.f
  ), n = !M && (t & me) !== 0 && ee !== null && !ee.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ee
    );
    (r.e ??= []).push(e);
  } else
    return Lr(e);
}
function Lr(e) {
  return Ue(ft | vi, e);
}
function ns(e) {
  Ge.ensure();
  const t = Ue(Be | gt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? et(t, () => {
      ce(t), r(void 0);
    }) : (ce(t), r(void 0));
  });
}
function Pr(e) {
  return Ue(ft, e);
}
function rs(e) {
  return Ue(lt | gt, e);
}
function Lt(e, t = 0) {
  return Ue(Zt | t, e);
}
function B(e, t = [], n = [], r = []) {
  qi(r, t, n, (i) => {
    Ue(Zt, () => {
      e(...i.map(f));
    });
  });
}
function Qt(e, t = 0) {
  var n = Ue(Se | t, e);
  return n;
}
function pe(e) {
  return Ue(me | gt, e);
}
function Dr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = We, r = M;
    Gn(!0), we(null);
    try {
      t.call(null);
    } catch (i) {
      Me(i, e.parent);
    } finally {
      Gn(n), we(r);
    }
  }
}
function In(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && mt(() => {
      i.abort(Mt);
    });
    var r = n.next;
    (n.f & Be) !== 0 ? n.parent = null : ce(n, t), n = r;
  }
}
function is(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & me) === 0 && ce(t), t = n;
  }
}
function ce(e, t = !0) {
  var n = !1;
  (t || (e.f & hi) !== 0) && e.nodes !== null && e.nodes.end !== null && (Fr(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= Ut, In(e, t && !n), kt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Dr(e), e.f ^= Ut, e.f |= ue;
  var i = e.parent;
  i !== null && i.first !== null && Ir(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Fr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Ot(e);
    e.remove(), e = n;
  }
}
function Ir(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function et(e, t, n = !0) {
  var r = [];
  e.f |= kn, jr(e, r, !0);
  var i = () => {
    n && ce(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var a of r)
      a.out(l);
  } else
    i();
}
function jr(e, t, n) {
  if ((e.f & ae) === 0) {
    e.f ^= ae;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Be) === 0) {
        var l = (i.f & ut) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & me) !== 0 && (e.f & Se) !== 0;
        jr(i, t, l ? n : !1);
      }
      i = s;
    }
  }
}
function Gt(e) {
  e.f &= ~kn, Hr(e, !0);
}
function Hr(e, t) {
  if ((e.f & kn) === 0 && (e.f & ae) !== 0) {
    e.f ^= ae, (e.f & J) === 0 && (U(e, G), Ge.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & ut) !== 0 || (n.f & me) !== 0;
      Hr(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const l of s)
        (l.is_global || t) && l.in();
  }
}
function jn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Ot(n);
      t.append(n), n = i;
    }
}
let qt = !1, We = !1;
function Gn(e) {
  We = e;
}
let M = null, Ce = !1;
function we(e) {
  M = e;
}
let O = null;
function Le(e) {
  O = e;
}
let Oe = null;
function qr(e) {
  M !== null && ((M.f & Vt) !== 0 || (M.f & ne) !== 0) && (Oe ??= /* @__PURE__ */ new Set()).add(e);
}
let fe = null, ve = 0, _e = null;
function ss(e) {
  _e = e;
}
let Br = 1, $e = 0, tt = $e;
function Wn(e) {
  tt = e;
}
function Ur() {
  return ++Br;
}
function Pt(e) {
  var t = e.f;
  if ((t & G) !== 0)
    return !0;
  if ((t & ge) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Pt(
        /** @type {Derived} */
        s
      ) && br(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Ae) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Te === null && U(e, J);
  }
  return !1;
}
function Yr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Oe !== null && Oe.has(e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & ne) !== 0 ? Yr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? U(s, G) : (s.f & J) !== 0 && U(s, ge), Pn(
        /** @type {Effect} */
        s
      ));
    }
}
function Vr(e) {
  var t = fe, n = ve, r = _e, i = M, s = Oe, l = ee, a = Ce, o = tt, u = e.f;
  fe = /** @type {null | Value[]} */
  null, ve = 0, _e = null, M = (u & (me | Be)) === 0 ? e : null, Oe = null, ct(e.ctx), Ce = !1, tt = ++$e, e.ac !== null && (mt(() => {
    e.ac.abort(Mt);
  }), e.ac = null);
  try {
    e.f |= Vt;
    var c = (
      /** @type {Function} */
      e.fn
    ), d = c();
    e.f |= pt;
    var h = Kn(e);
    if (pr() && _e !== null && !Ce && h !== null && (e.f & (ne | ge | G)) === 0)
      for (var v = 0; v < /** @type {Source[]} */
      _e.length; v++)
        Yr(
          _e[v],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if ($e++, i.deps !== null)
        for (let p = 0; p < n; p += 1)
          i.deps[p].rv = $e;
      if (t !== null)
        for (const p of t)
          p.rv = $e;
      _e !== null && (r === null ? r = _e : r.push(.../** @type {Source[]} */
      _e));
    }
    return (e.f & ze) !== 0 && (e.f ^= ze), d;
  } catch (p) {
    return Kn(e), $i(p);
  } finally {
    e.f ^= Vt, fe = t, ve = n, _e = r, M = i, Oe = s, ct(l), Ce = a, tt = o;
  }
}
function Kn(e) {
  var t = e.deps, n = T?.is_fork;
  if (fe !== null) {
    var r;
    if (n || kt(e, ve), t !== null && ve > 0)
      for (t.length = ve + fe.length, r = 0; r < fe.length; r++)
        t[ve + r] = fe[r];
    else
      e.deps = t = fe;
    if (Dn() && (e.f & Ae) !== 0)
      for (r = ve; r < t.length; r++)
        (t[r].reactions ??= []).push(e);
  } else !n && t !== null && ve < t.length && (kt(e, ve), t.length = ve);
  return t;
}
function as(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = oi.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & ne) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (fe === null || !Bt.call(fe, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Ae) !== 0 && (s.f ^= Ae), s.v !== K && Rn(s), s.ac !== null && mt(() => {
      s.ac.abort(Mt), s.ac = null, U(s, G);
    }), zi(s), kt(s, 0);
  }
}
function kt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      as(e, n[r]);
}
function ht(e) {
  var t = e.f;
  if ((t & ue) === 0) {
    U(e, J);
    var n = O, r = qt;
    O = e, qt = (t & (me | Be)) === 0;
    try {
      (t & (Se | lr)) !== 0 ? is(e) : In(e), Dr(e);
      var i = Vr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Br;
      var s;
    } finally {
      qt = r, O = n;
    }
  }
}
async function Wt() {
  await Promise.resolve(), Gi();
}
function f(e) {
  var t = e.f, n = (t & ne) !== 0;
  if (M !== null && !Ce) {
    var r = O !== null && (O.f & ue) !== 0;
    if (!r && (Oe === null || !Oe.has(e))) {
      var i = M.deps;
      if ((M.f & Vt) !== 0)
        e.rv < $e && (e.rv = $e, fe === null && i !== null && i[ve] === e ? ve++ : fe === null ? fe = [e] : fe.push(e));
      else {
        M.deps ??= [], Bt.call(M.deps, e) || M.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [M] : Bt.call(s, M) || s.push(M);
      }
    }
  }
  if (We && Ne.has(e))
    return Ne.get(e);
  if (n) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (We) {
      var a = l.v;
      return ((l.f & J) === 0 && l.reactions !== null || Xr(l)) && (a = On(l)), Ne.set(l, a), a;
    }
    var o = (l.f & Ae) === 0 && !Ce && M !== null && (qt || (M.f & Ae) !== 0), u = (l.f & pt) === 0;
    Pt(l) && (o && (l.f |= Ae), br(l)), o && !u && (yr(l), zr(l));
  }
  if (Te?.has(e))
    return Te.get(e);
  if ((e.f & ze) !== 0)
    throw e.v;
  return e.v;
}
function zr(e) {
  if (e.f |= Ae, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ne) !== 0 && (t.f & Ae) === 0 && (yr(
        /** @type {Derived} */
        t
      ), zr(
        /** @type {Derived} */
        t
      ));
}
function Xr(e) {
  if (e.v === K) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ne.has(t) || (t.f & ne) !== 0 && Xr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ke(e) {
  var t = Ce;
  try {
    return Ce = !0, e();
  } finally {
    Ce = t;
  }
}
function ls(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ot in e)
      En(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ot in n && En(n);
      }
  }
}
function En(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        En(e[r], t);
      } catch {
      }
    const n = An(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = sr(n);
      for (let i in r) {
        const s = r[i].get;
        if (s)
          try {
            s.call(e);
          } catch {
          }
      }
    }
  }
}
const os = ["touchstart", "touchmove"];
function fs(e) {
  return os.includes(e);
}
const Et = /* @__PURE__ */ Symbol("events"), Gr = /* @__PURE__ */ new Set(), xn = /* @__PURE__ */ new Set();
function us(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || Sn.call(t, s), !s.cancelBubble)
      return mt(() => n?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, Ie(() => {
    i.__removed || t.addEventListener(e, i, r);
  })) : t.addEventListener(e, i, r), i;
}
function Hn(e, t, n, r, i) {
  var s = { capture: r, passive: i }, l = us(e, t, n, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Fn(() => {
    l.__removed = !0, t.removeEventListener(e, l, s);
  });
}
function Je(e, t, n) {
  (t[Et] ??= {})[e] = n;
}
function Wr(e) {
  for (var t = 0; t < e.length; t++)
    Gr.add(e[t]);
  for (var n of xn)
    n(e);
}
let on = null, fn = !1;
function Sn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  on = e, fn || (fn = !0, setTimeout(() => {
    fn = !1, on = null;
  }));
  var l = 0, a = on === e && e[Et];
  if (a) {
    var o = i.indexOf(a);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Et] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    o <= u && (l = o);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    ir(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var c = M, d = O;
    we(null), Le(null);
    try {
      for (var h, v = []; s !== null && s !== t; ) {
        try {
          var p = s[Et]?.[r];
          p != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && p.call(s, e);
        } catch (C) {
          h ? v.push(C) : h = C;
        }
        if (e.cancelBubble) break;
        l++, s = l < i.length ? (
          /** @type {Element} */
          i[l]
        ) : null;
      }
      if (h) {
        for (let C of v)
          queueMicrotask(() => {
            throw C;
          });
        throw h;
      }
    } finally {
      e[Et] = t, delete e.currentTarget, we(c), Le(d);
    }
  }
}
const cs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ds(e) {
  return (
    /** @type {string} */
    cs?.createHTML(e) ?? e
  );
}
function hs(e) {
  var t = Nr("template");
  return t.innerHTML = ds(e.replaceAll("<!>", "<!---->")), t.content;
}
function vt(e, t) {
  var n = (
    /** @type {Effect} */
    O
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Z(e, t) {
  var n = (t & bi) !== 0, r = (t & yi) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = hs(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ He(i)));
    var l = (
      /** @type {TemplateNode} */
      r || Ar ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ He(l)
      ), o = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      vt(a, o);
    } else
      vt(l, l);
    return l;
  };
}
function Xe(e = "") {
  {
    var t = qe(e + "");
    return vt(t, t), t;
  }
}
function Kt() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = qe();
  return e.append(t, n), vt(t, n), e;
}
function F(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function vs(e) {
  let t = 0, n = it(0), r;
  return () => {
    Dn() && (f(n), Lt(() => (t === 0 && (r = Ke(() => e(() => At(n)))), t += 1, () => {
      Ie(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, At(n));
      });
    })));
  };
}
var _s = ut | gt;
function ps(e, t, n, r) {
  new gs(e, t, n, r);
}
class gs {
  /** @type {Boundary | null} */
  parent;
  is_pending = !1;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #a = null;
  /** @type {BoundaryProps} */
  #e;
  /** @type {((anchor: Node) => void)} */
  #o;
  /** @type {Effect} */
  #r;
  /** @type {Effect | null} */
  #s = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #l = null;
  /** @type {DocumentFragment | null} */
  #i = null;
  #v = 0;
  #f = 0;
  #u = !1;
  /** @type {Set<Effect>} */
  #d = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #p = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #c = null;
  #w = vs(() => (this.#c = it(this.#v), () => {
    this.#c = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    this.#t = t, this.#e = n, this.#o = (s) => {
      var l = (
        /** @type {Effect} */
        O
      );
      l.b = this, l.f |= vn, r(s);
    }, this.parent = /** @type {Effect} */
    O.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), this.#r = Qt(() => {
      this.#b();
    }, _s);
  }
  #E() {
    try {
      this.#s = pe(() => this.#o(this.#t));
    } catch (t) {
      this.error(t);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #g(t) {
    const n = this.#e.failed, { reset: r, invoke_onerror: i } = this.#m(t);
    Ie(i), n && (this.#l = pe(() => {
      n(
        this.#t,
        () => t,
        () => r
      );
    }));
  }
  /**
   * Creates the `reset` function for a failed boundary, along with a function
   * that invokes `onerror` with it (if provided)
   * @param {unknown} error
   * @returns {{ reset: () => void, invoke_onerror: () => void }}
   */
  #m(t) {
    var n = !1, r = !1;
    const i = () => {
      if (n) {
        Ti();
        return;
      }
      n = !0, r && Di(), this.#l !== null && et(this.#l, () => {
        this.#l = null;
      }), this.#y(() => {
        this.#b();
      });
    };
    return { reset: i, invoke_onerror: () => {
      try {
        r = !0, this.#e.onerror?.(t, i), r = !1;
      } catch (l) {
        Me(l, this.#r && this.#r.parent);
      }
    } };
  }
  #x() {
    const t = this.#e.pending;
    t && (this.is_pending = !0, this.#n = pe(() => t(this.#t)), Ie(() => {
      var n = this.#i = document.createDocumentFragment(), r = qe(), i = !1;
      if (n.append(r), this.#s = this.#y(() => {
        try {
          return pe(() => this.#o(r));
        } catch (s) {
          try {
            this.error(s), i = !0;
          } catch (l) {
            Me(l, this.#r.parent);
          }
          return null;
        }
      }), this.#s === null) {
        this.#i = null, i && this.#h(
          /** @type {Batch} */
          T
        );
        return;
      }
      this.#f === 0 && (this.#t.before(n), this.#i = null, et(
        /** @type {Effect} */
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.#h(
        /** @type {Batch} */
        T
      ));
    }));
  }
  #b() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#f = 0, this.#v = 0, this.#s = pe(() => {
        this.#o(this.#t);
      }), this.#f > 0) {
        var t = this.#i = document.createDocumentFragment();
        jn(this.#s, t);
        const n = (
          /** @type {(anchor: Node) => void} */
          this.#e.pending
        );
        this.#n = pe(() => n(this.#t));
      } else
        this.#h(
          /** @type {Batch} */
          T
        );
    } catch (n) {
      this.error(n);
    }
  }
  /**
   * @param {Batch} batch
   */
  #h(t) {
    this.is_pending = !1, t.transfer_effects(this.#d, this.#p);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    mr(t, this.#d, this.#p);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #y(t) {
    var n = O, r = M, i = ee;
    Le(this.#r), we(this.#r), ct(this.#r.ctx);
    try {
      return Ge.ensure(), t();
    } finally {
      Le(n), we(r), ct(i);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  #_(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#_(t, n);
      return;
    }
    this.#f += t, this.#f === 0 && (this.#h(n), this.#n && et(this.#n, () => {
      this.#n = null;
    }), this.#i && (this.#t.before(this.#i), this.#i = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    this.#_(t, n), this.#v += t, !(!this.#c || this.#u) && (this.#u = !0, Ie(() => {
      this.#u = !1, this.#c && dt(this.#c, this.#v);
    }));
  }
  get_effect_pending() {
    return this.#w(), f(
      /** @type {Source<number>} */
      this.#c
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!this.#e.onerror && !this.#e.failed)
      throw t;
    T?.is_fork ? (this.#s && T.skip_effect(this.#s), this.#n && T.skip_effect(this.#n), this.#l && T.skip_effect(this.#l), T.oncommit(() => {
      this.#S(t);
    })) : this.#S(t);
  }
  /**
   * @param {unknown} error
   */
  #S(t) {
    this.#s && (ce(this.#s), this.#s = null), this.#n && (ce(this.#n), this.#n = null), this.#l && (ce(this.#l), this.#l = null);
    let n = this.#e.failed;
    const r = (i) => {
      const { reset: s, invoke_onerror: l } = this.#m(i);
      l(), n && (this.#l = this.#y(() => {
        try {
          return pe(() => {
            var a = (
              /** @type {Effect} */
              O
            );
            a.b = this, a.f |= vn, n(
              this.#t,
              () => i,
              () => s
            );
          });
        } catch (a) {
          return Me(
            a,
            /** @type {Effect} */
            this.#r.parent
          ), null;
        }
      }));
    };
    Ie(() => {
      var i;
      try {
        i = this.transform_error(t);
      } catch (s) {
        Me(s, this.#r && this.#r.parent);
        return;
      }
      i !== null && typeof i == "object" && typeof /** @type {any} */
      i.then == "function" ? i.then(
        r,
        /** @param {unknown} e */
        (s) => Me(s, this.#r && this.#r.parent)
      ) : r(i);
    });
  }
}
function H(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[gn] ??= e.nodeValue) && (e[gn] = n, e.nodeValue = `${n}`);
}
function ms(e, t) {
  return ws(e, t);
}
const It = /* @__PURE__ */ new Map();
function ws(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: l = !0, transformError: a }) {
  Zi();
  var o = void 0, u = ns(() => {
    var c = n ?? t.appendChild(qe());
    ps(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (v) => {
        Rt({});
        var p = (
          /** @type {ComponentContext} */
          ee
        );
        s && (p.c = s), i && (r.$$events = i), o = e(v, r) || Mn(), Nt();
      },
      a
    );
    var d = /* @__PURE__ */ new Set(), h = (v) => {
      for (var p = 0; p < v.length; p++) {
        var C = v[p];
        if (!d.has(C)) {
          d.add(C);
          var _ = fs(C);
          for (const D of [t, document]) {
            var g = It.get(D);
            g === void 0 && (g = /* @__PURE__ */ new Map(), It.set(D, g));
            var j = g.get(C);
            j === void 0 ? (D.addEventListener(C, Sn, { passive: _ }), g.set(C, 1)) : g.set(C, j + 1);
          }
        }
      }
    };
    return h(Jt(Gr)), xn.add(h), () => {
      for (var v of d)
        for (const _ of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            It.get(_)
          ), C = (
            /** @type {number} */
            p.get(v)
          );
          --C == 0 ? (_.removeEventListener(v, Sn), p.delete(v), p.size === 0 && It.delete(_)) : p.set(v, C);
        }
      xn.delete(h), c !== n && c.parentNode?.removeChild(c);
    };
  });
  return bs.set(o, u), o;
}
let bs = /* @__PURE__ */ new WeakMap();
class Kr {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #a = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #e = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #r = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#r = n;
  }
  /**
   * @param {Batch} batch
   */
  #s = (t) => {
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#a.get(n);
      if (r)
        Gt(r), this.#o.delete(n);
      else {
        var i = this.#e.get(n);
        i && (Gt(i.effect), this.#a.set(n, i.effect), this.#e.delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
      }
      for (const [s, l] of this.#t) {
        if (this.#t.delete(s), s === t)
          break;
        const a = this.#e.get(l);
        a && (ce(a.effect), this.#e.delete(l));
      }
      for (const [s, l] of this.#a) {
        if (s === n || this.#o.has(s)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(s)) {
            var u = document.createDocumentFragment();
            jn(l, u), u.append(qe()), this.#e.set(s, { effect: l, fragment: u });
          } else
            ce(l);
          this.#o.delete(s), this.#a.delete(s);
        };
        this.#r || !r ? (this.#o.add(s), et(l, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #n = (t) => {
    this.#t.delete(t);
    const n = Array.from(this.#t.values());
    for (const [r, i] of this.#e)
      n.includes(r) || (ce(i.effect), this.#e.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      T
    ), i = Rr();
    if (n && !this.#a.has(t) && !this.#e.has(t))
      if (i) {
        var s = document.createDocumentFragment(), l = qe();
        s.append(l), this.#e.set(t, {
          effect: pe(() => n(l)),
          fragment: s
        });
      } else
        this.#a.set(
          t,
          pe(() => n(this.anchor))
        );
    if (this.#t.set(r, t), i) {
      for (const [a, o] of this.#a)
        a === t ? r.unskip_effect(o) : r.skip_effect(o);
      for (const [a, o] of this.#e)
        a === t ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
      r.oncommit(this.#s), r.ondiscard(this.#n);
    } else
      this.#s(r);
  }
}
function xe(e, t, n = !1) {
  var r = new Kr(e), i = n ? ut : 0;
  function s(l, a) {
    r.ensure(l, a);
  }
  Qt(() => {
    var l = !1;
    t((a, o = 0) => {
      l = !0, s(o, a);
    }), l || s(-1, null);
  }, i);
}
const ys = /* @__PURE__ */ Symbol("NaN");
function Es(e, t, n) {
  var r = new Kr(e);
  Qt(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    ys), r.ensure(i, n);
  });
}
function Jn(e, t) {
  return t;
}
function xs(e, t, n) {
  for (var r = [], i = t.length, s, l = t.length, a = 0; a < i; a++) {
    let d = t[a];
    et(
      d,
      () => {
        if (s) {
          if (s.pending.delete(d), s.done.add(d), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Tn(e, Jt(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var o = r.length === 0 && n !== null && e.pending.size === 0;
    if (o) {
      var u = (
        /** @type {Element} */
        n
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      Qi(c), c.append(u), e.items.clear();
    }
    Tn(e, t, !o);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function Tn(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const l of e.pending.values())
      for (const a of l)
        r.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r?.has(s)) {
      s.f |= Re;
      const l = document.createDocumentFragment();
      jn(s, l);
    } else
      ce(t[i], n);
  }
}
var Zn;
function nt(e, t, n, r, i, s = null) {
  var l = e, a = /* @__PURE__ */ new Map(), o = (t & ur) !== 0;
  if (o) {
    var u = (
      /** @type {Element} */
      e
    );
    l = u.appendChild(qe());
  }
  var c = null, d = /* @__PURE__ */ Yi(() => {
    var D = n();
    return (
      /** @type {V[]} */
      rr(D) ? D : D == null ? [] : Jt(D)
    );
  }), h, v = /* @__PURE__ */ new Map(), p = !0;
  function C(D) {
    (j.effect.f & ue) === 0 && (j.pending.delete(D), j.fallback = c, Ss(j, h, l, t, r), c !== null && (h.length === 0 ? (c.f & Re) === 0 ? Gt(c) : (c.f ^= Re, xt(c, null, l)) : et(c, () => {
      c = null;
    })));
  }
  function _(D) {
    j.pending.delete(D);
  }
  var g = Qt(() => {
    h = /** @type {V[]} */
    f(d);
    for (var D = h.length, Y = /* @__PURE__ */ new Set(), te = (
      /** @type {Batch} */
      T
    ), le = Rr(), w = 0; w < D; w += 1) {
      var m = h[w], N = r(m, w), A = p ? null : a.get(N);
      A ? (A.v && dt(A.v, m), A.i && dt(A.i, w), le && te.unskip_effect(A.e)) : (A = Ts(
        a,
        p ? l : Zn ??= qe(),
        m,
        N,
        w,
        i,
        t,
        n
      ), p || (A.e.f |= Re), a.set(N, A)), Y.add(N);
    }
    if (D === 0 && s && !c && (p ? c = pe(() => s(l)) : (c = pe(() => s(Zn ??= qe())), c.f |= Re)), D > Y.size && Ai(), !p)
      if (v.set(te, Y), le) {
        for (const [P, R] of a)
          Y.has(P) || te.skip_effect(R.e);
        te.oncommit(C), te.ondiscard(_);
      } else
        C(te);
    f(d);
  }), j = { effect: g, items: a, pending: v, outrogroups: null, fallback: c };
  p = !1;
}
function bt(e) {
  for (; e !== null && (e.f & me) === 0; )
    e = e.next;
  return e;
}
function Ss(e, t, n, r, i) {
  var s = (r & mi) !== 0, l = t.length, a = e.items, o = bt(e.effect.first), u, c = null, d, h = [], v = [], p, C, _, g;
  if (s)
    for (g = 0; g < l; g += 1)
      p = t[g], C = i(p, g), _ = /** @type {EachItem} */
      a.get(C).e, (_.f & Re) === 0 && (_.nodes?.a?.measure(), (d ??= /* @__PURE__ */ new Set()).add(_));
  for (g = 0; g < l; g += 1) {
    if (p = t[g], C = i(p, g), _ = /** @type {EachItem} */
    a.get(C).e, e.outrogroups !== null)
      for (const A of e.outrogroups)
        A.pending.delete(_), A.done.delete(_);
    if ((_.f & ae) !== 0 && (Gt(_), s && (_.nodes?.a?.unfix(), (d ??= /* @__PURE__ */ new Set()).delete(_))), (_.f & Re) !== 0)
      if (_.f ^= Re, _ === o)
        xt(_, null, n);
      else {
        var j = c ? c.next : o;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Ye(e, c, _), Ye(e, _, j), xt(_, j, n), c = _, h = [], v = [], o = bt(c.next);
        continue;
      }
    if (_ !== o) {
      if (u !== void 0 && u.has(_)) {
        if (h.length < v.length) {
          var D = v[0], Y;
          c = D.prev;
          var te = h[0], le = h[h.length - 1];
          for (Y = 0; Y < h.length; Y += 1)
            xt(h[Y], D, n);
          for (Y = 0; Y < v.length; Y += 1)
            u.delete(v[Y]);
          Ye(e, te.prev, le.next), Ye(e, c, te), Ye(e, le, D), o = D, c = le, g -= 1, h = [], v = [];
        } else
          u.delete(_), xt(_, o, n), Ye(e, _.prev, _.next), Ye(e, _, c === null ? e.effect.first : c.next), Ye(e, c, _), c = _;
        continue;
      }
      for (h = [], v = []; o !== null && o !== _; )
        (u ??= /* @__PURE__ */ new Set()).add(o), v.push(o), o = bt(o.next);
      if (o === null)
        continue;
    }
    (_.f & Re) === 0 && h.push(_), c = _, o = bt(_.next);
  }
  if (e.outrogroups !== null) {
    for (const A of e.outrogroups)
      A.pending.size === 0 && (Tn(e, Jt(A.done)), e.outrogroups?.delete(A));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || u !== void 0) {
    var w = [];
    if (u !== void 0)
      for (_ of u)
        (_.f & ae) === 0 && w.push(_);
    for (; o !== null; )
      (o.f & ae) === 0 && o !== e.fallback && w.push(o), o = bt(o.next);
    var m = w.length;
    if (m > 0) {
      var N = (r & ur) !== 0 && l === 0 ? n : null;
      if (s) {
        for (g = 0; g < m; g += 1)
          w[g].nodes?.a?.measure();
        for (g = 0; g < m; g += 1)
          w[g].nodes?.a?.fix();
      }
      xs(e, w, N);
    }
  }
  s && Ie(() => {
    if (d !== void 0)
      for (_ of d)
        _.nodes?.a?.apply();
  });
}
function Ts(e, t, n, r, i, s, l, a) {
  var o = (l & pi) !== 0 ? (l & wi) === 0 ? /* @__PURE__ */ Ki(n, !1, !1) : it(n) : null, u = (l & gi) !== 0 ? it(i) : null;
  return {
    v: o,
    i: u,
    e: pe(() => (s(t, o ?? n, u ?? i, a), () => {
      e.delete(r);
    }))
  };
}
function xt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Re) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ot(r)
      );
      if (s.before(r), r === i)
        return;
      r = l;
    }
}
function Ye(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Jr(e, t, n = !1, r = !1, i = !1, s = !1) {
  var l = e, a = "";
  if (n)
    var o = (
      /** @type {Element} */
      e
    );
  B(() => {
    var u = (
      /** @type {Effect} */
      O
    );
    if (a !== (a = t() ?? "")) {
      if (n) {
        u.nodes = null, o.innerHTML = /** @type {string} */
        a, a !== "" && vt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ He(o),
          /** @type {TemplateNode} */
          o.lastChild
        );
        return;
      }
      if (u.nodes !== null && (Fr(
        u.nodes.start,
        /** @type {TemplateNode} */
        u.nodes.end
      ), u.nodes = null), a !== "") {
        var c = r ? Ei : i ? xi : void 0, d = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          Nr(r ? "svg" : i ? "math" : "template", c)
        );
        d.innerHTML = /** @type {any} */
        a;
        var h = r || i ? d : (
          /** @type {HTMLTemplateElement} */
          d.content
        );
        if (vt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ He(h),
          /** @type {TemplateNode} */
          h.lastChild
        ), r || i)
          for (; /* @__PURE__ */ He(h); )
            l.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ He(h)
            );
        else
          l.before(h);
      }
    }
  });
}
function Qn(e, t, n) {
  Pr(() => {
    var r = Ke(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var i = !1, s = (
        /** @type {any} */
        {}
      );
      Lt(() => {
        var l = n();
        ls(l), i && hr(s, l) && (s = l, r.update(l));
      }), i = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Zr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Zr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Cs() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Zr(e)) && (r && (r += " "), r += t);
  return r;
}
function As(e) {
  return typeof e == "object" ? Cs(e) : e ?? "";
}
const $n = [...` 	
\r\f \v\uFEFF`];
function ks(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, l = 0; (l = r.indexOf(i, l)) >= 0; ) {
          var a = l + s;
          (l === 0 || $n.includes(r[l - 1])) && (a === r.length || $n.includes(r[a])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(a + 1) : l = a;
        }
  }
  return r === "" ? null : r;
}
function er(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i of Object.keys(e)) {
    var s = e[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function Ms(e, t) {
  if (t) {
    var n = "", r, i;
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += er(r)), i && (n += er(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function _t(e, t, n, r, i, s) {
  var l = (
    /** @type {any} */
    e[_n]
  );
  if (l !== n || l === void 0) {
    var a = ks(n, r, s);
    a == null ? e.removeAttribute("class") : e.className = a, e[_n] = n;
  } else if (s && i !== s)
    for (var o in s) {
      var u = !!s[o];
      (i == null || u !== !!i[o]) && e.classList.toggle(o, u);
    }
  return s;
}
function un(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function tr(e, t, n, r) {
  var i = (
    /** @type {any} */
    e[pn]
  );
  if (i !== t) {
    var s = Ms(t, r);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e[pn] = t;
  } else r && (Array.isArray(r) ? (un(e, n?.[0], r[0]), un(e, n?.[1], r[1], "important")) : un(e, n, r));
  return r;
}
const Rs = /* @__PURE__ */ Symbol("is custom element"), Ns = /* @__PURE__ */ Symbol("is html");
function ie(e, t, n, r) {
  var i = Os(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[_i] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ls(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function Os(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[fr] ??= {
      [Rs]: e.nodeName.includes("-"),
      [Ns]: e.namespaceURI === cr
    }
  );
}
var nr = /* @__PURE__ */ new Map();
function Ls(e) {
  var t = e.getAttribute("is") || e.nodeName, n = nr.get(t);
  if (n) return n;
  nr.set(t, n = /* @__PURE__ */ new Set());
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = sr(i);
    for (var l in r)
      r[l].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && n.add(l);
    i = An(i);
  }
  return n;
}
function Qr(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Hi(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = cn(e) ? dn(s) : s, n(s), T !== null && r.add(T), await Wt(), s !== (s = t())) {
      var l = e.selectionStart, a = e.selectionEnd, o = e.value.length;
      if (e.value = s ?? "", a !== null) {
        var u = e.value.length;
        l === a && a === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = l, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ke(t) == null && e.value && (n(cn(e) ? dn(e.value) : e.value), T !== null && r.add(T)), Lt(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        T
      );
      if (r.has(s))
        return;
    }
    cn(e) && i === dn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function cn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function dn(e) {
  return e === "" ? null : +e;
}
function hn(e, t) {
  return e === t || e?.[ot] === t;
}
function Cn(e = Mn(), t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    ee.r
  ), s = (
    /** @type {Effect} */
    O
  );
  return Pr(() => {
    var l, a;
    return Lt(() => {
      l = a, a = [], Ke(() => {
        hn(n(...a), e) || (t(e, ...a), l && hn(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let o = s;
      for (; o !== i && o.parent !== null && o.parent.f & Ut; )
        o = o.parent;
      const u = () => {
        a && hn(n(...a), e) && t(null, ...a);
      }, c = o.teardown;
      o.teardown = () => {
        u(), c?.();
      };
    };
  }), e;
}
function Ps(e, t, n, r, i) {
  var s = () => {
    r(n[e]);
  };
  n.addEventListener(t, s), i ? Lt(() => {
    n[e] = i();
  }) : s(), (n === document.body || n === window || n === document) && Fn(() => {
    n.removeEventListener(t, s);
  });
}
function Ds(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, l = () => (s && (s = !1, i = /** @type {V} */
  r), i), a;
  a = /** @type {V} */
  e[t], a === void 0 && r !== void 0 && (a = l());
  var o;
  return o = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? l() : (s = !0, u);
  }, o;
}
function $r(e) {
  ee === null && _r(), Or(() => {
    const t = Ke(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ei(e) {
  ee === null && _r(), $r(() => () => Ke(e));
}
const Fs = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Fs);
async function rt(e, t) {
  const n = await fetch(`${window.init.urlRoot}/api/v1${e}`, {
    credentials: "same-origin",
    method: t ? "POST" : "GET",
    headers: { "Content-Type": "application/json", "CSRF-Token": window.init.csrfNonce },
    ...t ? { body: JSON.stringify(t) } : {}
  });
  if (n.status === 401) throw new Error("Please log in to continue.");
  let r;
  try {
    r = await n.json();
  } catch {
    throw new Error("The server did not return a valid response. Please try again.");
  }
  if (!n.ok || r.success === !1) throw new Error(r.message || (typeof r.errors == "string" ? r.errors : "This request is unavailable. Please try again."));
  return r.data;
}
var Is = /* @__PURE__ */ Z('<th><button type="button" class="column-label"> <span class="column-sort" aria-hidden="true"> </span></button><button type="button" class="column-resize"></button></th>'), js = /* @__PURE__ */ Z('<i role="img"></i>'), Hs = /* @__PURE__ */ Z('<button class="open-challenge"> </button>'), qs = /* @__PURE__ */ Z("<td><!></td>"), Bs = /* @__PURE__ */ Z("<tr></tr>"), Us = /* @__PURE__ */ Z('<div class="message-list"><table><thead><tr></tr></thead><tbody id="challenge-rows"></tbody></table></div>');
function Ys(e, t) {
  Rt(t, !0);
  let n = Ds(t, "hidden", 3, !1);
  const r = ["status", "subject", "category", "points"], i = {
    status: "Status",
    subject: "Subject",
    category: "Category",
    points: "Points"
  }, s = { status: 55, subject: 130, category: 90, points: 65 }, l = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
  let a = /* @__PURE__ */ L(je([...r])), o = /* @__PURE__ */ L(null), u, c = /* @__PURE__ */ L(je({
    key: Ke(() => t.defaultOrder) === "name" ? "subject" : "id",
    direction: 1
  })), d = /* @__PURE__ */ L(window.innerWidth <= 760), h = /* @__PURE__ */ Ee(() => {
    const w = (m) => ({
      status: Number(m.solved_by_me),
      subject: m.name,
      category: m.category,
      points: m.value,
      id: m.id
    })[f(c).key];
    return [...t.challenges].sort((m, N) => (["id", "points", "status"].includes(f(c).key) ? w(m) - w(N) : l.compare(w(m), w(N))) * f(c).direction || m.id - N.id);
  }), v = /* @__PURE__ */ Ee(() => f(o) ? f(a).filter((w) => !f(d) || w !== "category").reduce((w, m) => w + f(o)[m], 0) : null);
  function p() {
    y(
      o,
      Object.fromEntries([...u.tHead.rows[0].cells].map((w) => [
        w.dataset.column,
        w.getBoundingClientRect().width || s[w.dataset.column]
      ])),
      !0
    );
  }
  async function C(w, m) {
    if (!m || m === w) return;
    f(o) || p();
    const N = new Map([...u.querySelectorAll("th,td")].map((R) => [R, R.getBoundingClientRect().left])), A = f(a).indexOf(m), P = f(a).filter((R) => R !== w);
    P.splice(A, 0, w), y(a, P, !0), await Wt(), matchMedia("(prefers-reduced-motion: reduce)").matches || N.forEach((R, Q) => {
      const $ = R - Q.getBoundingClientRect().left;
      $ && Q.animate(
        [
          { transform: `translateX(${$}px)` },
          { transform: "translateX(0)" }
        ],
        { duration: 180, easing: "ease-out" }
      );
    });
  }
  function _(w, { key: m, resize: N = !1 }) {
    const A = w.closest("th");
    let P, R, Q = !1;
    function $() {
      R?.remove(), R = null, P = null, A.classList.remove("column-dragging"), u.querySelectorAll(".column-drop-before,.column-drop-after").forEach((k) => k.classList.remove("column-drop-before", "column-drop-after"));
    }
    function be(k) {
      k.button !== 0 || !k.isPrimary || (Q = !1, p(), P = {
        x: k.clientX,
        y: k.clientY,
        offset: k.clientX - A.getBoundingClientRect().left,
        width: f(o)[m]
      }, w.setPointerCapture(k.pointerId));
    }
    function de(k) {
      if (P) {
        if (N) {
          f(o)[m] = Math.max(s[m], P.width + k.clientX - P.x);
          return;
        }
        if (!R && Math.hypot(k.clientX - P.x, k.clientY - P.y) > 5 && (Q = !0, R = document.createElement("div"), R.className = "column-drag-ghost", R.textContent = i[m], R.setAttribute("aria-hidden", "true"), R.style.width = `${P.width}px`, document.body.append(R), A.classList.add("column-dragging")), R) {
          R.style.left = `${k.clientX - P.offset}px`, R.style.top = `${k.clientY + 12}px`, u.querySelectorAll(".column-drop-before,.column-drop-after").forEach((E) => E.classList.remove("column-drop-before", "column-drop-after"));
          const W = document.elementFromPoint(k.clientX, k.clientY)?.closest("th");
          W?.parentElement === A.parentElement && W !== A && W.classList.add(f(a).indexOf(m) < f(a).indexOf(W.dataset.column) ? "column-drop-after" : "column-drop-before");
        }
      }
    }
    function he(k) {
      if (!P) return;
      const W = document.elementFromPoint(k.clientX, k.clientY)?.closest("th"), E = !!R;
      $(), w.hasPointerCapture(k.pointerId) && w.releasePointerCapture(k.pointerId), !N && E && W?.parentElement === A.parentElement && C(m, W.dataset.column), w.focus();
    }
    function V(k) {
      if (!N) {
        if (Q && k.detail !== 0) {
          Q = !1;
          return;
        }
        y(
          c,
          {
            key: m,
            direction: f(c).key === m ? -f(c).direction : 1
          },
          !0
        );
      }
    }
    function X(k) {
      if (!["ArrowLeft", "ArrowRight"].includes(k.key) || !N && !k.altKey) return;
      k.preventDefault();
      const W = k.key === "ArrowRight" ? 1 : -1;
      if (N)
        p(), f(o)[m] = Math.max(s[m], f(o)[m] + W * 10);
      else {
        const E = f(a).filter((x) => !f(d) || x !== "category");
        C(m, E[E.indexOf(m) + W]);
      }
    }
    const Pe = {
      pointerdown: be,
      pointermove: de,
      pointerup: he,
      pointercancel: $,
      lostpointercapture: $,
      click: V,
      keydown: X
    };
    return Object.entries(Pe).forEach(([k, W]) => w.addEventListener(k, W)), {
      destroy() {
        $(), Object.entries(Pe).forEach(([k, W]) => w.removeEventListener(k, W));
      }
    };
  }
  var g = Us();
  Hn("resize", yn, () => y(d, window.innerWidth <= 760));
  var j = I(g);
  let D;
  var Y = I(j), te = I(Y);
  nt(te, 20, () => f(a), (w) => w, (w, m) => {
    var N = Is();
    let A;
    var P = I(N), R = I(P), Q = S(R), $ = se(Q, !0);
    Qn(P, (de, he) => _?.(de, he), () => ({ key: m }));
    var be = S(P);
    Qn(be, (de, he) => _?.(de, he), () => ({ key: m, resize: !0 })), B(() => {
      ie(N, "data-column", m), ie(N, "aria-sort", f(c).key === m ? f(c).direction === 1 ? "ascending" : "descending" : "none"), A = tr(N, "", A, { width: f(o) ? `${f(o)[m]}px` : void 0 }), ie(P, "aria-label", `${i[m]} column. Click to sort. Drag or use Alt and arrow keys to move.`), H(R, i[m]), H($, f(c).key === m ? f(c).direction === 1 ? "▲" : "▼" : ""), ie(be, "aria-label", `Resize ${i[m]} column`);
    }), F(w, N);
  });
  var le = S(Y);
  nt(le, 21, () => f(h), (w) => w.id, (w, m) => {
    var N = Bs();
    nt(N, 20, () => f(a), (A) => A, (A, P) => {
      var R = qs(), Q = I(R);
      {
        var $ = (V) => {
          var X = js();
          B(() => {
            _t(X, 1, `fas fa-envelope${f(m).solved_by_me ? "-open" : ""}`), ie(X, "aria-label", f(m).solved_by_me ? "Solved" : "Unsolved");
          }), F(V, X);
        }, be = (V) => {
          var X = Hs(), Pe = se(X, !0);
          B(() => {
            ie(X, "data-id", f(m).id), H(Pe, f(m).name);
          }), Je("click", X, () => t.onopen(f(m).id)), F(V, X);
        }, de = (V) => {
          var X = Xe();
          B(() => H(X, f(m).category)), F(V, X);
        }, he = (V) => {
          var X = Xe();
          B(() => H(X, f(m).value)), F(V, X);
        };
        xe(Q, (V) => {
          P === "status" ? V($) : P === "subject" ? V(be, 1) : P === "category" ? V(de, 2) : V(he, -1);
        });
      }
      B(() => ie(R, "data-column", P)), F(A, R);
    }), B(() => _t(N, 1, As(f(m).solved_by_me ? "read" : "unread"))), F(w, N);
  }), Cn(j, (w) => u = w, () => u), B(() => {
    ie(g, "hidden", n()), D = tr(j, "", D, {
      width: f(v) ? `${f(v)}px` : void 0
    });
  }), F(e, g), Nt();
}
Wr(["click"]);
var Vs = /* @__PURE__ */ Z('<details><summary> </summary> <div class="hint-content"><!></div></details>');
function zs(e, t) {
  Rt(t, !0);
  let n = /* @__PURE__ */ L(!1), r = /* @__PURE__ */ L(!1), i = /* @__PURE__ */ L(null), s = /* @__PURE__ */ L("");
  async function l(_) {
    if (y(n, _.currentTarget.open, !0), !(!f(n) || f(r) || f(i))) {
      y(r, !0), y(s, "");
      try {
        let g = await rt(`/hints/${t.hint.id}`);
        if (!g.content) {
          if (g.cost > 0 && !confirm(`Unlock this hint for ${g.cost} points?`)) {
            y(n, !1);
            return;
          }
          await rt("/unlocks", { target: t.hint.id, type: "hints" }), g = await rt(`/hints/${t.hint.id}`);
        }
        y(i, g, !0);
      } catch (g) {
        y(s, g.message, !0);
      } finally {
        y(r, !1);
      }
    }
  }
  var a = Vs(), o = I(a), u = se(o), c = S(o, 2), d = I(c);
  {
    var h = (_) => {
      var g = Xe("Loading hint...");
      F(_, g);
    }, v = (_) => {
      var g = Xe();
      B(() => H(g, f(s))), F(_, g);
    }, p = (_) => {
      var g = Kt(), j = Ve(g);
      Jr(j, () => f(i).html), F(_, g);
    }, C = (_) => {
      var g = Xe();
      B(() => H(g, f(i).content)), F(_, g);
    };
    xe(d, (_) => {
      f(r) ? _(h) : f(s) ? _(v, 1) : f(i)?.html ? _(p, 2) : f(i) && _(C, 3);
    });
  }
  B(() => {
    ie(a, "data-hint", t.hint.id), H(u, `${(t.hint.title || "View hint") ?? ""}${t.hint.cost ? ` (${t.hint.cost} points)` : ""}`);
  }), Hn("toggle", a, l), Ps("open", "toggle", a, (_) => y(n, _), () => f(n)), F(e, a), Nt();
}
var Xs = /* @__PURE__ */ Z('<span class="challenge-tag"> </span>'), Gs = /* @__PURE__ */ Z('<div class="challenge-tags"><span>Tags:</span><!></div>'), Ws = /* @__PURE__ */ Z("<div> </div>"), Ks = /* @__PURE__ */ Z("<p>Connection: <code> </code></p>"), Js = /* @__PURE__ */ Z('<a download=""><i class="fas fa-paperclip" aria-hidden="true"></i> </a>'), Zs = /* @__PURE__ */ Z('<i aria-hidden="true"></i><strong> </strong>', 1), Qs = /* @__PURE__ */ Z('<p>Attempts: <span id="attempts"> </span> </p>'), $s = /* @__PURE__ */ Z('<header class="message-header"><h2> </h2> <div> </div> <!> <!></header> <div class="message-body"><!></div> <!> <div class="attachments"></div> <div id="hints"></div> <form class="reply"><label for="flag">Reply with flag</label> <input id="flag" name="submission" autocomplete="off" required=""/> <button type="submit">Send</button> <div id="submission-status" role="status" aria-atomic="true"><!></div> <!></form>', 1);
function ea(e, t) {
  Rt(t, !0);
  let n = /* @__PURE__ */ L(""), r = /* @__PURE__ */ L(!1), i = /* @__PURE__ */ L(""), s = /* @__PURE__ */ L(""), l = /* @__PURE__ */ L(je(Ke(() => t.challenge.attempts))), a = !0, o = /* @__PURE__ */ Ee(() => f(i) || (t.challenge.solved_by_me ? "Correct flag received." : "")), u = /* @__PURE__ */ Ee(() => f(s) || (f(r) ? "pending" : t.challenge.solved_by_me ? "success" : ""));
  ei(() => {
    a = !1;
  });
  const c = /* @__PURE__ */ Ee(() => new DOMParser().parseFromString(t.challenge.view || "", "text/html").querySelector(".challenge-desc")?.innerHTML);
  function d(E) {
    const x = E.split("/").pop().split("?")[0];
    try {
      return decodeURIComponent(x);
    } catch {
      return x;
    }
  }
  async function h(E) {
    if (E.preventDefault(), !f(r)) {
      y(r, !0), y(i, "Sending..."), y(s, "");
      try {
        const x = await rt("/challenges/attempt", { challenge_id: t.challenge.id, submission: f(n) });
        if (!a) return;
        y(i, x.message, !0);
        const z = t.challenge.type === "delayed" && x.status === "incorrect" && /^Your submission has been taken(?:\.|$)/.test(x.message || "");
        if (y(s, ["correct", "already_solved"].includes(x.status) ? "success" : z ? "info" : "error", !0), x.status === "authentication_required" && (location.href = `${window.init.urlRoot}/login?next=${encodeURIComponent(location.pathname + location.hash)}`), x.status === "correct" && y(n, ""), t.challenge.max_attempts) {
          const oe = await rt(`/challenges/${t.challenge.id}`);
          if (!a) return;
          y(l, oe.attempts, !0);
        }
        await t.onattempt(x);
      } catch (x) {
        a && (y(i, x.message, !0), y(s, "error"));
      } finally {
        y(r, !1);
      }
    }
  }
  var v = $s(), p = Ve(v), C = I(p), _ = se(C, !0), g = S(C, 2), j = se(g), D = S(g, 2);
  {
    var Y = (E) => {
      var x = Gs(), z = S(I(x));
      nt(z, 17, () => t.challenge.tags, Jn, (oe, ye) => {
        var wt = Xs(), $t = se(wt, !0);
        B(() => H($t, typeof f(ye) == "string" ? f(ye) : f(ye).value)), F(oe, wt);
      }), F(E, x);
    };
    xe(D, (E) => {
      t.challenge.tags?.length && E(Y);
    });
  }
  var te = S(D, 2);
  {
    var le = (E) => {
      var x = Ws(), z = se(x);
      B(() => H(z, `From: ${t.challenge.attribution ?? ""}`)), F(E, x);
    };
    xe(te, (E) => {
      t.challenge.attribution && E(le);
    });
  }
  var w = S(p, 2), m = I(w);
  {
    var N = (E) => {
      var x = Kt(), z = Ve(x);
      Jr(z, () => f(c)), F(E, x);
    }, A = (E) => {
      var x = Xe();
      B(() => H(x, t.challenge.description)), F(E, x);
    };
    xe(m, (E) => {
      f(c) ? E(N) : E(A, -1);
    });
  }
  var P = S(w, 2);
  {
    var R = (E) => {
      var x = Ks(), z = S(I(x)), oe = se(z, !0);
      B(() => H(oe, t.challenge.connection_info)), F(E, x);
    };
    xe(P, (E) => {
      t.challenge.connection_info && E(R);
    });
  }
  var Q = S(P, 2);
  nt(Q, 21, () => t.challenge.files || [], Jn, (E, x) => {
    var z = Js(), oe = S(I(z));
    B(
      (ye) => {
        ie(z, "href", f(x)), H(oe, ` ${ye ?? ""}`);
      },
      [() => d(f(x))]
    ), F(E, z);
  });
  var $ = S(Q, 2);
  nt($, 21, () => t.challenge.hints || [], (E) => E.id, (E, x) => {
    zs(E, {
      get hint() {
        return f(x);
      }
    });
  });
  var be = S($, 2), de = S(I(be), 2), he = S(de, 2), V = S(he, 2), X = I(V);
  {
    var Pe = (E) => {
      var x = Zs(), z = Ve(x), oe = S(z), ye = se(oe, !0);
      B(() => {
        _t(z, 1, `fas ${f(u) === "success" ? "fa-check-circle" : f(u) === "error" ? "fa-times-circle" : f(u) === "info" ? "fa-info-circle" : "fa-paper-plane"}`), H(ye, f(o));
      }), F(E, x);
    };
    xe(X, (E) => {
      f(o) && E(Pe);
    });
  }
  var k = S(V, 2);
  {
    var W = (E) => {
      var x = Qs(), z = S(I(x)), oe = se(z, !0), ye = S(z);
      B(() => {
        H(oe, f(l)), H(ye, ` / ${t.challenge.max_attempts ?? ""}`);
      }), F(E, x);
    };
    xe(k, (E) => {
      t.challenge.max_attempts && E(W);
    });
  }
  B(() => {
    H(_, t.challenge.name), H(j, `Category: ${t.challenge.category ?? ""}   Points: ${t.challenge.value ?? ""}`), he.disabled = f(r), _t(V, 1, `submission-feedback ${f(u)}`), ie(V, "hidden", !f(o));
  }), Hn("submit", be, h), Qr(de, () => f(n), (E) => y(n, E)), F(e, v), Nt();
}
var ta = /* @__PURE__ */ Z('<hr class="folder-divider"/>'), na = /* @__PURE__ */ Z('<!> <button type="button"><i aria-hidden="true"></i> </button>', 1), ra = /* @__PURE__ */ Z('<div class="express-toolbar"><button id="all-challenges" type="button"><i class="fas fa-inbox" aria-hidden="true"></i> All Challenges</button> <button id="help-button" type="button"><i class="fas fa-question-circle" aria-hidden="true"></i> Help</button> <label for="search">Search</label><div class="express-search"><i class="fas fa-search" aria-hidden="true"></i><input id="search" type="search" placeholder="Find a challenge"/></div></div> <div class="express-address">Address <span id="address"> </span></div> <div class="express-workspace"><aside class="express-sidebar" aria-label="Challenge categories"><h2>Folders</h2> <div id="folders"></div> <p id="progress" aria-live="polite"> </p></aside> <section class="express-main" aria-label="Challenges"><h1 id="folder-heading"> </h1> <p id="board-status" role="status"> </p> <button id="retry" type="button">Try again</button> <!> <section id="reader" aria-label="Challenge message"><button id="back" type="button">Back to challenges</button> <div id="message"><!></div></section></section></div> <dialog id="help-dialog"><h2> </h2> <p>Open a challenge to read its message. Reply with the flag to solve it.</p> <p>Unsolved challenges appear as unread mail. Solved challenges appear as read mail.</p> <p>Drag column headers to reorder them, or their edges to resize. With a header focused, use Alt + Left/Right to reorder.</p> <form method="dialog"><button>Close</button></form></dialog>', 1);
function ia(e, t) {
  Rt(t, !0);
  let n = /* @__PURE__ */ L(je([])), r = /* @__PURE__ */ L("All Challenges"), i = /* @__PURE__ */ L("all"), s = /* @__PURE__ */ L(""), l = /* @__PURE__ */ L(null), a = /* @__PURE__ */ L(!1), o = /* @__PURE__ */ L(null), u = /* @__PURE__ */ L(""), c = /* @__PURE__ */ L(!0), d = /* @__PURE__ */ L(""), h = /* @__PURE__ */ L(""), v = 0, p = 0, C, _, g = /* @__PURE__ */ Ee(() => f(n).filter((b) => !b.solved_by_me)), j = /* @__PURE__ */ Ee(() => [...new Set(f(n).map((b) => b.category))]), D = /* @__PURE__ */ Ee(() => f(i) === "category" ? f(n).filter((b) => b.category === f(r)) : f(n)), Y = /* @__PURE__ */ Ee(() => [
    {
      name: "All Challenges",
      type: "all",
      count: f(g).length
    },
    {
      name: "Unsolved Challenges",
      type: "unread",
      count: f(g).length
    },
    ...f(j).map((b) => ({
      name: b,
      type: "category",
      count: f(g).filter((q) => q.category === b).length
    }))
  ]), te = /* @__PURE__ */ Ee(() => f(n).filter((b) => (f(i) === "all" || (f(i) === "unread" ? !b.solved_by_me : b.category === f(r))) && `${b.name} ${b.category}`.toLowerCase().includes(f(s).toLowerCase().trim())));
  Or(() => {
    const b = `${t.config.appName} - ${f(r)}`;
    document.title = b, document.getElementById("window-title").textContent = b;
  });
  async function le() {
    const b = ++p;
    y(c, !0), y(d, "");
    try {
      const q = await rt("/challenges");
      b === p && y(n, q.sort((De, st) => De.id - st.id), !0);
    } catch (q) {
      b === p && y(d, q.message, !0);
    } finally {
      b === p && y(c, !1);
    }
  }
  async function w(b = !0) {
    v++, y(a, !1), y(o, null), y(u, ""), history.replaceState(null, "", location.pathname + location.search), await Wt(), b && document.querySelector(`.open-challenge[data-id="${f(l)}"]`)?.focus();
  }
  function m(b) {
    y(r, b.name, !0), y(i, b.type, !0), y(h, ""), w(!1);
  }
  async function N(b) {
    const q = ++v;
    y(l, b, !0), y(a, !0), y(o, null), y(u, ""), y(h, "");
    try {
      const De = await rt(`/challenges/${b}`);
      if (q !== v) return;
      y(o, De, !0), history.replaceState(null, "", `#challenge-${b}`), await Wt(), _?.focus();
    } catch (De) {
      q === v && y(u, De.message, !0);
    }
  }
  async function A(b) {
    const q = v;
    await le(), q === v && f(i) === "unread" && ["correct", "already_solved"].includes(b.status) && !f(d) && (await w(!1), y(h, "Challenge solved. Removed from Unsolved Challenges."), document.querySelector('#folders [data-view="unread"]')?.focus());
  }
  $r(() => {
    const b = location.hash.match(/-(\d+)$/);
    le().then(() => {
      b && v === 0 && N(Number(b[1]));
    });
  }), ei(() => {
    v++, p++;
  });
  var P = ra(), R = Ve(P), Q = I(R), $ = S(Q, 2), be = S($, 3), de = S(I(be)), he = S(R, 2), V = S(I(he)), X = se(V), Pe = S(he, 2), k = I(Pe), W = S(I(k), 2);
  nt(W, 23, () => f(Y), (b) => `${b.type}:${b.name}`, (b, q, De) => {
    var st = na(), Dt = Ve(st);
    {
      var nn = (sn) => {
        var li = ta();
        F(sn, li);
      };
      xe(Dt, (sn) => {
        f(De) === 2 && sn(nn);
      });
    }
    var re = S(Dt, 2);
    let ke;
    var Ft = I(re), rn = S(Ft);
    B(() => {
      ie(re, "data-view", f(q).type), ie(re, "data-folder", f(q).name), ke = _t(re, 1, "", null, ke, {
        active: f(i) === f(q).type && f(r) === f(q).name
      }), _t(Ft, 1, `fas fa-${f(q).type === "unread" ? "envelope" : "folder"}`), H(rn, `${f(q).name ?? ""}${f(q).type === "all" ? "" : ` (${f(q).count})`}`);
    }), Je("click", re, () => m(f(q))), F(b, st);
  });
  var E = S(W, 2), x = se(E), z = S(k, 2), oe = I(z), ye = se(oe, !0), wt = S(oe, 2), $t = se(wt, !0), en = S(wt, 2), qn = S(en, 2);
  {
    let b = /* @__PURE__ */ Ee(() => t.config.themeSettings?.challenge_order);
    Ys(qn, {
      get challenges() {
        return f(te);
      },
      get defaultOrder() {
        return f(b);
      },
      onopen: N,
      get hidden() {
        return f(a);
      }
    });
  }
  var Bn = S(qn, 2), tn = I(Bn);
  Cn(tn, (b) => _ = b, () => _);
  var ni = S(tn, 2), ri = I(ni);
  {
    var ii = (b) => {
      var q = Kt(), De = Ve(q);
      {
        var st = (re) => {
          var ke = Xe();
          B(() => H(ke, f(u))), F(re, ke);
        }, Dt = (re) => {
          var ke = Kt(), Ft = Ve(ke);
          Es(Ft, () => f(o).id, (rn) => {
            ea(rn, {
              get challenge() {
                return f(o);
              },
              onattempt: A
            });
          }), F(re, ke);
        }, nn = (re) => {
          var ke = Xe("Loading message...");
          F(re, ke);
        };
        xe(De, (re) => {
          f(u) ? re(st) : f(o) ? re(Dt, 1) : re(nn, -1);
        });
      }
      F(b, q);
    };
    xe(ri, (b) => {
      f(a) && b(ii);
    });
  }
  var Un = S(Pe, 2), si = I(Un), ai = se(si, !0);
  Cn(Un, (b) => C = b, () => C), B(
    (b) => {
      H(X, `Folders / ${f(r) ?? ""}`), H(x, `${b ?? ""} of ${f(D).length ?? ""} challenges solved`), H(ye, f(r)), H($t, f(d) || (f(c) ? "Loading challenges..." : f(h) || (f(te).length ? "" : "No challenges found."))), ie(en, "hidden", !f(d)), ie(Bn, "hidden", !f(a)), H(ai, t.config.appName);
    },
    [
      () => f(D).filter((b) => b.solved_by_me).length
    ]
  ), Je("click", Q, () => {
    y(s, ""), m(f(Y)[0]);
  }), Je("click", $, () => C.showModal()), Je("input", de, () => {
    y(h, ""), w(!1);
  }), Qr(de, () => f(s), (b) => y(s, b)), Je("click", en, le), Je("click", tn, () => w()), F(e, P), Nt();
}
Wr(["click", "input"]);
const ti = document.getElementById("challenge-app");
ti.replaceChildren();
ms(ia, { target: ti, props: { config: window.init } });
