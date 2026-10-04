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
const Oe = 2, zt = 4, Tr = 8, Nn = 1 << 24, Ge = 16, Ye = 32, vt = 64, Hr = 128, rn = 256, Ze = 512, Ee = 1024, ke = 2048, ze = 4096, De = 8192, Fe = 16384, Xt = 32768, br = 1 << 25, Vt = 65536, yr = 1 << 17, Fa = 1 << 18, Kt = 1 << 19, ja = 1 << 20, et = 1 << 25, wr = 1 << 21, Ut = 1 << 22, mt = 1 << 23, ft = /* @__PURE__ */ Symbol("$state"), On = /* @__PURE__ */ Symbol("component"), Ba = /* @__PURE__ */ Symbol("legacy props"), qa = /* @__PURE__ */ Symbol(""), Pn = /* @__PURE__ */ Symbol("attributes"), zr = /* @__PURE__ */ Symbol("class"), Vr = /* @__PURE__ */ Symbol("style"), Yr = /* @__PURE__ */ Symbol("text"), _r = /* @__PURE__ */ Symbol("form reset"), ur = new class extends Error {
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
function Bn(t) {
  return !jn(t, this.v);
}
function qn(t) {
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
function ui() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ci() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function di() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function vi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Le = null;
function Yt(t) {
  Le = t;
}
function Me(t, e = !1, r) {
  Le = {
    p: Le,
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
function Ne(t) {
  var e = (
    /** @type {ComponentContext} */
    Le
  ), r = e.e;
  if (r !== null) {
    e.e = null;
    for (var n of r)
      ia(n);
  }
  return e.i = !0, Le = e.p, nn(t);
}
function nn(t = {}) {
  return Ln(t, On, { value: !0 }), t;
}
function Un() {
  return !0;
}
let Tt = [];
function Hn() {
  var t = Tt;
  Tt = [], Ia(t);
}
function st(t) {
  if (Tt.length === 0 && !ar) {
    var e = Tt;
    queueMicrotask(() => {
      e === Tt && Hn();
    });
  }
  Tt.push(t);
}
function hi() {
  for (; Tt.length > 0; )
    Hn();
}
const _i = -7169;
function ye(t, e) {
  t.f = t.f & _i | e;
}
function an(t) {
  (t.f & Ze) !== 0 || t.deps === null ? ye(t, Ee) : ye(t, ze);
}
function zn(t, e, r) {
  (t.f & ke) !== 0 ? e.add(t) : (t.f & ze) !== 0 && r.add(t), ye(t, Ee);
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
function Jt(t) {
  var e = se, r = fe;
  We(null), nt(null);
  try {
    return t();
  } finally {
    We(e), nt(r);
  }
}
function ln(t, e, r, n = r) {
  t.addEventListener(e, () => Jt(r));
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
  ), f = mi(), c = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((g) => g.promise)) : null;
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
  var u = Vn();
  if (r.length === 0) {
    c.then(() => v([])).finally(u);
    return;
  }
  function h() {
    Promise.all(r.map((g) => /* @__PURE__ */ bi(g))).then(v).catch((g) => $e(g, s)).finally(u);
  }
  c ? c.then(() => {
    f(), h(), xr();
  }) : h();
}
function mi() {
  var t = (
    /** @type {Effect} */
    fe
  ), e = se, r = Le, n = (
    /** @type {Batch} */
    ae
  );
  return function(l = !0) {
    nt(t), We(e), Yt(r), l && (t.f & Fe) === 0 && (n?.activate(), n?.apply());
  };
}
function xr(t = !0) {
  nt(null), We(null), Yt(null), t && ae?.deactivate();
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
function or(t) {
  var e = Oe | ke;
  return fe !== null && (fe.f |= Kt), {
    ctx: Le,
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
  ), l = Ot(
    /** @type {V} */
    Se
  ), o = !se, s = /* @__PURE__ */ new Set();
  return Oi(() => {
    var f = (
      /** @type {Effect} */
      fe
    ), c = Mn();
    a = c.promise;
    try {
      Promise.resolve(t()).then(c.resolve, (g) => {
        g !== ur && c.reject(g);
      }).finally(xr);
    } catch (g) {
      c.reject(g), xr();
    }
    var v = (
      /** @type {Batch} */
      ae
    );
    if (o) {
      if ((f.f & Xt) !== 0)
        var u = Vn();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        n.b?.is_rendered()
      )
        v.async_deriveds.get(f)?.reject(tr);
      else
        for (const g of s.values())
          g.reject(tr);
      s.add(c), v.async_deriveds.set(f, c);
    }
    const h = (g, p = void 0) => {
      u?.(), s.delete(c), p !== tr && (v.activate(), p ? (l.f |= mt, Wt(l, p)) : ((l.f & mt) !== 0 && (l.f ^= mt), Wt(l, g)), v.deactivate());
    };
    c.promise.then(h, (g) => h(null, g || "unknown"));
  }), Lr(() => {
    for (const f of s)
      f.reject(tr);
  }), new Promise((f) => {
    function c(v) {
      function u() {
        v === a ? f(l) : c(a);
      }
      v.then(u, u);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function ce(t) {
  const e = /* @__PURE__ */ or(t);
  return ca(e), e;
}
// @__NO_SIDE_EFFECTS__
function Yn(t) {
  const e = /* @__PURE__ */ or(t);
  return e.equals = Bn, e;
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
  if (!t.equals(e) && (t.wv = va(), (!ae?.is_fork || t.deps === null) && (ae !== null ? (ae.capture(t, e, !0), Wr?.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    ye(t, Ee);
    return;
  }
  ht || (Xe !== null ? (un() || ae?.is_fork) && Xe.set(t, e) : an(t));
}
function wi(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac !== null && Jt(() => {
        e.ac.abort(ur), e.ac = null;
      }), e.fn !== null && (e.teardown = Pa), sr(e, 0), dn(e));
}
function Gn(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && Gt(e);
}
let Or = null, jt = null, ae = null, Wr = null, Xe = null, Gr = null, ar = !1, Pr = !1, ir = null, gr = null;
var bn = 0;
let xi = 1;
class wt {
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
  #g = /* @__PURE__ */ new Set();
  is_fork = !1;
  #c = !1;
  constructor() {
    jt === null ? Or = jt = this : (jt.#e = this, this.#l = jt), jt = this;
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
        ye(a, ke), r(a);
      for (a of n.m)
        ye(a, ze), r(a);
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
      if (!((l.f & Fe) !== 0 || (l.f & (ke | ze)) === 0)) {
        for (var r = l, n = !1; r.parent !== null; ) {
          r = r.parent;
          var a = r.f;
          if ((a & (vt | Ye)) !== 0) {
            if ((a & Ee) === 0) {
              n = !0;
              break;
            }
            r.f ^= Ee;
          }
        }
        n || e.push(r);
      }
    return this.#a = [], e;
  }
  #p() {
    this.#t = !0;
    for (const s of this.#f)
      this.#u.delete(s), ye(s, ke), this.schedule(s);
    for (const s of this.#u)
      ye(s, ze), this.schedule(s);
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
      var a = wt.ensure();
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
    const l = this.#k();
    if (l) {
      this.#v(r), this.#v(e), l.#y(this);
      return;
    }
    this.#f.clear(), this.#u.clear();
    for (const s of this.#s) s(this);
    this.#s.clear(), Wr = this, yn(r), yn(e), Wr = null, this.#o?.resolve();
    var o = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      ae
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
    e.f ^= Ee;
    for (var a = e.first; a !== null; ) {
      var l = a.f, o = (l & (Ye | vt)) !== 0, s = o && (l & Ee) !== 0, f = s || (l & De) !== 0 || this.#d.has(a);
      if (!f && a.fn !== null) {
        o ? a.f ^= Ee : (l & zt) !== 0 ? r.push(a) : dr(a) && ((l & Ge) !== 0 && this.#u.add(a), Gt(a));
        var c = a.first;
        if (c !== null) {
          a = c;
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
    e.async_deriveds.clear(), this.transfer_effects(e.#f, e.#u);
    const r = (n) => {
      var a = n.reactions;
      if (a !== null && !((n.f & Oe) !== 0 && (n.f & (ke | ze)) === 0))
        for (const s of a) {
          var l = s.f;
          if ((l & Oe) !== 0)
            r(
              /** @type {Derived} */
              s
            );
          else {
            var o = (
              /** @type {Effect} */
              s
            );
            l & (Ut | Ge) && !this.async_deriveds.has(o) && (this.#u.delete(o), ye(o, ke), this.schedule(o));
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
      zn(e[r], this.#f, this.#u);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, r, n = !1) {
    e.v !== Se && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & mt) === 0 && (this.current.set(e, [r, n]), Xe?.set(e, r)), this.is_fork || (e.v = r);
  }
  activate() {
    ae = this;
  }
  deactivate() {
    ae = null, Xe = null;
  }
  flush() {
    try {
      Pr = !0, ae = this, this.#p();
    } finally {
      bn = 0, Gr = null, ir = null, gr = null, Pr = !1, ae = null, Xe = null, tt.clear();
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
    for (let u = Or; u !== null; u = u.#e) {
      var e = u.id < this.id, r = [];
      for (const [h, [g, p]] of this.current) {
        if (u.current.has(h)) {
          var n = (
            /** @type {[any, boolean]} */
            u.current.get(h)[0]
          );
          if (e && g !== n)
            u.current.set(h, [g, p]);
          else
            continue;
        }
        r.push(h);
      }
      if (e)
        for (const [h, g] of this.async_deriveds) {
          const p = u.async_deriveds.get(h);
          p && g.promise.then(p.resolve).catch(p.reject);
        }
      var a = [...u.current.keys()].filter(
        (h) => !/** @type {[any, boolean]} */
        u.current.get(h)[1]
      );
      if (!(!u.#t || a.length === 0)) {
        var l = a.filter((h) => !this.current.has(h));
        if (l.length === 0)
          e && u.discard();
        else if (r.length > 0) {
          if (e)
            for (const h of this.#g)
              u.unskip_effect(h, (g) => {
                (g.f & (Ge | Ut)) !== 0 ? u.schedule(g) : u.#v([g]);
              });
          u.activate();
          var o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
          for (var f of r)
            Xn(f, l, o, s);
          s = /* @__PURE__ */ new Map();
          var c = [...u.current].filter(([h, g]) => {
            const p = this.current.get(h);
            return p ? p[0] !== g[0] || p[1] !== g[1] : !0;
          }).map(([h]) => h);
          if (c.length > 0)
            for (const h of this.#h)
              (h.f & (Fe | De | yr)) === 0 && sn(h, c, s) && ((h.f & (Ut | Ge)) !== 0 ? (ye(h, ke), u.schedule(h)) : u.#f.add(h));
          if (u.#a.length > 0 && !u.#c) {
            u.apply();
            for (var v of u.#x())
              u.#m(v, [], []);
          }
          u.deactivate();
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
    this.#c || (this.#c = !0, st(() => {
      this.#c = !1, this.linked && this.flush();
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
      this.#u.add(n);
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
    return (this.#o ??= Mn()).promise;
  }
  static ensure() {
    if (ae === null) {
      const e = ae = new wt();
      !Pr && !ar && st(() => {
        e.#t || e.flush();
      });
    }
    return ae;
  }
  apply() {
    {
      Xe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    if (Gr = e, e.b?.is_pending && (e.f & (zt | Tr | Nn)) !== 0 && (e.f & Xt) === 0) {
      e.b.defer_effect(e);
      return;
    }
    this.#a.push(e);
  }
  #_() {
    if (this.linked) {
      var e = this.#l, r = this.#e;
      e === null ? Or = r : e.#e = r, r === null ? jt = e : r.#l = e, this.linked = !1;
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
let ot = null;
function yn(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var n = t[r++];
      if ((n.f & (Fe | De)) === 0 && dr(n) && (ot = /* @__PURE__ */ new Set(), Gt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && sa(n), ot?.size > 0)) {
        tt.clear();
        for (const a of ot) {
          if ((a.f & (Fe | De)) !== 0) continue;
          const l = [a];
          let o = a.parent;
          for (; o !== null; )
            ot.has(o) && (ot.delete(o), l.push(o)), o = o.parent;
          for (let s = l.length - 1; s >= 0; s--) {
            const f = l[s];
            (f.f & (Fe | De)) === 0 && Gt(f);
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
      (l & Oe) !== 0 ? Xn(
        /** @type {Derived} */
        a,
        e,
        r,
        n
      ) : (l & (Ut | Ge)) !== 0 && (l & ke) === 0 && sn(a, e, n) && (ye(a, ke), fn(
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
      if ((a.f & Oe) !== 0 && sn(
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
  if (!((t.f & Ye) !== 0 && (t.f & Ee) !== 0)) {
    (t.f & ke) !== 0 ? e.d.push(t) : (t.f & ze) !== 0 && e.m.push(t), ye(t, Ee);
    for (var r = t.first; r !== null; )
      Kn(r, e), r = r.next;
  }
}
function Jn(t) {
  ye(t, Ee);
  for (var e = t.first; e !== null; )
    Jn(e), e = e.next;
}
let kr = /* @__PURE__ */ new Set();
const tt = /* @__PURE__ */ new Map();
let Zn = !1;
function Ot(t, e) {
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
  const r = Ot(t);
  return ca(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ei(t, e = !1, r = !0) {
  const n = Ot(t);
  return e || (n.equals = Bn), n;
}
function x(t, e, r = !1) {
  se !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Je || (se.f & yr) !== 0) && Un() && (se.f & (Oe | Ge | Ut | yr)) !== 0 && (rt === null || !rt.has(t)) && di();
  let n = r ? me(e) : e;
  return Wt(t, n, gr);
}
var At = null, Xr = 0;
function Wt(t, e, r = null) {
  if (!t.equals(e)) {
    ht ? tt.set(t, e) : tt.has(t) || tt.set(t, t.v);
    var n = wt.ensure();
    if (n.capture(t, e), (t.f & Oe) !== 0) {
      const a = (
        /** @type {Derived} */
        t
      );
      (t.f & ke) !== 0 && on(a), Xe === null && an(a);
    }
    t.wv = va(), At = null, Xr = 0, Qn(t, ke, r), At = null, fe !== null && (fe.f & Ee) !== 0 && (fe.f & (Ye | vt)) === 0 && (Ue === null ? Ii([t]) : Ue.push(t)), !n.is_fork && kr.size > 0 && !Zn && Ci();
  }
  return e;
}
function Ci() {
  Zn = !1;
  for (const t of kr) {
    (t.f & Ee) !== 0 && ye(t, ze);
    let e;
    try {
      e = dr(t);
    } catch {
      e = !0;
    }
    e && Gt(t);
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
    if (Xr += a, Xr > 1e5 && At === null && (At = /* @__PURE__ */ new Set()), At !== null) {
      if (At.has(t)) return;
      At.add(t);
    }
    for (var l = 0; l < a; l++) {
      var o = n[l], s = o.f, f = (s & ke) === 0;
      if (f && ye(o, e), (s & yr) !== 0)
        kr.add(
          /** @type {Effect} */
          o
        );
      else if ((s & Oe) !== 0) {
        var c = (
          /** @type {Derived} */
          o
        );
        Xe?.delete(c), Qn(c, ze, r);
      } else if (f) {
        var v = (
          /** @type {Effect} */
          o
        );
        (s & Ge) !== 0 && ot !== null && ot.add(v), r !== null ? r.push(v) : fn(v);
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
  var r = /* @__PURE__ */ new Map(), n = Cr(t), a = /* @__PURE__ */ Y(0), l = Nt, o = (s) => {
    if (Nt === l)
      return s();
    var f = se, c = Nt;
    We(null), kn(l);
    var v = s();
    return We(f), kn(c), v;
  };
  return n && r.set("length", /* @__PURE__ */ Y(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(s, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ui();
        var v = r.get(f);
        return v === void 0 ? o(() => {
          var u = /* @__PURE__ */ Y(c.value);
          return r.set(f, u), u;
        }) : x(v, c.value, !0), !0;
      },
      deleteProperty(s, f) {
        var c = r.get(f);
        if (c === void 0) {
          if (f in s) {
            const v = o(() => /* @__PURE__ */ Y(Se));
            r.set(f, v), lr(a);
          }
        } else
          x(c, Se), lr(a);
        return !0;
      },
      get(s, f, c) {
        if (f === ft)
          return t;
        var v = r.get(f), u = f in s;
        if (v === void 0 && (!u || qt(s, f)?.writable) && (v = o(() => {
          var g = me(u ? s[f] : Se), p = /* @__PURE__ */ Y(g);
          return p;
        }), r.set(f, v)), v !== void 0) {
          var h = i(v);
          return h === Se ? void 0 : h;
        }
        return Reflect.get(s, f, c);
      },
      getOwnPropertyDescriptor(s, f) {
        this.has?.(s, f);
        var c = Reflect.getOwnPropertyDescriptor(s, f), v = r.get(f);
        if (v !== void 0) {
          var u = i(v);
          if (u === Se)
            return;
          if (c && "value" in c)
            c.value = u;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: u,
              writable: !0
            };
        }
        return c;
      },
      has(s, f) {
        if (f === ft)
          return !0;
        var c = r.get(f), v = c !== void 0 && c.v !== Se || Reflect.has(s, f);
        if (c !== void 0 || fe !== null && (!v || qt(s, f)?.writable)) {
          c === void 0 && (c = o(() => {
            var h = v ? me(s[f]) : Se, g = /* @__PURE__ */ Y(h);
            return g;
          }), r.set(f, c));
          var u = i(c);
          if (u === Se)
            return !1;
        }
        return v;
      },
      set(s, f, c, v) {
        var u = r.get(f), h = f in s;
        if (n && f === "length")
          for (var g = c; g < /** @type {Source<number>} */
          u.v; g += 1) {
            var p = r.get(g + "");
            p !== void 0 ? x(p, Se) : g in s && (p = o(() => /* @__PURE__ */ Y(Se)), r.set(g + "", p));
          }
        if (u === void 0)
          (!h || qt(s, f)?.writable) && (u = o(() => /* @__PURE__ */ Y(void 0)), x(u, me(c)), r.set(f, u));
        else {
          h = u.v !== Se;
          var C = o(() => me(c));
          x(u, C);
        }
        var m = Reflect.getOwnPropertyDescriptor(s, f);
        if (m?.set && m.set.call(v, c), !h) {
          if (n && typeof f == "string") {
            var E = (
              /** @type {Source<number>} */
              r.get("length")
            ), U = Number(f);
            Number.isInteger(U) && U >= E.v && x(E, U + 1);
          }
          lr(a);
        }
        return !0;
      },
      ownKeys(s) {
        i(a);
        var f = Reflect.ownKeys(s).filter((u) => {
          var h = r.get(u);
          return h === void 0 || h.v !== Se;
        });
        for (var [c, v] of r)
          v.v !== Se && !(c in s) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        ci();
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
function ut(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ke(t) {
  return (
    /** @type {TemplateNode | null} */
    ta.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function cr(t) {
  return (
    /** @type {TemplateNode | null} */
    ra.call(t)
  );
}
function k(t, e) {
  return /* @__PURE__ */ Ke(t);
}
function de(t, e = !1) {
  {
    var r = /* @__PURE__ */ Ke(t);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ cr(r) : r;
  }
}
function H(t, e = !1) {
  return /* @__PURE__ */ Ke(t);
}
function d(t, e = 1, r = !1) {
  let n = t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ cr(n);
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
    return se.f |= mt, t;
  if ((e.f & Xt) === 0 && (e.f & zt) === 0)
    throw t;
  $e(t, e);
}
function $e(t, e) {
  if (!(e !== null && (e.f & Fe) !== 0)) {
    for (; e !== null; ) {
      if ((e.f & Hr) !== 0 && (e.f & (Fe | br)) === 0) {
        if ((e.f & Xt) === 0)
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
  fe === null && (se === null && oi(), li()), ht && ii();
}
function Mi(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function _t(t, e) {
  var r = fe;
  r !== null && (r.f & De) !== 0 && (t |= De);
  var n = {
    ctx: Le,
    deps: null,
    nodes: null,
    f: t | ke | Ze,
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
  if ((t & zt) !== 0)
    ir !== null ? ir.push(n) : wt.ensure().schedule(n);
  else if (e !== null) {
    try {
      Gt(n);
    } catch (o) {
      throw Be(n), o;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Kt) === 0 && (a = a.first, (t & Ge) !== 0 && (t & Vt) !== 0 && a !== null && (a.f |= Vt));
  }
  if (a !== null && (a.parent = r, r !== null && Mi(a, r), se !== null && (se.f & Oe) !== 0 && (t & vt) === 0)) {
    var l = (
      /** @type {Derived} */
      se
    );
    (l.effects ??= []).push(a);
  }
  return n;
}
function un() {
  return se !== null && !Je;
}
function Lr(t) {
  const e = _t(Tr, null);
  return ye(e, Ee), e.teardown = t, e;
}
function Rt(t) {
  Ri();
  var e = (
    /** @type {Effect} */
    fe.f
  ), r = !se && (e & Ye) !== 0 && Le !== null && !Le.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Le
    );
    (n.e ??= []).push(t);
  } else
    return ia(t);
}
function ia(t) {
  return _t(zt | ja, t);
}
function Ni(t) {
  wt.ensure();
  const e = _t(vt | Kt, t);
  return (r = {}) => new Promise((n) => {
    r.outro ? Mt(e, () => {
      Be(e), n(void 0);
    }) : (Be(e), n(void 0));
  });
}
function cn(t) {
  return _t(zt, t);
}
function Oi(t) {
  return _t(Ut | Kt, t);
}
function Zt(t, e = 0) {
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
  var r = _t(Ge | e, t);
  return r;
}
function He(t) {
  return _t(Ye | Kt, t);
}
function la(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = ht, n = se;
    xn(!0), We(null);
    try {
      e.call(null);
    } catch (a) {
      $e(a, t.parent);
    } finally {
      xn(r), We(n);
    }
  }
}
function dn(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Jt(() => {
      a.abort(ur);
    });
    var n = r.next;
    (r.f & vt) !== 0 ? r.parent = null : Be(r, e), r = n;
  }
}
function Pi(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & Ye) === 0 && Be(e), e = r;
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
    var r = t === e ? null : /* @__PURE__ */ cr(t);
    t.remove(), t = r;
  }
}
function sa(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Mt(t, e, r = !0) {
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
        var o = (a.f & Vt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Ye) !== 0 && (t.f & Ge) !== 0;
        fa(a, e, o ? r : !1);
      }
      a = l;
    }
  }
}
function Sr(t) {
  t.f &= ~rn, ua(t, !0);
}
function ua(t, e) {
  if ((t.f & rn) === 0 && (t.f & De) !== 0) {
    t.f ^= De, (t.f & Ee) === 0 && (ye(t, ke), wt.ensure().schedule(t));
    for (var r = t.first; r !== null; ) {
      var n = r.next, a = (r.f & Vt) !== 0 || (r.f & Ye) !== 0;
      ua(r, a ? e : !1), r = n;
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
      var a = r === n ? null : /* @__PURE__ */ cr(r);
      e.append(r), r = a;
    }
}
let pr = !1, ht = !1;
function xn(t) {
  ht = t;
}
let se = null, Je = !1;
function We(t) {
  se = t;
}
let fe = null;
function nt(t) {
  fe = t;
}
let rt = null;
function ca(t) {
  se !== null && ((se.f & wr) !== 0 || (se.f & Oe) !== 0) && (rt ??= /* @__PURE__ */ new Set()).add(t);
}
let je = null, qe = 0, Ue = null;
function Ii(t) {
  Ue = t;
}
let da = 1, Lt = 0, Nt = Lt;
function kn(t) {
  Nt = t;
}
function va() {
  return ++da;
}
function dr(t) {
  var e = t.f;
  if ((e & ke) !== 0)
    return !0;
  if ((e & ze) !== 0) {
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
    (e & Ze) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Xe === null && ye(t, Ee);
  }
  return !1;
}
function ha(t, e, r = !0) {
  var n = t.reactions;
  if (n !== null && !(rt !== null && rt.has(t)))
    for (var a = 0; a < n.length; a++) {
      var l = n[a];
      (l.f & Oe) !== 0 ? ha(
        /** @type {Derived} */
        l,
        e,
        !1
      ) : e === l && (r ? ye(l, ke) : (l.f & Ee) !== 0 && ye(l, ze), fn(
        /** @type {Effect} */
        l
      ));
    }
}
function _a(t) {
  var e = je, r = qe, n = Ue, a = se, l = rt, o = Le, s = Je, f = Nt, c = t.f;
  je = /** @type {null | Value[]} */
  null, qe = 0, Ue = null, se = (c & (Ye | vt)) === 0 ? t : null, rt = null, Yt(t.ctx), Je = !1, Nt = ++Lt, t.ac !== null && (Jt(() => {
    t.ac.abort(ur);
  }), t.ac = null);
  try {
    t.f |= wr;
    var v = (
      /** @type {Function} */
      t.fn
    ), u = v();
    t.f |= Xt;
    var h = Sn(t);
    if (Un() && Ue !== null && !Je && h !== null && (t.f & (Oe | ze | ke)) === 0)
      for (var g = 0; g < /** @type {Source[]} */
      Ue.length; g++)
        ha(
          Ue[g],
          /** @type {Effect} */
          t
        );
    if (a !== null && a !== t) {
      if (Lt++, a.deps !== null)
        for (let p = 0; p < r; p += 1)
          a.deps[p].rv = Lt;
      if (e !== null)
        for (const p of e)
          p.rv = Lt;
      Ue !== null && (n === null ? n = Ue : n.push(.../** @type {Source[]} */
      Ue));
    }
    return (t.f & mt) !== 0 && (t.f ^= mt), u;
  } catch (p) {
    return Sn(t), Li(p);
  } finally {
    t.f ^= wr, je = e, qe = r, Ue = n, se = a, rt = l, Yt(o), Je = s, Nt = f;
  }
}
function Sn(t) {
  var e = t.deps, r = ae?.is_fork;
  if (je !== null) {
    var n;
    if (r || sr(t, qe), e !== null && qe > 0)
      for (e.length = qe + je.length, n = 0; n < je.length; n++)
        e[qe + n] = je[n];
    else
      t.deps = e = je;
    if (un() && (t.f & Ze) !== 0)
      for (n = qe; n < e.length; n++)
        (e[n].reactions ??= []).push(t);
  } else !r && e !== null && qe < e.length && (sr(t, qe), e.length = qe);
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
  if (r === null && (e.f & Oe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (je === null || !mr.call(je, e))) {
    var l = (
      /** @type {Derived} */
      e
    );
    (l.f & Ze) !== 0 && (l.f ^= Ze), l.v !== Se && an(l), l.ac !== null && Jt(() => {
      l.ac.abort(ur), l.ac = null, ye(l, ke);
    }), wi(l), sr(l, 0);
  }
}
function sr(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      Di(t, r[n]);
}
function Gt(t) {
  var e = t.f;
  if ((e & Fe) === 0) {
    ye(t, Ee);
    var r = fe, n = pr;
    fe = t, pr = (e & (Ye | vt)) === 0;
    try {
      (e & (Ge | Nn)) !== 0 ? Pi(t) : dn(t), la(t);
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
  var e = t.f, r = (e & Oe) !== 0;
  if (se !== null && !Je) {
    var n = fe !== null && (fe.f & Fe) !== 0;
    if (!n && (rt === null || !rt.has(t))) {
      var a = se.deps;
      if ((se.f & wr) !== 0)
        t.rv < Lt && (t.rv = Lt, je === null && a !== null && a[qe] === t ? qe++ : je === null ? je = [t] : je.push(t));
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
      return ((o.f & Ee) === 0 && o.reactions !== null || pa(o)) && (s = on(o)), tt.set(o, s), s;
    }
    var f = (o.f & Ze) === 0 && !Je && se !== null && (pr || (se.f & Ze) !== 0), c = (o.f & Xt) === 0;
    dr(o) && (f && (o.f |= Ze), Wn(o)), f && !c && (Gn(o), ga(o));
  }
  if (Xe?.has(t))
    return Xe.get(t);
  if ((t.f & mt) !== 0)
    throw t.v;
  return t.v;
}
function ga(t) {
  if (t.f |= Ze, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Oe) !== 0 && (e.f & Ze) === 0 && (Gn(
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
    if (tt.has(e) || (e.f & Oe) !== 0 && pa(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Pe(t) {
  var e = Je;
  try {
    return Je = !0, t();
  } finally {
    Je = e;
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
function Bi(t) {
  return ji.includes(t);
}
const rr = /* @__PURE__ */ Symbol("events"), ma = /* @__PURE__ */ new Set(), Zr = /* @__PURE__ */ new Set();
function qi(t, e, r, n = {}) {
  function a(l) {
    if (n.capture || Qr.call(e, l), !l.cancelBubble)
      return Jt(() => r?.call(this, l));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? (a.__removed = !1, st(() => {
    a.__removed || e.addEventListener(t, a, n);
  })) : e.addEventListener(t, a, n), a;
}
function ct(t, e, r, n, a) {
  var l = { capture: n, passive: a }, o = qi(t, e, r, l);
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
    var c = a.indexOf(e);
    if (c === -1)
      return;
    f <= c && (o = f);
  }
  if (l = /** @type {Element} */
  a[o] || t.target, l !== e) {
    Ln(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var v = se, u = fe;
    We(null), nt(null);
    try {
      for (var h, g = []; l !== null && l !== e; ) {
        try {
          var p = l[rr]?.[n];
          p != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === l) && p.call(l, t);
        } catch (C) {
          h ? g.push(C) : h = C;
        }
        if (t.cancelBubble) break;
        o++, l = o < a.length ? (
          /** @type {Element} */
          a[o]
        ) : null;
      }
      if (h) {
        for (let C of g)
          queueMicrotask(() => {
            throw C;
          });
        throw h;
      }
    } finally {
      t[rr] = e, delete t.currentTarget, We(v), nt(u);
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
function Pt(t, e) {
  var r = (
    /** @type {Effect} */
    fe
  );
  r.nodes === null && (r.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function S(t, e) {
  var r = (e & Ja) !== 0, n = (e & Za) !== 0, a, l = !t.startsWith("<!>");
  return () => {
    a === void 0 && (a = ba(l ? t : "<!>" + t), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ Ke(a)));
    var o = (
      /** @type {TemplateNode} */
      n || ea ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ke(o)
      ), f = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Pt(s, f);
    } else
      Pt(o, o);
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
        /* @__PURE__ */ Ke(o)
      );
      l = /** @type {Element} */
      /* @__PURE__ */ Ke(s);
    }
    var f = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    return Pt(f, f), f;
  };
}
// @__NO_SIDE_EFFECTS__
function Vi(t, e) {
  return /* @__PURE__ */ zi(t, e, "svg");
}
function Ve(t = "") {
  {
    var e = ut(t + "");
    return Pt(e, e), e;
  }
}
function dt() {
  var t = document.createDocumentFragment(), e = document.createComment(""), r = ut();
  return t.append(e, r), Pt(e, r), t;
}
function y(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Yi(t) {
  let e = 0, r = Ot(0), n;
  return () => {
    un() && (i(r), Zt(() => (e === 0 && (n = Pe(() => t(() => lr(r)))), e += 1, () => {
      st(() => {
        e -= 1, e === 0 && (n?.(), n = void 0, lr(r));
      });
    })));
  };
}
var Wi = Vt | Kt;
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
  #u = !1;
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
  #c = null;
  #b = Yi(() => (this.#c = Ot(this.#h), () => {
    this.#c = null;
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
    fe.b, this.transform_error = a ?? this.parent?.transform_error ?? ((l) => l), this.#n = Rr(() => {
      this.#y();
    }, Wi);
  }
  #x() {
    try {
      this.#i = He(() => this.#s(this.#t));
    } catch (e) {
      this.error(e);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #p(e) {
    const r = this.#e.failed, { reset: n, invoke_onerror: a } = this.#m(e);
    st(a), r && (this.#o = He(() => {
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
      r = !0, n && vi(), this.#o !== null && Mt(this.#o, () => {
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
    e && (this.is_pending = !0, this.#r = He(() => e(this.#t)), st(() => {
      var r = this.#a = document.createDocumentFragment(), n = ut(), a = !1;
      if (r.append(n), this.#i = this.#w(() => {
        try {
          return He(() => this.#s(n));
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
          ae
        );
        return;
      }
      this.#f === 0 && (this.#t.before(r), this.#a = null, Mt(
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
      if (this.is_pending = this.has_pending_snippet(), this.#f = 0, this.#h = 0, this.#i = He(() => {
        this.#s(this.#t);
      }), this.#f > 0) {
        var e = this.#a = document.createDocumentFragment();
        vn(this.#i, e);
        const r = (
          /** @type {(anchor: Node) => void} */
          this.#e.pending
        );
        this.#r = He(() => r(this.#t));
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
    var r = fe, n = se, a = Le;
    nt(this.#n), We(this.#n), Yt(this.#n.ctx);
    try {
      return wt.ensure(), e();
    } finally {
      nt(r), We(n), Yt(a);
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
    this.#f += e, this.#f === 0 && (this.#v(r), this.#r && Mt(this.#r, () => {
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
    this.#_(e, r), this.#h += e, !(!this.#c || this.#u) && (this.#u = !0, st(() => {
      this.#u = !1, this.#c && Wt(this.#c, this.#h);
    }));
  }
  get_effect_pending() {
    return this.#b(), i(
      /** @type {Source<number>} */
      this.#c
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!this.#e.onerror && !this.#e.failed)
      throw e;
    ae?.is_fork ? (this.#i && ae.skip_effect(this.#i), this.#r && ae.skip_effect(this.#r), this.#o && ae.skip_effect(this.#o), ae.oncommit(() => {
      this.#S(e);
    })) : this.#S(e);
  }
  /**
   * @param {unknown} error
   */
  #S(e) {
    this.#i && (Be(this.#i), this.#i = null), this.#r && (Be(this.#r), this.#r = null), this.#o && (Be(this.#o), this.#o = null);
    let r = this.#e.failed;
    const n = (a) => {
      const { reset: l, invoke_onerror: o } = this.#m(a);
      o(), r && (this.#o = this.#w(() => {
        try {
          return He(() => {
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
function N(t, e) {
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
  var f = void 0, c = Ni(() => {
    var v = r ?? e.appendChild(ut());
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
          Le
        );
        l && (p.c = l), a && (n.$$events = a), f = t(g, n) || nn(), Ne();
      },
      s
    );
    var u = /* @__PURE__ */ new Set(), h = (g) => {
      for (var p = 0; p < g.length; p++) {
        var C = g[p];
        if (!u.has(C)) {
          u.add(C);
          var m = Bi(C);
          for (const Q of [e, document]) {
            var E = vr.get(Q);
            E === void 0 && (E = /* @__PURE__ */ new Map(), vr.set(Q, E));
            var U = E.get(C);
            U === void 0 ? (Q.addEventListener(C, Qr, { passive: m }), E.set(C, 1)) : E.set(C, U + 1);
          }
        }
      }
    };
    return h(Ar(ma)), Zr.add(h), () => {
      for (var g of u)
        for (const m of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            vr.get(m)
          ), C = (
            /** @type {number} */
            p.get(g)
          );
          --C == 0 ? (m.removeEventListener(g, Qr), p.delete(g), p.size === 0 && vr.delete(m)) : p.set(g, C);
        }
      Zr.delete(h), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return Zi.set(f, c), f;
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
        Sr(n), this.#s.delete(r);
      else {
        var a = this.#e.get(r);
        a && (Sr(a.effect), this.#l.set(r, a.effect), this.#e.delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
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
            var c = document.createDocumentFragment();
            vn(o, c), c.append(ut()), this.#e.set(l, { effect: o, fragment: c });
          } else
            Be(o);
          this.#s.delete(l), this.#l.delete(l);
        };
        this.#n || !n ? (this.#s.add(l), Mt(o, s, !1)) : s();
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
    if (r && !this.#l.has(e) && !this.#e.has(e))
      if (a) {
        var l = document.createDocumentFragment(), o = ut();
        l.append(o), this.#e.set(e, {
          effect: He(() => r(o)),
          fragment: l
        });
      } else
        this.#l.set(
          e,
          He(() => r(this.anchor))
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
function W(t, e, r = !1) {
  var n = new ya(t), a = r ? Vt : 0;
  function l(o, s) {
    n.ensure(o, s);
  }
  Rr(() => {
    var o = !1;
    e((s, f = 0) => {
      o = !0, l(f, s);
    }), o || l(-1, null);
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
function el(t, e, r) {
  for (var n = [], a = e.length, l, o = e.length, s = 0; s < a; s++) {
    let u = e[s];
    Mt(
      u,
      () => {
        if (l) {
          if (l.pending.delete(u), l.done.add(u), l.pending.size === 0) {
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
      var c = (
        /** @type {Element} */
        r
      ), v = (
        /** @type {Element} */
        c.parentNode
      );
      Ti(v), v.append(c), t.items.clear();
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
var En;
function he(t, e, r, n, a, l = null) {
  var o = t, s = /* @__PURE__ */ new Map(), f = (e & In) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(ut());
  }
  var v = null, u = /* @__PURE__ */ Yn(() => {
    var Q = r();
    return (
      /** @type {V[]} */
      Cr(Q) ? Q : Q == null ? [] : Ar(Q)
    );
  }), h, g = /* @__PURE__ */ new Map(), p = !0;
  function C(Q) {
    (U.effect.f & Fe) === 0 && (U.pending.delete(Q), U.fallback = v, tl(U, h, o, e, n), v !== null && (h.length === 0 ? (v.f & et) === 0 ? Sr(v) : (v.f ^= et, nr(v, null, o)) : Mt(v, () => {
      v = null;
    })));
  }
  function m(Q) {
    U.pending.delete(Q);
  }
  var E = Rr(() => {
    h = /** @type {V[]} */
    i(u);
    for (var Q = h.length, D = /* @__PURE__ */ new Set(), w = (
      /** @type {Batch} */
      ae
    ), B = na(), z = 0; z < Q; z += 1) {
      var R = h[z], F = n(R, z), te = p ? null : s.get(F);
      te ? (te.v && Wt(te.v, R), te.i && Wt(te.i, z), B && w.unskip_effect(te.e)) : (te = rl(
        s,
        p ? o : En ??= ut(),
        R,
        F,
        z,
        a,
        e,
        r
      ), p || (te.e.f |= et), s.set(F, te)), D.add(F);
    }
    if (Q === 0 && l && !v && (p ? v = He(() => l(o)) : (v = He(() => l(En ??= ut())), v.f |= et)), Q > D.size && ai(), !p)
      if (g.set(w, D), B) {
        for (const [G, T] of s)
          D.has(G) || w.skip_effect(T.e);
        w.oncommit(C), w.ondiscard(m);
      } else
        C(w);
    i(u);
  }), U = { effect: E, items: s, pending: g, outrogroups: null, fallback: v };
  p = !1;
}
function er(t) {
  for (; t !== null && (t.f & Ye) === 0; )
    t = t.next;
  return t;
}
function tl(t, e, r, n, a) {
  var l = (n & Va) !== 0, o = e.length, s = t.items, f = er(t.effect.first), c, v = null, u, h = [], g = [], p, C, m, E;
  if (l)
    for (E = 0; E < o; E += 1)
      p = e[E], C = a(p, E), m = /** @type {EachItem} */
      s.get(C).e, (m.f & et) === 0 && (m.nodes?.a?.measure(), (u ??= /* @__PURE__ */ new Set()).add(m));
  for (E = 0; E < o; E += 1) {
    if (p = e[E], C = a(p, E), m = /** @type {EachItem} */
    s.get(C).e, t.outrogroups !== null)
      for (const te of t.outrogroups)
        te.pending.delete(m), te.done.delete(m);
    if ((m.f & De) !== 0 && (Sr(m), l && (m.nodes?.a?.unfix(), (u ??= /* @__PURE__ */ new Set()).delete(m))), (m.f & et) !== 0)
      if (m.f ^= et, m === f)
        nr(m, null, r);
      else {
        var U = v ? v.next : f;
        m === t.effect.last && (t.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), pt(t, v, m), pt(t, m, U), nr(m, U, r), v = m, h = [], g = [], f = er(v.next);
        continue;
      }
    if (m !== f) {
      if (c !== void 0 && c.has(m)) {
        if (h.length < g.length) {
          var Q = g[0], D;
          v = Q.prev;
          var w = h[0], B = h[h.length - 1];
          for (D = 0; D < h.length; D += 1)
            nr(h[D], Q, r);
          for (D = 0; D < g.length; D += 1)
            c.delete(g[D]);
          pt(t, w.prev, B.next), pt(t, v, w), pt(t, B, Q), f = Q, v = B, E -= 1, h = [], g = [];
        } else
          c.delete(m), nr(m, f, r), pt(t, m.prev, m.next), pt(t, m, v === null ? t.effect.first : v.next), pt(t, v, m), v = m;
        continue;
      }
      for (h = [], g = []; f !== null && f !== m; )
        (c ??= /* @__PURE__ */ new Set()).add(f), g.push(f), f = er(f.next);
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
  if (f !== null || c !== void 0) {
    var z = [];
    if (c !== void 0)
      for (m of c)
        (m.f & De) === 0 && z.push(m);
    for (; f !== null; )
      (f.f & De) === 0 && f !== t.fallback && z.push(f), f = er(f.next);
    var R = z.length;
    if (R > 0) {
      var F = (n & In) !== 0 && o === 0 ? r : null;
      if (l) {
        for (E = 0; E < R; E += 1)
          z[E].nodes?.a?.measure();
        for (E = 0; E < R; E += 1)
          z[E].nodes?.a?.fix();
      }
      el(t, z, F);
    }
  }
  l && st(() => {
    if (u !== void 0)
      for (m of u)
        m.nodes?.a?.apply();
  });
}
function rl(t, e, r, n, a, l, o, s) {
  var f = (o & Ha) !== 0 ? (o & Ya) === 0 ? /* @__PURE__ */ Ei(r, !1, !1) : Ot(r) : null, c = (o & za) !== 0 ? Ot(a) : null;
  return {
    v: f,
    i: c,
    e: He(() => (l(e, f ?? r, c ?? a, s), () => {
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
        /* @__PURE__ */ cr(n)
      );
      if (l.before(n), n === a)
        return;
      n = o;
    }
}
function pt(t, e, r) {
  e === null ? t.effect.first = r : e.next = r, r === null ? t.effect.last = e : r.prev = e;
}
function bt(t, e, r = !1, n = !1, a = !1, l = !1) {
  var o = t, s = "";
  if (r)
    var f = (
      /** @type {Element} */
      t
    );
  L(() => {
    var c = (
      /** @type {Effect} */
      fe
    );
    if (s !== (s = e() ?? "")) {
      if (r) {
        c.nodes = null, f.innerHTML = /** @type {string} */
        s, s !== "" && Pt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Ke(f),
          /** @type {TemplateNode} */
          f.lastChild
        );
        return;
      }
      if (c.nodes !== null && (oa(
        c.nodes.start,
        /** @type {TemplateNode} */
        c.nodes.end
      ), c.nodes = null), s !== "") {
        var v = n ? Qa : a ? $a : void 0, u = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          aa(n ? "svg" : a ? "math" : "template", v)
        );
        u.innerHTML = /** @type {any} */
        s;
        var h = n || a ? u : (
          /** @type {HTMLTemplateElement} */
          u.content
        );
        if (Pt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Ke(h),
          /** @type {TemplateNode} */
          h.lastChild
        ), n || a)
          for (; /* @__PURE__ */ Ke(h); )
            o.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Ke(h)
            );
        else
          o.before(h);
      }
    }
  });
}
function yt(t, e, r) {
  cn(() => {
    var n = Pe(() => e(t, r?.()) || {});
    if (r && n?.update) {
      var a = !1, l = (
        /** @type {any} */
        {}
      );
      Zt(() => {
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
      var c = 0, v = -1;
      const C = t.length;
      for (var u = 0; u < C; u++) {
        var h = t[u];
        if (s ? h === "/" && t[u - 1] === "*" && (s = !1) : l ? l === h && (l = !1) : h === "/" && t[u + 1] === "*" ? s = !0 : h === '"' || h === "'" ? l = h : h === "(" ? o++ : h === ")" && o--, !s && l === !1 && o === 0) {
          if (h === ":" && v === -1)
            v = u;
          else if (h === ";" || u === C - 1) {
            if (v !== -1) {
              var g = Fr(t.substring(c, v).trim());
              if (!f.includes(g)) {
                h !== ";" && u++;
                var p = t.substring(c, u).trim();
                r += " " + p + ";";
              }
            }
            c = u + 1, v = -1;
          }
        }
      }
    }
    return n && (r += An(n)), a && (r += An(a, !0)), r = r.trim(), r === "" ? null : r;
  }
  return t == null ? null : String(t);
}
function Re(t, e, r, n, a, l) {
  var o = (
    /** @type {any} */
    t[zr]
  );
  if (o !== r || o === void 0) {
    var s = il(r, n, l);
    s == null ? t.removeAttribute("class") : t.className = s, t[zr] = r;
  } else if (l && a !== l)
    for (var f in l) {
      var c = !!l[f];
      (a == null || c !== !!a[f]) && t.classList.toggle(f, c);
    }
  return l;
}
function jr(t, e = {}, r, n) {
  for (var a in r) {
    var l = r[a];
    e[a] !== l && (r[a] == null ? t.style.removeProperty(a) : t.style.setProperty(a, l, n));
  }
}
function Bt(t, e, r, n) {
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
      var o = Ht(l);
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
      n.selected = e.includes(Ht(n));
    return;
  }
  for (n of t.options) {
    var a = Ht(n);
    if ($n(a, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function xa(t) {
  var e = new MutationObserver((r) => {
    r.every(ul) || ("__defaultValue" in t && sl(t), "__value" in t && hn(t, t.__value));
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
      s = [].map.call(t.querySelectorAll(o), Ht);
    else {
      var f = t.querySelector(o) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      s = f && Ht(f);
    }
    r(s), t.__value = s, ae !== null && n.add(ae);
  }), cn(() => {
    var l = e();
    if (t === document.activeElement) {
      var o = (
        /** @type {Batch} */
        ae
      );
      if (n.has(o))
        return;
    }
    if (hn(t, l, a), a && l === void 0) {
      var s = t.querySelector(":checked");
      s !== null && (l = Ht(s), r(l));
    }
    t.__value = l, a = !1;
  });
}
function Ht(t) {
  return "__value" in t ? t.__value : t.value;
}
function ul(t) {
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
const cl = /* @__PURE__ */ Symbol("is custom element"), dl = /* @__PURE__ */ Symbol("is html"), vl = Ua ? "progress" : "PROGRESS";
function ka(t, e) {
  var r = Sa(t);
  r.value === (r.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== vl) || (t.value = e ?? "");
}
function ee(t, e, r, n) {
  var a = Sa(t);
  a[e] !== (a[e] = r) && (e === "loading" && (t[qa] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && hl(t).has(e) ? t[e] = r : t.setAttribute(e, r));
}
function Sa(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[Pn] ??= {
      [cl]: t.nodeName.includes("-"),
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
    n = Rn(a);
    for (var o in n)
      n[o].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && r.add(o);
    a = tn(a);
  }
  return r;
}
function Er(t, e, r = e) {
  var n = /* @__PURE__ */ new WeakSet();
  ln(t, "input", async (a) => {
    var l = a ? t.defaultValue : t.value;
    if (l = Br(t) ? qr(l) : l, r(l), ae !== null && n.add(ae), await fr(), l !== (l = e())) {
      var o = t.selectionStart, s = t.selectionEnd, f = t.value.length;
      if (t.value = l ?? "", s !== null) {
        var c = t.value.length;
        o === s && s === f && c > f ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = o, t.selectionEnd = Math.min(s, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Pe(e) == null && t.value && (r(Br(t) ? qr(t.value) : t.value), ae !== null && n.add(ae)), Zt(() => {
    var a = e();
    if (t === document.activeElement) {
      var l = (
        /** @type {Batch} */
        ae
      );
      if (n.has(l))
        return;
    }
    Br(t) && a === qr(t.value) || t.type === "date" && !a && !t.value || a !== t.value && (t.value = a ?? "");
  });
}
function _l(t, e, r = e) {
  ln(t, "change", (n) => {
    var a = n ? t.defaultChecked : t.checked;
    r(a);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Pe(e) == null && r(t.checked), Zt(() => {
    var n = e();
    t.checked = !!n;
  });
}
function Br(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function qr(t) {
  return t === "" ? null : +t;
}
function Ur(t, e) {
  return t === e || t?.[ft] === e;
}
function It(t = nn(), e, r, n) {
  var a = (
    /** @type {ComponentContext} */
    Le.r
  ), l = (
    /** @type {Effect} */
    fe
  );
  return cn(() => {
    var o, s;
    return Zt(() => {
      o = s, s = [], Pe(() => {
        Ur(r(...s), t) || (e(t, ...s), o && Ur(r(...o), t) && e(null, ...o));
      });
    }), () => {
      let f = l;
      for (; f !== a && f.parent !== null && f.parent.f & br; )
        f = f.parent;
      const c = () => {
        s && Ur(r(...s), t) && e(null, ...s);
      }, v = f.teardown;
      f.teardown = () => {
        c(), v?.();
      };
    };
  }), t;
}
function gl(t, e, r, n, a) {
  var l = () => {
    n(r[t]);
  };
  r.addEventListener(e, l), a ? Zt(() => {
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
function Dt(t, e, r, n) {
  var a = !0, l = (r & Xa) !== 0, o = (r & Ka) !== 0, s = (
    /** @type {V} */
    n
  ), f = !0, c = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), v = () => o && a ? (c ??= /* @__PURE__ */ or(
    /** @type {() => V} */
    n
  ), i(c)) : (f && (f = !1, s = o ? Pe(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s);
  let u;
  if (l) {
    var h = ft in t || Ba in t;
    u = qt(t, e)?.set ?? (h && e in t ? (D) => t[e] = D : void 0);
  }
  var g, p = !1;
  l ? [g, p] = pl(() => (
    /** @type {V} */
    t[e]
  )) : g = /** @type {V} */
  t[e], g === void 0 && n !== void 0 && (g = v(), u && (fi(), u(g)));
  var C;
  if (C = () => {
    var D = (
      /** @type {V} */
      t[e]
    );
    return D === void 0 ? v() : (f = !0, D);
  }, (r & Ga) === 0)
    return C;
  if (u) {
    var m = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(D, w) {
        return arguments.length > 0 ? ((!w || m || p) && u(w ? C() : D), D) : C();
      })
    );
  }
  var E = !1, U = ((r & Wa) !== 0 ? or : Yn)(() => (E = !1, C()));
  l && i(U);
  var Q = (
    /** @type {Effect} */
    fe
  );
  return (
    /** @type {() => V} */
    (function(D, w) {
      if (arguments.length > 0) {
        const B = w ? i(U) : l ? me(D) : D;
        return x(U, B), E = !0, s !== void 0 && (s = B), D;
      }
      return ht && E || (Q.f & Fe) !== 0 ? U.v : i(U);
    })
  );
}
function xt(t) {
  Le === null && qn(), Rt(() => {
    const e = Pe(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function _n(t) {
  Le === null && qn(), xt(() => () => Pe(t));
}
const ml = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ml);
async function Ce(t, e, r = {}) {
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
var bl = /* @__PURE__ */ S('<button type="button" class="column-resize"></button>'), yl = /* @__PURE__ */ S('<th><button type="button" class="column-label"> <span class="column-sort" aria-hidden="true"> </span></button><!></th>'), wl = /* @__PURE__ */ S('<i role="img"></i>'), xl = /* @__PURE__ */ S('<button class="open-challenge"> </button>'), kl = /* @__PURE__ */ S("<td><!></td>"), Sl = /* @__PURE__ */ S("<tr></tr>"), El = /* @__PURE__ */ S('<div class="message-list"><table><thead><tr></tr></thead><tbody id="challenge-rows"></tbody></table></div>');
function Cl(t, e) {
  Me(e, !0);
  let r = Dt(e, "hidden", 3, !1), n = Dt(e, "solvesEnabled", 3, !1);
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
  let f = /* @__PURE__ */ Y(me([...a])), c = /* @__PURE__ */ Y(null), v, u = !1;
  const h = document.createElement("canvas").getContext("2d");
  let g = /* @__PURE__ */ ce(() => i(f).filter((_) => _ !== "solves" || n())), p = /* @__PURE__ */ Y(me({
    key: Pe(() => e.defaultOrder) === "name" ? "subject" : "id",
    direction: 1
  })), C = /* @__PURE__ */ Y(window.innerWidth <= 760), m = /* @__PURE__ */ ce(() => i(g).filter((_) => !i(C) || _ !== "category")), E = /* @__PURE__ */ ce(() => {
    const _ = i(p).key === "solves" && !n() ? "id" : i(p).key, b = (O) => ({
      status: Number(O.solved_by_me),
      subject: O.name,
      category: O.category,
      points: O.value,
      solves: O.solves ?? -1,
      id: O.id
    })[_];
    return [...e.challenges].sort((O, K) => (["id", "points", "status", "solves"].includes(_) ? b(O) - b(K) : s.compare(b(O), b(K))) * i(p).direction || O.id - K.id);
  });
  function U() {
    if (!v || r()) return;
    const _ = v.parentElement.clientWidth;
    if (!_) return;
    const b = {};
    for (const I of i(g)) {
      const P = v.querySelector(`th[data-column="${I}"] .column-label`), re = P ? getComputedStyle(P) : null;
      h.font = re?.font || "bold 12px Tahoma";
      const oe = (X) => X ? [
        "paddingLeft",
        "paddingRight",
        "borderLeftWidth",
        "borderRightWidth"
      ].reduce((V, A) => V + (parseFloat(X[A]) || 0), 0) : 0, ue = P?.querySelector(".column-sort"), j = ue ? getComputedStyle(ue) : null, M = ue ? ue.getBoundingClientRect().width + (parseFloat(j.marginLeft) || 0) + (parseFloat(j.marginRight) || 0) : 15;
      o[I] = Math.ceil(h.measureText(l[I]).width + M + oe(re) + oe(P ? getComputedStyle(P.closest("th")) : null)) + 2;
      const J = v.querySelector(`td[data-column="${I}"]`), $ = J ? getComputedStyle(J) : null;
      h.font = $ ? `bold ${$.fontSize} ${$.fontFamily}` : "bold 12px Tahoma";
      const ie = e.challenges.map((X) => ({
        subject: X.name,
        category: X.category,
        points: X.value,
        solves: X.solves ?? "-"
      })[I] ?? "");
      b[I] = Math.max(o[I], ...ie.map((X) => Math.ceil(h.measureText(String(X)).width) + 24));
    }
    const O = { ...b, ...u ? i(c) : {} };
    let K = _ - i(m).reduce((I, P) => I + O[P], 0);
    if (K >= 0) O.subject += K;
    else {
      for (const I of ["subject", "category", "status", "points", "solves"].filter((P) => i(m).includes(P))) {
        const P = Math.min(-K, Math.max(0, O[I] - o[I]));
        O[I] -= P, K += P;
      }
      if (K < 0) {
        const I = i(m).reduce((P, re) => P + O[re], 0);
        for (const P of i(m)) O[P] *= _ / I;
      }
    }
    x(c, O, !0);
  }
  function Q(_) {
    const b = new ResizeObserver(U);
    return b.observe(_.parentElement), {
      destroy() {
        b.disconnect();
      }
    };
  }
  Rt(() => {
    i(m), r(), e.challenges, Pe(() => fr().then(U));
  });
  function D(_, b, O = i(c)) {
    u = !0;
    const K = i(m)[i(m).indexOf(_) + 1];
    if (!K) return;
    const I = Math.max(Math.min(0, o[_] - O[_]), Math.min(b, Math.max(0, O[K] - o[K])));
    x(
      c,
      {
        ...i(c),
        [_]: O[_] + I,
        [K]: O[K] - I
      },
      !0
    );
  }
  function w() {
    x(
      c,
      Object.fromEntries([...v.tHead.rows[0].cells].map((_) => [
        _.dataset.column,
        _.getBoundingClientRect().width || o[_.dataset.column]
      ])),
      !0
    );
  }
  async function B(_, b) {
    if (!b || b === _) return;
    i(c) || w();
    const O = new Map([...v.querySelectorAll("th,td")].map((P) => [P, P.getBoundingClientRect().left])), K = i(f).indexOf(b), I = i(f).filter((P) => P !== _);
    I.splice(K, 0, _), x(f, I, !0), await fr(), matchMedia("(prefers-reduced-motion: reduce)").matches || O.forEach((P, re) => {
      const oe = P - re.getBoundingClientRect().left;
      oe && re.animate(
        [
          { transform: `translateX(${oe}px)` },
          { transform: "translateX(0)" }
        ],
        { duration: 180, easing: "ease-out" }
      );
    });
  }
  function z(_, { key: b, resize: O = !1 }) {
    const K = _.closest("th");
    let I, P, re = !1;
    function oe() {
      P?.remove(), P = null, I = null, K.classList.remove("column-dragging"), v.querySelectorAll(".column-drop-before,.column-drop-after").forEach((X) => X.classList.remove("column-drop-before", "column-drop-after"));
    }
    function ue(X) {
      X.button !== 0 || !X.isPrimary || (re = !1, w(), I = {
        x: X.clientX,
        y: X.clientY,
        offset: X.clientX - K.getBoundingClientRect().left,
        width: i(c)[b],
        widths: { ...i(c) }
      }, _.setPointerCapture(X.pointerId));
    }
    function j(X) {
      if (I) {
        if (O) {
          D(b, X.clientX - I.x, I.widths);
          return;
        }
        if (!P && Math.hypot(X.clientX - I.x, X.clientY - I.y) > 5 && (re = !0, P = document.createElement("div"), P.className = "column-drag-ghost", P.textContent = l[b], P.setAttribute("aria-hidden", "true"), P.style.width = `${I.width}px`, document.body.append(P), K.classList.add("column-dragging")), P) {
          P.style.left = `${X.clientX - I.offset}px`, P.style.top = `${X.clientY + 12}px`, v.querySelectorAll(".column-drop-before,.column-drop-after").forEach((A) => A.classList.remove("column-drop-before", "column-drop-after"));
          const V = document.elementFromPoint(X.clientX, X.clientY)?.closest("th");
          V?.parentElement === K.parentElement && V !== K && V.classList.add(i(f).indexOf(b) < i(f).indexOf(V.dataset.column) ? "column-drop-after" : "column-drop-before");
        }
      }
    }
    function M(X) {
      if (!I) return;
      const V = document.elementFromPoint(X.clientX, X.clientY)?.closest("th"), A = !!P;
      oe(), _.hasPointerCapture(X.pointerId) && _.releasePointerCapture(X.pointerId), !O && A && V?.parentElement === K.parentElement && B(b, V.dataset.column), _.focus();
    }
    function J(X) {
      if (!O) {
        if (re && X.detail !== 0) {
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
    function $(X) {
      if (!["ArrowLeft", "ArrowRight"].includes(X.key) || !O && !X.altKey) return;
      X.preventDefault();
      const V = X.key === "ArrowRight" ? 1 : -1;
      if (O)
        w(), D(b, V * 10);
      else {
        const A = i(g).filter((Z) => !i(C) || Z !== "category");
        B(b, A[A.indexOf(b) + V]);
      }
    }
    const ie = {
      pointerdown: ue,
      pointermove: j,
      pointerup: M,
      pointercancel: oe,
      lostpointercapture: oe,
      click: J,
      keydown: $
    };
    return Object.entries(ie).forEach(([X, V]) => _.addEventListener(X, V)), {
      destroy() {
        oe(), Object.entries(ie).forEach(([X, V]) => _.removeEventListener(X, V));
      }
    };
  }
  var R = El();
  ct("resize", Kr, () => x(C, window.innerWidth <= 760));
  var F = k(R);
  Bt(F, "", {}, { width: "100%" });
  var te = k(F), G = k(te);
  he(G, 20, () => i(g), (_) => _, (_, b) => {
    var O = yl();
    let K;
    var I = k(O), P = k(I), re = d(P), oe = H(re, !0);
    yt(I, (J, $) => z?.(J, $), () => ({ key: b }));
    var ue = d(I);
    {
      var j = (J) => {
        var $ = bl();
        yt($, (ie, X) => z?.(ie, X), () => ({ key: b, resize: !0 })), L(() => ee($, "aria-label", `Resize ${l[b]} column`)), y(J, $);
      }, M = /* @__PURE__ */ ce(() => i(m).includes(b) && b !== i(m).at(-1));
      W(ue, (J) => {
        i(M) && J(j);
      });
    }
    L(() => {
      ee(O, "data-column", b), ee(O, "aria-sort", i(p).key === b ? i(p).direction === 1 ? "ascending" : "descending" : "none"), K = Bt(O, "", K, {
        width: i(c) ? `${i(c)[b] ?? o[b]}px` : void 0
      }), ee(I, "aria-label", `${l[b]} column. Click to sort. Drag or use Alt and arrow keys to move.`), N(P, l[b]), N(oe, i(p).key === b ? i(p).direction === 1 ? "▲" : "▼" : "");
    }), y(_, O);
  });
  var T = d(te);
  he(T, 21, () => i(E), (_) => _.id, (_, b) => {
    var O = Sl();
    he(O, 20, () => i(g), (K) => K, (K, I) => {
      var P = kl(), re = k(P);
      {
        var oe = ($) => {
          var ie = wl();
          L(() => {
            Re(ie, 1, `fas fa-envelope${i(b).solved_by_me ? "-open" : ""}`), ee(ie, "aria-label", i(b).solved_by_me ? "Solved" : "Unsolved");
          }), y($, ie);
        }, ue = ($) => {
          var ie = xl(), X = H(ie, !0);
          L(() => {
            ee(ie, "data-id", i(b).id), N(X, i(b).name);
          }), ge("click", ie, () => e.onopen(i(b).id)), y($, ie);
        }, j = ($) => {
          var ie = Ve();
          L(() => N(ie, i(b).category)), y($, ie);
        }, M = ($) => {
          var ie = Ve();
          L(() => N(ie, i(b).solves ?? "-")), y($, ie);
        }, J = ($) => {
          var ie = Ve();
          L(() => N(ie, i(b).value)), y($, ie);
        };
        W(re, ($) => {
          I === "status" ? $(oe) : I === "subject" ? $(ue, 1) : I === "category" ? $(j, 2) : I === "solves" ? $(M, 3) : $(J, -1);
        });
      }
      L(() => ee(P, "data-column", I)), y(K, P);
    }), L(() => Re(O, 1, al(i(b).solved_by_me ? "read" : "unread"))), y(_, O);
  }), It(F, (_) => v = _, () => v), yt(F, (_) => Q?.(_)), L(() => ee(R, "hidden", r())), y(t, R), Ne();
}
at(["click"]);
var Al = /* @__PURE__ */ S('<details><summary> </summary> <div class="hint-content"><!></div></details>');
function Tl(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ Y(!1), n = /* @__PURE__ */ Y(!1), a = /* @__PURE__ */ Y(null), l = /* @__PURE__ */ Y("");
  async function o(m) {
    if (x(r, m.currentTarget.open, !0), !(!i(r) || i(n) || i(a))) {
      x(n, !0), x(l, "");
      try {
        let E = await Ce(`/hints/${e.hint.id}`);
        if (!E.content) {
          if (E.cost > 0 && !confirm(`Unlock this hint for ${E.cost} points?`)) {
            x(r, !1);
            return;
          }
          await Ce("/unlocks", { target: e.hint.id, type: "hints" }), E = await Ce(`/hints/${e.hint.id}`);
        }
        x(a, E, !0);
      } catch (E) {
        x(l, E.message, !0);
      } finally {
        x(n, !1);
      }
    }
  }
  var s = Al(), f = k(s), c = H(f), v = d(f, 2), u = k(v);
  {
    var h = (m) => {
      var E = Ve("Loading hint...");
      y(m, E);
    }, g = (m) => {
      var E = Ve();
      L(() => N(E, i(l))), y(m, E);
    }, p = (m) => {
      var E = dt(), U = de(E);
      bt(U, () => i(a).html), y(m, E);
    }, C = (m) => {
      var E = Ve();
      L(() => N(E, i(a).content)), y(m, E);
    };
    W(u, (m) => {
      i(n) ? m(h) : i(l) ? m(g, 1) : i(a)?.html ? m(p, 2) : i(a) && m(C, 3);
    });
  }
  L(() => {
    ee(s, "data-hint", e.hint.id), N(c, `${(e.hint.title || "View hint") ?? ""}${e.hint.cost ? ` (${e.hint.cost} points)` : ""}`);
  }), ct("toggle", s, o), gl("open", "toggle", s, (m) => x(r, m), () => i(r)), y(t, s), Ne();
}
var Ll = /* @__PURE__ */ S('<button type="button" class="solve-count"> </button>'), Rl = /* @__PURE__ */ S('<span class="challenge-solves">Total solves: <!></span>'), Ml = /* @__PURE__ */ S('<p role="status">Loading solves...</p>'), Nl = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button type="button">Retry</button></div>'), Ol = /* @__PURE__ */ S("<tr><td><a> </a></td><td><time> </time></td></tr>"), Pl = /* @__PURE__ */ S('<div class="table-responsive"><table class="table table-striped"><thead><tr><th>User</th><th>Solve time</th></tr></thead><tbody></tbody></table></div>'), Il = /* @__PURE__ */ S("<p>No solves to display.</p>"), Dl = /* @__PURE__ */ S('<!> <dialog class="express-dialog solves-dialog" aria-labelledby="solves-title"><h2 id="solves-title"> </h2> <!> <div class="dialog-actions"><button type="button" class="btn btn-primary">Close</button></div></dialog>', 1);
function Fl(t, e) {
  Me(e, !0);
  let r, n = /* @__PURE__ */ Y(me([])), a = /* @__PURE__ */ Y(!1), l = /* @__PURE__ */ Y(""), o = 0;
  _n(() => o++);
  async function s() {
    const R = ++o;
    x(a, !0), x(l, ""), x(n, [], !0);
    try {
      const F = await Ce(`/challenges/${e.challengeId}/solves`);
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
  function c(R) {
    let F = !1;
    function te(_) {
      const b = R.getBoundingClientRect();
      return _.target === R && (_.clientX < b.left || _.clientX > b.right || _.clientY < b.top || _.clientY > b.bottom);
    }
    function G(_) {
      F = te(_);
    }
    function T(_) {
      F && te(_) && R.close(), F = !1;
    }
    return R.addEventListener("pointerdown", G), R.addEventListener("click", T), {
      destroy() {
        R.removeEventListener("pointerdown", G), R.removeEventListener("click", T);
      }
    };
  }
  var v = Dl(), u = de(v);
  {
    var h = (R) => {
      var F = Rl(), te = d(k(F));
      {
        var G = (_) => {
          var b = Ll(), O = H(b, !0);
          L(() => {
            ee(b, "aria-label", `View ${e.count} solves`), N(O, e.count);
          }), ge("click", b, f), y(_, b);
        }, T = (_) => {
          var b = Ve("0");
          y(_, b);
        };
        W(te, (_) => {
          e.count > 0 ? _(G) : _(T, -1);
        });
      }
      y(R, F);
    }, g = /* @__PURE__ */ ce(() => Number.isInteger(e.count) && e.count >= 0);
    W(u, (R) => {
      i(g) && R(h);
    });
  }
  var p = d(u, 2), C = k(p), m = H(C), E = d(C, 2);
  {
    var U = (R) => {
      var F = Ml();
      y(R, F);
    }, Q = (R) => {
      var F = Nl(), te = k(F), G = d(te);
      L(() => N(te, `${i(l) ?? ""} `)), ge("click", G, s), y(R, F);
    }, D = (R) => {
      var F = Pl(), te = k(F), G = d(k(te));
      he(G, 21, () => i(n), we, (T, _) => {
        var b = Ol(), O = k(b), K = k(O), I = H(K, !0), P = d(O), re = k(P), oe = H(re, !0);
        L(
          (ue) => {
            ee(K, "href", i(_).account_url), N(I, i(_).name), ee(re, "datetime", i(_).date), N(oe, ue);
          },
          [
            () => new Date(i(_).date).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "long" })
          ]
        ), y(T, b);
      }), y(R, F);
    }, w = (R) => {
      var F = Il();
      y(R, F);
    };
    W(E, (R) => {
      i(a) ? R(U) : i(l) ? R(Q, 1) : i(n).length ? R(D, 2) : R(w, -1);
    });
  }
  var B = d(E, 2), z = H(B);
  It(p, (R) => r = R, () => r), yt(p, (R) => c?.(R)), L(() => N(m, `Solves - ${e.challengeName ?? ""}`)), ct("close", p, () => o++), ge("click", z, () => r.close()), y(t, v), Ne();
}
at(["click"]);
var jl = /* @__PURE__ */ S('<span class="challenge-tag"> </span>'), Bl = /* @__PURE__ */ S('<div class="challenge-tags"><span>Tags:</span><!></div>'), ql = /* @__PURE__ */ S("<div> </div>"), Ul = /* @__PURE__ */ S("<p>Connection: <code> </code></p>"), Hl = /* @__PURE__ */ S('<a download=""><i class="fas fa-paperclip" aria-hidden="true"></i> </a>'), zl = /* @__PURE__ */ S('<i aria-hidden="true"></i><strong> </strong>', 1), Vl = /* @__PURE__ */ S('<p>Attempts: <span id="attempts"> </span> </p>'), Yl = /* @__PURE__ */ S('<header class="message-header"><h2> </h2> <div class="challenge-metadata"><span> </span><span> </span><!></div> <!> <!></header> <div class="message-body"><!></div> <!> <div class="attachments"></div> <div id="hints"></div> <form class="reply"><label for="flag">Reply with flag</label> <input id="flag" name="submission" autocomplete="off" required=""/> <button type="submit">Send</button> <div id="submission-status" role="status" aria-atomic="true"><!></div> <!></form>', 1);
function Wl(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ Y(""), n = /* @__PURE__ */ Y(!1), a = /* @__PURE__ */ Y(""), l = /* @__PURE__ */ Y(""), o = /* @__PURE__ */ Y(me(Pe(() => e.challenge.attempts))), s = /* @__PURE__ */ Y(me(Pe(() => e.challenge.solves))), f = !0, c = /* @__PURE__ */ ce(() => i(a) || (e.challenge.solved_by_me ? "Correct flag received." : "")), v = /* @__PURE__ */ ce(() => i(l) || (i(n) ? "pending" : e.challenge.solved_by_me ? "success" : ""));
  _n(() => {
    f = !1;
  });
  const u = /* @__PURE__ */ ce(() => new DOMParser().parseFromString(e.challenge.view || "", "text/html").querySelector(".challenge-desc")?.innerHTML);
  function h(V) {
    const A = V.split("/").pop().split("?")[0];
    try {
      return decodeURIComponent(A);
    } catch {
      return A;
    }
  }
  async function g(V) {
    if (V.preventDefault(), !i(n)) {
      x(n, !0), x(a, "Sending..."), x(l, "");
      try {
        const A = await Ce("/challenges/attempt", { challenge_id: e.challenge.id, submission: i(r) });
        if (!f) return;
        x(a, A.message, !0);
        const Z = e.challenge.type === "delayed" && A.status === "incorrect" && /^Your submission has been taken(?:\.|$)/.test(A.message || "");
        if (x(l, ["correct", "already_solved"].includes(A.status) ? "success" : Z ? "info" : "error", !0), A.status === "authentication_required" && (location.href = `${window.init.urlRoot}/login?next=${encodeURIComponent(location.pathname + location.hash)}`), A.status === "correct" && x(r, ""), e.challenge.max_attempts || ["correct", "already_solved"].includes(A.status)) {
          const le = await Ce(`/challenges/${e.challenge.id}`);
          if (!f) return;
          x(o, le.attempts, !0), x(s, le.solves, !0);
        }
        await e.onattempt(A);
      } catch (A) {
        f && (x(a, A.message, !0), x(l, "error"));
      } finally {
        x(n, !1);
      }
    }
  }
  var p = Yl(), C = de(p), m = k(C), E = H(m, !0), U = d(m, 2), Q = k(U), D = H(Q), w = d(Q), B = H(w), z = d(w);
  Fl(z, {
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
  var R = d(U, 2);
  {
    var F = (V) => {
      var A = Bl(), Z = d(k(A));
      he(Z, 17, () => e.challenge.tags, we, (le, ve) => {
        var pe = jl(), be = H(pe, !0);
        L(() => N(be, typeof i(ve) == "string" ? i(ve) : i(ve).value)), y(le, pe);
      }), y(V, A);
    };
    W(R, (V) => {
      e.challenge.tags?.length && V(F);
    });
  }
  var te = d(R, 2);
  {
    var G = (V) => {
      var A = ql(), Z = H(A);
      L(() => N(Z, `From: ${e.challenge.attribution ?? ""}`)), y(V, A);
    };
    W(te, (V) => {
      e.challenge.attribution && V(G);
    });
  }
  var T = d(C, 2), _ = k(T);
  {
    var b = (V) => {
      var A = dt(), Z = de(A);
      bt(Z, () => i(u)), y(V, A);
    }, O = (V) => {
      var A = Ve();
      L(() => N(A, e.challenge.description)), y(V, A);
    };
    W(_, (V) => {
      i(u) ? V(b) : V(O, -1);
    });
  }
  var K = d(T, 2);
  {
    var I = (V) => {
      var A = Ul(), Z = d(k(A)), le = H(Z, !0);
      L(() => N(le, e.challenge.connection_info)), y(V, A);
    };
    W(K, (V) => {
      e.challenge.connection_info && V(I);
    });
  }
  var P = d(K, 2);
  he(P, 21, () => e.challenge.files || [], we, (V, A) => {
    var Z = Hl(), le = d(k(Z));
    L(
      (ve) => {
        ee(Z, "href", i(A)), N(le, ` ${ve ?? ""}`);
      },
      [() => h(i(A))]
    ), y(V, Z);
  });
  var re = d(P, 2);
  he(re, 21, () => e.challenge.hints || [], (V) => V.id, (V, A) => {
    Tl(V, {
      get hint() {
        return i(A);
      }
    });
  });
  var oe = d(re, 2), ue = d(k(oe), 2), j = d(ue, 2), M = d(j, 2), J = k(M);
  {
    var $ = (V) => {
      var A = zl(), Z = de(A), le = d(Z), ve = H(le, !0);
      L(() => {
        Re(Z, 1, `fas ${i(v) === "success" ? "fa-check-circle" : i(v) === "error" ? "fa-times-circle" : i(v) === "info" ? "fa-info-circle" : "fa-paper-plane"}`), N(ve, i(c));
      }), y(V, A);
    };
    W(J, (V) => {
      i(c) && V($);
    });
  }
  var ie = d(M, 2);
  {
    var X = (V) => {
      var A = Vl(), Z = d(k(A)), le = H(Z, !0), ve = d(Z);
      L(() => {
        N(le, i(o)), N(ve, ` / ${e.challenge.max_attempts ?? ""}`);
      }), y(V, A);
    };
    W(ie, (V) => {
      e.challenge.max_attempts && V(X);
    });
  }
  L(() => {
    N(E, e.challenge.name), N(D, `Category: ${e.challenge.category ?? ""}`), N(B, `Points: ${e.challenge.value ?? ""}`), j.disabled = i(n), Re(M, 1, `submission-feedback ${i(v)}`), ee(M, "hidden", !i(c));
  }), ct("submit", oe, g), Er(ue, () => i(r), (V) => x(r, V)), y(t, p), Ne();
}
var Gl = /* @__PURE__ */ S('<hr class="folder-divider"/>'), Xl = /* @__PURE__ */ S('<!> <button type="button"><i aria-hidden="true"></i> </button>', 1), Kl = /* @__PURE__ */ S('<div class="express-toolbar"><button id="all-challenges" type="button"><i class="fas fa-inbox" aria-hidden="true"></i> All Challenges</button> <button id="help-button" type="button"><i class="fas fa-question-circle" aria-hidden="true"></i> Help</button> <label for="search">Search</label><div class="express-search"><i class="fas fa-search" aria-hidden="true"></i><input id="search" type="search" placeholder="Find a challenge"/></div></div> <div class="express-address">Address <span id="address"> </span></div> <div class="express-workspace"><aside class="express-sidebar" aria-label="Challenge categories"><h2>Folders</h2> <div id="folders"></div> <p id="progress" aria-live="polite"> </p></aside> <section class="express-main" aria-label="Challenges"><h1 id="folder-heading"> </h1> <p id="board-status" role="status"> </p> <button id="retry" type="button">Try again</button> <!> <section id="reader" aria-label="Challenge message"><button id="back" type="button">Back to challenges</button> <div id="message"><!></div></section></section></div> <dialog id="help-dialog"><h2> </h2> <p>Open a challenge to read its message. Reply with the flag to solve it.</p> <p>Unsolved challenges appear as unread mail. Solved challenges appear as read mail.</p> <p>Drag column headers to reorder them, or their edges to resize. With a header focused, use Alt + Left/Right to reorder.</p> <form method="dialog"><button>Close</button></form></dialog>', 1);
function Jl(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ Y(me([])), n = /* @__PURE__ */ Y("All Challenges"), a = /* @__PURE__ */ Y("all"), l = /* @__PURE__ */ Y(""), o = /* @__PURE__ */ Y(null), s = /* @__PURE__ */ Y(!1), f = /* @__PURE__ */ Y(null), c = /* @__PURE__ */ Y(""), v = /* @__PURE__ */ Y(!0), u = /* @__PURE__ */ Y(""), h = /* @__PURE__ */ Y(""), g = 0, p = 0, C, m, E = /* @__PURE__ */ ce(() => i(r).filter((q) => !q.solved_by_me)), U = /* @__PURE__ */ ce(() => [...new Set(i(r).map((q) => q.category))]), Q = /* @__PURE__ */ ce(() => i(a) === "category" ? i(r).filter((q) => q.category === i(n)) : i(r)), D = /* @__PURE__ */ ce(() => [
    {
      name: "All Challenges",
      type: "all",
      count: i(E).length
    },
    {
      name: "Unsolved Challenges",
      type: "unread",
      count: i(E).length
    },
    ...i(U).map((q) => ({
      name: q,
      type: "category",
      count: i(E).filter((ne) => ne.category === q).length
    }))
  ]), w = /* @__PURE__ */ ce(() => i(r).filter((q) => (i(a) === "all" || (i(a) === "unread" ? !q.solved_by_me : q.category === i(n))) && `${q.name} ${q.category}`.toLowerCase().includes(i(l).toLowerCase().trim()))), B = /* @__PURE__ */ ce(() => i(u) ? i(u) : i(v) ? "Loading challenges..." : i(a) === "unread" && i(E).length === 0 ? "No unsolved challenges, you legend!" : i(w).length ? i(h) ? i(h) : "" : i(l).trim() ? `No ${i(a) === "unread" ? "unsolved challenges" : "challenges"} matching '${i(l)}' found` : "No challenges found.");
  Rt(() => {
    const q = `${e.config.appName} - ${i(n)}`;
    document.title = q, document.getElementById("window-title").textContent = q;
  });
  async function z() {
    const q = ++p;
    x(v, !0), x(u, "");
    try {
      const ne = await Ce("/challenges");
      q === p && x(r, ne.sort((_e, Ae) => _e.id - Ae.id), !0);
    } catch (ne) {
      q === p && x(u, ne.message, !0);
    } finally {
      q === p && x(v, !1);
    }
  }
  async function R(q = !0) {
    g++, x(s, !1), x(f, null), x(c, ""), history.replaceState(null, "", location.pathname + location.search), await fr(), q && document.querySelector(`.open-challenge[data-id="${i(o)}"]`)?.focus();
  }
  function F(q) {
    x(n, q.name, !0), x(a, q.type, !0), x(h, ""), R(!1);
  }
  async function te(q) {
    const ne = ++g;
    x(o, q, !0), x(s, !0), x(f, null), x(c, ""), x(h, "");
    try {
      const _e = await Ce(`/challenges/${q}`);
      if (ne !== g) return;
      x(f, _e, !0), history.replaceState(null, "", `#challenge-${q}`), await fr(), m?.focus();
    } catch (_e) {
      ne === g && x(c, _e.message, !0);
    }
  }
  async function G(q) {
    const ne = g;
    await z(), ne === g && i(a) === "unread" && ["correct", "already_solved"].includes(q.status) && !i(u) && (await R(!1), x(h, "Challenge solved. Removed from Unsolved Challenges."), document.querySelector('#folders [data-view="unread"]')?.focus());
  }
  xt(() => {
    const q = location.hash.match(/-(\d+)$/);
    z().then(() => {
      q && g === 0 && te(Number(q[1]));
    });
  }), _n(() => {
    g++, p++;
  });
  var T = Kl(), _ = de(T), b = k(_), O = d(b, 2), K = d(O, 3), I = d(k(K)), P = d(_, 2), re = d(k(P)), oe = H(re), ue = d(P, 2), j = k(ue), M = d(k(j), 2);
  he(M, 23, () => i(D), (q) => `${q.type}:${q.name}`, (q, ne, _e) => {
    var Ae = Xl(), Te = de(Ae);
    {
      var Qe = (Et) => {
        var Ct = Gl();
        y(Et, Ct);
      };
      W(Te, (Et) => {
        i(_e) === 2 && Et(Qe);
      });
    }
    var xe = d(Te, 2);
    let Ie;
    var lt = k(xe), gt = d(lt);
    L(() => {
      ee(xe, "data-view", i(ne).type), ee(xe, "data-folder", i(ne).name), Ie = Re(xe, 1, "", null, Ie, {
        active: i(a) === i(ne).type && i(n) === i(ne).name
      }), Re(lt, 1, `fas fa-${i(ne).type === "unread" ? "envelope" : "folder"}`), N(gt, `${i(ne).name ?? ""}${i(ne).type !== "all" && i(ne).count > 0 ? ` (${i(ne).count})` : ""}`);
    }), ge("click", xe, () => F(i(ne))), y(q, Ae);
  });
  var J = d(M, 2), $ = H(J), ie = d(j, 2), X = k(ie), V = H(X, !0), A = d(X, 2), Z = H(A, !0), le = d(A, 2), ve = d(le, 2);
  {
    let q = /* @__PURE__ */ ce(() => i(r).some((Ae) => Number.isInteger(Ae.solves))), ne = /* @__PURE__ */ ce(() => e.config.themeSettings?.challenge_order), _e = /* @__PURE__ */ ce(() => i(s) || !!i(l).trim() && i(w).length === 0 || i(a) === "unread" && i(E).length === 0);
    Cl(ve, {
      get challenges() {
        return i(w);
      },
      get solvesEnabled() {
        return i(q);
      },
      get defaultOrder() {
        return i(ne);
      },
      onopen: te,
      get hidden() {
        return i(_e);
      }
    });
  }
  var pe = d(ve, 2), be = k(pe);
  It(be, (q) => m = q, () => m);
  var it = d(be, 2), kt = k(it);
  {
    var Qt = (q) => {
      var ne = dt(), _e = de(ne);
      {
        var Ae = (xe) => {
          var Ie = Ve();
          L(() => N(Ie, i(c))), y(xe, Ie);
        }, Te = (xe) => {
          var Ie = dt(), lt = de(Ie);
          $i(lt, () => i(f).id, (gt) => {
            Wl(gt, {
              get challenge() {
                return i(f);
              },
              onattempt: G
            });
          }), y(xe, Ie);
        }, Qe = (xe) => {
          var Ie = Ve("Loading message...");
          y(xe, Ie);
        };
        W(_e, (xe) => {
          i(c) ? xe(Ae) : i(f) ? xe(Te, 1) : xe(Qe, -1);
        });
      }
      y(q, ne);
    };
    W(kt, (q) => {
      i(s) && q(Qt);
    });
  }
  var St = d(ue, 2), $t = k(St), Ft = H($t, !0);
  It(St, (q) => C = q, () => C), L(
    (q) => {
      N(oe, `Folders / ${i(n) ?? ""}`), N($, `${q ?? ""} of ${i(Q).length ?? ""} challenges solved`), N(V, i(n)), N(Z, i(B)), ee(le, "hidden", !i(u)), ee(pe, "hidden", !i(s)), N(Ft, e.config.appName);
    },
    [
      () => i(Q).filter((q) => q.solved_by_me).length
    ]
  ), ge("click", b, () => {
    x(l, ""), F(i(D)[0]);
  }), ge("click", O, () => C.showModal()), ge("input", I, () => {
    x(h, ""), R(!1);
  }), Er(I, () => i(l), (q) => x(l, q)), ge("click", le, z), ge("click", be, () => R()), y(t, T), Ne();
}
at(["click", "input"]);
function Ea(t, e = !0) {
  if (!e) return;
  const r = t.querySelector(".logon-drag-handle, .window-drag-handle");
  if (!r) return;
  let n;
  const a = [];
  function l(u, h, g) {
    u?.addEventListener(h, g), a.push(() => u?.removeEventListener(h, g));
  }
  function o(u, h) {
    const g = window.visualViewport, p = g?.offsetLeft || 0, C = g?.offsetTop || 0, m = g?.width || document.documentElement.clientWidth, E = Math.max(0, (g?.height || innerHeight) - (t.classList.contains("express-window") ? 34 : 0));
    t.style.maxWidth = `${m}px`, t.style.maxHeight = `${E}px`;
    const U = t.getBoundingClientRect();
    t.style.left = `${Math.max(p, Math.min(u, p + m - U.width))}px`, t.style.top = `${Math.max(C, Math.min(h, C + E - U.height))}px`;
  }
  const s = t.getBoundingClientRect();
  t.classList.add("is-draggable"), o(s.left, s.top), l(r, "pointerdown", (u) => {
    if (u.button !== 0 || !u.isPrimary) return;
    const h = t.getBoundingClientRect();
    n = { id: u.pointerId, x: u.clientX - h.left, y: u.clientY - h.top }, r.setPointerCapture(u.pointerId), r.classList.add("is-dragging"), u.preventDefault();
  }), l(r, "pointermove", (u) => {
    n?.id === u.pointerId && o(u.clientX - n.x, u.clientY - n.y);
  });
  const f = () => {
    n = null, r.classList.remove("is-dragging");
  };
  for (const u of ["pointerup", "pointercancel", "lostpointercapture"]) l(r, u, f);
  l(r, "keydown", (u) => {
    const h = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[u.key];
    if (!h) return;
    u.preventDefault();
    const g = t.getBoundingClientRect(), p = u.shiftKey ? 1 : 10;
    o(g.left + h[0] * p, g.top + h[1] * p);
  });
  const c = () => {
    const u = t.getBoundingClientRect();
    o(u.left, u.top);
  };
  l(window, "resize", c), l(window.visualViewport, "resize", c), l(window.visualViewport, "scroll", c);
  const v = new ResizeObserver(c);
  return v.observe(t), { destroy() {
    v.disconnect(), a.forEach((u) => u());
  } };
}
var Zl = /* @__PURE__ */ S('<div role="alert"><span><!></span><button type="button" class="btn-close" aria-label="Close"></button></div>');
function Ca(t, e) {
  Me(e, !0);
  let r = Dt(e, "errors", 19, () => []), n = Dt(e, "infos", 19, () => []), a = /* @__PURE__ */ Y(me([]));
  var l = dt(), o = de(l);
  he(
    o,
    17,
    () => [
      ...n().map((s) => ({ text: s, type: "info" })),
      ...r().map((s) => ({ text: s, type: "danger" }))
    ],
    we,
    (s, f, c) => {
      var v = dt(), u = de(v);
      {
        var h = (p) => {
          var C = Zl(), m = k(C), E = k(m);
          {
            var U = (w) => {
              var B = dt(), z = de(B);
              bt(z, () => i(f).text.html), y(w, B);
            }, Q = (w) => {
              var B = Ve();
              L(() => N(B, i(f).text.text ?? i(f).text)), y(w, B);
            };
            W(E, (w) => {
              i(f).text.html ? w(U) : w(Q, -1);
            });
          }
          var D = d(m);
          L(() => Re(C, 1, `alert alert-${i(f).type ?? ""} alert-dismissible`)), ge("click", D, () => x(a, [...i(a), c], !0)), y(p, C);
        }, g = /* @__PURE__ */ ce(() => !i(a).includes(c));
        W(u, (p) => {
          i(g) && p(h);
        });
      }
      y(s, v);
    }
  ), y(t, l), Ne();
}
at(["click"]);
var Ql = /* @__PURE__ */ S('<span class="text-danger" aria-hidden="true">*</span>'), $l = /* @__PURE__ */ S("<option> </option>"), eo = /* @__PURE__ */ S('<select class="form-select"></select>'), to = /* @__PURE__ */ S('<input type="checkbox" class="form-check-input"/>'), ro = /* @__PURE__ */ S('<textarea class="form-control"></textarea>'), no = /* @__PURE__ */ S('<input class="form-control"/>'), ao = /* @__PURE__ */ S('<small class="form-text text-muted"> </small>'), io = /* @__PURE__ */ S('<div><label class="form-label"> <!></label> <!> <!></div>');
function gn(t, e) {
  Me(e, !0);
  let r = Dt(e, "compact", 3, !1), n = /* @__PURE__ */ Y(me(Pe(() => e.field.type === "SelectField" ? String(e.field.value ?? "") : e.field.value ?? ""))), a = /* @__PURE__ */ Y(me(Pe(() => e.field.value === !0 || e.field.value === "True" || e.field.value === "true")));
  const l = {
    PasswordField: "password",
    EmailField: "email",
    URLField: "url",
    DateField: "date",
    IntegerField: "number",
    HiddenField: "hidden"
  }, o = /* @__PURE__ */ ce(() => e.field.name === "name" ? "username" : e.field.name === "email" ? "email" : e.field.name === "confirm" ? "current-password" : e.field.type === "PasswordField" ? r() ? "current-password" : "new-password" : void 0);
  var s = io();
  let f;
  var c = k(s), v = k(c), u = d(v);
  {
    var h = (D) => {
      var w = Ql();
      y(D, w);
    };
    W(u, (D) => {
      e.field.required && D(h);
    });
  }
  var g = d(c, 2);
  {
    var p = (D) => {
      var w = eo();
      he(w, 21, () => e.field.choices, we, (B, z) => {
        var R = /* @__PURE__ */ ce(() => Da(i(z), 2));
        let F = () => i(R)[0], te = () => i(R)[1];
        var G = $l(), T = H(G, !0), _ = {};
        L(
          (b) => {
            N(T, te()), _ !== (_ = b) && (G.value = (G.__value = _) ?? "");
          },
          [() => String(F())]
        ), y(B, G);
      }), xa(w), L(() => {
        ee(w, "id", e.field.id), ee(w, "name", e.field.name), w.required = e.field.required;
      }), fl(w, () => i(n), (B) => x(n, B)), y(D, w);
    }, C = (D) => {
      var w = to();
      w.value = w.__value = "y", L(() => {
        ee(w, "id", e.field.id), ee(w, "name", e.field.name), w.required = e.field.required;
      }), _l(w, () => i(a), (B) => x(a, B)), y(D, w);
    }, m = (D) => {
      var w = ro();
      L(() => {
        ee(w, "id", e.field.id), ee(w, "name", e.field.name), w.required = e.field.required;
      }), Er(w, () => i(n), (B) => x(n, B)), y(D, w);
    }, E = (D) => {
      var w = no();
      L(() => {
        ee(w, "id", e.field.id), ee(w, "name", e.field.name), ee(w, "type", l[e.field.type] || "text"), ee(w, "autocomplete", i(o)), w.required = e.field.required;
      }), Er(w, () => i(n), (B) => x(n, B)), y(D, w);
    };
    W(g, (D) => {
      e.field.type === "SelectField" ? D(p) : e.field.type === "BooleanField" ? D(C, 1) : e.field.type === "TextAreaField" ? D(m, 2) : D(E, -1);
    });
  }
  var U = d(g, 2);
  {
    var Q = (D) => {
      var w = ao(), B = H(w, !0);
      L(() => N(B, e.field.description)), y(D, w);
    };
    W(U, (D) => {
      e.field.description && !r() && D(Q);
    });
  }
  L(() => {
    f = Re(s, 1, "", null, f, { "logon-field": r(), "mb-3": !r() }), ee(c, "for", e.field.id), N(v, e.field.label);
  }), y(t, s), Ne();
}
var lo = /* @__PURE__ */ S("<a>Forgot your password?</a>"), oo = /* @__PURE__ */ S('<!> <form method="post" accept-charset="utf-8"><!> <input type="hidden" name="nonce"/> <div><!> <button id="_submit" name="_submit" type="submit" class="btn btn-primary xp-default"> </button></div></form>', 1), so = /* @__PURE__ */ S('<img class="logon-icon" alt=""/>'), fo = /* @__PURE__ */ Vi('<svg class="logon-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="9" width="50" height="36" rx="2" fill="#eef4ff" stroke="#153e80" stroke-width="3"></rect><path d="M12 14h40v25H12z" fill="#245bb4"></path><path d="M26 46v7h12v-7M18 55h28" fill="none" stroke="#153e80" stroke-width="3"></path><rect x="24" y="23" width="16" height="12" rx="1" fill="#ffe4a0"></rect><path d="M28 23v-3a4 4 0 0 1 8 0v3" fill="none" stroke="#ffe4a0" stroke-width="3"></path></svg>'), uo = /* @__PURE__ */ S('<a class="btn logon-oauth">Log on with Major League Cyber</a>'), co = /* @__PURE__ */ S('<footer class="logon-footer">Need an account? <a>Register</a></footer>'), vo = /* @__PURE__ */ S('<div class="login-stage"><section class="xp-logon" aria-labelledby="logon-title"><header class="express-title logon-drag-handle" tabindex="0" role="button" aria-label="Move login window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><i class="fas fa-key" aria-hidden="true"></i> Log On</header> <div class="logon-banner"><!> <div><h1 id="logon-title"> </h1><p> </p></div></div> <div class="logon-content"><p>Enter your user name and password to continue.</p><!> <!></div> <!></section></div>'), ho = /* @__PURE__ */ S("<p> </p>"), _o = /* @__PURE__ */ S("<p> </p> <p>Please click the link in that email to confirm your account.</p><p>If the email does not arrive, check your spam folder or contact an administrator to manually verify your account.</p>", 1), go = /* @__PURE__ */ S('<a class="btn btn-secondary mb-3">Log on with Major League Cyber</a>'), po = /* @__PURE__ */ S('<a class="btn btn-secondary mt-3">Change Email Address</a>'), mo = /* @__PURE__ */ S('<p class="text-muted mt-3">By registering, you agree to the <a target="_blank" rel="noopener">privacy policy</a> and <a target="_blank" rel="noopener">terms of service</a>.</p>'), bo = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1> </h1></div></div> <div class="container"><div class="auth-page"><!> <!> <!> <!> <!> <!></div></div>', 1);
function yo(t, e) {
  Me(e, !0);
  const r = (v) => {
    var u = oo(), h = de(u);
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
    var C = k(g);
    he(C, 17, () => e.page.fields || [], we, (z, R) => {
      {
        let F = /* @__PURE__ */ ce(() => e.page.kind === "login");
        gn(z, {
          get field() {
            return i(R);
          },
          get compact() {
            return i(F);
          }
        });
      }
    });
    var m = d(C, 2), E = d(m, 2);
    let U;
    var Q = k(E);
    {
      var D = (z) => {
        var R = lo();
        L(() => ee(R, "href", `${i(a)}/reset_password`)), y(z, R);
      };
      W(Q, (z) => {
        e.page.kind === "login" && z(D);
      });
    }
    var w = d(Q, 2), B = H(w, !0);
    L(() => {
      p = Re(g, 1, "", null, p, { "logon-form": e.page.kind === "login" }), ka(m, e.config.csrfNonce), U = Re(E, 1, "", null, U, {
        "logon-actions": e.page.kind === "login",
        "auth-actions": e.page.kind !== "login"
      }), w.disabled = i(n), N(B, i(n) ? "Please wait..." : e.page.kind === "login" ? "Log On" : e.page.kind === "confirm" ? "Send Confirmation Email" : "Submit");
    }), ct("submit", g, () => x(n, !0)), y(v, u);
  };
  let n = /* @__PURE__ */ Y(!1);
  const a = /* @__PURE__ */ ce(() => e.config.urlRoot), l = {
    login: "Log On",
    register: "Register",
    reset: "Reset Password",
    confirm: "Confirm"
  };
  xt(() => {
    e.page.kind === "login" && document.getElementById("name")?.focus();
    const v = () => x(n, !1);
    return window.addEventListener("pageshow", v), () => window.removeEventListener("pageshow", v);
  });
  var o = dt(), s = de(o);
  {
    var f = (v) => {
      var u = vo(), h = k(u), g = d(k(h), 2), p = k(g);
      {
        var C = (T) => {
          var _ = so();
          L(() => ee(_, "src", e.site.logo)), y(T, _);
        }, m = (T) => {
          var _ = fo();
          y(T, _);
        };
        W(p, (T) => {
          e.site.logo ? T(C) : T(m, -1);
        });
      }
      var E = d(p, 2), U = k(E), Q = H(U, !0), D = d(U), w = H(D), B = d(g, 2), z = d(k(B));
      r(z);
      var R = d(z, 2);
      {
        var F = (T) => {
          var _ = uo();
          L(() => ee(_, "href", e.site.oauth)), y(T, _);
        };
        W(R, (T) => {
          e.site.oauth && T(F);
        });
      }
      var te = d(B, 2);
      {
        var G = (T) => {
          var _ = co(), b = d(k(_));
          L(() => ee(b, "href", `${i(a)}/register`)), y(T, _);
        };
        W(te, (T) => {
          e.site.registration && T(G);
        });
      }
      yt(h, (T) => Ea?.(T)), L(() => {
        N(Q, e.site.appName), N(w, `Log on to ${e.site.eventName ?? ""}`);
      }), y(v, u);
    }, c = (v) => {
      var u = bo(), h = de(u), g = k(h), p = k(g), C = H(p, !0), m = d(h, 2), E = k(m), U = k(E);
      {
        var Q = (_) => {
          var b = ho(), O = H(b, !0);
          L(() => N(O, e.page.mode === "set" ? "You can now reset the password for your account and log in. Please enter a new password below." : "Please provide the email address associated with your account below.")), y(_, b);
        };
        W(U, (_) => {
          e.page.kind === "reset" && _(Q);
        });
      }
      var D = d(U, 2);
      {
        var w = (_) => {
          var b = _o(), O = de(b), K = H(O, !0);
          L(() => N(K, e.page.initial ? "To send a confirmation email to your email address, please click the button below." : "We've sent a confirmation email to your email address.")), y(_, b);
        };
        W(D, (_) => {
          e.page.kind === "confirm" && _(w);
        });
      }
      var B = d(D, 2);
      {
        var z = (_) => {
          var b = go();
          L(() => ee(b, "href", e.site.oauth)), y(_, b);
        };
        W(B, (_) => {
          e.page.kind === "register" && e.site.oauth && _(z);
        });
      }
      var R = d(B, 2);
      r(R);
      var F = d(R, 2);
      {
        var te = (_) => {
          var b = po();
          L(() => ee(b, "href", `${i(a)}/settings`)), y(_, b);
        };
        W(F, (_) => {
          e.page.kind === "confirm" && _(te);
        });
      }
      var G = d(F, 2);
      {
        var T = (_) => {
          var b = mo(), O = d(k(b)), K = d(O, 2);
          L(() => {
            ee(O, "href", e.page.privacy), ee(K, "href", e.page.terms);
          }), y(_, b);
        };
        W(G, (_) => {
          e.page.kind === "register" && e.page.showTerms && _(T);
        });
      }
      L(() => N(C, l[e.page.kind])), y(v, u);
    };
    W(s, (v) => {
      e.page.kind === "login" ? v(f) : v(c, -1);
    });
  }
  y(t, o), Ne();
}
var wo = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> </div>'), xo = /* @__PURE__ */ S('<div class="alert alert-success" role="status"> </div>'), ko = /* @__PURE__ */ S('<tr><td> </td><td> </td><td> </td><td><button class="btn"><i class="fas fa-times" aria-hidden="true"></i></button></td></tr>'), So = /* @__PURE__ */ S('<div class="table-responsive"><table class="table"><thead><tr><th>Created</th><th>Expiration</th><th>Description</th><th>Delete</th></tr></thead><tbody></tbody></table></div>'), Eo = /* @__PURE__ */ S("<p>No active tokens.</p>"), Co = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Settings</h1></div></div> <div class="container settings-layout"><div class="nav flex-column nav-pills" aria-label="Settings sections"><button id="settings-profile-tab">Profile</button> <button id="settings-tokens-tab">Access Tokens</button></div> <div><!> <!> <section id="profile"><form method="post"><!> <button type="submit" id="_submit" class="btn btn-primary"> </button></form></section> <section id="tokens"><form><div class="mb-3"><label for="expiration" class="form-label">Expiration</label><input id="expiration" name="expiration" type="date" class="form-control"/></div> <div class="mb-3"><label for="description" class="form-label">Usage Description</label><textarea id="description" name="description" class="form-control" rows="3"></textarea></div> <button type="submit" class="btn btn-primary">Generate</button></form> <h2 class="h4 mt-4">Active Tokens</h2> <!></section></div></div> <dialog class="express-dialog"><h2>API Key Generated</h2><p>Please copy your API key. It will not be shown again!</p> <input class="form-control" aria-label="API key" readonly=""/> <div class="dialog-actions"><button class="btn">Copy</button><button class="btn btn-primary">Got it!</button></div></dialog>', 1);
function Ao(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ Y("profile"), n = /* @__PURE__ */ Y(!1), a = /* @__PURE__ */ Y(""), l = /* @__PURE__ */ Y(""), o = /* @__PURE__ */ Y(me(Pe(() => e.page.tokens))), s = /* @__PURE__ */ Y(""), f, c;
  function v(A) {
    const Z = Object.fromEntries(new FormData(A));
    for (const le of A.querySelectorAll('input[type="checkbox"]')) Z[le.name] = le.checked;
    return Z;
  }
  function u(A) {
    c = v(A);
  }
  async function h(A) {
    if (A.preventDefault(), i(n)) return;
    x(n, !0), x(a, ""), x(l, "");
    const Z = A.currentTarget, le = v(Z), ve = {};
    for (const [pe, be] of Object.entries(le)) {
      if (pe === "_submit" || be === c[pe]) continue;
      const it = /^fields\[(\d+)\]$/.exec(pe);
      it ? (ve.fields ||= []).push({ field_id: Number(it[1]), value: be }) : ve[pe] = be;
    }
    try {
      await Ce("/users/me", ve, { method: "PATCH" }), x(l, "Your profile has been updated.");
      for (const pe of Z.querySelectorAll('input[type="password"]')) pe.value = "";
      c = v(Z);
    } catch (pe) {
      x(a, pe.message, !0);
    } finally {
      x(n, !1);
    }
  }
  async function g(A) {
    if (A.preventDefault(), i(n)) return;
    x(n, !0), x(a, ""), x(l, "");
    const Z = v(A.currentTarget);
    Z.expiration || delete Z.expiration;
    try {
      const le = await Ce("/tokens", Z);
      x(s, le.value, !0);
      const { value: ve, ...pe } = le;
      x(o, [...i(o), pe], !0), f.showModal();
    } catch (le) {
      x(a, le.message, !0);
    } finally {
      x(n, !1);
    }
  }
  async function p(A) {
    if (!(i(n) || !confirm("Are you sure you want to delete this token?"))) {
      x(n, !0), x(a, ""), x(l, "");
      try {
        await Ce(`/tokens/${A}`, void 0, { method: "DELETE" }), x(o, i(o).filter((Z) => Z.id !== A), !0);
      } catch (Z) {
        x(a, Z.message, !0);
      } finally {
        x(n, !1);
      }
    }
  }
  async function C() {
    try {
      await navigator.clipboard.writeText(i(s)), x(l, "API key copied.");
    } catch {
      x(l, "Select and copy the API key below.");
    }
  }
  function m(A) {
    x(r, A, !0), x(a, ""), x(l, "");
  }
  var E = Co(), U = d(de(E), 2), Q = k(U), D = k(Q);
  let w;
  var B = d(D, 2);
  let z;
  var R = d(Q, 2), F = k(R);
  {
    var te = (A) => {
      var Z = wo(), le = H(Z, !0);
      L(() => N(le, i(a))), y(A, Z);
    };
    W(F, (A) => {
      i(a) && A(te);
    });
  }
  var G = d(F, 2);
  {
    var T = (A) => {
      var Z = xo(), le = H(Z, !0);
      L(() => N(le, i(l))), y(A, Z);
    };
    W(G, (A) => {
      i(l) && A(T);
    });
  }
  var _ = d(G, 2), b = k(_), O = k(b);
  he(O, 17, () => e.page.fields, we, (A, Z) => {
    gn(A, {
      get field() {
        return i(Z);
      }
    });
  });
  var K = d(O, 2), I = H(K, !0);
  yt(b, (A) => u?.(A));
  var P = d(_, 2), re = k(P), oe = d(k(re), 4), ue = d(re, 4);
  {
    var j = (A) => {
      var Z = So(), le = k(Z), ve = d(k(le));
      he(ve, 21, () => i(o), we, (pe, be) => {
        var it = ko(), kt = k(it), Qt = H(kt, !0), St = d(kt), $t = H(St, !0), Ft = d(St), q = H(Ft, !0), ne = d(Ft), _e = H(ne);
        L(
          (Ae, Te) => {
            N(Qt, Ae), N($t, Te), N(q, i(be).description), ee(_e, "aria-label", `Delete token ${i(be).description || i(be).id}`), _e.disabled = i(n);
          },
          [
            () => i(be).created ? new Date(i(be).created).toLocaleDateString() : "",
            () => i(be).expiration ? new Date(i(be).expiration).toLocaleDateString() : "Never"
          ]
        ), ge("click", _e, () => p(i(be).id)), y(pe, it);
      }), y(A, Z);
    }, M = (A) => {
      var Z = Eo();
      y(A, Z);
    };
    W(ue, (A) => {
      i(o).length ? A(j) : A(M, -1);
    });
  }
  var J = d(U, 2), $ = d(k(J), 3), ie = d($, 2), X = k(ie), V = d(X);
  It(J, (A) => f = A, () => f), L(() => {
    w = Re(D, 1, "nav-link", null, w, { active: i(r) === "profile" }), ee(D, "aria-pressed", i(r) === "profile"), z = Re(B, 1, "nav-link", null, z, { active: i(r) === "tokens" }), ee(B, "aria-pressed", i(r) === "tokens"), ee(_, "hidden", i(r) !== "profile"), K.disabled = i(n), N(I, i(n) ? "Saving..." : "Submit"), ee(P, "hidden", i(r) !== "tokens"), oe.disabled = i(n), ka($, i(s));
  }), ge("click", D, () => m("profile")), ge("click", B, () => m("tokens")), ct("submit", b, h), ct("submit", re, g), ct("close", J, () => x(s, "")), ge("click", $, (A) => A.currentTarget.select()), ge("click", X, C), ge("click", V, () => f.close()), y(t, E), Ne();
}
at(["click"]);
var To = /* @__PURE__ */ S("<a> </a>"), Lo = /* @__PURE__ */ S('<span class="badge bg-secondary ms-2"> </span>'), Ro = /* @__PURE__ */ S('<a class="badge bg-primary ms-2">Official</a>'), Mo = /* @__PURE__ */ S('<a target="_blank" rel="noopener"><i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), No = /* @__PURE__ */ S("<tr><td><!> <!> <!></td><td><!></td><td> </td><td> </td></tr>"), Oo = /* @__PURE__ */ S('<p role="status">No users match your search.</p>'), Po = /* @__PURE__ */ S("<option> </option>"), Io = /* @__PURE__ */ S('<label class="pagination-control">Page <select class="page-select form-select"></select> </label>'), Do = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Users</h1></div></div> <div class="container"><form method="get" class="user-search"><!> <button type="submit" class="btn btn-primary"><i class="fas fa-search" aria-hidden="true"></i> Search</button></form> <div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>User</th><th>Website</th><th>Affiliation</th><th>Country</th></tr></thead><tbody></tbody></table></div> <!> <!></div>', 1);
function Fo(t, e) {
  Me(e, !0);
  function r(p) {
    const C = new URL(location.href);
    C.searchParams.set("page", p.currentTarget.value), location.assign(C);
  }
  var n = Do(), a = d(de(n), 2), l = k(a), o = k(l);
  he(o, 17, () => e.page.fields, we, (p, C) => {
    gn(p, {
      get field() {
        return i(C);
      }
    });
  });
  var s = d(l, 2), f = k(s), c = d(k(f));
  he(c, 21, () => e.page.users, we, (p, C) => {
    var m = No(), E = k(m), U = k(E);
    {
      var Q = (I) => {
        var P = To(), re = H(P, !0);
        L(() => {
          ee(P, "href", `${e.config.urlRoot}/users/${i(C).id}`), N(re, i(C).name);
        }), y(I, P);
      }, D = (I) => {
        var P = Ve();
        L(() => N(P, i(C).name)), y(I, P);
      };
      W(U, (I) => {
        e.page.scoresVisible ? I(Q) : I(D, -1);
      });
    }
    var w = d(U, 2);
    {
      var B = (I) => {
        var P = Lo(), re = H(P, !0);
        L(() => N(re, i(C).bracket)), y(I, P);
      };
      W(w, (I) => {
        i(C).bracket && I(B);
      });
    }
    var z = d(w, 2);
    {
      var R = (I) => {
        var P = Ro();
        L((re) => ee(P, "href", re), [
          () => `https://majorleaguecyber.org/u/${encodeURIComponent(i(C).name)}`
        ]), y(I, P);
      };
      W(z, (I) => {
        i(C).official && I(R);
      });
    }
    var F = d(E), te = k(F);
    {
      var G = (I) => {
        var P = Mo();
        L(() => {
          ee(P, "href", i(C).website), ee(P, "aria-label", `Website for ${i(C).name}`);
        }), y(I, P);
      }, T = /* @__PURE__ */ ce(() => /^https?:\/\//i.test(i(C).website || ""));
      W(te, (I) => {
        i(T) && I(G);
      });
    }
    var _ = d(F), b = H(_, !0), O = d(_), K = H(O, !0);
    L(() => {
      N(b, i(C).affiliation || ""), N(K, i(C).country);
    }), y(p, m);
  });
  var v = d(s, 2);
  {
    var u = (p) => {
      var C = Oo();
      y(p, C);
    };
    W(v, (p) => {
      e.page.users.length || p(u);
    });
  }
  var h = d(v, 2);
  {
    var g = (p) => {
      var C = Io(), m = d(k(C));
      he(m, 21, () => Array.from({ length: e.page.pages }, (Q, D) => D + 1), we, (Q, D) => {
        var w = Po(), B = H(w, !0), z = {};
        L(() => {
          N(B, i(D)), z !== (z = i(D)) && (w.value = (w.__value = z) ?? "");
        }), y(Q, w);
      });
      var E;
      xa(m);
      var U = d(m);
      L(() => {
        E !== (E = e.page.page) && (m.value = (m.__value = E) ?? "", hn(m, E)), N(U, ` of ${e.page.pages ?? ""} (${e.page.total ?? ""} users)`);
      }), ge("change", m, r), y(p, C);
    };
    W(h, (p) => {
      e.page.pages > 1 && p(g);
    });
  }
  y(t, n), Ne();
}
at(["change"]);
const en = ["#194c9f", "#8a2459", "#25632a", "#8a480c", "#623e9d", "#006473", "#a12a20", "#4c5872", "#615600", "#763c36"];
var jo = /* @__PURE__ */ S('<p role="status"> </p>'), Bo = /* @__PURE__ */ S('<!> <div id="score-graph" class="score-chart" role="img"></div>', 1);
function Aa(t, e) {
  Me(e, !0);
  let r = Dt(e, "title", 3, "Score over Time"), n = Dt(e, "series", 19, () => []), a, l = /* @__PURE__ */ Y(null), o = /* @__PURE__ */ Y("");
  xt(() => {
    let u = !0;
    const h = new ResizeObserver(() => i(l)?.resize());
    return import("./chart-ClLr2WTg.js").then(({ init: g }) => {
      u && (x(l, g(a)), h.observe(a));
    }).catch(() => {
      u && x(o, "The chart could not load. The scores are available in the table below.");
    }), () => {
      u = !1, h.disconnect(), i(l)?.dispose();
    };
  }), Rt(() => {
    if (!i(l)) return;
    const u = "#18202a";
    i(l).setOption(
      {
        backgroundColor: "#fff",
        color: en,
        animation: !matchMedia("(prefers-reduced-motion: reduce)").matches,
        textStyle: { color: u, fontFamily: "Tahoma, sans-serif", fontSize: 12 },
        title: {
          text: r(),
          left: "center",
          textStyle: { color: u, fontSize: 17 }
        },
        tooltip: {
          trigger: "axis",
          confine: !0,
          backgroundColor: "#fff",
          textStyle: { color: u },
          borderColor: "#697c92"
        },
        legend: { type: "scroll", bottom: 0, textStyle: { color: u } },
        toolbox: {
          feature: { saveAsImage: {} },
          iconStyle: { borderColor: "#465365" }
        },
        grid: { top: 80, bottom: 55, left: 12, right: 18, containLabel: !0 },
        xAxis: {
          type: "time",
          axisLabel: { color: u },
          axisLine: { lineStyle: { color: "#697c92" } }
        },
        yAxis: {
          type: "value",
          axisLabel: { color: u },
          splitLine: { lineStyle: { color: "#d9e0e8" } }
        },
        dataZoom: [
          {
            type: "slider",
            top: 35,
            height: 20,
            textStyle: { color: u },
            borderColor: "#697c92",
            fillerColor: "rgba(25,76,159,.15)"
          }
        ],
        series: n().map((h, g) => ({
          ...h,
          type: "line",
          symbolSize: 7,
          lineStyle: { width: 3, type: g > 4 ? "dashed" : "solid" },
          label: { color: u }
        }))
      },
      { notMerge: !0 }
    );
  });
  var s = Bo(), f = de(s);
  {
    var c = (u) => {
      var h = jo(), g = H(h, !0);
      L(() => N(g, i(o))), y(u, h);
    };
    W(f, (u) => {
      i(o) && u(c);
    });
  }
  var v = d(f, 2);
  It(v, (u) => a = u, () => a), L(() => ee(v, "aria-label", `${r()}. Scores are also listed in the table below.`)), y(t, s), Ne();
}
var qo = /* @__PURE__ */ S('<a class="badge bg-primary">Official</a>'), Uo = /* @__PURE__ */ S('<span class="badge bg-primary"> </span>'), Ho = /* @__PURE__ */ S("<p> </p>"), zo = /* @__PURE__ */ S("<h2> <small>place</small></h2>"), Vo = /* @__PURE__ */ S("<h2> <small>points</small></h2>"), Yo = /* @__PURE__ */ S('<a target="_blank" rel="noopener">Website <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Wo = /* @__PURE__ */ S('<p role="status">Loading profile...</p>'), Go = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), Xo = /* @__PURE__ */ S('<div class="progress-bar"></div>'), Ko = /* @__PURE__ */ S('<span><span class="legend-swatch"></span> </span>'), Jo = /* @__PURE__ */ S('<div><i aria-hidden="true"></i><h4> </h4><p> </p><p> </p><strong> </strong></div>'), Zo = /* @__PURE__ */ S('<section aria-labelledby="awards-heading"><h3 id="awards-heading">Awards</h3><div class="profile-awards"></div></section>'), Qo = /* @__PURE__ */ S("<tr><td><a> </a></td><td> </td><td> </td><td><time> </time></td></tr>"), $o = /* @__PURE__ */ S('<section class="profile-graphs" aria-label="Score breakdowns"><div class="profile-breakdowns"><div><div class="progress" aria-hidden="true"><div class="progress-bar"></div><div class="progress-bar"></div></div><p> </p></div> <div><div class="progress" aria-hidden="true"></div><div class="category-legend"></div></div></div> <!></section> <!> <h3>Solves</h3><div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Challenge</th><th>Category</th><th>Value</th><th>Time</th></tr></thead><tbody></tbody></table></div>', 1), es = /* @__PURE__ */ S('<h3 class="text-muted text-center">No solves yet</h3>'), ts = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1> </h1> <div class="profile-badges"><!> <!></div> <!> <!> <!> <!></div></div> <div class="container"><!> <!> <!></div>', 1);
function rs(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ Y(me([])), n = /* @__PURE__ */ Y(me([])), a = /* @__PURE__ */ Y(0), l = /* @__PURE__ */ Y(null), o = /* @__PURE__ */ Y(!0), s = /* @__PURE__ */ Y(""), f = 0;
  const c = /* @__PURE__ */ ce(() => i(r).length + i(a) ? 100 * i(r).length / (i(r).length + i(a)) : 0), v = /* @__PURE__ */ ce(() => {
    const j = /* @__PURE__ */ new Map();
    return i(r).forEach((M) => j.set(M.challenge.category, (j.get(M.challenge.category) || 0) + 1)), [...j].map(([M, J], $) => ({
      name: M,
      count: J,
      percent: 100 * J / i(r).length,
      color: en[$ % en.length]
    }));
  }), u = /* @__PURE__ */ ce(() => {
    let j = 0;
    return [
      {
        name: e.page.name,
        data: [...i(r), ...i(n)].sort((M, J) => new Date(M.date) - new Date(J.date)).map((M) => [
          new Date(M.date).getTime(),
          j += M.challenge?.value ?? M.value
        ])
      }
    ];
  });
  async function h() {
    const j = ++f;
    x(s, "");
    try {
      const M = e.page.private ? "me" : e.page.id, [J, $, ie, X] = await Promise.all([
        Ce(`/users/${M}/solves`),
        Ce(`/users/${M}/fails`, void 0, { full: !0 }),
        Ce(`/users/${M}/awards`),
        e.page.private ? Ce("/users/me") : Promise.resolve(e.page)
      ]);
      if (j !== f) return;
      x(r, J, !0), x(a, $.meta.count, !0), x(n, ie, !0), x(l, X.score, !0);
    } catch (M) {
      j === f && x(s, M.message, !0);
    } finally {
      j === f && x(o, !1);
    }
  }
  xt(() => (h(), () => f++));
  var g = ts(), p = de(g), C = k(p), m = k(C), E = H(m, !0), U = d(m, 2), Q = k(U);
  {
    var D = (j) => {
      var M = qo();
      L((J) => ee(M, "href", J), [
        () => `https://majorleaguecyber.org/u/${encodeURIComponent(e.page.name)}`
      ]), y(j, M);
    };
    W(Q, (j) => {
      e.page.official && j(D);
    });
  }
  var w = d(Q, 2);
  he(
    w,
    17,
    () => [
      e.page.affiliation,
      e.page.country,
      e.page.bracket
    ].filter(Boolean),
    we,
    (j, M) => {
      var J = Uo(), $ = H(J, !0);
      L(() => N($, i(M))), y(j, J);
    }
  );
  var B = d(U, 2);
  he(B, 17, () => e.page.fields, we, (j, M) => {
    var J = Ho(), $ = H(J);
    L(() => N($, `${i(M).name ?? ""}: ${i(M).value ?? ""}`)), y(j, J);
  });
  var z = d(B, 2);
  {
    var R = (j) => {
      var M = zo(), J = k(M);
      L(() => N(J, `${e.page.place ?? ""} `)), y(j, M);
    };
    W(z, (j) => {
      e.page.place && j(R);
    });
  }
  var F = d(z, 2);
  {
    var te = (j) => {
      var M = Vo(), J = k(M);
      L(() => N(J, `${i(l) ?? ""} `)), y(j, M);
    };
    W(F, (j) => {
      i(l) !== null && j(te);
    });
  }
  var G = d(F, 2);
  {
    var T = (j) => {
      var M = Yo();
      L(() => ee(M, "href", e.page.website)), y(j, M);
    }, _ = /* @__PURE__ */ ce(() => /^https?:\/\//i.test(e.page.website || ""));
    W(G, (j) => {
      i(_) && j(T);
    });
  }
  var b = d(p, 2), O = k(b);
  {
    var K = (j) => {
      var M = Wo();
      y(j, M);
    };
    W(O, (j) => {
      i(o) && j(K);
    });
  }
  var I = d(O, 2);
  {
    var P = (j) => {
      var M = Go(), J = k(M), $ = d(J);
      L(() => N(J, `${i(s) ?? ""} `)), ge("click", $, h), y(j, M);
    };
    W(I, (j) => {
      i(s) && j(P);
    });
  }
  var re = d(I, 2);
  {
    var oe = (j) => {
      var M = $o(), J = de(M), $ = k(J), ie = k($), X = k(ie), V = k(X), A = d(V), Z = d(X), le = H(Z), ve = d(ie, 2), pe = k(ve);
      he(pe, 21, () => i(v), we, (q, ne) => {
        var _e = Xo();
        L(() => Bt(_e, `width:${i(ne).percent}%;background:${i(ne).color}`)), y(q, _e);
      });
      var be = d(pe);
      he(be, 21, () => i(v), we, (q, ne) => {
        var _e = Ko(), Ae = k(_e), Te = d(Ae);
        L(
          (Qe) => {
            Bt(Ae, `background:${i(ne).color}`), N(Te, `${i(ne).name ?? ""} (${Qe ?? ""}%)`);
          },
          [() => i(ne).percent.toFixed(2)]
        ), y(q, _e);
      });
      var it = d($, 2);
      Aa(it, {
        get series() {
          return i(u);
        }
      });
      var kt = d(J, 2);
      {
        var Qt = (q) => {
          var ne = Zo(), _e = d(k(ne));
          he(_e, 21, () => i(n), we, (Ae, Te) => {
            var Qe = Jo(), xe = k(Qe), Ie = d(xe), lt = H(Ie, !0), gt = d(Ie), Et = H(gt, !0), Ct = d(gt), Mr = H(Ct, !0), Nr = d(Ct), Ra = H(Nr);
            L(() => {
              Re(xe, 1, `award-icon award-${i(Te).icon} fa-2x`), N(lt, i(Te).name), N(Et, i(Te).category || ""), N(Mr, i(Te).description || ""), N(Ra, `${i(Te).value ?? ""} points`);
            }), y(Ae, Qe);
          }), y(q, ne);
        };
        W(kt, (q) => {
          i(n).length && q(Qt);
        });
      }
      var St = d(kt, 3), $t = k(St), Ft = d(k($t));
      he(Ft, 21, () => i(r), we, (q, ne) => {
        var _e = Qo(), Ae = k(_e), Te = k(Ae), Qe = H(Te, !0), xe = d(Ae), Ie = H(xe, !0), lt = d(xe), gt = H(lt, !0), Et = d(lt), Ct = k(Et), Mr = H(Ct, !0);
        L(
          (Nr) => {
            ee(Te, "href", `${e.config.urlRoot}/challenges#challenge-${i(ne).challenge.id}`), N(Qe, i(ne).challenge.name), N(Ie, i(ne).challenge.category), N(gt, i(ne).challenge.value), ee(Ct, "datetime", i(ne).date), N(Mr, Nr);
          },
          [() => new Date(i(ne).date).toLocaleString()]
        ), y(q, _e);
      }), L(
        (q, ne) => {
          Bt(V, `width:${i(c)}%;background:#25632a`), Bt(A, `width:${100 - i(c)}%;background:#a12a20`), N(le, `Solves (${q ?? ""}%) / Fails (${ne ?? ""}%)`);
        },
        [
          () => i(c).toFixed(2),
          () => (100 - i(c)).toFixed(2)
        ]
      ), y(j, M);
    }, ue = (j) => {
      var M = es();
      y(j, M);
    };
    W(re, (j) => {
      i(r).length || i(n).length ? j(oe) : !i(o) && !i(s) && j(ue, 1);
    });
  }
  L(() => N(E, e.page.name)), y(t, g), Ne();
}
at(["click"]);
var ns = /* @__PURE__ */ S('<p role="status">Loading scoreboard...</p>'), as = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), is = /* @__PURE__ */ S("<button> </button>"), ls = /* @__PURE__ */ S('<nav class="nav nav-pills mb-3" aria-label="Competition bracket"><button>All</button><!></nav>'), os = /* @__PURE__ */ S('<span class="badge bg-secondary ms-2"> </span>'), ss = /* @__PURE__ */ S('<tr><th scope="row"></th><td><a> </a><!></td><td> </td></tr>'), fs = /* @__PURE__ */ S('<h3 class="text-center text-muted">Scoreboard is empty</h3>'), us = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Scoreboard</h1></div></div> <div class="container"><!> <!> <!> <!> <div id="scoreboard" class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Place</th><th>User</th><th>Score</th></tr></thead><tbody></tbody></table></div> <!></div>', 1);
function cs(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ Y(me([])), n = /* @__PURE__ */ Y(me([])), a = /* @__PURE__ */ Y(""), l = /* @__PURE__ */ Y(me({})), o = /* @__PURE__ */ Y(!0), s = /* @__PURE__ */ Y(""), f = 0;
  const c = /* @__PURE__ */ ce(() => i(r).filter((T) => !i(a) || String(T.bracket_id) === i(a))), v = /* @__PURE__ */ ce(() => Object.values(i(l)).map((T) => {
    let _ = 0;
    return {
      name: T.name,
      data: [...T.solves].sort((b, O) => new Date(b.date) - new Date(O.date)).map((b) => [new Date(b.date).getTime(), _ += b.value])
    };
  }));
  async function u() {
    const T = ++f;
    x(s, "");
    try {
      const [_, b, O] = await Promise.all([
        Ce("/scoreboard"),
        Ce("/brackets?type=users"),
        Ce(`/scoreboard/top/10${i(a) ? `?bracket_id=${encodeURIComponent(i(a))}` : ""}`)
      ]);
      if (T !== f) return;
      x(r, _, !0), x(n, b, !0), x(l, O, !0);
    } catch (_) {
      T === f && x(s, _.message, !0);
    } finally {
      T === f && x(o, !1);
    }
  }
  function h(T) {
    x(a, T, !0), u();
  }
  xt(() => {
    u();
    const T = setInterval(u, 3e5);
    return () => {
      clearInterval(T), f++;
    };
  });
  var g = us(), p = d(de(g), 2), C = k(p);
  {
    var m = (T) => {
      var _ = ns();
      y(T, _);
    };
    W(C, (T) => {
      i(o) && T(m);
    });
  }
  var E = d(C, 2);
  {
    var U = (T) => {
      var _ = as(), b = k(_), O = d(b);
      L(() => N(b, `${i(s) ?? ""} `)), ge("click", O, u), y(T, _);
    };
    W(E, (T) => {
      i(s) && T(U);
    });
  }
  var Q = d(E, 2);
  {
    var D = (T) => {
      var _ = ls(), b = k(_);
      let O;
      var K = d(b);
      he(K, 17, () => i(n), we, (I, P) => {
        var re = is();
        let oe;
        var ue = H(re, !0);
        L(
          (j) => {
            oe = Re(re, 1, "nav-link", null, oe, { active: j }), N(ue, i(P).name);
          },
          [() => i(a) === String(i(P).id)]
        ), ge("click", re, () => h(String(i(P).id))), y(I, re);
      }), L(() => O = Re(b, 1, "nav-link", null, O, { active: !i(a) })), ge("click", b, () => h("")), y(T, _);
    };
    W(Q, (T) => {
      i(n).length && T(D);
    });
  }
  var w = d(Q, 2);
  {
    var B = (T) => {
      Aa(T, {
        title: "Top 10 Users",
        get series() {
          return i(v);
        }
      });
    };
    W(w, (T) => {
      i(v).length && T(B);
    });
  }
  var z = d(w, 2), R = k(z), F = d(k(R));
  he(F, 21, () => i(c), we, (T, _, b) => {
    var O = ss(), K = k(O);
    K.textContent = b + 1;
    var I = d(K), P = k(I), re = H(P, !0), oe = d(P);
    {
      var ue = (J) => {
        var $ = os(), ie = H($, !0);
        L(() => N(ie, i(_).bracket_name)), y(J, $);
      };
      W(oe, (J) => {
        i(_).bracket_name && J(ue);
      });
    }
    var j = d(I), M = H(j, !0);
    L(() => {
      ee(P, "href", i(_).account_url), N(re, i(_).name), N(M, i(_).score);
    }), y(T, O);
  });
  var te = d(z, 2);
  {
    var G = (T) => {
      var _ = fs();
      y(T, _);
    };
    W(te, (T) => {
      !i(o) && !i(s) && !i(c).length && T(G);
    });
  }
  y(t, g), Ne();
}
at(["click"]);
var ds = /* @__PURE__ */ S('<div class="container custom-page"></div>');
function vs(t, e) {
  Me(e, !0);
  function r(a) {
    let l = !0;
    return (async () => {
      for (const o of a.querySelectorAll("script")) {
        if (!l) break;
        const s = document.createElement("script");
        for (const c of o.attributes) s.setAttribute(c.name, c.value);
        s.textContent = o.textContent;
        const f = s.src && !s.hasAttribute("async") ? new Promise((c) => {
          s.async = !1, s.onload = s.onerror = c;
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
  bt(n, () => e.html, !0), yt(n, (a) => r?.(a)), y(t, n), Ne();
}
var hs = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), _s = /* @__PURE__ */ S('<h2 class="text-center">There are no notifications yet</h2>'), gs = /* @__PURE__ */ S('<article class="card bg-body-tertiary mb-4"><div class="card-body"><h3> </h3><div></div><time class="text-muted"> </time></div></article>'), ps = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Notifications</h1></div></div> <div class="container"><!> <!> <!></div>', 1), ms = /* @__PURE__ */ S('<aside class="express-toast" role="status"><h2> </h2><div></div><button class="btn">Dismiss</button></aside>'), bs = /* @__PURE__ */ S('<h2 id="notification-title"> </h2><div></div><div class="dialog-actions"><a class="btn">All notifications</a><button class="btn btn-primary">Close</button></div>', 1), ys = /* @__PURE__ */ S('<!> <!> <dialog class="express-dialog" aria-labelledby="notification-title"><!></dialog>', 1);
function ws(t, e) {
  Me(e, !0);
  const r = (w) => (!w.user_id || w.user_id === e.config.userId) && (!w.team_id || w.team_id === e.config.teamId);
  let n = /* @__PURE__ */ Y(me(Pe(() => (e.page.notifications || []).filter(r)))), a = /* @__PURE__ */ Y(me([])), l = /* @__PURE__ */ Y(null), o = /* @__PURE__ */ Y(""), s;
  const f = /* @__PURE__ */ ce(() => `challenge-express-notifications:${e.config.urlRoot}:${e.config.userId || "guest"}`);
  function c() {
    try {
      localStorage.setItem(i(
        f
        /* Reading notifications still works when storage is unavailable. */
      ), JSON.stringify(i(a)));
    } catch {
    }
  }
  function v(w) {
    x(a, [.../* @__PURE__ */ new Set([...i(a), ...w])], !0), c();
  }
  function u() {
    i(l) && v([i(l).id]), x(l, null);
  }
  async function h() {
    try {
      x(n, (await Ce("/notifications")).filter(r), !0), x(o, ""), e.page.kind === "notifications" && v(i(n).map((w) => w.id));
    } catch (w) {
      e.page.kind === "notifications" && x(o, w.message, !0);
    }
  }
  Rt(() => {
    e.onunread(i(n).filter((w) => !i(a).includes(w.id)).length);
  }), Rt(() => {
    i(l) && i(l).type !== "toast" && s && !s.open && s.showModal();
  }), Rt(() => {
    if (i(l)?.type !== "toast") return;
    const w = setTimeout(() => x(l, null), 8e3);
    return () => clearTimeout(w);
  }), xt(() => {
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
    const B = e.config.userId ? new EventSource(`${e.config.urlRoot}/events`) : null;
    let z = !1;
    return B?.addEventListener("open", () => {
      z && h(), z = !0;
    }), B?.addEventListener("notification", (R) => {
      let F;
      try {
        F = JSON.parse(R.data);
      } catch {
        return;
      }
      if (!r(F)) return;
      const te = !i(n).some((G) => G.id === F.id);
      x(
        n,
        [
          ...i(n).filter((G) => G.id !== F.id),
          F
        ],
        !0
      ), e.page.kind === "notifications" ? v([F.id]) : te && !i(a).includes(F.id) && F.type !== "background" && x(l, F, !0);
    }), () => {
      B?.close(), window.removeEventListener("storage", w);
    };
  });
  var g = ys(), p = de(g);
  {
    var C = (w) => {
      var B = ps(), z = d(de(B), 2), R = k(z);
      {
        var F = (_) => {
          var b = hs(), O = k(b), K = d(O);
          L(() => N(O, `${i(o) ?? ""} `)), ge("click", K, h), y(_, b);
        };
        W(R, (_) => {
          i(o) && _(F);
        });
      }
      var te = d(R, 2);
      {
        var G = (_) => {
          var b = _s();
          y(_, b);
        };
        W(te, (_) => {
          !i(n).length && !i(o) && _(G);
        });
      }
      var T = d(te, 2);
      he(T, 17, () => [...i(n)].sort((_, b) => b.id - _.id), we, (_, b) => {
        var O = gs(), K = k(O), I = k(K), P = H(I, !0), re = d(I);
        bt(re, () => i(b).html, !0);
        var oe = d(re), ue = H(oe, !0);
        L(
          (j) => {
            N(P, i(b).title), ee(oe, "datetime", i(b).date), N(ue, j);
          },
          [() => new Date(i(b).date).toLocaleString()]
        ), y(_, O);
      }), y(w, B);
    };
    W(p, (w) => {
      e.page.kind === "notifications" && w(C);
    });
  }
  var m = d(p, 2);
  {
    var E = (w) => {
      var B = ms(), z = k(B), R = H(z, !0), F = d(z);
      bt(F, () => i(l).html || "", !0);
      var te = d(F);
      L(() => N(R, i(l).title)), ge("click", te, u), y(w, B);
    };
    W(m, (w) => {
      i(l)?.type === "toast" && w(E);
    });
  }
  var U = d(m, 2), Q = k(U);
  {
    var D = (w) => {
      var B = bs(), z = de(B), R = H(z, !0), F = d(z);
      bt(F, () => i(l).html || "", !0);
      var te = d(F), G = k(te), T = d(G);
      L(() => {
        N(R, i(l).title), ee(G, "href", `${e.config.urlRoot}/notifications`);
      }), ge("click", T, () => s.close()), y(w, B);
    };
    W(Q, (w) => {
      i(l) && i(l).type !== "toast" && w(D);
    });
  }
  It(U, (w) => s = w, () => s), ct("close", U, u), y(t, g), Ne();
}
at(["click"]);
var xs = /* @__PURE__ */ S('<img class="express-brand-icon" alt="" draggable="false"/>'), ks = /* @__PURE__ */ S('<i class="fas fa-envelope" aria-hidden="true"></i>'), Ss = /* @__PURE__ */ S('<i class="fas fa-bell" aria-hidden="true"></i>'), Es = /* @__PURE__ */ S('<span class="badge bg-danger"> </span>'), Cs = /* @__PURE__ */ S('<li class="nav-item"><a class="nav-link"><!> <!></a></li>'), As = /* @__PURE__ */ S("<ul></ul>"), Ts = /* @__PURE__ */ S('<nav class="navbar navbar-expand-md" aria-label="Main navigation"><div class="container"><button class="navbar-toggler" type="button" aria-controls="base-navbars" aria-label="Toggle navigation"><i class="fas fa-bars" aria-hidden="true"></i> Menu</button> <div id="base-navbars"></div></div></nav>'), Ls = /* @__PURE__ */ S('<div id="challenge-app"><!></div>'), Rs = /* @__PURE__ */ S("<p> </p>"), Ms = /* @__PURE__ */ S('<div class="container error-page"><h1> </h1><h2> </h2><!><a>Back to challenges</a></div>'), Ns = /* @__PURE__ */ S("<!> <!>", 1), Os = /* @__PURE__ */ S('<div class="express-window"><header class="express-title window-drag-handle" tabindex="0" role="button" aria-label="Move application window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><!> <span id="window-title"> </span></header> <!> <main id="main-content"><!> <!></main> <footer class="express-status"> <span>Powered by <a href="https://ctfd.io">CTFd</a></span></footer></div> <div class="express-taskbar"><a class="express-start">Start</a><span> </span></div>', 1);
function Ps(t, e) {
  Me(e, !0);
  let r = /* @__PURE__ */ Y(!1), n = /* @__PURE__ */ Y(0);
  const a = /* @__PURE__ */ ce(() => e.page.kind === "login"), l = /* @__PURE__ */ ce(() => ["login", "register", "reset", "confirm"].includes(e.page.kind));
  xt(() => (document.body.classList.toggle("login-desktop", i(a)), () => document.body.classList.remove("login-desktop")));
  var o = Os(), s = de(o), f = k(s), c = k(f);
  {
    var v = (G) => {
      var T = xs();
      L(() => ee(T, "src", e.site.logo)), y(G, T);
    }, u = (G) => {
      var T = ks();
      y(G, T);
    };
    W(c, (G) => {
      e.site.logo ? G(v) : G(u, -1);
    });
  }
  var h = d(c, 2), g = H(h, !0), p = d(f, 2);
  {
    var C = (G) => {
      var T = Ts(), _ = k(T), b = k(_), O = d(b, 2);
      let K;
      he(O, 21, () => [e.site.primary, e.site.account], we, (I, P, re) => {
        var oe = As();
        Re(oe, 1, "navbar-nav", null, {}, { "me-auto": re === 0, "ms-md-auto": re === 1 }), he(oe, 21, () => i(P), we, (ue, j) => {
          var M = Cs(), J = k(M), $ = k(J);
          {
            var ie = (Z) => {
              var le = Ss();
              y(Z, le);
            };
            W($, (Z) => {
              i(j).label === "Notifications" && Z(ie);
            });
          }
          var X = d($), V = d(X);
          {
            var A = (Z) => {
              var le = Es(), ve = H(le, !0);
              L(() => N(ve, i(n))), y(Z, le);
            };
            W(V, (Z) => {
              i(j).label === "Notifications" && i(n) > 0 && Z(A);
            });
          }
          L(() => {
            ee(J, "href", i(j).href), ee(J, "target", i(j).target || void 0), ee(J, "rel", i(j).target === "_blank" ? "noopener" : void 0), N(X, `${i(j).label ?? ""} `);
          }), y(ue, M);
        }), y(I, oe);
      }), L(() => {
        ee(b, "aria-expanded", i(r)), K = Re(O, 1, "collapse navbar-collapse", null, K, { show: i(r) });
      }), ge("click", b, () => x(r, !i(r))), y(G, T);
    };
    W(p, (G) => {
      i(a) || G(C);
    });
  }
  var m = d(p, 2), E = k(m);
  {
    var U = (G) => {
      yo(G, {
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
    }, Q = (G) => {
      var T = Ns(), _ = de(T);
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
        var O = (M) => {
          var J = Ls(), $ = k(J);
          Jl($, {
            get config() {
              return e.config;
            }
          }), y(M, J);
        }, K = (M) => {
          Ao(M, {
            get page() {
              return e.page;
            }
          });
        }, I = (M) => {
          Fo(M, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, P = (M) => {
          rs(M, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, re = (M) => {
          cs(M, {});
        }, oe = (M) => {
          vs(M, {
            get html() {
              return e.page.html;
            }
          });
        }, ue = (M) => {
          var J = Ms(), $ = k(J), ie = H($, !0), X = d($), V = H(X), A = d(X);
          {
            var Z = (ve) => {
              var pe = Rs(), be = H(pe, !0);
              L(() => N(be, e.page.detail)), y(ve, pe);
            };
            W(A, (ve) => {
              e.page.detail && ve(Z);
            });
          }
          var le = d(A);
          L(() => {
            N(ie, e.page.heading), N(V, `${e.page.code ?? ""} ${e.page.message ?? ""}`), ee(le, "href", `${e.config.urlRoot}/challenges`);
          }), y(M, J);
        }, j = (M) => {
          var J = dt(), $ = de(J);
          bt($, () => e.fallback), y(M, J);
        };
        W(b, (M) => {
          e.page.kind === "challenges" ? M(O) : e.page.kind === "settings" ? M(K, 1) : e.page.kind === "users" ? M(I, 2) : e.page.kind === "profile" ? M(P, 3) : e.page.kind === "scoreboard" ? M(re, 4) : e.page.kind === "page" ? M(oe, 5) : e.page.kind === "error" ? M(ue, 6) : e.page.kind !== "notifications" && M(j, 7);
        });
      }
      y(G, T);
    };
    W(E, (G) => {
      i(l) ? G(U) : G(Q, -1);
    });
  }
  var D = d(E, 2);
  ws(D, {
    get page() {
      return e.page;
    },
    get config() {
      return e.config;
    },
    onunread: (G) => x(n, G, !0)
  });
  var w = d(m, 2), B = k(w);
  yt(s, (G, T) => Ea?.(G, T), () => !i(a));
  var z = d(s, 2), R = k(z), F = d(R), te = H(F, !0);
  L(() => {
    N(g, e.site.title), N(B, e.site.eventName), ee(R, "href", `${e.config.urlRoot}/challenges`), N(te, e.site.appName);
  }), y(t, o), Ne();
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
