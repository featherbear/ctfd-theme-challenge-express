var Ar = Array.isArray, Ma = Array.prototype.indexOf, pr = Array.prototype.includes, Cr = Array.from, Ln = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, Rn = Object.getOwnPropertyDescriptors, Na = Object.prototype, Oa = Array.prototype, tn = Object.getPrototypeOf, pn = Object.isExtensible;
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
const Pe = 2, Ht = 4, Tr = 8, Nn = 1 << 24, Xe = 16, We = 32, vt = 64, Hr = 128, rn = 256, Qe = 512, Se = 1024, xe = 2048, Ye = 4096, Ie = 8192, De = 16384, Gt = 32768, mr = 1 << 25, Vt = 65536, br = 1 << 17, Fa = 1 << 18, Xt = 1 << 19, ja = 1 << 20, et = 1 << 25, yr = 1 << 21, Bt = 1 << 22, bt = 1 << 23, ft = /* @__PURE__ */ Symbol("$state"), On = /* @__PURE__ */ Symbol("component"), Ba = /* @__PURE__ */ Symbol("legacy props"), qa = /* @__PURE__ */ Symbol(""), Pn = /* @__PURE__ */ Symbol("attributes"), Vr = /* @__PURE__ */ Symbol("class"), Yr = /* @__PURE__ */ Symbol("style"), zr = /* @__PURE__ */ Symbol("text"), hr = /* @__PURE__ */ Symbol("form reset"), fr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Ua = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Ha = 1, Va = 2, In = 4, Ya = 8, za = 16, Wa = 1, Ga = 4, Xa = 8, Ka = 16, Ja = 1, Za = 2, Ee = /* @__PURE__ */ Symbol("uninitialized"), Dn = "http://www.w3.org/1999/xhtml", Qa = "http://www.w3.org/2000/svg", $a = "http://www.w3.org/1998/Math/MathML";
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
function si(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function oi() {
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
let Te = null;
function Yt(t) {
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
      se
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
let St = [];
function Hn() {
  var t = St;
  St = [], Ia(t);
}
function ot(t) {
  if (St.length === 0 && !ar) {
    var e = St;
    queueMicrotask(() => {
      e === St && Hn();
    });
  }
  St.push(t);
}
function hi() {
  for (; St.length > 0; )
    Hn();
}
const _i = -7169;
function me(t, e) {
  t.f = t.f & _i | e;
}
function an(t) {
  (t.f & Qe) !== 0 || t.deps === null ? me(t, Se) : me(t, Ye);
}
function Vn(t, e, r) {
  (t.f & xe) !== 0 ? e.add(t) : (t.f & Ye) !== 0 && r.add(t), me(t, Se);
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
            e[hr]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Kt(t) {
  var e = le, r = se;
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
    t[hr]
  );
  a ? t[hr] = () => {
    a(), n(!0);
  } : t[hr] = () => n(!0), gi();
}
function pi(t, e, r, n) {
  const a = sr;
  var l = t.filter((_) => !_.settled), o = e.map(a);
  if (r.length === 0 && l.length === 0) {
    n(o);
    return;
  }
  var s = (
    /** @type {Effect} */
    se
  ), f = mi(), c = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((_) => _.promise)) : null;
  function h(_) {
    if ((s.f & De) === 0) {
      f();
      try {
        n([...o, ..._]);
      } catch (b) {
        $e(b, s);
      }
      wr();
    }
  }
  var u = Yn();
  if (r.length === 0) {
    c.then(() => h([])).finally(u);
    return;
  }
  function v() {
    Promise.all(r.map((_) => /* @__PURE__ */ bi(_))).then(h).catch((_) => $e(_, s)).finally(u);
  }
  c ? c.then(() => {
    f(), v(), wr();
  }) : v();
}
function mi() {
  var t = (
    /** @type {Effect} */
    se
  ), e = le, r = Te, n = (
    /** @type {Batch} */
    te
  );
  return function(l = !0) {
    nt(t), Ge(e), Yt(r), l && (t.f & De) === 0 && (n?.activate(), n?.apply());
  };
}
function wr(t = !0) {
  nt(null), Ge(null), Yt(null), t && te?.deactivate();
}
function Yn() {
  var t = (
    /** @type {Effect} */
    se
  ), e = t.b, r = (
    /** @type {Batch} */
    te
  ), n = !!e?.is_rendered();
  return e?.update_pending_count(1, r), r.increment(n, t), () => {
    e?.update_pending_count(-1, r), r.decrement(n, t);
  };
}
// @__NO_SIDE_EFFECTS__
function sr(t) {
  var e = Pe | xe;
  return se !== null && (se.f |= Xt), {
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
    parent: se,
    ac: null
  };
}
const tr = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function bi(t, e, r) {
  let n = (
    /** @type {Effect | null} */
    se
  );
  n === null && ni();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Lt(
    /** @type {V} */
    Ee
  ), o = !le, s = /* @__PURE__ */ new Set();
  return Oi(() => {
    var f = (
      /** @type {Effect} */
      se
    ), c = Mn();
    a = c.promise;
    try {
      Promise.resolve(t()).then(c.resolve, (_) => {
        _ !== fr && c.reject(_);
      }).finally(wr);
    } catch (_) {
      c.reject(_), wr();
    }
    var h = (
      /** @type {Batch} */
      te
    );
    if (o) {
      if ((f.f & Gt) !== 0)
        var u = Yn();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        n.b?.is_rendered()
      )
        h.async_deriveds.get(f)?.reject(tr);
      else
        for (const _ of s.values())
          _.reject(tr);
      s.add(c), h.async_deriveds.set(f, c);
    }
    const v = (_, b = void 0) => {
      u?.(), s.delete(c), b !== tr && (h.activate(), b ? (l.f |= bt, zt(l, b)) : ((l.f & bt) !== 0 && (l.f ^= bt), zt(l, _)), h.deactivate());
    };
    c.promise.then(v, (_) => v(null, _ || "unknown"));
  }), Lr(() => {
    for (const f of s)
      f.reject(tr);
  }), new Promise((f) => {
    function c(h) {
      function u() {
        h === a ? f(l) : c(a);
      }
      h.then(u, u);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function ue(t) {
  const e = /* @__PURE__ */ sr(t);
  return ca(e), e;
}
// @__NO_SIDE_EFFECTS__
function zn(t) {
  const e = /* @__PURE__ */ sr(t);
  return e.equals = Bn, e;
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
function sn(t) {
  var e, r = se, n = t.parent;
  if (!ht && n !== null && t.v !== Ee && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (De | Ie)) !== 0)
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
  var e = sn(t);
  if (!t.equals(e) && (t.wv = va(), (!te?.is_fork || t.deps === null) && (te !== null ? (te.capture(t, e, !0), Wr?.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    me(t, Se);
    return;
  }
  ht || (Ke !== null ? (un() || te?.is_fork) && Ke.set(t, e) : an(t));
}
function wi(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac !== null && Kt(() => {
        e.ac.abort(fr), e.ac = null;
      }), e.fn !== null && (e.teardown = Pa), or(e, 0), dn(e));
}
function Gn(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && Wt(e);
}
let Or = null, Dt = null, te = null, Wr = null, Ke = null, Gr = null, ar = !1, Pr = !1, ir = null, _r = null;
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
  #o = /* @__PURE__ */ new Set();
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
  #s = null;
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
    Dt === null ? Or = Dt = this : (Dt.#e = this, this.#l = Dt), Dt = this;
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
        me(a, xe), r(a);
      for (a of n.m)
        me(a, Ye), r(a);
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
      if (!((l.f & De) !== 0 || (l.f & (xe | Ye)) === 0)) {
        for (var r = l, n = !1; r.parent !== null; ) {
          r = r.parent;
          var a = r.f;
          if ((a & (vt | We)) !== 0) {
            if ((a & Se) === 0) {
              n = !0;
              break;
            }
            r.f ^= Se;
          }
        }
        n || e.push(r);
      }
    return this.#a = [], e;
  }
  #p() {
    this.#t = !0;
    for (const s of this.#f)
      this.#u.delete(s), me(s, xe), this.schedule(s);
    for (const s of this.#u)
      me(s, Ye), this.schedule(s);
    this.apply();
    for (var e = ir = [], r = [], n = _r = []; this.#a.length > 0; ) {
      bn++ > 1e3 && (this.#_(), Ei());
      for (const s of this.#x())
        try {
          this.#m(s, e, r);
        } catch (f) {
          throw Jn(s), this.#b() || this.discard(), f;
        }
    }
    if (te = null, n.length > 0) {
      var a = wt.ensure();
      for (const s of n)
        a.schedule(s);
    }
    if (ir = null, _r = null, this.#b()) {
      this.#v(r), this.#v(e);
      for (const [s, f] of this.#d)
        Kn(s, f);
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
    for (const s of this.#o) s(this);
    this.#o.clear(), Wr = this, yn(r), yn(e), Wr = null, this.#s?.resolve();
    var o = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      te
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
    e.f ^= Se;
    for (var a = e.first; a !== null; ) {
      var l = a.f, o = (l & (We | vt)) !== 0, s = o && (l & Se) !== 0, f = s || (l & Ie) !== 0 || this.#d.has(a);
      if (!f && a.fn !== null) {
        o ? a.f ^= Se : (l & Ht) !== 0 ? r.push(a) : cr(a) && ((l & Xe) !== 0 && this.#u.add(a), Wt(a));
        var c = a.first;
        if (c !== null) {
          a = c;
          continue;
        }
      }
      for (; a !== null; ) {
        var h = a.next;
        if (h !== null) {
          a = h;
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
      if (a !== null && !((n.f & Pe) !== 0 && (n.f & (xe | Ye)) === 0))
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
            l & (Bt | Xe) && !this.async_deriveds.has(o) && (this.#u.delete(o), me(o, xe), this.schedule(o));
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
      Vn(e[r], this.#f, this.#u);
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
    te = this;
  }
  deactivate() {
    te = null, Ke = null;
  }
  flush() {
    try {
      Pr = !0, te = this, this.#p();
    } finally {
      bn = 0, Gr = null, ir = null, _r = null, Pr = !1, te = null, Ke = null, tt.clear();
    }
  }
  discard() {
    for (const e of this.#n) e(this);
    this.#n.clear();
    for (const e of this.async_deriveds.values())
      e.reject(tr);
    this.#_(), this.#s?.resolve();
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
      for (const [v, [_, b]] of this.current) {
        if (u.current.has(v)) {
          var n = (
            /** @type {[any, boolean]} */
            u.current.get(v)[0]
          );
          if (e && _ !== n)
            u.current.set(v, [_, b]);
          else
            continue;
        }
        r.push(v);
      }
      if (e)
        for (const [v, _] of this.async_deriveds) {
          const b = u.async_deriveds.get(v);
          b && _.promise.then(b.resolve).catch(b.reject);
        }
      var a = [...u.current.keys()].filter(
        (v) => !/** @type {[any, boolean]} */
        u.current.get(v)[1]
      );
      if (!(!u.#t || a.length === 0)) {
        var l = a.filter((v) => !this.current.has(v));
        if (l.length === 0)
          e && u.discard();
        else if (r.length > 0) {
          if (e)
            for (const v of this.#g)
              u.unskip_effect(v, (_) => {
                (_.f & (Xe | Bt)) !== 0 ? u.schedule(_) : u.#v([_]);
              });
          u.activate();
          var o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
          for (var f of r)
            Xn(f, l, o, s);
          s = /* @__PURE__ */ new Map();
          var c = [...u.current].filter(([v, _]) => {
            const b = this.current.get(v);
            return b ? b[0] !== _[0] || b[1] !== _[1] : !0;
          }).map(([v]) => v);
          if (c.length > 0)
            for (const v of this.#h)
              (v.f & (De | Ie | br)) === 0 && on(v, c, s) && ((v.f & (Bt | Xe)) !== 0 ? (me(v, xe), u.schedule(v)) : u.#f.add(v));
          if (u.#a.length > 0 && !u.#c) {
            u.apply();
            for (var h of u.#x())
              u.#m(h, [], []);
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
    this.#o.add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    this.#n.add(e);
  }
  settled() {
    return (this.#s ??= Mn()).promise;
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
      e === null ? Or = r : e.#e = r, r === null ? Dt = e : r.#l = e, this.linked = !1;
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
    oi();
  } catch (t) {
    $e(t, Gr);
  }
}
let st = null;
function yn(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var n = t[r++];
      if ((n.f & (De | Ie)) === 0 && cr(n) && (st = /* @__PURE__ */ new Set(), Wt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && oa(n), st?.size > 0)) {
        tt.clear();
        for (const a of st) {
          if ((a.f & (De | Ie)) !== 0) continue;
          const l = [a];
          let o = a.parent;
          for (; o !== null; )
            st.has(o) && (st.delete(o), l.push(o)), o = o.parent;
          for (let s = l.length - 1; s >= 0; s--) {
            const f = l[s];
            (f.f & (De | Ie)) === 0 && Wt(f);
          }
        }
        st.clear();
      }
    }
    st = null;
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
      ) : (l & (Bt | Xe)) !== 0 && (l & xe) === 0 && on(a, e, n) && (me(a, xe), fn(
        /** @type {Effect} */
        a
      ));
    }
}
function on(t, e, r) {
  const n = r.get(t);
  if (n !== void 0) return n;
  if (t.deps !== null)
    for (const a of t.deps) {
      if (pr.call(e, a))
        return !0;
      if ((a.f & Pe) !== 0 && on(
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
function Kn(t, e) {
  if (!((t.f & We) !== 0 && (t.f & Se) !== 0)) {
    (t.f & xe) !== 0 ? e.d.push(t) : (t.f & Ye) !== 0 && e.m.push(t), me(t, Se);
    for (var r = t.first; r !== null; )
      Kn(r, e), r = r.next;
  }
}
function Jn(t) {
  me(t, Se);
  for (var e = t.first; e !== null; )
    Jn(e), e = e.next;
}
let xr = /* @__PURE__ */ new Set();
const tt = /* @__PURE__ */ new Map();
let Zn = !1;
function Lt(t, e) {
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
function H(t, e) {
  const r = Lt(t);
  return ca(r), r;
}
// @__NO_SIDE_EFFECTS__
function Si(t, e = !1, r = !0) {
  const n = Lt(t);
  return e || (n.equals = Bn), n;
}
function w(t, e, r = !1) {
  le !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || (le.f & br) !== 0) && Un() && (le.f & (Pe | Xe | Bt | br)) !== 0 && (rt === null || !rt.has(t)) && di();
  let n = r ? ge(e) : e;
  return zt(t, n, _r);
}
var Et = null, Xr = 0;
function zt(t, e, r = null) {
  if (!t.equals(e)) {
    ht ? tt.set(t, e) : tt.has(t) || tt.set(t, t.v);
    var n = wt.ensure();
    if (n.capture(t, e), (t.f & Pe) !== 0) {
      const a = (
        /** @type {Derived} */
        t
      );
      (t.f & xe) !== 0 && sn(a), Ke === null && an(a);
    }
    t.wv = va(), Et = null, Xr = 0, Qn(t, xe, r), Et = null, se !== null && (se.f & Se) !== 0 && (se.f & (We | vt)) === 0 && (He === null ? Ii([t]) : He.push(t)), !n.is_fork && xr.size > 0 && !Zn && Ai();
  }
  return e;
}
function Ai() {
  Zn = !1;
  for (const t of xr) {
    (t.f & Se) !== 0 && me(t, Ye);
    let e;
    try {
      e = cr(t);
    } catch {
      e = !0;
    }
    e && Wt(t);
  }
  xr.clear();
}
function lr(t) {
  w(t, t.v + 1);
}
function Qn(t, e, r) {
  var n = t.reactions;
  if (n !== null) {
    var a = n.length;
    if (Xr += a, Xr > 1e5 && Et === null && (Et = /* @__PURE__ */ new Set()), Et !== null) {
      if (Et.has(t)) return;
      Et.add(t);
    }
    for (var l = 0; l < a; l++) {
      var o = n[l], s = o.f, f = (s & xe) === 0;
      if (f && me(o, e), (s & br) !== 0)
        xr.add(
          /** @type {Effect} */
          o
        );
      else if ((s & Pe) !== 0) {
        var c = (
          /** @type {Derived} */
          o
        );
        Ke?.delete(c), Qn(c, Ye, r);
      } else if (f) {
        var h = (
          /** @type {Effect} */
          o
        );
        (s & Xe) !== 0 && st !== null && st.add(h), r !== null ? r.push(h) : fn(h);
      }
    }
  }
}
function ge(t) {
  if (typeof t != "object" || t === null || ft in t || On in t)
    return t;
  const e = tn(t);
  if (e !== Na && e !== Oa)
    return t;
  var r = /* @__PURE__ */ new Map(), n = Ar(t), a = /* @__PURE__ */ H(0), l = Tt, o = (s) => {
    if (Tt === l)
      return s();
    var f = le, c = Tt;
    Ge(null), kn(l);
    var h = s();
    return Ge(f), kn(c), h;
  };
  return n && r.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(s, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ui();
        var h = r.get(f);
        return h === void 0 ? o(() => {
          var u = /* @__PURE__ */ H(c.value);
          return r.set(f, u), u;
        }) : w(h, c.value, !0), !0;
      },
      deleteProperty(s, f) {
        var c = r.get(f);
        if (c === void 0) {
          if (f in s) {
            const h = o(() => /* @__PURE__ */ H(Ee));
            r.set(f, h), lr(a);
          }
        } else
          w(c, Ee), lr(a);
        return !0;
      },
      get(s, f, c) {
        if (f === ft)
          return t;
        var h = r.get(f), u = f in s;
        if (h === void 0 && (!u || jt(s, f)?.writable) && (h = o(() => {
          var _ = ge(u ? s[f] : Ee), b = /* @__PURE__ */ H(_);
          return b;
        }), r.set(f, h)), h !== void 0) {
          var v = i(h);
          return v === Ee ? void 0 : v;
        }
        return Reflect.get(s, f, c);
      },
      getOwnPropertyDescriptor(s, f) {
        this.has?.(s, f);
        var c = Reflect.getOwnPropertyDescriptor(s, f), h = r.get(f);
        if (h !== void 0) {
          var u = i(h);
          if (u === Ee)
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
        var c = r.get(f), h = c !== void 0 && c.v !== Ee || Reflect.has(s, f);
        if (c !== void 0 || se !== null && (!h || jt(s, f)?.writable)) {
          c === void 0 && (c = o(() => {
            var v = h ? ge(s[f]) : Ee, _ = /* @__PURE__ */ H(v);
            return _;
          }), r.set(f, c));
          var u = i(c);
          if (u === Ee)
            return !1;
        }
        return h;
      },
      set(s, f, c, h) {
        var u = r.get(f), v = f in s;
        if (n && f === "length")
          for (var _ = c; _ < /** @type {Source<number>} */
          u.v; _ += 1) {
            var b = r.get(_ + "");
            b !== void 0 ? w(b, Ee) : _ in s && (b = o(() => /* @__PURE__ */ H(Ee)), r.set(_ + "", b));
          }
        if (u === void 0)
          (!v || jt(s, f)?.writable) && (u = o(() => /* @__PURE__ */ H(void 0)), w(u, ge(c)), r.set(f, u));
        else {
          v = u.v !== Ee;
          var R = o(() => ge(c));
          w(u, R);
        }
        var m = Reflect.getOwnPropertyDescriptor(s, f);
        if (m?.set && m.set.call(h, c), !v) {
          if (n && typeof f == "string") {
            var L = (
              /** @type {Source<number>} */
              r.get("length")
            ), B = Number(f);
            Number.isInteger(B) && B >= L.v && w(L, B + 1);
          }
          lr(a);
        }
        return !0;
      },
      ownKeys(s) {
        i(a);
        var f = Reflect.ownKeys(s).filter((u) => {
          var v = r.get(u);
          return v === void 0 || v.v !== Ee;
        });
        for (var [c, h] of r)
          h.v !== Ee && !(c in s) && f.push(c);
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
function Ci() {
  if (Kr === void 0) {
    Kr = window, ea = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    ta = jt(e, "firstChild").get, ra = jt(e, "nextSibling").get, pn(t) && (t[Vr] = void 0, t[Pn] = null, t[Yr] = void 0, t.__e = void 0), pn(r) && (r[zr] = void 0);
  }
}
function ut(t = "") {
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
function ce(t, e = !1) {
  {
    var r = /* @__PURE__ */ Je(t);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ur(r) : r;
  }
}
function q(t, e = !1) {
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
  var e = se;
  if (e === null)
    return le.f |= bt, t;
  if ((e.f & Gt) === 0 && (e.f & Ht) === 0)
    throw t;
  $e(t, e);
}
function $e(t, e) {
  if (!(e !== null && (e.f & De) !== 0)) {
    for (; e !== null; ) {
      if ((e.f & Hr) !== 0 && (e.f & (De | mr)) === 0) {
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
  se === null && (le === null && si(), li()), ht && ii();
}
function Mi(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function _t(t, e) {
  var r = se;
  r !== null && (r.f & Ie) !== 0 && (t |= Ie);
  var n = {
    ctx: Te,
    deps: null,
    nodes: null,
    f: t | xe | Qe,
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
  if ((t & Ht) !== 0)
    ir !== null ? ir.push(n) : wt.ensure().schedule(n);
  else if (e !== null) {
    try {
      Wt(n);
    } catch (o) {
      throw qe(n), o;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Xt) === 0 && (a = a.first, (t & Xe) !== 0 && (t & Vt) !== 0 && a !== null && (a.f |= Vt));
  }
  if (a !== null && (a.parent = r, r !== null && Mi(a, r), le !== null && (le.f & Pe) !== 0 && (t & vt) === 0)) {
    var l = (
      /** @type {Derived} */
      le
    );
    (l.effects ??= []).push(a);
  }
  return n;
}
function un() {
  return le !== null && !Ze;
}
function Lr(t) {
  const e = _t(Tr, null);
  return me(e, Se), e.teardown = t, e;
}
function qt(t) {
  Ri();
  var e = (
    /** @type {Effect} */
    se.f
  ), r = !le && (e & We) !== 0 && Te !== null && !Te.i;
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
  wt.ensure();
  const e = _t(vt | Xt, t);
  return (r = {}) => new Promise((n) => {
    r.outro ? Ct(e, () => {
      qe(e), n(void 0);
    }) : (qe(e), n(void 0));
  });
}
function cn(t) {
  return _t(Ht, t);
}
function Oi(t) {
  return _t(Bt | Xt, t);
}
function Jt(t, e = 0) {
  return _t(Tr | e, t);
}
function N(t, e = [], r = [], n = []) {
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
function Ve(t) {
  return _t(We | Xt, t);
}
function la(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = ht, n = le;
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
      a.abort(fr);
    });
    var n = r.next;
    (r.f & vt) !== 0 ? r.parent = null : qe(r, e), r = n;
  }
}
function Pi(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & We) === 0 && qe(e), e = r;
  }
}
function qe(t, e = !0) {
  var r = !1;
  (e || (t.f & Fa) !== 0) && t.nodes !== null && t.nodes.end !== null && (sa(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), r = !0), t.f |= mr, dn(t, e && !r), or(t, 0);
  var n = t.nodes && t.nodes.t;
  if (n !== null)
    for (const l of n)
      l.stop();
  la(t), t.f ^= mr, t.f |= De;
  var a = t.parent;
  a !== null && a.first !== null && oa(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function sa(t, e) {
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
  t.f |= rn, fa(t, n, !0);
  var a = () => {
    r && qe(t), e && e();
  }, l = n.length;
  if (l > 0) {
    var o = () => --l || a();
    for (var s of n)
      s.out(o);
  } else
    a();
}
function fa(t, e, r) {
  if ((t.f & Ie) === 0) {
    t.f ^= Ie;
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
        (a.f & We) !== 0 && (t.f & Xe) !== 0;
        fa(a, e, o ? r : !1);
      }
      a = l;
    }
  }
}
function kr(t) {
  t.f &= ~rn, ua(t, !0);
}
function ua(t, e) {
  if ((t.f & rn) === 0 && (t.f & Ie) !== 0) {
    t.f ^= Ie, (t.f & Se) === 0 && (me(t, xe), wt.ensure().schedule(t));
    for (var r = t.first; r !== null; ) {
      var n = r.next, a = (r.f & Vt) !== 0 || (r.f & We) !== 0;
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
      var a = r === n ? null : /* @__PURE__ */ ur(r);
      e.append(r), r = a;
    }
}
let gr = !1, ht = !1;
function xn(t) {
  ht = t;
}
let le = null, Ze = !1;
function Ge(t) {
  le = t;
}
let se = null;
function nt(t) {
  se = t;
}
let rt = null;
function ca(t) {
  le !== null && ((le.f & yr) !== 0 || (le.f & Pe) !== 0) && (rt ??= /* @__PURE__ */ new Set()).add(t);
}
let Be = null, Ue = 0, He = null;
function Ii(t) {
  He = t;
}
let da = 1, At = 0, Tt = At;
function kn(t) {
  Tt = t;
}
function va() {
  return ++da;
}
function cr(t) {
  var e = t.f;
  if ((e & xe) !== 0)
    return !0;
  if ((e & Ye) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      t.deps
    ), n = r.length, a = 0; a < n; a++) {
      var l = r[a];
      if (cr(
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
    Ke === null && me(t, Se);
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
      ) : e === l && (r ? me(l, xe) : (l.f & Se) !== 0 && me(l, Ye), fn(
        /** @type {Effect} */
        l
      ));
    }
}
function _a(t) {
  var e = Be, r = Ue, n = He, a = le, l = rt, o = Te, s = Ze, f = Tt, c = t.f;
  Be = /** @type {null | Value[]} */
  null, Ue = 0, He = null, le = (c & (We | vt)) === 0 ? t : null, rt = null, Yt(t.ctx), Ze = !1, Tt = ++At, t.ac !== null && (Kt(() => {
    t.ac.abort(fr);
  }), t.ac = null);
  try {
    t.f |= yr;
    var h = (
      /** @type {Function} */
      t.fn
    ), u = h();
    t.f |= Gt;
    var v = En(t);
    if (Un() && He !== null && !Ze && v !== null && (t.f & (Pe | Ye | xe)) === 0)
      for (var _ = 0; _ < /** @type {Source[]} */
      He.length; _++)
        ha(
          He[_],
          /** @type {Effect} */
          t
        );
    if (a !== null && a !== t) {
      if (At++, a.deps !== null)
        for (let b = 0; b < r; b += 1)
          a.deps[b].rv = At;
      if (e !== null)
        for (const b of e)
          b.rv = At;
      He !== null && (n === null ? n = He : n.push(.../** @type {Source[]} */
      He));
    }
    return (t.f & bt) !== 0 && (t.f ^= bt), u;
  } catch (b) {
    return En(t), Li(b);
  } finally {
    t.f ^= yr, Be = e, Ue = r, He = n, le = a, rt = l, Yt(o), Ze = s, Tt = f;
  }
}
function En(t) {
  var e = t.deps, r = te?.is_fork;
  if (Be !== null) {
    var n;
    if (r || or(t, Ue), e !== null && Ue > 0)
      for (e.length = Ue + Be.length, n = 0; n < Be.length; n++)
        e[Ue + n] = Be[n];
    else
      t.deps = e = Be;
    if (un() && (t.f & Qe) !== 0)
      for (n = Ue; n < e.length; n++)
        (e[n].reactions ??= []).push(t);
  } else !r && e !== null && Ue < e.length && (or(t, Ue), e.length = Ue);
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
  (Be === null || !pr.call(Be, e))) {
    var l = (
      /** @type {Derived} */
      e
    );
    (l.f & Qe) !== 0 && (l.f ^= Qe), l.v !== Ee && an(l), l.ac !== null && Kt(() => {
      l.ac.abort(fr), l.ac = null, me(l, xe);
    }), wi(l), or(l, 0);
  }
}
function or(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      Di(t, r[n]);
}
function Wt(t) {
  var e = t.f;
  if ((e & De) === 0) {
    me(t, Se);
    var r = se, n = gr;
    se = t, gr = (e & (We | vt)) === 0;
    try {
      (e & (Xe | Nn)) !== 0 ? Pi(t) : dn(t), la(t);
      var a = _a(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = da;
      var l;
    } finally {
      gr = n, se = r;
    }
  }
}
async function Er() {
  await Promise.resolve(), ki();
}
function i(t) {
  var e = t.f, r = (e & Pe) !== 0;
  if (le !== null && !Ze) {
    var n = se !== null && (se.f & De) !== 0;
    if (!n && (rt === null || !rt.has(t))) {
      var a = le.deps;
      if ((le.f & yr) !== 0)
        t.rv < At && (t.rv = At, Be === null && a !== null && a[Ue] === t ? Ue++ : Be === null ? Be = [t] : Be.push(t));
      else {
        le.deps ??= [], pr.call(le.deps, t) || le.deps.push(t);
        var l = t.reactions;
        l === null ? t.reactions = [le] : pr.call(l, le) || l.push(le);
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
      return ((o.f & Se) === 0 && o.reactions !== null || pa(o)) && (s = sn(o)), tt.set(o, s), s;
    }
    var f = (o.f & Qe) === 0 && !Ze && le !== null && (gr || (le.f & Qe) !== 0), c = (o.f & Gt) === 0;
    cr(o) && (f && (o.f |= Qe), Wn(o)), f && !c && (Gn(o), ga(o));
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
function Fe(t) {
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
      return Kt(() => r?.call(this, l));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? (a.__removed = !1, ot(() => {
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
function he(t, e, r) {
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
    var h = le, u = se;
    Ge(null), nt(null);
    try {
      for (var v, _ = []; l !== null && l !== e; ) {
        try {
          var b = l[rr]?.[n];
          b != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === l) && b.call(l, t);
        } catch (R) {
          v ? _.push(R) : v = R;
        }
        if (t.cancelBubble) break;
        o++, l = o < a.length ? (
          /** @type {Element} */
          a[o]
        ) : null;
      }
      if (v) {
        for (let R of _)
          queueMicrotask(() => {
            throw R;
          });
        throw v;
      }
    } finally {
      t[rr] = e, delete t.currentTarget, Ge(h), nt(u);
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
function Rt(t, e) {
  var r = (
    /** @type {Effect} */
    se
  );
  r.nodes === null && (r.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function C(t, e) {
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
      Rt(s, f);
    } else
      Rt(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Vi(t, e, r = "svg") {
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
    return Rt(f, f), f;
  };
}
// @__NO_SIDE_EFFECTS__
function Yi(t, e) {
  return /* @__PURE__ */ Vi(t, e, "svg");
}
function ze(t = "") {
  {
    var e = ut(t + "");
    return Rt(e, e), e;
  }
}
function dt() {
  var t = document.createDocumentFragment(), e = document.createComment(""), r = ut();
  return t.append(e, r), Rt(e, r), t;
}
function p(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function zi(t) {
  let e = 0, r = Lt(0), n;
  return () => {
    un() && (i(r), Jt(() => (e === 0 && (n = Fe(() => t(() => lr(r)))), e += 1, () => {
      ot(() => {
        e -= 1, e === 0 && (n?.(), n = void 0, lr(r));
      });
    })));
  };
}
var Wi = Vt | Xt;
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
  #o;
  /** @type {Effect} */
  #n;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #s = null;
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
  #b = zi(() => (this.#c = Lt(this.#h), () => {
    this.#c = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, r, n, a) {
    this.#t = e, this.#e = r, this.#o = (l) => {
      var o = (
        /** @type {Effect} */
        se
      );
      o.b = this, o.f |= Hr, n(l);
    }, this.parent = /** @type {Effect} */
    se.b, this.transform_error = a ?? this.parent?.transform_error ?? ((l) => l), this.#n = Rr(() => {
      this.#y();
    }, Wi);
  }
  #x() {
    try {
      this.#i = Ve(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #p(e) {
    const r = this.#e.failed, { reset: n, invoke_onerror: a } = this.#m(e);
    ot(a), r && (this.#s = Ve(() => {
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
      r = !0, n && vi(), this.#s !== null && Ct(this.#s, () => {
        this.#s = null;
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
    e && (this.is_pending = !0, this.#r = Ve(() => e(this.#t)), ot(() => {
      var r = this.#a = document.createDocumentFragment(), n = ut(), a = !1;
      if (r.append(n), this.#i = this.#w(() => {
        try {
          return Ve(() => this.#o(n));
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
        this.#o(this.#t);
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
    Vn(e, this.#d, this.#g);
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
    var r = se, n = le, a = Te;
    nt(this.#n), Ge(this.#n), Yt(this.#n.ctx);
    try {
      return wt.ensure(), e();
    } finally {
      nt(r), Ge(n), Yt(a);
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
      this.#u = !1, this.#c && zt(this.#c, this.#h);
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
    te?.is_fork ? (this.#i && te.skip_effect(this.#i), this.#r && te.skip_effect(this.#r), this.#s && te.skip_effect(this.#s), te.oncommit(() => {
      this.#E(e);
    })) : this.#E(e);
  }
  /**
   * @param {unknown} error
   */
  #E(e) {
    this.#i && (qe(this.#i), this.#i = null), this.#r && (qe(this.#r), this.#r = null), this.#s && (qe(this.#s), this.#s = null);
    let r = this.#e.failed;
    const n = (a) => {
      const { reset: l, invoke_onerror: o } = this.#m(a);
      o(), r && (this.#s = this.#w(() => {
        try {
          return Ve(() => {
            var s = (
              /** @type {Effect} */
              se
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
    ot(() => {
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
function O(t, e) {
  var r = e == null ? "" : typeof e == "object" ? `${e}` : e;
  r !== /** @type {any} */
  (t[zr] ??= t.nodeValue) && (t[zr] = r, t.nodeValue = `${r}`);
}
function Ki(t, e) {
  return Ji(t, e);
}
const dr = /* @__PURE__ */ new Map();
function Ji(t, { target: e, anchor: r, props: n = {}, events: a, context: l, intro: o = !0, transformError: s }) {
  Ci();
  var f = void 0, c = Ni(() => {
    var h = r ?? e.appendChild(ut());
    Gi(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (_) => {
        Re({});
        var b = (
          /** @type {ComponentContext} */
          Te
        );
        l && (b.c = l), a && (n.$$events = a), f = t(_, n) || nn(), Me();
      },
      s
    );
    var u = /* @__PURE__ */ new Set(), v = (_) => {
      for (var b = 0; b < _.length; b++) {
        var R = _[b];
        if (!u.has(R)) {
          u.add(R);
          var m = Bi(R);
          for (const z of [e, document]) {
            var L = dr.get(z);
            L === void 0 && (L = /* @__PURE__ */ new Map(), dr.set(z, L));
            var B = L.get(R);
            B === void 0 ? (z.addEventListener(R, Qr, { passive: m }), L.set(R, 1)) : L.set(R, B + 1);
          }
        }
      }
    };
    return v(Cr(ma)), Zr.add(v), () => {
      for (var _ of u)
        for (const m of [e, document]) {
          var b = (
            /** @type {Map<string, number>} */
            dr.get(m)
          ), R = (
            /** @type {number} */
            b.get(_)
          );
          --R == 0 ? (m.removeEventListener(_, Qr), b.delete(_), b.size === 0 && dr.delete(m)) : b.set(_, R);
        }
      Zr.delete(v), h !== r && h.parentNode?.removeChild(h);
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
  #o = /* @__PURE__ */ new Set();
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
        kr(n), this.#o.delete(r);
      else {
        var a = this.#e.get(r);
        a && (kr(a.effect), this.#l.set(r, a.effect), this.#e.delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
      }
      for (const [l, o] of this.#t) {
        if (this.#t.delete(l), l === e)
          break;
        const s = this.#e.get(o);
        s && (qe(s.effect), this.#e.delete(o));
      }
      for (const [l, o] of this.#l) {
        if (l === r || this.#o.has(l)) continue;
        const s = () => {
          if (Array.from(this.#t.values()).includes(l)) {
            var c = document.createDocumentFragment();
            vn(o, c), c.append(ut()), this.#e.set(l, { effect: o, fragment: c });
          } else
            qe(o);
          this.#o.delete(l), this.#l.delete(l);
        };
        this.#n || !n ? (this.#o.add(l), Ct(o, s, !1)) : s();
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
    ), a = na();
    if (r && !this.#l.has(e) && !this.#e.has(e))
      if (a) {
        var l = document.createDocumentFragment(), o = ut();
        l.append(o), this.#e.set(e, {
          effect: Ve(() => r(o)),
          fragment: l
        });
      } else
        this.#l.set(
          e,
          Ve(() => r(this.anchor))
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
function be(t, e) {
  return e;
}
function el(t, e, r) {
  for (var n = [], a = e.length, l, o = e.length, s = 0; s < a; s++) {
    let u = e[s];
    Ct(
      u,
      () => {
        if (l) {
          if (l.pending.delete(u), l.done.add(u), l.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            $r(t, Cr(l.done)), v.delete(l), v.size === 0 && (t.outrogroups = null);
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
      ), h = (
        /** @type {Element} */
        c.parentNode
      );
      Ti(h), h.append(c), t.items.clear();
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
      qe(e[a], r);
  }
}
var Sn;
function ve(t, e, r, n, a, l = null) {
  var o = t, s = /* @__PURE__ */ new Map(), f = (e & In) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(ut());
  }
  var h = null, u = /* @__PURE__ */ zn(() => {
    var z = r();
    return (
      /** @type {V[]} */
      Ar(z) ? z : z == null ? [] : Cr(z)
    );
  }), v, _ = /* @__PURE__ */ new Map(), b = !0;
  function R(z) {
    (B.effect.f & De) === 0 && (B.pending.delete(z), B.fallback = h, tl(B, v, o, e, n), h !== null && (v.length === 0 ? (h.f & et) === 0 ? kr(h) : (h.f ^= et, nr(h, null, o)) : Ct(h, () => {
      h = null;
    })));
  }
  function m(z) {
    B.pending.delete(z);
  }
  var L = Rr(() => {
    v = /** @type {V[]} */
    i(u);
    for (var z = v.length, F = /* @__PURE__ */ new Set(), y = (
      /** @type {Batch} */
      te
    ), j = na(), U = 0; U < z; U += 1) {
      var I = v[U], S = n(I, U), T = b ? null : s.get(S);
      T ? (T.v && zt(T.v, I), T.i && zt(T.i, U), j && y.unskip_effect(T.e)) : (T = rl(
        s,
        b ? o : Sn ??= ut(),
        I,
        S,
        U,
        a,
        e,
        r
      ), b || (T.e.f |= et), s.set(S, T)), F.add(S);
    }
    if (z === 0 && l && !h && (b ? h = Ve(() => l(o)) : (h = Ve(() => l(Sn ??= ut())), h.f |= et)), z > F.size && ai(), !b)
      if (_.set(y, F), j) {
        for (const [M, E] of s)
          F.has(M) || y.skip_effect(E.e);
        y.oncommit(R), y.ondiscard(m);
      } else
        R(y);
    i(u);
  }), B = { effect: L, items: s, pending: _, outrogroups: null, fallback: h };
  b = !1;
}
function er(t) {
  for (; t !== null && (t.f & We) === 0; )
    t = t.next;
  return t;
}
function tl(t, e, r, n, a) {
  var l = (n & Ya) !== 0, o = e.length, s = t.items, f = er(t.effect.first), c, h = null, u, v = [], _ = [], b, R, m, L;
  if (l)
    for (L = 0; L < o; L += 1)
      b = e[L], R = a(b, L), m = /** @type {EachItem} */
      s.get(R).e, (m.f & et) === 0 && (m.nodes?.a?.measure(), (u ??= /* @__PURE__ */ new Set()).add(m));
  for (L = 0; L < o; L += 1) {
    if (b = e[L], R = a(b, L), m = /** @type {EachItem} */
    s.get(R).e, t.outrogroups !== null)
      for (const T of t.outrogroups)
        T.pending.delete(m), T.done.delete(m);
    if ((m.f & Ie) !== 0 && (kr(m), l && (m.nodes?.a?.unfix(), (u ??= /* @__PURE__ */ new Set()).delete(m))), (m.f & et) !== 0)
      if (m.f ^= et, m === f)
        nr(m, null, r);
      else {
        var B = h ? h.next : f;
        m === t.effect.last && (t.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), mt(t, h, m), mt(t, m, B), nr(m, B, r), h = m, v = [], _ = [], f = er(h.next);
        continue;
      }
    if (m !== f) {
      if (c !== void 0 && c.has(m)) {
        if (v.length < _.length) {
          var z = _[0], F;
          h = z.prev;
          var y = v[0], j = v[v.length - 1];
          for (F = 0; F < v.length; F += 1)
            nr(v[F], z, r);
          for (F = 0; F < _.length; F += 1)
            c.delete(_[F]);
          mt(t, y.prev, j.next), mt(t, h, y), mt(t, j, z), f = z, h = j, L -= 1, v = [], _ = [];
        } else
          c.delete(m), nr(m, f, r), mt(t, m.prev, m.next), mt(t, m, h === null ? t.effect.first : h.next), mt(t, h, m), h = m;
        continue;
      }
      for (v = [], _ = []; f !== null && f !== m; )
        (c ??= /* @__PURE__ */ new Set()).add(f), _.push(f), f = er(f.next);
      if (f === null)
        continue;
    }
    (m.f & et) === 0 && v.push(m), h = m, f = er(m.next);
  }
  if (t.outrogroups !== null) {
    for (const T of t.outrogroups)
      T.pending.size === 0 && ($r(t, Cr(T.done)), t.outrogroups?.delete(T));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (f !== null || c !== void 0) {
    var U = [];
    if (c !== void 0)
      for (m of c)
        (m.f & Ie) === 0 && U.push(m);
    for (; f !== null; )
      (f.f & Ie) === 0 && f !== t.fallback && U.push(f), f = er(f.next);
    var I = U.length;
    if (I > 0) {
      var S = (n & In) !== 0 && o === 0 ? r : null;
      if (l) {
        for (L = 0; L < I; L += 1)
          U[L].nodes?.a?.measure();
        for (L = 0; L < I; L += 1)
          U[L].nodes?.a?.fix();
      }
      el(t, U, S);
    }
  }
  l && ot(() => {
    if (u !== void 0)
      for (m of u)
        m.nodes?.a?.apply();
  });
}
function rl(t, e, r, n, a, l, o, s) {
  var f = (o & Ha) !== 0 ? (o & za) === 0 ? /* @__PURE__ */ Si(r, !1, !1) : Lt(r) : null, c = (o & Va) !== 0 ? Lt(a) : null;
  return {
    v: f,
    i: c,
    e: Ve(() => (l(e, f ?? r, c ?? a, s), () => {
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
  N(() => {
    var c = (
      /** @type {Effect} */
      se
    );
    if (s !== (s = e() ?? "")) {
      if (r) {
        c.nodes = null, f.innerHTML = /** @type {string} */
        s, s !== "" && Rt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Je(f),
          /** @type {TemplateNode} */
          f.lastChild
        );
        return;
      }
      if (c.nodes !== null && (sa(
        c.nodes.start,
        /** @type {TemplateNode} */
        c.nodes.end
      ), c.nodes = null), s !== "") {
        var h = n ? Qa : a ? $a : void 0, u = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          aa(n ? "svg" : a ? "math" : "template", h)
        );
        u.innerHTML = /** @type {any} */
        s;
        var v = n || a ? u : (
          /** @type {HTMLTemplateElement} */
          u.content
        );
        if (Rt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Je(v),
          /** @type {TemplateNode} */
          v.lastChild
        ), n || a)
          for (; /* @__PURE__ */ Je(v); )
            o.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Je(v)
            );
        else
          o.before(v);
      }
    }
  });
}
function Mt(t, e, r) {
  cn(() => {
    var n = Fe(() => e(t, r?.()) || {});
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
const An = [...` 	
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
          (o === 0 || An.includes(n[o - 1])) && (s === n.length || An.includes(n[s])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(s + 1) : o = s;
        }
  }
  return n === "" ? null : n;
}
function Cn(t, e = !1) {
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
      var c = 0, h = -1;
      const R = t.length;
      for (var u = 0; u < R; u++) {
        var v = t[u];
        if (s ? v === "/" && t[u - 1] === "*" && (s = !1) : l ? l === v && (l = !1) : v === "/" && t[u + 1] === "*" ? s = !0 : v === '"' || v === "'" ? l = v : v === "(" ? o++ : v === ")" && o--, !s && l === !1 && o === 0) {
          if (v === ":" && h === -1)
            h = u;
          else if (v === ";" || u === R - 1) {
            if (h !== -1) {
              var _ = Fr(t.substring(c, h).trim());
              if (!f.includes(_)) {
                v !== ";" && u++;
                var b = t.substring(c, u).trim();
                r += " " + b + ";";
              }
            }
            c = u + 1, h = -1;
          }
        }
      }
    }
    return n && (r += Cn(n)), a && (r += Cn(a, !0)), r = r.trim(), r === "" ? null : r;
  }
  return t == null ? null : String(t);
}
function Le(t, e, r, n, a, l) {
  var o = (
    /** @type {any} */
    t[Vr]
  );
  if (o !== r || o === void 0) {
    var s = il(r, n, l);
    s == null ? t.removeAttribute("class") : t.className = s, t[Vr] = r;
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
function Ft(t, e, r, n) {
  var a = (
    /** @type {any} */
    t[Yr]
  );
  if (a !== e) {
    var l = ll(e, n);
    l == null ? t.removeAttribute("style") : t.style.cssText = l, t[Yr] = e;
  } else n && (Array.isArray(n) ? (jr(t, r?.[0], n[0]), jr(t, r?.[1], n[1], "important")) : jr(t, r, n));
  return n;
}
function sl(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function ol(t, e) {
  var r = t.__defaultValue, n = t.multiple, a = n ? r ?? [] : null;
  if (!(n && !Ar(a))) {
    t.selectedIndex;
    for (var l of t.options) {
      var o = Ut(l);
      sl(
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
    if (!Ar(e))
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
    r.every(ul) || ("__defaultValue" in t && ol(t), "__value" in t && hn(t, t.__value));
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
    r(s), t.__value = s, te !== null && n.add(te);
  }), cn(() => {
    var l = e();
    if (t === document.activeElement) {
      var o = (
        /** @type {Batch} */
        te
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
  var r = Ea(t);
  r.value === (r.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== vl) || (t.value = e ?? "");
}
function G(t, e, r, n) {
  var a = Ea(t);
  a[e] !== (a[e] = r) && (e === "loading" && (t[qa] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && hl(t).has(e) ? t[e] = r : t.setAttribute(e, r));
}
function Ea(t) {
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
function Sr(t, e, r = e) {
  var n = /* @__PURE__ */ new WeakSet();
  ln(t, "input", async (a) => {
    var l = a ? t.defaultValue : t.value;
    if (l = Br(t) ? qr(l) : l, r(l), te !== null && n.add(te), await Er(), l !== (l = e())) {
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
  Fe(e) == null && t.value && (r(Br(t) ? qr(t.value) : t.value), te !== null && n.add(te)), Jt(() => {
    var a = e();
    if (t === document.activeElement) {
      var l = (
        /** @type {Batch} */
        te
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
  Fe(e) == null && r(t.checked), Jt(() => {
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
function Nt(t = nn(), e, r, n) {
  var a = (
    /** @type {ComponentContext} */
    Te.r
  ), l = (
    /** @type {Effect} */
    se
  );
  return cn(() => {
    var o, s;
    return Jt(() => {
      o = s, s = [], Fe(() => {
        Ur(r(...s), t) || (e(t, ...s), o && Ur(r(...o), t) && e(null, ...o));
      });
    }), () => {
      let f = l;
      for (; f !== a && f.parent !== null && f.parent.f & mr; )
        f = f.parent;
      const c = () => {
        s && Ur(r(...s), t) && e(null, ...s);
      }, h = f.teardown;
      f.teardown = () => {
        c(), h?.();
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
let vr = !1;
function pl(t) {
  var e = vr;
  try {
    return vr = !1, [t(), vr];
  } finally {
    vr = e;
  }
}
function Ot(t, e, r, n) {
  var a = !0, l = (r & Xa) !== 0, o = (r & Ka) !== 0, s = (
    /** @type {V} */
    n
  ), f = !0, c = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), h = () => o && a ? (c ??= /* @__PURE__ */ sr(
    /** @type {() => V} */
    n
  ), i(c)) : (f && (f = !1, s = o ? Fe(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s);
  let u;
  if (l) {
    var v = ft in t || Ba in t;
    u = jt(t, e)?.set ?? (v && e in t ? (F) => t[e] = F : void 0);
  }
  var _, b = !1;
  l ? [_, b] = pl(() => (
    /** @type {V} */
    t[e]
  )) : _ = /** @type {V} */
  t[e], _ === void 0 && n !== void 0 && (_ = h(), u && (fi(), u(_)));
  var R;
  if (R = () => {
    var F = (
      /** @type {V} */
      t[e]
    );
    return F === void 0 ? h() : (f = !0, F);
  }, (r & Ga) === 0)
    return R;
  if (u) {
    var m = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(F, y) {
        return arguments.length > 0 ? ((!y || m || b) && u(y ? R() : F), F) : R();
      })
    );
  }
  var L = !1, B = ((r & Wa) !== 0 ? sr : zn)(() => (L = !1, R()));
  l && i(B);
  var z = (
    /** @type {Effect} */
    se
  );
  return (
    /** @type {() => V} */
    (function(F, y) {
      if (arguments.length > 0) {
        const j = y ? i(B) : l ? ge(F) : F;
        return w(B, j), L = !0, s !== void 0 && (s = j), F;
      }
      return ht && L || (z.f & De) !== 0 ? B.v : i(B);
    })
  );
}
function xt(t) {
  Te === null && qn(), qt(() => {
    const e = Fe(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function _n(t) {
  Te === null && qn(), xt(() => () => Fe(t));
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
var bl = /* @__PURE__ */ C('<th><button type="button" class="column-label"> <span class="column-sort" aria-hidden="true"> </span></button><button type="button" class="column-resize"></button></th>'), yl = /* @__PURE__ */ C('<i role="img"></i>'), wl = /* @__PURE__ */ C('<button class="open-challenge"> </button>'), xl = /* @__PURE__ */ C("<td><!></td>"), kl = /* @__PURE__ */ C("<tr></tr>"), El = /* @__PURE__ */ C('<div class="message-list"><table><thead><tr></tr></thead><tbody id="challenge-rows"></tbody></table></div>');
function Sl(t, e) {
  Re(e, !0);
  let r = Ot(e, "hidden", 3, !1), n = Ot(e, "solvesEnabled", 3, !1);
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
  let f = /* @__PURE__ */ H(ge([...a])), c = /* @__PURE__ */ H(null), h, u = /* @__PURE__ */ ue(() => i(f).filter((S) => S !== "solves" || n())), v = /* @__PURE__ */ H(ge({
    key: Fe(() => e.defaultOrder) === "name" ? "subject" : "id",
    direction: 1
  })), _ = /* @__PURE__ */ H(window.innerWidth <= 760), b = /* @__PURE__ */ ue(() => {
    const S = i(v).key === "solves" && !n() ? "id" : i(v).key, T = (M) => ({
      status: Number(M.solved_by_me),
      subject: M.name,
      category: M.category,
      points: M.value,
      solves: M.solves ?? -1,
      id: M.id
    })[S];
    return [...e.challenges].sort((M, E) => (["id", "points", "status", "solves"].includes(S) ? T(M) - T(E) : s.compare(T(M), T(E))) * i(v).direction || M.id - E.id);
  }), R = /* @__PURE__ */ ue(() => i(c) ? i(u).filter((S) => !i(_) || S !== "category").reduce((S, T) => S + (i(c)[T] ?? o[T]), 0) : null);
  function m() {
    w(
      c,
      Object.fromEntries([...h.tHead.rows[0].cells].map((S) => [
        S.dataset.column,
        S.getBoundingClientRect().width || o[S.dataset.column]
      ])),
      !0
    );
  }
  async function L(S, T) {
    if (!T || T === S) return;
    i(c) || m();
    const M = new Map([...h.querySelectorAll("th,td")].map((A) => [A, A.getBoundingClientRect().left])), E = i(f).indexOf(T), g = i(f).filter((A) => A !== S);
    g.splice(E, 0, S), w(f, g, !0), await Er(), matchMedia("(prefers-reduced-motion: reduce)").matches || M.forEach((A, K) => {
      const $ = A - K.getBoundingClientRect().left;
      $ && K.animate(
        [
          { transform: `translateX(${$}px)` },
          { transform: "translateX(0)" }
        ],
        { duration: 180, easing: "ease-out" }
      );
    });
  }
  function B(S, { key: T, resize: M = !1 }) {
    const E = S.closest("th");
    let g, A, K = !1;
    function $() {
      A?.remove(), A = null, g = null, E.classList.remove("column-dragging"), h.querySelectorAll(".column-drop-before,.column-drop-after").forEach((x) => x.classList.remove("column-drop-before", "column-drop-after"));
    }
    function Q(x) {
      x.button !== 0 || !x.isPrimary || (K = !1, m(), g = {
        x: x.clientX,
        y: x.clientY,
        offset: x.clientX - E.getBoundingClientRect().left,
        width: i(c)[T]
      }, S.setPointerCapture(x.pointerId));
    }
    function J(x) {
      if (g) {
        if (M) {
          i(c)[T] = Math.max(o[T], g.width + x.clientX - g.x);
          return;
        }
        if (!A && Math.hypot(x.clientX - g.x, x.clientY - g.y) > 5 && (K = !0, A = document.createElement("div"), A.className = "column-drag-ghost", A.textContent = l[T], A.setAttribute("aria-hidden", "true"), A.style.width = `${g.width}px`, document.body.append(A), E.classList.add("column-dragging")), A) {
          A.style.left = `${x.clientX - g.offset}px`, A.style.top = `${x.clientY + 12}px`, h.querySelectorAll(".column-drop-before,.column-drop-after").forEach((re) => re.classList.remove("column-drop-before", "column-drop-after"));
          const V = document.elementFromPoint(x.clientX, x.clientY)?.closest("th");
          V?.parentElement === E.parentElement && V !== E && V.classList.add(i(f).indexOf(T) < i(f).indexOf(V.dataset.column) ? "column-drop-after" : "column-drop-before");
        }
      }
    }
    function ee(x) {
      if (!g) return;
      const V = document.elementFromPoint(x.clientX, x.clientY)?.closest("th"), re = !!A;
      $(), S.hasPointerCapture(x.pointerId) && S.releasePointerCapture(x.pointerId), !M && re && V?.parentElement === E.parentElement && L(T, V.dataset.column), S.focus();
    }
    function fe(x) {
      if (!M) {
        if (K && x.detail !== 0) {
          K = !1;
          return;
        }
        w(
          v,
          {
            key: T,
            direction: i(v).key === T ? -i(v).direction : 1
          },
          !0
        );
      }
    }
    function ie(x) {
      if (!["ArrowLeft", "ArrowRight"].includes(x.key) || !M && !x.altKey) return;
      x.preventDefault();
      const V = x.key === "ArrowRight" ? 1 : -1;
      if (M)
        m(), i(c)[T] = Math.max(o[T], i(c)[T] + V * 10);
      else {
        const re = i(u).filter((ke) => !i(_) || ke !== "category");
        L(T, re[re.indexOf(T) + V]);
      }
    }
    const P = {
      pointerdown: Q,
      pointermove: J,
      pointerup: ee,
      pointercancel: $,
      lostpointercapture: $,
      click: fe,
      keydown: ie
    };
    return Object.entries(P).forEach(([x, V]) => S.addEventListener(x, V)), {
      destroy() {
        $(), Object.entries(P).forEach(([x, V]) => S.removeEventListener(x, V));
      }
    };
  }
  var z = El();
  ct("resize", Kr, () => w(_, window.innerWidth <= 760));
  var F = k(z);
  let y;
  var j = k(F), U = k(j);
  ve(U, 20, () => i(u), (S) => S, (S, T) => {
    var M = bl();
    let E;
    var g = k(M), A = k(g), K = d(A), $ = q(K, !0);
    Mt(g, (J, ee) => B?.(J, ee), () => ({ key: T }));
    var Q = d(g);
    Mt(Q, (J, ee) => B?.(J, ee), () => ({ key: T, resize: !0 })), N(() => {
      G(M, "data-column", T), G(M, "aria-sort", i(v).key === T ? i(v).direction === 1 ? "ascending" : "descending" : "none"), E = Ft(M, "", E, {
        width: i(c) ? `${i(c)[T] ?? o[T]}px` : void 0
      }), G(g, "aria-label", `${l[T]} column. Click to sort. Drag or use Alt and arrow keys to move.`), O(A, l[T]), O($, i(v).key === T ? i(v).direction === 1 ? "▲" : "▼" : ""), G(Q, "aria-label", `Resize ${l[T]} column`);
    }), p(S, M);
  });
  var I = d(j);
  ve(I, 21, () => i(b), (S) => S.id, (S, T) => {
    var M = kl();
    ve(M, 20, () => i(u), (E) => E, (E, g) => {
      var A = xl(), K = k(A);
      {
        var $ = (ie) => {
          var P = yl();
          N(() => {
            Le(P, 1, `fas fa-envelope${i(T).solved_by_me ? "-open" : ""}`), G(P, "aria-label", i(T).solved_by_me ? "Solved" : "Unsolved");
          }), p(ie, P);
        }, Q = (ie) => {
          var P = wl(), x = q(P, !0);
          N(() => {
            G(P, "data-id", i(T).id), O(x, i(T).name);
          }), he("click", P, () => e.onopen(i(T).id)), p(ie, P);
        }, J = (ie) => {
          var P = ze();
          N(() => O(P, i(T).category)), p(ie, P);
        }, ee = (ie) => {
          var P = ze();
          N(() => O(P, i(T).solves ?? "-")), p(ie, P);
        }, fe = (ie) => {
          var P = ze();
          N(() => O(P, i(T).value)), p(ie, P);
        };
        Y(K, (ie) => {
          g === "status" ? ie($) : g === "subject" ? ie(Q, 1) : g === "category" ? ie(J, 2) : g === "solves" ? ie(ee, 3) : ie(fe, -1);
        });
      }
      N(() => G(A, "data-column", g)), p(E, A);
    }), N(() => Le(M, 1, al(i(T).solved_by_me ? "read" : "unread"))), p(S, M);
  }), Nt(F, (S) => h = S, () => h), N(() => {
    G(z, "hidden", r()), y = Ft(F, "", y, {
      width: i(R) ? `${i(R)}px` : void 0
    });
  }), p(t, z), Me();
}
at(["click"]);
var Al = /* @__PURE__ */ C('<details><summary> </summary> <div class="hint-content"><!></div></details>');
function Cl(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(!1), n = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(null), l = /* @__PURE__ */ H("");
  async function o(m) {
    if (w(r, m.currentTarget.open, !0), !(!i(r) || i(n) || i(a))) {
      w(n, !0), w(l, "");
      try {
        let L = await Ae(`/hints/${e.hint.id}`);
        if (!L.content) {
          if (L.cost > 0 && !confirm(`Unlock this hint for ${L.cost} points?`)) {
            w(r, !1);
            return;
          }
          await Ae("/unlocks", { target: e.hint.id, type: "hints" }), L = await Ae(`/hints/${e.hint.id}`);
        }
        w(a, L, !0);
      } catch (L) {
        w(l, L.message, !0);
      } finally {
        w(n, !1);
      }
    }
  }
  var s = Al(), f = k(s), c = q(f), h = d(f, 2), u = k(h);
  {
    var v = (m) => {
      var L = ze("Loading hint...");
      p(m, L);
    }, _ = (m) => {
      var L = ze();
      N(() => O(L, i(l))), p(m, L);
    }, b = (m) => {
      var L = dt(), B = ce(L);
      yt(B, () => i(a).html), p(m, L);
    }, R = (m) => {
      var L = ze();
      N(() => O(L, i(a).content)), p(m, L);
    };
    Y(u, (m) => {
      i(n) ? m(v) : i(l) ? m(_, 1) : i(a)?.html ? m(b, 2) : i(a) && m(R, 3);
    });
  }
  N(() => {
    G(s, "data-hint", e.hint.id), O(c, `${(e.hint.title || "View hint") ?? ""}${e.hint.cost ? ` (${e.hint.cost} points)` : ""}`);
  }), ct("toggle", s, o), gl("open", "toggle", s, (m) => w(r, m), () => i(r)), p(t, s), Me();
}
var Tl = /* @__PURE__ */ C('<button type="button" class="solve-count"> </button>'), Ll = /* @__PURE__ */ C('<span class="challenge-solves">Total solves: <!></span>'), Rl = /* @__PURE__ */ C('<p role="status">Loading solves...</p>'), Ml = /* @__PURE__ */ C('<div class="alert alert-danger" role="alert"> <button type="button">Retry</button></div>'), Nl = /* @__PURE__ */ C("<tr><td><a> </a></td><td><time> </time></td></tr>"), Ol = /* @__PURE__ */ C('<div class="table-responsive"><table class="table table-striped"><thead><tr><th>User</th><th>Solve time</th></tr></thead><tbody></tbody></table></div>'), Pl = /* @__PURE__ */ C("<p>No solves to display.</p>"), Il = /* @__PURE__ */ C('<!> <dialog class="express-dialog solves-dialog" aria-labelledby="solves-title"><h2 id="solves-title"> </h2> <!> <div class="dialog-actions"><button type="button" class="btn btn-primary">Close</button></div></dialog>', 1);
function Dl(t, e) {
  Re(e, !0);
  let r, n = /* @__PURE__ */ H(ge([])), a = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(""), o = 0;
  _n(() => o++);
  async function s() {
    const I = ++o;
    w(a, !0), w(l, ""), w(n, [], !0);
    try {
      const S = await Ae(`/challenges/${e.challengeId}/solves`);
      I === o && w(n, S, !0);
    } catch (S) {
      I === o && w(l, S.message, !0);
    } finally {
      I === o && w(a, !1);
    }
  }
  function f() {
    r.showModal(), s();
  }
  function c(I) {
    let S = !1;
    function T(g) {
      const A = I.getBoundingClientRect();
      return g.target === I && (g.clientX < A.left || g.clientX > A.right || g.clientY < A.top || g.clientY > A.bottom);
    }
    function M(g) {
      S = T(g);
    }
    function E(g) {
      S && T(g) && I.close(), S = !1;
    }
    return I.addEventListener("pointerdown", M), I.addEventListener("click", E), {
      destroy() {
        I.removeEventListener("pointerdown", M), I.removeEventListener("click", E);
      }
    };
  }
  var h = Il(), u = ce(h);
  {
    var v = (I) => {
      var S = Ll(), T = d(k(S));
      {
        var M = (g) => {
          var A = Tl(), K = q(A, !0);
          N(() => {
            G(A, "aria-label", `View ${e.count} solves`), O(K, e.count);
          }), he("click", A, f), p(g, A);
        }, E = (g) => {
          var A = ze("0");
          p(g, A);
        };
        Y(T, (g) => {
          e.count > 0 ? g(M) : g(E, -1);
        });
      }
      p(I, S);
    }, _ = /* @__PURE__ */ ue(() => Number.isInteger(e.count) && e.count >= 0);
    Y(u, (I) => {
      i(_) && I(v);
    });
  }
  var b = d(u, 2), R = k(b), m = q(R), L = d(R, 2);
  {
    var B = (I) => {
      var S = Rl();
      p(I, S);
    }, z = (I) => {
      var S = Ml(), T = k(S), M = d(T);
      N(() => O(T, `${i(l) ?? ""} `)), he("click", M, s), p(I, S);
    }, F = (I) => {
      var S = Ol(), T = k(S), M = d(k(T));
      ve(M, 21, () => i(n), be, (E, g) => {
        var A = Nl(), K = k(A), $ = k(K), Q = q($, !0), J = d(K), ee = k(J), fe = q(ee, !0);
        N(
          (ie) => {
            G($, "href", i(g).account_url), O(Q, i(g).name), G(ee, "datetime", i(g).date), O(fe, ie);
          },
          [
            () => new Date(i(g).date).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "long" })
          ]
        ), p(E, A);
      }), p(I, S);
    }, y = (I) => {
      var S = Pl();
      p(I, S);
    };
    Y(L, (I) => {
      i(a) ? I(B) : i(l) ? I(z, 1) : i(n).length ? I(F, 2) : I(y, -1);
    });
  }
  var j = d(L, 2), U = q(j);
  Nt(b, (I) => r = I, () => r), Mt(b, (I) => c?.(I)), N(() => O(m, `Solves - ${e.challengeName ?? ""}`)), ct("close", b, () => o++), he("click", U, () => r.close()), p(t, h), Me();
}
at(["click"]);
var Fl = /* @__PURE__ */ C('<span class="challenge-tag"> </span>'), jl = /* @__PURE__ */ C('<div class="challenge-tags"><span>Tags:</span><!></div>'), Bl = /* @__PURE__ */ C("<div> </div>"), ql = /* @__PURE__ */ C("<p>Connection: <code> </code></p>"), Ul = /* @__PURE__ */ C('<a download=""><i class="fas fa-paperclip" aria-hidden="true"></i> </a>'), Hl = /* @__PURE__ */ C('<i aria-hidden="true"></i><strong> </strong>', 1), Vl = /* @__PURE__ */ C('<p>Attempts: <span id="attempts"> </span> </p>'), Yl = /* @__PURE__ */ C('<header class="message-header"><h2> </h2> <div class="challenge-metadata"><span> </span><span> </span><!></div> <!> <!></header> <div class="message-body"><!></div> <!> <div class="attachments"></div> <div id="hints"></div> <form class="reply"><label for="flag">Reply with flag</label> <input id="flag" name="submission" autocomplete="off" required=""/> <button type="submit">Send</button> <div id="submission-status" role="status" aria-atomic="true"><!></div> <!></form>', 1);
function zl(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(""), n = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(""), o = /* @__PURE__ */ H(ge(Fe(() => e.challenge.attempts))), s = /* @__PURE__ */ H(ge(Fe(() => e.challenge.solves))), f = !0, c = /* @__PURE__ */ ue(() => i(a) || (e.challenge.solved_by_me ? "Correct flag received." : "")), h = /* @__PURE__ */ ue(() => i(l) || (i(n) ? "pending" : e.challenge.solved_by_me ? "success" : ""));
  _n(() => {
    f = !1;
  });
  const u = /* @__PURE__ */ ue(() => new DOMParser().parseFromString(e.challenge.view || "", "text/html").querySelector(".challenge-desc")?.innerHTML);
  function v(Z) {
    const D = Z.split("/").pop().split("?")[0];
    try {
      return decodeURIComponent(D);
    } catch {
      return D;
    }
  }
  async function _(Z) {
    if (Z.preventDefault(), !i(n)) {
      w(n, !0), w(a, "Sending..."), w(l, "");
      try {
        const D = await Ae("/challenges/attempt", { challenge_id: e.challenge.id, submission: i(r) });
        if (!f) return;
        w(a, D.message, !0);
        const W = e.challenge.type === "delayed" && D.status === "incorrect" && /^Your submission has been taken(?:\.|$)/.test(D.message || "");
        if (w(l, ["correct", "already_solved"].includes(D.status) ? "success" : W ? "info" : "error", !0), D.status === "authentication_required" && (location.href = `${window.init.urlRoot}/login?next=${encodeURIComponent(location.pathname + location.hash)}`), D.status === "correct" && w(r, ""), e.challenge.max_attempts || ["correct", "already_solved"].includes(D.status)) {
          const ne = await Ae(`/challenges/${e.challenge.id}`);
          if (!f) return;
          w(o, ne.attempts, !0), w(s, ne.solves, !0);
        }
        await e.onattempt(D);
      } catch (D) {
        f && (w(a, D.message, !0), w(l, "error"));
      } finally {
        w(n, !1);
      }
    }
  }
  var b = Yl(), R = ce(b), m = k(R), L = q(m, !0), B = d(m, 2), z = k(B), F = q(z), y = d(z), j = q(y), U = d(y);
  Dl(U, {
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
  var I = d(B, 2);
  {
    var S = (Z) => {
      var D = jl(), W = d(k(D));
      ve(W, 17, () => e.challenge.tags, be, (ne, de) => {
        var _e = Fl(), we = q(_e, !0);
        N(() => O(we, typeof i(de) == "string" ? i(de) : i(de).value)), p(ne, _e);
      }), p(Z, D);
    };
    Y(I, (Z) => {
      e.challenge.tags?.length && Z(S);
    });
  }
  var T = d(I, 2);
  {
    var M = (Z) => {
      var D = Bl(), W = q(D);
      N(() => O(W, `From: ${e.challenge.attribution ?? ""}`)), p(Z, D);
    };
    Y(T, (Z) => {
      e.challenge.attribution && Z(M);
    });
  }
  var E = d(R, 2), g = k(E);
  {
    var A = (Z) => {
      var D = dt(), W = ce(D);
      yt(W, () => i(u)), p(Z, D);
    }, K = (Z) => {
      var D = ze();
      N(() => O(D, e.challenge.description)), p(Z, D);
    };
    Y(g, (Z) => {
      i(u) ? Z(A) : Z(K, -1);
    });
  }
  var $ = d(E, 2);
  {
    var Q = (Z) => {
      var D = ql(), W = d(k(D)), ne = q(W, !0);
      N(() => O(ne, e.challenge.connection_info)), p(Z, D);
    };
    Y($, (Z) => {
      e.challenge.connection_info && Z(Q);
    });
  }
  var J = d($, 2);
  ve(J, 21, () => e.challenge.files || [], be, (Z, D) => {
    var W = Ul(), ne = d(k(W));
    N(
      (de) => {
        G(W, "href", i(D)), O(ne, ` ${de ?? ""}`);
      },
      [() => v(i(D))]
    ), p(Z, W);
  });
  var ee = d(J, 2);
  ve(ee, 21, () => e.challenge.hints || [], (Z) => Z.id, (Z, D) => {
    Cl(Z, {
      get hint() {
        return i(D);
      }
    });
  });
  var fe = d(ee, 2), ie = d(k(fe), 2), P = d(ie, 2), x = d(P, 2), V = k(x);
  {
    var re = (Z) => {
      var D = Hl(), W = ce(D), ne = d(W), de = q(ne, !0);
      N(() => {
        Le(W, 1, `fas ${i(h) === "success" ? "fa-check-circle" : i(h) === "error" ? "fa-times-circle" : i(h) === "info" ? "fa-info-circle" : "fa-paper-plane"}`), O(de, i(c));
      }), p(Z, D);
    };
    Y(V, (Z) => {
      i(c) && Z(re);
    });
  }
  var ke = d(x, 2);
  {
    var Ce = (Z) => {
      var D = Vl(), W = d(k(D)), ne = q(W, !0), de = d(W);
      N(() => {
        O(ne, i(o)), O(de, ` / ${e.challenge.max_attempts ?? ""}`);
      }), p(Z, D);
    };
    Y(ke, (Z) => {
      e.challenge.max_attempts && Z(Ce);
    });
  }
  N(() => {
    O(L, e.challenge.name), O(F, `Category: ${e.challenge.category ?? ""}`), O(j, `Points: ${e.challenge.value ?? ""}`), P.disabled = i(n), Le(x, 1, `submission-feedback ${i(h)}`), G(x, "hidden", !i(c));
  }), ct("submit", fe, _), Sr(ie, () => i(r), (Z) => w(r, Z)), p(t, b), Me();
}
var Wl = /* @__PURE__ */ C('<hr class="folder-divider"/>'), Gl = /* @__PURE__ */ C('<!> <button type="button"><i aria-hidden="true"></i> </button>', 1), Xl = /* @__PURE__ */ C('<div class="express-toolbar"><button id="all-challenges" type="button"><i class="fas fa-inbox" aria-hidden="true"></i> All Challenges</button> <button id="help-button" type="button"><i class="fas fa-question-circle" aria-hidden="true"></i> Help</button> <label for="search">Search</label><div class="express-search"><i class="fas fa-search" aria-hidden="true"></i><input id="search" type="search" placeholder="Find a challenge"/></div></div> <div class="express-address">Address <span id="address"> </span></div> <div class="express-workspace"><aside class="express-sidebar" aria-label="Challenge categories"><h2>Folders</h2> <div id="folders"></div> <p id="progress" aria-live="polite"> </p></aside> <section class="express-main" aria-label="Challenges"><h1 id="folder-heading"> </h1> <p id="board-status" role="status"> </p> <button id="retry" type="button">Try again</button> <!> <section id="reader" aria-label="Challenge message"><button id="back" type="button">Back to challenges</button> <div id="message"><!></div></section></section></div> <dialog id="help-dialog"><h2> </h2> <p>Open a challenge to read its message. Reply with the flag to solve it.</p> <p>Unsolved challenges appear as unread mail. Solved challenges appear as read mail.</p> <p>Drag column headers to reorder them, or their edges to resize. With a header focused, use Alt + Left/Right to reorder.</p> <form method="dialog"><button>Close</button></form></dialog>', 1);
function Kl(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(ge([])), n = /* @__PURE__ */ H("All Challenges"), a = /* @__PURE__ */ H("all"), l = /* @__PURE__ */ H(""), o = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H(!1), f = /* @__PURE__ */ H(null), c = /* @__PURE__ */ H(""), h = /* @__PURE__ */ H(!0), u = /* @__PURE__ */ H(""), v = /* @__PURE__ */ H(""), _ = 0, b = 0, R, m, L = /* @__PURE__ */ ue(() => i(r).filter((X) => !X.solved_by_me)), B = /* @__PURE__ */ ue(() => [...new Set(i(r).map((X) => X.category))]), z = /* @__PURE__ */ ue(() => i(a) === "category" ? i(r).filter((X) => X.category === i(n)) : i(r)), F = /* @__PURE__ */ ue(() => [
    {
      name: "All Challenges",
      type: "all",
      count: i(L).length
    },
    {
      name: "Unsolved Challenges",
      type: "unread",
      count: i(L).length
    },
    ...i(B).map((X) => ({
      name: X,
      type: "category",
      count: i(L).filter((ae) => ae.category === X).length
    }))
  ]), y = /* @__PURE__ */ ue(() => i(r).filter((X) => (i(a) === "all" || (i(a) === "unread" ? !X.solved_by_me : X.category === i(n))) && `${X.name} ${X.category}`.toLowerCase().includes(i(l).toLowerCase().trim())));
  qt(() => {
    const X = `${e.config.appName} - ${i(n)}`;
    document.title = X, document.getElementById("window-title").textContent = X;
  });
  async function j() {
    const X = ++b;
    w(h, !0), w(u, "");
    try {
      const ae = await Ae("/challenges");
      X === b && w(r, ae.sort((oe, ye) => oe.id - ye.id), !0);
    } catch (ae) {
      X === b && w(u, ae.message, !0);
    } finally {
      X === b && w(h, !1);
    }
  }
  async function U(X = !0) {
    _++, w(s, !1), w(f, null), w(c, ""), history.replaceState(null, "", location.pathname + location.search), await Er(), X && document.querySelector(`.open-challenge[data-id="${i(o)}"]`)?.focus();
  }
  function I(X) {
    w(n, X.name, !0), w(a, X.type, !0), w(v, ""), U(!1);
  }
  async function S(X) {
    const ae = ++_;
    w(o, X, !0), w(s, !0), w(f, null), w(c, ""), w(v, "");
    try {
      const oe = await Ae(`/challenges/${X}`);
      if (ae !== _) return;
      w(f, oe, !0), history.replaceState(null, "", `#challenge-${X}`), await Er(), m?.focus();
    } catch (oe) {
      ae === _ && w(c, oe.message, !0);
    }
  }
  async function T(X) {
    const ae = _;
    await j(), ae === _ && i(a) === "unread" && ["correct", "already_solved"].includes(X.status) && !i(u) && (await U(!1), w(v, "Challenge solved. Removed from Unsolved Challenges."), document.querySelector('#folders [data-view="unread"]')?.focus());
  }
  xt(() => {
    const X = location.hash.match(/-(\d+)$/);
    j().then(() => {
      X && _ === 0 && S(Number(X[1]));
    });
  }), _n(() => {
    _++, b++;
  });
  var M = Xl(), E = ce(M), g = k(E), A = d(g, 2), K = d(A, 3), $ = d(k(K)), Q = d(E, 2), J = d(k(Q)), ee = q(J), fe = d(Q, 2), ie = k(fe), P = d(k(ie), 2);
  ve(P, 23, () => i(F), (X) => `${X.type}:${X.name}`, (X, ae, oe) => {
    var ye = Gl(), je = ce(ye);
    {
      var Ne = (pt) => {
        var Qt = Wl();
        p(pt, Qt);
      };
      Y(je, (pt) => {
        i(oe) === 2 && pt(Ne);
      });
    }
    var pe = d(je, 2);
    let Oe;
    var lt = k(pe), gt = d(lt);
    N(() => {
      G(pe, "data-view", i(ae).type), G(pe, "data-folder", i(ae).name), Oe = Le(pe, 1, "", null, Oe, {
        active: i(a) === i(ae).type && i(n) === i(ae).name
      }), Le(lt, 1, `fas fa-${i(ae).type === "unread" ? "envelope" : "folder"}`), O(gt, `${i(ae).name ?? ""}${i(ae).type !== "all" && i(ae).count > 0 ? ` (${i(ae).count})` : ""}`);
    }), he("click", pe, () => I(i(ae))), p(X, ye);
  });
  var x = d(P, 2), V = q(x), re = d(ie, 2), ke = k(re), Ce = q(ke, !0), Z = d(ke, 2), D = q(Z, !0), W = d(Z, 2), ne = d(W, 2);
  {
    let X = /* @__PURE__ */ ue(() => i(r).some((oe) => Number.isInteger(oe.solves))), ae = /* @__PURE__ */ ue(() => e.config.themeSettings?.challenge_order);
    Sl(ne, {
      get challenges() {
        return i(y);
      },
      get solvesEnabled() {
        return i(X);
      },
      get defaultOrder() {
        return i(ae);
      },
      onopen: S,
      get hidden() {
        return i(s);
      }
    });
  }
  var de = d(ne, 2), _e = k(de);
  Nt(_e, (X) => m = X, () => m);
  var we = d(_e, 2), it = k(we);
  {
    var kt = (X) => {
      var ae = dt(), oe = ce(ae);
      {
        var ye = (pe) => {
          var Oe = ze();
          N(() => O(Oe, i(c))), p(pe, Oe);
        }, je = (pe) => {
          var Oe = dt(), lt = ce(Oe);
          $i(lt, () => i(f).id, (gt) => {
            zl(gt, {
              get challenge() {
                return i(f);
              },
              onattempt: T
            });
          }), p(pe, Oe);
        }, Ne = (pe) => {
          var Oe = ze("Loading message...");
          p(pe, Oe);
        };
        Y(oe, (pe) => {
          i(c) ? pe(ye) : i(f) ? pe(je, 1) : pe(Ne, -1);
        });
      }
      p(X, ae);
    };
    Y(it, (X) => {
      i(s) && X(kt);
    });
  }
  var Pt = d(fe, 2), It = k(Pt), Zt = q(It, !0);
  Nt(Pt, (X) => R = X, () => R), N(
    (X) => {
      O(ee, `Folders / ${i(n) ?? ""}`), O(V, `${X ?? ""} of ${i(z).length ?? ""} challenges solved`), O(Ce, i(n)), O(D, i(u) || (i(h) ? "Loading challenges..." : i(v) || (i(y).length ? "" : "No challenges found."))), G(W, "hidden", !i(u)), G(de, "hidden", !i(s)), O(Zt, e.config.appName);
    },
    [
      () => i(z).filter((X) => X.solved_by_me).length
    ]
  ), he("click", g, () => {
    w(l, ""), I(i(F)[0]);
  }), he("click", A, () => R.showModal()), he("input", $, () => {
    w(v, ""), U(!1);
  }), Sr($, () => i(l), (X) => w(l, X)), he("click", W, j), he("click", _e, () => U()), p(t, M), Me();
}
at(["click", "input"]);
function Sa(t, e = !0) {
  if (!e) return;
  const r = t.querySelector(".logon-drag-handle, .window-drag-handle");
  if (!r) return;
  let n;
  const a = [];
  function l(u, v, _) {
    u?.addEventListener(v, _), a.push(() => u?.removeEventListener(v, _));
  }
  function o(u, v) {
    const _ = window.visualViewport, b = _?.offsetLeft || 0, R = _?.offsetTop || 0, m = _?.width || document.documentElement.clientWidth, L = Math.max(0, (_?.height || innerHeight) - (t.classList.contains("express-window") ? 34 : 0));
    t.style.maxWidth = `${m}px`, t.style.maxHeight = `${L}px`;
    const B = t.getBoundingClientRect();
    t.style.left = `${Math.max(b, Math.min(u, b + m - B.width))}px`, t.style.top = `${Math.max(R, Math.min(v, R + L - B.height))}px`;
  }
  const s = t.getBoundingClientRect();
  t.classList.add("is-draggable"), o(s.left, s.top), l(r, "pointerdown", (u) => {
    if (u.button !== 0 || !u.isPrimary) return;
    const v = t.getBoundingClientRect();
    n = { id: u.pointerId, x: u.clientX - v.left, y: u.clientY - v.top }, r.setPointerCapture(u.pointerId), r.classList.add("is-dragging"), u.preventDefault();
  }), l(r, "pointermove", (u) => {
    n?.id === u.pointerId && o(u.clientX - n.x, u.clientY - n.y);
  });
  const f = () => {
    n = null, r.classList.remove("is-dragging");
  };
  for (const u of ["pointerup", "pointercancel", "lostpointercapture"]) l(r, u, f);
  l(r, "keydown", (u) => {
    const v = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[u.key];
    if (!v) return;
    u.preventDefault();
    const _ = t.getBoundingClientRect(), b = u.shiftKey ? 1 : 10;
    o(_.left + v[0] * b, _.top + v[1] * b);
  });
  const c = () => {
    const u = t.getBoundingClientRect();
    o(u.left, u.top);
  };
  l(window, "resize", c), l(window.visualViewport, "resize", c), l(window.visualViewport, "scroll", c);
  const h = new ResizeObserver(c);
  return h.observe(t), { destroy() {
    h.disconnect(), a.forEach((u) => u());
  } };
}
var Jl = /* @__PURE__ */ C('<div role="alert"><span><!></span><button type="button" class="btn-close" aria-label="Close"></button></div>');
function Aa(t, e) {
  Re(e, !0);
  let r = Ot(e, "errors", 19, () => []), n = Ot(e, "infos", 19, () => []), a = /* @__PURE__ */ H(ge([]));
  var l = dt(), o = ce(l);
  ve(
    o,
    17,
    () => [
      ...n().map((s) => ({ text: s, type: "info" })),
      ...r().map((s) => ({ text: s, type: "danger" }))
    ],
    be,
    (s, f, c) => {
      var h = dt(), u = ce(h);
      {
        var v = (b) => {
          var R = Jl(), m = k(R), L = k(m);
          {
            var B = (y) => {
              var j = dt(), U = ce(j);
              yt(U, () => i(f).text.html), p(y, j);
            }, z = (y) => {
              var j = ze();
              N(() => O(j, i(f).text.text ?? i(f).text)), p(y, j);
            };
            Y(L, (y) => {
              i(f).text.html ? y(B) : y(z, -1);
            });
          }
          var F = d(m);
          N(() => Le(R, 1, `alert alert-${i(f).type ?? ""} alert-dismissible`)), he("click", F, () => w(a, [...i(a), c], !0)), p(b, R);
        }, _ = /* @__PURE__ */ ue(() => !i(a).includes(c));
        Y(u, (b) => {
          i(_) && b(v);
        });
      }
      p(s, h);
    }
  ), p(t, l), Me();
}
at(["click"]);
var Zl = /* @__PURE__ */ C('<span class="text-danger" aria-hidden="true">*</span>'), Ql = /* @__PURE__ */ C("<option> </option>"), $l = /* @__PURE__ */ C('<select class="form-select"></select>'), es = /* @__PURE__ */ C('<input type="checkbox" class="form-check-input"/>'), ts = /* @__PURE__ */ C('<textarea class="form-control"></textarea>'), rs = /* @__PURE__ */ C('<input class="form-control"/>'), ns = /* @__PURE__ */ C('<small class="form-text text-muted"> </small>'), as = /* @__PURE__ */ C('<div><label class="form-label"> <!></label> <!> <!></div>');
function gn(t, e) {
  Re(e, !0);
  let r = Ot(e, "compact", 3, !1), n = /* @__PURE__ */ H(ge(Fe(() => e.field.type === "SelectField" ? String(e.field.value ?? "") : e.field.value ?? ""))), a = /* @__PURE__ */ H(ge(Fe(() => e.field.value === !0 || e.field.value === "True" || e.field.value === "true")));
  const l = {
    PasswordField: "password",
    EmailField: "email",
    URLField: "url",
    DateField: "date",
    IntegerField: "number",
    HiddenField: "hidden"
  }, o = /* @__PURE__ */ ue(() => e.field.name === "name" ? "username" : e.field.name === "email" ? "email" : e.field.name === "confirm" ? "current-password" : e.field.type === "PasswordField" ? r() ? "current-password" : "new-password" : void 0);
  var s = as();
  let f;
  var c = k(s), h = k(c), u = d(h);
  {
    var v = (F) => {
      var y = Zl();
      p(F, y);
    };
    Y(u, (F) => {
      e.field.required && F(v);
    });
  }
  var _ = d(c, 2);
  {
    var b = (F) => {
      var y = $l();
      ve(y, 21, () => e.field.choices, be, (j, U) => {
        var I = /* @__PURE__ */ ue(() => Da(i(U), 2));
        let S = () => i(I)[0], T = () => i(I)[1];
        var M = Ql(), E = q(M, !0), g = {};
        N(
          (A) => {
            O(E, T()), g !== (g = A) && (M.value = (M.__value = g) ?? "");
          },
          [() => String(S())]
        ), p(j, M);
      }), xa(y), N(() => {
        G(y, "id", e.field.id), G(y, "name", e.field.name), y.required = e.field.required;
      }), fl(y, () => i(n), (j) => w(n, j)), p(F, y);
    }, R = (F) => {
      var y = es();
      y.value = y.__value = "y", N(() => {
        G(y, "id", e.field.id), G(y, "name", e.field.name), y.required = e.field.required;
      }), _l(y, () => i(a), (j) => w(a, j)), p(F, y);
    }, m = (F) => {
      var y = ts();
      N(() => {
        G(y, "id", e.field.id), G(y, "name", e.field.name), y.required = e.field.required;
      }), Sr(y, () => i(n), (j) => w(n, j)), p(F, y);
    }, L = (F) => {
      var y = rs();
      N(() => {
        G(y, "id", e.field.id), G(y, "name", e.field.name), G(y, "type", l[e.field.type] || "text"), G(y, "autocomplete", i(o)), y.required = e.field.required;
      }), Sr(y, () => i(n), (j) => w(n, j)), p(F, y);
    };
    Y(_, (F) => {
      e.field.type === "SelectField" ? F(b) : e.field.type === "BooleanField" ? F(R, 1) : e.field.type === "TextAreaField" ? F(m, 2) : F(L, -1);
    });
  }
  var B = d(_, 2);
  {
    var z = (F) => {
      var y = ns(), j = q(y, !0);
      N(() => O(j, e.field.description)), p(F, y);
    };
    Y(B, (F) => {
      e.field.description && !r() && F(z);
    });
  }
  N(() => {
    f = Le(s, 1, "", null, f, { "logon-field": r(), "mb-3": !r() }), G(c, "for", e.field.id), O(h, e.field.label);
  }), p(t, s), Me();
}
var is = /* @__PURE__ */ C("<a>Forgot your password?</a>"), ls = /* @__PURE__ */ C('<!> <form method="post" accept-charset="utf-8"><!> <input type="hidden" name="nonce"/> <div><!> <button id="_submit" name="_submit" type="submit" class="btn btn-primary xp-default"> </button></div></form>', 1), ss = /* @__PURE__ */ C('<img class="logon-icon" alt=""/>'), os = /* @__PURE__ */ Yi('<svg class="logon-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="9" width="50" height="36" rx="2" fill="#eef4ff" stroke="#153e80" stroke-width="3"></rect><path d="M12 14h40v25H12z" fill="#245bb4"></path><path d="M26 46v7h12v-7M18 55h28" fill="none" stroke="#153e80" stroke-width="3"></path><rect x="24" y="23" width="16" height="12" rx="1" fill="#ffe4a0"></rect><path d="M28 23v-3a4 4 0 0 1 8 0v3" fill="none" stroke="#ffe4a0" stroke-width="3"></path></svg>'), fs = /* @__PURE__ */ C('<a class="btn logon-oauth">Log on with Major League Cyber</a>'), us = /* @__PURE__ */ C('<footer class="logon-footer">Need an account? <a>Register</a></footer>'), cs = /* @__PURE__ */ C('<div class="login-stage"><section class="xp-logon" aria-labelledby="logon-title"><header class="express-title logon-drag-handle" tabindex="0" role="button" aria-label="Move login window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><i class="fas fa-key" aria-hidden="true"></i> Log On</header> <div class="logon-banner"><!> <div><h1 id="logon-title"> </h1><p> </p></div></div> <div class="logon-content"><p>Enter your user name and password to continue.</p><!> <!></div> <!></section></div>'), ds = /* @__PURE__ */ C("<p> </p>"), vs = /* @__PURE__ */ C("<p> </p> <p>Please click the link in that email to confirm your account.</p><p>If the email does not arrive, check your spam folder or contact an administrator to manually verify your account.</p>", 1), hs = /* @__PURE__ */ C('<a class="btn btn-secondary mb-3">Log on with Major League Cyber</a>'), _s = /* @__PURE__ */ C('<a class="btn btn-secondary mt-3">Change Email Address</a>'), gs = /* @__PURE__ */ C('<p class="text-muted mt-3">By registering, you agree to the <a target="_blank" rel="noopener">privacy policy</a> and <a target="_blank" rel="noopener">terms of service</a>.</p>'), ps = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1> </h1></div></div> <div class="container"><div class="auth-page"><!> <!> <!> <!> <!> <!></div></div>', 1);
function ms(t, e) {
  Re(e, !0);
  const r = (h) => {
    var u = ls(), v = ce(u);
    Aa(v, {
      get errors() {
        return e.site.errors;
      },
      get infos() {
        return e.site.infos;
      }
    });
    var _ = d(v, 2);
    let b;
    var R = k(_);
    ve(R, 17, () => e.page.fields || [], be, (U, I) => {
      {
        let S = /* @__PURE__ */ ue(() => e.page.kind === "login");
        gn(U, {
          get field() {
            return i(I);
          },
          get compact() {
            return i(S);
          }
        });
      }
    });
    var m = d(R, 2), L = d(m, 2);
    let B;
    var z = k(L);
    {
      var F = (U) => {
        var I = is();
        N(() => G(I, "href", `${i(a)}/reset_password`)), p(U, I);
      };
      Y(z, (U) => {
        e.page.kind === "login" && U(F);
      });
    }
    var y = d(z, 2), j = q(y, !0);
    N(() => {
      b = Le(_, 1, "", null, b, { "logon-form": e.page.kind === "login" }), ka(m, e.config.csrfNonce), B = Le(L, 1, "", null, B, {
        "logon-actions": e.page.kind === "login",
        "auth-actions": e.page.kind !== "login"
      }), y.disabled = i(n), O(j, i(n) ? "Please wait..." : e.page.kind === "login" ? "Log On" : e.page.kind === "confirm" ? "Send Confirmation Email" : "Submit");
    }), ct("submit", _, () => w(n, !0)), p(h, u);
  };
  let n = /* @__PURE__ */ H(!1);
  const a = /* @__PURE__ */ ue(() => e.config.urlRoot), l = {
    login: "Log On",
    register: "Register",
    reset: "Reset Password",
    confirm: "Confirm"
  };
  xt(() => {
    e.page.kind === "login" && document.getElementById("name")?.focus();
    const h = () => w(n, !1);
    return window.addEventListener("pageshow", h), () => window.removeEventListener("pageshow", h);
  });
  var o = dt(), s = ce(o);
  {
    var f = (h) => {
      var u = cs(), v = k(u), _ = d(k(v), 2), b = k(_);
      {
        var R = (E) => {
          var g = ss();
          N(() => G(g, "src", e.site.logo)), p(E, g);
        }, m = (E) => {
          var g = os();
          p(E, g);
        };
        Y(b, (E) => {
          e.site.logo ? E(R) : E(m, -1);
        });
      }
      var L = d(b, 2), B = k(L), z = q(B, !0), F = d(B), y = q(F), j = d(_, 2), U = d(k(j));
      r(U);
      var I = d(U, 2);
      {
        var S = (E) => {
          var g = fs();
          N(() => G(g, "href", e.site.oauth)), p(E, g);
        };
        Y(I, (E) => {
          e.site.oauth && E(S);
        });
      }
      var T = d(j, 2);
      {
        var M = (E) => {
          var g = us(), A = d(k(g));
          N(() => G(A, "href", `${i(a)}/register`)), p(E, g);
        };
        Y(T, (E) => {
          e.site.registration && E(M);
        });
      }
      Mt(v, (E) => Sa?.(E)), N(() => {
        O(z, e.site.appName), O(y, `Log on to ${e.site.eventName ?? ""}`);
      }), p(h, u);
    }, c = (h) => {
      var u = ps(), v = ce(u), _ = k(v), b = k(_), R = q(b, !0), m = d(v, 2), L = k(m), B = k(L);
      {
        var z = (g) => {
          var A = ds(), K = q(A, !0);
          N(() => O(K, e.page.mode === "set" ? "You can now reset the password for your account and log in. Please enter a new password below." : "Please provide the email address associated with your account below.")), p(g, A);
        };
        Y(B, (g) => {
          e.page.kind === "reset" && g(z);
        });
      }
      var F = d(B, 2);
      {
        var y = (g) => {
          var A = vs(), K = ce(A), $ = q(K, !0);
          N(() => O($, e.page.initial ? "To send a confirmation email to your email address, please click the button below." : "We've sent a confirmation email to your email address.")), p(g, A);
        };
        Y(F, (g) => {
          e.page.kind === "confirm" && g(y);
        });
      }
      var j = d(F, 2);
      {
        var U = (g) => {
          var A = hs();
          N(() => G(A, "href", e.site.oauth)), p(g, A);
        };
        Y(j, (g) => {
          e.page.kind === "register" && e.site.oauth && g(U);
        });
      }
      var I = d(j, 2);
      r(I);
      var S = d(I, 2);
      {
        var T = (g) => {
          var A = _s();
          N(() => G(A, "href", `${i(a)}/settings`)), p(g, A);
        };
        Y(S, (g) => {
          e.page.kind === "confirm" && g(T);
        });
      }
      var M = d(S, 2);
      {
        var E = (g) => {
          var A = gs(), K = d(k(A)), $ = d(K, 2);
          N(() => {
            G(K, "href", e.page.privacy), G($, "href", e.page.terms);
          }), p(g, A);
        };
        Y(M, (g) => {
          e.page.kind === "register" && e.page.showTerms && g(E);
        });
      }
      N(() => O(R, l[e.page.kind])), p(h, u);
    };
    Y(s, (h) => {
      e.page.kind === "login" ? h(f) : h(c, -1);
    });
  }
  p(t, o), Me();
}
var bs = /* @__PURE__ */ C('<div class="alert alert-danger" role="alert"> </div>'), ys = /* @__PURE__ */ C('<div class="alert alert-success" role="status"> </div>'), ws = /* @__PURE__ */ C('<tr><td> </td><td> </td><td> </td><td><button class="btn"><i class="fas fa-times" aria-hidden="true"></i></button></td></tr>'), xs = /* @__PURE__ */ C('<div class="table-responsive"><table class="table"><thead><tr><th>Created</th><th>Expiration</th><th>Description</th><th>Delete</th></tr></thead><tbody></tbody></table></div>'), ks = /* @__PURE__ */ C("<p>No active tokens.</p>"), Es = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1>Settings</h1></div></div> <div class="container settings-layout"><div class="nav flex-column nav-pills" aria-label="Settings sections"><button id="settings-profile-tab">Profile</button> <button id="settings-tokens-tab">Access Tokens</button></div> <div><!> <!> <section id="profile"><form method="post"><!> <button type="submit" id="_submit" class="btn btn-primary"> </button></form></section> <section id="tokens"><form><div class="mb-3"><label for="expiration" class="form-label">Expiration</label><input id="expiration" name="expiration" type="date" class="form-control"/></div> <div class="mb-3"><label for="description" class="form-label">Usage Description</label><textarea id="description" name="description" class="form-control" rows="3"></textarea></div> <button type="submit" class="btn btn-primary">Generate</button></form> <h2 class="h4 mt-4">Active Tokens</h2> <!></section></div></div> <dialog class="express-dialog"><h2>API Key Generated</h2><p>Please copy your API key. It will not be shown again!</p> <input class="form-control" aria-label="API key" readonly=""/> <div class="dialog-actions"><button class="btn">Copy</button><button class="btn btn-primary">Got it!</button></div></dialog>', 1);
function Ss(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H("profile"), n = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(""), o = /* @__PURE__ */ H(ge(Fe(() => e.page.tokens))), s = /* @__PURE__ */ H(""), f, c;
  function h(D) {
    const W = Object.fromEntries(new FormData(D));
    for (const ne of D.querySelectorAll('input[type="checkbox"]')) W[ne.name] = ne.checked;
    return W;
  }
  function u(D) {
    c = h(D);
  }
  async function v(D) {
    if (D.preventDefault(), i(n)) return;
    w(n, !0), w(a, ""), w(l, "");
    const W = D.currentTarget, ne = h(W), de = {};
    for (const [_e, we] of Object.entries(ne)) {
      if (_e === "_submit" || we === c[_e]) continue;
      const it = /^fields\[(\d+)\]$/.exec(_e);
      it ? (de.fields ||= []).push({ field_id: Number(it[1]), value: we }) : de[_e] = we;
    }
    try {
      await Ae("/users/me", de, { method: "PATCH" }), w(l, "Your profile has been updated.");
      for (const _e of W.querySelectorAll('input[type="password"]')) _e.value = "";
      c = h(W);
    } catch (_e) {
      w(a, _e.message, !0);
    } finally {
      w(n, !1);
    }
  }
  async function _(D) {
    if (D.preventDefault(), i(n)) return;
    w(n, !0), w(a, ""), w(l, "");
    const W = h(D.currentTarget);
    W.expiration || delete W.expiration;
    try {
      const ne = await Ae("/tokens", W);
      w(s, ne.value, !0);
      const { value: de, ..._e } = ne;
      w(o, [...i(o), _e], !0), f.showModal();
    } catch (ne) {
      w(a, ne.message, !0);
    } finally {
      w(n, !1);
    }
  }
  async function b(D) {
    if (!(i(n) || !confirm("Are you sure you want to delete this token?"))) {
      w(n, !0), w(a, ""), w(l, "");
      try {
        await Ae(`/tokens/${D}`, void 0, { method: "DELETE" }), w(o, i(o).filter((W) => W.id !== D), !0);
      } catch (W) {
        w(a, W.message, !0);
      } finally {
        w(n, !1);
      }
    }
  }
  async function R() {
    try {
      await navigator.clipboard.writeText(i(s)), w(l, "API key copied.");
    } catch {
      w(l, "Select and copy the API key below.");
    }
  }
  function m(D) {
    w(r, D, !0), w(a, ""), w(l, "");
  }
  var L = Es(), B = d(ce(L), 2), z = k(B), F = k(z);
  let y;
  var j = d(F, 2);
  let U;
  var I = d(z, 2), S = k(I);
  {
    var T = (D) => {
      var W = bs(), ne = q(W, !0);
      N(() => O(ne, i(a))), p(D, W);
    };
    Y(S, (D) => {
      i(a) && D(T);
    });
  }
  var M = d(S, 2);
  {
    var E = (D) => {
      var W = ys(), ne = q(W, !0);
      N(() => O(ne, i(l))), p(D, W);
    };
    Y(M, (D) => {
      i(l) && D(E);
    });
  }
  var g = d(M, 2), A = k(g), K = k(A);
  ve(K, 17, () => e.page.fields, be, (D, W) => {
    gn(D, {
      get field() {
        return i(W);
      }
    });
  });
  var $ = d(K, 2), Q = q($, !0);
  Mt(A, (D) => u?.(D));
  var J = d(g, 2), ee = k(J), fe = d(k(ee), 4), ie = d(ee, 4);
  {
    var P = (D) => {
      var W = xs(), ne = k(W), de = d(k(ne));
      ve(de, 21, () => i(o), be, (_e, we) => {
        var it = ws(), kt = k(it), Pt = q(kt, !0), It = d(kt), Zt = q(It, !0), X = d(It), ae = q(X, !0), oe = d(X), ye = q(oe);
        N(
          (je, Ne) => {
            O(Pt, je), O(Zt, Ne), O(ae, i(we).description), G(ye, "aria-label", `Delete token ${i(we).description || i(we).id}`), ye.disabled = i(n);
          },
          [
            () => i(we).created ? new Date(i(we).created).toLocaleDateString() : "",
            () => i(we).expiration ? new Date(i(we).expiration).toLocaleDateString() : "Never"
          ]
        ), he("click", ye, () => b(i(we).id)), p(_e, it);
      }), p(D, W);
    }, x = (D) => {
      var W = ks();
      p(D, W);
    };
    Y(ie, (D) => {
      i(o).length ? D(P) : D(x, -1);
    });
  }
  var V = d(B, 2), re = d(k(V), 3), ke = d(re, 2), Ce = k(ke), Z = d(Ce);
  Nt(V, (D) => f = D, () => f), N(() => {
    y = Le(F, 1, "nav-link", null, y, { active: i(r) === "profile" }), G(F, "aria-pressed", i(r) === "profile"), U = Le(j, 1, "nav-link", null, U, { active: i(r) === "tokens" }), G(j, "aria-pressed", i(r) === "tokens"), G(g, "hidden", i(r) !== "profile"), $.disabled = i(n), O(Q, i(n) ? "Saving..." : "Submit"), G(J, "hidden", i(r) !== "tokens"), fe.disabled = i(n), ka(re, i(s));
  }), he("click", F, () => m("profile")), he("click", j, () => m("tokens")), ct("submit", A, v), ct("submit", ee, _), ct("close", V, () => w(s, "")), he("click", re, (D) => D.currentTarget.select()), he("click", Ce, R), he("click", Z, () => f.close()), p(t, L), Me();
}
at(["click"]);
var As = /* @__PURE__ */ C("<a> </a>"), Cs = /* @__PURE__ */ C('<span class="badge bg-secondary ms-2"> </span>'), Ts = /* @__PURE__ */ C('<a class="badge bg-primary ms-2">Official</a>'), Ls = /* @__PURE__ */ C('<a target="_blank" rel="noopener"><i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Rs = /* @__PURE__ */ C("<tr><td><!> <!> <!></td><td><!></td><td> </td><td> </td></tr>"), Ms = /* @__PURE__ */ C('<p role="status">No users match your search.</p>'), Ns = /* @__PURE__ */ C("<option> </option>"), Os = /* @__PURE__ */ C('<label class="pagination-control">Page <select class="page-select form-select"></select> </label>'), Ps = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1>Users</h1></div></div> <div class="container"><form method="get" class="user-search"><!> <button type="submit" class="btn btn-primary"><i class="fas fa-search" aria-hidden="true"></i> Search</button></form> <div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>User</th><th>Website</th><th>Affiliation</th><th>Country</th></tr></thead><tbody></tbody></table></div> <!> <!></div>', 1);
function Is(t, e) {
  Re(e, !0);
  function r(b) {
    const R = new URL(location.href);
    R.searchParams.set("page", b.currentTarget.value), location.assign(R);
  }
  var n = Ps(), a = d(ce(n), 2), l = k(a), o = k(l);
  ve(o, 17, () => e.page.fields, be, (b, R) => {
    gn(b, {
      get field() {
        return i(R);
      }
    });
  });
  var s = d(l, 2), f = k(s), c = d(k(f));
  ve(c, 21, () => e.page.users, be, (b, R) => {
    var m = Rs(), L = k(m), B = k(L);
    {
      var z = (Q) => {
        var J = As(), ee = q(J, !0);
        N(() => {
          G(J, "href", `${e.config.urlRoot}/users/${i(R).id}`), O(ee, i(R).name);
        }), p(Q, J);
      }, F = (Q) => {
        var J = ze();
        N(() => O(J, i(R).name)), p(Q, J);
      };
      Y(B, (Q) => {
        e.page.scoresVisible ? Q(z) : Q(F, -1);
      });
    }
    var y = d(B, 2);
    {
      var j = (Q) => {
        var J = Cs(), ee = q(J, !0);
        N(() => O(ee, i(R).bracket)), p(Q, J);
      };
      Y(y, (Q) => {
        i(R).bracket && Q(j);
      });
    }
    var U = d(y, 2);
    {
      var I = (Q) => {
        var J = Ts();
        N((ee) => G(J, "href", ee), [
          () => `https://majorleaguecyber.org/u/${encodeURIComponent(i(R).name)}`
        ]), p(Q, J);
      };
      Y(U, (Q) => {
        i(R).official && Q(I);
      });
    }
    var S = d(L), T = k(S);
    {
      var M = (Q) => {
        var J = Ls();
        N(() => {
          G(J, "href", i(R).website), G(J, "aria-label", `Website for ${i(R).name}`);
        }), p(Q, J);
      }, E = /* @__PURE__ */ ue(() => /^https?:\/\//i.test(i(R).website || ""));
      Y(T, (Q) => {
        i(E) && Q(M);
      });
    }
    var g = d(S), A = q(g, !0), K = d(g), $ = q(K, !0);
    N(() => {
      O(A, i(R).affiliation || ""), O($, i(R).country);
    }), p(b, m);
  });
  var h = d(s, 2);
  {
    var u = (b) => {
      var R = Ms();
      p(b, R);
    };
    Y(h, (b) => {
      e.page.users.length || b(u);
    });
  }
  var v = d(h, 2);
  {
    var _ = (b) => {
      var R = Os(), m = d(k(R));
      ve(m, 21, () => Array.from({ length: e.page.pages }, (z, F) => F + 1), be, (z, F) => {
        var y = Ns(), j = q(y, !0), U = {};
        N(() => {
          O(j, i(F)), U !== (U = i(F)) && (y.value = (y.__value = U) ?? "");
        }), p(z, y);
      });
      var L;
      xa(m);
      var B = d(m);
      N(() => {
        L !== (L = e.page.page) && (m.value = (m.__value = L) ?? "", hn(m, L)), O(B, ` of ${e.page.pages ?? ""} (${e.page.total ?? ""} users)`);
      }), he("change", m, r), p(b, R);
    };
    Y(v, (b) => {
      e.page.pages > 1 && b(_);
    });
  }
  p(t, n), Me();
}
at(["change"]);
const en = ["#194c9f", "#8a2459", "#25632a", "#8a480c", "#623e9d", "#006473", "#a12a20", "#4c5872", "#615600", "#763c36"];
var Ds = /* @__PURE__ */ C('<p role="status"> </p>'), Fs = /* @__PURE__ */ C('<!> <div id="score-graph" class="score-chart" role="img"></div>', 1);
function Ca(t, e) {
  Re(e, !0);
  let r = Ot(e, "title", 3, "Score over Time"), n = Ot(e, "series", 19, () => []), a, l = /* @__PURE__ */ H(null), o = /* @__PURE__ */ H("");
  xt(() => {
    let u = !0;
    const v = new ResizeObserver(() => i(l)?.resize());
    return import("./chart-ClLr2WTg.js").then(({ init: _ }) => {
      u && (w(l, _(a)), v.observe(a));
    }).catch(() => {
      u && w(o, "The chart could not load. The scores are available in the table below.");
    }), () => {
      u = !1, v.disconnect(), i(l)?.dispose();
    };
  }), qt(() => {
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
        series: n().map((v, _) => ({
          ...v,
          type: "line",
          symbolSize: 7,
          lineStyle: { width: 3, type: _ > 4 ? "dashed" : "solid" },
          label: { color: u }
        }))
      },
      { notMerge: !0 }
    );
  });
  var s = Fs(), f = ce(s);
  {
    var c = (u) => {
      var v = Ds(), _ = q(v, !0);
      N(() => O(_, i(o))), p(u, v);
    };
    Y(f, (u) => {
      i(o) && u(c);
    });
  }
  var h = d(f, 2);
  Nt(h, (u) => a = u, () => a), N(() => G(h, "aria-label", `${r()}. Scores are also listed in the table below.`)), p(t, s), Me();
}
var js = /* @__PURE__ */ C('<a class="badge bg-primary">Official</a>'), Bs = /* @__PURE__ */ C('<span class="badge bg-primary"> </span>'), qs = /* @__PURE__ */ C("<p> </p>"), Us = /* @__PURE__ */ C("<h2> <small>place</small></h2>"), Hs = /* @__PURE__ */ C("<h2> <small>points</small></h2>"), Vs = /* @__PURE__ */ C('<a target="_blank" rel="noopener">Website <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Ys = /* @__PURE__ */ C('<p role="status">Loading profile...</p>'), zs = /* @__PURE__ */ C('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), Ws = /* @__PURE__ */ C('<div class="progress-bar"></div>'), Gs = /* @__PURE__ */ C('<span><span class="legend-swatch"></span> </span>'), Xs = /* @__PURE__ */ C('<div><i aria-hidden="true"></i><h4> </h4><p> </p><p> </p><strong> </strong></div>'), Ks = /* @__PURE__ */ C('<section aria-labelledby="awards-heading"><h3 id="awards-heading">Awards</h3><div class="profile-awards"></div></section>'), Js = /* @__PURE__ */ C("<tr><td><a> </a></td><td> </td><td> </td><td><time> </time></td></tr>"), Zs = /* @__PURE__ */ C('<section class="profile-graphs" aria-label="Score breakdowns"><div class="profile-breakdowns"><div><div class="progress" aria-hidden="true"><div class="progress-bar"></div><div class="progress-bar"></div></div><p> </p></div> <div><div class="progress" aria-hidden="true"></div><div class="category-legend"></div></div></div> <!></section> <!> <h3>Solves</h3><div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Challenge</th><th>Category</th><th>Value</th><th>Time</th></tr></thead><tbody></tbody></table></div>', 1), Qs = /* @__PURE__ */ C('<h3 class="text-muted text-center">No solves yet</h3>'), $s = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1> </h1> <div class="profile-badges"><!> <!></div> <!> <!> <!> <!></div></div> <div class="container"><!> <!> <!></div>', 1);
function eo(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(ge([])), n = /* @__PURE__ */ H(ge([])), a = /* @__PURE__ */ H(0), l = /* @__PURE__ */ H(null), o = /* @__PURE__ */ H(!0), s = /* @__PURE__ */ H(""), f = 0;
  const c = /* @__PURE__ */ ue(() => i(r).length + i(a) ? 100 * i(r).length / (i(r).length + i(a)) : 0), h = /* @__PURE__ */ ue(() => {
    const P = /* @__PURE__ */ new Map();
    return i(r).forEach((x) => P.set(x.challenge.category, (P.get(x.challenge.category) || 0) + 1)), [...P].map(([x, V], re) => ({
      name: x,
      count: V,
      percent: 100 * V / i(r).length,
      color: en[re % en.length]
    }));
  }), u = /* @__PURE__ */ ue(() => {
    let P = 0;
    return [
      {
        name: e.page.name,
        data: [...i(r), ...i(n)].sort((x, V) => new Date(x.date) - new Date(V.date)).map((x) => [
          new Date(x.date).getTime(),
          P += x.challenge?.value ?? x.value
        ])
      }
    ];
  });
  async function v() {
    const P = ++f;
    w(s, "");
    try {
      const x = e.page.private ? "me" : e.page.id, [V, re, ke, Ce] = await Promise.all([
        Ae(`/users/${x}/solves`),
        Ae(`/users/${x}/fails`, void 0, { full: !0 }),
        Ae(`/users/${x}/awards`),
        e.page.private ? Ae("/users/me") : Promise.resolve(e.page)
      ]);
      if (P !== f) return;
      w(r, V, !0), w(a, re.meta.count, !0), w(n, ke, !0), w(l, Ce.score, !0);
    } catch (x) {
      P === f && w(s, x.message, !0);
    } finally {
      P === f && w(o, !1);
    }
  }
  xt(() => (v(), () => f++));
  var _ = $s(), b = ce(_), R = k(b), m = k(R), L = q(m, !0), B = d(m, 2), z = k(B);
  {
    var F = (P) => {
      var x = js();
      N((V) => G(x, "href", V), [
        () => `https://majorleaguecyber.org/u/${encodeURIComponent(e.page.name)}`
      ]), p(P, x);
    };
    Y(z, (P) => {
      e.page.official && P(F);
    });
  }
  var y = d(z, 2);
  ve(
    y,
    17,
    () => [
      e.page.affiliation,
      e.page.country,
      e.page.bracket
    ].filter(Boolean),
    be,
    (P, x) => {
      var V = Bs(), re = q(V, !0);
      N(() => O(re, i(x))), p(P, V);
    }
  );
  var j = d(B, 2);
  ve(j, 17, () => e.page.fields, be, (P, x) => {
    var V = qs(), re = q(V);
    N(() => O(re, `${i(x).name ?? ""}: ${i(x).value ?? ""}`)), p(P, V);
  });
  var U = d(j, 2);
  {
    var I = (P) => {
      var x = Us(), V = k(x);
      N(() => O(V, `${e.page.place ?? ""} `)), p(P, x);
    };
    Y(U, (P) => {
      e.page.place && P(I);
    });
  }
  var S = d(U, 2);
  {
    var T = (P) => {
      var x = Hs(), V = k(x);
      N(() => O(V, `${i(l) ?? ""} `)), p(P, x);
    };
    Y(S, (P) => {
      i(l) !== null && P(T);
    });
  }
  var M = d(S, 2);
  {
    var E = (P) => {
      var x = Vs();
      N(() => G(x, "href", e.page.website)), p(P, x);
    }, g = /* @__PURE__ */ ue(() => /^https?:\/\//i.test(e.page.website || ""));
    Y(M, (P) => {
      i(g) && P(E);
    });
  }
  var A = d(b, 2), K = k(A);
  {
    var $ = (P) => {
      var x = Ys();
      p(P, x);
    };
    Y(K, (P) => {
      i(o) && P($);
    });
  }
  var Q = d(K, 2);
  {
    var J = (P) => {
      var x = zs(), V = k(x), re = d(V);
      N(() => O(V, `${i(s) ?? ""} `)), he("click", re, v), p(P, x);
    };
    Y(Q, (P) => {
      i(s) && P(J);
    });
  }
  var ee = d(Q, 2);
  {
    var fe = (P) => {
      var x = Zs(), V = ce(x), re = k(V), ke = k(re), Ce = k(ke), Z = k(Ce), D = d(Z), W = d(Ce), ne = q(W), de = d(ke, 2), _e = k(de);
      ve(_e, 21, () => i(h), be, (ae, oe) => {
        var ye = Ws();
        N(() => Ft(ye, `width:${i(oe).percent}%;background:${i(oe).color}`)), p(ae, ye);
      });
      var we = d(_e);
      ve(we, 21, () => i(h), be, (ae, oe) => {
        var ye = Gs(), je = k(ye), Ne = d(je);
        N(
          (pe) => {
            Ft(je, `background:${i(oe).color}`), O(Ne, `${i(oe).name ?? ""} (${pe ?? ""}%)`);
          },
          [() => i(oe).percent.toFixed(2)]
        ), p(ae, ye);
      });
      var it = d(re, 2);
      Ca(it, {
        get series() {
          return i(u);
        }
      });
      var kt = d(V, 2);
      {
        var Pt = (ae) => {
          var oe = Ks(), ye = d(k(oe));
          ve(ye, 21, () => i(n), be, (je, Ne) => {
            var pe = Xs(), Oe = k(pe), lt = d(Oe), gt = q(lt, !0), pt = d(lt), Qt = q(pt, !0), $t = d(pt), Mr = q($t, !0), Nr = d($t), Ra = q(Nr);
            N(() => {
              Le(Oe, 1, `award-icon award-${i(Ne).icon} fa-2x`), O(gt, i(Ne).name), O(Qt, i(Ne).category || ""), O(Mr, i(Ne).description || ""), O(Ra, `${i(Ne).value ?? ""} points`);
            }), p(je, pe);
          }), p(ae, oe);
        };
        Y(kt, (ae) => {
          i(n).length && ae(Pt);
        });
      }
      var It = d(kt, 3), Zt = k(It), X = d(k(Zt));
      ve(X, 21, () => i(r), be, (ae, oe) => {
        var ye = Js(), je = k(ye), Ne = k(je), pe = q(Ne, !0), Oe = d(je), lt = q(Oe, !0), gt = d(Oe), pt = q(gt, !0), Qt = d(gt), $t = k(Qt), Mr = q($t, !0);
        N(
          (Nr) => {
            G(Ne, "href", `${e.config.urlRoot}/challenges#challenge-${i(oe).challenge.id}`), O(pe, i(oe).challenge.name), O(lt, i(oe).challenge.category), O(pt, i(oe).challenge.value), G($t, "datetime", i(oe).date), O(Mr, Nr);
          },
          [() => new Date(i(oe).date).toLocaleString()]
        ), p(ae, ye);
      }), N(
        (ae, oe) => {
          Ft(Z, `width:${i(c)}%;background:#25632a`), Ft(D, `width:${100 - i(c)}%;background:#a12a20`), O(ne, `Solves (${ae ?? ""}%) / Fails (${oe ?? ""}%)`);
        },
        [
          () => i(c).toFixed(2),
          () => (100 - i(c)).toFixed(2)
        ]
      ), p(P, x);
    }, ie = (P) => {
      var x = Qs();
      p(P, x);
    };
    Y(ee, (P) => {
      i(r).length || i(n).length ? P(fe) : !i(o) && !i(s) && P(ie, 1);
    });
  }
  N(() => O(L, e.page.name)), p(t, _), Me();
}
at(["click"]);
var to = /* @__PURE__ */ C('<p role="status">Loading scoreboard...</p>'), ro = /* @__PURE__ */ C('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), no = /* @__PURE__ */ C("<button> </button>"), ao = /* @__PURE__ */ C('<nav class="nav nav-pills mb-3" aria-label="Competition bracket"><button>All</button><!></nav>'), io = /* @__PURE__ */ C('<span class="badge bg-secondary ms-2"> </span>'), lo = /* @__PURE__ */ C('<tr><th scope="row"></th><td><a> </a><!></td><td> </td></tr>'), so = /* @__PURE__ */ C('<h3 class="text-center text-muted">Scoreboard is empty</h3>'), oo = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1>Scoreboard</h1></div></div> <div class="container"><!> <!> <!> <!> <div id="scoreboard" class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Place</th><th>User</th><th>Score</th></tr></thead><tbody></tbody></table></div> <!></div>', 1);
function fo(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(ge([])), n = /* @__PURE__ */ H(ge([])), a = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(ge({})), o = /* @__PURE__ */ H(!0), s = /* @__PURE__ */ H(""), f = 0;
  const c = /* @__PURE__ */ ue(() => i(r).filter((E) => !i(a) || String(E.bracket_id) === i(a))), h = /* @__PURE__ */ ue(() => Object.values(i(l)).map((E) => {
    let g = 0;
    return {
      name: E.name,
      data: [...E.solves].sort((A, K) => new Date(A.date) - new Date(K.date)).map((A) => [new Date(A.date).getTime(), g += A.value])
    };
  }));
  async function u() {
    const E = ++f;
    w(s, "");
    try {
      const [g, A, K] = await Promise.all([
        Ae("/scoreboard"),
        Ae("/brackets?type=users"),
        Ae(`/scoreboard/top/10${i(a) ? `?bracket_id=${encodeURIComponent(i(a))}` : ""}`)
      ]);
      if (E !== f) return;
      w(r, g, !0), w(n, A, !0), w(l, K, !0);
    } catch (g) {
      E === f && w(s, g.message, !0);
    } finally {
      E === f && w(o, !1);
    }
  }
  function v(E) {
    w(a, E, !0), u();
  }
  xt(() => {
    u();
    const E = setInterval(u, 3e5);
    return () => {
      clearInterval(E), f++;
    };
  });
  var _ = oo(), b = d(ce(_), 2), R = k(b);
  {
    var m = (E) => {
      var g = to();
      p(E, g);
    };
    Y(R, (E) => {
      i(o) && E(m);
    });
  }
  var L = d(R, 2);
  {
    var B = (E) => {
      var g = ro(), A = k(g), K = d(A);
      N(() => O(A, `${i(s) ?? ""} `)), he("click", K, u), p(E, g);
    };
    Y(L, (E) => {
      i(s) && E(B);
    });
  }
  var z = d(L, 2);
  {
    var F = (E) => {
      var g = ao(), A = k(g);
      let K;
      var $ = d(A);
      ve($, 17, () => i(n), be, (Q, J) => {
        var ee = no();
        let fe;
        var ie = q(ee, !0);
        N(
          (P) => {
            fe = Le(ee, 1, "nav-link", null, fe, { active: P }), O(ie, i(J).name);
          },
          [() => i(a) === String(i(J).id)]
        ), he("click", ee, () => v(String(i(J).id))), p(Q, ee);
      }), N(() => K = Le(A, 1, "nav-link", null, K, { active: !i(a) })), he("click", A, () => v("")), p(E, g);
    };
    Y(z, (E) => {
      i(n).length && E(F);
    });
  }
  var y = d(z, 2);
  {
    var j = (E) => {
      Ca(E, {
        title: "Top 10 Users",
        get series() {
          return i(h);
        }
      });
    };
    Y(y, (E) => {
      i(h).length && E(j);
    });
  }
  var U = d(y, 2), I = k(U), S = d(k(I));
  ve(S, 21, () => i(c), be, (E, g, A) => {
    var K = lo(), $ = k(K);
    $.textContent = A + 1;
    var Q = d($), J = k(Q), ee = q(J, !0), fe = d(J);
    {
      var ie = (V) => {
        var re = io(), ke = q(re, !0);
        N(() => O(ke, i(g).bracket_name)), p(V, re);
      };
      Y(fe, (V) => {
        i(g).bracket_name && V(ie);
      });
    }
    var P = d(Q), x = q(P, !0);
    N(() => {
      G(J, "href", i(g).account_url), O(ee, i(g).name), O(x, i(g).score);
    }), p(E, K);
  });
  var T = d(U, 2);
  {
    var M = (E) => {
      var g = so();
      p(E, g);
    };
    Y(T, (E) => {
      !i(o) && !i(s) && !i(c).length && E(M);
    });
  }
  p(t, _), Me();
}
at(["click"]);
var uo = /* @__PURE__ */ C('<div class="container custom-page"></div>');
function co(t, e) {
  Re(e, !0);
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
  var n = uo();
  yt(n, () => e.html, !0), Mt(n, (a) => r?.(a)), p(t, n), Me();
}
var vo = /* @__PURE__ */ C('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), ho = /* @__PURE__ */ C('<h2 class="text-center">There are no notifications yet</h2>'), _o = /* @__PURE__ */ C('<article class="card bg-body-tertiary mb-4"><div class="card-body"><h3> </h3><div></div><time class="text-muted"> </time></div></article>'), go = /* @__PURE__ */ C('<div class="jumbotron"><div class="container"><h1>Notifications</h1></div></div> <div class="container"><!> <!> <!></div>', 1), po = /* @__PURE__ */ C('<aside class="express-toast" role="status"><h2> </h2><div></div><button class="btn">Dismiss</button></aside>'), mo = /* @__PURE__ */ C('<h2 id="notification-title"> </h2><div></div><div class="dialog-actions"><a class="btn">All notifications</a><button class="btn btn-primary">Close</button></div>', 1), bo = /* @__PURE__ */ C('<!> <!> <dialog class="express-dialog" aria-labelledby="notification-title"><!></dialog>', 1);
function yo(t, e) {
  Re(e, !0);
  const r = (y) => (!y.user_id || y.user_id === e.config.userId) && (!y.team_id || y.team_id === e.config.teamId);
  let n = /* @__PURE__ */ H(ge(Fe(() => (e.page.notifications || []).filter(r)))), a = /* @__PURE__ */ H(ge([])), l = /* @__PURE__ */ H(null), o = /* @__PURE__ */ H(""), s;
  const f = /* @__PURE__ */ ue(() => `challenge-express-notifications:${e.config.urlRoot}:${e.config.userId || "guest"}`);
  function c() {
    try {
      localStorage.setItem(i(
        f
        /* Reading notifications still works when storage is unavailable. */
      ), JSON.stringify(i(a)));
    } catch {
    }
  }
  function h(y) {
    w(a, [.../* @__PURE__ */ new Set([...i(a), ...y])], !0), c();
  }
  function u() {
    i(l) && h([i(l).id]), w(l, null);
  }
  async function v() {
    try {
      w(n, (await Ae("/notifications")).filter(r), !0), w(o, ""), e.page.kind === "notifications" && h(i(n).map((y) => y.id));
    } catch (y) {
      e.page.kind === "notifications" && w(o, y.message, !0);
    }
  }
  qt(() => {
    e.onunread(i(n).filter((y) => !i(a).includes(y.id)).length);
  }), qt(() => {
    i(l) && i(l).type !== "toast" && s && !s.open && s.showModal();
  }), qt(() => {
    if (i(l)?.type !== "toast") return;
    const y = setTimeout(() => w(l, null), 8e3);
    return () => clearTimeout(y);
  }), xt(() => {
    try {
      const I = JSON.parse(localStorage.getItem(i(f)) || "[]");
      Array.isArray(I) && w(a, I, !0);
    } catch {
      w(a, [], !0);
    }
    v();
    const y = (I) => {
      if (I.key === i(
        f
        /* Ignore malformed external storage. */
      ))
        try {
          const S = JSON.parse(I.newValue || "[]");
          Array.isArray(S) && w(
            a,
            S,
            /* Ignore malformed external storage. */
            !0
          );
        } catch {
        }
    };
    window.addEventListener("storage", y);
    const j = e.config.userId ? new EventSource(`${e.config.urlRoot}/events`) : null;
    let U = !1;
    return j?.addEventListener("open", () => {
      U && v(), U = !0;
    }), j?.addEventListener("notification", (I) => {
      let S;
      try {
        S = JSON.parse(I.data);
      } catch {
        return;
      }
      if (!r(S)) return;
      const T = !i(n).some((M) => M.id === S.id);
      w(
        n,
        [
          ...i(n).filter((M) => M.id !== S.id),
          S
        ],
        !0
      ), e.page.kind === "notifications" ? h([S.id]) : T && !i(a).includes(S.id) && S.type !== "background" && w(l, S, !0);
    }), () => {
      j?.close(), window.removeEventListener("storage", y);
    };
  });
  var _ = bo(), b = ce(_);
  {
    var R = (y) => {
      var j = go(), U = d(ce(j), 2), I = k(U);
      {
        var S = (g) => {
          var A = vo(), K = k(A), $ = d(K);
          N(() => O(K, `${i(o) ?? ""} `)), he("click", $, v), p(g, A);
        };
        Y(I, (g) => {
          i(o) && g(S);
        });
      }
      var T = d(I, 2);
      {
        var M = (g) => {
          var A = ho();
          p(g, A);
        };
        Y(T, (g) => {
          !i(n).length && !i(o) && g(M);
        });
      }
      var E = d(T, 2);
      ve(E, 17, () => [...i(n)].sort((g, A) => A.id - g.id), be, (g, A) => {
        var K = _o(), $ = k(K), Q = k($), J = q(Q, !0), ee = d(Q);
        yt(ee, () => i(A).html, !0);
        var fe = d(ee), ie = q(fe, !0);
        N(
          (P) => {
            O(J, i(A).title), G(fe, "datetime", i(A).date), O(ie, P);
          },
          [() => new Date(i(A).date).toLocaleString()]
        ), p(g, K);
      }), p(y, j);
    };
    Y(b, (y) => {
      e.page.kind === "notifications" && y(R);
    });
  }
  var m = d(b, 2);
  {
    var L = (y) => {
      var j = po(), U = k(j), I = q(U, !0), S = d(U);
      yt(S, () => i(l).html || "", !0);
      var T = d(S);
      N(() => O(I, i(l).title)), he("click", T, u), p(y, j);
    };
    Y(m, (y) => {
      i(l)?.type === "toast" && y(L);
    });
  }
  var B = d(m, 2), z = k(B);
  {
    var F = (y) => {
      var j = mo(), U = ce(j), I = q(U, !0), S = d(U);
      yt(S, () => i(l).html || "", !0);
      var T = d(S), M = k(T), E = d(M);
      N(() => {
        O(I, i(l).title), G(M, "href", `${e.config.urlRoot}/notifications`);
      }), he("click", E, () => s.close()), p(y, j);
    };
    Y(z, (y) => {
      i(l) && i(l).type !== "toast" && y(F);
    });
  }
  Nt(B, (y) => s = y, () => s), ct("close", B, u), p(t, _), Me();
}
at(["click"]);
var wo = /* @__PURE__ */ C('<img class="express-brand-icon" alt="" draggable="false"/>'), xo = /* @__PURE__ */ C('<i class="fas fa-envelope" aria-hidden="true"></i>'), ko = /* @__PURE__ */ C('<i class="fas fa-bell" aria-hidden="true"></i>'), Eo = /* @__PURE__ */ C('<span class="badge bg-danger"> </span>'), So = /* @__PURE__ */ C('<li class="nav-item"><a class="nav-link"><!> <!></a></li>'), Ao = /* @__PURE__ */ C("<ul></ul>"), Co = /* @__PURE__ */ C('<nav class="navbar navbar-expand-md" aria-label="Main navigation"><div class="container"><button class="navbar-toggler" type="button" aria-controls="base-navbars" aria-label="Toggle navigation"><i class="fas fa-bars" aria-hidden="true"></i> Menu</button> <div id="base-navbars"></div></div></nav>'), To = /* @__PURE__ */ C('<div id="challenge-app"><!></div>'), Lo = /* @__PURE__ */ C("<p> </p>"), Ro = /* @__PURE__ */ C('<div class="container error-page"><h1> </h1><h2> </h2><!><a>Back to challenges</a></div>'), Mo = /* @__PURE__ */ C("<!> <!>", 1), No = /* @__PURE__ */ C('<div class="express-window"><header class="express-title window-drag-handle" tabindex="0" role="button" aria-label="Move application window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><!> <span id="window-title"> </span></header> <!> <main id="main-content"><!> <!></main> <footer class="express-status"> <span>Powered by <a href="https://ctfd.io">CTFd</a></span></footer></div> <div class="express-taskbar"><a class="express-start">Start</a><span> </span></div>', 1);
function Oo(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(!1), n = /* @__PURE__ */ H(0);
  const a = /* @__PURE__ */ ue(() => e.page.kind === "login"), l = /* @__PURE__ */ ue(() => ["login", "register", "reset", "confirm"].includes(e.page.kind));
  xt(() => (document.body.classList.toggle("login-desktop", i(a)), () => document.body.classList.remove("login-desktop")));
  var o = No(), s = ce(o), f = k(s), c = k(f);
  {
    var h = (M) => {
      var E = wo();
      N(() => G(E, "src", e.site.logo)), p(M, E);
    }, u = (M) => {
      var E = xo();
      p(M, E);
    };
    Y(c, (M) => {
      e.site.logo ? M(h) : M(u, -1);
    });
  }
  var v = d(c, 2), _ = q(v, !0), b = d(f, 2);
  {
    var R = (M) => {
      var E = Co(), g = k(E), A = k(g), K = d(A, 2);
      let $;
      ve(K, 21, () => [e.site.primary, e.site.account], be, (Q, J, ee) => {
        var fe = Ao();
        Le(fe, 1, "navbar-nav", null, {}, { "me-auto": ee === 0, "ms-md-auto": ee === 1 }), ve(fe, 21, () => i(J), be, (ie, P) => {
          var x = So(), V = k(x), re = k(V);
          {
            var ke = (W) => {
              var ne = ko();
              p(W, ne);
            };
            Y(re, (W) => {
              i(P).label === "Notifications" && W(ke);
            });
          }
          var Ce = d(re), Z = d(Ce);
          {
            var D = (W) => {
              var ne = Eo(), de = q(ne, !0);
              N(() => O(de, i(n))), p(W, ne);
            };
            Y(Z, (W) => {
              i(P).label === "Notifications" && i(n) > 0 && W(D);
            });
          }
          N(() => {
            G(V, "href", i(P).href), G(V, "target", i(P).target || void 0), G(V, "rel", i(P).target === "_blank" ? "noopener" : void 0), O(Ce, `${i(P).label ?? ""} `);
          }), p(ie, x);
        }), p(Q, fe);
      }), N(() => {
        G(A, "aria-expanded", i(r)), $ = Le(K, 1, "collapse navbar-collapse", null, $, { show: i(r) });
      }), he("click", A, () => w(r, !i(r))), p(M, E);
    };
    Y(b, (M) => {
      i(a) || M(R);
    });
  }
  var m = d(b, 2), L = k(m);
  {
    var B = (M) => {
      ms(M, {
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
    }, z = (M) => {
      var E = Mo(), g = ce(E);
      Aa(g, {
        get errors() {
          return e.site.errors;
        },
        get infos() {
          return e.site.infos;
        }
      });
      var A = d(g, 2);
      {
        var K = (x) => {
          var V = To(), re = k(V);
          Kl(re, {
            get config() {
              return e.config;
            }
          }), p(x, V);
        }, $ = (x) => {
          Ss(x, {
            get page() {
              return e.page;
            }
          });
        }, Q = (x) => {
          Is(x, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, J = (x) => {
          eo(x, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, ee = (x) => {
          fo(x, {});
        }, fe = (x) => {
          co(x, {
            get html() {
              return e.page.html;
            }
          });
        }, ie = (x) => {
          var V = Ro(), re = k(V), ke = q(re, !0), Ce = d(re), Z = q(Ce), D = d(Ce);
          {
            var W = (de) => {
              var _e = Lo(), we = q(_e, !0);
              N(() => O(we, e.page.detail)), p(de, _e);
            };
            Y(D, (de) => {
              e.page.detail && de(W);
            });
          }
          var ne = d(D);
          N(() => {
            O(ke, e.page.heading), O(Z, `${e.page.code ?? ""} ${e.page.message ?? ""}`), G(ne, "href", `${e.config.urlRoot}/challenges`);
          }), p(x, V);
        }, P = (x) => {
          var V = dt(), re = ce(V);
          yt(re, () => e.fallback), p(x, V);
        };
        Y(A, (x) => {
          e.page.kind === "challenges" ? x(K) : e.page.kind === "settings" ? x($, 1) : e.page.kind === "users" ? x(Q, 2) : e.page.kind === "profile" ? x(J, 3) : e.page.kind === "scoreboard" ? x(ee, 4) : e.page.kind === "page" ? x(fe, 5) : e.page.kind === "error" ? x(ie, 6) : e.page.kind !== "notifications" && x(P, 7);
        });
      }
      p(M, E);
    };
    Y(L, (M) => {
      i(l) ? M(B) : M(z, -1);
    });
  }
  var F = d(L, 2);
  yo(F, {
    get page() {
      return e.page;
    },
    get config() {
      return e.config;
    },
    onunread: (M) => w(n, M, !0)
  });
  var y = d(m, 2), j = k(y);
  Mt(s, (M, E) => Sa?.(M, E), () => !i(a));
  var U = d(s, 2), I = k(U), S = d(I), T = q(S, !0);
  N(() => {
    O(_, e.site.title), O(j, e.site.eventName), G(I, "href", `${e.config.urlRoot}/challenges`), O(T, e.site.appName);
  }), p(t, o), Me();
}
at(["click"]);
const Ta = document.getElementById("site-app"), La = JSON.parse(document.getElementById("page-data").textContent);
document.body.classList.toggle("login-desktop", La.kind === "login");
Ta.replaceChildren();
Ki(Oo, { target: Ta, props: {
  config: window.init,
  site: JSON.parse(document.getElementById("site-data").textContent),
  page: La,
  fallback: document.getElementById("fallback-content").innerHTML
} });
