"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/algoliasearch@4.27.0/node_modules/algoliasearch/dist/algoliasearch.umd.js
  var require_algoliasearch_umd = __commonJS({
    "node_modules/.pnpm/algoliasearch@4.27.0/node_modules/algoliasearch/dist/algoliasearch.umd.js"(exports, module) {
      init_live_reload();
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).algoliasearch = t();
      }(exports, function() {
        "use strict";
        function e(e2, t2, r2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
        }
        function t(e2, t2) {
          var r2 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(e2);
            t2 && (n2 = n2.filter(function(t3) {
              return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
            })), r2.push.apply(r2, n2);
          }
          return r2;
        }
        function r(r2) {
          for (var n2 = 1; n2 < arguments.length; n2++) {
            var a2 = null != arguments[n2] ? arguments[n2] : {};
            n2 % 2 ? t(Object(a2), true).forEach(function(t2) {
              e(r2, t2, a2[t2]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r2, Object.getOwnPropertyDescriptors(a2)) : t(Object(a2)).forEach(function(e2) {
              Object.defineProperty(r2, e2, Object.getOwnPropertyDescriptor(a2, e2));
            });
          }
          return r2;
        }
        function n(e2, t2) {
          if (null == e2) return {};
          var r2, n2, a2 = function(e3, t3) {
            if (null == e3) return {};
            var r3, n3, a3 = {}, o3 = Object.keys(e3);
            for (n3 = 0; n3 < o3.length; n3++) r3 = o3[n3], t3.indexOf(r3) >= 0 || (a3[r3] = e3[r3]);
            return a3;
          }(e2, t2);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(e2);
            for (n2 = 0; n2 < o2.length; n2++) r2 = o2[n2], t2.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, r2) && (a2[r2] = e2[r2]);
          }
          return a2;
        }
        function a(e2, t2) {
          return function(e3) {
            if (Array.isArray(e3)) return e3;
          }(e2) || function(e3, t3) {
            if (!(Symbol.iterator in Object(e3) || "[object Arguments]" === Object.prototype.toString.call(e3))) return;
            var r2 = [], n2 = true, a2 = false, o2 = void 0;
            try {
              for (var i2, u2 = e3[Symbol.iterator](); !(n2 = (i2 = u2.next()).done) && (r2.push(i2.value), !t3 || r2.length !== t3); n2 = true) ;
            } catch (e4) {
              a2 = true, o2 = e4;
            } finally {
              try {
                n2 || null == u2.return || u2.return();
              } finally {
                if (a2) throw o2;
              }
            }
            return r2;
          }(e2, t2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }();
        }
        function o(e2) {
          return function(e3) {
            if (Array.isArray(e3)) {
              for (var t2 = 0, r2 = new Array(e3.length); t2 < e3.length; t2++) r2[t2] = e3[t2];
              return r2;
            }
          }(e2) || function(e3) {
            if (Symbol.iterator in Object(e3) || "[object Arguments]" === Object.prototype.toString.call(e3)) return Array.from(e3);
          }(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
          }();
        }
        function i() {
          var e2 = "undefined" != typeof globalThis ? globalThis : void 0;
          return e2 && e2.scheduler && e2.scheduler.yield ? e2.scheduler.yield().catch(function(e3) {
            return console.error("Failed to yield to main: ", e3), new Promise(function(e4) {
              return setTimeout(e4, 0);
            });
          }) : new Promise(function(e3) {
            return setTimeout(e3, 0);
          });
        }
        function u(e2) {
          var t2, r2 = "algoliasearch-client-js-".concat(e2.key), n2 = function() {
            return void 0 === t2 && (t2 = e2.localStorage || window.localStorage), t2;
          }, o2 = function() {
            return JSON.parse(n2().getItem(r2) || "{}");
          }, u2 = function(e3) {
            n2().setItem(r2, JSON.stringify(e3));
          }, s2 = function() {
            var t3 = e2.timeToLive ? 1e3 * e2.timeToLive : null, r3 = o2(), n3 = (/* @__PURE__ */ new Date()).getTime();
            return Object.fromEntries(Object.entries(r3).filter(function(e3) {
              var r4 = a(e3, 2)[1];
              return !(!r4 || void 0 === r4.timestamp) && (!t3 || r4.timestamp + t3 >= n3);
            }));
          };
          return { get: function(e3, t3) {
            var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } };
            return i().then(function() {
              var n3 = s2(), a2 = n3[JSON.stringify(e3)];
              return u2(n3), a2 ? a2.value : t3().then(function(e4) {
                return r3.miss(e4).then(function() {
                  return e4;
                });
              });
            });
          }, set: function(e3, t3) {
            return i().then(function() {
              var a2 = o2();
              return a2[JSON.stringify(e3)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: t3 }, n2().setItem(r2, JSON.stringify(a2)), t3;
            });
          }, delete: function(e3) {
            return i().then(function() {
              var t3 = o2();
              delete t3[JSON.stringify(e3)], n2().setItem(r2, JSON.stringify(t3));
            });
          }, clear: function() {
            return Promise.resolve().then(function() {
              n2().removeItem(r2);
            });
          } };
        }
        function s(e2) {
          var t2 = o(e2.caches), r2 = t2.shift();
          return void 0 === r2 ? { get: function(e3, t3) {
            var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } }, n2 = t3();
            return n2.then(function(e4) {
              return Promise.all([e4, r3.miss(e4)]);
            }).then(function(e4) {
              return a(e4, 1)[0];
            });
          }, set: function(e3, t3) {
            return Promise.resolve(t3);
          }, delete: function(e3) {
            return Promise.resolve();
          }, clear: function() {
            return Promise.resolve();
          } } : { get: function(e3, n2) {
            var a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } };
            return r2.get(e3, n2, a2).catch(function() {
              return s({ caches: t2 }).get(e3, n2, a2);
            });
          }, set: function(e3, n2) {
            return r2.set(e3, n2).catch(function() {
              return s({ caches: t2 }).set(e3, n2);
            });
          }, delete: function(e3) {
            return r2.delete(e3).catch(function() {
              return s({ caches: t2 }).delete(e3);
            });
          }, clear: function() {
            return r2.clear().catch(function() {
              return s({ caches: t2 }).clear();
            });
          } };
        }
        function c() {
          var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
          return { get: function(r2, n2) {
            var a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } }, o2 = JSON.stringify(r2);
            if (o2 in t2) return Promise.resolve(e2.serializable ? JSON.parse(t2[o2]) : t2[o2]);
            var i2 = n2(), u2 = a2 && a2.miss || function() {
              return Promise.resolve();
            };
            return i2.then(function(e3) {
              return u2(e3);
            }).then(function() {
              return i2;
            });
          }, set: function(r2, n2) {
            return t2[JSON.stringify(r2)] = e2.serializable ? JSON.stringify(n2) : n2, Promise.resolve(n2);
          }, delete: function(e3) {
            return delete t2[JSON.stringify(e3)], Promise.resolve();
          }, clear: function() {
            return t2 = {}, Promise.resolve();
          } };
        }
        function f(e2, t2, r2) {
          var n2 = { "x-algolia-api-key": r2, "x-algolia-application-id": t2 };
          return { headers: function() {
            return e2 === g.WithinHeaders ? n2 : {};
          }, queryParameters: function() {
            return e2 === g.WithinQueryParameters ? n2 : {};
          } };
        }
        function d(e2) {
          var t2 = 0;
          return e2(function r2() {
            return t2++, new Promise(function(n2) {
              setTimeout(function() {
                n2(e2(r2));
              }, Math.min(100 * t2, 1e3));
            });
          });
        }
        function l(e2) {
          var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e3, t3) {
            return Promise.resolve();
          };
          return Object.assign(e2, { wait: function(r2) {
            return l(e2.then(function(e3) {
              return Promise.all([t2(e3, r2), e3]);
            }).then(function(e3) {
              return e3[1];
            }));
          } });
        }
        function h(e2) {
          for (var t2 = e2.length - 1; t2 > 0; t2--) {
            var r2 = Math.floor(Math.random() * (t2 + 1)), n2 = e2[t2];
            e2[t2] = e2[r2], e2[r2] = n2;
          }
          return e2;
        }
        function p(e2, t2) {
          return t2 ? (Object.keys(t2).forEach(function(r2) {
            e2[r2] = t2[r2](e2);
          }), e2) : e2;
        }
        function m(e2) {
          for (var t2 = arguments.length, r2 = new Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
          var a2 = 0;
          return e2.replace(/%s/g, function() {
            return encodeURIComponent(r2[a2++]);
          });
        }
        var g = { WithinQueryParameters: 0, WithinHeaders: 1 };
        function y(e2, t2) {
          var r2 = e2 || {}, n2 = r2.data || {};
          return Object.keys(r2).forEach(function(e3) {
            -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e3) && (n2[e3] = r2[e3]);
          }), { data: Object.entries(n2).length > 0 ? n2 : void 0, timeout: r2.timeout || t2, headers: r2.headers || {}, queryParameters: r2.queryParameters || {}, cacheable: r2.cacheable };
        }
        var v = { Read: 1, Write: 2, Any: 3 }, b = 1, w = 2, P = 3;
        function I(e2) {
          var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
          return r(r({}, e2), {}, { status: t2, lastUpdate: Date.now() });
        }
        function O(e2) {
          return "string" == typeof e2 ? { protocol: "https", url: e2, accept: v.Any } : { protocol: e2.protocol || "https", url: e2.url, accept: e2.accept || v.Any };
        }
        var x = "DELETE", j = "GET", q = "POST", D = "PUT";
        function T(e2, t2) {
          return Promise.all(t2.map(function(t3) {
            return e2.get(t3, function() {
              return Promise.resolve(I(t3));
            });
          })).then(function(e3) {
            var r2 = e3.filter(function(e4) {
              return function(e5) {
                return e5.status === b || Date.now() - e5.lastUpdate > 12e4;
              }(e4);
            }), n2 = e3.filter(function(e4) {
              return function(e5) {
                return e5.status === P && Date.now() - e5.lastUpdate <= 12e4;
              }(e4);
            }), a2 = [].concat(o(r2), o(n2));
            return { getTimeout: function(e4, t3) {
              return (0 === n2.length && 0 === e4 ? 1 : n2.length + 3 + e4) * t3;
            }, statelessHosts: a2.length > 0 ? a2.map(function(e4) {
              return O(e4);
            }) : t2 };
          });
        }
        function k(e2, t2, n2, a2) {
          var i2 = [], u2 = function(e3, t3) {
            if (e3.method === j || void 0 === e3.data && void 0 === t3.data) return;
            var n3 = Array.isArray(e3.data) ? e3.data : r(r({}, e3.data), t3.data);
            return JSON.stringify(n3);
          }(n2, a2), s2 = function(e3, t3) {
            var n3 = r(r({}, e3.headers), t3.headers), a3 = {};
            return Object.keys(n3).forEach(function(e4) {
              var t4 = n3[e4];
              a3[e4.toLowerCase()] = t4;
            }), a3;
          }(e2, a2), c2 = n2.method, f2 = n2.method !== j ? {} : r(r({}, n2.data), a2.data), d2 = r(r(r({ "x-algolia-agent": e2.userAgent.value }, e2.queryParameters), f2), a2.queryParameters), l2 = 0, h2 = function t3(r2, o2) {
            var f3 = r2.pop();
            if (void 0 === f3) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .", transporterStackTrace: R(i2) };
            var h3 = { data: u2, headers: s2, method: c2, url: A(f3, n2.path, d2), connectTimeout: o2(l2, e2.timeouts.connect), responseTimeout: o2(l2, a2.timeout) }, p2 = function(e3) {
              var t4 = { request: h3, response: e3, host: f3, triesLeft: r2.length };
              return i2.push(t4), t4;
            }, m2 = { onSuccess: function(e3) {
              return function(e4) {
                try {
                  return JSON.parse(e4.content);
                } catch (t4) {
                  throw /* @__PURE__ */ function(e5, t5) {
                    return { name: "DeserializationError", message: e5, response: t5 };
                  }(t4.message, e4);
                }
              }(e3);
            }, onRetry: function(n3) {
              var a3 = p2(n3);
              return n3.isTimedOut && l2++, Promise.all([e2.logger.info("Retryable failure", C(a3)), e2.hostsCache.set(f3, I(f3, n3.isTimedOut ? P : w))]).then(function() {
                return t3(r2, o2);
              });
            }, onFail: function(e3) {
              throw p2(e3), function(e4, t4) {
                var r3 = e4.content, n3 = e4.status, a3 = r3;
                try {
                  a3 = JSON.parse(r3).message;
                } catch (e5) {
                }
                return /* @__PURE__ */ function(e5, t5, r4) {
                  return { name: "ApiError", message: e5, status: t5, transporterStackTrace: r4 };
                }(a3, n3, t4);
              }(e3, R(i2));
            } };
            return e2.requester.send(h3).then(function(e3) {
              return function(e4, t4) {
                return function(e5) {
                  var t5 = e5.status;
                  return e5.isTimedOut || function(e6) {
                    var t6 = e6.isTimedOut, r3 = e6.status;
                    return !t6 && 0 == ~~r3;
                  }(e5) || 2 != ~~(t5 / 100) && 4 != ~~(t5 / 100);
                }(e4) ? t4.onRetry(e4) : 2 == ~~(e4.status / 100) ? t4.onSuccess(e4) : t4.onFail(e4);
              }(e3, m2);
            });
          };
          return T(e2.hostsCache, t2).then(function(e3) {
            return h2(o(e3.statelessHosts).reverse(), e3.getTimeout);
          });
        }
        function S(e2) {
          var t2 = e2.hostsCache, r2 = e2.logger, n2 = e2.requester, o2 = e2.requestsCache, i2 = e2.responsesCache, u2 = e2.timeouts, s2 = e2.userAgent, c2 = e2.hosts, f2 = e2.queryParameters, d2 = { hostsCache: t2, logger: r2, requester: n2, requestsCache: o2, responsesCache: i2, timeouts: u2, userAgent: s2, headers: e2.headers, queryParameters: f2, hosts: c2.map(function(e3) {
            return O(e3);
          }), read: function(e3, t3) {
            var r3 = y(t3, d2.timeouts.read), n3 = function() {
              return k(d2, d2.hosts.filter(function(e4) {
                return 0 != (e4.accept & v.Read);
              }), e3, r3);
            };
            if (true !== (void 0 !== r3.cacheable ? r3.cacheable : e3.cacheable)) return n3();
            var o3 = { request: e3, mappedRequestOptions: r3, transporter: { queryParameters: d2.queryParameters, headers: d2.headers } };
            return d2.responsesCache.get(o3, function() {
              return d2.requestsCache.get(o3, function() {
                return d2.requestsCache.set(o3, n3()).then(function(e4) {
                  return Promise.all([d2.requestsCache.delete(o3), e4]);
                }, function(e4) {
                  return Promise.all([d2.requestsCache.delete(o3), Promise.reject(e4)]);
                }).then(function(e4) {
                  var t4 = a(e4, 2);
                  t4[0];
                  return t4[1];
                });
              });
            }, { miss: function(e4) {
              return d2.responsesCache.set(o3, e4);
            } });
          }, write: function(e3, t3) {
            return k(d2, d2.hosts.filter(function(e4) {
              return 0 != (e4.accept & v.Write);
            }), e3, y(t3, d2.timeouts.write));
          } };
          return d2;
        }
        function N(e2) {
          var t2 = { value: "Algolia for JavaScript (".concat(e2, ")"), add: function(e3) {
            var r2 = "; ".concat(e3.segment).concat(void 0 !== e3.version ? " (".concat(e3.version, ")") : "");
            return -1 === t2.value.indexOf(r2) && (t2.value = "".concat(t2.value).concat(r2)), t2;
          } };
          return t2;
        }
        function A(e2, t2, r2) {
          var n2 = E(r2), a2 = "".concat(e2.protocol, "://").concat(e2.url, "/").concat("/" === t2.charAt(0) ? t2.substr(1) : t2);
          return n2.length && (a2 += "?".concat(n2)), a2;
        }
        function E(e2) {
          return Object.keys(e2).map(function(t2) {
            return m("%s=%s", t2, (r2 = e2[t2], "[object Object]" === Object.prototype.toString.call(r2) || "[object Array]" === Object.prototype.toString.call(r2) ? JSON.stringify(e2[t2]) : e2[t2]));
            var r2;
          }).join("&");
        }
        function R(e2) {
          return e2.map(function(e3) {
            return C(e3);
          });
        }
        function C(e2) {
          var t2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
          return r(r({}, e2), {}, { request: r(r({}, e2.request), {}, { headers: r(r({}, e2.request.headers), t2) }) });
        }
        var U = function(e2) {
          return function(t2, r2) {
            return e2.transporter.write({ method: q, path: "2/abtests", data: t2 }, r2);
          };
        }, z = function(e2) {
          return function(t2, r2) {
            return e2.transporter.write({ method: x, path: m("2/abtests/%s", t2) }, r2);
          };
        }, F = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: j, path: m("2/abtests/%s", t2) }, r2);
          };
        }, J = function(e2) {
          return function(t2) {
            return e2.transporter.read({ method: j, path: "2/abtests" }, t2);
          };
        }, W = function(e2) {
          return function(t2, r2) {
            return e2.transporter.write({ method: q, path: m("2/abtests/%s/stop", t2) }, r2);
          };
        }, H = function(e2) {
          return function(t2) {
            return e2.transporter.read({ method: j, path: "1/strategies/personalization" }, t2);
          };
        }, K = function(e2) {
          return function(t2, r2) {
            return e2.transporter.write({ method: q, path: "1/strategies/personalization", data: t2 }, r2);
          };
        };
        function M(e2) {
          return function t2(r2) {
            return e2.request(r2).then(function(n2) {
              if (void 0 !== e2.batch && e2.batch(n2.hits), !e2.shouldStop(n2)) return n2.cursor ? t2({ cursor: n2.cursor }) : t2({ page: (r2.page || 0) + 1 });
            });
          }({});
        }
        var B = function(e2) {
          return function(t2, a2) {
            var o2 = a2 || {}, i2 = o2.queryParameters, u2 = n(o2, ["queryParameters"]), s2 = r({ acl: t2 }, void 0 !== i2 ? { queryParameters: i2 } : {});
            return l(e2.transporter.write({ method: q, path: "1/keys", data: s2 }, u2), function(t3, r2) {
              return d(function(n2) {
                return te(e2)(t3.key, r2).catch(function(e3) {
                  if (404 !== e3.status) throw e3;
                  return n2();
                });
              });
            });
          };
        }, G = function(e2) {
          return function(t2, r2, n2) {
            var a2 = y(n2);
            return a2.queryParameters["X-Algolia-User-ID"] = t2, e2.transporter.write({ method: q, path: "1/clusters/mapping", data: { cluster: r2 } }, a2);
          };
        }, L = function(e2) {
          return function(t2, r2, n2) {
            return e2.transporter.write({ method: q, path: "1/clusters/mapping/batch", data: { users: t2, cluster: r2 } }, n2);
          };
        }, Q = function(e2) {
          return function(t2, r2) {
            return l(e2.transporter.write({ method: q, path: m("/1/dictionaries/%s/batch", t2), data: { clearExistingDictionaryEntries: true, requests: { action: "addEntry", body: [] } } }, r2), function(t3, r3) {
              return qe(e2)(t3.taskID, r3);
            });
          };
        }, V = function(e2) {
          return function(t2, r2, n2) {
            return l(e2.transporter.write({ method: q, path: m("1/indexes/%s/operation", t2), data: { operation: "copy", destination: r2 } }, n2), function(r3, n3) {
              return se(e2)(t2, { methods: { waitTask: lt } }).waitTask(r3.taskID, n3);
            });
          };
        }, _ = function(e2) {
          return function(t2, n2, a2) {
            return V(e2)(t2, n2, r(r({}, a2), {}, { scope: [pt.Rules] }));
          };
        }, X = function(e2) {
          return function(t2, n2, a2) {
            return V(e2)(t2, n2, r(r({}, a2), {}, { scope: [pt.Settings] }));
          };
        }, Y = function(e2) {
          return function(t2, n2, a2) {
            return V(e2)(t2, n2, r(r({}, a2), {}, { scope: [pt.Synonyms] }));
          };
        }, Z = function(e2) {
          return function(t2, r2) {
            return t2.method === j ? e2.transporter.read(t2, r2) : e2.transporter.write(t2, r2);
          };
        }, $ = function(e2) {
          return function(t2, r2) {
            return l(e2.transporter.write({ method: x, path: m("1/keys/%s", t2) }, r2), function(r3, n2) {
              return d(function(r4) {
                return te(e2)(t2, n2).then(r4).catch(function(e3) {
                  if (404 !== e3.status) throw e3;
                });
              });
            });
          };
        }, ee = function(e2) {
          return function(t2, r2, n2) {
            var a2 = r2.map(function(e3) {
              return { action: "deleteEntry", body: { objectID: e3 } };
            });
            return l(e2.transporter.write({ method: q, path: m("/1/dictionaries/%s/batch", t2), data: { clearExistingDictionaryEntries: false, requests: a2 } }, n2), function(t3, r3) {
              return qe(e2)(t3.taskID, r3);
            });
          };
        }, te = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: j, path: m("1/keys/%s", t2) }, r2);
          };
        }, re = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: j, path: m("1/task/%s", t2.toString()) }, r2);
          };
        }, ne = function(e2) {
          return function(t2) {
            return e2.transporter.read({ method: j, path: "/1/dictionaries/*/settings" }, t2);
          };
        }, ae = function(e2) {
          return function(t2) {
            return e2.transporter.read({ method: j, path: "1/logs" }, t2);
          };
        }, oe = function(e2) {
          return function(t2) {
            return e2.transporter.read({ method: j, path: "1/clusters/mapping/top" }, t2);
          };
        }, ie = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: j, path: m("1/clusters/mapping/%s", t2) }, r2);
          };
        }, ue = function(e2) {
          return function(t2) {
            var r2 = t2 || {}, a2 = r2.retrieveMappings, o2 = n(r2, ["retrieveMappings"]);
            return true === a2 && (o2.getClusters = true), e2.transporter.read({ method: j, path: "1/clusters/mapping/pending" }, o2);
          };
        }, se = function(e2) {
          return function(t2) {
            var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = { transporter: e2.transporter, appId: e2.appId, indexName: t2 };
            return p(n2, r2.methods);
          };
        }, ce = function(e2) {
          return function(t2) {
            return e2.transporter.read({ method: j, path: "1/keys" }, t2);
          };
        }, fe = function(e2) {
          return function(t2) {
            return e2.transporter.read({ method: j, path: "1/clusters" }, t2);
          };
        }, de = function(e2) {
          return function(t2) {
            return e2.transporter.read({ method: j, path: "1/indexes" }, t2);
          };
        }, le = function(e2) {
          return function(t2) {
            return e2.transporter.read({ method: j, path: "1/clusters/mapping" }, t2);
          };
        }, he = function(e2) {
          return function(t2, r2, n2) {
            return l(e2.transporter.write({ method: q, path: m("1/indexes/%s/operation", t2), data: { operation: "move", destination: r2 } }, n2), function(r3, n3) {
              return se(e2)(t2, { methods: { waitTask: lt } }).waitTask(r3.taskID, n3);
            });
          };
        }, pe = function(e2) {
          return function(t2, r2) {
            return l(e2.transporter.write({ method: q, path: "1/indexes/*/batch", data: { requests: t2 } }, r2), function(t3, r3) {
              return Promise.all(Object.keys(t3.taskID).map(function(n2) {
                return se(e2)(n2, { methods: { waitTask: lt } }).waitTask(t3.taskID[n2], r3);
              }));
            });
          };
        }, me = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: q, path: "1/indexes/*/objects", data: { requests: t2 } }, r2);
          };
        }, ge = function(e2) {
          return function(t2, n2) {
            var a2 = t2.map(function(e3) {
              return r(r({}, e3), {}, { params: E(e3.params || {}) });
            });
            return e2.transporter.read({ method: q, path: "1/indexes/*/queries", data: { requests: a2 }, cacheable: true }, n2);
          };
        }, ye = function(e2) {
          return function(t2, a2) {
            return Promise.all(t2.map(function(t3) {
              var o2 = t3.params, i2 = o2.facetName, u2 = o2.facetQuery, s2 = n(o2, ["facetName", "facetQuery"]);
              return se(e2)(t3.indexName, { methods: { searchForFacetValues: st } }).searchForFacetValues(i2, u2, r(r({}, a2), s2));
            }));
          };
        }, ve = function(e2) {
          return function(t2, r2) {
            var n2 = y(r2);
            return n2.queryParameters["X-Algolia-User-ID"] = t2, e2.transporter.write({ method: x, path: "1/clusters/mapping" }, n2);
          };
        }, be = function(e2) {
          return function(t2, r2, n2) {
            var a2 = r2.map(function(e3) {
              return { action: "addEntry", body: e3 };
            });
            return l(e2.transporter.write({ method: q, path: m("/1/dictionaries/%s/batch", t2), data: { clearExistingDictionaryEntries: true, requests: a2 } }, n2), function(t3, r3) {
              return qe(e2)(t3.taskID, r3);
            });
          };
        }, we = function(e2) {
          return function(t2, r2) {
            return l(e2.transporter.write({ method: q, path: m("1/keys/%s/restore", t2) }, r2), function(r3, n2) {
              return d(function(r4) {
                return te(e2)(t2, n2).catch(function(e3) {
                  if (404 !== e3.status) throw e3;
                  return r4();
                });
              });
            });
          };
        }, Pe = function(e2) {
          return function(t2, r2, n2) {
            var a2 = r2.map(function(e3) {
              return { action: "addEntry", body: e3 };
            });
            return l(e2.transporter.write({ method: q, path: m("/1/dictionaries/%s/batch", t2), data: { clearExistingDictionaryEntries: false, requests: a2 } }, n2), function(t3, r3) {
              return qe(e2)(t3.taskID, r3);
            });
          };
        }, Ie = function(e2) {
          return function(t2, r2, n2) {
            return e2.transporter.read({ method: q, path: m("/1/dictionaries/%s/search", t2), data: { query: r2 }, cacheable: true }, n2);
          };
        }, Oe = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: q, path: "1/clusters/mapping/search", data: { query: t2 } }, r2);
          };
        }, xe = function(e2) {
          return function(t2, r2) {
            return l(e2.transporter.write({ method: D, path: "/1/dictionaries/*/settings", data: t2 }, r2), function(t3, r3) {
              return qe(e2)(t3.taskID, r3);
            });
          };
        }, je = function(e2) {
          return function(t2, r2) {
            var a2 = Object.assign({}, r2), o2 = r2 || {}, i2 = o2.queryParameters, u2 = n(o2, ["queryParameters"]), s2 = i2 ? { queryParameters: i2 } : {}, c2 = ["acl", "indexes", "referers", "restrictSources", "queryParameters", "description", "maxQueriesPerIPPerHour", "maxHitsPerQuery"];
            return l(e2.transporter.write({ method: D, path: m("1/keys/%s", t2), data: s2 }, u2), function(r3, n2) {
              return d(function(r4) {
                return te(e2)(t2, n2).then(function(e3) {
                  return function(e4) {
                    return Object.keys(a2).filter(function(e5) {
                      return -1 !== c2.indexOf(e5);
                    }).every(function(t3) {
                      if (Array.isArray(e4[t3]) && Array.isArray(a2[t3])) {
                        var r5 = e4[t3];
                        return r5.length === a2[t3].length && r5.every(function(e5, r6) {
                          return e5 === a2[t3][r6];
                        });
                      }
                      return e4[t3] === a2[t3];
                    });
                  }(e3) ? Promise.resolve() : r4();
                });
              });
            });
          };
        }, qe = function(e2) {
          return function(t2, r2) {
            return d(function(n2) {
              return re(e2)(t2, r2).then(function(e3) {
                return "published" !== e3.status ? n2() : void 0;
              });
            });
          };
        }, De = function(e2) {
          return function(t2, r2) {
            return l(e2.transporter.write({ method: q, path: m("1/indexes/%s/batch", e2.indexName), data: { requests: t2 } }, r2), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, Te = function(e2) {
          return function(t2) {
            return M(r(r({ shouldStop: function(e3) {
              return void 0 === e3.cursor;
            } }, t2), {}, { request: function(r2) {
              return e2.transporter.read({ method: q, path: m("1/indexes/%s/browse", e2.indexName), data: r2 }, t2);
            } }));
          };
        }, ke = function(e2) {
          return function(t2) {
            var n2 = r({ hitsPerPage: 1e3 }, t2);
            return M(r(r({ shouldStop: function(e3) {
              return e3.hits.length < n2.hitsPerPage;
            } }, n2), {}, { request: function(t3) {
              return ct(e2)("", r(r({}, n2), t3)).then(function(e3) {
                return r(r({}, e3), {}, { hits: e3.hits.map(function(e4) {
                  return delete e4._highlightResult, e4;
                }) });
              });
            } }));
          };
        }, Se = function(e2) {
          return function(t2) {
            var n2 = r({ hitsPerPage: 1e3 }, t2);
            return M(r(r({ shouldStop: function(e3) {
              return e3.hits.length < n2.hitsPerPage;
            } }, n2), {}, { request: function(t3) {
              return ft(e2)("", r(r({}, n2), t3)).then(function(e3) {
                return r(r({}, e3), {}, { hits: e3.hits.map(function(e4) {
                  return delete e4._highlightResult, e4;
                }) });
              });
            } }));
          };
        }, Ne = function(e2) {
          return function(t2, r2, a2) {
            var o2 = a2 || {}, i2 = o2.batchSize, u2 = n(o2, ["batchSize"]), s2 = { taskIDs: [], objectIDs: [] };
            return l(function n2() {
              var a3, o3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, c2 = [];
              for (a3 = o3; a3 < t2.length && (c2.push(t2[a3]), c2.length !== (i2 || 1e3)); a3++) ;
              return 0 === c2.length ? Promise.resolve(s2) : De(e2)(c2.map(function(e3) {
                return { action: r2, body: e3 };
              }), u2).then(function(e3) {
                return s2.objectIDs = s2.objectIDs.concat(e3.objectIDs), s2.taskIDs.push(e3.taskID), a3++, n2(a3);
              });
            }(), function(t3, r3) {
              return Promise.all(t3.taskIDs.map(function(t4) {
                return lt(e2)(t4, r3);
              }));
            });
          };
        }, Ae = function(e2) {
          return function(t2) {
            return l(e2.transporter.write({ method: q, path: m("1/indexes/%s/clear", e2.indexName) }, t2), function(t3, r2) {
              return lt(e2)(t3.taskID, r2);
            });
          };
        }, Ee = function(e2) {
          return function(t2) {
            var r2 = t2 || {}, a2 = r2.forwardToReplicas, o2 = y(n(r2, ["forwardToReplicas"]));
            return a2 && (o2.queryParameters.forwardToReplicas = 1), l(e2.transporter.write({ method: q, path: m("1/indexes/%s/rules/clear", e2.indexName) }, o2), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, Re = function(e2) {
          return function(t2) {
            var r2 = t2 || {}, a2 = r2.forwardToReplicas, o2 = y(n(r2, ["forwardToReplicas"]));
            return a2 && (o2.queryParameters.forwardToReplicas = 1), l(e2.transporter.write({ method: q, path: m("1/indexes/%s/synonyms/clear", e2.indexName) }, o2), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, Ce = function(e2) {
          return function(t2, r2) {
            return l(e2.transporter.write({ method: q, path: m("1/indexes/%s/deleteByQuery", e2.indexName), data: t2 }, r2), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, Ue = function(e2) {
          return function(t2) {
            return l(e2.transporter.write({ method: x, path: m("1/indexes/%s", e2.indexName) }, t2), function(t3, r2) {
              return lt(e2)(t3.taskID, r2);
            });
          };
        }, ze = function(e2) {
          return function(t2, r2) {
            return l(Fe(e2)([t2], r2).then(function(e3) {
              return { taskID: e3.taskIDs[0] };
            }), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, Fe = function(e2) {
          return function(t2, r2) {
            var n2 = t2.map(function(e3) {
              return { objectID: e3 };
            });
            return Ne(e2)(n2, ht.DeleteObject, r2);
          };
        }, Je = function(e2) {
          return function(t2, r2) {
            var a2 = r2 || {}, o2 = a2.forwardToReplicas, i2 = y(n(a2, ["forwardToReplicas"]));
            return o2 && (i2.queryParameters.forwardToReplicas = 1), l(e2.transporter.write({ method: x, path: m("1/indexes/%s/rules/%s", e2.indexName, t2) }, i2), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, We = function(e2) {
          return function(t2, r2) {
            var a2 = r2 || {}, o2 = a2.forwardToReplicas, i2 = y(n(a2, ["forwardToReplicas"]));
            return o2 && (i2.queryParameters.forwardToReplicas = 1), l(e2.transporter.write({ method: x, path: m("1/indexes/%s/synonyms/%s", e2.indexName, t2) }, i2), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, He = function(e2) {
          return function(t2) {
            return Ve(e2)(t2).then(function() {
              return true;
            }).catch(function(e3) {
              if (404 !== e3.status) throw e3;
              return false;
            });
          };
        }, Ke = function(e2) {
          return function(t2, r2, n2) {
            return e2.transporter.read({ method: q, path: m("1/answers/%s/prediction", e2.indexName), data: { query: t2, queryLanguages: r2 }, cacheable: true }, n2);
          };
        }, Me = function(e2) {
          return function(t2, o2) {
            var i2 = o2 || {}, u2 = i2.query, s2 = i2.paginate, c2 = n(i2, ["query", "paginate"]), f2 = 0;
            return function n2() {
              return ut(e2)(u2 || "", r(r({}, c2), {}, { page: f2 })).then(function(e3) {
                for (var r2 = 0, o3 = Object.entries(e3.hits); r2 < o3.length; r2++) {
                  var i3 = a(o3[r2], 2), u3 = i3[0], c3 = i3[1];
                  if (t2(c3)) return { object: c3, position: parseInt(u3, 10), page: f2 };
                }
                if (f2++, false === s2 || f2 >= e3.nbPages) throw { name: "ObjectNotFoundError", message: "Object not found." };
                return n2();
              });
            }();
          };
        }, Be = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: j, path: m("1/indexes/%s/%s", e2.indexName, t2) }, r2);
          };
        }, Ge = function() {
          return function(e2, t2) {
            for (var r2 = 0, n2 = Object.entries(e2.hits); r2 < n2.length; r2++) {
              var o2 = a(n2[r2], 2), i2 = o2[0];
              if (o2[1].objectID === t2) return parseInt(i2, 10);
            }
            return -1;
          };
        }, Le = function(e2) {
          return function(t2, a2) {
            var o2 = a2 || {}, i2 = o2.attributesToRetrieve, u2 = n(o2, ["attributesToRetrieve"]), s2 = t2.map(function(t3) {
              return r({ indexName: e2.indexName, objectID: t3 }, i2 ? { attributesToRetrieve: i2 } : {});
            });
            return e2.transporter.read({ method: q, path: "1/indexes/*/objects", data: { requests: s2 } }, u2);
          };
        }, Qe = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: j, path: m("1/indexes/%s/rules/%s", e2.indexName, t2) }, r2);
          };
        }, Ve = function(e2) {
          return function(t2) {
            return e2.transporter.read({ method: j, path: m("1/indexes/%s/settings", e2.indexName), data: { getVersion: 2 } }, t2);
          };
        }, _e = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: j, path: m("1/indexes/%s/synonyms/%s", e2.indexName, t2) }, r2);
          };
        }, Xe = function(e2) {
          return function(t2, r2) {
            return l(Ye(e2)([t2], r2).then(function(e3) {
              return { objectID: e3.objectIDs[0], taskID: e3.taskIDs[0] };
            }), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, Ye = function(e2) {
          return function(t2, r2) {
            var a2 = r2 || {}, o2 = a2.createIfNotExists, i2 = n(a2, ["createIfNotExists"]), u2 = o2 ? ht.PartialUpdateObject : ht.PartialUpdateObjectNoCreate;
            return Ne(e2)(t2, u2, i2);
          };
        }, Ze = function(e2) {
          return function(t2, i2) {
            var u2 = i2 || {}, s2 = u2.safe, c2 = u2.autoGenerateObjectIDIfNotExist, f2 = u2.batchSize, d2 = n(u2, ["safe", "autoGenerateObjectIDIfNotExist", "batchSize"]), h2 = function(t3, r2, n2, a2) {
              return l(e2.transporter.write({ method: q, path: m("1/indexes/%s/operation", t3), data: { operation: n2, destination: r2 } }, a2), function(t4, r3) {
                return lt(e2)(t4.taskID, r3);
              });
            }, p2 = Math.random().toString(36).substring(7), g2 = "".concat(e2.indexName, "_tmp_").concat(p2), y2 = rt({ appId: e2.appId, transporter: e2.transporter, indexName: g2 }), v2 = [], b2 = h2(e2.indexName, g2, "copy", r(r({}, d2), {}, { scope: ["settings", "synonyms", "rules"] }));
            return v2.push(b2), l((s2 ? b2.wait(d2) : b2).then(function() {
              var e3 = y2(t2, r(r({}, d2), {}, { autoGenerateObjectIDIfNotExist: c2, batchSize: f2 }));
              return v2.push(e3), s2 ? e3.wait(d2) : e3;
            }).then(function() {
              var t3 = h2(g2, e2.indexName, "move", d2);
              return v2.push(t3), s2 ? t3.wait(d2) : t3;
            }).then(function() {
              return Promise.all(v2);
            }).then(function(e3) {
              var t3 = a(e3, 3), r2 = t3[0], n2 = t3[1], i3 = t3[2];
              return { objectIDs: n2.objectIDs, taskIDs: [r2.taskID].concat(o(n2.taskIDs), [i3.taskID]) };
            }).catch(function(t3) {
              return Ue({ appId: e2.appId, transporter: e2.transporter, indexName: g2 })().catch(function() {
              }).then(function() {
                throw t3;
              });
            }), function(e3, t3) {
              return Promise.all(v2.map(function(e4) {
                return e4.wait(t3);
              }));
            });
          };
        }, $e = function(e2) {
          return function(t2, n2) {
            return at(e2)(t2, r(r({}, n2), {}, { clearExistingRules: true }));
          };
        }, et = function(e2) {
          return function(t2, n2) {
            return it(e2)(t2, r(r({}, n2), {}, { clearExistingSynonyms: true }));
          };
        }, tt = function(e2) {
          return function(t2, r2) {
            return l(rt(e2)([t2], r2).then(function(e3) {
              return { objectID: e3.objectIDs[0], taskID: e3.taskIDs[0] };
            }), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, rt = function(e2) {
          return function(t2, r2) {
            var a2 = r2 || {}, o2 = a2.autoGenerateObjectIDIfNotExist, i2 = n(a2, ["autoGenerateObjectIDIfNotExist"]), u2 = o2 ? ht.AddObject : ht.UpdateObject;
            if (u2 === ht.UpdateObject) {
              var s2 = true, c2 = false, f2 = void 0;
              try {
                for (var d2, h2 = t2[Symbol.iterator](); !(s2 = (d2 = h2.next()).done); s2 = true) {
                  if (void 0 === d2.value.objectID) return l(Promise.reject({ name: "MissingObjectIDError", message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option." }));
                }
              } catch (e3) {
                c2 = true, f2 = e3;
              } finally {
                try {
                  s2 || null == h2.return || h2.return();
                } finally {
                  if (c2) throw f2;
                }
              }
            }
            return Ne(e2)(t2, u2, i2);
          };
        }, nt = function(e2) {
          return function(t2, r2) {
            return at(e2)([t2], r2);
          };
        }, at = function(e2) {
          return function(t2, r2) {
            var a2 = r2 || {}, o2 = a2.forwardToReplicas, i2 = a2.clearExistingRules, u2 = y(n(a2, ["forwardToReplicas", "clearExistingRules"]));
            return o2 && (u2.queryParameters.forwardToReplicas = 1), i2 && (u2.queryParameters.clearExistingRules = 1), l(e2.transporter.write({ method: q, path: m("1/indexes/%s/rules/batch", e2.indexName), data: t2 }, u2), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, ot = function(e2) {
          return function(t2, r2) {
            return it(e2)([t2], r2);
          };
        }, it = function(e2) {
          return function(t2, r2) {
            var a2 = r2 || {}, o2 = a2.forwardToReplicas, i2 = a2.clearExistingSynonyms, u2 = a2.replaceExistingSynonyms, s2 = y(n(a2, ["forwardToReplicas", "clearExistingSynonyms", "replaceExistingSynonyms"]));
            return o2 && (s2.queryParameters.forwardToReplicas = 1), (u2 || i2) && (s2.queryParameters.replaceExistingSynonyms = 1), l(e2.transporter.write({ method: q, path: m("1/indexes/%s/synonyms/batch", e2.indexName), data: t2 }, s2), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, ut = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: q, path: m("1/indexes/%s/query", e2.indexName), data: { query: t2 }, cacheable: true }, r2);
          };
        }, st = function(e2) {
          return function(t2, r2, n2) {
            return e2.transporter.read({ method: q, path: m("1/indexes/%s/facets/%s/query", e2.indexName, t2), data: { facetQuery: r2 }, cacheable: true }, n2);
          };
        }, ct = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: q, path: m("1/indexes/%s/rules/search", e2.indexName), data: { query: t2 } }, r2);
          };
        }, ft = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: q, path: m("1/indexes/%s/synonyms/search", e2.indexName), data: { query: t2 } }, r2);
          };
        }, dt = function(e2) {
          return function(t2, r2) {
            var a2 = r2 || {}, o2 = a2.forwardToReplicas, i2 = y(n(a2, ["forwardToReplicas"]));
            return o2 && (i2.queryParameters.forwardToReplicas = 1), l(e2.transporter.write({ method: D, path: m("1/indexes/%s/settings", e2.indexName), data: t2 }, i2), function(t3, r3) {
              return lt(e2)(t3.taskID, r3);
            });
          };
        }, lt = function(e2) {
          return function(t2, r2) {
            return d(function(n2) {
              return (/* @__PURE__ */ function(e3) {
                return function(t3, r3) {
                  return e3.transporter.read({ method: j, path: m("1/indexes/%s/task/%s", e3.indexName, t3.toString()) }, r3);
                };
              }(e2))(t2, r2).then(function(e3) {
                return "published" !== e3.status ? n2() : void 0;
              });
            });
          };
        }, ht = { AddObject: "addObject", UpdateObject: "updateObject", PartialUpdateObject: "partialUpdateObject", PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate", DeleteObject: "deleteObject", DeleteIndex: "delete", ClearIndex: "clear" }, pt = { Settings: "settings", Synonyms: "synonyms", Rules: "rules" }, mt = 1, gt = 2, yt = 3;
        var vt = function(e2) {
          return function(t2, n2) {
            var a2 = t2.map(function(e3) {
              return r(r({}, e3), {}, { threshold: e3.threshold || 0 });
            });
            return e2.transporter.read({ method: q, path: "1/indexes/*/recommendations", data: { requests: a2 }, cacheable: true }, n2);
          };
        }, bt = function(e2) {
          return function(t2, n2) {
            return vt(e2)(t2.map(function(e3) {
              return r(r({}, e3), {}, { fallbackParameters: {}, model: "bought-together" });
            }), n2);
          };
        }, wt = function(e2) {
          return function(t2, n2) {
            return vt(e2)(t2.map(function(e3) {
              return r(r({}, e3), {}, { model: "related-products" });
            }), n2);
          };
        }, Pt = function(e2) {
          return function(t2, n2) {
            var a2 = t2.map(function(e3) {
              return r(r({}, e3), {}, { model: "trending-facets", threshold: e3.threshold || 0 });
            });
            return e2.transporter.read({ method: q, path: "1/indexes/*/recommendations", data: { requests: a2 }, cacheable: true }, n2);
          };
        }, It = function(e2) {
          return function(t2, n2) {
            var a2 = t2.map(function(e3) {
              return r(r({}, e3), {}, { model: "trending-items", threshold: e3.threshold || 0 });
            });
            return e2.transporter.read({ method: q, path: "1/indexes/*/recommendations", data: { requests: a2 }, cacheable: true }, n2);
          };
        }, Ot = function(e2) {
          return function(t2, n2) {
            return vt(e2)(t2.map(function(e3) {
              return r(r({}, e3), {}, { model: "looking-similar" });
            }), n2);
          };
        }, xt = function(e2) {
          return function(t2, n2) {
            var a2 = t2.map(function(e3) {
              return r(r({}, e3), {}, { model: "recommended-for-you", threshold: e3.threshold || 0 });
            });
            return e2.transporter.read({ method: q, path: "1/indexes/*/recommendations", data: { requests: a2 }, cacheable: true }, n2);
          };
        };
        function jt(e2, t2) {
          return function(r2, a2) {
            if (!t2) throw Dt("`options.transformation.region` must be provided at client instantiation before calling this method.");
            var o2 = a2 || {}, i2 = o2.autoGenerateObjectIDIfNotExist, u2 = o2.watch, s2 = n(o2, ["autoGenerateObjectIDIfNotExist", "watch"]), c2 = i2 ? ht.AddObject : ht.UpdateObject;
            return t2.push({ indexName: e2, pushTaskPayload: { action: c2, records: r2 }, watch: u2 }, s2);
          };
        }
        function qt(e2, t2) {
          return function(r2, a2) {
            if (!t2) throw Dt("`options.transformation.region` must be provided at client instantiation before calling this method.");
            var o2 = a2 || {}, i2 = o2.createIfNotExists, u2 = o2.watch, s2 = n(o2, ["createIfNotExists", "watch"]), c2 = i2 ? ht.PartialUpdateObject : ht.PartialUpdateObjectNoCreate;
            return t2.push({ indexName: e2, pushTaskPayload: { action: c2, records: r2 }, watch: u2 }, s2);
          };
        }
        function Dt(e2) {
          return { name: "TransformationConfigurationError", message: e2 };
        }
        function Tt(e2, t2, n2) {
          var a2, o2, i2 = { appId: e2, apiKey: t2, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(e3) {
            return new Promise(function(t3) {
              var r2 = new XMLHttpRequest();
              r2.open(e3.method, e3.url, true), Object.keys(e3.headers).forEach(function(t4) {
                return r2.setRequestHeader(t4, e3.headers[t4]);
              });
              var n3, a3 = function(e4, n4) {
                return setTimeout(function() {
                  r2.abort(), t3({ status: 0, content: n4, isTimedOut: true });
                }, 1e3 * e4);
              }, o3 = a3(e3.connectTimeout, "Connection timeout");
              r2.onreadystatechange = function() {
                r2.readyState > r2.OPENED && void 0 === n3 && (clearTimeout(o3), n3 = a3(e3.responseTimeout, "Socket timeout"));
              }, r2.onerror = function() {
                0 === r2.status && (clearTimeout(o3), clearTimeout(n3), t3({ content: r2.responseText || "Network request failed", status: r2.status, isTimedOut: false }));
              }, r2.onload = function() {
                clearTimeout(o3), clearTimeout(n3), t3({ content: r2.responseText, status: r2.status, isTimedOut: false });
              }, r2.send(e3.data);
            });
          } }, logger: (a2 = yt, { debug: function(e3, t3) {
            return mt >= a2 && console.debug(e3, t3), Promise.resolve();
          }, info: function(e3, t3) {
            return gt >= a2 && console.info(e3, t3), Promise.resolve();
          }, error: function(e3, t3) {
            return console.error(e3, t3), Promise.resolve();
          } }), responsesCache: c(), requestsCache: c({ serializable: false }), hostsCache: s({ caches: [u({ key: "".concat("4.26.0", "-").concat(e2) }), c()] }), userAgent: N("4.26.0").add({ segment: "Browser" }) }, d2 = r(r({}, i2), n2), l2 = function() {
            return function(e3) {
              return function(e4) {
                var t3 = e4.region || "us", n3 = f(g.WithinHeaders, e4.appId, e4.apiKey), a3 = S(r(r({ hosts: [{ url: "personalization.".concat(t3, ".algolia.com") }] }, e4), {}, { headers: r(r(r({}, n3.headers()), { "content-type": "application/json" }), e4.headers), queryParameters: r(r({}, n3.queryParameters()), e4.queryParameters) }));
                return p({ appId: e4.appId, transporter: a3 }, e4.methods);
              }(r(r(r({}, i2), e3), {}, { methods: { getPersonalizationStrategy: H, setPersonalizationStrategy: K } }));
            };
          };
          if (n2 && n2.transformation) {
            if (!n2.transformation.region) throw Dt("`region` must be provided when leveraging the transformation pipeline");
            o2 = function(e3) {
              if (!e3 || !e3.transformation || !e3.transformation.region) throw Dt("`region` must be provided when leveraging the transformation pipeline");
              if ("eu" !== e3.transformation.region && "us" !== e3.transformation.region) throw Dt("`region` is required and must be one of the following: eu, us");
              var t3 = e3.appId, n3 = f(g.WithinHeaders, t3, e3.apiKey), a3 = S(r(r({ hosts: [{ url: "data.".concat(e3.transformation.region, ".algolia.com"), accept: v.ReadWrite, protocol: "https" }] }, e3), {}, { headers: r(r(r({}, n3.headers()), { "content-type": "text/plain" }), e3.headers), queryParameters: r(r({}, n3.queryParameters()), e3.queryParameters) }));
              return { transporter: a3, appId: t3, addAlgoliaAgent: function(e4, t4) {
                a3.userAgent.add({ segment: e4, version: t4 }), a3.userAgent.add({ segment: "Ingestion", version: t4 }), a3.userAgent.add({ segment: "Ingestion via Algoliasearch" });
              }, clearCache: function() {
                return Promise.all([a3.requestsCache.clear(), a3.responsesCache.clear()]).then(function() {
                });
              }, push: function(e4, t4) {
                var n4 = e4.indexName, o3 = e4.pushTaskPayload, i3 = e4.watch;
                if (!n4) throw Dt("Parameter `indexName` is required when calling `push`.");
                if (!o3) throw Dt("Parameter `pushTaskPayload` is required when calling `push`.");
                if (!o3.action) throw Dt("Parameter `pushTaskPayload.action` is required when calling `push`.");
                if (!o3.records) throw Dt("Parameter `pushTaskPayload.records` is required when calling `push`.");
                var u2 = t4 || { queryParameters: {} };
                return a3.write({ method: q, path: m("1/push/%s", n4), data: o3 }, r(r({}, u2), {}, { queryParameters: r(r({}, u2.queryParameters), {}, { watch: void 0 !== i3 }) }));
              } };
            }(r(r({}, n2), i2));
          }
          return function(e3) {
            var t3 = e3.appId, n3 = f(void 0 !== e3.authMode ? e3.authMode : g.WithinHeaders, t3, e3.apiKey), a3 = S(r(r({ hosts: [{ url: "".concat(t3, "-dsn.algolia.net"), accept: v.Read }, { url: "".concat(t3, ".algolia.net"), accept: v.Write }].concat(h([{ url: "".concat(t3, "-1.algolianet.com") }, { url: "".concat(t3, "-2.algolianet.com") }, { url: "".concat(t3, "-3.algolianet.com") }])) }, e3), {}, { headers: r(r(r({}, n3.headers()), { "content-type": "application/x-www-form-urlencoded" }), e3.headers), queryParameters: r(r({}, n3.queryParameters()), e3.queryParameters) }));
            return p({ transporter: a3, appId: t3, addAlgoliaAgent: function(e4, t4) {
              a3.userAgent.add({ segment: e4, version: t4 });
            }, clearCache: function() {
              return Promise.all([a3.requestsCache.clear(), a3.responsesCache.clear()]).then(function() {
              });
            } }, e3.methods);
          }(r(r({}, d2), {}, { methods: { search: ge, searchForFacetValues: ye, multipleBatch: pe, multipleGetObjects: me, multipleQueries: ge, copyIndex: V, copySettings: X, copySynonyms: Y, copyRules: _, moveIndex: he, listIndices: de, getLogs: ae, listClusters: fe, multipleSearchForFacetValues: ye, getApiKey: te, addApiKey: B, listApiKeys: ce, updateApiKey: je, deleteApiKey: $, restoreApiKey: we, assignUserID: G, assignUserIDs: L, getUserID: ie, searchUserIDs: Oe, listUserIDs: le, getTopUserIDs: oe, removeUserID: ve, hasPendingMappings: ue, clearDictionaryEntries: Q, deleteDictionaryEntries: ee, getDictionarySettings: ne, getAppTask: re, replaceDictionaryEntries: be, saveDictionaryEntries: Pe, searchDictionaryEntries: Ie, setDictionarySettings: xe, waitAppTask: qe, customRequest: Z, initIndex: function(e3) {
            return function(t3) {
              return r(r({}, se(e3)(t3, { methods: { batch: De, delete: Ue, findAnswers: Ke, getObject: Be, getObjects: Le, saveObject: tt, saveObjects: rt, search: ut, searchForFacetValues: st, waitTask: lt, setSettings: dt, getSettings: Ve, partialUpdateObject: Xe, partialUpdateObjects: Ye, deleteObject: ze, deleteObjects: Fe, deleteBy: Ce, clearObjects: Ae, browseObjects: Te, getObjectPosition: Ge, findObject: Me, exists: He, saveSynonym: ot, saveSynonyms: it, getSynonym: _e, searchSynonyms: ft, browseSynonyms: Se, deleteSynonym: We, clearSynonyms: Re, replaceAllObjects: Ze, replaceAllSynonyms: et, searchRules: ct, getRule: Qe, deleteRule: Je, saveRule: nt, saveRules: at, replaceAllRules: $e, browseRules: ke, clearRules: Ee } })), {}, { saveObjectsWithTransformation: jt(t3, o2), partialUpdateObjectsWithTransformation: qt(t3, o2) });
            };
          }, initAnalytics: function() {
            return function(e3) {
              return function(e4) {
                var t3 = e4.region || "us", n3 = f(g.WithinHeaders, e4.appId, e4.apiKey), a3 = S(r(r({ hosts: [{ url: "analytics.".concat(t3, ".algolia.com") }] }, e4), {}, { headers: r(r(r({}, n3.headers()), { "content-type": "application/json" }), e4.headers), queryParameters: r(r({}, n3.queryParameters()), e4.queryParameters) }));
                return p({ appId: e4.appId, transporter: a3 }, e4.methods);
              }(r(r(r({}, i2), e3), {}, { methods: { addABTest: U, getABTest: F, getABTests: J, stopABTest: W, deleteABTest: z } }));
            };
          }, initPersonalization: l2, initRecommendation: function() {
            return function(e3) {
              return d2.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."), l2()(e3);
            };
          }, getRecommendations: vt, getFrequentlyBoughtTogether: bt, getLookingSimilar: Ot, getRecommendedForYou: xt, getRelatedProducts: wt, getTrendingFacets: Pt, getTrendingItems: It } }));
        }
        return Tt.version = "4.26.0", Tt;
      });
    }
  });

  // node_modules/.pnpm/@algolia+recommend@4.27.0/node_modules/@algolia/recommend/dist/recommend.umd.js
  var require_recommend_umd = __commonJS({
    "node_modules/.pnpm/@algolia+recommend@4.27.0/node_modules/@algolia/recommend/dist/recommend.umd.js"(exports, module) {
      init_live_reload();
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self)["@algolia/recommend"] = t();
      }(exports, function() {
        "use strict";
        function e(e2, t2, r2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
        }
        function t(e2, t2) {
          var r2 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(e2);
            t2 && (n2 = n2.filter(function(t3) {
              return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
            })), r2.push.apply(r2, n2);
          }
          return r2;
        }
        function r(r2) {
          for (var n2 = 1; n2 < arguments.length; n2++) {
            var o2 = null != arguments[n2] ? arguments[n2] : {};
            n2 % 2 ? t(Object(o2), true).forEach(function(t2) {
              e(r2, t2, o2[t2]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r2, Object.getOwnPropertyDescriptors(o2)) : t(Object(o2)).forEach(function(e2) {
              Object.defineProperty(r2, e2, Object.getOwnPropertyDescriptor(o2, e2));
            });
          }
          return r2;
        }
        function n(e2, t2) {
          return function(e3) {
            if (Array.isArray(e3)) return e3;
          }(e2) || function(e3, t3) {
            if (!(Symbol.iterator in Object(e3) || "[object Arguments]" === Object.prototype.toString.call(e3))) return;
            var r2 = [], n2 = true, o2 = false, a2 = void 0;
            try {
              for (var u2, i2 = e3[Symbol.iterator](); !(n2 = (u2 = i2.next()).done) && (r2.push(u2.value), !t3 || r2.length !== t3); n2 = true) ;
            } catch (e4) {
              o2 = true, a2 = e4;
            } finally {
              try {
                n2 || null == i2.return || i2.return();
              } finally {
                if (o2) throw a2;
              }
            }
            return r2;
          }(e2, t2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }();
        }
        function o(e2) {
          return function(e3) {
            if (Array.isArray(e3)) {
              for (var t2 = 0, r2 = new Array(e3.length); t2 < e3.length; t2++) r2[t2] = e3[t2];
              return r2;
            }
          }(e2) || function(e3) {
            if (Symbol.iterator in Object(e3) || "[object Arguments]" === Object.prototype.toString.call(e3)) return Array.from(e3);
          }(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
          }();
        }
        function a() {
          var e2 = "undefined" != typeof globalThis ? globalThis : void 0;
          return e2 && e2.scheduler && e2.scheduler.yield ? e2.scheduler.yield().catch(function(e3) {
            return console.error("Failed to yield to main: ", e3), new Promise(function(e4) {
              return setTimeout(e4, 0);
            });
          }) : new Promise(function(e3) {
            return setTimeout(e3, 0);
          });
        }
        function u(e2) {
          var t2, r2 = "algoliasearch-client-js-".concat(e2.key), o2 = function() {
            return void 0 === t2 && (t2 = e2.localStorage || window.localStorage), t2;
          }, u2 = function() {
            return JSON.parse(o2().getItem(r2) || "{}");
          }, i2 = function(e3) {
            o2().setItem(r2, JSON.stringify(e3));
          }, s2 = function() {
            var t3 = e2.timeToLive ? 1e3 * e2.timeToLive : null, r3 = u2(), o3 = (/* @__PURE__ */ new Date()).getTime();
            return Object.fromEntries(Object.entries(r3).filter(function(e3) {
              var r4 = n(e3, 2)[1];
              return !(!r4 || void 0 === r4.timestamp) && (!t3 || r4.timestamp + t3 >= o3);
            }));
          };
          return { get: function(e3, t3) {
            var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } };
            return a().then(function() {
              var n2 = s2(), o3 = n2[JSON.stringify(e3)];
              return i2(n2), o3 ? o3.value : t3().then(function(e4) {
                return r3.miss(e4).then(function() {
                  return e4;
                });
              });
            });
          }, set: function(e3, t3) {
            return a().then(function() {
              var n2 = u2();
              return n2[JSON.stringify(e3)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: t3 }, o2().setItem(r2, JSON.stringify(n2)), t3;
            });
          }, delete: function(e3) {
            return a().then(function() {
              var t3 = u2();
              delete t3[JSON.stringify(e3)], o2().setItem(r2, JSON.stringify(t3));
            });
          }, clear: function() {
            return Promise.resolve().then(function() {
              o2().removeItem(r2);
            });
          } };
        }
        function i(e2) {
          var t2 = o(e2.caches), r2 = t2.shift();
          return void 0 === r2 ? { get: function(e3, t3) {
            var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } }, o2 = t3();
            return o2.then(function(e4) {
              return Promise.all([e4, r3.miss(e4)]);
            }).then(function(e4) {
              return n(e4, 1)[0];
            });
          }, set: function(e3, t3) {
            return Promise.resolve(t3);
          }, delete: function(e3) {
            return Promise.resolve();
          }, clear: function() {
            return Promise.resolve();
          } } : { get: function(e3, n2) {
            var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } };
            return r2.get(e3, n2, o2).catch(function() {
              return i({ caches: t2 }).get(e3, n2, o2);
            });
          }, set: function(e3, n2) {
            return r2.set(e3, n2).catch(function() {
              return i({ caches: t2 }).set(e3, n2);
            });
          }, delete: function(e3) {
            return r2.delete(e3).catch(function() {
              return i({ caches: t2 }).delete(e3);
            });
          }, clear: function() {
            return r2.clear().catch(function() {
              return i({ caches: t2 }).clear();
            });
          } };
        }
        function s() {
          var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
          return { get: function(r2, n2) {
            var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } }, a2 = JSON.stringify(r2);
            if (a2 in t2) return Promise.resolve(e2.serializable ? JSON.parse(t2[a2]) : t2[a2]);
            var u2 = n2(), i2 = o2 && o2.miss || function() {
              return Promise.resolve();
            };
            return u2.then(function(e3) {
              return i2(e3);
            }).then(function() {
              return u2;
            });
          }, set: function(r2, n2) {
            return t2[JSON.stringify(r2)] = e2.serializable ? JSON.stringify(n2) : n2, Promise.resolve(n2);
          }, delete: function(e3) {
            return delete t2[JSON.stringify(e3)], Promise.resolve();
          }, clear: function() {
            return t2 = {}, Promise.resolve();
          } };
        }
        function c(e2) {
          for (var t2 = e2.length - 1; t2 > 0; t2--) {
            var r2 = Math.floor(Math.random() * (t2 + 1)), n2 = e2[t2];
            e2[t2] = e2[r2], e2[r2] = n2;
          }
          return e2;
        }
        var l = { WithinQueryParameters: 0, WithinHeaders: 1 }, f = 1, d = 2, m = 3;
        function h(e2, t2) {
          var r2 = e2 || {}, n2 = r2.data || {};
          return Object.keys(r2).forEach(function(e3) {
            -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e3) && (n2[e3] = r2[e3]);
          }), { data: Object.entries(n2).length > 0 ? n2 : void 0, timeout: r2.timeout || t2, headers: r2.headers || {}, queryParameters: r2.queryParameters || {}, cacheable: r2.cacheable };
        }
        var g = { Read: 1, Write: 2, Any: 3 }, p = 1, v = 2, y = 3;
        function b(e2) {
          var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
          return r(r({}, e2), {}, { status: t2, lastUpdate: Date.now() });
        }
        function O(e2) {
          return "string" == typeof e2 ? { protocol: "https", url: e2, accept: g.Any } : { protocol: e2.protocol || "https", url: e2.url, accept: e2.accept || g.Any };
        }
        var P = "GET", q = "POST";
        function T(e2, t2) {
          return Promise.all(t2.map(function(t3) {
            return e2.get(t3, function() {
              return Promise.resolve(b(t3));
            });
          })).then(function(e3) {
            var r2 = e3.filter(function(e4) {
              return function(e5) {
                return e5.status === p || Date.now() - e5.lastUpdate > 12e4;
              }(e4);
            }), n2 = e3.filter(function(e4) {
              return function(e5) {
                return e5.status === y && Date.now() - e5.lastUpdate <= 12e4;
              }(e4);
            }), a2 = [].concat(o(r2), o(n2));
            return { getTimeout: function(e4, t3) {
              return (0 === n2.length && 0 === e4 ? 1 : n2.length + 3 + e4) * t3;
            }, statelessHosts: a2.length > 0 ? a2.map(function(e4) {
              return O(e4);
            }) : t2 };
          });
        }
        function S(e2, t2, n2, a2) {
          var u2 = [], i2 = function(e3, t3) {
            if (e3.method === P || void 0 === e3.data && void 0 === t3.data) return;
            var n3 = Array.isArray(e3.data) ? e3.data : r(r({}, e3.data), t3.data);
            return JSON.stringify(n3);
          }(n2, a2), s2 = function(e3, t3) {
            var n3 = r(r({}, e3.headers), t3.headers), o2 = {};
            return Object.keys(n3).forEach(function(e4) {
              var t4 = n3[e4];
              o2[e4.toLowerCase()] = t4;
            }), o2;
          }(e2, a2), c2 = n2.method, l2 = n2.method !== P ? {} : r(r({}, n2.data), a2.data), f2 = r(r(r({ "x-algolia-agent": e2.userAgent.value }, e2.queryParameters), l2), a2.queryParameters), d2 = 0, m2 = function t3(r2, o2) {
            var l3 = r2.pop();
            if (void 0 === l3) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .", transporterStackTrace: A(u2) };
            var m3 = { data: i2, headers: s2, method: c2, url: j(l3, n2.path, f2), connectTimeout: o2(d2, e2.timeouts.connect), responseTimeout: o2(d2, a2.timeout) }, h2 = function(e3) {
              var t4 = { request: m3, response: e3, host: l3, triesLeft: r2.length };
              return u2.push(t4), t4;
            }, g2 = { onSuccess: function(e3) {
              return function(e4) {
                try {
                  return JSON.parse(e4.content);
                } catch (t4) {
                  throw /* @__PURE__ */ function(e5, t5) {
                    return { name: "DeserializationError", message: e5, response: t5 };
                  }(t4.message, e4);
                }
              }(e3);
            }, onRetry: function(n3) {
              var a3 = h2(n3);
              return n3.isTimedOut && d2++, Promise.all([e2.logger.info("Retryable failure", C(a3)), e2.hostsCache.set(l3, b(l3, n3.isTimedOut ? y : v))]).then(function() {
                return t3(r2, o2);
              });
            }, onFail: function(e3) {
              throw h2(e3), function(e4, t4) {
                var r3 = e4.content, n3 = e4.status, o3 = r3;
                try {
                  o3 = JSON.parse(r3).message;
                } catch (e5) {
                }
                return /* @__PURE__ */ function(e5, t5, r4) {
                  return { name: "ApiError", message: e5, status: t5, transporterStackTrace: r4 };
                }(o3, n3, t4);
              }(e3, A(u2));
            } };
            return e2.requester.send(m3).then(function(e3) {
              return function(e4, t4) {
                return function(e5) {
                  var t5 = e5.status;
                  return e5.isTimedOut || function(e6) {
                    var t6 = e6.isTimedOut, r3 = e6.status;
                    return !t6 && 0 == ~~r3;
                  }(e5) || 2 != ~~(t5 / 100) && 4 != ~~(t5 / 100);
                }(e4) ? t4.onRetry(e4) : 2 == ~~(e4.status / 100) ? t4.onSuccess(e4) : t4.onFail(e4);
              }(e3, g2);
            });
          };
          return T(e2.hostsCache, t2).then(function(e3) {
            return m2(o(e3.statelessHosts).reverse(), e3.getTimeout);
          });
        }
        function w(e2) {
          var t2 = { value: "Algolia for JavaScript (".concat(e2, ")"), add: function(e3) {
            var r2 = "; ".concat(e3.segment).concat(void 0 !== e3.version ? " (".concat(e3.version, ")") : "");
            return -1 === t2.value.indexOf(r2) && (t2.value = "".concat(t2.value).concat(r2)), t2;
          } };
          return t2;
        }
        function j(e2, t2, r2) {
          var n2, o2 = (n2 = r2, Object.keys(n2).map(function(e3) {
            return function(e4) {
              for (var t4 = arguments.length, r3 = new Array(t4 > 1 ? t4 - 1 : 0), n3 = 1; n3 < t4; n3++) r3[n3 - 1] = arguments[n3];
              var o3 = 0;
              return e4.replace(/%s/g, function() {
                return encodeURIComponent(r3[o3++]);
              });
            }("%s=%s", e3, (t3 = n2[e3], "[object Object]" === Object.prototype.toString.call(t3) || "[object Array]" === Object.prototype.toString.call(t3) ? JSON.stringify(n2[e3]) : n2[e3]));
            var t3;
          }).join("&")), a2 = "".concat(e2.protocol, "://").concat(e2.url, "/").concat("/" === t2.charAt(0) ? t2.substr(1) : t2);
          return o2.length && (a2 += "?".concat(o2)), a2;
        }
        function A(e2) {
          return e2.map(function(e3) {
            return C(e3);
          });
        }
        function C(e2) {
          var t2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
          return r(r({}, e2), {}, { request: r(r({}, e2.request), {}, { headers: r(r({}, e2.request.headers), t2) }) });
        }
        var k = function(e2) {
          var t2 = e2.appId, o2 = /* @__PURE__ */ function(e3, t3, r2) {
            var n2 = { "x-algolia-api-key": r2, "x-algolia-application-id": t3 };
            return { headers: function() {
              return e3 === l.WithinHeaders ? n2 : {};
            }, queryParameters: function() {
              return e3 === l.WithinQueryParameters ? n2 : {};
            } };
          }(void 0 !== e2.authMode ? e2.authMode : l.WithinHeaders, t2, e2.apiKey), a2 = function(e3) {
            var t3 = e3.hostsCache, r2 = e3.logger, o3 = e3.requester, a3 = e3.requestsCache, u2 = e3.responsesCache, i2 = e3.timeouts, s2 = e3.userAgent, c2 = e3.hosts, l2 = e3.queryParameters, f2 = { hostsCache: t3, logger: r2, requester: o3, requestsCache: a3, responsesCache: u2, timeouts: i2, userAgent: s2, headers: e3.headers, queryParameters: l2, hosts: c2.map(function(e4) {
              return O(e4);
            }), read: function(e4, t4) {
              var r3 = h(t4, f2.timeouts.read), o4 = function() {
                return S(f2, f2.hosts.filter(function(e5) {
                  return 0 != (e5.accept & g.Read);
                }), e4, r3);
              };
              if (true !== (void 0 !== r3.cacheable ? r3.cacheable : e4.cacheable)) return o4();
              var a4 = { request: e4, mappedRequestOptions: r3, transporter: { queryParameters: f2.queryParameters, headers: f2.headers } };
              return f2.responsesCache.get(a4, function() {
                return f2.requestsCache.get(a4, function() {
                  return f2.requestsCache.set(a4, o4()).then(function(e5) {
                    return Promise.all([f2.requestsCache.delete(a4), e5]);
                  }, function(e5) {
                    return Promise.all([f2.requestsCache.delete(a4), Promise.reject(e5)]);
                  }).then(function(e5) {
                    var t5 = n(e5, 2);
                    t5[0];
                    return t5[1];
                  });
                });
              }, { miss: function(e5) {
                return f2.responsesCache.set(a4, e5);
              } });
            }, write: function(e4, t4) {
              return S(f2, f2.hosts.filter(function(e5) {
                return 0 != (e5.accept & g.Write);
              }), e4, h(t4, f2.timeouts.write));
            } };
            return f2;
          }(r(r({ hosts: [{ url: "".concat(t2, "-dsn.algolia.net"), accept: g.Read }, { url: "".concat(t2, ".algolia.net"), accept: g.Write }].concat(c([{ url: "".concat(t2, "-1.algolianet.com") }, { url: "".concat(t2, "-2.algolianet.com") }, { url: "".concat(t2, "-3.algolianet.com") }])) }, e2), {}, { headers: r(r(r({}, o2.headers()), { "content-type": "application/x-www-form-urlencoded" }), e2.headers), queryParameters: r(r({}, o2.queryParameters()), e2.queryParameters) }));
          return function(e3, t3) {
            return t3 ? (Object.keys(t3).forEach(function(r2) {
              e3[r2] = t3[r2](e3);
            }), e3) : e3;
          }({ transporter: a2, appId: t2, addAlgoliaAgent: function(e3, t3) {
            a2.userAgent.add({ segment: e3, version: t3 });
          }, clearCache: function() {
            return Promise.all([a2.requestsCache.clear(), a2.responsesCache.clear()]).then(function() {
            });
          } }, e2.methods);
        }, N = function(e2) {
          return function(t2, n2) {
            var o2 = t2.map(function(e3) {
              return r(r({}, e3), {}, { threshold: e3.threshold || 0 });
            });
            return e2.transporter.read({ method: q, path: "1/indexes/*/recommendations", data: { requests: o2 }, cacheable: true }, n2);
          };
        }, R = function(e2) {
          return function(t2, n2) {
            return N(e2)(t2.map(function(e3) {
              return r(r({}, e3), {}, { fallbackParameters: {}, model: "bought-together" });
            }), n2);
          };
        }, x = function(e2) {
          return function(t2, n2) {
            return N(e2)(t2.map(function(e3) {
              return r(r({}, e3), {}, { model: "related-products" });
            }), n2);
          };
        }, J = function(e2) {
          return function(t2, n2) {
            var o2 = t2.map(function(e3) {
              return r(r({}, e3), {}, { model: "trending-facets", threshold: e3.threshold || 0 });
            });
            return e2.transporter.read({ method: q, path: "1/indexes/*/recommendations", data: { requests: o2 }, cacheable: true }, n2);
          };
        }, E = function(e2) {
          return function(t2, n2) {
            var o2 = t2.map(function(e3) {
              return r(r({}, e3), {}, { model: "trending-items", threshold: e3.threshold || 0 });
            });
            return e2.transporter.read({ method: q, path: "1/indexes/*/recommendations", data: { requests: o2 }, cacheable: true }, n2);
          };
        }, I = function(e2) {
          return function(t2, n2) {
            return N(e2)(t2.map(function(e3) {
              return r(r({}, e3), {}, { model: "looking-similar" });
            }), n2);
          };
        }, D = function(e2) {
          return function(t2, n2) {
            var o2 = t2.map(function(e3) {
              return r(r({}, e3), {}, { model: "recommended-for-you", threshold: e3.threshold || 0 });
            });
            return e2.transporter.read({ method: q, path: "1/indexes/*/recommendations", data: { requests: o2 }, cacheable: true }, n2);
          };
        };
        function F(e2, t2, n2) {
          var o2, a2 = { appId: e2, apiKey: t2, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(e3) {
            return new Promise(function(t3) {
              var r2 = new XMLHttpRequest();
              r2.open(e3.method, e3.url, true), Object.keys(e3.headers).forEach(function(t4) {
                return r2.setRequestHeader(t4, e3.headers[t4]);
              });
              var n3, o3 = function(e4, n4) {
                return setTimeout(function() {
                  r2.abort(), t3({ status: 0, content: n4, isTimedOut: true });
                }, 1e3 * e4);
              }, a3 = o3(e3.connectTimeout, "Connection timeout");
              r2.onreadystatechange = function() {
                r2.readyState > r2.OPENED && void 0 === n3 && (clearTimeout(a3), n3 = o3(e3.responseTimeout, "Socket timeout"));
              }, r2.onerror = function() {
                0 === r2.status && (clearTimeout(a3), clearTimeout(n3), t3({ content: r2.responseText || "Network request failed", status: r2.status, isTimedOut: false }));
              }, r2.onload = function() {
                clearTimeout(a3), clearTimeout(n3), t3({ content: r2.responseText, status: r2.status, isTimedOut: false });
              }, r2.send(e3.data);
            });
          } }, logger: (o2 = m, { debug: function(e3, t3) {
            return f >= o2 && console.debug(e3, t3), Promise.resolve();
          }, info: function(e3, t3) {
            return d >= o2 && console.info(e3, t3), Promise.resolve();
          }, error: function(e3, t3) {
            return console.error(e3, t3), Promise.resolve();
          } }), responsesCache: s(), requestsCache: s({ serializable: false }), hostsCache: i({ caches: [u({ key: "".concat("4.26.0", "-").concat(e2) }), s()] }), userAgent: w("4.26.0").add({ segment: "Recommend", version: "4.26.0" }).add({ segment: "Browser" }), authMode: l.WithinQueryParameters };
          return k(r(r(r({}, a2), n2), {}, { methods: { getFrequentlyBoughtTogether: R, getRecommendations: N, getRelatedProducts: x, getTrendingFacets: J, getTrendingItems: E, getLookingSimilar: I, getRecommendedForYou: D } }));
        }
        return F.version = "4.26.0", F.getFrequentlyBoughtTogether = R, F.getRecommendations = N, F.getRelatedProducts = x, F.getTrendingFacets = J, F.getTrendingItems = E, F.getLookingSimilar = I, F.getRecommendedForYou = D, F;
      });
    }
  });

  // src/index.ts
  init_live_reload();

  // src/api/public-api.ts
  init_live_reload();

  // src/render/template.ts
  init_live_reload();

  // src/utils/sanitize.ts
  init_live_reload();
  function sanitizeUrl(url) {
    const trimmed = url.trim();
    const lower = trimmed.toLowerCase();
    if (lower.startsWith("javascript:") || lower.startsWith("data:") || lower.startsWith("vbscript:")) {
      console.warn("[wf-algolia] Blocked unsafe URL:", trimmed);
      return "#";
    }
    return trimmed;
  }
  function sanitizeHtml(html) {
    let clean = html.replace(/<(?!\/?(?:em|mark)\b)[^>]*>/gi, "");
    clean = clean.replace(/<(em|mark)\s+[^>]*>/gi, "<$1>");
    return clean;
  }
  function escapeFilterValue(value) {
    return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }
  function getNestedValue(obj, path) {
    return path.split(".").reduce((curr, key) => curr?.[key], obj);
  }

  // src/render/formatters.ts
  init_live_reload();
  function formatValue(value, format) {
    if (value == null || value === "") return "";
    switch (format) {
      case "rating": {
        const num = parseFloat(value);
        return isNaN(num) ? "" : `\u2605 ${num.toFixed(1)}`;
      }
      case "year": {
        const str = String(value);
        if (/^\d{4}$/.test(str)) return str;
        const date = new Date(str);
        return isNaN(date.getTime()) ? "" : String(date.getFullYear());
      }
      case "currency": {
        const num = parseFloat(value);
        return isNaN(num) ? "" : `$${num.toFixed(2)}`;
      }
      case "number": {
        const num = parseFloat(value);
        return isNaN(num) ? "" : num.toLocaleString();
      }
      default:
        return String(value);
    }
  }

  // src/render/condition.ts
  init_live_reload();
  var OPERATORS = ["!==", "===", ">=", "<=", ">", "<"];
  function evaluateCondition(condition, hit) {
    const opMatch = OPERATORS.find((op) => condition.includes(op));
    if (!opMatch) {
      return !!getNestedValue(hit, condition.trim());
    }
    const [fieldPart, valuePart] = condition.split(opMatch).map((s) => s.trim());
    const fieldValue = getNestedValue(hit, fieldPart);
    const compareValue = valuePart.replace(/^["']|["']$/g, "");
    const fieldNum = parseFloat(fieldValue);
    const compareNum = parseFloat(compareValue);
    const bothNumeric = !isNaN(fieldNum) && !isNaN(compareNum);
    switch (opMatch) {
      case "===":
        return String(fieldValue) === compareValue;
      case "!==":
        return String(fieldValue) !== compareValue;
      case ">":
        return bothNumeric && fieldNum > compareNum;
      case ">=":
        return bothNumeric && fieldNum >= compareNum;
      case "<":
        return bothNumeric && fieldNum < compareNum;
      case "<=":
        return bothNumeric && fieldNum <= compareNum;
      default:
        return false;
    }
  }

  // src/utils/dom.ts
  init_live_reload();
  function show(el, display = "block") {
    if (el) el.style.display = display;
  }
  function hide(el) {
    if (el) el.style.display = "none";
  }

  // src/utils/webflow.ts
  init_live_reload();

  // node_modules/.pnpm/@finsweet+ts-utils@0.40.0/node_modules/@finsweet/ts-utils/dist/webflow/index.js
  init_live_reload();

  // node_modules/.pnpm/@finsweet+ts-utils@0.40.0/node_modules/@finsweet/ts-utils/dist/webflow/getSiteId.js
  init_live_reload();
  var getSiteId = (page = document) => page.documentElement.getAttribute("data-wf-site");

  // node_modules/.pnpm/@finsweet+ts-utils@0.40.0/node_modules/@finsweet/ts-utils/dist/webflow/restartWebflow.js
  init_live_reload();
  var restartWebflow = async (modules) => {
    const { Webflow } = window;
    if (!Webflow || !("destroy" in Webflow) || !("ready" in Webflow) || !("require" in Webflow))
      return;
    if (modules && !modules.length)
      return;
    if (!modules) {
      Webflow.destroy();
      Webflow.ready();
    }
    if (!modules || modules.includes("ix2")) {
      const ix2 = Webflow.require("ix2");
      if (ix2) {
        const { store, actions } = ix2;
        const { eventState } = store.getState().ixSession;
        const stateEntries = Object.entries(eventState);
        if (!modules)
          ix2.destroy();
        ix2.init();
        await Promise.all(stateEntries.map((state) => store.dispatch(actions.eventStateChanged(...state))));
      }
    }
    if (!modules || modules.includes("commerce")) {
      const commerce = Webflow.require("commerce");
      const siteId = getSiteId();
      if (commerce && siteId) {
        commerce.destroy();
        commerce.init({ siteId, apiUrl: "https://render.webflow.com" });
      }
    }
    if (modules?.includes("lightbox"))
      Webflow.require("lightbox")?.ready();
    if (modules?.includes("slider")) {
      const slider = Webflow.require("slider");
      if (slider) {
        slider.redraw();
        slider.ready();
      }
    }
    if (modules?.includes("tabs"))
      Webflow.require("tabs")?.redraw();
    return new Promise((resolve) => Webflow.push(() => resolve(void 0)));
  };

  // src/utils/webflow.ts
  function restartWebflowInteractions() {
    try {
      restartWebflow(["ix2"]);
    } catch (err) {
      console.warn("[wf-algolia] Could not restart Webflow interactions:", err);
    }
  }

  // src/tracking/insights.ts
  init_live_reload();

  // node_modules/.pnpm/search-insights@2.17.3/node_modules/search-insights/index-browser.mjs
  init_live_reload();

  // node_modules/.pnpm/search-insights@2.17.3/node_modules/search-insights/dist/search-insights-browser.mjs
  init_live_reload();
  var version = "2.17.3";
  function extractAdditionalParams(e) {
    return e.reduce(function(e2, t) {
      var n = e2.events, e2 = e2.additionalParams;
      return "index" in t ? { additionalParams: e2, events: n.concat([t]) } : { events: n, additionalParams: t };
    }, { events: [], additionalParams: void 0 });
  }
  var supportsCookies = function() {
    try {
      return Boolean(navigator.cookieEnabled);
    } catch (e) {
      return false;
    }
  };
  var supportsSendBeacon = function() {
    try {
      return Boolean(navigator.sendBeacon);
    } catch (e) {
      return false;
    }
  };
  var supportsXMLHttpRequest = function() {
    try {
      return Boolean(XMLHttpRequest);
    } catch (e) {
      return false;
    }
  };
  var supportsNativeFetch = function() {
    try {
      return void 0 !== fetch;
    } catch (e) {
      return false;
    }
  };
  var LocalStorage = function() {
  };
  function ensureLocalStorage() {
    try {
      var e = "__test_localStorage__";
      return globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), globalThis.localStorage;
    } catch (e2) {
    }
  }
  LocalStorage.get = function(e) {
    var t = null == (t = this.store) ? void 0 : t.getItem(e);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch (e2) {
      return null;
    }
  }, LocalStorage.set = function(t, e) {
    var n;
    try {
      null != (n = this.store) && n.setItem(t, JSON.stringify(e));
    } catch (e2) {
      console.error("Unable to set " + t + " in localStorage, storage may be full.");
    }
  }, LocalStorage.remove = function(e) {
    var t;
    null != (t = this.store) && t.removeItem(e);
  }, LocalStorage.store = ensureLocalStorage();
  var STORE = "AlgoliaObjectQueryCache";
  var LIMIT = 5e3;
  var FREE = 1e3;
  function getCache() {
    var e;
    return null != (e = LocalStorage.get(STORE)) ? e : {};
  }
  function setCache(e) {
    LocalStorage.set(STORE, limited(e));
  }
  function limited(e) {
    return Object.keys(e).length > LIMIT ? purgeOldest(e) : e;
  }
  function purgeOldest(e) {
    e = Object.entries(e).sort(function(e2, t) {
      e2 = e2[1][1];
      return t[1][1] - e2;
    });
    return e.slice(0, e.length - FREE - 1).reduce(function(e2, t) {
      var n = t[0], t = t[1];
      return Object.assign(Object.assign({}, e2), ((e2 = {})[n] = t, e2));
    }, {});
  }
  function makeKey(e, t) {
    return e + "_" + t;
  }
  function storeQueryForObject(e, t, n) {
    var i = getCache();
    i[makeKey(e, t)] = [n, Date.now()], setCache(i);
  }
  function getQueryForObject(e, t) {
    return getCache()[makeKey(e, t)];
  }
  function removeQueryForObjects(t, e) {
    var n = getCache();
    e.forEach(function(e2) {
      delete n[makeKey(t, e2)];
    }), setCache(n);
  }
  var isUndefined = function(e) {
    return void 0 === e;
  };
  var isNumber = function(e) {
    return "number" == typeof e;
  };
  var isFunction = function(e) {
    return "function" == typeof e;
  };
  var isPromise = function(e) {
    return "function" == typeof (null == e ? void 0 : e.then);
  };
  function getFunctionalInterface(i) {
    return function(e) {
      for (var t = [], n = arguments.length - 1; 0 < n--; ) t[n] = arguments[n + 1];
      if (e && isFunction(i[e])) return i[e].apply(i, t);
      console.warn("The method `" + e + "` doesn't exist.");
    };
  }
  var DEFAULT_ALGOLIA_AGENTS = ["insights-js (" + version + ")", "insights-js-browser-esm (" + version + ")"];
  function addAlgoliaAgent(e) {
    -1 === this._ua.indexOf(e) && this._ua.push(e);
  }
  function getVersion(e) {
    return isFunction(e) && e(this.version), this.version;
  }
  function __rest(e, t) {
    var n = {};
    for (r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  }
  function addQueryId(e) {
    return e.map(function(i) {
      var r, e2;
      return !isValidEventForQueryIdLookup(i) || (r = [], e2 = null == (e2 = i.objectIDs) ? void 0 : e2.map(function(e3, t) {
        var n = null == (n = i.objectData) ? void 0 : n[t];
        return null != n && n.queryID ? n : ((t = (null != (t = getQueryForObject(i.index, e3)) ? t : [])[0]) && r.push(e3), Object.assign(Object.assign({}, n), { queryID: t }));
      }), 0 === r.length) ? i : Object.assign(Object.assign({}, i), { objectData: e2, objectIDsWithInferredQueryID: r });
    });
  }
  function isValidEventForQueryIdLookup(e) {
    return !e.queryID && "conversion" === e.eventType;
  }
  function makeSendEvents(r) {
    return function(e, t) {
      var i = this;
      if (this._userHasOptedOut) return Promise.resolve(false);
      if (!(!isUndefined(this._apiKey) && !isUndefined(this._appId) || (null == (n = null == t ? void 0 : t.headers) ? void 0 : n["X-Algolia-Application-Id"]) && (null == (n = null == t ? void 0 : t.headers) ? void 0 : n["X-Algolia-API-Key"]))) throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters or provide custom credentials in additional parameters.");
      !this._userToken && this._anonymousUserToken && this.setAnonymousUserToken(true);
      var n = (null != t && t.inferQueryID ? addQueryId(e) : e).map(function(e2) {
        var t2 = e2.filters, n2 = __rest(e2, ["filters"]), e2 = Object.assign(Object.assign({}, n2), { userToken: null != (n2 = null == e2 ? void 0 : e2.userToken) ? n2 : i._userToken, authenticatedUserToken: null != (n2 = null == e2 ? void 0 : e2.authenticatedUserToken) ? n2 : i._authenticatedUserToken });
        return isUndefined(t2) || (e2.filters = t2.map(encodeURIComponent)), e2;
      });
      return 0 === n.length ? Promise.resolve(false) : (e = sendRequest(r, this._ua, this._endpointOrigin, n, this._appId, this._apiKey, null == t ? void 0 : t.headers), isPromise(e) ? e.then(purgePurchased(n)) : e);
    };
  }
  function purgePurchased(t) {
    return function(e) {
      return e && t.filter(function(e2) {
        var t2 = e2.eventType, n = e2.eventSubtype, e2 = e2.objectIDs;
        return "conversion" === t2 && "purchase" === n && (null == e2 ? void 0 : e2.length);
      }).forEach(function(e2) {
        return removeQueryForObjects(e2.index, e2.objectIDs);
      }), e;
    };
  }
  function sendRequest(e, t, n, i, r, o, s) {
    var a = (s = void 0 === s ? {} : s)["X-Algolia-Application-Id"], c = s["X-Algolia-API-Key"], s = __rest(s, ["X-Algolia-Application-Id", "X-Algolia-API-Key"]), u = Object.assign({ "X-Algolia-Application-Id": null != a ? a : r, "X-Algolia-API-Key": null != c ? c : o, "X-Algolia-Agent": encodeURIComponent(t.join("; ")) }, s);
    return e(n + "/1/events?" + Object.keys(u).map(function(e2) {
      return e2 + "=" + u[e2];
    }).join("&"), { events: i });
  }
  function createUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
      var t = 16 * Math.random() | 0;
      return ("x" === e ? t : 3 & t | 8).toString(16);
    });
  }
  var COOKIE_KEY = "_ALGOLIA";
  var MONTH = 2592e6;
  var setCookie = function(e, t, n) {
    var i = /* @__PURE__ */ new Date(), n = (i.setTime(i.getTime() + n), "expires=" + i.toUTCString());
    document.cookie = e + "=" + t + ";" + n + ";path=/";
  };
  var getCookie = function(e) {
    for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
      for (var r = n[i]; " " === r.charAt(0); ) r = r.substring(1);
      if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
    }
    return "";
  };
  function checkIfAnonymousToken(e) {
    return "number" != typeof e && 0 === e.indexOf("anonymous-");
  }
  function saveTokenAsCookie() {
    var e = getCookie(COOKIE_KEY);
    !this._userToken || e && "" !== e && 0 === e.indexOf("anonymous-") || setCookie(COOKIE_KEY, this._userToken, this._cookieDuration);
  }
  function setAnonymousUserToken(e) {
    (e = void 0 !== e && e) ? this.setUserToken("anonymous-" + createUUID()) : supportsCookies() && ((e = getCookie(COOKIE_KEY)) && "" !== e && 0 === e.indexOf("anonymous-") ? this.setUserToken(e) : (e = this.setUserToken("anonymous-" + createUUID()), setCookie(COOKIE_KEY, e, this._cookieDuration)));
  }
  function setUserToken(e) {
    return this._userToken = e, isFunction(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken), this._userToken;
  }
  function getUserToken(e, t) {
    return isFunction(t) && t(null, this._userToken), this._userToken;
  }
  function onUserTokenChange(e, t) {
    this._onUserTokenChangeCallback = e, t && t.immediate && isFunction(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken);
  }
  function setAuthenticatedUserToken(e) {
    return this._authenticatedUserToken = e, isFunction(this._onAuthenticatedUserTokenChangeCallback) && this._onAuthenticatedUserTokenChangeCallback(this._authenticatedUserToken), this._authenticatedUserToken;
  }
  function getAuthenticatedUserToken(e, t) {
    return isFunction(t) && t(null, this._authenticatedUserToken), this._authenticatedUserToken;
  }
  function onAuthenticatedUserTokenChange(e, t) {
    this._onAuthenticatedUserTokenChangeCallback = e, t && t.immediate && isFunction(this._onAuthenticatedUserTokenChangeCallback) && this._onAuthenticatedUserTokenChangeCallback(this._authenticatedUserToken);
  }
  function addEventType(t, e) {
    return e.map(function(e2) {
      return Object.assign({ eventType: t }, e2);
    });
  }
  function addEventTypeAndSubtype(t, n, e) {
    return e.map(function(e2) {
      return Object.assign({ eventType: t, eventSubtype: n }, e2);
    });
  }
  function clickedObjectIDsAfterSearch() {
    for (var i = this, e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), r = n.events, n = n.additionalParams;
    return r.forEach(function(e2) {
      var t2 = e2.index, n2 = e2.queryID;
      return e2.objectIDs.forEach(function(e3) {
        return !i._userHasOptedOut && storeQueryForObject(t2, e3, n2);
      });
    }), this.sendEvents(addEventType("click", r), n);
  }
  function clickedObjectIDs() {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, n = n.additionalParams;
    return this.sendEvents(addEventType("click", i), n);
  }
  function clickedFilters() {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, n = n.additionalParams;
    return this.sendEvents(addEventType("click", i), n);
  }
  function convertedObjectIDsAfterSearch() {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, n = n.additionalParams;
    return this.sendEvents(addEventType("conversion", i), n);
  }
  function addedToCartObjectIDsAfterSearch() {
    for (var o = this, e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, n = n.additionalParams;
    return i.forEach(function(e2) {
      var n2 = e2.index, i2 = e2.queryID, t2 = e2.objectIDs, r = e2.objectData;
      return t2.forEach(function(e3, t3) {
        t3 = null != (t3 = null == (t3 = null == r ? void 0 : r[t3]) ? void 0 : t3.queryID) ? t3 : i2;
        !o._userHasOptedOut && t3 && storeQueryForObject(n2, e3, t3);
      });
    }), this.sendEvents(addEventTypeAndSubtype("conversion", "addToCart", i), n);
  }
  function purchasedObjectIDsAfterSearch() {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, n = n.additionalParams;
    return this.sendEvents(addEventTypeAndSubtype("conversion", "purchase", i), n);
  }
  function convertedObjectIDs() {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, n = n.additionalParams;
    return this.sendEvents(addEventType("conversion", i), n);
  }
  function addedToCartObjectIDs() {
    for (var r = this, e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, n = n.additionalParams;
    return i.forEach(function(e2) {
      var n2 = e2.index, t2 = e2.objectIDs, i2 = e2.objectData;
      return t2.forEach(function(e3, t3) {
        t3 = null == (t3 = null == i2 ? void 0 : i2[t3]) ? void 0 : t3.queryID;
        !r._userHasOptedOut && t3 && storeQueryForObject(n2, e3, t3);
      });
    }), this.sendEvents(addEventTypeAndSubtype("conversion", "addToCart", i), n);
  }
  function purchasedObjectIDs() {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, n = n.additionalParams;
    return this.sendEvents(addEventTypeAndSubtype("conversion", "purchase", i), n);
  }
  function convertedFilters() {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, n = n.additionalParams;
    return this.sendEvents(addEventType("conversion", i), n);
  }
  var SUPPORTED_REGIONS = ["de", "us"];
  function init(e) {
    var t;
    if (!isUndefined((e = void 0 === e ? {} : e).region) && -1 === SUPPORTED_REGIONS.indexOf(e.region)) throw new Error("optional region is incorrect, please provide either one of: " + SUPPORTED_REGIONS.join(", ") + ".");
    if (!(isUndefined(e.cookieDuration) || isNumber(e.cookieDuration) && isFinite(e.cookieDuration) && Math.floor(e.cookieDuration) === e.cookieDuration)) throw new Error("optional cookieDuration is incorrect, expected an integer.");
    setOptions(this, e, { _userHasOptedOut: Boolean(e.userHasOptedOut), _region: e.region, _host: e.host, _anonymousUserToken: null == (t = e.anonymousUserToken) || t, _useCookie: null != (t = e.useCookie) && t, _cookieDuration: e.cookieDuration || 6 * MONTH }), this._endpointOrigin = this._host || (this._region ? "https://insights." + this._region + ".algolia.io" : "https://insights.algolia.io"), this._ua = [].concat(DEFAULT_ALGOLIA_AGENTS), e.authenticatedUserToken && this.setAuthenticatedUserToken(e.authenticatedUserToken), e.userToken ? this.setUserToken(e.userToken) : this._userToken || this._userHasOptedOut || !this._useCookie ? checkIfTokenNeedsToBeSaved(this) && this.saveTokenAsCookie() : this.setAnonymousUserToken();
  }
  function setOptions(e, t, n) {
    var i = t.partial, r = __rest(t, ["partial"]);
    i || Object.assign(e, n), Object.assign(e, Object.keys(r).reduce(function(e2, t2) {
      return Object.assign(Object.assign({}, e2), ((e2 = {})["_" + t2] = r[t2], e2));
    }, {}));
  }
  function checkIfTokenNeedsToBeSaved(e) {
    return void 0 !== e._userToken && checkIfAnonymousToken(e._userToken) && e._useCookie && !e._userHasOptedOut;
  }
  function viewedObjectIDs() {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, n = n.additionalParams;
    return this.sendEvents(addEventType("view", i), n);
  }
  function viewedFilters() {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    var n = extractAdditionalParams(e), i = n.events, n = n.additionalParams;
    return this.sendEvents(addEventType("view", i), n);
  }
  var AlgoliaAnalytics = function(e) {
    e = e.requestFn;
    this._endpointOrigin = "https://insights.algolia.io", this._anonymousUserToken = true, this._userHasOptedOut = false, this._useCookie = false, this._cookieDuration = 6 * MONTH, this._ua = [], this.version = version, this.sendEvents = makeSendEvents(e).bind(this), this.init = init.bind(this), this.addAlgoliaAgent = addAlgoliaAgent.bind(this), this.saveTokenAsCookie = saveTokenAsCookie.bind(this), this.setUserToken = setUserToken.bind(this), this.setAnonymousUserToken = setAnonymousUserToken.bind(this), this.getUserToken = getUserToken.bind(this), this.onUserTokenChange = onUserTokenChange.bind(this), this.setAuthenticatedUserToken = setAuthenticatedUserToken.bind(this), this.getAuthenticatedUserToken = getAuthenticatedUserToken.bind(this), this.onAuthenticatedUserTokenChange = onAuthenticatedUserTokenChange.bind(this), this.clickedObjectIDsAfterSearch = clickedObjectIDsAfterSearch.bind(this), this.clickedObjectIDs = clickedObjectIDs.bind(this), this.clickedFilters = clickedFilters.bind(this), this.convertedObjectIDsAfterSearch = convertedObjectIDsAfterSearch.bind(this), this.purchasedObjectIDsAfterSearch = purchasedObjectIDsAfterSearch.bind(this), this.addedToCartObjectIDsAfterSearch = addedToCartObjectIDsAfterSearch.bind(this), this.convertedObjectIDs = convertedObjectIDs.bind(this), this.addedToCartObjectIDs = addedToCartObjectIDs.bind(this), this.purchasedObjectIDs = purchasedObjectIDs.bind(this), this.convertedFilters = convertedFilters.bind(this), this.viewedObjectIDs = viewedObjectIDs.bind(this), this.viewedFilters = viewedFilters.bind(this), this.getVersion = getVersion.bind(this);
  };
  function createInsightsClient(e) {
    var t, e = getFunctionalInterface(new AlgoliaAnalytics({ requestFn: e }));
    if ("object" == typeof window && !window.AlgoliaAnalyticsObject) {
      for (; t = createUUID(), void 0 !== window[t]; ) ;
      window.AlgoliaAnalyticsObject = t, window[window.AlgoliaAnalyticsObject] = e;
    }
    return e.version = version, e;
  }
  var requestWithXMLHttpRequest = function(r, o) {
    return new Promise(function(e, t) {
      var n = JSON.stringify(o), i = new XMLHttpRequest();
      i.addEventListener("readystatechange", function() {
        4 === i.readyState && 200 === i.status ? e(true) : 4 === i.readyState && e(false);
      }), i.addEventListener("error", function() {
        return t();
      }), i.addEventListener("timeout", function() {
        return e(false);
      }), i.open("POST", r), i.setRequestHeader("Content-Type", "application/json"), i.send(n);
    });
  };
  var requestWithSendBeacon = function(e, t) {
    var n = JSON.stringify(t), n = navigator.sendBeacon(e, n);
    return Promise.resolve(!!n || requestWithXMLHttpRequest(e, t));
  };
  var requestWithNativeFetch = function(e, i) {
    return new Promise(function(t, n) {
      fetch(e, { method: "POST", body: JSON.stringify(i), headers: { "Content-Type": "application/json" } }).then(function(e2) {
        t(200 === e2.status);
      }).catch(function(e2) {
        n(e2);
      });
    });
  };
  function getRequesterForBrowser() {
    if (supportsSendBeacon()) return requestWithSendBeacon;
    if (supportsXMLHttpRequest()) return requestWithXMLHttpRequest;
    if (supportsNativeFetch()) return requestWithNativeFetch;
    throw new Error("Could not find a supported HTTP request client in this environment.");
  }
  var entryBrowser = createInsightsClient(getRequesterForBrowser());

  // node_modules/.pnpm/search-insights@2.17.3/node_modules/search-insights/index-browser.mjs
  var index_browser_default = entryBrowser;

  // src/tracking/insights.ts
  var initialized = false;
  function initInsights(config) {
    index_browser_default("init", {
      appId: config.appId,
      apiKey: config.searchKey,
      useCookie: false
    });
    initialized = true;
    window.aa = index_browser_default;
    document.addEventListener("click", (e) => {
      const card = e.target.closest(".wf-algolia-injected");
      if (!card) return;
      const objectID = card.dataset.wfAlgoliaObjectid;
      const indexName = card.dataset.wfAlgoliaIndex;
      const queryID = card.dataset.wfAlgoliaQueryid;
      const position = parseInt(card.dataset.wfAlgoliaPosition || "0");
      if (!objectID || !indexName) return;
      trackClick({
        index: indexName,
        objectIDs: [objectID],
        queryID: queryID || void 0,
        positions: position > 0 ? [position] : void 0
      });
    });
    document.addEventListener("click", (e) => {
      const item = e.target.closest('[wf-algolia-element="filter-item"]');
      if (!item) return;
      const group = item.closest('[wf-algolia-element="filter-group"]');
      if (!group) return;
      const field = group.getAttribute("wf-algolia-field") || group.getAttribute("wf-algolia-facet");
      const value = item.getAttribute("wf-algolia-value");
      const indexName = group.getAttribute("wf-algolia-index");
      if (field && value && indexName) {
        index_browser_default("clickedFilters", {
          index: indexName,
          filters: [`${field}:${value}`],
          eventName: "Filter Clicked"
        });
      }
    });
    document.addEventListener("click", (e) => {
      const target = e.target.closest("[wf-algolia-event]");
      if (!target) return;
      const eventType = target.getAttribute("wf-algolia-event");
      const eventName = target.getAttribute("wf-algolia-event-name");
      const card = target.closest(".wf-algolia-injected") || target;
      const objectID = card.dataset?.wfAlgoliaObjectid;
      const indexName = card.dataset?.wfAlgoliaIndex;
      const queryID = card.dataset?.wfAlgoliaQueryid;
      if (!objectID || !indexName) return;
      switch (eventType) {
        case "click":
          trackClick({ index: indexName, objectIDs: [objectID], queryID: queryID || void 0, eventName: eventName || void 0 });
          break;
        case "conversion":
          trackConversion({ index: indexName, objectIDs: [objectID], queryID: queryID || void 0, eventName: eventName || "Converted" });
          break;
        case "view":
          trackViewedHits(indexName, [objectID]);
          break;
      }
    });
    document.addEventListener("click", (e) => {
      const target = e.target.closest("[wf-algolia-conversion]");
      if (!target) return;
      const eventName = target.getAttribute("wf-algolia-conversion");
      const card = target.closest(".wf-algolia-injected") || target;
      const objectID = card.dataset?.wfAlgoliaObjectid;
      const indexName = card.dataset?.wfAlgoliaIndex;
      const queryID = card.dataset?.wfAlgoliaQueryid;
      if (objectID && indexName) {
        trackConversion({ index: indexName, objectIDs: [objectID], eventName, queryID: queryID || void 0 });
      }
    });
  }
  function trackViewedHits(indexName, objectIDs) {
    if (!initialized || objectIDs.length === 0) return;
    index_browser_default("viewedObjectIDs", {
      index: indexName,
      objectIDs,
      eventName: "Hits Viewed"
    });
  }
  function trackClick(params) {
    if (!initialized) return;
    if (params.queryID) {
      index_browser_default("clickedObjectIDsAfterSearch", {
        index: params.index,
        objectIDs: params.objectIDs,
        queryID: params.queryID,
        positions: params.positions || [1],
        eventName: params.eventName || "Hit Clicked"
      });
    } else {
      index_browser_default("clickedObjectIDs", {
        index: params.index,
        objectIDs: params.objectIDs,
        eventName: params.eventName || "Hit Clicked"
      });
    }
  }
  function trackConversion(params) {
    if (!initialized) return;
    if (params.queryID) {
      index_browser_default("convertedObjectIDsAfterSearch", {
        index: params.index,
        objectIDs: params.objectIDs,
        queryID: params.queryID,
        eventName: params.eventName || "Hit Converted"
      });
    } else {
      index_browser_default("convertedObjectIDs", {
        index: params.index,
        objectIDs: params.objectIDs,
        eventName: params.eventName || "Hit Converted"
      });
    }
  }
  function isInsightsEnabled() {
    return initialized;
  }

  // src/render/template.ts
  function populateCard(card, hit) {
    card.querySelectorAll("[wf-algolia-text]").forEach((el) => {
      try {
        const fieldAttr = el.getAttribute("wf-algolia-text");
        const format = el.getAttribute("wf-algolia-format");
        const highlight = el.getAttribute("wf-algolia-highlight") === "true";
        const fields = fieldAttr.split("|").map((f) => f.trim());
        let value;
        let resolvedField = fields[0];
        for (const f of fields) {
          const v = getNestedValue(hit, f);
          if (v != null && v !== "") {
            value = v;
            resolvedField = f;
            break;
          }
        }
        if (format) {
          const formatted = formatValue(value, format);
          el.textContent = formatted;
          el.style.display = formatted ? "" : "none";
        } else if (highlight && hit._highlightResult?.[resolvedField]?.value) {
          const highlighted = sanitizeHtml(hit._highlightResult[resolvedField].value).replace(/<em>/g, "<mark>").replace(/<\/em>/g, "</mark>");
          el.innerHTML = highlighted;
        } else {
          el.textContent = value ?? "";
        }
      } catch (err) {
        console.warn("[wf-algolia] populateCard text error:", err);
      }
    });
    card.querySelectorAll("[wf-algolia-html]").forEach((el) => {
      try {
        const field = el.getAttribute("wf-algolia-html");
        const value = getNestedValue(hit, field);
        el.innerHTML = value ? sanitizeHtml(value) : "";
      } catch (err) {
        console.warn("[wf-algolia] populateCard html error:", err);
      }
    });
    card.querySelectorAll("[wf-algolia-snippet]").forEach((el) => {
      try {
        const field = el.getAttribute("wf-algolia-snippet");
        const snippet = hit._snippetResult?.[field]?.value;
        if (snippet) {
          const cleaned = sanitizeHtml(snippet).replace(/<em>/g, "<mark>").replace(/<\/em>/g, "</mark>");
          el.innerHTML = cleaned;
        } else {
          const raw = getNestedValue(hit, field);
          el.textContent = raw ?? "";
        }
      } catch (err) {
        console.warn("[wf-algolia] populateCard snippet error:", err);
      }
    });
    card.querySelectorAll("[wf-algolia-image]").forEach((el) => {
      try {
        const fields = el.getAttribute("wf-algolia-image").split("|");
        let value = "";
        for (const f of fields) {
          const v = getNestedValue(hit, f.trim());
          if (v) {
            value = v;
            break;
          }
        }
        el.removeAttribute("data-src");
        el.removeAttribute("data-srcset");
        el.removeAttribute("srcset");
        el.src = value || "";
        el.alt = hit.name || hit.title || "";
        el.loading = "lazy";
      } catch (err) {
        console.warn("[wf-algolia] populateCard image error:", err);
      }
    });
    card.querySelectorAll("[wf-algolia-link], [wf-algolia-link-url]").forEach((el) => {
      try {
        const urlField = el.getAttribute("wf-algolia-link-url");
        if (urlField) {
          const url = getNestedValue(hit, urlField);
          el.href = sanitizeUrl(url || "#");
          return;
        }
        const field = el.getAttribute("wf-algolia-link");
        const prefix = el.getAttribute("wf-algolia-link-prefix") || el.getAttribute("wf-algolia-link-folder") || "";
        const suffix = el.getAttribute("wf-algolia-link-suffix") || "";
        const value = getNestedValue(hit, field);
        el.href = sanitizeUrl(prefix + (value || "") + suffix);
      } catch (err) {
        console.warn("[wf-algolia] populateCard link error:", err);
      }
    });
    card.querySelectorAll("[wf-algolia-if]").forEach((el) => {
      const condition = el.getAttribute("wf-algolia-if");
      if (evaluateCondition(condition, hit)) {
        show(el);
      } else {
        hide(el);
      }
    });
  }
  function cloneTemplate(template, hit) {
    const card = template.cloneNode(true);
    card.style.display = "";
    card.removeAttribute("wf-algolia-element");
    card.classList.add("wf-algolia-injected");
    const linkUrlField = card.getAttribute("wf-algolia-link-url");
    const linkField = card.getAttribute("wf-algolia-link");
    if (linkUrlField) {
      const url = getNestedValue(hit, linkUrlField);
      card.href = sanitizeUrl(url || "#");
    } else if (linkField) {
      let prefix = card.getAttribute("wf-algolia-link-prefix") || card.getAttribute("wf-algolia-link-folder") || "";
      const suffix = card.getAttribute("wf-algolia-link-suffix") || "";
      if (prefix.includes("|") && hit.__indexName) {
        const parts = prefix.split("|");
        let resolved = parts[0];
        for (const part of parts.slice(1)) {
          const colonIdx = part.indexOf(":");
          if (colonIdx > 0) {
            const idx = part.substring(0, colonIdx);
            const path = part.substring(colonIdx + 1);
            if (hit.__indexName === idx) {
              resolved = path;
              break;
            }
          }
        }
        prefix = resolved;
      }
      const linkValue = getNestedValue(hit, linkField) || "";
      card.href = sanitizeUrl(prefix + linkValue + suffix);
    }
    populateCard(card, hit);
    card.dataset.wfAlgoliaObjectid = hit.objectID;
    card.dataset.wfAlgoliaIndex = hit.__indexName || "";
    if (hit.__queryID) card.dataset.wfAlgoliaQueryid = hit.__queryID;
    return card;
  }
  function clearInjected(container) {
    container.querySelectorAll(".wf-algolia-injected").forEach((el) => el.remove());
  }
  var storedTemplates = /* @__PURE__ */ new WeakSet();
  function storeTemplate(template) {
    if (!storedTemplates.has(template)) {
      storedTemplates.add(template);
      template.remove();
    }
    return template;
  }
  function renderHits(container, template, hits, append = false) {
    if (!append) clearInjected(container);
    storeTemplate(template);
    const fragment = document.createDocumentFragment();
    const startIndex = append ? container.querySelectorAll(".wf-algolia-injected").length : 0;
    hits.forEach((hit, i) => {
      try {
        const card = cloneTemplate(template, hit);
        card.dataset.wfAlgoliaPosition = String(startIndex + i + 1);
        fragment.appendChild(card);
      } catch (err) {
        console.warn("[wf-algolia] Failed to clone hit:", hit.objectID, err);
      }
    });
    container.appendChild(fragment);
    restartWebflowInteractions();
    if (isInsightsEnabled()) {
      const indexName = hits[0]?.__indexName || "";
      const objectIDs = hits.map((h) => h.objectID).filter(Boolean);
      if (indexName && objectIDs.length) {
        trackViewedHits(indexName, objectIDs);
      }
    }
  }

  // src/core/events.ts
  init_live_reload();
  var listeners = /* @__PURE__ */ new Map();
  function on(event, callback) {
    if (!listeners.has(event)) listeners.set(event, /* @__PURE__ */ new Set());
    listeners.get(event).add(callback);
  }
  function off(event, callback) {
    listeners.get(event)?.delete(callback);
  }
  function emit(event, ...args) {
    listeners.get(event)?.forEach((cb) => {
      try {
        cb(...args);
      } catch (err) {
        console.warn(`[wf-algolia] Event handler error (${event}):`, err);
      }
    });
  }

  // src/filters/filter-state.ts
  init_live_reload();
  var FILTER_STATE = {};
  function updateFilterState(state, field, value, isActive, matchMode, type) {
    if (!state[field]) {
      state[field] = { type, match: matchMode, values: /* @__PURE__ */ new Set() };
    }
    if (isActive) {
      state[field].values.add(value);
    } else {
      state[field].values.delete(value);
      if (state[field].values.size === 0) delete state[field];
    }
  }
  function clearFilterState(state) {
    Object.keys(state).forEach((k) => delete state[k]);
  }

  // src/actions/filter-actions.ts
  init_live_reload();
  function syncFilterDOM(state = FILTER_STATE) {
    document.querySelectorAll('[wf-algolia-element="filter-group"]').forEach((group) => {
      const field = group.getAttribute("wf-algolia-field") || group.getAttribute("wf-algolia-facet") || "";
      const activeClass = group.getAttribute("wf-algolia-activeclass") || "is-active";
      group.querySelectorAll('[wf-algolia-element="filter-item"]').forEach((item) => {
        const value = item.getAttribute("wf-algolia-value") || "";
        const entry = state[field];
        const isActive = entry?.values?.has(value) ?? false;
        item.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach((input) => {
          input.checked = isActive;
        });
        if (isActive) {
          item.setAttribute("data-wf-algolia-active", "true");
        } else {
          item.removeAttribute("data-wf-algolia-active");
        }
        if (isActive) {
          item.classList.add(activeClass);
        } else {
          item.classList.remove(activeClass);
        }
        const isRadio = group.getAttribute("wf-algolia-type") === "radio";
        if (isRadio) {
          item.setAttribute("aria-selected", String(isActive));
        } else {
          item.setAttribute("aria-pressed", String(isActive));
        }
      });
      if (!state[field]) {
        const minInput = group.querySelector('[wf-algolia-element="range-min"]');
        const maxInput = group.querySelector('[wf-algolia-element="range-max"]');
        if (minInput) minInput.value = minInput.min;
        if (maxInput) maxInput.value = maxInput.max;
        const display = group.querySelector('[wf-algolia-element="range-display"]');
        if (display && minInput && maxInput) {
          display.textContent = `${minInput.min} \u2013 ${maxInput.max}`;
        }
      }
    });
  }
  function clearAllFilters(runQuery2) {
    clearFilterState(FILTER_STATE);
    syncFilterDOM();
    emit("filter", FILTER_STATE);
    runQuery2();
  }
  function clearFilterField(field, runQuery2) {
    delete FILTER_STATE[field];
    syncFilterDOM();
    emit("filter", FILTER_STATE);
    runQuery2();
  }
  function setFilterValues(field, values, runQuery2) {
    FILTER_STATE[field] = { type: "checkbox", match: "or", values: new Set(values) };
    syncFilterDOM();
    emit("filter", FILTER_STATE);
    runQuery2();
  }
  function setSearchQuery(query, runQuery2) {
    const input = document.querySelector(
      '[wf-algolia-element="browse-search"], [wf-algolia-element="search-input"]'
    );
    if (input) input.value = query;
    emit("search", query);
    runQuery2();
  }

  // src/api/middleware.ts
  init_live_reload();
  var middlewares = [];
  function registerMiddleware(mw) {
    middlewares.push(mw);
  }

  // src/api/public-api.ts
  function exposePublicAPI(client, config) {
    const runQuery2 = () => emit("refresh");
    window.WfAlgolia = {
      version: "1.0.0",
      getClient: () => client,
      search: (indexName, query, params) => client.initIndex(indexName).search(query, { clickAnalytics: true, ...params }),
      multiSearch: (queries) => client.multipleQueries(queries),
      getObject: (indexName, objectID) => client.initIndex(indexName).getObject(objectID),
      cloneAndPopulate: (template, hit) => cloneTemplate(template, hit),
      populateCard: (card, hit) => populateCard(card, hit),
      // Event tracking
      trackClick,
      trackConversion,
      // Event system
      on,
      off,
      // Programmatic filter control — uses actions module for state + DOM sync
      setFilter: (field, values) => setFilterValues(field, values, runQuery2),
      clearFilter: (field) => clearFilterField(field, runQuery2),
      clearAllFilters: () => clearAllFilters(runQuery2),
      getFilterState: () => {
        const copy = {};
        Object.entries(FILTER_STATE).forEach(([k, v]) => {
          copy[k] = { ...v, values: v.values ? [...v.values] : void 0 };
        });
        return copy;
      },
      // Programmatic search — uses actions module
      setQuery: (query) => setSearchQuery(query, runQuery2),
      getQuery: () => {
        const input = document.querySelector(
          '[wf-algolia-element="browse-search"], [wf-algolia-element="search-input"]'
        );
        return input?.value || "";
      },
      refresh: runQuery2,
      // Middleware — beforeSearch/afterSearch interceptors
      use: (mw) => registerMiddleware(mw),
      destroy: () => {
        document.querySelectorAll(".wf-algolia-injected").forEach((el) => el.remove());
        delete window.WfAlgolia;
      }
    };
  }

  // src/browse/browse.ts
  init_live_reload();

  // src/core/attributes.ts
  init_live_reload();
  function scanAttributes() {
    const map = /* @__PURE__ */ new Map();
    document.querySelectorAll("[wf-algolia-element]").forEach((el) => {
      const role = el.getAttribute("wf-algolia-element");
      if (!map.has(role)) map.set(role, []);
      map.get(role).push(el);
    });
    const templateTypes = [
      "template",
      "autocomplete-template",
      "filter-template",
      "filter-tag-template"
    ];
    templateTypes.forEach((type) => {
      (map.get(type) || []).forEach((el) => {
        const parent = el.parentElement;
        if (parent) registerTemplateParent(el, parent);
        el.remove();
      });
    });
    return map;
  }
  var templateParentMap = /* @__PURE__ */ new WeakMap();
  function registerTemplateParent(template, parent) {
    templateParentMap.set(template, parent);
  }
  function findTemplateForContainer(container, elements, type = "template") {
    const templates = elements.get(type) || [];
    return templates.find((t) => templateParentMap.get(t) === container) || null;
  }

  // src/filters/dynamic-filters.ts
  init_live_reload();
  function initDynamicFilters(client, elements, runQuery2) {
    const groups = [
      ...document.querySelectorAll(
        '[wf-algolia-element="filter-group"][wf-algolia-facet]'
      )
    ];
    if (groups.length === 0) return;
    Promise.all(groups.map((group) => populateDynamicGroup(client, elements, group))).then(() => runQuery2()).catch((err) => console.error("[wf-algolia] Dynamic filters failed:", err));
  }
  async function populateDynamicGroup(client, elements, group) {
    const facetField = group.getAttribute("wf-algolia-facet");
    const indexName = group.getAttribute("wf-algolia-index");
    const template = findTemplateForContainer(group, elements, "filter-template");
    if (!indexName || !template) {
      console.error(
        `[wf-algolia] Dynamic filter "${facetField}" missing index=${!!indexName} template=${!!template}. Elements map has filter-template: ${elements.has("filter-template")} (${(elements.get("filter-template") || []).length} items)`
      );
      return;
    }
    try {
      const res = await client.initIndex(indexName).search("", {
        facets: [facetField],
        hitsPerPage: 0
      });
      const facetValues = res.facets?.[facetField];
      if (!facetValues || Object.keys(facetValues).length === 0) {
        console.error(`[wf-algolia] No facet values for "${facetField}" on "${indexName}"`);
        return;
      }
      const sorted = Object.entries(facetValues).sort((a, b) => b[1] - a[1]);
      clearInjected(group);
      sorted.forEach(([value, count]) => {
        const clone = template.cloneNode(true);
        clone.removeAttribute("wf-algolia-element");
        clone.classList.add("wf-algolia-injected");
        clone.setAttribute("wf-algolia-element", "filter-item");
        clone.setAttribute("wf-algolia-value", value);
        clone.querySelectorAll("*").forEach((child) => {
          if (child.style.display === "none") child.style.display = "";
        });
        const nameEl = clone.querySelector('[wf-algolia-element="filter-value-text"]') || clone.querySelector(".wf-fi-name") || Array.from(clone.children).find(
          (child) => !child.getAttribute?.("wf-algolia-element")
        );
        if (nameEl) {
          nameEl.textContent = value;
        }
        const countEl = clone.querySelector('[wf-algolia-element="filter-count"]');
        if (countEl) {
          countEl.textContent = String(count);
        }
        if (!clone.querySelector("input")) {
          clone.setAttribute("role", "button");
          clone.setAttribute("tabindex", "0");
        }
        group.appendChild(clone);
      });
    } catch (err) {
      console.error(`[wf-algolia] Dynamic filter "${facetField}" failed:`, err);
    }
  }
  function updateDynamicFilterCounts(facets) {
    document.querySelectorAll('[wf-algolia-element="filter-group"][wf-algolia-facet]').forEach((group) => {
      const facetField = group.getAttribute("wf-algolia-facet");
      const counts = facets[facetField] || {};
      group.querySelectorAll('[wf-algolia-element="filter-item"]').forEach((item) => {
        const value = item.getAttribute("wf-algolia-value");
        if (!value) return;
        const count = counts[value] ?? 0;
        const countEl = item.querySelector('[wf-algolia-element="filter-count"]');
        if (countEl) countEl.textContent = String(count);
        const zeroClass = group.getAttribute("wf-algolia-zeroclass") || "is-disabled";
        const isActive = item.hasAttribute("data-wf-algolia-active");
        if (count === 0 && !isActive) {
          item.classList.add(zeroClass);
        } else {
          item.classList.remove(zeroClass);
        }
      });
    });
  }

  // src/filters/dynamic-visibility.ts
  init_live_reload();
  function updateFilterVisibility(facets) {
    document.querySelectorAll('[wf-algolia-element="filter-group"][wf-algolia-field]').forEach((group) => {
      const field = group.getAttribute("wf-algolia-field");
      const facetValues = facets[field];
      const hasValues = facetValues && Object.keys(facetValues).length > 0;
      const hasActiveFilter = !!FILTER_STATE[field];
      if (hasValues || hasActiveFilter) {
        group.style.display = "";
      } else {
        group.style.display = "none";
      }
    });
  }

  // src/filters/filter-counts.ts
  init_live_reload();

  // src/filters/filter-group.ts
  init_live_reload();
  function resolveFilterField(group) {
    return group.getAttribute("wf-algolia-field") || group.getAttribute("wf-algolia-facet") || null;
  }
  function setActiveAttribute(item, active) {
    if (active) {
      item.setAttribute("data-wf-algolia-active", "true");
    } else {
      item.removeAttribute("data-wf-algolia-active");
    }
  }
  function syncActiveAttributes(group) {
    const activeClass = group.getAttribute("wf-algolia-activeclass") || "is-active";
    group.querySelectorAll('[wf-algolia-element="filter-item"]').forEach((item) => {
      const checked = isItemChecked(item);
      setActiveAttribute(item, checked);
      if (checked) {
        item.classList.add(activeClass);
      } else {
        item.classList.remove(activeClass);
      }
    });
  }
  function isItemChecked(item) {
    const radio = item.querySelector('input[type="radio"]');
    if (radio) return radio.checked;
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox) return checkbox.checked;
    return item.getAttribute("data-wf-algolia-active") === "true";
  }
  function applyDivOnlyClick(group, item, filterType, isNumericMin) {
    const hasInput = !!item.querySelector("input");
    if (hasInput) return;
    if (isNumericMin) {
      const wasActive = item.getAttribute("data-wf-algolia-active") === "true";
      group.querySelectorAll('[wf-algolia-element="filter-item"]').forEach((s) => s.removeAttribute("data-wf-algolia-active"));
      if (!wasActive) item.setAttribute("data-wf-algolia-active", "true");
      return;
    }
    if (filterType === "radio") {
      group.querySelectorAll('[wf-algolia-element="filter-item"]').forEach((s) => s.removeAttribute("data-wf-algolia-active"));
      item.setAttribute("data-wf-algolia-active", "true");
      return;
    }
    const active = item.getAttribute("data-wf-algolia-active") === "true";
    if (active) item.removeAttribute("data-wf-algolia-active");
    else item.setAttribute("data-wf-algolia-active", "true");
  }
  function initFilterGroups(runQuery2) {
    document.querySelectorAll('[wf-algolia-element="filter-group"]').forEach((group) => {
      const field = resolveFilterField(group);
      if (!field) return;
      if (group.getAttribute("wf-algolia-type") === "select") return;
      if (group.querySelector('[wf-algolia-element="range-min"]') || group.querySelector('[wf-algolia-element="range-max"]')) {
        return;
      }
      const filterType = group.getAttribute("wf-algolia-type") || (group.getAttribute("wf-algolia-match") === "numeric-min" ? "radio" : "checkbox");
      const matchMode = group.getAttribute("wf-algolia-match") || "or";
      const isNumericMin = filterType === "radio" && (matchMode === "numeric-min" || !!group.querySelector('input[type="radio"]'));
      const onGroupClick = (e) => {
        const target = e.target;
        if (!target) return;
        const item = target.closest('[wf-algolia-element="filter-item"]');
        if (!item || !group.contains(item)) return;
        const value = item.getAttribute("wf-algolia-value");
        if (value == null || value === "") return;
        applyDivOnlyClick(group, item, filterType, isNumericMin);
        window.setTimeout(() => {
          if (isNumericMin) {
            const checked = isItemChecked(item);
            if (checked) {
              FILTER_STATE[field] = {
                type: "number",
                match: "or",
                min: parseFloat(value)
              };
            } else {
              delete FILTER_STATE[field];
            }
          } else {
            const checked = isItemChecked(item);
            updateFilterState(
              FILTER_STATE,
              field,
              value,
              checked,
              matchMode,
              "checkbox"
            );
          }
          syncActiveAttributes(group);
          runQuery2();
        }, 0);
      };
      group.addEventListener("click", onGroupClick);
      group.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        const t = e.target;
        if (!t) return;
        const item = t.closest('[wf-algolia-element="filter-item"]');
        if (!item || !group.contains(item) || item.querySelector("input")) return;
        e.preventDefault();
        item.click();
      });
      const form = group.querySelector("form");
      if (form) {
        form.addEventListener("submit", (ev) => ev.preventDefault());
      }
      const resetBtn = group.closest('[wf-algolia-element="browse"]')?.querySelector(`[wf-algolia-reset="${field}"]`);
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          delete FILTER_STATE[field];
          group.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach((input) => {
            input.checked = false;
          });
          group.querySelectorAll('[wf-algolia-element="filter-item"]').forEach((el) => {
            el.removeAttribute("data-wf-algolia-active");
          });
          syncActiveAttributes(group);
          runQuery2();
        });
      }
    });
  }

  // src/filters/filter-counts.ts
  function updateFilterCounts(facets) {
    document.querySelectorAll('[wf-algolia-element="filter-group"]').forEach((group) => {
      const field = resolveFilterField(group);
      if (!field) return;
      const counts = facets[field] || {};
      const zeroClass = group.getAttribute("wf-algolia-zeroclass") || "is-disabled";
      group.querySelectorAll('[wf-algolia-element="filter-item"]').forEach((item) => {
        const value = item.getAttribute("wf-algolia-value");
        if (!value) return;
        const countEl = item.querySelector('[wf-algolia-element="filter-count"]');
        const count = counts[value] ?? 0;
        if (countEl) countEl.textContent = String(count);
        const isActive = item.hasAttribute("data-wf-algolia-active");
        if (count === 0 && !isActive) {
          item.classList.add(zeroClass);
        } else {
          item.classList.remove(zeroClass);
        }
      });
    });
  }

  // src/filters/filter-params.ts
  init_live_reload();
  function buildFilterParams(state) {
    const facetFilters = [];
    const numericFilters = [];
    Object.entries(state).forEach(([field, entry]) => {
      if (entry.type === "checkbox" || entry.type === "boolean") {
        if (!entry.values || entry.values.size === 0) return;
        if (entry.match === "and") {
          entry.values.forEach(
            (v) => facetFilters.push([`${field}:${escapeFilterValue(v)}`])
          );
        } else {
          facetFilters.push(
            [...entry.values].map((v) => `${field}:${escapeFilterValue(v)}`)
          );
        }
      }
      if (entry.type === "number" || entry.type === "date") {
        if (entry.min !== void 0) numericFilters.push(`${field}>=${entry.min}`);
        if (entry.max !== void 0) numericFilters.push(`${field}<=${entry.max}`);
      }
    });
    return { facetFilters, numericFilters };
  }

  // src/filters/filter-tags.ts
  init_live_reload();
  function updateFilterTags(state, elements, runQuery2) {
    const wrapper = document.querySelector('[wf-algolia-element="filter-tag-wrapper"]');
    if (!wrapper) return;
    const template = findTemplateForContainer(wrapper, elements, "filter-tag-template");
    if (!template) return;
    clearInjected(wrapper);
    Object.entries(state).forEach(([field, entry]) => {
      if (!entry.values) return;
      entry.values.forEach((value) => {
        const chip = template.cloneNode(true);
        chip.style.display = "";
        chip.removeAttribute("wf-algolia-element");
        chip.classList.add("wf-algolia-injected");
        const textEl = chip.querySelector('[wf-algolia-element="filter-tag-text"]');
        if (textEl) textEl.textContent = value;
        const removeBtn = chip.querySelector('[wf-algolia-element="filter-tag-remove"]');
        if (removeBtn) {
          removeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            entry.values.delete(value);
            if (entry.values.size === 0) delete state[field];
            document.querySelectorAll('[wf-algolia-element="filter-group"]').forEach((g) => {
              if (resolveFilterField(g) !== field) return;
              const item = [
                ...g.querySelectorAll('[wf-algolia-element="filter-item"]')
              ].find((el) => el.getAttribute("wf-algolia-value") === value);
              if (!item) return;
              const activeClass = g.getAttribute("wf-algolia-activeclass") || "is-active";
              item.classList.remove(activeClass);
              item.removeAttribute("data-wf-algolia-active");
              item.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach((input) => {
                input.checked = false;
              });
            });
            runQuery2();
          });
        }
        wrapper.appendChild(chip);
      });
    });
  }

  // src/filters/range.ts
  init_live_reload();
  function initRangeFilters(runQuery2) {
    document.querySelectorAll('[wf-algolia-element="filter-group"]').forEach((group) => {
      const field = group.getAttribute("wf-algolia-field");
      if (!field) return;
      const minInput = group.querySelector('[wf-algolia-element="range-min"]');
      const maxInput = group.querySelector('[wf-algolia-element="range-max"]');
      const display = group.querySelector('[wf-algolia-element="range-display"]');
      if (!minInput || !maxInput) return;
      const updateRange = () => {
        const min = parseFloat(minInput.value);
        const max = parseFloat(maxInput.value);
        if (min > max) {
          minInput.value = maxInput.value;
          return;
        }
        if (display) {
          display.textContent = `${min} \u2013 ${max}`;
        }
        FILTER_STATE[field] = {
          type: "number",
          match: "or",
          min,
          max
        };
        runQuery2();
      };
      minInput.addEventListener("input", updateRange);
      maxInput.addEventListener("input", updateRange);
      if (display) {
        display.textContent = `${minInput.value} \u2013 ${maxInput.value}`;
      }
    });
  }

  // src/filters/show-more.ts
  init_live_reload();
  function initShowMore() {
    document.querySelectorAll('[wf-algolia-element="filter-group"]').forEach((group) => {
      const limit = parseInt(group.getAttribute("wf-algolia-limit") || "0");
      if (limit <= 0) return;
      const hideClass = group.getAttribute("wf-algolia-hideclass") || "is-hidden";
      const showMoreBtn = group.querySelector(
        '[wf-algolia-element="filter-show-more"]'
      );
      if (!showMoreBtn) return;
      let expanded = false;
      const applyLimit = () => {
        const items = group.querySelectorAll('[wf-algolia-element="filter-item"]');
        items.forEach((item, i) => {
          const wrapper = item.closest('[role="listitem"]') || item;
          if (i >= limit && !expanded) {
            wrapper.classList.add(hideClass);
          } else {
            wrapper.classList.remove(hideClass);
          }
        });
        showMoreBtn.textContent = expanded ? "Show less" : "Show more";
      };
      showMoreBtn.addEventListener("click", () => {
        expanded = !expanded;
        applyLimit();
      });
      applyLimit();
    });
  }

  // src/pagination/infinite-scroll.ts
  init_live_reload();
  function initInfiniteScroll(container, loadNextPage) {
    const sentinel = document.createElement("div");
    sentinel.className = "wf-algolia-sentinel";
    sentinel.style.height = "1px";
    container.parentElement?.appendChild(sentinel);
    let loading = false;
    let hasMore = true;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !loading && hasMore) {
          loading = true;
          loadNextPage();
        }
      },
      { rootMargin: "200px" }
      // Trigger 200px before sentinel is visible
    );
    observer.observe(sentinel);
    return () => {
      loading = false;
    };
  }

  // src/utils/debounce.ts
  init_live_reload();
  function debounce(fn, ms) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), ms);
    };
  }

  // src/utils/url.ts
  init_live_reload();
  function writeStateToURL(params) {
    const url = new URL(window.location.href);
    if (params.query) {
      url.searchParams.set("q", params.query);
    } else {
      url.searchParams.delete("q");
    }
    if (params.mode && params.mode !== "all") {
      url.searchParams.set("mode", params.mode);
    } else {
      url.searchParams.delete("mode");
    }
    if (params.page && params.page > 0) {
      url.searchParams.set("page", String(params.page + 1));
    } else {
      url.searchParams.delete("page");
    }
    [...url.searchParams.keys()].filter((k) => k.startsWith("f_")).forEach((k) => url.searchParams.delete(k));
    if (params.filters) {
      Object.entries(params.filters).forEach(([field, entry]) => {
        if (entry.type === "checkbox" || entry.type === "boolean") {
          if (entry.values && entry.values.size > 0) {
            url.searchParams.set(`f_${field}`, [...entry.values].join(","));
          }
        }
        if (entry.type === "number" || entry.type === "date") {
          if (entry.min !== void 0) {
            url.searchParams.set(`f_${field}_min`, String(entry.min));
          }
          if (entry.max !== void 0) {
            url.searchParams.set(`f_${field}_max`, String(entry.max));
          }
        }
      });
    }
    const newUrl = url.toString();
    if (newUrl !== window.location.href) {
      window.history.pushState(null, "", newUrl);
    }
  }
  function readStateFromURL() {
    const url = new URL(window.location.href);
    const query = url.searchParams.get("q") || "";
    const mode = url.searchParams.get("mode") || "all";
    const pageStr = url.searchParams.get("page");
    const page = pageStr ? Math.max(0, parseInt(pageStr) - 1) : 0;
    const filters = {};
    url.searchParams.forEach((value, key) => {
      if (!key.startsWith("f_")) return;
      if (key.endsWith("_min")) {
        const field = key.slice(2, -4);
        if (!filters[field]) filters[field] = { type: "number", match: "or" };
        filters[field].min = parseFloat(value);
      } else if (key.endsWith("_max")) {
        const field = key.slice(2, -4);
        if (!filters[field]) filters[field] = { type: "number", match: "or" };
        filters[field].max = parseFloat(value);
      } else {
        const field = key.slice(2);
        filters[field] = {
          type: "checkbox",
          match: "or",
          values: new Set(value.split(",").filter(Boolean))
        };
      }
    });
    return { query, mode, page, filters };
  }

  // src/browse/mode-toggle.ts
  init_live_reload();
  function initModeToggle(state, filterState, runQuery2, activeClass, defaultIndex2) {
    const buttons = document.querySelectorAll('[wf-algolia-element="mode-btn"]');
    function applyFilterVisibility() {
      document.querySelectorAll('[wf-algolia-element="filter-group"][wf-algolia-index]').forEach((group) => {
        const idx = group.getAttribute("wf-algolia-index");
        const visible = state.mode === "all" || state.mode === idx;
        group.style.display = visible ? "" : "none";
        if (!visible) {
          const f = group.getAttribute("wf-algolia-field");
          if (f && filterState[f]) delete filterState[f];
        }
      });
    }
    buttons.forEach((btn) => {
      if (btn.getAttribute("wf-algolia-mode") === state.mode) {
        btn.classList.add(activeClass);
      }
    });
    applyFilterVisibility();
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        state.mode = btn.getAttribute("wf-algolia-mode") || "all";
        state.page = 0;
        buttons.forEach((b) => b.classList.remove(activeClass));
        btn.classList.add(activeClass);
        applyFilterVisibility();
        runQuery2();
      });
    });
  }

  // src/browse/sort.ts
  init_live_reload();
  function initSort(state, runQuery2) {
    const sel = document.querySelector('[wf-algolia-element="sort"]');
    if (!sel) return;
    sel.addEventListener("change", () => {
      state.sort = sel.value;
      state.page = 0;
      runQuery2();
    });
  }

  // src/browse/browse.ts
  var infiniteScrollReset = null;
  var urlSyncEnabled = false;
  var browseState;
  var algoliaClient;
  var defaultIndex;
  var allIndices = [];
  var storedElements;
  function initBrowsePage(client, config, elements) {
    const browseEl = (elements.get("browse") || [])[0];
    if (!browseEl) return;
    algoliaClient = client;
    storedElements = elements;
    defaultIndex = browseEl.getAttribute("wf-algolia-index") || "";
    if (!defaultIndex) {
      console.error("[wf-algolia] Browse page missing wf-algolia-index attribute");
      return;
    }
    document.querySelectorAll('[wf-algolia-element="mode-btn"]').forEach((btn) => {
      const mode = btn.getAttribute("wf-algolia-mode");
      if (mode && mode !== "all" && !allIndices.includes(mode)) {
        allIndices.push(mode);
      }
    });
    if (allIndices.length === 0) allIndices = [defaultIndex];
    browseState = {
      mode: "all",
      sort: "",
      query: "",
      page: 0,
      hitsPerPage: parseInt(browseEl.getAttribute("wf-algolia-per-page") || "12"),
      topOffset: parseInt(browseEl.getAttribute("wf-algolia-top-offset") || "0")
    };
    urlSyncEnabled = browseEl.getAttribute("wf-algolia-url-sync") === "true";
    if (urlSyncEnabled) {
      const urlState = readStateFromURL();
      if (urlState.query || urlState.mode !== "all" || urlState.page > 0 || Object.keys(urlState.filters).length > 0) {
        browseState.query = urlState.query;
        browseState.mode = urlState.mode;
        browseState.page = urlState.page;
        Object.assign(FILTER_STATE, urlState.filters);
        const searchInput2 = browseEl.querySelector(
          '[wf-algolia-element="browse-search"]'
        );
        if (searchInput2 && urlState.query) searchInput2.value = urlState.query;
      }
    }
    initFilterGroups(runQuery);
    initDynamicFilters(client, elements, runQuery);
    initRangeFilters(runQuery);
    initShowMore();
    initModeToggle(browseState, FILTER_STATE, runQuery, config.activeClass, defaultIndex);
    initSort(browseState, runQuery);
    const searchInput = browseEl.querySelector(
      '[wf-algolia-element="browse-search"]'
    );
    if (searchInput) {
      searchInput.addEventListener(
        "input",
        debounce((e) => {
          browseState.query = e.target.value.trim();
          browseState.page = 0;
          runQuery();
        }, config.debounce)
      );
    }
    const paginationMode = browseEl.getAttribute("wf-algolia-pagination") || "load-more";
    const isLoadMore = paginationMode === "load-more";
    document.querySelector('[wf-algolia-element="page-next"]')?.addEventListener("click", () => {
      browseState.page++;
      runQuery(isLoadMore);
    });
    document.querySelector('[wf-algolia-element="page-prev"]')?.addEventListener("click", () => {
      if (browseState.page > 0) {
        browseState.page--;
        runQuery();
      }
    });
    if (paginationMode === "infinite-scroll") {
      const resultsEl = browseEl.querySelector('[wf-algolia-element="results"]');
      if (resultsEl) {
        infiniteScrollReset = initInfiniteScroll(resultsEl, () => {
          browseState.page++;
          runQuery(true);
        });
      }
    }
    document.querySelector('[wf-algolia-button="reset"]')?.addEventListener("click", () => {
      browseState.page = 0;
      clearAllFilters(() => runQuery());
    });
    if (urlSyncEnabled) {
      window.addEventListener("popstate", () => {
        const restored = readStateFromURL();
        browseState.query = restored.query;
        browseState.mode = restored.mode;
        browseState.page = restored.page;
        Object.keys(FILTER_STATE).forEach((k) => delete FILTER_STATE[k]);
        Object.assign(FILTER_STATE, restored.filters);
        const searchInput2 = document.querySelector(
          '[wf-algolia-element="browse-search"]'
        );
        if (searchInput2) searchInput2.value = restored.query;
        runQuery();
      });
    }
    on("refresh", () => runQuery());
    runQuery();
  }
  function splitFiltersByIndex() {
    const result = {};
    const fieldToIndex = /* @__PURE__ */ new Map();
    document.querySelectorAll('[wf-algolia-element="filter-group"][wf-algolia-index]').forEach((group) => {
      const field = group.getAttribute("wf-algolia-field");
      const idx = group.getAttribute("wf-algolia-index");
      if (field && idx) fieldToIndex.set(field, idx);
    });
    for (const idx of allIndices) {
      const indexFilters = {};
      Object.entries(FILTER_STATE).forEach(([field, entry]) => {
        const filterIdx = fieldToIndex.get(field);
        if (!filterIdx || filterIdx === idx) {
          indexFilters[field] = entry;
        }
      });
      result[idx] = buildFilterParams(indexFilters);
    }
    return result;
  }
  function runQuery(append = false) {
    const wrapper = document.querySelector(
      '[wf-algolia-element="browse"] [wf-algolia-element="results"]'
    );
    const template = wrapper ? findTemplateForContainer(wrapper, storedElements) : null;
    const loader = document.querySelector(
      '[wf-algolia-element="browse"] [wf-algolia-element="loader"]'
    );
    const noResults = document.querySelector(
      '[wf-algolia-element="browse"] [wf-algolia-element="no-results"]'
    );
    if (!wrapper || !template) return;
    show(loader);
    const isAllMode = browseState.mode === "all" && !browseState.sort;
    if (isAllMode) {
      runMultiIndexQuery(wrapper, template, loader, noResults, append);
    } else {
      runSingleIndexQuery(wrapper, template, loader, noResults, append);
    }
  }
  function runSingleIndexQuery(wrapper, template, loader, noResults, append) {
    const { facetFilters, numericFilters } = buildFilterParams(FILTER_STATE);
    const activeIndex = browseState.sort || (browseState.mode !== "all" ? browseState.mode : defaultIndex);
    algoliaClient.initIndex(activeIndex).search(browseState.query || "", {
      hitsPerPage: browseState.hitsPerPage,
      page: browseState.page,
      facets: ["*"],
      facetFilters,
      numericFilters,
      clickAnalytics: true,
      attributesToSnippet: ["*:30"]
    }).then((res) => {
      hide(loader);
      const enrichedHits = res.hits.map((hit) => ({
        ...hit,
        __queryID: res.queryID,
        __indexName: activeIndex
      }));
      if (!append) clearInjected(wrapper);
      if (enrichedHits.length === 0 && !append) {
        show(noResults);
      } else {
        hide(noResults);
        renderHits(wrapper, template, enrichedHits, append);
      }
      updateFilterCounts(res.facets || {});
      updateDynamicFilterCounts(res.facets || {});
      updateFilterVisibility(res.facets || {});
      updateFilterTags(FILTER_STATE, storedElements, runQuery);
      updateResultsCount(res.nbHits);
      updatePagination(res.nbPages);
    }).catch((err) => {
      hide(loader);
      console.error("[wf-algolia] Browse query failed:", err);
    });
  }
  function runMultiIndexQuery(wrapper, template, loader, noResults, append) {
    const perIndexFilters = splitFiltersByIndex();
    const hitsPerIndex = Math.ceil(browseState.hitsPerPage / allIndices.length);
    const queries = allIndices.map((indexName) => {
      const filters = perIndexFilters[indexName] || { facetFilters: [], numericFilters: [] };
      return {
        indexName,
        query: browseState.query || "",
        params: {
          hitsPerPage: hitsPerIndex,
          page: browseState.page,
          facets: ["*"],
          facetFilters: filters.facetFilters,
          numericFilters: filters.numericFilters,
          clickAnalytics: true,
          attributesToSnippet: ["*:30"]
        }
      };
    });
    algoliaClient.multipleQueries(queries).then(({ results }) => {
      hide(loader);
      const allHits = [];
      const mergedFacets = {};
      let totalHits = 0;
      let maxPages = 0;
      results.forEach((res, i) => {
        const indexName = allIndices[i];
        const enriched = res.hits.map((hit) => ({
          ...hit,
          __queryID: res.queryID,
          __indexName: indexName
        }));
        allHits.push(...enriched);
        totalHits += res.nbHits;
        maxPages = Math.max(maxPages, res.nbPages);
        if (res.facets) {
          Object.entries(res.facets).forEach(([field, values]) => {
            if (!mergedFacets[field]) mergedFacets[field] = {};
            Object.entries(values).forEach(([val, count]) => {
              mergedFacets[field][val] = (mergedFacets[field][val] || 0) + count;
            });
          });
        }
      });
      if (!append) clearInjected(wrapper);
      if (allHits.length === 0 && !append) {
        show(noResults);
      } else {
        hide(noResults);
        renderHits(wrapper, template, allHits, append);
      }
      updateFilterCounts(mergedFacets);
      updateDynamicFilterCounts(mergedFacets);
      updateFilterVisibility(mergedFacets);
      updateFilterTags(FILTER_STATE, storedElements, runQuery);
      updateResultsCount(totalHits);
      updatePagination(maxPages);
    }).catch((err) => {
      hide(loader);
      console.error("[wf-algolia] Browse multi-query failed:", err);
    });
  }
  function updateResultsCount(totalHits) {
    document.querySelectorAll('[wf-algolia-element="results-count"]').forEach((el) => {
      const shown = Math.min(totalHits, (browseState.page + 1) * browseState.hitsPerPage);
      el.textContent = `Showing ${shown} of ${totalHits}`;
    });
  }
  function updatePagination(nbPages) {
    const prevBtn = document.querySelector('[wf-algolia-element="page-prev"]');
    const nextBtn = document.querySelector('[wf-algolia-element="page-next"]');
    if (prevBtn) prevBtn.style.display = browseState.page > 0 ? "" : "none";
    if (nextBtn) nextBtn.style.display = browseState.page < nbPages - 1 ? "" : "none";
    document.querySelectorAll('[wf-algolia-element="page-info"]').forEach((el) => {
      el.textContent = `Page ${browseState.page + 1} of ${nbPages}`;
    });
    const pageNumTemplate = document.querySelector('[wf-algolia-element="page-number"]');
    if (pageNumTemplate) {
      const container = pageNumTemplate.parentElement;
      if (container) {
        container.querySelectorAll(".wf-algolia-page-num").forEach((el) => el.remove());
        pageNumTemplate.style.display = "none";
        const windowSize = 5;
        let start = Math.max(0, browseState.page - Math.floor(windowSize / 2));
        const end = Math.min(nbPages, start + windowSize);
        start = Math.max(0, end - windowSize);
        for (let i = start; i < end; i++) {
          const btn = pageNumTemplate.cloneNode(true);
          btn.style.display = "";
          btn.classList.add("wf-algolia-page-num");
          btn.removeAttribute("wf-algolia-element");
          btn.textContent = String(i + 1);
          if (i === browseState.page) {
            btn.setAttribute("data-wf-algolia-active", "true");
            btn.style.backgroundColor = "#0e0e0e";
            btn.style.color = "#effba8";
            btn.style.borderColor = "#0e0e0e";
          }
          btn.addEventListener("click", () => {
            browseState.page = i;
            runQuery();
          });
          if (nextBtn) {
            container.insertBefore(btn, nextBtn);
          } else {
            container.appendChild(btn);
          }
        }
      }
    }
    if (infiniteScrollReset) infiniteScrollReset();
    if (urlSyncEnabled) {
      writeStateToURL({
        query: browseState.query,
        mode: browseState.mode,
        page: browseState.page,
        filters: FILTER_STATE
      });
    }
    if (browseState.topOffset && browseState.page > 0) {
      window.scrollTo({ top: browseState.topOffset, behavior: "smooth" });
    }
  }

  // src/core/accessibility.ts
  init_live_reload();
  function initAccessibility(elements) {
    (elements.get("search-input") || []).forEach((el) => {
      el.setAttribute("role", "searchbox");
      if (!el.getAttribute("aria-label")) {
        el.setAttribute("aria-label", "Search");
      }
    });
    (elements.get("browse-search") || []).forEach((el) => {
      el.setAttribute("role", "searchbox");
      if (!el.getAttribute("aria-label")) {
        el.setAttribute("aria-label", "Search");
      }
    });
    ["results", "autocomplete"].forEach((type) => {
      (elements.get(type) || []).forEach((el) => {
        el.setAttribute("role", "listbox");
        if (!el.getAttribute("aria-label")) {
          el.setAttribute("aria-label", "Search results");
        }
      });
    });
    (elements.get("results-count") || []).forEach((el) => {
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
    });
    (elements.get("no-results") || []).forEach((el) => {
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
    });
    (elements.get("mode-btn") || []).forEach((el) => {
      el.setAttribute("role", "tab");
      el.setAttribute("tabindex", "0");
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          el.click();
        }
      });
    });
    document.querySelectorAll('[wf-algolia-element="filter-item"]').forEach((item) => {
      if (!item.querySelector("input")) {
        item.setAttribute("role", "button");
        item.setAttribute("tabindex", "0");
      }
    });
  }

  // src/core/client.ts
  init_live_reload();
  var import_algoliasearch = __toESM(require_algoliasearch_umd(), 1);
  var clientInstance = null;
  function initClient(config) {
    if (!clientInstance) {
      clientInstance = (0, import_algoliasearch.default)(config.appId, config.searchKey);
    }
    return clientInstance;
  }

  // src/core/config.ts
  init_live_reload();
  function initConfig() {
    const script = document.querySelector("script[data-app-id]");
    if (!script) {
      throw new Error("[wf-algolia] Script tag missing data-app-id attribute");
    }
    const appId = script.getAttribute("data-app-id");
    const searchKey = script.getAttribute("data-search-key");
    if (!appId || !searchKey) {
      throw new Error("[wf-algolia] data-app-id and data-search-key are required");
    }
    return {
      appId,
      searchKey,
      insights: script.getAttribute("data-insights") === "true",
      debounce: parseInt(script.getAttribute("data-debounce") || "250"),
      activeClass: script.getAttribute("data-activeclass") || "is-active",
      hideClass: script.getAttribute("data-hideclass") || "is-hidden"
    };
  }

  // src/filters/select-filter.ts
  init_live_reload();
  function initSelectFilters(runQuery2) {
    document.querySelectorAll('[wf-algolia-element="filter-group"]').forEach((group) => {
      const type = group.getAttribute("wf-algolia-type");
      if (type !== "select" && type !== "select-multiple") return;
      const field = group.getAttribute("wf-algolia-field");
      if (!field) return;
      const select = group.querySelector("select");
      if (!select) return;
      select.addEventListener("change", () => {
        if (select.multiple) {
          const selected = [...select.selectedOptions].map((opt) => opt.value).filter(Boolean);
          if (selected.length === 0) {
            delete FILTER_STATE[field];
          } else {
            FILTER_STATE[field] = {
              type: "checkbox",
              match: "or",
              values: new Set(selected)
            };
          }
        } else {
          const value = select.value;
          if (!value) {
            delete FILTER_STATE[field];
          } else {
            FILTER_STATE[field] = {
              type: "checkbox",
              match: "or",
              values: /* @__PURE__ */ new Set([value])
            };
          }
        }
        runQuery2();
      });
    });
  }

  // src/recommend/recommend.ts
  init_live_reload();
  var import_recommend = __toESM(require_recommend_umd(), 1);
  async function initRecommendations(client, config, elements) {
    const recommendClient = (0, import_recommend.default)(config.appId, config.searchKey);
    const recSections = elements.get("recommend") || [];
    for (const section of recSections) {
      const model = section.getAttribute("wf-algolia-model");
      const indexName = section.getAttribute("wf-algolia-index");
      const grid = section.querySelector('[wf-algolia-element="recommend-grid"]');
      const template = grid ? findTemplateForContainer(grid, elements) : null;
      if (!model || !indexName || !grid || !template) {
        console.warn("[wf-algolia] recommend section missing model, index, grid, or template");
        return;
      }
      const detailEl = document.querySelector('[wf-algolia-element="detail"]');
      const paramName = detailEl?.getAttribute("wf-algolia-objectid") || "id";
      const objectID = new URLSearchParams(window.location.search).get(paramName);
      const needsObjectID = model !== "trending-items";
      if (needsObjectID && !objectID) {
        hide(section);
        return;
      }
      try {
        let hits = [];
        const maxRecs = 8;
        if (model === "related-products") {
          const res = await recommendClient.getRelatedProducts([{ indexName, objectID, maxRecommendations: maxRecs }]);
          hits = res.results[0]?.hits || [];
        } else if (model === "looking-similar") {
          const res = await recommendClient.getLookingSimilar([{ indexName, objectID, maxRecommendations: maxRecs }]);
          hits = res.results[0]?.hits || [];
        } else if (model === "trending-items") {
          const res = await recommendClient.getTrendingItems([{ indexName, maxRecommendations: maxRecs }]);
          hits = res.results[0]?.hits || [];
        } else if (model === "frequently-bought-together") {
          const res = await recommendClient.getFrequentlyBoughtTogether([
            { indexName, objectID, maxRecommendations: maxRecs }
          ]);
          hits = res.results[0]?.hits || [];
        }
        if (objectID) {
          hits = hits.filter((hit) => hit.objectID !== objectID);
        }
        if (hits.length === 0) {
          hide(section);
          return;
        }
        clearInjected(grid);
        renderHits(grid, template, hits);
        show(section);
      } catch (err) {
        console.error(`[wf-algolia] Recommend (${model}) failed:`, err);
        hide(section);
      }
    }
  }

  // src/render/detail.ts
  init_live_reload();
  function resolveObjectID(detailEl) {
    const directValue = detailEl.getAttribute("wf-algolia-objectid-value");
    if (directValue) {
      return { objectID: directValue, isSlug: true };
    }
    const fromPath = detailEl.getAttribute("wf-algolia-objectid-from");
    if (fromPath === "path") {
      const segments = window.location.pathname.split("/").filter(Boolean);
      const lastSegment = segments[segments.length - 1] || null;
      return { objectID: lastSegment, isSlug: true };
    }
    const paramName = detailEl.getAttribute("wf-algolia-objectid") || "id";
    const paramValue = new URLSearchParams(window.location.search).get(paramName);
    return { objectID: paramValue, isSlug: false };
  }
  function initDetailPage(client, config, elements) {
    const detailEl = (elements.get("detail") || [])[0];
    if (!detailEl) return;
    const indexName = detailEl.getAttribute("wf-algolia-index");
    if (!indexName) {
      console.warn("[wf-algolia] Detail page missing wf-algolia-index");
      return;
    }
    const { objectID, isSlug } = resolveObjectID(detailEl);
    if (!objectID) {
      console.warn("[wf-algolia] Detail page: no objectID found in URL or attributes");
      return;
    }
    const index = client.initIndex(indexName);
    const objectIDField = detailEl.getAttribute("wf-algolia-objectid-field") || "slug";
    const fetchPromise = isSlug ? index.search("", { filters: `${objectIDField}:${objectID}`, hitsPerPage: 1 }).then((res) => {
      if (res.hits.length === 0 && objectIDField !== "objectid") {
        return index.search("", { filters: `objectid:${objectID}`, hitsPerPage: 1 }).then((r2) => r2.hits[0] || null);
      }
      return res.hits[0];
    }) : index.getObject(objectID);
    fetchPromise.then((hit) => {
      if (!hit) {
        console.warn("[wf-algolia] Detail page: object not found for", objectID);
        return;
      }
      populateCard(detailEl, hit);
      detailEl.querySelectorAll('[wf-algolia-element="array-item"]').forEach((tmpl) => {
        const field = tmpl.getAttribute("wf-algolia-text");
        if (!field) return;
        const values = hit[field];
        if (!Array.isArray(values)) return;
        const container = tmpl.parentElement;
        hide(tmpl);
        clearInjected(container);
        values.forEach((val) => {
          const clone = tmpl.cloneNode(true);
          show(clone, "inline-block");
          clone.removeAttribute("wf-algolia-element");
          clone.classList.add("wf-algolia-injected");
          clone.textContent = val;
          container.appendChild(clone);
        });
      });
      restartWebflowInteractions();
    }).catch((err) => {
      console.error("[wf-algolia] Detail page fetch failed:", err);
    });
  }

  // src/search/autocomplete.ts
  init_live_reload();
  function initAutocomplete(client, config, elements) {
    const autocompleteContainers = elements.get("autocomplete") || [];
    autocompleteContainers.forEach((dropdown) => {
      const wrapper = dropdown.parentElement;
      const input = wrapper?.querySelector(
        '[wf-algolia-element="search-input"]'
      );
      if (!input || !wrapper) return;
      const sections = dropdown.querySelectorAll(
        '[wf-algolia-element="autocomplete-section"]'
      );
      let abortController = new AbortController();
      let activeIndex = -1;
      const search = debounce(async (query) => {
        abortController.abort();
        abortController = new AbortController();
        activeIndex = -1;
        if (!query.trim()) {
          hide(dropdown);
          return;
        }
        show(dropdown);
        const queries = [...sections].map((sec) => ({
          indexName: sec.getAttribute("wf-algolia-index"),
          query,
          params: {
            hitsPerPage: parseInt(sec.getAttribute("wf-algolia-hits") || "4"),
            clickAnalytics: true
          }
        }));
        try {
          const { results } = await client.multipleQueries(queries);
          results.forEach((result, i) => {
            const section = sections[i];
            const template = findTemplateForContainer(section, elements, "autocomplete-template");
            if (!template) return;
            const enrichedHits = result.hits.map((hit) => ({
              ...hit,
              __queryID: result.queryID,
              __indexName: queries[i].indexName
            }));
            clearInjected(section);
            if (enrichedHits.length) {
              renderHits(section, template, enrichedHits);
              show(section);
            } else {
              hide(section);
            }
          });
          const sectionLabels = dropdown.querySelectorAll(
            '[wf-algolia-element="autocomplete-section-label"]'
          );
          sectionLabels.forEach((label) => {
            const parentSection = label.closest('[wf-algolia-element="autocomplete-section"]');
            if (parentSection) {
              const hasHits = parentSection.querySelector(".wf-algolia-injected");
              if (hasHits) show(label);
              else hide(label);
            }
          });
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error("[wf-algolia] Autocomplete search failed:", err);
          }
        }
      }, Math.min(config.debounce, 150));
      input.addEventListener("input", (e) => {
        search(e.target.value);
      });
      input.addEventListener("keydown", (e) => {
        const items = dropdown.querySelectorAll(".wf-algolia-injected");
        if (!items.length) return;
        if (e.key === "ArrowDown") {
          e.preventDefault();
          activeIndex = Math.min(activeIndex + 1, items.length - 1);
          items.forEach(
            (item, i) => item.classList.toggle("wf-algolia-focused", i === activeIndex)
          );
          if (items[activeIndex]?.id) {
            input.setAttribute("aria-activedescendant", items[activeIndex].id);
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          activeIndex = Math.max(activeIndex - 1, 0);
          items.forEach(
            (item, i) => item.classList.toggle("wf-algolia-focused", i === activeIndex)
          );
        } else if (e.key === "Enter" && activeIndex >= 0) {
          e.preventDefault();
          const focusedItem = items[activeIndex];
          const link = focusedItem?.querySelector("a") || (focusedItem instanceof HTMLAnchorElement ? focusedItem : null);
          if (link?.href) window.location.href = link.href;
        } else if (e.key === "Escape") {
          hide(dropdown);
          activeIndex = -1;
        }
      });
      document.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target)) {
          hide(dropdown);
          activeIndex = -1;
        }
      });
      input.addEventListener("focus", () => {
        if (input.value.trim() && dropdown.querySelector(".wf-algolia-injected")) {
          show(dropdown);
        }
      });
    });
  }

  // src/search/merged-search.ts
  init_live_reload();
  function initMergedSearch(client, config, elements) {
    document.querySelectorAll("[wf-algolia-index]").forEach((container) => {
      const indexAttr = container.getAttribute("wf-algolia-index");
      if (!indexAttr.includes(",")) return;
      const indices = indexAttr.split(",").map((s) => s.trim()).filter(Boolean);
      if (indices.length < 2) return;
      const input = container.querySelector(
        '[wf-algolia-element="search-input"]'
      );
      const resultsPanel = container.querySelector(
        '[wf-algolia-element="results"]'
      );
      const template = resultsPanel ? findTemplateForContainer(resultsPanel, elements) : null;
      const noResults = container.querySelector(
        '[wf-algolia-element="no-results"]'
      );
      const loader = container.querySelector(
        '[wf-algolia-element="loader"]'
      );
      const hitsMax = parseInt(container.getAttribute("wf-algolia-hits") || "8");
      if (!input || !resultsPanel || !template) return;
      let abortController = new AbortController();
      const search = debounce(async (query) => {
        abortController.abort();
        abortController = new AbortController();
        if (!query.trim()) {
          hide(resultsPanel);
          return;
        }
        show(resultsPanel);
        show(loader);
        const hitsPerIndex = Math.ceil(hitsMax / indices.length);
        const queries = indices.map((indexName) => ({
          indexName,
          query,
          params: {
            hitsPerPage: hitsPerIndex,
            clickAnalytics: true
          }
        }));
        try {
          const { results } = await client.multipleQueries(queries);
          hide(loader);
          const allHitArrays = results.map(
            (r, i) => r.hits.map((hit) => ({
              ...hit,
              __queryID: r.queryID,
              __indexName: indices[i]
            }))
          );
          const merged = [];
          const maxLen = Math.max(...allHitArrays.map((a) => a.length));
          for (let j = 0; j < maxLen; j++) {
            for (const arr of allHitArrays) {
              if (j < arr.length) merged.push(arr[j]);
            }
          }
          clearInjected(resultsPanel);
          if (merged.length === 0) {
            show(noResults);
          } else {
            hide(noResults);
            renderHits(resultsPanel, template, merged);
          }
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error("[wf-algolia] Merged search failed:", err);
          }
          hide(loader);
        }
      }, config.debounce);
      input.addEventListener("input", (e) => {
        search(e.target.value);
      });
      document.addEventListener("click", (e) => {
        if (!container.contains(e.target)) {
          hide(resultsPanel);
        }
      });
    });
  }

  // src/search/multi-search.ts
  init_live_reload();
  function initMultiSectionSearch(client, config, elements) {
    const inputs = (elements.get("search-input") || []).filter(
      (el) => !el.closest("[wf-algolia-index]")
    );
    inputs.forEach((input) => {
      const wrapper = input.closest('[wf-algolia-element="results"]')?.parentElement || input.parentElement;
      const resultsPanel = wrapper?.querySelector('[wf-algolia-element="results"]');
      if (!resultsPanel) return;
      const sections = resultsPanel.querySelectorAll(
        '[wf-algolia-element="section"]'
      );
      const noResults = resultsPanel.querySelector(
        '[wf-algolia-element="no-results"]'
      );
      const divider = resultsPanel.querySelector('[wf-algolia-element="divider"]');
      const loader = resultsPanel.querySelector('[wf-algolia-element="loader"]');
      let abortController = new AbortController();
      const search = debounce(async (query) => {
        abortController.abort();
        abortController = new AbortController();
        if (!query.trim()) {
          hide(resultsPanel);
          return;
        }
        show(resultsPanel);
        show(loader);
        const queries = [...sections].map((sec) => ({
          indexName: sec.getAttribute("wf-algolia-index"),
          query,
          params: {
            hitsPerPage: parseInt(sec.getAttribute("wf-algolia-hits") || "5"),
            clickAnalytics: true,
            attributesToSnippet: ["*:30"]
          }
        }));
        try {
          const { results } = await client.multipleQueries(queries);
          hide(loader);
          let totalHits = 0;
          let sectionsWithHits = 0;
          results.forEach((result, i) => {
            const section = sections[i];
            const template = findTemplateForContainer(section, elements);
            if (!template) return;
            const enrichedHits = result.hits.map((hit) => ({
              ...hit,
              __queryID: result.queryID,
              __indexName: queries[i].indexName
            }));
            clearInjected(section);
            if (enrichedHits.length) {
              renderHits(section, template, enrichedHits);
              show(section);
              sectionsWithHits++;
            } else {
              hide(section);
            }
            totalHits += enrichedHits.length;
          });
          if (sectionsWithHits > 1) show(divider);
          else hide(divider);
          if (totalHits === 0) show(noResults);
          else hide(noResults);
          const countEl = wrapper?.querySelector('[wf-algolia-element="results-count"]');
          if (countEl) countEl.textContent = `${totalHits} results`;
        } catch (err) {
          if (err.name === "AbortError") return;
          console.error("[wf-algolia] Multi-section search failed:", err);
          hide(loader);
        }
      }, config.debounce);
      input.addEventListener("input", (e) => {
        search(e.target.value);
      });
      document.addEventListener("click", (e) => {
        if (!wrapper?.contains(e.target)) {
          hide(resultsPanel);
        }
      });
      input.addEventListener("focus", () => {
        if (input.value.trim()) {
          show(resultsPanel);
        }
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Escape") hide(resultsPanel);
      });
    });
  }

  // src/search/search.ts
  init_live_reload();
  function initSearchInstances(client, config, elements) {
    const inputs = (elements.get("search-input") || []).filter(
      (el) => !!el.closest("[wf-algolia-index]")
    );
    inputs.forEach((input) => {
      const container = input.closest("[wf-algolia-index]");
      const indexName = container.getAttribute("wf-algolia-index");
      const resultsPanel = container.querySelector('[wf-algolia-element="results"]');
      const template = resultsPanel ? findTemplateForContainer(resultsPanel, elements) : null;
      const noResults = container.querySelector('[wf-algolia-element="no-results"]');
      const loader = container.querySelector('[wf-algolia-element="loader"]');
      const hitsMax = parseInt(container.getAttribute("wf-algolia-hits") || "8");
      if (!resultsPanel || !template) return;
      let abortController = new AbortController();
      const search = debounce(async (query) => {
        abortController.abort();
        abortController = new AbortController();
        if (!query.trim()) {
          hide(resultsPanel);
          return;
        }
        show(resultsPanel);
        show(loader);
        try {
          const res = await client.initIndex(indexName).search(query, {
            hitsPerPage: hitsMax,
            clickAnalytics: true,
            attributesToSnippet: ["*:30"]
          });
          hide(loader);
          const enrichedHits = res.hits.map((hit) => ({
            ...hit,
            __queryID: res.queryID,
            __indexName: indexName
          }));
          if (enrichedHits.length === 0) {
            clearInjected(resultsPanel);
            show(noResults);
          } else {
            hide(noResults);
            renderHits(resultsPanel, template, enrichedHits);
          }
          const countEl = container.querySelector('[wf-algolia-element="results-count"]');
          if (countEl) countEl.textContent = `${res.nbHits} results`;
        } catch (err) {
          hide(loader);
          console.error(`[wf-algolia] Scoped search failed for "${indexName}":`, err);
        }
      }, config.debounce);
      input.addEventListener("input", (e) => {
        search(e.target.value);
      });
      document.addEventListener("click", (e) => {
        if (!container.contains(e.target)) {
          hide(resultsPanel);
        }
      });
    });
  }

  // src/utils/form-block.ts
  init_live_reload();
  function handleFormBlocks() {
    const forms = /* @__PURE__ */ new Set();
    document.querySelectorAll("[wf-algolia-element]").forEach((el) => {
      const form = el.closest("form");
      if (form) forms.add(form);
    });
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      const wrapper = form.closest(".w-form") || form.parentElement;
      if (wrapper) {
        const successMsg = wrapper.querySelector(".w-form-done");
        const errorMsg = wrapper.querySelector(".w-form-fail");
        if (successMsg) successMsg.style.display = "none";
        if (errorMsg) errorMsg.style.display = "none";
      }
      const submitBtn = form.querySelector('input[type="submit"], button[type="submit"]');
      if (submitBtn) submitBtn.style.display = "none";
      console.log("[wf-algolia] Auto-handled Form Block containing wf-algolia elements");
    });
  }

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(async () => {
    try {
      const config = initConfig();
      const client = initClient(config);
      const elements = scanAttributes();
      handleFormBlocks();
      initAccessibility(elements);
      if (elements.has("browse")) {
        initBrowsePage(client, config, elements);
      }
      initSelectFilters(() => emit("refresh"));
      if (elements.has("detail")) {
        initDetailPage(client, config, elements);
      }
      if (elements.has("recommend")) {
        initRecommendations(client, config, elements);
      }
      initSearchInstances(client, config, elements);
      initMultiSectionSearch(client, config, elements);
      initMergedSearch(client, config, elements);
      if (elements.has("autocomplete")) {
        initAutocomplete(client, config, elements);
      }
      if (config.insights) {
        initInsights(config);
      }
      exposePublicAPI(client, config);
      console.log(
        `[wf-algolia] Initialized with App ID: ${config.appId} (${elements.size} element types found)`
      );
      emit("ready");
    } catch (err) {
      console.error("[wf-algolia] Initialization failed:", err);
    }
  });
})();
/*! Bundled license information:

algoliasearch/dist/algoliasearch.umd.js:
  (*! algoliasearch.umd.js | 4.26.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript *)

@algolia/recommend/dist/recommend.umd.js:
  (*! recommend.umd.js | 4.26.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript *)
*/
//# sourceMappingURL=index.js.map
