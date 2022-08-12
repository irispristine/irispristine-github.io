/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
	function(t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e, window)
		}) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
	}(function(s, n) {
		"use strict";

		function e(e) {
			return 0 <= function(e, t) {
				for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
					if (+o[i] < +n[i]) return 1;
					if (+n[i] < +o[i]) return -1
				}
				return 0
			}(s.fn.jquery, e)
		}
		s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
		var r = {};

		function u(e) {
			var t = n.console;
			s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
		}

		function t(e, t, r, n) {
			Object.defineProperty(e, t, {
				configurable: !0,
				enumerable: !0,
				get: function() {
					return u(n), r
				},
				set: function(e) {
					u(n), r = e
				}
			})
		}

		function o(e, t, r, n) {
			e[t] = function() {
				return u(n), r.apply(this, arguments)
			}
		}
		s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
			r = {}, s.migrateWarnings.length = 0
		}, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
		var i, a, c, d = {},
			l = s.fn.init,
			p = s.find,
			f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
			y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
			m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		for (i in s.fn.init = function(e) {
				var t = Array.prototype.slice.call(arguments);
				return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t)
			}, s.fn.init.prototype = s.fn, s.find = function(t) {
				var r = Array.prototype.slice.call(arguments);
				if ("string" == typeof t && f.test(t)) try {
					n.document.querySelector(t)
				} catch (e) {
					t = t.replace(y, function(e, t, r, n) {
						return "[" + t + r + '"' + n + '"]'
					});
					try {
						n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
					} catch (e) {
						u("Attribute selector with '#' was not fixed: " + r[0])
					}
				}
				return p.apply(this, r)
			}, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
		o(s.fn, "size", function() {
			return this.length
		}, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function() {
			return JSON.parse.apply(null, arguments)
		}, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function(e) {
			return null == e ? "" : (e + "").replace(m, "")
		}, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function(e) {
			var t = typeof e;
			return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
		}, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
			d["[object " + t + "]"] = t.toLowerCase()
		}), o(s, "type", function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
		}, "jQuery.type is deprecated"), o(s, "isFunction", function(e) {
			return "function" == typeof e
		}, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function(e) {
			return null != e && e === e.window
		}, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function() {
			var e = a.apply(this, arguments);
			return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
		}, e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
			!1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
		}));
		var g = s.fn.removeAttr,
			h = s.fn.toggleClass,
			v = /\S+/g;

		function j(e) {
			return e.replace(/-([a-z])/g, function(e, t) {
				return t.toUpperCase()
			})
		}
		s.fn.removeAttr = function(e) {
			var r = this;
			return s.each(e.match(v), function(e, t) {
				s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
			}), g.apply(this, arguments)
		};
		var Q, b = !(s.fn.toggleClass = function(t) {
				return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
					var e = this.getAttribute && this.getAttribute("class") || "";
					e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
				}))
			}),
			w = /^[a-z]/,
			x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
		s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
			var r = s.cssHooks[t] && s.cssHooks[t].get;
			r && (s.cssHooks[t].get = function() {
				var e;
				return b = !0, e = r.apply(this, arguments), b = !1, e
			})
		}), s.swap = function(e, t, r, n) {
			var o, i, a = {};
			for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i];
			for (i in o = r.apply(e, n || []), t) e.style[i] = a[i];
			return o
		}, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
			set: function() {
				return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
			}
		})), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function(e, t) {
			var r, n, o = this;
			return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
				s.fn.css.call(o, e, t)
			}), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
		};
		var A, k, S, M, N = s.data;
		s.data = function(e, t, r) {
			var n, o, i;
			if (t && "object" == typeof t && 2 === arguments.length) {
				for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
				return N.call(this, e, o), t
			}
			return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments)
		}, s.fx && (S = s.Tween.prototype.run, M = function(e) {
			return e
		}, s.Tween.prototype.run = function() {
			1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments)
		}, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return n.document.hidden || u(k), A
			},
			set: function(e) {
				u(k), A = e
			}
		}));
		var R = s.fn.load,
			H = s.event.add,
			C = s.event.fix;
		s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function(e) {
			var t, r = e.type,
				n = this.fixHooks[r],
				o = s.event.props;
			if (o.length) {
				u("jQuery.event.props are deprecated and removed: " + o.join());
				while (o.length) s.event.addProp(o.pop())
			}
			if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
				while (o.length) s.event.addProp(o.pop());
			return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
		}, s.event.add = function(e, t) {
			return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments)
		}, s.each(["load", "unload", "error"], function(e, t) {
			s.fn[t] = function() {
				var e = Array.prototype.slice.call(arguments, 0);
				return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
			}
		}), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
			s.fn[r] = function(e, t) {
				return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
			}
		}), s(function() {
			s(n.document).triggerHandler("ready")
		}), s.event.special.ready = {
			setup: function() {
				this === n.document && u("'ready' event is deprecated")
			}
		}, s.fn.extend({
			bind: function(e, t, r) {
				return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
			},
			unbind: function(e, t) {
				return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
			},
			delegate: function(e, t, r, n) {
				return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
			},
			undelegate: function(e, t, r) {
				return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
			},
			hover: function(e, t) {
				return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
			}
		});

		function T(e) {
			var t = n.document.implementation.createHTMLDocument("");
			return t.body.innerHTML = e, t.body && t.body.innerHTML
		}

		function P(e) {
			var t = e.replace(O, "<$1></$2>");
			t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
		}
		var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
			q = s.htmlPrefilter;
		s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
			s.htmlPrefilter = function(e) {
				return P(e), e.replace(O, "<$1></$2>")
			}
		}, s.htmlPrefilter = function(e) {
			return P(e), q(e)
		};
		var D, _ = s.fn.offset;
		s.fn.offset = function() {
			var e = this[0];
			return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
		}, s.ajax && (D = s.param, s.param = function(e, t) {
			var r = s.ajaxSettings && s.ajaxSettings.traditional;
			return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
		});
		var E, F, J = s.fn.andSelf || s.fn.addBack;
		return s.fn.andSelf = function() {
			return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments)
		}, s.Deferred && (E = s.Deferred, F = [
			["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
			["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
			["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
		], s.Deferred = function(e) {
			var i = E(),
				a = i.promise();
			return i.pipe = a.pipe = function() {
				var o = arguments;
				return u("deferred.pipe() is deprecated"), s.Deferred(function(n) {
					s.each(F, function(e, t) {
						var r = "function" == typeof o[e] && o[e];
						i[t[1]](function() {
							var e = r && r.apply(this, arguments);
							e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
						})
					}), o = null
				}).promise()
			}, e && e.call(i, i), i
		}, s.Deferred.exceptionHook = E.exceptionHook), s
	});
(function($) {
	'use strict';
})(jQuery);
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
	"use strict";
	var t = [],
		r = Object.getPrototypeOf,
		s = t.slice,
		g = t.flat ? function(e) {
			return t.flat.call(e)
		} : function(e) {
			return t.concat.apply([], e)
		},
		u = t.push,
		i = t.indexOf,
		n = {},
		o = n.toString,
		v = n.hasOwnProperty,
		a = v.toString,
		l = a.call(Object),
		y = {},
		m = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		},
		x = function(e) {
			return null != e && e === e.window
		},
		E = C.document,
		c = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function b(e, t, n) {
		var r, i, o = (n = n || E).createElement("script");
		if (o.text = e, t)
			for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o)
	}

	function w(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
	}
	var f = "3.5.1",
		S = function(e, t) {
			return new S.fn.init(e, t)
		};

	function p(e) {
		var t = !!e && "length" in e && e.length,
			n = w(e);
		return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	S.fn = S.prototype = {
		jquery: f,
		constructor: S,
		length: 0,
		toArray: function() {
			return s.call(this)
		},
		get: function(e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = S.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return S.each(this, e)
		},
		map: function(n) {
			return this.pushStack(S.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(s.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(S.grep(this, function(e, t) {
				return (t + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(S.grep(this, function(e, t) {
				return t % 2
			}))
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: u,
		sort: t.sort,
		splice: t.splice
	}, S.extend = S.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, S.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e, t, n) {
			b(e, {
				nonce: t && t.nonce
			}, n)
		},
		each: function(e, t) {
			var n, r = 0;
			if (p(e)) {
				for (n = e.length; r < n; r++)
					if (!1 === t.call(e[r], r, e[r])) break
			} else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : i.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
			return r
		},
		map: function(e, t, n) {
			var r, i, o = 0,
				a = [];
			if (p(e))
				for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
			else
				for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
			return g(a)
		},
		guid: 1,
		support: y
	}), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var d = function(n) {
		var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
			p = n.document,
			k = 0,
			r = 0,
			m = ue(),
			x = ue(),
			A = ue(),
			N = ue(),
			D = function(e, t) {
				return e === t && (l = !0), 0
			},
			j = {}.hasOwnProperty,
			t = [],
			q = t.pop,
			L = t.push,
			H = t.push,
			O = t.slice,
			P = function(e, t) {
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			M = "[\\x20\\t\\r\\n\\f]",
			I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
			F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
			B = new RegExp(M + "+", "g"),
			$ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
			_ = new RegExp("^" + M + "*," + M + "*"),
			z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
			U = new RegExp(M + "|>"),
			X = new RegExp(F),
			V = new RegExp("^" + I + "$"),
			G = {
				ID: new RegExp("^#(" + I + ")"),
				CLASS: new RegExp("^\\.(" + I + ")"),
				TAG: new RegExp("^(" + I + "|[*])"),
				ATTR: new RegExp("^" + W),
				PSEUDO: new RegExp("^" + F),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + R + ")$", "i"),
				needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /HTML$/i,
			Q = /^(?:input|select|textarea|button)$/i,
			J = /^h\d$/i,
			K = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ee = /[+~]/,
			te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
			ne = function(e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
			},
			re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ie = function(e, t) {
				return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			oe = function() {
				T()
			},
			ae = be(function(e) {
				return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
		} catch (e) {
			H = {
				apply: t.length ? function(e, t) {
					L.apply(e, O.call(t))
				} : function(e, t) {
					var n = e.length,
						r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}

		function se(t, e, n, r) {
			var i, o, a, s, u, l, c, f = e && e.ownerDocument,
				p = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
			if (!r && (T(e), e = e || C, E)) {
				if (11 !== p && (u = Z.exec(t)))
					if (i = u[1]) {
						if (9 === p) {
							if (!(a = e.getElementById(i))) return n;
							if (a.id === i) return n.push(a), n
						} else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
					} else {
						if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
						if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
					} if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
					if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
						(f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
						while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
						c = l.join(",")
					}
					try {
						return H.apply(n, f.querySelectorAll(c)), n
					} catch (e) {
						N(t, !0)
					} finally {
						s === S && e.removeAttribute("id")
					}
				}
			}
			return g(t.replace($, "$1"), e, n, r)
		}

		function ue() {
			var r = [];
			return function e(t, n) {
				return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
			}
		}

		function le(e) {
			return e[S] = !0, e
		}

		function ce(e) {
			var t = C.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function fe(e, t) {
			var n = e.split("|"),
				r = n.length;
			while (r--) b.attrHandle[n[r]] = t
		}

		function pe(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n)
				while (n = n.nextSibling)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function de(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function he(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function ge(t) {
			return function(e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function ve(a) {
			return le(function(o) {
				return o = +o, le(function(e, t) {
					var n, r = a([], e.length, o),
						i = r.length;
					while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function ye(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}
		for (e in d = se.support = {}, i = se.isXML = function(e) {
				var t = e.namespaceURI,
					n = (e.ownerDocument || e).documentElement;
				return !Y.test(t || n && n.nodeName || "HTML")
			}, T = se.setDocument = function(e) {
				var t, n, r = e ? e.ownerDocument || e : p;
				return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
					return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
				}), d.attributes = ce(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), d.getElementsByTagName = ce(function(e) {
					return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
				}), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
					return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
				}), d.getById ? (b.filter.ID = function(e) {
					var t = e.replace(te, ne);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}, b.find.ID = function(e, t) {
					if ("undefined" != typeof t.getElementById && E) {
						var n = t.getElementById(e);
						return n ? [n] : []
					}
				}) : (b.filter.ID = function(e) {
					var n = e.replace(te, ne);
					return function(e) {
						var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return t && t.value === n
					}
				}, b.find.ID = function(e, t) {
					if ("undefined" != typeof t.getElementById && E) {
						var n, r, i, o = t.getElementById(e);
						if (o) {
							if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
							i = t.getElementsByName(e), r = 0;
							while (o = i[r++])
								if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
						}
						return []
					}
				}), b.find.TAG = d.getElementsByTagName ? function(e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						while (n = o[i++]) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, b.find.CLASS = d.getElementsByClassName && function(e, t) {
					if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
				}, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
					var t;
					a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
				}), ce(function(e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = C.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
				})), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
					d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
				}), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t)
						while (t = t.parentNode)
							if (t === e) return !0;
					return !1
				}, D = t ? function(e, t) {
					if (e === t) return l = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return l = !0, 0;
					var n, r = 0,
						i = e.parentNode,
						o = t.parentNode,
						a = [e],
						s = [t];
					if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
					if (i === o) return pe(e, t);
					n = e;
					while (n = n.parentNode) a.unshift(n);
					n = t;
					while (n = n.parentNode) s.unshift(n);
					while (a[r] === s[r]) r++;
					return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
				}), C
			}, se.matches = function(e, t) {
				return se(e, null, null, t)
			}, se.matchesSelector = function(e, t) {
				if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
					var n = c.call(e, t);
					if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {
					N(t, !0)
				}
				return 0 < se(t, C, null, [e]).length
			}, se.contains = function(e, t) {
				return (e.ownerDocument || e) != C && T(e), y(e, t)
			}, se.attr = function(e, t) {
				(e.ownerDocument || e) != C && T(e);
				var n = b.attrHandle[t.toLowerCase()],
					r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
				return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}, se.escape = function(e) {
				return (e + "").replace(re, ie)
			}, se.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, se.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
					while (t = e[i++]) t === e[i] && (r = n.push(i));
					while (r--) e.splice(n[r], 1)
				}
				return u = null, e
			}, o = se.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					while (t = e[r++]) n += o(t);
				return n
			}, (b = se.selectors = {
				cacheLength: 50,
				createPseudo: le,
				match: G,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(te, ne).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = m[e + " "];
						return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(n, r, i) {
						return function(e) {
							var t = se.attr(e, n);
							return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(h, e, t, g, v) {
						var y = "nth" !== h.slice(0, 3),
							m = "last" !== h.slice(-4),
							x = "of-type" === e;
						return 1 === g && 0 === v ? function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
								c = e.parentNode,
								f = x && e.nodeName.toLowerCase(),
								p = !n && !x,
								d = !1;
							if (c) {
								if (y) {
									while (l) {
										a = e;
										while (a = a[l])
											if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
										u = l = "only" === h && !u && "nextSibling"
									}
									return !0
								}
								if (u = [m ? c.firstChild : c.lastChild], m && p) {
									d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
									while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
										if (1 === a.nodeType && ++d && a === e) {
											i[h] = [k, s, d];
											break
										}
								} else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
									while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
										if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
								return (d -= v) === g || d % g == 0 && 0 <= d / g
							}
						}
					},
					PSEUDO: function(e, o) {
						var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
						return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
							var n, r = a(e, o),
								i = r.length;
							while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
						}) : function(e) {
							return a(e, 0, t)
						}) : a
					}
				},
				pseudos: {
					not: le(function(e) {
						var r = [],
							i = [],
							s = f(e.replace($, "$1"));
						return s[S] ? le(function(e, t, n, r) {
							var i, o = s(e, null, r, []),
								a = e.length;
							while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
						}) : function(e, t, n) {
							return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
						}
					}),
					has: le(function(t) {
						return function(e) {
							return 0 < se(t, e).length
						}
					}),
					contains: le(function(t) {
						return t = t.replace(te, ne),
							function(e) {
								return -1 < (e.textContent || o(e)).indexOf(t)
							}
					}),
					lang: le(function(n) {
						return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
							function(e) {
								var t;
								do {
									if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function(e) {
						return e === a
					},
					focus: function(e) {
						return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: ge(!1),
					disabled: ge(!0),
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !b.pseudos.empty(e)
					},
					header: function(e) {
						return J.test(e.nodeName)
					},
					input: function(e) {
						return Q.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: ve(function() {
						return [0]
					}),
					last: ve(function(e, t) {
						return [t - 1]
					}),
					eq: ve(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: ve(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: ve(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: ve(function(e, t, n) {
						for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
						return e
					}),
					gt: ve(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}).pseudos.nth = b.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) b.pseudos[e] = de(e);
		for (e in {
				submit: !0,
				reset: !0
			}) b.pseudos[e] = he(e);

		function me() {}

		function xe(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function be(s, e, t) {
			var u = e.dir,
				l = e.next,
				c = l || u,
				f = t && "parentNode" === c,
				p = r++;
			return e.first ? function(e, t, n) {
				while (e = e[u])
					if (1 === e.nodeType || f) return s(e, t, n);
				return !1
			} : function(e, t, n) {
				var r, i, o, a = [k, p];
				if (n) {
					while (e = e[u])
						if ((1 === e.nodeType || f) && s(e, t, n)) return !0
				} else
					while (e = e[u])
						if (1 === e.nodeType || f)
							if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
							else {
								if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
								if ((i[c] = a)[2] = s(e, t, n)) return !0
							} return !1
			}
		}

		function we(i) {
			return 1 < i.length ? function(e, t, n) {
				var r = i.length;
				while (r--)
					if (!i[r](e, t, n)) return !1;
				return !0
			} : i[0]
		}

		function Te(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
			return a
		}

		function Ce(d, h, g, v, y, e) {
			return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
				var i, o, a, s = [],
					u = [],
					l = t.length,
					c = e || function(e, t, n) {
						for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
						return n
					}(h || "*", n.nodeType ? [n] : n, []),
					f = !d || !e && h ? c : Te(c, s, d, n, r),
					p = g ? y || (e ? d : l || v) ? [] : t : f;
				if (g && g(f, p, n, r), v) {
					i = Te(p, u), v(i, [], n, r), o = i.length;
					while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
				}
				if (e) {
					if (y || d) {
						if (y) {
							i = [], o = p.length;
							while (o--)(a = p[o]) && i.push(f[o] = a);
							y(null, p = [], i, r)
						}
						o = p.length;
						while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
					}
				} else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
			})
		}

		function Ee(e) {
			for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
					return e === i
				}, a, !0), l = be(function(e) {
					return -1 < P(i, e)
				}, a, !0), c = [function(e, t, n) {
					var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
					return i = null, r
				}]; s < r; s++)
				if (t = b.relative[e[s].type]) c = [be(we(c), t)];
				else {
					if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
						for (n = ++s; n < r; n++)
							if (b.relative[e[n].type]) break;
						return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
					}
					c.push(t)
				} return we(c)
		}
		return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
			var n, r, i, o, a, s, u, l = x[e + " "];
			if (l) return t ? 0 : l.slice(0);
			a = e, s = [], u = b.preFilter;
			while (a) {
				for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace($, " ")
					}), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
					value: n,
					type: o,
					matches: r
				}), a = a.slice(n.length));
				if (!n) break
			}
			return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
		}, f = se.compile = function(e, t) {
			var n, v, y, m, x, r, i = [],
				o = [],
				a = A[e + " "];
			if (!a) {
				t || (t = h(e)), n = t.length;
				while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
				(a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
					var o, a, s, u = 0,
						l = "0",
						c = e && [],
						f = [],
						p = w,
						d = e || x && b.find.TAG("*", i),
						h = k += null == p ? 1 : Math.random() || .1,
						g = d.length;
					for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
						if (x && o) {
							a = 0, t || o.ownerDocument == C || (T(o), n = !E);
							while (s = v[a++])
								if (s(o, t || C, n)) {
									r.push(o);
									break
								} i && (k = h)
						}
						m && ((o = !s && o) && u--, e && c.push(o))
					}
					if (u += l, m && l !== u) {
						a = 0;
						while (s = y[a++]) s(c, f, t, n);
						if (e) {
							if (0 < u)
								while (l--) c[l] || f[l] || (f[l] = q.call(r));
							f = Te(f)
						}
						H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
					}
					return i && (k = h, w = p), c
				}, m ? le(r) : r))).selector = e
			}
			return a
		}, g = se.select = function(e, t, n, r) {
			var i, o, a, s, u, l = "function" == typeof e && e,
				c = !r && h(e = l.selector || e);
			if (n = n || [], 1 === c.length) {
				if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
					if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				i = G.needsContext.test(e) ? 0 : o.length;
				while (i--) {
					if (a = o[i], b.relative[s = a.type]) break;
					if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
						if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
						break
					}
				}
			}
			return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
		}, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
			return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
		}), ce(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || fe("type|href|height|width", function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), d.attributes && ce(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || fe("value", function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ce(function(e) {
			return null == e.getAttribute("disabled")
		}) || fe(R, function(e, t, n) {
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), se
	}(C);
	S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
	var h = function(e, t, n) {
			var r = [],
				i = void 0 !== n;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && S(e).is(n)) break;
					r.push(e)
				} return r
		},
		T = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		k = S.expr.match.needsContext;

	function A(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function D(e, n, r) {
		return m(n) ? S.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== r
		}) : n.nodeType ? S.grep(e, function(e) {
			return e === n !== r
		}) : "string" != typeof n ? S.grep(e, function(e) {
			return -1 < i.call(n, e) !== r
		}) : S.filter(n, e, r)
	}
	S.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, S.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
				for (t = 0; t < r; t++)
					if (S.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
			return 1 < r ? S.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(D(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(D(this, e || [], !0))
		},
		is: function(e) {
			return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
		}
	});
	var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(S.fn.init = function(e, t, n) {
		var r, i;
		if (!e) return this;
		if (n = n || j, "string" == typeof e) {
			if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (r[1]) {
				if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
					for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this
			}
			return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
	}).prototype = S.fn, j = S(E);
	var L = /^(?:parents|prev(?:Until|All))/,
		H = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function O(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	S.fn.extend({
		has: function(e) {
			var t = S(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (S.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && S(e);
			if (!k.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
							o.push(n);
							break
						} return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), S.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return h(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return h(e, "parentNode", n)
		},
		next: function(e) {
			return O(e, "nextSibling")
		},
		prev: function(e) {
			return O(e, "previousSibling")
		},
		nextAll: function(e) {
			return h(e, "nextSibling")
		},
		prevAll: function(e) {
			return h(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return h(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return h(e, "previousSibling", n)
		},
		siblings: function(e) {
			return T((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return T(e.firstChild)
		},
		contents: function(e) {
			return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
		}
	}, function(r, i) {
		S.fn[r] = function(e, t) {
			var n = S.map(this, i, e);
			return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
		}
	});
	var P = /[^\x20\t\r\n\f]+/g;

	function R(e) {
		return e
	}

	function M(e) {
		throw e
	}

	function I(e, t, n, r) {
		var i;
		try {
			e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	S.Callbacks = function(r) {
		var e, n;
		r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
			n[t] = !0
		}), n) : S.extend({}, r);
		var i, t, o, a, s = [],
			u = [],
			l = -1,
			c = function() {
				for (a = a || r.once, o = i = !0; u.length; l = -1) {
					t = u.shift();
					while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
				}
				r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
			},
			f = {
				add: function() {
					return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
						S.each(e, function(e, t) {
							m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
						})
					}(arguments), t && !i && c()), this
				},
				remove: function() {
					return S.each(arguments, function(e, t) {
						var n;
						while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
					}), this
				},
				has: function(e) {
					return e ? -1 < S.inArray(e, s) : 0 < s.length
				},
				empty: function() {
					return s && (s = []), this
				},
				disable: function() {
					return a = u = [], s = t = "", this
				},
				disabled: function() {
					return !s
				},
				lock: function() {
					return a = u = [], t || i || (s = t = ""), this
				},
				locked: function() {
					return !!a
				},
				fireWith: function(e, t) {
					return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return f
	}, S.extend({
		Deferred: function(e) {
			var o = [
					["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
					["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
				],
				i = "pending",
				a = {
					state: function() {
						return i
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					"catch": function(e) {
						return a.then(null, e)
					},
					pipe: function() {
						var i = arguments;
						return S.Deferred(function(r) {
							S.each(o, function(e, t) {
								var n = m(i[t[4]]) && i[t[4]];
								s[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), i = null
						}).promise()
					},
					then: function(t, n, r) {
						var u = 0;

						function l(i, o, a, s) {
							return function() {
								var n = this,
									r = arguments,
									e = function() {
										var e, t;
										if (!(i < u)) {
											if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
											t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
										}
									},
									t = s ? e : function() {
										try {
											e()
										} catch (e) {
											S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
										}
									};
								i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
							}
						}
						return S.Deferred(function(e) {
							o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
						}).promise()
					},
					promise: function(e) {
						return null != e ? S.extend(e, a) : a
					}
				},
				s = {};
			return S.each(o, function(e, t) {
				var n = t[2],
					r = t[5];
				a[t[1]] = n.add, r && n.add(function() {
					i = r
				}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
					return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[t[0] + "With"] = n.fireWith
			}), a.promise(s), e && e.call(s, s), s
		},
		when: function(e) {
			var n = arguments.length,
				t = n,
				r = Array(t),
				i = s.call(arguments),
				o = S.Deferred(),
				a = function(t) {
					return function(e) {
						r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
					}
				};
			if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
			while (t--) I(i[t], a(t), o.reject);
			return o.promise()
		}
	});
	var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	S.Deferred.exceptionHook = function(e, t) {
		C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, S.readyException = function(e) {
		C.setTimeout(function() {
			throw e
		})
	};
	var F = S.Deferred();

	function B() {
		E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
	}
	S.fn.ready = function(e) {
		return F.then(e)["catch"](function(e) {
			S.readyException(e)
		}), this
	}, S.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
		}
	}), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
	var $ = function(e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === w(n))
				for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
			else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
					return l.call(S(e), n)
				})), t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		_ = /^-ms-/,
		z = /-([a-z])/g;

	function U(e, t) {
		return t.toUpperCase()
	}

	function X(e) {
		return e.replace(_, "ms-").replace(z, U)
	}
	var V = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function G() {
		this.expando = S.expando + G.uid++
	}
	G.uid = 1, G.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[X(t)] = n;
			else
				for (r in t) i[X(r)] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
					while (n--) delete r[t[n]]
				}(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !S.isEmptyObject(t)
		}
	};
	var Y = new G,
		Q = new G,
		J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		K = /[A-Z]/g;

	function Z(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
				try {
					n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
				} catch (e) {}
				Q.set(e, t, n)
			} else n = void 0;
		return n
	}
	S.extend({
		hasData: function(e) {
			return Q.hasData(e) || Y.hasData(e)
		},
		data: function(e, t, n) {
			return Q.access(e, t, n)
		},
		removeData: function(e, t) {
			Q.remove(e, t)
		},
		_data: function(e, t, n) {
			return Y.access(e, t, n)
		},
		_removeData: function(e, t) {
			Y.remove(e, t)
		}
	}), S.fn.extend({
		data: function(n, e) {
			var t, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === n) {
				if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
					t = a.length;
					while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
					Y.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof n ? this.each(function() {
				Q.set(this, n)
			}) : $(this, function(e) {
				var t;
				if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
				this.each(function() {
					Q.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				Q.remove(this, e)
			})
		}
	}), S.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = S.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = S._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
				S.dequeue(e, t)
			}, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Y.get(e, n) || Y.access(e, n, {
				empty: S.Callbacks("once memory").add(function() {
					Y.remove(e, [t + "queue", n])
				})
			})
		}
	}), S.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
				var e = S.queue(this, t, n);
				S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				S.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = S.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			"string" != typeof e && (t = e, e = void 0), e = e || "fx";
			while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
		ne = ["Top", "Right", "Bottom", "Left"],
		re = E.documentElement,
		ie = function(e) {
			return S.contains(e.ownerDocument, e)
		},
		oe = {
			composed: !0
		};
	re.getRootNode && (ie = function(e) {
		return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
	});
	var ae = function(e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
	};

	function se(e, t, n, r) {
		var i, o, a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return S.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
		if (c && c[3] !== l) {
			u /= 2, l = l || c[3], c = +u || 1;
			while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c *= 2, S.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}
	var ue = {};

	function le(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
		return e
	}
	S.fn.extend({
		show: function() {
			return le(this, !0)
		},
		hide: function() {
			return le(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				ae(this) ? S(this).show() : S(this).hide()
			})
		}
	});
	var ce, fe, pe = /^(?:checkbox|radio)$/i,
		de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		he = /^$|^module$|\/(?:java|ecma)script/i;
	ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
	var ge = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};

	function ve(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
	}

	function ye(e, t) {
		for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
	}
	ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
	var me = /<|&#?\w+;/;

	function xe(e, t, n, r, i) {
		for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
			if ((o = e[d]) || 0 === o)
				if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
				else if (me.test(o)) {
			a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
			while (c--) a = a.lastChild;
			S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
		} else p.push(t.createTextNode(o));
		f.textContent = "", d = 0;
		while (o = p[d++])
			if (r && -1 < S.inArray(o, r)) i && i.push(o);
			else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
			c = 0;
			while (o = a[c++]) he.test(o.type || "") && n.push(o)
		}
		return f
	}
	var be = /^key/,
		we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Te = /^([^.]*)(?:\.(.+)|)/;

	function Ce() {
		return !0
	}

	function Ee() {
		return !1
	}

	function Se(e, t) {
		return e === function() {
			try {
				return E.activeElement
			} catch (e) {}
		}() == ("focus" === t)
	}

	function ke(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
		else if (!i) return e;
		return 1 === o && (a = i, (i = function(e) {
			return S().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
			S.event.add(this, t, i, r, n)
		})
	}

	function Ae(e, i, o) {
		o ? (Y.set(e, i, !1), S.event.add(e, i, {
			namespace: !1,
			handler: function(e) {
				var t, n, r = Y.get(this, i);
				if (1 & e.isTrigger && this[i]) {
					if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
					else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
				} else r.length && (Y.set(this, i, {
					value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
				}), e.stopImmediatePropagation())
			}
		})) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
	}
	S.event = {
		global: {},
		add: function(t, e, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
			if (V(t)) {
				n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
					return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
				}), l = (e = (e || "").match(P) || [""]).length;
				while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
					type: d,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && S.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
			if (v && (u = v.events)) {
				l = (t = (t || "").match(P) || [""]).length;
				while (l--)
					if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
						f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
						while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
					} else
						for (d in u) S.event.remove(e, d + t[l], n, r, !0);
				S.isEmptyObject(u) && Y.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, r, i, o, a, s = new Array(arguments.length),
				u = S.event.fix(e),
				l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
				c = S.event.special[u.type] || {};
			for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
				a = S.event.handlers.call(this, u, l), t = 0;
				while ((i = a[t++]) && !u.isPropagationStopped()) {
					u.currentTarget = i.elem, n = 0;
					while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, u), u.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
						for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
						o.length && s.push({
							elem: l,
							handlers: o
						})
					} return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function(t, e) {
			Object.defineProperty(S.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: m(e) ? function() {
					if (this.originalEvent) return e(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function(e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(e) {
			return e[S.expando] ? e : new S.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
				},
				trigger: function(e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
				},
				_default: function(e) {
					var t = e.target;
					return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, S.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, S.Event = function(e, t) {
		if (!(this instanceof S.Event)) return new S.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
	}, S.Event.prototype = {
		constructor: S.Event,
		isDefaultPrevented: Ee,
		isPropagationStopped: Ee,
		isImmediatePropagationStopped: Ee,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, S.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(e) {
			var t = e.button;
			return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, S.event.addProp), S.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		S.event.special[e] = {
			setup: function() {
				return Ae(this, e, Se), !1
			},
			trigger: function() {
				return Ae(this, e), !0
			},
			delegateType: t
		}
	}), S.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, i) {
		S.event.special[e] = {
			delegateType: i,
			bindType: i,
			handle: function(e) {
				var t, n = e.relatedTarget,
					r = e.handleObj;
				return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
			}
		}
	}), S.fn.extend({
		on: function(e, t, n, r) {
			return ke(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return ke(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
				S.event.remove(this, e, n, t)
			})
		}
	});
	var Ne = /<script|<style|<link/i,
		De = /checked\s*(?:[^=]|=\s*.checked.)/i,
		je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function qe(e, t) {
		return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
	}

	function Le(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function He(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Oe(e, t) {
		var n, r, i, o, a, s;
		if (1 === t.nodeType) {
			if (Y.hasData(e) && (s = Y.get(e).events))
				for (i in Y.remove(t, "handle events"), s)
					for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
			Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
		}
	}

	function Pe(n, r, i, o) {
		r = g(r);
		var e, t, a, s, u, l, c = 0,
			f = n.length,
			p = f - 1,
			d = r[0],
			h = m(d);
		if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) {
			var t = n.eq(e);
			h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
		});
		if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
			if (s)
				for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
					nonce: u.nonce || u.getAttribute("nonce")
				}, l) : b(u.textContent.replace(je, ""), u, l))
		}
		return n
	}

	function Re(e, t, n) {
		for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
		return e
	}
	S.extend({
		htmlPrefilter: function(e) {
			return e
		},
		clone: function(e, t, n) {
			var r, i, o, a, s, u, l, c = e.cloneNode(!0),
				f = ie(e);
			if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
				for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
				else Oe(e, c);
			return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
		},
		cleanData: function(e) {
			for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (V(n)) {
					if (t = n[Y.expando]) {
						if (t.events)
							for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
						n[Y.expando] = void 0
					}
					n[Q.expando] && (n[Q.expando] = void 0)
				}
		}
	}), S.fn.extend({
		detach: function(e) {
			return Re(this, e, !0)
		},
		remove: function(e) {
			return Re(this, e)
		},
		text: function(e) {
			return $(this, function(e) {
				return void 0 === e ? S.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return Pe(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return Pe(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = qe(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return Pe(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return Pe(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return S.clone(this, e, t)
			})
		},
		html: function(e) {
			return $(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = S.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return Pe(this, arguments, function(e) {
				var t = this.parentNode;
				S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), S.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, a) {
		S.fn[e] = function(e) {
			for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
		Ie = function(e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = C), t.getComputedStyle(e)
		},
		We = function(e, t, n) {
			var r, i, o = {};
			for (i in t) o[i] = e.style[i], e.style[i] = t[i];
			for (i in r = n.call(e), t) e.style[i] = o[i];
			return r
		},
		Fe = new RegExp(ne.join("|"), "i");

	function Be(e, t, n) {
		var r, i, o, a, s = e.style;
		return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function $e(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		function e() {
			if (l) {
				u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
				var e = C.getComputedStyle(l);
				n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
			}
		}

		function t(e) {
			return Math.round(parseFloat(e))
		}
		var n, r, i, o, a, s, u = E.createElement("div"),
			l = E.createElement("div");
		l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
			boxSizingReliable: function() {
				return e(), r
			},
			pixelBoxStyles: function() {
				return e(), o
			},
			pixelPosition: function() {
				return e(), n
			},
			reliableMarginLeft: function() {
				return e(), s
			},
			scrollboxSize: function() {
				return e(), i
			},
			reliableTrDimensions: function() {
				var e, t, n, r;
				return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
			}
		}))
	}();
	var _e = ["Webkit", "Moz", "ms"],
		ze = E.createElement("div").style,
		Ue = {};

	function Xe(e) {
		var t = S.cssProps[e] || Ue[e];
		return t || (e in ze ? e : Ue[e] = function(e) {
			var t = e[0].toUpperCase() + e.slice(1),
				n = _e.length;
			while (n--)
				if ((e = _e[n] + t) in ze) return e
		}(e) || e)
	}
	var Ve = /^(none|table(?!-c[ea]).+)/,
		Ge = /^--/,
		Ye = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Qe = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function Je(e, t, n) {
		var r = te.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function Ke(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
		return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
	}

	function Ze(e, t, n) {
		var r = Ie(e),
			i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
			o = i,
			a = Be(e, t, r),
			s = "offset" + t[0].toUpperCase() + t.slice(1);
		if (Me.test(a)) {
			if (!n) return a;
			a = "auto"
		}
		return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
	}

	function et(e, t, n, r, i) {
		return new et.prototype.init(e, t, n, r, i)
	}
	S.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Be(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = X(t),
					u = Ge.test(t),
					l = e.style;
				if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
				"string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
			}
		},
		css: function(e, t, n, r) {
			var i, o, a, s = X(t);
			return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), S.each(["height", "width"], function(e, u) {
		S.cssHooks[u] = {
			get: function(e, t, n) {
				if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
					return Ze(e, u, n)
				})
			},
			set: function(e, t, n) {
				var r, i = Ie(e),
					o = !y.scrollboxSize() && "absolute" === i.position,
					a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
					s = n ? Ke(e, u, n, a, i) : 0;
				return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
			}
		}
	}), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), S.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(i, o) {
		S.cssHooks[i + o] = {
			expand: function(e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
				return n
			}
		}, "margin" !== i && (S.cssHooks[i + o].set = Je)
	}), S.fn.extend({
		css: function(e, t) {
			return $(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (Array.isArray(t)) {
					for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((S.Tween = et).prototype = {
		constructor: et,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = et.propHooks[this.prop];
			return e && e.get ? e.get(this) : et.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = et.propHooks[this.prop];
			return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
		}
	}).init.prototype = et.prototype, (et.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(e) {
				S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = et.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, S.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, S.fx = et.prototype.init, S.fx.step = {};
	var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
		at = /queueHooks$/;

	function st() {
		nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
	}

	function ut() {
		return C.setTimeout(function() {
			tt = void 0
		}), tt = Date.now()
	}

	function lt(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function ct(e, t, n) {
		for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function ft(o, e, t) {
		var n, a, r = 0,
			i = ft.prefilters.length,
			s = S.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (a) return !1;
				for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
				return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
			},
			l = s.promise({
				elem: o,
				props: S.extend({}, e),
				opts: S.extend(!0, {
					specialEasing: {},
					easing: S.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: tt || ut(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
					return l.tweens.push(n), n
				},
				stop: function(e) {
					var t = 0,
						n = e ? l.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) l.tweens[t].run(1);
					return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
				}
			}),
			c = l.props;
		for (! function(e, t) {
				var n, r, i, o, a;
				for (n in e)
					if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
						for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
					else t[r] = i
			}(c, l.opts.specialEasing); r < i; r++)
			if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
		return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
			elem: o,
			anim: l,
			queue: l.opts.queue
		})), l
	}
	S.Animation = S.extend(ft, {
		tweeners: {
			"*": [function(e, t) {
				var n = this.createTween(e, t);
				return se(n.elem, e, te.exec(t), n), n
			}]
		},
		tweener: function(e, t) {
			m(e) ? (t = e, e = ["*"]) : e = e.match(P);
			for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
		},
		prefilters: [function(e, t, n) {
			var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
				p = this,
				d = {},
				h = e.style,
				g = e.nodeType && ae(e),
				v = Y.get(e, "fxshow");
			for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
					a.unqueued || s()
				}), a.unqueued++, p.always(function() {
					p.always(function() {
						a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
					})
				})), t)
				if (i = t[r], ot.test(i)) {
					if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
						if ("show" !== i || !v || void 0 === v[r]) continue;
						g = !0
					}
					d[r] = v && v[r] || S.style(e, r)
				} if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
				for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
						h.display = l
					}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
						h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
					})), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
					display: l
				}), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
					for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
				})), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
		}],
		prefilter: function(e, t) {
			t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
		}
	}), S.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? S.extend({}, e) : {
			complete: n || !n && t || m(e) && e,
			duration: e,
			easing: n && t || t && !m(t) && t
		};
		return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
		}, r
	}, S.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(ae).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(t, e, n, r) {
			var i = S.isEmptyObject(t),
				o = S.speed(e, n, r),
				a = function() {
					var e = ft(this, S.extend({}, t), o);
					(i || Y.get(this, "finish")) && e.stop(!0)
				};
			return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(i, e, o) {
			var a = function(e) {
				var t = e.stop;
				delete e.stop, t(o)
			};
			return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
				var e = !0,
					t = null != i && i + "queueHooks",
					n = S.timers,
					r = Y.get(this);
				if (t) r[t] && r[t].stop && a(r[t]);
				else
					for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
				!e && o || S.dequeue(this, i)
			})
		},
		finish: function(a) {
			return !1 !== a && (a = a || "fx"), this.each(function() {
				var e, t = Y.get(this),
					n = t[a + "queue"],
					r = t[a + "queueHooks"],
					i = S.timers,
					o = n ? n.length : 0;
				for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
				for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), S.each(["toggle", "show", "hide"], function(e, r) {
		var i = S.fn[r];
		S.fn[r] = function(e, t, n) {
			return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
		}
	}), S.each({
		slideDown: lt("show"),
		slideUp: lt("hide"),
		slideToggle: lt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, r) {
		S.fn[e] = function(e, t, n) {
			return this.animate(r, e, t, n)
		}
	}), S.timers = [], S.fx.tick = function() {
		var e, t = 0,
			n = S.timers;
		for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || S.fx.stop(), tt = void 0
	}, S.fx.timer = function(e) {
		S.timers.push(e), S.fx.start()
	}, S.fx.interval = 13, S.fx.start = function() {
		nt || (nt = !0, st())
	}, S.fx.stop = function() {
		nt = null
	}, S.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, S.fn.delay = function(r, e) {
		return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
			var n = C.setTimeout(e, r);
			t.stop = function() {
				C.clearTimeout(n)
			}
		})
	}, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
	var pt, dt = S.expr.attrHandle;
	S.fn.extend({
		attr: function(e, t) {
			return $(this, S.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				S.removeAttr(this, e)
			})
		}
	}), S.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!y.radioValue && "radio" === t && A(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				i = t && t.match(P);
			if (i && 1 === e.nodeType)
				while (n = i[r++]) e.removeAttribute(n)
		}
	}), pt = {
		set: function(e, t, n) {
			return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var a = dt[t] || S.find.attr;
		dt[t] = function(e, t, n) {
			var r, i, o = t.toLowerCase();
			return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
		}
	});
	var ht = /^(?:input|select|textarea|button)$/i,
		gt = /^(?:a|area)$/i;

	function vt(e) {
		return (e.match(P) || []).join(" ")
	}

	function yt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function mt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
	}
	S.fn.extend({
		prop: function(e, t) {
			return $(this, S.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[S.propFix[e] || e]
			})
		}
	}), S.extend({
		prop: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = S.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), y.optSelected || (S.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		S.propFix[this.toLowerCase()] = this
	}), S.fn.extend({
		addClass: function(t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function(e) {
				S(this).addClass(t.call(this, e, yt(this)))
			});
			if ((e = mt(t)).length)
				while (n = this[u++])
					if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
						a = 0;
						while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						i !== (s = vt(r)) && n.setAttribute("class", s)
					} return this
		},
		removeClass: function(t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function(e) {
				S(this).removeClass(t.call(this, e, yt(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((e = mt(t)).length)
				while (n = this[u++])
					if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
						a = 0;
						while (o = e[a++])
							while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
						i !== (s = vt(r)) && n.setAttribute("class", s)
					} return this
		},
		toggleClass: function(i, t) {
			var o = typeof i,
				a = "string" === o || Array.isArray(i);
			return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
				S(this).toggleClass(i.call(this, e, yt(this), t), t)
			}) : this.each(function() {
				var e, t, n, r;
				if (a) {
					t = 0, n = S(this), r = mt(i);
					while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
				} else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n, r = 0;
			t = " " + e + " ";
			while (n = this[r++])
				if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var xt = /\r/g;
	S.fn.extend({
		val: function(n) {
			var r, e, i, t = this[0];
			return arguments.length ? (i = m(n), this.each(function(e) {
				var t;
				1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
					return null == e ? "" : e + ""
				})), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
			})) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
		}
	}), S.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = S.find.attr(e, "value");
					return null != t ? t : vt(S.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r, i = e.options,
						o = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						u = a ? o + 1 : i.length;
					for (r = o < 0 ? u : a ? o : 0; r < u; r++)
						if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
							if (t = S(n).val(), a) return t;
							s.push(t)
						} return s
				},
				set: function(e, t) {
					var n, r, i = e.options,
						o = S.makeArray(t),
						a = i.length;
					while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), S.each(["radio", "checkbox"], function() {
		S.valHooks[this] = {
			set: function(e, t) {
				if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
			}
		}, y.checkOn || (S.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), y.focusin = "onfocusin" in C;
	var bt = /^(?:focusinfocus|focusoutblur)$/,
		wt = function(e) {
			e.stopPropagation()
		};
	S.extend(S.event, {
		trigger: function(e, t, n, r) {
			var i, o, a, s, u, l, c, f, p = [n || E],
				d = v.call(e, "type") ? e.type : e,
				h = v.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
				if (!r && !c.noBubble && !x(n)) {
					for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
					a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
				}
				i = 0;
				while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
			}
		},
		simulate: function(e, t, n) {
			var r = S.extend(new S.Event, n, {
				type: e,
				isSimulated: !0
			});
			S.event.trigger(r, null, t)
		}
	}), S.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				S.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return S.event.trigger(e, t, n, !0)
		}
	}), y.focusin || S.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, r) {
		var i = function(e) {
			S.event.simulate(r, e.target, S.event.fix(e))
		};
		S.event.special[r] = {
			setup: function() {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, r);
				t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, r) - 1;
				t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
			}
		}
	});
	var Tt = C.location,
		Ct = {
			guid: Date.now()
		},
		Et = /\?/;
	S.parseXML = function(e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new C.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
	};
	var St = /\[\]$/,
		kt = /\r?\n/g,
		At = /^(?:submit|button|image|reset|file)$/i,
		Nt = /^(?:input|select|textarea|keygen)/i;

	function Dt(n, e, r, i) {
		var t;
		if (Array.isArray(e)) S.each(e, function(e, t) {
			r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
		});
		else if (r || "object" !== w(e)) i(n, e);
		else
			for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
	}
	S.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				var n = m(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (null == e) return "";
		if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) Dt(n, e[n], t, i);
		return r.join("&")
	}, S.fn.extend({
		serialize: function() {
			return S.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = S.prop(this, "elements");
				return e ? S.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
			}).map(function(e, t) {
				var n = S(this).val();
				return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(kt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(kt, "\r\n")
				}
			}).get()
		}
	});
	var jt = /%20/g,
		qt = /#.*$/,
		Lt = /([?&])_=[^&]*/,
		Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ot = /^(?:GET|HEAD)$/,
		Pt = /^\/\//,
		Rt = {},
		Mt = {},
		It = "*/".concat("*"),
		Wt = E.createElement("a");

	function Ft(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0,
				i = e.toLowerCase().match(P) || [];
			if (m(t))
				while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
		}
	}

	function Bt(t, i, o, a) {
		var s = {},
			u = t === Mt;

		function l(e) {
			var r;
			return s[e] = !0, S.each(t[e] || [], function(e, t) {
				var n = t(i, o, a);
				return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
			}), r
		}
		return l(i.dataTypes[0]) || !s["*"] && l("*")
	}

	function $t(e, t) {
		var n, r, i = S.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && S.extend(!0, e, r), e
	}
	Wt.href = Tt.href, S.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Tt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": It,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": S.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
		},
		ajaxPrefilter: Ft(Rt),
		ajaxTransport: Ft(Mt),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
				y = v.context || v,
				m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
				x = S.Deferred(),
				b = S.Callbacks("once memory"),
				w = v.statusCode || {},
				a = {},
				s = {},
				u = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (h) {
							if (!n) {
								n = {};
								while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
							}
							t = n[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return h ? p : null
					},
					setRequestHeader: function(e, t) {
						return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == h && (v.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (h) T.always(e[T.status]);
							else
								for (t in e) w[t] = [w[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || u;
						return c && c.abort(t), l(0, t), this
					}
				};
			if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
				r = E.createElement("a");
				try {
					r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
				} catch (e) {
					v.crossDomain = !0
				}
			}
			if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
			for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
			if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
			if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
				if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
				v.async && 0 < v.timeout && (d = C.setTimeout(function() {
					T.abort("timeout")
				}, v.timeout));
				try {
					h = !1, c.send(a, l)
				} catch (e) {
					if (h) throw e;
					l(-1, e)
				}
			} else l(-1, "No Transport");

			function l(e, t, n, r) {
				var i, o, a, s, u, l = t;
				h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
					var r, i, o, a, s = e.contents,
						u = e.dataTypes;
					while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
					if (r)
						for (i in s)
							if (s[i] && s[i].test(r)) {
								u.unshift(i);
								break
							} if (u[0] in n) o = u[0];
					else {
						for (i in n) {
							if (!u[0] || e.converters[i + " " + u[0]]) {
								o = i;
								break
							}
							a || (a = i)
						}
						o = o || a
					}
					if (o) return o !== u[0] && u.unshift(o), n[o]
				}(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
					var i, o, a, s, u, l = {},
						c = e.dataTypes.slice();
					if (c[1])
						for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
					o = c.shift();
					while (o)
						if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
							if ("*" === o) o = u;
							else if ("*" !== u && u !== o) {
						if (!(a = l[u + " " + o] || l["* " + o]))
							for (i in l)
								if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
									!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
									break
								} if (!0 !== a)
							if (a && e["throws"]) t = a(t);
							else try {
								t = a(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: a ? e : "No conversion from " + u + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
			}
			return T
		},
		getJSON: function(e, t, n) {
			return S.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return S.get(e, void 0, t, "script")
		}
	}), S.each(["get", "post"], function(e, i) {
		S[i] = function(e, t, n, r) {
			return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			}, S.isPlainObject(e) && e))
		}
	}), S.ajaxPrefilter(function(e) {
		var t;
		for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	}), S._evalUrl = function(e, t, n) {
		return S.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				S.globalEval(e, t, n)
			}
		})
	}, S.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				var e = this;
				while (e.firstElementChild) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(n) {
			return m(n) ? this.each(function(e) {
				S(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = S(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = m(t);
			return this.each(function(e) {
				S(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				S(this).replaceWith(this.childNodes)
			}), this
		}
	}), S.expr.pseudos.hidden = function(e) {
		return !S.expr.pseudos.visible(e)
	}, S.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, S.ajaxSettings.xhr = function() {
		try {
			return new C.XMLHttpRequest
		} catch (e) {}
	};
	var _t = {
			0: 200,
			1223: 204
		},
		zt = S.ajaxSettings.xhr();
	y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) {
		var o, a;
		if (y.cors || zt && !i.crossDomain) return {
			send: function(e, t) {
				var n, r = i.xhr();
				if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
					for (n in i.xhrFields) r[n] = i.xhrFields[n];
				for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
				o = function(e) {
					return function() {
						o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
							binary: r.response
						} : {
							text: r.responseText
						}, r.getAllResponseHeaders()))
					}
				}, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
					4 === r.readyState && C.setTimeout(function() {
						o && a()
					})
				}, o = o("abort");
				try {
					r.send(i.hasContent && i.data || null)
				} catch (e) {
					if (o) throw e
				}
			},
			abort: function() {
				o && o()
			}
		}
	}), S.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), S.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return S.globalEval(e), e
			}
		}
	}), S.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), S.ajaxTransport("script", function(n) {
		var r, i;
		if (n.crossDomain || n.scriptAttrs) return {
			send: function(e, t) {
				r = S("<script>").attr(n.scriptAttrs || {}).prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", i = function(e) {
					r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), E.head.appendChild(r[0])
			},
			abort: function() {
				i && i()
			}
		}
	});
	var Ut, Xt = [],
		Vt = /(=)\?(?=&|$)|\?\?/;
	S.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Xt.pop() || S.expando + "_" + Ct.guid++;
			return this[e] = !0, e
		}
	}), S.ajaxPrefilter("json jsonp", function(e, t, n) {
		var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
			return o || S.error(r + " was not called"), o[0]
		}, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
			o = arguments
		}, n.always(function() {
			void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
		}), "script"
	}), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
		var r, i, o
	}, S.fn.load = function(e, t, n) {
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, S.expr.pseudos.animated = function(t) {
		return S.grep(S.timers, function(e) {
			return t === e.elem
		}).length
	}, S.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, u, l = S.css(e, "position"),
				c = S(e),
				f = {};
			"static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
		}
	}, S.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				S.offset.setOffset(this, t, e)
			});
			var e, n, r = this[0];
			return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: e.top + n.pageYOffset,
				left: e.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
				else {
					t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
					while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - S.css(r, "marginTop", !0),
					left: t.left - i.left - S.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent;
				while (e && "static" === S.css(e, "position")) e = e.offsetParent;
				return e || re
			})
		}
	}), S.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, i) {
		var o = "pageYOffset" === i;
		S.fn[t] = function(e) {
			return $(this, function(e, t, n) {
				var r;
				if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
				r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
			}, t, e, arguments.length)
		}
	}), S.each(["top", "left"], function(e, n) {
		S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
			if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
		})
	}), S.each({
		Height: "height",
		Width: "width"
	}, function(a, s) {
		S.each({
			padding: "inner" + a,
			content: s,
			"": "outer" + a
		}, function(r, o) {
			S.fn[o] = function(e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
					i = r || (!0 === e || !0 === t ? "margin" : "border");
				return $(this, function(e, t, n) {
					var r;
					return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
				}, s, n ? e : void 0, n)
			}
		})
	}), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		S.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), S.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
		S.fn[n] = function(e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	});
	var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	S.proxy = function(e, t) {
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
			return e.apply(t || this, r.concat(s.call(arguments)))
		}).guid = e.guid = e.guid || S.guid++, i
	}, S.holdReady = function(e) {
		e ? S.readyWait++ : S.ready(!0)
	}, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
		var t = S.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, S.trim = function(e) {
		return null == e ? "" : (e + "").replace(Gt, "")
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return S
	});
	var Yt = C.jQuery,
		Qt = C.$;
	return S.noConflict = function(e) {
		return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
	}, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
/*! jQuery Migrate v3.3.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
	function(t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], function(e) {
			return t(e, window)
		}) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
	}(function(s, n) {
		"use strict";

		function e(e) {
			return 0 <= function(e, t) {
				var r, n = /^(\d+)\.(\d+)\.(\d+)/,
					i = n.exec(e) || [],
					o = n.exec(t) || [];
				for (r = 1; r <= 3; r++) {
					if (+i[r] > +o[r]) return 1;
					if (+i[r] < +o[r]) return -1
				}
				return 0
			}(s.fn.jquery, e)
		}
		s.migrateVersion = "3.3.0", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
		var r = {};

		function u(e) {
			var t = n.console;
			s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
		}

		function t(e, t, r, n) {
			Object.defineProperty(e, t, {
				configurable: !0,
				enumerable: !0,
				get: function() {
					return u(n), r
				},
				set: function(e) {
					u(n), r = e
				}
			})
		}

		function i(e, t, r, n) {
			e[t] = function() {
				return u(n), r.apply(this, arguments)
			}
		}
		s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
			r = {}, s.migrateWarnings.length = 0
		}, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
		var o, a = {},
			c = s.fn.init,
			d = s.find,
			l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
			p = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
			f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		for (o in s.fn.init = function(e) {
				var t = Array.prototype.slice.call(arguments);
				return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), c.apply(this, t)
			}, s.fn.init.prototype = s.fn, s.find = function(t) {
				var r = Array.prototype.slice.call(arguments);
				if ("string" == typeof t && l.test(t)) try {
					n.document.querySelector(t)
				} catch (e) {
					t = t.replace(p, function(e, t, r, n) {
						return "[" + t + r + '"' + n + '"]'
					});
					try {
						n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
					} catch (e) {
						u("Attribute selector with '#' was not fixed: " + r[0])
					}
				}
				return d.apply(this, r)
			}, d) Object.prototype.hasOwnProperty.call(d, o) && (s.find[o] = d[o]);
		if (i(s.fn, "size", function() {
				return this.length
			}, "jQuery.fn.size() is deprecated and removed; use the .length property"), i(s, "parseJSON", function() {
				return JSON.parse.apply(null, arguments)
			}, "jQuery.parseJSON is deprecated; use JSON.parse"), i(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), i(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && i(s, "trim", function(e) {
				return null == e ? "" : (e + "").replace(f, "")
			}, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && i(s, "nodeName", function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			}, "jQuery.nodeName is deprecated"), e("3.3.0") && (i(s, "isNumeric", function(e) {
				var t = typeof e;
				return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
			}, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
				a["[object " + t + "]"] = t.toLowerCase()
			}), i(s, "type", function(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[Object.prototype.toString.call(e)] || "object" : typeof e
			}, "jQuery.type is deprecated"), i(s, "isFunction", function(e) {
				return "function" == typeof e
			}, "jQuery.isFunction() is deprecated"), i(s, "isWindow", function(e) {
				return null != e && e === e.window
			}, "jQuery.isWindow() is deprecated"), i(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), s.ajax) {
			var y = s.ajax;
			s.ajax = function() {
				var e = y.apply(this, arguments);
				return e.promise && (i(e, "success", e.done, "jQXHR.success is deprecated and removed"), i(e, "error", e.fail, "jQXHR.error is deprecated and removed"), i(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
			}
		}
		var m = s.fn.removeAttr,
			g = s.fn.toggleClass,
			h = /\S+/g;

		function v(e) {
			return e.replace(/-([a-z])/g, function(e, t) {
				return t.toUpperCase()
			})
		}
		s.fn.removeAttr = function(e) {
			var r = this;
			return s.each(e.match(h), function(e, t) {
				s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
			}), m.apply(this, arguments)
		};
		var j, Q = !(s.fn.toggleClass = function(t) {
				return void 0 !== t && "boolean" != typeof t ? g.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
					var e = this.getAttribute && this.getAttribute("class") || "";
					e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : s.data(this, "__className__") || "")
				}))
			}),
			b = /^[a-z]/,
			w = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
		s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
			var r = s.cssHooks[t] && s.cssHooks[t].get;
			r && (s.cssHooks[t].get = function() {
				var e;
				return Q = !0, e = r.apply(this, arguments), Q = !1, e
			})
		}), s.swap = function(e, t, r, n) {
			var i, o, a = {};
			for (o in Q || u("jQuery.swap() is undocumented and deprecated"), t) a[o] = e.style[o], e.style[o] = t[o];
			for (o in i = r.apply(e, n || []), t) e.style[o] = a[o];
			return i
		}, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
			set: function() {
				return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
			}
		})), s.cssNumber || (s.cssNumber = {}), j = s.fn.css, s.fn.css = function(e, t) {
			var r = this;
			return "string" != typeof e && s.each(e, function(e, t) {
				s.fn.css.call(r, e, t)
			}), "number" != typeof t || function(e) {
				return b.test(e) && w.test(e[0].toUpperCase() + e.slice(1))
			}(v(e)) || u("Use of number-typed values is deprecated in jQuery.fn.css"), j.apply(this, arguments)
		};
		var x = s.data;
		if (s.data = function(e, t, r) {
				var n, i, o;
				if (t && "object" == typeof t && 2 === arguments.length) {
					for (o in n = s.hasData(e) && x.call(this, e), i = {}, t) o !== v(o) ? (u("jQuery.data() always sets/gets camelCased names: " + o), n[o] = t[o]) : i[o] = t[o];
					return x.call(this, e, i), t
				}
				return t && "string" == typeof t && t !== v(t) && (n = s.hasData(e) && x.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : x.apply(this, arguments)
			}, s.fx) {
			var A, k, M = s.Tween.prototype.run,
				S = function(e) {
					return e
				};
			s.Tween.prototype.run = function() {
				1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = S), M.apply(this, arguments)
			}, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
				configurable: !0,
				enumerable: !0,
				get: function() {
					return n.document.hidden || u(k), A
				},
				set: function(e) {
					u(k), A = e
				}
			})
		}
		var H = s.fn.load,
			R = s.event.add,
			N = s.event.fix;
		s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function(e) {
			var t, r = e.type,
				n = this.fixHooks[r],
				i = s.event.props;
			if (i.length) {
				u("jQuery.event.props are deprecated and removed: " + i.join());
				while (i.length) s.event.addProp(i.pop())
			}
			if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (i = n.props) && i.length))
				while (i.length) s.event.addProp(i.pop());
			return t = N.call(this, e), n && n.filter ? n.filter(t, e) : t
		}, s.event.add = function(e, t) {
			return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), R.apply(this, arguments)
		}, s.each(["load", "unload", "error"], function(e, t) {
			s.fn[t] = function() {
				var e = Array.prototype.slice.call(arguments, 0);
				return "load" === t && "string" == typeof e[0] ? H.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
			}
		}), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
			s.fn[r] = function(e, t) {
				return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
			}
		}), s(function() {
			s(n.document).triggerHandler("ready")
		}), s.event.special.ready = {
			setup: function() {
				this === n.document && u("'ready' event is deprecated")
			}
		}, s.fn.extend({
			bind: function(e, t, r) {
				return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
			},
			unbind: function(e, t) {
				return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
			},
			delegate: function(e, t, r, n) {
				return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
			},
			undelegate: function(e, t, r) {
				return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
			},
			hover: function(e, t) {
				return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
			}
		});

		function C(e) {
			var t = n.document.implementation.createHTMLDocument("");
			return t.body.innerHTML = e, t.body && t.body.innerHTML
		}

		function T(e) {
			var t = e.replace(P, "<$1></$2>");
			t !== e && C(e) !== C(t) && u("HTML tags must be properly nested and closed: " + e)
		}
		var P = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
			q = s.htmlPrefilter;
		s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
			s.htmlPrefilter = function(e) {
				return T(e), e.replace(P, "<$1></$2>")
			}
		}, s.htmlPrefilter = function(e) {
			return T(e), q(e)
		};
		var D = s.fn.offset;
		if (s.fn.offset = function() {
				var e, t = this[0];
				if (t && t.nodeType) return e = (t.ownerDocument || n.document).documentElement, s.contains(e, t) ? D.apply(this, arguments) : (u("jQuery.fn.offset() requires an element connected to a document"), {
					top: 0,
					left: 0
				});
				u("jQuery.fn.offset() requires a valid DOM element")
			}, s.ajax) {
			var E = s.param;
			s.param = function(e, t) {
				var r = s.ajaxSettings && s.ajaxSettings.traditional;
				return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), E.call(this, e, t)
			}
		}
		var _ = s.fn.andSelf || s.fn.addBack;
		if (s.fn.andSelf = function() {
				return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), _.apply(this, arguments)
			}, s.Deferred) {
			var F = s.Deferred,
				O = [
					["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
					["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
					["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
				];
			s.Deferred = function(e) {
				var o = F(),
					a = o.promise();
				return o.pipe = a.pipe = function() {
					var i = arguments;
					return u("deferred.pipe() is deprecated"), s.Deferred(function(n) {
						s.each(O, function(e, t) {
							var r = "function" == typeof i[e] && i[e];
							o[t[1]](function() {
								var e = r && r.apply(this, arguments);
								e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
							})
						}), i = null
					}).promise()
				}, e && e.call(o, o), o
			}, s.Deferred.exceptionHook = F.exceptionHook
		}
		return s
	});;
(function() {
	let rtocList = [];
	let lastScrollY = 0;
	let lastBodyClientHeight = 0;
	let sidebar_rtoc_wrapper = document.querySelector('.sidebar #rtoc-mokuji-wrapper');
	if (!sidebar_rtoc_wrapper) {
		sidebar_rtoc_wrapper = document.querySelector('.widget #rtoc-mokuji-wrapper');
	}
	if (!sidebar_rtoc_wrapper) {
		sidebar_rtoc_wrapper = document.querySelector('.c-widget #rtoc-mokuji-wrapper');
	}
	if (!sidebar_rtoc_wrapper) {
		sidebar_rtoc_wrapper = document.querySelector('#scrollad #rtoc-mokuji-wrapper');
	}
	if (sidebar_rtoc_wrapper) {
		sidebar_rtoc_wrapper.classList.add('rtoc-sidebar-contents');
	} else {
		return;
	}

	function init() {
		rtocList = [];
		rtocParentList = [];
		if (sidebar_rtoc_wrapper == null) {
			return;
		}
		const itemList = sidebar_rtoc_wrapper.querySelectorAll('a');
		const itemAllList = sidebar_rtoc_wrapper.querySelectorAll('.level-1 > .rtoc-item > a');
		for (let i = 0; i < itemList.length; i++) {
			const a = itemList[i];
			const linkAnker = a.href.substring(a.href.lastIndexOf('#'));
			const itemElement = document.querySelector(decodeURI(linkAnker));
			let top = itemElement.offsetTop;
			let parent = itemElement.offsetParent;
			while (parent != null) {
				top += parent.offsetTop;
				parent = parent.offsetParent;
			}
			rtocList.push({
				top: top,
				bottom: 1e30,
				itemdom: a.parentElement
			});
			if (i > 0) {
				rtocList[i - 1].bottom = rtocList[i].top;
			}
		}
		for (let i = 0; i < itemAllList.length; i++) {
			const a = itemAllList[i];
			const linkAnker = a.href.substring(a.href.lastIndexOf('#'));
			const itemAllElement = document.querySelector(decodeURI(linkAnker));
			const tag = itemAllElement.tagName;
			let top = itemAllElement.offsetTop;
			let parent = itemAllElement.offsetParent;
			while (parent != null) {
				top += parent.offsetTop;
				parent = parent.offsetParent;
			}
			rtocParentList.push({
				top: top,
				bottom: 1e30,
				itemdom: a.parentElement
			});
			if (i > 0) {
				rtocParentList[i - 1].bottom = rtocParentList[i].top;
			}
		}
	}
	init();

	function updateSection(scrollY) {
		if (document.body.clientHeight !== lastBodyClientHeight) {
			init();
		}
		for (let sec of rtocList) {
			sec.itemdom.classList.remove('rtoc-current');
		}
		for (let sec of rtocParentList) {
			sec.itemdom.classList.remove('rtoc-show');
		}
		for (let i = 0; i < rtocList.length; i++) {
			const sec = rtocList[i];
			if (sec.top <= scrollY && scrollY < sec.bottom) {
				sec.itemdom.classList.add('rtoc-current');
				break;
			}
		}
		for (let i = 0; i < rtocParentList.length; i++) {
			const sec = rtocParentList[i];
			if (sec.top <= scrollY && scrollY < sec.bottom) {
				sec.itemdom.classList.add('rtoc-show');
				break;
			}
		}
	}

	function widgetScroll(hiddenDOM) {
		const highlightContents = sidebar_rtoc_wrapper.querySelector('.rtoc-current');
		if (!highlightContents) return;
	}
	let ticking = false;
	const scrollHeight = sidebar_rtoc_wrapper.querySelector('.rtoc-mokuji').scrollHeight;
	const displayHeight = sidebar_rtoc_wrapper.querySelector('.rtoc-mokuji').offsetHeight;
	document.addEventListener('scroll', function() {
		lastScrollY = window.scrollY;
		if (ticking === false) {
			window.requestAnimationFrame(function() {
				updateSection(lastScrollY + 300);
				ticking = false;
			});
			ticking = true;
		}
		if (scrollHeight > displayHeight) {
			widgetScroll(scrollHeight - displayHeight);
		}
	});
})();
! function(e) {
	var t = {};

	function n(r) {
		if (t[r]) return t[r].exports;
		var o = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, r) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
		})
	}, n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e) n.d(r, o, function(t) {
				return e[t]
			}.bind(null, o));
		return r
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 3)
}([function(e, t) {
	e.exports = function(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t, n) {
	var r = n(2);
	e.exports = function(e, t) {
		if (null == e) return {};
		var n, o, c = r(e, t);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n])
		}
		return c
	}, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t) {
	e.exports = function(e, t) {
		if (null == e) return {};
		var n, r, o = {},
			c = Object.keys(e);
		for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
		return o
	}, e.exports.default = e.exports, e.exports.__esModule = !0
}, function(e, t, n) {
	"use strict";
	n.r(t);
	var r = n(0),
		o = n.n(r),
		c = function(e) {
			return Math.abs(parseInt(e, 10))
		},
		a = function(e, t) {
			var n = new Map([
				["init", "init"],
				["validation_failed", "invalid"],
				["acceptance_missing", "unaccepted"],
				["spam", "spam"],
				["aborted", "aborted"],
				["mail_sent", "sent"],
				["mail_failed", "failed"],
				["submitting", "submitting"],
				["resetting", "resetting"]
			]);
			n.has(t) && (t = n.get(t)), Array.from(n.values()).includes(t) || (t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-"), t = "custom-".concat(t));
			var r = e.getAttribute("data-status");
			return e.wpcf7.status = t, e.setAttribute("data-status", t), e.classList.add(t), r && r !== t && e.classList.remove(r), t
		},
		i = function(e, t, n) {
			var r = new CustomEvent("wpcf7".concat(t), {
				bubbles: !0,
				detail: n
			});
			"string" == typeof e && (e = document.querySelector(e)), e.dispatchEvent(r)
		},
		s = n(1),
		u = n.n(s);

	function f(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), n.push.apply(n, r)
		}
		return n
	}

	function l(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {};
			t % 2 ? f(Object(n), !0).forEach((function(t) {
				o()(e, t, n[t])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
			}))
		}
		return e
	}
	var p = function(e) {
			var t = wpcf7.api,
				n = t.root,
				r = t.namespace,
				o = void 0 === r ? "contact-form-7/v1" : r;
			return d.reduceRight((function(e, t) {
				return function(n) {
					return t(n, e)
				}
			}), (function(e) {
				var t, r, c = e.url,
					a = e.path,
					i = e.endpoint,
					s = e.headers,
					f = e.body,
					p = e.data,
					d = u()(e, ["url", "path", "endpoint", "headers", "body", "data"]);
				"string" == typeof i && (t = o.replace(/^\/|\/$/g, ""), a = (r = i.replace(/^\//, "")) ? t + "/" + r : t), "string" == typeof a && (-1 !== n.indexOf("?") && (a = a.replace("?", "&")), a = a.replace(/^\//, ""), c = n + a), delete(s = l({
					Accept: "application/json, */*;q=0.1"
				}, s))["X-WP-Nonce"], p && (f = JSON.stringify(p), s["Content-Type"] = "application/json");
				var v = {
						code: "fetch_error",
						message: "You are probably offline."
					},
					b = {
						code: "invalid_json",
						message: "The response is not a valid JSON response."
					};
				return window.fetch(c || a || window.location.href, l(l({}, d), {}, {
					headers: s,
					body: f
				})).then((function(e) {
					return Promise.resolve(e).then((function(e) {
						if (e.status >= 200 && e.status < 300) return e;
						throw e
					})).then((function(e) {
						if (204 === e.status) return null;
						if (e && e.json) return e.json().catch((function() {
							throw b
						}));
						throw b
					}))
				}), (function() {
					throw v
				}))
			}))(e)
		},
		d = [];

	function v(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			n = new FormData(e);
		t.submitter && t.submitter.name && n.append(t.submitter.name, t.submitter.value);
		var r = {
				contactFormId: e.wpcf7.id,
				pluginVersion: e.wpcf7.pluginVersion,
				contactFormLocale: e.wpcf7.locale,
				unitTag: e.wpcf7.unitTag,
				containerPostId: e.wpcf7.containerPost,
				status: e.wpcf7.status,
				inputs: Array.from(n, (function(e) {
					var t = e[0],
						n = e[1];
					return !t.match(/^_/) && {
						name: t,
						value: n
					}
				})).filter((function(e) {
					return !1 !== e
				})),
				formData: n
			},
			o = function(t) {
				var n = document.createElement("li");
				n.setAttribute("id", t.error_id), t.idref ? n.insertAdjacentHTML("beforeend", '<a href="#'.concat(t.idref, '">').concat(t.message, "</a>")) : n.insertAdjacentText("beforeend", t.message), e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(n)
			},
			c = function(t) {
				var n = e.querySelector(t.into),
					r = n.querySelector(".wpcf7-form-control");
				r.classList.add("wpcf7-not-valid"), r.setAttribute("aria-invalid", "true"), r.setAttribute("aria-describedby", t.error_id);
				var o = document.createElement("span");
				o.setAttribute("class", "wpcf7-not-valid-tip"), o.setAttribute("aria-hidden", "true"), o.insertAdjacentText("beforeend", t.message), n.appendChild(o), r.closest(".use-floating-validation-tip") && (r.addEventListener("focus", (function(e) {
					o.setAttribute("style", "display: none")
				})), o.addEventListener("mouseover", (function(e) {
					o.setAttribute("style", "display: none")
				})))
			};
		p({
			endpoint: "contact-forms/".concat(e.wpcf7.id, "/feedback"),
			method: "POST",
			body: n,
			wpcf7: {
				endpoint: "feedback",
				form: e,
				detail: r
			}
		}).then((function(t) {
			var n = a(e, t.status);
			return r.status = t.status, r.apiResponse = t, ["invalid", "unaccepted", "spam", "aborted"].includes(n) ? i(e, n, r) : ["sent", "failed"].includes(n) && i(e, "mail".concat(n), r), i(e, "submit", r), t
		})).then((function(t) {
			t.posted_data_hash && (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value = t.posted_data_hash), "mail_sent" === t.status && (e.reset(), e.wpcf7.resetOnMailSent = !0), t.invalid_fields && (t.invalid_fields.forEach(o), t.invalid_fields.forEach(c)), e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message), e.querySelectorAll(".wpcf7-response-output").forEach((function(e) {
				e.innerText = t.message
			}))
		})).catch((function(e) {
			return console.error(e)
		}))
	}
	p.use = function(e) {
		d.unshift(e)
	}, p.use((function(e, t) {
		if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
			var n = e.wpcf7,
				r = n.form,
				o = n.detail;
			b(r), i(r, "beforesubmit", o), a(r, "submitting")
		}
		return t(e)
	}));
	var b = function(e) {
		e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText = "", e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText = "", e.querySelectorAll(".wpcf7-not-valid-tip").forEach((function(e) {
			e.remove()
		})), e.querySelectorAll(".wpcf7-form-control").forEach((function(e) {
			e.setAttribute("aria-invalid", "false"), e.removeAttribute("aria-describedby"), e.classList.remove("wpcf7-not-valid")
		})), e.querySelectorAll(".wpcf7-response-output").forEach((function(e) {
			e.innerText = ""
		}))
	};

	function m(e) {
		var t = new FormData(e),
			n = {
				contactFormId: e.wpcf7.id,
				pluginVersion: e.wpcf7.pluginVersion,
				contactFormLocale: e.wpcf7.locale,
				unitTag: e.wpcf7.unitTag,
				containerPostId: e.wpcf7.containerPost,
				status: e.wpcf7.status,
				inputs: Array.from(t, (function(e) {
					var t = e[0],
						n = e[1];
					return !t.match(/^_/) && {
						name: t,
						value: n
					}
				})).filter((function(e) {
					return !1 !== e
				})),
				formData: t
			};
		p({
			endpoint: "contact-forms/".concat(e.wpcf7.id, "/refill"),
			method: "GET",
			wpcf7: {
				endpoint: "refill",
				form: e,
				detail: n
			}
		}).then((function(t) {
			e.wpcf7.resetOnMailSent ? (delete e.wpcf7.resetOnMailSent, a(e, "mail_sent")) : a(e, "init"), n.apiResponse = t, i(e, "reset", n)
		})).catch((function(e) {
			return console.error(e)
		}))
	}
	p.use((function(e, t) {
		if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
			var n = e.wpcf7,
				r = n.form;
			n.detail, b(r), a(r, "resetting")
		}
		return t(e)
	}));
	var w = function(e, t) {
			var n = function(n) {
				var r = t[n];
				e.querySelectorAll('input[name="'.concat(n, '"]')).forEach((function(e) {
					e.value = ""
				})), e.querySelectorAll("img.wpcf7-captcha-".concat(n)).forEach((function(e) {
					e.setAttribute("src", r)
				}));
				var o = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
				o && e.querySelectorAll('input[name="_wpcf7_captcha_challenge_'.concat(n, '"]')).forEach((function(e) {
					e.value = o[1]
				}))
			};
			for (var r in t) n(r)
		},
		y = function(e, t) {
			var n = function(n) {
				var r = t[n][0],
					o = t[n][1];
				e.querySelectorAll(".wpcf7-form-control-wrap.".concat(n)).forEach((function(e) {
					e.querySelector('input[name="'.concat(n, '"]')).value = "", e.querySelector(".wpcf7-quiz-label").textContent = r, e.querySelector('input[name="_wpcf7_quiz_answer_'.concat(n, '"]')).value = o
				}))
			};
			for (var r in t) n(r)
		};

	function h(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), n.push.apply(n, r)
		}
		return n
	}

	function g(e) {
		var t = new FormData(e);
		e.wpcf7 = {
				id: c(t.get("_wpcf7")),
				status: e.getAttribute("data-status"),
				pluginVersion: t.get("_wpcf7_version"),
				locale: t.get("_wpcf7_locale"),
				unitTag: t.get("_wpcf7_unit_tag"),
				containerPost: c(t.get("_wpcf7_container_post")),
				parent: e.closest(".wpcf7")
			}, e.querySelectorAll(".wpcf7-submit").forEach((function(e) {
				e.insertAdjacentHTML("afterend", '<span class="ajax-loader"></span>')
			})),
			function(e) {
				e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((function(t) {
					t.addEventListener("change", (function(t) {
						var n = t.target.getAttribute("name");
						e.querySelectorAll('input[type="checkbox"][name="'.concat(n, '"]')).forEach((function(e) {
							e !== t.target && (e.checked = !1)
						}))
					}))
				}))
			}(e),
			function(e) {
				e.querySelectorAll(".has-free-text").forEach((function(t) {
					var n = t.querySelector("input.wpcf7-free-text"),
						r = t.querySelector('input[type="checkbox"], input[type="radio"]');
					n.disabled = !r.checked, e.addEventListener("change", (function(e) {
						n.disabled = !r.checked, e.target === r && r.checked && n.focus()
					}))
				}))
			}(e),
			function(e) {
				e.querySelectorAll(".wpcf7-validates-as-url").forEach((function(e) {
					e.addEventListener("change", (function(t) {
						var n = e.value.trim();
						n && !n.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== n.indexOf(".") && (n = "http://" + (n = n.replace(/^\/+/, ""))), e.value = n
					}))
				}))
			}(e),
			function(e) {
				if (e.querySelector(".wpcf7-acceptance") && !e.classList.contains("wpcf7-acceptance-as-validation")) {
					var t = function() {
						var t = !0;
						e.querySelectorAll(".wpcf7-acceptance").forEach((function(e) {
							if (t && !e.classList.contains("optional")) {
								var n = e.querySelector('input[type="checkbox"]');
								(e.classList.contains("invert") && n.checked || !e.classList.contains("invert") && !n.checked) && (t = !1)
							}
						})), e.querySelectorAll(".wpcf7-submit").forEach((function(e) {
							e.disabled = !t
						}))
					};
					t(), e.addEventListener("change", (function(e) {
						t()
					})), e.addEventListener("wpcf7reset", (function(e) {
						t()
					}))
				}
			}(e),
			function(e) {
				var t = function(e, t) {
						var n = c(e.getAttribute("data-starting-value")),
							r = c(e.getAttribute("data-maximum-value")),
							o = c(e.getAttribute("data-minimum-value")),
							a = e.classList.contains("down") ? n - t.value.length : t.value.length;
						e.setAttribute("data-current-value", a), e.innerText = a, r && r < t.value.length ? e.classList.add("too-long") : e.classList.remove("too-long"), o && t.value.length < o ? e.classList.add("too-short") : e.classList.remove("too-short")
					},
					n = function(n) {
						n = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2 ? h(Object(n), !0).forEach((function(t) {
									o()(e, t, n[t])
								})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								}))
							}
							return e
						}({
							init: !1
						}, n), e.querySelectorAll(".wpcf7-character-count").forEach((function(r) {
							var o = r.getAttribute("data-target-name"),
								c = e.querySelector('[name="'.concat(o, '"]'));
							c && (c.value = c.defaultValue, t(r, c), n.init && c.addEventListener("keyup", (function(e) {
								t(r, c)
							})))
						}))
					};
				n({
					init: !0
				}), e.addEventListener("wpcf7reset", (function(e) {
					n()
				}))
			}(e), window.addEventListener("load", (function(t) {
				wpcf7.cached && e.reset()
			})), e.addEventListener("reset", (function(t) {
				wpcf7.reset(e)
			})), e.addEventListener("submit", (function(t) {
				var n = t.submitter;
				wpcf7.submit(e, {
					submitter: n
				}), t.preventDefault()
			})), e.addEventListener("wpcf7submit", (function(t) {
				t.detail.apiResponse.captcha && w(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && y(e, t.detail.apiResponse.quiz)
			})), e.addEventListener("wpcf7reset", (function(t) {
				t.detail.apiResponse.captcha && w(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && y(e, t.detail.apiResponse.quiz)
			}))
	}

	function O(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			}))), n.push.apply(n, r)
		}
		return n
	}
	document.addEventListener("DOMContentLoaded", (function(e) {
		var t;
		if ("undefined" != typeof wpcf7)
			if (void 0 !== wpcf7.api) {
				var n = document.querySelectorAll(".wpcf7 > form");
				"function" == typeof n.forEach ? (wpcf7 = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? O(Object(n), !0).forEach((function(t) {
							o()(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}({
					init: g,
					submit: v,
					reset: m
				}, null !== (t = wpcf7) && void 0 !== t ? t : {}), n.forEach((function(e) {
					return wpcf7.init(e)
				}))) : console.error("Your browser doesn't support NodeList.forEach().")
			} else console.error("wpcf7.api is not defined.");
		else console.error("wpcf7 is not defined.")
	}))
}]);

! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], function(b) {
		a(b, window, document)
	}) : "object" == typeof module && module.exports ? module.exports = a(require("jquery"), window, document) : a(jQuery, window, document)
}(function(a, b, c, d) {
	"use strict";

	function e(b, c) {
		this.a = a(b), this.b = a.extend({}, h, c), this.ns = "." + f + g++, this.d = Boolean(b.setSelectionRange), this.e = Boolean(a(b).attr("placeholder"))
	}
	var f = "intlTelInput",
		g = 1,
		h = {
			allowDropdown: !0,
			autoHideDialCode: !0,
			autoPlaceholder: "polite",
			customPlaceholder: null,
			dropdownContainer: "",
			excludeCountries: [],
			formatOnDisplay: !0,
			geoIpLookup: null,
			hiddenInput: "",
			initialCountry: "",
			localizedCountries: null,
			nationalMode: !0,
			onlyCountries: [],
			placeholderNumberType: "MOBILE",
			preferredCountries: ["us", "gb"],
			separateDialCode: !1,
			utilsScript: ""
		},
		i = {
			b: 38,
			c: 40,
			d: 13,
			e: 27,
			f: 43,
			A: 65,
			Z: 90,
			j: 32,
			k: 9
		},
		j = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
	a(b).on("load", function() {
		a.fn[f].windowLoaded = !0
	}), e.prototype = {
		_a: function() {
			return this.b.nationalMode && (this.b.autoHideDialCode = !1), this.b.separateDialCode && (this.b.autoHideDialCode = this.b.nationalMode = !1), this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.g && (a("body").addClass("iti-mobile"), this.b.dropdownContainer || (this.b.dropdownContainer = "body")), this.h = new a.Deferred, this.i = new a.Deferred, this.s = {}, this._b(), this._f(), this._h(), this._i(), this._i2(), [this.h, this.i]
		},
		_b: function() {
			this._d(), this._d2(), this._e(), this.b.localizedCountries && this._translateCountriesByLocale(), (this.b.onlyCountries.length || this.b.localizedCountries) && this.p.sort(this._countryNameSort)
		},
		_c: function(a, b, c) {
			b in this.q || (this.q[b] = []);
			var d = c || 0;
			this.q[b][d] = a
		},
		_d: function() {
			if (this.b.onlyCountries.length) {
				var a = this.b.onlyCountries.map(function(a) {
					return a.toLowerCase()
				});
				this.p = k.filter(function(b) {
					return a.indexOf(b.iso2) > -1
				})
			} else if (this.b.excludeCountries.length) {
				var b = this.b.excludeCountries.map(function(a) {
					return a.toLowerCase()
				});
				this.p = k.filter(function(a) {
					return -1 === b.indexOf(a.iso2)
				})
			} else this.p = k
		},
		_translateCountriesByLocale: function() {
			for (var a = 0; a < this.p.length; a++) {
				var b = this.p[a].iso2.toLowerCase();
				b in this.b.localizedCountries && (this.p[a].name = this.b.localizedCountries[b])
			}
		},
		_countryNameSort: function(a, b) {
			return a.name.localeCompare(b.name)
		},
		_d2: function() {
			this.q = {};
			for (var a = 0; a < this.p.length; a++) {
				var b = this.p[a];
				if (this._c(b.iso2, b.dialCode, b.priority), b.areaCodes)
					for (var c = 0; c < b.areaCodes.length; c++) this._c(b.iso2, b.dialCode + b.areaCodes[c])
			}
		},
		_e: function() {
			this.preferredCountries = [];
			for (var a = 0; a < this.b.preferredCountries.length; a++) {
				var b = this.b.preferredCountries[a].toLowerCase(),
					c = this._y(b, !1, !0);
				c && this.preferredCountries.push(c)
			}
		},
		_f: function() {
			this.a.attr("autocomplete", "off");
			var b = "intl-tel-input";
			this.b.allowDropdown && (b += " allow-dropdown"), this.b.separateDialCode && (b += " separate-dial-code"), this.a.wrap(a("<div>", {
				"class": b
			})), this.k = a("<div>", {
				"class": "flag-container"
			}).insertBefore(this.a);
			var c = a("<div>", {
				"class": "selected-flag"
			});
			if (c.appendTo(this.k), this.l = a("<div>", {
					"class": "iti-flag"
				}).appendTo(c), this.b.separateDialCode && (this.t = a("<div>", {
					"class": "selected-dial-code"
				}).appendTo(c)), this.b.allowDropdown ? (c.attr("tabindex", "0"), a("<div>", {
					"class": "iti-arrow"
				}).appendTo(c), this.m = a("<ul>", {
					"class": "country-list hide"
				}), this.preferredCountries.length && (this._g(this.preferredCountries, "preferred"), a("<li>", {
					"class": "divider"
				}).appendTo(this.m)), this._g(this.p, ""), this.o = this.m.children(".country"), this.b.dropdownContainer ? this.dropdown = a("<div>", {
					"class": "intl-tel-input iti-container"
				}).append(this.m) : this.m.appendTo(this.k)) : this.o = a(), this.b.hiddenInput) {
				var d = this.b.hiddenInput,
					e = this.a.attr("name");
				if (e) {
					var f = e.lastIndexOf("["); - 1 !== f && (d = e.substr(0, f) + "[" + d + "]")
				}
				this.hiddenInput = a("<input>", {
					type: "hidden",
					name: d
				}).insertAfter(this.a)
			}
		},
		_g: function(a, b) {
			for (var c = "", d = 0; d < a.length; d++) {
				var e = a[d];
				c += "<li class='country " + b + "' data-dial-code='" + e.dialCode + "' data-country-code='" + e.iso2 + "'>", c += "<div class='flag-box'><div class='iti-flag " + e.iso2 + "'></div></div>", c += "<span class='country-name'>" + e.name + "</span>", c += "<span class='dial-code'>+" + e.dialCode + "</span>", c += "</li>"
			}
			this.m.append(c)
		},
		_h: function() {
			var a = this.a.val();
			this._af(a) && (!this._isRegionlessNanp(a) || this.b.nationalMode && !this.b.initialCountry) ? this._v(a) : "auto" !== this.b.initialCountry && (this.b.initialCountry ? this._z(this.b.initialCountry.toLowerCase()) : (this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2, a || this._z(this.j)), a || this.b.nationalMode || this.b.autoHideDialCode || this.b.separateDialCode || this.a.val("+" + this.s.dialCode)), a && this._u(a)
		},
		_i: function() {
			this._j(), this.b.autoHideDialCode && this._l(), this.b.allowDropdown && this._i1(), this.hiddenInput && this._initHiddenInputListener()
		},
		_initHiddenInputListener: function() {
			var a = this,
				b = this.a.closest("form");
			b.length && b.submit(function() {
				a.hiddenInput.val(a.getNumber())
			})
		},
		_i1: function() {
			var a = this,
				b = this.a.closest("label");
			b.length && b.on("click" + this.ns, function(b) {
				a.m.hasClass("hide") ? a.a.focus() : b.preventDefault()
			}), this.l.parent().on("click" + this.ns, function(b) {
				!a.m.hasClass("hide") || a.a.prop("disabled") || a.a.prop("readonly") || a._n()
			}), this.k.on("keydown" + a.ns, function(b) {
				!a.m.hasClass("hide") || b.which != i.b && b.which != i.c && b.which != i.j && b.which != i.d || (b.preventDefault(), b.stopPropagation(), a._n()), b.which == i.k && a._ac()
			})
		},
		_i2: function() {
			var c = this;
			this.b.utilsScript ? a.fn[f].windowLoaded ? a.fn[f].loadUtils(this.b.utilsScript, this.i) : a(b).on("load", function() {
				a.fn[f].loadUtils(c.b.utilsScript, c.i)
			}) : this.i.resolve(), "auto" === this.b.initialCountry ? this._i3() : this.h.resolve()
		},
		_i3: function() {
			a.fn[f].autoCountry ? this.handleAutoCountry() : a.fn[f].startedLoadingAutoCountry || (a.fn[f].startedLoadingAutoCountry = !0, "function" == typeof this.b.geoIpLookup && this.b.geoIpLookup(function(b) {
				a.fn[f].autoCountry = b.toLowerCase(), setTimeout(function() {
					a(".intl-tel-input input").intlTelInput("handleAutoCountry")
				})
			}))
		},
		_j: function() {
			var a = this;
			this.a.on("keyup" + this.ns, function() {
				a._v(a.a.val()) && a._triggerCountryChange()
			}), this.a.on("cut" + this.ns + " paste" + this.ns, function() {
				setTimeout(function() {
					a._v(a.a.val()) && a._triggerCountryChange()
				})
			})
		},
		_j2: function(a) {
			var b = this.a.attr("maxlength");
			return b && a.length > b ? a.substr(0, b) : a
		},
		_l: function() {
			var b = this;
			this.a.on("mousedown" + this.ns, function(a) {
				b.a.is(":focus") || b.a.val() || (a.preventDefault(), b.a.focus())
			}), this.a.on("focus" + this.ns, function(a) {
				b.a.val() || b.a.prop("readonly") || !b.s.dialCode || (b.a.val("+" + b.s.dialCode), b.a.one("keypress.plus" + b.ns, function(a) {
					a.which == i.f && b.a.val("")
				}), setTimeout(function() {
					var a = b.a[0];
					if (b.d) {
						var c = b.a.val().length;
						a.setSelectionRange(c, c)
					}
				}))
			});
			var c = this.a.prop("form");
			c && a(c).on("submit" + this.ns, function() {
				b._removeEmptyDialCode()
			}), this.a.on("blur" + this.ns, function() {
				b._removeEmptyDialCode()
			})
		},
		_removeEmptyDialCode: function() {
			var a = this.a.val();
			if ("+" == a.charAt(0)) {
				var b = this._m(a);
				b && this.s.dialCode != b || this.a.val("")
			}
			this.a.off("keypress.plus" + this.ns)
		},
		_m: function(a) {
			return a.replace(/\D/g, "")
		},
		_n: function() {
			this._o();
			var a = this.m.children(".active");
			a.length && (this._x(a), this._ad(a)), this._p(), this.l.children(".iti-arrow").addClass("up"), this.a.trigger("open:countrydropdown")
		},
		_o: function() {
			var c = this;
			if (this.b.dropdownContainer && this.dropdown.appendTo(this.b.dropdownContainer), this.n = this.m.removeClass("hide").outerHeight(), !this.g) {
				var d = this.a.offset(),
					e = d.top,
					f = a(b).scrollTop(),
					g = e + this.a.outerHeight() + this.n < f + a(b).height(),
					h = e - this.n > f;
				if (this.m.toggleClass("dropup", !g && h), this.b.dropdownContainer) {
					var i = !g && h ? 0 : this.a.innerHeight();
					this.dropdown.css({
						top: e + i,
						left: d.left
					}), a(b).on("scroll" + this.ns, function() {
						c._ac()
					})
				}
			}
		},
		_p: function() {
			var b = this;
			this.m.on("mouseover" + this.ns, ".country", function(c) {
				b._x(a(this))
			}), this.m.on("click" + this.ns, ".country", function(c) {
				b._ab(a(this))
			});
			var d = !0;
			a("html").on("click" + this.ns, function(a) {
				d || b._ac(), d = !1
			});
			var e = "",
				f = null;
			a(c).on("keydown" + this.ns, function(a) {
				a.preventDefault(), a.which == i.b || a.which == i.c ? b._q(a.which) : a.which == i.d ? b._r() : a.which == i.e ? b._ac() : (a.which >= i.A && a.which <= i.Z || a.which == i.j) && (f && clearTimeout(f), e += String.fromCharCode(a.which), b._s(e), f = setTimeout(function() {
					e = ""
				}, 1e3))
			})
		},
		_q: function(a) {
			var b = this.m.children(".highlight").first(),
				c = a == i.b ? b.prev() : b.next();
			c.length && (c.hasClass("divider") && (c = a == i.b ? c.prev() : c.next()), this._x(c), this._ad(c))
		},
		_r: function() {
			var a = this.m.children(".highlight").first();
			a.length && this._ab(a)
		},
		_s: function(a) {
			for (var b = 0; b < this.p.length; b++)
				if (this._t(this.p[b].name, a)) {
					var c = this.m.children("[data-country-code=" + this.p[b].iso2 + "]").not(".preferred");
					this._x(c), this._ad(c, !0);
					break
				}
		},
		_t: function(a, b) {
			return a.substr(0, b.length).toUpperCase() == b
		},
		_u: function(a) {
			if (this.b.formatOnDisplay && b.intlTelInputUtils && this.s) {
				var c = this.b.separateDialCode || !this.b.nationalMode && "+" == a.charAt(0) ? intlTelInputUtils.numberFormat.INTERNATIONAL : intlTelInputUtils.numberFormat.NATIONAL;
				a = intlTelInputUtils.formatNumber(a, this.s.iso2, c)
			}
			a = this._ah(a), this.a.val(a)
		},
		_v: function(b) {
			b && this.b.nationalMode && "1" == this.s.dialCode && "+" != b.charAt(0) && ("1" != b.charAt(0) && (b = "1" + b), b = "+" + b);
			var c = this._af(b),
				d = null,
				e = this._m(b);
			if (c) {
				var f = this.q[this._m(c)],
					g = a.inArray(this.s.iso2, f) > -1,
					h = "+1" == c && e.length >= 4;
				if ((!("1" == this.s.dialCode) || !this._isRegionlessNanp(e)) && (!g || h))
					for (var i = 0; i < f.length; i++)
						if (f[i]) {
							d = f[i];
							break
						}
			} else "+" == b.charAt(0) && e.length ? d = "" : b && "+" != b || (d = this.j);
			return null !== d && this._z(d)
		},
		_isRegionlessNanp: function(b) {
			var c = this._m(b);
			if ("1" == c.charAt(0)) {
				var d = c.substr(1, 3);
				return a.inArray(d, j) > -1
			}
			return !1
		},
		_x: function(a) {
			this.o.removeClass("highlight"), a.addClass("highlight")
		},
		_y: function(a, b, c) {
			for (var d = b ? k : this.p, e = 0; e < d.length; e++)
				if (d[e].iso2 == a) return d[e];
			if (c) return null;
			throw new Error("No country data for '" + a + "'")
		},
		_z: function(a) {
			var b = this.s.iso2 ? this.s : {};
			this.s = a ? this._y(a, !1, !1) : {}, this.s.iso2 && (this.j = this.s.iso2), this.l.attr("class", "iti-flag " + a);
			var c = a ? this.s.name + ": +" + this.s.dialCode : "Unknown";
			if (this.l.parent().attr("title", c), this.b.separateDialCode) {
				var d = this.s.dialCode ? "+" + this.s.dialCode : "",
					e = this.a.parent();
				b.dialCode && e.removeClass("iti-sdc-" + (b.dialCode.length + 1)), d && e.addClass("iti-sdc-" + d.length), this.t.text(d)
			}
			return this._aa(), this.o.removeClass("active"), a && this.o.find(".iti-flag." + a).first().closest(".country").addClass("active"), b.iso2 !== a
		},
		_aa: function() {
			var a = "aggressive" === this.b.autoPlaceholder || !this.e && (!0 === this.b.autoPlaceholder || "polite" === this.b.autoPlaceholder);
			if (b.intlTelInputUtils && a) {
				var c = intlTelInputUtils.numberType[this.b.placeholderNumberType],
					d = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.b.nationalMode, c) : "";
				d = this._ah(d), "function" == typeof this.b.customPlaceholder && (d = this.b.customPlaceholder(d, this.s)), this.a.attr("placeholder", d)
			}
		},
		_ab: function(a) {
			var b = this._z(a.attr("data-country-code"));
			if (this._ac(), this._ae(a.attr("data-dial-code"), !0), this.a.focus(), this.d) {
				var c = this.a.val().length;
				this.a[0].setSelectionRange(c, c)
			}
			b && this._triggerCountryChange()
		},
		_ac: function() {
			this.m.addClass("hide"), this.l.children(".iti-arrow").removeClass("up"), a(c).off(this.ns), a("html").off(this.ns), this.m.off(this.ns), this.b.dropdownContainer && (this.g || a(b).off("scroll" + this.ns), this.dropdown.detach()), this.a.trigger("close:countrydropdown")
		},
		_ad: function(a, b) {
			var c = this.m,
				d = c.height(),
				e = c.offset().top,
				f = e + d,
				g = a.outerHeight(),
				h = a.offset().top,
				i = h + g,
				j = h - e + c.scrollTop(),
				k = d / 2 - g / 2;
			if (h < e) b && (j -= k), c.scrollTop(j);
			else if (i > f) {
				b && (j += k);
				var l = d - g;
				c.scrollTop(j - l)
			}
		},
		_ae: function(a, b) {
			var c, d = this.a.val();
			if (a = "+" + a, "+" == d.charAt(0)) {
				var e = this._af(d);
				c = e ? d.replace(e, a) : a
			} else {
				if (this.b.nationalMode || this.b.separateDialCode) return;
				if (d) c = a + d;
				else {
					if (!b && this.b.autoHideDialCode) return;
					c = a
				}
			}
			this.a.val(c)
		},
		_af: function(b) {
			var c = "";
			if ("+" == b.charAt(0))
				for (var d = "", e = 0; e < b.length; e++) {
					var f = b.charAt(e);
					if (a.isNumeric(f) && (d += f, this.q[d] && (c = b.substr(0, e + 1)), 4 == d.length)) break
				}
			return c
		},
		_ag: function() {
			var b = a.trim(this.a.val()),
				c = this.s.dialCode,
				d = this._m(b),
				e = "1" == d.charAt(0) ? d : "1" + d;
			return (this.b.separateDialCode ? "+" + c : "+" != b.charAt(0) && "1" != b.charAt(0) && c && "1" == c.charAt(0) && 4 == c.length && c != e.substr(0, 4) ? c.substr(1) : "") + b
		},
		_ah: function(a) {
			if (this.b.separateDialCode) {
				var b = this._af(a);
				if (b) {
					null !== this.s.areaCodes && (b = "+" + this.s.dialCode);
					var c = " " === a[b.length] || "-" === a[b.length] ? b.length + 1 : b.length;
					a = a.substr(c)
				}
			}
			return this._j2(a)
		},
		_triggerCountryChange: function() {
			this.a.trigger("countrychange", this.s)
		},
		handleAutoCountry: function() {
			"auto" === this.b.initialCountry && (this.j = a.fn[f].autoCountry, this.a.val() || this.setCountry(this.j), this.h.resolve())
		},
		handleUtils: function() {
			b.intlTelInputUtils && (this.a.val() && this._u(this.a.val()), this._aa()), this.i.resolve()
		},
		destroy: function() {
			if (this.b.allowDropdown && (this._ac(), this.l.parent().off(this.ns), this.a.closest("label").off(this.ns)), this.b.autoHideDialCode) {
				var b = this.a.prop("form");
				b && a(b).off(this.ns)
			}
			this.a.off(this.ns), this.a.parent().before(this.a).remove()
		},
		getExtension: function() {
			return b.intlTelInputUtils ? intlTelInputUtils.getExtension(this._ag(), this.s.iso2) : ""
		},
		getNumber: function(a) {
			return b.intlTelInputUtils ? intlTelInputUtils.formatNumber(this._ag(), this.s.iso2, a) : ""
		},
		getNumberType: function() {
			return b.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._ag(), this.s.iso2) : -99
		},
		getSelectedCountryData: function() {
			return this.s
		},
		getValidationError: function() {
			return b.intlTelInputUtils ? intlTelInputUtils.getValidationError(this._ag(), this.s.iso2) : -99
		},
		isValidNumber: function() {
			var c = a.trim(this._ag()),
				d = this.b.nationalMode ? this.s.iso2 : "";
			return b.intlTelInputUtils ? intlTelInputUtils.isValidNumber(c, d) : null
		},
		setCountry: function(a) {
			a = a.toLowerCase(), this.l.hasClass(a) || (this._z(a), this._ae(this.s.dialCode, !1), this._triggerCountryChange())
		},
		setNumber: function(a) {
			var b = this._v(a);
			this._u(a), b && this._triggerCountryChange()
		},
		setPlaceholderNumberType: function(a) {
			this.b.placeholderNumberType = a, this._aa()
		}
	}, a.fn[f] = function(b) {
		var c = arguments;
		if (b === d || "object" == typeof b) {
			var g = [];
			return this.each(function() {
				if (!a.data(this, "plugin_" + f)) {
					var c = new e(this, b),
						d = c._a();
					g.push(d[0]), g.push(d[1]), a.data(this, "plugin_" + f, c)
				}
			}), a.when.apply(null, g)
		}
		if ("string" == typeof b && "_" !== b[0]) {
			var h;
			return this.each(function() {
				var d = a.data(this, "plugin_" + f);
				d instanceof e && "function" == typeof d[b] && (h = d[b].apply(d, Array.prototype.slice.call(c, 1))), "destroy" === b && a.data(this, "plugin_" + f, null)
			}), h !== d ? h : this
		}
	}, a.fn[f].getCountryData = function() {
		return k
	}, a.fn[f].loadUtils = function(b, c) {
		a.fn[f].loadedUtilsScript ? c && c.resolve() : (a.fn[f].loadedUtilsScript = !0, a.ajax({
			type: "GET",
			url: b,
			complete: function() {
				a(".intl-tel-input input").intlTelInput("handleUtils")
			},
			dataType: "script",
			cache: !0
		}))
	}, a.fn[f].defaults = h, a.fn[f].version = "12.4.0";
	for (var k = [
			["Afghanistan (â€«Ø§ÙØºØ§Ù†Ø³ØªØ§Ù†â€¬â€Ž)", "af", "93"],
			["Albania (ShqipÃ«ri)", "al", "355"],
			["Algeria (â€«Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±â€¬â€Ž)", "dz", "213"],
			["American Samoa", "as", "1684"],
			["Andorra", "ad", "376"],
			["Angola", "ao", "244"],
			["Anguilla", "ai", "1264"],
			["Antigua and Barbuda", "ag", "1268"],
			["Argentina", "ar", "54"],
			["Armenia (Õ€Õ¡ÕµÕ¡Õ½Õ¿Õ¡Õ¶)", "am", "374"],
			["Aruba", "aw", "297"],
			["Australia", "au", "61", 0],
			["Austria (Ã–sterreich)", "at", "43"],
			["Azerbaijan (AzÉ™rbaycan)", "az", "994"],
			["Bahamas", "bs", "1242"],
			["Bahrain (â€«Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†â€¬â€Ž)", "bh", "973"],
			["Bangladesh (à¦¬à¦¾à¦‚à¦²à¦¾à¦¦à§‡à¦¶)", "bd", "880"],
			["Barbados", "bb", "1246"],
			["Belarus (Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÑŒ)", "by", "375"],
			["Belgium (BelgiÃ«)", "be", "32"],
			["Belize", "bz", "501"],
			["Benin (BÃ©nin)", "bj", "229"],
			["Bermuda", "bm", "1441"],
			["Bhutan (à½ à½–à¾²à½´à½‚)", "bt", "975"],
			["Bolivia", "bo", "591"],
			["Bosnia and Herzegovina (Ð‘Ð¾ÑÐ½Ð° Ð¸ Ð¥ÐµÑ€Ñ†ÐµÐ³Ð¾Ð²Ð¸Ð½Ð°)", "ba", "387"],
			["Botswana", "bw", "267"],
			["Brazil (Brasil)", "br", "55"],
			["British Indian Ocean Territory", "io", "246"],
			["British Virgin Islands", "vg", "1284"],
			["Brunei", "bn", "673"],
			["Bulgaria (Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ)", "bg", "359"],
			["Burkina Faso", "bf", "226"],
			["Burundi (Uburundi)", "bi", "257"],
			["Cambodia (áž€áž˜áŸ’áž–áž»áž‡áž¶)", "kh", "855"],
			["Cameroon (Cameroun)", "cm", "237"],
			["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
			["Cape Verde (Kabu Verdi)", "cv", "238"],
			["Caribbean Netherlands", "bq", "599", 1],
			["Cayman Islands", "ky", "1345"],
			["Central African Republic (RÃ©publique centrafricaine)", "cf", "236"],
			["Chad (Tchad)", "td", "235"],
			["Chile", "cl", "56"],
			["China (ä¸­å›½)", "cn", "86"],
			["Christmas Island", "cx", "61", 2],
			["Cocos (Keeling) Islands", "cc", "61", 1],
			["Colombia", "co", "57"],
			["Comoros (â€«Ø¬Ø²Ø± Ø§Ù„Ù‚Ù…Ø±â€¬â€Ž)", "km", "269"],
			["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
			["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
			["Cook Islands", "ck", "682"],
			["Costa Rica", "cr", "506"],
			["CÃ´te dâ€™Ivoire", "ci", "225"],
			["Croatia (Hrvatska)", "hr", "385"],
			["Cuba", "cu", "53"],
			["CuraÃ§ao", "cw", "599", 0],
			["Cyprus (ÎšÏÏ€ÏÎ¿Ï‚)", "cy", "357"],
			["Czech Republic (ÄŒeskÃ¡ republika)", "cz", "420"],
			["Denmark (Danmark)", "dk", "45"],
			["Djibouti", "dj", "253"],
			["Dominica", "dm", "1767"],
			["Dominican Republic (RepÃºblica Dominicana)", "do", "1", 2, ["809", "829", "849"]],
			["Ecuador", "ec", "593"],
			["Egypt (â€«Ù…ØµØ±â€¬â€Ž)", "eg", "20"],
			["El Salvador", "sv", "503"],
			["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
			["Eritrea", "er", "291"],
			["Estonia (Eesti)", "ee", "372"],
			["Ethiopia", "et", "251"],
			["Falkland Islands (Islas Malvinas)", "fk", "500"],
			["Faroe Islands (FÃ¸royar)", "fo", "298"],
			["Fiji", "fj", "679"],
			["Finland (Suomi)", "fi", "358", 0],
			["France", "fr", "33"],
			["French Guiana (Guyane franÃ§aise)", "gf", "594"],
			["French Polynesia (PolynÃ©sie franÃ§aise)", "pf", "689"],
			["Gabon", "ga", "241"],
			["Gambia", "gm", "220"],
			["Georgia (áƒ¡áƒáƒ¥áƒáƒ áƒ—áƒ•áƒ”áƒšáƒ)", "ge", "995"],
			["Germany (Deutschland)", "de", "49"],
			["Ghana (Gaana)", "gh", "233"],
			["Gibraltar", "gi", "350"],
			["Greece (Î•Î»Î»Î¬Î´Î±)", "gr", "30"],
			["Greenland (Kalaallit Nunaat)", "gl", "299"],
			["Grenada", "gd", "1473"],
			["Guadeloupe", "gp", "590", 0],
			["Guam", "gu", "1671"],
			["Guatemala", "gt", "502"],
			["Guernsey", "gg", "44", 1],
			["Guinea (GuinÃ©e)", "gn", "224"],
			["Guinea-Bissau (GuinÃ© Bissau)", "gw", "245"],
			["Guyana", "gy", "592"],
			["Haiti", "ht", "509"],
			["Honduras", "hn", "504"],
			["Hong Kong (é¦™æ¸¯)", "hk", "852"],
			["Hungary (MagyarorszÃ¡g)", "hu", "36"],
			["Iceland (Ãsland)", "is", "354"],
			["India (à¤­à¤¾à¤°à¤¤)", "in", "91"],
			["Indonesia", "id", "62"],
			["Iran (â€«Ø§ÛŒØ±Ø§Ù†â€¬â€Ž)", "ir", "98"],
			["Iraq (â€«Ø§Ù„Ø¹Ø±Ø§Ù‚â€¬â€Ž)", "iq", "964"],
			["Ireland", "ie", "353"],
			["Isle of Man", "im", "44", 2],
			["Israel (â€«×™×©×¨××œâ€¬â€Ž)", "il", "972"],
			["Italy (Italia)", "it", "39", 0],
			["Jamaica", "jm", "1", 4, ["876", "658"]],
			["Japan (æ—¥æœ¬)", "jp", "81"],
			["Jersey", "je", "44", 3],
			["Jordan (â€«Ø§Ù„Ø£Ø±Ø¯Ù†â€¬â€Ž)", "jo", "962"],
			["Kazakhstan (ÐšÐ°Ð·Ð°Ñ…ÑÑ‚Ð°Ð½)", "kz", "7", 1],
			["Kenya", "ke", "254"],
			["Kiribati", "ki", "686"],
			["Kosovo", "xk", "383"],
			["Kuwait (â€«Ø§Ù„ÙƒÙˆÙŠØªâ€¬â€Ž)", "kw", "965"],
			["Kyrgyzstan (ÐšÑ‹Ñ€Ð³Ñ‹Ð·ÑÑ‚Ð°Ð½)", "kg", "996"],
			["Laos (àº¥àº²àº§)", "la", "856"],
			["Latvia (Latvija)", "lv", "371"],
			["Lebanon (â€«Ù„Ø¨Ù†Ø§Ù†â€¬â€Ž)", "lb", "961"],
			["Lesotho", "ls", "266"],
			["Liberia", "lr", "231"],
			["Libya (â€«Ù„ÙŠØ¨ÙŠØ§â€¬â€Ž)", "ly", "218"],
			["Liechtenstein", "li", "423"],
			["Lithuania (Lietuva)", "lt", "370"],
			["Luxembourg", "lu", "352"],
			["Macau (æ¾³é–€)", "mo", "853"],
			["Macedonia (FYROM) (ÐœÐ°ÐºÐµÐ´Ð¾Ð½Ð¸Ñ˜Ð°)", "mk", "389"],
			["Madagascar (Madagasikara)", "mg", "261"],
			["Malawi", "mw", "265"],
			["Malaysia", "my", "60"],
			["Maldives", "mv", "960"],
			["Mali", "ml", "223"],
			["Malta", "mt", "356"],
			["Marshall Islands", "mh", "692"],
			["Martinique", "mq", "596"],
			["Mauritania (â€«Ù…ÙˆØ±ÙŠØªØ§Ù†ÙŠØ§â€¬â€Ž)", "mr", "222"],
			["Mauritius (Moris)", "mu", "230"],
			["Mayotte", "yt", "262", 1],
			["Mexico (MÃ©xico)", "mx", "52"],
			["Micronesia", "fm", "691"],
			["Moldova (Republica Moldova)", "md", "373"],
			["Monaco", "mc", "377"],
			["Mongolia (ÐœÐ¾Ð½Ð³Ð¾Ð»)", "mn", "976"],
			["Montenegro (Crna Gora)", "me", "382"],
			["Montserrat", "ms", "1664"],
			["Morocco (â€«Ø§Ù„Ù…ØºØ±Ø¨â€¬â€Ž)", "ma", "212", 0],
			["Mozambique (MoÃ§ambique)", "mz", "258"],
			["Myanmar (Burma) (á€™á€¼á€”á€ºá€™á€¬)", "mm", "95"],
			["Namibia (NamibiÃ«)", "na", "264"],
			["Nauru", "nr", "674"],
			["Nepal (à¤¨à¥‡à¤ªà¤¾à¤²)", "np", "977"],
			["Netherlands (Nederland)", "nl", "31"],
			["New Caledonia (Nouvelle-CalÃ©donie)", "nc", "687"],
			["New Zealand", "nz", "64"],
			["Nicaragua", "ni", "505"],
			["Niger (Nijar)", "ne", "227"],
			["Nigeria", "ng", "234"],
			["Niue", "nu", "683"],
			["Norfolk Island", "nf", "672"],
			["North Korea (ì¡°ì„  ë¯¼ì£¼ì£¼ì˜ ì¸ë¯¼ ê³µí™”êµ­)", "kp", "850"],
			["Northern Mariana Islands", "mp", "1670"],
			["Norway (Norge)", "no", "47", 0],
			["Oman (â€«Ø¹ÙÙ…Ø§Ù†â€¬â€Ž)", "om", "968"],
			["Pakistan (â€«Ù¾Ø§Ú©Ø³ØªØ§Ù†â€¬â€Ž)", "pk", "92"],
			["Palau", "pw", "680"],
			["Palestine (â€«ÙÙ„Ø³Ø·ÙŠÙ†â€¬â€Ž)", "ps", "970"],
			["Panama (PanamÃ¡)", "pa", "507"],
			["Papua New Guinea", "pg", "675"],
			["Paraguay", "py", "595"],
			["Peru (PerÃº)", "pe", "51"],
			["Philippines", "ph", "63"],
			["Poland (Polska)", "pl", "48"],
			["Portugal", "pt", "351"],
			["Puerto Rico", "pr", "1", 3, ["787", "939"]],
			["Qatar (â€«Ù‚Ø·Ø±â€¬â€Ž)", "qa", "974"],
			["RÃ©union (La RÃ©union)", "re", "262", 0],
			["Romania (RomÃ¢nia)", "ro", "40"],
			["Russia (Ð Ð¾ÑÑÐ¸Ñ)", "ru", "7", 0],
			["Rwanda", "rw", "250"],
			["Saint BarthÃ©lemy", "bl", "590", 1],
			["Saint Helena", "sh", "290"],
			["Saint Kitts and Nevis", "kn", "1869"],
			["Saint Lucia", "lc", "1758"],
			["Saint Martin (Saint-Martin (partie franÃ§aise))", "mf", "590", 2],
			["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
			["Saint Vincent and the Grenadines", "vc", "1784"],
			["Samoa", "ws", "685"],
			["San Marino", "sm", "378"],
			["SÃ£o TomÃ© and PrÃ­ncipe (SÃ£o TomÃ© e PrÃ­ncipe)", "st", "239"],
			["Saudi Arabia (â€«Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©â€¬â€Ž)", "sa", "966"],
			["Senegal (SÃ©nÃ©gal)", "sn", "221"],
			["Serbia (Ð¡Ñ€Ð±Ð¸Ñ˜Ð°)", "rs", "381"],
			["Seychelles", "sc", "248"],
			["Sierra Leone", "sl", "232"],
			["Singapore", "sg", "65"],
			["Sint Maarten", "sx", "1721"],
			["Slovakia (Slovensko)", "sk", "421"],
			["Slovenia (Slovenija)", "si", "386"],
			["Solomon Islands", "sb", "677"],
			["Somalia (Soomaaliya)", "so", "252"],
			["South Africa", "za", "27"],
			["South Korea (ëŒ€í•œë¯¼êµ­)", "kr", "82"],
			["South Sudan (â€«Ø¬Ù†ÙˆØ¨ Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)", "ss", "211"],
			["Spain (EspaÃ±a)", "es", "34"],
			["Sri Lanka (à·à·Šâ€à¶»à·“ à¶½à¶‚à¶šà·à·€)", "lk", "94"],
			["Sudan (â€«Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)", "sd", "249"],
			["Suriname", "sr", "597"],
			["Svalbard and Jan Mayen", "sj", "47", 1],
			["Swaziland", "sz", "268"],
			["Sweden (Sverige)", "se", "46"],
			["Switzerland (Schweiz)", "ch", "41"],
			["Syria (â€«Ø³ÙˆØ±ÙŠØ§â€¬â€Ž)", "sy", "963"],
			["Taiwan (å°ç£)", "tw", "886"],
			["Tajikistan", "tj", "992"],
			["Tanzania", "tz", "255"],
			["Thailand (à¹„à¸—à¸¢)", "th", "66"],
			["Timor-Leste", "tl", "670"],
			["Togo", "tg", "228"],
			["Tokelau", "tk", "690"],
			["Tonga", "to", "676"],
			["Trinidad and Tobago", "tt", "1868"],
			["Tunisia (â€«ØªÙˆÙ†Ø³â€¬â€Ž)", "tn", "216"],
			["Turkey (TÃ¼rkiye)", "tr", "90"],
			["Turkmenistan", "tm", "993"],
			["Turks and Caicos Islands", "tc", "1649"],
			["Tuvalu", "tv", "688"],
			["U.S. Virgin Islands", "vi", "1340"],
			["Uganda", "ug", "256"],
			["Ukraine (Ð£ÐºÑ€Ð°Ñ—Ð½Ð°)", "ua", "380"],
			["United Arab Emirates (â€«Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©â€¬â€Ž)", "ae", "971"],
			["United Kingdom", "gb", "44", 0],
			["United States", "us", "1", 0],
			["Uruguay", "uy", "598"],
			["Uzbekistan (OÊ»zbekiston)", "uz", "998"],
			["Vanuatu", "vu", "678"],
			["Vatican City (CittÃ  del Vaticano)", "va", "39", 1],
			["Venezuela", "ve", "58"],
			["Vietnam (Viá»‡t Nam)", "vn", "84"],
			["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
			["Western Sahara (â€«Ø§Ù„ØµØ­Ø±Ø§Ø¡ Ø§Ù„ØºØ±Ø¨ÙŠØ©â€¬â€Ž)", "eh", "212", 1],
			["Yemen (â€«Ø§Ù„ÙŠÙ…Ù†â€¬â€Ž)", "ye", "967"],
			["Zambia", "zm", "260"],
			["Zimbabwe", "zw", "263"],
			["Ã…land Islands", "ax", "358", 1]
		], l = 0; l < k.length; l++) {
		var m = k[l];
		k[l] = {
			name: m[0],
			iso2: m[1],
			dialCode: m[2],
			priority: m[3] || 0,
			areaCodes: m[4] || null
		}
	}
});
! function(n) {
	"function" == typeof define && define.amd ? define(["jquery"], function(i) {
		n(i, window, document)
	}) : n(jQuery, window, document)
}(function(n, i, t, a) {
	"use strict";
	var e = "countrySelect",
		s = 1,
		o = {
			defaultCountry: "",
			defaultStyling: "inside",
			excludeCountries: [],
			onlyCountries: [],
			preferredCountries: ["us", "gb"]
		},
		r = 38,
		u = 40,
		l = 13,
		h = 27,
		c = 65,
		d = 90,
		p = 32,
		g = 9;

	function y(i, t) {
		this.element = i, this.options = n.extend({}, o, t), this._defaults = o, this.ns = "." + e + s++, this._name = e, this.init()
	}
	n(i).on("load", function() {
		!0
	}), y.prototype = {
		init: function() {
			return this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this.autoCountryDeferred = new n.Deferred, this._initAutoCountry(), this.autoCountryDeferred
		},
		_processCountryData: function() {
			this._setInstanceCountryData(), this._setPreferredCountries()
		},
		_setInstanceCountryData: function() {
			var i = this;
			if (this.options.onlyCountries.length) {
				var t = [];
				n.each(this.options.onlyCountries, function(n, a) {
					var e = i._getCountryData(a, !0);
					e && t.push(e)
				}), this.countries = t
			} else if (this.options.excludeCountries.length) {
				var a = this.options.excludeCountries.map(function(n) {
					return n.toLowerCase()
				});
				this.countries = f.filter(function(n) {
					return -1 === a.indexOf(n.iso2)
				})
			} else this.countries = f
		},
		_setPreferredCountries: function() {
			var i = this;
			this.preferredCountries = [], n.each(this.options.preferredCountries, function(n, t) {
				var a = i._getCountryData(t, !1);
				a && i.preferredCountries.push(a)
			})
		},
		_generateMarkup: function() {
			this.countryInput = n(this.element);
			var i = "country-select";
			this.options.defaultStyling && (i += " " + this.options.defaultStyling), this.countryInput.wrap(n("<div>", {
				class: i
			})), this.flagsContainer = n("<div>", {
				class: "flag-dropdown"
			}).insertBefore(this.countryInput);
			var t = n("<div>", {
				class: "selected-flag"
			}).appendTo(this.flagsContainer);
			this.selectedFlagInner = n("<div>", {
				class: "flag"
			}).appendTo(t), n("<div>", {
				class: "arrow"
			}).appendTo(t), this.countryList = n("<ul>", {
				class: "country-list v-hide"
			}).appendTo(this.flagsContainer), this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "preferred"), n("<li>", {
				class: "divider"
			}).appendTo(this.countryList)), this._appendListItems(this.countries, ""), this.countryCodeInput = n("#" + this.countryInput.attr("id") + "_code"), this.countryCodeInput || (this.countryCodeInput = n('<input type="hidden" id="' + this.countryInput.attr("id") + '_code" name="' + this.countryInput.attr("name") + '_code" value="" />'), this.countryCodeInput.insertAfter(this.countryInput)), this.dropdownHeight = this.countryList.outerHeight(), this.countryList.removeClass("v-hide").addClass("hide"), this.countryListItems = this.countryList.children(".country")
		},
		_appendListItems: function(i, t) {
			var a = "";
			n.each(i, function(n, i) {
				a += '<li class="country ' + t + '" data-country-code="' + i.iso2 + '">', a += '<div class="flag ' + i.iso2 + '"></div>', a += '<span class="country-name">' + i.name + "</span>", a += "</li>"
			}), this.countryList.append(a)
		},
		_setInitialState: function() {
			var n = !1;
			this.countryInput.val() && (n = this._updateFlagFromInputVal());
			var i, t = this.countryCodeInput.val();
			(t && this.selectCountry(t), n) || (this.options.defaultCountry && (i = this._getCountryData(this.options.defaultCountry, !1)) || (i = this.preferredCountries.length ? this.preferredCountries[0] : this.countries[0]), this.defaultCountry = i.iso2)
		},
		_initListeners: function() {
			var n = this,
				i = this.countryInput.closest("label");
			i.length && i.on("click" + this.ns, function(i) {
				n.countryList.hasClass("hide") ? n.countryInput.focus() : i.preventDefault()
			}), this.selectedFlagInner.parent().on("click" + this.ns, function(i) {
				n.countryList.hasClass("hide") && !n.countryInput.prop("disabled") && n._showDropdown()
			}), this.flagsContainer.on("keydown" + n.ns, function(i) {
				!n.countryList.hasClass("hide") || i.which != r && i.which != u && i.which != p && i.which != l || (i.preventDefault(), i.stopPropagation(), n._showDropdown()), i.which == g && n._closeDropdown()
			})
		},
		_initAutoCountry: function() {
			"auto" === this.options.initialCountry ? this._loadAutoCountry() : (this.selectCountry(this.defaultCountry), this.autoCountryDeferred.resolve())
		},
		_loadAutoCountry: function() {
			n.fn[e].autoCountry ? this.handleAutoCountry() : n.fn[e].startedLoadingAutoCountry || (n.fn[e].startedLoadingAutoCountry = !0, "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function(i) {
				n.fn[e].autoCountry = i.toLowerCase(), setTimeout(function() {
					n(".country-select input").countrySelect("handleAutoCountry")
				})
			}))
		},
		_focus: function() {
			this.countryInput.focus();
			var n = this.countryInput[0];
			if (n.setSelectionRange) {
				var i = this.countryInput.val().length;
				n.setSelectionRange(i, i)
			}
		},
		_showDropdown: function() {
			this._setDropdownPosition();
			var n = this.countryList.children(".active");
			this._highlightListItem(n), this.countryList.removeClass("hide"), this._scrollTo(n), this._bindDropdownListeners(), this.selectedFlagInner.parent().children(".arrow").addClass("up")
		},
		_setDropdownPosition: function() {
			var t = this.countryInput.offset().top,
				a = n(i).scrollTop(),
				e = t + this.countryInput.outerHeight() + this.dropdownHeight < a + n(i).height(),
				s = t - this.dropdownHeight > a,
				o = !e && s ? "-" + (this.dropdownHeight - 1) + "px" : "";
			this.countryList.css("top", o)
		},
		_bindDropdownListeners: function() {
			var i = this;
			this.countryList.on("mouseover" + this.ns, ".country", function(t) {
				i._highlightListItem(n(this))
			}), this.countryList.on("click" + this.ns, ".country", function(t) {
				i._selectListItem(n(this))
			});
			var a = !0;
			n("html").on("click" + this.ns, function(n) {
				a || i._closeDropdown(), a = !1
			}), n(t).on("keydown" + this.ns, function(n) {
				n.preventDefault(), n.which == r || n.which == u ? i._handleUpDownKey(n.which) : n.which == l ? i._handleEnterKey() : n.which == h ? i._closeDropdown() : n.which >= c && n.which <= d && i._handleLetterKey(n.which)
			})
		},
		_handleUpDownKey: function(n) {
			var i = this.countryList.children(".highlight").first(),
				t = n == r ? i.prev() : i.next();
			t.length && (t.hasClass("divider") && (t = n == r ? t.prev() : t.next()), this._highlightListItem(t), this._scrollTo(t))
		},
		_handleEnterKey: function() {
			var n = this.countryList.children(".highlight").first();
			n.length && this._selectListItem(n)
		},
		_handleLetterKey: function(i) {
			var t = String.fromCharCode(i),
				a = this.countryListItems.filter(function() {
					return n(this).text().charAt(0) == t && !n(this).hasClass("preferred")
				});
			if (a.length) {
				var e, s = a.filter(".highlight").first();
				e = s && s.next() && s.next().text().charAt(0) == t ? s.next() : a.first(), this._highlightListItem(e), this._scrollTo(e)
			}
		},
		_updateFlagFromInputVal: function() {
			var i = this,
				t = this.countryInput.val().replace(/(?=[() ])/g, "\\");
			if (t) {
				for (var a = [], e = new RegExp("^" + t, "i"), s = 0; s < this.countries.length; s++) this.countries[s].name.match(e) && a.push(this.countries[s].iso2);
				var o = !1;
				return n.each(a, function(n, t) {
					i.selectedFlagInner.hasClass(t) && (o = !0)
				}), o || (this._selectFlag(a[0]), this.countryCodeInput.val(a[0]).trigger("change")), !0
			}
			return !1
		},
		_highlightListItem: function(n) {
			this.countryListItems.removeClass("highlight"), n.addClass("highlight")
		},
		_getCountryData: function(n, i) {
			for (var t = i ? f : this.countries, a = 0; a < t.length; a++)
				if (t[a].iso2 == n) return t[a];
			return null
		},
		_selectFlag: function(n) {
			if (!n) return !1;
			this.selectedFlagInner.attr("class", "flag " + n);
			var i = this._getCountryData(n);
			this.selectedFlagInner.parent().attr("title", i.name);
			var t = this.countryListItems.children(".flag." + n).first().parent();
			this.countryListItems.removeClass("active"), t.addClass("active")
		},
		_selectListItem: function(n) {
			var i = n.attr("data-country-code");
			this._selectFlag(i), this._closeDropdown(), this._updateName(i), this.countryInput.trigger("change"), this.countryCodeInput.trigger("change"), this._focus()
		},
		_closeDropdown: function() {
			this.countryList.addClass("hide"), this.selectedFlagInner.parent().children(".arrow").removeClass("up"), n(t).off("keydown" + this.ns), n("html").off("click" + this.ns), this.countryList.off(this.ns)
		},
		_scrollTo: function(n) {
			if (n && n.offset()) {
				var i = this.countryList,
					t = i.height(),
					a = i.offset().top,
					e = a + t,
					s = n.outerHeight(),
					o = n.offset().top,
					r = o + s,
					u = o - a + i.scrollTop();
				if (o < a) i.scrollTop(u);
				else if (r > e) {
					var l = t - s;
					i.scrollTop(u - l)
				}
			}
		},
		_updateName: function(n) {
			this.countryCodeInput.val(n).trigger("change"), this.countryInput.val(this._getCountryData(n).name)
		},
		handleAutoCountry: function() {
			"auto" === this.options.initialCountry && (this.defaultCountry = n.fn[e].autoCountry, this.countryInput.val() || this.selectCountry(this.defaultCountry), this.autoCountryDeferred.resolve())
		},
		getSelectedCountryData: function() {
			var n = this.selectedFlagInner.attr("class").split(" ")[1];
			return this._getCountryData(n)
		},
		selectCountry: function(n) {
			n = n.toLowerCase(), this.selectedFlagInner.hasClass(n) || (this._selectFlag(n), this._updateName(n))
		},
		setCountry: function(n) {
			this.countryInput.val(n), this._updateFlagFromInputVal()
		},
		destroy: function() {
			this.countryInput.off(this.ns), this.selectedFlagInner.parent().off(this.ns), this.countryInput.parent().before(this.countryInput).remove()
		}
	}, n.fn[e] = function(i) {
		var t, s = arguments;
		return i === a || "object" == typeof i ? this.each(function() {
			n.data(this, "plugin_" + e) || n.data(this, "plugin_" + e, new y(this, i))
		}) : "string" == typeof i && "_" !== i[0] && "init" !== i ? (this.each(function() {
			var a = n.data(this, "plugin_" + e);
			a instanceof y && "function" == typeof a[i] && (t = a[i].apply(a, Array.prototype.slice.call(s, 1))), "destroy" === i && n.data(this, "plugin_" + e, null)
		}), t !== a ? t : this) : void 0
	}, n.fn[e].getCountryData = function() {
		return f
	}, n.fn[e].setCountryData = function(n) {
		f = n
	};
	var f = n.each([{
		n: "Afghanistan (â€«Ø§ÙØºØ§Ù†Ø³ØªØ§Ù†â€¬â€Ž)",
		i: "af"
	}, {
		n: "Ã…land Islands (Ã…land)",
		i: "ax"
	}, {
		n: "Albania (ShqipÃ«ri)",
		i: "al"
	}, {
		n: "Algeria (â€«Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±â€¬â€Ž)",
		i: "dz"
	}, {
		n: "American Samoa",
		i: "as"
	}, {
		n: "Andorra",
		i: "ad"
	}, {
		n: "Angola",
		i: "ao"
	}, {
		n: "Anguilla",
		i: "ai"
	}, {
		n: "Antigua and Barbuda",
		i: "ag"
	}, {
		n: "Argentina",
		i: "ar"
	}, {
		n: "Armenia (Õ€Õ¡ÕµÕ¡Õ½Õ¿Õ¡Õ¶)",
		i: "am"
	}, {
		n: "Aruba",
		i: "aw"
	}, {
		n: "Australia",
		i: "au"
	}, {
		n: "Austria (Ã–sterreich)",
		i: "at"
	}, {
		n: "Azerbaijan (AzÉ™rbaycan)",
		i: "az"
	}, {
		n: "Bahamas",
		i: "bs"
	}, {
		n: "Bahrain (â€«Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†â€¬â€Ž)",
		i: "bh"
	}, {
		n: "Bangladesh (à¦¬à¦¾à¦‚à¦²à¦¾à¦¦à§‡à¦¶)",
		i: "bd"
	}, {
		n: "Barbados",
		i: "bb"
	}, {
		n: "Belarus (Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÑŒ)",
		i: "by"
	}, {
		n: "Belgium (BelgiÃ«)",
		i: "be"
	}, {
		n: "Belize",
		i: "bz"
	}, {
		n: "Benin (BÃ©nin)",
		i: "bj"
	}, {
		n: "Bermuda",
		i: "bm"
	}, {
		n: "Bhutan (à½ à½–à¾²à½´à½‚)",
		i: "bt"
	}, {
		n: "Bolivia",
		i: "bo"
	}, {
		n: "Bosnia and Herzegovina (Ð‘Ð¾ÑÐ½Ð° Ð¸ Ð¥ÐµÑ€Ñ†ÐµÐ³Ð¾Ð²Ð¸Ð½Ð°)",
		i: "ba"
	}, {
		n: "Botswana",
		i: "bw"
	}, {
		n: "Brazil (Brasil)",
		i: "br"
	}, {
		n: "British Indian Ocean Territory",
		i: "io"
	}, {
		n: "British Virgin Islands",
		i: "vg"
	}, {
		n: "Brunei",
		i: "bn"
	}, {
		n: "Bulgaria (Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ)",
		i: "bg"
	}, {
		n: "Burkina Faso",
		i: "bf"
	}, {
		n: "Burundi (Uburundi)",
		i: "bi"
	}, {
		n: "Cambodia (áž€áž˜áŸ’áž–áž»áž‡áž¶)",
		i: "kh"
	}, {
		n: "Cameroon (Cameroun)",
		i: "cm"
	}, {
		n: "Canada",
		i: "ca"
	}, {
		n: "Cape Verde (Kabu Verdi)",
		i: "cv"
	}, {
		n: "Caribbean Netherlands",
		i: "bq"
	}, {
		n: "Cayman Islands",
		i: "ky"
	}, {
		n: "Central African Republic (RÃ©publique Centrafricaine)",
		i: "cf"
	}, {
		n: "Chad (Tchad)",
		i: "td"
	}, {
		n: "Chile",
		i: "cl"
	}, {
		n: "China (ä¸­å›½)",
		i: "cn"
	}, {
		n: "Christmas Island",
		i: "cx"
	}, {
		n: "Cocos (Keeling) Islands (Kepulauan Cocos (Keeling))",
		i: "cc"
	}, {
		n: "Colombia",
		i: "co"
	}, {
		n: "Comoros (â€«Ø¬Ø²Ø± Ø§Ù„Ù‚Ù…Ø±â€¬â€Ž)",
		i: "km"
	}, {
		n: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
		i: "cd"
	}, {
		n: "Congo (Republic) (Congo-Brazzaville)",
		i: "cg"
	}, {
		n: "Cook Islands",
		i: "ck"
	}, {
		n: "Costa Rica",
		i: "cr"
	}, {
		n: "CÃ´te dâ€™Ivoire",
		i: "ci"
	}, {
		n: "Croatia (Hrvatska)",
		i: "hr"
	}, {
		n: "Cuba",
		i: "cu"
	}, {
		n: "CuraÃ§ao",
		i: "cw"
	}, {
		n: "Cyprus (ÎšÏÏ€ÏÎ¿Ï‚)",
		i: "cy"
	}, {
		n: "Czech Republic (ÄŒeskÃ¡ republika)",
		i: "cz"
	}, {
		n: "Denmark (Danmark)",
		i: "dk"
	}, {
		n: "Djibouti",
		i: "dj"
	}, {
		n: "Dominica",
		i: "dm"
	}, {
		n: "Dominican Republic (RepÃºblica Dominicana)",
		i: "do"
	}, {
		n: "Ecuador",
		i: "ec"
	}, {
		n: "Egypt (â€«Ù…ØµØ±â€¬â€Ž)",
		i: "eg"
	}, {
		n: "El Salvador",
		i: "sv"
	}, {
		n: "Equatorial Guinea (Guinea Ecuatorial)",
		i: "gq"
	}, {
		n: "Eritrea",
		i: "er"
	}, {
		n: "Estonia (Eesti)",
		i: "ee"
	}, {
		n: "Ethiopia",
		i: "et"
	}, {
		n: "Falkland Islands (Islas Malvinas)",
		i: "fk"
	}, {
		n: "Faroe Islands (FÃ¸royar)",
		i: "fo"
	}, {
		n: "Fiji",
		i: "fj"
	}, {
		n: "Finland (Suomi)",
		i: "fi"
	}, {
		n: "France",
		i: "fr"
	}, {
		n: "French Guiana (Guyane franÃ§aise)",
		i: "gf"
	}, {
		n: "French Polynesia (PolynÃ©sie franÃ§aise)",
		i: "pf"
	}, {
		n: "Gabon",
		i: "ga"
	}, {
		n: "Gambia",
		i: "gm"
	}, {
		n: "Georgia (áƒ¡áƒáƒ¥áƒáƒ áƒ—áƒ•áƒ”áƒšáƒ)",
		i: "ge"
	}, {
		n: "Germany (Deutschland)",
		i: "de"
	}, {
		n: "Ghana (Gaana)",
		i: "gh"
	}, {
		n: "Gibraltar",
		i: "gi"
	}, {
		n: "Greece (Î•Î»Î»Î¬Î´Î±)",
		i: "gr"
	}, {
		n: "Greenland (Kalaallit Nunaat)",
		i: "gl"
	}, {
		n: "Grenada",
		i: "gd"
	}, {
		n: "Guadeloupe",
		i: "gp"
	}, {
		n: "Guam",
		i: "gu"
	}, {
		n: "Guatemala",
		i: "gt"
	}, {
		n: "Guernsey",
		i: "gg"
	}, {
		n: "Guinea (GuinÃ©e)",
		i: "gn"
	}, {
		n: "Guinea-Bissau (GuinÃ© Bissau)",
		i: "gw"
	}, {
		n: "Guyana",
		i: "gy"
	}, {
		n: "Haiti",
		i: "ht"
	}, {
		n: "Honduras",
		i: "hn"
	}, {
		n: "Hong Kong (é¦™æ¸¯)",
		i: "hk"
	}, {
		n: "Hungary (MagyarorszÃ¡g)",
		i: "hu"
	}, {
		n: "Iceland (Ãsland)",
		i: "is"
	}, {
		n: "India (à¤­à¤¾à¤°à¤¤)",
		i: "in"
	}, {
		n: "Indonesia",
		i: "id"
	}, {
		n: "Iran (â€«Ø§ÛŒØ±Ø§Ù†â€¬â€Ž)",
		i: "ir"
	}, {
		n: "Iraq (â€«Ø§Ù„Ø¹Ø±Ø§Ù‚â€¬â€Ž)",
		i: "iq"
	}, {
		n: "Ireland",
		i: "ie"
	}, {
		n: "Isle of Man",
		i: "im"
	}, {
		n: "Israel (â€«×™×©×¨××œâ€¬â€Ž)",
		i: "il"
	}, {
		n: "Italy (Italia)",
		i: "it"
	}, {
		n: "Jamaica",
		i: "jm"
	}, {
		n: "Japan (æ—¥æœ¬)",
		i: "jp"
	}, {
		n: "Jersey",
		i: "je"
	}, {
		n: "Jordan (â€«Ø§Ù„Ø£Ø±Ø¯Ù†â€¬â€Ž)",
		i: "jo"
	}, {
		n: "Kazakhstan (ÐšÐ°Ð·Ð°Ñ…ÑÑ‚Ð°Ð½)",
		i: "kz"
	}, {
		n: "Kenya",
		i: "ke"
	}, {
		n: "Kiribati",
		i: "ki"
	}, {
		n: "Kosovo (KosovÃ«)",
		i: "xk"
	}, {
		n: "Kuwait (â€«Ø§Ù„ÙƒÙˆÙŠØªâ€¬â€Ž)",
		i: "kw"
	}, {
		n: "Kyrgyzstan (ÐšÑ‹Ñ€Ð³Ñ‹Ð·ÑÑ‚Ð°Ð½)",
		i: "kg"
	}, {
		n: "Laos (àº¥àº²àº§)",
		i: "la"
	}, {
		n: "Latvia (Latvija)",
		i: "lv"
	}, {
		n: "Lebanon (â€«Ù„Ø¨Ù†Ø§Ù†â€¬â€Ž)",
		i: "lb"
	}, {
		n: "Lesotho",
		i: "ls"
	}, {
		n: "Liberia",
		i: "lr"
	}, {
		n: "Libya (â€«Ù„ÙŠØ¨ÙŠØ§â€¬â€Ž)",
		i: "ly"
	}, {
		n: "Liechtenstein",
		i: "li"
	}, {
		n: "Lithuania (Lietuva)",
		i: "lt"
	}, {
		n: "Luxembourg",
		i: "lu"
	}, {
		n: "Macau (æ¾³é–€)",
		i: "mo"
	}, {
		n: "Macedonia (FYROM) (ÐœÐ°ÐºÐµÐ´Ð¾Ð½Ð¸Ñ˜Ð°)",
		i: "mk"
	}, {
		n: "Madagascar (Madagasikara)",
		i: "mg"
	}, {
		n: "Malawi",
		i: "mw"
	}, {
		n: "Malaysia",
		i: "my"
	}, {
		n: "Maldives",
		i: "mv"
	}, {
		n: "Mali",
		i: "ml"
	}, {
		n: "Malta",
		i: "mt"
	}, {
		n: "Marshall Islands",
		i: "mh"
	}, {
		n: "Martinique",
		i: "mq"
	}, {
		n: "Mauritania (â€«Ù…ÙˆØ±ÙŠØªØ§Ù†ÙŠØ§â€¬â€Ž)",
		i: "mr"
	}, {
		n: "Mauritius (Moris)",
		i: "mu"
	}, {
		n: "Mayotte",
		i: "yt"
	}, {
		n: "Mexico (MÃ©xico)",
		i: "mx"
	}, {
		n: "Micronesia",
		i: "fm"
	}, {
		n: "Moldova (Republica Moldova)",
		i: "md"
	}, {
		n: "Monaco",
		i: "mc"
	}, {
		n: "Mongolia (ÐœÐ¾Ð½Ð³Ð¾Ð»)",
		i: "mn"
	}, {
		n: "Montenegro (Crna Gora)",
		i: "me"
	}, {
		n: "Montserrat",
		i: "ms"
	}, {
		n: "Morocco (â€«Ø§Ù„Ù…ØºØ±Ø¨â€¬â€Ž)",
		i: "ma"
	}, {
		n: "Mozambique (MoÃ§ambique)",
		i: "mz"
	}, {
		n: "Myanmar (Burma) (á€™á€¼á€”á€ºá€™á€¬)",
		i: "mm"
	}, {
		n: "Namibia (NamibiÃ«)",
		i: "na"
	}, {
		n: "Nauru",
		i: "nr"
	}, {
		n: "Nepal (à¤¨à¥‡à¤ªà¤¾à¤²)",
		i: "np"
	}, {
		n: "Netherlands (Nederland)",
		i: "nl"
	}, {
		n: "New Caledonia (Nouvelle-CalÃ©donie)",
		i: "nc"
	}, {
		n: "New Zealand",
		i: "nz"
	}, {
		n: "Nicaragua",
		i: "ni"
	}, {
		n: "Niger (Nijar)",
		i: "ne"
	}, {
		n: "Nigeria",
		i: "ng"
	}, {
		n: "Niue",
		i: "nu"
	}, {
		n: "Norfolk Island",
		i: "nf"
	}, {
		n: "North Korea (ì¡°ì„  ë¯¼ì£¼ì£¼ì˜ ì¸ë¯¼ ê³µí™”êµ­)",
		i: "kp"
	}, {
		n: "Northern Mariana Islands",
		i: "mp"
	}, {
		n: "Norway (Norge)",
		i: "no"
	}, {
		n: "Oman (â€«Ø¹ÙÙ…Ø§Ù†â€¬â€Ž)",
		i: "om"
	}, {
		n: "Pakistan (â€«Ù¾Ø§Ú©Ø³ØªØ§Ù†â€¬â€Ž)",
		i: "pk"
	}, {
		n: "Palau",
		i: "pw"
	}, {
		n: "Palestine (â€«ÙÙ„Ø³Ø·ÙŠÙ†â€¬â€Ž)",
		i: "ps"
	}, {
		n: "Panama (PanamÃ¡)",
		i: "pa"
	}, {
		n: "Papua New Guinea",
		i: "pg"
	}, {
		n: "Paraguay",
		i: "py"
	}, {
		n: "Peru (PerÃº)",
		i: "pe"
	}, {
		n: "Philippines",
		i: "ph"
	}, {
		n: "Pitcairn Islands",
		i: "pn"
	}, {
		n: "Poland (Polska)",
		i: "pl"
	}, {
		n: "Portugal",
		i: "pt"
	}, {
		n: "Puerto Rico",
		i: "pr"
	}, {
		n: "Qatar (â€«Ù‚Ø·Ø±â€¬â€Ž)",
		i: "qa"
	}, {
		n: "RÃ©union (La RÃ©union)",
		i: "re"
	}, {
		n: "Romania (RomÃ¢nia)",
		i: "ro"
	}, {
		n: "Russia (Ð Ð¾ÑÑÐ¸Ñ)",
		i: "ru"
	}, {
		n: "Rwanda",
		i: "rw"
	}, {
		n: "Saint BarthÃ©lemy (Saint-BarthÃ©lemy)",
		i: "bl"
	}, {
		n: "Saint Helena",
		i: "sh"
	}, {
		n: "Saint Kitts and Nevis",
		i: "kn"
	}, {
		n: "Saint Lucia",
		i: "lc"
	}, {
		n: "Saint Martin (Saint-Martin (partie franÃ§aise))",
		i: "mf"
	}, {
		n: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
		i: "pm"
	}, {
		n: "Saint Vincent and the Grenadines",
		i: "vc"
	}, {
		n: "Samoa",
		i: "ws"
	}, {
		n: "San Marino",
		i: "sm"
	}, {
		n: "SÃ£o TomÃ© and PrÃ­ncipe (SÃ£o TomÃ© e PrÃ­ncipe)",
		i: "st"
	}, {
		n: "Saudi Arabia (â€«Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©â€¬â€Ž)",
		i: "sa"
	}, {
		n: "Senegal (SÃ©nÃ©gal)",
		i: "sn"
	}, {
		n: "Serbia (Ð¡Ñ€Ð±Ð¸Ñ˜Ð°)",
		i: "rs"
	}, {
		n: "Seychelles",
		i: "sc"
	}, {
		n: "Sierra Leone",
		i: "sl"
	}, {
		n: "Singapore",
		i: "sg"
	}, {
		n: "Sint Maarten",
		i: "sx"
	}, {
		n: "Slovakia (Slovensko)",
		i: "sk"
	}, {
		n: "Slovenia (Slovenija)",
		i: "si"
	}, {
		n: "Solomon Islands",
		i: "sb"
	}, {
		n: "Somalia (Soomaaliya)",
		i: "so"
	}, {
		n: "South Africa",
		i: "za"
	}, {
		n: "South Georgia & South Sandwich Islands",
		i: "gs"
	}, {
		n: "South Korea (ëŒ€í•œë¯¼êµ­)",
		i: "kr"
	}, {
		n: "South Sudan (â€«Ø¬Ù†ÙˆØ¨ Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)",
		i: "ss"
	}, {
		n: "Spain (EspaÃ±a)",
		i: "es"
	}, {
		n: "Sri Lanka (à·à·Šâ€à¶»à·“ à¶½à¶‚à¶šà·à·€)",
		i: "lk"
	}, {
		n: "Sudan (â€«Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)",
		i: "sd"
	}, {
		n: "Suriname",
		i: "sr"
	}, {
		n: "Svalbard and Jan Mayen (Svalbard og Jan Mayen)",
		i: "sj"
	}, {
		n: "Swaziland",
		i: "sz"
	}, {
		n: "Sweden (Sverige)",
		i: "se"
	}, {
		n: "Switzerland (Schweiz)",
		i: "ch"
	}, {
		n: "Syria (â€«Ø³ÙˆØ±ÙŠØ§â€¬â€Ž)",
		i: "sy"
	}, {
		n: "Taiwan (å°ç£)",
		i: "tw"
	}, {
		n: "Tajikistan",
		i: "tj"
	}, {
		n: "Tanzania",
		i: "tz"
	}, {
		n: "Thailand (à¹„à¸—à¸¢)",
		i: "th"
	}, {
		n: "Timor-Leste",
		i: "tl"
	}, {
		n: "Togo",
		i: "tg"
	}, {
		n: "Tokelau",
		i: "tk"
	}, {
		n: "Tonga",
		i: "to"
	}, {
		n: "Trinidad and Tobago",
		i: "tt"
	}, {
		n: "Tunisia (â€«ØªÙˆÙ†Ø³â€¬â€Ž)",
		i: "tn"
	}, {
		n: "Turkey (TÃ¼rkiye)",
		i: "tr"
	}, {
		n: "Turkmenistan",
		i: "tm"
	}, {
		n: "Turks and Caicos Islands",
		i: "tc"
	}, {
		n: "Tuvalu",
		i: "tv"
	}, {
		n: "Uganda",
		i: "ug"
	}, {
		n: "Ukraine (Ð£ÐºÑ€Ð°Ñ—Ð½Ð°)",
		i: "ua"
	}, {
		n: "United Arab Emirates (â€«Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©â€¬â€Ž)",
		i: "ae"
	}, {
		n: "United Kingdom",
		i: "gb"
	}, {
		n: "United States",
		i: "us"
	}, {
		n: "U.S. Minor Outlying Islands",
		i: "um"
	}, {
		n: "U.S. Virgin Islands",
		i: "vi"
	}, {
		n: "Uruguay",
		i: "uy"
	}, {
		n: "Uzbekistan (OÊ»zbekiston)",
		i: "uz"
	}, {
		n: "Vanuatu",
		i: "vu"
	}, {
		n: "Vatican City (CittÃ  del Vaticano)",
		i: "va"
	}, {
		n: "Venezuela",
		i: "ve"
	}, {
		n: "Vietnam (Viá»‡t Nam)",
		i: "vn"
	}, {
		n: "Wallis and Futuna",
		i: "wf"
	}, {
		n: "Western Sahara (â€«Ø§Ù„ØµØ­Ø±Ø§Ø¡ Ø§Ù„ØºØ±Ø¨ÙŠØ©â€¬â€Ž)",
		i: "eh"
	}, {
		n: "Yemen (â€«Ø§Ù„ÙŠÙ…Ù†â€¬â€Ž)",
		i: "ye"
	}, {
		n: "Zambia",
		i: "zm"
	}, {
		n: "Zimbabwe",
		i: "zw"
	}], function(n, i) {
		i.name = i.n, i.iso2 = i.i, delete i.n, delete i.i
	})
});
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register(superpwa_sw.url).then(function(registration) {
			console.log('SuperPWA service worker ready');
			registration.update();
		}).catch(function(error) {
			console.log('Registration failed with ' + error);
		});
		var deferredPrompt;
		window.addEventListener('beforeinstallprompt', function(e) {
			deferredPrompt = e;
			if (deferredPrompt != null || deferredPrompt != undefined) {
				if (superpwa_sw.disable_addtohome == 1) {
					deferredPrompt.preventDefault();
				}
				var a2hsBanner = document.getElementsByClassName("superpwa-sticky-banner");
				if (a2hsBanner.length) {
					deferredPrompt.preventDefault();
					if (superpwa_sw.enableOnDesktop != 1 && !window.mobileCheck()) {
						return;
					}
					if (typeof super_check_bar_closed_or_not == 'function' && !super_check_bar_closed_or_not()) {
						return;
					}
					for (var i = 0; i < a2hsBanner.length; i++) {
						var showbanner = a2hsBanner[i].getAttribute("data-show");
						a2hsBanner[i].style.display = "flex";
					}
				}
			}
		})
		window.addEventListener('appinstalled', function(evt) {
			var a2hsBanner = document.getElementsByClassName("superpwa-sticky-banner");
			if (a2hsBanner.length) {
				for (var i = 0; i < a2hsBanner.length; i++) {
					var showbanner = a2hsBanner[i].getAttribute("data-show");
					a2hsBanner[i].style.display = "none";
				}
			}
		});
		var a2hsviaClass = document.getElementsByClassName("superpwa-add-via-class");
		if (a2hsviaClass !== null) {
			for (var i = 0; i < a2hsviaClass.length; i++) {
				a2hsviaClass[i].addEventListener("click", addToHome);
			}
		}

		function addToHome() {
			if (!deferredPrompt) {
				return;
			}
			deferredPrompt.prompt();
			deferredPrompt.userChoice.then(function(choiceResult) {
				if (choiceResult.outcome === "accepted") {
					var a2hsBanner = document.getElementsByClassName("superpwa-sticky-banner");
					if (a2hsBanner) {
						for (var i = 0; i < a2hsBanner.length; i++) {
							var showbanner = a2hsBanner[i].getAttribute("data-show");
							a2hsBanner[i].style.display = "none";
						}
					}
					console.log("User accepted the prompt");
				} else {
					console.log("User dismissed the prompt");
				}
				deferredPrompt = null;
			});
		}
	});
}
window.mobileCheck = function() {
	let check = false;
	(function(a) {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};
(function(fn) {
	if (typeof define === 'function' && define.amd) {
		define([], fn);
	} else if ((typeof module !== "undefined" && module !== null) && module.exports) {
		module.exports = fn;
	} else {
		fn();
	}
})(function() {
	var assign = Object.assign || window.jQuery && jQuery.extend;
	var threshold = 8;
	var requestFrame = (function() {
		return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(fn, element) {
			return window.setTimeout(function() {
				fn();
			}, 25);
		});
	})();
	var ignoreTags = {
		textarea: true,
		input: true,
		select: true,
		button: true
	};
	var mouseevents = {
		move: 'mousemove',
		cancel: 'mouseup dragstart',
		end: 'mouseup'
	};
	var touchevents = {
		move: 'touchmove',
		cancel: 'touchend',
		end: 'touchend'
	};
	var rspaces = /\s+/;
	var eventOptions = {
		bubbles: true,
		cancelable: true
	};
	var eventsSymbol = Symbol('events');

	function createEvent(type) {
		return new CustomEvent(type, eventOptions);
	}

	function getEvents(node) {
		return node[eventsSymbol] || (node[eventsSymbol] = {});
	}

	function on(node, types, fn, data, selector) {
		types = types.split(rspaces);
		var events = getEvents(node);
		var i = types.length;
		var handlers, type;

		function handler(e) {
			fn(e, data);
		}
		while (i--) {
			type = types[i];
			handlers = events[type] || (events[type] = []);
			handlers.push([fn, handler]);
			node.addEventListener(type, handler);
		}
	}

	function off(node, types, fn, selector) {
		types = types.split(rspaces);
		var events = getEvents(node);
		var i = types.length;
		var type, handlers, k;
		if (!events) {
			return;
		}
		while (i--) {
			type = types[i];
			handlers = events[type];
			if (!handlers) {
				continue;
			}
			k = handlers.length;
			while (k--) {
				if (handlers[k][0] === fn) {
					node.removeEventListener(type, handlers[k][1]);
					handlers.splice(k, 1);
				}
			}
		}
	}

	function trigger(node, type, properties) {
		var event = createEvent(type);
		if (properties) {
			assign(event, properties);
		}
		node.dispatchEvent(event);
	}

	function Timer(fn) {
		var callback = fn,
			active = false,
			running = false;

		function trigger(time) {
			if (active) {
				callback();
				requestFrame(trigger);
				running = true;
				active = false;
			} else {
				running = false;
			}
		}
		this.kick = function(fn) {
			active = true;
			if (!running) {
				trigger();
			}
		};
		this.end = function(fn) {
			var cb = callback;
			if (!fn) {
				return;
			}
			if (!running) {
				fn();
			} else {
				callback = active ? function() {
					cb();
					fn();
				} : fn;
				active = true;
			}
		};
	}

	function noop() {}

	function preventDefault(e) {
		e.preventDefault();
	}

	function isIgnoreTag(e) {
		return !!e.target.tagName && !!ignoreTags[e.target.tagName.toLowerCase()];
	}

	function isPrimaryButton(e) {
		return (e.which === 1 && !e.ctrlKey && !e.altKey);
	}

	function identifiedTouch(touchList, id) {
		var i, l;
		if (touchList.identifiedTouch) {
			return touchList.identifiedTouch(id);
		}
		i = -1;
		l = touchList.length;
		while (++i < l) {
			if (touchList[i].identifier === id) {
				return touchList[i];
			}
		}
	}

	function changedTouch(e, data) {
		var touch = identifiedTouch(e.changedTouches, data.identifier);
		if (!touch) {
			return;
		}
		if (touch.pageX === data.pageX && touch.pageY === data.pageY) {
			return;
		}
		return touch;
	}

	function mousedown(e) {
		if (!isPrimaryButton(e)) {
			return;
		}
		if (isIgnoreTag(e)) {
			return;
		}
		on(document, mouseevents.move, mousemove, e);
		on(document, mouseevents.cancel, mouseend, e);
	}

	function mousemove(e, data) {
		checkThreshold(e, data, e, removeMouse);
	}

	function mouseend(e, data) {
		removeMouse();
	}

	function removeMouse() {
		off(document, mouseevents.move, mousemove);
		off(document, mouseevents.cancel, mouseend);
	}

	function touchstart(e) {
		if (ignoreTags[e.target.tagName.toLowerCase()]) {
			return;
		}
		var touch = e.changedTouches[0];
		var data = {
			target: touch.target,
			pageX: touch.pageX,
			pageY: touch.pageY,
			identifier: touch.identifier,
			touchmove: function(e, data) {
				touchmove(e, data);
			},
			touchend: function(e, data) {
				touchend(e, data);
			}
		};
		on(document, touchevents.move, data.touchmove, data);
		on(document, touchevents.cancel, data.touchend, data);
	}

	function touchmove(e, data) {
		var touch = changedTouch(e, data);
		if (!touch) {
			return;
		}
		checkThreshold(e, data, touch, removeTouch);
	}

	function touchend(e, data) {
		var touch = identifiedTouch(e.changedTouches, data.identifier);
		if (!touch) {
			return;
		}
		removeTouch(data);
	}

	function removeTouch(data) {
		off(document, touchevents.move, data.touchmove);
		off(document, touchevents.cancel, data.touchend);
	}

	function checkThreshold(e, data, touch, fn) {
		var distX = touch.pageX - data.pageX;
		var distY = touch.pageY - data.pageY;
		if ((distX * distX) + (distY * distY) < (threshold * threshold)) {
			return;
		}
		triggerStart(e, data, touch, distX, distY, fn);
	}

	function triggerStart(e, data, touch, distX, distY, fn) {
		var touches = e.targetTouches;
		var time = e.timeStamp - data.timeStamp;
		var template = {
			altKey: e.altKey,
			ctrlKey: e.ctrlKey,
			shiftKey: e.shiftKey,
			startX: data.pageX,
			startY: data.pageY,
			distX: distX,
			distY: distY,
			deltaX: distX,
			deltaY: distY,
			pageX: touch.pageX,
			pageY: touch.pageY,
			velocityX: distX / time,
			velocityY: distY / time,
			identifier: data.identifier,
			targetTouches: touches,
			finger: touches ? touches.length : 1,
			enableMove: function() {
				this.moveEnabled = true;
				this.enableMove = noop;
				e.preventDefault();
			}
		};
		trigger(data.target, 'movestart', template);
		fn(data);
	}

	function activeMousemove(e, data) {
		var timer = data.timer;
		data.touch = e;
		data.timeStamp = e.timeStamp;
		timer.kick();
	}

	function activeMouseend(e, data) {
		var target = data.target;
		var event = data.event;
		var timer = data.timer;
		removeActiveMouse();
		endEvent(target, event, timer, function() {
			setTimeout(function() {
				off(target, 'click', preventDefault);
			}, 0);
		});
	}

	function removeActiveMouse() {
		off(document, mouseevents.move, activeMousemove);
		off(document, mouseevents.end, activeMouseend);
	}

	function activeTouchmove(e, data) {
		var event = data.event;
		var timer = data.timer;
		var touch = changedTouch(e, event);
		if (!touch) {
			return;
		}
		e.preventDefault();
		event.targetTouches = e.targetTouches;
		data.touch = touch;
		data.timeStamp = e.timeStamp;
		timer.kick();
	}

	function activeTouchend(e, data) {
		var target = data.target;
		var event = data.event;
		var timer = data.timer;
		var touch = identifiedTouch(e.changedTouches, event.identifier);
		if (!touch) {
			return;
		}
		removeActiveTouch(data);
		endEvent(target, event, timer);
	}

	function removeActiveTouch(data) {
		off(document, touchevents.move, data.activeTouchmove);
		off(document, touchevents.end, data.activeTouchend);
	}

	function updateEvent(event, touch, timeStamp) {
		var time = timeStamp - event.timeStamp;
		event.distX = touch.pageX - event.startX;
		event.distY = touch.pageY - event.startY;
		event.deltaX = touch.pageX - event.pageX;
		event.deltaY = touch.pageY - event.pageY;
		event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
		event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
		event.pageX = touch.pageX;
		event.pageY = touch.pageY;
	}

	function endEvent(target, event, timer, fn) {
		timer.end(function() {
			trigger(target, 'moveend', event);
			return fn && fn();
		});
	}

	function movestart(e) {
		if (e.defaultPrevented) {
			return;
		}
		if (!e.moveEnabled) {
			return;
		}
		var event = {
			startX: e.startX,
			startY: e.startY,
			pageX: e.pageX,
			pageY: e.pageY,
			distX: e.distX,
			distY: e.distY,
			deltaX: e.deltaX,
			deltaY: e.deltaY,
			velocityX: e.velocityX,
			velocityY: e.velocityY,
			identifier: e.identifier,
			targetTouches: e.targetTouches,
			finger: e.finger
		};
		var data = {
			target: e.target,
			event: event,
			timer: new Timer(update),
			touch: undefined,
			timeStamp: e.timeStamp
		};

		function update(time) {
			updateEvent(event, data.touch, data.timeStamp);
			trigger(data.target, 'move', event);
		}
		if (e.identifier === undefined) {
			on(e.target, 'click', preventDefault);
			on(document, mouseevents.move, activeMousemove, data);
			on(document, mouseevents.end, activeMouseend, data);
		} else {
			data.activeTouchmove = function(e, data) {
				activeTouchmove(e, data);
			};
			data.activeTouchend = function(e, data) {
				activeTouchend(e, data);
			};
			on(document, touchevents.move, data.activeTouchmove, data);
			on(document, touchevents.end, data.activeTouchend, data);
		}
	}
	on(document, 'mousedown', mousedown);
	on(document, 'touchstart', touchstart);
	on(document, 'movestart', movestart);
	if (!window.jQuery) {
		return;
	}
	var properties = ("startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY").split(' ');

	function enableMove1(e) {
		e.enableMove();
	}

	function enableMove2(e) {
		e.enableMove();
	}

	function enableMove3(e) {
		e.enableMove();
	}

	function add(handleObj) {
		var handler = handleObj.handler;
		handleObj.handler = function(e) {
			var i = properties.length;
			var property;
			while (i--) {
				property = properties[i];
				e[property] = e.originalEvent[property];
			}
			handler.apply(this, arguments);
		};
	}
	jQuery.event.special.movestart = {
		setup: function() {
			on(this, 'movestart', enableMove1);
			return false;
		},
		teardown: function() {
			off(this, 'movestart', enableMove1);
			return false;
		},
		add: add
	};
	jQuery.event.special.move = {
		setup: function() {
			on(this, 'movestart', enableMove2);
			return false;
		},
		teardown: function() {
			off(this, 'movestart', enableMove2);
			return false;
		},
		add: add
	};
	jQuery.event.special.moveend = {
		setup: function() {
			on(this, 'movestart', enableMove3);
			return false;
		},
		teardown: function() {
			off(this, 'movestart', enableMove3);
			return false;
		},
		add: add
	};
});

(function(e, t) {
	'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function() {
	'use strict';

	function e(e) {
		return e && '[object Function]' === {}.toString.call(e)
	}

	function t(e, t) {
		if (1 !== e.nodeType) return [];
		var o = e.ownerDocument.defaultView,
			n = o.getComputedStyle(e, null);
		return t ? n[t] : n
	}

	function o(e) {
		return 'HTML' === e.nodeName ? e : e.parentNode || e.host
	}

	function n(e) {
		if (!e) return document.body;
		switch (e.nodeName) {
			case 'HTML':
			case 'BODY':
				return e.ownerDocument.body;
			case '#document':
				return e.body;
		}
		var i = t(e),
			r = i.overflow,
			p = i.overflowX,
			s = i.overflowY;
		return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
	}

	function i(e) {
		return e && e.referenceNode ? e.referenceNode : e
	}

	function r(e) {
		return 11 === e ? re : 10 === e ? pe : re || pe
	}

	function p(e) {
		if (!e) return document.documentElement;
		for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
		var i = n && n.nodeName;
		return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
	}

	function s(e) {
		var t = e.nodeName;
		return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
	}

	function d(e) {
		return null === e.parentNode ? e : d(e.parentNode)
	}

	function a(e, t) {
		if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
		var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
			n = o ? e : t,
			i = o ? t : e,
			r = document.createRange();
		r.setStart(n, 0), r.setEnd(i, 0);
		var l = r.commonAncestorContainer;
		if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
		var f = d(e);
		return f.host ? a(f.host, t) : a(e, d(t).host)
	}

	function l(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
			o = 'top' === t ? 'scrollTop' : 'scrollLeft',
			n = e.nodeName;
		if ('BODY' === n || 'HTML' === n) {
			var i = e.ownerDocument.documentElement,
				r = e.ownerDocument.scrollingElement || i;
			return r[o]
		}
		return e[o]
	}

	function f(e, t) {
		var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
			n = l(t, 'top'),
			i = l(t, 'left'),
			r = o ? -1 : 1;
		return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
	}

	function m(e, t) {
		var o = 'x' === t ? 'Left' : 'Top',
			n = 'Left' == o ? 'Right' : 'Bottom';
		return parseFloat(e['border' + o + 'Width']) + parseFloat(e['border' + n + 'Width'])
	}

	function h(e, t, o, n) {
		return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
	}

	function c(e) {
		var t = e.body,
			o = e.documentElement,
			n = r(10) && getComputedStyle(o);
		return {
			height: h('Height', t, o, n),
			width: h('Width', t, o, n)
		}
	}

	function g(e) {
		return le({}, e, {
			right: e.left + e.width,
			bottom: e.top + e.height
		})
	}

	function u(e) {
		var o = {};
		try {
			if (r(10)) {
				o = e.getBoundingClientRect();
				var n = l(e, 'top'),
					i = l(e, 'left');
				o.top += n, o.left += i, o.bottom += n, o.right += i
			} else o = e.getBoundingClientRect()
		} catch (t) {}
		var p = {
				left: o.left,
				top: o.top,
				width: o.right - o.left,
				height: o.bottom - o.top
			},
			s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
			d = s.width || e.clientWidth || p.width,
			a = s.height || e.clientHeight || p.height,
			f = e.offsetWidth - d,
			h = e.offsetHeight - a;
		if (f || h) {
			var u = t(e);
			f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
		}
		return g(p)
	}

	function b(e, o) {
		var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
			p = r(10),
			s = 'HTML' === o.nodeName,
			d = u(e),
			a = u(o),
			l = n(e),
			m = t(o),
			h = parseFloat(m.borderTopWidth),
			c = parseFloat(m.borderLeftWidth);
		i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
		var b = g({
			top: d.top - a.top - h,
			left: d.left - a.left - c,
			width: d.width,
			height: d.height
		});
		if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
			var w = parseFloat(m.marginTop),
				y = parseFloat(m.marginLeft);
			b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y
		}
		return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
	}

	function w(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
			o = e.ownerDocument.documentElement,
			n = b(e, o),
			i = ee(o.clientWidth, window.innerWidth || 0),
			r = ee(o.clientHeight, window.innerHeight || 0),
			p = t ? 0 : l(o),
			s = t ? 0 : l(o, 'left'),
			d = {
				top: p - n.top + n.marginTop,
				left: s - n.left + n.marginLeft,
				width: i,
				height: r
			};
		return g(d)
	}

	function y(e) {
		var n = e.nodeName;
		if ('BODY' === n || 'HTML' === n) return !1;
		if ('fixed' === t(e, 'position')) return !0;
		var i = o(e);
		return !!i && y(i)
	}

	function E(e) {
		if (!e || !e.parentElement || r()) return document.documentElement;
		for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
		return o || document.documentElement
	}

	function v(e, t, r, p) {
		var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
			d = {
				top: 0,
				left: 0
			},
			l = s ? E(e) : a(e, i(t));
		if ('viewport' === p) d = w(l, s);
		else {
			var f;
			'scrollParent' === p ? (f = n(o(t)), 'BODY' === f.nodeName && (f = e.ownerDocument.documentElement)) : 'window' === p ? f = e.ownerDocument.documentElement : f = p;
			var m = b(f, l, s);
			if ('HTML' === f.nodeName && !y(l)) {
				var h = c(e.ownerDocument),
					g = h.height,
					u = h.width;
				d.top += m.top - m.marginTop, d.bottom = g + m.top, d.left += m.left - m.marginLeft, d.right = u + m.left
			} else d = m
		}
		r = r || 0;
		var v = 'number' == typeof r;
		return d.left += v ? r : r.left || 0, d.top += v ? r : r.top || 0, d.right -= v ? r : r.right || 0, d.bottom -= v ? r : r.bottom || 0, d
	}

	function x(e) {
		var t = e.width,
			o = e.height;
		return t * o
	}

	function O(e, t, o, n, i) {
		var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
		if (-1 === e.indexOf('auto')) return e;
		var p = v(o, n, r, i),
			s = {
				top: {
					width: p.width,
					height: t.top - p.top
				},
				right: {
					width: p.right - t.right,
					height: p.height
				},
				bottom: {
					width: p.width,
					height: p.bottom - t.bottom
				},
				left: {
					width: t.left - p.left,
					height: p.height
				}
			},
			d = Object.keys(s).map(function(e) {
				return le({
					key: e
				}, s[e], {
					area: x(s[e])
				})
			}).sort(function(e, t) {
				return t.area - e.area
			}),
			a = d.filter(function(e) {
				var t = e.width,
					n = e.height;
				return t >= o.clientWidth && n >= o.clientHeight
			}),
			l = 0 < a.length ? a[0].key : d[0].key,
			f = e.split('-')[1];
		return l + (f ? '-' + f : '')
	}

	function L(e, t, o) {
		var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
			r = n ? E(t) : a(t, i(o));
		return b(o, r, n)
	}

	function S(e) {
		var t = e.ownerDocument.defaultView,
			o = t.getComputedStyle(e),
			n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
			i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
			r = {
				width: e.offsetWidth + i,
				height: e.offsetHeight + n
			};
		return r
	}

	function T(e) {
		var t = {
			left: 'right',
			right: 'left',
			bottom: 'top',
			top: 'bottom'
		};
		return e.replace(/left|right|bottom|top/g, function(e) {
			return t[e]
		})
	}

	function C(e, t, o) {
		o = o.split('-')[0];
		var n = S(e),
			i = {
				width: n.width,
				height: n.height
			},
			r = -1 !== ['right', 'left'].indexOf(o),
			p = r ? 'top' : 'left',
			s = r ? 'left' : 'top',
			d = r ? 'height' : 'width',
			a = r ? 'width' : 'height';
		return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
	}

	function D(e, t) {
		return Array.prototype.find ? e.find(t) : e.filter(t)[0]
	}

	function N(e, t, o) {
		if (Array.prototype.findIndex) return e.findIndex(function(e) {
			return e[t] === o
		});
		var n = D(e, function(e) {
			return e[t] === o
		});
		return e.indexOf(n)
	}

	function P(t, o, n) {
		var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
		return i.forEach(function(t) {
			t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
			var n = t['function'] || t.fn;
			t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
		}), o
	}

	function k() {
		if (!this.state.isDestroyed) {
			var e = {
				instance: this,
				styles: {},
				arrowStyles: {},
				attributes: {},
				flipped: !1,
				offsets: {}
			};
			e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
		}
	}

	function W(e, t) {
		return e.some(function(e) {
			var o = e.name,
				n = e.enabled;
			return n && o === t
		})
	}

	function B(e) {
		for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
			var i = t[n],
				r = i ? '' + i + o : e;
			if ('undefined' != typeof document.body.style[r]) return r
		}
		return null
	}

	function H() {
		return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
	}

	function A(e) {
		var t = e.ownerDocument;
		return t ? t.defaultView : window
	}

	function M(e, t, o, i) {
		var r = 'BODY' === e.nodeName,
			p = r ? e.ownerDocument.defaultView : e;
		p.addEventListener(t, o, {
			passive: !0
		}), r || M(n(p.parentNode), t, o, i), i.push(p)
	}

	function F(e, t, o, i) {
		o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
			passive: !0
		});
		var r = n(e);
		return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
	}

	function I() {
		this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
	}

	function R(e, t) {
		return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
			e.removeEventListener('scroll', t.updateBound)
		}), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
	}

	function U() {
		this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
	}

	function Y(e) {
		return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
	}

	function V(e, t) {
		Object.keys(t).forEach(function(o) {
			var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
		})
	}

	function j(e, t) {
		Object.keys(t).forEach(function(o) {
			var n = t[o];
			!1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
		})
	}

	function q(e, t) {
		var o = e.offsets,
			n = o.popper,
			i = o.reference,
			r = $,
			p = function(e) {
				return e
			},
			s = r(i.width),
			d = r(n.width),
			a = -1 !== ['left', 'right'].indexOf(e.placement),
			l = -1 !== e.placement.indexOf('-'),
			f = t ? a || l || s % 2 == d % 2 ? r : Z : p,
			m = t ? r : p;
		return {
			left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
			top: m(n.top),
			bottom: m(n.bottom),
			right: f(n.right)
		}
	}

	function K(e, t, o) {
		var n = D(e, function(e) {
				var o = e.name;
				return o === t
			}),
			i = !!n && e.some(function(e) {
				return e.name === o && e.enabled && e.order < n.order
			});
		if (!i) {
			var r = '`' + t + '`';
			console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
		}
		return i
	}

	function z(e) {
		return 'end' === e ? 'start' : 'start' === e ? 'end' : e
	}

	function G(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
			o = he.indexOf(e),
			n = he.slice(o + 1).concat(he.slice(0, o));
		return t ? n.reverse() : n
	}

	function _(e, t, o, n) {
		var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
			r = +i[1],
			p = i[2];
		if (!r) return e;
		if (0 === p.indexOf('%')) {
			var s;
			switch (p) {
				case '%p':
					s = o;
					break;
				case '%':
				case '%r':
				default:
					s = n;
			}
			var d = g(s);
			return d[t] / 100 * r
		}
		if ('vh' === p || 'vw' === p) {
			var a;
			return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
		}
		return r
	}

	function X(e, t, o, n) {
		var i = [0, 0],
			r = -1 !== ['right', 'left'].indexOf(n),
			p = e.split(/(\+|\-)/).map(function(e) {
				return e.trim()
			}),
			s = p.indexOf(D(p, function(e) {
				return -1 !== e.search(/,|\s/)
			}));
		p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
		var d = /\s*,\s*|\s+/,
			a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
		return a = a.map(function(e, n) {
			var i = (1 === n ? !r : r) ? 'height' : 'width',
				p = !1;
			return e.reduce(function(e, t) {
				return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
			}, []).map(function(e) {
				return _(e, i, t, o)
			})
		}), a.forEach(function(e, t) {
			e.forEach(function(o, n) {
				Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
			})
		}), i
	}

	function J(e, t) {
		var o, n = t.offset,
			i = e.placement,
			r = e.offsets,
			p = r.popper,
			s = r.reference,
			d = i.split('-')[0];
		return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
	}
	var Q = Math.min,
		Z = Math.floor,
		$ = Math.round,
		ee = Math.max,
		te = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator,
		oe = function() {
			for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)
				if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
			return 0
		}(),
		ne = te && window.Promise,
		ie = ne ? function(e) {
			var t = !1;
			return function() {
				t || (t = !0, window.Promise.resolve().then(function() {
					t = !1, e()
				}))
			}
		} : function(e) {
			var t = !1;
			return function() {
				t || (t = !0, setTimeout(function() {
					t = !1, e()
				}, oe))
			}
		},
		re = te && !!(window.MSInputMethodContext && document.documentMode),
		pe = te && /MSIE 10/.test(navigator.userAgent),
		se = function(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
		},
		de = function() {
			function e(e, t) {
				for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
			}
			return function(t, o, n) {
				return o && e(t.prototype, o), n && e(t, n), t
			}
		}(),
		ae = function(e, t, o) {
			return t in e ? Object.defineProperty(e, t, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = o, e
		},
		le = Object.assign || function(e) {
			for (var t, o = 1; o < arguments.length; o++)
				for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			return e
		},
		fe = te && /Firefox/i.test(navigator.userAgent),
		me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
		he = me.slice(3),
		ce = {
			FLIP: 'flip',
			CLOCKWISE: 'clockwise',
			COUNTERCLOCKWISE: 'counterclockwise'
		},
		ge = function() {
			function t(o, n) {
				var i = this,
					r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
				se(this, t), this.scheduleUpdate = function() {
					return requestAnimationFrame(i.update)
				}, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
					isDestroyed: !1,
					isCreated: !1,
					scrollParents: []
				}, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
					i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
				}), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
					return le({
						name: e
					}, i.options.modifiers[e])
				}).sort(function(e, t) {
					return e.order - t.order
				}), this.modifiers.forEach(function(t) {
					t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
				}), this.update();
				var p = this.options.eventsEnabled;
				p && this.enableEventListeners(), this.state.eventsEnabled = p
			}
			return de(t, [{
				key: 'update',
				value: function() {
					return k.call(this)
				}
			}, {
				key: 'destroy',
				value: function() {
					return H.call(this)
				}
			}, {
				key: 'enableEventListeners',
				value: function() {
					return I.call(this)
				}
			}, {
				key: 'disableEventListeners',
				value: function() {
					return U.call(this)
				}
			}]), t
		}();
	return ge.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ge.placements = me, ge.Defaults = {
		placement: 'bottom',
		positionFixed: !1,
		eventsEnabled: !0,
		removeOnDestroy: !1,
		onCreate: function() {},
		onUpdate: function() {},
		modifiers: {
			shift: {
				order: 100,
				enabled: !0,
				fn: function(e) {
					var t = e.placement,
						o = t.split('-')[0],
						n = t.split('-')[1];
					if (n) {
						var i = e.offsets,
							r = i.reference,
							p = i.popper,
							s = -1 !== ['bottom', 'top'].indexOf(o),
							d = s ? 'left' : 'top',
							a = s ? 'width' : 'height',
							l = {
								start: ae({}, d, r[d]),
								end: ae({}, d, r[d] + r[a] - p[a])
							};
						e.offsets.popper = le({}, p, l[n])
					}
					return e
				}
			},
			offset: {
				order: 200,
				enabled: !0,
				fn: J,
				offset: 0
			},
			preventOverflow: {
				order: 300,
				enabled: !0,
				fn: function(e, t) {
					var o = t.boundariesElement || p(e.instance.popper);
					e.instance.reference === o && (o = p(o));
					var n = B('transform'),
						i = e.instance.popper.style,
						r = i.top,
						s = i.left,
						d = i[n];
					i.top = '', i.left = '', i[n] = '';
					var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
					i.top = r, i.left = s, i[n] = d, t.boundaries = a;
					var l = t.priority,
						f = e.offsets.popper,
						m = {
							primary: function(e) {
								var o = f[e];
								return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), ae({}, e, o)
							},
							secondary: function(e) {
								var o = 'right' === e ? 'left' : 'top',
									n = f[o];
								return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n)
							}
						};
					return l.forEach(function(e) {
						var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
						f = le({}, f, m[t](e))
					}), e.offsets.popper = f, e
				},
				priority: ['left', 'right', 'top', 'bottom'],
				padding: 5,
				boundariesElement: 'scrollParent'
			},
			keepTogether: {
				order: 400,
				enabled: !0,
				fn: function(e) {
					var t = e.offsets,
						o = t.popper,
						n = t.reference,
						i = e.placement.split('-')[0],
						r = Z,
						p = -1 !== ['top', 'bottom'].indexOf(i),
						s = p ? 'right' : 'bottom',
						d = p ? 'left' : 'top',
						a = p ? 'width' : 'height';
					return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
				}
			},
			arrow: {
				order: 500,
				enabled: !0,
				fn: function(e, o) {
					var n;
					if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
					var i = o.element;
					if ('string' == typeof i) {
						if (i = e.instance.popper.querySelector(i), !i) return e;
					} else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
					var r = e.placement.split('-')[0],
						p = e.offsets,
						s = p.popper,
						d = p.reference,
						a = -1 !== ['left', 'right'].indexOf(r),
						l = a ? 'height' : 'width',
						f = a ? 'Top' : 'Left',
						m = f.toLowerCase(),
						h = a ? 'left' : 'top',
						c = a ? 'bottom' : 'right',
						u = S(i)[l];
					d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
					var b = d[m] + d[l] / 2 - u / 2,
						w = t(e.instance.popper),
						y = parseFloat(w['margin' + f]),
						E = parseFloat(w['border' + f + 'Width']),
						v = b - e.offsets.popper[m] - y - E;
					return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, $(v)), ae(n, h, ''), n), e
				},
				element: '[x-arrow]'
			},
			flip: {
				order: 600,
				enabled: !0,
				fn: function(e, t) {
					if (W(e.instance.modifiers, 'inner')) return e;
					if (e.flipped && e.placement === e.originalPlacement) return e;
					var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
						n = e.placement.split('-')[0],
						i = T(n),
						r = e.placement.split('-')[1] || '',
						p = [];
					switch (t.behavior) {
						case ce.FLIP:
							p = [n, i];
							break;
						case ce.CLOCKWISE:
							p = G(n);
							break;
						case ce.COUNTERCLOCKWISE:
							p = G(n, !0);
							break;
						default:
							p = t.behavior;
					}
					return p.forEach(function(s, d) {
						if (n !== s || p.length === d + 1) return e;
						n = e.placement.split('-')[0], i = T(n);
						var a = e.offsets.popper,
							l = e.offsets.reference,
							f = Z,
							m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
							h = f(a.left) < f(o.left),
							c = f(a.right) > f(o.right),
							g = f(a.top) < f(o.top),
							u = f(a.bottom) > f(o.bottom),
							b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
							w = -1 !== ['top', 'bottom'].indexOf(n),
							y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u),
							E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g),
							v = y || E;
						(m || b || v) && (e.flipped = !0, (m || b) && (n = p[d + 1]), v && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
					}), e
				},
				behavior: 'flip',
				padding: 5,
				boundariesElement: 'viewport',
				flipVariations: !1,
				flipVariationsByContent: !1
			},
			inner: {
				order: 700,
				enabled: !1,
				fn: function(e) {
					var t = e.placement,
						o = t.split('-')[0],
						n = e.offsets,
						i = n.popper,
						r = n.reference,
						p = -1 !== ['left', 'right'].indexOf(o),
						s = -1 === ['top', 'left'].indexOf(o);
					return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
				}
			},
			hide: {
				order: 800,
				enabled: !0,
				fn: function(e) {
					if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
					var t = e.offsets.reference,
						o = D(e.instance.modifiers, function(e) {
							return 'preventOverflow' === e.name
						}).boundaries;
					if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
						if (!0 === e.hide) return e;
						e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
					} else {
						if (!1 === e.hide) return e;
						e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
					}
					return e
				}
			},
			computeStyle: {
				order: 850,
				enabled: !0,
				fn: function(e, t) {
					var o = t.x,
						n = t.y,
						i = e.offsets.popper,
						r = D(e.instance.modifiers, function(e) {
							return 'applyStyle' === e.name
						}).gpuAcceleration;
					void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
					var s, d, a = void 0 === r ? t.gpuAcceleration : r,
						l = p(e.instance.popper),
						f = u(l),
						m = {
							position: i.position
						},
						h = q(e, 2 > window.devicePixelRatio || !fe),
						c = 'bottom' === o ? 'top' : 'bottom',
						g = 'right' === n ? 'left' : 'right',
						b = B('transform');
					if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';
					else {
						var w = 'bottom' == c ? -1 : 1,
							y = 'right' == g ? -1 : 1;
						m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g
					}
					var E = {
						"x-placement": e.placement
					};
					return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e
				},
				gpuAcceleration: !0,
				x: 'bottom',
				y: 'right'
			},
			applyStyle: {
				order: 900,
				enabled: !0,
				fn: function(e) {
					return V(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e
				},
				onLoad: function(e, t, o, n, i) {
					var r = L(i, t, e, o.positionFixed),
						p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
					return t.setAttribute('x-placement', p), V(t, {
						position: o.positionFixed ? 'fixed' : 'absolute'
					}), o
				},
				gpuAcceleration: void 0
			}
		}
	}, ge
});
/*!
 * Bootstrap v4.5.2 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, (function(t, e, n) {
	"use strict";

	function i(t, e) {
		for (var n = 0; n < e.length; n++) {
			var i = e[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function o(t, e, n) {
		return e && i(t.prototype, e), n && i(t, n), t
	}

	function s() {
		return (s = Object.assign || function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
			}
			return t
		}).apply(this, arguments)
	}
	e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;

	function r(t) {
		var n = this,
			i = !1;
		return e(this).one(a.TRANSITION_END, (function() {
			i = !0
		})), setTimeout((function() {
			i || a.triggerTransitionEnd(n)
		}), t), this
	}
	var a = {
		TRANSITION_END: "bsTransitionEnd",
		getUID: function(t) {
			do {
				t += ~~(1e6 * Math.random())
			} while (document.getElementById(t));
			return t
		},
		getSelectorFromElement: function(t) {
			var e = t.getAttribute("data-target");
			if (!e || "#" === e) {
				var n = t.getAttribute("href");
				e = n && "#" !== n ? n.trim() : ""
			}
			try {
				return document.querySelector(e) ? e : null
			} catch (t) {
				return null
			}
		},
		getTransitionDurationFromElement: function(t) {
			if (!t) return 0;
			var n = e(t).css("transition-duration"),
				i = e(t).css("transition-delay"),
				o = parseFloat(n),
				s = parseFloat(i);
			return o || s ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
		},
		reflow: function(t) {
			return t.offsetHeight
		},
		triggerTransitionEnd: function(t) {
			e(t).trigger("transitionend")
		},
		supportsTransitionEnd: function() {
			return Boolean("transitionend")
		},
		isElement: function(t) {
			return (t[0] || t).nodeType
		},
		typeCheckConfig: function(t, e, n) {
			for (var i in n)
				if (Object.prototype.hasOwnProperty.call(n, i)) {
					var o = n[i],
						s = e[i],
						r = s && a.isElement(s) ? "element" : null === (l = s) || "undefined" == typeof l ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
					if (!new RegExp(o).test(r)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + r + '" but expected type "' + o + '".')
				} var l
		},
		findShadowRoot: function(t) {
			if (!document.documentElement.attachShadow) return null;
			if ("function" == typeof t.getRootNode) {
				var e = t.getRootNode();
				return e instanceof ShadowRoot ? e : null
			}
			return t instanceof ShadowRoot ? t : t.parentNode ? a.findShadowRoot(t.parentNode) : null
		},
		jQueryDetection: function() {
			if ("undefined" == typeof e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
			var t = e.fn.jquery.split(" ")[0].split(".");
			if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
		}
	};
	a.jQueryDetection(), e.fn.emulateTransitionEnd = r, e.event.special[a.TRANSITION_END] = {
		bindType: "transitionend",
		delegateType: "transitionend",
		handle: function(t) {
			if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
		}
	};
	var l = "alert",
		c = e.fn[l],
		h = function() {
			function t(t) {
				this._element = t
			}
			var n = t.prototype;
			return n.close = function(t) {
				var e = this._element;
				t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
			}, n.dispose = function() {
				e.removeData(this._element, "bs.alert"), this._element = null
			}, n._getRootElement = function(t) {
				var n = a.getSelectorFromElement(t),
					i = !1;
				return n && (i = document.querySelector(n)), i || (i = e(t).closest(".alert")[0]), i
			}, n._triggerCloseEvent = function(t) {
				var n = e.Event("close.bs.alert");
				return e(t).trigger(n), n
			}, n._removeElement = function(t) {
				var n = this;
				if (e(t).removeClass("show"), e(t).hasClass("fade")) {
					var i = a.getTransitionDurationFromElement(t);
					e(t).one(a.TRANSITION_END, (function(e) {
						return n._destroyElement(t, e)
					})).emulateTransitionEnd(i)
				} else this._destroyElement(t)
			}, n._destroyElement = function(t) {
				e(t).detach().trigger("closed.bs.alert").remove()
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this),
						o = i.data("bs.alert");
					o || (o = new t(this), i.data("bs.alert", o)), "close" === n && o[n](this)
				}))
			}, t._handleDismiss = function(t) {
				return function(e) {
					e && e.preventDefault(), t.close(this)
				}
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.5.2"
				}
			}]), t
		}();
	e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', h._handleDismiss(new h)), e.fn[l] = h._jQueryInterface, e.fn[l].Constructor = h, e.fn[l].noConflict = function() {
		return e.fn[l] = c, h._jQueryInterface
	};
	var u = e.fn.button,
		d = function() {
			function t(t) {
				this._element = t
			}
			var n = t.prototype;
			return n.toggle = function() {
				var t = !0,
					n = !0,
					i = e(this._element).closest('[data-toggle="buttons"]')[0];
				if (i) {
					var o = this._element.querySelector('input:not([type="hidden"])');
					if (o) {
						if ("radio" === o.type)
							if (o.checked && this._element.classList.contains("active")) t = !1;
							else {
								var s = i.querySelector(".active");
								s && e(s).removeClass("active")
							} t && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains("active")), e(o).trigger("change")), o.focus(), n = !1
					}
				}
				this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && e(this._element).toggleClass("active"))
			}, n.dispose = function() {
				e.removeData(this._element, "bs.button"), this._element = null
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this).data("bs.button");
					i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.5.2"
				}
			}]), t
		}();
	e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(t) {
		var n = t.target,
			i = n;
		if (e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) t.preventDefault();
		else {
			var o = n.querySelector('input:not([type="hidden"])');
			if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault();
			("LABEL" !== i.tagName || o && "checkbox" !== o.type) && d._jQueryInterface.call(e(n), "toggle")
		}
	})).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(t) {
		var n = e(t.target).closest(".btn")[0];
		e(n).toggleClass("focus", /^focus(in)?$/.test(t.type))
	})), e(window).on("load.bs.button.data-api", (function() {
		for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
			var i = t[e],
				o = i.querySelector('input:not([type="hidden"])');
			o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
		}
		for (var s = 0, r = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; s < r; s++) {
			var a = t[s];
			"true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
		}
	})), e.fn.button = d._jQueryInterface, e.fn.button.Constructor = d, e.fn.button.noConflict = function() {
		return e.fn.button = u, d._jQueryInterface
	};
	var f = "carousel",
		g = ".bs.carousel",
		m = e.fn[f],
		p = {
			interval: 5e3,
			keyboard: !0,
			slide: !1,
			pause: "hover",
			wrap: !0,
			touch: !0
		},
		_ = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			slide: "(boolean|string)",
			pause: "(string|boolean)",
			wrap: "boolean",
			touch: "boolean"
		},
		v = {
			TOUCH: "touch",
			PEN: "pen"
		},
		b = function() {
			function t(t, e) {
				this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
			}
			var n = t.prototype;
			return n.next = function() {
				this._isSliding || this._slide("next")
			}, n.nextWhenVisible = function() {
				!document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
			}, n.prev = function() {
				this._isSliding || this._slide("prev")
			}, n.pause = function(t) {
				t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
			}, n.cycle = function(t) {
				t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
			}, n.to = function(t) {
				var n = this;
				this._activeElement = this._element.querySelector(".active.carousel-item");
				var i = this._getItemIndex(this._activeElement);
				if (!(t > this._items.length - 1 || t < 0))
					if (this._isSliding) e(this._element).one("slid.bs.carousel", (function() {
						return n.to(t)
					}));
					else {
						if (i === t) return this.pause(), void this.cycle();
						var o = t > i ? "next" : "prev";
						this._slide(o, this._items[t])
					}
			}, n.dispose = function() {
				e(this._element).off(g), e.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
			}, n._getConfig = function(t) {
				return t = s({}, p, t), a.typeCheckConfig(f, t, _), t
			}, n._handleSwipe = function() {
				var t = Math.abs(this.touchDeltaX);
				if (!(t <= 40)) {
					var e = t / this.touchDeltaX;
					this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
				}
			}, n._addEventListeners = function() {
				var t = this;
				this._config.keyboard && e(this._element).on("keydown.bs.carousel", (function(e) {
					return t._keydown(e)
				})), "hover" === this._config.pause && e(this._element).on("mouseenter.bs.carousel", (function(e) {
					return t.pause(e)
				})).on("mouseleave.bs.carousel", (function(e) {
					return t.cycle(e)
				})), this._config.touch && this._addTouchEventListeners()
			}, n._addTouchEventListeners = function() {
				var t = this;
				if (this._touchSupported) {
					var n = function(e) {
							t._pointerEvent && v[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
						},
						i = function(e) {
							t._pointerEvent && v[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) {
								return t.cycle(e)
							}), 500 + t._config.interval))
						};
					e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(t) {
						return t.preventDefault()
					})), this._pointerEvent ? (e(this._element).on("pointerdown.bs.carousel", (function(t) {
						return n(t)
					})), e(this._element).on("pointerup.bs.carousel", (function(t) {
						return i(t)
					})), this._element.classList.add("pointer-event")) : (e(this._element).on("touchstart.bs.carousel", (function(t) {
						return n(t)
					})), e(this._element).on("touchmove.bs.carousel", (function(e) {
						return function(e) {
							e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
						}(e)
					})), e(this._element).on("touchend.bs.carousel", (function(t) {
						return i(t)
					})))
				}
			}, n._keydown = function(t) {
				if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
					case 37:
						t.preventDefault(), this.prev();
						break;
					case 39:
						t.preventDefault(), this.next()
				}
			}, n._getItemIndex = function(t) {
				return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
			}, n._getItemByDirection = function(t, e) {
				var n = "next" === t,
					i = "prev" === t,
					o = this._getItemIndex(e),
					s = this._items.length - 1;
				if ((i && 0 === o || n && o === s) && !this._config.wrap) return e;
				var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
				return -1 === r ? this._items[this._items.length - 1] : this._items[r]
			}, n._triggerSlideEvent = function(t, n) {
				var i = this._getItemIndex(t),
					o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
					s = e.Event("slide.bs.carousel", {
						relatedTarget: t,
						direction: n,
						from: o,
						to: i
					});
				return e(this._element).trigger(s), s
			}, n._setActiveIndicatorElement = function(t) {
				if (this._indicatorsElement) {
					var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
					e(n).removeClass("active");
					var i = this._indicatorsElement.children[this._getItemIndex(t)];
					i && e(i).addClass("active")
				}
			}, n._slide = function(t, n) {
				var i, o, s, r = this,
					l = this._element.querySelector(".active.carousel-item"),
					c = this._getItemIndex(l),
					h = n || l && this._getItemByDirection(t, l),
					u = this._getItemIndex(h),
					d = Boolean(this._interval);
				if ("next" === t ? (i = "carousel-item-left", o = "carousel-item-next", s = "left") : (i = "carousel-item-right", o = "carousel-item-prev", s = "right"), h && e(h).hasClass("active")) this._isSliding = !1;
				else if (!this._triggerSlideEvent(h, s).isDefaultPrevented() && l && h) {
					this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(h);
					var f = e.Event("slid.bs.carousel", {
						relatedTarget: h,
						direction: s,
						from: c,
						to: u
					});
					if (e(this._element).hasClass("slide")) {
						e(h).addClass(o), a.reflow(h), e(l).addClass(i), e(h).addClass(i);
						var g = parseInt(h.getAttribute("data-interval"), 10);
						g ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = g) : this._config.interval = this._config.defaultInterval || this._config.interval;
						var m = a.getTransitionDurationFromElement(l);
						e(l).one(a.TRANSITION_END, (function() {
							e(h).removeClass(i + " " + o).addClass("active"), e(l).removeClass("active " + o + " " + i), r._isSliding = !1, setTimeout((function() {
								return e(r._element).trigger(f)
							}), 0)
						})).emulateTransitionEnd(m)
					} else e(l).removeClass("active"), e(h).addClass("active"), this._isSliding = !1, e(this._element).trigger(f);
					d && this.cycle()
				}
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this).data("bs.carousel"),
						o = s({}, p, e(this).data());
					"object" == typeof n && (o = s({}, o, n));
					var r = "string" == typeof n ? n : o.slide;
					if (i || (i = new t(this, o), e(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
					else if ("string" == typeof r) {
						if ("undefined" == typeof i[r]) throw new TypeError('No method named "' + r + '"');
						i[r]()
					} else o.interval && o.ride && (i.pause(), i.cycle())
				}))
			}, t._dataApiClickHandler = function(n) {
				var i = a.getSelectorFromElement(this);
				if (i) {
					var o = e(i)[0];
					if (o && e(o).hasClass("carousel")) {
						var r = s({}, e(o).data(), e(this).data()),
							l = this.getAttribute("data-slide-to");
						l && (r.interval = !1), t._jQueryInterface.call(e(o), r), l && e(o).data("bs.carousel").to(l), n.preventDefault()
					}
				}
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.5.2"
				}
			}, {
				key: "Default",
				get: function() {
					return p
				}
			}]), t
		}();
	e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", b._dataApiClickHandler), e(window).on("load.bs.carousel.data-api", (function() {
		for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
			var o = e(t[n]);
			b._jQueryInterface.call(o, o.data())
		}
	})), e.fn[f] = b._jQueryInterface, e.fn[f].Constructor = b, e.fn[f].noConflict = function() {
		return e.fn[f] = m, b._jQueryInterface
	};
	var y = "collapse",
		E = e.fn[y],
		w = {
			toggle: !0,
			parent: ""
		},
		T = {
			toggle: "boolean",
			parent: "(string|element)"
		},
		C = function() {
			function t(t, e) {
				this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
				for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
					var s = n[i],
						r = a.getSelectorFromElement(s),
						l = [].slice.call(document.querySelectorAll(r)).filter((function(e) {
							return e === t
						}));
					null !== r && l.length > 0 && (this._selector = r, this._triggerArray.push(s))
				}
				this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
			}
			var n = t.prototype;
			return n.toggle = function() {
				e(this._element).hasClass("show") ? this.hide() : this.show()
			}, n.show = function() {
				var n, i, o = this;
				if (!this._isTransitioning && !e(this._element).hasClass("show") && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) {
						return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse")
					}))).length && (n = null), !(n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
					var s = e.Event("show.bs.collapse");
					if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
						n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));
						var r = this._getDimension();
						e(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[r] = 0, this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
						var l = "scroll" + (r[0].toUpperCase() + r.slice(1)),
							c = a.getTransitionDurationFromElement(this._element);
						e(this._element).one(a.TRANSITION_END, (function() {
							e(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[r] = "", o.setTransitioning(!1), e(o._element).trigger("shown.bs.collapse")
						})).emulateTransitionEnd(c), this._element.style[r] = this._element[l] + "px"
					}
				}
			}, n.hide = function() {
				var t = this;
				if (!this._isTransitioning && e(this._element).hasClass("show")) {
					var n = e.Event("hide.bs.collapse");
					if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
						var i = this._getDimension();
						this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), e(this._element).addClass("collapsing").removeClass("collapse show");
						var o = this._triggerArray.length;
						if (o > 0)
							for (var s = 0; s < o; s++) {
								var r = this._triggerArray[s],
									l = a.getSelectorFromElement(r);
								if (null !== l) e([].slice.call(document.querySelectorAll(l))).hasClass("show") || e(r).addClass("collapsed").attr("aria-expanded", !1)
							}
						this.setTransitioning(!0);
						this._element.style[i] = "";
						var c = a.getTransitionDurationFromElement(this._element);
						e(this._element).one(a.TRANSITION_END, (function() {
							t.setTransitioning(!1), e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
						})).emulateTransitionEnd(c)
					}
				}
			}, n.setTransitioning = function(t) {
				this._isTransitioning = t
			}, n.dispose = function() {
				e.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
			}, n._getConfig = function(t) {
				return (t = s({}, w, t)).toggle = Boolean(t.toggle), a.typeCheckConfig(y, t, T), t
			}, n._getDimension = function() {
				return e(this._element).hasClass("width") ? "width" : "height"
			}, n._getParent = function() {
				var n, i = this;
				a.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
				var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
					s = [].slice.call(n.querySelectorAll(o));
				return e(s).each((function(e, n) {
					i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
				})), n
			}, n._addAriaAndCollapsedClass = function(t, n) {
				var i = e(t).hasClass("show");
				n.length && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
			}, t._getTargetFromElement = function(t) {
				var e = a.getSelectorFromElement(t);
				return e ? document.querySelector(e) : null
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this),
						o = i.data("bs.collapse"),
						r = s({}, w, i.data(), "object" == typeof n && n ? n : {});
					if (!o && r.toggle && "string" == typeof n && /show|hide/.test(n) && (r.toggle = !1), o || (o = new t(this, r), i.data("bs.collapse", o)), "string" == typeof n) {
						if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
						o[n]()
					}
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.5.2"
				}
			}, {
				key: "Default",
				get: function() {
					return w
				}
			}]), t
		}();
	e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(t) {
		"A" === t.currentTarget.tagName && t.preventDefault();
		var n = e(this),
			i = a.getSelectorFromElement(this),
			o = [].slice.call(document.querySelectorAll(i));
		e(o).each((function() {
			var t = e(this),
				i = t.data("bs.collapse") ? "toggle" : n.data();
			C._jQueryInterface.call(t, i)
		}))
	})), e.fn[y] = C._jQueryInterface, e.fn[y].Constructor = C, e.fn[y].noConflict = function() {
		return e.fn[y] = E, C._jQueryInterface
	};
	var S = "dropdown",
		k = e.fn[S],
		D = new RegExp("38|40|27"),
		N = {
			offset: 0,
			flip: !0,
			boundary: "scrollParent",
			reference: "toggle",
			display: "dynamic",
			popperConfig: null
		},
		A = {
			offset: "(number|string|function)",
			flip: "boolean",
			boundary: "(string|element)",
			reference: "(string|element)",
			display: "string",
			popperConfig: "(null|object)"
		},
		I = function() {
			function t(t, e) {
				this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
			}
			var i = t.prototype;
			return i.toggle = function() {
				if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
					var n = e(this._menu).hasClass("show");
					t._clearMenus(), n || this.show(!0)
				}
			}, i.show = function(i) {
				if (void 0 === i && (i = !1), !(this._element.disabled || e(this._element).hasClass("disabled") || e(this._menu).hasClass("show"))) {
					var o = {
							relatedTarget: this._element
						},
						s = e.Event("show.bs.dropdown", o),
						r = t._getParentFromElement(this._element);
					if (e(r).trigger(s), !s.isDefaultPrevented()) {
						if (!this._inNavbar && i) {
							if ("undefined" == typeof n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
							var l = this._element;
							"parent" === this._config.reference ? l = r : a.isElement(this._config.reference) && (l = this._config.reference, "undefined" != typeof this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(r).addClass("position-static"), this._popper = new n(l, this._menu, this._getPopperConfig())
						}
						"ontouchstart" in document.documentElement && 0 === e(r).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass("show"), e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown", o))
					}
				}
			}, i.hide = function() {
				if (!this._element.disabled && !e(this._element).hasClass("disabled") && e(this._menu).hasClass("show")) {
					var n = {
							relatedTarget: this._element
						},
						i = e.Event("hide.bs.dropdown", n),
						o = t._getParentFromElement(this._element);
					e(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass("show"), e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", n)))
				}
			}, i.dispose = function() {
				e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
			}, i.update = function() {
				this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
			}, i._addEventListeners = function() {
				var t = this;
				e(this._element).on("click.bs.dropdown", (function(e) {
					e.preventDefault(), e.stopPropagation(), t.toggle()
				}))
			}, i._getConfig = function(t) {
				return t = s({}, this.constructor.Default, e(this._element).data(), t), a.typeCheckConfig(S, t, this.constructor.DefaultType), t
			}, i._getMenuElement = function() {
				if (!this._menu) {
					var e = t._getParentFromElement(this._element);
					e && (this._menu = e.querySelector(".dropdown-menu"))
				}
				return this._menu
			}, i._getPlacement = function() {
				var t = e(this._element.parentNode),
					n = "bottom-start";
				return t.hasClass("dropup") ? n = e(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
			}, i._detectNavbar = function() {
				return e(this._element).closest(".navbar").length > 0
			}, i._getOffset = function() {
				var t = this,
					e = {};
				return "function" == typeof this._config.offset ? e.fn = function(e) {
					return e.offsets = s({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
				} : e.offset = this._config.offset, e
			}, i._getPopperConfig = function() {
				var t = {
					placement: this._getPlacement(),
					modifiers: {
						offset: this._getOffset(),
						flip: {
							enabled: this._config.flip
						},
						preventOverflow: {
							boundariesElement: this._config.boundary
						}
					}
				};
				return "static" === this._config.display && (t.modifiers.applyStyle = {
					enabled: !1
				}), s({}, t, this._config.popperConfig)
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this).data("bs.dropdown");
					if (i || (i = new t(this, "object" == typeof n ? n : null), e(this).data("bs.dropdown", i)), "string" == typeof n) {
						if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
						i[n]()
					}
				}))
			}, t._clearMenus = function(n) {
				if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
					for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, s = i.length; o < s; o++) {
						var r = t._getParentFromElement(i[o]),
							a = e(i[o]).data("bs.dropdown"),
							l = {
								relatedTarget: i[o]
							};
						if (n && "click" === n.type && (l.clickEvent = n), a) {
							var c = a._menu;
							if (e(r).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(r, n.target))) {
								var h = e.Event("hide.bs.dropdown", l);
								e(r).trigger(h), h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), e(c).removeClass("show"), e(r).removeClass("show").trigger(e.Event("hidden.bs.dropdown", l)))
							}
						}
					}
			}, t._getParentFromElement = function(t) {
				var e, n = a.getSelectorFromElement(t);
				return n && (e = document.querySelector(n)), e || t.parentNode
			}, t._dataApiKeydownHandler = function(n) {
				if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(".dropdown-menu").length) : !D.test(n.which)) && !this.disabled && !e(this).hasClass("disabled")) {
					var i = t._getParentFromElement(this),
						o = e(i).hasClass("show");
					if (o || 27 !== n.which) {
						if (n.preventDefault(), n.stopPropagation(), !o || o && (27 === n.which || 32 === n.which)) return 27 === n.which && e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void e(this).trigger("click");
						var s = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) {
							return e(t).is(":visible")
						}));
						if (0 !== s.length) {
							var r = s.indexOf(n.target);
							38 === n.which && r > 0 && r--, 40 === n.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
						}
					}
				}
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.5.2"
				}
			}, {
				key: "Default",
				get: function() {
					return N
				}
			}, {
				key: "DefaultType",
				get: function() {
					return A
				}
			}]), t
		}();
	e(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', I._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", I._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", I._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function(t) {
		t.preventDefault(), t.stopPropagation(), I._jQueryInterface.call(e(this), "toggle")
	})).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
		t.stopPropagation()
	})), e.fn[S] = I._jQueryInterface, e.fn[S].Constructor = I, e.fn[S].noConflict = function() {
		return e.fn[S] = k, I._jQueryInterface
	};
	var O = e.fn.modal,
		j = {
			backdrop: !0,
			keyboard: !0,
			focus: !0,
			show: !0
		},
		x = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			focus: "boolean",
			show: "boolean"
		},
		P = function() {
			function t(t, e) {
				this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
			}
			var n = t.prototype;
			return n.toggle = function(t) {
				return this._isShown ? this.hide() : this.show(t)
			}, n.show = function(t) {
				var n = this;
				if (!this._isShown && !this._isTransitioning) {
					e(this._element).hasClass("fade") && (this._isTransitioning = !0);
					var i = e.Event("show.bs.modal", {
						relatedTarget: t
					});
					e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function(t) {
						return n.hide(t)
					})), e(this._dialog).on("mousedown.dismiss.bs.modal", (function() {
						e(n._element).one("mouseup.dismiss.bs.modal", (function(t) {
							e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
						}))
					})), this._showBackdrop((function() {
						return n._showElement(t)
					})))
				}
			}, n.hide = function(t) {
				var n = this;
				if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
					var i = e.Event("hide.bs.modal");
					if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
						this._isShown = !1;
						var o = e(this._element).hasClass("fade");
						if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off("focusin.bs.modal"), e(this._element).removeClass("show"), e(this._element).off("click.dismiss.bs.modal"), e(this._dialog).off("mousedown.dismiss.bs.modal"), o) {
							var s = a.getTransitionDurationFromElement(this._element);
							e(this._element).one(a.TRANSITION_END, (function(t) {
								return n._hideModal(t)
							})).emulateTransitionEnd(s)
						} else this._hideModal()
					}
				}
			}, n.dispose = function() {
				[window, this._element, this._dialog].forEach((function(t) {
					return e(t).off(".bs.modal")
				})), e(document).off("focusin.bs.modal"), e.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
			}, n.handleUpdate = function() {
				this._adjustDialog()
			}, n._getConfig = function(t) {
				return t = s({}, j, t), a.typeCheckConfig("modal", t, x), t
			}, n._triggerBackdropTransition = function() {
				var t = this;
				if ("static" === this._config.backdrop) {
					var n = e.Event("hidePrevented.bs.modal");
					if (e(this._element).trigger(n), n.defaultPrevented) return;
					var i = this._element.scrollHeight > document.documentElement.clientHeight;
					i || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
					var o = a.getTransitionDurationFromElement(this._dialog);
					e(this._element).off(a.TRANSITION_END), e(this._element).one(a.TRANSITION_END, (function() {
						t._element.classList.remove("modal-static"), i || e(t._element).one(a.TRANSITION_END, (function() {
							t._element.style.overflowY = ""
						})).emulateTransitionEnd(t._element, o)
					})).emulateTransitionEnd(o), this._element.focus()
				} else this.hide()
			}, n._showElement = function(t) {
				var n = this,
					i = e(this._element).hasClass("fade"),
					o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
				this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), e(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, i && a.reflow(this._element), e(this._element).addClass("show"), this._config.focus && this._enforceFocus();
				var s = e.Event("shown.bs.modal", {
						relatedTarget: t
					}),
					r = function() {
						n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(s)
					};
				if (i) {
					var l = a.getTransitionDurationFromElement(this._dialog);
					e(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(l)
				} else r()
			}, n._enforceFocus = function() {
				var t = this;
				e(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(n) {
					document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
				}))
			}, n._setEscapeEvent = function() {
				var t = this;
				this._isShown ? e(this._element).on("keydown.dismiss.bs.modal", (function(e) {
					t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
				})) : this._isShown || e(this._element).off("keydown.dismiss.bs.modal")
			}, n._setResizeEvent = function() {
				var t = this;
				this._isShown ? e(window).on("resize.bs.modal", (function(e) {
					return t.handleUpdate(e)
				})) : e(window).off("resize.bs.modal")
			}, n._hideModal = function() {
				var t = this;
				this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
					e(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger("hidden.bs.modal")
				}))
			}, n._removeBackdrop = function() {
				this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
			}, n._showBackdrop = function(t) {
				var n = this,
					i = e(this._element).hasClass("fade") ? "fade" : "";
				if (this._isShown && this._config.backdrop) {
					if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on("click.dismiss.bs.modal", (function(t) {
							n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && n._triggerBackdropTransition()
						})), i && a.reflow(this._backdrop), e(this._backdrop).addClass("show"), !t) return;
					if (!i) return void t();
					var o = a.getTransitionDurationFromElement(this._backdrop);
					e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(o)
				} else if (!this._isShown && this._backdrop) {
					e(this._backdrop).removeClass("show");
					var s = function() {
						n._removeBackdrop(), t && t()
					};
					if (e(this._element).hasClass("fade")) {
						var r = a.getTransitionDurationFromElement(this._backdrop);
						e(this._backdrop).one(a.TRANSITION_END, s).emulateTransitionEnd(r)
					} else s()
				} else t && t()
			}, n._adjustDialog = function() {
				var t = this._element.scrollHeight > document.documentElement.clientHeight;
				!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
			}, n._resetAdjustments = function() {
				this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
			}, n._checkScrollbar = function() {
				var t = document.body.getBoundingClientRect();
				this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
			}, n._setScrollbar = function() {
				var t = this;
				if (this._isBodyOverflowing) {
					var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
						i = [].slice.call(document.querySelectorAll(".sticky-top"));
					e(n).each((function(n, i) {
						var o = i.style.paddingRight,
							s = e(i).css("padding-right");
						e(i).data("padding-right", o).css("padding-right", parseFloat(s) + t._scrollbarWidth + "px")
					})), e(i).each((function(n, i) {
						var o = i.style.marginRight,
							s = e(i).css("margin-right");
						e(i).data("margin-right", o).css("margin-right", parseFloat(s) - t._scrollbarWidth + "px")
					}));
					var o = document.body.style.paddingRight,
						s = e(document.body).css("padding-right");
					e(document.body).data("padding-right", o).css("padding-right", parseFloat(s) + this._scrollbarWidth + "px")
				}
				e(document.body).addClass("modal-open")
			}, n._resetScrollbar = function() {
				var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
				e(t).each((function(t, n) {
					var i = e(n).data("padding-right");
					e(n).removeData("padding-right"), n.style.paddingRight = i || ""
				}));
				var n = [].slice.call(document.querySelectorAll(".sticky-top"));
				e(n).each((function(t, n) {
					var i = e(n).data("margin-right");
					"undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right")
				}));
				var i = e(document.body).data("padding-right");
				e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
			}, n._getScrollbarWidth = function() {
				var t = document.createElement("div");
				t.className = "modal-scrollbar-measure", document.body.appendChild(t);
				var e = t.getBoundingClientRect().width - t.clientWidth;
				return document.body.removeChild(t), e
			}, t._jQueryInterface = function(n, i) {
				return this.each((function() {
					var o = e(this).data("bs.modal"),
						r = s({}, j, e(this).data(), "object" == typeof n && n ? n : {});
					if (o || (o = new t(this, r), e(this).data("bs.modal", o)), "string" == typeof n) {
						if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
						o[n](i)
					} else r.show && o.show(i)
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.5.2"
				}
			}, {
				key: "Default",
				get: function() {
					return j
				}
			}]), t
		}();
	e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(t) {
		var n, i = this,
			o = a.getSelectorFromElement(this);
		o && (n = document.querySelector(o));
		var r = e(n).data("bs.modal") ? "toggle" : s({}, e(n).data(), e(this).data());
		"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
		var l = e(n).one("show.bs.modal", (function(t) {
			t.isDefaultPrevented() || l.one("hidden.bs.modal", (function() {
				e(i).is(":visible") && i.focus()
			}))
		}));
		P._jQueryInterface.call(e(n), r, this)
	})), e.fn.modal = P._jQueryInterface, e.fn.modal.Constructor = P, e.fn.modal.noConflict = function() {
		return e.fn.modal = O, P._jQueryInterface
	};
	var R = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
		L = {
			"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
			a: ["target", "href", "title", "rel"],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: ["src", "srcset", "alt", "title", "width", "height"],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: []
		},
		q = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
		F = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

	function Q(t, e, n) {
		if (0 === t.length) return t;
		if (n && "function" == typeof n) return n(t);
		for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), s = [].slice.call(i.body.querySelectorAll("*")), r = function(t, n) {
				var i = s[t],
					r = i.nodeName.toLowerCase();
				if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
				var a = [].slice.call(i.attributes),
					l = [].concat(e["*"] || [], e[r] || []);
				a.forEach((function(t) {
					(function(t, e) {
						var n = t.nodeName.toLowerCase();
						if (-1 !== e.indexOf(n)) return -1 === R.indexOf(n) || Boolean(t.nodeValue.match(q) || t.nodeValue.match(F));
						for (var i = e.filter((function(t) {
								return t instanceof RegExp
							})), o = 0, s = i.length; o < s; o++)
							if (n.match(i[o])) return !0;
						return !1
					})(t, l) || i.removeAttribute(t.nodeName)
				}))
			}, a = 0, l = s.length; a < l; a++) r(a);
		return i.body.innerHTML
	}
	var B = "tooltip",
		H = e.fn[B],
		U = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
		M = ["sanitize", "whiteList", "sanitizeFn"],
		W = {
			animation: "boolean",
			template: "string",
			title: "(string|element|function)",
			trigger: "string",
			delay: "(number|object)",
			html: "boolean",
			selector: "(string|boolean)",
			placement: "(string|function)",
			offset: "(number|string|function)",
			container: "(string|element|boolean)",
			fallbackPlacement: "(string|array)",
			boundary: "(string|element)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			whiteList: "object",
			popperConfig: "(null|object)"
		},
		V = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: "right",
			BOTTOM: "bottom",
			LEFT: "left"
		},
		z = {
			animation: !0,
			template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			selector: !1,
			placement: "top",
			offset: 0,
			container: !1,
			fallbackPlacement: "flip",
			boundary: "scrollParent",
			sanitize: !0,
			sanitizeFn: null,
			whiteList: L,
			popperConfig: null
		},
		K = {
			HIDE: "hide.bs.tooltip",
			HIDDEN: "hidden.bs.tooltip",
			SHOW: "show.bs.tooltip",
			SHOWN: "shown.bs.tooltip",
			INSERTED: "inserted.bs.tooltip",
			CLICK: "click.bs.tooltip",
			FOCUSIN: "focusin.bs.tooltip",
			FOCUSOUT: "focusout.bs.tooltip",
			MOUSEENTER: "mouseenter.bs.tooltip",
			MOUSELEAVE: "mouseleave.bs.tooltip"
		},
		X = function() {
			function t(t, e) {
				if ("undefined" == typeof n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
				this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
			}
			var i = t.prototype;
			return i.enable = function() {
				this._isEnabled = !0
			}, i.disable = function() {
				this._isEnabled = !1
			}, i.toggleEnabled = function() {
				this._isEnabled = !this._isEnabled
			}, i.toggle = function(t) {
				if (this._isEnabled)
					if (t) {
						var n = this.constructor.DATA_KEY,
							i = e(t.currentTarget).data(n);
						i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
					} else {
						if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
						this._enter(null, this)
					}
			}, i.dispose = function() {
				clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
			}, i.show = function() {
				var t = this;
				if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
				var i = e.Event(this.constructor.Event.SHOW);
				if (this.isWithContent() && this._isEnabled) {
					e(this.element).trigger(i);
					var o = a.findShadowRoot(this.element),
						s = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
					if (i.isDefaultPrevented() || !s) return;
					var r = this.getTipElement(),
						l = a.getUID(this.constructor.NAME);
					r.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(r).addClass("fade");
					var c = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
						h = this._getAttachment(c);
					this.addAttachmentClass(h);
					var u = this._getContainer();
					e(r).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, this._getPopperConfig(h)), e(r).addClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
					var d = function() {
						t.config.animation && t._fixTransition();
						var n = t._hoverState;
						t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), "out" === n && t._leave(null, t)
					};
					if (e(this.tip).hasClass("fade")) {
						var f = a.getTransitionDurationFromElement(this.tip);
						e(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(f)
					} else d()
				}
			}, i.hide = function(t) {
				var n = this,
					i = this.getTipElement(),
					o = e.Event(this.constructor.Event.HIDE),
					s = function() {
						"show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
					};
				if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
					if (e(i).removeClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, e(this.tip).hasClass("fade")) {
						var r = a.getTransitionDurationFromElement(i);
						e(i).one(a.TRANSITION_END, s).emulateTransitionEnd(r)
					} else s();
					this._hoverState = ""
				}
			}, i.update = function() {
				null !== this._popper && this._popper.scheduleUpdate()
			}, i.isWithContent = function() {
				return Boolean(this.getTitle())
			}, i.addAttachmentClass = function(t) {
				e(this.getTipElement()).addClass("bs-tooltip-" + t)
			}, i.getTipElement = function() {
				return this.tip = this.tip || e(this.config.template)[0], this.tip
			}, i.setContent = function() {
				var t = this.getTipElement();
				this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass("fade show")
			}, i.setElementContent = function(t, n) {
				"object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Q(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
			}, i.getTitle = function() {
				var t = this.element.getAttribute("data-original-title");
				return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
			}, i._getPopperConfig = function(t) {
				var e = this;
				return s({}, {
					placement: t,
					modifiers: {
						offset: this._getOffset(),
						flip: {
							behavior: this.config.fallbackPlacement
						},
						arrow: {
							element: ".arrow"
						},
						preventOverflow: {
							boundariesElement: this.config.boundary
						}
					},
					onCreate: function(t) {
						t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
					},
					onUpdate: function(t) {
						return e._handlePopperPlacementChange(t)
					}
				}, this.config.popperConfig)
			}, i._getOffset = function() {
				var t = this,
					e = {};
				return "function" == typeof this.config.offset ? e.fn = function(e) {
					return e.offsets = s({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
				} : e.offset = this.config.offset, e
			}, i._getContainer = function() {
				return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
			}, i._getAttachment = function(t) {
				return V[t.toUpperCase()]
			}, i._setListeners = function() {
				var t = this;
				this.config.trigger.split(" ").forEach((function(n) {
					if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
						return t.toggle(e)
					}));
					else if ("manual" !== n) {
						var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
							o = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
						e(t.element).on(i, t.config.selector, (function(e) {
							return t._enter(e)
						})).on(o, t.config.selector, (function(e) {
							return t._leave(e)
						}))
					}
				})), this._hideModalHandler = function() {
					t.element && t.hide()
				}, e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, {
					trigger: "manual",
					selector: ""
				}) : this._fixTitle()
			}, i._fixTitle = function() {
				var t = typeof this.element.getAttribute("data-original-title");
				(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
			}, i._enter = function(t, n) {
				var i = this.constructor.DATA_KEY;
				(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() {
					"show" === n._hoverState && n.show()
				}), n.config.delay.show) : n.show())
			}, i._leave = function(t, n) {
				var i = this.constructor.DATA_KEY;
				(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() {
					"out" === n._hoverState && n.hide()
				}), n.config.delay.hide) : n.hide())
			}, i._isWithActiveTrigger = function() {
				for (var t in this._activeTrigger)
					if (this._activeTrigger[t]) return !0;
				return !1
			}, i._getConfig = function(t) {
				var n = e(this.element).data();
				return Object.keys(n).forEach((function(t) {
					-1 !== M.indexOf(t) && delete n[t]
				})), "number" == typeof(t = s({}, this.constructor.Default, n, "object" == typeof t && t ? t : {})).delay && (t.delay = {
					show: t.delay,
					hide: t.delay
				}), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), a.typeCheckConfig(B, t, this.constructor.DefaultType), t.sanitize && (t.template = Q(t.template, t.whiteList, t.sanitizeFn)), t
			}, i._getDelegateConfig = function() {
				var t = {};
				if (this.config)
					for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
				return t
			}, i._cleanTipClass = function() {
				var t = e(this.getTipElement()),
					n = t.attr("class").match(U);
				null !== n && n.length && t.removeClass(n.join(""))
			}, i._handlePopperPlacementChange = function(t) {
				this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
			}, i._fixTransition = function() {
				var t = this.getTipElement(),
					n = this.config.animation;
				null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this).data("bs.tooltip"),
						o = "object" == typeof n && n;
					if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, o), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
						if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
						i[n]()
					}
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.5.2"
				}
			}, {
				key: "Default",
				get: function() {
					return z
				}
			}, {
				key: "NAME",
				get: function() {
					return B
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return "bs.tooltip"
				}
			}, {
				key: "Event",
				get: function() {
					return K
				}
			}, {
				key: "EVENT_KEY",
				get: function() {
					return ".bs.tooltip"
				}
			}, {
				key: "DefaultType",
				get: function() {
					return W
				}
			}]), t
		}();
	e.fn[B] = X._jQueryInterface, e.fn[B].Constructor = X, e.fn[B].noConflict = function() {
		return e.fn[B] = H, X._jQueryInterface
	};
	var Y = "popover",
		$ = e.fn[Y],
		J = new RegExp("(^|\\s)bs-popover\\S+", "g"),
		G = s({}, X.Default, {
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		}),
		Z = s({}, X.DefaultType, {
			content: "(string|element|function)"
		}),
		tt = {
			HIDE: "hide.bs.popover",
			HIDDEN: "hidden.bs.popover",
			SHOW: "show.bs.popover",
			SHOWN: "shown.bs.popover",
			INSERTED: "inserted.bs.popover",
			CLICK: "click.bs.popover",
			FOCUSIN: "focusin.bs.popover",
			FOCUSOUT: "focusout.bs.popover",
			MOUSEENTER: "mouseenter.bs.popover",
			MOUSELEAVE: "mouseleave.bs.popover"
		},
		et = function(t) {
			var n, i;

			function s() {
				return t.apply(this, arguments) || this
			}
			i = t, (n = s).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
			var r = s.prototype;
			return r.isWithContent = function() {
				return this.getTitle() || this._getContent()
			}, r.addAttachmentClass = function(t) {
				e(this.getTipElement()).addClass("bs-popover-" + t)
			}, r.getTipElement = function() {
				return this.tip = this.tip || e(this.config.template)[0], this.tip
			}, r.setContent = function() {
				var t = e(this.getTipElement());
				this.setElementContent(t.find(".popover-header"), this.getTitle());
				var n = this._getContent();
				"function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show")
			}, r._getContent = function() {
				return this.element.getAttribute("data-content") || this.config.content
			}, r._cleanTipClass = function() {
				var t = e(this.getTipElement()),
					n = t.attr("class").match(J);
				null !== n && n.length > 0 && t.removeClass(n.join(""))
			}, s._jQueryInterface = function(t) {
				return this.each((function() {
					var n = e(this).data("bs.popover"),
						i = "object" == typeof t ? t : null;
					if ((n || !/dispose|hide/.test(t)) && (n || (n = new s(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
						if ("undefined" == typeof n[t]) throw new TypeError('No method named "' + t + '"');
						n[t]()
					}
				}))
			}, o(s, null, [{
				key: "VERSION",
				get: function() {
					return "4.5.2"
				}
			}, {
				key: "Default",
				get: function() {
					return G
				}
			}, {
				key: "NAME",
				get: function() {
					return Y
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return "bs.popover"
				}
			}, {
				key: "Event",
				get: function() {
					return tt
				}
			}, {
				key: "EVENT_KEY",
				get: function() {
					return ".bs.popover"
				}
			}, {
				key: "DefaultType",
				get: function() {
					return Z
				}
			}]), s
		}(X);
	e.fn[Y] = et._jQueryInterface, e.fn[Y].Constructor = et, e.fn[Y].noConflict = function() {
		return e.fn[Y] = $, et._jQueryInterface
	};
	var nt = "scrollspy",
		it = e.fn[nt],
		ot = {
			offset: 10,
			method: "auto",
			target: ""
		},
		st = {
			offset: "number",
			method: "string",
			target: "(string|element)"
		},
		rt = function() {
			function t(t, n) {
				var i = this;
				this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on("scroll.bs.scrollspy", (function(t) {
					return i._process(t)
				})), this.refresh(), this._process()
			}
			var n = t.prototype;
			return n.refresh = function() {
				var t = this,
					n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
					i = "auto" === this._config.method ? n : this._config.method,
					o = "position" === i ? this._getScrollTop() : 0;
				this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(t) {
					var n, s = a.getSelectorFromElement(t);
					if (s && (n = document.querySelector(s)), n) {
						var r = n.getBoundingClientRect();
						if (r.width || r.height) return [e(n)[i]().top + o, s]
					}
					return null
				})).filter((function(t) {
					return t
				})).sort((function(t, e) {
					return t[0] - e[0]
				})).forEach((function(e) {
					t._offsets.push(e[0]), t._targets.push(e[1])
				}))
			}, n.dispose = function() {
				e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
			}, n._getConfig = function(t) {
				if ("string" != typeof(t = s({}, ot, "object" == typeof t && t ? t : {})).target && a.isElement(t.target)) {
					var n = e(t.target).attr("id");
					n || (n = a.getUID(nt), e(t.target).attr("id", n)), t.target = "#" + n
				}
				return a.typeCheckConfig(nt, t, st), t
			}, n._getScrollTop = function() {
				return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
			}, n._getScrollHeight = function() {
				return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
			}, n._getOffsetHeight = function() {
				return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
			}, n._process = function() {
				var t = this._getScrollTop() + this._config.offset,
					e = this._getScrollHeight(),
					n = this._config.offset + e - this._getOffsetHeight();
				if (this._scrollHeight !== e && this.refresh(), t >= n) {
					var i = this._targets[this._targets.length - 1];
					this._activeTarget !== i && this._activate(i)
				} else {
					if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
					for (var o = this._offsets.length; o--;) {
						this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
					}
				}
			}, n._activate = function(t) {
				this._activeTarget = t, this._clear();
				var n = this._selector.split(",").map((function(e) {
						return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
					})),
					i = e([].slice.call(document.querySelectorAll(n.join(","))));
				i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), e(this._scrollElement).trigger("activate.bs.scrollspy", {
					relatedTarget: t
				})
			}, n._clear = function() {
				[].slice.call(document.querySelectorAll(this._selector)).filter((function(t) {
					return t.classList.contains("active")
				})).forEach((function(t) {
					return t.classList.remove("active")
				}))
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this).data("bs.scrollspy");
					if (i || (i = new t(this, "object" == typeof n && n), e(this).data("bs.scrollspy", i)), "string" == typeof n) {
						if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
						i[n]()
					}
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.5.2"
				}
			}, {
				key: "Default",
				get: function() {
					return ot
				}
			}]), t
		}();
	e(window).on("load.bs.scrollspy.data-api", (function() {
		for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--;) {
			var i = e(t[n]);
			rt._jQueryInterface.call(i, i.data())
		}
	})), e.fn[nt] = rt._jQueryInterface, e.fn[nt].Constructor = rt, e.fn[nt].noConflict = function() {
		return e.fn[nt] = it, rt._jQueryInterface
	};
	var at = e.fn.tab,
		lt = function() {
			function t(t) {
				this._element = t
			}
			var n = t.prototype;
			return n.show = function() {
				var t = this;
				if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active") || e(this._element).hasClass("disabled"))) {
					var n, i, o = e(this._element).closest(".nav, .list-group")[0],
						s = a.getSelectorFromElement(this._element);
					if (o) {
						var r = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
						i = (i = e.makeArray(e(o).find(r)))[i.length - 1]
					}
					var l = e.Event("hide.bs.tab", {
							relatedTarget: this._element
						}),
						c = e.Event("show.bs.tab", {
							relatedTarget: i
						});
					if (i && e(i).trigger(l), e(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
						s && (n = document.querySelector(s)), this._activate(this._element, o);
						var h = function() {
							var n = e.Event("hidden.bs.tab", {
									relatedTarget: t._element
								}),
								o = e.Event("shown.bs.tab", {
									relatedTarget: i
								});
							e(i).trigger(n), e(t._element).trigger(o)
						};
						n ? this._activate(n, n.parentNode, h) : h()
					}
				}
			}, n.dispose = function() {
				e.removeData(this._element, "bs.tab"), this._element = null
			}, n._activate = function(t, n, i) {
				var o = this,
					s = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(".active") : e(n).find("> li > .active"))[0],
					r = i && s && e(s).hasClass("fade"),
					l = function() {
						return o._transitionComplete(t, s, i)
					};
				if (s && r) {
					var c = a.getTransitionDurationFromElement(s);
					e(s).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(c)
				} else l()
			}, n._transitionComplete = function(t, n, i) {
				if (n) {
					e(n).removeClass("active");
					var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
					o && e(o).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
				}
				if (e(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
					var s = e(t).closest(".dropdown")[0];
					if (s) {
						var r = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
						e(r).addClass("active")
					}
					t.setAttribute("aria-expanded", !0)
				}
				i && i()
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this),
						o = i.data("bs.tab");
					if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
						if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
						o[n]()
					}
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.5.2"
				}
			}]), t
		}();
	e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) {
		t.preventDefault(), lt._jQueryInterface.call(e(this), "show")
	})), e.fn.tab = lt._jQueryInterface, e.fn.tab.Constructor = lt, e.fn.tab.noConflict = function() {
		return e.fn.tab = at, lt._jQueryInterface
	};
	var ct = e.fn.toast,
		ht = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		},
		ut = {
			animation: !0,
			autohide: !0,
			delay: 500
		},
		dt = function() {
			function t(t, e) {
				this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
			}
			var n = t.prototype;
			return n.show = function() {
				var t = this,
					n = e.Event("show.bs.toast");
				if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
					this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
					var i = function() {
						t._element.classList.remove("showing"), t._element.classList.add("show"), e(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function() {
							t.hide()
						}), t._config.delay))
					};
					if (this._element.classList.remove("hide"), a.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
						var o = a.getTransitionDurationFromElement(this._element);
						e(this._element).one(a.TRANSITION_END, i).emulateTransitionEnd(o)
					} else i()
				}
			}, n.hide = function() {
				if (this._element.classList.contains("show")) {
					var t = e.Event("hide.bs.toast");
					e(this._element).trigger(t), t.isDefaultPrevented() || this._close()
				}
			}, n.dispose = function() {
				this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), e(this._element).off("click.dismiss.bs.toast"), e.removeData(this._element, "bs.toast"), this._element = null, this._config = null
			}, n._getConfig = function(t) {
				return t = s({}, ut, e(this._element).data(), "object" == typeof t && t ? t : {}), a.typeCheckConfig("toast", t, this.constructor.DefaultType), t
			}, n._setListeners = function() {
				var t = this;
				e(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function() {
					return t.hide()
				}))
			}, n._close = function() {
				var t = this,
					n = function() {
						t._element.classList.add("hide"), e(t._element).trigger("hidden.bs.toast")
					};
				if (this._element.classList.remove("show"), this._config.animation) {
					var i = a.getTransitionDurationFromElement(this._element);
					e(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
				} else n()
			}, n._clearTimeout = function() {
				clearTimeout(this._timeout), this._timeout = null
			}, t._jQueryInterface = function(n) {
				return this.each((function() {
					var i = e(this),
						o = i.data("bs.toast");
					if (o || (o = new t(this, "object" == typeof n && n), i.data("bs.toast", o)), "string" == typeof n) {
						if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
						o[n](this)
					}
				}))
			}, o(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.5.2"
				}
			}, {
				key: "DefaultType",
				get: function() {
					return ht
				}
			}, {
				key: "Default",
				get: function() {
					return ut
				}
			}]), t
		}();
	e.fn.toast = dt._jQueryInterface, e.fn.toast.Constructor = dt, e.fn.toast.noConflict = function() {
		return e.fn.toast = ct, dt._jQueryInterface
	}, t.Alert = h, t.Button = d, t.Carousel = b, t.Collapse = C, t.Dropdown = I, t.Modal = P, t.Popover = et, t.Scrollspy = rt, t.Tab = lt, t.Toast = dt, t.Tooltip = X, t.Util = a, Object.defineProperty(t, "__esModule", {
		value: !0
	})
}));;

! function(a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		}, this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		}, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
			this._handlers[c] = a.proxy(this[c], this)
		}, this)), a.each(e.Plugins, a.proxy(function(a, b) {
			this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Workers, a.proxy(function(b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}
	e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		checkVisibility: !0,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		fallbackEasing: "swing",
		slideTransition: "",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, e.Type = {
		Event: "event",
		State: "state"
	}, e.Plugins = {}, e.Workers = [{
		filter: ["width", "settings"],
		run: function() {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = this.settings.margin || "",
				c = !this.settings.autoWidth,
				d = this.settings.rtl,
				e = {
					width: "auto",
					"margin-left": d ? b : "",
					"margin-right": d ? "" : b
				};
			!c && this.$stage.children().css(e), a.css = e
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				c = null,
				d = this._items.length,
				e = !this.settings.autoWidth,
				f = [];
			for (a.items = {
					merge: !1,
					width: b
				}; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
			this._widths = f
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			var b = [],
				c = this._items,
				d = this.settings,
				e = Math.max(2 * d.items, 4),
				f = 2 * Math.ceil(c.length / 2),
				g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
				h = "",
				i = "";
			for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
			this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
			this._coordinates = f
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			var a = this.settings.stagePadding,
				b = this._coordinates,
				c = {
					width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
					"padding-left": a || "",
					"padding-right": a || ""
				};
			this.$stage.css(c)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = this._coordinates.length,
				c = !this.settings.autoWidth,
				d = this.$stage.children();
			if (c && a.items.merge)
				for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
			else c && (a.css.width = a.items.width, d.css(a.css))
		}
	}, {
		filter: ["items"],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
		}
	}, {
		filter: ["position"],
		run: function() {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function() {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1,
				f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f,
				h = g + this.width() * e,
				i = [];
			for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
		}
	}], e.prototype.initializeStage = function() {
		this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
			class: this.settings.stageClass
		}).wrap(a("<div/>", {
			class: this.settings.stageOuterClass
		})), this.$element.append(this.$stage.parent()))
	}, e.prototype.initializeItems = function() {
		var b = this.$element.find(".owl-item");
		if (b.length) return this._items = b.get().map(function(b) {
			return a(b)
		}), this._mergers = this._items.map(function() {
			return 1
		}), void this.refresh();
		this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
	}, e.prototype.initialize = function() {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var a, b, c;
			a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
		}
		this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, e.prototype.isVisible = function() {
		return !this.settings.checkVisibility || this.$element.is(":visible")
	}, e.prototype.setup = function() {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c ? (a.each(c, function(a) {
			a <= b && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, e.prototype.optionsLogic = function() {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function(b) {
		var c = this.trigger("prepare", {
			content: b
		});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
			content: c.data
		}), c.data
	}, e.prototype.update = function() {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
				return this[a]
			}, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, e.prototype.width = function(a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function() {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, e.prototype.onThrottledResize = function() {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function() {
		return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
	}, e.prototype.registerEventHandlers = function() {
		a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
	}, e.prototype.onDragStart = function(b) {
		var d = null;
		3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
			x: d[16 === d.length ? 12 : 4],
			y: d[16 === d.length ? 13 : 5]
		}) : (d = this.$stage.position(), d = {
			x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
			y: d.top
		}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
			var d = this.difference(this._drag.pointer, this.pointer(b));
			a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}, this)))
	}, e.prototype.onDragMove = function(a) {
		var b = null,
			c = null,
			d = null,
			e = this.difference(this._drag.pointer, this.pointer(a)),
			f = this.difference(this._drag.stage.start, e);
		this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
	}, e.prototype.onDragEnd = function(b) {
		var d = this.difference(this._drag.pointer, this.pointer(b)),
			e = this._drag.stage.current,
			f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
		a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, e.prototype.closest = function(b, c) {
		var e = -1,
			f = 30,
			g = this.width(),
			h = this.coordinates();
		return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
			return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
		}, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
	}, e.prototype.animate = function(b) {
		var c = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
		}) : c ? this.$stage.animate({
			left: b + "px"
		}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
			left: b + "px"
		})
	}, e.prototype.is = function(a) {
		return this._states.current[a] && this._states.current[a] > 0
	}, e.prototype.current = function(a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function(b) {
		return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
			return b
		})
	}, e.prototype.reset = function(a) {
		(a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function(a, b) {
		var c = this._items.length,
			e = b ? 0 : this._clones.length;
		return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
	}, e.prototype.relative = function(a) {
		return a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function(a) {
		var b, c, d, e = this.settings,
			f = this._coordinates.length;
		if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
		else if (e.autoWidth || e.merge) {
			if (b = this._items.length)
				for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
			f = b + 1
		} else f = e.center ? this._items.length - 1 : this._items.length - e.items;
		return a && (f -= this._clones.length / 2), Math.max(f, 0)
	}, e.prototype.minimum = function(a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function(a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function(a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function(b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function(a) {
				return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
			};
		return b === d ? a.map(this._clones, function(a, b) {
			return f(b)
		}) : a.map(this._clones, function(a, c) {
			return a === b ? f(c) : null
		})
	}, e.prototype.speed = function(a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function(b) {
		var c, e = 1,
			f = b - 1;
		return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
	}, e.prototype.duration = function(a, b, c) {
		return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	}, e.prototype.to = function(a, b) {
		var c = this.current(),
			d = null,
			e = a - this.relative(c),
			f = (e > 0) - (e < 0),
			g = this._items.length,
			h = this.minimum(),
			i = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
	}, e.prototype.next = function(a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function(a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.onTransitionEnd = function(a) {
		if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
		this.leave("animating"), this.trigger("translated")
	}, e.prototype.viewport = function() {
		var d;
		return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
	}, e.prototype.replace = function(b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
			return 1 === this.nodeType
		}).each(a.proxy(function(a, b) {
			b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function(b, c) {
		var e = this.relative(this._current);
		c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
			content: b,
			position: c
		}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
			content: b,
			position: c
		})
	}, e.prototype.remove = function(a) {
		(a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.preloadAutoWidthImages = function(b) {
		b.each(a.proxy(function(b, c) {
			this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
				c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
		}, this))
	}, e.prototype.destroy = function() {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
		for (var d in this._plugins) this._plugins[d].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, e.prototype.op = function(a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case "<":
				return d ? a > c : a < c;
			case ">":
				return d ? a < c : a > c;
			case ">=":
				return d ? a <= c : a >= c;
			case "<=":
				return d ? a >= c : a <= c
		}
	}, e.prototype.on = function(a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function(a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function(b, c, d, f, g) {
		var h = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			i = a.camelCase(a.grep(["on", b, d], function(a) {
				return a
			}).join("-").toLowerCase()),
			j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
				relatedTarget: this
			}, h, c));
		return this._supress[b] || (a.each(this._plugins, function(a, b) {
			b.onTrigger && b.onTrigger(j)
		}), this.register({
			type: e.Type.Event,
			name: b
		}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
	}, e.prototype.enter = function(b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
			this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
		}, this))
	}, e.prototype.leave = function(b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
			this._states.current[b]--
		}, this))
	}, e.prototype.register = function(b) {
		if (b.type === e.Type.Event) {
			if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
				var c = a.event.special[b.name]._default;
				a.event.special[b.name]._default = function(a) {
					return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
				}, a.event.special[b.name].owl = !0
			}
		} else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
			return a.inArray(c, this._states.tags[b.name]) === d
		}, this)))
	}, e.prototype.suppress = function(b) {
		a.each(b, a.proxy(function(a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function(b) {
		a.each(b, a.proxy(function(a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.pointer = function(a) {
		var c = {
			x: null,
			y: null
		};
		return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
	}, e.prototype.isNumeric = function(a) {
		return !isNaN(parseFloat(a))
	}, e.prototype.difference = function(a, b) {
		return {
			x: a.x - b.x,
			y: a.y - b.y
		}
	}, a.fn.owlCarousel = function(b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var d = a(this),
				f = d.data("owl.carousel");
			f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
				f.register({
					type: e.Type.Event,
					name: c
				}), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
					a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
				}, f))
			})), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, e.prototype.watch = function() {
		this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, e.prototype.refresh = function() {
		this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, e.prototype.destroy = function() {
		var a, c;
		b.clearInterval(this._interval);
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
					var c = this._core.settings,
						e = c.center && Math.ceil(c.items / 2) || c.items,
						f = c.center && -1 * e || 0,
						g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
						h = this._core.clones().length,
						i = a.proxy(function(a, b) {
							this.load(b)
						}, this);
					for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		lazyLoad: !1,
		lazyLoadEager: 0
	}, e.prototype.load = function(c) {
		var d = this._core.$stage.children().eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
			var e, f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
				f.css("opacity", 1), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
				this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function() {
				f.css({
					"background-image": 'url("' + g + '")',
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, e.prototype.destroy = function() {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(c) {
		this._core = c, this._previousHeight = null, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
			}, this),
			"loaded.owl.lazy": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
		var d = this;
		a(b).on("load", function() {
			d._core.settings.autoHeight && d.update()
		}), a(b).resize(function() {
			d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function() {
				d.update()
			}, 250))
		})
	};
	e.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, e.prototype.update = function() {
		var b = this._core._current,
			c = b + this._core.settings.items,
			d = this._core.settings.lazyLoad,
			e = this._core.$stage.children().toArray().slice(b, c),
			f = [],
			g = 0;
		a.each(e, function(b, c) {
			f.push(a(c).height())
		}), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function() {
		var a, b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			}, this),
			"resize.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
			}, this),
			"refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" === a.property.name && this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function(b) {
				if (b.namespace) {
					var c = a(b.content).find(".owl-video");
					c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
			this.play(a)
		}, this))
	};
	e.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, e.prototype.fetch = function(a, b) {
		var c = function() {
				return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
			}(),
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
		else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
		else {
			if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			c = "vzaar"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, e.prototype.thumbnail = function(b, c) {
		var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function(c) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
					class: "owl-video-tn " + j,
					srcType: c
				}) : a("<div/>", {
					class: "owl-video-tn",
					style: "opacity:1;background-image:url(" + c + ")"
				}), b.after(d), b.after(e)
			};
		if (b.wrap(a("<div/>", {
				class: "owl-video-wrapper",
				style: g
			})), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
		"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(a) {
				f = a[0].thumbnail_large, l(f)
			}
		}) : "vzaar" === c.type && a.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(a) {
				f = a.framegrab_url, l(f)
			}
		})
	}, e.prototype.stop = function() {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, e.prototype.play = function(b) {
		var c, d = a(b.target),
			e = d.closest("." + this._core.settings.itemClass),
			f = this._videos[e.attr("data-video")],
			g = f.width || "100%",
			h = f.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
	}, e.prototype.isInFullScreen = function() {
		var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return b && a(b).parent().hasClass("owl-video-frame")
	}, e.prototype.destroy = function() {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
				a.namespace && (this.swapping = "translated" == a.type)
			}, this),
			"translate.owl.carousel": a.proxy(function(a) {
				a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, e.prototype.swap = function() {
		if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
			this.core.speed(0);
			var b, c = a.proxy(this.clear, this),
				d = this.core.$stage.children().eq(this.previous),
				e = this.core.$stage.children().eq(this.next),
				f = this.core.settings.animateIn,
				g = this.core.settings.animateOut;
			this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
				left: b + "px"
			}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
		}
	}, e.prototype.clear = function(b) {
		a(b.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
	}, e.prototype.destroy = function() {
		var a, b;
		for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
			}, this),
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": a.proxy(function(a, b, c) {
				a.namespace && this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function(a) {
				a.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this),
			"touchstart.owl.core": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"touchend.owl.core": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
	};
	e.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, e.prototype._next = function(d) {
		this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
	}, e.prototype.read = function() {
		return (new Date).getTime() - this._time
	}, e.prototype.play = function(c, d) {
		var e;
		this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
	}, e.prototype.stop = function() {
		this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
	}, e.prototype.pause = function() {
		this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
	}, e.prototype.destroy = function() {
		var a, b;
		this.stop();
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	"use strict";
	var e = function(b) {
		this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function(b) {
				b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}, this),
			"added.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
			}, this),
			"remove.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" == a.property.name && this.draw()
			}, this),
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this),
			"refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	e.Defaults = {
		nav: !1,
		navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
		navSpeed: !1,
		navElement: 'button type="button" role="presentation"',
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, e.prototype.initialize = function() {
		var b, c = this._core.settings;
		this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
			this.prev(c.navSpeed)
		}, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
			this.next(c.navSpeed)
		}, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function(b) {
			var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
			b.preventDefault(), this.to(d, c.dotsSpeed)
		}, this));
		for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
	}, e.prototype.destroy = function() {
		var a, b, c, d, e;
		e = this._core.settings;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, e.prototype.update = function() {
		var a, b, c, d = this._core.clones().length / 2,
			e = d + this._core.items().length,
			f = this._core.maximum(!0),
			g = this._core.settings,
			h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
		if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
			for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
				if (b >= h || 0 === b) {
					if (this._pages.push({
							start: Math.min(f, a - d),
							end: a - d + h - 1
						}), Math.min(f, a - d) === f) break;
					b = 0, ++c
				}
				b += this._core.mergers(this._core.relative(a))
			}
	}, e.prototype.draw = function() {
		var b, c = this._core.settings,
			d = this._core.items().length <= c.items,
			e = this._core.relative(this._core.current()),
			f = c.loop || c.rewind;
		this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
	}, e.prototype.onTrigger = function(b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
		}
	}, e.prototype.current = function() {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, a.proxy(function(a, c) {
			return a.start <= b && a.end >= b
		}, this)).pop()
	}, e.prototype.getPosition = function(b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
	}, e.prototype.next = function(b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, e.prototype.prev = function(b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, e.prototype.to = function(b, c, d) {
		var e;
		!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	"use strict";
	var e = function(c) {
		this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": a.proxy(function(c) {
				c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": a.proxy(function(b) {
				if (b.namespace) {
					var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!c) return;
					this._hashes[c] = b.content
				}
			}, this),
			"changed.owl.carousel": a.proxy(function(c) {
				if (c.namespace && "position" === c.property.name) {
					var d = this._core.items(this._core.relative(this._core.current())),
						e = a.map(this._hashes, function(a, b) {
							return a === d ? b : null
						}).join();
					if (!e || b.location.hash.slice(1) === e) return;
					b.location.hash = e
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
			var c = b.location.hash.substring(1),
				e = this._core.$stage.children(),
				f = this._hashes[c] && e.index(this._hashes[c]);
			f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
		}, this))
	};
	e.Defaults = {
		URLhashListener: !1
	}, e.prototype.destroy = function() {
		var c, d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	function e(b, c) {
		var e = !1,
			f = b.charAt(0).toUpperCase() + b.slice(1);
		return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
			if (g[b] !== d) return e = !c || b, !1
		}), e
	}

	function f(a) {
		return e(a, !0)
	}
	var g = a("<support>").get(0).style,
		h = "Webkit Moz O ms".split(" "),
		i = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		},
		j = {
			csstransforms: function() {
				return !!e("transform")
			},
			csstransforms3d: function() {
				return !!e("perspective")
			},
			csstransitions: function() {
				return !!e("transition")
			},
			cssanimations: function() {
				return !!e("animation")
			}
		};
	j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

! function(t, e, n, o) {
	"use strict";

	function i(t) {
		var e = t.currentTarget,
			o = t.data ? t.data.options : {},
			i = o.selector ? n(o.selector) : t.data ? t.data.items : [],
			a = n(e).attr("data-fancybox") || "",
			s = 0,
			r = n.fancybox.getInstance();
		t.preventDefault(), r && r.current.opts.$orig.is(e) || (a ? (i = i.length ? i.filter('[data-fancybox="' + a + '"]') : n('[data-fancybox="' + a + '"]'), s = i.index(e), s < 0 && (s = 0)) : i = [e], n.fancybox.open(i, o, s))
	}
	if (n) {
		if (n.fn.fancybox) return void n.error("fancyBox already initialized");
		var a = {
				loop: !1,
				margin: [44, 0],
				gutter: 50,
				keyboard: !0,
				arrows: !0,
				infobar: !1,
				toolbar: !0,
				buttons: ["slideShow", "fullScreen", "thumbs", "close"],
				idleTime: 4,
				smallBtn: "auto",
				protect: !1,
				modal: !1,
				image: {
					preload: "auto"
				},
				ajax: {
					settings: {
						data: {
							fancybox: !0
						}
					}
				},
				iframe: {
					tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
					preload: !0,
					css: {},
					attr: {
						scrolling: "auto"
					}
				},
				animationEffect: "zoom",
				animationDuration: 366,
				zoomOpacity: "auto",
				transitionEffect: "fade",
				transitionDuration: 366,
				slideClass: "",
				baseClass: "",
				baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
				spinnerTpl: '<div class="fancybox-loading"></div>',
				errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
				btnTpl: {
					slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
					fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
					thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
					close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
					smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
				},
				parentEl: "body",
				autoFocus: !0,
				backFocus: !0,
				trapFocus: !0,
				fullScreen: {
					autoStart: !1
				},
				touch: {
					vertical: !0,
					momentum: !0
				},
				hash: null,
				media: {},
				slideShow: {
					autoStart: !1,
					speed: 4e3
				},
				thumbs: {
					autoStart: !1,
					hideOnClose: !0
				},
				onInit: n.noop,
				beforeLoad: n.noop,
				afterLoad: n.noop,
				beforeShow: n.noop,
				afterShow: n.noop,
				beforeClose: n.noop,
				afterClose: n.noop,
				onActivate: n.noop,
				onDeactivate: n.noop,
				clickContent: function(t, e) {
					return "image" === t.type && "zoom"
				},
				clickSlide: "close",
				clickOutside: "close",
				dblclickContent: !1,
				dblclickSlide: !1,
				dblclickOutside: !1,
				mobile: {
					clickContent: function(t, e) {
						return "image" === t.type && "toggleControls"
					},
					clickSlide: function(t, e) {
						return "image" === t.type ? "toggleControls" : "close"
					},
					dblclickContent: function(t, e) {
						return "image" === t.type && "zoom"
					},
					dblclickSlide: function(t, e) {
						return "image" === t.type && "zoom"
					}
				},
				lang: "en",
				i18n: {
					en: {
						CLOSE: "Close",
						NEXT: "Next",
						PREV: "Previous",
						ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
						PLAY_START: "Start slideshow",
						PLAY_STOP: "Pause slideshow",
						FULL_SCREEN: "Full screen",
						THUMBS: "Thumbnails"
					},
					de: {
						CLOSE: "Schliessen",
						NEXT: "Weiter",
						PREV: "ZurÃ¼ck",
						ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃ¤ter nochmal.",
						PLAY_START: "Diaschau starten",
						PLAY_STOP: "Diaschau beenden",
						FULL_SCREEN: "Vollbild",
						THUMBS: "Vorschaubilder"
					}
				}
			},
			s = n(t),
			r = n(e),
			c = 0,
			l = function(t) {
				return t && t.hasOwnProperty && t instanceof n
			},
			u = function() {
				return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
					return t.setTimeout(e, 1e3 / 60)
				}
			}(),
			d = function() {
				var t, n = e.createElement("fakeelement"),
					i = {
						transition: "transitionend",
						OTransition: "oTransitionEnd",
						MozTransition: "transitionend",
						WebkitTransition: "webkitTransitionEnd"
					};
				for (t in i)
					if (n.style[t] !== o) return i[t]
			}(),
			f = function(t) {
				return t && t.length && t[0].offsetHeight
			},
			h = function(t, o, i) {
				var s = this;
				s.opts = n.extend(!0, {
					index: i
				}, a, o || {}), o && n.isArray(o.buttons) && (s.opts.buttons = o.buttons), s.id = s.opts.id || ++c, s.group = [], s.currIndex = parseInt(s.opts.index, 10) || 0, s.prevIndex = null, s.prevPos = null, s.currPos = 0, s.firstRun = null, s.createGroup(t), s.group.length && (s.$lastFocus = n(e.activeElement).blur(), s.slides = {}, s.init(t))
			};
		n.extend(h.prototype, {
			init: function() {
				var t, e, o, i = this,
					a = i.group[i.currIndex].opts;
				i.scrollTop = r.scrollTop(), i.scrollLeft = r.scrollLeft(), n.fancybox.getInstance() || n.fancybox.isMobile || "hidden" === n("body").css("overflow") || (t = n("body").width(), n("html").addClass("fancybox-enabled"), t = n("body").width() - t, t > 1 && n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + "px; }</style>")), o = "", n.each(a.buttons, function(t, e) {
					o += a.btnTpl[e] || ""
				}), e = n(i.translate(i, a.baseTpl.replace("{{BUTTONS}}", o))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + i.id).addClass(a.baseClass).data("FancyBox", i).prependTo(a.parentEl), i.$refs = {
					container: e
				}, ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function(t) {
					i.$refs[t] = e.find(".fancybox-" + t)
				}), (!a.arrows || i.group.length < 2) && e.find(".fancybox-navigation").remove(), a.infobar || i.$refs.infobar.remove(), a.toolbar || i.$refs.toolbar.remove(), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex)
			},
			translate: function(t, e) {
				var n = t.opts.i18n[t.opts.lang];
				return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
					var i = n[e];
					return i === o ? t : i
				})
			},
			createGroup: function(t) {
				var e = this,
					i = n.makeArray(t);
				n.each(i, function(t, i) {
					var a, s, r, c, l = {},
						u = {},
						d = [];
					n.isPlainObject(i) ? (l = i, u = i.opts || i) : "object" === n.type(i) && n(i).length ? (a = n(i), d = a.data(), u = "options" in d ? d.options : {}, u = "object" === n.type(u) ? u : {}, l.src = "src" in d ? d.src : u.src || a.attr("href"), ["width", "height", "thumb", "type", "filter"].forEach(function(t) {
						t in d && (u[t] = d[t])
					}), "srcset" in d && (u.image = {
						srcset: d.srcset
					}), u.$orig = a, l.type || l.src || (l.type = "inline", l.src = i)) : l = {
						type: "html",
						src: i + ""
					}, l.opts = n.extend(!0, {}, e.opts, u), n.fancybox.isMobile && (l.opts = n.extend(!0, {}, l.opts, l.opts.mobile)), s = l.type || l.opts.type, r = l.src || "", !s && r && (r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : "#" === r.charAt(0) && (s = "inline")), l.type = s, l.index = e.group.length, l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig, !l.opts.$thumb && l.opts.$orig && (l.opts.$thumb = l.opts.$orig.find("img:first")), l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb, "function" === n.type(l.opts.caption) ? l.opts.caption = l.opts.caption.apply(i, [e, l]) : "caption" in d && (l.opts.caption = d.caption), l.opts.caption = l.opts.caption === o ? "" : l.opts.caption + "", "ajax" === s && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), "auto" == l.opts.smallBtn && (n.inArray(s, ["html", "inline", "ajax"]) > -1 ? (l.opts.toolbar = !1, l.opts.smallBtn = !0) : l.opts.smallBtn = !1), "pdf" === s && (l.type = "iframe", l.opts.iframe.preload = !1), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
						infobar: 0,
						toolbar: 0,
						smallBtn: 0,
						keyboard: 0,
						slideShow: 0,
						fullScreen: 0,
						thumbs: 0,
						touch: 0,
						clickContent: !1,
						clickSlide: !1,
						clickOutside: !1,
						dblclickContent: !1,
						dblclickSlide: !1,
						dblclickOutside: !1
					})), e.group.push(l)
				})
			},
			addEvents: function() {
				var o = this;
				o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
					t.stopPropagation(), t.preventDefault(), o.close(t)
				}).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
					t.stopPropagation(), t.preventDefault(), o.previous()
				}).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
					t.stopPropagation(), t.preventDefault(), o.next()
				}), s.on("orientationchange.fb resize.fb", function(t) {
					t && t.originalEvent && "resize" === t.originalEvent.type ? u(function() {
						o.update()
					}) : (o.$refs.stage.hide(), setTimeout(function() {
						o.$refs.stage.show(), o.update()
					}, 500))
				}), r.on("focusin.fb", function(t) {
					var i = n.fancybox ? n.fancybox.getInstance() : null;
					i.isClosing || !i.current || !i.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || i && "fixed" !== n(t.target).css("position") && !i.$refs.container.has(t.target).length && (t.stopPropagation(), i.focus(), s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))
				}), r.on("keydown.fb", function(t) {
					var e = o.current,
						i = t.keyCode || t.which;
					if (e && e.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea")) return 8 === i || 27 === i ? (t.preventDefault(), void o.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void o.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void o.next()) : void o.trigger("afterKeydown", t, i)
				}), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
					o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1
				}), o.idleInterval = t.setInterval(function() {
					o.idleSecondsCounter++, o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls())
				}, 1e3))
			},
			removeEvents: function() {
				var e = this;
				s.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
			},
			previous: function(t) {
				return this.jumpTo(this.currPos - 1, t)
			},
			next: function(t) {
				return this.jumpTo(this.currPos + 1, t)
			},
			jumpTo: function(t, e, i) {
				var a, s, r, c, l, u, d, h = this,
					p = h.group.length;
				if (!(h.isSliding || h.isClosing || h.isAnimating && h.firstRun)) {
					if (t = parseInt(t, 10), s = h.current ? h.current.opts.loop : h.opts.loop, !s && (t < 0 || t >= p)) return !1;
					if (a = h.firstRun = null === h.firstRun, !(p < 2 && !a && h.isSliding)) {
						if (c = h.current, h.prevIndex = h.currIndex, h.prevPos = h.currPos, r = h.createSlide(t), p > 1 && ((s || r.index > 0) && h.createSlide(t - 1), (s || r.index < p - 1) && h.createSlide(t + 1)), h.current = r, h.currIndex = r.index, h.currPos = r.pos, h.trigger("beforeShow", a), h.updateControls(), u = n.fancybox.getTranslate(r.$slide), r.isMoved = (0 !== u.left || 0 !== u.top) && !r.$slide.hasClass("fancybox-animated"), r.forcedDuration = o, n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[a ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), a) return r.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"), h.$refs.container.removeClass("fancybox-is-hidden"), f(h.$refs.container), h.$refs.container.addClass("fancybox-is-open"), r.$slide.addClass("fancybox-slide--current"), h.loadSlide(r), void h.preload();
						n.each(h.slides, function(t, e) {
							n.fancybox.stop(e.$slide)
						}), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), r.isMoved ? (l = Math.round(r.$slide.width()), n.each(h.slides, function(t, o) {
							var i = o.pos - r.pos;
							n.fancybox.animate(o.$slide, {
								top: 0,
								left: i * l + i * o.opts.gutter
							}, e, function() {
								o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === h.currPos && (r.isMoved = !1, h.complete())
							})
						})) : h.$refs.stage.children().removeAttr("style"), r.isLoaded ? h.revealContent(r) : h.loadSlide(r), h.preload(), c.pos !== r.pos && (d = "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous"), c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), c.isComplete = !1, e && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? c.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + r.opts.transitionEffect, n.fancybox.animate(c.$slide, d, e, function() {
							c.$slide.removeClass(d).removeAttr("style")
						}))))
					}
				}
			},
			createSlide: function(t) {
				var e, o, i = this;
				return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
					pos: t,
					$slide: e,
					isLoaded: !1
				}), i.updateSlide(i.slides[t])), i.slides[t]
			},
			scaleToActual: function(t, e, i) {
				var a, s, r, c, l, u = this,
					d = u.current,
					f = d.$content,
					h = parseInt(d.$slide.width(), 10),
					p = parseInt(d.$slide.height(), 10),
					g = d.width,
					b = d.height;
				"image" != d.type || d.hasError || !f || u.isAnimating || (n.fancybox.stop(f), u.isAnimating = !0, t = t === o ? .5 * h : t, e = e === o ? .5 * p : e, a = n.fancybox.getTranslate(f), c = g / a.width, l = b / a.height, s = .5 * h - .5 * g, r = .5 * p - .5 * b, g > h && (s = a.left * c - (t * c - t), s > 0 && (s = 0), s < h - g && (s = h - g)), b > p && (r = a.top * l - (e * l - e), r > 0 && (r = 0), r < p - b && (r = p - b)), u.updateCursor(g, b), n.fancybox.animate(f, {
					top: r,
					left: s,
					scaleX: c,
					scaleY: l
				}, i || 330, function() {
					u.isAnimating = !1
				}), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())
			},
			scaleToFit: function(t) {
				var e, o = this,
					i = o.current,
					a = i.$content;
				"image" != i.type || i.hasError || !a || o.isAnimating || (n.fancybox.stop(a), o.isAnimating = !0, e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
					top: e.top,
					left: e.left,
					scaleX: e.width / a.width(),
					scaleY: e.height / a.height()
				}, t || 330, function() {
					o.isAnimating = !1
				}))
			},
			getFitPos: function(t) {
				var e, o, i, a, r, c = this,
					l = t.$content,
					u = t.width,
					d = t.height,
					f = t.opts.margin;
				return !(!l || !l.length || !u && !d) && ("number" === n.type(f) && (f = [f, f]), 2 == f.length && (f = [f[0], f[1], f[0], f[1]]), s.width() < 800 && (f = [0, 0, 0, 0]), e = parseInt(c.$refs.stage.width(), 10) - (f[1] + f[3]), o = parseInt(c.$refs.stage.height(), 10) - (f[0] + f[2]), i = Math.min(1, e / u, o / d), a = Math.floor(i * u), r = Math.floor(i * d), {
					top: Math.floor(.5 * (o - r)) + f[0],
					left: Math.floor(.5 * (e - a)) + f[3],
					width: a,
					height: r
				})
			},
			update: function() {
				var t = this;
				n.each(t.slides, function(e, n) {
					t.updateSlide(n)
				})
			},
			updateSlide: function(t) {
				var e = this,
					o = t.$content;
				o && (t.width || t.height) && (n.fancybox.stop(o), n.fancybox.setTranslate(o, e.getFitPos(t)), t.pos === e.currPos && e.updateCursor()), t.$slide.trigger("refresh"), e.trigger("onUpdate", t)
			},
			updateCursor: function(t, e) {
				var n, i = this,
					a = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
				i.current && !i.isClosing && (i.isZoomable() ? (a.addClass("fancybox-is-zoomable"), n = t !== o && e !== o ? t < i.current.width && e < i.current.height : i.isScaledDown(), n ? a.addClass("fancybox-can-zoomIn") : i.current.opts.touch ? a.addClass("fancybox-can-drag") : a.addClass("fancybox-can-zoomOut")) : i.current.opts.touch && a.addClass("fancybox-can-drag"))
			},
			isZoomable: function() {
				var t, e = this,
					o = e.current;
				if (o && !e.isClosing) return !!("image" === o.type && o.isLoaded && !o.hasError && ("zoom" === o.opts.clickContent || n.isFunction(o.opts.clickContent) && "zoom" === o.opts.clickContent(o)) && (t = e.getFitPos(o), o.width > t.width || o.height > t.height))
			},
			isScaledDown: function() {
				var t = this,
					e = t.current,
					o = e.$content,
					i = !1;
				return o && (i = n.fancybox.getTranslate(o), i = i.width < e.width || i.height < e.height), i
			},
			canPan: function() {
				var t = this,
					e = t.current,
					n = e.$content,
					o = !1;
				return n && (o = t.getFitPos(e), o = Math.abs(n.width() - o.width) > 1 || Math.abs(n.height() - o.height) > 1), o
			},
			loadSlide: function(t) {
				var e, o, i, a = this;
				if (!t.isLoading && !t.isLoaded) {
					switch (t.isLoading = !0, a.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
						case "image":
							a.setImage(t);
							break;
						case "iframe":
							a.setIframe(t);
							break;
						case "html":
							a.setContent(t, t.src || t.content);
							break;
						case "inline":
							n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
							break;
						case "ajax":
							a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
								url: t.src,
								success: function(e, n) {
									"success" === n && a.setContent(t, e)
								},
								error: function(e, n) {
									e && "abort" !== n && a.setError(t)
								}
							})), o.one("onReset", function() {
								i.abort()
							});
							break;
						default:
							a.setError(t)
					}
					return !0
				}
			},
			setImage: function(e) {
				var o, i, a, s, r = this,
					c = e.opts.image.srcset;
				if (c) {
					a = t.devicePixelRatio || 1, s = t.innerWidth * a, i = c.split(",").map(function(t) {
						var e = {};
						return t.trim().split(/\s+/).forEach(function(t, n) {
							var o = parseInt(t.substring(0, t.length - 1), 10);
							return 0 === n ? e.url = t : void(o && (e.value = o, e.postfix = t[t.length - 1]))
						}), e
					}), i.sort(function(t, e) {
						return t.value - e.value
					});
					for (var l = 0; l < i.length; l++) {
						var u = i[l];
						if ("w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= a) {
							o = u;
							break
						}
					}!o && i.length && (o = i[i.length - 1]), o && (e.src = o.url, e.width && e.height && "w" == o.postfix && (e.height = e.width / e.height * o.value, e.width = o.value))
				}
				e.$content = n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), e.opts.preload !== !1 && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", function() {
					n(this).remove(), e.$ghost = null, r.setBigImage(e)
				}).one("load", function() {
					r.afterLoad(e), r.setBigImage(e)
				}).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : r.setBigImage(e)
			},
			setBigImage: function(t) {
				var e = this,
					o = n("<img />");
				t.$image = o.one("error", function() {
					e.setError(t)
				}).one("load", function() {
					clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() {
						t.timouts = null, t.$ghost.hide()
					}, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
				}).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error ? o.trigger("error") : t.timouts = setTimeout(function() {
					o[0].complete || t.hasError || e.showLoading(t)
				}, 100)
			},
			setIframe: function(t) {
				var e, i = this,
					a = t.opts.iframe,
					s = t.$slide;
				t.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s), e = n(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(t.$content), a.preload ? (i.showLoading(t), e.on("load.fb error.fb", function(e) {
					this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t)
				}), s.on("refresh.fb", function() {
					var n, i, s, r = t.$content,
						c = a.css.width,
						l = a.css.height;
					if (1 === e[0].isReady) {
						try {
							i = e.contents(), s = i.find("body")
						} catch (t) {}
						s && s.length && (c === o && (n = e[0].contentWindow.document.documentElement.scrollWidth, c = Math.ceil(s.outerWidth(!0) + (r.width() - n)), c += r.outerWidth() - r.innerWidth()), l === o && (l = Math.ceil(s.outerHeight(!0)), l += r.outerHeight() - r.innerHeight()), c && r.width(c), l && r.height(l)), r.removeClass("fancybox-is-hidden")
					}
				})) : this.afterLoad(t), e.attr("src", t.src), t.opts.smallBtn === !0 && t.$content.prepend(i.translate(t, t.opts.btnTpl.smallBtn)), s.one("onReset", function() {
					try {
						n(this).find("iframe").hide().attr("src", "//about:blank")
					} catch (t) {}
					n(this).empty(), t.isLoaded = !1
				})
			},
			setContent: function(t, e) {
				var o = this;
				o.isClosing || (o.hideLoading(t), t.$slide.empty(), l(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = n("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents(), 3 === e[0].nodeType && (e = n("<div>").html(e))), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
					t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1)
				}), t.$content = n(e).appendTo(t.$slide), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = n(o.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div").first())), this.afterLoad(t))
			},
			setError: function(t) {
				t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
			},
			showLoading: function(t) {
				var e = this;
				t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide))
			},
			hideLoading: function(t) {
				var e = this;
				t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
			},
			afterLoad: function(t) {
				var e = this;
				e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
					return 2 == t.button && t.preventDefault(), !0
				}), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
			},
			revealContent: function(t) {
				var e, i, a, s, r, c = this,
					l = t.$slide,
					u = !1;
				return e = t.opts[c.firstRun ? "animationEffect" : "transitionEffect"], a = t.opts[c.firstRun ? "animationDuration" : "transitionDuration"], a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10), !t.isMoved && t.pos === c.currPos && a || (e = !1), "zoom" !== e || t.pos === c.currPos && a && "image" === t.type && !t.hasError && (u = c.getThumbPos(t)) || (e = "fade"), "zoom" === e ? (r = c.getFitPos(t), r.scaleX = r.width / u.width, r.scaleY = r.height / u.height, delete r.width, delete r.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - u.width / u.height) > .1), s && (u.opacity = .1, r.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), u), f(t.$content), void n.fancybox.animate(t.$content, r, a, function() {
					c.complete()
				})) : (c.updateSlide(t), e ? (n.fancybox.stop(l), i = "fancybox-animated fancybox-slide--" + (t.pos > c.prevPos ? "next" : "previous") + " fancybox-fx-" + e, l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i), t.$content.removeClass("fancybox-is-hidden"), f(l), void n.fancybox.animate(l, "fancybox-slide--current", a, function(e) {
					l.removeClass(i).removeAttr("style"), t.pos === c.currPos && c.complete()
				}, !0)) : (f(l), t.$content.removeClass("fancybox-is-hidden"), void(t.pos === c.currPos && c.complete())))
			},
			getThumbPos: function(o) {
				var i, a = this,
					s = !1,
					r = function(e) {
						for (var o, i = e[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement;) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;
						return o = s.every(function(t) {
							var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),
								n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
							return e > 0 && n > 0
						}), o && a.bottom > 0 && a.right > 0 && a.left < n(t).width() && a.top < n(t).height()
					},
					c = o.opts.$thumb,
					l = c ? c.offset() : 0;
				return l && c[0].ownerDocument === e && r(c) && (i = a.$refs.stage.offset(), s = {
					top: l.top - i.top + parseFloat(c.css("border-top-width") || 0),
					left: l.left - i.left + parseFloat(c.css("border-left-width") || 0),
					width: c.width(),
					height: c.height(),
					scaleX: 1,
					scaleY: 1
				}), s
			},
			complete: function() {
				var t = this,
					o = t.current,
					i = {};
				o.isMoved || !o.isLoaded || o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), f(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function(e, o) {
					o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
				}), t.slides = i, t.updateCursor(), t.trigger("afterShow"), (n(e.activeElement).is("[disabled]") || o.opts.autoFocus && "image" != o.type && "iframe" !== o.type) && t.focus())
			},
			preload: function() {
				var t, e, n = this;
				n.group.length < 2 || (t = n.slides[n.currPos + 1], e = n.slides[n.currPos - 1], t && "image" === t.type && n.loadSlide(t), e && "image" === e.type && n.loadSlide(e))
			},
			focus: function() {
				var t, e = this.current;
				this.isClosing || (e && e.isComplete && (t = e.$slide.find("input[autofocus]:enabled:visible:first"), t.length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), t = t && t.length ? t : this.$refs.container, t.focus())
			},
			activate: function() {
				var t = this;
				n(".fancybox-container").each(function() {
					var e = n(this).data("FancyBox");
					e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
				}), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger("onActivate"), t.addEvents()
			},
			close: function(t, e) {
				var o, i, a, s, r, c, l = this,
					f = l.current,
					h = function() {
						l.cleanUp(t)
					};
				return !l.isClosing && (l.isClosing = !0, l.trigger("beforeClose", t) === !1 ? (l.isClosing = !1, u(function() {
					l.update()
				}), !1) : (l.removeEvents(), f.timouts && clearTimeout(f.timouts), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), f.$slide.siblings().trigger("onReset").remove(), i && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), l.hideLoading(f), l.hideControls(), l.updateCursor(), "zoom" !== o || t !== !0 && a && i && "image" === f.type && !f.hasError && (c = l.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), r = n.fancybox.getTranslate(a), r.width = r.width * r.scaleX, r.height = r.height * r.scaleY, s = f.opts.zoomOpacity, "auto" == s && (s = Math.abs(f.width / f.height - c.width / c.height) > .1), s && (c.opacity = 0), r.scaleX = r.width / c.width, r.scaleY = r.height / c.height, r.width = c.width, r.height = c.height, n.fancybox.setTranslate(f.$content, r), n.fancybox.animate(f.$content, c, i, h), !0) : (o && i ? t === !0 ? setTimeout(h, i) : n.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, h) : h(), !0)))
			},
			cleanUp: function(t) {
				var e, o = this;
				o.current.$slide.trigger("onReset"), o.$refs.container.empty().remove(), o.trigger("afterClose", t), o.$lastFocus && o.current.opts.backFocus && o.$lastFocus.focus(), o.current = null, e = n.fancybox.getInstance(), e ? e.activate() : (s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft), n("html").removeClass("fancybox-enabled"), n("#fancybox-style-noscroll").remove())
			},
			trigger: function(t, e) {
				var o, i = Array.prototype.slice.call(arguments, 1),
					a = this,
					s = e && e.opts ? e : a.current;
				return s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), o === !1 ? o : void("afterClose" === t ? r.trigger(t + ".fb", i) : a.$refs.container.trigger(t + ".fb", i))
			},
			updateControls: function(t) {
				var e = this,
					o = e.current,
					i = o.index,
					a = o.opts,
					s = a.caption,
					r = e.$refs.caption;
				o.$slide.trigger("refresh"), e.$caption = s && s.length ? r.html(s) : null, e.isHiddenControls || e.showControls(), n("[data-fancybox-count]").html(e.group.length), n("[data-fancybox-index]").html(i + 1), n("[data-fancybox-prev]").prop("disabled", !a.loop && i <= 0), n("[data-fancybox-next]").prop("disabled", !a.loop && i >= e.group.length - 1)
			},
			hideControls: function() {
				this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
			},
			showControls: function() {
				var t = this,
					e = t.current ? t.current.opts : t.opts,
					n = t.$refs.container;
				t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
			},
			toggleControls: function() {
				this.isHiddenControls ? this.showControls() : this.hideControls()
			}
		}), n.fancybox = {
			version: "3.1.28",
			defaults: a,
			getInstance: function(t) {
				var e = n('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),
					o = Array.prototype.slice.call(arguments, 1);
				return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
			},
			open: function(t, e, n) {
				return new h(t, e, n)
			},
			close: function(t) {
				var e = this.getInstance();
				e && (e.close(), t === !0 && this.close())
			},
			destroy: function() {
				this.close(!0), r.off("click.fb-start")
			},
			isMobile: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
			use3d: function() {
				var n = e.createElement("div");
				return t.getComputedStyle && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
			}(),
			getTranslate: function(t) {
				var e;
				if (!t || !t.length) return !1;
				if (e = t.eq(0).css("transform"), e && e.indexOf("matrix") !== -1 ? (e = e.split("(")[1], e = e.split(")")[0], e = e.split(",")) : e = [], e.length) e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]], e = e.map(parseFloat);
				else {
					e = [0, 0, 1, 1];
					var n = /\.*translate\((.*)px,(.*)px\)/i,
						o = n.exec(t.eq(0).attr("style"));
					o && (e[0] = parseFloat(o[2]), e[1] = parseFloat(o[1]))
				}
				return {
					top: e[0],
					left: e[1],
					scaleX: e[2],
					scaleY: e[3],
					opacity: parseFloat(t.css("opacity")),
					width: t.width(),
					height: t.height()
				}
			},
			setTranslate: function(t, e) {
				var n = "",
					i = {};
				if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (i.transform = n), e.opacity !== o && (i.opacity = e.opacity), e.width !== o && (i.width = e.width), e.height !== o && (i.height = e.height), t.css(i)
			},
			animate: function(t, e, i, a, s) {
				var r = d || "transitionend";
				n.isFunction(i) && (a = i, i = null), n.isPlainObject(e) || t.removeAttr("style"), t.on(r, function(i) {
					(!i || !i.originalEvent || t.is(i.originalEvent.target) && "z-index" != i.originalEvent.propertyName) && (t.off(r), n.isPlainObject(e) ? e.scaleX !== o && e.scaleY !== o && (t.css("transition-duration", "0ms"), e.width = Math.round(t.width() * e.scaleX), e.height = Math.round(t.height() * e.scaleY), e.scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(t, e)) : s !== !0 && t.removeClass(e), n.isFunction(a) && a(i))
				}), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e), t.data("timer", setTimeout(function() {
					t.trigger("transitionend")
				}, i + 16))
			},
			stop: function(t) {
				clearTimeout(t.data("timer")), t.off(d)
			}
		}, n.fn.fancybox = function(t) {
			var e;
			return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
				options: t
			}, i) : this.off("click.fb-start").on("click.fb-start", {
				items: this,
				options: t
			}, i), this
		}, r.on("click.fb-start", "[data-fancybox]", i)
	}
}(window, document, window.jQuery || jQuery),
function(t) {
	"use strict";
	var e = function(e, n, o) {
			if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function(t, n) {
				e = e.replace("$" + t, n || "")
			}), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
		},
		n = {
			youtube: {
				matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
				params: {
					autoplay: 1,
					autohide: 1,
					fs: 1,
					rel: 0,
					hd: 1,
					wmode: "transparent",
					enablejsapi: 1,
					html5: 1
				},
				paramPlace: 8,
				type: "iframe",
				url: "//www.youtube.com/embed/$4",
				thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
			},
			vimeo: {
				matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
				params: {
					autoplay: 1,
					hd: 1,
					show_title: 1,
					show_byline: 1,
					show_portrait: 0,
					fullscreen: 1,
					api: 1
				},
				paramPlace: 3,
				type: "iframe",
				url: "//player.vimeo.com/video/$2"
			},
			metacafe: {
				matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
				type: "iframe",
				url: "//www.metacafe.com/embed/$1/?ap=1"
			},
			dailymotion: {
				matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
				params: {
					additionalInfos: 0,
					autoStart: 1
				},
				type: "iframe",
				url: "//www.dailymotion.com/embed/video/$1"
			},
			vine: {
				matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
				type: "iframe",
				url: "//vine.co/v/$1/embed/simple"
			},
			instagram: {
				matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type: "image",
				url: "//$1/p/$2/media/?size=l"
			},
			gmap_place: {
				matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
				type: "iframe",
				url: function(t) {
					return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
				}
			},
			gmap_search: {
				matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
				type: "iframe",
				url: function(t) {
					return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
				}
			}
		};
	t(document).on("onInit.fb", function(o, i) {
		t.each(i.group, function(o, i) {
			var a, s, r, c, l, u, d, f = i.src || "",
				h = !1;
			i.type || (a = t.extend(!0, {}, n, i.opts.media), t.each(a, function(n, o) {
				if (r = f.match(o.matcher), u = {}, d = n, r) {
					if (h = o.type, o.paramPlace && r[o.paramPlace]) {
						l = r[o.paramPlace], "?" == l[0] && (l = l.substring(1)), l = l.split("&");
						for (var a = 0; a < l.length; ++a) {
							var p = l[a].split("=", 2);
							2 == p.length && (u[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " ")))
						}
					}
					return c = t.extend(!0, {}, o.params, i.opts[n], u), f = "function" === t.type(o.url) ? o.url.call(this, r, c, i) : e(o.url, r, c), s = "function" === t.type(o.thumb) ? o.thumb.call(this, r, c, i) : e(o.thumb, r), "vimeo" === d && (f = f.replace("&%23", "#")), !1
				}
			}), h ? (i.src = f, i.type = h, i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = s), "iframe" === h && (t.extend(!0, i.opts, {
				iframe: {
					preload: !1,
					attr: {
						scrolling: "no"
					}
				}
			}), i.contentProvider = d, i.opts.slideClass += " fancybox-slide--" + ("gmap_place" == d || "gmap_search" == d ? "map" : "video"))) : i.type = "image")
		})
	})
}(window.jQuery),
function(t, e, n) {
	"use strict";
	var o = function() {
			return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
				return t.setTimeout(e, 1e3 / 60)
			}
		}(),
		i = function() {
			return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
				t.clearTimeout(e)
			}
		}(),
		a = function(e) {
			var n = [];
			e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
			for (var o in e) e[o].pageX ? n.push({
				x: e[o].pageX,
				y: e[o].pageY
			}) : e[o].clientX && n.push({
				x: e[o].clientX,
				y: e[o].clientY
			});
			return n
		},
		s = function(t, e, n) {
			return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
		},
		r = function(t) {
			if (t.is("a,button,input,select,textarea,label") || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
			for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
				if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
			return !1
		},
		c = function(e) {
			var n = t.getComputedStyle(e)["overflow-y"],
				o = t.getComputedStyle(e)["overflow-x"],
				i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
				a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
			return i || a
		},
		l = function(t) {
			for (var e = !1;;) {
				if (e = c(t.get(0))) break;
				if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
			}
			return e
		},
		u = function(t) {
			var e = this;
			e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
		};
	u.prototype.destroy = function() {
		this.$container.off(".fb.touch")
	}, u.prototype.ontouchstart = function(o) {
		var i = this,
			c = n(o.target),
			u = i.instance,
			d = u.current,
			f = d.$content,
			h = "touchstart" == o.type;
		if (h && i.$container.off("mousedown.fb.touch"), !d || i.instance.isAnimating || i.instance.isClosing) return o.stopPropagation(), void o.preventDefault();
		if ((!o.originalEvent || 2 != o.originalEvent.button) && c.length && !r(c) && !r(c.parent()) && !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left) && (i.startPoints = a(o), i.startPoints && !(i.startPoints.length > 1 && u.isSliding))) {
			if (i.$target = c, i.$content = f, i.canTap = !0, n(e).off(".fb.touch"), n(e).on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")), n(e).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), !u.current.opts.touch && !u.canPan() || !c.is(i.$stage) && !i.$stage.find(c).length) return void(c.is("img") && o.preventDefault());
			o.stopPropagation(), n.fancybox.isMobile && (l(i.$target) || l(i.$target.parent())) || o.preventDefault(), i.canvasWidth = Math.round(d.$slide[0].clientWidth), i.canvasHeight = Math.round(d.$slide[0].clientHeight), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.sliderStartPos = i.sliderLastPos || {
				top: 0,
				left: 0
			}, i.contentStartPos = n.fancybox.getTranslate(i.$content), i.contentLastPos = null, 1 !== i.startPoints.length || i.isZooming || (i.canTap = !u.isSliding, "image" === d.type && (i.contentStartPos.width > i.canvasWidth + 1 || i.contentStartPos.height > i.canvasHeight + 1) ? (n.fancybox.stop(i.$content), i.$content.css("transition-duration", "0ms"), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-controls--isGrabbing")), 2 !== i.startPoints.length || u.isAnimating || d.hasError || "image" !== d.type || !d.isLoaded && !d.$ghost || (i.isZooming = !0, i.isSwiping = !1, i.isPanning = !1, n.fancybox.stop(i.$content), i.$content.css("transition-duration", "0ms"), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))
		}
	}, u.prototype.ontouchmove = function(t) {
		var e = this;
		if (e.newPoints = a(t), n.fancybox.isMobile && (l(e.$target) || l(e.$target.parent()))) return t.stopPropagation(), void(e.canTap = !1);
		if ((e.instance.current.opts.touch || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0)) {
			if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length) return;
			t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()
		}
	}, u.prototype.onSwipe = function() {
		var e, a = this,
			s = a.isSwiping,
			r = a.sliderStartPos.left || 0;
		s === !0 ? Math.abs(a.distance) > 10 && (a.canTap = !1, a.instance.group.length < 2 && a.instance.opts.touch.vertical ? a.isSwiping = "y" : a.instance.isSliding || a.instance.opts.touch.vertical === !1 || "auto" === a.instance.opts.touch.vertical && n(t).width() > 800 ? a.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = e > 45 && e < 135 ? "y" : "x"), a.instance.isSliding = a.isSwiping, a.startPoints = a.newPoints, n.each(a.instance.slides, function(t, e) {
			n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, e.pos === a.instance.current.pos && (a.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left)
		}), a.instance.SlideShow && a.instance.SlideShow.isActive && a.instance.SlideShow.stop()) : ("x" == s && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? r += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? r -= Math.pow(-a.distanceX, .8) : r += a.distanceX), a.sliderLastPos = {
			top: "x" == s ? 0 : a.sliderStartPos.top + a.distanceY,
			left: r
		}, a.requestId && (i(a.requestId), a.requestId = null), a.requestId = o(function() {
			a.sliderLastPos && (n.each(a.instance.slides, function(t, e) {
				var o = e.pos - a.instance.currPos;
				n.fancybox.setTranslate(e.$slide, {
					top: a.sliderLastPos.top,
					left: a.sliderLastPos.left + o * a.canvasWidth + o * e.opts.gutter
				})
			}), a.$container.addClass("fancybox-is-sliding"))
		}))
	}, u.prototype.onPan = function() {
		var t, e, a, s = this;
		s.canTap = !1, t = s.contentStartPos.width > s.canvasWidth ? s.contentStartPos.left + s.distanceX : s.contentStartPos.left, e = s.contentStartPos.top + s.distanceY, a = s.limitMovement(t, e, s.contentStartPos.width, s.contentStartPos.height), a.scaleX = s.contentStartPos.scaleX, a.scaleY = s.contentStartPos.scaleY, s.contentLastPos = a, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function() {
			n.fancybox.setTranslate(s.$content, s.contentLastPos)
		})
	}, u.prototype.limitMovement = function(t, e, n, o) {
		var i, a, s, r, c = this,
			l = c.canvasWidth,
			u = c.canvasHeight,
			d = c.contentStartPos.left,
			f = c.contentStartPos.top,
			h = c.distanceX,
			p = c.distanceY;
		return i = Math.max(0, .5 * l - .5 * n), a = Math.max(0, .5 * u - .5 * o), s = Math.min(l - n, .5 * l - .5 * n), r = Math.min(u - o, .5 * u - .5 * o), n > l && (h > 0 && t > i && (t = i - 1 + Math.pow(-i + d + h, .8) || 0), h < 0 && t < s && (t = s + 1 - Math.pow(s - d - h, .8) || 0)), o > u && (p > 0 && e > a && (e = a - 1 + Math.pow(-a + f + p, .8) || 0), p < 0 && e < r && (e = r + 1 - Math.pow(r - f - p, .8) || 0)), {
			top: e,
			left: t
		}
	}, u.prototype.limitPosition = function(t, e, n, o) {
		var i = this,
			a = i.canvasWidth,
			s = i.canvasHeight;
		return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
			top: e,
			left: t
		}
	}, u.prototype.onZoom = function() {
		var e = this,
			a = e.contentStartPos.width,
			r = e.contentStartPos.height,
			c = e.contentStartPos.left,
			l = e.contentStartPos.top,
			u = s(e.newPoints[0], e.newPoints[1]),
			d = u / e.startDistanceBetweenFingers,
			f = Math.floor(a * d),
			h = Math.floor(r * d),
			p = (a - f) * e.percentageOfImageAtPinchPointX,
			g = (r - h) * e.percentageOfImageAtPinchPointY,
			b = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
			m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
			y = b - e.centerPointStartX,
			v = m - e.centerPointStartY,
			x = c + (p + y),
			w = l + (g + v),
			$ = {
				top: w,
				left: x,
				scaleX: e.contentStartPos.scaleX * d,
				scaleY: e.contentStartPos.scaleY * d
			};
		e.canTap = !1, e.newWidth = f, e.newHeight = h, e.contentLastPos = $, e.requestId && (i(e.requestId), e.requestId = null), e.requestId = o(function() {
			n.fancybox.setTranslate(e.$content, e.contentLastPos)
		})
	}, u.prototype.ontouchend = function(t) {
		var o = this,
			s = Math.max((new Date).getTime() - o.startTime, 1),
			r = o.isSwiping,
			c = o.isPanning,
			l = o.isZooming;
		return o.endPoints = a(t), o.$container.removeClass("fancybox-controls--isGrabbing"), n(e).off(".fb.touch"), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.canTap ? o.onTap(t) : (o.speed = 366, o.velocityX = o.distanceX / s * .5, o.velocityY = o.distanceY / s * .5, o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)), void(c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r)))
	}, u.prototype.endSwiping = function(t) {
		var e = this,
			o = !1;
		e.instance.isSliding = !1, e.sliderLastPos = null, "y" == t && Math.abs(e.distanceY) > 50 ? (n.fancybox.animate(e.instance.current.$slide, {
			top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
			opacity: 0
		}, 150), o = e.instance.close(!0, 300)) : "x" == t && e.distanceX > 50 && e.instance.group.length > 1 ? o = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && e.instance.group.length > 1 && (o = e.instance.next(e.speedX)), o !== !1 || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150), e.$container.removeClass("fancybox-is-sliding")
	}, u.prototype.endPanning = function() {
		var t, e, o, i = this;
		i.contentLastPos && (i.instance.current.opts.touch.momentum === !1 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed, e = i.contentLastPos.top + i.velocityY * i.speed), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 330))
	}, u.prototype.endZooming = function() {
		var t, e, o, i, a = this,
			s = a.instance.current,
			r = a.newWidth,
			c = a.newHeight;
		a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
			top: e,
			left: t,
			width: r,
			height: c,
			scaleX: 1,
			scaleY: 1
		}, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.setTranslate(a.content, n.fancybox.getTranslate(a.$content)), n.fancybox.animate(a.$content, o, 150)))
	}, u.prototype.onTap = function(t) {
		var e, o = this,
			i = n(t.target),
			s = o.instance,
			r = s.current,
			c = t && a(t) || o.startPoints,
			l = c[0] ? c[0].x - o.$stage.offset().left : 0,
			u = c[0] ? c[0].y - o.$stage.offset().top : 0,
			d = function(e) {
				var i = r.opts[e];
				if (n.isFunction(i) && (i = i.apply(s, [r, t])), i) switch (i) {
					case "close":
						s.close(o.startEvent);
						break;
					case "toggleControls":
						s.toggleControls(!0);
						break;
					case "next":
						s.next();
						break;
					case "nextOrClose":
						s.group.length > 1 ? s.next() : s.close(o.startEvent);
						break;
					case "zoom":
						"image" == r.type && (r.isLoaded || r.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(l, u) : s.group.length < 2 && s.close(o.startEvent))
				}
			};
		if (!(t.originalEvent && 2 == t.originalEvent.button || s.isSliding || l > i[0].clientWidth + i.offset().left)) {
			if (i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
			else if (i.is(".fancybox-slide")) e = "Slide";
			else {
				if (!s.current.$content || !s.current.$content.has(t.target).length) return;
				e = "Content"
			}
			if (o.tapped) {
				if (clearTimeout(o.tapped), o.tapped = null, Math.abs(l - o.tapX) > 50 || Math.abs(u - o.tapY) > 50 || s.isSliding) return this;
				d("dblclick" + e)
			} else o.tapX = l, o.tapY = u, r.opts["dblclick" + e] && r.opts["dblclick" + e] !== r.opts["click" + e] ? o.tapped = setTimeout(function() {
				o.tapped = null, d("click" + e)
			}, 300) : d("click" + e);
			return this
		}
	}, n(e).on("onActivate.fb", function(t, e) {
		e && !e.Guestures && (e.Guestures = new u(e))
	}), n(e).on("beforeClose.fb", function(t, e) {
		e && e.Guestures && e.Guestures.destroy()
	})
}(window, document, window.jQuery),
function(t, e) {
	"use strict";
	var n = function(t) {
		this.instance = t, this.init()
	};
	e.extend(n.prototype, {
		timer: null,
		isActive: !1,
		$button: null,
		speed: 3e3,
		init: function() {
			var t = this;
			t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
				t.toggle()
			}), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
		},
		set: function() {
			var t = this;
			t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
				t.instance.next()
			}, t.instance.current.opts.slideShow.speed || t.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())
		},
		clear: function() {
			var t = this;
			clearTimeout(t.timer), t.timer = null
		},
		start: function() {
			var t = this,
				e = t.instance.current;
			t.instance && e && (e.opts.loop || e.index < t.instance.group.length - 1) && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), e.isComplete && t.set())
		},
		stop: function() {
			var t = this,
				e = t.instance.current;
			t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), t.isActive = !1
		},
		toggle: function() {
			var t = this;
			t.isActive ? t.stop() : t.start()
		}
	}), e(t).on({
		"onInit.fb": function(t, e) {
			e && !e.SlideShow && (e.SlideShow = new n(e))
		},
		"beforeShow.fb": function(t, e, n, o) {
			var i = e && e.SlideShow;
			o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
		},
		"afterShow.fb": function(t, e, n) {
			var o = e && e.SlideShow;
			o && o.isActive && o.set()
		},
		"afterKeydown.fb": function(n, o, i, a, s) {
			var r = o && o.SlideShow;
			!r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle())
		},
		"beforeClose.fb onDeactivate.fb": function(t, e) {
			var n = e && e.SlideShow;
			n && n.stop()
		}
	}), e(t).on("visibilitychange", function() {
		var n = e.fancybox.getInstance(),
			o = n && n.SlideShow;
		o && o.isActive && (t.hidden ? o.clear() : o.set())
	})
}(document, window.jQuery),
function(t, e) {
	"use strict";
	var n = function() {
		var e, n, o, i = [
				["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
				["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
				["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
				["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
				["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
			],
			a = {};
		for (n = 0; n < i.length; n++)
			if (e = i[n], e && e[1] in t) {
				for (o = 0; o < e.length; o++) a[i[0][o]] = e[o];
				return a
			} return !1
	}();
	if (!n) return void(e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));
	var o = {
		request: function(e) {
			e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
		},
		exit: function() {
			t[n.exitFullscreen]()
		},
		toggle: function(e) {
			e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
		},
		isFullscreen: function() {
			return Boolean(t[n.fullscreenElement])
		},
		enabled: function() {
			return Boolean(t[n.fullscreenEnabled])
		}
	};
	e(t).on({
		"onInit.fb": function(t, e) {
			var n, i = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
			e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
				t.stopPropagation(), t.preventDefault(), o.toggle(n[0])
			}), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(n[0]), e.FullScreen = o) : i.hide()
		},
		"afterKeydown.fb": function(t, e, n, o, i) {
			e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
		},
		"beforeClose.fb": function(t) {
			t && t.FullScreen && o.exit()
		}
	}), e(t).on(n.fullscreenchange, function() {
		var t = e.fancybox.getInstance();
		t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0)), t.trigger("onFullscreenChange", o.isFullscreen())
	})
}(document, window.jQuery),
function(t, e) {
	"use strict";
	var n = function(t) {
		this.instance = t, this.init()
	};
	e.extend(n.prototype, {
		$button: null,
		$grid: null,
		$list: null,
		isVisible: !1,
		init: function() {
			var t = this,
				e = t.instance.group[0],
				n = t.instance.group[1];
			t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), t.instance.group.length > 1 && t.instance.group[t.instance.currIndex].opts.thumbs && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && ("image" == n.type || n.opts.thumb || n.opts.$thumb) ? (t.$button.on("click", function() {
				t.toggle()
			}), t.isActive = !0) : (t.$button.hide(), t.isActive = !1)
		},
		create: function() {
			var t, n, o = this.instance;
			this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container), t = "<ul>", e.each(o.group, function(e, o) {
				n = o.opts.thumb || (o.opts.$thumb ? o.opts.$thumb.attr("src") : null), n || "image" !== o.type || (n = o.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
			}), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click", "li", function() {
				o.jumpTo(e(this).data("index"))
			}), this.$list.find("img").hide().one("load", function() {
				var t, n, o, i, a = e(this).parent().removeClass("fancybox-thumbs-loading"),
					s = a.outerWidth(),
					r = a.outerHeight();
				t = this.naturalWidth || this.width, n = this.naturalHeight || this.height, o = t / s, i = n / r, o >= 1 && i >= 1 && (o > i ? (t /= i, n = r) : (t = s, n /= o)), e(this).css({
					width: Math.floor(t),
					height: Math.floor(n),
					"margin-top": Math.min(0, Math.floor(.3 * r - .3 * n)),
					"margin-left": Math.min(0, Math.floor(.5 * s - .5 * t))
				}).show()
			}).each(function() {
				this.src = e(this).data("src")
			})
		},
		focus: function() {
			this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
		},
		close: function() {
			this.$grid.hide()
		},
		update: function() {
			this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
		},
		hide: function() {
			this.isVisible = !1, this.update()
		},
		show: function() {
			this.isVisible = !0, this.update()
		},
		toggle: function() {
			this.isVisible = !this.isVisible, this.update()
		}
	}), e(t).on({
		"onInit.fb": function(t, e) {
			e && !e.Thumbs && (e.Thumbs = new n(e))
		},
		"beforeShow.fb": function(t, e, n, o) {
			var i = e && e.Thumbs;
			if (i && i.isActive) {
				if (n.modal) return i.$button.hide(), void i.hide();
				o && n.opts.thumbs.autoStart === !0 && i.show(), i.isVisible && i.focus()
			}
		},
		"afterKeydown.fb": function(t, e, n, o, i) {
			var a = e && e.Thumbs;
			a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
		},
		"beforeClose.fb": function(t, e) {
			var n = e && e.Thumbs;
			n && n.isVisible && e.opts.thumbs.hideOnClose !== !1 && n.close()
		}
	})
}(document, window.jQuery),
function(t, e, n) {
	"use strict";

	function o() {
		var t = e.location.hash.substr(1),
			n = t.split("-"),
			o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
			i = n.join("-");
		return o < 1 && (o = 1), {
			hash: t,
			index: o,
			gallery: i
		}
	}

	function i(t) {
		var e;
		"" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1), e.length || (e = n("#" + n.escapeSelector(t.gallery))), e.length && (s = !1, e.trigger("click")))
	}

	function a(t) {
		var e;
		return !!t && (e = t.current ? t.current.opts : t.opts, e.hash || (e.$orig ? e.$orig.data("fancybox") : ""))
	}
	n.escapeSelector || (n.escapeSelector = function(t) {
		var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
			n = function(t, e) {
				return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
			};
		return (t + "").replace(e, n)
	});
	var s = !0,
		r = null,
		c = null;
	n(function() {
		setTimeout(function() {
			n.fancybox.defaults.hash !== !1 && (n(t).on({
				"onInit.fb": function(t, e) {
					var n, i;
					e.group[e.currIndex].opts.hash !== !1 && (n = o(), i = a(e), i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
				},
				"beforeShow.fb": function(n, o, i) {
					var l;
					i && i.opts.hash !== !1 && (l = a(o), l && "" !== l && (e.location.hash.indexOf(l) < 0 && (o.opts.origHash = e.location.hash), r = l + (o.group.length > 1 ? "-" + (i.index + 1) : ""), "replaceState" in e.history ? (c && clearTimeout(c), c = setTimeout(function() {
						e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + r), c = null, s = !1
					}, 300)) : e.location.hash = r))
				},
				"beforeClose.fb": function(o, i, s) {
					var l, u;
					c && clearTimeout(c), s.opts.hash !== !1 && (l = a(i), u = i && i.opts.origHash ? i.opts.origHash : "", l && "" !== l && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + u) : (e.location.hash = u, n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))), r = null)
				}
			}), n(e).on("hashchange.fb", function() {
				var t = o();
				n.fancybox.getInstance() ? !r || r === t.gallery + "-" + t.index || 1 === t.index && r == t.gallery || (r = null, n.fancybox.close()) : "" !== t.gallery && i(t)
			}), i(o()))
		}, 50)
	})
}(document, window, window.jQuery);
/*!
  # Responsive Slider widget script
  # by w3widgets
  #
  # Author: Lukasz Kokoszkiewicz
  #
  # Copyright Ã‚Â© w3widgets 2013 All Rights Reserved
*/
(function() {
	(function($) {
		var Slider, autoplay, interval, opts, parallax, parallaxDirection, parallaxDistance, spy, touch, transitionTime;
		Slider = function(element, options) {
			this.$element = element;
			this.$slides = this.$element.find('.slides ul li');
			if (this.$slides.length < 1) {
				this.$slides = this.$element.find('[data-group="slides"] ul li');
			}
			this.$prevNext = this.$element.find('[data-jump]');
			this.$pages = this.$element.find('[data-jump-to]');
			this.$slidesContainer = this.$element.find('[data-group="slides"]');
			this.$rel = this.$element.find('[data-group="slides"] ul');
			this.$rel.css('position', 'relative');
			this.slideChangeInProgress = false;
			this.interval = false;
			this.options = options;
			this.current = 2;
			this.slide = 1;
			this.set(2, true);
			this.options.onInit.call(this);
			this.runAnimations();
			return null;
		};
		Slider.prototype = {
			getGlobalWidth: function() {
				return this.$element.width();
			},
			updateControls: function() {
				this.$pages.removeClass('active');
				return this.$pages.filter('[data-jump-to=' + (this.current - 1) + ']').addClass('active');
			},
			runAnimations: function() {
				var captions, r;
				r = this;
				captions = $(this.$slides[this.current - 1]).find('[data-animate]');
				return captions.each(function() {
					var $caption;
					$caption = $(this);
					return r.options.animations[$caption.data('animate')]($caption, $caption.data('delay'), $caption.data('length'));
				});
			},
			hideAnimatedCaptions: function(slide) {
				return $(this.$slides[slide - 1]).find('[data-animate]').css({
					'opacity': 0
				});
			},
			calculateScroll: function(slide) {
				var gWidth;
				gWidth = this.getGlobalWidth();
				return (slide - 1) * gWidth;
			},
			resize: function() {
				return this.$rel.css('right', this.calculateScroll(this.current));
			},
			jump: function(slide, transitionTime, noanimation) {
				var animateOptions, gWidth, r, step;
				if (transitionTime == null) {
					transitionTime = this.options.transitionTime;
				}
				if (noanimation == null) {
					noanimation = false;
				}
				r = this;
				if (slide === r.current) {
					noanimation = true;
				}
				if (this.$slides.length >= slide && !this.slideChangeInProgress) {
					gWidth = this.getGlobalWidth();
					if (!noanimation) {
						this.hideAnimatedCaptions(slide);
					}
					step = void 0;
					if (this.options.parallax) {
						this.currentBgPosition = parseInt(r.$slidesContainer.css('background-position'));
						this.moveStartScroll = parseInt(this.$rel.css('right'), 10);
						step = function() {
							var position;
							position = Math.round(r.currentBgPosition - (r.moveStartScroll - parseInt(r.$rel.css('right'), 10)) * r.options.parallaxDistance * r.options.parallaxDirection) + 'px 0';
							return r.$slidesContainer.css('background-position', position);
						};
					}
					animateOptions = {
						duration: transitionTime,
						step: step,
						done: function() {
							if (slide === 1) {
								r.hideAnimatedCaptions(r.$slides.length - 1);
								r.set(r.$slides.length - 1);
							} else if (slide === r.$slides.length) {
								r.hideAnimatedCaptions(2);
								r.set(2);
							} else {
								r.current = slide;
								r.slide = slide - 1;
							}
							r.updateControls();
							if (!noanimation) {
								r.runAnimations();
							}
							r.options.onSlideChange.call(r);
							return null;
						},
						always: function() {
							r.slideChangeInProgress = false;
							return null;
						}
					};
					this.slideChangeInProgress = true;
					this.$rel.animate({
						'right': this.calculateScroll(slide)
					}, animateOptions);
				}
				return null;
			},
			set: function(slide, init) {
				var gWidth;
				if (init == null) {
					init = false;
				}
				gWidth = this.getGlobalWidth();
				this.$rel.css('right', this.calculateScroll(slide));
				this.current = slide;
				this.slide = slide - 1;
				this.updateControls();
				return null;
			},
			movestart: function(e) {
				if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
					return e.preventDefault();
				} else {
					this.stop();
					if (this.options.parallax) {
						this.currentBgPosition = parseInt(this.$slidesContainer.css('background-position'));
					}
					this.hideAnimatedCaptions(this.current - 1);
					this.hideAnimatedCaptions(this.current + 1);
					this.moveStartScroll = parseInt(this.$rel.css('right'), 10);
					this.$rel.stop();
					this.$rel.addClass('drag');
					return this.timeStart = new Date();
				}
			},
			move: function(e) {
				var position;
				if (this.options.parallax) {
					position = Math.round(this.currentBgPosition - e.distX * this.options.parallaxDistance * this.options.parallaxDirection) + 'px 0';
					this.$slidesContainer.css('background-position', position);
				}
				return this.$rel.css('right', this.moveStartScroll - e.distX);
			},
			moveend: function(e) {
				var absDist, distLeftFrac, gWidth, timeDelta, transitionTime;
				absDist = Math.abs(e.distX);
				timeDelta = (new Date()).getTime() - this.timeStart.getTime();
				gWidth = this.getGlobalWidth();
				distLeftFrac = absDist / gWidth;
				transitionTime = (timeDelta / distLeftFrac) * (1 - distLeftFrac);
				transitionTime = transitionTime < 1000 ? transitionTime : 1000;
				this.$rel.removeClass('drag');
				if (absDist < gWidth / this.options.moveDistanceToSlideChange) {
					return this.jump(this.current, transitionTime, true);
				} else {
					if (e.distX < 0) {
						return this.next(transitionTime);
					} else {
						return this.prev(transitionTime);
					}
				}
			},
			stop: function(permanent) {
				if (permanent == null) {
					permanent = true;
				}
				clearInterval(this.interval);
				if (permanent) {
					this.$element.off('mouseover');
					this.$element.off('mouseleave');
				}
				return null;
			},
			start: function() {
				var r;
				r = this;
				return this.interval = setInterval((function() {
					return r.next();
				}), this.options.interval);
			},
			autoplay: function() {
				var r;
				r = this;
				this.stop();
				this.start();
				this.$element.on('mouseover', function() {
					return r.stop(false);
				});
				return this.$element.on('mouseleave', function() {
					r.stop(false);
					return r.start();
				});
			},
			prev: function(transitionTime, noanimation) {
				if (transitionTime == null) {
					transitionTime = this.options.transitionTime;
				}
				if (noanimation == null) {
					noanimation = false;
				}
				this.jump(this.current - 1, transitionTime, noanimation);
				this.options.onSlidePrev.call(this);
				return this.options.onSlidePageChange.call(this);
			},
			next: function(transitionTime, noanimation) {
				if (transitionTime == null) {
					transitionTime = this.options.transitionTime;
				}
				if (noanimation == null) {
					noanimation = false;
				}
				this.jump(this.current + 1, transitionTime, noanimation);
				this.options.onSlideNext.call(this);
				return this.options.onSlidePageChange.call(this);
			}
		};
		$.fn.responsiveSlider = function(option) {
			var init, options, publicFunc, r, run;
			r = this;
			options = $.extend({}, $.fn.responsiveSlider.defaults, typeof option === 'object' && option);
			options.animations = $.fn.responsiveSlider.animations;
			publicFunc = {
				next: 'next',
				prev: 'prev',
				stop: 'stop',
				start: 'autoplay'
			};
			init = function($this) {
				var $firstSlide, $lastSlide, data, slides;
				options = $.metadata ? $.extend({}, options, $this.metadata()) : options;
				slides = $this.find('ul li');
				if (slides.length > 1) {
					$firstSlide = $(slides[0]);
					$lastSlide = $(slides[slides.length - 1]);
					$firstSlide.before($lastSlide.clone());
					$lastSlide.after($firstSlide.clone());
				}
				$this.data('slider', (data = new Slider($this, options)));
				if (options.autoplay) {
					data.interval = setInterval((function() {
						return data.next();
					}), options.interval);
					data.autoplay();
				}
				$(window).on('resize', function() {
					return data.resize();
				});
				$this.find('[data-jump]').on('click', function() {
					data[$(this).data('jump')]();
					return false;
				});
				$this.find('[data-jump-to]').on('click', function() {
					data.jump($(this).data('jump-to') + 1);
					return false;
				});
				if (options.touch) {
					return $this.find('[data-group="slide"]').on('movestart', function(e, $this) {
						return data.movestart(e);
					}).on('move', function(e) {
						return data.move(e);
					}).on('moveend', function(e) {
						return data.moveend(e);
					});
				}
			};
			run = function() {
				return r.each(function() {
					var $this, data;
					$this = $(this);
					data = $this.data('slider');
					if (!data) {
						init($this, options);
					} else if (typeof option === 'string') {
						data[publicFunc[option]]();
					} else if (typeof option === 'number') {
						data.jump(Math.abs(option) + 1);
					}
					return $this;
				});
			};
			if ($.fn.responsiveSlider.run) {
				return run();
			} else {
				$(window).on('load', run);
				return $.fn.responsiveSlider.run = true;
			}
		};
		$.fn.responsiveSlider.animations = {
			slideAppearRightToLeft: function($caption, delay, length) {
				var animate, css;
				if (delay == null) {
					delay = 0;
				}
				if (length == null) {
					length = 300;
				}
				css = {
					'margin-left': 200,
					'margin-right': -200,
					'opacity': 0
				};
				$caption.css(css);
				animate = function() {
					css = {
						'margin-left': 0,
						'margin-right': 0,
						'opacity': 1
					};
					return $caption.animate(css, length);
				};
				if (delay > 0) {
					return setTimeout(animate, delay);
				} else {
					return animate();
				}
			},
			slideAppearLeftToRight: function($caption, delay, length) {
				var animate, css;
				if (delay == null) {
					delay = 0;
				}
				if (length == null) {
					length = 300;
				}
				css = {
					'margin-left': -200,
					'margin-right': 200,
					'opacity': 0
				};
				$caption.css(css);
				animate = function() {
					css = {
						'margin-left': 0,
						'margin-right': 0,
						'opacity': 1
					};
					return $caption.animate(css, length);
				};
				if (delay > 0) {
					return setTimeout(animate, delay);
				} else {
					return animate();
				}
			},
			slideAppearUpToDown: function($caption, delay, length) {
				var animate, css;
				if (delay == null) {
					delay = 0;
				}
				if (length == null) {
					length = 300;
				}
				css = {
					'margin-top': 100,
					'margin-bottom': -100
				};
				$caption.css(css);
				animate = function() {
					css = {
						'margin-top': 0,
						'margin-bottom': 0,
						'opacity': 1
					};
					return $caption.animate(css, length);
				};
				if (delay > 0) {
					return setTimeout(animate, delay);
				} else {
					return animate();
				}
			},
			slideAppearDownToUp: function($caption, delay, length) {
				var animate, css;
				if (delay == null) {
					delay = 0;
				}
				if (length == null) {
					length = 300;
				}
				css = {
					'margin-top': -100,
					'margin-bottom': 100
				};
				$caption.css(css);
				animate = function() {
					css = {
						'margin-top': 0,
						'margin-bottom': 0,
						'opacity': 1
					};
					return $caption.animate(css, length);
				};
				if (delay > 0) {
					return setTimeout(animate, delay);
				} else {
					return animate();
				}
			}
		};
		$.fn.responsiveSlider.defaults = {
			autoplay: false,
			interval: 5000,
			touch: true,
			parallax: false,
			parallaxDistance: 1 / 10,
			parallaxDirection: 1,
			transitionTime: 300,
			moveDistanceToSlideChange: 4,
			onSlideChange: function() {},
			onSlideNext: function() {},
			onSlidePrev: function() {},
			onSlidePageChange: function() {},
			onInit: function() {}
		};
		$.fn.responsiveSlider.run = false;
		spy = $('[data-spy="responsive-slider"]');
		if (spy.length) {
			opts = {};
			if (autoplay = spy.data('autoplay')) {
				opts.autoplay = autoplay;
			}
			if (interval = spy.data('interval')) {
				opts.interval = interval;
			}
			if (parallax = spy.data('parallax')) {
				opts.parallax = parallax;
			}
			if (parallaxDistance = spy.data('parallax-distance')) {
				opts.parallaxDistance = parseInt(parallaxDistance, 10);
			}
			if (parallaxDirection = spy.data('parallax-direction')) {
				opts.parallaxDirection = parseInt(parallaxDirection, 10);
			}
			if (!(touch = spy.data('touch'))) {
				opts.touch = touch;
			}
			if (transitionTime = spy.data('transitiontime')) {
				opts.transitionTime = transitionTime;
			}
			spy.responsiveSlider(opts);
		}
		return null;
	})(jQuery);
}).call(this);
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function(e, t) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
	function e() {}
	var t = e.prototype;
	return t.on = function(e, t) {
		if (e && t) {
			var i = this._events = this._events || {},
				n = i[e] = i[e] || [];
			return n.indexOf(t) == -1 && n.push(t), this
		}
	}, t.once = function(e, t) {
		if (e && t) {
			this.on(e, t);
			var i = this._onceEvents = this._onceEvents || {},
				n = i[e] = i[e] || {};
			return n[t] = !0, this
		}
	}, t.off = function(e, t) {
		var i = this._events && this._events[e];
		if (i && i.length) {
			var n = i.indexOf(t);
			return n != -1 && i.splice(n, 1), this
		}
	}, t.emitEvent = function(e, t) {
		var i = this._events && this._events[e];
		if (i && i.length) {
			i = i.slice(0), t = t || [];
			for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
				var r = i[o],
					s = n && n[r];
				s && (this.off(e, r), delete n[r]), r.apply(this, t)
			}
			return this
		}
	}, t.allOff = function() {
		delete this._events, delete this._onceEvents
	}, e
}),
function(e, t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
		return t(e, i)
	}) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
	function i(e, t) {
		for (var i in t) e[i] = t[i];
		return e
	}

	function n(e) {
		if (Array.isArray(e)) return e;
		var t = "object" == typeof e && "number" == typeof e.length;
		return t ? d.call(e) : [e]
	}

	function o(e, t, r) {
		if (!(this instanceof o)) return new o(e, t, r);
		var s = e;
		return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
	}

	function r(e) {
		this.img = e
	}

	function s(e, t) {
		this.url = e, this.element = t, this.img = new Image
	}
	var h = e.jQuery,
		a = e.console,
		d = Array.prototype.slice;
	o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
		this.images = [], this.elements.forEach(this.addElementImages, this)
	}, o.prototype.addElementImages = function(e) {
		"IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
		var t = e.nodeType;
		if (t && u[t]) {
			for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
				var o = i[n];
				this.addImage(o)
			}
			if ("string" == typeof this.options.background) {
				var r = e.querySelectorAll(this.options.background);
				for (n = 0; n < r.length; n++) {
					var s = r[n];
					this.addElementBackgroundImages(s)
				}
			}
		}
	};
	var u = {
		1: !0,
		9: !0,
		11: !0
	};
	return o.prototype.addElementBackgroundImages = function(e) {
		var t = getComputedStyle(e);
		if (t)
			for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
				var o = n && n[2];
				o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
			}
	}, o.prototype.addImage = function(e) {
		var t = new r(e);
		this.images.push(t)
	}, o.prototype.addBackground = function(e, t) {
		var i = new s(e, t);
		this.images.push(i)
	}, o.prototype.check = function() {
		function e(e, i, n) {
			setTimeout(function() {
				t.progress(e, i, n)
			})
		}
		var t = this;
		return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
			t.once("progress", e), t.check()
		}) : void this.complete()
	}, o.prototype.progress = function(e, t, i) {
		this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
	}, o.prototype.complete = function() {
		var e = this.hasAnyBroken ? "fail" : "done";
		if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
			var t = this.hasAnyBroken ? "reject" : "resolve";
			this.jqDeferred[t](this)
		}
	}, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
		var e = this.getIsImageComplete();
		return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
	}, r.prototype.getIsImageComplete = function() {
		return this.img.complete && this.img.naturalWidth
	}, r.prototype.confirm = function(e, t) {
		this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
	}, r.prototype.handleEvent = function(e) {
		var t = "on" + e.type;
		this[t] && this[t](e)
	}, r.prototype.onload = function() {
		this.confirm(!0, "onload"), this.unbindEvents()
	}, r.prototype.onerror = function() {
		this.confirm(!1, "onerror"), this.unbindEvents()
	}, r.prototype.unbindEvents = function() {
		this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
		this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
		var e = this.getIsImageComplete();
		e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
	}, s.prototype.unbindEvents = function() {
		this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, s.prototype.confirm = function(e, t) {
		this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
	}, o.makeJQueryPlugin = function(t) {
		t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
			var i = new o(this, e, t);
			return i.jqDeferred.promise(h(this))
		})
	}, o.makeJQueryPlugin(), o
});
/*! This file is auto-generated */
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
! function(t, e) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
	"use strict";

	function i(i, r, a) {
		function h(t, e, n) {
			var o, r = "$()." + i + '("' + e + '")';
			return t.each(function(t, h) {
				var u = a.data(h, i);
				if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
				var d = u[e];
				if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
				var l = d.apply(u, n);
				o = void 0 === o ? l : o
			}), void 0 !== o ? o : t
		}

		function u(t, e) {
			t.each(function(t, n) {
				var o = a.data(n, i);
				o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
			})
		}
		a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[i] = function(t) {
			if ("string" == typeof t) {
				var e = o.call(arguments, 1);
				return h(this, t, e)
			}
			return u(this, t), this
		}, n(a))
	}

	function n(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var o = Array.prototype.slice,
		r = t.console,
		s = "undefined" == typeof r ? function() {} : function(t) {
			r.error(t)
		};
	return n(e || t.jQuery), i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
	function t() {}
	var e = t.prototype;
	return e.on = function(t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				n = i[t] = i[t] || [];
			return -1 == n.indexOf(e) && n.push(e), this
		}
	}, e.once = function(t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {},
				n = i[t] = i[t] || {};
			return n[e] = !0, this
		}
	}, e.off = function(t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var n = i.indexOf(e);
			return -1 != n && i.splice(n, 1), this
		}
	}, e.emitEvent = function(t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			i = i.slice(0), e = e || [];
			for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
				var r = i[o],
					s = n && n[r];
				s && (this.off(t, r), delete n[r]), r.apply(this, e)
			}
			return this
		}
	}, e.allOff = function() {
		delete this._events, delete this._onceEvents
	}, t
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
	"use strict";

	function t(t) {
		var e = parseFloat(t),
			i = -1 == t.indexOf("%") && !isNaN(e);
		return i && e
	}

	function e() {}

	function i() {
		for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0; u > e; e++) {
			var i = h[e];
			t[i] = 0
		}
		return t
	}

	function n(t) {
		var e = getComputedStyle(t);
		return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
	}

	function o() {
		if (!d) {
			d = !0;
			var e = document.createElement("div");
			e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
			var i = document.body || document.documentElement;
			i.appendChild(e);
			var o = n(e);
			s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e)
		}
	}

	function r(e) {
		if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var r = n(e);
			if ("none" == r.display) return i();
			var a = {};
			a.width = e.offsetWidth, a.height = e.offsetHeight;
			for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
				var c = h[l],
					f = r[c],
					m = parseFloat(f);
				a[c] = isNaN(m) ? 0 : m
			}
			var p = a.paddingLeft + a.paddingRight,
				g = a.paddingTop + a.paddingBottom,
				y = a.marginLeft + a.marginRight,
				v = a.marginTop + a.marginBottom,
				_ = a.borderLeftWidth + a.borderRightWidth,
				z = a.borderTopWidth + a.borderBottomWidth,
				E = d && s,
				b = t(r.width);
			b !== !1 && (a.width = b + (E ? 0 : p + _));
			var x = t(r.height);
			return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
		}
	}
	var s, a = "undefined" == typeof console ? e : function(t) {
			console.error(t)
		},
		h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		u = h.length,
		d = !1;
	return r
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
	"use strict";
	var t = function() {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var n = e[i],
				o = n + "MatchesSelector";
			if (t[o]) return o
		}
	}();
	return function(e, i) {
		return e[t](i)
	}
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
	var i = {};
	i.extend = function(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}, i.modulo = function(t, e) {
		return (t % e + e) % e
	};
	var n = Array.prototype.slice;
	i.makeArray = function(t) {
		if (Array.isArray(t)) return t;
		if (null === t || void 0 === t) return [];
		var e = "object" == typeof t && "number" == typeof t.length;
		return e ? n.call(t) : [t]
	}, i.removeFrom = function(t, e) {
		var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
	}, i.getParent = function(t, i) {
		for (; t.parentNode && t != document.body;)
			if (t = t.parentNode, e(t, i)) return t
	}, i.getQueryElement = function(t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, i.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.filterFindElements = function(t, n) {
		t = i.makeArray(t);
		var o = [];
		return t.forEach(function(t) {
			if (t instanceof HTMLElement) {
				if (!n) return void o.push(t);
				e(t, n) && o.push(t);
				for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
			}
		}), o
	}, i.debounceMethod = function(t, e, i) {
		i = i || 100;
		var n = t.prototype[e],
			o = e + "Timeout";
		t.prototype[e] = function() {
			var t = this[o];
			clearTimeout(t);
			var e = arguments,
				r = this;
			this[o] = setTimeout(function() {
				n.apply(r, e), delete r[o]
			}, i)
		}
	}, i.docReady = function(t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, i.toDashed = function(t) {
		return t.replace(/(.)([A-Z])/g, function(t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var o = t.console;
	return i.htmlInit = function(e, n) {
		i.docReady(function() {
			var r = i.toDashed(n),
				s = "data-" + r,
				a = document.querySelectorAll("[" + s + "]"),
				h = document.querySelectorAll(".js-" + r),
				u = i.makeArray(a).concat(i.makeArray(h)),
				d = s + "-options",
				l = t.jQuery;
			u.forEach(function(t) {
				var i, r = t.getAttribute(s) || t.getAttribute(d);
				try {
					i = r && JSON.parse(r)
				} catch (a) {
					return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + a))
				}
				var h = new e(t, i);
				l && l.data(t, n, h)
			})
		})
	}, i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
	"use strict";

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function n(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}

	function o(t) {
		return t.replace(/([A-Z])/g, function(t) {
			return "-" + t.toLowerCase()
		})
	}
	var r = document.documentElement.style,
		s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
		a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
		h = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [s],
		u = {
			transform: a,
			transition: s,
			transitionDuration: s + "Duration",
			transitionProperty: s + "Property",
			transitionDelay: s + "Delay"
		},
		d = n.prototype = Object.create(t.prototype);
	d.constructor = n, d._create = function() {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, d.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.getSize = function() {
		this.size = e(this.element)
	}, d.css = function(t) {
		var e = this.element.style;
		for (var i in t) {
			var n = u[i] || i;
			e[n] = t[i]
		}
	}, d.getPosition = function() {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			n = t[e ? "left" : "right"],
			o = t[i ? "top" : "bottom"],
			r = parseFloat(n),
			s = parseFloat(o),
			a = this.layout.size; - 1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s
	}, d.layoutPosition = function() {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop"),
			o = i ? "paddingLeft" : "paddingRight",
			r = i ? "left" : "right",
			s = i ? "right" : "left",
			a = this.position.x + t[o];
		e[r] = this.getXValue(a), e[s] = "";
		var h = n ? "paddingTop" : "paddingBottom",
			u = n ? "top" : "bottom",
			d = n ? "bottom" : "top",
			l = this.position.y + t[h];
		e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
	}, d.getXValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, d.getYValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, d._transitionTo = function(t, e) {
		this.getPosition();
		var i = this.position.x,
			n = this.position.y,
			o = t == this.position.x && e == this.position.y;
		if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
		var r = t - i,
			s = e - n,
			a = {};
		a.transform = this.getTranslate(r, s), this.transition({
			to: a,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})
	}, d.getTranslate = function(t, e) {
		var i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop");
		return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
	}, d.goTo = function(t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
		this.position.x = parseFloat(t), this.position.y = parseFloat(e)
	}, d._nonTransition = function(t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);
		for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, d.transition = function(t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
		var e = this._transn;
		for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
		for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		if (t.from) {
			this.css(t.from);
			var n = this.element.offsetHeight;
			n = null
		}
		this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
	};
	var l = "opacity," + o(a);
	d.enableTransition = function() {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: l,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(h, this, !1)
		}
	}, d.onwebkitTransitionEnd = function(t) {
		this.ontransitionend(t)
	}, d.onotransitionend = function(t) {
		this.ontransitionend(t)
	};
	var c = {
		"-webkit-transform": "transform"
	};
	d.ontransitionend = function(t) {
		if (t.target === this.element) {
			var e = this._transn,
				n = c[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
				var o = e.onEnd[n];
				o.call(this), delete e.onEnd[n]
			}
			this.emitEvent("transitionEnd", [this])
		}
	}, d.disableTransition = function() {
		this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
	}, d._removeStyles = function(t) {
		var e = {};
		for (var i in t) e[i] = "";
		this.css(e)
	};
	var f = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return d.removeTransitionStyles = function() {
		this.css(f)
	}, d.stagger = function(t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, d.removeElem = function() {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, d.remove = function() {
		return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, d.reveal = function() {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("visibleStyle");
		e[i] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onRevealTransitionEnd = function() {
		this.isHidden || this.emitEvent("reveal")
	}, d.getHideRevealTransitionEndProperty = function(t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var i in e) return i
	}, d.hide = function() {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("hiddenStyle");
		e[i] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onHideTransitionEnd = function() {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, d.destroy = function() {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, n
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
		return e(t, i, n, o, r)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
	"use strict";

	function r(t, e) {
		var i = n.getQueryElement(t);
		if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
		this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
		var o = ++l;
		this.element.outlayerGUID = o, c[o] = this, this._create();
		var r = this._getOption("initLayout");
		r && this.layout()
	}

	function s(t) {
		function e() {
			t.apply(this, arguments)
		}
		return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
	}

	function a(t) {
		if ("number" == typeof t) return t;
		var e = t.match(/(^\d*\.?\d*)(\w*)/),
			i = e && e[1],
			n = e && e[2];
		if (!i.length) return 0;
		i = parseFloat(i);
		var o = m[n] || 1;
		return i * o
	}
	var h = t.console,
		u = t.jQuery,
		d = function() {},
		l = 0,
		c = {};
	r.namespace = "outlayer", r.Item = o, r.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var f = r.prototype;
	n.extend(f, e.prototype), f.option = function(t) {
		n.extend(this.options, t)
	}, f._getOption = function(t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, r.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, f._create = function() {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
		var t = this._getOption("resize");
		t && this.bindResize()
	}, f.reloadItems = function() {
		this.items = this._itemize(this.element.children)
	}, f._itemize = function(t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
			var r = e[o],
				s = new i(r, this);
			n.push(s)
		}
		return n
	}, f._filterFindItemElements = function(t) {
		return n.filterFindElements(t, this.options.itemSelector)
	}, f.getItemElements = function() {
		return this.items.map(function(t) {
			return t.element
		})
	}, f.layout = function() {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, f._init = f.layout, f._resetLayout = function() {
		this.getSize()
	}, f.getSize = function() {
		this.size = i(this.element)
	}, f._getMeasurement = function(t, e) {
		var n, o = this.options[t];
		o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
	}, f.layoutItems = function(t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, f._getItemsForLayout = function(t) {
		return t.filter(function(t) {
			return !t.isIgnored
		})
	}, f._layoutItems = function(t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function(t) {
				var n = this._getItemLayoutPosition(t);
				n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
			}, this), this._processLayoutQueue(i)
		}
	}, f._getItemLayoutPosition = function() {
		return {
			x: 0,
			y: 0
		}
	}, f._processLayoutQueue = function(t) {
		this.updateStagger(), t.forEach(function(t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, f.updateStagger = function() {
		var t = this.options.stagger;
		return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
	}, f._positionItem = function(t, e, i, n, o) {
		n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
	}, f._postLayout = function() {
		this.resizeContainer()
	}, f.resizeContainer = function() {
		var t = this._getOption("resizeContainer");
		if (t) {
			var e = this._getContainerSize();
			e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
		}
	}, f._getContainerSize = d, f._setContainerMeasure = function(t, e) {
		if (void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, f._emitCompleteOnItems = function(t, e) {
		function i() {
			o.dispatchEvent(t + "Complete", null, [e])
		}

		function n() {
			s++, s == r && i()
		}
		var o = this,
			r = e.length;
		if (!e || !r) return void i();
		var s = 0;
		e.forEach(function(e) {
			e.once(t, n)
		})
	}, f.dispatchEvent = function(t, e, i) {
		var n = e ? [e].concat(i) : i;
		if (this.emitEvent(t, n), u)
			if (this.$element = this.$element || u(this.element), e) {
				var o = u.Event(e);
				o.type = t, this.$element.trigger(o, i)
			} else this.$element.trigger(t, i)
	}, f.ignore = function(t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, f.unignore = function(t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, f.stamp = function(t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, f.unstamp = function(t) {
		t = this._find(t), t && t.forEach(function(t) {
			n.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, f._find = function(t) {
		return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
	}, f._manageStamps = function() {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, f._getBoundingRect = function() {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, f._manageStamp = d, f._getElementOffset = function(t) {
		var e = t.getBoundingClientRect(),
			n = this._boundingRect,
			o = i(t),
			r = {
				left: e.left - n.left - o.marginLeft,
				top: e.top - n.top - o.marginTop,
				right: n.right - e.right - o.marginRight,
				bottom: n.bottom - e.bottom - o.marginBottom
			};
		return r
	}, f.handleEvent = n.handleEvent, f.bindResize = function() {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, f.unbindResize = function() {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, f.onresize = function() {
		this.resize()
	}, n.debounceMethod(r, "onresize", 100), f.resize = function() {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, f.needsResizeLayout = function() {
		var t = i(this.element),
			e = this.size && t;
		return e && t.innerWidth !== this.size.innerWidth
	}, f.addItems = function(t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, f.appended = function(t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, f.prepended = function(t) {
		var e = this._itemize(t);
		if (e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, f.reveal = function(t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function(t, i) {
				t.stagger(i * e), t.reveal()
			})
		}
	}, f.hide = function(t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function(t, i) {
				t.stagger(i * e), t.hide()
			})
		}
	}, f.revealItemElements = function(t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, f.hideItemElements = function(t) {
		var e = this.getItems(t);
		this.hide(e)
	}, f.getItem = function(t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, f.getItems = function(t) {
		t = n.makeArray(t);
		var e = [];
		return t.forEach(function(t) {
			var i = this.getItem(t);
			i && e.push(i)
		}, this), e
	}, f.remove = function(t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
			t.remove(), n.removeFrom(this.items, t)
		}, this)
	}, f.destroy = function() {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
	}, r.data = function(t) {
		t = n.getQueryElement(t);
		var e = t && t.outlayerGUID;
		return e && c[e]
	}, r.create = function(t, e) {
		var i = s(r);
		return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
	};
	var m = {
		ms: 1,
		s: 1e3
	};
	return r.Item = o, r
}),
function(t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
	var i = t.create("masonry");
	i.compatOptions.fitWidth = "isFitWidth";
	var n = i.prototype;
	return n._resetLayout = function() {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0, this.horizontalColIndex = 0
	}, n.measureColumns = function() {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
				i = t && t.element;
			this.columnWidth = i && e(i).outerWidth || this.containerWidth
		}
		var n = this.columnWidth += this.gutter,
			o = this.containerWidth + this.gutter,
			r = o / n,
			s = n - o % n,
			a = s && 1 > s ? "round" : "floor";
		r = Math[a](r), this.cols = Math.max(r, 1)
	}, n.getContainerWidth = function() {
		var t = this._getOption("fitWidth"),
			i = t ? this.element.parentNode : this.element,
			n = e(i);
		this.containerWidth = n && n.innerWidth
	}, n._getItemLayoutPosition = function(t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth,
			i = e && 1 > e ? "round" : "ceil",
			n = Math[i](t.size.outerWidth / this.columnWidth);
		n = Math.min(n, this.cols);
		for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
				x: this.columnWidth * r.col,
				y: r.y
			}, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
		return s
	}, n._getTopColPosition = function(t) {
		var e = this._getTopColGroup(t),
			i = Math.min.apply(Math, e);
		return {
			col: e.indexOf(i),
			y: i
		}
	}, n._getTopColGroup = function(t) {
		if (2 > t) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
		return e
	}, n._getColGroupY = function(t, e) {
		if (2 > e) return this.colYs[t];
		var i = this.colYs.slice(t, t + e);
		return Math.max.apply(Math, i)
	}, n._getHorizontalColPosition = function(t, e) {
		var i = this.horizontalColIndex % this.cols,
			n = t > 1 && i + t > this.cols;
		i = n ? 0 : i;
		var o = e.size.outerWidth && e.size.outerHeight;
		return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
			col: i,
			y: this._getColGroupY(i, t)
		}
	}, n._manageStamp = function(t) {
		var i = e(t),
			n = this._getElementOffset(t),
			o = this._getOption("originLeft"),
			r = o ? n.left : n.right,
			s = r + i.outerWidth,
			a = Math.floor(r / this.columnWidth);
		a = Math.max(0, a);
		var h = Math.floor(s / this.columnWidth);
		h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
		for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
	}, n._getContainerSize = function() {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, n._getContainerFitWidth = function() {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, n.needsResizeLayout = function() {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, i
});
var isCheckboxChecked = false;
$("#approve").change(function() {
	isCheckboxChecked = $(this).is(':checked');
	if (isCheckboxChecked) {
		$(this).parents('form').find('#submit').removeAttr('disabled');
	} else {
		$(this).parents('form').find('#submit').attr('disabled', 'disabled');
	}
})
$('document').ready(function() {
	var gridStructure = [];
	gridStructure[0] = ['height2'];
	gridStructure[1] = ['height2', 'height2'];
	gridStructure[2] = ['height3', 'height1', 'height2'];
	gridStructure[3] = ['height3', 'height1', 'height3', 'height2'];
	gridStructure[4] = ['height1', 'height3', 'height2', 'height2', 'height1'];
	gridStructure[5] = ['height3', 'height1', 'height2', 'height3', 'height2', 'height1'];
	gridStructure[6] = ['height3', 'height1', 'height2', 'height1', 'height2', 'height2', 'height1'];
	gridStructure[7] = ['height3', 'height1', 'height2', 'height1', 'height3', 'height2', 'height2', 'height1'];
	gridStructure[8] = ['height3', 'height1', 'height2', 'height1', 'height3', 'height2', 'height2', 'height1', 'height1'];
	gridStructure[9] = ['height3', 'height1', 'height2', 'height1', 'height3', 'height2', 'height2', 'height1', 'height1', 'height1'];
	var lengthOfGrid = $('.grid-item').length;
	if (lengthOfGrid == 1) {
		$('.grid-item').addClass('width100')
	} else if (lengthOfGrid == 2 || lengthOfGrid == 3) {
		$('.grid-item').addClass('width50')
	} else if (lengthOfGrid == 4 || lengthOfGrid == 5) {
		$('.grid-item').addClass('width33')
	} else if (lengthOfGrid == 6 || lengthOfGrid == 7) {
		$('.grid-item').addClass('width25')
	} else if (lengthOfGrid == 8) {
		$('.grid-item').addClass('width20')
	} else if (lengthOfGrid == 9) {
		$('.grid-item').eq(8).addClass('width100')
	} else if (lengthOfGrid == 10) {
		$('.grid-item').eq(8).addClass('width60')
		$('.grid-item').eq(9).addClass('width40')
	}
	$('.grid-item').each(function(index, element) {
		var currentClasses = gridStructure[(lengthOfGrid - 1)];
		$(element).addClass(currentClasses[index]);
	});
	$(window).scroll(function(event) {
		var scroll = $(window).scrollTop();
		if (scroll < $('.responsive-slider').height()) {
			$('#luxe-property .go-to-top').hide();
		} else {
			$('#luxe-property .go-to-top').show();
		}
	});
})
setTimeout(function() {
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
}, 500)
window.onscroll = function() {
	myFunction()
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		navbar.classList.add("sticky")
		if ($(window).width() < 992) {
			$('body').css('padding-top', $('.navbar').height());
		}
	} else {
		navbar.classList.remove("sticky");
		$('body').removeAttr('style');
	}
}
$(window).resize(function() {});
$(document).ready(function() {});

function get_max_div_height() {
	if (window.matchMedia('(min-width: 768px)').matches) {
		$(".hc-card").removeAttr("style");
		var heights = $(".hc-card").map(function() {
				return $(this).height();
			}).resize(),
			maxHeight = Math.max.apply(null, heights);
		$(".hc-card").height(maxHeight);
	} else {
		$(".hc-card").removeAttr("style");
	}
}
$('[data-fancybox-gallery]').fancybox({
	hash: false,
	infobar: false,
	protect: true,
	loop: false,
	buttons: ['close']
});
$('[data-fancybox-elevation]').fancybox({
	hash: false,
	infobar: false,
	protect: true,
	loop: false,
	buttons: ['close']
});
$('[data-fancybox]').fancybox({
	hash: false,
	infobar: false,
	protect: true,
	loop: false,
	buttons: ['close']
});
var atCityVile = $('.at-cityville-section .owl-carousel').owlCarousel({
	loop: false,
	margin: 10,
	nav: false,
	dots: false,
	items: 1
})
$('.at-cityville-section .carousel-prev').click(function() {
	atCityVile.trigger('prev.owl.carousel');
});
$('.at-cityville-section .carousel-next').click(function() {
	atCityVile.trigger('next.owl.carousel');
});
$(".cta-button").click(function() {
	if (($(this).hasClass('open-modal'))) {
		var attr = $(this).attr('data-project-config');
		if (typeof attr !== typeof undefined && attr !== false) {
			openModal(true, attr);
		} else {
			openModal(false, '');
		}
	} else {
		setTimeout(function() {
			if ($(window).width() < 992) {
				$('html, body').animate({
					scrollTop: $("#get-in-touch-section").offset().top - 65
				}, 600);
			} else {
				$('html, body').animate({
					scrollTop: $("#get-in-touch-section").offset().top - 85
				}, 600);
			}
		}, 500);
		var attr = $(this).attr('data-project-config');
		if (attr) {
			$(".section-get-in-touch").find('form').attr('data-project-config', attr);
		} else
			$(".section-get-in-touch").find('form').removeAttr('data-project-config')
	}
});
$(document).ready(function() {
	if (is_commercial_page) {
		console.log(getCookie('form_submitted'));
		if (getCookie('form_submitted') == 'yes') {
			return;
		}
		$('.modal .close').remove();
		$('.modal').modal({
			backdrop: 'static',
			keyboard: false
		})
		openModal(false, '');
	} else {
		setTimeout(function() {
			if (typeof isPropertyPage !== 'undefined' && isPropertyPage) {
				openModal(false, '');
			}
		}, 20000);
	}
	$('#luxe-property .go-to-top').click(function(event) {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});
});

function openModal(hasProjectConfig, value) {
	if ($("#exampleModalCenter").hasClass('show') == false) {
		if (hasProjectConfig) {
			$("#exampleModalCenter").find('form').attr('data-project-config', value);
		}
		$('#exampleModalCenter').modal('show');
	}
}
$('#exampleModalCenter').on('hide.bs.modal', function() {
	$(this).find('form').removeAttr('data-project-config');
})

function closeMenu() {
	if ($(window).width() < 992) {
		$('.navbar-toggler').click();
	}
}
$(document).ready(function($) {
	var totalSlides = 3
	var count = 1;
	if ($(window).width() < 922) {
		$('.third-slide').remove();
		totalSlides = 2;
	}
	$(window).scroll(function(event) {
		if (count == 3 && window.pageYOffset < sticky) {} else {
			$('.nav-link.btn').removeAttr('style')
		}
	});
	$('.responsive-slider').fadeTo(500, 1);
	$('.responsive-slider').responsiveSlider({
		autoplay: false,
		touch: true,
		transitionTime: 500,
		interval: 4000,
		onSlideChange: function() {},
		onSlideNext: function() {
			if (count < totalSlides) {
				count++
			} else {
				count = 1;
			}
		},
		onSlidePrev: function() {
			if (count > 1) {
				count--
			} else {
				count = totalSlides;
			}
		}
	});
});
var ajaxInProcess = false;
$('.cl-modal #submit, #luxe-property #submit, .property-page #submit, .wa-form #submit').click(function(event) {
	form = $(this).parents('form');
	if (!ajaxInProcess) {
		if (isValidated(form, $(this))) {
			form.find('#submit').attr('disabled', 'disabled');
			form.find('.loader-circle').show();
			form.find('#form-message').fadeOut();
			var formData = {
				action: 'submit_smart_asset',
				name: $.trim(form.find('#full_name').val()),
				phone: $.trim(form.find('#phone_number').val()),
				projectId: $.trim(form.find('#projectId').val()),
				sub_source_id: $.trim(form.find('#sub_source_id').val()),
				campaign_code: $.trim(form.find('#campaign_code').val()),
				url: $.trim(form.find('#url').val()),
				email_addresses: $.trim(form.find('#email_addresses').val()),
				email_subject: $.trim(form.find('#email_subject').val()),
			};
			var projectConfig = $.trim(form.attr('data-project-config'));
			if (projectConfig) {
				formData.projectConfig = projectConfig;
			}
			var campaignData = getCampaignDataObj();
			if (!$.isEmptyObject(campaignData)) {
				formData.metadata = JSON.stringify(campaignData);
			}
			ajaxInProcess = true;
			$.ajax({
				url: ajaxurl,
				type: 'POST',
				dataType: 'json',
				data: formData,
				success: function(data, textStatus, xhr) {
					ajaxInProcess = false;
					if (xhr.status == 200) {
						if (localStorage.getItem('brochure_url') != undefined && localStorage.getItem('brochure_url').length > 0) {
							$('#brochure_url_link')[0].click();
							localStorage.removeItem('brochure_url');
						}
						setTimeout(() => {
							window.location = get_thank_you_url();
						}, 4000);
					} else {
						form.find('#form-message').html('Unable to submit, please try again leter.');
						form.find('#form-message').fadeIn();
					}
					form.trigger("reset");
				},
				error: function(xhr, textStatus, errorThrown) {
					ajaxInProcess = false;
					if (xhr.status == 200) {
						window.location = get_thank_you_url();
					} else {
						form.find('#form-message').html('Unable to submit, please try again leter.');
						form.find('#form-message').fadeIn();
					}
					form.trigger("reset");
				}
			});
		}
	}
});
var totalCarouselItems = $('.investor-carousel').attr('data-total-items');
var totalItemsToShow = (totalCarouselItems < 5) ? totalCarouselItems : 5;
var setAutoplay = (totalCarouselItems > 3) ? true : false;
var carousel = $('.investor-carousel').owlCarousel({
	loop: false,
	margin: 30,
	nav: false,
	dots: false,
	autoplay: false,
	autoplayHoverPause: true,
	autoplayTimeout: 5000,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: totalItemsToShow
		}
	}
});
$('.smart-investors .arrow-left').click(function(event) {
	carousel.trigger('prev.owl.carousel');
});
$('.smart-investors .arrow-right').click(function(event) {
	carousel.trigger('next.owl.carousel');
});
$('.collapse-item .collapse-head').click(function(event) {
	$('.collapse-item').parent().find('.collapse-body.visible').slideUp();
	$('.collapse-item').parent().find('.collapse-body.visible').removeClass('.visible')
	if ($(this).parent().find('.collapse-body').is(':visible')) {
		$(this).parent().find('.collapse-body').slideUp('slow');
		$(this).parent().find('.collapse-body').removeClass('visible');
	} else {
		$(this).parent().find('.collapse-body').slideDown('slow');
		$(this).parent().find('.collapse-body').addClass('visible');
	}
	$(this).toggleClass('is-open');
	$(this).toggleClass('is-close');
});
$('.smart-investors .read-more').click(function(event) {
	if ($(this).hasClass('open')) {
		$(this).removeClass('open');
		$(this).parent().find('.about').removeAttr('style')
		$(this).find('a').text('Read More');
	} else {
		$(this).parent().find('.about').css('height', 'unset');
		$(this).addClass('open')
		$(this).find('a').text('Read Less');
	}
});

function isValidated(form, clickedButton) {
	var isValidated = true;
	form.find('.form-error-message').remove();
	var input = form.find('#full_name');
	if (!$.trim(input.val())) {
		input.focus();
		input.after('<div class="form-error-message">Fill your name</div>')
		isValidated = false
		console.log(isValidated)
	}
	var input = form.find('#phone_number');
	if (!$.trim(input.val())) {
		input.focus();
		input.after('<div class="form-error-message" style="position:absolute; bottom:-18px">Fill your phone number</div>')
		isValidated = false
	} else if ($.trim(input.val()).length != 10) {
		input.focus();
		input.after('<div class="form-error-message" style="position:absolute; bottom:-18px">Phone number should be 10 digit</div>')
		isValidated = false
	}
	return isValidated;
}

function isNumberKey(txt, evt) {
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode == 46) {
		if (txt.value.indexOf('.') === -1) {
			return true;
		} else {
			return false;
		}
	} else {
		if (charCode > 31 && (charCode < 48 || charCode > 57))
			return false;
	}
	return true;
}

function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function getCampaignDataObj() {
	var vars = {},
		hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		if (hash[0] && hash[1]) {
			if (hash[0]) {
				vars[hash[0]] = hash[1];
			}
		}
	}
	return vars;
}

function getModalRequestFromQueryStirng() {
	var vars = [],
		hash;
	var validCampaignVars = ['show_modal'];
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		if (hash[0] && hash[1] && validCampaignVars.includes(hash[0])) {
			if (hash[0]) {
				vars[hash[0]] = hash[1];
			}
		}
	}
	return vars;
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
var viewMoreOpen = false;
$('.view-more').click(function(event) {
	if (!viewMoreOpen) {
		$('.bg-form-check-less').css('height', 'auto');
		$('.view-more').find(".fa").removeClass('fa-plus');
		$('.view-more').find(".fa").addClass('fa-minus');
		viewMoreOpen = true;
	} else {
		$('.bg-form-check-less').removeAttr('style');
		$('.view-more').find(".fa").removeClass('fa-minus');
		$('.view-more').find(".fa").addClass('fa-plus');
		viewMoreOpen = false;
	}
});
$('.prime').on('hide.bs.modal', function() {
	location.reload();
})
$("#luxe-property .keep_me_update").change(function() {
	if (this.checked) {
		$('#luxe-property #submit').prop("disabled", false);
	} else {
		$('#luxe-property #submit').prop("disabled", true);
	}
});
var luxeviewMoreOpen = false;
$('.luxe-view-more').click(function(event) {
	if (!luxeviewMoreOpen) {
		$('.bg-form-check-less').css({
			height: 'auto',
			overflow: 'unset'
		});
		$('.luxe-view-more').find(".fa").removeClass('fa-plus');
		$('.luxe-view-more').find(".fa").addClass('fa-minus');
		luxeviewMoreOpen = true;
	} else {
		$('.bg-form-check-less').css({
			height: '25px',
			overflow: 'hidden'
		});
		$('.luxe-view-more').find(".fa").removeClass('fa-minus');
		$('.luxe-view-more').find(".fa").addClass('fa-plus');
		luxeviewMoreOpen = false;
	}
});
if ($('#cp-form').length) {
	var form2 = new Vue({
		el: '#cp-form',
		data: {
			approve: false,
			isFirstStageValidated: false,
			firstStageVisible: true,
			showLoaderImage: false,
			cpID: String(),
			redirectionURL: String(),
			ajaxUrl: String(),
			apiUrl: String(),
			firstName: String(),
			lastName: String(),
			email: String(),
			phoneNo: String(),
			isFirstNameModified: false,
			isLastNameModified: false,
			isEmailModified: false,
			isPhoneNoModified: false,
			firstNameMessage: String(),
			lastNameMessage: String(),
			emailMessage: String(),
			phoneNoMessage: String(),
			isFirstNameLabelTop: false,
			isLastNameLabelTop: false,
			isEmailLabelTop: false,
			isPhoneNoLabelTop: false,
		},
		mounted: function(event) {
			$('#cp-form').removeClass('d-none');
			const form = this.$refs.form;
			this.ajaxUrl = form.dataset.ajaxurl;
			this.apiUrl = form.dataset.apiurl;
			this.redirectionURL = form.dataset.redirectionurl;
			this.cpID = form.dataset.cpid;
		},
		methods: {
			checkFirstStageValidation() {
				if (this.firstName.length > 0 && this.lastName.length > 0 && this.email.length > 0 && this.approve == true && this.phoneNo.length == 10 && isEmail(this.email)) {
					this.isFirstStageValidated = true;
				} else {
					this.isFirstStageValidated = false;
				}
			},
			isNumber: function(evt) {
				checkForNumber(evt);
			},
			submitFirstStage() {
				this.submitAjax();
			},
			submitAjax() {
				this.showLoaderImage = true;
				var formData = {
					action: "cp_submit_form_data",
					api_url: this.apiUrl,
					first_name: this.firstName,
					last_name: this.lastName,
					phone_no: this.phoneNo,
					email: this.email,
					cp_id: this.cpID
				};
				$.ajax({
					type: 'POST',
					url: this.ajaxUrl,
					data: formData,
					dataType: 'json',
					success: function(data) {
						form2.showLoaderImage = false;
						if (data.success == true) {
							form2.sendOTP();
						}
					},
					error: function(xhr, ajaxOptions, thrownError) {
						form2.showLoaderImage = false;
					}
				});
			},
			sendOTP() {
				form2.showLoaderImage = true;
				var formData = {
					action: "cp_send_otp",
					api_url: this.apiUrl,
					phone_no: this.phoneNo,
				};
				$.ajax({
					type: 'POST',
					url: this.ajaxUrl,
					data: formData,
					dataType: 'json',
					success: function(data) {
						form2.showLoaderImage = false;
						if (data.success == true) {
							if ($.trim(form2.redirectionURL).length > 0) {
								window.location.href = form2.redirectionURL + "?formOut=true&phone=" + form2.phoneNo + "&email=" + form2.email;
							}
						}
					},
					error: function(xhr, ajaxOptions, thrownError) {
						form2.showLoaderImage = false;
					}
				});
			},
			onFocusInFirstNameInput() {
				this.isFirstNameLabelTop = true;
			},
			onFocusOutFirstNameInput() {
				if (this.firstName.length == 0) {
					this.isFirstNameLabelTop = false;
				}
				this.isFirstNameModified = true;
			},
			onFocusInLastNameInput() {
				this.isLastNameLabelTop = true;
			},
			onFocusOutLastNameInput() {
				if (this.lastName.length == 0) {
					this.isLastNameLabelTop = false;
				}
				this.isLastNameModified = true;
			},
			onFocusInEmailInput() {
				this.isEmailLabelTop = true;
			},
			onFocusOutEmailInput() {
				if (this.email.length == 0) {
					this.isEmailLabelTop = false;
				}
				this.isEmailModified = true;
			},
			onFocusInPhoneNoInput() {
				this.isPhoneNoLabelTop = true;
			},
			onFocusOutPhoneNoInput() {
				if (this.phoneNo.length == 0) {
					this.isPhoneNoLabelTop = false;
				}
				this.isPhoneNoModified = true;
			}
		},
		computed: {
			checkFirstNameValidation() {
				if (this.firstName.length == 0 && this.isFirstNameModified) {
					this.firstNameMessage = "First name should not be empty"
					return true
				} else {
					return false;
				}
			},
			checkLastNameValidation() {
				if (this.lastName.length == 0 && this.isLastNameModified) {
					this.lastNameMessage = "Last name should not be empty";
					return true;
				} else {
					return false;
				}
			},
			checkEmailValidation() {
				if (this.email.length == 0 && this.isEmailModified) {
					this.emailMessage = "Email should not be empty";
					return true
				} else if (!isEmail(this.email) && this.isEmailModified) {
					this.emailMessage = "Please enter a valid eail";
					return true
				} else {
					return false;
				}
			},
			checkPhoneNoValidation() {
				if (this.phoneNo.length == 0 && this.isPhoneNoModified) {
					this.phoneNoMessage = "Phone no. should not be empty";
					return true
				} else if (this.phoneNo.length != 10 && this.isPhoneNoModified) {
					this.phoneNoMessage = "Phone no. should be of 10 digit";
					return true;
				} else {
					return false;
				}
			},
		},
		watch: {
			approve: function(param) {
				this.checkFirstStageValidation();
			},
			firstName: function(param) {
				this.checkFirstStageValidation();
				this.isFirstNameModified = true;
			},
			lastName: function(param) {
				this.checkFirstStageValidation();
				this.isLastNameModified = true;
			},
			email: function(param) {
				this.checkFirstStageValidation();
				this.isEmailModified = true;
			},
			phoneNo: function(param) {
				this.checkFirstStageValidation();
				this.isPhoneNoModified = true;
			},
		}
	})
}

function checkForNumber(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
		evt.preventDefault();;
	} else {
		return true;
	}
}

function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}
var viewMoreOpenChannelPartner = false;
$('#cp-form .view-more').click(function(event) {
	if (!viewMoreOpenChannelPartner) {
		$('.bg-form-check-less').css('height', '100%');
		$('#cp-form .view-more').text('View Less');
		$('#cp-form .view-more').find(".fa").removeClass('fa-plus');
		$('#cp-form .view-more').find(".fa").addClass('fa-minus');
		viewMoreOpenChannelPartner = true;
	} else {
		$('.bg-form-check-less').removeAttr('style');
		$('#cp-form .view-more').find(".fa").removeClass('fa-minus');
		$('#cp-form .view-more').text('View More');
		$('#bp-multi-stage-form .view-more').find(".fa").addClass('fa-plus');
		viewMoreOpenChannelPartner = false;
	}
});
$("#form-get-in-touch .view-more").text("View More");
$("#form-get-in-touch .view-more").click(function() {
	$(".bg-form-check-less").toggleClass('active');
	if ($(".bg-form-check-less").hasClass("active")) {
		$("#form-get-in-touch .view-more").text("View Less");
	} else {
		$("#form-get-in-touch .view-more").text("View More");
	}
});
$("#cp-earn-more").on('click', function() {
	$('html, body').animate({
		'scrollTop': $("body").position().top
	}, 500, function() {
		$(form2.$refs.form).find('input[name="first_name"]').focus();
	});
});
$(document).ready(function() {
	$(document).click(function(event) {
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("show");
		if (_opened === true && clickover.parents(".navbar-nav").length == 0) {
			$(".navbar-toggler").click();
		}
	});
});
$(document).ready(function() {
	$('.elevations_slider').owlCarousel({
		items: 1,
		loop: false,
		nav: true,
		autoplay: false,
		autoplayTimeout: 5000
	});
	$('.luxe-banner').owlCarousel({
		items: 1,
		loop: false,
		nav: true,
		autoplay: false,
		autoplayTimeout: 5000
	});
	$('.prime-banner').owlCarousel({
		items: 1,
		loop: false,
		nav: true,
		autoplay: false,
		autoplayTimeout: 6000
	});
	$('.zen-indraprastha-banner').owlCarousel({
		items: 1,
		loop: false,
		nav: true,
		autoplay: false,
		autoplayTimeout: 5000
	});
	$('.amenities-carousel').owlCarousel({
		items: 2,
		loop: false,
		nav: true,
		autoplay: false,
		autoplayTimeout: 5000
	});
})

function get_thank_you_url() {
	var currentURL = window.location.href;
	var queryString = window.location.search;
	var currentUrlWithoutQueryString = currentURL.replace(queryString, '');
	var thankYouPageURL = currentUrlWithoutQueryString + 'thank-you/' + queryString;
	return thankYouPageURL;
}
$(document).ready(function() {
	$(".alphabet_and_space_only").on('input', function(e) {
		var inputText = $(this).val();
		var resultText = inputText.replace(/[^a-zA-Z ]/g, '');
		$(this).val(resultText);
	});
	$(".numberonly").on('input', function(e) {
		var inputText = $(this).val();
		var resultText = inputText.replace(/[^0-9]/g, '');
		$(this).val(resultText);
	});
	var floorCarousel = $('.floor-carousel').owlCarousel({
		loop: false,
		margin: 10,
		items: 1,
		nav: false,
		autoplay: false,
		autoplayTimeout: 3000,
		dots: true,
	});
	var galleryCarousel = $('.gallery-carousel').owlCarousel({
		loop: false,
		margin: 10,
		nav: false,
		autoplay: false,
		autoplayTimeout: 3000,
		dots: false,
		responsive: {
			0: {
				items: 2
			},
			992: {
				items: 4
			}
		}
	})
	$('#gallery .carousel-prev').click(function() {
		galleryCarousel.trigger('prev.owl.carousel');
	});
	$('#gallery .carousel-next').click(function() {
		galleryCarousel.trigger('next.owl.carousel');
	});
});

function onMapLoad(locations) {
	var map = new google.maps.Map(document.getElementById('map_canvas'), {
		zoom: 10,
		center: new google.maps.LatLng(-33.92, 151.25),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	var infowindow = new google.maps.InfoWindow();
	var marker, i;
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
$(window).on('load', function() {
	$('.location_section .location_content .location_grid .location_tabs .nav .nav-item:first-child').trigger('click');
});
$(".view_button").text("View More");
$(".view_button").click(function() {
	$(".checkbox_group p").toggleClass('active');
	if ($(".checkbox_group p").hasClass("active")) {
		$(".view_button").text("View Less");
	} else {
		$(".view_button").text("View More");
	}
});
var telInput = $(".popup_phone_number");
telInput.intlTelInput({
	allowExtensions: true,
	formatOnDisplay: true,
	autoFormat: true,
	autoHideDialCode: true,
	autoPlaceholder: true,
	ipinfoToken: "yolo",
	nationalMode: false,
	numberType: "MOBILE",
	preferredCountries: ['in'],
	preventInvalidNumbers: true,
	separateDialCode: true,
	geoIpLookup: function(callback) {
		$.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
			var countryCode = (resp && resp.country) ? resp.country : "";
			callback(countryCode);
		});
	},
	utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
});
$('nav .navbar-toggler').click(function() {
	$('.property-mobile-collapse').fadeIn();
})
$('.property-mobile-collapse .close-btn').click(function() {
	$('.property-mobile-collapse').fadeOut();
})
$('.property-mobile-collapse .anchor').click(function() {
	$('.property-mobile-collapse').fadeOut();
	to = $(this).attr('data-url');
	location.hash = to;
});
var phone = $('#form-get-in-touch #phone_number');
phone.on('keyup', function() {
	$(this).parent().find('.form-error-message').remove()
	if ($(this).val().length > 10) {
		$(this).focus();
		$(this).after('<div class="form-error-message" style="position:absolute; bottom:-20px">Phone number should be 10 digit</div>');
	}
	if ($(this).val().length == 0) {
		$(this).focus();
		$(this).after('<div class="form-error-message" style="position:absolute; bottom:-20px">Fill your phone number</div>')
	}
});
document.addEventListener('wpcf7mailsent', function(event) {
	window.location = get_thank_you_url();
}, false);
localStorage.removeItem('brochure_url');
$('.cl-modal').on('hidden.bs.modal', function() {
	localStorage.removeItem('brochure_url');
});
(function($) {
	'use strict'
	var _callCount = 0;
	var $exampleModalCenter = $('#exampleModalCenter');
	var trueCallInterval;
	var clickInterval;
	var oneSubmit = false;
	$(document).on('click', '.cta-btn-fincity', function(e) {
		if ($(this).attr('data-url') != undefined && $(this).attr('data-url').length > 0) {
			localStorage.setItem('brochure_url', $(this).attr('data-url'));
		}
		e.preventDefault();
		_callCount = 0;
		$exampleModalCenter.modal('show');
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			window.location = "truecallersdk://truesdk/web_verify?requestNonce=" + truecallerData.uuid + "&partnerKey=" + truecallerData.appKey + "&partnerName=" + truecallerData.appName + "&lang=" + truecallerData.langauge + "&title=" + truecallerData.appName;
			clickInterval = setInterval(checkPageFocus, 600);
		}
	});

	function checkPageFocus() {
		if (document.hasFocus()) {
			getCustomerTrueCallerData(truecallerData.uuid);
			trueCallInterval = setInterval(getCustomerTrueCallerData, 3000, truecallerData.uuid);
		}
	}

	function getCustomerTrueCallerData(token) {
		clearInterval(clickInterval);
		clickInterval = null;
		if (_callCount > 2) {
			clearInterval(trueCallInterval);
			trueCallInterval = null;
		} else {
			if (!oneSubmit) {
				var _url = truecallerData.backendApiUrl + "/" + token;
				$.get(_url, function(callerData) {
					if (callerData) {
						$exampleModalCenter.find('input[name="first_name"]').val(callerData.name.firstName);
						$exampleModalCenter.find('input[name="last_name"]').val(callerData.name.lastName);
						var mobileNumber = callerData.mobileNumber.slice(callerData.mobileNumber.length - 10);
						$exampleModalCenter.find('input[name="phone_number"]').val(mobileNumber);
						if (callerData.mobileNumber.length == 12) {
							$exampleModalCenter.find('input[name="phone_number_prefix"]').val('+' + callerData.mobileNumber.substring(0, 2));
						}
						$exampleModalCenter.find('#submit').trigger('click');
						oneSubmit = true;
					}
				});
			}
		}
		_callCount++;
	}
})(jQuery);
jQuery(document).ready((function(e) {}));
! function() {
	var t = {
			793: function() {
				var t = function(t, e) {
					if (window.google) {
						var i = e("#" + t.find(".ekit-google-map").attr("id")),
							n = i.data("id"),
							o = i.data("api_key"),
							r = i.data("map_type"),
							s = i.data("map_address_type"),
							a = i.data("map_lat") || 23.7808875,
							h = i.data("map_lng") || 90.2792373,
							l = i.data("map_addr"),
							c = i.data("map_basic_marker_title"),
							u = i.data("map_basic_marker_content"),
							d = i.data("map_basic_marker_icon_enable"),
							p = i.data("map_basic_marker_icon"),
							f = i.data("map_basic_marker_icon_width"),
							m = i.data("map_basic_marker_icon_height"),
							g = i.data("map_zoom") || 14,
							v = i.data("map_markers"),
							y = i.data("map_static_width"),
							_ = i.data("map_static_height"),
							w = i.data("map_polylines"),
							b = i.data("map_stroke_color"),
							x = i.data("map_stroke_opacity"),
							S = i.data("map_stroke_weight"),
							E = i.data("map_stroke_fill_color"),
							C = i.data("map_stroke_fill_opacity"),
							I = i.data("map_overlay_content"),
							T = i.data("map_routes_origin_lat"),
							k = i.data("map_routes_origin_lng"),
							z = i.data("map_routes_dest_lat"),
							L = i.data("map_routes_dest_lng"),
							P = i.data("map_routes_travel_mode"),
							O = i.data("map_panorama_lat"),
							W = i.data("map_panorama_lng"),
							M = JSON.parse(decodeURIComponent((i.data("map_theme") + "").replace(/\+/g, "%20"))),
							A = i.data("map_streeview_control"),
							D = i.data("map_type_control"),
							R = i.data("map_zoom_control"),
							F = i.data("map_fullscreen_control"),
							j = i.data("map_scroll_zoom"),
							B = {};
						if ("static" !== r && (B = new GMaps({
								el: "#ekit-google-map-" + n,
								lat: a,
								lng: h,
								zoom: g,
								streetViewControl: A,
								mapTypeControl: D,
								zoomControl: R,
								fullscreenControl: F,
								scrollwheel: j
							})), "" != M && (B.addStyle({
								styledMapName: "Styled Map",
								styles: JSON.parse(M),
								mapTypeId: "map_style"
							}), B.setStyle("map_style")), "basic" == r) {
							var N = "" != u ? {
								content: u
							} : "";
							if ("yes" == d) var H = {
								url: p,
								scaledSize: new google.maps.Size(f, m)
							};
							else H = null;
							"address" == s ? GMaps.geocode({
								address: l,
								callback: function(t, e) {
									if ("OK" == e) {
										var i = t[0].geometry.location;
										B.setCenter(i.lat() || 0, i.lng() || 0), B.addMarker({
											lat: i.lat(),
											lng: i.lng(),
											title: c,
											infoWindow: N,
											icon: H
										})
									}
								}
							}) : "coordinates" == s && B.addMarker({
								lat: a,
								lng: h,
								title: c,
								infoWindow: N,
								icon: H
							})
						}
						if ("marker" == r)
							if ((Q = JSON.parse(decodeURIComponent((v + "").replace(/\+/g, "%20")))).length > 0) {
								var Y = new GMaps({
									el: "#ekit-google-map-" + n,
									lat: Q[0].map_marker_lat,
									lng: Q[0].map_marker_lng,
									zoom: g,
									streetViewControl: A,
									mapTypeControl: D,
									zoomControl: R,
									fullscreenControl: F,
									scrollwheel: j
								});
								Y.setCenter(Q[0].map_marker_lat || 0, Q[0].map_marker_lng || 0), "" != M && (Y.addStyle({
									styledMapName: "Styled Map",
									styles: JSON.parse(M),
									mapTypeId: "map_style"
								}), Y.setStyle("map_style")), Q.forEach((function(t) {
									if ("" != t.map_marker_content) var e = {
										content: t.map_marker_content
									};
									else e = "";
									if ("yes" == t.map_marker_icon_enable) var i = {
										url: t.map_marker_icon.url,
										scaledSize: new google.maps.Size(t.map_marker_icon_width, t.map_marker_icon_height)
									};
									else i = "";
									Y.addMarker({
										lat: parseFloat(t.map_marker_lat),
										lng: parseFloat(t.map_marker_lng),
										title: t.map_marker_title,
										infoWindow: e,
										icon: i
									})
								}))
							} if ("static" == r) {
							var Q = JSON.parse(decodeURIComponent((v + "").replace(/\+/g, "%20"))),
								X = [];
							Q.length > 0 && Q.forEach((function(t) {
								X.push({
									lat: parseFloat(t.map_marker_lat),
									lng: parseFloat(t.map_marker_lng),
									color: t.ekit_google_map_marker_icon_color
								})
							}));
							var q = GMaps.staticMapURL({
								zoom: g,
								size: [y, _],
								markers: X
							});
							e("<img />").attr({
								width: y,
								height: _,
								src: q + "&key=" + o
							}).appendTo("#ekit-google-map-" + n)
						}
						if ("polyline" == r) {
							var G = JSON.parse(decodeURIComponent((w + "").replace(/\+/g, "%20"))),
								Q = JSON.parse(decodeURIComponent((v + "").replace(/\+/g, "%20"))),
								U = [];
							G.forEach((function(t) {
								U.push([parseFloat(t.map_polyline_lat), parseFloat(t.map_polyline_lng)])
							}));
							var $ = JSON.parse(JSON.stringify(U));
							B.drawPolyline({
								path: $,
								strokeColor: b.toString(),
								strokeOpacity: x,
								strokeWeight: S
							}), Q.forEach((function(t) {
								if ("" != t.map_marker_content) var e = {
									content: t.map_marker_content
								};
								else e = "";
								if ("yes" == t.map_marker_icon_enable) var i = {
									url: t.map_marker_icon.url,
									scaledSize: new google.maps.Size(t.map_marker_icon_width, t.map_marker_icon_height)
								};
								else i = "";
								B.addMarker({
									lat: t.map_marker_lat,
									lng: t.map_marker_lng,
									title: t.map_marker_title,
									infoWindow: e,
									icon: i
								})
							})), "" != M && (B.addStyle({
								styledMapName: "Styled Map",
								styles: JSON.parse(M),
								mapTypeId: "polyline_map_style"
							}), B.setStyle("polyline_map_style"))
						}
						if ("polygon" == r) {
							Q = JSON.parse(decodeURIComponent((w + "").replace(/\+/g, "%20")));
							var J = [];
							Q.forEach((function(t) {
								J.push([parseFloat(t.map_polyline_lat), parseFloat(t.map_polyline_lng)])
							}));
							$ = JSON.parse(JSON.stringify(J));
							B.drawPolygon({
								paths: $,
								strokeColor: b.toString(),
								strokeOpacity: x,
								strokeWeight: S,
								fillColor: E.toString(),
								fillOpacity: C
							})
						}
						if ("overlay" == r) {
							if ("" != I) var K = '<div class="ekit-gmap-overlay">' + I + "</div>";
							else K = "";
							B.drawOverlay({
								lat: a,
								lng: h,
								content: K
							})
						}
						if ("routes" == r) B.drawRoute({
							origin: [T, k],
							destination: [z, L],
							travelMode: P.toString(),
							strokeColor: b.toString(),
							strokeOpacity: x,
							strokeWeight: S
						}), (Q = JSON.parse(decodeURIComponent((v + "").replace(/\+/g, "%20")))).length > 0 && Q.forEach((function(t) {
							if ("" != t.map_marker_content) var e = {
								content: t.map_marker_content
							};
							else e = "";
							if ("yes" == t.map_marker_icon_enable) var i = {
								url: t.map_marker_icon.url,
								scaledSize: new google.maps.Size(t.map_marker_icon_width, t.map_marker_icon_height)
							};
							else i = "";
							B.addMarker({
								lat: t.map_marker_lat,
								lng: t.map_marker_lng,
								title: t.map_marker_title,
								infoWindow: e,
								icon: i
							})
						}));
						if ("panorama" == r) GMaps.createPanorama({
							el: "#ekit-google-map-" + n,
							lat: O,
							lng: W
						})
					}
				};
				jQuery(window).on("elementor/frontend/init", (function() {
					elementorFrontend.hooks.addAction("frontend/element_ready/elementskit-google-map.default", t)
				}))
			},
			412: function(t, e, i) {
				var n, o, r, s;

				function a(t) {
					return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, a(t)
				}
				"undefined"
				/*!
				 * imagesLoaded PACKAGED v4.1.4
				 * JavaScript is all like "You images are done yet or what?"
				 * MIT License
				 */
				!=
				typeof window && window, "function" == typeof(o = function() {
						function t() {}
						var e = t.prototype;
						return e.on = function(t, e) {
							if (t && e) {
								var i = this._events = this._events || {},
									n = i[t] = i[t] || [];
								return -1 == n.indexOf(e) && n.push(e), this
							}
						}, e.once = function(t, e) {
							if (t && e) {
								this.on(t, e);
								var i = this._onceEvents = this._onceEvents || {};
								return (i[t] = i[t] || {})[e] = !0, this
							}
						}, e.off = function(t, e) {
							var i = this._events && this._events[t];
							if (i && i.length) {
								var n = i.indexOf(e);
								return -1 != n && i.splice(n, 1), this
							}
						}, e.emitEvent = function(t, e) {
							var i = this._events && this._events[t];
							if (i && i.length) {
								i = i.slice(0), e = e || [];
								for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
									var r = i[o];
									n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e)
								}
								return this
							}
						}, e.allOff = function() {
							delete this._events, delete this._onceEvents
						}, t
					}) ? (r = {
						id: "ev-emitter/ev-emitter",
						exports: {},
						loaded: !1
					}, n = o.call(r.exports, i, r.exports, r), r.loaded = !0, n === undefined && (n = r.exports)) : n = o,
					/*!
					 * imagesLoaded v4.1.4
					 * JavaScript is all like "You images are done yet or what?"
					 * MIT License
					 */
					function(i, o) {
						"use strict";
						s = function(t) {
							return function(t, e) {
								var i = t.jQuery,
									n = t.console;

								function o(t, e) {
									for (var i in e) t[i] = e[i];
									return t
								}
								var r = Array.prototype.slice;

								function s(t) {
									return Array.isArray(t) ? t : "object" == a(t) && "number" == typeof t.length ? r.call(t) : [t]
								}

								function h(t, e, r) {
									if (!(this instanceof h)) return new h(t, e, r);
									var a = t;
									"string" == typeof t && (a = document.querySelectorAll(t)), a ? (this.elements = s(a), this.options = o({}, this.options), "function" == typeof e ? r = e : o(this.options, e), r && this.on("always", r), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (a || t))
								}
								h.prototype = Object.create(e.prototype), h.prototype.options = {}, h.prototype.getImages = function() {
									this.images = [], this.elements.forEach(this.addElementImages, this)
								}, h.prototype.addElementImages = function(t) {
									"IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
									var e = t.nodeType;
									if (e && l[e]) {
										for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
											var o = i[n];
											this.addImage(o)
										}
										if ("string" == typeof this.options.background) {
											var r = t.querySelectorAll(this.options.background);
											for (n = 0; n < r.length; n++) {
												var s = r[n];
												this.addElementBackgroundImages(s)
											}
										}
									}
								};
								var l = {
									1: !0,
									9: !0,
									11: !0
								};

								function c(t) {
									this.img = t
								}

								function u(t, e) {
									this.url = t, this.element = e, this.img = new Image
								}
								return h.prototype.addElementBackgroundImages = function(t) {
									var e = getComputedStyle(t);
									if (e)
										for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
											var o = n && n[2];
											o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
										}
								}, h.prototype.addImage = function(t) {
									var e = new c(t);
									this.images.push(e)
								}, h.prototype.addBackground = function(t, e) {
									var i = new u(t, e);
									this.images.push(i)
								}, h.prototype.check = function() {
									var t = this;

									function e(e, i, n) {
										setTimeout((function() {
											t.progress(e, i, n)
										}))
									}
									this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
										t.once("progress", e), t.check()
									})) : this.complete()
								}, h.prototype.progress = function(t, e, i) {
									this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug
								}, h.prototype.complete = function() {
									var t = this.hasAnyBroken ? "fail" : "done";
									if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
										var e = this.hasAnyBroken ? "reject" : "resolve";
										this.jqDeferred[e](this)
									}
								}, c.prototype = Object.create(e.prototype), c.prototype.check = function() {
									this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
								}, c.prototype.getIsImageComplete = function() {
									return this.img.complete && this.img.naturalWidth
								}, c.prototype.confirm = function(t, e) {
									this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
								}, c.prototype.handleEvent = function(t) {
									var e = "on" + t.type;
									this[e] && this[e](t)
								}, c.prototype.onload = function() {
									this.confirm(!0, "onload"), this.unbindEvents()
								}, c.prototype.onerror = function() {
									this.confirm(!1, "onerror"), this.unbindEvents()
								}, c.prototype.unbindEvents = function() {
									this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
								}, u.prototype = Object.create(c.prototype), u.prototype.check = function() {
									this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
								}, u.prototype.unbindEvents = function() {
									this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
								}, u.prototype.confirm = function(t, e) {
									this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
								}, h.makeJQueryPlugin = function(e) {
									(e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
										return new h(this, t, e).jqDeferred.promise(i(this))
									})
								}, h.makeJQueryPlugin(), h
							}(i, t)
						}.apply(e, [n]), s === undefined || (t.exports = s)
					}("undefined" != typeof window ? window : this)
			},
			32: function() {
				! function(t) {
					"use strict";

					function e() {
						this.bodyEl = t("body"), this.wnEl = t(window)
					}
					e.prototype.setWnWidth = function() {
						this.wnWidth = this.wnEl.width()
					}, e.prototype.hide = function() {
						this.el.removeClass("is-active"), this.bodyEl.children("[data-info-tip-content]").remove()
					}, e.prototype.init = function() {
						var e = this;
						e.el.length && (e.setWnWidth(), e.el.on("mouseover", (function() {
							var i = t(this),
								n = i.offset(),
								o = i.children("p");
							if (!i.hasClass("is-active")) {
								i.addClass("is-active"), n.left = n.left - 40, o = o.clone().css({
									transform: "translate3d(" + n.left + "px, " + n.top + "px, 0px)"
								}).appendTo(e.bodyEl), n.left = n.left + 10, o.contentWidth = o.outerWidth();
								var r = o.contentWidth - (n.left + o.contentWidth - e.wnWidth);
								r < o.contentWidth && o.css("width", r)
							}
						})).on("mouseleave", (function() {
							e.hide()
						})), this.wnEl.on("resize", (function() {
							i.setWnWidth(), i.hide()
						})))
					};
					var i = new e;
					t(window).on("load", (function() {
						i.el = t("[data-info-tip]"), i.init()
					}))
				}(jQuery)
			},
			557: function(t, e, i) {
				var n, o, r, s, a, h, l, c, u, d, p, f, m, g, v, y, _, w, b, x, S, E, C, I, T, k, z, L, P, O, W, M, A, D, R, F, j, B, N, H, Y, Q, X, q, G, U, $, J, K, Z, V, tt, et, it, nt, ot, rt, st, at, ht;

				function lt(t) {
					return lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, lt(t)
				}
				/*!
				 * Isotope PACKAGED v3.0.6
				 *
				 * Licensed GPLv3 for open source use
				 * or Isotope Commercial License for commercial use
				 *
				 * https://isotope.metafizzy.co
				 * Copyright 2010-2018 Metafizzy
				 */
				ht = window, st = [i(311)], at = function(t) {
						return function(t, e) {
							"use strict";

							function i(i, r, a) {
								function h(t, e, n) {
									var o, r = "$()." + i + '("' + e + '")';
									return t.each((function(t, h) {
										var l = a.data(h, i);
										if (l) {
											var c = l[e];
											if (c && "_" != e.charAt(0)) {
												var u = c.apply(l, n);
												o = void 0 === o ? u : o
											} else s(r + " is not a valid method")
										} else s(i + " not initialized. Cannot call methods, i.e. " + r)
									})), void 0 !== o ? o : t
								}

								function l(t, e) {
									t.each((function(t, n) {
										var o = a.data(n, i);
										o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
									}))
								}(a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function(t) {
									a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
								}), a.fn[i] = function(t) {
									return "string" == typeof t ? h(this, t, o.call(arguments, 1)) : (l(this, t), this)
								}, n(a))
							}

							function n(t) {
								!t || t && t.bridget || (t.bridget = i)
							}
							var o = Array.prototype.slice,
								r = t.console,
								s = void 0 === r ? function() {} : function(t) {
									r.error(t)
								};
							return n(e || t.jQuery), i
						}(ht, t)
					}.apply(e, st), at === undefined || (t.exports = at), "undefined" != typeof window && window, o = function() {
						function t() {}
						var e = t.prototype;
						return e.on = function(t, e) {
							if (t && e) {
								var i = this._events = this._events || {},
									n = i[t] = i[t] || [];
								return -1 == n.indexOf(e) && n.push(e), this
							}
						}, e.once = function(t, e) {
							if (t && e) {
								this.on(t, e);
								var i = this._onceEvents = this._onceEvents || {};
								return (i[t] = i[t] || {})[e] = !0, this
							}
						}, e.off = function(t, e) {
							var i = this._events && this._events[t];
							if (i && i.length) {
								var n = i.indexOf(e);
								return -1 != n && i.splice(n, 1), this
							}
						}, e.emitEvent = function(t, e) {
							var i = this._events && this._events[t];
							if (i && i.length) {
								i = i.slice(0), e = e || [];
								for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
									var r = i[o];
									n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e)
								}
								return this
							}
						}, e.allOff = function() {
							delete this._events, delete this._onceEvents
						}, t
					}, "function" == typeof o ? (r = {
						id: "ev-emitter/ev-emitter",
						exports: {},
						loaded: !1
					}, n = o.call(r.exports, i, r.exports, r), r.loaded = !0, n === undefined && (n = r.exports)) : n = o, window, a = function() {
						"use strict";

						function t(t) {
							var e = parseFloat(t);
							return -1 == t.indexOf("%") && !isNaN(e) && e
						}

						function e() {}

						function i() {
							for (var t = {
									width: 0,
									height: 0,
									innerWidth: 0,
									innerHeight: 0,
									outerWidth: 0,
									outerHeight: 0
								}, e = 0; e < l; e++) t[h[e]] = 0;
							return t
						}

						function n(t) {
							var e = getComputedStyle(t);
							return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
						}

						function o() {
							if (!c) {
								c = !0;
								var e = document.createElement("div");
								e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
								var i = document.body || document.documentElement;
								i.appendChild(e);
								var o = n(e);
								s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e)
							}
						}

						function r(e) {
							if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == lt(e) && e.nodeType) {
								var r = n(e);
								if ("none" == r.display) return i();
								var a = {};
								a.width = e.offsetWidth, a.height = e.offsetHeight;
								for (var c = a.isBorderBox = "border-box" == r.boxSizing, u = 0; u < l; u++) {
									var d = h[u],
										p = r[d],
										f = parseFloat(p);
									a[d] = isNaN(f) ? 0 : f
								}
								var m = a.paddingLeft + a.paddingRight,
									g = a.paddingTop + a.paddingBottom,
									v = a.marginLeft + a.marginRight,
									y = a.marginTop + a.marginBottom,
									_ = a.borderLeftWidth + a.borderRightWidth,
									w = a.borderTopWidth + a.borderBottomWidth,
									b = c && s,
									x = t(r.width);
								!1 !== x && (a.width = x + (b ? 0 : m + _));
								var S = t(r.height);
								return !1 !== S && (a.height = S + (b ? 0 : g + w)), a.innerWidth = a.width - (m + _), a.innerHeight = a.height - (g + w), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
							}
						}
						var s, a = "undefined" == typeof console ? e : function(t) {
								console.error(t)
							},
							h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
							l = h.length,
							c = !1;
						return r
					}, "function" == typeof a ? (h = {
						id: "get-size/get-size",
						exports: {},
						loaded: !1
					}, s = a.call(h.exports, i, h.exports, h), h.loaded = !0, s === undefined && (s = h.exports)) : s = a,
					function(t, e) {
						"use strict";
						c = function() {
							var t = function() {
								var t = window.Element.prototype;
								if (t.matches) return "matches";
								if (t.matchesSelector) return "matchesSelector";
								for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
									var n = e[i] + "MatchesSelector";
									if (t[n]) return n
								}
							}();
							return function(e, i) {
								return e[t](i)
							}
						}, "function" == typeof c ? (u = {
							id: "desandro-matches-selector/matches-selector",
							exports: {},
							loaded: !1
						}, l = c.call(u.exports, i, u.exports, u), u.loaded = !0, l === undefined && (l = u.exports)) : l = c
					}(window),
					function(t, e) {
						d = function(e) {
							return function(t, e) {
								var i = {
										extend: function(t, e) {
											for (var i in e) t[i] = e[i];
											return t
										},
										modulo: function(t, e) {
											return (t % e + e) % e
										}
									},
									n = Array.prototype.slice;
								i.makeArray = function(t) {
									return Array.isArray(t) ? t : null == t ? [] : "object" == lt(t) && "number" == typeof t.length ? n.call(t) : [t]
								}, i.removeFrom = function(t, e) {
									var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
								}, i.getParent = function(t, i) {
									for (; t.parentNode && t != document.body;)
										if (t = t.parentNode, e(t, i)) return t
								}, i.getQueryElement = function(t) {
									return "string" == typeof t ? document.querySelector(t) : t
								}, i.handleEvent = function(t) {
									var e = "on" + t.type;
									this[e] && this[e](t)
								}, i.filterFindElements = function(t, n) {
									t = i.makeArray(t);
									var o = [];
									return t.forEach((function(t) {
										if (t instanceof HTMLElement) {
											if (!n) return void o.push(t);
											e(t, n) && o.push(t);
											for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
										}
									})), o
								}, i.debounceMethod = function(t, e, i) {
									i = i || 100;
									var n = t.prototype[e],
										o = e + "Timeout";
									t.prototype[e] = function() {
										var t = this[o];
										clearTimeout(t);
										var e = arguments,
											r = this;
										this[o] = setTimeout((function() {
											n.apply(r, e), delete r[o]
										}), i)
									}
								}, i.docReady = function(t) {
									var e = document.readyState;
									"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
								}, i.toDashed = function(t) {
									return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
										return e + "-" + i
									})).toLowerCase()
								};
								var o = t.console;
								return i.htmlInit = function(e, n) {
									i.docReady((function() {
										var r = i.toDashed(n),
											s = "data-" + r,
											a = document.querySelectorAll("[" + s + "]"),
											h = document.querySelectorAll(".js-" + r),
											l = i.makeArray(a).concat(i.makeArray(h)),
											c = s + "-options",
											u = t.jQuery;
										l.forEach((function(t) {
											var i, r = t.getAttribute(s) || t.getAttribute(c);
											try {
												i = r && JSON.parse(r)
											} catch (a) {
												return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + a))
											}
											var h = new e(t, i);
											u && u.data(t, n, h)
										}))
									}))
								}, i
							}(t, e)
						}.apply(p = {}, st = [l]), d !== undefined || (d = p)
					}(window), window, f = [n, s], m = function(t, e) {
						"use strict";

						function i(t) {
							for (var e in t) return !1;
							return !0
						}

						function n(t, e) {
							t && (this.element = t, this.layout = e, this.position = {
								x: 0,
								y: 0
							}, this._create())
						}

						function o(t) {
							return t.replace(/([A-Z])/g, (function(t) {
								return "-" + t.toLowerCase()
							}))
						}
						var r = document.documentElement.style,
							s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
							a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
							h = {
								WebkitTransition: "webkitTransitionEnd",
								transition: "transitionend"
							} [s],
							l = {
								transform: a,
								transition: s,
								transitionDuration: s + "Duration",
								transitionProperty: s + "Property",
								transitionDelay: s + "Delay"
							},
							c = n.prototype = Object.create(t.prototype);
						c.constructor = n, c._create = function() {
							this._transn = {
								ingProperties: {},
								clean: {},
								onEnd: {}
							}, this.css({
								position: "absolute"
							})
						}, c.handleEvent = function(t) {
							var e = "on" + t.type;
							this[e] && this[e](t)
						}, c.getSize = function() {
							this.size = e(this.element)
						}, c.css = function(t) {
							var e = this.element.style;
							for (var i in t) e[l[i] || i] = t[i]
						}, c.getPosition = function() {
							var t = getComputedStyle(this.element),
								e = this.layout._getOption("originLeft"),
								i = this.layout._getOption("originTop"),
								n = t[e ? "left" : "right"],
								o = t[i ? "top" : "bottom"],
								r = parseFloat(n),
								s = parseFloat(o),
								a = this.layout.size; - 1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s
						}, c.layoutPosition = function() {
							var t = this.layout.size,
								e = {},
								i = this.layout._getOption("originLeft"),
								n = this.layout._getOption("originTop"),
								o = i ? "paddingLeft" : "paddingRight",
								r = i ? "left" : "right",
								s = i ? "right" : "left",
								a = this.position.x + t[o];
							e[r] = this.getXValue(a), e[s] = "";
							var h = n ? "paddingTop" : "paddingBottom",
								l = n ? "top" : "bottom",
								c = n ? "bottom" : "top",
								u = this.position.y + t[h];
							e[l] = this.getYValue(u), e[c] = "", this.css(e), this.emitEvent("layout", [this])
						}, c.getXValue = function(t) {
							var e = this.layout._getOption("horizontal");
							return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
						}, c.getYValue = function(t) {
							var e = this.layout._getOption("horizontal");
							return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
						}, c._transitionTo = function(t, e) {
							this.getPosition();
							var i = this.position.x,
								n = this.position.y,
								o = t == this.position.x && e == this.position.y;
							if (this.setPosition(t, e), !o || this.isTransitioning) {
								var r = t - i,
									s = e - n,
									a = {};
								a.transform = this.getTranslate(r, s), this.transition({
									to: a,
									onTransitionEnd: {
										transform: this.layoutPosition
									},
									isCleaning: !0
								})
							} else this.layoutPosition()
						}, c.getTranslate = function(t, e) {
							return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
						}, c.goTo = function(t, e) {
							this.setPosition(t, e), this.layoutPosition()
						}, c.moveTo = c._transitionTo, c.setPosition = function(t, e) {
							this.position.x = parseFloat(t), this.position.y = parseFloat(e)
						}, c._nonTransition = function(t) {
							for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
						}, c.transition = function(t) {
							if (parseFloat(this.layout.options.transitionDuration)) {
								var e = this._transn;
								for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
								for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
								t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
							} else this._nonTransition(t)
						};
						var u = "opacity," + o(a);
						c.enableTransition = function() {
							if (!this.isTransitioning) {
								var t = this.layout.options.transitionDuration;
								t = "number" == typeof t ? t + "ms" : t, this.css({
									transitionProperty: u,
									transitionDuration: t,
									transitionDelay: this.staggerDelay || 0
								}), this.element.addEventListener(h, this, !1)
							}
						}, c.onwebkitTransitionEnd = function(t) {
							this.ontransitionend(t)
						}, c.onotransitionend = function(t) {
							this.ontransitionend(t)
						};
						var d = {
							"-webkit-transform": "transform"
						};
						c.ontransitionend = function(t) {
							if (t.target === this.element) {
								var e = this._transn,
									n = d[t.propertyName] || t.propertyName;
								delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd && (e.onEnd[n].call(this), delete e.onEnd[n]), this.emitEvent("transitionEnd", [this])
							}
						}, c.disableTransition = function() {
							this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
						}, c._removeStyles = function(t) {
							var e = {};
							for (var i in t) e[i] = "";
							this.css(e)
						};
						var p = {
							transitionProperty: "",
							transitionDuration: "",
							transitionDelay: ""
						};
						return c.removeTransitionStyles = function() {
							this.css(p)
						}, c.stagger = function(t) {
							t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
						}, c.removeElem = function() {
							this.element.parentNode.removeChild(this.element), this.css({
								display: ""
							}), this.emitEvent("remove", [this])
						}, c.remove = function() {
							return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
								this.removeElem()
							})), void this.hide()) : void this.removeElem()
						}, c.reveal = function() {
							delete this.isHidden, this.css({
								display: ""
							});
							var t = this.layout.options,
								e = {};
							e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
								from: t.hiddenStyle,
								to: t.visibleStyle,
								isCleaning: !0,
								onTransitionEnd: e
							})
						}, c.onRevealTransitionEnd = function() {
							this.isHidden || this.emitEvent("reveal")
						}, c.getHideRevealTransitionEndProperty = function(t) {
							var e = this.layout.options[t];
							if (e.opacity) return "opacity";
							for (var i in e) return i
						}, c.hide = function() {
							this.isHidden = !0, this.css({
								display: ""
							});
							var t = this.layout.options,
								e = {};
							e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
								from: t.visibleStyle,
								to: t.hiddenStyle,
								isCleaning: !0,
								onTransitionEnd: e
							})
						}, c.onHideTransitionEnd = function() {
							this.isHidden && (this.css({
								display: "none"
							}), this.emitEvent("hide"))
						}, c.destroy = function() {
							this.css({
								position: "",
								left: "",
								right: "",
								top: "",
								bottom: "",
								transition: "",
								transform: ""
							})
						}, n
					}, "function" == typeof m ? (v = m.apply(g = {}, f)) === undefined && (v = g) : v = m,
					function(t, e) {
						"use strict";
						y = function(e, i, n, o) {
							return function(t, e, i, n, o) {
								function r(t, e) {
									var i = n.getQueryElement(t);
									if (i) {
										this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
										var o = ++u;
										this.element.outlayerGUID = o, d[o] = this, this._create(), this._getOption("initLayout") && this.layout()
									} else h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
								}

								function s(t) {
									function e() {
										t.apply(this, arguments)
									}
									return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
								}

								function a(t) {
									if ("number" == typeof t) return t;
									var e = t.match(/(^\d*\.?\d*)(\w*)/),
										i = e && e[1],
										n = e && e[2];
									return i.length ? (i = parseFloat(i)) * (f[n] || 1) : 0
								}
								var h = t.console,
									l = t.jQuery,
									c = function() {},
									u = 0,
									d = {};
								r.namespace = "outlayer", r.Item = o, r.defaults = {
									containerStyle: {
										position: "relative"
									},
									initLayout: !0,
									originLeft: !0,
									originTop: !0,
									resize: !0,
									resizeContainer: !0,
									transitionDuration: "0.4s",
									hiddenStyle: {
										opacity: 0,
										transform: "scale(0.001)"
									},
									visibleStyle: {
										opacity: 1,
										transform: "scale(1)"
									}
								};
								var p = r.prototype;
								n.extend(p, e.prototype), p.option = function(t) {
									n.extend(this.options, t)
								}, p._getOption = function(t) {
									var e = this.constructor.compatOptions[t];
									return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
								}, r.compatOptions = {
									initLayout: "isInitLayout",
									horizontal: "isHorizontal",
									layoutInstant: "isLayoutInstant",
									originLeft: "isOriginLeft",
									originTop: "isOriginTop",
									resize: "isResizeBound",
									resizeContainer: "isResizingContainer"
								}, p._create = function() {
									this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
								}, p.reloadItems = function() {
									this.items = this._itemize(this.element.children)
								}, p._itemize = function(t) {
									for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
										var r = new i(e[o], this);
										n.push(r)
									}
									return n
								}, p._filterFindItemElements = function(t) {
									return n.filterFindElements(t, this.options.itemSelector)
								}, p.getItemElements = function() {
									return this.items.map((function(t) {
										return t.element
									}))
								}, p.layout = function() {
									this._resetLayout(), this._manageStamps();
									var t = this._getOption("layoutInstant"),
										e = void 0 !== t ? t : !this._isLayoutInited;
									this.layoutItems(this.items, e), this._isLayoutInited = !0
								}, p._init = p.layout, p._resetLayout = function() {
									this.getSize()
								}, p.getSize = function() {
									this.size = i(this.element)
								}, p._getMeasurement = function(t, e) {
									var n, o = this.options[t];
									o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
								}, p.layoutItems = function(t, e) {
									t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
								}, p._getItemsForLayout = function(t) {
									return t.filter((function(t) {
										return !t.isIgnored
									}))
								}, p._layoutItems = function(t, e) {
									if (this._emitCompleteOnItems("layout", t), t && t.length) {
										var i = [];
										t.forEach((function(t) {
											var n = this._getItemLayoutPosition(t);
											n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
										}), this), this._processLayoutQueue(i)
									}
								}, p._getItemLayoutPosition = function() {
									return {
										x: 0,
										y: 0
									}
								}, p._processLayoutQueue = function(t) {
									this.updateStagger(), t.forEach((function(t, e) {
										this._positionItem(t.item, t.x, t.y, t.isInstant, e)
									}), this)
								}, p.updateStagger = function() {
									var t = this.options.stagger;
									return null == t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
								}, p._positionItem = function(t, e, i, n, o) {
									n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
								}, p._postLayout = function() {
									this.resizeContainer()
								}, p.resizeContainer = function() {
									if (this._getOption("resizeContainer")) {
										var t = this._getContainerSize();
										t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
									}
								}, p._getContainerSize = c, p._setContainerMeasure = function(t, e) {
									if (void 0 !== t) {
										var i = this.size;
										i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
									}
								}, p._emitCompleteOnItems = function(t, e) {
									function i() {
										o.dispatchEvent(t + "Complete", null, [e])
									}

									function n() {
										++s == r && i()
									}
									var o = this,
										r = e.length;
									if (e && r) {
										var s = 0;
										e.forEach((function(e) {
											e.once(t, n)
										}))
									} else i()
								}, p.dispatchEvent = function(t, e, i) {
									var n = e ? [e].concat(i) : i;
									if (this.emitEvent(t, n), l)
										if (this.$element = this.$element || l(this.element), e) {
											var o = l.Event(e);
											o.type = t, this.$element.trigger(o, i)
										} else this.$element.trigger(t, i)
								}, p.ignore = function(t) {
									var e = this.getItem(t);
									e && (e.isIgnored = !0)
								}, p.unignore = function(t) {
									var e = this.getItem(t);
									e && delete e.isIgnored
								}, p.stamp = function(t) {
									(t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
								}, p.unstamp = function(t) {
									(t = this._find(t)) && t.forEach((function(t) {
										n.removeFrom(this.stamps, t), this.unignore(t)
									}), this)
								}, p._find = function(t) {
									if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), n.makeArray(t)
								}, p._manageStamps = function() {
									this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
								}, p._getBoundingRect = function() {
									var t = this.element.getBoundingClientRect(),
										e = this.size;
									this._boundingRect = {
										left: t.left + e.paddingLeft + e.borderLeftWidth,
										top: t.top + e.paddingTop + e.borderTopWidth,
										right: t.right - (e.paddingRight + e.borderRightWidth),
										bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
									}
								}, p._manageStamp = c, p._getElementOffset = function(t) {
									var e = t.getBoundingClientRect(),
										n = this._boundingRect,
										o = i(t);
									return {
										left: e.left - n.left - o.marginLeft,
										top: e.top - n.top - o.marginTop,
										right: n.right - e.right - o.marginRight,
										bottom: n.bottom - e.bottom - o.marginBottom
									}
								}, p.handleEvent = n.handleEvent, p.bindResize = function() {
									t.addEventListener("resize", this), this.isResizeBound = !0
								}, p.unbindResize = function() {
									t.removeEventListener("resize", this), this.isResizeBound = !1
								}, p.onresize = function() {
									this.resize()
								}, n.debounceMethod(r, "onresize", 100), p.resize = function() {
									this.isResizeBound && this.needsResizeLayout() && this.layout()
								}, p.needsResizeLayout = function() {
									var t = i(this.element);
									return this.size && t && t.innerWidth !== this.size.innerWidth
								}, p.addItems = function(t) {
									var e = this._itemize(t);
									return e.length && (this.items = this.items.concat(e)), e
								}, p.appended = function(t) {
									var e = this.addItems(t);
									e.length && (this.layoutItems(e, !0), this.reveal(e))
								}, p.prepended = function(t) {
									var e = this._itemize(t);
									if (e.length) {
										var i = this.items.slice(0);
										this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
									}
								}, p.reveal = function(t) {
									if (this._emitCompleteOnItems("reveal", t), t && t.length) {
										var e = this.updateStagger();
										t.forEach((function(t, i) {
											t.stagger(i * e), t.reveal()
										}))
									}
								}, p.hide = function(t) {
									if (this._emitCompleteOnItems("hide", t), t && t.length) {
										var e = this.updateStagger();
										t.forEach((function(t, i) {
											t.stagger(i * e), t.hide()
										}))
									}
								}, p.revealItemElements = function(t) {
									var e = this.getItems(t);
									this.reveal(e)
								}, p.hideItemElements = function(t) {
									var e = this.getItems(t);
									this.hide(e)
								}, p.getItem = function(t) {
									for (var e = 0; e < this.items.length; e++) {
										var i = this.items[e];
										if (i.element == t) return i
									}
								}, p.getItems = function(t) {
									t = n.makeArray(t);
									var e = [];
									return t.forEach((function(t) {
										var i = this.getItem(t);
										i && e.push(i)
									}), this), e
								}, p.remove = function(t) {
									var e = this.getItems(t);
									this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function(t) {
										t.remove(), n.removeFrom(this.items, t)
									}), this)
								}, p.destroy = function() {
									var t = this.element.style;
									t.height = "", t.position = "", t.width = "", this.items.forEach((function(t) {
										t.destroy()
									})), this.unbindResize();
									var e = this.element.outlayerGUID;
									delete d[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
								}, r.data = function(t) {
									var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
									return e && d[e]
								}, r.create = function(t, e) {
									var i = s(r);
									return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
								};
								var f = {
									ms: 1,
									s: 1e3
								};
								return r.Item = o, r
							}(t, e, i, n, o)
						}.apply(_ = {}, st = [n, s, d, v]), y !== undefined || (y = _)
					}(window), window, w = [y], b = function(t) {
						"use strict";

						function e() {
							t.Item.apply(this, arguments)
						}
						var i = e.prototype = Object.create(t.Item.prototype),
							n = i._create;
						i._create = function() {
							this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
						}, i.updateSortData = function() {
							if (!this.isIgnored) {
								this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
								var t = this.layout.options.getSortData,
									e = this.layout._sorters;
								for (var i in t) {
									var n = e[i];
									this.sortData[i] = n(this.element, this)
								}
							}
						};
						var o = i.destroy;
						return i.destroy = function() {
							o.apply(this, arguments), this.css({
								display: ""
							})
						}, e
					}, "function" == typeof b ? (S = b.apply(x = {}, w)) === undefined && (S = x) : S = b, window, E = [s, y], C = function(t, e) {
						"use strict";

						function i(t) {
							this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
						}
						var n = i.prototype;
						return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function(t) {
							n[t] = function() {
								return e.prototype[t].apply(this.isotope, arguments)
							}
						})), n.needsVerticalResizeLayout = function() {
							var e = t(this.isotope.element);
							return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
						}, n._getMeasurement = function() {
							this.isotope._getMeasurement.apply(this, arguments)
						}, n.getColumnWidth = function() {
							this.getSegmentSize("column", "Width")
						}, n.getRowHeight = function() {
							this.getSegmentSize("row", "Height")
						}, n.getSegmentSize = function(t, e) {
							var i = t + e,
								n = "outer" + e;
							if (this._getMeasurement(i, n), !this[i]) {
								var o = this.getFirstItemSize();
								this[i] = o && o[n] || this.isotope.size["inner" + e]
							}
						}, n.getFirstItemSize = function() {
							var e = this.isotope.filteredItems[0];
							return e && e.element && t(e.element)
						}, n.layout = function() {
							this.isotope.layout.apply(this.isotope, arguments)
						}, n.getSize = function() {
							this.isotope.getSize(), this.size = this.isotope.size
						}, i.modes = {}, i.create = function(t, e) {
							function o() {
								i.apply(this, arguments)
							}
							return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
						}, i
					}, "function" == typeof C ? (T = C.apply(I = {}, E)) === undefined && (T = I) : T = C, window, k = [y, s], z = function(t, e) {
						var i = t.create("masonry");
						i.compatOptions.fitWidth = "isFitWidth";
						var n = i.prototype;
						return n._resetLayout = function() {
							this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
							for (var t = 0; t < this.cols; t++) this.colYs.push(0);
							this.maxY = 0, this.horizontalColIndex = 0
						}, n.measureColumns = function() {
							if (this.getContainerWidth(), !this.columnWidth) {
								var t = this.items[0],
									i = t && t.element;
								this.columnWidth = i && e(i).outerWidth || this.containerWidth
							}
							var n = this.columnWidth += this.gutter,
								o = this.containerWidth + this.gutter,
								r = o / n,
								s = n - o % n;
							r = Math[s && s < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1)
						}, n.getContainerWidth = function() {
							var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
								i = e(t);
							this.containerWidth = i && i.innerWidth
						}, n._getItemLayoutPosition = function(t) {
							t.getSize();
							var e = t.size.outerWidth % this.columnWidth,
								i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
							i = Math.min(i, this.cols);
							for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), o = {
									x: this.columnWidth * n.col,
									y: n.y
								}, r = n.y + t.size.outerHeight, s = i + n.col, a = n.col; a < s; a++) this.colYs[a] = r;
							return o
						}, n._getTopColPosition = function(t) {
							var e = this._getTopColGroup(t),
								i = Math.min.apply(Math, e);
							return {
								col: e.indexOf(i),
								y: i
							}
						}, n._getTopColGroup = function(t) {
							if (t < 2) return this.colYs;
							for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);
							return e
						}, n._getColGroupY = function(t, e) {
							if (e < 2) return this.colYs[t];
							var i = this.colYs.slice(t, t + e);
							return Math.max.apply(Math, i)
						}, n._getHorizontalColPosition = function(t, e) {
							var i = this.horizontalColIndex % this.cols;
							i = t > 1 && i + t > this.cols ? 0 : i;
							var n = e.size.outerWidth && e.size.outerHeight;
							return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
								col: i,
								y: this._getColGroupY(i, t)
							}
						}, n._manageStamp = function(t) {
							var i = e(t),
								n = this._getElementOffset(t),
								o = this._getOption("originLeft") ? n.left : n.right,
								r = o + i.outerWidth,
								s = Math.floor(o / this.columnWidth);
							s = Math.max(0, s);
							var a = Math.floor(r / this.columnWidth);
							a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
							for (var h = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, l = s; l <= a; l++) this.colYs[l] = Math.max(h, this.colYs[l])
						}, n._getContainerSize = function() {
							this.maxY = Math.max.apply(Math, this.colYs);
							var t = {
								height: this.maxY
							};
							return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
						}, n._getContainerFitWidth = function() {
							for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
							return (this.cols - t) * this.columnWidth - this.gutter
						}, n.needsResizeLayout = function() {
							var t = this.containerWidth;
							return this.getContainerWidth(), t != this.containerWidth
						}, i
					}, "function" == typeof z ? (P = z.apply(L = {}, k)) === undefined && (P = L) : P = z, window, O = [T, P], W = function(t, e) {
						"use strict";
						var i = t.create("masonry"),
							n = i.prototype,
							o = {
								_getElementOffset: !0,
								layout: !0,
								_getMeasurement: !0
							};
						for (var r in e.prototype) o[r] || (n[r] = e.prototype[r]);
						var s = n.measureColumns;
						n.measureColumns = function() {
							this.items = this.isotope.filteredItems, s.call(this)
						};
						var a = n._getOption;
						return n._getOption = function(t) {
							return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
						}, i
					}, "function" == typeof W ? (A = W.apply(M = {}, O)) === undefined && (A = M) : A = W, window, D = [T], R = function(t) {
						"use strict";
						var e = t.create("fitRows"),
							i = e.prototype;
						return i._resetLayout = function() {
							this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
						}, i._getItemLayoutPosition = function(t) {
							t.getSize();
							var e = t.size.outerWidth + this.gutter,
								i = this.isotope.size.innerWidth + this.gutter;
							0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
							var n = {
								x: this.x,
								y: this.y
							};
							return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
						}, i._getContainerSize = function() {
							return {
								height: this.maxY
							}
						}, e
					}, "function" == typeof R ? (j = R.apply(F = {}, D)) === undefined && (j = F) : j = R, window, B = [T], N = function(t) {
						"use strict";
						var e = t.create("vertical", {
								horizontalAlignment: 0
							}),
							i = e.prototype;
						return i._resetLayout = function() {
							this.y = 0
						}, i._getItemLayoutPosition = function(t) {
							t.getSize();
							var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
								i = this.y;
							return this.y += t.size.outerHeight, {
								x: e,
								y: i
							}
						}, i._getContainerSize = function() {
							return {
								height: this.y
							}
						}, e
					}, "function" == typeof N ? (Y = N.apply(H = {}, B)) === undefined && (Y = H) : Y = N,
					function(i, n) {
						at = function(t, e, n, o, r, s) {
							return function(t, e, i, n, o, r, s) {
								function a(t, e) {
									return function(i, n) {
										for (var o = 0; o < t.length; o++) {
											var r = t[o],
												s = i.sortData[r],
												a = n.sortData[r];
											if (s > a || s < a) return (s > a ? 1 : -1) * ((void 0 !== e[r] ? e[r] : e) ? 1 : -1)
										}
										return 0
									}
								}
								var h = t.jQuery,
									l = String.prototype.trim ? function(t) {
										return t.trim()
									} : function(t) {
										return t.replace(/^\s+|\s+$/g, "")
									},
									c = e.create("isotope", {
										layoutMode: "masonry",
										isJQueryFiltering: !0,
										sortAscending: !0
									});
								c.Item = r, c.LayoutMode = s;
								var u = c.prototype;
								u._create = function() {
									for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], s.modes) this._initLayoutMode(t)
								}, u.reloadItems = function() {
									this.itemGUID = 0, e.prototype.reloadItems.call(this)
								}, u._itemize = function() {
									for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
										t[i].id = this.itemGUID++
									}
									return this._updateItemsSortData(t), t
								}, u._initLayoutMode = function(t) {
									var e = s.modes[t],
										i = this.options[t] || {};
									this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
								}, u.layout = function() {
									return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
								}, u._layout = function() {
									var t = this._getIsInstant();
									this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
								}, u.arrange = function(t) {
									this.option(t), this._getIsInstant();
									var e = this._filter(this.items);
									this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
								}, u._init = u.arrange, u._hideReveal = function(t) {
									this.reveal(t.needReveal), this.hide(t.needHide)
								}, u._getIsInstant = function() {
									var t = this._getOption("layoutInstant"),
										e = void 0 !== t ? t : !this._isLayoutInited;
									return this._isInstant = e, e
								}, u._bindArrangeComplete = function() {
									function t() {
										e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
									}
									var e, i, n, o = this;
									this.once("layoutComplete", (function() {
										e = !0, t()
									})), this.once("hideComplete", (function() {
										i = !0, t()
									})), this.once("revealComplete", (function() {
										n = !0, t()
									}))
								}, u._filter = function(t) {
									var e = this.options.filter;
									e = e || "*";
									for (var i = [], n = [], o = [], r = this._getFilterTest(e), s = 0; s < t.length; s++) {
										var a = t[s];
										if (!a.isIgnored) {
											var h = r(a);
											h && i.push(a), h && a.isHidden ? n.push(a) : h || a.isHidden || o.push(a)
										}
									}
									return {
										matches: i,
										needReveal: n,
										needHide: o
									}
								}, u._getFilterTest = function(t) {
									return h && this.options.isJQueryFiltering ? function(e) {
										return h(e.element).is(t)
									} : "function" == typeof t ? function(e) {
										return t(e.element)
									} : function(e) {
										return n(e.element, t)
									}
								}, u.updateSortData = function(t) {
									var e;
									t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
								}, u._getSorters = function() {
									var t = this.options.getSortData;
									for (var e in t) {
										var i = t[e];
										this._sorters[e] = d(i)
									}
								}, u._updateItemsSortData = function(t) {
									for (var e = t && t.length, i = 0; e && i < e; i++) {
										t[i].updateSortData()
									}
								};
								var d = function() {
									function t(t) {
										if ("string" != typeof t) return t;
										var i = l(t).split(" "),
											n = i[0],
											o = n.match(/^\[(.+)\]$/),
											r = e(o && o[1], n),
											s = c.sortDataParsers[i[1]];
										return s ? function(t) {
											return t && s(r(t))
										} : function(t) {
											return t && r(t)
										}
									}

									function e(t, e) {
										return t ? function(e) {
											return e.getAttribute(t)
										} : function(t) {
											var i = t.querySelector(e);
											return i && i.textContent
										}
									}
									return t
								}();
								c.sortDataParsers = {
									parseInt: function(t) {
										function e(e) {
											return t.apply(this, arguments)
										}
										return e.toString = function() {
											return t.toString()
										}, e
									}((function(t) {
										return parseInt(t, 10)
									})),
									parseFloat: function(t) {
										function e(e) {
											return t.apply(this, arguments)
										}
										return e.toString = function() {
											return t.toString()
										}, e
									}((function(t) {
										return parseFloat(t)
									}))
								}, u._sort = function() {
									if (this.options.sortBy) {
										var t = o.makeArray(this.options.sortBy);
										this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
										var e = a(this.sortHistory, this.options.sortAscending);
										this.filteredItems.sort(e)
									}
								}, u._getIsSameSortBy = function(t) {
									for (var e = 0; e < t.length; e++)
										if (t[e] != this.sortHistory[e]) return !1;
									return !0
								}, u._mode = function() {
									var t = this.options.layoutMode,
										e = this.modes[t];
									if (!e) throw new Error("No layout mode: " + t);
									return e.options = this.options[t], e
								}, u._resetLayout = function() {
									e.prototype._resetLayout.call(this), this._mode()._resetLayout()
								}, u._getItemLayoutPosition = function(t) {
									return this._mode()._getItemLayoutPosition(t)
								}, u._manageStamp = function(t) {
									this._mode()._manageStamp(t)
								}, u._getContainerSize = function() {
									return this._mode()._getContainerSize()
								}, u.needsResizeLayout = function() {
									return this._mode().needsResizeLayout()
								}, u.appended = function(t) {
									var e = this.addItems(t);
									if (e.length) {
										var i = this._filterRevealAdded(e);
										this.filteredItems = this.filteredItems.concat(i)
									}
								}, u.prepended = function(t) {
									var e = this._itemize(t);
									if (e.length) {
										this._resetLayout(), this._manageStamps();
										var i = this._filterRevealAdded(e);
										this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
									}
								}, u._filterRevealAdded = function(t) {
									var e = this._filter(t);
									return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
								}, u.insert = function(t) {
									var e = this.addItems(t);
									if (e.length) {
										var i, n, o = e.length;
										for (i = 0; i < o; i++) n = e[i], this.element.appendChild(n.element);
										var r = this._filter(e).matches;
										for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
										for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
										this.reveal(r)
									}
								};
								var p = u.remove;
								return u.remove = function(t) {
									t = o.makeArray(t);
									var e = this.getItems(t);
									p.call(this, t);
									for (var i = e && e.length, n = 0; i && n < i; n++) {
										var r = e[n];
										o.removeFrom(this.filteredItems, r)
									}
								}, u.shuffle = function() {
									for (var t = 0; t < this.items.length; t++) {
										this.items[t].sortData.random = Math.random()
									}
									this.options.sortBy = "random", this._sort(), this._layout()
								}, u._noTransition = function(t, e) {
									var i = this.options.transitionDuration;
									this.options.transitionDuration = 0;
									var n = t.apply(this, e);
									return this.options.transitionDuration = i, n
								}, u.getFilteredItemElements = function() {
									return this.filteredItems.map((function(t) {
										return t.element
									}))
								}, c
							}(i, t, 0, n, o, r, s)
						}.apply(e, st = [y, s, l, d, S, T, A, j, Y]), at === undefined || (t.exports = at)
					}(window), window, X = function() {
						function t(e) {
							for (var i in t.defaults) this[i] = t.defaults[i];
							for (i in e) this[i] = e[i]
						}
						t.defaults = {
							x: 0,
							y: 0,
							width: 0,
							height: 0
						};
						var e = t.prototype;
						return e.contains = function(t) {
							var e = t.width || 0,
								i = t.height || 0;
							return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
						}, e.overlaps = function(t) {
							var e = this.x + this.width,
								i = this.y + this.height,
								n = t.x + t.width,
								o = t.y + t.height;
							return this.x < n && e > t.x && this.y < o && i > t.y
						}, e.getMaximalFreeRects = function(e) {
							if (!this.overlaps(e)) return !1;
							var i, n = [],
								o = this.x + this.width,
								r = this.y + this.height,
								s = e.x + e.width,
								a = e.y + e.height;
							return this.y < e.y && (i = new t({
								x: this.x,
								y: this.y,
								width: this.width,
								height: e.y - this.y
							}), n.push(i)), o > s && (i = new t({
								x: s,
								y: this.y,
								width: o - s,
								height: this.height
							}), n.push(i)), r > a && (i = new t({
								x: this.x,
								y: a,
								width: this.width,
								height: r - a
							}), n.push(i)), this.x < e.x && (i = new t({
								x: this.x,
								y: this.y,
								width: e.x - this.x,
								height: this.height
							}), n.push(i)), n
						}, e.canFit = function(t) {
							return this.width >= t.width && this.height >= t.height
						}, t
					}, "function" == typeof X ? (q = {
						id: "packery/js/rect",
						exports: {},
						loaded: !1
					}, Q = X.call(q.exports, i, q.exports, q), q.loaded = !0, Q === undefined && (Q = q.exports)) : Q = X, window, G = [Q], U = function(t) {
						function e(t, e, i) {
							this.width = t || 0, this.height = e || 0, this.sortDirection = i || "downwardLeftToRight", this.reset()
						}
						var i = e.prototype;
						i.reset = function() {
							this.spaces = [];
							var e = new t({
								x: 0,
								y: 0,
								width: this.width,
								height: this.height
							});
							this.spaces.push(e), this.sorter = n[this.sortDirection] || n.downwardLeftToRight
						}, i.pack = function(t) {
							for (var e = 0; e < this.spaces.length; e++) {
								var i = this.spaces[e];
								if (i.canFit(t)) {
									this.placeInSpace(t, i);
									break
								}
							}
						}, i.columnPack = function(t) {
							for (var e = 0; e < this.spaces.length; e++) {
								var i = this.spaces[e];
								if (i.x <= t.x && i.x + i.width >= t.x + t.width && i.height >= t.height - .01) {
									t.y = i.y, this.placed(t);
									break
								}
							}
						}, i.rowPack = function(t) {
							for (var e = 0; e < this.spaces.length; e++) {
								var i = this.spaces[e];
								if (i.y <= t.y && i.y + i.height >= t.y + t.height && i.width >= t.width - .01) {
									t.x = i.x, this.placed(t);
									break
								}
							}
						}, i.placeInSpace = function(t, e) {
							t.x = e.x, t.y = e.y, this.placed(t)
						}, i.placed = function(t) {
							for (var e = [], i = 0; i < this.spaces.length; i++) {
								var n = this.spaces[i],
									o = n.getMaximalFreeRects(t);
								o ? e.push.apply(e, o) : e.push(n)
							}
							this.spaces = e, this.mergeSortSpaces()
						}, i.mergeSortSpaces = function() {
							e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
						}, i.addSpace = function(t) {
							this.spaces.push(t), this.mergeSortSpaces()
						}, e.mergeRects = function(t) {
							var e = 0,
								i = t[e];
							t: for (; i;) {
								for (var n = 0, o = t[e + n]; o;) {
									if (o == i) n++;
									else {
										if (o.contains(i)) {
											t.splice(e, 1), i = t[e];
											continue t
										}
										i.contains(o) ? t.splice(e + n, 1) : n++
									}
									o = t[e + n]
								}
								i = t[++e]
							}
							return t
						};
						var n = {
							downwardLeftToRight: function(t, e) {
								return t.y - e.y || t.x - e.x
							},
							rightwardTopToBottom: function(t, e) {
								return t.x - e.x || t.y - e.y
							}
						};
						return e
					}, "function" == typeof U ? (J = U.apply($ = {}, G)) === undefined && (J = $) : J = U, window, K = [y, Q], Z = function(t, e) {
						var i = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform",
							n = function() {
								t.Item.apply(this, arguments)
							},
							o = n.prototype = Object.create(t.Item.prototype),
							r = o._create;
						o._create = function() {
							r.call(this), this.rect = new e
						};
						var s = o.moveTo;
						return o.moveTo = function(t, e) {
							var i = Math.abs(this.position.x - t),
								n = Math.abs(this.position.y - e);
							return this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > i && 1 > n ? void this.goTo(t, e) : void s.apply(this, arguments)
						}, o.enablePlacing = function() {
							this.removeTransitionStyles(), this.isTransitioning && i && (this.element.style[i] = "none"), this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
						}, o.disablePlacing = function() {
							this.isPlacing = !1
						}, o.removeElem = function() {
							this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
						}, o.showDropPlaceholder = function() {
							var t = this.dropPlaceholder;
							t || ((t = this.dropPlaceholder = document.createElement("div")).className = "packery-drop-placeholder", t.style.position = "absolute"), t.style.width = this.size.width + "px", t.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(t)
						}, o.positionDropPlaceholder = function() {
							this.dropPlaceholder.style[i] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
						}, o.hideDropPlaceholder = function() {
							this.layout.element.removeChild(this.dropPlaceholder)
						}, n
					}, "function" == typeof Z ? (tt = Z.apply(V = {}, K)) === undefined && (tt = V) : tt = Z, window, et = [s, y, Q, J, tt], it = function(t, e, i, n, o) {
						function r(t, e) {
							return t.position.y - e.position.y || t.position.x - e.position.x
						}

						function s(t, e) {
							return t.position.x - e.position.x || t.position.y - e.position.y
						}

						function a(t, e) {
							var i = e.x - t.x,
								n = e.y - t.y;
							return Math.sqrt(i * i + n * n)
						}
						i.prototype.canFit = function(t) {
							return this.width >= t.width - 1 && this.height >= t.height - 1
						};
						var h = e.create("packery");
						h.Item = o;
						var l = h.prototype;
						l._create = function() {
							e.prototype._create.call(this), this.packer = new n, this.shiftPacker = new n, this.isEnabled = !0, this.dragItemCount = 0;
							var t = this;
							this.handleDraggabilly = {
								dragStart: function() {
									t.itemDragStart(this.element)
								},
								dragMove: function() {
									t.itemDragMove(this.element, this.position.x, this.position.y)
								},
								dragEnd: function() {
									t.itemDragEnd(this.element)
								}
							}, this.handleUIDraggable = {
								start: function(e, i) {
									i && t.itemDragStart(e.currentTarget)
								},
								drag: function(e, i) {
									i && t.itemDragMove(e.currentTarget, i.position.left, i.position.top)
								},
								stop: function(e, i) {
									i && t.itemDragEnd(e.currentTarget)
								}
							}
						}, l._resetLayout = function() {
							var t, e, i;
							this.getSize(), this._getMeasurements(), this._getOption("horizontal") ? (t = 1 / 0, e = this.size.innerHeight + this.gutter, i = "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter, e = 1 / 0, i = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = t, this.packer.height = this.shiftPacker.height = e, this.packer.sortDirection = this.shiftPacker.sortDirection = i, this.packer.reset(), this.maxY = 0, this.maxX = 0
						}, l._getMeasurements = function() {
							this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
						}, l._getItemLayoutPosition = function(t) {
							if (this._setRectSize(t.element, t.rect), this.isShifting || this.dragItemCount > 0) {
								var e = this._getPackMethod();
								this.packer[e](t.rect)
							} else this.packer.pack(t.rect);
							return this._setMaxXY(t.rect), t.rect
						}, l.shiftLayout = function() {
							this.isShifting = !0, this.layout(), delete this.isShifting
						}, l._getPackMethod = function() {
							return this._getOption("horizontal") ? "rowPack" : "columnPack"
						}, l._setMaxXY = function(t) {
							this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
						}, l._setRectSize = function(e, i) {
							var n = t(e),
								o = n.outerWidth,
								r = n.outerHeight;
							(o || r) && (o = this._applyGridGutter(o, this.columnWidth), r = this._applyGridGutter(r, this.rowHeight)), i.width = Math.min(o, this.packer.width), i.height = Math.min(r, this.packer.height)
						}, l._applyGridGutter = function(t, e) {
							if (!e) return t + this.gutter;
							var i = t % (e += this.gutter);
							return Math[i && 1 > i ? "round" : "ceil"](t / e) * e
						}, l._getContainerSize = function() {
							return this._getOption("horizontal") ? {
								width: this.maxX - this.gutter
							} : {
								height: this.maxY - this.gutter
							}
						}, l._manageStamp = function(t) {
							var e, n = this.getItem(t);
							if (n && n.isPlacing) e = n.rect;
							else {
								var o = this._getElementOffset(t);
								e = new i({
									x: this._getOption("originLeft") ? o.left : o.right,
									y: this._getOption("originTop") ? o.top : o.bottom
								})
							}
							this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
						}, l.sortItemsByPosition = function() {
							var t = this._getOption("horizontal") ? s : r;
							this.items.sort(t)
						}, l.fit = function(t, e, i) {
							var n = this.getItem(t);
							n && (this.stamp(n.element), n.enablePlacing(), this.updateShiftTargets(n), e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, this.shift(n, e, i), this._bindFitEvents(n), n.moveTo(n.rect.x, n.rect.y), this.shiftLayout(), this.unstamp(n.element), this.sortItemsByPosition(), n.disablePlacing())
						}, l._bindFitEvents = function(t) {
							function e() {
								2 == ++n && i.dispatchEvent("fitComplete", null, [t])
							}
							var i = this,
								n = 0;
							t.once("layout", e), this.once("layoutComplete", e)
						}, l.resize = function() {
							this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
						}, l.needsResizeLayout = function() {
							var e = t(this.element),
								i = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
							return e[i] != this.size[i]
						}, l.resizeShiftPercentLayout = function() {
							var e = this._getItemsForLayout(this.items),
								i = this._getOption("horizontal"),
								n = i ? "y" : "x",
								o = i ? "height" : "width",
								r = i ? "rowHeight" : "columnWidth",
								s = i ? "innerHeight" : "innerWidth",
								a = this[r];
							if (a = a && a + this.gutter) {
								this._getMeasurements();
								var h = this[r] + this.gutter;
								e.forEach((function(t) {
									var e = Math.round(t.rect[n] / a);
									t.rect[n] = e * h
								}))
							} else {
								var l = t(this.element)[s] + this.gutter,
									c = this.packer[o];
								e.forEach((function(t) {
									t.rect[n] = t.rect[n] / c * l
								}))
							}
							this.shiftLayout()
						}, l.itemDragStart = function(t) {
							if (this.isEnabled) {
								this.stamp(t);
								var e = this.getItem(t);
								e && (e.enablePlacing(), e.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(e))
							}
						}, l.updateShiftTargets = function(t) {
							this.shiftPacker.reset(), this._getBoundingRect();
							var e = this._getOption("originLeft"),
								n = this._getOption("originTop");
							this.stamps.forEach((function(t) {
								var o = this.getItem(t);
								if (!o || !o.isPlacing) {
									var r = this._getElementOffset(t),
										s = new i({
											x: e ? r.left : r.right,
											y: n ? r.top : r.bottom
										});
									this._setRectSize(t, s), this.shiftPacker.placed(s)
								}
							}), this);
							var o = this._getOption("horizontal"),
								r = o ? "rowHeight" : "columnWidth",
								s = o ? "height" : "width";
							this.shiftTargetKeys = [], this.shiftTargets = [];
							var a, h = this[r];
							if (h = h && h + this.gutter) {
								var l = Math.ceil(t.rect[s] / h),
									c = Math.floor((this.shiftPacker[s] + this.gutter) / h);
								a = (c - l) * h;
								for (var u = 0; c > u; u++) this._addShiftTarget(u * h, 0, a)
							} else a = this.shiftPacker[s] + this.gutter - t.rect[s], this._addShiftTarget(0, 0, a);
							var d = this._getItemsForLayout(this.items),
								p = this._getPackMethod();
							d.forEach((function(t) {
								var e = t.rect;
								this._setRectSize(t.element, e), this.shiftPacker[p](e), this._addShiftTarget(e.x, e.y, a);
								var i = o ? e.x + e.width : e.x,
									n = o ? e.y : e.y + e.height;
								if (this._addShiftTarget(i, n, a), h)
									for (var r = Math.round(e[s] / h), l = 1; r > l; l++) {
										var c = o ? i : e.x + h * l,
											u = o ? e.y + h * l : n;
										this._addShiftTarget(c, u, a)
									}
							}), this)
						}, l._addShiftTarget = function(t, e, i) {
							var n = this._getOption("horizontal") ? e : t;
							if (!(0 !== n && n > i)) {
								var o = t + "," + e; - 1 != this.shiftTargetKeys.indexOf(o) || (this.shiftTargetKeys.push(o), this.shiftTargets.push({
									x: t,
									y: e
								}))
							}
						}, l.shift = function(t, e, i) {
							var n, o = 1 / 0,
								r = {
									x: e,
									y: i
								};
							this.shiftTargets.forEach((function(t) {
								var e = a(t, r);
								o > e && (n = t, o = e)
							})), t.rect.x = n.x, t.rect.y = n.y
						};
						var c = 120;
						l.itemDragMove = function(t, e, i) {
							function n() {
								r.shift(o, e, i), o.positionDropPlaceholder(), r.layout()
							}
							var o = this.isEnabled && this.getItem(t);
							if (o) {
								e -= this.size.paddingLeft, i -= this.size.paddingTop;
								var r = this,
									s = new Date;
								this._itemDragTime && s - this._itemDragTime < c ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(n, c)) : (n(), this._itemDragTime = s)
							}
						}, l.itemDragEnd = function(t) {
							function e() {
								2 == ++n && (i.element.classList.remove("is-positioning-post-drag"), i.hideDropPlaceholder(), o.dispatchEvent("dragItemPositioned", null, [i]))
							}
							var i = this.isEnabled && this.getItem(t);
							if (i) {
								clearTimeout(this.dragTimeout), i.element.classList.add("is-positioning-post-drag");
								var n = 0,
									o = this;
								i.once("layout", e), this.once("layoutComplete", e), i.moveTo(i.rect.x, i.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), i.disablePlacing(), this.unstamp(i.element)
							}
						}, l.bindDraggabillyEvents = function(t) {
							this._bindDraggabillyEvents(t, "on")
						}, l.unbindDraggabillyEvents = function(t) {
							this._bindDraggabillyEvents(t, "off")
						}, l._bindDraggabillyEvents = function(t, e) {
							var i = this.handleDraggabilly;
							t[e]("dragStart", i.dragStart), t[e]("dragMove", i.dragMove), t[e]("dragEnd", i.dragEnd)
						}, l.bindUIDraggableEvents = function(t) {
							this._bindUIDraggableEvents(t, "on")
						}, l.unbindUIDraggableEvents = function(t) {
							this._bindUIDraggableEvents(t, "off")
						}, l._bindUIDraggableEvents = function(t, e) {
							var i = this.handleUIDraggable;
							t[e]("dragstart", i.start)[e]("drag", i.drag)[e]("dragstop", i.stop)
						};
						var u = l.destroy;
						return l.destroy = function() {
							u.apply(this, arguments), this.isEnabled = !1
						}, h.Rect = i, h.Packer = n, h
					}, "function" == typeof it ? (ot = it.apply(nt = {}, et)) === undefined && (ot = nt) : ot = it, window, st = [T, ot], rt = function(t, e) {
						var i = t.create("packery"),
							n = i.prototype,
							o = {
								_getElementOffset: !0,
								_getMeasurement: !0
							};
						for (var r in e.prototype) o[r] || (n[r] = e.prototype[r]);
						var s = n._resetLayout;
						n._resetLayout = function() {
							this.packer = this.packer || new e.Packer, this.shiftPacker = this.shiftPacker || new e.Packer, s.apply(this, arguments)
						};
						var a = n._getItemLayoutPosition;
						n._getItemLayoutPosition = function(t) {
							return t.rect = t.rect || new e.Rect, a.call(this, t)
						};
						var h = n.needsResizeLayout;
						n.needsResizeLayout = function() {
							return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : h.call(this)
						};
						var l = n._getOption;
						return n._getOption = function(t) {
							return "horizontal" == t ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : l.apply(this.isotope, arguments)
						}, i
					}, (at = "function" == typeof rt ? rt.apply(e, st) : rt) === undefined || (t.exports = at)
			},
			101: function(t, e, i) {
				var n, o, r;
				/*!
				 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
				 * Copyright (c) 2016 Edson Hilios
				 *
				 * Permission is hereby granted, free of charge, to any person obtaining a copy of
				 * this software and associated documentation files (the "Software"), to deal in
				 * the Software without restriction, including without limitation the rights to
				 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
				 * the Software, and to permit persons to whom the Software is furnished to do so,
				 * subject to the following conditions:
				 *
				 * The above copyright notice and this permission notice shall be included in all
				 * copies or substantial portions of the Software.
				 *
				 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
				 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
				 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
				 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
				 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
				 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
				 */
				! function(s) {
					"use strict";
					o = [i(311)], n = function(t) {
						var e = [],
							i = [],
							n = {
								precision: 100,
								elapse: !1,
								defer: !1
							};

						function o(t) {
							if (t instanceof Date) return t;
							if (String(t).match(i)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
							throw new Error("Couldn't cast `" + t + "` to a date object.")
						}
						i.push(/^[0-9]*$/.source), i.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), i.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), i = new RegExp(i.join("|"));
						var r = {
							Y: "years",
							m: "months",
							n: "daysToMonth",
							d: "daysToWeek",
							w: "weeks",
							W: "weeksToMonth",
							H: "hours",
							M: "minutes",
							S: "seconds",
							D: "totalDays",
							I: "totalHours",
							N: "totalMinutes",
							T: "totalSeconds"
						};

						function s(t) {
							var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
							return new RegExp(e)
						}

						function a(t) {
							return function(e) {
								var i = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
								if (i)
									for (var n = 0, o = i.length; n < o; ++n) {
										var a = i[n].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
											l = s(a[0]),
											c = a[1] || "",
											u = a[3] || "",
											d = null;
										a = a[2], r.hasOwnProperty(a) && (d = r[a], d = Number(t[d])), null !== d && ("!" === c && (d = h(u, d)), "" === c && d < 10 && (d = "0" + d.toString()), e = e.replace(l, d.toString()))
									}
								return e = e.replace(/%%/, "%")
							}
						}

						function h(t, e) {
							var i = "s",
								n = "";
							return t && (1 === (t = t.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? i = t[0] : (n = t[0], i = t[1])), Math.abs(e) > 1 ? i : n
						}
						var l = function(i, o, r) {
							this.el = i, this.$el = t(i), this.interval = null, this.offset = {}, this.options = t.extend({}, n), this.firstTick = !0, this.instanceNumber = e.length, e.push(this), this.$el.data("countdown-instance", this.instanceNumber), r && ("function" == typeof r ? (this.$el.on("update.countdown", r), this.$el.on("stoped.countdown", r), this.$el.on("finish.countdown", r)) : this.options = t.extend({}, n, r)), this.setFinalDate(o), !1 === this.options.defer && this.start()
						};
						t.extend(l.prototype, {
							start: function() {
								null !== this.interval && clearInterval(this.interval);
								var t = this;
								this.update(), this.interval = setInterval((function() {
									t.update.call(t)
								}), this.options.precision)
							},
							stop: function() {
								clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
							},
							toggle: function() {
								this.interval ? this.stop() : this.start()
							},
							pause: function() {
								this.stop()
							},
							resume: function() {
								this.start()
							},
							remove: function() {
								this.stop.call(this), e[this.instanceNumber] = null, delete this.$el.data().countdownInstance
							},
							setFinalDate: function(t) {
								this.finalDate = o(t)
							},
							update: function() {
								if (0 !== this.$el.closest("html").length) {
									var t, e = new Date;
									t = this.finalDate.getTime() - e.getTime(), t = Math.ceil(t / 1e3), t = !this.options.elapse && t < 0 ? 0 : Math.abs(t), this.totalSecsLeft === t || this.firstTick ? this.firstTick = !1 : (this.totalSecsLeft = t, this.elapsed = e >= this.finalDate, this.offset = {
										seconds: this.totalSecsLeft % 60,
										minutes: Math.floor(this.totalSecsLeft / 60) % 60,
										hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
										days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
										daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
										daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
										weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
										weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
										months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
										years: Math.abs(this.finalDate.getFullYear() - e.getFullYear()),
										totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
										totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
										totalMinutes: Math.floor(this.totalSecsLeft / 60),
										totalSeconds: this.totalSecsLeft
									}, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
								} else this.remove()
							},
							dispatchEvent: function(e) {
								var i = t.Event(e + ".countdown");
								i.finalDate = this.finalDate, i.elapsed = this.elapsed, i.offset = t.extend({}, this.offset), i.strftime = a(this.offset), this.$el.trigger(i)
							}
						}), t.fn.theFinalCountdown = function() {
							var i = Array.prototype.slice.call(arguments, 0);
							return this.each((function() {
								var n = t(this).data("countdown-instance");
								if (n !== undefined) {
									var o = e[n],
										r = i[0];
									l.prototype.hasOwnProperty(r) ? o[r].apply(o, i.slice(1)) : null === String(r).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (o.setFinalDate.call(o, r), o.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, r))
								} else new l(this, i[0], i[1])
							}))
						}
					}, (r = "function" == typeof n ? n.apply(e, o) : n) === undefined || (t.exports = r)
				}()
			},
			580: function(t, e, i) {
				var n, o;

				function r(t) {
					return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, r(t)
				}
				n = [i(311)], o = function(t) {
					return function(t) {
						var e = function(t, e) {
								var i, n = document.createElement("canvas");
								t.appendChild(n), "object" == ("undefined" == typeof G_vmlCanvasManager ? "undefined" : r(G_vmlCanvasManager)) && G_vmlCanvasManager.initElement(n);
								var o = n.getContext("2d");
								n.width = n.height = e.size;
								var s = 1;
								window.devicePixelRatio > 1 && (s = window.devicePixelRatio, n.style.width = n.style.height = [e.size, "px"].join(""), n.width = n.height = e.size * s, o.scale(s, s)), o.translate(e.size / 2, e.size / 2), o.rotate((e.rotate / 180 - .5) * Math.PI);
								var a = (e.size - e.lineWidth) / 2;
								e.scaleColor && e.scaleLength && (a -= e.scaleLength + 2), Date.now = Date.now || function() {
									return +new Date
								};
								var h = function(t, e, i) {
										var n = 0 >= (i = Math.min(Math.max(-1, i || 0), 1));
										o.beginPath(), o.arc(0, 0, a, 0, 2 * Math.PI * i, n), o.strokeStyle = t, o.lineWidth = e, o.stroke()
									},
									l = function() {
										var t, i;
										o.lineWidth = 1, o.fillStyle = e.scaleColor, o.save();
										for (var n = 24; n > 0; --n) n % 6 == 0 ? (i = e.scaleLength, t = 0) : (i = .6 * e.scaleLength, t = e.scaleLength - i), o.fillRect(-e.size / 2 + t, 0, i, 1), o.rotate(Math.PI / 12);
										o.restore()
									},
									c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
										window.setTimeout(t, 1e3 / 60)
									},
									u = function() {
										e.scaleColor && l(), e.trackColor && h(e.trackColor, e.trackWidth || e.lineWidth, 1)
									};
								this.getCanvas = function() {
									return n
								}, this.getCtx = function() {
									return o
								}, this.clear = function() {
									o.clearRect(e.size / -2, e.size / -2, e.size, e.size)
								}, this.draw = function(t) {
									var n;
									e.scaleColor || e.trackColor ? o.getImageData && o.putImageData ? i ? o.putImageData(i, 0, 0) : (u(), i = o.getImageData(0, 0, e.size * s, e.size * s)) : (this.clear(), u()) : this.clear(), o.lineCap = e.lineCap, n = "function" == typeof e.barColor ? e.barColor(t) : e.barColor, h(n, e.lineWidth, t / 100)
								}.bind(this), this.animate = function(t, i) {
									var n = Date.now();
									e.onStart(t, i);
									var o = function() {
										var r = Math.min(Date.now() - n, e.animate.duration),
											s = e.easing(this, r, t, i - t, e.animate.duration);
										this.draw(s), e.onStep(t, i, s), r >= e.animate.duration ? e.onStop(t, i) : c(o)
									}.bind(this);
									c(o)
								}.bind(this)
							},
							i = function(t, i) {
								var n = {
									barColor: "#ef1e25",
									trackColor: "#f9f9f9",
									scaleColor: "#dfe0e0",
									scaleLength: 5,
									lineCap: "round",
									lineWidth: 3,
									trackWidth: void 0,
									size: 110,
									rotate: 0,
									animate: {
										duration: 1e3,
										enabled: !0
									},
									easing: function(t, e, i, n, o) {
										return 1 > (e /= o / 2) ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
									},
									onStart: function(t, e) {},
									onStep: function(t, e, i) {},
									onStop: function(t, e) {}
								};
								if (void 0 !== e) n.renderer = e;
								else {
									if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
									n.renderer = SVGRenderer
								}
								var o = {},
									r = 0,
									s = function() {
										for (var e in this.el = t, this.options = o, n) n.hasOwnProperty(e) && (o[e] = i && "undefined" != typeof i[e] ? i[e] : n[e], "function" == typeof o[e] && (o[e] = o[e].bind(this)));
										"string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = n.easing, "number" == typeof o.animate && (o.animate = {
											duration: o.animate,
											enabled: !0
										}), "boolean" != typeof o.animate || o.animate || (o.animate = {
											duration: 1e3,
											enabled: o.animate
										}), this.renderer = new o.renderer(t, o), this.renderer.draw(r), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent")))
									}.bind(this);
								this.update = function(t) {
									return t = parseFloat(t), o.animate.enabled ? this.renderer.animate(r, t) : this.renderer.draw(t), r = t, this
								}.bind(this), this.disableAnimation = function() {
									return o.animate.enabled = !1, this
								}, this.enableAnimation = function() {
									return o.animate.enabled = !0, this
								}, s()
							};
						t.fn.easyPieChart = function(e) {
							return this.each((function() {
								var n;
								t.data(this, "easyPieChart") || (n = t.extend({}, e, t(this).data()), t.data(this, "easyPieChart", new i(this, n)))
							}))
						}
					}(t)
				}.apply(e, n), o === undefined || (t.exports = o)
			},
			178: function(t, e) {
				var i, n, o;
				n = [], i = function() {
					var t = Object.assign || window.jQuery && jQuery.extend,
						e = 8,
						i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) {
							return window.setTimeout((function() {
								t()
							}), 25)
						};
					! function() {
						if ("function" == typeof window.CustomEvent) return !1;

						function t(t, e) {
							e = e || {
								bubbles: !1,
								cancelable: !1,
								detail: undefined
							};
							var i = document.createEvent("CustomEvent");
							return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
						}
						t.prototype = window.Event.prototype, window.CustomEvent = t
					}();
					var n = {
							textarea: !0,
							input: !0,
							select: !0,
							button: !0
						},
						o = {
							move: "mousemove",
							cancel: "mouseup dragstart",
							end: "mouseup"
						},
						r = {
							move: "touchmove",
							cancel: "touchend",
							end: "touchend"
						},
						s = /\s+/,
						a = {
							bubbles: !0,
							cancelable: !0
						},
						h = "function" == typeof Symbol ? Symbol("events") : {};

					function l(t) {
						return new CustomEvent(t, a)
					}

					function c(t) {
						return t[h] || (t[h] = {})
					}

					function u(t, e, i, n, o) {
						e = e.split(s);
						var r, a = c(t),
							h = e.length;

						function l(t) {
							i(t, n)
						}
						for (; h--;)(a[r = e[h]] || (a[r] = [])).push([i, l]), t.addEventListener(r, l)
					}

					function d(t, e, i, n) {
						e = e.split(s);
						var o, r, a, h = c(t),
							l = e.length;
						if (h)
							for (; l--;)
								if (r = h[o = e[l]])
									for (a = r.length; a--;) r[a][0] === i && (t.removeEventListener(o, r[a][1]), r.splice(a, 1))
					}

					function p(e, i, n) {
						var o = l(i);
						n && t(o, n), e.dispatchEvent(o)
					}

					function f(t) {
						var e = t,
							n = !1,
							o = !1;

						function r(t) {
							n ? (e(), i(r), o = !0, n = !1) : o = !1
						}
						this.kick = function(t) {
							n = !0, o || r()
						}, this.end = function(t) {
							var i = e;
							t && (o ? (e = n ? function() {
								i(), t()
							} : t, n = !0) : t())
						}
					}

					function m() {}

					function g(t) {
						t.preventDefault()
					}

					function v(t) {
						return !!n[t.target.tagName.toLowerCase()]
					}

					function y(t) {
						return 1 === t.which && !t.ctrlKey && !t.altKey
					}

					function _(t, e) {
						var i, n;
						if (t.identifiedTouch) return t.identifiedTouch(e);
						for (i = -1, n = t.length; ++i < n;)
							if (t[i].identifier === e) return t[i]
					}

					function w(t, e) {
						var i = _(t.changedTouches, e.identifier);
						if (i && (i.pageX !== e.pageX || i.pageY !== e.pageY)) return i
					}

					function b(t) {
						y(t) && (v(t) || (u(document, o.move, x, t), u(document, o.cancel, S, t)))
					}

					function x(t, e) {
						z(t, e, t, E)
					}

					function S(t, e) {
						E()
					}

					function E() {
						d(document, o.move, x), d(document, o.cancel, S)
					}

					function C(t) {
						if (!n[t.target.tagName.toLowerCase()]) {
							var e = t.changedTouches[0],
								i = {
									target: e.target,
									pageX: e.pageX,
									pageY: e.pageY,
									identifier: e.identifier,
									touchmove: function(t, e) {
										I(t, e)
									},
									touchend: function(t, e) {
										T(t, e)
									}
								};
							u(document, r.move, i.touchmove, i), u(document, r.cancel, i.touchend, i)
						}
					}

					function I(t, e) {
						var i = w(t, e);
						i && z(t, e, i, k)
					}

					function T(t, e) {
						_(t.changedTouches, e.identifier) && k(e)
					}

					function k(t) {
						d(document, r.move, t.touchmove), d(document, r.cancel, t.touchend)
					}

					function z(t, i, n, o) {
						var r = n.pageX - i.pageX,
							s = n.pageY - i.pageY;
						r * r + s * s < e * e || L(t, i, n, r, s, o)
					}

					function L(t, e, i, n, o, r) {
						var s = t.targetTouches,
							a = t.timeStamp - e.timeStamp,
							h = {
								altKey: t.altKey,
								ctrlKey: t.ctrlKey,
								shiftKey: t.shiftKey,
								startX: e.pageX,
								startY: e.pageY,
								distX: n,
								distY: o,
								deltaX: n,
								deltaY: o,
								pageX: i.pageX,
								pageY: i.pageY,
								velocityX: n / a,
								velocityY: o / a,
								identifier: e.identifier,
								targetTouches: s,
								finger: s ? s.length : 1,
								enableMove: function() {
									this.moveEnabled = !0, this.enableMove = m, t.preventDefault()
								}
							};
						p(e.target, "movestart", h), r(e)
					}

					function P(t, e) {
						var i = e.timer;
						e.touch = t, e.timeStamp = t.timeStamp, i.kick()
					}

					function O(t, e) {
						var i = e.target,
							n = e.event,
							o = e.timer;
						W(), F(i, n, o, (function() {
							setTimeout((function() {
								d(i, "click", g)
							}), 0)
						}))
					}

					function W() {
						d(document, o.move, P), d(document, o.end, O)
					}

					function M(t, e) {
						var i = e.event,
							n = e.timer,
							o = w(t, i);
						o && (t.preventDefault(), i.targetTouches = t.targetTouches, e.touch = o, e.timeStamp = t.timeStamp, n.kick())
					}

					function A(t, e) {
						var i = e.target,
							n = e.event,
							o = e.timer;
						_(t.changedTouches, n.identifier) && (D(e), F(i, n, o))
					}

					function D(t) {
						d(document, r.move, t.activeTouchmove), d(document, r.end, t.activeTouchend)
					}

					function R(t, e, i) {
						var n = i - t.timeStamp;
						t.distX = e.pageX - t.startX, t.distY = e.pageY - t.startY, t.deltaX = e.pageX - t.pageX, t.deltaY = e.pageY - t.pageY, t.velocityX = .3 * t.velocityX + .7 * t.deltaX / n, t.velocityY = .3 * t.velocityY + .7 * t.deltaY / n, t.pageX = e.pageX, t.pageY = e.pageY
					}

					function F(t, e, i, n) {
						i.end((function() {
							return p(t, "moveend", e), n && n()
						}))
					}

					function j(t) {
						if (!t.defaultPrevented && t.moveEnabled) {
							var e = {
									startX: t.startX,
									startY: t.startY,
									pageX: t.pageX,
									pageY: t.pageY,
									distX: t.distX,
									distY: t.distY,
									deltaX: t.deltaX,
									deltaY: t.deltaY,
									velocityX: t.velocityX,
									velocityY: t.velocityY,
									identifier: t.identifier,
									targetTouches: t.targetTouches,
									finger: t.finger
								},
								i = {
									target: t.target,
									event: e,
									timer: new f(n),
									touch: undefined,
									timeStamp: t.timeStamp
								};
							t.identifier === undefined ? (u(t.target, "click", g), u(document, o.move, P, i), u(document, o.end, O, i)) : (i.activeTouchmove = function(t, e) {
								M(t, e)
							}, i.activeTouchend = function(t, e) {
								A(t, e)
							}, u(document, r.move, i.activeTouchmove, i), u(document, r.end, i.activeTouchend, i))
						}

						function n(t) {
							R(e, i.touch, i.timeStamp), p(i.target, "move", e)
						}
					}
					if (u(document, "mousedown", b), u(document, "touchstart", C), u(document, "movestart", j), window.jQuery) {
						var B = "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" ");
						jQuery.event.special.movestart = {
							setup: function() {
								return u(this, "movestart", N), !1
							},
							teardown: function() {
								return d(this, "movestart", N), !1
							},
							add: Q
						}, jQuery.event.special.move = {
							setup: function() {
								return u(this, "movestart", H), !1
							},
							teardown: function() {
								return d(this, "movestart", H), !1
							},
							add: Q
						}, jQuery.event.special.moveend = {
							setup: function() {
								return u(this, "movestart", Y), !1
							},
							teardown: function() {
								return d(this, "movestart", Y), !1
							},
							add: Q
						}
					}

					function N(t) {
						t.enableMove()
					}

					function H(t) {
						t.enableMove()
					}

					function Y(t) {
						t.enableMove()
					}

					function Q(t) {
						var e = t.handler;
						t.handler = function(t) {
							for (var i, n = B.length; n--;) t[i = B[n]] = t.originalEvent[i];
							e.apply(this, arguments)
						}
					}
				}, (o = "function" == typeof i ? i.apply(e, n) : i) === undefined || (t.exports = o)
			},
			595: function(t, e, i) {
				var n, o, r;
				o = [i(311)], n = function(t) {
					var e, i, n, o, r, s, a = "Close",
						h = "BeforeClose",
						l = "AfterClose",
						c = "BeforeAppend",
						u = "MarkupParse",
						d = "Open",
						p = "Change",
						f = "mfp",
						m = "." + f,
						g = "mfp-ready",
						v = "mfp-removing",
						y = "mfp-prevent-close",
						_ = function() {},
						w = !!window.jQuery,
						b = t(window),
						x = function(t, i) {
							e.ev.on(f + t + m, i)
						},
						S = function(e, i, n, o) {
							var r = document.createElement("div");
							return r.className = "mfp-" + e, n && (r.innerHTML = n), o ? i && i.appendChild(r) : (r = t(r), i && r.appendTo(i)), r
						},
						E = function(i, n) {
							e.ev.triggerHandler(f + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
						},
						C = function(i) {
							return i === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = i), e.currTemplate.closeBtn
						},
						I = function() {
							t.magnificPopup.instance || ((e = new _).init(), t.magnificPopup.instance = e)
						},
						T = function() {
							var t = document.createElement("p").style,
								e = ["ms", "O", "Moz", "Webkit"];
							if (void 0 !== t.transition) return !0;
							for (; e.length;)
								if (e.pop() + "Transition" in t) return !0;
							return !1
						};
					_.prototype = {
						constructor: _,
						init: function() {
							var i = navigator.appVersion;
							e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = T(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
						},
						open: function(i) {
							var o;
							if (!1 === i.isObj) {
								e.items = i.items.toArray(), e.index = 0;
								var s, a = i.items;
								for (o = 0; o < a.length; o++)
									if ((s = a[o]).parsed && (s = s.el[0]), s === i.el[0]) {
										e.index = o;
										break
									}
							} else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
							if (!e.isOpen) {
								e.types = [], r = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = S("bg").on("click" + m, (function() {
									e.close()
								})), e.wrap = S("wrap").attr("tabindex", -1).on("click" + m, (function(t) {
									e._checkIfClose(t.target) && e.close()
								})), e.container = S("container", e.wrap)), e.contentContainer = S("content"), e.st.preloader && (e.preloader = S("preloader", e.container, e.st.tLoading));
								var h = t.magnificPopup.modules;
								for (o = 0; o < h.length; o++) {
									var l = h[o];
									l = l.charAt(0).toUpperCase() + l.slice(1), e["init" + l].call(e)
								}
								E("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (x(u, (function(t, e, i, n) {
									i.close_replaceWith = C(n.type)
								})), r += " mfp-close-btn-in") : e.wrap.append(C())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
									overflow: e.st.overflowY,
									overflowX: "hidden",
									overflowY: e.st.overflowY
								}) : e.wrap.css({
									top: b.scrollTop(),
									position: "absolute"
								}), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
									height: n.height(),
									position: "absolute"
								}), e.st.enableEscapeKey && n.on("keyup" + m, (function(t) {
									27 === t.keyCode && e.close()
								})), b.on("resize" + m, (function() {
									e.updateSize()
								})), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
								var c = e.wH = b.height(),
									p = {};
								if (e.fixedContentPos && e._hasScrollBar(c)) {
									var f = e._getScrollbarSize();
									f && (p.marginRight = f)
								}
								e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : p.overflow = "hidden");
								var v = e.st.mainClass;
								return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), E("BuildControls"), t("html").css(p), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout((function() {
									e.content ? (e._addClassToMFP(g), e._setFocus()) : e.bgOverlay.addClass(g), n.on("focusin" + m, e._onFocusIn)
								}), 16), e.isOpen = !0, e.updateSize(c), E(d), i
							}
							e.updateItemHTML()
						},
						close: function() {
							e.isOpen && (E(h), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout((function() {
								e._close()
							}), e.st.removalDelay)) : e._close())
						},
						_close: function() {
							E(a);
							var i = v + " " + g + " ";
							if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
								var o = {
									marginRight: ""
								};
								e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
							}
							n.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, E(l)
						},
						updateSize: function(t) {
							if (e.isIOS) {
								var i = document.documentElement.clientWidth / window.innerWidth,
									n = window.innerHeight * i;
								e.wrap.css("height", n), e.wH = n
							} else e.wH = t || b.height();
							e.fixedContentPos || e.wrap.css("height", e.wH), E("Resize")
						},
						updateItemHTML: function() {
							var i = e.items[e.index];
							e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
							var n = i.type;
							if (E("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
								var r = !!e.st[n] && e.st[n].markup;
								E("FirstMarkupParse", r), e.currTemplate[n] = !r || t(r)
							}
							o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
							var s = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
							e.appendContent(s, n), i.preloaded = !0, E(p, i), o = i.type, e.container.prepend(e.contentContainer), E("AfterChange")
						},
						appendContent: function(t, i) {
							e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(C()) : e.content = t : e.content = "", E(c), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
						},
						parseEl: function(i) {
							var n, o = e.items[i];
							if (o.tagName ? o = {
									el: t(o)
								} : (n = o.type, o = {
									data: o,
									src: o.src
								}), o.el) {
								for (var r = e.types, s = 0; s < r.length; s++)
									if (o.el.hasClass("mfp-" + r[s])) {
										n = r[s];
										break
									} o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
							}
							return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, E("ElementParse", o), e.items[i]
						},
						addGroup: function(t, i) {
							var n = function(n) {
								n.mfpEl = this, e._openClick(n, t, i)
							};
							i || (i = {});
							var o = "click.magnificPopup";
							i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n)))
						},
						_openClick: function(i, n, o) {
							if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
								var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
								if (r)
									if (t.isFunction(r)) {
										if (!r.call(e)) return !0
									} else if (b.width() < r) return !0;
								i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o)
							}
						},
						updateStatus: function(t, n) {
							if (e.preloader) {
								i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
								var o = {
									status: t,
									text: n
								};
								E("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", (function(t) {
									t.stopImmediatePropagation()
								})), e.container.addClass("mfp-s-" + t), i = t
							}
						},
						_checkIfClose: function(i) {
							if (!t(i).hasClass(y)) {
								var n = e.st.closeOnContentClick,
									o = e.st.closeOnBgClick;
								if (n && o) return !0;
								if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
								if (i === e.content[0] || t.contains(e.content[0], i)) {
									if (n) return !0
								} else if (o && t.contains(document, i)) return !0;
								return !1
							}
						},
						_addClassToMFP: function(t) {
							e.bgOverlay.addClass(t), e.wrap.addClass(t)
						},
						_removeClassFromMFP: function(t) {
							this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
						},
						_hasScrollBar: function(t) {
							return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || b.height())
						},
						_setFocus: function() {
							(e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
						},
						_onFocusIn: function(i) {
							return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
						},
						_parseMarkup: function(e, i, n) {
							var o;
							n.data && (i = t.extend(n.data, i)), E(u, [e, i, n]), t.each(i, (function(i, n) {
								if (void 0 === n || !1 === n) return !0;
								if ((o = i.split("_")).length > 1) {
									var r = e.find(m + "-" + o[0]);
									if (r.length > 0) {
										var s = o[1];
										"replaceWith" === s ? r[0] !== n[0] && r.replaceWith(n) : "img" === s ? r.is("img") ? r.attr("src", n) : r.replaceWith(t("<img>").attr("src", n).attr("class", r.attr("class"))) : r.attr(o[1], n)
									}
								} else e.find(m + "-" + i).html(n)
							}))
						},
						_getScrollbarSize: function() {
							if (void 0 === e.scrollbarSize) {
								var t = document.createElement("div");
								t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
							}
							return e.scrollbarSize
						}
					}, t.magnificPopup = {
						instance: null,
						proto: _.prototype,
						modules: [],
						open: function(e, i) {
							return I(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
						},
						close: function() {
							return t.magnificPopup.instance && t.magnificPopup.instance.close()
						},
						registerModule: function(e, i) {
							i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
						},
						defaults: {
							disableOn: 0,
							key: null,
							midClick: !1,
							mainClass: "",
							preloader: !0,
							focus: "",
							closeOnContentClick: !1,
							closeOnBgClick: !0,
							closeBtnInside: !0,
							showCloseBtn: !0,
							enableEscapeKey: !0,
							modal: !1,
							alignTop: !1,
							removalDelay: 0,
							prependTo: null,
							fixedContentPos: "auto",
							fixedBgPos: "auto",
							overflowY: "auto",
							closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
							tClose: "Close (Esc)",
							tLoading: "Loading...",
							autoFocusLast: !0
						}
					}, t.fn.magnificPopup = function(i) {
						I();
						var n = t(this);
						if ("string" == typeof i)
							if ("open" === i) {
								var o, r = w ? n.data("magnificPopup") : n[0].magnificPopup,
									s = parseInt(arguments[1], 10) || 0;
								r.items ? o = r.items[s] : (o = n, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), e._openClick({
									mfpEl: o
								}, n, r)
							} else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
						else i = t.extend(!0, {}, i), w ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
						return n
					};
					var k, z, L, P = "inline",
						O = function() {
							L && (z.after(L.addClass(k)).detach(), L = null)
						};
					t.magnificPopup.registerModule(P, {
						options: {
							hiddenClass: "hide",
							markup: "",
							tNotFound: "Content not found"
						},
						proto: {
							initInline: function() {
								e.types.push(P), x(a + "." + P, (function() {
									O()
								}))
							},
							getInline: function(i, n) {
								if (O(), i.src) {
									var o = e.st.inline,
										r = t(i.src);
									if (r.length) {
										var s = r[0].parentNode;
										s && s.tagName && (z || (k = o.hiddenClass, z = S(k), k = "mfp-" + k), L = r.after(z).detach().removeClass(k)), e.updateStatus("ready")
									} else e.updateStatus("error", o.tNotFound), r = t("<div>");
									return i.inlineElement = r, r
								}
								return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
							}
						}
					});
					var W, M = "ajax",
						A = function() {
							W && t(document.body).removeClass(W)
						},
						D = function() {
							A(), e.req && e.req.abort()
						};
					t.magnificPopup.registerModule(M, {
						options: {
							settings: null,
							cursor: "mfp-ajax-cur",
							tError: '<a href="%url%">The content</a> could not be loaded.'
						},
						proto: {
							initAjax: function() {
								e.types.push(M), W = e.st.ajax.cursor, x(a + "." + M, D), x("BeforeChange." + M, D)
							},
							getAjax: function(i) {
								W && t(document.body).addClass(W), e.updateStatus("loading");
								var n = t.extend({
									url: i.src,
									success: function(n, o, r) {
										var s = {
											data: n,
											xhr: r
										};
										E("ParseAjax", s), e.appendContent(t(s.data), M), i.finished = !0, A(), e._setFocus(), setTimeout((function() {
											e.wrap.addClass(g)
										}), 16), e.updateStatus("ready"), E("AjaxContentAdded")
									},
									error: function() {
										A(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
									}
								}, e.st.ajax.settings);
								return e.req = t.ajax(n), ""
							}
						}
					});
					var R, F = function(i) {
						if (i.data && void 0 !== i.data.title) return i.data.title;
						var n = e.st.image.titleSrc;
						if (n) {
							if (t.isFunction(n)) return n.call(e, i);
							if (i.el) return i.el.attr(n) || ""
						}
						return ""
					};
					t.magnificPopup.registerModule("image", {
						options: {
							markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
							cursor: "mfp-zoom-out-cur",
							titleSrc: "title",
							verticalFit: !0,
							tError: '<a href="%url%">The image</a> could not be loaded.'
						},
						proto: {
							initImage: function() {
								var i = e.st.image,
									n = ".image";
								e.types.push("image"), x(d + n, (function() {
									"image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
								})), x(a + n, (function() {
									i.cursor && t(document.body).removeClass(i.cursor), b.off("resize" + m)
								})), x("Resize" + n, e.resizeImage), e.isLowIE && x("AfterChange", e.resizeImage)
							},
							resizeImage: function() {
								var t = e.currItem;
								if (t && t.img && e.st.image.verticalFit) {
									var i = 0;
									e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
								}
							},
							_onImageHasSize: function(t) {
								t.img && (t.hasSize = !0, R && clearInterval(R), t.isCheckingImgSize = !1, E("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
							},
							findImageSize: function(t) {
								var i = 0,
									n = t.img[0],
									o = function r(o) {
										R && clearInterval(R), R = setInterval((function() {
											return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(R), void(3 == ++i ? r(10) : 40 === i ? r(50) : 100 === i && r(500)))
										}), o)
									};
								o(1)
							},
							getImage: function(i, n) {
								var o = 0,
									r = function c() {
										i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, E("ImageLoadComplete")) : 200 > ++o ? setTimeout(c, 100) : s())
									},
									s = function() {
										i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
									},
									a = e.st.image,
									h = n.find(".mfp-img");
								if (h.length) {
									var l = document.createElement("img");
									l.className = "mfp-img", i.el && i.el.find("img").length && (l.alt = i.el.find("img").attr("alt")), i.img = t(l).on("load.mfploader", r).on("error.mfploader", s), l.src = i.src, h.is("img") && (i.img = i.img.clone()), (l = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : l.width || (i.hasSize = !1)
								}
								return e._parseMarkup(n, {
									title: F(i),
									img_replaceWith: i.img
								}, i), e.resizeImage(), i.hasSize ? (R && clearInterval(R), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
							}
						}
					});
					var j, B = function() {
						return void 0 === j && (j = void 0 !== document.createElement("p").style.MozTransform), j
					};
					t.magnificPopup.registerModule("zoom", {
						options: {
							enabled: !1,
							easing: "ease-in-out",
							duration: 300,
							opener: function(t) {
								return t.is("img") ? t : t.find("img")
							}
						},
						proto: {
							initZoom: function() {
								var t, i = e.st.zoom,
									n = ".zoom";
								if (i.enabled && e.supportsTransition) {
									var o, r, s = i.duration,
										l = function(t) {
											var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
												n = "all " + i.duration / 1e3 + "s " + i.easing,
												o = {
													position: "fixed",
													zIndex: 9999,
													left: 0,
													top: 0,
													"-webkit-backface-visibility": "hidden"
												},
												r = "transition";
											return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n, e.css(o), e
										},
										c = function() {
											e.content.css("visibility", "visible")
										};
									x("BuildControls" + n, (function() {
										if (e._allowZoom()) {
											if (clearTimeout(o), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void c();
											(r = l(t)).css(e._getOffset()), e.wrap.append(r), o = setTimeout((function() {
												r.css(e._getOffset(!0)), o = setTimeout((function() {
													c(), setTimeout((function() {
														r.remove(), t = r = null, E("ZoomAnimationEnded")
													}), 16)
												}), s)
											}), 16)
										}
									})), x(h + n, (function() {
										if (e._allowZoom()) {
											if (clearTimeout(o), e.st.removalDelay = s, !t) {
												if (!(t = e._getItemToZoom())) return;
												r = l(t)
											}
											r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout((function() {
												r.css(e._getOffset())
											}), 16)
										}
									})), x(a + n, (function() {
										e._allowZoom() && (c(), r && r.remove(), t = null)
									}))
								}
							},
							_allowZoom: function() {
								return "image" === e.currItem.type
							},
							_getItemToZoom: function() {
								return !!e.currItem.hasSize && e.currItem.img
							},
							_getOffset: function(i) {
								var n, o = (n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
									r = parseInt(n.css("padding-top"), 10),
									s = parseInt(n.css("padding-bottom"), 10);
								o.top -= t(window).scrollTop() - r;
								var a = {
									width: n.width(),
									height: (w ? n.innerHeight() : n[0].offsetHeight) - s - r
								};
								return B() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
							}
						}
					});
					var N = "iframe",
						H = "//about:blank",
						Y = function(t) {
							if (e.currTemplate[N]) {
								var i = e.currTemplate[N].find("iframe");
								i.length && (t || (i[0].src = H), e.isIE8 && i.css("display", t ? "block" : "none"))
							}
						};
					t.magnificPopup.registerModule(N, {
						options: {
							markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
							srcAction: "iframe_src",
							patterns: {
								youtube: {
									index: "youtube.com",
									id: "v=",
									src: "//www.youtube.com/embed/%id%?autoplay=1"
								},
								vimeo: {
									index: "vimeo.com/",
									id: "/",
									src: "//player.vimeo.com/video/%id%?autoplay=1"
								},
								gmaps: {
									index: "//maps.google.",
									src: "%id%&output=embed"
								}
							}
						},
						proto: {
							initIframe: function() {
								e.types.push(N), x("BeforeChange", (function(t, e, i) {
									e !== i && (e === N ? Y() : i === N && Y(!0))
								})), x(a + "." + N, (function() {
									Y()
								}))
							},
							getIframe: function(i, n) {
								var o = i.src,
									r = e.st.iframe;
								t.each(r.patterns, (function() {
									return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
								}));
								var s = {};
								return r.srcAction && (s[r.srcAction] = o), e._parseMarkup(n, s, i), e.updateStatus("ready"), n
							}
						}
					});
					var Q = function(t) {
							var i = e.items.length;
							return t > i - 1 ? t - i : 0 > t ? i + t : t
						},
						X = function(t, e, i) {
							return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
						};
					t.magnificPopup.registerModule("gallery", {
						options: {
							enabled: !1,
							arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
							preload: [0, 2],
							navigateByImgClick: !0,
							arrows: !0,
							tPrev: "Previous (Left arrow key)",
							tNext: "Next (Right arrow key)",
							tCounter: "%curr% of %total%"
						},
						proto: {
							initGallery: function() {
								var i = e.st.gallery,
									o = ".mfp-gallery";
								return e.direction = !0, !(!i || !i.enabled) && (r += " mfp-gallery", x(d + o, (function() {
									i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", (function() {
										return e.items.length > 1 ? (e.next(), !1) : void 0
									})), n.on("keydown" + o, (function(t) {
										37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
									}))
								})), x("UpdateStatus" + o, (function(t, i) {
									i.text && (i.text = X(i.text, e.currItem.index, e.items.length))
								})), x(u + o, (function(t, n, o, r) {
									var s = e.items.length;
									o.counter = s > 1 ? X(i.tCounter, r.index, s) : ""
								})), x("BuildControls" + o, (function() {
									if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
										var n = i.arrowMarkup,
											o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(y),
											r = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(y);
										o.click((function() {
											e.prev()
										})), r.click((function() {
											e.next()
										})), e.container.append(o.add(r))
									}
								})), x(p + o, (function() {
									e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout((function() {
										e.preloadNearbyImages(), e._preloadTimeout = null
									}), 16)
								})), void x(a + o, (function() {
									n.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null
								})))
							},
							next: function() {
								e.direction = !0, e.index = Q(e.index + 1), e.updateItemHTML()
							},
							prev: function() {
								e.direction = !1, e.index = Q(e.index - 1), e.updateItemHTML()
							},
							goTo: function(t) {
								e.direction = t >= e.index, e.index = t, e.updateItemHTML()
							},
							preloadNearbyImages: function() {
								var t, i = e.st.gallery.preload,
									n = Math.min(i[0], e.items.length),
									o = Math.min(i[1], e.items.length);
								for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
								for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t)
							},
							_preloadItem: function(i) {
								if (i = Q(i), !e.items[i].preloaded) {
									var n = e.items[i];
									n.parsed || (n = e.parseEl(i)), E("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", (function() {
										n.hasSize = !0
									})).on("error.mfploader", (function() {
										n.hasSize = !0, n.loadError = !0, E("LazyLoadError", n)
									})).attr("src", n.src)), n.preloaded = !0
								}
							}
						}
					});
					var q = "retina";
					t.magnificPopup.registerModule(q, {
						options: {
							replaceSrc: function(t) {
								return t.src.replace(/\.\w+$/, (function(t) {
									return "@2x" + t
								}))
							},
							ratio: 1
						},
						proto: {
							initRetina: function() {
								if (window.devicePixelRatio > 1) {
									var t = e.st.retina,
										i = t.ratio;
									(i = isNaN(i) ? i() : i) > 1 && (x("ImageHasSize." + q, (function(t, e) {
										e.img.css({
											"max-width": e.img[0].naturalWidth / i,
											width: "100%"
										})
									})), x("ElementParse." + q, (function(e, n) {
										n.src = t.replaceSrc(n, i)
									})))
								}
							}
						}
					}), I()
				}, (r = "function" == typeof n ? n.apply(e, o) : n) === undefined || (t.exports = r)
			},
			363: function() {
				! function(t) {
					"use strict";
					t.fn.twentytwenty = function(e) {
						e = t.extend({
							default_offset_pct: .5,
							orientation: "horizontal",
							before_label: "Before",
							after_label: "After",
							no_overlay: !1,
							move_slider_on_hover: !1,
							move_with_handle_only: !0,
							click_to_move: !1
						}, e);
						return this.each((function() {
							var i = e.default_offset_pct,
								n = t(this),
								o = e.orientation,
								r = "vertical" === o ? "down" : "left",
								s = "vertical" === o ? "up" : "right";
							if (n.wrap("<div class='twentytwenty-wrapper twentytwenty-" + o + "'></div>"), !e.no_overlay) {
								n.append("<div class='twentytwenty-overlay'></div>");
								var a = n.find(".twentytwenty-overlay");
								a.append("<div class='twentytwenty-before-label' data-content='" + e.before_label + "'></div>"), a.append("<div class='twentytwenty-after-label' data-content='" + e.after_label + "'></div>")
							}
							var h = n.find("img:first"),
								l = n.find("img:last");
							n.append("<div class='twentytwenty-handle'></div>");
							var c = n.find(".twentytwenty-handle");
							c.append("<span class='twentytwenty-" + r + "-arrow'></span>"), c.append("<span class='twentytwenty-" + s + "-arrow'></span>"), n.addClass("twentytwenty-container"), h.addClass("twentytwenty-before"), l.addClass("twentytwenty-after");
							var u = function(t) {
									var e, i, r, s = (e = t, i = h.width(), r = h.height(), {
										w: i + "px",
										h: r + "px",
										cw: e * i + "px",
										ch: e * r + "px"
									});
									c.css("vertical" === o ? "top" : "left", "vertical" === o ? s.ch : s.cw),
										function(t) {
											"vertical" === o ? (h.css("clip", "rect(0," + t.w + "," + t.ch + ",0)"), l.css("clip", "rect(" + t.ch + "," + t.w + "," + t.h + ",0)")) : (h.css("clip", "rect(0," + t.cw + "," + t.h + ",0)"), l.css("clip", "rect(0," + t.w + "," + t.h + "," + t.cw + ")")), n.css("height", t.h)
										}(s)
								},
								d = function(t, e) {
									var i, n, r;
									return i = "vertical" === o ? (e - f) / g : (t - p) / m, n = 0, r = 1, Math.max(n, Math.min(r, i))
								};
							t(window).on("resize.twentytwenty", (function(t) {
								u(i)
							}));
							var p = 0,
								f = 0,
								m = 0,
								g = 0,
								v = function(t) {
									((t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY) && "vertical" !== o || (t.distX < t.distY && t.distX < -t.distY || t.distX > t.distY && t.distX > -t.distY) && "vertical" === o) && t.preventDefault(), n.addClass("active"), p = n.offset().left, f = n.offset().top, m = h.width(), g = h.height()
								},
								y = function(t) {
									n.hasClass("active") && (i = d(t.pageX, t.pageY), u(i))
								},
								_ = function() {
									n.removeClass("active")
								},
								w = e.move_with_handle_only ? c : n;
							w.on("movestart", v), w.on("move", y), w.on("moveend", _), e.move_slider_on_hover && (n.on("mouseenter", v), n.on("mousemove", y), n.on("mouseleave", _)), c.on("touchmove", (function(t) {
								t.preventDefault()
							})), n.find("img").on("mousedown", (function(t) {
								t.preventDefault()
							})), e.click_to_move && n.on("click", (function(t) {
								p = n.offset().left, f = n.offset().top, m = h.width(), g = h.height(), i = d(t.pageX, t.pageY), u(i)
							})), t(window).trigger("resize.twentytwenty")
						}))
					}
				}(jQuery)
			},
			955: function() {
				/*!
				Waypoints - 4.0.1
				Copyright Â© 2011-2016 Caleb Troughton
				Licensed under the MIT license.
				https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
				*/
				! function() {
					"use strict";

					function t(n) {
						if (!n) throw new Error("No options passed to Waypoint constructor");
						if (!n.element) throw new Error("No element option passed to Waypoint constructor");
						if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
						this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
							name: this.options.group,
							axis: this.axis
						}), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
					}
					var e = 0,
						i = {};
					t.prototype.queueTrigger = function(t) {
						this.group.queueTrigger(this, t)
					}, t.prototype.trigger = function(t) {
						this.enabled && this.callback && this.callback.apply(this, t)
					}, t.prototype.destroy = function() {
						this.context.remove(this), this.group.remove(this), delete i[this.key]
					}, t.prototype.disable = function() {
						return this.enabled = !1, this
					}, t.prototype.enable = function() {
						return this.context.refresh(), this.enabled = !0, this
					}, t.prototype.next = function() {
						return this.group.next(this)
					}, t.prototype.previous = function() {
						return this.group.previous(this)
					}, t.invokeAll = function(t) {
						var e = [];
						for (var n in i) e.push(i[n]);
						for (var o = 0, r = e.length; r > o; o++) e[o][t]()
					}, t.destroyAll = function() {
						t.invokeAll("destroy")
					}, t.disableAll = function() {
						t.invokeAll("disable")
					}, t.enableAll = function() {
						for (var e in t.Context.refreshAll(), i) i[e].enabled = !0;
						return this
					}, t.refreshAll = function() {
						t.Context.refreshAll()
					}, t.viewportHeight = function() {
						return window.innerHeight || document.documentElement.clientHeight
					}, t.viewportWidth = function() {
						return document.documentElement.clientWidth
					}, t.adapters = [], t.defaults = {
						context: window,
						continuous: !0,
						enabled: !0,
						group: "default",
						horizontal: !1,
						offset: 0
					}, t.offsetAliases = {
						"bottom-in-view": function() {
							return this.context.innerHeight() - this.adapter.outerHeight()
						},
						"right-in-view": function() {
							return this.context.innerWidth() - this.adapter.outerWidth()
						}
					}, window.Waypoint = t
				}(),
				function() {
					"use strict";

					function t(t) {
						window.setTimeout(t, 1e3 / 60)
					}

					function e(t) {
						this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
							x: this.adapter.scrollLeft(),
							y: this.adapter.scrollTop()
						}, this.waypoints = {
							vertical: {},
							horizontal: {}
						}, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
					}
					var i = 0,
						n = {},
						o = window.Waypoint,
						r = window.onload;
					e.prototype.add = function(t) {
						var e = t.options.horizontal ? "horizontal" : "vertical";
						this.waypoints[e][t.key] = t, this.refresh()
					}, e.prototype.checkEmpty = function() {
						var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
							e = this.Adapter.isEmptyObject(this.waypoints.vertical),
							i = this.element == this.element.window;
						t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key])
					}, e.prototype.createThrottledResizeHandler = function() {
						function t() {
							e.handleResize(), e.didResize = !1
						}
						var e = this;
						this.adapter.on("resize.waypoints", (function() {
							e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
						}))
					}, e.prototype.createThrottledScrollHandler = function() {
						function t() {
							e.handleScroll(), e.didScroll = !1
						}
						var e = this;
						this.adapter.on("scroll.waypoints", (function() {
							(!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
						}))
					}, e.prototype.handleResize = function() {
						o.Context.refreshAll()
					}, e.prototype.handleScroll = function() {
						var t = {},
							e = {
								horizontal: {
									newScroll: this.adapter.scrollLeft(),
									oldScroll: this.oldScroll.x,
									forward: "right",
									backward: "left"
								},
								vertical: {
									newScroll: this.adapter.scrollTop(),
									oldScroll: this.oldScroll.y,
									forward: "down",
									backward: "up"
								}
							};
						for (var i in e) {
							var n = e[i],
								o = n.newScroll > n.oldScroll ? n.forward : n.backward;
							for (var r in this.waypoints[i]) {
								var s = this.waypoints[i][r];
								if (null !== s.triggerPoint) {
									var a = n.oldScroll < s.triggerPoint,
										h = n.newScroll >= s.triggerPoint;
									(a && h || !a && !h) && (s.queueTrigger(o), t[s.group.id] = s.group)
								}
							}
						}
						for (var l in t) t[l].flushTriggers();
						this.oldScroll = {
							x: e.horizontal.newScroll,
							y: e.vertical.newScroll
						}
					}, e.prototype.innerHeight = function() {
						return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
					}, e.prototype.remove = function(t) {
						delete this.waypoints[t.axis][t.key], this.checkEmpty()
					}, e.prototype.innerWidth = function() {
						return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
					}, e.prototype.destroy = function() {
						var t = [];
						for (var e in this.waypoints)
							for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
						for (var n = 0, o = t.length; o > n; n++) t[n].destroy()
					}, e.prototype.refresh = function() {
						var t, e = this.element == this.element.window,
							i = e ? void 0 : this.adapter.offset(),
							n = {};
						for (var r in this.handleScroll(), t = {
								horizontal: {
									contextOffset: e ? 0 : i.left,
									contextScroll: e ? 0 : this.oldScroll.x,
									contextDimension: this.innerWidth(),
									oldScroll: this.oldScroll.x,
									forward: "right",
									backward: "left",
									offsetProp: "left"
								},
								vertical: {
									contextOffset: e ? 0 : i.top,
									contextScroll: e ? 0 : this.oldScroll.y,
									contextDimension: this.innerHeight(),
									oldScroll: this.oldScroll.y,
									forward: "down",
									backward: "up",
									offsetProp: "top"
								}
							}) {
							var s = t[r];
							for (var a in this.waypoints[r]) {
								var h, l, c, u, d = this.waypoints[r][a],
									p = d.options.offset,
									f = d.triggerPoint,
									m = 0,
									g = null == f;
								d.element !== d.element.window && (m = d.adapter.offset()[s.offsetProp]), "function" == typeof p ? p = p.apply(d) : "string" == typeof p && (p = parseFloat(p), d.options.offset.indexOf("%") > -1 && (p = Math.ceil(s.contextDimension * p / 100))), h = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(m + h - p), l = f < s.oldScroll, c = d.triggerPoint >= s.oldScroll, u = !l && !c, !g && (l && c) ? (d.queueTrigger(s.backward), n[d.group.id] = d.group) : (!g && u || g && s.oldScroll >= d.triggerPoint) && (d.queueTrigger(s.forward), n[d.group.id] = d.group)
							}
						}
						return o.requestAnimationFrame((function() {
							for (var t in n) n[t].flushTriggers()
						})), this
					}, e.findOrCreateByElement = function(t) {
						return e.findByElement(t) || new e(t)
					}, e.refreshAll = function() {
						for (var t in n) n[t].refresh()
					}, e.findByElement = function(t) {
						return n[t.waypointContextKey]
					}, window.onload = function() {
						r && r(), e.refreshAll()
					}, o.requestAnimationFrame = function(e) {
						(window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
					}, o.Context = e
				}(),
				function() {
					"use strict";

					function t(t, e) {
						return t.triggerPoint - e.triggerPoint
					}

					function e(t, e) {
						return e.triggerPoint - t.triggerPoint
					}

					function i(t) {
						this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
					}
					var n = {
							vertical: {},
							horizontal: {}
						},
						o = window.Waypoint;
					i.prototype.add = function(t) {
						this.waypoints.push(t)
					}, i.prototype.clearTriggerQueues = function() {
						this.triggerQueues = {
							up: [],
							down: [],
							left: [],
							right: []
						}
					}, i.prototype.flushTriggers = function() {
						for (var i in this.triggerQueues) {
							var n = this.triggerQueues[i],
								o = "up" === i || "left" === i;
							n.sort(o ? e : t);
							for (var r = 0, s = n.length; s > r; r += 1) {
								var a = n[r];
								(a.options.continuous || r === n.length - 1) && a.trigger([i])
							}
						}
						this.clearTriggerQueues()
					}, i.prototype.next = function(e) {
						this.waypoints.sort(t);
						var i = o.Adapter.inArray(e, this.waypoints);
						return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
					}, i.prototype.previous = function(e) {
						this.waypoints.sort(t);
						var i = o.Adapter.inArray(e, this.waypoints);
						return i ? this.waypoints[i - 1] : null
					}, i.prototype.queueTrigger = function(t, e) {
						this.triggerQueues[e].push(t)
					}, i.prototype.remove = function(t) {
						var e = o.Adapter.inArray(t, this.waypoints);
						e > -1 && this.waypoints.splice(e, 1)
					}, i.prototype.first = function() {
						return this.waypoints[0]
					}, i.prototype.last = function() {
						return this.waypoints[this.waypoints.length - 1]
					}, i.findOrCreate = function(t) {
						return n[t.axis][t.name] || new i(t)
					}, o.Group = i
				}(),
				function() {
					"use strict";

					function t(t) {
						this.$element = e(t)
					}
					var e = window.jQuery,
						i = window.Waypoint;
					e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], (function(e, i) {
						t.prototype[i] = function() {
							var t = Array.prototype.slice.call(arguments);
							return this.$element[i].apply(this.$element, t)
						}
					})), e.each(["extend", "inArray", "isEmptyObject"], (function(i, n) {
						t[n] = e[n]
					})), i.adapters.push({
						name: "jquery",
						Adapter: t
					}), i.Adapter = t
				}(),
				function() {
					"use strict";

					function t(t) {
						return function() {
							var i = [],
								n = arguments[0];
							return t.isFunction(arguments[0]) && ((n = t.extend({}, arguments[1])).handler = arguments[0]), this.each((function() {
								var o = t.extend({}, n, {
									element: this
								});
								"string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), i.push(new e(o))
							})), i
						}
					}
					var e = window.Waypoint;
					window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
				}()
			},
			430: function() {
				jQuery(document).ready((function(t) {
					"use strict";
					jQuery(".ekit-mailChimpForm").on("submit", (function(t) {
						t.preventDefault();
						var e = jQuery(this).serialize(),
							i = jQuery(this).attr("data-listed"),
							n = jQuery(this).attr("data-success-message"),
							o = jQuery(this).attr("data-success-opt-in-message"),
							r = jQuery(this).children(".ekit-mail-message");
						jQuery.ajax({
							data: e,
							type: "get",
							url: window.elementskit.resturl + "widget/mailchimp/sendmail/?listed=" + i,
							success: function(t) {
								if (r.show(), t.error.length > 0) r.removeClass("error").html("Found error : " + t.error).addClass("error");
								else {
									var e = JSON.parse(t.success.body);
									"subscribed" != e.status ? "pending" != e.status ? r.html(e.title) : r.removeClass("success").html(o).addClass("success") : r.removeClass("success").html(n).addClass("success")
								}
							}
						})
					}))
				}))
			},
			644: function(t, e, i) {
				var n, o, r, s, a, h, l, c, u, d, p, f, m, g, v, y, _, w, b, x;

				function S(t) {
					return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, S(t)
				}
				/*!
				 * Masonry PACKAGED v4.1.1
				 * Cascading grid layout library
				 * http://masonry.desandro.com
				 * MIT License
				 * by David DeSandro
				 */
				x = window, w = [i(311)], b = function(t) {
						return function(t, e) {
							"use strict";

							function i(i, r, a) {
								function h(t, e, n) {
									var o, r = "$()." + i + '("' + e + '")';
									return t.each((function(t, h) {
										var l = a.data(h, i);
										if (l) {
											var c = l[e];
											if (c && "_" != e.charAt(0)) {
												var u = c.apply(l, n);
												o = void 0 === o ? u : o
											} else s(r + " is not a valid method")
										} else s(i + " not initialized. Cannot call methods, i.e. " + r)
									})), void 0 !== o ? o : t
								}

								function l(t, e) {
									t.each((function(t, n) {
										var o = a.data(n, i);
										o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
									}))
								}(a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function(t) {
									a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
								}), a.fn[i] = function(t) {
									return "string" == typeof t ? h(this, t, o.call(arguments, 1)) : (l(this, t), this)
								}, n(a))
							}

							function n(t) {
								!t || t && t.bridget || (t.bridget = i)
							}
							var o = Array.prototype.slice,
								r = t.console,
								s = void 0 === r ? function() {} : function(t) {
									r.error(t)
								};
							return n(e || t.jQuery), i
						}(x, t)
					}.apply(e, w), b === undefined || (t.exports = b), "undefined" != typeof window && window, o = function() {
						function t() {}
						var e = t.prototype;
						return e.on = function(t, e) {
							if (t && e) {
								var i = this._events = this._events || {},
									n = i[t] = i[t] || [];
								return -1 == n.indexOf(e) && n.push(e), this
							}
						}, e.once = function(t, e) {
							if (t && e) {
								this.on(t, e);
								var i = this._onceEvents = this._onceEvents || {};
								return (i[t] = i[t] || {})[e] = !0, this
							}
						}, e.off = function(t, e) {
							var i = this._events && this._events[t];
							if (i && i.length) {
								var n = i.indexOf(e);
								return -1 != n && i.splice(n, 1), this
							}
						}, e.emitEvent = function(t, e) {
							var i = this._events && this._events[t];
							if (i && i.length) {
								var n = 0,
									o = i[n];
								e = e || [];
								for (var r = this._onceEvents && this._onceEvents[t]; o;) {
									var s = r && r[o];
									s && (this.off(t, o), delete r[o]), o.apply(this, e), o = i[n += s ? 0 : 1]
								}
								return this
							}
						}, t
					}, "function" == typeof o ? (r = {
						id: "ev-emitter/ev-emitter",
						exports: {},
						loaded: !1
					}, n = o.call(r.exports, i, r.exports, r), r.loaded = !0, n === undefined && (n = r.exports)) : n = o,
					function(t, e) {
						"use strict";
						s = function() {
							return function() {
								function t(t) {
									var e = parseFloat(t);
									return -1 == t.indexOf("%") && !isNaN(e) && e
								}

								function e() {}

								function i() {
									for (var t = {
											width: 0,
											height: 0,
											innerWidth: 0,
											innerHeight: 0,
											outerWidth: 0,
											outerHeight: 0
										}, e = 0; l > e; e++) {
										t[h[e]] = 0
									}
									return t
								}

								function n(t) {
									var e = getComputedStyle(t);
									return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
								}

								function o() {
									if (!c) {
										c = !0;
										var e = document.createElement("div");
										e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
										var i = document.body || document.documentElement;
										i.appendChild(e);
										var o = n(e);
										r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
									}
								}

								function r(e) {
									if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == S(e) && e.nodeType) {
										var r = n(e);
										if ("none" == r.display) return i();
										var a = {};
										a.width = e.offsetWidth, a.height = e.offsetHeight;
										for (var c = a.isBorderBox = "border-box" == r.boxSizing, u = 0; l > u; u++) {
											var d = h[u],
												p = r[d],
												f = parseFloat(p);
											a[d] = isNaN(f) ? 0 : f
										}
										var m = a.paddingLeft + a.paddingRight,
											g = a.paddingTop + a.paddingBottom,
											v = a.marginLeft + a.marginRight,
											y = a.marginTop + a.marginBottom,
											_ = a.borderLeftWidth + a.borderRightWidth,
											w = a.borderTopWidth + a.borderBottomWidth,
											b = c && s,
											x = t(r.width);
										!1 !== x && (a.width = x + (b ? 0 : m + _));
										var E = t(r.height);
										return !1 !== E && (a.height = E + (b ? 0 : g + w)), a.innerWidth = a.width - (m + _), a.innerHeight = a.height - (g + w), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
									}
								}
								var s, a = "undefined" == typeof console ? e : function(t) {
										console.error(t)
									},
									h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
									l = h.length,
									c = !1;
								return r
							}()
						}.apply(a = {}, w = []), s !== undefined || (s = a)
					}(window),
					function(t, e) {
						"use strict";
						l = function() {
							var t = function() {
								var t = Element.prototype;
								if (t.matches) return "matches";
								if (t.matchesSelector) return "matchesSelector";
								for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
									var n = e[i] + "MatchesSelector";
									if (t[n]) return n
								}
							}();
							return function(e, i) {
								return e[t](i)
							}
						}, "function" == typeof l ? (c = {
							id: "desandro-matches-selector/matches-selector",
							exports: {},
							loaded: !1
						}, h = l.call(c.exports, i, c.exports, c), c.loaded = !0, h === undefined && (h = c.exports)) : h = l
					}(window),
					function(t, e) {
						u = function(e) {
							return function(t, e) {
								var i = {
									extend: function(t, e) {
										for (var i in e) t[i] = e[i];
										return t
									},
									modulo: function(t, e) {
										return (t % e + e) % e
									},
									makeArray: function(t) {
										var e = [];
										if (Array.isArray(t)) e = t;
										else if (t && "number" == typeof t.length)
											for (var i = 0; i < t.length; i++) e.push(t[i]);
										else e.push(t);
										return e
									},
									removeFrom: function(t, e) {
										var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
									}
								};
								i.getParent = function(t, i) {
									for (; t != document.body;)
										if (t = t.parentNode, e(t, i)) return t
								}, i.getQueryElement = function(t) {
									return "string" == typeof t ? document.querySelector(t) : t
								}, i.handleEvent = function(t) {
									var e = "on" + t.type;
									this[e] && this[e](t)
								}, i.filterFindElements = function(t, n) {
									t = i.makeArray(t);
									var o = [];
									return t.forEach((function(t) {
										if (t instanceof HTMLElement) {
											if (!n) return void o.push(t);
											e(t, n) && o.push(t);
											for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
										}
									})), o
								}, i.debounceMethod = function(t, e, i) {
									var n = t.prototype[e],
										o = e + "Timeout";
									t.prototype[e] = function() {
										var t = this[o];
										t && clearTimeout(t);
										var e = arguments,
											r = this;
										this[o] = setTimeout((function() {
											n.apply(r, e), delete r[o]
										}), i || 100)
									}
								}, i.docReady = function(t) {
									var e = document.readyState;
									"complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
								}, i.toDashed = function(t) {
									return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
										return e + "-" + i
									})).toLowerCase()
								};
								var n = t.console;
								return i.htmlInit = function(e, o) {
									i.docReady((function() {
										var r = i.toDashed(o),
											s = "data-" + r,
											a = document.querySelectorAll("[" + s + "]"),
											h = document.querySelectorAll(".js-" + r),
											l = i.makeArray(a).concat(i.makeArray(h)),
											c = s + "-options",
											u = t.jQuery;
										l.forEach((function(t) {
											var i, r = t.getAttribute(s) || t.getAttribute(c);
											try {
												i = r && JSON.parse(r)
											} catch (a) {
												return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
											}
											var h = new e(t, i);
											u && u.data(t, o, h)
										}))
									}))
								}, i
							}(t, e)
						}.apply(d = {}, w = [h]), u !== undefined || (u = d)
					}(window), window, p = [n, s], f = function(t, e) {
						"use strict";

						function i(t) {
							for (var e in t) return !1;
							return !0
						}

						function n(t, e) {
							t && (this.element = t, this.layout = e, this.position = {
								x: 0,
								y: 0
							}, this._create())
						}

						function o(t) {
							return t.replace(/([A-Z])/g, (function(t) {
								return "-" + t.toLowerCase()
							}))
						}
						var r = document.documentElement.style,
							s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
							a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
							h = {
								WebkitTransition: "webkitTransitionEnd",
								transition: "transitionend"
							} [s],
							l = {
								transform: a,
								transition: s,
								transitionDuration: s + "Duration",
								transitionProperty: s + "Property",
								transitionDelay: s + "Delay"
							},
							c = n.prototype = Object.create(t.prototype);
						c.constructor = n, c._create = function() {
							this._transn = {
								ingProperties: {},
								clean: {},
								onEnd: {}
							}, this.css({
								position: "absolute"
							})
						}, c.handleEvent = function(t) {
							var e = "on" + t.type;
							this[e] && this[e](t)
						}, c.getSize = function() {
							this.size = e(this.element)
						}, c.css = function(t) {
							var e = this.element.style;
							for (var i in t) e[l[i] || i] = t[i]
						}, c.getPosition = function() {
							var t = getComputedStyle(this.element),
								e = this.layout._getOption("originLeft"),
								i = this.layout._getOption("originTop"),
								n = t[e ? "left" : "right"],
								o = t[i ? "top" : "bottom"],
								r = this.layout.size,
								s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
								a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
							s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
						}, c.layoutPosition = function() {
							var t = this.layout.size,
								e = {},
								i = this.layout._getOption("originLeft"),
								n = this.layout._getOption("originTop"),
								o = i ? "paddingLeft" : "paddingRight",
								r = i ? "left" : "right",
								s = i ? "right" : "left",
								a = this.position.x + t[o];
							e[r] = this.getXValue(a), e[s] = "";
							var h = n ? "paddingTop" : "paddingBottom",
								l = n ? "top" : "bottom",
								c = n ? "bottom" : "top",
								u = this.position.y + t[h];
							e[l] = this.getYValue(u), e[c] = "", this.css(e), this.emitEvent("layout", [this])
						}, c.getXValue = function(t) {
							var e = this.layout._getOption("horizontal");
							return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
						}, c.getYValue = function(t) {
							var e = this.layout._getOption("horizontal");
							return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
						}, c._transitionTo = function(t, e) {
							this.getPosition();
							var i = this.position.x,
								n = this.position.y,
								o = parseInt(t, 10),
								r = parseInt(e, 10),
								s = o === this.position.x && r === this.position.y;
							if (this.setPosition(t, e), !s || this.isTransitioning) {
								var a = t - i,
									h = e - n,
									l = {};
								l.transform = this.getTranslate(a, h), this.transition({
									to: l,
									onTransitionEnd: {
										transform: this.layoutPosition
									},
									isCleaning: !0
								})
							} else this.layoutPosition()
						}, c.getTranslate = function(t, e) {
							return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
						}, c.goTo = function(t, e) {
							this.setPosition(t, e), this.layoutPosition()
						}, c.moveTo = c._transitionTo, c.setPosition = function(t, e) {
							this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
						}, c._nonTransition = function(t) {
							for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
						}, c.transition = function(t) {
							if (parseFloat(this.layout.options.transitionDuration)) {
								var e = this._transn;
								for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
								for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
								t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
							} else this._nonTransition(t)
						};
						var u = "opacity," + o(a);
						c.enableTransition = function() {
							if (!this.isTransitioning) {
								var t = this.layout.options.transitionDuration;
								t = "number" == typeof t ? t + "ms" : t, this.css({
									transitionProperty: u,
									transitionDuration: t,
									transitionDelay: this.staggerDelay || 0
								}), this.element.addEventListener(h, this, !1)
							}
						}, c.onwebkitTransitionEnd = function(t) {
							this.ontransitionend(t)
						}, c.onotransitionend = function(t) {
							this.ontransitionend(t)
						};
						var d = {
							"-webkit-transform": "transform"
						};
						c.ontransitionend = function(t) {
							if (t.target === this.element) {
								var e = this._transn,
									n = d[t.propertyName] || t.propertyName;
								delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd && (e.onEnd[n].call(this), delete e.onEnd[n]), this.emitEvent("transitionEnd", [this])
							}
						}, c.disableTransition = function() {
							this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
						}, c._removeStyles = function(t) {
							var e = {};
							for (var i in t) e[i] = "";
							this.css(e)
						};
						var p = {
							transitionProperty: "",
							transitionDuration: "",
							transitionDelay: ""
						};
						return c.removeTransitionStyles = function() {
							this.css(p)
						}, c.stagger = function(t) {
							t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
						}, c.removeElem = function() {
							this.element.parentNode.removeChild(this.element), this.css({
								display: ""
							}), this.emitEvent("remove", [this])
						}, c.remove = function() {
							return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
								this.removeElem()
							})), void this.hide()) : void this.removeElem()
						}, c.reveal = function() {
							delete this.isHidden, this.css({
								display: ""
							});
							var t = this.layout.options,
								e = {};
							e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
								from: t.hiddenStyle,
								to: t.visibleStyle,
								isCleaning: !0,
								onTransitionEnd: e
							})
						}, c.onRevealTransitionEnd = function() {
							this.isHidden || this.emitEvent("reveal")
						}, c.getHideRevealTransitionEndProperty = function(t) {
							var e = this.layout.options[t];
							if (e.opacity) return "opacity";
							for (var i in e) return i
						}, c.hide = function() {
							this.isHidden = !0, this.css({
								display: ""
							});
							var t = this.layout.options,
								e = {};
							e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
								from: t.visibleStyle,
								to: t.hiddenStyle,
								isCleaning: !0,
								onTransitionEnd: e
							})
						}, c.onHideTransitionEnd = function() {
							this.isHidden && (this.css({
								display: "none"
							}), this.emitEvent("hide"))
						}, c.destroy = function() {
							this.css({
								position: "",
								left: "",
								right: "",
								top: "",
								bottom: "",
								transition: "",
								transform: ""
							})
						}, n
					}, "function" == typeof f ? (g = f.apply(m = {}, p)) === undefined && (g = m) : g = f,
					function(t, e) {
						"use strict";
						v = function(e, i, n, o) {
							return function(t, e, i, n, o) {
								function r(t, e) {
									var i = n.getQueryElement(t);
									if (i) {
										this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
										var o = ++u;
										this.element.outlayerGUID = o, d[o] = this, this._create(), this._getOption("initLayout") && this.layout()
									} else h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
								}

								function s(t) {
									function e() {
										t.apply(this, arguments)
									}
									return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
								}

								function a(t) {
									if ("number" == typeof t) return t;
									var e = t.match(/(^\d*\.?\d*)(\w*)/),
										i = e && e[1],
										n = e && e[2];
									return i.length ? (i = parseFloat(i)) * (f[n] || 1) : 0
								}
								var h = t.console,
									l = t.jQuery,
									c = function() {},
									u = 0,
									d = {};
								r.namespace = "outlayer", r.Item = o, r.defaults = {
									containerStyle: {
										position: "relative"
									},
									initLayout: !0,
									originLeft: !0,
									originTop: !0,
									resize: !0,
									resizeContainer: !0,
									transitionDuration: "0.4s",
									hiddenStyle: {
										opacity: 0,
										transform: "scale(0.001)"
									},
									visibleStyle: {
										opacity: 1,
										transform: "scale(1)"
									}
								};
								var p = r.prototype;
								n.extend(p, e.prototype), p.option = function(t) {
									n.extend(this.options, t)
								}, p._getOption = function(t) {
									var e = this.constructor.compatOptions[t];
									return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
								}, r.compatOptions = {
									initLayout: "isInitLayout",
									horizontal: "isHorizontal",
									layoutInstant: "isLayoutInstant",
									originLeft: "isOriginLeft",
									originTop: "isOriginTop",
									resize: "isResizeBound",
									resizeContainer: "isResizingContainer"
								}, p._create = function() {
									this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
								}, p.reloadItems = function() {
									this.items = this._itemize(this.element.children)
								}, p._itemize = function(t) {
									for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
										var r = new i(e[o], this);
										n.push(r)
									}
									return n
								}, p._filterFindItemElements = function(t) {
									return n.filterFindElements(t, this.options.itemSelector)
								}, p.getItemElements = function() {
									return this.items.map((function(t) {
										return t.element
									}))
								}, p.layout = function() {
									this._resetLayout(), this._manageStamps();
									var t = this._getOption("layoutInstant"),
										e = void 0 !== t ? t : !this._isLayoutInited;
									this.layoutItems(this.items, e), this._isLayoutInited = !0
								}, p._init = p.layout, p._resetLayout = function() {
									this.getSize()
								}, p.getSize = function() {
									this.size = i(this.element)
								}, p._getMeasurement = function(t, e) {
									var n, o = this.options[t];
									o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
								}, p.layoutItems = function(t, e) {
									t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
								}, p._getItemsForLayout = function(t) {
									return t.filter((function(t) {
										return !t.isIgnored
									}))
								}, p._layoutItems = function(t, e) {
									if (this._emitCompleteOnItems("layout", t), t && t.length) {
										var i = [];
										t.forEach((function(t) {
											var n = this._getItemLayoutPosition(t);
											n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
										}), this), this._processLayoutQueue(i)
									}
								}, p._getItemLayoutPosition = function() {
									return {
										x: 0,
										y: 0
									}
								}, p._processLayoutQueue = function(t) {
									this.updateStagger(), t.forEach((function(t, e) {
										this._positionItem(t.item, t.x, t.y, t.isInstant, e)
									}), this)
								}, p.updateStagger = function() {
									var t = this.options.stagger;
									return null == t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
								}, p._positionItem = function(t, e, i, n, o) {
									n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
								}, p._postLayout = function() {
									this.resizeContainer()
								}, p.resizeContainer = function() {
									if (this._getOption("resizeContainer")) {
										var t = this._getContainerSize();
										t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
									}
								}, p._getContainerSize = c, p._setContainerMeasure = function(t, e) {
									if (void 0 !== t) {
										var i = this.size;
										i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
									}
								}, p._emitCompleteOnItems = function(t, e) {
									function i() {
										o.dispatchEvent(t + "Complete", null, [e])
									}

									function n() {
										++s == r && i()
									}
									var o = this,
										r = e.length;
									if (e && r) {
										var s = 0;
										e.forEach((function(e) {
											e.once(t, n)
										}))
									} else i()
								}, p.dispatchEvent = function(t, e, i) {
									var n = e ? [e].concat(i) : i;
									if (this.emitEvent(t, n), l)
										if (this.$element = this.$element || l(this.element), e) {
											var o = l.Event(e);
											o.type = t, this.$element.trigger(o, i)
										} else this.$element.trigger(t, i)
								}, p.ignore = function(t) {
									var e = this.getItem(t);
									e && (e.isIgnored = !0)
								}, p.unignore = function(t) {
									var e = this.getItem(t);
									e && delete e.isIgnored
								}, p.stamp = function(t) {
									(t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
								}, p.unstamp = function(t) {
									(t = this._find(t)) && t.forEach((function(t) {
										n.removeFrom(this.stamps, t), this.unignore(t)
									}), this)
								}, p._find = function(t) {
									return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
								}, p._manageStamps = function() {
									this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
								}, p._getBoundingRect = function() {
									var t = this.element.getBoundingClientRect(),
										e = this.size;
									this._boundingRect = {
										left: t.left + e.paddingLeft + e.borderLeftWidth,
										top: t.top + e.paddingTop + e.borderTopWidth,
										right: t.right - (e.paddingRight + e.borderRightWidth),
										bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
									}
								}, p._manageStamp = c, p._getElementOffset = function(t) {
									var e = t.getBoundingClientRect(),
										n = this._boundingRect,
										o = i(t);
									return {
										left: e.left - n.left - o.marginLeft,
										top: e.top - n.top - o.marginTop,
										right: n.right - e.right - o.marginRight,
										bottom: n.bottom - e.bottom - o.marginBottom
									}
								}, p.handleEvent = n.handleEvent, p.bindResize = function() {
									t.addEventListener("resize", this), this.isResizeBound = !0
								}, p.unbindResize = function() {
									t.removeEventListener("resize", this), this.isResizeBound = !1
								}, p.onresize = function() {
									this.resize()
								}, n.debounceMethod(r, "onresize", 100), p.resize = function() {
									this.isResizeBound && this.needsResizeLayout() && this.layout()
								}, p.needsResizeLayout = function() {
									var t = i(this.element);
									return this.size && t && t.innerWidth !== this.size.innerWidth
								}, p.addItems = function(t) {
									var e = this._itemize(t);
									return e.length && (this.items = this.items.concat(e)), e
								}, p.appended = function(t) {
									var e = this.addItems(t);
									e.length && (this.layoutItems(e, !0), this.reveal(e))
								}, p.prepended = function(t) {
									var e = this._itemize(t);
									if (e.length) {
										var i = this.items.slice(0);
										this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
									}
								}, p.reveal = function(t) {
									if (this._emitCompleteOnItems("reveal", t), t && t.length) {
										var e = this.updateStagger();
										t.forEach((function(t, i) {
											t.stagger(i * e), t.reveal()
										}))
									}
								}, p.hide = function(t) {
									if (this._emitCompleteOnItems("hide", t), t && t.length) {
										var e = this.updateStagger();
										t.forEach((function(t, i) {
											t.stagger(i * e), t.hide()
										}))
									}
								}, p.revealItemElements = function(t) {
									var e = this.getItems(t);
									this.reveal(e)
								}, p.hideItemElements = function(t) {
									var e = this.getItems(t);
									this.hide(e)
								}, p.getItem = function(t) {
									for (var e = 0; e < this.items.length; e++) {
										var i = this.items[e];
										if (i.element == t) return i
									}
								}, p.getItems = function(t) {
									t = n.makeArray(t);
									var e = [];
									return t.forEach((function(t) {
										var i = this.getItem(t);
										i && e.push(i)
									}), this), e
								}, p.remove = function(t) {
									var e = this.getItems(t);
									this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function(t) {
										t.remove(), n.removeFrom(this.items, t)
									}), this)
								}, p.destroy = function() {
									var t = this.element.style;
									t.height = "", t.position = "", t.width = "", this.items.forEach((function(t) {
										t.destroy()
									})), this.unbindResize();
									var e = this.element.outlayerGUID;
									delete d[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
								}, r.data = function(t) {
									var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
									return e && d[e]
								}, r.create = function(t, e) {
									var i = s(r);
									return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
								};
								var f = {
									ms: 1,
									s: 1e3
								};
								return r.Item = o, r
							}(t, e, i, n, o)
						}.apply(y = {}, w = [n, s, u, g]), v !== undefined || (v = y)
					}(window), window, w = [v, s], _ = function(t, e) {
						var i = t.create("masonry");
						return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
							this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
							for (var t = 0; t < this.cols; t++) this.colYs.push(0);
							this.maxY = 0
						}, i.prototype.measureColumns = function() {
							if (this.getContainerWidth(), !this.columnWidth) {
								var t = this.items[0],
									i = t && t.element;
								this.columnWidth = i && e(i).outerWidth || this.containerWidth
							}
							var n = this.columnWidth += this.gutter,
								o = this.containerWidth + this.gutter,
								r = o / n,
								s = n - o % n;
							r = Math[s && 1 > s ? "round" : "floor"](r), this.cols = Math.max(r, 1)
						}, i.prototype.getContainerWidth = function() {
							var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
								i = e(t);
							this.containerWidth = i && i.innerWidth
						}, i.prototype._getItemLayoutPosition = function(t) {
							t.getSize();
							var e = t.size.outerWidth % this.columnWidth,
								i = Math[e && 1 > e ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
							i = Math.min(i, this.cols);
							for (var n = this._getColGroup(i), o = Math.min.apply(Math, n), r = n.indexOf(o), s = {
									x: this.columnWidth * r,
									y: o
								}, a = o + t.size.outerHeight, h = this.cols + 1 - n.length, l = 0; h > l; l++) this.colYs[r + l] = a;
							return s
						}, i.prototype._getColGroup = function(t) {
							if (2 > t) return this.colYs;
							for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
								var o = this.colYs.slice(n, n + t);
								e[n] = Math.max.apply(Math, o)
							}
							return e
						}, i.prototype._manageStamp = function(t) {
							var i = e(t),
								n = this._getElementOffset(t),
								o = this._getOption("originLeft") ? n.left : n.right,
								r = o + i.outerWidth,
								s = Math.floor(o / this.columnWidth);
							s = Math.max(0, s);
							var a = Math.floor(r / this.columnWidth);
							a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
							for (var h = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, l = s; a >= l; l++) this.colYs[l] = Math.max(h, this.colYs[l])
						}, i.prototype._getContainerSize = function() {
							this.maxY = Math.max.apply(Math, this.colYs);
							var t = {
								height: this.maxY
							};
							return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
						}, i.prototype._getContainerFitWidth = function() {
							for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
							return (this.cols - t) * this.columnWidth - this.gutter
						}, i.prototype.needsResizeLayout = function() {
							var t = this.containerWidth;
							return this.getContainerWidth(), t != this.containerWidth
						}, i
					}, (b = "function" == typeof _ ? _.apply(e, w) : _) === undefined || (t.exports = b)
			},
			989: function() {
				! function(t) {
					"use strict";
					t((function() {
						var e;

						function i(e, i, n) {
							t(document).on(e, i, n)
						}
						e = t(".elementskit-menu-container"), t(e).each((function() {
							var e = t(this);
							"yes" != e.attr("ekit-dom-added") && (0 === e.parents(".elementor-widget-ekit-nav-menu").length && e.parents(".ekit-wid-con").addClass("ekit_menu_responsive_tablet"), e.attr("ekit-dom-added", "yes"))
						})), i("click", ".elementskit-dropdown-has > a", (function(e) {
							var i = t(this).parents(".elementskit-navbar-nav, .ekit-vertical-navbar-nav"),
								n = t(this).parents(".ekit-wid-con").data("responsive-breakpoint");
							if ((!i.hasClass("submenu-click-on-icon") || t(e.target).hasClass("elementskit-submenu-indicator")) && (!(t(document).width() > Number(n) && i.hasClass("submenu-click-on-")) || t(e.target).hasClass("elementskit-submenu-indicator"))) {
								e.preventDefault();
								var o = t(this).parent().find(">.elementskit-dropdown, >.elementskit-megamenu-panel");
								o.find(".elementskit-dropdown-open").removeClass("elementskit-dropdown-open"), o.hasClass("elementskit-dropdown-open") ? o.removeClass("elementskit-dropdown-open") : o.addClass("elementskit-dropdown-open")
							}
						})), i("click", ".elementskit-menu-toggler", (function(e) {
							e.preventDefault();
							var i = t(this).parents(".elementskit-menu-container").parent();
							i.length < 1 && (i = t(this).parent());
							var n = i.find(".elementskit-menu-offcanvas-elements");
							n.hasClass("active") ? n.removeClass("active") : n.addClass("active")
						})), t(".elementskit-navbar-nav li a").on("click", (function(e) {
							if (t(this).attr("href") && "elementskit-submenu-indicator" !== e.target.className) {
								var i = t(this),
									n = i.get(0),
									o = n.href,
									r = o.indexOf("#"),
									s = i.parents(".elementskit-menu-container").hasClass("ekit-nav-menu-one-page-yes"); - 1 !== r && o.length > 1 && s && n.pathname == window.location.pathname && (e.preventDefault(), i.parents(".ekit-wid-con").find(".elementskit-menu-close").trigger("click"))
							}
						}))
					}))
				}(jQuery)
			},
			457: function() {
				! function(t) {
					function e(t) {
						var e = "";
						"lowerLetter" == t ? e = "abcdefghijklmnopqrstuvwxyz0123456789" : "upperLetter" == t ? e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" : "symbol" == t && (e = ",.?/\\(^)![]{}*&^%$#'\"");
						var i = e.split("");
						return i[Math.floor(Math.random() * i.length)]
					}
					t.fn.shuffleLetters = function(i) {
						var n = t.extend({
							step: 8,
							fps: 25,
							text: "",
							callback: function() {}
						}, i);
						return this.each((function() {
							var i = t(this),
								o = "";
							if (i.data("animated")) return !0;
							i.data("animated", !0), o = n.text ? n.text.split("") : i.text().split("");
							for (var r = [], s = [], a = 0; a < o.length; a++) {
								var h = o[a];
								" " != h ? (/[a-z]/.test(h) ? r[a] = "lowerLetter" : /[A-Z]/.test(h) ? r[a] = "upperLetter" : r[a] = "symbol", s.push(a)) : r[a] = "space"
							}
							i.html(""),
								function l(t) {
									var a, h = s.length,
										c = o.slice(0);
									if (t > h) return i.data("animated", !1), void n.callback(i);
									for (a = Math.max(t, 0); a < h; a++) a < t + n.step ? c[s[a]] = e(r[s[a]]) : c[s[a]] = "";
									i.text(c.join("")), setTimeout((function() {
										l(t + 1)
									}), 1e3 / n.fps)
								}(-n.step)
						}))
					}
				}(jQuery)
			},
			285: function(t, e, i) {
				"use strict";
				var n, o, r;

				function s(t) {
					return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, s(t)
				}
				"function" == typeof Symbol && s(Symbol.iterator);
				o = [i(311)], n = function(t) {
					return t.fn.tilt = function(e) {
						var i = function() {
								this.ticking || (requestAnimationFrame(c.bind(this)), this.ticking = !0)
							},
							n = function() {
								var e = this;
								t(this).on("mousemove", a), t(this).on("mouseenter", r), this.settings.reset && t(this).on("mouseleave", h), this.settings.glare && t(window).on("resize", d.bind(e))
							},
							o = function() {
								var e = this;
								void 0 !== this.timeout && clearTimeout(this.timeout), t(this).css({
									transition: this.settings.speed + "ms " + this.settings.easing
								}), this.settings.glare && this.glareElement.css({
									transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
								}), this.timeout = setTimeout((function() {
									t(e).css({
										transition: ""
									}), e.settings.glare && e.glareElement.css({
										transition: ""
									})
								}), this.settings.speed)
							},
							r = function(e) {
								this.ticking = !1, t(this).css({
									"will-change": "transform"
								}), o.call(this), t(this).trigger("tilt.mouseEnter")
							},
							s = function(e) {
								return void 0 === e && (e = {
									pageX: t(this).offset().left + t(this).outerWidth() / 2,
									pageY: t(this).offset().top + t(this).outerHeight() / 2
								}), {
									x: e.pageX,
									y: e.pageY
								}
							},
							a = function(t) {
								this.mousePositions = s(t), i.call(this)
							},
							h = function() {
								o.call(this), this.reset = !0, i.call(this), t(this).trigger("tilt.mouseLeave")
							},
							l = function() {
								var e = t(this).outerWidth(),
									i = t(this).outerHeight(),
									n = t(this).offset().left,
									o = t(this).offset().top,
									r = (this.mousePositions.x - n) / e,
									s = (this.mousePositions.y - o) / i,
									a = (this.settings.maxTilt / 2 - r * this.settings.maxTilt).toFixed(2),
									h = (s * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
									l = Math.atan2(this.mousePositions.x - (n + e / 2), -(this.mousePositions.y - (o + i / 2))) * (180 / Math.PI);
								return {
									tiltX: a,
									tiltY: h,
									percentageX: 100 * r,
									percentageY: 100 * s,
									angle: l
								}
							},
							c = function() {
								return this.transforms = l.call(this), this.reset ? (this.reset = !1, t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"), void(this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "0")))) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"), this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)), t(this).trigger("change", [this.transforms]), void(this.ticking = !1))
							},
							u = function() {
								var e = this.settings.glarePrerender;
								if (e || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'), this.glareElementWrapper = t(this).find(".js-tilt-glare"), this.glareElement = t(this).find(".js-tilt-glare-inner"), !e) {
									var i = {
										position: "absolute",
										top: "0",
										left: "0",
										width: "100%",
										height: "100%"
									};
									this.glareElementWrapper.css(i).css({
										overflow: "hidden",
										"pointer-events": "none"
									}), this.glareElement.css({
										position: "absolute",
										top: "50%",
										left: "50%",
										"background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
										width: "" + 2 * t(this).outerWidth(),
										height: "" + 2 * t(this).outerWidth(),
										transform: "rotate(180deg) translate(-50%, -50%)",
										"transform-origin": "0% 0%",
										opacity: "0"
									})
								}
							},
							d = function() {
								this.glareElement.css({
									width: "" + 2 * t(this).outerWidth(),
									height: "" + 2 * t(this).outerWidth()
								})
							};
						return t.fn.tilt.destroy = function() {
							t(this).each((function() {
								t(this).find(".js-tilt-glare").remove(), t(this).css({
									"will-change": "",
									transform: ""
								}), t(this).off("mousemove mouseenter mouseleave")
							}))
						}, t.fn.tilt.getValues = function() {
							var e = [];
							return t(this).each((function() {
								this.mousePositions = s.call(this), e.push(l.call(this))
							})), e
						}, t.fn.tilt.reset = function() {
							t(this).each((function() {
								var e = this;
								this.mousePositions = s.call(this), this.settings = t(this).data("settings"), h.call(this), setTimeout((function() {
									e.reset = !1
								}), this.settings.transition)
							}))
						}, this.each((function() {
							var i = this;
							this.settings = t.extend({
								maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
								perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300,
								easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
								scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
								speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
								transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
								disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
								axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
								reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
								glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
								maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1
							}, e), null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"), this.settings.disableAxis = this.settings.axis), this.init = function() {
								t(i).data("settings", i.settings), i.settings.glare && u.call(i), n.call(i)
							}, this.init()
						}))
					}, t("[data-tilt]").tilt(), !0
				}, (r = "function" == typeof n ? n.apply(e, o) : n) === undefined || (t.exports = r)
			},
			112: function(t, e, i) {
				var n, o, r, s;

				function a(t) {
					return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, a(t)
				}
				s = function(t, e, i) {
					"use strict";

					function n(t, e) {
						for (var i = 0; i < e.length; i++) {
							var n = e[i];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
						}
					}

					function o(t, e, i) {
						return e && n(t.prototype, e), i && n(t, i), t
					}

					function r() {
						return (r = Object.assign || function(t) {
							for (var e = 1; e < arguments.length; e++) {
								var i = arguments[e];
								for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
							}
							return t
						}).apply(this, arguments)
					}
					e = e && e.hasOwnProperty("default") ? e["default"] : e, i = i && i.hasOwnProperty("default") ? i["default"] : i;
					var s = function(t) {
							var e = !1,
								i = {
									TRANSITION_END: "bsTransitionEnd",
									getUID: function(t) {
										do {
											t += ~~(1e6 * Math.random())
										} while (document.getElementById(t));
										return t
									},
									getSelectorFromElement: function(e) {
										var i = e.getAttribute("data-target");
										i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (i = function(e) {
											return "function" == typeof t.escapeSelector ? t.escapeSelector(e).substr(1) : e.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")
										}(i));
										try {
											return t(document).find(i).length > 0 ? i : null
										} catch (t) {
											return null
										}
									},
									reflow: function(t) {
										return t.offsetHeight
									},
									triggerTransitionEnd: function(i) {
										t(i).trigger(e.end)
									},
									supportsTransitionEnd: function() {
										return Boolean(e)
									},
									isElement: function(t) {
										return (t[0] || t).nodeType
									},
									typeCheckConfig: function(t, e, n) {
										for (var o in n)
											if (Object.prototype.hasOwnProperty.call(n, o)) {
												var r = n[o],
													s = e[o],
													a = s && i.isElement(s) ? "element" : (h = s, {}.toString.call(h).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
												if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + r + '".')
											} var h
									}
								};
							return e = ("undefined" == typeof window || !window.QUnit) && {
								end: "transitionend"
							}, t.fn.emulateTransitionEnd = function(e) {
								var n = this,
									o = !1;
								return t(this).one(i.TRANSITION_END, (function() {
									o = !0
								})), setTimeout((function() {
									o || i.triggerTransitionEnd(n)
								}), e), this
							}, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
								bindType: e.end,
								delegateType: e.end,
								handle: function(e) {
									if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
								}
							}), i
						}(e),
						h = function(t) {
							var e = "collapse",
								i = "bs.collapse",
								n = t.fn[e],
								h = {
									toggle: !0,
									parent: ""
								},
								l = {
									toggle: "boolean",
									parent: "(string|element)"
								},
								c = "show.bs.collapse",
								u = "shown.bs.collapse",
								d = "hide.bs.collapse",
								p = "hidden.bs.collapse",
								f = "click.bs.collapse.data-api",
								m = "show",
								g = "collapse",
								v = "collapsing",
								y = "collapsed",
								_ = "width",
								w = ".show, .collapsing",
								b = '[data-ekit-toggle="collapse"]',
								x = function() {
									function n(e, i) {
										this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-ekit-toggle="collapse"][href="#' + e.id + '"],[data-ekit-toggle="collapse"][data-target="#' + e.id + '"]'));
										for (var n = t(b), o = 0; o < n.length; o++) {
											var r = n[o],
												a = s.getSelectorFromElement(r);
											null !== a && t(a).filter(e).length > 0 && (this._selector = a, this._triggerArray.push(r))
										}
										this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
									}
									var f = n.prototype;
									return f.toggle = function() {
										t(this._element).hasClass(m) ? this.hide() : this.show()
									}, f.show = function() {
										var e, o, r = this;
										if (!(this._isTransitioning || t(this._element).hasClass(m) || (this._parent && 0 === (e = t.makeArray(t(this._parent).find(w).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (o = t(e).not(this._selector).data(i)) && o._isTransitioning))) {
											var a = t.Event(c);
											if (t(this._element).trigger(a), !a.isDefaultPrevented()) {
												e && (n._jQueryInterface.call(t(e).not(this._selector), "hide"), o || t(e).data(i, null));
												var h = this._getDimension();
												t(this._element).removeClass(g).addClass(v), this._element.style[h] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(y).attr("aria-expanded", !0), this.setTransitioning(!0);
												var l = function() {
													t(r._element).removeClass(v).addClass(g).addClass(m), r._element.style[h] = "", r.setTransitioning(!1), t(r._element).trigger(u)
												};
												if (s.supportsTransitionEnd()) {
													var d = "scroll" + (h[0].toUpperCase() + h.slice(1));
													t(this._element).one(s.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[h] = this._element[d] + "px"
												} else l()
											}
										}
									}, f.hide = function() {
										var e = this;
										if (!this._isTransitioning && t(this._element).hasClass(m)) {
											var i = t.Event(d);
											if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
												var n = this._getDimension();
												if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", s.reflow(this._element), t(this._element).addClass(v).removeClass(g).removeClass(m), this._triggerArray.length > 0)
													for (var o = 0; o < this._triggerArray.length; o++) {
														var r = this._triggerArray[o],
															a = s.getSelectorFromElement(r);
														null !== a && (t(a).hasClass(m) || t(r).addClass(y).attr("aria-expanded", !1))
													}
												this.setTransitioning(!0);
												var h = function() {
													e.setTransitioning(!1), t(e._element).removeClass(v).addClass(g).trigger(p)
												};
												this._element.style[n] = "", s.supportsTransitionEnd() ? t(this._element).one(s.TRANSITION_END, h).emulateTransitionEnd(600) : h()
											}
										}
									}, f.setTransitioning = function(t) {
										this._isTransitioning = t
									}, f.dispose = function() {
										t.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
									}, f._getConfig = function(t) {
										return (t = r({}, h, t)).toggle = Boolean(t.toggle), s.typeCheckConfig(e, t, l), t
									}, f._getDimension = function() {
										return t(this._element).hasClass(_) ? _ : "height"
									}, f._getParent = function() {
										var e = this,
											i = null;
										s.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = t(this._config.parent)[0];
										var o = '[data-ekit-toggle="collapse"][data-parent="' + this._config.parent + '"]';
										return t(i).find(o).each((function(t, i) {
											e._addAriaAndCollapsedClass(n._getTargetFromElement(i), [i])
										})), i
									}, f._addAriaAndCollapsedClass = function(e, i) {
										if (e) {
											var n = t(e).hasClass(m);
											i.length > 0 && t(i).toggleClass(y, !n).attr("aria-expanded", n)
										}
									}, n._getTargetFromElement = function(e) {
										var i = s.getSelectorFromElement(e);
										return i ? t(i)[0] : null
									}, n._jQueryInterface = function(e) {
										return this.each((function() {
											var o = t(this),
												s = o.data(i),
												l = r({}, h, o.data(), "object" == a(e) && e);
											if (!s && l.toggle && /show|hide/.test(e) && (l.toggle = !1), s || (s = new n(this, l), o.data(i, s)), "string" == typeof e) {
												if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
												s[e]()
											}
										}))
									}, o(n, null, [{
										key: "VERSION",
										get: function() {
											return "4.0.0"
										}
									}, {
										key: "Default",
										get: function() {
											return h
										}
									}]), n
								}();
							return t(document).on(f, b, (function(e) {
								"A" === e.currentTarget.tagName && e.preventDefault();
								var n = t(this),
									o = s.getSelectorFromElement(this);
								t(o).each((function() {
									var e = t(this),
										o = e.data(i) ? "toggle" : n.data();
									x._jQueryInterface.call(e, o)
								}))
							})), t.fn[e] = x._jQueryInterface, t.fn[e].Constructor = x, t.fn[e].noConflict = function() {
								return t.fn[e] = n, x._jQueryInterface
							}, x
						}(e),
						l = function(t) {
							var e = t.fn.tab,
								i = "hide.bs.tab",
								n = "hidden.bs.tab",
								r = "show.bs.tab",
								a = "shown.bs.tab",
								h = "click.bs.tab.data-api",
								l = "active",
								c = "show",
								u = ".active",
								d = "> li > .active",
								p = function() {
									function e(t) {
										this._element = t
									}
									var h = e.prototype;
									return h.show = function() {
										var e = this;
										if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(l) || t(this._element).hasClass("disabled"))) {
											var o, h, c = t(this._element).closest(".nav, .list-group")[0],
												p = s.getSelectorFromElement(this._element);
											if (c) {
												var f = "UL" === c.nodeName ? d : u;
												h = (h = t.makeArray(t(c).find(f)))[h.length - 1]
											}
											var m = t.Event(i, {
													relatedTarget: this._element
												}),
												g = t.Event(r, {
													relatedTarget: h
												});
											if (h && t(h).trigger(m), t(this._element).trigger(g), !g.isDefaultPrevented() && !m.isDefaultPrevented()) {
												p && (o = t(p)[0]), this._activate(this._element, c);
												var v = function() {
													var i = t.Event(n, {
															relatedTarget: e._element
														}),
														o = t.Event(a, {
															relatedTarget: h
														});
													t(h).trigger(i), t(e._element).trigger(o)
												};
												o ? this._activate(o, o.parentNode, v) : v()
											}
										}
									}, h.dispose = function() {
										t.removeData(this._element, "bs.tab"), this._element = null
									}, h._activate = function(e, i, n) {
										var o = this,
											r = ("UL" === i.nodeName ? t(i).find(d) : t(i).children(u))[0],
											a = n && s.supportsTransitionEnd() && r && t(r).hasClass("fade"),
											h = function() {
												return o._transitionComplete(e, r, n)
											};
										r && a ? t(r).one(s.TRANSITION_END, h).emulateTransitionEnd(150) : h()
									}, h._transitionComplete = function(e, i, n) {
										if (i) {
											t(i).removeClass(c + " " + l);
											var o = t(i.parentNode).find("> .dropdown-menu .active")[0];
											o && t(o).removeClass(l), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
										}
										if (t(e).addClass(l), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), s.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
											var r = t(e).closest(".dropdown")[0];
											r && t(r).find(".dropdown-toggle").addClass(l), e.setAttribute("aria-expanded", !0)
										}
										n && n()
									}, e._jQueryInterface = function(i) {
										return this.each((function() {
											var n = t(this),
												o = n.data("bs.tab");
											if (o || (o = new e(this), n.data("bs.tab", o)), "string" == typeof i) {
												if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
												o[i]()
											}
										}))
									}, o(e, null, [{
										key: "VERSION",
										get: function() {
											return "4.0.0"
										}
									}]), e
								}();
							return t(document).on(h, '[data-ekit-toggle="tab"], [data-ekit-toggle="pill"], [data-ekit-toggle="list"]', (function(e) {
								e.preventDefault(), p._jQueryInterface.call(t(this), "show")
							})), t.fn.tab = p._jQueryInterface, t.fn.tab.Constructor = p, t.fn.tab.noConflict = function() {
								return t.fn.tab = e, p._jQueryInterface
							}, p
						}(e);
					! function(t) {
						if (void 0 === t) throw new TypeError("Ekit Prefixed Bootstrap's JavaScript requires jQuery. jQuery must be included before Ekit Prefixed Bootstrap's JavaScript.");
						var e = t.fn.jquery.split(" ")[0].split(".");
						if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Ekit Prefixed UI's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
					}(e), t.Util = s, t.Collapse = h, t.Tab = l, Object.defineProperty(t, "__esModule", {
						value: !0
					})
				}, "object" == a(e) ? s(e, i(311)) : (o = [e, i(311)], (r = "function" == typeof(n = s) ? n.apply(e, o) : n) === undefined || (t.exports = r))
			},
			311: function(t) {
				"use strict";
				t.exports = jQuery
			}
		},
		e = {};

	function i(n) {
		var o = e[n];
		if (o !== undefined) return o.exports;
		var r = e[n] = {
			exports: {}
		};
		return t[n].call(r.exports, r, r.exports, i), r.exports
	}
	i.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t["default"]
			} : function() {
				return t
			};
			return i.d(e, {
				a: e
			}), e
		}, i.d = function(t, e) {
			for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
				enumerable: !0,
				get: e[n]
			})
		}, i.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		},
		function() {
			"use strict";
			i(412), i(557), i(101), i(580), i(178), i(595), i(363), i(955), i(644), i(989), i(430), i(457), i(285), i(112), i(793), i(32)
		}()
}();
/*! This file is auto-generated */
! function(c, d) {
	"use strict";
	var e = !1,
		n = !1;
	if (d.querySelector)
		if (c.addEventListener) e = !0;
	if (c.wp = c.wp || {}, !c.wp.receiveEmbedMessage)
		if (c.wp.receiveEmbedMessage = function(e) {
				var t = e.data;
				if (t)
					if (t.secret || t.message || t.value)
						if (!/[^a-zA-Z0-9]/.test(t.secret)) {
							for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
							for (o = 0; o < s.length; o++)
								if (r = s[o], e.source === r.contentWindow) {
									if (r.removeAttribute("style"), "height" === t.message) {
										if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
										else if (~~i < 200) i = 200;
										r.height = i
									}
									if ("link" === t.message)
										if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host)
											if (d.activeElement === r) c.top.location.href = t.value
								}
						}
			}, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);

	function t() {
		if (!n) {
			n = !0;
			for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
				if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
				if (r || a)(t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e)
			}
		}
	}
}(window, document);