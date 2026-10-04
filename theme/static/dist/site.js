var Ar = Array.isArray, Ma = Array.prototype.indexOf, pr = Array.prototype.includes, Cr = Array.from, Tn = Object.defineProperty, It = Object.getOwnPropertyDescriptor, Ln = Object.getOwnPropertyDescriptors, Oa = Object.prototype, Na = Array.prototype, tn = Object.getPrototypeOf, gn = Object.isExtensible;
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
const Me = 2, qt = 4, Tr = 8, Mn = 1 << 24, Ge = 16, Ye = 32, ct = 64, Hr = 128, rn = 256, Ze = 512, ke = 1024, we = 2048, ze = 4096, Pe = 8192, Ie = 16384, Gt = 32768, mr = 1 << 25, Bt = 65536, br = 1 << 17, Fa = 1 << 18, Xt = 1 << 19, ja = 1 << 20, $e = 1 << 25, yr = 1 << 21, Dt = 1 << 22, mt = 1 << 23, st = /* @__PURE__ */ Symbol("$state"), On = /* @__PURE__ */ Symbol("component"), qa = /* @__PURE__ */ Symbol("legacy props"), Ba = /* @__PURE__ */ Symbol(""), Nn = /* @__PURE__ */ Symbol("attributes"), Vr = /* @__PURE__ */ Symbol("class"), zr = /* @__PURE__ */ Symbol("style"), Yr = /* @__PURE__ */ Symbol("text"), hr = /* @__PURE__ */ Symbol("form reset"), fr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Ua = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Ha = 1, Va = 2, Pn = 4, za = 8, Ya = 16, Wa = 1, Ga = 4, Xa = 8, Ja = 16, Ka = 1, Za = 2, xe = /* @__PURE__ */ Symbol("uninitialized"), In = "http://www.w3.org/1999/xhtml", Qa = "http://www.w3.org/2000/svg", $a = "http://www.w3.org/1998/Math/MathML";
function ei() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ti() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ri() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Dn(t) {
  return t === this.v;
}
function Fn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function jn(t) {
  return !Fn(t, this.v);
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
let Ce = null;
function Ut(t) {
  Ce = t;
}
function Oe(t, e = !1, r) {
  Ce = {
    p: Ce,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      ie
    ),
    l: null
  };
}
function Ne(t) {
  var e = (
    /** @type {ComponentContext} */
    Ce
  ), r = e.e;
  if (r !== null) {
    e.e = null;
    for (var n of r)
      aa(n);
  }
  return e.i = !0, Ce = e.p, nn(t);
}
function nn(t = {}) {
  return Tn(t, On, { value: !0 }), t;
}
function Bn() {
  return !0;
}
let St = [];
function Un() {
  var t = St;
  St = [], Ia(t);
}
function ot(t) {
  if (St.length === 0 && !ar) {
    var e = St;
    queueMicrotask(() => {
      e === St && Un();
    });
  }
  St.push(t);
}
function hi() {
  for (; St.length > 0; )
    Un();
}
const _i = -7169;
function pe(t, e) {
  t.f = t.f & _i | e;
}
function an(t) {
  (t.f & Ze) !== 0 || t.deps === null ? pe(t, ke) : pe(t, ze);
}
function Hn(t, e, r) {
  (t.f & we) !== 0 ? e.add(t) : (t.f & ze) !== 0 && r.add(t), pe(t, ke);
}
let pn = !1;
function gi() {
  pn || (pn = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            e[hr]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Jt(t) {
  var e = ae, r = ie;
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
    t[hr]
  );
  a ? t[hr] = () => {
    a(), n(!0);
  } : t[hr] = () => n(!0), gi();
}
function pi(t, e, r, n) {
  const a = or;
  var l = t.filter((_) => !_.settled), s = e.map(a);
  if (r.length === 0 && l.length === 0) {
    n(s);
    return;
  }
  var o = (
    /** @type {Effect} */
    ie
  ), f = mi(), c = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((_) => _.promise)) : null;
  function d(_) {
    if ((o.f & Ie) === 0) {
      f();
      try {
        n([...s, ..._]);
      } catch (p) {
        Qe(p, o);
      }
      wr();
    }
  }
  var u = Vn();
  if (r.length === 0) {
    c.then(() => d([])).finally(u);
    return;
  }
  function h() {
    Promise.all(r.map((_) => /* @__PURE__ */ bi(_))).then(d).catch((_) => Qe(_, o)).finally(u);
  }
  c ? c.then(() => {
    f(), h(), wr();
  }) : h();
}
function mi() {
  var t = (
    /** @type {Effect} */
    ie
  ), e = ae, r = Ce, n = (
    /** @type {Batch} */
    te
  );
  return function(l = !0) {
    nt(t), We(e), Ut(r), l && (t.f & Ie) === 0 && (n?.activate(), n?.apply());
  };
}
function wr(t = !0) {
  nt(null), We(null), Ut(null), t && te?.deactivate();
}
function Vn() {
  var t = (
    /** @type {Effect} */
    ie
  ), e = t.b, r = (
    /** @type {Batch} */
    te
  ), n = !!e?.is_rendered();
  return e?.update_pending_count(1, r), r.increment(n, t), () => {
    e?.update_pending_count(-1, r), r.decrement(n, t);
  };
}
// @__NO_SIDE_EFFECTS__
function or(t) {
  var e = Me | we;
  return ie !== null && (ie.f |= Xt), {
    ctx: Ce,
    deps: null,
    effects: null,
    equals: Dn,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      xe
    ),
    wv: 0,
    parent: ie,
    ac: null
  };
}
const tr = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function bi(t, e, r) {
  let n = (
    /** @type {Effect | null} */
    ie
  );
  n === null && ni();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Lt(
    /** @type {V} */
    xe
  ), s = !ae, o = /* @__PURE__ */ new Set();
  return Ni(() => {
    var f = (
      /** @type {Effect} */
      ie
    ), c = Rn();
    a = c.promise;
    try {
      Promise.resolve(t()).then(c.resolve, (_) => {
        _ !== fr && c.reject(_);
      }).finally(wr);
    } catch (_) {
      c.reject(_), wr();
    }
    var d = (
      /** @type {Batch} */
      te
    );
    if (s) {
      if ((f.f & Gt) !== 0)
        var u = Vn();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        n.b?.is_rendered()
      )
        d.async_deriveds.get(f)?.reject(tr);
      else
        for (const _ of o.values())
          _.reject(tr);
      o.add(c), d.async_deriveds.set(f, c);
    }
    const h = (_, p = void 0) => {
      u?.(), o.delete(c), p !== tr && (d.activate(), p ? (l.f |= mt, Ht(l, p)) : ((l.f & mt) !== 0 && (l.f ^= mt), Ht(l, _)), d.deactivate());
    };
    c.promise.then(h, (_) => h(null, _ || "unknown"));
  }), Lr(() => {
    for (const f of o)
      f.reject(tr);
  }), new Promise((f) => {
    function c(d) {
      function u() {
        d === a ? f(l) : c(a);
      }
      d.then(u, u);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function ce(t) {
  const e = /* @__PURE__ */ or(t);
  return ua(e), e;
}
// @__NO_SIDE_EFFECTS__
function zn(t) {
  const e = /* @__PURE__ */ or(t);
  return e.equals = jn, e;
}
function yi(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      qe(
        /** @type {Effect} */
        e[r]
      );
  }
}
function on(t) {
  var e, r = ie, n = t.parent;
  if (!dt && n !== null && t.v !== xe && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Ie | Pe)) !== 0)
    return ei(), t.v;
  nt(n);
  try {
    yi(t), e = ha(t);
  } finally {
    nt(r);
  }
  return e;
}
function Yn(t) {
  var e = on(t);
  if (!t.equals(e) && (t.wv = da(), (!te?.is_fork || t.deps === null) && (te !== null ? (te.capture(t, e, !0), Wr?.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    pe(t, ke);
    return;
  }
  dt || (Xe !== null ? (un() || te?.is_fork) && Xe.set(t, e) : an(t));
}
function wi(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac !== null && Jt(() => {
        e.ac.abort(fr), e.ac = null;
      }), e.fn !== null && (e.teardown = Pa), sr(e, 0), dn(e));
}
function Wn(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && Vt(e);
}
let Nr = null, Nt = null, te = null, Wr = null, Xe = null, Gr = null, ar = !1, Pr = !1, ir = null, _r = null;
var mn = 0;
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
    Nt === null ? Nr = Nt = this : (Nt.#e = this, this.#l = Nt), Nt = this;
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
        pe(a, we), r(a);
      for (a of n.m)
        pe(a, ze), r(a);
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
      if (!((l.f & Ie) !== 0 || (l.f & (we | ze)) === 0)) {
        for (var r = l, n = !1; r.parent !== null; ) {
          r = r.parent;
          var a = r.f;
          if ((a & (ct | Ye)) !== 0) {
            if ((a & ke) === 0) {
              n = !0;
              break;
            }
            r.f ^= ke;
          }
        }
        n || e.push(r);
      }
    return this.#a = [], e;
  }
  #p() {
    this.#t = !0;
    for (const o of this.#f)
      this.#u.delete(o), pe(o, we), this.schedule(o);
    for (const o of this.#u)
      pe(o, ze), this.schedule(o);
    this.apply();
    for (var e = ir = [], r = [], n = _r = []; this.#a.length > 0; ) {
      mn++ > 1e3 && (this.#_(), Ei());
      for (const o of this.#x())
        try {
          this.#m(o, e, r);
        } catch (f) {
          throw Jn(o), this.#b() || this.discard(), f;
        }
    }
    if (te = null, n.length > 0) {
      var a = wt.ensure();
      for (const o of n)
        a.schedule(o);
    }
    if (ir = null, _r = null, this.#b()) {
      this.#v(r), this.#v(e);
      for (const [o, f] of this.#d)
        Xn(o, f);
      n.length > 0 && /** @type {unknown} */
      te.#p();
      return;
    }
    const l = this.#k();
    if (l) {
      this.#v(r), this.#v(e), l.#y(this);
      return;
    }
    this.#f.clear(), this.#u.clear();
    for (const o of this.#s) o(this);
    this.#s.clear(), Wr = this, bn(r), bn(e), Wr = null, this.#o?.resolve();
    var s = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      te
    );
    if (this.#i === 0 && (this.#a.length === 0 || s !== null) && this.#_(), this.#a.length > 0)
      if (s !== null) {
        for (const o of this.#a)
          s.#a.push(o);
        this.#a = [];
      } else
        s = this;
    s !== null && (et.clear(), s.#p());
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #m(e, r, n) {
    e.f ^= ke;
    for (var a = e.first; a !== null; ) {
      var l = a.f, s = (l & (Ye | ct)) !== 0, o = s && (l & ke) !== 0, f = o || (l & Pe) !== 0 || this.#d.has(a);
      if (!f && a.fn !== null) {
        s ? a.f ^= ke : (l & qt) !== 0 ? r.push(a) : cr(a) && ((l & Ge) !== 0 && this.#u.add(a), Vt(a));
        var c = a.first;
        if (c !== null) {
          a = c;
          continue;
        }
      }
      for (; a !== null; ) {
        var d = a.next;
        if (d !== null) {
          a = d;
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
      if (a !== null && !((n.f & Me) !== 0 && (n.f & (we | ze)) === 0))
        for (const o of a) {
          var l = o.f;
          if ((l & Me) !== 0)
            r(
              /** @type {Derived} */
              o
            );
          else {
            var s = (
              /** @type {Effect} */
              o
            );
            l & (Dt | Ge) && !this.async_deriveds.has(s) && (this.#u.delete(s), pe(s, we), this.schedule(s));
          }
        }
    };
    for (const n of this.current.keys())
      r(n);
    this.oncommit(() => e.discard()), e.#_(), te = this, this.#p();
  }
  /**
   * @param {Effect[]} effects
   */
  #v(e) {
    for (var r = 0; r < e.length; r += 1)
      Hn(e[r], this.#f, this.#u);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, r, n = !1) {
    e.v !== xe && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & mt) === 0 && (this.current.set(e, [r, n]), Xe?.set(e, r)), this.is_fork || (e.v = r);
  }
  activate() {
    te = this;
  }
  deactivate() {
    te = null, Xe = null;
  }
  flush() {
    try {
      Pr = !0, te = this, this.#p();
    } finally {
      mn = 0, Gr = null, ir = null, _r = null, Pr = !1, te = null, Xe = null, et.clear();
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
    for (let u = Nr; u !== null; u = u.#e) {
      var e = u.id < this.id, r = [];
      for (const [h, [_, p]] of this.current) {
        if (u.current.has(h)) {
          var n = (
            /** @type {[any, boolean]} */
            u.current.get(h)[0]
          );
          if (e && _ !== n)
            u.current.set(h, [_, p]);
          else
            continue;
        }
        r.push(h);
      }
      if (e)
        for (const [h, _] of this.async_deriveds) {
          const p = u.async_deriveds.get(h);
          p && _.promise.then(p.resolve).catch(p.reject);
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
              u.unskip_effect(h, (_) => {
                (_.f & (Ge | Dt)) !== 0 ? u.schedule(_) : u.#v([_]);
              });
          u.activate();
          var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
          for (var f of r)
            Gn(f, l, s, o);
          o = /* @__PURE__ */ new Map();
          var c = [...u.current].filter(([h, _]) => {
            const p = this.current.get(h);
            return p ? p[0] !== _[0] || p[1] !== _[1] : !0;
          }).map(([h]) => h);
          if (c.length > 0)
            for (const h of this.#h)
              (h.f & (Ie | Pe | br)) === 0 && sn(h, c, o) && ((h.f & (Dt | Ge)) !== 0 ? (pe(h, we), u.schedule(h)) : u.#f.add(h));
          if (u.#a.length > 0 && !u.#c) {
            u.apply();
            for (var d of u.#x())
              u.#m(d, [], []);
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
    this.#c || (this.#c = !0, ot(() => {
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
    return (this.#o ??= Rn()).promise;
  }
  static ensure() {
    if (te === null) {
      const e = te = new wt();
      !Pr && !ar && ot(() => {
        e.#t || e.flush();
      });
    }
    return te;
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
    if (Gr = e, e.b?.is_pending && (e.f & (qt | Tr | Mn)) !== 0 && (e.f & Gt) === 0) {
      e.b.defer_effect(e);
      return;
    }
    this.#a.push(e);
  }
  #_() {
    if (this.linked) {
      var e = this.#l, r = this.#e;
      e === null ? Nr = r : e.#e = r, r === null ? Nt = e : r.#l = e, this.linked = !1;
    }
  }
}
function ki(t) {
  var e = ar;
  ar = !0;
  try {
    for (var r; ; ) {
      if (hi(), te === null)
        return (
          /** @type {T} */
          r
        );
      te.flush();
    }
  } finally {
    ar = e;
  }
}
function Ei() {
  try {
    si();
  } catch (t) {
    Qe(t, Gr);
  }
}
let lt = null;
function bn(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var n = t[r++];
      if ((n.f & (Ie | Pe)) === 0 && cr(n) && (lt = /* @__PURE__ */ new Set(), Vt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && oa(n), lt?.size > 0)) {
        et.clear();
        for (const a of lt) {
          if ((a.f & (Ie | Pe)) !== 0) continue;
          const l = [a];
          let s = a.parent;
          for (; s !== null; )
            lt.has(s) && (lt.delete(s), l.push(s)), s = s.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const f = l[o];
            (f.f & (Ie | Pe)) === 0 && Vt(f);
          }
        }
        lt.clear();
      }
    }
    lt = null;
  }
}
function Gn(t, e, r, n) {
  if (!r.has(t) && (r.add(t), t.reactions !== null))
    for (const a of t.reactions) {
      const l = a.f;
      (l & Me) !== 0 ? Gn(
        /** @type {Derived} */
        a,
        e,
        r,
        n
      ) : (l & (Dt | Ge)) !== 0 && (l & we) === 0 && sn(a, e, n) && (pe(a, we), fn(
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
      if (pr.call(e, a))
        return !0;
      if ((a.f & Me) !== 0 && sn(
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
  te.schedule(t);
}
function Xn(t, e) {
  if (!((t.f & Ye) !== 0 && (t.f & ke) !== 0)) {
    (t.f & we) !== 0 ? e.d.push(t) : (t.f & ze) !== 0 && e.m.push(t), pe(t, ke);
    for (var r = t.first; r !== null; )
      Xn(r, e), r = r.next;
  }
}
function Jn(t) {
  pe(t, ke);
  for (var e = t.first; e !== null; )
    Jn(e), e = e.next;
}
let xr = /* @__PURE__ */ new Set();
const et = /* @__PURE__ */ new Map();
let Kn = !1;
function Lt(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Dn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function H(t, e) {
  const r = Lt(t);
  return ua(r), r;
}
// @__NO_SIDE_EFFECTS__
function Si(t, e = !1, r = !0) {
  const n = Lt(t);
  return e || (n.equals = jn), n;
}
function w(t, e, r = !1) {
  ae !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ke || (ae.f & br) !== 0) && Bn() && (ae.f & (Me | Ge | Dt | br)) !== 0 && (tt === null || !tt.has(t)) && di();
  let n = r ? ye(e) : e;
  return Ht(t, n, _r);
}
var Et = null, Xr = 0;
function Ht(t, e, r = null) {
  if (!t.equals(e)) {
    dt ? et.set(t, e) : et.has(t) || et.set(t, t.v);
    var n = wt.ensure();
    if (n.capture(t, e), (t.f & Me) !== 0) {
      const a = (
        /** @type {Derived} */
        t
      );
      (t.f & we) !== 0 && on(a), Xe === null && an(a);
    }
    t.wv = da(), Et = null, Xr = 0, Zn(t, we, r), Et = null, ie !== null && (ie.f & ke) !== 0 && (ie.f & (Ye | ct)) === 0 && (He === null ? Ii([t]) : He.push(t)), !n.is_fork && xr.size > 0 && !Kn && Ai();
  }
  return e;
}
function Ai() {
  Kn = !1;
  for (const t of xr) {
    (t.f & ke) !== 0 && pe(t, ze);
    let e;
    try {
      e = cr(t);
    } catch {
      e = !0;
    }
    e && Vt(t);
  }
  xr.clear();
}
function lr(t) {
  w(t, t.v + 1);
}
function Zn(t, e, r) {
  var n = t.reactions;
  if (n !== null) {
    var a = n.length;
    if (Xr += a, Xr > 1e5 && Et === null && (Et = /* @__PURE__ */ new Set()), Et !== null) {
      if (Et.has(t)) return;
      Et.add(t);
    }
    for (var l = 0; l < a; l++) {
      var s = n[l], o = s.f, f = (o & we) === 0;
      if (f && pe(s, e), (o & br) !== 0)
        xr.add(
          /** @type {Effect} */
          s
        );
      else if ((o & Me) !== 0) {
        var c = (
          /** @type {Derived} */
          s
        );
        Xe?.delete(c), Zn(c, ze, r);
      } else if (f) {
        var d = (
          /** @type {Effect} */
          s
        );
        (o & Ge) !== 0 && lt !== null && lt.add(d), r !== null ? r.push(d) : fn(d);
      }
    }
  }
}
function ye(t) {
  if (typeof t != "object" || t === null || st in t || On in t)
    return t;
  const e = tn(t);
  if (e !== Oa && e !== Na)
    return t;
  var r = /* @__PURE__ */ new Map(), n = Ar(t), a = /* @__PURE__ */ H(0), l = Tt, s = (o) => {
    if (Tt === l)
      return o();
    var f = ae, c = Tt;
    We(null), xn(l);
    var d = o();
    return We(f), xn(c), d;
  };
  return n && r.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ui();
        var d = r.get(f);
        return d === void 0 ? s(() => {
          var u = /* @__PURE__ */ H(c.value);
          return r.set(f, u), u;
        }) : w(d, c.value, !0), !0;
      },
      deleteProperty(o, f) {
        var c = r.get(f);
        if (c === void 0) {
          if (f in o) {
            const d = s(() => /* @__PURE__ */ H(xe));
            r.set(f, d), lr(a);
          }
        } else
          w(c, xe), lr(a);
        return !0;
      },
      get(o, f, c) {
        if (f === st)
          return t;
        var d = r.get(f), u = f in o;
        if (d === void 0 && (!u || It(o, f)?.writable) && (d = s(() => {
          var _ = ye(u ? o[f] : xe), p = /* @__PURE__ */ H(_);
          return p;
        }), r.set(f, d)), d !== void 0) {
          var h = i(d);
          return h === xe ? void 0 : h;
        }
        return Reflect.get(o, f, c);
      },
      getOwnPropertyDescriptor(o, f) {
        this.has?.(o, f);
        var c = Reflect.getOwnPropertyDescriptor(o, f), d = r.get(f);
        if (d !== void 0) {
          var u = i(d);
          if (u === xe)
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
      has(o, f) {
        if (f === st)
          return !0;
        var c = r.get(f), d = c !== void 0 && c.v !== xe || Reflect.has(o, f);
        if (c !== void 0 || ie !== null && (!d || It(o, f)?.writable)) {
          c === void 0 && (c = s(() => {
            var h = d ? ye(o[f]) : xe, _ = /* @__PURE__ */ H(h);
            return _;
          }), r.set(f, c));
          var u = i(c);
          if (u === xe)
            return !1;
        }
        return d;
      },
      set(o, f, c, d) {
        var u = r.get(f), h = f in o;
        if (n && f === "length")
          for (var _ = c; _ < /** @type {Source<number>} */
          u.v; _ += 1) {
            var p = r.get(_ + "");
            p !== void 0 ? w(p, xe) : _ in o && (p = s(() => /* @__PURE__ */ H(xe)), r.set(_ + "", p));
          }
        if (u === void 0)
          (!h || It(o, f)?.writable) && (u = s(() => /* @__PURE__ */ H(void 0)), w(u, ye(c)), r.set(f, u));
        else {
          h = u.v !== xe;
          var L = s(() => ye(c));
          w(u, L);
        }
        var g = Reflect.getOwnPropertyDescriptor(o, f);
        if (g?.set && g.set.call(d, c), !h) {
          if (n && typeof f == "string") {
            var E = (
              /** @type {Source<number>} */
              r.get("length")
            ), q = Number(f);
            Number.isInteger(q) && q >= E.v && w(E, q + 1);
          }
          lr(a);
        }
        return !0;
      },
      ownKeys(o) {
        i(a);
        var f = Reflect.ownKeys(o).filter((u) => {
          var h = r.get(u);
          return h === void 0 || h.v !== xe;
        });
        for (var [c, d] of r)
          d.v !== xe && !(c in o) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        ci();
      }
    }
  );
}
function yn(t) {
  try {
    if (t !== null && typeof t == "object" && st in t)
      return t[st];
  } catch {
  }
  return t;
}
function Qn(t, e) {
  return Object.is(yn(t), yn(e));
}
var Jr, $n, ea, ta;
function Ci() {
  if (Jr === void 0) {
    Jr = window, $n = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    ea = It(e, "firstChild").get, ta = It(e, "nextSibling").get, gn(t) && (t[Vr] = void 0, t[Nn] = null, t[zr] = void 0, t.__e = void 0), gn(r) && (r[Yr] = void 0);
  }
}
function ft(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Je(t) {
  return (
    /** @type {TemplateNode | null} */
    ea.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function ur(t) {
  return (
    /** @type {TemplateNode | null} */
    ta.call(t)
  );
}
function k(t, e) {
  return /* @__PURE__ */ Je(t);
}
function ue(t, e = !1) {
  {
    var r = /* @__PURE__ */ Je(t);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ur(r) : r;
  }
}
function U(t, e = !1) {
  return /* @__PURE__ */ Je(t);
}
function v(t, e = 1, r = !1) {
  let n = t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ur(n);
  return n;
}
function Ti(t) {
  t.textContent = "";
}
function ra() {
  return !1;
}
function na(t, e, r) {
  return e == null || e === In ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    r ? document.createElement(t, { is: r }) : document.createElement(t)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    r ? document.createElementNS(e, t, { is: r }) : document.createElementNS(e, t)
  );
}
function Li(t) {
  var e = ie;
  if (e === null)
    return ae.f |= mt, t;
  if ((e.f & Gt) === 0 && (e.f & qt) === 0)
    throw t;
  Qe(t, e);
}
function Qe(t, e) {
  if (!(e !== null && (e.f & Ie) !== 0)) {
    for (; e !== null; ) {
      if ((e.f & Hr) !== 0 && (e.f & (Ie | mr)) === 0) {
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
  ie === null && (ae === null && oi(), li()), dt && ii();
}
function Mi(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function vt(t, e) {
  var r = ie;
  r !== null && (r.f & Pe) !== 0 && (t |= Pe);
  var n = {
    ctx: Ce,
    deps: null,
    nodes: null,
    f: t | we | Ze,
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
  te?.register_created_effect(n);
  var a = n;
  if ((t & qt) !== 0)
    ir !== null ? ir.push(n) : wt.ensure().schedule(n);
  else if (e !== null) {
    try {
      Vt(n);
    } catch (s) {
      throw qe(n), s;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Xt) === 0 && (a = a.first, (t & Ge) !== 0 && (t & Bt) !== 0 && a !== null && (a.f |= Bt));
  }
  if (a !== null && (a.parent = r, r !== null && Mi(a, r), ae !== null && (ae.f & Me) !== 0 && (t & ct) === 0)) {
    var l = (
      /** @type {Derived} */
      ae
    );
    (l.effects ??= []).push(a);
  }
  return n;
}
function un() {
  return ae !== null && !Ke;
}
function Lr(t) {
  const e = vt(Tr, null);
  return pe(e, ke), e.teardown = t, e;
}
function Ft(t) {
  Ri();
  var e = (
    /** @type {Effect} */
    ie.f
  ), r = !ae && (e & Ye) !== 0 && Ce !== null && !Ce.i;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ce
    );
    (n.e ??= []).push(t);
  } else
    return aa(t);
}
function aa(t) {
  return vt(qt | ja, t);
}
function Oi(t) {
  wt.ensure();
  const e = vt(ct | Xt, t);
  return (r = {}) => new Promise((n) => {
    r.outro ? Ct(e, () => {
      qe(e), n(void 0);
    }) : (qe(e), n(void 0));
  });
}
function cn(t) {
  return vt(qt, t);
}
function Ni(t) {
  return vt(Dt | Xt, t);
}
function Kt(t, e = 0) {
  return vt(Tr | e, t);
}
function M(t, e = [], r = [], n = []) {
  pi(n, e, r, (a) => {
    vt(Tr, () => {
      t(...a.map(i));
    });
  });
}
function Rr(t, e = 0) {
  var r = vt(Ge | e, t);
  return r;
}
function Ve(t) {
  return vt(Ye | Xt, t);
}
function ia(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = dt, n = ae;
    wn(!0), We(null);
    try {
      e.call(null);
    } catch (a) {
      Qe(a, t.parent);
    } finally {
      wn(r), We(n);
    }
  }
}
function dn(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Jt(() => {
      a.abort(fr);
    });
    var n = r.next;
    (r.f & ct) !== 0 ? r.parent = null : qe(r, e), r = n;
  }
}
function Pi(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & Ye) === 0 && qe(e), e = r;
  }
}
function qe(t, e = !0) {
  var r = !1;
  (e || (t.f & Fa) !== 0) && t.nodes !== null && t.nodes.end !== null && (la(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), r = !0), t.f |= mr, dn(t, e && !r), sr(t, 0);
  var n = t.nodes && t.nodes.t;
  if (n !== null)
    for (const l of n)
      l.stop();
  ia(t), t.f ^= mr, t.f |= Ie;
  var a = t.parent;
  a !== null && a.first !== null && oa(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function la(t, e) {
  for (; t !== null; ) {
    var r = t === e ? null : /* @__PURE__ */ ur(t);
    t.remove(), t = r;
  }
}
function oa(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Ct(t, e, r = !0) {
  var n = [];
  t.f |= rn, sa(t, n, !0);
  var a = () => {
    r && qe(t), e && e();
  }, l = n.length;
  if (l > 0) {
    var s = () => --l || a();
    for (var o of n)
      o.out(s);
  } else
    a();
}
function sa(t, e, r) {
  if ((t.f & Pe) === 0) {
    t.f ^= Pe;
    var n = t.nodes && t.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && e.push(o);
    for (var a = t.first; a !== null; ) {
      var l = a.next;
      if ((a.f & ct) === 0) {
        var s = (a.f & Bt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Ye) !== 0 && (t.f & Ge) !== 0;
        sa(a, e, s ? r : !1);
      }
      a = l;
    }
  }
}
function kr(t) {
  t.f &= ~rn, fa(t, !0);
}
function fa(t, e) {
  if ((t.f & rn) === 0 && (t.f & Pe) !== 0) {
    t.f ^= Pe, (t.f & ke) === 0 && (pe(t, we), wt.ensure().schedule(t));
    for (var r = t.first; r !== null; ) {
      var n = r.next, a = (r.f & Bt) !== 0 || (r.f & Ye) !== 0;
      fa(r, a ? e : !1), r = n;
    }
    var l = t.nodes && t.nodes.t;
    if (l !== null)
      for (const s of l)
        (s.is_global || e) && s.in();
  }
}
function vn(t, e) {
  if (t.nodes)
    for (var r = t.nodes.start, n = t.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ ur(r);
      e.append(r), r = a;
    }
}
let gr = !1, dt = !1;
function wn(t) {
  dt = t;
}
let ae = null, Ke = !1;
function We(t) {
  ae = t;
}
let ie = null;
function nt(t) {
  ie = t;
}
let tt = null;
function ua(t) {
  ae !== null && ((ae.f & yr) !== 0 || (ae.f & Me) !== 0) && (tt ??= /* @__PURE__ */ new Set()).add(t);
}
let je = null, Ue = 0, He = null;
function Ii(t) {
  He = t;
}
let ca = 1, At = 0, Tt = At;
function xn(t) {
  Tt = t;
}
function da() {
  return ++ca;
}
function cr(t) {
  var e = t.f;
  if ((e & we) !== 0)
    return !0;
  if ((e & ze) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      t.deps
    ), n = r.length, a = 0; a < n; a++) {
      var l = r[a];
      if (cr(
        /** @type {Derived} */
        l
      ) && Yn(
        /** @type {Derived} */
        l
      ), l.wv > t.wv)
        return !0;
    }
    (e & Ze) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Xe === null && pe(t, ke);
  }
  return !1;
}
function va(t, e, r = !0) {
  var n = t.reactions;
  if (n !== null && !(tt !== null && tt.has(t)))
    for (var a = 0; a < n.length; a++) {
      var l = n[a];
      (l.f & Me) !== 0 ? va(
        /** @type {Derived} */
        l,
        e,
        !1
      ) : e === l && (r ? pe(l, we) : (l.f & ke) !== 0 && pe(l, ze), fn(
        /** @type {Effect} */
        l
      ));
    }
}
function ha(t) {
  var e = je, r = Ue, n = He, a = ae, l = tt, s = Ce, o = Ke, f = Tt, c = t.f;
  je = /** @type {null | Value[]} */
  null, Ue = 0, He = null, ae = (c & (Ye | ct)) === 0 ? t : null, tt = null, Ut(t.ctx), Ke = !1, Tt = ++At, t.ac !== null && (Jt(() => {
    t.ac.abort(fr);
  }), t.ac = null);
  try {
    t.f |= yr;
    var d = (
      /** @type {Function} */
      t.fn
    ), u = d();
    t.f |= Gt;
    var h = kn(t);
    if (Bn() && He !== null && !Ke && h !== null && (t.f & (Me | ze | we)) === 0)
      for (var _ = 0; _ < /** @type {Source[]} */
      He.length; _++)
        va(
          He[_],
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
    return (t.f & mt) !== 0 && (t.f ^= mt), u;
  } catch (p) {
    return kn(t), Li(p);
  } finally {
    t.f ^= yr, je = e, Ue = r, He = n, ae = a, tt = l, Ut(s), Ke = o, Tt = f;
  }
}
function kn(t) {
  var e = t.deps, r = te?.is_fork;
  if (je !== null) {
    var n;
    if (r || sr(t, Ue), e !== null && Ue > 0)
      for (e.length = Ue + je.length, n = 0; n < je.length; n++)
        e[Ue + n] = je[n];
    else
      t.deps = e = je;
    if (un() && (t.f & Ze) !== 0)
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
  if (r === null && (e.f & Me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (je === null || !pr.call(je, e))) {
    var l = (
      /** @type {Derived} */
      e
    );
    (l.f & Ze) !== 0 && (l.f ^= Ze), l.v !== xe && an(l), l.ac !== null && Jt(() => {
      l.ac.abort(fr), l.ac = null, pe(l, we);
    }), wi(l), sr(l, 0);
  }
}
function sr(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      Di(t, r[n]);
}
function Vt(t) {
  var e = t.f;
  if ((e & Ie) === 0) {
    pe(t, ke);
    var r = ie, n = gr;
    ie = t, gr = (e & (Ye | ct)) === 0;
    try {
      (e & (Ge | Mn)) !== 0 ? Pi(t) : dn(t), ia(t);
      var a = ha(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = ca;
      var l;
    } finally {
      gr = n, ie = r;
    }
  }
}
async function Er() {
  await Promise.resolve(), ki();
}
function i(t) {
  var e = t.f, r = (e & Me) !== 0;
  if (ae !== null && !Ke) {
    var n = ie !== null && (ie.f & Ie) !== 0;
    if (!n && (tt === null || !tt.has(t))) {
      var a = ae.deps;
      if ((ae.f & yr) !== 0)
        t.rv < At && (t.rv = At, je === null && a !== null && a[Ue] === t ? Ue++ : je === null ? je = [t] : je.push(t));
      else {
        ae.deps ??= [], pr.call(ae.deps, t) || ae.deps.push(t);
        var l = t.reactions;
        l === null ? t.reactions = [ae] : pr.call(l, ae) || l.push(ae);
      }
    }
  }
  if (dt && et.has(t))
    return et.get(t);
  if (r) {
    var s = (
      /** @type {Derived} */
      t
    );
    if (dt) {
      var o = s.v;
      return ((s.f & ke) === 0 && s.reactions !== null || ga(s)) && (o = on(s)), et.set(s, o), o;
    }
    var f = (s.f & Ze) === 0 && !Ke && ae !== null && (gr || (ae.f & Ze) !== 0), c = (s.f & Gt) === 0;
    cr(s) && (f && (s.f |= Ze), Yn(s)), f && !c && (Wn(s), _a(s));
  }
  if (Xe?.has(t))
    return Xe.get(t);
  if ((t.f & mt) !== 0)
    throw t.v;
  return t.v;
}
function _a(t) {
  if (t.f |= Ze, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Me) !== 0 && (e.f & Ze) === 0 && (Wn(
        /** @type {Derived} */
        e
      ), _a(
        /** @type {Derived} */
        e
      ));
}
function ga(t) {
  if (t.v === xe) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (et.has(e) || (e.f & Me) !== 0 && ga(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Be(t) {
  var e = Ke;
  try {
    return Ke = !0, t();
  } finally {
    Ke = e;
  }
}
function Fi(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (st in t)
      Kr(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const r = t[e];
        typeof r == "object" && r && st in r && Kr(r);
      }
  }
}
function Kr(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let n in t)
      try {
        Kr(t[n], e);
      } catch {
      }
    const r = tn(t);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = Ln(r);
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
const rr = /* @__PURE__ */ Symbol("events"), pa = /* @__PURE__ */ new Set(), Zr = /* @__PURE__ */ new Set();
function Bi(t, e, r, n = {}) {
  function a(l) {
    if (n.capture || Qr.call(e, l), !l.cancelBubble)
      return Jt(() => r?.call(this, l));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? (a.__removed = !1, ot(() => {
    a.__removed || e.addEventListener(t, a, n);
  })) : e.addEventListener(t, a, n), a;
}
function bt(t, e, r, n, a) {
  var l = { capture: n, passive: a }, s = Bi(t, e, r, l);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Lr(() => {
    s.__removed = !0, e.removeEventListener(t, s, l);
  });
}
function he(t, e, r) {
  (e[rr] ??= {})[t] = r;
}
function ht(t) {
  for (var e = 0; e < t.length; e++)
    pa.add(t[e]);
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
  var s = 0, o = Ir === t && t[rr];
  if (o) {
    var f = a.indexOf(o);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[rr] = e;
      return;
    }
    var c = a.indexOf(e);
    if (c === -1)
      return;
    f <= c && (s = f);
  }
  if (l = /** @type {Element} */
  a[s] || t.target, l !== e) {
    Tn(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var d = ae, u = ie;
    We(null), nt(null);
    try {
      for (var h, _ = []; l !== null && l !== e; ) {
        try {
          var p = l[rr]?.[n];
          p != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === l) && p.call(l, t);
        } catch (L) {
          h ? _.push(L) : h = L;
        }
        if (t.cancelBubble) break;
        s++, l = s < a.length ? (
          /** @type {Element} */
          a[s]
        ) : null;
      }
      if (h) {
        for (let L of _)
          queueMicrotask(() => {
            throw L;
          });
        throw h;
      }
    } finally {
      t[rr] = e, delete t.currentTarget, We(d), nt(u);
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
function ma(t) {
  var e = na("template");
  return e.innerHTML = Hi(t.replaceAll("<!>", "<!---->")), e.content;
}
function Rt(t, e) {
  var r = (
    /** @type {Effect} */
    ie
  );
  r.nodes === null && (r.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function C(t, e) {
  var r = (e & Ka) !== 0, n = (e & Za) !== 0, a, l = !t.startsWith("<!>");
  return () => {
    a === void 0 && (a = ma(l ? t : "<!>" + t), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(a)));
    var s = (
      /** @type {TemplateNode} */
      n || $n ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(s)
      ), f = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Rt(o, f);
    } else
      Rt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Vi(t, e, r = "svg") {
  var n = !t.startsWith("<!>"), a = `<${r}>${n ? t : "<!>" + t}</${r}>`, l;
  return () => {
    if (!l) {
      var s = (
        /** @type {DocumentFragment} */
        ma(a)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Je(s)
      );
      l = /** @type {Element} */
      /* @__PURE__ */ Je(o);
    }
    var f = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    return Rt(f, f), f;
  };
}
// @__NO_SIDE_EFFECTS__
function zi(t, e) {
  return /* @__PURE__ */ Vi(t, e, "svg");
}
function rt(t = "") {
  {
    var e = ft(t + "");
    return Rt(e, e), e;
  }
}
function ut() {
  var t = document.createDocumentFragment(), e = document.createComment(""), r = ft();
  return t.append(e, r), Rt(e, r), t;
}
function y(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Yi(t) {
  let e = 0, r = Lt(0), n;
  return () => {
    un() && (i(r), Kt(() => (e === 0 && (n = Be(() => t(() => lr(r)))), e += 1, () => {
      ot(() => {
        e -= 1, e === 0 && (n?.(), n = void 0, lr(r));
      });
    })));
  };
}
var Wi = Bt | Xt;
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
  #b = Yi(() => (this.#c = Lt(this.#h), () => {
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
      var s = (
        /** @type {Effect} */
        ie
      );
      s.b = this, s.f |= Hr, n(l);
    }, this.parent = /** @type {Effect} */
    ie.b, this.transform_error = a ?? this.parent?.transform_error ?? ((l) => l), this.#n = Rr(() => {
      this.#y();
    }, Wi);
  }
  #x() {
    try {
      this.#i = Ve(() => this.#s(this.#t));
    } catch (e) {
      this.error(e);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #p(e) {
    const r = this.#e.failed, { reset: n, invoke_onerror: a } = this.#m(e);
    ot(a), r && (this.#o = Ve(() => {
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
      r = !0, n && vi(), this.#o !== null && Ct(this.#o, () => {
        this.#o = null;
      }), this.#w(() => {
        this.#y();
      });
    };
    return { reset: a, invoke_onerror: () => {
      try {
        n = !0, this.#e.onerror?.(e, a), n = !1;
      } catch (s) {
        Qe(s, this.#n && this.#n.parent);
      }
    } };
  }
  #k() {
    const e = this.#e.pending;
    e && (this.is_pending = !0, this.#r = Ve(() => e(this.#t)), ot(() => {
      var r = this.#a = document.createDocumentFragment(), n = ft(), a = !1;
      if (r.append(n), this.#i = this.#w(() => {
        try {
          return Ve(() => this.#s(n));
        } catch (l) {
          try {
            this.error(l), a = !0;
          } catch (s) {
            Qe(s, this.#n.parent);
          }
          return null;
        }
      }), this.#i === null) {
        this.#a = null, a && this.#v(
          /** @type {Batch} */
          te
        );
        return;
      }
      this.#f === 0 && (this.#t.before(r), this.#a = null, Ct(
        /** @type {Effect} */
        this.#r,
        () => {
          this.#r = null;
        }
      ), this.#v(
        /** @type {Batch} */
        te
      ));
    }));
  }
  #y() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#f = 0, this.#h = 0, this.#i = Ve(() => {
        this.#s(this.#t);
      }), this.#f > 0) {
        var e = this.#a = document.createDocumentFragment();
        vn(this.#i, e);
        const r = (
          /** @type {(anchor: Node) => void} */
          this.#e.pending
        );
        this.#r = Ve(() => r(this.#t));
      } else
        this.#v(
          /** @type {Batch} */
          te
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
    Hn(e, this.#d, this.#g);
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
    var r = ie, n = ae, a = Ce;
    nt(this.#n), We(this.#n), Ut(this.#n.ctx);
    try {
      return wt.ensure(), e();
    } finally {
      nt(r), We(n), Ut(a);
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
    this.#f += e, this.#f === 0 && (this.#v(r), this.#r && Ct(this.#r, () => {
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
    this.#_(e, r), this.#h += e, !(!this.#c || this.#u) && (this.#u = !0, ot(() => {
      this.#u = !1, this.#c && Ht(this.#c, this.#h);
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
    te?.is_fork ? (this.#i && te.skip_effect(this.#i), this.#r && te.skip_effect(this.#r), this.#o && te.skip_effect(this.#o), te.oncommit(() => {
      this.#E(e);
    })) : this.#E(e);
  }
  /**
   * @param {unknown} error
   */
  #E(e) {
    this.#i && (qe(this.#i), this.#i = null), this.#r && (qe(this.#r), this.#r = null), this.#o && (qe(this.#o), this.#o = null);
    let r = this.#e.failed;
    const n = (a) => {
      const { reset: l, invoke_onerror: s } = this.#m(a);
      s(), r && (this.#o = this.#w(() => {
        try {
          return Ve(() => {
            var o = (
              /** @type {Effect} */
              ie
            );
            o.b = this, o.f |= Hr, r(
              this.#t,
              () => a,
              () => l
            );
          });
        } catch (o) {
          return Qe(
            o,
            /** @type {Effect} */
            this.#n.parent
          ), null;
        }
      }));
    };
    ot(() => {
      var a;
      try {
        a = this.transform_error(e);
      } catch (l) {
        Qe(l, this.#n && this.#n.parent);
        return;
      }
      a !== null && typeof a == "object" && typeof /** @type {any} */
      a.then == "function" ? a.then(
        n,
        /** @param {unknown} e */
        (l) => Qe(l, this.#n && this.#n.parent)
      ) : n(a);
    });
  }
}
function N(t, e) {
  var r = e == null ? "" : typeof e == "object" ? `${e}` : e;
  r !== /** @type {any} */
  (t[Yr] ??= t.nodeValue) && (t[Yr] = r, t.nodeValue = `${r}`);
}
function Ji(t, e) {
  return Ki(t, e);
}
const dr = /* @__PURE__ */ new Map();
function Ki(t, { target: e, anchor: r, props: n = {}, events: a, context: l, intro: s = !0, transformError: o }) {
  Ci();
  var f = void 0, c = Oi(() => {
    var d = r ?? e.appendChild(ft());
    Gi(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (_) => {
        Oe({});
        var p = (
          /** @type {ComponentContext} */
          Ce
        );
        l && (p.c = l), a && (n.$$events = a), f = t(_, n) || nn(), Ne();
      },
      o
    );
    var u = /* @__PURE__ */ new Set(), h = (_) => {
      for (var p = 0; p < _.length; p++) {
        var L = _[p];
        if (!u.has(L)) {
          u.add(L);
          var g = qi(L);
          for (const z of [e, document]) {
            var E = dr.get(z);
            E === void 0 && (E = /* @__PURE__ */ new Map(), dr.set(z, E));
            var q = E.get(L);
            q === void 0 ? (z.addEventListener(L, Qr, { passive: g }), E.set(L, 1)) : E.set(L, q + 1);
          }
        }
      }
    };
    return h(Cr(pa)), Zr.add(h), () => {
      for (var _ of u)
        for (const g of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            dr.get(g)
          ), L = (
            /** @type {number} */
            p.get(_)
          );
          --L == 0 ? (g.removeEventListener(_, Qr), p.delete(_), p.size === 0 && dr.delete(g)) : p.set(_, L);
        }
      Zr.delete(h), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return Zi.set(f, c), f;
}
let Zi = /* @__PURE__ */ new WeakMap();
class ba {
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
        kr(n), this.#s.delete(r);
      else {
        var a = this.#e.get(r);
        a && (kr(a.effect), this.#l.set(r, a.effect), this.#e.delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
      }
      for (const [l, s] of this.#t) {
        if (this.#t.delete(l), l === e)
          break;
        const o = this.#e.get(s);
        o && (qe(o.effect), this.#e.delete(s));
      }
      for (const [l, s] of this.#l) {
        if (l === r || this.#s.has(l)) continue;
        const o = () => {
          if (Array.from(this.#t.values()).includes(l)) {
            var c = document.createDocumentFragment();
            vn(s, c), c.append(ft()), this.#e.set(l, { effect: s, fragment: c });
          } else
            qe(s);
          this.#s.delete(l), this.#l.delete(l);
        };
        this.#n || !n ? (this.#s.add(l), Ct(s, o, !1)) : o();
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
      r.includes(n) || (qe(a.effect), this.#e.delete(n));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, r) {
    var n = (
      /** @type {Batch} */
      te
    ), a = ra();
    if (r && !this.#l.has(e) && !this.#e.has(e))
      if (a) {
        var l = document.createDocumentFragment(), s = ft();
        l.append(s), this.#e.set(e, {
          effect: Ve(() => r(s)),
          fragment: l
        });
      } else
        this.#l.set(
          e,
          Ve(() => r(this.anchor))
        );
    if (this.#t.set(n, e), a) {
      for (const [o, f] of this.#l)
        o === e ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [o, f] of this.#e)
        o === e ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(this.#i), n.ondiscard(this.#r);
    } else
      this.#i(n);
  }
}
function V(t, e, r = !1) {
  var n = new ba(t), a = r ? Bt : 0;
  function l(s, o) {
    n.ensure(s, o);
  }
  Rr(() => {
    var s = !1;
    e((o, f = 0) => {
      s = !0, l(f, o);
    }), s || l(-1, null);
  }, a);
}
const Qi = /* @__PURE__ */ Symbol("NaN");
function $i(t, e, r) {
  var n = new ba(t);
  Rr(() => {
    var a = e();
    a !== a && (a = /** @type {any} */
    Qi), n.ensure(a, r);
  });
}
function be(t, e) {
  return e;
}
function el(t, e, r) {
  for (var n = [], a = e.length, l, s = e.length, o = 0; o < a; o++) {
    let u = e[o];
    Ct(
      u,
      () => {
        if (l) {
          if (l.pending.delete(u), l.done.add(u), l.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            $r(t, Cr(l.done)), h.delete(l), h.size === 0 && (t.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var f = n.length === 0 && r !== null && t.pending.size === 0;
    if (f) {
      var c = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      Ti(d), d.append(c), t.items.clear();
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
    for (const s of t.pending.values())
      for (const o of s)
        n.add(
          /** @type {EachItem} */
          t.items.get(o).e
        );
  }
  for (var a = 0; a < e.length; a++) {
    var l = e[a];
    if (n?.has(l)) {
      l.f |= $e;
      const s = document.createDocumentFragment();
      vn(l, s);
    } else
      qe(e[a], r);
  }
}
var En;
function de(t, e, r, n, a, l = null) {
  var s = t, o = /* @__PURE__ */ new Map(), f = (e & Pn) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      t
    );
    s = c.appendChild(ft());
  }
  var d = null, u = /* @__PURE__ */ zn(() => {
    var z = r();
    return (
      /** @type {V[]} */
      Ar(z) ? z : z == null ? [] : Cr(z)
    );
  }), h, _ = /* @__PURE__ */ new Map(), p = !0;
  function L(z) {
    (q.effect.f & Ie) === 0 && (q.pending.delete(z), q.fallback = d, tl(q, h, s, e, n), d !== null && (h.length === 0 ? (d.f & $e) === 0 ? kr(d) : (d.f ^= $e, nr(d, null, s)) : Ct(d, () => {
      d = null;
    })));
  }
  function g(z) {
    q.pending.delete(z);
  }
  var E = Rr(() => {
    h = /** @type {V[]} */
    i(u);
    for (var z = h.length, O = /* @__PURE__ */ new Set(), b = (
      /** @type {Batch} */
      te
    ), j = ra(), T = 0; T < z; T += 1) {
      var S = h[T], F = n(S, T), B = p ? null : o.get(F);
      B ? (B.v && Ht(B.v, S), B.i && Ht(B.i, T), j && b.unskip_effect(B.e)) : (B = rl(
        o,
        p ? s : En ??= ft(),
        S,
        F,
        T,
        a,
        e,
        r
      ), p || (B.e.f |= $e), o.set(F, B)), O.add(F);
    }
    if (z === 0 && l && !d && (p ? d = Ve(() => l(s)) : (d = Ve(() => l(En ??= ft())), d.f |= $e)), z > O.size && ai(), !p)
      if (_.set(b, O), j) {
        for (const [I, x] of o)
          O.has(I) || b.skip_effect(x.e);
        b.oncommit(L), b.ondiscard(g);
      } else
        L(b);
    i(u);
  }), q = { effect: E, items: o, pending: _, outrogroups: null, fallback: d };
  p = !1;
}
function er(t) {
  for (; t !== null && (t.f & Ye) === 0; )
    t = t.next;
  return t;
}
function tl(t, e, r, n, a) {
  var l = (n & za) !== 0, s = e.length, o = t.items, f = er(t.effect.first), c, d = null, u, h = [], _ = [], p, L, g, E;
  if (l)
    for (E = 0; E < s; E += 1)
      p = e[E], L = a(p, E), g = /** @type {EachItem} */
      o.get(L).e, (g.f & $e) === 0 && (g.nodes?.a?.measure(), (u ??= /* @__PURE__ */ new Set()).add(g));
  for (E = 0; E < s; E += 1) {
    if (p = e[E], L = a(p, E), g = /** @type {EachItem} */
    o.get(L).e, t.outrogroups !== null)
      for (const B of t.outrogroups)
        B.pending.delete(g), B.done.delete(g);
    if ((g.f & Pe) !== 0 && (kr(g), l && (g.nodes?.a?.unfix(), (u ??= /* @__PURE__ */ new Set()).delete(g))), (g.f & $e) !== 0)
      if (g.f ^= $e, g === f)
        nr(g, null, r);
      else {
        var q = d ? d.next : f;
        g === t.effect.last && (t.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), pt(t, d, g), pt(t, g, q), nr(g, q, r), d = g, h = [], _ = [], f = er(d.next);
        continue;
      }
    if (g !== f) {
      if (c !== void 0 && c.has(g)) {
        if (h.length < _.length) {
          var z = _[0], O;
          d = z.prev;
          var b = h[0], j = h[h.length - 1];
          for (O = 0; O < h.length; O += 1)
            nr(h[O], z, r);
          for (O = 0; O < _.length; O += 1)
            c.delete(_[O]);
          pt(t, b.prev, j.next), pt(t, d, b), pt(t, j, z), f = z, d = j, E -= 1, h = [], _ = [];
        } else
          c.delete(g), nr(g, f, r), pt(t, g.prev, g.next), pt(t, g, d === null ? t.effect.first : d.next), pt(t, d, g), d = g;
        continue;
      }
      for (h = [], _ = []; f !== null && f !== g; )
        (c ??= /* @__PURE__ */ new Set()).add(f), _.push(f), f = er(f.next);
      if (f === null)
        continue;
    }
    (g.f & $e) === 0 && h.push(g), d = g, f = er(g.next);
  }
  if (t.outrogroups !== null) {
    for (const B of t.outrogroups)
      B.pending.size === 0 && ($r(t, Cr(B.done)), t.outrogroups?.delete(B));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (f !== null || c !== void 0) {
    var T = [];
    if (c !== void 0)
      for (g of c)
        (g.f & Pe) === 0 && T.push(g);
    for (; f !== null; )
      (f.f & Pe) === 0 && f !== t.fallback && T.push(f), f = er(f.next);
    var S = T.length;
    if (S > 0) {
      var F = (n & Pn) !== 0 && s === 0 ? r : null;
      if (l) {
        for (E = 0; E < S; E += 1)
          T[E].nodes?.a?.measure();
        for (E = 0; E < S; E += 1)
          T[E].nodes?.a?.fix();
      }
      el(t, T, F);
    }
  }
  l && ot(() => {
    if (u !== void 0)
      for (g of u)
        g.nodes?.a?.apply();
  });
}
function rl(t, e, r, n, a, l, s, o) {
  var f = (s & Ha) !== 0 ? (s & Ya) === 0 ? /* @__PURE__ */ Si(r, !1, !1) : Lt(r) : null, c = (s & Va) !== 0 ? Lt(a) : null;
  return {
    v: f,
    i: c,
    e: Ve(() => (l(e, f ?? r, c ?? a, o), () => {
      t.delete(n);
    }))
  };
}
function nr(t, e, r) {
  if (t.nodes)
    for (var n = t.nodes.start, a = t.nodes.end, l = e && (e.f & $e) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : r; n !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ur(n)
      );
      if (l.before(n), n === a)
        return;
      n = s;
    }
}
function pt(t, e, r) {
  e === null ? t.effect.first = r : e.next = r, r === null ? t.effect.last = e : r.prev = e;
}
function yt(t, e, r = !1, n = !1, a = !1, l = !1) {
  var s = t, o = "";
  if (r)
    var f = (
      /** @type {Element} */
      t
    );
  M(() => {
    var c = (
      /** @type {Effect} */
      ie
    );
    if (o !== (o = e() ?? "")) {
      if (r) {
        c.nodes = null, f.innerHTML = /** @type {string} */
        o, o !== "" && Rt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Je(f),
          /** @type {TemplateNode} */
          f.lastChild
        );
        return;
      }
      if (c.nodes !== null && (la(
        c.nodes.start,
        /** @type {TemplateNode} */
        c.nodes.end
      ), c.nodes = null), o !== "") {
        var d = n ? Qa : a ? $a : void 0, u = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          na(n ? "svg" : a ? "math" : "template", d)
        );
        u.innerHTML = /** @type {any} */
        o;
        var h = n || a ? u : (
          /** @type {HTMLTemplateElement} */
          u.content
        );
        if (Rt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Je(h),
          /** @type {TemplateNode} */
          h.lastChild
        ), n || a)
          for (; /* @__PURE__ */ Je(h); )
            s.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Je(h)
            );
        else
          s.before(h);
      }
    }
  });
}
function zt(t, e, r) {
  cn(() => {
    var n = Be(() => e(t, r?.()) || {});
    if (r && n?.update) {
      var a = !1, l = (
        /** @type {any} */
        {}
      );
      Kt(() => {
        var s = r();
        Fi(s), a && Fn(l, s) && (l = s, n.update(s));
      }), a = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function ya(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var a = t.length;
    for (e = 0; e < a; e++) t[e] && (r = ya(t[e])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function nl() {
  for (var t, e, r = 0, n = "", a = arguments.length; r < a; r++) (t = arguments[r]) && (e = ya(t)) && (n && (n += " "), n += e);
  return n;
}
function al(t) {
  return typeof t == "object" ? nl(t) : t ?? "";
}
const Sn = [...` 	
\r\f \v\uFEFF`];
function il(t, e, r) {
  var n = t == null ? "" : "" + t;
  if (e && (n = n ? n + " " + e : e), r) {
    for (var a of Object.keys(r))
      if (r[a])
        n = n ? n + " " + a : a;
      else if (n.length)
        for (var l = a.length, s = 0; (s = n.indexOf(a, s)) >= 0; ) {
          var o = s + l;
          (s === 0 || Sn.includes(n[s - 1])) && (o === n.length || Sn.includes(n[o])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(o + 1) : s = o;
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
      var l = !1, s = 0, o = !1, f = [];
      n && f.push(...Object.keys(n).map(Fr)), a && f.push(...Object.keys(a).map(Fr));
      var c = 0, d = -1;
      const L = t.length;
      for (var u = 0; u < L; u++) {
        var h = t[u];
        if (o ? h === "/" && t[u - 1] === "*" && (o = !1) : l ? l === h && (l = !1) : h === "/" && t[u + 1] === "*" ? o = !0 : h === '"' || h === "'" ? l = h : h === "(" ? s++ : h === ")" && s--, !o && l === !1 && s === 0) {
          if (h === ":" && d === -1)
            d = u;
          else if (h === ";" || u === L - 1) {
            if (d !== -1) {
              var _ = Fr(t.substring(c, d).trim());
              if (!f.includes(_)) {
                h !== ";" && u++;
                var p = t.substring(c, u).trim();
                r += " " + p + ";";
              }
            }
            c = u + 1, d = -1;
          }
        }
      }
    }
    return n && (r += An(n)), a && (r += An(a, !0)), r = r.trim(), r === "" ? null : r;
  }
  return t == null ? null : String(t);
}
function Te(t, e, r, n, a, l) {
  var s = (
    /** @type {any} */
    t[Vr]
  );
  if (s !== r || s === void 0) {
    var o = il(r, n, l);
    o == null ? t.removeAttribute("class") : t.className = o, t[Vr] = r;
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
function Pt(t, e, r, n) {
  var a = (
    /** @type {any} */
    t[zr]
  );
  if (a !== e) {
    var l = ll(e, n);
    l == null ? t.removeAttribute("style") : t.style.cssText = l, t[zr] = e;
  } else n && (Array.isArray(n) ? (jr(t, r?.[0], n[0]), jr(t, r?.[1], n[1], "important")) : jr(t, r, n));
  return n;
}
function ol(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function sl(t, e) {
  var r = t.__defaultValue, n = t.multiple, a = n ? r ?? [] : null;
  if (!(n && !Ar(a))) {
    t.selectedIndex;
    for (var l of t.options) {
      var s = jt(l);
      ol(
        l,
        n ? (
          /** @type {any[]} */
          a.includes(s)
        ) : Qn(s, r)
      );
    }
  }
}
function hn(t, e, r = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ar(e))
      return ti();
    for (var n of t.options)
      n.selected = e.includes(jt(n));
    return;
  }
  for (n of t.options) {
    var a = jt(n);
    if (Qn(a, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function wa(t) {
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
    var s = l ? "[selected]" : ":checked", o;
    if (t.multiple)
      o = [].map.call(t.querySelectorAll(s), jt);
    else {
      var f = t.querySelector(s) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      o = f && jt(f);
    }
    r(o), t.__value = o, te !== null && n.add(te);
  }), cn(() => {
    var l = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        te
      );
      if (n.has(s))
        return;
    }
    if (hn(t, l, a), a && l === void 0) {
      var o = t.querySelector(":checked");
      o !== null && (l = jt(o), r(l));
    }
    t.__value = l, a = !1;
  });
}
function jt(t) {
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
function xa(t, e) {
  var r = ka(t);
  r.value === (r.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== vl) || (t.value = e ?? "");
}
function W(t, e, r, n) {
  var a = ka(t);
  a[e] !== (a[e] = r) && (e === "loading" && (t[Ba] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && hl(t).has(e) ? t[e] = r : t.setAttribute(e, r));
}
function ka(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[Nn] ??= {
      [cl]: t.nodeName.includes("-"),
      [dl]: t.namespaceURI === In
    }
  );
}
var Cn = /* @__PURE__ */ new Map();
function hl(t) {
  var e = t.getAttribute("is") || t.nodeName, r = Cn.get(e);
  if (r) return r;
  Cn.set(e, r = /* @__PURE__ */ new Set());
  for (var n, a = t, l = Element.prototype; l !== a; ) {
    n = Ln(a);
    for (var s in n)
      n[s].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      s !== "innerHTML" && s !== "textContent" && s !== "innerText" && r.add(s);
    a = tn(a);
  }
  return r;
}
function Sr(t, e, r = e) {
  var n = /* @__PURE__ */ new WeakSet();
  ln(t, "input", async (a) => {
    var l = a ? t.defaultValue : t.value;
    if (l = qr(t) ? Br(l) : l, r(l), te !== null && n.add(te), await Er(), l !== (l = e())) {
      var s = t.selectionStart, o = t.selectionEnd, f = t.value.length;
      if (t.value = l ?? "", o !== null) {
        var c = t.value.length;
        s === o && o === f && c > f ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = s, t.selectionEnd = Math.min(o, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Be(e) == null && t.value && (r(qr(t) ? Br(t.value) : t.value), te !== null && n.add(te)), Kt(() => {
    var a = e();
    if (t === document.activeElement) {
      var l = (
        /** @type {Batch} */
        te
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
  Be(e) == null && r(t.checked), Kt(() => {
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
  return t === e || t?.[st] === e;
}
function Yt(t = nn(), e, r, n) {
  var a = (
    /** @type {ComponentContext} */
    Ce.r
  ), l = (
    /** @type {Effect} */
    ie
  );
  return cn(() => {
    var s, o;
    return Kt(() => {
      s = o, o = [], Be(() => {
        Ur(r(...o), t) || (e(t, ...o), s && Ur(r(...s), t) && e(null, ...s));
      });
    }), () => {
      let f = l;
      for (; f !== a && f.parent !== null && f.parent.f & mr; )
        f = f.parent;
      const c = () => {
        o && Ur(r(...o), t) && e(null, ...o);
      }, d = f.teardown;
      f.teardown = () => {
        c(), d?.();
      };
    };
  }), t;
}
function gl(t, e, r, n, a) {
  var l = () => {
    n(r[t]);
  };
  r.addEventListener(e, l), a ? Kt(() => {
    r[t] = a();
  }) : l(), (r === document.body || r === window || r === document) && Lr(() => {
    r.removeEventListener(e, l);
  });
}
let vr = !1;
function pl(t) {
  var e = vr;
  try {
    return vr = !1, [t(), vr];
  } finally {
    vr = e;
  }
}
function Wt(t, e, r, n) {
  var a = !0, l = (r & Xa) !== 0, s = (r & Ja) !== 0, o = (
    /** @type {V} */
    n
  ), f = !0, c = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), d = () => s && a ? (c ??= /* @__PURE__ */ or(
    /** @type {() => V} */
    n
  ), i(c)) : (f && (f = !1, o = s ? Be(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), o);
  let u;
  if (l) {
    var h = st in t || qa in t;
    u = It(t, e)?.set ?? (h && e in t ? (O) => t[e] = O : void 0);
  }
  var _, p = !1;
  l ? [_, p] = pl(() => (
    /** @type {V} */
    t[e]
  )) : _ = /** @type {V} */
  t[e], _ === void 0 && n !== void 0 && (_ = d(), u && (fi(), u(_)));
  var L;
  if (L = () => {
    var O = (
      /** @type {V} */
      t[e]
    );
    return O === void 0 ? d() : (f = !0, O);
  }, (r & Ga) === 0)
    return L;
  if (u) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(O, b) {
        return arguments.length > 0 ? ((!b || g || p) && u(b ? L() : O), O) : L();
      })
    );
  }
  var E = !1, q = ((r & Wa) !== 0 ? or : zn)(() => (E = !1, L()));
  l && i(q);
  var z = (
    /** @type {Effect} */
    ie
  );
  return (
    /** @type {() => V} */
    (function(O, b) {
      if (arguments.length > 0) {
        const j = b ? i(q) : l ? ye(O) : O;
        return w(q, j), E = !0, o !== void 0 && (o = j), O;
      }
      return dt && E || (z.f & Ie) !== 0 ? q.v : i(q);
    })
  );
}
function xt(t) {
  Ce === null && qn(), Ft(() => {
    const e = Be(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ea(t) {
  Ce === null && qn(), xt(() => () => Be(t));
}
const ml = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ml);
async function Se(t, e, r = {}) {
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
var bl = /* @__PURE__ */ C('<th><button type="button" class="column-label"> <span class="column-sort" aria-hidden="true"> </span></button><button type="button" class="column-resize"></button></th>'), yl = /* @__PURE__ */ C('<i role="img"></i>'), wl = /* @__PURE__ */ C('<button class="open-challenge"> </button>'), xl = /* @__PURE__ */ C("<td><!></td>"), kl = /* @__PURE__ */ C("<tr></tr>"), El = /* @__PURE__ */ C('<div class="message-list"><table><thead><tr></tr></thead><tbody id="challenge-rows"></tbody></table></div>');
function Sl(t, e) {
  Oe(e, !0);
  let r = Wt(e, "hidden", 3, !1);
  const n = ["status", "subject", "category", "points"], a = {
    status: "Status",
    subject: "Subject",
    category: "Category",
    points: "Points"
  }, l = { status: 55, subject: 130, category: 90, points: 65 }, s = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
  let o = /* @__PURE__ */ H(ye([...n])), f = /* @__PURE__ */ H(null), c, d = /* @__PURE__ */ H(ye({
    key: Be(() => e.defaultOrder) === "name" ? "subject" : "id",
    direction: 1
  })), u = /* @__PURE__ */ H(window.innerWidth <= 760), h = /* @__PURE__ */ ce(() => {
    const T = (S) => ({
      status: Number(S.solved_by_me),
      subject: S.name,
      category: S.category,
      points: S.value,
      id: S.id
    })[i(d).key];
    return [...e.challenges].sort((S, F) => (["id", "points", "status"].includes(i(d).key) ? T(S) - T(F) : s.compare(T(S), T(F))) * i(d).direction || S.id - F.id);
  }), _ = /* @__PURE__ */ ce(() => i(f) ? i(o).filter((T) => !i(u) || T !== "category").reduce((T, S) => T + i(f)[S], 0) : null);
  function p() {
    w(
      f,
      Object.fromEntries([...c.tHead.rows[0].cells].map((T) => [
        T.dataset.column,
        T.getBoundingClientRect().width || l[T.dataset.column]
      ])),
      !0
    );
  }
  async function L(T, S) {
    if (!S || S === T) return;
    i(f) || p();
    const F = new Map([...c.querySelectorAll("th,td")].map((x) => [x, x.getBoundingClientRect().left])), B = i(o).indexOf(S), I = i(o).filter((x) => x !== T);
    I.splice(B, 0, T), w(o, I, !0), await Er(), matchMedia("(prefers-reduced-motion: reduce)").matches || F.forEach((x, A) => {
      const D = x - A.getBoundingClientRect().left;
      D && A.animate(
        [
          { transform: `translateX(${D}px)` },
          { transform: "translateX(0)" }
        ],
        { duration: 180, easing: "ease-out" }
      );
    });
  }
  function g(T, { key: S, resize: F = !1 }) {
    const B = T.closest("th");
    let I, x, A = !1;
    function D() {
      x?.remove(), x = null, I = null, B.classList.remove("column-dragging"), c.querySelectorAll(".column-drop-before,.column-drop-after").forEach((X) => X.classList.remove("column-drop-before", "column-drop-after"));
    }
    function K(X) {
      X.button !== 0 || !X.isPrimary || (A = !1, p(), I = {
        x: X.clientX,
        y: X.clientY,
        offset: X.clientX - B.getBoundingClientRect().left,
        width: i(f)[S]
      }, T.setPointerCapture(X.pointerId));
    }
    function re(X) {
      if (I) {
        if (F) {
          i(f)[S] = Math.max(l[S], I.width + X.clientX - I.x);
          return;
        }
        if (!x && Math.hypot(X.clientX - I.x, X.clientY - I.y) > 5 && (A = !0, x = document.createElement("div"), x.className = "column-drag-ghost", x.textContent = a[S], x.setAttribute("aria-hidden", "true"), x.style.width = `${I.width}px`, document.body.append(x), B.classList.add("column-dragging")), x) {
          x.style.left = `${X.clientX - I.offset}px`, x.style.top = `${X.clientY + 12}px`, c.querySelectorAll(".column-drop-before,.column-drop-after").forEach((m) => m.classList.remove("column-drop-before", "column-drop-after"));
          const P = document.elementFromPoint(X.clientX, X.clientY)?.closest("th");
          P?.parentElement === B.parentElement && P !== B && P.classList.add(i(o).indexOf(S) < i(o).indexOf(P.dataset.column) ? "column-drop-after" : "column-drop-before");
        }
      }
    }
    function Z(X) {
      if (!I) return;
      const P = document.elementFromPoint(X.clientX, X.clientY)?.closest("th"), m = !!x;
      D(), T.hasPointerCapture(X.pointerId) && T.releasePointerCapture(X.pointerId), !F && m && P?.parentElement === B.parentElement && L(S, P.dataset.column), T.focus();
    }
    function G(X) {
      if (!F) {
        if (A && X.detail !== 0) {
          A = !1;
          return;
        }
        w(
          d,
          {
            key: S,
            direction: i(d).key === S ? -i(d).direction : 1
          },
          !0
        );
      }
    }
    function $(X) {
      if (!["ArrowLeft", "ArrowRight"].includes(X.key) || !F && !X.altKey) return;
      X.preventDefault();
      const P = X.key === "ArrowRight" ? 1 : -1;
      if (F)
        p(), i(f)[S] = Math.max(l[S], i(f)[S] + P * 10);
      else {
        const m = i(o).filter((R) => !i(u) || R !== "category");
        L(S, m[m.indexOf(S) + P]);
      }
    }
    const oe = {
      pointerdown: K,
      pointermove: re,
      pointerup: Z,
      pointercancel: D,
      lostpointercapture: D,
      click: G,
      keydown: $
    };
    return Object.entries(oe).forEach(([X, P]) => T.addEventListener(X, P)), {
      destroy() {
        D(), Object.entries(oe).forEach(([X, P]) => T.removeEventListener(X, P));
      }
    };
  }
  var E = El();
  bt("resize", Jr, () => w(u, window.innerWidth <= 760));
  var q = k(E);
  let z;
  var O = k(q), b = k(O);
  de(b, 20, () => i(o), (T) => T, (T, S) => {
    var F = bl();
    let B;
    var I = k(F), x = k(I), A = v(x), D = U(A, !0);
    zt(I, (re, Z) => g?.(re, Z), () => ({ key: S }));
    var K = v(I);
    zt(K, (re, Z) => g?.(re, Z), () => ({ key: S, resize: !0 })), M(() => {
      W(F, "data-column", S), W(F, "aria-sort", i(d).key === S ? i(d).direction === 1 ? "ascending" : "descending" : "none"), B = Pt(F, "", B, { width: i(f) ? `${i(f)[S]}px` : void 0 }), W(I, "aria-label", `${a[S]} column. Click to sort. Drag or use Alt and arrow keys to move.`), N(x, a[S]), N(D, i(d).key === S ? i(d).direction === 1 ? "▲" : "▼" : ""), W(K, "aria-label", `Resize ${a[S]} column`);
    }), y(T, F);
  });
  var j = v(O);
  de(j, 21, () => i(h), (T) => T.id, (T, S) => {
    var F = kl();
    de(F, 20, () => i(o), (B) => B, (B, I) => {
      var x = xl(), A = k(x);
      {
        var D = (G) => {
          var $ = yl();
          M(() => {
            Te($, 1, `fas fa-envelope${i(S).solved_by_me ? "-open" : ""}`), W($, "aria-label", i(S).solved_by_me ? "Solved" : "Unsolved");
          }), y(G, $);
        }, K = (G) => {
          var $ = wl(), oe = U($, !0);
          M(() => {
            W($, "data-id", i(S).id), N(oe, i(S).name);
          }), he("click", $, () => e.onopen(i(S).id)), y(G, $);
        }, re = (G) => {
          var $ = rt();
          M(() => N($, i(S).category)), y(G, $);
        }, Z = (G) => {
          var $ = rt();
          M(() => N($, i(S).value)), y(G, $);
        };
        V(A, (G) => {
          I === "status" ? G(D) : I === "subject" ? G(K, 1) : I === "category" ? G(re, 2) : G(Z, -1);
        });
      }
      M(() => W(x, "data-column", I)), y(B, x);
    }), M(() => Te(F, 1, al(i(S).solved_by_me ? "read" : "unread"))), y(T, F);
  }), Yt(q, (T) => c = T, () => c), M(() => {
    W(E, "hidden", r()), z = Pt(q, "", z, {
      width: i(_) ? `${i(_)}px` : void 0
    });
  }), y(t, E), Ne();
}
ht(["click"]);
var Al = /* @__PURE__ */ C('<details><summary> </summary> <div class="hint-content"><!></div></details>');
function Cl(t, e) {
  Oe(e, !0);
  let r = /* @__PURE__ */ H(!1), n = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(null), l = /* @__PURE__ */ H("");
  async function s(g) {
    if (w(r, g.currentTarget.open, !0), !(!i(r) || i(n) || i(a))) {
      w(n, !0), w(l, "");
      try {
        let E = await Se(`/hints/${e.hint.id}`);
        if (!E.content) {
          if (E.cost > 0 && !confirm(`Unlock this hint for ${E.cost} points?`)) {
            w(r, !1);
            return;
          }
          await Se("/unlocks", { target: e.hint.id, type: "hints" }), E = await Se(`/hints/${e.hint.id}`);
        }
        w(a, E, !0);
      } catch (E) {
        w(l, E.message, !0);
      } finally {
        w(n, !1);
      }
    }
  }
  var o = Al(), f = k(o), c = U(f), d = v(f, 2), u = k(d);
  {
    var h = (g) => {
      var E = rt("Loading hint...");
      y(g, E);
    }, _ = (g) => {
      var E = rt();
      M(() => N(E, i(l))), y(g, E);
    }, p = (g) => {
      var E = ut(), q = ue(E);
      yt(q, () => i(a).html), y(g, E);
    }, L = (g) => {
      var E = rt();
      M(() => N(E, i(a).content)), y(g, E);
    };
    V(u, (g) => {
      i(n) ? g(h) : i(l) ? g(_, 1) : i(a)?.html ? g(p, 2) : i(a) && g(L, 3);
    });
  }
  M(() => {
    W(o, "data-hint", e.hint.id), N(c, `${(e.hint.title || "View hint") ?? ""}${e.hint.cost ? ` (${e.hint.cost} points)` : ""}`);
  }), bt("toggle", o, s), gl("open", "toggle", o, (g) => w(r, g), () => i(r)), y(t, o), Ne();
}
var Tl = /* @__PURE__ */ C('<span class="challenge-tag"> </span>'), Ll = /* @__PURE__ */ C('<div class="challenge-tags"><span>Tags:</span><!></div>'), Rl = /* @__PURE__ */ C("<div> </div>"), Ml = /* @__PURE__ */ C("<p>Connection: <code> </code></p>"), Ol = /* @__PURE__ */ C('<a download=""><i class="fas fa-paperclip" aria-hidden="true"></i> </a>'), Nl = /* @__PURE__ */ C('<i aria-hidden="true"></i><strong> </strong>', 1), Pl = /* @__PURE__ */ C('<p>Attempts: <span id="attempts"> </span> </p>'), Il = /* @__PURE__ */ C('<header class="message-header"><h2> </h2> <div> </div> <!> <!></header> <div class="message-body"><!></div> <!> <div class="attachments"></div> <div id="hints"></div> <form class="reply"><label for="flag">Reply with flag</label> <input id="flag" name="submission" autocomplete="off" required=""/> <button type="submit">Send</button> <div id="submission-status" role="status" aria-atomic="true"><!></div> <!></form>', 1);
function Dl(t, e) {
  Oe(e, !0);
  let r = /* @__PURE__ */ H(""), n = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(""), s = /* @__PURE__ */ H(ye(Be(() => e.challenge.attempts))), o = !0, f = /* @__PURE__ */ ce(() => i(a) || (e.challenge.solved_by_me ? "Correct flag received." : "")), c = /* @__PURE__ */ ce(() => i(l) || (i(n) ? "pending" : e.challenge.solved_by_me ? "success" : ""));
  Ea(() => {
    o = !1;
  });
  const d = /* @__PURE__ */ ce(() => new DOMParser().parseFromString(e.challenge.view || "", "text/html").querySelector(".challenge-desc")?.innerHTML);
  function u(m) {
    const R = m.split("/").pop().split("?")[0];
    try {
      return decodeURIComponent(R);
    } catch {
      return R;
    }
  }
  async function h(m) {
    if (m.preventDefault(), !i(n)) {
      w(n, !0), w(a, "Sending..."), w(l, "");
      try {
        const R = await Se("/challenges/attempt", { challenge_id: e.challenge.id, submission: i(r) });
        if (!o) return;
        w(a, R.message, !0);
        const J = e.challenge.type === "delayed" && R.status === "incorrect" && /^Your submission has been taken(?:\.|$)/.test(R.message || "");
        if (w(l, ["correct", "already_solved"].includes(R.status) ? "success" : J ? "info" : "error", !0), R.status === "authentication_required" && (location.href = `${window.init.urlRoot}/login?next=${encodeURIComponent(location.pathname + location.hash)}`), R.status === "correct" && w(r, ""), e.challenge.max_attempts) {
          const se = await Se(`/challenges/${e.challenge.id}`);
          if (!o) return;
          w(s, se.attempts, !0);
        }
        await e.onattempt(R);
      } catch (R) {
        o && (w(a, R.message, !0), w(l, "error"));
      } finally {
        w(n, !1);
      }
    }
  }
  var _ = Il(), p = ue(_), L = k(p), g = U(L, !0), E = v(L, 2), q = U(E), z = v(E, 2);
  {
    var O = (m) => {
      var R = Ll(), J = v(k(R));
      de(J, 17, () => e.challenge.tags, be, (se, ve) => {
        var De = Tl(), Q = U(De, !0);
        M(() => N(Q, typeof i(ve) == "string" ? i(ve) : i(ve).value)), y(se, De);
      }), y(m, R);
    };
    V(z, (m) => {
      e.challenge.tags?.length && m(O);
    });
  }
  var b = v(z, 2);
  {
    var j = (m) => {
      var R = Rl(), J = U(R);
      M(() => N(J, `From: ${e.challenge.attribution ?? ""}`)), y(m, R);
    };
    V(b, (m) => {
      e.challenge.attribution && m(j);
    });
  }
  var T = v(p, 2), S = k(T);
  {
    var F = (m) => {
      var R = ut(), J = ue(R);
      yt(J, () => i(d)), y(m, R);
    }, B = (m) => {
      var R = rt();
      M(() => N(R, e.challenge.description)), y(m, R);
    };
    V(S, (m) => {
      i(d) ? m(F) : m(B, -1);
    });
  }
  var I = v(T, 2);
  {
    var x = (m) => {
      var R = Ml(), J = v(k(R)), se = U(J, !0);
      M(() => N(se, e.challenge.connection_info)), y(m, R);
    };
    V(I, (m) => {
      e.challenge.connection_info && m(x);
    });
  }
  var A = v(I, 2);
  de(A, 21, () => e.challenge.files || [], be, (m, R) => {
    var J = Ol(), se = v(k(J));
    M(
      (ve) => {
        W(J, "href", i(R)), N(se, ` ${ve ?? ""}`);
      },
      [() => u(i(R))]
    ), y(m, J);
  });
  var D = v(A, 2);
  de(D, 21, () => e.challenge.hints || [], (m) => m.id, (m, R) => {
    Cl(m, {
      get hint() {
        return i(R);
      }
    });
  });
  var K = v(D, 2), re = v(k(K), 2), Z = v(re, 2), G = v(Z, 2), $ = k(G);
  {
    var oe = (m) => {
      var R = Nl(), J = ue(R), se = v(J), ve = U(se, !0);
      M(() => {
        Te(J, 1, `fas ${i(c) === "success" ? "fa-check-circle" : i(c) === "error" ? "fa-times-circle" : i(c) === "info" ? "fa-info-circle" : "fa-paper-plane"}`), N(ve, i(f));
      }), y(m, R);
    };
    V($, (m) => {
      i(f) && m(oe);
    });
  }
  var X = v(G, 2);
  {
    var P = (m) => {
      var R = Pl(), J = v(k(R)), se = U(J, !0), ve = v(J);
      M(() => {
        N(se, i(s)), N(ve, ` / ${e.challenge.max_attempts ?? ""}`);
      }), y(m, R);
    };
    V(X, (m) => {
      e.challenge.max_attempts && m(P);
    });
  }
  M(() => {
    N(g, e.challenge.name), N(q, `Category: ${e.challenge.category ?? ""}   Points: ${e.challenge.value ?? ""}`), Z.disabled = i(n), Te(G, 1, `submission-feedback ${i(c)}`), W(G, "hidden", !i(f));
  }), bt("submit", K, h), Sr(re, () => i(r), (m) => w(r, m)), y(t, _), Ne();
}
var Fl = /* @__PURE__ */ C('<hr class="folder-divider"/>'), jl = /* @__PURE__ */ C('<!> <button type="button"><i aria-hidden="true"></i> </button>', 1), ql = /* @__PURE__ */ C('<div class="express-toolbar"><button id="all-challenges" type="button"><i class="fas fa-inbox" aria-hidden="true"></i> All Challenges</button> <button id="help-button" type="button"><i class="fas fa-question-circle" aria-hidden="true"></i> Help</button> <label for="search">Search</label><div class="express-search"><i class="fas fa-search" aria-hidden="true"></i><input id="search" type="search" placeholder="Find a challenge"/></div></div> <div class="express-address">Address <span id="address"> </span></div> <div class="express-workspace"><aside class="express-sidebar" aria-label="Challenge categories"><h2>Folders</h2> <div id="folders"></div> <p id="progress" aria-live="polite"> </p></aside> <section class="express-main" aria-label="Challenges"><h1 id="folder-heading"> </h1> <p id="board-status" role="status"> </p> <button id="retry" type="button">Try again</button> <!> <section id="reader" aria-label="Challenge message"><button id="back" type="button">Back to challenges</button> <div id="message"><!></div></section></section></div> <dialog id="help-dialog"><h2> </h2> <p>Open a challenge to read its message. Reply with the flag to solve it.</p> <p>Unsolved challenges appear as unread mail. Solved challenges appear as read mail.</p> <p>Drag column headers to reorder them, or their edges to resize. With a header focused, use Alt + Left/Right to reorder.</p> <form method="dialog"><button>Close</button></form></dialog>', 1);
function Bl(t, e) {
  Oe(e, !0);
  let r = /* @__PURE__ */ H(ye([])), n = /* @__PURE__ */ H("All Challenges"), a = /* @__PURE__ */ H("all"), l = /* @__PURE__ */ H(""), s = /* @__PURE__ */ H(null), o = /* @__PURE__ */ H(!1), f = /* @__PURE__ */ H(null), c = /* @__PURE__ */ H(""), d = /* @__PURE__ */ H(!0), u = /* @__PURE__ */ H(""), h = /* @__PURE__ */ H(""), _ = 0, p = 0, L, g, E = /* @__PURE__ */ ce(() => i(r).filter((Y) => !Y.solved_by_me)), q = /* @__PURE__ */ ce(() => [...new Set(i(r).map((Y) => Y.category))]), z = /* @__PURE__ */ ce(() => i(a) === "category" ? i(r).filter((Y) => Y.category === i(n)) : i(r)), O = /* @__PURE__ */ ce(() => [
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
    ...i(q).map((Y) => ({
      name: Y,
      type: "category",
      count: i(E).filter((ne) => ne.category === Y).length
    }))
  ]), b = /* @__PURE__ */ ce(() => i(r).filter((Y) => (i(a) === "all" || (i(a) === "unread" ? !Y.solved_by_me : Y.category === i(n))) && `${Y.name} ${Y.category}`.toLowerCase().includes(i(l).toLowerCase().trim())));
  Ft(() => {
    const Y = `${e.config.appName} - ${i(n)}`;
    document.title = Y, document.getElementById("window-title").textContent = Y;
  });
  async function j() {
    const Y = ++p;
    w(d, !0), w(u, "");
    try {
      const ne = await Se("/challenges");
      Y === p && w(r, ne.sort((le, me) => le.id - me.id), !0);
    } catch (ne) {
      Y === p && w(u, ne.message, !0);
    } finally {
      Y === p && w(d, !1);
    }
  }
  async function T(Y = !0) {
    _++, w(o, !1), w(f, null), w(c, ""), history.replaceState(null, "", location.pathname + location.search), await Er(), Y && document.querySelector(`.open-challenge[data-id="${i(s)}"]`)?.focus();
  }
  function S(Y) {
    w(n, Y.name, !0), w(a, Y.type, !0), w(h, ""), T(!1);
  }
  async function F(Y) {
    const ne = ++_;
    w(s, Y, !0), w(o, !0), w(f, null), w(c, ""), w(h, "");
    try {
      const le = await Se(`/challenges/${Y}`);
      if (ne !== _) return;
      w(f, le, !0), history.replaceState(null, "", `#challenge-${Y}`), await Er(), g?.focus();
    } catch (le) {
      ne === _ && w(c, le.message, !0);
    }
  }
  async function B(Y) {
    const ne = _;
    await j(), ne === _ && i(a) === "unread" && ["correct", "already_solved"].includes(Y.status) && !i(u) && (await T(!1), w(h, "Challenge solved. Removed from Unsolved Challenges."), document.querySelector('#folders [data-view="unread"]')?.focus());
  }
  xt(() => {
    const Y = location.hash.match(/-(\d+)$/);
    j().then(() => {
      Y && _ === 0 && F(Number(Y[1]));
    });
  }), Ea(() => {
    _++, p++;
  });
  var I = ql(), x = ue(I), A = k(x), D = v(A, 2), K = v(D, 3), re = v(k(K)), Z = v(x, 2), G = v(k(Z)), $ = U(G), oe = v(Z, 2), X = k(oe), P = v(k(X), 2);
  de(P, 23, () => i(O), (Y) => `${Y.type}:${Y.name}`, (Y, ne, le) => {
    var me = jl(), Fe = ue(me);
    {
      var Le = (gt) => {
        var Qt = Fl();
        y(gt, Qt);
      };
      V(Fe, (gt) => {
        i(le) === 2 && gt(Le);
      });
    }
    var ge = v(Fe, 2);
    let Re;
    var it = k(ge), _t = v(it);
    M(() => {
      W(ge, "data-view", i(ne).type), W(ge, "data-folder", i(ne).name), Re = Te(ge, 1, "", null, Re, {
        active: i(a) === i(ne).type && i(n) === i(ne).name
      }), Te(it, 1, `fas fa-${i(ne).type === "unread" ? "envelope" : "folder"}`), N(_t, `${i(ne).name ?? ""}${i(ne).type !== "all" && i(ne).count > 0 ? ` (${i(ne).count})` : ""}`);
    }), he("click", ge, () => S(i(ne))), y(Y, me);
  });
  var m = v(P, 2), R = U(m), J = v(X, 2), se = k(J), ve = U(se, !0), De = v(se, 2), Q = U(De, !0), ee = v(De, 2), fe = v(ee, 2);
  {
    let Y = /* @__PURE__ */ ce(() => e.config.themeSettings?.challenge_order);
    Sl(fe, {
      get challenges() {
        return i(b);
      },
      get defaultOrder() {
        return i(Y);
      },
      onopen: F,
      get hidden() {
        return i(o);
      }
    });
  }
  var Ae = v(fe, 2), _e = k(Ae);
  Yt(_e, (Y) => g = Y, () => g);
  var Ee = v(_e, 2), at = k(Ee);
  {
    var kt = (Y) => {
      var ne = ut(), le = ue(ne);
      {
        var me = (ge) => {
          var Re = rt();
          M(() => N(Re, i(c))), y(ge, Re);
        }, Fe = (ge) => {
          var Re = ut(), it = ue(Re);
          $i(it, () => i(f).id, (_t) => {
            Dl(_t, {
              get challenge() {
                return i(f);
              },
              onattempt: B
            });
          }), y(ge, Re);
        }, Le = (ge) => {
          var Re = rt("Loading message...");
          y(ge, Re);
        };
        V(le, (ge) => {
          i(c) ? ge(me) : i(f) ? ge(Fe, 1) : ge(Le, -1);
        });
      }
      y(Y, ne);
    };
    V(at, (Y) => {
      i(o) && Y(kt);
    });
  }
  var Mt = v(oe, 2), Ot = k(Mt), Zt = U(Ot, !0);
  Yt(Mt, (Y) => L = Y, () => L), M(
    (Y) => {
      N($, `Folders / ${i(n) ?? ""}`), N(R, `${Y ?? ""} of ${i(z).length ?? ""} challenges solved`), N(ve, i(n)), N(Q, i(u) || (i(d) ? "Loading challenges..." : i(h) || (i(b).length ? "" : "No challenges found."))), W(ee, "hidden", !i(u)), W(Ae, "hidden", !i(o)), N(Zt, e.config.appName);
    },
    [
      () => i(z).filter((Y) => Y.solved_by_me).length
    ]
  ), he("click", A, () => {
    w(l, ""), S(i(O)[0]);
  }), he("click", D, () => L.showModal()), he("input", re, () => {
    w(h, ""), T(!1);
  }), Sr(re, () => i(l), (Y) => w(l, Y)), he("click", ee, j), he("click", _e, () => T()), y(t, I), Ne();
}
ht(["click", "input"]);
function Sa(t, e = !0) {
  if (!e) return;
  const r = t.querySelector(".logon-drag-handle, .window-drag-handle");
  if (!r) return;
  let n;
  const a = [];
  function l(u, h, _) {
    u?.addEventListener(h, _), a.push(() => u?.removeEventListener(h, _));
  }
  function s(u, h) {
    const _ = window.visualViewport, p = _?.offsetLeft || 0, L = _?.offsetTop || 0, g = _?.width || document.documentElement.clientWidth, E = Math.max(0, (_?.height || innerHeight) - (t.classList.contains("express-window") ? 34 : 0));
    t.style.maxWidth = `${g}px`, t.style.maxHeight = `${E}px`;
    const q = t.getBoundingClientRect();
    t.style.left = `${Math.max(p, Math.min(u, p + g - q.width))}px`, t.style.top = `${Math.max(L, Math.min(h, L + E - q.height))}px`;
  }
  const o = t.getBoundingClientRect();
  t.classList.add("is-draggable"), s(o.left, o.top), l(r, "pointerdown", (u) => {
    if (u.button !== 0 || !u.isPrimary) return;
    const h = t.getBoundingClientRect();
    n = { id: u.pointerId, x: u.clientX - h.left, y: u.clientY - h.top }, r.setPointerCapture(u.pointerId), r.classList.add("is-dragging"), u.preventDefault();
  }), l(r, "pointermove", (u) => {
    n?.id === u.pointerId && s(u.clientX - n.x, u.clientY - n.y);
  });
  const f = () => {
    n = null, r.classList.remove("is-dragging");
  };
  for (const u of ["pointerup", "pointercancel", "lostpointercapture"]) l(r, u, f);
  l(r, "keydown", (u) => {
    const h = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[u.key];
    if (!h) return;
    u.preventDefault();
    const _ = t.getBoundingClientRect(), p = u.shiftKey ? 1 : 10;
    s(_.left + h[0] * p, _.top + h[1] * p);
  });
  const c = () => {
    const u = t.getBoundingClientRect();
    s(u.left, u.top);
  };
  l(window, "resize", c), l(window.visualViewport, "resize", c), l(window.visualViewport, "scroll", c);
  const d = new ResizeObserver(c);
  return d.observe(t), { destroy() {
    d.disconnect(), a.forEach((u) => u());
  } };
}
var Ul = /* @__PURE__ */ C('<div role="alert"><span><!></span><button type="button" class="btn-close" aria-label="Close"></button></div>');
function Aa(t, e) {
  Oe(e, !0);
  let r = Wt(e, "errors", 19, () => []), n = Wt(e, "infos", 19, () => []), a = /* @__PURE__ */ H(ye([]));
  var l = ut(), s = ue(l);
  de(
    s,
    17,
    () => [
      ...n().map((o) => ({ text: o, type: "info" })),
      ...r().map((o) => ({ text: o, type: "danger" }))
    ],
    be,
    (o, f, c) => {
      var d = ut(), u = ue(d);
      {
        var h = (p) => {
          var L = Ul(), g = k(L), E = k(g);
          {
            var q = (b) => {
              var j = ut(), T = ue(j);
              yt(T, () => i(f).text.html), y(b, j);
            }, z = (b) => {
              var j = rt();
              M(() => N(j, i(f).text.text ?? i(f).text)), y(b, j);
            };
            V(E, (b) => {
              i(f).text.html ? b(q) : b(z, -1);
            });
          }
          var O = v(g);
          M(() => Te(L, 1, `alert alert-${i(f).type ?? ""} alert-dismissible`)), he("click", O, () => w(a, [...i(a), c], !0)), y(p, L);
        }, _ = /* @__PURE__ */ ce(() => !i(a).includes(c));
        V(u, (p) => {
          i(_) && p(h);
        });
      }
      y(o, d);
    }
  ), y(t, l), Ne();
}
ht(["click"]);
var Hl = /* @__PURE__ */ C('<span class="text-danger" aria-hidden="true">*</span>'), Vl = /* @__PURE__ */ C("<option> </option>"), zl = /* @__PURE__ */ C('<select class="form-select"></select>'), Yl = /* @__PURE__ */ C('<input type="checkbox" class="form-check-input"/>'), Wl = /* @__PURE__ */ C('<textarea class="form-control"></textarea>'), Gl = /* @__PURE__ */ C('<input class="form-control"/>'), Xl = /* @__PURE__ */ C('<small class="form-text text-muted"> </small>'), Jl = /* @__PURE__ */ C('<div><label class="form-label"> <!></label> <!> <!></div>');
function _n(t, e) {
  Oe(e, !0);
  let r = Wt(e, "compact", 3, !1), n = /* @__PURE__ */ H(ye(Be(() => e.field.type === "SelectField" ? String(e.field.value ?? "") : e.field.value ?? ""))), a = /* @__PURE__ */ H(ye(Be(() => e.field.value === !0 || e.field.value === "True" || e.field.value === "true")));
  const l = {
    PasswordField: "password",
    EmailField: "email",
    URLField: "url",
    DateField: "date",
    IntegerField: "number",
    HiddenField: "hidden"
  }, s = /* @__PURE__ */ ce(() => e.field.name === "name" ? "username" : e.field.name === "email" ? "email" : e.field.name === "confirm" ? "current-password" : e.field.type === "PasswordField" ? r() ? "current-password" : "new-password" : void 0);
  var o = Jl();
  let f;
  var c = k(o), d = k(c), u = v(d);
  {
    var h = (O) => {
      var b = Hl();
      y(O, b);
    };
    V(u, (O) => {
      e.field.required && O(h);
    });
  }
  var _ = v(c, 2);
  {
    var p = (O) => {
      var b = zl();
      de(b, 21, () => e.field.choices, be, (j, T) => {
        var S = /* @__PURE__ */ ce(() => Da(i(T), 2));
        let F = () => i(S)[0], B = () => i(S)[1];
        var I = Vl(), x = U(I, !0), A = {};
        M(
          (D) => {
            N(x, B()), A !== (A = D) && (I.value = (I.__value = A) ?? "");
          },
          [() => String(F())]
        ), y(j, I);
      }), wa(b), M(() => {
        W(b, "id", e.field.id), W(b, "name", e.field.name), b.required = e.field.required;
      }), fl(b, () => i(n), (j) => w(n, j)), y(O, b);
    }, L = (O) => {
      var b = Yl();
      b.value = b.__value = "y", M(() => {
        W(b, "id", e.field.id), W(b, "name", e.field.name), b.required = e.field.required;
      }), _l(b, () => i(a), (j) => w(a, j)), y(O, b);
    }, g = (O) => {
      var b = Wl();
      M(() => {
        W(b, "id", e.field.id), W(b, "name", e.field.name), b.required = e.field.required;
      }), Sr(b, () => i(n), (j) => w(n, j)), y(O, b);
    }, E = (O) => {
      var b = Gl();
      M(() => {
        W(b, "id", e.field.id), W(b, "name", e.field.name), W(b, "type", l[e.field.type] || "text"), W(b, "autocomplete", i(s)), b.required = e.field.required;
      }), Sr(b, () => i(n), (j) => w(n, j)), y(O, b);
    };
    V(_, (O) => {
      e.field.type === "SelectField" ? O(p) : e.field.type === "BooleanField" ? O(L, 1) : e.field.type === "TextAreaField" ? O(g, 2) : O(E, -1);
    });
  }
  var q = v(_, 2);
  {
    var z = (O) => {
      var b = Xl(), j = U(b, !0);
      M(() => N(j, e.field.description)), y(O, b);
    };
    V(q, (O) => {
      e.field.description && !r() && O(z);
    });
  }
  M(() => {
    f = Te(o, 1, "", null, f, { "logon-field": r(), "mb-3": !r() }), W(c, "for", e.field.id), N(d, e.field.label);
  }), y(t, o), Ne();
}
var Kl = /* @__PURE__ */ C("<a>Forgot your password?</a>"), Zl = /* @__PURE__ */ C('<!> <form method="post" accept-charset="utf-8"><!> <input type="hidden" name="nonce"/> <div><!> <button id="_submit" name="_submit" type="submit" class="btn btn-primary xp-default"> </button></div></form>', 1), Ql = /* @__PURE__ */ C('<img class="logon-icon" alt=""/>'), $l = /* @__PURE__ */ zi('<svg class="logon-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="9" width="50" height="36" rx="2" fill="#eef4ff" stroke="#153e80" stroke-width="3"></rect><path d="M12 14h40v25H12z" fill="#245bb4"></path><path d="M26 46v7h12v-7M18 55h28" fill="none" stroke="#153e80" stroke-width="3"></path><rect x="24" y="23" width="16" height="12" rx="1" fill="#ffe4a0"></rect><path d="M28 23v-3a4 4 0 0 1 8 0v3" fill="none" stroke="#ffe4a0" stroke-width="3"></path></svg>'), eo = /* @__PURE__ */ C('<a class="btn logon-oauth">Log on with Major League Cyber</a>'), to = /* @__PURE__ */ C('<footer class="logon-footer">Need an account? <a>Register</a></footer>'), ro = /* @__PURE__ */ C('<div class="login-stage"><section class="xp-logon" aria-labelledby="logon-title"><header class="express-title logon-drag-handle" tabindex="0" role="button" aria-label="Move login window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><i class="fas fa-key" aria-hidden="true"></i> Log On</header> <div class="logon-banner"><!> <div><h1 id="logon-title"> </h1><p> </p></div></div> <div class="logon-content"><p>Enter your user name and password to continue.</p><!> <!></div> <!></section></div>'), no = /* @__PURE__ */ C("<p> </p>"), ao = /* @__PURE__ */ C("<p> </p> <p>Please click the link in that email to confirm your account.</p><p>If the email does not arrive, check your spam folder or contact an administrator to manually verify your account.</p>", 1), io = /* @__PURE__ */ C('<a class="btn btn-secondary mb-3">Log on with Major League Cyber</a>'), lo = /* @__PURE__ */ C('<a class="btn btn-secondary mt-3">Change Email Address</a>'), oo = /* @__PURE__ */ C('<p class="text-muted mt-3">By registering, you agree to the <a target="_blank" rel="noopener">privacy policy</a> and <a target="_blank" rel="noopener">terms of service</a>.</p>'), so = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1> </h1></div></div> <div class="container"><div class="auth-page"><!> <!> <!> <!> <!> <!></div></div>', 1);
function fo(t, e) {
  Oe(e, !0);
  const r = (d) => {
    var u = Zl(), h = ue(u);
    Aa(h, {
      get errors() {
        return e.site.errors;
      },
      get infos() {
        return e.site.infos;
      }
    });
    var _ = v(h, 2);
    let p;
    var L = k(_);
    de(L, 17, () => e.page.fields || [], be, (T, S) => {
      {
        let F = /* @__PURE__ */ ce(() => e.page.kind === "login");
        _n(T, {
          get field() {
            return i(S);
          },
          get compact() {
            return i(F);
          }
        });
      }
    });
    var g = v(L, 2), E = v(g, 2);
    let q;
    var z = k(E);
    {
      var O = (T) => {
        var S = Kl();
        M(() => W(S, "href", `${i(a)}/reset_password`)), y(T, S);
      };
      V(z, (T) => {
        e.page.kind === "login" && T(O);
      });
    }
    var b = v(z, 2), j = U(b, !0);
    M(() => {
      p = Te(_, 1, "", null, p, { "logon-form": e.page.kind === "login" }), xa(g, e.config.csrfNonce), q = Te(E, 1, "", null, q, {
        "logon-actions": e.page.kind === "login",
        "auth-actions": e.page.kind !== "login"
      }), b.disabled = i(n), N(j, i(n) ? "Please wait..." : e.page.kind === "login" ? "Log On" : e.page.kind === "confirm" ? "Send Confirmation Email" : "Submit");
    }), bt("submit", _, () => w(n, !0)), y(d, u);
  };
  let n = /* @__PURE__ */ H(!1);
  const a = /* @__PURE__ */ ce(() => e.config.urlRoot), l = {
    login: "Log On",
    register: "Register",
    reset: "Reset Password",
    confirm: "Confirm"
  };
  xt(() => {
    e.page.kind === "login" && document.getElementById("name")?.focus();
    const d = () => w(n, !1);
    return window.addEventListener("pageshow", d), () => window.removeEventListener("pageshow", d);
  });
  var s = ut(), o = ue(s);
  {
    var f = (d) => {
      var u = ro(), h = k(u), _ = v(k(h), 2), p = k(_);
      {
        var L = (x) => {
          var A = Ql();
          M(() => W(A, "src", e.site.logo)), y(x, A);
        }, g = (x) => {
          var A = $l();
          y(x, A);
        };
        V(p, (x) => {
          e.site.logo ? x(L) : x(g, -1);
        });
      }
      var E = v(p, 2), q = k(E), z = U(q, !0), O = v(q), b = U(O), j = v(_, 2), T = v(k(j));
      r(T);
      var S = v(T, 2);
      {
        var F = (x) => {
          var A = eo();
          M(() => W(A, "href", e.site.oauth)), y(x, A);
        };
        V(S, (x) => {
          e.site.oauth && x(F);
        });
      }
      var B = v(j, 2);
      {
        var I = (x) => {
          var A = to(), D = v(k(A));
          M(() => W(D, "href", `${i(a)}/register`)), y(x, A);
        };
        V(B, (x) => {
          e.site.registration && x(I);
        });
      }
      zt(h, (x) => Sa?.(x)), M(() => {
        N(z, e.site.appName), N(b, `Log on to ${e.site.eventName ?? ""}`);
      }), y(d, u);
    }, c = (d) => {
      var u = so(), h = ue(u), _ = k(h), p = k(_), L = U(p, !0), g = v(h, 2), E = k(g), q = k(E);
      {
        var z = (A) => {
          var D = no(), K = U(D, !0);
          M(() => N(K, e.page.mode === "set" ? "You can now reset the password for your account and log in. Please enter a new password below." : "Please provide the email address associated with your account below.")), y(A, D);
        };
        V(q, (A) => {
          e.page.kind === "reset" && A(z);
        });
      }
      var O = v(q, 2);
      {
        var b = (A) => {
          var D = ao(), K = ue(D), re = U(K, !0);
          M(() => N(re, e.page.initial ? "To send a confirmation email to your email address, please click the button below." : "We've sent a confirmation email to your email address.")), y(A, D);
        };
        V(O, (A) => {
          e.page.kind === "confirm" && A(b);
        });
      }
      var j = v(O, 2);
      {
        var T = (A) => {
          var D = io();
          M(() => W(D, "href", e.site.oauth)), y(A, D);
        };
        V(j, (A) => {
          e.page.kind === "register" && e.site.oauth && A(T);
        });
      }
      var S = v(j, 2);
      r(S);
      var F = v(S, 2);
      {
        var B = (A) => {
          var D = lo();
          M(() => W(D, "href", `${i(a)}/settings`)), y(A, D);
        };
        V(F, (A) => {
          e.page.kind === "confirm" && A(B);
        });
      }
      var I = v(F, 2);
      {
        var x = (A) => {
          var D = oo(), K = v(k(D)), re = v(K, 2);
          M(() => {
            W(K, "href", e.page.privacy), W(re, "href", e.page.terms);
          }), y(A, D);
        };
        V(I, (A) => {
          e.page.kind === "register" && e.page.showTerms && A(x);
        });
      }
      M(() => N(L, l[e.page.kind])), y(d, u);
    };
    V(o, (d) => {
      e.page.kind === "login" ? d(f) : d(c, -1);
    });
  }
  y(t, s), Ne();
}
var uo = /* @__PURE__ */ C('<div class="alert alert-danger" role="alert"> </div>'), co = /* @__PURE__ */ C('<div class="alert alert-success" role="status"> </div>'), vo = /* @__PURE__ */ C('<tr><td> </td><td> </td><td> </td><td><button class="btn"><i class="fas fa-times" aria-hidden="true"></i></button></td></tr>'), ho = /* @__PURE__ */ C('<div class="table-responsive"><table class="table"><thead><tr><th>Created</th><th>Expiration</th><th>Description</th><th>Delete</th></tr></thead><tbody></tbody></table></div>'), _o = /* @__PURE__ */ C("<p>No active tokens.</p>"), go = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1>Settings</h1></div></div> <div class="container settings-layout"><div class="nav flex-column nav-pills" aria-label="Settings sections"><button id="settings-profile-tab">Profile</button> <button id="settings-tokens-tab">Access Tokens</button></div> <div><!> <!> <section id="profile"><form method="post"><!> <button type="submit" id="_submit" class="btn btn-primary"> </button></form></section> <section id="tokens"><form><div class="mb-3"><label for="expiration" class="form-label">Expiration</label><input id="expiration" name="expiration" type="date" class="form-control"/></div> <div class="mb-3"><label for="description" class="form-label">Usage Description</label><textarea id="description" name="description" class="form-control" rows="3"></textarea></div> <button type="submit" class="btn btn-primary">Generate</button></form> <h2 class="h4 mt-4">Active Tokens</h2> <!></section></div></div> <dialog class="express-dialog"><h2>API Key Generated</h2><p>Please copy your API key. It will not be shown again!</p> <input class="form-control" aria-label="API key" readonly=""/> <div class="dialog-actions"><button class="btn">Copy</button><button class="btn btn-primary">Got it!</button></div></dialog>', 1);
function po(t, e) {
  Oe(e, !0);
  let r = /* @__PURE__ */ H("profile"), n = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(""), s = /* @__PURE__ */ H(ye(Be(() => e.page.tokens))), o = /* @__PURE__ */ H(""), f, c;
  function d(Q) {
    const ee = Object.fromEntries(new FormData(Q));
    for (const fe of Q.querySelectorAll('input[type="checkbox"]')) ee[fe.name] = fe.checked;
    return ee;
  }
  function u(Q) {
    c = d(Q);
  }
  async function h(Q) {
    if (Q.preventDefault(), i(n)) return;
    w(n, !0), w(a, ""), w(l, "");
    const ee = Q.currentTarget, fe = d(ee), Ae = {};
    for (const [_e, Ee] of Object.entries(fe)) {
      if (_e === "_submit" || Ee === c[_e]) continue;
      const at = /^fields\[(\d+)\]$/.exec(_e);
      at ? (Ae.fields ||= []).push({ field_id: Number(at[1]), value: Ee }) : Ae[_e] = Ee;
    }
    try {
      await Se("/users/me", Ae, { method: "PATCH" }), w(l, "Your profile has been updated.");
      for (const _e of ee.querySelectorAll('input[type="password"]')) _e.value = "";
      c = d(ee);
    } catch (_e) {
      w(a, _e.message, !0);
    } finally {
      w(n, !1);
    }
  }
  async function _(Q) {
    if (Q.preventDefault(), i(n)) return;
    w(n, !0), w(a, ""), w(l, "");
    const ee = d(Q.currentTarget);
    ee.expiration || delete ee.expiration;
    try {
      const fe = await Se("/tokens", ee);
      w(o, fe.value, !0);
      const { value: Ae, ..._e } = fe;
      w(s, [...i(s), _e], !0), f.showModal();
    } catch (fe) {
      w(a, fe.message, !0);
    } finally {
      w(n, !1);
    }
  }
  async function p(Q) {
    if (!(i(n) || !confirm("Are you sure you want to delete this token?"))) {
      w(n, !0), w(a, ""), w(l, "");
      try {
        await Se(`/tokens/${Q}`, void 0, { method: "DELETE" }), w(s, i(s).filter((ee) => ee.id !== Q), !0);
      } catch (ee) {
        w(a, ee.message, !0);
      } finally {
        w(n, !1);
      }
    }
  }
  async function L() {
    try {
      await navigator.clipboard.writeText(i(o)), w(l, "API key copied.");
    } catch {
      w(l, "Select and copy the API key below.");
    }
  }
  function g(Q) {
    w(r, Q, !0), w(a, ""), w(l, "");
  }
  var E = go(), q = v(ue(E), 2), z = k(q), O = k(z);
  let b;
  var j = v(O, 2);
  let T;
  var S = v(z, 2), F = k(S);
  {
    var B = (Q) => {
      var ee = uo(), fe = U(ee, !0);
      M(() => N(fe, i(a))), y(Q, ee);
    };
    V(F, (Q) => {
      i(a) && Q(B);
    });
  }
  var I = v(F, 2);
  {
    var x = (Q) => {
      var ee = co(), fe = U(ee, !0);
      M(() => N(fe, i(l))), y(Q, ee);
    };
    V(I, (Q) => {
      i(l) && Q(x);
    });
  }
  var A = v(I, 2), D = k(A), K = k(D);
  de(K, 17, () => e.page.fields, be, (Q, ee) => {
    _n(Q, {
      get field() {
        return i(ee);
      }
    });
  });
  var re = v(K, 2), Z = U(re, !0);
  zt(D, (Q) => u?.(Q));
  var G = v(A, 2), $ = k(G), oe = v(k($), 4), X = v($, 4);
  {
    var P = (Q) => {
      var ee = ho(), fe = k(ee), Ae = v(k(fe));
      de(Ae, 21, () => i(s), be, (_e, Ee) => {
        var at = vo(), kt = k(at), Mt = U(kt, !0), Ot = v(kt), Zt = U(Ot, !0), Y = v(Ot), ne = U(Y, !0), le = v(Y), me = U(le);
        M(
          (Fe, Le) => {
            N(Mt, Fe), N(Zt, Le), N(ne, i(Ee).description), W(me, "aria-label", `Delete token ${i(Ee).description || i(Ee).id}`), me.disabled = i(n);
          },
          [
            () => i(Ee).created ? new Date(i(Ee).created).toLocaleDateString() : "",
            () => i(Ee).expiration ? new Date(i(Ee).expiration).toLocaleDateString() : "Never"
          ]
        ), he("click", me, () => p(i(Ee).id)), y(_e, at);
      }), y(Q, ee);
    }, m = (Q) => {
      var ee = _o();
      y(Q, ee);
    };
    V(X, (Q) => {
      i(s).length ? Q(P) : Q(m, -1);
    });
  }
  var R = v(q, 2), J = v(k(R), 3), se = v(J, 2), ve = k(se), De = v(ve);
  Yt(R, (Q) => f = Q, () => f), M(() => {
    b = Te(O, 1, "nav-link", null, b, { active: i(r) === "profile" }), W(O, "aria-pressed", i(r) === "profile"), T = Te(j, 1, "nav-link", null, T, { active: i(r) === "tokens" }), W(j, "aria-pressed", i(r) === "tokens"), W(A, "hidden", i(r) !== "profile"), re.disabled = i(n), N(Z, i(n) ? "Saving..." : "Submit"), W(G, "hidden", i(r) !== "tokens"), oe.disabled = i(n), xa(J, i(o));
  }), he("click", O, () => g("profile")), he("click", j, () => g("tokens")), bt("submit", D, h), bt("submit", $, _), bt("close", R, () => w(o, "")), he("click", J, (Q) => Q.currentTarget.select()), he("click", ve, L), he("click", De, () => f.close()), y(t, E), Ne();
}
ht(["click"]);
var mo = /* @__PURE__ */ C("<a> </a>"), bo = /* @__PURE__ */ C('<span class="badge bg-secondary ms-2"> </span>'), yo = /* @__PURE__ */ C('<a class="badge bg-primary ms-2">Official</a>'), wo = /* @__PURE__ */ C('<a target="_blank" rel="noopener"><i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), xo = /* @__PURE__ */ C("<tr><td><!> <!> <!></td><td><!></td><td> </td><td> </td></tr>"), ko = /* @__PURE__ */ C('<p role="status">No users match your search.</p>'), Eo = /* @__PURE__ */ C("<option> </option>"), So = /* @__PURE__ */ C('<label class="pagination-control">Page <select class="page-select form-select"></select> </label>'), Ao = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1>Users</h1></div></div> <div class="container"><form method="get" class="user-search"><!> <button type="submit" class="btn btn-primary"><i class="fas fa-search" aria-hidden="true"></i> Search</button></form> <div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>User</th><th>Website</th><th>Affiliation</th><th>Country</th></tr></thead><tbody></tbody></table></div> <!> <!></div>', 1);
function Co(t, e) {
  Oe(e, !0);
  function r(p) {
    const L = new URL(location.href);
    L.searchParams.set("page", p.currentTarget.value), location.assign(L);
  }
  var n = Ao(), a = v(ue(n), 2), l = k(a), s = k(l);
  de(s, 17, () => e.page.fields, be, (p, L) => {
    _n(p, {
      get field() {
        return i(L);
      }
    });
  });
  var o = v(l, 2), f = k(o), c = v(k(f));
  de(c, 21, () => e.page.users, be, (p, L) => {
    var g = xo(), E = k(g), q = k(E);
    {
      var z = (Z) => {
        var G = mo(), $ = U(G, !0);
        M(() => {
          W(G, "href", `${e.config.urlRoot}/users/${i(L).id}`), N($, i(L).name);
        }), y(Z, G);
      }, O = (Z) => {
        var G = rt();
        M(() => N(G, i(L).name)), y(Z, G);
      };
      V(q, (Z) => {
        e.page.scoresVisible ? Z(z) : Z(O, -1);
      });
    }
    var b = v(q, 2);
    {
      var j = (Z) => {
        var G = bo(), $ = U(G, !0);
        M(() => N($, i(L).bracket)), y(Z, G);
      };
      V(b, (Z) => {
        i(L).bracket && Z(j);
      });
    }
    var T = v(b, 2);
    {
      var S = (Z) => {
        var G = yo();
        M(($) => W(G, "href", $), [
          () => `https://majorleaguecyber.org/u/${encodeURIComponent(i(L).name)}`
        ]), y(Z, G);
      };
      V(T, (Z) => {
        i(L).official && Z(S);
      });
    }
    var F = v(E), B = k(F);
    {
      var I = (Z) => {
        var G = wo();
        M(() => {
          W(G, "href", i(L).website), W(G, "aria-label", `Website for ${i(L).name}`);
        }), y(Z, G);
      }, x = /* @__PURE__ */ ce(() => /^https?:\/\//i.test(i(L).website || ""));
      V(B, (Z) => {
        i(x) && Z(I);
      });
    }
    var A = v(F), D = U(A, !0), K = v(A), re = U(K, !0);
    M(() => {
      N(D, i(L).affiliation || ""), N(re, i(L).country);
    }), y(p, g);
  });
  var d = v(o, 2);
  {
    var u = (p) => {
      var L = ko();
      y(p, L);
    };
    V(d, (p) => {
      e.page.users.length || p(u);
    });
  }
  var h = v(d, 2);
  {
    var _ = (p) => {
      var L = So(), g = v(k(L));
      de(g, 21, () => Array.from({ length: e.page.pages }, (z, O) => O + 1), be, (z, O) => {
        var b = Eo(), j = U(b, !0), T = {};
        M(() => {
          N(j, i(O)), T !== (T = i(O)) && (b.value = (b.__value = T) ?? "");
        }), y(z, b);
      });
      var E;
      wa(g);
      var q = v(g);
      M(() => {
        E !== (E = e.page.page) && (g.value = (g.__value = E) ?? "", hn(g, E)), N(q, ` of ${e.page.pages ?? ""} (${e.page.total ?? ""} users)`);
      }), he("change", g, r), y(p, L);
    };
    V(h, (p) => {
      e.page.pages > 1 && p(_);
    });
  }
  y(t, n), Ne();
}
ht(["change"]);
const en = ["#194c9f", "#8a2459", "#25632a", "#8a480c", "#623e9d", "#006473", "#a12a20", "#4c5872", "#615600", "#763c36"];
var To = /* @__PURE__ */ C('<p role="status"> </p>'), Lo = /* @__PURE__ */ C('<!> <div id="score-graph" class="score-chart" role="img"></div>', 1);
function Ca(t, e) {
  Oe(e, !0);
  let r = Wt(e, "title", 3, "Score over Time"), n = Wt(e, "series", 19, () => []), a, l = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H("");
  xt(() => {
    let u = !0;
    const h = new ResizeObserver(() => i(l)?.resize());
    return import("./chart-ClLr2WTg.js").then(({ init: _ }) => {
      u && (w(l, _(a)), h.observe(a));
    }).catch(() => {
      u && w(s, "The chart could not load. The scores are available in the table below.");
    }), () => {
      u = !1, h.disconnect(), i(l)?.dispose();
    };
  }), Ft(() => {
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
        series: n().map((h, _) => ({
          ...h,
          type: "line",
          symbolSize: 7,
          lineStyle: { width: 3, type: _ > 4 ? "dashed" : "solid" },
          label: { color: u }
        }))
      },
      { notMerge: !0 }
    );
  });
  var o = Lo(), f = ue(o);
  {
    var c = (u) => {
      var h = To(), _ = U(h, !0);
      M(() => N(_, i(s))), y(u, h);
    };
    V(f, (u) => {
      i(s) && u(c);
    });
  }
  var d = v(f, 2);
  Yt(d, (u) => a = u, () => a), M(() => W(d, "aria-label", `${r()}. Scores are also listed in the table below.`)), y(t, o), Ne();
}
var Ro = /* @__PURE__ */ C('<a class="badge bg-primary">Official</a>'), Mo = /* @__PURE__ */ C('<span class="badge bg-primary"> </span>'), Oo = /* @__PURE__ */ C("<p> </p>"), No = /* @__PURE__ */ C("<h2> <small>place</small></h2>"), Po = /* @__PURE__ */ C("<h2> <small>points</small></h2>"), Io = /* @__PURE__ */ C('<a target="_blank" rel="noopener">Website <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Do = /* @__PURE__ */ C('<p role="status">Loading profile...</p>'), Fo = /* @__PURE__ */ C('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), jo = /* @__PURE__ */ C('<div class="progress-bar"></div>'), qo = /* @__PURE__ */ C('<span><span class="legend-swatch"></span> </span>'), Bo = /* @__PURE__ */ C('<div><i aria-hidden="true"></i><h4> </h4><p> </p><p> </p><strong> </strong></div>'), Uo = /* @__PURE__ */ C('<section aria-labelledby="awards-heading"><h3 id="awards-heading">Awards</h3><div class="profile-awards"></div></section>'), Ho = /* @__PURE__ */ C("<tr><td><a> </a></td><td> </td><td> </td><td><time> </time></td></tr>"), Vo = /* @__PURE__ */ C('<section class="profile-graphs" aria-label="Score breakdowns"><div class="profile-breakdowns"><div><div class="progress" aria-hidden="true"><div class="progress-bar"></div><div class="progress-bar"></div></div><p> </p></div> <div><div class="progress" aria-hidden="true"></div><div class="category-legend"></div></div></div> <!></section> <!> <h3>Solves</h3><div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Challenge</th><th>Category</th><th>Value</th><th>Time</th></tr></thead><tbody></tbody></table></div>', 1), zo = /* @__PURE__ */ C('<h3 class="text-muted text-center">No solves yet</h3>'), Yo = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1> </h1> <div class="profile-badges"><!> <!></div> <!> <!> <!> <!></div></div> <div class="container"><!> <!> <!></div>', 1);
function Wo(t, e) {
  Oe(e, !0);
  let r = /* @__PURE__ */ H(ye([])), n = /* @__PURE__ */ H(ye([])), a = /* @__PURE__ */ H(0), l = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H(!0), o = /* @__PURE__ */ H(""), f = 0;
  const c = /* @__PURE__ */ ce(() => i(r).length + i(a) ? 100 * i(r).length / (i(r).length + i(a)) : 0), d = /* @__PURE__ */ ce(() => {
    const P = /* @__PURE__ */ new Map();
    return i(r).forEach((m) => P.set(m.challenge.category, (P.get(m.challenge.category) || 0) + 1)), [...P].map(([m, R], J) => ({
      name: m,
      count: R,
      percent: 100 * R / i(r).length,
      color: en[J % en.length]
    }));
  }), u = /* @__PURE__ */ ce(() => {
    let P = 0;
    return [
      {
        name: e.page.name,
        data: [...i(r), ...i(n)].sort((m, R) => new Date(m.date) - new Date(R.date)).map((m) => [
          new Date(m.date).getTime(),
          P += m.challenge?.value ?? m.value
        ])
      }
    ];
  });
  async function h() {
    const P = ++f;
    w(o, "");
    try {
      const m = e.page.private ? "me" : e.page.id, [R, J, se, ve] = await Promise.all([
        Se(`/users/${m}/solves`),
        Se(`/users/${m}/fails`, void 0, { full: !0 }),
        Se(`/users/${m}/awards`),
        e.page.private ? Se("/users/me") : Promise.resolve(e.page)
      ]);
      if (P !== f) return;
      w(r, R, !0), w(a, J.meta.count, !0), w(n, se, !0), w(l, ve.score, !0);
    } catch (m) {
      P === f && w(o, m.message, !0);
    } finally {
      P === f && w(s, !1);
    }
  }
  xt(() => (h(), () => f++));
  var _ = Yo(), p = ue(_), L = k(p), g = k(L), E = U(g, !0), q = v(g, 2), z = k(q);
  {
    var O = (P) => {
      var m = Ro();
      M((R) => W(m, "href", R), [
        () => `https://majorleaguecyber.org/u/${encodeURIComponent(e.page.name)}`
      ]), y(P, m);
    };
    V(z, (P) => {
      e.page.official && P(O);
    });
  }
  var b = v(z, 2);
  de(
    b,
    17,
    () => [
      e.page.affiliation,
      e.page.country,
      e.page.bracket
    ].filter(Boolean),
    be,
    (P, m) => {
      var R = Mo(), J = U(R, !0);
      M(() => N(J, i(m))), y(P, R);
    }
  );
  var j = v(q, 2);
  de(j, 17, () => e.page.fields, be, (P, m) => {
    var R = Oo(), J = U(R);
    M(() => N(J, `${i(m).name ?? ""}: ${i(m).value ?? ""}`)), y(P, R);
  });
  var T = v(j, 2);
  {
    var S = (P) => {
      var m = No(), R = k(m);
      M(() => N(R, `${e.page.place ?? ""} `)), y(P, m);
    };
    V(T, (P) => {
      e.page.place && P(S);
    });
  }
  var F = v(T, 2);
  {
    var B = (P) => {
      var m = Po(), R = k(m);
      M(() => N(R, `${i(l) ?? ""} `)), y(P, m);
    };
    V(F, (P) => {
      i(l) !== null && P(B);
    });
  }
  var I = v(F, 2);
  {
    var x = (P) => {
      var m = Io();
      M(() => W(m, "href", e.page.website)), y(P, m);
    }, A = /* @__PURE__ */ ce(() => /^https?:\/\//i.test(e.page.website || ""));
    V(I, (P) => {
      i(A) && P(x);
    });
  }
  var D = v(p, 2), K = k(D);
  {
    var re = (P) => {
      var m = Do();
      y(P, m);
    };
    V(K, (P) => {
      i(s) && P(re);
    });
  }
  var Z = v(K, 2);
  {
    var G = (P) => {
      var m = Fo(), R = k(m), J = v(R);
      M(() => N(R, `${i(o) ?? ""} `)), he("click", J, h), y(P, m);
    };
    V(Z, (P) => {
      i(o) && P(G);
    });
  }
  var $ = v(Z, 2);
  {
    var oe = (P) => {
      var m = Vo(), R = ue(m), J = k(R), se = k(J), ve = k(se), De = k(ve), Q = v(De), ee = v(ve), fe = U(ee), Ae = v(se, 2), _e = k(Ae);
      de(_e, 21, () => i(d), be, (ne, le) => {
        var me = jo();
        M(() => Pt(me, `width:${i(le).percent}%;background:${i(le).color}`)), y(ne, me);
      });
      var Ee = v(_e);
      de(Ee, 21, () => i(d), be, (ne, le) => {
        var me = qo(), Fe = k(me), Le = v(Fe);
        M(
          (ge) => {
            Pt(Fe, `background:${i(le).color}`), N(Le, `${i(le).name ?? ""} (${ge ?? ""}%)`);
          },
          [() => i(le).percent.toFixed(2)]
        ), y(ne, me);
      });
      var at = v(J, 2);
      Ca(at, {
        get series() {
          return i(u);
        }
      });
      var kt = v(R, 2);
      {
        var Mt = (ne) => {
          var le = Uo(), me = v(k(le));
          de(me, 21, () => i(n), be, (Fe, Le) => {
            var ge = Bo(), Re = k(ge), it = v(Re), _t = U(it, !0), gt = v(it), Qt = U(gt, !0), $t = v(gt), Mr = U($t, !0), Or = v($t), Ra = U(Or);
            M(() => {
              Te(Re, 1, `award-icon award-${i(Le).icon} fa-2x`), N(_t, i(Le).name), N(Qt, i(Le).category || ""), N(Mr, i(Le).description || ""), N(Ra, `${i(Le).value ?? ""} points`);
            }), y(Fe, ge);
          }), y(ne, le);
        };
        V(kt, (ne) => {
          i(n).length && ne(Mt);
        });
      }
      var Ot = v(kt, 3), Zt = k(Ot), Y = v(k(Zt));
      de(Y, 21, () => i(r), be, (ne, le) => {
        var me = Ho(), Fe = k(me), Le = k(Fe), ge = U(Le, !0), Re = v(Fe), it = U(Re, !0), _t = v(Re), gt = U(_t, !0), Qt = v(_t), $t = k(Qt), Mr = U($t, !0);
        M(
          (Or) => {
            W(Le, "href", `${e.config.urlRoot}/challenges#challenge-${i(le).challenge.id}`), N(ge, i(le).challenge.name), N(it, i(le).challenge.category), N(gt, i(le).challenge.value), W($t, "datetime", i(le).date), N(Mr, Or);
          },
          [() => new Date(i(le).date).toLocaleString()]
        ), y(ne, me);
      }), M(
        (ne, le) => {
          Pt(De, `width:${i(c)}%;background:#25632a`), Pt(Q, `width:${100 - i(c)}%;background:#a12a20`), N(fe, `Solves (${ne ?? ""}%) / Fails (${le ?? ""}%)`);
        },
        [
          () => i(c).toFixed(2),
          () => (100 - i(c)).toFixed(2)
        ]
      ), y(P, m);
    }, X = (P) => {
      var m = zo();
      y(P, m);
    };
    V($, (P) => {
      i(r).length || i(n).length ? P(oe) : !i(s) && !i(o) && P(X, 1);
    });
  }
  M(() => N(E, e.page.name)), y(t, _), Ne();
}
ht(["click"]);
var Go = /* @__PURE__ */ C('<p role="status">Loading scoreboard...</p>'), Xo = /* @__PURE__ */ C('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), Jo = /* @__PURE__ */ C("<button> </button>"), Ko = /* @__PURE__ */ C('<nav class="nav nav-pills mb-3" aria-label="Competition bracket"><button>All</button><!></nav>'), Zo = /* @__PURE__ */ C('<span class="badge bg-secondary ms-2"> </span>'), Qo = /* @__PURE__ */ C('<tr><th scope="row"></th><td><a> </a><!></td><td> </td></tr>'), $o = /* @__PURE__ */ C('<h3 class="text-center text-muted">Scoreboard is empty</h3>'), es = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1>Scoreboard</h1></div></div> <div class="container"><!> <!> <!> <!> <div id="scoreboard" class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Place</th><th>User</th><th>Score</th></tr></thead><tbody></tbody></table></div> <!></div>', 1);
function ts(t, e) {
  Oe(e, !0);
  let r = /* @__PURE__ */ H(ye([])), n = /* @__PURE__ */ H(ye([])), a = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(ye({})), s = /* @__PURE__ */ H(!0), o = /* @__PURE__ */ H(""), f = 0;
  const c = /* @__PURE__ */ ce(() => i(r).filter((x) => !i(a) || String(x.bracket_id) === i(a))), d = /* @__PURE__ */ ce(() => Object.values(i(l)).map((x) => {
    let A = 0;
    return {
      name: x.name,
      data: [...x.solves].sort((D, K) => new Date(D.date) - new Date(K.date)).map((D) => [new Date(D.date).getTime(), A += D.value])
    };
  }));
  async function u() {
    const x = ++f;
    w(o, "");
    try {
      const [A, D, K] = await Promise.all([
        Se("/scoreboard"),
        Se("/brackets?type=users"),
        Se(`/scoreboard/top/10${i(a) ? `?bracket_id=${encodeURIComponent(i(a))}` : ""}`)
      ]);
      if (x !== f) return;
      w(r, A, !0), w(n, D, !0), w(l, K, !0);
    } catch (A) {
      x === f && w(o, A.message, !0);
    } finally {
      x === f && w(s, !1);
    }
  }
  function h(x) {
    w(a, x, !0), u();
  }
  xt(() => {
    u();
    const x = setInterval(u, 3e5);
    return () => {
      clearInterval(x), f++;
    };
  });
  var _ = es(), p = v(ue(_), 2), L = k(p);
  {
    var g = (x) => {
      var A = Go();
      y(x, A);
    };
    V(L, (x) => {
      i(s) && x(g);
    });
  }
  var E = v(L, 2);
  {
    var q = (x) => {
      var A = Xo(), D = k(A), K = v(D);
      M(() => N(D, `${i(o) ?? ""} `)), he("click", K, u), y(x, A);
    };
    V(E, (x) => {
      i(o) && x(q);
    });
  }
  var z = v(E, 2);
  {
    var O = (x) => {
      var A = Ko(), D = k(A);
      let K;
      var re = v(D);
      de(re, 17, () => i(n), be, (Z, G) => {
        var $ = Jo();
        let oe;
        var X = U($, !0);
        M(
          (P) => {
            oe = Te($, 1, "nav-link", null, oe, { active: P }), N(X, i(G).name);
          },
          [() => i(a) === String(i(G).id)]
        ), he("click", $, () => h(String(i(G).id))), y(Z, $);
      }), M(() => K = Te(D, 1, "nav-link", null, K, { active: !i(a) })), he("click", D, () => h("")), y(x, A);
    };
    V(z, (x) => {
      i(n).length && x(O);
    });
  }
  var b = v(z, 2);
  {
    var j = (x) => {
      Ca(x, {
        title: "Top 10 Users",
        get series() {
          return i(d);
        }
      });
    };
    V(b, (x) => {
      i(d).length && x(j);
    });
  }
  var T = v(b, 2), S = k(T), F = v(k(S));
  de(F, 21, () => i(c), be, (x, A, D) => {
    var K = Qo(), re = k(K);
    re.textContent = D + 1;
    var Z = v(re), G = k(Z), $ = U(G, !0), oe = v(G);
    {
      var X = (R) => {
        var J = Zo(), se = U(J, !0);
        M(() => N(se, i(A).bracket_name)), y(R, J);
      };
      V(oe, (R) => {
        i(A).bracket_name && R(X);
      });
    }
    var P = v(Z), m = U(P, !0);
    M(() => {
      W(G, "href", i(A).account_url), N($, i(A).name), N(m, i(A).score);
    }), y(x, K);
  });
  var B = v(T, 2);
  {
    var I = (x) => {
      var A = $o();
      y(x, A);
    };
    V(B, (x) => {
      !i(s) && !i(o) && !i(c).length && x(I);
    });
  }
  y(t, _), Ne();
}
ht(["click"]);
var rs = /* @__PURE__ */ C('<div class="container custom-page"></div>');
function ns(t, e) {
  Oe(e, !0);
  function r(a) {
    let l = !0;
    return (async () => {
      for (const s of a.querySelectorAll("script")) {
        if (!l) break;
        const o = document.createElement("script");
        for (const c of s.attributes) o.setAttribute(c.name, c.value);
        o.textContent = s.textContent;
        const f = o.src && !o.hasAttribute("async") ? new Promise((c) => {
          o.async = !1, o.onload = o.onerror = c;
        }) : null;
        s.replaceWith(o), f && await f;
      }
    })(), {
      destroy() {
        l = !1;
      }
    };
  }
  var n = rs();
  yt(n, () => e.html, !0), zt(n, (a) => r?.(a)), y(t, n), Ne();
}
var as = /* @__PURE__ */ C('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), is = /* @__PURE__ */ C('<h2 class="text-center">There are no notifications yet</h2>'), ls = /* @__PURE__ */ C('<article class="card bg-body-tertiary mb-4"><div class="card-body"><h3> </h3><div></div><time class="text-muted"> </time></div></article>'), os = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1>Notifications</h1></div></div> <div class="container"><!> <!> <!></div>', 1), ss = /* @__PURE__ */ C('<aside class="express-toast" role="status"><h2> </h2><div></div><button class="btn">Dismiss</button></aside>'), fs = /* @__PURE__ */ C('<h2 id="notification-title"> </h2><div></div><div class="dialog-actions"><a class="btn">All notifications</a><button class="btn btn-primary">Close</button></div>', 1), us = /* @__PURE__ */ C('<!> <!> <dialog class="express-dialog" aria-labelledby="notification-title"><!></dialog>', 1);
function cs(t, e) {
  Oe(e, !0);
  const r = (b) => (!b.user_id || b.user_id === e.config.userId) && (!b.team_id || b.team_id === e.config.teamId);
  let n = /* @__PURE__ */ H(ye(Be(() => (e.page.notifications || []).filter(r)))), a = /* @__PURE__ */ H(ye([])), l = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H(""), o;
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
  function d(b) {
    w(a, [.../* @__PURE__ */ new Set([...i(a), ...b])], !0), c();
  }
  function u() {
    i(l) && d([i(l).id]), w(l, null);
  }
  async function h() {
    try {
      w(n, (await Se("/notifications")).filter(r), !0), w(s, ""), e.page.kind === "notifications" && d(i(n).map((b) => b.id));
    } catch (b) {
      e.page.kind === "notifications" && w(s, b.message, !0);
    }
  }
  Ft(() => {
    e.onunread(i(n).filter((b) => !i(a).includes(b.id)).length);
  }), Ft(() => {
    i(l) && i(l).type !== "toast" && o && !o.open && o.showModal();
  }), Ft(() => {
    if (i(l)?.type !== "toast") return;
    const b = setTimeout(() => w(l, null), 8e3);
    return () => clearTimeout(b);
  }), xt(() => {
    try {
      const S = JSON.parse(localStorage.getItem(i(f)) || "[]");
      Array.isArray(S) && w(a, S, !0);
    } catch {
      w(a, [], !0);
    }
    h();
    const b = (S) => {
      if (S.key === i(
        f
        /* Ignore malformed external storage. */
      ))
        try {
          const F = JSON.parse(S.newValue || "[]");
          Array.isArray(F) && w(
            a,
            F,
            /* Ignore malformed external storage. */
            !0
          );
        } catch {
        }
    };
    window.addEventListener("storage", b);
    const j = e.config.userId ? new EventSource(`${e.config.urlRoot}/events`) : null;
    let T = !1;
    return j?.addEventListener("open", () => {
      T && h(), T = !0;
    }), j?.addEventListener("notification", (S) => {
      let F;
      try {
        F = JSON.parse(S.data);
      } catch {
        return;
      }
      if (!r(F)) return;
      const B = !i(n).some((I) => I.id === F.id);
      w(
        n,
        [
          ...i(n).filter((I) => I.id !== F.id),
          F
        ],
        !0
      ), e.page.kind === "notifications" ? d([F.id]) : B && !i(a).includes(F.id) && F.type !== "background" && w(l, F, !0);
    }), () => {
      j?.close(), window.removeEventListener("storage", b);
    };
  });
  var _ = us(), p = ue(_);
  {
    var L = (b) => {
      var j = os(), T = v(ue(j), 2), S = k(T);
      {
        var F = (A) => {
          var D = as(), K = k(D), re = v(K);
          M(() => N(K, `${i(s) ?? ""} `)), he("click", re, h), y(A, D);
        };
        V(S, (A) => {
          i(s) && A(F);
        });
      }
      var B = v(S, 2);
      {
        var I = (A) => {
          var D = is();
          y(A, D);
        };
        V(B, (A) => {
          !i(n).length && !i(s) && A(I);
        });
      }
      var x = v(B, 2);
      de(x, 17, () => [...i(n)].sort((A, D) => D.id - A.id), be, (A, D) => {
        var K = ls(), re = k(K), Z = k(re), G = U(Z, !0), $ = v(Z);
        yt($, () => i(D).html, !0);
        var oe = v($), X = U(oe, !0);
        M(
          (P) => {
            N(G, i(D).title), W(oe, "datetime", i(D).date), N(X, P);
          },
          [() => new Date(i(D).date).toLocaleString()]
        ), y(A, K);
      }), y(b, j);
    };
    V(p, (b) => {
      e.page.kind === "notifications" && b(L);
    });
  }
  var g = v(p, 2);
  {
    var E = (b) => {
      var j = ss(), T = k(j), S = U(T, !0), F = v(T);
      yt(F, () => i(l).html || "", !0);
      var B = v(F);
      M(() => N(S, i(l).title)), he("click", B, u), y(b, j);
    };
    V(g, (b) => {
      i(l)?.type === "toast" && b(E);
    });
  }
  var q = v(g, 2), z = k(q);
  {
    var O = (b) => {
      var j = fs(), T = ue(j), S = U(T, !0), F = v(T);
      yt(F, () => i(l).html || "", !0);
      var B = v(F), I = k(B), x = v(I);
      M(() => {
        N(S, i(l).title), W(I, "href", `${e.config.urlRoot}/notifications`);
      }), he("click", x, () => o.close()), y(b, j);
    };
    V(z, (b) => {
      i(l) && i(l).type !== "toast" && b(O);
    });
  }
  Yt(q, (b) => o = b, () => o), bt("close", q, u), y(t, _), Ne();
}
ht(["click"]);
var ds = /* @__PURE__ */ C('<img class="express-brand-icon" alt="" draggable="false"/>'), vs = /* @__PURE__ */ C('<i class="fas fa-envelope" aria-hidden="true"></i>'), hs = /* @__PURE__ */ C('<i class="fas fa-bell" aria-hidden="true"></i>'), _s = /* @__PURE__ */ C('<span class="badge bg-danger"> </span>'), gs = /* @__PURE__ */ C('<li class="nav-item"><a class="nav-link"><!> <!></a></li>'), ps = /* @__PURE__ */ C("<ul></ul>"), ms = /* @__PURE__ */ C('<nav class="navbar navbar-expand-md" aria-label="Main navigation"><div class="container"><button class="navbar-toggler" type="button" aria-controls="base-navbars" aria-label="Toggle navigation"><i class="fas fa-bars" aria-hidden="true"></i> Menu</button> <div id="base-navbars"></div></div></nav>'), bs = /* @__PURE__ */ C('<div id="challenge-app"><!></div>'), ys = /* @__PURE__ */ C("<p> </p>"), ws = /* @__PURE__ */ C('<div class="container error-page"><h1> </h1><h2> </h2><!><a>Back to challenges</a></div>'), xs = /* @__PURE__ */ C("<!> <!>", 1), ks = /* @__PURE__ */ C('<div class="express-window"><header class="express-title window-drag-handle" tabindex="0" role="button" aria-label="Move application window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><!> <span id="window-title"> </span></header> <!> <main id="main-content"><!> <!></main> <footer class="express-status"> <span>Powered by <a href="https://ctfd.io">CTFd</a></span></footer></div> <div class="express-taskbar"><a class="express-start">Start</a><span> </span></div>', 1);
function Es(t, e) {
  Oe(e, !0);
  let r = /* @__PURE__ */ H(!1), n = /* @__PURE__ */ H(0);
  const a = /* @__PURE__ */ ce(() => e.page.kind === "login"), l = /* @__PURE__ */ ce(() => ["login", "register", "reset", "confirm"].includes(e.page.kind));
  xt(() => (document.body.classList.toggle("login-desktop", i(a)), () => document.body.classList.remove("login-desktop")));
  var s = ks(), o = ue(s), f = k(o), c = k(f);
  {
    var d = (I) => {
      var x = ds();
      M(() => W(x, "src", e.site.logo)), y(I, x);
    }, u = (I) => {
      var x = vs();
      y(I, x);
    };
    V(c, (I) => {
      e.site.logo ? I(d) : I(u, -1);
    });
  }
  var h = v(c, 2), _ = U(h, !0), p = v(f, 2);
  {
    var L = (I) => {
      var x = ms(), A = k(x), D = k(A), K = v(D, 2);
      let re;
      de(K, 21, () => [e.site.primary, e.site.account], be, (Z, G, $) => {
        var oe = ps();
        Te(oe, 1, "navbar-nav", null, {}, { "me-auto": $ === 0, "ms-md-auto": $ === 1 }), de(oe, 21, () => i(G), be, (X, P) => {
          var m = gs(), R = k(m), J = k(R);
          {
            var se = (ee) => {
              var fe = hs();
              y(ee, fe);
            };
            V(J, (ee) => {
              i(P).label === "Notifications" && ee(se);
            });
          }
          var ve = v(J), De = v(ve);
          {
            var Q = (ee) => {
              var fe = _s(), Ae = U(fe, !0);
              M(() => N(Ae, i(n))), y(ee, fe);
            };
            V(De, (ee) => {
              i(P).label === "Notifications" && i(n) > 0 && ee(Q);
            });
          }
          M(() => {
            W(R, "href", i(P).href), W(R, "target", i(P).target || void 0), W(R, "rel", i(P).target === "_blank" ? "noopener" : void 0), N(ve, `${i(P).label ?? ""} `);
          }), y(X, m);
        }), y(Z, oe);
      }), M(() => {
        W(D, "aria-expanded", i(r)), re = Te(K, 1, "collapse navbar-collapse", null, re, { show: i(r) });
      }), he("click", D, () => w(r, !i(r))), y(I, x);
    };
    V(p, (I) => {
      i(a) || I(L);
    });
  }
  var g = v(p, 2), E = k(g);
  {
    var q = (I) => {
      fo(I, {
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
    }, z = (I) => {
      var x = xs(), A = ue(x);
      Aa(A, {
        get errors() {
          return e.site.errors;
        },
        get infos() {
          return e.site.infos;
        }
      });
      var D = v(A, 2);
      {
        var K = (m) => {
          var R = bs(), J = k(R);
          Bl(J, {
            get config() {
              return e.config;
            }
          }), y(m, R);
        }, re = (m) => {
          po(m, {
            get page() {
              return e.page;
            }
          });
        }, Z = (m) => {
          Co(m, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, G = (m) => {
          Wo(m, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, $ = (m) => {
          ts(m, {});
        }, oe = (m) => {
          ns(m, {
            get html() {
              return e.page.html;
            }
          });
        }, X = (m) => {
          var R = ws(), J = k(R), se = U(J, !0), ve = v(J), De = U(ve), Q = v(ve);
          {
            var ee = (Ae) => {
              var _e = ys(), Ee = U(_e, !0);
              M(() => N(Ee, e.page.detail)), y(Ae, _e);
            };
            V(Q, (Ae) => {
              e.page.detail && Ae(ee);
            });
          }
          var fe = v(Q);
          M(() => {
            N(se, e.page.heading), N(De, `${e.page.code ?? ""} ${e.page.message ?? ""}`), W(fe, "href", `${e.config.urlRoot}/challenges`);
          }), y(m, R);
        }, P = (m) => {
          var R = ut(), J = ue(R);
          yt(J, () => e.fallback), y(m, R);
        };
        V(D, (m) => {
          e.page.kind === "challenges" ? m(K) : e.page.kind === "settings" ? m(re, 1) : e.page.kind === "users" ? m(Z, 2) : e.page.kind === "profile" ? m(G, 3) : e.page.kind === "scoreboard" ? m($, 4) : e.page.kind === "page" ? m(oe, 5) : e.page.kind === "error" ? m(X, 6) : e.page.kind !== "notifications" && m(P, 7);
        });
      }
      y(I, x);
    };
    V(E, (I) => {
      i(l) ? I(q) : I(z, -1);
    });
  }
  var O = v(E, 2);
  cs(O, {
    get page() {
      return e.page;
    },
    get config() {
      return e.config;
    },
    onunread: (I) => w(n, I, !0)
  });
  var b = v(g, 2), j = k(b);
  zt(o, (I, x) => Sa?.(I, x), () => !i(a));
  var T = v(o, 2), S = k(T), F = v(S), B = U(F, !0);
  M(() => {
    N(_, e.site.title), N(j, e.site.eventName), W(S, "href", `${e.config.urlRoot}/challenges`), N(B, e.site.appName);
  }), y(t, s), Ne();
}
ht(["click"]);
const Ta = document.getElementById("site-app"), La = JSON.parse(document.getElementById("page-data").textContent);
document.body.classList.toggle("login-desktop", La.kind === "login");
Ta.replaceChildren();
Ji(Es, { target: Ta, props: {
  config: window.init,
  site: JSON.parse(document.getElementById("site-data").textContent),
  page: La,
  fallback: document.getElementById("fallback-content").innerHTML
} });
