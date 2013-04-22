/*pub-1|2013-01-04 16:27:43*/
var DetectZoom = {
    mediaQueryBinarySearch: function(K, J, I, H, E, L) {
        var D;
        var G, C, B;
        if (window.matchMedia) {
            D = window.matchMedia
        } else {
            G = document.getElementsByTagName("head")[0];
            C = document.createElement("style");
            B = document.createElement("div");
            B.className = "mediaQueryBinarySearch";
            G.appendChild(C);
            B.style.display = "none";
            document.body.appendChild(B);
            D = function(N) {
                C.sheet.insertRule("@media " + N + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0);
                var M = getComputedStyle(B, null).textDecoration == "underline";
                C.sheet.deleteRule(0);
                return {
                    matches: M
                }
            }
        }
        var A = F(I, H, E);
        if (B) {
            G.removeChild(C);
            document.body.removeChild(B)
        }
        return A;

        function F(N, M, Q) {
            var O = (N + M) / 2;
            if (Q == 0 || M - N < L) {
                return O
            }
            var P = "(" + K + ":" + O + J + ")";
            if (D(P).matches) {
                return F(O, M, Q - 1)
            } else {
                return F(N, O, Q - 1)
            }
        }
    },
    _zoomIe7: function() {
        var A = document.body.getBoundingClientRect();
        var B = (A.right - A.left) / document.body.offsetWidth;
        B = Math.round(B * 100) / 100;
        return {
            zoom: B,
            devicePxPerCssPx: B
        }
    },
    _zoomIe8: function() {
        var A = screen.deviceXDPI / screen.logicalXDPI;
        return {
            zoom: A,
            devicePxPerCssPx: A
        }
    },
    _zoomWebkitMobile: function() {
        var A = window.devicePixelRatio != null ? window.devicePixelRatio : 1,
            B;
        if (Math.abs(window.orientation) == 90) {
            B = screen.height
        } else {
            B = screen.width
        }
        var C = B / window.innerWidth;
        return {
            zoom: C,
            devicePxPerCssPx: C * A
        }
    },
    _zoomWebkit: function() {
        var A = window.devicePixelRatio != null ? window.devicePixelRatio : 1;
        var B = document.createElement("div"),
            F = document.createElement("div");
        var C = function(G) {
                return G.replace(/;/g, " !important;")
            };
        B.setAttribute("style", C("width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;"));
        F.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0";
        F.setAttribute("style", C("font: 100px/1em sans-serif; -webkit-text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;"));
        B.appendChild(F);
        document.body.appendChild(B);
        var E = 1000 / F.clientHeight;
        E = Math.round(E * 100) / 100;
        var D = {
            zoom: E,
            devicePxPerCssPx: A * E
        };
        document.body.removeChild(B);
        return D
    },
    _zoomFF35: function() {
        var A = screen.width / this.mediaQueryBinarySearch("min-device-width", "px", 0, 6000, 20, 0.0001);
        A = Math.round(A * 100) / 100;
        return {
            zoom: A,
            devicePxPerCssPx: A
        }
    },
    _zoomFF36: function() {
        var B = document.createElement("div"),
            H = document.createElement("div");
        B.setAttribute("style", "width:0; height:0; overflow:hidden;visibility:hidden; position: absolute");
        H.style.width = H.style.height = "500px";
        var A = H;
        for (var D = 0; D < 10; ++D) {
            var C = document.createElement("div");
            C.style.overflowY = "scroll";
            A.appendChild(C);
            A = C
        }
        B.appendChild(H);
        document.body.appendChild(B);
        var I = H.clientWidth;
        var G = A.clientWidth;
        var F = (I - G) / 10;
        document.body.removeChild(B);
        var J = 15;
        if (-1 != navigator.platform.indexOf("Win")) {
            J = 17
        }
        var E = J / F;
        E = Math.round(E * 100) / 100;
        return {
            zoom: E,
            devicePxPerCssPx: E
        }
    },
    _zoomFF4: function() {
        var A = this.mediaQueryBinarySearch("min--moz-device-pixel-ratio", "", 0, 10, 20, 0.0001);
        A = Math.round(A * 100) / 100;
        return {
            zoom: A,
            devicePxPerCssPx: A
        }
    },
    _zoomOperaOlder: function() {
        var A = document.createElement("div");
        A.style.position = "fixed";
        A.style.width = "100%";
        A.style.height = "100%";
        A.style.top = A.style.left = "0";
        A.style.visibility = "hidden";
        document.body.appendChild(A);
        var B = window.innerWidth / A.offsetWidth;
        document.body.removeChild(A);
        return {
            zoom: B,
            devicePxPerCssPx: B
        }
    },
    _zoomOpera11: function() {
        var A = window.outerWidth / window.innerWidth;
        A = Math.round(A * 100) / 100;
        return {
            zoom: A,
            devicePxPerCssPx: A
        }
    },
    ratios: function() {
        var A;
        if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) {
            return this._zoomIe8()
        } else {
            if ("ontouchstart" in window && document.body.style.webkitTextSizeAdjust != null) {
                return this._zoomWebkitMobile()
            } else {
                if (document.body.style.webkitTextSizeAdjust != null) {
                    return this._zoomWebkit()
                } else {
                    if (-1 != navigator.userAgent.indexOf("Firefox/3.5")) {
                        return this._zoomFF35()
                    } else {
                        if (-1 != navigator.userAgent.indexOf("Firefox/3.6")) {
                            return this._zoomFF36()
                        } else {
                            if (-1 != navigator.appVersion.indexOf("MSIE 7.")) {
                                return this._zoomIe7()
                            } else {
                                if (-1 != navigator.userAgent.indexOf("Opera")) {
                                    var B = navigator.userAgent.indexOf("Version/");
                                    if (11.01 < parseFloat(navigator.userAgent.substr(B + 8))) {
                                        return this._zoomOpera11()
                                    } else {
                                        return this._zoomOperaOlder()
                                    }
                                } else {
                                    if (-1 != navigator.userAgent.indexOf("Firefox/4") && 0.001 < (A = this._zoomFF4()).zoom) {
                                        return A
                                    } else {
                                        return {
                                            zoom: 1,
                                            devicePxPerCssPx: 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    zoom: function() {
        return this.ratios().zoom
    },
    device: function() {
        return this.ratios().devicePxPerCssPx
    }
};
