;
(self.AMP = self.AMP || []).push({
    m: 0,
    v: "2205270638004",
    n: "amp-analytics",
    ev: "0.1",
    l: !0,
    f: function(t, n) {
        ! function() {
            function n(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var i = 0, r = new Array(n); i < n; i++) r[i] = t[i];
                return r
            }

            function i(t, i) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (r) return (r = r.call(t)).next.bind(r);
                if (Array.isArray(t) || (r = function(t, i) {
                        if (t) {
                            if ("string" == typeof t) return n(t, i);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, i) : void 0
                        }
                    }(t)) || i && t && "number" == typeof t.length) {
                    r && (t = r);
                    var e = 0;
                    return function() {
                        return e >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[e++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r;

            function e() {
                return r || (r = Promise.resolve(void 0))
            }
            var u = function() {
                var t = this;
                this.promise = new Promise((function(n, i) {
                    t.resolve = n, t.reject = i
                }))
            };

            function s(t) {
                return new Promise((function(n) {
                    n(t())
                }))
            }

            function o(t, n) {
                return (o = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                })(t, n)
            }

            function a(t, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), n && o(t, n)
            }

            function h(t) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function f(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function l(t, n) {
                if (n && ("object" === c(n) || "function" == typeof n)) return n;
                if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                return f(t)
            }

            function v(t) {
                var n = function() {
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
                    var i, r = h(t);
                    if (n) {
                        var e = h(this).constructor;
                        i = Reflect.construct(r, arguments, e)
                    } else i = r.apply(this, arguments);
                    return l(this, i)
                }
            }
            var d = Array.isArray;

            function m(t, n) {
                for (var i = 0; i < t.length; i++)
                    if (n(t[i], i, t)) return i;
                return -1
            }

            function p(t, n) {
                var i = t.length - n.length;
                return i >= 0 && t.indexOf(n, i) == i
            }

            function b(t, n, i) {
                for (var r = i || 1, e = function(i) {
                        var r = 0;
                        if (t = t.replace(/\${([^{}]*)}/g, (function(t, i) {
                                return r++, n(i)
                            })), !r) return "break"
                    }, u = 0; u < r && "break" !== e(); u++);
                return t
            }
            var E, T = Object.prototype,
                g = T.hasOwnProperty,
                y = T.toString;

            function w(t) {
                return "[object Object]" === y.call(t)
            }

            function S(t) {
                var n = Object.create(null);
                return t && Object.assign(n, t), n
            }

            function A(t, n) {
                return g.call(t, n)
            }

            function O(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    r = [],
                    e = [];
                for (e.push({
                        t: t,
                        s: n,
                        d: 0
                    }); e.length > 0;) {
                    var u = e.shift(),
                        s = u.d,
                        o = u.s,
                        a = u.t;
                    if (r.includes(o)) throw new Error("Source object has a circular reference.");
                    if (r.push(o), a !== o)
                        if (s > i) Object.assign(a, o);
                        else
                            for (var h = 0, c = Object.keys(o); h < c.length; h++) {
                                var f = c[h],
                                    l = o[f];
                                if (A(a, f)) {
                                    var v = a[f];
                                    if (w(l) && w(v)) {
                                        e.push({
                                            t: v,
                                            s: l,
                                            d: s + 1
                                        });
                                        continue
                                    }
                                }
                                a[f] = l
                            }
                }
                return t
            }

            function N(t) {
                return "number" == typeof t && isFinite(t)
            }

            function I(t, n, i, r, e, u, s, o, a, h, c) {
                return t
            }

            function _(t) {
                return JSON.parse(t)
            }

            function R(t, n) {
                try {
                    return _(t)
                } catch (t) {
                    return null == n || n(t), null
                }
            }

            function P(t) {
                return (t.ownerDocument || t).defaultView
            }

            function C(t) {
                return void 0 !== E ? E : E = function(t) {
                    try {
                        var n = t.ownerDocument,
                            i = n.createElement("div"),
                            r = n.createElement("div");
                        return i.appendChild(r), i.querySelector(":scope div") === r
                    } catch (t) {
                        return !1
                    }
                }(t)
            }

            function M(t, n) {
                return t.replace(/^|,/g, "$&".concat(n, " "))
            }

            function D(t, n) {
                var i = t.classList,
                    r = "i-amphtml-scoped";
                i.add(r);
                var e = M(n, ".".concat(r)),
                    u = t.querySelectorAll(e);
                return i.remove(r), u
            }

            function L(t, n) {
                if (C(t)) return t.querySelector(M(n, ":scope"));
                var i = D(t, n)[0];
                return void 0 === i ? null : i
            }

            function k(t, n) {
                var i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
                return !!i && i.call(t, n)
            }

            function x(t, n) {
                return t.closest ? t.closest(n) : function(t, n, i) {
                    var r;
                    for (r = t; r && void 0 !== r; r = r.parentElement)
                        if (n(r)) return r;
                    return null
                }(t, (function(t) {
                    return k(t, n)
                }))
            }

            function U(t, n, i) {
                return function(t, n) {
                    for (var i in n) t.setAttribute(i, n[i]);
                    return t
                }(t.createElement(n), i)
            }

            function j(t, n, i) {
                var r = n || function(t) {
                        return t
                    },
                    e = t.dataset,
                    u = {},
                    s = i || /^param(.+)/;
                for (var o in e) {
                    var a = o.match(s);
                    a && (u[r(a[1][0].toLowerCase() + a[1].substr(1))] = e[o])
                }
                return u
            }

            function H(t) {
                return t.parent && t.parent != t
            }

            function F(t) {
                var n = Object.getOwnPropertyDescriptor(t, "message");
                if (null != n && n.writable) return t;
                var i = t.message,
                    r = t.stack,
                    e = new Error(i);
                for (var u in t) e[u] = t[u];
                return e.stack = r, e
            }

            function V(t) {
                for (var n, r = null, e = "", u = i(arguments, !0); !(n = u()).done;) {
                    var s = n.value;
                    s instanceof Error && !r ? r = F(s) : (e && (e += " "), e += s)
                }
                return r ? e && (r.message = e + ": " + r.message) : r = new Error(e), r
            }

            function q(t) {
                var n, i;
                null === (n = (i = self).__AMP_REPORT_ERROR) || void 0 === n || n.call(i, t)
            }

            function G(t) {
                var n = V.apply(null, arguments);
                setTimeout((function() {
                    throw q(n), n
                }))
            }
            var B = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

            function W(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                try {
                    return decodeURIComponent(t)
                } catch (t) {
                    return n
                }
            }

            function $(t) {
                var n, i = S();
                if (!t) return i;
                for (; n = B.exec(t);) {
                    var r = W(n[1], n[1]),
                        e = n[2] ? W(n[2].replace(/\+/g, " "), n[2]) : "";
                    i[r] = e
                }
                return i
            }

            function Y(t) {
                var n = (t || self).location;
                return $(n.originalHash || n.hash)
            }
            var z = "";

            function K(t) {
                var n = t || self;
                return n.__AMP_MODE ? n.__AMP_MODE : n.__AMP_MODE = function(t) {
                    return {
                        localDev: !1,
                        development: X(t, Y(t)),
                        esm: !1,
                        test: !1,
                        rtvVersion: J(t)
                    }
                }(n)
            }

            function J(t) {
                var n;
                return z || (z = (null === (n = t.AMP_CONFIG) || void 0 === n ? void 0 : n.v) || "01".concat("2205270638004")), z
            }

            function X(t, n) {
                var i = n || Y(t);
                return ["1", "actions", "amp", "amp4ads", "amp4email"].includes(i.development) || !!t.AMP_DEV_MODE
            }
            var Z = function() {
                return self.AMP.config.urls
            }();

            function Q(t, n, i) {
                return n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i, t
            }
            self.__AMP_LOG = self.__AMP_LOG || {
                user: null,
                dev: null,
                userForEmbed: null
            };
            var tt = self.__AMP_LOG;

            function nt(t, n) {
                throw new Error("failed to call initLogConstructor")
            }

            function it(t) {
                return tt.user || (tt.user = rt()),
                    function(t, n) {
                        return n && n.ownerDocument.defaultView != t
                    }(tt.user.win, t) ? tt.userForEmbed || (tt.userForEmbed = rt()) : tt.user
            }

            function rt(t) {
                return nt()
            }

            function et() {
                return tt.dev || (tt.dev = nt())
            }

            function ut(t, n, i, r, e, u, s, o, a, h, c) {
                return t
            }

            function st(t, n, i, r, e, u, s, o, a, h, c) {
                return it().assert(t, n, i, r, e, u, s, o, a, h, c)
            }

            function ot(t, n) {
                return pt(t = lt(t), n)
            }

            function at(t, n) {
                return pt(mt(dt(t)), n)
            }

            function ht(t, n) {
                var i = mt(dt(t));
                return gt(i, n) ? pt(i, n) : null
            }

            function ct(t, n) {
                return function(t, n) {
                    var i = Et(t, n);
                    if (i) return i;
                    var r, e, s, o, a = Tt(t);
                    return a[n] = (e = (r = new u).promise, s = r.reject, o = r.resolve, e.catch((function() {})), {
                        obj: null,
                        promise: e,
                        resolve: o,
                        reject: s,
                        context: null,
                        ctor: null
                    }), a[n].promise
                }(mt(t), n)
            }

            function ft(t, n) {
                return Et(mt(t), n)
            }

            function lt(t) {
                return t.__AMP_TOP || (t.__AMP_TOP = t)
            }

            function vt(t, n) {
                var i = (t.ownerDocument || t).defaultView,
                    r = n || lt(i);
                if (i && i != r && lt(i) == r) try {
                    return i.frameElement
                } catch (t) {}
                return null
            }

            function dt(t) {
                return t.nodeType ? (n = P(t), ot(n, "ampdoc")).getAmpDoc(t) : t;
                var n
            }

            function mt(t) {
                var n = dt(t);
                return n.isSingleDoc() ? n.win : n
            }

            function pt(t, n) {
                ut(gt(t, n));
                var i = Tt(t)[n];
                return i.obj || (ut(i.ctor), ut(i.context), i.obj = new i.ctor(i.context), ut(i.obj), i.context = null, i.resolve && i.resolve(i.obj)), i.obj
            }

            function bt(t, n, i, r, e, u) {
                var s = Tt(t),
                    o = s[i];
                o || (o = s[i] = {
                    obj: null,
                    promise: null,
                    resolve: null,
                    reject: null,
                    context: null,
                    ctor: null,
                    sharedInstance: u || !1
                }), !e && o.ctor || (o.ctor = r, o.context = n, o.sharedInstance = u || !1, o.resolve && pt(t, i))
            }

            function Et(t, n) {
                var i = Tt(t)[n];
                return i ? i.promise ? i.promise : (pt(t, n), i.promise = Promise.resolve(i.obj)) : null
            }

            function Tt(t) {
                var n = t.__AMP_SERVICES;
                return n || (n = t.__AMP_SERVICES = {}), n
            }

            function gt(t, n) {
                var i = t.__AMP_SERVICES && t.__AMP_SERVICES[n];
                return !(!i || !i.ctor)
            }

            function yt(t, n, i, r) {
                var e = ft(t, n);
                if (e) return e;
                var u = dt(t);
                return u.whenExtensionsKnown().then((function() {
                    var t = u.getExtensionVersion(i);
                    return t ? ot(u.win, "extensions").waitForExtension(i, t) : null
                })).then((function(i) {
                    return i ? r ? ft(t, n) : ct(t, n) : null
                }))
            }
            var wt, St = function(t) {
                    return dt(t)
                },
                At = function(t) {
                    return ot(t, "crypto")
                },
                Ot = function(t) {
                    return ot(t, "performance")
                },
                Nt = function(t) {
                    return ot(t, "preconnect")
                },
                It = function(t) {
                    return pt(t, "timer")
                },
                _t = function(t) {
                    return ht(t, "url-replace")
                },
                Rt = function(t) {
                    return yt(t, "consentPolicyManager", "amp-consent")
                },
                Pt = function(t) {
                    return ht(t, "url")
                },
                Ct = function(t) {
                    return at(t, "viewport")
                },
                Mt = function(t) {
                    return ot(t, "xhr")
                };

            function Dt(t, n, i, r) {
                var e = t,
                    u = i,
                    s = function(t) {
                        try {
                            return u(t)
                        } catch (t) {
                            var n, i;
                            throw null === (n = (i = self).__AMP_REPORT_ERROR) || void 0 === n || n.call(i, t), t
                        }
                    },
                    o = function() {
                        if (void 0 !== wt) return wt;
                        wt = !1;
                        try {
                            var t = {
                                get capture() {
                                    return wt = !0, !1
                                }
                            };
                            self.addEventListener("test-options", null, t), self.removeEventListener("test-options", null, t)
                        } catch (t) {}
                        return wt
                    }(),
                    a = !(null == r || !r.capture);
                return e.addEventListener(n, s, o ? r : a),
                    function() {
                        null == e || e.removeEventListener(n, s, o ? r : a), u = null, e = null, s = null
                    }
            }

            function Lt(t, n, i, r) {
                return Dt(t, n, i, r)
            }

            function kt(t) {
                return t.data
            }

            function xt(t, n, i, r) {
                var e = i,
                    u = Dt(t, n, (function(t) {
                        try {
                            e(t)
                        } finally {
                            e = null, u()
                        }
                    }), r);
                return u
            }

            function Ut(t) {
                return "AUDIO" === t.tagName || "VIDEO" === t.tagName
            }
            var jt = "active";

            function Ht(t, n) {
                var i = 0;
                return t.type === jt && (i = 5), Math.min(n - t.time, i)
            }
            var Ft = function() {
                    function t() {
                        this.tTt = 0, this.nTt = void 0
                    }
                    var n = t.prototype;
                    return n.push = function(t) {
                        this.nTt && this.nTt.time < t.time && (this.tTt += Ht(this.nTt, t.time)), this.nTt = t
                    }, n.getTotalEngagedTime = function(t) {
                        var n = 0;
                        return void 0 !== this.nTt && (n = this.tTt + Ht(this.nTt, t)), n
                    }, t
                }(),
                Vt = ["mousedown", "mouseup", "mousemove", "keydown", "keyup"],
                qt = ["mouseleave"],
                Gt = function() {
                    function t(t) {
                        this.ampdoc = t, this.iTt = this.rTt.bind(this), this.eTt = this.uTt.bind(this), this.sTt = this.oTt.bind(this), this.aTt = this.hTt.bind(this), this.cTt = {}, this.fTt = [], this.lTt = !1, this.vTt = !1, this.dTt = new Ft, this.bo = Ct(this.ampdoc), this.ampdoc.whenFirstVisible().then(this.Nh.bind(this))
                    }
                    var n = t.prototype;
                    return n.Nh = function() {
                        this.Zh = Date.now(), this.uTt(), this.mTt()
                    }, n.pTt = function() {
                        var t = Date.now() - this.Zh;
                        return t > 0 ? t : 0
                    }, n.rTt = function() {
                        this.lTt = !1, this.vTt = !1
                    }, n.mTt = function() {
                        this.bTt(this.ampdoc.getRootNode(), Vt, this.eTt), this.bTt(this.ampdoc.getRootNode(), qt, this.sTt), this.fTt.push(this.ampdoc.onVisibilityChanged(this.aTt)), this.bo.onScroll(this.eTt)
                    }, n.bTt = function(t, n, i) {
                        for (var r = 0; r < n.length; r++) this.fTt.push(Lt(t, n[r], i))
                    }, n.uTt = function() {
                        this.lTt || (this.lTt = !0, this.vTt = !1, this.ETt(jt))
                    }, n.oTt = function() {
                        this.vTt || (this.vTt = !0, this.lTt = !1, this.ETt("inactive"))
                    }, n.ETt = function(t) {
                        var n = this.pTt(),
                            i = Math.floor(n / 1e3),
                            r = 1e3 - n % 1e3;
                        setTimeout(this.iTt, r), this.dTt.push({
                            type: t,
                            time: i
                        })
                    }, n.hTt = function() {
                        this.ampdoc.isVisible() ? this.uTt() : this.oTt()
                    }, n.rO = function() {
                        for (var t = 0; t < this.fTt.length; t++) {
                            var n = this.fTt[t];
                            "function" == typeof n && n()
                        }
                        this.fTt = []
                    }, n.Hn = function() {
                        this.rO()
                    }, n.getTotalEngagedTime = function() {
                        var t = Math.floor(this.pTt() / 1e3);
                        return this.dTt.getTotalEngagedTime(t)
                    }, n.getIncrementalEngagedTime = function(t) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (!A(this.cTt, t)) return n && (this.cTt[t] = this.getTotalEngagedTime()), this.getTotalEngagedTime();
                        var i = this.cTt[t];
                        return !1 === n ? this.getTotalEngagedTime() - i : (this.cTt[t] = this.getTotalEngagedTime(), this.cTt[t] - i)
                    }, t
                }();

            function Bt(t, n) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), i.push.apply(i, r)
                }
                return i
            }

            function Wt(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Bt(Object(i), !0).forEach((function(n) {
                        Q(t, n, i[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Bt(Object(i)).forEach((function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n))
                    }))
                }
                return t
            }
            var $t = "__AMP__EXPERIMENT_TOGGLES",
                Yt = JSON.parse('{"transport":{"beacon":true,"xhrpost":true,"image":true},"vars":{"accessReaderId":"ACCESS_READER_ID","ampGeo":"AMP_GEO","ampState":"AMP_STATE","ampVersion":"AMP_VERSION","ampdocHost":"AMPDOC_HOST","ampdocHostname":"AMPDOC_HOSTNAME","ampdocMeta":"AMPDOC_META","ampdocUrl":"AMPDOC_URL","authdata":"AUTHDATA","availableScreenHeight":"AVAILABLE_SCREEN_HEIGHT","availableScreenWidth":"AVAILABLE_SCREEN_WIDTH","backgroundState":"BACKGROUND_STATE","browserLanguage":"BROWSER_LANGUAGE","canonicalHost":"CANONICAL_HOST","canonicalHostname":"CANONICAL_HOSTNAME","canonicalPath":"CANONICAL_PATH","canonicalUrl":"CANONICAL_URL","clientId":"CLIENT_ID","consentState":"CONSENT_STATE","consentString":"CONSENT_STRING","contentLoadTime":"CONTENT_LOAD_TIME","cookie":"COOKIE","counter":"COUNTER","cumulativeLayoutShift":"CUMULATIVE_LAYOUT_SHIFT","documentCharset":"DOCUMENT_CHARSET","documentReferrer":"DOCUMENT_REFERRER","domInteractiveTime":"DOM_INTERACTIVE_TIME","domainLookupTime":"DOMAIN_LOOKUP_TIME","experimentBranches":"EXPERIMENT_BRANCHES","externalReferrer":"EXTERNAL_REFERRER","firstContentfulPaint":"FIRST_CONTENTFUL_PAINT","firstInputDelay":"FIRST_INPUT_DELAY","firstViewportReady":"FIRST_VIEWPORT_READY","fragmentParam":"FRAGMENT_PARAM","htmlAttr":"HTML_ATTR","incrementalEngagedTime":"INCREMENTAL_ENGAGED_TIME","largestContentfulPaint":"LARGEST_CONTENTFUL_PAINT","makeBodyVisible":"MAKE_BODY_VISIBLE","navRedirectCount":"NAV_REDIRECT_COUNT","navTiming":"NAV_TIMING","navType":"NAV_TYPE","pageDownloadTime":"PAGE_DOWNLOAD_TIME","pageLoadTime":"PAGE_LOAD_TIME","pageViewId":"PAGE_VIEW_ID","pageViewId64":"PAGE_VIEW_ID_64","queryParam":"QUERY_PARAM","random":"RANDOM","redirectTime":"REDIRECT_TIME","resourceTiming":"RESOURCE_TIMING","screenColorDepth":"SCREEN_COLOR_DEPTH","screenHeight":"SCREEN_HEIGHT","screenWidth":"SCREEN_WIDTH","scrollHeight":"SCROLL_HEIGHT","scrollLeft":"SCROLL_LEFT","scrollTop":"SCROLL_TOP","scrollWidth":"SCROLL_WIDTH","sessionId":"SESSION_ID","sessionCount":"SESSION_COUNT","sessionEngaged":"SESSION_ENGAGED","sessionEventTimestamp":"SESSION_EVENT_TIMESTAMP","sessionTimestamp":"SESSION_TIMESTAMP","serverResponseTime":"SERVER_RESPONSE_TIME","sourceHost":"SOURCE_HOST","sourceHostname":"SOURCE_HOSTNAME","sourcePath":"SOURCE_PATH","sourceUrl":"SOURCE_URL","tcpConnectTime":"TCP_CONNECT_TIME","timestamp":"TIMESTAMP","timezone":"TIMEZONE","timezoneCode":"TIMEZONE_CODE","title":"TITLE","totalEngagedTime":"TOTAL_ENGAGED_TIME","uach":"UACH","userAgent":"USER_AGENT","viewer":"VIEWER","viewportHeight":"VIEWPORT_HEIGHT","viewportWidth":"VIEWPORT_WIDTH"}}');

            function zt(t) {
                return "undefined" != typeof TextEncoder ? (new TextEncoder).encode(t) : Kt(unescape(encodeURIComponent(t)))
            }

            function Kt(t) {
                for (var n = new Uint8Array(t.length), i = 0; i < t.length; i++) {
                    var r = t.charCodeAt(i);
                    I(r <= 255), n[i] = r
                }
                return n
            }

            function Jt(t) {
                for (var n = new Array(t.length), i = 0; i < t.length; i++) n[i] = String.fromCharCode(t[i]);
                return n.join("")
            }
            var Xt = {
                    "-": "+",
                    "_": "/",
                    ".": "="
                },
                Zt = {
                    "+": "-",
                    "/": "_",
                    "=": "."
                };

            function Qt(t) {
                return function(t) {
                    var n = Jt(t);
                    return btoa(n).replace(/[+/=]/g, (function(t) {
                        return Zt[t]
                    }))
                }(zt(t))
            }
            var tn, nn, rn = function() {
                    function t(t) {
                        this.dr = t, this.pr = 0, this.mr = 0, this.yr = S()
                    }
                    var n = t.prototype;
                    return n.has = function(t) {
                        return !!this.yr[t]
                    }, n.get = function(t) {
                        var n = this.yr[t];
                        if (n) return n.access = ++this.mr, n.payload
                    }, n.put = function(t, n) {
                        this.has(t) || this.pr++, this.yr[t] = {
                            payload: n,
                            access: this.mr
                        }, this.wr()
                    }, n.wr = function() {
                        if (!(this.pr <= this.dr)) {
                            var t, n = this.yr,
                                i = this.mr + 1;
                            for (var r in n) {
                                var e = n[r].access;
                                e < i && (i = e, t = r)
                            }
                            void 0 !== t && (delete n[t], this.pr--)
                        }
                    }, t
                }(),
                en = function() {
                    return self.AMP.config.urls
                }(),
                un = new Set(["c", "v", "a", "ad"]),
                sn = function(t) {
                    return "string" == typeof t ? on(t) : t
                };

            function on(t, n) {
                return tn || (tn = self.document.createElement("a"), nn = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new rn(100))),
                    function(t, n, i) {
                        if (i && i.has(n)) return i.get(n);
                        t.href = n, t.protocol || (t.href = t.href);
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
                        var u = e;
                        return i && i.put(n, u), u
                    }(tn, t, n ? null : nn)
            }

            function an(t, n, i) {
                if (!n) return t;
                var r = t.split("#", 2),
                    e = r[0].split("?", 2);
                return e[0] + (e[1] ? i ? "?".concat(n, "&").concat(e[1]) : "?".concat(e[1], "&").concat(n) : "?".concat(n)) + (r[1] ? "#".concat(r[1]) : "")
            }

            function hn(t, n) {
                return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(n))
            }

            function cn(t) {
                var n, i = [];
                for (var r in t) {
                    var e = t[r];
                    if (null != e) {
                        e = d(n = e) ? n : [n];
                        for (var u = 0; u < e.length; u++) i.push(hn(r, e[u]))
                    }
                }
                return i.join("&")
            }

            function fn(t) {
                return "https:" == (t = sn(t)).protocol || "localhost" == t.hostname || "127.0.0.1" == t.hostname || p(t.hostname, ".localhost")
            }

            function ln(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "source";
                return st(null != t, "%s %s must be available", n, i), st(fn(t) || /^\/\//.test(t), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', n, i, t), t
            }

            function vn(t) {
                return en.cdnProxyRegex.test(sn(t).origin)
            }

            function dn(t, n) {
                if (!t || "?" == t) return "";
                var i = new RegExp("[?&]".concat(n, "\\b[^&]*"), "g"),
                    r = t.replace(i, "").replace(/^[?&]/, "");
                return r ? "?" + r : ""
            }
            var mn, pn = function() {
                    return self.AMP.config.urls
                }(),
                bn = "-test-amp-cookie-tmp",
                En = "None";

            function Tn(t, n) {
                var i = function(t) {
                    try {
                        return t.document.cookie
                    } catch (t) {
                        return ""
                    }
                }(t);
                if (!i) return null;
                for (var r = i.split(";"), e = 0; e < r.length; e++) {
                    var u = r[e].trim(),
                        s = u.indexOf("=");
                    if (-1 != s && W(u.substring(0, s).trim()) == n) {
                        var o = u.substring(s + 1).trim();
                        return W(o, o)
                    }
                }
                return null
            }

            function gn(t) {
                var n = t.document.head && t.document.head.querySelector("meta[name='amp-cookie-scope']");
                if (n) {
                    var i = n.getAttribute("content") || "",
                        r = on(function(t) {
                            if (!vn(t = sn(t))) return t.href;
                            var n = t.pathname.split("/"),
                                i = n[1];
                            st(un.has(i), "Unknown path prefix in url %s", t.href);
                            var r = n[2],
                                e = "s" == r ? "https://" + decodeURIComponent(n[3]) : "http://" + decodeURIComponent(r);
                            return st(e.indexOf(".") > 0, "Expected a . in origin %s", e), n.splice(1, "s" == r ? 3 : 2), e + n.join("/") + dn(t.search, "(amp_(js[^&=]*|gsa|r|kit)|usqp)") + (t.hash || "")
                        }(t.location.href)).origin;
                    return p(r, "." + i) ? i : r.split("://")[1]
                }
                if (!vn(t.location.href))
                    for (var e = t.location.hostname.split("."), u = e[e.length - 1], s = function(t) {
                            for (var n = bn; Tn(t, n);) n = bn + 0;
                            return n
                        }(t), o = e.length - 2; o >= 0; o--)
                        if (u = e[o] + "." + u, yn(t, s, "delete", Date.now() + 1e3, u), "delete" == Tn(t, s)) return yn(t, s, "delete", Date.now() - 1e3, u), u;
                return null
            }

            function yn(t, n, i, r, e, u, s) {
                "ampproject.org" == e && (i = "delete", r = 0);
                var o = encodeURIComponent(n) + "=" + encodeURIComponent(i) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + new Date(r).toUTCString() + function(t, n) {
                    return n ? "; SameSite=".concat(n) : ""
                }(0, u) + (s ? "; Secure" : "");
                try {
                    t.document.cookie = o
                } catch (t) {}
            }

            function wn(t, n, i) {
                if (n.allowOnProxyOrigin) st(!n.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
                else {
                    st(!vn(t.location.href), "Should never attempt to set cookie on proxy origin: ".concat(i));
                    var r = on(t.location.href).hostname.toLowerCase(),
                        e = on(pn.cdn).hostname.toLowerCase();
                    st(!(r == e || p(r, "." + e)), "Should never attempt to set cookie on proxy origin. (in depth check): " + i)
                }
            }

            function Sn(t) {
                return "string" == typeof t && t.startsWith("amp-") && -1 != t.indexOf("{")
            }
            var An = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"],
                On = {
                    "getPropertyPriority": function() {
                        return ""
                    },
                    "getPropertyValue": function() {
                        return ""
                    }
                };

            function Nn(t, n, i) {
                if (n.startsWith("--")) return n;
                mn || (mn = S());
                var r = mn[n];
                if (!r || i) {
                    if (r = n, void 0 === t[n]) {
                        var e = function(t) {
                                return t.charAt(0).toUpperCase() + t.slice(1)
                            }(n),
                            u = function(t, n) {
                                for (var i = 0; i < An.length; i++) {
                                    var r = An[i] + n;
                                    if (void 0 !== t[r]) return r
                                }
                                return ""
                            }(t, e);
                        void 0 !== t[u] && (r = u)
                    }
                    i || (mn[n] = r)
                }
                return r
            }

            function In(t, n, i, r, e) {
                var u = Nn(t.style, n, e);
                if (u) {
                    var s, o = r ? i + r : i;
                    t.style.setProperty((s = u.replace(/[A-Z]/g, (function(t) {
                        return "-" + t.toLowerCase()
                    })), An.some((function(t) {
                        return s.startsWith(t + "-")
                    })) ? "-".concat(s) : s), o)
                }
            }

            function _n(t, n) {
                void 0 === n && (n = t.hasAttribute("hidden")), n ? t.removeAttribute("hidden") : t.setAttribute("hidden", "")
            }
            var Rn = "unlisten";

            function Pn(t, n, i) {
                var r = function(t, n) {
                    var i = t.listeningFors;
                    return !i && n && (i = t.listeningFors = Object.create(null)), i || null
                }(t, i);
                if (!r) return r;
                var e = r[n];
                return !e && i && (e = r[n] = []), e || null
            }

            function Cn(t, n) {
                for (var i = n; i && i != i.parent; i = i.parent)
                    if (i == t) return !0;
                return !1
            }

            function Mn(t) {
                for (var n = {
                        "sentinel": Rn
                    }, i = t.length - 1; i >= 0; i--) {
                    var r = t[i];
                    if (!r.frame.contentWindow) {
                        t.splice(i, 1);
                        var e = r.events;
                        for (var u in e) e[u].splice(0, 1 / 0).forEach((function(t) {
                            t(n)
                        }))
                    }
                }
            }

            function Dn(t, n) {
                return n ? t.getAttribute("data-amp-3p-sentinel") : "amp"
            }
            var Ln = function() {
                function t(t, n, i, r) {
                    var e = this;
                    this.cb = t, this.tO = i, this.nO = [], this.rO = function(t, n, i, r, e, u) {
                        ut(t.src), ut(!t.parentNode), ut(i);
                        var s = t.ownerDocument.defaultView;
                        ! function(t) {
                            t.listeningFors || t.addEventListener("message", (function(n) {
                                if (kt(n)) {
                                    var i = function(t) {
                                        return "string" == typeof t && (t = "{" == t.charAt(0) ? R(t, (function(t) {
                                            et().warn("IFRAME-HELPER", "Postmessage could not be parsed. Is it in a valid JSON format?", t)
                                        })) || null : Sn(t) ? function(t) {
                                            if (!Sn(t)) return null;
                                            var n = t.indexOf("{");
                                            return I(-1 != n), R(t.substr(n), (function(n) {
                                                G(new Error("MESSAGING: Failed to parse message: ".concat(t, "\n").concat(n.message)))
                                            }))
                                        }(t) : null), t
                                    }(kt(n));
                                    if (i && i.sentinel) {
                                        var r = function(t, n, i, r) {
                                            var e, u = Pn(t, n);
                                            if (!u) return u;
                                            for (var s = 0; s < u.length; s++) {
                                                var o = u[s],
                                                    a = o.frame.contentWindow;
                                                if (a) {
                                                    if (r == a || Cn(a, r)) {
                                                        e = o;
                                                        break
                                                    }
                                                } else setTimeout(Mn, 0, u)
                                            }
                                            return e ? e.events : null
                                        }(t, i.sentinel, n.origin, n.source);
                                        if (r) {
                                            var e = r[i.type];
                                            if (e) {
                                                e = e.slice();
                                                for (var u = 0; u < e.length; u++)(0, e[u])(i, n.source, n.origin, n)
                                            }
                                        }
                                    }
                                }
                            }))
                        }(s);
                        var o, a = function(t, n, i) {
                                for (var r, e = Pn(t, Dn(n, i), !0), u = 0; u < e.length; u++) {
                                    var s = e[u];
                                    if (s.frame === n) {
                                        r = s;
                                        break
                                    }
                                }
                                return r || (r = {
                                    frame: n,
                                    events: Object.create(null)
                                }, e.push(r)), r.events
                            }(s, t, r),
                            h = on(t.src).origin,
                            c = a[n] || (a[n] = []),
                            f = function(n, r, s, a) {
                                if ("amp" == n.sentinel) {
                                    if (r != t.contentWindow) return;
                                    if (h != s && ("null" != s || !u)) return
                                }(e || r == t.contentWindow) && (n.sentinel != Rn ? i(n, r, s, a) : o())
                            };
                        return c.push(f), o = function() {
                            if (f) {
                                var t = c.indexOf(f);
                                t > -1 && c.splice(t, 1), f = null, c = null, i = null
                            }
                        }
                    }(this.cb, n, (function(t, n, i) {
                        e.nO.some((function(t) {
                            return t.win == n
                        })) || e.nO.push({
                            win: n,
                            origin: i
                        }), r(t, n, i)
                    }), this.tO, this.tO)
                }
                var n = t.prototype;
                return n.send = function(t, n) {
                    (function(t, n) {
                        for (var i = [], r = 0, e = 0; e < t.length; e++) {
                            var u = t[e];
                            u.win.parent ? (r < e && (t[r] = u), r++) : i.push(u)
                        }
                        r < t.length && (t.length = r)
                    })(this.nO),
                    function(t, n, i, r, e) {
                        if (t.contentWindow) {
                            r.type = i, r.sentinel = Dn(t, e);
                            var u = r;
                            e && (u = "amp-" + JSON.stringify(r));
                            for (var s = 0; s < n.length; s++) {
                                var o = n[s];
                                o.win.postMessage(u, o.origin)
                            }
                        }
                    }(this.cb, this.nO, t, n, this.tO)
                }, n.destroy = function() {
                    this.rO(), this.nO.length = 0
                }, t
            }();

            function kn(t) {
                return t.__AMP_EMBED__
            }

            function xn(t) {
                return t.classList.contains("i-amphtml-fie") || !!x(t, ".i-amphtml-fie")
            }

            function Un(t, n) {
                return !(xn(n) || vn(t.location) || "inabox" == K(t).runtime)
            }
            var jn = function() {
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
                Hn = null,
                Fn = "*",
                Vn = /^[a-zA-Z0-9\-_.]+$/,
                qn = "amp-analytics/linker";

            function Gn(t, n) {
                var i, r = (i = n) ? Object.keys(i).filter((function(t) {
                    var n = Vn.test(t);
                    return n || it().error(qn, "Invalid linker key: " + t), n
                })).map((function(t) {
                    return t + Fn + (n = i[t], Qt(String(n)));
                    var n
                })).join(Fn) : "";
                return "" === r ? "" : [t, Bn(r), r].join(Fn)
            }

            function Bn(t, n) {
                var i, r, e = n || 0;
                return function(t) {
                    Hn || (Hn = function() {
                        for (var t = new Array(256), n = 0; n < 256; n++) {
                            for (var i = n, r = 0; r < 8; r++) 1 & i ? i = i >>> 1 ^ 3988292384 : i >>>= 1;
                            t[n] = i
                        }
                        return t
                    }());
                    for (var n = zt(t), i = -1 >>> 0, r = 0; r < n.length; r++) {
                        var e = 255 & (i ^ n[r]);
                        i = i >>> 8 ^ Hn[e]
                    }
                    return (-1 ^ i) >>> 0
                }([(i = (new Date).getTimezoneOffset(), r = jn.getUserLanguage(window), [jn.getUserAgent(window), i, r].join(Fn)), Math.floor(Date.now() / 6e4) - e, t].join(Fn)).toString(36)
            }

            function Wn(t) {
                return function(t) {
                    if ("undefined" != typeof TextDecoder) return new TextDecoder("utf-8").decode(t);
                    var n = Jt(new Uint8Array(t.buffer || t));
                    return decodeURIComponent(escape(n))
                }(function(t) {
                    return Kt(atob(t.replace(/[-_.]/g, (function(t) {
                        return Xt[t]
                    }))))
                }(String(t)))
            }
            var $n = function() {
                    function t(t) {
                        this.t = t, this.IB = {}
                    }
                    var n = t.prototype;
                    return n.get = function(t, n) {
                        return t && n ? (A(this.IB, t) || (this.IB[t] = this.TTt(t)), this.IB[t] && this.IB[t][n] ? this.IB[t][n] : null) : (it().error("amp-analytics/linker-reader", "LINKER_PARAM requires two params, name and id"), null)
                    }, n.TTt = function(t) {
                        var n = $(this.t.location.search);
                        if (!A(n, t)) return null;
                        var i = n[t];
                        return this.gTt(this.t.location, t),
                            function(t) {
                                var n = function(t) {
                                    var n = t.split(Fn),
                                        i = n.length % 2 == 0;
                                    if (n.length < 4 || !i) return it().error(qn, "Invalid linker_param value ".concat(t)), null;
                                    var r = Number(n.shift());
                                    return 1 !== r ? (it().error(qn, "Invalid version number ".concat(r)), null) : {
                                        checksum: n.shift(),
                                        serializedIds: n.join(Fn)
                                    }
                                }(t);
                                if (!n) return null;
                                var i = n.checksum,
                                    r = n.serializedIds;
                                return function(t, n) {
                                    for (var i = 0; i <= 1; i++)
                                        if (Bn(t, i) == n) return !0;
                                    return !1
                                }(r, i) ? function(t) {
                                    for (var n = {}, i = t.split(Fn), r = 0; r < i.length; r += 2) {
                                        var e = i[r];
                                        if (Vn.test(e)) {
                                            var u = Wn(i[r + 1]);
                                            n[e] = u
                                        } else it().error(qn, "Invalid linker key ".concat(e, ", value ignored"))
                                    }
                                    return n
                                }(r) : (it().error(qn, "LINKER_PARAM value checksum not valid"), null)
                            }(i)
                    }, n.gTt = function(t, n) {
                        if (this.t.history.replaceState) {
                            var i = dn(t.search, n),
                                r = t.origin + t.pathname + i + (t.hash || "");
                            this.t.history.replaceState(null, "", r)
                        }
                    }, t
                }(),
                Yn = "visible",
                zn = "amp-analytics/session-manager",
                Kn = "sessionId",
                Jn = "creationTimestamp",
                Xn = "accessTimestamp",
                Zn = "engaged",
                Qn = "eventTimestamp",
                ti = "count",
                ni = function() {
                    function t(t) {
                        this.JG = ct(t, "storage"), this.yTt = S(), this.Ii = t, this.t = t.win, this.hw = [], this.wTt = null, this.Ji = null, this.STt = !0, this.Ms()
                    }
                    var n = t.prototype;
                    return n.Ms = function() {
                        var t = this;
                        this.ATt(), this.hw.push(Lt(this.t, "focus", (function() {
                            t.wTt = !0, t.OTt()
                        })), Lt(this.t, "blur", (function() {
                            t.wTt = !1, t.OTt()
                        })), Lt(this.t, "pageshow", (function() {
                            t.STt = !0, t.OTt()
                        })), Lt(this.t, "pagehide", (function() {
                            t.STt = !1, t.OTt()
                        })), this.Ii.onVisibilityChanged((function() {
                            t.Ji = t.Ii.isVisible(), t.OTt()
                        })))
                    }, n.ATt = function() {
                        this.wTt = this.t.document.hasFocus(), this.Ji = !(function(t) {
                            var n = t[Nn(t, "visibilityState", !0)];
                            if (n) return n;
                            var i = Nn(t, "hidden", !0);
                            return i in t && t[i] ? "hidden" : Yn
                        }(this.t.document) != Yn)
                    }, n.OTt = function() {
                        var t = this;
                        Object.keys(this.yTt).forEach((function(n) {
                            var i = t.yTt[n];
                            i.engaged = t.NTt(), t.ITt(n, i)
                        }))
                    }, n.dispose = function() {
                        this.hw.forEach((function(t) {
                            t()
                        })), this.hw.length = 0
                    }, n.getSessionValue = function(t, n) {
                        return this.get(t).then((function(t) {
                            return null == t ? void 0 : t[n]
                        }))
                    }, n.updateEvent = function(t) {
                        return this.get(t, (function(t) {
                            t.eventTimestamp = Date.now()
                        }))
                    }, n.get = function(t, n) {
                        return t ? A(this.yTt, t) && !ii(this.yTt[t]) ? (this.yTt[t] = this._Tt(this.yTt[t]), null == n || n(this.yTt[t]), this.ITt(t, this.yTt[t]), Promise.resolve(this.yTt[t])) : this.RTt(t, n) : (it().error(zn, "Sessions can only be accessed with a vendor type."), Promise.resolve(null))
                    }, n.RTt = function(t, n) {
                        var i = this;
                        return this.JG.then((function(n) {
                            var i = ei(t);
                            return n.get(i)
                        })).then((function(t) {
                            return t ? i._Tt(w(n = t) ? (Q(e = {}, Kn, n.sessionId), Q(e, Jn, n.creationTimestamp), Q(e, ti, n.count), Q(e, Xn, n.accessTimestamp), Q(e, Qn, n.eventTimestamp), Q(e, Zn, null === (r = n.engaged) || void 0 === r || r), e) : (et().error(zn, "Invalid stored session value"), ui()), !0) : ui(i.NTt());
                            var n, r, e
                        })).then((function(r) {
                            return t in i.yTt && !ii(i.yTt[t]) || (null == n || n(r), i.ITt(t, r), i.yTt[t] = r), i.yTt[t]
                        }))
                    }, n._Tt = function(t, n) {
                        var i = t.count,
                            r = Date.now();
                        if (ii(t)) {
                            var e = (null != i ? i : 0) + 1;
                            t = ui(this.NTt(), e)
                        } else {
                            var u = n && t.engaged;
                            t.engaged = u || this.NTt(), u && (this.wTt = !0, this.STt = !0, this.Ji = !0)
                        }
                        return t.accessTimestamp = r, t
                    }, n.NTt = function() {
                        return this.STt && this.Ji && this.wTt
                    }, n.ITt = function(t, n) {
                        return this.JG.then((function(i) {
                            var r = ei(t);
                            i.setNonBoolean(r, n)
                        }))
                    }, t
                }();

            function ii(t) {
                return t.accessTimestamp + 18e5 < Date.now()
            }

            function ri() {
                return Math.round(1e4 * Math.random())
            }

            function ei(t) {
                return "amp-session:" + t
            }

            function ui(t) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return Q(n = {}, Kn, ri()), Q(n, Jn, Date.now()), Q(n, Xn, Date.now()), Q(n, ti, i), Q(n, Qn, void 0), Q(n, Zn, t), n
            }

            function si(t) {
                return ct(t, "amp-analytics-session")
            }

            function oi(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                return Rt(t).then((function(t) {
                    return t ? t.getConsentStringInfo(n) : null
                }))
            }
            var ai = "amp-analytics/variables",
                hi = /^(?:([^\s]*)(\([^)]*\))|[^]+)$/,
                ci = {
                    1: "sufficient",
                    2: "insufficient",
                    3: "not_required",
                    4: "unknown"
                },
                fi = function() {
                    function t(t, n, i) {
                        this.vars = t, this.iterations = void 0 === n ? 2 : n, this.noEncode = !!i, this.freezeVars = {}
                    }
                    var n = t.prototype;
                    return n.freezeVar = function(t) {
                        this.freezeVars[t] = !0
                    }, n.getVar = function(t) {
                        var n = this.vars[t];
                        return null == n && (n = ""), n
                    }, t
                }();

            function li(t, n, i) {
                var r = Number(n),
                    e = t.length;
                return st(N(r), "Start index " + r + "in substr macro should be a number"), i && st(N(e = Number(i)), "Length " + e + " in substr macro should be a number"), t.substr(r, e)
            }

            function vi(t, n) {
                return t && t.length ? t : n
            }

            function di(t, n, i) {
                n || it().warn(ai, "REPLACE macro must have two or more arguments"), i || (i = "");
                var r = new RegExp(n, "g");
                return t.replace(r, i)
            }

            function mi(t, n, i) {
                n || it().warn(ai, "MATCH macro must have two or more arguments");
                var r = 0;
                i && (0 != (r = parseInt(i, 10)) && !r || r < 0) && (it().error(ai, "Third argument in MATCH macro must be a number >= 0"), r = 0);
                var e = new RegExp(n),
                    u = t.match(e);
                return u && u[r] ? u[r] : ""
            }

            function pi(t, n, i, r) {
                var e = Number(t),
                    u = Number(n);
                st(!isNaN(e), "CALC macro - left operand must be a number"), st(!isNaN(u), "CALC macro - right operand must be a number");
                var s = 0;
                switch (i) {
                    case "add":
                        s = e + u;
                        break;
                    case "subtract":
                        s = e - u;
                        break;
                    case "multiply":
                        s = e * u;
                        break;
                    case "divide":
                        st(u, "CALC macro - cannot divide by 0"), s = e / u;
                        break;
                    default:
                        it().error(ai, "CALC macro - Invalid operation")
                }
                return Si(r) ? Math.round(s) : s
            }
            var bi = function() {
                function t(t) {
                    var n = this;
                    this.Ii = t, this.hP = {}, this.PB = ot(this.Ii.win, "amp-analytics-linker-reader"), this.PTt = si(this.Ii), this.CA("$DEFAULT", vi), this.CA("$SUBSTR", li), this.CA("$TRIM", (function(t) {
                        return t.trim()
                    })), this.CA("$TOLOWERCASE", (function(t) {
                        return t.toLowerCase()
                    })), this.CA("$TOUPPERCASE", (function(t) {
                        return t.toUpperCase()
                    })), this.CA("$NOT", (function(t) {
                        return String(!t)
                    })), this.CA("$BASE64", (function(t) {
                        return Qt(t)
                    })), this.CA("$HASH", this.CTt.bind(this)), this.CA("$IF", (function(t, n, i) {
                        return Si(t) ? n : i
                    })), this.CA("$REPLACE", di), this.CA("$MATCH", mi), this.CA("$CALC", pi), this.CA("$EQUALS", (function(t, n) {
                        return t === n
                    })), this.CA("LINKER_PARAM", (function(t, i) {
                        return n.PB.get(t, i)
                    })), this.CA("TIMEZONE_CODE", (function() {
                        var t = "";
                        return "Intl" in n.Ii.win && "DateTimeFormat" in n.Ii.win.Intl && (t = (new n.Ii.win.Intl.DateTimeFormat).resolvedOptions().timeZone), t
                    })), this.CA("SCROLL_TOP", (function() {
                        return Math.round(Ct(n.Ii).getScrollTop())
                    })), this.CA("SCROLL_LEFT", (function() {
                        return Math.round(Ct(n.Ii).getScrollLeft())
                    })), this.CA("EXPERIMENT_BRANCHES", (function(t) {
                        return function(t, n) {
                            if (n) return function(t, n) {
                                return t.__AMP_EXPERIMENT_BRANCHES ? t.__AMP_EXPERIMENT_BRANCHES[n] : null
                            }(t, n) || "";
                            var i = function(t) {
                                var n = lt(t);
                                return n.__AMP_EXPERIMENT_BRANCHES || (n.__AMP_EXPERIMENT_BRANCHES = {}), Wt({}, n.__AMP_EXPERIMENT_BRANCHES)
                            }(t);
                            return Object.keys(i).map((function(t) {
                                return "".concat(t, ":").concat(i[t])
                            })).join(",")
                        }(n.Ii.win, t)
                    })), this.CA("AMPDOC_META", (function(t) {
                        var i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return null !== (i = n.Ii.getMetaByName(t)) && void 0 !== i ? i : r
                    }))
                }
                var n = t.prototype;
                return n.getMacros = function(t) {
                    var n = this,
                        i = t.getAttribute("type"),
                        r = {
                            "COOKIE": function(i) {
                                return function(t, n, i) {
                                    return Un(t, n) ? Tn(t, i) : null
                                }(n.Ii.win, t, i)
                            },
                            "CONSENT_STATE": wi(t),
                            "CONSENT_STRING": oi(t),
                            "CONSENT_METADATA": function(n) {
                                return function(t, n) {
                                    return function(t) {
                                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                                        return Rt(t).then((function(t) {
                                            return t ? t.getConsentMetadataInfo(n) : null
                                        }))
                                    }(t).then((function(t) {
                                        return t ? t[n] : null
                                    }))
                                }(t, st(n, "CONSENT_METADATA macro must contain a key"))
                            },
                            "SESSION_ID": function() {
                                return n.MTt(i, Kn)
                            },
                            "SESSION_TIMESTAMP": function() {
                                return n.MTt(i, Jn)
                            },
                            "SESSION_COUNT": function() {
                                return n.MTt(i, ti)
                            },
                            "SESSION_EVENT_TIMESTAMP": function() {
                                return n.MTt(i, Qn)
                            },
                            "SESSION_ENGAGED": function() {
                                return n.MTt(i, Zn)
                            }
                        },
                        e = xn(t) ? {} : {
                            "FIRST_CONTENTFUL_PAINT": function() {
                                return Ot(n.Ii.win).getMetric("fcpv")
                            },
                            "FIRST_VIEWPORT_READY": function() {
                                return Ot(n.Ii.win).getMetric("pc")
                            },
                            "MAKE_BODY_VISIBLE": function() {
                                return Ot(n.Ii.win).getMetric("mbv")
                            },
                            "LARGEST_CONTENTFUL_PAINT": function() {
                                return Ot(n.Ii.win).getMetric("lcpv")
                            },
                            "FIRST_INPUT_DELAY": function() {
                                return Ot(n.Ii.win).getMetric("fid")
                            },
                            "CUMULATIVE_LAYOUT_SHIFT": function() {
                                return Ot(n.Ii.win).getMetric("cls")
                            }
                        };
                    return Wt(Wt(Wt({}, this.hP), r), e)
                }, n.MTt = function(t, n) {
                    return this.PTt.then((function(i) {
                        return i.getSessionValue(t, n)
                    }))
                }, n.CA = function(t, n) {
                    ut(!this.hP[t]), this.hP[t] = n
                }, n.expandTemplate = function(t, n, i, r, e) {
                    var u, s, o, a, h, c = this;
                    return s = /\${([^{}]*)}/g, o = function(t, u) {
                        if (n.iterations < 0) return it().error(ai, "Maximum depth reached while expanding variables. Please ensure that the variables are not recursive."), t;
                        if (!u) return "";
                        var s = Ti(u),
                            o = s.argList,
                            a = s.name;
                        if (n.freezeVars[a]) return t;
                        var h = n.getVar(a),
                            f = _t(i);
                        if ("string" == typeof h) h = c.DTt(h, n, i, f, r, e, o);
                        else if (d(h)) {
                            for (var l = 0; l < h.length; l++) h[l] = "string" == typeof h[l] ? c.DTt(h[l], n, i, f, r, e) : h[l];
                            h = Promise.all(h)
                        }
                        return Promise.resolve(h).then((function(t) {
                            return n.noEncode ? t : Ei(t)
                        }))
                    }, a = [], h = 0, (u = t).replace(s, (function(t) {
                        var n = arguments[arguments.length - 2];
                        a.push(u.slice(h, n)), h = n + t.length;
                        var i = o.apply(null, arguments);
                        return a.push(i), ""
                    })), a.push(u.slice(h)), Promise.all(a).then((function(t) {
                        return t.join("")
                    }))
                }, n.DTt = function(t, n, i, r, e, u, s) {
                    var o = this;
                    return this.expandTemplate(t, new fi(n.vars, n.iterations - 1, !0), i, e, u).then((function(t) {
                        return r.expandStringAsync(s ? t + s : t, e || o.getMacros(i), u)
                    }))
                }, n.CTt = function(t) {
                    return At(this.Ii.win).sha384Base64(t)
                }, t
            }();

            function Ei(t) {
                if (null == t) return "";
                if (d(t)) return t.map(Ei).join(",");
                var n = Ti(String(t)),
                    i = n.argList,
                    r = n.name;
                return encodeURIComponent(r) + i
            }

            function Ti(t) {
                if (!t) return {
                    name: "",
                    argList: ""
                };
                var n = t.match(hi);
                return st(n, "Variable with invalid format found: " + t), {
                    name: n[1] || n[0],
                    argList: n[2] || ""
                }
            }

            function gi(t) {
                return at(t, "amp-analytics-variables")
            }

            function yi(t) {
                return ct(t, "amp-analytics-variables")
            }

            function wi(t) {
                return function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                    return Rt(t).then((function(t) {
                        return t ? t.whenPolicyResolved(n) : null
                    }))
                }(t).then((function(t) {
                    return t ? ci[t] : null
                }))
            }

            function Si(t) {
                return "false" !== t && "" !== t && "0" !== t && "null" !== t && "NaN" !== t && "undefined" !== t
            }
            var Ai = "amp-analytics/config",
                Oi = function() {
                    function t(t) {
                        this.Gn = t, this.t = null, this.LTt = Yt || {}, this.bEt = {}, this.d_ = {}, this.kTt = {}, this.xTt = !1, this.oG = gi(t)
                    }
                    var n = t.prototype;
                    return n.loadConfig = function() {
                        var t = this;
                        return this.t = this.Gn.ownerDocument.defaultView, this.xTt = this.Gn.hasAttribute("sandbox"), Promise.all([this.UTt(), this.jTt()]).then(this.HTt.bind(this)).then(this.FTt.bind(this)).then((function() {
                            return t.d_
                        }))
                    }, n.VTt = function(t) {
                        var n, i = (this.t.location, Z.cdn),
                            r = "bg" === t && null !== (n = self.AMP_CONFIG) && void 0 !== n && n.canary ? ".canary" : "";
                        return "".concat(i, "/rtv/").concat(K().rtvVersion, "/v0/analytics-vendors/").concat(t).concat(r, ".json")
                    }, n.jTt = function() {
                        var t = this,
                            n = this.Gn.getAttribute("type");
                        if (!n) return e();
                        var i = this.VTt(n),
                            r = this.Wi();
                        return et().fine(r, "Fetching vendor config", i), Mt(this.t).fetchJson(i, {
                            ampCors: !1
                        }).then((function(t) {
                            return t.json()
                        })).then((function(i) {
                            t.bEt = i || {}, et().fine(r, "Vendor config loaded for " + n, i)
                        }), (function(t) {
                            it().error(r, "Error loading vendor config: ", i, t)
                        }))
                    }, n.UTt = function() {
                        var t = this,
                            n = this.Gn.getAttribute("config");
                        if (!n || this.xTt) return e();
                        ln(n, this.Gn);
                        var i = this.Wi();
                        et().fine(i, "Fetching remote config", n);
                        var r = {};
                        return this.Gn.hasAttribute("data-credentials") && (r.credentials = this.Gn.getAttribute("data-credentials")), _t(this.Gn).expandUrlAsync(n, this.oG.getMacros(this.Gn)).then((function(i) {
                            return n = i, Mt(t.t).fetchJson(n, r)
                        })).then((function(t) {
                            return t.json()
                        })).then((function(r) {
                            t.kTt = r, et().fine(i, "Remote config loaded", n)
                        }), (function(t) {
                            it().error(i, "Error loading remote config: ", n, t)
                        }))
                    }, n.HTt = function() {
                        var t = this.qTt().url,
                            n = {},
                            i = this.JV();
                        return this.GTt(i), Ni(i, n), Ni(this.kTt, n), !t || this.xTt ? (this.d_ = this.BTt(n), e()) : this.WTt(n, t)
                    }, n.WTt = function(t, n) {
                        var i = this;
                        ln(n, this.Gn);
                        var r = this.Wi();
                        return et().fine(r, "Rewriting config", n), this.$Tt(t).then((function() {
                            var e = {
                                method: "POST",
                                body: t
                            };
                            return i.Gn.hasAttribute("data-credentials") && (e.credentials = i.Gn.getAttribute("data-credentials")), _t(i.Gn).expandUrlAsync(n).then((function(t) {
                                return Mt(i.t).fetchJson(t, e)
                            })).then((function(t) {
                                return t.json()
                            })).then((function(t) {
                                i.d_ = i.BTt(t), et().fine(r, "Configuration re-written", n)
                            }), (function(t) {
                                it().error(r, "Error rewriting configuration: ", n, t)
                            }))
                        }))
                    }, n.FTt = function() {
                        if (this.d_.warningMessage) {
                            var t = this.Wi(),
                                n = this.Gn.getAttribute("type"),
                                i = this.Gn.getAttribute("config");
                            it().warn(t, "Warning from analytics vendor%s%s: %s", n ? " " + n : "", i ? " with remote config url " + i : "", String(this.d_.warningMessage)), delete this.d_.warningMessage
                        }
                    }, n.$Tt = function(t) {
                        var n = this,
                            i = t.configRewriter,
                            r = i && i.varGroups,
                            u = this.qTt().varGroups;
                        if (!r && !u) return e();
                        if (r && !u) {
                            var s = this.Wi();
                            return it().warn(s, "This analytics provider does not currently support varGroups"), e()
                        }
                        t.configRewriter = t.configRewriter || {};
                        var o = t.configRewriter;
                        o.vars = {};
                        var a = [],
                            h = r || {};
                        return O(h, u), Object.keys(h).forEach((function(t) {
                            var i = h[t];
                            if (i.enabled) {
                                var r = n.shallowExpandObject(n.Gn, i).then((function(t) {
                                    delete t.enabled, Object.assign(o.vars, t)
                                }));
                                a.push(r)
                            }
                        })), Promise.all(a).then((function() {
                            if (!Object.keys(o.vars).length) return delete t.configRewriter;
                            r && delete o.varGroups
                        }))
                    }, n.BTt = function(t) {
                        var n = {
                            "vars": {
                                "requestCount": 0
                            }
                        };
                        return Ni(Ii(this.LTt), n), Ni(Ii(this.bEt), n, !0), Ni(Ii(t), n, !0), n
                    }, n.qTt = function() {
                        return this.bEt.configRewriter || {}
                    }, n.JV = function() {
                        if (this.Gn.CONFIG) return this.Gn.CONFIG;
                        var t = {},
                            n = this.Wi();
                        try {
                            var i = this.Gn.children;
                            1 == i.length ? t = function(t) {
                                var n, i, r, e = (n = t, I(/^[\w-]+$/.test("script")), i = n, r = "> ".concat("script"), C(i) ? i.querySelectorAll(M(r, ":scope")) : D(i, r)),
                                    u = e.length;
                                if (1 !== u) throw new Error("Found ".concat(u, " <script> children. Expected 1."));
                                var s = e[0];
                                if (! function(t) {
                                        var n;
                                        return "SCRIPT" == t.tagName && "APPLICATION/JSON" == (null === (n = t.getAttribute("type")) || void 0 === n ? void 0 : n.toUpperCase())
                                    }(s)) throw new Error('<script> child must have type="application/json"');
                                try {
                                    var o;
                                    return _(null !== (o = s.textContent) && void 0 !== o ? o : "")
                                } catch (t) {
                                    throw new Error("Failed to parse <script> contents. Is it valid JSON?")
                                }
                            }(this.Gn) : i.length > 1 && it().error(n, "The tag should contain only one <script> child.")
                        } catch (t) {
                            it().error(n, t.message)
                        }
                        return t
                    }, n.GTt = function(t) {
                        if (this.Gn.getAttribute("type") && (t.transport || this.kTt.transport)) {
                            var n = this.Wi();
                            it().error(n, "Inline or remote config should not overwrite vendor transport settings")
                        }
                        t.transport && t.transport.iframe && (it().error(Ai, "Inline configs are not allowed to specify transport iframe"), t.transport.iframe = void 0), this.kTt.transport && this.kTt.transport.iframe && (it().error(Ai, "Remote configs are not allowed to specify transport iframe"), this.kTt.transport.iframe = void 0)
                    }, n.Wi = function() {
                        return "AmpAnalytics " + (this.Gn.getAttribute("id") || "<unknown id>")
                    }, n.shallowExpandObject = function(t, n) {
                        var i = {},
                            r = [],
                            e = [],
                            u = _t(t),
                            s = gi(t).getMacros(t);
                        return Object.keys(n).forEach((function(t) {
                            r.push(t);
                            var i = u.expandStringAsync(n[t], s);
                            e.push(i)
                        })), Promise.all(e).then((function(t) {
                            return r.forEach((function(n, r) {
                                return i[n] = t[r]
                            })), i
                        }))
                    }, t
                }();

            function Ni(t, n, i) {
                for (var r in null == n && (n = {}), st(i || !t || !t.optout || "_gaUserPrefs.ioo" == t.optout || "__gaOptOutExtension" == t.optoutElementId, "optout property is only available to vendor config."), t) st(i || "iframePing" != r, "iframePing config is only available to vendor config."), A(t, r) && (d(t[r]) ? (d(n[r]) || (n[r] = []), n[r] = Ni(t[r], n[r], i)) : w(t[r]) ? (w(n[r]) || (n[r] = {}), n[r] = Ni(t[r], n[r], i)) : n[r] = t[r]);
                return n
            }

            function Ii(t) {
                if (!t.requests) return t;
                for (var n in t.requests) A(t.requests, n) && (t.requests[n] = w(i = t.requests[n]) ? i : {
                    "baseUrl": i
                });
                var i;
                return function(t) {
                    if (A(t, "requests") && A(t, "requestOrigin")) {
                        var n = t.requestOrigin;
                        for (var i in t.requests) A(t.requests[i], "origin") || (t.requests[i].origin = n)
                    }
                    return t
                }(t)
            }
            var _i = 31536e6;
            var Ri = function() {
                    function t() {
                        this.Hi = []
                    }
                    var n, i = t.prototype;
                    return i.peek = function() {
                        var t = this.length;
                        return t ? this.Hi[t - 1].item : null
                    }, i.enqueue = function(t, n) {
                        if (isNaN(n)) throw new Error("Priority must not be NaN.");
                        var i = this.Gi(n);
                        this.Hi.splice(i, 0, {
                            item: t,
                            priority: n
                        })
                    }, i.Gi = function(t) {
                        for (var n = -1, i = 0, r = this.length; i <= r && (n = Math.floor((i + r) / 2)) !== this.length;)
                            if (this.Hi[n].priority < t) i = n + 1;
                            else {
                                if (!(n > 0 && this.Hi[n - 1].priority >= t)) break;
                                r = n - 1
                            }
                        return n
                    }, i.forEach = function(t) {
                        for (var n = this.length; n--;) t(this.Hi[n].item)
                    }, i.dequeue = function() {
                        var t = this.Hi.pop();
                        return t ? t.item : null
                    }, (n = [{
                        key: "length",
                        get: function() {
                            return this.Hi.length
                        }
                    }]) && function(t, n) {
                        for (var i = 0; i < n.length; i++) {
                            var r = n[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }(t.prototype, n), t
                }(),
                Pi = !1,
                Ci = "CHUNK",
                Mi = /nochunking=1/.test(self.location.hash),
                Di = e();

            function Li(t, n, i) {
                Mi ? Di.then(n) : function(t) {
                    var n, i;
                    return "chunk", n = Hi, bt(mt(i = dt(t)), i, "chunk", n), at(t, "chunk")
                }(t).run(n, i)
            }
            var ki, xi = "not_run",
                Ui = function() {
                    function t(t) {
                        this.state = xi, this.Fi = t
                    }
                    var n = t.prototype;
                    return n.Bi = function(t) {
                        if ("run" != this.state) {
                            this.state = "run";
                            try {
                                this.Fi(t)
                            } catch (t) {
                                throw this.qi(t), t
                            }
                        }
                    }, n.Wi = function() {
                        return this.Fi.displayName || this.Fi.name
                    }, n.qi = function(t) {}, n.$i = function() {
                        return !1
                    }, n.Ki = function() {
                        return !1
                    }, t
                }(),
                ji = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t, i, r) {
                        var e;
                        return (e = n.call(this, t)).Yi = r, e
                    }
                    var r = i.prototype;
                    return r.qi = function(t) {
                        var n;
                        ut((n = self.document).defaultView), Pi || (Pi = !0, function(t) {
                            ! function(t, n) {
                                for (var i in n) In(t, i, n[i])
                            }(t.body, {
                                opacity: 1,
                                visibility: "visible",
                                "animation": "none"
                            })
                        }(n))
                    }, r.$i = function() {
                        return this.Ji()
                    }, r.Ki = function() {
                        return this.Yi.Xi
                    }, r.Ji = function() {
                        return this.Yi.ampdoc.isVisible()
                    }, i
                }(Ui),
                Hi = function() {
                    function t(t) {
                        var n, i = this;
                        this.ampdoc = t, this.t = t.win, this.Qi = new Ri, this.Zi = this.cn.bind(this), this.br = 0, this.gr = !(!this.t.navigator.scheduling || !this.t.navigator.scheduling.isInputPending), this.Ar = !1, this.Vi = this.t.document.documentElement.hasAttribute("i-amphtml-no-boilerplate"), this.t.addEventListener("message", (function(t) {
                            "amp-macro-task" == kt(t) && i.cn(null)
                        })), this.Xi = !1, (n = t, ct(n, "viewer")).then((function() {
                            i.Xi = !0
                        })), t.onVisibilityChanged((function() {
                            t.isVisible() && i.Er()
                        }))
                    }
                    var n = t.prototype;
                    return n.run = function(t, n) {
                        var i = new Ui(t);
                        this.Or(i, n)
                    }, n.runForStartup = function(t) {
                        var n = new ji(t, this.t, this);
                        this.Or(n, Number.POSITIVE_INFINITY)
                    }, n.Or = function(t, n) {
                        this.Qi.enqueue(t, n), this.Er()
                    }, n.Pr = function(t) {
                        for (var n = this.Qi.peek(); n && n.state !== xi;) this.Qi.dequeue(), n = this.Qi.peek();
                        return n && t && this.Qi.dequeue(), n
                    }, n.cn = function(t) {
                        var n, i = this,
                            r = this.Pr(!0);
                        if (!r) return this.Ar = !1, this.br = 0, !1;
                        try {
                            n = Date.now(), r.Bi(t)
                        } finally {
                            Di.then().then().then().then().then().then().then().then().then((function() {
                                i.Ar = !1, i.br += Date.now() - n, et().fine(Ci, r.Wi(), "Chunk duration", Date.now() - n, i.br), i.Er()
                            }))
                        }
                        return !0
                    }, n.Tr = function(t) {
                        var n = this;
                        if (this.Vi && (this.gr ? this.t.navigator.scheduling.isInputPending() : this.br > 5)) return this.br = 0, void this.Ir();
                        Di.then((function() {
                            n.Zi(t)
                        }))
                    }, n.Er = function() {
                        if (!this.Ar) {
                            var t = this.Pr();
                            if (t) return t.$i() ? (this.Ar = !0, void this.Tr(null)) : void(t.Ki() && this.t.requestIdleCallback ? (n = this.t, i = 2e3, r = this.Zi, e = Date.now(), n.requestIdleCallback((function t(u) {
                                if (u.timeRemaining() < 15) {
                                    var s = i - (Date.now() - e);
                                    s <= 0 || u.didTimeout ? (et().fine(Ci, "Timed out", i, u.didTimeout), r(u)) : (et().fine(Ci, "Rescheduling with", s, u.timeRemaining()), n.requestIdleCallback(t, {
                                        timeout: s
                                    }))
                                } else et().fine(Ci, "Running idle callback with ", 15), r(u)
                            }), {
                                timeout: i
                            })) : this.Ir())
                        }
                        var n, i, r, e
                    }, n.Ir = function() {
                        this.t.postMessage("amp-macro-task", "*")
                    }, t
                }(),
                Fi = "amp-analytics/cookie-writer",
                Vi = {
                    "referrerDomains": !0,
                    "enabled": !0,
                    "cookiePath": !0,
                    "cookieMaxAge": !0,
                    "cookieSecure": !0,
                    "cookieDomain": !0,
                    "sameSite": !0,
                    "SameSite": !0,
                    "secure": !0
                },
                qi = function() {
                    function t(t, n, i) {
                        this.t = t, this.Gn = n, this.uC = _t(n), this.YTt = null, this.d_ = i, this.ra = gi(n).getMacros(n)
                    }
                    var n = t.prototype;
                    return n.write = function() {
                        var t = this;
                        return this.YTt || (this.YTt = new u, Li(this.Gn, (function() {
                            t.YTt.resolve(t.Ms())
                        }), 10)), this.YTt.promise
                    }, n.Ms = function() {
                        if (!Un(this.t, this.Gn)) return e();
                        if (!A(this.d_, "cookies")) return e();
                        if (!w(this.d_.cookies)) return it().error(Fi, "cookies config must be an object"), e();
                        var t = this.d_.cookies;
                        if (!1 === t.enabled) return e();
                        for (var n = this.EB(t), i = Object.keys(t), r = [], u = 0; u < i.length; u++) {
                            var s = i[u],
                                o = t[s],
                                a = this.zTt(o.sameSite || o.SameSite || t.sameSite || t.SameSite);
                            this._B(s, o) && r.push(this.RB(s, o.value, n, a))
                        }
                        return Promise.all(r)
                    }, n.EB = function(t) {
                        if (!A(t, "cookieMaxAge")) return _i;
                        var n = Number(t.cookieMaxAge);
                        return n || 0 === n ? (n <= 0 && it().warn(Fi, "cookieMaxAge %s less than or equal to 0, cookie will immediately expire", t.cookieMaxAge), 1e3 * n) : (it().error(Fi, "invalid cookieMaxAge %s, falling back to default value (1 year)", t.cookieMaxAge), _i)
                    }, n._B = function(t, n) {
                        return !(Vi[t] || (w(n) ? !A(n, "value") && (it().error(Fi, "value is required in the cookieValue object"), 1) : (it().error(Fi, "cookieValue must be configured in an object"), 1)))
                    }, n.RB = function(t, n, i, r) {
                        var e = this;
                        return this.uC.expandStringAsync(n, this.ra).then((function(n) {
                            if (n) {
                                var u = Date.now() + i,
                                    s = r === En;
                                ! function(t, n, i, r) {
                                    var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                                    wn(t, e, n);
                                    var u = void 0;
                                    e.domain ? u = e.domain : e.highestAvailableDomain && (u = gn(t)), yn(t, n, i, r, u, e.sameSite, e.secure)
                                }(e.t, t, n, u, {
                                    highestAvailableDomain: !0,
                                    sameSite: r,
                                    secure: s
                                })
                            }
                        })).catch((function(t) {
                            it().error(Fi, "Error expanding cookie string", t)
                        }))
                    }, n.zTt = function(t) {
                        switch (t) {
                            case "Strict":
                                return "Strict";
                            case "Lax":
                                return "Lax";
                            case "None":
                                return En;
                            default:
                                return
                        }
                    }, t
                }(),
                Gi = function() {
                    function t() {
                        this.Nt = null
                    }
                    var n = t.prototype;
                    return n.add = function(t) {
                        var n = this;
                        return this.Nt || (this.Nt = []), this.Nt.push(t),
                            function() {
                                n.remove(t)
                            }
                    }, n.remove = function(t) {
                        var n, i, r;
                        this.Nt && (i = t, -1 != (r = (n = this.Nt).indexOf(i)) && n.splice(r, 1))
                    }, n.removeAll = function() {
                        this.Nt && (this.Nt.length = 0)
                    }, n.fire = function(t) {
                        if (this.Nt)
                            for (var n, r = i(this.Nt.slice(), !0); !(n = r()).done;)(0, n.value)(t)
                    }, n.getHandlerCount = function() {
                        var t, n;
                        return null !== (t = null === (n = this.Nt) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0
                    }, t
                }(),
                Bi = "video-session-visible",
                Wi = "video-seconds-played",
                $i = ["video-ended", "video-pause", "video-play", "video-session", "video-session-visible", "video-seconds-played", "video-hosted-custom", "video-percentage-played", "video-ad-start", "video-ad-end"],
                Yi = /^vars(.+)/,
                zi = function() {},
                Ki = "amp-analytics/events",
                Ji = "click",
                Xi = "browser-event",
                Zi = "custom",
                Qi = "hidden",
                tr = "ini-load",
                nr = "render-start",
                ir = "scroll",
                rr = "story",
                er = "timer",
                ur = "video",
                sr = "visible",
                or = ["ampdoc", "embed"],
                ar = Object.freeze((Q(ki = {}, Ji, {
                    name: Ji,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new Er(t)
                    }
                }), Q(ki, Xi, {
                    name: Xi,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new mr(t)
                    }
                }), Q(ki, Zi, {
                    name: Zi,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new pr(t)
                    }
                }), Q(ki, Qi, {
                    name: sr,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new Or(t)
                    }
                }), Q(ki, tr, {
                    name: tr,
                    allowedFor: or.concat(["timer", "visible"]),
                    klass: function(t) {
                        return new yr(t)
                    }
                }), Q(ki, nr, {
                    name: nr,
                    allowedFor: or.concat(["timer", "visible"]),
                    klass: function(t) {
                        return new gr(t)
                    }
                }), Q(ki, ir, {
                    name: ir,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new Tr(t)
                    }
                }), Q(ki, rr, {
                    name: rr,
                    allowedFor: or,
                    klass: function(t) {
                        return new br(t)
                    }
                }), Q(ki, er, {
                    name: er,
                    allowedFor: or,
                    klass: function(t) {
                        return new Sr(t)
                    }
                }), Q(ki, ur, {
                    name: ur,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new Ar(t)
                    }
                }), Q(ki, sr, {
                    name: sr,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new Or(t)
                    }
                }), ki));

            function hr(t) {
                st(!d(t) || new Set(t).size === t.length, "Cannot have duplicate selectors in selectors list: %s", t)
            }

            function cr(t) {
                return t.startsWith("video") ? ur : "blur" === (n = t) || "change" === n ? Xi : t.startsWith("story") ? rr : function(t) {
                    return "click" === (n = t) || "browser-event" === n || "custom" === n || "hidden" === n || "ini-load" === n || "render-start" === n || "scroll" === n || "story" === n || "timer" === n || "video" === n || "visible" === n;
                    var n
                }(t) ? A(ar, t) ? ar[t].name : t : Zi;
                var n
            }

            function fr(t) {
                var n = {};
                return Object.keys(ar).forEach((function(i) {
                    A(ar, i) && -1 != ar[i].allowedFor.indexOf(t) && (n[i] = ar[i].klass)
                })), n
            }

            function lr(t, n) {
                var i = j(t, void 0, Yi);
                return O(i, n, 0), i
            }
            var vr = function(t, n) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    this.target = t, this.type = n, this.vars = r ? lr(t, i) : i
                },
                dr = function() {
                    function t(t) {
                        this.root = t
                    }
                    var n = t.prototype;
                    return n.dispose = function() {}, n.add = function(t, n, i, r) {}, t
                }(),
                mr = function(t) {
                    a(r, t);
                    var n = v(r);

                    function r(t) {
                        var i;
                        return (i = n.call(this, t)).KTt = new Gi, i.JTt = {}, i.XTt = i.KTt.fire.bind(i.KTt), i.ZTt = function(t, n, i) {
                            var r = 0,
                                e = 0,
                                u = null;

                            function s() {
                                r = 0;
                                var i, o = 500 - (t.Date.now() - e);
                                o > 0 ? r = t.setTimeout(s, o) : (i = u, u = null, n.apply(null, i))
                            }
                            return function() {
                                e = t.Date.now();
                                for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                                u = i, r || (r = t.setTimeout(s, 500))
                            }
                        }(i.root.ampdoc.win, i.XTt), i
                    }
                    var e = r.prototype;
                    return e.dispose = function() {
                        var t = this,
                            n = this.root.getRoot();
                        Object.keys(this.JTt).forEach((function(i) {
                            n.removeEventListener(i, t.ZTt)
                        })), this.XTt = null, this.KTt = null
                    }, e.add = function(t, n, r, e) {
                        var u;
                        st(("analytics-browser-events", u = function(t) {
                            var n, r, e, u, s;
                            if (t[$t]) return t[$t];
                            t[$t] = S();
                            var o = t[$t];
                            I(o);
                            var a = Wt(Wt({}, null !== (n = t.AMP_CONFIG) && void 0 !== n ? n : {}), null !== (r = t.AMP_EXP) && void 0 !== r ? r : _((null === (e = t.__AMP_EXP) || void 0 === e ? void 0 : e.textContent) || "{}"));
                            for (var h in a) {
                                var c = a[h];
                                "number" == typeof c && c >= 0 && c <= 1 && (o[h] = Math.random() < c)
                            }
                            var f = null === (u = t.AMP_CONFIG) || void 0 === u ? void 0 : u["allow-doc-opt-in"];
                            if (d(f) && f.length) {
                                var l = t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
                                if (l)
                                    for (var v, m, p = i((null === (v = l.getAttribute("content")) || void 0 === v ? void 0 : v.split(",")) || [], !0); !(m = p()).done;) {
                                        var b = m.value;
                                        f.includes(b) && (o[b] = !0)
                                    }
                            }
                            Object.assign(o, function(t) {
                                var n, r = "";
                                try {
                                    var e;
                                    "localStorage" in t && (r = null !== (e = t.localStorage.getItem("amp-experiment-toggles")) && void 0 !== e ? e : "")
                                } catch (t) {
                                    et().warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.")
                                }
                                for (var u, s = (null === (n = r) || void 0 === n ? void 0 : n.split(/\s*,\s*/g)) || [], o = S(), a = i(s, !0); !(u = a()).done;) {
                                    var h = u.value;
                                    h && ("-" == h[0] ? o[h.substr(1)] = !1 : o[h] = !0)
                                }
                                return o
                            }(t));
                            var E = null === (s = t.AMP_CONFIG) || void 0 === s ? void 0 : s["allow-url-opt-in"];
                            if (d(E) && E.length)
                                for (var T, g = $(t.location.originalHash || t.location.hash), y = i(E, !0); !(T = y()).done;) {
                                    var w = T.value,
                                        A = g["e-".concat(w)];
                                    "1" == A && (o[w] = !0), "0" == A && (o[w] = !1)
                                }
                            return o
                        }(this.root.ampdoc.win), !!u["analytics-browser-events"]), 'expected global "analytics-browser-events" experiment to be enabled');
                        var s = r.on,
                            o = r.selectionMethod,
                            a = void 0 === o ? null : o,
                            h = r.selector;
                        st(null == h ? void 0 : h.length, "Missing required selector on browser event trigger"), hr(h);
                        var c = this.root.getElements(t, h, a, !1);
                        return this.JTt[s] || (this.root.getRootElement().addEventListener(s, this.ZTt, !0), this.JTt[s] = !0), this.KTt.add((function(t) {
                            t.type === s && c.then((function(n) {
                                n.forEach((function(n) {
                                    var i = t.target;
                                    n.contains(i) && e(new vr(n, s, {}))
                                }))
                            }))
                        }))
                    }, r
                }(dr),
                pr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).KTt = {}, i.QTt = {}, i.aSt = {}, setTimeout((function() {
                            i.QTt = void 0
                        }), 1e4), i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {
                        for (var t in this.QTt = void 0, this.aSt = void 0, this.KTt) this.KTt[t].removeAll()
                    }, r.add = function(t, n, i, r) {
                        var e = this,
                            u = i.selector;
                        u || (u = ":root");
                        var s = i.selectionMethod || null,
                            o = this.root.getElement(t, u, s),
                            a = n.startsWith("sandbox-"),
                            h = a ? this.aSt && this.aSt[n] : this.QTt && this.QTt[n];
                        if (h) {
                            var c = h.length;
                            o.then((function(t) {
                                setTimeout((function() {
                                    for (var i = 0; i < c; i++) {
                                        var u = h[i];
                                        t.contains(u.target) && r(u)
                                    }
                                    a && (e.aSt[n] = void 0)
                                }), 1)
                            }))
                        }
                        var f = this.KTt[n];
                        return f || (f = new Gi, this.KTt[n] = f), this.KTt[n].add((function(t) {
                            o.then((function(n) {
                                n.contains(t.target) && r(t)
                            }))
                        }))
                    }, r.trigger = function(t) {
                        var n = t.type,
                            i = n.startsWith("sandbox-"),
                            r = this.KTt[n];
                        r && (r.fire(t), i) || (i ? (this.aSt[n] = this.aSt[n] || [], this.aSt[n].push(t)) : this.QTt && (this.QTt[n] = this.QTt[n] || [], this.QTt[n].push(t)))
                    }, i
                }(dr),
                br = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        return n.call(this, t)
                    }
                    var r = i.prototype;
                    return r.add = function(t, n, i, r) {
                        var e = this,
                            u = this.root.getRootElement(),
                            s = this.QTt && this.QTt[n];
                        if (s)
                            for (var o = s.length, a = 0; a < o; a++) {
                                var h = s[a];
                                this.hSt(h, u, i, r)
                            }
                        var c = this.KTt[n];
                        return c || (c = new Gi, this.KTt[n] = c), this.KTt[n].add((function(t) {
                            e.hSt(t, u, i, r)
                        }))
                    }, r.hSt = function(t, n, i, r) {
                        var e = t.type,
                            u = t.vars,
                            s = i.storySpec || {},
                            o = void 0 === s.repeat || s.repeat,
                            a = u.eventDetails,
                            h = i.tagName;
                        h && a.tagName && h.toLowerCase() !== a.tagName || !1 === o && a.repeated || r(new vr(n, e, u))
                    }, r.trigger = function(t) {
                        var n = t.type,
                            i = this.KTt[n];
                        i && i.fire(t), this.QTt && (this.QTt[n] = this.QTt[n] || [], this.QTt[n].push(t))
                    }, i
                }(pr),
                Er = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).fSt = new Gi, i.lSt = i.fSt.fire.bind(i.fSt), i.root.getRoot().addEventListener("click", i.lSt), i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {
                        this.root.getRoot().removeEventListener("click", this.lSt), this.fSt.removeAll()
                    }, r.add = function(t, n, i, r) {
                        var e = st(i.selector, "Missing required selector on click trigger"),
                            u = i.selectionMethod || null;
                        return this.fSt.add(this.root.createSelectiveListener(this.Fo.bind(this, r), t.parentElement || t, e, u))
                    }, r.Fo = function(t, n, i) {
                        t(new vr(n, "click"))
                    }, i
                }(dr),
                Tr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).Re = t, i.vSt = null, i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {
                        null !== this.vSt && (this.Re.getScrollManager().removeScrollHandler(this.vSt), this.vSt = null)
                    }, r.add = function(t, n, i, r) {
                        if (!i.scrollSpec) return it().error(Ki, "Missing scrollSpec on scroll trigger."), zi;
                        if (!Array.isArray(i.scrollSpec.verticalBoundaries) && !Array.isArray(i.scrollSpec.horizontalBoundaries)) return it().error(Ki, "Boundaries are required for the scroll trigger to work."), zi;
                        var e = this.dSt(i.scrollSpec.verticalBoundaries),
                            u = this.dSt(i.scrollSpec.horizontalBoundaries),
                            s = !!i.scrollSpec.useInitialPageSize;
                        return this.vSt = this.op.bind(this, u, e, s, r), this.Re.getScrollManager().addScrollHandler(this.vSt)
                    }, r.op = function(t, n, i, r, e) {
                        var u = i ? e.initialSize : e,
                            s = u.scrollHeight,
                            o = u.scrollWidth;
                        this.mSt(n, 100 * (e.top + e.height) / s, "verticalScrollBoundary", r), this.mSt(t, 100 * (e.left + e.width) / o, "horizontalScrollBoundary", r)
                    }, r.dSt = function(t) {
                        var n = {};
                        if (!t || !Array.isArray(t)) return n;
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            if ("number" != typeof r || !isFinite(r)) return it().error(Ki, "Scroll trigger boundaries must be finite."), n;
                            n[r = Math.min(5 * Math.round(r / 5), 100)] = !1
                        }
                        return n
                    }, r.mSt = function(t, n, i, r) {
                        if (n)
                            for (var e in t)
                                if (A(t, e)) {
                                    var u = parseInt(e, 10);
                                    if (!(u > n || t[u])) {
                                        t[u] = !0;
                                        var s = {};
                                        s[i] = e, r(new vr(this.Re.getRootElement(), ir, s, !1))
                                    }
                                }
                    }, i
                }(dr),
                gr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        return n.call(this, t)
                    }
                    var r = i.prototype;
                    return r.dispose = function() {}, r.add = function(t, n, i, r) {
                        var e, u, s = this,
                            o = i.selector || ":root";
                        if (":root" == o || ":host" == o) e = this.root.getRootElement(), u = this.getRootSignal(n);
                        else {
                            var a = i.selectionMethod;
                            u = this.root.getAmpElement(t.parentElement || t, o, a).then((function(t) {
                                return e = t, s.getElementSignal(n, e)
                            }))
                        }
                        return u.then((function() {
                            r(new vr(e, n))
                        })), zi
                    }, r.getRootSignal = function(t) {
                        return this.root.signals().whenSignal(t)
                    }, r.getElementSignal = function(t, n) {
                        return "function" != typeof n.signals ? e() : n.signals().whenSignal(t)
                    }, i
                }(dr),
                yr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        return n.call(this, t)
                    }
                    var r = i.prototype;
                    return r.dispose = function() {}, r.add = function(t, n, i, r) {
                        var e, u, s = this,
                            o = i.selector || ":root";
                        if (":root" == o || ":host" == o) e = this.root.getRootElement(), u = this.getRootSignal();
                        else {
                            var a = i.selectionMethod;
                            u = this.root.getAmpElement(t.parentElement || t, o, a).then((function(t) {
                                return e = t, s.getElementSignal("ini-load", e)
                            }))
                        }
                        return u.then((function() {
                            r(new vr(e, n))
                        })), zi
                    }, r.getRootSignal = function() {
                        return this.root.whenIniLoaded()
                    }, r.getElementSignal = function(t, n) {
                        if ("function" != typeof n.signals) return e();
                        var i = n.signals();
                        return Promise.race([i.whenSignal("ini-load"), i.whenSignal("load-end")])
                    }, i
                }(dr),
                wr = function() {
                    function t(t, n, i) {
                        this.pSt = void 0, st("interval" in t, "Timer interval specification required"), this.bSt = Number(t.interval) || 0, st(this.bSt >= .5, "Bad timer interval specification"), this.ESt = "maxTimerLength" in t ? Number(t.maxTimerLength) : 7200, st(this.ESt > 0, "Bad maxTimerLength specification"), this.TSt = "maxTimerLength" in t, this.gSt = !("immediate" in t) || Boolean(t.immediate), this.ySt = null, this.wSt = null, this.SSt = null, this.ASt = n || null, this.OSt = i || null, this.Zh = void 0, this.NSt = void 0
                    }
                    var n = t.prototype;
                    return n.init = function(t) {
                        this.ASt ? this.ISt() : t()
                    }, n.dispose = function() {
                        this._St(), this.RSt()
                    }, n.ISt = function() {
                        this.ASt && (this.wSt = this.ASt())
                    }, n.RSt = function() {
                        this.wSt && (this.wSt(), this.wSt = null)
                    }, n.PSt = function() {
                        if (this.OSt) try {
                            this.SSt = this.OSt()
                        } catch (t) {
                            throw this.dispose(), t
                        }
                    }, n._St = function() {
                        this.SSt && (this.SSt(), this.SSt = null)
                    }, n.isRunning = function() {
                        return !!this.pSt
                    }, n.startIntervalInWindow = function(t, n, i) {
                        this.isRunning() || (this.Zh = Date.now(), this.NSt = void 0, this.ySt = n, this.pSt = t.setInterval((function() {
                            n()
                        }), 1e3 * this.bSt), (!this.OSt || this.OSt && this.TSt) && t.setTimeout((function() {
                            i()
                        }), 1e3 * this.ESt), this.RSt(), this.gSt && n(), this.PSt())
                    }, n.CSt = function(t) {
                        this.isRunning() && (this.ySt(), this.ySt = null, t.clearInterval(this.pSt), this.pSt = void 0, this.NSt = void 0, this._St(), this.ISt())
                    }, n.MSt = function() {
                        return this.Zh ? Date.now() - (this.NSt || this.Zh) : 0
                    }, n.getTimerVars = function() {
                        var t = 0;
                        return this.isRunning() && (t = this.MSt(), this.NSt = Date.now()), {
                            "timerDuration": t,
                            "timerStart": this.Zh || 0
                        }
                    }, t
                }(),
                Sr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).DSt = {}, i.LSt = 1, i
                    }
                    var r = i.prototype;
                    return r.getTrackedTimerKeys = function() {
                        return Object.keys(this.DSt)
                    }, r.dispose = function() {
                        var t = this;
                        this.getTrackedTimerKeys().forEach((function(n) {
                            t.kSt(n)
                        }))
                    }, r.add = function(t, n, i, r) {
                        var e = this,
                            u = i.timerSpec;
                        st(u && "object" == c(u), "Bad timer specification");
                        var s = "startSpec" in u ? u.startSpec : null;
                        st(!s || "object" == c(s), "Bad timer start specification");
                        var o = "stopSpec" in u ? u.stopSpec : null;
                        st(!s && !o || "object" == c(o), "Bad timer stop specification");
                        var a, h, f = this.xSt();
                        if (s) {
                            var l = this.USt(s);
                            st(l, "Cannot track timer start"), a = l.add.bind(l, t, s.on, s, this.jSt.bind(this, f, n, r))
                        }
                        if (o) {
                            var v = this.USt(o);
                            st(v, "Cannot track timer stop"), h = v.add.bind(v, t, o.on, o, this.jSt.bind(this, f, n, r))
                        }
                        var d = new wr(u, a, h);
                        return this.DSt[f] = d, d.init(this.HSt.bind(this, f, n, r)),
                            function() {
                                e.kSt(f)
                            }
                    }, r.xSt = function() {
                        return ++this.LSt
                    }, r.USt = function(t) {
                        var n = cr(it().assertString(t.on));
                        return this.root.getTrackerForAllowlist(n, fr("timer"))
                    }, r.jSt = function(t, n, i) {
                        var r = this.DSt[t];
                        r && (r.isRunning() ? this.CSt(t) : this.HSt(t, n, i))
                    }, r.HSt = function(t, n, i) {
                        var r = this;
                        this.DSt[t].startIntervalInWindow(this.root.ampdoc.win, (function() {
                            i(r.FSt(t, n))
                        }), this.kSt.bind(this, t))
                    }, r.CSt = function(t) {
                        this.DSt[t].CSt(this.root.ampdoc.win)
                    }, r.FSt = function(t, n) {
                        return new vr(this.root.getRootElement(), n, this.DSt[t].getTimerVars(), !1)
                    }, r.kSt = function(t) {
                        this.DSt[t] && (this.CSt(t), this.DSt[t].dispose(), delete this.DSt[t])
                    }, i
                }(dr),
                Ar = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).VSt = new Gi, i.XTt = i.VSt.fire.bind(i.VSt), $i.forEach((function(t) {
                            i.root.getRoot().addEventListener(t, i.XTt)
                        })), i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {
                        var t = this,
                            n = this.root.getRoot();
                        $i.forEach((function(i) {
                            n.removeEventListener(i, t.XTt)
                        })), this.XTt = null, this.VSt = null
                    }, r.add = function(t, n, i, r) {
                        var e = i.videoSpec || {},
                            u = st(i.selector || e.selector, "Missing required selector on video trigger");
                        st(u.length, "Missing required selector on video trigger"), hr(u);
                        var s = i.selectionMethod || null,
                            o = this.root.getElements(t, u, s, !1),
                            a = e["end-session-when-invisible"],
                            h = e["exclude-autoplay"],
                            c = e.interval,
                            f = e.percentages,
                            l = i.on,
                            v = 0,
                            d = 0;
                        return this.VSt.add((function(t) {
                            var n = t.type,
                                i = kt(t),
                                e = function(t, n) {
                                    return t == Bi ? "video-session" : "video-hosted-custom" == t ? n["__amp:eventType"] : t
                                }(n, i);
                            if (e === l)
                                if (e !== Wi || c) {
                                    if (e !== Wi || ++v % c == 0) {
                                        if ("video-percentage-played" === e) {
                                            if (!f) return void it().error(Ki, "video-percentage-played requires percentages spec.");
                                            for (var u = 0; u < f.length; u++) {
                                                var s = f[u];
                                                if (s <= 0 || s % 5 != 0) return void it().error(Ki, "Percentages must be set in increments of %s with non-zero values", 5)
                                            }
                                            var m = i.normalizedPercentage,
                                                p = parseInt(m, 10);
                                            if (ut(N(p)), ut(p % 5 == 0), d == p && f.length > 1) return;
                                            if (f.indexOf(p) < 0) return;
                                            d = p
                                        }
                                        if ((n !== Bi || a) && (!h || "playing_auto" !== i.state)) {
                                            var b = t.target;
                                            o.then((function(t) {
                                                t.forEach((function(t) {
                                                    if (t.contains(b)) {
                                                        var n = function(t) {
                                                            if (!t) return {};
                                                            var n = Wt({}, t);
                                                            return delete n["__amp:eventType"], n
                                                        }(i);
                                                        r(new vr(t, e, n))
                                                    }
                                                }))
                                            }))
                                        }
                                    }
                                } else it().error(Ki, "video-seconds-played requires interval spec with non-zero value")
                        }))
                    }, i
                }(dr),
                Or = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).qSt = {}, i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {}, r.add = function(t, n, i, r) {
                        var e = this,
                            u = i.visibilitySpec || {},
                            s = i.selector || u.selector,
                            o = u.waitFor,
                            a = u.reportWhen,
                            h = null;
                        a && st(!u.repeat, "reportWhen and repeat are mutually exclusive."), n === Qi && (a && it().error(Ki, 'ReportWhen should not be defined when eventType is "hidden"'), a = "documentHidden");
                        var c = this.root.getVisibilityManager();
                        if ("documentHidden" == a ? h = this.GSt.bind(this) : "documentExit" == a ? h = this.BSt.bind(this) : st(!a, 'reportWhen value "%s" not supported.', a), !s || ":root" == s || ":host" == s) {
                            var f = o || (s ? "ini-load" : "none");
                            return c.listenRoot(u, this.getReadyPromise(f), h, this.WSt.bind(this, n, r, this.root.getRootElement()))
                        }
                        var l = i.selectionMethod || u.selectionMethod;
                        hr(s);
                        var v = this.root.getElements(t.parentElement || t, s, l).then((function(t) {
                            for (var i = [], s = 0; s < t.length; s++) i.push(c.listenElement(t[s], u, e.getReadyPromise(o, t[s]), h, e.WSt.bind(e, n, r, t[s])));
                            return i
                        }));
                        return function() {
                            v.then((function(t) {
                                for (var n = 0; n < t.length; n++) t[n]()
                            }))
                        }
                    }, r.GSt = function() {
                        var t = this.root.ampdoc;
                        return t.isVisible() ? new Promise((function(n) {
                            t.onVisibilityChanged((function() {
                                t.isVisible() || n()
                            }))
                        })) : e()
                    }, r.BSt = function() {
                        var t, n, i = new u,
                            r = this.root.ampdoc.win;
                        return this.$St() || r.addEventListener("unload", t = function() {
                            r.removeEventListener("unload", t), i.resolve()
                        }), r.addEventListener("pagehide", n = function() {
                            r.removeEventListener("pagehide", n), i.resolve()
                        }), i.promise
                    }, r.$St = function() {
                        return "onpagehide" in this.root.ampdoc.win
                    }, r.getReadyPromise = function(t, n) {
                        var i;
                        if (n && ((i = n.tagName).startsWith("AMP-") && "AMP-STICKY-AD-TOP-PADDING" != i && "AMP-BODY" != i ? t = t || "ini-load" : st(!t || "none" == t, "waitFor for non-AMP elements must be none or null. Found %s", t)), !t || "none" == t) return null;
                        var r = fr("visible");
                        st(void 0 !== r[t], "waitFor value %s not supported", t);
                        var e = this.qSt[t] || this.root.getTrackerForAllowlist(t, r);
                        return e ? (this.qSt[t] = e, n ? e.getElementSignal(t, n) : e.getRootSignal(t)) : null
                    }, r.WSt = function(t, n, i, r) {
                        var e = j(i, void 0, Yi);
                        for (var u in e) r[u] = e[u];
                        n(new vr(i, t, r, !1))
                    }, i
                }(dr),
                Nr = function() {
                    function t(t, n) {
                        this.Re = t, this.YSt = n, this.ov = [], this.zSt = 0, this.t = P(n)
                    }
                    var n = t.prototype;
                    return n.dispose = function() {
                        this.ov.forEach((function(t) {
                            t()
                        }))
                    }, n.addTrigger = function(t, n) {
                        var i, r = this,
                            e = t.on,
                            s = cr(e),
                            o = fr(this.Re.getType()),
                            a = this.Re.getTrackerForAllowlist(s, o);
                        st(!!a, 'Trigger type "%s" is not allowed in the %s', e, this.Re.getType());
                        var h = new u,
                            c = function() {
                                i = a.add(r.YSt, e, t, n), r.ov.push(i), h.resolve()
                            };
                        if (this.zSt < 1 || "inabox" == K(this.t).runtime) c();
                        else {
                            var f = this.zSt < 3 ? 20 : 10;
                            Li(this.YSt, c, f)
                        }
                        return this.zSt++, h.promise
                    }, t
                }(),
                Ir = "inside";

            function _r(t, n, i, r) {
                return {
                    left: t,
                    top: n,
                    width: i,
                    height: r,
                    bottom: n + r,
                    right: t + i,
                    x: t,
                    y: n
                }
            }

            function Rr(t, n, i) {
                var r, e, u, s = (r = {
                    top: i,
                    bottom: i + n.getHeight(),
                    left: 0,
                    right: n.getWidth()
                }, _r(Number(r.left), Number(r.top), Number(r.width), Number(r.height)));
                return u = s, (e = t).top <= u.bottom && u.top <= e.bottom && e.left <= u.right && u.left <= e.right ? Ir : function(t, n) {
                    return t.top < n.top ? "top" : t.bottom > n.bottom ? "bottom" : Ir
                }(t, s)
            }
            var Pr = function() {
                function t(t) {
                    this.bo = Ct(t.ampdoc), this.dh = at(t.ampdoc, "mutator"), this.KSt = null, this.Ec = new Gi, this.Re = t.getRootElement(), this.JSt = null
                }
                var n = t.prototype;
                return n.dispose = function() {
                    this.Ec.removeAll(), this.XSt()
                }, n.removeScrollHandler = function(t) {
                    this.Ec.remove(t), this.Ec.getHandlerCount() <= 0 && this.XSt()
                }, n.addScrollHandler = function(t) {
                    var n = this,
                        i = this.bo.getSize();
                    return this.ZSt().then((function(r) {
                        var e = r.height,
                            u = r.left,
                            s = r.top,
                            o = r.width,
                            a = {
                                top: n.bo.getScrollTop() - s,
                                left: n.bo.getScrollLeft() - u,
                                width: i.width,
                                height: i.height,
                                scrollHeight: e,
                                scrollWidth: o,
                                initialSize: {
                                    scrollHeight: e,
                                    scrollWidth: o
                                }
                            };
                        t(a)
                    })), 0 === this.Ec.getHandlerCount() && this.QSt(), this.Ec.add(t)
                }, n.LA = function(t) {
                    var n = this;
                    return Promise.all([this.ZSt(), this.iAt()]).then((function(i) {
                        var r = i[0],
                            e = r.height,
                            u = r.width,
                            s = i[1],
                            o = s.height,
                            a = s.left,
                            h = s.top,
                            c = s.width,
                            f = {
                                top: t.top - h,
                                left: t.left - a,
                                width: t.width,
                                height: t.height,
                                scrollWidth: c,
                                scrollHeight: o,
                                initialSize: {
                                    scrollHeight: e,
                                    scrollWidth: u
                                }
                            };
                        n.Ec.fire(f)
                    }))
                }, n.XSt = function() {
                    this.KSt && (this.KSt(), this.KSt = null)
                }, n.QSt = function() {
                    this.KSt = this.bo.onChanged(this.LA.bind(this))
                }, n.ZSt = function() {
                    return ut(this.JSt || this.iAt())
                }, n.iAt = function() {
                    var t = this,
                        n = this.dh.measureElement((function() {
                            return t.bo.getLayoutRect(t.Re)
                        }));
                    return this.JSt = this.JSt || n, n
                }, t
            }();

            function Cr(t) {
                var n = function(t) {
                    var n = [];
                    if (!t) return n;
                    var i, r = t;
                    n.push(r);
                    for (var e = 0; e < 50; e++)
                        if ((i = r.parentNode || r.parentElement) && 1 == i.nodeType) r = i, n.push(r);
                        else {
                            if (!i || 9 != i.nodeType) break;
                            if (!(i = r.ownerDocument.defaultView.frameElement) || 1 != i.nodeType) break;
                            r = i, n.push(r)
                        }
                    return n
                }(t.parentElement);
                n.push(t);
                for (var i, r = 1, e = 0; e < n.length; e++)
                    if ((i = Mr(n[e])) < r && (r = i), 0 === r) return r;
                return r
            }

            function Mr(t) {
                var n = window;
                if (!t) return 1;
                var i = function(t, n) {
                        return t.getComputedStyle(n) || On
                    }(n, t),
                    r = i.opacity;
                if ("hidden" === i.visibility) return 0;
                var e = "" === r ? 1 : parseFloat(r);
                return isNaN(e) ? 1 : e
            }
            var Dr = function() {
                function t(t, n) {
                    var i = this;
                    this.rAt = n, this.eAt = {
                        "visiblePercentageMin": Number(t.visiblePercentageMin) / 100 || 0,
                        "visiblePercentageMax": Number(t.visiblePercentageMax) / 100 || 1,
                        "totalTimeMin": Number(t.totalTimeMin) || 0,
                        "totalTimeMax": Number(t.totalTimeMax) || 1 / 0,
                        "continuousTimeMin": Number(t.continuousTimeMin) || 0,
                        "continuousTimeMax": Number(t.continuousTimeMax) || 1 / 0
                    }, "0" === String(t.visiblePercentageMax).trim() && (this.eAt.visiblePercentageMax = 0), this.uAt = void 0 !== t.reportWhen, this.sAt = !0 === t.repeat, this.oAt = new Gi;
                    var r = new u;
                    this.aAt = r.promise, this.hAt = r.resolve, this.aAt.then((function() {
                        i.oAt.fire()
                    })), this.cAt = [], this.fAt = Date.now(), this.ni = !0, this.lAt = !0, this.vAt = null, this.dAt = null, this.mAt = !1, this.pAt = !1, this.bAt = 0, this.EAt = 0, this.TAt = 0, this.gAt = 0, this.yAt = 0, this.Au = 0, this.$t = 0, this.wAt = 0, this.SAt = 0, this.AAt = 0, this.OAt = 0, this.NAt = 0, this.IAt = !1, this._At = !1, this.RAt = null
                }
                var n = t.prototype;
                return n.Qr = function() {
                    var t = this;
                    ut(!this.hAt);
                    var n = new u;
                    this.aAt = n.promise, this.hAt = n.resolve, this.aAt.then((function() {
                        t.oAt.fire()
                    })), this.RAt = null, this.pAt = !1, this.mAt = !1, this.bAt = 0, this.EAt = 0, this.TAt = 0, this.Au = 0, this.gAt = 0, this.yAt = 0, this.$t = 0, this.SAt = 0, this.AAt = 0, this.OAt = 0, this._At = !1
                }, n.maybeDispose = function() {
                    this.sAt || this.dispose()
                }, n.dispose = function() {
                    this.dAt && (clearTimeout(this.dAt), this.dAt = null), this.RAt && (clearTimeout(this.RAt), this.RAt = null), this.cAt.forEach((function(t) {
                        t()
                    })), this.cAt.length = 0, this.hAt = null, this.oAt && (this.oAt.removeAll(), this.oAt = null)
                }, n.unsubscribe = function(t) {
                    this.cAt.push(t)
                }, n.onTriggerEvent = function(t) {
                    this.oAt && this.oAt.add(t), this.aAt && !this.hAt && t()
                }, n.setReady = function(t) {
                    this.ni = t, this.update()
                }, n.setReportReady = function(t) {
                    this.lAt = !1, this.vAt = t
                }, n.PAt = function() {
                    return this.ni ? this.rAt() : 0
                }, n.update = function() {
                    this.In(this.PAt())
                }, n.getState = function(t) {
                    return {
                        "firstSeenTime": Lr(this.gAt, t),
                        "lastSeenTime": Lr(this.yAt, t),
                        "lastVisibleTime": Lr(this.$t, t),
                        "firstVisibleTime": Lr(this.Au, t),
                        "maxContinuousVisibleTime": this.EAt,
                        "totalVisibleTime": this.TAt,
                        "loadTimeVisibility": 100 * this.wAt || 0,
                        "minVisiblePercentage": 100 * this.SAt,
                        "maxVisiblePercentage": 100 * this.AAt
                    }
                }, n.In = function(t) {
                    var n = this;
                    if (this._At) this.CAt(t) || this.Qr();
                    else if (this.hAt)
                        if (this.MAt(t) || this.uAt) {
                            if (this.dAt && (clearTimeout(this.dAt), this.dAt = null), this.lAt) this.hAt(), this.hAt = null, this.sAt && (this._At = !0, this.bAt = 0);
                            else if (this.vAt) {
                                var i = this.vAt();
                                this.vAt = null, i.then((function() {
                                    n.lAt = !0, n.update()
                                }))
                            }
                        } else if (this.mAt && !this.dAt) {
                        var r = this.DAt();
                        r > 0 && (this.dAt = setTimeout((function() {
                            n.dAt = null, n.update()
                        }), r))
                    } else !this.mAt && this.dAt && (clearTimeout(this.dAt), this.dAt = null)
                }, n.CAt = function(t) {
                    return ut(t >= 0 && t <= 1), 1 == this.eAt.visiblePercentageMin ? 1 == t : 0 == this.eAt.visiblePercentageMax ? 0 == t : t > this.eAt.visiblePercentageMin && t <= this.eAt.visiblePercentageMax
                }, n.MAt = function(t) {
                    ut(t >= 0 && t <= 1);
                    var n = Date.now();
                    t > 0 && (this.gAt = this.gAt || n, this.yAt = n, !this.wAt && n - this.fAt < 300 && (this.wAt = t));
                    var i = this.mAt,
                        r = this.OAt ? n - this.OAt : 0;
                    return this.mAt = this.CAt(t), this.mAt ? (this.pAt = !0, i ? (this.TAt += r, this.bAt += r, this.EAt = Math.max(this.EAt, this.bAt)) : (ut(!this.OAt), this.Au = this.Au || n), this.OAt = n, this.SAt = this.SAt > 0 ? Math.min(this.SAt, t) : t, this.AAt = Math.max(this.AAt, t), this.$t = n) : i && (ut(this.OAt > 0), this.EAt = Math.max(this.EAt, this.bAt + r), this.OAt = 0, this.TAt += r, this.bAt = 0, this.$t = n), this.pAt && this.TAt >= this.eAt.totalTimeMin && this.TAt <= this.eAt.totalTimeMax && this.EAt >= this.eAt.continuousTimeMin && this.EAt <= this.eAt.continuousTimeMax
                }, n.maybeSetInitialScrollDepth = function(t) {
                    this.IAt || (this.NAt = t, this.IAt = !0)
                }, n.getInitialScrollDepth = function() {
                    return this.NAt
                }, n.DAt = function() {
                    var t = Math.max(this.eAt.continuousTimeMin - this.bAt, 0),
                        n = Math.max(this.eAt.totalTimeMin - this.TAt, 0),
                        i = Math.max(t, n);
                    return Math.min(i, t || 1 / 0, n || 1 / 0)
                }, t
            }();

            function Lr(t, n) {
                return t >= n ? t - n : 0
            }
            var kr = "amp-analytics/visibility-manager",
                xr = "__AMP_VIS",
                Ur = [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1],
                jr = 1;

            function Hr(t) {
                var n = t.__AMP_VIS_ID;
                return n || (n = ++jr, t.__AMP_VIS_ID = n), n
            }

            function Fr(t) {
                return t[xr] || (t[xr] = function(t) {
                    var n = St(t),
                        i = vt(t),
                        r = i && kn(i),
                        e = i && function(t) {
                            if (Node.prototype.getRootNode) return t.getRootNode();
                            var n, i;
                            for (n = t; n.parentNode && (!(i = n) || "I-AMPHTML-SHADOW-ROOT" != i.tagName && (11 != i.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(i))); n = n.parentNode);
                            return n
                        }(i);
                    return r && e ? new Gr(Fr(e), r) : new qr(n)
                }(t)), t[xr]
            }
            var Vr = function() {
                    function t(t, n) {
                        var i = this;
                        this.parent = t, this.ampdoc = n, this.LAt = 0, this.kAt = [], this.tz = null, this.cAt = [], this.xAt = 0, this.parent && this.parent.UAt(this);
                        var r = Ct(this.ampdoc);
                        r.onChanged((function() {
                            i.maybeUpdateMaxScrollDepth(r.getScrollTop())
                        }))
                    }
                    var n = t.prototype;
                    return n.UAt = function(t) {
                        this.tz || (this.tz = []), this.tz.push(t)
                    }, n.jAt = function(t) {
                        if (this.tz) {
                            var n = this.tz.indexOf(t); - 1 != n && this.tz.splice(n, 1)
                        }
                    }, n.dispose = function() {
                        this.setRootVisibility(0);
                        for (var t = this.kAt.length - 1; t >= 0; t--) this.kAt[t].dispose();
                        if (this.cAt.forEach((function(t) {
                                t()
                            })), this.cAt.length = 0, this.parent && this.parent.jAt(this), this.tz)
                            for (var n = 0; n < this.tz.length; n++) this.tz[n].dispose()
                    }, n.unsubscribe = function(t) {
                        this.cAt.push(t)
                    }, n.getStartTime = function() {}, n.isBackgrounded = function() {}, n.isBackgroundedAtStart = function() {}, n.getRootMinOpacity = function() {}, n.getRootLayoutBox = function() {}, n.getRootVisibility = function() {
                        return this.parent ? this.parent.getRootVisibility() > 0 ? this.LAt : 0 : this.LAt
                    }, n.setRootVisibility = function(t) {
                        if (this.LAt = t, this.HAt(), this.tz)
                            for (var n = 0; n < this.tz.length; n++) this.tz[n].HAt()
                    }, n.maybeUpdateMaxScrollDepth = function(t) {
                        t > this.xAt && (this.xAt = t)
                    }, n.getMaxScrollDepth = function() {
                        return this.xAt
                    }, n.HAt = function() {
                        for (var t = 0; t < this.kAt.length; t++) this.kAt[t].update()
                    }, n.listenRoot = function(t, n, i, r) {
                        var e = this.getRootVisibility.bind(this);
                        return this.FAt(e, t, n, i, r)
                    }, n.listenElement = function(t, n, i, r, e) {
                        var u = this.getElementVisibility.bind(this, t);
                        return this.FAt(u, n, i, r, e, t)
                    }, n.FAt = function(t, n, i, r, e, u) {
                        if (n.visiblePercentageThresholds && null == n.visiblePercentageMin && null == n.visiblePercentageMax) {
                            var s = [],
                                o = n.visiblePercentageThresholds;
                            if (!o || !d(o)) return it().error(kr, "invalid visiblePercentageThresholds"),
                                function() {};
                            for (var a = 0; a < o.length; a++) {
                                var h = o[a];
                                if (d(h) && 2 == h.length)
                                    if (N(h[0]) && N(h[1])) {
                                        var c = Number(h[0]),
                                            f = Number(h[1]);
                                        if (c < 0 || f > 100 || c > f || c == f && 100 != c && 0 != f) it().error(kr, "visiblePercentageThresholds entry invalid min/max value");
                                        else {
                                            var l = n;
                                            l.visiblePercentageMin = c, l.visiblePercentageMax = f;
                                            var v = new Dr(l, t, Ct(this.ampdoc));
                                            s.push(this.kH(v, n, i, r, e, u))
                                        }
                                    } else it().error(kr, "visiblePercentageThresholds entry is not valid number");
                                else it().error(kr, "visiblePercentageThresholds entry length is not 2")
                            }
                            return function() {
                                s.forEach((function(t) {
                                    return t()
                                }))
                            }
                        }
                        var m = new Dr(n, t, Ct(this.ampdoc));
                        return this.kH(m, n, i, r, e, u)
                    }, n.kH = function(t, n, i, r, e, u) {
                        var s = this;
                        r && t.setReportReady(r);
                        var o = Ct(this.ampdoc),
                            a = o.getScrollTop();
                        return this.maybeUpdateMaxScrollDepth(a), i ? (t.setReady(!1), i.then((function() {
                                t.setReady(!0), t.maybeSetInitialScrollDepth(a)
                            }))) : t.maybeSetInitialScrollDepth(a), t.onTriggerEvent((function() {
                                var n, i = s.getStartTime(),
                                    r = t.getState(i);
                                if (r.backgrounded = s.isBackgrounded() ? 1 : 0, r.backgroundedAtStart = s.isBackgroundedAtStart() ? 1 : 0, r.totalTime = Date.now() - i, u) {
                                    r.elementId = u.id, r.opacity = Cr(u), n = o.getLayoutRect(u);
                                    var a = s.getElementVisibility(u),
                                        h = s.getElementIntersectionRect(u);
                                    Object.assign(r, {
                                        "intersectionRatio": a,
                                        "intersectionRect": JSON.stringify(h)
                                    })
                                } else r.opacity = s.getRootMinOpacity(), r.intersectionRatio = s.getRootVisibility(), n = s.getRootLayoutBox();
                                t.maybeDispose(), n && (Object.assign(r, {
                                    "elementX": n.left,
                                    "elementY": n.top,
                                    "elementWidth": n.width,
                                    "elementHeight": n.height
                                }), r.initialScrollDepth = Rr(n, o, t.getInitialScrollDepth()), r.maxScrollDepth = Rr(n, o, s.getMaxScrollDepth())), e(r)
                            })), this.kAt.push(t), t.unsubscribe((function() {
                                var n = s.kAt.indexOf(t); - 1 != n && s.kAt.splice(n, 1)
                            })), u && t.unsubscribe(this.observe(u, (function() {
                                return t.update()
                            }))), t.update(),
                            function() {
                                t.dispose()
                            }
                    }, n.observe = function(t, n) {}, n.getElementVisibility = function(t) {}, n.getElementIntersectionRect = function(t) {}, t
                }(),
                qr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        if ((i = n.call(this, null, t)).bo = Ct(t), i.VAt = !t.isVisible(), i.qAt = i.isBackgrounded(), i.GAt = S(), i.eO = null, "inabox" == K(i.ampdoc.win).runtime) {
                            var r = i.ampdoc.getRootNode(),
                                e = r.documentElement || r.body || r;
                            i.unsubscribe(i.observe(e, i.setRootVisibility.bind(f(i))));
                            var u = function() {
                                var t = Hr(e),
                                    n = i.GAt[t];
                                n && (i.ampdoc.win.innerHeight < 1 || i.ampdoc.win.innerWidth < 1 ? n.isVisible = !1 : n.isVisible = !0, i.setRootVisibility(n.isVisible ? n.intersectionRatio : 0))
                            };
                            i.ampdoc.win.addEventListener("resize", u), i.unsubscribe((function() {
                                i.ampdoc.win.removeEventListener("resize", u)
                            }))
                        } else i.setRootVisibility(i.ampdoc.isVisible() ? 1 : 0), i.unsubscribe(i.ampdoc.onVisibilityChanged((function() {
                            var t = i.ampdoc.isVisible();
                            t || (i.VAt = !0), i.setRootVisibility(t ? 1 : 0)
                        })));
                        return i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {
                        t.prototype.dispose.call(this), this.eO && (this.eO.disconnect(), this.eO = null)
                    }, r.getStartTime = function() {
                        return this.ampdoc.getFirstVisibleTime()
                    }, r.isBackgrounded = function() {
                        return this.VAt
                    }, r.isBackgroundedAtStart = function() {
                        return this.qAt
                    }, r.getRootMinOpacity = function() {
                        var t = this.ampdoc.getRootNode();
                        return Cr(t.documentElement || t.body || t)
                    }, r.getRootLayoutBox = function() {
                        var t = this.ampdoc.getRootNode(),
                            n = t.documentElement || t.body || t;
                        return this.bo.getLayoutRect(n)
                    }, r.observe = function(t, n) {
                        var i = this,
                            r = Hr(t),
                            e = this.GAt[r];
                        return e ? e.intersectionRatio > 0 && e.isVisible && n(e.intersectionRatio) : (e = {
                                element: t,
                                intersectionRatio: 0,
                                intersectionRect: null,
                                isVisible: !1,
                                boundingClientRect: null,
                                listeners: []
                            }, this.GAt[r] = e), e.listeners.push(n), this.BAt().observe(t),
                            function() {
                                var e = i.GAt[r];
                                if (e) {
                                    var u = e.listeners.indexOf(n); - 1 != u && e.listeners.splice(u, 1), 0 == e.listeners.length && (i.eO.unobserve(t), delete i.GAt[r])
                                }
                            }
                    }, r.getElementVisibility = function(t) {
                        if (0 == this.getRootVisibility()) return 0;
                        var n = Hr(t),
                            i = this.GAt[n];
                        return i && i.isVisible && i.intersectionRatio || 0
                    }, r.getElementIntersectionRect = function(t) {
                        if (this.getElementVisibility(t) <= 0) return null;
                        var n = Hr(t),
                            i = this.GAt[n];
                        return i ? i.intersectionRect : null
                    }, r.BAt = function() {
                        if (!this.eO) {
                            var t = this.ampdoc.win;
                            this.eO = new t.IntersectionObserver(this.WAt.bind(this), {
                                threshold: Ur
                            })
                        }
                        return this.eO
                    }, r.WAt = function(t) {
                        var n = this;
                        t.forEach((function(t) {
                            var i = t.intersectionRect;
                            i = _r(Number(i.left), Number(i.top), Number(i.width), Number(i.height));
                            var r = t.boundingClientRect;
                            r = r && _r(Number(r.left), Number(r.top), Number(r.width), Number(r.height)), n.$At(t.target, t.intersectionRatio, i, r)
                        }))
                    }, r.$At = function(t, n, i, r) {
                        n = Math.min(Math.max(n, 0), 1);
                        var e = Hr(t),
                            u = this.GAt[e],
                            s = !0;
                        if ((r.width < 1 || r.height < 1) && (s = !1), u) {
                            u.isVisible = s, u.intersectionRatio = n, u.intersectionRect = i, u.boundingClientRect = r;
                            for (var o = 0; o < u.listeners.length; o++) u.listeners[o](u.isVisible ? n : 0)
                        }
                    }, i
                }(Vr),
                Gr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t, i) {
                        var r;
                        return (r = n.call(this, t, t.ampdoc)).embed = i, r.qAt = r.parent.isBackgrounded(), r.unsubscribe(r.parent.observe(i.host, r.setRootVisibility.bind(f(r)))), r
                    }
                    var r = i.prototype;
                    return r.getStartTime = function() {
                        return this.embed.getStartTime()
                    }, r.isBackgrounded = function() {
                        return this.parent.isBackgrounded()
                    }, r.isBackgroundedAtStart = function() {
                        return this.qAt
                    }, r.getRootMinOpacity = function() {
                        return Cr(this.embed.iframe)
                    }, r.getRootLayoutBox = function() {
                        var t = this.embed.iframe;
                        return Ct(this.ampdoc).getLayoutRect(t)
                    }, r.observe = function(t, n) {
                        return this.parent.observe(t, n)
                    }, r.getElementVisibility = function(t) {
                        return 0 == this.getRootVisibility() ? 0 : this.parent.getElementVisibility(t)
                    }, r.getElementIntersectionRect = function(t) {
                        return 0 == this.getRootVisibility() ? null : this.parent.getElementIntersectionRect(t)
                    }, i
                }(Vr),
                Br = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
            var Wr = "amp-analytics/analytics-root",
                $r = /^vars(.+)/,
                Yr = function() {
                    function t(t) {
                        this.ampdoc = t, this.DSt = S(), this.YAt = null, this.zAt = null
                    }
                    var n = t.prototype;
                    return n.dispose = function() {
                        for (var t in this.DSt) this.DSt[t].dispose(), delete this.DSt[t];
                        this.YAt && this.YAt.dispose(), this.zAt && this.zAt.dispose()
                    }, n.getType = function() {}, n.getRoot = function() {}, n.getRootElement = function() {
                        var t = this.getRoot();
                        return t.host || t.documentElement || t.body || t
                    }, n.getHostElement = function() {}, n.signals = function() {}, n.contains = function(t) {
                        return this.getRoot().contains(t)
                    }, n.getElementById = function(t) {}, n.getTrackerForAllowlist = function(t, n) {
                        var i = n[t];
                        return i ? this.getTracker(t, i) : null
                    }, n.getTracker = function(t, n) {
                        var i = this.DSt[t];
                        return i || (i = new n(this), this.DSt[t] = i), i
                    }, n.getTrackerOptional = function(t) {
                        return this.DSt[t] || null
                    }, n.getElement = function(t, n) {
                        var i = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        return ":root" == n ? s((function() {
                            return i.getRootElement()
                        })) : ":host" == n ? new Promise((function(t) {
                            t(it().assertElement(i.getHostElement(), 'Element "'.concat(n, '" not found')))
                        })) : this.ampdoc.whenReady().then((function() {
                            var e, u = null;
                            try {
                                e = "scope" == r ? L(t, n) : "closest" == r ? x(t, n) : i.getRoot().querySelector(n)
                            } catch (t) {
                                st(!1, "Invalid query selector ".concat(n))
                            }
                            return e && i.contains(e) && (u = e), it().assertElement(u, 'Element "'.concat(n, '" not found'))
                        }))
                    }, n.KAt = function(t) {
                        var n = this,
                            i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return this.ampdoc.whenReady().then((function() {
                            for (var r = [], e = 0; e < t.length; e++) {
                                var u = void 0,
                                    s = [],
                                    o = t[e];
                                try {
                                    u = n.getRoot().querySelectorAll(o)
                                } catch (t) {
                                    st(!1, "Invalid query selector ".concat(o))
                                }
                                for (var a = 0; a < u.length; a++) n.contains(u[a]) && s.push(u[a]);
                                st((s = i ? n.JAt(s, o) : s).length, 'Element "'.concat(o, '" not found')), r = r.concat(s)
                            }
                            return r.filter((function(t, n) {
                                return r.indexOf(t) === n
                            }))
                        }))
                    }, n.JAt = function(t, n) {
                        for (var i = 0, r = [], e = 0; e < t.length; e++) Object.keys(j(t[e], void 0, $r)).length ? r.push(t[e]) : i++;
                        return i && it().warn(Wr, '%s element(s) ommited from selector "%s" because no data-vars-* attribute was found.', i, n), r
                    }, n.getAmpElement = function(t, n, i) {
                        var r = this;
                        return this.getElement(t, n, i).then((function(t) {
                            return r.XAt([t], n), t
                        }))
                    }, n.getElements = function(t, n, i) {
                        var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        return d(n) ? (st(!i, "Cannot have selectionMethod %s defined with an array selector.", i), this.KAt(n, r)) : this.getElement(t, n, i).then((function(t) {
                            return [t]
                        }))
                    }, n.XAt = function(t, n) {
                        for (var i = 0; i < t.length; i++) st(t[i].classList.contains("i-amphtml-element"), 'Element "%s" is required to be an AMP element', n)
                    }, n.createSelectiveListener = function(t, n, i) {
                        var r = this,
                            e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return function(u) {
                            if (":host" != i)
                                for (var s = r.getRootElement(), o = "*" == i, a = ":root" == i, h = u.target; h && r.contains(h) && ("scope" != e || a || n.contains(h));)
                                    if ("closest" != e || h.contains(n)) {
                                        if (o || a && h == s || Jr(h, i)) {
                                            t(h, u);
                                            break
                                        }
                                        h = h.parentElement
                                    } else h = h.parentElement
                        }
                    }, n.whenIniLoaded = function() {}, n.getVisibilityManager = function() {
                        return this.YAt || (this.YAt = Fr(this.getRoot())), this.YAt
                    }, n.getScrollManager = function() {
                        return this.zAt || (this.zAt = new Pr(this)), this.zAt
                    }, t
                }(),
                zr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        return n.call(this, t)
                    }
                    var r = i.prototype;
                    return r.getType = function() {
                        return "ampdoc"
                    }, r.getRoot = function() {
                        return this.ampdoc.getRootNode()
                    }, r.getHostElement = function() {
                        return null
                    }, r.signals = function() {
                        return this.ampdoc.signals()
                    }, r.getElementById = function(t) {
                        return this.ampdoc.getElementById(t)
                    }, r.whenIniLoaded = function() {
                        var t, n, i = Ct(this.ampdoc);
                        if ("inabox" == K(this.ampdoc.win).runtime) i.getLayoutRect(this.getRootElement());
                        else {
                            var r = i.getSize();
                            _r(0, 0, r.width, r.height)
                        }
                        return t = this.ampdoc, this.ampdoc.win,
                            function(t, n) {
                                var i = St(t);
                                return i.signals().whenSignal("ready-scan").then((function() {
                                    var t = function(t) {
                                        return at(t, "resources")
                                    }(i).get().filter((function(t) {
                                        return !(n && !t.prerenderAllowed() || Br.includes(t.element.tagName))
                                    })).map((function(t) {
                                        return t.element
                                    }));
                                    return 0 === t.length ? Promise.resolve([]) : new Promise((function(n) {
                                        for (var r = i.win, e = new r.IntersectionObserver((function(t) {
                                                e.disconnect();
                                                for (var i = [], r = 0; r < t.length; r++) {
                                                    var u = t[r],
                                                        s = u.isIntersecting,
                                                        o = u.target;
                                                    s && i.push(o)
                                                }
                                                n(i)
                                            }), {
                                                root: H(r) ? r.document : null,
                                                threshold: .01
                                            }), u = 0; u < Math.min(t.length, 100); u++) e.observe(t[u])
                                    })).then((function(t) {
                                        return Promise.all(t.map((function(t) {
                                            return t.whenLoaded()
                                        })))
                                    }))
                                }))
                            }(t, n)
                    }, i
                }(Yr),
                Kr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t, i) {
                        var r;
                        return (r = n.call(this, t)).embed = i, r
                    }
                    var r = i.prototype;
                    return r.getType = function() {
                        return "embed"
                    }, r.getRoot = function() {
                        return this.embed.win.document
                    }, r.getHostElement = function() {
                        return this.embed.iframe
                    }, r.signals = function() {
                        return this.embed.signals()
                    }, r.getElementById = function(t) {
                        return this.embed.win.document.getElementById(t)
                    }, r.whenIniLoaded = function() {
                        return this.embed.whenIniLoaded()
                    }, i
                }(Yr);

            function Jr(t, n) {
                try {
                    return k(t, n)
                } catch (t) {
                    return it().error(Wr, "Bad query selector.", n, t), !1
                }
            }
            var Xr = "__AMP_AN_ROOT",
                Zr = function() {
                    function t(t) {
                        this.ampdoc = t, this.Re = this.ZAt(t.getRootNode())
                    }
                    var n = t.prototype;
                    return n.dispose = function() {
                        this.Re.dispose()
                    }, n.getAnalyticsRoot = function(t) {
                        return this.ZAt(t)
                    }, n.createAnalyticsGroup = function(t) {
                        var n = this.ZAt(t);
                        return new Nr(n, t)
                    }, n.QAt = function(t) {
                        return t === rr ? br : pr
                    }, n.triggerEventForTarget = function(t, n) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            e = new vr(t, n, i, r),
                            u = this.ZAt(t),
                            s = cr(n),
                            o = u.getTracker(s, this.QAt(s));
                        o.trigger(e)
                    }, n.ZAt = function(t) {
                        var n = St(t),
                            i = vt(t),
                            r = i && kn(i);
                        return n == this.ampdoc && !r && this.Re ? this.Re : this.tOt(r || n, (function() {
                            return r ? new Kr(n, r) : new zr(n)
                        }))
                    }, n.tOt = function(t, n) {
                        var i = t[Xr];
                        return i || (i = n(), t[Xr] = i), i
                    }, t
                }(),
                Qr = "amp-analytics/linker-manager",
                te = function() {
                    function t(t, n, i, r) {
                        this.Ii = t, this.d_ = n.linkers, this.FT = n.vars || {}, this.wM = i, this.Gn = r, this.nOt = {}, this.vR = Pt(this.Gn), this.i1 = ct(t, "form-submit-service"), this.iOt = null, this.oG = gi(this.Ii), this.rOt = null
                    }
                    var n = t.prototype;
                    return n.init = function() {
                        var t = this;
                        if (!w(this.d_)) return e();
                        this.rOt = gn(this.Ii.win), this.d_ = this.eOt(this.d_);
                        var n = Object.keys(this.d_).map((function(n) {
                            var i = t.d_[n].ids,
                                r = Object.keys(i),
                                e = r.map((function(n) {
                                    var r = new fi(t.FT, void 0, !0);
                                    return t.uOt(i[n], r)
                                }));
                            return Promise.all(e).then((function(i) {
                                var e = {};
                                return i.forEach((function(t, n) {
                                    t && (e[r[n]] = t)
                                })), t.nOt[n] = e, e
                            }))
                        }));
                        if (n.length) {
                            var i = at(this.Ii, "navigation");
                            i.registerAnchorMutator((function(n, i) {
                                n.href && "click" === i.type && (n.href = t.sOt(n.href))
                            }), 2), i.registerNavigateToMutator((function(n) {
                                return t.sOt(n)
                            }), 2)
                        }
                        return this.oOt(), Promise.all(n)
                    }, n.dispose = function() {
                        this.iOt && this.iOt()
                    }, n.eOt = function(t) {
                        var n = {},
                            i = {
                                enabled: this.aOt() && this.hOt()
                            },
                            r = Object.keys(t).filter((function(n) {
                                var r = t[n],
                                    e = w(r);
                                return e || (i[n] = r), e
                            })),
                            e = jn.getLocation(this.Ii.win),
                            u = this.vR.isProxyOrigin(e);
                        return r.forEach((function(r) {
                            var e = Wt(Wt({}, i), t[r]);
                            !0 === e.enabled ? (u || !1 === e.proxyOnly) && (e.ids ? n[r] = e : it().error(Qr, '"ids" is a required field for use of "linkers".')) : it().info(Qr, "linker config for %s is not enabled and will be ignored.", r)
                        })), n
                    }, n.uOt = function(t, n) {
                        var i = this,
                            r = this.oG.getMacros(this.Gn);
                        return this.oG.expandTemplate(t, n, this.Gn).then((function(t) {
                            return _t(i.Gn).expandUrlAsync(t, r)
                        }))
                    }, n.aOt = function() {
                        return "googleanalytics" === this.wM && "googleanalytics" === this.Ii.getMetaByName("amp-google-client-id-api") && this.Ii.registerSingleton(2)
                    }, n.hOt = function() {
                        var t = ot(this.Ii.win, "platform");
                        return t.isSafari() && t.getMajorVersion() >= 12
                    }, n.sOt = function(t) {
                        var n = this.d_;
                        for (var i in n) this.nOt[i] && (t = this.cOt(t, i, n[i]));
                        return t
                    }, n.cOt = function(t, n, i) {
                        var r = this.vR.parse(t);
                        if (this.fOt(r, n, i) && this.lOt(r)) {
                            var e = Gn("1", this.nOt[n]);
                            if (e) {
                                var u = {};
                                return u[n] = e,
                                    function(t, n) {
                                        for (var i = $(on(t).search), r = {}, e = Object.keys(n), u = 0; u < e.length; u++) A(i, e[u]) || (r[e[u]] = n[e[u]]);
                                        return function(t, n) {
                                            return an(t, cn(n))
                                        }(t, r)
                                    }(t, u)
                            }
                        }
                        return t
                    }, n.fOt = function(t, n, i) {
                        var r = i.destinationDomains,
                            e = t.hostname,
                            u = jn.getHostname(this.Ii.win),
                            s = i.sameDomainEnabled;
                        if (!Boolean(s) && u === e) return !1;
                        if (r && !Array.isArray(r)) return it().warn(Qr, "%s destinationDomains must be an array.", n), !1;
                        if (r) return this.vOt(r, e);
                        var o = at(this.Ii, "documentInfo").get(),
                            a = o.canonicalUrl,
                            h = o.sourceUrl,
                            c = ne(this.vR.parse(a).hostname, e);
                        if (this.rOt) {
                            var f = [this.rOt, "*" + this.rOt];
                            return this.vOt(f, e) || c
                        }
                        return ne(this.vR.parse(h).hostname, e) || c
                    }, n.lOt = function(t) {
                        return "https:" === t.protocol || "http:" === t.protocol
                    }, n.vOt = function(t, n) {
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            if (r === n) return !0;
                            if (-1 !== r.indexOf("*") && re(n, r)) return !0
                        }
                        return !1
                    }, n.oOt = function() {
                        var t = this;
                        this.iOt || this.i1.then((function(n) {
                            t.iOt = n.beforeSubmit(t.dOt.bind(t))
                        }))
                    }, n.dOt = function(t) {
                        var n = t.actionXhrMutator,
                            i = t.form;
                        for (var r in this.d_) {
                            var e = this.d_[r],
                                u = i.getAttribute("action-xhr") || i.getAttribute("action"),
                                s = this.vR.parse(u);
                            this.fOt(s, r, e) && this.mOt(i, n, r)
                        }
                    }, n.mOt = function(t, n, i) {
                        var r = this.nOt[i];
                        if (r) {
                            var e = Gn("1", r),
                                u = t.getAttribute("action-xhr");
                            if (u) return n(an(u, hn(i, e), void 0));
                            this.pOt(t, i, e)
                        }
                    }, n.pOt = function(t, n, i) {
                        var r = {
                                "type": "hidden",
                                "name": n,
                                "value": i
                            },
                            e = U(t.ownerDocument, "input", r);
                        t.appendChild(e)
                    }, t
                }();

            function ne(t, n) {
                return ie(t) === ie(n)
            }

            function ie(t) {
                return t.replace(/^(?:www\.|m\.|amp\.)+/, "")
            }

            function re(t, n) {
                var i = n.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*");
                return new RegExp("^" + i + "$").test(t)
            }
            var ee = {
                    "AMPDOC_HOST": !0,
                    "AMPDOC_HOSTNAME": !0,
                    "AMPDOC_URL": !0,
                    "AMP_VERSION": !0,
                    "AVAILABLE_SCREEN_HEIGHT": !0,
                    "AVAILABLE_SCREEN_WIDTH": !0,
                    "BACKGROUND_STATE": !0,
                    "BROWSER_LANGUAGE": !0,
                    "CANONICAL_HOST": !0,
                    "CANONICAL_HOSTNAME": !0,
                    "CANONICAL_PATH": !0,
                    "CANONICAL_URL": !0,
                    "DOCUMENT_CHARSET": !0,
                    "FIRST_CONTENTFUL_PAINT": !0,
                    "FIRST_VIEWPORT_READY": !0,
                    "MAKE_BODY_VISIBLE": !0,
                    "RANDOM": !0,
                    "SCREEN_COLOR_DEPTH": !0,
                    "SCREEN_HEIGHT": !0,
                    "SCREEN_WIDTH": !0,
                    "SOURCE_HOST": !0,
                    "SOURCE_HOSTNAME": !0,
                    "SOURCE_PATH": !0,
                    "SOURCE_URL": !0,
                    "TIMESTAMP": !0,
                    "TIMEZONE": !0,
                    "TIMEZONE_CODE": !0,
                    "USER_AGENT": !0,
                    "VIEWPORT_HEIGHT": !0,
                    "VIEWPORT_WIDTH": !0
                },
                ue = "${extraUrlParams}",
                se = function() {
                    function t() {}
                    var n = t.prototype;
                    return n.generateRequest = function(t, n) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return i ? {
                            url: t.replace(ue, ""),
                            payload: JSON.stringify(n.extraUrlParams)
                        } : {
                            url: ae(t, [n])
                        }
                    }, n.generateBatchRequest = function(t, n) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return i ? {
                            url: t.replace(ue, ""),
                            payload: JSON.stringify(n.map((function(t) {
                                return t.extraUrlParams
                            })))
                        } : {
                            url: ae(t, n)
                        }
                    }, t
                }(),
                oe = {
                    "default": new se
                };

            function ae(t, n) {
                var i = n.map((function(t) {
                    return cn(t.extraUrlParams)
                })).filter(Boolean).join("&");
                return t.indexOf(ue) >= 0 ? t.replace(ue, i) : an(t, i)
            }
            var he = function() {
                function t(t, n, i, r, e) {
                    this.Gn = t, this.Ii = t.getAmpDoc(), this.win = this.Ii.win, this.bOt = n.origin, this.baseUrl = ut(n.baseUrl), this.EOt = n.batchInterval, this.TOt = Number(n.reportWindow) || null, this.gOt = null, this.oG = gi(t), this.uC = _t(t), this.vR = Pt(t), this.yOt = null, this.wOt = null, this.SOt = [], this.AOt = i, this.sI = r, this.Ce = e ? ee : void 0, this.OOt = null, this.NOt = null, this.IOt = !0, this._Ot = null, this.CG = 0, this.Zh = Date.now(), this.ROt(), this.POt()
                }
                var n = t.prototype;
                return n.send = function(t, n, i) {
                    var r = !0 === n.important;
                    if (this.IOt || r) {
                        this.CG++, this._Ot = n;
                        var e, u, s, o = this.oG.getMacros(this.Gn);
                        if (o.RESOURCE_TIMING = (e = this.Gn, u = n.resourceTimingSpec, s = this.Zh, u && Date.now() < s + 6e4 ? function(t, n) {
                                var i, r = t.getAmpDoc().win;
                                if (n.done || !r.performance || !r.performance.now || !r.performance.getEntriesByType || !(w((i = n).resources) ? i.encoding && i.encoding.entry && i.encoding.delim ? i.encoding.base < 2 || i.encoding.base > 36 ? (it().warn("ANALYTICS", "resource timing variables only supports bases between 2 and 36"), 0) : null == i.responseAfter || "number" == typeof i.responseAfter || (it().warn("ANALYTICS", 'resourceTimingSpec["responseAfter"] must be a number'), 0) : (it().warn("ANALYTICS", "resourceTimingSpec is missing or has incomplete encoding options"), 0) : (it().warn("ANALYTICS", 'resourceTimingSpec missing "resources" field'), 0))) return n.done = !0, Promise.resolve("");
                                var e = function(t) {
                                    return t.performance.getEntriesByType("resource")
                                }(r);
                                e.length >= 150 && (n.done = !0);
                                var u, s = n.responseAfter || 0;
                                return n.responseAfter = Math.max(s, r.performance.now()), (e = e.filter((function(t) {
                                    return t.startTime + t.duration >= s
                                }))).length ? (u = function() {
                                    return function(t, n, i) {
                                        var r = n.resources,
                                            e = n.encoding,
                                            u = gi(i),
                                            s = function(t) {
                                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                                return Math.round(t - n).toString(e.base || 10)
                                            },
                                            o = function(t, n) {
                                                var i = function(t) {
                                                        var n = {};
                                                        for (var i in t) {
                                                            var r = t[i].host || "",
                                                                e = t[i].path || "",
                                                                u = t[i].query || "",
                                                                s = {
                                                                    name: i,
                                                                    pathPattern: new RegExp(e),
                                                                    queryPattern: new RegExp(u)
                                                                };
                                                            n[r] ? n[r].resources.push(s) : n[r] = {
                                                                hostPattern: new RegExp(r),
                                                                resources: [s]
                                                            }
                                                        }
                                                        var o = [];
                                                        for (var a in n) o.push(n[a]);
                                                        return o
                                                    }(n),
                                                    r = [];
                                                return t.forEach((function(t) {
                                                    var n = function(t, n) {
                                                        for (var i = t.name, r = 0; r < n.length; ++r) {
                                                            var e = n[r],
                                                                u = e.hostPattern,
                                                                s = e.resources;
                                                            if (u.test(i.host)) {
                                                                var o = m(s, (function(t) {
                                                                    return t.pathPattern.test(i.pathname) && t.queryPattern.test(i.search)
                                                                }));
                                                                if (-1 != o) return s[o].name
                                                            }
                                                        }
                                                        return null
                                                    }(t, i);
                                                    n && r.push({
                                                        entry: t,
                                                        name: n
                                                    })
                                                })), r
                                            }(t, r).map((function(t) {
                                                return function(t, n, i) {
                                                    var r = {
                                                        "key": n,
                                                        "startTime": i(t.startTime),
                                                        "redirectTime": i(t.redirectEnd, t.redirectStart),
                                                        "domainLookupTime": i(t.domainLookupEnd, t.domainLookupStart),
                                                        "tcpConnectTime": i(t.connectEnd, t.connectStart),
                                                        "serverResponseTime": i(t.responseStart, t.requestStart),
                                                        "networkTransferTime": i(t.responseEnd, t.responseStart),
                                                        "transferSize": i(t.transferSize || 0),
                                                        "encodedBodySize": i(t.encodedBodySize || 0),
                                                        "decodedBodySize": i(t.decodedBodySize || 0),
                                                        "duration": i(t.duration),
                                                        "initiatorType": t.initiatorType
                                                    };
                                                    return new fi(r, 1)
                                                }(t.entry, t.name, s)
                                            })).map((function(t) {
                                                return u.expandTemplate(e.entry, t, i)
                                            }));
                                        return Promise.all(o).then((function(t) {
                                            return t.join(e.delim)
                                        }))
                                    }(e, n, t)
                                }, new Promise((function(t) {
                                    setTimeout((function() {
                                        return t(u())
                                    }))
                                }))) : Promise.resolve("")
                            }(e, u) : Promise.resolve("")), this.yOt || (i.freezeVar("extraUrlParams"), this.yOt = this.COt(this.baseUrl, i, o)), !this.wOt && this.bOt) {
                            var a = new fi(i.vars, i.iterations, !0);
                            this.wOt = this.COt(this.bOt, a, o)
                        }
                        var h = Wt(Wt({}, t), n.extraUrlParams),
                            c = this.win.Date.now(),
                            f = ce(this.oG, this.uC, h, i, o, this.Gn, this.Ce).then((function(t) {
                                return {
                                    "trigger": n.on,
                                    "timestamp": c,
                                    "extraUrlParams": t
                                }
                            }));
                        this.SOt.push(f), this.Ee(r || !this.EOt)
                    }
                }, n.dispose = function() {
                    this.Qr(), this.OOt && (this.win.clearTimeout(this.OOt), this.OOt = null), this.NOt && (this.win.clearTimeout(this.NOt), this.NOt = null)
                }, n.COt = function(t, n, i) {
                    var r = this;
                    return this.oG.expandTemplate(t, n, this.Gn, i, this.Ce).then((function(t) {
                        return r.uC.expandUrlAsync(t, i, r.Ce).catch((function(n) {
                            return st(!1, 'Could not expand URL "'.concat(t, '": ').concat(n.message))
                        }))
                    }))
                }, n.Ee = function(t) {
                    0 != this.CG && t && this.MOt()
                }, n.MOt = function() {
                    var t = this,
                        n = this.yOt,
                        i = this.SOt,
                        r = this.wOt,
                        e = this._Ot;
                    this.Qr(), (r || n).then((function(n) {
                        t.AOt.url(t.Ii, n, !0)
                    })), Promise.all([n, Promise.all(i), r]).then((function(n) {
                        var i = t.DOt(n[0], n[2]),
                            r = n[1];
                        0 !== r.length && (e.iframePing ? (st(e.on == sr, "iframePing is only available on page view requests."), t.sI.sendRequestUsingIframe(i, r[0])) : t.sI.sendRequest(i, r, !!t.EOt))
                    }))
                }, n.Qr = function() {
                    this.CG = 0, this.yOt = null, this.SOt = [], this._Ot = null
                }, n.POt = function() {
                    if (this.EOt) {
                        this.EOt = d(this.EOt) ? this.EOt : [this.EOt];
                        for (var t = 0; t < this.EOt.length; t++) {
                            var n = this.EOt[t];
                            st(N(n), "Invalid batchInterval value: %s", this.EOt), st((n = 1e3 * Number(n)) >= 200, "Invalid batchInterval value: %s, interval value must be greater than %s ms.", this.EOt, 200), this.EOt[t] = n
                        }
                        this.gOt = 0, this.LOt()
                    }
                }, n.ROt = function() {
                    var t = this;
                    this.TOt && (this.NOt = this.win.setTimeout((function() {
                        t.Ee(!0), t.IOt = !1, t.OOt && (t.win.clearTimeout(t.OOt), t.OOt = null)
                    }), 1e3 * this.TOt))
                }, n.LOt = function() {
                    var t = this;
                    ut(null != this.gOt);
                    var n = this.gOt < this.EOt.length ? this.EOt[this.gOt++] : this.EOt[this.EOt.length - 1];
                    this.OOt = this.win.setTimeout((function() {
                        t.Ee(!0), t.LOt()
                    }), n)
                }, n.DOt = function(t, n) {
                    return n ? this.vR.parse(n).origin + t : t
                }, t
            }();

            function ce(t, n, i, r, e, u, s) {
                for (var o = {}, a = [], h = new fi(r.vars, r.iterations, !0), c = function i(r, o, c) {
                        var f = r[o];
                        if ("string" == typeof f) {
                            c[o] = void 0;
                            var l = t.expandTemplate(f, h, u).then((function(t) {
                                return n.expandStringAsync(t, e, s)
                            })).then((function(t) {
                                c[o] = t
                            }));
                            a.push(l)
                        } else if (d(f)) {
                            c[o] = [];
                            for (var v = 0; v < f.length; v++) i(f, v, c[o])
                        } else if (w(f) && null !== f) {
                            c[o] = {};
                            for (var m = Object.keys(f), p = 0; p < m.length; p++) i(f, m[p], c[o])
                        } else c[o] = f
                    }, f = Object.keys(i), l = 0; l < f.length; l++) c(i, f[l], o);
                return Promise.all(a).then((function() {
                    return o
                }))
            }
            var fe = function() {
                    function t(t, n) {
                        var i = this;
                        this.Wvt = n, this.dq = !1, this.kOt = [], this.ugt = new Ln(this.Wvt, "send-iframe-transport-events", !0, (function() {
                            i.setIsReady()
                        }))
                    }
                    var n = t.prototype;
                    return n.isReady = function() {
                        return this.dq
                    }, n.setIsReady = function() {
                        this.dq = !0, this.xOt()
                    }, n.queueSize = function() {
                        return this.kOt.length
                    }, n.enqueue = function(t) {
                        ut(t && t.creativeId && t.message), this.kOt.push(t), this.queueSize() >= 100 && (et().warn("amp-analytics/iframe-transport-message-queue", "Exceeded maximum size of queue for: " + t.creativeId), this.kOt.shift()), this.xOt()
                    }, n.xOt = function() {
                        this.isReady() && this.queueSize() && (this.ugt.send("iframe-transport-events", {
                            events: this.kOt
                        }), this.kOt = [])
                    }, t
                }(),
                le = function() {
                    return self.AMP.config.urls
                }(),
                ve = function() {
                    function t(t, n, i, r) {
                        this.UOt = t, this.wM = n, this.jOt = r, ut(i && i.iframe), this.HOt = i.iframe, this.FOt = 0, this.processCrossDomainIframe()
                    }
                    var n = t.prototype;
                    return n.detach = function() {
                        t.markCrossDomainIframeAsDone(this.UOt.document, this.wM)
                    }, n.processCrossDomainIframe = function() {
                        var n;
                        t.hasCrossDomainIframe(this.wM) ? ++(n = t.getFrameData(this.wM)).usageCount : (n = this.createCrossDomainIframe(), this.UOt.document.body.appendChild(n.frame), this.Fv()), ut(n)
                    }, n.createCrossDomainIframe = function() {
                        var n = t.VOt(),
                            i = JSON.stringify({
                                scriptSrc: (this.UOt, le.thirdParty + "/".concat("2205270638004", "/iframe-transport-client-v0.js")),
                                sentinel: n,
                                type: this.wM
                            }),
                            r = U(this.UOt.document, "iframe", {
                                sandbox: "allow-scripts allow-same-origin",
                                name: i,
                                "data-amp-3p-sentinel": n
                            });
                        r.sentinel = n, _n(r, !1), r.src = this.HOt;
                        var e = {
                            frame: r,
                            usageCount: 1,
                            queue: new fe(this.UOt, r)
                        };
                        return t.qOt[this.wM] = e, e
                    }, n.Fv = function() {
                        var n, i = this;
                        (n = this.UOt).PerformanceObserver && n.TaskAttributionTiming && "containerName" in n.TaskAttributionTiming.prototype && (t.GOt[this.wM] = new this.UOt.PerformanceObserver((function(t) {
                            t && t.getEntries().forEach((function(t) {
                                t && "longtask" == t.entryType && "cross-origin-descendant" == t.name && t.attribution && t.attribution.forEach((function(t) {
                                    i.HOt == t.containerSrc && ++i.FOt % 5 == 0 && it().error("amp-analytics/iframe-transport", 'Long Task: Vendor: "'.concat(i.wM, '"'))
                                }))
                            }))
                        })), t.GOt[this.wM].observe({
                            entryTypes: ["longtask"]
                        }))
                    }, t.markCrossDomainIframeAsDone = function(n, i) {
                        var r = t.getFrameData(i);
                        ut(r && r.frame && r.usageCount), --r.usageCount || (n.body.removeChild(r.frame), delete t.qOt[i], t.GOt[i] && (t.GOt[i].disconnect(), t.GOt[i] = null))
                    }, t.hasCrossDomainIframe = function(n) {
                        return A(t.qOt, n)
                    }, t.VOt = function() {
                        return String(++t.BOt)
                    }, n.sendRequest = function(n) {
                        var i = t.getFrameData(this.wM);
                        ut(i), ut(i.queue), i.queue.enqueue({
                            creativeId: this.jOt,
                            message: n
                        })
                    }, t.getFrameData = function(n) {
                        return t.qOt[n]
                    }, t.resetCrossDomainIframes = function() {
                        t.qOt = {}
                    }, n.getCreativeId = function() {
                        return this.jOt
                    }, n.getType = function() {
                        return this.wM
                    }, t
                }();

            function de(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = jn.getImage(t),
                    e = new r;
                return i && (e.referrerPolicy = "no-referrer"), e.src = n, e
            }
            ve.qOt = {}, ve.BOt = 0, ve.GOt = {};
            var me, pe, be = "amp-analytics/transport",
                Ee = function() {
                    function t(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.Ii = t, this.t = t.win, this.It = n, this.xe = this.It.referrerPolicy, "no-referrer" === this.xe && (this.It.beacon = !1, this.It.xhrpost = !1), this.WOt = !!this.It.useBody, this.$Ot = null, this.YOt = "inabox" == K(this.t).runtime
                    }
                    var n = t.prototype;
                    return n.sendRequest = function(n, i, r) {
                        if (n && 0 !== i.length) {
                            var e, u, s = this.zOt(),
                                o = (e = function(t) {
                                    var e = r ? s.generateBatchRequest(n, i, t) : s.generateRequest(n, i[0], t);
                                    return e.url.startsWith("amp-script:") || (ln(e.url, "amp-analytics request"), function(t) {
                                        st(!("__amp_source_origin" in $(on(t).search)), "Source origin is not allowed in %s", t)
                                    }(e.url)), e
                                }, u = {}, function(t) {
                                    var n = String(t);
                                    return void 0 === u[n] && (u[n] = e(t)), u[n]
                                });
                            if (this.It.iframe) return this.$Ot ? void this.$Ot.sendRequest(o(!1).url) : void et().error(be, "iframe transport was inadvertently deleted");
                            if (this.It["amp-script"]) t.forwardRequestToAmpScript(this.Ii, {
                                url: n,
                                payload: o(!0).payload
                            });
                            else if (!(this.It.beacon && t.sendRequestUsingBeacon(this.t, o(this.WOt)) || this.It.xhrpost && t.sendRequestUsingXhr(this.t, o(this.WOt)))) {
                                var a = this.It.image;
                                if (a) {
                                    var h = "object" == c(a) && a.suppressWarnings;
                                    t.sendRequestUsingImage(this.t, o(!1), h, this.xe)
                                } else it().warn(be, "Failed to send request", n, this.It)
                            }
                        } else et().info(be, "Empty request not sent: ", n)
                    }, n.maybeInitIframeTransport = function(t) {
                        if (this.It.iframe && !this.$Ot) {
                            var n = lt(P(t)),
                                i = t.getAttribute("type"),
                                r = this.YOt ? "1" : it().assertString(function(t, n) {
                                    try {
                                        var i = vt(t, n).parentElement;
                                        if ("AMP-AD" == i.nodeName) return String(i.getResourceId())
                                    } catch (t) {}
                                    return null
                                }(t, n), "No friendly amp-ad ancestor element was found for amp-analytics tag with iframe transport.");
                            this.$Ot = new ve(n, i, this.It, r)
                        }
                    }, n.deleteIframeTransport = function() {
                        this.$Ot && (this.$Ot.detach(), this.$Ot = null)
                    }, n.sendRequestUsingIframe = function(t, n) {
                        var i = this,
                            r = ae(t, [n]);
                        if (r) {
                            ln(r, "amp-analytics request"), st(on(r).origin != on(this.t.location.href).origin, "Origin of iframe request must not be equal to the document origin. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.");
                            var e = this.t.document.createElement("iframe");
                            _n(e, !1), e.onload = e.onerror = function() {
                                It(i.t).delay((function() {
                                    var t, n;
                                    null === (n = (t = e).parentElement) || void 0 === n || n.removeChild(t)
                                }), 5e3)
                            }, e.setAttribute("amp-analytics", ""), e.setAttribute("sandbox", "allow-scripts allow-same-origin"), e.src = r, this.t.document.body.appendChild(e)
                        } else it().error(be, "Request not sent. Contents empty.")
                    }, n.zOt = function() {
                        return oe.default
                    }, t.sendRequestUsingImage = function(t, n, i, r) {
                        t && function(t) {
                            var n, i;
                            if (function(t) {
                                    return !!(t.complete || "complete" == t.readyState || Ut(t) && t.readyState > 0 || t.document && "complete" == t.document.readyState)
                                }(t)) return Promise.resolve(t);
                            var r = Ut(t);
                            return r && t.__AMP_MEDIA_LOAD_FAILURE_SRC === t.currentSrc ? Promise.reject(t) : new Promise((function(e, u) {
                                if (n = r ? xt(t, "loadedmetadata", e, {
                                        capture: !0
                                    }) : xt(t, "load", e), t.tagName) {
                                    var s = t;
                                    if (r && !t.hasAttribute("src") && !(s = function(t, n) {
                                            for (var i = t.lastElementChild; i; i = i.previousElementSibling)
                                                if (n(i)) return i;
                                            return null
                                        }(t, (function(t) {
                                            return "SOURCE" === t.tagName
                                        })))) return u(new Error("Media has no source."));
                                    i = xt(s, "error", u)
                                }
                            })).then((function() {
                                return i && i(), t
                            }), (function() {
                                n && n(),
                                    function(t) {
                                        Ut(t) && (t.__AMP_MEDIA_LOAD_FAILURE_SRC = t.currentSrc || !0);
                                        var n = t;
                                        throw n && n.src && (n = n.src), it().createError("Failed to load:", n)
                                    }(t)
                            }))
                        }(function(t, n, i) {
                            return i && "no-referrer" !== i && it().error("pixel", "Unsupported referrerPolicy: %s", i), "no-referrer" === i ? function(t, n) {
                                if ("referrerPolicy" in Image.prototype) return de(t, n, !0);
                                var i = U(t.document, "iframe", {
                                    "src": "about:blank",
                                    "style": "display:none"
                                });
                                return i.onload = function() {
                                    de(i.contentWindow, n)
                                }, t.document.body.appendChild(i), i
                            }(t, n) : de(t, n)
                        }(t, n.url, r)).then((function() {
                            et().fine(be, "Sent image request", n.url)
                        })).catch((function() {
                            i || it().warn(be, "Response unparseable or failed to send image request", n.url)
                        }))
                    }, t.sendRequestUsingBeacon = function(t, n) {
                        var i = jn.getSendBeacon(t);
                        if (!i) return !1;
                        var r = i(n.url, n.payload || "");
                        return r && et().fine(be, "Sent beacon request", n), r
                    }, t.sendRequestUsingXhr = function(t, n) {
                        var i = jn.getXMLHttpRequest(t);
                        if (!i) return !1;
                        var r = new i;
                        return "withCredentials" in r && (r.open("POST", n.url, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "text/plain"), r.onreadystatechange = function() {
                            4 == r.readyState && et().fine(be, "Sent XHR request", n.url)
                        }, r.send(n.payload || ""), !0)
                    }, t.forwardRequestToAmpScript = function(t, n) {
                        return (i = t, function(t, n, i) {
                            var r = ht(t, n);
                            return r ? Promise.resolve(r) : yt(t, n, "amp-script")
                        }(i, "amp-script")).then((function(t) {
                            st(t, "AMP-SCRIPT is not installed"), t.fetch(n.url, JSON.parse(n.payload))
                        }));
                        var i
                    }, t
                }(),
                Te = "amp-analytics",
                ge = [sr, Qi, tr, nr],
                ye = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).KOt = e(), i.JOt = null, i.xTt = !1, i.ET = {}, i.d_ = {}, i.XOt = null, i.ZOt = null, i.oG = null, i.QOt = At(i.win), i.tNt = null, i.sI = null, i.wM = i.element.getAttribute("type"), i.YOt = "inabox" == K(i.win).runtime, i.nNt = null, i.iNt = null, i.rNt = null, i
                    }
                    var r = i.prototype;
                    return r.getLayoutPriority = function() {
                        return this.YOt ? 0 : 1
                    }, r.isAlwaysFixed = function() {
                        return !xn(this.element)
                    }, r.isLayoutSupported = function(t) {
                        return !0
                    }, r.buildCallback = function() {
                        var t, n = this;
                        this.xTt = this.element.hasAttribute("sandbox"), this.element.setAttribute("aria-hidden", "true"), this.JOt = this.element.getAttribute("data-consent-notification-id"), null != this.JOt && (this.KOt = (t = this.element, function(t, n, i, r) {
                            return yt(t, "userNotificationManager", i, void 0).then((function(t) {
                                return function(t, n, i) {
                                    return st(t, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", "userNotificationManager", i, i, i)
                                }(t, 0, i)
                            }))
                        }(t, 0, "amp-user-notification")).then((function(t) {
                            return t.get(n.JOt)
                        }))), "immediate" == this.element.getAttribute("trigger") && this.eNt()
                    }, r.layoutCallback = function() {
                        return this.eNt()
                    }, r.detachedCallback = function() {
                        for (var t in this.ZOt && (this.ZOt.dispose(), this.ZOt = null), this.nNt && (this.nNt.dispose(), this.nNt = null), this.ET) this.ET[t].dispose(), delete this.ET[t]
                    }, r.resumeCallback = function() {
                        var t = this;
                        this.tNt && this.tNt.then((function() {
                            t.sI.maybeInitIframeTransport(t.element)
                        }))
                    }, r.unlayoutCallback = function() {
                        var n = this;
                        return !this.getAmpDoc().isVisible() && (this.tNt && this.tNt.then((function() {
                            n.sI.deleteIframeTransport()
                        })), t.prototype.unlayoutCallback.call(this))
                    }, r.eNt = function() {
                        var t = this;
                        if (this.tNt) return this.tNt;
                        var n = this.getAmpDoc();
                        return this.tNt = n.whenFirstVisible().then((function() {
                            return It(t.win).promise(1)
                        })).then((function() {
                            return t.KOt
                        })).then((function() {
                            return Promise.all([(t = n, ct(t, "amp-analytics-instrumentation")), yi(n)]);
                            var t
                        })).then((function(n) {
                            t.XOt = n[0], t.oG = n[1];
                            var i = new u,
                                r = function() {
                                    var n = new Oi(t.element).loadConfig();
                                    i.resolve(n)
                                };
                            return t.YOt ? r() : Li(t.element, r, 20), i.promise
                        })).then((function(n) {
                            return t.d_ = n, new qi(t.win, t.element, t.d_).write()
                        })).then((function() {
                            t.sI = new Ee(t.getAmpDoc(), t.d_.transport || {})
                        })).then(this.uNt.bind(this)).then(this.sNt.bind(this)).then(this.oNt.bind(this)), this.tNt.then((function() {
                            t.collapse()
                        })), this.tNt
                    }, r.aNt = function() {
                        return !!this.YOt || (null == this.rNt && (this.rNt = xn(this.element)), this.rNt)
                    }, r.uNt = function() {
                        var t = this;
                        return this.d_.triggers && Object.values(this.d_.triggers).some((function(t) {
                            var n;
                            return null == t || null === (n = t.session) || void 0 === n ? void 0 : n.persistEvent
                        })) && this.wM ? si(this.getAmpDoc()).then((function(n) {
                            t.iNt = n
                        })) : e()
                    }, r.sNt = function() {
                        var t = this;
                        if (this.hNt()) {
                            var n = this.Wi();
                            return it().fine(n, "User has opted out. No hits will be sent."), e()
                        }
                        if (this.cNt(), !this.d_.triggers) {
                            var i = this.Wi();
                            return this.user().warn(i, "No triggers were found in the config. No analytics data will be sent."), e()
                        }
                        this.fNt(this.d_.extraUrlParams, this.d_.extraUrlParamsReplaceMap), this.ZOt = this.XOt.createAnalyticsGroup(this.element), this.sI.maybeInitIframeTransport(this.element);
                        var r = [];
                        for (var u in this.d_.triggers) !A(this.d_.triggers, u) || function() {
                            var n = t.d_.triggers[u],
                                i = t.lNt({}, n, void 0, !0),
                                e = t.Wi();
                            if (!n) return t.user().error(e, "Trigger should be an object: ", u), "continue";
                            var s, o = n.request || n.parentPostMessage && t.aNt();
                            if (!n.on || !o) {
                                var a = t.aNt() ? '/"parentPostMessage"' : "";
                                return t.user().error(e, '"on" and "request"' + a + " attributes are required for data to be collected."), "continue"
                            }
                            if (t.xTt) {
                                var h = n.on;
                                if (!("click" !== (s = h) && "browser-event" !== s && "custom" !== s && "hidden" !== s && "ini-load" !== s && "render-start" !== s && "scroll" !== s && "story" !== s && "timer" !== s && "video" !== s && "visible" !== s || ge.includes(h))) return t.user().error(e, h + " is not supported for amp-analytics in scope"), "continue"
                            }
                            t.fNt(n.extraUrlParams, t.d_.extraUrlParamsReplaceMap), r.push(t.vNt(n).then((function(r) {
                                if (r) {
                                    if (t.xTt) {
                                        if (!t.element.parentElement) return;
                                        return n.selector = t.element.parentElement.tagName, n.selectionMethod = "closest", t.dNt(n)
                                    }
                                    return n.selector && !d(n.selector) ? t.oG.expandTemplate(n.selector, i, t.element).then((function(i) {
                                        return n.selector = i, t.dNt(n)
                                    })) : t.dNt(n)
                                }
                            })))
                        }();
                        return Promise.all(r)
                    }, r.preload = function(t, n) {
                        Nt(this.win).preload(this.getAmpDoc(), t, n)
                    }, r.dNt = function(t) {
                        if (!this.ZOt) return e();
                        try {
                            return this.ZOt.addTrigger(t, this.yk.bind(this, t))
                        } catch (n) {
                            return G(this.Wi(), 'Failed to process trigger "' + t.on + '"', n), e()
                        }
                    }, r.fNt = function(t, n) {
                        if (t && n) {
                            var i = 0;
                            for (var r in n) {
                                if (++i > 16) {
                                    var e = this.Wi();
                                    this.user().error(e, "More than 16 extraUrlParamsReplaceMap rules aren't allowed; Skipping the rest");
                                    break
                                }
                                for (var u in t) {
                                    var s = u.replace(r, n[r]);
                                    if (u != s) {
                                        var o = t[u];
                                        delete t[u], t[s] = o
                                    }
                                }
                            }
                        }
                    }, r.hNt = function() {
                        var t = this.d_.optoutElementId;
                        if (t && this.win.document.getElementById(t)) return !0;
                        if (!this.d_.optout) return !1;
                        for (var n = this.d_.optout.split("."), i = this.win, r = 0; r < n.length; r++) {
                            if (!i) return !1;
                            i = i[n[r]]
                        }
                        return i()
                    }, r.cNt = function() {
                        var t = this;
                        if (this.d_.requests) {
                            if (this.d_.requests) {
                                for (var n in this.d_.requests) A(this.d_.requests, n) && (this.d_.requests[n].baseUrl || (this.user().error(Te, "request must have a baseUrl"), delete this.d_.requests[n]));
                                for (var i in this.d_.requests) this.d_.requests[i].baseUrl = b(this.d_.requests[i].baseUrl, (function(n) {
                                    var i = t.d_.requests[n];
                                    return i && i.baseUrl || "${" + n + "}"
                                }), 5);
                                var r = {};
                                for (var e in this.d_.requests)
                                    if (A(this.d_.requests, e)) {
                                        var u = this.d_.requests[e];
                                        r[e] = new he(this.element, u, Nt(this.win), this.sI, this.xTt)
                                    }
                                this.ET = r
                            }
                        } else if (!this.aNt()) {
                            var s = this.Wi();
                            this.user().warn(s, "No request strings defined. Analytics data will not be sent from this page.")
                        }
                    }, r.oNt = function() {
                        var t = this;
                        this.nNt = new te(this.getAmpDoc(), this.d_, this.wM, this.element);
                        var n = function() {
                            t.nNt.init()
                        };
                        this.YOt ? n() : Li(this.element, n, 10)
                    }, r.yk = function(t, n) {
                        var i, r;
                        null === (i = t.session) || void 0 === i || !i.persistEvent || null === (r = this.iNt) || void 0 === r || r.updateEvent(this.wM);
                        for (var e = d(t.request) ? t.request : [t.request], u = 0; u < e.length; u++) {
                            var s = e[u];
                            this.mNt(s, t, n)
                        }
                    }, r.mNt = function(t, n, i) {
                        var r = this;
                        if (!this.element.ownerDocument.defaultView) {
                            var e = this.Wi();
                            et().warn(e, "request against destroyed embed: ", n.on)
                        }
                        var u = this.ET[t],
                            s = this.aNt() && n.parentPostMessage;
                        if (null != t && !u) {
                            var o = this.Wi();
                            if (this.user().error(o, "Ignoring request for event. Request string not found: ", n.request), !s) return
                        }
                        this.pNt(n, i).then((function(t) {
                            var e = r.element.ownerDocument && r.element.ownerDocument.defaultView;
                            t && e && (r.bNt(u, n, i), n.parentPostMessage && r.aNt() && H(r.win) && r.ENt(n, i))
                        }))
                    }, r.bNt = function(t, n, i) {
                        if (t) {
                            this.d_.vars.requestCount++;
                            var r = this.lNt(i, n);
                            t.send(this.d_.extraUrlParams, n, r)
                        }
                    }, r.ENt = function(t, n) {
                        var i = this,
                            r = t.parentPostMessage,
                            e = this.lNt(n, t);
                        (function(t, n, i, r, e, u) {
                            var s = gi(t),
                                o = _t(u),
                                a = s.getMacros(u);
                            e.freezeVar("extraUrlParams");
                            var h = s.expandTemplate(n, e, u).then((function(t) {
                                return o.expandStringAsync(t, a)
                            }));
                            return n.indexOf("${extraUrlParams}") < 0 ? h : h.then((function(t) {
                                var n = Wt(Wt({}, i), r.extraUrlParams);
                                return ce(s, o, n, e, a, u).then((function(n) {
                                    return ae(t, [{
                                        "extraUrlParams": n
                                    }])
                                }))
                            }))
                        })(this.getAmpDoc(), r, this.d_.extraUrlParams, t, e, this.element).then((function(t) {
                            i.win.parent.postMessage(t, "*")
                        }))
                    }, r.vNt = function(t) {
                        var n = this,
                            i = t.sampleSpec,
                            r = this.Wi();
                        if (!i) return Promise.resolve(!0);
                        var e = i.sampleOn;
                        if (!e) return this.user().error(r, "Invalid sampleOn value."), Promise.resolve(!0);
                        var s = parseFloat(i.threshold);
                        if (s >= 0 && s <= 100) {
                            var o = new u,
                                a = function() {
                                    var i = n.lNt({}, t),
                                        r = n.uOt(e, i).then((function(t) {
                                            return n.QOt.uniform(t)
                                        })).then((function(t) {
                                            return 100 * t < s
                                        }));
                                    o.resolve(r)
                                };
                            return this.YOt ? a() : Li(this.element, a, 10), o.promise
                        }
                        return it().error(r, "Invalid threshold for sampling."), Promise.resolve(!0)
                    }, r.pNt = function(t, n) {
                        var i = this.lNt(n, t),
                            r = this.TNt(this.d_.enabled, i),
                            e = this.TNt(t.enabled, i);
                        return Promise.all([r, e]).then((function(t) {
                            return ut(2 === t.length), t[0] && t[1]
                        }))
                    }, r.TNt = function(t, n) {
                        return void 0 === t ? Promise.resolve(!0) : "boolean" == typeof t ? Promise.resolve(t) : this.uOt(t, n).then((function(t) {
                            return Si(t)
                        }))
                    }, r.uOt = function(t, n) {
                        var i = this;
                        return this.oG.expandTemplate(t, n, this.element).then((function(t) {
                            return _t(i.element).expandUrlAsync(t, i.oG.getMacros(i.element))
                        }))
                    }, r.Wi = function() {
                        return "AmpAnalytics " + (this.element.getAttribute("id") || "<unknown id>")
                    }, r.lNt = function(t, n, i, r) {
                        var e = {};
                        return Ni(this.d_.vars, e), Ni(n.vars, e), Ni(t.vars, e), new fi(e, i, r)
                    }, i
                }(t.BaseElement);
            t.registerServiceForDoc("amp-analytics-instrumentation", Zr), t.registerServiceForDoc("activity", Gt), pe = $n, bt(me = lt(me = t.win), me, "amp-analytics-linker-reader", pe), t.registerServiceForDoc("amp-analytics-session", ni), t.registerServiceForDoc("amp-analytics-variables", bi), t.registerElement(Te, ye)
        }();
        /*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    }
});
//# sourceMappingURL=amp-analytics-0.1.js.map