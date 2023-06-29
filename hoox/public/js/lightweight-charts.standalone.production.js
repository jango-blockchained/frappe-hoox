/*!
 * @license
 * TradingView Lightweight Charts™ v4.1.0-dev+202306291356
 * Copyright (c) 2023 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!(function () {
  "use strict";
  const t = {
      upColor: "#26a69a",
      downColor: "#ef5350",
      wickVisible: !0,
      borderVisible: !0,
      borderColor: "#378658",
      borderUpColor: "#26a69a",
      borderDownColor: "#ef5350",
      wickColor: "#737375",
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    },
    i = {
      upColor: "#26a69a",
      downColor: "#ef5350",
      openVisible: !0,
      thinBars: !0,
    },
    n = {
      color: "#2196f3",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      lineVisible: !0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
      pointMarkersVisible: !1,
    },
    s = {
      topColor: "rgba( 46, 220, 135, 0.4)",
      bottomColor: "rgba( 40, 221, 100, 0)",
      invertFilledArea: !1,
      lineColor: "#33D778",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      lineVisible: !0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
      pointMarkersVisible: !1,
    },
    e = {
      baseValue: { type: "price", price: 0 },
      topFillColor1: "rgba(38, 166, 154, 0.28)",
      topFillColor2: "rgba(38, 166, 154, 0.05)",
      topLineColor: "rgba(38, 166, 154, 1)",
      bottomFillColor1: "rgba(239, 83, 80, 0.05)",
      bottomFillColor2: "rgba(239, 83, 80, 0.28)",
      bottomLineColor: "rgba(239, 83, 80, 1)",
      lineWidth: 3,
      lineStyle: 0,
      lineType: 0,
      lineVisible: !0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0,
      pointMarkersVisible: !1,
    },
    r = { color: "#26a69a", base: 0 },
    h = { color: "#2196f3" },
    l = {
      title: "",
      visible: !0,
      lastValueVisible: !0,
      priceLineVisible: !0,
      priceLineSource: 0,
      priceLineWidth: 1,
      priceLineColor: "",
      priceLineStyle: 2,
      baseLineVisible: !0,
      baseLineWidth: 1,
      baseLineColor: "#B2B5BE",
      baseLineStyle: 0,
      priceFormat: { type: "price", precision: 2, minMove: 0.01 },
    };
  var a, o;
  function _(t, i) {
    const n = {
      0: [],
      1: [t.lineWidth, t.lineWidth],
      2: [2 * t.lineWidth, 2 * t.lineWidth],
      3: [6 * t.lineWidth, 6 * t.lineWidth],
      4: [t.lineWidth, 4 * t.lineWidth],
    }[i];
    t.setLineDash(n);
  }
  function u(t, i, n, s) {
    t.beginPath();
    const e = t.lineWidth % 2 ? 0.5 : 0;
    t.moveTo(n, i + e), t.lineTo(s, i + e), t.stroke();
  }
  function c(t, i) {
    if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
  }
  function d(t) {
    if (void 0 === t) throw new Error("Value is undefined");
    return t;
  }
  function f(t) {
    if (null === t) throw new Error("Value is null");
    return t;
  }
  function v(t) {
    return f(d(t));
  }
  !(function (t) {
    (t[(t.Simple = 0)] = "Simple"),
      (t[(t.WithSteps = 1)] = "WithSteps"),
      (t[(t.Curved = 2)] = "Curved");
  })(a || (a = {})),
    (function (t) {
      (t[(t.Solid = 0)] = "Solid"),
        (t[(t.Dotted = 1)] = "Dotted"),
        (t[(t.Dashed = 2)] = "Dashed"),
        (t[(t.LargeDashed = 3)] = "LargeDashed"),
        (t[(t.SparseDotted = 4)] = "SparseDotted");
    })(o || (o = {}));
  const p = {
    khaki: "#f0e68c",
    azure: "#f0ffff",
    aliceblue: "#f0f8ff",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gainsboro: "#dcdcdc",
    gray: "#808080",
    green: "#008000",
    honeydew: "#f0fff0",
    floralwhite: "#fffaf0",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lemonchiffon: "#fffacd",
    hotpink: "#ff69b4",
    lightyellow: "#ffffe0",
    greenyellow: "#adff2f",
    lightgoldenrodyellow: "#fafad2",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    lightcyan: "#e0ffff",
    magenta: "#f0f",
    maroon: "#800000",
    olive: "#808000",
    orange: "#ffa500",
    oldlace: "#fdf5e6",
    mediumblue: "#0000cd",
    transparent: "#0000",
    lime: "#0f0",
    lightpink: "#ffb6c1",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    midnightblue: "#191970",
    orchid: "#da70d6",
    mediumorchid: "#ba55d3",
    mediumturquoise: "#48d1cc",
    orangered: "#ff4500",
    royalblue: "#4169e1",
    powderblue: "#b0e0e6",
    red: "#f00",
    coral: "#ff7f50",
    turquoise: "#40e0d0",
    white: "#fff",
    whitesmoke: "#f5f5f5",
    wheat: "#f5deb3",
    teal: "#008080",
    steelblue: "#4682b4",
    bisque: "#ffe4c4",
    aquamarine: "#7fffd4",
    aqua: "#0ff",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    springgreen: "#00ff7f",
    antiquewhite: "#faebd7",
    burlywood: "#deb887",
    brown: "#a52a2a",
    beige: "#f5f5dc",
    chocolate: "#d2691e",
    chartreuse: "#7fff00",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cadetblue: "#5f9ea0",
    tomato: "#ff6347",
    fuchsia: "#f0f",
    blue: "#00f",
    salmon: "#fa8072",
    blanchedalmond: "#ffebcd",
    slateblue: "#6a5acd",
    slategray: "#708090",
    thistle: "#d8bfd8",
    tan: "#d2b48c",
    cyan: "#0ff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    blueviolet: "#8a2be2",
    black: "#000",
    darkmagenta: "#8b008b",
    darkslateblue: "#483d8b",
    darkkhaki: "#bdb76b",
    darkorchid: "#9932cc",
    darkorange: "#ff8c00",
    darkgreen: "#006400",
    darkred: "#8b0000",
    dodgerblue: "#1e90ff",
    darkslategray: "#2f4f4f",
    dimgray: "#696969",
    deepskyblue: "#00bfff",
    firebrick: "#b22222",
    forestgreen: "#228b22",
    indigo: "#4b0082",
    ivory: "#fffff0",
    lavenderblush: "#fff0f5",
    feldspar: "#d19275",
    indianred: "#cd5c5c",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightskyblue: "#87cefa",
    lightslategray: "#789",
    lightslateblue: "#8470ff",
    snow: "#fffafa",
    lightseagreen: "#20b2aa",
    lightsalmon: "#ffa07a",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    mediumpurple: "#9370d8",
    mediumaquamarine: "#66cdaa",
    skyblue: "#87ceeb",
    lavender: "#e6e6fa",
    lightsteelblue: "#b0c4de",
    mediumvioletred: "#c71585",
    mintcream: "#f5fffa",
    navajowhite: "#ffdead",
    navy: "#000080",
    olivedrab: "#6b8e23",
    palevioletred: "#d87093",
    violetred: "#d02090",
    yellow: "#ff0",
    yellowgreen: "#9acd32",
    lawngreen: "#7cfc00",
    pink: "#ffc0cb",
    paleturquoise: "#afeeee",
    palegoldenrod: "#eee8aa",
    darkolivegreen: "#556b2f",
    darkseagreen: "#8fbc8f",
    darkturquoise: "#00ced1",
    peachpuff: "#ffdab9",
    deeppink: "#ff1493",
    violet: "#ee82ee",
    palegreen: "#98fb98",
    mediumseagreen: "#3cb371",
    peru: "#cd853f",
    saddlebrown: "#8b4513",
    sandybrown: "#f4a460",
    rosybrown: "#bc8f8f",
    purple: "#800080",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    papayawhip: "#ffefd5",
    mediumslateblue: "#7b68ee",
    plum: "#dda0dd",
    mediumspringgreen: "#00fa9a",
  };
  function m(t) {
    return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
  }
  function b(t) {
    return t <= 0 || t > 0
      ? t < 0
        ? 0
        : t > 1
        ? 1
        : Math.round(1e4 * t) / 1e4
      : 0;
  }
  const w = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
    g = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
    M = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
    x =
      /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
  function S(t) {
    (t = t.toLowerCase()) in p && (t = p[t]);
    {
      const i = x.exec(t) || M.exec(t);
      if (i)
        return [
          m(parseInt(i[1], 10)),
          m(parseInt(i[2], 10)),
          m(parseInt(i[3], 10)),
          b(i.length < 5 ? 1 : parseFloat(i[4])),
        ];
    }
    {
      const i = g.exec(t);
      if (i)
        return [
          m(parseInt(i[1], 16)),
          m(parseInt(i[2], 16)),
          m(parseInt(i[3], 16)),
          1,
        ];
    }
    {
      const i = w.exec(t);
      if (i)
        return [
          m(17 * parseInt(i[1], 16)),
          m(17 * parseInt(i[2], 16)),
          m(17 * parseInt(i[3], 16)),
          1,
        ];
    }
    throw new Error(`Cannot parse color: ${t}`);
  }
  function y(t) {
    const i = S(t);
    return {
      t: `rgb(${i[0]}, ${i[1]}, ${i[2]})`,
      i:
        ((n = i),
        0.199 * n[0] + 0.687 * n[1] + 0.114 * n[2] > 160 ? "black" : "white"),
    };
    var n;
  }
  class k {
    constructor() {
      this.h = [];
    }
    l(t, i, n) {
      const s = { o: t, _: i, u: !0 === n };
      this.h.push(s);
    }
    v(t) {
      const i = this.h.findIndex((i) => t === i.o);
      i > -1 && this.h.splice(i, 1);
    }
    p(t) {
      this.h = this.h.filter((i) => i._ !== t);
    }
    m(t, i, n) {
      const s = [...this.h];
      (this.h = this.h.filter((t) => !t.u)), s.forEach((s) => s.o(t, i, n));
    }
    g() {
      return this.h.length > 0;
    }
    M() {
      this.h = [];
    }
  }
  function C(t, ...i) {
    for (const n of i)
      for (const i in n)
        void 0 !== n[i] &&
          ("object" != typeof n[i] || void 0 === t[i]
            ? (t[i] = n[i])
            : C(t[i], n[i]));
    return t;
  }
  function T(t) {
    return "number" == typeof t && isFinite(t);
  }
  function P(t) {
    return "number" == typeof t && t % 1 == 0;
  }
  function R(t) {
    return "string" == typeof t;
  }
  function D(t) {
    return "boolean" == typeof t;
  }
  function O(t) {
    const i = t;
    if (!i || "object" != typeof i) return i;
    let n, s, e;
    for (s in ((n = Array.isArray(i) ? [] : {}), i))
      i.hasOwnProperty(s) &&
        ((e = i[s]), (n[s] = e && "object" == typeof e ? O(e) : e));
    return n;
  }
  function A(t) {
    return null !== t;
  }
  function B(t) {
    return null === t ? void 0 : t;
  }
  const V =
    "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
  function E(t, i, n) {
    return (
      void 0 === i && (i = V), `${(n = void 0 !== n ? `${n} ` : "")}${t}px ${i}`
    );
  }
  class z {
    constructor(t) {
      (this.S = {
        k: 1,
        C: 5,
        T: NaN,
        P: "",
        R: "",
        D: "",
        O: "",
        A: 0,
        B: 0,
        V: 0,
        L: 0,
        I: 0,
      }),
        (this.N = t);
    }
    F() {
      const t = this.S,
        i = this.W(),
        n = this.j();
      return (
        (t.T === i && t.R === n) ||
          ((t.T = i),
          (t.R = n),
          (t.P = E(i, n)),
          (t.L = (2.5 / 12) * i),
          (t.A = t.L),
          (t.B = (i / 12) * t.C),
          (t.V = (i / 12) * t.C),
          (t.I = 0)),
        (t.D = this.$()),
        (t.O = this.H()),
        this.S
      );
    }
    $() {
      return this.N.F().layout.textColor;
    }
    H() {
      return this.N.U();
    }
    W() {
      return this.N.F().layout.fontSize;
    }
    j() {
      return this.N.F().layout.fontFamily;
    }
  }
  class L {
    constructor() {
      this.q = [];
    }
    Y(t) {
      this.q = t;
    }
    X(t, i, n) {
      this.q.forEach((s) => {
        s.X(t, i, n);
      });
    }
  }
  class I {
    X(t, i, n) {
      t.useMediaCoordinateSpace((t) => this.Z(t, i, n));
    }
    K(t, i, n) {
      t.useMediaCoordinateSpace((t) => this.G(t, i, n));
    }
    G(t, i, n) {}
  }
  class N extends I {
    constructor() {
      super(...arguments), (this.J = null);
    }
    tt(t) {
      this.J = t;
    }
    Z({ context: t }) {
      if (null === this.J || null === this.J.it) return;
      const i = this.J.it,
        n = this.J,
        s = (s) => {
          t.beginPath();
          for (let e = i.to - 1; e >= i.from; --e) {
            const i = n.nt[e];
            t.moveTo(i.st, i.et), t.arc(i.st, i.et, s, 0, 2 * Math.PI);
          }
          t.fill();
        };
      n.rt > 0 && ((t.fillStyle = n.ht), s(n.lt + n.rt)),
        (t.fillStyle = n.ot),
        s(n.lt);
    }
  }
  function F() {
    return {
      nt: [{ st: 0, et: 0, _t: 0, ut: 0 }],
      ot: "",
      ht: "",
      lt: 0,
      rt: 0,
      it: null,
    };
  }
  const W = { from: 0, to: 1 };
  class j {
    constructor(t, i) {
      (this.ct = new L()),
        (this.dt = []),
        (this.ft = []),
        (this.vt = !0),
        (this.N = t),
        (this.bt = i),
        this.ct.Y(this.dt);
    }
    wt(t) {
      const i = this.N.gt();
      i.length !== this.dt.length &&
        ((this.ft = i.map(F)),
        (this.dt = this.ft.map((t) => {
          const i = new N();
          return i.tt(t), i;
        })),
        this.ct.Y(this.dt)),
        (this.vt = !0);
    }
    Mt() {
      return this.vt && (this.xt(), (this.vt = !1)), this.ct;
    }
    xt() {
      const t = this.N.gt(),
        i = this.bt.St(),
        n = this.N.yt();
      t.forEach((t, s) => {
        var e;
        const r = this.ft[s],
          h = t.kt(i);
        if (null === h || !t.Ct()) return void (r.it = null);
        const l = f(t.Tt());
        (r.ot = h.Pt),
          (r.lt = h.lt),
          (r.rt = h.Rt),
          (r.nt[0].ut = h.ut),
          (r.nt[0].et = t.Ot().Dt(h.ut, l.At)),
          (r.ht =
            null !== (e = h.Bt) && void 0 !== e
              ? e
              : this.N.Vt(r.nt[0].et / t.Ot().Et())),
          (r.nt[0]._t = i),
          (r.nt[0].st = n.zt(i)),
          (r.it = W);
      });
    }
  }
  class $ {
    X(t, i, n) {
      t.useBitmapCoordinateSpace((t) => this.Z(t, i, n));
    }
  }
  class H extends $ {
    constructor(t) {
      super(), (this.Lt = t);
    }
    Z({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (null === this.Lt) return;
      const e = this.Lt.It.Ct,
        r = this.Lt.Nt.Ct;
      if (!e && !r) return;
      const h = Math.round(this.Lt.st * n),
        l = Math.round(this.Lt.et * s);
      (t.lineCap = "butt"),
        e &&
          h >= 0 &&
          ((t.lineWidth = Math.floor(this.Lt.It.rt * n)),
          (t.strokeStyle = this.Lt.It.D),
          (t.fillStyle = this.Lt.It.D),
          _(t, this.Lt.It.Ft),
          (function (t, i, n, s) {
            t.beginPath();
            const e = t.lineWidth % 2 ? 0.5 : 0;
            t.moveTo(i + e, n), t.lineTo(i + e, s), t.stroke();
          })(t, h, 0, i.height)),
        r &&
          l >= 0 &&
          ((t.lineWidth = Math.floor(this.Lt.Nt.rt * s)),
          (t.strokeStyle = this.Lt.Nt.D),
          (t.fillStyle = this.Lt.Nt.D),
          _(t, this.Lt.Nt.Ft),
          u(t, l, 0, i.width));
    }
  }
  class U {
    constructor(t) {
      (this.vt = !0),
        (this.Wt = {
          It: { rt: 1, Ft: 0, D: "", Ct: !1 },
          Nt: { rt: 1, Ft: 0, D: "", Ct: !1 },
          st: 0,
          et: 0,
        }),
        (this.jt = new H(this.Wt)),
        (this.$t = t);
    }
    wt() {
      this.vt = !0;
    }
    Mt() {
      return this.vt && (this.xt(), (this.vt = !1)), this.jt;
    }
    xt() {
      const t = this.$t.Ct(),
        i = f(this.$t.Ht()),
        n = i.Ut().F().crosshair,
        s = this.Wt;
      (s.Nt.Ct = t && this.$t.qt(i)),
        (s.It.Ct = t && this.$t.Yt()),
        (s.Nt.rt = n.horzLine.width),
        (s.Nt.Ft = n.horzLine.style),
        (s.Nt.D = n.horzLine.color),
        (s.It.rt = n.vertLine.width),
        (s.It.Ft = n.vertLine.style),
        (s.It.D = n.vertLine.color),
        (s.st = this.$t.Xt()),
        (s.et = this.$t.Zt());
    }
  }
  function q(t, i, n, s, e, r) {
    t.fillRect(i + r, n, s - 2 * r, r),
      t.fillRect(i + r, n + e - r, s - 2 * r, r),
      t.fillRect(i, n, r, e),
      t.fillRect(i + s - r, n, r, e);
  }
  function Y(t, i, n, s, e, r) {
    t.save(),
      (t.globalCompositeOperation = "copy"),
      (t.fillStyle = r),
      t.fillRect(i, n, s, e),
      t.restore();
  }
  function X(t, i) {
    return Array.isArray(t) ? t.map((t) => (0 === t ? t : t + i)) : t + i;
  }
  function Z(t, i, n, s, e, r) {
    let h, l, a, o;
    if (Array.isArray(r))
      if (2 === r.length) {
        const t = Math.max(0, r[0]),
          i = Math.max(0, r[1]);
        (h = t), (l = t), (a = i), (o = i);
      } else {
        if (4 !== r.length)
          throw new Error(
            "Wrong border radius - it should be like css border radius"
          );
        (h = Math.max(0, r[0])),
          (l = Math.max(0, r[1])),
          (a = Math.max(0, r[2])),
          (o = Math.max(0, r[3]));
      }
    else {
      const t = Math.max(0, r);
      (h = t), (l = t), (a = t), (o = t);
    }
    t.beginPath(),
      t.moveTo(i + h, n),
      t.lineTo(i + s - l, n),
      0 !== l && t.arcTo(i + s, n, i + s, n + l, l),
      t.lineTo(i + s, n + e - a),
      0 !== a && t.arcTo(i + s, n + e, i + s - a, n + e, a),
      t.lineTo(i + o, n + e),
      0 !== o && t.arcTo(i, n + e, i, n + e - o, o),
      t.lineTo(i, n + h),
      0 !== h && t.arcTo(i, n, i + h, n, h);
  }
  function K(t, i, n, s, e, r, h = 0, l = 0, a = "") {
    if ((t.save(), !h || !a || a === r))
      return Z(t, i, n, s, e, l), (t.fillStyle = r), t.fill(), void t.restore();
    const o = h / 2;
    if ("transparent" !== r) {
      Z(t, i + h, n + h, s - 2 * h, e - 2 * h, X(l, -h)),
        (t.fillStyle = r),
        t.fill();
    }
    if ("transparent" !== a) {
      Z(t, i + o, n + o, s - h, e - h, X(l, -o)),
        (t.lineWidth = h),
        (t.strokeStyle = a),
        t.closePath(),
        t.stroke();
    }
    t.restore();
  }
  function G(t, i, n, s, e, r, h) {
    t.save(), (t.globalCompositeOperation = "copy");
    const l = t.createLinearGradient(0, 0, 0, e);
    l.addColorStop(0, r),
      l.addColorStop(1, h),
      (t.fillStyle = l),
      t.fillRect(i, n, s, e),
      t.restore();
  }
  class J {
    constructor(t, i) {
      this.tt(t, i);
    }
    tt(t, i) {
      (this.Lt = t), (this.Kt = i);
    }
    Et(t, i) {
      return this.Lt.Ct ? t.T + t.L + t.A : 0;
    }
    X(t, i, n, s) {
      if (!this.Lt.Ct || 0 === this.Lt.Gt.length) return;
      const e = this.Lt.D,
        r = this.Kt.t,
        h = t.useBitmapCoordinateSpace((t) => {
          const h = t.context;
          h.font = i.P;
          const l = this.Jt(t, i, n, s),
            a = l.Qt,
            o = (t, i) => {
              l.ti
                ? K(h, a.ii, a.ni, a.si, a.ei, t, a.ri, [a.lt, 0, 0, a.lt], i)
                : K(h, a.hi, a.ni, a.si, a.ei, t, a.ri, [0, a.lt, a.lt, 0], i);
            };
          return (
            o(r, "transparent"),
            this.Lt.li &&
              ((h.fillStyle = e), h.fillRect(a.hi, a.ai, a.oi - a.hi, a._i)),
            o("transparent", r),
            this.Lt.ui &&
              ((h.fillStyle = i.O),
              h.fillRect(l.ti ? a.ci - a.ri : 0, a.ni, a.ri, a.di - a.ni)),
            l
          );
        });
      t.useMediaCoordinateSpace(({ context: t }) => {
        const n = h.fi;
        (t.font = i.P),
          (t.textAlign = h.ti ? "right" : "left"),
          (t.textBaseline = "middle"),
          (t.fillStyle = e),
          t.fillText(this.Lt.Gt, n.vi, (n.ni + n.di) / 2 + n.pi);
      });
    }
    Jt(t, i, n, s) {
      var e;
      const {
          context: r,
          bitmapSize: h,
          mediaSize: l,
          horizontalPixelRatio: a,
          verticalPixelRatio: o,
        } = t,
        _ = this.Lt.li || !this.Lt.mi ? i.C : 0,
        u = this.Lt.bi ? i.k : 0,
        c = i.L + this.Kt.wi,
        d = i.A + this.Kt.gi,
        f = i.B,
        v = i.V,
        p = this.Lt.Gt,
        m = i.T,
        b = n.Mi(r, p),
        w = Math.ceil(n.xi(r, p)),
        g = m + c + d,
        M = i.k + f + v + w + _,
        x = Math.max(1, Math.floor(o));
      let S = Math.round(g * o);
      S % 2 != x % 2 && (S += 1);
      const y = u > 0 ? Math.max(1, Math.floor(u * a)) : 0,
        k = Math.round(M * a),
        C = Math.round(_ * a),
        T = null !== (e = this.Kt.Si) && void 0 !== e ? e : this.Kt.yi,
        P = Math.round(T * o) - Math.floor(0.5 * o),
        R = Math.floor(P + x / 2 - S / 2),
        D = R + S,
        O = "right" === s,
        A = O ? l.width - u : u,
        B = O ? h.width - y : y;
      let V, E, z;
      return (
        O
          ? ((V = B - k), (E = B - C), (z = A - _ - f - u))
          : ((V = B + k), (E = B + C), (z = A + _ + f)),
        {
          ti: O,
          Qt: {
            ni: R,
            ai: P,
            di: D,
            si: k,
            ei: S,
            lt: 2 * a,
            ri: y,
            ii: V,
            hi: B,
            oi: E,
            _i: x,
            ci: h.width,
          },
          fi: { ni: R / o, di: D / o, vi: z, pi: b },
        }
      );
    }
  }
  class Q {
    constructor(t) {
      (this.ki = { yi: 0, t: "#000", gi: 0, wi: 0 }),
        (this.Ci = {
          Gt: "",
          Ct: !1,
          li: !0,
          mi: !1,
          Bt: "",
          D: "#FFF",
          ui: !1,
          bi: !1,
        }),
        (this.Ti = {
          Gt: "",
          Ct: !1,
          li: !1,
          mi: !0,
          Bt: "",
          D: "#FFF",
          ui: !0,
          bi: !0,
        }),
        (this.vt = !0),
        (this.Pi = new (t || J)(this.Ci, this.ki)),
        (this.Ri = new (t || J)(this.Ti, this.ki));
    }
    Gt() {
      return this.Di(), this.Ci.Gt;
    }
    yi() {
      return this.Di(), this.ki.yi;
    }
    wt() {
      this.vt = !0;
    }
    Et(t, i = !1) {
      return Math.max(this.Pi.Et(t, i), this.Ri.Et(t, i));
    }
    Oi() {
      return this.ki.Si || 0;
    }
    Ai(t) {
      this.ki.Si = t;
    }
    Bi() {
      return this.Di(), this.Ci.Ct || this.Ti.Ct;
    }
    Vi() {
      return this.Di(), this.Ci.Ct;
    }
    Mt(t) {
      return (
        this.Di(),
        (this.Ci.li = this.Ci.li && t.F().ticksVisible),
        (this.Ti.li = this.Ti.li && t.F().ticksVisible),
        this.Pi.tt(this.Ci, this.ki),
        this.Ri.tt(this.Ti, this.ki),
        this.Pi
      );
    }
    Ei() {
      return (
        this.Di(),
        this.Pi.tt(this.Ci, this.ki),
        this.Ri.tt(this.Ti, this.ki),
        this.Ri
      );
    }
    Di() {
      this.vt &&
        ((this.Ci.li = !0),
        (this.Ti.li = !1),
        this.zi(this.Ci, this.Ti, this.ki));
    }
  }
  class tt extends Q {
    constructor(t, i, n) {
      super(), (this.$t = t), (this.Li = i), (this.Ii = n);
    }
    zi(t, i, n) {
      t.Ct = !1;
      const s = this.$t.F().horzLine;
      if (!s.labelVisible) return;
      const e = this.Li.Tt();
      if (!this.$t.Ct() || this.Li.Ni() || null === e) return;
      const r = y(s.labelBackgroundColor);
      (n.t = r.t), (t.D = r.i);
      const h = (2 / 12) * this.Li.T();
      (n.wi = h), (n.gi = h);
      const l = this.Ii(this.Li);
      (n.yi = l.yi), (t.Gt = this.Li.Fi(l.ut, e)), (t.Ct = !0);
    }
  }
  const it = /[1-9]/g;
  class nt {
    constructor() {
      this.Lt = null;
    }
    tt(t) {
      this.Lt = t;
    }
    X(t, i) {
      if (null === this.Lt || !1 === this.Lt.Ct || 0 === this.Lt.Gt.length)
        return;
      const n = t.useMediaCoordinateSpace(
        ({ context: t }) => (
          (t.font = i.P), Math.round(i.Wi.xi(t, f(this.Lt).Gt, it))
        )
      );
      if (n <= 0) return;
      const s = i.ji,
        e = n + 2 * s,
        r = e / 2,
        h = this.Lt.$i;
      let l = this.Lt.yi,
        a = Math.floor(l - r) + 0.5;
      a < 0
        ? ((l += Math.abs(0 - a)), (a = Math.floor(l - r) + 0.5))
        : a + e > h &&
          ((l -= Math.abs(h - (a + e))), (a = Math.floor(l - r) + 0.5));
      const o = a + e,
        _ = Math.ceil(0 + i.k + i.C + i.L + i.T + i.A);
      t.useBitmapCoordinateSpace(
        ({ context: t, horizontalPixelRatio: n, verticalPixelRatio: s }) => {
          const e = f(this.Lt);
          t.fillStyle = e.t;
          const r = Math.round(a * n),
            h = Math.round(0 * s),
            l = Math.round(o * n),
            u = Math.round(_ * s),
            c = Math.round(2 * n);
          if (
            (t.beginPath(),
            t.moveTo(r, h),
            t.lineTo(r, u - c),
            t.arcTo(r, u, r + c, u, c),
            t.lineTo(l - c, u),
            t.arcTo(l, u, l, u - c, c),
            t.lineTo(l, h),
            t.fill(),
            e.li)
          ) {
            const r = Math.round(e.yi * n),
              l = h,
              a = Math.round((l + i.C) * s);
            t.fillStyle = e.D;
            const o = Math.max(1, Math.floor(n)),
              _ = Math.floor(0.5 * n);
            t.fillRect(r - _, l, o, a - l);
          }
        }
      ),
        t.useMediaCoordinateSpace(({ context: t }) => {
          const n = f(this.Lt),
            e = 0 + i.k + i.C + i.L + i.T / 2;
          (t.font = i.P),
            (t.textAlign = "left"),
            (t.textBaseline = "middle"),
            (t.fillStyle = n.D);
          const r = i.Wi.Mi(t, "Apr0");
          t.translate(a + s, e + r), t.fillText(n.Gt, 0, 0);
        });
    }
  }
  class st {
    constructor(t, i, n) {
      (this.vt = !0),
        (this.jt = new nt()),
        (this.Wt = {
          Ct: !1,
          t: "#4c525e",
          D: "white",
          Gt: "",
          $i: 0,
          yi: NaN,
          li: !0,
        }),
        (this.bt = t),
        (this.Hi = i),
        (this.Ii = n);
    }
    wt() {
      this.vt = !0;
    }
    Mt() {
      return (
        this.vt && (this.xt(), (this.vt = !1)), this.jt.tt(this.Wt), this.jt
      );
    }
    xt() {
      const t = this.Wt;
      t.Ct = !1;
      const i = this.bt.F().vertLine;
      if (!i.labelVisible) return;
      const n = this.Hi.yt();
      if (n.Ni()) return;
      t.$i = n.$i();
      const s = this.Ii();
      if (null === s) return;
      t.yi = s.yi;
      const e = n.Ui(this.bt.St());
      (t.Gt = n.qi(f(e))), (t.Ct = !0);
      const r = y(i.labelBackgroundColor);
      (t.t = r.t), (t.D = r.i), (t.li = n.F().ticksVisible);
    }
  }
  class et {
    constructor() {
      (this.Yi = null), (this.Xi = 0);
    }
    Zi() {
      return this.Xi;
    }
    Ki(t) {
      this.Xi = t;
    }
    Ot() {
      return this.Yi;
    }
    Gi(t) {
      this.Yi = t;
    }
    Ji(t) {
      return [];
    }
    Qi() {
      return [];
    }
    Ct() {
      return !0;
    }
  }
  var rt;
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"), (t[(t.Magnet = 1)] = "Magnet");
  })(rt || (rt = {}));
  class ht extends et {
    constructor(t, i) {
      super(),
        (this.tn = null),
        (this.nn = NaN),
        (this.sn = 0),
        (this.en = !0),
        (this.rn = new Map()),
        (this.hn = !1),
        (this.ln = NaN),
        (this.an = NaN),
        (this.on = NaN),
        (this._n = NaN),
        (this.Hi = t),
        (this.un = i),
        (this.cn = new j(t, this));
      this.dn = ((t, i) => (n) => {
        const s = i(),
          e = t();
        if (n === f(this.tn).fn()) return { ut: e, yi: s };
        {
          const t = f(n.Tt());
          return { ut: n.vn(s, t), yi: s };
        }
      })(
        () => this.nn,
        () => this.an
      );
      const n = ((t, i) => () => {
        const n = this.Hi.yt().pn(t()),
          s = i();
        return n && Number.isFinite(s) ? { _t: n, yi: s } : null;
      })(
        () => this.sn,
        () => this.Xt()
      );
      (this.mn = new st(this, t, n)), (this.bn = new U(this));
    }
    F() {
      return this.un;
    }
    wn(t, i) {
      (this.on = t), (this._n = i);
    }
    gn() {
      (this.on = NaN), (this._n = NaN);
    }
    Mn() {
      return this.on;
    }
    xn() {
      return this._n;
    }
    Sn(t, i, n) {
      this.hn || (this.hn = !0), (this.en = !0), this.yn(t, i, n);
    }
    St() {
      return this.sn;
    }
    Xt() {
      return this.ln;
    }
    Zt() {
      return this.an;
    }
    Ct() {
      return this.en;
    }
    kn() {
      (this.en = !1),
        this.Cn(),
        (this.nn = NaN),
        (this.ln = NaN),
        (this.an = NaN),
        (this.tn = null),
        this.gn();
    }
    Tn(t) {
      return null !== this.tn ? [this.bn, this.cn] : [];
    }
    qt(t) {
      return t === this.tn && this.un.horzLine.visible;
    }
    Yt() {
      return this.un.vertLine.visible;
    }
    Pn(t, i) {
      (this.en && this.tn === t) || this.rn.clear();
      const n = [];
      return this.tn === t && n.push(this.Rn(this.rn, i, this.dn)), n;
    }
    Qi() {
      return this.en ? [this.mn] : [];
    }
    Ht() {
      return this.tn;
    }
    Dn() {
      this.bn.wt(), this.rn.forEach((t) => t.wt()), this.mn.wt(), this.cn.wt();
    }
    On(t) {
      return t && !t.fn().Ni() ? t.fn() : null;
    }
    yn(t, i, n) {
      this.An(t, i, n) && this.Dn();
    }
    An(t, i, n) {
      const s = this.ln,
        e = this.an,
        r = this.nn,
        h = this.sn,
        l = this.tn,
        a = this.On(n);
      (this.sn = t),
        (this.ln = isNaN(t) ? NaN : this.Hi.yt().zt(t)),
        (this.tn = n);
      const o = null !== a ? a.Tt() : null;
      return (
        null !== a && null !== o
          ? ((this.nn = i), (this.an = a.Dt(i, o)))
          : ((this.nn = NaN), (this.an = NaN)),
        s !== this.ln ||
          e !== this.an ||
          h !== this.sn ||
          r !== this.nn ||
          l !== this.tn
      );
    }
    Cn() {
      const t = this.Hi.gt()
          .map((t) => t.Vn().Bn())
          .filter(A),
        i = 0 === t.length ? null : Math.max(...t);
      this.sn = null !== i ? i : NaN;
    }
    Rn(t, i, n) {
      let s = t.get(i);
      return void 0 === s && ((s = new tt(this, i, n)), t.set(i, s)), s;
    }
  }
  function lt(t) {
    return "left" === t || "right" === t;
  }
  class at {
    constructor(t) {
      (this.En = new Map()), (this.zn = []), (this.Ln = t);
    }
    In(t, i) {
      const n = (function (t, i) {
        return void 0 === t
          ? i
          : { Nn: Math.max(t.Nn, i.Nn), Fn: t.Fn || i.Fn };
      })(this.En.get(t), i);
      this.En.set(t, n);
    }
    Wn() {
      return this.Ln;
    }
    jn(t) {
      const i = this.En.get(t);
      return void 0 === i
        ? { Nn: this.Ln }
        : { Nn: Math.max(this.Ln, i.Nn), Fn: i.Fn };
    }
    $n() {
      this.Hn(), (this.zn = [{ Un: 0 }]);
    }
    qn(t) {
      this.Hn(), (this.zn = [{ Un: 1, At: t }]);
    }
    Yn(t) {
      this.Xn(), this.zn.push({ Un: 5, At: t });
    }
    Hn() {
      this.Xn(), this.zn.push({ Un: 6 });
    }
    Zn() {
      this.Hn(), (this.zn = [{ Un: 4 }]);
    }
    Kn(t) {
      this.Hn(), this.zn.push({ Un: 2, At: t });
    }
    Gn(t) {
      this.Hn(), this.zn.push({ Un: 3, At: t });
    }
    Jn() {
      return this.zn;
    }
    Qn(t) {
      for (const i of t.zn) this.ts(i);
      (this.Ln = Math.max(this.Ln, t.Ln)),
        t.En.forEach((t, i) => {
          this.In(i, t);
        });
    }
    static ns() {
      return new at(2);
    }
    static ss() {
      return new at(3);
    }
    ts(t) {
      switch (t.Un) {
        case 0:
          this.$n();
          break;
        case 1:
          this.qn(t.At);
          break;
        case 2:
          this.Kn(t.At);
          break;
        case 3:
          this.Gn(t.At);
          break;
        case 4:
          this.Zn();
          break;
        case 5:
          this.Yn(t.At);
          break;
        case 6:
          this.Xn();
      }
    }
    Xn() {
      const t = this.zn.findIndex((t) => 5 === t.Un);
      -1 !== t && this.zn.splice(t, 1);
    }
  }
  const ot = ".";
  function _t(t, i) {
    if (!T(t)) return "n/a";
    if (!P(i)) throw new TypeError("invalid length");
    if (i < 0 || i > 16) throw new TypeError("invalid length");
    if (0 === i) return t.toString();
    return ("0000000000000000" + t.toString()).slice(-i);
  }
  class ut {
    constructor(t, i) {
      if ((i || (i = 1), (T(t) && P(t)) || (t = 100), t < 0))
        throw new TypeError("invalid base");
      (this.Li = t), (this.es = i), this.rs();
    }
    format(t) {
      const i = t < 0 ? "−" : "";
      return (t = Math.abs(t)), i + this.hs(t);
    }
    rs() {
      if (((this.ls = 0), this.Li > 0 && this.es > 0)) {
        let t = this.Li;
        for (; t > 1; ) (t /= 10), this.ls++;
      }
    }
    hs(t) {
      const i = this.Li / this.es;
      let n = Math.floor(t),
        s = "";
      const e = void 0 !== this.ls ? this.ls : NaN;
      if (i > 1) {
        let r = +(Math.round(t * i) - n * i).toFixed(this.ls);
        r >= i && ((r -= i), (n += 1)),
          (s = ot + _t(+r.toFixed(this.ls) * this.es, e));
      } else (n = Math.round(n * i) / i), e > 0 && (s = ot + _t(0, e));
      return n.toFixed(0) + s;
    }
  }
  class ct extends ut {
    constructor(t = 100) {
      super(t);
    }
    format(t) {
      return `${super.format(t)}%`;
    }
  }
  class dt {
    constructor(t) {
      this.os = t;
    }
    format(t) {
      let i = "";
      return (
        t < 0 && ((i = "-"), (t = -t)),
        t < 995
          ? i + this._s(t)
          : t < 999995
          ? i + this._s(t / 1e3) + "K"
          : t < 999999995
          ? ((t = 1e3 * Math.round(t / 1e3)), i + this._s(t / 1e6) + "M")
          : ((t = 1e6 * Math.round(t / 1e6)), i + this._s(t / 1e9) + "B")
      );
    }
    _s(t) {
      let i;
      const n = Math.pow(10, this.os);
      return (
        (i =
          (t = Math.round(t * n) / n) >= 1e-15 && t < 1
            ? t.toFixed(this.os).replace(/\.?0+$/, "")
            : String(t)),
        i.replace(/(\.[1-9]*)0+$/, (t, i) => i)
      );
    }
  }
  function ft(t, i, n, s, e, r, h) {
    if (0 === i.length || s.from >= i.length || s.to <= 0) return;
    const { context: l, horizontalPixelRatio: a, verticalPixelRatio: o } = t,
      _ = i[s.from];
    let u = r(t, _),
      c = _;
    if (s.to - s.from < 2) {
      const i = e / 2;
      l.beginPath();
      const n = { st: _.st - i, et: _.et },
        s = { st: _.st + i, et: _.et };
      l.moveTo(n.st * a, n.et * o), l.lineTo(s.st * a, s.et * o), h(t, u, n, s);
    } else {
      const e = (i, n) => {
        h(t, u, c, n), l.beginPath(), (u = i), (c = n);
      };
      let d = c;
      l.beginPath(), l.moveTo(_.st * a, _.et * o);
      for (let h = s.from + 1; h < s.to; ++h) {
        d = i[h];
        const s = r(t, d);
        switch (n) {
          case 0:
            l.lineTo(d.st * a, d.et * o);
            break;
          case 1:
            l.lineTo(d.st * a, i[h - 1].et * o),
              s !== u && (e(s, d), l.lineTo(d.st * a, i[h - 1].et * o)),
              l.lineTo(d.st * a, d.et * o);
            break;
          case 2: {
            const [t, n] = bt(i, h - 1, h);
            l.bezierCurveTo(
              t.st * a,
              t.et * o,
              n.st * a,
              n.et * o,
              d.st * a,
              d.et * o
            );
            break;
          }
        }
        1 !== n && s !== u && (e(s, d), l.moveTo(d.st * a, d.et * o));
      }
      (c !== d || (c === d && 1 === n)) && h(t, u, c, d);
    }
  }
  const vt = 6;
  function pt(t, i) {
    return { st: t.st - i.st, et: t.et - i.et };
  }
  function mt(t, i) {
    return { st: t.st / i, et: t.et / i };
  }
  function bt(t, i, n) {
    const s = Math.max(0, i - 1),
      e = Math.min(t.length - 1, n + 1);
    var r, h;
    return [
      ((r = t[i]),
      (h = mt(pt(t[n], t[s]), vt)),
      { st: r.st + h.st, et: r.et + h.et }),
      pt(t[n], mt(pt(t[e], t[i]), vt)),
    ];
  }
  function wt(t, i, n, s, e) {
    const { context: r, horizontalPixelRatio: h, verticalPixelRatio: l } = i;
    r.lineTo(e.st * h, t * l),
      r.lineTo(s.st * h, t * l),
      r.closePath(),
      (r.fillStyle = n),
      r.fill();
  }
  class gt extends $ {
    constructor() {
      super(...arguments), (this.J = null);
    }
    tt(t) {
      this.J = t;
    }
    Z(t) {
      var i;
      if (null === this.J) return;
      const { nt: n, it: s, us: e, rt: r, Ft: h, cs: l } = this.J,
        a =
          null !== (i = this.J.ds) && void 0 !== i
            ? i
            : this.J.fs
            ? 0
            : t.mediaSize.height;
      if (null === s) return;
      const o = t.context;
      (o.lineCap = "butt"),
        (o.lineJoin = "round"),
        (o.lineWidth = r),
        _(o, h),
        (o.lineWidth = 1),
        ft(t, n, l, s, e, this.vs.bind(this), wt.bind(null, a));
    }
  }
  function Mt(t, i, n) {
    return Math.min(Math.max(t, i), n);
  }
  function xt(t, i, n) {
    return i - t <= n;
  }
  function St(t) {
    return t <= 0 ? NaN : Math.log(t) / Math.log(10);
  }
  function yt(t) {
    const i = Math.ceil(t);
    return i % 2 == 0 ? i - 1 : i;
  }
  class kt {
    ps(t, i) {
      const n = this.bs,
        { ws: s, gs: e, Ms: r, xs: h, Ss: l, ds: a } = i;
      if (
        void 0 === this.ys ||
        void 0 === n ||
        n.ws !== s ||
        n.gs !== e ||
        n.Ms !== r ||
        n.xs !== h ||
        n.ds !== a ||
        n.Ss !== l
      ) {
        const n = t.context.createLinearGradient(0, 0, 0, l);
        if ((n.addColorStop(0, s), null != a)) {
          const i = Mt((a * t.verticalPixelRatio) / l, 0, 1);
          n.addColorStop(i, e), n.addColorStop(i, r);
        }
        n.addColorStop(1, h), (this.ys = n), (this.bs = i);
      }
      return this.ys;
    }
  }
  class Ct extends gt {
    constructor() {
      super(...arguments), (this.ks = new kt());
    }
    vs(t, i) {
      return this.ks.ps(t, {
        ws: i.Cs,
        gs: "",
        Ms: "",
        xs: i.Ts,
        Ss: t.bitmapSize.height,
      });
    }
  }
  function Tt(t, i) {
    const n = t.context;
    (n.strokeStyle = i), n.stroke();
  }
  class Pt extends $ {
    constructor() {
      super(...arguments), (this.J = null);
    }
    tt(t) {
      this.J = t;
    }
    Z(t) {
      if (null === this.J) return;
      const { nt: i, it: n, us: s, cs: e, rt: r, Ft: h, Ps: l } = this.J;
      if (null === n) return;
      const a = t.context;
      (a.lineCap = "butt"),
        (a.lineWidth = r * t.verticalPixelRatio),
        _(a, h),
        (a.lineJoin = "round");
      const o = this.Rs.bind(this);
      void 0 !== e && ft(t, i, e, n, s, o, Tt),
        l &&
          (function (t, i, n, s, e) {
            const {
              horizontalPixelRatio: r,
              verticalPixelRatio: h,
              context: l,
            } = t;
            let a = null;
            const o = (Math.max(1, Math.floor(r)) % 2) / 2,
              _ = n * h + o;
            for (let n = s.to - 1; n >= s.from; --n) {
              const s = i[n];
              if (s) {
                const i = e(t, s);
                i !== a &&
                  (l.beginPath(),
                  null !== a && l.fill(),
                  (l.fillStyle = i),
                  (a = i));
                const n = Math.round(s.st * r) + o,
                  u = s.et * h;
                l.moveTo(n, u), l.arc(n, u, _, 0, 2 * Math.PI);
              }
            }
            l.fill();
          })(t, i, l, n, o);
    }
  }
  class Rt extends Pt {
    Rs(t, i) {
      return i.ot;
    }
  }
  function Dt(t, i, n, s = 0, e = t.length) {
    let r = e - s;
    for (; 0 < r; ) {
      const e = r >> 1,
        h = s + e;
      n(t[h], i) ? ((s = h + 1), (r -= e + 1)) : (r = e);
    }
    return s;
  }
  function Ot(t, i, n, s = 0, e = t.length) {
    let r = e - s;
    for (; 0 < r; ) {
      const e = r >> 1,
        h = s + e;
      n(i, t[h]) ? (r = e) : ((s = h + 1), (r -= e + 1));
    }
    return s;
  }
  function At(t, i) {
    return t._t < i;
  }
  function Bt(t, i) {
    return t < i._t;
  }
  function Vt(t, i, n) {
    const s = i.Ds(),
      e = i.ci(),
      r = Dt(t, s, At),
      h = Ot(t, e, Bt);
    if (!n) return { from: r, to: h };
    let l = r,
      a = h;
    return (
      r > 0 && r < t.length && t[r]._t >= s && (l = r - 1),
      h > 0 && h < t.length && t[h - 1]._t <= e && (a = h + 1),
      { from: l, to: a }
    );
  }
  class Et {
    constructor(t, i, n) {
      (this.Os = !0),
        (this.As = !0),
        (this.Bs = !0),
        (this.Vs = []),
        (this.Es = null),
        (this.zs = t),
        (this.Ls = i),
        (this.Is = n);
    }
    wt(t) {
      (this.Os = !0),
        "data" === t && (this.As = !0),
        "options" === t && (this.Bs = !0);
    }
    Mt() {
      return this.zs.Ct()
        ? (this.Ns(), null === this.Es ? null : this.Fs)
        : null;
    }
    Ws() {
      this.Vs = this.Vs.map((t) =>
        Object.assign(Object.assign({}, t), this.zs.$s().js(t._t))
      );
    }
    Hs() {
      this.Es = null;
    }
    Ns() {
      this.As && (this.Us(), (this.As = !1)),
        this.Bs && (this.Ws(), (this.Bs = !1)),
        this.Os && (this.qs(), (this.Os = !1));
    }
    qs() {
      const t = this.zs.Ot(),
        i = this.Ls.yt();
      if ((this.Hs(), i.Ni() || t.Ni())) return;
      const n = i.Ys();
      if (null === n) return;
      if (0 === this.zs.Vn().Xs()) return;
      const s = this.zs.Tt();
      null !== s &&
        ((this.Es = Vt(this.Vs, n, this.Is)), this.Zs(t, i, s.At), this.Ks());
    }
  }
  class zt extends Et {
    constructor(t, i) {
      super(t, i, !0);
    }
    Zs(t, i, n) {
      i.Gs(this.Vs, B(this.Es)), t.Js(this.Vs, n, B(this.Es));
    }
    Qs(t, i) {
      return { _t: t, ut: i, st: NaN, et: NaN };
    }
    Us() {
      const t = this.zs.$s();
      this.Vs = this.zs
        .Vn()
        .te()
        .map((i) => {
          const n = i.At[3];
          return this.ie(i.ne, n, t);
        });
    }
  }
  class Lt extends zt {
    constructor(t, i) {
      super(t, i),
        (this.Fs = new L()),
        (this.se = new Ct()),
        (this.ee = new Rt()),
        this.Fs.Y([this.se, this.ee]);
    }
    ie(t, i, n) {
      return Object.assign(Object.assign({}, this.Qs(t, i)), n.js(t));
    }
    Ks() {
      const t = this.zs.F();
      this.se.tt({
        cs: t.lineType,
        nt: this.Vs,
        Ft: t.lineStyle,
        rt: t.lineWidth,
        ds: null,
        fs: t.invertFilledArea,
        it: this.Es,
        us: this.Ls.yt().re(),
      }),
        this.ee.tt({
          cs: t.lineVisible ? t.lineType : void 0,
          nt: this.Vs,
          Ft: t.lineStyle,
          rt: t.lineWidth,
          it: this.Es,
          us: this.Ls.yt().re(),
          Ps: t.pointMarkersVisible
            ? t.pointMarkersRadius || t.lineWidth / 2 + 2
            : void 0,
        });
    }
  }
  class It extends $ {
    constructor() {
      super(...arguments), (this.Lt = null), (this.he = 0), (this.le = 0);
    }
    tt(t) {
      this.Lt = t;
    }
    Z({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      if (null === this.Lt || 0 === this.Lt.Vn.length || null === this.Lt.it)
        return;
      if (((this.he = this.ae(i)), this.he >= 2)) {
        Math.max(1, Math.floor(i)) % 2 != this.he % 2 && this.he--;
      }
      this.le = this.Lt.oe ? Math.min(this.he, Math.floor(i)) : this.he;
      let s = null;
      const e = this.le <= this.he && this.Lt.re >= Math.floor(1.5 * i);
      for (let r = this.Lt.it.from; r < this.Lt.it.to; ++r) {
        const h = this.Lt.Vn[r];
        s !== h._e && ((t.fillStyle = h._e), (s = h._e));
        const l = Math.floor(0.5 * this.le),
          a = Math.round(h.st * i),
          o = a - l,
          _ = this.le,
          u = o + _ - 1,
          c = Math.min(h.ue, h.ce),
          d = Math.max(h.ue, h.ce),
          f = Math.round(c * n) - l,
          v = Math.round(d * n) + l,
          p = Math.max(v - f, this.le);
        t.fillRect(o, f, _, p);
        const m = Math.ceil(1.5 * this.he);
        if (e) {
          if (this.Lt.de) {
            const i = a - m;
            let s = Math.max(f, Math.round(h.fe * n) - l),
              e = s + _ - 1;
            e > f + p - 1 && ((e = f + p - 1), (s = e - _ + 1)),
              t.fillRect(i, s, o - i, e - s + 1);
          }
          const i = a + m;
          let s = Math.max(f, Math.round(h.ve * n) - l),
            e = s + _ - 1;
          e > f + p - 1 && ((e = f + p - 1), (s = e - _ + 1)),
            t.fillRect(u + 1, s, i - u, e - s + 1);
        }
      }
    }
    ae(t) {
      const i = Math.floor(t);
      return Math.max(
        i,
        Math.floor(
          (function (t, i) {
            return Math.floor(0.3 * t * i);
          })(f(this.Lt).re, t)
        )
      );
    }
  }
  class Nt extends Et {
    constructor(t, i) {
      super(t, i, !1);
    }
    Zs(t, i, n) {
      i.Gs(this.Vs, B(this.Es)), t.pe(this.Vs, n, B(this.Es));
    }
    me(t, i, n) {
      return {
        _t: t,
        be: i.At[0],
        we: i.At[1],
        ge: i.At[2],
        Me: i.At[3],
        st: NaN,
        fe: NaN,
        ue: NaN,
        ce: NaN,
        ve: NaN,
      };
    }
    Us() {
      const t = this.zs.$s();
      this.Vs = this.zs
        .Vn()
        .te()
        .map((i) => this.ie(i.ne, i, t));
    }
  }
  class Ft extends Nt {
    constructor() {
      super(...arguments), (this.Fs = new It());
    }
    ie(t, i, n) {
      return Object.assign(Object.assign({}, this.me(t, i, n)), n.js(t));
    }
    Ks() {
      const t = this.zs.F();
      this.Fs.tt({
        Vn: this.Vs,
        re: this.Ls.yt().re(),
        de: t.openVisible,
        oe: t.thinBars,
        it: this.Es,
      });
    }
  }
  class Wt extends gt {
    constructor() {
      super(...arguments), (this.ks = new kt());
    }
    vs(t, i) {
      const n = this.J;
      return this.ks.ps(t, {
        ws: i.xe,
        gs: i.Se,
        Ms: i.ye,
        xs: i.ke,
        Ss: t.bitmapSize.height,
        ds: n.ds,
      });
    }
  }
  class jt extends Pt {
    constructor() {
      super(...arguments), (this.Ce = new kt());
    }
    Rs(t, i) {
      const n = this.J;
      return this.Ce.ps(t, {
        ws: i.Te,
        gs: i.Te,
        Ms: i.Pe,
        xs: i.Pe,
        Ss: t.bitmapSize.height,
        ds: n.ds,
      });
    }
  }
  class $t extends zt {
    constructor(t, i) {
      super(t, i),
        (this.Fs = new L()),
        (this.Re = new Wt()),
        (this.De = new jt()),
        this.Fs.Y([this.Re, this.De]);
    }
    ie(t, i, n) {
      return Object.assign(Object.assign({}, this.Qs(t, i)), n.js(t));
    }
    Ks() {
      const t = this.zs.Tt();
      if (null === t) return;
      const i = this.zs.F(),
        n = this.zs.Ot().Dt(i.baseValue.price, t.At),
        s = this.Ls.yt().re();
      this.Re.tt({
        nt: this.Vs,
        rt: i.lineWidth,
        Ft: i.lineStyle,
        cs: i.lineType,
        ds: n,
        fs: !1,
        it: this.Es,
        us: s,
      }),
        this.De.tt({
          nt: this.Vs,
          rt: i.lineWidth,
          Ft: i.lineStyle,
          cs: i.lineVisible ? i.lineType : void 0,
          Ps: i.pointMarkersVisible
            ? i.pointMarkersRadius || i.lineWidth / 2 + 2
            : void 0,
          ds: n,
          it: this.Es,
          us: s,
        });
    }
  }
  class Ht extends $ {
    constructor() {
      super(...arguments), (this.Lt = null), (this.he = 0);
    }
    tt(t) {
      this.Lt = t;
    }
    Z(t) {
      if (null === this.Lt || 0 === this.Lt.Vn.length || null === this.Lt.it)
        return;
      const { horizontalPixelRatio: i } = t;
      if (
        ((this.he = (function (t, i) {
          if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
          const n = 1 - (0.2 * Math.atan(Math.max(4, t) - 4)) / (0.5 * Math.PI),
            s = Math.floor(t * n * i),
            e = Math.floor(t * i),
            r = Math.min(s, e);
          return Math.max(Math.floor(i), r);
        })(this.Lt.re, i)),
        this.he >= 2)
      ) {
        Math.floor(i) % 2 != this.he % 2 && this.he--;
      }
      const n = this.Lt.Vn;
      this.Lt.Oe && this.Ae(t, n, this.Lt.it),
        this.Lt.ui && this.Be(t, n, this.Lt.it);
      const s = this.Ve(i);
      (!this.Lt.ui || this.he > 2 * s) && this.Ee(t, n, this.Lt.it);
    }
    Ae(t, i, n) {
      if (null === this.Lt) return;
      const { context: s, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
      let h = "",
        l = Math.min(Math.floor(e), Math.floor(this.Lt.re * e));
      l = Math.max(Math.floor(e), Math.min(l, this.he));
      const a = Math.floor(0.5 * l);
      let o = null;
      for (let t = n.from; t < n.to; t++) {
        const n = i[t];
        n.ze !== h && ((s.fillStyle = n.ze), (h = n.ze));
        const _ = Math.round(Math.min(n.fe, n.ve) * r),
          u = Math.round(Math.max(n.fe, n.ve) * r),
          c = Math.round(n.ue * r),
          d = Math.round(n.ce * r);
        let f = Math.round(e * n.st) - a;
        const v = f + l - 1;
        null !== o && ((f = Math.max(o + 1, f)), (f = Math.min(f, v)));
        const p = v - f + 1;
        s.fillRect(f, c, p, _ - c), s.fillRect(f, u + 1, p, d - u), (o = v);
      }
    }
    Ve(t) {
      let i = Math.floor(1 * t);
      this.he <= 2 * i && (i = Math.floor(0.5 * (this.he - 1)));
      const n = Math.max(Math.floor(t), i);
      return this.he <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n;
    }
    Be(t, i, n) {
      if (null === this.Lt) return;
      const { context: s, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
      let h = "";
      const l = this.Ve(e);
      let a = null;
      for (let t = n.from; t < n.to; t++) {
        const n = i[t];
        n.Le !== h && ((s.fillStyle = n.Le), (h = n.Le));
        let o = Math.round(n.st * e) - Math.floor(0.5 * this.he);
        const _ = o + this.he - 1,
          u = Math.round(Math.min(n.fe, n.ve) * r),
          c = Math.round(Math.max(n.fe, n.ve) * r);
        if (
          (null !== a && ((o = Math.max(a + 1, o)), (o = Math.min(o, _))),
          this.Lt.re * e > 2 * l)
        )
          q(s, o, u, _ - o + 1, c - u + 1, l);
        else {
          const t = _ - o + 1;
          s.fillRect(o, u, t, c - u + 1);
        }
        a = _;
      }
    }
    Ee(t, i, n) {
      if (null === this.Lt) return;
      const { context: s, horizontalPixelRatio: e, verticalPixelRatio: r } = t;
      let h = "";
      const l = this.Ve(e);
      for (let t = n.from; t < n.to; t++) {
        const n = i[t];
        let a = Math.round(Math.min(n.fe, n.ve) * r),
          o = Math.round(Math.max(n.fe, n.ve) * r),
          _ = Math.round(n.st * e) - Math.floor(0.5 * this.he),
          u = _ + this.he - 1;
        if (n._e !== h) {
          const t = n._e;
          (s.fillStyle = t), (h = t);
        }
        this.Lt.ui && ((_ += l), (a += l), (u -= l), (o -= l)),
          a > o || s.fillRect(_, a, u - _ + 1, o - a + 1);
      }
    }
  }
  class Ut extends Nt {
    constructor() {
      super(...arguments), (this.Fs = new Ht());
    }
    ie(t, i, n) {
      return Object.assign(Object.assign({}, this.me(t, i, n)), n.js(t));
    }
    Ks() {
      const t = this.zs.F();
      this.Fs.tt({
        Vn: this.Vs,
        re: this.Ls.yt().re(),
        Oe: t.wickVisible,
        ui: t.borderVisible,
        it: this.Es,
      });
    }
  }
  class qt {
    constructor(t, i) {
      (this.Ie = t), (this.Li = i);
    }
    X(t, i, n) {
      this.Ie.draw(t, this.Li, i, n);
    }
  }
  class Yt extends Et {
    constructor(t, i, n) {
      super(t, i, !1),
        (this.bn = n),
        (this.Fs = new qt(this.bn.renderer(), (i) => {
          const n = t.Tt();
          return null === n ? null : t.Ot().Dt(i, n.At);
        }));
    }
    Ne(t) {
      return this.bn.priceValueBuilder(t);
    }
    Fe(t) {
      return this.bn.isWhitespace(t);
    }
    Us() {
      const t = this.zs.$s();
      this.Vs = this.zs
        .Vn()
        .te()
        .map((i) =>
          Object.assign(Object.assign({ _t: i.ne, st: NaN }, t.js(i.ne)), {
            We: i.je,
          })
        );
    }
    Zs(t, i) {
      i.Gs(this.Vs, B(this.Es));
    }
    Ks() {
      this.bn.update(
        {
          bars: this.Vs.map(Xt),
          barSpacing: this.Ls.yt().re(),
          visibleRange: this.Es,
        },
        this.zs.F()
      );
    }
  }
  function Xt(t) {
    return { x: t.st, time: t._t, originalData: t.We, barColor: t._e };
  }
  class Zt extends $ {
    constructor() {
      super(...arguments), (this.Lt = null), (this.$e = []);
    }
    tt(t) {
      (this.Lt = t), (this.$e = []);
    }
    Z({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      if (null === this.Lt || 0 === this.Lt.nt.length || null === this.Lt.it)
        return;
      this.$e.length || this.He(i);
      const s = Math.max(1, Math.floor(n)),
        e = Math.round(this.Lt.Ue * n) - Math.floor(s / 2),
        r = e + s;
      for (let i = this.Lt.it.from; i < this.Lt.it.to; i++) {
        const h = this.Lt.nt[i],
          l = this.$e[i - this.Lt.it.from],
          a = Math.round(h.et * n);
        let o, _;
        (t.fillStyle = h._e),
          a <= e
            ? ((o = a), (_ = r))
            : ((o = e), (_ = a - Math.floor(s / 2) + s)),
          t.fillRect(l.Ds, o, l.ci - l.Ds + 1, _ - o);
      }
    }
    He(t) {
      if (null === this.Lt || 0 === this.Lt.nt.length || null === this.Lt.it)
        return void (this.$e = []);
      const i = Math.ceil(this.Lt.re * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
        n = Math.round(this.Lt.re * t) - i;
      this.$e = new Array(this.Lt.it.to - this.Lt.it.from);
      for (let i = this.Lt.it.from; i < this.Lt.it.to; i++) {
        const s = this.Lt.nt[i],
          e = Math.round(s.st * t);
        let r, h;
        if (n % 2) {
          const t = (n - 1) / 2;
          (r = e - t), (h = e + t);
        } else {
          const t = n / 2;
          (r = e - t), (h = e + t - 1);
        }
        this.$e[i - this.Lt.it.from] = {
          Ds: r,
          ci: h,
          qe: e,
          Ye: s.st * t,
          _t: s._t,
        };
      }
      for (let t = this.Lt.it.from + 1; t < this.Lt.it.to; t++) {
        const n = this.$e[t - this.Lt.it.from],
          s = this.$e[t - this.Lt.it.from - 1];
        n._t === s._t + 1 &&
          n.Ds - s.ci !== i + 1 &&
          (s.qe > s.Ye ? (s.ci = n.Ds - i - 1) : (n.Ds = s.ci + i + 1));
      }
      let s = Math.ceil(this.Lt.re * t);
      for (let t = this.Lt.it.from; t < this.Lt.it.to; t++) {
        const i = this.$e[t - this.Lt.it.from];
        i.ci < i.Ds && (i.ci = i.Ds);
        const n = i.ci - i.Ds + 1;
        s = Math.min(n, s);
      }
      if (i > 0 && s < 4)
        for (let t = this.Lt.it.from; t < this.Lt.it.to; t++) {
          const i = this.$e[t - this.Lt.it.from];
          i.ci - i.Ds + 1 > s && (i.qe > i.Ye ? (i.ci -= 1) : (i.Ds += 1));
        }
    }
  }
  class Kt extends zt {
    constructor() {
      super(...arguments), (this.Fs = new Zt());
    }
    ie(t, i, n) {
      return Object.assign(Object.assign({}, this.Qs(t, i)), n.js(t));
    }
    Ks() {
      const t = {
        nt: this.Vs,
        re: this.Ls.yt().re(),
        it: this.Es,
        Ue: this.zs.Ot().Dt(this.zs.F().base, f(this.zs.Tt()).At),
      };
      this.Fs.tt(t);
    }
  }
  class Gt extends zt {
    constructor() {
      super(...arguments), (this.Fs = new Rt());
    }
    ie(t, i, n) {
      return Object.assign(Object.assign({}, this.Qs(t, i)), n.js(t));
    }
    Ks() {
      const t = this.zs.F(),
        i = {
          nt: this.Vs,
          Ft: t.lineStyle,
          cs: t.lineVisible ? t.lineType : void 0,
          rt: t.lineWidth,
          Ps: t.pointMarkersVisible
            ? t.pointMarkersRadius || t.lineWidth / 2 + 2
            : void 0,
          it: this.Es,
          us: this.Ls.yt().re(),
        };
      this.Fs.tt(i);
    }
  }
  const Jt = /[2-9]/g;
  class Qt {
    constructor(t = 50) {
      (this.Xe = 0),
        (this.Ze = 1),
        (this.Ke = 1),
        (this.Ge = {}),
        (this.Je = new Map()),
        (this.Qe = t);
    }
    tr() {
      (this.Xe = 0),
        this.Je.clear(),
        (this.Ze = 1),
        (this.Ke = 1),
        (this.Ge = {});
    }
    xi(t, i, n) {
      return this.ir(t, i, n).width;
    }
    Mi(t, i, n) {
      const s = this.ir(t, i, n);
      return (
        ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) /
        2
      );
    }
    ir(t, i, n) {
      const s = n || Jt,
        e = String(i).replace(s, "0");
      if (this.Je.has(e)) return d(this.Je.get(e)).nr;
      if (this.Xe === this.Qe) {
        const t = this.Ge[this.Ke];
        delete this.Ge[this.Ke], this.Je.delete(t), this.Ke++, this.Xe--;
      }
      t.save(), (t.textBaseline = "middle");
      const r = t.measureText(e);
      return (
        t.restore(),
        (0 === r.width && i.length) ||
          (this.Je.set(e, { nr: r, sr: this.Ze }),
          (this.Ge[this.Ze] = e),
          this.Xe++,
          this.Ze++),
        r
      );
    }
  }
  class ti {
    constructor(t) {
      (this.er = null), (this.S = null), (this.rr = "right"), (this.hr = t);
    }
    lr(t, i, n) {
      (this.er = t), (this.S = i), (this.rr = n);
    }
    X(t) {
      null !== this.S &&
        null !== this.er &&
        this.er.X(t, this.S, this.hr, this.rr);
    }
  }
  class ii {
    constructor(t, i, n) {
      (this.ar = t),
        (this.hr = new Qt(50)),
        (this._r = i),
        (this.N = n),
        (this.W = -1),
        (this.jt = new ti(this.hr));
    }
    Mt() {
      const t = this.N.ur(this._r);
      if (null === t) return null;
      const i = t.cr(this._r) ? t.dr() : this._r.Ot();
      if (null === i) return null;
      const n = t.vr(i);
      if ("overlay" === n) return null;
      const s = this.N.pr();
      return (
        s.T !== this.W && ((this.W = s.T), this.hr.tr()),
        this.jt.lr(this.ar.Ei(), s, n),
        this.jt
      );
    }
  }
  class ni extends $ {
    constructor() {
      super(...arguments), (this.Lt = null);
    }
    tt(t) {
      this.Lt = t;
    }
    mr(t, i) {
      var n;
      if (!(null === (n = this.Lt) || void 0 === n ? void 0 : n.Ct))
        return null;
      const { et: s, rt: e, br: r } = this.Lt;
      return i >= s - e - 7 && i <= s + e + 7 ? { wr: this.Lt, br: r } : null;
    }
    Z({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (null === this.Lt) return;
      if (!1 === this.Lt.Ct) return;
      const e = Math.round(this.Lt.et * s);
      e < 0 ||
        e > i.height ||
        ((t.lineCap = "butt"),
        (t.strokeStyle = this.Lt.D),
        (t.lineWidth = Math.floor(this.Lt.rt * n)),
        _(t, this.Lt.Ft),
        u(t, e, 0, i.width));
    }
  }
  class si {
    constructor(t) {
      (this.gr = { et: 0, D: "rgba(0, 0, 0, 0)", rt: 1, Ft: 0, Ct: !1 }),
        (this.Mr = new ni()),
        (this.vt = !0),
        (this.zs = t),
        (this.Ls = t.Ut()),
        this.Mr.tt(this.gr);
    }
    wt() {
      this.vt = !0;
    }
    Mt() {
      return this.zs.Ct()
        ? (this.vt && (this.Sr(), (this.vt = !1)), this.Mr)
        : null;
    }
  }
  class ei extends si {
    constructor(t) {
      super(t);
    }
    Sr() {
      this.gr.Ct = !1;
      const t = this.zs.Ot(),
        i = t.yr().yr;
      if (2 !== i && 3 !== i) return;
      const n = this.zs.F();
      if (!n.baseLineVisible || !this.zs.Ct()) return;
      const s = this.zs.Tt();
      null !== s &&
        ((this.gr.Ct = !0),
        (this.gr.et = t.Dt(s.At, s.At)),
        (this.gr.D = n.baseLineColor),
        (this.gr.rt = n.baseLineWidth),
        (this.gr.Ft = n.baseLineStyle));
    }
  }
  class ri extends $ {
    constructor() {
      super(...arguments), (this.Lt = null);
    }
    tt(t) {
      this.Lt = t;
    }
    je() {
      return this.Lt;
    }
    Z({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      const s = this.Lt;
      if (null === s) return;
      const e = Math.max(1, Math.floor(i)),
        r = (e % 2) / 2,
        h = Math.round(s.Ye.x * i) + r,
        l = s.Ye.y * n;
      (t.fillStyle = s.kr), t.beginPath();
      const a = Math.max(2, 1.5 * s.Cr) * i;
      t.arc(h, l, a, 0, 2 * Math.PI, !1),
        t.fill(),
        (t.fillStyle = s.Tr),
        t.beginPath(),
        t.arc(h, l, s.lt * i, 0, 2 * Math.PI, !1),
        t.fill(),
        (t.lineWidth = e),
        (t.strokeStyle = s.Pr),
        t.beginPath(),
        t.arc(h, l, s.lt * i + e / 2, 0, 2 * Math.PI, !1),
        t.stroke();
    }
  }
  const hi = [
    { Rr: 0, Dr: 0.25, Or: 4, Ar: 10, Br: 0.25, Vr: 0, Er: 0.4, zr: 0.8 },
    { Rr: 0.25, Dr: 0.525, Or: 10, Ar: 14, Br: 0, Vr: 0, Er: 0.8, zr: 0 },
    { Rr: 0.525, Dr: 1, Or: 14, Ar: 14, Br: 0, Vr: 0, Er: 0, zr: 0 },
  ];
  function li(t, i, n, s) {
    return (function (t, i) {
      if ("transparent" === t) return t;
      const n = S(t),
        s = n[3];
      return `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${i * s})`;
    })(t, n + (s - n) * i);
  }
  function ai(t, i) {
    const n = (t % 2600) / 2600;
    let s;
    for (const t of hi)
      if (n >= t.Rr && n <= t.Dr) {
        s = t;
        break;
      }
    c(void 0 !== s, "Last price animation internal logic error");
    const e = (n - s.Rr) / (s.Dr - s.Rr);
    return {
      Tr: li(i, e, s.Br, s.Vr),
      Pr: li(i, e, s.Er, s.zr),
      lt: ((r = e), (h = s.Or), (l = s.Ar), h + (l - h) * r),
    };
    var r, h, l;
  }
  class oi {
    constructor(t) {
      (this.jt = new ri()),
        (this.vt = !0),
        (this.Lr = !0),
        (this.Ir = performance.now()),
        (this.Nr = this.Ir - 1),
        (this.Fr = t);
    }
    Wr() {
      (this.Nr = this.Ir - 1), this.wt();
    }
    jr() {
      if ((this.wt(), 2 === this.Fr.F().lastPriceAnimation)) {
        const t = performance.now(),
          i = this.Nr - t;
        if (i > 0) return void (i < 650 && (this.Nr += 2600));
        (this.Ir = t), (this.Nr = t + 2600);
      }
    }
    wt() {
      this.vt = !0;
    }
    $r() {
      this.Lr = !0;
    }
    Ct() {
      return 0 !== this.Fr.F().lastPriceAnimation;
    }
    Hr() {
      switch (this.Fr.F().lastPriceAnimation) {
        case 0:
          return !1;
        case 1:
          return !0;
        case 2:
          return performance.now() <= this.Nr;
      }
    }
    Mt() {
      return (
        this.vt
          ? (this.xt(), (this.vt = !1), (this.Lr = !1))
          : this.Lr && (this.Ur(), (this.Lr = !1)),
        this.jt
      );
    }
    xt() {
      this.jt.tt(null);
      const t = this.Fr.Ut().yt(),
        i = t.Ys(),
        n = this.Fr.Tt();
      if (null === i || null === n) return;
      const s = this.Fr.qr(!0);
      if (s.Yr || !i.Xr(s.ne)) return;
      const e = { x: t.zt(s.ne), y: this.Fr.Ot().Dt(s.ut, n.At) },
        r = s.D,
        h = this.Fr.F().lineWidth,
        l = ai(this.Zr(), r);
      this.jt.tt({ kr: r, Cr: h, Tr: l.Tr, Pr: l.Pr, lt: l.lt, Ye: e });
    }
    Ur() {
      const t = this.jt.je();
      if (null !== t) {
        const i = ai(this.Zr(), t.kr);
        (t.Tr = i.Tr), (t.Pr = i.Pr), (t.lt = i.lt);
      }
    }
    Zr() {
      return this.Hr() ? performance.now() - this.Ir : 2599;
    }
  }
  function _i(t, i) {
    return yt(Math.min(Math.max(t, 12), 30) * i);
  }
  function ui(t, i) {
    switch (t) {
      case "arrowDown":
      case "arrowUp":
        return _i(i, 1);
      case "circle":
        return _i(i, 0.8);
      case "square":
        return _i(i, 0.7);
    }
  }
  function ci(t) {
    return (function (t) {
      const i = Math.ceil(t);
      return i % 2 != 0 ? i - 1 : i;
    })(_i(t, 1));
  }
  function di(t) {
    return Math.max(_i(t, 0.1), 3);
  }
  function fi(t, i, n, s, e) {
    const r = ui("square", n),
      h = (r - 1) / 2,
      l = t - h,
      a = i - h;
    return s >= l && s <= l + r && e >= a && e <= a + r;
  }
  function vi(t, i, n, s, e) {
    const r = (ui("arrowUp", e) - 1) / 2,
      h = (yt(e / 2) - 1) / 2;
    i.beginPath(),
      t
        ? (i.moveTo(n - r, s),
          i.lineTo(n, s - r),
          i.lineTo(n + r, s),
          i.lineTo(n + h, s),
          i.lineTo(n + h, s + r),
          i.lineTo(n - h, s + r),
          i.lineTo(n - h, s))
        : (i.moveTo(n - r, s),
          i.lineTo(n, s + r),
          i.lineTo(n + r, s),
          i.lineTo(n + h, s),
          i.lineTo(n + h, s - r),
          i.lineTo(n - h, s - r),
          i.lineTo(n - h, s)),
      i.fill();
  }
  function pi(t, i, n, s, e, r) {
    return fi(i, n, s, e, r);
  }
  class mi extends I {
    constructor() {
      super(...arguments),
        (this.Lt = null),
        (this.hr = new Qt()),
        (this.W = -1),
        (this.j = ""),
        (this.Kr = "");
    }
    tt(t) {
      this.Lt = t;
    }
    lr(t, i) {
      (this.W === t && this.j === i) ||
        ((this.W = t), (this.j = i), (this.Kr = E(t, i)), this.hr.tr());
    }
    mr(t, i) {
      if (null === this.Lt || null === this.Lt.it) return null;
      for (let n = this.Lt.it.from; n < this.Lt.it.to; n++) {
        const s = this.Lt.nt[n];
        if (wi(s, t, i)) return { wr: s.Gr, br: s.br };
      }
      return null;
    }
    Z({ context: t }, i, n) {
      if (null !== this.Lt && null !== this.Lt.it) {
        (t.textBaseline = "middle"), (t.font = this.Kr);
        for (let i = this.Lt.it.from; i < this.Lt.it.to; i++) {
          const n = this.Lt.nt[i];
          void 0 !== n.Gt &&
            ((n.Gt.$i = this.hr.xi(t, n.Gt.Jr)),
            (n.Gt.Et = this.W),
            (n.Gt.st = n.st - n.Gt.$i / 2)),
            bi(n, t);
        }
      }
    }
  }
  function bi(t, i) {
    (i.fillStyle = t.D),
      void 0 !== t.Gt &&
        (function (t, i, n, s) {
          t.fillText(i, n, s);
        })(i, t.Gt.Jr, t.Gt.st, t.Gt.et),
      (function (t, i) {
        if (0 === t.Xs) return;
        switch (t.Qr) {
          case "arrowDown":
            return void vi(!1, i, t.st, t.et, t.Xs);
          case "arrowUp":
            return void vi(!0, i, t.st, t.et, t.Xs);
          case "circle":
            return void (function (t, i, n, s) {
              const e = (ui("circle", s) - 1) / 2;
              t.beginPath(), t.arc(i, n, e, 0, 2 * Math.PI, !1), t.fill();
            })(i, t.st, t.et, t.Xs);
          case "square":
            return void (function (t, i, n, s) {
              const e = ui("square", s),
                r = (e - 1) / 2,
                h = i - r,
                l = n - r;
              t.fillRect(h, l, e, e);
            })(i, t.st, t.et, t.Xs);
        }
        t.Qr;
      })(t, i);
  }
  function wi(t, i, n) {
    return (
      !(
        void 0 === t.Gt ||
        !(function (t, i, n, s, e, r) {
          const h = s / 2;
          return e >= t && e <= t + n && r >= i - h && r <= i + h;
        })(t.Gt.st, t.Gt.et, t.Gt.$i, t.Gt.Et, i, n)
      ) ||
      (function (t, i, n) {
        if (0 === t.Xs) return !1;
        switch (t.Qr) {
          case "arrowDown":
          case "arrowUp":
            return pi(0, t.st, t.et, t.Xs, i, n);
          case "circle":
            return (function (t, i, n, s, e) {
              const r = 2 + ui("circle", n) / 2,
                h = t - s,
                l = i - e;
              return Math.sqrt(h * h + l * l) <= r;
            })(t.st, t.et, t.Xs, i, n);
          case "square":
            return fi(t.st, t.et, t.Xs, i, n);
        }
      })(t, i, n)
    );
  }
  function gi(t, i, n, s, e, r, h, l, a) {
    const o = T(n) ? n : n.Me,
      _ = T(n) ? n : n.we,
      u = T(n) ? n : n.ge,
      c = T(i.size) ? Math.max(i.size, 0) : 1,
      d = ci(l.re()) * c,
      f = d / 2;
    switch (((t.Xs = d), i.position)) {
      case "inBar":
        return (
          (t.et = h.Dt(o, a)),
          void (void 0 !== t.Gt && (t.Gt.et = t.et + f + r + 0.6 * e))
        );
      case "aboveBar":
        return (
          (t.et = h.Dt(_, a) - f - s.th),
          void 0 !== t.Gt &&
            ((t.Gt.et = t.et - f - 0.6 * e), (s.th += 1.2 * e)),
          void (s.th += d + r)
        );
      case "belowBar":
        return (
          (t.et = h.Dt(u, a) + f + s.ih),
          void 0 !== t.Gt &&
            ((t.Gt.et = t.et + f + r + 0.6 * e), (s.ih += 1.2 * e)),
          void (s.ih += d + r)
        );
    }
    i.position;
  }
  class Mi {
    constructor(t, i) {
      (this.vt = !0),
        (this.nh = !0),
        (this.sh = !0),
        (this.eh = null),
        (this.jt = new mi()),
        (this.Fr = t),
        (this.Hi = i),
        (this.Lt = { nt: [], it: null });
    }
    wt(t) {
      (this.vt = !0), (this.sh = !0), "data" === t && (this.nh = !0);
    }
    Mt(t) {
      if (!this.Fr.Ct()) return null;
      this.vt && this.rh();
      const i = this.Hi.F().layout;
      return this.jt.lr(i.fontSize, i.fontFamily), this.jt.tt(this.Lt), this.jt;
    }
    hh() {
      if (this.sh) {
        if (this.Fr.lh().length > 0) {
          const t = this.Hi.yt().re(),
            i = di(t),
            n = 1.5 * ci(t) + 2 * i;
          this.eh = { above: n, below: n };
        } else this.eh = null;
        this.sh = !1;
      }
      return this.eh;
    }
    rh() {
      const t = this.Fr.Ot(),
        i = this.Hi.yt(),
        n = this.Fr.lh();
      this.nh &&
        ((this.Lt.nt = n.map((t) => ({
          _t: t.time,
          st: 0,
          et: 0,
          Xs: 0,
          Qr: t.shape,
          D: t.color,
          Gr: t.internalId,
          br: t.id,
          Gt: void 0,
        }))),
        (this.nh = !1));
      const s = this.Hi.F().layout;
      this.Lt.it = null;
      const e = i.Ys();
      if (null === e) return;
      const r = this.Fr.Tt();
      if (null === r) return;
      if (0 === this.Lt.nt.length) return;
      let h = NaN;
      const l = di(i.re()),
        a = { th: l, ih: l };
      this.Lt.it = Vt(this.Lt.nt, e, !0);
      for (let e = this.Lt.it.from; e < this.Lt.it.to; e++) {
        const o = n[e];
        o.time !== h && ((a.th = l), (a.ih = l), (h = o.time));
        const _ = this.Lt.nt[e];
        (_.st = i.zt(o.time)),
          void 0 !== o.text &&
            o.text.length > 0 &&
            (_.Gt = { Jr: o.text, st: 0, et: 0, $i: 0, Et: 0 });
        const u = this.Fr.ah(o.time);
        null !== u && gi(_, o, u, a, s.fontSize, l, t, i, r.At);
      }
      this.vt = !1;
    }
  }
  class xi extends si {
    constructor(t) {
      super(t);
    }
    Sr() {
      const t = this.gr;
      t.Ct = !1;
      const i = this.zs.F();
      if (!i.priceLineVisible || !this.zs.Ct()) return;
      const n = this.zs.qr(0 === i.priceLineSource);
      n.Yr ||
        ((t.Ct = !0),
        (t.et = n.yi),
        (t.D = this.zs.oh(n.D)),
        (t.rt = i.priceLineWidth),
        (t.Ft = i.priceLineStyle));
    }
  }
  class Si extends Q {
    constructor(t) {
      super(), (this.$t = t);
    }
    zi(t, i, n) {
      (t.Ct = !1), (i.Ct = !1);
      const s = this.$t;
      if (!s.Ct()) return;
      const e = s.F(),
        r = e.lastValueVisible,
        h = "" !== s._h(),
        l = 0 === e.seriesLastValueMode,
        a = s.qr(!1);
      if (a.Yr) return;
      r && ((t.Gt = this.uh(a, r, l)), (t.Ct = 0 !== t.Gt.length)),
        (h || l) && ((i.Gt = this.dh(a, r, h, l)), (i.Ct = i.Gt.length > 0));
      const o = s.oh(a.D),
        _ = y(o);
      (n.t = _.t),
        (n.yi = a.yi),
        (i.Bt = s.Ut().Vt(a.yi / s.Ot().Et())),
        (t.Bt = o),
        (t.D = _.i),
        (i.D = _.i);
    }
    dh(t, i, n, s) {
      let e = "";
      const r = this.$t._h();
      return (
        n && 0 !== r.length && (e += `${r} `),
        i && s && (e += this.$t.Ot().fh() ? t.ph : t.mh),
        e.trim()
      );
    }
    uh(t, i, n) {
      return i ? (n ? (this.$t.Ot().fh() ? t.mh : t.ph) : t.Gt) : "";
    }
  }
  class yi {
    constructor(t, i) {
      (this.bh = t), (this.wh = i);
    }
    gh(t) {
      return null !== t && this.bh === t.bh && this.wh === t.wh;
    }
    Mh() {
      return new yi(this.bh, this.wh);
    }
    xh() {
      return this.bh;
    }
    Sh() {
      return this.wh;
    }
    yh() {
      return this.wh - this.bh;
    }
    Ni() {
      return (
        this.wh === this.bh || Number.isNaN(this.wh) || Number.isNaN(this.bh)
      );
    }
    Qn(t) {
      return null === t
        ? this
        : new yi(Math.min(this.xh(), t.xh()), Math.max(this.Sh(), t.Sh()));
    }
    kh(t) {
      if (!T(t)) return;
      if (0 === this.wh - this.bh) return;
      const i = 0.5 * (this.wh + this.bh);
      let n = this.wh - i,
        s = this.bh - i;
      (n *= t), (s *= t), (this.wh = i + n), (this.bh = i + s);
    }
    Ch(t) {
      T(t) && ((this.wh += t), (this.bh += t));
    }
    Th() {
      return { minValue: this.bh, maxValue: this.wh };
    }
    static Ph(t) {
      return null === t ? null : new yi(t.minValue, t.maxValue);
    }
  }
  class ki {
    constructor(t, i) {
      (this.Rh = t), (this.Dh = i || null);
    }
    Oh() {
      return this.Rh;
    }
    Ah() {
      return this.Dh;
    }
    Th() {
      return null === this.Rh
        ? null
        : { priceRange: this.Rh.Th(), margins: this.Dh || void 0 };
    }
    static Ph(t) {
      return null === t ? null : new ki(yi.Ph(t.priceRange), t.margins);
    }
  }
  class Ci extends si {
    constructor(t, i) {
      super(t), (this.Bh = i);
    }
    Sr() {
      const t = this.gr;
      t.Ct = !1;
      const i = this.Bh.F();
      if (!this.zs.Ct() || !i.lineVisible) return;
      const n = this.Bh.Vh();
      null !== n &&
        ((t.Ct = !0),
        (t.et = n),
        (t.D = i.color),
        (t.rt = i.lineWidth),
        (t.Ft = i.lineStyle),
        (t.br = this.Bh.F().id));
    }
  }
  class Ti extends Q {
    constructor(t, i) {
      super(), (this.Fr = t), (this.Bh = i);
    }
    zi(t, i, n) {
      (t.Ct = !1), (i.Ct = !1);
      const s = this.Bh.F(),
        e = s.axisLabelVisible,
        r = "" !== s.title,
        h = this.Fr;
      if (!e || !h.Ct()) return;
      const l = this.Bh.Vh();
      if (null === l) return;
      r && ((i.Gt = s.title), (i.Ct = !0)),
        (i.Bt = h.Ut().Vt(l / h.Ot().Et())),
        (t.Gt = this.Eh(s.price)),
        (t.Ct = !0);
      const a = y(s.axisLabelColor || s.color);
      n.t = a.t;
      const o = s.axisLabelTextColor || a.i;
      (t.D = o), (i.D = o), (n.yi = l);
    }
    Eh(t) {
      const i = this.Fr.Tt();
      return null === i ? "" : this.Fr.Ot().Fi(t, i.At);
    }
  }
  class Pi {
    constructor(t, i) {
      (this.Fr = t),
        (this.un = i),
        (this.zh = new Ci(t, this)),
        (this.ar = new Ti(t, this)),
        (this.Lh = new ii(this.ar, t, t.Ut()));
    }
    Ih(t) {
      C(this.un, t), this.wt(), this.Fr.Ut().Nh();
    }
    F() {
      return this.un;
    }
    Fh() {
      return this.zh;
    }
    Wh() {
      return this.Lh;
    }
    jh() {
      return this.ar;
    }
    wt() {
      this.zh.wt(), this.ar.wt();
    }
    Vh() {
      const t = this.Fr,
        i = t.Ot();
      if (t.Ut().yt().Ni() || i.Ni()) return null;
      const n = t.Tt();
      return null === n ? null : i.Dt(this.un.price, n.At);
    }
  }
  class Ri extends et {
    constructor(t) {
      super(), (this.Hi = t);
    }
    Ut() {
      return this.Hi;
    }
  }
  const Di = {
    Bar: (t, i, n, s) => {
      var e;
      const r = i.upColor,
        h = i.downColor,
        l = f(t(n, s)),
        a = v(l.At[0]) <= v(l.At[3]);
      return { _e: null !== (e = l.D) && void 0 !== e ? e : a ? r : h };
    },
    Candlestick: (t, i, n, s) => {
      var e, r, h;
      const l = i.upColor,
        a = i.downColor,
        o = i.borderUpColor,
        _ = i.borderDownColor,
        u = i.wickUpColor,
        c = i.wickDownColor,
        d = f(t(n, s)),
        p = v(d.At[0]) <= v(d.At[3]);
      return {
        _e: null !== (e = d.D) && void 0 !== e ? e : p ? l : a,
        Le: null !== (r = d.Bt) && void 0 !== r ? r : p ? o : _,
        ze: null !== (h = d.$h) && void 0 !== h ? h : p ? u : c,
      };
    },
    Custom: (t, i, n, s) => {
      var e;
      return { _e: null !== (e = f(t(n, s)).D) && void 0 !== e ? e : i.color };
    },
    Area: (t, i, n, s) => {
      var e, r, h, l;
      const a = f(t(n, s));
      return {
        _e: null !== (e = a.ot) && void 0 !== e ? e : i.lineColor,
        ot: null !== (r = a.ot) && void 0 !== r ? r : i.lineColor,
        Cs: null !== (h = a.Cs) && void 0 !== h ? h : i.topColor,
        Ts: null !== (l = a.Ts) && void 0 !== l ? l : i.bottomColor,
      };
    },
    Baseline: (t, i, n, s) => {
      var e, r, h, l, a, o;
      const _ = f(t(n, s));
      return {
        _e: _.At[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
        Te: null !== (e = _.Te) && void 0 !== e ? e : i.topLineColor,
        Pe: null !== (r = _.Pe) && void 0 !== r ? r : i.bottomLineColor,
        xe: null !== (h = _.xe) && void 0 !== h ? h : i.topFillColor1,
        Se: null !== (l = _.Se) && void 0 !== l ? l : i.topFillColor2,
        ye: null !== (a = _.ye) && void 0 !== a ? a : i.bottomFillColor1,
        ke: null !== (o = _.ke) && void 0 !== o ? o : i.bottomFillColor2,
      };
    },
    Line: (t, i, n, s) => {
      var e, r;
      const h = f(t(n, s));
      return {
        _e: null !== (e = h.D) && void 0 !== e ? e : i.color,
        ot: null !== (r = h.D) && void 0 !== r ? r : i.color,
      };
    },
    Histogram: (t, i, n, s) => {
      var e;
      return { _e: null !== (e = f(t(n, s)).D) && void 0 !== e ? e : i.color };
    },
  };
  class Oi {
    constructor(t) {
      (this.Hh = (t, i) => (void 0 !== i ? i.At : this.Fr.Vn().Uh(t))),
        (this.Fr = t),
        (this.qh = Di[t.Yh()]);
    }
    js(t, i) {
      return this.qh(this.Hh, this.Fr.F(), t, i);
    }
  }
  var Ai;
  !(function (t) {
    (t[(t.NearestLeft = -1)] = "NearestLeft"),
      (t[(t.None = 0)] = "None"),
      (t[(t.NearestRight = 1)] = "NearestRight");
  })(Ai || (Ai = {}));
  const Bi = 30;
  class Vi {
    constructor() {
      (this.Xh = []), (this.Zh = new Map()), (this.Kh = new Map());
    }
    Gh() {
      return this.Xs() > 0 ? this.Xh[this.Xh.length - 1] : null;
    }
    Jh() {
      return this.Xs() > 0 ? this.Qh(0) : null;
    }
    Bn() {
      return this.Xs() > 0 ? this.Qh(this.Xh.length - 1) : null;
    }
    Xs() {
      return this.Xh.length;
    }
    Ni() {
      return 0 === this.Xs();
    }
    Xr(t) {
      return null !== this.tl(t, 0);
    }
    Uh(t) {
      return this.il(t);
    }
    il(t, i = 0) {
      const n = this.tl(t, i);
      return null === n
        ? null
        : Object.assign(Object.assign({}, this.nl(n)), { ne: this.Qh(n) });
    }
    te() {
      return this.Xh;
    }
    sl(t, i, n) {
      if (this.Ni()) return null;
      let s = null;
      for (const e of n) {
        s = Ei(s, this.el(t, i, e));
      }
      return s;
    }
    tt(t) {
      this.Kh.clear(), this.Zh.clear(), (this.Xh = t);
    }
    Qh(t) {
      return this.Xh[t].ne;
    }
    nl(t) {
      return this.Xh[t];
    }
    tl(t, i) {
      const n = this.rl(t);
      if (null === n && 0 !== i)
        switch (i) {
          case -1:
            return this.hl(t);
          case 1:
            return this.ll(t);
          default:
            throw new TypeError("Unknown search mode");
        }
      return n;
    }
    hl(t) {
      let i = this.al(t);
      return (
        i > 0 && (i -= 1), i !== this.Xh.length && this.Qh(i) < t ? i : null
      );
    }
    ll(t) {
      const i = this.ol(t);
      return i !== this.Xh.length && t < this.Qh(i) ? i : null;
    }
    rl(t) {
      const i = this.al(t);
      return i === this.Xh.length || t < this.Xh[i].ne ? null : i;
    }
    al(t) {
      return Dt(this.Xh, t, (t, i) => t.ne < i);
    }
    ol(t) {
      return Ot(this.Xh, t, (t, i) => i.ne > t);
    }
    _l(t, i, n) {
      let s = null;
      for (let e = t; e < i; e++) {
        const t = this.Xh[e].At[n];
        Number.isNaN(t) ||
          (null === s
            ? (s = { ul: t, cl: t })
            : (t < s.ul && (s.ul = t), t > s.cl && (s.cl = t)));
      }
      return s;
    }
    el(t, i, n) {
      if (this.Ni()) return null;
      let s = null;
      const e = f(this.Jh()),
        r = f(this.Bn()),
        h = Math.max(t, e),
        l = Math.min(i, r),
        a = Math.ceil(h / Bi) * Bi,
        o = Math.max(a, Math.floor(l / Bi) * Bi);
      {
        const t = this.al(h),
          e = this.ol(Math.min(l, a, i));
        s = Ei(s, this._l(t, e, n));
      }
      let _ = this.Zh.get(n);
      void 0 === _ && ((_ = new Map()), this.Zh.set(n, _));
      for (let t = Math.max(a + 1, h); t < o; t += Bi) {
        const i = Math.floor(t / Bi);
        let e = _.get(i);
        if (void 0 === e) {
          const t = this.al(i * Bi),
            s = this.ol((i + 1) * Bi - 1);
          (e = this._l(t, s, n)), _.set(i, e);
        }
        s = Ei(s, e);
      }
      {
        const t = this.al(o),
          i = this.ol(l);
        s = Ei(s, this._l(t, i, n));
      }
      return s;
    }
  }
  function Ei(t, i) {
    if (null === t) return i;
    if (null === i) return t;
    return { ul: Math.min(t.ul, i.ul), cl: Math.max(t.cl, i.cl) };
  }
  class zi {
    constructor(t) {
      this.dl = t;
    }
    X(t, i, n) {
      this.dl.draw(t);
    }
    K(t, i, n) {
      var s, e;
      null === (e = (s = this.dl).drawBackground) ||
        void 0 === e ||
        e.call(s, t);
    }
  }
  class Li {
    constructor(t) {
      (this.Je = null), (this.bn = t);
    }
    Mt() {
      var t;
      const i = this.bn.renderer();
      if (null === i) return null;
      if ((null === (t = this.Je) || void 0 === t ? void 0 : t.fl) === i)
        return this.Je.vl;
      const n = new zi(i);
      return (this.Je = { fl: i, vl: n }), n;
    }
    pl() {
      var t, i, n;
      return null !==
        (n =
          null === (i = (t = this.bn).zOrder) || void 0 === i
            ? void 0
            : i.call(t)) && void 0 !== n
        ? n
        : "normal";
    }
  }
  function Ii(t) {
    var i, n, s, e, r;
    return {
      Gt: t.text(),
      yi: t.coordinate(),
      Si: null === (i = t.fixedCoordinate) || void 0 === i ? void 0 : i.call(t),
      D: t.textColor(),
      t: t.backColor(),
      Ct:
        null ===
          (s = null === (n = t.visible) || void 0 === n ? void 0 : n.call(t)) ||
        void 0 === s ||
        s,
      li:
        null ===
          (r =
            null === (e = t.tickVisible) || void 0 === e
              ? void 0
              : e.call(t)) ||
        void 0 === r ||
        r,
    };
  }
  class Ni {
    constructor(t, i) {
      (this.jt = new nt()), (this.ml = t), (this.bl = i);
    }
    Mt() {
      return (
        this.jt.tt(Object.assign({ $i: this.bl.$i() }, Ii(this.ml))), this.jt
      );
    }
  }
  class Fi extends Q {
    constructor(t, i) {
      super(), (this.ml = t), (this.Li = i);
    }
    zi(t, i, n) {
      const s = Ii(this.ml);
      (n.t = s.t), (t.D = s.D);
      const e = (2 / 12) * this.Li.T();
      (n.wi = e),
        (n.gi = e),
        (n.yi = s.yi),
        (n.Si = s.Si),
        (t.Gt = s.Gt),
        (t.Ct = s.Ct),
        (t.li = s.li);
    }
  }
  class Wi {
    constructor(t, i) {
      (this.wl = null),
        (this.gl = null),
        (this.Ml = null),
        (this.xl = null),
        (this.Sl = null),
        (this.yl = t),
        (this.Fr = i);
    }
    kl() {
      return this.yl;
    }
    Dn() {
      var t, i;
      null === (i = (t = this.yl).updateAllViews) || void 0 === i || i.call(t);
    }
    Tn() {
      var t, i, n, s;
      const e =
        null !==
          (n =
            null === (i = (t = this.yl).paneViews) || void 0 === i
              ? void 0
              : i.call(t)) && void 0 !== n
          ? n
          : [];
      if ((null === (s = this.wl) || void 0 === s ? void 0 : s.fl) === e)
        return this.wl.vl;
      const r = e.map((t) => new Li(t));
      return (this.wl = { fl: e, vl: r }), r;
    }
    Qi() {
      var t, i, n, s;
      const e =
        null !==
          (n =
            null === (i = (t = this.yl).timeAxisViews) || void 0 === i
              ? void 0
              : i.call(t)) && void 0 !== n
          ? n
          : [];
      if ((null === (s = this.gl) || void 0 === s ? void 0 : s.fl) === e)
        return this.gl.vl;
      const r = this.Fr.Ut().yt(),
        h = e.map((t) => new Ni(t, r));
      return (this.gl = { fl: e, vl: h }), h;
    }
    Pn() {
      var t, i, n, s;
      const e =
        null !==
          (n =
            null === (i = (t = this.yl).priceAxisViews) || void 0 === i
              ? void 0
              : i.call(t)) && void 0 !== n
          ? n
          : [];
      if ((null === (s = this.Ml) || void 0 === s ? void 0 : s.fl) === e)
        return this.Ml.vl;
      const r = this.Fr.Ot(),
        h = e.map((t) => new Fi(t, r));
      return (this.Ml = { fl: e, vl: h }), h;
    }
    Cl() {
      var t, i, n, s;
      const e =
        null !==
          (n =
            null === (i = (t = this.yl).priceAxisPaneViews) || void 0 === i
              ? void 0
              : i.call(t)) && void 0 !== n
          ? n
          : [];
      if ((null === (s = this.xl) || void 0 === s ? void 0 : s.fl) === e)
        return this.xl.vl;
      const r = e.map((t) => new Li(t));
      return (this.xl = { fl: e, vl: r }), r;
    }
    Tl() {
      var t, i, n, s;
      const e =
        null !==
          (n =
            null === (i = (t = this.yl).timeAxisPaneViews) || void 0 === i
              ? void 0
              : i.call(t)) && void 0 !== n
          ? n
          : [];
      if ((null === (s = this.Sl) || void 0 === s ? void 0 : s.fl) === e)
        return this.Sl.vl;
      const r = e.map((t) => new Li(t));
      return (this.Sl = { fl: e, vl: r }), r;
    }
    Pl(t, i) {
      var n, s, e;
      return null !==
        (e =
          null === (s = (n = this.yl).autoscaleInfo) || void 0 === s
            ? void 0
            : s.call(n, t, i)) && void 0 !== e
        ? e
        : null;
    }
    mr(t, i) {
      var n, s, e;
      return null !==
        (e =
          null === (s = (n = this.yl).hitTest) || void 0 === s
            ? void 0
            : s.call(n, t, i)) && void 0 !== e
        ? e
        : null;
    }
  }
  function ji(t, i, n, s) {
    t.forEach((t) => {
      i(t).forEach((t) => {
        t.pl() === n && s.push(t);
      });
    });
  }
  function $i(t) {
    return t.Tn();
  }
  function Hi(t) {
    return t.Cl();
  }
  function Ui(t) {
    return t.Tl();
  }
  class qi extends Ri {
    constructor(t, i, n, s, e) {
      super(t),
        (this.Lt = new Vi()),
        (this.zh = new xi(this)),
        (this.Rl = []),
        (this.Dl = new ei(this)),
        (this.Ol = null),
        (this.Al = null),
        (this.Bl = []),
        (this.Vl = []),
        (this.El = null),
        (this.zl = []),
        (this.un = i),
        (this.Ll = n);
      const r = new Si(this);
      (this.rn = [r]),
        (this.Lh = new ii(r, this, t)),
        ("Area" !== n && "Line" !== n && "Baseline" !== n) ||
          (this.Ol = new oi(this)),
        this.Il(),
        this.Nl(e);
    }
    M() {
      null !== this.El && clearTimeout(this.El);
    }
    oh(t) {
      return this.un.priceLineColor || t;
    }
    qr(t) {
      const i = { Yr: !0 },
        n = this.Ot();
      if (this.Ut().yt().Ni() || n.Ni() || this.Lt.Ni()) return i;
      const s = this.Ut().yt().Ys(),
        e = this.Tt();
      if (null === s || null === e) return i;
      let r, h;
      if (t) {
        const t = this.Lt.Gh();
        if (null === t) return i;
        (r = t), (h = t.ne);
      } else {
        const t = this.Lt.il(s.ci(), -1);
        if (null === t) return i;
        if (((r = this.Lt.Uh(t.ne)), null === r)) return i;
        h = t.ne;
      }
      const l = r.At[3],
        a = this.$s().js(h, { At: r }),
        o = n.Dt(l, e.At);
      return {
        Yr: !1,
        ut: l,
        Gt: n.Fi(l, e.At),
        ph: n.Fl(l),
        mh: n.Wl(l, e.At),
        D: a._e,
        yi: o,
        ne: h,
      };
    }
    $s() {
      return null !== this.Al || (this.Al = new Oi(this)), this.Al;
    }
    F() {
      return this.un;
    }
    Ih(t) {
      const i = t.priceScaleId;
      void 0 !== i && i !== this.un.priceScaleId && this.Ut().jl(this, i),
        C(this.un, t),
        void 0 !== t.priceFormat && (this.Il(), this.Ut().$l()),
        this.Ut().Hl(this),
        this.Ut().Ul(),
        this.bn.wt("options");
    }
    tt(t, i) {
      this.Lt.tt(t),
        this.ql(),
        this.bn.wt("data"),
        this.cn.wt("data"),
        null !== this.Ol &&
          (i && i.Yl ? this.Ol.jr() : 0 === t.length && this.Ol.Wr());
      const n = this.Ut().ur(this);
      this.Ut().Xl(n), this.Ut().Hl(this), this.Ut().Ul(), this.Ut().Nh();
    }
    Zl(t) {
      (this.Bl = t), this.ql();
      const i = this.Ut().ur(this);
      this.cn.wt("data"),
        this.Ut().Xl(i),
        this.Ut().Hl(this),
        this.Ut().Ul(),
        this.Ut().Nh();
    }
    Kl() {
      return this.Bl;
    }
    lh() {
      return this.Vl;
    }
    Gl(t) {
      const i = new Pi(this, t);
      return this.Rl.push(i), this.Ut().Hl(this), i;
    }
    Jl(t) {
      const i = this.Rl.indexOf(t);
      -1 !== i && this.Rl.splice(i, 1), this.Ut().Hl(this);
    }
    Yh() {
      return this.Ll;
    }
    Tt() {
      const t = this.Ql();
      return null === t ? null : { At: t.At[3], ta: t._t };
    }
    Ql() {
      const t = this.Ut().yt().Ys();
      if (null === t) return null;
      const i = t.Ds();
      return this.Lt.il(i, 1);
    }
    Vn() {
      return this.Lt;
    }
    ah(t) {
      const i = this.Lt.Uh(t);
      return null === i
        ? null
        : "Bar" === this.Ll || "Candlestick" === this.Ll || "Custom" === this.Ll
        ? { be: i.At[0], we: i.At[1], ge: i.At[2], Me: i.At[3] }
        : i.At[3];
    }
    ia(t) {
      const i = [];
      ji(this.zl, $i, "top", i);
      const n = this.Ol;
      return null !== n && n.Ct()
        ? (null === this.El &&
            n.Hr() &&
            (this.El = setTimeout(() => {
              (this.El = null), this.Ut().na();
            }, 0)),
          n.$r(),
          i.push(n),
          i)
        : i;
    }
    Tn() {
      const t = [];
      this.sa() || t.push(this.Dl), t.push(this.bn, this.zh, this.cn);
      const i = this.Rl.map((t) => t.Fh());
      return t.push(...i), ji(this.zl, $i, "normal", t), t;
    }
    ea() {
      return this.ra($i, "bottom");
    }
    ha(t) {
      return this.ra(Hi, t);
    }
    la(t) {
      return this.ra(Ui, t);
    }
    aa(t, i) {
      return this.zl.map((n) => n.mr(t, i)).filter((t) => null !== t);
    }
    Ji(t) {
      return [this.Lh, ...this.Rl.map((t) => t.Wh())];
    }
    Pn(t, i) {
      if (i !== this.Yi && !this.sa()) return [];
      const n = [...this.rn];
      for (const t of this.Rl) n.push(t.jh());
      return (
        this.zl.forEach((t) => {
          n.push(...t.Pn());
        }),
        n
      );
    }
    Qi() {
      const t = [];
      return (
        this.zl.forEach((i) => {
          t.push(...i.Qi());
        }),
        t
      );
    }
    Pl(t, i) {
      if (void 0 !== this.un.autoscaleInfoProvider) {
        const n = this.un.autoscaleInfoProvider(() => {
          const n = this.oa(t, i);
          return null === n ? null : n.Th();
        });
        return ki.Ph(n);
      }
      return this.oa(t, i);
    }
    _a() {
      return this.un.priceFormat.minMove;
    }
    ua() {
      return this.ca;
    }
    Dn() {
      var t;
      this.bn.wt(), this.cn.wt();
      for (const t of this.rn) t.wt();
      for (const t of this.Rl) t.wt();
      this.zh.wt(),
        this.Dl.wt(),
        null === (t = this.Ol) || void 0 === t || t.wt(),
        this.zl.forEach((t) => t.Dn());
    }
    Ot() {
      return f(super.Ot());
    }
    kt(t) {
      if (
        !(
          ("Line" === this.Ll ||
            "Area" === this.Ll ||
            "Baseline" === this.Ll) &&
          this.un.crosshairMarkerVisible
        )
      )
        return null;
      const i = this.Lt.Uh(t);
      if (null === i) return null;
      return {
        ut: i.At[3],
        lt: this.da(),
        Bt: this.fa(),
        Rt: this.va(),
        Pt: this.pa(t),
      };
    }
    _h() {
      return this.un.title;
    }
    Ct() {
      return this.un.visible;
    }
    ma(t) {
      this.zl.push(new Wi(t, this));
    }
    ba(t) {
      this.zl = this.zl.filter((i) => i.kl() !== t);
    }
    wa() {
      if (this.bn instanceof Yt != !1) return (t) => this.bn.Ne(t);
    }
    ga() {
      if (this.bn instanceof Yt != !1) return (t) => this.bn.Fe(t);
    }
    sa() {
      return !lt(this.Ot().Ma());
    }
    oa(t, i) {
      if (!P(t) || !P(i) || this.Lt.Ni()) return null;
      const n =
          "Line" === this.Ll ||
          "Area" === this.Ll ||
          "Baseline" === this.Ll ||
          "Histogram" === this.Ll
            ? [3]
            : [2, 1],
        s = this.Lt.sl(t, i, n);
      let e = null !== s ? new yi(s.ul, s.cl) : null;
      if ("Histogram" === this.Yh()) {
        const t = this.un.base,
          i = new yi(t, t);
        e = null !== e ? e.Qn(i) : i;
      }
      let r = this.cn.hh();
      return (
        this.zl.forEach((n) => {
          const s = n.Pl(t, i);
          if (null == s ? void 0 : s.priceRange) {
            const t = new yi(s.priceRange.minValue, s.priceRange.maxValue);
            e = null !== e ? e.Qn(t) : t;
          }
          var h, l, a, o;
          (null == s ? void 0 : s.margins) &&
            ((h = r),
            (l = s.margins),
            (r = {
              above: Math.max(
                null !== (a = null == h ? void 0 : h.above) && void 0 !== a
                  ? a
                  : 0,
                l.above
              ),
              below: Math.max(
                null !== (o = null == h ? void 0 : h.below) && void 0 !== o
                  ? o
                  : 0,
                l.below
              ),
            }));
        }),
        new ki(e, r)
      );
    }
    da() {
      switch (this.Ll) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.un.crosshairMarkerRadius;
      }
      return 0;
    }
    fa() {
      switch (this.Ll) {
        case "Line":
        case "Area":
        case "Baseline": {
          const t = this.un.crosshairMarkerBorderColor;
          if (0 !== t.length) return t;
        }
      }
      return null;
    }
    va() {
      switch (this.Ll) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.un.crosshairMarkerBorderWidth;
      }
      return 0;
    }
    pa(t) {
      switch (this.Ll) {
        case "Line":
        case "Area":
        case "Baseline": {
          const t = this.un.crosshairMarkerBackgroundColor;
          if (0 !== t.length) return t;
        }
      }
      return this.$s().js(t)._e;
    }
    Il() {
      switch (this.un.priceFormat.type) {
        case "custom":
          this.ca = { format: this.un.priceFormat.formatter };
          break;
        case "volume":
          this.ca = new dt(this.un.priceFormat.precision);
          break;
        case "percent":
          this.ca = new ct(this.un.priceFormat.precision);
          break;
        default: {
          const t = Math.pow(10, this.un.priceFormat.precision);
          this.ca = new ut(t, this.un.priceFormat.minMove * t);
        }
      }
      null !== this.Yi && this.Yi.xa();
    }
    ql() {
      const t = this.Ut().yt();
      if (!t.Sa() || this.Lt.Ni()) return void (this.Vl = []);
      const i = f(this.Lt.Jh());
      this.Vl = this.Bl.map((n, s) => {
        const e = f(t.ya(n.time, !0)),
          r = e < i ? 1 : -1;
        return {
          time: f(this.Lt.il(e, r)).ne,
          position: n.position,
          shape: n.shape,
          color: n.color,
          id: n.id,
          internalId: s,
          text: n.text,
          size: n.size,
        };
      });
    }
    Nl(t) {
      switch (((this.cn = new Mi(this, this.Ut())), this.Ll)) {
        case "Bar":
          this.bn = new Ft(this, this.Ut());
          break;
        case "Candlestick":
          this.bn = new Ut(this, this.Ut());
          break;
        case "Line":
          this.bn = new Gt(this, this.Ut());
          break;
        case "Custom":
          this.bn = new Yt(this, this.Ut(), d(t));
          break;
        case "Area":
          this.bn = new Lt(this, this.Ut());
          break;
        case "Baseline":
          this.bn = new $t(this, this.Ut());
          break;
        case "Histogram":
          this.bn = new Kt(this, this.Ut());
          break;
        default:
          throw Error("Unknown chart style assigned: " + this.Ll);
      }
    }
    ra(t, i) {
      const n = [];
      return ji(this.zl, t, i, n), n;
    }
  }
  class Yi {
    constructor(t) {
      this.un = t;
    }
    ka(t, i, n) {
      let s = t;
      if (0 === this.un.mode) return s;
      const e = n.fn(),
        r = e.Tt();
      if (null === r) return s;
      const h = e.Dt(t, r),
        l = n
          .Ca()
          .filter((t) => t instanceof qi)
          .reduce((t, s) => {
            if (n.cr(s) || !s.Ct()) return t;
            const e = s.Ot(),
              r = s.Vn();
            if (e.Ni() || !r.Xr(i)) return t;
            const h = r.Uh(i);
            if (null === h) return t;
            const l = v(s.Tt());
            return t.concat([e.Dt(h.At[3], l.At)]);
          }, []);
      if (0 === l.length) return s;
      l.sort((t, i) => Math.abs(t - h) - Math.abs(i - h));
      const a = l[0];
      return (s = e.vn(a, r)), s;
    }
  }
  class Xi extends $ {
    constructor() {
      super(...arguments), (this.Lt = null);
    }
    tt(t) {
      this.Lt = t;
    }
    Z({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (null === this.Lt) return;
      const e = Math.max(1, Math.floor(n));
      (t.lineWidth = e),
        (function (t, i) {
          t.save(), t.lineWidth % 2 && t.translate(0.5, 0.5), i(), t.restore();
        })(t, () => {
          const r = f(this.Lt);
          if (r.Ta) {
            (t.strokeStyle = r.Pa), _(t, r.Ra), t.beginPath();
            for (const s of r.Da) {
              const r = Math.round(s.Oa * n);
              t.moveTo(r, -e), t.lineTo(r, i.height + e);
            }
            t.stroke();
          }
          if (r.Aa) {
            (t.strokeStyle = r.Ba), _(t, r.Va), t.beginPath();
            for (const n of r.Ea) {
              const r = Math.round(n.Oa * s);
              t.moveTo(-e, r), t.lineTo(i.width + e, r);
            }
            t.stroke();
          }
        });
    }
  }
  class Zi {
    constructor(t) {
      (this.jt = new Xi()), (this.vt = !0), (this.tn = t);
    }
    wt() {
      this.vt = !0;
    }
    Mt() {
      if (this.vt) {
        const t = this.tn.Ut().F().grid,
          i = {
            Aa: t.horzLines.visible,
            Ta: t.vertLines.visible,
            Ba: t.horzLines.color,
            Pa: t.vertLines.color,
            Va: t.horzLines.style,
            Ra: t.vertLines.style,
            Ea: this.tn.fn().za(),
            Da: this.tn.Ut().yt().za() || [],
          };
        this.jt.tt(i), (this.vt = !1);
      }
      return this.jt;
    }
  }
  class Ki {
    constructor(t) {
      this.bn = new Zi(t);
    }
    Fh() {
      return this.bn;
    }
  }
  const Gi = { La: 4, Ia: 1e-4 };
  function Ji(t, i) {
    const n = (100 * (t - i)) / i;
    return i < 0 ? -n : n;
  }
  function Qi(t, i) {
    const n = Ji(t.xh(), i),
      s = Ji(t.Sh(), i);
    return new yi(n, s);
  }
  function tn(t, i) {
    const n = (100 * (t - i)) / i + 100;
    return i < 0 ? -n : n;
  }
  function nn(t, i) {
    const n = tn(t.xh(), i),
      s = tn(t.Sh(), i);
    return new yi(n, s);
  }
  function sn(t, i) {
    const n = Math.abs(t);
    if (n < 1e-15) return 0;
    const s = St(n + i.Ia) + i.La;
    return t < 0 ? -s : s;
  }
  function en(t, i) {
    const n = Math.abs(t);
    if (n < 1e-15) return 0;
    const s = Math.pow(10, n - i.La) - i.Ia;
    return t < 0 ? -s : s;
  }
  function rn(t, i) {
    if (null === t) return null;
    const n = sn(t.xh(), i),
      s = sn(t.Sh(), i);
    return new yi(n, s);
  }
  function hn(t, i) {
    if (null === t) return null;
    const n = en(t.xh(), i),
      s = en(t.Sh(), i);
    return new yi(n, s);
  }
  function ln(t) {
    if (null === t) return Gi;
    const i = Math.abs(t.Sh() - t.xh());
    if (i >= 1 || i < 1e-15) return Gi;
    const n = Math.ceil(Math.abs(Math.log10(i))),
      s = Gi.La + n;
    return { La: s, Ia: 1 / Math.pow(10, s) };
  }
  class an {
    constructor(t, i) {
      if (
        ((this.Na = t),
        (this.Fa = i),
        (function (t) {
          if (t < 0) return !1;
          for (let i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
          return !0;
        })(this.Na))
      )
        this.Wa = [2, 2.5, 2];
      else {
        this.Wa = [];
        for (let t = this.Na; 1 !== t; ) {
          if (t % 2 == 0) this.Wa.push(2), (t /= 2);
          else {
            if (t % 5 != 0) throw new Error("unexpected base");
            this.Wa.push(2, 2.5), (t /= 5);
          }
          if (this.Wa.length > 100)
            throw new Error("something wrong with base");
        }
      }
    }
    ja(t, i, n) {
      const s = 0 === this.Na ? 0 : 1 / this.Na;
      let e = Math.pow(10, Math.max(0, Math.ceil(St(t - i)))),
        r = 0,
        h = this.Fa[0];
      for (;;) {
        const t = xt(e, s, 1e-14) && e > s + 1e-14,
          i = xt(e, n * h, 1e-14),
          l = xt(e, 1, 1e-14);
        if (!(t && i && l)) break;
        (e /= h), (h = this.Fa[++r % this.Fa.length]);
      }
      if (
        (e <= s + 1e-14 && (e = s),
        (e = Math.max(1, e)),
        this.Wa.length > 0 &&
          ((l = e), (a = 1), (o = 1e-14), Math.abs(l - a) < o))
      )
        for (r = 0, h = this.Wa[0]; xt(e, n * h, 1e-14) && e > s + 1e-14; )
          (e /= h), (h = this.Wa[++r % this.Wa.length]);
      var l, a, o;
      return e;
    }
  }
  class on {
    constructor(t, i, n, s) {
      (this.$a = []),
        (this.Li = t),
        (this.Na = i),
        (this.Ha = n),
        (this.Ua = s);
    }
    ja(t, i) {
      if (t < i) throw new Error("high < low");
      const n = this.Li.Et(),
        s = ((t - i) * this.qa()) / n,
        e = new an(this.Na, [2, 2.5, 2]),
        r = new an(this.Na, [2, 2, 2.5]),
        h = new an(this.Na, [2.5, 2, 2]),
        l = [];
      return (
        l.push(e.ja(t, i, s), r.ja(t, i, s), h.ja(t, i, s)),
        (function (t) {
          if (t.length < 1) throw Error("array is empty");
          let i = t[0];
          for (let n = 1; n < t.length; ++n) t[n] < i && (i = t[n]);
          return i;
        })(l)
      );
    }
    Ya() {
      const t = this.Li,
        i = t.Tt();
      if (null === i) return void (this.$a = []);
      const n = t.Et(),
        s = this.Ha(n - 1, i),
        e = this.Ha(0, i),
        r = this.Li.F().entireTextOnly ? this.Xa() / 2 : 0,
        h = r,
        l = n - 1 - r,
        a = Math.max(s, e),
        o = Math.min(s, e);
      if (a === o) return void (this.$a = []);
      let _ = this.ja(a, o),
        u = a % _;
      u += u < 0 ? _ : 0;
      const c = a >= o ? 1 : -1;
      let d = null,
        f = 0;
      for (let n = a - u; n > o; n -= _) {
        const s = this.Ua(n, i, !0);
        (null !== d && Math.abs(s - d) < this.qa()) ||
          s < h ||
          s > l ||
          (f < this.$a.length
            ? ((this.$a[f].Oa = s), (this.$a[f].Za = t.Ka(n)))
            : this.$a.push({ Oa: s, Za: t.Ka(n) }),
          f++,
          (d = s),
          t.Ga() && (_ = this.ja(n * c, o)));
      }
      this.$a.length = f;
    }
    za() {
      return this.$a;
    }
    Xa() {
      return this.Li.T();
    }
    qa() {
      return Math.ceil(2.5 * this.Xa());
    }
  }
  function _n(t) {
    return t.slice().sort((t, i) => f(t.Zi()) - f(i.Zi()));
  }
  var un;
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"),
      (t[(t.Logarithmic = 1)] = "Logarithmic"),
      (t[(t.Percentage = 2)] = "Percentage"),
      (t[(t.IndexedTo100 = 3)] = "IndexedTo100");
  })(un || (un = {}));
  const cn = new ct(),
    dn = new ut(100, 1);
  class fn {
    constructor(t, i, n, s) {
      (this.Ja = 0),
        (this.Qa = null),
        (this.Rh = null),
        (this.io = null),
        (this.no = { so: !1, eo: null }),
        (this.ro = 0),
        (this.ho = 0),
        (this.lo = new k()),
        (this.ao = new k()),
        (this.oo = []),
        (this._o = null),
        (this.uo = null),
        (this.co = null),
        (this.do = null),
        (this.ca = dn),
        (this.fo = ln(null)),
        (this.vo = t),
        (this.un = i),
        (this.po = n),
        (this.mo = s),
        (this.bo = new on(this, 100, this.wo.bind(this), this.Mo.bind(this)));
    }
    Ma() {
      return this.vo;
    }
    F() {
      return this.un;
    }
    Ih(t) {
      if (
        (C(this.un, t),
        this.xa(),
        void 0 !== t.mode && this.xo({ yr: t.mode }),
        void 0 !== t.scaleMargins)
      ) {
        const i = d(t.scaleMargins.top),
          n = d(t.scaleMargins.bottom);
        if (i < 0 || i > 1)
          throw new Error(
            `Invalid top margin - expect value between 0 and 1, given=${i}`
          );
        if (n < 0 || n > 1 || i + n > 1)
          throw new Error(
            `Invalid bottom margin - expect value between 0 and 1, given=${n}`
          );
        if (i + n > 1)
          throw new Error(
            `Invalid margins - sum of margins must be less than 1, given=${
              i + n
            }`
          );
        this.So(), (this.uo = null);
      }
    }
    yo() {
      return this.un.autoScale;
    }
    Ga() {
      return 1 === this.un.mode;
    }
    fh() {
      return 2 === this.un.mode;
    }
    ko() {
      return 3 === this.un.mode;
    }
    yr() {
      return {
        Fn: this.un.autoScale,
        Co: this.un.invertScale,
        yr: this.un.mode,
      };
    }
    xo(t) {
      const i = this.yr();
      let n = null;
      void 0 !== t.Fn && (this.un.autoScale = t.Fn),
        void 0 !== t.yr &&
          ((this.un.mode = t.yr),
          (2 !== t.yr && 3 !== t.yr) || (this.un.autoScale = !0),
          (this.no.so = !1)),
        1 === i.yr &&
          t.yr !== i.yr &&
          (!(function (t, i) {
            if (null === t) return !1;
            const n = en(t.xh(), i),
              s = en(t.Sh(), i);
            return isFinite(n) && isFinite(s);
          })(this.Rh, this.fo)
            ? (this.un.autoScale = !0)
            : ((n = hn(this.Rh, this.fo)), null !== n && this.To(n))),
        1 === t.yr &&
          t.yr !== i.yr &&
          ((n = rn(this.Rh, this.fo)), null !== n && this.To(n));
      const s = i.yr !== this.un.mode;
      s && (2 === i.yr || this.fh()) && this.xa(),
        s && (3 === i.yr || this.ko()) && this.xa(),
        void 0 !== t.Co &&
          i.Co !== t.Co &&
          ((this.un.invertScale = t.Co), this.Po()),
        this.ao.m(i, this.yr());
    }
    Ro() {
      return this.ao;
    }
    T() {
      return this.po.fontSize;
    }
    Et() {
      return this.Ja;
    }
    Do(t) {
      this.Ja !== t && ((this.Ja = t), this.So(), (this.uo = null));
    }
    Oo() {
      if (this.Qa) return this.Qa;
      const t = this.Et() - this.Ao() - this.Bo();
      return (this.Qa = t), t;
    }
    Oh() {
      return this.Vo(), this.Rh;
    }
    To(t, i) {
      const n = this.Rh;
      (i || (null === n && null !== t) || (null !== n && !n.gh(t))) &&
        ((this.uo = null), (this.Rh = t));
    }
    Ni() {
      return this.Vo(), 0 === this.Ja || !this.Rh || this.Rh.Ni();
    }
    Eo(t) {
      return this.Co() ? t : this.Et() - 1 - t;
    }
    Dt(t, i) {
      return (
        this.fh() ? (t = Ji(t, i)) : this.ko() && (t = tn(t, i)), this.Mo(t, i)
      );
    }
    Js(t, i, n) {
      this.Vo();
      const s = this.Bo(),
        e = f(this.Oh()),
        r = e.xh(),
        h = e.Sh(),
        l = this.Oo() - 1,
        a = this.Co(),
        o = l / (h - r),
        _ = void 0 === n ? 0 : n.from,
        u = void 0 === n ? t.length : n.to,
        c = this.zo();
      for (let n = _; n < u; n++) {
        const e = t[n],
          h = e.ut;
        if (isNaN(h)) continue;
        let l = h;
        null !== c && (l = c(e.ut, i));
        const _ = s + o * (l - r),
          u = a ? _ : this.Ja - 1 - _;
        e.et = u;
      }
    }
    pe(t, i, n) {
      this.Vo();
      const s = this.Bo(),
        e = f(this.Oh()),
        r = e.xh(),
        h = e.Sh(),
        l = this.Oo() - 1,
        a = this.Co(),
        o = l / (h - r),
        _ = void 0 === n ? 0 : n.from,
        u = void 0 === n ? t.length : n.to,
        c = this.zo();
      for (let n = _; n < u; n++) {
        const e = t[n];
        let h = e.be,
          l = e.we,
          _ = e.ge,
          u = e.Me;
        null !== c &&
          ((h = c(e.be, i)),
          (l = c(e.we, i)),
          (_ = c(e.ge, i)),
          (u = c(e.Me, i)));
        let d = s + o * (h - r),
          f = a ? d : this.Ja - 1 - d;
        (e.fe = f),
          (d = s + o * (l - r)),
          (f = a ? d : this.Ja - 1 - d),
          (e.ue = f),
          (d = s + o * (_ - r)),
          (f = a ? d : this.Ja - 1 - d),
          (e.ce = f),
          (d = s + o * (u - r)),
          (f = a ? d : this.Ja - 1 - d),
          (e.ve = f);
      }
    }
    vn(t, i) {
      const n = this.wo(t, i);
      return this.Lo(n, i);
    }
    Lo(t, i) {
      let n = t;
      return (
        this.fh()
          ? (n = (function (t, i) {
              return i < 0 && (t = -t), (t / 100) * i + i;
            })(n, i))
          : this.ko() &&
            (n = (function (t, i) {
              return (t -= 100), i < 0 && (t = -t), (t / 100) * i + i;
            })(n, i)),
        n
      );
    }
    Ca() {
      return this.oo;
    }
    Io() {
      if (this._o) return this._o;
      let t = [];
      for (let i = 0; i < this.oo.length; i++) {
        const n = this.oo[i];
        null === n.Zi() && n.Ki(i + 1), t.push(n);
      }
      return (t = _n(t)), (this._o = t), this._o;
    }
    No(t) {
      -1 === this.oo.indexOf(t) && (this.oo.push(t), this.xa(), this.Fo());
    }
    Wo(t) {
      const i = this.oo.indexOf(t);
      if (-1 === i) throw new Error("source is not attached to scale");
      this.oo.splice(i, 1),
        0 === this.oo.length && (this.xo({ Fn: !0 }), this.To(null)),
        this.xa(),
        this.Fo();
    }
    Tt() {
      let t = null;
      for (const i of this.oo) {
        const n = i.Tt();
        null !== n && (null === t || n.ta < t.ta) && (t = n);
      }
      return null === t ? null : t.At;
    }
    Co() {
      return this.un.invertScale;
    }
    za() {
      const t = null === this.Tt();
      if (null !== this.uo && (t || this.uo.jo === t)) return this.uo.za;
      this.bo.Ya();
      const i = this.bo.za();
      return (this.uo = { za: i, jo: t }), this.lo.m(), i;
    }
    $o() {
      return this.lo;
    }
    Ho(t) {
      this.fh() ||
        this.ko() ||
        (null === this.co &&
          null === this.io &&
          (this.Ni() ||
            ((this.co = this.Ja - t), (this.io = f(this.Oh()).Mh()))));
    }
    Uo(t) {
      if (this.fh() || this.ko()) return;
      if (null === this.co) return;
      this.xo({ Fn: !1 }), (t = this.Ja - t) < 0 && (t = 0);
      let i = (this.co + 0.2 * (this.Ja - 1)) / (t + 0.2 * (this.Ja - 1));
      const n = f(this.io).Mh();
      (i = Math.max(i, 0.1)), n.kh(i), this.To(n);
    }
    qo() {
      this.fh() || this.ko() || ((this.co = null), (this.io = null));
    }
    Yo(t) {
      this.yo() ||
        (null === this.do &&
          null === this.io &&
          (this.Ni() || ((this.do = t), (this.io = f(this.Oh()).Mh()))));
    }
    Xo(t) {
      if (this.yo()) return;
      if (null === this.do) return;
      const i = f(this.Oh()).yh() / (this.Oo() - 1);
      let n = t - this.do;
      this.Co() && (n *= -1);
      const s = n * i,
        e = f(this.io).Mh();
      e.Ch(s), this.To(e, !0), (this.uo = null);
    }
    Zo() {
      this.yo() || (null !== this.do && ((this.do = null), (this.io = null)));
    }
    ua() {
      return this.ca || this.xa(), this.ca;
    }
    Fi(t, i) {
      switch (this.un.mode) {
        case 2:
          return this.Ko(Ji(t, i));
        case 3:
          return this.ua().format(tn(t, i));
        default:
          return this.Eh(t);
      }
    }
    Ka(t) {
      switch (this.un.mode) {
        case 2:
          return this.Ko(t);
        case 3:
          return this.ua().format(t);
        default:
          return this.Eh(t);
      }
    }
    Fl(t) {
      return this.Eh(t, f(this.Go()).ua());
    }
    Wl(t, i) {
      return (t = Ji(t, i)), this.Ko(t, cn);
    }
    Jo() {
      return this.oo;
    }
    Qo(t) {
      this.no = { eo: t, so: !1 };
    }
    Dn() {
      this.oo.forEach((t) => t.Dn());
    }
    xa() {
      this.uo = null;
      const t = this.Go();
      let i = 100;
      null !== t && (i = Math.round(1 / t._a())),
        (this.ca = dn),
        this.fh()
          ? ((this.ca = cn), (i = 100))
          : this.ko()
          ? ((this.ca = new ut(100, 1)), (i = 100))
          : null !== t && (this.ca = t.ua()),
        (this.bo = new on(this, i, this.wo.bind(this), this.Mo.bind(this))),
        this.bo.Ya();
    }
    Fo() {
      this._o = null;
    }
    Go() {
      return this.oo[0] || null;
    }
    Ao() {
      return this.Co()
        ? this.un.scaleMargins.bottom * this.Et() + this.ho
        : this.un.scaleMargins.top * this.Et() + this.ro;
    }
    Bo() {
      return this.Co()
        ? this.un.scaleMargins.top * this.Et() + this.ro
        : this.un.scaleMargins.bottom * this.Et() + this.ho;
    }
    Vo() {
      this.no.so || ((this.no.so = !0), this.t_());
    }
    So() {
      this.Qa = null;
    }
    Mo(t, i) {
      if ((this.Vo(), this.Ni())) return 0;
      t = this.Ga() && t ? sn(t, this.fo) : t;
      const n = f(this.Oh()),
        s = this.Bo() + ((this.Oo() - 1) * (t - n.xh())) / n.yh();
      return this.Eo(s);
    }
    wo(t, i) {
      if ((this.Vo(), this.Ni())) return 0;
      const n = this.Eo(t),
        s = f(this.Oh()),
        e = s.xh() + s.yh() * ((n - this.Bo()) / (this.Oo() - 1));
      return this.Ga() ? en(e, this.fo) : e;
    }
    Po() {
      (this.uo = null), this.bo.Ya();
    }
    t_() {
      const t = this.no.eo;
      if (null === t) return;
      let i = null;
      const n = this.Jo();
      let s = 0,
        e = 0;
      for (const r of n) {
        if (!r.Ct()) continue;
        const n = r.Tt();
        if (null === n) continue;
        const h = r.Pl(t.Ds(), t.ci());
        let l = h && h.Oh();
        if (null !== l) {
          switch (this.un.mode) {
            case 1:
              l = rn(l, this.fo);
              break;
            case 2:
              l = Qi(l, n.At);
              break;
            case 3:
              l = nn(l, n.At);
          }
          if (((i = null === i ? l : i.Qn(f(l))), null !== h)) {
            const t = h.Ah();
            null !== t &&
              ((s = Math.max(s, t.above)), (e = Math.max(s, t.below)));
          }
        }
      }
      if (
        ((s === this.ro && e === this.ho) ||
          ((this.ro = s), (this.ho = e), (this.uo = null), this.So()),
        null !== i)
      ) {
        if (i.xh() === i.Sh()) {
          const t = this.Go(),
            n = 5 * (null === t || this.fh() || this.ko() ? 1 : t._a());
          this.Ga() && (i = hn(i, this.fo)),
            (i = new yi(i.xh() - n, i.Sh() + n)),
            this.Ga() && (i = rn(i, this.fo));
        }
        if (this.Ga()) {
          const t = hn(i, this.fo),
            n = ln(t);
          if (((r = n), (h = this.fo), r.La !== h.La || r.Ia !== h.Ia)) {
            const s = null !== this.io ? hn(this.io, this.fo) : null;
            (this.fo = n), (i = rn(t, n)), null !== s && (this.io = rn(s, n));
          }
        }
        this.To(i);
      } else
        null === this.Rh && (this.To(new yi(-0.5, 0.5)), (this.fo = ln(null)));
      var r, h;
      this.no.so = !0;
    }
    zo() {
      return this.fh()
        ? Ji
        : this.ko()
        ? tn
        : this.Ga()
        ? (t) => sn(t, this.fo)
        : null;
    }
    i_(t, i, n) {
      return void 0 === i
        ? (void 0 === n && (n = this.ua()), n.format(t))
        : i(t);
    }
    Eh(t, i) {
      return this.i_(t, this.mo.priceFormatter, i);
    }
    Ko(t, i) {
      return this.i_(t, this.mo.percentageFormatter, i);
    }
  }
  class vn {
    constructor(t, i) {
      (this.oo = []),
        (this.n_ = new Map()),
        (this.Ja = 0),
        (this.s_ = 0),
        (this.e_ = 1e3),
        (this._o = null),
        (this.r_ = new k()),
        (this.bl = t),
        (this.Hi = i),
        (this.h_ = new Ki(this));
      const n = i.F();
      (this.l_ = this.a_("left", n.leftPriceScale)),
        (this.o_ = this.a_("right", n.rightPriceScale)),
        this.l_.Ro().l(this.__.bind(this, this.l_), this),
        this.o_.Ro().l(this.__.bind(this, this.o_), this),
        this.u_(n);
    }
    u_(t) {
      if (
        (t.leftPriceScale && this.l_.Ih(t.leftPriceScale),
        t.rightPriceScale && this.o_.Ih(t.rightPriceScale),
        t.localization && (this.l_.xa(), this.o_.xa()),
        t.overlayPriceScales)
      ) {
        const i = Array.from(this.n_.values());
        for (const n of i) {
          const i = f(n[0].Ot());
          i.Ih(t.overlayPriceScales), t.localization && i.xa();
        }
      }
    }
    c_(t) {
      switch (t) {
        case "left":
          return this.l_;
        case "right":
          return this.o_;
      }
      return this.n_.has(t) ? d(this.n_.get(t))[0].Ot() : null;
    }
    M() {
      this.Ut().d_().p(this),
        this.l_.Ro().p(this),
        this.o_.Ro().p(this),
        this.oo.forEach((t) => {
          t.M && t.M();
        }),
        this.r_.m();
    }
    f_() {
      return this.e_;
    }
    v_(t) {
      this.e_ = t;
    }
    Ut() {
      return this.Hi;
    }
    $i() {
      return this.s_;
    }
    Et() {
      return this.Ja;
    }
    p_(t) {
      (this.s_ = t), this.m_();
    }
    Do(t) {
      (this.Ja = t),
        this.l_.Do(t),
        this.o_.Do(t),
        this.oo.forEach((i) => {
          if (this.cr(i)) {
            const n = i.Ot();
            null !== n && n.Do(t);
          }
        }),
        this.m_();
    }
    Ca() {
      return this.oo;
    }
    cr(t) {
      const i = t.Ot();
      return null === i || (this.l_ !== i && this.o_ !== i);
    }
    No(t, i, n) {
      const s = void 0 !== n ? n : this.w_().b_ + 1;
      this.g_(t, i, s);
    }
    Wo(t) {
      const i = this.oo.indexOf(t);
      c(-1 !== i, "removeDataSource: invalid data source"),
        this.oo.splice(i, 1);
      const n = f(t.Ot()).Ma();
      if (this.n_.has(n)) {
        const i = d(this.n_.get(n)),
          s = i.indexOf(t);
        -1 !== s && (i.splice(s, 1), 0 === i.length && this.n_.delete(n));
      }
      const s = t.Ot();
      s && s.Ca().indexOf(t) >= 0 && s.Wo(t),
        null !== s && (s.Fo(), this.M_(s)),
        (this._o = null);
    }
    vr(t) {
      return t === this.l_ ? "left" : t === this.o_ ? "right" : "overlay";
    }
    x_() {
      return this.l_;
    }
    S_() {
      return this.o_;
    }
    y_(t, i) {
      t.Ho(i);
    }
    k_(t, i) {
      t.Uo(i), this.m_();
    }
    C_(t) {
      t.qo();
    }
    T_(t, i) {
      t.Yo(i);
    }
    P_(t, i) {
      t.Xo(i), this.m_();
    }
    R_(t) {
      t.Zo();
    }
    m_() {
      this.oo.forEach((t) => {
        t.Dn();
      });
    }
    fn() {
      let t = null;
      return (
        this.Hi.F().rightPriceScale.visible && 0 !== this.o_.Ca().length
          ? (t = this.o_)
          : this.Hi.F().leftPriceScale.visible && 0 !== this.l_.Ca().length
          ? (t = this.l_)
          : 0 !== this.oo.length && (t = this.oo[0].Ot()),
        null === t && (t = this.o_),
        t
      );
    }
    dr() {
      let t = null;
      return (
        this.Hi.F().rightPriceScale.visible
          ? (t = this.o_)
          : this.Hi.F().leftPriceScale.visible && (t = this.l_),
        t
      );
    }
    M_(t) {
      null !== t && t.yo() && this.D_(t);
    }
    O_(t) {
      const i = this.bl.Ys();
      t.xo({ Fn: !0 }), null !== i && t.Qo(i), this.m_();
    }
    A_() {
      this.D_(this.l_), this.D_(this.o_);
    }
    B_() {
      this.M_(this.l_),
        this.M_(this.o_),
        this.oo.forEach((t) => {
          this.cr(t) && this.M_(t.Ot());
        }),
        this.m_(),
        this.Hi.Nh();
    }
    Io() {
      return null === this._o && (this._o = _n(this.oo)), this._o;
    }
    V_() {
      return this.r_;
    }
    E_() {
      return this.h_;
    }
    D_(t) {
      const i = t.Jo();
      if (i && i.length > 0 && !this.bl.Ni()) {
        const i = this.bl.Ys();
        null !== i && t.Qo(i);
      }
      t.Dn();
    }
    w_() {
      const t = this.Io();
      if (0 === t.length) return { z_: 0, b_: 0 };
      let i = 0,
        n = 0;
      for (let s = 0; s < t.length; s++) {
        const e = t[s].Zi();
        null !== e && (e < i && (i = e), e > n && (n = e));
      }
      return { z_: i, b_: n };
    }
    g_(t, i, n) {
      let s = this.c_(i);
      if (
        (null === s && (s = this.a_(i, this.Hi.F().overlayPriceScales)),
        this.oo.push(t),
        !lt(i))
      ) {
        const n = this.n_.get(i) || [];
        n.push(t), this.n_.set(i, n);
      }
      s.No(t), t.Gi(s), t.Ki(n), this.M_(s), (this._o = null);
    }
    __(t, i, n) {
      i.yr !== n.yr && this.D_(t);
    }
    a_(t, i) {
      const n = Object.assign({ visible: !0, autoScale: !0 }, O(i)),
        s = new fn(t, n, this.Hi.F().layout, this.Hi.F().localization);
      return s.Do(this.Et()), s;
    }
  }
  const pn = (t) => t.getUTCFullYear();
  function mn(t, i, n) {
    return i
      .replace(/yyyy/g, ((t) => _t(pn(t), 4))(t))
      .replace(/yy/g, ((t) => _t(pn(t) % 100, 2))(t))
      .replace(
        /MMMM/g,
        ((t, i) =>
          new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
            month: "long",
          }))(t, n)
      )
      .replace(
        /MMM/g,
        ((t, i) =>
          new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
            month: "short",
          }))(t, n)
      )
      .replace(/MM/g, ((t) => _t(((t) => t.getUTCMonth() + 1)(t), 2))(t))
      .replace(/dd/g, ((t) => _t(((t) => t.getUTCDate())(t), 2))(t));
  }
  class bn {
    constructor(t = "yyyy-MM-dd", i = "default") {
      (this.L_ = t), (this.I_ = i);
    }
    N_(t) {
      return mn(t, this.L_, this.I_);
    }
  }
  class wn {
    constructor(t) {
      this.F_ = t || "%h:%m:%s";
    }
    N_(t) {
      return this.F_.replace("%h", _t(t.getUTCHours(), 2))
        .replace("%m", _t(t.getUTCMinutes(), 2))
        .replace("%s", _t(t.getUTCSeconds(), 2));
    }
  }
  const gn = { W_: "yyyy-MM-dd", j_: "%h:%m:%s", H_: " ", U_: "default" };
  class Mn {
    constructor(t = {}) {
      const i = Object.assign(Object.assign({}, gn), t);
      (this.q_ = new bn(i.W_, i.U_)),
        (this.Y_ = new wn(i.j_)),
        (this.X_ = i.H_);
    }
    N_(t) {
      return `${this.q_.N_(t)}${this.X_}${this.Y_.N_(t)}`;
    }
  }
  class xn {
    constructor(t, i = 50) {
      (this.Xe = 0),
        (this.Ze = 1),
        (this.Ke = 1),
        (this.Je = new Map()),
        (this.Ge = new Map()),
        (this.Z_ = t),
        (this.Qe = i);
    }
    N_(t) {
      const i = t._t,
        n =
          void 0 === i.K_
            ? new Date(1e3 * i.G_).getTime()
            : new Date(Date.UTC(i.K_.year, i.K_.month - 1, i.K_.day)).getTime(),
        s = this.Je.get(n);
      if (void 0 !== s) return s.J_;
      if (this.Xe === this.Qe) {
        const t = this.Ge.get(this.Ke);
        this.Ge.delete(this.Ke), this.Je.delete(d(t)), this.Ke++, this.Xe--;
      }
      const e = this.Z_(t);
      return (
        this.Je.set(n, { J_: e, sr: this.Ze }),
        this.Ge.set(this.Ze, n),
        this.Xe++,
        this.Ze++,
        e
      );
    }
  }
  class Sn {
    constructor(t, i) {
      c(t <= i, "right should be >= left"), (this.Q_ = t), (this.tu = i);
    }
    Ds() {
      return this.Q_;
    }
    ci() {
      return this.tu;
    }
    iu() {
      return this.tu - this.Q_ + 1;
    }
    Xr(t) {
      return this.Q_ <= t && t <= this.tu;
    }
    gh(t) {
      return this.Q_ === t.Ds() && this.tu === t.ci();
    }
  }
  function yn(t, i) {
    return null === t || null === i ? t === i : t.gh(i);
  }
  class kn {
    constructor() {
      (this.nu = new Map()), (this.Je = null);
    }
    su(t, i) {
      this.eu(i), (this.Je = null);
      for (let n = i; n < t.length; ++n) {
        const i = t[n];
        let s = this.nu.get(i.ru);
        void 0 === s && ((s = []), this.nu.set(i.ru, s)),
          s.push({ ne: n, _t: i._t, hu: i.ru, lu: i.lu });
      }
    }
    au(t, i) {
      const n = Math.ceil(i / t);
      return (
        (null !== this.Je && this.Je.ou === n) ||
          (this.Je = { za: this._u(n), ou: n }),
        this.Je.za
      );
    }
    eu(t) {
      if (0 === t) return void this.nu.clear();
      const i = [];
      this.nu.forEach((n, s) => {
        t <= n[0].ne
          ? i.push(s)
          : n.splice(
              Dt(n, t, (i) => i.ne < t),
              1 / 0
            );
      });
      for (const t of i) this.nu.delete(t);
    }
    _u(t) {
      let i = [];
      for (const n of Array.from(this.nu.keys()).sort((t, i) => i - t)) {
        if (!this.nu.get(n)) continue;
        const s = i;
        i = [];
        const e = s.length;
        let r = 0;
        const h = d(this.nu.get(n)),
          l = h.length;
        let a = 1 / 0,
          o = -1 / 0;
        for (let n = 0; n < l; n++) {
          const l = h[n],
            _ = l.ne;
          for (; r < e; ) {
            const t = s[r],
              n = t.ne;
            if (!(n < _)) {
              a = n;
              break;
            }
            r++, i.push(t), (o = n), (a = 1 / 0);
          }
          a - _ >= t && _ - o >= t && (i.push(l), (o = _));
        }
        for (; r < e; r++) i.push(s[r]);
      }
      return i;
    }
  }
  class Cn {
    constructor(t) {
      this.uu = t;
    }
    cu() {
      return null === this.uu
        ? null
        : new Sn(Math.floor(this.uu.Ds()), Math.ceil(this.uu.ci()));
    }
    du() {
      return this.uu;
    }
    static fu() {
      return new Cn(null);
    }
  }
  var Tn, Pn, Rn, Dn, On;
  !(function (t) {
    (t[(t.Year = 0)] = "Year"),
      (t[(t.Month = 1)] = "Month"),
      (t[(t.DayOfMonth = 2)] = "DayOfMonth"),
      (t[(t.Time = 3)] = "Time"),
      (t[(t.TimeWithSeconds = 4)] = "TimeWithSeconds");
  })(Tn || (Tn = {}));
  class An {
    constructor(t, i, n) {
      (this.s_ = 0),
        (this.vu = null),
        (this.pu = []),
        (this.do = null),
        (this.co = null),
        (this.mu = new kn()),
        (this.bu = new Map()),
        (this.wu = Cn.fu()),
        (this.gu = !0),
        (this.Mu = new k()),
        (this.xu = new k()),
        (this.Su = new k()),
        (this.yu = null),
        (this.ku = null),
        (this.Cu = []),
        (this.un = i),
        (this.mo = n),
        (this.Tu = i.rightOffset),
        (this.Pu = i.barSpacing),
        (this.Hi = t),
        this.Ru();
    }
    F() {
      return this.un;
    }
    Du(t) {
      C(this.mo, t), this.Ou(), this.Ru();
    }
    Ih(t, i) {
      var n;
      C(this.un, t),
        this.un.fixLeftEdge && this.Au(),
        this.un.fixRightEdge && this.Bu(),
        void 0 !== t.barSpacing && this.Hi.Kn(t.barSpacing),
        void 0 !== t.rightOffset && this.Hi.Gn(t.rightOffset),
        void 0 !== t.minBarSpacing &&
          this.Hi.Kn(null !== (n = t.barSpacing) && void 0 !== n ? n : this.Pu),
        this.Ou(),
        this.Ru(),
        this.Su.m();
    }
    pn(t) {
      var i, n;
      return null !==
        (n = null === (i = this.pu[t]) || void 0 === i ? void 0 : i._t) &&
        void 0 !== n
        ? n
        : null;
    }
    Ui(t) {
      var i;
      return null !== (i = this.pu[t]) && void 0 !== i ? i : null;
    }
    ya(t, i) {
      if (this.pu.length < 1) return null;
      if (t.G_ > this.pu[this.pu.length - 1]._t.G_)
        return i ? this.pu.length - 1 : null;
      const n = Dt(this.pu, t.G_, (t, i) => t._t.G_ < i);
      return t.G_ < this.pu[n]._t.G_ ? (i ? n : null) : n;
    }
    Ni() {
      return 0 === this.s_ || 0 === this.pu.length || null === this.vu;
    }
    Sa() {
      return this.pu.length > 0;
    }
    Ys() {
      return this.Vu(), this.wu.cu();
    }
    Eu() {
      return this.Vu(), this.wu.du();
    }
    zu() {
      const t = this.Ys();
      if (null === t) return null;
      const i = { from: t.Ds(), to: t.ci() };
      return this.Lu(i);
    }
    Lu(t) {
      const i = Math.round(t.from),
        n = Math.round(t.to),
        s = f(this.Iu()),
        e = f(this.Nu());
      return {
        from: f(this.pn(Math.max(s, i))),
        to: f(this.pn(Math.min(e, n))),
      };
    }
    Fu(t) {
      return { from: f(this.ya(t.from, !0)), to: f(this.ya(t.to, !0)) };
    }
    $i() {
      return this.s_;
    }
    p_(t) {
      if (!isFinite(t) || t <= 0) return;
      if (this.s_ === t) return;
      const i = this.Eu(),
        n = this.s_;
      if (
        ((this.s_ = t),
        (this.gu = !0),
        this.un.lockVisibleTimeRangeOnResize && 0 !== n)
      ) {
        const i = (this.Pu * t) / n;
        this.Pu = i;
      }
      if (this.un.fixLeftEdge && null !== i && i.Ds() <= 0) {
        const i = n - t;
        (this.Tu -= Math.round(i / this.Pu) + 1), (this.gu = !0);
      }
      this.Wu(), this.ju();
    }
    zt(t) {
      if (this.Ni() || !P(t)) return 0;
      const i = this.$u() + this.Tu - t;
      return this.s_ - (i + 0.5) * this.Pu - 1;
    }
    Gs(t, i) {
      const n = this.$u(),
        s = void 0 === i ? 0 : i.from,
        e = void 0 === i ? t.length : i.to;
      for (let i = s; i < e; i++) {
        const s = t[i]._t,
          e = n + this.Tu - s,
          r = this.s_ - (e + 0.5) * this.Pu - 1;
        t[i].st = r;
      }
    }
    Hu(t) {
      return Math.ceil(this.Uu(t));
    }
    Gn(t) {
      (this.gu = !0), (this.Tu = t), this.ju(), this.Hi.qu(), this.Hi.Nh();
    }
    re() {
      return this.Pu;
    }
    Kn(t) {
      this.Yu(t), this.ju(), this.Hi.qu(), this.Hi.Nh();
    }
    Xu() {
      return this.Tu;
    }
    za() {
      if (this.Ni()) return null;
      if (null !== this.ku) return this.ku;
      const t = this.Pu,
        i = 5 * (this.Hi.F().layout.fontSize + 4),
        n = Math.round(i / t),
        s = f(this.Ys()),
        e = Math.max(s.Ds(), s.Ds() - n),
        r = Math.max(s.ci(), s.ci() - n),
        h = this.mu.au(t, i),
        l = this.Iu() + n,
        a = this.Nu() - n,
        o = this.Zu(),
        _ = this.un.fixLeftEdge || o,
        u = this.un.fixRightEdge || o;
      let c = 0;
      for (const t of h) {
        if (!(e <= t.ne && t.ne <= r)) continue;
        let n;
        c < this.Cu.length
          ? ((n = this.Cu[c]),
            (n.Oa = this.zt(t.ne)),
            (n.Za = this.Ku(t)),
            (n.hu = t.hu))
          : ((n = { Gu: !1, Oa: this.zt(t.ne), Za: this.Ku(t), hu: t.hu }),
            this.Cu.push(n)),
          this.Pu > i / 2 && !o
            ? (n.Gu = !1)
            : (n.Gu = (_ && t.ne <= l) || (u && t.ne >= a)),
          c++;
      }
      return (this.Cu.length = c), (this.ku = this.Cu), this.Cu;
    }
    Ju() {
      (this.gu = !0), this.Kn(this.un.barSpacing), this.Gn(this.un.rightOffset);
    }
    Qu(t) {
      (this.gu = !0), (this.vu = t), this.ju(), this.Au();
    }
    tc(t, i) {
      const n = this.Uu(t),
        s = this.re(),
        e = s + i * (s / 10);
      this.Kn(e),
        this.un.rightBarStaysOnScroll || this.Gn(this.Xu() + (n - this.Uu(t)));
    }
    Ho(t) {
      this.do && this.Zo(),
        null === this.co &&
          null === this.yu &&
          (this.Ni() || ((this.co = t), this.ic()));
    }
    Uo(t) {
      if (null === this.yu) return;
      const i = Mt(this.s_ - t, 0, this.s_),
        n = Mt(this.s_ - f(this.co), 0, this.s_);
      0 !== i && 0 !== n && this.Kn((this.yu.re * i) / n);
    }
    qo() {
      null !== this.co && ((this.co = null), this.nc());
    }
    Yo(t) {
      null === this.do &&
        null === this.yu &&
        (this.Ni() || ((this.do = t), this.ic()));
    }
    Xo(t) {
      if (null === this.do) return;
      const i = (this.do - t) / this.re();
      (this.Tu = f(this.yu).Xu + i), (this.gu = !0), this.ju();
    }
    Zo() {
      null !== this.do && ((this.do = null), this.nc());
    }
    sc() {
      this.ec(this.un.rightOffset);
    }
    ec(t, i = 400) {
      if (!isFinite(t))
        throw new RangeError("offset is required and must be finite number");
      if (!isFinite(i) || i <= 0)
        throw new RangeError(
          "animationDuration (optional) must be finite positive number"
        );
      const n = this.Tu,
        s = performance.now();
      this.Hi.Yn({
        rc: (t) => (t - s) / i >= 1,
        hc: (e) => {
          const r = (e - s) / i;
          return r >= 1 ? t : n + (t - n) * r;
        },
      });
    }
    wt(t, i) {
      (this.gu = !0), (this.pu = t), this.mu.su(t, i), this.ju();
    }
    lc() {
      return this.Mu;
    }
    ac() {
      return this.xu;
    }
    oc() {
      return this.Su;
    }
    $u() {
      return this.vu || 0;
    }
    _c(t) {
      const i = t.iu();
      this.Yu(this.s_ / i),
        (this.Tu = t.ci() - this.$u()),
        this.ju(),
        (this.gu = !0),
        this.Hi.qu(),
        this.Hi.Nh();
    }
    uc() {
      const t = this.Iu(),
        i = this.Nu();
      null !== t && null !== i && this._c(new Sn(t, i + this.un.rightOffset));
    }
    cc(t) {
      const i = new Sn(t.from, t.to);
      this._c(i);
    }
    qi(t) {
      return void 0 !== this.mo.timeFormatter
        ? this.mo.timeFormatter(t.lu)
        : this.dc.N_(new Date(1e3 * t._t.G_));
    }
    Zu() {
      const { handleScroll: t, handleScale: i } = this.Hi.F();
      return !(
        t.horzTouchDrag ||
        t.mouseWheel ||
        t.pressedMouseMove ||
        t.vertTouchDrag ||
        i.axisDoubleClickReset.time ||
        i.axisPressedMouseMove.time ||
        i.mouseWheel ||
        i.pinch
      );
    }
    Iu() {
      return 0 === this.pu.length ? null : 0;
    }
    Nu() {
      return 0 === this.pu.length ? null : this.pu.length - 1;
    }
    fc(t) {
      return (this.s_ - 1 - t) / this.Pu;
    }
    Uu(t) {
      const i = this.fc(t),
        n = this.$u() + this.Tu - i;
      return Math.round(1e6 * n) / 1e6;
    }
    Yu(t) {
      const i = this.Pu;
      (this.Pu = t), this.Wu(), i !== this.Pu && ((this.gu = !0), this.vc());
    }
    Vu() {
      if (!this.gu) return;
      if (((this.gu = !1), this.Ni())) return void this.mc(Cn.fu());
      const t = this.$u(),
        i = this.s_ / this.Pu,
        n = this.Tu + t,
        s = new Sn(n - i + 1, n);
      this.mc(new Cn(s));
    }
    Wu() {
      const t = this.bc();
      if ((this.Pu < t && ((this.Pu = t), (this.gu = !0)), 0 !== this.s_)) {
        const t = 0.5 * this.s_;
        this.Pu > t && ((this.Pu = t), (this.gu = !0));
      }
    }
    bc() {
      return this.un.fixLeftEdge && this.un.fixRightEdge && 0 !== this.pu.length
        ? this.s_ / this.pu.length
        : this.un.minBarSpacing;
    }
    ju() {
      const t = this.wc();
      this.Tu > t && ((this.Tu = t), (this.gu = !0));
      const i = this.gc();
      null !== i && this.Tu < i && ((this.Tu = i), (this.gu = !0));
    }
    gc() {
      const t = this.Iu(),
        i = this.vu;
      if (null === t || null === i) return null;
      return (
        t -
        i -
        1 +
        (this.un.fixLeftEdge ? this.s_ / this.Pu : Math.min(2, this.pu.length))
      );
    }
    wc() {
      return this.un.fixRightEdge
        ? 0
        : this.s_ / this.Pu - Math.min(2, this.pu.length);
    }
    ic() {
      this.yu = { re: this.re(), Xu: this.Xu() };
    }
    nc() {
      this.yu = null;
    }
    Ku(t) {
      let i = this.bu.get(t.hu);
      return (
        void 0 === i && ((i = new xn((t) => this.Mc(t))), this.bu.set(t.hu, i)),
        i.N_(t)
      );
    }
    Mc(t) {
      const i = (function (t, i, n) {
        switch (t) {
          case 0:
          case 10:
            return i ? (n ? 4 : 3) : 2;
          case 20:
          case 21:
          case 22:
          case 30:
          case 31:
          case 32:
          case 33:
            return i ? 3 : 2;
          case 50:
            return 2;
          case 60:
            return 1;
          case 70:
            return 0;
        }
      })(t.hu, this.un.timeVisible, this.un.secondsVisible);
      if (void 0 !== this.un.tickMarkFormatter) {
        const n = this.un.tickMarkFormatter(t.lu, i, this.mo.locale);
        if (null !== n) return n;
      }
      return (function (t, i, n) {
        const s = {};
        switch (i) {
          case 0:
            s.year = "numeric";
            break;
          case 1:
            s.month = "short";
            break;
          case 2:
            s.day = "numeric";
            break;
          case 3:
            (s.hour12 = !1), (s.hour = "2-digit"), (s.minute = "2-digit");
            break;
          case 4:
            (s.hour12 = !1),
              (s.hour = "2-digit"),
              (s.minute = "2-digit"),
              (s.second = "2-digit");
        }
        const e =
          void 0 === t.K_
            ? new Date(1e3 * t.G_)
            : new Date(Date.UTC(t.K_.year, t.K_.month - 1, t.K_.day));
        return new Date(
          e.getUTCFullYear(),
          e.getUTCMonth(),
          e.getUTCDate(),
          e.getUTCHours(),
          e.getUTCMinutes(),
          e.getUTCSeconds(),
          e.getUTCMilliseconds()
        ).toLocaleString(n, s);
      })(t._t, i, this.mo.locale);
    }
    mc(t) {
      const i = this.wu;
      (this.wu = t),
        yn(i.cu(), this.wu.cu()) || this.Mu.m(),
        yn(i.du(), this.wu.du()) || this.xu.m(),
        this.vc();
    }
    vc() {
      this.ku = null;
    }
    Ou() {
      this.vc(), this.bu.clear();
    }
    Ru() {
      const t = this.mo.dateFormat;
      this.un.timeVisible
        ? (this.dc = new Mn({
            W_: t,
            j_: this.un.secondsVisible ? "%h:%m:%s" : "%h:%m",
            H_: "   ",
            U_: this.mo.locale,
          }))
        : (this.dc = new bn(t, this.mo.locale));
    }
    Au() {
      if (!this.un.fixLeftEdge) return;
      const t = this.Iu();
      if (null === t) return;
      const i = this.Ys();
      if (null === i) return;
      const n = i.Ds() - t;
      if (n < 0) {
        const t = this.Tu - n - 1;
        this.Gn(t);
      }
      this.Wu();
    }
    Bu() {
      this.ju(), this.Wu();
    }
  }
  class Bn extends I {
    constructor(t) {
      super(), (this.xc = new Map()), (this.Lt = t);
    }
    Z(t) {}
    G(t) {
      if (!this.Lt.Ct) return;
      const { context: i, mediaSize: n } = t;
      let s = 0;
      for (const t of this.Lt.Sc) {
        if (0 === t.Gt.length) continue;
        i.font = t.P;
        const e = this.yc(i, t.Gt);
        e > n.width ? (t.tc = n.width / e) : (t.tc = 1), (s += t.kc * t.tc);
      }
      let e = 0;
      switch (this.Lt.Cc) {
        case "top":
          e = 0;
          break;
        case "center":
          e = Math.max((n.height - s) / 2, 0);
          break;
        case "bottom":
          e = Math.max(n.height - s, 0);
      }
      i.fillStyle = this.Lt.D;
      for (const t of this.Lt.Sc) {
        i.save();
        let s = 0;
        switch (this.Lt.Tc) {
          case "left":
            (i.textAlign = "left"), (s = t.kc / 2);
            break;
          case "center":
            (i.textAlign = "center"), (s = n.width / 2);
            break;
          case "right":
            (i.textAlign = "right"), (s = n.width - 1 - t.kc / 2);
        }
        i.translate(s, e),
          (i.textBaseline = "top"),
          (i.font = t.P),
          i.scale(t.tc, t.tc),
          i.fillText(t.Gt, 0, t.Pc),
          i.restore(),
          (e += t.kc * t.tc);
      }
    }
    yc(t, i) {
      const n = this.Rc(t.font);
      let s = n.get(i);
      return void 0 === s && ((s = t.measureText(i).width), n.set(i, s)), s;
    }
    Rc(t) {
      let i = this.xc.get(t);
      return void 0 === i && ((i = new Map()), this.xc.set(t, i)), i;
    }
  }
  class Vn {
    constructor(t) {
      (this.vt = !0),
        (this.Wt = { Ct: !1, D: "", Sc: [], Cc: "center", Tc: "center" }),
        (this.jt = new Bn(this.Wt)),
        (this.$t = t);
    }
    wt() {
      this.vt = !0;
    }
    Mt() {
      return this.vt && (this.xt(), (this.vt = !1)), this.jt;
    }
    xt() {
      const t = this.$t.F(),
        i = this.Wt;
      (i.Ct = t.visible),
        i.Ct &&
          ((i.D = t.color),
          (i.Tc = t.horzAlign),
          (i.Cc = t.vertAlign),
          (i.Sc = [
            {
              Gt: t.text,
              P: E(t.fontSize, t.fontFamily, t.fontStyle),
              kc: 1.2 * t.fontSize,
              Pc: 0,
              tc: 0,
            },
          ]));
    }
  }
  class En extends et {
    constructor(t, i) {
      super(), (this.un = i), (this.bn = new Vn(this));
    }
    Pn() {
      return [];
    }
    Tn() {
      return [this.bn];
    }
    F() {
      return this.un;
    }
    Dn() {
      this.bn.wt();
    }
  }
  !(function (t) {
    (t[(t.OnTouchEnd = 0)] = "OnTouchEnd"),
      (t[(t.OnNextTap = 1)] = "OnNextTap");
  })(Pn || (Pn = {}));
  class zn {
    constructor(t, i) {
      (this.Dc = []),
        (this.Oc = []),
        (this.s_ = 0),
        (this.Ac = null),
        (this.Bc = new k()),
        (this.Vc = new k()),
        (this.Ec = null),
        (this.zc = t),
        (this.un = i),
        (this.Lc = new z(this)),
        (this.bl = new An(this, i.timeScale, this.un.localization)),
        (this.bt = new ht(this, i.crosshair)),
        (this.Ic = new Yi(i.crosshair)),
        (this.Nc = new En(this, i.watermark)),
        this.Fc(),
        this.Dc[0].v_(2e3),
        (this.Wc = this.jc(0)),
        (this.$c = this.jc(1));
    }
    $l() {
      this.Hc(at.ss());
    }
    Nh() {
      this.Hc(at.ns());
    }
    na() {
      this.Hc(new at(1));
    }
    Hl(t) {
      const i = this.Uc(t);
      this.Hc(i);
    }
    qc() {
      return this.Ac;
    }
    Yc(t) {
      const i = this.Ac;
      (this.Ac = t), null !== i && this.Hl(i.Xc), null !== t && this.Hl(t.Xc);
    }
    F() {
      return this.un;
    }
    Ih(t) {
      C(this.un, t),
        this.Dc.forEach((i) => i.u_(t)),
        void 0 !== t.timeScale && this.bl.Ih(t.timeScale),
        void 0 !== t.localization && this.bl.Du(t.localization),
        (t.leftPriceScale || t.rightPriceScale) && this.Bc.m(),
        (this.Wc = this.jc(0)),
        (this.$c = this.jc(1)),
        this.$l();
    }
    Zc(t, i) {
      if ("left" === t) return void this.Ih({ leftPriceScale: i });
      if ("right" === t) return void this.Ih({ rightPriceScale: i });
      const n = this.Kc(t);
      null !== n && (n.Ot.Ih(i), this.Bc.m());
    }
    Kc(t) {
      for (const i of this.Dc) {
        const n = i.c_(t);
        if (null !== n) return { Ht: i, Ot: n };
      }
      return null;
    }
    yt() {
      return this.bl;
    }
    Gc() {
      return this.Dc;
    }
    Jc() {
      return this.Nc;
    }
    Qc() {
      return this.bt;
    }
    td() {
      return this.Vc;
    }
    nd(t, i) {
      t.Do(i), this.qu();
    }
    p_(t) {
      (this.s_ = t),
        this.bl.p_(this.s_),
        this.Dc.forEach((i) => i.p_(t)),
        this.qu();
    }
    Fc(t) {
      const i = new vn(this.bl, this);
      void 0 !== t ? this.Dc.splice(t, 0, i) : this.Dc.push(i);
      const n = void 0 === t ? this.Dc.length - 1 : t,
        s = at.ss();
      return s.In(n, { Nn: 0, Fn: !0 }), this.Hc(s), i;
    }
    y_(t, i, n) {
      t.y_(i, n);
    }
    k_(t, i, n) {
      t.k_(i, n), this.Ul(), this.Hc(this.sd(t, 2));
    }
    C_(t, i) {
      t.C_(i), this.Hc(this.sd(t, 2));
    }
    T_(t, i, n) {
      i.yo() || t.T_(i, n);
    }
    P_(t, i, n) {
      i.yo() || (t.P_(i, n), this.Ul(), this.Hc(this.sd(t, 2)));
    }
    R_(t, i) {
      i.yo() || (t.R_(i), this.Hc(this.sd(t, 2)));
    }
    O_(t, i) {
      t.O_(i), this.Hc(this.sd(t, 2));
    }
    ed(t) {
      this.bl.Ho(t);
    }
    rd(t, i) {
      const n = this.yt();
      if (n.Ni() || 0 === i) return;
      const s = n.$i();
      (t = Math.max(1, Math.min(t, s))), n.tc(t, i), this.qu();
    }
    hd(t) {
      this.ld(0), this.ad(t), this.od();
    }
    _d(t) {
      this.bl.Uo(t), this.qu();
    }
    ud() {
      this.bl.qo(), this.Nh();
    }
    ld(t) {
      this.bl.Yo(t);
    }
    ad(t) {
      this.bl.Xo(t), this.qu();
    }
    od() {
      this.bl.Zo(), this.Nh();
    }
    gt() {
      return this.Oc;
    }
    dd(t, i, n, s) {
      this.bt.wn(t, i);
      let e = NaN,
        r = this.bl.Hu(t);
      const h = this.bl.Ys();
      null !== h && (r = Math.min(Math.max(h.Ds(), r), h.ci()));
      const l = s.fn(),
        a = l.Tt();
      null !== a && (e = l.vn(i, a)),
        (e = this.Ic.ka(e, r, s)),
        this.bt.Sn(r, e, s),
        this.na(),
        this.Vc.m(this.bt.St(), { x: t, y: i }, n);
    }
    fd() {
      this.Qc().kn(), this.na(), this.Vc.m(null, null, null);
    }
    Ul() {
      const t = this.bt.Ht();
      if (null !== t) {
        const i = this.bt.Mn(),
          n = this.bt.xn();
        this.dd(i, n, null, t);
      }
      this.bt.Dn();
    }
    vd(t, i, n) {
      const s = this.bl.pn(0);
      void 0 !== i && void 0 !== n && this.bl.wt(i, n);
      const e = this.bl.pn(0),
        r = this.bl.$u(),
        h = this.bl.Ys();
      if (null !== h && null !== s && null !== e) {
        const i = h.Xr(r),
          n = s.G_ > e.G_,
          l = null !== t && t > r && !n,
          a = i && this.bl.F().shiftVisibleRangeOnNewBar;
        if (l && !a) {
          const i = t - r;
          this.bl.Gn(this.bl.Xu() - i);
        }
      }
      this.bl.Qu(t);
    }
    Xl(t) {
      null !== t && t.B_();
    }
    ur(t) {
      const i = this.Dc.find((i) => i.Io().includes(t));
      return void 0 === i ? null : i;
    }
    qu() {
      this.Nc.Dn(), this.Dc.forEach((t) => t.B_()), this.Ul();
    }
    M() {
      this.Dc.forEach((t) => t.M()),
        (this.Dc.length = 0),
        (this.un.localization.priceFormatter = void 0),
        (this.un.localization.percentageFormatter = void 0),
        (this.un.localization.timeFormatter = void 0);
    }
    pd() {
      return this.Lc;
    }
    pr() {
      return this.Lc.F();
    }
    d_() {
      return this.Bc;
    }
    md(t, i, n) {
      const s = this.Dc[0],
        e = this.bd(i, t, s, n);
      return this.Oc.push(e), 1 === this.Oc.length ? this.$l() : this.Nh(), e;
    }
    wd(t) {
      const i = this.ur(t),
        n = this.Oc.indexOf(t);
      c(-1 !== n, "Series not found"),
        this.Oc.splice(n, 1),
        f(i).Wo(t),
        t.M && t.M();
    }
    jl(t, i) {
      const n = f(this.ur(t));
      n.Wo(t);
      const s = this.Kc(i);
      if (null === s) {
        const s = t.Zi();
        n.No(t, i, s);
      } else {
        const e = s.Ht === n ? t.Zi() : void 0;
        s.Ht.No(t, i, e);
      }
    }
    uc() {
      const t = at.ns();
      t.$n(), this.Hc(t);
    }
    gd(t) {
      const i = at.ns();
      i.qn(t), this.Hc(i);
    }
    Zn() {
      const t = at.ns();
      t.Zn(), this.Hc(t);
    }
    Kn(t) {
      const i = at.ns();
      i.Kn(t), this.Hc(i);
    }
    Gn(t) {
      const i = at.ns();
      i.Gn(t), this.Hc(i);
    }
    Yn(t) {
      const i = at.ns();
      i.Yn(t), this.Hc(i);
    }
    Hn() {
      const t = at.ns();
      t.Hn(), this.Hc(t);
    }
    Md() {
      return this.un.rightPriceScale.visible ? "right" : "left";
    }
    xd() {
      return this.$c;
    }
    U() {
      return this.Wc;
    }
    Vt(t) {
      const i = this.$c,
        n = this.Wc;
      if (i === n) return i;
      if (
        ((t = Math.max(0, Math.min(100, Math.round(100 * t)))),
        null === this.Ec || this.Ec.Cs !== n || this.Ec.Ts !== i)
      )
        this.Ec = { Cs: n, Ts: i, Sd: new Map() };
      else {
        const i = this.Ec.Sd.get(t);
        if (void 0 !== i) return i;
      }
      const s = (function (t, i, n) {
        const [s, e, r, h] = S(t),
          [l, a, o, _] = S(i),
          u = [
            m(s + n * (l - s)),
            m(e + n * (a - e)),
            m(r + n * (o - r)),
            b(h + n * (_ - h)),
          ];
        return `rgba(${u[0]}, ${u[1]}, ${u[2]}, ${u[3]})`;
      })(n, i, t / 100);
      return this.Ec.Sd.set(t, s), s;
    }
    sd(t, i) {
      const n = new at(i);
      if (null !== t) {
        const s = this.Dc.indexOf(t);
        n.In(s, { Nn: i });
      }
      return n;
    }
    Uc(t, i) {
      return void 0 === i && (i = 2), this.sd(this.ur(t), i);
    }
    Hc(t) {
      this.zc && this.zc(t), this.Dc.forEach((t) => t.E_().Fh().wt());
    }
    bd(t, i, n, s) {
      const e = new qi(this, t, i, n, s),
        r = void 0 !== t.priceScaleId ? t.priceScaleId : this.Md();
      return n.No(e, r), lt(r) || e.Ih(t), e;
    }
    jc(t) {
      const i = this.un.layout;
      return "gradient" === i.background.type
        ? 0 === t
          ? i.background.topColor
          : i.background.bottomColor
        : i.background.color;
    }
  }
  function Ln(t) {
    return !T(t) && !R(t);
  }
  function In(t) {
    return T(t);
  }
  function Nn(t) {
    var i = t.width,
      n = t.height;
    if (i < 0) throw new Error("Negative width is not allowed for Size");
    if (n < 0) throw new Error("Negative height is not allowed for Size");
    return { width: i, height: n };
  }
  function Fn(t, i) {
    return t.width === i.width && t.height === i.height;
  }
  !(function (t) {
    (t[(t.Disabled = 0)] = "Disabled"),
      (t[(t.Continuous = 1)] = "Continuous"),
      (t[(t.OnDataUpdate = 2)] = "OnDataUpdate");
  })(Rn || (Rn = {})),
    (function (t) {
      (t[(t.LastBar = 0)] = "LastBar"),
        (t[(t.LastVisible = 1)] = "LastVisible");
    })(Dn || (Dn = {})),
    (function (t) {
      (t.Solid = "solid"), (t.VerticalGradient = "gradient");
    })(On || (On = {}));
  var Wn = (function () {
    function t(t) {
      var i = this;
      (this._resolutionListener = function () {
        return i._onResolutionChanged();
      }),
        (this._resolutionMediaQueryList = null),
        (this._observers = []),
        (this._window = t),
        this._installResolutionListener();
    }
    return (
      (t.prototype.dispose = function () {
        this._uninstallResolutionListener(), (this._window = null);
      }),
      Object.defineProperty(t.prototype, "value", {
        get: function () {
          return this._window.devicePixelRatio;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.subscribe = function (t) {
        var i = this,
          n = { next: t };
        return (
          this._observers.push(n),
          {
            unsubscribe: function () {
              i._observers = i._observers.filter(function (t) {
                return t !== n;
              });
            },
          }
        );
      }),
      (t.prototype._installResolutionListener = function () {
        if (null !== this._resolutionMediaQueryList)
          throw new Error("Resolution listener is already installed");
        var t = this._window.devicePixelRatio;
        (this._resolutionMediaQueryList = this._window.matchMedia(
          "all and (resolution: ".concat(t, "dppx)")
        )),
          this._resolutionMediaQueryList.addListener(this._resolutionListener);
      }),
      (t.prototype._uninstallResolutionListener = function () {
        null !== this._resolutionMediaQueryList &&
          (this._resolutionMediaQueryList.removeListener(
            this._resolutionListener
          ),
          (this._resolutionMediaQueryList = null));
      }),
      (t.prototype._reinstallResolutionListener = function () {
        this._uninstallResolutionListener(), this._installResolutionListener();
      }),
      (t.prototype._onResolutionChanged = function () {
        var t = this;
        this._observers.forEach(function (i) {
          return i.next(t._window.devicePixelRatio);
        }),
          this._reinstallResolutionListener();
      }),
      t
    );
  })();
  var jn = (function () {
    function t(t, i, n) {
      var s;
      (this._canvasElement = null),
        (this._bitmapSizeChangedListeners = []),
        (this._suggestedBitmapSize = null),
        (this._suggestedBitmapSizeChangedListeners = []),
        (this._devicePixelRatioObservable = null),
        (this._canvasElementResizeObserver = null),
        (this._canvasElement = t),
        (this._canvasElementClientSize = Nn({
          width: this._canvasElement.clientWidth,
          height: this._canvasElement.clientHeight,
        })),
        (this._transformBitmapSize =
          null != i
            ? i
            : function (t) {
                return t;
              }),
        (this._allowResizeObserver =
          null === (s = null == n ? void 0 : n.allowResizeObserver) ||
          void 0 === s ||
          s),
        this._chooseAndInitObserver();
    }
    return (
      (t.prototype.dispose = function () {
        var t, i;
        if (null === this._canvasElement) throw new Error("Object is disposed");
        null === (t = this._canvasElementResizeObserver) ||
          void 0 === t ||
          t.disconnect(),
          (this._canvasElementResizeObserver = null),
          null === (i = this._devicePixelRatioObservable) ||
            void 0 === i ||
            i.dispose(),
          (this._devicePixelRatioObservable = null),
          (this._suggestedBitmapSizeChangedListeners.length = 0),
          (this._bitmapSizeChangedListeners.length = 0),
          (this._canvasElement = null);
      }),
      Object.defineProperty(t.prototype, "canvasElement", {
        get: function () {
          if (null === this._canvasElement)
            throw new Error("Object is disposed");
          return this._canvasElement;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "canvasElementClientSize", {
        get: function () {
          return this._canvasElementClientSize;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "bitmapSize", {
        get: function () {
          return Nn({
            width: this.canvasElement.width,
            height: this.canvasElement.height,
          });
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.resizeCanvasElement = function (t) {
        (this._canvasElementClientSize = Nn(t)),
          (this.canvasElement.style.width = "".concat(
            this._canvasElementClientSize.width,
            "px"
          )),
          (this.canvasElement.style.height = "".concat(
            this._canvasElementClientSize.height,
            "px"
          )),
          this._invalidateBitmapSize();
      }),
      (t.prototype.subscribeBitmapSizeChanged = function (t) {
        this._bitmapSizeChangedListeners.push(t);
      }),
      (t.prototype.unsubscribeBitmapSizeChanged = function (t) {
        this._bitmapSizeChangedListeners =
          this._bitmapSizeChangedListeners.filter(function (i) {
            return i !== t;
          });
      }),
      Object.defineProperty(t.prototype, "suggestedBitmapSize", {
        get: function () {
          return this._suggestedBitmapSize;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.subscribeSuggestedBitmapSizeChanged = function (t) {
        this._suggestedBitmapSizeChangedListeners.push(t);
      }),
      (t.prototype.unsubscribeSuggestedBitmapSizeChanged = function (t) {
        this._suggestedBitmapSizeChangedListeners =
          this._suggestedBitmapSizeChangedListeners.filter(function (i) {
            return i !== t;
          });
      }),
      (t.prototype.applySuggestedBitmapSize = function () {
        if (null !== this._suggestedBitmapSize) {
          var t = this._suggestedBitmapSize;
          (this._suggestedBitmapSize = null),
            this._resizeBitmap(t),
            this._emitSuggestedBitmapSizeChanged(t, this._suggestedBitmapSize);
        }
      }),
      (t.prototype._resizeBitmap = function (t) {
        var i = this.bitmapSize;
        Fn(i, t) ||
          ((this.canvasElement.width = t.width),
          (this.canvasElement.height = t.height),
          this._emitBitmapSizeChanged(i, t));
      }),
      (t.prototype._emitBitmapSizeChanged = function (t, i) {
        var n = this;
        this._bitmapSizeChangedListeners.forEach(function (s) {
          return s.call(n, t, i);
        });
      }),
      (t.prototype._suggestNewBitmapSize = function (t) {
        var i = this._suggestedBitmapSize,
          n = Nn(this._transformBitmapSize(t, this._canvasElementClientSize)),
          s = Fn(this.bitmapSize, n) ? null : n;
        (null === i && null === s) ||
          (null !== i && null !== s && Fn(i, s)) ||
          ((this._suggestedBitmapSize = s),
          this._emitSuggestedBitmapSizeChanged(i, s));
      }),
      (t.prototype._emitSuggestedBitmapSizeChanged = function (t, i) {
        var n = this;
        this._suggestedBitmapSizeChangedListeners.forEach(function (s) {
          return s.call(n, t, i);
        });
      }),
      (t.prototype._chooseAndInitObserver = function () {
        var t = this;
        this._allowResizeObserver
          ? new Promise(function (t) {
              var i = new ResizeObserver(function (n) {
                t(
                  n.every(function (t) {
                    return "devicePixelContentBoxSize" in t;
                  })
                ),
                  i.disconnect();
              });
              i.observe(document.body, { box: "device-pixel-content-box" });
            })
              .catch(function () {
                return !1;
              })
              .then(function (i) {
                return i
                  ? t._initResizeObserver()
                  : t._initDevicePixelRatioObservable();
              })
          : this._initDevicePixelRatioObservable();
      }),
      (t.prototype._initDevicePixelRatioObservable = function () {
        var t = this;
        if (null !== this._canvasElement) {
          var i = $n(this._canvasElement);
          if (null === i)
            throw new Error("No window is associated with the canvas");
          (this._devicePixelRatioObservable = (function (t) {
            return new Wn(t);
          })(i)),
            this._devicePixelRatioObservable.subscribe(function () {
              return t._invalidateBitmapSize();
            }),
            this._invalidateBitmapSize();
        }
      }),
      (t.prototype._invalidateBitmapSize = function () {
        var t, i;
        if (null !== this._canvasElement) {
          var n = $n(this._canvasElement);
          if (null !== n) {
            var s =
                null !==
                  (i =
                    null === (t = this._devicePixelRatioObservable) ||
                    void 0 === t
                      ? void 0
                      : t.value) && void 0 !== i
                  ? i
                  : n.devicePixelRatio,
              e = this._canvasElement.getClientRects(),
              r =
                void 0 !== e[0]
                  ? (function (t, i) {
                      return Nn({
                        width:
                          Math.round(t.left * i + t.width * i) -
                          Math.round(t.left * i),
                        height:
                          Math.round(t.top * i + t.height * i) -
                          Math.round(t.top * i),
                      });
                    })(e[0], s)
                  : Nn({
                      width: this._canvasElementClientSize.width * s,
                      height: this._canvasElementClientSize.height * s,
                    });
            this._suggestNewBitmapSize(r);
          }
        }
      }),
      (t.prototype._initResizeObserver = function () {
        var t = this;
        null !== this._canvasElement &&
          ((this._canvasElementResizeObserver = new ResizeObserver(function (
            i
          ) {
            var n = i.find(function (i) {
              return i.target === t._canvasElement;
            });
            if (
              n &&
              n.devicePixelContentBoxSize &&
              n.devicePixelContentBoxSize[0]
            ) {
              var s = n.devicePixelContentBoxSize[0],
                e = Nn({ width: s.inlineSize, height: s.blockSize });
              t._suggestNewBitmapSize(e);
            }
          })),
          this._canvasElementResizeObserver.observe(this._canvasElement, {
            box: "device-pixel-content-box",
          }));
      }),
      t
    );
  })();
  function $n(t) {
    return t.ownerDocument.defaultView;
  }
  var Hn = (function () {
    function t(t, i, n) {
      if (0 === i.width || 0 === i.height)
        throw new TypeError(
          "Rendering target could only be created on a media with positive width and height"
        );
      if (((this._mediaSize = i), 0 === n.width || 0 === n.height))
        throw new TypeError(
          "Rendering target could only be created using a bitmap with positive integer width and height"
        );
      (this._bitmapSize = n), (this._context = t);
    }
    return (
      (t.prototype.useMediaCoordinateSpace = function (t) {
        try {
          return (
            this._context.save(),
            this._context.setTransform(1, 0, 0, 1, 0, 0),
            this._context.scale(
              this._horizontalPixelRatio,
              this._verticalPixelRatio
            ),
            t({ context: this._context, mediaSize: this._mediaSize })
          );
        } finally {
          this._context.restore();
        }
      }),
      (t.prototype.useBitmapCoordinateSpace = function (t) {
        try {
          return (
            this._context.save(),
            this._context.setTransform(1, 0, 0, 1, 0, 0),
            t({
              context: this._context,
              mediaSize: this._mediaSize,
              bitmapSize: this._bitmapSize,
              horizontalPixelRatio: this._horizontalPixelRatio,
              verticalPixelRatio: this._verticalPixelRatio,
            })
          );
        } finally {
          this._context.restore();
        }
      }),
      Object.defineProperty(t.prototype, "_horizontalPixelRatio", {
        get: function () {
          return this._bitmapSize.width / this._mediaSize.width;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "_verticalPixelRatio", {
        get: function () {
          return this._bitmapSize.height / this._mediaSize.height;
        },
        enumerable: !1,
        configurable: !0,
      }),
      t
    );
  })();
  function Un(t, i) {
    var n = t.canvasElementClientSize;
    if (0 === n.width || 0 === n.height) return null;
    var s = t.bitmapSize;
    if (0 === s.width || 0 === s.height) return null;
    var e = t.canvasElement.getContext("2d", i);
    return null === e ? null : new Hn(e, n, s);
  }
  const qn = "undefined" != typeof window;
  function Yn() {
    return (
      !!qn && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
    );
  }
  function Xn() {
    return !!qn && /iPhone|iPad|iPod/.test(window.navigator.platform);
  }
  function Zn(t) {
    return t + (t % 2);
  }
  function Kn(t, i) {
    return t.yd - i.yd;
  }
  function Gn(t, i, n) {
    const s = (t.yd - i.yd) / (t._t - i._t);
    return Math.sign(s) * Math.min(Math.abs(s), n);
  }
  class Jn {
    constructor(t, i, n, s) {
      (this.kd = null),
        (this.Cd = null),
        (this.Td = null),
        (this.Pd = null),
        (this.Rd = null),
        (this.Dd = 0),
        (this.Od = 0),
        (this.Ad = t),
        (this.Bd = i),
        (this.Vd = n),
        (this.es = s);
    }
    Ed(t, i) {
      if (null !== this.kd) {
        if (this.kd._t === i) return void (this.kd.yd = t);
        if (Math.abs(this.kd.yd - t) < this.es) return;
      }
      (this.Pd = this.Td),
        (this.Td = this.Cd),
        (this.Cd = this.kd),
        (this.kd = { _t: i, yd: t });
    }
    Rr(t, i) {
      if (null === this.kd || null === this.Cd) return;
      if (i - this.kd._t > 50) return;
      let n = 0;
      const s = Gn(this.kd, this.Cd, this.Bd),
        e = Kn(this.kd, this.Cd),
        r = [s],
        h = [e];
      if (((n += e), null !== this.Td)) {
        const t = Gn(this.Cd, this.Td, this.Bd);
        if (Math.sign(t) === Math.sign(s)) {
          const i = Kn(this.Cd, this.Td);
          if ((r.push(t), h.push(i), (n += i), null !== this.Pd)) {
            const t = Gn(this.Td, this.Pd, this.Bd);
            if (Math.sign(t) === Math.sign(s)) {
              const i = Kn(this.Td, this.Pd);
              r.push(t), h.push(i), (n += i);
            }
          }
        }
      }
      let l = 0;
      for (let t = 0; t < r.length; ++t) l += (h[t] / n) * r[t];
      Math.abs(l) < this.Ad ||
        ((this.Rd = { yd: t, _t: i }),
        (this.Od = l),
        (this.Dd = (function (t, i) {
          const n = Math.log(i);
          return Math.log((1 * n) / -t) / n;
        })(Math.abs(l), this.Vd)));
    }
    hc(t) {
      const i = f(this.Rd),
        n = t - i._t;
      return i.yd + (this.Od * (Math.pow(this.Vd, n) - 1)) / Math.log(this.Vd);
    }
    rc(t) {
      return null === this.Rd || this.zd(t) === this.Dd;
    }
    zd(t) {
      const i = t - f(this.Rd)._t;
      return Math.min(i, this.Dd);
    }
  }
  function Qn(t, i) {
    const n = f(t.ownerDocument).createElement("canvas");
    t.appendChild(n);
    const s = (function (t, i) {
      if ("device-pixel-content-box" === i.type)
        return new jn(t, i.transform, i.options);
      throw new Error("Unsupported binding target");
    })(n, {
      type: "device-pixel-content-box",
      options: { allowResizeObserver: !1 },
      transform: (t, i) => ({
        width: Math.max(t.width, i.width),
        height: Math.max(t.height, i.height),
      }),
    });
    return s.resizeCanvasElement(i), s;
  }
  function ts(t, i, n, s) {
    t.K && t.K(i, n, s);
  }
  function is(t, i, n, s) {
    t.X(i, n, s);
  }
  function ns(t, i, n, s) {
    const e = t(n, s);
    for (const t of e) {
      const n = t.Mt();
      null !== n && i(n);
    }
  }
  function ss(t) {
    qn &&
      void 0 !== window.chrome &&
      t.addEventListener("mousedown", (t) => {
        if (1 === t.button) return t.preventDefault(), !1;
      });
  }
  class es {
    constructor(t, i, n) {
      (this.Ld = 0),
        (this.Id = null),
        (this.Nd = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        }),
        (this.Fd = 0),
        (this.Wd = null),
        (this.jd = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        }),
        (this.$d = null),
        (this.Hd = !1),
        (this.Ud = null),
        (this.qd = null),
        (this.Yd = !1),
        (this.Xd = !1),
        (this.Zd = !1),
        (this.Kd = null),
        (this.Gd = null),
        (this.Jd = null),
        (this.Qd = null),
        (this.tf = null),
        (this.if = null),
        (this.nf = null),
        (this.sf = 0),
        (this.ef = !1),
        (this.rf = !1),
        (this.hf = !1),
        (this.lf = 0),
        (this.af = null),
        (this._f = !Xn()),
        (this.uf = (t) => {
          this.cf(t);
        }),
        (this.df = (t) => {
          if (this.ff(t)) {
            const i = this.vf(t);
            if ((++this.Fd, this.Wd && this.Fd > 1)) {
              const { pf: n } = this.mf(ls(t), this.jd);
              n < 30 && !this.Zd && this.bf(i, this.gf.wf), this.Mf();
            }
          } else {
            const i = this.vf(t);
            if ((++this.Ld, this.Id && this.Ld > 1)) {
              const { pf: n } = this.mf(ls(t), this.Nd);
              n < 5 && !this.Xd && this.xf(i, this.gf.Sf), this.yf();
            }
          }
        }),
        (this.kf = t),
        (this.gf = i),
        (this.un = n),
        this.Cf();
    }
    M() {
      null !== this.Kd && (this.Kd(), (this.Kd = null)),
        null !== this.Gd && (this.Gd(), (this.Gd = null)),
        null !== this.Qd && (this.Qd(), (this.Qd = null)),
        null !== this.tf && (this.tf(), (this.tf = null)),
        null !== this.if && (this.if(), (this.if = null)),
        null !== this.Jd && (this.Jd(), (this.Jd = null)),
        this.Tf(),
        this.yf();
    }
    Pf(t) {
      this.Qd && this.Qd();
      const i = this.Rf.bind(this);
      if (
        ((this.Qd = () => {
          this.kf.removeEventListener("mousemove", i);
        }),
        this.kf.addEventListener("mousemove", i),
        this.ff(t))
      )
        return;
      const n = this.vf(t);
      this.xf(n, this.gf.Df), (this._f = !0);
    }
    yf() {
      null !== this.Id && clearTimeout(this.Id),
        (this.Ld = 0),
        (this.Id = null),
        (this.Nd = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        });
    }
    Mf() {
      null !== this.Wd && clearTimeout(this.Wd),
        (this.Fd = 0),
        (this.Wd = null),
        (this.jd = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        });
    }
    Rf(t) {
      if (this.hf || null !== this.qd) return;
      if (this.ff(t)) return;
      const i = this.vf(t);
      this.xf(i, this.gf.Of), (this._f = !0);
    }
    Af(t) {
      const i = os(t.changedTouches, f(this.af));
      if (null === i) return;
      if (((this.lf = as(t)), null !== this.nf)) return;
      if (this.rf) return;
      this.ef = !0;
      const n = this.mf(ls(i), f(this.qd)),
        { Bf: s, Vf: e, pf: r } = n;
      if (this.Yd || !(r < 5)) {
        if (!this.Yd) {
          const t = 0.5 * s,
            i = e >= t && !this.un.Ef(),
            n = t > e && !this.un.zf();
          i || n || (this.rf = !0),
            (this.Yd = !0),
            (this.Zd = !0),
            this.Tf(),
            this.Mf();
        }
        if (!this.rf) {
          const n = this.vf(t, i);
          this.bf(n, this.gf.Lf), hs(t);
        }
      }
    }
    If(t) {
      if (0 !== t.button) return;
      const i = this.mf(ls(t), f(this.Ud)),
        { pf: n } = i;
      if ((n >= 5 && ((this.Xd = !0), this.yf()), this.Xd)) {
        const i = this.vf(t);
        this.xf(i, this.gf.Nf);
      }
    }
    mf(t, i) {
      const n = Math.abs(i.st - t.st),
        s = Math.abs(i.et - t.et);
      return { Bf: n, Vf: s, pf: n + s };
    }
    Ff(t) {
      let i = os(t.changedTouches, f(this.af));
      if (
        (null === i && 0 === t.touches.length && (i = t.changedTouches[0]),
        null === i)
      )
        return;
      (this.af = null),
        (this.lf = as(t)),
        this.Tf(),
        (this.qd = null),
        this.if && (this.if(), (this.if = null));
      const n = this.vf(t, i);
      if ((this.bf(n, this.gf.Wf), ++this.Fd, this.Wd && this.Fd > 1)) {
        const { pf: t } = this.mf(ls(i), this.jd);
        t < 30 && !this.Zd && this.bf(n, this.gf.wf), this.Mf();
      } else this.Zd || (this.bf(n, this.gf.jf), this.gf.jf && hs(t));
      0 === this.Fd && hs(t),
        0 === t.touches.length && this.Hd && ((this.Hd = !1), hs(t));
    }
    cf(t) {
      if (0 !== t.button) return;
      const i = this.vf(t);
      if (
        ((this.Ud = null),
        (this.hf = !1),
        this.tf && (this.tf(), (this.tf = null)),
        Yn())
      ) {
        this.kf.ownerDocument.documentElement.removeEventListener(
          "mouseleave",
          this.uf
        );
      }
      if (!this.ff(t))
        if ((this.xf(i, this.gf.$f), ++this.Ld, this.Id && this.Ld > 1)) {
          const { pf: n } = this.mf(ls(t), this.Nd);
          n < 5 && !this.Xd && this.xf(i, this.gf.Sf), this.yf();
        } else this.Xd || this.xf(i, this.gf.Hf);
    }
    Tf() {
      null !== this.$d && (clearTimeout(this.$d), (this.$d = null));
    }
    Uf(t) {
      if (null !== this.af) return;
      const i = t.changedTouches[0];
      (this.af = i.identifier), (this.lf = as(t));
      const n = this.kf.ownerDocument.documentElement;
      (this.Zd = !1),
        (this.Yd = !1),
        (this.rf = !1),
        (this.qd = ls(i)),
        this.if && (this.if(), (this.if = null));
      {
        const i = this.Af.bind(this),
          s = this.Ff.bind(this);
        (this.if = () => {
          n.removeEventListener("touchmove", i),
            n.removeEventListener("touchend", s);
        }),
          n.addEventListener("touchmove", i, { passive: !1 }),
          n.addEventListener("touchend", s, { passive: !1 }),
          this.Tf(),
          (this.$d = setTimeout(this.qf.bind(this, t), 240));
      }
      const s = this.vf(t, i);
      this.bf(s, this.gf.Yf),
        this.Wd ||
          ((this.Fd = 0),
          (this.Wd = setTimeout(this.Mf.bind(this), 500)),
          (this.jd = ls(i)));
    }
    Xf(t) {
      if (0 !== t.button) return;
      const i = this.kf.ownerDocument.documentElement;
      Yn() && i.addEventListener("mouseleave", this.uf),
        (this.Xd = !1),
        (this.Ud = ls(t)),
        this.tf && (this.tf(), (this.tf = null));
      {
        const t = this.If.bind(this),
          n = this.cf.bind(this);
        (this.tf = () => {
          i.removeEventListener("mousemove", t),
            i.removeEventListener("mouseup", n);
        }),
          i.addEventListener("mousemove", t),
          i.addEventListener("mouseup", n);
      }
      if (((this.hf = !0), this.ff(t))) return;
      const n = this.vf(t);
      this.xf(n, this.gf.Zf),
        this.Id ||
          ((this.Ld = 0),
          (this.Id = setTimeout(this.yf.bind(this), 500)),
          (this.Nd = ls(t)));
    }
    Cf() {
      this.kf.addEventListener("mouseenter", this.Pf.bind(this)),
        this.kf.addEventListener("touchcancel", this.Tf.bind(this));
      {
        const t = this.kf.ownerDocument,
          i = (t) => {
            this.gf.Kf &&
              ((t.composed && this.kf.contains(t.composedPath()[0])) ||
                (t.target && this.kf.contains(t.target)) ||
                this.gf.Kf());
          };
        (this.Gd = () => {
          t.removeEventListener("touchstart", i);
        }),
          (this.Kd = () => {
            t.removeEventListener("mousedown", i);
          }),
          t.addEventListener("mousedown", i),
          t.addEventListener("touchstart", i, { passive: !0 });
      }
      Xn() &&
        ((this.Jd = () => {
          this.kf.removeEventListener("dblclick", this.df);
        }),
        this.kf.addEventListener("dblclick", this.df)),
        this.kf.addEventListener("mouseleave", this.Gf.bind(this)),
        this.kf.addEventListener("touchstart", this.Uf.bind(this), {
          passive: !0,
        }),
        ss(this.kf),
        this.kf.addEventListener("mousedown", this.Xf.bind(this)),
        this.Jf(),
        this.kf.addEventListener("touchmove", () => {}, { passive: !1 });
    }
    Jf() {
      (void 0 === this.gf.Qf &&
        void 0 === this.gf.tv &&
        void 0 === this.gf.iv) ||
        (this.kf.addEventListener("touchstart", (t) => this.nv(t.touches), {
          passive: !0,
        }),
        this.kf.addEventListener(
          "touchmove",
          (t) => {
            if (
              2 === t.touches.length &&
              null !== this.nf &&
              void 0 !== this.gf.tv
            ) {
              const i = rs(t.touches[0], t.touches[1]) / this.sf;
              this.gf.tv(this.nf, i), hs(t);
            }
          },
          { passive: !1 }
        ),
        this.kf.addEventListener("touchend", (t) => {
          this.nv(t.touches);
        }));
    }
    nv(t) {
      1 === t.length && (this.ef = !1),
        2 !== t.length || this.ef || this.Hd ? this.sv() : this.ev(t);
    }
    ev(t) {
      const i = this.kf.getBoundingClientRect() || { left: 0, top: 0 };
      (this.nf = {
        st: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
        et: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2,
      }),
        (this.sf = rs(t[0], t[1])),
        void 0 !== this.gf.Qf && this.gf.Qf(),
        this.Tf();
    }
    sv() {
      null !== this.nf &&
        ((this.nf = null), void 0 !== this.gf.iv && this.gf.iv());
    }
    Gf(t) {
      if ((this.Qd && this.Qd(), this.ff(t))) return;
      if (!this._f) return;
      const i = this.vf(t);
      this.xf(i, this.gf.rv), (this._f = !Xn());
    }
    qf(t) {
      const i = os(t.touches, f(this.af));
      if (null === i) return;
      const n = this.vf(t, i);
      this.bf(n, this.gf.hv), (this.Zd = !0), (this.Hd = !0);
    }
    ff(t) {
      return t.sourceCapabilities &&
        void 0 !== t.sourceCapabilities.firesTouchEvents
        ? t.sourceCapabilities.firesTouchEvents
        : as(t) < this.lf + 500;
    }
    bf(t, i) {
      i && i.call(this.gf, t);
    }
    xf(t, i) {
      i && i.call(this.gf, t);
    }
    vf(t, i) {
      const n = i || t,
        s = this.kf.getBoundingClientRect() || { left: 0, top: 0 };
      return {
        clientX: n.clientX,
        clientY: n.clientY,
        pageX: n.pageX,
        pageY: n.pageY,
        screenX: n.screenX,
        screenY: n.screenY,
        localX: n.clientX - s.left,
        localY: n.clientY - s.top,
        ctrlKey: t.ctrlKey,
        altKey: t.altKey,
        shiftKey: t.shiftKey,
        metaKey: t.metaKey,
        lv:
          !t.type.startsWith("mouse") &&
          "contextmenu" !== t.type &&
          "click" !== t.type,
        av: t.type,
        ov: n.target,
        _v: t.view,
        uv: () => {
          "touchstart" !== t.type && hs(t);
        },
      };
    }
  }
  function rs(t, i) {
    const n = t.clientX - i.clientX,
      s = t.clientY - i.clientY;
    return Math.sqrt(n * n + s * s);
  }
  function hs(t) {
    t.cancelable && t.preventDefault();
  }
  function ls(t) {
    return { st: t.pageX, et: t.pageY };
  }
  function as(t) {
    return t.timeStamp || performance.now();
  }
  function os(t, i) {
    for (let n = 0; n < t.length; ++n) if (t[n].identifier === i) return t[n];
    return null;
  }
  function _s(t) {
    return { Xc: t.Xc, cv: { br: t.dv.externalId }, fv: t.dv.cursorStyle };
  }
  function us(t, i, n) {
    for (const s of t) {
      const t = s.Mt();
      if (null !== t && t.mr) {
        const e = t.mr(i, n);
        if (null !== e) return { _v: s, cv: e };
      }
    }
    return null;
  }
  function cs(t, i) {
    return (n) => {
      var s, e, r, h;
      return (null !==
        (e = null === (s = n.Ot()) || void 0 === s ? void 0 : s.Ma()) &&
      void 0 !== e
        ? e
        : "") !== i
        ? []
        : null !==
            (h = null === (r = n.ha) || void 0 === r ? void 0 : r.call(n, t)) &&
          void 0 !== h
        ? h
        : [];
    };
  }
  class ds {
    constructor(t, i, n, s) {
      (this.Li = null),
        (this.vv = null),
        (this.pv = !1),
        (this.mv = new Qt(200)),
        (this.Kr = null),
        (this.bv = 0),
        (this.wv = !1),
        (this.gv = () => {
          this.wv || this.tn.Mv().Ut().Nh();
        }),
        (this.xv = () => {
          this.wv || this.tn.Mv().Ut().Nh();
        }),
        (this.tn = t),
        (this.un = i),
        (this.po = i.layout),
        (this.Lc = n),
        (this.Sv = "left" === s),
        (this.yv = cs("normal", s)),
        (this.kv = cs("top", s)),
        (this.Cv = cs("bottom", s)),
        (this.Tv = document.createElement("div")),
        (this.Tv.style.height = "100%"),
        (this.Tv.style.overflow = "hidden"),
        (this.Tv.style.width = "25px"),
        (this.Tv.style.left = "0"),
        (this.Tv.style.position = "relative"),
        (this.Pv = Qn(this.Tv, Nn({ width: 16, height: 16 }))),
        this.Pv.subscribeSuggestedBitmapSizeChanged(this.gv);
      const e = this.Pv.canvasElement;
      (e.style.position = "absolute"),
        (e.style.zIndex = "1"),
        (e.style.left = "0"),
        (e.style.top = "0"),
        (this.Rv = Qn(this.Tv, Nn({ width: 16, height: 16 }))),
        this.Rv.subscribeSuggestedBitmapSizeChanged(this.xv);
      const r = this.Rv.canvasElement;
      (r.style.position = "absolute"),
        (r.style.zIndex = "2"),
        (r.style.left = "0"),
        (r.style.top = "0");
      const h = {
        Zf: this.Dv.bind(this),
        Yf: this.Dv.bind(this),
        Nf: this.Ov.bind(this),
        Lf: this.Ov.bind(this),
        Kf: this.Av.bind(this),
        $f: this.Bv.bind(this),
        Wf: this.Bv.bind(this),
        Sf: this.Vv.bind(this),
        wf: this.Vv.bind(this),
        Df: this.Ev.bind(this),
        rv: this.zv.bind(this),
      };
      this.Lv = new es(this.Rv.canvasElement, h, {
        Ef: () => !1,
        zf: () => !0,
      });
    }
    M() {
      this.Lv.M(),
        this.Rv.unsubscribeSuggestedBitmapSizeChanged(this.xv),
        this.Rv.dispose(),
        this.Pv.unsubscribeSuggestedBitmapSizeChanged(this.gv),
        this.Pv.dispose(),
        null !== this.Li && this.Li.$o().p(this),
        (this.Li = null);
    }
    Iv() {
      return this.Tv;
    }
    T() {
      return this.po.fontSize;
    }
    Nv() {
      const t = this.Lc.F();
      return this.Kr !== t.P && (this.mv.tr(), (this.Kr = t.P)), t;
    }
    Fv() {
      if (null === this.Li) return 0;
      let t = 0;
      const i = this.Nv(),
        n = f(this.Pv.canvasElement.getContext("2d"));
      n.save();
      const s = this.Li.za();
      (n.font = this.Wv()),
        s.length > 0 &&
          (t = Math.max(
            this.mv.xi(n, s[0].Za),
            this.mv.xi(n, s[s.length - 1].Za)
          ));
      const e = this.jv();
      for (let i = e.length; i--; ) {
        const s = this.mv.xi(n, e[i].Gt());
        s > t && (t = s);
      }
      const r = this.Li.Tt();
      if (null !== r && null !== this.vv) {
        const i = this.Li.vn(1, r),
          s = this.Li.vn(this.vv.height - 2, r);
        t = Math.max(
          t,
          this.mv.xi(
            n,
            this.Li.Fi(Math.floor(Math.min(i, s)) + 0.11111111111111, r)
          ),
          this.mv.xi(
            n,
            this.Li.Fi(Math.ceil(Math.max(i, s)) - 0.11111111111111, r)
          )
        );
      }
      n.restore();
      const h = t || 34;
      return Zn(Math.ceil(i.k + i.C + i.B + i.V + 5 + h));
    }
    $v(t) {
      (null !== this.vv && Fn(this.vv, t)) ||
        ((this.vv = t),
        (this.wv = !0),
        this.Pv.resizeCanvasElement(t),
        this.Rv.resizeCanvasElement(t),
        (this.wv = !1),
        (this.Tv.style.width = `${t.width}px`),
        (this.Tv.style.height = `${t.height}px`));
    }
    Hv() {
      return f(this.vv).width;
    }
    Gi(t) {
      this.Li !== t &&
        (null !== this.Li && this.Li.$o().p(this),
        (this.Li = t),
        t.$o().l(this.lo.bind(this), this));
    }
    Ot() {
      return this.Li;
    }
    tr() {
      const t = this.tn.Uv();
      this.tn.Mv().Ut().O_(t, f(this.Ot()));
    }
    qv(t) {
      if (null === this.vv) return;
      if (1 !== t) {
        this.Yv(), this.Pv.applySuggestedBitmapSize();
        const t = Un(this.Pv);
        null !== t &&
          (t.useBitmapCoordinateSpace((t) => {
            this.Xv(t), this.Be(t);
          }),
          this.tn.Zv(t, this.Cv),
          this.Kv(t),
          this.tn.Zv(t, this.yv),
          this.Gv(t));
      }
      this.Rv.applySuggestedBitmapSize();
      const i = Un(this.Rv);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
          t.clearRect(0, 0, i.width, i.height);
        }),
        this.Jv(i),
        this.tn.Zv(i, this.kv));
    }
    Qv() {
      return this.Pv.bitmapSize;
    }
    tp(t, i, n) {
      const s = this.Qv();
      s.width > 0 && s.height > 0 && t.drawImage(this.Pv.canvasElement, i, n);
    }
    wt() {
      var t;
      null === (t = this.Li) || void 0 === t || t.za();
    }
    Dv(t) {
      if (
        null === this.Li ||
        this.Li.Ni() ||
        !this.un.handleScale.axisPressedMouseMove.price
      )
        return;
      const i = this.tn.Mv().Ut(),
        n = this.tn.Uv();
      (this.pv = !0), i.y_(n, this.Li, t.localY);
    }
    Ov(t) {
      if (null === this.Li || !this.un.handleScale.axisPressedMouseMove.price)
        return;
      const i = this.tn.Mv().Ut(),
        n = this.tn.Uv(),
        s = this.Li;
      i.k_(n, s, t.localY);
    }
    Av() {
      if (null === this.Li || !this.un.handleScale.axisPressedMouseMove.price)
        return;
      const t = this.tn.Mv().Ut(),
        i = this.tn.Uv(),
        n = this.Li;
      this.pv && ((this.pv = !1), t.C_(i, n));
    }
    Bv(t) {
      if (null === this.Li || !this.un.handleScale.axisPressedMouseMove.price)
        return;
      const i = this.tn.Mv().Ut(),
        n = this.tn.Uv();
      (this.pv = !1), i.C_(n, this.Li);
    }
    Vv(t) {
      this.un.handleScale.axisDoubleClickReset.price && this.tr();
    }
    Ev(t) {
      if (null === this.Li) return;
      !this.tn.Mv().Ut().F().handleScale.axisPressedMouseMove.price ||
        this.Li.fh() ||
        this.Li.ko() ||
        this.ip(1);
    }
    zv(t) {
      this.ip(0);
    }
    jv() {
      const t = [],
        i = null === this.Li ? void 0 : this.Li;
      return (
        ((n) => {
          for (let s = 0; s < n.length; ++s) {
            const e = n[s].Pn(this.tn.Uv(), i);
            for (let i = 0; i < e.length; i++) t.push(e[i]);
          }
        })(this.tn.Uv().Io()),
        t
      );
    }
    Xv({ context: t, bitmapSize: i }) {
      const { width: n, height: s } = i,
        e = this.tn.Uv().Ut(),
        r = e.U(),
        h = e.xd();
      r === h ? Y(t, 0, 0, n, s, r) : G(t, 0, 0, n, s, r, h);
    }
    Be({ context: t, bitmapSize: i, horizontalPixelRatio: n }) {
      if (null === this.vv || null === this.Li || !this.Li.F().borderVisible)
        return;
      t.fillStyle = this.Li.F().borderColor;
      const s = Math.max(1, Math.floor(this.Nv().k * n));
      let e;
      (e = this.Sv ? i.width - s : 0), t.fillRect(e, 0, s, i.height);
    }
    Kv(t) {
      if (null === this.vv || null === this.Li) return;
      const i = this.Li.za(),
        n = this.Li.F(),
        s = this.Nv(),
        e = this.Sv ? this.vv.width - s.C : 0;
      n.borderVisible &&
        n.ticksVisible &&
        t.useBitmapCoordinateSpace(
          ({ context: t, horizontalPixelRatio: r, verticalPixelRatio: h }) => {
            t.fillStyle = n.borderColor;
            const l = Math.max(1, Math.floor(h)),
              a = Math.floor(0.5 * h),
              o = Math.round(s.C * r);
            t.beginPath();
            for (const n of i)
              t.rect(Math.floor(e * r), Math.round(n.Oa * h) - a, o, l);
            t.fill();
          }
        ),
        t.useMediaCoordinateSpace(({ context: t }) => {
          var r;
          (t.font = this.Wv()),
            (t.fillStyle =
              null !== (r = n.textColor) && void 0 !== r
                ? r
                : this.po.textColor),
            (t.textAlign = this.Sv ? "right" : "left"),
            (t.textBaseline = "middle");
          const h = this.Sv ? Math.round(e - s.B) : Math.round(e + s.C + s.B),
            l = i.map((i) => this.mv.Mi(t, i.Za));
          for (let n = i.length; n--; ) {
            const s = i[n];
            t.fillText(s.Za, h, s.Oa + l[n]);
          }
        });
    }
    Yv() {
      if (null === this.vv || null === this.Li) return;
      let t = this.vv.height / 2;
      const i = [],
        n = this.Li.Io().slice(),
        s = this.tn.Uv(),
        e = this.Nv();
      this.Li === s.dr() &&
        this.tn
          .Uv()
          .Io()
          .forEach((t) => {
            s.cr(t) && n.push(t);
          });
      const r = this.Li.Ca()[0],
        h = this.Li;
      n.forEach((n) => {
        const e = n.Pn(s, h);
        e.forEach((t) => {
          t.Ai(null), t.Bi() && i.push(t);
        }),
          r === n && e.length > 0 && (t = e[0].yi());
      }),
        i.forEach((t) => t.Ai(t.yi()));
      this.Li.F().alignLabels && this.np(i, e, t);
    }
    np(t, i, n) {
      if (null === this.vv) return;
      const s = t.filter((t) => t.yi() <= n),
        e = t.filter((t) => t.yi() > n);
      s.sort((t, i) => i.yi() - t.yi()),
        s.length && e.length && e.push(s[0]),
        e.sort((t, i) => t.yi() - i.yi());
      for (const n of t) {
        const t = Math.floor(n.Et(i) / 2),
          s = n.yi();
        s > -t && s < t && n.Ai(t),
          s > this.vv.height - t &&
            s < this.vv.height + t &&
            n.Ai(this.vv.height - t);
      }
      for (let t = 1; t < s.length; t++) {
        const n = s[t],
          e = s[t - 1],
          r = e.Et(i, !1),
          h = n.yi(),
          l = e.Oi();
        h > l - r && n.Ai(l - r);
      }
      for (let t = 1; t < e.length; t++) {
        const n = e[t],
          s = e[t - 1],
          r = s.Et(i, !0),
          h = n.yi(),
          l = s.Oi();
        h < l + r && n.Ai(l + r);
      }
    }
    Gv(t) {
      if (null === this.vv) return;
      const i = this.jv(),
        n = this.Nv(),
        s = this.Sv ? "right" : "left";
      i.forEach((i) => {
        if (i.Vi()) {
          i.Mt(f(this.Li)).X(t, n, this.mv, s);
        }
      });
    }
    Jv(t) {
      if (null === this.vv || null === this.Li) return;
      const i = this.tn.Mv().Ut(),
        n = [],
        s = this.tn.Uv(),
        e = i.Qc().Pn(s, this.Li);
      e.length && n.push(e);
      const r = this.Nv(),
        h = this.Sv ? "right" : "left";
      n.forEach((i) => {
        i.forEach((i) => {
          i.Mt(f(this.Li)).X(t, r, this.mv, h);
        });
      });
    }
    ip(t) {
      this.Tv.style.cursor = 1 === t ? "ns-resize" : "default";
    }
    lo() {
      const t = this.Fv();
      this.bv < t && this.tn.Mv().Ut().$l(), (this.bv = t);
    }
    Wv() {
      return E(this.po.fontSize, this.po.fontFamily);
    }
  }
  function fs(t, i) {
    var n, s;
    return null !==
      (s = null === (n = t.ea) || void 0 === n ? void 0 : n.call(t, i)) &&
      void 0 !== s
      ? s
      : [];
  }
  function vs(t, i) {
    var n, s;
    return null !==
      (s = null === (n = t.Tn) || void 0 === n ? void 0 : n.call(t, i)) &&
      void 0 !== s
      ? s
      : [];
  }
  function ps(t, i) {
    var n, s;
    return null !==
      (s = null === (n = t.Ji) || void 0 === n ? void 0 : n.call(t, i)) &&
      void 0 !== s
      ? s
      : [];
  }
  function ms(t, i) {
    var n, s;
    return null !==
      (s = null === (n = t.ia) || void 0 === n ? void 0 : n.call(t, i)) &&
      void 0 !== s
      ? s
      : [];
  }
  class bs {
    constructor(t, i) {
      (this.vv = Nn({ width: 0, height: 0 })),
        (this.sp = null),
        (this.ep = null),
        (this.rp = null),
        (this.hp = !1),
        (this.lp = new k()),
        (this.ap = 0),
        (this.op = !1),
        (this._p = null),
        (this.up = !1),
        (this.cp = null),
        (this.dp = null),
        (this.wv = !1),
        (this.gv = () => {
          this.wv || null === this.fp || this.Hi().Nh();
        }),
        (this.xv = () => {
          this.wv || null === this.fp || this.Hi().Nh();
        }),
        (this.vp = t),
        (this.fp = i),
        this.fp.V_().l(this.pp.bind(this), this, !0),
        (this.mp = document.createElement("td")),
        (this.mp.style.padding = "0"),
        (this.mp.style.position = "relative");
      const n = document.createElement("div");
      (n.style.width = "100%"),
        (n.style.height = "100%"),
        (n.style.position = "relative"),
        (n.style.overflow = "hidden"),
        (this.bp = document.createElement("td")),
        (this.bp.style.padding = "0"),
        (this.wp = document.createElement("td")),
        (this.wp.style.padding = "0"),
        this.mp.appendChild(n),
        (this.Pv = Qn(n, Nn({ width: 16, height: 16 }))),
        this.Pv.subscribeSuggestedBitmapSizeChanged(this.gv);
      const s = this.Pv.canvasElement;
      (s.style.position = "absolute"),
        (s.style.zIndex = "1"),
        (s.style.left = "0"),
        (s.style.top = "0"),
        (this.Rv = Qn(n, Nn({ width: 16, height: 16 }))),
        this.Rv.subscribeSuggestedBitmapSizeChanged(this.xv);
      const e = this.Rv.canvasElement;
      (e.style.position = "absolute"),
        (e.style.zIndex = "2"),
        (e.style.left = "0"),
        (e.style.top = "0"),
        (this.gp = document.createElement("tr")),
        this.gp.appendChild(this.bp),
        this.gp.appendChild(this.mp),
        this.gp.appendChild(this.wp),
        this.Mp(),
        (this.Lv = new es(this.Rv.canvasElement, this, {
          Ef: () => null === this._p && !this.vp.F().handleScroll.vertTouchDrag,
          zf: () => null === this._p && !this.vp.F().handleScroll.horzTouchDrag,
        }));
    }
    M() {
      null !== this.sp && this.sp.M(),
        null !== this.ep && this.ep.M(),
        this.Rv.unsubscribeSuggestedBitmapSizeChanged(this.xv),
        this.Rv.dispose(),
        this.Pv.unsubscribeSuggestedBitmapSizeChanged(this.gv),
        this.Pv.dispose(),
        null !== this.fp && this.fp.V_().p(this),
        this.Lv.M();
    }
    Uv() {
      return f(this.fp);
    }
    xp(t) {
      null !== this.fp && this.fp.V_().p(this),
        (this.fp = t),
        null !== this.fp &&
          this.fp.V_().l(bs.prototype.pp.bind(this), this, !0),
        this.Mp();
    }
    Mv() {
      return this.vp;
    }
    Iv() {
      return this.gp;
    }
    Mp() {
      if (null !== this.fp && (this.Sp(), 0 !== this.Hi().gt().length)) {
        if (null !== this.sp) {
          const t = this.fp.x_();
          this.sp.Gi(f(t));
        }
        if (null !== this.ep) {
          const t = this.fp.S_();
          this.ep.Gi(f(t));
        }
      }
    }
    yp() {
      null !== this.sp && this.sp.wt(), null !== this.ep && this.ep.wt();
    }
    f_() {
      return null !== this.fp ? this.fp.f_() : 0;
    }
    v_(t) {
      this.fp && this.fp.v_(t);
    }
    Df(t) {
      if (!this.fp) return;
      this.kp();
      const i = t.localX,
        n = t.localY;
      this.Cp(i, n, t);
    }
    Zf(t) {
      this.kp(), this.Tp(), this.Cp(t.localX, t.localY, t);
    }
    Of(t) {
      var i;
      if (!this.fp) return;
      this.kp();
      const n = t.localX,
        s = t.localY;
      this.Cp(n, s, t);
      const e = this.mr(n, s);
      this.vp.Pp(
        null !== (i = null == e ? void 0 : e.fv) && void 0 !== i ? i : null
      ),
        this.Hi().Yc(e && { Xc: e.Xc, cv: e.cv });
    }
    Hf(t) {
      null !== this.fp && (this.kp(), this.Rp(t));
    }
    Nf(t) {
      this.kp(), this.Dp(t), this.Cp(t.localX, t.localY, t);
    }
    $f(t) {
      null !== this.fp && (this.kp(), (this.op = !1), this.Op(t));
    }
    jf(t) {
      null !== this.fp && this.Rp(t);
    }
    hv(t) {
      if (((this.op = !0), null === this._p)) {
        const i = { x: t.localX, y: t.localY };
        this.Ap(i, i, t);
      }
    }
    rv(t) {
      null !== this.fp && (this.kp(), this.fp.Ut().Yc(null), this.Bp());
    }
    Vp() {
      return this.lp;
    }
    Qf() {
      (this.ap = 1), this.Hi().Hn();
    }
    tv(t, i) {
      if (!this.vp.F().handleScale.pinch) return;
      const n = 5 * (i - this.ap);
      (this.ap = i), this.Hi().rd(t.st, n);
    }
    Yf(t) {
      if (
        ((this.op = !1),
        (this.up = null !== this._p),
        this.Tp(),
        null !== this._p)
      ) {
        const i = this.Hi().Qc();
        (this.cp = { x: i.Xt(), y: i.Zt() }),
          (this._p = { x: t.localX, y: t.localY });
      }
    }
    Lf(t) {
      if (null === this.fp) return;
      const i = t.localX,
        n = t.localY;
      if (null === this._p) this.Dp(t);
      else {
        this.up = !1;
        const s = f(this.cp),
          e = s.x + (i - this._p.x),
          r = s.y + (n - this._p.y);
        this.Cp(e, r, t);
      }
    }
    Wf(t) {
      0 === this.Mv().F().trackingMode.exitMode && (this.up = !0),
        this.Ep(),
        this.Op(t);
    }
    mr(t, i) {
      const n = this.fp;
      return null === n
        ? null
        : (function (t, i, n) {
            const s = t.Io(),
              e = (function (t, i, n) {
                var s, e;
                let r, h;
                for (const o of t) {
                  const t =
                    null !==
                      (e =
                        null === (s = o.aa) || void 0 === s
                          ? void 0
                          : s.call(o, i, n)) && void 0 !== e
                      ? e
                      : [];
                  for (const i of t)
                    (l = i.zOrder),
                      (!(a = null == r ? void 0 : r.zOrder) ||
                        ("top" === l && "top" !== a) ||
                        ("normal" === l && "bottom" === a)) &&
                        ((r = i), (h = o));
                }
                var l, a;
                return r && h ? { dv: r, Xc: h } : null;
              })(s, i, n);
            if ("top" === (null == e ? void 0 : e.dv.zOrder)) return _s(e);
            for (const r of s) {
              if (
                e &&
                e.Xc === r &&
                "bottom" !== e.dv.zOrder &&
                !e.dv.isBackground
              )
                return _s(e);
              const s = us(r.Tn(t), i, n);
              if (null !== s) return { Xc: r, _v: s._v, cv: s.cv };
              if (
                e &&
                e.Xc === r &&
                "bottom" !== e.dv.zOrder &&
                e.dv.isBackground
              )
                return _s(e);
            }
            return (null == e ? void 0 : e.dv) ? _s(e) : null;
          })(n, t, i);
    }
    zp(t, i) {
      f("left" === i ? this.sp : this.ep).$v(
        Nn({ width: t, height: this.vv.height })
      );
    }
    Lp() {
      return this.vv;
    }
    $v(t) {
      Fn(this.vv, t) ||
        ((this.vv = t),
        (this.wv = !0),
        this.Pv.resizeCanvasElement(t),
        this.Rv.resizeCanvasElement(t),
        (this.wv = !1),
        (this.mp.style.width = t.width + "px"),
        (this.mp.style.height = t.height + "px"));
    }
    Ip() {
      const t = f(this.fp);
      t.M_(t.x_()), t.M_(t.S_());
      for (const i of t.Ca())
        if (t.cr(i)) {
          const n = i.Ot();
          null !== n && t.M_(n), i.Dn();
        }
    }
    Qv() {
      return this.Pv.bitmapSize;
    }
    tp(t, i, n) {
      const s = this.Qv();
      s.width > 0 && s.height > 0 && t.drawImage(this.Pv.canvasElement, i, n);
    }
    qv(t) {
      if (0 === t) return;
      if (null === this.fp) return;
      if (
        (t > 1 && this.Ip(),
        null !== this.sp && this.sp.qv(t),
        null !== this.ep && this.ep.qv(t),
        1 !== t)
      ) {
        this.Pv.applySuggestedBitmapSize();
        const t = Un(this.Pv);
        null !== t &&
          (t.useBitmapCoordinateSpace((t) => {
            this.Xv(t);
          }),
          this.fp &&
            (this.Np(t, fs),
            this.Fp(t),
            this.Wp(t),
            this.Np(t, vs),
            this.Np(t, ps)));
      }
      this.Rv.applySuggestedBitmapSize();
      const i = Un(this.Rv);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
          t.clearRect(0, 0, i.width, i.height);
        }),
        this.jp(i),
        this.Np(i, ms));
    }
    $p() {
      return this.sp;
    }
    Hp() {
      return this.ep;
    }
    Zv(t, i) {
      this.Np(t, i);
    }
    pp() {
      null !== this.fp && this.fp.V_().p(this), (this.fp = null);
    }
    Rp(t) {
      const i = t.localX,
        n = t.localY;
      this.lp.g() && this.lp.m(this.Hi().yt().Hu(i), { x: i, y: n }, t);
    }
    Xv({ context: t, bitmapSize: i }) {
      const { width: n, height: s } = i,
        e = this.Hi(),
        r = e.U(),
        h = e.xd();
      r === h ? Y(t, 0, 0, n, s, h) : G(t, 0, 0, n, s, r, h);
    }
    Fp(t) {
      const i = f(this.fp).E_().Fh().Mt();
      null !== i && i.X(t, !1);
    }
    Wp(t) {
      const i = this.Hi().Jc();
      this.Up(t, vs, ts, i), this.Up(t, vs, is, i);
    }
    jp(t) {
      this.Up(t, vs, is, this.Hi().Qc());
    }
    Np(t, i) {
      const n = f(this.fp).Io();
      for (const s of n) this.Up(t, i, ts, s);
      for (const s of n) this.Up(t, i, is, s);
    }
    Up(t, i, n, s) {
      const e = f(this.fp),
        r = e.Ut().qc(),
        h = null !== r && r.Xc === s,
        l = null !== r && h && void 0 !== r.cv ? r.cv.wr : void 0;
      ns(i, (i) => n(i, t, h, l), s, e);
    }
    Sp() {
      if (null === this.fp) return;
      const t = this.vp,
        i = this.fp.x_().F().visible,
        n = this.fp.S_().F().visible;
      i ||
        null === this.sp ||
        (this.bp.removeChild(this.sp.Iv()), this.sp.M(), (this.sp = null)),
        n ||
          null === this.ep ||
          (this.wp.removeChild(this.ep.Iv()), this.ep.M(), (this.ep = null));
      const s = t.Ut().pd();
      i &&
        null === this.sp &&
        ((this.sp = new ds(this, t.F(), s, "left")),
        this.bp.appendChild(this.sp.Iv())),
        n &&
          null === this.ep &&
          ((this.ep = new ds(this, t.F(), s, "right")),
          this.wp.appendChild(this.ep.Iv()));
    }
    qp(t) {
      return (t.lv && this.op) || null !== this._p;
    }
    Yp(t) {
      return Math.max(0, Math.min(t, this.vv.width - 1));
    }
    Xp(t) {
      return Math.max(0, Math.min(t, this.vv.height - 1));
    }
    Cp(t, i, n) {
      this.Hi().dd(this.Yp(t), this.Xp(i), n, f(this.fp));
    }
    Bp() {
      this.Hi().fd();
    }
    Ep() {
      this.up && ((this._p = null), this.Bp());
    }
    Ap(t, i, n) {
      (this._p = t), (this.up = !1), this.Cp(i.x, i.y, n);
      const s = this.Hi().Qc();
      this.cp = { x: s.Xt(), y: s.Zt() };
    }
    Hi() {
      return this.vp.Ut();
    }
    Op(t) {
      if (!this.hp) return;
      const i = this.Hi(),
        n = this.Uv();
      if (
        (i.R_(n, n.fn()),
        (this.rp = null),
        (this.hp = !1),
        i.od(),
        null !== this.dp)
      ) {
        const t = performance.now(),
          n = i.yt();
        this.dp.Rr(n.Xu(), t), this.dp.rc(t) || i.Yn(this.dp);
      }
    }
    kp() {
      this._p = null;
    }
    Tp() {
      if (!this.fp) return;
      if (
        (this.Hi().Hn(),
        document.activeElement !== document.body &&
          document.activeElement !== document.documentElement)
      )
        f(document.activeElement).blur();
      else {
        const t = document.getSelection();
        null !== t && t.removeAllRanges();
      }
      !this.fp.fn().Ni() && this.Hi().yt().Ni();
    }
    Dp(t) {
      if (null === this.fp) return;
      const i = this.Hi(),
        n = i.yt();
      if (n.Ni()) return;
      const s = this.vp.F(),
        e = s.handleScroll,
        r = s.kineticScroll;
      if (
        (!e.pressedMouseMove || t.lv) &&
        ((!e.horzTouchDrag && !e.vertTouchDrag) || !t.lv)
      )
        return;
      const h = this.fp.fn(),
        l = performance.now();
      if (
        (null !== this.rp ||
          this.qp(t) ||
          (this.rp = {
            x: t.clientX,
            y: t.clientY,
            G_: l,
            Zp: t.localX,
            Kp: t.localY,
          }),
        null !== this.rp &&
          !this.hp &&
          (this.rp.x !== t.clientX || this.rp.y !== t.clientY))
      ) {
        if ((t.lv && r.touch) || (!t.lv && r.mouse)) {
          const t = n.re();
          (this.dp = new Jn(0.2 / t, 7 / t, 0.997, 15 / t)),
            this.dp.Ed(n.Xu(), this.rp.G_);
        } else this.dp = null;
        h.Ni() || i.T_(this.fp, h, t.localY), i.ld(t.localX), (this.hp = !0);
      }
      this.hp &&
        (h.Ni() || i.P_(this.fp, h, t.localY),
        i.ad(t.localX),
        null !== this.dp && this.dp.Ed(n.Xu(), l));
    }
  }
  class ws {
    constructor(t, i, n, s, e) {
      (this.vt = !0),
        (this.vv = Nn({ width: 0, height: 0 })),
        (this.gv = () => this.qv(3)),
        (this.Sv = "left" === t),
        (this.Lc = n.pd),
        (this.un = i),
        (this.Gp = s),
        (this.Jp = e),
        (this.Tv = document.createElement("div")),
        (this.Tv.style.width = "25px"),
        (this.Tv.style.height = "100%"),
        (this.Tv.style.overflow = "hidden"),
        (this.Pv = Qn(this.Tv, Nn({ width: 16, height: 16 }))),
        this.Pv.subscribeSuggestedBitmapSizeChanged(this.gv);
    }
    M() {
      this.Pv.unsubscribeSuggestedBitmapSizeChanged(this.gv), this.Pv.dispose();
    }
    Iv() {
      return this.Tv;
    }
    Lp() {
      return this.vv;
    }
    $v(t) {
      Fn(this.vv, t) ||
        ((this.vv = t),
        this.Pv.resizeCanvasElement(t),
        (this.Tv.style.width = `${t.width}px`),
        (this.Tv.style.height = `${t.height}px`),
        (this.vt = !0));
    }
    qv(t) {
      if (t < 3 && !this.vt) return;
      if (0 === this.vv.width || 0 === this.vv.height) return;
      (this.vt = !1), this.Pv.applySuggestedBitmapSize();
      const i = Un(this.Pv);
      null !== i &&
        i.useBitmapCoordinateSpace((t) => {
          this.Xv(t), this.Be(t);
        });
    }
    Qv() {
      return this.Pv.bitmapSize;
    }
    tp(t, i, n) {
      const s = this.Qv();
      s.width > 0 && s.height > 0 && t.drawImage(this.Pv.canvasElement, i, n);
    }
    Be({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (!this.Gp()) return;
      t.fillStyle = this.un.timeScale.borderColor;
      const e = Math.floor(this.Lc.F().k * n),
        r = Math.floor(this.Lc.F().k * s),
        h = this.Sv ? i.width - e : 0;
      t.fillRect(h, 0, e, r);
    }
    Xv({ context: t, bitmapSize: i }) {
      Y(t, 0, 0, i.width, i.height, this.Jp());
    }
  }
  function gs(t, i) {
    return t.hu > i.hu ? t : i;
  }
  function Ms(t) {
    return (i) => {
      var n, s;
      return null !==
        (s = null === (n = i.la) || void 0 === n ? void 0 : n.call(i, t)) &&
        void 0 !== s
        ? s
        : [];
    };
  }
  const xs = Ms("normal"),
    Ss = Ms("top"),
    ys = Ms("bottom");
  class ks {
    constructor(t) {
      (this.Qp = null),
        (this.tm = null),
        (this.S = null),
        (this.im = !1),
        (this.vv = Nn({ width: 0, height: 0 })),
        (this.nm = new k()),
        (this.mv = new Qt(5)),
        (this.wv = !1),
        (this.gv = () => {
          this.wv || this.vp.Ut().Nh();
        }),
        (this.xv = () => {
          this.wv || this.vp.Ut().Nh();
        }),
        (this.vp = t),
        (this.un = t.F().layout),
        (this.sm = document.createElement("tr")),
        (this.rm = document.createElement("td")),
        (this.rm.style.padding = "0"),
        (this.hm = document.createElement("td")),
        (this.hm.style.padding = "0"),
        (this.Tv = document.createElement("td")),
        (this.Tv.style.height = "25px"),
        (this.Tv.style.padding = "0"),
        (this.lm = document.createElement("div")),
        (this.lm.style.width = "100%"),
        (this.lm.style.height = "100%"),
        (this.lm.style.position = "relative"),
        (this.lm.style.overflow = "hidden"),
        this.Tv.appendChild(this.lm),
        (this.Pv = Qn(this.lm, Nn({ width: 16, height: 16 }))),
        this.Pv.subscribeSuggestedBitmapSizeChanged(this.gv);
      const i = this.Pv.canvasElement;
      (i.style.position = "absolute"),
        (i.style.zIndex = "1"),
        (i.style.left = "0"),
        (i.style.top = "0"),
        (this.Rv = Qn(this.lm, Nn({ width: 16, height: 16 }))),
        this.Rv.subscribeSuggestedBitmapSizeChanged(this.xv);
      const n = this.Rv.canvasElement;
      (n.style.position = "absolute"),
        (n.style.zIndex = "2"),
        (n.style.left = "0"),
        (n.style.top = "0"),
        this.sm.appendChild(this.rm),
        this.sm.appendChild(this.Tv),
        this.sm.appendChild(this.hm),
        this.am(),
        this.vp.Ut().d_().l(this.am.bind(this), this),
        (this.Lv = new es(this.Rv.canvasElement, this, {
          Ef: () => !0,
          zf: () => !1,
        }));
    }
    M() {
      this.Lv.M(),
        null !== this.Qp && this.Qp.M(),
        null !== this.tm && this.tm.M(),
        this.Rv.unsubscribeSuggestedBitmapSizeChanged(this.xv),
        this.Rv.dispose(),
        this.Pv.unsubscribeSuggestedBitmapSizeChanged(this.gv),
        this.Pv.dispose();
    }
    Iv() {
      return this.sm;
    }
    om() {
      return this.Qp;
    }
    _m() {
      return this.tm;
    }
    Zf(t) {
      if (this.im) return;
      this.im = !0;
      const i = this.vp.Ut();
      !i.yt().Ni() &&
        this.vp.F().handleScale.axisPressedMouseMove.time &&
        i.ed(t.localX);
    }
    Yf(t) {
      this.Zf(t);
    }
    Kf() {
      const t = this.vp.Ut();
      !t.yt().Ni() &&
        this.im &&
        ((this.im = !1),
        this.vp.F().handleScale.axisPressedMouseMove.time && t.ud());
    }
    Nf(t) {
      const i = this.vp.Ut();
      !i.yt().Ni() &&
        this.vp.F().handleScale.axisPressedMouseMove.time &&
        i._d(t.localX);
    }
    Lf(t) {
      this.Nf(t);
    }
    $f() {
      this.im = !1;
      const t = this.vp.Ut();
      (t.yt().Ni() && !this.vp.F().handleScale.axisPressedMouseMove.time) ||
        t.ud();
    }
    Wf() {
      this.$f();
    }
    Sf() {
      this.vp.F().handleScale.axisDoubleClickReset.time && this.vp.Ut().Zn();
    }
    wf() {
      this.Sf();
    }
    Df() {
      this.vp.Ut().F().handleScale.axisPressedMouseMove.time && this.ip(1);
    }
    rv() {
      this.ip(0);
    }
    Lp() {
      return this.vv;
    }
    um() {
      return this.nm;
    }
    dm(t, i, n) {
      Fn(this.vv, t) ||
        ((this.vv = t),
        (this.wv = !0),
        this.Pv.resizeCanvasElement(t),
        this.Rv.resizeCanvasElement(t),
        (this.wv = !1),
        (this.Tv.style.width = `${t.width}px`),
        (this.Tv.style.height = `${t.height}px`),
        this.nm.m(t)),
        null !== this.Qp && this.Qp.$v(Nn({ width: i, height: t.height })),
        null !== this.tm && this.tm.$v(Nn({ width: n, height: t.height }));
    }
    fm() {
      const t = this.vm();
      return Math.ceil(t.k + t.C + t.T + t.L + t.A + t.pm);
    }
    wt() {
      this.vp.Ut().yt().za();
    }
    Qv() {
      return this.Pv.bitmapSize;
    }
    tp(t, i, n) {
      const s = this.Qv();
      s.width > 0 && s.height > 0 && t.drawImage(this.Pv.canvasElement, i, n);
    }
    qv(t) {
      if (0 === t) return;
      if (1 !== t) {
        this.Pv.applySuggestedBitmapSize();
        const i = Un(this.Pv);
        null !== i &&
          (i.useBitmapCoordinateSpace((t) => {
            this.Xv(t), this.Be(t), this.bm(i, ys);
          }),
          this.Kv(i),
          this.bm(i, xs)),
          null !== this.Qp && this.Qp.qv(t),
          null !== this.tm && this.tm.qv(t);
      }
      this.Rv.applySuggestedBitmapSize();
      const i = Un(this.Rv);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
          t.clearRect(0, 0, i.width, i.height);
        }),
        this.wm([...this.vp.Ut().gt(), this.vp.Ut().Qc()], i),
        this.bm(i, Ss));
    }
    bm(t, i) {
      const n = this.vp.Ut().gt();
      for (const s of n) ns(i, (i) => ts(i, t, !1, void 0), s, void 0);
      for (const s of n) ns(i, (i) => is(i, t, !1, void 0), s, void 0);
    }
    Xv({ context: t, bitmapSize: i }) {
      Y(t, 0, 0, i.width, i.height, this.vp.Ut().xd());
    }
    Be({ context: t, bitmapSize: i, verticalPixelRatio: n }) {
      if (this.vp.F().timeScale.borderVisible) {
        t.fillStyle = this.gm();
        const s = Math.max(1, Math.floor(this.vm().k * n));
        t.fillRect(0, 0, i.width, s);
      }
    }
    Kv(t) {
      const i = this.vp.Ut().yt(),
        n = i.za();
      if (!n || 0 === n.length) return;
      let s = n.reduce(gs, n[0]).hu;
      s > 30 && s < 50 && (s = 30);
      const e = this.vm(),
        r = i.F();
      r.borderVisible &&
        r.ticksVisible &&
        t.useBitmapCoordinateSpace(
          ({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) => {
            (t.strokeStyle = this.gm()), (t.fillStyle = this.gm());
            const r = Math.max(1, Math.floor(i)),
              h = Math.floor(0.5 * i);
            t.beginPath();
            const l = Math.round(e.C * s);
            for (let s = n.length; s--; ) {
              const e = Math.round(n[s].Oa * i);
              t.rect(e - h, 0, r, l);
            }
            t.fill();
          }
        ),
        t.useMediaCoordinateSpace(({ context: t }) => {
          const i = e.k + e.C + e.L + e.T / 2;
          (t.textAlign = "center"),
            (t.textBaseline = "middle"),
            (t.fillStyle = this.$()),
            (t.font = this.Wv());
          for (const e of n)
            if (e.hu < s) {
              const n = e.Gu ? this.Mm(t, e.Oa, e.Za) : e.Oa;
              t.fillText(e.Za, n, i);
            }
          t.font = this.xm();
          for (const e of n)
            if (e.hu >= s) {
              const n = e.Gu ? this.Mm(t, e.Oa, e.Za) : e.Oa;
              t.fillText(e.Za, n, i);
            }
        });
    }
    Mm(t, i, n) {
      const s = this.mv.xi(t, n),
        e = s / 2,
        r = Math.floor(i - e) + 0.5;
      return (
        r < 0
          ? (i += Math.abs(0 - r))
          : r + s > this.vv.width && (i -= Math.abs(this.vv.width - (r + s))),
        i
      );
    }
    wm(t, i) {
      const n = this.vm();
      for (const s of t) for (const t of s.Qi()) t.Mt().X(i, n);
    }
    gm() {
      return this.vp.F().timeScale.borderColor;
    }
    $() {
      return this.un.textColor;
    }
    W() {
      return this.un.fontSize;
    }
    Wv() {
      return E(this.W(), this.un.fontFamily);
    }
    xm() {
      return E(this.W(), this.un.fontFamily, "bold");
    }
    vm() {
      null === this.S &&
        (this.S = {
          k: 1,
          I: NaN,
          L: NaN,
          A: NaN,
          ji: NaN,
          C: 5,
          T: NaN,
          P: "",
          Wi: new Qt(),
          pm: 0,
        });
      const t = this.S,
        i = this.Wv();
      if (t.P !== i) {
        const n = this.W();
        (t.T = n),
          (t.P = i),
          (t.L = (3 * n) / 12),
          (t.A = (3 * n) / 12),
          (t.ji = (9 * n) / 12),
          (t.I = 0),
          (t.pm = (4 * n) / 12),
          t.Wi.tr();
      }
      return this.S;
    }
    ip(t) {
      this.Tv.style.cursor = 1 === t ? "ew-resize" : "default";
    }
    am() {
      const t = this.vp.Ut(),
        i = t.F();
      i.leftPriceScale.visible ||
        null === this.Qp ||
        (this.rm.removeChild(this.Qp.Iv()), this.Qp.M(), (this.Qp = null)),
        i.rightPriceScale.visible ||
          null === this.tm ||
          (this.hm.removeChild(this.tm.Iv()), this.tm.M(), (this.tm = null));
      const n = { pd: this.vp.Ut().pd() },
        s = () => i.leftPriceScale.borderVisible && t.yt().F().borderVisible,
        e = () => t.xd();
      i.leftPriceScale.visible &&
        null === this.Qp &&
        ((this.Qp = new ws("left", i, n, s, e)),
        this.rm.appendChild(this.Qp.Iv())),
        i.rightPriceScale.visible &&
          null === this.tm &&
          ((this.tm = new ws("right", i, n, s, e)),
          this.hm.appendChild(this.tm.Iv()));
    }
  }
  const Cs =
    !!qn &&
    !!navigator.userAgentData &&
    navigator.userAgentData.brands.some((t) => t.brand.includes("Chromium")) &&
    !!qn &&
    ((
      null ===
        (Ts =
          null === navigator || void 0 === navigator
            ? void 0
            : navigator.userAgentData) || void 0 === Ts
        ? void 0
        : Ts.platform
    )
      ? "Windows" === navigator.userAgentData.platform
      : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
  var Ts;
  class Ps {
    constructor(t, i) {
      var n;
      (this.Sm = []),
        (this.ym = 0),
        (this.Ja = 0),
        (this.s_ = 0),
        (this.km = 0),
        (this.Cm = 0),
        (this.Tm = null),
        (this.Pm = !1),
        (this.lp = new k()),
        (this.Vc = new k()),
        (this.Rm = null),
        (this.Dm = null),
        (this.Om = t),
        (this.un = i),
        (this.sm = document.createElement("div")),
        this.sm.classList.add("tv-lightweight-charts"),
        (this.sm.style.overflow = "hidden"),
        (this.sm.style.direction = "ltr"),
        (this.sm.style.width = "100%"),
        (this.sm.style.height = "100%"),
        ((n = this.sm).style.userSelect = "none"),
        (n.style.webkitUserSelect = "none"),
        (n.style.msUserSelect = "none"),
        (n.style.MozUserSelect = "none"),
        (n.style.webkitTapHighlightColor = "transparent"),
        (this.Am = document.createElement("table")),
        this.Am.setAttribute("cellspacing", "0"),
        this.sm.appendChild(this.Am),
        (this.Bm = this.Vm.bind(this)),
        Rs(this.un) && this.Em(!0),
        (this.Hi = new zn(this.zc.bind(this), this.un)),
        this.Ut().td().l(this.zm.bind(this), this),
        (this.Lm = new ks(this)),
        this.Am.appendChild(this.Lm.Iv());
      const s = i.autoSize && this.Im();
      let e = this.un.width,
        r = this.un.height;
      if (s || 0 === e || 0 === r) {
        const i = t.getBoundingClientRect();
        (e = e || i.width), (r = r || i.height);
      }
      this.Nm(e, r),
        this.Fm(),
        t.appendChild(this.sm),
        this.Wm(),
        this.Hi.yt().oc().l(this.Hi.$l.bind(this.Hi), this),
        this.Hi.d_().l(this.Hi.$l.bind(this.Hi), this);
    }
    Ut() {
      return this.Hi;
    }
    F() {
      return this.un;
    }
    jm() {
      return this.Sm;
    }
    $m() {
      return this.Lm;
    }
    M() {
      this.Em(!1),
        0 !== this.ym && window.cancelAnimationFrame(this.ym),
        this.Hi.td().p(this),
        this.Hi.yt().oc().p(this),
        this.Hi.d_().p(this),
        this.Hi.M();
      for (const t of this.Sm)
        this.Am.removeChild(t.Iv()), t.Vp().p(this), t.M();
      (this.Sm = []),
        f(this.Lm).M(),
        null !== this.sm.parentElement &&
          this.sm.parentElement.removeChild(this.sm),
        this.Vc.M(),
        this.lp.M(),
        this.Hm();
    }
    Nm(t, i, n = !1) {
      if (this.Ja === i && this.s_ === t) return;
      const s = (function (t) {
        const i = Math.floor(t.width),
          n = Math.floor(t.height);
        return Nn({ width: i - (i % 2), height: n - (n % 2) });
      })(Nn({ width: t, height: i }));
      (this.Ja = s.height), (this.s_ = s.width);
      const e = this.Ja + "px",
        r = this.s_ + "px";
      (f(this.sm).style.height = e),
        (f(this.sm).style.width = r),
        (this.Am.style.height = e),
        (this.Am.style.width = r),
        n ? this.Um(at.ss(), performance.now()) : this.Hi.$l();
    }
    qv(t) {
      void 0 === t && (t = at.ss());
      for (let i = 0; i < this.Sm.length; i++) this.Sm[i].qv(t.jn(i).Nn);
      this.un.timeScale.visible && this.Lm.qv(t.Wn());
    }
    Ih(t) {
      const i = Rs(this.un);
      this.Hi.Ih(t);
      const n = Rs(this.un);
      n !== i && this.Em(n), this.Wm(), this.qm(t);
    }
    Vp() {
      return this.lp;
    }
    td() {
      return this.Vc;
    }
    Ym() {
      null !== this.Tm &&
        (this.Um(this.Tm, performance.now()), (this.Tm = null));
      const t = this.Xm(null),
        i = document.createElement("canvas");
      (i.width = t.width), (i.height = t.height);
      const n = f(i.getContext("2d"));
      return this.Xm(n), i;
    }
    Zm(t) {
      if ("left" === t && !this.Km()) return 0;
      if ("right" === t && !this.Gm()) return 0;
      if (0 === this.Sm.length) return 0;
      return f("left" === t ? this.Sm[0].$p() : this.Sm[0].Hp()).Hv();
    }
    Jm() {
      return this.un.autoSize && null !== this.Rm;
    }
    Qm() {
      return this.sm;
    }
    Pp(t) {
      (this.Dm = t),
        this.Dm
          ? this.Qm().style.setProperty("cursor", t)
          : this.Qm().style.removeProperty("cursor");
    }
    tb() {
      return this.Dm;
    }
    qm(t) {
      (void 0 !== t.autoSize ||
        !this.Rm ||
        (void 0 === t.width && void 0 === t.height)) &&
        (t.autoSize && !this.Rm && this.Im(),
        !1 === t.autoSize && null !== this.Rm && this.Hm(),
        t.autoSize ||
          (void 0 === t.width && void 0 === t.height) ||
          this.Nm(t.width || this.s_, t.height || this.Ja));
    }
    Xm(t) {
      let i = 0,
        n = 0;
      const s = this.Sm[0],
        e = (i, n) => {
          let s = 0;
          for (let e = 0; e < this.Sm.length; e++) {
            const r = this.Sm[e],
              h = f("left" === i ? r.$p() : r.Hp()),
              l = h.Qv();
            null !== t && h.tp(t, n, s), (s += l.height);
          }
        };
      if (this.Km()) {
        e("left", 0);
        i += f(s.$p()).Qv().width;
      }
      for (let s = 0; s < this.Sm.length; s++) {
        const e = this.Sm[s],
          r = e.Qv();
        null !== t && e.tp(t, i, n), (n += r.height);
      }
      if (((i += s.Qv().width), this.Gm())) {
        e("right", i);
        i += f(s.Hp()).Qv().width;
      }
      const r = (i, n, s) => {
        f("left" === i ? this.Lm.om() : this.Lm._m()).tp(f(t), n, s);
      };
      if (this.un.timeScale.visible) {
        const i = this.Lm.Qv();
        if (null !== t) {
          let e = 0;
          this.Km() && (r("left", e, n), (e = f(s.$p()).Qv().width)),
            this.Lm.tp(t, e, n),
            (e += i.width),
            this.Gm() && r("right", e, n);
        }
        n += i.height;
      }
      return Nn({ width: i, height: n });
    }
    ib() {
      let t = 0,
        i = 0,
        n = 0;
      for (const s of this.Sm)
        this.Km() && (i = Math.max(i, f(s.$p()).Fv())),
          this.Gm() && (n = Math.max(n, f(s.Hp()).Fv())),
          (t += s.f_());
      (i = Zn(i)), (n = Zn(n));
      const s = this.s_,
        e = this.Ja,
        r = Math.max(s - i - n, 0),
        h = this.un.timeScale.visible;
      let l = h ? this.Lm.fm() : 0;
      var a;
      l = (a = l) + (a % 2);
      const o = 0 + l,
        _ = e < o ? 0 : e - o,
        u = _ / t;
      let c = 0;
      for (let t = 0; t < this.Sm.length; ++t) {
        const s = this.Sm[t];
        s.xp(this.Hi.Gc()[t]);
        let e = 0,
          h = 0;
        (h = t === this.Sm.length - 1 ? _ - c : Math.round(s.f_() * u)),
          (e = Math.max(h, 2)),
          (c += e),
          s.$v(Nn({ width: r, height: e })),
          this.Km() && s.zp(i, "left"),
          this.Gm() && s.zp(n, "right"),
          s.Uv() && this.Hi.nd(s.Uv(), e);
      }
      this.Lm.dm(Nn({ width: h ? r : 0, height: l }), h ? i : 0, h ? n : 0),
        this.Hi.p_(r),
        this.km !== i && (this.km = i),
        this.Cm !== n && (this.Cm = n);
    }
    Em(t) {
      t
        ? this.sm.addEventListener("wheel", this.Bm, { passive: !1 })
        : this.sm.removeEventListener("wheel", this.Bm);
    }
    nb(t) {
      switch (t.deltaMode) {
        case t.DOM_DELTA_PAGE:
          return 120;
        case t.DOM_DELTA_LINE:
          return 32;
      }
      return Cs ? 1 / window.devicePixelRatio : 1;
    }
    Vm(t) {
      if (
        !(
          (0 !== t.deltaX && this.un.handleScroll.mouseWheel) ||
          (0 !== t.deltaY && this.un.handleScale.mouseWheel)
        )
      )
        return;
      const i = this.nb(t),
        n = (i * t.deltaX) / 100,
        s = (-i * t.deltaY) / 100;
      if (
        (t.cancelable && t.preventDefault(),
        0 !== s && this.un.handleScale.mouseWheel)
      ) {
        const i = Math.sign(s) * Math.min(1, Math.abs(s)),
          n = t.clientX - this.sm.getBoundingClientRect().left;
        this.Ut().rd(n, i);
      }
      0 !== n && this.un.handleScroll.mouseWheel && this.Ut().hd(-80 * n);
    }
    Um(t, i) {
      var n;
      const s = t.Wn();
      3 === s && this.sb(),
        (3 !== s && 2 !== s) ||
          (this.eb(t),
          this.rb(t, i),
          this.Lm.wt(),
          this.Sm.forEach((t) => {
            t.yp();
          }),
          3 === (null === (n = this.Tm) || void 0 === n ? void 0 : n.Wn()) &&
            (this.Tm.Qn(t),
            this.sb(),
            this.eb(this.Tm),
            this.rb(this.Tm, i),
            (t = this.Tm),
            (this.Tm = null))),
        this.qv(t);
    }
    rb(t, i) {
      for (const n of t.Jn()) this.ts(n, i);
    }
    eb(t) {
      const i = this.Hi.Gc();
      for (let n = 0; n < i.length; n++) t.jn(n).Fn && i[n].A_();
    }
    ts(t, i) {
      const n = this.Hi.yt();
      switch (t.Un) {
        case 0:
          n.uc();
          break;
        case 1:
          n.cc(t.At);
          break;
        case 2:
          n.Kn(t.At);
          break;
        case 3:
          n.Gn(t.At);
          break;
        case 4:
          n.Ju();
          break;
        case 5:
          t.At.rc(i) || n.Gn(t.At.hc(i));
      }
    }
    zc(t) {
      null !== this.Tm ? this.Tm.Qn(t) : (this.Tm = t),
        this.Pm ||
          ((this.Pm = !0),
          (this.ym = window.requestAnimationFrame((t) => {
            if (((this.Pm = !1), (this.ym = 0), null !== this.Tm)) {
              const i = this.Tm;
              (this.Tm = null), this.Um(i, t);
              for (const n of i.Jn())
                if (5 === n.Un && !n.At.rc(t)) {
                  this.Ut().Yn(n.At);
                  break;
                }
            }
          })));
    }
    sb() {
      this.Fm();
    }
    Fm() {
      const t = this.Hi.Gc(),
        i = t.length,
        n = this.Sm.length;
      for (let t = i; t < n; t++) {
        const t = d(this.Sm.pop());
        this.Am.removeChild(t.Iv()), t.Vp().p(this), t.M();
      }
      for (let s = n; s < i; s++) {
        const i = new bs(this, t[s]);
        i.Vp().l(this.hb.bind(this), this),
          this.Sm.push(i),
          this.Am.insertBefore(i.Iv(), this.Lm.Iv());
      }
      for (let n = 0; n < i; n++) {
        const i = t[n],
          s = this.Sm[n];
        s.Uv() !== i ? s.xp(i) : s.Mp();
      }
      this.Wm(), this.ib();
    }
    lb(t, i, n) {
      var s;
      const e = new Map();
      if (null !== t) {
        this.Hi.gt().forEach((i) => {
          const n = i.Vn().il(t);
          null !== n && e.set(i, n);
        });
      }
      let r;
      if (null !== t) {
        const i =
          null === (s = this.Hi.yt().Ui(t)) || void 0 === s ? void 0 : s.lu;
        void 0 !== i && (r = i);
      }
      const h = this.Ut().qc(),
        l = null !== h && h.Xc instanceof qi ? h.Xc : void 0,
        a = null !== h && void 0 !== h.cv ? h.cv.br : void 0;
      return {
        _t: r,
        ne: null != t ? t : void 0,
        ab: null != i ? i : void 0,
        ob: l,
        _b: e,
        ub: a,
        cb: null != n ? n : void 0,
      };
    }
    hb(t, i, n) {
      this.lp.m(() => this.lb(t, i, n));
    }
    zm(t, i, n) {
      this.Vc.m(() => this.lb(t, i, n));
    }
    Wm() {
      const t = this.un.timeScale.visible ? "" : "none";
      this.Lm.Iv().style.display = t;
    }
    Km() {
      return this.Sm[0].Uv().x_().F().visible;
    }
    Gm() {
      return this.Sm[0].Uv().S_().F().visible;
    }
    Im() {
      return (
        "ResizeObserver" in window &&
        ((this.Rm = new ResizeObserver((t) => {
          const i = t.find((t) => t.target === this.Om);
          i && this.Nm(i.contentRect.width, i.contentRect.height);
        })),
        this.Rm.observe(this.Om, { box: "border-box" }),
        !0)
      );
    }
    Hm() {
      null !== this.Rm && this.Rm.disconnect(), (this.Rm = null);
    }
  }
  function Rs(t) {
    return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
  }
  function Ds(t, i) {
    var n = {};
    for (var s in t)
      Object.prototype.hasOwnProperty.call(t, s) &&
        i.indexOf(s) < 0 &&
        (n[s] = t[s]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
      var e = 0;
      for (s = Object.getOwnPropertySymbols(t); e < s.length; e++)
        i.indexOf(s[e]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, s[e]) &&
          (n[s[e]] = t[s[e]]);
    }
    return n;
  }
  function Os(t, i, n, s) {
    const e = n.value,
      r = { ne: i, _t: t, At: [e, e, e, e], lu: s };
    return void 0 !== n.color && (r.D = n.color), r;
  }
  function As(t) {
    return void 0 !== t.At;
  }
  function Bs(t, i) {
    return void 0 !== i.customValues && (t.fb = i.customValues), t;
  }
  function Vs(t) {
    return (i, n, s, e, r, h) =>
      (function (t, i) {
        return i ? i(t) : void 0 === (n = t).open && void 0 === n.value;
        var n;
      })(s, h)
        ? Bs({ _t: i, ne: n, lu: e }, s)
        : Bs(t(i, n, s, e, r), s);
  }
  const Es = {
    Candlestick: Vs(function (t, i, n, s) {
      const e = { ne: i, _t: t, At: [n.open, n.high, n.low, n.close], lu: s };
      return (
        void 0 !== n.color && (e.D = n.color),
        void 0 !== n.borderColor && (e.Bt = n.borderColor),
        void 0 !== n.wickColor && (e.$h = n.wickColor),
        e
      );
    }),
    Bar: Vs(function (t, i, n, s) {
      const e = { ne: i, _t: t, At: [n.open, n.high, n.low, n.close], lu: s };
      return void 0 !== n.color && (e.D = n.color), e;
    }),
    Area: Vs(function (t, i, n, s) {
      const e = n.value,
        r = { ne: i, _t: t, At: [e, e, e, e], lu: s };
      return (
        void 0 !== n.lineColor && (r.ot = n.lineColor),
        void 0 !== n.topColor && (r.Cs = n.topColor),
        void 0 !== n.bottomColor && (r.Ts = n.bottomColor),
        r
      );
    }),
    Baseline: Vs(function (t, i, n, s) {
      const e = n.value,
        r = { ne: i, _t: t, At: [e, e, e, e], lu: s };
      return (
        void 0 !== n.topLineColor && (r.Te = n.topLineColor),
        void 0 !== n.bottomLineColor && (r.Pe = n.bottomLineColor),
        void 0 !== n.topFillColor1 && (r.xe = n.topFillColor1),
        void 0 !== n.topFillColor2 && (r.Se = n.topFillColor2),
        void 0 !== n.bottomFillColor1 && (r.ye = n.bottomFillColor1),
        void 0 !== n.bottomFillColor2 && (r.ke = n.bottomFillColor2),
        r
      );
    }),
    Histogram: Vs(Os),
    Line: Vs(Os),
    Custom: Vs(function (t, i, n, s, e) {
      const r = d(e)(n),
        h = Math.max(...r),
        l = Math.min(...r),
        a = r[r.length - 1],
        o = [a, h, l, a],
        _ = n,
        { time: u, color: c } = _;
      return { ne: i, _t: t, At: o, lu: s, je: Ds(_, ["time", "color"]), D: c };
    }),
  };
  function zs(t) {
    return Es[t];
  }
  function Ls(t) {
    return 60 * t * 60 * 1e3;
  }
  function Is(t) {
    return 60 * t * 1e3;
  }
  const Ns = [
    { vb: ((Fs = 1), 1e3 * Fs), hu: 10 },
    { vb: Is(1), hu: 20 },
    { vb: Is(5), hu: 21 },
    { vb: Is(30), hu: 22 },
    { vb: Ls(1), hu: 30 },
    { vb: Ls(3), hu: 31 },
    { vb: Ls(6), hu: 32 },
    { vb: Ls(12), hu: 33 },
  ];
  var Fs;
  function Ws(t, i) {
    if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
    if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
    if (t.getUTCDate() !== i.getUTCDate()) return 50;
    for (let n = Ns.length - 1; n >= 0; --n)
      if (
        Math.floor(i.getTime() / Ns[n].vb) !==
        Math.floor(t.getTime() / Ns[n].vb)
      )
        return Ns[n].hu;
    return 0;
  }
  function js(t, i = 0) {
    if (0 === t.length) return;
    let n = 0 === i ? null : t[i - 1]._t.G_,
      s = null !== n ? new Date(1e3 * n) : null,
      e = 0;
    for (let r = i; r < t.length; ++r) {
      const i = t[r],
        h = new Date(1e3 * i._t.G_);
      null !== s && (i.ru = Ws(h, s)),
        (e += i._t.G_ - (n || i._t.G_)),
        (n = i._t.G_),
        (s = h);
    }
    if (0 === i && t.length > 1) {
      const i = Math.ceil(e / (t.length - 1)),
        n = new Date(1e3 * (t[0]._t.G_ - i));
      t[0].ru = Ws(new Date(1e3 * t[0]._t.G_), n);
    }
  }
  function $s(t) {
    if (!Ln(t)) throw new Error("time must be of type BusinessDay");
    const i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
    return { G_: Math.round(i.getTime() / 1e3), K_: t };
  }
  function Hs(t) {
    if (!In(t)) throw new Error("time must be of type isUTCTimestamp");
    return { G_: t };
  }
  function Us(t) {
    return 0 === t.length ? null : Ln(t[0].time) ? $s : Hs;
  }
  function qs(t) {
    return In(t) ? Hs(t) : Ln(t) ? $s(t) : $s(Ys(t));
  }
  function Ys(t) {
    const i = new Date(t);
    if (isNaN(i.getTime()))
      throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
    return {
      day: i.getUTCDate(),
      month: i.getUTCMonth() + 1,
      year: i.getUTCFullYear(),
    };
  }
  function Xs(t) {
    R(t.time) && (t.time = Ys(t.time));
  }
  function Zs(t) {
    return { ne: 0, pb: new Map(), ta: t };
  }
  function Ks(t) {
    if (void 0 !== t && 0 !== t.length)
      return { mb: t[0]._t.G_, bb: t[t.length - 1]._t.G_ };
  }
  function Gs(t) {
    let i;
    return (
      t.forEach((t) => {
        void 0 === i && (i = t.lu);
      }),
      d(i)
    );
  }
  class Js {
    constructor() {
      (this.wb = new Map()),
        (this.gb = new Map()),
        (this.Mb = new Map()),
        (this.xb = []);
    }
    M() {
      this.wb.clear(), this.gb.clear(), this.Mb.clear(), (this.xb = []);
    }
    Sb(t, i) {
      let n = 0 !== this.wb.size,
        s = !1;
      const e = this.gb.get(t);
      if (void 0 !== e)
        if (1 === this.gb.size) (n = !1), (s = !0), this.wb.clear();
        else for (const i of this.xb) i.pointData.pb.delete(t) && (s = !0);
      let r = [];
      if (0 !== i.length) {
        const n = i.map((t) => t.time);
        !(function (t) {
          t.forEach(Xs);
        })(i);
        const e = f(Us(i)),
          h = zs(t.Yh()),
          l = t.wa(),
          a = t.ga();
        r = i.map((i, r) => {
          const o = e(i.time);
          let _ = this.wb.get(o.G_);
          void 0 === _ && ((_ = Zs(o)), this.wb.set(o.G_, _), (s = !0));
          const u = h(o, _.ne, i, n[r], l, a);
          return _.pb.set(t, u), u;
        });
      }
      n && this.yb(), this.kb(t, r);
      let h = -1;
      if (s) {
        const t = [];
        this.wb.forEach((i) => {
          t.push({ ru: 0, _t: i.ta, pointData: i, lu: Gs(i.pb) });
        }),
          t.sort((t, i) => t._t.G_ - i._t.G_),
          (h = this.Cb(t));
      }
      return this.Tb(
        t,
        h,
        (function (t, i) {
          const n = Ks(t),
            s = Ks(i);
          if (void 0 !== n && void 0 !== s)
            return { Yl: n.bb >= s.bb && n.mb >= s.mb };
        })(this.gb.get(t), e)
      );
    }
    wd(t) {
      return this.Sb(t, []);
    }
    Pb(t, i) {
      const n = i.time;
      Xs(i);
      const s = f(Us([i]))(i.time),
        e = this.Mb.get(t);
      if (void 0 !== e && s.G_ < e.G_)
        throw new Error(
          `Cannot update oldest data, last time=${e.G_}, new time=${s.G_}`
        );
      let r = this.wb.get(s.G_);
      const h = void 0 === r;
      void 0 === r && ((r = Zs(s)), this.wb.set(s.G_, r));
      const l = zs(t.Yh()),
        a = t.wa(),
        o = t.ga(),
        _ = l(s, r.ne, i, n, a, o);
      r.pb.set(t, _), this.Rb(t, _);
      const u = { Yl: As(_) };
      if (!h) return this.Tb(t, -1, u);
      const c = { ru: 0, _t: r.ta, pointData: r, lu: Gs(r.pb) },
        d = Dt(this.xb, c._t.G_, (t, i) => t._t.G_ < i);
      this.xb.splice(d, 0, c);
      for (let t = d; t < this.xb.length; ++t) Qs(this.xb[t].pointData, t);
      return js(this.xb, d), this.Tb(t, d, u);
    }
    Rb(t, i) {
      let n = this.gb.get(t);
      void 0 === n && ((n = []), this.gb.set(t, n));
      const s = 0 !== n.length ? n[n.length - 1] : null;
      null === s || i._t.G_ > s._t.G_
        ? As(i) && n.push(i)
        : As(i)
        ? (n[n.length - 1] = i)
        : n.splice(-1, 1),
        this.Mb.set(t, i._t);
    }
    kb(t, i) {
      0 !== i.length
        ? (this.gb.set(t, i.filter(As)), this.Mb.set(t, i[i.length - 1]._t))
        : (this.gb.delete(t), this.Mb.delete(t));
    }
    yb() {
      for (const t of this.xb)
        0 === t.pointData.pb.size && this.wb.delete(t._t.G_);
    }
    Cb(t) {
      let i = -1;
      for (let n = 0; n < this.xb.length && n < t.length; ++n) {
        const s = this.xb[n],
          e = t[n];
        if (s._t.G_ !== e._t.G_) {
          i = n;
          break;
        }
        (e.ru = s.ru), Qs(e.pointData, n);
      }
      if (
        (-1 === i &&
          this.xb.length !== t.length &&
          (i = Math.min(this.xb.length, t.length)),
        -1 === i)
      )
        return -1;
      for (let n = i; n < t.length; ++n) Qs(t[n].pointData, n);
      return js(t, i), (this.xb = t), i;
    }
    Db() {
      if (0 === this.gb.size) return null;
      let t = 0;
      return (
        this.gb.forEach((i) => {
          0 !== i.length && (t = Math.max(t, i[i.length - 1].ne));
        }),
        t
      );
    }
    Tb(t, i, n) {
      const s = { Ob: new Map(), yt: { $u: this.Db() } };
      if (-1 !== i)
        this.gb.forEach((i, e) => {
          s.Ob.set(e, { je: i, Ab: e === t ? n : void 0 });
        }),
          this.gb.has(t) || s.Ob.set(t, { je: [], Ab: n }),
          (s.yt.Bb = this.xb),
          (s.yt.Vb = i);
      else {
        const i = this.gb.get(t);
        s.Ob.set(t, { je: i || [], Ab: n });
      }
      return s;
    }
  }
  function Qs(t, i) {
    (t.ne = i),
      t.pb.forEach((t) => {
        t.ne = i;
      });
  }
  function te(t) {
    const i = { value: t.At[3], time: t.lu };
    return void 0 !== t.fb && (i.customValues = t.fb), i;
  }
  function ie(t) {
    const i = te(t);
    return void 0 !== t.D && (i.color = t.D), i;
  }
  function ne(t) {
    const i = {
      open: t.At[0],
      high: t.At[1],
      low: t.At[2],
      close: t.At[3],
      time: t.lu,
    };
    return void 0 !== t.fb && (i.customValues = t.fb), i;
  }
  const se = {
    Area: function (t) {
      const i = te(t);
      return (
        void 0 !== t.ot && (i.lineColor = t.ot),
        void 0 !== t.Cs && (i.topColor = t.Cs),
        void 0 !== t.Ts && (i.bottomColor = t.Ts),
        i
      );
    },
    Line: ie,
    Baseline: function (t) {
      const i = te(t);
      return (
        void 0 !== t.Te && (i.topLineColor = t.Te),
        void 0 !== t.Pe && (i.bottomLineColor = t.Pe),
        void 0 !== t.xe && (i.topFillColor1 = t.xe),
        void 0 !== t.Se && (i.topFillColor2 = t.Se),
        void 0 !== t.ye && (i.bottomFillColor1 = t.ye),
        void 0 !== t.ke && (i.bottomFillColor2 = t.ke),
        i
      );
    },
    Histogram: ie,
    Bar: function (t) {
      const i = ne(t);
      return void 0 !== t.D && (i.color = t.D), i;
    },
    Candlestick: function (t) {
      const i = ne(t),
        { D: n, Bt: s, $h: e } = t;
      return (
        void 0 !== n && (i.color = n),
        void 0 !== s && (i.borderColor = s),
        void 0 !== e && (i.wickColor = e),
        i
      );
    },
    Custom: function (t) {
      const i = t.lu;
      return Object.assign(Object.assign({}, t.je), { time: i });
    },
  };
  function ee(t) {
    return se[t];
  }
  const re = {
      autoScale: !0,
      mode: 0,
      invertScale: !1,
      alignLabels: !0,
      borderVisible: !0,
      borderColor: "#2B2B43",
      entireTextOnly: !1,
      visible: !1,
      ticksVisible: !1,
      scaleMargins: { bottom: 0.1, top: 0.2 },
    },
    he = {
      color: "rgba(0, 0, 0, 0)",
      visible: !1,
      fontSize: 48,
      fontFamily: V,
      fontStyle: "",
      text: "",
      horzAlign: "center",
      vertAlign: "center",
    },
    le = {
      width: 0,
      height: 0,
      autoSize: !1,
      layout: {
        background: { type: "solid", color: "#FFFFFF" },
        textColor: "#191919",
        fontSize: 12,
        fontFamily: V,
      },
      crosshair: {
        vertLine: {
          color: "#9598A1",
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: "#131722",
        },
        horzLine: {
          color: "#9598A1",
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: "#131722",
        },
        mode: 1,
      },
      grid: {
        vertLines: { color: "#D6DCDE", style: 0, visible: !0 },
        horzLines: { color: "#D6DCDE", style: 0, visible: !0 },
      },
      overlayPriceScales: Object.assign({}, re),
      leftPriceScale: Object.assign(Object.assign({}, re), { visible: !1 }),
      rightPriceScale: Object.assign(Object.assign({}, re), { visible: !0 }),
      timeScale: {
        rightOffset: 0,
        barSpacing: 6,
        minBarSpacing: 0.5,
        fixLeftEdge: !1,
        fixRightEdge: !1,
        lockVisibleTimeRangeOnResize: !1,
        rightBarStaysOnScroll: !1,
        borderVisible: !0,
        borderColor: "#2B2B43",
        visible: !0,
        timeVisible: !1,
        secondsVisible: !0,
        shiftVisibleRangeOnNewBar: !0,
        ticksVisible: !1,
      },
      watermark: he,
      localization: {
        locale: qn ? navigator.language : "",
        dateFormat: "dd MMM 'yy",
      },
      handleScroll: {
        mouseWheel: !0,
        pressedMouseMove: !0,
        horzTouchDrag: !0,
        vertTouchDrag: !0,
      },
      handleScale: {
        axisPressedMouseMove: { time: !0, price: !0 },
        axisDoubleClickReset: { time: !0, price: !0 },
        mouseWheel: !0,
        pinch: !0,
      },
      kineticScroll: { mouse: !1, touch: !0 },
      trackingMode: { exitMode: 1 },
    };
  class ae {
    constructor(t, i) {
      (this.Eb = t), (this.zb = i);
    }
    applyOptions(t) {
      this.Eb.Ut().Zc(this.zb, t);
    }
    options() {
      return this.Li().F();
    }
    width() {
      return lt(this.zb) ? this.Eb.Zm(this.zb) : 0;
    }
    Li() {
      return f(this.Eb.Ut().Kc(this.zb)).Ot;
    }
  }
  const oe = {
    color: "#FF0000",
    price: 0,
    lineStyle: 2,
    lineWidth: 1,
    lineVisible: !0,
    axisLabelVisible: !0,
    title: "",
    axisLabelColor: "",
    axisLabelTextColor: "",
  };
  class _e {
    constructor(t) {
      this.Bh = t;
    }
    applyOptions(t) {
      this.Bh.Ih(t);
    }
    options() {
      return this.Bh.F();
    }
    Lb() {
      return this.Bh;
    }
  }
  class ue {
    constructor(t, i, n, s) {
      (this.Ib = new k()),
        (this.zs = t),
        (this.Nb = i),
        (this.Fb = n),
        (this.Wb = s);
    }
    M() {
      this.Ib.M();
    }
    priceFormatter() {
      return this.zs.ua();
    }
    priceToCoordinate(t) {
      const i = this.zs.Tt();
      return null === i ? null : this.zs.Ot().Dt(t, i.At);
    }
    coordinateToPrice(t) {
      const i = this.zs.Tt();
      return null === i ? null : this.zs.Ot().vn(t, i.At);
    }
    barsInLogicalRange(t) {
      if (null === t) return null;
      const i = new Cn(new Sn(t.from, t.to)).cu(),
        n = this.zs.Vn();
      if (n.Ni()) return null;
      const s = n.il(i.Ds(), 1),
        e = n.il(i.ci(), -1),
        r = f(n.Jh()),
        h = f(n.Bn());
      if (null !== s && null !== e && s.ne > e.ne)
        return { barsBefore: t.from - r, barsAfter: h - t.to };
      const l = {
        barsBefore: null === s || s.ne === r ? t.from - r : s.ne - r,
        barsAfter: null === e || e.ne === h ? h - t.to : h - e.ne,
      };
      return (
        null !== s &&
          null !== e &&
          ((l.from = s._t.K_ || s._t.G_), (l.to = e._t.K_ || e._t.G_)),
        l
      );
    }
    setData(t) {
      this.zs.Yh(), this.Nb.jb(this.zs, t), this.$b("full");
    }
    update(t) {
      this.zs.Yh(), this.Nb.Hb(this.zs, t), this.$b("update");
    }
    dataByIndex(t, i) {
      const n = this.zs.Vn().il(t, i);
      return null === n ? null : ee(this.seriesType())(n);
    }
    data() {
      const t = ee(this.seriesType());
      return this.zs
        .Vn()
        .te()
        .map((i) => t(i));
    }
    subscribeDataChanged(t) {
      this.Ib.l(t);
    }
    unsubscribeDataChanged(t) {
      this.Ib.v(t);
    }
    setMarkers(t) {
      const i = t.map((t) =>
        Object.assign(Object.assign({}, t), {
          originalTime: t.time,
          time: qs(t.time),
        })
      );
      this.zs.Zl(i);
    }
    markers() {
      return this.zs.Kl().map((t) => {
        const { originalTime: i, time: n } = t,
          s = Ds(t, ["originalTime", "time"]);
        return Object.assign({ time: i }, s);
      });
    }
    applyOptions(t) {
      this.zs.Ih(t);
    }
    options() {
      return O(this.zs.F());
    }
    priceScale() {
      return this.Fb.priceScale(this.zs.Ot().Ma());
    }
    createPriceLine(t) {
      const i = C(O(oe), t),
        n = this.zs.Gl(i);
      return new _e(n);
    }
    removePriceLine(t) {
      this.zs.Jl(t.Lb());
    }
    seriesType() {
      return this.zs.Yh();
    }
    attachPrimitive(t) {
      this.zs.ma(t),
        t.attached &&
          t.attached({
            chart: this.Wb,
            series: this,
            requestUpdate: () => this.zs.Ut().$l(),
          });
    }
    detachPrimitive(t) {
      this.zs.ba(t), t.detached && t.detached();
    }
    $b(t) {
      this.Ib.g() && this.Ib.m(t);
    }
  }
  class ce {
    constructor(t, i) {
      (this.Ub = new k()),
        (this.xu = new k()),
        (this.nm = new k()),
        (this.Hi = t),
        (this.bl = t.yt()),
        (this.Lm = i),
        this.bl.lc().l(this.qb.bind(this)),
        this.bl.ac().l(this.Yb.bind(this)),
        this.Lm.um().l(this.Xb.bind(this));
    }
    M() {
      this.bl.lc().p(this),
        this.bl.ac().p(this),
        this.Lm.um().p(this),
        this.Ub.M(),
        this.xu.M(),
        this.nm.M();
    }
    scrollPosition() {
      return this.bl.Xu();
    }
    scrollToPosition(t, i) {
      i ? this.bl.ec(t, 1e3) : this.Hi.Gn(t);
    }
    scrollToRealTime() {
      this.bl.sc();
    }
    getVisibleRange() {
      var t, i;
      const n = this.bl.zu();
      return null === n
        ? null
        : {
            from: null !== (t = n.from.K_) && void 0 !== t ? t : n.from.G_,
            to: null !== (i = n.to.K_) && void 0 !== i ? i : n.to.G_,
          };
    }
    setVisibleRange(t) {
      const i = { from: qs(t.from), to: qs(t.to) },
        n = this.bl.Fu(i);
      this.Hi.gd(n);
    }
    getVisibleLogicalRange() {
      const t = this.bl.Eu();
      return null === t ? null : { from: t.Ds(), to: t.ci() };
    }
    setVisibleLogicalRange(t) {
      c(t.from <= t.to, "The from index cannot be after the to index."),
        this.Hi.gd(t);
    }
    resetTimeScale() {
      this.Hi.Zn();
    }
    fitContent() {
      this.Hi.uc();
    }
    logicalToCoordinate(t) {
      const i = this.Hi.yt();
      return i.Ni() ? null : i.zt(t);
    }
    coordinateToLogical(t) {
      return this.bl.Ni() ? null : this.bl.Hu(t);
    }
    timeToCoordinate(t) {
      const i = qs(t),
        n = this.bl.ya(i, !1);
      return null === n ? null : this.bl.zt(n);
    }
    coordinateToTime(t) {
      var i;
      const n = this.Hi.yt(),
        s = n.Hu(t),
        e = n.pn(s);
      return null === e ? null : null !== (i = e.K_) && void 0 !== i ? i : e.G_;
    }
    width() {
      return this.Lm.Lp().width;
    }
    height() {
      return this.Lm.Lp().height;
    }
    subscribeVisibleTimeRangeChange(t) {
      this.Ub.l(t);
    }
    unsubscribeVisibleTimeRangeChange(t) {
      this.Ub.v(t);
    }
    subscribeVisibleLogicalRangeChange(t) {
      this.xu.l(t);
    }
    unsubscribeVisibleLogicalRangeChange(t) {
      this.xu.v(t);
    }
    subscribeSizeChange(t) {
      this.nm.l(t);
    }
    unsubscribeSizeChange(t) {
      this.nm.v(t);
    }
    applyOptions(t) {
      this.bl.Ih(t);
    }
    options() {
      return Object.assign(Object.assign({}, this.bl.F()), {
        barSpacing: this.bl.re(),
      });
    }
    qb() {
      this.Ub.g() && this.Ub.m(this.getVisibleRange());
    }
    Yb() {
      this.xu.g() && this.xu.m(this.getVisibleLogicalRange());
    }
    Xb(t) {
      this.nm.m(t.width, t.height);
    }
  }
  function de(t) {
    if (void 0 === t || "custom" === t.type) return;
    const i = t;
    void 0 !== i.minMove &&
      void 0 === i.precision &&
      (i.precision = (function (t) {
        if (t >= 1) return 0;
        let i = 0;
        for (; i < 8; i++) {
          const n = Math.round(t);
          if (Math.abs(n - t) < 1e-8) return i;
          t *= 10;
        }
        return i;
      })(i.minMove));
  }
  function fe(t) {
    return (
      (function (t) {
        if (D(t.handleScale)) {
          const i = t.handleScale;
          t.handleScale = {
            axisDoubleClickReset: { time: i, price: i },
            axisPressedMouseMove: { time: i, price: i },
            mouseWheel: i,
            pinch: i,
          };
        } else if (void 0 !== t.handleScale) {
          const { axisPressedMouseMove: i, axisDoubleClickReset: n } =
            t.handleScale;
          D(i) && (t.handleScale.axisPressedMouseMove = { time: i, price: i }),
            D(n) &&
              (t.handleScale.axisDoubleClickReset = { time: n, price: n });
        }
        const i = t.handleScroll;
        D(i) &&
          (t.handleScroll = {
            horzTouchDrag: i,
            vertTouchDrag: i,
            mouseWheel: i,
            pressedMouseMove: i,
          });
      })(t),
      t
    );
  }
  class ve {
    constructor(t, i) {
      (this.Zb = new Js()),
        (this.Kb = new Map()),
        (this.Gb = new Map()),
        (this.Jb = new k()),
        (this.Qb = new k());
      const n = void 0 === i ? O(le) : C(O(le), fe(i));
      (this.Eb = new Ps(t, n)),
        this.Eb.Vp().l((t) => {
          this.Jb.g() && this.Jb.m(this.tw(t()));
        }, this),
        this.Eb.td().l((t) => {
          this.Qb.g() && this.Qb.m(this.tw(t()));
        }, this);
      const s = this.Eb.Ut();
      this.iw = new ce(s, this.Eb.$m());
    }
    remove() {
      this.Eb.Vp().p(this),
        this.Eb.td().p(this),
        this.iw.M(),
        this.Eb.M(),
        this.Kb.clear(),
        this.Gb.clear(),
        this.Jb.M(),
        this.Qb.M(),
        this.Zb.M();
    }
    resize(t, i, n) {
      this.autoSizeActive() || this.Eb.Nm(t, i, n);
    }
    addCustomSeries(t, i) {
      const n = v(t),
        s = Object.assign(Object.assign({}, h), n.defaultOptions());
      return this.nw("Custom", s, i, n);
    }
    addAreaSeries(t) {
      return this.nw("Area", s, t);
    }
    addBaselineSeries(t) {
      return this.nw("Baseline", e, t);
    }
    addBarSeries(t) {
      return this.nw("Bar", i, t);
    }
    addCandlestickSeries(i = {}) {
      return (
        (function (t) {
          void 0 !== t.borderColor &&
            ((t.borderUpColor = t.borderColor),
            (t.borderDownColor = t.borderColor)),
            void 0 !== t.wickColor &&
              ((t.wickUpColor = t.wickColor), (t.wickDownColor = t.wickColor));
        })(i),
        this.nw("Candlestick", t, i)
      );
    }
    addHistogramSeries(t) {
      return this.nw("Histogram", r, t);
    }
    addLineSeries(t) {
      return this.nw("Line", n, t);
    }
    removeSeries(t) {
      const i = d(this.Kb.get(t)),
        n = this.Zb.wd(i);
      this.Eb.Ut().wd(i), this.sw(n), this.Kb.delete(t), this.Gb.delete(i);
    }
    jb(t, i) {
      this.sw(this.Zb.Sb(t, i));
    }
    Hb(t, i) {
      this.sw(this.Zb.Pb(t, i));
    }
    subscribeClick(t) {
      this.Jb.l(t);
    }
    unsubscribeClick(t) {
      this.Jb.v(t);
    }
    subscribeCrosshairMove(t) {
      this.Qb.l(t);
    }
    unsubscribeCrosshairMove(t) {
      this.Qb.v(t);
    }
    priceScale(t) {
      return new ae(this.Eb, t);
    }
    timeScale() {
      return this.iw;
    }
    applyOptions(t) {
      this.Eb.Ih(fe(t));
    }
    options() {
      return this.Eb.F();
    }
    takeScreenshot() {
      return this.Eb.Ym();
    }
    autoSizeActive() {
      return this.Eb.Jm();
    }
    chartElement() {
      return this.Eb.Qm();
    }
    nw(t, i, n = {}, s) {
      de(n.priceFormat);
      const e = C(O(l), O(i), n),
        r = this.Eb.Ut().md(t, e, s),
        h = new ue(r, this, this, this);
      return this.Kb.set(h, r), this.Gb.set(r, h), h;
    }
    sw(t) {
      const i = this.Eb.Ut();
      i.vd(t.yt.$u, t.yt.Bb, t.yt.Vb),
        t.Ob.forEach((t, i) => i.tt(t.je, t.Ab)),
        i.qu();
    }
    ew(t) {
      return d(this.Gb.get(t));
    }
    tw(t) {
      const i = new Map();
      t._b.forEach((t, n) => {
        const s = n.Yh(),
          e = ee(s)(t);
        if ("Custom" !== s)
          c(
            (function (t) {
              return void 0 !== t.open || void 0 !== t.value;
            })(e)
          );
        else {
          const t = n.ga();
          c(!t || !1 === t(e));
        }
        i.set(this.ew(n), e);
      });
      const n = void 0 === t.ob ? void 0 : this.ew(t.ob);
      return {
        time: t._t,
        logical: t.ne,
        point: t.ab,
        hoveredSeries: n,
        hoveredObjectId: t.ub,
        seriesData: i,
        sourceEvent: t.cb,
      };
    }
  }
  const pe = Object.assign(Object.assign({}, l), h);
  var me = Object.freeze({
    __proto__: null,
    get ColorType() {
      return On;
    },
    get CrosshairMode() {
      return rt;
    },
    get LastPriceAnimationMode() {
      return Rn;
    },
    get LineStyle() {
      return o;
    },
    get LineType() {
      return a;
    },
    get MismatchDirection() {
      return Ai;
    },
    get PriceLineSource() {
      return Dn;
    },
    get PriceScaleMode() {
      return un;
    },
    get TickMarkType() {
      return Tn;
    },
    get TrackingModeExitMode() {
      return Pn;
    },
    createChart: function (t, i) {
      let n;
      if (R(t)) {
        const i = document.getElementById(t);
        c(null !== i, `Cannot find element in DOM with id=${t}`), (n = i);
      } else n = t;
      return new ve(n, i);
    },
    customSeriesDefaultOptions: pe,
    isBusinessDay: Ln,
    isUTCTimestamp: In,
    version: function () {
      return "4.1.0-dev+202306291356";
    },
  });
  window.LightweightCharts = me;
})();
