self.AMP_CONFIG = {
    "v": "012205270638004",
    "type": "production",
    "allow-doc-opt-in": ["amp-next-page"],
    "allow-url-opt-in": [],
    "canary": 0,
    "a4aProfilingRate": 0.01,
    "doubleclickSraExp": 0.01,
    "doubleclickSraReportExcludedBlock": 0.1,
    "flexAdSlots": 0.05,
    "flexible-bitrate": 0.1,
    "ios-fixed-no-transfer": 0,
    "story-ad-placements": 0.01,
    "story-disable-animations-first-page": 1,
    "story-load-inactive-outside-viewport": 1,
    "amp-sticky-ad-to-amp-ad-v4": 0,
    "story-video-cache-apply-audio": 0
}; /*AMP_CONFIG*/
self.AMP_EXP = {
    "flexible-bitrate": 0.1,
    "amp-story-first-page-max-bitrate": 0.3,
    "story-disable-animations-first-page": 1,
    "story-load-first-page-only": 1,
    "story-load-inactive-outside-viewport": 1,
    "story-ad-page-outlink": 0.02,
    "amp-geo-ssr": 1,
    "story-remote-localization": 1
}; /*AMP_EXP*/ ;
self, self.AMP = self.AMP || [];
try {
    AMP._ = AMP._ || {}, self.AMP && !Array.isArray(self.AMP) || function() {
        function t(t, i) {
            for (var n = 0; n < i.length; n++) {
                var r = i[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function i(i, n, r) {
            return n && t(i.prototype, n), r && t(i, r), i
        }
        var n, r = function() {
                function t() {
                    this.At = new e
                }
                return t.prototype.abort = function() {
                    if (!this.At.xt && (this.At.xt = !0, this.At.Et)) {
                        var t = {
                            "type": "abort",
                            "bubbles": !1,
                            "cancelable": !1,
                            "target": this.At,
                            "currentTarget": this.At
                        };
                        this.At.Et(t)
                    }
                }, i(t, [{
                    key: "signal",
                    get: function() {
                        return this.At
                    }
                }]), t
            }(),
            e = function() {
                function t() {
                    this.xt = !1, this.Et = null
                }
                return i(t, [{
                    key: "aborted",
                    get: function() {
                        return this.xt
                    }
                }, {
                    key: "onabort",
                    get: function() {
                        return this.Et
                    },
                    set: function(t) {
                        this.Et = t
                    }
                }]), t
            }();

        function s(t, i) {
            for (var n = i || 0, r = this.length, e = n >= 0 ? n : Math.max(r + n, 0); e < r; e++) {
                var s = this[e];
                if (s === t || t != t && s != s) return !0
            }
            return !1
        }

        function u(t, i) {
            (null == i || i > t.length) && (i = t.length);
            for (var n = 0, r = new Array(i); n < i; n++) r[n] = t[n];
            return r
        }

        function o(t, i) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (n) return (n = n.call(t)).next.bind(n);
            if (Array.isArray(t) || (n = function(t, i) {
                    if (t) {
                        if ("string" == typeof t) return u(t, i);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, i) : void 0
                    }
                }(t)) || i && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0;
                return function() {
                    return r >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[r++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function h() {
            return n || (n = Promise.resolve(void 0))
        }
        var a = function() {
            var t = this;
            this.promise = new Promise((function(i, n) {
                t.resolve = i, t.reject = n
            }))
        };

        function c(t) {
            return new Promise((function(i) {
                i(t())
            }))
        }

        function f(t) {
            var i = Object.getOwnPropertyDescriptor(t, "message");
            if (null != i && i.writable) return t;
            var n = t.message,
                r = t.stack,
                e = new Error(n);
            for (var s in t) e[s] = t[s];
            return e.stack = r, e
        }

        function l(t) {
            for (var i, n = null, r = "", e = o(arguments, !0); !(i = e()).done;) {
                var s = i.value;
                s instanceof Error && !n ? n = f(s) : (r && (r += " "), r += s)
            }
            return n ? r && (n.message = r + ": " + n.message) : n = new Error(r), n
        }

        function v(t) {
            var i, n;
            null === (i = (n = self).__AMP_REPORT_ERROR) || void 0 === i || i.call(n, t)
        }

        function d(t) {
            var i = l.apply(null, arguments);
            setTimeout((function() {
                throw v(i), i
            }))
        }

        function m(t) {
            var i = l.apply(null, arguments);
            return i.expected = !0, i
        }

        function p(t) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var g = Object.prototype,
            b = g.hasOwnProperty,
            y = g.toString;

        function w(t) {
            return "[object Object]" === y.call(t)
        }

        function A(t) {
            var i = Object.create(null);
            return t && Object.assign(i, t), i
        }

        function x(t, i) {
            return b.call(t, i)
        }

        function E(t) {
            var i = A();
            for (var n in t)
                if (x(t, n)) {
                    var r = t[n];
                    i[n] = w(r) ? E(r) : r
                }
            return i
        }
        var P = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,
            O = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"],
            I = {
                "childList": !0,
                "subtree": !0
            };

        function M(t, i) {
            if (!P.test(i) || O.includes(i)) throw new t('invalid custom element name "'.concat(i, '"'))
        }
        var T = function() {
                function t(t, i) {
                    this.t = t, this.rn = i, this.un = A()
                }
                var i = t.prototype;
                return i.define = function(t, i, n) {
                    this.rn.define(t, i, n);
                    var r = this.un,
                        e = r[t];
                    e && (e.resolve(), delete r[t])
                }, i.get = function(t) {
                    var i = this.rn.getByName(t);
                    if (i) return i.ctor
                }, i.whenDefined = function(t) {
                    var i = this.t;
                    if (i.Promise, M(i.SyntaxError, t), this.rn.getByName(t)) return h();
                    var n = this.un,
                        r = n[t];
                    return r || (r = new a, n[t] = r), r.promise
                }, i.upgrade = function(t) {
                    this.rn.upgrade(t)
                }, t
            }(),
            S = function() {
                function t(t) {
                    this.t = t, this.en = A(), this.on = "", this.fn = null, this.ln = null, this.an = [t.document]
                }
                var i = t.prototype;
                return i.current = function() {
                    var t = this.fn;
                    return this.fn = null, t
                }, i.getByName = function(t) {
                    var i = this.en[t];
                    if (i) return i
                }, i.getByConstructor = function(t) {
                    var i = this.en;
                    for (var n in i) {
                        var r = i[n];
                        if (r.ctor === t) return r
                    }
                }, i.define = function(t, i, n) {
                    var r = this.t,
                        e = r.Error,
                        s = r.SyntaxError;
                    if (n) throw new e("Extending native custom elements is not supported");
                    if (M(s, t), this.getByName(t) || this.getByConstructor(i)) throw new e('duplicate definition "'.concat(t, '"'));
                    this.en[t] = {
                        name: t,
                        ctor: i
                    }, this.sn(t);
                    for (var u, h = o(this.an, !0); !(u = h()).done;) {
                        var a = u.value;
                        this.upgrade(a, t)
                    }
                }, i.upgrade = function(t, i) {
                    for (var n, r = !!i, e = i || this.on, s = o(this.vn(t, e), !0); !(n = s()).done;) {
                        var u = n.value;
                        r ? this.hn(u) : this.upgradeSelf(u)
                    }
                }, i.upgradeSelf = function(t) {
                    var i = this.getByName(t.localName);
                    i && this.dn(t, i)
                }, i.vn = function(t, i) {
                    return i && t.querySelectorAll ? t.querySelectorAll(i) : []
                }, i.dn = function(t, i) {
                    var n = i.ctor;
                    if (!(t instanceof n)) {
                        this.fn = t;
                        try {
                            if (new n !== t) throw new this.t.Error("Constructor illegally returned a different instance.")
                        } catch (t) {
                            d(t)
                        }
                    }
                }, i.hn = function(t) {
                    var i = this.getByName(t.localName);
                    if (i && (t = t, this.dn(t, i), t.connectedCallback)) try {
                        t.connectedCallback()
                    } catch (t) {
                        d(t)
                    }
                }, i.pn = function(t) {
                    if ((t = t).disconnectedCallback) try {
                        t.disconnectedCallback()
                    } catch (t) {
                        d(t)
                    }
                }, i.sn = function(t) {
                    var i = this;
                    if (this.on) this.on += ",".concat(t);
                    else {
                        this.on = t;
                        var n = new this.t.MutationObserver((function(t) {
                            t && i.yn(t)
                        }));
                        this.ln = n;
                        for (var r, e = o(this.an, !0); !(r = e()).done;) {
                            var s = r.value;
                            n.observe(s, I)
                        }! function(t, i) {
                            var n, r = t.Document,
                                e = t.Element,
                                s = t.Node,
                                u = t.document,
                                o = r.prototype,
                                h = e.prototype,
                                a = s.prototype,
                                c = o.createElement,
                                f = o.importNode,
                                l = a.appendChild,
                                v = a.cloneNode,
                                d = a.insertBefore,
                                m = a.removeChild,
                                p = a.replaceChild;
                            o.createElement = function(t) {
                                var n = i.getByName(t);
                                return n ? new n.ctor : c.apply(this, arguments)
                            }, o.importNode = function() {
                                var t = f.apply(this, arguments);
                                return t && this === u && (i.upgradeSelf(t), i.upgrade(t)), t
                            }, a.appendChild = function() {
                                var t = l.apply(this, arguments);
                                return i.sync(), t
                            }, a.insertBefore = function() {
                                var t = d.apply(this, arguments);
                                return i.sync(), t
                            }, a.removeChild = function() {
                                var t = m.apply(this, arguments);
                                return i.sync(), t
                            }, a.replaceChild = function() {
                                var t = p.apply(this, arguments);
                                return i.sync(), t
                            }, a.cloneNode = function() {
                                var t = v.apply(this, arguments);
                                return t.ownerDocument === u && (i.upgradeSelf(t), i.upgrade(t)), t
                            };
                            var g = h,
                                b = Object.getOwnPropertyDescriptor(g, "innerHTML");
                            if (b || (g = Object.getPrototypeOf(t.HTMLElement.prototype), b = Object.getOwnPropertyDescriptor(g, "innerHTML")), null !== (n = b) && void 0 !== n && n.configurable) {
                                var y = b.set;
                                b.set = function(t) {
                                    y.call(this, t), i.upgrade(this)
                                }, Object.defineProperty(g, "innerHTML", b)
                            }
                        }(this.t, this)
                    }
                }, i.observe = function(t) {
                    this.an.push(t), this.ln && this.ln.observe(t, I)
                }, i.sync = function() {
                    this.ln && this.yn(this.ln.takeRecords())
                }, i.yn = function(t) {
                    for (var i, n = o(t, !0); !(i = n()).done;) {
                        var r = i.value;
                        if (r) {
                            for (var e, s = r.addedNodes, u = r.removedNodes, h = o(s, !0); !(e = h()).done;) {
                                var a = e.value,
                                    c = this.vn(a, this.on);
                                this.hn(a);
                                for (var f, l = o(c, !0); !(f = l()).done;) {
                                    var v = f.value;
                                    this.hn(v)
                                }
                            }
                            for (var d, m = o(u, !0); !(d = m()).done;) {
                                var p = d.value,
                                    g = this.vn(p, this.on);
                                this.pn(p);
                                for (var b, y = o(g, !0); !(b = y()).done;) {
                                    var w = b.value;
                                    this.pn(w)
                                }
                            }
                        }
                    }
                }, t
            }();

        function R(t, i) {
            i.prototype = Object.create(t.prototype, {
                constructor: {
                    configurable: !0,
                    writable: !0,
                    value: i
                }
            }), _(i, t)
        }

        function _(t, i) {
            Object.setPrototypeOf ? Object.setPrototypeOf(t, i) : {
                __proto__: {
                    "test": !0
                }
            }.test ? t.__proto__ = i : function(t, i) {
                for (var n = i; null !== n && !Object.isPrototypeOf.call(n, t);) {
                    for (var r, e = o(Object.getOwnPropertyNames(n), !0); !(r = e()).done;) {
                        var s = r.value;
                        if (!Object.hasOwnProperty.call(t, s)) {
                            var u = Object.getOwnPropertyDescriptor(n, s);
                            Object.defineProperty(t, s, u)
                        }
                    }
                    n = Object.getPrototypeOf(n)
                }
            }(t, i)
        }

        function k(t) {
            return t == this || this.documentElement.contains(t)
        }

        function C(t, i, n) {
            return i in t ? Object.defineProperty(t, i, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[i] = n, t
        }

        function N(t, i) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                i && (r = r.filter((function(i) {
                    return Object.getOwnPropertyDescriptor(t, i).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function D(t) {
            for (var i = 1; i < arguments.length; i++) {
                var n = null != arguments[i] ? arguments[i] : {};
                i % 2 ? N(Object(n), !0).forEach((function(i) {
                    C(t, i, n[i])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(i) {
                    Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
                }))
            }
            return t
        }

        function j(t, i) {
            return (j = Object.setPrototypeOf || function(t, i) {
                return t.__proto__ = i, t
            })(t, i)
        }

        function U(t, i) {
            if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(i && i.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), i && j(t, i)
        }

        function L(t) {
            return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function z(t, i) {
            if (i && ("object" === p(i) || "function" == typeof i)) return i;
            if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }

        function H(t) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = L(t);
                if (i) {
                    var e = L(this).constructor;
                    n = Reflect.construct(r, arguments, e)
                } else n = r.apply(this, arguments);
                return z(this, n)
            }
        }

        function G(t) {
            return t ? Array.prototype.slice.call(t) : []
        }
        var V = Array.isArray;

        function F(t) {
            return V(t) ? t : [t]
        }

        function q(t, i) {
            for (var n = [], r = 0, e = 0; e < t.length; e++) {
                var s = t[e];
                i(s, e, t) ? n.push(s) : (r < e && (t[r] = s), r++)
            }
            return r < t.length && (t.length = r), n
        }

        function B(t, i) {
            for (var n = 0; n < t.length; n++)
                if (i(t[n], n, t)) return n;
            return -1
        }

        function $(t, i) {
            var n = t.indexOf(i);
            return -1 != n && (t.splice(n, 1), !0)
        }

        function W(t, i) {
            var n = t.length - i.length;
            return n >= 0 && t.indexOf(i, n) == n
        }

        function Y(t) {
            return "string" == typeof t
        }

        function K(t) {
            return 1 == (null == t ? void 0 : t.nodeType)
        }

        function J(t) {
            return "number" == typeof t && isFinite(t)
        }
        var X = "​​​",
            Q = "​​​​";

        function Z(t) {
            return K(t) ? (t = t).tagName.toLowerCase() + (t.id ? "#".concat(t.id) : "") : t
        }

        function tt(t) {
            return t.indexOf(X) >= 0
        }

        function it(t) {
            return t.replace(X, "")
        }

        function nt(t, i) {
            var n, r, e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Assertion failed";
            if (i) return i;
            t && -1 == e.indexOf(t) && (e += t);
            for (var s = 3, u = e.split("%s"), o = u.shift(), h = [o]; u.length;) {
                var a = arguments[s++],
                    c = u.shift();
                o += Z(a) + c, h.push(a, c.trim())
            }
            var f = new Error(o);
            throw f.messageArray = q(h, (function(t) {
                return "" !== t
            })), null === (n = (r = self).__AMP_REPORT_ERROR) || void 0 === n || n.call(r, f), f
        }

        function rt(t, i, n, r, e) {
            return V(e) ? t(n, e.concat([i])) : t(n, "".concat(e || r, ": %s"), i), i
        }

        function et(t, i, n, r, e, s, u, o, h, a, c) {
            return t
        }

        function st(t, i) {
            return t
        }

        function ut(t, i) {
            return t
        }

        function ot(t, i) {
            return t
        }

        function ht(t, i, n, r, e, s, u, o, h, a, c) {
            return nt(X, t, i, n, r, e, s, u, o, h, a, c)
        }

        function at(t) {
            return JSON.parse(t)
        }

        function ct(t) {
            return "undefined" != typeof TextEncoder ? (new TextEncoder).encode(t) : ft(unescape(encodeURIComponent(t)))
        }

        function ft(t) {
            for (var i = new Uint8Array(t.length), n = 0; n < t.length; n++) {
                var r = t.charCodeAt(n);
                et(r <= 255), i[n] = r
            }
            return i
        }

        function lt(t, i) {
            var n = t.crypto;
            if (!(n = n || t.msCrypto) || !n.getRandomValues) return null;
            var r = new Uint8Array(i);
            return n.getRandomValues(r), r
        }

        function vt(t) {
            var i = !1,
                n = null,
                r = t;
            return function() {
                if (!i) {
                    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                    n = r.apply(self, e), i = !0, r = null
                }
                return n
            }
        }

        function dt(t, i, n) {
            var r = 0,
                e = null;

            function s(s) {
                e = null, r = t.setTimeout(u, n), i.apply(null, s)
            }

            function u() {
                r = 0, e && s(e)
            }
            return function() {
                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                r ? e = i : s(i)
            }
        }

        function mt(t, i, n) {
            var r = 0,
                e = 0,
                s = null;

            function u() {
                r = 0;
                var o, h = n - (t.Date.now() - e);
                h > 0 ? r = t.setTimeout(u, h) : (o = s, s = null, i.apply(null, o))
            }
            return function() {
                e = t.Date.now();
                for (var i = arguments.length, o = new Array(i), h = 0; h < i; h++) o[h] = arguments[h];
                s = o, r || (r = t.setTimeout(u, n))
            }
        }
        var pt = ["javascript:", "data:", "vbscript:"],
            gt = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function bt(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            try {
                return decodeURIComponent(t)
            } catch (t) {
                return i
            }
        }

        function yt(t) {
            var i, n = A();
            if (!t) return n;
            for (; i = gt.exec(t);) {
                var r = bt(i[1], i[1]),
                    e = i[2] ? bt(i[2].replace(/\+/g, " "), i[2]) : "";
                n[r] = e
            }
            return n
        }

        function wt(t) {
            var i = (t || self).location;
            return yt(i.originalHash || i.hash)
        }
        var At = function(t) {
                return self.AMP_CONFIG ? self.AMP_CONFIG[t] : null
            },
            xt = ("string" == typeof At("cdnProxyRegex") ? new RegExp(At("cdnProxyRegex")) : At("cdnProxyRegex")) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function Et(t) {
            if (!self.document || !self.document.head) return null;
            if (self.location && xt.test(self.location.origin)) return null;
            var i = self.document.head.querySelector('meta[name="'.concat(t, '"]'));
            return i && i.getAttribute("content") || null
        }
        var Pt = At("thirdPartyUrl") || "https://3p.ampproject.net",
            Ot = At("thirdPartyFrameHost") || "ampproject.net",
            It = ("string" == typeof At("thirdPartyFrameRegex") ? new RegExp(At("thirdPartyFrameRegex")) : At("thirdPartyFrameRegex")) || /^d-\d+\.ampproject\.net$/,
            Mt = At("cdnUrl") || Et("runtime-host") || "https://cdn.ampproject.org",
            Tt = /^https?:\/\/localhost(:\d+)?$/,
            St = At("errorReportingUrl") || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            Rt = At("betaErrorReportingUrl") || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            _t = At("localDev") || !1,
            kt = [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            Ct = At("geoApiUrl") || Et("amp-geo-api"),
            Nt = "";

        function Dt(t) {
            var i = t || self;
            return i.__AMP_MODE ? i.__AMP_MODE : i.__AMP_MODE = function(t) {
                return {
                    localDev: !1,
                    development: Ut(t, wt(t)),
                    esm: !1,
                    test: !1,
                    rtvVersion: jt(t)
                }
            }(i)
        }

        function jt(t) {
            var i;
            return Nt || (Nt = (null === (i = t.AMP_CONFIG) || void 0 === i ? void 0 : i.v) || "01".concat("2205270638004")), Nt
        }

        function Ut(t, i) {
            var n = i || wt(t);
            return ["1", "actions", "amp", "amp4ads", "amp4email"].includes(n.development) || !!t.AMP_DEV_MODE
        }
        var Lt = function() {},
            zt = void 0;

        function Ht(t) {
            zt = t
        }
        var Gt = function() {
                return "01".concat("2205270638004")
            },
            Vt = function(t, i) {
                return i.reduce((function(t, i) {
                    return "".concat(t, "&s[]=").concat(qt(i))
                }), "https://log.amp.dev/?v=".concat(Gt(), "&id=").concat(encodeURIComponent(t)))
            },
            Ft = function() {
                return "".concat(Mt, "/rtv/").concat(Gt(), "/log-messages.simple.json")
            },
            qt = function(t) {
                return encodeURIComponent(String(Z(t)))
            },
            Bt = function(t) {
                return parseInt(wt(t).log, 10)
            },
            $t = function() {
                function t(t, i) {
                    var n = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    this.win = t, this.rr = i, this.nr = this.tr(), this.er = r, this.ir = null, this.ur = vt((function() {
                        t.fetch(Ft()).then((function(t) {
                            return t.json()
                        }), Lt).then((function(t) {
                            t && (n.ir = t)
                        }))
                    })), this.ar = this.assert.bind(this)
                }
                var i = t.prototype;
                return i.tr = function() {
                    var t, i = this.win;
                    return null !== (t = i.console) && void 0 !== t && t.log && 0 != Bt(i) ? this.cr() : 0
                }, i.cr = function(t) {
                    return this.rr(Bt(t), Dt().development)
                }, i.lr = function(t, i, n) {
                    var r, e, s;
                    if (i > (null !== (r = zt) && void 0 !== r ? r : this.nr)) return !1;
                    var u = this.win.console,
                        o = null !== (e = (s = {}, C(s, 1, u.error), C(s, 3, u.info), C(s, 2, u.warn), s)[i]) && void 0 !== e ? e : u.log,
                        h = this.sr(n),
                        a = "[".concat(t, "]");
                    return Y(h[0]) ? h[0] = a + " " + h[0] : h.unshift(a), o.apply(u, h), !0
                }, i.fine = function(t) {
                    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    this.lr(t, 4, n)
                }, i.info = function(t) {
                    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    this.lr(t, 3, n)
                }, i.warn = function(t) {
                    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    this.lr(t, 2, n)
                }, i.error = function(t) {
                    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    if (!this.lr(t, 1, n)) {
                        var e, s, u = this.createError.apply(this, n);
                        u.name = t || u.name, null === (e = (s = self).__AMP_REPORT_ERROR) || void 0 === e || e.call(s, u)
                    }
                }, i.expectedError = function(t) {
                    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    var e, s;
                    this.lr(t, 1, n) || null === (e = (s = self).__AMP_REPORT_ERROR) || void 0 === e || e.call(s, this.createExpectedError.apply(this, n))
                }, i.createError = function(t) {
                    return this.vr(l.apply(null, arguments))
                }, i.createExpectedError = function(t) {
                    return this.vr(m.apply(null, arguments))
                }, i.vr = function(t) {
                    return t = f(t), this.er ? t.message ? -1 == t.message.indexOf(this.er) && (t.message += this.er) : t.message = this.er : tt(t.message) && (t.message = it(t.message)), t
                }, i.sr = function(t) {
                    return V(t[0]) ? this.hr(t[0]) : t
                }, i.hr = function(t) {
                    var i, n = t.shift();
                    return Dt(this.win).development && this.ur(), null !== (i = this.ir) && void 0 !== i && i[n] ? [this.ir[n]].concat(t) : ["More info at ".concat(Vt(n, t))]
                }, i.assert = function(t, i, n) {
                    return V(i) ? this.assert.apply(this, [t].concat(this.hr(i))) : nt.apply(null, [this.er].concat(Array.prototype.slice.call(arguments)))
                }, i.assertElement = function(t, i) {
                    return function(t, i, n) {
                        return rt(t, i, K(i), "Element expected", n)
                    }(this.ar, t, i)
                }, i.assertString = function(t, i) {
                    return function(t, i, n) {
                        return rt(t, i, Y(i), "String expected", n)
                    }(this.ar, t, i)
                }, i.assertNumber = function(t, i) {
                    return function(t, i, n) {
                        return rt(t, i, "number" == typeof i, "Number expected", n)
                    }(this.ar, t, i)
                }, i.assertArray = function(t, i) {
                    return function(t, i, n) {
                        return rt(t, i, V(i), "Array expected", n)
                    }(this.ar, t, i)
                }, i.assertBoolean = function(t, i) {
                    return function(t, i, n) {
                        return rt(t, i, !!i === i, "Boolean expected", n)
                    }(this.ar, t, i)
                }, t
            }();
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var Wt = self.__AMP_LOG,
            Yt = null;

        function Kt(t, i) {
            if (!Yt) throw new Error("failed to call initLogConstructor");
            return new Yt(self, t, i)
        }

        function Jt(t) {
            return Wt.user || (Wt.user = Xt(X)),
                function(t, i) {
                    return i && i.ownerDocument.defaultView != t
                }(Wt.user.win, t) ? Wt.userForEmbed || (Wt.userForEmbed = Xt(Q)) : Wt.user
        }

        function Xt(t) {
            return Kt((function(t, i) {
                return i || t >= 1 ? 4 : 2
            }), t)
        }

        function Qt() {
            return Wt.dev || (Wt.dev = Kt((function(t) {
                return t >= 3 ? 4 : t >= 2 ? 3 : 0
            })))
        }

        function Zt(t, i, n, r, e, s, u, o, h, a, c) {
            return t
        }

        function ti(t, i, n, r, e, s, u, o, h, a, c) {
            return Jt().assert(t, i, n, r, e, s, u, o, h, a, c)
        }
        var ii = ["GET", "POST"];

        function ni(t, i) {
            var n = new XMLHttpRequest;
            if (!("withCredentials" in n)) throw Qt().createExpectedError("CORS is not supported");
            return n.open(t, i, !0), n
        }
        var ri = function() {
            function t(t) {
                this.Pt = t, this.status = this.Pt.status, this.statusText = this.Pt.statusText, this.ok = this.status >= 200 && this.status < 300, this.headers = new si(t), this.bodyUsed = !1, this.body = null, this.url = t.responseURL
            }
            var i = t.prototype;
            return i.clone = function() {
                return et(!this.bodyUsed), new t(this.Pt)
            }, i.Tt = function() {
                return et(!this.bodyUsed), this.bodyUsed = !0, Promise.resolve(this.Pt.responseText)
            }, i.text = function() {
                return this.Tt()
            }, i.json = function() {
                return this.Tt().then(at)
            }, i.arrayBuffer = function() {
                return this.Tt().then(ct)
            }, t
        }();

        function ei(t) {
            return void 0 === t ? "GET" : (t = t.toUpperCase(), et(ii.includes(t)), t)
        }
        var si = function() {
                function t(t) {
                    this.Pt = t
                }
                var i = t.prototype;
                return i.get = function(t) {
                    return this.Pt.getResponseHeader(t)
                }, i.has = function(t) {
                    return null != this.Pt.getResponseHeader(t)
                }, t
            }(),
            ui = function(t) {
                U(n, t);
                var i = H(n);

                function n(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = A(),
                        e = D({
                            status: 200,
                            statusText: "OK",
                            responseText: t ? String(t) : "",
                            getResponseHeader: function(t) {
                                var i = String(t).toLowerCase();
                                return x(r, i) ? r[i] : null
                            }
                        }, n);
                    if (e.status = void 0 === n.status ? 200 : parseInt(n.status, 10), V(n.headers)) n.headers.forEach((function(t) {
                        var i = t[0],
                            n = t[1];
                        r[String(i).toLowerCase()] = String(n)
                    }));
                    else if (w(n.headers))
                        for (var s in n.headers) r[String(s).toLowerCase()] = String(n.headers[s]);
                    return n.statusText && (e.statusText = String(n.statusText)), i.call(this, e)
                }
                return n
            }(ri);

        function oi(t) {
            return (t.ownerDocument || t).defaultView
        }
        var hi, ai = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;

        function ci(t, i, n, r, e) {
            return e || (i ? "�" : r ? t.slice(0, -1) + "\\" + t.slice(-1).charCodeAt(0).toString(16) + " " : "\\" + t)
        }

        function fi(t) {
            return void 0 !== hi ? hi : hi = function(t) {
                try {
                    var i = t.ownerDocument,
                        n = i.createElement("div"),
                        r = i.createElement("div");
                    return n.appendChild(r), n.querySelector(":scope div") === r
                } catch (t) {
                    return !1
                }
            }(t)
        }

        function li(t, i) {
            return t.replace(/^|,/g, "$&".concat(i, " "))
        }

        function vi(t) {
            return String(t).replace(ai, ci)
        }

        function di(t) {
            et(/^[\w-]+$/.test(t))
        }

        function mi(t, i) {
            var n = t.classList,
                r = "i-amphtml-scoped";
            n.add(r);
            var e = li(i, ".".concat(r)),
                s = t.querySelectorAll(e);
            return n.remove(r), s
        }

        function pi(t, i) {
            if (fi(t)) return t.querySelector(li(i, ":scope"));
            var n = mi(t, i)[0];
            return void 0 === n ? null : n
        }

        function gi(t, i) {
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
            return !!n && n.call(t, i)
        }

        function bi(t, i, n) {
            var r;
            for (r = t; r && r !== n; r = r.parentElement)
                if (i(r)) return r;
            return null
        }

        function yi(t, i) {
            return t.closest ? t.closest(i) : bi(t, (function(t) {
                return gi(t, i)
            }))
        }

        function wi(t, i) {
            for (var n = t.lastElementChild; n; n = n.previousElementSibling)
                if (i(n)) return n;
            return null
        }

        function Ai(t, i) {
            return di(i), pi(t, "> [".concat(i, "]"))
        }

        function xi(t) {
            return Y(i = t) ? n = i : K(i) && (n = i.tagName), !(!n || !n.toLowerCase().startsWith("i-")) || t.nodeType === Node.ELEMENT_NODE && (st(t), t.hasAttribute("placeholder") || t.hasAttribute("fallback") || t.hasAttribute("overflow"));
            var i, n
        }
        var Ei, Pi = {
            bubbles: !0,
            cancelable: !0
        };

        function Oi(t, i, n) {
            if (i(t)) n();
            else {
                var r = oi(t);
                if (r.MutationObserver) {
                    var e = new r.MutationObserver((function() {
                        i(t) && (e.disconnect(), n())
                    }));
                    e.observe(t, {
                        childList: !0
                    })
                } else var s = r.setInterval((function() {
                    i(t) && (r.clearInterval(s), n())
                }), 5)
            }
        }

        function Ii(t, i) {
            Oi(t.documentElement, (function() {
                return !!t.body
            }), i)
        }

        function Mi(t) {
            return new Promise((function(i) {
                return Ii(t, i)
            }))
        }

        function Ti(t) {
            var i;
            null === (i = t.parentElement) || void 0 === i || i.removeChild(t)
        }

        function Si(t, i) {
            t.insertBefore(i, t.firstChild)
        }

        function Ri(t) {
            var i = t.isConnected;
            if (void 0 !== i) return i;
            for (var n = t;
                (n = _i(n)).host;) n = n.host;
            return n.nodeType === Node.DOCUMENT_NODE
        }

        function _i(t) {
            if (Node.prototype.getRootNode) return t.getRootNode();
            var i, n;
            for (i = t; i.parentNode && (!(n = i) || "I-AMPHTML-SHADOW-ROOT" != n.tagName && (11 != n.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(n))); i = i.parentNode);
            return i
        }

        function ki(t, i) {
            var n = t;
            do {
                if (n.nextSibling) return !0
            } while ((n = n.parentNode) && n != i);
            return !1
        }

        function Ci(t) {
            try {
                t.focus()
            } catch (t) {}
        }

        function Ni(t) {
            return t.parent && t.parent != t
        }

        function Di(t, i, n, r) {
            var e = n || {};
            et(t.ownerDocument);
            var s = t.ownerDocument.createEvent("Event");
            s.data = e;
            var u = r || Pi,
                o = u.bubbles,
                h = u.cancelable;
            s.initEvent(i, o, h), t.dispatchEvent(s)
        }

        function ji(t, i) {
            return i !== t && t.contains(i)
        }

        function Ui(t) {
            return t.hasAttribute("i-amphtml-ssr")
        }

        function Li(t, i) {
            var n = t.head.querySelector("script[nonce]");
            if (n) {
                var r = n.nonce || n.getAttribute("nonce");
                i.setAttribute("nonce", null != r ? r : "")
            }
        }

        function zi(t, i, n, r) {
            return {
                left: t,
                top: i,
                width: n,
                height: r,
                bottom: i + r,
                right: t + n,
                x: t,
                y: i
            }
        }

        function Hi(t, i, n) {
            return zi(t.left - t.width * i, t.top - t.height * n, t.width * (1 + 2 * i), t.height * (1 + 2 * n))
        }

        function Gi(t, i, n) {
            return 0 == i && 0 == n || 0 == t.width && 0 == t.height ? t : zi(t.left + i, t.top + n, t.width, t.height)
        }

        function Vi() {
            return Ri(this) ? Ei.call(this) : zi(0, 0, 0, 0)
        }

        function Fi(t) {
            return !t.IntersectionObserver || !t.IntersectionObserverEntry || !!t.IntersectionObserver._stub || ! function(t) {
                try {
                    return new t.IntersectionObserver((function() {}), {
                        root: t.document
                    }), !0
                } catch (t) {
                    return !1
                }
            }(t) || function(t) {
                return /apple/i.test(t.navigator.vendor)
            }(t)
        }
        var qi = function() {
            function t(i, n) {
                this.Wn = i, this.It = D({
                    root: null,
                    rootMargin: "0px 0px 0px 0px"
                }, n), this.Mt = [], this.kt = null, t._upgraders.push(this.Rt.bind(this))
            }
            var n = t.prototype;
            return n.disconnect = function() {
                this.kt ? this.kt.disconnect() : this.Mt.length = 0
            }, n.takeRecords = function() {
                return this.kt ? this.kt.takeRecords() : []
            }, n.observe = function(t) {
                this.kt ? this.kt.observe(t) : -1 == this.Mt.indexOf(t) && this.Mt.push(t)
            }, n.unobserve = function(t) {
                if (this.kt) this.kt.unobserve(t);
                else {
                    var i = this.Mt.indexOf(t); - 1 != i && this.Mt.splice(i, 1)
                }
            }, n.Rt = function(t) {
                var i = new t(this.Wn, this.It);
                this.kt = i;
                for (var n, r = o(this.Mt, !0); !(n = r()).done;) {
                    var e = n.value;
                    i.observe(e)
                }
                this.Mt.length = 0
            }, i(t, [{
                key: "root",
                get: function() {
                    return this.kt ? this.kt.root : this.It.root || null
                }
            }, {
                key: "rootMargin",
                get: function() {
                    return this.kt ? this.kt.rootMargin : this.It.rootMargin
                }
            }, {
                key: "thresholds",
                get: function() {
                    return this.kt ? this.kt.thresholds : [].concat(this.It.threshold || 0)
                }
            }]), t
        }();

        function Bi(t) {
            return (t = Number(t)) ? t > 0 ? 1 : -1 : t
        }
        qi._upgraders = [];
        var $i = Object.prototype.hasOwnProperty;

        function Wi(t, i) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), r = 1; r < arguments.length; r++) {
                var e = arguments[r];
                if (null != e)
                    for (var s in e) $i.call(e, s) && (n[s] = e[s])
            }
            return n
        }

        function Yi(t) {
            return Object.keys(t).map((function(i) {
                return t[i]
            }))
        }

        function Ki(t) {
            return !t.ResizeObserver || !!t.ResizeObserver._stub
        }
        var Ji, Xi = function() {
            function t(i) {
                this.Wn = i, this.Mt = [], this.kt = null, t._upgraders.push(this.Rt.bind(this))
            }
            var i = t.prototype;
            return i.disconnect = function() {
                this.kt ? this.kt.disconnect() : this.Mt.length = 0
            }, i.observe = function(t) {
                this.kt ? this.kt.observe(t) : -1 == this.Mt.indexOf(t) && this.Mt.push(t)
            }, i.unobserve = function(t) {
                if (this.kt) this.kt.unobserve(t);
                else {
                    var i = this.Mt.indexOf(t); - 1 != i && this.Mt.splice(i, 1)
                }
            }, i.Rt = function(t) {
                var i = new t(this.Wn);
                this.kt = i;
                for (var n, r = o(this.Mt, !0); !(n = r()).done;) {
                    var e = n.value;
                    i.observe(e)
                }
                this.Mt.length = 0
            }, t
        }();

        function Qi(t, i) {
            var n = i > 0 ? 0 | i : 0;
            return this.substr(n, t.length) === t
        }
        Xi._upgraders = [], (Ji = self).fetch || (Object.defineProperty(Ji, "fetch", {
                value: function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise((function(n, r) {
                        var e = ei(i.method || "GET"),
                            s = ni(e, t);
                        "include" == i.credentials && (s.withCredentials = !0), "document" !== i.responseType && "text" !== i.responseType || (s.responseType = i.responseType), i.headers && Object.keys(i.headers).forEach((function(t) {
                            s.setRequestHeader(t, i.headers[t])
                        })), s.onreadystatechange = function() {
                            if (!(s.readyState < 2)) return s.status < 100 || s.status > 599 ? (s.onreadystatechange = null, void r(Jt().createExpectedError("Unknown HTTP status ".concat(s.status)))) : void(4 == s.readyState && n(new ri(s)))
                        }, s.onerror = function() {
                            r(Jt().createExpectedError("Network failure"))
                        }, s.onabort = function() {
                            r(Jt().createExpectedError("Request aborted"))
                        }, "POST" == e ? s.send(i.body) : s.send()
                    }))
                },
                writable: !0,
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Ji, "Response", {
                value: ui,
                writable: !0,
                enumerable: !1,
                configurable: !0
            })),
            function(t) {
                t.Math.sign || t.Object.defineProperty(t.Math, "sign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: Bi
                })
            }(self),
            function(t) {
                t.Object.assign || t.Object.defineProperty(t.Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: Wi
                })
            }(self),
            function(t) {
                t.Object.values || t.Object.defineProperty(t.Object, "values", {
                    configurable: !0,
                    writable: !0,
                    value: Yi
                })
            }(self),
            function(t) {
                t.Array.prototype.includes || t.Object.defineProperty(t.Array.prototype, "includes", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: s
                })
            }(self),
            function(t) {
                var i = t.Map,
                    n = new i;
                if (n.set(0, 0) !== n) {
                    var r = n.set;
                    t.Object.defineProperty(i.prototype, "set", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            return r.apply(this, arguments), this
                        }
                    })
                }
            }(self),
            function(t) {
                var i = t.WeakMap,
                    n = new i;
                if (n.set({}, 0) !== n) {
                    var r = n.set;
                    t.Object.defineProperty(i.prototype, "set", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            return r.apply(this, arguments), this
                        }
                    })
                }
            }(self),
            function(t) {
                var i = t.Set,
                    n = new i([1]);
                if (n.size < 1 && (t.Set = function(t) {
                        var n = new i;
                        if (t)
                            for (var r = G(t), e = 0; e < r.length; e++) n.add(r[e]);
                        return n
                    }), n.add(0) !== n) {
                    var r = n.add;
                    t.Object.defineProperty(i.prototype, "add", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            return r.apply(this, arguments), this
                        }
                    })
                }
            }(self),
            function(t) {
                t.String.prototype.startsWith || t.Object.defineProperty(t.String.prototype, "startsWith", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: Qi
                })
            }(self), self.document && (function(t) {
                var i = t.HTMLDocument || t.Document;
                i && !i.prototype.contains && t.Object.defineProperty(i.prototype, "contains", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: k
                })
            }(self), function(t) {
                (function(t) {
                    if (!t.document) return !1;
                    try {
                        return 0 !== t.document.createElement("div").getBoundingClientRect().top
                    } catch (t) {
                        return !0
                    }
                })(t) && (Ei = Element.prototype.getBoundingClientRect, t.Object.defineProperty(t.Element.prototype, "getBoundingClientRect", {
                    value: Vi
                }))
            }(self), function(t, i) {
                var n = t.document,
                    r = function(t) {
                        var i = t.customElements;
                        return !!(i && i.define && i.get && i.whenDefined)
                    }(t);
                if (!(!n || r && function(t) {
                        return -1 === t.HTMLElement.toString().indexOf("[native code]")
                    }(t))) {
                    var e = !0,
                        s = !1;
                    if (i && r) try {
                        var u = t.Reflect,
                            o = Object.create(i.prototype);
                        Function.call.call(i, o), s = !(null == u || !u.construct)
                    } catch (t) {
                        e = !1
                    }
                    s ? function(t) {
                        var i = t.HTMLElement,
                            n = t.Reflect;

                        function r() {
                            var t = this.constructor;
                            return n.construct(i, [], t)
                        }
                        R(i, r), t.HTMLElementOrig = t.HTMLElement, t.HTMLElement = r
                    }(t) : e && function(t) {
                        var i = t.Element,
                            n = t.HTMLElement,
                            r = t.document,
                            e = r.createElement,
                            s = new S(t),
                            u = new T(t, s);
                        Object.defineProperty(t, "customElements", {
                            enumerable: !0,
                            configurable: !0,
                            value: u
                        });
                        var o = i.prototype,
                            h = o.attachShadow,
                            a = o.createShadowRoot;

                        function c() {
                            var t = this.constructor,
                                i = s.current();
                            if (!i) {
                                var n = s.getByConstructor(t);
                                i = e.call(r, n.name)
                            }
                            return _(i, t.prototype), i
                        }
                        h && (o.attachShadow = function(t) {
                            var i = h.apply(this, arguments);
                            return s.observe(i), i
                        }, o.attachShadow.toString = function() {
                            return h.toString()
                        }), a && (o.createShadowRoot = function() {
                            var t = a.apply(this, arguments);
                            return s.observe(t), t
                        }, o.createShadowRoot.toString = function() {
                            return a.toString()
                        }), R(n, c), t.HTMLElementOrig = t.HTMLElement, t.HTMLElement = c, c.call || (c.apply = t.Function.apply, c.bind = t.Function.bind, c.call = t.Function.call)
                    }(t)
                }
            }(self, function() {
                return function() {}
            }()), function(t) {
                Fi(t) && function(t) {
                        if (!t.IntersectionObserver) return t.IntersectionObserver = qi, void(t.IntersectionObserver._stub = qi);
                        var i = t.IntersectionObserver;
                        t.IntersectionObserver = function(t, i) {
                            return function(n, r) {
                                var e;
                                return 9 === (null == r || null === (e = r.root) || void 0 === e ? void 0 : e.nodeType) ? new i(n, r) : new t(n, r)
                            }
                        }(t.IntersectionObserver, qi), t.IntersectionObserver._stub = qi, t.IntersectionObserver._native = i
                    }(t),
                    function(t) {
                        t.IntersectionObserverEntry && !("isIntersecting" in t.IntersectionObserverEntry.prototype) && Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                return this.intersectionRatio > 0
                            }
                        })
                    }(t)
            }(self), function(t) {
                Ki(t) && function(t) {
                    t.ResizeObserver || (t.ResizeObserver = Xi, t.ResizeObserver._stub = Xi)
                }(t)
            }(self), function(t) {
                t.AbortController || (Object.defineProperty(t, "AbortController", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: r
                }), Object.defineProperty(t, "AbortSignal", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: e
                }))
            }(self));
        var Zi = "cls",
            tn = "clstu",
            nn = "cls-1",
            rn = "pc",
            en = "building",
            sn = "mounting",
            un = "loading",
            on = "complete",
            hn = "error";

        function an(t) {
            return t.readyState != un && "uninitialized" != t.readyState
        }

        function cn(t) {
            return t.readyState == on
        }

        function fn(t, i) {
            ln(t, an, i)
        }

        function ln(t, i, n) {
            var r = i(t);
            r ? n(t) : t.addEventListener("readystatechange", (function e() {
                i(t) && (r || (r = !0, n(t)), t.removeEventListener("readystatechange", e))
            }))
        }

        function vn(t) {
            return new Promise((function(i) {
                fn(t, i)
            }))
        }

        function dn(t) {
            return new Promise((function(i) {
                ln(t, cn, i)
            }))
        }
        var mn = ["amp-mustache"],
            pn = "latest";

        function gn(t) {
            if (!t) return null;
            var i = t.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i),
                n = i ? i[2] : void 0,
                r = i ? i[3] : void 0;
            return n && r ? {
                extensionId: n,
                extensionVersion: r
            } : null
        }

        function bn(t, i, n) {
            var r = t.document.createElement("script");
            r.async = !0, wn(i) ? n = "" : r.setAttribute(mn.indexOf(i) >= 0 ? "custom-template" : "custom-element", i), r.setAttribute("data-script", i), r.setAttribute("i-amphtml-inserted", ""), Li(t.document, r), r.setAttribute("crossorigin", "anonymous");
            var e = function(t, i, n, r) {
                var e = Mt,
                    s = Dt().rtvVersion,
                    u = n ? "-" + n : "";
                return "".concat(e, "/rtv/").concat(s, "/v0/").concat(i).concat(u).concat(".js")
            }(t.location, i, n);
            return r.src = e, r
        }

        function yn(t, i, n, r) {
            for (var e = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], s = ":not([i-amphtml-loaded-new-version])" + (e ? "" : ":not([i-amphtml-inserted])"), u = t.document.head.querySelectorAll('script[src*="/'.concat(i, '-"]').concat(s)), o = [], h = 0; h < u.length; h++) {
                var a = u[h],
                    c = gn(a.src);
                if (c) {
                    var f = c.extensionId,
                        l = c.extensionVersion;
                    f == i && (wn(i) || l == n || l == pn && r) && o.push(a)
                }
            }
            return o
        }

        function wn(t) {
            return t.startsWith("_")
        }

        function An(t, i, n, r) {
            Cn(t = Tn(t), t, i, n), r && kn(t, i)
        }

        function xn(t, i, n, r) {
            var e = Rn(t),
                s = _n(e);
            Cn(s, e, i, n), r && kn(s, i)
        }

        function En(t, i) {
            return kn(t = Tn(t), i)
        }

        function Pn(t, i) {
            return kn(_n(Rn(t)), i)
        }

        function On(t, i) {
            var n = _n(Rn(t));
            return zn(n, i) ? kn(n, i) : null
        }

        function In(t, i) {
            return Nn(_n(t), i)
        }

        function Mn(t, i) {
            return Dn(_n(t), i)
        }

        function Tn(t) {
            return t.__AMP_TOP || (t.__AMP_TOP = t)
        }

        function Sn(t, i) {
            var n = (t.ownerDocument || t).defaultView,
                r = i || Tn(n);
            if (n && n != r && Tn(n) == r) try {
                return n.frameElement
            } catch (t) {}
            return null
        }

        function Rn(t) {
            return t.nodeType ? function(t) {
                return En(t, "ampdoc")
            }(oi(t)).getAmpDoc(t) : t
        }

        function _n(t) {
            var i = Rn(t);
            return i.isSingleDoc() ? i.win : i
        }

        function kn(t, i) {
            Zt(zn(t, i));
            var n = jn(t)[i];
            return n.obj || (Zt(n.ctor), Zt(n.context), n.obj = new n.ctor(n.context), Zt(n.obj), n.context = null, n.resolve && n.resolve(n.obj)), n.obj
        }

        function Cn(t, i, n, r, e, s) {
            var u = jn(t),
                o = u[n];
            o || (o = u[n] = {
                obj: null,
                promise: null,
                resolve: null,
                reject: null,
                context: null,
                ctor: null,
                sharedInstance: s || !1
            }), !e && o.ctor || (o.ctor = r, o.context = i, o.sharedInstance = s || !1, o.resolve && kn(t, n))
        }

        function Nn(t, i) {
            var n = Dn(t, i);
            if (n) return n;
            var r, e, s, u, o = jn(t);
            return o[i] = (e = (r = new a).promise, s = r.reject, u = r.resolve, e.catch((function() {})), {
                obj: null,
                promise: e,
                resolve: u,
                reject: s,
                context: null,
                ctor: null
            }), o[i].promise
        }

        function Dn(t, i) {
            var n = jn(t)[i];
            return n ? n.promise ? n.promise : (kn(t, i), n.promise = Promise.resolve(n.obj)) : null
        }

        function jn(t) {
            var i = t.__AMP_SERVICES;
            return i || (i = t.__AMP_SERVICES = {}), i
        }

        function Un(t) {
            return "function" == typeof t.dispose
        }

        function Ln(t, i) {
            if (Un(i)) try {
                (function(t) {
                    return Zt(Un(t)), t
                })(i).dispose()
            } catch (i) {
                Qt().error("SERVICE", "failed to dispose service", t, i)
            }
        }

        function zn(t, i) {
            var n = t.__AMP_SERVICES && t.__AMP_SERVICES[i];
            return !(!n || !n.ctor)
        }

        function Hn(t, i, n, r) {
            return Gn(t, i, n, r).then((function(t) {
                return function(t, i, n) {
                    return ti(t, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", i, n, n, n)
                }(t, i, n)
            }))
        }

        function Gn(t, i, n, r) {
            var e = Mn(t, i);
            if (e) return e;
            var s = Rn(t);
            return s.whenExtensionsKnown().then((function() {
                var t = s.getExtensionVersion(n);
                return t ? En(s.win, "extensions").waitForExtension(n, t) : null
            })).then((function(n) {
                return n ? r ? Mn(t, i) : In(t, i) : null
            }))
        }
        var Vn, Fn = function(t) {
                return Gn(t, "access", "amp-access")
            },
            qn = function(t) {
                return Gn(t, "subscriptions", "amp-subscriptions")
            },
            Bn = function(t) {
                return On(t, "action")
            },
            $n = function(t) {
                return Hn(t, "activity", "amp-analytics")
            },
            Wn = function(t) {
                return Rn(t)
            },
            Yn = function(t) {
                return En(t, "ampdoc")
            },
            Kn = function(t) {
                return Gn(t, "amp-analytics-instrumentation", "amp-analytics")
            },
            Jn = function(t) {
                return function(t, i, n) {
                    var r = On(t, i);
                    return r ? Promise.resolve(r) : Gn(t, i, "amp-bind")
                }(t, "bind")
            },
            Xn = function(t) {
                return In(t, "cid")
            },
            Qn = function(t) {
                return En(t, "crypto")
            },
            Zn = function(t) {
                return Pn(t, "documentInfo").get()
            },
            tr = function(t) {
                return En(t, "extensions")
            },
            ir = function(t) {
                return Pn(t, "history")
            },
            nr = function(t) {
                return On(t, "loadingIndicator")
            },
            rr = function(t) {
                return Pn(t, "mutator")
            },
            er = function(t) {
                return En(t, "performance")
            },
            sr = function(t) {
                return En(t, "platform")
            },
            ur = function(t) {
                return En(t, "preconnect")
            },
            or = function(t) {
                return Pn(t, "resources")
            },
            hr = function(t) {
                return In(t, "storage")
            },
            ar = function(t) {
                return function(t, i) {
                    return kn(t, "timer")
                }(t)
            },
            cr = function(t) {
                return On(t, "url-replace")
            },
            fr = function(t) {
                return Gn(t, "geo", "amp-geo", !0)
            },
            lr = function(t) {
                return On(t, "url")
            },
            vr = function(t) {
                return Pn(t, "viewer")
            },
            dr = function(t) {
                return En(t, "vsync")
            },
            mr = function(t) {
                return Pn(t, "viewport")
            },
            pr = function(t) {
                return En(t, "xhr")
            },
            gr = "prerender",
            br = "preview",
            yr = "visible",
            wr = "hidden",
            Ar = "paused",
            xr = "inactive",
            Er = function() {
                function t() {
                    this.Nt = null
                }
                var i = t.prototype;
                return i.add = function(t) {
                    var i = this;
                    return this.Nt || (this.Nt = []), this.Nt.push(t),
                        function() {
                            i.remove(t)
                        }
                }, i.remove = function(t) {
                    this.Nt && $(this.Nt, t)
                }, i.removeAll = function() {
                    this.Nt && (this.Nt.length = 0)
                }, i.fire = function(t) {
                    if (this.Nt)
                        for (var i, n = o(this.Nt.slice(), !0); !(i = n()).done;)(0, i.value)(t)
                }, i.getHandlerCount = function() {
                    var t, i;
                    return null !== (t = null === (i = this.Nt) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0
                }, t
            }(),
            Pr = function() {
                function t() {
                    this.Ct = A(), this.Dt = null
                }
                var i = t.prototype;
                return i.get = function(t) {
                    var i = this.Ct[t];
                    return null == i ? null : i
                }, i.whenSignal = function(t) {
                    var i, n = null === (i = this.Dt) || void 0 === i ? void 0 : i[t];
                    if (!n) {
                        var r = this.Ct[t];
                        n = null != r ? {
                            promise: "number" == typeof r ? Promise.resolve(r) : Promise.reject(r)
                        } : new a, this.Dt || (this.Dt = A()), this.Dt[t] = n
                    }
                    return n.promise
                }, i.signal = function(t, i) {
                    var n;
                    if (null == this.Ct[t]) {
                        var r = null != i ? i : Date.now();
                        this.Ct[t] = r;
                        var e = null === (n = this.Dt) || void 0 === n ? void 0 : n[t];
                        null != e && e.resolve && (e.resolve(r), e.resolve = void 0, e.reject = void 0)
                    }
                }, i.rejectSignal = function(t, i) {
                    var n;
                    if (null == this.Ct[t]) {
                        this.Ct[t] = i;
                        var r = null === (n = this.Dt) || void 0 === n ? void 0 : n[t];
                        null != r && r.reject && (r.reject(i), r.promise.catch((function() {})), r.resolve = void 0, r.reject = void 0)
                    }
                }, i.reset = function(t) {
                    var i;
                    this.Ct[t] && delete this.Ct[t];
                    var n = null === (i = this.Dt) || void 0 === i ? void 0 : i[t];
                    n && !n.resolve && delete this.Dt[t]
                }, t
            }(),
            Or = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"],
            Ir = {
                "getPropertyPriority": function() {
                    return ""
                },
                "getPropertyValue": function() {
                    return ""
                }
            };

        function Mr(t) {
            var i = t.replace(/[A-Z]/g, (function(t) {
                return "-" + t.toLowerCase()
            }));
            return Or.some((function(t) {
                return i.startsWith(t + "-")
            })) ? "-".concat(i) : i
        }

        function Tr(t, i, n) {
            if (i.startsWith("--")) return i;
            Vn || (Vn = A());
            var r = Vn[i];
            if (!r || n) {
                if (r = i, void 0 === t[i]) {
                    var e = function(t) {
                            return t.charAt(0).toUpperCase() + t.slice(1)
                        }(i),
                        s = function(t, i) {
                            for (var n = 0; n < Or.length; n++) {
                                var r = Or[n] + i;
                                if (void 0 !== t[r]) return r
                            }
                            return ""
                        }(t, e);
                    void 0 !== t[s] && (r = s)
                }
                n || (Vn[i] = r)
            }
            return r
        }

        function Sr(t, i) {
            var n = t.style;
            for (var r in i) n.setProperty(Mr(Tr(n, r)), String(i[r]), "important")
        }

        function Rr(t, i, n, r, e) {
            var s = Tr(t.style, i, e);
            if (s) {
                var u = r ? n + r : n;
                t.style.setProperty(Mr(s), u)
            }
        }

        function _r(t, i) {
            for (var n in i) Rr(t, n, i[n])
        }

        function kr(t, i) {
            void 0 === i && (i = t.hasAttribute("hidden")), i ? t.removeAttribute("hidden") : t.setAttribute("hidden", "")
        }

        function Cr(t) {
            return "".concat(t, "px")
        }

        function Nr(t, i) {
            return t.getComputedStyle(i) || Ir
        }

        function Dr(t) {
            var i = t[Tr(t, "visibilityState", !0)];
            if (i) return i;
            var n = Tr(t, "hidden", !0);
            return n in t && t[n] ? wr : yr
        }

        function jr(t, i) {
            if (t.addEventListener) {
                var n = Lr(t);
                n && t.addEventListener(n, i)
            }
        }

        function Ur(t, i) {
            if (t.removeEventListener) {
                var n = Lr(t);
                n && t.removeEventListener(n, i)
            }
        }

        function Lr(t) {
            var i = Tr(t, "hidden", !0),
                n = i.indexOf("Hidden");
            return -1 != n ? i.substring(0, n) + "Visibilitychange" : "visibilitychange"
        }
        var zr = function() {
                function t() {}
                return t.getTop = function(t) {
                    return t.top
                }, t.getLocation = function(t) {
                    return t.location
                }, t.getDocumentReferrer = function(t) {
                    return t.document.referrer
                }, t.getHostname = function(t) {
                    return t.location.hostname
                }, t.getUserAgent = function(t) {
                    return t.navigator.userAgent
                }, t.getUserLanguage = function(t) {
                    return t.navigator.userLanguage || t.navigator.language
                }, t.getDevicePixelRatio = function() {
                    return self.devicePixelRatio || 1
                }, t.getSendBeacon = function(t) {
                    if (t.navigator.sendBeacon) return t.navigator.sendBeacon.bind(t.navigator)
                }, t.getXMLHttpRequest = function(t) {
                    return t.XMLHttpRequest
                }, t.getImage = function(t) {
                    return t.Image
                }, t
            }(),
            Hr = "__AMP__",
            Gr = "-ampdoc-ext-known",
            Vr = "-ampdoc-first-visible",
            Fr = "-ampdoc-next-visible",
            qr = "-ampdoc-first-previewed",
            Br = function() {
                function t(t, i, n) {
                    this.win = t, this.zt = null, i && (this.zt = new Wr(t, {
                        params: Jr(t, n)
                    }), t.document.__AMPDOC = this.zt)
                }
                var i = t.prototype;
                return i.isSingleDoc = function() {
                    return !!this.zt
                }, i.getSingleDoc = function() {
                    return Zt(this.zt)
                }, i.Ut = function(t) {
                    return t.everAttached && "function" == typeof t.getAmpDoc ? t.getAmpDoc() : null
                }, i.getAmpDocIfAvailable = function(t) {
                    for (var i = t; i;) {
                        var n = this.Ut(t);
                        if (n) return n;
                        var r = _i(i);
                        if (!r) break;
                        var e = r.__AMPDOC;
                        if (e) return e;
                        i = r.host ? r.host : Sn(r, this.win)
                    }
                    return null
                }, i.getAmpDoc = function(t) {
                    var i = this.getAmpDocIfAvailable(t);
                    if (!i) throw Qt().createError("No ampdoc found for", t);
                    return i
                }, i.installShadowDoc = function(t, i, n) {
                    Zt(!i.__AMPDOC);
                    var r = new Yr(this.win, t, i, n);
                    return i.__AMPDOC = r, r
                }, i.installFieDoc = function(t, i, n) {
                    var r = i.document;
                    Zt(!r.__AMPDOC);
                    var e = Zt(i.frameElement),
                        s = new Kr(i, t, this.getAmpDoc(e), n);
                    return r.__AMPDOC = s, s
                }, t
            }(),
            $r = function() {
                function t(t, i, n) {
                    var r = this;
                    this.win = t, this.Lt = A(), this.Ht = i, this.Gt = n && n.signals || new Pr, this.Vt = n && n.params || A(), this.Ft = null, this.Bt = {};
                    var e, s = this.Vt.visibilityState;
                    Zt(!s || "prerender" === (e = s) || "preview" === e || "visible" === e || "hidden" === e || "paused" === e || "inactive" === e), this.qt = n && n.visibilityState || s || null, this.J = null, this.Wt = new Er, this.$t = null, this.Kt = [];
                    var u = this.Yt.bind(this);
                    this.Ht && this.Kt.push(this.Ht.onVisibilityChanged(u)), jr(this.win.document, u), this.Kt.push((function() {
                        return Ur(r.win.document, u)
                    })), this.Yt()
                }
                var i = t.prototype;
                return i.dispose = function() {
                    (function(t) {
                        var i = jn(t),
                            n = function(t) {
                                if (!Object.prototype.hasOwnProperty.call(i, t)) return "continue";
                                var n = i[t];
                                if (n.sharedInstance) return "continue";
                                n.obj ? Ln(t, n.obj) : n.promise && n.promise.then((function(i) {
                                    return Ln(t, i)
                                }))
                            };
                        for (var r in i) n(r)
                    })(this), this.Kt.forEach((function(t) {
                        return t()
                    }))
                }, i.isSingleDoc = function() {
                    return Zt(null)
                }, i.getParent = function() {
                    return this.Ht
                }, i.signals = function() {
                    return this.Gt
                }, i.getParam = function(t) {
                    var i = this.Vt[t];
                    return null == i ? null : i
                }, i.getMeta = function() {
                    var t = this;
                    return this.Ft || (this.Ft = A(), this.win.document.head.querySelectorAll("meta[name]").forEach((function(i) {
                        var n = i.getAttribute("name"),
                            r = i.getAttribute("content");
                        n && null !== r && void 0 === t.Ft[n] && (t.Ft[n] = r)
                    }))), A(this.Ft)
                }, i.getMetaByName = function(t) {
                    if (!t) return null;
                    var i = this.getMeta()[t];
                    return void 0 !== i ? i : null
                }, i.setMetaByName = function(t, i) {
                    Zt(null)
                }, i.declaresExtension = function(t, i) {
                    var n = this.Bt[t];
                    return !(!n || i && n !== i)
                }, i.declareExtension = function(t, i) {
                    Zt(!this.Bt[t] || this.Bt[t] === i), this.Bt[t] = i
                }, i.getExtensionVersion = function(t) {
                    return this.Bt[t] || null
                }, i.setExtensionsKnown = function() {
                    this.Gt.signal(Gr)
                }, i.whenExtensionsKnown = function() {
                    return this.Gt.whenSignal(Gr)
                }, i.getRootNode = function() {
                    return Zt(null)
                }, i.getHeadNode = function() {}, i.isBodyAvailable = function() {
                    return Zt(!1)
                }, i.getBody = function() {
                    return Zt(null)
                }, i.waitForBodyOpen = function() {
                    return Zt(null)
                }, i.isReady = function() {
                    return Zt(null)
                }, i.whenReady = function() {
                    return Zt(null)
                }, i.getUrl = function() {
                    return Zt(null)
                }, i.getElementById = function(t) {
                    return this.getRootNode().getElementById(t)
                }, i.contains = function(t) {
                    return this.getRootNode().contains(t)
                }, i.overrideVisibilityState = function(t) {
                    this.qt != t && (this.qt = t, this.Yt())
                }, i.Yt = function() {
                    for (var t, i = Dr(this.win.document), n = yr, r = this.Ht; r; r = r.getParent())
                        if (r.getVisibilityState() != yr) {
                            n = r.getVisibilityState();
                            break
                        }
                    var e = this.qt || yr;
                    if (t = e == yr && n == yr && i == yr ? yr : i == wr && e == Ar ? i : e == Ar || e == xr ? e : n == Ar || n == xr ? n : e == br || i == br || n == br ? br : e == gr || i == gr || n == gr ? gr : wr, this.J != t) {
                        if (t == yr) {
                            var s, u = this.win.performance,
                                o = Math.floor(null !== (s = u.timeOrigin) && void 0 !== s ? s : u.timing.navigationStart);
                            null != this.J && (o += Math.floor(u.now())), this.$t = o, this.Gt.signal(Vr, o), this.Gt.signal(Fr, o)
                        } else this.Gt.reset(Fr);
                        t == br && this.Gt.signal(qr), this.J = t, this.Wt.fire()
                    }
                }, i.whenFirstPreviewedOrVisible = function() {
                    return Promise.race([this.whenFirstPreviewed(), this.whenFirstVisible()])
                }, i.whenFirstPreviewed = function() {
                    return this.Gt.whenSignal(qr).then((function() {}))
                }, i.whenFirstVisible = function() {
                    return this.Gt.whenSignal(Vr).then((function() {}))
                }, i.whenNextVisible = function() {
                    return this.Gt.whenSignal(Fr).then((function() {}))
                }, i.getFirstVisibleTime = function() {
                    return this.Gt.get(Vr)
                }, i.getLastVisibleTime = function() {
                    return this.$t
                }, i.getVisibilityState = function() {
                    return Zt(this.J)
                }, i.isPreview = function() {
                    return this.J == br
                }, i.isVisible = function() {
                    return this.J == yr
                }, i.hasBeenVisible = function() {
                    return null != this.getLastVisibleTime()
                }, i.onVisibilityChanged = function(t) {
                    return this.Wt.add(t)
                }, i.registerSingleton = function(t) {
                    return !this.Lt[t] && (this.Lt[t] = !0, !0)
                }, t
            }(),
            Wr = function(t) {
                U(n, t);
                var i = H(n);

                function n(t, n) {
                    var r;
                    return (r = i.call(this, t, null, n)).Jt = r.win.document.body ? Promise.resolve(r.win.document.body) : Mi(r.win.document).then((function() {
                        return r.getBody()
                    })), r.Xt = vn(r.win.document), r
                }
                var r = n.prototype;
                return r.isSingleDoc = function() {
                    return !0
                }, r.getRootNode = function() {
                    return this.win.document
                }, r.getUrl = function() {
                    return zr.getLocation(this.win).href
                }, r.getHeadNode = function() {
                    return this.win.document.head
                }, r.isBodyAvailable = function() {
                    return !!this.win.document.body
                }, r.getBody = function() {
                    return this.win.document.body
                }, r.waitForBodyOpen = function() {
                    return this.Jt
                }, r.isReady = function() {
                    return an(this.win.document)
                }, r.whenReady = function() {
                    return this.Xt
                }, n
            }($r),
            Yr = function(t) {
                U(n, t);
                var i = H(n);

                function n(t, n, r, e) {
                    var s;
                    (s = i.call(this, t, null, e)).Qt = n, s.Zt = r, s.ti = null;
                    var u = new a;
                    s.Jt = u.promise, s.ii = u.resolve, s.ni = !1;
                    var o = new a;
                    return s.Xt = o.promise, s.ri = o.resolve, s
                }
                var r = n.prototype;
                return r.isSingleDoc = function() {
                    return !1
                }, r.getRootNode = function() {
                    return this.Zt
                }, r.getUrl = function() {
                    return this.Qt
                }, r.getHeadNode = function() {
                    return this.Zt
                }, r.isBodyAvailable = function() {
                    return !!this.ti
                }, r.getBody = function() {
                    return this.ti
                }, r.setBody = function(t) {
                    Zt(!this.ti), this.ti = t, this.ii(t), this.ii = void 0
                }, r.waitForBodyOpen = function() {
                    return this.Jt
                }, r.isReady = function() {
                    return this.ni
                }, r.setReady = function() {
                    Zt(!this.ni), this.ni = !0, this.ri(), this.ri = void 0
                }, r.whenReady = function() {
                    return this.Xt
                }, r.getMeta = function() {
                    return A(this.Ft)
                }, r.setMetaByName = function(t, i) {
                    Zt(t), this.Ft || (this.Ft = A()), this.Ft[t] = i
                }, n
            }($r),
            Kr = function(t) {
                U(n, t);
                var i = H(n);

                function n(t, n, r, e) {
                    var s;
                    (s = i.call(this, t, r, e)).Qt = n, s.Jt = s.win.document.body ? Promise.resolve(s.win.document.body) : Mi(s.win.document).then((function() {
                        return s.getBody()
                    })), s.ni = !1;
                    var u = new a;
                    return s.Xt = u.promise, s.ri = u.resolve, s
                }
                var r = n.prototype;
                return r.isSingleDoc = function() {
                    return !1
                }, r.getRootNode = function() {
                    return this.win.document
                }, r.getUrl = function() {
                    return this.Qt
                }, r.getHeadNode = function() {
                    return this.win.document.head
                }, r.isBodyAvailable = function() {
                    return !!this.win.document.body
                }, r.getBody = function() {
                    return this.win.document.body
                }, r.waitForBodyOpen = function() {
                    return this.Jt
                }, r.isReady = function() {
                    return this.ni
                }, r.whenReady = function() {
                    return this.Xt
                }, r.setReady = function() {
                    Zt(!this.ni), this.ni = !0, this.ri(), this.ri = void 0
                }, n
            }($r);

        function Jr(t, i) {
            var n = A();
            return i ? Object.assign(n, i) : (t.name && 0 == t.name.indexOf(Hr) && Object.assign(n, yt(t.name.substring(Hr.length))), t.location && t.location.hash && Object.assign(n, yt(t.location.hash))), n
        }

        function Xr(t) {
            if (!t.hasAttribute("src") && "srcset" in t == 0) {
                var i = t.getAttribute("srcset") || "",
                    n = /\S+/.exec(i);
                if (null == n) return;
                var r = n[0];
                t.setAttribute("src", r)
            }
        }
        var Qr = "nodisplay",
            Zr = "fixed",
            te = "fixed-height",
            ie = "responsive",
            ne = "container",
            re = "fill",
            ee = "flex-item",
            se = "fluid",
            ue = "intrinsic",
            oe = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;

        function he(t) {
            if ("nodisplay" === (i = t) || "fixed" === i || "fixed-height" === i || "responsive" === i || "container" === i || "fill" === i || "flex-item" === i || "fluid" === i || "intrinsic" === i) return t;
            var i
        }

        function ae(t) {
            return "i-amphtml-layout-" + t
        }

        function ce(t) {
            return t == Zr || t == te || t == ie || t == re || t == ee || t == se || t == ue
        }

        function fe(t) {
            return "number" == typeof t ? t + "px" : t && /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(t) ? /^\d+(\.\d+)?$/.test(t) ? t + "px" : t : void 0
        }

        function le(t) {
            ! function(t) {
                ht(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(null != t ? t : ""), "Invalid length value: %s", t)
            }(t);
            var i = /[a-z]+/i.exec(null != t ? t : "");
            return ht(i, "Failed to read units from %s", t), i[0]
        }

        function ve(t) {
            var i = parseFloat(t);
            return J(i) ? i : void 0
        }

        function de(t, i) {
            t.classList.add("i-amphtml-fill-content"), i && t.classList.add("i-amphtml-replaced-content")
        }

        function me(t, i, n, r) {
            for (var e, s = o(F(t), !0); !(e = s()).done;) {
                var u = e.value,
                    h = i.getAttribute(u);
                null !== h ? n.setAttribute(u, h) : r && n.removeAttribute(u)
            }
        }
        var pe, ge = "amp:attached",
            be = "amp:load-start",
            ye = "amp:load-end",
            we = "ready-upgrade",
            Ae = "upgraded",
            xe = "built",
            Ee = "mounted",
            Pe = "load-start",
            Oe = "render-start",
            Ie = "load-end",
            Me = "unload",
            Te = function() {
                function t(t, i) {
                    this.t = t, this.Wn = i, this.$n = {}, this.qn = null
                }
                var i = t.prototype;
                return i.start = function() {
                    this.qn = this.$n, this.$n = {}
                }, i.resolveMatchQuery = function(t) {
                    return "1" === this.Dn(t, Se, "1")
                }, i.resolveListQuery = function(t) {
                    return this.Dn(t, Re, "")
                }, i.complete = function() {
                    for (var t in this.qn) t in this.$n || _e(this.qn[t], this.Wn, !1);
                    this.qn = null
                }, i.dispose = function() {
                    for (var t in this.$n) _e(this.$n[t], this.Wn, !1);
                    this.$n = {}
                }, i.Dn = function(t, i, n) {
                    if (!t.trim()) return n;
                    var r = this.$n[t];
                    return r || (et(this.qn), r = this.qn[t]), r || _e(r = i(this.t, t), this.Wn, !0), this.$n[t] = r,
                        function(t) {
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i],
                                    r = n.query,
                                    e = n.value;
                                if (!r || r.matches) return e
                            }
                            return ""
                        }(r)
                }, t
            }();

        function Se(t, i) {
            return [{
                query: t.matchMedia(i),
                value: "1"
            }, {
                query: null,
                value: ""
            }]
        }

        function Re(t, i) {
            return i.split(",").map((function(i) {
                if (0 != (i = i.replace(/\s+/g, " ").trim()).length) {
                    var n, r, e;
                    if (")" == i.charAt(i.length - 1)) {
                        var s = 1;
                        for (e = i.length - 2; e >= 0; e--) {
                            var u = i.charAt(e);
                            if ("(" == u ? s-- : ")" == u && s++, 0 == s) break
                        }
                        var o = e - 1;
                        if (e > 0)
                            for (e--; e >= 0; e--) {
                                var h = i.charAt(e);
                                if (!("%" == h || "-" == h || "_" == h || h >= "a" && h <= "z" || h >= "A" && h <= "Z" || h >= "0" && h <= "9")) break
                            }
                        if (e >= o) return null
                    } else
                        for (e = i.length - 2; e >= 0; e--) {
                            var a = i.charAt(e);
                            if (!("%" == a || "." == a || a >= "a" && a <= "z" || a >= "A" && a <= "Z" || a >= "0" && a <= "9")) break
                        }
                    return e >= 0 ? (n = i.substring(0, e + 1).trim(), r = i.substring(e + 1).trim()) : (r = i, n = void 0), r ? {
                        query: n ? t.matchMedia(n) : null,
                        value: r
                    } : null
                }
            })).filter(Boolean)
        }

        function _e(t, i, n) {
            for (var r = 0; r < t.length; r++) {
                var e = t[r].query;
                e && (void 0 !== e.onchange ? e.onchange = n ? i : null : n ? e.addListener(i) : e.removeListener(i))
            }
        }

        function ke(t) {
            var i = t.ownerDocument || t;
            return pe && pe.ownerDocument === i || (pe = i.createElement("div")), Ce
        }

        function Ce(t) {
            return function(t, i) {
                et(1 === i.length), t.innerHTML = i[0];
                var n = t.firstElementChild;
                return et(n), et(!n.nextElementSibling), t.removeChild(n), n
            }(pe, t)
        }
        var Ne = ['<i-amphtml-sizer class=i-amphtml-sizer slot=i-amphtml-svc><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>'],
            De = {
                "AMP-PIXEL": {
                    width: "0px",
                    height: "0px"
                },
                "AMP-ANALYTICS": {
                    width: "1px",
                    height: "1px"
                },
                "AMP-AUDIO": null,
                "AMP-SOCIAL-SHARE": {
                    width: "60px",
                    height: "44px"
                }
            };

        function je(t) {
            var i = t.getAttribute("layout"),
                n = t.getAttribute("width"),
                r = t.getAttribute("height"),
                e = t.getAttribute("sizes"),
                s = t.getAttribute("heights"),
                u = i ? he(i) : null;
            ht(void 0 !== u, 'Invalid "layout" value: %s, %s', i, t);
            var o = n && "auto" != n ? fe(n) : n;
            ht(void 0 !== o, 'Invalid "width" value: %s, %s', n, t);
            var h, a, c, f, l = r && "fluid" != r ? fe(r) : r;
            if (ht(void 0 !== l, 'Invalid "height" value: %s, %s', r, t), u && u != Zr && u != te || o && l || (f = (f = t.tagName).toUpperCase(), void 0 === De[f])) h = o, a = l;
            else {
                var v = function(t) {
                    var i = t.tagName.toUpperCase();
                    if (et(void 0 !== De[i]), !De[i]) {
                        var n = t.ownerDocument,
                            r = i.replace(/^AMP\-/, ""),
                            e = n.createElement(r);
                        e.controls = !0, _r(e, {
                            position: "absolute",
                            visibility: "hidden"
                        }), n.body.appendChild(e), De[i] = {
                            width: (e.offsetWidth || 1) + "px",
                            height: (e.offsetHeight || 1) + "px"
                        }, n.body.removeChild(e)
                    }
                    return De[i]
                }(t);
                h = o || u == te ? o : v.width, a = l || v.height
            }
            return (c = u || (h || a ? "fluid" == a ? se : !a || h && "auto" != h ? a && h && (e || s) ? ie : Zr : te : ne)) != Zr && c != te && c != ie && c != ue || ht(a, 'The "height" attribute is missing: %s', t), c == te && ht(!h || "auto" == h, 'The "width" attribute must be missing or "auto": %s', t), c != Zr && c != ie && c != ue || ht(h && "auto" != h, 'The "width" attribute must be present and not "auto": %s', t), c == ie || c == ue ? ht(le(h) == le(a), 'Length units should be the same for "width" and "height": %s, %s, %s', n, r, t) : ht(null === s, '"heights" attribute must be missing: %s', t), {
                layout: c,
                width: h,
                height: a
            }
        }
        var Ue, Le = "EXPERIMENTS",
            ze = "amp-experiment-toggles",
            He = "__AMP__EXPERIMENT_TOGGLES";

        function Ge(t, i) {
            return !!Fe(t)[i]
        }

        function Ve(t, i, n, r) {
            var e = Ge(t, i),
                s = null != n ? n : !e;
            if (s != e && (Fe(t)[i] = s, !r)) {
                var u = qe(t);
                u[i] = s,
                    function(t, i) {
                        var n = [];
                        for (var r in i) n.push((!1 === i[r] ? "-" : "") + r);
                        try {
                            var e;
                            null === (e = t.localStorage) || void 0 === e || e.setItem(ze, n.join(","))
                        } catch (t) {
                            Jt().error(Le, "Failed to save experiments to localStorage.")
                        }
                    }(t, u), Jt().warn(Le, '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental', i, s ? "enabled" : "disabled", t.location.hostname)
            }
            return s
        }

        function Fe(t) {
            var i, n, r, e, s;
            if (t[He]) return t[He];
            t[He] = A();
            var u = t[He];
            et(u);
            var h = D(D({}, null !== (i = t.AMP_CONFIG) && void 0 !== i ? i : {}), null !== (n = t.AMP_EXP) && void 0 !== n ? n : at((null === (r = t.__AMP_EXP) || void 0 === r ? void 0 : r.textContent) || "{}"));
            for (var a in h) {
                var c = h[a];
                "number" == typeof c && c >= 0 && c <= 1 && (u[a] = Math.random() < c)
            }
            var f = null === (e = t.AMP_CONFIG) || void 0 === e ? void 0 : e["allow-doc-opt-in"];
            if (V(f) && f.length) {
                var l = t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
                if (l)
                    for (var v, d, m = o((null === (v = l.getAttribute("content")) || void 0 === v ? void 0 : v.split(",")) || [], !0); !(d = m()).done;) {
                        var p = d.value;
                        f.includes(p) && (u[p] = !0)
                    }
            }
            Object.assign(u, qe(t));
            var g = null === (s = t.AMP_CONFIG) || void 0 === s ? void 0 : s["allow-url-opt-in"];
            if (V(g) && g.length)
                for (var b, y = yt(t.location.originalHash || t.location.hash), w = o(g, !0); !(b = w()).done;) {
                    var x = b.value,
                        E = y["e-".concat(x)];
                    "1" == E && (u[x] = !0), "0" == E && (u[x] = !1)
                }
            return u
        }

        function qe(t) {
            var i, n = "";
            try {
                var r;
                "localStorage" in t && (n = null !== (r = t.localStorage.getItem(ze)) && void 0 !== r ? r : "")
            } catch (t) {
                Qt().warn(Le, "Failed to retrieve experiments from localStorage.")
            }
            for (var e, s = (null === (i = n) || void 0 === i ? void 0 : i.split(/\s*,\s*/g)) || [], u = A(), h = o(s, !0); !(e = h()).done;) {
                var a = e.value;
                a && ("-" == a[0] ? u[a.substr(1)] = !1 : u[a] = !0)
            }
            return u
        }

        function Be(t, i, n, r) {
            var e = t,
                s = n,
                u = function(t) {
                    try {
                        return s(t)
                    } catch (t) {
                        var i, n;
                        throw null === (i = (n = self).__AMP_REPORT_ERROR) || void 0 === i || i.call(n, t), t
                    }
                },
                o = function() {
                    if (void 0 !== Ue) return Ue;
                    Ue = !1;
                    try {
                        var t = {
                            get capture() {
                                return Ue = !0, !1
                            }
                        };
                        self.addEventListener("test-options", null, t), self.removeEventListener("test-options", null, t)
                    } catch (t) {}
                    return Ue
                }(),
                h = !(null == r || !r.capture);
            return e.addEventListener(i, u, o ? r : h),
                function() {
                    null == e || e.removeEventListener(i, u, o ? r : h), s = null, e = null, u = null
                }
        }
        var $e = "Failed to load:";

        function We(t, i, n, r) {
            var e = {
                detail: n
            };
            if (Object.assign(e, r), "function" == typeof t.CustomEvent) return new t.CustomEvent(i, e);
            var s = t.document.createEvent("CustomEvent");
            return s.initCustomEvent(i, !!e.bubbles, !!e.cancelable, n), s
        }

        function Ye(t, i, n, r) {
            return Be(t, i, n, r)
        }

        function Ke(t) {
            return t.data
        }

        function Je(t, i, n, r) {
            var e = n,
                s = Be(t, i, (function(t) {
                    try {
                        e(t)
                    } finally {
                        e = null, s()
                    }
                }), r);
            return s
        }

        function Xe(t) {
            var i, n;
            if (function(t) {
                    return !!(t.complete || "complete" == t.readyState || Qe(t) && t.readyState > 0 || t.document && "complete" == t.document.readyState)
                }(t)) return Promise.resolve(t);
            var r = Qe(t);
            return r && t.__AMP_MEDIA_LOAD_FAILURE_SRC === t.currentSrc ? Promise.reject(t) : new Promise((function(e, s) {
                if (i = r ? Je(t, "loadedmetadata", e, {
                        capture: !0
                    }) : Je(t, "load", e), t.tagName) {
                    var u = t;
                    if (r && !t.hasAttribute("src") && !(u = wi(t, (function(t) {
                            return "SOURCE" === t.tagName
                        })))) return s(new Error("Media has no source."));
                    n = Je(u, "error", s)
                }
            })).then((function() {
                return n && n(), t
            }), (function() {
                i && i(),
                    function(t) {
                        Qe(t) && (t.__AMP_MEDIA_LOAD_FAILURE_SRC = t.currentSrc || !0);
                        var i = t;
                        throw i && i.src && (i = i.src), Jt().createError($e, i)
                    }(t)
            }))
        }

        function Qe(t) {
            return "AUDIO" === t.tagName || "VIDEO" === t.tagName
        }
        var Ze = {
            "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
            "variant": "amp-experiment"
        };

        function ts(t) {
            var i = t.document;
            return Zt(i.body), Object.keys(Ze).filter((function(t) {
                return i.querySelector(Ze[t])
            }))
        }

        function is(t, i, n, r, e) {
            var s = t.getHeadNode(),
                u = function(t, i, n, r) {
                    var e = t.__AMP_CSS_SM;
                    e || (e = t.__AMP_CSS_SM = A());
                    var s = !n && r && "amp-custom" != r && "amp-keyframes" != r,
                        u = n ? "amp-runtime" : s ? "amp-extension=".concat(r) : null;
                    if (u) {
                        var o = ns(t, e, u);
                        if (o) return "STYLE" == o.tagName && o.textContent !== i && (o.textContent = i), o
                    }
                    var h = (t.ownerDocument || t).createElement("style");
                    h.textContent = i;
                    var a = null;
                    return n ? h.setAttribute("amp-runtime", "") : s ? (h.setAttribute("amp-extension", r || ""), a = ns(t, e, "amp-runtime")) : (r && h.setAttribute(r, ""), a = t.lastChild),
                        function(t, i) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            if (n) {
                                var r = n.nextSibling;
                                t.insertBefore(i, r)
                            } else Si(t, i)
                        }(t, h, a), u && (e[u] = h), h
                }(s, function(t, i) {
                    var n = t.__AMP_CSS_TR;
                    return n ? n(i) : i
                }(s, i), r || !1, e || null);
            if (n) {
                var o = t.getRootNode();
                if (us(o, u)) return n(u), u;
                var h = setInterval((function() {
                    us(o, u) && (clearInterval(h), n(u))
                }), 4)
            }
            return u
        }

        function ns(t, i, n) {
            if (i[n]) return i[n];
            var r = t.querySelector("style[".concat(n, "], link[").concat(n, "]"));
            return r ? (i[n] = r, r) : null
        }
        var rs = !1;

        function es(t) {
            Zt(t.defaultView), rs || (rs = !0, ss(t))
        }

        function ss(t) {
            _r(t.body, {
                opacity: 1,
                visibility: "visible",
                "animation": "none"
            })
        }

        function us(t, i) {
            for (var n = t.styleSheets, r = 0; r < n.length; r++)
                if (n[r].ownerNode == i) return !0;
            return !1
        }
        var os, hs, as = function() {
                function t(t) {
                    this.dr = t, this.pr = 0, this.mr = 0, this.yr = A()
                }
                var i = t.prototype;
                return i.has = function(t) {
                    return !!this.yr[t]
                }, i.get = function(t) {
                    var i = this.yr[t];
                    if (i) return i.access = ++this.mr, i.payload
                }, i.put = function(t, i) {
                    this.has(t) || this.pr++, this.yr[t] = {
                        payload: i,
                        access: this.mr
                    }, this.wr()
                }, i.wr = function() {
                    if (!(this.pr <= this.dr)) {
                        var t, i = this.yr,
                            n = this.mr + 1;
                        for (var r in i) {
                            var e = i[r].access;
                            e < n && (n = e, t = r)
                        }
                        void 0 !== t && (delete i[t], this.pr--)
                    }
                }, t
            }(),
            cs = new Set(["c", "v", "a", "ad"]),
            fs = "__amp_source_origin",
            ls = function(t) {
                return "string" == typeof t ? vs(t) : t
            };

        function vs(t, i) {
            return os || (os = self.document.createElement("a"), hs = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new as(100))), ds(os, t, i ? null : hs)
        }

        function ds(t, i, n) {
            if (n && n.has(i)) return n.get(i);
            t.href = i, t.protocol || (t.href = t.href);
            var r, e = {
                href: t.href,
                protocol: t.protocol,
                host: t.host,
                hostname: t.hostname,
                port: "0" == t.port ? "" : t.port,
                pathname: t.pathname,
                search: t.search,
                hash: t.hash,
                origin: null
            };
            "/" !== e.pathname[0] && (e.pathname = "/" + e.pathname), ("http:" == e.protocol && 80 == e.port || "https:" == e.protocol && 443 == e.port) && (e.port = "", e.host = e.hostname), r = t.origin && "null" != t.origin ? t.origin : "data:" != e.protocol && e.host ? e.protocol + "//" + e.host : e.href, e.origin = r;
            var s = e;
            return n && n.put(i, s), s
        }

        function ms(t, i, n) {
            if (!i) return t;
            var r = t.split("#", 2),
                e = r[0].split("?", 2);
            return e[0] + (e[1] ? n ? "?".concat(i, "&").concat(e[1]) : "?".concat(e[1], "&").concat(i) : "?".concat(i)) + (r[1] ? "#".concat(r[1]) : "")
        }

        function ps(t, i) {
            return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(i))
        }

        function gs(t, i) {
            return ms(t, bs(i))
        }

        function bs(t) {
            var i = [];
            for (var n in t) {
                var r = t[n];
                if (null != r) {
                    r = F(r);
                    for (var e = 0; e < r.length; e++) i.push(ps(n, r[e]))
                }
            }
            return i.join("&")
        }

        function ys(t) {
            return "https:" == (t = ls(t)).protocol || "localhost" == t.hostname || "127.0.0.1" == t.hostname || W(t.hostname, ".localhost")
        }

        function ws(t, i) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "source";
            return ti(null != t, "%s %s must be available", i, n), ti(ys(t) || /^\/\//.test(t), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', i, n, t), t
        }

        function As(t) {
            var i = t.indexOf("#");
            return -1 == i ? t : t.substring(0, i)
        }

        function xs(t) {
            return xt.test(ls(t).origin)
        }

        function Es(t) {
            return !(t && pt.includes(ls(t).protocol))
        }

        function Ps(t) {
            var i = vs(t),
                n = i.hash;
            return i.origin + i.pathname + Os(i.search) + n
        }

        function Os(t) {
            return function(t, i) {
                if (!t || "?" == t) return "";
                var n = new RegExp("[?&]".concat("(amp_(js[^&=]*|gsa|r|kit)|usqp)", "\\b[^&]*"), "g"),
                    r = t.replace(n, "").replace(/^[?&]/, "");
                return r ? "?" + r : ""
            }(t)
        }

        function Is(t) {
            if (!xs(t = ls(t))) return t.href;
            var i = t.pathname.split("/"),
                n = i[1];
            ti(cs.has(n), "Unknown path prefix in url %s", t.href);
            var r = i[2],
                e = "s" == r ? "https://" + decodeURIComponent(i[3]) : "http://" + decodeURIComponent(r);
            return ti(e.indexOf(".") > 0, "Expected a . in origin %s", e), i.splice(1, "s" == r ? 3 : 2), e + i.join("/") + Os(t.search) + (t.hash || "")
        }

        function Ms(t) {
            return vs(Is(t)).origin
        }

        function Ts(t, i) {
            return i = ls(i), "function" == typeof URL ? new URL(t, i.href).toString() : function(t, i) {
                i = ls(i);
                var n = vs(t = t.replace(/\\/g, "/"));
                return t.toLowerCase().startsWith(n.protocol) ? n.href : t.startsWith("//") ? i.protocol + t : t.startsWith("/") ? i.origin + t : i.origin + i.pathname.replace(/\/[^/]*$/, "/") + t
            }(t, i)
        }

        function Ss(t, i) {
            return Rs(i),
                function(t, i, n, r) {
                    return ms(t, ps("__amp_source_origin", n), void 0)
                }(i, 0, Ms(t.location.href))
        }

        function Rs(t) {
            var i = yt(vs(t).search);
            ti(!(fs in i), "Source origin is not allowed in %s", t)
        }
        var _s = "CANCELLED",
            ks = "BLOCK_BY_CONSENT",
            Cs = self.__AMP_ERRORS || [];
        self.__AMP_ERRORS = Cs;
        var Ns = function(t) {
            return (i = 0, n = function() {
                var t = Math.pow(1.5, i++);
                return 1e3 * (t + function(t, i) {
                    var n = t * (i = i || .3) * Math.random();
                    return Math.random() > .5 && (n *= -1), n
                }(t))
            }, Ns = function(t) {
                return setTimeout(t, n())
            })(t);
            var i, n
        };

        function Ds(t, i) {
            try {
                if (t)
                    if (void 0 !== t.message) t = f(t);
                    else {
                        var n = t;
                        (t = new Error(function(t) {
                            try {
                                return JSON.stringify(t)
                            } catch (i) {
                                return String(t)
                            }
                        }(n))).origError = n
                    }
                else t = new Error("Unknown error");
                if (t.reported) return t;
                if (t.reported = !0, t.messageArray) {
                    var r = B(t.messageArray, (function(t) {
                        return null == t ? void 0 : t.tagName
                    }));
                    r > -1 && (t.associatedElement = t.messageArray[r])
                }
                var e = i || t.associatedElement;
                if (e && e.classList && (e.classList.add("i-amphtml-error"), Dt().development && (e.classList.add("i-amphtml-element-error"), e.setAttribute("error-message", t.message))), self.console && (tt(t.message) || !t.expected)) {
                    var s = console.error || console.log;
                    t.messageArray ? s.apply(console, t.messageArray) : e ? s.call(console, t.message, e) : s.call(console, t.message)
                }
                e && e.dispatchCustomEventForTesting && e.dispatchCustomEventForTesting("amp:error", t.message), Ls.call(self, void 0, void 0, void 0, void 0, t)
            } catch (t) {
                setTimeout((function() {
                    throw t
                }))
            }
            return t
        }

        function js() {
            return new Error(_s)
        }

        function Us(t) {
            return !!t && ("string" == typeof t ? t.startsWith(ks) : "string" == typeof t.message && t.message.startsWith(ks))
        }

        function Ls(t, i, n, r, e) {
            var s = this;
            if (!this || !this.document || e && e.expected || es(this.document), !Dt().development) {
                var u = !1;
                try {
                    u = function(t) {
                        if (!t.document) return !1;
                        for (var i = t.document.querySelectorAll("script[src]"), n = 0; n < i.length; n++)
                            if (!xs(i[n].src.toLowerCase())) return !0;
                        return !1
                    }(self)
                } catch (t) {}
                if (!(u && Math.random() > .01)) {
                    var o = function(t, i, n, r, e, s) {
                        t = function(t, i) {
                            return i && (t = i.message ? i.message : String(i)), t || (t = "Unknown error"), t
                        }(t, e);
                        var u, o, h = !(!e || !e.expected);
                        if (!/_reported_/.test(t) && t != _s) {
                            var a = !(self && self.window),
                                c = Math.random();
                            if (!((function(t) {
                                    return -1 != t.indexOf($e)
                                }(t) || "Script error." == t || a) && (h = !0, c > .001))) {
                                var f = tt(t);
                                if (!(f && c > .1)) {
                                    var l = Object.create(null);
                                    l.v = Dt().rtvVersion, l.noAmp = s ? "1" : "0", l.m = t.replace(X, ""), l.a = f ? "1" : "0", l.ex = h ? "1" : "0", l.dw = a ? "1" : "0";
                                    var v = "1p";
                                    if (self.context && self.context.location ? (l["3p"] = "1", v = "3p") : Dt().runtime && (v = Dt().runtime), l.rt = v, "inabox" === v && (l.adid = Dt().a4aId), l.ca = null !== (o = self.AMP_CONFIG) && void 0 !== o && o.canary ? "1" : "0", l.bt = (null === (u = self.AMP_CONFIG) || void 0 === u ? void 0 : u.type) || "unknown", self.location.ancestorOrigins && self.location.ancestorOrigins[0] && (l.or = self.location.ancestorOrigins[0]), self.viewerState && (l.vs = self.viewerState), self.parent && self.parent != self && (l.iem = "1"), self.AMP && self.AMP.viewer) {
                                        var d = self.AMP.viewer.getResolvedViewerUrl(),
                                            m = self.AMP.viewer.maybeGetMessagingOrigin();
                                        d && (l.rvu = d), m && (l.mso = m)
                                    }
                                    var p, g, b, y = [],
                                        w = self[He] || null;
                                    for (var A in w) {
                                        var x = w[A];
                                        y.push("".concat(A, "=").concat(x ? "1" : "0"))
                                    }
                                    return l.exps = y.join(","), e ? (l.el = (null === (p = e.associatedElement) || void 0 === p ? void 0 : p.tagName) || "u", e.args && (l.args = JSON.stringify(e.args)), f || e.ignoreStack || !e.stack || (l.s = e.stack), e.message && (e.message += " _reported_")) : (l.f = i || "", l.l = n || "", l.c = r || ""), l.r = self.document ? self.document.referrer : "", l.ae = Cs.join(","), l.fr = self.location.originalHash || self.location.hash, "production" === l.bt && (l.pt = "1"), b = t, (g = Cs).length >= 25 && g.splice(0, g.length - 25 + 1), g.push(b), l
                                }
                            }
                        }
                    }(t, i, n, r, e, u);
                    o && Ns((function() {
                        try {
                            return function(t, i) {
                                return i.pt && Math.random() < .9 ? h() : function(t, i) {
                                    var n = Yn(t);
                                    if (!n.isSingleDoc()) return Promise.resolve(!1);
                                    var r = n.getSingleDoc();
                                    if (!r.getRootNode().documentElement.hasAttribute("report-errors-to-viewer")) return Promise.resolve(!1);
                                    var e = vr(r);
                                    return e.hasCapability("errorReporter") ? e.isTrustedViewer().then((function(t) {
                                        return !!t && (e.sendMessage("error", {
                                            "m": (n = i).m,
                                            "a": n.a,
                                            "s": n.s,
                                            "el": n.el,
                                            "ex": n.ex,
                                            "v": n.v,
                                            "pt": n.pt
                                        }), !0);
                                        var n
                                    })) : Promise.resolve(!1)
                                }(t, i).then((function(t) {
                                    if (!t) {
                                        var n = new XMLHttpRequest;
                                        n.open("POST", Math.random() < .1 ? Rt : St, !0), n.send(JSON.stringify(i))
                                    }
                                }))
                            }(s, o).catch((function() {}))
                        } catch (t) {}
                    }))
                }
            }
        }
        var zs = "Resource",
            Hs = function() {
                function t(t, i, n) {
                    i.__AMP__RESOURCE = this, this.ei = t, this.element = i, this.debugid = i.tagName.toLowerCase() + "#" + t, this.hostWin = i.ownerDocument.defaultView, this.si = n, this.oi = i.hasAttribute("placeholder"), this.ui = !1, this.hi = void 0, this.ai = i.isBuilt() ? 1 : 0, 0 == this.ai && i.isBuilding() && this.build(), this.ci = -1, this.fi = 0, this.li = null, this.vi = null, this.di = !1, this.mi = zi(-1e4, -1e4, 0, 0), this.pi = null, this.bi = !1, this.gi = null, this.yi = null, this.wi = void 0;
                    var r = new a;
                    this.Ai = r.promise, this.xi = r.resolve, this.Ei = !1
                }
                t.forElement = function(i) {
                    return Zt(t.forElementOptional(i))
                }, t.forElementOptional = function(t) {
                    return t.__AMP__RESOURCE
                }, t.setOwner = function(i, n) {
                    Zt(n.contains(i)), t.forElementOptional(i) && t.forElementOptional(i).updateOwner(n), i.__AMP__OWNER = n;
                    for (var r = i.getElementsByClassName("i-amphtml-element"), e = 0; e < r.length; e++) {
                        var s = r[e];
                        t.forElementOptional(s) && t.forElementOptional(s).updateOwner(void 0)
                    }
                };
                var i = t.prototype;
                return i.getId = function() {
                    return this.ei
                }, i.updateOwner = function(t) {
                    this.hi = t
                }, i.getOwner = function() {
                    if (void 0 === this.hi) {
                        for (var t = this.element; t; t = t.parentElement)
                            if (t.__AMP__OWNER) {
                                this.hi = t.__AMP__OWNER;
                                break
                            }
                        void 0 === this.hi && (this.hi = null)
                    }
                    return this.hi
                }, i.hasOwner = function() {
                    return !!this.getOwner()
                }, i.getLayoutPriority = function() {
                    return -1 != this.ci ? this.ci : this.element.getLayoutPriority()
                }, i.updateLayoutPriority = function(t) {
                    this.ci = t
                }, i.getState = function() {
                    return this.ai
                }, i.isBuilt = function() {
                    return this.element.isBuilt()
                }, i.isBuilding = function() {
                    return this.ui
                }, i.whenBuilt = function() {
                    return this.element.signals().whenSignal("res-built")
                }, i.build = function() {
                    var t = this;
                    return this.ui || !this.element.isUpgraded() ? null : (this.ui = !0, this.element.buildInternal().then((function() {
                        t.ui = !1, t.ai = 1, t.element.signals().signal("res-built")
                    }), (function(i) {
                        throw t.maybeReportErrorOnBuildFailure(i), t.ui = !1, t.element.signals().rejectSignal("res-built", i), i
                    })))
                }, i.maybeReportErrorOnBuildFailure = function(t) {
                    Us(t) || Qt().error(zs, "failed to build:", this.debugid, t)
                }, i.changeSize = function(t, i, n) {
                    this.element.applySize(t, i, n), this.requestMeasure()
                }, i.overflowCallback = function(t, i, n, r) {
                    t && (this.wi = {
                        height: i,
                        width: n,
                        margins: r
                    }), this.element.overflowCallback(t, i, n, r)
                }, i.resetPendingChangeSize = function() {
                    this.wi = void 0
                }, i.getPendingChangeSize = function() {
                    return this.wi
                }, i.getUpgradeDelayMs = function() {
                    return this.element.getUpgradeDelayMs()
                }, i.measure = function() {
                    if (!(this.oi && this.element.parentElement && this.element.parentElement.tagName.startsWith("AMP-")) || "__AMP__RESOURCE" in this.element.parentElement)
                        if (this.element.ownerDocument && this.element.ownerDocument.defaultView) {
                            this.bi = !1;
                            var t = this.mi;
                            this.Oi();
                            var i, n, r = this.mi,
                                e = (n = r, !((i = t).width == n.width && i.height === n.height));
                            (1 == this.ai || t.top != r.top || e) && this.element.isUpgraded() && (1 == this.ai ? this.ai = 2 : 4 != this.ai && 5 != this.ai || !this.element.isRelayoutNeeded() || (this.ai = 2)), this.hasBeenMeasured() || (this.pi = r), this.element.updateLayoutBox(r, e)
                        } else this.ai = 1
                }, i.ensureMeasured = function() {
                    var t = this;
                    return this.hasBeenMeasured() ? h() : dr(this.hostWin).measure((function() {
                        return t.measure()
                    }))
                }, i.Oi = function() {
                    var t = mr(this.element);
                    this.mi = t.getLayoutRect(this.element);
                    var i = !1;
                    if (t.supportsPositionFixed() && this.isDisplayed())
                        for (var n = this.si.getAmpdoc().win, r = n.document.body, e = this.element; e && e != r; e = e.offsetParent) {
                            if (e.isAlwaysFixed && e.isAlwaysFixed()) {
                                i = !0;
                                break
                            }
                            if (t.isDeclaredFixed(e) && "fixed" == Nr(n, e).position) {
                                i = !0;
                                break
                            }
                        }
                    this.di = i, i && (this.mi = Gi(this.mi, -t.getScrollLeft(), -t.getScrollTop()))
                }, i.completeCollapse = function() {
                    kr(this.element, !1), this.mi = zi(this.mi.left, this.mi.top, 0, 0), this.di = !1, this.element.updateLayoutBox(this.getLayoutBox());
                    var t = this.getOwner();
                    t && t.collapsedCallback(this.element)
                }, i.completeExpand = function() {
                    kr(this.element, !0), this.requestMeasure()
                }, i.isMeasureRequested = function() {
                    return this.bi
                }, i.hasBeenMeasured = function() {
                    return !!this.pi
                }, i.requestMeasure = function() {
                    this.bi = !0
                }, i.getLayoutSize = function() {
                    return i = (t = this.mi).height, {
                        width: t.width,
                        height: i
                    };
                    var t, i
                }, i.getLayoutBox = function() {
                    if (!this.di) return this.mi;
                    var t = mr(this.element);
                    return Gi(this.mi, t.getScrollLeft(), t.getScrollTop())
                }, i.getInitialLayoutBox = function() {
                    return this.pi || this.mi
                }, i.isDisplayed = function() {
                    if (!this.element.ownerDocument || !this.element.ownerDocument.defaultView) return !1;
                    var t = this.element.getLayout() == se,
                        i = this.getLayoutBox(),
                        n = i.height > 0 && i.width > 0;
                    return t || n
                }, i.isFixed = function() {
                    return this.di
                }, i.overlaps = function(t) {
                    return n = t, (i = this.getLayoutBox()).top <= n.bottom && n.top <= i.bottom && i.left <= n.right && n.left <= i.right;
                    var i, n
                }, i.prerenderAllowed = function() {
                    return this.element.prerenderAllowed()
                }, i.previewAllowed = function() {
                    return this.element.previewAllowed()
                }, i.isBuildRenderBlocking = function() {
                    return this.element.isBuildRenderBlocking()
                }, i.whenWithinViewport = function(t) {
                    if (Zt(!1 !== t), !this.isLayoutPending() || !0 === t) return h();
                    var i = t,
                        n = String(i);
                    return this.gi && this.gi[n] ? this.gi[n].promise : this.isWithinViewportRatio(i) ? h() : (this.gi = this.gi || {}, this.gi[n] = new a, this.gi[n].promise)
                }, i.Pi = function() {
                    if (this.gi) {
                        var t = this.getDistanceViewportRatio();
                        for (var i in this.gi) this.isWithinViewportRatio(parseFloat(i), t) && (this.gi[i].resolve(), delete this.gi[i])
                    }
                }, i.getDistanceViewportRatio = function() {
                    var t = mr(this.element).getRect(),
                        i = this.getLayoutBox(),
                        n = this.si.getScrollDirection(),
                        r = 1,
                        e = 0;
                    if (t.right < i.left || t.left > i.right) return {
                        distance: !1
                    };
                    if (t.bottom < i.top) e = i.top - t.bottom, -1 == n && (r = 2);
                    else {
                        if (!(t.top > i.bottom)) return {
                            distance: !0
                        };
                        e = t.top - i.bottom, 1 == n && (r = 2)
                    }
                    return {
                        distance: e,
                        scrollPenalty: r,
                        viewportHeight: t.height
                    }
                }, i.isWithinViewportRatio = function(t, i) {
                    if ("boolean" == typeof t) return t;
                    var n = i || this.getDistanceViewportRatio(),
                        r = n.distance,
                        e = n.scrollPenalty,
                        s = n.viewportHeight;
                    return "boolean" == typeof r ? r : r < s * t / e
                }, i.renderOutsideViewport = function() {
                    return this.Pi(), this.hasOwner() || this.isWithinViewportRatio(this.element.renderOutsideViewport())
                }, i.idleRenderOutsideViewport = function() {
                    return this.isWithinViewportRatio(this.element.idleRenderOutsideViewport())
                }, i.layoutScheduled = function(t) {
                    this.ai = 3, this.element.layoutScheduleTime = t
                }, i.layoutCanceled = function() {
                    this.ai = this.hasBeenMeasured() ? 2 : 1
                }, i.startLayout = function() {
                    var t = this;
                    if (this.yi) return this.yi;
                    if (4 == this.ai) return h();
                    if (5 == this.ai) return Promise.reject(this.vi);
                    if (Zt(0 != this.ai), Zt(this.isDisplayed()), 3 != this.ai) {
                        var i = Qt().createExpectedError("startLayout called but not LAYOUT_SCHEDULED", "currently: ", this.ai);
                        return Ds(i, this.element), Promise.reject(i)
                    }
                    if (this.fi > 0 && !this.element.isRelayoutNeeded()) return Qt().fine(zs, "layout canceled since it wasn't requested:", this.debugid, this.ai), this.ai = 4, h();
                    Qt().fine(zs, "start layout:", this.debugid, "count:", this.fi), this.fi++, this.ai = 3, this.li = new AbortController;
                    var n = this.li.signal,
                        r = new Promise((function(i, r) {
                            dr(t.hostWin).mutate((function() {
                                var e;
                                try {
                                    e = t.element.layoutCallback(n)
                                } catch (t) {
                                    r(t)
                                }
                                Promise.resolve(e).then(i, r)
                            })), n.onabort = function() {
                                return r(js())
                            }
                        })).then((function() {
                            return t.Ti(!0, n)
                        }), (function(i) {
                            return t.Ti(!1, n, i)
                        }));
                    return this.yi = r
                }, i.Ti = function(t, i, n) {
                    if (this.li = null, i.aborted) {
                        var r = Qt().createError("layoutComplete race");
                        throw r.associatedElement = this.element, Qt().expectedError(zs, r), js()
                    }
                    if (this.xi && (this.xi(), this.xi = null), this.yi = null, this.ai = t ? 4 : 5, this.vi = n, !t) return Qt().fine(zs, "loading failed:", this.debugid, n), Promise.reject(n);
                    Qt().fine(zs, "layout complete:", this.debugid)
                }, i.isLayoutPending = function() {
                    return 4 != this.ai && 5 != this.ai
                }, i.loadedOnce = function() {
                    return this.element.R1() ? this.element.whenLoaded() : this.Ai
                }, i.isInViewport = function() {
                    return this.Ei && this.Pi(), this.Ei
                }, i.setInViewport = function(t) {
                    this.Ei = t
                }, i.unlayout = function() {
                    0 != this.ai && 1 != this.ai && 2 != this.ai && (this.li && (this.li.abort(), this.li = null), this.setInViewport(!1), this.element.unlayoutCallback() && (this.element.togglePlaceholder(!0), this.ai = 1, this.fi = 0, this.yi = null))
                }, i.getTaskId = function(t) {
                    return this.debugid + "#" + t
                }, i.pause = function() {
                    this.element.pause()
                }, i.pauseOnRemove = function() {
                    this.element.pause()
                }, i.resume = function() {
                    this.element.resume()
                }, i.unload = function() {
                    this.element.unmount()
                }, i.disconnect = function() {
                    delete this.element.__AMP__RESOURCE, this.element.disconnect(!0)
                }, t
            }(),
            Gs = "ready-scan",
            Vs = "scheduler",
            Fs = "250% 31.25%",
            qs = function() {
                function t(t) {
                    var i = this;
                    this.Ii = t;
                    var n = t.win;
                    this.Mi = new n.IntersectionObserver((function(t) {
                        return i.Si(t)
                    }), {
                        root: Ni(n) ? n.document : null,
                        rootMargin: Fs
                    }), this.ki = new Map, this._i = new Map, this.Ri = [], this.Ni = !1, t.whenReady().then((function() {
                        return i.Ci()
                    })), this.Di = t.onVisibilityChanged((function() {
                        return i.ji()
                    }))
                }
                var i = t.prototype;
                return i.dispose = function() {
                    this.Mi.disconnect(), this._i.clear(), this.Di && (this.Di(), this.Di = null)
                }, i.scheduleAsap = function(t) {
                    this._i.set(t, {
                        asap: !0,
                        isIntersecting: !1
                    }), this.zi(t)
                }, i.schedule = function(t) {
                    this._i.has(t) || (t.deferredMount() ? (this._i.set(t, {
                        asap: !1,
                        isIntersecting: !1
                    }), this.Mi.observe(t), this.ki.size > 0 && this.ki.forEach((function(i, n) {
                        ji(n, t) && i.observe(t)
                    }))) : this._i.set(t, {
                        asap: !1,
                        isIntersecting: !0
                    }), this.zi(t))
                }, i.unschedule = function(t) {
                    this._i.has(t) && (this._i.delete(t), this.Mi.unobserve(t), this.ki.size > 0 && this.ki.forEach((function(i) {
                        i.unobserve(t)
                    })), this.Ri && ($(this.Ri, t), this.Ci()))
                }, i.setContainer = function(t, i) {
                    var n = this;
                    if (!this.ki.has(t)) {
                        var r = new this.Ii.win.IntersectionObserver((function(t) {
                            return n.Si(t)
                        }), {
                            root: i || t,
                            rootMargin: Fs
                        });
                        this.ki.set(t, r), this._i.forEach((function(i, n) {
                            !i.asap && ji(t, n) && r.observe(n)
                        }))
                    }
                }, i.removeContainer = function(t) {
                    var i = this.ki.get(t);
                    i && (i.disconnect(), this.ki.delete(t))
                }, i.Ui = function() {
                    var t = this;
                    this.Ii.isReady() && !this.Ni && (this.Ni = !0, this.Ii.win.setTimeout((function() {
                        t.Ii.signals().signal(Gs)
                    }), 50))
                }, i.ji = function() {
                    var t = this,
                        i = this.Ii.getVisibilityState();
                    i != yr && i != wr && i != gr && i != br || this._i.forEach((function(i, n) {
                        return t.Li(n)
                    }))
                }, i.zi = function(t) {
                    var i = this.Ri;
                    i ? (i.includes(t) || i.push(t), this.Ci()) : this.Li(t)
                }, i.Ci = function() {
                    var t = this.Ii.isReady(),
                        i = this.Ri;
                    if (i)
                        for (var n = 0; n < i.length; n++) {
                            var r = i[n];
                            (t || ki(r, this.Ii.getRootNode())) && (i.splice(n--, 1), this.Li(r))
                        }
                    t && (this.Ri = null, this.Ui())
                }, i.Si = function(t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i],
                            r = n.isIntersecting,
                            e = n.target,
                            s = this._i.get(e);
                        if (s) {
                            var u = r || s.isIntersecting;
                            u !== s.isIntersecting && this._i.set(e, {
                                asap: s.asap,
                                isIntersecting: u
                            }), u && this.Li(e)
                        }
                    }
                }, i.Li = function(t) {
                    var i = this.Ri,
                        n = !(i && i.includes(t)),
                        r = this._i.get(t) || {
                            asap: !1,
                            isIntersecting: !1
                        },
                        e = r.asap,
                        s = r.isIntersecting,
                        u = this.Ii.getVisibilityState();
                    if (n && (e || s) && (u == yr || u == wr || u == gr && t.prerenderAllowed() || u == br && t.previewAllowed())) {
                        this.unschedule(t);
                        var o = this.Ii.win;
                        (e || t.getBuildPriority() <= 0 ? o.setTimeout : o.requestIdleCallback || o.setTimeout)((function() {
                            return t.mountInternal()
                        }))
                    }
                }, t
            }();

        function Bs(t) {
            return xn(t, Vs, qs), Pn(t, Vs)
        }
        var $s = function() {
                function t() {
                    this.Hi = []
                }
                var n = t.prototype;
                return n.peek = function() {
                    var t = this.length;
                    return t ? this.Hi[t - 1].item : null
                }, n.enqueue = function(t, i) {
                    if (isNaN(i)) throw new Error("Priority must not be NaN.");
                    var n = this.Gi(i);
                    this.Hi.splice(n, 0, {
                        item: t,
                        priority: i
                    })
                }, n.Gi = function(t) {
                    for (var i = -1, n = 0, r = this.length; n <= r && (i = Math.floor((n + r) / 2)) !== this.length;)
                        if (this.Hi[i].priority < t) n = i + 1;
                        else {
                            if (!(i > 0 && this.Hi[i - 1].priority >= t)) break;
                            r = i - 1
                        }
                    return i
                }, n.forEach = function(t) {
                    for (var i = this.length; i--;) t(this.Hi[i].item)
                }, n.dequeue = function() {
                    var t = this.Hi.pop();
                    return t ? t.item : null
                }, i(t, [{
                    key: "length",
                    get: function() {
                        return this.Hi.length
                    }
                }]), t
            }(),
            Ws = "CHUNK",
            Ys = /nochunking=1/.test(self.location.hash),
            Ks = h();

        function Js(t) {
            return xn(t, "chunk", nu), Pn(t, "chunk")
        }

        function Xs(t, i, n) {
            if (Ys) Ks.then(i);
            else {
                var r = Js(t.documentElement || t);
                r.runForStartup(i), n && r.runForStartup((function() {
                    r.Vi = !0
                }))
            }
        }

        function Qs(t, i, n) {
            Ys ? Ks.then(i) : Js(t).run(i, n)
        }
        var Zs = "not_run",
            tu = function() {
                function t(t) {
                    this.state = Zs, this.Fi = t
                }
                var i = t.prototype;
                return i.Bi = function(t) {
                    if ("run" != this.state) {
                        this.state = "run";
                        try {
                            this.Fi(t)
                        } catch (t) {
                            throw this.qi(t), t
                        }
                    }
                }, i.Wi = function() {
                    return this.Fi.displayName || this.Fi.name
                }, i.qi = function(t) {}, i.$i = function() {
                    return !1
                }, i.Ki = function() {
                    return !1
                }, t
            }(),
            iu = function(t) {
                U(n, t);
                var i = H(n);

                function n(t, n, r) {
                    var e;
                    return (e = i.call(this, t)).Yi = r, e
                }
                var r = n.prototype;
                return r.qi = function(t) {
                    es(self.document)
                }, r.$i = function() {
                    return this.Ji()
                }, r.Ki = function() {
                    return this.Yi.Xi
                }, r.Ji = function() {
                    return this.Yi.ampdoc.isVisible()
                }, n
            }(tu),
            nu = function() {
                function t(t) {
                    var i, n = this;
                    this.ampdoc = t, this.t = t.win, this.Qi = new $s, this.Zi = this.cn.bind(this), this.br = 0, this.gr = !(!this.t.navigator.scheduling || !this.t.navigator.scheduling.isInputPending), this.Ar = !1, this.Vi = this.t.document.documentElement.hasAttribute("i-amphtml-no-boilerplate"), this.t.addEventListener("message", (function(t) {
                        "amp-macro-task" == Ke(t) && n.cn(null)
                    })), this.Xi = !1, (i = t, In(i, "viewer")).then((function() {
                        n.Xi = !0
                    })), t.onVisibilityChanged((function() {
                        t.isVisible() && n.Er()
                    }))
                }
                var i = t.prototype;
                return i.run = function(t, i) {
                    var n = new tu(t);
                    this.Or(n, i)
                }, i.runForStartup = function(t) {
                    var i = new iu(t, this.t, this);
                    this.Or(i, Number.POSITIVE_INFINITY)
                }, i.Or = function(t, i) {
                    this.Qi.enqueue(t, i), this.Er()
                }, i.Pr = function(t) {
                    for (var i = this.Qi.peek(); i && i.state !== Zs;) this.Qi.dequeue(), i = this.Qi.peek();
                    return i && t && this.Qi.dequeue(), i
                }, i.cn = function(t) {
                    var i, n = this,
                        r = this.Pr(!0);
                    if (!r) return this.Ar = !1, this.br = 0, !1;
                    try {
                        i = Date.now(), r.Bi(t)
                    } finally {
                        Ks.then().then().then().then().then().then().then().then().then((function() {
                            n.Ar = !1, n.br += Date.now() - i, Qt().fine(Ws, r.Wi(), "Chunk duration", Date.now() - i, n.br), n.Er()
                        }))
                    }
                    return !0
                }, i.Tr = function(t) {
                    var i = this;
                    if (this.Vi && (this.gr ? this.t.navigator.scheduling.isInputPending() : this.br > 5)) return this.br = 0, void this.Ir();
                    Ks.then((function() {
                        i.Zi(t)
                    }))
                }, i.Er = function() {
                    if (!this.Ar) {
                        var t = this.Pr();
                        if (t) return t.$i() ? (this.Ar = !0, void this.Tr(null)) : void(t.Ki() && this.t.requestIdleCallback ? function(t, i, n, r) {
                            var e = Date.now();
                            t.requestIdleCallback((function i(s) {
                                if (s.timeRemaining() < 15) {
                                    var u = n - (Date.now() - e);
                                    u <= 0 || s.didTimeout ? (Qt().fine(Ws, "Timed out", n, s.didTimeout), r(s)) : (Qt().fine(Ws, "Rescheduling with", u, s.timeRemaining()), t.requestIdleCallback(i, {
                                        timeout: u
                                    }))
                                } else Qt().fine(Ws, "Running idle callback with ", 15), r(s)
                            }), {
                                timeout: n
                            })
                        }(this.t, 0, 2e3, this.Zi) : this.Ir())
                    }
                }, i.Ir = function() {
                    this.t.postMessage("amp-macro-task", "*")
                }, t
            }(),
            ru = "activate",
            eu = function() {
                function t(t) {
                    this.element = t, this.win = oi(t), this.actionMap_ = null, this.defaultActionAlias_ = null
                }
                t.R1 = function() {
                    return !1
                }, t.deferredMount = function(t) {
                    return !0
                }, t.prerenderAllowed = function(t) {
                    return !1
                }, t.previewAllowed = function(t) {
                    return this.prerenderAllowed(t)
                }, t.usesLoading = function(t) {
                    return !1
                }, t.createLoaderLogoCallback = function(t) {
                    return {}
                }, t.getBuildPriority = function(t) {
                    return 0
                }, t.getPreconnects = function(t) {
                    return null
                }, t.requiresShadowDom = function() {
                    return !1
                };
                var i = t.prototype;
                return i.signals = function() {
                    return this.element.signals()
                }, i.getDefaultActionAlias = function() {
                    return this.defaultActionAlias_
                }, i.getLayoutPriority = function() {
                    return 0
                }, i.updateLayoutPriority = function(t) {
                    this.element.getResources().updateLayoutPriority(this.element, t)
                }, i.getLayout = function() {
                    return this.element.getLayout()
                }, i.getLayoutBox = function() {
                    return this.element.getLayoutBox()
                }, i.getLayoutSize = function() {
                    return this.element.getLayoutSize()
                }, i.getAmpDoc = function() {
                    return this.element.getAmpDoc()
                }, i.getVsync = function() {
                    return dr(this.win)
                }, i.getConsentPolicy = function() {
                    var t = null;
                    return this.element.hasAttribute("data-block-on-consent") && (t = this.element.getAttribute("data-block-on-consent") || "default"), t
                }, i.isLayoutSupported = function(t) {
                    return t == Qr
                }, i.isAlwaysFixed = function() {
                    return !1
                }, i.upgradeCallback = function() {
                    return null
                }, i.buildCallback = function() {}, i.preconnectCallback = function(t) {}, i.attachedCallback = function() {}, i.detachedCallback = function() {}, i.setAsContainer = function(t) {
                    this.element.setAsContainerInternal(t)
                }, i.removeAsContainer = function() {
                    this.element.removeAsContainerInternal()
                }, i.isBuildRenderBlocking = function() {
                    return !1
                }, i.createPlaceholderCallback = function() {
                    return null
                }, i.renderOutsideViewport = function() {
                    return "inabox" == Dt(this.win).runtime || 3
                }, i.idleRenderOutsideViewport = function() {
                    return !1
                }, i.ensureLoaded = function() {}, i.setReadyState = function(t, i) {
                    this.element.setReadyStateInternal(t, i)
                }, i.mountCallback = function(t) {}, i.unmountCallback = function() {}, i.isRelayoutNeeded = function() {
                    return !1
                }, i.layoutCallback = function() {
                    return h()
                }, i.firstLayoutCompleted = function() {
                    this.togglePlaceholder(!1)
                }, i.pauseCallback = function() {}, i.resumeCallback = function() {}, i.unlayoutCallback = function() {
                    return !1
                }, i.unlayoutOnPause = function() {
                    return !1
                }, i.reconstructWhenReparented = function() {
                    return !0
                }, i.loadPromise = function(t) {
                    return Xe(t)
                }, i.registerAction = function(t, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    su(this), this.actionMap_[t] = {
                        handler: i,
                        minTrust: n
                    }
                }, i.registerDefaultAction = function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ru,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    Zt(!this.defaultActionAlias_), this.registerAction(i, t, n), this.defaultActionAlias_ = i
                }, i.executeAction = function(t, i) {
                    var n = t.method;
                    n === ru && (n = this.defaultActionAlias_ || n), su(this);
                    var r = this.actionMap_[n],
                        e = this.element.tagName;
                    ti(r, "Method not found: ".concat(n, " in ").concat(e));
                    var s = r.handler,
                        u = r.minTrust;
                    if (t.satisfiesTrust(u)) return s(t)
                }, i.forwardEvents = function(t, i) {
                    var n = this,
                        r = (V(t) ? t : [t]).map((function(t) {
                            return Ye(i, t, (function(i) {
                                Di(n.element, t, Ke(i) || {})
                            }))
                        }));
                    return function() {
                        return r.forEach((function(t) {
                            return t()
                        }))
                    }
                }, i.getPlaceholder = function() {
                    return this.element.getPlaceholder()
                }, i.togglePlaceholder = function(t) {
                    this.element.togglePlaceholder(t)
                }, i.getFallback = function() {
                    return this.element.getFallback()
                }, i.toggleFallback = function(t) {
                    this.element.toggleFallback(t)
                }, i.toggleLoading = function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.element.toggleLoading(t, i)
                }, i.getOverflowElement = function() {
                    return this.element.getOverflowElement()
                }, i.renderStarted = function() {
                    this.element.renderStarted()
                }, i.getViewport = function() {
                    return mr(this.getAmpDoc())
                }, i.getIntersectionElementLayoutBox = function() {
                    return this.getLayoutBox()
                }, i.collapse = function() {
                    rr(this.getAmpDoc()).collapseElement(this.element)
                }, i.attemptCollapse = function() {
                    return rr(this.getAmpDoc()).attemptCollapse(this.element)
                }, i.forceChangeHeight = function(t) {
                    rr(this.getAmpDoc()).forceChangeSize(this.element, t, void 0)
                }, i.attemptChangeHeight = function(t) {
                    return rr(this.getAmpDoc()).requestChangeSize(this.element, t, void 0)
                }, i.attemptChangeSize = function(t, i, n) {
                    return rr(this.getAmpDoc()).requestChangeSize(this.element, t, i, void 0, n)
                }, i.measureElement = function(t) {
                    return rr(this.getAmpDoc()).measureElement(t)
                }, i.mutateElement = function(t, i) {
                    return this.measureMutateElement(null, t, i)
                }, i.measureMutateElement = function(t, i, n) {
                    return rr(this.getAmpDoc()).measureMutateElement(n || this.element, t, i)
                }, i.mutateElementSkipRemeasure = function(t) {
                    return rr(this.getAmpDoc()).mutateElement(this.element, t, !0)
                }, i.collapsedCallback = function(t) {}, i.expand = function() {
                    rr(this.getAmpDoc()).expandElement(this.element)
                }, i.mutatedAttributesCallback = function(t) {}, i.onLayoutMeasure = function() {}, i.user = function() {
                    return Jt(this.element)
                }, i.getApi = function() {
                    return this
                }, t
            }();

        function su(t) {
            t.actionMap_ || (t.actionMap_ = t.win.Object.create(null))
        }
        var uu, ou = function(t) {
                U(n, t);
                var i = H(n);

                function n() {
                    return i.apply(this, arguments)
                }
                return n
            }(eu),
            hu = Date.now(),
            au = {
                bubbles: !1
            },
            cu = function() {
                return !0
            },
            fu = [],
            lu = new Set;

        function vu(t, n) {
            var r = function(t, n) {
                    if (t.__AMP_BASE_CE_CLASS) return t.__AMP_BASE_CE_CLASS;
                    var r = function(r) {
                        U(s, r);
                        var e = H(s);

                        function s() {
                            var t;
                            return (t = e.call(this)).createdCallback(), t
                        }
                        var u = s.prototype;
                        return u.createdCallback = function() {
                            this.Mr = !1, this.On = !1, this.Sr = null, this.dt = !1, this.kr = null, this._r = null, this.Rr = "upgrading", this.everAttached = !1, this.Ii = null, this.si = null, this.Nr = Qr, this.fi = 0, this.Cr = !1, this.warnOnMissingOverflow = !0, this.sizerElement = void 0, this.Dr = void 0, this.layoutScheduleTime = void 0;
                            var i = this,
                                n = t.__AMP_EXTENDED_ELEMENTS && t.__AMP_EXTENDED_ELEMENTS[this.localName];
                            this.jr = n === ou ? null : n || null, this.jr || fu.push(this), this.zr = null, this.Ur = 1, this.Lr = 0, this.Hr = void 0, this.Gr = void 0, this.Gt = new Pr, this.jr && this.Gt.signal(we);
                            var r = function(t, i) {
                                return zn(t = Tn(t), i) ? kn(t, i) : null
                            }(t, "performance");
                            this.Vr = r && r.isPerformanceTrackingOn(), this.bt = null, i.__AMP_UPG_RES && (i.__AMP_UPG_RES(i), delete i.__AMP_UPG_RES, delete i.__AMP_UPG_PRM)
                        }, u.signals = function() {
                            return this.Gt
                        }, u.getAmpDoc = function() {
                            return Zt(this.Ii), this.Ii
                        }, u.getResources = function() {
                            return Zt(this.si), this.si
                        }, u.isUpgraded = function() {
                            return 2 == this.Ur
                        }, u.whenUpgraded = function() {
                            return this.Gt.whenSignal(Ae)
                        }, u.upgrade = function(t) {
                            this.Gr || 1 == this.Ur && (this.jr = t, this.Gt.signal(we), this.everAttached && this.Fr())
                        }, u.markUnresolved = function() {
                            this.jr || this.classList.add("amp-unresolved", "i-amphtml-unresolved")
                        }, u.getUpgradeDelayMs = function() {
                            return this.Lr
                        }, u.Br = function(i, n) {
                            this.zr = i, this.Lr = t.Date.now() - n, this.Ur = 2, this.setReadyStateInternal(en), this.classList.remove("amp-unresolved", "i-amphtml-unresolved"), this.qr(), this.dispatchCustomEventForTesting(ge), this.R1() || this.getResources().upgraded(this), this.Gt.signal(Ae)
                        }, u.qr = function() {
                            this.Nr != Qr && this.zr && !this.zr.isLayoutSupported(this.Nr) && (ti(this.getAttribute("layout"), "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."), ti(!1, "Layout not supported: ".concat(this.Nr)))
                        }, u.getBuildPriority = function() {
                            return this.jr ? this.jr.getBuildPriority(this) : 3
                        }, u.getLayoutPriority = function() {
                            return this.zr ? this.zr.getLayoutPriority() : 3
                        }, u.getDefaultActionAlias = function() {
                            return Zt(this.isUpgraded()), this.zr.getDefaultActionAlias()
                        }, u.isBuilding = function() {
                            return !!this.Sr
                        }, u.isBuilt = function() {
                            return this.Mr
                        }, u.whenBuilt = function() {
                            return this.Gt.whenSignal(xe)
                        }, u.buildInternal = function() {
                            var t = this;
                            if (mu(this), Zt(this.jr), this.Sr) return this.Sr;
                            this.setReadyStateInternal(en);
                            var i = this.Wr();
                            this.$r();
                            var n = i.then((function() {
                                var i, n = t.Kr(),
                                    r = n ? null : t.Yr();
                                if (n || r) return (i = t, Gn(i, "consentPolicyManager", "amp-consent")).then((function(t) {
                                    return !t || (n ? t.whenPolicyUnblock(n) : t.whenPurposesUnblock(r))
                                })).then((function(t) {
                                    if (!t) throw new Error(ks)
                                }))
                            })).then((function() {
                                return Zt(t.zr).buildCallback()
                            }));
                            return this.Sr = n.then((function() {
                                if (t.Mr = !0, t.classList.add("i-amphtml-built"), t.classList.remove("i-amphtml-notbuilt", "amp-notbuilt"), t.Gt.signal(xe), t.R1() ? t.setReadyStateInternal(t.Rr != en ? t.Rr : sn) : (t.setReadyStateInternal(un), t.preconnect(!1)), t.On && t.Jr(), t.Hr && ar(oi(t)).delay(t.Xr.bind(t), 1), !t.getPlaceholder()) {
                                    var i = t.createPlaceholder();
                                    i && t.appendChild(i)
                                }
                            }), (function(i) {
                                throw t.Gt.rejectSignal(xe, i), t.R1() && t.setReadyStateInternal(hn, i), Us(i) || Ds(i, t), i
                            }))
                        }, u.build = function() {
                            var t = this;
                            return this.Sr ? this.Sr : this.Gt.whenSignal(we).then((function() {
                                return t.R1() && Bs(t.getAmpDoc()).scheduleAsap(t), t.whenBuilt()
                            }))
                        }, u.mountInternal = function() {
                            var t = this;
                            if (this.kr) return this.kr;
                            this._r = this._r || new AbortController;
                            var i = this._r.signal;
                            return this.kr = this.buildInternal().then((function() {
                                if (Zt(t.R1()), !i.aborted) {
                                    t.setReadyStateInternal(t.Rr != sn ? t.Rr : t.jr.usesLoading(t) ? un : sn), t.dt = !0;
                                    var n = t.zr.mountCallback(i);
                                    return !!n && n.then(cu)
                                }
                            })).then((function(n) {
                                if (t._r = null, i.aborted) throw js();
                                t.Gt.signal(Ee), t.jr.usesLoading(t) && !n || t.setReadyStateInternal(on)
                            })).catch((function(i) {
                                var n;
                                throw t._r = null, (n = i) && ("string" == typeof n ? n.startsWith(_s) : "string" == typeof n.message && n.message.startsWith(_s)) ? t.kr = null : (t.Gt.rejectSignal(Ee, i), t.setReadyStateInternal(hn, i)), i
                            }))
                        }, u.mount = function() {
                            var t = this;
                            if (this.kr) return this.kr;
                            this._r = this._r || new AbortController;
                            var i = this._r.signal;
                            return this.Gt.whenSignal(we).then((function() {
                                if (!t.R1()) return t.whenBuilt();
                                if (i.aborted) throw js();
                                return Bs(t.getAmpDoc()).scheduleAsap(t), t.whenMounted()
                            }))
                        }, u.unmount = function() {
                            this.On && this.pause(), this.R1() ? (this._r && (this._r.abort(), this._r = null), Bs(this.getAmpDoc()).unschedule(this), this.dt && this.zr.unmountCallback(), this.dt = !1, this.kr = null, this.Qr(), this.On && this.Fr(!0)) : this.Zr()
                        }, u.whenMounted = function() {
                            return this.Gt.whenSignal(Ee)
                        }, u.whenLoaded = function() {
                            return this.Gt.whenSignal(Ie)
                        }, u.ensureLoaded = function(t) {
                            var i = this;
                            return this.mount().then((function() {
                                if (i.R1()) return i.jr.usesLoading(i) && i.zr.ensureLoaded(), i.whenLoaded();
                                var n = i.te();
                                return n.whenBuilt().then((function() {
                                    if (4 != n.getState() && ((3 != n.getState() || n.isMeasureRequested()) && n.measure(), n.isDisplayed())) return i.getResources().scheduleLayoutOrPreload(n, !0, t, !0), i.whenLoaded()
                                }))
                            }))
                        }, u.setAsContainerInternal = function(t) {
                            Bs(this.getAmpDoc()).setContainer(this, t)
                        }, u.removeAsContainerInternal = function() {
                            Bs(this.getAmpDoc()).removeContainer(this)
                        }, u.setReadyStateInternal = function(t, i) {
                            if (t !== this.Rr && (this.Rr = t, this.R1())) switch (t) {
                                case un:
                                    return this.Gt.signal(Pe), this.Gt.reset(Me), this.Gt.reset(Ie), this.classList.add("i-amphtml-layout"), this.toggleLoading(!0), void this.dispatchCustomEventForTesting(be);
                                case on:
                                    return this.Gt.signal(Pe), this.Gt.signal(Ie), this.Gt.reset(Me), this.classList.add("i-amphtml-layout"), this.toggleLoading(!1), Di(this, "load", null, au), void this.dispatchCustomEventForTesting(ye);
                                case hn:
                                    return this.Gt.rejectSignal(Ie, i), this.toggleLoading(!1), void Di(this, "error", i, au)
                            }
                        }, u.preconnect = function(t) {
                            var i = this;
                            Zt(this.isUpgraded()), t ? this.zr.preconnectCallback(t) : Xs(this.getAmpDoc(), (function() {
                                i.ownerDocument && i.ownerDocument.defaultView && i.zr.preconnectCallback(t)
                            }))
                        }, u.R1 = function() {
                            return !!this.jr && this.jr.R1()
                        }, u.deferredMount = function() {
                            return !!this.jr && this.jr.deferredMount(this)
                        }, u.isAlwaysFixed = function() {
                            return !!this.zr && this.zr.isAlwaysFixed()
                        }, u.updateLayoutBox = function(t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.isBuilt() && this.onMeasure(i)
                        }, u.onMeasure = function() {
                            Zt(this.isBuilt());
                            try {
                                this.zr.onLayoutMeasure()
                            } catch (t) {
                                Ds(t, this)
                            }
                        }, u.$r = function() {
                            var t;
                            return void 0 !== this.sizerElement || this.Nr !== ie && this.Nr !== ue || (this.sizerElement = this.querySelector("i-amphtml-sizer"), null === (t = this.sizerElement) || void 0 === t || t.setAttribute("slot", "i-amphtml-svc")), this.sizerElement || null
                        }, u.ie = function(t) {
                            if (this.Nr !== ie)
                                if (this.Nr !== ue);
                                else {
                                    var i = t.querySelector(".i-amphtml-intrinsic-sizer");
                                    if (!i) return;
                                    i.setAttribute("src", "")
                                }
                            else Rr(t, "paddingTop", "0")
                        }, u.ne = function() {
                            var t = this,
                                i = this.hasAttribute("media") || this.hasAttribute("sizes") && !this.hasAttribute("disable-inline-width") || this.hasAttribute("heights"),
                                n = !!this.bt,
                                r = this.ownerDocument.defaultView;
                            i != n && r && (i ? (this.bt = new Te(r, (function() {
                                return t.re()
                            })), this.re()) : this.ee())
                        }, u.ee = function() {
                            this.bt && (this.bt.dispose(), this.bt = null)
                        }, u.re = function() {
                            var t = this.bt;
                            if (t) {
                                t.start();
                                var i = this.getAttribute("media") || null,
                                    n = !i || t.resolveMatchQuery(i);
                                this.classList.toggle("i-amphtml-hidden-by-media-query", !n);
                                var r = this.hasAttribute("disable-inline-width") ? null : this.getAttribute("sizes");
                                r && Rr(this, "width", t.resolveListQuery(r));
                                var e = this.Nr === ie ? this.getAttribute("heights") : null;
                                if (e) {
                                    var s = this.$r();
                                    s && Rr(s, "paddingTop", t.resolveListQuery(e))
                                }
                                t.complete(), this.te().requestMeasure()
                            }
                        }, u.applySize = function(t, i, n) {
                            var r = this.$r();
                            r && (this.sizerElement = null, this.ie(r), this.se((function() {
                                r && Ti(r)
                            }))), void 0 !== t && Rr(this, "height", t, "px"), void 0 !== i && Rr(this, "width", i, "px"), n && (null != n.top && Rr(this, "marginTop", n.top, "px"), null != n.right && Rr(this, "marginRight", n.right, "px"), null != n.bottom && Rr(this, "marginBottom", n.bottom, "px"), null != n.left && Rr(this, "marginLeft", n.left, "px")), this.oe() && this.ue(), Di(this, "amp:size-changed")
                        }, u.connectedCallback = function() {
                            if (function() {
                                    if (void 0 === uu) {
                                        var t = self.document.createElement("template");
                                        uu = "content" in t
                                    }
                                    return uu
                                }() || void 0 !== this.Gr || (this.Gr = !!yi(this, "template")), !this.Gr && !this.On && Ri(this)) {
                                if (this.On = !0, this.everAttached || this.classList.add("i-amphtml-element", "i-amphtml-notbuilt", "amp-notbuilt"), !this.Ii) {
                                    var t = oi(this),
                                        i = Yn(t).getAmpDoc(this);
                                    this.Ii = i, n(i, this, this.jr)
                                }
                                if (this.si || (this.si = or(this.Ii)), this.getResources().add(this), this.everAttached) {
                                    var r = this.reconstructWhenReparented();
                                    r && this.Qr(), this.isUpgraded() && (r && !this.R1() && this.getResources().upgraded(this), this.Jr(), this.dispatchCustomEventForTesting(ge)), this.jr && this.R1() && this.Fr()
                                } else {
                                    this.everAttached = !0;
                                    try {
                                        this.Nr = function(t) {
                                            var i = t.getAttribute("i-amphtml-layout");
                                            if (i) {
                                                var n, r = he(i);
                                                return et(r), r != ie && r != ue || !t.firstElementChild ? r == Qr && kr(t, !1) : (t.sizerElement = t.querySelector("i-amphtml-sizer") || void 0, null === (n = t.sizerElement) || void 0 === n || n.setAttribute("slot", "i-amphtml-svc")), r
                                            }
                                            var e = je(t),
                                                s = e.height,
                                                u = e.layout,
                                                o = e.width;
                                            if (t.classList.add(ae(u)), ce(u) && t.classList.add("i-amphtml-layout-size-defined"), u == Qr) kr(t, !1);
                                            else if (u == Zr) _r(t, {
                                                width: ut(o),
                                                height: ut(s)
                                            });
                                            else if (u == te) Rr(t, "height", ut(s));
                                            else if (u == ie) {
                                                var h = t.ownerDocument.createElement("i-amphtml-sizer");
                                                h.setAttribute("slot", "i-amphtml-svc");
                                                var a = ve(s),
                                                    c = ve(o);
                                                ot(a), ot(c), _r(h, {
                                                    paddingTop: a / c * 100 + "%"
                                                }), t.insertBefore(h, t.firstChild), t.sizerElement = h
                                            } else if (u == ue) {
                                                var f = ke(t)(Ne),
                                                    l = f.firstElementChild;
                                                st(l), l.setAttribute("src", 'data:image/svg+xml;charset=utf-8,<svg height="'.concat(s, '" width="').concat(o, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')), t.insertBefore(f, t.firstChild), t.sizerElement = f
                                            } else u == re || u == ne || (u == ee ? (o && Rr(t, "width", o), s && Rr(t, "height", s)) : u == se && (t.classList.add("i-amphtml-layout-awaiting-size"), o && Rr(t, "width", o), Rr(t, "height", 0)));
                                            return t.setAttribute("i-amphtml-layout", u), u
                                        }(this), this.ne()
                                    } catch (t) {
                                        Ds(t, this)
                                    }
                                    this.jr ? this.Fr() : (lu.has("*") || lu.has(this.tagName.toLowerCase())) && this.markUnresolved(), this.isUpgraded() || this.dispatchCustomEventForTesting("amp:stubbed")
                                }
                                this.toggleLoading(!0)
                            }
                        }, u.oe = function() {
                            return this.classList.contains("i-amphtml-layout-awaiting-size")
                        }, u.ue = function() {
                            this.classList.remove("i-amphtml-layout-awaiting-size")
                        }, u.Fr = function(t) {
                            if (this.R1()) {
                                if (!this.kr)
                                    if (Bs(this.getAmpDoc()).schedule(this), this.classList.remove("amp-unresolved", "i-amphtml-unresolved"), this.Sr) this.setReadyStateInternal(this.jr && this.jr.usesLoading(this) ? un : sn);
                                    else if (this.setReadyStateInternal(en), !t) {
                                    var i = this.jr.getPreconnects(this);
                                    if (i && i.length > 0) {
                                        var n = this.getAmpDoc();
                                        Xs(n, (function() {
                                            var t = n.win;
                                            if (t) {
                                                var r = ur(t);
                                                i.forEach((function(t) {
                                                    return r.url(n, t, !1)
                                                }))
                                            }
                                        }))
                                    }
                                }
                            } else this.he()
                        }, u.he = function() {
                            var i = this;
                            if (!this.Gr && 1 == this.Ur) {
                                var n = new(Zt(this.jr))(this);
                                this.Ur = 4;
                                var r = t.Date.now(),
                                    e = n.upgradeCallback();
                                if (e) {
                                    if ("function" == typeof e.then) return e.then((function(t) {
                                        i.Br(t || n, r)
                                    })).catch((function(t) {
                                        i.Ur = 3, d(t)
                                    }));
                                    this.Br(e, r)
                                } else this.Br(n, r)
                            }
                        }, u.disconnectedCallback = function() {
                            this.disconnect(!1)
                        }, u.Jr = function() {
                            this.Mr && this.zr.attachedCallback()
                        }, u.disconnect = function(t) {
                            !this.Gr && this.On && (!t && Ri(this) || (t && this.classList.remove("i-amphtml-element"), this.On = !1, this.getResources().remove(this), this.zr && this.zr.detachedCallback(), this.R1() && this.unmount(), this.toggleLoading(!1), this.ee()))
                        }, u.dispatchCustomEventForTesting = function(t, i) {}, u.prerenderAllowed = function() {
                            return !this.hasAttribute("noprerender") && !!this.jr && this.jr.prerenderAllowed(this)
                        }, u.previewAllowed = function() {
                            return !!this.jr && this.jr.previewAllowed(this)
                        }, u.isBuildRenderBlocking = function() {
                            return !!this.zr && this.zr.isBuildRenderBlocking()
                        }, u.createPlaceholder = function() {
                            return this.zr ? this.zr.createPlaceholderCallback() : null
                        }, u.createLoaderLogo = function() {
                            return this.jr ? this.jr.createLoaderLogoCallback(this) : {}
                        }, u.renderOutsideViewport = function() {
                            return !!this.zr && this.zr.renderOutsideViewport()
                        }, u.idleRenderOutsideViewport = function() {
                            return !!this.zr && this.zr.idleRenderOutsideViewport()
                        }, u.getLayoutBox = function() {
                            return this.te().getLayoutBox()
                        }, u.getLayoutSize = function() {
                            return this.te().getLayoutSize()
                        }, u.getOwner = function() {
                            return this.te().getOwner()
                        }, u.getIntersectionChangeEntry = function() {
                            var t = this.zr ? this.zr.getIntersectionElementLayoutBox() : this.getLayoutBox(),
                                i = this.getOwner(),
                                n = mr(this.getAmpDoc()).getRect();
                            return function(t, i, n) {
                                var r, e, s, u, o = function(t) {
                                    for (var i = -1 / 0, n = 1 / 0, r = -1 / 0, e = 1 / 0, s = 0; s < arguments.length; s++) {
                                        var u = arguments[s];
                                        if (u && (i = Math.max(i, u.left), n = Math.min(n, u.left + u.width), r = Math.max(r, u.top), e = Math.min(e, u.top + u.height), n < i || e < r)) return null
                                    }
                                    return n == 1 / 0 ? null : zi(i, r, n - i, e - r)
                                }(t, i, n) || zi(0, 0, 0, 0);
                                return function(t, i, n, r) {
                                    var e = t,
                                        s = i;
                                    return i && (s = s, n = Gi(n, -i.left, -i.top), e = Gi(e, -i.left, -i.top), s = Gi(s, -i.left, -i.top)), {
                                        time: "undefined" != typeof performance && performance.now ? performance.now() : Date.now() - hu,
                                        rootBounds: s,
                                        boundingClientRect: e,
                                        intersectionRect: n,
                                        intersectionRatio: r
                                    }
                                }(t, n, o, (e = t, s = (r = o).width * r.height, 0 == (u = e.width * e.height) ? 0 : s / u))
                            }(t, i && i.getLayoutBox(), n)
                        }, u.te = function() {
                            return this.getResources().getResourceForElement(this)
                        }, u.getResourceId = function() {
                            return this.te().getId()
                        }, u.isRelayoutNeeded = function() {
                            return !!this.zr && this.zr.isRelayoutNeeded()
                        }, u.getImpl = function() {
                            var t = this;
                            return (arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? this.Wr() : this.build()).then((function() {
                                return t.zr
                            }))
                        }, u.Wr = function() {
                            var t = this;
                            return this.Gt.whenSignal(we).then((function() {
                                return t.he(), t.whenUpgraded()
                            }))
                        }, u.getApi = function() {
                            return this.getImpl().then((function(t) {
                                return t.getApi()
                            }))
                        }, u.getLayout = function() {
                            return this.Nr
                        }, u.layoutCallback = function(t) {
                            var i = this;
                            if (mu(this), Zt(this.isBuilt()), t.aborted) return Promise.reject(js());
                            this.dispatchCustomEventForTesting(be);
                            var n = 0 == this.fi;
                            this.Gt.reset(Me), n && this.Gt.signal(Pe), this.toggleLoading(!0);
                            var r = c((function() {
                                return i.zr.layoutCallback()
                            }));
                            return this.preconnect(!0), this.classList.add("i-amphtml-layout"), r.then((function() {
                                if (t.aborted) throw js();
                                n && i.Gt.signal(Ie), i.setReadyStateInternal(on), i.fi++, i.toggleLoading(!1), i.Cr || (i.zr.firstLayoutCompleted(), i.Cr = !0, i.dispatchCustomEventForTesting(ye))
                            }), (function(r) {
                                if (t.aborted) throw js();
                                throw n && i.Gt.rejectSignal(Ie, r), i.setReadyStateInternal(hn, r), i.fi++, i.toggleLoading(!1), r
                            }))
                        }, u.pause = function() {
                            this.isBuilt() && (this.zr.pauseCallback(), !this.R1() && this.zr.unlayoutOnPause() && this.Zr())
                        }, u.resume = function() {
                            this.isBuilt() && this.zr.resumeCallback()
                        }, u.unlayoutCallback = function() {
                            if (mu(this), !this.isBuilt()) return !1;
                            this.Gt.signal(Me);
                            var t = this.zr.unlayoutCallback();
                            return t && this.Qr(), this.dispatchCustomEventForTesting("amp:unload"), t
                        }, u.Zr = function() {
                            this.te().unlayout(), this.On && this.si && this.si.schedulePass()
                        }, u.Qr = function() {
                            this.fi = 0, this.Cr = !1, this.Gt.reset(Ee), this.Gt.reset(Oe), this.Gt.reset(Pe), this.Gt.reset(Ie), this.Gt.reset("ini-load")
                        }, u.reconstructWhenReparented = function() {
                            return !!this.zr && this.zr.reconstructWhenReparented()
                        }, u.collapse = function() {
                            this.zr && this.zr.collapse()
                        }, u.collapsedCallback = function(t) {
                            this.zr && this.zr.collapsedCallback(t)
                        }, u.expand = function() {
                            this.zr && this.zr.expand()
                        }, u.mutatedAttributesCallback = function(t) {
                            this.zr ? this.zr.mutatedAttributesCallback(t) : this.R1() && Bs(this).scheduleAsap(this)
                        }, u.enqueAction = function(t) {
                            mu(this), this.isBuilt() ? this.ae(t, !1) : (void 0 === this.Hr && (this.Hr = []), Zt(this.Hr).push(t), this.build())
                        }, u.Xr = function() {
                            var t = this;
                            if (this.Hr) {
                                var i = Zt(this.Hr);
                                this.Hr = null, i.forEach((function(i) {
                                    t.ae(i, !0)
                                }))
                            }
                        }, u.ae = function(t, i) {
                            try {
                                this.zr.executeAction(t, i)
                            } catch (i) {
                                d("Action execution failed:", i, t.node.tagName, t.method)
                            }
                        }, u.Kr = function() {
                            var t, i, n = this.getAttribute("data-block-on-consent");
                            if (null === n) {
                                if (!(i = (t = this).getAmpDoc().getMetaByName("amp-consent-blocking")) || !(i = i.toUpperCase().replace(/\s+/g, "")).split(",").includes(t.tagName)) return null;
                                n = "default", this.setAttribute("data-block-on-consent", n)
                            }
                            return "" == n || "default" == n ? Zt(this.zr).getConsentPolicy() : n
                        }, u.Yr = function() {
                            var t, i = this.getAttribute("data-block-on-consent-purposes") || null;
                            return null == i || null === (t = i.replace(/\s+/g, "")) || void 0 === t ? void 0 : t.split(",")
                        }, u.getPlaceholder = function() {
                            return wi(this, (function(t) {
                                return t.hasAttribute("placeholder") && !du(t)
                            }))
                        }, u.togglePlaceholder = function(t) {
                            if (mu(this), t) {
                                var i = this.getPlaceholder();
                                i && i.classList.remove("amp-hidden")
                            } else
                                for (var n = (this, e = void 0, void 0, di("placeholder"), e = this, s = "> [".concat("placeholder", "]"), fi(e) ? e.querySelectorAll(li(s, ":scope")) : mi(e, s)), r = 0; r < n.length; r++) du(n[r]) || n[r].classList.add("amp-hidden");
                            var e, s
                        }, u.getFallback = function() {
                            return Ai(this, "fallback")
                        }, u.toggleFallback = function(t) {
                            mu(this);
                            var i, n = this.te().getState();
                            if ((this.R1() || !t || 0 != n && 1 != n && 2 != n) && (this.classList.toggle("amp-notsupported", t), 1 == t)) {
                                var r = this.getFallback();
                                r && (i = this.getAmpDoc(), Pn(i, "owners")).scheduleLayout(this, r)
                            }
                        }, u.renderStarted = function() {
                            this.Gt.signal(Oe), this.togglePlaceholder(!1), this.toggleLoading(!1)
                        }, u.ce = function(t) {
                            var i, n, r = this.fi > 0 || this.Gt.get(Oe);
                            return !(this.Nr == Qr || this.hasAttribute("noloading") || r && !t || (this, n = this.tagName.toUpperCase(), "AMP-AD" !== (i = n) && "AMP-ANIM" !== i && "AMP-EMBED" !== i && "AMP-FACEBOOK" !== i && "AMP-FACEBOOK-COMMENTS" !== i && "AMP-FACEBOOK-PAGE" !== i && "AMP-GOOGLE-DOCUMENT-EMBED" !== i && "AMP-IFRAME" !== i && "AMP-IMG" !== i && "AMP-INSTAGRAM" !== i && "AMP-LIST" !== i && "AMP-PINTEREST" !== i && "AMP-PLAYBUZZ" !== i && "AMP-RENDER" !== i && "AMP-TIKTOK" !== i && "AMP-TWITTER" !== i && ! function(t) {
                                return "AMP-VIDEO" != t && oe.test(t)
                            }(n)) || xi(this))
                        }, u.toggleLoading = function(t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (this.ownerDocument && this.ownerDocument.defaultView) {
                                var n = nr(this.getAmpDoc());
                                n && ((t = t && this.ce(i)) ? n.track(this) : n.untrack(this))
                            }
                        }, u.getOverflowElement = function() {
                            return void 0 === this.Dr && (this.Dr = Ai(this, "overflow"), this.Dr && (this.Dr.hasAttribute("tabindex") || this.Dr.setAttribute("tabindex", "0"), this.Dr.hasAttribute("role") || this.Dr.setAttribute("role", "button"))), this.Dr
                        }, u.overflowCallback = function(t, i, n) {
                            var r = this;
                            this.getOverflowElement(), this.Dr ? (this.Dr.classList.toggle("amp-visible", t), this.Dr.onclick = t ? function() {
                                var t = rr(r.getAmpDoc());
                                t.forceChangeSize(r, i, n), t.mutateElement(r, (function() {
                                    r.overflowCallback(!1, i, n)
                                }))
                            } : null) : t && this.warnOnMissingOverflow && Jt().warn("CustomElement", "Cannot resize element and overflow is not available", this)
                        }, u.se = function(t, i) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            this.Ii ? rr(this.getAmpDoc()).mutateElement(i || this, t, n) : t()
                        }, i(s, [{
                            key: "readyState",
                            get: function() {
                                return this.Rr
                            }
                        }]), s
                    }(t.HTMLElement);
                    return t.__AMP_BASE_CE_CLASS = r, t.__AMP_BASE_CE_CLASS
                }(t, n),
                e = function(t) {
                    U(n, t);
                    var i = H(n);

                    function n() {
                        return i.apply(this, arguments)
                    }
                    return n.prototype.adoptedCallback = function() {
                        Object.getPrototypeOf(this) !== s && Object.setPrototypeOf(this, s)
                    }, n
                }(r),
                s = e.prototype;
            return e
        }

        function du(t) {
            return "placeholder" in t
        }

        function mu(t) {
            Zt(!t.Gr)
        }

        function pu(t) {
            lu.add(t || "*");
            for (var i, n = o(fu, !0); !(i = n()).done;) {
                var r = i.value;
                null != t && r.tagName.toLowerCase() !== t || r.markUnresolved()
            }
        }
        var gu = new WeakMap;

        function bu(t) {
            return t.__AMP_EXTENDED_ELEMENTS || (t.__AMP_EXTENDED_ELEMENTS = {}), t.__AMP_EXTENDED_ELEMENTS
        }

        function yu(t, i, n) {
            var r = bu(t);
            if (r[i]) {
                if (r[i] != n) {
                    ti(r[i] == ou, "%s is already registered. The script tag for %s is likely included twice in the page.", i, i), r[i] = n;
                    for (var e = 0; e < fu.length; e++) {
                        var s = fu[e];
                        s.tagName.toLowerCase() == i && s.ownerDocument.defaultView == t && (wu(s, n), fu.splice(e--, 1))
                    }
                }
            } else Pu(t, i, n)
        }

        function wu(t, i) {
            try {
                t.upgrade(i)
            } catch (i) {
                Ds(i, t)
            }
        }

        function Au(t) {
            (function(t) {
                if (!t) return [];
                for (var i = t.querySelectorAll("script[custom-element],script[custom-template]"), n = [], r = 0; r < i.length; r++) {
                    var e = i[r],
                        s = e.getAttribute("custom-element") || e.getAttribute("custom-template"),
                        u = gn(e.src);
                    s && u && n.push({
                        script: e,
                        extensionId: s,
                        extensionVersion: u.extensionVersion
                    })
                }
                return n
            })(t.getHeadNode()).forEach((function(i) {
                var n = i.extensionId,
                    r = i.extensionVersion,
                    e = i.script;
                t.declareExtension(n, r), e.addEventListener("error", (function() {
                    return pu(n)
                })), xu(t.win, n)
            })), t.isBodyAvailable() && t.setExtensionsKnown()
        }

        function xu(t, i) {
            bu(t)[i] || Pu(t, i, ou)
        }

        function Eu(t, i, n) {
            Pu(i, n, bu(t)[n] || ou)
        }

        function Pu(t, i, n) {
            bu(t)[i] = n;
            var r = vu(t, Ou);
            t.customElements.define(i, r)
        }

        function Ou(t, i, n) {
            gu.has(t) || (gu.set(t, !0), Au(t));
            var r = i.localName;
            n || t.declaresExtension(r) || tr(t.win).installExtensionForDoc(t, r, "0.1")
        }
        var Iu = "amp-img",
            Mu = ["alt", "aria-describedby", "aria-label", "aria-labelledby", "crossorigin", "referrerpolicy", "title", "importance", "sizes", "srcset", "src"],
            Tu = function(t) {
                U(n, t);
                var i = H(n);

                function n(t) {
                    var n;
                    return (n = i.call(this, t)).fe = !0, n.le = null, n.ve = null, n.de = null, n.me = 0, n
                }
                n.R1 = function() {
                    return !1
                }, n.prerenderAllowed = function() {
                    return !0
                }, n.usesLoading = function() {
                    return !0
                }, n.getPreconnects = function(t) {
                    var i = t.getAttribute("src");
                    if (i) return [i];
                    var n = t.getAttribute("srcset");
                    if (n) {
                        var r = /\S+/.exec(n);
                        if (r) return [r[0]]
                    }
                    return null
                };
                var r = n.prototype;
                return r.mutatedAttributesCallback = function(t) {
                    if (this.le) {
                        var i = Mu.filter((function(i) {
                            return void 0 !== t[i]
                        }));
                        t.src && !t.srcset && this.element.hasAttribute("srcset") && (this.element.removeAttribute("srcset"), i.push("srcset"), this.user().warn(Iu, "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.", this.element)), me(i, this.element, this.le, !0), this.propagateDataset(this.le), Xr(this.le), n.R1() && !this.le.complete && this.setReadyState(un)
                    }
                }, r.preconnectCallback = function(t) {
                    var i = this.element.getAttribute("src");
                    if (i) ur(this.win).url(this.getAmpDoc(), i, t);
                    else {
                        var n = this.element.getAttribute("srcset");
                        if (!n) return;
                        var r = /\S+/.exec(n);
                        r && ur(this.win).url(this.getAmpDoc(), r[0], t)
                    }
                }, r.isLayoutSupported = function(t) {
                    return ce(t)
                }, r.pe = function() {
                    if (this.le) return this.le;
                    this.fe = !this.element.hasAttribute("fallback");
                    var t, i, n = Ui(this.element);
                    return n && (this.le = pi(this.element, "> img:not([placeholder])")), this.le = this.le || new Image, this.le.setAttribute("decoding", "async"), this.element.id && this.le.setAttribute("amp-img-id", this.element.id), "img" == this.element.getAttribute("role") && (this.element.removeAttribute("role"), this.user().error(Iu, "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element.")), this.be(!0), me(Mu, this.element, this.le), this.propagateDataset(this.le), Xr(this.le), de(this.le, !0), t = this.element, i = this.le, t.hasAttribute("object-fit") && Rr(i, "object-fit", t.getAttribute("object-fit")), t.hasAttribute("object-position") && Rr(i, "object-position", t.getAttribute("object-position")), n || this.element.appendChild(this.le), this.le
                }, r.be = function(t) {
                    var i = this;
                    if (this.le && !this.element.hasAttribute("i-amphtml-ssr") && !this.element.hasAttribute("sizes") && !this.le.hasAttribute("sizes")) {
                        var n = this.element.getAttribute("srcset");
                        if (n && !/[0-9]+x(?:,|$)/.test(n)) {
                            var r = this.element.getLayoutSize().width;
                            if (this.ge(r)) {
                                var e = this.getViewport().getWidth(),
                                    s = "(max-width: ".concat(e, "px) ").concat(r, "px, "),
                                    u = r + "px";
                                if (this.getLayout() !== Zr) {
                                    var o = Math.round(100 * r / e);
                                    u = Math.max(o, 100) + "vw"
                                }
                                var h = s + u;
                                t ? this.le.setAttribute("sizes", h) : this.mutateElement((function() {
                                    i.le.setAttribute("sizes", h)
                                })), this.me = r
                            }
                        }
                    }
                }, r.ge = function(t) {
                    return !this.le.hasAttribute("sizes") || t > this.me
                }, r.reconstructWhenReparented = function() {
                    return !1
                }, r.mountCallback = function() {
                    var t = this,
                        i = !!this.le,
                        n = this.pe();
                    i || (Ye(n, "load", (function() {
                        t.setReadyState(on), t.firstLayoutCompleted(), t.ye()
                    })), Ye(n, "error", (function(i) {
                        t.setReadyState(hn, i), t.we()
                    }))), n.complete ? (this.setReadyState(on), this.firstLayoutCompleted(), this.ye()) : this.setReadyState(un)
                }, r.unmountCallback = function() {
                    var t = this.le;
                    t && !t.complete && (t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=", Ti(t), this.le = null)
                }, r.ensureLoaded = function() {
                    this.le.loading = "eager"
                }, r.layoutCallback = function() {
                    var t = this;
                    this.pe();
                    var i = this.le;
                    return this.ve = Ye(i, "load", (function() {
                        return t.ye()
                    })), this.de = Ye(i, "error", (function() {
                        return t.we()
                    })), this.element.getLayoutSize().width <= 0 ? h() : this.loadPromise(i)
                }, r.unlayoutCallback = function() {
                    if (!n.R1()) {
                        this.de && (this.de(), this.de = null), this.ve && (this.ve(), this.ve = null);
                        var t = this.le;
                        return t && !t.complete && (t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=", Ti(t), this.le = null), !0
                    }
                }, r.firstLayoutCompleted = function() {
                    var t = this.getPlaceholder();
                    t && t.classList.contains("i-amphtml-blurry-placeholder") ? Sr(t, {
                        "opacity": 0
                    }) : this.togglePlaceholder(!1)
                }, r.ye = function() {
                    !this.fe && this.le.classList.contains("i-amphtml-ghost") && (this.le.classList.remove("i-amphtml-ghost"), this.toggleFallback(!1))
                }, r.we = function() {
                    this.fe && (this.le.classList.add("i-amphtml-ghost"), this.toggleFallback(!0), this.togglePlaceholder(!1), this.fe = !1)
                }, r.propagateDataset = function(t) {
                    for (var i in t.dataset) i in this.element.dataset || delete t.dataset[i];
                    for (var n in this.element.dataset) n.startsWith("ampBind") && "ampBind" !== n || t.dataset[n] !== this.element.dataset[n] && (t.dataset[n] = this.element.dataset[n])
                }, n
            }(eu),
            Su = function(t) {
                U(n, t);
                var i = H(n);

                function n() {
                    return i.apply(this, arguments)
                }
                n.prerenderAllowed = function() {
                    return !0
                };
                var r = n.prototype;
                return r.isLayoutSupported = function(t) {
                    return t == ne || ce(t)
                }, r.buildCallback = function() {
                    ! function(t) {
                        if (!Ui(t)) {
                            var i = function(t) {
                                var i;
                                return he(null !== (i = t.getAttribute("layout")) && void 0 !== i ? i : "") || je(t).layout
                            }(t);
                            if (i != ne) {
                                var n = t.ownerDocument.createElement("div");
                                de(n),
                                    function(t) {
                                        return function(t, i) {
                                            for (var n = [], r = t.firstChild; r; r = r.nextSibling) !xi(r) && n.push(r);
                                            return n
                                        }(t)
                                    }(t).forEach((function(t) {
                                        n.appendChild(t)
                                    })), t.appendChild(n)
                            }
                        }
                    }(this.element)
                }, n
            }(eu);

        function Ru(t, i) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = zr.getImage(t),
                e = new r;
            return n && (e.referrerPolicy = "no-referrer"), e.src = i, e
        }
        var _u = "amp-pixel",
            ku = function(t) {
                U(n, t);
                var i = H(n);

                function n(t) {
                    var n;
                    return (n = i.call(this, t)).Ae = null, n
                }
                var r = n.prototype;
                return r.isLayoutSupported = function(t) {
                    return !0
                }, r.buildCallback = function() {
                    this.element.setAttribute("aria-hidden", "true"), this.xe = this.element.getAttribute("referrerpolicy"), this.xe && ti("no-referrer" == this.xe, "".concat(_u, ': invalid "referrerpolicy" value "').concat(this.xe, '".') + ' Only "no-referrer" is supported'), this.element.hasAttribute("i-amphtml-ssr") && this.element.querySelector("img") ? Qt().info(_u, "inabox img already present") : this.getAmpDoc().whenFirstVisible().then(this.Ee.bind(this))
                }, r.Ee = function() {
                    var t = this;
                    if (this.Ae) return Qt().error(_u, "duplicate pixel"), this.Ae;
                    this.Ae = ar(this.win).promise(1).then((function() {
                        var i = t.element.getAttribute("src");
                        if (i) return cr(t.element).expandUrlAsync(t.Oe(i)).then((function(i) {
                            if (t.win) {
                                var n = function(t, i, n) {
                                    return n && "no-referrer" !== n && Jt().error("pixel", "Unsupported referrerPolicy: %s", n), "no-referrer" === n ? function(t, i) {
                                        if ("referrerPolicy" in Image.prototype) return Ru(t, i, !0);
                                        var n, r = (n = {
                                            "src": "about:blank",
                                            "style": "display:none"
                                        }, function(t, i) {
                                            for (var n in i) t.setAttribute(n, i[n]);
                                            return t
                                        }(t.document.createElement("iframe"), n));
                                        return r.onload = function() {
                                            Ru(r.contentWindow, i)
                                        }, t.document.body.appendChild(r), r
                                    }(t, i) : Ru(t, i)
                                }(t.win, i, t.xe);
                                return Qt().info(_u, "pixel triggered: ", i), n
                            }
                        }))
                    }))
                }, r.Oe = function(t) {
                    return ti(/^(https\:\/\/|\/\/)/i.test(t), 'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' + t), t
                }, n
            }(eu),
            Cu = function() {
                function t(t, i, n) {
                    var r = this;
                    this.Pe = ar(t), this.Te = i, this.Ie = n || 0, this.Me = -1, this.Se = 0, this.Vn = !1, this.ke = function() {
                        r._e()
                    }
                }
                var i = t.prototype;
                return i.isPending = function() {
                    return -1 != this.Me
                }, i.schedule = function(t) {
                    var i = t || this.Ie;
                    this.Vn && i < 10 && (i = 10);
                    var n = Date.now() + i;
                    return (!this.isPending() || n - this.Se < -10) && (this.cancel(), this.Se = n, this.Me = this.Pe.delay(this.ke, i), !0)
                }, i._e = function() {
                    this.Me = -1, this.Se = 0, this.Vn = !0, this.Te(), this.Vn = !1
                }, i.cancel = function() {
                    this.isPending() && (this.Pe.cancel(this.Me), this.Me = -1)
                }, t
            }();

        function Nu(t, i) {
            var n = i.documentElement;
            return t.some((function(t) {
                return n.hasAttribute(t)
            }))
        }

        function Du(t) {
            return Nu(["⚡4email", "amp4email"], t)
        }

        function ju(t) {
            return Nu(["⚡", "amp"], t)
        }
        var Uu = "Action",
            Lu = "__AMP_ACTION_MAP__" + Math.random(),
            zu = "__AMP_ACTION_QUEUE__",
            Hu = "__AMP_ACTION_HANDLER__",
            Gu = {
                "form": ["submit", "clear"]
            },
            Vu = [{
                tagOrTarget: "AMP",
                method: "setState"
            }, {
                tagOrTarget: "*",
                method: "focus"
            }, {
                tagOrTarget: "*",
                method: "hide"
            }, {
                tagOrTarget: "*",
                method: "show"
            }, {
                tagOrTarget: "*",
                method: "toggleClass"
            }, {
                tagOrTarget: "*",
                method: "toggleChecked"
            }, {
                tagOrTarget: "*",
                method: "toggleVisibility"
            }],
            Fu = {
                "button": !0,
                "checkbox": !0,
                "link": !0,
                "listbox": !0,
                "menuitem": !0,
                "menuitemcheckbox": !0,
                "menuitemradio": !0,
                "option": !0,
                "radio": !0,
                "scrollbar": !0,
                "slider": !0,
                "spinbutton": !0,
                "switch": !0,
                "tab": !0,
                "treeitem": !0
            },
            qu = function() {
                function t(t, i, n, r, e, s, u) {
                    var o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "?",
                        h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
                        a = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : Math.random();
                    this.node = t, this.method = i, this.args = n, this.source = r, this.caller = e, this.event = s, this.trust = u, this.actionEventType = o, this.tagOrTarget = h || t.tagName, this.sequenceId = a
                }
                return t.prototype.satisfiesTrust = function(t) {
                    if (!J(this.trust)) return Qt().error(Uu, "Invalid trust for '".concat(this.method, "': ").concat(this.trust)), !1;
                    if (this.trust < t) {
                        var i = function(t) {
                            switch (t) {
                                case 1:
                                    return "low";
                                case 3:
                                    return "high";
                                default:
                                    return et(2 === t), "default"
                            }
                        }(this.trust);
                        return Jt().error(Uu, '"'.concat(this.actionEventType, '" event with "').concat(i, '" trust is not allowed to ') + 'invoke "'.concat(this.tagOrTarget.toLowerCase(), ".").concat(this.method, '".')), !1
                    }
                    return !0
                }, t
            }(),
            Bu = function() {
                function t(t, i) {
                    this.ampdoc = t, this.Re = i || t.getRootNode(), this.Ne = this.ampdoc.isSingleDoc() && Du(this.Re), this.Ce = this.Ne ? Vu : null, this.De = A(), this.je = A(), this.addEvent("tap"), this.addEvent("submit"), this.addEvent("change"), this.addEvent("input-debounced"), this.addEvent("input-throttled"), this.addEvent("valid"), this.addEvent("invalid")
                }
                var i = t.prototype;
                return i.addEvent = function(t) {
                    var i = this;
                    if ("tap" == t) this.Re.addEventListener("click", (function(n) {
                        if (!n.defaultPrevented) {
                            var r = n.target;
                            i.trigger(r, t, n, 3)
                        }
                    })), this.Re.addEventListener("keydown", (function(n) {
                        var r = n.key,
                            e = n.target;
                        if ("Enter" == r || " " == r) {
                            var s = e.getAttribute("role"),
                                u = s && x(Fu, s.toLowerCase());
                            !n.defaultPrevented && u && i.trigger(e, t, n, 3) && n.preventDefault()
                        }
                    }));
                    else if ("submit" == t) this.Re.addEventListener(t, (function(n) {
                        var r = n.target;
                        i.trigger(r, t, n, 3)
                    }));
                    else if ("change" == t) this.Re.addEventListener(t, (function(n) {
                        var r = n.target;
                        i.ze(n), i.trigger(r, t, n, 3)
                    }));
                    else if ("input-debounced" == t) {
                        var n = mt(this.ampdoc.win, (function(n) {
                            var r = n.target;
                            i.trigger(r, t, n, 3)
                        }), 300);
                        this.Re.addEventListener("input", (function(t) {
                            var r = new Wu(t);
                            i.ze(r), n(r)
                        }))
                    } else if ("input-throttled" == t) {
                        var r = dt(this.ampdoc.win, (function(n) {
                            var r = n.target;
                            i.trigger(r, t, n, 3)
                        }), 100);
                        this.Re.addEventListener("input", (function(t) {
                            var n = new Wu(t);
                            i.ze(n), r(n)
                        }))
                    } else "valid" != t && "invalid" != t || this.Re.addEventListener(t, (function(n) {
                        var r = n.target;
                        i.trigger(r, t, n, 3)
                    }))
                }, i.addGlobalTarget = function(t, i) {
                    this.De[t] = i
                }, i.addGlobalMethodHandler = function(t, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    this.je[t] = {
                        handler: i,
                        minTrust: n
                    }
                }, i.trigger = function(t, i, n, r, e) {
                    return this.Ue(t, i, n, r, e)
                }, i.execute = function(t, i, n, r, e, s, u) {
                    var o = new qu(t, i, n, r, e, s, u);
                    this.Le(o)
                }, i.installActionHandler = function(t, i) {
                    if (Zt($u(t.getAttribute("id") || "") || t.tagName.toLowerCase() in Gu), t[Hu]) Qt().error(Uu, "Action handler already installed for ".concat(t));
                    else {
                        t[Hu] = i;
                        var n = t[zu];
                        V(n) && ar(oi(t)).delay((function() {
                            n.forEach((function(t) {
                                try {
                                    i(t)
                                } catch (i) {
                                    Qt().error(Uu, "Action execution failed:", t, i)
                                }
                            })), t[zu].length = 0
                        }), 1)
                    }
                }, i.hasAction = function(t, i, n) {
                    return !!this.He(t, i, n)
                }, i.hasResolvableAction = function(t, i, n) {
                    var r = this,
                        e = this.He(t, i, n);
                    return !!e && e.actionInfos.some((function(t) {
                        var i = t.target;
                        return !!r.Ge(i)
                    }))
                }, i.hasResolvableActionForTarget = function(t, i, n, r) {
                    var e = this,
                        s = this.He(t, i, r);
                    return !!s && s.actionInfos.some((function(t) {
                        var i = t.target;
                        return e.Ge(i) == n
                    }))
                }, i.Ge = function(t) {
                    return this.De[t] ? this.Re : this.Re.getElementById(t)
                }, i.setAllowlist = function(t) {
                    Zt(t.every((function(t) {
                        return t.tagOrTarget && t.method
                    }))), this.Ce = t
                }, i.addToAllowlist = function(t, i, n) {
                    var r = this;
                    n && n.includes("email") !== this.Ne || (this.Ce || (this.Ce = []), V(i) || (i = [i]), i.forEach((function(i) {
                        r.Ce.some((function(n) {
                            return n.tagOrTarget == t && n.method == i
                        })) || r.Ce.push({
                            tagOrTarget: t,
                            method: i
                        })
                    })))
                }, i.Ue = function(t, i, n, r, e) {
                    var s = this,
                        u = this.He(t, i);
                    if (!u) return !1;
                    var h = Math.random(),
                        a = null;
                    return u.actionInfos.forEach((function(c) {
                        var f = c.args,
                            l = c.method,
                            v = c.str,
                            d = c.target,
                            m = function(t, i, n) {
                                if (!t) return t;
                                var r = n || {};
                                if (i) {
                                    var e = function(t) {
                                        return t.detail
                                    }(i);
                                    e && (r.event = e)
                                }
                                var s = A();
                                return Object.keys(t).forEach((function(i) {
                                    var n = t[i];
                                    if ("object" == p(n) && n.expression) {
                                        var e = n.expression,
                                            u = function(t, i) {
                                                if ("." == i) return t;
                                                for (var n, r = t, e = o(i.split("."), !0); !(n = e()).done;) {
                                                    var s = n.value;
                                                    if (!(s && r && void 0 !== r[s] && "object" == p(r) && x(r, s))) {
                                                        r = void 0;
                                                        break
                                                    }
                                                    r = r[s]
                                                }
                                                return r
                                            }(r, e);
                                        n = void 0 === u ? null : u
                                    }
                                    r[n] ? s[i] = r[n] : s[i] = n
                                })), s
                            }(f, n, e),
                            g = function() {
                                var e = s.Ge(d);
                                if (e) {
                                    var o = new qu(e, l, m, t, u.node, n, r, i, e.tagName || d, h);
                                    return s.Le(o)
                                }
                                s.Ve('Target "'.concat(d, '" not found for action [').concat(v, "]."))
                            };
                        a = a ? a.then(g) : g()
                    })), u.actionInfos.length >= 1
                }, i.Ve = function(t, i) {
                    if (i) {
                        var n = Jt().createError("[".concat(Uu, "] ").concat(t));
                        throw Ds(n, i), n
                    }
                    Jt().error(Uu, t)
                }, i.Le = function(t) {
                    var i = t.method,
                        n = t.tagOrTarget;
                    if (this.Ce && ! function(t, i) {
                            var n = t.method,
                                r = t.node,
                                e = t.tagOrTarget;
                            n === ru && "function" == typeof r.getDefaultActionAlias && (n = r.getDefaultActionAlias());
                            var s = n.toLowerCase(),
                                u = e.toLowerCase();
                            return i.some((function(t) {
                                return (t.tagOrTarget.toLowerCase() === u || "*" === t.tagOrTarget) && t.method.toLowerCase() === s
                            }))
                        }(t, this.Ce)) return this.Ve('"'.concat(n, ".").concat(i, '" is not allowlisted ').concat(JSON.stringify(this.Ce), ".")), null;
                    var r = this.De[n];
                    if (r) return r(t);
                    var e = t.node,
                        s = this.je[i];
                    if (s && t.satisfiesTrust(s.minTrust)) return s.handler(t);
                    var u = e.tagName.toLowerCase();
                    if ($u(u)) return e.enqueAction ? e.enqueAction(t) : this.Ve('Unrecognized AMP element "'.concat(u, '".'), e), null;
                    var o = Gu[u];
                    if ($u(e.getAttribute("id") || "") || o && o.indexOf(i) > -1) {
                        var h = e[Hu];
                        return h ? h(t) : (e[zu] = e[zu] || [], e[zu].push(t)), null
                    }
                    return this.Ve("Target (".concat(n, ") doesn't support \"").concat(i, '" action.'), t.caller), null
                }, i.He = function(t, i, n) {
                    for (var r, e = t; e;) {
                        if (n && e == n) return null;
                        var s = this.Fe(e, i);
                        if (s && !(r = e).disabled && !gi(r, ":disabled")) return {
                            node: e,
                            actionInfos: Zt(s)
                        };
                        e = e.parentElement
                    }
                    return null
                }, i.Fe = function(t, i) {
                    var n = this.Be(t, i);
                    return n && n[i] || null
                }, i.Be = function(t, i) {
                    var n = t[Lu];
                    if (void 0 === n)
                        if (n = null, t.hasAttribute("on")) n = Ku(t.getAttribute("on"), t), t[Lu] = n;
                        else if (t.hasAttribute("execute")) {
                        var r = t.getAttribute("execute");
                        n = Ku("".concat(i, ":").concat(r), t), t[Lu] = n
                    }
                    return n
                }, i.setActions = function(t, i) {
                    t.setAttribute("on", i), delete t[Lu]
                }, i.ze = function(t) {
                    var i = A(),
                        n = t.target;
                    if (void 0 !== n.value && (i.value = n.value), "INPUT" == n.tagName && (i.valueAsNumber = Number(n.value)), void 0 !== n.checked && (i.checked = n.checked), void 0 === n.min && void 0 === n.max || (i.min = n.min, i.max = n.max), n.files && (i.files = G(n.files).map((function(t) {
                            return {
                                "name": t.name,
                                "size": t.size,
                                "type": t.type
                            }
                        }))), Object.keys(i).length > 0) try {
                        t.detail = i
                    } catch (t) {}
                }, t
            }();

        function $u(t) {
            return "amp-" === t.substring(0, 4)
        }
        var Wu = function(t) {
            this.detail = null,
                function(t, i) {
                    var n = i || A();
                    for (var r in t) {
                        var e = t[r];
                        n[r] = "function" == typeof e ? Yu : t[r]
                    }
                }(t, this)
        };

        function Yu() {
            Zt(null)
        }

        function Ku(t, i) {
            var n, r, e = Xu.bind(null, t, i),
                s = Qu.bind(null, t, i),
                u = null,
                o = new io(t);
            do {
                if ((n = o.next()).type == Zu.EOF || n.type == Zu.SEPARATOR && ";" == n.value);
                else if (n.type == Zu.LITERAL || n.type == Zu.ID) {
                    var h = n.value;
                    s(o.next(), [Zu.SEPARATOR], ":");
                    var a = [];
                    do {
                        var c = s(o.next(), [Zu.LITERAL, Zu.ID]).value,
                            f = ru,
                            l = null;
                        (r = o.peek()).type == Zu.SEPARATOR && "." == r.value && (o.next(), f = s(o.next(), [Zu.LITERAL, Zu.ID]).value || f, (r = o.peek()).type == Zu.SEPARATOR && "(" == r.value && (o.next(), l = Ju(o, s, e))), a.push({
                            event: h,
                            target: c,
                            method: f,
                            args: l,
                            str: t
                        }), r = o.peek()
                    } while (r.type == Zu.SEPARATOR && "," == r.value && o.next());
                    u || (u = A()), u[h] = a
                } else e(!1, "; unexpected token [".concat(n.value || "", "]"))
            } while (n.type != Zu.EOF);
            return u
        }

        function Ju(t, i, n) {
            var r, e, s = t.peek(),
                u = null;
            if (s.type == Zu.OBJECT) {
                u = A();
                var o = t.next().value;
                u.__AMP_OBJECT_STRING__ = o, i(t.next(), [Zu.SEPARATOR], ")")
            } else
                do {
                    var h = r = t.next(),
                        a = h.type,
                        c = h.value;
                    if (a != Zu.SEPARATOR || "," != c && ")" != c)
                        if (a == Zu.LITERAL || a == Zu.ID) {
                            i(t.next(), [Zu.SEPARATOR], "=");
                            var f = [r = i(t.next(!0), [Zu.LITERAL, Zu.ID])];
                            if (r.type == Zu.ID)
                                for (s = t.peek(); s.type == Zu.SEPARATOR && "." == s.value; s = t.peek()) t.next(), r = i(t.next(!1), [Zu.ID]), f.push(r);
                            var l = 0 == (e = f).length ? null : 1 == e.length ? e[0].value : {
                                expression: e.map((function(t) {
                                    return t.value
                                })).join(".")
                            };
                            u || (u = A()), u[c] = l, n((s = t.peek()).type == Zu.SEPARATOR && ("," == s.value || ")" == s.value), "Expected either [,] or [)]")
                        } else n(!1, "; unexpected token [".concat(r.value || "", "]"))
                } while (r.type != Zu.SEPARATOR || ")" != r.value);
            return u
        }

        function Xu(t, i, n, r) {
            return ti(n, "Invalid action definition in %s: [%s] %s", i, t, r || "")
        }

        function Qu(t, i, n, r, e) {
            return void 0 !== e ? Xu(t, i, r.includes(n.type) && n.value == e, "; expected [".concat(e, "]")) : Xu(t, i, r.includes(n.type)), n
        }
        var Zu = {
                INVALID: 0,
                EOF: 1,
                SEPARATOR: 2,
                LITERAL: 3,
                ID: 4,
                OBJECT: 5
            },
            to = " \t\n\r\f\v \u2028\u2029",
            io = function() {
                function t(t) {
                    this.qe = t, this.We = -1
                }
                var i = t.prototype;
                return i.next = function(t) {
                    var i = this.$e(t || !1);
                    return this.We = i.index, i
                }, i.peek = function(t) {
                    return this.$e(t || !1)
                }, i.$e = function(t) {
                    var i = this.We + 1;
                    if (i >= this.qe.length) return {
                        type: Zu.EOF,
                        index: this.We
                    };
                    var n = this.qe.charAt(i);
                    if (-1 != to.indexOf(n)) {
                        for (i++; i < this.qe.length && -1 != to.indexOf(this.qe.charAt(i)); i++);
                        if (i >= this.qe.length) return {
                            type: Zu.EOF,
                            index: i
                        };
                        n = this.qe.charAt(i)
                    }
                    if (t && (no(n) || "." == n && i + 1 < this.qe.length && no(this.qe[i + 1]))) {
                        for (var r = "." == n, e = i + 1; e < this.qe.length; e++) {
                            var s = this.qe.charAt(e);
                            if ("." != s) {
                                if (!no(s)) break
                            } else r = !0
                        }
                        var u = this.qe.substring(i, e),
                            o = r ? parseFloat(u) : parseInt(u, 10);
                        return i = e - 1, {
                            type: Zu.LITERAL,
                            value: o,
                            index: i
                        }
                    }
                    if (-1 != ";:.()=,|!".indexOf(n)) return {
                        type: Zu.SEPARATOR,
                        value: n,
                        index: i
                    };
                    if (-1 != "\"'".indexOf(n)) {
                        for (var h = -1, a = i + 1; a < this.qe.length; a++)
                            if (this.qe.charAt(a) == n) {
                                h = a;
                                break
                            }
                        if (-1 == h) return {
                            type: Zu.INVALID,
                            index: i
                        };
                        var c = this.qe.substring(i + 1, h);
                        return i = h, {
                            type: Zu.LITERAL,
                            value: c,
                            index: i
                        }
                    }
                    if ("{" == n) {
                        for (var f = 1, l = -1, v = i + 1; v < this.qe.length; v++) {
                            var d = this.qe[v];
                            if ("{" == d ? f++ : "}" == d && f--, f <= 0) {
                                l = v;
                                break
                            }
                        }
                        if (-1 == l) return {
                            type: Zu.INVALID,
                            index: i
                        };
                        var m = this.qe.substring(i, l + 1);
                        return i = l, {
                            type: Zu.OBJECT,
                            value: m,
                            index: i
                        }
                    }
                    for (var p = i + 1; p < this.qe.length && -1 == " \t\n\r\f\v \u2028\u2029;:.()=,|!\"'{}".indexOf(this.qe.charAt(p)); p++);
                    var g = this.qe.substring(i, p);
                    if (i = p - 1, t && ("true" == g || "false" == g)) {
                        var b = "true" == g;
                        return {
                            type: Zu.LITERAL,
                            value: b,
                            index: i
                        }
                    }
                    return no(g.charAt(0)) ? {
                        type: Zu.LITERAL,
                        value: g,
                        index: i
                    } : {
                        type: Zu.ID,
                        value: g,
                        index: i
                    }
                }, t
            }();

        function no(t) {
            return t >= "0" && t <= "9"
        }

        function ro(t) {
            return !!t && "function" == typeof t.getFormData
        }
        var eo = ["GET", "POST"],
            so = [V, w];

        function uo(t, i) {
            var n = D({}, i);
            if (ro(i.body)) {
                var r = i.body;
                n.headers["Content-Type"] = "multipart/form-data;charset=utf-8", n.body = function(t) {
                    for (var i = [], n = t.next(); !n.done; n = t.next()) i.push(n.value);
                    return i
                }(r.entries())
            }
            return {
                input: t,
                init: n
            }
        }

        function oo(t, i, n, r) {
            if (!i) return h();
            var e = r.prerenderSafe ? h() : i.whenFirstVisible(),
                s = vr(i),
                u = xs(n),
                o = s.hasCapability("xhrInterceptor"),
                a = r.bypassInterceptorForDev && !1;
            return u || !o || a ? e : i.getRootNode().documentElement.hasAttribute("allow-xhr-interception") ? e.then((function() {
                return s.isTrustedViewer()
            })).then((function(i) {
                if (i || Ge(t, "untrusted-xhr-interception")) {
                    var e = {
                        "originalRequest": uo(n, r)
                    };
                    return s.sendMessageAwaitResponse("xhr", e).then((function(t) {
                        return function(t, i) {
                            if (ht(w(t), "Object expected: %s", t), "document" != i) return new Response(t.body, t.init);
                            var n = A(),
                                r = {
                                    status: 200,
                                    statusText: "OK",
                                    getResponseHeader: function(t) {
                                        return n[String(t).toLowerCase()] || null
                                    }
                                };
                            if (t.init) {
                                var e = t.init;
                                V(e.headers) && e.headers.forEach((function(t) {
                                    var i = t[0],
                                        r = t[1];
                                    n[String(i).toLowerCase()] = String(r)
                                })), e.status && (r.status = parseInt(e.status, 10)), e.statusText && (r.statusText = String(e.statusText))
                            }
                            return new Response(t.body ? String(t.body) : "", r)
                        }(t, r.responseType)
                    }))
                }
            })) : e
        }

        function ho(t, i, n) {
            return et("string" == typeof i), !1 !== n.ampCors && (i = Ss(t, i)), i
        }

        function ao(t, i) {
            var n, r = t || {},
                e = r.credentials;
            return et(void 0 === e || "include" == e || "omit" == e), r.method = void 0 === (n = r.method) ? "GET" : (n = n.toUpperCase(), et(eo.includes(n)), n), r.headers = r.headers || {}, i && (r.headers.Accept = i), et(null !== r.body), r
        }

        function co(t, i, n) {
            n = n || {};
            var r = function(t) {
                return t.origin || vs(t.location.href).origin
            }(t);
            return r == vs(i).origin && (n.headers = n.headers || {}, n.headers["AMP-Same-Origin"] = "true"), n
        }

        function fo(t) {
            return new Promise((function(i) {
                if (t.ok) return i(t);
                var n = t.status,
                    r = Jt().createError("HTTP error ".concat(n));
                throw r.retriable = function(t) {
                    return 415 == t || t >= 500 && t < 600
                }(n), r.response = t, r
            }))
        }
        var lo = function() {
                function t(t) {
                    this.win = t;
                    var i = Yn(t);
                    this.Ke = i.isSingleDoc() ? i.getSingleDoc() : null
                }
                var i = t.prototype;
                return i.Ye = function(t, i) {
                    var n = arguments,
                        r = this;
                    return oo(this.win, this.Ke, t, i).then((function(t) {
                        if (t) return t;
                        if (ro(i.body)) {
                            var e = i.body;
                            i.body = e.getFormData()
                        }
                        return r.win.fetch.apply(null, n)
                    }))
                }, i.Je = function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return t = ho(this.win, t, i), i = co(this.win, t, i), this.Ye(t, i).then((function(t) {
                        return t
                    }), (function(i) {
                        var n = vs(t).origin;
                        throw Jt().createExpectedError("XHR", "Failed fetching (".concat(n, "/...):"), i && i.message)
                    }))
                }, i.fetchJson = function(t, i) {
                    return this.fetch(t, function(t) {
                        var i = ao(t, "application/json");
                        if ("POST" == i.method && !ro(i.body)) {
                            et(so.some((function(t) {
                                return t(i.body)
                            }))), i.headers["Content-Type"] = i.headers["Content-Type"] || "text/plain;charset=utf-8";
                            var n = i.headers["Content-Type"];
                            i.body = "application/x-www-form-urlencoded" === n ? bs(i.body) : JSON.stringify(i.body)
                        }
                        return i
                    }(i))
                }, i.fetchText = function(t, i) {
                    return this.fetch(t, ao(i, "text/plain"))
                }, i.xssiJson = function(t, i) {
                    return i ? t.text().then((function(t) {
                        return t.startsWith(i) ? at(t.slice(i.length)) : (Jt().warn("XHR", 'Failed to strip missing prefix "'.concat(i, '" in fetch response.')), at(t))
                    })) : t.json()
                }, i.fetch = function(t, i) {
                    var n = ao(i);
                    return this.Je(t, n).then((function(t) {
                        return fo(t)
                    }))
                }, i.sendSignal = function(t, i) {
                    return this.Je(t, i).then((function(t) {
                        return fo(t)
                    }))
                }, i.getCorsUrl = function(t, i) {
                    return Ss(t, i)
                }, t
            }(),
            vo = function(t) {
                U(n, t);
                var i = H(n);

                function n(t) {
                    var n;
                    return (n = i.call(this, t)).Xe = A(), n
                }
                var r = n.prototype;
                return r.fetch = function(i, n) {
                    var r = this,
                        e = n && n.headers && n.headers.Accept || "",
                        s = !n || !n.method || "GET" === n.method,
                        u = this.Qe(i, e),
                        o = !!this.Xe[u];
                    if (s && o) return this.Xe[u].then((function(t) {
                        return t.clone()
                    }));
                    var h = t.prototype.fetch.call(this, i, n);
                    return s && (this.Xe[u] = h.then((function(t) {
                        return delete r.Xe[u], t.clone()
                    }), (function(t) {
                        throw delete r.Xe[u], t
                    }))), h
                }, r.Qe = function(t, i) {
                    return As(Ts(t, Ms(this.win.location))) + i
                }, n
            }(lo),
            mo = {
                "+": "-",
                "/": "_",
                "=": "."
            };

        function po(t) {
            var i = function(t) {
                for (var i = new Array(t.length), n = 0; n < t.length; n++) i[n] = String.fromCharCode(t[n]);
                return i.join("")
            }(t);
            return btoa(i).replace(/[+/=]/g, (function(t) {
                return mo[t]
            }))
        }
        var go = "AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc",
            bo = "CacheCidApi",
            yo = function() {
                function t(t) {
                    this.Ii = t, this.Ze = vr(this.Ii), this.ts = null, this.Pe = ar(this.Ii.win)
                }
                var i = t.prototype;
                return i.isSupported = function() {
                    return this.Ze.isCctEmbedded() && this.Ze.isProxyOrigin()
                }, i.getScopedCid = function(t) {
                    var i = this;
                    return this.Ze.isCctEmbedded() ? (this.ts || (this.ts = this.ns("https://ampcid.google.com/v1/cache:getClientId?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc")), this.ts.then((function(n) {
                        return n ? i.rs(n, t) : null
                    }))) : Promise.resolve(null)
                }, i.ns = function(t) {
                    var i = this,
                        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = {
                            "publisherOrigin": Ms(this.Ii.win.location)
                        },
                        e = "fetchCidTimeout";
                    return this.Pe.timeoutPromise(3e4, pr(this.Ii.win).fetchJson(t, {
                        method: "POST",
                        ampCors: !1,
                        credentials: "include",
                        mode: "cors",
                        body: r
                    }), e).then((function(t) {
                        return t.json().then((function(t) {
                            if (t.optOut) return null;
                            var r = t.publisherClientId;
                            if (!r && n && t.alternateUrl) {
                                var e = "".concat(t.alternateUrl, "?key=").concat(go);
                                return i.ns(e, !1)
                            }
                            return r
                        }))
                    })).catch((function(t) {
                        return t && t.response ? t.response.json().then((function(t) {
                            Qt().error(bo, JSON.stringify(t))
                        })) : t && t.message == e ? Qt().expectedError(bo, t) : Qt().error(bo, t), null
                    }))
                }, i.rs = function(t, i) {
                    var n = t + ";" + i;
                    return Qn(this.Ii.win).sha384Base64(n).then((function(t) {
                        return "amp-" + t
                    }))
                }, t
            }(),
            wo = "-test-amp-cookie-tmp";

        function Ao(t, i) {
            var n = function(t) {
                try {
                    return t.document.cookie
                } catch (t) {
                    return ""
                }
            }(t);
            if (!n) return null;
            for (var r = n.split(";"), e = 0; e < r.length; e++) {
                var s = r[e].trim(),
                    u = s.indexOf("=");
                if (-1 != u && bt(s.substring(0, u).trim()) == i) {
                    var o = s.substring(u + 1).trim();
                    return bt(o, o)
                }
            }
            return null
        }

        function xo(t, i, n, r) {
            var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            Oo(t, e, i);
            var s = void 0;
            e.domain ? s = e.domain : e.highestAvailableDomain && (s = Eo(t)), Po(t, i, n, r, s, e.sameSite, e.secure)
        }

        function Eo(t) {
            var i = t.document.head && t.document.head.querySelector("meta[name='amp-cookie-scope']");
            if (i) {
                var n = i.getAttribute("content") || "",
                    r = Ms(t.location.href);
                return W(r, "." + n) ? n : r.split("://")[1]
            }
            if (!xs(t.location.href))
                for (var e = t.location.hostname.split("."), s = e[e.length - 1], u = function(t) {
                        for (var i = wo; Ao(t, i);) i = wo + 0;
                        return i
                    }(t), o = e.length - 2; o >= 0; o--)
                    if (s = e[o] + "." + s, Po(t, u, "delete", Date.now() + 1e3, s), "delete" == Ao(t, u)) return Po(t, u, "delete", Date.now() - 1e3, s), s;
            return null
        }

        function Po(t, i, n, r, e, s, u) {
            "ampproject.org" == e && (n = "delete", r = 0);
            var o = encodeURIComponent(i) + "=" + encodeURIComponent(n) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + new Date(r).toUTCString() + function(t, i) {
                return i ? "; SameSite=".concat(i) : ""
            }(0, s) + (u ? "; Secure" : "");
            try {
                t.document.cookie = o
            } catch (t) {}
        }

        function Oo(t, i, n) {
            if (i.allowOnProxyOrigin) ti(!i.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
            else {
                ti(!xs(t.location.href), "Should never attempt to set cookie on proxy origin: ".concat(n));
                var r = vs(t.location.href).hostname.toLowerCase(),
                    e = vs(Mt).hostname.toLowerCase();
                ti(!(r == e || W(r, "." + e)), "Should never attempt to set cookie on proxy origin. (in depth check): " + n)
            }
        }
        var Io = "GoogleCidApi",
            Mo = "AMP_TOKEN",
            To = "$RETRIEVING",
            So = "$OPT_OUT",
            Ro = "$NOT_FOUND",
            _o = 3e4,
            ko = 31536e6,
            Co = function() {
                function t(t) {
                    this.t = t.win, this.Pe = ar(this.t), this.es = {};
                    var i = Zn(t).canonicalUrl;
                    this.ss = i ? vs(i).origin : null
                }
                var i = t.prototype;
                return i.getScopedCid = function(t, i) {
                    var n, r = this;
                    return this.es[i] ? this.es[i] : this.es[i] = this.Pe.poll(200, (function() {
                        return (n = Ao(r.t, Mo)) !== To
                    })).then((function() {
                        if (n === So) return So;
                        if ((n !== Ro || !r.os()) && r.us(n)) return null;
                        n && !r.us(n) || r.hs(To, _o);
                        var e = "https://ampcid.google.com/v1/publisher:getClientId?key=" + t;
                        return r.ns(e, i, n).then((function(e) {
                            var s = r.R(e);
                            if (!s && e.alternateUrl) {
                                var u = "".concat(e.alternateUrl, "?key=").concat(t);
                                return r.ns(u, i, n).then(r.R.bind(r))
                            }
                            return s
                        })).catch((function(t) {
                            return r.hs("$ERROR", _o), t && t.response ? t.response.json().then((function(t) {
                                Qt().error(Io, JSON.stringify(t))
                            })) : Qt().error(Io, t), null
                        }))
                    }))
                }, i.ns = function(t, i, n) {
                    var r = {
                        "originScope": i,
                        "canonicalOrigin": this.ss
                    };
                    return n && (r.securityToken = n), this.Pe.timeoutPromise(_o, pr(this.t).fetchJson(t, {
                        method: "POST",
                        ampCors: !1,
                        credentials: "include",
                        mode: "cors",
                        body: r
                    }).then((function(t) {
                        return t.json()
                    })))
                }, i.R = function(t) {
                    return t.optOut ? (this.hs(So, ko), So) : t.clientId ? (this.hs(t.securityToken, ko), t.clientId) : (t.alternateUrl || this.hs(Ro, 36e5), null)
                }, i.hs = function(t, i) {
                    t && xo(this.t, Mo, t, this.cs(i), {
                        highestAvailableDomain: !0
                    })
                }, i.cs = function(t) {
                    return this.t.Date.now() + t
                }, i.os = function() {
                    return xs(zr.getDocumentReferrer(this.t))
                }, i.us = function(t) {
                    return t && "$" === t[0]
                }, t
            }(),
            No = function() {
                function t(t) {
                    this.Ii = t, this.Ze = vr(this.Ii);
                    var i = Zn(this.Ii).canonicalUrl;
                    this.ss = i ? vs(i).origin : null
                }
                var i = t.prototype;
                return i.isSupported = function() {
                    return this.Ze.hasCapability("cid") ? this.Ze.isTrustedViewer() : Promise.resolve(!1)
                }, i.getScopedCid = function(t, i) {
                    var n = {
                        "scope": i,
                        "clientIdApi": !!t,
                        "canonicalOrigin": this.ss
                    };
                    return t && (n.apiKey = t), this.Ze.sendMessageAwaitResponse("cid", n)
                }, t
            }(),
            Do = 31536e6,
            jo = /^[a-zA-Z0-9-_.]+$/,
            Uo = "amp-cid-optout",
            Lo = "amp-google-client-id-api",
            zo = {
                "googleanalytics": "AMP_ECID_GOOGLE"
            },
            Ho = {
                "googleanalytics": "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM"
            },
            Go = function() {
                function t(t) {
                    this.ampdoc = t, this.fs = null, this.ls = Object.create(null), this.vs = new yo(t), this.ds = new No(t), this.ps = new Co(t), this.bs = null
                }
                var i = t.prototype;
                return i.get = function(t, i, n) {
                    var r = this;
                    return ti(jo.test(t.scope) && jo.test(t.cookieName), "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s", t.scope), i.then((function() {
                        return r.ampdoc.whenFirstVisible()
                    })).then((function() {
                        return t = r.ampdoc, hr(t).then((function(t) {
                            return t.get(Uo).then((function(t) {
                                return !!t
                            }))
                        })).catch((function() {
                            return !1
                        }));
                        var t
                    })).then((function(e) {
                        if (e) return "";
                        var s = r.gs(t, n || i);
                        return ar(r.ampdoc.win).timeoutPromise(1e4, s, 'Getting cid for "'.concat(t.scope, '" timed out')).catch((function(t) {
                            d(t)
                        }))
                    }))
                }, i.optOut = function() {
                    return t = this.ampdoc, vr(t).sendMessage("cidOptOut", {}), hr(t).then((function(t) {
                        return t.set(Uo, !0)
                    }));
                    var t
                }, i.gs = function(t, i) {
                    var n = this,
                        r = t.scope,
                        e = vs(this.ampdoc.win.location.href);
                    if (!xs(e)) {
                        var s = this.ys(r);
                        return s ? this.ps.getScopedCid(s, r).then((function(e) {
                            if (e == So) return null;
                            if (e) {
                                var s = t.cookieName || r;
                                return Vo(n.ampdoc.win, s, e), e
                            }
                            return Bo(n, t, i)
                        })) : Bo(this, t, i)
                    }
                    return this.ds.isSupported().then((function(t) {
                        if (t) {
                            var s = n.ys(r);
                            return n.ds.getScopedCid(s, r)
                        }
                        return n.vs.isSupported() && n.ys(r) ? n.vs.getScopedCid(r).then((function(t) {
                            return t || n.ws(i, r, e)
                        })) : n.ws(i, r, e)
                    }))
                }, i.ws = function(t, i, n) {
                    var r = this;
                    return function(t, i) {
                        if (t.fs) return t.fs;
                        var n = t.ampdoc.win;
                        return t.fs = function(t) {
                            var i, n = t.win;
                            try {
                                i = n.localStorage.getItem("amp-cid")
                            } catch (t) {}
                            var r = Promise.resolve(i);
                            return !i && Ni(n) && (r = $o(t)), r.then((function(t) {
                                if (!t) return null;
                                var i = at(t);
                                return {
                                    time: i.time,
                                    cid: i.cid
                                }
                            }))
                        }(t.ampdoc).then((function(r) {
                            var e, s, u, o = !1;
                            return !r || (s = r.time, u = Date.now(), s + Do < u) ? (e = Qn(n).sha384Base64(Yo(n)), o = !0) : (e = Promise.resolve(r.cid), r.time + 864e5 < Date.now() && (o = !0)), o && e.then((function(n) {
                                ! function(t, i, n) {
                                    var r = t.win;
                                    Ni(r) ? $o(t, Wo(n)) : i.then((function() {
                                        try {
                                            r.localStorage.setItem("amp-cid", Wo(n))
                                        } catch (t) {}
                                    }))
                                }(t.ampdoc, i, n)
                            })), e
                        }))
                    }(this, t).then((function(t) {
                        return Qn(r.ampdoc.win).sha384Base64(t + function(t) {
                            return ti(xs(t), "Expected proxy origin %s", t.origin), Ms(t)
                        }(n) + i)
                    }))
                }, i.ys = function(t) {
                    return this.bs || (this.bs = this.As()), this.bs[t]
                }, i.As = function() {
                    var t = {},
                        i = this.ampdoc.getMetaByName(Lo);
                    return i && i.split(",").forEach((function(i) {
                        if ((i = i.trim()).indexOf("=") > 0) {
                            var n = i.split("="),
                                r = n[0].trim();
                            t[r] = n[1].trim()
                        } else {
                            var e = i,
                                s = zo[e];
                            s ? t[s] = Ho[e] : Jt().warn("CID", "Unsupported client for Google CID API: ".concat(e, ".") + 'Please remove or correct meta[name="'.concat(Lo, '"]'))
                        }
                    })), t
                }, t
            }();

        function Vo(t, i, n) {
            xo(t, i, n, Date.now() + Do, {
                highestAvailableDomain: !0
            })
        }

        function Fo(t, i, n) {
            hr(t).then((function(t) {
                if (!t.isViewerStorage()) {
                    var r = qo(i);
                    t.setNonBoolean(r, n)
                }
            }))
        }

        function qo(t) {
            return "amp-cid:" + t
        }

        function Bo(t, i, n) {
            var r = t.ampdoc,
                e = r.win,
                s = i.disableBackup,
                u = i.scope,
                o = i.cookieName || u;
            return function(t, i) {
                var n = t.ampdoc,
                    r = n.win,
                    e = i.disableBackup,
                    s = i.scope,
                    u = i.cookieName || s,
                    o = Ao(r, u);
                return o ? Promise.resolve(o) : e ? Promise.resolve(null) : hr(n).then((function(t) {
                    var i = qo(u);
                    return t.get(i, Do)
                })).then((function(t) {
                    return t && "string" == typeof t ? t : null
                }))
            }(t, i).then((function(h) {
                if (!h && !i.createCookieIfNotPresent) return Promise.resolve(null);
                if (h) return /^amp-/.test(h) && (Vo(e, o, h), s || Fo(r, o, h)), Promise.resolve(h);
                if (t.ls[u]) return t.ls[u];
                var a = Ko(e).then((function(t) {
                    return "amp-" + t
                }));
                return Promise.all([a, n]).then((function(t) {
                    var i = t[0];
                    Ao(e, o) || (Vo(e, o, i), s || Fo(r, o, i))
                })), t.ls[u] = a
            }))
        }

        function $o(t, i) {
            var n = vr(t);
            return n.isTrustedViewer().then((function(t) {
                if (t) return Qt().expectedError("CID", "Viewer does not provide cap=cid"), n.sendMessageAwaitResponse("cid", i).then((function(t) {
                    return t && ! function(t, i) {
                        try {
                            return at(t)
                        } catch (t) {
                            return null
                        }
                    }(t) ? (Qt().expectedError("CID", "invalid cid format"), JSON.stringify({
                        "time": Date.now(),
                        "cid": t
                    })) : t
                }))
            }))
        }

        function Wo(t) {
            return JSON.stringify({
                "time": Date.now(),
                "cid": t
            })
        }

        function Yo(t) {
            return lt(t, 16) || String(t.location.href + Date.now() + t.Math.random() + t.screen.width + t.screen.height)
        }

        function Ko(t) {
            var i = Yo(t);
            if ("string" == typeof i) return Qn(t).sha384Base64(i);
            var n = i;
            return c((function() {
                return po(n).replace(/\.+$/, "")
            }))
        }
        var Jo = "Crypto",
            Xo = function() {
                function t(t) {
                    this.t = t;
                    var i = null,
                        n = !1;
                    t.crypto && (t.crypto.subtle ? i = t.crypto.subtle : t.crypto.webkitSubtle && (i = t.crypto.webkitSubtle, n = !0)), this.pkcsAlgo = {
                        name: "RSASSA-PKCS1-v1_5",
                        hash: {
                            name: "SHA-256"
                        }
                    }, this.subtle = i, this.xs = n, this.Es = null
                }
                var i = t.prototype;
                return i.sha384 = function(t) {
                    var i = this;
                    if ("string" == typeof t && (t = ft(t)), !this.subtle || this.Es) return (this.Es || this.Os()).then((function(i) {
                        return i(t)
                    }));
                    try {
                        return this.subtle.digest({
                            name: "SHA-384"
                        }, t).then((function(t) {
                            return new Uint8Array(t)
                        }), (function(n) {
                            return n.message && n.message.indexOf("secure origin") < 0 && Jt().error(Jo, "SubtleCrypto failed, fallback to closure lib.", n), i.Os().then((function() {
                                return i.sha384(t)
                            }))
                        }))
                    } catch (n) {
                        return Qt().error(Jo, "SubtleCrypto failed, fallback to closure lib.", n), this.Os().then((function() {
                            return i.sha384(t)
                        }))
                    }
                }, i.sha384Base64 = function(t) {
                    return this.sha384(t).then((function(t) {
                        return po(t)
                    }))
                }, i.uniform = function(t) {
                    return this.sha384(t).then((function(t) {
                        for (var i = 0, n = 2; n >= 0; n--) i = (i + t[n]) / 256;
                        return i
                    }))
                }, i.Os = function() {
                    var t = this;
                    return this.Es ? this.Es : this.Es = tr(this.t).preloadExtension("amp-crypto-polyfill").then((function() {
                        return En(t.t, "crypto-polyfill")
                    }))
                }, i.isPkcsAvailable = function() {
                    return Boolean(this.subtle) && !1 !== this.t.isSecureContext
                }, i.importPkcsKey = function(t) {
                    Zt(this.isPkcsAvailable());
                    var i = this.xs ? ct(JSON.stringify(t)) : t;
                    return this.subtle.importKey("jwk", i, this.pkcsAlgo, !0, ["verify"])
                }, i.verifyPkcs = function(t, i, n) {
                    return Zt(this.isPkcsAvailable()), this.subtle.verify(this.pkcsAlgo, t, i, n)
                }, t
            }(),
            Qo = ["prefetch", "preload", "preconnect", "dns-prefetch"],
            Zo = function() {
                function t(t) {
                    this.Ii = t, this.Ps = null, this.Ts = null
                }
                return t.prototype.get = function() {
                    if (this.Ps) return this.Ps;
                    var t = this.Ii,
                        i = Is(t.getUrl()),
                        n = t.getRootNode(),
                        r = n && n.AMP && n.AMP.canonicalUrl;
                    if (!r) {
                        var e = n.querySelector("link[rel=canonical]");
                        r = e ? vs(e.href).href : i
                    }
                    var s, u = function(t) {
                            return String(Math.floor(1e4 * t.Math.random()))
                        }(t.win),
                        o = function(t) {
                            var i = A();
                            if (t.head)
                                for (var n = t.head.querySelectorAll("link[rel]"), r = function(t) {
                                        var r = n[t],
                                            e = r.href,
                                            s = r.getAttribute("rel");
                                        if (!s || !e) return "continue";
                                        s.split(/\s+/).forEach((function(t) {
                                            if (-1 == Qo.indexOf(t)) {
                                                var n = i[t];
                                                n ? (V(n) || (n = i[t] = [n]), n.push(e)) : i[t] = e
                                            }
                                        }))
                                    }, e = 0; e < n.length; e++) r(e);
                            return i
                        }(t.win.document),
                        h = (s = t.win.document.head.querySelector('meta[name="viewport"]')) ? s.getAttribute("content") : null,
                        a = function(t) {
                            if (!t.isSingleDoc() || "a" != (i = t.win.location.href, xs(i = ls(i)) ? i.pathname.split("/", 2)[1] : null)) return null;
                            var i, n = yt(vs(t.win.location.href).search).amp_r;
                            return void 0 === n ? null : yt(n)
                        }(t);
                    return this.Ps = {
                        get sourceUrl() {
                            return Is(t.getUrl())
                        },
                        canonicalUrl: r,
                        pageViewId: u,
                        get pageViewId64() {
                            return this.Ts || (this.Ts = Ko(t.win)), this.Ts
                        },
                        linkRels: o,
                        viewport: h,
                        replaceParams: a
                    }
                }, t
            }(),
            th = {
                attributes: !0,
                attributeFilter: ["hidden"],
                subtree: !0
            },
            ih = function() {
                function t(t) {
                    this.Re = t.getRootNode();
                    var i = this.Re.ownerDocument || this.Re;
                    this.t = Zt(i.defaultView), this.ln = null, this.Is = null
                }
                var i = t.prototype;
                return i.add = function(t) {
                    var i = this;
                    this.Ms();
                    var n = this.Is.add(t);
                    return function() {
                        n(), 0 === i.Is.getHandlerCount() && i.dispose()
                    }
                }, i.Ms = function() {
                    var t = this;
                    if (!this.ln) {
                        this.Is = new Er;
                        var i = new this.t.MutationObserver((function(i) {
                            i && t.Is.fire(i)
                        }));
                        this.ln = i, i.observe(this.Re, th)
                    }
                }, i.dispose = function() {
                    this.ln && (this.ln.disconnect(), this.Is.removeAll(), this.ln = null, this.Is = null)
                }, t
            }();

        function nh(t) {
            try {
                return t.state
            } catch (t) {
                return null
            }
        }
        var rh = "History",
            eh = "AMP.History",
            sh = function() {
                function t(t, i) {
                    this.Ii = t, this.Pe = ar(t.win), this.Ss = i, this.ks = 0, this._s = [], this.Hi = [], this.Ss.setOnStateUpdated(this.Rs.bind(this))
                }
                var i = t.prototype;
                return i.cleanup = function() {
                    this.Ss.cleanup()
                }, i.push = function(t, i) {
                    var n = this;
                    return this.Ns((function() {
                        return n.Ss.push(i).then((function(i) {
                            return n.Rs(i), t && (n._s[i.stackIndex] = t), i.stackIndex
                        }))
                    }), "push")
                }, i.pop = function(t) {
                    var i = this;
                    return this.Ns((function() {
                        return i.Ss.pop(t).then((function(t) {
                            i.Rs(t)
                        }))
                    }), "pop")
                }, i.replace = function(t) {
                    var i = this;
                    return this.Ns((function() {
                        return i.Ss.replace(t)
                    }), "replace")
                }, i.get = function() {
                    var t = this;
                    return this.Ns((function() {
                        return t.Ss.get()
                    }), "get")
                }, i.goBack = function(t) {
                    var i = this;
                    return this.Ns((function() {
                        return i.ks <= 0 && !t ? h() : i.Ss.pop(i.ks).then((function(t) {
                            i.Rs(t)
                        }))
                    }), "goBack")
                }, i.replaceStateForTarget = function(t) {
                    var i = this;
                    Zt("#" == t[0]);
                    var n = this.Ii.win.location.hash;
                    return this.push((function() {
                        i.Ii.win.location.replace(n || "#")
                    })).then((function() {
                        i.Ss.replaceStateForTarget(t)
                    }))
                }, i.getFragment = function() {
                    return this.Ss.getFragment()
                }, i.updateFragment = function(t) {
                    return "#" == t[0] && (t = t.substr(1)), this.Ss.updateFragment(t)
                }, i.Rs = function(t) {
                    this.ks = t.stackIndex, this.Cs(t)
                }, i.Cs = function(t) {
                    var i = this;
                    if (!(this.ks >= this._s.length - 1)) {
                        for (var n = [], r = this._s.length - 1; r > this.ks; r--) this._s[r] && (n.push(this._s[r]), this._s[r] = void 0);
                        if (this._s.splice(this.ks + 1), n.length > 0)
                            for (var e = function(r) {
                                    i.Pe.delay((function() {
                                        return n[r](t)
                                    }), 1)
                                }, s = 0; s < n.length; s++) e(s)
                    }
                }, i.Ns = function(t, i) {
                    var n = new a,
                        r = n.promise,
                        e = n.reject,
                        s = n.resolve,
                        u = new Error("history trace for " + i + ": ");
                    return this.Hi.push({
                        callback: t,
                        resolve: s,
                        reject: e,
                        trace: u
                    }), 1 == this.Hi.length && this.Ds(), r
                }, i.Ds = function() {
                    var t = this;
                    if (0 != this.Hi.length) {
                        var i, n = this.Hi[0];
                        try {
                            i = n.callback()
                        } catch (t) {
                            i = Promise.reject(t)
                        }
                        i.then((function(t) {
                            n.resolve(t)
                        }), (function(t) {
                            Qt().error(rh, "failed to execute a task:", t), n.trace && (n.trace.message += t, Qt().error(rh, n.trace)), n.reject(t)
                        })).then((function() {
                            t.Hi.splice(0, 1), t.Ds()
                        }))
                    }
                }, t
            }(),
            uh = function() {
                function t(t) {
                    var i = this;
                    this.win = t, this.Pe = ar(t);
                    var n = this.win.history;
                    this.js = n.length - 1;
                    var r, e, s = nh(n);
                    s && void 0 !== s[eh] && (this.js = Math.min(s[eh], this.js)), this.ks = this.js, this.zs, this.Rs = null, this.Us = "state" in n, this.Ls = this.Hs(this.ks), n.pushState && n.replaceState ? (this.Gs = n.originalPushState || n.pushState.bind(n), this.Vs = n.originalReplaceState || n.replaceState.bind(n), r = function(t, n, r) {
                        i.Ls = t, i.Gs(t, n, r || null)
                    }, e = function(t, n, r) {
                        i.Ls = t, void 0 !== r ? i.Vs(t, n, r) : i.Vs(t, n)
                    }, n.originalPushState || (n.originalPushState = this.Gs), n.originalReplaceState || (n.originalReplaceState = this.Vs)) : (r = function(t, n, r) {
                        i.Ls = t
                    }, e = function(t, n, r) {
                        i.Ls = t
                    }), this.Fs = r, this.Bs = e;
                    try {
                        this.Bs(this.Hs(this.ks, !0))
                    } catch (t) {
                        Qt().error(rh, "Initial replaceState failed: " + t.message)
                    }
                    n.pushState = this.qs.bind(this), n.replaceState = this.Ws.bind(this), this.$s = function(t) {
                        var n = t.state;
                        Qt().fine(rh, "popstate event: " + i.win.history.length + ", " + JSON.stringify(n)), i.Ks()
                    }, this.win.addEventListener("popstate", this.$s)
                }
                var i = t.prototype;
                return i.cleanup = function() {
                    this.Gs && (this.win.history.pushState = this.Gs), this.Vs && (this.win.history.replaceState = this.Vs), this.win.removeEventListener("popstate", this.$s)
                }, i.Hs = function(t, i) {
                    var n = A(i ? this.Ys() : void 0);
                    return n[eh] = t, n
                }, i.setOnStateUpdated = function(t) {
                    this.Rs = t
                }, i.push = function(t) {
                    var i = this;
                    return this.Js((function() {
                        var n = i.Xs(i.Ys(), t || {});
                        return i.qs(n, void 0, n.fragment ? "#" + n.fragment : void 0), c((function() {
                            return i.Xs(n, {
                                stackIndex: i.ks
                            })
                        }))
                    }))
                }, i.pop = function(t) {
                    var i = this;
                    return t = Math.max(t, this.js), this.Js((function() {
                        return i.Qs(i.ks - t + 1)
                    })).then((function(t) {
                        return i.Xs(i.Ys(), {
                            stackIndex: t
                        })
                    }))
                }, i.replace = function() {
                    var t = this,
                        i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.Js((function() {
                        var n = t.Xs(t.Ys(), i || {}),
                            r = (n.url || "").replace(/#.*/, ""),
                            e = n.fragment ? "#" + n.fragment : "";
                        return t.Ws(n, n.title, r || e ? r + e : void 0), c((function() {
                            return t.Xs(n, {
                                stackIndex: t.ks
                            })
                        }))
                    }))
                }, i.get = function() {
                    var t = this;
                    return c((function() {
                        return t.Xs(t.Ys(), {
                            stackIndex: t.ks
                        })
                    }))
                }, i.backTo = function(t) {
                    var i = this;
                    return t = Math.max(t, this.js), this.Js((function() {
                        return i.Qs(i.ks - t)
                    }))
                }, i.Ks = function() {
                    var t = this.Ys();
                    Qt().fine(rh, "history event: " + this.win.history.length + ", " + JSON.stringify(t));
                    var i = t ? t[eh] : void 0,
                        n = this.ks,
                        r = this.zs;
                    this.zs = void 0, n > this.win.history.length - 2 && (n = this.win.history.length - 2, this.Zs(this.Xs(t, {
                        stackIndex: n
                    }))), null == i ? n += 1 : n = i < this.win.history.length ? i : this.win.history.length - 1, t || (t = {}), t[eh] = n, this.Bs(t, void 0, void 0), n != this.ks && this.Zs(this.Xs(t, {
                        stackIndex: n
                    })), n < this.js && (this.js = n), r && r.resolve()
                }, i.Ys = function() {
                    return this.Us ? nh(this.win.history) : this.Ls
                }, i.io = function() {
                    Zt(!this.zs)
                }, i.Js = function(t) {
                    return this.zs ? this.zs.promise.then(t, t) : t()
                }, i.no = function() {
                    this.io();
                    var t = new a,
                        i = t.reject,
                        n = t.resolve,
                        r = this.Pe.timeoutPromise(500, t.promise);
                    return this.zs = {
                        promise: r,
                        resolve: n,
                        reject: i
                    }, r
                }, i.Qs = function(t) {
                    var i = this;
                    if (this.io(), t <= 0) return Promise.resolve(this.ks);
                    this.Ls = this.Hs(this.ks - t);
                    var n = this.no();
                    return this.win.history.go(-t), n.then((function() {
                        return Promise.resolve(i.ks)
                    }))
                }, i.qs = function(t, i, n) {
                    this.io(), t || (t = {});
                    var r = this.ks + 1;
                    t[eh] = r, this.Fs(t, i, n), r != this.win.history.length - 1 && (r = this.win.history.length - 1, t[eh] = r, this.Bs(t));
                    var e = this.Xs(t, {
                        stackIndex: r
                    });
                    this.Zs(e)
                }, i.replaceStateForTarget = function(t) {
                    var i = this;
                    Zt("#" == t[0]), this.Js((function() {
                        i.win.removeEventListener("popstate", i.$s);
                        try {
                            i.win.location.replace(t)
                        } finally {
                            i.win.addEventListener("popstate", i.$s)
                        }
                        return i.Ws(), h()
                    }))
                }, i.Ws = function(t, i, n) {
                    this.io(), t || (t = {});
                    var r = Math.min(this.ks, this.win.history.length - 1);
                    t[eh] = r, this.Bs(t, i, n);
                    var e = this.Xs(t, {
                        stackIndex: r
                    });
                    this.Zs(e)
                }, i.Zs = function(t) {
                    this.io(), t.stackIndex = Math.min(t.stackIndex, this.win.history.length - 1), this.ks != t.stackIndex && (Qt().fine(rh, "stack index changed: " + this.ks + " -> " + t.stackIndex), this.ks = t.stackIndex, this.Rs && this.Rs(t))
                }, i.getFragment = function() {
                    var t = this.win.location.hash;
                    return t = t.substr(1), Promise.resolve(t)
                }, i.updateFragment = function(t) {
                    return this.replace({
                        fragment: t
                    })
                }, i.Xs = function(t, i) {
                    var n = D(D({}, t && t.data || {}), i.data || {});
                    return D(D(D({}, t || {}), i), {}, {
                        data: n
                    })
                }, t
            }(),
            oh = function() {
                function t(t, i) {
                    var n = this;
                    this.win = t, this.Ze = i, this.ks = 0, this.Rs = null, this.ro = this.Ze.onMessage("historyPopped", (function(t) {
                        return n.eo(t)
                    }))
                }
                var i = t.prototype;
                return i.replaceStateForTarget = function(t) {
                    Zt("#" == t[0]), this.win.location.replace(t)
                }, i.cleanup = function() {
                    this.ro()
                }, i.setOnStateUpdated = function(t) {
                    this.Rs = t
                }, i.so = function(t, i, n) {
                    return this.oo(t) ? t : (Qt().warn(rh, 'Ignored unexpected "%s" data:', n, t), i)
                }, i.oo = function(t) {
                    return !!t && void 0 !== t.stackIndex
                }, i.push = function(t) {
                    var i = this,
                        n = D({
                            "stackIndex": this.ks + 1
                        }, t || {}),
                        r = "pushHistory";
                    return this.Ze.sendMessageAwaitResponse(r, n).then((function(t) {
                        var e = n,
                            s = i.so(t, e, r);
                        return i.Zs(s), s
                    }))
                }, i.pop = function(t) {
                    var i = this;
                    if (t > this.ks) return this.get();
                    var n = {
                            "stackIndex": this.ks
                        },
                        r = "popHistory";
                    return this.Ze.sendMessageAwaitResponse(r, n).then((function(t) {
                        var n = {
                                "stackIndex": i.ks - 1
                            },
                            e = i.so(t, n, r);
                        return i.Zs(e), e
                    }))
                }, i.replace = function(t) {
                    var i = this;
                    if (t && t.url) {
                        if (!this.Ze.hasCapability("fullReplaceHistory")) {
                            var n = {
                                "stackIndex": this.ks
                            };
                            return Promise.resolve(n)
                        }
                        var r = t.url.replace(/#.*/, "");
                        t.url = r
                    }
                    var e = D({
                            "stackIndex": this.ks
                        }, t || {}),
                        s = "replaceHistory";
                    return this.Ze.sendMessageAwaitResponse(s, e, !0).then((function(t) {
                        var n = e,
                            r = i.so(t, n, s);
                        return i.Zs(r), r
                    }))
                }, i.get = function() {
                    return Promise.resolve({
                        data: void 0,
                        fragment: "",
                        stackIndex: this.ks,
                        title: ""
                    })
                }, i.eo = function(t) {
                    void 0 !== t.newStackIndex && (t.stackIndex = t.newStackIndex), this.oo(t) ? this.Zs(t) : Qt().warn(rh, 'Ignored unexpected "historyPopped" data:', t)
                }, i.Zs = function(t) {
                    var i = t.stackIndex;
                    this.ks != i && (Qt().fine(rh, "stackIndex: ".concat(this.ks, " -> ").concat(i)), this.ks = i, this.Rs && this.Rs(t))
                }, i.getFragment = function() {
                    return this.Ze.hasCapability("fragment") ? this.Ze.sendMessageAwaitResponse("getFragment", void 0, !0).then((function(t) {
                        if (!t) return "";
                        var i = t;
                        return "#" == i[0] && (i = i.substr(1)), i
                    })) : Promise.resolve("")
                }, i.updateFragment = function(t) {
                    return this.Ze.hasCapability("fragment") ? this.Ze.sendMessageAwaitResponse("replaceHistory", {
                        "fragment": t
                    }, !0) : h()
                }, t
            }();

        function hh(t) {
            var i, n = vr(t);
            return n.isOvertakeHistory() || t.win.__AMP_TEST_IFRAME ? i = new oh(t.win, n) : (An(t.win, "global-history-binding", uh), i = En(t.win, "global-history-binding")), new sh(t, i)
        }

        function ah(t, i) {
            return tr(t.win).installExtensionForDoc(t, "amp-loader").then((function() {
                return function(t) {
                    return Hn(t, "loader", "amp-loader")
                }(i)
            }))
        }
        new WeakMap, new WeakMap;
        var ch = ['<div slot=i-amphtml-svc class="i-amphtml-svc i-amphtml-loading-container i-amphtml-fill-content amp-hidden"></div>'],
            fh = function() {
                function t(t) {
                    this.Ii = t;
                    var i = t.win,
                        n = this.uo.bind(this);
                    this.ho = function(t, i) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = n.needsRootBounds,
                            e = n.rootMargin,
                            s = n.threshold,
                            u = Ni(i) && (r || e) ? i.document : void 0;
                        return new i.IntersectionObserver(t, {
                            threshold: s,
                            root: u,
                            rootMargin: e
                        })
                    }((function(t) {
                        return t.forEach(n)
                    }), i), this.ao = new WeakMap
                }
                var i = t.prototype;
                return i.dispose = function() {
                    this.ho.disconnect()
                }, i.track = function(t) {
                    this.ho.observe(t)
                }, i.untrack = function(t) {
                    this.ho.unobserve(t), this.Hn(t)
                }, i.uo = function(t) {
                    var i = t.boundingClientRect,
                        n = t.isIntersecting,
                        r = t.target,
                        e = i.height,
                        s = i.width,
                        u = r,
                        o = n && s > 20 && e > 20,
                        h = this.ao.get(u);
                    o !== (h && h.shown || !1) && (o && !h && (h = this.co(u, s, e), this.ao.set(u, h)), h && (h.shown = o, h.container.classList.toggle("amp-hidden", !o), h.loader.classList.toggle("amp-active", o)))
                }, i.co = function(t, i, n) {
                    var r = Date.now(),
                        e = function(t, i, n, r) {
                            var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t.win.Date.now(),
                                s = i.ownerDocument.createElement("div");
                            return ah(t, i).then((function(u) {
                                var o = t.win.Date.now() - e;
                                u.initializeLoader(i, s, o, n, r)
                            })), s
                        }(this.Ii, t, i, n, r),
                        s = ke(this.Ii.win.document)(ch);
                    return s.appendChild(e), t.appendChild(s), {
                        shown: !1,
                        loader: e,
                        container: s
                    }
                }, i.Hn = function(t) {
                    var i = this.ao.get(t);
                    i && (this.ao.delete(t), Ti(i.container))
                }, t
            }(),
            lh = function() {
                function t(t, i) {
                    var n = this;
                    this.win = t, this.fo = i, this.lo = [], this.vo = new Er, this.do = function(t) {
                        K(t.target) && n.mo(t.target)
                    }, this.po = function(i) {
                        ar(t).delay((function() {
                            n.win.document.activeElement && n.mo(n.win.document.activeElement)
                        }), 500)
                    }, this.win.document.addEventListener("focus", this.do, !0), this.win.addEventListener("blur", this.po)
                }
                var i = t.prototype;
                return i.Hn = function() {
                    this.win.document.removeEventListener("focus", this.do, !0), this.win.removeEventListener("blur", this.po)
                }, i.onFocus = function(t) {
                    return this.vo.add(t)
                }, i.mo = function(t) {
                    var i = Date.now();
                    0 == this.lo.length || this.lo[this.lo.length - 1].el != t ? this.lo.push({
                        el: t,
                        time: i
                    }) : this.lo[this.lo.length - 1].time = i, this.purgeBefore(i - this.fo), this.vo.fire(t)
                }, i.getLast = function() {
                    return 0 == this.lo.length ? null : this.lo[this.lo.length - 1].el
                }, i.purgeBefore = function(t) {
                    for (var i = this.lo.length - 1, n = 0; n < this.lo.length; n++)
                        if (this.lo[n].time >= t) {
                            i = n - 1;
                            break
                        } - 1 != i && this.lo.splice(0, i + 1)
                }, i.hasDescendantsOf = function(t) {
                    this.win.document.activeElement && this.mo(this.win.document.activeElement);
                    for (var i = 0; i < this.lo.length; i++)
                        if (t.contains(this.lo[i].el)) return !0;
                    return !1
                }, t
            }(),
            vh = 70,
            dh = function() {
                function t(t) {
                    var i = this;
                    this.ampdoc = t, this.win = t.win, this.si = or(t), this.bo = mr(this.ampdoc), this.yo = dr(this.win), this.wo = new lh(this.win, 6e4), this.wo.onFocus((function(t) {
                        i.Ao(t)
                    }))
                }
                var i = t.prototype;
                return i.forceChangeSize = function(t, i, n, r, e) {
                    this.xo(Hs.forElement(t), i, n, e, void 0, !0, r)
                }, i.requestChangeSize = function(t, i, n, r, e) {
                    var s = this;
                    return new Promise((function(u, o) {
                        s.xo(Hs.forElement(t), i, n, r, e, !1, (function(t) {
                            t ? u() : o(new Error("changeSize attempt denied"))
                        }))
                    }))
                }, i.expandElement = function(t) {
                    Hs.forElement(t).completeExpand(), this.si.schedulePass(vh)
                }, i.attemptCollapse = function(t) {
                    var i = this;
                    return new Promise((function(n, r) {
                        i.xo(Hs.forElement(t), 0, 0, void 0, void 0, !1, (function(i) {
                            i ? (Hs.forElement(t).completeCollapse(), n()) : r(Qt().createExpectedError("collapse attempt denied"))
                        }))
                    }))
                }, i.collapseElement = function(t) {
                    var i = this.bo.getLayoutRect(t);
                    0 != i.width && 0 != i.height && (Ge(this.win, "dirty-collapse-element") ? this.dirtyElement(t) : this.si.setRelayoutTop(i.top)), Hs.forElement(t).completeCollapse(), this.si.schedulePass(vh)
                }, i.measureElement = function(t) {
                    return this.yo.measurePromise(t)
                }, i.mutateElement = function(t, i, n) {
                    return this.Eo(t, null, i, n)
                }, i.measureMutateElement = function(t, i, n) {
                    return this.Eo(t, i, n)
                }, i.Oo = function(t) {
                    var i = Nr(this.win, t.element);
                    return {
                        top: parseInt(i.marginTop, 10) || 0,
                        right: parseInt(i.marginRight, 10) || 0,
                        bottom: parseInt(i.marginBottom, 10) || 0,
                        left: parseInt(i.marginLeft, 10) || 0
                    }
                }, i.Eo = function(t, i, n) {
                    var r = this,
                        e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        s = function() {
                            var i = r.bo.getLayoutRect(t);
                            return 0 != i.width && 0 != i.height ? i.top : -1
                        },
                        u = -1;
                    return this.yo.runPromise({
                        measure: function() {
                            i && i(), e || (u = s())
                        },
                        mutate: function() {
                            if (n(), !e) {
                                t.classList.contains("i-amphtml-element") && Hs.forElement(t).requestMeasure();
                                for (var i = t.getElementsByClassName("i-amphtml-element"), o = 0; o < i.length; o++) Hs.forElement(i[o]).requestMeasure();
                                r.si.schedulePass(vh), -1 != u && r.si.setRelayoutTop(u), r.yo.measure((function() {
                                    var t = s(); - 1 != t && t != u && (r.si.setRelayoutTop(t), r.si.schedulePass(vh)), r.si.maybeHeightChanged()
                                }))
                            }
                        }
                    })
                }, i.dirtyElement = function(t) {
                    var i = !1;
                    if (t.classList.contains("i-amphtml-element")) {
                        var n = Hs.forElement(t);
                        this.si.setRelayoutTop(n.getLayoutBox().top)
                    } else i = !0;
                    this.si.schedulePass(vh, i)
                }, i.Ao = function(t) {
                    var i = bi(t, (function(t) {
                        return !!Hs.forElementOptional(t)
                    }));
                    if (i) {
                        var n = Hs.forElement(i),
                            r = n.getPendingChangeSize();
                        void 0 !== r && this.xo(n, r.height, r.width, r.margins, void 0, !0)
                    }
                }, i.xo = function(t, i, n, r, e, s, u) {
                    var o = this;
                    t.hasBeenMeasured() && !r ? this.Po(t, i, n, void 0, e, s, u) : this.yo.measure((function() {
                        t.hasBeenMeasured() || t.measure();
                        var h = r ? {
                            newMargins: r,
                            currentMargins: o.Oo(t)
                        } : void 0;
                        o.Po(t, i, n, h, e, s, u)
                    }))
                }, i.Po = function(t, i, n, r, e, s, u) {
                    t.resetPendingChangeSize();
                    var o, h, a = t.getLayoutSize();
                    if (!(void 0 !== i && i != a.height || void 0 !== n && n != a.width || void 0 !== r && (o = r.currentMargins, h = r.newMargins, void 0 !== h.top && h.top != o.top || void 0 !== h.right && h.right != o.right || void 0 !== h.bottom && h.bottom != o.bottom || void 0 !== h.left && h.left != o.left))) return void 0 === i && void 0 === n && void 0 === r && Qt().error("Mutator", "attempting to change size with undefined dimensions", t.debugid), void(u && u(!0));
                    this.si.updateOrEnqueueMutateTask(t, {
                        resource: t,
                        newHeight: i,
                        newWidth: n,
                        marginChange: r,
                        event: e,
                        force: s,
                        callback: u
                    }), this.si.schedulePassVsync()
                }, t
            }(),
            mh = null,
            ph = ["gclid", "gclsrc"],
            gh = [/^t.co$/];

        function bh() {
            return ti(mh, "E#19457 trackImpressionPromise")
        }

        function yh(t, i, n, r) {
            var e, s, u;
            try {
                e = t.open(i, n, r)
            } catch (t) {
                Qt().error("DOM", "Failed to open url on target: ", n, t)
            }
            return !e && "_top" != n && ("number" != typeof u && (u = 0), u + "noopener".length > (s = r || "").length || -1 === s.indexOf("noopener", u)) && (e = t.open(i, "_top")), e
        }
        var wh = "navigation",
            Ah = "click",
            xh = "contextmenu",
            Eh = ["_top", "_blank"],
            Ph = "data-a4a-orig-href",
            Oh = function() {
                function t(t) {
                    var i = this;
                    this.ampdoc = t, this.To = t.getRootNode(), this.bo = mr(this.ampdoc), this.Ze = vr(this.ampdoc), this.lo = ir(this.ampdoc), this.Io = sr(this.ampdoc.win), this.Mo = this.Io.isIos() && this.Io.isSafari(), this.So = Ni(this.ampdoc.win) && this.Ze.isOvertakeHistory(), this.ko = this.To != this.ampdoc.getRootNode() || !!this.ampdoc.getParent(), this._o = "inabox" == Dt(this.ampdoc.win).runtime, this.Ro = this.To.nodeType == Node.DOCUMENT_NODE ? this.To.documentElement : this.To, this.No = this.Co.bind(this), this.To.addEventListener(Ah, this.No), this.To.addEventListener(xh, this.No), this.Do = !1,
                        function(t) {
                            return t.whenReady().then((function() {
                                return !!t.getBody().querySelector("amp-analytics[type=googleanalytics]")
                            }))
                        }(this.ampdoc).then((function(t) {
                            i.Do = t
                        })), this.jo = !1, this.zo = !1, Promise.all([this.Ze.isTrustedViewer(), this.Ze.getViewerOrigin()]).then((function(t) {
                            var n;
                            i.jo = t[0], i.zo = (n = t[1], Tt.test(ls(n).origin))
                        })), this.Uo = null, this.Lo = new $s, this.Ho = new $s
                }
                t.installAnchorClickInterceptor = function(t, i) {
                    i.document.documentElement.addEventListener("click", Ih.bind(null, t), !0)
                };
                var i = t.prototype;
                return i.cleanup = function() {
                    this.No && (this.To.removeEventListener(Ah, this.No), this.To.removeEventListener(xh, this.No))
                }, i.openWindow = function(t, i, n, r) {
                    var e = "";
                    !this.Io.isIos() && this.Io.isChrome() || r || (e += "noopener");
                    var s = yh(t, i, n, e);
                    s && !r && (s.opener = null)
                }, i.navigateTo = function(t, i, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        e = r.opener,
                        s = void 0 !== e && e,
                        u = r.target,
                        o = void 0 === u ? "_top" : u;
                    i = this.Go(i);
                    var h = lr(this.Ro);
                    if (h.isProtocolValid(i)) {
                        ti(Eh.includes(o), "Target '".concat(o, "' not supported."));
                        var a = h.getSourceUrl(t.location);
                        i = h.resolveRelativeUrl(i, a), "_blank" != o ? n && (this.Uo || (this.Uo = this.Vo()), this.Uo.includes(n) && this.navigateToAmpUrl(i, n)) || (t.top.location.href = i) : this.openWindow(t, i, o, s)
                    } else Jt().error(wh, "Cannot navigate to invalid protocol: " + i)
                }, i.navigateToAmpUrl = function(t, i) {
                    return !!this.Ze.hasCapability("a2a") && (this.Ze.sendMessage("a2aNavigate", {
                        "url": t,
                        "requestedBy": i
                    }), !0)
                }, i.Vo = function() {
                    var t = this.To.querySelector('meta[name="amp-to-amp-navigation"]');
                    return t && t.hasAttribute("content") ? t.getAttribute("content").split(",").map((function(t) {
                        return t.trim()
                    })) : []
                }, i.Co = function(t) {
                    if (!t.defaultPrevented) {
                        var i = yi(t.__AMP_CUSTOM_LINKER_TARGET__ || t.target, "A");
                        i && i.href && (t.type == Ah ? this.Fo(i, t) : t.type == xh && this.Bo(i, t))
                    }
                }, i.Fo = function(t, i) {
                    this.qo(t);
                    var n = this.Wo(t.href);
                    if (!this.$o(i, t, n) && !this.Ko(i, t, n)) {
                        var r = this.Yo();
                        Mh(n) != Mh(r) && (this.Jo(t, i), n = this.Wo(t.href)), this.Xo(i, t, n, r)
                    }
                }, i.Bo = function(t, i) {
                    this.qo(t), this.Jo(t, i)
                }, i.Jo = function(t, i) {
                    this.Lo.forEach((function(n) {
                        n(t, i)
                    }))
                }, i.Go = function(t) {
                    return this.Ho.forEach((function(i) {
                        t = i(t)
                    })), t
                }, i.qo = function(t) {
                    var i = null;
                    this.Do && !this.ko && (i = function(t, i) {
                        for (var n = yt(vs(zr.getLocation(t).href).search), r = [], e = 0; e < ph.length; e++) {
                            var s = ph[e];
                            void 0 !== n[s] && r.push(s)
                        }
                        var u = i.getAttribute("data-amp-addparams"),
                            o = i.href;
                        u && (o = gs(o, yt(u)));
                        for (var h = yt(vs(o).search), a = r.length - 1; a >= 0; a--) void 0 !== h[r[a]] && r.splice(a, 1);
                        return function(t) {
                            for (var i = "", n = 0; n < t.length; n++) {
                                var r = t[n];
                                i += 0 == n ? "".concat(r, "=QUERY_PARAM(").concat(r, ")") : "&".concat(r, "=QUERY_PARAM(").concat(r, ")")
                            }
                            return i
                        }(r)
                    }(this.ampdoc.win, t)), cr(t).maybeExpandLink(t, i)
                }, i.Ko = function(t, i, n) {
                    if (!this.So) return !1;
                    var r = oi(i),
                        e = i.href,
                        s = n.protocol;
                    if ("ftp:" == s) return yh(r, e, "_blank"), t.preventDefault(), !0;
                    var u = /^(https?|mailto):$/.test(s);
                    return !(!this.Mo || u || (yh(r, e, "_top"), t.preventDefault(), 0))
                }, i.$o = function(t, i, n) {
                    return !(!i.hasAttribute("rel") || !i.getAttribute("rel").split(" ").map((function(t) {
                        return t.trim()
                    })).includes("amphtml") || !this.navigateToAmpUrl(n.href, "<a rel=amphtml>") || (t.preventDefault(), 0))
                }, i.Xo = function(t, i, n, r) {
                    var e = Mh(n),
                        s = Mh(r);
                    if (n.hash && e == s) this.Qo(t, n, r);
                    else {
                        var u = (i.getAttribute("target") || "").toLowerCase();
                        (this.ko || this._o) && "_top" != u && "_blank" != u && (u = "_blank", i.setAttribute("target", u));
                        var o = this.ampdoc.win,
                            h = sr(o),
                            a = vr(i);
                        r.search && h.isSafari() && h.getMajorVersion() >= 13 && a.isProxyOrigin() && a.isEmbedded() && this.Zo(o, r, u), this.viewerInterceptsNavigation(e, "intercept_click") && t.preventDefault()
                    }
                }, i.Zo = function(t, i, n) {
                    Qt().info(wh, "Removing iframe query string before navigation:", i.search);
                    var r = i.href,
                        e = "".concat(i.origin).concat(i.pathname).concat(i.hash);
                    t.history.replaceState(null, "", e);
                    var s = function() {
                        var i = t.location.href;
                        i == e ? (Qt().info(wh, "Restored iframe URL with query string:", r), t.history.replaceState(null, "", r)) : Qt().error(wh, "Unexpected iframe URL change:", i, e)
                    };
                    "_blank" === n ? t.setTimeout(s, 0) : t.addEventListener("pageshow", (function i(n) {
                        n.persisted && (s(), t.removeEventListener("pageshow", i))
                    }))
                }, i.Qo = function(t, i, n) {
                    var r = this;
                    if (t.preventDefault(), !this.ko) {
                        var e = i.hash.slice(1),
                            s = null;
                        if (e) {
                            var u = vi(e);
                            s = this.To.getElementById(e) || this.To.querySelector('a[name="'.concat(u, '"]'))
                        }
                        i.hash != n.hash ? this.lo.replaceStateForTarget(i.hash).then((function() {
                            r.tu(s, e)
                        })) : this.tu(s, e)
                    }
                }, i.registerAnchorMutator = function(t, i) {
                    this.Lo.enqueue(t, i)
                }, i.registerNavigateToMutator = function(t, i) {
                    this.Ho.enqueue(t, i)
                }, i.tu = function(t, i) {
                    var n = this;
                    t ? (this.bo.scrollIntoView(t), ar(this.ampdoc.win).delay((function() {
                        return n.bo.scrollIntoView(t)
                    }), 1)) : Qt().warn(wh, "failed to find element with id=".concat(i, " or a[name=").concat(i, "]"))
                }, i.Wo = function(t) {
                    return lr(this.Ro).parse(t)
                }, i.Yo = function() {
                    return this.Wo("")
                }, i.viewerInterceptsNavigation = function(t, i) {
                    var n = this.Ze.hasCapability("interceptNavigation"),
                        r = this.ampdoc.isSingleDoc() && this.ampdoc.getRootNode().documentElement.hasAttribute("allow-navigation-interception");
                    return !(!n || !r || !this.jo && !this.zo || (this.Ze.sendMessage("navigateTo", {
                        "url": t,
                        "requestedBy": i
                    }), 0))
                }, t
            }();

        function Ih(t, i) {
            var n = yi(i.target, "A");
            if (n && n.href) {
                var r = n.getAttribute(Ph) || n.getAttribute("href");
                if (r) {
                    var e = {
                            "CLICK_X": function() {
                                return i.pageX
                            },
                            "CLICK_Y": function() {
                                return i.pageY
                            }
                        },
                        s = cr(n).expandUrlSync(r, e, {
                            "CLICK_X": !0,
                            "CLICK_Y": !0
                        });
                    s != r && (n.getAttribute(Ph) || n.setAttribute(Ph, r), n.setAttribute("href", s))
                }
            }
        }

        function Mh(t) {
            return "".concat(t.origin).concat(t.pathname).concat(t.search)
        }

        function Th(t) {
            return V(t) ? t : [t]
        }
        var Sh = function() {
                function t(t) {
                    this.si = or(t)
                }
                var i = t.prototype;
                return i.setOwner = function(t, i) {
                    Hs.setOwner(t, i)
                }, i.schedulePreload = function(t, i) {
                    this.iu(this.si.getResourceForElement(t), !1, Th(i))
                }, i.scheduleLayout = function(t, i) {
                    this.iu(this.si.getResourceForElement(t), !0, Th(i))
                }, i.schedulePause = function(t, i) {
                    var n = this.si.getResourceForElement(t);
                    i = Th(i), this.nu(n, i, (function(t) {
                        t.pause()
                    }))
                }, i.scheduleResume = function(t, i) {
                    var n = this.si.getResourceForElement(t);
                    i = Th(i), this.nu(n, i, (function(t) {
                        t.resume()
                    }))
                }, i.scheduleUnlayout = function(t, i) {
                    var n = this.si.getResourceForElement(t);
                    i = Th(i), this.nu(n, i, (function(t) {
                        t.unlayout()
                    }))
                }, i.requireLayout = function(t, i) {
                    var n = [];
                    return this.ru(t, (function(t) {
                        n.push(t.element.ensureLoaded())
                    })), Promise.all(n)
                }, i.nu = function(t, i, n) {
                    for (var r, e = o(i, !0); !(r = e()).done;) {
                        var s = r.value;
                        Zt(t.element.contains(s)), this.ru(s, n)
                    }
                }, i.ru = function(t, i) {
                    if (t.classList.contains("i-amphtml-element")) {
                        i(this.si.getResourceForElement(t));
                        var n = t.getPlaceholder();
                        n && this.ru(n, i)
                    } else
                        for (var r = t.getElementsByClassName("i-amphtml-element"), e = [], s = 0; s < r.length; s++) {
                            for (var u = r[s], o = !1, h = 0; h < e.length; h++)
                                if (e[h].contains(u)) {
                                    o = !0;
                                    break
                                }
                            o || (e.push(u), i(this.si.getResourceForElement(u)))
                        }
                }, i.iu = function(t, i, n) {
                    this.nu(t, n, (function(i) {
                        i.element.ensureLoaded(t.getLayoutPriority())
                    }))
                }, t
            }(),
            Rh = function() {
                function t(t) {
                    this.eu = t.navigator, this.t = t
                }
                var i = t.prototype;
                return i.isAndroid = function() {
                    return /Android/i.test(this.eu.userAgent)
                }, i.isIos = function() {
                    return /iPhone|iPad|iPod/i.test(this.eu.userAgent)
                }, i.isSafari = function() {
                    return /Safari/i.test(this.eu.userAgent) && !this.isChrome() && !this.isEdge() && !this.isFirefox() && !this.isOpera()
                }, i.isChrome = function() {
                    return /Chrome|CriOS/i.test(this.eu.userAgent) && !this.isEdge() && !this.isOpera()
                }, i.isFirefox = function() {
                    return /Firefox|FxiOS/i.test(this.eu.userAgent) && !this.isEdge()
                }, i.isOpera = function() {
                    return /OPR\/|Opera|OPiOS/i.test(this.eu.userAgent)
                }, i.isEdge = function() {
                    return /Edge/i.test(this.eu.userAgent)
                }, i.isWebKit = function() {
                    return /WebKit/i.test(this.eu.userAgent) && !this.isEdge()
                }, i.isWindows = function() {
                    return /Windows/i.test(this.eu.userAgent)
                }, i.isStandalone = function() {
                    return this.isIos() && this.eu.standalone || this.isChrome() && this.t.matchMedia("(display-mode: standalone)").matches
                }, i.isBot = function() {
                    return /bot/i.test(this.eu.userAgent)
                }, i.getMajorVersion = function() {
                    return this.isSafari() ? this.isIos() ? this.getIosMajorVersion() || 0 : this.su(/\sVersion\/(\d+)/, 1) : this.isChrome() ? this.su(/(Chrome|CriOS)\/(\d+)/, 2) : this.isFirefox() ? this.su(/(Firefox|FxiOS)\/(\d+)/, 2) : this.isOpera() ? this.su(/(OPR|Opera|OPiOS)\/(\d+)/, 2) : this.isEdge() ? this.su(/Edge\/(\d+)/, 1) : 0
                }, i.su = function(t, i) {
                    if (!this.eu.userAgent) return 0;
                    var n = this.eu.userAgent.match(t);
                    return !n || i >= n.length ? 0 : parseInt(n[i], 10)
                }, i.getIosVersionString = function() {
                    var t, i, n;
                    return this.isIos() && (null === (t = this.eu.userAgent) || void 0 === t || null === (i = t.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/)) || void 0 === i || null === (n = i[1]) || void 0 === n ? void 0 : n.replace(/_/g, ".")) || ""
                }, i.getIosMajorVersion = function() {
                    var t = this.getIosVersionString();
                    return "" == t ? null : Number(t.split(".")[0])
                }, t
            }();

        function _h(t) {
            An(t, "platform", Rh)
        }
        var kh = function() {
                function t(t) {
                    this.ai = t, this.ou = A()
                }
                var i = t.prototype;
                return i.addTransition = function(t, i, n) {
                    var r = this.uu(t, i);
                    et(!this.ou[r]), this.ou[r] = n
                }, i.setState = function(t) {
                    var i = this.ai;
                    this.ai = t;
                    var n = this.uu(i, t),
                        r = this.ou[n];
                    null == r || r()
                }, i.uu = function(t, i) {
                    return "".concat(t, "|").concat(i)
                }, t
            }(),
            Ch = function() {
                function t() {
                    this.Qi = [], this.hu = {}, this.au = 0, this.cu = 0
                }
                var i = t.prototype;
                return i.getSize = function() {
                    return this.Qi.length
                }, i.getLastEnqueueTime = function() {
                    return this.au
                }, i.getLastDequeueTime = function() {
                    return this.cu
                }, i.getTaskById = function(t) {
                    return this.hu[t] || null
                }, i.enqueue = function(t) {
                    Zt(!this.hu[t.id]), this.Qi.push(t), this.hu[t.id] = t, this.au = Date.now()
                }, i.dequeue = function(t) {
                    var i = this.hu[t.id];
                    return !!this.removeAtIndex(t, this.Qi.indexOf(i)) && (this.cu = Date.now(), !0)
                }, i.peek = function(t) {
                    for (var i = 1e6, n = null, r = 0; r < this.Qi.length; r++) {
                        var e = this.Qi[r],
                            s = t(e);
                        s < i && (i = s, n = e)
                    }
                    return n
                }, i.forEach = function(t) {
                    this.Qi.forEach(t)
                }, i.removeAtIndex = function(t, i) {
                    var n = this.hu[t.id];
                    return !(!n || this.Qi[i] != n || (this.Qi.splice(i, 1), delete this.hu[t.id], 0))
                }, i.purge = function(t) {
                    for (var i = this.Qi.length; i--;) t(this.Qi[i]) && this.removeAtIndex(this.Qi[i], i)
                }, t
            }(),
            Nh = "Resources",
            Dh = function() {
                function t(t) {
                    var i = this;
                    this.ampdoc = t, this.win = t.win, this.Ze = vr(t), this.fu = this.Ze.isRuntimeOn(), this.lu = !1, this.vu = 0, this.si = [], this.du = 0, this.mu = 0, this.pu = 0, this.bu = this.ampdoc.isVisible(), this.gu = !1, this.yu = !0, this.wu = !1, this.Au = -1, this.xu = !0, this.Eu = -1, this.Ou = 0, this.Pu = 0, this._e = new Cu(this.win, (function() {
                        return i.doPass()
                    })), this.Tu = new Cu(this.win, (function() {
                        i.xu = !0, i.schedulePass()
                    })), this.Iu = new Ch, this.Hi = new Ch, this.Mu = this.Su.bind(this), this.ku = [], this._u = [], this.Ru = !1, this.bo = mr(this.ampdoc), this.yo = dr(this.win), this.wo = new lh(this.win, 6e4), this.Nu = !1, this.Cu = 0, this.Du = !1, this.ju = [], this.zu = [], this.Uu = new a, this.Lu = new kh(this.ampdoc.getVisibilityState()), this.bo.onChanged((function(t) {
                        i.Ou = i.win.Date.now(), i.Pu = t.velocity, t.relayoutAll && (i.xu = !0, i.Du = !0), i.schedulePass()
                    })), this.bo.onScroll((function() {
                        i.Ou = i.win.Date.now()
                    })), this.ampdoc.onVisibilityChanged((function() {
                        -1 == i.Au && i.ampdoc.isVisible() && (i.Au = i.win.Date.now()), i.schedulePass()
                    })), this.Ze.onRuntimeState((function(t) {
                        Qt().fine(Nh, "Runtime state:", t), i.fu = t, i.schedulePass(1)
                    })), Xs(this.ampdoc, (function() {
                        i.Hu(i.Lu), i.schedulePass(0)
                    })), this.Gu(), this.Vu = dt(this.win, (function(t) {
                        return i.Fu(t)
                    }), 250), Ye(this.win.document, "scroll", this.Vu, {
                        capture: !0,
                        passive: !0
                    })
                }
                var i = t.prototype;
                return i.Gu = function() {
                    var t = this;
                    this.ampdoc.whenReady().then((function() {
                        t.gu = !0, t.Bu(), t._u = null,
                            function(t) {
                                return En(t, "input")
                            }(t.win).setupInputModeClasses(t.ampdoc);
                        var i = function() {
                            return t.Tu.schedule()
                        };
                        i(), Promise.race([Xe(t.win), ar(t.win).promise(3100)]).then(i), t.win.document.fonts && "loaded" != t.win.document.fonts.status && t.win.document.fonts.ready.then(i)
                    }))
                }, i.get = function() {
                    return this.si.slice(0)
                }, i.getAmpdoc = function() {
                    return this.ampdoc
                }, i.getResourceForElement = function(t) {
                    return Hs.forElement(t)
                }, i.getResourceForElementOptional = function(t) {
                    return Hs.forElementOptional(t)
                }, i.getScrollDirection = function() {
                    return Math.sign(this.Pu) || 1
                }, i.add = function(t) {
                    this.du++, 1 == this.du && this.bo.ensureReadyForElements();
                    var i = Hs.forElementOptional(t);
                    i && 0 != i.getState() && !t.reconstructWhenReparented() ? (i.requestMeasure(), Qt().fine(Nh, "resource reused:", i.debugid)) : (i = new Hs(++this.vu, t, this), Qt().fine(Nh, "resource added:", i.debugid)), this.si.push(i), this.Tu.schedule(1e3)
                }, i.qu = function() {
                    return this.mu < 20 || this.ampdoc.getVisibilityState() == br || this.ampdoc.hasBeenVisible()
                }, i.Wu = function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = this.fu || this.lu;
                    if (r) {
                        var e = this.ampdoc.getVisibilityState(),
                            s = e == gr && !t.prerenderAllowed(),
                            u = e == br && !t.previewAllowed();
                        s || u || (this.gu ? this.$u(t, n) : t.isBuilt() || t.isBuilding() || i && this._u.includes(t) || (this._u.push(t), this.Bu()))
                    }
                }, i.Bu = function() {
                    if (!this.Ru) try {
                        this.Ru = !0, this.Ku()
                    } finally {
                        this.Ru = !1
                    }
                }, i.Ku = function() {
                    for (var t = 0; t < this._u.length; t++) {
                        var i = this._u[t];
                        (this.gu || ki(i.element, this.ampdoc.getRootNode())) && (this._u.splice(t--, 1), this.$u(i))
                    }
                }, i.$u = function(t) {
                    var i = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!n && !this.qu() && !t.isBuildRenderBlocking()) return null;
                    var r = t.build();
                    return r ? (Qt().fine(Nh, "build resource:", t.debugid), this.mu++, this.pu++, r.then((function() {
                        return i.schedulePass()
                    }), (function(n) {
                        if (i.Yu(t), !Us(n)) throw n
                    }))) : null
                }, i.remove = function(t) {
                    var i = Hs.forElementOptional(t);
                    i && this.Yu(i)
                }, i.Yu = function(t) {
                    var i = this.si.indexOf(t); - 1 != i && this.si.splice(i, 1), t.isBuilt() && t.pauseOnRemove(), 3 === t.getState() && t.layoutCanceled(), this.Ju(t, !0), Qt().fine(Nh, "resource removed:", t.debugid)
                }, i.upgraded = function(t) {
                    var i = Hs.forElement(t);
                    this.Wu(i), Qt().fine(Nh, "resource upgraded:", i.debugid)
                }, i.updateLayoutPriority = function(t, i) {
                    var n = Hs.forElement(t);
                    n.updateLayoutPriority(i), this.Hi.forEach((function(t) {
                        t.resource == n && (t.priority = i)
                    })), this.schedulePass()
                }, i.schedulePass = function(t) {
                    return this._e.schedule(t)
                }, i.updateOrEnqueueMutateTask = function(t, i) {
                    for (var n = null, r = 0; r < this.ku.length; r++)
                        if (this.ku[r].resource == t) {
                            n = this.ku[r];
                            break
                        }
                    n ? (n.newHeight = i.newHeight, n.newWidth = i.newWidth, n.marginChange = i.marginChange, n.event = i.event, n.force = i.force || n.force, n.callback = i.callback) : this.ku.push(i)
                }, i.schedulePassVsync = function() {
                    var t = this;
                    this.Nu || (this.Nu = !0, this.yo.mutate((function() {
                        return t.doPass()
                    })))
                }, i.ampInitComplete = function() {
                    this.wu = !0, Qt().fine(Nh, "ampInitComplete"), this.schedulePass()
                }, i.setRelayoutTop = function(t) {
                    -1 == this.Eu ? this.Eu = t : this.Eu = Math.min(t, this.Eu)
                }, i.maybeHeightChanged = function() {
                    this.Du = !0
                }, i.onNextPass = function(t) {
                    this.ju.push(t)
                }, i.doPass = function() {
                    var t = this;
                    if (this.fu) {
                        if (this.bu = this.ampdoc.isVisible(), this.pu = 0, this.gu && this.yu && this.wu) {
                            var i;
                            this.yu = !1;
                            var n = this.win.document,
                                r = Zn(this.ampdoc);
                            this.Ze.sendMessage("documentLoaded", {
                                "title": n.title,
                                "sourceUrl": Is(this.ampdoc.getUrl()),
                                "isStory": "AMP-STORY" === (null === (i = n.body.firstElementChild) || void 0 === i ? void 0 : i.tagName),
                                "serverLayout": n.documentElement.hasAttribute("i-amphtml-element"),
                                "linkRels": r.linkRels,
                                "metaTags": {
                                    "viewport": r.viewport
                                },
                                "viewport": r.viewport
                            }, !0), this.Cu = this.bo.getContentHeight(), this.Ze.sendMessage("documentHeight", {
                                "height": this.Cu
                            }, !0), Qt().fine(Nh, "document height on load: %s", this.Cu)
                        }!this.yu && this.Xu && this.si.every((function(t) {
                            return t.getState() != Hs.NOT_BUILT || t.element.R1()
                        })) && (this.Xu = !1, this.Du = !0);
                        var e = this.bo.getSize();
                        Qt().fine(Nh, "PASS: visible=", this.bu, ", relayoutAll=", this.xu, ", relayoutTop=", this.Eu, ", viewportSize=", e.width, e.height), this._e.cancel(), this.Nu = !1, this.Lu.setState(this.ampdoc.getVisibilityState()), this.Qu(), this.Du && (this.Du = !1, this.yo.measure((function() {
                            var i = t.bo.getContentHeight();
                            i != t.Cu && (t.Ze.sendMessage("documentHeight", {
                                "height": i
                            }, !0), t.Cu = i, Qt().fine(Nh, "document height changed: %s", t.Cu), t.bo.contentHeightChanged())
                        })));
                        for (var s = 0; s < this.ju.length; s++)(0, this.ju[s])();
                        this.ju.length = 0
                    } else Qt().fine(Nh, "runtime is off")
                }, i.Qu = function() {
                    this.gu && this.wu && !this.ampdoc.signals().get(Gs) && (this.ampdoc.signals().signal(Gs), Qt().fine(Nh, "signal: ready-scan"))
                }, i.Zu = function() {
                    return this.ku.length > 0
                }, i.th = function() {
                    var t = this,
                        i = this.win.Date.now(),
                        n = this.bo.getRect(),
                        r = n.height / 10,
                        e = n.height / 10,
                        s = Math.abs(this.Pu) < .01 && i - this.Ou > 500 || i - this.Ou > 1e3;
                    if (this.ku.length > 0) {
                        Qt().fine(Nh, "change size requests:", this.ku.length);
                        var u = this.ku;
                        this.ku = [];
                        for (var o = -1, h = [], a = 0, c = function(i) {
                                var c = u[i],
                                    f = c,
                                    l = f.event,
                                    v = f.resource,
                                    d = v.getLayoutBox(),
                                    m = 0,
                                    p = 0,
                                    g = 0,
                                    b = 0,
                                    y = d.bottom,
                                    w = d.top,
                                    A = void 0;
                                if (c.marginChange) {
                                    A = c.marginChange.newMargins;
                                    var x = c.marginChange.currentMargins;
                                    null != A.top && (m = A.top - x.top), null != A.bottom && (p = A.bottom - x.bottom), null != A.left && (g = A.left - x.left), null != A.right && (b = A.right - x.right), m && (w = d.top - x.top), p && (y = d.bottom + x.bottom)
                                }
                                var E = c.newHeight - d.height,
                                    P = c.newWidth - d.width,
                                    O = !1;
                                if (0 == E && 0 == m && 0 == p && 0 == P && 0 == g && 0 == b);
                                else if (c.force || !t.bu) O = !0;
                                else if (t.wo.hasDescendantsOf(v.element) || l && l.userActivation && l.userActivation.hasBeenActive) O = !0;
                                else if (w >= n.bottom - e || 0 == m && d.bottom + Math.min(E, 0) >= n.bottom - e) O = !0;
                                else {
                                    if (n.top > 1 && y <= n.top + r) return E < 0 && n.top + a < -E || (s ? (a += E, h.push(c)) : t.ku.push(c)), "continue";
                                    t.ih(v, d) ? O = !0 : E < 0 || m < 0 || p < 0 || (c.newHeight == d.height ? t.yo.run({
                                        measure: function(t) {
                                            t.resize = !1;
                                            var i = v.element.parentElement;
                                            if (i) {
                                                for (var n = i.getLayoutSize && i.getLayoutSize().width || i.offsetWidth, r = P, e = 0; e < i.childElementCount; e++)
                                                    if ((r += i.children[e].offsetWidth) > n) return;
                                                t.resize = !0
                                            }
                                        },
                                        mutate: function(t) {
                                            t.resize && c.resource.changeSize(c.newHeight, c.newWidth, A), c.resource.overflowCallback(!t.resize, c.newHeight, c.newWidth, A)
                                        }
                                    }, {}) : c.resource.overflowCallback(!0, c.newHeight, c.newWidth, A))
                                }
                                O && (d.top >= 0 && (o = -1 == o ? d.top : Math.min(o, d.top)), c.resource.changeSize(c.newHeight, c.newWidth, A), c.resource.overflowCallback(!1, c.newHeight, c.newWidth, A), t.Du = !0), c.callback && c.callback(O)
                            }, f = 0; f < u.length; f++) c(f); - 1 != o && this.setRelayoutTop(o), h.length > 0 && this.yo.run({
                            measure: function(i) {
                                i.scrollHeight = t.bo.getScrollHeight(), i.scrollTop = t.bo.getScrollTop()
                            },
                            mutate: function(i) {
                                var n = -1;
                                h.forEach((function(t) {
                                    var i = t.resource.getLayoutBox();
                                    n = -1 == n ? i.top : Math.min(n, i.top), t.resource.changeSize(t.newHeight, t.newWidth, t.marginChange ? t.marginChange.newMargins : void 0), t.callback && t.callback(!0)
                                })), -1 != n && t.setRelayoutTop(n);
                                var r = t.bo.getScrollHeight();
                                r != i.scrollHeight && t.bo.setScrollTop(i.scrollTop + (r - i.scrollHeight)), t.Du = !0
                            }
                        }, {})
                    }
                }, i.ih = function(t, i, n) {
                    var r = this.bo.getContentHeight(),
                        e = Math.max(.85 * r, r - 1e3),
                        s = i || t.getLayoutBox(),
                        u = n || t.getInitialLayoutBox();
                    return s.bottom >= e || u.bottom >= e
                }, i.nh = function(t) {
                    var i = t.isDisplayed();
                    return t.measure(), !(i && !t.isDisplayed())
                }, i.rh = function(t) {
                    var i = this;
                    t.length && this.yo.mutate((function() {
                        t.forEach((function(t) {
                            t.unload(), i.Ju(t)
                        })), Qt().fine(Nh, "unload:", t)
                    }))
                }, i.eh = function() {
                    var t = this.win.Date.now(),
                        i = this.zu,
                        n = this.xu,
                        r = this.Eu;
                    this.xu = !1, this.Eu = -1;
                    for (var e, s = 0, u = 0, o = 0; o < this.si.length; o++) {
                        var h = this.si[o];
                        0 != h.getState() || h.isBuilding() || h.element.R1() || this.Wu(h, !0), !n && h.hasBeenMeasured() && 1 != h.getState() || s++, h.isMeasureRequested() && u++
                    }
                    if (s > 0 || u > 0 || n || -1 != r || i.length > 0)
                        for (var a = 0; a < this.si.length; a++) {
                            var c = this.si[a];
                            if (!(c.hasOwner() && !c.isMeasureRequested() || c.element.R1())) {
                                var f = n || 1 == c.getState() || !c.hasBeenMeasured() || c.isMeasureRequested() || -1 != r && c.getLayoutBox().bottom >= r;
                                if (!f)
                                    for (var l = 0; l < i.length; l++)
                                        if (i[l].contains(c.element)) {
                                            f = !0;
                                            break
                                        }
                                f && (this.nh(c) || (e || (e = []), e.push(c)))
                            }
                        }
                    i.length = 0, e && this.rh(e);
                    var v, d = this.bo.getRect();
                    v = this.bu ? Hi(d, .25, 2) : d;
                    for (var m = this.bu ? Hi(d, .25, .25) : d, p = 0; p < this.si.length; p++) {
                        var g = this.si[p];
                        if (0 != g.getState() && !g.hasOwner() && !g.element.R1()) {
                            var b = this.bu && g.isDisplayed() && g.overlaps(m);
                            g.setInViewport(b)
                        }
                    }
                    if (v)
                        for (var y = 0; y < this.si.length; y++) {
                            var w = this.si[y];
                            w.isBuilt() || w.isBuilding() || w.hasOwner() || w.element.R1() || !w.hasBeenMeasured() || !w.isDisplayed() || !w.overlaps(v) || this.Wu(w, !0, !0), 2 != w.getState() || w.hasOwner() || w.isDisplayed() && w.overlaps(v) && this.scheduleLayoutOrPreload(w, !0)
                        }
                    if (this.bu && this.sh(t)) {
                        for (var A = 0, x = 0; x < this.si.length && A < 4; x++) {
                            var E = this.si[x];
                            2 == E.getState() && !E.hasOwner() && !E.element.R1() && E.isDisplayed() && E.idleRenderOutsideViewport() && (Qt().fine(Nh, "idleRenderOutsideViewport layout:", E.debugid), this.scheduleLayoutOrPreload(E, !1), A++)
                        }
                        for (var P = 0; P < this.si.length && A < 4; P++) {
                            var O = this.si[P];
                            2 != O.getState() || O.hasOwner() || O.element.R1() || !O.isDisplayed() || (Qt().fine(Nh, "idle layout:", O.debugid), this.scheduleLayoutOrPreload(O, !1), A++)
                        }
                    }
                }, i.sh = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
                        i = this.Iu.getLastDequeueTime();
                    return 0 == this.Iu.getSize() && 0 == this.Hi.getSize() && t > i + 5e3 && i > 0
                }, i.oh = function() {
                    for (var t = this.win.Date.now(), i = -1, n = this.Hi.peek(this.Mu); n && (i = this.uh(n), Qt().fine(Nh, "peek from queue:", n.id, "sched at", n.scheduleTime, "score", this.Mu(n), "timeout", i), !(i > 16));) {
                        this.Hi.dequeue(n);
                        var r = this.Iu.getTaskById(n.id);
                        if (r) {
                            var e = this.hh.bind(this, n);
                            r.promise.then(e, e)
                        } else {
                            var s = n.resource;
                            s.measure(), this.ah(s, n.forceOutsideViewport) ? (n.promise = n.callback(), n.startTime = t, Qt().fine(Nh, "exec:", n.id, "at", n.startTime), this.Iu.enqueue(n), n.promise.then(this.fh.bind(this, n, !0), this.fh.bind(this, n, !1)).catch(Ds)) : (Qt().fine(Nh, "cancelled", n.id), s.layoutCanceled())
                        }
                        n = this.Hi.peek(this.Mu), i = -1
                    }
                    if (Qt().fine(Nh, "queue size:", this.Hi.getSize(), "exec size:", this.Iu.getSize()), i >= 0) return i;
                    var u = 2 * (t - this.Iu.getLastDequeueTime());
                    return Math.max(Math.min(3e4, u), 5e3)
                }, i.Su = function(t) {
                    var i = this.bo.getRect(),
                        n = t.resource.getLayoutBox(),
                        r = Math.floor((n.top - i.top) / i.height);
                    return Math.sign(r) != this.getScrollDirection() && (r *= 2), r = Math.abs(r), 10 * t.priority + r
                }, i.uh = function(t) {
                    var i = this.win.Date.now();
                    if (0 == this.Iu.getSize()) {
                        if (-1 === this.Au) return 0;
                        var n = 1e3 * t.priority;
                        return Math.max(n - (i - this.Au), 0)
                    }
                    var r = 0;
                    return this.Iu.forEach((function(n) {
                        var e = Math.max(1e3 * (t.priority - n.priority), 0);
                        r = Math.max(r, e - (i - n.startTime))
                    })), r
                }, i.hh = function(t) {
                    this.Hi.getTaskById(t.id) || this.Hi.enqueue(t)
                }, i.fh = function(t, i, n) {
                    if (this.Iu.dequeue(t), this.schedulePass(1e3), !i) return Qt().info(Nh, "task failed:", t.id, t.resource.debugid, n), Promise.reject(n)
                }, i.ah = function(t, i) {
                    if (0 == t.getState() || !t.isDisplayed()) return !1;
                    var n = this.ampdoc.getVisibilityState(),
                        r = n == gr && t.prerenderAllowed(),
                        e = n == br && t.previewAllowed();
                    return !!(this.bu || r || e) && !!(i || t.isInViewport() || t.renderOutsideViewport() || t.idleRenderOutsideViewport())
                }, i.scheduleLayoutOrPreload = function(t, i, n, r) {
                    if (!t.element.R1()) {
                        var e = 0 != t.getState(),
                            s = t.isDisplayed();
                        e && s || Zt(!1);
                        var u = r || !1;
                        this.ah(t, u) && (i ? this.Er(t, "L", 0, n || 0, u, t.startLayout.bind(t)) : this.Er(t, "P", 2, n || 0, u, t.startLayout.bind(t)))
                    }
                }, i.Er = function(t, i, n, r, e, s) {
                    var u = t.getTaskId(i),
                        o = {
                            id: u,
                            resource: t,
                            priority: Math.max(t.getLayoutPriority(), r) + n,
                            forceOutsideViewport: e,
                            callback: s,
                            scheduleTime: this.win.Date.now(),
                            startTime: 0,
                            promise: null
                        };
                    Qt().fine(Nh, "schedule:", o.id, "at", o.scheduleTime);
                    var h = this.Hi.getTaskById(u);
                    (!h || o.priority < h.priority) && (h && this.Hi.dequeue(h), this.Hi.enqueue(o), this.schedulePass(this.uh(o))), o.resource.layoutScheduled(o.scheduleTime)
                }, i.whenFirstPass = function() {
                    return this.Uu.promise
                }, i.Hu = function(t) {
                    var i = this,
                        n = wr,
                        r = xr,
                        e = Ar,
                        s = gr,
                        u = br,
                        o = yr,
                        h = function() {
                            var t = i.bo.getSize();
                            if (t.height > 0 && t.width > 0) {
                                i.Zu() && i.th(), i.eh();
                                var n = i.oh();
                                i.Zu() && (n = Math.min(n, 500)), i.bu ? i.schedulePass(n) ? Qt().fine(Nh, "next pass:", n) : Qt().fine(Nh, "pass already scheduled") : Qt().fine(Nh, "document is not visible: no scheduling"), i.Uu.resolve()
                            }
                        },
                        a = function() {},
                        c = function() {
                            i.si.forEach((function(t) {
                                return t.pause()
                            }))
                        },
                        f = function() {
                            i.si.forEach((function(t) {
                                t.unload(), i.Ju(t)
                            })), i.lh()
                        },
                        l = function() {
                            i.si.forEach((function(t) {
                                return t.resume()
                            })), h()
                        };
                    t.addTransition(s, s, h), t.addTransition(s, u, h), t.addTransition(s, o, h), t.addTransition(s, n, h), t.addTransition(s, r, h), t.addTransition(s, e, h), t.addTransition(u, u, h), t.addTransition(u, o, h), t.addTransition(u, n, h), t.addTransition(u, r, h), t.addTransition(u, e, h), t.addTransition(o, o, h), t.addTransition(o, n, h), t.addTransition(o, r, f), t.addTransition(o, e, c), t.addTransition(n, o, h), t.addTransition(n, n, h), t.addTransition(n, r, f), t.addTransition(n, e, c), t.addTransition(r, o, l), t.addTransition(r, n, l), t.addTransition(r, r, a), t.addTransition(r, e, h), t.addTransition(e, o, l), t.addTransition(e, n, h), t.addTransition(e, r, f), t.addTransition(e, e, a)
                }, i.lh = function() {
                    try {
                        this.win.getSelection().removeAllRanges()
                    } catch (t) {}
                }, i.Ju = function(t, i) {
                    if (1 != t.getState() && 2 != t.getState() || (this.Hi.purge((function(i) {
                            return i.resource == t
                        })), this.Iu.purge((function(i) {
                            return i.resource == t
                        })), q(this.ku, (function(i) {
                            return i.resource === t
                        }))), 0 == t.getState() && i && this._u) {
                        var n = this._u.indexOf(t); - 1 != n && this._u.splice(n, 1)
                    }
                }, i.Fu = function(t) {
                    var i = t.target;
                    if (i.nodeType === Node.ELEMENT_NODE && i !== this.bo.getScrollingElement()) {
                        var n = i;
                        this.zu.includes(n) || (this.zu.push(n), this.schedulePass(70))
                    }
                }, t
            }();

        function jh(t) {
            return t.queryCommandSupported("copy")
        }

        function Uh(t) {
            return t.hasAttribute("hidden")
        }
        var Lh = "STANDARD-ACTIONS",
            zh = /^i-amphtml-/,
            Hh = function() {
                function t(t) {
                    this.ampdoc = t;
                    var i = t.getHeadNode();
                    this.dh = rr(t), this.bo = mr(t), this.mh(Bn(i)), this.ph()
                }
                var i = t.prototype;
                return i.mh = function(t) {
                    t.addGlobalTarget("AMP", this.bh.bind(this)), t.addGlobalMethodHandler("hide", this.gh.bind(this)), t.addGlobalMethodHandler("show", this.yh.bind(this)), t.addGlobalMethodHandler("toggleVisibility", this.wh.bind(this)), t.addGlobalMethodHandler("scrollTo", this.Ah.bind(this)), t.addGlobalMethodHandler("focus", this.xh.bind(this)), t.addGlobalMethodHandler("toggleClass", this.Eh.bind(this)), t.addGlobalMethodHandler("copy", this.Oh.bind(this)), t.addGlobalMethodHandler("toggleChecked", this.Ph.bind(this))
                }, i.ph = function() {
                    this.Th() && this.ampdoc.waitForBodyOpen().then((function(t) {
                        var i = t.getAttribute("data-prefers-dark-mode-class") || "amp-dark-mode";
                        t.classList.add(i)
                    }))
                }, i.Th = function() {
                    var t, i;
                    try {
                        var n = this.ampdoc.win.localStorage.getItem("amp-dark-mode");
                        if (n) return "yes" === n
                    } catch (t) {}
                    return null === (t = (i = this.ampdoc.win).matchMedia) || void 0 === t ? void 0 : t.call(i, "(prefers-color-scheme: dark)").matches
                }, i.bh = function(t) {
                    if (!t.satisfiesTrust(2)) return null;
                    var i = t.args,
                        n = t.method,
                        r = t.node,
                        e = oi(r);
                    switch (n) {
                        case "pushState":
                        case "setState":
                            var s = r.nodeType === Node.DOCUMENT_NODE ? r.documentElement : r;
                            return Jn(s).then((function(i) {
                                return ti(i, "AMP-BIND is not installed."), i.invoke(t)
                            }));
                        case "navigateTo":
                            return this.Ih(t);
                        case "closeOrNavigateTo":
                            return this.Mh(t);
                        case "scrollTo":
                            return ti(i.id, "AMP.scrollTo must provide element ID"), t.node = Rn(r).getElementById(i.id), this.Ah(t);
                        case "goBack":
                            return ir(this.ampdoc).goBack(!(!i || !0 !== i.navigate)), null;
                        case "print":
                            return e.print(), null;
                        case "copy":
                            return this.Oh(t);
                        case "optoutOfCid":
                            return Xn(this.ampdoc).then((function(t) {
                                return t.optOut()
                            })).catch((function(t) {
                                Qt().error(Lh, "Failed to opt out of CID", t)
                            }));
                        case "toggleTheme":
                            return this.Sh(), null
                    }
                    throw Jt().createError("Unknown AMP action ", n)
                }, i.Oh = function(t) {
                    var i, n = t.args,
                        r = oi(t.node),
                        e = "copy-error";
                    if ("AMP" === t.tagOrTarget) i = n.text.trim();
                    else {
                        var s, u = st(t.node);
                        i = (null !== (s = u.value) && void 0 !== s ? s : u.textContent).trim()
                    }
                    var o, h, a, c = function(t, i, n) {
                        var e = {
                                data: {
                                    type: i
                                }
                            },
                            s = We(r, "".concat(t), e);
                        Bn(n.caller).trigger(n.caller, t, s, 3)
                    };
                    null !== (h = (o = r.document).defaultView) && void 0 !== h && null !== (a = h.navigator) && void 0 !== a && a.clipboard || jh(o) ? function(t, i, n, r) {
                        var e;
                        null !== (e = t.navigator) && void 0 !== e && e.clipboard ? t.navigator.clipboard.writeText(i).then(n, r) : jh(t.document) && function(t, i) {
                            var n, r = !1,
                                e = t.document,
                                s = e.createElement("textarea");
                            _r(s, {
                                "position": "fixed",
                                "top": 0,
                                "left": 0,
                                "width": "50px",
                                "height": "50px",
                                "padding": 0,
                                "border": "none",
                                "outline": "none",
                                "background": "transparent"
                            }), s.value = i, s.readOnly = !0, s.contentEditable = "true", e.body.appendChild(s), null === (n = t.getSelection()) || void 0 === n || n.removeAllRanges(), s.focus(), s.setSelectionRange(0, i.length);
                            try {
                                r = e.execCommand("copy")
                            } catch (t) {}
                            return Ti(s), r
                        }(t, i) ? n() : r()
                    }(r, i, (function() {
                        c("copy-success", "success", t)
                    }), (function() {
                        c(e, "error", t)
                    })) : c(e, "unsupported", t)
                }, i.Ih = function(t) {
                    var i = this,
                        n = t.args,
                        r = t.caller,
                        e = t.method,
                        s = oi(t.node),
                        u = h();
                    return r.tagName.startsWith("AMP-") && (u = r.getImpl().then((function(t) {
                        "function" == typeof t.throwIfCannotNavigate && t.throwIfCannotNavigate()
                    }))), u.then((function() {
                        var t;
                        (t = i.ampdoc, Pn(t, "navigation")).navigateTo(s, n.url, "AMP.".concat(e), {
                            target: n.target,
                            opener: n.opener
                        })
                    }), (function(t) {
                        Jt().error(Lh, t)
                    }))
                }, i.Sh = function() {
                    var t = this;
                    this.ampdoc.waitForBodyOpen().then((function(i) {
                        try {
                            var n = i.getAttribute("data-prefers-dark-mode-class") || "amp-dark-mode";
                            t.Th() ? (i.classList.remove(n), t.ampdoc.win.localStorage.setItem("amp-dark-mode", "no")) : (i.classList.add(n), t.ampdoc.win.localStorage.setItem("amp-dark-mode", "yes"))
                        } catch (t) {}
                    }))
                }, i.Mh = function(t) {
                    var i = oi(t.node),
                        n = i.parent != i,
                        r = !1;
                    return i.opener && this.ampdoc.isSingleDoc() && !n && (i.close(), r = i.closed), r ? h() : this.Ih(t)
                }, i.Ah = function(t) {
                    var i = t.node,
                        n = t.args,
                        r = n && n.position,
                        e = n && n.duration;
                    return r && !["top", "bottom", "center"].includes(r) && (r = void 0), J(e) || (e = void 0), this.bo.animateScrollIntoView(i, r, e)
                }, i.xh = function(t) {
                    return Ci(t.node), null
                }, i.gh = function(t) {
                    var i = t.node;
                    if (i.classList.contains("i-amphtml-element")) {
                        var n = i;
                        this.dh.mutateElement(n, (function() {
                            return n.collapse()
                        }), !0)
                    } else this.dh.mutateElement(i, (function() {
                        return kr(i, !1)
                    }));
                    return null
                }, i.yh = function(t) {
                    var i = this,
                        n = t.node,
                        r = oi(n);
                    if (n.classList.contains(ae(Qr))) return Jt().warn(Lh, "Elements with layout=nodisplay cannot be dynamically shown.", n), null;
                    this.dh.measureElement((function() {
                        "none" != Nr(r, n).display || Uh(n) || Jt().warn(Lh, 'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.', n)
                    }));
                    var e, s = (e = n).hasAttribute("autofocus") ? e : e.querySelector("[autofocus]");
                    return s && sr(r).isIos() ? (this.kh(n, s), this.dh.mutateElement(n, (function() {}))) : this.dh.mutateElement(n, (function() {
                        i.kh(n, s)
                    })), null
                }, i.kh = function(t, i) {
                    t.classList.contains("i-amphtml-element") ? t.expand() : kr(t, !0), i && Ci(i)
                }, i.wh = function(t) {
                    return Uh(t.node) ? this.yh(t) : this.gh(t)
                }, i.Eh = function(t) {
                    var i = t.node,
                        n = t.args,
                        r = Jt().assertString(n.class, "Argument 'class' must be a string.");
                    return zh.test(r) || this.dh.mutateElement(i, (function() {
                        if (void 0 !== n.force) {
                            var t = Jt().assertBoolean(n.force, "Optional argument 'force' must be a boolean.");
                            i.classList.toggle(r, t)
                        } else i.classList.toggle(r)
                    })), null
                }, i.Ph = function(t) {
                    var i = t.node,
                        n = t.args;
                    return this.dh.mutateElement(i, (function() {
                        if (void 0 !== n.force) {
                            var t = Jt().assertBoolean(n.force, "Optional argument 'force' must be a boolean.");
                            i.checked = t
                        } else !0 === i.checked ? i.checked = !1 : i.checked = !0
                    })), null
                }, t
            }(),
            Gh = "Storage",
            Vh = function() {
                function t(t, i, n) {
                    this.ampdoc = t, this.Ze = i, this.Ss = n, this._h = n instanceof Bh, this.i = Ms(this.ampdoc.win.location), this.Rh = null
                }
                var i = t.prototype;
                return i.Nh = function() {
                    return this.Ch(), this
                }, i.get = function(t, i) {
                    return this.Dh().then((function(n) {
                        return n.get(t, i)
                    }))
                }, i.set = function(t, i, n) {
                    return Zt("boolean" == typeof i), this.setNonBoolean(t, i, n)
                }, i.setNonBoolean = function(t, i, n) {
                    return this.jh((function(r) {
                        return r.set(t, i, n)
                    }))
                }, i.remove = function(t) {
                    return this.jh((function(i) {
                        return i.remove(t)
                    }))
                }, i.isViewerStorage = function() {
                    return this._h
                }, i.Dh = function() {
                    return this.Rh || (this.Rh = this.Ss.loadBlob(this.i).then((function(t) {
                        return t ? at(atob(t)) : {}
                    })).catch((function(t) {
                        return Qt().expectedError(Gh, "Failed to load store: ", t), {}
                    })).then((function(t) {
                        return new Fh(t)
                    }))), this.Rh
                }, i.jh = function(t) {
                    var i = this;
                    return this.Dh().then((function(n) {
                        t(n);
                        var r = btoa(JSON.stringify(n.obj));
                        return i.Ss.saveBlob(i.i, r)
                    })).then(this.zh.bind(this))
                }, i.Ch = function() {
                    var t = this;
                    this.Ze.onBroadcast((function(i) {
                        "amp-storage-reset" == i.type && i.origin == t.i && (Qt().fine(Gh, "Received reset message"), t.Rh = null)
                    }))
                }, i.zh = function() {
                    Qt().fine(Gh, "Broadcasted reset message"), this.Ze.broadcast({
                        "type": "amp-storage-reset",
                        "origin": this.i
                    })
                }, t
            }(),
            Fh = function() {
                function t(t, i) {
                    this.obj = E(t), this.Uh = i || 8, this.Lh = this.obj.vv || Object.create(null), this.obj.vv || (this.obj.vv = this.Lh)
                }
                var i = t.prototype;
                return i.get = function(t, i) {
                    var n = this.Lh[t],
                        r = n ? n.t : void 0,
                        e = !i || null == r || r + i > Date.now();
                    return n && e ? n.v : void 0
                }, i.set = function(t, i, n) {
                    if (Zt("__proto__" != t && "prototype" != t), void 0 !== this.Lh[t]) {
                        var r = this.Lh[t],
                            e = Date.now();
                        n && (e = r.t), r.v = i, r.t = e
                    } else this.Lh[t] = {
                        "v": i,
                        "t": Date.now()
                    };
                    var s = Object.keys(this.Lh);
                    if (s.length > this.Uh) {
                        for (var u = 1 / 0, o = null, h = 0; h < s.length; h++) {
                            var a = this.Lh[s[h]];
                            a.t < u && (o = s[h], u = a.t)
                        }
                        o && delete this.Lh[o]
                    }
                }, i.remove = function(t) {
                    delete this.Lh[t]
                }, t
            }(),
            qh = function() {
                function t(t) {
                    if (this.win = t, this.Hh = this.Gh(), !this.Hh) {
                        var i = new Error("localStorage not supported.");
                        Qt().expectedError(Gh, i)
                    }
                }
                var i = t.prototype;
                return i.Gh = function() {
                    try {
                        return "localStorage" in this.win && (this.win.localStorage.getItem("test"), !0)
                    } catch (t) {
                        return !1
                    }
                }, i.Vh = function(t) {
                    return "amp-store:".concat(t)
                }, i.loadBlob = function(t) {
                    var i = this;
                    return new Promise((function(n) {
                        i.Hh ? n(i.win.localStorage.getItem(i.Vh(t))) : n(null)
                    }))
                }, i.saveBlob = function(t, i) {
                    var n = this;
                    return new Promise((function(r) {
                        n.Hh ? (n.win.localStorage.setItem(n.Vh(t), i), r()) : r()
                    }))
                }, t
            }(),
            Bh = function() {
                function t(t) {
                    this.Ze = t
                }
                var i = t.prototype;
                return i.loadBlob = function(t) {
                    return this.Ze.sendMessageAwaitResponse("loadStore", {
                        "origin": t
                    }).then((function(t) {
                        return t.blob
                    }))
                }, i.saveBlob = function(t, i) {
                    return this.Ze.sendMessageAwaitResponse("saveStore", {
                        "origin": t,
                        "blob": i
                    }).catch((function(t) {
                        throw Qt().createExpectedError(Gh, "Failed to save store: ", t)
                    }))
                }, t
            }(),
            $h = "__AMP_IMPL_",
            Wh = function() {},
            Yh = function() {
                function t(t) {
                    this.Ii = t, this.Fh = {}, this.Bh = {}
                }
                var i = t.prototype;
                return i.whenReady = function(t) {
                    return this.qh(t).then(Wh)
                }, i.setHtmlForTemplate = function(t, i) {
                    var n = this;
                    return this.qh(t).then((function(t) {
                        return n.Wh(t, i)
                    }))
                }, i.renderTemplate = function(t, i) {
                    var n = this;
                    return this.qh(t).then((function(t) {
                        return n.$h(t, i)
                    }))
                }, i.renderTemplateAsString = function(t, i) {
                    return this.qh(t).then((function(t) {
                        return t.renderAsString(i)
                    }))
                }, i.getTemplateRenderer = function(t) {
                    return this.qh(t).then((function(t) {
                        return {
                            renderAsString: function(i) {
                                return t.renderAsString(i)
                            }
                        }
                    }))
                }, i.renderTemplateArray = function(t, i) {
                    var n = this;
                    return 0 == i.length ? Promise.resolve([]) : this.qh(t).then((function(t) {
                        return i.map((function(i) {
                            return n.$h(t, i)
                        }))
                    }))
                }, i.findAndRenderTemplate = function(t, i, n) {
                    return this.renderTemplate(this.findTemplate(t, n), i)
                }, i.findAndSetHtmlForTemplate = function(t, i, n) {
                    return this.setHtmlForTemplate(this.findTemplate(t, n), i)
                }, i.findAndRenderTemplateArray = function(t, i, n) {
                    return this.renderTemplateArray(this.findTemplate(t, n), i)
                }, i.hasTemplate = function(t, i) {
                    return !!this.maybeFindTemplate(t, i)
                }, i.findTemplate = function(t, i) {
                    var n = this.maybeFindTemplate(t, i);
                    ti(n, "Template not found for %s", t);
                    var r = n.tagName;
                    return ti("TEMPLATE" == r || "SCRIPT" == r && "text/plain" === n.getAttribute("type"), 'Template must be defined in a <template> or <script type="text/plain"> tag'), n
                }, i.maybeFindTemplate = function(t, i) {
                    var n = t.getAttribute("template");
                    return n ? _i(t).getElementById(n) : i ? pi(t, i) : t.querySelector('template[type], script[type="text/plain"]')
                }, i.qh = function(t) {
                    var i = this,
                        n = t[$h];
                    if (n) return Promise.resolve(n);
                    var r = "",
                        e = t.tagName;
                    "TEMPLATE" == e ? r = t.getAttribute("type") : "SCRIPT" == e && (r = t.getAttribute("template")), ti(r, "Type must be specified: %s", t);
                    var s = t.__AMP_WAIT_;
                    return s || (s = this.Kh(t, r).then((function(n) {
                        var r = n,
                            e = t[$h] = new r(t, i.Ii.win);
                        return delete t.__AMP_WAIT_, e
                    })), t.__AMP_WAIT_ = s, s)
                }, i.Kh = function(t, i) {
                    if (this.Fh[i]) return this.Fh[i];
                    var n = new a,
                        r = n.promise,
                        e = n.resolve;
                    return this.Fh[i] = r, this.Bh[i] = e, r
                }, i.Yh = function(t, i) {
                    if (this.Fh[t]) {
                        var n = this.Bh[t];
                        ti(n, "Duplicate template type: %s", t), delete this.Bh[t], n(i)
                    } else this.Fh[t] = Promise.resolve(i)
                }, i.$h = function(t, i) {
                    return t.render(i)
                }, i.Wh = function(t, i) {
                    return t.setHtml(i)
                }, t
            }(),
            Kh = function() {
                function t(t) {
                    this.win = t, this.Jh = this.win.Promise.resolve(), this.Xh = 0, this.Qh = {}, this.Zh = Date.now()
                }
                var i = t.prototype;
                return i.timeSinceStart = function() {
                    return Date.now() - this.Zh
                }, i.delay = function(t, i) {
                    var n = this;
                    if (!i) {
                        var r = "p" + this.Xh++;
                        return this.Jh.then((function() {
                            n.Qh[r] ? delete n.Qh[r] : t()
                        })).catch(Ds), r
                    }
                    return this.win.setTimeout((function() {
                        try {
                            t()
                        } catch (t) {
                            throw Ds(t), t
                        }
                    }), i)
                }, i.cancel = function(t) {
                    "string" != typeof t ? this.win.clearTimeout(t) : this.Qh[t] = !0
                }, i.promise = function(t) {
                    var i = this;
                    return new this.win.Promise((function(n) {
                        if (-1 == i.delay(n, t)) throw new Error("Failed to schedule timer.")
                    }))
                }, i.timeoutPromise = function(t, i, n) {
                    var r, e = this,
                        s = new this.win.Promise((function(i, s) {
                            if (-1 == (r = e.delay((function() {
                                    s(Jt().createError(n || "timeout"))
                                }), t))) throw new Error("Failed to schedule timer.")
                        }));
                    if (!i) return s;
                    var u = function() {
                        e.cancel(r)
                    };
                    return i.then(u, u), this.win.Promise.race([s, i])
                }, i.poll = function(t, i) {
                    var n = this;
                    return new this.win.Promise((function(r) {
                        var e = n.win.setInterval((function() {
                            i() && (n.win.clearInterval(e), r())
                        }), t)
                    }))
                }, t
            }();

        function Jh(t) {
            An(t, "timer", Kh)
        }
        var Xh = function() {
                function t(t) {
                    var i = t.getRootNode(),
                        n = i.ownerDocument || i;
                    this.ta = n.createElement("a"), this.yr = new as(100)
                }
                var i = t.prototype;
                return i.parse = function(t, i) {
                    return ds(this.ta, t, i ? null : this.yr)
                }, i.ia = function(t) {
                    return "string" != typeof t ? t : this.parse(t)
                }, i.isProtocolValid = function(t) {
                    return Es(t)
                }, i.getSourceOrigin = function(t) {
                    return Ms(this.ia(t))
                }, i.getSourceUrl = function(t) {
                    return Is(this.ia(t))
                }, i.resolveRelativeUrl = function(t, i) {
                    return Ts(t, this.ia(i))
                }, i.assertHttpsUrl = function(t, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "source";
                    return ws(t, i, n)
                }, i.assertAbsoluteHttpOrHttpsUrl = function(t) {
                    return function(t) {
                        return ti(/^https?\:/i.test(t), 'URL must start with "http://" or "https://". Invalid value: %s', t), vs(t).href
                    }(t)
                }, i.isProxyOrigin = function(t) {
                    return xs(this.ia(t))
                }, i.isSecure = function(t) {
                    return ys(this.ia(t))
                }, i.getWinOrigin = function(t) {
                    return t.origin || this.ia(t.location.href).origin
                }, i.getCdnUrlOnOrigin = function(t) {
                    if (xs(t)) return t;
                    var i = this.ia(t),
                        n = i.hash,
                        r = i.host,
                        e = i.pathname,
                        s = i.search,
                        u = encodeURIComponent(r);
                    return "".concat(Mt, "/c/").concat(u).concat(e).concat(s).concat(n)
                }, t
            }(),
            Qh = "Expander",
            Zh = function() {
                function t(t, i, n, r, e, s) {
                    this.na = t, this.ra = i, this.ea = n, this.sa = r, this.Ce = e, this.oa = !s
                }
                var i = t.prototype;
                return i.expand = function(t) {
                    if (!t.length) return this.sa ? t : Promise.resolve(t);
                    var i = this.na.getExpr(this.ra, this.Ce),
                        n = this.ua(t, i);
                    return n.length ? this.ha(t, n) : this.sa ? t : Promise.resolve(t)
                }, i.getMacroNames = function(t) {
                    var i = this.na.getExpr(this.ra, this.Ce);
                    return t.match(i) || []
                }, i.ua = function(t, i) {
                    var n = [];
                    return t.replace(i, (function(t, i, r) {
                        var e = t.length,
                            s = {
                                start: r,
                                stop: e + r - 1,
                                name: i,
                                length: e
                            };
                        n.push(s)
                    })), n
                }, i.ha = function(t, i) {
                    var n = this,
                        r = [],
                        e = 0,
                        s = 0,
                        u = i[s],
                        o = 0,
                        h = !1;
                    return function a(c) {
                        for (var f, l = "", v = [], m = []; e < t.length && s <= i.length;) {
                            var p, g = l.trim();
                            if (u && e === u.start) g && v.push(o ? (f = l).trimStart ? f.trimStart() : (f + "_").trim().slice(0, -1) : l), p = n.ra && x(n.ra, u.name) ? {
                                name: u.name,
                                prioritized: n.ra[u.name],
                                encode: c
                            } : D(D({}, n.na.get(u.name)), {}, {
                                name: u.name,
                                encode: c
                            }), e = u.stop + 1, u = i[++s], "(" === t[e] ? (e++, o++, r.push(p), v.push(a(!1))) : v.push(n.aa(p)), l = "";
                            else if ("`" === t[e]) h ? (h = !1, l.length && v.push(l)) : (h = !0, g && v.push(g)), l = "", e++;
                            else if (o && "," === t[e] && !h) g && v.push(g), m.push(v), v = [], "," === t[e + 1] && (m.push([""]), e++), l = "", e++;
                            else {
                                if (o && ")" === t[e] && !h) {
                                    e++, o--;
                                    var b = r.pop();
                                    return g && v.push(g), m.push(v), n.aa(b, m)
                                }
                                l += t[e], e++
                            }
                            e === t.length && l.length && v.push(l)
                        }
                        return n.sa ? v.join("") : Promise.all(v).then((function(t) {
                            return t.join("")
                        })).catch((function(t) {
                            return d(t), ""
                        }))
                    }(this.oa)
                }, i.aa = function(t, i) {
                    var n, r = t.encode,
                        e = t.name;
                    if (null != t.prioritized ? n = t.prioritized : this.sa && null != t.sync ? n = t.sync : this.sa ? (Jt().error(Qh, "ignoring async replacement key: ", t.name), n = "") : n = t.async || t.sync, this.sa) {
                        var s = this.ca(n, e, i);
                        return r ? encodeURIComponent(s) : s
                    }
                    return this.fa(n, e, i).then((function(t) {
                        return r ? encodeURIComponent(t) : t
                    }))
                }, i.fa = function(t, i, n) {
                    var r, e = this;
                    try {
                        if ("function" == typeof t) {
                            var s = t;
                            r = n ? this.la(n).then((function(t) {
                                return s.apply(null, t)
                            })) : c(s)
                        } else r = Promise.resolve(t);
                        return r.then((function(t) {
                            return e.va(i, t, n), null == t ? "" : t
                        })).catch((function(t) {
                            return d(t), e.va(i, "", n), Promise.resolve("")
                        }))
                    } catch (t) {
                        return d(t), this.va(i, "", n), Promise.resolve("")
                    }
                }, i.la = function(t) {
                    return Promise.all(t.map((function(t) {
                        return Promise.all(t).then((function(t) {
                            return t.join("")
                        }))
                    })))
                }, i.ca = function(t, i, n) {
                    try {
                        var r, e = t;
                        return "function" == typeof t && (e = t.apply(null, this.da(n))), e && "function" == typeof e.then ? (Jt().error(Qh, "ignoring async macro resolution"), r = "") : "string" == typeof e || "number" == typeof e || "boolean" == typeof e ? (this.va(i, e, n), r = e.toString()) : (this.va(i, "", n), r = ""), r
                    } catch (t) {
                        return d(t), this.va(i, "", n), ""
                    }
                }, i.da = function(t) {
                    return t ? t.map((function(t) {
                        return t.join("")
                    })) : t
                }, i.va = function(t, i, n) {
                    if (this.ea) {
                        var r = "";
                        if (n) {
                            var e = n.filter((function(t) {
                                return "" !== t
                            })).join(",");
                            r = "(".concat(e, ")")
                        }
                        this.ea["".concat(t).concat(r)] = i || ""
                    }
                }, t
            }(),
            ta = {
                "navigationStart": 1,
                "redirectStart": 1,
                "redirectEnd": 1,
                "fetchStart": 1,
                "domainLookupStart": 1,
                "domainLookupEnd": 1,
                "connectStart": 1,
                "secureConnectionStart": 1,
                "connectEnd": 1,
                "requestStart": 1,
                "responseStart": 1,
                "responseEnd": 1,
                "domLoading": 2,
                "domInteractive": 2,
                "domContentLoaded": 2,
                "domComplete": 2,
                "loadEventStart": 3,
                "loadEventEnd": 4
            };

        function ia(t, i, n) {
            var r, e = ta[i] || 3,
                s = n ? ta[n] || 3 : e,
                u = Math.max(e, s);
            if (1 === u) r = h();
            else if (2 === u) r = dn(t.document);
            else if (3 === u) r = Xe(t);
            else if (4 === u) {
                var o = ar(t);
                r = Xe(t).then((function() {
                    return o.promise(1)
                }))
            }
            return Zt(r), r.then((function() {
                return na(t, i, n)
            }))
        }

        function na(t, i, n) {
            var r = t.performance && t.performance.timing;
            if (r && 0 != r.navigationStart) {
                var e = void 0 === n ? r[i] : r[n] - r[i];
                return !J(e) || e < 0 ? void 0 : e
            }
        }

        function ra(t, i) {
            var n = t.performance && t.performance.navigation;
            if (n && void 0 !== n[i]) return n[i]
        }
        var ea = "UrlReplacements";

        function sa(t) {
            return function() {
                return (new Date)[t]()
            }
        }

        function ua(t, i) {
            return function() {
                return t[i]
            }
        }

        function oa(t, i) {
            return i ? (ti("ISOCountry" === i, "The value passed to AMP_GEO() is not valid name:" + i), t && t[i] || "unknown") : (null == t ? void 0 : t.matchedISOCountryGroups.join(",")) || "unknown"
        }
        var ha = function(t) {
                U(n, t);
                var i = H(n);

                function n(t) {
                    var n;
                    return (n = i.call(this, t)).ma = null, n.pa = {}, n
                }
                var r = n.prototype;
                return r.ba = function(t, i, n) {
                    var r = this;
                    return this.setBoth(t, (function() {
                        return na(r.ampdoc.win, i, n)
                    }), (function() {
                        return ia(r.ampdoc.win, i, n)
                    }))
                }, r.initialize = function() {
                    var t = this,
                        i = this.ampdoc.win,
                        n = this.ampdoc.getHeadNode(),
                        r = mr(this.ampdoc);
                    fr(this.ampdoc).then((function(i) {
                        t.ma = i
                    })), this.set("RANDOM", (function() {
                        return Math.random()
                    }));
                    var e = Object.create(null);
                    this.set("COUNTER", (function(t) {
                        return e[t] = 1 + (0 | e[t])
                    })), this.set("CANONICAL_URL", (function() {
                        return t.ga().canonicalUrl
                    })), this.set("CANONICAL_HOST", (function() {
                        return vs(t.ga().canonicalUrl).host
                    })), this.set("CANONICAL_HOSTNAME", (function() {
                        return vs(t.ga().canonicalUrl).hostname
                    })), this.set("CANONICAL_PATH", (function() {
                        return vs(t.ga().canonicalUrl).pathname
                    })), this.setAsync("DOCUMENT_REFERRER", (function() {
                        return vr(t.ampdoc).getReferrerUrl()
                    })), this.setAsync("EXTERNAL_REFERRER", (function() {
                        return vr(t.ampdoc).getReferrerUrl().then((function(t) {
                            return t ? vs(Is(t)).hostname === zr.getHostname(i) ? null : t : null
                        }))
                    })), this.set("TITLE", (function() {
                        var t = i.document;
                        return t.originalTitle || t.title
                    })), this.set("AMPDOC_URL", (function() {
                        return As(t.ya(i.location.href))
                    })), this.set("AMPDOC_HOST", (function() {
                        var t = vs(i.location.href);
                        return t && t.host
                    })), this.set("AMPDOC_HOSTNAME", (function() {
                        var t = vs(i.location.href);
                        return t && t.hostname
                    }));
                    var s = function() {
                        var i = t.ga();
                        return As(t.ya(i.sourceUrl))
                    };
                    this.setBoth("SOURCE_URL", (function() {
                        return s()
                    }), (function() {
                        return bh().then((function() {
                            return s()
                        }))
                    })), this.set("SOURCE_HOST", (function() {
                        return vs(t.ga().sourceUrl).host
                    })), this.set("SOURCE_HOSTNAME", (function() {
                        return vs(t.ga().sourceUrl).hostname
                    })), this.set("SOURCE_PATH", (function() {
                        return vs(t.ga().sourceUrl).pathname
                    })), this.set("PAGE_VIEW_ID", (function() {
                        return t.ga().pageViewId
                    })), this.setAsync("PAGE_VIEW_ID_64", (function() {
                        return t.ga().pageViewId64
                    })), this.setBoth("QUERY_PARAM", (function(i) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return t.wa(i, n)
                    }), (function(i) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return bh().then((function() {
                            return t.wa(i, n)
                        }))
                    })), this.set("FRAGMENT_PARAM", (function(i) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return t.Aa(i, n)
                    }));
                    var u = null;
                    this.setBoth("CLIENT_ID", (function(t) {
                        return u ? u[t] : null
                    }), (function(i, r, e, s) {
                        ti(i, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
                        var o = h();
                        return r && (o = function(t) {
                            return Hn(t, "userNotificationManager", "amp-user-notification")
                        }(n).then((function(t) {
                            return t.get(r)
                        }))), Xn(t.ampdoc).then((function(t) {
                            return s = "true" == s, t.get({
                                scope: i,
                                createCookieIfNotPresent: !0,
                                cookieName: e || void 0,
                                disableBackup: s
                            }, o)
                        })).then((function(t) {
                            return u || (u = Object.create(null)), t && "_ga" == (e || i) && ("string" == typeof t ? t = t.replace(/^(GA1|1)\.[\d-]+\./, "") : Qt().error(ea, "non-string cid, what is it?", Object.keys(t))), u[i] = t, t
                        }))
                    })), this.setAsync("VARIANT", (function(i) {
                        return t.xa((function(t) {
                            var n = t[i];
                            return ti(void 0 !== n, "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" + i), null === n ? "none" : n
                        }), "VARIANT")
                    })), this.setAsync("VARIANTS", (function() {
                        return t.xa((function(t) {
                            var i = [];
                            for (var n in t) {
                                var r = t[n];
                                i.push(n + "." + (r || "none"))
                            }
                            return i.join("!")
                        }), "VARIANTS")
                    })), this.setBoth("AMP_GEO", (function(i) {
                        return oa(t.ma, i)
                    }), (function(i) {
                        return t.Ea((function(t) {
                            return oa(t, i)
                        }), "AMP_GEO")
                    })), this.set("TIMESTAMP", sa("getTime")), this.set("TIMESTAMP_ISO", sa("toISOString")), this.set("TIMEZONE", sa("getTimezoneOffset")), this.set("SCROLL_HEIGHT", (function() {
                        return r.getScrollHeight()
                    })), this.set("SCROLL_WIDTH", (function() {
                        return r.getScrollWidth()
                    })), this.set("VIEWPORT_HEIGHT", (function() {
                        return r.getHeight()
                    })), this.set("VIEWPORT_WIDTH", (function() {
                        return r.getWidth()
                    }));
                    var o = i.screen;
                    this.set("SCREEN_WIDTH", ua(o, "width")), this.set("SCREEN_HEIGHT", ua(o, "height")), this.set("AVAILABLE_SCREEN_HEIGHT", ua(o, "availHeight")), this.set("AVAILABLE_SCREEN_WIDTH", ua(o, "availWidth")), this.set("SCREEN_COLOR_DEPTH", ua(o, "colorDepth")), this.set("DOCUMENT_CHARSET", (function() {
                        var t = i.document;
                        return t.characterSet || t.charset
                    })), this.set("BROWSER_LANGUAGE", (function() {
                        var t = i.navigator;
                        return (t.language || t.userLanguage || t.browserLanguage || "").toLowerCase()
                    })), this.set("USER_AGENT", (function() {
                        return i.navigator.userAgent
                    })), this.setBoth("UACH", (function(i) {
                        var n;
                        return null !== (n = t.pa[i]) && void 0 !== n ? n : ""
                    }), (function(n) {
                        return t.Oa(n, i)
                    })), this.ba("PAGE_LOAD_TIME", "navigationStart", "loadEventStart"), this.ba("DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd"), this.ba("TCP_CONNECT_TIME", "connectStart", "connectEnd"), this.ba("SERVER_RESPONSE_TIME", "requestStart", "responseStart"), this.ba("PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd"), this.ba("REDIRECT_TIME", "navigationStart", "fetchStart"), this.ba("DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive"), this.ba("CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart"), this.setAsync("ACCESS_READER_ID", (function() {
                        return t.Pa((function(t) {
                            return t.getAccessReaderId()
                        }), "ACCESS_READER_ID")
                    })), this.setAsync("AUTHDATA", (function(i) {
                        return ti(i, "The first argument to AUTHDATA, the field, is required"), t.Pa((function(t) {
                            return t.getAuthdataField(i)
                        }), "AUTHDATA")
                    })), this.setAsync("VIEWER", (function() {
                        return vr(t.ampdoc).getViewerOrigin().then((function(t) {
                            return null == t ? "" : t
                        }))
                    })), this.setAsync("TOTAL_ENGAGED_TIME", (function() {
                        return $n(n).then((function(t) {
                            return t.getTotalEngagedTime()
                        }))
                    })), this.setAsync("INCREMENTAL_ENGAGED_TIME", (function(t, i) {
                        return $n(n).then((function(n) {
                            return n.getIncrementalEngagedTime(t, "false" !== i)
                        }))
                    })), this.set("NAV_TIMING", (function(t, n) {
                        return ti(t, "The first argument to NAV_TIMING, the start attribute name, is required"), na(i, t, n)
                    })), this.setAsync("NAV_TIMING", (function(t, n) {
                        return ti(t, "The first argument to NAV_TIMING, the start attribute name, is required"), ia(i, t, n)
                    })), this.set("NAV_TYPE", (function() {
                        return ra(i, "type")
                    })), this.set("NAV_REDIRECT_COUNT", (function() {
                        return ra(i, "redirectCount")
                    })), this.set("AMP_VERSION", (function() {
                        return "2205270638004"
                    })), this.set("BACKGROUND_STATE", (function() {
                        return t.ampdoc.isVisible() ? "0" : "1"
                    })), this.setAsync("VIDEO_STATE", (function(i, n) {
                        return (r = t.ampdoc, Pn(r, "video-manager")).getVideoStateProperty(i, n);
                        var r
                    })), this.setAsync("AMP_STATE", (function(i) {
                        var n = t.ampdoc.getRootNode(),
                            r = n.documentElement || n;
                        return Jn(r).then((function(t) {
                            return t && t.getStateValue(i) || ""
                        }))
                    }))
                }, r.ya = function(t) {
                    var i = this.ga().replaceParams;
                    return i ? function(t, i) {
                        for (var n = yt(vs(t).search), r = {}, e = Object.keys(i), s = 0; s < e.length; s++) x(n, e[s]) || (r[e[s]] = i[e[s]]);
                        return gs(t, r)
                    }(Ps(t), i) : t
                }, r.ga = function() {
                    return Zn(this.ampdoc)
                }, r.Pa = function(t, i) {
                    var n = this.ampdoc.getHeadNode();
                    return Promise.all([Fn(n), qn(n)]).then((function(n) {
                        var r = n[0],
                            e = n[1],
                            s = r || e;
                        return s ? r && e ? t(e) || t(r) : t(s) : (Jt().error(ea, "Access or subsciptions service is not installed to access: ", i), null)
                    }))
                }, r.wa = function(t, i) {
                    ti(t, "The first argument to QUERY_PARAM, the query string param is required");
                    var n = yt(vs(Ps(this.ampdoc.win.location.href)).search),
                        r = this.ga().replaceParams;
                    return void 0 !== n[t] ? n[t] : r && void 0 !== r[t] ? r[t] : i
                }, r.Aa = function(t, i) {
                    ti(t, "The first argument to FRAGMENT_PARAM, the fragment string param is required"), ti("string" == typeof t, "param should be a string");
                    var n = wt(this.ampdoc.win);
                    return void 0 === n[t] ? i : n[t]
                }, r.xa = function(t, i) {
                    return (n = this.ampdoc.getHeadNode(), Gn(n, "variant", "amp-experiment", !0)).then((function(t) {
                        return ti(t, "To use variable %s, amp-experiment should be configured", i), t.getVariants()
                    })).then((function(i) {
                        return t(i)
                    }));
                    var n
                }, r.Ea = function(t, i) {
                    var n = this;
                    return null !== this.ma ? t(this.ma) : fr(this.ampdoc.getHeadNode()).then((function(r) {
                        return ti(r, "To use variable %s, amp-geo should be configured", i), n.ma = r, t(r)
                    }))
                }, r.Oa = function(t, i) {
                    var n, r, e, s = this;
                    return t in this.pa ? Promise.resolve(this.pa[t]) : (null === (n = i.navigator) || void 0 === n || null === (r = n.userAgentData) || void 0 === r || null === (e = r.getHighEntropyValues([t])) || void 0 === e ? void 0 : e.then((function(i) {
                        var n = "object" !== p(i[t]) ? i[t] : JSON.stringify(i[t]);
                        return s.pa[t] = n, n
                    }))) || Promise.resolve("")
                }, n
            }(function() {
                function t(t) {
                    this.ampdoc = t, this.Ta = Object.create(null), this.Ia = !1, this.Ma()
                }
                var i = t.prototype;
                return i.pe = function() {
                    this.initialize(), this.Ia = !0
                }, i.initialize = function() {}, i.get = function(t) {
                    return this.Ia || this.pe(), this.Ta[t]
                }, i.set = function(t, i) {
                    return Zt(-1 == t.indexOf("RETURN")), this.Ta[t] = this.Ta[t] || {
                        sync: void 0,
                        async: void 0
                    }, this.Ta[t].sync = i, this
                }, i.setAsync = function(t, i) {
                    return Zt(-1 == t.indexOf("RETURN")), this.Ta[t] = this.Ta[t] || {
                        sync: void 0,
                        async: void 0
                    }, this.Ta[t].async = i, this
                }, i.setBoth = function(t, i, n) {
                    return this.set(t, i).setAsync(t, n)
                }, i.getExpr = function(t, i) {
                    this.Ia || this.pe();
                    var n = D(D({}, this.Ta), t);
                    return this.Sa(Object.keys(n), i)
                }, i.Sa = function(t, i) {
                    var n = this;
                    if (this.Ma() && (t = t.filter((function(t) {
                            return n.Ma().includes(t)
                        }))), i && (t = t.filter((function(t) {
                            return i[t]
                        }))), 0 === t.length) return /_^/g;
                    t.sort((function(t, i) {
                        return i.length - t.length
                    }));
                    var r = t.map((function(t) {
                        return "$" === t[0] ? "\\" + t : t
                    })).join("|");
                    return new RegExp("\\$?(" + r + ")", "g")
                }, i.Ma = function() {
                    return this.ka ? this.ka : this.ampdoc.isSingleDoc() && Du(this.ampdoc.getRootNode()) ? (this.ka = [""], this.ka) : void 0
                }, t
            }()),
            aa = function() {
                function t(t, i) {
                    this.ampdoc = t, this.na = i
                }
                var i = t.prototype;
                return i.expandStringSync = function(t, i, n) {
                    return new Zh(this.na, i, void 0, !0, n, !0).expand(t)
                }, i.expandStringAsync = function(t, i, n) {
                    return new Zh(this.na, i, void 0, void 0, n, !0).expand(t)
                }, i.expandUrlSync = function(t, i, n) {
                    return this._a(t, new Zh(this.na, i, void 0, !0, n).expand(t))
                }, i.expandUrlAsync = function(t, i, n, r) {
                    var e = this;
                    return new Zh(this.na, i, void 0, void 0, n, r).expand(t).then((function(i) {
                        return e._a(t, i)
                    }))
                }, i.expandInputValueAsync = function(t) {
                    return this.Ra(t, !1)
                }, i.expandInputValueSync = function(t) {
                    return this.Ra(t, !0)
                }, i.Ra = function(t, i) {
                    Zt("INPUT" == t.tagName && "hidden" == (t.getAttribute("type") || "").toLowerCase());
                    var n = this.Na(t);
                    if (!n) return i ? t.value : Promise.resolve(t.value);
                    void 0 === t["amp-original-value"] && (t["amp-original-value"] = t.value);
                    var r = new Zh(this.na, void 0, void 0, i, n).expand(t["amp-original-value"] || t.value);
                    return i ? t.value = r : r.then((function(i) {
                        return t.value = i, i
                    }))
                }, i.Na = function(t, i) {
                    var n = t.getAttribute("data-amp-replace");
                    if (n) {
                        var r = {};
                        return n.trim().split(/\s+/).forEach((function(t) {
                            !i || x(i, t) ? r[t] = !0 : Jt().warn("URL", "Ignoring unsupported replacement", t)
                        })), r
                    }
                }, i.Ca = function(t) {
                    var i = Zn(this.ampdoc);
                    if (t.origin == vs(i.canonicalUrl).origin || t.origin == vs(i.sourceUrl).origin) return !0;
                    var n = this.ampdoc.getMetaByName("amp-link-variable-allowed-origin");
                    if (n)
                        for (var r = n.trim().split(/\s+/), e = 0; e < r.length; e++)
                            if (t.origin == vs(r[e]).origin) return !0;
                    return !1
                }, i.maybeExpandLink = function(t, i) {
                    Zt("A" == t.tagName);
                    var n = t,
                        r = n.getAttribute("data-amp-addparams") || "",
                        e = this.Na(n, {
                            "CLIENT_ID": !0,
                            "QUERY_PARAM": !0,
                            "PAGE_VIEW_ID": !0,
                            "PAGE_VIEW_ID_64": !0,
                            "NAV_TIMING": !0
                        });
                    if (e || r || i) {
                        var s = n["amp-original-href"] || n.getAttribute("href"),
                            u = vs(s);
                        null == n["amp-original-href"] && (n["amp-original-href"] = s);
                        var o = this.Ca(u);
                        return r && (s = gs(s, yt(r = o ? this.Da(r, e) : r))), o ? (i && (e && e.QUERY_PARAM || (i = this.expandUrlSync(i, void 0, {
                            "QUERY_PARAM": !0
                        })), s = gs(s, yt(i))), s = this.Da(s, e), n.href = s) : (e && Jt().warn("URL", "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.", s), n.href = s)
                    }
                }, i.Da = function(t, i) {
                    return i ? this.expandUrlSync(t, void 0, i) : t
                }, i.collectVars = function(t, i) {
                    var n = Object.create(null);
                    return new Zh(this.na, i, n).expand(t).then((function() {
                        return n
                    }))
                }, i.collectDisallowedVarsSync = function(t) {
                    var i = t.getAttribute("src"),
                        n = new Zh(this.na).getMacroNames(i),
                        r = this.Na(t);
                    return r ? n.filter((function(t) {
                        return !r[t]
                    })) : n
                }, i._a = function(t, i) {
                    return vs(i, !0).protocol != vs(t, !0).protocol ? (Jt().error(ea, "Illegal replacement of the protocol: ", t), t) : (ti(Es(i), "The replacement url has invalid protocol: %s", i), i)
                }, i.getVariableSource = function() {
                    return this.na
                }, t
            }(),
            ca = "Viewer",
            fa = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i,
            la = function() {
                function t(t) {
                    var i = this;
                    this.ampdoc = t, this.win = t.win, this.So = Ni(this.win), this.fu = !0, this.ja = !1, this.za = A(), this.Ua = A(), this.La = new Er, this.Ha = new Er, this.Ga = null, this.Va = null, this.Fa = [], this.Ba = A(), this.qa = A(), t.isSingleDoc() && Object.assign(this.qa, yt(this.win.location.hash)), this.fu = !parseInt(t.getParam("off"), 10), Qt().fine(ca, "- runtimeOn:", this.fu), this.ja = !(!parseInt(t.getParam("history"), 10) && !this.ja), Qt().fine(ca, "- history:", this.ja), Qt().fine(ca, "- visibilityState:", this.ampdoc.getVisibilityState()), this.Wa = null, this.$a = xs(vs(this.ampdoc.win.location.href));
                    var n = new a;
                    this.Ka = n.resolve, this.Ya = this.Ja(n.promise), this.jo = null, this.Xa = null;
                    var r = t.getParam("referrer");
                    if (this.Qa = this.isEmbedded() && null != r && !1 !== this.Za() ? r : this.win.document.referrer, this.tc = new Promise((function(n) {
                            i.isEmbedded() && null != t.getParam("referrer") ? i.isTrustedViewer().then((function(r) {
                                r ? n(t.getParam("referrer")) : (n(i.win.document.referrer), i.Qa != i.win.document.referrer && (Qt().expectedError(ca, "Untrusted viewer referrer override: " + i.Qa + " at " + i.Va), i.Qa = i.win.document.referrer))
                            })) : n(i.win.document.referrer)
                        })), this.ic = As(this.win.location.href || ""), this.nc = new Promise((function(n) {
                            var r = t.getParam("viewerUrl");
                            i.isEmbedded() && r ? i.isTrustedViewer().then((function(t) {
                                t ? i.ic = Zt(r) : Qt().expectedError(ca, "Untrusted viewer url override: " + r + " at " + i.Va), n(i.ic)
                            })) : n(i.ic)
                        })), this.qa.click) {
                        var e = As(this.win.location.href);
                        e != this.win.location.href && this.win.history.replaceState && (this.win.location.originalHash || (this.win.location.originalHash = this.win.location.hash), this.win.history.replaceState({}, "", e), delete this.qa.click, Qt().fine(ca, "replace fragment:" + this.win.location.href))
                    }
                    this.ampdoc.whenFirstVisible().then((function() {
                        i.maybeUpdateFragmentForCct()
                    })), this.ampdoc.isSingleDoc() && this.rc()
                }
                var i = t.prototype;
                return i.Ja = function(t) {
                    if (!(this.So && !this.win.__AMP_TEST_IFRAME && (this.ampdoc.getParam("origin") || this.ampdoc.getParam("visibilityState") || -1 != this.win.location.search.indexOf("amp_js_v")) || this.isWebviewEmbedded() || this.isCctEmbedded()) && this.ampdoc.isSingleDoc()) return null;
                    var i = "initMessagingChannel timeout";
                    return ar(this.win).timeoutPromise(2e4, t, i).catch((function(t) {
                        var n = va(t);
                        throw n && W(n.message, i) && (n = Qt().createExpectedError(n)), Ds(n), n
                    }))
                }, i.getAmpDoc = function() {
                    return this.ampdoc
                }, i.getParam = function(t) {
                    return this.ampdoc.getParam(t)
                }, i.hasCapability = function(t) {
                    var i = this.ampdoc.getParam("cap");
                    return !!i && -1 != i.split(",").indexOf(t)
                }, i.isEmbedded = function() {
                    return !!this.Ya
                }, i.isWebviewEmbedded = function() {
                    return !this.So && "1" == this.ampdoc.getParam("webview")
                }, i.isCctEmbedded = function() {
                    if (null != this.Wa) return this.Wa;
                    if (this.Wa = !1, !this.So) {
                        var t = yt(this.win.location.search);
                        this.Wa = "1" === t.amp_gsa && (t.amp_js_v || "").startsWith("a")
                    }
                    return this.Wa
                }, i.isProxyOrigin = function() {
                    return this.$a
                }, i.maybeUpdateFragmentForCct = function() {
                    if (this.isCctEmbedded() && this.win.history.replaceState) {
                        var t = Ms(this.win.location.href),
                            i = Zn(this.ampdoc).canonicalUrl,
                            n = Ms(i);
                        this.ec(t, n) && (this.qa.ampshare = i, this.win.history.replaceState({}, "", "#" + bs(this.qa)))
                    }
                }, i.ec = function(t, i) {
                    var n = function(t) {
                        return t.split(".").length > 2 ? t.replace(fa, "$1") : t
                    };
                    return n(t) == n(i)
                }, i.isRuntimeOn = function() {
                    return this.fu
                }, i.toggleRuntime = function() {
                    this.fu = !this.fu, Qt().fine(ca, "Runtime state:", this.fu), this.La.fire(this.fu)
                }, i.onRuntimeState = function(t) {
                    return this.La.add(t)
                }, i.isOvertakeHistory = function() {
                    return this.ja
                }, i.getVisibilityState = function() {
                    return this.ampdoc.getVisibilityState()
                }, i.isVisible = function() {
                    return this.ampdoc.isVisible()
                }, i.hasBeenVisible = function() {
                    return this.ampdoc.hasBeenVisible()
                }, i.whenFirstVisible = function() {
                    return this.ampdoc.whenFirstVisible()
                }, i.whenNextVisible = function() {
                    return this.ampdoc.whenNextVisible()
                }, i.getFirstVisibleTime = function() {
                    return this.ampdoc.getFirstVisibleTime()
                }, i.getLastVisibleTime = function() {
                    return this.ampdoc.getLastVisibleTime()
                }, i.onVisibilityChanged = function(t) {
                    return this.ampdoc.onVisibilityChanged(t)
                }, i.sc = function(t) {
                    var i;
                    t && (Zt("prerender" === (i = t) || "preview" === i || "visible" === i || "hidden" === i || "paused" === i || "inactive" === i), t === wr && (t = null != this.ampdoc.getLastVisibleTime() ? xr : gr), this.ampdoc.overrideVisibilityState(t), Qt().fine(ca, "visibilitychange event:", this.ampdoc.getVisibilityState()))
                }, i.getResolvedViewerUrl = function() {
                    return this.ic
                }, i.getViewerUrl = function() {
                    return this.nc
                }, i.maybeGetMessagingOrigin = function() {
                    return this.Va
                }, i.getUnconfirmedReferrerUrl = function() {
                    return this.Qa
                }, i.getReferrerUrl = function() {
                    return this.tc
                }, i.isTrustedViewer = function() {
                    var t = this;
                    if (!this.jo) {
                        var i = this.Za();
                        this.jo = void 0 !== i ? Promise.resolve(i) : this.Ya.then((function(i) {
                            return !!i && t.oc(i)
                        }))
                    }
                    return this.jo
                }, i.Za = function() {
                    return !!this.isEmbedded() && (!this.win.location.ancestorOrigins || this.isWebviewEmbedded() || this.isCctEmbedded() ? void 0 : this.win.location.ancestorOrigins.length > 0 && this.oc(this.win.location.ancestorOrigins[0]))
                }, i.getViewerOrigin = function() {
                    var t;
                    return this.Xa || (this.isEmbedded() ? this.win.location.ancestorOrigins && this.win.location.ancestorOrigins.length > 0 && (t = this.win.location.ancestorOrigins[0]) : t = "", this.Xa = void 0 !== t ? Promise.resolve(t) : ar(this.win).timeoutPromise(1e3, this.Ya).catch((function() {
                        return ""
                    }))), this.Xa
                }, i.oc = function(t) {
                    var i = vs(t),
                        n = i.protocol;
                    return "x-thread:" == n || "https:" == n && kt.some((function(t) {
                        return t.test(i.hostname)
                    }))
                }, i.onMessage = function(t, i) {
                    var n = this.za[t];
                    n || (n = new Er, this.za[t] = n);
                    var r = n.add(i);
                    return this.Ba[t] && (this.Ba[t].forEach((function(t) {
                        n.fire(t.data), t.deferred.resolve()
                    })), this.Ba[t] = []), r
                }, i.onMessageRespond = function(t, i) {
                    var n = this;
                    return this.Ua[t] = i, this.Ba[t] && (this.Ba[t].forEach((function(t) {
                            t.deferred.resolve(i(t.data))
                        })), this.Ba[t] = []),
                        function() {
                            n.Ua[t] === i && delete n.Ua[t]
                        }
                }, i.receiveMessage = function(t, i, n) {
                    if ("visibilitychange" == t) return this.sc(i.state), h();
                    if ("broadcast" == t) return this.Ha.fire(i), h();
                    var r = this.za[t],
                        e = this.Ua[t];
                    if (!r && !e) {
                        if (this.Ba[t] = this.Ba[t] || [], this.Ba[t].length >= 50) return;
                        var s = new a;
                        return this.Ba[t].push({
                            data: i,
                            deferred: s
                        }), s.promise
                    }
                    return r && r.fire(i), e ? e(i) : r ? h() : void 0
                }, i.setMessageDeliverer = function(t, i) {
                    var n = this;
                    if (this.Ga) throw new Error("message channel can only be initialized once");
                    if (null == i) throw new Error("message channel must have an origin");
                    if (Qt().fine(ca, "message channel established with origin: ", i), this.Ga = t, this.Va = i, this.Ka(i), this.Fa.length > 0) {
                        var r = this.Fa.slice(0);
                        this.Fa = [], r.forEach((function(t) {
                            var i = n.Ga(t.eventType, t.data, t.awaitResponse);
                            t.awaitResponse && t.responseResolver(i)
                        }))
                    }
                }, i.maybeGetMessageDeliverer = function() {
                    return this.Ga
                }, i.sendMessage = function(t, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this.uc(t, i, n, !1)
                }, i.sendMessageAwaitResponse = function(t, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return this.uc(t, i, n, !0)
                }, i.uc = function(t, i, n, r) {
                    var e = this;
                    if (this.Ga) return c((function() {
                        return e.Ga(t, i, r)
                    }));
                    if (!this.Ya) return r ? Promise.reject(va()) : h();
                    if (!n) return this.Ya.then((function() {
                        return e.Ga(t, i, r)
                    }));
                    var s, u = B(this.Fa, (function(i) {
                        return i.eventType == t
                    }));
                    if (-1 != u)(s = this.Fa.splice(u, 1)[0]).data = i, s.awaitResponse = s.awaitResponse || r;
                    else {
                        var o = new a,
                            f = o.promise,
                            l = o.resolve;
                        s = {
                            eventType: t,
                            data: i,
                            awaitResponse: r,
                            responsePromise: f,
                            responseResolver: l
                        }
                    }
                    return this.Fa.push(s), s.responsePromise
                }, i.broadcast = function(t) {
                    return this.Ya ? this.uc("broadcast", t, !1, !1).then((function() {
                        return !0
                    }), (function() {
                        return !1
                    })) : Promise.resolve(!1)
                }, i.onBroadcast = function(t) {
                    return this.Ha.add(t)
                }, i.whenMessagingReady = function() {
                    return this.Ya
                }, i.replaceUrl = function(t) {
                    if (t && this.ampdoc.isSingleDoc() && this.win.history.replaceState) try {
                        var i = vs(this.win.location.href),
                            n = vs(As(t) + this.win.location.hash);
                        i.origin == n.origin && Ms(i) == Ms(n) && (this.win.history.replaceState({}, "", n.href), this.win.location.originalHref = i.href, Qt().fine(ca, "replace url:" + n.href))
                    } catch (t) {
                        Qt().error(ca, "replaceUrl failed", t)
                    }
                }, i.rc = function() {
                    var t = this;
                    if (this.ampdoc.getVisibilityState() != yr) {
                        var i = [],
                            n = function() {
                                return i.forEach((function(t) {
                                    return t()
                                }))
                            },
                            r = function() {
                                t.sc(yr), n(), Qt().expectedError(ca, "Received user action in non-visible doc")
                            },
                            e = {
                                capture: !0,
                                passive: !0
                            };
                        i.push(Ye(this.win, "keydown", r, e), Ye(this.win, "touchstart", r, e), Ye(this.win, "mousedown", r, e)), this.whenFirstVisible().then(n)
                    }
                }, t
            }();

        function va(t) {
            var i;
            return t instanceof Error ? ((t = f(t)).message = "No messaging channel: " + t.message, i = t) : i = new Error("No messaging channel: " + t), i.message = it(i.message), i
        }

        function da(t, i) {
            return function(n) {
                return t + (i - t) * n
            }
        }

        function ma(t, i, n) {
            return et(i <= n), Math.min(Math.max(t, i), n)
        }
        var pa = function() {
                function t() {}
                return t.solveYValueFromXValue = function(i, n, r, e, s, u, o, h, a) {
                    return t.hc(t.ac(i, n, e, u, h), r, s, o, a)
                }, t.ac = function(i, n, r, e, s) {
                    var u = 1e-6,
                        o = (i - n) / (s - n);
                    if (o <= 0) return 0;
                    if (o >= 1) return 1;
                    for (var h = 0, a = 1, c = 0, f = 0; f < 8; f++) {
                        c = t.cc(o, n, r, e, s);
                        var l = (t.cc(o + u, n, r, e, s) - c) / u;
                        if (Math.abs(c - i) < u) return o;
                        if (Math.abs(l) < u) break;
                        c < i ? h = o : a = o, o -= (c - i) / l
                    }
                    for (var v = 0; Math.abs(c - i) > u && v < 8; v++) c < i ? (h = o, o = (o + a) / 2) : (a = o, o = (o + h) / 2), c = t.cc(o, n, r, e, s);
                    return o
                }, t.cc = function(i, n, r, e, s) {
                    if (0 == i) return n;
                    if (1 == i) return s;
                    var u = t.fc(n, r, i),
                        o = t.fc(r, e, i),
                        h = t.fc(e, s, i);
                    return u = t.fc(u, o, i), o = t.fc(o, h, i), t.fc(u, o, i)
                }, t.hc = function(i, n, r, e, s) {
                    if (0 == i) return n;
                    if (1 == i) return s;
                    var u = t.fc(n, r, i),
                        o = t.fc(r, e, i),
                        h = t.fc(e, s, i);
                    return u = t.fc(u, o, i), o = t.fc(o, h, i), t.fc(u, o, i)
                }, t.fc = function(t, i, n) {
                    return t + n * (i - t)
                }, t
            }(),
            ga = {
                LINEAR: function(t) {
                    return t
                },
                EASE: function(t) {
                    return pa.solveYValueFromXValue(t, 0, 0, .25, .1, .25, 1, 1, 1)
                },
                EASE_IN: function(t) {
                    return pa.solveYValueFromXValue(t, 0, 0, .42, 0, 1, 1, 1, 1)
                },
                EASE_OUT: function(t) {
                    return pa.solveYValueFromXValue(t, 0, 0, 0, 0, .58, 1, 1, 1)
                },
                EASE_IN_OUT: function(t) {
                    return pa.solveYValueFromXValue(t, 0, 0, .42, 0, .58, 1, 1, 1)
                }
            },
            ba = {
                "linear": ga.LINEAR,
                "ease": ga.EASE,
                "ease-in": ga.EASE_IN,
                "ease-out": ga.EASE_OUT,
                "ease-in-out": ga.EASE_IN_OUT
            };

        function ya(t) {
            if (!t) return null;
            if (Y(t)) {
                if (-1 != (t = t).indexOf("cubic-bezier")) {
                    var i = t.match(/cubic-bezier\((.+)\)/);
                    if (i) {
                        var n = i[1].split(",").map(parseFloat);
                        if (4 == n.length) {
                            for (var r = 0; r < 4; r++)
                                if (isNaN(n[r])) return null;
                            return e = n[0], s = n[1], u = n[2], o = n[3],
                                function(t) {
                                    return pa.solveYValueFromXValue(t, 0, 0, e, s, u, o, 1, 1)
                                }
                        }
                    }
                    return null
                }
                return ba[t]
            }
            var e, s, u, o;
            return t
        }
        var wa = "Animation",
            Aa = function() {},
            xa = function() {
                function t(t, i) {
                    this.mn = t, this.yo = i || dr(self), this.lc = null, this.vc = []
                }
                t.animate = function(i, n, r, e) {
                    return new t(i).setCurve(e).add(0, n, 1).start(r)
                };
                var i = t.prototype;
                return i.setCurve = function(t) {
                    return t && (this.lc = ya(t)), this
                }, i.add = function(t, i, n, r) {
                    return this.vc.push({
                        delay: t,
                        func: i,
                        duration: n,
                        curve: ya(r)
                    }), this
                }, i.start = function(t) {
                    return new Ea(this.yo, this.mn, this.vc, this.lc, t)
                }, t
            }(),
            Ea = function() {
                function t(t, i, n, r, e) {
                    this.yo = t, this.mn = i, this.vc = [];
                    for (var s = 0; s < n.length; s++) {
                        var u = n[s];
                        this.vc.push({
                            delay: u.delay,
                            func: u.func,
                            duration: u.duration,
                            curve: u.curve || r,
                            started: !1,
                            completed: !1
                        })
                    }
                    this.dc = e, this.Zh = Date.now(), this.Vn = !0, this.ai = {};
                    var o = new a;
                    this.mc = o.promise, this.Dn = o.resolve, this.bc = o.reject, this.gc = this.yo.createAnimTask(this.mn, {
                        mutate: this.yc.bind(this)
                    }), this.yo.canAnimate(this.mn) ? this.gc(this.ai) : (Qt().warn(wa, "cannot animate"), this.wc(!1, 0))
                }
                var i = t.prototype;
                return i.then = function(t, i) {
                    return t || i ? this.mc.then(t, i) : this.mc
                }, i.thenAlways = function(t) {
                    var i = t || Aa;
                    return this.then(i, i)
                }, i.halt = function(t) {
                    this.wc(!1, t || 0)
                }, i.wc = function(t, i) {
                    if (this.Vn) {
                        if (this.Vn = !1, 0 != i) {
                            this.vc.length > 1 && this.vc.sort((function(t, i) {
                                return t.delay + t.duration - (i.delay + i.duration)
                            }));
                            try {
                                if (i > 0)
                                    for (var n = 0; n < this.vc.length; n++) this.vc[n].func(1, !0);
                                else
                                    for (var r = this.vc.length - 1; r >= 0; r--) this.vc[r].func(0, !1)
                            } catch (i) {
                                Qt().error(wa, "completion failed: " + i, i), t = !1
                            }
                        }
                        t ? this.Dn() : this.bc()
                    }
                }, i.yc = function(t) {
                    if (this.Vn) {
                        for (var i = Date.now(), n = Math.min((i - this.Zh) / this.dc, 1), r = 0; r < this.vc.length; r++) {
                            var e = this.vc[r];
                            !e.started && n >= e.delay && (e.started = !0)
                        }
                        for (var s = 0; s < this.vc.length; s++) {
                            var u = this.vc[s];
                            u.started && !u.completed && this.Ac(u, n)
                        }
                        1 == n ? this.wc(!0, 0) : this.yo.canAnimate(this.mn) ? this.gc(this.ai) : (Qt().warn(wa, "cancel animation"), this.wc(!1, 0))
                    }
                }, i.Ac = function(t, i) {
                    var n, r;
                    if (t.duration > 0) {
                        if (r = n = Math.min((i - t.delay) / t.duration, 1), t.curve && 1 != r) try {
                            r = t.curve(n)
                        } catch (t) {
                            return Qt().error(wa, "step curve failed: " + t, t), void this.wc(!1, 0)
                        }
                    } else n = 1, r = 1;
                    1 == n && (t.completed = !0);
                    try {
                        t.func(r, t.completed)
                    } catch (t) {
                        return Qt().error(wa, "step mutate failed: " + t, t), void this.wc(!1, 0)
                    }
                }, t
            }();

        function Pa(t, i) {
            for (var n, r = i.lastElementChild; r; r = r.previousElementSibling)
                if (r.getBoundingClientRect().height > 0) {
                    var e = Nr(t, r);
                    if ("static" == e.position || "relative" == e.position) {
                        n = e;
                        break
                    }
                }
            return n ? parseInt(n.marginBottom, 10) : 0
        }
        var Oa = function() {
                function t(t) {
                    var i = this;
                    this.win = t, this.yo = dr(t);
                    var n = this.win.document,
                        r = n.documentElement,
                        e = r.className;
                    r.classList.add("i-amphtml-ios-embed");
                    var s = n.createElement("html");
                    this.xc = s, s.id = "i-amphtml-wrapper", s.className = e, this.Ec = new Er, this.Oc = new Er, this.Pc = this.Tc.bind(this), this.Ic = function() {
                        return i.Oc.fire()
                    }, this.Mc = 0, this.Sc = !1, Ii(n, this.kc.bind(this)), vn(n).then((function() {
                        r.classList.add("i-amphtml-ios-overscroll")
                    })), Qt().fine("Viewport", "initialized ios-embed-wrapper viewport")
                }
                var i = t.prototype;
                return i.ensureReadyForElements = function() {
                    this.kc()
                }, i.kc = function() {
                    if (!this.Sc) {
                        this.Sc = !0;
                        var t = this.win.document,
                            i = t.body;
                        t.documentElement.appendChild(this.xc), this.xc.appendChild(i), Object.defineProperty(t, "body", {
                            get: function() {
                                return i
                            }
                        }), this.Tc()
                    }
                }, i.connect = function() {
                    this.win.addEventListener("resize", this.Ic), this.xc.addEventListener("scroll", this.Pc)
                }, i.disconnect = function() {
                    this.win.removeEventListener("resize", this.Ic), this.xc.removeEventListener("scroll", this.Pc)
                }, i.getBorderTop = function() {
                    return 1
                }, i.requiresFixedLayerTransfer = function() {
                    return !Ge(this.win, "ios-fixed-no-transfer") || parseFloat(sr(this.win).getIosVersionString()) < 12.2
                }, i.overrideGlobalScrollTo = function() {
                    return !0
                }, i.supportsPositionFixed = function() {
                    return !0
                }, i.onScroll = function(t) {
                    this.Ec.add(t)
                }, i.onResize = function(t) {
                    this.Oc.add(t)
                }, i.updatePaddingTop = function(t) {
                    this.Mc = t, Sr(this.xc, {
                        "padding-top": Cr(t)
                    })
                }, i.hideViewerHeader = function(t, i) {
                    t || this.updatePaddingTop(0)
                }, i.showViewerHeader = function(t, i) {
                    t || this.updatePaddingTop(i)
                }, i.disableScroll = function() {
                    this.xc.classList.add("i-amphtml-scroll-disabled")
                }, i.resetScroll = function() {
                    this.xc.classList.remove("i-amphtml-scroll-disabled")
                }, i.updateLightboxMode = function(t) {
                    return h()
                }, i.getSize = function() {
                    return {
                        width: this.win.innerWidth,
                        height: this.win.innerHeight
                    }
                }, i.getScrollTop = function() {
                    return this.xc.scrollTop
                }, i.getScrollLeft = function() {
                    return 0
                }, i.getScrollWidth = function() {
                    return this.xc.scrollWidth
                }, i.getScrollHeight = function() {
                    return this.xc.scrollHeight
                }, i.getContentHeight = function() {
                    var t = this.win.document.body,
                        i = t.getBoundingClientRect().height,
                        n = Pa(this.win, t),
                        r = Nr(this.win, t);
                    return parseInt(r.marginTop, 10) + this.Mc + i + n + parseInt(r.marginBottom, 10)
                }, i.contentHeightChanged = function() {}, i.getLayoutRect = function(t, i, n) {
                    var r = t.getBoundingClientRect(),
                        e = null != n ? n : this.getScrollTop(),
                        s = null != i ? i : this.getScrollLeft();
                    return zi(Math.round(r.left + s), Math.round(r.top + e), Math.round(r.width), Math.round(r.height))
                }, i.getRootClientRectAsync = function() {
                    return Promise.resolve(null)
                }, i.setScrollTop = function(t) {
                    this.xc.scrollTop = t || 1
                }, i.Tc = function(t) {
                    0 == this.xc.scrollTop && (this.xc.scrollTop = 1, t && t.preventDefault()), t && this.Ec.fire()
                }, i.getScrollingElement = function() {
                    return this.xc
                }, i.getScrollingElementScrollsLikeViewport = function() {
                    return !1
                }, t
            }(),
            Ia = function() {
                function t(t) {
                    var i = this;
                    this.ampdoc = t, this.win = t.win, this.Io = sr(this.win), this.Ec = new Er, this.Oc = new Er, this.Pc = this._c.bind(this), this.Ic = function() {
                        return i.Oc.fire()
                    }, Qt().fine("Viewport", "initialized natural viewport")
                }
                var i = t.prototype;
                return i._c = function() {
                    this.Ec.fire()
                }, i.connect = function() {
                    this.win.addEventListener("scroll", this.Pc), this.win.addEventListener("resize", this.Ic)
                }, i.disconnect = function() {
                    this.win.removeEventListener("scroll", this.Pc), this.win.removeEventListener("resize", this.Ic)
                }, i.ensureReadyForElements = function() {}, i.getBorderTop = function() {
                    return 0
                }, i.requiresFixedLayerTransfer = function() {
                    return !1
                }, i.overrideGlobalScrollTo = function() {
                    return !1
                }, i.supportsPositionFixed = function() {
                    return !0
                }, i.onScroll = function(t) {
                    this.Ec.add(t)
                }, i.onResize = function(t) {
                    this.Oc.add(t)
                }, i.updatePaddingTop = function(t) {
                    Sr(this.win.document.documentElement, {
                        "padding-top": Cr(t)
                    })
                }, i.hideViewerHeader = function(t, i) {
                    t || this.updatePaddingTop(0)
                }, i.showViewerHeader = function(t, i) {
                    t || this.updatePaddingTop(i)
                }, i.disableScroll = function() {
                    this.win.document.documentElement.classList.add("i-amphtml-scroll-disabled")
                }, i.resetScroll = function() {
                    this.win.document.documentElement.classList.remove("i-amphtml-scroll-disabled")
                }, i.updateLightboxMode = function(t) {
                    return h()
                }, i.getSize = function() {
                    var t = this.win.innerWidth,
                        i = this.win.innerHeight;
                    if (t && i) return {
                        width: t,
                        height: i
                    };
                    var n = this.win.document.documentElement;
                    return {
                        width: n.clientWidth,
                        height: n.clientHeight
                    }
                }, i.getScrollTop = function() {
                    var t = this.getScrollingElement().scrollTop || this.win.pageYOffset,
                        i = this.ampdoc.getRootNode().host;
                    return i ? t - i.offsetTop : t
                }, i.getScrollLeft = function() {
                    return 0
                }, i.getScrollWidth = function() {
                    return this.getScrollingElement().scrollWidth
                }, i.getScrollHeight = function() {
                    return this.getScrollingElement().scrollHeight
                }, i.getContentHeight = function() {
                    var t = this.getScrollingElement(),
                        i = t.getBoundingClientRect(),
                        n = i.top + this.getScrollTop(),
                        r = sr(this.win).isSafari() ? Pa(this.win, t) : 0,
                        e = Nr(this.win, t);
                    return n + parseInt(e.marginTop, 10) + i.height + r + parseInt(e.marginBottom, 10)
                }, i.contentHeightChanged = function() {}, i.getLayoutRect = function(t, i, n) {
                    var r = t.getBoundingClientRect(),
                        e = null != n ? n : this.getScrollTop(),
                        s = null != i ? i : this.getScrollLeft();
                    return zi(Math.round(r.left + s), Math.round(r.top + e), Math.round(r.width), Math.round(r.height))
                }, i.getRootClientRectAsync = function() {
                    return Promise.resolve(null)
                }, i.setScrollTop = function(t) {
                    this.getScrollingElement().scrollTop = t
                }, i.getScrollingElement = function() {
                    var t = this.win.document;
                    return t.scrollingElement ? t.scrollingElement : t.body && this.Io.isWebKit() ? t.body : t.documentElement
                }, i.getScrollingElementScrollsLikeViewport = function() {
                    return !0
                }, t
            }(),
            Ma = "Viewport";

        function Ta(t, i, n) {
            return function(t, i, n) {
                var r = parseInt(Nr(t, i)[n], 10);
                return isNaN(r) ? 0 : r
            }(t, i === t.document.body ? t.document.documentElement : i, n)
        }

        function Sa(t, i) {
            return Ta(t, i, "scrollPaddingTop")
        }
        var Ra = function() {
            function t(t, i, n) {
                var r = this,
                    e = t.win;
                this.ampdoc = t, this.Rc = this.ampdoc.win.document, this.Ss = i, this.Ze = n, this.Nc = null, this.pr = null, this.Cc = null, this.Dc = !1, this.jc = null, this.Mc = Number(n.getParam("paddingTop") || 0), this.zc = 0, this.Pe = ar(e), this.yo = dr(e), this.Uc = !1, this.Lc = null, this.Hc = 0, this.Gc = new Er, this.Ec = new Er, this.Oc = new Er, this.Vc = void 0, this.Fc = void 0, this.Bc = null, this.Ze.onMessage("viewport", this.qc.bind(this)), this.Ze.onMessage("scroll", this.Wc.bind(this)), this.Ze.onMessage("disableScroll", this.$c.bind(this)), this.Ze.isEmbedded() && this.Ss.updatePaddingTop(this.Mc), this.Ss.onScroll(this.Kc.bind(this)), this.Ss.onResize(this.Yc.bind(this)), this.onScroll(this.Jc.bind(this)), this.bu = !1, this.ampdoc.onVisibilityChanged(this.Xc.bind(this)), this.Xc();
                var s = this.Rc.documentElement;
                if (t.isSingleDoc() && s.classList.add("i-amphtml-singledoc"), n.isEmbedded() ? s.classList.add("i-amphtml-embedded") : s.classList.add("i-amphtml-standalone"), Ni(e) && s.classList.add("i-amphtml-iframed"), "1" === n.getParam("webview") && s.classList.add("i-amphtml-webview"), Ni(e) && "scrollRestoration" in e.history && (e.history.scrollRestoration = "manual"), this.Ss.overrideGlobalScrollTo()) try {
                    Object.defineProperty(e, "scrollTo", {
                        value: function(t, i) {
                            return r.setScrollTop(i)
                        }
                    }), ["pageYOffset", "scrollY"].forEach((function(t) {
                        Object.defineProperty(e, t, {
                            get: function() {
                                return r.getScrollTop()
                            }
                        })
                    }))
                } catch (t) {}
                sr(e).isIos() && Ni(e) && this.ampdoc.isSingleDoc() && this.ampdoc.whenReady().then((function() {
                    e.scrollTo(-.1, 0)
                }))
            }
            var i = t.prototype;
            return i.dispose = function() {
                this.Ss.disconnect()
            }, i.ensureReadyForElements = function() {
                this.Ss.ensureReadyForElements()
            }, i.Xc = function() {
                var t = this.ampdoc.isVisible();
                t != this.bu && (this.bu = t, t ? (this.Ss.connect(), this.pr && this.Yc(), this.Cc && (this.Cc = null, this.getScrollTop())) : this.Ss.disconnect())
            }, i.getPaddingTop = function() {
                return this.Mc
            }, i.getScrollTop = function() {
                return null == this.Cc && (this.Cc = this.Ss.getScrollTop()), this.Cc
            }, i.getScrollLeft = function() {
                return null == this.jc && (this.jc = this.Ss.getScrollLeft()), this.jc
            }, i.setScrollTop = function(t) {
                this.Cc = null, this.Ss.setScrollTop(t)
            }, i.updatePaddingBottom = function(t) {
                this.ampdoc.waitForBodyOpen().then((function(i) {
                    Rr(i, "borderBottom", "".concat(t, "px solid transparent"))
                }))
            }, i.getSize = function() {
                if (this.pr) return this.pr;
                if (this.pr = this.Ss.getSize(), 0 == this.pr.width || 0 == this.pr.height) {
                    var t = this.ampdoc.getVisibilityState();
                    t != gr && t != yr || Math.random() < .01 && Qt().error(Ma, "viewport has zero dimensions")
                }
                return this.pr
            }, i.getHeight = function() {
                return this.getSize().height
            }, i.getWidth = function() {
                return this.getSize().width
            }, i.getScrollWidth = function() {
                return this.Ss.getScrollWidth()
            }, i.getScrollHeight = function() {
                return this.Ss.getScrollHeight()
            }, i.getContentHeight = function() {
                return this.Ss.getContentHeight()
            }, i.contentHeightChanged = function() {
                this.Ss.contentHeightChanged()
            }, i.getRect = function() {
                if (null == this.Nc) {
                    var t = this.getScrollTop(),
                        i = this.getScrollLeft(),
                        n = this.getSize();
                    this.Nc = zi(i, t, n.width, n.height)
                }
                return this.Nc
            }, i.getLayoutRect = function(t) {
                var i = this.getScrollLeft(),
                    n = this.getScrollTop(),
                    r = Sn(t, this.ampdoc.win);
                if (r) {
                    var e = this.Ss.getLayoutRect(t, 0, 0),
                        s = this.Ss.getLayoutRect(r, i, n);
                    return zi(Math.round(e.left + s.left), Math.round(e.top + s.top), Math.round(e.width), Math.round(e.height))
                }
                return this.Ss.getLayoutRect(t, i, n)
            }, i.getClientRectAsync = function(t) {
                var i = this.yo.measurePromise((function() {
                        return t.getBoundingClientRect()
                    })),
                    n = this.Ss.getRootClientRectAsync(),
                    r = Sn(t, this.ampdoc.win);
                return r && (n = this.yo.measurePromise((function() {
                    return r.getBoundingClientRect()
                }))), Promise.all([i, n]).then((function(t) {
                    var i, n = t[0],
                        r = t[1];
                    return r ? Gi(n, r.left, r.top) : (i = n, zi(Number(i.left), Number(i.top), Number(i.width), Number(i.height)))
                }))
            }, i.supportsPositionFixed = function() {
                return this.Ss.supportsPositionFixed()
            }, i.isDeclaredFixed = function(t) {
                return !!this.Bc && this.Bc.isDeclaredFixed(t)
            }, i.scrollIntoView = function(t) {
                var i = this;
                return this.Qc(t).then((function(n) {
                    return i.Zc(t, n)
                }))
            }, i.Zc = function(t, i) {
                var n = this,
                    r = this.Ss.getLayoutRect(t).top,
                    e = Sa(this.ampdoc.win, i);
                c((function() {
                    return Math.max(0, r - n.Mc - e)
                })).then((function(t) {
                    return n.tf(i, t)
                }))
            }, i.animateScrollIntoView = function(t) {
                var i = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    e = arguments.length > 3 ? arguments[3] : void 0;
                return Zt(!e || void 0 !== r), this.Qc(t).then((function(s) {
                    return i.animateScrollWithinParent(t, s, n, r, e)
                }))
            }, i.animateScrollWithinParent = function(t, i, n, r, e) {
                var s = this;
                Zt(!e || void 0 !== r);
                var u = this.Ss.getLayoutRect(t),
                    o = (this.if(i) ? this.getSize() : this.getLayoutRect(i)).height,
                    h = this.ampdoc.win,
                    a = Sa(h, i),
                    c = function(t, i) {
                        return Ta(t, i, "scrollPaddingBottom")
                    }(h, i),
                    f = -a;
                return "bottom" === n ? f = -o + c + u.height : "center" === n && (f = -(o - a - c) / 2 + u.height / 2), this.nf(i).then((function(t) {
                    var n = u.top - s.Mc + f,
                        o = Math.max(0, n);
                    if (o != t) return s.rf(i, t, o, r, e)
                }))
            }, i.rf = function(t, i, n, r) {
                var e = this,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "ease-in",
                    u = void 0 !== r ? r : _a(i, n),
                    o = da(i, n);
                return xa.animate(t, (function(i) {
                    e.tf(t, o(i))
                }), u, s).thenAlways((function() {
                    e.tf(t, n)
                }))
            }, i.Qc = function(t) {
                var i = this;
                return this.yo.measurePromise((function() {
                    return yi(t, ".i-amphtml-scrollable") || i.Ss.getScrollingElement()
                }))
            }, i.tf = function(t, i) {
                this.if(t) ? this.Ss.setScrollTop(i) : this.yo.mutate((function() {
                    t.scrollTop = i
                }))
            }, i.nf = function(t) {
                var i = this;
                return this.if(t) ? c((function() {
                    return i.getScrollTop()
                })) : this.yo.measurePromise((function() {
                    return t.scrollTop
                }))
            }, i.if = function(t) {
                return t == this.Ss.getScrollingElement()
            }, i.getScrollingElement = function() {
                return this.Lc ? this.Lc : this.Lc = this.Ss.getScrollingElement()
            }, i.onChanged = function(t) {
                return this.Gc.add(t)
            }, i.onScroll = function(t) {
                return this.Ec.add(t)
            }, i.onResize = function(t) {
                return this.Oc.add(t)
            }, i.enterLightboxMode = function(t, i) {
                return this.Ze.sendMessage("requestFullOverlay", {}, !0), this.enterOverlayMode(), this.Bc && this.Bc.enterLightbox(t, i), t && this.maybeEnterFieLightboxMode(t), this.Ss.updateLightboxMode(!0)
            }, i.leaveLightboxMode = function(t) {
                return this.Ze.sendMessage("cancelFullOverlay", {}, !0), this.Bc && this.Bc.leaveLightbox(), this.leaveOverlayMode(), t && this.maybeLeaveFieLightboxMode(t), this.Ss.updateLightboxMode(!1)
            }, i.isLightboxExperimentOn = function() {
                return Ge(this.ampdoc.win, "amp-lightbox-a4a-proto")
            }, i.maybeEnterFieLightboxMode = function(t) {
                var i = this.ef(t);
                i && (Zt(this.isLightboxExperimentOn()), i.enterFullOverlayMode())
            }, i.maybeLeaveFieLightboxMode = function(t) {
                var i = this.ef(t);
                i && Zt(i).leaveFullOverlayMode()
            }, i.ef = function(t) {
                var i = Sn(t, this.ampdoc.win);
                return i && i.__AMP_EMBED__
            }, i.enterOverlayMode = function() {
                this.disableTouchZoom(), this.disableScroll()
            }, i.leaveOverlayMode = function() {
                this.resetScroll(), this.restoreOriginalTouchZoom()
            }, i.disableScroll = function() {
                var t, i = this,
                    n = this.ampdoc.win,
                    r = n.document.documentElement;
                this.yo.measure((function() {
                    var e = Nr(n, r).marginRight,
                        s = function(t) {
                            var i = t.document.documentElement;
                            return t.innerWidth - i.clientWidth
                        }(i.ampdoc.win);
                    t = parseInt(e, 10) + s
                })), this.yo.mutate((function() {
                    Rr(r, "margin-right", t, "px"), i.Ss.disableScroll()
                }))
            }, i.resetScroll = function() {
                var t = this,
                    i = this.ampdoc.win.document.documentElement;
                this.yo.mutate((function() {
                    Rr(i, "margin-right", ""), t.Ss.resetScroll()
                }))
            }, i.resetTouchZoom = function() {
                var t = this,
                    i = this.ampdoc.win.innerHeight,
                    n = this.Rc.documentElement.clientHeight;
                i && n && i === n || this.disableTouchZoom() && this.Pe.delay((function() {
                    t.restoreOriginalTouchZoom()
                }), 50)
            }, i.disableTouchZoom = function() {
                var t = this.sf();
                if (!t) return !1;
                var i = function(t, i) {
                    var n = function(t) {
                            var i = Object.create(null);
                            if (!t) return i;
                            for (var n = t.split(/,|;/), r = 0; r < n.length; r++) {
                                var e = n[r].split("="),
                                    s = e[0].trim(),
                                    u = e[1];
                                u = (u || "").trim(), s && (i[s] = u)
                            }
                            return i
                        }(t),
                        r = !1;
                    for (var e in i) n[e] !== i[e] && (r = !0, void 0 !== i[e] ? n[e] = i[e] : delete n[e]);
                    return r ? function(t) {
                        var i = "";
                        for (var n in t) i.length > 0 && (i += ","), t[n] ? i += n + "=" + t[n] : i += n;
                        return i
                    }(n) : t
                }(t.content, {
                    "maximum-scale": "1",
                    "user-scalable": "no"
                });
                return this.uf(i)
            }, i.restoreOriginalTouchZoom = function() {
                return void 0 !== this.Fc && this.uf(this.Fc)
            }, i.updateFixedLayer = function() {
                return this.Bc ? this.Bc.update() : h()
            }, i.addToFixedLayer = function(t, i) {
                return this.Bc ? this.Bc.addElement(t, i) : h()
            }, i.removeFromFixedLayer = function(t) {
                this.Bc && this.Bc.removeElement(t)
            }, i.createFixedLayer = function(t) {
                var i = this;
                this.Bc = new t(this.ampdoc, this.yo, this.Ss.getBorderTop(), this.Mc, this.Ss.requiresFixedLayerTransfer()), this.ampdoc.whenReady().then((function() {
                    return i.Bc.setup()
                }))
            }, i.uf = function(t) {
                var i = this.sf();
                return !(!i || i.content == t || (Qt().fine(Ma, "changed viewport meta to:", t), i.content = t, 0))
            }, i.sf = function() {
                return Ni(this.ampdoc.win) ? null : (void 0 === this.Vc && (this.Vc = this.Rc.querySelector("meta[name=viewport]"), this.Vc && (this.Fc = this.Vc.content)), this.Vc)
            }, i.Wc = function(t) {
                var i = t.scrollTop;
                this.setScrollTop(i)
            }, i.qc = function(t) {
                var i = this,
                    n = t.paddingTop,
                    r = t.duration || 0,
                    e = t.curve,
                    s = t.transient;
                if (null != n && n != this.Mc && (this.zc = this.Mc, this.Mc = n, this.Bc)) {
                    var u = this.Bc.animateFixedElements(this.Mc, this.zc, r, e, s);
                    n < this.zc ? this.Ss.hideViewerHeader(s, this.zc) : u.then((function() {
                        i.Ss.showViewerHeader(s, n)
                    }))
                }
            }, i.$c = function(t) {
                t ? this.disableScroll() : this.resetScroll()
            }, i.hf = function(t, i) {
                var n = this.getSize(),
                    r = this.getScrollTop(),
                    e = this.getScrollLeft();
                Qt().fine(Ma, "changed event:", "relayoutAll=", t, "top=", r, "left=", e, "bottom=", r + n.height, "velocity=", i), this.Gc.fire({
                    relayoutAll: t,
                    top: r,
                    left: e,
                    width: n.width,
                    height: n.height,
                    velocity: i
                })
            }, i.Kc = function() {
                var t = this;
                this.Nc = null, this.Hc++, this.jc = this.Ss.getScrollLeft();
                var i = this.Ss.getScrollTop();
                if (!(i < 0)) {
                    if (this.Cc = i, !this.Uc) {
                        this.Uc = !0;
                        var n = Date.now();
                        this.Pe.delay((function() {
                            t.yo.measure((function() {
                                t.Vu(n, i)
                            }))
                        }), 36)
                    }
                    this.Ec.fire()
                }
            }, i.Vu = function(t, i) {
                var n = this;
                this.Cc = this.Ss.getScrollTop();
                var r = this.Cc,
                    e = Date.now(),
                    s = 0;
                e != t && (s = (r - i) / (e - t)), Qt().fine(Ma, "scroll: scrollTop=" + r + "; velocity=" + s), Math.abs(s) < .03 ? (this.hf(!1, s), this.Uc = !1) : this.Pe.delay((function() {
                    return n.yo.measure(n.Vu.bind(n, e, r))
                }), 20)
            }, i.Jc = function() {
                var t = this;
                this.Dc || (this.Dc = !0, this.yo.measure((function() {
                    t.Dc = !1, t.Ze.sendMessage("scroll", {
                        "scrollTop": t.getScrollTop()
                    }, !0)
                })))
            }, i.Yc = function() {
                var t = this;
                this.Nc = null;
                var i = this.pr;
                this.pr = null;
                var n = this.getSize();
                this.updateFixedLayer().then((function() {
                    var r = !i || i.width != n.width;
                    t.hf(r, 0), (r || i.height != n.height) && t.Oc.fire({
                        relayoutAll: r,
                        width: n.width,
                        height: n.height
                    })
                }))
            }, t
        }();

        function _a(t, i) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 500;
            return Math.floor(ma(.65 * Math.abs(t - i), 0, n))
        }

        function ka(t) {
            var i, n = vr(t),
                r = t.win;
            return i = t.isSingleDoc() && function(t, i) {
                return sr(t).isIos() && Ni(t) && i.isEmbedded() && !i.hasCapability("iframeScroll") ? Ca.NATURAL_IOS_EMBED : Ca.NATURAL
            }(r, n) == Ca.NATURAL_IOS_EMBED ? new Oa(r) : new Ia(t), new Ra(t, i, n)
        }
        var Ca = {
                NATURAL: "natural",
                NATURAL_IOS_EMBED: "natural-ios-embed"
            },
            Na = function() {
                function t(t) {
                    this.win = t, this.af = Yn(this.win), this.cf = this.ff(), this.Qi = [], this.lf = [], this.ao = [], this.vf = [], this.Me = !1, this.df = null, this.mf = null, this.pf = this.bf.bind(this), this.gf = new Cu(this.win, this.pf, 16), this.yf = new Cu(this.win, this.pf, 40), this.wf = this.Af.bind(this), this.af.isSingleDoc() ? this.af.getSingleDoc().onVisibilityChanged(this.wf) : jr(this.win.document, this.wf)
                }
                var i = t.prototype;
                return i.dispose = function() {
                    Ur(this.win.document, this.wf)
                }, i.Af = function() {
                    this.Me && this.xf()
                }, i.run = function(t, i) {
                    this.Qi.push(t), this.ao.push(i || void 0), this.Er()
                }, i.runPromise = function(t, i) {
                    if (this.run(t, i), this.df) return this.df;
                    var n = new a;
                    return this.mf = n.resolve, this.df = n.promise
                }, i.createTask = function(t) {
                    var i = this;
                    return function(n) {
                        i.run(t, n)
                    }
                }, i.mutate = function(t) {
                    this.run({
                        measure: void 0,
                        mutate: t
                    })
                }, i.mutatePromise = function(t) {
                    return this.runPromise({
                        measure: void 0,
                        mutate: t
                    })
                }, i.measure = function(t) {
                    this.run({
                        measure: t,
                        mutate: void 0
                    })
                }, i.measurePromise = function(t) {
                    var i = this;
                    return new Promise((function(n) {
                        i.measure((function() {
                            n(t())
                        }))
                    }))
                }, i.canAnimate = function(t) {
                    return this.Ef(Zt(t))
                }, i.Ef = function(t) {
                    if (Dr(this.win.document) != yr) return !1;
                    if (this.af.isSingleDoc()) return this.af.getSingleDoc().isVisible();
                    if (t) {
                        var i = this.af.getAmpDocIfAvailable(t);
                        return !i || i.isVisible()
                    }
                    return !0
                }, i.runAnim = function(t, i, n) {
                    return this.Ef(t) ? (this.run(i, n), !0) : (Qt().warn("VSYNC", "Did not schedule a vsync request, because document was invisible"), !1)
                }, i.createAnimTask = function(t, i) {
                    var n = this;
                    return function(r) {
                        return n.runAnim(t, i, r)
                    }
                }, i.runAnimMutateSeries = function(t, i, n) {
                    var r = this;
                    return this.Ef(t) ? new Promise((function(e, s) {
                        var u = Date.now(),
                            o = 0,
                            h = r.createAnimTask(t, {
                                mutate: function(t) {
                                    var r = Date.now() - u;
                                    i(r, r - o, t) ? n && r > n ? s(new Error("timeout")) : (o = r, h(t)) : e()
                                }
                            });
                        h({})
                    })) : Promise.reject(js())
                }, i.Er = function() {
                    this.Me || (this.Me = !0, this.xf())
                }, i.xf = function() {
                    this.Ef() ? (this.cf(this.pf), this.yf.schedule()) : this.gf.schedule()
                }, i.bf = function() {
                    this.yf.cancel(), this.Me = !1;
                    var t = this.mf,
                        i = this.ao,
                        n = this.Qi;
                    this.mf = null, this.df = null, this.Qi = this.lf, this.ao = this.vf;
                    for (var r = 0; r < n.length; r++) n[r].measure && (Da(n[r].measure, i[r]) || (n[r].mutate = void 0));
                    for (var e = 0; e < n.length; e++) n[e].mutate && Da(n[e].mutate, i[e]);
                    this.lf = n, this.vf = i, this.lf.length = 0, this.vf.length = 0, t && t()
                }, i.ff = function() {
                    var t = this,
                        i = this.win.requestAnimationFrame || this.win.webkitRequestAnimationFrame;
                    if (i) return i.bind(this.win);
                    var n = 0;
                    return function(i) {
                        var r = Date.now(),
                            e = Math.max(0, 16 - (r - n));
                        n = r + e, t.win.setTimeout(i, e)
                    }
                }, t
            }();

        function Da(t, i) {
            Zt(t);
            try {
                void 0 !== t(i) && Qt().error("VSYNC", "callback returned a value but vsync cannot propogate it: %s", t.toString())
            } catch (t) {
                return d(t), !1
            }
            return !0
        }

        function ja(t) {
            if (!t.defaultPrevented) {
                var i = t.target;
                if (i && "FORM" == i.tagName) {
                    (i.classList.contains("i-amphtml-form") ? !i.hasAttribute("amp-novalidate") : !i.hasAttribute("novalidate")) && i.checkValidity && !i.checkValidity() && t.preventDefault();
                    for (var n = i.elements, r = 0; r < n.length; r++) ti(!n[r].name || n[r].name != fs, "Illegal input name, %s found: %s", fs, n[r]);
                    var e = i.getAttribute("action"),
                        s = i.getAttribute("action-xhr"),
                        u = (i.getAttribute("method") || "GET").toUpperCase();
                    s && (ws(s, i, "action-xhr"), ti(!xs(s), "form action-xhr should not be on AMP CDN: %s", i), Rs(s)), e && (ws(e, i, "action"), ti(!xs(e), "form action should not be on AMP CDN: %s", i), Rs(e)), "GET" == u ? ti(s || e, "form action-xhr or action attribute is required for method=GET: %s", i) : "POST" == u && (e && Jt().error("form", "action attribute is invalid for method=POST: %s", i), s || (t.preventDefault(), ti(!1, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", i)));
                    var o = i.getAttribute("target");
                    o ? ti("_blank" == o || "_top" == o, "form target=%s is invalid can only be _blank or _top: %s", o, i) : i.setAttribute("target", "_top"), s && (t.preventDefault(), t.stopImmediatePropagation(), Bn(i).execute(i, "submit", null, i, i, t, 3))
                }
            }
        }
        var Ua = "Input",
            La = function() {
                function t(t) {
                    this.win = t, this.Of = this.Pf.bind(this), this.Tf = this.If.bind(this), this.Mf = null, this.Sf = null, this.kf = null, this._f = "ontouchstart" in t || void 0 !== t.navigator.maxTouchPoints && t.navigator.maxTouchPoints > 0 || void 0 !== t.DocumentTouch, Qt().fine(Ua, "touch detected:", this._f), this.Rf = !1, this.win.document.addEventListener("keydown", this.Of), this.win.document.addEventListener("mousedown", this.Tf), this.Nf = !0, this.Cf = 0, this.Df = new Er, this.jf = new Er, this.zf = new Er, this._f && (this.Nf = !this._f, this.Mf = this.Uf.bind(this), Je(t.document, "mousemove", this.Mf))
                }
                var i = t.prototype;
                return i.setupInputModeClasses = function(t) {
                    var i = this;
                    this.onTouchDetected((function(n) {
                        i.Lf(t, "amp-mode-touch", n)
                    }), !0), this.onMouseDetected((function(n) {
                        i.Lf(t, "amp-mode-mouse", n)
                    }), !0), this.onKeyboardStateChanged((function(n) {
                        i.Lf(t, "amp-mode-keyboard-active", n)
                    }), !0)
                }, i.isTouchDetected = function() {
                    return this._f
                }, i.onTouchDetected = function(t, i) {
                    return i && t(this.isTouchDetected()), this.Df.add(t)
                }, i.isMouseDetected = function() {
                    return this.Nf
                }, i.onMouseDetected = function(t, i) {
                    return i && t(this.isMouseDetected()), this.jf.add(t)
                }, i.isKeyboardActive = function() {
                    return this.Rf
                }, i.onKeyboardStateChanged = function(t, i) {
                    return i && t(this.isKeyboardActive()), this.zf.add(t)
                }, i.Lf = function(t, i, n) {
                    var r = this;
                    t.waitForBodyOpen().then((function(t) {
                        dr(r.win).mutate((function() {
                            t.classList.toggle(i, n)
                        }))
                    }))
                }, i.Pf = function(t) {
                    if (!this.Rf && !t.defaultPrevented) {
                        var i = t.target;
                        i && ("INPUT" == i.tagName || "TEXTAREA" == i.tagName || "SELECT" == i.tagName || "OPTION" == i.tagName || i.hasAttribute("contenteditable")) || (this.Rf = !0, this.zf.fire(!0), Qt().fine(Ua, "keyboard activated"))
                    }
                }, i.If = function() {
                    this.Rf && (this.Rf = !1, this.zf.fire(!1), Qt().fine(Ua, "keyboard deactivated"))
                }, i.Uf = function(t) {
                    var i = this;
                    if (!t.sourceCapabilities || !t.sourceCapabilities.firesTouchEvents) {
                        var n;
                        this.kf || (this.kf = this.Hf.bind(this), this.Sf = this.Gf.bind(this));
                        var r = function(t, i, n, r) {
                            var e, s = new Promise((function(i) {
                                e = Je(t, "click", i, void 0)
                            }));
                            return s.then(e, e), r && r(e), s
                        }(this.win.document, 0, 0, (function(t) {
                            n = t
                        }));
                        return ar(this.win).timeoutPromise(300, r).then(this.Sf, (function() {
                            n && n(), i.kf()
                        }))
                    }
                    this.Gf()
                }, i.Hf = function() {
                    this.Nf = !0, this.jf.fire(!0), Qt().fine(Ua, "mouse detected")
                }, i.Gf = function() {
                    this.Cf++, this.Cf <= 3 ? Je(this.win.document, "mousemove", this.Mf) : Qt().fine(Ua, "mouse detection failed")
                }, t
            }(),
            za = ["<link rel=preload referrerpolicy=origin>"],
            Ha = 18e4,
            Ga = null,
            Va = function() {
                function t(t) {
                    this.Vf = t.document, this.Ff = t.document.head, this.Bf = {}, this.qf = {}, this.Io = sr(t), this.Bf[vs(t.location.href).origin] = !0, this.Wf = function(t) {
                        if (!Ga) {
                            var i = t.document.createElement("link"),
                                n = i.relList;
                            if (i.as = "invalid-value", !n || !n.supports) return {};
                            Ga = {
                                preconnect: n.supports("preconnect"),
                                preload: n.supports("preload"),
                                onlyValidAs: "invalid-value" != i.as
                            }
                        }
                        return Ga
                    }(t), this.Pe = ar(t)
                }
                var i = t.prototype;
                return i.url = function(t, i, n) {
                    var r = this;
                    t.whenFirstVisible().then((function() {
                        r.Qt(t, i, n)
                    }))
                }, i.Qt = function(t, i, n) {
                    if (this.$f(i)) {
                        var r = vs(i).origin,
                            e = Date.now(),
                            s = this.Bf[r];
                        if (s && e < s) n && (this.Bf[r] = e + Ha);
                        else {
                            var u, o = n ? Ha : 1e4;
                            this.Bf[r] = e + o, this.Wf.preconnect || ((u = this.Vf.createElement("link")).setAttribute("rel", "dns-prefetch"), u.setAttribute("href", r), this.Ff.appendChild(u));
                            var h = this.Vf.createElement("link");
                            h.setAttribute("rel", "preconnect"), h.setAttribute("href", r), h.setAttribute("referrerpolicy", "origin"), this.Ff.appendChild(h), this.Pe.delay((function() {
                                u && u.parentNode && u.parentNode.removeChild(u), h.parentNode && h.parentNode.removeChild(h)
                            }), 1e4), this.Kf(t, r)
                        }
                    }
                }, i.preload = function(t, i, n) {
                    var r = this;
                    this.$f(i) && (this.qf[i] || (this.qf[i] = !0, this.url(t, i, !0), this.Wf.preload && ("document" == n && this.Io.isSafari() || t.whenFirstVisible().then((function() {
                        r.Yf(i)
                    })))))
                }, i.Yf = function(t) {
                    var i = ke(this.Vf)(za);
                    i.setAttribute("href", t), this.Wf.onlyValidAs ? i.as = "fetch" : i.as = "", this.Ff.appendChild(i)
                }, i.$f = function(t) {
                    return !(!t.startsWith("https:") && !t.startsWith("http:"))
                }, i.Kf = function(t, i) {
                    if (!this.Wf.preconnect && (this.Io.isSafari() || this.Io.isIos())) {
                        var n = Date.now();
                        this.Bf[i] = n + Ha;
                        var r = i + "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" + (n - n % Ha),
                            e = new XMLHttpRequest;
                        e.open("HEAD", r, !0), e.withCredentials = !0, e.send()
                    }
                }, t
            }();

        function Fa(t) {
            var i;
            ! function(t) {
                An(t, "crypto", Xo)
            }(t), An(t, "batched-xhr", vo), _h(t), Jh(t), Jh(i = t), An(i, "vsync", Na),
                function(t) {
                    An(t, "xhr", lo)
                }(t),
                function(t) {
                    An(t, "input", La)
                }(t),
                function(t) {
                    An(t, "preconnect", Va)
                }(t)
        }

        function qa(t) {
            Zt(!t.getParent()),
                function(t, i) {
                    (function(t) {
                        xn(t, "url", Xh, !0)
                    })(t),
                    function(t) {
                        xn(t, "templates", Yh)
                    }(t), xn(t, "documentInfo", Zo),
                        function(t) {
                            xn(t, "cid", Go)
                        }(t),
                        function(t) {
                            xn(t, "viewer", la, !0)
                        }(t),
                        function(t) {
                            xn(t, "viewport", ka, !0)
                        }(t),
                        function(t) {
                            xn(t, "hidden-observer", ih)
                        }(t),
                        function(t) {
                            xn(t, "history", hh)
                        }(t),
                        function(t) {
                            xn(t, "resources", Dh)
                        }(t),
                        function(t) {
                            xn(t, "owners", Sh)
                        }(t),
                        function(t) {
                            xn(t, "mutator", dh)
                        }(t),
                        function(t) {
                            xn(t, "url-replace", (function(t) {
                                return new aa(t, new ha(t))
                            }))
                        }(t),
                        function(t) {
                            xn(t, "action", Bu, !0)
                        }(t),
                        function(t) {
                            xn(t, "standard-actions", Hh, !0)
                        }(t),
                        function(t) {
                            xn(t, "storage", (function() {
                                var i = vr(t),
                                    n = parseInt(i.getParam("storage"), 10) ? new Bh(i) : new qh(t.win);
                                return new Vh(t, i, n).Nh()
                            }), !0)
                        }(t),
                        function(t) {
                            xn(t, wh, Oh, !0)
                        }(t),
                        function(t) {
                            t.whenExtensionsKnown().then((function() {
                                t.declaresExtension("amp-form") && t.getRootNode().addEventListener("submit", ja, !0)
                            }))
                        }(t), xn(t, "loadingIndicator", fh)
                }(t)
        }

        function Ba(t) {
            return t.waitForBodyOpen().then((function() {
                var i, n, r = t.getBody(),
                    e = (i = r, n = function() {
                        return !!r.firstElementChild
                    }, new Promise((function(t) {
                        Oi(i, n, t)
                    })));
                return ar(t.win).timeoutPromise(2e3, e).then((function() {
                    return "AMP-STORY" === r.firstElementChild.tagName
                }), (function() {
                    return !1
                }))
            }))
        }
        var $a = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];

        function Wa(t) {
            if (null == t) return 0;
            var i = function(t) {
                    for (var i = t; null != (t = t.parentNode);) t.nodeName.startsWith("AMP-") && (i = t);
                    return i
                }(t),
                n = i.nodeName;
            return "IMG" === n || "AMP-IMG" === n ? 1 : "VIDEO" === n || "AMP-VIDEO" === n ? 2 : "AMP-CAROUSEL" === n ? 8 : "AMP-BASE-CAROUSEL" === n ? 16 : "AMP-AD" === n ? 4 : !n.startsWith("AMP-") && i.textContent ? 32 : 0
        }
        var Ya = function() {
            function t(t) {
                var i = this;
                this.win = t, this.Yd = po(lt(t, 16)), this.Xd = [], this.$d = t.performance.timeOrigin || t.performance.timing.navigationStart, this.Ii = null, this.Ze = null, this.si = null, this.Kd = null, this.Qd = !1, this.Zd = !1, this.Vm = A(), this.Gm = void 0, this.Bm = new Pr, this.Wm = 0, this.Jm = [], this.Km = 0;
                var n = this.win.PerformanceObserver && this.win.PerformanceObserver.supportedEntryTypes || [];
                if (n.includes("paint") || this.Bm.rejectSignal("fcp", Qt().createExpectedError("First Contentful Paint not supported")), this.Qm = n.includes("layout-shift"), !this.Qm) {
                    var r = Qt().createExpectedError("Cumulative Layout Shift not supported");
                    this.Bm.rejectSignal(Zi, r), this.Bm.rejectSignal(nn, r)
                }
                this.Zm = n.includes("first-input"), this.Zm || this.Bm.rejectSignal("fid", Qt().createExpectedError("First Input Delay not supported")), this.jv = n.includes("largest-contentful-paint"), this.jv || this.Bm.rejectSignal("lcp", Qt().createExpectedError("Largest Contentful Paint not supported")), this.kv = n.includes("navigation"), this._v = this._v.bind(this), this.addEnabledExperiment("rtv-" + Dt(this.win).rtvVersion), vn(t.document).then((function() {
                    i.tick("dr"), i.flush()
                })), dn(t.document).then((function() {
                    return i.Mv()
                })), this.Nv(), this.zv = !1, this.Dv = mt(t, (function() {
                    i.Lv()
                }), 6e3)
            }
            var i = t.prototype;
            return i.coreServicesAvailable = function() {
                var t = this,
                    i = this.win.document.documentElement;
                this.Ii = Wn(i), this.Ze = vr(i), this.si = or(i), this.Kd = Zn(this.Ii), this.Zd = this.Ze.isEmbedded() && "1" === this.Ze.getParam("csi"), this.Ii.onVisibilityChanged(this.flush.bind(this)), this.Uv();
                var n = this.Ze.whenMessagingReady();
                return this.Ii.whenFirstVisible().then((function() {
                    t.tick("ofv"), t.flush()
                })), (this.jv || this.Qm) && this.Ii.onVisibilityChanged(this._v), n ? n.then((function() {
                    t.tickDelta("msr", t.win.performance.now()), t.tick("timeOrigin", void 0, t.$d);
                    var i = t.Ii.getMetaByName("amp-usqp");
                    return i && i.split(",").forEach((function(i) {
                        t.addEnabledExperiment("ssr-" + i)
                    })), t.Hv()
                })).then((function() {
                    t.Qd = !0, t.Vv(), t.flush()
                })) : h()
            }, i.Hv = function() {
                var t = this;
                return Ba(Yn(this.win).getSingleDoc()).then((function(i) {
                    i && t.addEnabledExperiment("story")
                }))
            }, i.Mv = function() {
                this.tick("ol"), this.flush()
            }, i.Nv = function() {
                var t = this;
                if ("inabox" !== Dt(this.win).runtime) {
                    var i = !1,
                        n = !1,
                        r = !1,
                        e = !1,
                        s = function(s) {
                            if ("first-paint" != s.name || i)
                                if ("first-contentful-paint" != s.name || n)
                                    if ("first-input" !== s.entryType || r) "layout-shift" === s.entryType ? s.hadRecentInput || (t.Gv(s), t.Km += s.value) : "largest-contentful-paint" === s.entryType ? t.qv(s) : "navigation" != s.entryType || e || (["domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "loadEventEnd", "loadEventStart", "requestStart", "responseStart"].forEach((function(i) {
                                        return t.tick(i, s[i])
                                    })), e = !0);
                                    else {
                                        var u = s.processingStart - s.startTime;
                                        t.tickDelta("fid", u), r = !0
                                    }
                            else {
                                var o = s.startTime + s.duration;
                                t.tickDelta("fcp", o), t.tickSinceVisible("fcpv", o), n = !0
                            } else t.tickDelta("fp", s.startTime + s.duration), i = !0
                        },
                        u = [];
                    this.win.PerformancePaintTiming && (this.win.performance.getEntriesByType("paint").forEach(s), u.push("paint")), this.Zm && this.Fv(s, {
                        type: "first-input",
                        buffered: !0
                    }), this.Qm && this.Fv(s, {
                        type: "layout-shift",
                        buffered: !0
                    }), this.jv && this.Fv(s, {
                        type: "largest-contentful-paint",
                        buffered: !0
                    }), this.kv && this.Fv(s, {
                        type: "navigation",
                        buffered: !0
                    }), u.length > 0 && this.Fv(s, {
                        entryTypes: u
                    })
                }
            }, i.Fv = function(t, i) {
                var n = this;
                try {
                    new this.win.PerformanceObserver((function(i) {
                        i.getEntries().forEach(t), n.flush()
                    })).observe(i)
                } catch (t) {
                    Qt().warn("Performance", t)
                }
            }, i.Bv = function() {
                var t = this.Ii.getVisibilityState();
                return t === xr || t === wr
            }, i._v = function() {
                this.Bv() && (this.Wv(), this.Lv())
            }, i.Yv = function() {
                if (!this.zv) {
                    this.zv = !0;
                    var t = this.win,
                        i = parseInt(Nr(t, t.document.body).getPropertyValue("--google-font-exp"), 10);
                    i >= 0 && this.addEnabledExperiment("google-font-exp=".concat(i))
                }
            }, i.Wv = function() {
                this.Qm && (this.Yv(), this.Jv())
            }, i.Gv = function(t) {
                if (this.Ii && !this.Bv()) {
                    var i = this.Jm;
                    if (i.length > 0) {
                        var n = i[0],
                            r = i[i.length - 1];
                        if (t.startTime - r.startTime < 1e3 && t.startTime - n.startTime < 5e3) return void i.push(t);
                        this.Lv()
                    }
                    i.push(t), this.Dv()
                }
            }, i.Lv = function() {
                for (var t, i = this.Jm, n = this.Bm.get(Zi), r = 0, e = 0, s = o(i, !0); !(t = s()).done;) {
                    var u = t.value;
                    if (u.sources)
                        for (var h, a = o(u.sources, !0); !(h = a()).done;) r |= Wa(h.value.node);
                    e += u.value
                }
                i.length = 0, this.Yv(), (null == n || e > n) && (this.Bm.reset(Zi), this.Bm.reset(tn), this.tickDelta(Zi, e), this.tickDelta(tn, r), this.flush())
            }, i.Jv = function() {
                0 === this.Wm ? (this.tickDelta(nn, this.Km), this.flush(), this.Wm = 1) : 1 === this.Wm && (this.tickDelta("cls-2", this.Km), this.flush(), this.Wm = 2)
            }, i.qv = function(t) {
                var i = t.element,
                    n = t.startTime,
                    r = Wa(i);
                this.tickDelta("lcpt", r), this.tickDelta("lcp", n), this.tickSinceVisible("lcpv", n), this.flush()
            }, i.Uv = function() {
                var t = this,
                    i = !this.Ii.hasBeenVisible(),
                    n = -1;
                this.Ii.whenFirstVisible().then((function() {
                    n = t.win.performance.now(), t.mark("visible")
                })), this.Xv().then((function() {
                    if (i) {
                        var r = n > -1 ? t.win.performance.now() - n : 0;
                        t.Ii.whenFirstVisible().then((function() {
                            t.tickDelta(rn, r)
                        })), t.$v(r), t.mark(rn)
                    } else t.tick(rn), t.$v(t.win.performance.now() - n);
                    t.flush()
                }))
            }, i.Xv = function() {
                var t = this;
                return this.si.whenFirstPass().then((function() {
                    var i, n = t.win.document.documentElement,
                        r = mr(n).getSize();
                    return zi(0, 0, r.width, r.height), i = n, t.win,
                        function(t, i) {
                            var n = Wn(t);
                            return n.signals().whenSignal(Gs).then((function() {
                                var t = or(n).get().filter((function(t) {
                                    return !(!t.prerenderAllowed() || $a.includes(t.element.tagName))
                                })).map((function(t) {
                                    return t.element
                                }));
                                return 0 === t.length ? Promise.resolve([]) : new Promise((function(i) {
                                    for (var r = n.win, e = new r.IntersectionObserver((function(t) {
                                            e.disconnect();
                                            for (var n = [], r = 0; r < t.length; r++) {
                                                var s = t[r],
                                                    u = s.isIntersecting,
                                                    o = s.target;
                                                u && n.push(o)
                                            }
                                            i(n)
                                        }), {
                                            root: Ni(r) ? r.document : null,
                                            threshold: .01
                                        }), s = 0; s < Math.min(t.length, 100); s++) e.observe(t[s])
                                })).then((function(t) {
                                    return Promise.all(t.map((function(t) {
                                        return t.whenLoaded()
                                    })))
                                }))
                            }))
                        }(i)
                }))
            }, i.tick = function(t, i, n) {
                Zt(null == i || null == n);
                var r, e = {
                    "label": t
                };
                null != i ? e.delta = r = Math.max(i, 0) : null != n ? e.value = n : (this.mark(t), r = this.win.performance.now(), e.value = this.$d + r), this.win.dispatchEvent(We(this.win, "perf", {
                    label: t,
                    delta: r
                })), this.Qd && this.Zd ? this.Ze.sendMessage("tick", e) : this.Kv(e), this.Bm.signal(t, r)
            }, i.mark = function(t) {
                var i, n;
                null === (i = (n = this.win.performance).mark) || void 0 === i || i.call(n, t)
            }, i.tickDelta = function(t, i) {
                this.tick(t, i)
            }, i.tickSinceVisible = function(t, i) {
                var n, r, e = null == i ? this.win.performance.now() : i,
                    s = this.$d + e,
                    u = null !== (n = this.Ze) && void 0 !== n && n.isEmbedded() ? null === (r = this.Ii) || void 0 === r ? void 0 : r.getFirstVisibleTime() : this.$d,
                    o = u ? Math.max(s - u, 0) : 0;
                this.tickDelta(t, o)
            }, i.flush = function() {
                this.Qd && this.Zd && (null == this.Gm && (this.Gm = Object.keys(this.Vm).join(",")), this.Ze.sendMessage("sendCsi", {
                    "ampexp": this.Gm,
                    "canonicalUrl": this.Kd.canonicalUrl,
                    "eventid": this.Yd
                }, !0))
            }, i.addEnabledExperiment = function(t) {
                this.Vm[t] = !0, this.Gm = void 0
            }, i.Kv = function(t) {
                this.Xd.length >= 50 && this.Xd.shift(), this.Xd.push(t)
            }, i.Vv = function() {
                var t = this;
                this.Ze && (this.Zd ? (this.Xd.forEach((function(i) {
                    t.Ze.sendMessage("tick", i)
                })), this.Xd.length = 0) : this.Xd.length = 0)
            }, i.$v = function(t) {
                this.Ze && this.Ze.sendMessage("prerenderComplete", {
                    "value": t
                }, !0)
            }, i.isPerformanceTrackingOn = function() {
                return this.Zd
            }, i.getMetric = function(t) {
                return this.Bm.whenSignal(t)
            }, t
        }();

        function Ka(t) {
            var i = t.document;
            if (i.fonts && i.fonts.values)
                for (var n, r = i.fonts.values(); n = r.next();) {
                    var e = n.value;
                    if (!e) return;
                    "loading" == e.status && "display" in e && "auto" == e.display && (e.display = "swap")
                }
        }
        var Ja = function() {
                function t(t, i) {
                    this.tp = t, this.bo = i, this.Ag = !1, this.xg = 0, this.Eg = this.Wp.bind(this), this.Pg = this.Kp.bind(this), this.Og = this.Qp.bind(this), this.Ig = this.Mg.bind(this), this.tp.addEventListener("touchstart", this.Eg, !0)
                }
                var i = t.prototype;
                return i.cleanup = function() {
                    this.Tg(), this.tp.removeEventListener("touchstart", this.Eg, !0)
                }, i.Wp = function(t) {
                    this.Ag || !t.touches || 1 != t.touches.length || this.bo.getScrollTop() > 0 || this.Sg(t.touches[0].clientY)
                }, i.Sg = function(t) {
                    this.Ag = !0, this.xg = t, this.tp.addEventListener("touchmove", this.Pg, !0), this.tp.addEventListener("touchend", this.Og, !0), this.tp.addEventListener("touchcancel", this.Ig, !0)
                }, i.Tg = function() {
                    this.Ag = !1, this.xg = 0, this.tp.removeEventListener("touchmove", this.Pg, !0), this.tp.removeEventListener("touchend", this.Og, !0), this.tp.removeEventListener("touchcancel", this.Ig, !0)
                }, i.Kp = function(t) {
                    if (this.Ag) {
                        var i = t.touches[0].clientY - this.xg;
                        i > 0 && t.preventDefault(), 0 != i && this.Tg()
                    }
                }, i.Qp = function(t) {
                    this.Tg()
                }, i.Mg = function(t) {
                    this.Tg()
                }, t
            }(),
            Xa = ["amp-ad", "amp-embed", "amp-video"],
            Qa = "extensions",
            Za = "0.1",
            tc = "latest",
            ic = "__AMP_EXT_LDR",
            nc = function() {
                function t(t) {
                    this.win = t, this.af = Yn(t), this.Jf = {}, this.Xf = null, this.Qf = null, this.Zf = null
                }
                var i = t.prototype;
                return i.registerExtension = function(t, i, n, r, e) {
                    var s, u = n ? this.Jf[sc(t, tc)] : null,
                        o = this.tl(t, i, null === (s = null == u ? void 0 : u.auto) || void 0 === s || s);
                    if (o.latest = n, !o.loaded) {
                        n && (this.Jf[sc(t, tc)] = o);
                        try {
                            var h, a;
                            this.Xf = t, this.Qf = i, this.Zf = n, r(e, e._), o.loaded = !0, null === (h = o.resolve) || void 0 === h || h.call(o, o.extension), null == u || null === (a = u.resolve) || void 0 === a || a.call(u, o.extension)
                        } catch (t) {
                            var c, f;
                            throw o.error = t, null === (c = o.reject) || void 0 === c || c.call(o, t), null == u || null === (f = u.reject) || void 0 === f || f.call(u, t), t
                        } finally {
                            this.Xf = null, this.Qf = null, this.Zf = null
                        }
                    }
                }, i.waitForExtension = function(t, i) {
                    var n = this.il(this.tl(t, i));
                    return ar(this.win).timeoutPromise(16e3, n).catch((function(i) {
                        if (!i.message.includes("timeout")) throw i;
                        return Jt().error(Qa, "Waited over 16s to load extension ".concat(t, ".")), n
                    }))
                }, i.preloadExtension = function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Za;
                    "amp-embed" == t && (t = "amp-ad");
                    var n = this.tl(t, i);
                    return this.nl(t, i, n), this.il(n)
                }, i.installExtensionForDoc = function(t, i) {
                    var n = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Za,
                        e = t.getRootNode(),
                        s = e[ic];
                    return s || (s = e[ic] = A()), s[i] ? s[i] : (t.declareExtension(i, r), xu(t.win, i), s[i] = this.preloadExtension(i, r).then((function() {
                        return n.installExtensionInDoc(t, i, r)
                    })))
                }, i.reloadExtension = function(t, i, n) {
                    var r = yn(this.win, t, i, n, !1),
                        e = this.Jf[sc(t, i)];
                    return e && (Zt(!e.loaded && !e.error), e.scriptPresent = !1), r.forEach((function(i) {
                        return i.setAttribute("i-amphtml-loaded-new-version", t)
                    })), this.preloadExtension(t, i)
                }, i.importUnwrapped = function(t, i) {
                    var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Za,
                        e = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        s = yn(t, i, r, e),
                        u = s.length > 0 ? s[0] : null;
                    return u ? n = u.__AMP_SCR_LOADED : (n = (u = bn(this.win, i, r)).__AMP_SCR_LOADED = new Promise((function(t, i) {
                        u.onload = t, u.onerror = i
                    })), t.document.head.appendChild(u)), n
                }, i.loadElementClass = function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Za;
                    return this.preloadExtension(t, i).then((function(i) {
                        return Zt(i.elements[t]).implementationClass
                    }))
                }, i.addElement = function(t, i, n) {
                    var r = this;
                    this.rl(t).extension.elements[t] = {
                        implementationClass: i,
                        css: n
                    }, this.addDocFactory((function(e) {
                        r.sl(e, t, i, n)
                    }))
                }, i.addTemplate = function(t, i) {
                    this.addDocFactory((function(n) {
                        ! function(t, i, n) {
                            Pn(t, "templates").Yh(i, n)
                        }(n, t, i)
                    }))
                }, i.sl = function(t, i, n, r) {
                    var e = this;
                    r ? is(t, r, (function() {
                        e.ol(t.win, i, n)
                    }), !1, i) : this.ol(t.win, i, n)
                }, i.ol = function(t, i, n) {
                    (function(t, i, n) {
                        var r = function(t, i) {
                            if (i.requiresShadowDom() && !t.Element.prototype.attachShadow) return tr(t).importUnwrapped(t, "amp-shadow-dom-polyfill")
                        }(t, n);
                        r ? r.then((function() {
                            return yu(t, i, n)
                        })) : yu(t, i, n)
                    })(t, i, n), An(t, i, ec)
                }, i.addService = function(t, i) {
                    this.rl(t).extension.services.push({
                        serviceName: t,
                        serviceClass: i
                    }), this.addDocFactory((function(n) {
                        xn(n, t, i, !0)
                    }))
                }, i.addDocFactory = function(t, i) {
                    var n = this.rl(i);
                    if (n.docFactories.push(t), this.Xf && this.af.isSingleDoc()) {
                        var r = this.af.getAmpDoc(this.win.document),
                            e = this.Xf,
                            s = this.Qf,
                            u = this.Zf || !1;
                        (r.declaresExtension(e, s) || u && r.declaresExtension(e, tc) || n.auto) && t(r)
                    }
                }, i.preinstallEmbed = function(t, i) {
                    var n = this.win,
                        r = t.win;
                    ! function(t, i) {
                        Eu(t, i, "amp-img"), Eu(t, i, "amp-pixel")
                    }(n, r), rc(r), i.forEach((function(i) {
                        var n = i.extensionId,
                            e = i.extensionVersion;
                        t.declareExtension(n, e), Xa.includes(n) || xu(r, n)
                    }))
                }, i.installExtensionsInDoc = function(t, i) {
                    var n = this;
                    return Promise.all(i.map((function(i) {
                        var r = i.extensionId,
                            e = i.extensionVersion;
                        return n.installExtensionInDoc(t, r, e)
                    })))
                }, i.installExtensionInDoc = function(t, i) {
                    var n = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Za;
                    return t.declareExtension(i, r), this.il(this.tl(i, r)).then((function() {
                        n.tl(i, r).docFactories.forEach((function(n) {
                            try {
                                n(t)
                            } catch (t) {
                                d("Doc factory failed: ", t, i)
                            }
                        }))
                    }))
                }, i.tl = function(t, i, n) {
                    var r = sc(t, i),
                        e = this.Jf[r];
                    return e || (e = {
                        version: i,
                        latest: i == tc,
                        extension: {
                            elements: {},
                            services: []
                        },
                        auto: n || !1,
                        docFactories: [],
                        promise: void 0,
                        resolve: void 0,
                        reject: void 0,
                        loaded: void 0,
                        error: void 0,
                        scriptPresent: void 0
                    }, this.Jf[r] = e), e
                }, i.rl = function(t) {
                    return this.Xf || Qt().error(Qa, "unknown extension for ", t), this.tl(this.Xf || "_UNKNOWN_", this.Qf || "")
                }, i.il = function(t) {
                    if (!t.promise)
                        if (t.loaded) t.promise = Promise.resolve(t.extension);
                        else if (t.error) t.promise = Promise.reject(t.error);
                    else {
                        var i = new a;
                        t.promise = i.promise, t.resolve = i.resolve, t.reject = i.reject
                    }
                    return t.promise
                }, i.nl = function(t, i, n) {
                    if (this.ul(t, i, n)) {
                        var r = bn(this.win, t, i);
                        this.win.document.head.appendChild(r), n.scriptPresent = !0
                    }
                }, i.ul = function(t, i, n) {
                    if (n.loaded || n.error) return !1;
                    if (void 0 === n.scriptPresent) {
                        var r = yn(this.win, t, i, n.latest);
                        n.scriptPresent = r.length > 0
                    }
                    return !n.scriptPresent
                }, t
            }();

        function rc(t) {
            Xa.forEach((function(i) {
                xu(t, i)
            }))
        }

        function ec() {
            return {}
        }

        function sc(t, i) {
            return "".concat(t, ":").concat(i)
        }
        var uc, oc = "-shadowcsshost",
            hc = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",
            ac = (new RegExp("(" + oc + hc, "gim"), new RegExp("(-shadowcsscontext" + hc, "gim"), new RegExp(oc, "gim"), new RegExp("-shadowcsscontext", "gim"), "html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#000!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom],amp-script[sandboxed]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/"),
            cc = "[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img[i-amphtml-ssr]:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}amp-story{visibility:hidden!important}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/";
        Yt = $t, Qt(), Jt(), uc = function(t, i, n) {
            Ds(i, n), i && t && tt(i.message) && !(i.message.indexOf(Q) >= 0) && function(t, i) {
                if (Yn(i).isSingleDoc()) {
                    var n = {
                        "errorName": t.name,
                        "errorMessage": t.message
                    };
                    ! function(t, i) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        Kn(t).then((function(e) {
                            e && e.triggerEventForTarget(t, i, n, r)
                        }))
                    }(function(t) {
                        var i = Yn(t).getSingleDoc().getRootNode();
                        return i.documentElement || i.body || i
                    }(i), "user-error", n, !1)
                }
            }(i, t)
        }.bind(null, self), self.__AMP_REPORT_ERROR = uc;
        var fc, lc = "runtime";

        function vc(t, i) {
            if (t.__AMP_TAG) return h();
            t.__AMP_TAG = !0;
            var n = t.AMP || [];
            An(t, "extensions", nc);
            var r = tr(t);
            Fa(t), rc(t), t.AMP = {
                win: t,
                "_": t.AMP ? t.AMP._ : void 0
            }, t.AMP.config = {
                urls: {
                    thirdParty: Pt,
                    thirdPartyFrameHost: Ot,
                    thirdPartyFrameRegex: It,
                    cdn: Mt,
                    cdnProxyRegex: xt,
                    localhostRegex: Tt,
                    errorReporting: St,
                    betaErrorReporting: Rt,
                    localDev: _t,
                    trustedViewerHosts: kt,
                    geoApi: Ct
                }
            }, t.AMP.BaseElement = eu, t.AMP.registerElement = r.addElement.bind(r), t.AMP.registerTemplate = r.addTemplate.bind(r), t.AMP.registerServiceForDoc = r.addService.bind(r), t.AMP.isExperimentOn = Ge.bind(null, t), t.AMP.toggleExperiment = Ve.bind(null, t), t.AMP.setLogLevel = Ht.bind(null), t.AMP.setTickFunction = function(t, i) {};
            var e = i(t, r);

            function s(i) {
                ! function(t, i, n) {
                    "function" == typeof i || "high" == i.p ? h().then(n) : (n.displayName = i.n, Xs(t.document, n))
                }(t, i, (function() {
                    e.then((function() {
                        "function" == typeof i ? i(t.AMP, t.AMP.Il) : r.registerExtension(i.n, i.ev, i.l, i.f, t.AMP)
                    }))
                }))
            }
            for (var u = 0; u < n.length; u++) {
                var o = n[u];
                if (dc(t, o)) n.splice(u--, 1);
                else if ("function" == typeof o || "high" == o.p) {
                    try {
                        s(o)
                    } catch (t) {
                        Qt().error(lc, "Extension failed: ", t, o.n)
                    }
                    n.splice(u--, 1)
                }
            }! function(t, i) {
                t.document.body && ! function(t) {
                    return ts(t).length > 0
                }(t) ? ar(t).delay(i, 1) : i()
            }(t, (function() {
                t.AMP.push = function(i) {
                    dc(t, i) || s(i)
                };
                for (var i = 0; i < n.length; i++) {
                    var r = n[i];
                    if (!dc(t, r)) try {
                        s(r)
                    } catch (t) {
                        Qt().error(lc, "Extension failed: ", t, r.n)
                    }
                }
                n.length = 0
            })), t.AMP.push || (t.AMP.push = n.push.bind(n)), sr(t).isIos() && Rr(t.document.documentElement, "cursor", "pointer");
            var a = tr(t);
            return Ki(t) && a.preloadExtension("amp-resize-observer-polyfill"), Fi(t) && a.preloadExtension("amp-intersection-observer-polyfill"), e
        }

        function dc(t, i) {
            return "function" != typeof i && (!!i.m || "2205270638004" != i.v && (tr(t).reloadExtension(i.n, i.ev, i.l), !0))
        }

        function mc(t, i) {
            Xs(self.document, (function() {
                Fa(self), qa(t), i.coreServicesAvailable(),
                    function(t) {
                        var i = new a,
                            n = i.promise,
                            r = i.resolve;
                        mh = ar(t).timeoutPromise(8e3, n, "TrackImpressionPromise timeout").catch((function(t) {
                            Qt().warn("IMPRESSION", t)
                        }));
                        var e = vr(t.document.documentElement),
                            s = e.isTrustedViewer(),
                            u = e.getReferrerUrl().then((function(t) {
                                return function(t) {
                                    var i = vs(t);
                                    return "https:" == i.protocol && gh.some((function(t) {
                                        return t.test(i.hostname)
                                    }))
                                }(t)
                            }));
                        Promise.all([s, u]).then((function(i) {
                            var n = i[0],
                                e = i[1];
                            if (n || e || Ge(t, "alp")) {
                                var s = function(t) {
                                        var i = vr(t.document.documentElement);
                                        return i.getParam("replaceUrl") ? i.hasCapability("replaceUrl") ? i.sendMessageAwaitResponse("getReplaceUrl", void 0).then((function(t) {
                                            t && "object" == p(t) ? i.replaceUrl(t.replaceUrl || null) : Qt().warn("IMPRESSION", "get invalid replaceUrl response")
                                        }), (function(t) {
                                            Qt().warn("IMPRESSION", "Error request replaceUrl from viewer", t)
                                        })) : (i.replaceUrl(i.getParam("replaceUrl") || null), h()) : h()
                                    }(t),
                                    u = function(t) {
                                        var i = Wn(t.document.documentElement),
                                            n = vr(i).getParam("click");
                                        return n ? 0 != n.indexOf("https://") ? (Jt().warn("IMPRESSION", "click fragment param should start with https://. Found ", n), h()) : (zr.getLocation(t).hash && (zr.getLocation(t).hash = ""), i.whenFirstVisible().then((function() {
                                            return function(t, i) {
                                                return pr(t).fetchJson(i, {
                                                    credentials: "include"
                                                }).then((function(t) {
                                                    return 204 == t.status ? null : t.json()
                                                }))
                                            }(t, n)
                                        })).then((function(i) {
                                            ! function(t, i) {
                                                if (i) {
                                                    var n = i.location,
                                                        r = i.tracking_url || n;
                                                    if (r && !xs(r) && ((new Image).src = r), n) {
                                                        if (!t.history.replaceState) return;
                                                        var e = vr(t.document.documentElement),
                                                            s = gs(zr.getLocation(t).href, yt(vs(n).search));
                                                        t.history.replaceState(null, "", s), e.maybeUpdateFragmentForCct()
                                                    }
                                                }
                                            }(t, i)
                                        })).catch((function(t) {
                                            Jt().warn("IMPRESSION", "Error on request clickUrl: ", t)
                                        }))) : h()
                                    }(t);
                                Promise.all([s, u]).then((function() {
                                    r()
                                }), (function() {}))
                            } else r()
                        }))
                    }(self)
            })), Xs(self.document, (function() {
                vc(self, (function(t) {
                    return function(t) {
                        var i = t.document.documentElement,
                            n = Yn(t).getSingleDoc();
                        t.AMP.ampdoc = n;
                        var r = vr(i);
                        t.AMP.viewer = r, Dt().development && (t.AMP.toggleRuntime = r.toggleRuntime.bind(r), t.AMP.resources = or(i));
                        var e = mr(i);
                        t.AMP.viewport = {}, t.AMP.viewport.getScrollLeft = e.getScrollLeft.bind(e), t.AMP.viewport.getScrollWidth = e.getScrollWidth.bind(e), t.AMP.viewport.getWidth = e.getWidth.bind(e)
                    }(t), (i = t).AMP.installAmpdocServices = qa.bind(null), i.AMP.combinedCss = ac + cc, Mi(t.document).then((function() {
                        Au(t.AMP.ampdoc)
                    }));
                    var i
                }))
            })), Xs(self.document, (function() {
                ! function(t) {
                    ! function(t) {
                        Pu(t, Iu, Tu)
                    }(t),
                    function(t) {
                        Pu(t, _u, ku)
                    }(t),
                    function(t) {
                        Pu(t, "amp-layout", Su)
                    }(t)
                }(self)
            })), Xs(self.document, (function() {
                Au(t), dn(self.document).then((function() {
                    return pu()
                }))
            })), Xs(self.document, (function() {
                (function(t) {
                    var i = t.document.documentElement;
                    "0" == vr(i).getParam("p2r") && sr(t).isChrome() && new Ja(t.document, mr(i))
                })(self),
                function(t) {
                    var i = t.win;
                    ju(i.document) && t.isSingleDoc() && !i.document.documentElement.hasAttribute("data-amp-auto-lightbox-disable") && Qs(t, (function() {
                        Ba(t).then((function(n) {
                            n || tr(i).installExtensionForDoc(t, "amp-auto-lightbox")
                        }))
                    }), 10)
                }(t),
                function(t) {
                    var i = t.win;
                    ju(i.document) && sr(t.win).isStandalone() && Qs(t, (function() {
                        tr(i).installExtensionForDoc(t, "amp-standalone").then((function() {
                            return Hn(t.getBody(), "standalone", "amp-standalone")
                        })).then((function(t) {
                            return t.initialize()
                        }))
                    }), 10)
                }(t),
                function(t) {
                    var i = t.location.href;
                    if (!i.startsWith("about:")) {
                        var n = !1,
                            r = wt(t);
                        Ut(t, r) && (n = "0" !== r.validate), n && function(t, i) {
                            var n = t.createElement("script");
                            n.src = i, Li(t, n);
                            var r = Xe(n).then((function() {
                                t.head.removeChild(n)
                            }), (function() {}));
                            return t.head.appendChild(n), r
                        }(t.document, "".concat(Mt, "/v0/validator_wasm.js")).then((function() {
                            amp.validator.validateUrlAndLog(i, t.document)
                        }))
                    }
                }(self),
                function(t) {
                    Zt(t.defaultView);
                    var i = t.defaultView;
                    Mi(t).then((function() {
                        return function(t) {
                            var i = ts(t).map((function(i) {
                                var n = function(t, i) {
                                    return Nn(t, i)
                                }(t, i).then((function(t) {
                                    return t && function(t) {
                                        return "function" == typeof t.whenReady
                                    }(t) ? t.whenReady().then((function() {
                                        return t
                                    })) : t
                                }));
                                return ar(t).timeoutPromise(3e3, n, "Render timeout waiting for service ".concat(i, " to be ready."))
                            }));
                            return Promise.all(i)
                        }(i)
                    })).catch((function(t) {
                        return d(t), []
                    })).then((function(n) {
                        rs = !0, t.body.getBoundingClientRect(), ss(t), Rn(t).signals().signal(Oe), n.length > 0 && or(t.documentElement).schedulePass(1, !0);
                        try {
                            var r = er(i);
                            r.tick("mbv"), r.flush()
                        } catch (t) {}
                    }))
                }(self.document),
                function(t) {
                    dn(t).then((function() {
                        var i = t.defaultView;
                        if (i) {
                            var n = ur(i),
                                r = Zn(t.documentElement),
                                e = Wn(t);
                            n.url(e, r.sourceUrl), n.url(e, r.canonicalUrl)
                        }
                    }))
                }(self.document)
            }), !0), Xs(self.document, (function() {
                i.tick("e_is"), or(t).ampInitComplete(), i.flush()
            }))
        }
        self.location && (self.location.originalHash = self.location.hash);
        try {
            ! function(t) {
                t.onerror = Ls, t.addEventListener("unhandledrejection", (function(t) {
                    !t.reason || t.reason.message !== _s && t.reason.message !== ks && "AbortError" !== t.reason.message ? Ds(t.reason || new Error("rejected promise " + t)) : t.preventDefault()
                }))
            }(self),
            function(t, i, n) {
                An(t, "ampdoc", (function() {
                    return new Br(t, !0, void 0)
                }))
            }(self), fc = Yn(self)
        } catch (t) {
            throw es(self.document), t
        }
        Xs(self.document, (function() {
            var t = fc.getAmpDoc(self.document);
            _h(self), An(self, "performance", Ya);
            var i = er(self);
            (function(t) {
                fn(t.document, (function() {
                    return function(t) {
                        var i = 1500,
                            n = t.performance;
                        n && n.timing && n.timing.navigationStart && (i = Date.now() - n.timing.navigationStart);
                        var r = Math.max(1, 2100 - i);
                        t.setTimeout((function() {
                            Ka(t);
                            var i = t.document.styleSheets;
                            if (i) {
                                for (var n = t.document.querySelectorAll('link[rel~="stylesheet"]:not([href^="'.concat(vi(Mt), '"])')), e = [], s = 0; s < n.length; s++) {
                                    for (var u = n[s], o = !1, h = 0; h < i.length; h++)
                                        if (i[h].ownerNode == u) {
                                            o = !0;
                                            break
                                        }
                                    o || e.push(u)
                                }
                                for (var a = function(i) {
                                        var n = e[i],
                                            s = n.media || "all";
                                        n.media = "print", n.onload = function() {
                                            n.media = s, Ka(t)
                                        }, n.setAttribute("i-amphtml-timeout", r), n.parentNode.insertBefore(n, n.nextSibling)
                                    }, c = 0; c < e.length; c++) a(c)
                            }
                        }), r)
                    }(t)
                }))
            })(self), i.tick("is"), is(t, ac + cc, (function() {
                return mc(t, i)
            }), !0, "amp-runtime")
        })), self.console && (console.info || console.log).call(console, "Powered by AMP ⚡ HTML – Version ".concat("2205270638004"), self.location.href), self.document.documentElement.setAttribute("amp-version", "2205270638004")
    }()
} catch (t) {
    throw setTimeout((function() {
        var t = document.body.style;
        t.opacity = 1, t.visibility = "visible", t.animation = "none", t.WebkitAnimation = "none;"
    }), 1e3), t
}
//# sourceMappingURL=v0.js.map