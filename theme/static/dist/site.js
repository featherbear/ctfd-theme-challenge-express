var Cr = Array.isArray, Ma = Array.prototype.indexOf, mr = Array.prototype.includes, Ar = Array.from, Ln = Object.defineProperty, qt = Object.getOwnPropertyDescriptor, Rn = Object.getOwnPropertyDescriptors, Na = Object.prototype, Oa = Array.prototype, tn = Object.getPrototypeOf, pn = Object.isExtensible;
const Pa = () => {
};
function Ia(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Mn() {
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
const Pe = 2, Ht = 4, Tr = 8, Nn = 1 << 24, Xe = 16, We = 32, vt = 64, Hr = 128, rn = 256, Qe = 512, Ce = 1024, Se = 2048, Ve = 4096, De = 8192, Fe = 16384, Gt = 32768, br = 1 << 25, zt = 65536, yr = 1 << 17, Fa = 1 << 18, Xt = 1 << 19, ja = 1 << 20, et = 1 << 25, wr = 1 << 21, Bt = 1 << 22, bt = 1 << 23, ft = /* @__PURE__ */ Symbol("$state"), On = /* @__PURE__ */ Symbol("component"), qa = /* @__PURE__ */ Symbol("legacy props"), Ba = /* @__PURE__ */ Symbol(""), Pn = /* @__PURE__ */ Symbol("attributes"), zr = /* @__PURE__ */ Symbol("class"), Vr = /* @__PURE__ */ Symbol("style"), Yr = /* @__PURE__ */ Symbol("text"), _r = /* @__PURE__ */ Symbol("form reset"), cr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Ua = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Ha = 1, za = 2, In = 4, Va = 8, Ya = 16, Wa = 1, Ga = 4, Xa = 8, Ka = 16, Ja = 1, Za = 2, Ee = /* @__PURE__ */ Symbol("uninitialized"), Dn = "http://www.w3.org/1999/xhtml", Qa = "http://www.w3.org/2000/svg", $a = "http://www.w3.org/1998/Math/MathML";
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
function oi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function li(t) {
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
function Re(t, e = !1, r) {
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
function Me(t) {
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
  (t.f & Se) !== 0 ? e.add(t) : (t.f & Ve) !== 0 && r.add(t), ye(t, Ce);
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
function on(t, e, r, n = r) {
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
  const a = lr;
  var o = t.filter((g) => !g.settled), l = e.map(a);
  if (r.length === 0 && o.length === 0) {
    n(l);
    return;
  }
  var s = (
    /** @type {Effect} */
    fe
  ), f = mi(), u = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((g) => g.promise)) : null;
  function v(g) {
    if ((s.f & Fe) === 0) {
      f();
      try {
        n([...l, ...g]);
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
    ae
  );
  return function(o = !0) {
    nt(t), Ge(e), Vt(r), o && (t.f & Fe) === 0 && (n?.activate(), n?.apply());
  };
}
function xr(t = !0) {
  nt(null), Ge(null), Vt(null), t && ae?.deactivate();
}
function Vn() {
  var t = (
    /** @type {Effect} */
    fe
  ), e = t.b, r = (
    /** @type {Batch} */
    ae
  ), n = !!e?.is_rendered();
  return e?.update_pending_count(1, r), r.increment(n, t), () => {
    e?.update_pending_count(-1, r), r.decrement(n, t);
  };
}
// @__NO_SIDE_EFFECTS__
function lr(t) {
  var e = Pe | Se;
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
      Ee
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
  ), o = Mt(
    /** @type {V} */
    Ee
  ), l = !se, s = /* @__PURE__ */ new Set();
  return Oi(() => {
    var f = (
      /** @type {Effect} */
      fe
    ), u = Mn();
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
      ae
    );
    if (l) {
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
      c?.(), s.delete(u), p !== tr && (v.activate(), p ? (o.f |= bt, Yt(o, p)) : ((o.f & bt) !== 0 && (o.f ^= bt), Yt(o, g)), v.deactivate());
    };
    u.promise.then(h, (g) => h(null, g || "unknown"));
  }), Lr(() => {
    for (const f of s)
      f.reject(tr);
  }), new Promise((f) => {
    function u(v) {
      function c() {
        v === a ? f(o) : u(a);
      }
      v.then(c, c);
    }
    u(a);
  });
}
// @__NO_SIDE_EFFECTS__
function de(t) {
  const e = /* @__PURE__ */ lr(t);
  return ua(e), e;
}
// @__NO_SIDE_EFFECTS__
function Yn(t) {
  const e = /* @__PURE__ */ lr(t);
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
function ln(t) {
  var e, r = fe, n = t.parent;
  if (!ht && n !== null && t.v !== Ee && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
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
  var e = ln(t);
  if (!t.equals(e) && (t.wv = va(), (!ae?.is_fork || t.deps === null) && (ae !== null ? (ae.capture(t, e, !0), Wr?.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    ye(t, Ce);
    return;
  }
  ht || (Ke !== null ? (cn() || ae?.is_fork) && Ke.set(t, e) : an(t));
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
let Or = null, Ft = null, ae = null, Wr = null, Ke = null, Gr = null, ar = !1, Pr = !1, ir = null, gr = null;
var bn = 0;
let xi = 1;
class xt {
  id = xi++;
  /** True as soon as `#process` was called */
  #t = !1;
  linked = !0;
  /** @type {Batch | null} */
  #o = null;
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
    Ft === null ? Or = Ft = this : (Ft.#e = this, this.#o = Ft), Ft = this;
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
        ye(a, Se), r(a);
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
    for (const o of this.#a)
      if (!((o.f & Fe) !== 0 || (o.f & (Se | Ve)) === 0)) {
        for (var r = o, n = !1; r.parent !== null; ) {
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
      this.#c.delete(s), ye(s, Se), this.schedule(s);
    for (const s of this.#c)
      ye(s, Ve), this.schedule(s);
    this.apply();
    for (var e = ir = [], r = [], n = gr = []; this.#a.length > 0; ) {
      bn++ > 1e3 && (this.#_(), Si());
      for (const s of this.#x())
        try {
          this.#m(s, e, r);
        } catch (f) {
          throw Jn(s), this.#b() || this.discard(), f;
        }
    }
    if (ae = null, n.length > 0) {
      var a = xt.ensure();
      for (const s of n)
        a.schedule(s);
    }
    if (ir = null, gr = null, this.#b()) {
      this.#v(r), this.#v(e);
      for (const [s, f] of this.#d)
        Kn(s, f);
      n.length > 0 && /** @type {unknown} */
      ae.#p();
      return;
    }
    const o = this.#k();
    if (o) {
      this.#v(r), this.#v(e), o.#y(this);
      return;
    }
    this.#f.clear(), this.#c.clear();
    for (const s of this.#s) s(this);
    this.#s.clear(), Wr = this, yn(r), yn(e), Wr = null, this.#l?.resolve();
    var l = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      ae
    );
    if (this.#i === 0 && (this.#a.length === 0 || l !== null) && this.#_(), this.#a.length > 0)
      if (l !== null) {
        for (const s of this.#a)
          l.#a.push(s);
        this.#a = [];
      } else
        l = this;
    l !== null && (tt.clear(), l.#p());
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
      var o = a.f, l = (o & (We | vt)) !== 0, s = l && (o & Ce) !== 0, f = s || (o & De) !== 0 || this.#d.has(a);
      if (!f && a.fn !== null) {
        l ? a.f ^= Ce : (o & Ht) !== 0 ? r.push(a) : dr(a) && ((o & Xe) !== 0 && this.#c.add(a), Wt(a));
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
    for (var e = this.#o; e !== null; ) {
      if (!e.is_fork) {
        for (const [r, [, n]] of this.current)
          if (e.current.has(r) && !n)
            return e;
      }
      e = e.#o;
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
      const o = this.async_deriveds.get(n);
      o && a.promise.then(o.resolve).catch(o.reject);
    }
    e.async_deriveds.clear(), this.transfer_effects(e.#f, e.#c);
    const r = (n) => {
      var a = n.reactions;
      if (a !== null && !((n.f & Pe) !== 0 && (n.f & (Se | Ve)) === 0))
        for (const s of a) {
          var o = s.f;
          if ((o & Pe) !== 0)
            r(
              /** @type {Derived} */
              s
            );
          else {
            var l = (
              /** @type {Effect} */
              s
            );
            o & (Bt | Xe) && !this.async_deriveds.has(l) && (this.#c.delete(l), ye(l, Se), this.schedule(l));
          }
        }
    };
    for (const n of this.current.keys())
      r(n);
    this.oncommit(() => e.discard()), e.#_(), ae = this, this.#p();
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
    e.v !== Ee && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & bt) === 0 && (this.current.set(e, [r, n]), Ke?.set(e, r)), this.is_fork || (e.v = r);
  }
  activate() {
    ae = this;
  }
  deactivate() {
    ae = null, Ke = null;
  }
  flush() {
    try {
      Pr = !0, ae = this, this.#p();
    } finally {
      bn = 0, Gr = null, ir = null, gr = null, Pr = !1, ae = null, Ke = null, tt.clear();
    }
  }
  discard() {
    for (const e of this.#n) e(this);
    this.#n.clear();
    for (const e of this.async_deriveds.values())
      e.reject(tr);
    this.#_(), this.#l?.resolve();
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
        var o = a.filter((h) => !this.current.has(h));
        if (o.length === 0)
          e && c.discard();
        else if (r.length > 0) {
          if (e)
            for (const h of this.#g)
              c.unskip_effect(h, (g) => {
                (g.f & (Xe | Bt)) !== 0 ? c.schedule(g) : c.#v([g]);
              });
          c.activate();
          var l = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
          for (var f of r)
            Xn(f, o, l, s);
          s = /* @__PURE__ */ new Map();
          var u = [...c.current].filter(([h, g]) => {
            const p = this.current.get(h);
            return p ? p[0] !== g[0] || p[1] !== g[1] : !0;
          }).map(([h]) => h);
          if (u.length > 0)
            for (const h of this.#h)
              (h.f & (Fe | De | yr)) === 0 && sn(h, u, s) && ((h.f & (Bt | Xe)) !== 0 ? (ye(h, Se), c.schedule(h)) : c.#f.add(h));
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
    return (this.#l ??= Mn()).promise;
  }
  static ensure() {
    if (ae === null) {
      const e = ae = new xt();
      !Pr && !ar && st(() => {
        e.#t || e.flush();
      });
    }
    return ae;
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
      var e = this.#o, r = this.#e;
      e === null ? Or = r : e.#e = r, r === null ? Ft = e : r.#o = e, this.linked = !1;
    }
  }
}
function ki(t) {
  var e = ar;
  ar = !0;
  try {
    for (var r; ; ) {
      if (hi(), ae === null)
        return (
          /** @type {T} */
          r
        );
      ae.flush();
    }
  } finally {
    ar = e;
  }
}
function Si() {
  try {
    si();
  } catch (t) {
    $e(t, Gr);
  }
}
let lt = null;
function yn(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var n = t[r++];
      if ((n.f & (Fe | De)) === 0 && dr(n) && (lt = /* @__PURE__ */ new Set(), Wt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && sa(n), lt?.size > 0)) {
        tt.clear();
        for (const a of lt) {
          if ((a.f & (Fe | De)) !== 0) continue;
          const o = [a];
          let l = a.parent;
          for (; l !== null; )
            lt.has(l) && (lt.delete(l), o.push(l)), l = l.parent;
          for (let s = o.length - 1; s >= 0; s--) {
            const f = o[s];
            (f.f & (Fe | De)) === 0 && Wt(f);
          }
        }
        lt.clear();
      }
    }
    lt = null;
  }
}
function Xn(t, e, r, n) {
  if (!r.has(t) && (r.add(t), t.reactions !== null))
    for (const a of t.reactions) {
      const o = a.f;
      (o & Pe) !== 0 ? Xn(
        /** @type {Derived} */
        a,
        e,
        r,
        n
      ) : (o & (Bt | Xe)) !== 0 && (o & Se) === 0 && sn(a, e, n) && (ye(a, Se), fn(
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
  ae.schedule(t);
}
function Kn(t, e) {
  if (!((t.f & We) !== 0 && (t.f & Ce) !== 0)) {
    (t.f & Se) !== 0 ? e.d.push(t) : (t.f & Ve) !== 0 && e.m.push(t), ye(t, Ce);
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
function Mt(t, e) {
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
function Y(t, e) {
  const r = Mt(t);
  return ua(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ei(t, e = !1, r = !0) {
  const n = Mt(t);
  return e || (n.equals = qn), n;
}
function x(t, e, r = !1) {
  se !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || (se.f & yr) !== 0) && Un() && (se.f & (Pe | Xe | Bt | yr)) !== 0 && (rt === null || !rt.has(t)) && di();
  let n = r ? me(e) : e;
  return Yt(t, n, gr);
}
var Et = null, Xr = 0;
function Yt(t, e, r = null) {
  if (!t.equals(e)) {
    ht ? tt.set(t, e) : tt.has(t) || tt.set(t, t.v);
    var n = xt.ensure();
    if (n.capture(t, e), (t.f & Pe) !== 0) {
      const a = (
        /** @type {Derived} */
        t
      );
      (t.f & Se) !== 0 && ln(a), Ke === null && an(a);
    }
    t.wv = va(), Et = null, Xr = 0, Qn(t, Se, r), Et = null, fe !== null && (fe.f & Ce) !== 0 && (fe.f & (We | vt)) === 0 && (He === null ? Ii([t]) : He.push(t)), !n.is_fork && kr.size > 0 && !Zn && Ci();
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
function or(t) {
  x(t, t.v + 1);
}
function Qn(t, e, r) {
  var n = t.reactions;
  if (n !== null) {
    var a = n.length;
    if (Xr += a, Xr > 1e5 && Et === null && (Et = /* @__PURE__ */ new Set()), Et !== null) {
      if (Et.has(t)) return;
      Et.add(t);
    }
    for (var o = 0; o < a; o++) {
      var l = n[o], s = l.f, f = (s & Se) === 0;
      if (f && ye(l, e), (s & yr) !== 0)
        kr.add(
          /** @type {Effect} */
          l
        );
      else if ((s & Pe) !== 0) {
        var u = (
          /** @type {Derived} */
          l
        );
        Ke?.delete(u), Qn(u, Ve, r);
      } else if (f) {
        var v = (
          /** @type {Effect} */
          l
        );
        (s & Xe) !== 0 && lt !== null && lt.add(v), r !== null ? r.push(v) : fn(v);
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
  var r = /* @__PURE__ */ new Map(), n = Cr(t), a = /* @__PURE__ */ Y(0), o = Rt, l = (s) => {
    if (Rt === o)
      return s();
    var f = se, u = Rt;
    Ge(null), kn(o);
    var v = s();
    return Ge(f), kn(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ Y(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(s, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ci();
        var v = r.get(f);
        return v === void 0 ? l(() => {
          var c = /* @__PURE__ */ Y(u.value);
          return r.set(f, c), c;
        }) : x(v, u.value, !0), !0;
      },
      deleteProperty(s, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in s) {
            const v = l(() => /* @__PURE__ */ Y(Ee));
            r.set(f, v), or(a);
          }
        } else
          x(u, Ee), or(a);
        return !0;
      },
      get(s, f, u) {
        if (f === ft)
          return t;
        var v = r.get(f), c = f in s;
        if (v === void 0 && (!c || qt(s, f)?.writable) && (v = l(() => {
          var g = me(c ? s[f] : Ee), p = /* @__PURE__ */ Y(g);
          return p;
        }), r.set(f, v)), v !== void 0) {
          var h = i(v);
          return h === Ee ? void 0 : h;
        }
        return Reflect.get(s, f, u);
      },
      getOwnPropertyDescriptor(s, f) {
        this.has?.(s, f);
        var u = Reflect.getOwnPropertyDescriptor(s, f), v = r.get(f);
        if (v !== void 0) {
          var c = i(v);
          if (c === Ee)
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
        var u = r.get(f), v = u !== void 0 && u.v !== Ee || Reflect.has(s, f);
        if (u !== void 0 || fe !== null && (!v || qt(s, f)?.writable)) {
          u === void 0 && (u = l(() => {
            var h = v ? me(s[f]) : Ee, g = /* @__PURE__ */ Y(h);
            return g;
          }), r.set(f, u));
          var c = i(u);
          if (c === Ee)
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
            p !== void 0 ? x(p, Ee) : g in s && (p = l(() => /* @__PURE__ */ Y(Ee)), r.set(g + "", p));
          }
        if (c === void 0)
          (!h || qt(s, f)?.writable) && (c = l(() => /* @__PURE__ */ Y(void 0)), x(c, me(u)), r.set(f, c));
        else {
          h = c.v !== Ee;
          var E = l(() => me(u));
          x(c, E);
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
          or(a);
        }
        return !0;
      },
      ownKeys(s) {
        i(a);
        var f = Reflect.ownKeys(s).filter((c) => {
          var h = r.get(c);
          return h === void 0 || h.v !== Ee;
        });
        for (var [u, v] of r)
          v.v !== Ee && !(u in s) && f.push(u);
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
function Ri(t) {
  fe === null && (se === null && li(), oi()), ht && ii();
}
function Mi(t, e) {
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
    f: t | Se | Qe,
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
  ae?.register_created_effect(n);
  var a = n;
  if ((t & Ht) !== 0)
    ir !== null ? ir.push(n) : xt.ensure().schedule(n);
  else if (e !== null) {
    try {
      Wt(n);
    } catch (l) {
      throw Be(n), l;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Xt) === 0 && (a = a.first, (t & Xe) !== 0 && (t & zt) !== 0 && a !== null && (a.f |= zt));
  }
  if (a !== null && (a.parent = r, r !== null && Mi(a, r), se !== null && (se.f & Pe) !== 0 && (t & vt) === 0)) {
    var o = (
      /** @type {Derived} */
      se
    );
    (o.effects ??= []).push(a);
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
  Ri();
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
function Rr(t, e = 0) {
  var r = _t(Xe | e, t);
  return r;
}
function ze(t) {
  return _t(We | Xt, t);
}
function oa(t) {
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
  (e || (t.f & Fa) !== 0) && t.nodes !== null && t.nodes.end !== null && (la(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), r = !0), t.f |= br, dn(t, e && !r), sr(t, 0);
  var n = t.nodes && t.nodes.t;
  if (n !== null)
    for (const o of n)
      o.stop();
  oa(t), t.f ^= br, t.f |= Fe;
  var a = t.parent;
  a !== null && a.first !== null && sa(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function la(t, e) {
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
  }, o = n.length;
  if (o > 0) {
    var l = () => --o || a();
    for (var s of n)
      s.out(l);
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
      var o = a.next;
      if ((a.f & vt) === 0) {
        var l = (a.f & zt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & We) !== 0 && (t.f & Xe) !== 0;
        fa(a, e, l ? r : !1);
      }
      a = o;
    }
  }
}
function Sr(t) {
  t.f &= ~rn, ca(t, !0);
}
function ca(t, e) {
  if ((t.f & rn) === 0 && (t.f & De) !== 0) {
    t.f ^= De, (t.f & Ce) === 0 && (ye(t, Se), xt.ensure().schedule(t));
    for (var r = t.first; r !== null; ) {
      var n = r.next, a = (r.f & zt) !== 0 || (r.f & We) !== 0;
      ca(r, a ? e : !1), r = n;
    }
    var o = t.nodes && t.nodes.t;
    if (o !== null)
      for (const l of o)
        (l.is_global || e) && l.in();
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
let da = 1, At = 0, Rt = At;
function kn(t) {
  Rt = t;
}
function va() {
  return ++da;
}
function dr(t) {
  var e = t.f;
  if ((e & Se) !== 0)
    return !0;
  if ((e & Ve) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      t.deps
    ), n = r.length, a = 0; a < n; a++) {
      var o = r[a];
      if (dr(
        /** @type {Derived} */
        o
      ) && Wn(
        /** @type {Derived} */
        o
      ), o.wv > t.wv)
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
      var o = n[a];
      (o.f & Pe) !== 0 ? ha(
        /** @type {Derived} */
        o,
        e,
        !1
      ) : e === o && (r ? ye(o, Se) : (o.f & Ce) !== 0 && ye(o, Ve), fn(
        /** @type {Effect} */
        o
      ));
    }
}
function _a(t) {
  var e = qe, r = Ue, n = He, a = se, o = rt, l = Te, s = Ze, f = Rt, u = t.f;
  qe = /** @type {null | Value[]} */
  null, Ue = 0, He = null, se = (u & (We | vt)) === 0 ? t : null, rt = null, Vt(t.ctx), Ze = !1, Rt = ++At, t.ac !== null && (Kt(() => {
    t.ac.abort(cr);
  }), t.ac = null);
  try {
    t.f |= wr;
    var v = (
      /** @type {Function} */
      t.fn
    ), c = v();
    t.f |= Gt;
    var h = Sn(t);
    if (Un() && He !== null && !Ze && h !== null && (t.f & (Pe | Ve | Se)) === 0)
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
    return Sn(t), Li(p);
  } finally {
    t.f ^= wr, qe = e, Ue = r, He = n, se = a, rt = o, Vt(l), Ze = s, Rt = f;
  }
}
function Sn(t) {
  var e = t.deps, r = ae?.is_fork;
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
    var n = Ma.call(r, t);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = e.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (e.f & Pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (qe === null || !mr.call(qe, e))) {
    var o = (
      /** @type {Derived} */
      e
    );
    (o.f & Qe) !== 0 && (o.f ^= Qe), o.v !== Ee && an(o), o.ac !== null && Kt(() => {
      o.ac.abort(cr), o.ac = null, ye(o, Se);
    }), wi(o), sr(o, 0);
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
      (e & (Xe | Nn)) !== 0 ? Pi(t) : dn(t), oa(t);
      var a = _a(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = da;
      var o;
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
        var o = t.reactions;
        o === null ? t.reactions = [se] : mr.call(o, se) || o.push(se);
      }
    }
  }
  if (ht && tt.has(t))
    return tt.get(t);
  if (r) {
    var l = (
      /** @type {Derived} */
      t
    );
    if (ht) {
      var s = l.v;
      return ((l.f & Ce) === 0 && l.reactions !== null || pa(l)) && (s = ln(l)), tt.set(l, s), s;
    }
    var f = (l.f & Qe) === 0 && !Ze && se !== null && (pr || (se.f & Qe) !== 0), u = (l.f & Gt) === 0;
    dr(l) && (f && (l.f |= Qe), Wn(l)), f && !u && (Gn(l), ga(l));
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
  if (t.v === Ee) return !0;
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
      const n = Rn(r);
      for (let a in n) {
        const o = n[a].get;
        if (o)
          try {
            o.call(t);
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
  function a(o) {
    if (n.capture || Qr.call(e, o), !o.cancelBubble)
      return Kt(() => r?.call(this, o));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? (a.__removed = !1, st(() => {
    a.__removed || e.addEventListener(t, a, n);
  })) : e.addEventListener(t, a, n), a;
}
function ut(t, e, r, n, a) {
  var o = { capture: n, passive: a }, l = Bi(t, e, r, o);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Lr(() => {
    l.__removed = !0, e.removeEventListener(t, l, o);
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
  ), n = t.type, a = t.composedPath?.() || [], o = (
    /** @type {null | Element} */
    a[0] || t.target
  );
  Ir = t, Dr || (Dr = !0, setTimeout(() => {
    Dr = !1, Ir = null;
  }));
  var l = 0, s = Ir === t && t[rr];
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
    f <= u && (l = f);
  }
  if (o = /** @type {Element} */
  a[l] || t.target, o !== e) {
    Ln(t, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var v = se, c = fe;
    Ge(null), nt(null);
    try {
      for (var h, g = []; o !== null && o !== e; ) {
        try {
          var p = o[rr]?.[n];
          p != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === o) && p.call(o, t);
        } catch (E) {
          h ? g.push(E) : h = E;
        }
        if (t.cancelBubble) break;
        l++, o = l < a.length ? (
          /** @type {Element} */
          a[l]
        ) : null;
      }
      if (h) {
        for (let E of g)
          queueMicrotask(() => {
            throw E;
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
function S(t, e) {
  var r = (e & Ja) !== 0, n = (e & Za) !== 0, a, o = !t.startsWith("<!>");
  return () => {
    a === void 0 && (a = ba(o ? t : "<!>" + t), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(a)));
    var l = (
      /** @type {TemplateNode} */
      n || ea ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(l)
      ), f = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Nt(s, f);
    } else
      Nt(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function zi(t, e, r = "svg") {
  var n = !t.startsWith("<!>"), a = `<${r}>${n ? t : "<!>" + t}</${r}>`, o;
  return () => {
    if (!o) {
      var l = (
        /** @type {DocumentFragment} */
        ba(a)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ Je(l)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ Je(s);
    }
    var f = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
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
  let e = 0, r = Mt(0), n;
  return () => {
    cn() && (i(r), Jt(() => (e === 0 && (n = Ie(() => t(() => or(r)))), e += 1, () => {
      st(() => {
        e -= 1, e === 0 && (n?.(), n = void 0, or(r));
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
  #o = null;
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
  #l = null;
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
  #b = Yi(() => (this.#u = Mt(this.#h), () => {
    this.#u = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, r, n, a) {
    this.#t = e, this.#e = r, this.#s = (o) => {
      var l = (
        /** @type {Effect} */
        fe
      );
      l.b = this, l.f |= Hr, n(o);
    }, this.parent = /** @type {Effect} */
    fe.b, this.transform_error = a ?? this.parent?.transform_error ?? ((o) => o), this.#n = Rr(() => {
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
    st(a), r && (this.#l = ze(() => {
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
      r = !0, n && vi(), this.#l !== null && Lt(this.#l, () => {
        this.#l = null;
      }), this.#w(() => {
        this.#y();
      });
    };
    return { reset: a, invoke_onerror: () => {
      try {
        n = !0, this.#e.onerror?.(e, a), n = !1;
      } catch (l) {
        $e(l, this.#n && this.#n.parent);
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
        } catch (o) {
          try {
            this.error(o), a = !0;
          } catch (l) {
            $e(l, this.#n.parent);
          }
          return null;
        }
      }), this.#i === null) {
        this.#a = null, a && this.#v(
          /** @type {Batch} */
          ae
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
        ae
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
          ae
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
    ae?.is_fork ? (this.#i && ae.skip_effect(this.#i), this.#r && ae.skip_effect(this.#r), this.#l && ae.skip_effect(this.#l), ae.oncommit(() => {
      this.#S(e);
    })) : this.#S(e);
  }
  /**
   * @param {unknown} error
   */
  #S(e) {
    this.#i && (Be(this.#i), this.#i = null), this.#r && (Be(this.#r), this.#r = null), this.#l && (Be(this.#l), this.#l = null);
    let r = this.#e.failed;
    const n = (a) => {
      const { reset: o, invoke_onerror: l } = this.#m(a);
      l(), r && (this.#l = this.#w(() => {
        try {
          return ze(() => {
            var s = (
              /** @type {Effect} */
              fe
            );
            s.b = this, s.f |= Hr, r(
              this.#t,
              () => a,
              () => o
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
      } catch (o) {
        $e(o, this.#n && this.#n.parent);
        return;
      }
      a !== null && typeof a == "object" && typeof /** @type {any} */
      a.then == "function" ? a.then(
        n,
        /** @param {unknown} e */
        (o) => $e(o, this.#n && this.#n.parent)
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
function Ji(t, { target: e, anchor: r, props: n = {}, events: a, context: o, intro: l = !0, transformError: s }) {
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
        Re({});
        var p = (
          /** @type {ComponentContext} */
          Te
        );
        o && (p.c = o), a && (n.$$events = a), f = t(g, n) || nn(), Me();
      },
      s
    );
    var c = /* @__PURE__ */ new Set(), h = (g) => {
      for (var p = 0; p < g.length; p++) {
        var E = g[p];
        if (!c.has(E)) {
          c.add(E);
          var m = qi(E);
          for (const Z of [e, document]) {
            var C = vr.get(Z);
            C === void 0 && (C = /* @__PURE__ */ new Map(), vr.set(Z, C));
            var B = C.get(E);
            B === void 0 ? (Z.addEventListener(E, Qr, { passive: m }), C.set(E, 1)) : C.set(E, B + 1);
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
          ), E = (
            /** @type {number} */
            p.get(g)
          );
          --E == 0 ? (m.removeEventListener(g, Qr), p.delete(g), p.size === 0 && vr.delete(m)) : p.set(g, E);
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
  #o = /* @__PURE__ */ new Map();
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
      ), n = this.#o.get(r);
      if (n)
        Sr(n), this.#s.delete(r);
      else {
        var a = this.#e.get(r);
        a && (Sr(a.effect), this.#o.set(r, a.effect), this.#e.delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
      }
      for (const [o, l] of this.#t) {
        if (this.#t.delete(o), o === e)
          break;
        const s = this.#e.get(l);
        s && (Be(s.effect), this.#e.delete(l));
      }
      for (const [o, l] of this.#o) {
        if (o === r || this.#s.has(o)) continue;
        const s = () => {
          if (Array.from(this.#t.values()).includes(o)) {
            var u = document.createDocumentFragment();
            vn(l, u), u.append(ct()), this.#e.set(o, { effect: l, fragment: u });
          } else
            Be(l);
          this.#s.delete(o), this.#o.delete(o);
        };
        this.#n || !n ? (this.#s.add(o), Lt(l, s, !1)) : s();
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
      ae
    ), a = na();
    if (r && !this.#o.has(e) && !this.#e.has(e))
      if (a) {
        var o = document.createDocumentFragment(), l = ct();
        o.append(l), this.#e.set(e, {
          effect: ze(() => r(l)),
          fragment: o
        });
      } else
        this.#o.set(
          e,
          ze(() => r(this.anchor))
        );
    if (this.#t.set(n, e), a) {
      for (const [s, f] of this.#o)
        s === e ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [s, f] of this.#e)
        s === e ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(this.#i), n.ondiscard(this.#r);
    } else
      this.#i(n);
  }
}
function W(t, e, r = !1) {
  var n = new ya(t), a = r ? zt : 0;
  function o(l, s) {
    n.ensure(l, s);
  }
  Rr(() => {
    var l = !1;
    e((s, f = 0) => {
      l = !0, o(f, s);
    }), l || o(-1, null);
  }, a);
}
const Qi = /* @__PURE__ */ Symbol("NaN");
function $i(t, e, r) {
  var n = new ya(t);
  Rr(() => {
    var a = e();
    a !== a && (a = /** @type {any} */
    Qi), n.ensure(a, r);
  });
}
function we(t, e) {
  return e;
}
function eo(t, e, r) {
  for (var n = [], a = e.length, o, l = e.length, s = 0; s < a; s++) {
    let c = e[s];
    Lt(
      c,
      () => {
        if (o) {
          if (o.pending.delete(c), o.done.add(c), o.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            $r(t, Ar(o.done)), h.delete(o), h.size === 0 && (t.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
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
    o = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ??= /* @__PURE__ */ new Set()).add(o);
}
function $r(t, e, r = !0) {
  var n;
  if (t.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const l of t.pending.values())
      for (const s of l)
        n.add(
          /** @type {EachItem} */
          t.items.get(s).e
        );
  }
  for (var a = 0; a < e.length; a++) {
    var o = e[a];
    if (n?.has(o)) {
      o.f |= et;
      const l = document.createDocumentFragment();
      vn(o, l);
    } else
      Be(e[a], r);
  }
}
var En;
function _e(t, e, r, n, a, o = null) {
  var l = t, s = /* @__PURE__ */ new Map(), f = (e & In) !== 0;
  if (f) {
    var u = (
      /** @type {Element} */
      t
    );
    l = u.appendChild(ct());
  }
  var v = null, c = /* @__PURE__ */ Yn(() => {
    var Z = r();
    return (
      /** @type {V[]} */
      Cr(Z) ? Z : Z == null ? [] : Ar(Z)
    );
  }), h, g = /* @__PURE__ */ new Map(), p = !0;
  function E(Z) {
    (B.effect.f & Fe) === 0 && (B.pending.delete(Z), B.fallback = v, to(B, h, l, e, n), v !== null && (h.length === 0 ? (v.f & et) === 0 ? Sr(v) : (v.f ^= et, nr(v, null, l)) : Lt(v, () => {
      v = null;
    })));
  }
  function m(Z) {
    B.pending.delete(Z);
  }
  var C = Rr(() => {
    h = /** @type {V[]} */
    i(c);
    for (var Z = h.length, D = /* @__PURE__ */ new Set(), w = (
      /** @type {Batch} */
      ae
    ), q = na(), U = 0; U < Z; U += 1) {
      var N = h[U], F = n(N, U), te = p ? null : s.get(F);
      te ? (te.v && Yt(te.v, N), te.i && Yt(te.i, U), q && w.unskip_effect(te.e)) : (te = ro(
        s,
        p ? l : En ??= ct(),
        N,
        F,
        U,
        a,
        e,
        r
      ), p || (te.e.f |= et), s.set(F, te)), D.add(F);
    }
    if (Z === 0 && o && !v && (p ? v = ze(() => o(l)) : (v = ze(() => o(En ??= ct())), v.f |= et)), Z > D.size && ai(), !p)
      if (g.set(w, D), q) {
        for (const [V, T] of s)
          D.has(V) || w.skip_effect(T.e);
        w.oncommit(E), w.ondiscard(m);
      } else
        E(w);
    i(c);
  }), B = { effect: C, items: s, pending: g, outrogroups: null, fallback: v };
  p = !1;
}
function er(t) {
  for (; t !== null && (t.f & We) === 0; )
    t = t.next;
  return t;
}
function to(t, e, r, n, a) {
  var o = (n & Va) !== 0, l = e.length, s = t.items, f = er(t.effect.first), u, v = null, c, h = [], g = [], p, E, m, C;
  if (o)
    for (C = 0; C < l; C += 1)
      p = e[C], E = a(p, C), m = /** @type {EachItem} */
      s.get(E).e, (m.f & et) === 0 && (m.nodes?.a?.measure(), (c ??= /* @__PURE__ */ new Set()).add(m));
  for (C = 0; C < l; C += 1) {
    if (p = e[C], E = a(p, C), m = /** @type {EachItem} */
    s.get(E).e, t.outrogroups !== null)
      for (const te of t.outrogroups)
        te.pending.delete(m), te.done.delete(m);
    if ((m.f & De) !== 0 && (Sr(m), o && (m.nodes?.a?.unfix(), (c ??= /* @__PURE__ */ new Set()).delete(m))), (m.f & et) !== 0)
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
          var Z = g[0], D;
          v = Z.prev;
          var w = h[0], q = h[h.length - 1];
          for (D = 0; D < h.length; D += 1)
            nr(h[D], Z, r);
          for (D = 0; D < g.length; D += 1)
            u.delete(g[D]);
          mt(t, w.prev, q.next), mt(t, v, w), mt(t, q, Z), f = Z, v = q, C -= 1, h = [], g = [];
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
    for (const te of t.outrogroups)
      te.pending.size === 0 && ($r(t, Ar(te.done)), t.outrogroups?.delete(te));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (f !== null || u !== void 0) {
    var U = [];
    if (u !== void 0)
      for (m of u)
        (m.f & De) === 0 && U.push(m);
    for (; f !== null; )
      (f.f & De) === 0 && f !== t.fallback && U.push(f), f = er(f.next);
    var N = U.length;
    if (N > 0) {
      var F = (n & In) !== 0 && l === 0 ? r : null;
      if (o) {
        for (C = 0; C < N; C += 1)
          U[C].nodes?.a?.measure();
        for (C = 0; C < N; C += 1)
          U[C].nodes?.a?.fix();
      }
      eo(t, U, F);
    }
  }
  o && st(() => {
    if (c !== void 0)
      for (m of c)
        m.nodes?.a?.apply();
  });
}
function ro(t, e, r, n, a, o, l, s) {
  var f = (l & Ha) !== 0 ? (l & Ya) === 0 ? /* @__PURE__ */ Ei(r, !1, !1) : Mt(r) : null, u = (l & za) !== 0 ? Mt(a) : null;
  return {
    v: f,
    i: u,
    e: ze(() => (o(e, f ?? r, u ?? a, s), () => {
      t.delete(n);
    }))
  };
}
function nr(t, e, r) {
  if (t.nodes)
    for (var n = t.nodes.start, a = t.nodes.end, o = e && (e.f & et) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : r; n !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ur(n)
      );
      if (o.before(n), n === a)
        return;
      n = l;
    }
}
function mt(t, e, r) {
  e === null ? t.effect.first = r : e.next = r, r === null ? t.effect.last = e : r.prev = e;
}
function yt(t, e, r = !1, n = !1, a = !1, o = !1) {
  var l = t, s = "";
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
      if (u.nodes !== null && (la(
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
            l.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Je(h)
            );
        else
          l.before(h);
      }
    }
  });
}
function wt(t, e, r) {
  un(() => {
    var n = Ie(() => e(t, r?.()) || {});
    if (r && n?.update) {
      var a = !1, o = (
        /** @type {any} */
        {}
      );
      Jt(() => {
        var l = r();
        Fi(l), a && jn(o, l) && (o = l, n.update(l));
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
function no() {
  for (var t, e, r = 0, n = "", a = arguments.length; r < a; r++) (t = arguments[r]) && (e = wa(t)) && (n && (n += " "), n += e);
  return n;
}
function ao(t) {
  return typeof t == "object" ? no(t) : t ?? "";
}
const Cn = [...` 	
\r\f \v\uFEFF`];
function io(t, e, r) {
  var n = t == null ? "" : "" + t;
  if (e && (n = n ? n + " " + e : e), r) {
    for (var a of Object.keys(r))
      if (r[a])
        n = n ? n + " " + a : a;
      else if (n.length)
        for (var o = a.length, l = 0; (l = n.indexOf(a, l)) >= 0; ) {
          var s = l + o;
          (l === 0 || Cn.includes(n[l - 1])) && (s === n.length || Cn.includes(n[s])) ? n = (l === 0 ? "" : n.substring(0, l)) + n.substring(s + 1) : l = s;
        }
  }
  return n === "" ? null : n;
}
function An(t, e = !1) {
  var r = e ? " !important;" : ";", n = "";
  for (var a of Object.keys(t)) {
    var o = t[a];
    o != null && o !== "" && (n += " " + a + ": " + o + r);
  }
  return n;
}
function Fr(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function oo(t, e) {
  if (e) {
    var r = "", n, a;
    if (Array.isArray(e) ? (n = e[0], a = e[1]) : n = e, t) {
      t = String(t).replaceAll(/\/\*.*?\*\//g, "").trim();
      var o = !1, l = 0, s = !1, f = [];
      n && f.push(...Object.keys(n).map(Fr)), a && f.push(...Object.keys(a).map(Fr));
      var u = 0, v = -1;
      const E = t.length;
      for (var c = 0; c < E; c++) {
        var h = t[c];
        if (s ? h === "/" && t[c - 1] === "*" && (s = !1) : o ? o === h && (o = !1) : h === "/" && t[c + 1] === "*" ? s = !0 : h === '"' || h === "'" ? o = h : h === "(" ? l++ : h === ")" && l--, !s && o === !1 && l === 0) {
          if (h === ":" && v === -1)
            v = c;
          else if (h === ";" || c === E - 1) {
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
function Le(t, e, r, n, a, o) {
  var l = (
    /** @type {any} */
    t[zr]
  );
  if (l !== r || l === void 0) {
    var s = io(r, n, o);
    s == null ? t.removeAttribute("class") : t.className = s, t[zr] = r;
  } else if (o && a !== o)
    for (var f in o) {
      var u = !!o[f];
      (a == null || u !== !!a[f]) && t.classList.toggle(f, u);
    }
  return o;
}
function jr(t, e = {}, r, n) {
  for (var a in r) {
    var o = r[a];
    e[a] !== o && (r[a] == null ? t.style.removeProperty(a) : t.style.setProperty(a, o, n));
  }
}
function jt(t, e, r, n) {
  var a = (
    /** @type {any} */
    t[Vr]
  );
  if (a !== e) {
    var o = oo(e, n);
    o == null ? t.removeAttribute("style") : t.style.cssText = o, t[Vr] = e;
  } else n && (Array.isArray(n) ? (jr(t, r?.[0], n[0]), jr(t, r?.[1], n[1], "important")) : jr(t, r, n));
  return n;
}
function lo(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function so(t, e) {
  var r = t.__defaultValue, n = t.multiple, a = n ? r ?? [] : null;
  if (!(n && !Cr(a))) {
    t.selectedIndex;
    for (var o of t.options) {
      var l = Ut(o);
      lo(
        o,
        n ? (
          /** @type {any[]} */
          a.includes(l)
        ) : $n(l, r)
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
    r.every(co) || ("__defaultValue" in t && so(t), "__value" in t && hn(t, t.__value));
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
function fo(t, e, r = e) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  on(t, "change", (o) => {
    var l = o ? "[selected]" : ":checked", s;
    if (t.multiple)
      s = [].map.call(t.querySelectorAll(l), Ut);
    else {
      var f = t.querySelector(l) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      s = f && Ut(f);
    }
    r(s), t.__value = s, ae !== null && n.add(ae);
  }), un(() => {
    var o = e();
    if (t === document.activeElement) {
      var l = (
        /** @type {Batch} */
        ae
      );
      if (n.has(l))
        return;
    }
    if (hn(t, o, a), a && o === void 0) {
      var s = t.querySelector(":checked");
      s !== null && (o = Ut(s), r(o));
    }
    t.__value = o, a = !1;
  });
}
function Ut(t) {
  return "__value" in t ? t.__value : t.value;
}
function co(t) {
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
const uo = /* @__PURE__ */ Symbol("is custom element"), vo = /* @__PURE__ */ Symbol("is html"), ho = Ua ? "progress" : "PROGRESS";
function ka(t, e) {
  var r = Sa(t);
  r.value === (r.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== ho) || (t.value = e ?? "");
}
function $(t, e, r, n) {
  var a = Sa(t);
  a[e] !== (a[e] = r) && (e === "loading" && (t[Ba] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && _o(t).has(e) ? t[e] = r : t.setAttribute(e, r));
}
function Sa(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[Pn] ??= {
      [uo]: t.nodeName.includes("-"),
      [vo]: t.namespaceURI === Dn
    }
  );
}
var Tn = /* @__PURE__ */ new Map();
function _o(t) {
  var e = t.getAttribute("is") || t.nodeName, r = Tn.get(e);
  if (r) return r;
  Tn.set(e, r = /* @__PURE__ */ new Set());
  for (var n, a = t, o = Element.prototype; o !== a; ) {
    n = Rn(a);
    for (var l in n)
      n[l].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && r.add(l);
    a = tn(a);
  }
  return r;
}
function Er(t, e, r = e) {
  var n = /* @__PURE__ */ new WeakSet();
  on(t, "input", async (a) => {
    var o = a ? t.defaultValue : t.value;
    if (o = qr(t) ? Br(o) : o, r(o), ae !== null && n.add(ae), await fr(), o !== (o = e())) {
      var l = t.selectionStart, s = t.selectionEnd, f = t.value.length;
      if (t.value = o ?? "", s !== null) {
        var u = t.value.length;
        l === s && s === f && u > f ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = l, t.selectionEnd = Math.min(s, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ie(e) == null && t.value && (r(qr(t) ? Br(t.value) : t.value), ae !== null && n.add(ae)), Jt(() => {
    var a = e();
    if (t === document.activeElement) {
      var o = (
        /** @type {Batch} */
        ae
      );
      if (n.has(o))
        return;
    }
    qr(t) && a === Br(t.value) || t.type === "date" && !a && !t.value || a !== t.value && (t.value = a ?? "");
  });
}
function go(t, e, r = e) {
  on(t, "change", (n) => {
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
  ), o = (
    /** @type {Effect} */
    fe
  );
  return un(() => {
    var l, s;
    return Jt(() => {
      l = s, s = [], Ie(() => {
        Ur(r(...s), t) || (e(t, ...s), l && Ur(r(...l), t) && e(null, ...l));
      });
    }), () => {
      let f = o;
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
function po(t, e, r, n, a) {
  var o = () => {
    n(r[t]);
  };
  r.addEventListener(e, o), a ? Jt(() => {
    r[t] = a();
  }) : o(), (r === document.body || r === window || r === document) && Lr(() => {
    r.removeEventListener(e, o);
  });
}
let hr = !1;
function mo(t) {
  var e = hr;
  try {
    return hr = !1, [t(), hr];
  } finally {
    hr = e;
  }
}
function Pt(t, e, r, n) {
  var a = !0, o = (r & Xa) !== 0, l = (r & Ka) !== 0, s = (
    /** @type {V} */
    n
  ), f = !0, u = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), v = () => l && a ? (u ??= /* @__PURE__ */ lr(
    /** @type {() => V} */
    n
  ), i(u)) : (f && (f = !1, s = l ? Ie(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s);
  let c;
  if (o) {
    var h = ft in t || qa in t;
    c = qt(t, e)?.set ?? (h && e in t ? (D) => t[e] = D : void 0);
  }
  var g, p = !1;
  o ? [g, p] = mo(() => (
    /** @type {V} */
    t[e]
  )) : g = /** @type {V} */
  t[e], g === void 0 && n !== void 0 && (g = v(), c && (fi(), c(g)));
  var E;
  if (E = () => {
    var D = (
      /** @type {V} */
      t[e]
    );
    return D === void 0 ? v() : (f = !0, D);
  }, (r & Ga) === 0)
    return E;
  if (c) {
    var m = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(D, w) {
        return arguments.length > 0 ? ((!w || m || p) && c(w ? E() : D), D) : E();
      })
    );
  }
  var C = !1, B = ((r & Wa) !== 0 ? lr : Yn)(() => (C = !1, E()));
  o && i(B);
  var Z = (
    /** @type {Effect} */
    fe
  );
  return (
    /** @type {() => V} */
    (function(D, w) {
      if (arguments.length > 0) {
        const q = w ? i(B) : o ? me(D) : D;
        return x(B, q), C = !0, s !== void 0 && (s = q), D;
      }
      return ht && C || (Z.f & Fe) !== 0 ? B.v : i(B);
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
const bo = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(bo);
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
    const o = a.errors && typeof a.errors == "object" ? Object.values(a.errors).flat(1 / 0).join(" ") : a.errors;
    throw new Error(a.message || o || "This request is unavailable. Please try again.");
  }
  return r.full ? a : a.data;
}
var yo = /* @__PURE__ */ S('<button type="button" class="column-resize"></button>'), wo = /* @__PURE__ */ S('<th><button type="button" class="column-label"> <span class="column-sort" aria-hidden="true"> </span></button><!></th>'), xo = /* @__PURE__ */ S('<i role="img"></i>'), ko = /* @__PURE__ */ S('<button class="open-challenge"> </button>'), So = /* @__PURE__ */ S("<td><!></td>"), Eo = /* @__PURE__ */ S("<tr></tr>"), Co = /* @__PURE__ */ S('<div class="message-list"><table><thead><tr></tr></thead><tbody id="challenge-rows"></tbody></table></div>');
function Ao(t, e) {
  Re(e, !0);
  let r = Pt(e, "hidden", 3, !1), n = Pt(e, "solvesEnabled", 3, !1);
  const a = ["status", "subject", "points", "category", "solves"], o = {
    status: "Status",
    subject: "Subject",
    category: "Category",
    points: "Points",
    solves: "Solves"
  }, l = {
    status: 55,
    subject: 130,
    category: 90,
    points: 65,
    solves: 65
  }, s = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
  let f = /* @__PURE__ */ Y(me([...a])), u = /* @__PURE__ */ Y(null), v, c = !1;
  const h = document.createElement("canvas").getContext("2d");
  let g = /* @__PURE__ */ de(() => i(f).filter((_) => _ !== "solves" || n())), p = /* @__PURE__ */ Y(me({
    key: Ie(() => e.defaultOrder) === "name" ? "subject" : "id",
    direction: 1
  })), E = /* @__PURE__ */ Y(window.innerWidth <= 760), m = /* @__PURE__ */ de(() => i(g).filter((_) => !i(E) || _ !== "category")), C = /* @__PURE__ */ de(() => {
    const _ = i(p).key === "solves" && !n() ? "id" : i(p).key, b = (O) => ({
      status: Number(O.solved_by_me),
      subject: O.name,
      category: O.category,
      points: O.value,
      solves: O.solves ?? -1,
      id: O.id
    })[_];
    return [...e.challenges].sort((O, G) => (["id", "points", "status", "solves"].includes(_) ? b(O) - b(G) : s.compare(b(O), b(G))) * i(p).direction || O.id - G.id);
  });
  function B() {
    if (!v || r()) return;
    const _ = v.parentElement.clientWidth;
    if (!_) return;
    const b = {};
    for (const P of i(g)) {
      const I = v.querySelector(`th[data-column="${P}"] .column-label`), re = I ? getComputedStyle(I) : null;
      h.font = re?.font || "bold 12px Tahoma";
      const ie = (K) => K ? [
        "paddingLeft",
        "paddingRight",
        "borderLeftWidth",
        "borderRightWidth"
      ].reduce((z, A) => z + (parseFloat(K[A]) || 0), 0) : 0, ce = I?.querySelector(".column-sort"), j = ce ? getComputedStyle(ce) : null, R = ce ? ce.getBoundingClientRect().width + (parseFloat(j.marginLeft) || 0) + (parseFloat(j.marginRight) || 0) : 15;
      l[P] = Math.ceil(h.measureText(o[P]).width + R + ie(re) + ie(I ? getComputedStyle(I.closest("th")) : null)) + 2;
      const J = v.querySelector(`td[data-column="${P}"]`), Q = J ? getComputedStyle(J) : null;
      h.font = Q ? `bold ${Q.fontSize} ${Q.fontFamily}` : "bold 12px Tahoma";
      const ne = e.challenges.map((K) => ({
        subject: K.name,
        category: K.category,
        points: K.value,
        solves: K.solves ?? "-"
      })[P] ?? "");
      b[P] = Math.max(l[P], ...ne.map((K) => Math.ceil(h.measureText(String(K)).width) + 24));
    }
    const O = { ...b, ...c ? i(u) : {} };
    let G = _ - i(m).reduce((P, I) => P + O[I], 0);
    if (G >= 0) O.subject += G;
    else {
      for (const P of ["subject", "category", "status", "points", "solves"].filter((I) => i(m).includes(I))) {
        const I = Math.min(-G, Math.max(0, O[P] - l[P]));
        O[P] -= I, G += I;
      }
      if (G < 0) {
        const P = i(m).reduce((I, re) => I + O[re], 0);
        for (const I of i(m)) O[I] *= _ / P;
      }
    }
    x(u, O, !0);
  }
  function Z(_) {
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
  function D(_, b, O = i(u)) {
    c = !0;
    const G = i(m)[i(m).indexOf(_) + 1];
    if (!G) return;
    const P = Math.max(Math.min(0, l[_] - O[_]), Math.min(b, Math.max(0, O[G] - l[G])));
    x(
      u,
      {
        ...i(u),
        [_]: O[_] + P,
        [G]: O[G] - P
      },
      !0
    );
  }
  function w() {
    x(
      u,
      Object.fromEntries([...v.tHead.rows[0].cells].map((_) => [
        _.dataset.column,
        _.getBoundingClientRect().width || l[_.dataset.column]
      ])),
      !0
    );
  }
  async function q(_, b) {
    if (!b || b === _) return;
    i(u) || w();
    const O = new Map([...v.querySelectorAll("th,td")].map((I) => [I, I.getBoundingClientRect().left])), G = i(f).indexOf(b), P = i(f).filter((I) => I !== _);
    P.splice(G, 0, _), x(f, P, !0), await fr(), matchMedia("(prefers-reduced-motion: reduce)").matches || O.forEach((I, re) => {
      const ie = I - re.getBoundingClientRect().left;
      ie && re.animate(
        [
          { transform: `translateX(${ie}px)` },
          { transform: "translateX(0)" }
        ],
        { duration: 180, easing: "ease-out" }
      );
    });
  }
  function U(_, { key: b, resize: O = !1 }) {
    const G = _.closest("th");
    let P, I, re = !1;
    function ie() {
      I?.remove(), I = null, P = null, G.classList.remove("column-dragging"), v.querySelectorAll(".column-drop-before,.column-drop-after").forEach((K) => K.classList.remove("column-drop-before", "column-drop-after"));
    }
    function ce(K) {
      K.button !== 0 || !K.isPrimary || (re = !1, w(), P = {
        x: K.clientX,
        y: K.clientY,
        offset: K.clientX - G.getBoundingClientRect().left,
        width: i(u)[b],
        widths: { ...i(u) }
      }, _.setPointerCapture(K.pointerId));
    }
    function j(K) {
      if (P) {
        if (O) {
          D(b, K.clientX - P.x, P.widths);
          return;
        }
        if (!I && Math.hypot(K.clientX - P.x, K.clientY - P.y) > 5 && (re = !0, I = document.createElement("div"), I.className = "column-drag-ghost", I.textContent = o[b], I.setAttribute("aria-hidden", "true"), I.style.width = `${P.width}px`, document.body.append(I), G.classList.add("column-dragging")), I) {
          I.style.left = `${K.clientX - P.offset}px`, I.style.top = `${K.clientY + 12}px`, v.querySelectorAll(".column-drop-before,.column-drop-after").forEach((A) => A.classList.remove("column-drop-before", "column-drop-after"));
          const z = document.elementFromPoint(K.clientX, K.clientY)?.closest("th");
          z?.parentElement === G.parentElement && z !== G && z.classList.add(i(f).indexOf(b) < i(f).indexOf(z.dataset.column) ? "column-drop-after" : "column-drop-before");
        }
      }
    }
    function R(K) {
      if (!P) return;
      const z = document.elementFromPoint(K.clientX, K.clientY)?.closest("th"), A = !!I;
      ie(), _.hasPointerCapture(K.pointerId) && _.releasePointerCapture(K.pointerId), !O && A && z?.parentElement === G.parentElement && q(b, z.dataset.column), _.focus();
    }
    function J(K) {
      if (!O) {
        if (re && K.detail !== 0) {
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
    function Q(K) {
      if (!["ArrowLeft", "ArrowRight"].includes(K.key) || !O && !K.altKey) return;
      K.preventDefault();
      const z = K.key === "ArrowRight" ? 1 : -1;
      if (O)
        w(), D(b, z * 10);
      else {
        const A = i(g).filter((X) => !i(E) || X !== "category");
        q(b, A[A.indexOf(b) + z]);
      }
    }
    const ne = {
      pointerdown: ce,
      pointermove: j,
      pointerup: R,
      pointercancel: ie,
      lostpointercapture: ie,
      click: J,
      keydown: Q
    };
    return Object.entries(ne).forEach(([K, z]) => _.addEventListener(K, z)), {
      destroy() {
        ie(), Object.entries(ne).forEach(([K, z]) => _.removeEventListener(K, z));
      }
    };
  }
  var N = Co();
  ut("resize", Kr, () => x(E, window.innerWidth <= 760));
  var F = k(N);
  jt(F, "", {}, { width: "100%" });
  var te = k(F), V = k(te);
  _e(V, 20, () => i(g), (_) => _, (_, b) => {
    var O = wo();
    let G;
    var P = k(O), I = k(P), re = d(I), ie = H(re, !0);
    wt(P, (J, Q) => U?.(J, Q), () => ({ key: b }));
    var ce = d(P);
    {
      var j = (J) => {
        var Q = yo();
        wt(Q, (ne, K) => U?.(ne, K), () => ({ key: b, resize: !0 })), L(() => $(Q, "aria-label", `Resize ${o[b]} column`)), y(J, Q);
      }, R = /* @__PURE__ */ de(() => i(m).includes(b) && b !== i(m).at(-1));
      W(ce, (J) => {
        i(R) && J(j);
      });
    }
    L(() => {
      $(O, "data-column", b), $(O, "aria-sort", i(p).key === b ? i(p).direction === 1 ? "ascending" : "descending" : "none"), G = jt(O, "", G, {
        width: i(u) ? `${i(u)[b] ?? l[b]}px` : void 0
      }), $(P, "aria-label", `${o[b]} column. Click to sort. Drag or use Alt and arrow keys to move.`), M(I, o[b]), M(ie, i(p).key === b ? i(p).direction === 1 ? "▲" : "▼" : "");
    }), y(_, O);
  });
  var T = d(te);
  _e(T, 21, () => i(C), (_) => _.id, (_, b) => {
    var O = Eo();
    _e(O, 20, () => i(g), (G) => G, (G, P) => {
      var I = So(), re = k(I);
      {
        var ie = (Q) => {
          var ne = xo();
          L(() => {
            Le(ne, 1, `fas fa-envelope${i(b).solved_by_me ? "-open" : ""}`), $(ne, "aria-label", i(b).solved_by_me ? "Solved" : "Unsolved");
          }), y(Q, ne);
        }, ce = (Q) => {
          var ne = ko(), K = H(ne, !0);
          L(() => {
            $(ne, "data-id", i(b).id), M(K, i(b).name);
          }), ge("click", ne, () => e.onopen(i(b).id)), y(Q, ne);
        }, j = (Q) => {
          var ne = Ye();
          L(() => M(ne, i(b).category)), y(Q, ne);
        }, R = (Q) => {
          var ne = Ye();
          L(() => M(ne, i(b).solves ?? "-")), y(Q, ne);
        }, J = (Q) => {
          var ne = Ye();
          L(() => M(ne, i(b).value)), y(Q, ne);
        };
        W(re, (Q) => {
          P === "status" ? Q(ie) : P === "subject" ? Q(ce, 1) : P === "category" ? Q(j, 2) : P === "solves" ? Q(R, 3) : Q(J, -1);
        });
      }
      L(() => $(I, "data-column", P)), y(G, I);
    }), L(() => Le(O, 1, ao(i(b).solved_by_me ? "read" : "unread"))), y(_, O);
  }), Ot(F, (_) => v = _, () => v), wt(F, (_) => Z?.(_)), L(() => $(N, "hidden", r())), y(t, N), Me();
}
at(["click"]);
var To = /* @__PURE__ */ S('<details><summary> </summary> <div class="hint-content"><!></div></details>');
function Lo(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ Y(!1), n = /* @__PURE__ */ Y(!1), a = /* @__PURE__ */ Y(null), o = /* @__PURE__ */ Y("");
  async function l(m) {
    if (x(r, m.currentTarget.open, !0), !(!i(r) || i(n) || i(a))) {
      x(n, !0), x(o, "");
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
        x(o, C.message, !0);
      } finally {
        x(n, !1);
      }
    }
  }
  var s = To(), f = k(s), u = H(f), v = d(f, 2), c = k(v);
  {
    var h = (m) => {
      var C = Ye("Loading hint...");
      y(m, C);
    }, g = (m) => {
      var C = Ye();
      L(() => M(C, i(o))), y(m, C);
    }, p = (m) => {
      var C = dt(), B = ve(C);
      yt(B, () => i(a).html), y(m, C);
    }, E = (m) => {
      var C = Ye();
      L(() => M(C, i(a).content)), y(m, C);
    };
    W(c, (m) => {
      i(n) ? m(h) : i(o) ? m(g, 1) : i(a)?.html ? m(p, 2) : i(a) && m(E, 3);
    });
  }
  L(() => {
    $(s, "data-hint", e.hint.id), M(u, `${(e.hint.title || "View hint") ?? ""}${e.hint.cost ? ` (${e.hint.cost} points)` : ""}`);
  }), ut("toggle", s, l), po("open", "toggle", s, (m) => x(r, m), () => i(r)), y(t, s), Me();
}
var Ro = /* @__PURE__ */ S('<button type="button" class="solve-count"> </button>'), Mo = /* @__PURE__ */ S('<span class="challenge-solves">Total solves: <!></span>'), No = /* @__PURE__ */ S('<p role="status">Loading solves...</p>'), Oo = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button type="button">Retry</button></div>'), Po = /* @__PURE__ */ S("<tr><td><a> </a></td><td><time> </time></td></tr>"), Io = /* @__PURE__ */ S('<div class="table-responsive"><table class="table table-striped"><thead><tr><th>User</th><th>Solve time</th></tr></thead><tbody></tbody></table></div>'), Do = /* @__PURE__ */ S("<p>No solves to display.</p>"), Fo = /* @__PURE__ */ S('<!> <dialog class="express-dialog solves-dialog" aria-labelledby="solves-title"><h2 id="solves-title"> </h2> <!> <div class="dialog-actions"><button type="button" class="btn btn-primary">Close</button></div></dialog>', 1);
function jo(t, e) {
  Re(e, !0);
  let r, n = /* @__PURE__ */ Y(me([])), a = /* @__PURE__ */ Y(!1), o = /* @__PURE__ */ Y(""), l = 0;
  _n(() => l++);
  async function s() {
    const N = ++l;
    x(a, !0), x(o, ""), x(n, [], !0);
    try {
      const F = await Ae(`/challenges/${e.challengeId}/solves`);
      N === l && x(n, F, !0);
    } catch (F) {
      N === l && x(o, F.message, !0);
    } finally {
      N === l && x(a, !1);
    }
  }
  function f() {
    r.showModal(), s();
  }
  function u(N) {
    let F = !1;
    function te(_) {
      const b = N.getBoundingClientRect();
      return _.target === N && (_.clientX < b.left || _.clientX > b.right || _.clientY < b.top || _.clientY > b.bottom);
    }
    function V(_) {
      F = te(_);
    }
    function T(_) {
      F && te(_) && N.close(), F = !1;
    }
    return N.addEventListener("pointerdown", V), N.addEventListener("click", T), {
      destroy() {
        N.removeEventListener("pointerdown", V), N.removeEventListener("click", T);
      }
    };
  }
  var v = Fo(), c = ve(v);
  {
    var h = (N) => {
      var F = Mo(), te = d(k(F));
      {
        var V = (_) => {
          var b = Ro(), O = H(b, !0);
          L(() => {
            $(b, "aria-label", `View ${e.count} solves`), M(O, e.count);
          }), ge("click", b, f), y(_, b);
        }, T = (_) => {
          var b = Ye("0");
          y(_, b);
        };
        W(te, (_) => {
          e.count > 0 ? _(V) : _(T, -1);
        });
      }
      y(N, F);
    }, g = /* @__PURE__ */ de(() => Number.isInteger(e.count) && e.count >= 0);
    W(c, (N) => {
      i(g) && N(h);
    });
  }
  var p = d(c, 2), E = k(p), m = H(E), C = d(E, 2);
  {
    var B = (N) => {
      var F = No();
      y(N, F);
    }, Z = (N) => {
      var F = Oo(), te = k(F), V = d(te);
      L(() => M(te, `${i(o) ?? ""} `)), ge("click", V, s), y(N, F);
    }, D = (N) => {
      var F = Io(), te = k(F), V = d(k(te));
      _e(V, 21, () => i(n), we, (T, _) => {
        var b = Po(), O = k(b), G = k(O), P = H(G, !0), I = d(O), re = k(I), ie = H(re, !0);
        L(
          (ce) => {
            $(G, "href", i(_).account_url), M(P, i(_).name), $(re, "datetime", i(_).date), M(ie, ce);
          },
          [
            () => new Date(i(_).date).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "long" })
          ]
        ), y(T, b);
      }), y(N, F);
    }, w = (N) => {
      var F = Do();
      y(N, F);
    };
    W(C, (N) => {
      i(a) ? N(B) : i(o) ? N(Z, 1) : i(n).length ? N(D, 2) : N(w, -1);
    });
  }
  var q = d(C, 2), U = H(q);
  Ot(p, (N) => r = N, () => r), wt(p, (N) => u?.(N)), L(() => M(m, `Solves - ${e.challengeName ?? ""}`)), ut("close", p, () => l++), ge("click", U, () => r.close()), y(t, v), Me();
}
at(["click"]);
var qo = /* @__PURE__ */ S('<span class="challenge-tag"> </span>'), Bo = /* @__PURE__ */ S('<div class="challenge-tags"><span>Tags:</span><!></div>'), Uo = /* @__PURE__ */ S("<div> </div>"), Ho = /* @__PURE__ */ S("<p>Connection: <code> </code></p>"), zo = /* @__PURE__ */ S('<a download=""><i class="fas fa-paperclip" aria-hidden="true"></i> </a>'), Vo = /* @__PURE__ */ S('<i aria-hidden="true"></i><strong> </strong>', 1), Yo = /* @__PURE__ */ S('<p>Attempts: <span id="attempts"> </span> </p>'), Wo = /* @__PURE__ */ S('<header class="message-header"><h2> </h2> <div class="challenge-metadata"><span> </span><span> </span><!></div> <!> <!></header> <div class="message-body"><!></div> <!> <div class="attachments"></div> <div id="hints"></div> <form class="reply"><label for="flag">Reply with flag</label> <input id="flag" name="submission" autocomplete="off" required=""/> <button type="submit">Send</button> <div id="submission-status" role="status" aria-atomic="true"><!></div> <!></form>', 1);
function Go(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ Y(""), n = /* @__PURE__ */ Y(!1), a = /* @__PURE__ */ Y(""), o = /* @__PURE__ */ Y(""), l = /* @__PURE__ */ Y(me(Ie(() => e.challenge.attempts))), s = /* @__PURE__ */ Y(me(Ie(() => e.challenge.solves))), f = !0, u = /* @__PURE__ */ de(() => i(a) || (e.challenge.solved_by_me ? "Correct flag received." : "")), v = /* @__PURE__ */ de(() => i(o) || (i(n) ? "pending" : e.challenge.solved_by_me ? "success" : ""));
  _n(() => {
    f = !1;
  });
  const c = /* @__PURE__ */ de(() => new DOMParser().parseFromString(e.challenge.view || "", "text/html").querySelector(".challenge-desc")?.innerHTML);
  function h(z) {
    const A = z.split("/").pop().split("?")[0];
    try {
      return decodeURIComponent(A);
    } catch {
      return A;
    }
  }
  async function g(z) {
    if (z.preventDefault(), !i(n)) {
      x(n, !0), x(a, "Sending..."), x(o, "");
      try {
        const A = await Ae("/challenges/attempt", { challenge_id: e.challenge.id, submission: i(r) });
        if (!f) return;
        x(a, A.message, !0);
        const X = e.challenge.type === "delayed" && A.status === "incorrect" && /^Your submission has been taken(?:\.|$)/.test(A.message || "");
        if (x(o, ["correct", "already_solved"].includes(A.status) ? "success" : X ? "info" : "error", !0), A.status === "authentication_required" && (location.href = `${window.init.urlRoot}/login?next=${encodeURIComponent(location.pathname + location.hash)}`), A.status === "correct" && x(r, ""), e.challenge.max_attempts || ["correct", "already_solved"].includes(A.status)) {
          const oe = await Ae(`/challenges/${e.challenge.id}`);
          if (!f) return;
          x(l, oe.attempts, !0), x(s, oe.solves, !0);
        }
        await e.onattempt(A);
      } catch (A) {
        f && (x(a, A.message, !0), x(o, "error"));
      } finally {
        x(n, !1);
      }
    }
  }
  var p = Wo(), E = ve(p), m = k(E), C = H(m, !0), B = d(m, 2), Z = k(B), D = H(Z), w = d(Z), q = H(w), U = d(w);
  jo(U, {
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
  var N = d(B, 2);
  {
    var F = (z) => {
      var A = Bo(), X = d(k(A));
      _e(X, 17, () => e.challenge.tags, we, (oe, he) => {
        var pe = qo(), ke = H(pe, !0);
        L(() => M(ke, typeof i(he) == "string" ? i(he) : i(he).value)), y(oe, pe);
      }), y(z, A);
    };
    W(N, (z) => {
      e.challenge.tags?.length && z(F);
    });
  }
  var te = d(N, 2);
  {
    var V = (z) => {
      var A = Uo(), X = H(A);
      L(() => M(X, `From: ${e.challenge.attribution ?? ""}`)), y(z, A);
    };
    W(te, (z) => {
      e.challenge.attribution && z(V);
    });
  }
  var T = d(E, 2), _ = k(T);
  {
    var b = (z) => {
      var A = dt(), X = ve(A);
      yt(X, () => i(c)), y(z, A);
    }, O = (z) => {
      var A = Ye();
      L(() => M(A, e.challenge.description)), y(z, A);
    };
    W(_, (z) => {
      i(c) ? z(b) : z(O, -1);
    });
  }
  var G = d(T, 2);
  {
    var P = (z) => {
      var A = Ho(), X = d(k(A)), oe = H(X, !0);
      L(() => M(oe, e.challenge.connection_info)), y(z, A);
    };
    W(G, (z) => {
      e.challenge.connection_info && z(P);
    });
  }
  var I = d(G, 2);
  _e(I, 21, () => e.challenge.files || [], we, (z, A) => {
    var X = zo(), oe = d(k(X));
    L(
      (he) => {
        $(X, "href", i(A)), M(oe, ` ${he ?? ""}`);
      },
      [() => h(i(A))]
    ), y(z, X);
  });
  var re = d(I, 2);
  _e(re, 21, () => e.challenge.hints || [], (z) => z.id, (z, A) => {
    Lo(z, {
      get hint() {
        return i(A);
      }
    });
  });
  var ie = d(re, 2), ce = d(k(ie), 2), j = d(ce, 2), R = d(j, 2), J = k(R);
  {
    var Q = (z) => {
      var A = Vo(), X = ve(A), oe = d(X), he = H(oe, !0);
      L(() => {
        Le(X, 1, `fas ${i(v) === "success" ? "fa-check-circle" : i(v) === "error" ? "fa-times-circle" : i(v) === "info" ? "fa-info-circle" : "fa-paper-plane"}`), M(he, i(u));
      }), y(z, A);
    };
    W(J, (z) => {
      i(u) && z(Q);
    });
  }
  var ne = d(R, 2);
  {
    var K = (z) => {
      var A = Yo(), X = d(k(A)), oe = H(X, !0), he = d(X);
      L(() => {
        M(oe, i(l)), M(he, ` / ${e.challenge.max_attempts ?? ""}`);
      }), y(z, A);
    };
    W(ne, (z) => {
      e.challenge.max_attempts && z(K);
    });
  }
  L(() => {
    M(C, e.challenge.name), M(D, `Category: ${e.challenge.category ?? ""}`), M(q, `Points: ${e.challenge.value ?? ""}`), j.disabled = i(n), Le(R, 1, `submission-feedback ${i(v)}`), $(R, "hidden", !i(u));
  }), ut("submit", ie, g), Er(ce, () => i(r), (z) => x(r, z)), y(t, p), Me();
}
var Xo = /* @__PURE__ */ S('<hr class="folder-divider"/>'), Ko = /* @__PURE__ */ S('<!> <button type="button"><i aria-hidden="true"></i> </button>', 1), Jo = /* @__PURE__ */ S('<div class="express-toolbar"><button id="all-challenges" type="button"><i class="fas fa-inbox" aria-hidden="true"></i> All Challenges</button> <button id="help-button" type="button"><i class="fas fa-question-circle" aria-hidden="true"></i> Help</button> <label for="search">Search</label><div class="express-search"><i class="fas fa-search" aria-hidden="true"></i><input id="search" type="search" placeholder="Find a challenge"/></div></div> <div class="express-address">Address <span id="address"> </span></div> <div class="express-workspace"><aside class="express-sidebar" aria-label="Challenge categories"><h2>Folders</h2> <div id="folders"></div> <p id="progress" aria-live="polite"> </p></aside> <section class="express-main" aria-label="Challenges"><h1 id="folder-heading"> </h1> <p id="board-status" role="status"> </p> <button id="retry" type="button">Try again</button> <!> <section id="reader" aria-label="Challenge message"><button id="back" type="button">Back to challenges</button> <div id="message"><!></div></section></section></div> <dialog id="help-dialog"><h2> </h2> <p>Open a challenge to read its message. Reply with the flag to solve it.</p> <p>Unsolved challenges appear as unread mail. Solved challenges appear as read mail.</p> <p>Drag column headers to reorder them, or their edges to resize. With a header focused, use Alt + Left/Right to reorder.</p> <form method="dialog"><button>Close</button></form></dialog>', 1);
function Zo(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ Y(me([])), n = /* @__PURE__ */ Y("All Challenges"), a = /* @__PURE__ */ Y("all"), o = /* @__PURE__ */ Y(""), l = /* @__PURE__ */ Y(null), s = /* @__PURE__ */ Y(!1), f = /* @__PURE__ */ Y(null), u = /* @__PURE__ */ Y(""), v = /* @__PURE__ */ Y(!0), c = /* @__PURE__ */ Y(""), h = /* @__PURE__ */ Y(""), g = 0, p = 0, E, m, C = /* @__PURE__ */ de(() => i(r).filter((ee) => !ee.solved_by_me)), B = /* @__PURE__ */ de(() => [...new Set(i(r).map((ee) => ee.category))]), Z = /* @__PURE__ */ de(() => i(a) === "category" ? i(r).filter((ee) => ee.category === i(n)) : i(r)), D = /* @__PURE__ */ de(() => [
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
    ...i(B).map((ee) => ({
      name: ee,
      type: "category",
      count: i(C).filter((le) => le.category === ee).length
    }))
  ]), w = /* @__PURE__ */ de(() => i(r).filter((ee) => (i(a) === "all" || (i(a) === "unread" ? !ee.solved_by_me : ee.category === i(n))) && `${ee.name} ${ee.category}`.toLowerCase().includes(i(o).toLowerCase().trim())));
  Tt(() => {
    const ee = `${e.config.appName} - ${i(n)}`;
    document.title = ee, document.getElementById("window-title").textContent = ee;
  });
  async function q() {
    const ee = ++p;
    x(v, !0), x(c, "");
    try {
      const le = await Ae("/challenges");
      ee === p && x(r, le.sort((ue, xe) => ue.id - xe.id), !0);
    } catch (le) {
      ee === p && x(c, le.message, !0);
    } finally {
      ee === p && x(v, !1);
    }
  }
  async function U(ee = !0) {
    g++, x(s, !1), x(f, null), x(u, ""), history.replaceState(null, "", location.pathname + location.search), await fr(), ee && document.querySelector(`.open-challenge[data-id="${i(l)}"]`)?.focus();
  }
  function N(ee) {
    x(n, ee.name, !0), x(a, ee.type, !0), x(h, ""), U(!1);
  }
  async function F(ee) {
    const le = ++g;
    x(l, ee, !0), x(s, !0), x(f, null), x(u, ""), x(h, "");
    try {
      const ue = await Ae(`/challenges/${ee}`);
      if (le !== g) return;
      x(f, ue, !0), history.replaceState(null, "", `#challenge-${ee}`), await fr(), m?.focus();
    } catch (ue) {
      le === g && x(u, ue.message, !0);
    }
  }
  async function te(ee) {
    const le = g;
    await q(), le === g && i(a) === "unread" && ["correct", "already_solved"].includes(ee.status) && !i(c) && (await U(!1), x(h, "Challenge solved. Removed from Unsolved Challenges."), document.querySelector('#folders [data-view="unread"]')?.focus());
  }
  kt(() => {
    const ee = location.hash.match(/-(\d+)$/);
    q().then(() => {
      ee && g === 0 && F(Number(ee[1]));
    });
  }), _n(() => {
    g++, p++;
  });
  var V = Jo(), T = ve(V), _ = k(T), b = d(_, 2), O = d(b, 3), G = d(k(O)), P = d(T, 2), I = d(k(P)), re = H(I), ie = d(P, 2), ce = k(ie), j = d(k(ce), 2);
  _e(j, 23, () => i(D), (ee) => `${ee.type}:${ee.name}`, (ee, le, ue) => {
    var xe = Ko(), je = ve(xe);
    {
      var Ne = (pt) => {
        var Qt = Xo();
        y(pt, Qt);
      };
      W(je, (pt) => {
        i(ue) === 2 && pt(Ne);
      });
    }
    var be = d(je, 2);
    let Oe;
    var ot = k(be), gt = d(ot);
    L(() => {
      $(be, "data-view", i(le).type), $(be, "data-folder", i(le).name), Oe = Le(be, 1, "", null, Oe, {
        active: i(a) === i(le).type && i(n) === i(le).name
      }), Le(ot, 1, `fas fa-${i(le).type === "unread" ? "envelope" : "folder"}`), M(gt, `${i(le).name ?? ""}${i(le).type !== "all" && i(le).count > 0 ? ` (${i(le).count})` : ""}`);
    }), ge("click", be, () => N(i(le))), y(ee, xe);
  });
  var R = d(j, 2), J = H(R), Q = d(ce, 2), ne = k(Q), K = H(ne, !0), z = d(ne, 2), A = H(z, !0), X = d(z, 2), oe = d(X, 2);
  {
    let ee = /* @__PURE__ */ de(() => i(r).some((ue) => Number.isInteger(ue.solves))), le = /* @__PURE__ */ de(() => e.config.themeSettings?.challenge_order);
    Ao(oe, {
      get challenges() {
        return i(w);
      },
      get solvesEnabled() {
        return i(ee);
      },
      get defaultOrder() {
        return i(le);
      },
      onopen: F,
      get hidden() {
        return i(s);
      }
    });
  }
  var he = d(oe, 2), pe = k(he);
  Ot(pe, (ee) => m = ee, () => m);
  var ke = d(pe, 2), it = k(ke);
  {
    var St = (ee) => {
      var le = dt(), ue = ve(le);
      {
        var xe = (be) => {
          var Oe = Ye();
          L(() => M(Oe, i(u))), y(be, Oe);
        }, je = (be) => {
          var Oe = dt(), ot = ve(Oe);
          $i(ot, () => i(f).id, (gt) => {
            Go(gt, {
              get challenge() {
                return i(f);
              },
              onattempt: te
            });
          }), y(be, Oe);
        }, Ne = (be) => {
          var Oe = Ye("Loading message...");
          y(be, Oe);
        };
        W(ue, (be) => {
          i(u) ? be(xe) : i(f) ? be(je, 1) : be(Ne, -1);
        });
      }
      y(ee, le);
    };
    W(it, (ee) => {
      i(s) && ee(St);
    });
  }
  var It = d(ie, 2), Dt = k(It), Zt = H(Dt, !0);
  Ot(It, (ee) => E = ee, () => E), L(
    (ee) => {
      M(re, `Folders / ${i(n) ?? ""}`), M(J, `${ee ?? ""} of ${i(Z).length ?? ""} challenges solved`), M(K, i(n)), M(A, i(c) || (i(v) ? "Loading challenges..." : i(h) || (i(w).length ? "" : "No challenges found."))), $(X, "hidden", !i(c)), $(he, "hidden", !i(s)), M(Zt, e.config.appName);
    },
    [
      () => i(Z).filter((ee) => ee.solved_by_me).length
    ]
  ), ge("click", _, () => {
    x(o, ""), N(i(D)[0]);
  }), ge("click", b, () => E.showModal()), ge("input", G, () => {
    x(h, ""), U(!1);
  }), Er(G, () => i(o), (ee) => x(o, ee)), ge("click", X, q), ge("click", pe, () => U()), y(t, V), Me();
}
at(["click", "input"]);
function Ea(t, e = !0) {
  if (!e) return;
  const r = t.querySelector(".logon-drag-handle, .window-drag-handle");
  if (!r) return;
  let n;
  const a = [];
  function o(c, h, g) {
    c?.addEventListener(h, g), a.push(() => c?.removeEventListener(h, g));
  }
  function l(c, h) {
    const g = window.visualViewport, p = g?.offsetLeft || 0, E = g?.offsetTop || 0, m = g?.width || document.documentElement.clientWidth, C = Math.max(0, (g?.height || innerHeight) - (t.classList.contains("express-window") ? 34 : 0));
    t.style.maxWidth = `${m}px`, t.style.maxHeight = `${C}px`;
    const B = t.getBoundingClientRect();
    t.style.left = `${Math.max(p, Math.min(c, p + m - B.width))}px`, t.style.top = `${Math.max(E, Math.min(h, E + C - B.height))}px`;
  }
  const s = t.getBoundingClientRect();
  t.classList.add("is-draggable"), l(s.left, s.top), o(r, "pointerdown", (c) => {
    if (c.button !== 0 || !c.isPrimary) return;
    const h = t.getBoundingClientRect();
    n = { id: c.pointerId, x: c.clientX - h.left, y: c.clientY - h.top }, r.setPointerCapture(c.pointerId), r.classList.add("is-dragging"), c.preventDefault();
  }), o(r, "pointermove", (c) => {
    n?.id === c.pointerId && l(c.clientX - n.x, c.clientY - n.y);
  });
  const f = () => {
    n = null, r.classList.remove("is-dragging");
  };
  for (const c of ["pointerup", "pointercancel", "lostpointercapture"]) o(r, c, f);
  o(r, "keydown", (c) => {
    const h = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[c.key];
    if (!h) return;
    c.preventDefault();
    const g = t.getBoundingClientRect(), p = c.shiftKey ? 1 : 10;
    l(g.left + h[0] * p, g.top + h[1] * p);
  });
  const u = () => {
    const c = t.getBoundingClientRect();
    l(c.left, c.top);
  };
  o(window, "resize", u), o(window.visualViewport, "resize", u), o(window.visualViewport, "scroll", u);
  const v = new ResizeObserver(u);
  return v.observe(t), { destroy() {
    v.disconnect(), a.forEach((c) => c());
  } };
}
var Qo = /* @__PURE__ */ S('<div role="alert"><span><!></span><button type="button" class="btn-close" aria-label="Close"></button></div>');
function Ca(t, e) {
  Re(e, !0);
  let r = Pt(e, "errors", 19, () => []), n = Pt(e, "infos", 19, () => []), a = /* @__PURE__ */ Y(me([]));
  var o = dt(), l = ve(o);
  _e(
    l,
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
          var E = Qo(), m = k(E), C = k(m);
          {
            var B = (w) => {
              var q = dt(), U = ve(q);
              yt(U, () => i(f).text.html), y(w, q);
            }, Z = (w) => {
              var q = Ye();
              L(() => M(q, i(f).text.text ?? i(f).text)), y(w, q);
            };
            W(C, (w) => {
              i(f).text.html ? w(B) : w(Z, -1);
            });
          }
          var D = d(m);
          L(() => Le(E, 1, `alert alert-${i(f).type ?? ""} alert-dismissible`)), ge("click", D, () => x(a, [...i(a), u], !0)), y(p, E);
        }, g = /* @__PURE__ */ de(() => !i(a).includes(u));
        W(c, (p) => {
          i(g) && p(h);
        });
      }
      y(s, v);
    }
  ), y(t, o), Me();
}
at(["click"]);
var $o = /* @__PURE__ */ S('<span class="text-danger" aria-hidden="true">*</span>'), el = /* @__PURE__ */ S("<option> </option>"), tl = /* @__PURE__ */ S('<select class="form-select"></select>'), rl = /* @__PURE__ */ S('<input type="checkbox" class="form-check-input"/>'), nl = /* @__PURE__ */ S('<textarea class="form-control"></textarea>'), al = /* @__PURE__ */ S('<input class="form-control"/>'), il = /* @__PURE__ */ S('<small class="form-text text-muted"> </small>'), ol = /* @__PURE__ */ S('<div><label class="form-label"> <!></label> <!> <!></div>');
function gn(t, e) {
  Re(e, !0);
  let r = Pt(e, "compact", 3, !1), n = /* @__PURE__ */ Y(me(Ie(() => e.field.type === "SelectField" ? String(e.field.value ?? "") : e.field.value ?? ""))), a = /* @__PURE__ */ Y(me(Ie(() => e.field.value === !0 || e.field.value === "True" || e.field.value === "true")));
  const o = {
    PasswordField: "password",
    EmailField: "email",
    URLField: "url",
    DateField: "date",
    IntegerField: "number",
    HiddenField: "hidden"
  }, l = /* @__PURE__ */ de(() => e.field.name === "name" ? "username" : e.field.name === "email" ? "email" : e.field.name === "confirm" ? "current-password" : e.field.type === "PasswordField" ? r() ? "current-password" : "new-password" : void 0);
  var s = ol();
  let f;
  var u = k(s), v = k(u), c = d(v);
  {
    var h = (D) => {
      var w = $o();
      y(D, w);
    };
    W(c, (D) => {
      e.field.required && D(h);
    });
  }
  var g = d(u, 2);
  {
    var p = (D) => {
      var w = tl();
      _e(w, 21, () => e.field.choices, we, (q, U) => {
        var N = /* @__PURE__ */ de(() => Da(i(U), 2));
        let F = () => i(N)[0], te = () => i(N)[1];
        var V = el(), T = H(V, !0), _ = {};
        L(
          (b) => {
            M(T, te()), _ !== (_ = b) && (V.value = (V.__value = _) ?? "");
          },
          [() => String(F())]
        ), y(q, V);
      }), xa(w), L(() => {
        $(w, "id", e.field.id), $(w, "name", e.field.name), w.required = e.field.required;
      }), fo(w, () => i(n), (q) => x(n, q)), y(D, w);
    }, E = (D) => {
      var w = rl();
      w.value = w.__value = "y", L(() => {
        $(w, "id", e.field.id), $(w, "name", e.field.name), w.required = e.field.required;
      }), go(w, () => i(a), (q) => x(a, q)), y(D, w);
    }, m = (D) => {
      var w = nl();
      L(() => {
        $(w, "id", e.field.id), $(w, "name", e.field.name), w.required = e.field.required;
      }), Er(w, () => i(n), (q) => x(n, q)), y(D, w);
    }, C = (D) => {
      var w = al();
      L(() => {
        $(w, "id", e.field.id), $(w, "name", e.field.name), $(w, "type", o[e.field.type] || "text"), $(w, "autocomplete", i(l)), w.required = e.field.required;
      }), Er(w, () => i(n), (q) => x(n, q)), y(D, w);
    };
    W(g, (D) => {
      e.field.type === "SelectField" ? D(p) : e.field.type === "BooleanField" ? D(E, 1) : e.field.type === "TextAreaField" ? D(m, 2) : D(C, -1);
    });
  }
  var B = d(g, 2);
  {
    var Z = (D) => {
      var w = il(), q = H(w, !0);
      L(() => M(q, e.field.description)), y(D, w);
    };
    W(B, (D) => {
      e.field.description && !r() && D(Z);
    });
  }
  L(() => {
    f = Le(s, 1, "", null, f, { "logon-field": r(), "mb-3": !r() }), $(u, "for", e.field.id), M(v, e.field.label);
  }), y(t, s), Me();
}
var ll = /* @__PURE__ */ S("<a>Forgot your password?</a>"), sl = /* @__PURE__ */ S('<!> <form method="post" accept-charset="utf-8"><!> <input type="hidden" name="nonce"/> <div><!> <button id="_submit" name="_submit" type="submit" class="btn btn-primary xp-default"> </button></div></form>', 1), fl = /* @__PURE__ */ S('<img class="logon-icon" alt=""/>'), cl = /* @__PURE__ */ Vi('<svg class="logon-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="9" width="50" height="36" rx="2" fill="#eef4ff" stroke="#153e80" stroke-width="3"></rect><path d="M12 14h40v25H12z" fill="#245bb4"></path><path d="M26 46v7h12v-7M18 55h28" fill="none" stroke="#153e80" stroke-width="3"></path><rect x="24" y="23" width="16" height="12" rx="1" fill="#ffe4a0"></rect><path d="M28 23v-3a4 4 0 0 1 8 0v3" fill="none" stroke="#ffe4a0" stroke-width="3"></path></svg>'), ul = /* @__PURE__ */ S('<a class="btn logon-oauth">Log on with Major League Cyber</a>'), dl = /* @__PURE__ */ S('<footer class="logon-footer">Need an account? <a>Register</a></footer>'), vl = /* @__PURE__ */ S('<div class="login-stage"><section class="xp-logon" aria-labelledby="logon-title"><header class="express-title logon-drag-handle" tabindex="0" role="button" aria-label="Move login window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><i class="fas fa-key" aria-hidden="true"></i> Log On</header> <div class="logon-banner"><!> <div><h1 id="logon-title"> </h1><p> </p></div></div> <div class="logon-content"><p>Enter your user name and password to continue.</p><!> <!></div> <!></section></div>'), hl = /* @__PURE__ */ S("<p> </p>"), _l = /* @__PURE__ */ S("<p> </p> <p>Please click the link in that email to confirm your account.</p><p>If the email does not arrive, check your spam folder or contact an administrator to manually verify your account.</p>", 1), gl = /* @__PURE__ */ S('<a class="btn btn-secondary mb-3">Log on with Major League Cyber</a>'), pl = /* @__PURE__ */ S('<a class="btn btn-secondary mt-3">Change Email Address</a>'), ml = /* @__PURE__ */ S('<p class="text-muted mt-3">By registering, you agree to the <a target="_blank" rel="noopener">privacy policy</a> and <a target="_blank" rel="noopener">terms of service</a>.</p>'), bl = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1> </h1></div></div> <div class="container"><div class="auth-page"><!> <!> <!> <!> <!> <!></div></div>', 1);
function yl(t, e) {
  Re(e, !0);
  const r = (v) => {
    var c = sl(), h = ve(c);
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
    var E = k(g);
    _e(E, 17, () => e.page.fields || [], we, (U, N) => {
      {
        let F = /* @__PURE__ */ de(() => e.page.kind === "login");
        gn(U, {
          get field() {
            return i(N);
          },
          get compact() {
            return i(F);
          }
        });
      }
    });
    var m = d(E, 2), C = d(m, 2);
    let B;
    var Z = k(C);
    {
      var D = (U) => {
        var N = ll();
        L(() => $(N, "href", `${i(a)}/reset_password`)), y(U, N);
      };
      W(Z, (U) => {
        e.page.kind === "login" && U(D);
      });
    }
    var w = d(Z, 2), q = H(w, !0);
    L(() => {
      p = Le(g, 1, "", null, p, { "logon-form": e.page.kind === "login" }), ka(m, e.config.csrfNonce), B = Le(C, 1, "", null, B, {
        "logon-actions": e.page.kind === "login",
        "auth-actions": e.page.kind !== "login"
      }), w.disabled = i(n), M(q, i(n) ? "Please wait..." : e.page.kind === "login" ? "Log On" : e.page.kind === "confirm" ? "Send Confirmation Email" : "Submit");
    }), ut("submit", g, () => x(n, !0)), y(v, c);
  };
  let n = /* @__PURE__ */ Y(!1);
  const a = /* @__PURE__ */ de(() => e.config.urlRoot), o = {
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
  var l = dt(), s = ve(l);
  {
    var f = (v) => {
      var c = vl(), h = k(c), g = d(k(h), 2), p = k(g);
      {
        var E = (T) => {
          var _ = fl();
          L(() => $(_, "src", e.site.logo)), y(T, _);
        }, m = (T) => {
          var _ = cl();
          y(T, _);
        };
        W(p, (T) => {
          e.site.logo ? T(E) : T(m, -1);
        });
      }
      var C = d(p, 2), B = k(C), Z = H(B, !0), D = d(B), w = H(D), q = d(g, 2), U = d(k(q));
      r(U);
      var N = d(U, 2);
      {
        var F = (T) => {
          var _ = ul();
          L(() => $(_, "href", e.site.oauth)), y(T, _);
        };
        W(N, (T) => {
          e.site.oauth && T(F);
        });
      }
      var te = d(q, 2);
      {
        var V = (T) => {
          var _ = dl(), b = d(k(_));
          L(() => $(b, "href", `${i(a)}/register`)), y(T, _);
        };
        W(te, (T) => {
          e.site.registration && T(V);
        });
      }
      wt(h, (T) => Ea?.(T)), L(() => {
        M(Z, e.site.appName), M(w, `Log on to ${e.site.eventName ?? ""}`);
      }), y(v, c);
    }, u = (v) => {
      var c = bl(), h = ve(c), g = k(h), p = k(g), E = H(p, !0), m = d(h, 2), C = k(m), B = k(C);
      {
        var Z = (_) => {
          var b = hl(), O = H(b, !0);
          L(() => M(O, e.page.mode === "set" ? "You can now reset the password for your account and log in. Please enter a new password below." : "Please provide the email address associated with your account below.")), y(_, b);
        };
        W(B, (_) => {
          e.page.kind === "reset" && _(Z);
        });
      }
      var D = d(B, 2);
      {
        var w = (_) => {
          var b = _l(), O = ve(b), G = H(O, !0);
          L(() => M(G, e.page.initial ? "To send a confirmation email to your email address, please click the button below." : "We've sent a confirmation email to your email address.")), y(_, b);
        };
        W(D, (_) => {
          e.page.kind === "confirm" && _(w);
        });
      }
      var q = d(D, 2);
      {
        var U = (_) => {
          var b = gl();
          L(() => $(b, "href", e.site.oauth)), y(_, b);
        };
        W(q, (_) => {
          e.page.kind === "register" && e.site.oauth && _(U);
        });
      }
      var N = d(q, 2);
      r(N);
      var F = d(N, 2);
      {
        var te = (_) => {
          var b = pl();
          L(() => $(b, "href", `${i(a)}/settings`)), y(_, b);
        };
        W(F, (_) => {
          e.page.kind === "confirm" && _(te);
        });
      }
      var V = d(F, 2);
      {
        var T = (_) => {
          var b = ml(), O = d(k(b)), G = d(O, 2);
          L(() => {
            $(O, "href", e.page.privacy), $(G, "href", e.page.terms);
          }), y(_, b);
        };
        W(V, (_) => {
          e.page.kind === "register" && e.page.showTerms && _(T);
        });
      }
      L(() => M(E, o[e.page.kind])), y(v, c);
    };
    W(s, (v) => {
      e.page.kind === "login" ? v(f) : v(u, -1);
    });
  }
  y(t, l), Me();
}
var wl = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> </div>'), xl = /* @__PURE__ */ S('<div class="alert alert-success" role="status"> </div>'), kl = /* @__PURE__ */ S('<tr><td> </td><td> </td><td> </td><td><button class="btn"><i class="fas fa-times" aria-hidden="true"></i></button></td></tr>'), Sl = /* @__PURE__ */ S('<div class="table-responsive"><table class="table"><thead><tr><th>Created</th><th>Expiration</th><th>Description</th><th>Delete</th></tr></thead><tbody></tbody></table></div>'), El = /* @__PURE__ */ S("<p>No active tokens.</p>"), Cl = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Settings</h1></div></div> <div class="container settings-layout"><div class="nav flex-column nav-pills" aria-label="Settings sections"><button id="settings-profile-tab">Profile</button> <button id="settings-tokens-tab">Access Tokens</button></div> <div><!> <!> <section id="profile"><form method="post"><!> <button type="submit" id="_submit" class="btn btn-primary"> </button></form></section> <section id="tokens"><form><div class="mb-3"><label for="expiration" class="form-label">Expiration</label><input id="expiration" name="expiration" type="date" class="form-control"/></div> <div class="mb-3"><label for="description" class="form-label">Usage Description</label><textarea id="description" name="description" class="form-control" rows="3"></textarea></div> <button type="submit" class="btn btn-primary">Generate</button></form> <h2 class="h4 mt-4">Active Tokens</h2> <!></section></div></div> <dialog class="express-dialog"><h2>API Key Generated</h2><p>Please copy your API key. It will not be shown again!</p> <input class="form-control" aria-label="API key" readonly=""/> <div class="dialog-actions"><button class="btn">Copy</button><button class="btn btn-primary">Got it!</button></div></dialog>', 1);
function Al(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ Y("profile"), n = /* @__PURE__ */ Y(!1), a = /* @__PURE__ */ Y(""), o = /* @__PURE__ */ Y(""), l = /* @__PURE__ */ Y(me(Ie(() => e.page.tokens))), s = /* @__PURE__ */ Y(""), f, u;
  function v(A) {
    const X = Object.fromEntries(new FormData(A));
    for (const oe of A.querySelectorAll('input[type="checkbox"]')) X[oe.name] = oe.checked;
    return X;
  }
  function c(A) {
    u = v(A);
  }
  async function h(A) {
    if (A.preventDefault(), i(n)) return;
    x(n, !0), x(a, ""), x(o, "");
    const X = A.currentTarget, oe = v(X), he = {};
    for (const [pe, ke] of Object.entries(oe)) {
      if (pe === "_submit" || ke === u[pe]) continue;
      const it = /^fields\[(\d+)\]$/.exec(pe);
      it ? (he.fields ||= []).push({ field_id: Number(it[1]), value: ke }) : he[pe] = ke;
    }
    try {
      await Ae("/users/me", he, { method: "PATCH" }), x(o, "Your profile has been updated.");
      for (const pe of X.querySelectorAll('input[type="password"]')) pe.value = "";
      u = v(X);
    } catch (pe) {
      x(a, pe.message, !0);
    } finally {
      x(n, !1);
    }
  }
  async function g(A) {
    if (A.preventDefault(), i(n)) return;
    x(n, !0), x(a, ""), x(o, "");
    const X = v(A.currentTarget);
    X.expiration || delete X.expiration;
    try {
      const oe = await Ae("/tokens", X);
      x(s, oe.value, !0);
      const { value: he, ...pe } = oe;
      x(l, [...i(l), pe], !0), f.showModal();
    } catch (oe) {
      x(a, oe.message, !0);
    } finally {
      x(n, !1);
    }
  }
  async function p(A) {
    if (!(i(n) || !confirm("Are you sure you want to delete this token?"))) {
      x(n, !0), x(a, ""), x(o, "");
      try {
        await Ae(`/tokens/${A}`, void 0, { method: "DELETE" }), x(l, i(l).filter((X) => X.id !== A), !0);
      } catch (X) {
        x(a, X.message, !0);
      } finally {
        x(n, !1);
      }
    }
  }
  async function E() {
    try {
      await navigator.clipboard.writeText(i(s)), x(o, "API key copied.");
    } catch {
      x(o, "Select and copy the API key below.");
    }
  }
  function m(A) {
    x(r, A, !0), x(a, ""), x(o, "");
  }
  var C = Cl(), B = d(ve(C), 2), Z = k(B), D = k(Z);
  let w;
  var q = d(D, 2);
  let U;
  var N = d(Z, 2), F = k(N);
  {
    var te = (A) => {
      var X = wl(), oe = H(X, !0);
      L(() => M(oe, i(a))), y(A, X);
    };
    W(F, (A) => {
      i(a) && A(te);
    });
  }
  var V = d(F, 2);
  {
    var T = (A) => {
      var X = xl(), oe = H(X, !0);
      L(() => M(oe, i(o))), y(A, X);
    };
    W(V, (A) => {
      i(o) && A(T);
    });
  }
  var _ = d(V, 2), b = k(_), O = k(b);
  _e(O, 17, () => e.page.fields, we, (A, X) => {
    gn(A, {
      get field() {
        return i(X);
      }
    });
  });
  var G = d(O, 2), P = H(G, !0);
  wt(b, (A) => c?.(A));
  var I = d(_, 2), re = k(I), ie = d(k(re), 4), ce = d(re, 4);
  {
    var j = (A) => {
      var X = Sl(), oe = k(X), he = d(k(oe));
      _e(he, 21, () => i(l), we, (pe, ke) => {
        var it = kl(), St = k(it), It = H(St, !0), Dt = d(St), Zt = H(Dt, !0), ee = d(Dt), le = H(ee, !0), ue = d(ee), xe = H(ue);
        L(
          (je, Ne) => {
            M(It, je), M(Zt, Ne), M(le, i(ke).description), $(xe, "aria-label", `Delete token ${i(ke).description || i(ke).id}`), xe.disabled = i(n);
          },
          [
            () => i(ke).created ? new Date(i(ke).created).toLocaleDateString() : "",
            () => i(ke).expiration ? new Date(i(ke).expiration).toLocaleDateString() : "Never"
          ]
        ), ge("click", xe, () => p(i(ke).id)), y(pe, it);
      }), y(A, X);
    }, R = (A) => {
      var X = El();
      y(A, X);
    };
    W(ce, (A) => {
      i(l).length ? A(j) : A(R, -1);
    });
  }
  var J = d(B, 2), Q = d(k(J), 3), ne = d(Q, 2), K = k(ne), z = d(K);
  Ot(J, (A) => f = A, () => f), L(() => {
    w = Le(D, 1, "nav-link", null, w, { active: i(r) === "profile" }), $(D, "aria-pressed", i(r) === "profile"), U = Le(q, 1, "nav-link", null, U, { active: i(r) === "tokens" }), $(q, "aria-pressed", i(r) === "tokens"), $(_, "hidden", i(r) !== "profile"), G.disabled = i(n), M(P, i(n) ? "Saving..." : "Submit"), $(I, "hidden", i(r) !== "tokens"), ie.disabled = i(n), ka(Q, i(s));
  }), ge("click", D, () => m("profile")), ge("click", q, () => m("tokens")), ut("submit", b, h), ut("submit", re, g), ut("close", J, () => x(s, "")), ge("click", Q, (A) => A.currentTarget.select()), ge("click", K, E), ge("click", z, () => f.close()), y(t, C), Me();
}
at(["click"]);
var Tl = /* @__PURE__ */ S("<a> </a>"), Ll = /* @__PURE__ */ S('<span class="badge bg-secondary ms-2"> </span>'), Rl = /* @__PURE__ */ S('<a class="badge bg-primary ms-2">Official</a>'), Ml = /* @__PURE__ */ S('<a target="_blank" rel="noopener"><i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Nl = /* @__PURE__ */ S("<tr><td><!> <!> <!></td><td><!></td><td> </td><td> </td></tr>"), Ol = /* @__PURE__ */ S('<p role="status">No users match your search.</p>'), Pl = /* @__PURE__ */ S("<option> </option>"), Il = /* @__PURE__ */ S('<label class="pagination-control">Page <select class="page-select form-select"></select> </label>'), Dl = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Users</h1></div></div> <div class="container"><form method="get" class="user-search"><!> <button type="submit" class="btn btn-primary"><i class="fas fa-search" aria-hidden="true"></i> Search</button></form> <div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>User</th><th>Website</th><th>Affiliation</th><th>Country</th></tr></thead><tbody></tbody></table></div> <!> <!></div>', 1);
function Fl(t, e) {
  Re(e, !0);
  function r(p) {
    const E = new URL(location.href);
    E.searchParams.set("page", p.currentTarget.value), location.assign(E);
  }
  var n = Dl(), a = d(ve(n), 2), o = k(a), l = k(o);
  _e(l, 17, () => e.page.fields, we, (p, E) => {
    gn(p, {
      get field() {
        return i(E);
      }
    });
  });
  var s = d(o, 2), f = k(s), u = d(k(f));
  _e(u, 21, () => e.page.users, we, (p, E) => {
    var m = Nl(), C = k(m), B = k(C);
    {
      var Z = (P) => {
        var I = Tl(), re = H(I, !0);
        L(() => {
          $(I, "href", `${e.config.urlRoot}/users/${i(E).id}`), M(re, i(E).name);
        }), y(P, I);
      }, D = (P) => {
        var I = Ye();
        L(() => M(I, i(E).name)), y(P, I);
      };
      W(B, (P) => {
        e.page.scoresVisible ? P(Z) : P(D, -1);
      });
    }
    var w = d(B, 2);
    {
      var q = (P) => {
        var I = Ll(), re = H(I, !0);
        L(() => M(re, i(E).bracket)), y(P, I);
      };
      W(w, (P) => {
        i(E).bracket && P(q);
      });
    }
    var U = d(w, 2);
    {
      var N = (P) => {
        var I = Rl();
        L((re) => $(I, "href", re), [
          () => `https://majorleaguecyber.org/u/${encodeURIComponent(i(E).name)}`
        ]), y(P, I);
      };
      W(U, (P) => {
        i(E).official && P(N);
      });
    }
    var F = d(C), te = k(F);
    {
      var V = (P) => {
        var I = Ml();
        L(() => {
          $(I, "href", i(E).website), $(I, "aria-label", `Website for ${i(E).name}`);
        }), y(P, I);
      }, T = /* @__PURE__ */ de(() => /^https?:\/\//i.test(i(E).website || ""));
      W(te, (P) => {
        i(T) && P(V);
      });
    }
    var _ = d(F), b = H(_, !0), O = d(_), G = H(O, !0);
    L(() => {
      M(b, i(E).affiliation || ""), M(G, i(E).country);
    }), y(p, m);
  });
  var v = d(s, 2);
  {
    var c = (p) => {
      var E = Ol();
      y(p, E);
    };
    W(v, (p) => {
      e.page.users.length || p(c);
    });
  }
  var h = d(v, 2);
  {
    var g = (p) => {
      var E = Il(), m = d(k(E));
      _e(m, 21, () => Array.from({ length: e.page.pages }, (Z, D) => D + 1), we, (Z, D) => {
        var w = Pl(), q = H(w, !0), U = {};
        L(() => {
          M(q, i(D)), U !== (U = i(D)) && (w.value = (w.__value = U) ?? "");
        }), y(Z, w);
      });
      var C;
      xa(m);
      var B = d(m);
      L(() => {
        C !== (C = e.page.page) && (m.value = (m.__value = C) ?? "", hn(m, C)), M(B, ` of ${e.page.pages ?? ""} (${e.page.total ?? ""} users)`);
      }), ge("change", m, r), y(p, E);
    };
    W(h, (p) => {
      e.page.pages > 1 && p(g);
    });
  }
  y(t, n), Me();
}
at(["change"]);
const en = ["#194c9f", "#8a2459", "#25632a", "#8a480c", "#623e9d", "#006473", "#a12a20", "#4c5872", "#615600", "#763c36"];
var jl = /* @__PURE__ */ S('<p role="status"> </p>'), ql = /* @__PURE__ */ S('<!> <div id="score-graph" class="score-chart" role="img"></div>', 1);
function Aa(t, e) {
  Re(e, !0);
  let r = Pt(e, "title", 3, "Score over Time"), n = Pt(e, "series", 19, () => []), a, o = /* @__PURE__ */ Y(null), l = /* @__PURE__ */ Y("");
  kt(() => {
    let c = !0;
    const h = new ResizeObserver(() => i(o)?.resize());
    return import("./chart-ClLr2WTg.js").then(({ init: g }) => {
      c && (x(o, g(a)), h.observe(a));
    }).catch(() => {
      c && x(l, "The chart could not load. The scores are available in the table below.");
    }), () => {
      c = !1, h.disconnect(), i(o)?.dispose();
    };
  }), Tt(() => {
    if (!i(o)) return;
    const c = "#18202a";
    i(o).setOption(
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
  var s = ql(), f = ve(s);
  {
    var u = (c) => {
      var h = jl(), g = H(h, !0);
      L(() => M(g, i(l))), y(c, h);
    };
    W(f, (c) => {
      i(l) && c(u);
    });
  }
  var v = d(f, 2);
  Ot(v, (c) => a = c, () => a), L(() => $(v, "aria-label", `${r()}. Scores are also listed in the table below.`)), y(t, s), Me();
}
var Bl = /* @__PURE__ */ S('<a class="badge bg-primary">Official</a>'), Ul = /* @__PURE__ */ S('<span class="badge bg-primary"> </span>'), Hl = /* @__PURE__ */ S("<p> </p>"), zl = /* @__PURE__ */ S("<h2> <small>place</small></h2>"), Vl = /* @__PURE__ */ S("<h2> <small>points</small></h2>"), Yl = /* @__PURE__ */ S('<a target="_blank" rel="noopener">Website <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Wl = /* @__PURE__ */ S('<p role="status">Loading profile...</p>'), Gl = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), Xl = /* @__PURE__ */ S('<div class="progress-bar"></div>'), Kl = /* @__PURE__ */ S('<span><span class="legend-swatch"></span> </span>'), Jl = /* @__PURE__ */ S('<div><i aria-hidden="true"></i><h4> </h4><p> </p><p> </p><strong> </strong></div>'), Zl = /* @__PURE__ */ S('<section aria-labelledby="awards-heading"><h3 id="awards-heading">Awards</h3><div class="profile-awards"></div></section>'), Ql = /* @__PURE__ */ S("<tr><td><a> </a></td><td> </td><td> </td><td><time> </time></td></tr>"), $l = /* @__PURE__ */ S('<section class="profile-graphs" aria-label="Score breakdowns"><div class="profile-breakdowns"><div><div class="progress" aria-hidden="true"><div class="progress-bar"></div><div class="progress-bar"></div></div><p> </p></div> <div><div class="progress" aria-hidden="true"></div><div class="category-legend"></div></div></div> <!></section> <!> <h3>Solves</h3><div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Challenge</th><th>Category</th><th>Value</th><th>Time</th></tr></thead><tbody></tbody></table></div>', 1), es = /* @__PURE__ */ S('<h3 class="text-muted text-center">No solves yet</h3>'), ts = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1> </h1> <div class="profile-badges"><!> <!></div> <!> <!> <!> <!></div></div> <div class="container"><!> <!> <!></div>', 1);
function rs(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ Y(me([])), n = /* @__PURE__ */ Y(me([])), a = /* @__PURE__ */ Y(0), o = /* @__PURE__ */ Y(null), l = /* @__PURE__ */ Y(!0), s = /* @__PURE__ */ Y(""), f = 0;
  const u = /* @__PURE__ */ de(() => i(r).length + i(a) ? 100 * i(r).length / (i(r).length + i(a)) : 0), v = /* @__PURE__ */ de(() => {
    const j = /* @__PURE__ */ new Map();
    return i(r).forEach((R) => j.set(R.challenge.category, (j.get(R.challenge.category) || 0) + 1)), [...j].map(([R, J], Q) => ({
      name: R,
      count: J,
      percent: 100 * J / i(r).length,
      color: en[Q % en.length]
    }));
  }), c = /* @__PURE__ */ de(() => {
    let j = 0;
    return [
      {
        name: e.page.name,
        data: [...i(r), ...i(n)].sort((R, J) => new Date(R.date) - new Date(J.date)).map((R) => [
          new Date(R.date).getTime(),
          j += R.challenge?.value ?? R.value
        ])
      }
    ];
  });
  async function h() {
    const j = ++f;
    x(s, "");
    try {
      const R = e.page.private ? "me" : e.page.id, [J, Q, ne, K] = await Promise.all([
        Ae(`/users/${R}/solves`),
        Ae(`/users/${R}/fails`, void 0, { full: !0 }),
        Ae(`/users/${R}/awards`),
        e.page.private ? Ae("/users/me") : Promise.resolve(e.page)
      ]);
      if (j !== f) return;
      x(r, J, !0), x(a, Q.meta.count, !0), x(n, ne, !0), x(o, K.score, !0);
    } catch (R) {
      j === f && x(s, R.message, !0);
    } finally {
      j === f && x(l, !1);
    }
  }
  kt(() => (h(), () => f++));
  var g = ts(), p = ve(g), E = k(p), m = k(E), C = H(m, !0), B = d(m, 2), Z = k(B);
  {
    var D = (j) => {
      var R = Bl();
      L((J) => $(R, "href", J), [
        () => `https://majorleaguecyber.org/u/${encodeURIComponent(e.page.name)}`
      ]), y(j, R);
    };
    W(Z, (j) => {
      e.page.official && j(D);
    });
  }
  var w = d(Z, 2);
  _e(
    w,
    17,
    () => [
      e.page.affiliation,
      e.page.country,
      e.page.bracket
    ].filter(Boolean),
    we,
    (j, R) => {
      var J = Ul(), Q = H(J, !0);
      L(() => M(Q, i(R))), y(j, J);
    }
  );
  var q = d(B, 2);
  _e(q, 17, () => e.page.fields, we, (j, R) => {
    var J = Hl(), Q = H(J);
    L(() => M(Q, `${i(R).name ?? ""}: ${i(R).value ?? ""}`)), y(j, J);
  });
  var U = d(q, 2);
  {
    var N = (j) => {
      var R = zl(), J = k(R);
      L(() => M(J, `${e.page.place ?? ""} `)), y(j, R);
    };
    W(U, (j) => {
      e.page.place && j(N);
    });
  }
  var F = d(U, 2);
  {
    var te = (j) => {
      var R = Vl(), J = k(R);
      L(() => M(J, `${i(o) ?? ""} `)), y(j, R);
    };
    W(F, (j) => {
      i(o) !== null && j(te);
    });
  }
  var V = d(F, 2);
  {
    var T = (j) => {
      var R = Yl();
      L(() => $(R, "href", e.page.website)), y(j, R);
    }, _ = /* @__PURE__ */ de(() => /^https?:\/\//i.test(e.page.website || ""));
    W(V, (j) => {
      i(_) && j(T);
    });
  }
  var b = d(p, 2), O = k(b);
  {
    var G = (j) => {
      var R = Wl();
      y(j, R);
    };
    W(O, (j) => {
      i(l) && j(G);
    });
  }
  var P = d(O, 2);
  {
    var I = (j) => {
      var R = Gl(), J = k(R), Q = d(J);
      L(() => M(J, `${i(s) ?? ""} `)), ge("click", Q, h), y(j, R);
    };
    W(P, (j) => {
      i(s) && j(I);
    });
  }
  var re = d(P, 2);
  {
    var ie = (j) => {
      var R = $l(), J = ve(R), Q = k(J), ne = k(Q), K = k(ne), z = k(K), A = d(z), X = d(K), oe = H(X), he = d(ne, 2), pe = k(he);
      _e(pe, 21, () => i(v), we, (le, ue) => {
        var xe = Xl();
        L(() => jt(xe, `width:${i(ue).percent}%;background:${i(ue).color}`)), y(le, xe);
      });
      var ke = d(pe);
      _e(ke, 21, () => i(v), we, (le, ue) => {
        var xe = Kl(), je = k(xe), Ne = d(je);
        L(
          (be) => {
            jt(je, `background:${i(ue).color}`), M(Ne, `${i(ue).name ?? ""} (${be ?? ""}%)`);
          },
          [() => i(ue).percent.toFixed(2)]
        ), y(le, xe);
      });
      var it = d(Q, 2);
      Aa(it, {
        get series() {
          return i(c);
        }
      });
      var St = d(J, 2);
      {
        var It = (le) => {
          var ue = Zl(), xe = d(k(ue));
          _e(xe, 21, () => i(n), we, (je, Ne) => {
            var be = Jl(), Oe = k(be), ot = d(Oe), gt = H(ot, !0), pt = d(ot), Qt = H(pt, !0), $t = d(pt), Mr = H($t, !0), Nr = d($t), Ra = H(Nr);
            L(() => {
              Le(Oe, 1, `award-icon award-${i(Ne).icon} fa-2x`), M(gt, i(Ne).name), M(Qt, i(Ne).category || ""), M(Mr, i(Ne).description || ""), M(Ra, `${i(Ne).value ?? ""} points`);
            }), y(je, be);
          }), y(le, ue);
        };
        W(St, (le) => {
          i(n).length && le(It);
        });
      }
      var Dt = d(St, 3), Zt = k(Dt), ee = d(k(Zt));
      _e(ee, 21, () => i(r), we, (le, ue) => {
        var xe = Ql(), je = k(xe), Ne = k(je), be = H(Ne, !0), Oe = d(je), ot = H(Oe, !0), gt = d(Oe), pt = H(gt, !0), Qt = d(gt), $t = k(Qt), Mr = H($t, !0);
        L(
          (Nr) => {
            $(Ne, "href", `${e.config.urlRoot}/challenges#challenge-${i(ue).challenge.id}`), M(be, i(ue).challenge.name), M(ot, i(ue).challenge.category), M(pt, i(ue).challenge.value), $($t, "datetime", i(ue).date), M(Mr, Nr);
          },
          [() => new Date(i(ue).date).toLocaleString()]
        ), y(le, xe);
      }), L(
        (le, ue) => {
          jt(z, `width:${i(u)}%;background:#25632a`), jt(A, `width:${100 - i(u)}%;background:#a12a20`), M(oe, `Solves (${le ?? ""}%) / Fails (${ue ?? ""}%)`);
        },
        [
          () => i(u).toFixed(2),
          () => (100 - i(u)).toFixed(2)
        ]
      ), y(j, R);
    }, ce = (j) => {
      var R = es();
      y(j, R);
    };
    W(re, (j) => {
      i(r).length || i(n).length ? j(ie) : !i(l) && !i(s) && j(ce, 1);
    });
  }
  L(() => M(C, e.page.name)), y(t, g), Me();
}
at(["click"]);
var ns = /* @__PURE__ */ S('<p role="status">Loading scoreboard...</p>'), as = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), is = /* @__PURE__ */ S("<button> </button>"), os = /* @__PURE__ */ S('<nav class="nav nav-pills mb-3" aria-label="Competition bracket"><button>All</button><!></nav>'), ls = /* @__PURE__ */ S('<span class="badge bg-secondary ms-2"> </span>'), ss = /* @__PURE__ */ S('<tr><th scope="row"></th><td><a> </a><!></td><td> </td></tr>'), fs = /* @__PURE__ */ S('<h3 class="text-center text-muted">Scoreboard is empty</h3>'), cs = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Scoreboard</h1></div></div> <div class="container"><!> <!> <!> <!> <div id="scoreboard" class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Place</th><th>User</th><th>Score</th></tr></thead><tbody></tbody></table></div> <!></div>', 1);
function us(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ Y(me([])), n = /* @__PURE__ */ Y(me([])), a = /* @__PURE__ */ Y(""), o = /* @__PURE__ */ Y(me({})), l = /* @__PURE__ */ Y(!0), s = /* @__PURE__ */ Y(""), f = 0;
  const u = /* @__PURE__ */ de(() => i(r).filter((T) => !i(a) || String(T.bracket_id) === i(a))), v = /* @__PURE__ */ de(() => Object.values(i(o)).map((T) => {
    let _ = 0;
    return {
      name: T.name,
      data: [...T.solves].sort((b, O) => new Date(b.date) - new Date(O.date)).map((b) => [new Date(b.date).getTime(), _ += b.value])
    };
  }));
  async function c() {
    const T = ++f;
    x(s, "");
    try {
      const [_, b, O] = await Promise.all([
        Ae("/scoreboard"),
        Ae("/brackets?type=users"),
        Ae(`/scoreboard/top/10${i(a) ? `?bracket_id=${encodeURIComponent(i(a))}` : ""}`)
      ]);
      if (T !== f) return;
      x(r, _, !0), x(n, b, !0), x(o, O, !0);
    } catch (_) {
      T === f && x(s, _.message, !0);
    } finally {
      T === f && x(l, !1);
    }
  }
  function h(T) {
    x(a, T, !0), c();
  }
  kt(() => {
    c();
    const T = setInterval(c, 3e5);
    return () => {
      clearInterval(T), f++;
    };
  });
  var g = cs(), p = d(ve(g), 2), E = k(p);
  {
    var m = (T) => {
      var _ = ns();
      y(T, _);
    };
    W(E, (T) => {
      i(l) && T(m);
    });
  }
  var C = d(E, 2);
  {
    var B = (T) => {
      var _ = as(), b = k(_), O = d(b);
      L(() => M(b, `${i(s) ?? ""} `)), ge("click", O, c), y(T, _);
    };
    W(C, (T) => {
      i(s) && T(B);
    });
  }
  var Z = d(C, 2);
  {
    var D = (T) => {
      var _ = os(), b = k(_);
      let O;
      var G = d(b);
      _e(G, 17, () => i(n), we, (P, I) => {
        var re = is();
        let ie;
        var ce = H(re, !0);
        L(
          (j) => {
            ie = Le(re, 1, "nav-link", null, ie, { active: j }), M(ce, i(I).name);
          },
          [() => i(a) === String(i(I).id)]
        ), ge("click", re, () => h(String(i(I).id))), y(P, re);
      }), L(() => O = Le(b, 1, "nav-link", null, O, { active: !i(a) })), ge("click", b, () => h("")), y(T, _);
    };
    W(Z, (T) => {
      i(n).length && T(D);
    });
  }
  var w = d(Z, 2);
  {
    var q = (T) => {
      Aa(T, {
        title: "Top 10 Users",
        get series() {
          return i(v);
        }
      });
    };
    W(w, (T) => {
      i(v).length && T(q);
    });
  }
  var U = d(w, 2), N = k(U), F = d(k(N));
  _e(F, 21, () => i(u), we, (T, _, b) => {
    var O = ss(), G = k(O);
    G.textContent = b + 1;
    var P = d(G), I = k(P), re = H(I, !0), ie = d(I);
    {
      var ce = (J) => {
        var Q = ls(), ne = H(Q, !0);
        L(() => M(ne, i(_).bracket_name)), y(J, Q);
      };
      W(ie, (J) => {
        i(_).bracket_name && J(ce);
      });
    }
    var j = d(P), R = H(j, !0);
    L(() => {
      $(I, "href", i(_).account_url), M(re, i(_).name), M(R, i(_).score);
    }), y(T, O);
  });
  var te = d(U, 2);
  {
    var V = (T) => {
      var _ = fs();
      y(T, _);
    };
    W(te, (T) => {
      !i(l) && !i(s) && !i(u).length && T(V);
    });
  }
  y(t, g), Me();
}
at(["click"]);
var ds = /* @__PURE__ */ S('<div class="container custom-page"></div>');
function vs(t, e) {
  Re(e, !0);
  function r(a) {
    let o = !0;
    return (async () => {
      for (const l of a.querySelectorAll("script")) {
        if (!o) break;
        const s = document.createElement("script");
        for (const u of l.attributes) s.setAttribute(u.name, u.value);
        s.textContent = l.textContent;
        const f = s.src && !s.hasAttribute("async") ? new Promise((u) => {
          s.async = !1, s.onload = s.onerror = u;
        }) : null;
        l.replaceWith(s), f && await f;
      }
    })(), {
      destroy() {
        o = !1;
      }
    };
  }
  var n = ds();
  yt(n, () => e.html, !0), wt(n, (a) => r?.(a)), y(t, n), Me();
}
var hs = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), _s = /* @__PURE__ */ S('<h2 class="text-center">There are no notifications yet</h2>'), gs = /* @__PURE__ */ S('<article class="card bg-body-tertiary mb-4"><div class="card-body"><h3> </h3><div></div><time class="text-muted"> </time></div></article>'), ps = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Notifications</h1></div></div> <div class="container"><!> <!> <!></div>', 1), ms = /* @__PURE__ */ S('<aside class="express-toast" role="status"><h2> </h2><div></div><button class="btn">Dismiss</button></aside>'), bs = /* @__PURE__ */ S('<h2 id="notification-title"> </h2><div></div><div class="dialog-actions"><a class="btn">All notifications</a><button class="btn btn-primary">Close</button></div>', 1), ys = /* @__PURE__ */ S('<!> <!> <dialog class="express-dialog" aria-labelledby="notification-title"><!></dialog>', 1);
function ws(t, e) {
  Re(e, !0);
  const r = (w) => (!w.user_id || w.user_id === e.config.userId) && (!w.team_id || w.team_id === e.config.teamId);
  let n = /* @__PURE__ */ Y(me(Ie(() => (e.page.notifications || []).filter(r)))), a = /* @__PURE__ */ Y(me([])), o = /* @__PURE__ */ Y(null), l = /* @__PURE__ */ Y(""), s;
  const f = /* @__PURE__ */ de(() => `challenge-express-notifications:${e.config.urlRoot}:${e.config.userId || "guest"}`);
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
    i(o) && v([i(o).id]), x(o, null);
  }
  async function h() {
    try {
      x(n, (await Ae("/notifications")).filter(r), !0), x(l, ""), e.page.kind === "notifications" && v(i(n).map((w) => w.id));
    } catch (w) {
      e.page.kind === "notifications" && x(l, w.message, !0);
    }
  }
  Tt(() => {
    e.onunread(i(n).filter((w) => !i(a).includes(w.id)).length);
  }), Tt(() => {
    i(o) && i(o).type !== "toast" && s && !s.open && s.showModal();
  }), Tt(() => {
    if (i(o)?.type !== "toast") return;
    const w = setTimeout(() => x(o, null), 8e3);
    return () => clearTimeout(w);
  }), kt(() => {
    try {
      const N = JSON.parse(localStorage.getItem(i(f)) || "[]");
      Array.isArray(N) && x(a, N, !0);
    } catch {
      x(a, [], !0);
    }
    h();
    const w = (N) => {
      if (N.key === i(
        f
        /* Ignore malformed external storage. */
      ))
        try {
          const F = JSON.parse(N.newValue || "[]");
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
    }), q?.addEventListener("notification", (N) => {
      let F;
      try {
        F = JSON.parse(N.data);
      } catch {
        return;
      }
      if (!r(F)) return;
      const te = !i(n).some((V) => V.id === F.id);
      x(
        n,
        [
          ...i(n).filter((V) => V.id !== F.id),
          F
        ],
        !0
      ), e.page.kind === "notifications" ? v([F.id]) : te && !i(a).includes(F.id) && F.type !== "background" && x(o, F, !0);
    }), () => {
      q?.close(), window.removeEventListener("storage", w);
    };
  });
  var g = ys(), p = ve(g);
  {
    var E = (w) => {
      var q = ps(), U = d(ve(q), 2), N = k(U);
      {
        var F = (_) => {
          var b = hs(), O = k(b), G = d(O);
          L(() => M(O, `${i(l) ?? ""} `)), ge("click", G, h), y(_, b);
        };
        W(N, (_) => {
          i(l) && _(F);
        });
      }
      var te = d(N, 2);
      {
        var V = (_) => {
          var b = _s();
          y(_, b);
        };
        W(te, (_) => {
          !i(n).length && !i(l) && _(V);
        });
      }
      var T = d(te, 2);
      _e(T, 17, () => [...i(n)].sort((_, b) => b.id - _.id), we, (_, b) => {
        var O = gs(), G = k(O), P = k(G), I = H(P, !0), re = d(P);
        yt(re, () => i(b).html, !0);
        var ie = d(re), ce = H(ie, !0);
        L(
          (j) => {
            M(I, i(b).title), $(ie, "datetime", i(b).date), M(ce, j);
          },
          [() => new Date(i(b).date).toLocaleString()]
        ), y(_, O);
      }), y(w, q);
    };
    W(p, (w) => {
      e.page.kind === "notifications" && w(E);
    });
  }
  var m = d(p, 2);
  {
    var C = (w) => {
      var q = ms(), U = k(q), N = H(U, !0), F = d(U);
      yt(F, () => i(o).html || "", !0);
      var te = d(F);
      L(() => M(N, i(o).title)), ge("click", te, c), y(w, q);
    };
    W(m, (w) => {
      i(o)?.type === "toast" && w(C);
    });
  }
  var B = d(m, 2), Z = k(B);
  {
    var D = (w) => {
      var q = bs(), U = ve(q), N = H(U, !0), F = d(U);
      yt(F, () => i(o).html || "", !0);
      var te = d(F), V = k(te), T = d(V);
      L(() => {
        M(N, i(o).title), $(V, "href", `${e.config.urlRoot}/notifications`);
      }), ge("click", T, () => s.close()), y(w, q);
    };
    W(Z, (w) => {
      i(o) && i(o).type !== "toast" && w(D);
    });
  }
  Ot(B, (w) => s = w, () => s), ut("close", B, c), y(t, g), Me();
}
at(["click"]);
var xs = /* @__PURE__ */ S('<img class="express-brand-icon" alt="" draggable="false"/>'), ks = /* @__PURE__ */ S('<i class="fas fa-envelope" aria-hidden="true"></i>'), Ss = /* @__PURE__ */ S('<i class="fas fa-bell" aria-hidden="true"></i>'), Es = /* @__PURE__ */ S('<span class="badge bg-danger"> </span>'), Cs = /* @__PURE__ */ S('<li class="nav-item"><a class="nav-link"><!> <!></a></li>'), As = /* @__PURE__ */ S("<ul></ul>"), Ts = /* @__PURE__ */ S('<nav class="navbar navbar-expand-md" aria-label="Main navigation"><div class="container"><button class="navbar-toggler" type="button" aria-controls="base-navbars" aria-label="Toggle navigation"><i class="fas fa-bars" aria-hidden="true"></i> Menu</button> <div id="base-navbars"></div></div></nav>'), Ls = /* @__PURE__ */ S('<div id="challenge-app"><!></div>'), Rs = /* @__PURE__ */ S("<p> </p>"), Ms = /* @__PURE__ */ S('<div class="container error-page"><h1> </h1><h2> </h2><!><a>Back to challenges</a></div>'), Ns = /* @__PURE__ */ S("<!> <!>", 1), Os = /* @__PURE__ */ S('<div class="express-window"><header class="express-title window-drag-handle" tabindex="0" role="button" aria-label="Move application window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><!> <span id="window-title"> </span></header> <!> <main id="main-content"><!> <!></main> <footer class="express-status"> <span>Powered by <a href="https://ctfd.io">CTFd</a></span></footer></div> <div class="express-taskbar"><a class="express-start">Start</a><span> </span></div>', 1);
function Ps(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ Y(!1), n = /* @__PURE__ */ Y(0);
  const a = /* @__PURE__ */ de(() => e.page.kind === "login"), o = /* @__PURE__ */ de(() => ["login", "register", "reset", "confirm"].includes(e.page.kind));
  kt(() => (document.body.classList.toggle("login-desktop", i(a)), () => document.body.classList.remove("login-desktop")));
  var l = Os(), s = ve(l), f = k(s), u = k(f);
  {
    var v = (V) => {
      var T = xs();
      L(() => $(T, "src", e.site.logo)), y(V, T);
    }, c = (V) => {
      var T = ks();
      y(V, T);
    };
    W(u, (V) => {
      e.site.logo ? V(v) : V(c, -1);
    });
  }
  var h = d(u, 2), g = H(h, !0), p = d(f, 2);
  {
    var E = (V) => {
      var T = Ts(), _ = k(T), b = k(_), O = d(b, 2);
      let G;
      _e(O, 21, () => [e.site.primary, e.site.account], we, (P, I, re) => {
        var ie = As();
        Le(ie, 1, "navbar-nav", null, {}, { "me-auto": re === 0, "ms-md-auto": re === 1 }), _e(ie, 21, () => i(I), we, (ce, j) => {
          var R = Cs(), J = k(R), Q = k(J);
          {
            var ne = (X) => {
              var oe = Ss();
              y(X, oe);
            };
            W(Q, (X) => {
              i(j).label === "Notifications" && X(ne);
            });
          }
          var K = d(Q), z = d(K);
          {
            var A = (X) => {
              var oe = Es(), he = H(oe, !0);
              L(() => M(he, i(n))), y(X, oe);
            };
            W(z, (X) => {
              i(j).label === "Notifications" && i(n) > 0 && X(A);
            });
          }
          L(() => {
            $(J, "href", i(j).href), $(J, "target", i(j).target || void 0), $(J, "rel", i(j).target === "_blank" ? "noopener" : void 0), M(K, `${i(j).label ?? ""} `);
          }), y(ce, R);
        }), y(P, ie);
      }), L(() => {
        $(b, "aria-expanded", i(r)), G = Le(O, 1, "collapse navbar-collapse", null, G, { show: i(r) });
      }), ge("click", b, () => x(r, !i(r))), y(V, T);
    };
    W(p, (V) => {
      i(a) || V(E);
    });
  }
  var m = d(p, 2), C = k(m);
  {
    var B = (V) => {
      yl(V, {
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
    }, Z = (V) => {
      var T = Ns(), _ = ve(T);
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
        var O = (R) => {
          var J = Ls(), Q = k(J);
          Zo(Q, {
            get config() {
              return e.config;
            }
          }), y(R, J);
        }, G = (R) => {
          Al(R, {
            get page() {
              return e.page;
            }
          });
        }, P = (R) => {
          Fl(R, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, I = (R) => {
          rs(R, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, re = (R) => {
          us(R, {});
        }, ie = (R) => {
          vs(R, {
            get html() {
              return e.page.html;
            }
          });
        }, ce = (R) => {
          var J = Ms(), Q = k(J), ne = H(Q, !0), K = d(Q), z = H(K), A = d(K);
          {
            var X = (he) => {
              var pe = Rs(), ke = H(pe, !0);
              L(() => M(ke, e.page.detail)), y(he, pe);
            };
            W(A, (he) => {
              e.page.detail && he(X);
            });
          }
          var oe = d(A);
          L(() => {
            M(ne, e.page.heading), M(z, `${e.page.code ?? ""} ${e.page.message ?? ""}`), $(oe, "href", `${e.config.urlRoot}/challenges`);
          }), y(R, J);
        }, j = (R) => {
          var J = dt(), Q = ve(J);
          yt(Q, () => e.fallback), y(R, J);
        };
        W(b, (R) => {
          e.page.kind === "challenges" ? R(O) : e.page.kind === "settings" ? R(G, 1) : e.page.kind === "users" ? R(P, 2) : e.page.kind === "profile" ? R(I, 3) : e.page.kind === "scoreboard" ? R(re, 4) : e.page.kind === "page" ? R(ie, 5) : e.page.kind === "error" ? R(ce, 6) : e.page.kind !== "notifications" && R(j, 7);
        });
      }
      y(V, T);
    };
    W(C, (V) => {
      i(o) ? V(B) : V(Z, -1);
    });
  }
  var D = d(C, 2);
  ws(D, {
    get page() {
      return e.page;
    },
    get config() {
      return e.config;
    },
    onunread: (V) => x(n, V, !0)
  });
  var w = d(m, 2), q = k(w);
  wt(s, (V, T) => Ea?.(V, T), () => !i(a));
  var U = d(s, 2), N = k(U), F = d(N), te = H(F, !0);
  L(() => {
    M(g, e.site.title), M(q, e.site.eventName), $(N, "href", `${e.config.urlRoot}/challenges`), M(te, e.site.appName);
  }), y(t, l), Me();
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
