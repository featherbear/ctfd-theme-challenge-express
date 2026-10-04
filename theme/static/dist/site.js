var Ar = Array.isArray, Ma = Array.prototype.indexOf, pr = Array.prototype.includes, Cr = Array.from, Ln = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, Rn = Object.getOwnPropertyDescriptors, Na = Object.prototype, Oa = Array.prototype, tn = Object.getPrototypeOf, pn = Object.isExtensible;
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
const Pe = 2, Ut = 4, Tr = 8, Nn = 1 << 24, Ge = 16, ze = 32, vt = 64, Hr = 128, rn = 256, Ze = 512, Ee = 1024, xe = 2048, Ye = 4096, Ie = 8192, De = 16384, Gt = 32768, mr = 1 << 25, Ht = 65536, br = 1 << 17, Fa = 1 << 18, Xt = 1 << 19, ja = 1 << 20, et = 1 << 25, yr = 1 << 21, jt = 1 << 22, bt = 1 << 23, ft = /* @__PURE__ */ Symbol("$state"), On = /* @__PURE__ */ Symbol("component"), Ba = /* @__PURE__ */ Symbol("legacy props"), qa = /* @__PURE__ */ Symbol(""), Pn = /* @__PURE__ */ Symbol("attributes"), Vr = /* @__PURE__ */ Symbol("class"), Yr = /* @__PURE__ */ Symbol("style"), zr = /* @__PURE__ */ Symbol("text"), hr = /* @__PURE__ */ Symbol("form reset"), fr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Ua = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Ha = 1, Va = 2, In = 4, Ya = 8, za = 16, Wa = 1, Ga = 4, Xa = 8, Ja = 16, Ka = 1, Za = 2, ke = /* @__PURE__ */ Symbol("uninitialized"), Dn = "http://www.w3.org/1999/xhtml", Qa = "http://www.w3.org/2000/svg", $a = "http://www.w3.org/1998/Math/MathML";
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
      le
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
function st(t) {
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
  (t.f & Ze) !== 0 || t.deps === null ? me(t, Ee) : me(t, Ye);
}
function Vn(t, e, r) {
  (t.f & xe) !== 0 ? e.add(t) : (t.f & Ye) !== 0 && r.add(t), me(t, Ee);
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
function Jt(t) {
  var e = ie, r = le;
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
    le
  ), f = mi(), c = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((_) => _.promise)) : null;
  function v(_) {
    if ((o.f & De) === 0) {
      f();
      try {
        n([...s, ..._]);
      } catch (m) {
        $e(m, o);
      }
      wr();
    }
  }
  var u = Yn();
  if (r.length === 0) {
    c.then(() => v([])).finally(u);
    return;
  }
  function h() {
    Promise.all(r.map((_) => /* @__PURE__ */ bi(_))).then(v).catch((_) => $e(_, o)).finally(u);
  }
  c ? c.then(() => {
    f(), h(), wr();
  }) : h();
}
function mi() {
  var t = (
    /** @type {Effect} */
    le
  ), e = ie, r = Te, n = (
    /** @type {Batch} */
    te
  );
  return function(l = !0) {
    nt(t), We(e), Vt(r), l && (t.f & De) === 0 && (n?.activate(), n?.apply());
  };
}
function wr(t = !0) {
  nt(null), We(null), Vt(null), t && te?.deactivate();
}
function Yn() {
  var t = (
    /** @type {Effect} */
    le
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
  var e = Pe | xe;
  return le !== null && (le.f |= Xt), {
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
      ke
    ),
    wv: 0,
    parent: le,
    ac: null
  };
}
const tr = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function bi(t, e, r) {
  let n = (
    /** @type {Effect | null} */
    le
  );
  n === null && ni();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Lt(
    /** @type {V} */
    ke
  ), s = !ie, o = /* @__PURE__ */ new Set();
  return Oi(() => {
    var f = (
      /** @type {Effect} */
      le
    ), c = Mn();
    a = c.promise;
    try {
      Promise.resolve(t()).then(c.resolve, (_) => {
        _ !== fr && c.reject(_);
      }).finally(wr);
    } catch (_) {
      c.reject(_), wr();
    }
    var v = (
      /** @type {Batch} */
      te
    );
    if (s) {
      if ((f.f & Gt) !== 0)
        var u = Yn();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        n.b?.is_rendered()
      )
        v.async_deriveds.get(f)?.reject(tr);
      else
        for (const _ of o.values())
          _.reject(tr);
      o.add(c), v.async_deriveds.set(f, c);
    }
    const h = (_, m = void 0) => {
      u?.(), o.delete(c), m !== tr && (v.activate(), m ? (l.f |= bt, Yt(l, m)) : ((l.f & bt) !== 0 && (l.f ^= bt), Yt(l, _)), v.deactivate());
    };
    c.promise.then(h, (_) => h(null, _ || "unknown"));
  }), Lr(() => {
    for (const f of o)
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
function de(t) {
  const e = /* @__PURE__ */ or(t);
  return ca(e), e;
}
// @__NO_SIDE_EFFECTS__
function zn(t) {
  const e = /* @__PURE__ */ or(t);
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
function on(t) {
  var e, r = le, n = t.parent;
  if (!ht && n !== null && t.v !== ke && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
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
  var e = on(t);
  if (!t.equals(e) && (t.wv = va(), (!te?.is_fork || t.deps === null) && (te !== null ? (te.capture(t, e, !0), Wr?.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    me(t, Ee);
    return;
  }
  ht || (Xe !== null ? (un() || te?.is_fork) && Xe.set(t, e) : an(t));
}
function wi(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac !== null && Jt(() => {
        e.ac.abort(fr), e.ac = null;
      }), e.fn !== null && (e.teardown = Pa), sr(e, 0), dn(e));
}
function Gn(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && zt(e);
}
let Or = null, It = null, te = null, Wr = null, Xe = null, Gr = null, ar = !1, Pr = !1, ir = null, _r = null;
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
    It === null ? Or = It = this : (It.#e = this, this.#l = It), It = this;
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
          if ((a & (vt | ze)) !== 0) {
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
    for (const o of this.#f)
      this.#u.delete(o), me(o, xe), this.schedule(o);
    for (const o of this.#u)
      me(o, Ye), this.schedule(o);
    this.apply();
    for (var e = ir = [], r = [], n = _r = []; this.#a.length > 0; ) {
      bn++ > 1e3 && (this.#_(), Ei());
      for (const o of this.#x())
        try {
          this.#m(o, e, r);
        } catch (f) {
          throw Kn(o), this.#b() || this.discard(), f;
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
        Jn(o, f);
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
    this.#s.clear(), Wr = this, yn(r), yn(e), Wr = null, this.#o?.resolve();
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
    s !== null && (tt.clear(), s.#p());
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
      var l = a.f, s = (l & (ze | vt)) !== 0, o = s && (l & Ee) !== 0, f = o || (l & Ie) !== 0 || this.#d.has(a);
      if (!f && a.fn !== null) {
        s ? a.f ^= Ee : (l & Ut) !== 0 ? r.push(a) : cr(a) && ((l & Ge) !== 0 && this.#u.add(a), zt(a));
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
      if (a !== null && !((n.f & Pe) !== 0 && (n.f & (xe | Ye)) === 0))
        for (const o of a) {
          var l = o.f;
          if ((l & Pe) !== 0)
            r(
              /** @type {Derived} */
              o
            );
          else {
            var s = (
              /** @type {Effect} */
              o
            );
            l & (jt | Ge) && !this.async_deriveds.has(s) && (this.#u.delete(s), me(s, xe), this.schedule(s));
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
    e.v !== ke && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & bt) === 0 && (this.current.set(e, [r, n]), Xe?.set(e, r)), this.is_fork || (e.v = r);
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
      bn = 0, Gr = null, ir = null, _r = null, Pr = !1, te = null, Xe = null, tt.clear();
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
      for (const [h, [_, m]] of this.current) {
        if (u.current.has(h)) {
          var n = (
            /** @type {[any, boolean]} */
            u.current.get(h)[0]
          );
          if (e && _ !== n)
            u.current.set(h, [_, m]);
          else
            continue;
        }
        r.push(h);
      }
      if (e)
        for (const [h, _] of this.async_deriveds) {
          const m = u.async_deriveds.get(h);
          m && _.promise.then(m.resolve).catch(m.reject);
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
                (_.f & (Ge | jt)) !== 0 ? u.schedule(_) : u.#v([_]);
              });
          u.activate();
          var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
          for (var f of r)
            Xn(f, l, s, o);
          o = /* @__PURE__ */ new Map();
          var c = [...u.current].filter(([h, _]) => {
            const m = this.current.get(h);
            return m ? m[0] !== _[0] || m[1] !== _[1] : !0;
          }).map(([h]) => h);
          if (c.length > 0)
            for (const h of this.#h)
              (h.f & (De | Ie | br)) === 0 && sn(h, c, o) && ((h.f & (jt | Ge)) !== 0 ? (me(h, xe), u.schedule(h)) : u.#f.add(h));
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
    if (te === null) {
      const e = te = new wt();
      !Pr && !ar && st(() => {
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
    if (Gr = e, e.b?.is_pending && (e.f & (Ut | Tr | Nn)) !== 0 && (e.f & Gt) === 0) {
      e.b.defer_effect(e);
      return;
    }
    this.#a.push(e);
  }
  #_() {
    if (this.linked) {
      var e = this.#l, r = this.#e;
      e === null ? Or = r : e.#e = r, r === null ? It = e : r.#l = e, this.linked = !1;
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
    $e(t, Gr);
  }
}
let ot = null;
function yn(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var n = t[r++];
      if ((n.f & (De | Ie)) === 0 && cr(n) && (ot = /* @__PURE__ */ new Set(), zt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && sa(n), ot?.size > 0)) {
        tt.clear();
        for (const a of ot) {
          if ((a.f & (De | Ie)) !== 0) continue;
          const l = [a];
          let s = a.parent;
          for (; s !== null; )
            ot.has(s) && (ot.delete(s), l.push(s)), s = s.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const f = l[o];
            (f.f & (De | Ie)) === 0 && zt(f);
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
      ) : (l & (jt | Ge)) !== 0 && (l & xe) === 0 && sn(a, e, n) && (me(a, xe), fn(
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
  te.schedule(t);
}
function Jn(t, e) {
  if (!((t.f & ze) !== 0 && (t.f & Ee) !== 0)) {
    (t.f & xe) !== 0 ? e.d.push(t) : (t.f & Ye) !== 0 && e.m.push(t), me(t, Ee);
    for (var r = t.first; r !== null; )
      Jn(r, e), r = r.next;
  }
}
function Kn(t) {
  me(t, Ee);
  for (var e = t.first; e !== null; )
    Kn(e), e = e.next;
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
function k(t, e, r = !1) {
  ie !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ke || (ie.f & br) !== 0) && Un() && (ie.f & (Pe | Ge | jt | br)) !== 0 && (rt === null || !rt.has(t)) && di();
  let n = r ? ge(e) : e;
  return Yt(t, n, _r);
}
var Et = null, Xr = 0;
function Yt(t, e, r = null) {
  if (!t.equals(e)) {
    ht ? tt.set(t, e) : tt.has(t) || tt.set(t, t.v);
    var n = wt.ensure();
    if (n.capture(t, e), (t.f & Pe) !== 0) {
      const a = (
        /** @type {Derived} */
        t
      );
      (t.f & xe) !== 0 && on(a), Xe === null && an(a);
    }
    t.wv = va(), Et = null, Xr = 0, Qn(t, xe, r), Et = null, le !== null && (le.f & Ee) !== 0 && (le.f & (ze | vt)) === 0 && (He === null ? Ii([t]) : He.push(t)), !n.is_fork && xr.size > 0 && !Zn && Ai();
  }
  return e;
}
function Ai() {
  Zn = !1;
  for (const t of xr) {
    (t.f & Ee) !== 0 && me(t, Ye);
    let e;
    try {
      e = cr(t);
    } catch {
      e = !0;
    }
    e && zt(t);
  }
  xr.clear();
}
function lr(t) {
  k(t, t.v + 1);
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
      var s = n[l], o = s.f, f = (o & xe) === 0;
      if (f && me(s, e), (o & br) !== 0)
        xr.add(
          /** @type {Effect} */
          s
        );
      else if ((o & Pe) !== 0) {
        var c = (
          /** @type {Derived} */
          s
        );
        Xe?.delete(c), Qn(c, Ye, r);
      } else if (f) {
        var v = (
          /** @type {Effect} */
          s
        );
        (o & Ge) !== 0 && ot !== null && ot.add(v), r !== null ? r.push(v) : fn(v);
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
  var r = /* @__PURE__ */ new Map(), n = Ar(t), a = /* @__PURE__ */ H(0), l = Tt, s = (o) => {
    if (Tt === l)
      return o();
    var f = ie, c = Tt;
    We(null), kn(l);
    var v = o();
    return We(f), kn(c), v;
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
        var v = r.get(f);
        return v === void 0 ? s(() => {
          var u = /* @__PURE__ */ H(c.value);
          return r.set(f, u), u;
        }) : k(v, c.value, !0), !0;
      },
      deleteProperty(o, f) {
        var c = r.get(f);
        if (c === void 0) {
          if (f in o) {
            const v = s(() => /* @__PURE__ */ H(ke));
            r.set(f, v), lr(a);
          }
        } else
          k(c, ke), lr(a);
        return !0;
      },
      get(o, f, c) {
        if (f === ft)
          return t;
        var v = r.get(f), u = f in o;
        if (v === void 0 && (!u || Ft(o, f)?.writable) && (v = s(() => {
          var _ = ge(u ? o[f] : ke), m = /* @__PURE__ */ H(_);
          return m;
        }), r.set(f, v)), v !== void 0) {
          var h = i(v);
          return h === ke ? void 0 : h;
        }
        return Reflect.get(o, f, c);
      },
      getOwnPropertyDescriptor(o, f) {
        this.has?.(o, f);
        var c = Reflect.getOwnPropertyDescriptor(o, f), v = r.get(f);
        if (v !== void 0) {
          var u = i(v);
          if (u === ke)
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
        if (f === ft)
          return !0;
        var c = r.get(f), v = c !== void 0 && c.v !== ke || Reflect.has(o, f);
        if (c !== void 0 || le !== null && (!v || Ft(o, f)?.writable)) {
          c === void 0 && (c = s(() => {
            var h = v ? ge(o[f]) : ke, _ = /* @__PURE__ */ H(h);
            return _;
          }), r.set(f, c));
          var u = i(c);
          if (u === ke)
            return !1;
        }
        return v;
      },
      set(o, f, c, v) {
        var u = r.get(f), h = f in o;
        if (n && f === "length")
          for (var _ = c; _ < /** @type {Source<number>} */
          u.v; _ += 1) {
            var m = r.get(_ + "");
            m !== void 0 ? k(m, ke) : _ in o && (m = s(() => /* @__PURE__ */ H(ke)), r.set(_ + "", m));
          }
        if (u === void 0)
          (!h || Ft(o, f)?.writable) && (u = s(() => /* @__PURE__ */ H(void 0)), k(u, ge(c)), r.set(f, u));
        else {
          h = u.v !== ke;
          var T = s(() => ge(c));
          k(u, T);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, f);
        if (b?.set && b.set.call(v, c), !h) {
          if (n && typeof f == "string") {
            var A = (
              /** @type {Source<number>} */
              r.get("length")
            ), q = Number(f);
            Number.isInteger(q) && q >= A.v && k(A, q + 1);
          }
          lr(a);
        }
        return !0;
      },
      ownKeys(o) {
        i(a);
        var f = Reflect.ownKeys(o).filter((u) => {
          var h = r.get(u);
          return h === void 0 || h.v !== ke;
        });
        for (var [c, v] of r)
          v.v !== ke && !(c in o) && f.push(c);
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
var Jr, ea, ta, ra;
function Ci() {
  if (Jr === void 0) {
    Jr = window, ea = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    ta = Ft(e, "firstChild").get, ra = Ft(e, "nextSibling").get, pn(t) && (t[Vr] = void 0, t[Pn] = null, t[Yr] = void 0, t.__e = void 0), pn(r) && (r[zr] = void 0);
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
function E(t, e) {
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
  var e = le;
  if (e === null)
    return ie.f |= bt, t;
  if ((e.f & Gt) === 0 && (e.f & Ut) === 0)
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
  le === null && (ie === null && oi(), li()), ht && ii();
}
function Mi(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function _t(t, e) {
  var r = le;
  r !== null && (r.f & Ie) !== 0 && (t |= Ie);
  var n = {
    ctx: Te,
    deps: null,
    nodes: null,
    f: t | xe | Ze,
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
  if ((t & Ut) !== 0)
    ir !== null ? ir.push(n) : wt.ensure().schedule(n);
  else if (e !== null) {
    try {
      zt(n);
    } catch (s) {
      throw qe(n), s;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Xt) === 0 && (a = a.first, (t & Ge) !== 0 && (t & Ht) !== 0 && a !== null && (a.f |= Ht));
  }
  if (a !== null && (a.parent = r, r !== null && Mi(a, r), ie !== null && (ie.f & Pe) !== 0 && (t & vt) === 0)) {
    var l = (
      /** @type {Derived} */
      ie
    );
    (l.effects ??= []).push(a);
  }
  return n;
}
function un() {
  return ie !== null && !Ke;
}
function Lr(t) {
  const e = _t(Tr, null);
  return me(e, Ee), e.teardown = t, e;
}
function Bt(t) {
  Ri();
  var e = (
    /** @type {Effect} */
    le.f
  ), r = !ie && (e & ze) !== 0 && Te !== null && !Te.i;
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
  return _t(Ut | ja, t);
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
  return _t(Ut, t);
}
function Oi(t) {
  return _t(jt | Xt, t);
}
function Kt(t, e = 0) {
  return _t(Tr | e, t);
}
function M(t, e = [], r = [], n = []) {
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
function Ve(t) {
  return _t(ze | Xt, t);
}
function la(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = ht, n = ie;
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
      a.abort(fr);
    });
    var n = r.next;
    (r.f & vt) !== 0 ? r.parent = null : qe(r, e), r = n;
  }
}
function Pi(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & ze) === 0 && qe(e), e = r;
  }
}
function qe(t, e = !0) {
  var r = !1;
  (e || (t.f & Fa) !== 0) && t.nodes !== null && t.nodes.end !== null && (oa(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), r = !0), t.f |= mr, dn(t, e && !r), sr(t, 0);
  var n = t.nodes && t.nodes.t;
  if (n !== null)
    for (const l of n)
      l.stop();
  la(t), t.f ^= mr, t.f |= De;
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
function Ct(t, e, r = !0) {
  var n = [];
  t.f |= rn, fa(t, n, !0);
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
function fa(t, e, r) {
  if ((t.f & Ie) === 0) {
    t.f ^= Ie;
    var n = t.nodes && t.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && e.push(o);
    for (var a = t.first; a !== null; ) {
      var l = a.next;
      if ((a.f & vt) === 0) {
        var s = (a.f & Ht) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & ze) !== 0 && (t.f & Ge) !== 0;
        fa(a, e, s ? r : !1);
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
    t.f ^= Ie, (t.f & Ee) === 0 && (me(t, xe), wt.ensure().schedule(t));
    for (var r = t.first; r !== null; ) {
      var n = r.next, a = (r.f & Ht) !== 0 || (r.f & ze) !== 0;
      ua(r, a ? e : !1), r = n;
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
let gr = !1, ht = !1;
function xn(t) {
  ht = t;
}
let ie = null, Ke = !1;
function We(t) {
  ie = t;
}
let le = null;
function nt(t) {
  le = t;
}
let rt = null;
function ca(t) {
  ie !== null && ((ie.f & yr) !== 0 || (ie.f & Pe) !== 0) && (rt ??= /* @__PURE__ */ new Set()).add(t);
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
    (e & Ze) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Xe === null && me(t, Ee);
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
      ) : e === l && (r ? me(l, xe) : (l.f & Ee) !== 0 && me(l, Ye), fn(
        /** @type {Effect} */
        l
      ));
    }
}
function _a(t) {
  var e = Be, r = Ue, n = He, a = ie, l = rt, s = Te, o = Ke, f = Tt, c = t.f;
  Be = /** @type {null | Value[]} */
  null, Ue = 0, He = null, ie = (c & (ze | vt)) === 0 ? t : null, rt = null, Vt(t.ctx), Ke = !1, Tt = ++At, t.ac !== null && (Jt(() => {
    t.ac.abort(fr);
  }), t.ac = null);
  try {
    t.f |= yr;
    var v = (
      /** @type {Function} */
      t.fn
    ), u = v();
    t.f |= Gt;
    var h = En(t);
    if (Un() && He !== null && !Ke && h !== null && (t.f & (Pe | Ye | xe)) === 0)
      for (var _ = 0; _ < /** @type {Source[]} */
      He.length; _++)
        ha(
          He[_],
          /** @type {Effect} */
          t
        );
    if (a !== null && a !== t) {
      if (At++, a.deps !== null)
        for (let m = 0; m < r; m += 1)
          a.deps[m].rv = At;
      if (e !== null)
        for (const m of e)
          m.rv = At;
      He !== null && (n === null ? n = He : n.push(.../** @type {Source[]} */
      He));
    }
    return (t.f & bt) !== 0 && (t.f ^= bt), u;
  } catch (m) {
    return En(t), Li(m);
  } finally {
    t.f ^= yr, Be = e, Ue = r, He = n, ie = a, rt = l, Vt(s), Ke = o, Tt = f;
  }
}
function En(t) {
  var e = t.deps, r = te?.is_fork;
  if (Be !== null) {
    var n;
    if (r || sr(t, Ue), e !== null && Ue > 0)
      for (e.length = Ue + Be.length, n = 0; n < Be.length; n++)
        e[Ue + n] = Be[n];
    else
      t.deps = e = Be;
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
  if (r === null && (e.f & Pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Be === null || !pr.call(Be, e))) {
    var l = (
      /** @type {Derived} */
      e
    );
    (l.f & Ze) !== 0 && (l.f ^= Ze), l.v !== ke && an(l), l.ac !== null && Jt(() => {
      l.ac.abort(fr), l.ac = null, me(l, xe);
    }), wi(l), sr(l, 0);
  }
}
function sr(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      Di(t, r[n]);
}
function zt(t) {
  var e = t.f;
  if ((e & De) === 0) {
    me(t, Ee);
    var r = le, n = gr;
    le = t, gr = (e & (ze | vt)) === 0;
    try {
      (e & (Ge | Nn)) !== 0 ? Pi(t) : dn(t), la(t);
      var a = _a(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = da;
      var l;
    } finally {
      gr = n, le = r;
    }
  }
}
async function Er() {
  await Promise.resolve(), ki();
}
function i(t) {
  var e = t.f, r = (e & Pe) !== 0;
  if (ie !== null && !Ke) {
    var n = le !== null && (le.f & De) !== 0;
    if (!n && (rt === null || !rt.has(t))) {
      var a = ie.deps;
      if ((ie.f & yr) !== 0)
        t.rv < At && (t.rv = At, Be === null && a !== null && a[Ue] === t ? Ue++ : Be === null ? Be = [t] : Be.push(t));
      else {
        ie.deps ??= [], pr.call(ie.deps, t) || ie.deps.push(t);
        var l = t.reactions;
        l === null ? t.reactions = [ie] : pr.call(l, ie) || l.push(ie);
      }
    }
  }
  if (ht && tt.has(t))
    return tt.get(t);
  if (r) {
    var s = (
      /** @type {Derived} */
      t
    );
    if (ht) {
      var o = s.v;
      return ((s.f & Ee) === 0 && s.reactions !== null || pa(s)) && (o = on(s)), tt.set(s, o), o;
    }
    var f = (s.f & Ze) === 0 && !Ke && ie !== null && (gr || (ie.f & Ze) !== 0), c = (s.f & Gt) === 0;
    cr(s) && (f && (s.f |= Ze), Wn(s)), f && !c && (Gn(s), ga(s));
  }
  if (Xe?.has(t))
    return Xe.get(t);
  if ((t.f & bt) !== 0)
    throw t.v;
  return t.v;
}
function ga(t) {
  if (t.f |= Ze, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Pe) !== 0 && (e.f & Ze) === 0 && (Gn(
        /** @type {Derived} */
        e
      ), ga(
        /** @type {Derived} */
        e
      ));
}
function pa(t) {
  if (t.v === ke) return !0;
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
  var e = Ke;
  try {
    return Ke = !0, t();
  } finally {
    Ke = e;
  }
}
function Fi(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (ft in t)
      Kr(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const r = t[e];
        typeof r == "object" && r && ft in r && Kr(r);
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
  var l = { capture: n, passive: a }, s = qi(t, e, r, l);
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
    Ln(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var v = ie, u = le;
    We(null), nt(null);
    try {
      for (var h, _ = []; l !== null && l !== e; ) {
        try {
          var m = l[rr]?.[n];
          m != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === l) && m.call(l, t);
        } catch (T) {
          h ? _.push(T) : h = T;
        }
        if (t.cancelBubble) break;
        s++, l = s < a.length ? (
          /** @type {Element} */
          a[s]
        ) : null;
      }
      if (h) {
        for (let T of _)
          queueMicrotask(() => {
            throw T;
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
function Rt(t, e) {
  var r = (
    /** @type {Effect} */
    le
  );
  r.nodes === null && (r.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function S(t, e) {
  var r = (e & Ka) !== 0, n = (e & Za) !== 0, a, l = !t.startsWith("<!>");
  return () => {
    a === void 0 && (a = ba(l ? t : "<!>" + t), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(a)));
    var s = (
      /** @type {TemplateNode} */
      n || ea ? document.importNode(a, !0) : a.cloneNode(!0)
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
        ba(a)
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
function Yi(t, e) {
  return /* @__PURE__ */ Vi(t, e, "svg");
}
function Qe(t = "") {
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
    un() && (i(r), Kt(() => (e === 0 && (n = Fe(() => t(() => lr(r)))), e += 1, () => {
      st(() => {
        e -= 1, e === 0 && (n?.(), n = void 0, lr(r));
      });
    })));
  };
}
var Wi = Ht | Xt;
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
    this.#t = e, this.#e = r, this.#s = (l) => {
      var s = (
        /** @type {Effect} */
        le
      );
      s.b = this, s.f |= Hr, n(l);
    }, this.parent = /** @type {Effect} */
    le.b, this.transform_error = a ?? this.parent?.transform_error ?? ((l) => l), this.#n = Rr(() => {
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
    st(a), r && (this.#o = Ve(() => {
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
        $e(s, this.#n && this.#n.parent);
      }
    } };
  }
  #k() {
    const e = this.#e.pending;
    e && (this.is_pending = !0, this.#r = Ve(() => e(this.#t)), st(() => {
      var r = this.#a = document.createDocumentFragment(), n = ut(), a = !1;
      if (r.append(n), this.#i = this.#w(() => {
        try {
          return Ve(() => this.#s(n));
        } catch (l) {
          try {
            this.error(l), a = !0;
          } catch (s) {
            $e(s, this.#n.parent);
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
    var r = le, n = ie, a = Te;
    nt(this.#n), We(this.#n), Vt(this.#n.ctx);
    try {
      return wt.ensure(), e();
    } finally {
      nt(r), We(n), Vt(a);
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
    this.#_(e, r), this.#h += e, !(!this.#c || this.#u) && (this.#u = !0, st(() => {
      this.#u = !1, this.#c && Yt(this.#c, this.#h);
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
              le
            );
            o.b = this, o.f |= Hr, r(
              this.#t,
              () => a,
              () => l
            );
          });
        } catch (o) {
          return $e(
            o,
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
function O(t, e) {
  var r = e == null ? "" : typeof e == "object" ? `${e}` : e;
  r !== /** @type {any} */
  (t[zr] ??= t.nodeValue) && (t[zr] = r, t.nodeValue = `${r}`);
}
function Ji(t, e) {
  return Ki(t, e);
}
const dr = /* @__PURE__ */ new Map();
function Ki(t, { target: e, anchor: r, props: n = {}, events: a, context: l, intro: s = !0, transformError: o }) {
  Ci();
  var f = void 0, c = Ni(() => {
    var v = r ?? e.appendChild(ut());
    Gi(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (_) => {
        Re({});
        var m = (
          /** @type {ComponentContext} */
          Te
        );
        l && (m.c = l), a && (n.$$events = a), f = t(_, n) || nn(), Me();
      },
      o
    );
    var u = /* @__PURE__ */ new Set(), h = (_) => {
      for (var m = 0; m < _.length; m++) {
        var T = _[m];
        if (!u.has(T)) {
          u.add(T);
          var b = Bi(T);
          for (const Y of [e, document]) {
            var A = dr.get(Y);
            A === void 0 && (A = /* @__PURE__ */ new Map(), dr.set(Y, A));
            var q = A.get(T);
            q === void 0 ? (Y.addEventListener(T, Qr, { passive: b }), A.set(T, 1)) : A.set(T, q + 1);
          }
        }
      }
    };
    return h(Cr(ma)), Zr.add(h), () => {
      for (var _ of u)
        for (const b of [e, document]) {
          var m = (
            /** @type {Map<string, number>} */
            dr.get(b)
          ), T = (
            /** @type {number} */
            m.get(_)
          );
          --T == 0 ? (b.removeEventListener(_, Qr), m.delete(_), m.size === 0 && dr.delete(b)) : m.set(_, T);
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
            vn(s, c), c.append(ut()), this.#e.set(l, { effect: s, fragment: c });
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
    ), a = na();
    if (r && !this.#l.has(e) && !this.#e.has(e))
      if (a) {
        var l = document.createDocumentFragment(), s = ut();
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
  var n = new ya(t), a = r ? Ht : 0;
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
      l.f |= et;
      const s = document.createDocumentFragment();
      vn(l, s);
    } else
      qe(e[a], r);
  }
}
var Sn;
function ve(t, e, r, n, a, l = null) {
  var s = t, o = /* @__PURE__ */ new Map(), f = (e & In) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      t
    );
    s = c.appendChild(ut());
  }
  var v = null, u = /* @__PURE__ */ zn(() => {
    var Y = r();
    return (
      /** @type {V[]} */
      Ar(Y) ? Y : Y == null ? [] : Cr(Y)
    );
  }), h, _ = /* @__PURE__ */ new Map(), m = !0;
  function T(Y) {
    (q.effect.f & De) === 0 && (q.pending.delete(Y), q.fallback = v, tl(q, h, s, e, n), v !== null && (h.length === 0 ? (v.f & et) === 0 ? kr(v) : (v.f ^= et, nr(v, null, s)) : Ct(v, () => {
      v = null;
    })));
  }
  function b(Y) {
    q.pending.delete(Y);
  }
  var A = Rr(() => {
    h = /** @type {V[]} */
    i(u);
    for (var Y = h.length, D = /* @__PURE__ */ new Set(), y = (
      /** @type {Batch} */
      te
    ), j = na(), C = 0; C < Y; C += 1) {
      var g = h[C], L = n(g, C), B = m ? null : o.get(L);
      B ? (B.v && Yt(B.v, g), B.i && Yt(B.i, C), j && y.unskip_effect(B.e)) : (B = rl(
        o,
        m ? s : Sn ??= ut(),
        g,
        L,
        C,
        a,
        e,
        r
      ), m || (B.e.f |= et), o.set(L, B)), D.add(L);
    }
    if (Y === 0 && l && !v && (m ? v = Ve(() => l(s)) : (v = Ve(() => l(Sn ??= ut())), v.f |= et)), Y > D.size && ai(), !m)
      if (_.set(y, D), j) {
        for (const [P, w] of o)
          D.has(P) || y.skip_effect(w.e);
        y.oncommit(T), y.ondiscard(b);
      } else
        T(y);
    i(u);
  }), q = { effect: A, items: o, pending: _, outrogroups: null, fallback: v };
  m = !1;
}
function er(t) {
  for (; t !== null && (t.f & ze) === 0; )
    t = t.next;
  return t;
}
function tl(t, e, r, n, a) {
  var l = (n & Ya) !== 0, s = e.length, o = t.items, f = er(t.effect.first), c, v = null, u, h = [], _ = [], m, T, b, A;
  if (l)
    for (A = 0; A < s; A += 1)
      m = e[A], T = a(m, A), b = /** @type {EachItem} */
      o.get(T).e, (b.f & et) === 0 && (b.nodes?.a?.measure(), (u ??= /* @__PURE__ */ new Set()).add(b));
  for (A = 0; A < s; A += 1) {
    if (m = e[A], T = a(m, A), b = /** @type {EachItem} */
    o.get(T).e, t.outrogroups !== null)
      for (const B of t.outrogroups)
        B.pending.delete(b), B.done.delete(b);
    if ((b.f & Ie) !== 0 && (kr(b), l && (b.nodes?.a?.unfix(), (u ??= /* @__PURE__ */ new Set()).delete(b))), (b.f & et) !== 0)
      if (b.f ^= et, b === f)
        nr(b, null, r);
      else {
        var q = v ? v.next : f;
        b === t.effect.last && (t.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), mt(t, v, b), mt(t, b, q), nr(b, q, r), v = b, h = [], _ = [], f = er(v.next);
        continue;
      }
    if (b !== f) {
      if (c !== void 0 && c.has(b)) {
        if (h.length < _.length) {
          var Y = _[0], D;
          v = Y.prev;
          var y = h[0], j = h[h.length - 1];
          for (D = 0; D < h.length; D += 1)
            nr(h[D], Y, r);
          for (D = 0; D < _.length; D += 1)
            c.delete(_[D]);
          mt(t, y.prev, j.next), mt(t, v, y), mt(t, j, Y), f = Y, v = j, A -= 1, h = [], _ = [];
        } else
          c.delete(b), nr(b, f, r), mt(t, b.prev, b.next), mt(t, b, v === null ? t.effect.first : v.next), mt(t, v, b), v = b;
        continue;
      }
      for (h = [], _ = []; f !== null && f !== b; )
        (c ??= /* @__PURE__ */ new Set()).add(f), _.push(f), f = er(f.next);
      if (f === null)
        continue;
    }
    (b.f & et) === 0 && h.push(b), v = b, f = er(b.next);
  }
  if (t.outrogroups !== null) {
    for (const B of t.outrogroups)
      B.pending.size === 0 && ($r(t, Cr(B.done)), t.outrogroups?.delete(B));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (f !== null || c !== void 0) {
    var C = [];
    if (c !== void 0)
      for (b of c)
        (b.f & Ie) === 0 && C.push(b);
    for (; f !== null; )
      (f.f & Ie) === 0 && f !== t.fallback && C.push(f), f = er(f.next);
    var g = C.length;
    if (g > 0) {
      var L = (n & In) !== 0 && s === 0 ? r : null;
      if (l) {
        for (A = 0; A < g; A += 1)
          C[A].nodes?.a?.measure();
        for (A = 0; A < g; A += 1)
          C[A].nodes?.a?.fix();
      }
      el(t, C, L);
    }
  }
  l && st(() => {
    if (u !== void 0)
      for (b of u)
        b.nodes?.a?.apply();
  });
}
function rl(t, e, r, n, a, l, s, o) {
  var f = (s & Ha) !== 0 ? (s & za) === 0 ? /* @__PURE__ */ Si(r, !1, !1) : Lt(r) : null, c = (s & Va) !== 0 ? Lt(a) : null;
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
    for (var n = t.nodes.start, a = t.nodes.end, l = e && (e.f & et) === 0 ? (
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
function mt(t, e, r) {
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
      le
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
      if (c.nodes !== null && (oa(
        c.nodes.start,
        /** @type {TemplateNode} */
        c.nodes.end
      ), c.nodes = null), o !== "") {
        var v = n ? Qa : a ? $a : void 0, u = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          aa(n ? "svg" : a ? "math" : "template", v)
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
function Mt(t, e, r) {
  cn(() => {
    var n = Fe(() => e(t, r?.()) || {});
    if (r && n?.update) {
      var a = !1, l = (
        /** @type {any} */
        {}
      );
      Kt(() => {
        var s = r();
        Fi(s), a && jn(l, s) && (l = s, n.update(s));
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
        for (var l = a.length, s = 0; (s = n.indexOf(a, s)) >= 0; ) {
          var o = s + l;
          (s === 0 || An.includes(n[s - 1])) && (o === n.length || An.includes(n[o])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(o + 1) : s = o;
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
      var l = !1, s = 0, o = !1, f = [];
      n && f.push(...Object.keys(n).map(Fr)), a && f.push(...Object.keys(a).map(Fr));
      var c = 0, v = -1;
      const T = t.length;
      for (var u = 0; u < T; u++) {
        var h = t[u];
        if (o ? h === "/" && t[u - 1] === "*" && (o = !1) : l ? l === h && (l = !1) : h === "/" && t[u + 1] === "*" ? o = !0 : h === '"' || h === "'" ? l = h : h === "(" ? s++ : h === ")" && s--, !o && l === !1 && s === 0) {
          if (h === ":" && v === -1)
            v = u;
          else if (h === ";" || u === T - 1) {
            if (v !== -1) {
              var _ = Fr(t.substring(c, v).trim());
              if (!f.includes(_)) {
                h !== ";" && u++;
                var m = t.substring(c, u).trim();
                r += " " + m + ";";
              }
            }
            c = u + 1, v = -1;
          }
        }
      }
    }
    return n && (r += Cn(n)), a && (r += Cn(a, !0)), r = r.trim(), r === "" ? null : r;
  }
  return t == null ? null : String(t);
}
function Le(t, e, r, n, a, l) {
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
function Dt(t, e, r, n) {
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
function ol(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function sl(t, e) {
  var r = t.__defaultValue, n = t.multiple, a = n ? r ?? [] : null;
  if (!(n && !Ar(a))) {
    t.selectedIndex;
    for (var l of t.options) {
      var s = qt(l);
      ol(
        l,
        n ? (
          /** @type {any[]} */
          a.includes(s)
        ) : $n(s, r)
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
      n.selected = e.includes(qt(n));
    return;
  }
  for (n of t.options) {
    var a = qt(n);
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
    var s = l ? "[selected]" : ":checked", o;
    if (t.multiple)
      o = [].map.call(t.querySelectorAll(s), qt);
    else {
      var f = t.querySelector(s) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      o = f && qt(f);
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
      o !== null && (l = qt(o), r(l));
    }
    t.__value = l, a = !1;
  });
}
function qt(t) {
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
function W(t, e, r, n) {
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
    if (l = Br(t) ? qr(l) : l, r(l), te !== null && n.add(te), await Er(), l !== (l = e())) {
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
  Fe(e) == null && t.value && (r(Br(t) ? qr(t.value) : t.value), te !== null && n.add(te)), Kt(() => {
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
  Fe(e) == null && r(t.checked), Kt(() => {
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
    le
  );
  return cn(() => {
    var s, o;
    return Kt(() => {
      s = o, o = [], Fe(() => {
        Ur(r(...o), t) || (e(t, ...o), s && Ur(r(...s), t) && e(null, ...s));
      });
    }), () => {
      let f = l;
      for (; f !== a && f.parent !== null && f.parent.f & mr; )
        f = f.parent;
      const c = () => {
        o && Ur(r(...o), t) && e(null, ...o);
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
  ), v = () => s && a ? (c ??= /* @__PURE__ */ or(
    /** @type {() => V} */
    n
  ), i(c)) : (f && (f = !1, o = s ? Fe(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), o);
  let u;
  if (l) {
    var h = ft in t || Ba in t;
    u = Ft(t, e)?.set ?? (h && e in t ? (D) => t[e] = D : void 0);
  }
  var _, m = !1;
  l ? [_, m] = pl(() => (
    /** @type {V} */
    t[e]
  )) : _ = /** @type {V} */
  t[e], _ === void 0 && n !== void 0 && (_ = v(), u && (fi(), u(_)));
  var T;
  if (T = () => {
    var D = (
      /** @type {V} */
      t[e]
    );
    return D === void 0 ? v() : (f = !0, D);
  }, (r & Ga) === 0)
    return T;
  if (u) {
    var b = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(D, y) {
        return arguments.length > 0 ? ((!y || b || m) && u(y ? T() : D), D) : T();
      })
    );
  }
  var A = !1, q = ((r & Wa) !== 0 ? or : zn)(() => (A = !1, T()));
  l && i(q);
  var Y = (
    /** @type {Effect} */
    le
  );
  return (
    /** @type {() => V} */
    (function(D, y) {
      if (arguments.length > 0) {
        const j = y ? i(q) : l ? ge(D) : D;
        return k(q, j), A = !0, o !== void 0 && (o = j), D;
      }
      return ht && A || (Y.f & De) !== 0 ? q.v : i(q);
    })
  );
}
function xt(t) {
  Te === null && qn(), Bt(() => {
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
var bl = /* @__PURE__ */ S('<th><button type="button" class="column-label"> <span class="column-sort" aria-hidden="true"> </span></button><button type="button" class="column-resize"></button></th>'), yl = /* @__PURE__ */ S('<i role="img"></i>'), wl = /* @__PURE__ */ S('<button class="open-challenge"> </button>'), xl = /* @__PURE__ */ S("<td><!></td>"), kl = /* @__PURE__ */ S("<tr></tr>"), El = /* @__PURE__ */ S('<div class="message-list"><table><thead><tr></tr></thead><tbody id="challenge-rows"></tbody></table></div>');
function Sl(t, e) {
  Re(e, !0);
  let r = Wt(e, "hidden", 3, !1);
  const n = ["status", "subject", "category", "points"], a = {
    status: "Status",
    subject: "Subject",
    category: "Category",
    points: "Points"
  }, l = { status: 55, subject: 130, category: 90, points: 65 }, s = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
  let o = /* @__PURE__ */ H(ge([...n])), f = /* @__PURE__ */ H(null), c, v = /* @__PURE__ */ H(ge({
    key: Fe(() => e.defaultOrder) === "name" ? "subject" : "id",
    direction: 1
  })), u = /* @__PURE__ */ H(window.innerWidth <= 760), h = /* @__PURE__ */ de(() => {
    const C = (g) => ({
      status: Number(g.solved_by_me),
      subject: g.name,
      category: g.category,
      points: g.value,
      id: g.id
    })[i(v).key];
    return [...e.challenges].sort((g, L) => (["id", "points", "status"].includes(i(v).key) ? C(g) - C(L) : s.compare(C(g), C(L))) * i(v).direction || g.id - L.id);
  }), _ = /* @__PURE__ */ de(() => i(f) ? i(o).filter((C) => !i(u) || C !== "category").reduce((C, g) => C + i(f)[g], 0) : null);
  function m() {
    k(
      f,
      Object.fromEntries([...c.tHead.rows[0].cells].map((C) => [
        C.dataset.column,
        C.getBoundingClientRect().width || l[C.dataset.column]
      ])),
      !0
    );
  }
  async function T(C, g) {
    if (!g || g === C) return;
    i(f) || m();
    const L = new Map([...c.querySelectorAll("th,td")].map((w) => [w, w.getBoundingClientRect().left])), B = i(o).indexOf(g), P = i(o).filter((w) => w !== C);
    P.splice(B, 0, C), k(o, P, !0), await Er(), matchMedia("(prefers-reduced-motion: reduce)").matches || L.forEach((w, x) => {
      const R = w - x.getBoundingClientRect().left;
      R && x.animate(
        [
          { transform: `translateX(${R}px)` },
          { transform: "translateX(0)" }
        ],
        { duration: 180, easing: "ease-out" }
      );
    });
  }
  function b(C, { key: g, resize: L = !1 }) {
    const B = C.closest("th");
    let P, w, x = !1;
    function R() {
      w?.remove(), w = null, P = null, B.classList.remove("column-dragging"), c.querySelectorAll(".column-drop-before,.column-drop-after").forEach((J) => J.classList.remove("column-drop-before", "column-drop-after"));
    }
    function K(J) {
      J.button !== 0 || !J.isPrimary || (x = !1, m(), P = {
        x: J.clientX,
        y: J.clientY,
        offset: J.clientX - B.getBoundingClientRect().left,
        width: i(f)[g]
      }, C.setPointerCapture(J.pointerId));
    }
    function re(J) {
      if (P) {
        if (L) {
          i(f)[g] = Math.max(l[g], P.width + J.clientX - P.x);
          return;
        }
        if (!w && Math.hypot(J.clientX - P.x, J.clientY - P.y) > 5 && (x = !0, w = document.createElement("div"), w.className = "column-drag-ghost", w.textContent = a[g], w.setAttribute("aria-hidden", "true"), w.style.width = `${P.width}px`, document.body.append(w), B.classList.add("column-dragging")), w) {
          w.style.left = `${J.clientX - P.offset}px`, w.style.top = `${J.clientY + 12}px`, c.querySelectorAll(".column-drop-before,.column-drop-after").forEach((N) => N.classList.remove("column-drop-before", "column-drop-after"));
          const F = document.elementFromPoint(J.clientX, J.clientY)?.closest("th");
          F?.parentElement === B.parentElement && F !== B && F.classList.add(i(o).indexOf(g) < i(o).indexOf(F.dataset.column) ? "column-drop-after" : "column-drop-before");
        }
      }
    }
    function $(J) {
      if (!P) return;
      const F = document.elementFromPoint(J.clientX, J.clientY)?.closest("th"), N = !!w;
      R(), C.hasPointerCapture(J.pointerId) && C.releasePointerCapture(J.pointerId), !L && N && F?.parentElement === B.parentElement && T(g, F.dataset.column), C.focus();
    }
    function X(J) {
      if (!L) {
        if (x && J.detail !== 0) {
          x = !1;
          return;
        }
        k(
          v,
          {
            key: g,
            direction: i(v).key === g ? -i(v).direction : 1
          },
          !0
        );
      }
    }
    function Q(J) {
      if (!["ArrowLeft", "ArrowRight"].includes(J.key) || !L && !J.altKey) return;
      J.preventDefault();
      const F = J.key === "ArrowRight" ? 1 : -1;
      if (L)
        m(), i(f)[g] = Math.max(l[g], i(f)[g] + F * 10);
      else {
        const N = i(o).filter((Z) => !i(u) || Z !== "category");
        T(g, N[N.indexOf(g) + F]);
      }
    }
    const se = {
      pointerdown: K,
      pointermove: re,
      pointerup: $,
      pointercancel: R,
      lostpointercapture: R,
      click: X,
      keydown: Q
    };
    return Object.entries(se).forEach(([J, F]) => C.addEventListener(J, F)), {
      destroy() {
        R(), Object.entries(se).forEach(([J, F]) => C.removeEventListener(J, F));
      }
    };
  }
  var A = El();
  ct("resize", Jr, () => k(u, window.innerWidth <= 760));
  var q = E(A);
  let Y;
  var D = E(q), y = E(D);
  ve(y, 20, () => i(o), (C) => C, (C, g) => {
    var L = bl();
    let B;
    var P = E(L), w = E(P), x = d(w), R = U(x, !0);
    Mt(P, (re, $) => b?.(re, $), () => ({ key: g }));
    var K = d(P);
    Mt(K, (re, $) => b?.(re, $), () => ({ key: g, resize: !0 })), M(() => {
      W(L, "data-column", g), W(L, "aria-sort", i(v).key === g ? i(v).direction === 1 ? "ascending" : "descending" : "none"), B = Dt(L, "", B, { width: i(f) ? `${i(f)[g]}px` : void 0 }), W(P, "aria-label", `${a[g]} column. Click to sort. Drag or use Alt and arrow keys to move.`), O(w, a[g]), O(R, i(v).key === g ? i(v).direction === 1 ? "▲" : "▼" : ""), W(K, "aria-label", `Resize ${a[g]} column`);
    }), p(C, L);
  });
  var j = d(D);
  ve(j, 21, () => i(h), (C) => C.id, (C, g) => {
    var L = kl();
    ve(L, 20, () => i(o), (B) => B, (B, P) => {
      var w = xl(), x = E(w);
      {
        var R = (X) => {
          var Q = yl();
          M(() => {
            Le(Q, 1, `fas fa-envelope${i(g).solved_by_me ? "-open" : ""}`), W(Q, "aria-label", i(g).solved_by_me ? "Solved" : "Unsolved");
          }), p(X, Q);
        }, K = (X) => {
          var Q = wl(), se = U(Q, !0);
          M(() => {
            W(Q, "data-id", i(g).id), O(se, i(g).name);
          }), he("click", Q, () => e.onopen(i(g).id)), p(X, Q);
        }, re = (X) => {
          var Q = Qe();
          M(() => O(Q, i(g).category)), p(X, Q);
        }, $ = (X) => {
          var Q = Qe();
          M(() => O(Q, i(g).value)), p(X, Q);
        };
        V(x, (X) => {
          P === "status" ? X(R) : P === "subject" ? X(K, 1) : P === "category" ? X(re, 2) : X($, -1);
        });
      }
      M(() => W(w, "data-column", P)), p(B, w);
    }), M(() => Le(L, 1, al(i(g).solved_by_me ? "read" : "unread"))), p(C, L);
  }), Nt(q, (C) => c = C, () => c), M(() => {
    W(A, "hidden", r()), Y = Dt(q, "", Y, {
      width: i(_) ? `${i(_)}px` : void 0
    });
  }), p(t, A), Me();
}
at(["click"]);
var Al = /* @__PURE__ */ S('<details><summary> </summary> <div class="hint-content"><!></div></details>');
function Cl(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(!1), n = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(null), l = /* @__PURE__ */ H("");
  async function s(b) {
    if (k(r, b.currentTarget.open, !0), !(!i(r) || i(n) || i(a))) {
      k(n, !0), k(l, "");
      try {
        let A = await Se(`/hints/${e.hint.id}`);
        if (!A.content) {
          if (A.cost > 0 && !confirm(`Unlock this hint for ${A.cost} points?`)) {
            k(r, !1);
            return;
          }
          await Se("/unlocks", { target: e.hint.id, type: "hints" }), A = await Se(`/hints/${e.hint.id}`);
        }
        k(a, A, !0);
      } catch (A) {
        k(l, A.message, !0);
      } finally {
        k(n, !1);
      }
    }
  }
  var o = Al(), f = E(o), c = U(f), v = d(f, 2), u = E(v);
  {
    var h = (b) => {
      var A = Qe("Loading hint...");
      p(b, A);
    }, _ = (b) => {
      var A = Qe();
      M(() => O(A, i(l))), p(b, A);
    }, m = (b) => {
      var A = dt(), q = ue(A);
      yt(q, () => i(a).html), p(b, A);
    }, T = (b) => {
      var A = Qe();
      M(() => O(A, i(a).content)), p(b, A);
    };
    V(u, (b) => {
      i(n) ? b(h) : i(l) ? b(_, 1) : i(a)?.html ? b(m, 2) : i(a) && b(T, 3);
    });
  }
  M(() => {
    W(o, "data-hint", e.hint.id), O(c, `${(e.hint.title || "View hint") ?? ""}${e.hint.cost ? ` (${e.hint.cost} points)` : ""}`);
  }), ct("toggle", o, s), gl("open", "toggle", o, (b) => k(r, b), () => i(r)), p(t, o), Me();
}
var Tl = /* @__PURE__ */ S('<button type="button" class="solve-count"> </button>'), Ll = /* @__PURE__ */ S('<span class="challenge-solves">Total solves: <!></span>'), Rl = /* @__PURE__ */ S('<p role="status">Loading solves...</p>'), Ml = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button type="button">Retry</button></div>'), Nl = /* @__PURE__ */ S("<tr><td><a> </a></td><td><time> </time></td></tr>"), Ol = /* @__PURE__ */ S('<div class="table-responsive"><table class="table table-striped"><thead><tr><th>User</th><th>Solve time</th></tr></thead><tbody></tbody></table></div>'), Pl = /* @__PURE__ */ S("<p>No solves to display.</p>"), Il = /* @__PURE__ */ S('<!> <dialog class="express-dialog solves-dialog" aria-labelledby="solves-title"><h2 id="solves-title"> </h2> <!> <div class="dialog-actions"><button type="button" class="btn btn-primary">Close</button></div></dialog>', 1);
function Dl(t, e) {
  Re(e, !0);
  let r, n = /* @__PURE__ */ H(ge([])), a = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(""), s = 0;
  _n(() => s++);
  async function o() {
    const g = ++s;
    k(a, !0), k(l, ""), k(n, [], !0);
    try {
      const L = await Se(`/challenges/${e.challengeId}/solves`);
      g === s && k(n, L, !0);
    } catch (L) {
      g === s && k(l, L.message, !0);
    } finally {
      g === s && k(a, !1);
    }
  }
  function f() {
    r.showModal(), o();
  }
  function c(g) {
    let L = !1;
    function B(x) {
      const R = g.getBoundingClientRect();
      return x.target === g && (x.clientX < R.left || x.clientX > R.right || x.clientY < R.top || x.clientY > R.bottom);
    }
    function P(x) {
      L = B(x);
    }
    function w(x) {
      L && B(x) && g.close(), L = !1;
    }
    return g.addEventListener("pointerdown", P), g.addEventListener("click", w), {
      destroy() {
        g.removeEventListener("pointerdown", P), g.removeEventListener("click", w);
      }
    };
  }
  var v = Il(), u = ue(v);
  {
    var h = (g) => {
      var L = Ll(), B = d(E(L));
      {
        var P = (x) => {
          var R = Tl(), K = U(R, !0);
          M(() => {
            W(R, "aria-label", `View ${e.count} solves`), O(K, e.count);
          }), he("click", R, f), p(x, R);
        }, w = (x) => {
          var R = Qe("0");
          p(x, R);
        };
        V(B, (x) => {
          e.count > 0 ? x(P) : x(w, -1);
        });
      }
      p(g, L);
    }, _ = /* @__PURE__ */ de(() => Number.isInteger(e.count) && e.count >= 0);
    V(u, (g) => {
      i(_) && g(h);
    });
  }
  var m = d(u, 2), T = E(m), b = U(T), A = d(T, 2);
  {
    var q = (g) => {
      var L = Rl();
      p(g, L);
    }, Y = (g) => {
      var L = Ml(), B = E(L), P = d(B);
      M(() => O(B, `${i(l) ?? ""} `)), he("click", P, o), p(g, L);
    }, D = (g) => {
      var L = Ol(), B = E(L), P = d(E(B));
      ve(P, 21, () => i(n), be, (w, x) => {
        var R = Nl(), K = E(R), re = E(K), $ = U(re, !0), X = d(K), Q = E(X), se = U(Q, !0);
        M(
          (J) => {
            W(re, "href", i(x).account_url), O($, i(x).name), W(Q, "datetime", i(x).date), O(se, J);
          },
          [
            () => new Date(i(x).date).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "long" })
          ]
        ), p(w, R);
      }), p(g, L);
    }, y = (g) => {
      var L = Pl();
      p(g, L);
    };
    V(A, (g) => {
      i(a) ? g(q) : i(l) ? g(Y, 1) : i(n).length ? g(D, 2) : g(y, -1);
    });
  }
  var j = d(A, 2), C = U(j);
  Nt(m, (g) => r = g, () => r), Mt(m, (g) => c?.(g)), M(() => O(b, `Solves - ${e.challengeName ?? ""}`)), ct("close", m, () => s++), he("click", C, () => r.close()), p(t, v), Me();
}
at(["click"]);
var Fl = /* @__PURE__ */ S('<span class="challenge-tag"> </span>'), jl = /* @__PURE__ */ S('<div class="challenge-tags"><span>Tags:</span><!></div>'), Bl = /* @__PURE__ */ S("<div> </div>"), ql = /* @__PURE__ */ S("<p>Connection: <code> </code></p>"), Ul = /* @__PURE__ */ S('<a download=""><i class="fas fa-paperclip" aria-hidden="true"></i> </a>'), Hl = /* @__PURE__ */ S('<i aria-hidden="true"></i><strong> </strong>', 1), Vl = /* @__PURE__ */ S('<p>Attempts: <span id="attempts"> </span> </p>'), Yl = /* @__PURE__ */ S('<header class="message-header"><h2> </h2> <div class="challenge-metadata"><span> </span><span> </span><!></div> <!> <!></header> <div class="message-body"><!></div> <!> <div class="attachments"></div> <div id="hints"></div> <form class="reply"><label for="flag">Reply with flag</label> <input id="flag" name="submission" autocomplete="off" required=""/> <button type="submit">Send</button> <div id="submission-status" role="status" aria-atomic="true"><!></div> <!></form>', 1);
function zl(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(""), n = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(""), s = /* @__PURE__ */ H(ge(Fe(() => e.challenge.attempts))), o = /* @__PURE__ */ H(ge(Fe(() => e.challenge.solves))), f = !0, c = /* @__PURE__ */ de(() => i(a) || (e.challenge.solved_by_me ? "Correct flag received." : "")), v = /* @__PURE__ */ de(() => i(l) || (i(n) ? "pending" : e.challenge.solved_by_me ? "success" : ""));
  _n(() => {
    f = !1;
  });
  const u = /* @__PURE__ */ de(() => new DOMParser().parseFromString(e.challenge.view || "", "text/html").querySelector(".challenge-desc")?.innerHTML);
  function h(ee) {
    const I = ee.split("/").pop().split("?")[0];
    try {
      return decodeURIComponent(I);
    } catch {
      return I;
    }
  }
  async function _(ee) {
    if (ee.preventDefault(), !i(n)) {
      k(n, !0), k(a, "Sending..."), k(l, "");
      try {
        const I = await Se("/challenges/attempt", { challenge_id: e.challenge.id, submission: i(r) });
        if (!f) return;
        k(a, I.message, !0);
        const z = e.challenge.type === "delayed" && I.status === "incorrect" && /^Your submission has been taken(?:\.|$)/.test(I.message || "");
        if (k(l, ["correct", "already_solved"].includes(I.status) ? "success" : z ? "info" : "error", !0), I.status === "authentication_required" && (location.href = `${window.init.urlRoot}/login?next=${encodeURIComponent(location.pathname + location.hash)}`), I.status === "correct" && k(r, ""), e.challenge.max_attempts || ["correct", "already_solved"].includes(I.status)) {
          const ne = await Se(`/challenges/${e.challenge.id}`);
          if (!f) return;
          k(s, ne.attempts, !0), k(o, ne.solves, !0);
        }
        await e.onattempt(I);
      } catch (I) {
        f && (k(a, I.message, !0), k(l, "error"));
      } finally {
        k(n, !1);
      }
    }
  }
  var m = Yl(), T = ue(m), b = E(T), A = U(b, !0), q = d(b, 2), Y = E(q), D = U(Y), y = d(Y), j = U(y), C = d(y);
  Dl(C, {
    get challengeId() {
      return e.challenge.id;
    },
    get challengeName() {
      return e.challenge.name;
    },
    get count() {
      return i(o);
    }
  });
  var g = d(q, 2);
  {
    var L = (ee) => {
      var I = jl(), z = d(E(I));
      ve(z, 17, () => e.challenge.tags, be, (ne, ce) => {
        var _e = Fl(), we = U(_e, !0);
        M(() => O(we, typeof i(ce) == "string" ? i(ce) : i(ce).value)), p(ne, _e);
      }), p(ee, I);
    };
    V(g, (ee) => {
      e.challenge.tags?.length && ee(L);
    });
  }
  var B = d(g, 2);
  {
    var P = (ee) => {
      var I = Bl(), z = U(I);
      M(() => O(z, `From: ${e.challenge.attribution ?? ""}`)), p(ee, I);
    };
    V(B, (ee) => {
      e.challenge.attribution && ee(P);
    });
  }
  var w = d(T, 2), x = E(w);
  {
    var R = (ee) => {
      var I = dt(), z = ue(I);
      yt(z, () => i(u)), p(ee, I);
    }, K = (ee) => {
      var I = Qe();
      M(() => O(I, e.challenge.description)), p(ee, I);
    };
    V(x, (ee) => {
      i(u) ? ee(R) : ee(K, -1);
    });
  }
  var re = d(w, 2);
  {
    var $ = (ee) => {
      var I = ql(), z = d(E(I)), ne = U(z, !0);
      M(() => O(ne, e.challenge.connection_info)), p(ee, I);
    };
    V(re, (ee) => {
      e.challenge.connection_info && ee($);
    });
  }
  var X = d(re, 2);
  ve(X, 21, () => e.challenge.files || [], be, (ee, I) => {
    var z = Ul(), ne = d(E(z));
    M(
      (ce) => {
        W(z, "href", i(I)), O(ne, ` ${ce ?? ""}`);
      },
      [() => h(i(I))]
    ), p(ee, z);
  });
  var Q = d(X, 2);
  ve(Q, 21, () => e.challenge.hints || [], (ee) => ee.id, (ee, I) => {
    Cl(ee, {
      get hint() {
        return i(I);
      }
    });
  });
  var se = d(Q, 2), J = d(E(se), 2), F = d(J, 2), N = d(F, 2), Z = E(N);
  {
    var oe = (ee) => {
      var I = Hl(), z = ue(I), ne = d(z), ce = U(ne, !0);
      M(() => {
        Le(z, 1, `fas ${i(v) === "success" ? "fa-check-circle" : i(v) === "error" ? "fa-times-circle" : i(v) === "info" ? "fa-info-circle" : "fa-paper-plane"}`), O(ce, i(c));
      }), p(ee, I);
    };
    V(Z, (ee) => {
      i(c) && ee(oe);
    });
  }
  var Ae = d(N, 2);
  {
    var Ce = (ee) => {
      var I = Vl(), z = d(E(I)), ne = U(z, !0), ce = d(z);
      M(() => {
        O(ne, i(s)), O(ce, ` / ${e.challenge.max_attempts ?? ""}`);
      }), p(ee, I);
    };
    V(Ae, (ee) => {
      e.challenge.max_attempts && ee(Ce);
    });
  }
  M(() => {
    O(A, e.challenge.name), O(D, `Category: ${e.challenge.category ?? ""}`), O(j, `Points: ${e.challenge.value ?? ""}`), F.disabled = i(n), Le(N, 1, `submission-feedback ${i(v)}`), W(N, "hidden", !i(c));
  }), ct("submit", se, _), Sr(J, () => i(r), (ee) => k(r, ee)), p(t, m), Me();
}
var Wl = /* @__PURE__ */ S('<hr class="folder-divider"/>'), Gl = /* @__PURE__ */ S('<!> <button type="button"><i aria-hidden="true"></i> </button>', 1), Xl = /* @__PURE__ */ S('<div class="express-toolbar"><button id="all-challenges" type="button"><i class="fas fa-inbox" aria-hidden="true"></i> All Challenges</button> <button id="help-button" type="button"><i class="fas fa-question-circle" aria-hidden="true"></i> Help</button> <label for="search">Search</label><div class="express-search"><i class="fas fa-search" aria-hidden="true"></i><input id="search" type="search" placeholder="Find a challenge"/></div></div> <div class="express-address">Address <span id="address"> </span></div> <div class="express-workspace"><aside class="express-sidebar" aria-label="Challenge categories"><h2>Folders</h2> <div id="folders"></div> <p id="progress" aria-live="polite"> </p></aside> <section class="express-main" aria-label="Challenges"><h1 id="folder-heading"> </h1> <p id="board-status" role="status"> </p> <button id="retry" type="button">Try again</button> <!> <section id="reader" aria-label="Challenge message"><button id="back" type="button">Back to challenges</button> <div id="message"><!></div></section></section></div> <dialog id="help-dialog"><h2> </h2> <p>Open a challenge to read its message. Reply with the flag to solve it.</p> <p>Unsolved challenges appear as unread mail. Solved challenges appear as read mail.</p> <p>Drag column headers to reorder them, or their edges to resize. With a header focused, use Alt + Left/Right to reorder.</p> <form method="dialog"><button>Close</button></form></dialog>', 1);
function Jl(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(ge([])), n = /* @__PURE__ */ H("All Challenges"), a = /* @__PURE__ */ H("all"), l = /* @__PURE__ */ H(""), s = /* @__PURE__ */ H(null), o = /* @__PURE__ */ H(!1), f = /* @__PURE__ */ H(null), c = /* @__PURE__ */ H(""), v = /* @__PURE__ */ H(!0), u = /* @__PURE__ */ H(""), h = /* @__PURE__ */ H(""), _ = 0, m = 0, T, b, A = /* @__PURE__ */ de(() => i(r).filter((G) => !G.solved_by_me)), q = /* @__PURE__ */ de(() => [...new Set(i(r).map((G) => G.category))]), Y = /* @__PURE__ */ de(() => i(a) === "category" ? i(r).filter((G) => G.category === i(n)) : i(r)), D = /* @__PURE__ */ de(() => [
    {
      name: "All Challenges",
      type: "all",
      count: i(A).length
    },
    {
      name: "Unsolved Challenges",
      type: "unread",
      count: i(A).length
    },
    ...i(q).map((G) => ({
      name: G,
      type: "category",
      count: i(A).filter((ae) => ae.category === G).length
    }))
  ]), y = /* @__PURE__ */ de(() => i(r).filter((G) => (i(a) === "all" || (i(a) === "unread" ? !G.solved_by_me : G.category === i(n))) && `${G.name} ${G.category}`.toLowerCase().includes(i(l).toLowerCase().trim())));
  Bt(() => {
    const G = `${e.config.appName} - ${i(n)}`;
    document.title = G, document.getElementById("window-title").textContent = G;
  });
  async function j() {
    const G = ++m;
    k(v, !0), k(u, "");
    try {
      const ae = await Se("/challenges");
      G === m && k(r, ae.sort((fe, ye) => fe.id - ye.id), !0);
    } catch (ae) {
      G === m && k(u, ae.message, !0);
    } finally {
      G === m && k(v, !1);
    }
  }
  async function C(G = !0) {
    _++, k(o, !1), k(f, null), k(c, ""), history.replaceState(null, "", location.pathname + location.search), await Er(), G && document.querySelector(`.open-challenge[data-id="${i(s)}"]`)?.focus();
  }
  function g(G) {
    k(n, G.name, !0), k(a, G.type, !0), k(h, ""), C(!1);
  }
  async function L(G) {
    const ae = ++_;
    k(s, G, !0), k(o, !0), k(f, null), k(c, ""), k(h, "");
    try {
      const fe = await Se(`/challenges/${G}`);
      if (ae !== _) return;
      k(f, fe, !0), history.replaceState(null, "", `#challenge-${G}`), await Er(), b?.focus();
    } catch (fe) {
      ae === _ && k(c, fe.message, !0);
    }
  }
  async function B(G) {
    const ae = _;
    await j(), ae === _ && i(a) === "unread" && ["correct", "already_solved"].includes(G.status) && !i(u) && (await C(!1), k(h, "Challenge solved. Removed from Unsolved Challenges."), document.querySelector('#folders [data-view="unread"]')?.focus());
  }
  xt(() => {
    const G = location.hash.match(/-(\d+)$/);
    j().then(() => {
      G && _ === 0 && L(Number(G[1]));
    });
  }), _n(() => {
    _++, m++;
  });
  var P = Xl(), w = ue(P), x = E(w), R = d(x, 2), K = d(R, 3), re = d(E(K)), $ = d(w, 2), X = d(E($)), Q = U(X), se = d($, 2), J = E(se), F = d(E(J), 2);
  ve(F, 23, () => i(D), (G) => `${G.type}:${G.name}`, (G, ae, fe) => {
    var ye = Gl(), je = ue(ye);
    {
      var Ne = (pt) => {
        var Qt = Wl();
        p(pt, Qt);
      };
      V(je, (pt) => {
        i(fe) === 2 && pt(Ne);
      });
    }
    var pe = d(je, 2);
    let Oe;
    var lt = E(pe), gt = d(lt);
    M(() => {
      W(pe, "data-view", i(ae).type), W(pe, "data-folder", i(ae).name), Oe = Le(pe, 1, "", null, Oe, {
        active: i(a) === i(ae).type && i(n) === i(ae).name
      }), Le(lt, 1, `fas fa-${i(ae).type === "unread" ? "envelope" : "folder"}`), O(gt, `${i(ae).name ?? ""}${i(ae).type !== "all" && i(ae).count > 0 ? ` (${i(ae).count})` : ""}`);
    }), he("click", pe, () => g(i(ae))), p(G, ye);
  });
  var N = d(F, 2), Z = U(N), oe = d(J, 2), Ae = E(oe), Ce = U(Ae, !0), ee = d(Ae, 2), I = U(ee, !0), z = d(ee, 2), ne = d(z, 2);
  {
    let G = /* @__PURE__ */ de(() => e.config.themeSettings?.challenge_order);
    Sl(ne, {
      get challenges() {
        return i(y);
      },
      get defaultOrder() {
        return i(G);
      },
      onopen: L,
      get hidden() {
        return i(o);
      }
    });
  }
  var ce = d(ne, 2), _e = E(ce);
  Nt(_e, (G) => b = G, () => b);
  var we = d(_e, 2), it = E(we);
  {
    var kt = (G) => {
      var ae = dt(), fe = ue(ae);
      {
        var ye = (pe) => {
          var Oe = Qe();
          M(() => O(Oe, i(c))), p(pe, Oe);
        }, je = (pe) => {
          var Oe = dt(), lt = ue(Oe);
          $i(lt, () => i(f).id, (gt) => {
            zl(gt, {
              get challenge() {
                return i(f);
              },
              onattempt: B
            });
          }), p(pe, Oe);
        }, Ne = (pe) => {
          var Oe = Qe("Loading message...");
          p(pe, Oe);
        };
        V(fe, (pe) => {
          i(c) ? pe(ye) : i(f) ? pe(je, 1) : pe(Ne, -1);
        });
      }
      p(G, ae);
    };
    V(it, (G) => {
      i(o) && G(kt);
    });
  }
  var Ot = d(se, 2), Pt = E(Ot), Zt = U(Pt, !0);
  Nt(Ot, (G) => T = G, () => T), M(
    (G) => {
      O(Q, `Folders / ${i(n) ?? ""}`), O(Z, `${G ?? ""} of ${i(Y).length ?? ""} challenges solved`), O(Ce, i(n)), O(I, i(u) || (i(v) ? "Loading challenges..." : i(h) || (i(y).length ? "" : "No challenges found."))), W(z, "hidden", !i(u)), W(ce, "hidden", !i(o)), O(Zt, e.config.appName);
    },
    [
      () => i(Y).filter((G) => G.solved_by_me).length
    ]
  ), he("click", x, () => {
    k(l, ""), g(i(D)[0]);
  }), he("click", R, () => T.showModal()), he("input", re, () => {
    k(h, ""), C(!1);
  }), Sr(re, () => i(l), (G) => k(l, G)), he("click", z, j), he("click", _e, () => C()), p(t, P), Me();
}
at(["click", "input"]);
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
    const _ = window.visualViewport, m = _?.offsetLeft || 0, T = _?.offsetTop || 0, b = _?.width || document.documentElement.clientWidth, A = Math.max(0, (_?.height || innerHeight) - (t.classList.contains("express-window") ? 34 : 0));
    t.style.maxWidth = `${b}px`, t.style.maxHeight = `${A}px`;
    const q = t.getBoundingClientRect();
    t.style.left = `${Math.max(m, Math.min(u, m + b - q.width))}px`, t.style.top = `${Math.max(T, Math.min(h, T + A - q.height))}px`;
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
    const _ = t.getBoundingClientRect(), m = u.shiftKey ? 1 : 10;
    s(_.left + h[0] * m, _.top + h[1] * m);
  });
  const c = () => {
    const u = t.getBoundingClientRect();
    s(u.left, u.top);
  };
  l(window, "resize", c), l(window.visualViewport, "resize", c), l(window.visualViewport, "scroll", c);
  const v = new ResizeObserver(c);
  return v.observe(t), { destroy() {
    v.disconnect(), a.forEach((u) => u());
  } };
}
var Kl = /* @__PURE__ */ S('<div role="alert"><span><!></span><button type="button" class="btn-close" aria-label="Close"></button></div>');
function Aa(t, e) {
  Re(e, !0);
  let r = Wt(e, "errors", 19, () => []), n = Wt(e, "infos", 19, () => []), a = /* @__PURE__ */ H(ge([]));
  var l = dt(), s = ue(l);
  ve(
    s,
    17,
    () => [
      ...n().map((o) => ({ text: o, type: "info" })),
      ...r().map((o) => ({ text: o, type: "danger" }))
    ],
    be,
    (o, f, c) => {
      var v = dt(), u = ue(v);
      {
        var h = (m) => {
          var T = Kl(), b = E(T), A = E(b);
          {
            var q = (y) => {
              var j = dt(), C = ue(j);
              yt(C, () => i(f).text.html), p(y, j);
            }, Y = (y) => {
              var j = Qe();
              M(() => O(j, i(f).text.text ?? i(f).text)), p(y, j);
            };
            V(A, (y) => {
              i(f).text.html ? y(q) : y(Y, -1);
            });
          }
          var D = d(b);
          M(() => Le(T, 1, `alert alert-${i(f).type ?? ""} alert-dismissible`)), he("click", D, () => k(a, [...i(a), c], !0)), p(m, T);
        }, _ = /* @__PURE__ */ de(() => !i(a).includes(c));
        V(u, (m) => {
          i(_) && m(h);
        });
      }
      p(o, v);
    }
  ), p(t, l), Me();
}
at(["click"]);
var Zl = /* @__PURE__ */ S('<span class="text-danger" aria-hidden="true">*</span>'), Ql = /* @__PURE__ */ S("<option> </option>"), $l = /* @__PURE__ */ S('<select class="form-select"></select>'), eo = /* @__PURE__ */ S('<input type="checkbox" class="form-check-input"/>'), to = /* @__PURE__ */ S('<textarea class="form-control"></textarea>'), ro = /* @__PURE__ */ S('<input class="form-control"/>'), no = /* @__PURE__ */ S('<small class="form-text text-muted"> </small>'), ao = /* @__PURE__ */ S('<div><label class="form-label"> <!></label> <!> <!></div>');
function gn(t, e) {
  Re(e, !0);
  let r = Wt(e, "compact", 3, !1), n = /* @__PURE__ */ H(ge(Fe(() => e.field.type === "SelectField" ? String(e.field.value ?? "") : e.field.value ?? ""))), a = /* @__PURE__ */ H(ge(Fe(() => e.field.value === !0 || e.field.value === "True" || e.field.value === "true")));
  const l = {
    PasswordField: "password",
    EmailField: "email",
    URLField: "url",
    DateField: "date",
    IntegerField: "number",
    HiddenField: "hidden"
  }, s = /* @__PURE__ */ de(() => e.field.name === "name" ? "username" : e.field.name === "email" ? "email" : e.field.name === "confirm" ? "current-password" : e.field.type === "PasswordField" ? r() ? "current-password" : "new-password" : void 0);
  var o = ao();
  let f;
  var c = E(o), v = E(c), u = d(v);
  {
    var h = (D) => {
      var y = Zl();
      p(D, y);
    };
    V(u, (D) => {
      e.field.required && D(h);
    });
  }
  var _ = d(c, 2);
  {
    var m = (D) => {
      var y = $l();
      ve(y, 21, () => e.field.choices, be, (j, C) => {
        var g = /* @__PURE__ */ de(() => Da(i(C), 2));
        let L = () => i(g)[0], B = () => i(g)[1];
        var P = Ql(), w = U(P, !0), x = {};
        M(
          (R) => {
            O(w, B()), x !== (x = R) && (P.value = (P.__value = x) ?? "");
          },
          [() => String(L())]
        ), p(j, P);
      }), xa(y), M(() => {
        W(y, "id", e.field.id), W(y, "name", e.field.name), y.required = e.field.required;
      }), fl(y, () => i(n), (j) => k(n, j)), p(D, y);
    }, T = (D) => {
      var y = eo();
      y.value = y.__value = "y", M(() => {
        W(y, "id", e.field.id), W(y, "name", e.field.name), y.required = e.field.required;
      }), _l(y, () => i(a), (j) => k(a, j)), p(D, y);
    }, b = (D) => {
      var y = to();
      M(() => {
        W(y, "id", e.field.id), W(y, "name", e.field.name), y.required = e.field.required;
      }), Sr(y, () => i(n), (j) => k(n, j)), p(D, y);
    }, A = (D) => {
      var y = ro();
      M(() => {
        W(y, "id", e.field.id), W(y, "name", e.field.name), W(y, "type", l[e.field.type] || "text"), W(y, "autocomplete", i(s)), y.required = e.field.required;
      }), Sr(y, () => i(n), (j) => k(n, j)), p(D, y);
    };
    V(_, (D) => {
      e.field.type === "SelectField" ? D(m) : e.field.type === "BooleanField" ? D(T, 1) : e.field.type === "TextAreaField" ? D(b, 2) : D(A, -1);
    });
  }
  var q = d(_, 2);
  {
    var Y = (D) => {
      var y = no(), j = U(y, !0);
      M(() => O(j, e.field.description)), p(D, y);
    };
    V(q, (D) => {
      e.field.description && !r() && D(Y);
    });
  }
  M(() => {
    f = Le(o, 1, "", null, f, { "logon-field": r(), "mb-3": !r() }), W(c, "for", e.field.id), O(v, e.field.label);
  }), p(t, o), Me();
}
var io = /* @__PURE__ */ S("<a>Forgot your password?</a>"), lo = /* @__PURE__ */ S('<!> <form method="post" accept-charset="utf-8"><!> <input type="hidden" name="nonce"/> <div><!> <button id="_submit" name="_submit" type="submit" class="btn btn-primary xp-default"> </button></div></form>', 1), oo = /* @__PURE__ */ S('<img class="logon-icon" alt=""/>'), so = /* @__PURE__ */ Yi('<svg class="logon-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="9" width="50" height="36" rx="2" fill="#eef4ff" stroke="#153e80" stroke-width="3"></rect><path d="M12 14h40v25H12z" fill="#245bb4"></path><path d="M26 46v7h12v-7M18 55h28" fill="none" stroke="#153e80" stroke-width="3"></path><rect x="24" y="23" width="16" height="12" rx="1" fill="#ffe4a0"></rect><path d="M28 23v-3a4 4 0 0 1 8 0v3" fill="none" stroke="#ffe4a0" stroke-width="3"></path></svg>'), fo = /* @__PURE__ */ S('<a class="btn logon-oauth">Log on with Major League Cyber</a>'), uo = /* @__PURE__ */ S('<footer class="logon-footer">Need an account? <a>Register</a></footer>'), co = /* @__PURE__ */ S('<div class="login-stage"><section class="xp-logon" aria-labelledby="logon-title"><header class="express-title logon-drag-handle" tabindex="0" role="button" aria-label="Move login window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><i class="fas fa-key" aria-hidden="true"></i> Log On</header> <div class="logon-banner"><!> <div><h1 id="logon-title"> </h1><p> </p></div></div> <div class="logon-content"><p>Enter your user name and password to continue.</p><!> <!></div> <!></section></div>'), vo = /* @__PURE__ */ S("<p> </p>"), ho = /* @__PURE__ */ S("<p> </p> <p>Please click the link in that email to confirm your account.</p><p>If the email does not arrive, check your spam folder or contact an administrator to manually verify your account.</p>", 1), _o = /* @__PURE__ */ S('<a class="btn btn-secondary mb-3">Log on with Major League Cyber</a>'), go = /* @__PURE__ */ S('<a class="btn btn-secondary mt-3">Change Email Address</a>'), po = /* @__PURE__ */ S('<p class="text-muted mt-3">By registering, you agree to the <a target="_blank" rel="noopener">privacy policy</a> and <a target="_blank" rel="noopener">terms of service</a>.</p>'), mo = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1> </h1></div></div> <div class="container"><div class="auth-page"><!> <!> <!> <!> <!> <!></div></div>', 1);
function bo(t, e) {
  Re(e, !0);
  const r = (v) => {
    var u = lo(), h = ue(u);
    Aa(h, {
      get errors() {
        return e.site.errors;
      },
      get infos() {
        return e.site.infos;
      }
    });
    var _ = d(h, 2);
    let m;
    var T = E(_);
    ve(T, 17, () => e.page.fields || [], be, (C, g) => {
      {
        let L = /* @__PURE__ */ de(() => e.page.kind === "login");
        gn(C, {
          get field() {
            return i(g);
          },
          get compact() {
            return i(L);
          }
        });
      }
    });
    var b = d(T, 2), A = d(b, 2);
    let q;
    var Y = E(A);
    {
      var D = (C) => {
        var g = io();
        M(() => W(g, "href", `${i(a)}/reset_password`)), p(C, g);
      };
      V(Y, (C) => {
        e.page.kind === "login" && C(D);
      });
    }
    var y = d(Y, 2), j = U(y, !0);
    M(() => {
      m = Le(_, 1, "", null, m, { "logon-form": e.page.kind === "login" }), ka(b, e.config.csrfNonce), q = Le(A, 1, "", null, q, {
        "logon-actions": e.page.kind === "login",
        "auth-actions": e.page.kind !== "login"
      }), y.disabled = i(n), O(j, i(n) ? "Please wait..." : e.page.kind === "login" ? "Log On" : e.page.kind === "confirm" ? "Send Confirmation Email" : "Submit");
    }), ct("submit", _, () => k(n, !0)), p(v, u);
  };
  let n = /* @__PURE__ */ H(!1);
  const a = /* @__PURE__ */ de(() => e.config.urlRoot), l = {
    login: "Log On",
    register: "Register",
    reset: "Reset Password",
    confirm: "Confirm"
  };
  xt(() => {
    e.page.kind === "login" && document.getElementById("name")?.focus();
    const v = () => k(n, !1);
    return window.addEventListener("pageshow", v), () => window.removeEventListener("pageshow", v);
  });
  var s = dt(), o = ue(s);
  {
    var f = (v) => {
      var u = co(), h = E(u), _ = d(E(h), 2), m = E(_);
      {
        var T = (w) => {
          var x = oo();
          M(() => W(x, "src", e.site.logo)), p(w, x);
        }, b = (w) => {
          var x = so();
          p(w, x);
        };
        V(m, (w) => {
          e.site.logo ? w(T) : w(b, -1);
        });
      }
      var A = d(m, 2), q = E(A), Y = U(q, !0), D = d(q), y = U(D), j = d(_, 2), C = d(E(j));
      r(C);
      var g = d(C, 2);
      {
        var L = (w) => {
          var x = fo();
          M(() => W(x, "href", e.site.oauth)), p(w, x);
        };
        V(g, (w) => {
          e.site.oauth && w(L);
        });
      }
      var B = d(j, 2);
      {
        var P = (w) => {
          var x = uo(), R = d(E(x));
          M(() => W(R, "href", `${i(a)}/register`)), p(w, x);
        };
        V(B, (w) => {
          e.site.registration && w(P);
        });
      }
      Mt(h, (w) => Sa?.(w)), M(() => {
        O(Y, e.site.appName), O(y, `Log on to ${e.site.eventName ?? ""}`);
      }), p(v, u);
    }, c = (v) => {
      var u = mo(), h = ue(u), _ = E(h), m = E(_), T = U(m, !0), b = d(h, 2), A = E(b), q = E(A);
      {
        var Y = (x) => {
          var R = vo(), K = U(R, !0);
          M(() => O(K, e.page.mode === "set" ? "You can now reset the password for your account and log in. Please enter a new password below." : "Please provide the email address associated with your account below.")), p(x, R);
        };
        V(q, (x) => {
          e.page.kind === "reset" && x(Y);
        });
      }
      var D = d(q, 2);
      {
        var y = (x) => {
          var R = ho(), K = ue(R), re = U(K, !0);
          M(() => O(re, e.page.initial ? "To send a confirmation email to your email address, please click the button below." : "We've sent a confirmation email to your email address.")), p(x, R);
        };
        V(D, (x) => {
          e.page.kind === "confirm" && x(y);
        });
      }
      var j = d(D, 2);
      {
        var C = (x) => {
          var R = _o();
          M(() => W(R, "href", e.site.oauth)), p(x, R);
        };
        V(j, (x) => {
          e.page.kind === "register" && e.site.oauth && x(C);
        });
      }
      var g = d(j, 2);
      r(g);
      var L = d(g, 2);
      {
        var B = (x) => {
          var R = go();
          M(() => W(R, "href", `${i(a)}/settings`)), p(x, R);
        };
        V(L, (x) => {
          e.page.kind === "confirm" && x(B);
        });
      }
      var P = d(L, 2);
      {
        var w = (x) => {
          var R = po(), K = d(E(R)), re = d(K, 2);
          M(() => {
            W(K, "href", e.page.privacy), W(re, "href", e.page.terms);
          }), p(x, R);
        };
        V(P, (x) => {
          e.page.kind === "register" && e.page.showTerms && x(w);
        });
      }
      M(() => O(T, l[e.page.kind])), p(v, u);
    };
    V(o, (v) => {
      e.page.kind === "login" ? v(f) : v(c, -1);
    });
  }
  p(t, s), Me();
}
var yo = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> </div>'), wo = /* @__PURE__ */ S('<div class="alert alert-success" role="status"> </div>'), xo = /* @__PURE__ */ S('<tr><td> </td><td> </td><td> </td><td><button class="btn"><i class="fas fa-times" aria-hidden="true"></i></button></td></tr>'), ko = /* @__PURE__ */ S('<div class="table-responsive"><table class="table"><thead><tr><th>Created</th><th>Expiration</th><th>Description</th><th>Delete</th></tr></thead><tbody></tbody></table></div>'), Eo = /* @__PURE__ */ S("<p>No active tokens.</p>"), So = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Settings</h1></div></div> <div class="container settings-layout"><div class="nav flex-column nav-pills" aria-label="Settings sections"><button id="settings-profile-tab">Profile</button> <button id="settings-tokens-tab">Access Tokens</button></div> <div><!> <!> <section id="profile"><form method="post"><!> <button type="submit" id="_submit" class="btn btn-primary"> </button></form></section> <section id="tokens"><form><div class="mb-3"><label for="expiration" class="form-label">Expiration</label><input id="expiration" name="expiration" type="date" class="form-control"/></div> <div class="mb-3"><label for="description" class="form-label">Usage Description</label><textarea id="description" name="description" class="form-control" rows="3"></textarea></div> <button type="submit" class="btn btn-primary">Generate</button></form> <h2 class="h4 mt-4">Active Tokens</h2> <!></section></div></div> <dialog class="express-dialog"><h2>API Key Generated</h2><p>Please copy your API key. It will not be shown again!</p> <input class="form-control" aria-label="API key" readonly=""/> <div class="dialog-actions"><button class="btn">Copy</button><button class="btn btn-primary">Got it!</button></div></dialog>', 1);
function Ao(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H("profile"), n = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(""), s = /* @__PURE__ */ H(ge(Fe(() => e.page.tokens))), o = /* @__PURE__ */ H(""), f, c;
  function v(I) {
    const z = Object.fromEntries(new FormData(I));
    for (const ne of I.querySelectorAll('input[type="checkbox"]')) z[ne.name] = ne.checked;
    return z;
  }
  function u(I) {
    c = v(I);
  }
  async function h(I) {
    if (I.preventDefault(), i(n)) return;
    k(n, !0), k(a, ""), k(l, "");
    const z = I.currentTarget, ne = v(z), ce = {};
    for (const [_e, we] of Object.entries(ne)) {
      if (_e === "_submit" || we === c[_e]) continue;
      const it = /^fields\[(\d+)\]$/.exec(_e);
      it ? (ce.fields ||= []).push({ field_id: Number(it[1]), value: we }) : ce[_e] = we;
    }
    try {
      await Se("/users/me", ce, { method: "PATCH" }), k(l, "Your profile has been updated.");
      for (const _e of z.querySelectorAll('input[type="password"]')) _e.value = "";
      c = v(z);
    } catch (_e) {
      k(a, _e.message, !0);
    } finally {
      k(n, !1);
    }
  }
  async function _(I) {
    if (I.preventDefault(), i(n)) return;
    k(n, !0), k(a, ""), k(l, "");
    const z = v(I.currentTarget);
    z.expiration || delete z.expiration;
    try {
      const ne = await Se("/tokens", z);
      k(o, ne.value, !0);
      const { value: ce, ..._e } = ne;
      k(s, [...i(s), _e], !0), f.showModal();
    } catch (ne) {
      k(a, ne.message, !0);
    } finally {
      k(n, !1);
    }
  }
  async function m(I) {
    if (!(i(n) || !confirm("Are you sure you want to delete this token?"))) {
      k(n, !0), k(a, ""), k(l, "");
      try {
        await Se(`/tokens/${I}`, void 0, { method: "DELETE" }), k(s, i(s).filter((z) => z.id !== I), !0);
      } catch (z) {
        k(a, z.message, !0);
      } finally {
        k(n, !1);
      }
    }
  }
  async function T() {
    try {
      await navigator.clipboard.writeText(i(o)), k(l, "API key copied.");
    } catch {
      k(l, "Select and copy the API key below.");
    }
  }
  function b(I) {
    k(r, I, !0), k(a, ""), k(l, "");
  }
  var A = So(), q = d(ue(A), 2), Y = E(q), D = E(Y);
  let y;
  var j = d(D, 2);
  let C;
  var g = d(Y, 2), L = E(g);
  {
    var B = (I) => {
      var z = yo(), ne = U(z, !0);
      M(() => O(ne, i(a))), p(I, z);
    };
    V(L, (I) => {
      i(a) && I(B);
    });
  }
  var P = d(L, 2);
  {
    var w = (I) => {
      var z = wo(), ne = U(z, !0);
      M(() => O(ne, i(l))), p(I, z);
    };
    V(P, (I) => {
      i(l) && I(w);
    });
  }
  var x = d(P, 2), R = E(x), K = E(R);
  ve(K, 17, () => e.page.fields, be, (I, z) => {
    gn(I, {
      get field() {
        return i(z);
      }
    });
  });
  var re = d(K, 2), $ = U(re, !0);
  Mt(R, (I) => u?.(I));
  var X = d(x, 2), Q = E(X), se = d(E(Q), 4), J = d(Q, 4);
  {
    var F = (I) => {
      var z = ko(), ne = E(z), ce = d(E(ne));
      ve(ce, 21, () => i(s), be, (_e, we) => {
        var it = xo(), kt = E(it), Ot = U(kt, !0), Pt = d(kt), Zt = U(Pt, !0), G = d(Pt), ae = U(G, !0), fe = d(G), ye = U(fe);
        M(
          (je, Ne) => {
            O(Ot, je), O(Zt, Ne), O(ae, i(we).description), W(ye, "aria-label", `Delete token ${i(we).description || i(we).id}`), ye.disabled = i(n);
          },
          [
            () => i(we).created ? new Date(i(we).created).toLocaleDateString() : "",
            () => i(we).expiration ? new Date(i(we).expiration).toLocaleDateString() : "Never"
          ]
        ), he("click", ye, () => m(i(we).id)), p(_e, it);
      }), p(I, z);
    }, N = (I) => {
      var z = Eo();
      p(I, z);
    };
    V(J, (I) => {
      i(s).length ? I(F) : I(N, -1);
    });
  }
  var Z = d(q, 2), oe = d(E(Z), 3), Ae = d(oe, 2), Ce = E(Ae), ee = d(Ce);
  Nt(Z, (I) => f = I, () => f), M(() => {
    y = Le(D, 1, "nav-link", null, y, { active: i(r) === "profile" }), W(D, "aria-pressed", i(r) === "profile"), C = Le(j, 1, "nav-link", null, C, { active: i(r) === "tokens" }), W(j, "aria-pressed", i(r) === "tokens"), W(x, "hidden", i(r) !== "profile"), re.disabled = i(n), O($, i(n) ? "Saving..." : "Submit"), W(X, "hidden", i(r) !== "tokens"), se.disabled = i(n), ka(oe, i(o));
  }), he("click", D, () => b("profile")), he("click", j, () => b("tokens")), ct("submit", R, h), ct("submit", Q, _), ct("close", Z, () => k(o, "")), he("click", oe, (I) => I.currentTarget.select()), he("click", Ce, T), he("click", ee, () => f.close()), p(t, A), Me();
}
at(["click"]);
var Co = /* @__PURE__ */ S("<a> </a>"), To = /* @__PURE__ */ S('<span class="badge bg-secondary ms-2"> </span>'), Lo = /* @__PURE__ */ S('<a class="badge bg-primary ms-2">Official</a>'), Ro = /* @__PURE__ */ S('<a target="_blank" rel="noopener"><i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Mo = /* @__PURE__ */ S("<tr><td><!> <!> <!></td><td><!></td><td> </td><td> </td></tr>"), No = /* @__PURE__ */ S('<p role="status">No users match your search.</p>'), Oo = /* @__PURE__ */ S("<option> </option>"), Po = /* @__PURE__ */ S('<label class="pagination-control">Page <select class="page-select form-select"></select> </label>'), Io = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Users</h1></div></div> <div class="container"><form method="get" class="user-search"><!> <button type="submit" class="btn btn-primary"><i class="fas fa-search" aria-hidden="true"></i> Search</button></form> <div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>User</th><th>Website</th><th>Affiliation</th><th>Country</th></tr></thead><tbody></tbody></table></div> <!> <!></div>', 1);
function Do(t, e) {
  Re(e, !0);
  function r(m) {
    const T = new URL(location.href);
    T.searchParams.set("page", m.currentTarget.value), location.assign(T);
  }
  var n = Io(), a = d(ue(n), 2), l = E(a), s = E(l);
  ve(s, 17, () => e.page.fields, be, (m, T) => {
    gn(m, {
      get field() {
        return i(T);
      }
    });
  });
  var o = d(l, 2), f = E(o), c = d(E(f));
  ve(c, 21, () => e.page.users, be, (m, T) => {
    var b = Mo(), A = E(b), q = E(A);
    {
      var Y = ($) => {
        var X = Co(), Q = U(X, !0);
        M(() => {
          W(X, "href", `${e.config.urlRoot}/users/${i(T).id}`), O(Q, i(T).name);
        }), p($, X);
      }, D = ($) => {
        var X = Qe();
        M(() => O(X, i(T).name)), p($, X);
      };
      V(q, ($) => {
        e.page.scoresVisible ? $(Y) : $(D, -1);
      });
    }
    var y = d(q, 2);
    {
      var j = ($) => {
        var X = To(), Q = U(X, !0);
        M(() => O(Q, i(T).bracket)), p($, X);
      };
      V(y, ($) => {
        i(T).bracket && $(j);
      });
    }
    var C = d(y, 2);
    {
      var g = ($) => {
        var X = Lo();
        M((Q) => W(X, "href", Q), [
          () => `https://majorleaguecyber.org/u/${encodeURIComponent(i(T).name)}`
        ]), p($, X);
      };
      V(C, ($) => {
        i(T).official && $(g);
      });
    }
    var L = d(A), B = E(L);
    {
      var P = ($) => {
        var X = Ro();
        M(() => {
          W(X, "href", i(T).website), W(X, "aria-label", `Website for ${i(T).name}`);
        }), p($, X);
      }, w = /* @__PURE__ */ de(() => /^https?:\/\//i.test(i(T).website || ""));
      V(B, ($) => {
        i(w) && $(P);
      });
    }
    var x = d(L), R = U(x, !0), K = d(x), re = U(K, !0);
    M(() => {
      O(R, i(T).affiliation || ""), O(re, i(T).country);
    }), p(m, b);
  });
  var v = d(o, 2);
  {
    var u = (m) => {
      var T = No();
      p(m, T);
    };
    V(v, (m) => {
      e.page.users.length || m(u);
    });
  }
  var h = d(v, 2);
  {
    var _ = (m) => {
      var T = Po(), b = d(E(T));
      ve(b, 21, () => Array.from({ length: e.page.pages }, (Y, D) => D + 1), be, (Y, D) => {
        var y = Oo(), j = U(y, !0), C = {};
        M(() => {
          O(j, i(D)), C !== (C = i(D)) && (y.value = (y.__value = C) ?? "");
        }), p(Y, y);
      });
      var A;
      xa(b);
      var q = d(b);
      M(() => {
        A !== (A = e.page.page) && (b.value = (b.__value = A) ?? "", hn(b, A)), O(q, ` of ${e.page.pages ?? ""} (${e.page.total ?? ""} users)`);
      }), he("change", b, r), p(m, T);
    };
    V(h, (m) => {
      e.page.pages > 1 && m(_);
    });
  }
  p(t, n), Me();
}
at(["change"]);
const en = ["#194c9f", "#8a2459", "#25632a", "#8a480c", "#623e9d", "#006473", "#a12a20", "#4c5872", "#615600", "#763c36"];
var Fo = /* @__PURE__ */ S('<p role="status"> </p>'), jo = /* @__PURE__ */ S('<!> <div id="score-graph" class="score-chart" role="img"></div>', 1);
function Ca(t, e) {
  Re(e, !0);
  let r = Wt(e, "title", 3, "Score over Time"), n = Wt(e, "series", 19, () => []), a, l = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H("");
  xt(() => {
    let u = !0;
    const h = new ResizeObserver(() => i(l)?.resize());
    return import("./chart-ClLr2WTg.js").then(({ init: _ }) => {
      u && (k(l, _(a)), h.observe(a));
    }).catch(() => {
      u && k(s, "The chart could not load. The scores are available in the table below.");
    }), () => {
      u = !1, h.disconnect(), i(l)?.dispose();
    };
  }), Bt(() => {
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
  var o = jo(), f = ue(o);
  {
    var c = (u) => {
      var h = Fo(), _ = U(h, !0);
      M(() => O(_, i(s))), p(u, h);
    };
    V(f, (u) => {
      i(s) && u(c);
    });
  }
  var v = d(f, 2);
  Nt(v, (u) => a = u, () => a), M(() => W(v, "aria-label", `${r()}. Scores are also listed in the table below.`)), p(t, o), Me();
}
var Bo = /* @__PURE__ */ S('<a class="badge bg-primary">Official</a>'), qo = /* @__PURE__ */ S('<span class="badge bg-primary"> </span>'), Uo = /* @__PURE__ */ S("<p> </p>"), Ho = /* @__PURE__ */ S("<h2> <small>place</small></h2>"), Vo = /* @__PURE__ */ S("<h2> <small>points</small></h2>"), Yo = /* @__PURE__ */ S('<a target="_blank" rel="noopener">Website <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), zo = /* @__PURE__ */ S('<p role="status">Loading profile...</p>'), Wo = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), Go = /* @__PURE__ */ S('<div class="progress-bar"></div>'), Xo = /* @__PURE__ */ S('<span><span class="legend-swatch"></span> </span>'), Jo = /* @__PURE__ */ S('<div><i aria-hidden="true"></i><h4> </h4><p> </p><p> </p><strong> </strong></div>'), Ko = /* @__PURE__ */ S('<section aria-labelledby="awards-heading"><h3 id="awards-heading">Awards</h3><div class="profile-awards"></div></section>'), Zo = /* @__PURE__ */ S("<tr><td><a> </a></td><td> </td><td> </td><td><time> </time></td></tr>"), Qo = /* @__PURE__ */ S('<section class="profile-graphs" aria-label="Score breakdowns"><div class="profile-breakdowns"><div><div class="progress" aria-hidden="true"><div class="progress-bar"></div><div class="progress-bar"></div></div><p> </p></div> <div><div class="progress" aria-hidden="true"></div><div class="category-legend"></div></div></div> <!></section> <!> <h3>Solves</h3><div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Challenge</th><th>Category</th><th>Value</th><th>Time</th></tr></thead><tbody></tbody></table></div>', 1), $o = /* @__PURE__ */ S('<h3 class="text-muted text-center">No solves yet</h3>'), es = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1> </h1> <div class="profile-badges"><!> <!></div> <!> <!> <!> <!></div></div> <div class="container"><!> <!> <!></div>', 1);
function ts(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(ge([])), n = /* @__PURE__ */ H(ge([])), a = /* @__PURE__ */ H(0), l = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H(!0), o = /* @__PURE__ */ H(""), f = 0;
  const c = /* @__PURE__ */ de(() => i(r).length + i(a) ? 100 * i(r).length / (i(r).length + i(a)) : 0), v = /* @__PURE__ */ de(() => {
    const F = /* @__PURE__ */ new Map();
    return i(r).forEach((N) => F.set(N.challenge.category, (F.get(N.challenge.category) || 0) + 1)), [...F].map(([N, Z], oe) => ({
      name: N,
      count: Z,
      percent: 100 * Z / i(r).length,
      color: en[oe % en.length]
    }));
  }), u = /* @__PURE__ */ de(() => {
    let F = 0;
    return [
      {
        name: e.page.name,
        data: [...i(r), ...i(n)].sort((N, Z) => new Date(N.date) - new Date(Z.date)).map((N) => [
          new Date(N.date).getTime(),
          F += N.challenge?.value ?? N.value
        ])
      }
    ];
  });
  async function h() {
    const F = ++f;
    k(o, "");
    try {
      const N = e.page.private ? "me" : e.page.id, [Z, oe, Ae, Ce] = await Promise.all([
        Se(`/users/${N}/solves`),
        Se(`/users/${N}/fails`, void 0, { full: !0 }),
        Se(`/users/${N}/awards`),
        e.page.private ? Se("/users/me") : Promise.resolve(e.page)
      ]);
      if (F !== f) return;
      k(r, Z, !0), k(a, oe.meta.count, !0), k(n, Ae, !0), k(l, Ce.score, !0);
    } catch (N) {
      F === f && k(o, N.message, !0);
    } finally {
      F === f && k(s, !1);
    }
  }
  xt(() => (h(), () => f++));
  var _ = es(), m = ue(_), T = E(m), b = E(T), A = U(b, !0), q = d(b, 2), Y = E(q);
  {
    var D = (F) => {
      var N = Bo();
      M((Z) => W(N, "href", Z), [
        () => `https://majorleaguecyber.org/u/${encodeURIComponent(e.page.name)}`
      ]), p(F, N);
    };
    V(Y, (F) => {
      e.page.official && F(D);
    });
  }
  var y = d(Y, 2);
  ve(
    y,
    17,
    () => [
      e.page.affiliation,
      e.page.country,
      e.page.bracket
    ].filter(Boolean),
    be,
    (F, N) => {
      var Z = qo(), oe = U(Z, !0);
      M(() => O(oe, i(N))), p(F, Z);
    }
  );
  var j = d(q, 2);
  ve(j, 17, () => e.page.fields, be, (F, N) => {
    var Z = Uo(), oe = U(Z);
    M(() => O(oe, `${i(N).name ?? ""}: ${i(N).value ?? ""}`)), p(F, Z);
  });
  var C = d(j, 2);
  {
    var g = (F) => {
      var N = Ho(), Z = E(N);
      M(() => O(Z, `${e.page.place ?? ""} `)), p(F, N);
    };
    V(C, (F) => {
      e.page.place && F(g);
    });
  }
  var L = d(C, 2);
  {
    var B = (F) => {
      var N = Vo(), Z = E(N);
      M(() => O(Z, `${i(l) ?? ""} `)), p(F, N);
    };
    V(L, (F) => {
      i(l) !== null && F(B);
    });
  }
  var P = d(L, 2);
  {
    var w = (F) => {
      var N = Yo();
      M(() => W(N, "href", e.page.website)), p(F, N);
    }, x = /* @__PURE__ */ de(() => /^https?:\/\//i.test(e.page.website || ""));
    V(P, (F) => {
      i(x) && F(w);
    });
  }
  var R = d(m, 2), K = E(R);
  {
    var re = (F) => {
      var N = zo();
      p(F, N);
    };
    V(K, (F) => {
      i(s) && F(re);
    });
  }
  var $ = d(K, 2);
  {
    var X = (F) => {
      var N = Wo(), Z = E(N), oe = d(Z);
      M(() => O(Z, `${i(o) ?? ""} `)), he("click", oe, h), p(F, N);
    };
    V($, (F) => {
      i(o) && F(X);
    });
  }
  var Q = d($, 2);
  {
    var se = (F) => {
      var N = Qo(), Z = ue(N), oe = E(Z), Ae = E(oe), Ce = E(Ae), ee = E(Ce), I = d(ee), z = d(Ce), ne = U(z), ce = d(Ae, 2), _e = E(ce);
      ve(_e, 21, () => i(v), be, (ae, fe) => {
        var ye = Go();
        M(() => Dt(ye, `width:${i(fe).percent}%;background:${i(fe).color}`)), p(ae, ye);
      });
      var we = d(_e);
      ve(we, 21, () => i(v), be, (ae, fe) => {
        var ye = Xo(), je = E(ye), Ne = d(je);
        M(
          (pe) => {
            Dt(je, `background:${i(fe).color}`), O(Ne, `${i(fe).name ?? ""} (${pe ?? ""}%)`);
          },
          [() => i(fe).percent.toFixed(2)]
        ), p(ae, ye);
      });
      var it = d(oe, 2);
      Ca(it, {
        get series() {
          return i(u);
        }
      });
      var kt = d(Z, 2);
      {
        var Ot = (ae) => {
          var fe = Ko(), ye = d(E(fe));
          ve(ye, 21, () => i(n), be, (je, Ne) => {
            var pe = Jo(), Oe = E(pe), lt = d(Oe), gt = U(lt, !0), pt = d(lt), Qt = U(pt, !0), $t = d(pt), Mr = U($t, !0), Nr = d($t), Ra = U(Nr);
            M(() => {
              Le(Oe, 1, `award-icon award-${i(Ne).icon} fa-2x`), O(gt, i(Ne).name), O(Qt, i(Ne).category || ""), O(Mr, i(Ne).description || ""), O(Ra, `${i(Ne).value ?? ""} points`);
            }), p(je, pe);
          }), p(ae, fe);
        };
        V(kt, (ae) => {
          i(n).length && ae(Ot);
        });
      }
      var Pt = d(kt, 3), Zt = E(Pt), G = d(E(Zt));
      ve(G, 21, () => i(r), be, (ae, fe) => {
        var ye = Zo(), je = E(ye), Ne = E(je), pe = U(Ne, !0), Oe = d(je), lt = U(Oe, !0), gt = d(Oe), pt = U(gt, !0), Qt = d(gt), $t = E(Qt), Mr = U($t, !0);
        M(
          (Nr) => {
            W(Ne, "href", `${e.config.urlRoot}/challenges#challenge-${i(fe).challenge.id}`), O(pe, i(fe).challenge.name), O(lt, i(fe).challenge.category), O(pt, i(fe).challenge.value), W($t, "datetime", i(fe).date), O(Mr, Nr);
          },
          [() => new Date(i(fe).date).toLocaleString()]
        ), p(ae, ye);
      }), M(
        (ae, fe) => {
          Dt(ee, `width:${i(c)}%;background:#25632a`), Dt(I, `width:${100 - i(c)}%;background:#a12a20`), O(ne, `Solves (${ae ?? ""}%) / Fails (${fe ?? ""}%)`);
        },
        [
          () => i(c).toFixed(2),
          () => (100 - i(c)).toFixed(2)
        ]
      ), p(F, N);
    }, J = (F) => {
      var N = $o();
      p(F, N);
    };
    V(Q, (F) => {
      i(r).length || i(n).length ? F(se) : !i(s) && !i(o) && F(J, 1);
    });
  }
  M(() => O(A, e.page.name)), p(t, _), Me();
}
at(["click"]);
var rs = /* @__PURE__ */ S('<p role="status">Loading scoreboard...</p>'), ns = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), as = /* @__PURE__ */ S("<button> </button>"), is = /* @__PURE__ */ S('<nav class="nav nav-pills mb-3" aria-label="Competition bracket"><button>All</button><!></nav>'), ls = /* @__PURE__ */ S('<span class="badge bg-secondary ms-2"> </span>'), os = /* @__PURE__ */ S('<tr><th scope="row"></th><td><a> </a><!></td><td> </td></tr>'), ss = /* @__PURE__ */ S('<h3 class="text-center text-muted">Scoreboard is empty</h3>'), fs = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Scoreboard</h1></div></div> <div class="container"><!> <!> <!> <!> <div id="scoreboard" class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Place</th><th>User</th><th>Score</th></tr></thead><tbody></tbody></table></div> <!></div>', 1);
function us(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(ge([])), n = /* @__PURE__ */ H(ge([])), a = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(ge({})), s = /* @__PURE__ */ H(!0), o = /* @__PURE__ */ H(""), f = 0;
  const c = /* @__PURE__ */ de(() => i(r).filter((w) => !i(a) || String(w.bracket_id) === i(a))), v = /* @__PURE__ */ de(() => Object.values(i(l)).map((w) => {
    let x = 0;
    return {
      name: w.name,
      data: [...w.solves].sort((R, K) => new Date(R.date) - new Date(K.date)).map((R) => [new Date(R.date).getTime(), x += R.value])
    };
  }));
  async function u() {
    const w = ++f;
    k(o, "");
    try {
      const [x, R, K] = await Promise.all([
        Se("/scoreboard"),
        Se("/brackets?type=users"),
        Se(`/scoreboard/top/10${i(a) ? `?bracket_id=${encodeURIComponent(i(a))}` : ""}`)
      ]);
      if (w !== f) return;
      k(r, x, !0), k(n, R, !0), k(l, K, !0);
    } catch (x) {
      w === f && k(o, x.message, !0);
    } finally {
      w === f && k(s, !1);
    }
  }
  function h(w) {
    k(a, w, !0), u();
  }
  xt(() => {
    u();
    const w = setInterval(u, 3e5);
    return () => {
      clearInterval(w), f++;
    };
  });
  var _ = fs(), m = d(ue(_), 2), T = E(m);
  {
    var b = (w) => {
      var x = rs();
      p(w, x);
    };
    V(T, (w) => {
      i(s) && w(b);
    });
  }
  var A = d(T, 2);
  {
    var q = (w) => {
      var x = ns(), R = E(x), K = d(R);
      M(() => O(R, `${i(o) ?? ""} `)), he("click", K, u), p(w, x);
    };
    V(A, (w) => {
      i(o) && w(q);
    });
  }
  var Y = d(A, 2);
  {
    var D = (w) => {
      var x = is(), R = E(x);
      let K;
      var re = d(R);
      ve(re, 17, () => i(n), be, ($, X) => {
        var Q = as();
        let se;
        var J = U(Q, !0);
        M(
          (F) => {
            se = Le(Q, 1, "nav-link", null, se, { active: F }), O(J, i(X).name);
          },
          [() => i(a) === String(i(X).id)]
        ), he("click", Q, () => h(String(i(X).id))), p($, Q);
      }), M(() => K = Le(R, 1, "nav-link", null, K, { active: !i(a) })), he("click", R, () => h("")), p(w, x);
    };
    V(Y, (w) => {
      i(n).length && w(D);
    });
  }
  var y = d(Y, 2);
  {
    var j = (w) => {
      Ca(w, {
        title: "Top 10 Users",
        get series() {
          return i(v);
        }
      });
    };
    V(y, (w) => {
      i(v).length && w(j);
    });
  }
  var C = d(y, 2), g = E(C), L = d(E(g));
  ve(L, 21, () => i(c), be, (w, x, R) => {
    var K = os(), re = E(K);
    re.textContent = R + 1;
    var $ = d(re), X = E($), Q = U(X, !0), se = d(X);
    {
      var J = (Z) => {
        var oe = ls(), Ae = U(oe, !0);
        M(() => O(Ae, i(x).bracket_name)), p(Z, oe);
      };
      V(se, (Z) => {
        i(x).bracket_name && Z(J);
      });
    }
    var F = d($), N = U(F, !0);
    M(() => {
      W(X, "href", i(x).account_url), O(Q, i(x).name), O(N, i(x).score);
    }), p(w, K);
  });
  var B = d(C, 2);
  {
    var P = (w) => {
      var x = ss();
      p(w, x);
    };
    V(B, (w) => {
      !i(s) && !i(o) && !i(c).length && w(P);
    });
  }
  p(t, _), Me();
}
at(["click"]);
var cs = /* @__PURE__ */ S('<div class="container custom-page"></div>');
function ds(t, e) {
  Re(e, !0);
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
  var n = cs();
  yt(n, () => e.html, !0), Mt(n, (a) => r?.(a)), p(t, n), Me();
}
var vs = /* @__PURE__ */ S('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), hs = /* @__PURE__ */ S('<h2 class="text-center">There are no notifications yet</h2>'), _s = /* @__PURE__ */ S('<article class="card bg-body-tertiary mb-4"><div class="card-body"><h3> </h3><div></div><time class="text-muted"> </time></div></article>'), gs = /* @__PURE__ */ S('<div class="jumbotron"><div class="container"><h1>Notifications</h1></div></div> <div class="container"><!> <!> <!></div>', 1), ps = /* @__PURE__ */ S('<aside class="express-toast" role="status"><h2> </h2><div></div><button class="btn">Dismiss</button></aside>'), ms = /* @__PURE__ */ S('<h2 id="notification-title"> </h2><div></div><div class="dialog-actions"><a class="btn">All notifications</a><button class="btn btn-primary">Close</button></div>', 1), bs = /* @__PURE__ */ S('<!> <!> <dialog class="express-dialog" aria-labelledby="notification-title"><!></dialog>', 1);
function ys(t, e) {
  Re(e, !0);
  const r = (y) => (!y.user_id || y.user_id === e.config.userId) && (!y.team_id || y.team_id === e.config.teamId);
  let n = /* @__PURE__ */ H(ge(Fe(() => (e.page.notifications || []).filter(r)))), a = /* @__PURE__ */ H(ge([])), l = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H(""), o;
  const f = /* @__PURE__ */ de(() => `challenge-express-notifications:${e.config.urlRoot}:${e.config.userId || "guest"}`);
  function c() {
    try {
      localStorage.setItem(i(
        f
        /* Reading notifications still works when storage is unavailable. */
      ), JSON.stringify(i(a)));
    } catch {
    }
  }
  function v(y) {
    k(a, [.../* @__PURE__ */ new Set([...i(a), ...y])], !0), c();
  }
  function u() {
    i(l) && v([i(l).id]), k(l, null);
  }
  async function h() {
    try {
      k(n, (await Se("/notifications")).filter(r), !0), k(s, ""), e.page.kind === "notifications" && v(i(n).map((y) => y.id));
    } catch (y) {
      e.page.kind === "notifications" && k(s, y.message, !0);
    }
  }
  Bt(() => {
    e.onunread(i(n).filter((y) => !i(a).includes(y.id)).length);
  }), Bt(() => {
    i(l) && i(l).type !== "toast" && o && !o.open && o.showModal();
  }), Bt(() => {
    if (i(l)?.type !== "toast") return;
    const y = setTimeout(() => k(l, null), 8e3);
    return () => clearTimeout(y);
  }), xt(() => {
    try {
      const g = JSON.parse(localStorage.getItem(i(f)) || "[]");
      Array.isArray(g) && k(a, g, !0);
    } catch {
      k(a, [], !0);
    }
    h();
    const y = (g) => {
      if (g.key === i(
        f
        /* Ignore malformed external storage. */
      ))
        try {
          const L = JSON.parse(g.newValue || "[]");
          Array.isArray(L) && k(
            a,
            L,
            /* Ignore malformed external storage. */
            !0
          );
        } catch {
        }
    };
    window.addEventListener("storage", y);
    const j = e.config.userId ? new EventSource(`${e.config.urlRoot}/events`) : null;
    let C = !1;
    return j?.addEventListener("open", () => {
      C && h(), C = !0;
    }), j?.addEventListener("notification", (g) => {
      let L;
      try {
        L = JSON.parse(g.data);
      } catch {
        return;
      }
      if (!r(L)) return;
      const B = !i(n).some((P) => P.id === L.id);
      k(
        n,
        [
          ...i(n).filter((P) => P.id !== L.id),
          L
        ],
        !0
      ), e.page.kind === "notifications" ? v([L.id]) : B && !i(a).includes(L.id) && L.type !== "background" && k(l, L, !0);
    }), () => {
      j?.close(), window.removeEventListener("storage", y);
    };
  });
  var _ = bs(), m = ue(_);
  {
    var T = (y) => {
      var j = gs(), C = d(ue(j), 2), g = E(C);
      {
        var L = (x) => {
          var R = vs(), K = E(R), re = d(K);
          M(() => O(K, `${i(s) ?? ""} `)), he("click", re, h), p(x, R);
        };
        V(g, (x) => {
          i(s) && x(L);
        });
      }
      var B = d(g, 2);
      {
        var P = (x) => {
          var R = hs();
          p(x, R);
        };
        V(B, (x) => {
          !i(n).length && !i(s) && x(P);
        });
      }
      var w = d(B, 2);
      ve(w, 17, () => [...i(n)].sort((x, R) => R.id - x.id), be, (x, R) => {
        var K = _s(), re = E(K), $ = E(re), X = U($, !0), Q = d($);
        yt(Q, () => i(R).html, !0);
        var se = d(Q), J = U(se, !0);
        M(
          (F) => {
            O(X, i(R).title), W(se, "datetime", i(R).date), O(J, F);
          },
          [() => new Date(i(R).date).toLocaleString()]
        ), p(x, K);
      }), p(y, j);
    };
    V(m, (y) => {
      e.page.kind === "notifications" && y(T);
    });
  }
  var b = d(m, 2);
  {
    var A = (y) => {
      var j = ps(), C = E(j), g = U(C, !0), L = d(C);
      yt(L, () => i(l).html || "", !0);
      var B = d(L);
      M(() => O(g, i(l).title)), he("click", B, u), p(y, j);
    };
    V(b, (y) => {
      i(l)?.type === "toast" && y(A);
    });
  }
  var q = d(b, 2), Y = E(q);
  {
    var D = (y) => {
      var j = ms(), C = ue(j), g = U(C, !0), L = d(C);
      yt(L, () => i(l).html || "", !0);
      var B = d(L), P = E(B), w = d(P);
      M(() => {
        O(g, i(l).title), W(P, "href", `${e.config.urlRoot}/notifications`);
      }), he("click", w, () => o.close()), p(y, j);
    };
    V(Y, (y) => {
      i(l) && i(l).type !== "toast" && y(D);
    });
  }
  Nt(q, (y) => o = y, () => o), ct("close", q, u), p(t, _), Me();
}
at(["click"]);
var ws = /* @__PURE__ */ S('<img class="express-brand-icon" alt="" draggable="false"/>'), xs = /* @__PURE__ */ S('<i class="fas fa-envelope" aria-hidden="true"></i>'), ks = /* @__PURE__ */ S('<i class="fas fa-bell" aria-hidden="true"></i>'), Es = /* @__PURE__ */ S('<span class="badge bg-danger"> </span>'), Ss = /* @__PURE__ */ S('<li class="nav-item"><a class="nav-link"><!> <!></a></li>'), As = /* @__PURE__ */ S("<ul></ul>"), Cs = /* @__PURE__ */ S('<nav class="navbar navbar-expand-md" aria-label="Main navigation"><div class="container"><button class="navbar-toggler" type="button" aria-controls="base-navbars" aria-label="Toggle navigation"><i class="fas fa-bars" aria-hidden="true"></i> Menu</button> <div id="base-navbars"></div></div></nav>'), Ts = /* @__PURE__ */ S('<div id="challenge-app"><!></div>'), Ls = /* @__PURE__ */ S("<p> </p>"), Rs = /* @__PURE__ */ S('<div class="container error-page"><h1> </h1><h2> </h2><!><a>Back to challenges</a></div>'), Ms = /* @__PURE__ */ S("<!> <!>", 1), Ns = /* @__PURE__ */ S('<div class="express-window"><header class="express-title window-drag-handle" tabindex="0" role="button" aria-label="Move application window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><!> <span id="window-title"> </span></header> <!> <main id="main-content"><!> <!></main> <footer class="express-status"> <span>Powered by <a href="https://ctfd.io">CTFd</a></span></footer></div> <div class="express-taskbar"><a class="express-start">Start</a><span> </span></div>', 1);
function Os(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(!1), n = /* @__PURE__ */ H(0);
  const a = /* @__PURE__ */ de(() => e.page.kind === "login"), l = /* @__PURE__ */ de(() => ["login", "register", "reset", "confirm"].includes(e.page.kind));
  xt(() => (document.body.classList.toggle("login-desktop", i(a)), () => document.body.classList.remove("login-desktop")));
  var s = Ns(), o = ue(s), f = E(o), c = E(f);
  {
    var v = (P) => {
      var w = ws();
      M(() => W(w, "src", e.site.logo)), p(P, w);
    }, u = (P) => {
      var w = xs();
      p(P, w);
    };
    V(c, (P) => {
      e.site.logo ? P(v) : P(u, -1);
    });
  }
  var h = d(c, 2), _ = U(h, !0), m = d(f, 2);
  {
    var T = (P) => {
      var w = Cs(), x = E(w), R = E(x), K = d(R, 2);
      let re;
      ve(K, 21, () => [e.site.primary, e.site.account], be, ($, X, Q) => {
        var se = As();
        Le(se, 1, "navbar-nav", null, {}, { "me-auto": Q === 0, "ms-md-auto": Q === 1 }), ve(se, 21, () => i(X), be, (J, F) => {
          var N = Ss(), Z = E(N), oe = E(Z);
          {
            var Ae = (z) => {
              var ne = ks();
              p(z, ne);
            };
            V(oe, (z) => {
              i(F).label === "Notifications" && z(Ae);
            });
          }
          var Ce = d(oe), ee = d(Ce);
          {
            var I = (z) => {
              var ne = Es(), ce = U(ne, !0);
              M(() => O(ce, i(n))), p(z, ne);
            };
            V(ee, (z) => {
              i(F).label === "Notifications" && i(n) > 0 && z(I);
            });
          }
          M(() => {
            W(Z, "href", i(F).href), W(Z, "target", i(F).target || void 0), W(Z, "rel", i(F).target === "_blank" ? "noopener" : void 0), O(Ce, `${i(F).label ?? ""} `);
          }), p(J, N);
        }), p($, se);
      }), M(() => {
        W(R, "aria-expanded", i(r)), re = Le(K, 1, "collapse navbar-collapse", null, re, { show: i(r) });
      }), he("click", R, () => k(r, !i(r))), p(P, w);
    };
    V(m, (P) => {
      i(a) || P(T);
    });
  }
  var b = d(m, 2), A = E(b);
  {
    var q = (P) => {
      bo(P, {
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
    }, Y = (P) => {
      var w = Ms(), x = ue(w);
      Aa(x, {
        get errors() {
          return e.site.errors;
        },
        get infos() {
          return e.site.infos;
        }
      });
      var R = d(x, 2);
      {
        var K = (N) => {
          var Z = Ts(), oe = E(Z);
          Jl(oe, {
            get config() {
              return e.config;
            }
          }), p(N, Z);
        }, re = (N) => {
          Ao(N, {
            get page() {
              return e.page;
            }
          });
        }, $ = (N) => {
          Do(N, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, X = (N) => {
          ts(N, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, Q = (N) => {
          us(N, {});
        }, se = (N) => {
          ds(N, {
            get html() {
              return e.page.html;
            }
          });
        }, J = (N) => {
          var Z = Rs(), oe = E(Z), Ae = U(oe, !0), Ce = d(oe), ee = U(Ce), I = d(Ce);
          {
            var z = (ce) => {
              var _e = Ls(), we = U(_e, !0);
              M(() => O(we, e.page.detail)), p(ce, _e);
            };
            V(I, (ce) => {
              e.page.detail && ce(z);
            });
          }
          var ne = d(I);
          M(() => {
            O(Ae, e.page.heading), O(ee, `${e.page.code ?? ""} ${e.page.message ?? ""}`), W(ne, "href", `${e.config.urlRoot}/challenges`);
          }), p(N, Z);
        }, F = (N) => {
          var Z = dt(), oe = ue(Z);
          yt(oe, () => e.fallback), p(N, Z);
        };
        V(R, (N) => {
          e.page.kind === "challenges" ? N(K) : e.page.kind === "settings" ? N(re, 1) : e.page.kind === "users" ? N($, 2) : e.page.kind === "profile" ? N(X, 3) : e.page.kind === "scoreboard" ? N(Q, 4) : e.page.kind === "page" ? N(se, 5) : e.page.kind === "error" ? N(J, 6) : e.page.kind !== "notifications" && N(F, 7);
        });
      }
      p(P, w);
    };
    V(A, (P) => {
      i(l) ? P(q) : P(Y, -1);
    });
  }
  var D = d(A, 2);
  ys(D, {
    get page() {
      return e.page;
    },
    get config() {
      return e.config;
    },
    onunread: (P) => k(n, P, !0)
  });
  var y = d(b, 2), j = E(y);
  Mt(o, (P, w) => Sa?.(P, w), () => !i(a));
  var C = d(o, 2), g = E(C), L = d(g), B = U(L, !0);
  M(() => {
    O(_, e.site.title), O(j, e.site.eventName), W(g, "href", `${e.config.urlRoot}/challenges`), O(B, e.site.appName);
  }), p(t, s), Me();
}
at(["click"]);
const Ta = document.getElementById("site-app"), La = JSON.parse(document.getElementById("page-data").textContent);
document.body.classList.toggle("login-desktop", La.kind === "login");
Ta.replaceChildren();
Ji(Os, { target: Ta, props: {
  config: window.init,
  site: JSON.parse(document.getElementById("site-data").textContent),
  page: La,
  fallback: document.getElementById("fallback-content").innerHTML
} });
