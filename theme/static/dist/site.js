var Ar = Array.isArray, Ma = Array.prototype.indexOf, pr = Array.prototype.includes, Cr = Array.from, Ln = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, Rn = Object.getOwnPropertyDescriptors, Na = Object.prototype, Oa = Array.prototype, tn = Object.getPrototypeOf, pn = Object.isExtensible;
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
const Pe = 2, Ht = 4, Tr = 8, Nn = 1 << 24, Xe = 16, We = 32, vt = 64, Hr = 128, rn = 256, Qe = 512, Ae = 1024, Ee = 2048, Ve = 4096, De = 8192, Fe = 16384, Gt = 32768, mr = 1 << 25, zt = 65536, br = 1 << 17, Fa = 1 << 18, Xt = 1 << 19, ja = 1 << 20, et = 1 << 25, yr = 1 << 21, qt = 1 << 22, bt = 1 << 23, ft = /* @__PURE__ */ Symbol("$state"), On = /* @__PURE__ */ Symbol("component"), Ba = /* @__PURE__ */ Symbol("legacy props"), qa = /* @__PURE__ */ Symbol(""), Pn = /* @__PURE__ */ Symbol("attributes"), zr = /* @__PURE__ */ Symbol("class"), Vr = /* @__PURE__ */ Symbol("style"), Yr = /* @__PURE__ */ Symbol("text"), hr = /* @__PURE__ */ Symbol("form reset"), fr = new class extends Error {
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
function si() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function li(t) {
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
let At = [];
function Hn() {
  var t = At;
  At = [], Ia(t);
}
function ot(t) {
  if (At.length === 0 && !ar) {
    var e = At;
    queueMicrotask(() => {
      e === At && Hn();
    });
  }
  At.push(t);
}
function hi() {
  for (; At.length > 0; )
    Hn();
}
const _i = -7169;
function ye(t, e) {
  t.f = t.f & _i | e;
}
function an(t) {
  (t.f & Qe) !== 0 || t.deps === null ? ye(t, Ae) : ye(t, Ve);
}
function zn(t, e, r) {
  (t.f & Ee) !== 0 ? e.add(t) : (t.f & Ve) !== 0 && r.add(t), ye(t, Ae);
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
  var e = ie, r = se;
  Ge(null), nt(null);
  try {
    return t();
  } finally {
    Ge(e), nt(r);
  }
}
function sn(t, e, r, n = r) {
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
  const a = lr;
  var s = t.filter((p) => !p.settled), o = e.map(a);
  if (r.length === 0 && s.length === 0) {
    n(o);
    return;
  }
  var l = (
    /** @type {Effect} */
    se
  ), f = mi(), c = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((p) => p.promise)) : null;
  function h(p) {
    if ((l.f & Fe) === 0) {
      f();
      try {
        n([...o, ...p]);
      } catch (m) {
        $e(m, l);
      }
      wr();
    }
  }
  var u = Vn();
  if (r.length === 0) {
    c.then(() => h([])).finally(u);
    return;
  }
  function v() {
    Promise.all(r.map((p) => /* @__PURE__ */ bi(p))).then(h).catch((p) => $e(p, l)).finally(u);
  }
  c ? c.then(() => {
    f(), v(), wr();
  }) : v();
}
function mi() {
  var t = (
    /** @type {Effect} */
    se
  ), e = ie, r = Te, n = (
    /** @type {Batch} */
    te
  );
  return function(s = !0) {
    nt(t), Ge(e), Vt(r), s && (t.f & Fe) === 0 && (n?.activate(), n?.apply());
  };
}
function wr(t = !0) {
  nt(null), Ge(null), Vt(null), t && te?.deactivate();
}
function Vn() {
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
function lr(t) {
  var e = Pe | Ee;
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
      Se
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
  ), s = Mt(
    /** @type {V} */
    Se
  ), o = !ie, l = /* @__PURE__ */ new Set();
  return Oi(() => {
    var f = (
      /** @type {Effect} */
      se
    ), c = Mn();
    a = c.promise;
    try {
      Promise.resolve(t()).then(c.resolve, (p) => {
        p !== fr && c.reject(p);
      }).finally(wr);
    } catch (p) {
      c.reject(p), wr();
    }
    var h = (
      /** @type {Batch} */
      te
    );
    if (o) {
      if ((f.f & Gt) !== 0)
        var u = Vn();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        n.b?.is_rendered()
      )
        h.async_deriveds.get(f)?.reject(tr);
      else
        for (const p of l.values())
          p.reject(tr);
      l.add(c), h.async_deriveds.set(f, c);
    }
    const v = (p, m = void 0) => {
      u?.(), l.delete(c), m !== tr && (h.activate(), m ? (s.f |= bt, Yt(s, m)) : ((s.f & bt) !== 0 && (s.f ^= bt), Yt(s, p)), h.deactivate());
    };
    c.promise.then(v, (p) => v(null, p || "unknown"));
  }), Lr(() => {
    for (const f of l)
      f.reject(tr);
  }), new Promise((f) => {
    function c(h) {
      function u() {
        h === a ? f(s) : c(a);
      }
      h.then(u, u);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function ue(t) {
  const e = /* @__PURE__ */ lr(t);
  return ca(e), e;
}
// @__NO_SIDE_EFFECTS__
function Yn(t) {
  const e = /* @__PURE__ */ lr(t);
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
function ln(t) {
  var e, r = se, n = t.parent;
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
  var e = ln(t);
  if (!t.equals(e) && (t.wv = va(), (!te?.is_fork || t.deps === null) && (te !== null ? (te.capture(t, e, !0), Wr?.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    ye(t, Ae);
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
let Or = null, Ft = null, te = null, Wr = null, Ke = null, Gr = null, ar = !1, Pr = !1, ir = null, _r = null;
var bn = 0;
let xi = 1;
class xt {
  id = xi++;
  /** True as soon as `#process` was called */
  #t = !1;
  linked = !0;
  /** @type {Batch | null} */
  #s = null;
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
    Ft === null ? Or = Ft = this : (Ft.#e = this, this.#s = Ft), Ft = this;
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
    for (const s of this.#a)
      if (!((s.f & Fe) !== 0 || (s.f & (Ee | Ve)) === 0)) {
        for (var r = s, n = !1; r.parent !== null; ) {
          r = r.parent;
          var a = r.f;
          if ((a & (vt | We)) !== 0) {
            if ((a & Ae) === 0) {
              n = !0;
              break;
            }
            r.f ^= Ae;
          }
        }
        n || e.push(r);
      }
    return this.#a = [], e;
  }
  #p() {
    this.#t = !0;
    for (const l of this.#f)
      this.#u.delete(l), ye(l, Ee), this.schedule(l);
    for (const l of this.#u)
      ye(l, Ve), this.schedule(l);
    this.apply();
    for (var e = ir = [], r = [], n = _r = []; this.#a.length > 0; ) {
      bn++ > 1e3 && (this.#_(), Ei());
      for (const l of this.#x())
        try {
          this.#m(l, e, r);
        } catch (f) {
          throw Jn(l), this.#b() || this.discard(), f;
        }
    }
    if (te = null, n.length > 0) {
      var a = xt.ensure();
      for (const l of n)
        a.schedule(l);
    }
    if (ir = null, _r = null, this.#b()) {
      this.#v(r), this.#v(e);
      for (const [l, f] of this.#d)
        Kn(l, f);
      n.length > 0 && /** @type {unknown} */
      te.#p();
      return;
    }
    const s = this.#k();
    if (s) {
      this.#v(r), this.#v(e), s.#y(this);
      return;
    }
    this.#f.clear(), this.#u.clear();
    for (const l of this.#o) l(this);
    this.#o.clear(), Wr = this, yn(r), yn(e), Wr = null, this.#l?.resolve();
    var o = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      te
    );
    if (this.#i === 0 && (this.#a.length === 0 || o !== null) && this.#_(), this.#a.length > 0)
      if (o !== null) {
        for (const l of this.#a)
          o.#a.push(l);
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
    e.f ^= Ae;
    for (var a = e.first; a !== null; ) {
      var s = a.f, o = (s & (We | vt)) !== 0, l = o && (s & Ae) !== 0, f = l || (s & De) !== 0 || this.#d.has(a);
      if (!f && a.fn !== null) {
        o ? a.f ^= Ae : (s & Ht) !== 0 ? r.push(a) : cr(a) && ((s & Xe) !== 0 && this.#u.add(a), Wt(a));
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
    for (var e = this.#s; e !== null; ) {
      if (!e.is_fork) {
        for (const [r, [, n]] of this.current)
          if (e.current.has(r) && !n)
            return e;
      }
      e = e.#s;
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
      const s = this.async_deriveds.get(n);
      s && a.promise.then(s.resolve).catch(s.reject);
    }
    e.async_deriveds.clear(), this.transfer_effects(e.#f, e.#u);
    const r = (n) => {
      var a = n.reactions;
      if (a !== null && !((n.f & Pe) !== 0 && (n.f & (Ee | Ve)) === 0))
        for (const l of a) {
          var s = l.f;
          if ((s & Pe) !== 0)
            r(
              /** @type {Derived} */
              l
            );
          else {
            var o = (
              /** @type {Effect} */
              l
            );
            s & (qt | Xe) && !this.async_deriveds.has(o) && (this.#u.delete(o), ye(o, Ee), this.schedule(o));
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
    e.v !== Se && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & bt) === 0 && (this.current.set(e, [r, n]), Ke?.set(e, r)), this.is_fork || (e.v = r);
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
    this.#_(), this.#l?.resolve();
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
      for (const [v, [p, m]] of this.current) {
        if (u.current.has(v)) {
          var n = (
            /** @type {[any, boolean]} */
            u.current.get(v)[0]
          );
          if (e && p !== n)
            u.current.set(v, [p, m]);
          else
            continue;
        }
        r.push(v);
      }
      if (e)
        for (const [v, p] of this.async_deriveds) {
          const m = u.async_deriveds.get(v);
          m && p.promise.then(m.resolve).catch(m.reject);
        }
      var a = [...u.current.keys()].filter(
        (v) => !/** @type {[any, boolean]} */
        u.current.get(v)[1]
      );
      if (!(!u.#t || a.length === 0)) {
        var s = a.filter((v) => !this.current.has(v));
        if (s.length === 0)
          e && u.discard();
        else if (r.length > 0) {
          if (e)
            for (const v of this.#g)
              u.unskip_effect(v, (p) => {
                (p.f & (Xe | qt)) !== 0 ? u.schedule(p) : u.#v([p]);
              });
          u.activate();
          var o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
          for (var f of r)
            Xn(f, s, o, l);
          l = /* @__PURE__ */ new Map();
          var c = [...u.current].filter(([v, p]) => {
            const m = this.current.get(v);
            return m ? m[0] !== p[0] || m[1] !== p[1] : !0;
          }).map(([v]) => v);
          if (c.length > 0)
            for (const v of this.#h)
              (v.f & (Fe | De | br)) === 0 && on(v, c, l) && ((v.f & (qt | Xe)) !== 0 ? (ye(v, Ee), u.schedule(v)) : u.#f.add(v));
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
    return (this.#l ??= Mn()).promise;
  }
  static ensure() {
    if (te === null) {
      const e = te = new xt();
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
      var e = this.#s, r = this.#e;
      e === null ? Or = r : e.#e = r, r === null ? Ft = e : r.#s = e, this.linked = !1;
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
let lt = null;
function yn(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var n = t[r++];
      if ((n.f & (Fe | De)) === 0 && cr(n) && (lt = /* @__PURE__ */ new Set(), Wt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && oa(n), lt?.size > 0)) {
        tt.clear();
        for (const a of lt) {
          if ((a.f & (Fe | De)) !== 0) continue;
          const s = [a];
          let o = a.parent;
          for (; o !== null; )
            lt.has(o) && (lt.delete(o), s.push(o)), o = o.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const f = s[l];
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
      const s = a.f;
      (s & Pe) !== 0 ? Xn(
        /** @type {Derived} */
        a,
        e,
        r,
        n
      ) : (s & (qt | Xe)) !== 0 && (s & Ee) === 0 && on(a, e, n) && (ye(a, Ee), fn(
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
  if (!((t.f & We) !== 0 && (t.f & Ae) !== 0)) {
    (t.f & Ee) !== 0 ? e.d.push(t) : (t.f & Ve) !== 0 && e.m.push(t), ye(t, Ae);
    for (var r = t.first; r !== null; )
      Kn(r, e), r = r.next;
  }
}
function Jn(t) {
  ye(t, Ae);
  for (var e = t.first; e !== null; )
    Jn(e), e = e.next;
}
let xr = /* @__PURE__ */ new Set();
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
function V(t, e) {
  const r = Mt(t);
  return ca(r), r;
}
// @__NO_SIDE_EFFECTS__
function Si(t, e = !1, r = !0) {
  const n = Mt(t);
  return e || (n.equals = Bn), n;
}
function x(t, e, r = !1) {
  ie !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || (ie.f & br) !== 0) && Un() && (ie.f & (Pe | Xe | qt | br)) !== 0 && (rt === null || !rt.has(t)) && di();
  let n = r ? me(e) : e;
  return Yt(t, n, _r);
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
      (t.f & Ee) !== 0 && ln(a), Ke === null && an(a);
    }
    t.wv = va(), St = null, Xr = 0, Qn(t, Ee, r), St = null, se !== null && (se.f & Ae) !== 0 && (se.f & (We | vt)) === 0 && (He === null ? Ii([t]) : He.push(t)), !n.is_fork && xr.size > 0 && !Zn && Ai();
  }
  return e;
}
function Ai() {
  Zn = !1;
  for (const t of xr) {
    (t.f & Ae) !== 0 && ye(t, Ve);
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
function sr(t) {
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
    for (var s = 0; s < a; s++) {
      var o = n[s], l = o.f, f = (l & Ee) === 0;
      if (f && ye(o, e), (l & br) !== 0)
        xr.add(
          /** @type {Effect} */
          o
        );
      else if ((l & Pe) !== 0) {
        var c = (
          /** @type {Derived} */
          o
        );
        Ke?.delete(c), Qn(c, Ve, r);
      } else if (f) {
        var h = (
          /** @type {Effect} */
          o
        );
        (l & Xe) !== 0 && lt !== null && lt.add(h), r !== null ? r.push(h) : fn(h);
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
  var r = /* @__PURE__ */ new Map(), n = Ar(t), a = /* @__PURE__ */ V(0), s = Rt, o = (l) => {
    if (Rt === s)
      return l();
    var f = ie, c = Rt;
    Ge(null), kn(s);
    var h = l();
    return Ge(f), kn(c), h;
  };
  return n && r.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(l, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ui();
        var h = r.get(f);
        return h === void 0 ? o(() => {
          var u = /* @__PURE__ */ V(c.value);
          return r.set(f, u), u;
        }) : x(h, c.value, !0), !0;
      },
      deleteProperty(l, f) {
        var c = r.get(f);
        if (c === void 0) {
          if (f in l) {
            const h = o(() => /* @__PURE__ */ V(Se));
            r.set(f, h), sr(a);
          }
        } else
          x(c, Se), sr(a);
        return !0;
      },
      get(l, f, c) {
        if (f === ft)
          return t;
        var h = r.get(f), u = f in l;
        if (h === void 0 && (!u || Bt(l, f)?.writable) && (h = o(() => {
          var p = me(u ? l[f] : Se), m = /* @__PURE__ */ V(p);
          return m;
        }), r.set(f, h)), h !== void 0) {
          var v = i(h);
          return v === Se ? void 0 : v;
        }
        return Reflect.get(l, f, c);
      },
      getOwnPropertyDescriptor(l, f) {
        this.has?.(l, f);
        var c = Reflect.getOwnPropertyDescriptor(l, f), h = r.get(f);
        if (h !== void 0) {
          var u = i(h);
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
      has(l, f) {
        if (f === ft)
          return !0;
        var c = r.get(f), h = c !== void 0 && c.v !== Se || Reflect.has(l, f);
        if (c !== void 0 || se !== null && (!h || Bt(l, f)?.writable)) {
          c === void 0 && (c = o(() => {
            var v = h ? me(l[f]) : Se, p = /* @__PURE__ */ V(v);
            return p;
          }), r.set(f, c));
          var u = i(c);
          if (u === Se)
            return !1;
        }
        return h;
      },
      set(l, f, c, h) {
        var u = r.get(f), v = f in l;
        if (n && f === "length")
          for (var p = c; p < /** @type {Source<number>} */
          u.v; p += 1) {
            var m = r.get(p + "");
            m !== void 0 ? x(m, Se) : p in l && (m = o(() => /* @__PURE__ */ V(Se)), r.set(p + "", m));
          }
        if (u === void 0)
          (!v || Bt(l, f)?.writable) && (u = o(() => /* @__PURE__ */ V(void 0)), x(u, me(c)), r.set(f, u));
        else {
          v = u.v !== Se;
          var L = o(() => me(c));
          x(u, L);
        }
        var y = Reflect.getOwnPropertyDescriptor(l, f);
        if (y?.set && y.set.call(h, c), !v) {
          if (n && typeof f == "string") {
            var T = (
              /** @type {Source<number>} */
              r.get("length")
            ), H = Number(f);
            Number.isInteger(H) && H >= T.v && x(T, H + 1);
          }
          sr(a);
        }
        return !0;
      },
      ownKeys(l) {
        i(a);
        var f = Reflect.ownKeys(l).filter((u) => {
          var v = r.get(u);
          return v === void 0 || v.v !== Se;
        });
        for (var [c, h] of r)
          h.v !== Se && !(c in l) && f.push(c);
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
    ta = Bt(e, "firstChild").get, ra = Bt(e, "nextSibling").get, pn(t) && (t[zr] = void 0, t[Pn] = null, t[Vr] = void 0, t.__e = void 0), pn(r) && (r[Yr] = void 0);
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
function z(t, e = !1) {
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
    return ie.f |= bt, t;
  if ((e.f & Gt) === 0 && (e.f & Ht) === 0)
    throw t;
  $e(t, e);
}
function $e(t, e) {
  if (!(e !== null && (e.f & Fe) !== 0)) {
    for (; e !== null; ) {
      if ((e.f & Hr) !== 0 && (e.f & (Fe | mr)) === 0) {
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
  se === null && (ie === null && li(), si()), ht && ii();
}
function Mi(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function _t(t, e) {
  var r = se;
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
  te?.register_created_effect(n);
  var a = n;
  if ((t & Ht) !== 0)
    ir !== null ? ir.push(n) : xt.ensure().schedule(n);
  else if (e !== null) {
    try {
      Wt(n);
    } catch (o) {
      throw qe(n), o;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Xt) === 0 && (a = a.first, (t & Xe) !== 0 && (t & zt) !== 0 && a !== null && (a.f |= zt));
  }
  if (a !== null && (a.parent = r, r !== null && Mi(a, r), ie !== null && (ie.f & Pe) !== 0 && (t & vt) === 0)) {
    var s = (
      /** @type {Derived} */
      ie
    );
    (s.effects ??= []).push(a);
  }
  return n;
}
function un() {
  return ie !== null && !Ze;
}
function Lr(t) {
  const e = _t(Tr, null);
  return ye(e, Ae), e.teardown = t, e;
}
function Tt(t) {
  Ri();
  var e = (
    /** @type {Effect} */
    se.f
  ), r = !ie && (e & We) !== 0 && Te !== null && !Te.i;
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
      qe(e), n(void 0);
    }) : (qe(e), n(void 0));
  });
}
function cn(t) {
  return _t(Ht, t);
}
function Oi(t) {
  return _t(qt | Xt, t);
}
function Jt(t, e = 0) {
  return _t(Tr | e, t);
}
function R(t, e = [], r = [], n = []) {
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
function sa(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = ht, n = ie;
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
  (e || (t.f & Fa) !== 0) && t.nodes !== null && t.nodes.end !== null && (la(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), r = !0), t.f |= mr, dn(t, e && !r), or(t, 0);
  var n = t.nodes && t.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  sa(t), t.f ^= mr, t.f |= Fe;
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
function Lt(t, e, r = !0) {
  var n = [];
  t.f |= rn, fa(t, n, !0);
  var a = () => {
    r && qe(t), e && e();
  }, s = n.length;
  if (s > 0) {
    var o = () => --s || a();
    for (var l of n)
      l.out(o);
  } else
    a();
}
function fa(t, e, r) {
  if ((t.f & De) === 0) {
    t.f ^= De;
    var n = t.nodes && t.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && e.push(l);
    for (var a = t.first; a !== null; ) {
      var s = a.next;
      if ((a.f & vt) === 0) {
        var o = (a.f & zt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & We) !== 0 && (t.f & Xe) !== 0;
        fa(a, e, o ? r : !1);
      }
      a = s;
    }
  }
}
function kr(t) {
  t.f &= ~rn, ua(t, !0);
}
function ua(t, e) {
  if ((t.f & rn) === 0 && (t.f & De) !== 0) {
    t.f ^= De, (t.f & Ae) === 0 && (ye(t, Ee), xt.ensure().schedule(t));
    for (var r = t.first; r !== null; ) {
      var n = r.next, a = (r.f & zt) !== 0 || (r.f & We) !== 0;
      ua(r, a ? e : !1), r = n;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const o of s)
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
let ie = null, Ze = !1;
function Ge(t) {
  ie = t;
}
let se = null;
function nt(t) {
  se = t;
}
let rt = null;
function ca(t) {
  ie !== null && ((ie.f & yr) !== 0 || (ie.f & Pe) !== 0) && (rt ??= /* @__PURE__ */ new Set()).add(t);
}
let Be = null, Ue = 0, He = null;
function Ii(t) {
  He = t;
}
let da = 1, Ct = 0, Rt = Ct;
function kn(t) {
  Rt = t;
}
function va() {
  return ++da;
}
function cr(t) {
  var e = t.f;
  if ((e & Ee) !== 0)
    return !0;
  if ((e & Ve) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      t.deps
    ), n = r.length, a = 0; a < n; a++) {
      var s = r[a];
      if (cr(
        /** @type {Derived} */
        s
      ) && Wn(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & Qe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ke === null && ye(t, Ae);
  }
  return !1;
}
function ha(t, e, r = !0) {
  var n = t.reactions;
  if (n !== null && !(rt !== null && rt.has(t)))
    for (var a = 0; a < n.length; a++) {
      var s = n[a];
      (s.f & Pe) !== 0 ? ha(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (r ? ye(s, Ee) : (s.f & Ae) !== 0 && ye(s, Ve), fn(
        /** @type {Effect} */
        s
      ));
    }
}
function _a(t) {
  var e = Be, r = Ue, n = He, a = ie, s = rt, o = Te, l = Ze, f = Rt, c = t.f;
  Be = /** @type {null | Value[]} */
  null, Ue = 0, He = null, ie = (c & (We | vt)) === 0 ? t : null, rt = null, Vt(t.ctx), Ze = !1, Rt = ++Ct, t.ac !== null && (Kt(() => {
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
    if (Un() && He !== null && !Ze && v !== null && (t.f & (Pe | Ve | Ee)) === 0)
      for (var p = 0; p < /** @type {Source[]} */
      He.length; p++)
        ha(
          He[p],
          /** @type {Effect} */
          t
        );
    if (a !== null && a !== t) {
      if (Ct++, a.deps !== null)
        for (let m = 0; m < r; m += 1)
          a.deps[m].rv = Ct;
      if (e !== null)
        for (const m of e)
          m.rv = Ct;
      He !== null && (n === null ? n = He : n.push(.../** @type {Source[]} */
      He));
    }
    return (t.f & bt) !== 0 && (t.f ^= bt), u;
  } catch (m) {
    return En(t), Li(m);
  } finally {
    t.f ^= yr, Be = e, Ue = r, He = n, ie = a, rt = s, Vt(o), Ze = l, Rt = f;
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
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & Qe) !== 0 && (s.f ^= Qe), s.v !== Se && an(s), s.ac !== null && Kt(() => {
      s.ac.abort(fr), s.ac = null, ye(s, Ee);
    }), wi(s), or(s, 0);
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
  if ((e & Fe) === 0) {
    ye(t, Ae);
    var r = se, n = gr;
    se = t, gr = (e & (We | vt)) === 0;
    try {
      (e & (Xe | Nn)) !== 0 ? Pi(t) : dn(t), sa(t);
      var a = _a(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = da;
      var s;
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
  if (ie !== null && !Ze) {
    var n = se !== null && (se.f & Fe) !== 0;
    if (!n && (rt === null || !rt.has(t))) {
      var a = ie.deps;
      if ((ie.f & yr) !== 0)
        t.rv < Ct && (t.rv = Ct, Be === null && a !== null && a[Ue] === t ? Ue++ : Be === null ? Be = [t] : Be.push(t));
      else {
        ie.deps ??= [], pr.call(ie.deps, t) || ie.deps.push(t);
        var s = t.reactions;
        s === null ? t.reactions = [ie] : pr.call(s, ie) || s.push(ie);
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
      var l = o.v;
      return ((o.f & Ae) === 0 && o.reactions !== null || pa(o)) && (l = ln(o)), tt.set(o, l), l;
    }
    var f = (o.f & Qe) === 0 && !Ze && ie !== null && (gr || (ie.f & Qe) !== 0), c = (o.f & Gt) === 0;
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
      const n = Rn(r);
      for (let a in n) {
        const s = n[a].get;
        if (s)
          try {
            s.call(t);
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
  function a(s) {
    if (n.capture || Qr.call(e, s), !s.cancelBubble)
      return Kt(() => r?.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? (a.__removed = !1, ot(() => {
    a.__removed || e.addEventListener(t, a, n);
  })) : e.addEventListener(t, a, n), a;
}
function ct(t, e, r, n, a) {
  var s = { capture: n, passive: a }, o = qi(t, e, r, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Lr(() => {
    o.__removed = !0, e.removeEventListener(t, o, s);
  });
}
function _e(t, e, r) {
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
  ), n = t.type, a = t.composedPath?.() || [], s = (
    /** @type {null | Element} */
    a[0] || t.target
  );
  Ir = t, Dr || (Dr = !0, setTimeout(() => {
    Dr = !1, Ir = null;
  }));
  var o = 0, l = Ir === t && t[rr];
  if (l) {
    var f = a.indexOf(l);
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
  if (s = /** @type {Element} */
  a[o] || t.target, s !== e) {
    Ln(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var h = ie, u = se;
    Ge(null), nt(null);
    try {
      for (var v, p = []; s !== null && s !== e; ) {
        try {
          var m = s[rr]?.[n];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && m.call(s, t);
        } catch (L) {
          v ? p.push(L) : v = L;
        }
        if (t.cancelBubble) break;
        o++, s = o < a.length ? (
          /** @type {Element} */
          a[o]
        ) : null;
      }
      if (v) {
        for (let L of p)
          queueMicrotask(() => {
            throw L;
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
function Nt(t, e) {
  var r = (
    /** @type {Effect} */
    se
  );
  r.nodes === null && (r.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function A(t, e) {
  var r = (e & Ja) !== 0, n = (e & Za) !== 0, a, s = !t.startsWith("<!>");
  return () => {
    a === void 0 && (a = ba(s ? t : "<!>" + t), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(a)));
    var o = (
      /** @type {TemplateNode} */
      n || ea ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(o)
      ), f = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Nt(l, f);
    } else
      Nt(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function zi(t, e, r = "svg") {
  var n = !t.startsWith("<!>"), a = `<${r}>${n ? t : "<!>" + t}</${r}>`, s;
  return () => {
    if (!s) {
      var o = (
        /** @type {DocumentFragment} */
        ba(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Je(o)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ Je(l);
    }
    var f = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
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
    var e = ut(t + "");
    return Nt(e, e), e;
  }
}
function dt() {
  var t = document.createDocumentFragment(), e = document.createComment(""), r = ut();
  return t.append(e, r), Nt(e, r), t;
}
function b(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Yi(t) {
  let e = 0, r = Mt(0), n;
  return () => {
    un() && (i(r), Jt(() => (e === 0 && (n = Ie(() => t(() => sr(r)))), e += 1, () => {
      ot(() => {
        e -= 1, e === 0 && (n?.(), n = void 0, sr(r));
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
  #s = null;
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
  #l = null;
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
  #b = Yi(() => (this.#c = Mt(this.#h), () => {
    this.#c = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, r, n, a) {
    this.#t = e, this.#e = r, this.#o = (s) => {
      var o = (
        /** @type {Effect} */
        se
      );
      o.b = this, o.f |= Hr, n(s);
    }, this.parent = /** @type {Effect} */
    se.b, this.transform_error = a ?? this.parent?.transform_error ?? ((s) => s), this.#n = Rr(() => {
      this.#y();
    }, Wi);
  }
  #x() {
    try {
      this.#i = ze(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #p(e) {
    const r = this.#e.failed, { reset: n, invoke_onerror: a } = this.#m(e);
    ot(a), r && (this.#l = ze(() => {
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
      } catch (o) {
        $e(o, this.#n && this.#n.parent);
      }
    } };
  }
  #k() {
    const e = this.#e.pending;
    e && (this.is_pending = !0, this.#r = ze(() => e(this.#t)), ot(() => {
      var r = this.#a = document.createDocumentFragment(), n = ut(), a = !1;
      if (r.append(n), this.#i = this.#w(() => {
        try {
          return ze(() => this.#o(n));
        } catch (s) {
          try {
            this.error(s), a = !0;
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
      this.#f === 0 && (this.#t.before(r), this.#a = null, Lt(
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
      if (this.is_pending = this.has_pending_snippet(), this.#f = 0, this.#h = 0, this.#i = ze(() => {
        this.#o(this.#t);
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
    var r = se, n = ie, a = Te;
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
    this.#_(e, r), this.#h += e, !(!this.#c || this.#u) && (this.#u = !0, ot(() => {
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
    te?.is_fork ? (this.#i && te.skip_effect(this.#i), this.#r && te.skip_effect(this.#r), this.#l && te.skip_effect(this.#l), te.oncommit(() => {
      this.#E(e);
    })) : this.#E(e);
  }
  /**
   * @param {unknown} error
   */
  #E(e) {
    this.#i && (qe(this.#i), this.#i = null), this.#r && (qe(this.#r), this.#r = null), this.#l && (qe(this.#l), this.#l = null);
    let r = this.#e.failed;
    const n = (a) => {
      const { reset: s, invoke_onerror: o } = this.#m(a);
      o(), r && (this.#l = this.#w(() => {
        try {
          return ze(() => {
            var l = (
              /** @type {Effect} */
              se
            );
            l.b = this, l.f |= Hr, r(
              this.#t,
              () => a,
              () => s
            );
          });
        } catch (l) {
          return $e(
            l,
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
      } catch (s) {
        $e(s, this.#n && this.#n.parent);
        return;
      }
      a !== null && typeof a == "object" && typeof /** @type {any} */
      a.then == "function" ? a.then(
        n,
        /** @param {unknown} e */
        (s) => $e(s, this.#n && this.#n.parent)
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
const dr = /* @__PURE__ */ new Map();
function Ji(t, { target: e, anchor: r, props: n = {}, events: a, context: s, intro: o = !0, transformError: l }) {
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
      (p) => {
        Re({});
        var m = (
          /** @type {ComponentContext} */
          Te
        );
        s && (m.c = s), a && (n.$$events = a), f = t(p, n) || nn(), Me();
      },
      l
    );
    var u = /* @__PURE__ */ new Set(), v = (p) => {
      for (var m = 0; m < p.length; m++) {
        var L = p[m];
        if (!u.has(L)) {
          u.add(L);
          var y = Bi(L);
          for (const W of [e, document]) {
            var T = dr.get(W);
            T === void 0 && (T = /* @__PURE__ */ new Map(), dr.set(W, T));
            var H = T.get(L);
            H === void 0 ? (W.addEventListener(L, Qr, { passive: y }), T.set(L, 1)) : T.set(L, H + 1);
          }
        }
      }
    };
    return v(Cr(ma)), Zr.add(v), () => {
      for (var p of u)
        for (const y of [e, document]) {
          var m = (
            /** @type {Map<string, number>} */
            dr.get(y)
          ), L = (
            /** @type {number} */
            m.get(p)
          );
          --L == 0 ? (y.removeEventListener(p, Qr), m.delete(p), m.size === 0 && dr.delete(y)) : m.set(p, L);
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
  #s = /* @__PURE__ */ new Map();
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
      ), n = this.#s.get(r);
      if (n)
        kr(n), this.#o.delete(r);
      else {
        var a = this.#e.get(r);
        a && (kr(a.effect), this.#s.set(r, a.effect), this.#e.delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
      }
      for (const [s, o] of this.#t) {
        if (this.#t.delete(s), s === e)
          break;
        const l = this.#e.get(o);
        l && (qe(l.effect), this.#e.delete(o));
      }
      for (const [s, o] of this.#s) {
        if (s === r || this.#o.has(s)) continue;
        const l = () => {
          if (Array.from(this.#t.values()).includes(s)) {
            var c = document.createDocumentFragment();
            vn(o, c), c.append(ut()), this.#e.set(s, { effect: o, fragment: c });
          } else
            qe(o);
          this.#o.delete(s), this.#s.delete(s);
        };
        this.#n || !n ? (this.#o.add(s), Lt(o, l, !1)) : l();
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
    if (r && !this.#s.has(e) && !this.#e.has(e))
      if (a) {
        var s = document.createDocumentFragment(), o = ut();
        s.append(o), this.#e.set(e, {
          effect: ze(() => r(o)),
          fragment: s
        });
      } else
        this.#s.set(
          e,
          ze(() => r(this.anchor))
        );
    if (this.#t.set(n, e), a) {
      for (const [l, f] of this.#s)
        l === e ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [l, f] of this.#e)
        l === e ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(this.#i), n.ondiscard(this.#r);
    } else
      this.#i(n);
  }
}
function Y(t, e, r = !1) {
  var n = new ya(t), a = r ? zt : 0;
  function s(o, l) {
    n.ensure(o, l);
  }
  Rr(() => {
    var o = !1;
    e((l, f = 0) => {
      o = !0, s(f, l);
    }), o || s(-1, null);
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
function es(t, e, r) {
  for (var n = [], a = e.length, s, o = e.length, l = 0; l < a; l++) {
    let u = e[l];
    Lt(
      u,
      () => {
        if (s) {
          if (s.pending.delete(u), s.done.add(u), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            $r(t, Cr(s.done)), v.delete(s), v.size === 0 && (t.outrogroups = null);
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
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function $r(t, e, r = !0) {
  var n;
  if (t.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of t.pending.values())
      for (const l of o)
        n.add(
          /** @type {EachItem} */
          t.items.get(l).e
        );
  }
  for (var a = 0; a < e.length; a++) {
    var s = e[a];
    if (n?.has(s)) {
      s.f |= et;
      const o = document.createDocumentFragment();
      vn(s, o);
    } else
      qe(e[a], r);
  }
}
var Sn;
function he(t, e, r, n, a, s = null) {
  var o = t, l = /* @__PURE__ */ new Map(), f = (e & In) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(ut());
  }
  var h = null, u = /* @__PURE__ */ Yn(() => {
    var W = r();
    return (
      /** @type {V[]} */
      Ar(W) ? W : W == null ? [] : Cr(W)
    );
  }), v, p = /* @__PURE__ */ new Map(), m = !0;
  function L(W) {
    (H.effect.f & Fe) === 0 && (H.pending.delete(W), H.fallback = h, ts(H, v, o, e, n), h !== null && (v.length === 0 ? (h.f & et) === 0 ? kr(h) : (h.f ^= et, nr(h, null, o)) : Lt(h, () => {
      h = null;
    })));
  }
  function y(W) {
    H.pending.delete(W);
  }
  var T = Rr(() => {
    v = /** @type {V[]} */
    i(u);
    for (var W = v.length, I = /* @__PURE__ */ new Set(), w = (
      /** @type {Batch} */
      te
    ), j = na(), q = 0; q < W; q += 1) {
      var N = v[q], D = n(N, q), Z = m ? null : l.get(D);
      Z ? (Z.v && Yt(Z.v, N), Z.i && Yt(Z.i, q), j && w.unskip_effect(Z.e)) : (Z = rs(
        l,
        m ? o : Sn ??= ut(),
        N,
        D,
        q,
        a,
        e,
        r
      ), m || (Z.e.f |= et), l.set(D, Z)), I.add(D);
    }
    if (W === 0 && s && !h && (m ? h = ze(() => s(o)) : (h = ze(() => s(Sn ??= ut())), h.f |= et)), W > I.size && ai(), !m)
      if (p.set(w, I), j) {
        for (const [S, _] of l)
          I.has(S) || w.skip_effect(_.e);
        w.oncommit(L), w.ondiscard(y);
      } else
        L(w);
    i(u);
  }), H = { effect: T, items: l, pending: p, outrogroups: null, fallback: h };
  m = !1;
}
function er(t) {
  for (; t !== null && (t.f & We) === 0; )
    t = t.next;
  return t;
}
function ts(t, e, r, n, a) {
  var s = (n & Va) !== 0, o = e.length, l = t.items, f = er(t.effect.first), c, h = null, u, v = [], p = [], m, L, y, T;
  if (s)
    for (T = 0; T < o; T += 1)
      m = e[T], L = a(m, T), y = /** @type {EachItem} */
      l.get(L).e, (y.f & et) === 0 && (y.nodes?.a?.measure(), (u ??= /* @__PURE__ */ new Set()).add(y));
  for (T = 0; T < o; T += 1) {
    if (m = e[T], L = a(m, T), y = /** @type {EachItem} */
    l.get(L).e, t.outrogroups !== null)
      for (const Z of t.outrogroups)
        Z.pending.delete(y), Z.done.delete(y);
    if ((y.f & De) !== 0 && (kr(y), s && (y.nodes?.a?.unfix(), (u ??= /* @__PURE__ */ new Set()).delete(y))), (y.f & et) !== 0)
      if (y.f ^= et, y === f)
        nr(y, null, r);
      else {
        var H = h ? h.next : f;
        y === t.effect.last && (t.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), mt(t, h, y), mt(t, y, H), nr(y, H, r), h = y, v = [], p = [], f = er(h.next);
        continue;
      }
    if (y !== f) {
      if (c !== void 0 && c.has(y)) {
        if (v.length < p.length) {
          var W = p[0], I;
          h = W.prev;
          var w = v[0], j = v[v.length - 1];
          for (I = 0; I < v.length; I += 1)
            nr(v[I], W, r);
          for (I = 0; I < p.length; I += 1)
            c.delete(p[I]);
          mt(t, w.prev, j.next), mt(t, h, w), mt(t, j, W), f = W, h = j, T -= 1, v = [], p = [];
        } else
          c.delete(y), nr(y, f, r), mt(t, y.prev, y.next), mt(t, y, h === null ? t.effect.first : h.next), mt(t, h, y), h = y;
        continue;
      }
      for (v = [], p = []; f !== null && f !== y; )
        (c ??= /* @__PURE__ */ new Set()).add(f), p.push(f), f = er(f.next);
      if (f === null)
        continue;
    }
    (y.f & et) === 0 && v.push(y), h = y, f = er(y.next);
  }
  if (t.outrogroups !== null) {
    for (const Z of t.outrogroups)
      Z.pending.size === 0 && ($r(t, Cr(Z.done)), t.outrogroups?.delete(Z));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (f !== null || c !== void 0) {
    var q = [];
    if (c !== void 0)
      for (y of c)
        (y.f & De) === 0 && q.push(y);
    for (; f !== null; )
      (f.f & De) === 0 && f !== t.fallback && q.push(f), f = er(f.next);
    var N = q.length;
    if (N > 0) {
      var D = (n & In) !== 0 && o === 0 ? r : null;
      if (s) {
        for (T = 0; T < N; T += 1)
          q[T].nodes?.a?.measure();
        for (T = 0; T < N; T += 1)
          q[T].nodes?.a?.fix();
      }
      es(t, q, D);
    }
  }
  s && ot(() => {
    if (u !== void 0)
      for (y of u)
        y.nodes?.a?.apply();
  });
}
function rs(t, e, r, n, a, s, o, l) {
  var f = (o & Ha) !== 0 ? (o & Ya) === 0 ? /* @__PURE__ */ Si(r, !1, !1) : Mt(r) : null, c = (o & za) !== 0 ? Mt(a) : null;
  return {
    v: f,
    i: c,
    e: ze(() => (s(e, f ?? r, c ?? a, l), () => {
      t.delete(n);
    }))
  };
}
function nr(t, e, r) {
  if (t.nodes)
    for (var n = t.nodes.start, a = t.nodes.end, s = e && (e.f & et) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ur(n)
      );
      if (s.before(n), n === a)
        return;
      n = o;
    }
}
function mt(t, e, r) {
  e === null ? t.effect.first = r : e.next = r, r === null ? t.effect.last = e : r.prev = e;
}
function yt(t, e, r = !1, n = !1, a = !1, s = !1) {
  var o = t, l = "";
  if (r)
    var f = (
      /** @type {Element} */
      t
    );
  R(() => {
    var c = (
      /** @type {Effect} */
      se
    );
    if (l !== (l = e() ?? "")) {
      if (r) {
        c.nodes = null, f.innerHTML = /** @type {string} */
        l, l !== "" && Nt(
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
      ), c.nodes = null), l !== "") {
        var h = n ? Qa : a ? $a : void 0, u = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          aa(n ? "svg" : a ? "math" : "template", h)
        );
        u.innerHTML = /** @type {any} */
        l;
        var v = n || a ? u : (
          /** @type {HTMLTemplateElement} */
          u.content
        );
        if (Nt(
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
function wt(t, e, r) {
  cn(() => {
    var n = Ie(() => e(t, r?.()) || {});
    if (r && n?.update) {
      var a = !1, s = (
        /** @type {any} */
        {}
      );
      Jt(() => {
        var o = r();
        Fi(o), a && jn(s, o) && (s = o, n.update(o));
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
function ns() {
  for (var t, e, r = 0, n = "", a = arguments.length; r < a; r++) (t = arguments[r]) && (e = wa(t)) && (n && (n += " "), n += e);
  return n;
}
function as(t) {
  return typeof t == "object" ? ns(t) : t ?? "";
}
const An = [...` 	
\r\f \v\uFEFF`];
function is(t, e, r) {
  var n = t == null ? "" : "" + t;
  if (e && (n = n ? n + " " + e : e), r) {
    for (var a of Object.keys(r))
      if (r[a])
        n = n ? n + " " + a : a;
      else if (n.length)
        for (var s = a.length, o = 0; (o = n.indexOf(a, o)) >= 0; ) {
          var l = o + s;
          (o === 0 || An.includes(n[o - 1])) && (l === n.length || An.includes(n[l])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(l + 1) : o = l;
        }
  }
  return n === "" ? null : n;
}
function Cn(t, e = !1) {
  var r = e ? " !important;" : ";", n = "";
  for (var a of Object.keys(t)) {
    var s = t[a];
    s != null && s !== "" && (n += " " + a + ": " + s + r);
  }
  return n;
}
function Fr(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function ss(t, e) {
  if (e) {
    var r = "", n, a;
    if (Array.isArray(e) ? (n = e[0], a = e[1]) : n = e, t) {
      t = String(t).replaceAll(/\/\*.*?\*\//g, "").trim();
      var s = !1, o = 0, l = !1, f = [];
      n && f.push(...Object.keys(n).map(Fr)), a && f.push(...Object.keys(a).map(Fr));
      var c = 0, h = -1;
      const L = t.length;
      for (var u = 0; u < L; u++) {
        var v = t[u];
        if (l ? v === "/" && t[u - 1] === "*" && (l = !1) : s ? s === v && (s = !1) : v === "/" && t[u + 1] === "*" ? l = !0 : v === '"' || v === "'" ? s = v : v === "(" ? o++ : v === ")" && o--, !l && s === !1 && o === 0) {
          if (v === ":" && h === -1)
            h = u;
          else if (v === ";" || u === L - 1) {
            if (h !== -1) {
              var p = Fr(t.substring(c, h).trim());
              if (!f.includes(p)) {
                v !== ";" && u++;
                var m = t.substring(c, u).trim();
                r += " " + m + ";";
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
function Le(t, e, r, n, a, s) {
  var o = (
    /** @type {any} */
    t[zr]
  );
  if (o !== r || o === void 0) {
    var l = is(r, n, s);
    l == null ? t.removeAttribute("class") : t.className = l, t[zr] = r;
  } else if (s && a !== s)
    for (var f in s) {
      var c = !!s[f];
      (a == null || c !== !!a[f]) && t.classList.toggle(f, c);
    }
  return s;
}
function jr(t, e = {}, r, n) {
  for (var a in r) {
    var s = r[a];
    e[a] !== s && (r[a] == null ? t.style.removeProperty(a) : t.style.setProperty(a, s, n));
  }
}
function jt(t, e, r, n) {
  var a = (
    /** @type {any} */
    t[Vr]
  );
  if (a !== e) {
    var s = ss(e, n);
    s == null ? t.removeAttribute("style") : t.style.cssText = s, t[Vr] = e;
  } else n && (Array.isArray(n) ? (jr(t, r?.[0], n[0]), jr(t, r?.[1], n[1], "important")) : jr(t, r, n));
  return n;
}
function ls(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function os(t, e) {
  var r = t.__defaultValue, n = t.multiple, a = n ? r ?? [] : null;
  if (!(n && !Ar(a))) {
    t.selectedIndex;
    for (var s of t.options) {
      var o = Ut(s);
      ls(
        s,
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
    r.every(us) || ("__defaultValue" in t && os(t), "__value" in t && hn(t, t.__value));
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
function fs(t, e, r = e) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  sn(t, "change", (s) => {
    var o = s ? "[selected]" : ":checked", l;
    if (t.multiple)
      l = [].map.call(t.querySelectorAll(o), Ut);
    else {
      var f = t.querySelector(o) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      l = f && Ut(f);
    }
    r(l), t.__value = l, te !== null && n.add(te);
  }), cn(() => {
    var s = e();
    if (t === document.activeElement) {
      var o = (
        /** @type {Batch} */
        te
      );
      if (n.has(o))
        return;
    }
    if (hn(t, s, a), a && s === void 0) {
      var l = t.querySelector(":checked");
      l !== null && (s = Ut(l), r(s));
    }
    t.__value = s, a = !1;
  });
}
function Ut(t) {
  return "__value" in t ? t.__value : t.value;
}
function us(t) {
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
const cs = /* @__PURE__ */ Symbol("is custom element"), ds = /* @__PURE__ */ Symbol("is html"), vs = Ua ? "progress" : "PROGRESS";
function ka(t, e) {
  var r = Ea(t);
  r.value === (r.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== vs) || (t.value = e ?? "");
}
function K(t, e, r, n) {
  var a = Ea(t);
  a[e] !== (a[e] = r) && (e === "loading" && (t[qa] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && hs(t).has(e) ? t[e] = r : t.setAttribute(e, r));
}
function Ea(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[Pn] ??= {
      [cs]: t.nodeName.includes("-"),
      [ds]: t.namespaceURI === Dn
    }
  );
}
var Tn = /* @__PURE__ */ new Map();
function hs(t) {
  var e = t.getAttribute("is") || t.nodeName, r = Tn.get(e);
  if (r) return r;
  Tn.set(e, r = /* @__PURE__ */ new Set());
  for (var n, a = t, s = Element.prototype; s !== a; ) {
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
  sn(t, "input", async (a) => {
    var s = a ? t.defaultValue : t.value;
    if (s = Br(t) ? qr(s) : s, r(s), te !== null && n.add(te), await Er(), s !== (s = e())) {
      var o = t.selectionStart, l = t.selectionEnd, f = t.value.length;
      if (t.value = s ?? "", l !== null) {
        var c = t.value.length;
        o === l && l === f && c > f ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = o, t.selectionEnd = Math.min(l, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ie(e) == null && t.value && (r(Br(t) ? qr(t.value) : t.value), te !== null && n.add(te)), Jt(() => {
    var a = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        te
      );
      if (n.has(s))
        return;
    }
    Br(t) && a === qr(t.value) || t.type === "date" && !a && !t.value || a !== t.value && (t.value = a ?? "");
  });
}
function _s(t, e, r = e) {
  sn(t, "change", (n) => {
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
function Ot(t = nn(), e, r, n) {
  var a = (
    /** @type {ComponentContext} */
    Te.r
  ), s = (
    /** @type {Effect} */
    se
  );
  return cn(() => {
    var o, l;
    return Jt(() => {
      o = l, l = [], Ie(() => {
        Ur(r(...l), t) || (e(t, ...l), o && Ur(r(...o), t) && e(null, ...o));
      });
    }), () => {
      let f = s;
      for (; f !== a && f.parent !== null && f.parent.f & mr; )
        f = f.parent;
      const c = () => {
        l && Ur(r(...l), t) && e(null, ...l);
      }, h = f.teardown;
      f.teardown = () => {
        c(), h?.();
      };
    };
  }), t;
}
function gs(t, e, r, n, a) {
  var s = () => {
    n(r[t]);
  };
  r.addEventListener(e, s), a ? Jt(() => {
    r[t] = a();
  }) : s(), (r === document.body || r === window || r === document) && Lr(() => {
    r.removeEventListener(e, s);
  });
}
let vr = !1;
function ps(t) {
  var e = vr;
  try {
    return vr = !1, [t(), vr];
  } finally {
    vr = e;
  }
}
function Pt(t, e, r, n) {
  var a = !0, s = (r & Xa) !== 0, o = (r & Ka) !== 0, l = (
    /** @type {V} */
    n
  ), f = !0, c = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), h = () => o && a ? (c ??= /* @__PURE__ */ lr(
    /** @type {() => V} */
    n
  ), i(c)) : (f && (f = !1, l = o ? Ie(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l);
  let u;
  if (s) {
    var v = ft in t || Ba in t;
    u = Bt(t, e)?.set ?? (v && e in t ? (I) => t[e] = I : void 0);
  }
  var p, m = !1;
  s ? [p, m] = ps(() => (
    /** @type {V} */
    t[e]
  )) : p = /** @type {V} */
  t[e], p === void 0 && n !== void 0 && (p = h(), u && (fi(), u(p)));
  var L;
  if (L = () => {
    var I = (
      /** @type {V} */
      t[e]
    );
    return I === void 0 ? h() : (f = !0, I);
  }, (r & Ga) === 0)
    return L;
  if (u) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(I, w) {
        return arguments.length > 0 ? ((!w || y || m) && u(w ? L() : I), I) : L();
      })
    );
  }
  var T = !1, H = ((r & Wa) !== 0 ? lr : Yn)(() => (T = !1, L()));
  s && i(H);
  var W = (
    /** @type {Effect} */
    se
  );
  return (
    /** @type {() => V} */
    (function(I, w) {
      if (arguments.length > 0) {
        const j = w ? i(H) : s ? me(I) : I;
        return x(H, j), T = !0, l !== void 0 && (l = j), I;
      }
      return ht && T || (W.f & Fe) !== 0 ? H.v : i(H);
    })
  );
}
function kt(t) {
  Te === null && qn(), Tt(() => {
    const e = Ie(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function _n(t) {
  Te === null && qn(), kt(() => () => Ie(t));
}
const ms = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ms);
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
    const s = a.errors && typeof a.errors == "object" ? Object.values(a.errors).flat(1 / 0).join(" ") : a.errors;
    throw new Error(a.message || s || "This request is unavailable. Please try again.");
  }
  return r.full ? a : a.data;
}
var bs = /* @__PURE__ */ A('<button type="button" class="column-resize"></button>'), ys = /* @__PURE__ */ A('<th><button type="button" class="column-label"> <span class="column-sort" aria-hidden="true"> </span></button><!></th>'), ws = /* @__PURE__ */ A('<i role="img"></i>'), xs = /* @__PURE__ */ A('<button class="open-challenge"> </button>'), ks = /* @__PURE__ */ A("<td><!></td>"), Es = /* @__PURE__ */ A("<tr></tr>"), Ss = /* @__PURE__ */ A('<div class="message-list"><table><thead><tr></tr></thead><tbody id="challenge-rows"></tbody></table></div>');
function As(t, e) {
  Re(e, !0);
  let r = Pt(e, "hidden", 3, !1), n = Pt(e, "solvesEnabled", 3, !1);
  const a = ["status", "subject", "points", "category", "solves"], s = {
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
  }, l = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
  let f = /* @__PURE__ */ V(me([...a])), c = /* @__PURE__ */ V(null), h, u = /* @__PURE__ */ ue(() => i(f).filter((S) => S !== "solves" || n())), v = /* @__PURE__ */ V(me({
    key: Ie(() => e.defaultOrder) === "name" ? "subject" : "id",
    direction: 1
  })), p = /* @__PURE__ */ V(window.innerWidth <= 760), m = /* @__PURE__ */ ue(() => i(u).filter((S) => !i(p) || S !== "category")), L = /* @__PURE__ */ ue(() => {
    const S = i(v).key === "solves" && !n() ? "id" : i(v).key, _ = (g) => ({
      status: Number(g.solved_by_me),
      subject: g.name,
      category: g.category,
      points: g.value,
      solves: g.solves ?? -1,
      id: g.id
    })[S];
    return [...e.challenges].sort((g, E) => (["id", "points", "status", "solves"].includes(S) ? _(g) - _(E) : l.compare(_(g), _(E))) * i(v).direction || g.id - E.id);
  });
  function y() {
    if (!h || r()) return;
    const S = h.parentElement.clientWidth;
    if (!S) return;
    const _ = {
      status: 60,
      subject: 130,
      points: 75,
      category: 200,
      solves: 70,
      ...i(c)
    };
    let g = S - i(m).reduce((E, P) => E + _[P], 0);
    if (g >= 0) _.subject += g;
    else {
      for (const E of ["subject", "category", "status", "points", "solves"].filter((P) => i(m).includes(P))) {
        const P = Math.min(-g, Math.max(0, _[E] - o[E]));
        _[E] -= P, g += P;
      }
      if (g < 0) {
        const E = i(m).reduce((P, G) => P + _[G], 0);
        for (const P of i(m)) _[P] *= S / E;
      }
    }
    x(c, _, !0);
  }
  function T(S) {
    const _ = new ResizeObserver(y);
    return _.observe(S.parentElement), {
      destroy() {
        _.disconnect();
      }
    };
  }
  Tt(() => {
    i(m), r(), Ie(y);
  });
  function H(S, _, g = i(c)) {
    const E = i(m)[i(m).indexOf(S) + 1];
    if (!E) return;
    const P = Math.max(Math.min(0, o[S] - g[S]), Math.min(_, Math.max(0, g[E] - o[E])));
    x(
      c,
      {
        ...i(c),
        [S]: g[S] + P,
        [E]: g[E] - P
      },
      !0
    );
  }
  function W() {
    x(
      c,
      Object.fromEntries([...h.tHead.rows[0].cells].map((S) => [
        S.dataset.column,
        S.getBoundingClientRect().width || o[S.dataset.column]
      ])),
      !0
    );
  }
  async function I(S, _) {
    if (!_ || _ === S) return;
    i(c) || W();
    const g = new Map([...h.querySelectorAll("th,td")].map((G) => [G, G.getBoundingClientRect().left])), E = i(f).indexOf(_), P = i(f).filter((G) => G !== S);
    P.splice(E, 0, S), x(f, P, !0), await Er(), matchMedia("(prefers-reduced-motion: reduce)").matches || g.forEach((G, Q) => {
      const $ = G - Q.getBoundingClientRect().left;
      $ && Q.animate(
        [
          { transform: `translateX(${$}px)` },
          { transform: "translateX(0)" }
        ],
        { duration: 180, easing: "ease-out" }
      );
    });
  }
  function w(S, { key: _, resize: g = !1 }) {
    const E = S.closest("th");
    let P, G, Q = !1;
    function $() {
      G?.remove(), G = null, P = null, E.classList.remove("column-dragging"), h.querySelectorAll(".column-drop-before,.column-drop-after").forEach((U) => U.classList.remove("column-drop-before", "column-drop-after"));
    }
    function re(U) {
      U.button !== 0 || !U.isPrimary || (Q = !1, W(), P = {
        x: U.clientX,
        y: U.clientY,
        offset: U.clientX - E.getBoundingClientRect().left,
        width: i(c)[_],
        widths: { ...i(c) }
      }, S.setPointerCapture(U.pointerId));
    }
    function fe(U) {
      if (P) {
        if (g) {
          H(_, U.clientX - P.x, P.widths);
          return;
        }
        if (!G && Math.hypot(U.clientX - P.x, U.clientY - P.y) > 5 && (Q = !0, G = document.createElement("div"), G.className = "column-drag-ghost", G.textContent = s[_], G.setAttribute("aria-hidden", "true"), G.style.width = `${P.width}px`, document.body.append(G), E.classList.add("column-dragging")), G) {
          G.style.left = `${U.clientX - P.offset}px`, G.style.top = `${U.clientY + 12}px`, h.querySelectorAll(".column-drop-before,.column-drop-after").forEach((pe) => pe.classList.remove("column-drop-before", "column-drop-after"));
          const le = document.elementFromPoint(U.clientX, U.clientY)?.closest("th");
          le?.parentElement === E.parentElement && le !== E && le.classList.add(i(f).indexOf(_) < i(f).indexOf(le.dataset.column) ? "column-drop-after" : "column-drop-before");
        }
      }
    }
    function de(U) {
      if (!P) return;
      const le = document.elementFromPoint(U.clientX, U.clientY)?.closest("th"), pe = !!G;
      $(), S.hasPointerCapture(U.pointerId) && S.releasePointerCapture(U.pointerId), !g && pe && le?.parentElement === E.parentElement && I(_, le.dataset.column), S.focus();
    }
    function F(U) {
      if (!g) {
        if (Q && U.detail !== 0) {
          Q = !1;
          return;
        }
        x(
          v,
          {
            key: _,
            direction: i(v).key === _ ? -i(v).direction : 1
          },
          !0
        );
      }
    }
    function C(U) {
      if (!["ArrowLeft", "ArrowRight"].includes(U.key) || !g && !U.altKey) return;
      U.preventDefault();
      const le = U.key === "ArrowRight" ? 1 : -1;
      if (g)
        W(), H(_, le * 10);
      else {
        const pe = i(u).filter((ee) => !i(p) || ee !== "category");
        I(_, pe[pe.indexOf(_) + le]);
      }
    }
    const B = {
      pointerdown: re,
      pointermove: fe,
      pointerup: de,
      pointercancel: $,
      lostpointercapture: $,
      click: F,
      keydown: C
    };
    return Object.entries(B).forEach(([U, le]) => S.addEventListener(U, le)), {
      destroy() {
        $(), Object.entries(B).forEach(([U, le]) => S.removeEventListener(U, le));
      }
    };
  }
  var j = Ss();
  ct("resize", Kr, () => x(p, window.innerWidth <= 760));
  var q = k(j);
  jt(q, "", {}, { width: "100%" });
  var N = k(q), D = k(N);
  he(D, 20, () => i(u), (S) => S, (S, _) => {
    var g = ys();
    let E;
    var P = k(g), G = k(P), Q = d(G), $ = z(Q, !0);
    wt(P, (F, C) => w?.(F, C), () => ({ key: _ }));
    var re = d(P);
    {
      var fe = (F) => {
        var C = bs();
        wt(C, (B, U) => w?.(B, U), () => ({ key: _, resize: !0 })), R(() => K(C, "aria-label", `Resize ${s[_]} column`)), b(F, C);
      }, de = /* @__PURE__ */ ue(() => i(m).includes(_) && _ !== i(m).at(-1));
      Y(re, (F) => {
        i(de) && F(fe);
      });
    }
    R(() => {
      K(g, "data-column", _), K(g, "aria-sort", i(v).key === _ ? i(v).direction === 1 ? "ascending" : "descending" : "none"), E = jt(g, "", E, {
        width: i(c) ? `${i(c)[_] ?? o[_]}px` : void 0
      }), K(P, "aria-label", `${s[_]} column. Click to sort. Drag or use Alt and arrow keys to move.`), M(G, s[_]), M($, i(v).key === _ ? i(v).direction === 1 ? "▲" : "▼" : "");
    }), b(S, g);
  });
  var Z = d(N);
  he(Z, 21, () => i(L), (S) => S.id, (S, _) => {
    var g = Es();
    he(g, 20, () => i(u), (E) => E, (E, P) => {
      var G = ks(), Q = k(G);
      {
        var $ = (C) => {
          var B = ws();
          R(() => {
            Le(B, 1, `fas fa-envelope${i(_).solved_by_me ? "-open" : ""}`), K(B, "aria-label", i(_).solved_by_me ? "Solved" : "Unsolved");
          }), b(C, B);
        }, re = (C) => {
          var B = xs(), U = z(B, !0);
          R(() => {
            K(B, "data-id", i(_).id), M(U, i(_).name);
          }), _e("click", B, () => e.onopen(i(_).id)), b(C, B);
        }, fe = (C) => {
          var B = Ye();
          R(() => M(B, i(_).category)), b(C, B);
        }, de = (C) => {
          var B = Ye();
          R(() => M(B, i(_).solves ?? "-")), b(C, B);
        }, F = (C) => {
          var B = Ye();
          R(() => M(B, i(_).value)), b(C, B);
        };
        Y(Q, (C) => {
          P === "status" ? C($) : P === "subject" ? C(re, 1) : P === "category" ? C(fe, 2) : P === "solves" ? C(de, 3) : C(F, -1);
        });
      }
      R(() => K(G, "data-column", P)), b(E, G);
    }), R(() => Le(g, 1, as(i(_).solved_by_me ? "read" : "unread"))), b(S, g);
  }), Ot(q, (S) => h = S, () => h), wt(q, (S) => T?.(S)), R(() => K(j, "hidden", r())), b(t, j), Me();
}
at(["click"]);
var Cs = /* @__PURE__ */ A('<details><summary> </summary> <div class="hint-content"><!></div></details>');
function Ts(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ V(!1), n = /* @__PURE__ */ V(!1), a = /* @__PURE__ */ V(null), s = /* @__PURE__ */ V("");
  async function o(y) {
    if (x(r, y.currentTarget.open, !0), !(!i(r) || i(n) || i(a))) {
      x(n, !0), x(s, "");
      try {
        let T = await Ce(`/hints/${e.hint.id}`);
        if (!T.content) {
          if (T.cost > 0 && !confirm(`Unlock this hint for ${T.cost} points?`)) {
            x(r, !1);
            return;
          }
          await Ce("/unlocks", { target: e.hint.id, type: "hints" }), T = await Ce(`/hints/${e.hint.id}`);
        }
        x(a, T, !0);
      } catch (T) {
        x(s, T.message, !0);
      } finally {
        x(n, !1);
      }
    }
  }
  var l = Cs(), f = k(l), c = z(f), h = d(f, 2), u = k(h);
  {
    var v = (y) => {
      var T = Ye("Loading hint...");
      b(y, T);
    }, p = (y) => {
      var T = Ye();
      R(() => M(T, i(s))), b(y, T);
    }, m = (y) => {
      var T = dt(), H = ce(T);
      yt(H, () => i(a).html), b(y, T);
    }, L = (y) => {
      var T = Ye();
      R(() => M(T, i(a).content)), b(y, T);
    };
    Y(u, (y) => {
      i(n) ? y(v) : i(s) ? y(p, 1) : i(a)?.html ? y(m, 2) : i(a) && y(L, 3);
    });
  }
  R(() => {
    K(l, "data-hint", e.hint.id), M(c, `${(e.hint.title || "View hint") ?? ""}${e.hint.cost ? ` (${e.hint.cost} points)` : ""}`);
  }), ct("toggle", l, o), gs("open", "toggle", l, (y) => x(r, y), () => i(r)), b(t, l), Me();
}
var Ls = /* @__PURE__ */ A('<button type="button" class="solve-count"> </button>'), Rs = /* @__PURE__ */ A('<span class="challenge-solves">Total solves: <!></span>'), Ms = /* @__PURE__ */ A('<p role="status">Loading solves...</p>'), Ns = /* @__PURE__ */ A('<div class="alert alert-danger" role="alert"> <button type="button">Retry</button></div>'), Os = /* @__PURE__ */ A("<tr><td><a> </a></td><td><time> </time></td></tr>"), Ps = /* @__PURE__ */ A('<div class="table-responsive"><table class="table table-striped"><thead><tr><th>User</th><th>Solve time</th></tr></thead><tbody></tbody></table></div>'), Is = /* @__PURE__ */ A("<p>No solves to display.</p>"), Ds = /* @__PURE__ */ A('<!> <dialog class="express-dialog solves-dialog" aria-labelledby="solves-title"><h2 id="solves-title"> </h2> <!> <div class="dialog-actions"><button type="button" class="btn btn-primary">Close</button></div></dialog>', 1);
function Fs(t, e) {
  Re(e, !0);
  let r, n = /* @__PURE__ */ V(me([])), a = /* @__PURE__ */ V(!1), s = /* @__PURE__ */ V(""), o = 0;
  _n(() => o++);
  async function l() {
    const N = ++o;
    x(a, !0), x(s, ""), x(n, [], !0);
    try {
      const D = await Ce(`/challenges/${e.challengeId}/solves`);
      N === o && x(n, D, !0);
    } catch (D) {
      N === o && x(s, D.message, !0);
    } finally {
      N === o && x(a, !1);
    }
  }
  function f() {
    r.showModal(), l();
  }
  function c(N) {
    let D = !1;
    function Z(g) {
      const E = N.getBoundingClientRect();
      return g.target === N && (g.clientX < E.left || g.clientX > E.right || g.clientY < E.top || g.clientY > E.bottom);
    }
    function S(g) {
      D = Z(g);
    }
    function _(g) {
      D && Z(g) && N.close(), D = !1;
    }
    return N.addEventListener("pointerdown", S), N.addEventListener("click", _), {
      destroy() {
        N.removeEventListener("pointerdown", S), N.removeEventListener("click", _);
      }
    };
  }
  var h = Ds(), u = ce(h);
  {
    var v = (N) => {
      var D = Rs(), Z = d(k(D));
      {
        var S = (g) => {
          var E = Ls(), P = z(E, !0);
          R(() => {
            K(E, "aria-label", `View ${e.count} solves`), M(P, e.count);
          }), _e("click", E, f), b(g, E);
        }, _ = (g) => {
          var E = Ye("0");
          b(g, E);
        };
        Y(Z, (g) => {
          e.count > 0 ? g(S) : g(_, -1);
        });
      }
      b(N, D);
    }, p = /* @__PURE__ */ ue(() => Number.isInteger(e.count) && e.count >= 0);
    Y(u, (N) => {
      i(p) && N(v);
    });
  }
  var m = d(u, 2), L = k(m), y = z(L), T = d(L, 2);
  {
    var H = (N) => {
      var D = Ms();
      b(N, D);
    }, W = (N) => {
      var D = Ns(), Z = k(D), S = d(Z);
      R(() => M(Z, `${i(s) ?? ""} `)), _e("click", S, l), b(N, D);
    }, I = (N) => {
      var D = Ps(), Z = k(D), S = d(k(Z));
      he(S, 21, () => i(n), we, (_, g) => {
        var E = Os(), P = k(E), G = k(P), Q = z(G, !0), $ = d(P), re = k($), fe = z(re, !0);
        R(
          (de) => {
            K(G, "href", i(g).account_url), M(Q, i(g).name), K(re, "datetime", i(g).date), M(fe, de);
          },
          [
            () => new Date(i(g).date).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "long" })
          ]
        ), b(_, E);
      }), b(N, D);
    }, w = (N) => {
      var D = Is();
      b(N, D);
    };
    Y(T, (N) => {
      i(a) ? N(H) : i(s) ? N(W, 1) : i(n).length ? N(I, 2) : N(w, -1);
    });
  }
  var j = d(T, 2), q = z(j);
  Ot(m, (N) => r = N, () => r), wt(m, (N) => c?.(N)), R(() => M(y, `Solves - ${e.challengeName ?? ""}`)), ct("close", m, () => o++), _e("click", q, () => r.close()), b(t, h), Me();
}
at(["click"]);
var js = /* @__PURE__ */ A('<span class="challenge-tag"> </span>'), Bs = /* @__PURE__ */ A('<div class="challenge-tags"><span>Tags:</span><!></div>'), qs = /* @__PURE__ */ A("<div> </div>"), Us = /* @__PURE__ */ A("<p>Connection: <code> </code></p>"), Hs = /* @__PURE__ */ A('<a download=""><i class="fas fa-paperclip" aria-hidden="true"></i> </a>'), zs = /* @__PURE__ */ A('<i aria-hidden="true"></i><strong> </strong>', 1), Vs = /* @__PURE__ */ A('<p>Attempts: <span id="attempts"> </span> </p>'), Ys = /* @__PURE__ */ A('<header class="message-header"><h2> </h2> <div class="challenge-metadata"><span> </span><span> </span><!></div> <!> <!></header> <div class="message-body"><!></div> <!> <div class="attachments"></div> <div id="hints"></div> <form class="reply"><label for="flag">Reply with flag</label> <input id="flag" name="submission" autocomplete="off" required=""/> <button type="submit">Send</button> <div id="submission-status" role="status" aria-atomic="true"><!></div> <!></form>', 1);
function Ws(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ V(""), n = /* @__PURE__ */ V(!1), a = /* @__PURE__ */ V(""), s = /* @__PURE__ */ V(""), o = /* @__PURE__ */ V(me(Ie(() => e.challenge.attempts))), l = /* @__PURE__ */ V(me(Ie(() => e.challenge.solves))), f = !0, c = /* @__PURE__ */ ue(() => i(a) || (e.challenge.solved_by_me ? "Correct flag received." : "")), h = /* @__PURE__ */ ue(() => i(s) || (i(n) ? "pending" : e.challenge.solved_by_me ? "success" : ""));
  _n(() => {
    f = !1;
  });
  const u = /* @__PURE__ */ ue(() => new DOMParser().parseFromString(e.challenge.view || "", "text/html").querySelector(".challenge-desc")?.innerHTML);
  function v(ee) {
    const O = ee.split("/").pop().split("?")[0];
    try {
      return decodeURIComponent(O);
    } catch {
      return O;
    }
  }
  async function p(ee) {
    if (ee.preventDefault(), !i(n)) {
      x(n, !0), x(a, "Sending..."), x(s, "");
      try {
        const O = await Ce("/challenges/attempt", { challenge_id: e.challenge.id, submission: i(r) });
        if (!f) return;
        x(a, O.message, !0);
        const X = e.challenge.type === "delayed" && O.status === "incorrect" && /^Your submission has been taken(?:\.|$)/.test(O.message || "");
        if (x(s, ["correct", "already_solved"].includes(O.status) ? "success" : X ? "info" : "error", !0), O.status === "authentication_required" && (location.href = `${window.init.urlRoot}/login?next=${encodeURIComponent(location.pathname + location.hash)}`), O.status === "correct" && x(r, ""), e.challenge.max_attempts || ["correct", "already_solved"].includes(O.status)) {
          const ne = await Ce(`/challenges/${e.challenge.id}`);
          if (!f) return;
          x(o, ne.attempts, !0), x(l, ne.solves, !0);
        }
        await e.onattempt(O);
      } catch (O) {
        f && (x(a, O.message, !0), x(s, "error"));
      } finally {
        x(n, !1);
      }
    }
  }
  var m = Ys(), L = ce(m), y = k(L), T = z(y, !0), H = d(y, 2), W = k(H), I = z(W), w = d(W), j = z(w), q = d(w);
  Fs(q, {
    get challengeId() {
      return e.challenge.id;
    },
    get challengeName() {
      return e.challenge.name;
    },
    get count() {
      return i(l);
    }
  });
  var N = d(H, 2);
  {
    var D = (ee) => {
      var O = Bs(), X = d(k(O));
      he(X, 17, () => e.challenge.tags, we, (ne, ve) => {
        var ge = js(), ke = z(ge, !0);
        R(() => M(ke, typeof i(ve) == "string" ? i(ve) : i(ve).value)), b(ne, ge);
      }), b(ee, O);
    };
    Y(N, (ee) => {
      e.challenge.tags?.length && ee(D);
    });
  }
  var Z = d(N, 2);
  {
    var S = (ee) => {
      var O = qs(), X = z(O);
      R(() => M(X, `From: ${e.challenge.attribution ?? ""}`)), b(ee, O);
    };
    Y(Z, (ee) => {
      e.challenge.attribution && ee(S);
    });
  }
  var _ = d(L, 2), g = k(_);
  {
    var E = (ee) => {
      var O = dt(), X = ce(O);
      yt(X, () => i(u)), b(ee, O);
    }, P = (ee) => {
      var O = Ye();
      R(() => M(O, e.challenge.description)), b(ee, O);
    };
    Y(g, (ee) => {
      i(u) ? ee(E) : ee(P, -1);
    });
  }
  var G = d(_, 2);
  {
    var Q = (ee) => {
      var O = Us(), X = d(k(O)), ne = z(X, !0);
      R(() => M(ne, e.challenge.connection_info)), b(ee, O);
    };
    Y(G, (ee) => {
      e.challenge.connection_info && ee(Q);
    });
  }
  var $ = d(G, 2);
  he($, 21, () => e.challenge.files || [], we, (ee, O) => {
    var X = Hs(), ne = d(k(X));
    R(
      (ve) => {
        K(X, "href", i(O)), M(ne, ` ${ve ?? ""}`);
      },
      [() => v(i(O))]
    ), b(ee, X);
  });
  var re = d($, 2);
  he(re, 21, () => e.challenge.hints || [], (ee) => ee.id, (ee, O) => {
    Ts(ee, {
      get hint() {
        return i(O);
      }
    });
  });
  var fe = d(re, 2), de = d(k(fe), 2), F = d(de, 2), C = d(F, 2), B = k(C);
  {
    var U = (ee) => {
      var O = zs(), X = ce(O), ne = d(X), ve = z(ne, !0);
      R(() => {
        Le(X, 1, `fas ${i(h) === "success" ? "fa-check-circle" : i(h) === "error" ? "fa-times-circle" : i(h) === "info" ? "fa-info-circle" : "fa-paper-plane"}`), M(ve, i(c));
      }), b(ee, O);
    };
    Y(B, (ee) => {
      i(c) && ee(U);
    });
  }
  var le = d(C, 2);
  {
    var pe = (ee) => {
      var O = Vs(), X = d(k(O)), ne = z(X, !0), ve = d(X);
      R(() => {
        M(ne, i(o)), M(ve, ` / ${e.challenge.max_attempts ?? ""}`);
      }), b(ee, O);
    };
    Y(le, (ee) => {
      e.challenge.max_attempts && ee(pe);
    });
  }
  R(() => {
    M(T, e.challenge.name), M(I, `Category: ${e.challenge.category ?? ""}`), M(j, `Points: ${e.challenge.value ?? ""}`), F.disabled = i(n), Le(C, 1, `submission-feedback ${i(h)}`), K(C, "hidden", !i(c));
  }), ct("submit", fe, p), Sr(de, () => i(r), (ee) => x(r, ee)), b(t, m), Me();
}
var Gs = /* @__PURE__ */ A('<hr class="folder-divider"/>'), Xs = /* @__PURE__ */ A('<!> <button type="button"><i aria-hidden="true"></i> </button>', 1), Ks = /* @__PURE__ */ A('<div class="express-toolbar"><button id="all-challenges" type="button"><i class="fas fa-inbox" aria-hidden="true"></i> All Challenges</button> <button id="help-button" type="button"><i class="fas fa-question-circle" aria-hidden="true"></i> Help</button> <label for="search">Search</label><div class="express-search"><i class="fas fa-search" aria-hidden="true"></i><input id="search" type="search" placeholder="Find a challenge"/></div></div> <div class="express-address">Address <span id="address"> </span></div> <div class="express-workspace"><aside class="express-sidebar" aria-label="Challenge categories"><h2>Folders</h2> <div id="folders"></div> <p id="progress" aria-live="polite"> </p></aside> <section class="express-main" aria-label="Challenges"><h1 id="folder-heading"> </h1> <p id="board-status" role="status"> </p> <button id="retry" type="button">Try again</button> <!> <section id="reader" aria-label="Challenge message"><button id="back" type="button">Back to challenges</button> <div id="message"><!></div></section></section></div> <dialog id="help-dialog"><h2> </h2> <p>Open a challenge to read its message. Reply with the flag to solve it.</p> <p>Unsolved challenges appear as unread mail. Solved challenges appear as read mail.</p> <p>Drag column headers to reorder them, or their edges to resize. With a header focused, use Alt + Left/Right to reorder.</p> <form method="dialog"><button>Close</button></form></dialog>', 1);
function Js(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ V(me([])), n = /* @__PURE__ */ V("All Challenges"), a = /* @__PURE__ */ V("all"), s = /* @__PURE__ */ V(""), o = /* @__PURE__ */ V(null), l = /* @__PURE__ */ V(!1), f = /* @__PURE__ */ V(null), c = /* @__PURE__ */ V(""), h = /* @__PURE__ */ V(!0), u = /* @__PURE__ */ V(""), v = /* @__PURE__ */ V(""), p = 0, m = 0, L, y, T = /* @__PURE__ */ ue(() => i(r).filter((J) => !J.solved_by_me)), H = /* @__PURE__ */ ue(() => [...new Set(i(r).map((J) => J.category))]), W = /* @__PURE__ */ ue(() => i(a) === "category" ? i(r).filter((J) => J.category === i(n)) : i(r)), I = /* @__PURE__ */ ue(() => [
    {
      name: "All Challenges",
      type: "all",
      count: i(T).length
    },
    {
      name: "Unsolved Challenges",
      type: "unread",
      count: i(T).length
    },
    ...i(H).map((J) => ({
      name: J,
      type: "category",
      count: i(T).filter((ae) => ae.category === J).length
    }))
  ]), w = /* @__PURE__ */ ue(() => i(r).filter((J) => (i(a) === "all" || (i(a) === "unread" ? !J.solved_by_me : J.category === i(n))) && `${J.name} ${J.category}`.toLowerCase().includes(i(s).toLowerCase().trim())));
  Tt(() => {
    const J = `${e.config.appName} - ${i(n)}`;
    document.title = J, document.getElementById("window-title").textContent = J;
  });
  async function j() {
    const J = ++m;
    x(h, !0), x(u, "");
    try {
      const ae = await Ce("/challenges");
      J === m && x(r, ae.sort((oe, xe) => oe.id - xe.id), !0);
    } catch (ae) {
      J === m && x(u, ae.message, !0);
    } finally {
      J === m && x(h, !1);
    }
  }
  async function q(J = !0) {
    p++, x(l, !1), x(f, null), x(c, ""), history.replaceState(null, "", location.pathname + location.search), await Er(), J && document.querySelector(`.open-challenge[data-id="${i(o)}"]`)?.focus();
  }
  function N(J) {
    x(n, J.name, !0), x(a, J.type, !0), x(v, ""), q(!1);
  }
  async function D(J) {
    const ae = ++p;
    x(o, J, !0), x(l, !0), x(f, null), x(c, ""), x(v, "");
    try {
      const oe = await Ce(`/challenges/${J}`);
      if (ae !== p) return;
      x(f, oe, !0), history.replaceState(null, "", `#challenge-${J}`), await Er(), y?.focus();
    } catch (oe) {
      ae === p && x(c, oe.message, !0);
    }
  }
  async function Z(J) {
    const ae = p;
    await j(), ae === p && i(a) === "unread" && ["correct", "already_solved"].includes(J.status) && !i(u) && (await q(!1), x(v, "Challenge solved. Removed from Unsolved Challenges."), document.querySelector('#folders [data-view="unread"]')?.focus());
  }
  kt(() => {
    const J = location.hash.match(/-(\d+)$/);
    j().then(() => {
      J && p === 0 && D(Number(J[1]));
    });
  }), _n(() => {
    p++, m++;
  });
  var S = Ks(), _ = ce(S), g = k(_), E = d(g, 2), P = d(E, 3), G = d(k(P)), Q = d(_, 2), $ = d(k(Q)), re = z($), fe = d(Q, 2), de = k(fe), F = d(k(de), 2);
  he(F, 23, () => i(I), (J) => `${J.type}:${J.name}`, (J, ae, oe) => {
    var xe = Xs(), je = ce(xe);
    {
      var Ne = (pt) => {
        var Qt = Gs();
        b(pt, Qt);
      };
      Y(je, (pt) => {
        i(oe) === 2 && pt(Ne);
      });
    }
    var be = d(je, 2);
    let Oe;
    var st = k(be), gt = d(st);
    R(() => {
      K(be, "data-view", i(ae).type), K(be, "data-folder", i(ae).name), Oe = Le(be, 1, "", null, Oe, {
        active: i(a) === i(ae).type && i(n) === i(ae).name
      }), Le(st, 1, `fas fa-${i(ae).type === "unread" ? "envelope" : "folder"}`), M(gt, `${i(ae).name ?? ""}${i(ae).type !== "all" && i(ae).count > 0 ? ` (${i(ae).count})` : ""}`);
    }), _e("click", be, () => N(i(ae))), b(J, xe);
  });
  var C = d(F, 2), B = z(C), U = d(de, 2), le = k(U), pe = z(le, !0), ee = d(le, 2), O = z(ee, !0), X = d(ee, 2), ne = d(X, 2);
  {
    let J = /* @__PURE__ */ ue(() => i(r).some((oe) => Number.isInteger(oe.solves))), ae = /* @__PURE__ */ ue(() => e.config.themeSettings?.challenge_order);
    As(ne, {
      get challenges() {
        return i(w);
      },
      get solvesEnabled() {
        return i(J);
      },
      get defaultOrder() {
        return i(ae);
      },
      onopen: D,
      get hidden() {
        return i(l);
      }
    });
  }
  var ve = d(ne, 2), ge = k(ve);
  Ot(ge, (J) => y = J, () => y);
  var ke = d(ge, 2), it = k(ke);
  {
    var Et = (J) => {
      var ae = dt(), oe = ce(ae);
      {
        var xe = (be) => {
          var Oe = Ye();
          R(() => M(Oe, i(c))), b(be, Oe);
        }, je = (be) => {
          var Oe = dt(), st = ce(Oe);
          $i(st, () => i(f).id, (gt) => {
            Ws(gt, {
              get challenge() {
                return i(f);
              },
              onattempt: Z
            });
          }), b(be, Oe);
        }, Ne = (be) => {
          var Oe = Ye("Loading message...");
          b(be, Oe);
        };
        Y(oe, (be) => {
          i(c) ? be(xe) : i(f) ? be(je, 1) : be(Ne, -1);
        });
      }
      b(J, ae);
    };
    Y(it, (J) => {
      i(l) && J(Et);
    });
  }
  var It = d(fe, 2), Dt = k(It), Zt = z(Dt, !0);
  Ot(It, (J) => L = J, () => L), R(
    (J) => {
      M(re, `Folders / ${i(n) ?? ""}`), M(B, `${J ?? ""} of ${i(W).length ?? ""} challenges solved`), M(pe, i(n)), M(O, i(u) || (i(h) ? "Loading challenges..." : i(v) || (i(w).length ? "" : "No challenges found."))), K(X, "hidden", !i(u)), K(ve, "hidden", !i(l)), M(Zt, e.config.appName);
    },
    [
      () => i(W).filter((J) => J.solved_by_me).length
    ]
  ), _e("click", g, () => {
    x(s, ""), N(i(I)[0]);
  }), _e("click", E, () => L.showModal()), _e("input", G, () => {
    x(v, ""), q(!1);
  }), Sr(G, () => i(s), (J) => x(s, J)), _e("click", X, j), _e("click", ge, () => q()), b(t, S), Me();
}
at(["click", "input"]);
function Sa(t, e = !0) {
  if (!e) return;
  const r = t.querySelector(".logon-drag-handle, .window-drag-handle");
  if (!r) return;
  let n;
  const a = [];
  function s(u, v, p) {
    u?.addEventListener(v, p), a.push(() => u?.removeEventListener(v, p));
  }
  function o(u, v) {
    const p = window.visualViewport, m = p?.offsetLeft || 0, L = p?.offsetTop || 0, y = p?.width || document.documentElement.clientWidth, T = Math.max(0, (p?.height || innerHeight) - (t.classList.contains("express-window") ? 34 : 0));
    t.style.maxWidth = `${y}px`, t.style.maxHeight = `${T}px`;
    const H = t.getBoundingClientRect();
    t.style.left = `${Math.max(m, Math.min(u, m + y - H.width))}px`, t.style.top = `${Math.max(L, Math.min(v, L + T - H.height))}px`;
  }
  const l = t.getBoundingClientRect();
  t.classList.add("is-draggable"), o(l.left, l.top), s(r, "pointerdown", (u) => {
    if (u.button !== 0 || !u.isPrimary) return;
    const v = t.getBoundingClientRect();
    n = { id: u.pointerId, x: u.clientX - v.left, y: u.clientY - v.top }, r.setPointerCapture(u.pointerId), r.classList.add("is-dragging"), u.preventDefault();
  }), s(r, "pointermove", (u) => {
    n?.id === u.pointerId && o(u.clientX - n.x, u.clientY - n.y);
  });
  const f = () => {
    n = null, r.classList.remove("is-dragging");
  };
  for (const u of ["pointerup", "pointercancel", "lostpointercapture"]) s(r, u, f);
  s(r, "keydown", (u) => {
    const v = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[u.key];
    if (!v) return;
    u.preventDefault();
    const p = t.getBoundingClientRect(), m = u.shiftKey ? 1 : 10;
    o(p.left + v[0] * m, p.top + v[1] * m);
  });
  const c = () => {
    const u = t.getBoundingClientRect();
    o(u.left, u.top);
  };
  s(window, "resize", c), s(window.visualViewport, "resize", c), s(window.visualViewport, "scroll", c);
  const h = new ResizeObserver(c);
  return h.observe(t), { destroy() {
    h.disconnect(), a.forEach((u) => u());
  } };
}
var Zs = /* @__PURE__ */ A('<div role="alert"><span><!></span><button type="button" class="btn-close" aria-label="Close"></button></div>');
function Aa(t, e) {
  Re(e, !0);
  let r = Pt(e, "errors", 19, () => []), n = Pt(e, "infos", 19, () => []), a = /* @__PURE__ */ V(me([]));
  var s = dt(), o = ce(s);
  he(
    o,
    17,
    () => [
      ...n().map((l) => ({ text: l, type: "info" })),
      ...r().map((l) => ({ text: l, type: "danger" }))
    ],
    we,
    (l, f, c) => {
      var h = dt(), u = ce(h);
      {
        var v = (m) => {
          var L = Zs(), y = k(L), T = k(y);
          {
            var H = (w) => {
              var j = dt(), q = ce(j);
              yt(q, () => i(f).text.html), b(w, j);
            }, W = (w) => {
              var j = Ye();
              R(() => M(j, i(f).text.text ?? i(f).text)), b(w, j);
            };
            Y(T, (w) => {
              i(f).text.html ? w(H) : w(W, -1);
            });
          }
          var I = d(y);
          R(() => Le(L, 1, `alert alert-${i(f).type ?? ""} alert-dismissible`)), _e("click", I, () => x(a, [...i(a), c], !0)), b(m, L);
        }, p = /* @__PURE__ */ ue(() => !i(a).includes(c));
        Y(u, (m) => {
          i(p) && m(v);
        });
      }
      b(l, h);
    }
  ), b(t, s), Me();
}
at(["click"]);
var Qs = /* @__PURE__ */ A('<span class="text-danger" aria-hidden="true">*</span>'), $s = /* @__PURE__ */ A("<option> </option>"), el = /* @__PURE__ */ A('<select class="form-select"></select>'), tl = /* @__PURE__ */ A('<input type="checkbox" class="form-check-input"/>'), rl = /* @__PURE__ */ A('<textarea class="form-control"></textarea>'), nl = /* @__PURE__ */ A('<input class="form-control"/>'), al = /* @__PURE__ */ A('<small class="form-text text-muted"> </small>'), il = /* @__PURE__ */ A('<div><label class="form-label"> <!></label> <!> <!></div>');
function gn(t, e) {
  Re(e, !0);
  let r = Pt(e, "compact", 3, !1), n = /* @__PURE__ */ V(me(Ie(() => e.field.type === "SelectField" ? String(e.field.value ?? "") : e.field.value ?? ""))), a = /* @__PURE__ */ V(me(Ie(() => e.field.value === !0 || e.field.value === "True" || e.field.value === "true")));
  const s = {
    PasswordField: "password",
    EmailField: "email",
    URLField: "url",
    DateField: "date",
    IntegerField: "number",
    HiddenField: "hidden"
  }, o = /* @__PURE__ */ ue(() => e.field.name === "name" ? "username" : e.field.name === "email" ? "email" : e.field.name === "confirm" ? "current-password" : e.field.type === "PasswordField" ? r() ? "current-password" : "new-password" : void 0);
  var l = il();
  let f;
  var c = k(l), h = k(c), u = d(h);
  {
    var v = (I) => {
      var w = Qs();
      b(I, w);
    };
    Y(u, (I) => {
      e.field.required && I(v);
    });
  }
  var p = d(c, 2);
  {
    var m = (I) => {
      var w = el();
      he(w, 21, () => e.field.choices, we, (j, q) => {
        var N = /* @__PURE__ */ ue(() => Da(i(q), 2));
        let D = () => i(N)[0], Z = () => i(N)[1];
        var S = $s(), _ = z(S, !0), g = {};
        R(
          (E) => {
            M(_, Z()), g !== (g = E) && (S.value = (S.__value = g) ?? "");
          },
          [() => String(D())]
        ), b(j, S);
      }), xa(w), R(() => {
        K(w, "id", e.field.id), K(w, "name", e.field.name), w.required = e.field.required;
      }), fs(w, () => i(n), (j) => x(n, j)), b(I, w);
    }, L = (I) => {
      var w = tl();
      w.value = w.__value = "y", R(() => {
        K(w, "id", e.field.id), K(w, "name", e.field.name), w.required = e.field.required;
      }), _s(w, () => i(a), (j) => x(a, j)), b(I, w);
    }, y = (I) => {
      var w = rl();
      R(() => {
        K(w, "id", e.field.id), K(w, "name", e.field.name), w.required = e.field.required;
      }), Sr(w, () => i(n), (j) => x(n, j)), b(I, w);
    }, T = (I) => {
      var w = nl();
      R(() => {
        K(w, "id", e.field.id), K(w, "name", e.field.name), K(w, "type", s[e.field.type] || "text"), K(w, "autocomplete", i(o)), w.required = e.field.required;
      }), Sr(w, () => i(n), (j) => x(n, j)), b(I, w);
    };
    Y(p, (I) => {
      e.field.type === "SelectField" ? I(m) : e.field.type === "BooleanField" ? I(L, 1) : e.field.type === "TextAreaField" ? I(y, 2) : I(T, -1);
    });
  }
  var H = d(p, 2);
  {
    var W = (I) => {
      var w = al(), j = z(w, !0);
      R(() => M(j, e.field.description)), b(I, w);
    };
    Y(H, (I) => {
      e.field.description && !r() && I(W);
    });
  }
  R(() => {
    f = Le(l, 1, "", null, f, { "logon-field": r(), "mb-3": !r() }), K(c, "for", e.field.id), M(h, e.field.label);
  }), b(t, l), Me();
}
var sl = /* @__PURE__ */ A("<a>Forgot your password?</a>"), ll = /* @__PURE__ */ A('<!> <form method="post" accept-charset="utf-8"><!> <input type="hidden" name="nonce"/> <div><!> <button id="_submit" name="_submit" type="submit" class="btn btn-primary xp-default"> </button></div></form>', 1), ol = /* @__PURE__ */ A('<img class="logon-icon" alt=""/>'), fl = /* @__PURE__ */ Vi('<svg class="logon-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="9" width="50" height="36" rx="2" fill="#eef4ff" stroke="#153e80" stroke-width="3"></rect><path d="M12 14h40v25H12z" fill="#245bb4"></path><path d="M26 46v7h12v-7M18 55h28" fill="none" stroke="#153e80" stroke-width="3"></path><rect x="24" y="23" width="16" height="12" rx="1" fill="#ffe4a0"></rect><path d="M28 23v-3a4 4 0 0 1 8 0v3" fill="none" stroke="#ffe4a0" stroke-width="3"></path></svg>'), ul = /* @__PURE__ */ A('<a class="btn logon-oauth">Log on with Major League Cyber</a>'), cl = /* @__PURE__ */ A('<footer class="logon-footer">Need an account? <a>Register</a></footer>'), dl = /* @__PURE__ */ A('<div class="login-stage"><section class="xp-logon" aria-labelledby="logon-title"><header class="express-title logon-drag-handle" tabindex="0" role="button" aria-label="Move login window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><i class="fas fa-key" aria-hidden="true"></i> Log On</header> <div class="logon-banner"><!> <div><h1 id="logon-title"> </h1><p> </p></div></div> <div class="logon-content"><p>Enter your user name and password to continue.</p><!> <!></div> <!></section></div>'), vl = /* @__PURE__ */ A("<p> </p>"), hl = /* @__PURE__ */ A("<p> </p> <p>Please click the link in that email to confirm your account.</p><p>If the email does not arrive, check your spam folder or contact an administrator to manually verify your account.</p>", 1), _l = /* @__PURE__ */ A('<a class="btn btn-secondary mb-3">Log on with Major League Cyber</a>'), gl = /* @__PURE__ */ A('<a class="btn btn-secondary mt-3">Change Email Address</a>'), pl = /* @__PURE__ */ A('<p class="text-muted mt-3">By registering, you agree to the <a target="_blank" rel="noopener">privacy policy</a> and <a target="_blank" rel="noopener">terms of service</a>.</p>'), ml = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1> </h1></div></div> <div class="container"><div class="auth-page"><!> <!> <!> <!> <!> <!></div></div>', 1);
function bl(t, e) {
  Re(e, !0);
  const r = (h) => {
    var u = ll(), v = ce(u);
    Aa(v, {
      get errors() {
        return e.site.errors;
      },
      get infos() {
        return e.site.infos;
      }
    });
    var p = d(v, 2);
    let m;
    var L = k(p);
    he(L, 17, () => e.page.fields || [], we, (q, N) => {
      {
        let D = /* @__PURE__ */ ue(() => e.page.kind === "login");
        gn(q, {
          get field() {
            return i(N);
          },
          get compact() {
            return i(D);
          }
        });
      }
    });
    var y = d(L, 2), T = d(y, 2);
    let H;
    var W = k(T);
    {
      var I = (q) => {
        var N = sl();
        R(() => K(N, "href", `${i(a)}/reset_password`)), b(q, N);
      };
      Y(W, (q) => {
        e.page.kind === "login" && q(I);
      });
    }
    var w = d(W, 2), j = z(w, !0);
    R(() => {
      m = Le(p, 1, "", null, m, { "logon-form": e.page.kind === "login" }), ka(y, e.config.csrfNonce), H = Le(T, 1, "", null, H, {
        "logon-actions": e.page.kind === "login",
        "auth-actions": e.page.kind !== "login"
      }), w.disabled = i(n), M(j, i(n) ? "Please wait..." : e.page.kind === "login" ? "Log On" : e.page.kind === "confirm" ? "Send Confirmation Email" : "Submit");
    }), ct("submit", p, () => x(n, !0)), b(h, u);
  };
  let n = /* @__PURE__ */ V(!1);
  const a = /* @__PURE__ */ ue(() => e.config.urlRoot), s = {
    login: "Log On",
    register: "Register",
    reset: "Reset Password",
    confirm: "Confirm"
  };
  kt(() => {
    e.page.kind === "login" && document.getElementById("name")?.focus();
    const h = () => x(n, !1);
    return window.addEventListener("pageshow", h), () => window.removeEventListener("pageshow", h);
  });
  var o = dt(), l = ce(o);
  {
    var f = (h) => {
      var u = dl(), v = k(u), p = d(k(v), 2), m = k(p);
      {
        var L = (_) => {
          var g = ol();
          R(() => K(g, "src", e.site.logo)), b(_, g);
        }, y = (_) => {
          var g = fl();
          b(_, g);
        };
        Y(m, (_) => {
          e.site.logo ? _(L) : _(y, -1);
        });
      }
      var T = d(m, 2), H = k(T), W = z(H, !0), I = d(H), w = z(I), j = d(p, 2), q = d(k(j));
      r(q);
      var N = d(q, 2);
      {
        var D = (_) => {
          var g = ul();
          R(() => K(g, "href", e.site.oauth)), b(_, g);
        };
        Y(N, (_) => {
          e.site.oauth && _(D);
        });
      }
      var Z = d(j, 2);
      {
        var S = (_) => {
          var g = cl(), E = d(k(g));
          R(() => K(E, "href", `${i(a)}/register`)), b(_, g);
        };
        Y(Z, (_) => {
          e.site.registration && _(S);
        });
      }
      wt(v, (_) => Sa?.(_)), R(() => {
        M(W, e.site.appName), M(w, `Log on to ${e.site.eventName ?? ""}`);
      }), b(h, u);
    }, c = (h) => {
      var u = ml(), v = ce(u), p = k(v), m = k(p), L = z(m, !0), y = d(v, 2), T = k(y), H = k(T);
      {
        var W = (g) => {
          var E = vl(), P = z(E, !0);
          R(() => M(P, e.page.mode === "set" ? "You can now reset the password for your account and log in. Please enter a new password below." : "Please provide the email address associated with your account below.")), b(g, E);
        };
        Y(H, (g) => {
          e.page.kind === "reset" && g(W);
        });
      }
      var I = d(H, 2);
      {
        var w = (g) => {
          var E = hl(), P = ce(E), G = z(P, !0);
          R(() => M(G, e.page.initial ? "To send a confirmation email to your email address, please click the button below." : "We've sent a confirmation email to your email address.")), b(g, E);
        };
        Y(I, (g) => {
          e.page.kind === "confirm" && g(w);
        });
      }
      var j = d(I, 2);
      {
        var q = (g) => {
          var E = _l();
          R(() => K(E, "href", e.site.oauth)), b(g, E);
        };
        Y(j, (g) => {
          e.page.kind === "register" && e.site.oauth && g(q);
        });
      }
      var N = d(j, 2);
      r(N);
      var D = d(N, 2);
      {
        var Z = (g) => {
          var E = gl();
          R(() => K(E, "href", `${i(a)}/settings`)), b(g, E);
        };
        Y(D, (g) => {
          e.page.kind === "confirm" && g(Z);
        });
      }
      var S = d(D, 2);
      {
        var _ = (g) => {
          var E = pl(), P = d(k(E)), G = d(P, 2);
          R(() => {
            K(P, "href", e.page.privacy), K(G, "href", e.page.terms);
          }), b(g, E);
        };
        Y(S, (g) => {
          e.page.kind === "register" && e.page.showTerms && g(_);
        });
      }
      R(() => M(L, s[e.page.kind])), b(h, u);
    };
    Y(l, (h) => {
      e.page.kind === "login" ? h(f) : h(c, -1);
    });
  }
  b(t, o), Me();
}
var yl = /* @__PURE__ */ A('<div class="alert alert-danger" role="alert"> </div>'), wl = /* @__PURE__ */ A('<div class="alert alert-success" role="status"> </div>'), xl = /* @__PURE__ */ A('<tr><td> </td><td> </td><td> </td><td><button class="btn"><i class="fas fa-times" aria-hidden="true"></i></button></td></tr>'), kl = /* @__PURE__ */ A('<div class="table-responsive"><table class="table"><thead><tr><th>Created</th><th>Expiration</th><th>Description</th><th>Delete</th></tr></thead><tbody></tbody></table></div>'), El = /* @__PURE__ */ A("<p>No active tokens.</p>"), Sl = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1>Settings</h1></div></div> <div class="container settings-layout"><div class="nav flex-column nav-pills" aria-label="Settings sections"><button id="settings-profile-tab">Profile</button> <button id="settings-tokens-tab">Access Tokens</button></div> <div><!> <!> <section id="profile"><form method="post"><!> <button type="submit" id="_submit" class="btn btn-primary"> </button></form></section> <section id="tokens"><form><div class="mb-3"><label for="expiration" class="form-label">Expiration</label><input id="expiration" name="expiration" type="date" class="form-control"/></div> <div class="mb-3"><label for="description" class="form-label">Usage Description</label><textarea id="description" name="description" class="form-control" rows="3"></textarea></div> <button type="submit" class="btn btn-primary">Generate</button></form> <h2 class="h4 mt-4">Active Tokens</h2> <!></section></div></div> <dialog class="express-dialog"><h2>API Key Generated</h2><p>Please copy your API key. It will not be shown again!</p> <input class="form-control" aria-label="API key" readonly=""/> <div class="dialog-actions"><button class="btn">Copy</button><button class="btn btn-primary">Got it!</button></div></dialog>', 1);
function Al(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ V("profile"), n = /* @__PURE__ */ V(!1), a = /* @__PURE__ */ V(""), s = /* @__PURE__ */ V(""), o = /* @__PURE__ */ V(me(Ie(() => e.page.tokens))), l = /* @__PURE__ */ V(""), f, c;
  function h(O) {
    const X = Object.fromEntries(new FormData(O));
    for (const ne of O.querySelectorAll('input[type="checkbox"]')) X[ne.name] = ne.checked;
    return X;
  }
  function u(O) {
    c = h(O);
  }
  async function v(O) {
    if (O.preventDefault(), i(n)) return;
    x(n, !0), x(a, ""), x(s, "");
    const X = O.currentTarget, ne = h(X), ve = {};
    for (const [ge, ke] of Object.entries(ne)) {
      if (ge === "_submit" || ke === c[ge]) continue;
      const it = /^fields\[(\d+)\]$/.exec(ge);
      it ? (ve.fields ||= []).push({ field_id: Number(it[1]), value: ke }) : ve[ge] = ke;
    }
    try {
      await Ce("/users/me", ve, { method: "PATCH" }), x(s, "Your profile has been updated.");
      for (const ge of X.querySelectorAll('input[type="password"]')) ge.value = "";
      c = h(X);
    } catch (ge) {
      x(a, ge.message, !0);
    } finally {
      x(n, !1);
    }
  }
  async function p(O) {
    if (O.preventDefault(), i(n)) return;
    x(n, !0), x(a, ""), x(s, "");
    const X = h(O.currentTarget);
    X.expiration || delete X.expiration;
    try {
      const ne = await Ce("/tokens", X);
      x(l, ne.value, !0);
      const { value: ve, ...ge } = ne;
      x(o, [...i(o), ge], !0), f.showModal();
    } catch (ne) {
      x(a, ne.message, !0);
    } finally {
      x(n, !1);
    }
  }
  async function m(O) {
    if (!(i(n) || !confirm("Are you sure you want to delete this token?"))) {
      x(n, !0), x(a, ""), x(s, "");
      try {
        await Ce(`/tokens/${O}`, void 0, { method: "DELETE" }), x(o, i(o).filter((X) => X.id !== O), !0);
      } catch (X) {
        x(a, X.message, !0);
      } finally {
        x(n, !1);
      }
    }
  }
  async function L() {
    try {
      await navigator.clipboard.writeText(i(l)), x(s, "API key copied.");
    } catch {
      x(s, "Select and copy the API key below.");
    }
  }
  function y(O) {
    x(r, O, !0), x(a, ""), x(s, "");
  }
  var T = Sl(), H = d(ce(T), 2), W = k(H), I = k(W);
  let w;
  var j = d(I, 2);
  let q;
  var N = d(W, 2), D = k(N);
  {
    var Z = (O) => {
      var X = yl(), ne = z(X, !0);
      R(() => M(ne, i(a))), b(O, X);
    };
    Y(D, (O) => {
      i(a) && O(Z);
    });
  }
  var S = d(D, 2);
  {
    var _ = (O) => {
      var X = wl(), ne = z(X, !0);
      R(() => M(ne, i(s))), b(O, X);
    };
    Y(S, (O) => {
      i(s) && O(_);
    });
  }
  var g = d(S, 2), E = k(g), P = k(E);
  he(P, 17, () => e.page.fields, we, (O, X) => {
    gn(O, {
      get field() {
        return i(X);
      }
    });
  });
  var G = d(P, 2), Q = z(G, !0);
  wt(E, (O) => u?.(O));
  var $ = d(g, 2), re = k($), fe = d(k(re), 4), de = d(re, 4);
  {
    var F = (O) => {
      var X = kl(), ne = k(X), ve = d(k(ne));
      he(ve, 21, () => i(o), we, (ge, ke) => {
        var it = xl(), Et = k(it), It = z(Et, !0), Dt = d(Et), Zt = z(Dt, !0), J = d(Dt), ae = z(J, !0), oe = d(J), xe = z(oe);
        R(
          (je, Ne) => {
            M(It, je), M(Zt, Ne), M(ae, i(ke).description), K(xe, "aria-label", `Delete token ${i(ke).description || i(ke).id}`), xe.disabled = i(n);
          },
          [
            () => i(ke).created ? new Date(i(ke).created).toLocaleDateString() : "",
            () => i(ke).expiration ? new Date(i(ke).expiration).toLocaleDateString() : "Never"
          ]
        ), _e("click", xe, () => m(i(ke).id)), b(ge, it);
      }), b(O, X);
    }, C = (O) => {
      var X = El();
      b(O, X);
    };
    Y(de, (O) => {
      i(o).length ? O(F) : O(C, -1);
    });
  }
  var B = d(H, 2), U = d(k(B), 3), le = d(U, 2), pe = k(le), ee = d(pe);
  Ot(B, (O) => f = O, () => f), R(() => {
    w = Le(I, 1, "nav-link", null, w, { active: i(r) === "profile" }), K(I, "aria-pressed", i(r) === "profile"), q = Le(j, 1, "nav-link", null, q, { active: i(r) === "tokens" }), K(j, "aria-pressed", i(r) === "tokens"), K(g, "hidden", i(r) !== "profile"), G.disabled = i(n), M(Q, i(n) ? "Saving..." : "Submit"), K($, "hidden", i(r) !== "tokens"), fe.disabled = i(n), ka(U, i(l));
  }), _e("click", I, () => y("profile")), _e("click", j, () => y("tokens")), ct("submit", E, v), ct("submit", re, p), ct("close", B, () => x(l, "")), _e("click", U, (O) => O.currentTarget.select()), _e("click", pe, L), _e("click", ee, () => f.close()), b(t, T), Me();
}
at(["click"]);
var Cl = /* @__PURE__ */ A("<a> </a>"), Tl = /* @__PURE__ */ A('<span class="badge bg-secondary ms-2"> </span>'), Ll = /* @__PURE__ */ A('<a class="badge bg-primary ms-2">Official</a>'), Rl = /* @__PURE__ */ A('<a target="_blank" rel="noopener"><i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Ml = /* @__PURE__ */ A("<tr><td><!> <!> <!></td><td><!></td><td> </td><td> </td></tr>"), Nl = /* @__PURE__ */ A('<p role="status">No users match your search.</p>'), Ol = /* @__PURE__ */ A("<option> </option>"), Pl = /* @__PURE__ */ A('<label class="pagination-control">Page <select class="page-select form-select"></select> </label>'), Il = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1>Users</h1></div></div> <div class="container"><form method="get" class="user-search"><!> <button type="submit" class="btn btn-primary"><i class="fas fa-search" aria-hidden="true"></i> Search</button></form> <div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>User</th><th>Website</th><th>Affiliation</th><th>Country</th></tr></thead><tbody></tbody></table></div> <!> <!></div>', 1);
function Dl(t, e) {
  Re(e, !0);
  function r(m) {
    const L = new URL(location.href);
    L.searchParams.set("page", m.currentTarget.value), location.assign(L);
  }
  var n = Il(), a = d(ce(n), 2), s = k(a), o = k(s);
  he(o, 17, () => e.page.fields, we, (m, L) => {
    gn(m, {
      get field() {
        return i(L);
      }
    });
  });
  var l = d(s, 2), f = k(l), c = d(k(f));
  he(c, 21, () => e.page.users, we, (m, L) => {
    var y = Ml(), T = k(y), H = k(T);
    {
      var W = (Q) => {
        var $ = Cl(), re = z($, !0);
        R(() => {
          K($, "href", `${e.config.urlRoot}/users/${i(L).id}`), M(re, i(L).name);
        }), b(Q, $);
      }, I = (Q) => {
        var $ = Ye();
        R(() => M($, i(L).name)), b(Q, $);
      };
      Y(H, (Q) => {
        e.page.scoresVisible ? Q(W) : Q(I, -1);
      });
    }
    var w = d(H, 2);
    {
      var j = (Q) => {
        var $ = Tl(), re = z($, !0);
        R(() => M(re, i(L).bracket)), b(Q, $);
      };
      Y(w, (Q) => {
        i(L).bracket && Q(j);
      });
    }
    var q = d(w, 2);
    {
      var N = (Q) => {
        var $ = Ll();
        R((re) => K($, "href", re), [
          () => `https://majorleaguecyber.org/u/${encodeURIComponent(i(L).name)}`
        ]), b(Q, $);
      };
      Y(q, (Q) => {
        i(L).official && Q(N);
      });
    }
    var D = d(T), Z = k(D);
    {
      var S = (Q) => {
        var $ = Rl();
        R(() => {
          K($, "href", i(L).website), K($, "aria-label", `Website for ${i(L).name}`);
        }), b(Q, $);
      }, _ = /* @__PURE__ */ ue(() => /^https?:\/\//i.test(i(L).website || ""));
      Y(Z, (Q) => {
        i(_) && Q(S);
      });
    }
    var g = d(D), E = z(g, !0), P = d(g), G = z(P, !0);
    R(() => {
      M(E, i(L).affiliation || ""), M(G, i(L).country);
    }), b(m, y);
  });
  var h = d(l, 2);
  {
    var u = (m) => {
      var L = Nl();
      b(m, L);
    };
    Y(h, (m) => {
      e.page.users.length || m(u);
    });
  }
  var v = d(h, 2);
  {
    var p = (m) => {
      var L = Pl(), y = d(k(L));
      he(y, 21, () => Array.from({ length: e.page.pages }, (W, I) => I + 1), we, (W, I) => {
        var w = Ol(), j = z(w, !0), q = {};
        R(() => {
          M(j, i(I)), q !== (q = i(I)) && (w.value = (w.__value = q) ?? "");
        }), b(W, w);
      });
      var T;
      xa(y);
      var H = d(y);
      R(() => {
        T !== (T = e.page.page) && (y.value = (y.__value = T) ?? "", hn(y, T)), M(H, ` of ${e.page.pages ?? ""} (${e.page.total ?? ""} users)`);
      }), _e("change", y, r), b(m, L);
    };
    Y(v, (m) => {
      e.page.pages > 1 && m(p);
    });
  }
  b(t, n), Me();
}
at(["change"]);
const en = ["#194c9f", "#8a2459", "#25632a", "#8a480c", "#623e9d", "#006473", "#a12a20", "#4c5872", "#615600", "#763c36"];
var Fl = /* @__PURE__ */ A('<p role="status"> </p>'), jl = /* @__PURE__ */ A('<!> <div id="score-graph" class="score-chart" role="img"></div>', 1);
function Ca(t, e) {
  Re(e, !0);
  let r = Pt(e, "title", 3, "Score over Time"), n = Pt(e, "series", 19, () => []), a, s = /* @__PURE__ */ V(null), o = /* @__PURE__ */ V("");
  kt(() => {
    let u = !0;
    const v = new ResizeObserver(() => i(s)?.resize());
    return import("./chart-ClLr2WTg.js").then(({ init: p }) => {
      u && (x(s, p(a)), v.observe(a));
    }).catch(() => {
      u && x(o, "The chart could not load. The scores are available in the table below.");
    }), () => {
      u = !1, v.disconnect(), i(s)?.dispose();
    };
  }), Tt(() => {
    if (!i(s)) return;
    const u = "#18202a";
    i(s).setOption(
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
        series: n().map((v, p) => ({
          ...v,
          type: "line",
          symbolSize: 7,
          lineStyle: { width: 3, type: p > 4 ? "dashed" : "solid" },
          label: { color: u }
        }))
      },
      { notMerge: !0 }
    );
  });
  var l = jl(), f = ce(l);
  {
    var c = (u) => {
      var v = Fl(), p = z(v, !0);
      R(() => M(p, i(o))), b(u, v);
    };
    Y(f, (u) => {
      i(o) && u(c);
    });
  }
  var h = d(f, 2);
  Ot(h, (u) => a = u, () => a), R(() => K(h, "aria-label", `${r()}. Scores are also listed in the table below.`)), b(t, l), Me();
}
var Bl = /* @__PURE__ */ A('<a class="badge bg-primary">Official</a>'), ql = /* @__PURE__ */ A('<span class="badge bg-primary"> </span>'), Ul = /* @__PURE__ */ A("<p> </p>"), Hl = /* @__PURE__ */ A("<h2> <small>place</small></h2>"), zl = /* @__PURE__ */ A("<h2> <small>points</small></h2>"), Vl = /* @__PURE__ */ A('<a target="_blank" rel="noopener">Website <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'), Yl = /* @__PURE__ */ A('<p role="status">Loading profile...</p>'), Wl = /* @__PURE__ */ A('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), Gl = /* @__PURE__ */ A('<div class="progress-bar"></div>'), Xl = /* @__PURE__ */ A('<span><span class="legend-swatch"></span> </span>'), Kl = /* @__PURE__ */ A('<div><i aria-hidden="true"></i><h4> </h4><p> </p><p> </p><strong> </strong></div>'), Jl = /* @__PURE__ */ A('<section aria-labelledby="awards-heading"><h3 id="awards-heading">Awards</h3><div class="profile-awards"></div></section>'), Zl = /* @__PURE__ */ A("<tr><td><a> </a></td><td> </td><td> </td><td><time> </time></td></tr>"), Ql = /* @__PURE__ */ A('<section class="profile-graphs" aria-label="Score breakdowns"><div class="profile-breakdowns"><div><div class="progress" aria-hidden="true"><div class="progress-bar"></div><div class="progress-bar"></div></div><p> </p></div> <div><div class="progress" aria-hidden="true"></div><div class="category-legend"></div></div></div> <!></section> <!> <h3>Solves</h3><div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Challenge</th><th>Category</th><th>Value</th><th>Time</th></tr></thead><tbody></tbody></table></div>', 1), $l = /* @__PURE__ */ A('<h3 class="text-muted text-center">No solves yet</h3>'), eo = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1> </h1> <div class="profile-badges"><!> <!></div> <!> <!> <!> <!></div></div> <div class="container"><!> <!> <!></div>', 1);
function to(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ V(me([])), n = /* @__PURE__ */ V(me([])), a = /* @__PURE__ */ V(0), s = /* @__PURE__ */ V(null), o = /* @__PURE__ */ V(!0), l = /* @__PURE__ */ V(""), f = 0;
  const c = /* @__PURE__ */ ue(() => i(r).length + i(a) ? 100 * i(r).length / (i(r).length + i(a)) : 0), h = /* @__PURE__ */ ue(() => {
    const F = /* @__PURE__ */ new Map();
    return i(r).forEach((C) => F.set(C.challenge.category, (F.get(C.challenge.category) || 0) + 1)), [...F].map(([C, B], U) => ({
      name: C,
      count: B,
      percent: 100 * B / i(r).length,
      color: en[U % en.length]
    }));
  }), u = /* @__PURE__ */ ue(() => {
    let F = 0;
    return [
      {
        name: e.page.name,
        data: [...i(r), ...i(n)].sort((C, B) => new Date(C.date) - new Date(B.date)).map((C) => [
          new Date(C.date).getTime(),
          F += C.challenge?.value ?? C.value
        ])
      }
    ];
  });
  async function v() {
    const F = ++f;
    x(l, "");
    try {
      const C = e.page.private ? "me" : e.page.id, [B, U, le, pe] = await Promise.all([
        Ce(`/users/${C}/solves`),
        Ce(`/users/${C}/fails`, void 0, { full: !0 }),
        Ce(`/users/${C}/awards`),
        e.page.private ? Ce("/users/me") : Promise.resolve(e.page)
      ]);
      if (F !== f) return;
      x(r, B, !0), x(a, U.meta.count, !0), x(n, le, !0), x(s, pe.score, !0);
    } catch (C) {
      F === f && x(l, C.message, !0);
    } finally {
      F === f && x(o, !1);
    }
  }
  kt(() => (v(), () => f++));
  var p = eo(), m = ce(p), L = k(m), y = k(L), T = z(y, !0), H = d(y, 2), W = k(H);
  {
    var I = (F) => {
      var C = Bl();
      R((B) => K(C, "href", B), [
        () => `https://majorleaguecyber.org/u/${encodeURIComponent(e.page.name)}`
      ]), b(F, C);
    };
    Y(W, (F) => {
      e.page.official && F(I);
    });
  }
  var w = d(W, 2);
  he(
    w,
    17,
    () => [
      e.page.affiliation,
      e.page.country,
      e.page.bracket
    ].filter(Boolean),
    we,
    (F, C) => {
      var B = ql(), U = z(B, !0);
      R(() => M(U, i(C))), b(F, B);
    }
  );
  var j = d(H, 2);
  he(j, 17, () => e.page.fields, we, (F, C) => {
    var B = Ul(), U = z(B);
    R(() => M(U, `${i(C).name ?? ""}: ${i(C).value ?? ""}`)), b(F, B);
  });
  var q = d(j, 2);
  {
    var N = (F) => {
      var C = Hl(), B = k(C);
      R(() => M(B, `${e.page.place ?? ""} `)), b(F, C);
    };
    Y(q, (F) => {
      e.page.place && F(N);
    });
  }
  var D = d(q, 2);
  {
    var Z = (F) => {
      var C = zl(), B = k(C);
      R(() => M(B, `${i(s) ?? ""} `)), b(F, C);
    };
    Y(D, (F) => {
      i(s) !== null && F(Z);
    });
  }
  var S = d(D, 2);
  {
    var _ = (F) => {
      var C = Vl();
      R(() => K(C, "href", e.page.website)), b(F, C);
    }, g = /* @__PURE__ */ ue(() => /^https?:\/\//i.test(e.page.website || ""));
    Y(S, (F) => {
      i(g) && F(_);
    });
  }
  var E = d(m, 2), P = k(E);
  {
    var G = (F) => {
      var C = Yl();
      b(F, C);
    };
    Y(P, (F) => {
      i(o) && F(G);
    });
  }
  var Q = d(P, 2);
  {
    var $ = (F) => {
      var C = Wl(), B = k(C), U = d(B);
      R(() => M(B, `${i(l) ?? ""} `)), _e("click", U, v), b(F, C);
    };
    Y(Q, (F) => {
      i(l) && F($);
    });
  }
  var re = d(Q, 2);
  {
    var fe = (F) => {
      var C = Ql(), B = ce(C), U = k(B), le = k(U), pe = k(le), ee = k(pe), O = d(ee), X = d(pe), ne = z(X), ve = d(le, 2), ge = k(ve);
      he(ge, 21, () => i(h), we, (ae, oe) => {
        var xe = Gl();
        R(() => jt(xe, `width:${i(oe).percent}%;background:${i(oe).color}`)), b(ae, xe);
      });
      var ke = d(ge);
      he(ke, 21, () => i(h), we, (ae, oe) => {
        var xe = Xl(), je = k(xe), Ne = d(je);
        R(
          (be) => {
            jt(je, `background:${i(oe).color}`), M(Ne, `${i(oe).name ?? ""} (${be ?? ""}%)`);
          },
          [() => i(oe).percent.toFixed(2)]
        ), b(ae, xe);
      });
      var it = d(U, 2);
      Ca(it, {
        get series() {
          return i(u);
        }
      });
      var Et = d(B, 2);
      {
        var It = (ae) => {
          var oe = Jl(), xe = d(k(oe));
          he(xe, 21, () => i(n), we, (je, Ne) => {
            var be = Kl(), Oe = k(be), st = d(Oe), gt = z(st, !0), pt = d(st), Qt = z(pt, !0), $t = d(pt), Mr = z($t, !0), Nr = d($t), Ra = z(Nr);
            R(() => {
              Le(Oe, 1, `award-icon award-${i(Ne).icon} fa-2x`), M(gt, i(Ne).name), M(Qt, i(Ne).category || ""), M(Mr, i(Ne).description || ""), M(Ra, `${i(Ne).value ?? ""} points`);
            }), b(je, be);
          }), b(ae, oe);
        };
        Y(Et, (ae) => {
          i(n).length && ae(It);
        });
      }
      var Dt = d(Et, 3), Zt = k(Dt), J = d(k(Zt));
      he(J, 21, () => i(r), we, (ae, oe) => {
        var xe = Zl(), je = k(xe), Ne = k(je), be = z(Ne, !0), Oe = d(je), st = z(Oe, !0), gt = d(Oe), pt = z(gt, !0), Qt = d(gt), $t = k(Qt), Mr = z($t, !0);
        R(
          (Nr) => {
            K(Ne, "href", `${e.config.urlRoot}/challenges#challenge-${i(oe).challenge.id}`), M(be, i(oe).challenge.name), M(st, i(oe).challenge.category), M(pt, i(oe).challenge.value), K($t, "datetime", i(oe).date), M(Mr, Nr);
          },
          [() => new Date(i(oe).date).toLocaleString()]
        ), b(ae, xe);
      }), R(
        (ae, oe) => {
          jt(ee, `width:${i(c)}%;background:#25632a`), jt(O, `width:${100 - i(c)}%;background:#a12a20`), M(ne, `Solves (${ae ?? ""}%) / Fails (${oe ?? ""}%)`);
        },
        [
          () => i(c).toFixed(2),
          () => (100 - i(c)).toFixed(2)
        ]
      ), b(F, C);
    }, de = (F) => {
      var C = $l();
      b(F, C);
    };
    Y(re, (F) => {
      i(r).length || i(n).length ? F(fe) : !i(o) && !i(l) && F(de, 1);
    });
  }
  R(() => M(T, e.page.name)), b(t, p), Me();
}
at(["click"]);
var ro = /* @__PURE__ */ A('<p role="status">Loading scoreboard...</p>'), no = /* @__PURE__ */ A('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), ao = /* @__PURE__ */ A("<button> </button>"), io = /* @__PURE__ */ A('<nav class="nav nav-pills mb-3" aria-label="Competition bracket"><button>All</button><!></nav>'), so = /* @__PURE__ */ A('<span class="badge bg-secondary ms-2"> </span>'), lo = /* @__PURE__ */ A('<tr><th scope="row"></th><td><a> </a><!></td><td> </td></tr>'), oo = /* @__PURE__ */ A('<h3 class="text-center text-muted">Scoreboard is empty</h3>'), fo = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1>Scoreboard</h1></div></div> <div class="container"><!> <!> <!> <!> <div id="scoreboard" class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Place</th><th>User</th><th>Score</th></tr></thead><tbody></tbody></table></div> <!></div>', 1);
function uo(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ V(me([])), n = /* @__PURE__ */ V(me([])), a = /* @__PURE__ */ V(""), s = /* @__PURE__ */ V(me({})), o = /* @__PURE__ */ V(!0), l = /* @__PURE__ */ V(""), f = 0;
  const c = /* @__PURE__ */ ue(() => i(r).filter((_) => !i(a) || String(_.bracket_id) === i(a))), h = /* @__PURE__ */ ue(() => Object.values(i(s)).map((_) => {
    let g = 0;
    return {
      name: _.name,
      data: [..._.solves].sort((E, P) => new Date(E.date) - new Date(P.date)).map((E) => [new Date(E.date).getTime(), g += E.value])
    };
  }));
  async function u() {
    const _ = ++f;
    x(l, "");
    try {
      const [g, E, P] = await Promise.all([
        Ce("/scoreboard"),
        Ce("/brackets?type=users"),
        Ce(`/scoreboard/top/10${i(a) ? `?bracket_id=${encodeURIComponent(i(a))}` : ""}`)
      ]);
      if (_ !== f) return;
      x(r, g, !0), x(n, E, !0), x(s, P, !0);
    } catch (g) {
      _ === f && x(l, g.message, !0);
    } finally {
      _ === f && x(o, !1);
    }
  }
  function v(_) {
    x(a, _, !0), u();
  }
  kt(() => {
    u();
    const _ = setInterval(u, 3e5);
    return () => {
      clearInterval(_), f++;
    };
  });
  var p = fo(), m = d(ce(p), 2), L = k(m);
  {
    var y = (_) => {
      var g = ro();
      b(_, g);
    };
    Y(L, (_) => {
      i(o) && _(y);
    });
  }
  var T = d(L, 2);
  {
    var H = (_) => {
      var g = no(), E = k(g), P = d(E);
      R(() => M(E, `${i(l) ?? ""} `)), _e("click", P, u), b(_, g);
    };
    Y(T, (_) => {
      i(l) && _(H);
    });
  }
  var W = d(T, 2);
  {
    var I = (_) => {
      var g = io(), E = k(g);
      let P;
      var G = d(E);
      he(G, 17, () => i(n), we, (Q, $) => {
        var re = ao();
        let fe;
        var de = z(re, !0);
        R(
          (F) => {
            fe = Le(re, 1, "nav-link", null, fe, { active: F }), M(de, i($).name);
          },
          [() => i(a) === String(i($).id)]
        ), _e("click", re, () => v(String(i($).id))), b(Q, re);
      }), R(() => P = Le(E, 1, "nav-link", null, P, { active: !i(a) })), _e("click", E, () => v("")), b(_, g);
    };
    Y(W, (_) => {
      i(n).length && _(I);
    });
  }
  var w = d(W, 2);
  {
    var j = (_) => {
      Ca(_, {
        title: "Top 10 Users",
        get series() {
          return i(h);
        }
      });
    };
    Y(w, (_) => {
      i(h).length && _(j);
    });
  }
  var q = d(w, 2), N = k(q), D = d(k(N));
  he(D, 21, () => i(c), we, (_, g, E) => {
    var P = lo(), G = k(P);
    G.textContent = E + 1;
    var Q = d(G), $ = k(Q), re = z($, !0), fe = d($);
    {
      var de = (B) => {
        var U = so(), le = z(U, !0);
        R(() => M(le, i(g).bracket_name)), b(B, U);
      };
      Y(fe, (B) => {
        i(g).bracket_name && B(de);
      });
    }
    var F = d(Q), C = z(F, !0);
    R(() => {
      K($, "href", i(g).account_url), M(re, i(g).name), M(C, i(g).score);
    }), b(_, P);
  });
  var Z = d(q, 2);
  {
    var S = (_) => {
      var g = oo();
      b(_, g);
    };
    Y(Z, (_) => {
      !i(o) && !i(l) && !i(c).length && _(S);
    });
  }
  b(t, p), Me();
}
at(["click"]);
var co = /* @__PURE__ */ A('<div class="container custom-page"></div>');
function vo(t, e) {
  Re(e, !0);
  function r(a) {
    let s = !0;
    return (async () => {
      for (const o of a.querySelectorAll("script")) {
        if (!s) break;
        const l = document.createElement("script");
        for (const c of o.attributes) l.setAttribute(c.name, c.value);
        l.textContent = o.textContent;
        const f = l.src && !l.hasAttribute("async") ? new Promise((c) => {
          l.async = !1, l.onload = l.onerror = c;
        }) : null;
        o.replaceWith(l), f && await f;
      }
    })(), {
      destroy() {
        s = !1;
      }
    };
  }
  var n = co();
  yt(n, () => e.html, !0), wt(n, (a) => r?.(a)), b(t, n), Me();
}
var ho = /* @__PURE__ */ A('<div class="alert alert-danger" role="alert"> <button class="btn">Retry</button></div>'), _o = /* @__PURE__ */ A('<h2 class="text-center">There are no notifications yet</h2>'), go = /* @__PURE__ */ A('<article class="card bg-body-tertiary mb-4"><div class="card-body"><h3> </h3><div></div><time class="text-muted"> </time></div></article>'), po = /* @__PURE__ */ A('<div class="jumbotron"><div class="container"><h1>Notifications</h1></div></div> <div class="container"><!> <!> <!></div>', 1), mo = /* @__PURE__ */ A('<aside class="express-toast" role="status"><h2> </h2><div></div><button class="btn">Dismiss</button></aside>'), bo = /* @__PURE__ */ A('<h2 id="notification-title"> </h2><div></div><div class="dialog-actions"><a class="btn">All notifications</a><button class="btn btn-primary">Close</button></div>', 1), yo = /* @__PURE__ */ A('<!> <!> <dialog class="express-dialog" aria-labelledby="notification-title"><!></dialog>', 1);
function wo(t, e) {
  Re(e, !0);
  const r = (w) => (!w.user_id || w.user_id === e.config.userId) && (!w.team_id || w.team_id === e.config.teamId);
  let n = /* @__PURE__ */ V(me(Ie(() => (e.page.notifications || []).filter(r)))), a = /* @__PURE__ */ V(me([])), s = /* @__PURE__ */ V(null), o = /* @__PURE__ */ V(""), l;
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
  function h(w) {
    x(a, [.../* @__PURE__ */ new Set([...i(a), ...w])], !0), c();
  }
  function u() {
    i(s) && h([i(s).id]), x(s, null);
  }
  async function v() {
    try {
      x(n, (await Ce("/notifications")).filter(r), !0), x(o, ""), e.page.kind === "notifications" && h(i(n).map((w) => w.id));
    } catch (w) {
      e.page.kind === "notifications" && x(o, w.message, !0);
    }
  }
  Tt(() => {
    e.onunread(i(n).filter((w) => !i(a).includes(w.id)).length);
  }), Tt(() => {
    i(s) && i(s).type !== "toast" && l && !l.open && l.showModal();
  }), Tt(() => {
    if (i(s)?.type !== "toast") return;
    const w = setTimeout(() => x(s, null), 8e3);
    return () => clearTimeout(w);
  }), kt(() => {
    try {
      const N = JSON.parse(localStorage.getItem(i(f)) || "[]");
      Array.isArray(N) && x(a, N, !0);
    } catch {
      x(a, [], !0);
    }
    v();
    const w = (N) => {
      if (N.key === i(
        f
        /* Ignore malformed external storage. */
      ))
        try {
          const D = JSON.parse(N.newValue || "[]");
          Array.isArray(D) && x(
            a,
            D,
            /* Ignore malformed external storage. */
            !0
          );
        } catch {
        }
    };
    window.addEventListener("storage", w);
    const j = e.config.userId ? new EventSource(`${e.config.urlRoot}/events`) : null;
    let q = !1;
    return j?.addEventListener("open", () => {
      q && v(), q = !0;
    }), j?.addEventListener("notification", (N) => {
      let D;
      try {
        D = JSON.parse(N.data);
      } catch {
        return;
      }
      if (!r(D)) return;
      const Z = !i(n).some((S) => S.id === D.id);
      x(
        n,
        [
          ...i(n).filter((S) => S.id !== D.id),
          D
        ],
        !0
      ), e.page.kind === "notifications" ? h([D.id]) : Z && !i(a).includes(D.id) && D.type !== "background" && x(s, D, !0);
    }), () => {
      j?.close(), window.removeEventListener("storage", w);
    };
  });
  var p = yo(), m = ce(p);
  {
    var L = (w) => {
      var j = po(), q = d(ce(j), 2), N = k(q);
      {
        var D = (g) => {
          var E = ho(), P = k(E), G = d(P);
          R(() => M(P, `${i(o) ?? ""} `)), _e("click", G, v), b(g, E);
        };
        Y(N, (g) => {
          i(o) && g(D);
        });
      }
      var Z = d(N, 2);
      {
        var S = (g) => {
          var E = _o();
          b(g, E);
        };
        Y(Z, (g) => {
          !i(n).length && !i(o) && g(S);
        });
      }
      var _ = d(Z, 2);
      he(_, 17, () => [...i(n)].sort((g, E) => E.id - g.id), we, (g, E) => {
        var P = go(), G = k(P), Q = k(G), $ = z(Q, !0), re = d(Q);
        yt(re, () => i(E).html, !0);
        var fe = d(re), de = z(fe, !0);
        R(
          (F) => {
            M($, i(E).title), K(fe, "datetime", i(E).date), M(de, F);
          },
          [() => new Date(i(E).date).toLocaleString()]
        ), b(g, P);
      }), b(w, j);
    };
    Y(m, (w) => {
      e.page.kind === "notifications" && w(L);
    });
  }
  var y = d(m, 2);
  {
    var T = (w) => {
      var j = mo(), q = k(j), N = z(q, !0), D = d(q);
      yt(D, () => i(s).html || "", !0);
      var Z = d(D);
      R(() => M(N, i(s).title)), _e("click", Z, u), b(w, j);
    };
    Y(y, (w) => {
      i(s)?.type === "toast" && w(T);
    });
  }
  var H = d(y, 2), W = k(H);
  {
    var I = (w) => {
      var j = bo(), q = ce(j), N = z(q, !0), D = d(q);
      yt(D, () => i(s).html || "", !0);
      var Z = d(D), S = k(Z), _ = d(S);
      R(() => {
        M(N, i(s).title), K(S, "href", `${e.config.urlRoot}/notifications`);
      }), _e("click", _, () => l.close()), b(w, j);
    };
    Y(W, (w) => {
      i(s) && i(s).type !== "toast" && w(I);
    });
  }
  Ot(H, (w) => l = w, () => l), ct("close", H, u), b(t, p), Me();
}
at(["click"]);
var xo = /* @__PURE__ */ A('<img class="express-brand-icon" alt="" draggable="false"/>'), ko = /* @__PURE__ */ A('<i class="fas fa-envelope" aria-hidden="true"></i>'), Eo = /* @__PURE__ */ A('<i class="fas fa-bell" aria-hidden="true"></i>'), So = /* @__PURE__ */ A('<span class="badge bg-danger"> </span>'), Ao = /* @__PURE__ */ A('<li class="nav-item"><a class="nav-link"><!> <!></a></li>'), Co = /* @__PURE__ */ A("<ul></ul>"), To = /* @__PURE__ */ A('<nav class="navbar navbar-expand-md" aria-label="Main navigation"><div class="container"><button class="navbar-toggler" type="button" aria-controls="base-navbars" aria-label="Toggle navigation"><i class="fas fa-bars" aria-hidden="true"></i> Menu</button> <div id="base-navbars"></div></div></nav>'), Lo = /* @__PURE__ */ A('<div id="challenge-app"><!></div>'), Ro = /* @__PURE__ */ A("<p> </p>"), Mo = /* @__PURE__ */ A('<div class="container error-page"><h1> </h1><h2> </h2><!><a>Back to challenges</a></div>'), No = /* @__PURE__ */ A("<!> <!>", 1), Oo = /* @__PURE__ */ A('<div class="express-window"><header class="express-title window-drag-handle" tabindex="0" role="button" aria-label="Move application window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><!> <span id="window-title"> </span></header> <!> <main id="main-content"><!> <!></main> <footer class="express-status"> <span>Powered by <a href="https://ctfd.io">CTFd</a></span></footer></div> <div class="express-taskbar"><a class="express-start">Start</a><span> </span></div>', 1);
function Po(t, e) {
  Re(e, !0);
  let r = /* @__PURE__ */ V(!1), n = /* @__PURE__ */ V(0);
  const a = /* @__PURE__ */ ue(() => e.page.kind === "login"), s = /* @__PURE__ */ ue(() => ["login", "register", "reset", "confirm"].includes(e.page.kind));
  kt(() => (document.body.classList.toggle("login-desktop", i(a)), () => document.body.classList.remove("login-desktop")));
  var o = Oo(), l = ce(o), f = k(l), c = k(f);
  {
    var h = (S) => {
      var _ = xo();
      R(() => K(_, "src", e.site.logo)), b(S, _);
    }, u = (S) => {
      var _ = ko();
      b(S, _);
    };
    Y(c, (S) => {
      e.site.logo ? S(h) : S(u, -1);
    });
  }
  var v = d(c, 2), p = z(v, !0), m = d(f, 2);
  {
    var L = (S) => {
      var _ = To(), g = k(_), E = k(g), P = d(E, 2);
      let G;
      he(P, 21, () => [e.site.primary, e.site.account], we, (Q, $, re) => {
        var fe = Co();
        Le(fe, 1, "navbar-nav", null, {}, { "me-auto": re === 0, "ms-md-auto": re === 1 }), he(fe, 21, () => i($), we, (de, F) => {
          var C = Ao(), B = k(C), U = k(B);
          {
            var le = (X) => {
              var ne = Eo();
              b(X, ne);
            };
            Y(U, (X) => {
              i(F).label === "Notifications" && X(le);
            });
          }
          var pe = d(U), ee = d(pe);
          {
            var O = (X) => {
              var ne = So(), ve = z(ne, !0);
              R(() => M(ve, i(n))), b(X, ne);
            };
            Y(ee, (X) => {
              i(F).label === "Notifications" && i(n) > 0 && X(O);
            });
          }
          R(() => {
            K(B, "href", i(F).href), K(B, "target", i(F).target || void 0), K(B, "rel", i(F).target === "_blank" ? "noopener" : void 0), M(pe, `${i(F).label ?? ""} `);
          }), b(de, C);
        }), b(Q, fe);
      }), R(() => {
        K(E, "aria-expanded", i(r)), G = Le(P, 1, "collapse navbar-collapse", null, G, { show: i(r) });
      }), _e("click", E, () => x(r, !i(r))), b(S, _);
    };
    Y(m, (S) => {
      i(a) || S(L);
    });
  }
  var y = d(m, 2), T = k(y);
  {
    var H = (S) => {
      bl(S, {
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
    }, W = (S) => {
      var _ = No(), g = ce(_);
      Aa(g, {
        get errors() {
          return e.site.errors;
        },
        get infos() {
          return e.site.infos;
        }
      });
      var E = d(g, 2);
      {
        var P = (C) => {
          var B = Lo(), U = k(B);
          Js(U, {
            get config() {
              return e.config;
            }
          }), b(C, B);
        }, G = (C) => {
          Al(C, {
            get page() {
              return e.page;
            }
          });
        }, Q = (C) => {
          Dl(C, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, $ = (C) => {
          to(C, {
            get page() {
              return e.page;
            },
            get config() {
              return e.config;
            }
          });
        }, re = (C) => {
          uo(C, {});
        }, fe = (C) => {
          vo(C, {
            get html() {
              return e.page.html;
            }
          });
        }, de = (C) => {
          var B = Mo(), U = k(B), le = z(U, !0), pe = d(U), ee = z(pe), O = d(pe);
          {
            var X = (ve) => {
              var ge = Ro(), ke = z(ge, !0);
              R(() => M(ke, e.page.detail)), b(ve, ge);
            };
            Y(O, (ve) => {
              e.page.detail && ve(X);
            });
          }
          var ne = d(O);
          R(() => {
            M(le, e.page.heading), M(ee, `${e.page.code ?? ""} ${e.page.message ?? ""}`), K(ne, "href", `${e.config.urlRoot}/challenges`);
          }), b(C, B);
        }, F = (C) => {
          var B = dt(), U = ce(B);
          yt(U, () => e.fallback), b(C, B);
        };
        Y(E, (C) => {
          e.page.kind === "challenges" ? C(P) : e.page.kind === "settings" ? C(G, 1) : e.page.kind === "users" ? C(Q, 2) : e.page.kind === "profile" ? C($, 3) : e.page.kind === "scoreboard" ? C(re, 4) : e.page.kind === "page" ? C(fe, 5) : e.page.kind === "error" ? C(de, 6) : e.page.kind !== "notifications" && C(F, 7);
        });
      }
      b(S, _);
    };
    Y(T, (S) => {
      i(s) ? S(H) : S(W, -1);
    });
  }
  var I = d(T, 2);
  wo(I, {
    get page() {
      return e.page;
    },
    get config() {
      return e.config;
    },
    onunread: (S) => x(n, S, !0)
  });
  var w = d(y, 2), j = k(w);
  wt(l, (S, _) => Sa?.(S, _), () => !i(a));
  var q = d(l, 2), N = k(q), D = d(N), Z = z(D, !0);
  R(() => {
    M(p, e.site.title), M(j, e.site.eventName), K(N, "href", `${e.config.urlRoot}/challenges`), M(Z, e.site.appName);
  }), b(t, o), Me();
}
at(["click"]);
const Ta = document.getElementById("site-app"), La = JSON.parse(document.getElementById("page-data").textContent);
document.body.classList.toggle("login-desktop", La.kind === "login");
Ta.replaceChildren();
Ki(Po, { target: Ta, props: {
  config: window.init,
  site: JSON.parse(document.getElementById("site-data").textContent),
  page: La,
  fallback: document.getElementById("fallback-content").innerHTML
} });
