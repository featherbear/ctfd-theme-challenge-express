var Cr = Array.isArray, Ra = Array.prototype.indexOf, mr = Array.prototype.includes, Ar = Array.from, Ln = Object.defineProperty, qt = Object.getOwnPropertyDescriptor, Mn = Object.getOwnPropertyDescriptors, Na = Object.prototype, Oa = Array.prototype, tn = Object.getPrototypeOf, pn = Object.isExtensible;
const Pa = () => {
};
function Ia(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Rn() {
  var t, e, r = new Promise((n, a) => {
    t = n, e = a;
  });
  return { promise: r, resolve: t, reject: e };
}
function Da(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const r = [];
  for (const n of t)
    if (r.push(n), r.length === e) break;
  return r;
}
const Pe = 2, Ht = 4, Tr = 8, Nn = 1 << 24, Xe = 16, We = 32, vt = 64, Hr = 128, rn = 256, Qe = 512, Ce = 1024, Ee = 2048, Ve = 4096, De = 8192, Fe = 16384, Gt = 32768, br = 1 << 25, zt = 65536, yr = 1 << 17, Fa = 1 << 18, Xt = 1 << 19, ja = 1 << 20, et = 1 << 25, wr = 1 << 21, Bt = 1 << 22, bt = 1 << 23, ft = /* @__PURE__ */ Symbol("$state"), On = /* @__PURE__ */ Symbol("component"), qa = /* @__PURE__ */ Symbol("legacy props"), Ba = /* @__PURE__ */ Symbol(""), Pn = /* @__PURE__ */ Symbol("attributes"), zr = /* @__PURE__ */ Symbol("class"), Vr = /* @__PURE__ */ Symbol("style"), Yr = /* @__PURE__ */ Symbol("text"), _r = /* @__PURE__ */ Symbol("form reset"), cr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Ua = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Ha = 1, za = 2, In = 4, Va = 8, Ya = 16, Wa = 1, Ga = 4, Xa = 8, Ka = 16, Ja = 1, Za = 2, Se = /* @__PURE__ */ Symbol("uninitialized"), Dn = "http://www.w3.org/1999/xhtml", Qa = "http://www.w3.org/2000/svg", $a = "http://www.w3.org/1998/Math/MathML";
function ei() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ti() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ri() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Fn(t) {
  return t === this.v;
}
function jn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function qn(t) {
  return !jn(t, this.v);
}
function Bn(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ni() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ai(t, e, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ii(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function li() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function oi(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function si() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function fi(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ci() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ui() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function di() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function vi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Te = null;
function Vt(t) {
  Te = t;
}
function Me(t, e = !1, r) {
  Te = {
    p: Te,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      fe
    ),
    l: null
  };
}
function Re(t) {
  var e = (
    /** @type {ComponentContext} */
    Te
  ), r = e.e;
  if (r !== null) {
    e.e = null;
    for (var n of r)
      ia(n);
  }
  return e.i = !0, Te = e.p, nn(t);
}
function nn(t = {}) {
  return Ln(t, On, { value: !0 }), t;
}
function Un() {
  return !0;
}
let Ct = [];
function Hn() {
  var t = Ct;
  Ct = [], Ia(t);
}
function st(t) {
  if (Ct.length === 0 && !ar) {
    var e = Ct;
    queueMicrotask(() => {
      e === Ct && Hn();
    });
  }
  Ct.push(t);
}
function hi() {
  for (; Ct.length > 0; )
    Hn();
}
const _i = -7169;
function ye(t, e) {
  t.f = t.f & _i | e;
}
function an(t) {
  (t.f & Qe) !== 0 || t.deps === null ? ye(t, Ce) : ye(t, Ve);
}
function zn(t, e, r) {
  (t.f & Ee) !== 0 ? e.add(t) : (t.f & Ve) !== 0 && r.add(t), ye(t, Ce);
}
let mn = !1;
function gi() {
  mn || (mn = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            e[_r]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Kt(t) {
  var e = se, r = fe;
  Ge(null), nt(null);
  try {
    return t();
  } finally {
    Ge(e), nt(r);
  }
}
function ln(t, e, r, n = r) {
  t.addEventListener(e, () => Kt(r));
  const a = (
    /** @type {any} */
    t[_r]
  );
  a ? t[_r] = () => {
    a(), n(!0);
  } : t[_r] = () => n(!0), gi();
}
function pi(t, e, r, n) {
  const a = or;
  var l = t.filter((g) => !g.settled), o = e.map(a);
  if (r.length === 0 && l.length === 0) {
    n(o);
    return;
  }
  var s = (
    /** @type {Effect} */
    fe
  ), f = mi(), u = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((g) => g.promise)) : null;
  function v(g) {
    if ((s.f & Fe) === 0) {
      f();
      try {
        n([...o, ...g]);
      } catch (p) {
        $e(p, s);
      }
      xr();
    }
  }
  var c = Vn();
  if (r.length === 0) {
    u.then(() => v([])).finally(c);
    return;
  }
  function h() {
    Promise.all(r.map((g) => /* @__PURE__ */ bi(g))).then(v).catch((g) => $e(g, s)).finally(c);
  }
  u ? u.then(() => {
    f(), h(), xr();
  }) : h();
}
function mi() {
  var t = (
    /** @type {Effect} */
    fe
  ), e = se, r = Te, n = (
    /** @type {Batch} */
    ne
  );
  return function(l = !0) {
    nt(t), Ge(e), Vt(r), l && (t.f & Fe) === 0 && (n?.activate(), n?.apply());
  };
}
function xr(t = !0) {
  nt(null), Ge(null), Vt(null), t && ne?.deactivate();
}
function Vn() {
  var t = (
    /** @type {Effect} */
    fe
  ), e = t.b, r = (
    /** @type {Batch} */
    ne
  ), n = !!e?.is_rendered();
  return e?.update_pending_count(1, r), r.increment(n, t), () => {
    e?.update_pending_count(-1, r), r.decrement(n, t);
  };
}
// @__NO_SIDE_EFFECTS__
function or(t) {
  var e = Pe | Ee;
  return fe !== null && (fe.f |= Xt), {
    ctx: Te,
    deps: null,
    effects: null,
    equals: Fn,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Se
    ),
    wv: 0,
    parent: fe,
    ac: null
  };
}
const tr = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function bi(t, e, r) {
  let n = (
    /** @type {Effect | null} */
    fe
  );
  n === null && ni();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Rt(
    /** @type {V} */
    Se
  ), o = !se, s = /* @__PURE__ */ new Set();
  return Oi(() => {
    var f = (
      /** @type {Effect} */
      fe
    ), u = Rn();
    a = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, (g) => {
        g !== cr && u.reject(g);
      }).finally(xr);
    } catch (g) {
      u.reject(g), xr();
    }
    var v = (
      /** @type {Batch} */
      ne
    );
    if (o) {
      if ((f.f & Gt) !== 0)
        var c = Vn();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        n.b?.is_rendered()
      )
        v.async_deriveds.get(f)?.reject(tr);
      else
        for (const g of s.values())
          g.reject(tr);
      s.add(u), v.async_deriveds.set(f, u);
    }
    const h = (g, p = void 0) => {
      c?.(), s.delete(u), p !== tr && (v.activate(), p ? (l.f |= bt, Yt(l, p)) : ((l.f & bt) !== 0 && (l.f ^= bt), Yt(l, g)), v.deactivate());
    };
    u.promise.then(h, (g) => h(null, g || "unknown"));
  }), Lr(() => {
    for (const f of s)
      f.reject(tr);
  }), new Promise((f) => {
    function u(v) {
      function c() {
        v === a ? f(l) : u(a);
      }
      v.then(c, c);
    }
    u(a);
  });
}
// @__NO_SIDE_EFFECTS__
function ue(t) {
  const e = /* @__PURE__ */ or(t);
  return ua(e), e;
}
// @__NO_SIDE_EFFECTS__
function Yn(t) {
  const e = /* @__PURE__ */ or(t);
  return e.equals = qn, e;
}
function yi(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      Be(
        /** @type {Effect} */
        e[r]
      );
  }
}
function on(t) {
  var e, r = fe, n = t.parent;
  if (!ht && n !== null && t.v !== Se && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Fe | De)) !== 0)
    return ei(), t.v;
  nt(n);
  try {
    yi(t), e = _a(t);
  } finally {
    nt(r);
  }
  return e;
}
function Wn(t) {
  var e = on(t);
  if (!t.equals(e) && (t.wv = va(), (!ne?.is_fork || t.deps === null) && (ne !== null ? (ne.capture(t, e, !0), Wr?.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    ye(t, Ce);
    return;
  }
  ht || (Ke !== null ? (cn() || ne?.is_fork) && Ke.set(t, e) : an(t));
}
function wi(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac !== null && Kt(() => {
        e.ac.abort(cr), e.ac = null;
      }), e.fn !== null && (e.teardown = Pa), sr(e, 0), dn(e));
}
function Gn(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && Wt(e);
}
let Or = null, Ft = null, ne = null, Wr = null, Ke = null, Gr = null, ar = !1, Pr = !1, ir = null, gr = null;
var bn = 0;
let xi = 1;
class xt {
  id = xi++;
  /** True as soon as `#process` was called */
  #t = !1;
  linked = !0;
  /** @type {Batch | null} */
  #l = null;
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
  #s = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #n = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #i = 0;
  /**
   * Async effects that are currently in flight, _not_ inside a pending boundary
   * @type {Map<Effect, number>}
   */
  #r = /* @__PURE__ */ new Map();
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #o = null;
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
  #a = [];
  /**
   * Effects created while this batch was active.
   * @type {Effect[]}
   */
  #h = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #f = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #c = /* @__PURE__ */ new Set();
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
  #g = /* @__PURE__ */ new Set();
  is_fork = !1;
  #u = !1;
  constructor() {
    Ft === null ? Or = Ft = this : (Ft.#e = this, this.#l = Ft), Ft = this;
  }
  #b() {
    if (this.is_fork) return !0;
    for (const n of this.#r.keys()) {
      for (var e = n, r = !1; e.parent !== null; ) {
        if (this.#d.has(e)) {
          r = !0;
          break;
        }
        e = e.parent;
      }
      if (!r)
        return !0;
    }
    return !1;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    this.#d.has(e) || this.#d.set(e, { d: [], m: [] }), this.#g.delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, r = (n) => this.schedule(n)) {
    var n = this.#d.get(e);
    if (n) {
      this.#d.delete(e);
      for (var a of n.d)
        ye(a, Ee), r(a);
      for (a of n.m)
        ye(a, Ve), r(a);
    }
    this.#g.add(e);
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
  #x() {
    var e = [];
    for (const l of this.#a)
      if (!((l.f & Fe) !== 0 || (l.f & (Ee | Ve)) === 0)) {
        for (var r = l, n = !1; r.parent !== null; ) {
          r = r.parent;
          var a = r.f;
          if ((a & (vt | We)) !== 0) {
            if ((a & Ce) === 0) {
              n = !0;
              break;
            }
            r.f ^= Ce;
          }
        }
        n || e.push(r);
      }
    return this.#a = [], e;
  }
  #p() {
    this.#t = !0;
    for (const s of this.#f)
      this.#c.delete(s), ye(s, Ee), this.schedule(s);
    for (const s of this.#c)
      ye(s, Ve), this.schedule(s);
    this.apply();
    for (var e = ir = [], r = [], n = gr = []; this.#a.length > 0; ) {
      bn++ > 1e3 && (this.#_(), Ei());
      for (const s of this.#x())
        try {
          this.#m(s, e, r);
        } catch (f) {
          throw Jn(s), this.#b() || this.discard(), f;
        }
    }
    if (ne = null, n.length > 0) {
      var a = xt.ensure();
      for (const s of n)
        a.schedule(s);
    }
    if (ir = null, gr = null, this.#b()) {
      this.#v(r), this.#v(e);
      for (const [s, f] of this.#d)
        Kn(s, f);
      n.length > 0 && /** @type {unknown} */
      ne.#p();
      return;
    }
    const l = this.#k();
    if (l) {
      this.#v(r), this.#v(e), l.#y(this);
      return;
    }
    this.#f.clear(), this.#c.clear();
    for (const s of this.#s) s(this);
    this.#s.clear(), Wr = this, yn(r), yn(e), Wr = null, this.#o?.resolve();
    var o = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      ne
    );
    if (this.#i === 0 && (this.#a.length === 0 || o !== null) && this.#_(), this.#a.length > 0)
      if (o !== null) {
        for (const s of this.#a)
          o.#a.push(s);
        this.#a = [];
      } else
        o = this;
    o !== null && (tt.clear(), o.#p());
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #m(e, r, n) {
    e.f ^= Ce;
    for (var a = e.first; a !== null; ) {
      var l = a.f, o = (l & (We | vt)) !== 0, s = o && (l & Ce) !== 0, f = s || (l & De) !== 0 || this.#d.has(a);
      if (!f && a.fn !== null) {
        o ? a.f ^= Ce : (l & Ht) !== 0 ? r.push(a) : dr(a) && ((l & Xe) !== 0 && this.#c.add(a), Wt(a));
        var u = a.first;
        if (u !== null) {
          a = u;
          continue;
        }
      }
      for (; a !== null; ) {
        var v = a.next;
        if (v !== null) {
          a = v;
          break;
        }
        a = a.parent;
      }
    }
  }
  #k() {
    for (var e = this.#l; e !== null; ) {
      if (!e.is_fork) {
        for (const [r, [, n]] of this.current)
          if (e.current.has(r) && !n)
            return e;
      }
      e = e.#l;
    }
    return null;
  }
  /**
   * @param {Batch} batch
   */
  #y(e) {
    for (const [n, a] of e.current)
      !this.previous.has(n) && e.previous.has(n) && this.previous.set(n, e.previous.get(n)), this.current.set(n, a);
    for (const [n, a] of e.async_deriveds) {
      const l = this.async_deriveds.get(n);
      l && a.promise.then(l.resolve).catch(l.reject);
    }
    e.async_deriveds.clear(), this.transfer_effects(e.#f, e.#c);
    const r = (n) => {
      var a = n.reactions;
      if (a !== null && !((n.f & Pe) !== 0 && (n.f & (Ee | Ve)) === 0))
        for (const s of a) {
          var l = s.f;
          if ((l & Pe) !== 0)
            r(
              /** @type {Derived} */
              s
            );
          else {
            var o = (
              /** @type {Effect} */
              s
            );
            l & (Bt | Xe) && !this.async_deriveds.has(o) && (this.#c.delete(o), ye(o, Ee), this.schedule(o));
          }
        }
    };
    for (const n of this.current.keys())
      r(n);
    this.oncommit(() => e.discard()), e.#_(), ne = this, this.#p();
  }
  /**
   * @param {Effect[]} effects
   */
  #v(e) {
    for (var r = 0; r < e.length; r += 1)
      zn(e[r], this.#f, this.#c);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, r, n = !1) {
    e.v !== Se && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & bt) === 0 && (this.current.set(e, [r, n]), Ke?.set(e, r)), this.is_fork || (e.v = r);
  }
  activate() {
    ne = this;
  }
  deactivate() {
    ne = null, Ke = null;
  }
  flush() {
    try {
      Pr = !0, ne = this, this.#p();
    } finally {
      bn = 0, Gr = null, ir = null, gr = null, Pr = !1, ne = null, Ke = null, tt.clear();
    }
  }
  discard() {
    for (const e of this.#n) e(this);
    this.#n.clear();
    for (const e of this.async_deriveds.values())
      e.reject(tr);
    this.#_(), this.#o?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    this.#h.push(e);
  }
  #w() {
    for (let c = Or; c !== null; c = c.#e) {
      var e = c.id < this.id, r = [];
      for (const [h, [g, p]] of this.current) {
        if (c.current.has(h)) {
          var n = (
            /** @type {[any, boolean]} */
            c.current.get(h)[0]
          );
          if (e && g !== n)
            c.current.set(h, [g, p]);
          else
            continue;
        }
        r.push(h);
      }
      if (e)
        for (const [h, g] of this.async_deriveds) {
          const p = c.async_deriveds.get(h);
          p && g.promise.then(p.resolve).catch(p.reject);
        }
      var a = [...c.current.keys()].filter(
        (h) => !/** @type {[any, boolean]} */
        c.current.get(h)[1]
      );
      if (!(!c.#t || a.length === 0)) {
        var l = a.filter((h) => !this.current.has(h));
        if (l.length === 0)
          e && c.discard();
        else if (r.length > 0) {
          if (e)
            for (const h of this.#g)
              c.unskip_effect(h, (g) => {
                (g.f & (Xe | Bt)) !== 0 ? c.schedule(g) : c.#v([g]);
              });
          c.activate();
          var o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
          for (var f of r)
            Xn(f, l, o, s);
          s = /* @__PURE__ */ new Map();
          var u = [...c.current].filter(([h, g]) => {
            const p = this.current.get(h);
            return p ? p[0] !== g[0] || p[1] !== g[1] : !0;
          }).map(([h]) => h);
          if (u.length > 0)
            for (const h of this.#h)
              (h.f & (Fe | De | yr)) === 0 && sn(h, u, s) && ((h.f & (Bt | Xe)) !== 0 ? (ye(h, Ee), c.schedule(h)) : c.#f.add(h));
          if (c.#a.length > 0 && !c.#u) {
            c.apply();
            for (var v of c.#x())
              c.#m(v, [], []);
          }
          c.deactivate();
        }
      }
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, r) {
    if (this.#i += 1, e) {
      let n = this.#r.get(r) ?? 0;
      this.#r.set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, r) {
    if (this.#i -= 1, e) {
      let n = this.#r.get(r) ?? 0;
      n === 1 ? this.#r.delete(r) : this.#r.set(r, n - 1);
    }
    this.#u || (this.#u = !0, st(() => {
      this.#u = !1, this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, r) {
    for (const n of e)
      this.#f.add(n);
    for (const n of r)
      this.#c.add(n);
    e.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    this.#s.add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    this.#n.add(e);
  }
  settled() {
    return (this.#o ??= Rn()).promise;
  }
  static ensure() {
    if (ne === null) {
      const e = ne = new xt();
      !Pr && !ar && st(() => {
        e.#t || e.flush();
      });
    }
    return ne;
  }
  apply() {
    {
      Ke = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    if (Gr = e, e.b?.is_pending && (e.f & (Ht | Tr | Nn)) !== 0 && (e.f & Gt) === 0) {
      e.b.defer_effect(e);
      return;
    }
    this.#a.push(e);
  }
  #_() {
    if (this.linked) {
      var e = this.#l, r = this.#e;
      e === null ? Or = r : e.#e = r, r === null ? Ft = e : r.#l = e, this.linked = !1;
    }
  }
}
function ki(t) {
  var e = ar;
  ar = !0;
  try {
    for (var r; ; ) {
      if (hi(), ne === null)
        return (
          /** @type {T} */
          r
        );
      ne.flush();
    }
  } finally {
    ar = e;
  }
}
function Ei() {
  try {
    si();
  } catch (t) {
    $e(t, Gr);
  }
}
let ot = null;
function yn(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var n = t[r++];
      if ((n.f & (Fe | De)) === 0 && dr(n) && (ot = /* @__PURE__ */ new Set(), Wt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && sa(n), ot?.size > 0)) {
        tt.clear();
        for (const a of ot) {
          if ((a.f & (Fe | De)) !== 0) continue;
          const l = [a];
          let o = a.parent;
          for (; o !== null; )
            ot.has(o) && (ot.delete(o), l.push(o)), o = o.parent;
          for (let s = l.length - 1; s >= 0; s--) {
            const f = l[s];
            (f.f & (Fe | De)) === 0 && Wt(f);
          }
        }
        ot.clear();
      }
    }
    ot = null;
  }
}
function Xn(t, e, r, n) {
  if (!r.has(t) && (r.add(t), t.reactions !== null))
    for (const a of t.reactions) {
      const l = a.f;
      (l & Pe) !== 0 ? Xn(
        /** @type {Derived} */
        a,
        e,
        r,
        n
      ) : (l & (Bt | Xe)) !== 0 && (l & Ee) === 0 && sn(a, e, n) && (ye(a, Ee), fn(
        /** @type {Effect} */
        a
      ));
    }
}
function sn(t, e, r) {
  const n = r.get(t);
  if (n !== void 0) return n;
  if (t.deps !== null)
    for (const a of t.deps) {
      if (mr.call(e, a))
        return !0;
      if ((a.f & Pe) !== 0 && sn(
        /** @type {Derived} */
        a,
        e,
        r
      ))
        return r.set(
          /** @type {Derived} */
          a,
          !0
        ), !0;
    }
  return r.set(t, !1), !1;
}
function fn(t) {
  ne.schedule(t);
}
function Kn(t, e) {
  if (!((t.f & We) !== 0 && (t.f & Ce) !== 0)) {
    (t.f & Ee) !== 0 ? e.d.push(t) : (t.f & Ve) !== 0 && e.m.push(t), ye(t, Ce);
    for (var r = t.first; r !== null; )
      Kn(r, e), r = r.next;
  }
}
function Jn(t) {
  ye(t, Ce);
  for (var e = t.first; e !== null; )
    Jn(e), e = e.next;
}
let kr = /* @__PURE__ */ new Set();
const tt = /* @__PURE__ */ new Map();
let Zn = !1;
function Rt(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Fn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function V(t, e) {
  const r = Rt(t);
  return ua(r), r;
}
// @__NO_SIDE_EFFECTS__
function Si(t, e = !1, r = !0) {
  const n = Rt(t);
  return e || (n.equals = qn), n;
}
function x(t, e, r = !1) {
  se !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || (se.f & yr) !== 0) && Un() && (se.f & (Pe | Xe | Bt | yr)) !== 0 && (rt === null || !rt.has(t)) && di();
  let n = r ? me(e) : e;
  return Yt(t, n, gr);
}
var St = null, Xr = 0;
function Yt(t, e, r = null) {
  if (!t.equals(e)) {
    ht ? tt.set(t, e) : tt.has(t) || tt.set(t, t.v);
    var n = xt.ensure();
    if (n.capture(t, e), (t.f & Pe) !== 0) {
      const a = (
        /** @type {Derived} */
        t
      );
      (t.f & Ee) !== 0 && on(a), Ke === null && an(a);
    }
    t.wv = va(), St = null, Xr = 0, Qn(t, Ee, r), St = null, fe !== null && (fe.f & Ce) !== 0 && (fe.f & (We | vt)) === 0 && (He === null ? Ii([t]) : He.push(t)), !n.is_fork && kr.size > 0 && !Zn && Ci();
  }
  return e;
}
function Ci() {
  Zn = !1;
  for (const t of kr) {
    (t.f & Ce) !== 0 && ye(t, Ve);
    let e;
    try {
      e = dr(t);
    } catch {
      e = !0;
    }
    e && Wt(t);
  }
  kr.clear();
}
function lr(t) {
  x(t, t.v + 1);
}
function Qn(t, e, r) {
  var n = t.reactions;
  if (n !== null) {
    var a = n.length;
    if (Xr += a, Xr > 1e5 && St === null && (St = /* @__PURE__ */ new Set()), St !== null) {
      if (St.has(t)) return;
      St.add(t);
    }
    for (var l = 0; l < a; l++) {
      var o = n[l], s = o.f, f = (s & Ee) === 0;
      if (f && ye(o, e), (s & yr) !== 0)
        kr.add(
          /** @type {Effect} */
          o
        );
      else if ((s & Pe) !== 0) {
        var u = (
          /** @type {Derived} */
          o
        );
        Ke?.delete(u), Qn(u, Ve, r);
      } else if (f) {
        var v = (
          /** @type {Effect} */
          o
        );
        (s & Xe) !== 0 && ot !== null && ot.add(v), r !== null ? r.push(v) : fn(v);
      }
    }
  }
}
function me(t) {
  if (typeof t != "object" || t === null || ft in t || On in t)
    return t;
  const e = tn(t);
  if (e !== Na && e !== Oa)
    return t;
  var r = /* @__PURE__ */ new Map(), n = Cr(t), a = /* @__PURE__ */ V(0), l = Mt, o = (s) => {
    if (Mt === l)
      return s();
    var f = se, u = Mt;
    Ge(null), kn(l);
    var v = s();
    return Ge(f), kn(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(s, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ci();
        var v = r.get(f);
        return v === void 0 ? o(() => {
          var c = /* @__PURE__ */ V(u.value);
          return r.set(f, c), c;
        }) : x(v, u.value, !0), !0;
      },
      deleteProperty(s, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in s) {
            const v = o(() => /* @__PURE__ */ V(Se));
            r.set(f, v), lr(a);
          }
        } else
          x(u, Se), lr(a);
        return !0;
      },
      get(s, f, u) {
        if (f === ft)
          return t;
        var v = r.get(f), c = f in s;
        if (v === void 0 && (!c || qt(s, f)?.writable) && (v = o(() => {
          var g = me(c ? s[f] : Se), p = /* @__PURE__ */ V(g);
          return p;
        }), r.set(f, v)), v !== void 0) {
          var h = i(v);
          return h === Se ? void 0 : h;
        }
        return Reflect.get(s, f, u);
      },
      getOwnPropertyDescriptor(s, f) {
        this.has?.(s, f);
        var u = Reflect.getOwnPropertyDescriptor(s, f), v = r.get(f);
        if (v !== void 0) {
          var c = i(v);
          if (c === Se)
            return;
          if (u && "value" in u)
            u.value = c;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return u;
      },
      has(s, f) {
        if (f === ft)
          return !0;
        var u = r.get(f), v = u !== void 0 && u.v !== Se || Reflect.has(s, f);
        if (u !== void 0 || fe !== null && (!v || qt(s, f)?.writable)) {
          u === void 0 && (u = o(() => {
            var h = v ? me(s[f]) : Se, g = /* @__PURE__ */ V(h);
            return g;
          }), r.set(f, u));
          var c = i(u);
          if (c === Se)
            return !1;
        }
        return v;
      },
      set(s, f, u, v) {
        var c = r.get(f), h = f in s;
        if (n && f === "length")
          for (var g = u; g < /** @type {Source<number>} */
          c.v; g += 1) {
            var p = r.get(g + "");
            p !== void 0 ? x(p, Se) : g in s && (p = o(() => /* @__PURE__ */ V(Se)), r.set(g + "", p));
          }
        if (c === void 0)
          (!h || qt(s, f)?.writable) && (c = o(() => /* @__PURE__ */ V(void 0)), x(c, me(u)), r.set(f, c));
        else {
          h = c.v !== Se;
          var S = o(() => me(u));
          x(c, S);
        }
        var m = Reflect.getOwnPropertyDescriptor(s, f);
        if (m?.set && m.set.call(v, u), !h) {
          if (n && typeof f == "string") {
            var C = (
              /** @type {Source<number>} */
              r.get("length")
            ), B = Number(f);
            Number.isInteger(B) && B >= C.v && x(C, B + 1);
          }
          lr(a);
        }
        return !0;
      },
      ownKeys(s) {
        i(a);
        var f = Reflect.ownKeys(s).filter((c) => {
          var h = r.get(c);
          return h === void 0 || h.v !== Se;
        });
        for (var [u, v] of r)
          v.v !== Se && !(u in s) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        ui();
      }
    }
  );
}
function wn(t) {
  try {
    if (t !== null && typeof t == "object" && ft in t)
      return t[ft];
  } catch {
  }
  return t;
}
function $n(t, e) {
  return Object.is(wn(t), wn(e));
}
var Kr, ea, ta, ra;
function Ai() {
  if (Kr === void 0) {
    Kr = window, ea = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    ta = qt(e, "firstChild").get, ra = qt(e, "nextSibling").get, pn(t) && (t[zr] = void 0, t[Pn] = null, t[Vr] = void 0, t.__e = void 0), pn(r) && (r[Yr] = void 0);
  }
}
function ct(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Je(t) {
  return (
    /** @type {TemplateNode | null} */
    ta.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function ur(t) {
  return (
    /** @type {TemplateNode | null} */
    ra.call(t)
  );
}
function k(t, e) {
  return /* @__PURE__ */ Je(t);
}
function ve(t, e = !1) {
  {
    var r = /* @__PURE__ */ Je(t);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ur(r) : r;
  }
}
function H(t, e = !1) {
  return /* @__PURE__ */ Je(t);
}
function d(t, e = 1, r = !1) {
  let n = t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ur(n);
  return n;
}
function Ti(t) {
  t.textContent = "";
}
function na() {
  return !1;
}
function aa(t, e, r) {
  return e == null || e === Dn ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    r ? document.createElement(t, { is: r }) : document.createElement(t)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    r ? document.createElementNS(e, t, { is: r }) : document.createElementNS(e, t)
  );
}
function Li(t) {
  var e = fe;
  if (e === null)
    return se.f |= bt, t;
  if ((e.f & Gt) === 0 && (e.f & Ht) === 0)
    throw t;
  $e(t, e);
}
function $e(t, e) {
  if (!(e !== null && (e.f & Fe) !== 0)) {
    for (; e !== null; ) {
      if ((e.f & Hr) !== 0 && (e.f & (Fe | br)) === 0) {
        if ((e.f & Gt) === 0)
          throw t;
        try {
          e.b.error(t);
          return;
        } catch (r) {
          t = r;
        }
      }
      e = e.parent;
    }
    throw t;
  }
}
function Mi(t) {
  fe === null && (se === null && oi(), li()), ht && ii();
}
function Ri(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function _t(t, e) {
  var r = fe;
  r !== null && (r.f & De) !== 0 && (t |= De);
  var n = {
    ctx: Te,
    deps: null,
    nodes: null,
    f: t | Ee | Qe,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  ne?.register_created_effect(n);
  var a = n;
  if ((t & Ht) !== 0)
    ir !== null ? ir.push(n) : xt.ensure().schedule(n);
  else if (e !== null) {
    try {
      Wt(n);
    } catch (o) {
      throw Be(n), o;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Xt) === 0 && (a = a.first, (t & Xe) !== 0 && (t & zt) !== 0 && a !== null && (a.f |= zt));
  }
  if (a !== null && (a.parent = r, r !== null && Ri(a, r), se !== null && (se.f & Pe) !== 0 && (t & vt) === 0)) {
    var l = (
      /** @type {Derived} */
      se
    );
    (l.effects ??= []).push(a);
  }
  return n;
}
function cn() {
  return se !== null && !Ze;
}
function Lr(t) {
  const e = _t(Tr, null);
  return ye(e, Ce), e.teardown = t, e;
}
function Tt(t) {
  Mi();
  var e = (
    /** @type {Effect} */
    fe.f
  ), r = !se && (e & We) !== 0 && Te !== null && !Te.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Te
    );
    (n.e ??= []).push(t);
  } else
    return ia(t);
}
function ia(t) {
  return _t(Ht | ja, t);
}
function Ni(t) {
  xt.ensure();
  const e = _t(vt | Xt, t);
  return (r = {}) => new Promise((n) => {
    r.outro ? Lt(e, () => {
      Be(e), n(void 0);
    }) : (Be(e), n(void 0));
  });
}
function un(t) {
  return _t(Ht, t);
}
function Oi(t) {
  return _t(Bt | Xt, t);
}
function Jt(t, e = 0) {
  return _t(Tr | e, t);
}
function L(t, e = [], r = [], n = []) {
  pi(n, e, r, (a) => {
    _t(Tr, () => {
      t(...a.map(i));
    });
  });
}
function Mr(t, e = 0) {
  var r = _t(Xe | e, t);
  return r;
}
function ze(t) {
  return _t(We | Xt, t);
}
function la(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = ht, n = se;
    xn(!0), Ge(null);
    try {
      e.call(null);
    } catch (a) {
      $e(a, t.parent);
    } finally {
      xn(r), Ge(n);
    }
  }
}
function dn(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Kt(() => {
      a.abort(cr);
    });
    var n = r.next;
    (r.f & vt) !== 0 ? r.parent = null : Be(r, e), r = n;
  }
}
function Pi(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & We) === 0 && Be(e), e = r;
  }
}
function Be(t, e = !0) {
  var r = !1;
  (e || (t.f & Fa) !== 0) && t.nodes !== null && t.nodes.end !== null && (oa(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), r = !0), t.f |= br, dn(t, e && !r), sr(t, 0);
  var n = t.nodes && t.nodes.t;
  if (n !== null)
    for (const l of n)
      l.stop();
  la(t), t.f ^= br, t.f |= Fe;
  var a = t.parent;
  a !== null && a.first !== null && sa(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function oa(t, e) {
  for (; t !== null; ) {
    var r = t === e ? null : /* @__PURE__ */ ur(t);
    t.remove(), t = r;
  }
}
function sa(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Lt(t, e, r = !0) {
  var n = [];
  t.f |= rn, fa(t, n, !0);
  var a = () => {
    r && Be(t), e && e();
  }, l = n.length;
  if (l > 0) {
    var o = () => --l || a();
    for (var s of n)
      s.out(o);
  } else
    a();
}
function fa(t, e, r) {
  if ((t.f & De) === 0) {
    t.f ^= De;
    var n = t.nodes && t.nodes.t;
    if (n !== null)
      for (const s of n)
        (s.is_global || r) && e.push(s);
    for (var a = t.first; a !== null; ) {
      var l = a.next;
      if ((a.f & vt) === 0) {
        var o = (a.f & zt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & We) !== 0 && (t.f & Xe) !== 0;
        fa(a, e, o ? r : !1);
      }
      a = l;
    }
  }
}
function Er(t) {
  t.f &= ~rn, ca(t, !0);
}
function ca(t, e) {
  if ((t.f & rn) === 0 && (t.f & De) !== 0) {
    t.f ^= De, (t.f & Ce) === 0 && (ye(t, Ee), xt.ensure().schedule(t));
    for (var r = t.first; r !== null; ) {
      var n = r.next, a = (r.f & zt) !== 0 || (r.f & We) !== 0;
      ca(r, a ? e : !1), r = n;
    }
    var l = t.nodes && t.nodes.t;
    if (l !== null)
      for (const o of l)
        (o.is_global || e) && o.in();
  }
}
function vn(t, e) {
  if (t.nodes)
    for (var r = t.nodes.start, n = t.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ ur(r);
      e.append(r), r = a;
    }
}
let pr = !1, ht = !1;
function xn(t) {
  ht = t;
}
let se = null, Ze = !1;
function Ge(t) {
  se = t;
}
let fe = null;
function nt(t) {
  fe = t;
}
let rt = null;
function ua(t) {
  se !== null && ((se.f & wr) !== 0 || (se.f & Pe) !== 0) && (rt ??= /* @__PURE__ */ new Set()).add(t);
}
let qe = null, Ue = 0, He = null;
function Ii(t) {
  He = t;
}
let da = 1, At = 0, Mt = At;
function kn(t) {
  Mt = t;
}
function va() {
  return ++da;
}
function dr(t) {
  var e = t.f;
  if ((e & Ee) !== 0)
    return !0;
  if ((e & Ve) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      t.deps
    ), n = r.length, a = 0; a < n; a++) {
      var l = r[a];
      if (dr(
        /** @type {Derived} */
        l
      ) && Wn(
        /** @type {Derived} */
        l
      ), l.wv > t.wv)
        return !0;
    }
    (e & Qe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ke === null && ye(t, Ce);
  }
  return !1;
}
function ha(t, e, r = !0) {
  var n = t.reactions;
  if (n !== null && !(rt !== null && rt.has(t)))
    for (var a = 0; a < n.length; a++) {
      var l = n[a];
      (l.f & Pe) !== 0 ? ha(
        /** @type {Derived} */
        l,
        e,
        !1
      ) : e === l && (r ? ye(l, Ee) : (l.f & Ce) !== 0 && ye(l, Ve), fn(
        /** @type {Effect} */
        l
      ));
    }
}
function _a(t) {
  var e = qe, r = Ue, n = He, a = se, l = rt, o = Te, s = Ze, f = Mt, u = t.f;
  qe = /** @type {null | Value[]} */
  null, Ue = 0, He = null, se = (u & (We | vt)) === 0 ? t : null, rt = null, Vt(t.ctx), Ze = !1, Mt = ++At, t.ac !== null && (Kt(() => {
    t.ac.abort(cr);
  }), t.ac = null);
  try {
    t.f |= wr;
    var v = (
      /** @type {Function} */
      t.fn
    ), c = v();
    t.f |= Gt;
    var h = En(t);
    if (Un() && He !== null && !Ze && h !== null && (t.f & (Pe | Ve | Ee)) === 0)
      for (var g = 0; g < /** @type {Source[]} */
      He.length; g++)
        ha(
          He[g],
          /** @type {Effect} */
          t
        );
    if (a !== null && a !== t) {
      if (At++, a.deps !== null)
        for (let p = 0; p < r; p += 1)
          a.deps[p].rv = At;
      if (e !== null)
        for (const p of e)
          p.rv = At;
      He !== null && (n === null ? n = He : n.push(.../** @type {Source[]} */
      He));
    }
    return (t.f & bt) !== 0 && (t.f ^= bt), c;
  } catch (p) {
    return En(t), Li(p);
  } finally {
    t.f ^= wr, qe = e, Ue = r, He = n, se = a, rt = l, Vt(o), Ze = s, Mt = f;
  }
}
function En(t) {
  var e = t.deps, r = ne?.is_fork;
  if (qe !== null) {
    var n;
    if (r || sr(t, Ue), e !== null && Ue > 0)
      for (e.length = Ue + qe.length, n = 0; n < qe.length; n++)
        e[Ue + n] = qe[n];
    else
      t.deps = e = qe;
    if (cn() && (t.f & Qe) !== 0)
      for (n = Ue; n < e.length; n++)
        (e[n].reactions ??= []).push(t);
  } else !r && e !== null && Ue < e.length && (sr(t, Ue), e.length = Ue);
  return e;
}
function Di(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = Ra.call(r, t);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = e.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (e.f & Pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (qe === null || !mr.call(qe, e))) {
    var l = (
      /** @type {Derived} */
      e
    );
    (l.f & Qe) !== 0 && (l.f ^= Qe), l.v !== Se && an(l), l.ac !== null && Kt(() => {
      l.ac.abort(cr), l.ac = null, ye(l, Ee);
    }), wi(l), sr(l, 0);
  }
}
function sr(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      Di(t, r[n]);
}
function Wt(t) {
  var e = t.f;
  if ((e & Fe) === 0) {
    ye(t, Ce);
    var r = fe, n = pr;
    fe = t, pr = (e & (We | vt)) === 0;
    try {
      (e & (Xe | Nn)) !== 0 ? Pi(t) : dn(t), la(t);
      var a = _a(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = da;
      var l;
    } finally {
      pr = n, fe = r;
    }
  }
}
async function fr() {
  await Promise.resolve(), ki();
}
function i(t) {
  var e = t.f, r = (e & Pe) !== 0;
  if (se !== null && !Ze) {
    var n = fe !== null && (fe.f & Fe) !== 0;
    if (!n && (rt === null || !rt.has(t))) {
      var a = se.deps;
      if ((se.f & wr) !== 0)
        t.rv < At && (t.rv = At, qe === null && a !== null && a[Ue] === t ? Ue++ : qe === null ? qe = [t] : qe.push(t));
      else {
        se.deps ??= [], mr.call(se.deps, t) || se.deps.push(t);
        var l = t.reactions;
        l === null ? t.reactions = [se] : mr.call(l, se) || l.push(se);
      }
    }
  }
  if (ht && tt.has(t))
    return tt.get(t);
  if (r) {
    var o = (
      /** @type {Derived} */
      t
    );
    if (ht) {
      var s = o.v;
      return ((o.f & Ce) === 0 && o.reactions !== null || pa(o)) && (s = on(o)), tt.set(o, s), s;
    }
    var f = (o.f & Qe) === 0 && !Ze && se !== null && (pr || (se.f & Qe) !== 0), u = (o.f & Gt) === 0;
    dr(o) && (f && (o.f |= Qe), Wn(o)), f && !u && (Gn(o), ga(o));
  }
  if (Ke?.has(t))
    return Ke.get(t);
  if ((t.f & bt) !== 0)
    throw t.v;
  return t.v;
}
function ga(t) {
  if (t.f |= Qe, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Pe) !== 0 && (e.f & Qe) === 0 && (Gn(
        /** @type {Derived} */
        e
      ), ga(
        /** @type {Derived} */
        e
      ));
}
function pa(t) {
  if (t.v === Se) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (tt.has(e) || (e.f & Pe) !== 0 && pa(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Ie(t) {
  var e = Ze;
  try {
    return Ze = !0, t();
  } finally {
    Ze = e;
  }
}
function Fi(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (ft in t)
      Jr(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const r = t[e];
        typeof r == "object" && r && ft in r && Jr(r);
      }
  }
}
function Jr(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let n in t)
      try {
        Jr(t[n], e);
      } catch {
      }
    const r = tn(t);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = Mn(r);
      for (let a in n) {
        const l = n[a].get;
        if (l)
          try {
            l.call(t);
          } catch {
          }
      }
    }
  }
}
const ji = ["touchstart", "touchmove"];
function qi(t) {
  return ji.includes(t);
}
const rr = /* @__PURE__ */ Symbol("events"), ma = /* @__PURE__ */ new Set(), Zr = /* @__PURE__ */ new Set();
function Bi(t, e, r, n = {}) {
  function a(l) {
    if (n.capture || Qr.call(e, l), !l.cancelBubble)
      return Kt(() => r?.call(this, l));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? (a.__removed = !1, st(() => {
    a.__removed || e.addEventListener(t, a, n);
  })) : e.addEventListener(t, a, n), a;
}
function ut(t, e, r, n, a) {
  var l = { capture: n, passive: a }, o = Bi(t, e, r, l);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Lr(() => {
    o.__removed = !0, e.removeEventListener(t, o, l);
  });
}
function ge(t, e, r) {
  (e[rr] ??= {})[t] = r;
}
function at(t) {
  for (var e = 0; e < t.length; e++)
    ma.add(t[e]);
  for (var r of Zr)
    r(t);
}
let Ir = null, Dr = !1;
function Qr(t) {
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, a = t.composedPath?.() || [], l = (
    /** @type {null | Element} */
    a[0] || t.target
  );
  Ir = t, Dr || (Dr = !0, setTimeout(() => {
    Dr = !1, Ir = null;
  }));
  var o = 0, s = Ir === t && t[rr];
  if (s) {
    var f = a.indexOf(s);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[rr] = e;
      return;
    }
    var u = a.indexOf(e);
    if (u === -1)
      return;
    f <= u && (o = f);
  }
  if (l = /** @type {Element} */
  a[o] || t.target, l !== e) {
    Ln(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var v = se, c = fe;
    Ge(null), nt(null);
    try {
      for (var h, g = []; l !== null && l !== e; ) {
        try {
          var p = l[rr]?.[n];
          p != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === l) && p.call(l, t);
        } catch (S) {
          h ? g.push(S) : h = S;
        }
        if (t.cancelBubble) break;
        o++, l = o < a.length ? (
          /** @type {Element} */
          a[o]
        ) : null;
      }
      if (h) {
        for (let S of g)
          queueMicrotask(() => {
            throw S;
          });
        throw h;
      }
    } finally {
      t[rr] = e, delete t.currentTarget, Ge(v), nt(c);
    }
  }
}
const Ui = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function Hi(t) {
  return (
    /** @type {string} */
    Ui?.createHTML(t) ?? t
  );
}
function ba(t) {
  var e = aa("template");
  return e.innerHTML = Hi(t.replaceAll("<!>", "<!---->")), e.content;
}
function Nt(t, e) {
  var r = (
    /** @type {Effect} */
    fe
  );
  r.nodes === null && (r.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function E(t, e) {
  var r = (e & Ja) !== 0, n = (e & Za) !== 0, a, l = !t.startsWith("<!>");
  return () => {
    a === void 0 && (a = ba(l ? t : "<!>" + t), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(a)));
    var o = (
      /** @type {TemplateNode} */
      n || ea ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(o)
      ), f = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Nt(s, f);
    } else
      Nt(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function zi(t, e, r = "svg") {
  var n = !t.startsWith("<!>"), a = `<${r}>${n ? t : "<!>" + t}</${r}>`, l;
  return () => {
    if (!l) {
      var o = (
        /** @type {DocumentFragment} */
        ba(a)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ Je(o)
      );
      l = /** @type {Element} */
      /* @__PURE__ */ Je(s);
    }
    var f = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    return Nt(f, f), f;
  };
}
// @__NO_SIDE_EFFECTS__
function Vi(t, e) {
  return /* @__PURE__ */ zi(t, e, "svg");
}
function Ye(t = "") {
  {
    var e = ct(t + "");
    return Nt(e, e), e;
  }
}
function dt() {
  var t = document.createDocumentFragment(), e = document.createComment(""), r = ct();
  return t.append(e, r), Nt(e, r), t;
}
function y(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Yi(t) {
  let e = 0, r = Rt(0), n;
  return () => {
    cn() && (i(r), Jt(() => (e === 0 && (n = Ie(() => t(() => lr(r)))), e += 1, () => {
      st(() => {
        e -= 1, e === 0 && (n?.(), n = void 0, lr(r));
      });
    })));
  };
}
var Wi = zt | Xt;
function Gi(t, e, r, n) {
  new Xi(t, e, r, n);
}
class Xi {
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
  #l = null;
  /** @type {BoundaryProps} */
  #e;
  /** @type {((anchor: Node) => void)} */
  #s;
  /** @type {Effect} */
  #n;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {DocumentFragment | null} */
  #a = null;
  #h = 0;
  #f = 0;
  #c = !1;
  /** @type {Set<Effect>} */
  #d = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #g = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #u = null;
  #b = Yi(() => (this.#u = Rt(this.#h), () => {
    this.#u = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, r, n, a) {
    this.#t = e, this.#e = r, this.#s = (l) => {
      var o = (
        /** @type {Effect} */
        fe
      );
      o.b = this, o.f |= Hr, n(l);
    }, this.parent = /** @type {Effect} */
    fe.b, this.transform_error = a ?? this.parent?.transform_error ?? ((l) => l), this.#n = Mr(() => {
      this.#y();
    }, Wi);
  }
  #x() {
    try {
      this.#i = ze(() => this.#s(this.#t));
    } catch (e) {
      this.error(e);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #p(e) {
    const r = this.#e.failed, { reset: n, invoke_onerror: a } = this.#m(e);
    st(a), r && (this.#o = ze(() => {
      r(
        this.#t,
        () => e,
        () => n
      );
    }));
  }
  /**
   * Creates the `reset` function for a failed boundary, along with a function
   * that invokes `onerror` with it (if provided)
   * @param {unknown} error
   * @returns {{ reset: () => void, invoke_onerror: () => void }}
   */
  #m(e) {
    var r = !1, n = !1;
    const a = () => {
      if (r) {
        ri();
        return;
      }
      r = !0, n && vi(), this.#o !== null && Lt(this.#o, () => {
        this.#o = null;
      }), this.#w(() => {
        this.#y();
      });
    };
    return { reset: a, invoke_onerror: () => {
      try {
        n = !0, this.#e.onerror?.(e, a), n = !1;
      } catch (o) {
        $e(o, this.#n && this.#n.parent);
      }
    } };
  }
  #k() {
    const e = this.#e.pending;
    e && (this.is_pending = !0, this.#r = ze(() => e(this.#t)), st(() => {
      var r = this.#a = document.createDocumentFragment(), n = ct(), a = !1;
      if (r.append(n), this.#i = this.#w(() => {
        try {
          return ze(() => this.#s(n));
        } catch (l) {
          try {
            this.error(l), a = !0;
          } catch (o) {
            $e(o, this.#n.parent);
          }
          return null;
        }
      }), this.#i === null) {
        this.#a = null, a && this.#v(
          /** @type {Batch} */
          ne
        );
        return;
      }
      this.#f === 0 && (this.#t.before(r), this.#a = null, Lt(
        /** @type {Effect} */
        this.#r,
        () => {
          this.#r = null;
        }
      ), this.#v(
        /** @type {Batch} */
        ne
      ));
    }));
  }
  #y() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#f = 0, this.#h = 0, this.#i = ze(() => {
        this.#s(this.#t);
      }), this.#f > 0) {
        var e = this.#a = document.createDocumentFragment();
        vn(this.#i, e);
        const r = (
          /** @type {(anchor: Node) => void} */
          this.#e.pending
        );
        this.#r = ze(() => r(this.#t));
      } else
        this.#v(
          /** @type {Batch} */
          ne
        );
    } catch (r) {
      this.error(r);
    }
  }
  /**
   * @param {Batch} batch
   */
  #v(e) {
    this.is_pending = !1, e.transfer_effects(this.#d, this.#g);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    zn(e, this.#d, this.#g);
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
  #w(e) {
    var r = fe, n = se, a = Te;
    nt(this.#n), Ge(this.#n), Vt(this.#n.ctx);
    try {
      return xt.ensure(), e();
    } finally {
      nt(r), Ge(n), Vt(a);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  #_(e, r) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#_(e, r);
      return;
    }
    this.#f += e, this.#f === 0 && (this.#v(r), this.#r && Lt(this.#r, () => {
      this.#r = null;
    }), this.#a && (this.#t.before(this.#a), this.#a = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, r) {
    this.#_(e, r), this.#h += e, !(!this.#u || this.#c) && (this.#c = !0, st(() => {
      this.#c = !1, this.#u && Yt(this.#u, this.#h);
    }));
  }
  get_effect_pending() {
    return this.#b(), i(
      /** @type {Source<number>} */
      this.#u
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!this.#e.onerror && !this.#e.failed)
      throw e;
    ne?.is_fork ? (this.#i && ne.skip_effect(this.#i), this.#r && ne.skip_effect(this.#r), this.#o && ne.skip_effect(this.#o), ne.oncommit(() => {
      this.#E(e);
    })) : this.#E(e);
  }
  /**
   * @param {unknown} error
   */
  #E(e) {
    this.#i && (Be(this.#i), this.#i = null), this.#r && (Be(this.#r), this.#r = null), this.#o && (Be(this.#o), this.#o = null);
    let r = this.#e.failed;
    const n = (a) => {
      const { reset: l, invoke_onerror: o } = this.#m(a);
      o(), r && (this.#o = this.#w(() => {
        try {
          return ze(() => {
            var s = (
              /** @type {Effect} */
              fe
            );
            s.b = this, s.f |= Hr, r(
              this.#t,
              () => a,
              () => l
            );
          });
        } catch (s) {
          return $e(
            s,
            /** @type {Effect} */
            this.#n.parent
          ), null;
        }
      }));
    };
    st(() => {
      var a;
      try {
        a = this.transform_error(e);
      } catch (l) {
        $e(l, this.#n && this.#n.parent);
        return;
      }
      a !== null && typeof a == "object" && typeof /** @type {any} */
      a.then == "function" ? a.then(
        n,
        /** @param {unknown} e */
        (l) => $e(l, this.#n && this.#n.parent)
      ) : n(a);
    });
  }
}
function M(t, e) {
  var r = e == null ? "" : typeof e == "object" ? `${e}` : e;
  r !== /** @type {any} */
  (t[Yr] ??= t.nodeValue) && (t[Yr] = r, t.nodeValue = `${r}`);
}
function Ki(t, e) {
  return Ji(t, e);
}
const vr = /* @__PURE__ */ new Map();
function Ji(t, { target: e, anchor: r, props: n = {}, events: a, context: l, intro: o = !0, transformError: s }) {
  Ai();
  var f = void 0, u = Ni(() => {
    var v = r ?? e.appendChild(ct());
    Gi(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (g) => {
        Me({});
        var p = (
          /** @type {ComponentContext} */
          Te
        );
        l && (p.c = l), a && (n.$$events = a), f = t(g, n) || nn(), Re();
      },
      s
    );
    var c = /* @__PURE__ */ new Set(), h = (g) => {
      for (var p = 0; p < g.length; p++) {
        var S = g[p];
        if (!c.has(S)) {
          c.add(S);
          var m = qi(S);
          for (const K of [e, document]) {
            var C = vr.get(K);
            C === void 0 && (C = /* @__PURE__ */ new Map(), vr.set(K, C));
            var B = C.get(S);
            B === void 0 ? (K.addEventListener(S, Qr, { passive: m }), C.set(S, 1)) : C.set(S, B + 1);
          }
        }
      }
    };
    return h(Ar(ma)), Zr.add(h), () => {
      for (var g of c)
        for (const m of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            vr.get(m)
          ), S = (
            /** @type {number} */
            p.get(g)
          );
          --S == 0 ? (m.removeEventListener(g, Qr), p.delete(g), p.size === 0 && vr.delete(m)) : p.set(g, S);
        }
      Zr.delete(h), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return Zi.set(f, u), f;
}
let Zi = /* @__PURE__ */ new WeakMap();
class ya {
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
  #l = /* @__PURE__ */ new Map();
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
  #s = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #n = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, r = !0) {
    this.anchor = e, this.#n = r;
  }
  /**
   * @param {Batch} batch
   */
  #i = (e) => {
    if (this.#t.has(e)) {
      var r = (
        /** @type {Key} */
        this.#t.get(e)
      ), n = this.#l.get(r);
      if (n)
        Er(n), this.#s.delete(r);
      else {
        var a = this.#e.get(r);
        a && (Er(a.effect), this.#l.set(r, a.effect), this.#e.delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
      }
      for (const [l, o] of this.#t) {
        if (this.#t.delete(l), l === e)
          break;
        const s = this.#e.get(o);
        s && (Be(s.effect), this.#e.delete(o));
      }
      for (const [l, o] of this.#l) {
        if (l === r || this.#s.has(l)) continue;
        const s = () => {
          if (Array.from(this.#t.values()).includes(l)) {
            var u = document.createDocumentFragment();
            vn(o, u), u.append(ct()), this.#e.set(l, { effect: o, fragment: u });
          } else
            Be(o);
          this.#s.delete(l), this.#l.delete(l);
        };
        this.#n || !n ? (this.#s.add(l), Lt(o, s, !1)) : s();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #r = (e) => {
    this.#t.delete(e);
    const r = Array.from(this.#t.values());
    for (const [n, a] of this.#e)
      r.includes(n) || (Be(a.effect), this.#e.delete(n));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, r) {
    var n = (
      /** @type {Batch} */
      ne
    ), a = na();
    if (r && !this.#l.has(e) && !this.#e.has(e))
      if (a) {
        var l = document.createDocumentFragment(), o = ct();
        l.append(o), this.#e.set(e, {
          effect: ze(() => r(o)),
          fragment: l
        });
      } else
        this.#l.set(
          e,
          ze(() => r(this.anchor))
        );
    if (this.#t.set(n, e), a) {
      for (const [s, f] of this.#l)
        s === e ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [s, f] of this.#e)
        s === e ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(this.#i), n.ondiscard(this.#r);
    } else
      this.#i(n);
  }
}
function Y(t, e, r = !1) {
  var n = new ya(t), a = r ? zt : 0;
  function l(o, s) {
    n.ensure(o, s);
  }
  Mr(() => {
    var o = !1;
    e((s, f = 0) => {
      o = !0, l(f, s);
    }), o || l(-1, null);
  }, a);
}
const Qi = /* @__PURE__ */ Symbol("NaN");
function $i(t, e, r) {
  var n = new ya(t);
  Mr(() => {
    var a = e();
    a !== a && (a = /** @type {any} */
    Qi), n.ensure(a, r);
  });
}
function we(t, e) {
  return e;
}
function el(t, e, r) {
  for (var n = [], a = e.length, l, o = e.length, s = 0; s < a; s++) {
    let c = e[s];
    Lt(
      c,
      () => {
        if (l) {
          if (l.pending.delete(c), l.done.add(c), l.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            $r(t, Ar(l.done)), h.delete(l), h.size === 0 && (t.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var f = n.length === 0 && r !== null && t.pending.size === 0;
    if (f) {
      var u = (
        /** @type {Element} */
        r
      ), v = (
        /** @type {Element} */
        u.parentNode
      );
      Ti(v), v.append(u), t.items.clear();
    }
    $r(t, e, !f);
  } else
    l = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ??= /* @__PURE__ */ new Set()).add(l);
}
function $r(t, e, r = !0) {
  var n;
  if (t.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of t.pending.values())
      for (const s of o)
        n.add(
          /** @type {EachItem} */
          t.items.get(s).e
        );
  }
  for (var a = 0; a < e.length; a++) {
    var l = e[a];
    if (n?.has(l)) {
      l.f |= et;
      const o = document.createDocumentFragment();
      vn(l, o);
    } else
      Be(e[a], r);
  }
}
var Sn;
function _e(t, e, r, n, a, l = null) {
  var o = t, s = /* @__PURE__ */ new Map(), f = (e & In) !== 0;
  if (f) {
    var u = (
      /** @type {Element} */
      t
    );
    o = u.appendChild(ct());
  }
  var v = null, c = /* @__PURE__ */ Yn(() => {
    var K = r();
    return (
      /** @type {V[]} */
      Cr(K) ? K : K == null ? [] : Ar(K)
    );
  }), h, g = /* @__PURE__ */ new Map(), p = !0;
  function S(K) {
    (B.effect.f & Fe) === 0 && (B.pending.delete(K), B.fallback = v, tl(B, h, o, e, n), v !== null && (h.length === 0 ? (v.f & et) === 0 ? Er(v) : (v.f ^= et, nr(v, null, o)) : Lt(v, () => {
      v = null;
    })));
  }
  function m(K) {
    B.pending.delete(K);
  }
  var C = Mr(() => {
    h = /** @type {V[]} */
    i(c);
    for (var K = h.length, I = /* @__PURE__ */ new Set(), w = (
      /** @type {Batch} */
      ne
    ), q = na(), U = 0; U < K; U += 1) {
      var R = h[U], F = n(R, U), $ = p ? null : s.get(F);
      $ ? ($.v && Yt($.v, R), $.i && Yt($.i, U), q && w.unskip_effect($.e)) : ($ = rl(
        s,
        p ? o : Sn ??= ct(),
        R,
        F,
        U,
        a,
        e,
        r
      ), p || ($.e.f |= et), s.set(F, $)), I.add(F);
    }
    if (K === 0 && l && !v && (p ? v = ze(() => l(o)) : (v = ze(() => l(Sn ??= ct())), v.f |= et)), K > I.size && ai(), !p)
      if (g.set(w, I), q) {
        for (const [z, A] of s)
          I.has(z) || w.skip_effect(A.e);
        w.oncommit(S), w.ondiscard(m);
      } else
        S(w);
    i(c);
  }), B = { effect: C, items: s, pending: g, outrogroups: null, fallback: v };
  p = !1;
}
function er(t) {
  for (; t !== null && (t.f & We) === 0; )
    t = t.next;
  return t;
}
function tl(t, e, r, n, a) {
  var l = (n & Va) !== 0, o = e.length, s = t.items, f = er(t.effect.first), u, v = null, c, h = [], g = [], p, S, m, C;
  if (l)
    for (C = 0; C < o; C += 1)
      p = e[C], S = a(p, C), m = /** @type {EachItem} */
      s.get(S).e, (m.f & et) === 0 && (m.nodes?.a?.measure(), (c ??= /* @__PURE__ */ new Set()).add(m));
  for (C = 0; C < o; C += 1) {
    if (p = e[C], S = a(p, C), m = /** @type {EachItem} */
    s.get(S).e, t.outrogroups !== null)
      for (const $ of t.outrogroups)
        $.pending.delete(m), $.done.delete(m);
    if ((m.f & De) !== 0 && (Er(m), l && (m.nodes?.a?.unfix(), (c ??= /* @__PURE__ */ new Set()).delete(m))), (m.f & et) !== 0)
      if (m.f ^= et, m === f)
        nr(m, null, r);
      else {
        var B = v ? v.next : f;
        m === t.effect.last && (t.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), mt(t, v, m), mt(t, m, B), nr(m, B, r), v = m, h = [], g = [], f = er(v.next);
        continue;
      }
    if (m !== f) {
      if (u !== void 0 && u.has(m)) {
        if (h.length < g.length) {
          var K = g[0], I;
          v = K.prev;
          var w = h[0], q = h[h.length - 1];
          for (I = 0; I < h.length; I += 1)
            nr(h[I], K, r);
          for (I = 0; I < g.length; I += 1)
            u.delete(g[I]);
          mt(t, w.prev, q.next), mt(t, v, w), mt(t, q, K), f = K, v = q, C -= 1, h = [], g = [];
        } else
          u.delete(m), nr(m, f, r), mt(t, m.prev, m.next), mt(t, m, v === null ? t.effect.first : v.next), mt(t, v, m), v = m;
        continue;
      }
      for (h = [], g = []; f !== null && f !== m; )
        (u ??= /* @__PURE__ */ new Set()).add(f), g.push(f), f = er(f.next);
      if (f === null)
        continue;
    }
    (m.f & et) === 0 && h.push(m), v = m, f = er(m.next);
  }
  if (t.outrogroups !== null) {
    for (const $ of t.outrogroups)
      $.pending.size === 0 && ($r(t, Ar($.done)), t.outrogroups?.delete($));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (f !== null || u !== void 0) {
    var U = [];
    if (u !== void 0)
      for (m of u)
        (m.f & De) === 0 && U.push(m);
    for (; f !== null; )
      (f.f & De) === 0 && f !== t.fallback && U.push(f), f = er(f.next);
    var R = U.length;
    if (R > 0) {
      var F = (n & In) !== 0 && o === 0 ? r : null;
      if (l) {
        for (C = 0; C < R; C += 1)
          U[C].nodes?.a?.measure();
        for (C = 0; C < R; C += 1)
          U[C].nodes?.a?.fix();
      }
      el(t, U, F);
    }
  }
  l && st(() => {
    if (c !== void 0)
      for (m of c)
        m.nodes?.a?.apply();
  });
}
function rl(t, e, r, n, a, l, o, s) {
  var f = (o & Ha) !== 0 ? (o & Ya) === 0 ? /* @__PURE__ */ Si(r, !1, !1) : Rt(r) : null, u = (o & za) !== 0 ? Rt(a) : null;
  return {
    v: f,
    i: u,
    e: ze(() => (l(e, f ?? r, u ?? a, s), () => {
      t.delete(n);
    }))
  };
}
function nr(t, e, r) {
  if (t.nodes)
    for (var n = t.nodes.start, a = t.nodes.end, l = e && (e.f & et) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ur(n)
      );
      if (l.before(n), n === a)
        return;
      n = o;
    }
}
function mt(t, e, r) {
  e === null ? t.effect.first = r : e.next = r, r === null ? t.effect.last = e : r.prev = e;
}
function yt(t, e, r = !1, n = !1, a = !1, l = !1) {
  var o = t, s = "";
  if (r)
    var f = (
      /** @type {Element} */
      t
    );
  L(() => {
    var u = (
      /** @type {Effect} */
      fe
    );
    if (s !== (s = e() ?? "")) {
      if (r) {
        u.nodes = null, f.innerHTML = /** @type {string} */
        s, s !== "" && Nt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Je(f),
          /** @type {TemplateNode} */
          f.lastChild
        );
        return;
      }
      if (u.nodes !== null && (oa(
        u.nodes.start,
        /** @type {TemplateNode} */
        u.nodes.end
      ), u.nodes = null), s !== "") {
        var v = n ? Qa : a ? $a : void 0, c = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          aa(n ? "svg" : a ? "math" : "template", v)
        );
        c.innerHTML = /** @type {any} */
        s;
        var h = n || a ? c : (
          /** @type {HTMLTemplateElement} */
          c.content
        );
        if (Nt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Je(h),
          /** @type {TemplateNode} */
          h.lastChild
        ), n || a)
          for (; /* @__PURE__ */ Je(h); )
            o.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Je(h)
            );
        else
          o.before(h);
      }
    }
  });
}
function wt(t, e, r) {
  un(() => {
    var n = Ie(() => e(t, r?.()) || {});
    if (r && n?.update) {
      var a = !1, l = (
        /** @type {any} */
        {}
      );
      Jt(() => {
        var o = r();
        Fi(o), a && jn(l, o) && (l = o, n.update(o));
      }), a = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function wa(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var a = t.length;
    for (e = 0; e < a; e++) t[e] && (r = wa(t[e])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function nl() {
  for (var t, e, r = 0, n = "", a = arguments.length; r < a; r++) (t = arguments[r]) && (e = wa(t)) && (n && (n += " "), n += e);
  return n;
}
function al(t) {
  return typeof t == "object" ? nl(t) : t ?? "";
}
const Cn = [...` 	
\r\f \v\uFEFF`];
function il(t, e, r) {
  var n = t == null ? "" : "" + t;
  if (e && (n = n ? n + " " + e : e), r) {
    for (var a of Object.keys(r))
      if (r[a])
        n = n ? n + " " + a : a;
      else if (n.length)
        for (var l = a.length, o = 0; (o = n.indexOf(a, o)) >= 0; ) {
          var s = o + l;
          (o === 0 || Cn.includes(n[o - 1])) && (s === n.length || Cn.includes(n[s])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(s + 1) : o = s;
        }
  }
  return n === "" ? null : n;
}
function An(t, e = !1) {
  var r = e ? " !important;" : ";", n = "";
  for (var a of Object.keys(t)) {
    var l = t[a];
    l != null && l !== "" && (n += " " + a + ": " + l + r);
  }
  return n;
}
function Fr(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function ll(t, e) {
  if (e) {
    var r = "", n, a;
    if (Array.isArray(e) ? (n = e[0], a = e[1]) : n = e, t) {
      t = String(t).replaceAll(/\/\*.*?\*\//g, "").trim();
      var l = !1, o = 0, s = !1, f = [];
      n && f.push(...Object.keys(n).map(Fr)), a && f.push(...Object.keys(a).map(Fr));
      var u = 0, v = -1;
      const S = t.length;
      for (var c = 0; c < S; c++) {
        var h = t[c];
        if (s ? h === "/" && t[c - 1] === "*" && (s = !1) : l ? l === h && (l = !1) : h === "/" && t[c + 1] === "*" ? s = !0 : h === '"' || h === "'" ? l = h : h === "(" ? o++ : h === ")" && o--, !s && l === !1 && o === 0) {
          if (h === ":" && v === -1)
            v = c;
          else if (h === ";" || c === S - 1) {
            if (v !== -1) {
              var g = Fr(t.substring(u, v).trim());
              if (!f.includes(g)) {
                h !== ";" && c++;
                var p = t.substring(u, c).trim();
                r += " " + p + ";";
              }
            }
            u = c + 1, v = -1;
          }
        }
      }
    }
    return n && (r += An(n)), a && (r += An(a, !0)), r = r.trim(), r === "" ? null : r;
  }
  return t == null ? null : String(t);
}
function Le(t, e, r, n, a, l) {
  var o = (
    /** @type {any} */
    t[zr]
  );
  if (o !== r || o === void 0) {
    var s = il(r, n, l);
    s == null ? t.removeAttribute("class") : t.className = s, t[zr] = r;
  } else if (l && a !== l)
    for (var f in l) {
      var u = !!l[f];
      (a == null || u !== !!a[f]) && t.classList.toggle(f, u);
    }
  return l;
}
function jr(t, e = {}, r, n) {
  for (var a in r) {
    var l = r[a];
    e[a] !== l && (r[a] == null ? t.style.removeProperty(a) : t.style.setProperty(a, l, n));
  }
}
function jt(t, e, r, n) {
  var a = (
    /** @type {any} */
    t[Vr]
  );
  if (a !== e) {
    var l = ll(e, n);
    l == null ? t.removeAttribute("style") : t.style.cssText = l, t[Vr] = e;
  } else n && (Array.isArray(n) ? (jr(t, r?.[0], n[0]), jr(t, r?.[1], n[1], "important")) : jr(t, r, n));
  return n;
}
function ol(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function sl(t, e) {
  var r = t.__defaultValue, n = t.multiple, a = n ? r ?? [] : null;
  if (!(n && !Cr(a))) {
    t.selectedIndex;
    for (var l of t.options) {
      var o = Ut(l);
      ol(
        l,
        n ? (
          /** @type {any[]} */
          a.includes(o)
        ) : $n(o, r)
      );
    }
  }
}
function hn(t, e, r = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Cr(e))
      return ti();
    for (var n of t.options)
      n.selected = e.includes(Ut(n));
    return;
  }
  for (n of t.options) {
    var a = Ut(n);
    if ($n(a, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function xa(t) {
  var e = new MutationObserver((r) => {
    r.every(cl) || ("__defaultValue" in t && sl(t), "__value" in t && hn(t, t.__value));
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Lr(() => {
    e.disconnect();
  });
}
function fl(t, e, r = e) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  ln(t, "change", (l) => {
    var o = l ? "[selected]" : ":checked", s;
    if (t.multiple)
      s = [].map.call(t.querySelectorAll(o), Ut);
    else {
      var f = t.querySelector(o) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      s = f && Ut(f);
    }
    r(s), t.__value = s, ne !== null && n.add(ne);
  }), un(() => {
    var l = e();
    if (t === document.activeElement) {
      var o = (
        /** @type {Batch} */
        ne
      );
      if (n.has(o))
        return;
    }
    if (hn(t, l, a), a && l === void 0) {
      var s = t.querySelector(":checked");
      s !== null && (l = Ut(s), r(l));
    }
    t.__value = l, a = !1;
  });
}
function Ut(t) {
  return "__value" in t ? t.__value : t.value;
}
function cl(t) {
  if (
    /** @type {Element} */
    t.target.closest("selectedcontent") !== null
  )
    return !0;
  if (t.type === "childList") {
    var e = [...t.addedNodes, ...t.removedNodes];
    return e.length > 0 && e.every((r) => r.nodeName === "SELECTEDCONTENT");
  }
  return !1;
}
const ul = /* @__PURE__ */ Symbol("is custom element"), dl = /* @__PURE__ */ Symbol("is html"), vl = Ua ? "progress" : "PROGRESS";
function ka(t, e) {
  var r = Ea(t);
  r.value === (r.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== vl) || (t.value = e ?? "");
}
function J(t, e, r, n) {
  var a = Ea(t);
  a[e] !== (a[e] = r) && (e === "loading" && (t[Ba] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && hl(t).has(e) ? t[e] = r : t.setAttribute(e, r));
}
function Ea(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[Pn] ??= {
      [ul]: t.nodeName.includes("-"),
      [dl]: t.namespaceURI === Dn
    }
  );
}
var Tn = /* @__PURE__ */ new Map();
function hl(t) {
  var e = t.getAttribute("is") || t.nodeName, r = Tn.get(e);
  if (r) return r;
  Tn.set(e, r = /* @__PURE__ */ new Set());
  for (var n, a = t, l = Element.prototype; l !== a; ) {
    n = Mn(a);
    for (var o in n)
      n[o].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && r.add(o);
    a = tn(a);
  }
  return r;
}
function Sr(t, e, r = e) {
  var n = /* @__PURE__ */ new WeakSet();
  ln(t, "input", async (a) => {
    var l = a ? t.defaultValue : t.value;
    if (l = qr(t) ? Br(l) : l, r(l), ne !== null && n.add(ne), await fr(), l !== (l = e())) {
      var o = t.selectionStart, s = t.selectionEnd, f = t.value.length;
      if (t.value = l ?? "", s !== null) {
        var u = t.value.length;
        o === s && s === f && u > f ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = o, t.selectionEnd = Math.min(s, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ie(e) == null && t.value && (r(qr(t) ? Br(t.value) : t.value), ne !== null && n.add(ne)), Jt(() => {
    var a = e();
    if (t === document.activeElement) {
      var l = (
        /** @type {Batch} */
        ne
      );
      if (n.has(l))
        return;
    }
    qr(t) && a === Br(t.value) || t.type === "date" && !a && !t.value || a !== t.value && (t.value = a ?? "");
  });
}
function _l(t, e, r = e) {
  ln(t, "change", (n) => {
    var a = n ? t.defaultChecked : t.checked;
    r(a);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Ie(e) == null && r(t.checked), Jt(() => {
    var n = e();
    t.checked = !!n;
  });
}
function qr(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Br(t) {
  return t === "" ? null : +t;
}
function Ur(t, e) {
  return t === e || t?.[ft] === e;
}
function Ot(t = nn(), e, r, n) {
  var a = (
    /** @type {ComponentContext} */
    Te.r
  ), l = (
    /** @type {Effect} */
    fe
  );
  return un(() => {
    var o, s;
    return Jt(() => {
      o = s, s = [], Ie(() => {
        Ur(r(...s), t) || (e(t, ...s), o && Ur(r(...o), t) && e(null, ...o));
      });
    }), () => {
      let f = l;
      for (; f !== a && f.parent !== null && f.parent.f & br; )
        f = f.parent;
      const u = () => {
        s && Ur(r(...s), t) && e(null, ...s);
      }, v = f.teardown;
      f.teardown = () => {
        u(), v?.();
      };
    };
  }), t;
}
function gl(t, e, r, n, a) {
  var l = () => {
    n(r[t]);
  };
  r.addEventListener(e, l), a ? Jt(() => {
    r[t] = a();
  }) : l(), (r === document.body || r === window || r === document) && Lr(() => {
    r.removeEventListener(e, l);
  });
}
let hr = !1;
function pl(t) {
  var e = hr;
  try {
    return hr = !1, [t(), hr];
  } finally {
    hr = e;
  }
}
function Pt(t, e, r, n) {
  var a = !0, l = (r & Xa) !== 0, o = (r & Ka) !== 0, s = (
    /** @type {V} */
    n
  ), f = !0, u = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), v = () => o && a ? (u ??= /* @__PURE__ */ or(
    /** @type {() => V} */
    n
  ), i(u)) : (f && (f = !1, s = o ? Ie(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s);
  let c;
  if (l) {
    var h = ft in t || qa in t;
    c = qt(t, e)?.set ?? (h && e in t ? (I) => t[e] = I : void 0);
  }
  var g, p = !1;
  l ? [g, p] = pl(() => (
    /** @type {V} */
    t[e]
  )) : g = /** @type {V} */
  t[e], g === void 0 && n !== void 0 && (g = v(), c && (fi(), c(g)));
  var S;
  if (S = () => {
    var I = (
      /** @type {V} */
      t[e]
    );
    return I === void 0 ? v() : (f = !0, I);
  }, (r & Ga) === 0)
    return S;
  if (c) {
    var m = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(I, w) {
        return arguments.length > 0 ? ((!w || m || p) && c(w ? S() : I), I) : S();
      })
    );
  }
  var C = !1, B = ((r & Wa) !== 0 ? or : Yn)(() => (C = !1, S()));
  l && i(B);
  var K = (
    /** @type {Effect} */
    fe
  );
  return (
    /** @type {() => V} */
    (function(I, w) {
      if (arguments.length > 0) {
        const q = w ? i(B) : l ? me(I) : I;
        return x(B, q), C = !0, s !== void 0 && (s = q), I;
      }
      return ht && C || (K.f & Fe) !== 0 ? B.v : i(B);
    })
  );
}
function kt(t) {
  Te === null && Bn(), Tt(() => {
    const e = Ie(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function _n(t) {
  Te === null && Bn(), kt(() => () => Ie(t));
}
const ml = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ml);
async function Ae(t, e, r = {}) {
  const n = await fetch(`${window.init.urlRoot}/api/v1${t}`, {
    credentials: "same-origin",
    method: r.method || (e ? "POST" : "GET"),
    headers: { "Content-Type": "application/json", "CSRF-Token": window.init.csrfNonce },
    ...e ? { body: JSON.stringify(e) } : {}
  });
  if (n.status === 401) throw new Error("Please log in to continue.");
  let a;
  try {
    a = await n.json();
  } catch {
    throw new Error("The server did not return a valid response. Please try again.");
  }
  if (!n.ok || a.success === !1) {
    const l = a.errors && typeof a.errors == "object" ? Object.values(a.errors).flat(1 / 0).join(" ") : a.errors;
    throw new Error(a.message || l || "This request is unavailable. Please try again.");
  }
  return r.full ? a : a.data;
}
var bl = /* @__PURE__ */ E('<button type="button" class="column-resize"></button>'), yl = /* @__PURE__ */ E('<th><button type="button" class="column-label"> <span class="column-sort" aria-hidden="true"> </span></button><!></th>'), wl = /* @__PURE__ */ E('<i role="img"></i>'), xl = /* @__PURE__ */ E('<button class="open-challenge"> </button>'), kl = /* @__PURE__ */ E("<td><!></td>"), El = /* @__PURE__ */ E("<tr></tr>"), Sl = /* @__PURE__ */ E('<div class="message-list"><table><thead><tr></tr></thead><tbody id="challenge-rows"></tbody></table></div>');
function Cl(t, e) {
  Me(e, !0);
  let r = Pt(e, "hidden", 3, !1), n = Pt(e, "solvesEnabled", 3, !1);
  const a = ["status", "subject", "points", "category", "solves"], l = {
    status: "Status",
    subject: "Subject",
    category: "Category",
    points: "Points",
    solves: "Solves"
  }, o = {
    status: 55,
    subject: 130,
    category: 90,
    points: 65,
    solves: 65
  }, s = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
  let f = /* @__PURE__ */ V(me([...a])), u = /* @__PURE__ */ V(null), v, c = !1;
  const h = document.createElement("canvas").getContext("2d");
  let g = /* @__PURE__ */ ue(() => i(f).filter((_) => _ !== "solves" || n())), p = /* @__PURE__ */ V(me({
    key: Ie(() => e.defaultOrder) === "name" ? "subject" : "id",
    direction: 1
  })), S = /* @__PURE__ */ V(window.innerWidth <= 760), m = /* @__PURE__ */ ue(() => i(g).filter((_) => !i(S) || _ !== "category")), C = /* @__PURE__ */ ue(() => {
    const _ = i(p).key === "solves" && !n() ? "id" : i(p).key, b = (N) => ({
      status: Number(N.solved_by_me),
      subject: N.name,
      category: N.category,
      points: N.value,
      solves: N.solves ?? -1,
      id: N.id
    })[_];
    return [...e.challenges].sort((N, W) => (["id", "points", "status", "solves"].includes(_) ? b(N) - b(W) : s.compare(b(N), b(W))) * i(p).direction || N.id - W.id);
  });
  function B() {
    if (!v || r()) return;
    const _ = v.parentElement.clientWidth;
    if (!_) return;
    const b = {};
    for (const P of i(g)) {
      const D = v.querySelector(`th[data-column="${P}"] .column-label`);
      h.font = D ? getComputedStyle(D).font : "bold 12px Tahoma", o[P] = Math.ceil(h.measureText(l[P]).width) + 32;
      const re = v.querySelector(`td[data-column="${P}"]`), ae = re ? getComputedStyle(re) : null;
      h.font = ae ? `bold ${ae.fontSize} ${ae.fontFamily}` : "bold 12px Tahoma";
      const de = e.challenges.map((j) => ({
        subject: j.name,
        category: j.category,
        points: j.value,
        solves: j.solves ?? "-"
      })[P] ?? "");
      b[P] = Math.max(o[P], ...de.map((j) => Math.ceil(h.measureText(String(j)).width) + 24));
    }
    const N = { ...b, ...c ? i(u) : {} };
    let W = _ - i(m).reduce((P, D) => P + N[D], 0);
    if (W >= 0) N.subject += W;
    else {
      for (const P of ["subject", "category", "status", "points", "solves"].filter((D) => i(m).includes(D))) {
        const D = Math.min(-W, Math.max(0, N[P] - o[P]));
        N[P] -= D, W += D;
      }
      if (W < 0) {
        const P = i(m).reduce((D, re) => D + N[re], 0);
        for (const D of i(m)) N[D] *= _ / P;
      }
    }
    x(u, N, !0);
  }
  function K(_) {
    const b = new ResizeObserver(B);
    return b.observe(_.parentElement), {
      destroy() {
        b.disconnect();
      }
    };
  }
  Tt(() => {
    i(m), r(), e.challenges, Ie(() => fr().then(B));
  });
  function I(_, b, N = i(u)) {
    c = !0;
    const W = i(m)[i(m).indexOf(_) + 1];
    if (!W) return;
    const P = Math.max(Math.min(0, o[_] - N[_]), Math.min(b, Math.max(0, N[W] - o[W])));
    x(
      u,
      {
        ...i(u),
        [_]: N[_] + P,
        [W]: N[W] - P
      },
      !0
    );
  }
  function w() {
    x(
      u,
      Object.fromEntries([...v.tHead.rows[0].cells].map((_) => [
        _.dataset.column,
        _.getBoundingClientRect().width || o[_.dataset.column]
      ])),
      !0
    );
  }
  async function q(_, b) {
    if (!b || b === _) return;
    i(u) || w();
    const N = new Map([...v.querySelectorAll("th,td")].map((D) => [D, D.getBoundingClientRect().left])), W = i(f).indexOf(b), P = i(f).filter((D) => D !== _);
    P.splice(W, 0, _), x(f, P, !0), await fr(), matchMedia("(prefers-reduced-motion: reduce)").matches || N.forEach((D, re) => {
      const ae = D - re.getBoundingClientRect().left;
      ae && re.animate(
        [
          { transform: `translateX(${ae}px)` },
          { transform: "translateX(0)" }
        ],
        { duration: 180, easing: "ease-out" }
      );
    });
  }
  function U(_, { key: b, resize: N = !1 }) {
    const W = _.closest("th");
    let P, D, re = !1;
    function ae() {
      D?.remove(), D = null, P = null, W.classList.remove("column-dragging"), v.querySelectorAll(".column-drop-before,.column-drop-after").forEach((te) => te.classList.remove("column-drop-before", "column-drop-after"));
    }
    function de(te) {
      te.button !== 0 || !te.isPrimary || (re = !1, w(), P = {
        x: te.clientX,
        y: te.clientY,
        offset: te.clientX - W.getBoundingClientRect().left,
        width: i(u)[b],
        widths: { ...i(u) }
      }, _.setPointerCapture(te.pointerId));
    }
    function j(te) {
      if (P) {
        if (N) {
          I(b, te.clientX - P.x, P.widths);
          return;
        }
        if (!D && Math.hypot(te.clientX - P.x, te.clientY - P.y) > 5 && (re = !0, D = document.createElement("div"), D.className = "column-drag-ghost", D.textContent = l[b], D.setAttribute("aria-hidden", "true"), D.style.width = `${P.width}px`, document.body.append(D), W.classList.add("column-dragging")), D) {
          D.style.left = `${te.clientX - P.offset}px`, D.style.top = `${te.clientY + 12}px`, v.querySelectorAll(".column-drop-before,.column-drop-after").forEach((T) => T.classList.remove("column-drop-before", "column-drop-after"));
          const G = document.elementFromPoint(te.clientX, te.clientY)?.closest("th");
          G?.parentElement === W.parentElement && G !== W && G.classList.add(i(f).indexOf(b) < i(f).indexOf(G.dataset.column) ? "column-drop-after" : "column-drop-before");
        }
      }
    }
    function O(te) {
      if (!P) return;
      const G = document.elementFromPoint(te.clientX, te.clientY)?.closest("th"), T = !!D;
      ae(), _.hasPointerCapture(te.pointerId) && _.releasePointerCapture(te.pointerId), !N && T && G?.parentElement === W.parentElement && q(b, G.dataset.column), _.focus();
    }
    function Z(te) {
      if (!N) {
        if (re && te.detail !== 0) {
          re = !1;
          return;
        }
        x(
          p,
          {
            key: b,
            direction: i(p).key === b ? -i(p).direction : 1
          },
          !0
        );
      }
    }
    function ee(te) {
      if (!["ArrowLeft", "ArrowRight"].includes(te.key) || !N && !te.altKey) return;
      te.preventDefault();
      const G = te.key === "ArrowRight" ? 1 : -1;
      if (N)
        w(), I(b, G * 10);
      else {
        const T = i(g).filter((X) => !i(S) || X !== "category");
        q(b, T[T.indexOf(b) + G]);
      }
    }
    const ie = {
      pointerdown: de,
      pointermove: j,
      pointerup: O,
      pointercancel: ae,
      lostpointercapture: ae,
      click: Z,
      keydown: ee
    };
    return Object.entries(ie).forEach(([te, G]) => _.addEventListener(te, G)), {
      destroy() {
        ae(), Object.entries(ie).forEach(([te, G]) => _.removeEventListener(te, G));
      }
    };
  }
  var R = Sl();
  ut("resize", Kr, () => x(S, window.innerWidth <= 760));
  var F = k(R);
  jt(F, "", {}, { width: "100%" });
  var $ = k(F), z = k($);
  _e(z, 20, () => i(g), (_) => _, (_, b) => {
    var N = yl();
    let W;
    var P = k(N), D = k(P), re = d(D), ae = H(re, !0);
    wt(P, (Z, ee) => U?.(Z, ee), () => ({ key: b }));
    var de = d(P);
    {
      var j = (Z) => {
        var ee = bl();
        wt(ee, (ie, te) => U?.(ie, te), () => ({ key: b, resize: !0 })), L(() => J(ee, "aria-label", `Resize ${l[b]} column`)), y(Z, ee);
      }, O = /* @__PURE__ */ ue(() => i(m).includes(b) && b !== i(m).at(-1));
      Y(de, (Z) => {
        i(O) && Z(j);
      });
    }
    L(() => {
      J(N, "data-column", b), J(N, "aria-sort", i(p).key === b ? i(p).direction === 1 ? "ascending" : "descending" : "none"), W = jt(N, "", W, {
        width: i(u) ? `${i(u)[b] ?? o[b]}px` : void 0
      }), J(P, "aria-label", `${l[b]} column. Click to sort. Drag or use Alt and arrow keys to move.`), M(D, l[b]), M(ae, i(p).key === b ? i(p).direction === 1 ? "▲" : "▼" : "");
    }), y(_, N);
  });
  var A = d($);
  _e(A, 21, () => i(C), (_) => _.id, (_, b) => {
    var N = El();
    _e(N, 20, () => i(g), (W) => W, (W, P) => {
      var D = kl(), re = k(D);
      {
        var ae = (ee) => {
          var ie = wl();
          L(() => {
            Le(ie, 1, `fas fa-envelope${i(b).solved_by_me ? "-open" : ""}`), J(ie, "aria-label", i(b).solved_by_me ? "Solved" : "Unsolved");
          }), y(ee, ie);
        }, de = (ee) => {
          var ie = xl(), te = H(ie, !0);
          L(() => {
            J(ie, "data-id", i(b).id), M(te, i(b).name);
          }), ge("click", ie, () => e.onopen(i(b).id)), y(ee, ie);
        }, j = (ee) => {
          var ie = Ye();
          L(() => M(ie, i(b).category)), y(ee, ie);
        }, O = (ee) => {
          var ie = Ye();
          L(() => M(ie, i(b).solves ?? "-")), y(ee, ie);
        }, Z = (ee) => {
          var ie = Ye();
          L(() => M(ie, i(b).value)), y(ee, ie);
        };
        Y(re, (ee) => {
          P === "status" ? ee(ae) : P === "subject" ? ee(de, 1) : P === "category" ? ee(j, 2) : P === "solves" ? ee(O, 3) : ee(Z, -1);
        });
      }
      L(() => J(D, "data-column", P)), y(W, D);
    }), L(() => Le(N, 1, al(i(b).solved_by_me ? "read" : "unread"))), y(_, N);
  }), Ot(F, (_) => v = _, () => v), wt(F, (_) => K?.(_)), L(() => J(R, "hidden", r())), y(t, R), Re();
}
at(["click"]);
var Al = /* @__PURE__ */ E('<details><summary> </summary> <div class="hint-content"><!></div></details>');
function Tl(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ V(!1), n = /* @__PURE__ */ V(!1), a = /* @__PURE__ */ V(null), l = /* @__PURE__ */ V("");
  async function o(m) {
    if (x(r, m.currentTarget.open, !0), !(!i(r) || i(n) || i(a))) {
      x(n, !0), x(l, "");
      try {
        let C = await Ae(`/hints/${e.hint.id}`);
        if (!C.content) {
          if (C.cost > 0 && !confirm(`Unlock this hint for ${C.cost} points?`)) {
            x(r, !1);
            return;
          }
          await Ae("/unlocks", { target: e.hint.id, type: "hints" }), C = await Ae(`/hints/${e.hint.id}`);
        }
        x(a, C, !0);
      } catch (C) {
        x(l, C.message, !0);
      } finally {
        x(n, !1);
      }
    }
  }
  var s = Al(), f = k(s), u = H(f), v = d(f, 2), c = k(v);
  {
    var h = (m) => {
      var C = Ye("Loading hint...");
      y(m, C);
    }, g = (m) => {
      var C = Ye();
      L(() => M(C, i(l))), y(m, C);
    }, p = (m) => {
      var C = dt(), B = ve(C);
      yt(B, () => i(a).html), y(m, C);
    }, S = (m) => {
      var C = Ye();
      L(() => M(C, i(a).content)), y(m, C);
    };
    Y(c, (m) => {
      i(n) ? m(h) : i(l) ? m(g, 1) : i(a)?.html ? m(p, 2) : i(a) && m(S, 3);
    });
  }
  L(() => {
    J(s, "data-hint", e.hint.id), M(u, `${(e.hint.title || "View hint") ?? ""}${e.hint.cost ? ` (${e.hint.cost} points)` : ""}`);
  }), ut("toggle", s, o), gl("open", "toggle", s, (m) => x(r, m), () => i(r)), y(t, s), Re();
}
var Ll = /* @__PURE__ */ E('<button type="button" class="solve-count"> </button>'), Ml = /* @__PURE__ */ E('<span class="challenge-solves">Total solves: <!></span>'), Rl = /* @__PURE__ */ E('<p role="status">Loading solves...</p>'), Nl = /* @__PURE__ */ E('<div class="alert alert-danger" role="alert"> <button type="button">Retry</button></div>'), Ol = /* @__PURE__ */ E("<tr><td><a> </a></td><td><time> </time></td></tr>"), Pl = /* @__PURE__ */ E('<div class="table-responsive"><table class="table table-striped"><thead><tr><th>User</th><th>Solve time</th></tr></thead><tbody></tbody></table></div>'), Il = /* @__PURE__ */ E("<p>No solves to display.</p>"), Dl = /* @__PURE__ */ E('<!> <dialog class="express-dialog solves-dialog" aria-labelledby="solves-title"><h2 id="solves-title"> </h2> <!> <div class="dialog-actions"><button type="button" class="btn btn-primary">Close</button></div></dialog>', 1);
function Fl(t, e) {
  Me(e, !0);
  let r, n = /* @__PURE__ */ V(me([])), a = /* @__PURE__ */ V(!1), l = /* @__PURE__ */ V(""), o = 0;
  _n(() => o++);
  async function s() {
    const R = ++o;
    x(a, !0), x(l, ""), x(n, [], !0);
    try {
      const F = await Ae(`/challenges/${e.challengeId}/solves`);
      R === o && x(n, F, !0);
    } catch (F) {
      R === o && x(l, F.message, !0);
    } finally {
      R === o && x(a, !1);
    }
  }
  function f() {
    r.showModal(), s();
  }
  function u(R) {
    let F = !1;
    function $(_) {
      const b = R.getBoundingClientRect();
      return _.target === R && (_.clientX < b.left || _.clientX > b.right || _.clientY < b.top || _.clientY > b.bottom);
    }
    function z(_) {
      F = $(_);
    }
    function A(_) {
      F && $(_) && R.close(), F = !1;
    }
    return R.addEventListener("pointerdown", z), R.addEventListener("click", A), {
      destroy() {
        R.removeEventListener("pointerdown", z), R.removeEventListener("click", A);
      }
    };
  }
  var v = Dl(), c = ve(v);
  {
    var h = (R) => {
      var F = Ml(), $ = d(k(F));
      {
        var z = (_) => {
          var b = Ll(), N = H(b, !0);
          L(() => {
            J(b, "aria-label", `View ${e.count} solves`), M(N, e.count);
          }), ge("click", b, f), y(_, b);
        }, A = (_) => {
          var b = Ye("0");
          y(_, b);
        };
        Y($, (_) => {
          e.count > 0 ? _(z) : _(A, -1);
        });
      }
      y(R, F);
    }, g = /* @__PURE__ */ ue(() => Number.isInteger(e.count) && e.count >= 0);
    Y(c, (R) => {
      i(g) && R(h);
    });
  }
  var p = d(c, 2), S = k(p), m = H(S), C = d(S, 2);
  {
    var B = (R) => {
      var F = Rl();
      y(R, F);
    }, K = (R) => {
      var F = Nl(), $ = k(F), z = d($);
      L(() => M($, `${i(l) ?? ""} `)), ge("click", z, s), y(R, F);
    }, I = (R) => {
      var F = Pl(), $ = k(F), z = d(k($));
      _e(z, 21, () => i(n), we, (A, _) => {
        var b = Ol(), N = k(b), W = k(N), P = H(W, !0), D = d(N), re = k(D), ae = H(re, !0);
        L(
          (de) => {
            J(W, "href", i(_).account_url), M(P, i(_).name), J(re, "datetime", i(_).date), M(ae, de);
          },
          [
            () => new Date(i(_).date).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "long" })
          ]
        ), y(A, b);
      }), y(R, F);
    }, w = (R) => {
      var F = Il();
      y(R, F);
    };
    Y(C, (R) => {
      i(a) ? R(B) : i(l) ? R(K, 1) : i(n).length ? R(I, 2) : R(w, -1);
    });
  }
  var q = d(C, 2), U = H(q);
  Ot(p, (R) => r = R, () => r), wt(p, (R) => u?.(R)), L(() => M(m, `Solves - ${e.challengeName ?? ""}`)), ut("close", p, () => o++), ge("click", U, () => r.close()), y(t, v), Re();
}
at(["click"]);
var jl = /* @__PURE__ */ E('<span class="challenge-tag"> </span>'), ql = /* @__PURE__ */ E('<div class="challenge-tags"><span>Tags:</span><!></div>'), Bl = /* @__PURE__ */ E("<div> </div>"), Ul = /* @__PURE__ */ E("<p>Connection: <code> </code></p>"), Hl = /* @__PURE__ */ E('<a download=""><i class="fas fa-paperclip" aria-hidden="true"></i> </a>'), zl = /* @__PURE__ */ E('<i aria-hidden="true"></i><strong> </strong>', 1), Vl = /* @__PURE__ */ E('<p>Attempts: <span id="attempts"> </span> </p>'), Yl = /* @__PURE__ */ E('<header class="message-header"><h2> </h2> <div class="challenge-metadata"><span> </span><span> </span><!></div> <!> <!></header> <div class="message-body"><!></div> <!> <div class="attachments"></div> <div id="hints"></div> <form class="reply"><label for="flag">Reply with flag</label> <input id="flag" name="submission" autocomplete="off" required=""/> <button type="submit">Send</button> <div id="submission-status" role="status" aria-atomic="true"><!></div> <!></form>', 1);
function Wl(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ V(""), n = /* @__PURE__ */ V(!1), a = /* @__PURE__ */ V(""), l = /* @__PURE__ */ V(""), o = /* @__PURE__ */ V(me(Ie(() => e.challenge.attempts))), s = /* @__PURE__ */ V(me(Ie(() => e.challenge.solves))), f = !0, u = /* @__PURE__ */ ue(() => i(a) || (e.challenge.solved_by_me ? "Correct flag received." : "")), v = /* @__PURE__ */ ue(() => i(l) || (i(n) ? "pending" : e.challenge.solved_by_me ? "success" : ""));
  _n(() => {
    f = !1;
  });
  const c = /* @__PURE__ */ ue(() => new DOMParser().parseFromString(e.challenge.view || "", "text/html").querySelector(".challenge-desc")?.innerHTML);
  function h(G) {
    const T = G.split("/").pop().split("?")[0];
    try {
      return decodeURIComponent(T);
    } catch {
      return T;
    }
  }
  async function g(G) {
    if (G.preventDefault(), !i(n)) {
      x(n, !0), x(a, "Sending..."), x(l, "");
      try {
        const T = await Ae("/challenges/attempt", { challenge_id: e.challenge.id, submission: i(r) });
        if (!f) return;
        x(a, T.message, !0);
        const X = e.challenge.type === "delayed" && T.status === "incorrect" && /^Your submission has been taken(?:\.|$)/.test(T.message || "");
        if (x(l, ["correct", "already_solved"].includes(T.status) ? "success" : X ? "info" : "error", !0), T.status === "authentication_required" && (location.href = `${window.init.urlRoot}/login?next=${encodeURIComponent(location.pathname + location.hash)}`), T.status === "correct" && x(r, ""), e.challenge.max_attempts || ["correct", "already_solved"].includes(T.status)) {
          const le = await Ae(`/challenges/${e.challenge.id}`);
          if (!f) return;
          x(o, le.attempts, !0), x(s, le.solves, !0);
        }
        await e.onattempt(T);
      } catch (T) {
        f && (x(a, T.message, !0), x(l, "error"));
      } finally {
        x(n, !1);
      }
    }
  }
  var p = Yl(), S = ve(p), m = k(S), C = H(m, !0), B = d(m, 2), K = k(B), I = H(K), w = d(K), q = H(w), U = d(w);
  Fl(U, {
    get challengeId() {
      return e.challenge.id;
    },
    get challengeName() {
      return e.challenge.name;
    },
    get count() {
      return i(s);
    }
  });
  var R = d(B, 2);
  {
    var F = (G) => {
      var T = ql(), X = d(k(T));
      _e(X, 17, () => e.challenge.tags, we, (le, he) => {
        var pe = jl(), ke = H(pe, !0);
        L(() => M(ke, typeof i(he) == "string" ? i(he) : i(he).value)), y(le, pe);
      }), y(G, T);
    };
    Y(R, (G) => {
      e.challenge.tags?.length && G(F);
    });
  }
  var $ = d(R, 2);
  {
    var z = (G) => {
      var T = Bl(), X = H(T);
      L(() => M(X, `From: ${e.challenge.attribution ?? ""}`)), y(G, T);
    };
    Y($, (G) => {
      e.challenge.attribution && G(z);
    });
  }
  var A = d(S, 2), _ = k(A);
  {
    var b = (G) => {
      var T = dt(), X = ve(T);
      yt(X, () => i(c)), y(G, T);
    }, N = (G) => {
      var T = Ye();
      L(() => M(T, e.challenge.description)), y(G, T);
    };
    Y(_, (G) => {
      i(c) ? G(b) : G(N, -1);
    });
  }
  var W = d(A, 2);
  {
    var P = (G) => {
      var T = Ul(), X = d(k(T)), le = H(X, !0);
      L(() => M(le, e.challenge.connection_info)), y(G, T);
    };
    Y(W, (G) => {
      e.challenge.connection_info && G(P);
    });
  }
  var D = d(W, 2);
  _e(D, 21, () => e.challenge.files || [], we, (G, T) => {
    var X = Hl(), le = d(k(X));
    L(
      (he) => {
        J(X, "href", i(T)), M(le, ` ${he ?? ""}`);
      },
      [() => h(i(T))]
    ), y(G, X);
  });
  var re = d(D, 2);
  _e(re, 21, () => e.challenge.hints || [], (G) => G.id, (G, T) => {
    Tl(G, {
      get hint() {
        return i(T);
      }
    });
  });
  var ae = d(re, 2), de = d(k(ae), 2), j = d(de, 2), O = d(j, 2), Z = k(O);
  {
    var ee = (G) => {
      var T = zl(), X = ve(T), le = d(X), he = H(le, !0);
      L(() => {
        Le(X, 1, `fas ${i(v) === "success" ? "fa-check-circle" : i(v) === "error" ? "fa-times-circle" : i(v) === "info" ? "fa-info-circle" : "fa-paper-plane"}`), M(he, i(u));
      }), y(G, T);
    };
    Y(Z, (G) => {
      i(u) && G(ee);
    });
  }
  var ie = d(O, 2);
  {
    var te = (G) => {
      var T = Vl(), X = d(k(T)), le = H(X, !0), he = d(X);
      L(() => {
        M(le, i(o)), M(he, ` / ${e.challenge.max_attempts ?? ""}`);
      }), y(G, T);
    };
    Y(ie, (G) => {
      e.challenge.max_attempts && G(te);
    });
  }
  L(() => {
    M(C, e.challenge.name), M(I, `Category: ${e.challenge.category ?? ""}`), M(q, `Points: ${e.challenge.value ?? ""}`), j.disabled = i(n), Le(O, 1, `submission-feedback ${i(v)}`), J(O, "hidden", !i(u));
  }), ut("submit", ae, g), Sr(de, () => i(r), (G) => x(r, G)), y(t, p), Re();
}
var Gl = /* @__PURE__ */ E('<hr class="folder-divider"/>'), Xl = /* @__PURE__ */ E('<!> <button type="button"><i aria-hidden="true"></i> </button>', 1), Kl = /* @__PURE__ */ E('<div class="express-toolbar"><button id="all-challenges" type="button"><i class="fas fa-inbox" aria-hidden="true"></i> All Challenges</button> <button id="help-button" type="button"><i class="fas fa-question-circle" aria-hidden="true"></i> Help</button> <label for="search">Search</label><div class="express-search"><i class="fas fa-search" aria-hidden="true"></i><input id="search" type="search" placeholder="Find a challenge"/></div></div> <div class="express-address">Address <span id="address"> </span></div> <div class="express-workspace"><aside class="express-sidebar" aria-label="Challenge categories"><h2>Folders</h2> <div id="folders"></div> <p id="progress" aria-live="polite"> </p></aside> <section class="express-main" aria-label="Challenges"><h1 id="folder-heading"> </h1> <p id="board-status" role="status"> </p> <button id="retry" type="button">Try again</button> <!> <section id="reader" aria-label="Challenge message"><button id="back" type="button">Back to challenges</button> <div id="message"><!></div></section></section></div> <dialog id="help-dialog"><h2> </h2> <p>Open a challenge to read its message. Reply with the flag to solve it.</p> <p>Unsolved challenges appear as unread mail. Solved challenges appear as read mail.</p> <p>Drag column headers to reorder them, or their edges to resize. With a header focused, use Alt + Left/Right to reorder.</p> <form method="dialog"><button>Close</button></form></dialog>', 1);
function Jl(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ V(me([])), n = /* @__PURE__ */ V("All Challenges"), a = /* @__PURE__ */ V("all"), l = /* @__PURE__ */ V(""), o = /* @__PURE__ */ V(null), s = /* @__PURE__ */ V(!1), f = /* @__PURE__ */ V(null), u = /* @__PURE__ */ V(""), v = /* @__PURE__ */ V(!0), c = /* @__PURE__ */ V(""), h = /* @__PURE__ */ V(""), g = 0, p = 0, S, m, C = /* @__PURE__ */ ue(() => i(r).filter((Q) => !Q.solved_by_me)), B = /* @__PURE__ */ ue(() => [...new Set(i(r).map((Q) => Q.category))]), K = /* @__PURE__ */ ue(() => i(a) === "category" ? i(r).filter((Q) => Q.category === i(n)) : i(r)), I = /* @__PURE__ */ ue(() => [
    {
      name: "All Challenges",
      type: "all",
      count: i(C).length
    },
    {
      name: "Unsolved Challenges",
      type: "unread",
      count: i(C).length
    },
    ...i(B).map((Q) => ({
      name: Q,
      type: "category",
      count: i(C).filter((oe) => oe.category === Q).length
    }))
  ]), w = /* @__PURE__ */ ue(() => i(r).filter((Q) => (i(a) === "all" || (i(a) === "unread" ? !Q.solved_by_me : Q.category === i(n))) && `${Q.name} ${Q.category}`.toLowerCase().includes(i(l).toLowerCase().trim())));
  Tt(() => {
    const Q = `${e.config.appName} - ${i(n)}`;
    document.title = Q, document.getElementById("window-title").textContent = Q;
  });
  async function q() {
    const Q = ++p;
    x(v, !0), x(c, "");
    try {
      const oe = await Ae("/challenges");
      Q === p && x(r, oe.sort((ce, xe) => ce.id - xe.id), !0);
    } catch (oe) {
      Q === p && x(c, oe.message, !0);
    } finally {
      Q === p && x(v, !1);
    }
  }
  async function U(Q = !0) {
    g++, x(s, !1), x(f, null), x(u, ""), history.replaceState(null, "", location.pathname + location.search), await fr(), Q && document.querySelector(`.open-challenge[data-id="${i(o)}"]`)?.focus();
  }
  function R(Q) {
    x(n, Q.name, !0), x(a, Q.type, !0), x(h, ""), U(!1);
  }
  async function F(Q) {
    const oe = ++g;
    x(o, Q, !0), x(s, !0), x(f, null), x(u, ""), x(h, "");
    try {
      const ce = await Ae(`/challenges/${Q}`);
      if (oe !== g) return;
      x(f, ce, !0), history.replaceState(null, "", `#challenge-${Q}`), await fr(), m?.focus();
    } catch (ce) {
      oe === g && x(u, ce.message, !0);
    }
  }
  async function $(Q) {
    const oe = g;
    await q(), oe === g && i(a) === "unread" && ["correct", "already_solved"].includes(Q.status) && !i(c) && (await U(!1), x(h, "Challenge solved. Removed from Unsolved Challenges."), document.querySelector('#folders [data-view="unread"]')?.focus());
  }
  kt(() => {
    const Q = location.hash.match(/-(\d+)$/);
    q().then(() => {
      Q && g === 0 && F(Number(Q[1]));
    });
  }), _n(() => {
    g++, p++;
  });
  var z = Kl(), A = ve(z), _ = k(A), b = d(_, 2), N = d(b, 3), W = d(k(N)), P = d(A, 2), D = d(k(P)), re = H(D), ae = d(P, 2), de = k(ae), j = d(k(de), 2);
  _e(j, 23, () => i(I), (Q) => `${Q.type}:${Q.name}`, (Q, oe, ce) => {
    var xe = Xl(), je = ve(xe);
    {
      var Ne = (pt) => {
        var Qt = Gl();
        y(pt, Qt);
      };
      Y(je, (pt) => {
        i(ce) === 2 && pt(Ne);
      });
    }
    var be = d(je, 2);
    let Oe;
    var lt = k(be), gt = d(lt);
    L(() => {
      J(be, "data-view", i(oe).type), J(be, "data-folder", i(oe).name), Oe = Le(be, 1, "", null, Oe, {
        active: i(a) === i(oe).type && i(n) === i(oe).name
      }), Le(lt, 1, `fas fa-${i(oe).type === "unread" ? "envelope" : "folder"}`), M(gt, `${i(oe).name ?? ""}${i(oe).type !== "all" && i(oe).count > 0 ? ` (${i(oe).count})` : ""}`);
    }), ge("click", be, () => R(i(oe))), y(Q, xe);
  });
  var O = d(j, 2), Z = H(O), ee = d(de, 2), ie = k(ee), te = H(ie, !0), G = d(ie, 2), T = H(G, !0), X = d(G, 2), le = d(X, 2);
  {
    let Q = /* @__PURE__ */ ue(() => i(r).some((ce) => Number.isInteger(ce.solves))), oe = /* @__PURE__ */ ue(() => e.config.themeSettings?.challenge_order);
    Cl(le, {
      get challenges() {
        return i(w);
      },
      get solvesEnabled() {
        return i(Q);
      },
      get defaultOrder() {
        return i(oe);
      },
      onopen: F,
      get hidden() {
        return i(s);
      }
    });
  }
  var he = d(le, 2), pe = k(he);
  Ot(pe, (Q) => m = Q, () => m);
  var ke = d(pe, 2), it = k(ke);
  {
    var Et = (Q) => {
      var oe = dt(), ce = ve(oe);
      {
        var xe = (be) => {
          var Oe = Ye();
          L(() => M(Oe, i(u))), y(be, Oe);
        }, je = (be) => {
          var Oe = dt(), lt = ve(Oe);
          $i(lt, () => i(f).id, (gt) => {
            Wl(gt, {
              get challenge() {
                return i(f);
              },
              onattempt: $
            });
          }), y(be, Oe);
        }, Ne = (be) => {
          var Oe = Ye("Loading message...");
          y(be, Oe);
        };
        Y(ce, (be) => {
          i(u) ? be(xe) : i(f) ? be(je, 1) : be(Ne, -1);
        });
      }
      y(Q, oe);
    };
    Y(it, (Q) => {
      i(s) && Q(Et);
    });
  }
  var It = d(ae, 2), Dt = k(It), Zt = H(Dt, !0);
  Ot(It, (Q) => S = Q, () => S), L(
    (Q) => {
      M(re, `Folders / ${i(n) ?? ""}`), M(Z, `${Q ?? ""} of ${i(K).length ?? ""} challenges solved`), M(te, i(n)), M(T, i(c) || (i(v) ? "Loading challenges..." : i(h) || (i(w).length ? "" : "No challenges found."))), J(X, "hidden", !i(c)), J(he, "hidden", !i(s)), M(Zt, e.config.appName);
    },
    [
      () => i(K).filter((Q) => Q.solved_by_me).length
    ]
  ), ge("click", _, () => {
    x(l, ""), R(i(I)[0]);
  }), ge("click", b, () => S.showModal()), ge("input", W, () => {
    x(h, ""), U(!1);
  }), Sr(W, () => i(l), (Q) => x(l, Q)), ge("click", X, q), ge("click", pe, () => U()), y(t, z), Re();
}
at(["click", "input"]);
function Sa(t, e = !0) {
  if (!e) return;
  const r = t.querySelector(".logon-drag-handle, .window-drag-handle");
  if (!r) return;
  let n;
  const a = [];
  function l(c, h, g) {
    c?.addEventListener(h, g), a.push(() => c?.removeEventListener(h, g));
  }
  function o(c, h) {
    const g = window.visualViewport, p = g?.offsetLeft || 0, S = g?.offsetTop || 0, m = g?.width || document.documentElement.clientWidth, C = Math.max(0, (g?.height || innerHeight) - (t.classList.contains("express-window") ? 34 : 0));
    t.style.maxWidth = `${m}px`, t.style.maxHeight = `${C}px`;
    const B = t.getBoundingClientRect();
    t.style.left = `${Math.max(p, Math.min(c, p + m - B.width))}px`, t.style.top = `${Math.max(S, Math.min(h, S + C - B.height))}px`;
  }
  const s = t.getBoundingClientRect();
  t.classList.add("is-draggable"), o(s.left, s.top), l(r, "pointerdown", (c) => {
    if (c.button !== 0 || !c.isPrimary) return;
    const h = t.getBoundingClientRect();
    n = { id: c.pointerId, x: c.clientX - h.left, y: c.clientY - h.top }, r.setPointerCapture(c.pointerId), r.classList.add("is-dragging"), c.preventDefault();
  }), l(r, "pointermove", (c) => {
    n?.id === c.pointerId && o(c.clientX - n.x, c.clientY - n.y);
  });
  const f = () => {
    n = null, r.classList.remove("is-dragging");
  };
  for (const c of ["pointerup", "pointercancel", "lostpointercapture"]) l(r, c, f);
  l(r, "keydown", (c) => {
    const h = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[c.key];
    if (!h) return;
    c.preventDefault();
    const g = t.getBoundingClientRect(), p = c.shiftKey ? 1 : 10;
    o(g.left + h[0] * p, g.top + h[1] * p);
  });
  const u = () => {
    const c = t.getBoundingClientRect();
    o(c.left, c.top);
  };
  l(window, "resize", u), l(window.visualViewport, "resize", u), l(window.visualViewport, "scroll", u);
  const v = new ResizeObserver(u);
  return v.observe(t), { destroy() {
    v.disconnect(), a.forEach((c) => c());
  } };
}
var Zl = /* @__PURE__ */ E('<div role="alert"><span><!></span><button type="button" class="btn-close" aria-label="Close"></button></div>');
function Ca(t, e) {
  Me(e, !0);
  let r = Pt(e, "errors", 19, () => []), n = Pt(e, "infos", 19, () => []), a = /* @__PURE__ */ V(me([]));
  var l = dt(), o = ve(l);
  _e(
    o,
    17,
    () => [
      ...n().map((s) => ({ text: s, type: "info" })),
      ...r().map((s) => ({ text: s, type: "danger" }))
    ],
    we,
    (s, f, u) => {
      var v = dt(), c = ve(v);
      {
        var h = (p) => {
          var S = Zl(), m = k(S), C = k(m);
          {
            var B = (w) => {
              var q = dt(), U = ve(q);
              yt(U, () => i(f).text.html), y(w, q);
            }, K = (w) => {
              var q = Ye();
              L(() => M(q, i(f).text.text ?? i(f).text)), y(w, q);
            };
            Y(C, (w) => {
              i(f).text.html ? w(B) : w(K, -1);
            });
          }
          var I = d(m);
          L(() => Le(S, 1, `alert alert-${i(f).type ?? ""} alert-dismissible`)), ge("click", I, () => x(a, [...i(a), u], !0)), y(p, S);
        }, g = /* @__PURE__ */ ue(() => !i(a).includes(u));
        Y(c, (p) => {
          i(g) && p(h);
        });
      }
      y(s, v);
    }
  ), y(t, l), Re();
}
at(["click"]);
var Ql = /* @__PURE__ */ E('<span class="text-danger" aria-hidden="true">*</span>'), $l = /* @__PURE__ */ E("<option> </option>"), eo = /* @__PURE__ */ E('<select class="form-select"></select>'), to = /* @__PURE__ */ E('<input type="checkbox" class="form-check-input"/>'), ro = /* @__PURE__ */ E('<textarea class="form-control"></textarea>'), no = /* @__PURE__ */ E('<input class="form-control"/>'), ao = /* @__PURE__ */ E('<small class="form-text text-muted"> </small>'), io = /* @__PURE__ */ E('<div><label class="form-label"> <!></label> <!> <!></div>');
function gn(t, e) {
  Me(e, !0);
  let r = Pt(e, "compact", 3, !1), n = /* @__PURE__ */ V(me(Ie(() => e.field.type === "SelectField" ? String(e.field.value ?? "") : e.field.value ?? ""))), a = /* @__PURE__ */ V(me(Ie(() => e.field.value === !0 || e.field.value === "True" || e.field.value === "true")));
  const l = {
    PasswordField: "password",
    EmailField: "email",
    URLField: "url",
    DateField: "date",
    IntegerField: "number",
    HiddenField: "hidden"
  }, o = /* @__PURE__ */ ue(() => e.field.name === "name" ? "username" : e.field.name === "email" ? "email" : e.field.name === "confirm" ? "current-password" : e.field.type === "PasswordField" ? r() ? "current-password" : "new-password" : void 0);
  var s = io();
  let f;
  var u = k(s), v = k(u), c = d(v);
  {
    var h = (I) => {
      var w = Ql();
      y(I, w);
    };
    Y(c, (I) => {
      e.field.required && I(h);
    });
  }
  var g = d(u, 2);
  {
    var p = (I) => {
      var w = eo();
      _e(w, 21, () => e.field.choices, we, (q, U) => {
        var R = /* @__PURE__ */ ue(() => Da(i(U), 2));
        let F = () => i(R)[0], $ = () => i(R)[1];
        var z = $l(), A = H(z, !0), _ = {};
        L(
          (b) => {
            M(A, $()), _ !== (_ = b) && (z.value = (z.__value = _) ?? "");
          },
          [() => String(F())]
        ), y(q, z);
      }), xa(w), L(() => {
        J(w, "id", e.field.id), J(w, "name", e.field.name), w.required = e.field.required;
      }), fl(w, () => i(n), (q) => x(n, q)), y(I, w);
    }, S = (I) => {
      var w = to();
      w.value = w.__value = "y", L(() => {
        J(w, "id", e.field.id), J(w, "name", e.field.name), w.required = e.field.required;
      }), _l(w, () => i(a), (q) => x(a, q)), y(I, w);
    }, m = (I) => {
      var w = ro();
      L(() => {
        J(w, "id", e.field.id), J(w, "name", e.field.name), w.required = e.field.required;
      }), Sr(w, () => i(n), (q) => x(n, q)), y(I, w);
    }, C = (I) => {
      var w = no();
      L(() => {
        J(w, "id", e.field.id), J(w, "name", e.field.name), J(w, "type", l[e.field.type] || "text"), J(w, "autocomplete", i(o)), w.required = e.field.required;
      }), Sr(w, () => i(n), (q) => x(n, q)), y(I, w);
    };
    Y(g, (I) => {
      e.field.type === "SelectField" ? I(p) : e.field.type === "BooleanField" ? I(S, 1) : e.field.type === "TextAreaField" ? I(m, 2) : I(C, -1);
    });
  }
  var B = d(g, 2);
  {
    var K = (I) => {
      var w = ao(), q = H(w, !0);
      L(() => M(q, e.field.description)), y(I, w);
    };
    Y(B, (I) => {
      e.field.description && !r() && I(K);
    });
  }
  L(() => {
    f = Le(s, 1, "", null, f, { "logon-field": r(), "mb-3": !r() }), J(u, "for", e.field.id), M(v, e.field.label);
  }), y(t, s), Re();
}
var lo = /* @__PURE__ */ E("<a>Forgot your password?</a>"), oo = /* @__PURE__ */ E('<!> <form method="post" accept-charset="utf-8"><!> <input type="hidden" name="nonce"/> <div><!> <button id="_submit" name="_submit" type="submit" class="btn btn-primary xp-default"> </button></div></form>', 1), so = /* @__PURE__ */ E('<img class="logon-icon" alt=""/>'), fo = /* @__PURE__ */ Vi('<svg class="logon-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="9" width="50" height="36" rx="2" fill="#eef4ff" stroke="#153e80" stroke-width="3"></rect><path d="M12 14h40v25H12z" fill="#245bb4"></path><path d="M26 46v7h12v-7M18 55h28" fill="none" stroke="#153e80" stroke-width="3"></path><rect x="24" y="23" width="16" height="12" rx="1" fill="#ffe4a0"></rect><path d="M28 23v-3a4 4 0 0 1 8 0v3" fill="none" stroke="#ffe4a0" stroke-width="3"></path></svg>'), co = /* @__PURE__ */ E('<a class="btn logon-oauth">Log on with Major League Cyber</a>'), uo = /* @__PURE__ */ E('<footer class="logon-footer">Need an account? <a>Register</a></footer>'), vo = /* @__PURE__ */ E('<div class="login-stage"><section class="xp-logon" aria-labelledby="logon-title"><header class="express-title logon-drag-handle" tabindex="0" role="button" aria-label="Move login window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><i class="fas fa-key" aria-hidden="true"></i> Log On</header> <div class="logon-banner"><!> <div><h1 id="logon-title"> </h1><p> </p></div></div> <div class="logon-content"><p>Enter your user name and password to continue.</p><!> <!></div> <!></section></div>'), ho = /* @__PURE__ */ E("<p> </p>"), _o = /* @__PURE__ */ E("<p> </p> <p>Please click the link in that email to confirm your account.</p><p>If the email does not arrive, check your spam folder or contact an administrator to manually verify your account.</p>", 1), go = /* @__PURE__ */ E('<a class="btn btn-secondary mb-3">Log on with Major League Cyber</a>'), po = /* @__PURE__ */ E('<a class="btn btn-secondary mt-3">Change Email Address</a>'), mo = /* @__PURE__ */ E('<p class="text-muted mt-3">By registering, you agree to the <a target="_blank" rel="noopener">privacy policy</a> and <a target="_blank" rel="noopener">terms of service</a>.</p>'), bo = /* @__PURE__ */ E('<div class="jumbotron"><div class="container"><h1> </h1></div></div> <div class="container"><div class="auth-page"><!> <!> <!> <!> <!> <!></div></div>', 1);
function yo(t, e) {
  Me(e, !0);
  const r = (v) => {
    var c = oo(), h = ve(c);
    Ca(h, {
      get errors() {
        return e.site.errors;
      },
      get infos() {
        return e.site.infos;
      }
    });
    var g = d(h, 2);
    let p;
    var S = k(g);
    _e(S, 17, () => e.page.fields || [], we, (U, R) => {
      {
        let F = /* @__PURE__ */ ue(() => e.page.kind === "login");
        gn(U, {
          get field() {
            return i(R);
          },
          get compact() {
            return i(F);
          }
        });
      }
    });
    var m = d(S, 2), C = d(m, 2);
    let B;
    var K = k(C);
    {
      var I = (U) => {
        var R = lo();
        L(() => J(R, "href", `${i(a)}/reset_password`)), y(U, R);
      };
      Y(K, (U) => {
        e.page.kind === "login" && U(I);
      });
    }
    var w = d(K, 2), q = H(w, !0);
    L(() => {
      p = Le(g, 1, "", null, p, { "logon-form": e.page.kind === "login" }), ka(m, e.config.csrfNonce), B = Le(C, 1, "", null, B, {
        "logon-actions": e.page.kind === "login",
        "auth-actions": e.page.kind !== "login"
      }), w.disabled = i(n), M(q, i(n) ? "Please wait..." : e.page.kind === "login" ? "Log On" : e.page.kind === "confirm" ? "Send Confirmation Email" : "Submit");
    }), ut("submit", g, () => x(n, !0)), y(v, c);
  };
  let n = /* @__PURE__ */ V(!1);
  const a = /* @__PURE__ */ ue(() => e.config.urlRoot), l = {
    login: "Log On",
    register: "Register",
    reset: "Reset Password",
    confirm: "Confirm"
  };
  kt(() => {
    e.page.kind === "login" && document.getElementById("name")?.focus();
    const v = () => x(n, !1);
    return window.addEventListener("pageshow", v), () => window.removeEventListener("pageshow", v);
  });
  var o = dt(), s = ve(o);
  {
    var f = (v) => {
      var c = vo(), h = k(c), g = d(k(h), 2), p = k(g);
      {
        var S = (A) => {
          var _ = so();
          L(() => J(_, "src", e.site.logo)), y(A, _);
        }, m = (A) => {
          var _ = fo();
          y(A, _);
        };
        Y(p, (A) => {
          e.site.logo ? A(S) : A(m, -1);
        });
      }
      var C = d(p, 2), B = k(C), K = H(B, !0), I = d(B), w = H(I), q = d(g, 2), U = d(k(q));
      r(U);
      var R = d(U, 2);
      {
        var F = (A) => {
          var _ = co();
          L(() => J(_, "href", e.site.oauth)), y(A, _);
        };
        Y(R, (A) => {
          e.site.oauth && A(F);
        });
      }
      var $ = d(q, 2);
      {
        var z = (A) => {
          var _ = uo(), b = d(k(_));
          L(() => J(b, "href", `${i(a)}/register`)), y(A, _);
        };
        Y($, (A) => {
          e.site.registration && A(z);
        });
      }
      wt(h, (A) => Sa?.(A)), L(() => {
        M(K, e.site.appName), M(w, `Log on to ${e.site.eventName ?? ""}`);
      }), y(v, c);
    }, u = (v) => {
      var c = bo(), h = ve(c), g = k(h), p = k(g), S = H(p, !0), m = d(h, 2), C = k(m), B = k(C);
      {
        var K = (_) => {
          var b = ho(), N = H(b, !0);
          L(() => M(N, e.page.mode === "set" ? "You can now reset the password for your account and log in. Please enter a new password below." : "Please provide the email address associated with your account below.")), y(_, b);
        };
        Y(B, (_) => {
          e.page.kind === "reset" && _(K);
        });
      }
      var I = d(B, 2);
      {
        var w = (_) => {
          var b = _o(), N = ve(b), W = H(N, !0);
          L(() => M(W, e.page.initial ? "To send a confirmation email to your email address, please click the button below." : "We've sent a confirmation email to your email address.")), y(_, b);
        };
        Y(I, (_) => {
          e.page.kind === "confirm" && _(w);
        });
      }
      var q = d(I, 2);
      {
        var U = (_) => {
          var b = go();
          L(() => J(b, "href", e.site.oauth)), y(_, b);
        };
        Y(q, (_) => {
          e.page.kind === "register" && e.site.oauth && _(U);
        });
      }
      var R = d(q, 2);
      r(R);
      var F = d(R, 2);
      {
        var $ = (_) => {
          var b = po();
          L(() => J(b, "href", `${i(a)}/settings`)), y(_, b);
        };
        Y(F, (_) => {
          e.page.kind === "confirm" && _($);
        });
      }
      var z = d(F, 2);
      {
        var A = (_) => {
          var b = mo(), N = d(k(b)), W = d(N, 2);
          L(() => {
            J(N, "href", e.page.privacy), J(W, "href", e.page.terms);
          }), y(_, b);
        };
        Y(z, (_) => {
          e.page.kind === "register" && e.page.showTerms && _(A);
        });
      }
      L(() => M(S, l[e.page.kind])), y(v, c);
    };
    Y(s, (v) => {
      e.page.kind === "login" ? v(f) : v(u, -1);
    });
  }
  y(t, o), Re();
}
var wo = /* @__PURE__ */ E('<div class="alert alert-danger" role="alert"> </div>'), xo = /* @__PURE__ */ E('<div class="alert alert-success" role="status"> </div>'), ko = /* @__PURE__ */ E('<tr><td> </td><td> </td><td> </td><td><button class="btn"><i class="fas fa-times" aria-hidden="true"></i></button></td></tr>'), Eo = /* @__PURE__ */ E('<div class="table-responsive"><table class="table"><thead><tr><th>Created</th><th>Expiration</th><th>Description</th><th>Delete</th></tr></thead><tbody></tbody></table></div>'), So = /* @__PURE__ */ E("<p>No active tokens.</p>"), Co = /* @__PURE__ */ E('<div class="jumbotron"><div class="container"><h1>Settings</h1></div></div> <div class="container settings-layout"><div class="nav flex-column nav-pills" aria-label="Settings sections"><button id="settings-profile-tab">Profile</button> <button id="settings-tokens-tab">Access Tokens</button></div> <div><!> <!> <section id="profile"><form method="post"><!> <button type="submit" id="_submit" class="btn btn-primary"> </button></form></section> <section id="tokens"><form><div class="mb-3"><label for="expiration" class="form-label">Expiration</label><input id="expiration" name="expiration" type="date" class="form-control"/></div> <div class="mb-3"><label for="description" class="form-label">Usage Description</label><textarea id="description" name="description" class="form-control" rows="3"></textarea></div> <button type="submit" class="btn btn-primary">Generate</button></form> <h2 class="h4 mt-4">Active Tokens</h2> <!></section></div></div> <dialog class="express-dialog"><h2>API Key Generated</h2><p>Please copy your API key. It will not be shown again!</p> <input class="form-control" aria-label="API key" readonly=""/> <div class="dialog-actions"><button class="btn">Copy</button><button class="btn btn-primary">Got it!</button></div></dialog>', 1);
function Ao(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ V("profile"), n = /* @__PURE__ */ V(!1), a = /* @__PURE__ */ V(""), l = /* @__PURE__ */ V(""), o = /* @__PURE__ */ V(me(Ie(() => e.page.tokens))), s = /* @__PURE__ */ V(""), f, u;
  function v(T) {
    const X = Object.fromEntries(new FormData(T));
    for (const le of T.querySelectorAll('input[type="checkbox"]')) X[le.name] = le.checked;
    return X;
  }
  function c(T) {
    u = v(T);
  }
  async function h(T) {
    if (T.preventDefault(), i(n)) return;
    x(n, !0), x(a, ""), x(l, "");
    const X = T.currentTarget, le = v(X), he = {};
    for (const [pe, ke] of Object.entries(le)) {
      if (pe === "_submit" || ke === u[pe]) continue;
      const it = /^fields\[(\d+)\]$/.exec(pe);
      it ? (he.fields ||= []).push({ field_id: Number(it[1]), value: ke }) : he[pe] = ke;
    }
    try {
      await Ae("/users/me", he, { method: "PATCH" }), x(l, "Your profile has been updated.");
      for (const pe of X.querySelectorAll('input[type="password"]')) pe.value = "";
      u = v(X);
    } catch (pe) {
      x(a, pe.message, !0);
    } finally {
      x(n, !1);
    }
  }
  async function g(T) {
    if (T.preventDefault(), i(n)) return;
    x(n, !0), x(a, ""), x(l, "");
    const X = v(T.currentTarget);
    X.expiration || delete X.expiration;
    try {
      const le = await Ae("/tokens", X);
      x(s, le.value, !0);
      const { value: he, ...pe } = le;
      x(o, [...i(o), pe], !0), f.showModal();
    } catch (le) {
      x(a, le.message, !0);
    } finally {
      x(n, !1);
    }
  }
  async function p(T) {
    if (!(i(n) || !confirm("Are you sure you want to delete this token?"))) {
      x(n, !0), x(a, ""), x(l, "");
      try {
        await Ae(`/tokens/${T}`, void 0, { method: "DELETE" }), x(o, i(o).filter((X) => X.id !== T), !0);
      } catch (X) {
        x(a, X.message, !0);
      } finally {
        x(n, !1);
      }
    }
  }
  async function S() {
    try {
      await navigator.clipboard.writeText(i(s)), x(l, "API key copied.");
    } catch {
      x(l, "Select and copy the API key below.");
    }
  }
  function m(T) {
    x(r, T, !0), x(a, ""), x(l, "");
  }
  var C = Co(), B = d(ve(C), 2), K = k(B), I = k(K);
  let w;
  var q = d(I, 2);
  let U;
  var R = d(K, 2), F = k(R);
  {
    var $ = (T) => {
      var X = wo(), le = H(X, !0);
      L(() => M(le, i(a))), y(T, X);
    };
    Y(F, (T) => {
      i(a) && T($);
    });
  }
  var z = d(F, 2);
  {
    var A = (T) => {
      var X = xo(), le = H(X, !0);
      L(() => M(le, i(l))), y(T, X);
    };
    Y(z, (T) => {
      i(l) && T(A);
    });
  }
  var _ = d(z, 2), b = k(_), N = k(b);
  _e(N, 17, () => e.page.fields, we, (T, X) => {
    gn(T, {
      get field() {
        return i(X);
      }
    });
  });
  var W = d(N, 2), P = H(W, !0);
  wt(b, (T) => c?.(T));
  var D = d(_, 2), re = k(D), ae = d(k(re), 4), de = d(re, 4);
  {
    var j = (T) => {
      var X = Eo(), le = k(X), he = d(k(le));
      _e(he, 21, () => i(o), we, (pe, ke) => {
        var it = ko(), Et = k(it), It = H(Et, !0), Dt = d(Et), Zt = H(Dt, !0), Q = d(Dt), oe = H(Q, !0), ce = d(Q), xe = H(ce);
        L(
          (je, Ne) => {
            M(It, je), M(Zt, Ne), M(oe, i(ke).description), J(xe, "aria-label", `Delete token ${i(ke).description || i(ke).id}`), xe.disabled = i(n);
          },
          [
            () => i(ke).created ? new Date(i(ke).created).toLocaleDateString() : "",
            () => i(ke).expiration ? new Date(i(ke).expiration).toLocaleDateString() : "Never"
          ]
        ), ge("click", xe, () => p(i(ke).id)), y(pe, it);
      }), y(T, X);
    }, O = (T) => {
      var X = So();
      y(T, X);
    };
    Y(de, (T) => {
      i(o).length ? T(j) : T(O, -1);
    });
  }
  var Z = d(B, 2), ee = d(k(Z), 3), ie = d(ee, 2), te = k(ie), G = d(te);
  Ot(Z, (T) => f = T, () => f), L(() => {
    w = Le(I, 1, "nav-link", null, w, { active: i(r) === "profile" }), J(I, "aria-pressed", i(r) === "profile"), U = Le(q, 1, "nav-link", null, U, { active: i(r) === "tokens" }), J(q, "aria-pressed", i(r) === "tokens"), J(_, "hidden", i(r) !== "profile"), W.disabled = i(n), M(P, i(n) ? "Saving..." : "Submit"), J(D, "hidden", i(r) !== "tokens"), ae.disabled = i(n), ka(ee, i(s));
  }), ge("click", I, () => m("profile")), ge("click", q, () => m("tokens")), ut("submit", b, h), ut("submit", re, g), ut("close", Z, () => x(s, "")), ge("click", ee, (T) => T.currentTarget.select()), ge("click", te, S), ge("click", G, () => f.close()), y(t, C), Re();
}
at(["click"]);
var To = /* @__PURE__ */ E("<a> </a>"), Lo = /* @__PURE__ */ E('<span class="badge bg-secondary ms-2"> </span>'), Mo = /* @__PURE__ */ E('<a class="badge bg-primary ms-2">Official</a>'), Ro = /* @__PURE__ */ E('<a target="_blank" rel="noopener"><i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), No = /* @__PURE__ */ E("<tr><td><!> <!> <!></td><td><!></td><td> </td><td> </td></tr>"), Oo = /* @__PURE__ */ E('<p role="status">No users match your search.</p>'), Po = /* @__PURE__ */ E("<option> </option>"), Io = /* @__PURE__ */ E('<label class="pagination-control">Page <select class="page-select form-select"></select> </label>'), Do = /* @__PURE__ */ E('<div class="jumbotron"><div class="container"><h1>Users</h1></div></div> <div class="container"><form method="get" class="user-search"><!> <button type="submit" class="btn btn-primary"><i class="fas fa-search" aria-hidden="true"></i> Search</button></form> <div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>User</th><th>Website</th><th>Affiliation</th><th>Country</th></tr></thead><tbody></tbody></table></div> <!> <!></div>', 1);
function Fo(t, e) {
  Me(e, !0);
  function r(p) {
    const S = new URL(location.href);
    S.searchParams.set("page", p.currentTarget.value), location.assign(S);
  }
  var n = Do(), a = d(ve(n), 2), l = k(a), o = k(l);
  _e(o, 17, () => e.page.fields, we, (p, S) => {
    gn(p, {
      get field() {
        return i(S);
      }
    });
  });
  var s = d(l, 2), f = k(s), u = d(k(f));
  _e(u, 21, () => e.page.users, we, (p, S) => {
    var m = No(), C = k(m), B = k(C);
    {
      var K = (P) => {
        var D = To(), re = H(D, !0);
        L(() => {
          J(D, "href", `${e.config.urlRoot}/users/${i(S).id}`), M(re, i(S).name);
        }), y(P, D);
      }, I = (P) => {
        var D = Ye();
        L(() => M(D, i(S).name)), y(P, D);
      };
      Y(B, (P) => {
        e.page.scoresVisible ? P(K) : P(I, -1);
      });
    }
    var w = d(B, 2);
    {
      var q = (P) => {
        var D = Lo(), re = H(D, !0);
        L(() => M(re, i(S).bracket)), y(P, D);
      };
      Y(w, (P) => {
        i(S).bracket && P(q);
      });
    }
    var U = d(w, 2);
    {
      var R = (P) => {
        var D = Mo();
        L((re) => J(D, "href", re), [
          () => `https://majorleaguecyber.org/u/${encodeURIComponent(i(S).name)}`
        ]), y(P, D);
      };
      Y(U, (P) => {
        i(S).official && P(R);
      });
    }
    var F = d(C), $ = k(F);
    {
      var z = (P) => {
        var D = Ro();
        L(() => {
          J(D, "href", i(S).website), J(D, "aria-label", `Website for ${i(S).name}`);
        }), y(P, D);
      }, A = /* @__PURE__ */ ue(() => /^https?:\/\//i.test(i(S).website || ""));
      Y($, (P) => {
        i(A) && P(z);
      });
    }
    var _ = d(F), b = H(_, !0), N = d(_), W = H(N, !0);
    L(() => {
      M(b, i(S).affiliation || ""), M(W, i(S).country);
    }), y(p, m);
  });
  var v = d(s, 2);
  {
    var c = (p) => {
      var S = Oo();
      y(p, S);
    };
    Y(v, (p) => {
      e.page.users.length || p(c);
    });
  }
  var h = d(v, 2);
  {
    var g = (p) => {
      var S = Io(), m = d(k(S));
      _e(m, 21, () => Array.from({ length: e.page.pages }, (K, I) => I + 1), we, (K, I) => {
        var w = Po(), q = H(w, !0), U = {};
        L(() => {
          M(q, i(I)), U !== (U = i(I)) && (w.value = (w.__value = U) ?? "");
        }), y(K, w);
      });
      var C;
      xa(m);
      var B = d(m);
      L(() => {
        C !== (C = e.page.page) && (m.value = (m.__value = C) ?? "", hn(m, C)), M(B, ` of ${e.page.pages ?? ""} (${e.page.total ?? ""} users)`);
      }), ge("change", m, r), y(p, S);
    };
    Y(h, (p) => {
      e.page.pages > 1 && p(g);
    });
  }
  y(t, n), Re();
}
at(["change"]);
const en = ["#194c9f", "#8a2459", "#25632a", "#8a480c", "#623e9d", "#006473", "#a12a20", "#4c5872", "#615600", "#763c36"];
var jo = /* @__PURE__ */ E('<p role="status"> </p>'), qo = /* @__PURE__ */ E('<!> <div id="score-graph" class="score-chart" role="img"></div>', 1);
function Aa(t, e) {
  Me(e, !0);
  let r = Pt(e, "title", 3, "Score over Time"), n = Pt(e, "series", 19, () => []), a, l = /* @__PURE__ */ V(null), o = /* @__PURE__ */ V("");
  kt(() => {
    let c = !0;
    const h = new ResizeObserver(() => i(l)?.resize());
    return import("./chart-ClLr2WTg.js").then(({ init: g }) => {
      c && (x(l, g(a)), h.observe(a));
    }).catch(() => {
      c && x(o, "The chart could not load. The scores are available in the table below.");
    }), () => {
      c = !1, h.disconnect(), i(l)?.dispose();
    };
  }), Tt(() => {
    if (!i(l)) return;
    const c = "#18202a";
    i(l).setOption(
      {
        backgroundColor: "#fff",
        color: en,
        animation: !matchMedia("(prefers-reduced-motion: reduce)").matches,
        textStyle: { color: c, fontFamily: "Tahoma, sans-serif", fontSize: 12 },
        title: {
          text: r(),
          left: "center",
          textStyle: { color: c, fontSize: 17 }
        },
        tooltip: {
          trigger: "axis",
          confine: !0,
          backgroundColor: "#fff",
          textStyle: { color: c },
          borderColor: "#697c92"
        },
        legend: { type: "scroll", bottom: 0, textStyle: { color: c } },
        toolbox: {
          feature: { saveAsImage: {} },
          iconStyle: { borderColor: "#465365" }
        },
        grid: { top: 80, bottom: 55, left: 12, right: 18, containLabel: !0 },
        xAxis: {
          type: "time",
          axisLabel: { color: c },
          axisLine: { lineStyle: { color: "#697c92" } }
        },
        yAxis: {
          type: "value",
          axisLabel: { color: c },
          splitLine: { lineStyle: { color: "#d9e0e8" } }
        },
        dataZoom: [
          {
            type: "slider",
            top: 35,
            height: 20,
            textStyle: { color: c },
            borderColor: "#697c92",
            fillerColor: "rgba(25,76,159,.15)"
          }
        ],
        series: n().map((h, g) => ({
          ...h,
          type: "line",
          symbolSize: 7,
          lineStyle: { width: 3, type: g > 4 ? "dashed" : "solid" },
          label: { color: c }
        }))
      },
      { notMerge: !0 }
    );
  });
  var s = qo(), f = ve(s);
  {
    var u = (c) => {
      var h = jo(), g = H(h, !0);
      L(() => M(g, i(o))), y(c, h);
    };
    Y(f, (c) => {
      i(o) && c(u);
    });
  }
  var v = d(f, 2);
  Ot(v, (c) => a = c, () => a), L(() => J(v, "aria-label", `${r()}. Scores are also listed in the table below.`)), y(t, s), Re();
}
var Bo = /* @__PURE__ */ E('<a class="badge bg-primary">Official</a>'), Uo = /* @__PURE__ */ E('<span class="badge bg-primary"> </span>'), Ho = /* @__PURE__ */ E("<p> </p>"), zo = /* @__PURE__ */ E("<h2> <small>place</small></h2>"), Vo = /* @__PURE__ */ E("<h2> <small>points</small></h2>"), Yo = /* @__PURE__ */ E('<a target="_blank" rel="noopener">Website <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Wo = /* @__PURE__ */ E('<p role="status">Loading profile...</p>'), Go = /* @__PURE__ */ E('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), Xo = /* @__PURE__ */ E('<div class="progress-bar"></div>'), Ko = /* @__PURE__ */ E('<span><span class="legend-swatch"></span> </span>'), Jo = /* @__PURE__ */ E('<div><i aria-hidden="true"></i><h4> </h4><p> </p><p> </p><strong> </strong></div>'), Zo = /* @__PURE__ */ E('<section aria-labelledby="awards-heading"><h3 id="awards-heading">Awards</h3><div class="profile-awards"></div></section>'), Qo = /* @__PURE__ */ E("<tr><td><a> </a></td><td> </td><td> </td><td><time> </time></td></tr>"), $o = /* @__PURE__ */ E('<section class="profile-graphs" aria-label="Score breakdowns"><div class="profile-breakdowns"><div><div class="progress" aria-hidden="true"><div class="progress-bar"></div><div class="progress-bar"></div></div><p> </p></div> <div><div class="progress" aria-hidden="true"></div><div class="category-legend"></div></div></div> <!></section> <!> <h3>Solves</h3><div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Challenge</th><th>Category</th><th>Value</th><th>Time</th></tr></thead><tbody></tbody></table></div>', 1), es = /* @__PURE__ */ E('<h3 class="text-muted text-center">No solves yet</h3>'), ts = /* @__PURE__ */ E('<div class="jumbotron"><div class="container"><h1> </h1> <div class="profile-badges"><!> <!></div> <!> <!> <!> <!></div></div> <div class="container"><!> <!> <!></div>', 1);
function rs(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ V(me([])), n = /* @__PURE__ */ V(me([])), a = /* @__PURE__ */ V(0), l = /* @__PURE__ */ V(null), o = /* @__PURE__ */ V(!0), s = /* @__PURE__ */ V(""), f = 0;
  const u = /* @__PURE__ */ ue(() => i(r).length + i(a) ? 100 * i(r).length / (i(r).length + i(a)) : 0), v = /* @__PURE__ */ ue(() => {
    const j = /* @__PURE__ */ new Map();
    return i(r).forEach((O) => j.set(O.challenge.category, (j.get(O.challenge.category) || 0) + 1)), [...j].map(([O, Z], ee) => ({
      name: O,
      count: Z,
      percent: 100 * Z / i(r).length,
      color: en[ee % en.length]
    }));
  }), c = /* @__PURE__ */ ue(() => {
    let j = 0;
    return [
      {
        name: e.page.name,
        data: [...i(r), ...i(n)].sort((O, Z) => new Date(O.date) - new Date(Z.date)).map((O) => [
          new Date(O.date).getTime(),
          j += O.challenge?.value ?? O.value
        ])
      }
    ];
  });
  async function h() {
    const j = ++f;
    x(s, "");
    try {
      const O = e.page.private ? "me" : e.page.id, [Z, ee, ie, te] = await Promise.all([
        Ae(`/users/${O}/solves`),
        Ae(`/users/${O}/fails`, void 0, { full: !0 }),
        Ae(`/users/${O}/awards`),
        e.page.private ? Ae("/users/me") : Promise.resolve(e.page)
      ]);
      if (j !== f) return;
      x(r, Z, !0), x(a, ee.meta.count, !0), x(n, ie, !0), x(l, te.score, !0);
    } catch (O) {
      j === f && x(s, O.message, !0);
    } finally {
      j === f && x(o, !1);
    }
  }
  kt(() => (h(), () => f++));
  var g = ts(), p = ve(g), S = k(p), m = k(S), C = H(m, !0), B = d(m, 2), K = k(B);
  {
    var I = (j) => {
      var O = Bo();
      L((Z) => J(O, "href", Z), [
        () => `https://majorleaguecyber.org/u/${encodeURIComponent(e.page.name)}`
      ]), y(j, O);
    };
    Y(K, (j) => {
      e.page.official && j(I);
    });
  }
  var w = d(K, 2);
  _e(
    w,
    17,
    () => [
      e.page.affiliation,
      e.page.country,
      e.page.bracket
    ].filter(Boolean),
    we,
    (j, O) => {
      var Z = Uo(), ee = H(Z, !0);
      L(() => M(ee, i(O))), y(j, Z);
    }
  );
  var q = d(B, 2);
  _e(q, 17, () => e.page.fields, we, (j, O) => {
    var Z = Ho(), ee = H(Z);
    L(() => M(ee, `${i(O).name ?? ""}: ${i(O).value ?? ""}`)), y(j, Z);
  });
  var U = d(q, 2);
  {
    var R = (j) => {
      var O = zo(), Z = k(O);
      L(() => M(Z, `${e.page.place ?? ""} `)), y(j, O);
    };
    Y(U, (j) => {
      e.page.place && j(R);
    });
  }
  var F = d(U, 2);
  {
    var $ = (j) => {
      var O = Vo(), Z = k(O);
      L(() => M(Z, `${i(l) ?? ""} `)), y(j, O);
    };
    Y(F, (j) => {
      i(l) !== null && j($);
    });
  }
  var z = d(F, 2);
  {
    var A = (j) => {
      var O = Yo();
      L(() => J(O, "href", e.page.website)), y(j, O);
    }, _ = /* @__PURE__ */ ue(() => /^https?:\/\//i.test(e.page.website || ""));
    Y(z, (j) => {
      i(_) && j(A);
    });
  }
  var b = d(p, 2), N = k(b);
  {
    var W = (j) => {
      var O = Wo();
      y(j, O);
    };
    Y(N, (j) => {
      i(o) && j(W);
    });
  }
  var P = d(N, 2);
  {
    var D = (j) => {
      var O = Go(), Z = k(O), ee = d(Z);
      L(() => M(Z, `${i(s) ?? ""} `)), ge("click", ee, h), y(j, O);
    };
    Y(P, (j) => {
      i(s) && j(D);
    });
  }
  var re = d(P, 2);
  {
    var ae = (j) => {
      var O = $o(), Z = ve(O), ee = k(Z), ie = k(ee), te = k(ie), G = k(te), T = d(G), X = d(te), le = H(X), he = d(ie, 2), pe = k(he);
      _e(pe, 21, () => i(v), we, (oe, ce) => {
        var xe = Xo();
        L(() => jt(xe, `width:${i(ce).percent}%;background:${i(ce).color}`)), y(oe, xe);
      });
      var ke = d(pe);
      _e(ke, 21, () => i(v), we, (oe, ce) => {
        var xe = Ko(), je = k(xe), Ne = d(je);
        L(
          (be) => {
            jt(je, `background:${i(ce).color}`), M(Ne, `${i(ce).name ?? ""} (${be ?? ""}%)`);
          },
          [() => i(ce).percent.toFixed(2)]
        ), y(oe, xe);
      });
      var it = d(ee, 2);
      Aa(it, {
        get series() {
          return i(c);
        }
      });
      var Et = d(Z, 2);
      {
        var It = (oe) => {
          var ce = Zo(), xe = d(k(ce));
          _e(xe, 21, () => i(n), we, (je, Ne) => {
            var be = Jo(), Oe = k(be), lt = d(Oe), gt = H(lt, !0), pt = d(lt), Qt = H(pt, !0), $t = d(pt), Rr = H($t, !0), Nr = d($t), Ma = H(Nr);
            L(() => {
              Le(Oe, 1, `award-icon award-${i(Ne).icon} fa-2x`), M(gt, i(Ne).name), M(Qt, i(Ne).category || ""), M(Rr, i(Ne).description || ""), M(Ma, `${i(Ne).value ?? ""} points`);
            }), y(je, be);
          }), y(oe, ce);
        };
        Y(Et, (oe) => {
          i(n).length && oe(It);
        });
      }
      var Dt = d(Et, 3), Zt = k(Dt), Q = d(k(Zt));
      _e(Q, 21, () => i(r), we, (oe, ce) => {
        var xe = Qo(), je = k(xe), Ne = k(je), be = H(Ne, !0), Oe = d(je), lt = H(Oe, !0), gt = d(Oe), pt = H(gt, !0), Qt = d(gt), $t = k(Qt), Rr = H($t, !0);
        L(
          (Nr) => {
            J(Ne, "href", `${e.config.urlRoot}/challenges#challenge-${i(ce).challenge.id}`), M(be, i(ce).challenge.name), M(lt, i(ce).challenge.category), M(pt, i(ce).challenge.value), J($t, "datetime", i(ce).date), M(Rr, Nr);
          },
          [() => new Date(i(ce).date).toLocaleString()]
        ), y(oe, xe);
      }), L(
        (oe, ce) => {
          jt(G, `width:${i(u)}%;background:#25632a`), jt(T, `width:${100 - i(u)}%;background:#a12a20`), M(le, `Solves (${oe ?? ""}%) / Fails (${ce ?? ""}%)`);
        },
        [
          () => i(u).toFixed(2),
          () => (100 - i(u)).toFixed(2)
        ]
      ), y(j, O);
    }, de = (j) => {
      var O = es();
      y(j, O);
    };
    Y(re, (j) => {
      i(r).length || i(n).length ? j(ae) : !i(o) && !i(s) && j(de, 1);
    });
  }
  L(() => M(C, e.page.name)), y(t, g), Re();
}
at(["click"]);
var ns = /* @__PURE__ */ E('<p role="status">Loading scoreboard...</p>'), as = /* @__PURE__ */ E('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), is = /* @__PURE__ */ E("<button> </button>"), ls = /* @__PURE__ */ E('<nav class="nav nav-pills mb-3" aria-label="Competition bracket"><button>All</button><!></nav>'), os = /* @__PURE__ */ E('<span class="badge bg-secondary ms-2"> </span>'), ss = /* @__PURE__ */ E('<tr><th scope="row"></th><td><a> </a><!></td><td> </td></tr>'), fs = /* @__PURE__ */ E('<h3 class="text-center text-muted">Scoreboard is empty</h3>'), cs = /* @__PURE__ */ E('<div class="jumbotron"><div class="container"><h1>Scoreboard</h1></div></div> <div class="container"><!> <!> <!> <!> <div id="scoreboard" class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Place</th><th>User</th><th>Score</th></tr></thead><tbody></tbody></table></div> <!></div>', 1);
function us(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ V(me([])), n = /* @__PURE__ */ V(me([])), a = /* @__PURE__ */ V(""), l = /* @__PURE__ */ V(me({})), o = /* @__PURE__ */ V(!0), s = /* @__PURE__ */ V(""), f = 0;
  const u = /* @__PURE__ */ ue(() => i(r).filter((A) => !i(a) || String(A.bracket_id) === i(a))), v = /* @__PURE__ */ ue(() => Object.values(i(l)).map((A) => {
    let _ = 0;
    return {
      name: A.name,
      data: [...A.solves].sort((b, N) => new Date(b.date) - new Date(N.date)).map((b) => [new Date(b.date).getTime(), _ += b.value])
    };
  }));
  async function c() {
    const A = ++f;
    x(s, "");
    try {
      const [_, b, N] = await Promise.all([
        Ae("/scoreboard"),
        Ae("/brackets?type=users"),
        Ae(`/scoreboard/top/10${i(a) ? `?bracket_id=${encodeURIComponent(i(a))}` : ""}`)
      ]);
      if (A !== f) return;
      x(r, _, !0), x(n, b, !0), x(l, N, !0);
    } catch (_) {
      A === f && x(s, _.message, !0);
    } finally {
      A === f && x(o, !1);
    }
  }
  function h(A) {
    x(a, A, !0), c();
  }
  kt(() => {
    c();
    const A = setInterval(c, 3e5);
    return () => {
      clearInterval(A), f++;
    };
  });
  var g = cs(), p = d(ve(g), 2), S = k(p);
  {
    var m = (A) => {
      var _ = ns();
      y(A, _);
    };
    Y(S, (A) => {
      i(o) && A(m);
    });
  }
  var C = d(S, 2);
  {
    var B = (A) => {
      var _ = as(), b = k(_), N = d(b);
      L(() => M(b, `${i(s) ?? ""} `)), ge("click", N, c), y(A, _);
    };
    Y(C, (A) => {
      i(s) && A(B);
    });
  }
  var K = d(C, 2);
  {
    var I = (A) => {
      var _ = ls(), b = k(_);
      let N;
      var W = d(b);
      _e(W, 17, () => i(n), we, (P, D) => {
        var re = is();
        let ae;
        var de = H(re, !0);
        L(
          (j) => {
            ae = Le(re, 1, "nav-link", null, ae, { active: j }), M(de, i(D).name);
          },
          [() => i(a) === String(i(D).id)]
        ), ge("click", re, () => h(String(i(D).id))), y(P, re);
      }), L(() => N = Le(b, 1, "nav-link", null, N, { active: !i(a) })), ge("click", b, () => h("")), y(A, _);
    };
    Y(K, (A) => {
      i(n).length && A(I);
    });
  }
  var w = d(K, 2);
  {
    var q = (A) => {
      Aa(A, {
        title: "Top 10 Users",
        get series() {
          return i(v);
        }
      });
    };
    Y(w, (A) => {
      i(v).length && A(q);
    });
  }
  var U = d(w, 2), R = k(U), F = d(k(R));
  _e(F, 21, () => i(u), we, (A, _, b) => {
    var N = ss(), W = k(N);
    W.textContent = b + 1;
    var P = d(W), D = k(P), re = H(D, !0), ae = d(D);
    {
      var de = (Z) => {
        var ee = os(), ie = H(ee, !0);
        L(() => M(ie, i(_).bracket_name)), y(Z, ee);
      };
      Y(ae, (Z) => {
        i(_).bracket_name && Z(de);
      });
    }
    var j = d(P), O = H(j, !0);
    L(() => {
      J(D, "href", i(_).account_url), M(re, i(_).name), M(O, i(_).score);
    }), y(A, N);
  });
  var $ = d(U, 2);
  {
    var z = (A) => {
      var _ = fs();
      y(A, _);
    };
    Y($, (A) => {
      !i(o) && !i(s) && !i(u).length && A(z);
    });
  }
  y(t, g), Re();
}
at(["click"]);
var ds = /* @__PURE__ */ E('<div class="container custom-page"></div>');
function vs(t, e) {
  Me(e, !0);
  function r(a) {
    let l = !0;
    return (async () => {
      for (const o of a.querySelectorAll("script")) {
        if (!l) break;
        const s = document.createElement("script");
        for (const u of o.attributes) s.setAttribute(u.name, u.value);
        s.textContent = o.textContent;
        const f = s.src && !s.hasAttribute("async") ? new Promise((u) => {
          s.async = !1, s.onload = s.onerror = u;
        }) : null;
        o.replaceWith(s), f && await f;
      }
    })(), {
      destroy() {
        l = !1;
      }
    };
  }
  var n = ds();
  yt(n, () => e.html, !0), wt(n, (a) => r?.(a)), y(t, n), Re();
}
var hs = /* @__PURE__ */ E('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), _s = /* @__PURE__ */ E('<h2 class="text-center">There are no notifications yet</h2>'), gs = /* @__PURE__ */ E('<article class="card bg-body-tertiary mb-4"><div class="card-body"><h3> </h3><div></div><time class="text-muted"> </time></div></article>'), ps = /* @__PURE__ */ E('<div class="jumbotron"><div class="container"><h1>Notifications</h1></div></div> <div class="container"><!> <!> <!></div>', 1), ms = /* @__PURE__ */ E('<aside class="express-toast" role="status"><h2> </h2><div></div><button class="btn">Dismiss</button></aside>'), bs = /* @__PURE__ */ E('<h2 id="notification-title"> </h2><div></div><div class="dialog-actions"><a class="btn">All notifications</a><button class="btn btn-primary">Close</button></div>', 1), ys = /* @__PURE__ */ E('<!> <!> <dialog class="express-dialog" aria-labelledby="notification-title"><!></dialog>', 1);
function ws(t, e) {
  Me(e, !0);
  const r = (w) => (!w.user_id || w.user_id === e.config.userId) && (!w.team_id || w.team_id === e.config.teamId);
  let n = /* @__PURE__ */ V(me(Ie(() => (e.page.notifications || []).filter(r)))), a = /* @__PURE__ */ V(me([])), l = /* @__PURE__ */ V(null), o = /* @__PURE__ */ V(""), s;
  const f = /* @__PURE__ */ ue(() => `challenge-express-notifications:${e.config.urlRoot}:${e.config.userId || "guest"}`);
  function u() {
    try {
      localStorage.setItem(i(
        f
        /* Reading notifications still works when storage is unavailable. */
      ), JSON.stringify(i(a)));
    } catch {
    }
  }
  function v(w) {
    x(a, [.../* @__PURE__ */ new Set([...i(a), ...w])], !0), u();
  }
  function c() {
    i(l) && v([i(l).id]), x(l, null);
  }
  async function h() {
    try {
      x(n, (await Ae("/notifications")).filter(r), !0), x(o, ""), e.page.kind === "notifications" && v(i(n).map((w) => w.id));
    } catch (w) {
      e.page.kind === "notifications" && x(o, w.message, !0);
    }
  }
  Tt(() => {
    e.onunread(i(n).filter((w) => !i(a).includes(w.id)).length);
  }), Tt(() => {
    i(l) && i(l).type !== "toast" && s && !s.open && s.showModal();
  }), Tt(() => {
    if (i(l)?.type !== "toast") return;
    const w = setTimeout(() => x(l, null), 8e3);
    return () => clearTimeout(w);
  }), kt(() => {
    try {
      const R = JSON.parse(localStorage.getItem(i(f)) || "[]");
      Array.isArray(R) && x(a, R, !0);
    } catch {
      x(a, [], !0);
    }
    h();
    const w = (R) => {
      if (R.key === i(
        f
        /* Ignore malformed external storage. */
      ))
        try {
          const F = JSON.parse(R.newValue || "[]");
          Array.isArray(F) && x(
            a,
            F,
            /* Ignore malformed external storage. */
            !0
          );
        } catch {
        }
    };
    window.addEventListener("storage", w);
    const q = e.config.userId ? new EventSource(`${e.config.urlRoot}/events`) : null;
    let U = !1;
    return q?.addEventListener("open", () => {
      U && h(), U = !0;
    }), q?.addEventListener("notification", (R) => {
      let F;
      try {
        F = JSON.parse(R.data);
      } catch {
        return;
      }
      if (!r(F)) return;
      const $ = !i(n).some((z) => z.id === F.id);
      x(
        n,
        [
          ...i(n).filter((z) => z.id !== F.id),
          F
        ],
        !0
      ), e.page.kind === "notifications" ? v([F.id]) : $ && !i(a).includes(F.id) && F.type !== "background" && x(l, F, !0);
    }), () => {
      q?.close(), window.removeEventListener("storage", w);
    };
  });
  var g = ys(), p = ve(g);
  {
    var S = (w) => {
      var q = ps(), U = d(ve(q), 2), R = k(U);
      {
        var F = (_) => {
          var b = hs(), N = k(b), W = d(N);
          L(() => M(N, `${i(o) ?? ""} `)), ge("click", W, h), y(_, b);
        };
        Y(R, (_) => {
          i(o) && _(F);
        });
      }
      var $ = d(R, 2);
      {
        var z = (_) => {
          var b = _s();
          y(_, b);
        };
        Y($, (_) => {
          !i(n).length && !i(o) && _(z);
        });
      }
      var A = d($, 2);
      _e(A, 17, () => [...i(n)].sort((_, b) => b.id - _.id), we, (_, b) => {
        var N = gs(), W = k(N), P = k(W), D = H(P, !0), re = d(P);
        yt(re, () => i(b).html, !0);
        var ae = d(re), de = H(ae, !0);
        L(
          (j) => {
            M(D, i(b).title), J(ae, "datetime", i(b).date), M(de, j);
          },
          [() => new Date(i(b).date).toLocaleString()]
        ), y(_, N);
      }), y(w, q);
    };
    Y(p, (w) => {
      e.page.kind === "notifications" && w(S);
    });
  }
  var m = d(p, 2);
  {
    var C = (w) => {
      var q = ms(), U = k(q), R = H(U, !0), F = d(U);
      yt(F, () => i(l).html || "", !0);
      var $ = d(F);
      L(() => M(R, i(l).title)), ge("click", $, c), y(w, q);
    };
    Y(m, (w) => {
      i(l)?.type === "toast" && w(C);
    });
  }
  var B = d(m, 2), K = k(B);
  {
    var I = (w) => {
      var q = bs(), U = ve(q), R = H(U, !0), F = d(U);
      yt(F, () => i(l).html || "", !0);
      var $ = d(F), z = k($), A = d(z);
      L(() => {
        M(R, i(l).title), J(z, "href", `${e.config.urlRoot}/notifications`);
      }), ge("click", A, () => s.close()), y(w, q);
    };
    Y(K, (w) => {
      i(l) && i(l).type !== "toast" && w(I);
    });
  }
  Ot(B, (w) => s = w, () => s), ut("close", B, c), y(t, g), Re();
}
at(["click"]);
var xs = /* @__PURE__ */ E('<img class="express-brand-icon" alt="" draggable="false"/>'), ks = /* @__PURE__ */ E('<i class="fas fa-envelope" aria-hidden="true"></i>'), Es = /* @__PURE__ */ E('<i class="fas fa-bell" aria-hidden="true"></i>'), Ss = /* @__PURE__ */ E('<span class="badge bg-danger"> </span>'), Cs = /* @__PURE__ */ E('<li class="nav-item"><a class="nav-link"><!> <!></a></li>'), As = /* @__PURE__ */ E("<ul></ul>"), Ts = /* @__PURE__ */ E('<nav class="navbar navbar-expand-md" aria-label="Main navigation"><div class="container"><button class="navbar-toggler" type="button" aria-controls="base-navbars" aria-label="Toggle navigation"><i class="fas fa-bars" aria-hidden="true"></i> Menu</button> <div id="base-navbars"></div></div></nav>'), Ls = /* @__PURE__ */ E('<div id="challenge-app"><!></div>'), Ms = /* @__PURE__ */ E("<p> </p>"), Rs = /* @__PURE__ */ E('<div class="container error-page"><h1> </h1><h2> </h2><!><a>Back to challenges</a></div>'), Ns = /* @__PURE__ */ E("<!> <!>", 1), Os = /* @__PURE__ */ E('<div class="express-window"><header class="express-title window-drag-handle" tabindex="0" role="button" aria-label="Move application window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><!> <span id="window-title"> </span></header> <!> <main id="main-content"><!> <!></main> <footer class="express-status"> <span>Powered by <a href="https://ctfd.io">CTFd</a></span></footer></div> <div class="express-taskbar"><a class="express-start">Start</a><span> </span></div>', 1);
function Ps(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ V(!1), n = /* @__PURE__ */ V(0);
  const a = /* @__PURE__ */ ue(() => e.page.kind === "login"), l = /* @__PURE__ */ ue(() => ["login", "register", "reset", "confirm"].includes(e.page.kind));
  kt(() => (document.body.classList.toggle("login-desktop", i(a)), () => document.body.classList.remove("login-desktop")));
  var o = Os(), s = ve(o), f = k(s), u = k(f);
  {
    var v = (z) => {
      var A = xs();
      L(() => J(A, "src", e.site.logo)), y(z, A);
    }, c = (z) => {
      var A = ks();
      y(z, A);
    };
    Y(u, (z) => {
      e.site.logo ? z(v) : z(c, -1);
    });
  }
  var h = d(u, 2), g = H(h, !0), p = d(f, 2);
  {
    var S = (z) => {
      var A = Ts(), _ = k(A), b = k(_), N = d(b, 2);
      let W;
      _e(N, 21, () => [e.site.primary, e.site.account], we, (P, D, re) => {
        var ae = As();
        Le(ae, 1, "navbar-nav", null, {}, { "me-auto": re === 0, "ms-md-auto": re === 1 }), _e(ae, 21, () => i(D), we, (de, j) => {
          var O = Cs(), Z = k(O), ee = k(Z);
          {
            var ie = (X) => {
              var le = Es();
              y(X, le);
            };
            Y(ee, (X) => {
              i(j).label === "Notifications" && X(ie);
            });
          }
          var te = d(ee), G = d(te);
          {
            var T = (X) => {
              var le = Ss(), he = H(le, !0);
              L(() => M(he, i(n))), y(X, le);
            };
            Y(G, (X) => {
              i(j).label === "Notifications" && i(n) > 0 && X(T);
            });
          }
          L(() => {
            J(Z, "href", i(j).href), J(Z, "target", i(j).target || void 0), J(Z, "rel", i(j).target === "_blank" ? "noopener" : void 0), M(te, `${i(j).label ?? ""} `);
          }), y(de, O);
        }), y(P, ae);
      }), L(() => {
        J(b, "aria-expanded", i(r)), W = Le(N, 1, "collapse navbar-collapse", null, W, { show: i(r) });
      }), ge("click", b, () => x(r, !i(r))), y(z, A);
    };
    Y(p, (z) => {
      i(a) || z(S);
    });
  }
  var m = d(p, 2), C = k(m);
  {
    var B = (z) => {
      yo(z, {
        get page() {
          return e.page;
        },
        get site() {
          return e.site;
        },
        get config() {
          return e.config;
        }
      });
    }, K = (z) => {
      var A = Ns(), _ = ve(A);
      Ca(_, {
        get errors() {
          return e.site.errors;
        },
        get infos() {
          return e.site.infos;
        }
      });
      var b = d(_, 2);
      {
        var N = (O) => {
          var Z = Ls(), ee = k(Z);
          Jl(ee, {
            get config() {
              return e.config;
            }
          }), y(O, Z);
        }, W = (O) => {
          Ao(O, {
            get page() {
              return e.page;
            }
          });
        }, P = (O) => {
          Fo(O, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, D = (O) => {
          rs(O, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, re = (O) => {
          us(O, {});
        }, ae = (O) => {
          vs(O, {
            get html() {
              return e.page.html;
            }
          });
        }, de = (O) => {
          var Z = Rs(), ee = k(Z), ie = H(ee, !0), te = d(ee), G = H(te), T = d(te);
          {
            var X = (he) => {
              var pe = Ms(), ke = H(pe, !0);
              L(() => M(ke, e.page.detail)), y(he, pe);
            };
            Y(T, (he) => {
              e.page.detail && he(X);
            });
          }
          var le = d(T);
          L(() => {
            M(ie, e.page.heading), M(G, `${e.page.code ?? ""} ${e.page.message ?? ""}`), J(le, "href", `${e.config.urlRoot}/challenges`);
          }), y(O, Z);
        }, j = (O) => {
          var Z = dt(), ee = ve(Z);
          yt(ee, () => e.fallback), y(O, Z);
        };
        Y(b, (O) => {
          e.page.kind === "challenges" ? O(N) : e.page.kind === "settings" ? O(W, 1) : e.page.kind === "users" ? O(P, 2) : e.page.kind === "profile" ? O(D, 3) : e.page.kind === "scoreboard" ? O(re, 4) : e.page.kind === "page" ? O(ae, 5) : e.page.kind === "error" ? O(de, 6) : e.page.kind !== "notifications" && O(j, 7);
        });
      }
      y(z, A);
    };
    Y(C, (z) => {
      i(l) ? z(B) : z(K, -1);
    });
  }
  var I = d(C, 2);
  ws(I, {
    get page() {
      return e.page;
    },
    get config() {
      return e.config;
    },
    onunread: (z) => x(n, z, !0)
  });
  var w = d(m, 2), q = k(w);
  wt(s, (z, A) => Sa?.(z, A), () => !i(a));
  var U = d(s, 2), R = k(U), F = d(R), $ = H(F, !0);
  L(() => {
    M(g, e.site.title), M(q, e.site.eventName), J(R, "href", `${e.config.urlRoot}/challenges`), M($, e.site.appName);
  }), y(t, o), Re();
}
at(["click"]);
const Ta = document.getElementById("site-app"), La = JSON.parse(document.getElementById("page-data").textContent);
document.body.classList.toggle("login-desktop", La.kind === "login");
Ta.replaceChildren();
Ki(Ps, { target: Ta, props: {
  config: window.init,
  site: JSON.parse(document.getElementById("site-data").textContent),
  page: La,
  fallback: document.getElementById("fallback-content").innerHTML
} });
