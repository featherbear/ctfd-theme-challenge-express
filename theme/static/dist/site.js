var Ar = Array.isArray, Mn = Array.prototype.indexOf, pr = Array.prototype.includes, Cr = Array.from, Ta = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, La = Object.getOwnPropertyDescriptors, Nn = Object.prototype, On = Array.prototype, ta = Object.getPrototypeOf, ga = Object.isExtensible;
const Pn = () => {
};
function In(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ra() {
  var t, e, r = new Promise((a, n) => {
    t = a, e = n;
  });
  return { promise: r, resolve: t, reject: e };
}
function Dn(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const r = [];
  for (const a of t)
    if (r.push(a), r.length === e) break;
  return r;
}
const Pe = 2, Bt = 4, Tr = 8, Ma = 1 << 24, Ge = 16, Ye = 32, vt = 64, Hr = 128, ra = 256, Ze = 512, Ee = 1024, xe = 2048, ze = 4096, Ie = 8192, De = 16384, Gt = 32768, mr = 1 << 25, Ut = 65536, br = 1 << 17, Fn = 1 << 18, Xt = 1 << 19, jn = 1 << 20, et = 1 << 25, yr = 1 << 21, Ft = 1 << 22, bt = 1 << 23, ft = /* @__PURE__ */ Symbol("$state"), Na = /* @__PURE__ */ Symbol("component"), qn = /* @__PURE__ */ Symbol("legacy props"), Bn = /* @__PURE__ */ Symbol(""), Oa = /* @__PURE__ */ Symbol("attributes"), Vr = /* @__PURE__ */ Symbol("class"), zr = /* @__PURE__ */ Symbol("style"), Yr = /* @__PURE__ */ Symbol("text"), hr = /* @__PURE__ */ Symbol("form reset"), fr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Un = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Hn = 1, Vn = 2, Pa = 4, zn = 8, Yn = 16, Wn = 1, Gn = 4, Xn = 8, Jn = 16, Kn = 1, Zn = 2, ke = /* @__PURE__ */ Symbol("uninitialized"), Ia = "http://www.w3.org/1999/xhtml", Qn = "http://www.w3.org/2000/svg", $n = "http://www.w3.org/1998/Math/MathML";
function ei() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ti() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ri() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Da(t) {
  return t === this.v;
}
function Fa(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function ja(t) {
  return !Fa(t, this.v);
}
function qa(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ai() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ni(t, e, r) {
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
function Ht(t) {
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
    for (var a of r)
      nn(a);
  }
  return e.i = !0, Te = e.p, aa(t);
}
function aa(t = {}) {
  return Ta(t, Na, { value: !0 }), t;
}
function Ba() {
  return !0;
}
let St = [];
function Ua() {
  var t = St;
  St = [], In(t);
}
function st(t) {
  if (St.length === 0 && !nr) {
    var e = St;
    queueMicrotask(() => {
      e === St && Ua();
    });
  }
  St.push(t);
}
function hi() {
  for (; St.length > 0; )
    Ua();
}
const _i = -7169;
function me(t, e) {
  t.f = t.f & _i | e;
}
function na(t) {
  (t.f & Ze) !== 0 || t.deps === null ? me(t, Ee) : me(t, ze);
}
function Ha(t, e, r) {
  (t.f & xe) !== 0 ? e.add(t) : (t.f & ze) !== 0 && r.add(t), me(t, Ee);
}
let pa = !1;
function gi() {
  pa || (pa = !0, document.addEventListener(
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
  We(null), at(null);
  try {
    return t();
  } finally {
    We(e), at(r);
  }
}
function ia(t, e, r, a = r) {
  t.addEventListener(e, () => Jt(r));
  const n = (
    /** @type {any} */
    t[hr]
  );
  n ? t[hr] = () => {
    n(), a(!0);
  } : t[hr] = () => a(!0), gi();
}
function pi(t, e, r, a) {
  const n = or;
  var l = t.filter((_) => !_.settled), s = e.map(n);
  if (r.length === 0 && l.length === 0) {
    a(s);
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
        a([...s, ..._]);
      } catch (m) {
        $e(m, o);
      }
      wr();
    }
  }
  var u = Va();
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
  ), e = ie, r = Te, a = (
    /** @type {Batch} */
    te
  );
  return function(l = !0) {
    at(t), We(e), Ht(r), l && (t.f & De) === 0 && (a?.activate(), a?.apply());
  };
}
function wr(t = !0) {
  at(null), We(null), Ht(null), t && te?.deactivate();
}
function Va() {
  var t = (
    /** @type {Effect} */
    le
  ), e = t.b, r = (
    /** @type {Batch} */
    te
  ), a = !!e?.is_rendered();
  return e?.update_pending_count(1, r), r.increment(a, t), () => {
    e?.update_pending_count(-1, r), r.decrement(a, t);
  };
}
// @__NO_SIDE_EFFECTS__
function or(t) {
  var e = Pe | xe;
  return le !== null && (le.f |= Xt), {
    ctx: Te,
    deps: null,
    effects: null,
    equals: Da,
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
  let a = (
    /** @type {Effect | null} */
    le
  );
  a === null && ai();
  var n = (
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
    ), c = Ra();
    n = c.promise;
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
        var u = Va();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        a.b?.is_rendered()
      )
        v.async_deriveds.get(f)?.reject(tr);
      else
        for (const _ of o.values())
          _.reject(tr);
      o.add(c), v.async_deriveds.set(f, c);
    }
    const h = (_, m = void 0) => {
      u?.(), o.delete(c), m !== tr && (v.activate(), m ? (l.f |= bt, Vt(l, m)) : ((l.f & bt) !== 0 && (l.f ^= bt), Vt(l, _)), v.deactivate());
    };
    c.promise.then(h, (_) => h(null, _ || "unknown"));
  }), Lr(() => {
    for (const f of o)
      f.reject(tr);
  }), new Promise((f) => {
    function c(v) {
      function u() {
        v === n ? f(l) : c(n);
      }
      v.then(u, u);
    }
    c(n);
  });
}
// @__NO_SIDE_EFFECTS__
function de(t) {
  const e = /* @__PURE__ */ or(t);
  return cn(e), e;
}
// @__NO_SIDE_EFFECTS__
function za(t) {
  const e = /* @__PURE__ */ or(t);
  return e.equals = ja, e;
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
function la(t) {
  var e, r = le, a = t.parent;
  if (!ht && a !== null && t.v !== ke && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (a.f & (De | Ie)) !== 0)
    return ei(), t.v;
  at(a);
  try {
    yi(t), e = _n(t);
  } finally {
    at(r);
  }
  return e;
}
function Ya(t) {
  var e = la(t);
  if (!t.equals(e) && (t.wv = vn(), (!te?.is_fork || t.deps === null) && (te !== null ? (te.capture(t, e, !0), Wr?.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    me(t, Ee);
    return;
  }
  ht || (Xe !== null ? (fa() || te?.is_fork) && Xe.set(t, e) : na(t));
}
function wi(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac !== null && Jt(() => {
        e.ac.abort(fr), e.ac = null;
      }), e.fn !== null && (e.teardown = Pn), sr(e, 0), ca(e));
}
function Wa(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && zt(e);
}
let Or = null, Pt = null, te = null, Wr = null, Xe = null, Gr = null, nr = !1, Pr = !1, ir = null, _r = null;
var ma = 0;
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
  #a = /* @__PURE__ */ new Set();
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
  #n = [];
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
    Pt === null ? Or = Pt = this : (Pt.#e = this, this.#l = Pt), Pt = this;
  }
  #b() {
    if (this.is_fork) return !0;
    for (const a of this.#r.keys()) {
      for (var e = a, r = !1; e.parent !== null; ) {
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
  unskip_effect(e, r = (a) => this.schedule(a)) {
    var a = this.#d.get(e);
    if (a) {
      this.#d.delete(e);
      for (var n of a.d)
        me(n, xe), r(n);
      for (n of a.m)
        me(n, ze), r(n);
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
    for (const l of this.#n)
      if (!((l.f & De) !== 0 || (l.f & (xe | ze)) === 0)) {
        for (var r = l, a = !1; r.parent !== null; ) {
          r = r.parent;
          var n = r.f;
          if ((n & (vt | Ye)) !== 0) {
            if ((n & Ee) === 0) {
              a = !0;
              break;
            }
            r.f ^= Ee;
          }
        }
        a || e.push(r);
      }
    return this.#n = [], e;
  }
  #p() {
    this.#t = !0;
    for (const o of this.#f)
      this.#u.delete(o), me(o, xe), this.schedule(o);
    for (const o of this.#u)
      me(o, ze), this.schedule(o);
    this.apply();
    for (var e = ir = [], r = [], a = _r = []; this.#n.length > 0; ) {
      ma++ > 1e3 && (this.#_(), Ei());
      for (const o of this.#x())
        try {
          this.#m(o, e, r);
        } catch (f) {
          throw Ja(o), this.#b() || this.discard(), f;
        }
    }
    if (te = null, a.length > 0) {
      var n = wt.ensure();
      for (const o of a)
        n.schedule(o);
    }
    if (ir = null, _r = null, this.#b()) {
      this.#v(r), this.#v(e);
      for (const [o, f] of this.#d)
        Xa(o, f);
      a.length > 0 && /** @type {unknown} */
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
    this.#s.clear(), Wr = this, ba(r), ba(e), Wr = null, this.#o?.resolve();
    var s = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      te
    );
    if (this.#i === 0 && (this.#n.length === 0 || s !== null) && this.#_(), this.#n.length > 0)
      if (s !== null) {
        for (const o of this.#n)
          s.#n.push(o);
        this.#n = [];
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
  #m(e, r, a) {
    e.f ^= Ee;
    for (var n = e.first; n !== null; ) {
      var l = n.f, s = (l & (Ye | vt)) !== 0, o = s && (l & Ee) !== 0, f = o || (l & Ie) !== 0 || this.#d.has(n);
      if (!f && n.fn !== null) {
        s ? n.f ^= Ee : (l & Bt) !== 0 ? r.push(n) : cr(n) && ((l & Ge) !== 0 && this.#u.add(n), zt(n));
        var c = n.first;
        if (c !== null) {
          n = c;
          continue;
        }
      }
      for (; n !== null; ) {
        var v = n.next;
        if (v !== null) {
          n = v;
          break;
        }
        n = n.parent;
      }
    }
  }
  #k() {
    for (var e = this.#l; e !== null; ) {
      if (!e.is_fork) {
        for (const [r, [, a]] of this.current)
          if (e.current.has(r) && !a)
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
    for (const [a, n] of e.current)
      !this.previous.has(a) && e.previous.has(a) && this.previous.set(a, e.previous.get(a)), this.current.set(a, n);
    for (const [a, n] of e.async_deriveds) {
      const l = this.async_deriveds.get(a);
      l && n.promise.then(l.resolve).catch(l.reject);
    }
    e.async_deriveds.clear(), this.transfer_effects(e.#f, e.#u);
    const r = (a) => {
      var n = a.reactions;
      if (n !== null && !((a.f & Pe) !== 0 && (a.f & (xe | ze)) === 0))
        for (const o of n) {
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
            l & (Ft | Ge) && !this.async_deriveds.has(s) && (this.#u.delete(s), me(s, xe), this.schedule(s));
          }
        }
    };
    for (const a of this.current.keys())
      r(a);
    this.oncommit(() => e.discard()), e.#_(), te = this, this.#p();
  }
  /**
   * @param {Effect[]} effects
   */
  #v(e) {
    for (var r = 0; r < e.length; r += 1)
      Ha(e[r], this.#f, this.#u);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, r, a = !1) {
    e.v !== ke && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & bt) === 0 && (this.current.set(e, [r, a]), Xe?.set(e, r)), this.is_fork || (e.v = r);
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
      ma = 0, Gr = null, ir = null, _r = null, Pr = !1, te = null, Xe = null, tt.clear();
    }
  }
  discard() {
    for (const e of this.#a) e(this);
    this.#a.clear();
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
          var a = (
            /** @type {[any, boolean]} */
            u.current.get(h)[0]
          );
          if (e && _ !== a)
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
      var n = [...u.current.keys()].filter(
        (h) => !/** @type {[any, boolean]} */
        u.current.get(h)[1]
      );
      if (!(!u.#t || n.length === 0)) {
        var l = n.filter((h) => !this.current.has(h));
        if (l.length === 0)
          e && u.discard();
        else if (r.length > 0) {
          if (e)
            for (const h of this.#g)
              u.unskip_effect(h, (_) => {
                (_.f & (Ge | Ft)) !== 0 ? u.schedule(_) : u.#v([_]);
              });
          u.activate();
          var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
          for (var f of r)
            Ga(f, l, s, o);
          o = /* @__PURE__ */ new Map();
          var c = [...u.current].filter(([h, _]) => {
            const m = this.current.get(h);
            return m ? m[0] !== _[0] || m[1] !== _[1] : !0;
          }).map(([h]) => h);
          if (c.length > 0)
            for (const h of this.#h)
              (h.f & (De | Ie | br)) === 0 && oa(h, c, o) && ((h.f & (Ft | Ge)) !== 0 ? (me(h, xe), u.schedule(h)) : u.#f.add(h));
          if (u.#n.length > 0 && !u.#c) {
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
      let a = this.#r.get(r) ?? 0;
      this.#r.set(r, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, r) {
    if (this.#i -= 1, e) {
      let a = this.#r.get(r) ?? 0;
      a === 1 ? this.#r.delete(r) : this.#r.set(r, a - 1);
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
    for (const a of e)
      this.#f.add(a);
    for (const a of r)
      this.#u.add(a);
    e.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    this.#s.add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    this.#a.add(e);
  }
  settled() {
    return (this.#o ??= Ra()).promise;
  }
  static ensure() {
    if (te === null) {
      const e = te = new wt();
      !Pr && !nr && st(() => {
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
    if (Gr = e, e.b?.is_pending && (e.f & (Bt | Tr | Ma)) !== 0 && (e.f & Gt) === 0) {
      e.b.defer_effect(e);
      return;
    }
    this.#n.push(e);
  }
  #_() {
    if (this.linked) {
      var e = this.#l, r = this.#e;
      e === null ? Or = r : e.#e = r, r === null ? Pt = e : r.#l = e, this.linked = !1;
    }
  }
}
function ki(t) {
  var e = nr;
  nr = !0;
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
    nr = e;
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
function ba(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var a = t[r++];
      if ((a.f & (De | Ie)) === 0 && cr(a) && (ot = /* @__PURE__ */ new Set(), zt(a), a.deps === null && a.first === null && a.nodes === null && a.teardown === null && a.ac === null && sn(a), ot?.size > 0)) {
        tt.clear();
        for (const n of ot) {
          if ((n.f & (De | Ie)) !== 0) continue;
          const l = [n];
          let s = n.parent;
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
function Ga(t, e, r, a) {
  if (!r.has(t) && (r.add(t), t.reactions !== null))
    for (const n of t.reactions) {
      const l = n.f;
      (l & Pe) !== 0 ? Ga(
        /** @type {Derived} */
        n,
        e,
        r,
        a
      ) : (l & (Ft | Ge)) !== 0 && (l & xe) === 0 && oa(n, e, a) && (me(n, xe), sa(
        /** @type {Effect} */
        n
      ));
    }
}
function oa(t, e, r) {
  const a = r.get(t);
  if (a !== void 0) return a;
  if (t.deps !== null)
    for (const n of t.deps) {
      if (pr.call(e, n))
        return !0;
      if ((n.f & Pe) !== 0 && oa(
        /** @type {Derived} */
        n,
        e,
        r
      ))
        return r.set(
          /** @type {Derived} */
          n,
          !0
        ), !0;
    }
  return r.set(t, !1), !1;
}
function sa(t) {
  te.schedule(t);
}
function Xa(t, e) {
  if (!((t.f & Ye) !== 0 && (t.f & Ee) !== 0)) {
    (t.f & xe) !== 0 ? e.d.push(t) : (t.f & ze) !== 0 && e.m.push(t), me(t, Ee);
    for (var r = t.first; r !== null; )
      Xa(r, e), r = r.next;
  }
}
function Ja(t) {
  me(t, Ee);
  for (var e = t.first; e !== null; )
    Ja(e), e = e.next;
}
let xr = /* @__PURE__ */ new Set();
const tt = /* @__PURE__ */ new Map();
let Ka = !1;
function Lt(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Da,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function H(t, e) {
  const r = Lt(t);
  return cn(r), r;
}
// @__NO_SIDE_EFFECTS__
function Si(t, e = !1, r = !0) {
  const a = Lt(t);
  return e || (a.equals = ja), a;
}
function x(t, e, r = !1) {
  ie !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ke || (ie.f & br) !== 0) && Ba() && (ie.f & (Pe | Ge | Ft | br)) !== 0 && (rt === null || !rt.has(t)) && di();
  let a = r ? ge(e) : e;
  return Vt(t, a, _r);
}
var Et = null, Xr = 0;
function Vt(t, e, r = null) {
  if (!t.equals(e)) {
    ht ? tt.set(t, e) : tt.has(t) || tt.set(t, t.v);
    var a = wt.ensure();
    if (a.capture(t, e), (t.f & Pe) !== 0) {
      const n = (
        /** @type {Derived} */
        t
      );
      (t.f & xe) !== 0 && la(n), Xe === null && na(n);
    }
    t.wv = vn(), Et = null, Xr = 0, Za(t, xe, r), Et = null, le !== null && (le.f & Ee) !== 0 && (le.f & (Ye | vt)) === 0 && (He === null ? Ii([t]) : He.push(t)), !a.is_fork && xr.size > 0 && !Ka && Ai();
  }
  return e;
}
function Ai() {
  Ka = !1;
  for (const t of xr) {
    (t.f & Ee) !== 0 && me(t, ze);
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
  x(t, t.v + 1);
}
function Za(t, e, r) {
  var a = t.reactions;
  if (a !== null) {
    var n = a.length;
    if (Xr += n, Xr > 1e5 && Et === null && (Et = /* @__PURE__ */ new Set()), Et !== null) {
      if (Et.has(t)) return;
      Et.add(t);
    }
    for (var l = 0; l < n; l++) {
      var s = a[l], o = s.f, f = (o & xe) === 0;
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
        Xe?.delete(c), Za(c, ze, r);
      } else if (f) {
        var v = (
          /** @type {Effect} */
          s
        );
        (o & Ge) !== 0 && ot !== null && ot.add(v), r !== null ? r.push(v) : sa(v);
      }
    }
  }
}
function ge(t) {
  if (typeof t != "object" || t === null || ft in t || Na in t)
    return t;
  const e = ta(t);
  if (e !== Nn && e !== On)
    return t;
  var r = /* @__PURE__ */ new Map(), a = Ar(t), n = /* @__PURE__ */ H(0), l = Tt, s = (o) => {
    if (Tt === l)
      return o();
    var f = ie, c = Tt;
    We(null), xa(l);
    var v = o();
    return We(f), xa(c), v;
  };
  return a && r.set("length", /* @__PURE__ */ H(
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
        }) : x(v, c.value, !0), !0;
      },
      deleteProperty(o, f) {
        var c = r.get(f);
        if (c === void 0) {
          if (f in o) {
            const v = s(() => /* @__PURE__ */ H(ke));
            r.set(f, v), lr(n);
          }
        } else
          x(c, ke), lr(n);
        return !0;
      },
      get(o, f, c) {
        if (f === ft)
          return t;
        var v = r.get(f), u = f in o;
        if (v === void 0 && (!u || Dt(o, f)?.writable) && (v = s(() => {
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
        if (c !== void 0 || le !== null && (!v || Dt(o, f)?.writable)) {
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
        if (a && f === "length")
          for (var _ = c; _ < /** @type {Source<number>} */
          u.v; _ += 1) {
            var m = r.get(_ + "");
            m !== void 0 ? x(m, ke) : _ in o && (m = s(() => /* @__PURE__ */ H(ke)), r.set(_ + "", m));
          }
        if (u === void 0)
          (!h || Dt(o, f)?.writable) && (u = s(() => /* @__PURE__ */ H(void 0)), x(u, ge(c)), r.set(f, u));
        else {
          h = u.v !== ke;
          var T = s(() => ge(c));
          x(u, T);
        }
        var g = Reflect.getOwnPropertyDescriptor(o, f);
        if (g?.set && g.set.call(v, c), !h) {
          if (a && typeof f == "string") {
            var C = (
              /** @type {Source<number>} */
              r.get("length")
            ), q = Number(f);
            Number.isInteger(q) && q >= C.v && x(C, q + 1);
          }
          lr(n);
        }
        return !0;
      },
      ownKeys(o) {
        i(n);
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
function ya(t) {
  try {
    if (t !== null && typeof t == "object" && ft in t)
      return t[ft];
  } catch {
  }
  return t;
}
function Qa(t, e) {
  return Object.is(ya(t), ya(e));
}
var Jr, $a, en, tn;
function Ci() {
  if (Jr === void 0) {
    Jr = window, $a = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    en = Dt(e, "firstChild").get, tn = Dt(e, "nextSibling").get, ga(t) && (t[Vr] = void 0, t[Oa] = null, t[zr] = void 0, t.__e = void 0), ga(r) && (r[Yr] = void 0);
  }
}
function ut(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Je(t) {
  return (
    /** @type {TemplateNode | null} */
    en.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function ur(t) {
  return (
    /** @type {TemplateNode | null} */
    tn.call(t)
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
  let a = t;
  for (; e--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ ur(a);
  return a;
}
function Ti(t) {
  t.textContent = "";
}
function rn() {
  return !1;
}
function an(t, e, r) {
  return e == null || e === Ia ? (
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
  if ((e.f & Gt) === 0 && (e.f & Bt) === 0)
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
  var a = {
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
  te?.register_created_effect(a);
  var n = a;
  if ((t & Bt) !== 0)
    ir !== null ? ir.push(a) : wt.ensure().schedule(a);
  else if (e !== null) {
    try {
      zt(a);
    } catch (s) {
      throw Be(a), s;
    }
    n.deps === null && n.teardown === null && n.nodes === null && n.first === n.last && // either `null`, or a singular child
    (n.f & Xt) === 0 && (n = n.first, (t & Ge) !== 0 && (t & Ut) !== 0 && n !== null && (n.f |= Ut));
  }
  if (n !== null && (n.parent = r, r !== null && Mi(n, r), ie !== null && (ie.f & Pe) !== 0 && (t & vt) === 0)) {
    var l = (
      /** @type {Derived} */
      ie
    );
    (l.effects ??= []).push(n);
  }
  return a;
}
function fa() {
  return ie !== null && !Ke;
}
function Lr(t) {
  const e = _t(Tr, null);
  return me(e, Ee), e.teardown = t, e;
}
function jt(t) {
  Ri();
  var e = (
    /** @type {Effect} */
    le.f
  ), r = !ie && (e & Ye) !== 0 && Te !== null && !Te.i;
  if (r) {
    var a = (
      /** @type {ComponentContext} */
      Te
    );
    (a.e ??= []).push(t);
  } else
    return nn(t);
}
function nn(t) {
  return _t(Bt | jn, t);
}
function Ni(t) {
  wt.ensure();
  const e = _t(vt | Xt, t);
  return (r = {}) => new Promise((a) => {
    r.outro ? Ct(e, () => {
      Be(e), a(void 0);
    }) : (Be(e), a(void 0));
  });
}
function ua(t) {
  return _t(Bt, t);
}
function Oi(t) {
  return _t(Ft | Xt, t);
}
function Kt(t, e = 0) {
  return _t(Tr | e, t);
}
function L(t, e = [], r = [], a = []) {
  pi(a, e, r, (n) => {
    _t(Tr, () => {
      t(...n.map(i));
    });
  });
}
function Rr(t, e = 0) {
  var r = _t(Ge | e, t);
  return r;
}
function Ve(t) {
  return _t(Ye | Xt, t);
}
function ln(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = ht, a = ie;
    wa(!0), We(null);
    try {
      e.call(null);
    } catch (n) {
      $e(n, t.parent);
    } finally {
      wa(r), We(a);
    }
  }
}
function ca(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const n = r.ac;
    n !== null && Jt(() => {
      n.abort(fr);
    });
    var a = r.next;
    (r.f & vt) !== 0 ? r.parent = null : Be(r, e), r = a;
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
  (e || (t.f & Fn) !== 0) && t.nodes !== null && t.nodes.end !== null && (on(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), r = !0), t.f |= mr, ca(t, e && !r), sr(t, 0);
  var a = t.nodes && t.nodes.t;
  if (a !== null)
    for (const l of a)
      l.stop();
  ln(t), t.f ^= mr, t.f |= De;
  var n = t.parent;
  n !== null && n.first !== null && sn(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function on(t, e) {
  for (; t !== null; ) {
    var r = t === e ? null : /* @__PURE__ */ ur(t);
    t.remove(), t = r;
  }
}
function sn(t) {
  var e = t.parent, r = t.prev, a = t.next;
  r !== null && (r.next = a), a !== null && (a.prev = r), e !== null && (e.first === t && (e.first = a), e.last === t && (e.last = r));
}
function Ct(t, e, r = !0) {
  var a = [];
  t.f |= ra, fn(t, a, !0);
  var n = () => {
    r && Be(t), e && e();
  }, l = a.length;
  if (l > 0) {
    var s = () => --l || n();
    for (var o of a)
      o.out(s);
  } else
    n();
}
function fn(t, e, r) {
  if ((t.f & Ie) === 0) {
    t.f ^= Ie;
    var a = t.nodes && t.nodes.t;
    if (a !== null)
      for (const o of a)
        (o.is_global || r) && e.push(o);
    for (var n = t.first; n !== null; ) {
      var l = n.next;
      if ((n.f & vt) === 0) {
        var s = (n.f & Ut) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (n.f & Ye) !== 0 && (t.f & Ge) !== 0;
        fn(n, e, s ? r : !1);
      }
      n = l;
    }
  }
}
function kr(t) {
  t.f &= ~ra, un(t, !0);
}
function un(t, e) {
  if ((t.f & ra) === 0 && (t.f & Ie) !== 0) {
    t.f ^= Ie, (t.f & Ee) === 0 && (me(t, xe), wt.ensure().schedule(t));
    for (var r = t.first; r !== null; ) {
      var a = r.next, n = (r.f & Ut) !== 0 || (r.f & Ye) !== 0;
      un(r, n ? e : !1), r = a;
    }
    var l = t.nodes && t.nodes.t;
    if (l !== null)
      for (const s of l)
        (s.is_global || e) && s.in();
  }
}
function da(t, e) {
  if (t.nodes)
    for (var r = t.nodes.start, a = t.nodes.end; r !== null; ) {
      var n = r === a ? null : /* @__PURE__ */ ur(r);
      e.append(r), r = n;
    }
}
let gr = !1, ht = !1;
function wa(t) {
  ht = t;
}
let ie = null, Ke = !1;
function We(t) {
  ie = t;
}
let le = null;
function at(t) {
  le = t;
}
let rt = null;
function cn(t) {
  ie !== null && ((ie.f & yr) !== 0 || (ie.f & Pe) !== 0) && (rt ??= /* @__PURE__ */ new Set()).add(t);
}
let qe = null, Ue = 0, He = null;
function Ii(t) {
  He = t;
}
let dn = 1, At = 0, Tt = At;
function xa(t) {
  Tt = t;
}
function vn() {
  return ++dn;
}
function cr(t) {
  var e = t.f;
  if ((e & xe) !== 0)
    return !0;
  if ((e & ze) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      t.deps
    ), a = r.length, n = 0; n < a; n++) {
      var l = r[n];
      if (cr(
        /** @type {Derived} */
        l
      ) && Ya(
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
function hn(t, e, r = !0) {
  var a = t.reactions;
  if (a !== null && !(rt !== null && rt.has(t)))
    for (var n = 0; n < a.length; n++) {
      var l = a[n];
      (l.f & Pe) !== 0 ? hn(
        /** @type {Derived} */
        l,
        e,
        !1
      ) : e === l && (r ? me(l, xe) : (l.f & Ee) !== 0 && me(l, ze), sa(
        /** @type {Effect} */
        l
      ));
    }
}
function _n(t) {
  var e = qe, r = Ue, a = He, n = ie, l = rt, s = Te, o = Ke, f = Tt, c = t.f;
  qe = /** @type {null | Value[]} */
  null, Ue = 0, He = null, ie = (c & (Ye | vt)) === 0 ? t : null, rt = null, Ht(t.ctx), Ke = !1, Tt = ++At, t.ac !== null && (Jt(() => {
    t.ac.abort(fr);
  }), t.ac = null);
  try {
    t.f |= yr;
    var v = (
      /** @type {Function} */
      t.fn
    ), u = v();
    t.f |= Gt;
    var h = ka(t);
    if (Ba() && He !== null && !Ke && h !== null && (t.f & (Pe | ze | xe)) === 0)
      for (var _ = 0; _ < /** @type {Source[]} */
      He.length; _++)
        hn(
          He[_],
          /** @type {Effect} */
          t
        );
    if (n !== null && n !== t) {
      if (At++, n.deps !== null)
        for (let m = 0; m < r; m += 1)
          n.deps[m].rv = At;
      if (e !== null)
        for (const m of e)
          m.rv = At;
      He !== null && (a === null ? a = He : a.push(.../** @type {Source[]} */
      He));
    }
    return (t.f & bt) !== 0 && (t.f ^= bt), u;
  } catch (m) {
    return ka(t), Li(m);
  } finally {
    t.f ^= yr, qe = e, Ue = r, He = a, ie = n, rt = l, Ht(s), Ke = o, Tt = f;
  }
}
function ka(t) {
  var e = t.deps, r = te?.is_fork;
  if (qe !== null) {
    var a;
    if (r || sr(t, Ue), e !== null && Ue > 0)
      for (e.length = Ue + qe.length, a = 0; a < qe.length; a++)
        e[Ue + a] = qe[a];
    else
      t.deps = e = qe;
    if (fa() && (t.f & Ze) !== 0)
      for (a = Ue; a < e.length; a++)
        (e[a].reactions ??= []).push(t);
  } else !r && e !== null && Ue < e.length && (sr(t, Ue), e.length = Ue);
  return e;
}
function Di(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var a = Mn.call(r, t);
    if (a !== -1) {
      var n = r.length - 1;
      n === 0 ? r = e.reactions = null : (r[a] = r[n], r.pop());
    }
  }
  if (r === null && (e.f & Pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (qe === null || !pr.call(qe, e))) {
    var l = (
      /** @type {Derived} */
      e
    );
    (l.f & Ze) !== 0 && (l.f ^= Ze), l.v !== ke && na(l), l.ac !== null && Jt(() => {
      l.ac.abort(fr), l.ac = null, me(l, xe);
    }), wi(l), sr(l, 0);
  }
}
function sr(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var a = e; a < r.length; a++)
      Di(t, r[a]);
}
function zt(t) {
  var e = t.f;
  if ((e & De) === 0) {
    me(t, Ee);
    var r = le, a = gr;
    le = t, gr = (e & (Ye | vt)) === 0;
    try {
      (e & (Ge | Ma)) !== 0 ? Pi(t) : ca(t), ln(t);
      var n = _n(t);
      t.teardown = typeof n == "function" ? n : null, t.wv = dn;
      var l;
    } finally {
      gr = a, le = r;
    }
  }
}
async function Er() {
  await Promise.resolve(), ki();
}
function i(t) {
  var e = t.f, r = (e & Pe) !== 0;
  if (ie !== null && !Ke) {
    var a = le !== null && (le.f & De) !== 0;
    if (!a && (rt === null || !rt.has(t))) {
      var n = ie.deps;
      if ((ie.f & yr) !== 0)
        t.rv < At && (t.rv = At, qe === null && n !== null && n[Ue] === t ? Ue++ : qe === null ? qe = [t] : qe.push(t));
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
      return ((s.f & Ee) === 0 && s.reactions !== null || pn(s)) && (o = la(s)), tt.set(s, o), o;
    }
    var f = (s.f & Ze) === 0 && !Ke && ie !== null && (gr || (ie.f & Ze) !== 0), c = (s.f & Gt) === 0;
    cr(s) && (f && (s.f |= Ze), Ya(s)), f && !c && (Wa(s), gn(s));
  }
  if (Xe?.has(t))
    return Xe.get(t);
  if ((t.f & bt) !== 0)
    throw t.v;
  return t.v;
}
function gn(t) {
  if (t.f |= Ze, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & Pe) !== 0 && (e.f & Ze) === 0 && (Wa(
        /** @type {Derived} */
        e
      ), gn(
        /** @type {Derived} */
        e
      ));
}
function pn(t) {
  if (t.v === ke) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (tt.has(e) || (e.f & Pe) !== 0 && pn(
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
    for (let a in t)
      try {
        Kr(t[a], e);
      } catch {
      }
    const r = ta(t);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const a = La(r);
      for (let n in a) {
        const l = a[n].get;
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
const rr = /* @__PURE__ */ Symbol("events"), mn = /* @__PURE__ */ new Set(), Zr = /* @__PURE__ */ new Set();
function Bi(t, e, r, a = {}) {
  function n(l) {
    if (a.capture || Qr.call(e, l), !l.cancelBubble)
      return Jt(() => r?.call(this, l));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? (n.__removed = !1, st(() => {
    n.__removed || e.addEventListener(t, n, a);
  })) : e.addEventListener(t, n, a), n;
}
function ct(t, e, r, a, n) {
  var l = { capture: a, passive: n }, s = Bi(t, e, r, l);
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
function nt(t) {
  for (var e = 0; e < t.length; e++)
    mn.add(t[e]);
  for (var r of Zr)
    r(t);
}
let Ir = null, Dr = !1;
function Qr(t) {
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), a = t.type, n = t.composedPath?.() || [], l = (
    /** @type {null | Element} */
    n[0] || t.target
  );
  Ir = t, Dr || (Dr = !0, setTimeout(() => {
    Dr = !1, Ir = null;
  }));
  var s = 0, o = Ir === t && t[rr];
  if (o) {
    var f = n.indexOf(o);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[rr] = e;
      return;
    }
    var c = n.indexOf(e);
    if (c === -1)
      return;
    f <= c && (s = f);
  }
  if (l = /** @type {Element} */
  n[s] || t.target, l !== e) {
    Ta(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var v = ie, u = le;
    We(null), at(null);
    try {
      for (var h, _ = []; l !== null && l !== e; ) {
        try {
          var m = l[rr]?.[a];
          m != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === l) && m.call(l, t);
        } catch (T) {
          h ? _.push(T) : h = T;
        }
        if (t.cancelBubble) break;
        s++, l = s < n.length ? (
          /** @type {Element} */
          n[s]
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
      t[rr] = e, delete t.currentTarget, We(v), at(u);
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
function bn(t) {
  var e = an("template");
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
function A(t, e) {
  var r = (e & Kn) !== 0, a = (e & Zn) !== 0, n, l = !t.startsWith("<!>");
  return () => {
    n === void 0 && (n = bn(l ? t : "<!>" + t), r || (n = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(n)));
    var s = (
      /** @type {TemplateNode} */
      a || $a ? document.importNode(n, !0) : n.cloneNode(!0)
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
  var a = !t.startsWith("<!>"), n = `<${r}>${a ? t : "<!>" + t}</${r}>`, l;
  return () => {
    if (!l) {
      var s = (
        /** @type {DocumentFragment} */
        bn(n)
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
function Yi(t) {
  let e = 0, r = Lt(0), a;
  return () => {
    fa() && (i(r), Kt(() => (e === 0 && (a = Fe(() => t(() => lr(r)))), e += 1, () => {
      st(() => {
        e -= 1, e === 0 && (a?.(), a = void 0, lr(r));
      });
    })));
  };
}
var Wi = Ut | Xt;
function Gi(t, e, r, a) {
  new Xi(t, e, r, a);
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
  #a;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {DocumentFragment | null} */
  #n = null;
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
  constructor(e, r, a, n) {
    this.#t = e, this.#e = r, this.#s = (l) => {
      var s = (
        /** @type {Effect} */
        le
      );
      s.b = this, s.f |= Hr, a(l);
    }, this.parent = /** @type {Effect} */
    le.b, this.transform_error = n ?? this.parent?.transform_error ?? ((l) => l), this.#a = Rr(() => {
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
    const r = this.#e.failed, { reset: a, invoke_onerror: n } = this.#m(e);
    st(n), r && (this.#o = Ve(() => {
      r(
        this.#t,
        () => e,
        () => a
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
    var r = !1, a = !1;
    const n = () => {
      if (r) {
        ri();
        return;
      }
      r = !0, a && vi(), this.#o !== null && Ct(this.#o, () => {
        this.#o = null;
      }), this.#w(() => {
        this.#y();
      });
    };
    return { reset: n, invoke_onerror: () => {
      try {
        a = !0, this.#e.onerror?.(e, n), a = !1;
      } catch (s) {
        $e(s, this.#a && this.#a.parent);
      }
    } };
  }
  #k() {
    const e = this.#e.pending;
    e && (this.is_pending = !0, this.#r = Ve(() => e(this.#t)), st(() => {
      var r = this.#n = document.createDocumentFragment(), a = ut(), n = !1;
      if (r.append(a), this.#i = this.#w(() => {
        try {
          return Ve(() => this.#s(a));
        } catch (l) {
          try {
            this.error(l), n = !0;
          } catch (s) {
            $e(s, this.#a.parent);
          }
          return null;
        }
      }), this.#i === null) {
        this.#n = null, n && this.#v(
          /** @type {Batch} */
          te
        );
        return;
      }
      this.#f === 0 && (this.#t.before(r), this.#n = null, Ct(
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
        var e = this.#n = document.createDocumentFragment();
        da(this.#i, e);
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
    Ha(e, this.#d, this.#g);
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
    var r = le, a = ie, n = Te;
    at(this.#a), We(this.#a), Ht(this.#a.ctx);
    try {
      return wt.ensure(), e();
    } finally {
      at(r), We(a), Ht(n);
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
    }), this.#n && (this.#t.before(this.#n), this.#n = null));
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
      this.#u = !1, this.#c && Vt(this.#c, this.#h);
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
    this.#i && (Be(this.#i), this.#i = null), this.#r && (Be(this.#r), this.#r = null), this.#o && (Be(this.#o), this.#o = null);
    let r = this.#e.failed;
    const a = (n) => {
      const { reset: l, invoke_onerror: s } = this.#m(n);
      s(), r && (this.#o = this.#w(() => {
        try {
          return Ve(() => {
            var o = (
              /** @type {Effect} */
              le
            );
            o.b = this, o.f |= Hr, r(
              this.#t,
              () => n,
              () => l
            );
          });
        } catch (o) {
          return $e(
            o,
            /** @type {Effect} */
            this.#a.parent
          ), null;
        }
      }));
    };
    st(() => {
      var n;
      try {
        n = this.transform_error(e);
      } catch (l) {
        $e(l, this.#a && this.#a.parent);
        return;
      }
      n !== null && typeof n == "object" && typeof /** @type {any} */
      n.then == "function" ? n.then(
        a,
        /** @param {unknown} e */
        (l) => $e(l, this.#a && this.#a.parent)
      ) : a(n);
    });
  }
}
function M(t, e) {
  var r = e == null ? "" : typeof e == "object" ? `${e}` : e;
  r !== /** @type {any} */
  (t[Yr] ??= t.nodeValue) && (t[Yr] = r, t.nodeValue = `${r}`);
}
function Ji(t, e) {
  return Ki(t, e);
}
const dr = /* @__PURE__ */ new Map();
function Ki(t, { target: e, anchor: r, props: a = {}, events: n, context: l, intro: s = !0, transformError: o }) {
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
        l && (m.c = l), n && (a.$$events = n), f = t(_, a) || aa(), Me();
      },
      o
    );
    var u = /* @__PURE__ */ new Set(), h = (_) => {
      for (var m = 0; m < _.length; m++) {
        var T = _[m];
        if (!u.has(T)) {
          u.add(T);
          var g = qi(T);
          for (const z of [e, document]) {
            var C = dr.get(z);
            C === void 0 && (C = /* @__PURE__ */ new Map(), dr.set(z, C));
            var q = C.get(T);
            q === void 0 ? (z.addEventListener(T, Qr, { passive: g }), C.set(T, 1)) : C.set(T, q + 1);
          }
        }
      }
    };
    return h(Cr(mn)), Zr.add(h), () => {
      for (var _ of u)
        for (const g of [e, document]) {
          var m = (
            /** @type {Map<string, number>} */
            dr.get(g)
          ), T = (
            /** @type {number} */
            m.get(_)
          );
          --T == 0 ? (g.removeEventListener(_, Qr), m.delete(_), m.size === 0 && dr.delete(g)) : m.set(_, T);
        }
      Zr.delete(h), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return Zi.set(f, c), f;
}
let Zi = /* @__PURE__ */ new WeakMap();
class yn {
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
  #a = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, r = !0) {
    this.anchor = e, this.#a = r;
  }
  /**
   * @param {Batch} batch
   */
  #i = (e) => {
    if (this.#t.has(e)) {
      var r = (
        /** @type {Key} */
        this.#t.get(e)
      ), a = this.#l.get(r);
      if (a)
        kr(a), this.#s.delete(r);
      else {
        var n = this.#e.get(r);
        n && (kr(n.effect), this.#l.set(r, n.effect), this.#e.delete(r), n.fragment.lastChild.remove(), this.anchor.before(n.fragment), a = n.effect);
      }
      for (const [l, s] of this.#t) {
        if (this.#t.delete(l), l === e)
          break;
        const o = this.#e.get(s);
        o && (Be(o.effect), this.#e.delete(s));
      }
      for (const [l, s] of this.#l) {
        if (l === r || this.#s.has(l)) continue;
        const o = () => {
          if (Array.from(this.#t.values()).includes(l)) {
            var c = document.createDocumentFragment();
            da(s, c), c.append(ut()), this.#e.set(l, { effect: s, fragment: c });
          } else
            Be(s);
          this.#s.delete(l), this.#l.delete(l);
        };
        this.#a || !a ? (this.#s.add(l), Ct(s, o, !1)) : o();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #r = (e) => {
    this.#t.delete(e);
    const r = Array.from(this.#t.values());
    for (const [a, n] of this.#e)
      r.includes(a) || (Be(n.effect), this.#e.delete(a));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, r) {
    var a = (
      /** @type {Batch} */
      te
    ), n = rn();
    if (r && !this.#l.has(e) && !this.#e.has(e))
      if (n) {
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
    if (this.#t.set(a, e), n) {
      for (const [o, f] of this.#l)
        o === e ? a.unskip_effect(f) : a.skip_effect(f);
      for (const [o, f] of this.#e)
        o === e ? a.unskip_effect(f.effect) : a.skip_effect(f.effect);
      a.oncommit(this.#i), a.ondiscard(this.#r);
    } else
      this.#i(a);
  }
}
function V(t, e, r = !1) {
  var a = new yn(t), n = r ? Ut : 0;
  function l(s, o) {
    a.ensure(s, o);
  }
  Rr(() => {
    var s = !1;
    e((o, f = 0) => {
      s = !0, l(f, o);
    }), s || l(-1, null);
  }, n);
}
const Qi = /* @__PURE__ */ Symbol("NaN");
function $i(t, e, r) {
  var a = new yn(t);
  Rr(() => {
    var n = e();
    n !== n && (n = /** @type {any} */
    Qi), a.ensure(n, r);
  });
}
function be(t, e) {
  return e;
}
function el(t, e, r) {
  for (var a = [], n = e.length, l, s = e.length, o = 0; o < n; o++) {
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
    var f = a.length === 0 && r !== null && t.pending.size === 0;
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
  var a;
  if (t.pending.size > 0) {
    a = /* @__PURE__ */ new Set();
    for (const s of t.pending.values())
      for (const o of s)
        a.add(
          /** @type {EachItem} */
          t.items.get(o).e
        );
  }
  for (var n = 0; n < e.length; n++) {
    var l = e[n];
    if (a?.has(l)) {
      l.f |= et;
      const s = document.createDocumentFragment();
      da(l, s);
    } else
      Be(e[n], r);
  }
}
var Ea;
function ve(t, e, r, a, n, l = null) {
  var s = t, o = /* @__PURE__ */ new Map(), f = (e & Pa) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      t
    );
    s = c.appendChild(ut());
  }
  var v = null, u = /* @__PURE__ */ za(() => {
    var z = r();
    return (
      /** @type {V[]} */
      Ar(z) ? z : z == null ? [] : Cr(z)
    );
  }), h, _ = /* @__PURE__ */ new Map(), m = !0;
  function T(z) {
    (q.effect.f & De) === 0 && (q.pending.delete(z), q.fallback = v, tl(q, h, s, e, a), v !== null && (h.length === 0 ? (v.f & et) === 0 ? kr(v) : (v.f ^= et, ar(v, null, s)) : Ct(v, () => {
      v = null;
    })));
  }
  function g(z) {
    q.pending.delete(z);
  }
  var C = Rr(() => {
    h = /** @type {V[]} */
    i(u);
    for (var z = h.length, O = /* @__PURE__ */ new Set(), y = (
      /** @type {Batch} */
      te
    ), j = rn(), w = 0; w < z; w += 1) {
      var k = h[w], P = a(k, w), B = m ? null : o.get(P);
      B ? (B.v && Vt(B.v, k), B.i && Vt(B.i, w), j && y.unskip_effect(B.e)) : (B = rl(
        o,
        m ? s : Ea ??= ut(),
        k,
        P,
        w,
        n,
        e,
        r
      ), m || (B.e.f |= et), o.set(P, B)), O.add(P);
    }
    if (z === 0 && l && !v && (m ? v = Ve(() => l(s)) : (v = Ve(() => l(Ea ??= ut())), v.f |= et)), z > O.size && ni(), !m)
      if (_.set(y, O), j) {
        for (const [I, b] of o)
          O.has(I) || y.skip_effect(b.e);
        y.oncommit(T), y.ondiscard(g);
      } else
        T(y);
    i(u);
  }), q = { effect: C, items: o, pending: _, outrogroups: null, fallback: v };
  m = !1;
}
function er(t) {
  for (; t !== null && (t.f & Ye) === 0; )
    t = t.next;
  return t;
}
function tl(t, e, r, a, n) {
  var l = (a & zn) !== 0, s = e.length, o = t.items, f = er(t.effect.first), c, v = null, u, h = [], _ = [], m, T, g, C;
  if (l)
    for (C = 0; C < s; C += 1)
      m = e[C], T = n(m, C), g = /** @type {EachItem} */
      o.get(T).e, (g.f & et) === 0 && (g.nodes?.a?.measure(), (u ??= /* @__PURE__ */ new Set()).add(g));
  for (C = 0; C < s; C += 1) {
    if (m = e[C], T = n(m, C), g = /** @type {EachItem} */
    o.get(T).e, t.outrogroups !== null)
      for (const B of t.outrogroups)
        B.pending.delete(g), B.done.delete(g);
    if ((g.f & Ie) !== 0 && (kr(g), l && (g.nodes?.a?.unfix(), (u ??= /* @__PURE__ */ new Set()).delete(g))), (g.f & et) !== 0)
      if (g.f ^= et, g === f)
        ar(g, null, r);
      else {
        var q = v ? v.next : f;
        g === t.effect.last && (t.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), mt(t, v, g), mt(t, g, q), ar(g, q, r), v = g, h = [], _ = [], f = er(v.next);
        continue;
      }
    if (g !== f) {
      if (c !== void 0 && c.has(g)) {
        if (h.length < _.length) {
          var z = _[0], O;
          v = z.prev;
          var y = h[0], j = h[h.length - 1];
          for (O = 0; O < h.length; O += 1)
            ar(h[O], z, r);
          for (O = 0; O < _.length; O += 1)
            c.delete(_[O]);
          mt(t, y.prev, j.next), mt(t, v, y), mt(t, j, z), f = z, v = j, C -= 1, h = [], _ = [];
        } else
          c.delete(g), ar(g, f, r), mt(t, g.prev, g.next), mt(t, g, v === null ? t.effect.first : v.next), mt(t, v, g), v = g;
        continue;
      }
      for (h = [], _ = []; f !== null && f !== g; )
        (c ??= /* @__PURE__ */ new Set()).add(f), _.push(f), f = er(f.next);
      if (f === null)
        continue;
    }
    (g.f & et) === 0 && h.push(g), v = g, f = er(g.next);
  }
  if (t.outrogroups !== null) {
    for (const B of t.outrogroups)
      B.pending.size === 0 && ($r(t, Cr(B.done)), t.outrogroups?.delete(B));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (f !== null || c !== void 0) {
    var w = [];
    if (c !== void 0)
      for (g of c)
        (g.f & Ie) === 0 && w.push(g);
    for (; f !== null; )
      (f.f & Ie) === 0 && f !== t.fallback && w.push(f), f = er(f.next);
    var k = w.length;
    if (k > 0) {
      var P = (a & Pa) !== 0 && s === 0 ? r : null;
      if (l) {
        for (C = 0; C < k; C += 1)
          w[C].nodes?.a?.measure();
        for (C = 0; C < k; C += 1)
          w[C].nodes?.a?.fix();
      }
      el(t, w, P);
    }
  }
  l && st(() => {
    if (u !== void 0)
      for (g of u)
        g.nodes?.a?.apply();
  });
}
function rl(t, e, r, a, n, l, s, o) {
  var f = (s & Hn) !== 0 ? (s & Yn) === 0 ? /* @__PURE__ */ Si(r, !1, !1) : Lt(r) : null, c = (s & Vn) !== 0 ? Lt(n) : null;
  return {
    v: f,
    i: c,
    e: Ve(() => (l(e, f ?? r, c ?? n, o), () => {
      t.delete(a);
    }))
  };
}
function ar(t, e, r) {
  if (t.nodes)
    for (var a = t.nodes.start, n = t.nodes.end, l = e && (e.f & et) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : r; a !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ur(a)
      );
      if (l.before(a), a === n)
        return;
      a = s;
    }
}
function mt(t, e, r) {
  e === null ? t.effect.first = r : e.next = r, r === null ? t.effect.last = e : r.prev = e;
}
function yt(t, e, r = !1, a = !1, n = !1, l = !1) {
  var s = t, o = "";
  if (r)
    var f = (
      /** @type {Element} */
      t
    );
  L(() => {
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
      if (c.nodes !== null && (on(
        c.nodes.start,
        /** @type {TemplateNode} */
        c.nodes.end
      ), c.nodes = null), o !== "") {
        var v = a ? Qn : n ? $n : void 0, u = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          an(a ? "svg" : n ? "math" : "template", v)
        );
        u.innerHTML = /** @type {any} */
        o;
        var h = a || n ? u : (
          /** @type {HTMLTemplateElement} */
          u.content
        );
        if (Rt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Je(h),
          /** @type {TemplateNode} */
          h.lastChild
        ), a || n)
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
function Yt(t, e, r) {
  ua(() => {
    var a = Fe(() => e(t, r?.()) || {});
    if (r && a?.update) {
      var n = !1, l = (
        /** @type {any} */
        {}
      );
      Kt(() => {
        var s = r();
        Fi(s), n && Fa(l, s) && (l = s, a.update(s));
      }), n = !0;
    }
    if (a?.destroy)
      return () => (
        /** @type {Function} */
        a.destroy()
      );
  });
}
function wn(t) {
  var e, r, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var n = t.length;
    for (e = 0; e < n; e++) t[e] && (r = wn(t[e])) && (a && (a += " "), a += r);
  } else for (r in t) t[r] && (a && (a += " "), a += r);
  return a;
}
function al() {
  for (var t, e, r = 0, a = "", n = arguments.length; r < n; r++) (t = arguments[r]) && (e = wn(t)) && (a && (a += " "), a += e);
  return a;
}
function nl(t) {
  return typeof t == "object" ? al(t) : t ?? "";
}
const Sa = [...` 	
\r\f \v\uFEFF`];
function il(t, e, r) {
  var a = t == null ? "" : "" + t;
  if (e && (a = a ? a + " " + e : e), r) {
    for (var n of Object.keys(r))
      if (r[n])
        a = a ? a + " " + n : n;
      else if (a.length)
        for (var l = n.length, s = 0; (s = a.indexOf(n, s)) >= 0; ) {
          var o = s + l;
          (s === 0 || Sa.includes(a[s - 1])) && (o === a.length || Sa.includes(a[o])) ? a = (s === 0 ? "" : a.substring(0, s)) + a.substring(o + 1) : s = o;
        }
  }
  return a === "" ? null : a;
}
function Aa(t, e = !1) {
  var r = e ? " !important;" : ";", a = "";
  for (var n of Object.keys(t)) {
    var l = t[n];
    l != null && l !== "" && (a += " " + n + ": " + l + r);
  }
  return a;
}
function Fr(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function ll(t, e) {
  if (e) {
    var r = "", a, n;
    if (Array.isArray(e) ? (a = e[0], n = e[1]) : a = e, t) {
      t = String(t).replaceAll(/\/\*.*?\*\//g, "").trim();
      var l = !1, s = 0, o = !1, f = [];
      a && f.push(...Object.keys(a).map(Fr)), n && f.push(...Object.keys(n).map(Fr));
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
    return a && (r += Aa(a)), n && (r += Aa(n, !0)), r = r.trim(), r === "" ? null : r;
  }
  return t == null ? null : String(t);
}
function Le(t, e, r, a, n, l) {
  var s = (
    /** @type {any} */
    t[Vr]
  );
  if (s !== r || s === void 0) {
    var o = il(r, a, l);
    o == null ? t.removeAttribute("class") : t.className = o, t[Vr] = r;
  } else if (l && n !== l)
    for (var f in l) {
      var c = !!l[f];
      (n == null || c !== !!n[f]) && t.classList.toggle(f, c);
    }
  return l;
}
function jr(t, e = {}, r, a) {
  for (var n in r) {
    var l = r[n];
    e[n] !== l && (r[n] == null ? t.style.removeProperty(n) : t.style.setProperty(n, l, a));
  }
}
function It(t, e, r, a) {
  var n = (
    /** @type {any} */
    t[zr]
  );
  if (n !== e) {
    var l = ll(e, a);
    l == null ? t.removeAttribute("style") : t.style.cssText = l, t[zr] = e;
  } else a && (Array.isArray(a) ? (jr(t, r?.[0], a[0]), jr(t, r?.[1], a[1], "important")) : jr(t, r, a));
  return a;
}
function ol(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function sl(t, e) {
  var r = t.__defaultValue, a = t.multiple, n = a ? r ?? [] : null;
  if (!(a && !Ar(n))) {
    t.selectedIndex;
    for (var l of t.options) {
      var s = qt(l);
      ol(
        l,
        a ? (
          /** @type {any[]} */
          n.includes(s)
        ) : Qa(s, r)
      );
    }
  }
}
function va(t, e, r = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ar(e))
      return ti();
    for (var a of t.options)
      a.selected = e.includes(qt(a));
    return;
  }
  for (a of t.options) {
    var n = qt(a);
    if (Qa(n, e)) {
      a.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function xn(t) {
  var e = new MutationObserver((r) => {
    r.every(ul) || ("__defaultValue" in t && sl(t), "__value" in t && va(t, t.__value));
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
  var a = /* @__PURE__ */ new WeakSet(), n = !0;
  ia(t, "change", (l) => {
    var s = l ? "[selected]" : ":checked", o;
    if (t.multiple)
      o = [].map.call(t.querySelectorAll(s), qt);
    else {
      var f = t.querySelector(s) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      o = f && qt(f);
    }
    r(o), t.__value = o, te !== null && a.add(te);
  }), ua(() => {
    var l = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        te
      );
      if (a.has(s))
        return;
    }
    if (va(t, l, n), n && l === void 0) {
      var o = t.querySelector(":checked");
      o !== null && (l = qt(o), r(l));
    }
    t.__value = l, n = !1;
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
const cl = /* @__PURE__ */ Symbol("is custom element"), dl = /* @__PURE__ */ Symbol("is html"), vl = Un ? "progress" : "PROGRESS";
function kn(t, e) {
  var r = En(t);
  r.value === (r.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== vl) || (t.value = e ?? "");
}
function W(t, e, r, a) {
  var n = En(t);
  n[e] !== (n[e] = r) && (e === "loading" && (t[Bn] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && hl(t).has(e) ? t[e] = r : t.setAttribute(e, r));
}
function En(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[Oa] ??= {
      [cl]: t.nodeName.includes("-"),
      [dl]: t.namespaceURI === Ia
    }
  );
}
var Ca = /* @__PURE__ */ new Map();
function hl(t) {
  var e = t.getAttribute("is") || t.nodeName, r = Ca.get(e);
  if (r) return r;
  Ca.set(e, r = /* @__PURE__ */ new Set());
  for (var a, n = t, l = Element.prototype; l !== n; ) {
    a = La(n);
    for (var s in a)
      a[s].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      s !== "innerHTML" && s !== "textContent" && s !== "innerText" && r.add(s);
    n = ta(n);
  }
  return r;
}
function Sr(t, e, r = e) {
  var a = /* @__PURE__ */ new WeakSet();
  ia(t, "input", async (n) => {
    var l = n ? t.defaultValue : t.value;
    if (l = qr(t) ? Br(l) : l, r(l), te !== null && a.add(te), await Er(), l !== (l = e())) {
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
  Fe(e) == null && t.value && (r(qr(t) ? Br(t.value) : t.value), te !== null && a.add(te)), Kt(() => {
    var n = e();
    if (t === document.activeElement) {
      var l = (
        /** @type {Batch} */
        te
      );
      if (a.has(l))
        return;
    }
    qr(t) && n === Br(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function _l(t, e, r = e) {
  ia(t, "change", (a) => {
    var n = a ? t.defaultChecked : t.checked;
    r(n);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Fe(e) == null && r(t.checked), Kt(() => {
    var a = e();
    t.checked = !!a;
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
function Mt(t = aa(), e, r, a) {
  var n = (
    /** @type {ComponentContext} */
    Te.r
  ), l = (
    /** @type {Effect} */
    le
  );
  return ua(() => {
    var s, o;
    return Kt(() => {
      s = o, o = [], Fe(() => {
        Ur(r(...o), t) || (e(t, ...o), s && Ur(r(...s), t) && e(null, ...s));
      });
    }), () => {
      let f = l;
      for (; f !== n && f.parent !== null && f.parent.f & mr; )
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
function gl(t, e, r, a, n) {
  var l = () => {
    a(r[t]);
  };
  r.addEventListener(e, l), n ? Kt(() => {
    r[t] = n();
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
function Wt(t, e, r, a) {
  var n = !0, l = (r & Xn) !== 0, s = (r & Jn) !== 0, o = (
    /** @type {V} */
    a
  ), f = !0, c = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), v = () => s && n ? (c ??= /* @__PURE__ */ or(
    /** @type {() => V} */
    a
  ), i(c)) : (f && (f = !1, o = s ? Fe(
    /** @type {() => V} */
    a
  ) : (
    /** @type {V} */
    a
  )), o);
  let u;
  if (l) {
    var h = ft in t || qn in t;
    u = Dt(t, e)?.set ?? (h && e in t ? (O) => t[e] = O : void 0);
  }
  var _, m = !1;
  l ? [_, m] = pl(() => (
    /** @type {V} */
    t[e]
  )) : _ = /** @type {V} */
  t[e], _ === void 0 && a !== void 0 && (_ = v(), u && (fi(), u(_)));
  var T;
  if (T = () => {
    var O = (
      /** @type {V} */
      t[e]
    );
    return O === void 0 ? v() : (f = !0, O);
  }, (r & Gn) === 0)
    return T;
  if (u) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(O, y) {
        return arguments.length > 0 ? ((!y || g || m) && u(y ? T() : O), O) : T();
      })
    );
  }
  var C = !1, q = ((r & Wn) !== 0 ? or : za)(() => (C = !1, T()));
  l && i(q);
  var z = (
    /** @type {Effect} */
    le
  );
  return (
    /** @type {() => V} */
    (function(O, y) {
      if (arguments.length > 0) {
        const j = y ? i(q) : l ? ge(O) : O;
        return x(q, j), C = !0, o !== void 0 && (o = j), O;
      }
      return ht && C || (z.f & De) !== 0 ? q.v : i(q);
    })
  );
}
function xt(t) {
  Te === null && qa(), jt(() => {
    const e = Fe(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function ha(t) {
  Te === null && qa(), xt(() => () => Fe(t));
}
const ml = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ml);
async function Se(t, e, r = {}) {
  const a = await fetch(`${window.init.urlRoot}/api/v1${t}`, {
    credentials: "same-origin",
    method: r.method || (e ? "POST" : "GET"),
    headers: { "Content-Type": "application/json", "CSRF-Token": window.init.csrfNonce },
    ...e ? { body: JSON.stringify(e) } : {}
  });
  if (a.status === 401) throw new Error("Please log in to continue.");
  let n;
  try {
    n = await a.json();
  } catch {
    throw new Error("The server did not return a valid response. Please try again.");
  }
  if (!a.ok || n.success === !1) {
    const l = n.errors && typeof n.errors == "object" ? Object.values(n.errors).flat(1 / 0).join(" ") : n.errors;
    throw new Error(n.message || l || "This request is unavailable. Please try again.");
  }
  return r.full ? n : n.data;
}
var bl = /* @__PURE__ */ A('<th><button type="button" class="column-label"> <span class="column-sort" aria-hidden="true"> </span></button><button type="button" class="column-resize"></button></th>'), yl = /* @__PURE__ */ A('<i role="img"></i>'), wl = /* @__PURE__ */ A('<button class="open-challenge"> </button>'), xl = /* @__PURE__ */ A("<td><!></td>"), kl = /* @__PURE__ */ A("<tr></tr>"), El = /* @__PURE__ */ A('<div class="message-list"><table><thead><tr></tr></thead><tbody id="challenge-rows"></tbody></table></div>');
function Sl(t, e) {
  Re(e, !0);
  let r = Wt(e, "hidden", 3, !1);
  const a = ["status", "subject", "category", "points"], n = {
    status: "Status",
    subject: "Subject",
    category: "Category",
    points: "Points"
  }, l = { status: 55, subject: 130, category: 90, points: 65 }, s = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
  let o = /* @__PURE__ */ H(ge([...a])), f = /* @__PURE__ */ H(null), c, v = /* @__PURE__ */ H(ge({
    key: Fe(() => e.defaultOrder) === "name" ? "subject" : "id",
    direction: 1
  })), u = /* @__PURE__ */ H(window.innerWidth <= 760), h = /* @__PURE__ */ de(() => {
    const w = (k) => ({
      status: Number(k.solved_by_me),
      subject: k.name,
      category: k.category,
      points: k.value,
      id: k.id
    })[i(v).key];
    return [...e.challenges].sort((k, P) => (["id", "points", "status"].includes(i(v).key) ? w(k) - w(P) : s.compare(w(k), w(P))) * i(v).direction || k.id - P.id);
  }), _ = /* @__PURE__ */ de(() => i(f) ? i(o).filter((w) => !i(u) || w !== "category").reduce((w, k) => w + i(f)[k], 0) : null);
  function m() {
    x(
      f,
      Object.fromEntries([...c.tHead.rows[0].cells].map((w) => [
        w.dataset.column,
        w.getBoundingClientRect().width || l[w.dataset.column]
      ])),
      !0
    );
  }
  async function T(w, k) {
    if (!k || k === w) return;
    i(f) || m();
    const P = new Map([...c.querySelectorAll("th,td")].map((b) => [b, b.getBoundingClientRect().left])), B = i(o).indexOf(k), I = i(o).filter((b) => b !== w);
    I.splice(B, 0, w), x(o, I, !0), await Er(), matchMedia("(prefers-reduced-motion: reduce)").matches || P.forEach((b, S) => {
      const D = b - S.getBoundingClientRect().left;
      D && S.animate(
        [
          { transform: `translateX(${D}px)` },
          { transform: "translateX(0)" }
        ],
        { duration: 180, easing: "ease-out" }
      );
    });
  }
  function g(w, { key: k, resize: P = !1 }) {
    const B = w.closest("th");
    let I, b, S = !1;
    function D() {
      b?.remove(), b = null, I = null, B.classList.remove("column-dragging"), c.querySelectorAll(".column-drop-before,.column-drop-after").forEach((J) => J.classList.remove("column-drop-before", "column-drop-after"));
    }
    function Z(J) {
      J.button !== 0 || !J.isPrimary || (S = !1, m(), I = {
        x: J.clientX,
        y: J.clientY,
        offset: J.clientX - B.getBoundingClientRect().left,
        width: i(f)[k]
      }, w.setPointerCapture(J.pointerId));
    }
    function re(J) {
      if (I) {
        if (P) {
          i(f)[k] = Math.max(l[k], I.width + J.clientX - I.x);
          return;
        }
        if (!b && Math.hypot(J.clientX - I.x, J.clientY - I.y) > 5 && (S = !0, b = document.createElement("div"), b.className = "column-drag-ghost", b.textContent = n[k], b.setAttribute("aria-hidden", "true"), b.style.width = `${I.width}px`, document.body.append(b), B.classList.add("column-dragging")), b) {
          b.style.left = `${J.clientX - I.offset}px`, b.style.top = `${J.clientY + 12}px`, c.querySelectorAll(".column-drop-before,.column-drop-after").forEach((R) => R.classList.remove("column-drop-before", "column-drop-after"));
          const F = document.elementFromPoint(J.clientX, J.clientY)?.closest("th");
          F?.parentElement === B.parentElement && F !== B && F.classList.add(i(o).indexOf(k) < i(o).indexOf(F.dataset.column) ? "column-drop-after" : "column-drop-before");
        }
      }
    }
    function Q(J) {
      if (!I) return;
      const F = document.elementFromPoint(J.clientX, J.clientY)?.closest("th"), R = !!b;
      D(), w.hasPointerCapture(J.pointerId) && w.releasePointerCapture(J.pointerId), !P && R && F?.parentElement === B.parentElement && T(k, F.dataset.column), w.focus();
    }
    function X(J) {
      if (!P) {
        if (S && J.detail !== 0) {
          S = !1;
          return;
        }
        x(
          v,
          {
            key: k,
            direction: i(v).key === k ? -i(v).direction : 1
          },
          !0
        );
      }
    }
    function $(J) {
      if (!["ArrowLeft", "ArrowRight"].includes(J.key) || !P && !J.altKey) return;
      J.preventDefault();
      const F = J.key === "ArrowRight" ? 1 : -1;
      if (P)
        m(), i(f)[k] = Math.max(l[k], i(f)[k] + F * 10);
      else {
        const R = i(o).filter((K) => !i(u) || K !== "category");
        T(k, R[R.indexOf(k) + F]);
      }
    }
    const se = {
      pointerdown: Z,
      pointermove: re,
      pointerup: Q,
      pointercancel: D,
      lostpointercapture: D,
      click: X,
      keydown: $
    };
    return Object.entries(se).forEach(([J, F]) => w.addEventListener(J, F)), {
      destroy() {
        D(), Object.entries(se).forEach(([J, F]) => w.removeEventListener(J, F));
      }
    };
  }
  var C = El();
  ct("resize", Jr, () => x(u, window.innerWidth <= 760));
  var q = E(C);
  let z;
  var O = E(q), y = E(O);
  ve(y, 20, () => i(o), (w) => w, (w, k) => {
    var P = bl();
    let B;
    var I = E(P), b = E(I), S = d(b), D = U(S, !0);
    Yt(I, (re, Q) => g?.(re, Q), () => ({ key: k }));
    var Z = d(I);
    Yt(Z, (re, Q) => g?.(re, Q), () => ({ key: k, resize: !0 })), L(() => {
      W(P, "data-column", k), W(P, "aria-sort", i(v).key === k ? i(v).direction === 1 ? "ascending" : "descending" : "none"), B = It(P, "", B, { width: i(f) ? `${i(f)[k]}px` : void 0 }), W(I, "aria-label", `${n[k]} column. Click to sort. Drag or use Alt and arrow keys to move.`), M(b, n[k]), M(D, i(v).key === k ? i(v).direction === 1 ? "▲" : "▼" : ""), W(Z, "aria-label", `Resize ${n[k]} column`);
    }), p(w, P);
  });
  var j = d(O);
  ve(j, 21, () => i(h), (w) => w.id, (w, k) => {
    var P = kl();
    ve(P, 20, () => i(o), (B) => B, (B, I) => {
      var b = xl(), S = E(b);
      {
        var D = (X) => {
          var $ = yl();
          L(() => {
            Le($, 1, `fas fa-envelope${i(k).solved_by_me ? "-open" : ""}`), W($, "aria-label", i(k).solved_by_me ? "Solved" : "Unsolved");
          }), p(X, $);
        }, Z = (X) => {
          var $ = wl(), se = U($, !0);
          L(() => {
            W($, "data-id", i(k).id), M(se, i(k).name);
          }), he("click", $, () => e.onopen(i(k).id)), p(X, $);
        }, re = (X) => {
          var $ = Qe();
          L(() => M($, i(k).category)), p(X, $);
        }, Q = (X) => {
          var $ = Qe();
          L(() => M($, i(k).value)), p(X, $);
        };
        V(S, (X) => {
          I === "status" ? X(D) : I === "subject" ? X(Z, 1) : I === "category" ? X(re, 2) : X(Q, -1);
        });
      }
      L(() => W(b, "data-column", I)), p(B, b);
    }), L(() => Le(P, 1, nl(i(k).solved_by_me ? "read" : "unread"))), p(w, P);
  }), Mt(q, (w) => c = w, () => c), L(() => {
    W(C, "hidden", r()), z = It(q, "", z, {
      width: i(_) ? `${i(_)}px` : void 0
    });
  }), p(t, C), Me();
}
nt(["click"]);
var Al = /* @__PURE__ */ A('<details><summary> </summary> <div class="hint-content"><!></div></details>');
function Cl(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(!1), n = /* @__PURE__ */ H(null), l = /* @__PURE__ */ H("");
  async function s(g) {
    if (x(r, g.currentTarget.open, !0), !(!i(r) || i(a) || i(n))) {
      x(a, !0), x(l, "");
      try {
        let C = await Se(`/hints/${e.hint.id}`);
        if (!C.content) {
          if (C.cost > 0 && !confirm(`Unlock this hint for ${C.cost} points?`)) {
            x(r, !1);
            return;
          }
          await Se("/unlocks", { target: e.hint.id, type: "hints" }), C = await Se(`/hints/${e.hint.id}`);
        }
        x(n, C, !0);
      } catch (C) {
        x(l, C.message, !0);
      } finally {
        x(a, !1);
      }
    }
  }
  var o = Al(), f = E(o), c = U(f), v = d(f, 2), u = E(v);
  {
    var h = (g) => {
      var C = Qe("Loading hint...");
      p(g, C);
    }, _ = (g) => {
      var C = Qe();
      L(() => M(C, i(l))), p(g, C);
    }, m = (g) => {
      var C = dt(), q = ue(C);
      yt(q, () => i(n).html), p(g, C);
    }, T = (g) => {
      var C = Qe();
      L(() => M(C, i(n).content)), p(g, C);
    };
    V(u, (g) => {
      i(a) ? g(h) : i(l) ? g(_, 1) : i(n)?.html ? g(m, 2) : i(n) && g(T, 3);
    });
  }
  L(() => {
    W(o, "data-hint", e.hint.id), M(c, `${(e.hint.title || "View hint") ?? ""}${e.hint.cost ? ` (${e.hint.cost} points)` : ""}`);
  }), ct("toggle", o, s), gl("open", "toggle", o, (g) => x(r, g), () => i(r)), p(t, o), Me();
}
var Tl = /* @__PURE__ */ A('<button type="button" class="solve-count"> </button>'), Ll = /* @__PURE__ */ A('<span class="challenge-solves">Total solves: <!></span>'), Rl = /* @__PURE__ */ A('<p role="status">Loading solves...</p>'), Ml = /* @__PURE__ */ A('<div class="alert alert-danger" role="alert"> <button type="button">Retry</button></div>'), Nl = /* @__PURE__ */ A("<tr><td><a> </a></td><td><time> </time></td></tr>"), Ol = /* @__PURE__ */ A('<div class="table-responsive"><table class="table table-striped"><thead><tr><th>User</th><th>Solve time</th></tr></thead><tbody></tbody></table></div>'), Pl = /* @__PURE__ */ A("<p>No solves to display.</p>"), Il = /* @__PURE__ */ A('<!> <dialog class="express-dialog solves-dialog" aria-labelledby="solves-title"><h2 id="solves-title"> </h2> <!> <div class="dialog-actions"><button type="button" class="btn btn-primary">Close</button></div></dialog>', 1);
function Dl(t, e) {
  Re(e, !0);
  let r, a = /* @__PURE__ */ H(ge([])), n = /* @__PURE__ */ H(!1), l = /* @__PURE__ */ H(""), s = 0;
  ha(() => s++);
  async function o() {
    const w = ++s;
    x(n, !0), x(l, ""), x(a, [], !0);
    try {
      const k = await Se(`/challenges/${e.challengeId}/solves`);
      w === s && x(a, k, !0);
    } catch (k) {
      w === s && x(l, k.message, !0);
    } finally {
      w === s && x(n, !1);
    }
  }
  function f() {
    r.showModal(), o();
  }
  var c = Il(), v = ue(c);
  {
    var u = (w) => {
      var k = Ll(), P = d(E(k));
      {
        var B = (b) => {
          var S = Tl(), D = U(S, !0);
          L(() => {
            W(S, "aria-label", `View ${e.count} solves`), M(D, e.count);
          }), he("click", S, f), p(b, S);
        }, I = (b) => {
          var S = Qe("0");
          p(b, S);
        };
        V(P, (b) => {
          e.count > 0 ? b(B) : b(I, -1);
        });
      }
      p(w, k);
    }, h = /* @__PURE__ */ de(() => Number.isInteger(e.count) && e.count >= 0);
    V(v, (w) => {
      i(h) && w(u);
    });
  }
  var _ = d(v, 2), m = E(_), T = U(m), g = d(m, 2);
  {
    var C = (w) => {
      var k = Rl();
      p(w, k);
    }, q = (w) => {
      var k = Ml(), P = E(k), B = d(P);
      L(() => M(P, `${i(l) ?? ""} `)), he("click", B, o), p(w, k);
    }, z = (w) => {
      var k = Ol(), P = E(k), B = d(E(P));
      ve(B, 21, () => i(a), be, (I, b) => {
        var S = Nl(), D = E(S), Z = E(D), re = U(Z, !0), Q = d(D), X = E(Q), $ = U(X, !0);
        L(
          (se) => {
            W(Z, "href", i(b).account_url), M(re, i(b).name), W(X, "datetime", i(b).date), M($, se);
          },
          [
            () => new Date(i(b).date).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "long" })
          ]
        ), p(I, S);
      }), p(w, k);
    }, O = (w) => {
      var k = Pl();
      p(w, k);
    };
    V(g, (w) => {
      i(n) ? w(C) : i(l) ? w(q, 1) : i(a).length ? w(z, 2) : w(O, -1);
    });
  }
  var y = d(g, 2), j = U(y);
  Mt(_, (w) => r = w, () => r), L(() => M(T, `Solves - ${e.challengeName ?? ""}`)), ct("close", _, () => s++), he("click", j, () => r.close()), p(t, c), Me();
}
nt(["click"]);
var Fl = /* @__PURE__ */ A('<span class="challenge-tag"> </span>'), jl = /* @__PURE__ */ A('<div class="challenge-tags"><span>Tags:</span><!></div>'), ql = /* @__PURE__ */ A("<div> </div>"), Bl = /* @__PURE__ */ A("<p>Connection: <code> </code></p>"), Ul = /* @__PURE__ */ A('<a download=""><i class="fas fa-paperclip" aria-hidden="true"></i> </a>'), Hl = /* @__PURE__ */ A('<i aria-hidden="true"></i><strong> </strong>', 1), Vl = /* @__PURE__ */ A('<p>Attempts: <span id="attempts"> </span> </p>'), zl = /* @__PURE__ */ A('<header class="message-header"><h2> </h2> <div class="challenge-metadata"><span> </span><span> </span><!></div> <!> <!></header> <div class="message-body"><!></div> <!> <div class="attachments"></div> <div id="hints"></div> <form class="reply"><label for="flag">Reply with flag</label> <input id="flag" name="submission" autocomplete="off" required=""/> <button type="submit">Send</button> <div id="submission-status" role="status" aria-atomic="true"><!></div> <!></form>', 1);
function Yl(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(""), a = /* @__PURE__ */ H(!1), n = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(""), s = /* @__PURE__ */ H(ge(Fe(() => e.challenge.attempts))), o = /* @__PURE__ */ H(ge(Fe(() => e.challenge.solves))), f = !0, c = /* @__PURE__ */ de(() => i(n) || (e.challenge.solved_by_me ? "Correct flag received." : "")), v = /* @__PURE__ */ de(() => i(l) || (i(a) ? "pending" : e.challenge.solved_by_me ? "success" : ""));
  ha(() => {
    f = !1;
  });
  const u = /* @__PURE__ */ de(() => new DOMParser().parseFromString(e.challenge.view || "", "text/html").querySelector(".challenge-desc")?.innerHTML);
  function h(ee) {
    const N = ee.split("/").pop().split("?")[0];
    try {
      return decodeURIComponent(N);
    } catch {
      return N;
    }
  }
  async function _(ee) {
    if (ee.preventDefault(), !i(a)) {
      x(a, !0), x(n, "Sending..."), x(l, "");
      try {
        const N = await Se("/challenges/attempt", { challenge_id: e.challenge.id, submission: i(r) });
        if (!f) return;
        x(n, N.message, !0);
        const Y = e.challenge.type === "delayed" && N.status === "incorrect" && /^Your submission has been taken(?:\.|$)/.test(N.message || "");
        if (x(l, ["correct", "already_solved"].includes(N.status) ? "success" : Y ? "info" : "error", !0), N.status === "authentication_required" && (location.href = `${window.init.urlRoot}/login?next=${encodeURIComponent(location.pathname + location.hash)}`), N.status === "correct" && x(r, ""), e.challenge.max_attempts || ["correct", "already_solved"].includes(N.status)) {
          const ae = await Se(`/challenges/${e.challenge.id}`);
          if (!f) return;
          x(s, ae.attempts, !0), x(o, ae.solves, !0);
        }
        await e.onattempt(N);
      } catch (N) {
        f && (x(n, N.message, !0), x(l, "error"));
      } finally {
        x(a, !1);
      }
    }
  }
  var m = zl(), T = ue(m), g = E(T), C = U(g, !0), q = d(g, 2), z = E(q), O = U(z), y = d(z), j = U(y), w = d(y);
  Dl(w, {
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
  var k = d(q, 2);
  {
    var P = (ee) => {
      var N = jl(), Y = d(E(N));
      ve(Y, 17, () => e.challenge.tags, be, (ae, ce) => {
        var _e = Fl(), we = U(_e, !0);
        L(() => M(we, typeof i(ce) == "string" ? i(ce) : i(ce).value)), p(ae, _e);
      }), p(ee, N);
    };
    V(k, (ee) => {
      e.challenge.tags?.length && ee(P);
    });
  }
  var B = d(k, 2);
  {
    var I = (ee) => {
      var N = ql(), Y = U(N);
      L(() => M(Y, `From: ${e.challenge.attribution ?? ""}`)), p(ee, N);
    };
    V(B, (ee) => {
      e.challenge.attribution && ee(I);
    });
  }
  var b = d(T, 2), S = E(b);
  {
    var D = (ee) => {
      var N = dt(), Y = ue(N);
      yt(Y, () => i(u)), p(ee, N);
    }, Z = (ee) => {
      var N = Qe();
      L(() => M(N, e.challenge.description)), p(ee, N);
    };
    V(S, (ee) => {
      i(u) ? ee(D) : ee(Z, -1);
    });
  }
  var re = d(b, 2);
  {
    var Q = (ee) => {
      var N = Bl(), Y = d(E(N)), ae = U(Y, !0);
      L(() => M(ae, e.challenge.connection_info)), p(ee, N);
    };
    V(re, (ee) => {
      e.challenge.connection_info && ee(Q);
    });
  }
  var X = d(re, 2);
  ve(X, 21, () => e.challenge.files || [], be, (ee, N) => {
    var Y = Ul(), ae = d(E(Y));
    L(
      (ce) => {
        W(Y, "href", i(N)), M(ae, ` ${ce ?? ""}`);
      },
      [() => h(i(N))]
    ), p(ee, Y);
  });
  var $ = d(X, 2);
  ve($, 21, () => e.challenge.hints || [], (ee) => ee.id, (ee, N) => {
    Cl(ee, {
      get hint() {
        return i(N);
      }
    });
  });
  var se = d($, 2), J = d(E(se), 2), F = d(J, 2), R = d(F, 2), K = E(R);
  {
    var oe = (ee) => {
      var N = Hl(), Y = ue(N), ae = d(Y), ce = U(ae, !0);
      L(() => {
        Le(Y, 1, `fas ${i(v) === "success" ? "fa-check-circle" : i(v) === "error" ? "fa-times-circle" : i(v) === "info" ? "fa-info-circle" : "fa-paper-plane"}`), M(ce, i(c));
      }), p(ee, N);
    };
    V(K, (ee) => {
      i(c) && ee(oe);
    });
  }
  var Ae = d(R, 2);
  {
    var Ce = (ee) => {
      var N = Vl(), Y = d(E(N)), ae = U(Y, !0), ce = d(Y);
      L(() => {
        M(ae, i(s)), M(ce, ` / ${e.challenge.max_attempts ?? ""}`);
      }), p(ee, N);
    };
    V(Ae, (ee) => {
      e.challenge.max_attempts && ee(Ce);
    });
  }
  L(() => {
    M(C, e.challenge.name), M(O, `Category: ${e.challenge.category ?? ""}`), M(j, `Points: ${e.challenge.value ?? ""}`), F.disabled = i(a), Le(R, 1, `submission-feedback ${i(v)}`), W(R, "hidden", !i(c));
  }), ct("submit", se, _), Sr(J, () => i(r), (ee) => x(r, ee)), p(t, m), Me();
}
var Wl = /* @__PURE__ */ A('<hr class="folder-divider"/>'), Gl = /* @__PURE__ */ A('<!> <button type="button"><i aria-hidden="true"></i> </button>', 1), Xl = /* @__PURE__ */ A('<div class="express-toolbar"><button id="all-challenges" type="button"><i class="fas fa-inbox" aria-hidden="true"></i> All Challenges</button> <button id="help-button" type="button"><i class="fas fa-question-circle" aria-hidden="true"></i> Help</button> <label for="search">Search</label><div class="express-search"><i class="fas fa-search" aria-hidden="true"></i><input id="search" type="search" placeholder="Find a challenge"/></div></div> <div class="express-address">Address <span id="address"> </span></div> <div class="express-workspace"><aside class="express-sidebar" aria-label="Challenge categories"><h2>Folders</h2> <div id="folders"></div> <p id="progress" aria-live="polite"> </p></aside> <section class="express-main" aria-label="Challenges"><h1 id="folder-heading"> </h1> <p id="board-status" role="status"> </p> <button id="retry" type="button">Try again</button> <!> <section id="reader" aria-label="Challenge message"><button id="back" type="button">Back to challenges</button> <div id="message"><!></div></section></section></div> <dialog id="help-dialog"><h2> </h2> <p>Open a challenge to read its message. Reply with the flag to solve it.</p> <p>Unsolved challenges appear as unread mail. Solved challenges appear as read mail.</p> <p>Drag column headers to reorder them, or their edges to resize. With a header focused, use Alt + Left/Right to reorder.</p> <form method="dialog"><button>Close</button></form></dialog>', 1);
function Jl(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(ge([])), a = /* @__PURE__ */ H("All Challenges"), n = /* @__PURE__ */ H("all"), l = /* @__PURE__ */ H(""), s = /* @__PURE__ */ H(null), o = /* @__PURE__ */ H(!1), f = /* @__PURE__ */ H(null), c = /* @__PURE__ */ H(""), v = /* @__PURE__ */ H(!0), u = /* @__PURE__ */ H(""), h = /* @__PURE__ */ H(""), _ = 0, m = 0, T, g, C = /* @__PURE__ */ de(() => i(r).filter((G) => !G.solved_by_me)), q = /* @__PURE__ */ de(() => [...new Set(i(r).map((G) => G.category))]), z = /* @__PURE__ */ de(() => i(n) === "category" ? i(r).filter((G) => G.category === i(a)) : i(r)), O = /* @__PURE__ */ de(() => [
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
    ...i(q).map((G) => ({
      name: G,
      type: "category",
      count: i(C).filter((ne) => ne.category === G).length
    }))
  ]), y = /* @__PURE__ */ de(() => i(r).filter((G) => (i(n) === "all" || (i(n) === "unread" ? !G.solved_by_me : G.category === i(a))) && `${G.name} ${G.category}`.toLowerCase().includes(i(l).toLowerCase().trim())));
  jt(() => {
    const G = `${e.config.appName} - ${i(a)}`;
    document.title = G, document.getElementById("window-title").textContent = G;
  });
  async function j() {
    const G = ++m;
    x(v, !0), x(u, "");
    try {
      const ne = await Se("/challenges");
      G === m && x(r, ne.sort((fe, ye) => fe.id - ye.id), !0);
    } catch (ne) {
      G === m && x(u, ne.message, !0);
    } finally {
      G === m && x(v, !1);
    }
  }
  async function w(G = !0) {
    _++, x(o, !1), x(f, null), x(c, ""), history.replaceState(null, "", location.pathname + location.search), await Er(), G && document.querySelector(`.open-challenge[data-id="${i(s)}"]`)?.focus();
  }
  function k(G) {
    x(a, G.name, !0), x(n, G.type, !0), x(h, ""), w(!1);
  }
  async function P(G) {
    const ne = ++_;
    x(s, G, !0), x(o, !0), x(f, null), x(c, ""), x(h, "");
    try {
      const fe = await Se(`/challenges/${G}`);
      if (ne !== _) return;
      x(f, fe, !0), history.replaceState(null, "", `#challenge-${G}`), await Er(), g?.focus();
    } catch (fe) {
      ne === _ && x(c, fe.message, !0);
    }
  }
  async function B(G) {
    const ne = _;
    await j(), ne === _ && i(n) === "unread" && ["correct", "already_solved"].includes(G.status) && !i(u) && (await w(!1), x(h, "Challenge solved. Removed from Unsolved Challenges."), document.querySelector('#folders [data-view="unread"]')?.focus());
  }
  xt(() => {
    const G = location.hash.match(/-(\d+)$/);
    j().then(() => {
      G && _ === 0 && P(Number(G[1]));
    });
  }), ha(() => {
    _++, m++;
  });
  var I = Xl(), b = ue(I), S = E(b), D = d(S, 2), Z = d(D, 3), re = d(E(Z)), Q = d(b, 2), X = d(E(Q)), $ = U(X), se = d(Q, 2), J = E(se), F = d(E(J), 2);
  ve(F, 23, () => i(O), (G) => `${G.type}:${G.name}`, (G, ne, fe) => {
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
    L(() => {
      W(pe, "data-view", i(ne).type), W(pe, "data-folder", i(ne).name), Oe = Le(pe, 1, "", null, Oe, {
        active: i(n) === i(ne).type && i(a) === i(ne).name
      }), Le(lt, 1, `fas fa-${i(ne).type === "unread" ? "envelope" : "folder"}`), M(gt, `${i(ne).name ?? ""}${i(ne).type !== "all" && i(ne).count > 0 ? ` (${i(ne).count})` : ""}`);
    }), he("click", pe, () => k(i(ne))), p(G, ye);
  });
  var R = d(F, 2), K = U(R), oe = d(J, 2), Ae = E(oe), Ce = U(Ae, !0), ee = d(Ae, 2), N = U(ee, !0), Y = d(ee, 2), ae = d(Y, 2);
  {
    let G = /* @__PURE__ */ de(() => e.config.themeSettings?.challenge_order);
    Sl(ae, {
      get challenges() {
        return i(y);
      },
      get defaultOrder() {
        return i(G);
      },
      onopen: P,
      get hidden() {
        return i(o);
      }
    });
  }
  var ce = d(ae, 2), _e = E(ce);
  Mt(_e, (G) => g = G, () => g);
  var we = d(_e, 2), it = E(we);
  {
    var kt = (G) => {
      var ne = dt(), fe = ue(ne);
      {
        var ye = (pe) => {
          var Oe = Qe();
          L(() => M(Oe, i(c))), p(pe, Oe);
        }, je = (pe) => {
          var Oe = dt(), lt = ue(Oe);
          $i(lt, () => i(f).id, (gt) => {
            Yl(gt, {
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
      p(G, ne);
    };
    V(it, (G) => {
      i(o) && G(kt);
    });
  }
  var Nt = d(se, 2), Ot = E(Nt), Zt = U(Ot, !0);
  Mt(Nt, (G) => T = G, () => T), L(
    (G) => {
      M($, `Folders / ${i(a) ?? ""}`), M(K, `${G ?? ""} of ${i(z).length ?? ""} challenges solved`), M(Ce, i(a)), M(N, i(u) || (i(v) ? "Loading challenges..." : i(h) || (i(y).length ? "" : "No challenges found."))), W(Y, "hidden", !i(u)), W(ce, "hidden", !i(o)), M(Zt, e.config.appName);
    },
    [
      () => i(z).filter((G) => G.solved_by_me).length
    ]
  ), he("click", S, () => {
    x(l, ""), k(i(O)[0]);
  }), he("click", D, () => T.showModal()), he("input", re, () => {
    x(h, ""), w(!1);
  }), Sr(re, () => i(l), (G) => x(l, G)), he("click", Y, j), he("click", _e, () => w()), p(t, I), Me();
}
nt(["click", "input"]);
function Sn(t, e = !0) {
  if (!e) return;
  const r = t.querySelector(".logon-drag-handle, .window-drag-handle");
  if (!r) return;
  let a;
  const n = [];
  function l(u, h, _) {
    u?.addEventListener(h, _), n.push(() => u?.removeEventListener(h, _));
  }
  function s(u, h) {
    const _ = window.visualViewport, m = _?.offsetLeft || 0, T = _?.offsetTop || 0, g = _?.width || document.documentElement.clientWidth, C = Math.max(0, (_?.height || innerHeight) - (t.classList.contains("express-window") ? 34 : 0));
    t.style.maxWidth = `${g}px`, t.style.maxHeight = `${C}px`;
    const q = t.getBoundingClientRect();
    t.style.left = `${Math.max(m, Math.min(u, m + g - q.width))}px`, t.style.top = `${Math.max(T, Math.min(h, T + C - q.height))}px`;
  }
  const o = t.getBoundingClientRect();
  t.classList.add("is-draggable"), s(o.left, o.top), l(r, "pointerdown", (u) => {
    if (u.button !== 0 || !u.isPrimary) return;
    const h = t.getBoundingClientRect();
    a = { id: u.pointerId, x: u.clientX - h.left, y: u.clientY - h.top }, r.setPointerCapture(u.pointerId), r.classList.add("is-dragging"), u.preventDefault();
  }), l(r, "pointermove", (u) => {
    a?.id === u.pointerId && s(u.clientX - a.x, u.clientY - a.y);
  });
  const f = () => {
    a = null, r.classList.remove("is-dragging");
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
    v.disconnect(), n.forEach((u) => u());
  } };
}
var Kl = /* @__PURE__ */ A('<div role="alert"><span><!></span><button type="button" class="btn-close" aria-label="Close"></button></div>');
function An(t, e) {
  Re(e, !0);
  let r = Wt(e, "errors", 19, () => []), a = Wt(e, "infos", 19, () => []), n = /* @__PURE__ */ H(ge([]));
  var l = dt(), s = ue(l);
  ve(
    s,
    17,
    () => [
      ...a().map((o) => ({ text: o, type: "info" })),
      ...r().map((o) => ({ text: o, type: "danger" }))
    ],
    be,
    (o, f, c) => {
      var v = dt(), u = ue(v);
      {
        var h = (m) => {
          var T = Kl(), g = E(T), C = E(g);
          {
            var q = (y) => {
              var j = dt(), w = ue(j);
              yt(w, () => i(f).text.html), p(y, j);
            }, z = (y) => {
              var j = Qe();
              L(() => M(j, i(f).text.text ?? i(f).text)), p(y, j);
            };
            V(C, (y) => {
              i(f).text.html ? y(q) : y(z, -1);
            });
          }
          var O = d(g);
          L(() => Le(T, 1, `alert alert-${i(f).type ?? ""} alert-dismissible`)), he("click", O, () => x(n, [...i(n), c], !0)), p(m, T);
        }, _ = /* @__PURE__ */ de(() => !i(n).includes(c));
        V(u, (m) => {
          i(_) && m(h);
        });
      }
      p(o, v);
    }
  ), p(t, l), Me();
}
nt(["click"]);
var Zl = /* @__PURE__ */ A('<span class="text-danger" aria-hidden="true">*</span>'), Ql = /* @__PURE__ */ A("<option> </option>"), $l = /* @__PURE__ */ A('<select class="form-select"></select>'), eo = /* @__PURE__ */ A('<input type="checkbox" class="form-check-input"/>'), to = /* @__PURE__ */ A('<textarea class="form-control"></textarea>'), ro = /* @__PURE__ */ A('<input class="form-control"/>'), ao = /* @__PURE__ */ A('<small class="form-text text-muted"> </small>'), no = /* @__PURE__ */ A('<div><label class="form-label"> <!></label> <!> <!></div>');
function _a(t, e) {
  Re(e, !0);
  let r = Wt(e, "compact", 3, !1), a = /* @__PURE__ */ H(ge(Fe(() => e.field.type === "SelectField" ? String(e.field.value ?? "") : e.field.value ?? ""))), n = /* @__PURE__ */ H(ge(Fe(() => e.field.value === !0 || e.field.value === "True" || e.field.value === "true")));
  const l = {
    PasswordField: "password",
    EmailField: "email",
    URLField: "url",
    DateField: "date",
    IntegerField: "number",
    HiddenField: "hidden"
  }, s = /* @__PURE__ */ de(() => e.field.name === "name" ? "username" : e.field.name === "email" ? "email" : e.field.name === "confirm" ? "current-password" : e.field.type === "PasswordField" ? r() ? "current-password" : "new-password" : void 0);
  var o = no();
  let f;
  var c = E(o), v = E(c), u = d(v);
  {
    var h = (O) => {
      var y = Zl();
      p(O, y);
    };
    V(u, (O) => {
      e.field.required && O(h);
    });
  }
  var _ = d(c, 2);
  {
    var m = (O) => {
      var y = $l();
      ve(y, 21, () => e.field.choices, be, (j, w) => {
        var k = /* @__PURE__ */ de(() => Dn(i(w), 2));
        let P = () => i(k)[0], B = () => i(k)[1];
        var I = Ql(), b = U(I, !0), S = {};
        L(
          (D) => {
            M(b, B()), S !== (S = D) && (I.value = (I.__value = S) ?? "");
          },
          [() => String(P())]
        ), p(j, I);
      }), xn(y), L(() => {
        W(y, "id", e.field.id), W(y, "name", e.field.name), y.required = e.field.required;
      }), fl(y, () => i(a), (j) => x(a, j)), p(O, y);
    }, T = (O) => {
      var y = eo();
      y.value = y.__value = "y", L(() => {
        W(y, "id", e.field.id), W(y, "name", e.field.name), y.required = e.field.required;
      }), _l(y, () => i(n), (j) => x(n, j)), p(O, y);
    }, g = (O) => {
      var y = to();
      L(() => {
        W(y, "id", e.field.id), W(y, "name", e.field.name), y.required = e.field.required;
      }), Sr(y, () => i(a), (j) => x(a, j)), p(O, y);
    }, C = (O) => {
      var y = ro();
      L(() => {
        W(y, "id", e.field.id), W(y, "name", e.field.name), W(y, "type", l[e.field.type] || "text"), W(y, "autocomplete", i(s)), y.required = e.field.required;
      }), Sr(y, () => i(a), (j) => x(a, j)), p(O, y);
    };
    V(_, (O) => {
      e.field.type === "SelectField" ? O(m) : e.field.type === "BooleanField" ? O(T, 1) : e.field.type === "TextAreaField" ? O(g, 2) : O(C, -1);
    });
  }
  var q = d(_, 2);
  {
    var z = (O) => {
      var y = ao(), j = U(y, !0);
      L(() => M(j, e.field.description)), p(O, y);
    };
    V(q, (O) => {
      e.field.description && !r() && O(z);
    });
  }
  L(() => {
    f = Le(o, 1, "", null, f, { "logon-field": r(), "mb-3": !r() }), W(c, "for", e.field.id), M(v, e.field.label);
  }), p(t, o), Me();
}
var io = /* @__PURE__ */ A("<a>Forgot your password?</a>"), lo = /* @__PURE__ */ A('<!> <form method="post" accept-charset="utf-8"><!> <input type="hidden" name="nonce"/> <div><!> <button id="_submit" name="_submit" type="submit" class="btn btn-primary xp-default"> </button></div></form>', 1), oo = /* @__PURE__ */ A('<img class="logon-icon" alt=""/>'), so = /* @__PURE__ */ zi('<svg class="logon-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="9" width="50" height="36" rx="2" fill="#eef4ff" stroke="#153e80" stroke-width="3"></rect><path d="M12 14h40v25H12z" fill="#245bb4"></path><path d="M26 46v7h12v-7M18 55h28" fill="none" stroke="#153e80" stroke-width="3"></path><rect x="24" y="23" width="16" height="12" rx="1" fill="#ffe4a0"></rect><path d="M28 23v-3a4 4 0 0 1 8 0v3" fill="none" stroke="#ffe4a0" stroke-width="3"></path></svg>'), fo = /* @__PURE__ */ A('<a class="btn logon-oauth">Log on with Major League Cyber</a>'), uo = /* @__PURE__ */ A('<footer class="logon-footer">Need an account? <a>Register</a></footer>'), co = /* @__PURE__ */ A('<div class="login-stage"><section class="xp-logon" aria-labelledby="logon-title"><header class="express-title logon-drag-handle" tabindex="0" role="button" aria-label="Move login window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><i class="fas fa-key" aria-hidden="true"></i> Log On</header> <div class="logon-banner"><!> <div><h1 id="logon-title"> </h1><p> </p></div></div> <div class="logon-content"><p>Enter your user name and password to continue.</p><!> <!></div> <!></section></div>'), vo = /* @__PURE__ */ A("<p> </p>"), ho = /* @__PURE__ */ A("<p> </p> <p>Please click the link in that email to confirm your account.</p><p>If the email does not arrive, check your spam folder or contact an administrator to manually verify your account.</p>", 1), _o = /* @__PURE__ */ A('<a class="btn btn-secondary mb-3">Log on with Major League Cyber</a>'), go = /* @__PURE__ */ A('<a class="btn btn-secondary mt-3">Change Email Address</a>'), po = /* @__PURE__ */ A('<p class="text-muted mt-3">By registering, you agree to the <a target="_blank" rel="noopener">privacy policy</a> and <a target="_blank" rel="noopener">terms of service</a>.</p>'), mo = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1> </h1></div></div> <div class="container"><div class="auth-page"><!> <!> <!> <!> <!> <!></div></div>', 1);
function bo(t, e) {
  Re(e, !0);
  const r = (v) => {
    var u = lo(), h = ue(u);
    An(h, {
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
    ve(T, 17, () => e.page.fields || [], be, (w, k) => {
      {
        let P = /* @__PURE__ */ de(() => e.page.kind === "login");
        _a(w, {
          get field() {
            return i(k);
          },
          get compact() {
            return i(P);
          }
        });
      }
    });
    var g = d(T, 2), C = d(g, 2);
    let q;
    var z = E(C);
    {
      var O = (w) => {
        var k = io();
        L(() => W(k, "href", `${i(n)}/reset_password`)), p(w, k);
      };
      V(z, (w) => {
        e.page.kind === "login" && w(O);
      });
    }
    var y = d(z, 2), j = U(y, !0);
    L(() => {
      m = Le(_, 1, "", null, m, { "logon-form": e.page.kind === "login" }), kn(g, e.config.csrfNonce), q = Le(C, 1, "", null, q, {
        "logon-actions": e.page.kind === "login",
        "auth-actions": e.page.kind !== "login"
      }), y.disabled = i(a), M(j, i(a) ? "Please wait..." : e.page.kind === "login" ? "Log On" : e.page.kind === "confirm" ? "Send Confirmation Email" : "Submit");
    }), ct("submit", _, () => x(a, !0)), p(v, u);
  };
  let a = /* @__PURE__ */ H(!1);
  const n = /* @__PURE__ */ de(() => e.config.urlRoot), l = {
    login: "Log On",
    register: "Register",
    reset: "Reset Password",
    confirm: "Confirm"
  };
  xt(() => {
    e.page.kind === "login" && document.getElementById("name")?.focus();
    const v = () => x(a, !1);
    return window.addEventListener("pageshow", v), () => window.removeEventListener("pageshow", v);
  });
  var s = dt(), o = ue(s);
  {
    var f = (v) => {
      var u = co(), h = E(u), _ = d(E(h), 2), m = E(_);
      {
        var T = (b) => {
          var S = oo();
          L(() => W(S, "src", e.site.logo)), p(b, S);
        }, g = (b) => {
          var S = so();
          p(b, S);
        };
        V(m, (b) => {
          e.site.logo ? b(T) : b(g, -1);
        });
      }
      var C = d(m, 2), q = E(C), z = U(q, !0), O = d(q), y = U(O), j = d(_, 2), w = d(E(j));
      r(w);
      var k = d(w, 2);
      {
        var P = (b) => {
          var S = fo();
          L(() => W(S, "href", e.site.oauth)), p(b, S);
        };
        V(k, (b) => {
          e.site.oauth && b(P);
        });
      }
      var B = d(j, 2);
      {
        var I = (b) => {
          var S = uo(), D = d(E(S));
          L(() => W(D, "href", `${i(n)}/register`)), p(b, S);
        };
        V(B, (b) => {
          e.site.registration && b(I);
        });
      }
      Yt(h, (b) => Sn?.(b)), L(() => {
        M(z, e.site.appName), M(y, `Log on to ${e.site.eventName ?? ""}`);
      }), p(v, u);
    }, c = (v) => {
      var u = mo(), h = ue(u), _ = E(h), m = E(_), T = U(m, !0), g = d(h, 2), C = E(g), q = E(C);
      {
        var z = (S) => {
          var D = vo(), Z = U(D, !0);
          L(() => M(Z, e.page.mode === "set" ? "You can now reset the password for your account and log in. Please enter a new password below." : "Please provide the email address associated with your account below.")), p(S, D);
        };
        V(q, (S) => {
          e.page.kind === "reset" && S(z);
        });
      }
      var O = d(q, 2);
      {
        var y = (S) => {
          var D = ho(), Z = ue(D), re = U(Z, !0);
          L(() => M(re, e.page.initial ? "To send a confirmation email to your email address, please click the button below." : "We've sent a confirmation email to your email address.")), p(S, D);
        };
        V(O, (S) => {
          e.page.kind === "confirm" && S(y);
        });
      }
      var j = d(O, 2);
      {
        var w = (S) => {
          var D = _o();
          L(() => W(D, "href", e.site.oauth)), p(S, D);
        };
        V(j, (S) => {
          e.page.kind === "register" && e.site.oauth && S(w);
        });
      }
      var k = d(j, 2);
      r(k);
      var P = d(k, 2);
      {
        var B = (S) => {
          var D = go();
          L(() => W(D, "href", `${i(n)}/settings`)), p(S, D);
        };
        V(P, (S) => {
          e.page.kind === "confirm" && S(B);
        });
      }
      var I = d(P, 2);
      {
        var b = (S) => {
          var D = po(), Z = d(E(D)), re = d(Z, 2);
          L(() => {
            W(Z, "href", e.page.privacy), W(re, "href", e.page.terms);
          }), p(S, D);
        };
        V(I, (S) => {
          e.page.kind === "register" && e.page.showTerms && S(b);
        });
      }
      L(() => M(T, l[e.page.kind])), p(v, u);
    };
    V(o, (v) => {
      e.page.kind === "login" ? v(f) : v(c, -1);
    });
  }
  p(t, s), Me();
}
var yo = /* @__PURE__ */ A('<div class="alert alert-danger" role="alert"> </div>'), wo = /* @__PURE__ */ A('<div class="alert alert-success" role="status"> </div>'), xo = /* @__PURE__ */ A('<tr><td> </td><td> </td><td> </td><td><button class="btn"><i class="fas fa-times" aria-hidden="true"></i></button></td></tr>'), ko = /* @__PURE__ */ A('<div class="table-responsive"><table class="table"><thead><tr><th>Created</th><th>Expiration</th><th>Description</th><th>Delete</th></tr></thead><tbody></tbody></table></div>'), Eo = /* @__PURE__ */ A("<p>No active tokens.</p>"), So = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1>Settings</h1></div></div> <div class="container settings-layout"><div class="nav flex-column nav-pills" aria-label="Settings sections"><button id="settings-profile-tab">Profile</button> <button id="settings-tokens-tab">Access Tokens</button></div> <div><!> <!> <section id="profile"><form method="post"><!> <button type="submit" id="_submit" class="btn btn-primary"> </button></form></section> <section id="tokens"><form><div class="mb-3"><label for="expiration" class="form-label">Expiration</label><input id="expiration" name="expiration" type="date" class="form-control"/></div> <div class="mb-3"><label for="description" class="form-label">Usage Description</label><textarea id="description" name="description" class="form-control" rows="3"></textarea></div> <button type="submit" class="btn btn-primary">Generate</button></form> <h2 class="h4 mt-4">Active Tokens</h2> <!></section></div></div> <dialog class="express-dialog"><h2>API Key Generated</h2><p>Please copy your API key. It will not be shown again!</p> <input class="form-control" aria-label="API key" readonly=""/> <div class="dialog-actions"><button class="btn">Copy</button><button class="btn btn-primary">Got it!</button></div></dialog>', 1);
function Ao(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H("profile"), a = /* @__PURE__ */ H(!1), n = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(""), s = /* @__PURE__ */ H(ge(Fe(() => e.page.tokens))), o = /* @__PURE__ */ H(""), f, c;
  function v(N) {
    const Y = Object.fromEntries(new FormData(N));
    for (const ae of N.querySelectorAll('input[type="checkbox"]')) Y[ae.name] = ae.checked;
    return Y;
  }
  function u(N) {
    c = v(N);
  }
  async function h(N) {
    if (N.preventDefault(), i(a)) return;
    x(a, !0), x(n, ""), x(l, "");
    const Y = N.currentTarget, ae = v(Y), ce = {};
    for (const [_e, we] of Object.entries(ae)) {
      if (_e === "_submit" || we === c[_e]) continue;
      const it = /^fields\[(\d+)\]$/.exec(_e);
      it ? (ce.fields ||= []).push({ field_id: Number(it[1]), value: we }) : ce[_e] = we;
    }
    try {
      await Se("/users/me", ce, { method: "PATCH" }), x(l, "Your profile has been updated.");
      for (const _e of Y.querySelectorAll('input[type="password"]')) _e.value = "";
      c = v(Y);
    } catch (_e) {
      x(n, _e.message, !0);
    } finally {
      x(a, !1);
    }
  }
  async function _(N) {
    if (N.preventDefault(), i(a)) return;
    x(a, !0), x(n, ""), x(l, "");
    const Y = v(N.currentTarget);
    Y.expiration || delete Y.expiration;
    try {
      const ae = await Se("/tokens", Y);
      x(o, ae.value, !0);
      const { value: ce, ..._e } = ae;
      x(s, [...i(s), _e], !0), f.showModal();
    } catch (ae) {
      x(n, ae.message, !0);
    } finally {
      x(a, !1);
    }
  }
  async function m(N) {
    if (!(i(a) || !confirm("Are you sure you want to delete this token?"))) {
      x(a, !0), x(n, ""), x(l, "");
      try {
        await Se(`/tokens/${N}`, void 0, { method: "DELETE" }), x(s, i(s).filter((Y) => Y.id !== N), !0);
      } catch (Y) {
        x(n, Y.message, !0);
      } finally {
        x(a, !1);
      }
    }
  }
  async function T() {
    try {
      await navigator.clipboard.writeText(i(o)), x(l, "API key copied.");
    } catch {
      x(l, "Select and copy the API key below.");
    }
  }
  function g(N) {
    x(r, N, !0), x(n, ""), x(l, "");
  }
  var C = So(), q = d(ue(C), 2), z = E(q), O = E(z);
  let y;
  var j = d(O, 2);
  let w;
  var k = d(z, 2), P = E(k);
  {
    var B = (N) => {
      var Y = yo(), ae = U(Y, !0);
      L(() => M(ae, i(n))), p(N, Y);
    };
    V(P, (N) => {
      i(n) && N(B);
    });
  }
  var I = d(P, 2);
  {
    var b = (N) => {
      var Y = wo(), ae = U(Y, !0);
      L(() => M(ae, i(l))), p(N, Y);
    };
    V(I, (N) => {
      i(l) && N(b);
    });
  }
  var S = d(I, 2), D = E(S), Z = E(D);
  ve(Z, 17, () => e.page.fields, be, (N, Y) => {
    _a(N, {
      get field() {
        return i(Y);
      }
    });
  });
  var re = d(Z, 2), Q = U(re, !0);
  Yt(D, (N) => u?.(N));
  var X = d(S, 2), $ = E(X), se = d(E($), 4), J = d($, 4);
  {
    var F = (N) => {
      var Y = ko(), ae = E(Y), ce = d(E(ae));
      ve(ce, 21, () => i(s), be, (_e, we) => {
        var it = xo(), kt = E(it), Nt = U(kt, !0), Ot = d(kt), Zt = U(Ot, !0), G = d(Ot), ne = U(G, !0), fe = d(G), ye = U(fe);
        L(
          (je, Ne) => {
            M(Nt, je), M(Zt, Ne), M(ne, i(we).description), W(ye, "aria-label", `Delete token ${i(we).description || i(we).id}`), ye.disabled = i(a);
          },
          [
            () => i(we).created ? new Date(i(we).created).toLocaleDateString() : "",
            () => i(we).expiration ? new Date(i(we).expiration).toLocaleDateString() : "Never"
          ]
        ), he("click", ye, () => m(i(we).id)), p(_e, it);
      }), p(N, Y);
    }, R = (N) => {
      var Y = Eo();
      p(N, Y);
    };
    V(J, (N) => {
      i(s).length ? N(F) : N(R, -1);
    });
  }
  var K = d(q, 2), oe = d(E(K), 3), Ae = d(oe, 2), Ce = E(Ae), ee = d(Ce);
  Mt(K, (N) => f = N, () => f), L(() => {
    y = Le(O, 1, "nav-link", null, y, { active: i(r) === "profile" }), W(O, "aria-pressed", i(r) === "profile"), w = Le(j, 1, "nav-link", null, w, { active: i(r) === "tokens" }), W(j, "aria-pressed", i(r) === "tokens"), W(S, "hidden", i(r) !== "profile"), re.disabled = i(a), M(Q, i(a) ? "Saving..." : "Submit"), W(X, "hidden", i(r) !== "tokens"), se.disabled = i(a), kn(oe, i(o));
  }), he("click", O, () => g("profile")), he("click", j, () => g("tokens")), ct("submit", D, h), ct("submit", $, _), ct("close", K, () => x(o, "")), he("click", oe, (N) => N.currentTarget.select()), he("click", Ce, T), he("click", ee, () => f.close()), p(t, C), Me();
}
nt(["click"]);
var Co = /* @__PURE__ */ A("<a> </a>"), To = /* @__PURE__ */ A('<span class="badge bg-secondary ms-2"> </span>'), Lo = /* @__PURE__ */ A('<a class="badge bg-primary ms-2">Official</a>'), Ro = /* @__PURE__ */ A('<a target="_blank" rel="noopener"><i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Mo = /* @__PURE__ */ A("<tr><td><!> <!> <!></td><td><!></td><td> </td><td> </td></tr>"), No = /* @__PURE__ */ A('<p role="status">No users match your search.</p>'), Oo = /* @__PURE__ */ A("<option> </option>"), Po = /* @__PURE__ */ A('<label class="pagination-control">Page <select class="page-select form-select"></select> </label>'), Io = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1>Users</h1></div></div> <div class="container"><form method="get" class="user-search"><!> <button type="submit" class="btn btn-primary"><i class="fas fa-search" aria-hidden="true"></i> Search</button></form> <div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>User</th><th>Website</th><th>Affiliation</th><th>Country</th></tr></thead><tbody></tbody></table></div> <!> <!></div>', 1);
function Do(t, e) {
  Re(e, !0);
  function r(m) {
    const T = new URL(location.href);
    T.searchParams.set("page", m.currentTarget.value), location.assign(T);
  }
  var a = Io(), n = d(ue(a), 2), l = E(n), s = E(l);
  ve(s, 17, () => e.page.fields, be, (m, T) => {
    _a(m, {
      get field() {
        return i(T);
      }
    });
  });
  var o = d(l, 2), f = E(o), c = d(E(f));
  ve(c, 21, () => e.page.users, be, (m, T) => {
    var g = Mo(), C = E(g), q = E(C);
    {
      var z = (Q) => {
        var X = Co(), $ = U(X, !0);
        L(() => {
          W(X, "href", `${e.config.urlRoot}/users/${i(T).id}`), M($, i(T).name);
        }), p(Q, X);
      }, O = (Q) => {
        var X = Qe();
        L(() => M(X, i(T).name)), p(Q, X);
      };
      V(q, (Q) => {
        e.page.scoresVisible ? Q(z) : Q(O, -1);
      });
    }
    var y = d(q, 2);
    {
      var j = (Q) => {
        var X = To(), $ = U(X, !0);
        L(() => M($, i(T).bracket)), p(Q, X);
      };
      V(y, (Q) => {
        i(T).bracket && Q(j);
      });
    }
    var w = d(y, 2);
    {
      var k = (Q) => {
        var X = Lo();
        L(($) => W(X, "href", $), [
          () => `https://majorleaguecyber.org/u/${encodeURIComponent(i(T).name)}`
        ]), p(Q, X);
      };
      V(w, (Q) => {
        i(T).official && Q(k);
      });
    }
    var P = d(C), B = E(P);
    {
      var I = (Q) => {
        var X = Ro();
        L(() => {
          W(X, "href", i(T).website), W(X, "aria-label", `Website for ${i(T).name}`);
        }), p(Q, X);
      }, b = /* @__PURE__ */ de(() => /^https?:\/\//i.test(i(T).website || ""));
      V(B, (Q) => {
        i(b) && Q(I);
      });
    }
    var S = d(P), D = U(S, !0), Z = d(S), re = U(Z, !0);
    L(() => {
      M(D, i(T).affiliation || ""), M(re, i(T).country);
    }), p(m, g);
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
      var T = Po(), g = d(E(T));
      ve(g, 21, () => Array.from({ length: e.page.pages }, (z, O) => O + 1), be, (z, O) => {
        var y = Oo(), j = U(y, !0), w = {};
        L(() => {
          M(j, i(O)), w !== (w = i(O)) && (y.value = (y.__value = w) ?? "");
        }), p(z, y);
      });
      var C;
      xn(g);
      var q = d(g);
      L(() => {
        C !== (C = e.page.page) && (g.value = (g.__value = C) ?? "", va(g, C)), M(q, ` of ${e.page.pages ?? ""} (${e.page.total ?? ""} users)`);
      }), he("change", g, r), p(m, T);
    };
    V(h, (m) => {
      e.page.pages > 1 && m(_);
    });
  }
  p(t, a), Me();
}
nt(["change"]);
const ea = ["#194c9f", "#8a2459", "#25632a", "#8a480c", "#623e9d", "#006473", "#a12a20", "#4c5872", "#615600", "#763c36"];
var Fo = /* @__PURE__ */ A('<p role="status"> </p>'), jo = /* @__PURE__ */ A('<!> <div id="score-graph" class="score-chart" role="img"></div>', 1);
function Cn(t, e) {
  Re(e, !0);
  let r = Wt(e, "title", 3, "Score over Time"), a = Wt(e, "series", 19, () => []), n, l = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H("");
  xt(() => {
    let u = !0;
    const h = new ResizeObserver(() => i(l)?.resize());
    return import("./chart-ClLr2WTg.js").then(({ init: _ }) => {
      u && (x(l, _(n)), h.observe(n));
    }).catch(() => {
      u && x(s, "The chart could not load. The scores are available in the table below.");
    }), () => {
      u = !1, h.disconnect(), i(l)?.dispose();
    };
  }), jt(() => {
    if (!i(l)) return;
    const u = "#18202a";
    i(l).setOption(
      {
        backgroundColor: "#fff",
        color: ea,
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
        series: a().map((h, _) => ({
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
      L(() => M(_, i(s))), p(u, h);
    };
    V(f, (u) => {
      i(s) && u(c);
    });
  }
  var v = d(f, 2);
  Mt(v, (u) => n = u, () => n), L(() => W(v, "aria-label", `${r()}. Scores are also listed in the table below.`)), p(t, o), Me();
}
var qo = /* @__PURE__ */ A('<a class="badge bg-primary">Official</a>'), Bo = /* @__PURE__ */ A('<span class="badge bg-primary"> </span>'), Uo = /* @__PURE__ */ A("<p> </p>"), Ho = /* @__PURE__ */ A("<h2> <small>place</small></h2>"), Vo = /* @__PURE__ */ A("<h2> <small>points</small></h2>"), zo = /* @__PURE__ */ A('<a target="_blank" rel="noopener">Website <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Yo = /* @__PURE__ */ A('<p role="status">Loading profile...</p>'), Wo = /* @__PURE__ */ A('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), Go = /* @__PURE__ */ A('<div class="progress-bar"></div>'), Xo = /* @__PURE__ */ A('<span><span class="legend-swatch"></span> </span>'), Jo = /* @__PURE__ */ A('<div><i aria-hidden="true"></i><h4> </h4><p> </p><p> </p><strong> </strong></div>'), Ko = /* @__PURE__ */ A('<section aria-labelledby="awards-heading"><h3 id="awards-heading">Awards</h3><div class="profile-awards"></div></section>'), Zo = /* @__PURE__ */ A("<tr><td><a> </a></td><td> </td><td> </td><td><time> </time></td></tr>"), Qo = /* @__PURE__ */ A('<section class="profile-graphs" aria-label="Score breakdowns"><div class="profile-breakdowns"><div><div class="progress" aria-hidden="true"><div class="progress-bar"></div><div class="progress-bar"></div></div><p> </p></div> <div><div class="progress" aria-hidden="true"></div><div class="category-legend"></div></div></div> <!></section> <!> <h3>Solves</h3><div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Challenge</th><th>Category</th><th>Value</th><th>Time</th></tr></thead><tbody></tbody></table></div>', 1), $o = /* @__PURE__ */ A('<h3 class="text-muted text-center">No solves yet</h3>'), es = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1> </h1> <div class="profile-badges"><!> <!></div> <!> <!> <!> <!></div></div> <div class="container"><!> <!> <!></div>', 1);
function ts(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(ge([])), a = /* @__PURE__ */ H(ge([])), n = /* @__PURE__ */ H(0), l = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H(!0), o = /* @__PURE__ */ H(""), f = 0;
  const c = /* @__PURE__ */ de(() => i(r).length + i(n) ? 100 * i(r).length / (i(r).length + i(n)) : 0), v = /* @__PURE__ */ de(() => {
    const F = /* @__PURE__ */ new Map();
    return i(r).forEach((R) => F.set(R.challenge.category, (F.get(R.challenge.category) || 0) + 1)), [...F].map(([R, K], oe) => ({
      name: R,
      count: K,
      percent: 100 * K / i(r).length,
      color: ea[oe % ea.length]
    }));
  }), u = /* @__PURE__ */ de(() => {
    let F = 0;
    return [
      {
        name: e.page.name,
        data: [...i(r), ...i(a)].sort((R, K) => new Date(R.date) - new Date(K.date)).map((R) => [
          new Date(R.date).getTime(),
          F += R.challenge?.value ?? R.value
        ])
      }
    ];
  });
  async function h() {
    const F = ++f;
    x(o, "");
    try {
      const R = e.page.private ? "me" : e.page.id, [K, oe, Ae, Ce] = await Promise.all([
        Se(`/users/${R}/solves`),
        Se(`/users/${R}/fails`, void 0, { full: !0 }),
        Se(`/users/${R}/awards`),
        e.page.private ? Se("/users/me") : Promise.resolve(e.page)
      ]);
      if (F !== f) return;
      x(r, K, !0), x(n, oe.meta.count, !0), x(a, Ae, !0), x(l, Ce.score, !0);
    } catch (R) {
      F === f && x(o, R.message, !0);
    } finally {
      F === f && x(s, !1);
    }
  }
  xt(() => (h(), () => f++));
  var _ = es(), m = ue(_), T = E(m), g = E(T), C = U(g, !0), q = d(g, 2), z = E(q);
  {
    var O = (F) => {
      var R = qo();
      L((K) => W(R, "href", K), [
        () => `https://majorleaguecyber.org/u/${encodeURIComponent(e.page.name)}`
      ]), p(F, R);
    };
    V(z, (F) => {
      e.page.official && F(O);
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
    (F, R) => {
      var K = Bo(), oe = U(K, !0);
      L(() => M(oe, i(R))), p(F, K);
    }
  );
  var j = d(q, 2);
  ve(j, 17, () => e.page.fields, be, (F, R) => {
    var K = Uo(), oe = U(K);
    L(() => M(oe, `${i(R).name ?? ""}: ${i(R).value ?? ""}`)), p(F, K);
  });
  var w = d(j, 2);
  {
    var k = (F) => {
      var R = Ho(), K = E(R);
      L(() => M(K, `${e.page.place ?? ""} `)), p(F, R);
    };
    V(w, (F) => {
      e.page.place && F(k);
    });
  }
  var P = d(w, 2);
  {
    var B = (F) => {
      var R = Vo(), K = E(R);
      L(() => M(K, `${i(l) ?? ""} `)), p(F, R);
    };
    V(P, (F) => {
      i(l) !== null && F(B);
    });
  }
  var I = d(P, 2);
  {
    var b = (F) => {
      var R = zo();
      L(() => W(R, "href", e.page.website)), p(F, R);
    }, S = /* @__PURE__ */ de(() => /^https?:\/\//i.test(e.page.website || ""));
    V(I, (F) => {
      i(S) && F(b);
    });
  }
  var D = d(m, 2), Z = E(D);
  {
    var re = (F) => {
      var R = Yo();
      p(F, R);
    };
    V(Z, (F) => {
      i(s) && F(re);
    });
  }
  var Q = d(Z, 2);
  {
    var X = (F) => {
      var R = Wo(), K = E(R), oe = d(K);
      L(() => M(K, `${i(o) ?? ""} `)), he("click", oe, h), p(F, R);
    };
    V(Q, (F) => {
      i(o) && F(X);
    });
  }
  var $ = d(Q, 2);
  {
    var se = (F) => {
      var R = Qo(), K = ue(R), oe = E(K), Ae = E(oe), Ce = E(Ae), ee = E(Ce), N = d(ee), Y = d(Ce), ae = U(Y), ce = d(Ae, 2), _e = E(ce);
      ve(_e, 21, () => i(v), be, (ne, fe) => {
        var ye = Go();
        L(() => It(ye, `width:${i(fe).percent}%;background:${i(fe).color}`)), p(ne, ye);
      });
      var we = d(_e);
      ve(we, 21, () => i(v), be, (ne, fe) => {
        var ye = Xo(), je = E(ye), Ne = d(je);
        L(
          (pe) => {
            It(je, `background:${i(fe).color}`), M(Ne, `${i(fe).name ?? ""} (${pe ?? ""}%)`);
          },
          [() => i(fe).percent.toFixed(2)]
        ), p(ne, ye);
      });
      var it = d(oe, 2);
      Cn(it, {
        get series() {
          return i(u);
        }
      });
      var kt = d(K, 2);
      {
        var Nt = (ne) => {
          var fe = Ko(), ye = d(E(fe));
          ve(ye, 21, () => i(a), be, (je, Ne) => {
            var pe = Jo(), Oe = E(pe), lt = d(Oe), gt = U(lt, !0), pt = d(lt), Qt = U(pt, !0), $t = d(pt), Mr = U($t, !0), Nr = d($t), Rn = U(Nr);
            L(() => {
              Le(Oe, 1, `award-icon award-${i(Ne).icon} fa-2x`), M(gt, i(Ne).name), M(Qt, i(Ne).category || ""), M(Mr, i(Ne).description || ""), M(Rn, `${i(Ne).value ?? ""} points`);
            }), p(je, pe);
          }), p(ne, fe);
        };
        V(kt, (ne) => {
          i(a).length && ne(Nt);
        });
      }
      var Ot = d(kt, 3), Zt = E(Ot), G = d(E(Zt));
      ve(G, 21, () => i(r), be, (ne, fe) => {
        var ye = Zo(), je = E(ye), Ne = E(je), pe = U(Ne, !0), Oe = d(je), lt = U(Oe, !0), gt = d(Oe), pt = U(gt, !0), Qt = d(gt), $t = E(Qt), Mr = U($t, !0);
        L(
          (Nr) => {
            W(Ne, "href", `${e.config.urlRoot}/challenges#challenge-${i(fe).challenge.id}`), M(pe, i(fe).challenge.name), M(lt, i(fe).challenge.category), M(pt, i(fe).challenge.value), W($t, "datetime", i(fe).date), M(Mr, Nr);
          },
          [() => new Date(i(fe).date).toLocaleString()]
        ), p(ne, ye);
      }), L(
        (ne, fe) => {
          It(ee, `width:${i(c)}%;background:#25632a`), It(N, `width:${100 - i(c)}%;background:#a12a20`), M(ae, `Solves (${ne ?? ""}%) / Fails (${fe ?? ""}%)`);
        },
        [
          () => i(c).toFixed(2),
          () => (100 - i(c)).toFixed(2)
        ]
      ), p(F, R);
    }, J = (F) => {
      var R = $o();
      p(F, R);
    };
    V($, (F) => {
      i(r).length || i(a).length ? F(se) : !i(s) && !i(o) && F(J, 1);
    });
  }
  L(() => M(C, e.page.name)), p(t, _), Me();
}
nt(["click"]);
var rs = /* @__PURE__ */ A('<p role="status">Loading scoreboard...</p>'), as = /* @__PURE__ */ A('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), ns = /* @__PURE__ */ A("<button> </button>"), is = /* @__PURE__ */ A('<nav class="nav nav-pills mb-3" aria-label="Competition bracket"><button>All</button><!></nav>'), ls = /* @__PURE__ */ A('<span class="badge bg-secondary ms-2"> </span>'), os = /* @__PURE__ */ A('<tr><th scope="row"></th><td><a> </a><!></td><td> </td></tr>'), ss = /* @__PURE__ */ A('<h3 class="text-center text-muted">Scoreboard is empty</h3>'), fs = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1>Scoreboard</h1></div></div> <div class="container"><!> <!> <!> <!> <div id="scoreboard" class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Place</th><th>User</th><th>Score</th></tr></thead><tbody></tbody></table></div> <!></div>', 1);
function us(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(ge([])), a = /* @__PURE__ */ H(ge([])), n = /* @__PURE__ */ H(""), l = /* @__PURE__ */ H(ge({})), s = /* @__PURE__ */ H(!0), o = /* @__PURE__ */ H(""), f = 0;
  const c = /* @__PURE__ */ de(() => i(r).filter((b) => !i(n) || String(b.bracket_id) === i(n))), v = /* @__PURE__ */ de(() => Object.values(i(l)).map((b) => {
    let S = 0;
    return {
      name: b.name,
      data: [...b.solves].sort((D, Z) => new Date(D.date) - new Date(Z.date)).map((D) => [new Date(D.date).getTime(), S += D.value])
    };
  }));
  async function u() {
    const b = ++f;
    x(o, "");
    try {
      const [S, D, Z] = await Promise.all([
        Se("/scoreboard"),
        Se("/brackets?type=users"),
        Se(`/scoreboard/top/10${i(n) ? `?bracket_id=${encodeURIComponent(i(n))}` : ""}`)
      ]);
      if (b !== f) return;
      x(r, S, !0), x(a, D, !0), x(l, Z, !0);
    } catch (S) {
      b === f && x(o, S.message, !0);
    } finally {
      b === f && x(s, !1);
    }
  }
  function h(b) {
    x(n, b, !0), u();
  }
  xt(() => {
    u();
    const b = setInterval(u, 3e5);
    return () => {
      clearInterval(b), f++;
    };
  });
  var _ = fs(), m = d(ue(_), 2), T = E(m);
  {
    var g = (b) => {
      var S = rs();
      p(b, S);
    };
    V(T, (b) => {
      i(s) && b(g);
    });
  }
  var C = d(T, 2);
  {
    var q = (b) => {
      var S = as(), D = E(S), Z = d(D);
      L(() => M(D, `${i(o) ?? ""} `)), he("click", Z, u), p(b, S);
    };
    V(C, (b) => {
      i(o) && b(q);
    });
  }
  var z = d(C, 2);
  {
    var O = (b) => {
      var S = is(), D = E(S);
      let Z;
      var re = d(D);
      ve(re, 17, () => i(a), be, (Q, X) => {
        var $ = ns();
        let se;
        var J = U($, !0);
        L(
          (F) => {
            se = Le($, 1, "nav-link", null, se, { active: F }), M(J, i(X).name);
          },
          [() => i(n) === String(i(X).id)]
        ), he("click", $, () => h(String(i(X).id))), p(Q, $);
      }), L(() => Z = Le(D, 1, "nav-link", null, Z, { active: !i(n) })), he("click", D, () => h("")), p(b, S);
    };
    V(z, (b) => {
      i(a).length && b(O);
    });
  }
  var y = d(z, 2);
  {
    var j = (b) => {
      Cn(b, {
        title: "Top 10 Users",
        get series() {
          return i(v);
        }
      });
    };
    V(y, (b) => {
      i(v).length && b(j);
    });
  }
  var w = d(y, 2), k = E(w), P = d(E(k));
  ve(P, 21, () => i(c), be, (b, S, D) => {
    var Z = os(), re = E(Z);
    re.textContent = D + 1;
    var Q = d(re), X = E(Q), $ = U(X, !0), se = d(X);
    {
      var J = (K) => {
        var oe = ls(), Ae = U(oe, !0);
        L(() => M(Ae, i(S).bracket_name)), p(K, oe);
      };
      V(se, (K) => {
        i(S).bracket_name && K(J);
      });
    }
    var F = d(Q), R = U(F, !0);
    L(() => {
      W(X, "href", i(S).account_url), M($, i(S).name), M(R, i(S).score);
    }), p(b, Z);
  });
  var B = d(w, 2);
  {
    var I = (b) => {
      var S = ss();
      p(b, S);
    };
    V(B, (b) => {
      !i(s) && !i(o) && !i(c).length && b(I);
    });
  }
  p(t, _), Me();
}
nt(["click"]);
var cs = /* @__PURE__ */ A('<div class="container custom-page"></div>');
function ds(t, e) {
  Re(e, !0);
  function r(n) {
    let l = !0;
    return (async () => {
      for (const s of n.querySelectorAll("script")) {
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
  var a = cs();
  yt(a, () => e.html, !0), Yt(a, (n) => r?.(n)), p(t, a), Me();
}
var vs = /* @__PURE__ */ A('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), hs = /* @__PURE__ */ A('<h2 class="text-center">There are no notifications yet</h2>'), _s = /* @__PURE__ */ A('<article class="card bg-body-tertiary mb-4"><div class="card-body"><h3> </h3><div></div><time class="text-muted"> </time></div></article>'), gs = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1>Notifications</h1></div></div> <div class="container"><!> <!> <!></div>', 1), ps = /* @__PURE__ */ A('<aside class="express-toast" role="status"><h2> </h2><div></div><button class="btn">Dismiss</button></aside>'), ms = /* @__PURE__ */ A('<h2 id="notification-title"> </h2><div></div><div class="dialog-actions"><a class="btn">All notifications</a><button class="btn btn-primary">Close</button></div>', 1), bs = /* @__PURE__ */ A('<!> <!> <dialog class="express-dialog" aria-labelledby="notification-title"><!></dialog>', 1);
function ys(t, e) {
  Re(e, !0);
  const r = (y) => (!y.user_id || y.user_id === e.config.userId) && (!y.team_id || y.team_id === e.config.teamId);
  let a = /* @__PURE__ */ H(ge(Fe(() => (e.page.notifications || []).filter(r)))), n = /* @__PURE__ */ H(ge([])), l = /* @__PURE__ */ H(null), s = /* @__PURE__ */ H(""), o;
  const f = /* @__PURE__ */ de(() => `challenge-express-notifications:${e.config.urlRoot}:${e.config.userId || "guest"}`);
  function c() {
    try {
      localStorage.setItem(i(
        f
        /* Reading notifications still works when storage is unavailable. */
      ), JSON.stringify(i(n)));
    } catch {
    }
  }
  function v(y) {
    x(n, [.../* @__PURE__ */ new Set([...i(n), ...y])], !0), c();
  }
  function u() {
    i(l) && v([i(l).id]), x(l, null);
  }
  async function h() {
    try {
      x(a, (await Se("/notifications")).filter(r), !0), x(s, ""), e.page.kind === "notifications" && v(i(a).map((y) => y.id));
    } catch (y) {
      e.page.kind === "notifications" && x(s, y.message, !0);
    }
  }
  jt(() => {
    e.onunread(i(a).filter((y) => !i(n).includes(y.id)).length);
  }), jt(() => {
    i(l) && i(l).type !== "toast" && o && !o.open && o.showModal();
  }), jt(() => {
    if (i(l)?.type !== "toast") return;
    const y = setTimeout(() => x(l, null), 8e3);
    return () => clearTimeout(y);
  }), xt(() => {
    try {
      const k = JSON.parse(localStorage.getItem(i(f)) || "[]");
      Array.isArray(k) && x(n, k, !0);
    } catch {
      x(n, [], !0);
    }
    h();
    const y = (k) => {
      if (k.key === i(
        f
        /* Ignore malformed external storage. */
      ))
        try {
          const P = JSON.parse(k.newValue || "[]");
          Array.isArray(P) && x(
            n,
            P,
            /* Ignore malformed external storage. */
            !0
          );
        } catch {
        }
    };
    window.addEventListener("storage", y);
    const j = e.config.userId ? new EventSource(`${e.config.urlRoot}/events`) : null;
    let w = !1;
    return j?.addEventListener("open", () => {
      w && h(), w = !0;
    }), j?.addEventListener("notification", (k) => {
      let P;
      try {
        P = JSON.parse(k.data);
      } catch {
        return;
      }
      if (!r(P)) return;
      const B = !i(a).some((I) => I.id === P.id);
      x(
        a,
        [
          ...i(a).filter((I) => I.id !== P.id),
          P
        ],
        !0
      ), e.page.kind === "notifications" ? v([P.id]) : B && !i(n).includes(P.id) && P.type !== "background" && x(l, P, !0);
    }), () => {
      j?.close(), window.removeEventListener("storage", y);
    };
  });
  var _ = bs(), m = ue(_);
  {
    var T = (y) => {
      var j = gs(), w = d(ue(j), 2), k = E(w);
      {
        var P = (S) => {
          var D = vs(), Z = E(D), re = d(Z);
          L(() => M(Z, `${i(s) ?? ""} `)), he("click", re, h), p(S, D);
        };
        V(k, (S) => {
          i(s) && S(P);
        });
      }
      var B = d(k, 2);
      {
        var I = (S) => {
          var D = hs();
          p(S, D);
        };
        V(B, (S) => {
          !i(a).length && !i(s) && S(I);
        });
      }
      var b = d(B, 2);
      ve(b, 17, () => [...i(a)].sort((S, D) => D.id - S.id), be, (S, D) => {
        var Z = _s(), re = E(Z), Q = E(re), X = U(Q, !0), $ = d(Q);
        yt($, () => i(D).html, !0);
        var se = d($), J = U(se, !0);
        L(
          (F) => {
            M(X, i(D).title), W(se, "datetime", i(D).date), M(J, F);
          },
          [() => new Date(i(D).date).toLocaleString()]
        ), p(S, Z);
      }), p(y, j);
    };
    V(m, (y) => {
      e.page.kind === "notifications" && y(T);
    });
  }
  var g = d(m, 2);
  {
    var C = (y) => {
      var j = ps(), w = E(j), k = U(w, !0), P = d(w);
      yt(P, () => i(l).html || "", !0);
      var B = d(P);
      L(() => M(k, i(l).title)), he("click", B, u), p(y, j);
    };
    V(g, (y) => {
      i(l)?.type === "toast" && y(C);
    });
  }
  var q = d(g, 2), z = E(q);
  {
    var O = (y) => {
      var j = ms(), w = ue(j), k = U(w, !0), P = d(w);
      yt(P, () => i(l).html || "", !0);
      var B = d(P), I = E(B), b = d(I);
      L(() => {
        M(k, i(l).title), W(I, "href", `${e.config.urlRoot}/notifications`);
      }), he("click", b, () => o.close()), p(y, j);
    };
    V(z, (y) => {
      i(l) && i(l).type !== "toast" && y(O);
    });
  }
  Mt(q, (y) => o = y, () => o), ct("close", q, u), p(t, _), Me();
}
nt(["click"]);
var ws = /* @__PURE__ */ A('<img class="express-brand-icon" alt="" draggable="false"/>'), xs = /* @__PURE__ */ A('<i class="fas fa-envelope" aria-hidden="true"></i>'), ks = /* @__PURE__ */ A('<i class="fas fa-bell" aria-hidden="true"></i>'), Es = /* @__PURE__ */ A('<span class="badge bg-danger"> </span>'), Ss = /* @__PURE__ */ A('<li class="nav-item"><a class="nav-link"><!> <!></a></li>'), As = /* @__PURE__ */ A("<ul></ul>"), Cs = /* @__PURE__ */ A('<nav class="navbar navbar-expand-md" aria-label="Main navigation"><div class="container"><button class="navbar-toggler" type="button" aria-controls="base-navbars" aria-label="Toggle navigation"><i class="fas fa-bars" aria-hidden="true"></i> Menu</button> <div id="base-navbars"></div></div></nav>'), Ts = /* @__PURE__ */ A('<div id="challenge-app"><!></div>'), Ls = /* @__PURE__ */ A("<p> </p>"), Rs = /* @__PURE__ */ A('<div class="container error-page"><h1> </h1><h2> </h2><!><a>Back to challenges</a></div>'), Ms = /* @__PURE__ */ A("<!> <!>", 1), Ns = /* @__PURE__ */ A('<div class="express-window"><header class="express-title window-drag-handle" tabindex="0" role="button" aria-label="Move application window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><!> <span id="window-title"> </span></header> <!> <main id="main-content"><!> <!></main> <footer class="express-status"> <span>Powered by <a href="https://ctfd.io">CTFd</a></span></footer></div> <div class="express-taskbar"><a class="express-start">Start</a><span> </span></div>', 1);
function Os(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ H(!1), a = /* @__PURE__ */ H(0);
  const n = /* @__PURE__ */ de(() => e.page.kind === "login"), l = /* @__PURE__ */ de(() => ["login", "register", "reset", "confirm"].includes(e.page.kind));
  xt(() => (document.body.classList.toggle("login-desktop", i(n)), () => document.body.classList.remove("login-desktop")));
  var s = Ns(), o = ue(s), f = E(o), c = E(f);
  {
    var v = (I) => {
      var b = ws();
      L(() => W(b, "src", e.site.logo)), p(I, b);
    }, u = (I) => {
      var b = xs();
      p(I, b);
    };
    V(c, (I) => {
      e.site.logo ? I(v) : I(u, -1);
    });
  }
  var h = d(c, 2), _ = U(h, !0), m = d(f, 2);
  {
    var T = (I) => {
      var b = Cs(), S = E(b), D = E(S), Z = d(D, 2);
      let re;
      ve(Z, 21, () => [e.site.primary, e.site.account], be, (Q, X, $) => {
        var se = As();
        Le(se, 1, "navbar-nav", null, {}, { "me-auto": $ === 0, "ms-md-auto": $ === 1 }), ve(se, 21, () => i(X), be, (J, F) => {
          var R = Ss(), K = E(R), oe = E(K);
          {
            var Ae = (Y) => {
              var ae = ks();
              p(Y, ae);
            };
            V(oe, (Y) => {
              i(F).label === "Notifications" && Y(Ae);
            });
          }
          var Ce = d(oe), ee = d(Ce);
          {
            var N = (Y) => {
              var ae = Es(), ce = U(ae, !0);
              L(() => M(ce, i(a))), p(Y, ae);
            };
            V(ee, (Y) => {
              i(F).label === "Notifications" && i(a) > 0 && Y(N);
            });
          }
          L(() => {
            W(K, "href", i(F).href), W(K, "target", i(F).target || void 0), W(K, "rel", i(F).target === "_blank" ? "noopener" : void 0), M(Ce, `${i(F).label ?? ""} `);
          }), p(J, R);
        }), p(Q, se);
      }), L(() => {
        W(D, "aria-expanded", i(r)), re = Le(Z, 1, "collapse navbar-collapse", null, re, { show: i(r) });
      }), he("click", D, () => x(r, !i(r))), p(I, b);
    };
    V(m, (I) => {
      i(n) || I(T);
    });
  }
  var g = d(m, 2), C = E(g);
  {
    var q = (I) => {
      bo(I, {
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
      var b = Ms(), S = ue(b);
      An(S, {
        get errors() {
          return e.site.errors;
        },
        get infos() {
          return e.site.infos;
        }
      });
      var D = d(S, 2);
      {
        var Z = (R) => {
          var K = Ts(), oe = E(K);
          Jl(oe, {
            get config() {
              return e.config;
            }
          }), p(R, K);
        }, re = (R) => {
          Ao(R, {
            get page() {
              return e.page;
            }
          });
        }, Q = (R) => {
          Do(R, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, X = (R) => {
          ts(R, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, $ = (R) => {
          us(R, {});
        }, se = (R) => {
          ds(R, {
            get html() {
              return e.page.html;
            }
          });
        }, J = (R) => {
          var K = Rs(), oe = E(K), Ae = U(oe, !0), Ce = d(oe), ee = U(Ce), N = d(Ce);
          {
            var Y = (ce) => {
              var _e = Ls(), we = U(_e, !0);
              L(() => M(we, e.page.detail)), p(ce, _e);
            };
            V(N, (ce) => {
              e.page.detail && ce(Y);
            });
          }
          var ae = d(N);
          L(() => {
            M(Ae, e.page.heading), M(ee, `${e.page.code ?? ""} ${e.page.message ?? ""}`), W(ae, "href", `${e.config.urlRoot}/challenges`);
          }), p(R, K);
        }, F = (R) => {
          var K = dt(), oe = ue(K);
          yt(oe, () => e.fallback), p(R, K);
        };
        V(D, (R) => {
          e.page.kind === "challenges" ? R(Z) : e.page.kind === "settings" ? R(re, 1) : e.page.kind === "users" ? R(Q, 2) : e.page.kind === "profile" ? R(X, 3) : e.page.kind === "scoreboard" ? R($, 4) : e.page.kind === "page" ? R(se, 5) : e.page.kind === "error" ? R(J, 6) : e.page.kind !== "notifications" && R(F, 7);
        });
      }
      p(I, b);
    };
    V(C, (I) => {
      i(l) ? I(q) : I(z, -1);
    });
  }
  var O = d(C, 2);
  ys(O, {
    get page() {
      return e.page;
    },
    get config() {
      return e.config;
    },
    onunread: (I) => x(a, I, !0)
  });
  var y = d(g, 2), j = E(y);
  Yt(o, (I, b) => Sn?.(I, b), () => !i(n));
  var w = d(o, 2), k = E(w), P = d(k), B = U(P, !0);
  L(() => {
    M(_, e.site.title), M(j, e.site.eventName), W(k, "href", `${e.config.urlRoot}/challenges`), M(B, e.site.appName);
  }), p(t, s), Me();
}
nt(["click"]);
const Tn = document.getElementById("site-app"), Ln = JSON.parse(document.getElementById("page-data").textContent);
document.body.classList.toggle("login-desktop", Ln.kind === "login");
Tn.replaceChildren();
Ji(Os, { target: Tn, props: {
  config: window.init,
  site: JSON.parse(document.getElementById("site-data").textContent),
  page: Ln,
  fallback: document.getElementById("fallback-content").innerHTML
} });
