<html class="html" lang="en-us" prefix="og: https://ogp.me/ns#">

<head>
    <meta charset="utf-8">
    <script async="" type="text/javascript" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script async="" type="text/javascript" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script async="" type="text/javascript" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
    <script async=""
        src="https://etcgamer.com/ezossp/https/www.googletagmanager.com/gtm.js?screx=1&amp;sxcb=2&amp;id=GTM-NJKK2DW">
    </script>
    <script async="" type="text/javascript" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script src="https://secure.quantserve.com/quant.js" async="" type="text/javascript"></script>
    <script async="" type="text/javascript" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer="">
        var __ez = __ez || {};
        __ez.stms = Date.now();
        __ez.evt = {};
        __ez.script = {};
        __ez.ck = __ez.ck || {};
        __ez.template = {};
        __ez.template.isOrig = false;
        __ez.queue = (function () {
            var count = 0,
                incr = 0,
                items = [],
                timeDelayFired = false,
                hpItems = [],
                lpItems = [],
                allowLoad = true;
            var obj = {
                func: function (name, funcName, parameters, isBlock, blockedBy, deleteWhenComplete,
                    proceedIfError) {
                    var self = this;
                    this.name = name;
                    this.funcName = funcName;
                    this.parameters = parameters === null ? null : (parameters instanceof Array) ?
                        parameters : [parameters];
                    this.isBlock = isBlock;
                    this.blockedBy = blockedBy;
                    this.deleteWhenComplete = deleteWhenComplete;
                    this.isError = false;
                    this.isComplete = false;
                    this.isInitialized = false;
                    this.proceedIfError = proceedIfError;
                    this.isTimeDelay = false;
                    this.process = function () {
                        log("... func = " + name);
                        self.isInitialized = true;
                        self.isComplete = true;
                        log("... func.apply: " + name);
                        var funcs = self.funcName.split('.');
                        var func = null;
                        if (funcs.length > 3) {} else if (funcs.length === 3) {
                            func = window[funcs[0]][funcs[1]][funcs[2]];
                        } else if (funcs.length === 2) {
                            func = window[funcs[0]][funcs[1]];
                        } else {
                            func = window[self.funcName];
                        }
                        if (typeof func !== 'undefined' && func !== null) {
                            func.apply(null, this.parameters);
                        }
                        if (self.deleteWhenComplete === true) delete items[name];
                        if (self.isBlock === true) {
                            log("----- F'D: " + self.name);
                            processAll();
                        }
                    }
                },
                file: function (name, path, isBlock, blockedBy, async, defer, proceedIfError) {
                    var self = this;
                    this.name = name;
                    this.path = path;
                    this.async = async;
                    this.defer = defer;
                    this.isBlock = isBlock;
                    this.blockedBy = blockedBy;
                    this.isInitialized = false;
                    this.isError = false;
                    this.isComplete = false;
                    this.proceedIfError = proceedIfError;
                    this.isTimeDelay = false;
                    this.process = function () {
                        self.isInitialized = true;
                        log("... file = " + name);
                        var scr = document.createElement('script');
                        scr.src = path;
                        if (async ===true) scr.async = true;
                        else if (defer === true) scr.defer = true;
                        scr.onerror = function () {
                            log("----- ERR'D: " + self.name);
                            self.isError = true;
                            if (self.isBlock === true) {
                                processAll();
                            }
                        };
                        scr.onreadystatechange = scr.onload = function () {
                            var state = scr.readyState;
                            log("----- F'D: " + self.name);
                            if ((!state || /loaded|complete/.test(state))) {
                                self.isComplete = true;
                                if (self.isBlock === true) {
                                    processAll();
                                }
                            }
                        };
                        document.getElementsByTagName('head')[0].appendChild(scr);
                    }
                },
                fileLoaded: function (name, isComplete) {
                    this.name = name;
                    this.path = "";
                    this.async = false;
                    this.defer = false;
                    this.isBlock = false;
                    this.blockedBy = [];
                    this.isInitialized = true;
                    this.isError = false;
                    this.isComplete = isComplete;
                    this.proceedIfError = false;
                    this.isTimeDelay = false;
                    this.process = function () {};
                }
            };

            function init() {
                window.addEventListener("load", function () {
                    setTimeout(function () {
                        timeDelayFired = true;
                        log('TDELAY -----');
                        processAll();
                    }, 5000);
                }, false);
            }

            function addFile(name, path, isBlock, blockedBy, async, defer, proceedIfError, priority) {
                var item = new obj.file(name, path, isBlock, blockedBy, async, defer, proceedIfError);
                if (priority === true) {
                    hpItems[name] = item
                } else {
                    lpItems[name] = item
                }
                items[name] = item;
                checkIfBlocked(item);
            }

            function setallowLoad(settobool) {
                allowLoad = settobool
            }

            function addFunc(name, func, parameters, isBlock, blockedBy, autoInc, deleteWhenComplete,
                proceedIfError, priority) {
                if (autoInc === true) name = name + "_" + incr++;
                var item = new obj.func(name, func, parameters, isBlock, blockedBy, deleteWhenComplete,
                    proceedIfError);
                if (priority === true) {
                    hpItems[name] = item
                } else {
                    lpItems[name] = item
                }
                items[name] = item;
                checkIfBlocked(item);
            }

            function addTimeDelayFile(name, path) {
                var item = new obj.file(name, path, false, [], false, false, true);
                item.isTimeDelay = true;
                log(name + ' ... ' + ' FILE! TDELAY');
                lpItems[name] = item;
                items[name] = item;
                checkIfBlocked(item);
            }

            function addTimeDelayFunc(name, func, parameters) {
                var item = new obj.func(name, func, parameters, false, [], true, true);
                item.isTimeDelay = true;
                log(name + ' ... ' + ' FUNCTION! TDELAY');
                lpItems[name] = item;
                items[name] = item;
                checkIfBlocked(item);
            }

            function checkIfBlocked(item) {
                if (isBlocked(item) === true || allowLoad == false) return;
                item.process();
            }

            function isBlocked(item) {
                if (item.isTimeDelay === true && timeDelayFired === false) {
                    log(item.name + " blocked = TIME DELAY!");
                    return true;
                }
                if (item.blockedBy instanceof Array) {
                    for (var i = 0; i < item.blockedBy.length; i++) {
                        var block = item.blockedBy[i];
                        if (items.hasOwnProperty(block) === false) {
                            log(item.name + " blocked = " + block);
                            return true;
                        } else if (item.proceedIfError === true && items[block].isError === true) {
                            return false;
                        } else if (items[block].isComplete === false) {
                            log(item.name + " blocked = " + block);
                            return true;
                        }
                    }
                }
                return false;
            }

            function markLoaded(filename) {
                if (!filename || 0 === filename.length) {
                    return;
                }
                if (filename in items) {
                    var item = items[filename];
                    if (item.isComplete === true) {
                        log(item.name + ' ' + filename + ': error loaded duplicate')
                    } else {
                        item.isComplete = true;
                        item.isInitialized = true;
                    }
                } else {
                    items[filename] = new obj.fileLoaded(filename, true);
                }
                log("markLoaded dummyfile: " + items[filename].name);
            }

            function logWhatsBlocked() {
                for (var i in items) {
                    if (items.hasOwnProperty(i) === false) continue;
                    var item = items[i];
                    isBlocked(item)
                }
            }

            function log(msg) {
                var href = window.location.href;
                var reg = new RegExp('[?&]ezq=([^&#]*)', 'i');
                var string = reg.exec(href);
                var res = string ? string[1] : null;
                if (res === "1") console.debug(msg);
            }

            function processAll() {
                count++;
                if (count > 200) return;
                log("let's go");
                processItems(hpItems);
                processItems(lpItems);
            }

            function processItems(list) {
                for (var i in list) {
                    if (list.hasOwnProperty(i) === false) continue;
                    var item = list[i];
                    if (item.isComplete === true || isBlocked(item) || item.isInitialized === true || item
                        .isError === true) {
                        if (item.isError === true) {
                            log(item.name + ': error')
                        } else if (item.isComplete === true) {
                            log(item.name + ': complete already')
                        } else if (item.isInitialized === true) {
                            log(item.name + ': initialized already')
                        }
                    } else {
                        item.process();
                    }
                }
            }
            init();
            return {
                addFile: addFile,
                addDelayFile: addTimeDelayFile,
                addFunc: addFunc,
                addDelayFunc: addTimeDelayFunc,
                items: items,
                processAll: processAll,
                setallowLoad: setallowLoad,
                markLoaded: markLoaded,
                logWhatsBlocked: logWhatsBlocked,
            };
        })();
        __ez.evt.add = function (e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e[
                "on" + t] = n()
        }, __ez.evt.remove = function (e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) :
                delete e["on" + t]
        };
        __ez.script.add = function (e) {
            var t = document.createElement("script");
            t.src = e, t.async = !0, t.type = "text/javascript", document.getElementsByTagName("head")[0]
                .appendChild(t)
        };
        __ez.dot = {};
    </script>
    <script>
        var __sellerid = "c5e71e1e2975073b1ead038d8a26eecb";
    </script>
    <link rel="preload" as="script" href="//securepubads.g.doubleclick.net/tag/js/gpt.js">
    <link href="//ad.doubleclick.net" rel="dns-prefetch">
    <link href="//pagead2.googlesyndication.com" rel="dns-prefetch">
    <link href="//googleads.g.doubleclick.net" rel="dns-prefetch">
    <link href="//tpc.googlesyndication.com" rel="dns-prefetch">
    <link href="//adservice.google.com" rel="dns-prefetch">
    <link href="//secureads.g.doubleclick.net" rel="dns-prefetch">
    <link href="//www.googletagservices.com" rel="dns-prefetch">
    <link rel="preload" as="script"
        href="//go.ezodn.com/hb/dall.js?b=medianet,oneVideo,onemobile,onetag,pubmatic,pulsepoint,smilewanted&amp;cb=195-0-23">
    <script>
        var __banger_pmp_deals = function () {
            var d = {
                18: {
                    "DealId": 18,
                    "Floor": 25
                },
                1428: {
                    "DealId": 1428,
                    "Floor": 25
                },
                6: {
                    "DealId": 6,
                    "Floor": 50
                },
                19: {
                    "DealId": 19,
                    "Floor": 100
                },
                5: {
                    "DealId": 5,
                    "Floor": 100
                }
            };
            return [{
                "SlotName": "/1254144/etcgamer_com-box-2",
                "Deals": [d[18], d[1428], d[6]]
            }, {
                "SlotName": "/1254144/etcgamer_com-box-1",
                "Deals": [d[18], d[1428], d[6]]
            }, {
                "SlotName": "/1254144/etcgamer_com-box-3",
                "Deals": [d[18], d[1428], d[6]]
            }, {
                "SlotName": "/1254144/etcgamer_com-leader-1",
                "Deals": [d[18], d[1428], d[6]]
            }, {
                "SlotName": "/1254144/etcgamer_com-medrectangle-3",
                "Deals": [d[18], d[1428], d[6]]
            }, {
                "SlotName": "/1254144/etcgamer_com-banner-2",
                "Deals": [d[18], d[1428], d[6]]
            }, {
                "SlotName": "/1254144/etcgamer_com-banner-1",
                "Deals": [d[18], d[1428], d[6]]
            }, {
                "SlotName": "/1254144/etcgamer_com-medrectangle-4",
                "Deals": [d[18], d[1428], d[6]]
            }, {
                "SlotName": "/1254144/etcgamer_com-box-4",
                "Deals": [d[18], d[1428], d[6]]
            }, {
                "SlotName": "/1254144/etcgamer_com-medrectangle-2",
                "Deals": [d[18], d[19], d[1428], d[5], d[6]]
            }]
        }();
    </script>
    <script>
        _ebcids = [138231308856, 138231308940, 138231308949, 138231387842, 138231421744, 138231421759, 138231421774,
            138231421783, 138231421789, 138231421792, 138242067587, 138242067590, 138242067602, 138242067605,
            138242067608, 138242067614, 138242229406, 138242229415, 138242229421, 138242229430
        ];
    </script>
    <script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer="">
        ezobv = 28;
    </script>
    <script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer="">
        function ez_isclean(data) {
            if (typeof data === 'undefined') {
                data = document.URL;
            }
            var re =
                /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
            var isClean = !re.test(data);
            return isClean;
        }
        var ezSlotKVStore = {};

        function ezSetSlotTargeting(divid, key, value) {
            var slot = ezGetSlotById(divid);
            if (slot) {
                slot.setTargeting(key, value);
            } else {
                if (typeof ezSlotKVStore[divid] == 'undefined') {
                    ezSlotKVStore[divid] = {};
                }
                ezSlotKVStore[divid][key] = value;
            }
        }

        function ezGetSlotById(id) {
            if (typeof window.ezslots === 'undefined' || window.ezslots == 0) {
                return;
            }
            for (var i = 0; i < window.ezslots.length; i++) {
                var slot = window[ezslots[i]];
                if (typeof slot === 'undefined') {
                    continue;
                }
                var slotId = slot.getSlotElementId();
                if (typeof slotId !== 'undefined' && slotId == id) {
                    return slot;
                }
            }
        }
        var ez_queue = new Array();

        function sort_queue(a, b) {
            if (a.priority < b.priority) return -1;
            else if (a.priority == b.priority) return 0;
            else return 1;
        }

        function execute_ez_queue() {
            ez_queue.sort(sort_queue);
            for (var i in ez_queue) {
                if (typeof ez_queue[i].method != "undefined") {
                    try {
                        ez_queue[i].method.call(null);
                    } catch (err) {}
                }
            }
        }
        window.ez_ad_units = new Array();
        window.ezslots = new Array();
        window.ezsrqt = {};

        function ez_write_tag(d) {
            if (ez_isclean() && d instanceof Array) {
                if (typeof ezstandalone !== 'undefined' && typeof ezstandalone.selectedPlaceholders !== 'undefined' &&
                    ezstandalone.selectedPlaceholders[d[3]] === true) {
                    return "1+1";
                }
                ez_ad_units[ez_ad_units.length] = d;
                var dve = "";
                if (typeof d[5] != 'undefined' && d[5] > 0) {
                    dve = '_' + d[5];
                }
                var ezcmd = "googletag.cmd.push(function() {var divid = 'div-gpt-ad-" + d[1] + "-" + d[4] + "" + dve +
                    "';if(typeof ezlrarn == 'function'){ezlrarn(divid);}googletag.display(divid);var to = 0;if(" + d[
                    2] +
                    ".getTargeting('ga')[0] == '0'){to = 500;}if((window.ezDisableInitialLoad==true || googletag.pubads().isInitialLoadDisabled()) && window.ezoll != true){setTimeout(function(){googletag.pubads().refresh([" +
                    d[2] + "])},to);}});";
                return ezcmd;
            }
            return "1+1";
        }

        function in_array(needle, haystack) {
            var length = haystack.length;
            for (var i = 0; i < length; i++) {
                if (haystack[i] == needle) return true;
            }
            return false;
        }
        var ezrpos = new Array();
        var ez_current_interval;
        var ez_current_load = 0;

        function __ez_fad_load(n, r) {
            if (__ez_fad_csnt() && __ez_fad_rdy() && ezslit_run[n] != true && typeof __ez_fad_divs[n] != 'undefined' &&
                __ez_fad_divs[n].length > 0) {
                ezslit_run[n] = true;
                __ez_fad_gpt();
                if (n > 0 && n != 5) {
                    __ez_fad_pb();
                }
                googletag.cmd.push(function () {
                    var s = [];
                    for (var i = 0; i < __ez_fad_divs[n].length; i++) {
                        if (__ez_fad_divsd.indexOf(__ez_fad_divs[n][i]) == -1) {
                            __ez_fad_divsd.push(__ez_fad_divs[n][i]);
                            s.push(__ez_fad_initslot[__ez_fad_divs[n][i]](r));
                            googletag.display(__ez_fad_divs[n][i]);
                        }
                    };
                    var ws = [];
                    for (i3 = 0; i3 < s.length; i3++) {
                        ws.push(window[s[i3]]);
                    }
                    googletag.pubads().refresh(ws);
                    setTimeout(__ez_fad_floatshow, 0);
                });
                if (n == 0) {
                    if (document.readyState === "complete" || document.readyState === "loaded") {
                        googletag.cmd.push(function () {
                            __ez_fad_load(5, null);
                        });
                        setTimeout(googletag.cmd.push(function () {
                            __ez_fad_floatshow()
                        }), 500);
                        setTimeout(function () {
                            __ez_fad_load(1, null);
                            __ez_fad_load(5, null);
                        }, 5500);
                        return;
                    }
                    document.addEventListener('DOMContentLoaded', function (evt) {
                        googletag.cmd.push(function () {
                            __ez_fad_load(5, null);
                        });
                        setTimeout(googletag.cmd.push(function () {
                            __ez_fad_floatshow()
                        }), 500);
                        setTimeout(function () {
                            __ez_fad_load(1, null);
                            __ez_fad_load(5, null);
                        }, 5500);
                    }, false);
                }
            }
        }
        var __ez_fad_floatshowd = false;

        function __ez_fad_floatshow(d) {
            if (__ez_fad_floatshowd == false && typeof __ez_fad_floating != 'undefined') {
                __ez_fad_floatshowd = true;
                var e = document.getElementById('ezmobfooter');
                if (e != null) {
                    e.classList.add('ezmobtrans');
                } else {
                    head = document.head || document.getElementsByTagName('head')[0], style = document.createElement(
                        'style');
                    head.appendChild(style);
                    var css = "body > #ezmobfooter{bottom:0px !important;visibility:visible;}";
                    style.type = 'text/css';
                    if (style.styleSheet) {
                        style.styleSheet.cssText = css;
                    } else {
                        style.appendChild(document.createTextNode(css));
                    }
                }
                googletag.cmd.push(function () {
                    for (var i = 0; i < __ez_fad_floating.length; i++) {
                        var s = __ez_fad_initslot[__ez_fad_floating[i]](null);
                        googletag.display(__ez_fad_floating[i]);
                        googletag.pubads().refresh([window[s]]);
                    }
                });
            }
        }
        var __ez_fad_initslot = {};
        var __ez_fad_fastd = [];
        var __ez_fad_fastdiv = [];
        var __ez_fad_fastslots = [];
        var __ez_fad_viewslots = [];
        var __ez_fad_instaslots = [];
        var ezslit_run = [];
        var __ez_fad_divs = [
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        __ez_fad_divpos = {};
        var __ez_fad_divsd = [];
        var __ez_fad_vw = window.screen.width;
        var __ez_fad_vh = window.screen.height;

        function __ez_fad_invisible(e) {
            !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }

        function __ez_fad_position(id) {
            var did = document.getElementById(id);
            if (did != null) {
                var rect = did.getBoundingClientRect();
                var vs = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
                var vh = vs + __ez_fad_vh;
                _ez_fad_vw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                __ez_fad_vh = window.innerHeight || Math.max(document.documentElement.clientHeight, document.body
                    .clientHeight);
                var height_adjust = 800;
                if (__ez_fad_vw < 1200) {
                    height_adjust = __ez_fad_vh * 1.25;
                    vh += 0;
                }
                if (__ez_fad_floating.indexOf(id) == -1) {
                    __ez_fad_divpos[id] = rect.top;
                    if (__ez_fad_invisible(did) && isFloat != true) {
                        __ez_fad_divs[4].push(id);
                    } else if (rect.top < vh && (ezslit_run[0] != true || ezslit_run[5] != true)) {
                        if (ezslit_run[0] != true) {
                            __ez_fad_gpt();
                            __ez_fad_divs[0].push(id);
                        } else {
                            __ez_fad_divs[5].push(id);
                        }
                    } else if (rect.top < (vh + height_adjust) && ezslit_run[1] != true) {
                        if (ezslit_run[0] != true) {
                            __ez_fad_load(0, 0);
                        };
                        __ez_fad_divs[1].push(id);
                    } else if (rect.top < (vh + height_adjust + (__ez_fad_vh)) && ezslit_run[2] != true) {
                        if (ezslit_run[0] != true) {
                            __ez_fad_load(0, 0);
                        };
                        __ez_fad_divs[2].push(id);
                    } else {
                        __ez_fad_divs[3].push(id);
                    }
                }
            }
        }

        function __ez_fad_fast(s, f, m) {
            if (__ez_fad_fastd.indexOf(s) == -1) {
                __ez_fad_fastd.push(s);
                googletag.cmd.push(function () {
                    var ebbr2 = 'empty';
                    var br2 = 0;
                    if (typeof ezoibfh[f] != 'undefined') {
                        ebbr2 = ezoibfh[f];
                        br2 = f;
                    }
                    if (typeof window['ezslot_' + s] != 'undefined') {
                        var br1 = parseInt(window['ezslot_' + s].getTargeting('br1')[0]);
                        if (isNaN(br1) || br2 < br1) {
                            window['ezslot_' + s].setTargeting('br1', br2).setTargeting('eb_br', ebbr2);
                            if (m != null) {
                                window['ezslot_' + s].setTargeting('bvr', m)
                            }
                        } else {}
                    } else {}
                });
            }
        }

        function __ez_fad_csnt() {
            return document.cookie.indexOf('ezCMPCookieConsent') !== -1 || typeof __ez_conestreq == 'undefined';
        }
        var __ez_fad_haspo = false;
        if (typeof PerformanceObserver != 'undefined' && typeof PerformanceObserver.supportedEntryTypes !=
            'undefined') {
            if (PerformanceObserver.supportedEntryTypes.indexOf('largest-contentful-paint') > -1) {
                __ez_fad_haspo = true;
            }
        }

        function __ez_fad_rdy() {
            if (document.body !== null && (__ez_fad_haspo == false && __ez_fad_doc_ht > __ez_fad_vp_ht ||
                    __ez_fad_hascp) || document.readyState === "complete") {
                return true;
            } else {
                __ez_fad_doc_ht = __ez_fad_docht();
                __ez_fad_vp_ht = __ez_fad_vpht();
            }
            return false;
        }

        function __ez_fad_docht() {
            if (typeof document.body != 'undefined' && document.body != null) {
                return Math.max(document.body.scrollHeight, document.body.offsetHeight);
            } else if (typeof document.documentElement != 'undefined') {
                return Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight, document
                    .documentElement.offsetHeight);
            } else {
                return 0;
            }
        }

        function __ez_fad_vpht() {
            if (typeof window.innerHeight != 'undefined') {
                return window.innerHeight;
            } else if (typeof document.body != 'undefined' && document.body != null) {
                return document.body.clientHeight;
            } else if (typeof document.documentElement != 'undefined') {
                return document.documentElement.clientHeight;
            } else {
                return 0;
            }
        }
        var __ez_fad_doc_ht = __ez_fad_docht();
        var __ez_fad_vp_ht = __ez_fad_vpht();
        var __ez_fad_hascp = false;
        try {
            const __ez__fad_po = new PerformanceObserver((entryList) => {
                __ez_fad_hascp = true;
            });
            __ez__fad_po.observe({
                type: 'largest-contentful-paint',
                buffered: true
            });
        } catch (e) {}
    </script>
    <script data-ezscrex="false">
        var ezorbf = [];
    </script>
    <script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer="">
        window.isEZABL = false;
        window.ezmadspc = 300;
        window.ezoViewCheck = false;
    </script>
    <script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer="">
        window.ezDisableInitialLoad = false;
    </script>
    <script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer="">
        window.googletag = window.googletag || {};
        googletag.cmd = googletag.cmd || [];
    </script>
    <script data-ezscrex="false">
        window.addEventListener("EzoIvent", function (a) {
            if (a.detail[0] > 1 || a.detail[0] < 0) {
                (function () {
                    var gads = document.createElement('script');
                    gads.async = true;
                    gads.type = 'text/javascript';
                    gads.onload = function () {
                        if (typeof ezogallbs == 'function') {
                            ezogallbs()
                        }
                    };
                    var useSSL = 'https:' == document.location.protocol;
                    gads.src = (useSSL ? 'https:' : 'http:') +
                        '//securepubads.g.doubleclick.net/tag/js/gpt.js';
                    var node = document.getElementsByTagName('script')[0];
                    node.parentNode.insertBefore(gads, node);
                })();
            }
        });
    </script>
    <script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer="">
        window.ezogetbrkey = function (s) {
            var k = 'br1';
            var k2 = 'eb_br';
            if (window.ezogtk == "") {
                k = 'br1u';
                k2 = 'eb_bru';
            } else if (window.ezogtk != "NT") {
                k = 'br1t';
                k2 = 'eb_brt';
            }
            s.setTargeting('br1', s.getTargeting(k));
            s.setTargeting('eb_br', s.getTargeting(k2));
        };
        googletag.cmd.push(function () {
            googletag.pubads().enableSingleRequest();
            googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                __ez.queue.addFunc("ezbanger", "ezbanger", event, false, ['banger.js'], true, true,
                    false, true);
            });
            googletag.pubads().addEventListener('impressionViewable', function (event) {
                __ez.queue.addFunc("ezvb", "ezvb", event, false, ['banger.js'], true, true, false,
                true);
            });
            googletag.pubads().addEventListener('slotResponseReceived', function (event) {
                __ez.queue.addFunc("ezsr", "ezsr", event, false, ['banger.js'], true, true, false,
                true);
            });
            googletag.pubads().addEventListener('slotRequested', function (e) {
                window.ezsrqt[e.slot.getSlotElementId()] = Date.now();
            });
            googletag.pubads().disableInitialLoad();
            googletag.pubads().enableLazyLoad({
                fetchMarginPercent: -1,
                renderMarginPercent: 250,
                mobileScaling: 2.0
            });
            googletag.enableServices();
        });
        window.ezoll = false;
        window.ezoadxnc = '1254144';
        window.ezoadhb = '120';
        var ezoibfh = {
            0: 'zero',
            1000000: 'off',
            18: '8de355ef1cf56b7da61277050d9957b1',
            90: 'b355e9227b551c119a30a68852723b62',
            30: '54d0fa6d5f6aabe7623cb24faa42a441',
            6: '33dd523f8e4dda158f0aa99686dda7f2',
            28: '674294a1b21a1e89fc99c14c9b17be44',
            14: 'ad0061a38dd7c6f7bcb692aee88dfda4',
            48: '8fc09e60bfd78aa82afac0405213359a',
            34: 'a7a863b24978e69c4cdbb5a49be70d5e',
            22: '1e913e99b80640fd5b86a539e5b97c94',
            20: '7432360301409ae695ba255f16fbcf06',
            12: '14e8a85d4c42ff1db8790cbef9e33493',
            8: '2e8b8c60843e52e5aaa1e3a52287a2bb',
            100: 'a495ce7dbb4cefcd3e0a722048894f41',
            50: '3ba982fc4238dd4197b1d51b345478dc',
            4: '9c3e4ee8eae7f1433cb2fe69b1326605',
            2: 'b6c98a8bb15764f1c4ee331dcb724178',
            40: 'ee685f77592ce296910ee91457d66ba3',
            46: 'fe5b0c99ab7ba15f050582be1301303f',
            42: '947f1d5169cc7d0f997560e34838fb04',
            44: 'a928cf2c3ad36f5e9ed2d90f655c1dc9',
            38: '23b5ca1d9de2587e6a4ecfd33d61b709',
            24: 'e66c30deca31b19eda212eeca1258584',
            10: '291d27313eb66c50243129b23df8a579',
            80: 'dfa60cee6e1053fc0c9e607c8047bd28',
            60: 'c352ba581bd3ffd8cea608cf2d55f519',
            120: '58ef7bddb438af5e257c4377f32c243a',
            26: 'bf9a045b836005b6c23b7b0749249612',
            36: '8c5ffefb122f59a66a8b7672d4452af2',
            16: 'e29f69dd468d31a5514dc9b5587ce757',
            70: '527e52c10635ac8136a4c84094ee49a8',
            32: 'd31e71883d00099e275b6c5878eed023'
        };
        window.ezorefgsl = function (r) {
            Array.isArray(r) || (r = [r]);
            for (var e = r.length, o = Array(), a = 0; a < e; a++) {
                var t = r[a];
                t.setTargeting("reqt", Date.now()), void 0 !== t.DFPSlot ? o.push(t.DFPSlot) : o.push(t)
            }
            googletag.pubads().refresh(o)
        };
        var ezaxmns = {};
        var ezaucmns = {};
        ezaxmns["div-gpt-ad-etcgamer_com-box-2-0"] = 0;
        ezaucmns["div-gpt-ad-etcgamer_com-box-2-0"] = 0;
        ezaxmns["div-gpt-ad-etcgamer_com-box-3-0"] = 0;
        ezaucmns["div-gpt-ad-etcgamer_com-box-3-0"] = 0;
        ezaxmns["div-gpt-ad-etcgamer_com-medrectangle-2-0"] = 0;
        ezaucmns["div-gpt-ad-etcgamer_com-medrectangle-2-0"] = 0;
        ezaxmns["div-gpt-ad-etcgamer_com-banner-2-0"] = 0;
        ezaucmns["div-gpt-ad-etcgamer_com-banner-2-0"] = 0;
        ezaxmns["div-gpt-ad-etcgamer_com-box-1-0"] = 0;
        ezaucmns["div-gpt-ad-etcgamer_com-box-1-0"] = 0;
        ezaxmns["div-gpt-ad-etcgamer_com-box-4-0"] = 0;
        ezaucmns["div-gpt-ad-etcgamer_com-box-4-0"] = 0;
        ezaxmns["div-gpt-ad-etcgamer_com-banner-1-0"] = 0;
        ezaucmns["div-gpt-ad-etcgamer_com-banner-1-0"] = 0;
        ezaxmns["div-gpt-ad-etcgamer_com-medrectangle-3-0"] = 0;
        ezaucmns["div-gpt-ad-etcgamer_com-medrectangle-3-0"] = 0;
        ezaxmns["div-gpt-ad-etcgamer_com-leader-1-0"] = 0;
        ezaucmns["div-gpt-ad-etcgamer_com-leader-1-0"] = 0;
        ezaxmns["div-gpt-ad-etcgamer_com-medrectangle-4-0"] = 0;
        ezaucmns["div-gpt-ad-etcgamer_com-medrectangle-4-0"] = 0;

        var __ez_fad_floating = ['div-gpt-ad-etcgamer_com-medrectangle-2-0'];
        var __ez_fad_gptd = false;
        var __ez_fad_ezpbinitd = false;

        function __ez_fad_gpt() {
            if (__ez_fad_gptd == false) {
                __ez_fad_gptd = true;
                (function () {
                    var gads = document.createElement('script');
                    gads.async = true;
                    gads.type = 'text/javascript';
                    var useSSL = 'https:' == document.location.protocol;
                    gads.src = (useSSL ? 'https:' : 'http:') +
                        '//securepubads.g.doubleclick.net/tag/js/gpt.js';
                    var node = document.getElementsByTagName('script')[0];
                    node.parentNode.insertBefore(gads, node);
                })();
            }
        }

        function __ez_fad_pb() {
            if (__ez_fad_ezpbinitd == false && typeof __ez_fad_ezpbinit == 'function') {
                __ez_fad_ezpbinitd = true;
                __ez_fad_ezpbinit()
            }
        };
        __ez_fad_initslot['div-gpt-ad-etcgamer_com-box-2-0'] = function (bvr) {
            googletag.cmd.push(function () {
                var did = 'div-gpt-ad-etcgamer_com-box-2-0';
                ezslot_9 = googletag.defineSlot('/1254144/etcgamer_com-box-2', [728, 90],
                        'div-gpt-ad-etcgamer_com-box-2-0').addService(googletag.pubads())
                    .updateTargetingFromMap({
                        'a': '1',
                        'iid11': '1046797',
                        'eid': '6862880486329007770',
                        't': '134',
                        'd': '186470',
                        't1': '134',
                        'pvc': '7',
                        'ap': '1151',
                        'sap': '1151',
                        'a': '|6|',
                        'as': 'revenue',
                        'plat': '1',
                        'bra': 'mod13',
                        'ic': '1',
                        'at': 'mbf',
                        'adr': '399',
                        'ezosn': '9',
                        'reft': 'n',
                        'refs': '30',
                        'ga': '2497208',
                        'gala': '',
                        'rid': '99998',
                        'pt': '1',
                        'al': '1001',
                        'compid': '0',
                        'tap': 'etcgamer_com-box-2-1046797',
                        'eb_br': '527e52c10635ac8136a4c84094ee49a8',
                        'eba': '1',
                        'ebss': [10082, 10061, 11307],
                        'bv': '0',
                        'bvm': '3',
                        'bvr': '1',
                        'shp': '1',
                        'ftsn': '3',
                        'acptad': '1',
                        'br1': '70',
                        'br2': '36',
                        'ezoic': '1',
                        'nmau': '0',
                        'mau': '0',
                        'stl': [63, 14, 28, 4, 51, 0, 88, 0, 71, 30, 0, 31],
                        'deal1': [17, 19, 20, 21, 22, 23, 24, 25, 26, 774, 5],
                        'ax_ssid': '10082'
                    }).setCollapseEmptyDiv(false);
                ezrpos[9] = "9";
                ezslots.push("ezslot_9");
                if (bvr != null) {
                    if (typeof __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-2-0'] == 'function') {
                        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-2-0']();
                    }
                }
                if (typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
                    for (var name in ezSlotKVStore[did]) {
                        if (!ezSlotKVStore.hasOwnProperty(name)) {
                            ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
                        }
                    }
                    ezSlotKVStore[did] = {};
                }
            });
            return "ezslot_9";
        };
        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-2-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-2-0');
            __ez_fad_fast('9', 24, null);
        };
        __ez_fad_viewslots['div-gpt-ad-etcgamer_com-box-2-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-2-0');
            __ez_fad_fast('9', 60, null);
        };
        __ez_fad_instaslots['div-gpt-ad-etcgamer_com-box-2-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-2-0');
            __ez_fad_fast('9', 0, 0);
        };
        __ez_fad_initslot['div-gpt-ad-etcgamer_com-box-3-0'] = function (bvr) {
            googletag.cmd.push(function () {
                var did = 'div-gpt-ad-etcgamer_com-box-3-0';
                ezslot_6 = googletag.defineSlot('/1254144/etcgamer_com-box-3', [728, 90],
                        'div-gpt-ad-etcgamer_com-box-3-0').addService(googletag.pubads())
                    .updateTargetingFromMap({
                        'a': '1',
                        'iid11': '1038399',
                        'eid': '2389402852843050563',
                        't': '134',
                        'd': '186470',
                        't1': '134',
                        'pvc': '7',
                        'ap': '1148',
                        'sap': '1148',
                        'a': '|2|',
                        'as': 'revenue',
                        'plat': '1',
                        'bra': 'mod13',
                        'ic': '1',
                        'at': 'mbf',
                        'adr': '399',
                        'ezosn': '6',
                        'reft': 'tf',
                        'refs': '30',
                        'ga': '2497208',
                        'gala': '',
                        'rid': '99998',
                        'pt': '2',
                        'al': '1002',
                        'compid': '0',
                        'tap': 'etcgamer_com-box-3-1038399',
                        'eb_br': '527e52c10635ac8136a4c84094ee49a8',
                        'eba': '1',
                        'ebss': [10082, 10061, 11307],
                        'bv': '0',
                        'bvm': '1',
                        'bvr': '1',
                        'shp': '1',
                        'ftsn': '3',
                        'br1': '70',
                        'br2': '36',
                        'ezoic': '1',
                        'nmau': '0',
                        'mau': '0',
                        'stl': [63, 14, 28, 4, 51, 0, 88, 0, 71, 30, 0, 31],
                        'deal1': [17, 19, 20, 21, 22, 23, 24, 25, 26, 774, 5],
                        'ax_ssid': '10082'
                    }).setCollapseEmptyDiv(false);
                ezrpos[6] = "6";
                ezslots.push("ezslot_6");
                if (bvr != null) {
                    if (typeof __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-3-0'] == 'function') {
                        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-3-0']();
                    }
                }
                if (typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
                    for (var name in ezSlotKVStore[did]) {
                        if (!ezSlotKVStore.hasOwnProperty(name)) {
                            ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
                        }
                    }
                    ezSlotKVStore[did] = {};
                }
            });
            return "ezslot_6";
        };
        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-3-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-3-0');
            __ez_fad_fast('6', 24, null);
        };
        __ez_fad_viewslots['div-gpt-ad-etcgamer_com-box-3-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-3-0');
            __ez_fad_fast('6', 60, null);
        };
        __ez_fad_instaslots['div-gpt-ad-etcgamer_com-box-3-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-3-0');
            __ez_fad_fast('6', 0, 0);
        };
        __ez_fad_initslot['div-gpt-ad-etcgamer_com-medrectangle-2-0'] = function (bvr) {
            googletag.cmd.push(function () {
                var did = 'div-gpt-ad-etcgamer_com-medrectangle-2-0';
                ezslot_1 = googletag.defineSlot('/1254144/etcgamer_com-medrectangle-2', [728, 90],
                        'div-gpt-ad-etcgamer_com-medrectangle-2-0').addService(googletag.pubads())
                    .updateTargetingFromMap({
                        'a': '1',
                        'iid11': '1041997',
                        'eid': '1825400025363045607',
                        't': '134',
                        'd': '186470',
                        't1': '134',
                        'pvc': '7',
                        'ap': '1100',
                        'sap': '1100',
                        'a': '|3|',
                        'as': 'revenue',
                        'plat': '1',
                        'bra': 'mod13',
                        'ic': '1',
                        'at': 'mbf',
                        'adr': '399',
                        'ezosn': '1',
                        'reft': 'n',
                        'refs': '30',
                        'ga': '2497208',
                        'gala': '',
                        'rid': '99998',
                        'pt': '5',
                        'al': '1005',
                        'compid': '0',
                        'tap': 'etcgamer_com-medrectangle-2-1041997',
                        'eb_br': '58ef7bddb438af5e257c4377f32c243a',
                        'eba': '1',
                        'ebss': [10082, 10061, 11307],
                        'bv': '12',
                        'bvm': '0',
                        'bvr': '2',
                        'shp': '1',
                        'ftsn': '3',
                        'br1': '120',
                        'br2': '60',
                        'ezoic': '1',
                        'nmau': '0',
                        'mau': '0',
                        'stl': [63, 14, 28, 4, 51, 0, 88, 0, 71, 30, 0, 31],
                        'deal1': [17, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 760, 761, 813, 814,
                            815, 816, 817, 818, 819, 899, 917, 918, 919, 774
                        ],
                        'ax_ssid': '10082'
                    }).setCollapseEmptyDiv(false);
                ezrpos[1] = "1";
                ezslots.push("ezslot_1");
                if (bvr != null) {
                    if (typeof __ez_fad_fastslots['div-gpt-ad-etcgamer_com-medrectangle-2-0'] ==
                        'function') {
                        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-medrectangle-2-0']();
                    }
                }
                if (typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
                    for (var name in ezSlotKVStore[did]) {
                        if (!ezSlotKVStore.hasOwnProperty(name)) {
                            ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
                        }
                    }
                    ezSlotKVStore[did] = {};
                }
            });
            return "ezslot_1";
        };
        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-medrectangle-2-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-medrectangle-2-0');
            __ez_fad_fast('1', 40, null);
        };
        __ez_fad_viewslots['div-gpt-ad-etcgamer_com-medrectangle-2-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-medrectangle-2-0');
            __ez_fad_fast('1', 100, null);
        };
        __ez_fad_instaslots['div-gpt-ad-etcgamer_com-medrectangle-2-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-medrectangle-2-0');
            __ez_fad_fast('1', 0, 0);
        };
        __ez_fad_initslot['div-gpt-ad-etcgamer_com-banner-2-0'] = function (bvr) {
            googletag.cmd.push(function () {
                var did = 'div-gpt-ad-etcgamer_com-banner-2-0';
                ezslot_0 = googletag.defineSlot('/1254144/etcgamer_com-banner-2', [300, 250],
                        'div-gpt-ad-etcgamer_com-banner-2-0').addService(googletag.pubads())
                    .updateTargetingFromMap({
                        'a': '1',
                        'iid11': '1070799',
                        'eid': '8885036331063022818',
                        't': '134',
                        'd': '186470',
                        't1': '134',
                        'pvc': '7',
                        'ap': '1152',
                        'sap': '1152',
                        'a': '|5|',
                        'as': 'revenue',
                        'plat': '1',
                        'bra': 'mod13',
                        'ic': '1',
                        'at': 'mbf',
                        'adr': '399',
                        'ezosn': '0',
                        'reft': 'tf',
                        'refs': '30',
                        'ga': '2497208',
                        'gala': '',
                        'rid': '99998',
                        'pt': '31',
                        'al': '1031',
                        'compid': '0',
                        'tap': 'etcgamer_com-banner-2-1070799',
                        'eb_br': '527e52c10635ac8136a4c84094ee49a8',
                        'eba': '1',
                        'ebss': [10082, 10061, 11307],
                        'bv': '0',
                        'bvm': '3',
                        'bvr': '1',
                        'shp': '2',
                        'ftsn': '3',
                        'br1': '70',
                        'br2': '38',
                        'ezoic': '1',
                        'nmau': '0',
                        'mau': '0',
                        'stl': [63, 14, 28, 4, 51, 0, 88, 0, 71, 30, 0, 31],
                        'deal1': [17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 760, 761, 813,
                            815, 816, 817, 818, 899, 919, 774, 5
                        ],
                        'ax_ssid': '10082'
                    }).setCollapseEmptyDiv(false);
                ezrpos[0] = "0";
                ezslots.push("ezslot_0");
                if (bvr != null) {
                    if (typeof __ez_fad_fastslots['div-gpt-ad-etcgamer_com-banner-2-0'] == 'function') {
                        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-banner-2-0']();
                    }
                }
                if (typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
                    for (var name in ezSlotKVStore[did]) {
                        if (!ezSlotKVStore.hasOwnProperty(name)) {
                            ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
                        }
                    }
                    ezSlotKVStore[did] = {};
                }
            });
            return "ezslot_0";
        };
        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-banner-2-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-banner-2-0');
            __ez_fad_fast('0', 24, null);
        };
        __ez_fad_viewslots['div-gpt-ad-etcgamer_com-banner-2-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-banner-2-0');
            __ez_fad_fast('0', 60, null);
        };
        __ez_fad_instaslots['div-gpt-ad-etcgamer_com-banner-2-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-banner-2-0');
            __ez_fad_fast('0', 0, 0);
        };
        __ez_fad_initslot['div-gpt-ad-etcgamer_com-box-1-0'] = function (bvr) {
            googletag.cmd.push(function () {
                var did = 'div-gpt-ad-etcgamer_com-box-1-0';
                ezslot_4 = googletag.defineSlot('/1254144/etcgamer_com-box-1', [
                        [336, 280],
                        [320, 50],
                        [320, 100],
                        [200, 200],
                        [125, 125],
                        [234, 60],
                        [300, 250],
                        [250, 250],
                        [120, 240],
                        [180, 150],
                        ['fluid']
                    ], 'div-gpt-ad-etcgamer_com-box-1-0').addService(googletag.pubads())
                    .updateTargetingFromMap({
                        'a': '1',
                        'iid11': '1057597',
                        'eid': '6713006059607017878',
                        't': '134',
                        'd': '186470',
                        't1': '134',
                        'pvc': '7',
                        'ap': '1150',
                        'sap': '1150',
                        'a': '|6|',
                        'as': 'revenue',
                        'plat': '1',
                        'bra': 'mod13',
                        'ic': '1',
                        'at': 'mbf',
                        'adr': '399',
                        'ezosn': '4',
                        'reft': 'n',
                        'refs': '30',
                        'ga': '2497208',
                        'gala': '',
                        'rid': '99998',
                        'pt': '0',
                        'al': '1000',
                        'compid': '0',
                        'tap': 'etcgamer_com-box-1-1057597',
                        'eb_br': 'dfa60cee6e1053fc0c9e607c8047bd28',
                        'eba': '1',
                        'ebss': [10082, 10061, 11307],
                        'bv': '0',
                        'bvm': '2',
                        'bvr': '1',
                        'shp': '2',
                        'ftsn': '3',
                        'acptad': '1',
                        'br1': '80',
                        'br2': '42',
                        'ezoic': '1',
                        'nmau': '0',
                        'mau': '0',
                        'stl': [63, 14, 28, 4, 51, 0, 88, 0, 71, 30, 0, 31],
                        'deal1': [17, 19, 20, 21, 22, 23, 24, 25, 26, 774, 5],
                        'ax_ssid': '10082'
                    }).setCollapseEmptyDiv(false);
                ezrpos[4] = "4";
                ezslots.push("ezslot_4");
                if (bvr != null) {
                    if (typeof __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-1-0'] == 'function') {
                        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-1-0']();
                    }
                }
                if (typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
                    for (var name in ezSlotKVStore[did]) {
                        if (!ezSlotKVStore.hasOwnProperty(name)) {
                            ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
                        }
                    }
                    ezSlotKVStore[did] = {};
                }
            });
            return "ezslot_4";
        };
        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-1-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-1-0');
            __ez_fad_fast('4', 26, null);
        };
        __ez_fad_viewslots['div-gpt-ad-etcgamer_com-box-1-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-1-0');
            __ez_fad_fast('4', 60, null);
        };
        __ez_fad_instaslots['div-gpt-ad-etcgamer_com-box-1-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-1-0');
            __ez_fad_fast('4', 0, 0);
        };
        __ez_fad_initslot['div-gpt-ad-etcgamer_com-box-4-0'] = function (bvr) {
            googletag.cmd.push(function () {
                var did = 'div-gpt-ad-etcgamer_com-box-4-0';
                ezslot_3 = googletag.defineSlot('/1254144/etcgamer_com-box-4', [
                        [300, 250],
                        [468, 60],
                        [234, 60],
                        [728, 90],
                        [320, 50]
                    ], 'div-gpt-ad-etcgamer_com-box-4-0').addService(googletag.pubads())
                    .updateTargetingFromMap({
                        'a': '1',
                        'iid11': '1067199',
                        'eid': '4898526520651075659',
                        't': '134',
                        'd': '186470',
                        't1': '134',
                        'pvc': '7',
                        'ap': '1134',
                        'sap': '1134',
                        'a': '|6|',
                        'as': 'revenue',
                        'plat': '1',
                        'bra': 'mod13',
                        'ic': '1',
                        'at': 'mbf',
                        'adr': '399',
                        'ezosn': '3',
                        'reft': 'n',
                        'refs': '30',
                        'ga': '2497208',
                        'gala': '',
                        'rid': '99998',
                        'pt': '3',
                        'al': '1003',
                        'compid': '0',
                        'tap': 'etcgamer_com-box-4-1067199',
                        'eb_br': 'b355e9227b551c119a30a68852723b62',
                        'eba': '1',
                        'ebss': [10082, 10061, 11307],
                        'bv': '24',
                        'bvm': '0',
                        'bvr': '2',
                        'shp': '1',
                        'ftsn': '3',
                        'br1': '90',
                        'br2': '46',
                        'ezoic': '1',
                        'nmau': '0',
                        'mau': '0',
                        'stl': [63, 14, 28, 4, 51, 0, 88, 0, 71, 30, 0, 31],
                        'deal1': [17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 815, 899, 919, 774, 5],
                        'ax_ssid': '10082'
                    }).setCollapseEmptyDiv(false);
                ezrpos[3] = "3";
                ezslots.push("ezslot_3");
                if (bvr != null) {
                    if (typeof __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-4-0'] == 'function') {
                        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-4-0']();
                    }
                }
                if (typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
                    for (var name in ezSlotKVStore[did]) {
                        if (!ezSlotKVStore.hasOwnProperty(name)) {
                            ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
                        }
                    }
                    ezSlotKVStore[did] = {};
                }
            });
            return "ezslot_3";
        };
        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-box-4-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-4-0');
            __ez_fad_fast('3', 30, null);
        };
        __ez_fad_viewslots['div-gpt-ad-etcgamer_com-box-4-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-4-0');
            __ez_fad_fast('3', 70, null);
        };
        __ez_fad_instaslots['div-gpt-ad-etcgamer_com-box-4-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-box-4-0');
            __ez_fad_fast('3', 0, 0);
        };
        __ez_fad_initslot['div-gpt-ad-etcgamer_com-banner-1-0'] = function (bvr) {
            googletag.cmd.push(function () {
                var did = 'div-gpt-ad-etcgamer_com-banner-1-0';
                ezslot_8 = googletag.defineSlot('/1254144/etcgamer_com-banner-1', [300, 250],
                        'div-gpt-ad-etcgamer_com-banner-1-0').addService(googletag.pubads())
                    .updateTargetingFromMap({
                        'a': '1',
                        'iid11': '1064798',
                        'eid': '6750436870195004016',
                        't': '134',
                        'd': '186470',
                        't1': '134',
                        'pvc': '7',
                        'ap': '1136',
                        'sap': '1136',
                        'a': '|6|',
                        'as': 'revenue',
                        'plat': '1',
                        'bra': 'mod13',
                        'ic': '1',
                        'at': 'mbf',
                        'adr': '399',
                        'ezosn': '8',
                        'reft': 'tf',
                        'refs': '30',
                        'ga': '2497208',
                        'gala': '',
                        'rid': '99998',
                        'pt': '30',
                        'al': '1030',
                        'compid': '0',
                        'tap': 'etcgamer_com-banner-1-1064798',
                        'eb_br': 'b355e9227b551c119a30a68852723b62',
                        'eba': '1',
                        'ebss': [10082, 10061, 11307],
                        'bv': '12',
                        'bvm': '0',
                        'bvr': '2',
                        'shp': '1',
                        'ftsn': '3',
                        'br1': '90',
                        'br2': '46',
                        'ezoic': '1',
                        'nmau': '0',
                        'mau': '0',
                        'stl': [63, 14, 28, 4, 51, 0, 88, 0, 71, 30, 0, 31],
                        'deal1': [17, 19, 20, 21, 22, 23, 24, 25, 26, 919, 774, 5],
                        'ax_ssid': '10082'
                    }).setCollapseEmptyDiv(false);
                ezrpos[8] = "8";
                ezslots.push("ezslot_8");
                if (bvr != null) {
                    if (typeof __ez_fad_fastslots['div-gpt-ad-etcgamer_com-banner-1-0'] == 'function') {
                        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-banner-1-0']();
                    }
                }
                if (typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
                    for (var name in ezSlotKVStore[did]) {
                        if (!ezSlotKVStore.hasOwnProperty(name)) {
                            ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
                        }
                    }
                    ezSlotKVStore[did] = {};
                }
            });
            return "ezslot_8";
        };
        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-banner-1-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-banner-1-0');
            __ez_fad_fast('8', 30, null);
        };
        __ez_fad_viewslots['div-gpt-ad-etcgamer_com-banner-1-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-banner-1-0');
            __ez_fad_fast('8', 70, null);
        };
        __ez_fad_instaslots['div-gpt-ad-etcgamer_com-banner-1-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-banner-1-0');
            __ez_fad_fast('8', 0, 0);
        };
        __ez_fad_initslot['div-gpt-ad-etcgamer_com-medrectangle-3-0'] = function (bvr) {
            googletag.cmd.push(function () {
                var did = 'div-gpt-ad-etcgamer_com-medrectangle-3-0';
                ezslot_7 = googletag.defineSlot('/1254144/etcgamer_com-medrectangle-3', [728, 90],
                        'div-gpt-ad-etcgamer_com-medrectangle-3-0').addService(googletag.pubads())
                    .updateTargetingFromMap({
                        'a': '1',
                        'iid11': '1026398',
                        'eid': '6193728745417059860',
                        't': '134',
                        'd': '186470',
                        't1': '134',
                        'pvc': '7',
                        'ap': '1132',
                        'sap': '1132',
                        'a': '|3|',
                        'as': 'revenue',
                        'plat': '1',
                        'bra': 'mod13',
                        'ic': '1',
                        'at': 'mbf',
                        'adr': '399',
                        'ezosn': '7',
                        'reft': 'n',
                        'refs': '30',
                        'ga': '2497208',
                        'gala': '',
                        'rid': '99998',
                        'pt': '21',
                        'al': '1021',
                        'compid': '0',
                        'tap': 'etcgamer_com-medrectangle-3-1026398',
                        'eb_br': 'b355e9227b551c119a30a68852723b62',
                        'eba': '1',
                        'ebss': [10082, 10061, 11307],
                        'bv': '0',
                        'bvm': '3',
                        'bvr': '1',
                        'shp': '1',
                        'ftsn': '3',
                        'br1': '90',
                        'br2': '46',
                        'ezoic': '1',
                        'nmau': '0',
                        'mau': '0',
                        'stl': [63, 14, 28, 4, 51, 0, 88, 0, 71, 30, 0, 31],
                        'deal1': [17, 19, 20, 21, 22, 23, 24, 25, 26, 919, 774, 5],
                        'ax_ssid': '10082'
                    }).setCollapseEmptyDiv(false);
                ezrpos[7] = "7";
                ezslots.push("ezslot_7");
                if (bvr != null) {
                    if (typeof __ez_fad_fastslots['div-gpt-ad-etcgamer_com-medrectangle-3-0'] ==
                        'function') {
                        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-medrectangle-3-0']();
                    }
                }
                if (typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
                    for (var name in ezSlotKVStore[did]) {
                        if (!ezSlotKVStore.hasOwnProperty(name)) {
                            ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
                        }
                    }
                    ezSlotKVStore[did] = {};
                }
            });
            return "ezslot_7";
        };
        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-medrectangle-3-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-medrectangle-3-0');
            __ez_fad_fast('7', 30, null);
        };
        __ez_fad_viewslots['div-gpt-ad-etcgamer_com-medrectangle-3-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-medrectangle-3-0');
            __ez_fad_fast('7', 70, null);
        };
        __ez_fad_instaslots['div-gpt-ad-etcgamer_com-medrectangle-3-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-medrectangle-3-0');
            __ez_fad_fast('7', 0, 0);
        };
        __ez_fad_initslot['div-gpt-ad-etcgamer_com-leader-1-0'] = function (bvr) {
            googletag.cmd.push(function () {
                var did = 'div-gpt-ad-etcgamer_com-leader-1-0';
                ezslot_5 = googletag.defineSlot('/1254144/etcgamer_com-leader-1', [
                        [336, 280],
                        [728, 90],
                        [320, 50],
                        [468, 60],
                        [234, 60],
                        ['fluid']
                    ], 'div-gpt-ad-etcgamer_com-leader-1-0').addService(googletag.pubads())
                    .updateTargetingFromMap({
                        'a': '1',
                        'iid11': '1067198',
                        'eid': '8540059487781018585',
                        't': '134',
                        'd': '186470',
                        't1': '134',
                        'pvc': '7',
                        'ap': '1140',
                        'sap': '1140',
                        'a': '|252|',
                        'as': 'revenue',
                        'plat': '1',
                        'bra': 'mod13',
                        'ic': '1',
                        'at': 'mbf',
                        'adr': '399',
                        'ezosn': '5',
                        'reft': 'tf',
                        'refs': '30',
                        'ga': '2497208',
                        'gala': '',
                        'rid': '99998',
                        'pt': '37',
                        'al': '1037',
                        'compid': '0',
                        'tap': 'etcgamer_com-leader-1-1067198',
                        'eb_br': 'b355e9227b551c119a30a68852723b62',
                        'eba': '1',
                        'ebss': [10082, 10061, 11307],
                        'bv': '30',
                        'bvm': '3',
                        'bvr': '4',
                        'shp': '1',
                        'ftsn': '3',
                        'br1': '90',
                        'br2': '46',
                        'ezoic': '1',
                        'nmau': '0',
                        'mau': '0',
                        'stl': [63, 14, 28, 4, 51, 0, 88, 0, 71, 30, 0, 31],
                        'deal1': [17, 19, 20, 21, 22, 23, 24, 25, 26, 988, 774, 5],
                        'ax_ssid': '10082'
                    }).setCollapseEmptyDiv(false);
                ezrpos[5] = "5";
                ezslots.push("ezslot_5");
                if (bvr != null) {
                    if (typeof __ez_fad_fastslots['div-gpt-ad-etcgamer_com-leader-1-0'] == 'function') {
                        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-leader-1-0']();
                    }
                }
                if (typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
                    for (var name in ezSlotKVStore[did]) {
                        if (!ezSlotKVStore.hasOwnProperty(name)) {
                            ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
                        }
                    }
                    ezSlotKVStore[did] = {};
                }
            });
            return "ezslot_5";
        };
        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-leader-1-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-leader-1-0');
            __ez_fad_fast('5', 30, null);
        };
        __ez_fad_viewslots['div-gpt-ad-etcgamer_com-leader-1-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-leader-1-0');
            __ez_fad_fast('5', 70, null);
        };
        __ez_fad_instaslots['div-gpt-ad-etcgamer_com-leader-1-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-leader-1-0');
            __ez_fad_fast('5', 0, 0);
        };
        __ez_fad_initslot['div-gpt-ad-etcgamer_com-medrectangle-4-0'] = function (bvr) {
            googletag.cmd.push(function () {
                var did = 'div-gpt-ad-etcgamer_com-medrectangle-4-0';
                ezslot_2 = googletag.defineSlot('/1254144/etcgamer_com-medrectangle-4', [
                        [336, 280],
                        [728, 90],
                        [320, 50],
                        [468, 60],
                        [234, 60],
                        ['fluid']
                    ], 'div-gpt-ad-etcgamer_com-medrectangle-4-0').addService(googletag.pubads())
                    .updateTargetingFromMap({
                        'a': '1',
                        'iid11': '1049199',
                        'eid': '4332785406731057534',
                        't': '134',
                        'd': '186470',
                        't1': '134',
                        'pvc': '7',
                        'ap': '1133',
                        'sap': '1133',
                        'a': '|3|',
                        'as': 'revenue',
                        'plat': '1',
                        'bra': 'mod13',
                        'ic': '1',
                        'at': 'mbf',
                        'adr': '399',
                        'ezosn': '2',
                        'reft': 'tf',
                        'refs': '30',
                        'ga': '2497208',
                        'gala': '',
                        'rid': '99998',
                        'pt': '22',
                        'al': '1022',
                        'compid': '0',
                        'tap': 'etcgamer_com-medrectangle-4-1049199',
                        'eb_br': 'b355e9227b551c119a30a68852723b62',
                        'eba': '1',
                        'ebss': [10082, 10061, 11307],
                        'bv': '12',
                        'bvm': '0',
                        'bvr': '2',
                        'shp': '1',
                        'ftsn': '3',
                        'br1': '90',
                        'br2': '46',
                        'ezoic': '1',
                        'nmau': '0',
                        'mau': '0',
                        'stl': [63, 14, 28, 4, 51, 0, 88, 0, 71, 30, 0, 31],
                        'deal1': [17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 760, 815, 817, 899, 919,
                            774, 5
                        ],
                        'ax_ssid': '10082'
                    }).setCollapseEmptyDiv(false);
                ezrpos[2] = "2";
                ezslots.push("ezslot_2");
                if (bvr != null) {
                    if (typeof __ez_fad_fastslots['div-gpt-ad-etcgamer_com-medrectangle-4-0'] ==
                        'function') {
                        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-medrectangle-4-0']();
                    }
                }
                if (typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
                    for (var name in ezSlotKVStore[did]) {
                        if (!ezSlotKVStore.hasOwnProperty(name)) {
                            ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
                        }
                    }
                    ezSlotKVStore[did] = {};
                }
            });
            return "ezslot_2";
        };
        __ez_fad_fastslots['div-gpt-ad-etcgamer_com-medrectangle-4-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-medrectangle-4-0');
            __ez_fad_fast('2', 30, null);
        };
        __ez_fad_viewslots['div-gpt-ad-etcgamer_com-medrectangle-4-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-medrectangle-4-0');
            __ez_fad_fast('2', 70, null);
        };
        __ez_fad_instaslots['div-gpt-ad-etcgamer_com-medrectangle-4-0'] = function () {
            __ez_fad_fastdiv.push('div-gpt-ad-etcgamer_com-medrectangle-4-0');
            __ez_fad_fast('2', 0, 0);
        };
    </script>
    <script ez-screx="true">
        (function () {
            function storageAvailable(type) {
                var storage;
                try {
                    storage = window[type];
                    var x = '__storage_test__';
                    storage.setItem(x, x);
                    storage.removeItem(x);
                    return true;
                } catch (e) {
                    return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name ===
                        'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage
                        .length !== 0);
                }
            }

            function remove_ama_config() {
                if (storageAvailable('localStorage')) {
                    localStorage.removeItem("google_ama_config");
                }
            }
            remove_ama_config()
        })()
    </script>
    <script data-ezscrex="false" data-cfasync="false">
        __ez.ssaf = [17, 19, 16];
        __ez.sswp = 4;
        __ez.ssv = 58830;
        __ez.sshsdef = true;
    </script>
    <script>
        var ezoicTestActive = true
    </script>
    <script data-ezscrex="false" data-cfasync="false">
        var _ezaq = {
            "ad_cache_level": 1,
            "ad_count_adjustment": 1,
            "ad_lazyload_version": 2,
            "ad_load_version": 2,
            "ad_location_ids": "31,5,22,3,0,37,2,21,30,1",
            "ad_transform_level": 0,
            "adx_ad_count": 10,
            "bidder_method": 1,
            "bidder_version": 2,
            "city": "Avellaneda",
            "country": "AR",
            "days_since_last_visit": 0,
            "display_ad_count": 9,
            "domain_id": 186470,
            "ds_adsize_opt_id": -1,
            "engaged_time_visit": 172,
            "ezcache_level": 2,
            "ezcache_skip_code": 0,
            "form_factor_id": 1,
            "framework_id": 1,
            "has_bad_image": 0,
            "has_bad_words": 0,
            "iab_category": "",
            "is_from_recommended_pages": false,
            "is_return_visitor": false,
            "is_sitespeed": 1,
            "last_page_load": "1626195019012",
            "last_pageview_id": "454ff46a-2fde-4325-6337-651306462a1e",
            "lt_cache_level": 0,
            "max_ads": 8,
            "metro_code": 0,
            "optimization_version": 1,
            "page_ad_positions": "1100,1132,1133,1134,1136,1140,1148,1150,1151,1152",
            "page_view_count": 7,
            "page_view_id": "c33cef49-3d7e-41e7-6b0f-644572ada81f",
            "position_selection_id": 42,
            "postal_code": "1870",
            "pv_event_count": 0,
            "response_size_orig": 133743,
            "response_time_orig": 7,
            "serverid": "52.67.70.159:22662",
            "state": "B",
            "sub_page_ad_positions": "1100,1132,1133,1134,1136,1140,1148,1150,1151,1152",
            "t_epoch": 1626195811,
            "template_id": 134,
            "time_on_site_visit": 1164,
            "url": "https://etcgamer.com/pubg-name-generator-ideas-stylish-symbols",
            "user_id": 0,
            "weather_precipitation": 0,
            "weather_summary": "",
            "weather_temperature": 0,
            "word_count": 1038,
            "worst_bad_word_level": 0
        };
        var _ezim_d = {
            "etcgamer_com-banner-1": {
                "adsense_stat_source_id": 5,
                "adx_ad_count": 10,
                "adx_stat_source_id": 35,
                "full_id": "etcgamer_com-banner-1/2021-07-13/1064798",
                "height": "250",
                "position_id": 1136,
                "sub_position_id": 1136,
                "width": "300"
            },
            "etcgamer_com-banner-2": {
                "adsense_stat_source_id": 5,
                "adx_ad_count": 10,
                "adx_stat_source_id": 35,
                "full_id": "etcgamer_com-banner-2/2021-07-13/1070799",
                "height": "250",
                "position_id": 1152,
                "sub_position_id": 1152,
                "width": "300"
            },
            "etcgamer_com-box-1": {
                "adsense_stat_source_id": 5,
                "adx_ad_count": 10,
                "adx_stat_source_id": 35,
                "full_id": "etcgamer_com-box-1/2021-07-13/1057597",
                "height": "280",
                "position_id": 1150,
                "sub_position_id": 1150,
                "width": "336"
            },
            "etcgamer_com-box-2": {
                "adsense_stat_source_id": 5,
                "adx_ad_count": 10,
                "adx_stat_source_id": 35,
                "full_id": "etcgamer_com-box-2/2021-07-13/1046797",
                "height": "90",
                "position_id": 1151,
                "sub_position_id": 1151,
                "width": "728"
            },
            "etcgamer_com-box-3": {
                "adsense_stat_source_id": 5,
                "adx_ad_count": 10,
                "adx_stat_source_id": 35,
                "full_id": "etcgamer_com-box-3/2021-07-13/1038399",
                "height": "90",
                "position_id": 1148,
                "sub_position_id": 1148,
                "width": "728"
            },
            "etcgamer_com-box-4": {
                "adsense_stat_source_id": 5,
                "adx_ad_count": 10,
                "adx_stat_source_id": 35,
                "full_id": "etcgamer_com-box-4/2021-07-13/1067199",
                "height": "250",
                "position_id": 1134,
                "sub_position_id": 1134,
                "width": "300"
            },
            "etcgamer_com-leader-1": {
                "adsense_stat_source_id": 5,
                "adx_ad_count": 10,
                "adx_stat_source_id": 35,
                "full_id": "etcgamer_com-leader-1/2021-07-13/1067198",
                "height": "280",
                "position_id": 1140,
                "sub_position_id": 1140,
                "width": "336"
            },
            "etcgamer_com-medrectangle-2": {
                "adsense_stat_source_id": 5,
                "adx_ad_count": 10,
                "adx_stat_source_id": 35,
                "full_id": "etcgamer_com-medrectangle-2/2021-07-13/1041997",
                "height": "90",
                "position_id": 1100,
                "sub_position_id": 1100,
                "width": "728"
            },
            "etcgamer_com-medrectangle-3": {
                "adsense_stat_source_id": 5,
                "adx_ad_count": 10,
                "adx_stat_source_id": 35,
                "full_id": "etcgamer_com-medrectangle-3/2021-07-13/1026398",
                "height": "90",
                "position_id": 1132,
                "sub_position_id": 1132,
                "width": "728"
            },
            "etcgamer_com-medrectangle-4": {
                "adsense_stat_source_id": 5,
                "adx_ad_count": 10,
                "adx_stat_source_id": 35,
                "full_id": "etcgamer_com-medrectangle-4/2021-07-13/1049199",
                "height": "280",
                "position_id": 1133,
                "sub_position_id": 1133,
                "width": "336"
            }
        };
        var _ezat = {
            "domain_id": 186470,
            "form_factor_id": 1,
            "framework_id": 1,
            "pageview_date": "2021-07-13",
            "pageview_id": "c33cef49-3d7e-41e7-6b0f-644572ada81f",
            "template_id": 134,
            "url": "https://etcgamer.com/pubg-name-generator-ideas-stylish-symbols",
            "visit_uuid": "9104e322-3f43-4344-5f08-27a17aa71d97"
        };
    </script>
    <script data-ezscrex="false" data-pagespeed-no-defer="" data-cfasync="false">
        __ez.queue.addFile('banger.js', '/porpoiseant/banger.js?cb=195-0&bv=28&v=51&PageSpeed=off', true, [], true,
            false, false, true);
    </script>
    <script src="/porpoiseant/banger.js?cb=195-0&amp;bv=28&amp;v=51&amp;PageSpeed=off" async=""></script>
    <script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer="">
        __ez.vep = (function () {
            var pixels = [],
                pxURL = "/detroitchicago/grapefruit.gif";

            function AddPixel(vID, pixelData) {
                if (__ez.dot.isDefined(vID) && __ez.dot.isValid(pixelData)) {
                    pixels.push({
                        type: 'video',
                        video_impression_id: vID,
                        domain_id: __ez.dot.getDID(),
                        t_epoch: __ez.dot.getEpoch(0),
                        data: __ez.dot.dataToStr(pixelData)
                    });
                }
            }

            function Fire() {
                if (typeof document.visibilityState !== 'undefined' && document.visibilityState ===
                    "prerender") {
                    return;
                }
                if (__ez.dot.isDefined(pixels) && pixels.length > 0) {
                    while (pixels.length > 0) {
                        var j = 5;
                        if (j > pixels.length) {
                            j = pixels.length;
                        }
                        var pushPixels = pixels.splice(0, j);
                        var pixelURL = __ez.dot.getURL(pxURL) + "?orig=" + (__ez.template.isOrig === true ? 1 :
                            0) + "&v=" + btoa(JSON.stringify(pushPixels));
                        __ez.dot.Fire(pixelURL);
                    }
                }
                pixels = [];
            }
            return {
                Add: AddPixel,
                Fire: Fire
            };
        })();
    </script>
    <script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer="">
        __ez.pel = (function () {
            var pixels = [],
                pxURL = "/porpoiseant/army.gif";

            function AddAndFirePixel(adSlot, pixelData) {
                AddPixel(adSlot, pixelData, 0, 0, 0, 0, 0);
                Fire();
            }

            function AddAndFireOrigPixel(adSlot, pixelData) {
                AddPixel(adSlot, pixelData, 0, 0, 0, 0, 0, true);
                Fire();
            }

            function GetCurrentPixels() {
                return pixels;
            }

            function AddPixel(adSlot, pixelData, revenue, est_revenue, bid_floor_filled, bid_floor_prev,
                stat_source_id, isOrig) {
                if (!__ez.dot.isDefined(adSlot) || __ez.dot.isAnyDefined(adSlot.getSlotElementId, adSlot
                        .ElementId) == false) {
                    return;
                }
                var ad_position_id = parseInt(__ez.dot.getTargeting(adSlot, 'ap'));
                var impId = __ez.dot.getSlotIID(adSlot),
                    adUnit = __ez.dot.getAdUnit(adSlot, isOrig);
                var compId = parseInt(__ez.dot.getTargeting(adSlot, "compid"));
                var lineItemId = 0;
                var creativeId = 0;
                var ezimData = getEzimData(adSlot);
                if (typeof ezimData == 'object') {
                    if (ezimData.creative_id !== undefined) {
                        creativeId = ezimData.creative_id;
                    }
                    if (ezimData.line_item_id !== undefined) {
                        lineItemId = ezimData.line_item_id;
                    }
                }
                if (__ez.dot.isDefined(impId, adUnit) && __ez.dot.isValid(pixelData)) {
                    pixels.push({
                        type: "impression",
                        impression_id: impId,
                        domain_id: __ez.dot.getDID(),
                        unit: adUnit,
                        t_epoch: __ez.dot.getEpoch(0),
                        revenue: revenue,
                        est_revenue: est_revenue,
                        ad_position: ad_position_id,
                        ad_size: "",
                        bid_floor_filled: bid_floor_filled,
                        bid_floor_prev: bid_floor_prev,
                        stat_source_id: stat_source_id,
                        country_code: __ez.dot.getCC(),
                        pageview_id: __ez.dot.getPageviewId(),
                        comp_id: compId,
                        line_item_id: lineItemId,
                        creative_id: creativeId,
                        data: __ez.dot.dataToStr(pixelData),
                        is_orig: isOrig || __ez.template.isOrig,
                    });
                }
            }

            function AddPixelById(impFullId, pixelData, isOrig) {
                var vals = impFullId.split('/');
                if (__ez.dot.isDefined(impFullId) && vals.length === 3 && __ez.dot.isValid(pixelData)) {
                    var adUnit = vals[0],
                        impId = vals[2];
                    pixels.push({
                        type: "impression",
                        impression_id: impId,
                        domain_id: __ez.dot.getDID(),
                        unit: adUnit,
                        t_epoch: __ez.dot.getEpoch(0),
                        pageview_id: __ez.dot.getPageviewId(),
                        data: __ez.dot.dataToStr(pixelData),
                        is_orig: isOrig || __ez.template.isOrig
                    });
                }
            }

            function Fire() {
                if (typeof document.visibilityState !== 'undefined' && document.visibilityState === "prerender")
                    return;
                if (__ez.dot.isDefined(pixels) && pixels.length > 0) {
                    var allPixels = [pixels.filter(function (pixel) {
                        return pixel.is_orig
                    }), pixels.filter(function (pixel) {
                        return !pixel.is_orig
                    })];
                    allPixels.forEach(function (pixels) {
                        while (pixels.length > 0) {
                            var isOrig = pixels[0].is_orig || false;
                            var j = 5;
                            if (j > pixels.length) {
                                j = pixels.length;
                            }
                            var pushPixels = pixels.splice(0, j);
                            var pixelURL = __ez.dot.getURL(pxURL) + "?orig=" + (isOrig === true ? 1 :
                                0) + "&sts=" + btoa(JSON.stringify(pushPixels));
                            if (typeof window.isAmp !== 'undefined' && isAmp && typeof window._ezaq !==
                                'undefined' && _ezaq.hasOwnProperty("domain_id")) {
                                pixelURL += "&visit_uuid=" + _ezaq['visit_uuid'];
                            }
                            __ez.dot.Fire(pixelURL);
                        }
                    })
                }
                pixels = [];
            }

            function getEzimData(adSlot) {
                if (typeof _ezim_d == "undefined") {
                    return false
                }
                var adUnitName = __ez.dot.getAdUnitPath(adSlot).split('/').pop();
                if (typeof _ezim_d === 'object' && _ezim_d.hasOwnProperty(adUnitName)) {
                    return _ezim_d[adUnitName];
                }
                for (var ezimKey in _ezim_d) {
                    if (ezimKey.split('/').pop() === adUnitName) {
                        return _ezim_d[ezimKey];
                    }
                }
                return false;
            }
            return {
                Add: AddPixel,
                AddAndFire: AddAndFirePixel,
                AddAndFireOrig: AddAndFireOrigPixel,
                AddById: AddPixelById,
                Fire: Fire,
                GetPixels: GetCurrentPixels,
            };
        })();
    </script>
    <link rel="preconnect" href="//www.youtube.com" crossorigin="">
    <link rel="preconnect" href="//www.pubgmobile.com" crossorigin="">
    <link rel="preconnect" href="//gmpg.org" crossorigin="">
    <link rel="preconnect" href="//fonts.gstatic.com" crossorigin="">
    <link rel="preconnect" href="//fonts.googleapis.com" crossorigin="">
    <link rel="preconnect" href="//go.ezoic.net" crossorigin="">
    <script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer=""
        src="//sf.ezoiccdn.com/tardisrocinante/cash.js?cb=4"></script>
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>PUBG Name Generator with Stylish Symbols 😎🔥 (Copy/Paste)</title>
    <style id="rocket-critical-css">
        #main #primary.content-area.clr {
            background-color: transparent;
            padding: 0
        }

        #ez-toc-container a {
            color: #444;
            box-shadow: none;
            text-decoration: none;
            text-shadow: none
        }

        #ez-toc-container a:visited {
            color: #9f9f9f
        }

        #ez-toc-container a.ez-toc-toggle {
            color: #444
        }

        .ez-toc-btn {
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.428571429;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px
        }

        .ez-toc-btn-default {
            color: #333;
            background-color: #fff;
            border-color: #ccc
        }

        .ez-toc-btn-xs {
            padding: 5px 10px;
            font-size: 12px;
            line-height: 1.5;
            border-radius: 3px
        }

        .ez-toc-btn-xs {
            padding: 1px 5px
        }

        .ez-toc-btn-default {
            text-shadow: 0 -1px 0 rgba(0, 0, 0, .2);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075)
        }

        .ez-toc-btn-default {
            text-shadow: 0 1px 0 #fff;
            background-image: linear-gradient(to bottom, #fff 0, #e0e0e0 100%);
            background-repeat: repeat-x;
            border-color: #dbdbdb;
            border-color: #ccc
        }

        .ez-toc-pull-right {
            float: right !important;
            margin-left: 10px
        }

        .ez-toc-glyphicon {
            position: relative;
            top: 1px;
            display: inline-block;
            font-family: 'Glyphicons Halflings';
            -webkit-font-smoothing: antialiased;
            font-style: normal;
            font-weight: 400;
            line-height: 1;
            -moz-osx-font-smoothing: grayscale
        }

        .ez-toc-glyphicon:empty {
            width: 1em
        }

        .ez-toc-toggle i.ez-toc-glyphicon {
            font-size: 16px;
            margin-left: 2px
        }

        [class*=ez-toc-icon-] {
            font-family: ez-toc-icomoon !important;
            speak: none;
            font-style: normal;
            font-weight: 400;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        .ez-toc-icon-toggle:before {
            content: "\e87a"
        }

        .hamburger {
            display: inline-block;
            font: inherit;
            color: inherit;
            text-transform: none;
            background-color: transparent;
            border: 0;
            margin: 0;
            overflow: visible
        }

        .hamburger-box {
            width: 20px;
            height: 16px;
            display: inline-block;
            position: relative
        }

        .hamburger-inner {
            display: block;
            top: 50%;
            margin-top: 2px
        }

        .hamburger-inner,
        .hamburger-inner::after,
        .hamburger-inner::before {
            width: 20px;
            height: 2px;
            background-color: #000;
            border-radius: 3px;
            position: absolute
        }

        .hamburger-inner::after,
        .hamburger-inner::before {
            content: "";
            display: block
        }

        .hamburger-inner::before {
            top: -7px
        }

        .hamburger-inner::after {
            bottom: -7px
        }

        html,
        body,
        div,
        span,
        h1,
        h2,
        h4,
        p,
        a,
        img,
        i,
        ul,
        li,
        article,
        aside,
        header,
        nav {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
            font-family: inherit;
            font-size: 100%;
            font-style: inherit;
            font-weight: inherit
        }

        article,
        aside,
        header,
        nav {
            display: block
        }

        html {
            font-size: 62.5%;
            overflow-y: scroll;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%
        }

        *,
        *:before,
        *:after {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box
        }

        article,
        aside,
        header,
        main,
        nav {
            display: block
        }

        a img {
            border: 0
        }

        img {
            max-width: 100%;
            height: auto
        }

        select {
            max-width: 100%
        }

        html {
            -ms-overflow-x: hidden;
            overflow-x: hidden
        }

        body {
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            line-height: 1.8;
            color: #929292;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-wrap: break-word;
            word-wrap: break-word
        }

        body {
            background-color: #fff
        }

        i {
            font-style: italic
        }

        .screen-reader-text {
            border: 0;
            clip: rect(1px, 1px, 1px, 1px);
            clip-path: inset(50%);
            height: 1px;
            margin: -1px;
            font-size: 14px !important;
            font-weight: 400;
            overflow: hidden;
            padding: 0;
            position: absolute !important;
            width: 1px;
            word-wrap: normal !important
        }

        html {
            font-family: sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%
        }

        body {
            margin: 0
        }

        article,
        aside,
        header,
        main,
        nav {
            display: block
        }

        a {
            background-color: transparent
        }

        img {
            border: 0
        }

        button,
        select {
            color: inherit;
            font: inherit;
            margin: 0
        }

        button {
            overflow: visible
        }

        button,
        select {
            text-transform: none
        }

        button {
            -webkit-appearance: button
        }

        button::-moz-focus-inner {
            border: 0;
            padding: 0
        }

        .container {
            width: 1200px;
            max-width: 90%;
            margin: 0 auto
        }

        #wrap {
            position: relative
        }

        #main {
            position: relative
        }

        #main #content-wrap {
            padding-top: 50px;
            padding-bottom: 50px
        }

        .content-area {
            float: left;
            position: relative;
            width: 72%;
            padding-right: 30px;
            border-right-width: 1px;
            border-style: solid;
            border-color: #f1f1f1
        }

        .widget-area {
            width: 28%
        }

        .widget-area.sidebar-primary {
            float: right;
            padding-left: 30px
        }

        .separate-layout {
            background-color: #f1f1f1
        }

        .separate-layout .content-area,
        .separate-layout .widget-area .sidebar-box {
            background-color: #fff;
            padding: 30px
        }

        .separate-layout .content-area {
            border-right-width: 0
        }

        .separate-layout .widget-area.sidebar-primary {
            padding-left: 20px
        }

        .separate-layout #main #content-wrap {
            padding-top: 20px;
            padding-bottom: 20px
        }

        .separate-layout .sidebar-box {
            margin-bottom: 20px
        }

        .separate-layout .sidebar-box:last-child {
            margin-bottom: 0
        }

        @media only screen and (max-width:959px) {
            .container {
                max-width: 90%
            }

            .content-area {
                float: none !important;
                width: 100%;
                margin-bottom: 40px;
                border: 0
            }

            .widget-area.sidebar-primary {
                float: none !important;
                width: 100%;
                padding: 0 !important;
                border: 0
            }

            #main #content-wrap.container {
                width: auto !important
            }

            .separate-layout .container {
                max-width: 95%
            }

            .separate-layout .content-area {
                margin-bottom: 20px
            }

            .separate-layout .widget-area {
                padding-left: 0 !important;
                padding-right: 0 !important
            }
        }

        @media only screen and (max-width:767px) {
            #wrap {
                width: 100% !important
            }
        }

        img {
            max-width: 100%;
            height: auto;
            vertical-align: middle
        }

        img[class*="attachment-"] {
            height: auto
        }

        .clr:after {
            content: '';
            display: block;
            visibility: hidden;
            clear: both;
            zoom: 1;
            height: 0
        }

        a {
            color: #333
        }

        a {
            text-decoration: none
        }

        h1,
        h2,
        h4 {
            font-weight: 600;
            margin: 0 0 20px;
            color: #333;
            line-height: 1.4
        }

        h1 {
            font-size: 23px
        }

        h2 {
            font-size: 20px
        }

        h4 {
            font-size: 17px
        }

        p {
            margin: 0 0 20px
        }

        ul {
            margin: 15px 0 15px 20px
        }

        select {
            width: 100%;
            height: 2.25em;
            min-height: auto;
            border: 1px solid #ddd;
            background-color: white;
            padding: 0 15px;
            margin: 0
        }

        button::-moz-focus-inner {
            padding: 0;
            border: 0
        }

        #mobile-fullscreen {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            overflow-y: scroll;
            z-index: 100000
        }

        #mobile-fullscreen #mobile-fullscreen-inner {
            display: table;
            width: 100%;
            height: 100%;
            padding: 0 40px
        }

        #mobile-fullscreen a.close {
            position: absolute;
            top: 14px;
            right: 14px
        }

        #mobile-fullscreen a.close .close-icon-wrap {
            display: inline-block;
            position: relative;
            width: 40px;
            height: 40px
        }

        #mobile-fullscreen a.close .close-icon-inner,
        #mobile-fullscreen a.close .close-icon-inner::after {
            display: inline-block;
            width: 40px;
            height: 3px;
            background-color: #fff;
            border-radius: 3px
        }

        #mobile-fullscreen a.close .close-icon-inner {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg)
        }

        #mobile-fullscreen a.close .close-icon-inner::after {
            content: '';
            display: block;
            -webkit-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
            transform: rotate(-90deg)
        }

        #mobile-fullscreen nav {
            display: table-cell;
            vertical-align: middle;
            padding: 50px 0;
            text-align: center
        }

        #mobile-fullscreen ul {
            list-style: none;
            margin: 0
        }

        #mobile-fullscreen ul li a {
            display: block;
            position: relative;
            color: #fff;
            letter-spacing: 1px;
            text-transform: uppercase;
            text-align: center
        }

        #mobile-fullscreen ul>li {
            display: block
        }

        #mobile-fullscreen ul>li>a {
            font-size: 18px;
            line-height: 1.2;
            padding: 12px 0
        }

        #site-header {
            position: relative;
            width: 100%;
            background-color: #fff;
            border-bottom: 1px solid #f1f1f1;
            z-index: 100
        }

        #site-header-inner {
            position: relative;
            height: 100%
        }

        #site-logo {
            float: left;
            height: 100%;
            display: table
        }

        #site-logo #site-logo-inner {
            display: table-cell;
            vertical-align: middle;
            height: 74px
        }

        #site-logo #site-logo-inner a {
            background-color: transparent !important
        }

        #site-logo #site-logo-inner a img {
            width: auto;
            vertical-align: middle
        }

        @media only screen and (max-width:767px) {
            #site-logo {
                margin-top: 0px !important;
                margin-bottom: 0px !important
            }
        }

        #site-navigation-wrap {
            float: right;
            position: relative;
            right: -15px
        }

        #site-navigation-wrap .dropdown-menu {
            list-style: none;
            margin: 0;
            padding: 0
        }

        #site-navigation-wrap .dropdown-menu>li {
            float: left;
            position: relative
        }

        #site-navigation-wrap .dropdown-menu>li>a {
            display: block;
            font-size: 13px;
            line-height: 74px;
            color: #555;
            padding: 0 15px;
            letter-spacing: 0.6px
        }

        .sf-menu,
        .sf-menu * {
            margin: 0;
            padding: 0;
            list-style: none
        }

        .sf-menu li.menu-item {
            position: relative;
            white-space: nowrap;
            white-space: normal
        }

        .sf-menu>li {
            float: left
        }

        .sf-menu a.menu-link {
            display: block;
            position: relative;
            zoom: 1
        }

        .dropdown-menu,
        .dropdown-menu * {
            margin: 0;
            padding: 0;
            list-style: none
        }

        .oceanwp-mobile-menu-icon {
            display: none;
            position: relative
        }

        .oceanwp-mobile-menu-icon.mobile-left {
            float: left
        }

        .oceanwp-mobile-menu-icon a {
            font-size: 13px;
            line-height: 74px;
            color: #555;
            padding-left: 15px;
            letter-spacing: 0.6px
        }

        .oceanwp-mobile-menu-icon a:first-child {
            padding-left: 0
        }

        .thumbnail-caption {
            font-size: 13px;
            margin-top: 0.5em;
            text-align: center
        }

        .single .entry-content {
            margin-bottom: 20px
        }

        .single .thumbnail {
            position: relative;
            margin-bottom: 20px
        }

        .single .thumbnail img {
            width: 100%
        }

        .single .entry-title {
            font-size: 34px;
            padding: 0 0 20px;
            margin: 0 0 15px;
            border-bottom: 1px solid #f1f1f1;
            letter-spacing: 0.6px
        }

        @media only screen and (max-width:480px) {
            .single-post .entry-title {
                font-size: 26px
            }
        }

        .widget-area {
            font-size: 13px
        }

        .sidebar-box {
            margin-bottom: 40px
        }

        .sidebar-box ul {
            margin: 0;
            padding: 0;
            list-style: none
        }

        .widget-title {
            display: block;
            line-height: 1;
            font-size: 13px;
            font-weight: 400;
            color: #333;
            border-width: 0 0 0 3px;
            border-style: solid;
            border-color: #13aff0;
            letter-spacing: 1px;
            padding-left: 15px;
            margin: 0 0 20px;
            text-transform: capitalize
        }

        .widget_recent_entries li {
            padding: 6px 0;
            border-bottom: 1px solid #e9e9e9
        }

        .widget_recent_entries li:first-child {
            border-top: 1px solid #e9e9e9
        }

        @media only screen and (max-width:959px) {
            body.default-breakpoint #site-navigation-wrap {
                display: none
            }

            body.default-breakpoint .center-logo #site-logo {
                float: none;
                position: absolute;
                left: 50%;
                padding: 0;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%)
            }

            body.default-breakpoint .oceanwp-mobile-menu-icon {
                display: block
            }
        }

        #mobile-nav li,
        #mobile-nav a {
            color: #fff;
            list-style: none;
            line-height: 3
        }

        .single .entry-content.clr a {
            color: #2b4bff
        }

        h2 {
            text-align: center
        }

        #content-wrap div#primary {
            background-color: #1e73be00 !important
        }

        #content-wrap div#primary {
            padding: 0;
            background-color: #1e73be
        }

        .sidebar-box {
            border-radius: 3px
        }

        .site-content {
            border-radius: 3px
        }

        #main #content-wrap,
        .separate-layout #main #content-wrap {
            padding-top: 10px;
            padding-bottom: 10px
        }

        .single .thumbnail img {
            border-radius: 3px
        }

        #main .ez-toc-toggle i.ez-toc-glyphicon {
            margin-left: 0;
            font-weight: 700
        }

        body i.ez-toc-glyphicon.ez-toc-icon-toggle:before {
            content: "+"
        }

        header.entry-header.clr {
            background-color: #fff;
            padding: 20px 20px 5px;
            box-shadow: 0 1px 2px 1px rgba(0, 0, 0, .05);
            border-radius: 5px 5px 0 0
        }

        .etc-content-segment {
            padding: 10px;
            background-color: #fff;
            margin-bottom: 20px;
            box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .05);
            border-radius: 5px
        }

        body {
            counter-reset: list-counter
        }

        .etc-content-segment.zero-top-border {
            border-top: none !important;
            border-top-right-radius: 0 !important;
            border-top-left-radius: 0 !important
        }

        .adsense {
            margin: 10px -10px !important
        }
    </style>
    <link rel="stylesheet"
        href="https://etcgamer.com/wp-content/cache/min/1/c7ae2c12e82fcd169104eed261b94dda.css?ez_used_css_s=14"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'" media="all"
        data-minify="1">
    <meta name="description"
        content="Use PUBG Name Generator to Generate Stylish Name for yourself and Simply 🅒🅞🅟🅨 ⓐⓝⓓ 🅟🅐🅢🅣🅔 or see different cool pubg names ideas ...">
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large">
    <link rel="canonical" href="https://etcgamer.com/pubg-name-generator-ideas-stylish-symbols/">
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="article">
    <meta property="og:title" content="PUBG Name Generator with Stylish Symbols 😎🔥 (Copy/Paste)">
    <meta property="og:description"
        content="Use PUBG Name Generator to Generate Stylish Name for yourself and Simply 🅒🅞🅟🅨 ⓐⓝⓓ 🅟🅐🅢🅣🅔 or see different cool pubg names ideas ...">
    <meta property="og:url" content="https://etcgamer.com/pubg-name-generator-ideas-stylish-symbols/">
    <meta property="og:site_name" content="etcGamer">
    <meta property="article:publisher" content="https://facebook.com/etcgamers">
    <meta property="article:tag" content="Battlegrounds Mobile India Name Generator">
    <meta property="article:tag" content="BGMI Name Generator">
    <meta property="article:tag" content="cool names for pubg mobile">
    <meta property="article:tag" content="PUBG Mobile India name Generator">
    <meta property="article:tag" content="pubg mobile name symbol">
    <meta property="article:tag" content="pubg name font generator">
    <meta property="article:tag" content="pubg name generator with symbols">
    <meta property="article:tag" content="pubg names ideas">
    <meta property="article:tag" content="pubg stylish name">
    <meta property="article:section" content="Name Generators">
    <meta property="og:updated_time" content="2021-07-04T17:51:14+00:00">
    <meta property="fb:app_id" content="491470694944884">
    <meta property="og:image"
        content="https://etcgamer.com/wp-admin/admin-ajax.php?action=rank_math_overlay_thumb&amp;id=1778&amp;type=play">
    <meta property="og:image:secure_url"
        content="https://etcgamer.com/wp-admin/admin-ajax.php?action=rank_math_overlay_thumb&amp;id=1778&amp;type=play">
    <meta property="og:image:width" content="640">
    <meta property="og:image:height" content="345">
    <meta property="og:image:alt" content="pubg name generator stylish symbols">
    <meta property="og:image:type" content="image/png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="PUBG Name Generator with Stylish Symbols 😎🔥 (Copy/Paste)">
    <meta name="twitter:description"
        content="Use PUBG Name Generator to Generate Stylish Name for yourself and Simply 🅒🅞🅟🅨 ⓐⓝⓓ 🅟🅐🅢🅣🅔 or see different cool pubg names ideas ...">
    <meta name="twitter:site" content="@ietcgamer">
    <meta name="twitter:creator" content="@ietcgamer">
    <meta name="twitter:image"
        content="https://etcgamer.com/wp-admin/admin-ajax.php?action=rank_math_overlay_thumb&amp;id=1778&amp;type=play">
    <link href="https://fonts.gstatic.com" crossorigin="" rel="preconnect">
    <link rel="alternate" type="application/rss+xml" title="etcGamer » Feed" href="https://etcgamer.com/feed/">
    <link rel="alternate" type="application/rss+xml" title="etcGamer » Comments Feed"
        href="https://etcgamer.com/comments/feed/">
    <link rel="alternate" type="application/rss+xml"
        title="etcGamer » PUBG Name Generator with Stylish Symbols 😎🔥 (Copy/Paste) Comments Feed"
        href="https://etcgamer.com/pubg-name-generator-ideas-stylish-symbols/feed/">
    <style>
        img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 .07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }
    </style>
    <style id="kk-star-ratings-inline-css">
        .kk-star-ratings .kksr-stars .kksr-star {
            margin-right: 4px;
        }

        [dir="rtl"] .kk-star-ratings .kksr-stars .kksr-star {
            margin-left: 4px;
            margin-right: 0;
        }
    </style>
    <style id="wpdiscuz-frontend-css-inline-css">
        #wpdcom .wpd-blog-administrator .wpd-comment-label {
            color: #ffffff;
            background-color: #00B38F;
            border: none
        }

        #wpdcom .wpd-blog-administrator .wpd-comment-author,
        #wpdcom .wpd-blog-administrator .wpd-comment-author a {
            color: #00B38F
        }

        #wpdcom.wpd-layout-1 .wpd-comment .wpd-blog-administrator .wpd-avatar img {
            border-color: #00B38F
        }

        #wpdcom.wpd-layout-2 .wpd-comment.wpd-reply .wpd-comment-wrap.wpd-blog-administrator {
            border-left: 3px solid #00B38F
        }

        #wpdcom.wpd-layout-2 .wpd-comment .wpd-blog-administrator .wpd-avatar img {
            border-bottom-color: #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-blog-administrator .wpd-comment-subheader {
            border-top: 1px dashed #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-reply .wpd-blog-administrator .wpd-comment-right {
            border-left: 1px solid #00B38F
        }

        #wpdcom .wpd-blog-editor .wpd-comment-label {
            color: #ffffff;
            background-color: #00B38F;
            border: none
        }

        #wpdcom .wpd-blog-editor .wpd-comment-author,
        #wpdcom .wpd-blog-editor .wpd-comment-author a {
            color: #00B38F
        }

        #wpdcom.wpd-layout-1 .wpd-comment .wpd-blog-editor .wpd-avatar img {
            border-color: #00B38F
        }

        #wpdcom.wpd-layout-2 .wpd-comment.wpd-reply .wpd-comment-wrap.wpd-blog-editor {
            border-left: 3px solid #00B38F
        }

        #wpdcom.wpd-layout-2 .wpd-comment .wpd-blog-editor .wpd-avatar img {
            border-bottom-color: #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-blog-editor .wpd-comment-subheader {
            border-top: 1px dashed #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-reply .wpd-blog-editor .wpd-comment-right {
            border-left: 1px solid #00B38F
        }

        #wpdcom .wpd-blog-author .wpd-comment-label {
            color: #ffffff;
            background-color: #00B38F;
            border: none
        }

        #wpdcom .wpd-blog-author .wpd-comment-author,
        #wpdcom .wpd-blog-author .wpd-comment-author a {
            color: #00B38F
        }

        #wpdcom.wpd-layout-1 .wpd-comment .wpd-blog-author .wpd-avatar img {
            border-color: #00B38F
        }

        #wpdcom.wpd-layout-2 .wpd-comment .wpd-blog-author .wpd-avatar img {
            border-bottom-color: #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-blog-author .wpd-comment-subheader {
            border-top: 1px dashed #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-reply .wpd-blog-author .wpd-comment-right {
            border-left: 1px solid #00B38F
        }

        #wpdcom .wpd-blog-contributor .wpd-comment-label {
            color: #ffffff;
            background-color: #00B38F;
            border: none
        }

        #wpdcom .wpd-blog-contributor .wpd-comment-author,
        #wpdcom .wpd-blog-contributor .wpd-comment-author a {
            color: #00B38F
        }

        #wpdcom.wpd-layout-1 .wpd-comment .wpd-blog-contributor .wpd-avatar img {
            border-color: #00B38F
        }

        #wpdcom.wpd-layout-2 .wpd-comment .wpd-blog-contributor .wpd-avatar img {
            border-bottom-color: #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-blog-contributor .wpd-comment-subheader {
            border-top: 1px dashed #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-reply .wpd-blog-contributor .wpd-comment-right {
            border-left: 1px solid #00B38F
        }

        #wpdcom .wpd-blog-subscriber .wpd-comment-label {
            color: #ffffff;
            background-color: #00B38F;
            border: none
        }

        #wpdcom .wpd-blog-subscriber .wpd-comment-author,
        #wpdcom .wpd-blog-subscriber .wpd-comment-author a {
            color: #00B38F
        }

        #wpdcom.wpd-layout-2 .wpd-comment .wpd-blog-subscriber .wpd-avatar img {
            border-bottom-color: #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-blog-subscriber .wpd-comment-subheader {
            border-top: 1px dashed #00B38F
        }

        #wpdcom .wpd-blog-post_author .wpd-comment-label {
            color: #ffffff;
            background-color: #00B38F;
            border: none
        }

        #wpdcom .wpd-blog-post_author .wpd-comment-author,
        #wpdcom .wpd-blog-post_author .wpd-comment-author a {
            color: #00B38F
        }

        #wpdcom .wpd-blog-post_author .wpd-avatar img {
            border-color: #00B38F
        }

        #wpdcom.wpd-layout-1 .wpd-comment .wpd-blog-post_author .wpd-avatar img {
            border-color: #00B38F
        }

        #wpdcom.wpd-layout-2 .wpd-comment.wpd-reply .wpd-comment-wrap.wpd-blog-post_author {
            border-left: 3px solid #00B38F
        }

        #wpdcom.wpd-layout-2 .wpd-comment .wpd-blog-post_author .wpd-avatar img {
            border-bottom-color: #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-blog-post_author .wpd-comment-subheader {
            border-top: 1px dashed #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-reply .wpd-blog-post_author .wpd-comment-right {
            border-left: 1px solid #00B38F
        }

        #wpdcom .wpd-blog-guest .wpd-comment-label {
            color: #ffffff;
            background-color: #00B38F;
            border: none
        }

        #wpdcom .wpd-blog-guest .wpd-comment-author,
        #wpdcom .wpd-blog-guest .wpd-comment-author a {
            color: #00B38F
        }

        #wpdcom.wpd-layout-3 .wpd-blog-guest .wpd-comment-subheader {
            border-top: 1px dashed #00B38F
        }

        #comments,
        #respond,
        .comments-area,
        #wpdcom {
            background: rgb(255, 255, 255)
        }

        #wpdcom .ql-editor>* {
            color: #777777
        }

        #wpdcom .ql-editor::before {}

        #wpdcom .ql-toolbar {
            border: 1px solid #DDDDDD;
            border-top: none
        }

        #wpdcom .ql-container {
            border: 1px solid #DDDDDD;
            border-bottom: none
        }

        #wpdcom .wpd-form-row .wpdiscuz-item input[type="text"],
        #wpdcom .wpd-form-row .wpdiscuz-item input[type="email"],
        #wpdcom .wpd-form-row .wpdiscuz-item input[type="url"],
        #wpdcom .wpd-form-row .wpdiscuz-item input[type="color"],
        #wpdcom .wpd-form-row .wpdiscuz-item input[type="date"],
        #wpdcom .wpd-form-row .wpdiscuz-item input[type="datetime"],
        #wpdcom .wpd-form-row .wpdiscuz-item input[type="datetime-local"],
        #wpdcom .wpd-form-row .wpdiscuz-item input[type="month"],
        #wpdcom .wpd-form-row .wpdiscuz-item input[type="number"],
        #wpdcom .wpd-form-row .wpdiscuz-item input[type="time"],
        #wpdcom textarea,
        #wpdcom select {
            border: 1px solid #DDDDDD;
            color: #777777
        }

        #wpdcom .wpd-form-row .wpdiscuz-item textarea {
            border: 1px solid #DDDDDD
        }

        #wpdcom input::placeholder,
        #wpdcom textarea::placeholder,
        #wpdcom input::-moz-placeholder,
        #wpdcom textarea::-webkit-input-placeholder {}

        #wpdcom .wpd-comment-text {
            color: #777777
        }

        #wpdcom .wpd-thread-head .wpd-thread-info {
            border-bottom: 2px solid #00B38F
        }

        #wpdcom .wpd-thread-head .wpd-thread-info.wpd-reviews-tab svg {
            fill: #00B38F
        }

        #wpdcom .wpd-thread-head .wpdiscuz-user-settings {
            border-bottom: 2px solid #00B38F
        }

        #wpdcom .wpd-thread-head .wpdiscuz-user-settings:hover {
            color: #00B38F
        }

        #wpdcom .wpd-comment .wpd-follow-link:hover {
            color: #00B38F
        }

        #wpdcom .wpd-comment-status .wpd-sticky {
            color: #00B38F
        }

        #wpdcom .wpd-thread-filter .wpdf-active {
            color: #00B38F;
            border-bottom-color: #00B38F
        }

        #wpdcom .wpd-comment-info-bar {
            border: 1px dashed #33c3a6;
            background: #e6f8f4
        }

        #wpdcom .wpd-comment-info-bar .wpd-current-view i {
            color: #00B38F
        }

        #wpdcom .wpd-filter-view-all:hover {
            background: #00B38F
        }

        #wpdcom .wpdiscuz-item .wpdiscuz-rating>label {
            color: #DDDDDD
        }

        #wpdcom .wpdiscuz-item .wpdiscuz-rating:not(:checked)>label:hover,
        .wpdiscuz-rating:not(:checked)>label:hover~label {}

        #wpdcom .wpdiscuz-item .wpdiscuz-rating>input~label:hover,
        #wpdcom .wpdiscuz-item .wpdiscuz-rating>input:not(:checked)~label:hover~label,
        #wpdcom .wpdiscuz-item .wpdiscuz-rating>input:not(:checked)~label:hover~label {
            color: #FFED85
        }

        #wpdcom .wpdiscuz-item .wpdiscuz-rating>input:checked~label:hover,
        #wpdcom .wpdiscuz-item .wpdiscuz-rating>input:checked~label:hover,
        #wpdcom .wpdiscuz-item .wpdiscuz-rating>label:hover~input:checked~label,
        #wpdcom .wpdiscuz-item .wpdiscuz-rating>input:checked+label:hover~label,
        #wpdcom .wpdiscuz-item .wpdiscuz-rating>input:checked~label:hover~label,
        .wpd-custom-field .wcf-active-star,
        #wpdcom .wpdiscuz-item .wpdiscuz-rating>input:checked~label {
            color: #FFD700
        }

        #wpd-post-rating .wpd-rating-wrap .wpd-rating-stars svg .wpd-star {
            fill: #DDDDDD
        }

        #wpd-post-rating .wpd-rating-wrap .wpd-rating-stars svg .wpd-active {
            fill: #FFD700
        }

        #wpd-post-rating .wpd-rating-wrap .wpd-rate-starts svg .wpd-star {
            fill: #DDDDDD
        }

        #wpd-post-rating .wpd-rating-wrap .wpd-rate-starts:hover svg .wpd-star {
            fill: #FFED85
        }

        #wpd-post-rating.wpd-not-rated .wpd-rating-wrap .wpd-rate-starts svg:hover~svg .wpd-star {
            fill: #DDDDDD
        }

        .wpdiscuz-post-rating-wrap .wpd-rating .wpd-rating-wrap .wpd-rating-stars svg .wpd-star {
            fill: #DDDDDD
        }

        .wpdiscuz-post-rating-wrap .wpd-rating .wpd-rating-wrap .wpd-rating-stars svg .wpd-active {
            fill: #FFD700
        }

        #wpdcom .wpd-comment .wpd-follow-active {
            color: #ff7a00
        }

        #wpdcom .page-numbers {
            color: #555;
            border: #555 1px solid
        }

        #wpdcom span.current {
            background: #555
        }

        #wpdcom.wpd-layout-1 .wpd-new-loaded-comment>.wpd-comment-wrap>.wpd-comment-right {
            background: #FFFAD6
        }

        #wpdcom.wpd-layout-2 .wpd-new-loaded-comment.wpd-comment>.wpd-comment-wrap>.wpd-comment-right {
            background: #FFFAD6
        }

        #wpdcom.wpd-layout-2 .wpd-new-loaded-comment.wpd-comment.wpd-reply>.wpd-comment-wrap>.wpd-comment-right {
            background: transparent
        }

        #wpdcom.wpd-layout-2 .wpd-new-loaded-comment.wpd-comment.wpd-reply>.wpd-comment-wrap {
            background: #FFFAD6
        }

        #wpdcom.wpd-layout-3 .wpd-new-loaded-comment.wpd-comment>.wpd-comment-wrap>.wpd-comment-right {
            background: #FFFAD6
        }

        #wpdcom .wpd-follow:hover i,
        #wpdcom .wpd-unfollow:hover i,
        #wpdcom .wpd-comment .wpd-follow-active:hover i {
            color: #00B38F
        }

        #wpdcom .wpdiscuz-readmore {
            cursor: pointer;
            color: #00B38F
        }

        .wpd-custom-field .wcf-pasiv-star,
        #wpcomm .wpdiscuz-item .wpdiscuz-rating>label {
            color: #DDDDDD
        }

        .wpd-wrapper .wpd-list-item.wpd-active {
            border-top: 3px solid #00B38F
        }

        #wpdcom.wpd-layout-2 .wpd-comment.wpd-reply.wpd-unapproved-comment .wpd-comment-wrap {
            border-left: 3px solid #FFFAD6
        }

        #wpdcom.wpd-layout-3 .wpd-comment.wpd-reply.wpd-unapproved-comment .wpd-comment-right {
            border-left: 1px solid #FFFAD6
        }

        #wpdcom .wpd-prim-button {
            background-color: #07B290;
            color: #FFFFFF
        }

        #wpdcom .wpd_label__check i.wpdicon-on {
            color: #07B290;
            border: 1px solid #83d9c8
        }

        #wpd-bubble-wrapper #wpd-bubble-all-comments-count {
            color: #1DB99A
        }

        #wpd-bubble-wrapper>div {
            background-color: #1DB99A
        }

        #wpd-bubble-wrapper>#wpd-bubble #wpd-bubble-add-message {
            background-color: #1DB99A
        }

        #wpd-bubble-wrapper>#wpd-bubble #wpd-bubble-add-message::before {
            border-left-color: #1DB99A;
            border-right-color: #1DB99A
        }

        #wpd-bubble-wrapper.wpd-right-corner>#wpd-bubble #wpd-bubble-add-message::before {
            border-left-color: #1DB99A;
            border-right-color: #1DB99A
        }

        .wpd-inline-icon-wrapper path.wpd-inline-icon-first {
            fill: #1DB99A
        }

        .wpd-inline-icon-count {
            background-color: #1DB99A
        }

        .wpd-inline-icon-count::before {
            border-right-color: #1DB99A
        }

        .wpd-inline-form-wrapper::before {
            border-bottom-color: #1DB99A
        }

        .wpd-inline-form-question {
            background-color: #1DB99A
        }

        .wpd-inline-form {
            background-color: #1DB99A
        }

        .wpd-last-inline-comments-wrapper {
            border-color: #1DB99A
        }

        .wpd-last-inline-comments-wrapper::before {
            border-bottom-color: #1DB99A
        }

        .wpd-last-inline-comments-wrapper .wpd-view-all-inline-comments {
            background: #1DB99A
        }

        .wpd-last-inline-comments-wrapper .wpd-view-all-inline-comments:hover,
        .wpd-last-inline-comments-wrapper .wpd-view-all-inline-comments:active,
        .wpd-last-inline-comments-wrapper .wpd-view-all-inline-comments:focus {
            background-color: #1DB99A
        }

        #wpdcom .ql-snow .ql-tooltip[data-mode="link"]::before {
            content: "Enter link:"
        }

        #wpdcom .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
            content: "Save"
        }

        .comments-area {
            width: auto
        }
    </style>
    <style id="ez-toc-inline-css">
        div#ez-toc-container p.ez-toc-title {
            font-size: 120%;
        }

        div#ez-toc-container p.ez-toc-title {
            font-weight: 500;
        }

        div#ez-toc-container ul li {
            font-size: 95%;
        }

        div#ez-toc-container {
            background: #fff;
            border: 1px solid #ececec;
            width: 100%;
        }

        div#ez-toc-container p.ez-toc-title {
            color: #999;
        }

        div#ez-toc-container ul.ez-toc-list a {
            color: #428bca;
        }

        div#ez-toc-container ul.ez-toc-list a:hover {
            color: #2a6496;
        }

        div#ez-toc-container ul.ez-toc-list a:visited {
            color: #428bca;
        }
    </style>
    <script src="https://etcgamer.com/wp-includes/js/jquery/jquery.min.js?ver=3.5.1" id="jquery-core-js" defer="">
    </script>
    <link rel="https://api.w.org/" href="https://etcgamer.com/wp-json/">
    <link rel="alternate" type="application/json" href="https://etcgamer.com/wp-json/wp/v2/posts/1455">
    <link rel="edituri" type="application/rsd+xml" title="RSD" href="https://etcgamer.com/xmlrpc.php?rsd">
    <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://etcgamer.com/wp-includes/wlwmanifest.xml">
    <meta name="generator" content="WordPress 5.7.2">
    <link rel="shortlink" href="https://etcgamer.com/?p=1455">
    <style>
        body {
            background: linear-gradient(to bottom right, #E91E63, #00b0ff);
        }

        .single .thumbnail {
            padding: 10px;
            background: #fff;
            border-radius: 5px;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?display=optional&amp;family=Open+Sans%3Awght%40400%3B600%3B700"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'" rel="stylesheet">
    <style>
        ul.li_list li {
            min-width: 48%;
            display: inline-flex;
            border: 1px solid #949494;
            margin: 5px 2px;
            padding: 5px;
        }

        .single .thumbnail {
            padding: 10px;
            background: #fff;
            border-radius: 5px;
        }

        ul.li_list {
            margin: 0;
        }

        ul.li_list li.copied {
            background: #009688;
            color: #fff;
        }
    </style>
    <meta name="theme-color" content="#1A1A1D">
    <link rel="shortcut icon" href="https://etcgamer.com/wp-content/uploads/2019/08/cropped-etcgamer-icon-2-32x32.png"
        sizes="32x32">
    <link rel="icon" href="https://etcgamer.com/wp-content/uploads/2019/08/cropped-etcgamer-icon-2-192x192.png"
        sizes="192x192">
    <link rel="apple-touch-icon-precomposed"
        href="https://etcgamer.com/wp-content/uploads/2019/08/cropped-etcgamer-icon-2-180x180.png">
    <link rel="apple-touch-icon"
        href="https://etcgamer.com/wp-content/uploads/2019/08/cropped-etcgamer-icon-2-180x180.png">
    <meta name="msapplication-TileImage"
        content="https://etcgamer.com/wp-content/uploads/2019/08/cropped-etcgamer-icon-2-270x270.png">
    <style id="wp-custom-css">
        #wpdcom .wpd-comment-footer .wpd-vote-up svg,
        #wpdcom .wpd-comment-footer .wpd-vote-down svg {
            width: 16px;
            height: 16px
        }

        /* Custom Css*/
        .blue {
            color: #0000ff !important
        }

        .blue:hover {
            color: #00d025 !important
        }

        .green {
            color: #00d025 !important
        }

        .green:hover {
            color: #0000ff !important
        }

        .top-border {
            border-top: 1px solid #e9e9e9
        }

        .align-middle {
            vertical-align: middle !important
        }

        .width-80 {
            width: 80% !important;
            margin-left: 10% !important
        }

        .bold {
            font-weight: bold
        }

        .i-link {
            margin-left: 4px;
            font-size: 12px
        }

        /*div#sidebar_image-2{padding:0}*/
        @media only screen and (max-width:1280px) {
            div#sidebar_image-2 {
                display: none
            }
        }

        .single .entry-content.clr a {
            color: #2b4bff
        }

        .single .entry-content.clr td,
        h2 {
            text-align: center
        }

        .single .entry-content.clr a:not(.ez-toc-toggle):hover {
            color: #00d025 !important;
            text-decoration: underline
        }

        .single .entry-content.clr tr:first-child th,
        .single .entry-content.clr tr:first-child td {
            text-align: center;
            font-weight: 600
        }

        .col2 {
            column-count: 2
        }

        .separate-layout .widget-area .sidebar-box.etc_sidebar_ad_class.clr {
            padding: 0;
            border-radius: 0;
            background: none
        }

        body {
            background: linear-gradient(to bottom right, #E91E63, #00b0ff)
        }

        #content-wrap div#primary {
            background-color: #1e73be00 !important
        }

        #main .browsecars a {
            text-decoration: underline;
            font-size: .9em
        }

        #main .browsecars td {
            border: 1px solid #ccc
        }
    </style>
    <style>
        /* General CSS */
        a:hover,
        a.light:hover,
        .theme-heading .text::before,
        .theme-heading .text::after,
        #top-bar-content>a:hover,
        #top-bar-social li.oceanwp-email a:hover,
        #site-navigation-wrap .dropdown-menu>li>a:hover,
        #site-header.medium-header #medium-searchform button:hover,
        .oceanwp-mobile-menu-icon a:hover,
        .blog-entry.post .blog-entry-header .entry-title a:hover,
        .blog-entry.post .blog-entry-readmore a:hover,
        .blog-entry.thumbnail-entry .blog-entry-category a,
        ul.meta li a:hover,
        .dropcap,
        .single nav.post-navigation .nav-links .title,
        body .related-post-title a:hover,
        body #wp-calendar caption,
        body .contact-info-widget.default i,
        body .contact-info-widget.big-icons i,
        body .custom-links-widget .oceanwp-custom-links li a:hover,
        body .custom-links-widget .oceanwp-custom-links li a:hover:before,
        body .posts-thumbnails-widget li a:hover,
        body .social-widget li.oceanwp-email a:hover,
        .comment-author .comment-meta .comment-reply-link,
        #respond #cancel-comment-reply-link:hover,
        #footer-widgets .footer-box a:hover,
        #footer-bottom a:hover,
        #footer-bottom #footer-bottom-menu a:hover,
        .sidr a:hover,
        .sidr-class-dropdown-toggle:hover,
        .sidr-class-menu-item-has-children.active>a,
        .sidr-class-menu-item-has-children.active>a>.sidr-class-dropdown-toggle,
        input[type=checkbox]:checked:before {
            color:
        }

        .single nav.post-navigation .nav-links .title .owp-icon use,
        .blog-entry.post .blog-entry-readmore a:hover .owp-icon use,
        body .contact-info-widget.default .owp-icon use,
        body .contact-info-widget.big-icons .owp-icon use {
            stroke:
        }

        input[type="button"],
        input[type="reset"],
        input[type="submit"],
        button[type="submit"],
        .button,
        #site-navigation-wrap .dropdown-menu>li.btn>a>span,
        .thumbnail:hover i,
        .post-quote-content,
        .omw-modal .omw-close-modal,
        body .contact-info-widget.big-icons li:hover i,
        body div.wpforms-container-full .wpforms-form input[type=submit],
        body div.wpforms-container-full .wpforms-form button[type=submit],
        body div.wpforms-container-full .wpforms-form .wpforms-page-button {
            background-color:
        }

        .thumbnail:hover .link-post-svg-icon {
            background-color:
        }

        body .contact-info-widget.big-icons li:hover .owp-icon {
            background-color:
        }

        .widget-title {
            border-color:
        }

        blockquote {
            border-color:
        }

        #searchform-dropdown {
            border-color:
        }

        .dropdown-menu .sub-menu {
            border-color:
        }

        .blog-entry.large-entry .blog-entry-readmore a:hover {
            border-color:
        }

        .oceanwp-newsletter-form-wrap input[type="email"]:focus {
            border-color:
        }

        .social-widget li.oceanwp-email a:hover {
            border-color:
        }

        #respond #cancel-comment-reply-link:hover {
            border-color:
        }

        body .contact-info-widget.big-icons li:hover i {
            border-color:
        }

        #footer-widgets .oceanwp-newsletter-form-wrap input[type="email"]:focus {
            border-color:
        }

        input[type="button"]:hover,
        input[type="reset"]:hover,
        input[type="submit"]:hover,
        button[type="submit"]:hover,
        input[type="button"]:focus,
        input[type="reset"]:focus,
        input[type="submit"]:focus,
        button[type="submit"]:focus,
        .button:hover,
        #site-navigation-wrap .dropdown-menu>li.btn>a:hover>span,
        .post-quote-author,
        .omw-modal .omw-close-modal:hover,
        body div.wpforms-container-full .wpforms-form input[type=submit]:hover,
        body div.wpforms-container-full .wpforms-form button[type=submit]:hover,
        body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover {
            background-color:
        }

        table th,
        table td,
        hr,
        .content-area,
        body.content-left-sidebar #content-wrap .content-area,
        .content-left-sidebar .content-area,
        #top-bar-wrap,
        #site-header,
        #site-header.top-header #search-toggle,
        .dropdown-menu ul li,
        .centered-minimal-page-header,
        .blog-entry.post,
        .blog-entry.grid-entry .blog-entry-inner,
        .blog-entry.thumbnail-entry .blog-entry-bottom,
        .single-post .entry-title,
        .single .entry-share-wrap .entry-share,
        .single .entry-share,
        .single .entry-share ul li a,
        .single nav.post-navigation,
        .single nav.post-navigation .nav-links .nav-previous,
        #author-bio,
        #author-bio .author-bio-avatar,
        #author-bio .author-bio-social li a,
        #related-posts,
        #comments,
        .comment-body,
        #respond #cancel-comment-reply-link,
        #blog-entries .type-page,
        .page-numbers a,
        .page-numbers span:not(.elementor-screen-only),
        .page-links span,
        body #wp-calendar caption,
        body #wp-calendar th,
        body #wp-calendar tbody,
        body .contact-info-widget.default i,
        body .contact-info-widget.big-icons i,
        body .posts-thumbnails-widget li,
        body .tagcloud a {
            border-color: #eaeaea
        }

        body .contact-info-widget.big-icons .owp-icon,
        body .contact-info-widget.default .owp-icon {
            border-color: #eaeaea
        }

        body,
        .has-parallax-footer:not(.separate-layout) #main {
            background-color: #ededed
        }

        a {
            color: #000000
        }

        a .owp-icon use {
            stroke: #000000
        }

        a:hover {
            color: #2b4bff
        }

        a:hover .owp-icon use {
            stroke: #2b4bff
        }

        .separate-layout,
        .has-parallax-footer.separate-layout #main {
            background-color: #ffffff
        }

        .separate-layout .content-area,
        .separate-layout.content-left-sidebar .content-area,
        .content-both-sidebars.scs-style .content-area,
        .separate-layout.content-both-sidebars.ssc-style .content-area,
        body.separate-blog.separate-layout #blog-entries>*,
        body.separate-blog.separate-layout .oceanwp-pagination,
        body.separate-blog.separate-layout .blog-entry.grid-entry .blog-entry-inner {
            padding: 10px
        }

        .separate-layout.content-full-width .content-area {
            padding: 10px !important
        }

        .separate-layout .widget-area .sidebar-box {
            padding: 10PX
        }

        .container {
            width: 1700px
        }

        @media only screen and (min-width:960px) {

            .content-area,
            .content-left-sidebar .content-area {
                width: 70%
            }
        }

        @media only screen and (min-width:960px) {

            .widget-area,
            .content-left-sidebar .widget-area {
                width: 30%
            }
        }

        #main #content-wrap,
        .separate-layout #main #content-wrap {
            padding-top: 10px;
            padding-bottom: 10px
        }

        #scroll-top {
            bottom: 8px
        }

        #scroll-top {
            width: 26px;
            height: 26px;
            line-height: 26px
        }

        #scroll-top {
            font-size: 21px
        }

        #scroll-top .owp-icon {
            width: 21px;
            height: 21px
        }

        form input[type="text"],
        form input[type="password"],
        form input[type="email"],
        form input[type="url"],
        form input[type="date"],
        form input[type="month"],
        form input[type="time"],
        form input[type="datetime"],
        form input[type="datetime-local"],
        form input[type="week"],
        form input[type="number"],
        form input[type="search"],
        form input[type="tel"],
        form input[type="color"],
        form select,
        form textarea {
            font-size: 15px
        }

        body div.wpforms-container-full .wpforms-form input[type=date],
        body div.wpforms-container-full .wpforms-form input[type=datetime],
        body div.wpforms-container-full .wpforms-form input[type=datetime-local],
        body div.wpforms-container-full .wpforms-form input[type=email],
        body div.wpforms-container-full .wpforms-form input[type=month],
        body div.wpforms-container-full .wpforms-form input[type=number],
        body div.wpforms-container-full .wpforms-form input[type=password],
        body div.wpforms-container-full .wpforms-form input[type=range],
        body div.wpforms-container-full .wpforms-form input[type=search],
        body div.wpforms-container-full .wpforms-form input[type=tel],
        body div.wpforms-container-full .wpforms-form input[type=text],
        body div.wpforms-container-full .wpforms-form input[type=time],
        body div.wpforms-container-full .wpforms-form input[type=url],
        body div.wpforms-container-full .wpforms-form input[type=week],
        body div.wpforms-container-full .wpforms-form select,
        body div.wpforms-container-full .wpforms-form textarea {
            font-size: 15px
        }

        .theme-button,
        input[type="submit"],
        button[type="submit"],
        button,
        body div.wpforms-container-full .wpforms-form input[type=submit],
        body div.wpforms-container-full .wpforms-form button[type=submit],
        body div.wpforms-container-full .wpforms-form .wpforms-page-button {
            padding: 14px 25px 14px 25px
        }

        .theme-button,
        input[type="submit"],
        button[type="submit"],
        button,
        .button,
        body div.wpforms-container-full .wpforms-form input[type=submit],
        body div.wpforms-container-full .wpforms-form button[type=submit],
        body div.wpforms-container-full .wpforms-form .wpforms-page-button {
            border-radius: 4px
        }

        body .theme-button,
        body input[type="submit"],
        body button[type="submit"],
        body button,
        body .button,
        body div.wpforms-container-full .wpforms-form input[type=submit],
        body div.wpforms-container-full .wpforms-form button[type=submit],
        body div.wpforms-container-full .wpforms-form .wpforms-page-button {
            background-color: #000000
        }

        body .theme-button:hover,
        body input[type="submit"]:hover,
        body button[type="submit"]:hover,
        body button:hover,
        body .button:hover,
        body div.wpforms-container-full .wpforms-form input[type=submit]:hover,
        body div.wpforms-container-full .wpforms-form input[type=submit]:active,
        body div.wpforms-container-full .wpforms-form button[type=submit]:hover,
        body div.wpforms-container-full .wpforms-form button[type=submit]:active,
        body div.wpforms-container-full .wpforms-form .wpforms-page-button:hover,
        body div.wpforms-container-full .wpforms-form .wpforms-page-button:active {
            background-color: #1e1e1e
        }

        @media only screen and (min-width:960px) {
            body.page.content-both-sidebars .content-area {
                width: 50%
            }

            body.page.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
            body.page.content-both-sidebars.ssc-style .widget-area {
                left: -50%
            }
        }

        @media only screen and (min-width:960px) {
            body.page.content-both-sidebars .widget-area {
                width: 25%
            }

            body.page.content-both-sidebars.scs-style .content-area {
                left: 25%
            }

            body.page.content-both-sidebars.ssc-style .content-area {
                left: 50%
            }
        }

        @media only screen and (min-width:960px) {
            body.search-results.content-both-sidebars .content-area {
                width: 50%
            }

            body.search-results.content-both-sidebars.scs-style .widget-area.sidebar-secondary,
            body.search-results.content-both-sidebars.ssc-style .widget-area {
                left: -50%
            }
        }

        @media only screen and (min-width:960px) {
            body.search-results.content-both-sidebars .widget-area {
                width: 25%
            }

            body.search-results.content-both-sidebars.scs-style .content-area {
                left: 25%
            }

            body.search-results.content-both-sidebars.ssc-style .content-area {
                left: 50%
            }
        }

        /* Top Bar CSS */
        #top-bar {
            padding: 5px 0 5px 0
        }

        #top-bar-content a,
        #top-bar-social-alt a {
            color: #929292
        }

        #top-bar-content a:hover,
        #top-bar-social-alt a:hover {
            color: #4796ff
        }

        #top-bar-social li a {
            font-size: 15px
        }

        #top-bar-social li a {
            padding: 0 10px 0 10px
        }

        /* Header CSS */
        #site-logo #site-logo-inner,
        .oceanwp-social-menu .social-menu-inner,
        #site-header.full_screen-header .menu-bar-inner,
        .after-header-content .after-header-content-inner {
            height: 70px
        }

        #site-navigation-wrap .dropdown-menu>li>a,
        .oceanwp-mobile-menu-icon a,
        .mobile-menu-close,
        .after-header-content-inner>a {
            line-height: 70px
        }

        #site-header-inner {
            padding: 0 40px 0 40px
        }

        @media (max-width:768px) {
            #site-header-inner {
                padding: 0 5px 0 5px
            }
        }

        @media (max-width:480px) {
            #site-header-inner {
                padding: 0 3px 0 12px
            }
        }

        #site-header.has-header-media .overlay-header-media {
            background-color: rgba(0, 0, 0, 0.5)
        }

        #site-logo #site-logo-inner a img,
        #site-header.center-header #site-navigation-wrap .middle-site-logo a img {
            max-width: 110px
        }

        #site-logo.has-responsive-logo .responsive-logo-link img {
            max-height: 40px
        }

        /* Sidebar CSS */
        .widget-area {
            padding: 0 10px 0 10px !important
        }

        .widget-area .sidebar-box,
        .separate-layout .sidebar-box {
            margin-bottom: 10px
        }

        .widget-title {
            margin-bottom: 15px
        }

        /* Footer Bottom CSS */
        #footer-bottom {
            padding: 16px 0 10px 0
        }

        #footer-bottom {
            background-color: #ffffff
        }

        #footer-bottom a,
        #footer-bottom #footer-bottom-menu a {
            color: #333333
        }

        /* Typography CSS */
        body {
            font-family: Verdana, Geneva, sans-serif;
            font-weight: 400;
            font-size: 17px;
            color: #0a0a0a;
            line-height: 2.2
        }

        @media (max-width:768px) {
            body {
                font-size: 15px;
                line-height: 2
            }
        }

        @media (max-width:480px) {
            body {
                font-size: 15px;
                line-height: 1.8;
                letter-spacing: .3px
            }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .theme-heading,
        .widget-title,
        .oceanwp-widget-recent-posts-title,
        .comment-reply-title,
        .entry-title,
        .sidebar-box .widget-title {
            font-family: Verdana, Geneva, sans-serif;
            line-height: 1.2
        }

        h1 {
            font-weight: 100;
            font-size: 28px;
            color: #515151;
            line-height: 1
        }

        @media (max-width:768px) {
            h1 {
                line-height: 1;
                letter-spacing: .2px
            }
        }

        @media (max-width:480px) {
            h1 {
                line-height: 1;
                letter-spacing: .7px
            }
        }

        h2 {
            font-weight: 600;
            font-size: 25px;
            line-height: 1.6;
            letter-spacing: .5px
        }

        h3 {
            font-weight: 500;
            font-size: 21px
        }

        #site-navigation-wrap .dropdown-menu>li>a,
        #site-header.full_screen-header .fs-dropdown-menu>li>a,
        #site-header.top-header #site-navigation-wrap .dropdown-menu>li>a,
        #site-header.center-header #site-navigation-wrap .dropdown-menu>li>a,
        #site-header.medium-header #site-navigation-wrap .dropdown-menu>li>a,
        .oceanwp-mobile-menu-icon a {
            font-family: Verdana, Geneva, sans-serif;
            font-size: 15px;
            letter-spacing: 1.2px
        }

        .sidr-class-dropdown-menu li a,
        a.sidr-class-toggle-sidr-close,
        #mobile-dropdown ul li a,
        body #mobile-fullscreen ul li a {
            font-weight: 400;
            text-transform: capitalize
        }

        @media (max-width:480px) {

            .sidr-class-dropdown-menu li a,
            a.sidr-class-toggle-sidr-close,
            #mobile-dropdown ul li a,
            body #mobile-fullscreen ul li a {
                font-size: 12px;
                line-height: 1.3
            }
        }

        .page-header .page-header-title,
        .page-header.background-image-page-header .page-header-title {
            line-height: 1
        }

        .page-header .page-subheading {
            line-height: 1.9
        }

        .blog-entry.post .blog-entry-header .entry-title a {
            line-height: 1.3
        }

        .single-post .entry-title {
            font-family: Verdana, Geneva, sans-serif;
            font-weight: 600;
            font-style: normal;
            font-size: 28px;
            color: #000000;
            line-height: 1.6;
            letter-spacing: .3px
        }

        @media (max-width:768px) {
            .single-post .entry-title {
                font-size: 22px;
                line-height: 1.2
            }
        }

        @media (max-width:480px) {
            .single-post .entry-title {
                font-size: 20px;
                line-height: 1.2
            }
        }

        .sidebar-box .widget-title {
            font-family: Verdana, Geneva, sans-serif
        }

        @media (max-width:768px) {
            .sidebar-box .widget-title {
                line-height: 1
            }
        }

        .sidebar-box,
        .footer-box {
            font-family: Verdana, Geneva, sans-serif;
            line-height: 2
        }
    </style>
    <script ez-screx="true">
        /*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
        (function (w) {
            "use strict";
            if (!w.loadCSS) {
                w.loadCSS = function () {}
            }
            var rp = loadCSS.relpreload = {};
            rp.support = (function () {
                var ret;
                try {
                    ret = w.document.createElement("link").relList.supports("preload")
                } catch (e) {
                    ret = !1
                }
                return function () {
                    return ret
                }
            })();
            rp.bindMediaToggle = function (link) {
                var finalMedia = link.media || "all";

                function enableStylesheet() {
                    link.media = finalMedia
                }
                if (link.addEventListener) {
                    link.addEventListener("load", enableStylesheet)
                } else if (link.attachEvent) {
                    link.attachEvent("onload", enableStylesheet)
                }
                setTimeout(function () {
                    link.rel = "stylesheet";
                    link.media = "only x"
                });
                setTimeout(enableStylesheet, 3000)
            };
            rp.poly = function () {
                if (rp.support()) {
                    return
                }
                var links = w.document.getElementsByTagName("link");
                for (var i = 0; i < links.length; i++) {
                    var link = links[i];
                    if (link.rel === "preload" && link.getAttribute("as") === "style" && !link.getAttribute(
                            "data-loadcss")) {
                        link.setAttribute("data-loadcss", !0);
                        rp.bindMediaToggle(link)
                    }
                }
            };
            if (!rp.support()) {
                rp.poly();
                var run = w.setInterval(rp.poly, 500);
                if (w.addEventListener) {
                    w.addEventListener("load", function () {
                        rp.poly();
                        w.clearInterval(run)
                    })
                } else if (w.attachEvent) {
                    w.attachEvent("onload", function () {
                        rp.poly();
                        w.clearInterval(run)
                    })
                }
            }
            if (typeof exports !== "undefined") {
                exports.loadCSS = loadCSS
            } else {
                w.loadCSS = loadCSS
            }
        }(typeof global !== "undefined" ? global : this))
    </script>
    <style>
        .ezoic-ad.box-2151 {
            display: block !important;
            float: none !important;
            line-height: 0px;
            margin-bottom: 15px !important;
            margin-left: 0px !important;
            margin-right: 0px !important;
            margin-top: 15px !important;
            min-height: 90px;
            min-width: 728px;
            padding: 0;
            text-align: center !important;
        }

        .ezoic-ad.box-3148 {
            display: block !important;
            float: none !important;
            line-height: 0px;
            margin-bottom: 15px !important;
            margin-left: 0px !important;
            margin-right: 0px !important;
            margin-top: 15px !important;
            min-height: 90px;
            min-width: 728px;
            padding: 0;
            text-align: center !important;
        }

        .ezoic-ad.medrectangle-3132 {
            display: block !important;
            float: none !important;
            line-height: 0px;
            margin-bottom: 2px !important;
            margin-left: 0px !important;
            margin-right: 0px !important;
            margin-top: 2px !important;
            min-height: 90px;
            min-width: 728px;
            padding: 0;
            text-align: center !important;
        }

        .ezoic-ad.medrectangle-4133 {
            display: block !important;
            float: none !important;
            line-height: 0px;
            margin-bottom: 2px !important;
            margin-left: 0px !important;
            margin-right: 0px !important;
            margin-top: 2px !important;
            min-height: 280px;
            min-width: 336px;
            padding: 0;
            text-align: center !important;
        }

        .ezoic-ad.box-4134 {
            display: block !important;
            float: none !important;
            line-height: 0px;
            margin-bottom: 15px !important;
            margin-left: 0px !important;
            margin-right: 0px !important;
            margin-top: 15px !important;
            min-height: 250px;
            min-width: 300px;
            padding: 0;
            text-align: center !important;
        }

        .ezoic-ad.banner-1136 {
            display: block !important;
            float: none !important;
            line-height: 0px;
            margin-bottom: 2px !important;
            margin-left: 0px !important;
            margin-right: 0px !important;
            margin-top: 2px !important;
            min-height: 250px;
            min-width: 300px;
            padding: 0;
            text-align: center !important;
        }

        .ezoic-ad.leader-1140 {
            display: block !important;
            float: none !important;
            line-height: 0px;
            margin-bottom: 2px !important;
            margin-left: 0px !important;
            margin-right: 0px !important;
            margin-top: 2px !important;
            min-height: 280px;
            min-width: 336px;
            padding: 0;
            text-align: center !important;
        }

        .ezoic-ad.box-1150 {
            display: block !important;
            float: none;
            line-height: 0px;
            margin-bottom: 15px !important;
            margin-left: 0px !important;
            margin-right: 0px !important;
            margin-top: 15px !important;
            min-height: 250px;
            min-width: 300px;
            padding: 0;
            text-align: center !important;
        }

        .ezoic-ad.banner-2152 {
            display: block !important;
            float: none !important;
            line-height: 0px;
            margin-bottom: 15px !important;
            margin-left: 0px !important;
            margin-right: 0px !important;
            margin-top: 15px !important;
            min-height: 250px;
            min-width: 300px;
            padding: 0;
            text-align:  !important;
        }

        .ezoic-ad.medrectangle-2100 {
            display: inline-block;
            float: none;
            line-height: 0px;
            min-height: 90px;
            min-width: 728px;
            padding: 0;
        }

        .ezoic-ad {
            display: inline-block;
            border: 0px;
        }

        .ezoic-ad>div>iframe {
            margin: 0px !important;
            padding: 0px !important;
        }

        .adtester-container-142,
        .adtester-container-139,
        .adtester-container-144,
        .adtester-container-146,
        .adtester-container-145,
        .adtester-container-156,
        .adtester-container-155,
        .adtester-container-138,
        .adtester-container-149,
        .adtester-container-135,
        .adtester-container-157,
        .adtester-container-137,
        .adtester-container-147,
        .adtester-container-154,
        .adtester-container-141,
        .adtester-container-143 {
            display: none !important
        }

        .ezmob-footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background: #fff;
            z-index: 100000;
            line-height: 0
        }

        .ezmob-footer-desktop {
            background-color: rgba(255, 255, 255, .8);
            border-top: 1px solid #d3d3d3;
            padding-top: 5px
        }

        .ezmob-footer-close {
            cursor: pointer;
            color: #b2b2b2;
            border: 1px solid #b2b2b2;
            border-radius: 20px;
            background: #fff;
            line-height: 20px;
            display: inline-block;
            font-size: 20px;
            font-family: arial, sans-serif;
            padding: 0 5px;
            position: absolute;
            top: 5px;
            right: 5px;
            height: 24px;
            width: 21px;
            text-align: center
        }

        .ezmob-footer-close-mobile {
            display: none;
        }
    </style>
    <script>
        var ezouid = "1";
    </script>
    <base href="https://etcgamer.com/pubg-name-generator-ideas-stylish-symbols">
    <script>
        var ezoTemplate = 'pub_site';
        if (typeof ezouid == 'undefined') {
            var ezouid = 'none';
        }
        var ezoFormfactor = '1';
        var ezo_elements_to_check = Array();
    </script>
    <script data-ezscrex="false">
        var soc_app_id = '0';
        var did = 186470;
        var ezdomain = 'etcgamer.com';
        var ezoicSearchable = 1;
    </script>
    <script data-ezscrex="false" data-cfasync="false" style="display:none" defer="">
        __ez.queue.addFile('__ezf_ezosuigeneris', '//g.ezoic.net/ezosuigeneris.js', true, [], true, false, false,
        false);
        var __ez_ezosuigenerisEvt = function () {
            if (typeof (ezosuigeneris) != 'undefined') {
                __ez.bit.AddAndFire(_ezaq['page_view_id'], [(new __ezDotData('universal_user_id', ezosuigeneris))]);
            }
        };
        __ez.queue.addFunc('__ez_ezosuigenerisEvt', '__ez_ezosuigenerisEvt', null, false, ['__ezf_ezosuigeneris',
            '/detroitchicago/minneapolis.js', '/detroitchicago/memphis.js'
        ], false, false, false, false);
    </script>
    <script src="//g.ezoic.net/ezosuigeneris.js" async=""></script>
    <script data-ezscrex="false" data-cfasync="false" style="display:none" defer="">
        __ez.queue.addFile('__ezf_ezosuigenerisc', '//g.ezoic.net/ezosuigenerisc.js?nogen=1', true, [
            "/detroitchicago/boise.js"
        ], true, false, false, false);
    </script>
    <script data-ezscrex="false" data-pagespeed-no-defer="" data-cfasync="false">
        function create_ezolpl(pvID, rv) {
            var d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            __ez.ck.setByCat("ezux_lpl_186470=" + new Date().getTime() + "|" + pvID + "|" + rv + "; " + expires, 3);
        }

        function attach_ezolpl(pvID, rv) {
            if (document.readyState === "complete") {
                create_ezolpl(pvID, rv);
            }
            if (window.attachEvent) {
                window.attachEvent("onload", create_ezolpl, pvID, rv);
            } else {
                if (window.onload) {
                    var curronload = window.onload;
                    var newonload = function (evt) {
                        curronload(evt);
                        create_ezolpl(pvID, rv);
                    };
                    window.onload = newonload;
                } else {
                    window.onload = create_ezolpl.bind(null, pvID, rv);
                }
            }
        }

        __ez.queue.addFunc("attach_ezolpl", "attach_ezolpl", ["c33cef49-3d7e-41e7-6b0f-644572ada81f", "false"], false, [
            '/detroitchicago/boise.js'
        ], true, false, false, false);
    </script>
    <script>
        var _audins_dom = "etcgamer_com",
            _audins_did = 186470;
        __ez.queue.addFile('/detroitchicago/cmbv2.js',
            '/detroitchicago/cmbv2.js?gcb=195-0&cb=04-1y02-4y06-12y07-1y19-5y0b-5y0d-10y13-3y17-3y1a-2y1f-2y1e-4y20-3y33-14y52-1y56-21&cmbcb=20&sj=x04x02x06x07x19x0bx0dx13x17x1ax1fx1ex20x33x52x56&abt=PositionCalculator',
            true, [], true, false, true, false);
    </script>
    <script
        src="/detroitchicago/cmbv2.js?gcb=195-0&amp;cb=04-1y02-4y06-12y07-1y19-5y0b-5y0d-10y13-3y17-3y1a-2y1f-2y1e-4y20-3y33-14y52-1y56-21&amp;cmbcb=20&amp;sj=x04x02x06x07x19x0bx0dx13x17x1ax1fx1ex20x33x52x56&amp;abt=PositionCalculator"
        async=""></script>
    <script defer="">
        __ez.queue.addFile('/detroitchicago/cmbdv2.js',
            '/detroitchicago/cmbdv2.js?gcb=195-0&cb=03-4y0c-5y18-3y34-14y57-21&cmbcb=20&sj=x03x0cx18x34x57&abt=PositionCalculator',
            true, ['/detroitchicago/cmbv2.js'], true, false, true, false);
    </script>
    <script src="//g.ezoic.net/ezosuigenerisc.js?nogen=1" async=""></script>
    <script
        src="/detroitchicago/cmbdv2.js?gcb=195-0&amp;cb=03-4y0c-5y18-3y34-14y57-21&amp;cmbcb=20&amp;sj=x03x0cx18x34x57&amp;abt=PositionCalculator"
        async=""></script>
    <script src="/detroitchicago/denver.js?gcb=0&amp;cb=9" async=""></script>
    <link href="https://etcgamer.com/wp-content/cache/min/1/d3478d93bdede75d48bd13007256d430.js?screx=1&amp;sxcb=62a"
        as="script" rel="preload">
</head>

<body
    class="post-template-default single single-post postid-1455 single-format-standard wp-custom-logo wp-embed-responsive no-isotope no-lightbox no-fitvids no-scroll-top no-carousel oceanwp-theme sidebar-mobile separate-layout default-breakpoint has-sidebar content-right-sidebar post-in-category-name-generators post-in-category-tools page-header-disabled has-breadcrumbs has-blog-grid has-fixed-footer wpdiscuz_20.7.2.2">
    <noscript data-pagespeed-no-defer=""><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJKK2DW" height=0
            width=0 style=display:none;visibility:hidden></iframe></noscript>
    <div id="outer-wrap" class="site clr"><a class="skip-link screen-reader-text" href="#main">Skip to content</a>
        <div id="wrap" class="clr">
            <header id="site-header" class="minimal-header center-logo clr" data-height="70" role="banner">
                <div id="site-header-inner" class="clr container">
                    <div class="oceanwp-mobile-menu-icon clr mobile-left"><a href="javascript:void(0)"
                            class="mobile-menu" aria-label="Mobile Menu"><i class="fa fa-bars"
                                aria-hidden="true"></i></a></div>
                    <div id="site-logo" class="clr">
                        <div id="site-logo-inner" class="clr"><a href="https://etcgamer.com/" class="custom-logo-link"
                                rel="home"><img width="107" height="40"
                                    src="https://etcgamer.com/wp-content/uploads/2019/07/etcgamer-logo.png"
                                    class="custom-logo ezlazyloaded" alt="etcgamer logo"
                                    data-ezsrcset="https://etcgamer.com/wp-content/uploads/2019/07/etcgamer-logo.png 1x, https://etcgamer.com/wp-content/uploads/2019/07/etcgamer-logo-retina.png 2x"
                                    data-ezsrc="https://etcgamer.com/wp-content/uploads/2019/07/etcgamer-logo.png"
                                    ezoid="0.6660546012402566"
                                    srcset="https://etcgamer.com/wp-content/uploads/2019/07/etcgamer-logo.png 1x, https://etcgamer.com/wp-content/uploads/2019/07/etcgamer-logo-retina.png 2x"></a>
                        </div>
                    </div>
                    <div id="site-navigation-wrap" class="clr">
                        <nav id="site-navigation" class="navigation main-navigation clr" role="navigation">
                            <ul id="menu-main" class="main-menu dropdown-menu sf-menu">
                                <li id="menu-item-1555"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1555">
                                    <a href="https://etcgamer.com/category/game-guides/" class="menu-link"><span
                                            class="text-wrap">Game Guides</span></a></li>
                                <li id="menu-item-1556"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1556">
                                    <a href="https://etcgamer.com/category/buying-guides/" class="menu-link"><span
                                            class="text-wrap">Buying Guides</span></a></li>
                                <li id="menu-item-1953"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1953">
                                    <a href="https://etcgamer.com/category/how-to/" class="menu-link"><span
                                            class="text-wrap">How to</span></a></li>
                                <li id="menu-item-1557"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-1557">
                                    <a href="https://etcgamer.com/category/tools/" class="menu-link"><span
                                            class="text-wrap">Tools</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div id="sidr" class="sidr left" style="transition: left 0.3s ease 0s;">
                <div class="sidr-inner"><a href="javascript:void(0)" class="sidr-class-toggle-sidr-close"
                        aria-label="Close mobile menu"><i class="sidr-class-icon fa fa-times"
                            aria-hidden="true"></i><span class="sidr-class-close-text">Close</span></a></div>
                <div class="sidr-inner">
                    <ul id="sidr-id-menu-main-1" class="sidr-class-mobile-menu sidr-class-dropdown-menu">
                        <li
                            class="sidr-class-menu-item sidr-class-menu-item-type-taxonomy sidr-class-menu-item-object-category sidr-class-menu-item-1555">
                            <a href="https://etcgamer.com/category/game-guides/">Game Guides</a></li>
                        <li
                            class="sidr-class-menu-item sidr-class-menu-item-type-taxonomy sidr-class-menu-item-object-category sidr-class-menu-item-1556">
                            <a href="https://etcgamer.com/category/buying-guides/">Buying Guides</a></li>
                        <li
                            class="sidr-class-menu-item sidr-class-menu-item-type-taxonomy sidr-class-menu-item-object-category sidr-class-menu-item-1953">
                            <a href="https://etcgamer.com/category/how-to/">How to</a></li>
                        <li
                            class="sidr-class-menu-item sidr-class-menu-item-type-taxonomy sidr-class-menu-item-object-category sidr-class-current-post-ancestor sidr-class-current-menu-parent sidr-class-current-post-parent sidr-class-menu-item-1557">
                            <a href="https://etcgamer.com/category/tools/">Tools</a></li>
                    </ul>
                </div>
            </div>
            <main id="main" class="site-main clr" role="main" style="min-height: 884px;">
                <div id="content-wrap" class="container clr"><span id="ezoic-pub-ad-placeholder-151"
                        class="ezoic-adpicker-ad"></span><span
                        class="ezoic-ad box-2 box-2151 adtester-container adtester-container-151"
                        data-ez-name="etcgamer_com-box-2"><span id="div-gpt-ad-etcgamer_com-box-2-0" ezaw="728"
                            ezah="90"
                            style="position:relative;z-index:0;display:inline-block;padding:0;min-height:90px;min-width:728px;"
                            class="ezoic-ad">
                            <script data-ezscrex="false" data-cfasync="false" style="display:none;">
                                if (typeof __ez_fad_position != 'undefined') {
                                    __ez_fad_position('div-gpt-ad-etcgamer_com-box-2-0')
                                };
                            </script>
                        </span></span>
                    <div id="primary" class="content-area clr">
                        <div id="content" class="site-content clr">
                            <article id="post-1455">
                                <div class="thumbnail"><img width="640" height="345"
                                        src="https://etcgamer.com/wp-content/uploads/2020/08/pubg-name-generator-stylish-symbols-1.png"
                                        class="attachment-full size-full wp-post-image"
                                        alt="PUBG Name Generator with Stylish Symbols 😎🔥 (Copy/Paste)" loading="eager"
                                        srcset="" sizes=""></div>
                                <div class="adsense adsense-17" style="margin: 8px 0; clear: both;"><span
                                        id="ezoic-pub-ad-placeholder-148"></span><span
                                        class="ezoic-ad box-3 box-3148 adtester-container adtester-container-148"
                                        data-ez-name="etcgamer_com-box-3"><span id="div-gpt-ad-etcgamer_com-box-3-0"
                                            ezaw="728" ezah="90"
                                            style="position:relative;z-index:0;display:inline-block;padding:0;min-height:90px;min-width:728px;"
                                            class="ezoic-ad">
                                            <script data-ezscrex="false" data-cfasync="false" style="display:none;">
                                                if (typeof __ez_fad_position != 'undefined') {
                                                    __ez_fad_position('div-gpt-ad-etcgamer_com-box-3-0')
                                                };
                                            </script>
                                        </span></span></div>
                                <header class="entry-header clr">
                                    <h1 class="single-post-title entry-title">PUBG Name Generator with Stylish Symbols
                                        😎🔥 (Copy/Paste)<span id="ezoic-pub-ad-placeholder-149"
                                            class="ezoic-adpicker-ad"></span></h1>
                                </header>
                                <div class="entry-content clr">
                                    <div class="etc-content-segment zero-top-border">
                                        <p>PUBG Name Generator is quite popular and many of the ‘pro’ pubg players
                                            prefer to have unique, stylish &amp; creative names/nicknames mostly by
                                            using different cool looking symbols.</p>
                                        <p>We created this tool to help you guys with stylish pubg name generation
                                            process. ALL the names created with this tool are compatible with pubg.
                                            Please comment below, If some name doesn’t work.</p>
                                        <p></p>
                                    </div>
                                    <div class="etc-content-segment">
                                        <p></p>
                                        <h2>How to use PUBG NAME GENERATOR V1?</h2>
                                        <div>
                                            <div class="adsense adsense-1" style="margin: 8px 0; clear: both;"><span
                                                    id="ezoic-pub-ad-placeholder-132"></span><span
                                                    class="ezoic-ad medrectangle-3 medrectangle-3132 adtester-container adtester-container-132"
                                                    data-ez-name="etcgamer_com-medrectangle-3"><span
                                                        id="div-gpt-ad-etcgamer_com-medrectangle-3-0" ezaw="728"
                                                        ezah="90"
                                                        style="position:relative;z-index:0;display:inline-block;padding:0;min-height:90px;min-width:728px;"
                                                        class="ezoic-ad">
                                                        <script data-ezscrex="false" data-cfasync="false"
                                                            style="display:none;">
                                                            if (typeof __ez_fad_position != 'undefined') {
                                                                __ez_fad_position(
                                                                    'div-gpt-ad-etcgamer_com-medrectangle-3-0')
                                                            };
                                                        </script>
                                                    </span></span></div>
                                        </div>
                                        <p>Using <strong>Pubg Name Generator V1</strong> is quite straight-forward,
                                            Simply:</p>
                                        <ol>
                                            <li><strong>Enter your name</strong> in the box that says “Enter your name
                                                here”.</li>
                                            <li>Click on <strong>Generate</strong> button</li>
                                            <li>Click <strong>Copy</strong> if you like the name, else click on
                                                <strong>Try Again</strong>.</li>
                                        </ol>
                                        <p></p>
                                    </div>
                                    <section id="namegenerator1" class="notranslate">
                                        <h3 style="color:#fff;margin:0;">PUBG NAME GENERATOR v1</h3>
                                        <h4 style="font-size: 12px;color: #fff;">Random</h4>
                                        <div class="link_ad banner_ad" style="margin:0">
                                            <div class="adsense adsense-2" style="margin: 8px 0; clear: both;"><span
                                                    id="ezoic-pub-ad-placeholder-133"></span><span
                                                    class="ezoic-ad medrectangle-4 medrectangle-4133 adtester-container adtester-container-133"
                                                    data-ez-name="etcgamer_com-medrectangle-4"><span
                                                        id="div-gpt-ad-etcgamer_com-medrectangle-4-0" ezaw="336"
                                                        ezah="280"
                                                        style="position:relative;z-index:0;display:inline-block;padding:0;width:100%;max-width:1200px;margin-left:auto !important;margin-right:auto !important;min-height:280px;min-width:336px;"
                                                        class="ezoic-ad">
                                                        <script data-ezscrex="false" data-cfasync="false"
                                                            style="display:none;">
                                                            if (typeof __ez_fad_position != 'undefined') {
                                                                __ez_fad_position(
                                                                    'div-gpt-ad-etcgamer_com-medrectangle-4-0')
                                                            };
                                                        </script>
                                                    </span></span></div>
                                        </div><br>
                                        <div id="namesection" style="display:block;"><span id="name_index">#19</span>
                                            <span id="name2"
                                                style="letter-spacing: 1px;font-size: 20px;line-height:2.2;color:#3f51b5;">๏̯͡๏웃$puṪA$</span>
                                            <div id="name_btn_section"><span id="previous" class="btnn"
                                                    onclick="name_gen_pre()" style="opacity: 1;"></span><span
                                                    title="Copy to clipboard" id="copybtn" onclick="copiedd()"
                                                    class="copybtn" data-clipboard-text="๏̯͡๏웃$puṪA$">Copied!</span>
                                                <span id="next" class="btnn" onclick="name_gen_next()"
                                                    style="opacity: 0.25;"></span></div>
                                        </div>
                                        <div id="entersection" class=""><input id="enter1"
                                                placeholder="Enter Your Name Here ..." maxlength="14">
                                            <span id="n_char_length1">6/14</span></div>
                                        <div class="btnsection"><button id="randomize1" onclick="stylize();"
                                                class="tryagain">Try Again</button></div><span id="namewarning"
                                            style="display: none;"><i class="fa fa-times"
                                                aria-hidden="true"></i><b>Error:</b> <span id="nameerror">Please Enter
                                                More Than 2 Characters!</span></span>
                                    </section>
                                    <div class="etc-content-segment zero-top-border">
                                        <p></p>
                                        <p style="text-align: center;"><span style="color: #3366ff;">Comment below
                                                <strong>if you need help</strong> or the tool doesn’t work 🙂</span></p>
                                        <p></p>
                                    </div>
                                    <div class="etc-content-segment">
                                        <p></p>
                                        <h2>How to use PUBG NAME GENERATOR v2?</h2>
                                        <div>
                                            <div class="adsense adsense-3" style="margin: 8px 0; clear: both;"><span
                                                    id="ezoic-pub-ad-placeholder-134"></span><span
                                                    class="ezoic-ad box-4 box-4134 adtester-container adtester-container-134"
                                                    data-ez-name="etcgamer_com-box-4"><span
                                                        id="div-gpt-ad-etcgamer_com-box-4-0" ezaw="300" ezah="250"
                                                        style="position:relative;z-index:0;display:inline-block;padding:0;min-height:250px;min-width:300px;"
                                                        class="ezoic-ad">
                                                        <script data-ezscrex="false" data-cfasync="false"
                                                            style="display:none;">
                                                            if (typeof __ez_fad_position != 'undefined') {
                                                                __ez_fad_position('div-gpt-ad-etcgamer_com-box-4-0')
                                                            };
                                                        </script>
                                                    </span></span></div>
                                        </div>
                                        <p><strong>Pubg Name Generator v2</strong> allows you to manually enter your
                                            favourite symbols in the name. You need to:</p>
                                        <ol>
                                            <li>Enter your name in the <strong>Name</strong> field.</li>
                                            <li>Click on any <strong>symbol</strong> to enter in the name field.</li>
                                            <li>Click on <strong>left</strong> and <strong>right</strong> drop-down to
                                                choose prefix or suffix symbol.</li>
                                            <li>Click on <strong>Generate</strong> button to See your name in different
                                                Styles 🙂</li>
                                        </ol>
                                        <p></p>
                                    </div>
                                    <section id="namegenerator" class="notranslate">
                                        <h3 style="color:#fff;margin:0;">PUBG NAME GENERATOR v2</h3>
                                        <h4 style="font-size: 12px;color: #fff;margin:0">with Symbol Keyboard</h4><br>
                                        <div id="generator_section">
                                            <div class="abovelabels"><span class="nleft">Left</span>
                                                <span class="ncenter">Name</span>
                                                <span class="nright">Right</span></div>
                                            <div id="entersection"><select id="prefix">
                                                    <option>none</option>
                                                    <option>乛</option>
                                                    <option>๛</option>
                                                    <option>؄</option>
                                                    <option>〆</option>
                                                    <option>×</option>
                                                    <option>き</option>
                                                    <option>》</option>
                                                    <option>ツ</option>
                                                    <option>ヅ</option>
                                                    <option>ʘ͜ʖʘ</option>
                                                    <option>๏̯͡๏</option>
                                                    <option>pг๏</option>
                                                    <option>乃丹刀</option>
                                                </select>
                                                <input id="enter" placeholder="Your Name ..." maxlength="14"
                                                    value="B乛LaC丨Legit">
                                                <select id="sufix">
                                                    <option>none</option>
                                                    <option>×</option>
                                                    <option>き</option>
                                                    <option>》</option>
                                                    <option>ツ</option>
                                                    <option>ヅ</option>
                                                    <option>ʘ͜ʖʘ</option>
                                                    <option>๏̯͡๏</option>
                                                </select></div><span id="n_char_length" class="red">20/14</span>
                                            <div class="symbolkbd" style="">
                                                <div>Click to enter symbols</div>
                                                <div class="symbls one1">
                                                    <span>『』</span><span>〘〙</span><span>【】</span><span>《》</span><span>「」</span><span>丨</span><span>シ</span><span>ツ</span><span>ヅ</span><span>々</span><span>〩</span><span>ズ</span><span>き</span><span>丶</span><span>×</span><span>メ</span><span>乄</span><span>ヤ</span><span>〆</span><span>・</span><span>٭</span><span>。</span><span>'</span><span>¹</span><span>٪</span><span>٠١٠</span><span>ノ</span><span>乀</span><span>乁</span><span>一</span><span>乛</span><span>๛</span><span>三</span><span>亗</span><span>卍</span><span>۝</span><span>¤</span><span>气</span><span>金</span><span>帝</span><span>彡</span><span>乡</span><span>梦</span><span>؄</span><span>숬</span><span>本</span><span>人</span><span>大</span><span>炎</span><span>父</span><span>艾</span><span>义</span><span>个</span><span>卄</span><span>웃</span><span>ʘ͜ʖʘ</span><span>๏̯͡๏</span>
                                                </div>
                                                <div class="head">Example:- M͜͡r๛INZY</div>
                                                <div class="symbls one1"><span>͜͡</span></div><span class="tooltip2"
                                                    style="display: none;">Scroll to see more symbols!</span>
                                            </div><button id="randomize">Generate</button>
                                        </div>
                                        <section id="generated_names">
                                            <div id="name_style_simple"><span
                                                    class="name_text">【】B乛La【】C《》々丨Legit</span>
                                                <span class="space101"></span><span class="name_copy_btn"
                                                    data-clipboard-text="【】B乛La【】C《》々丨Legit"><i
                                                        class="fa fa-copy"></i></span></div>
                                            <div id="name_style1"><span class="name_text">【】Ｂ乛Ｌａ【】Ｃ《》々丨Ｌｅｇｉｔ</span>
                                                <span class="space101"></span><span class="name_copy_btn"
                                                    data-clipboard-text="【】Ｂ乛Ｌａ【】Ｃ《》々丨Ｌｅｇｉｔ"><i
                                                        class="fa fa-copy"></i></span></div>
                                            <div id="name_style2"><span class="name_text">【】乃乛ﾚ卂【】匚《》々丨ﾚ乇ム丨ｲ</span>
                                                <span class="space101"></span><span class="name_copy_btn"
                                                    data-clipboard-text="【】乃乛ﾚ卂【】匚《》々丨ﾚ乇ム丨ｲ"><i
                                                        class="fa fa-copy"></i></span></div>
                                            <div id="name_style3"><span class="name_text">【】ɮ乛ʟﾑ【】८《》々丨ʟɛɢɨt</span>
                                                <span class="space101"></span><span class="name_copy_btn"
                                                    data-clipboard-text="【】ɮ乛ʟﾑ【】८《》々丨ʟɛɢɨt"><i
                                                        class="fa fa-copy"></i></span></div>
                                            <div id="name_style4"><span class="name_text">【】Ḅ乛Ḷä【】Ċ《》々丨Ḷëgïẗ</span>
                                                <span class="space101"></span><span class="name_copy_btn"
                                                    data-clipboard-text="【】Ḅ乛Ḷä【】Ċ《》々丨Ḷëgïẗ"><i
                                                        class="fa fa-copy"></i></span></div>
                                            <div id="name_style5"><span class="name_text">【】q乛lɐ【】ɔ《》々丨lɛɢɨʇ</span>
                                                <span class="space101"></span><span class="name_copy_btn"
                                                    data-clipboard-text="【】q乛lɐ【】ɔ《》々丨lɛɢɨʇ"><i
                                                        class="fa fa-copy"></i></span></div>
                                        </section><span class="tooltip1">Copied!</span><br>
                                        <div class="link_ad banner_ad" style="margin:0">
                                            <div class="adsense adsense-5" style="margin: 8px 0; clear: both;"><span
                                                    id="ezoic-pub-ad-placeholder-136"></span><span
                                                    class="ezoic-ad banner-1 banner-1136 adtester-container adtester-container-136"
                                                    data-ez-name="etcgamer_com-banner-1"><span
                                                        id="div-gpt-ad-etcgamer_com-banner-1-0" ezaw="300" ezah="250"
                                                        style="position:relative;z-index:0;display:inline-block;padding:0;min-height:250px;min-width:300px;"
                                                        class="ezoic-ad">
                                                        <script data-ezscrex="false" data-cfasync="false"
                                                            style="display:none;">
                                                            if (typeof __ez_fad_position != 'undefined') {
                                                                __ez_fad_position('div-gpt-ad-etcgamer_com-banner-1-0')
                                                            };
                                                        </script>
                                                    </span></span></div>
                                        </div><br>
                                    </section>
                                    <div class="etc-content-segment zero-top-border">
                                        <p></p>
                                        <p style="text-align: center;"><span style="color: #3366ff;">Comment below
                                                <strong>if you need help</strong> or the tool doesn’t work 🙂</span></p>
                                        <p></p>
                                    </div>
                                    <div class="etc-content-segment">
                                        <p></p>
                                        <p><strong>Similar Tools:</strong></p>
                                        <p><a href="https://etcgamer.com/cod-name-generator-best-cool-funny-cod-names/">COD
                                                Name Generator Online + Funny COD Names 😍🔥</a></p>
                                        <p><a href="https://etcgamer.com/free-fire-name-generator-ff-nickname/">Free
                                                Fire Name Generator with Stylish Symbols 😎🔥 (Copy/Paste)</a></p>
                                        <p><a href="https://etcgamer.com/best-nicknames-for-pubg/">500+ Best Nicknames
                                                for PUBG Mobile in 2021</a></p>
                                        <p></p>
                                    </div>
                                    <div class="etc-content-segment">
                                        <p></p>
                                        <h2 style="text-align: center;">Stylish PUBG NAME IDEAS</h2>
                                        <table class="table1" style="font-size: 10px;">
                                            <tbody>
                                                <tr>
                                                    <th colspan="3">Cool PUBG Name Ideas</th>
                                                </tr>
                                                <tr>
                                                    <td>ʚANGEL๛</td>
                                                    <td>Kajla多Gaming</td>
                                                    <td>DOŁMIC々ErroR</td>
                                                </tr>
                                                <tr>
                                                    <td>卍BØØŠ卍</td>
                                                    <td>『乂』ＶＡＮＨ</td>
                                                    <td>TįÎįGįEįR</td>
                                                </tr>
                                                <tr>
                                                    <td>〆ScuLｻunTeR</td>
                                                    <td>ＳＡＮＡ　小さ</td>
                                                    <td>【Ｌａｉｔｈ</td>
                                                </tr>
                                                <tr>
                                                    <td>؄Strawberry؂</td>
                                                    <td>「SタタD」</td>
                                                    <td>SＡMＵＲAＩ</td>
                                                </tr>
                                                <tr>
                                                    <td>KoD〆Harsh</td>
                                                    <td>〘EEMĒTEE〙</td>
                                                    <td>《amirlord》</td>
                                                </tr>
                                                <tr>
                                                    <td>M尺ツ尺ude</td>
                                                    <td>・ＨＵＳＡＩＮ</td>
                                                    <td>V3NOM父KS</td>
                                                </tr>
                                                <tr>
                                                    <td>ＩＭ。ＣＲＹ</td>
                                                    <td>ツHąɱʑąツ</td>
                                                    <td>『BEN』COFFİN</td>
                                                </tr>
                                                <tr>
                                                    <td>IÁM¤PhEbInOP</td>
                                                    <td>M么HI〆B么LOCH</td>
                                                    <td>Zeko《M24》</td>
                                                </tr>
                                                <tr>
                                                    <td>『XP』๛R〇Jヅ</td>
                                                    <td>ĦĦＬｕｃａｓ</td>
                                                    <td>TUNA”D’MANA’</td>
                                                </tr>
                                                <tr>
                                                    <td>《ايــو</td>
                                                    <td>Jツker亗Rohit</td>
                                                    <td>ツNàiʂhiya</td>
                                                </tr>
                                                <tr>
                                                    <td>GG・Tenshiɞ</td>
                                                    <td>FNC×ScOUtOP</td>
                                                    <td>btAR͜͡NY</td>
                                                </tr>
                                                <tr>
                                                    <td>ĐØnT۝MØVE</td>
                                                    <td>COVID’19米</td>
                                                    <td>Kassar《AMKi》</td>
                                                </tr>
                                                <tr>
                                                    <td>亗AūIīEūX亗</td>
                                                    <td>【Ｗｉｌｄ】</td>
                                                    <td>Tｅｄｄｙ٭</td>
                                                </tr>
                                                <tr>
                                                    <td>TMš٭Monarch</td>
                                                    <td>下尺口乙モれ07</td>
                                                    <td>OP彡ShiVaM</td>
                                                </tr>
                                                <tr>
                                                    <td>SฬAT彡HArLeY</td>
                                                    <td>Gấu؄Mèo</td>
                                                    <td>PERO『GOLDY』</td>
                                                </tr>
                                                <tr>
                                                    <td>乙Ｔ丨AZRAİL</td>
                                                    <td>ＲＩＣＥ¤</td>
                                                    <td>『ÑÕBÏTÂ』</td>
                                                </tr>
                                                <tr>
                                                    <td>BLR・Y3AS1N</td>
                                                    <td>rajシmagiciaan</td>
                                                    <td>WOLF只QUEEN</td>
                                                </tr>
                                                <tr>
                                                    <td>Babyノ猪猪ɞ</td>
                                                    <td>彡£FSAN£</td>
                                                    <td>AŁpha๛KeĐaR</td>
                                                </tr>
                                                <tr>
                                                    <td>EVIL丶Viper</td>
                                                    <td>DeVi£乄PRABH</td>
                                                    <td>D乛EaD丨HITMAN</td>
                                                </tr>
                                                <tr>
                                                    <td>ＣｉｅɤＣｉｅ</td>
                                                    <td>동EnVy유FM</td>
                                                    <td>【BP】JOKER</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p></p>
                                    </div>
                                    <div>
                                        <div class="adsense adsense-7" style="margin: 8px 0; clear: both;"><span
                                                id="ezoic-pub-ad-placeholder-138"></span></div>
                                    </div>
                                    <div class="etc-content-segment">
                                        <p></p>
                                        <p>Related:&nbsp;<a title="Free Fire Name Generator"
                                                href="https://etcgamer.com/free-fire-name-generator-ff-nickname/">Free
                                                Fire Name Generator V3 🔥 (𝕮𝖔𝖕𝖞 → 𝕻𝖆𝖘𝖙𝖊)</a></p>
                                        <p></p>
                                    </div>
                                    <div class="etc-content-segment">
                                        <p></p>
                                        <h2>How to Change name in PUBG Mobile?</h2>
                                        <figure id="attachment_1460" aria-describedby="caption-attachment-1460"
                                            style="width: 416px" class="wp-caption aligncenter"><img loading="lazy"
                                                class="wp-image-1460 size-full ezlazyloaded"
                                                src="https://etcgamer.com/wp-content/uploads/2020/08/how-to-change-pubg-name.jpg"
                                                alt="how to change pubg name" width="416" height="340"
                                                data-ezsrcset="https://etcgamer.com/wp-content/uploads/2020/08/how-to-change-pubg-name.jpg 416w, https://etcgamer.com/wp-content/uploads/2020/08/how-to-change-pubg-name-300x245.jpg 300w"
                                                sizes="(max-width: 416px) 100vw, 416px"
                                                data-ezsrc="https://etcgamer.com/wp-content/uploads/2020/08/how-to-change-pubg-name.jpg"
                                                ezoid="0.9465919023816793"
                                                srcset="https://etcgamer.com/wp-content/uploads/2020/08/how-to-change-pubg-name.jpg 416w, https://etcgamer.com/wp-content/uploads/2020/08/how-to-change-pubg-name-300x245.jpg 300w">
                                            <figcaption id="caption-attachment-1460" class="wp-caption-text">how to
                                                change pubg name</figcaption>
                                        </figure>
                                        <ol>
                                            <li>Open PUBG Mobile</li>
                                            <li>Tap on “<strong>Inventory</strong>” in the bottom menu.</li>
                                            <li>In the right side menu, tap on the “<strong>crate</strong>” icon at the
                                                bottom.</li>
                                            <li>You should see a rename card in the crate. Tap the <strong>Rename
                                                    Card</strong> &amp; Tap <strong>USE</strong>.</li>
                                            <li><strong>Enter or Paste</strong> your new name and <strong>Tap
                                                    OK</strong>.</li>
                                        </ol>
                                        <p></p>
                                    </div>
                                    <div>
                                        <div class="adsense adsense-9" style="margin: 8px 0; clear: both;"><span
                                                id="ezoic-pub-ad-placeholder-140"></span><span
                                                class="ezoic-ad leader-1 leader-1140 adtester-container adtester-container-140"
                                                data-ez-name="etcgamer_com-leader-1"><span
                                                    id="div-gpt-ad-etcgamer_com-leader-1-0" ezaw="336" ezah="280"
                                                    style="position:relative;z-index:0;display:inline-block;padding:0;width:100%;max-width:1200px;margin-left:auto !important;margin-right:auto !important;min-height:280px;min-width:336px;"
                                                    class="ezoic-ad">
                                                    <script data-ezscrex="false" data-cfasync="false"
                                                        style="display:none;">
                                                        if (typeof __ez_fad_position != 'undefined') {
                                                            __ez_fad_position('div-gpt-ad-etcgamer_com-leader-1-0')
                                                        };
                                                    </script>
                                                </span></span></div>
                                    </div>
                                    <div class="etc-content-segment">
                                        <p></p>
                                        <p>Watch this video if you’re facing any issues</p>
                                        <p><iframe loading="lazy"
                                                data-ezsrc="https://www.youtube.com/embed/j8Mc5CmdbAg?enablejsapi=1"
                                                width="560" height="315" frameborder="0" allowfullscreen=""
                                                class=" ezlazyloaded" ezoid="0.6556959082598841"></iframe></p>
                                        <p>Thanks <a href="https://www.youtube.com/watch?v=j8Mc5CmdbAg" target="_blank"
                                                rel="nofollow noopener">8x Gaming Yt 🙂</a></p>
                                        <p></p>
                                    </div>
                                    <div class="etc-content-segment">
                                        <p></p>
                                        <p>This Pubg name generator is not at all limited to <a
                                                href="https://www.pubgmobile.com/" target="_blank"
                                                rel="noopener noreferrer">PUBG Mobile</a> only. You can use this
                                            generator to generate names for other games as well. Games like <strong>Free
                                                Fire</strong>, <strong>Call of Duty</strong> and <strong>Mobile
                                                Legends</strong> also support fancy names as well. You can use this as
                                            <strong>Battlegrounds Mobile India Name Generator</strong> a.k.a PUBG Mobile
                                            India or <strong>BGMI Name Generator</strong> as well. In fact, you can go
                                            one step further and generate random stylish names for your Social Media
                                            accounts like facebook, twitter etc as they all accept these fancy names.
                                            Using these stylish names can make you stand out and get better attention
                                            from your friends.</p>
                                        <p></p>
                                    </div>
                                    <div>
                                        <div class="adsense adsense-11" style="margin: 8px 0; clear: both;"><span
                                                id="ezoic-pub-ad-placeholder-142"></span></div>
                                    </div>
                                    <div class="etc-content-segment">
                                        <p></p>
                                        <figure id="attachment_1461" aria-describedby="caption-attachment-1461"
                                            style="width: 480px" class="wp-caption aligncenter"><img loading="lazy"
                                                class="size-full wp-image-1461 ezlazyloaded"
                                                src="https://etcgamer.com/wp-content/uploads/2020/08/pubg-name-ideas.jpg"
                                                alt="pubg name ideas" width="480" height="854"
                                                data-ezsrcset="https://etcgamer.com/wp-content/uploads/2020/08/pubg-name-ideas.jpg 480w, https://etcgamer.com/wp-content/uploads/2020/08/pubg-name-ideas-169x300.jpg 169w"
                                                sizes="(max-width: 480px) 100vw, 480px"
                                                data-ezsrc="https://etcgamer.com/wp-content/uploads/2020/08/pubg-name-ideas.jpg"
                                                ezoid="0.22862677977369894"
                                                srcset="https://etcgamer.com/wp-content/uploads/2020/08/pubg-name-ideas.jpg 480w, https://etcgamer.com/wp-content/uploads/2020/08/pubg-name-ideas-169x300.jpg 169w">
                                            <figcaption id="caption-attachment-1461" class="wp-caption-text">pubg name
                                                ideas</figcaption>
                                        </figure>
                                        <p>It’s common among gamers to have different stylish names in games. Almost all
                                            the Pubg streamers like Shroud, ChocoTaco, Just9n, Dynamo, Mortal &amp;
                                            others use different names in games from their real life names. These gaming
                                            names or aliases also define that gamer and almost all of their fans know
                                            them with their gaming names only.</p>
                                        <div>
                                            <div class="adsense adsense-12" style="margin: 8px 0; clear: both;"><span
                                                    id="ezoic-pub-ad-placeholder-143"></span></div>
                                        </div>
                                        <p>Comment below if the generated name doesn’t work or you face issues pasting
                                            the stylish name.</p>
                                        <p>You can<strong> comment your unique PUBG stylish name</strong> below. We will
                                            <strong><span style="color: #3366ff;">highlight</span> </strong>your name in
                                            this post if we like it 🙂</p>
                                    </div><span id="ezoic-pub-ad-placeholder-156" class="ezoic-adpicker-ad"></span>
                                </div>
                                <div class="post-tags clr"><span class="owp-tag-text">Tags: </span><a
                                        href="https://etcgamer.com/tag/battlegrounds-mobile-india-name-generator/"
                                        rel="tag">Battlegrounds Mobile India Name Generator</a><span
                                        class="owp-sep">,</span> <a href="https://etcgamer.com/tag/bgmi-name-generator/"
                                        rel="tag">BGMI Name Generator</a><span class="owp-sep">,</span> <a
                                        href="https://etcgamer.com/tag/cool-names-for-pubg-mobile/" rel="tag">cool names
                                        for pubg mobile</a><span class="owp-sep">,</span> <a
                                        href="https://etcgamer.com/tag/pubg-mobile-india-name-generator/" rel="tag">PUBG
                                        Mobile India name Generator</a><span class="owp-sep">,</span> <a
                                        href="https://etcgamer.com/tag/pubg-mobile-name-symbol/" rel="tag">pubg mobile
                                        name symbol</a><span class="owp-sep">,</span> <a
                                        href="https://etcgamer.com/tag/pubg-name-font-generator/" rel="tag">pubg name
                                        font generator</a><span class="owp-sep">,</span> <a
                                        href="https://etcgamer.com/tag/pubg-name-generator-with-symbols/" rel="tag">pubg
                                        name generator with symbols</a><span class="owp-sep">,</span> <a
                                        href="https://etcgamer.com/tag/pubg-names-ideas/" rel="tag">pubg names
                                        ideas</a><span class="owp-sep">,</span> <a
                                        href="https://etcgamer.com/tag/pubg-stylish-name/" rel="tag">pubg stylish
                                        name</a></div>
                                <div class="wpdiscuz_top_clearing"></div>
                                <div id="comments" class="comments-area" style="padding-bottom: 0px;">
                                    <div id="respond" style="width: 0;height: 0;clear: both;margin: 0;padding: 0;">
                                    </div>
                                    <div id="wpdcom"
                                        class="wpdiscuz_unauth wpd-default wpdiscuz_no_avatar wpd-layout-1 wpd-comments-open">
                                        <div id="wpd-threads" class="wpd-thread-wrapper">
                                            <div class="wpd-thread-head">
                                                <div class="wpd-thread-info" data-comments-count="41">Comments</div>
                                                <div class="wpd-space"></div>
                                                <div class="wpd-thread-filter">
                                                    <div class="wpd-filter wpdf-sorting"><i
                                                            class="fas fa-sort-down"></i>
                                                        <div class="wpdiscuz-sort-buttons" style="display: none;"><span
                                                                class="wpdiscuz-sort-button wpdiscuz-date-sort-desc"
                                                                data-sorting="newest">Newest</span>
                                                            <span class="wpdiscuz-sort-button wpdiscuz-date-sort-asc"
                                                                data-sorting="oldest">Oldest</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="wpd-comment-info-bar">
                                                <div class="wpd-current-view"><i class="fas fa-quote-left"></i>Inline
                                                    Feedbacks</div>
                                                <div class="wpd-filter-view-all">View all comments</div>
                                            </div>
                                            <div class="wpd-thread-list">
                                                <div id="wpd-comm-334_0"
                                                    class="wpd-comment wpd-sticky-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-hidden-replies wpd-blog-guest">
                                                        <div id="comment-334" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">B乛LaC丨Łegit</div>
                                                                <div class="wpd-comment-status">
                                                                    <div class="wpd-sticky"
                                                                        wpd-tooltip="Sticky Comment Thread"><i
                                                                            class="fas fa-thumbtack"
                                                                            aria-hidden="true"></i></div>
                                                                </div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>B乛LaC丨Łegit</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                                <div class="wpd-toggle wpd-hidden wpd_not_clicked"
                                                                    wpd-tooltip="View Replies"><span
                                                                        class="wpd-view-replies"><span
                                                                            class="wpd-view-replies-text">View
                                                                            Replies</span> (7)</span><i
                                                                        class="fas fa-chevron-down"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-334_0"></div>
                                                </div>
                                                <div id="wpd-comm-269_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-hidden-replies wpd-blog-guest">
                                                        <div id="comment-269" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">zunaira</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>zunaira</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                                <div class="wpd-toggle wpd-hidden wpd_not_clicked"
                                                                    wpd-tooltip="View Replies"><span
                                                                        class="wpd-view-replies"><span
                                                                            class="wpd-view-replies-text">View
                                                                            Replies</span> (1)</span><i
                                                                        class="fas fa-chevron-down"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-269_0"></div>
                                                </div>
                                                <div id="wpd-comm-291_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-291" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">〇p乛ｕｂａｉｄ</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>〇p乛ｕｂａｉｄ</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-291_0"></div>
                                                </div>
                                                <div id="wpd-comm-319_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-hidden-replies wpd-blog-guest">
                                                        <div id="comment-319" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">★ØƤ᭄ＮＩＮＪＡ★YT</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>★ØƤ᭄ＮＩＮＪＡ★YT</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                                <div class="wpd-toggle wpd-hidden wpd_not_clicked"
                                                                    wpd-tooltip="View Replies"><span
                                                                        class="wpd-view-replies"><span
                                                                            class="wpd-view-replies-text">View
                                                                            Replies</span> (1)</span><i
                                                                        class="fas fa-chevron-down"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-319_0"></div>
                                                </div>
                                                <div id="wpd-comm-331_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-331" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">Anonymous</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>hard work bro thanx</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-331_0"></div>
                                                </div>
                                                <div id="wpd-comm-361_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-361" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">亗๓ａƳａnк亗</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>thanks for this fire</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-361_0"></div>
                                                </div>
                                                <div id="wpd-comm-410_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-410" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">PICACHU</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>P I K A C H U</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-410_0"></div>
                                                </div>
                                                <div id="wpd-comm-459_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-hidden-replies wpd-blog-guest">
                                                        <div id="comment-459" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">Vivek</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>SฬAT彡HArLeY</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                                <div class="wpd-toggle wpd-hidden wpd_not_clicked"
                                                                    wpd-tooltip="View Replies"><span
                                                                        class="wpd-view-replies"><span
                                                                            class="wpd-view-replies-text">View
                                                                            Replies</span> (1)</span><i
                                                                        class="fas fa-chevron-down"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-459_0"></div>
                                                </div>
                                                <div id="wpd-comm-486_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-486" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">Dx ahmii</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>【ᗪא彡αｻṁïï】</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-486_0"></div>
                                                </div>
                                                <div id="wpd-comm-496_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-496" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">mira</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>ＩＭ。ＣＲＹ</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-496_0"></div>
                                                </div>
                                                <div id="wpd-comm-502_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-502" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">Khadija</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>Is k bana den</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-502_0"></div>
                                                </div>
                                                <div id="wpd-comm-572_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-572" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">ツsk丶ＩɳD丶pŔoツ</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>I Love it</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-572_0"></div>
                                                </div>
                                                <div id="wpd-comm-602_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-602" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">ɱ尺ツ尺ṳḊ亗</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>ɱ尺ツ尺ṳḊ亗</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-602_0"></div>
                                                </div>
                                                <div id="wpd-comm-611_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-611" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">nauman</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>亗ᐯḕnOМ多nOМＩ亗</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-611_0"></div>
                                                </div>
                                                <div id="wpd-comm-618_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-618" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">〇p乛A D N A N</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>〇p乛A D N A N</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-618_0"></div>
                                                </div>
                                                <div id="wpd-comm-624_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-624" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">к タ ֆ ｻ ı</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>☠️</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-624_0"></div>
                                                </div>
                                                <div id="wpd-comm-650_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-650" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">Xolia</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>F͜͡uzzieūDreamsッ</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-650_0"></div>
                                                </div>
                                                <div id="wpd-comm-654_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-654" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">D乛ʘnT丨ＣＲＹ</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>D乛ʘnT丨ＣＲＹ</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-654_0"></div>
                                                </div>
                                                <div id="wpd-comm-663_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-663" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">RoZiaLay</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>I want it with Chinese’s design</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-663_0"></div>
                                                </div>
                                                <div id="wpd-comm-664_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-hidden-replies wpd-blog-guest">
                                                        <div id="comment-664" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">Emanuel</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>T͜͡FI・ŠTRM</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                                <div class="wpd-toggle wpd-hidden wpd_not_clicked"
                                                                    wpd-tooltip="View Replies"><span
                                                                        class="wpd-view-replies"><span
                                                                            class="wpd-view-replies-text">View
                                                                            Replies</span> (1)</span><i
                                                                        class="fas fa-chevron-down"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-664_0"></div>
                                                </div>
                                                <div id="wpd-comm-675_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-675" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">Shahzaib</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>Bro suggest me a couple names sme plz</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-675_0"></div>
                                                </div>
                                                <div id="wpd-comm-678_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-678" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">Prabhakar Sannad</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>؄Bααʐiɢα૨؂</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-678_0"></div>
                                                </div>
                                                <div id="wpd-comm-694_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-694" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">♔〘Ł€Ꮆ€ŇĐ〙♔</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>♔〘Ł€Ꮆ€ŇĐ〙♔</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-694_0"></div>
                                                </div>
                                                <div id="wpd-comm-700_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-700" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">؄TＨE乛ᒍokEᖇT؂</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>Ibrahim</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-700_0"></div>
                                                </div>
                                                <div id="wpd-comm-728_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-hidden-replies wpd-blog-guest">
                                                        <div id="comment-728" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">priyanshurout</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>You should add more symbols and names 😄</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                                <div class="wpd-toggle wpd-hidden wpd_not_clicked"
                                                                    wpd-tooltip="View Replies"><span
                                                                        class="wpd-view-replies"><span
                                                                            class="wpd-view-replies-text">View
                                                                            Replies</span> (1)</span><i
                                                                        class="fas fa-chevron-down"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-728_0"></div>
                                                </div>
                                                <div id="wpd-comm-732_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-732" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">¹ɨ͜͡〆ʍ๛ʂ๏ʀʀʏ・</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>¹ɨ͜͡〆ʍ๛ʂ๏ʀʀʏ・</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-732_0"></div>
                                                </div>
                                                <div id="wpd-comm-755_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-blog-guest">
                                                        <div id="comment-755" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">Yasir Ali</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>BEAST乛YASIR会</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-755_0"></div>
                                                </div>
                                                <div id="wpd-comm-1014_0" class="wpd-comment wpd_comment_level-1">
                                                    <div class="wpd-comment-wrap wpd-hidden-replies wpd-blog-guest">
                                                        <div id="comment-1014" class="wpd-comment-right">
                                                            <div class="wpd-comment-header">
                                                                <div class="wpd-comment-author">Yogesh</div>
                                                                <div class="wpd-space"></div>
                                                            </div>
                                                            <div class="wpd-comment-text">
                                                                <p>乄ＳＴＲＩＤ三Ｒ</p>
                                                            </div>
                                                            <div class="wpd-comment-footer">
                                                                <div class="wpd-reply-button"><svg
                                                                        xmlns="https://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
                                                                        </path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg><span>Reply</span></div>
                                                                <div class="wpd-space"></div>
                                                                <div class="wpd-toggle wpd-hidden wpd_not_clicked"
                                                                    wpd-tooltip="View Replies"><span
                                                                        class="wpd-view-replies"><span
                                                                            class="wpd-view-replies-text">View
                                                                            Replies</span> (1)</span><i
                                                                        class="fas fa-chevron-down"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="wpdiscuz_form_anchor-1014_0"></div>
                                                </div>
                                                <div class="wpdiscuz-comment-pagination"></div>
                                            </div>
                                        </div>
                                        <div class="wc_social_plugin_wrapper"></div>
                                        <div class="wpd-form-wrap">
                                            <div class="wpd-form-head">
                                                <div class="wpd-auth">
                                                    <div class="wpd-login"></div>
                                                </div>
                                            </div>
                                            <div class="wpd-form wpd-form-wrapper wpd-main-form-wrapper"
                                                id="wpd-main-form-wrapper-0_0">
                                                <form class="wpd_comm_form wpd_main_comm_form" method="post"
                                                    enctype="multipart/form-data">
                                                    <div class="wpd-field-comment">
                                                        <div class="wpdiscuz-item wc-field-textarea">
                                                            <div class="wpdiscuz-textarea-wrap wpd-txt">
                                                                <div class="wpd-textarea-wrap">
                                                                    <div id="wpd-editor-char-counter-0_0"
                                                                        class="wpd-editor-char-counter"></div><label
                                                                        style="display: none;"
                                                                        for="wc-textarea-0_0">Label</label>
                                                                    <textarea id="wc-textarea-0_0"
                                                                        placeholder="Join the discussion"
                                                                        aria-label="Join the discussion" required=""
                                                                        name="wc_comment"
                                                                        class="wc_comment wpd-field"></textarea>
                                                                </div>
                                                                <div class="wpd-editor-buttons-right"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="wpd-form-foot">
                                                        <div class="wpdiscuz-textarea-foot">
                                                            <div class="wpdiscuz-button-actions"></div>
                                                        </div>
                                                        <div class="wpd-form-row">
                                                            <div class="wpd-form-col-full">
                                                                <div class="wpdiscuz-item wc_name-wrapper wpd-has-icon">
                                                                    <div class="wpd-field-icon"><i
                                                                            class="fas fa-user"></i></div><input
                                                                        id="wc_name-0_0" required=""
                                                                        aria-required="true" class="wc_name wpd-field"
                                                                        name="wc_name" placeholder="Name*"
                                                                        maxlength="50" pattern=".{4,50}">
                                                                    <label for="wc_name-0_0" class="wpdlb">Name*</label>
                                                                </div>
                                                                <div
                                                                    class="wpdiscuz-item wc_email-wrapper wpd-has-icon">
                                                                    <div class="wpd-field-icon"><i
                                                                            class="fas fa-at"></i></div><input
                                                                        id="wc_email-0_0" required=""
                                                                        aria-required="true" class="wc_email wpd-field"
                                                                        type="email" name="wc_email"
                                                                        placeholder="Email*">
                                                                    <label for="wc_email-0_0"
                                                                        class="wpdlb">Email*</label>
                                                                </div>
                                                                <div class="wc-field-submit"><label class="wpd_label"
                                                                        wpd-tooltip="Notify of new replies to this comment"><input
                                                                            id="wc_notification_new_comment-0_0"
                                                                            class="wc_notification_new_comment-0_0 wpd_label__checkbox"
                                                                            value="comment" type="checkbox"
                                                                            name="wpdiscuz_notification_type"
                                                                            checked="">
                                                                        <span class="wpd_label__text"><span
                                                                                class="wpd_label__check"><i
                                                                                    class="fas fa-bell wpdicon wpdicon-on"></i><i
                                                                                    class="fas fa-bell-slash wpdicon wpdicon-off"></i></span></span></label><input
                                                                        id="wpd-field-submit-0_0"
                                                                        class="wc_comm_submit wpd_not_clicked wpd-prim-button"
                                                                        type="submit" name="submit"
                                                                        value="Post Comment"></div>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                    </div><input type="hidden" class="wpdiscuz_unique_id" value="0_0"
                                                        name="wpdiscuz_unique_id">
                                                </form>
                                            </div>
                                            <div id="wpdiscuz_hidden_secondary_form" style="display: none;">
                                                <div class="wpd-form wpd-form-wrapper wpd-secondary-form-wrapper"
                                                    id="wpd-secondary-form-wrapper-wpdiscuzuniqueid"
                                                    style="display: none;">
                                                    <div class="wpd-secondary-forms-social-content"></div>
                                                    <div class="clearfix"></div>
                                                    <form class="wpd_comm_form wpd-secondary-form-wrapper" method="post"
                                                        enctype="multipart/form-data">
                                                        <div class="wpd-field-comment">
                                                            <div class="wpdiscuz-item wc-field-textarea">
                                                                <div class="wpdiscuz-textarea-wrap wpd-txt">
                                                                    <div class="wpd-textarea-wrap">
                                                                        <div id="wpd-editor-char-counter-wpdiscuzuniqueid"
                                                                            class="wpd-editor-char-counter"></div><label
                                                                            style="display: none;"
                                                                            for="wc-textarea-wpdiscuzuniqueid">Label</label>
                                                                        <textarea id="wc-textarea-wpdiscuzuniqueid"
                                                                            placeholder="Join the discussion"
                                                                            aria-label="Join the discussion" required=""
                                                                            name="wc_comment"
                                                                            class="wc_comment wpd-field"></textarea>
                                                                    </div>
                                                                    <div class="wpd-editor-buttons-right"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="wpd-form-foot">
                                                            <div class="wpdiscuz-textarea-foot">
                                                                <div class="wpdiscuz-button-actions"></div>
                                                            </div>
                                                            <div class="wpd-form-row">
                                                                <div class="wpd-form-col-full">
                                                                    <div
                                                                        class="wpdiscuz-item wc_name-wrapper wpd-has-icon">
                                                                        <div class="wpd-field-icon"><i
                                                                                class="fas fa-user"></i></div><input
                                                                            id="wc_name-wpdiscuzuniqueid" required=""
                                                                            aria-required="true"
                                                                            class="wc_name wpd-field" name="wc_name"
                                                                            placeholder="Name*" maxlength="50"
                                                                            pattern=".{4,50}">
                                                                        <label for="wc_name-wpdiscuzuniqueid"
                                                                            class="wpdlb">Name*</label>
                                                                    </div>
                                                                    <div
                                                                        class="wpdiscuz-item wc_email-wrapper wpd-has-icon">
                                                                        <div class="wpd-field-icon"><i
                                                                                class="fas fa-at"></i></div><input
                                                                            id="wc_email-wpdiscuzuniqueid" required=""
                                                                            aria-required="true"
                                                                            class="wc_email wpd-field" type="email"
                                                                            name="wc_email" placeholder="Email*">
                                                                        <label for="wc_email-wpdiscuzuniqueid"
                                                                            class="wpdlb">Email*</label>
                                                                    </div>
                                                                    <div class="wc-field-submit"><label
                                                                            class="wpd_label"
                                                                            wpd-tooltip="Notify of new replies to this comment"><input
                                                                                id="wc_notification_new_comment-wpdiscuzuniqueid"
                                                                                class="wc_notification_new_comment-wpdiscuzuniqueid wpd_label__checkbox"
                                                                                value="comment" type="checkbox"
                                                                                name="wpdiscuz_notification_type"
                                                                                checked="">
                                                                            <span class="wpd_label__text"><span
                                                                                    class="wpd_label__check"><i
                                                                                        class="fas fa-bell wpdicon wpdicon-on"></i><i
                                                                                        class="fas fa-bell-slash wpdicon wpdicon-off"></i></span></span></label><input
                                                                            id="wpd-field-submit-wpdiscuzuniqueid"
                                                                            class="wc_comm_submit wpd_not_clicked wpd-prim-button"
                                                                            type="submit" name="submit"
                                                                            value="Post Comment"></div>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                        </div><input type="hidden" class="wpdiscuz_unique_id"
                                                            value="wpdiscuzuniqueid" name="wpdiscuz_unique_id">
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="wpdiscuz-loading-bar" class="wpdiscuz-loading-bar-unauth"></div>
                                <div id="wpdiscuz-comment-message" class="wpdiscuz-comment-message-unauth"></div>
                            </article>
                        </div>
                    </div>
                    <aside id="right-sidebar" class="sidebar-container widget-area sidebar-primary" role="complementary"
                        aria-label="Primary Sidebar"><span id="ezoic-pub-ad-placeholder-150"
                            class="ezoic-adpicker-ad"></span><span
                            class="ezoic-ad box-1 box-1150 adtester-container adtester-container-150"
                            data-ez-name="etcgamer_com-box-1"><span id="div-gpt-ad-etcgamer_com-box-1-0" ezaw="336"
                                ezah="280"
                                style="position:relative;z-index:0;display:inline-block;padding:0;width:100%;max-width:1200px;margin-left:auto !important;margin-right:auto !important;min-height:250px;min-width:300px;"
                                class="ezoic-ad">
                                <script data-ezscrex="false" data-cfasync="false" style="display:none;">
                                    if (typeof __ez_fad_position != 'undefined') {
                                        __ez_fad_position('div-gpt-ad-etcgamer_com-box-1-0')
                                    };
                                </script>
                            </span><span style="width:336px;display:block;height:14px;margin:auto"
                                class="reportline"><span
                                    style="text-align:center;font-size: smaller;float:left;line-height:normal;"><a
                                        href="https://www.ezoic.com/what-is-ezoic/" target="_blank"
                                        rel="noopener noreferrer nofollow" style="cursor:pointer"><img
                                            src="https://go.ezoic.net/utilcave_com/img/ezoic.png" alt="Ezoic"
                                            style="height:12px !important; padding:2px !important; border:0px !important; cursor:pointer !important; width: 58px !important; margin:0 !important; box-sizing: content-box !important;"></a></span><span
                                    class="ez-report-ad-button"
                                    name="?pageview_id=c33cef49-3d7e-41e7-6b0f-644572ada81f&amp;ad_position_id=150&amp;impression_group_id=etcgamer_com-box-1/2021-07-13/1057597&amp;ad_size=336x280&amp;domain_id=186470&amp;url=https://etcgamer.com/pubg-name-generator-ideas-stylish-symbols"
                                    style="cursor: pointer!important; font-size:12px !important;color: #a5a5a5 ;float:right;text-decoration:none !important;font-family:arial !important;line-height:normal;">report
                                    this ad</span></span></span>
                        <div id="right-sidebar-inner" class="clr q2w3-fixed-widget-container" style="height: 471px;">
                            <div id="recent-posts-2" class="sidebar-box widget_recent_entries clr">
                                <h4 class="widget-title">Recent Posts</h4>
                                <ul>
                                    <li><a href="https://etcgamer.com/cod-name-generator-best-cool-funny-cod-names/">COD
                                            Name Generator Online + Funny COD Names 😍🔥</a></li>
                                    <li><a href="https://etcgamer.com/funny-steam-names/">500+ Best Funny Steam Names
                                            For Boys and Girls</a></li>
                                    <li><a href="https://etcgamer.com/secret-note-19-stardew-valley/">How to solve
                                            Secret Note 19 in Stardew Valley – Complete Guide</a></li>
                                    <li><a href="https://etcgamer.com/google-play-services-keeps-stopping/">7 Ways to
                                            Fix Google Play Services Keeps Stopping Error</a></li>
                                    <li><a href="https://etcgamer.com/best-nicknames-for-pubg/">500+ Best Nicknames for
                                            PUBG Mobile in 2021</a></li>
                                    <li><a href="https://etcgamer.com/instagram-keeps-stopping/">7 Ways To Fix
                                            “Instagram Keeps Stopping” Error (Android)</a></li>
                                </ul>
                            </div>
                            <div id="custom_html-2_clone"
                                class="widget_text sidebar-box widget_custom_html clr q2w3-widget-clone-sidebar"
                                style="top: 84px; width: 254.312px; height: 0px; visibility: hidden;"></div>
                            <div id="custom_html-2" class="widget_text sidebar-box widget_custom_html clr"
                                style="top: 84px; width: 254.297px; position: fixed;">
                                <div class="textwidget custom-html-widget"><span
                                        id="ezoic-pub-ad-placeholder-152"></span><span
                                        class="ezoic-ad banner-2 banner-2152 adtester-container adtester-container-152"
                                        data-ez-name="etcgamer_com-banner-2"><span
                                            id="div-gpt-ad-etcgamer_com-banner-2-0" ezaw="300" ezah="250"
                                            style="position:relative;z-index:0;display:inline-block;padding:0;min-height:250px;min-width:300px;"
                                            class="ezoic-ad">
                                            <script data-ezscrex="false" data-cfasync="false" style="display:none;">
                                                if (typeof __ez_fad_position != 'undefined') {
                                                    __ez_fad_position('div-gpt-ad-etcgamer_com-banner-2-0')
                                                };
                                            </script>
                                        </span><span style="width:300px;display:block;height:14px;margin:auto"
                                            class="reportline"><span
                                                style="text-align:center;font-size: smaller;float:left;line-height:normal;"><a
                                                    href="https://www.ezoic.com/what-is-ezoic/" target="_blank"
                                                    rel="noopener noreferrer nofollow" style="cursor:pointer"><img
                                                        src="https://go.ezoic.net/utilcave_com/img/ezoic.png"
                                                        alt="Ezoic"
                                                        style="height:12px !important; padding:2px !important; border:0px !important; cursor:pointer !important; width: 58px !important; margin:0 !important; box-sizing: content-box !important;"></a></span><span
                                                class="ez-report-ad-button"
                                                name="?pageview_id=c33cef49-3d7e-41e7-6b0f-644572ada81f&amp;ad_position_id=152&amp;impression_group_id=etcgamer_com-banner-2/2021-07-13/1070799&amp;ad_size=300x250&amp;domain_id=186470&amp;url=https://etcgamer.com/pubg-name-generator-ideas-stylish-symbols"
                                                style="cursor: pointer!important; font-size:12px !important;color: #a5a5a5 ;float:right;text-decoration:none !important;font-family:arial !important;line-height:normal;">report
                                                this ad</span></span></span></div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <footer id="footer" class="site-footer" role="contentinfo">
                <div id="footer-inner" class="clr">
                    <div id="footer-bottom" class="clr">
                        <div id="footer-bottom-inner" class="container clr">
                            <div id="footer-bottom-menu" class="navigation clr">
                                <div class="menu-footer-bottom-container">
                                    <ul id="menu-footer-bottom" class="menu">
                                        <li id="menu-item-1223"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1223">
                                            <a href="https://etcgamer.com/affiliate-disclosure/">Affiliate
                                                Disclosure</a></li>
                                        <li id="menu-item-137"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-137">
                                            <a href="https://etcgamer.com/privacy-policy/">Privacy Policy</a></li>
                                        <li id="menu-item-138"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-138">
                                            <a href="https://etcgamer.com/terms-of-use/">Terms of Use</a></li>
                                        <li id="menu-item-139"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-139">
                                            <a href="https://etcgamer.com/about-us/">About Us</a></li>
                                        <li id="menu-item-140"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
                                            <a href="https://etcgamer.com/contact-us/">Contact Us</a></li>
                                        <li id="menu-item-141"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-141">
                                            <a href="https://etcgamer.com/report-content/">Report Content</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="copyright" class="clr" role="contentinfo">2021 © etcGamer.com - All rights
                                reserved.</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <div id="sidr-close"><a href="javascript:void(0)" class="toggle-sidr-close" aria-label="Close mobile menu"><i
                class="icon fa fa-times" aria-hidden="true"></i><span class="close-text">Close</span></a></div>
    <div id="mobile-nav" class="navigation clr">
        <ul id="menu-main-1" class="mobile-menu dropdown-menu">
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1555"><a
                    href="https://etcgamer.com/category/game-guides/">Game Guides</a></li>
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1556"><a
                    href="https://etcgamer.com/category/buying-guides/">Buying Guides</a></li>
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1953"><a
                    href="https://etcgamer.com/category/how-to/">How to</a></li>
            <li
                class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-1557">
                <a href="https://etcgamer.com/category/tools/">Tools</a></li>
        </ul>
    </div>
    <div id="wpd-editor-source-code-wrapper-bg"></div>
    <div id="wpd-editor-source-code-wrapper"><textarea id="wpd-editor-source-code"></textarea><button
            id="wpd-insert-source-code">Insert</button><input type="hidden" id="wpd-editor-uid"></div>
    <script type="application/ld+json" class="saswp-schema-markup-output">
        [{
            "@context": "https:\/\/schema.org",
            "@graph": [{
                    "@type": "NewsMediaOrganization",
                    "@id": "https:\/\/etcgamer.com#Organization",
                    "name": "etcGamer",
                    "url": "https:\/\/etcgamer.com",
                    "sameAs": [
                        "https:\/\/www.facebook.com\/etcgamers\/",
                        "https:\/\/www.pinterest.com\/mariahernandezReal\/etcgamer\/",
                        "https:\/\/wierjue.tumblr.com\/",
                        "https:\/\/twitter.com\/ietcgamer",
                        "https:\/\/myspace.com\/etcgamer",
                        "https:\/\/www.linkedin.com\/in\/etcgamer\/",
                        "https:\/\/www.youtube.com\/channel\/UC-V9XxeemVryCe0mrPD7kGQ\/",
                        "https:\/\/www.instagram.com\/etcgamer\/"
                    ],
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https:\/\/etcgamer.com\/wp-content\/uploads\/2019\/07\/etcgamer-logo.png",
                        "width": "107",
                        "height": "40"
                    }
                },
                {
                    "@type": "WebSite",
                    "@id": "https:\/\/etcgamer.com#website",
                    "headline": "etcGamer",
                    "name": "etcGamer",
                    "description": "Hardcore Gamers United!",
                    "url": "https:\/\/etcgamer.com",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https:\/\/etcgamer.com\/?s={search_term_string}",
                        "query-input": "required name=search_term_string"
                    },
                    "publisher": {
                        "@id": "https:\/\/etcgamer.com#Organization"
                    }
                },
                {
                    "@context": "https:\/\/schema.org",
                    "@type": "WebPage",
                    "@id": "https:\/\/etcgamer.com\/pubg-name-generator-ideas-stylish-symbols\/#webpage",
                    "name": "PUBG Name Generator with Stylish Symbols \ud83d\ude0e\ud83d\udd25 (Copy\/Paste)",
                    "url": "https:\/\/etcgamer.com\/pubg-name-generator-ideas-stylish-symbols\/",
                    "lastReviewed": "2021-07-04T17:51:14+00:00",
                    "inLanguage": "en-US",
                    "description": "Use PUBG Name Generator to Generate Stylish Name for yourself and Simply \ud83c\udd52\ud83c\udd5e\ud83c\udd5f\ud83c\udd68 \u24d0\u24dd\u24d3 \ud83c\udd5f\ud83c\udd50\ud83c\udd62\ud83c\udd63\ud83c\udd54 or see different cool pubg names ideas ...",
                    "reviewedBy": {
                        "@type": "Organization",
                        "name": "etcGamer",
                        "url": "https:\/\/etcgamer.com",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https:\/\/etcgamer.com\/wp-content\/uploads\/2019\/07\/etcgamer-logo.png",
                            "width": "107",
                            "height": "40"
                        }
                    },
                    "primaryImageOfPage": {
                        "@id": "https:\/\/etcgamer.com\/pubg-name-generator-ideas-stylish-symbols\/#primaryimage"
                    },
                    "mainContentOfPage": [
                        [{
                                "@context": "https:\/\/schema.org",
                                "@type": "SiteNavigationElement",
                                "@id": "https:\/\/etcgamer.com\/#Main",
                                "name": "Game Guides",
                                "url": "https:\/\/etcgamer.com\/category\/game-guides\/"
                            },
                            {
                                "@context": "https:\/\/schema.org",
                                "@type": "SiteNavigationElement",
                                "@id": "https:\/\/etcgamer.com\/#Main",
                                "name": "Buying Guides",
                                "url": "https:\/\/etcgamer.com\/category\/buying-guides\/"
                            },
                            {
                                "@context": "https:\/\/schema.org",
                                "@type": "SiteNavigationElement",
                                "@id": "https:\/\/etcgamer.com\/#Main",
                                "name": "How to",
                                "url": "https:\/\/etcgamer.com\/category\/how-to\/"
                            },
                            {
                                "@context": "https:\/\/schema.org",
                                "@type": "SiteNavigationElement",
                                "@id": "https:\/\/etcgamer.com\/#Main",
                                "name": "Tools",
                                "url": "https:\/\/etcgamer.com\/category\/tools\/"
                            }
                        ]
                    ],
                    "isPartOf": {
                        "@id": "https:\/\/etcgamer.com#website"
                    },
                    "breadcrumb": {
                        "@id": "https:\/\/etcgamer.com\/pubg-name-generator-ideas-stylish-symbols\/#breadcrumb"
                    }
                },
                {
                    "@type": "BreadcrumbList",
                    "@id": "https:\/\/etcgamer.com\/pubg-name-generator-ideas-stylish-symbols\/#breadcrumb",
                    "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "item": {
                                "@id": "https:\/\/etcgamer.com",
                                "name": "etcGamer"
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "item": {
                                "@id": "https:\/\/etcgamer.com\/category\/tools\/name-generators\/",
                                "name": "Name Generators"
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "item": {
                                "@id": "https:\/\/etcgamer.com\/category\/tools\/",
                                "name": "Tools"
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 4,
                            "item": {
                                "@id": "https:\/\/etcgamer.com\/pubg-name-generator-ideas-stylish-symbols\/",
                                "name": "PUBG Name Generator with Stylish Symbols \ud83d\ude0e\ud83d\udd25 (Copy\/Paste)"
                            }
                        }
                    ]
                },
                {
                    "@type": "Article",
                    "@id": "https:\/\/etcgamer.com\/pubg-name-generator-ideas-stylish-symbols\/#Article",
                    "url": "https:\/\/etcgamer.com\/pubg-name-generator-ideas-stylish-symbols\/",
                    "inLanguage": "en-US",
                    "mainEntityOfPage": "https:\/\/etcgamer.com\/pubg-name-generator-ideas-stylish-symbols\/#webpage",
                    "headline": "PUBG Name Generator with Stylish Symbols \ud83d\ude0e\ud83d\udd25 (Copy\/Paste)",
                    "description": "Use PUBG Name Generator to Generate Stylish Name for yourself and Simply \ud83c\udd52\ud83c\udd5e\ud83c\udd5f\ud83c\udd68 \u24d0\u24dd\u24d3 \ud83c\udd5f\ud83c\udd50\ud83c\udd62\ud83c\udd63\ud83c\udd54 or see different cool pubg names ideas ...",
                    "articleBody": "PUBG Name Generator is quite popular and many of the 'pro' pubg players prefer to have unique, stylish &amp; creative names\/nicknames mostly by using different cool looking symbols.    We created this tool to help you guys with stylish pubg name generation process. ALL the names created with this tool are compatible with pubg. Please comment below, If some name doesn't work.      How to use PUBG NAME GENERATOR V1?      Using Pubg Name Generator V1 is quite straight-forward, Simply:     \tEnter your name in the box that says \u201cEnter your name here\u201d.   \tClick on Generate button   \tClick Copy if you like the name, else click on Try Again.      Comment below if you need help or the tool doesn't work :)    How to use PUBG NAME GENERATOR v2?      Pubg Name Generator v2 allows you to manually enter your favourite symbols in the name. You need to:     \tEnter your name in the Name field.   \tClick on any symbol to enter in the name field.   \tClick on left and right drop-down to choose prefix or suffix symbol.   \tClick on Generate button to See your name in different Styles :)      Comment below if you need help or the tool doesn't work :)      Similar Tools:    COD Name Generator Online + Funny COD Names \ud83d\ude0d\ud83d\udd25    Free Fire Name Generator with Stylish Symbols \ud83d\ude0e\ud83d\udd25 (Copy\/Paste)    500+ Best Nicknames for PUBG Mobile in 2021      Stylish PUBG NAME IDEAS        Cool PUBG Name Ideas      \u029aANGEL\u0e5b  Kajla\u591aGaming  DO\u0141MIC\u3005ErroR      \u534dB\u00d8\u00d8\u0160\u534d  \u300e\u4e42\u300f\uff36\uff21\uff2e\uff28  T\u012f\u00ce\u012fG\u012fE\u012fR      \u3006ScuL\uff7bunTeR  \uff33\uff21\uff2e\uff21\u3000\u5c0f\u3055  \u3010\uff2c\uff41\uff49\uff54\uff48      \u0604Strawberry\u0602  \u300cS\u30bf\u30bfD\u300d  S\uff21M\uff35\uff32A\uff29      KoD\u3006Harsh  \u3018EEM\u0112TEE\u3019  \u300aamirlord\u300b      M\u5c3a\u30c4\u5c3aude  \u30fb\uff28\uff35\uff33\uff21\uff29\uff2e  V3NOM\u7236KS      \uff29\uff2d\u3002\uff23\uff32\uff39  \u30c4H\u0105\u0271\u0291\u0105\u30c4  \u300eBEN\u300fCOFF\u0130N      I\u00c1M\u00a4PhEbInOP  M\u4e48HI\u3006B\u4e48LOCH  Zeko\u300aM24\u300b      \u300eXP\u300f\u0e5bR\u3007J\u30c5  \u0126\u0126\uff2c\uff55\uff43\uff41\uff53  TUNA''D'MANA'      \u300a\u0627\u064a\u0640\u0640\u0648  J\u30c4ker\u4e97Rohit  \u30c4N\u00e0i\u0282hiya      GG\u30fbTenshi\u025e  FNC\u00d7ScOUtOP  btAR\u035c\u0361NY      \u0110\u00d8nT\u06ddM\u00d8VE  COVID'19\u7c73  Kassar\u300aAMKi\u300b      \u4e97A\u016bI\u012bE\u016bX\u4e97  \u3010\uff37\uff49\uff4c\uff44\u3011  T\uff45\uff44\uff44\uff59\u066d      TM\u0161\u066dMonarch  \u4e0b\u5c3a\u53e3\u4e59\u30e2\u308c07  OP\u5f61ShiVaM      S\u0e2cAT\u5f61HArLeY  G\u1ea5u\u0604M\u00e8o  PERO\u300eGOLDY\u300f      \u4e59\uff34\u4e28AZRA\u0130L  \uff32\uff29\uff23\uff25\u00a4  \u300e\u00d1\u00d5B\u00cfT\u00c2\u300f      BLR\u30fbY3AS1N  raj\u30b7magiciaan  WOLF\u53eaQUEEN      Baby\u30ce\u732a\u732a\u025e  \u5f61\u00a3FSAN\u00a3  A\u0141pha\u0e5bKe\u0110aR      EVIL\u4e36Viper  DeVi\u00a3\u4e44PRABH  D\u4e5bEaD\u4e28HITMAN      \uff23\uff49\uff45\u0264\uff23\uff49\uff45  \ub3d9EnVy\uc720FM  \u3010BP\u3011JOKER            Related:\u00a0Free Fire Name Generator V3 \ud83d\udd25 (\ud835\udd6e\ud835\udd94\ud835\udd95\ud835\udd9e \u2192 \ud835\udd7b\ud835\udd86\ud835\udd98\ud835\udd99\ud835\udd8a)      How to Change name in PUBG Mobile?   how to change pubg name     \tOpen PUBG Mobile   \tTap on \"Inventory\" in the bottom menu.   \tIn the right side menu, tap on the \"crate\" icon at the bottom.   \tYou should see a rename card in the crate. Tap the Rename Card &amp; Tap USE.   \tEnter or Paste your new name and Tap OK.        Watch this video if you're facing any issues        Thanks 8x Gaming Yt :)        This Pubg name generator is not at all limited to PUBG Mobile only. You can use this generator to generate names for other games as well. Games like Free Fire, Call of Duty and Mobile Legends also support fancy names as well. You can use this as Battlegrounds Mobile India Name Generator a.k.a PUBG Mobile India or BGMI Name Generator as well. In fact, you can go one step further and generate random stylish names for your Social Media accounts like facebook, twitter etc as they all accept these fancy names. Using these stylish names can make you stand out and get better attention from your friends.         pubg name ideas    It's common among gamers to have different stylish names in games. Almost all the Pubg streamers like Shroud, ChocoTaco, Just9n, Dynamo, Mortal &amp; others use different names in games from their real life names. These gaming names or aliases also define that gamer and almost all of their fans know them with their gaming names only.        Comment below if the generated name doesn't work or you face issues pasting the stylish name.    You can comment your unique PUBG stylish name below. We will highlight your name in this post if we like it :)",
                    "keywords": "Battlegrounds Mobile India Name Generator, BGMI Name Generator, cool names for pubg mobile, PUBG Mobile India name Generator, pubg mobile name symbol, pubg name font generator, pubg name generator with symbols, pubg names ideas, pubg stylish name, ",
                    "datePublished": "2020-08-24T21:32:46+00:00",
                    "dateModified": "2021-07-04T17:51:14+00:00",
                    "author": {
                        "@type": "Person",
                        "name": "Just9n",
                        "description": "",
                        "url": "https:\/\/etcgamer.com\/author\/root\/",
                        "sameAs": [],
                        "image": {
                            "@type": "ImageObject",
                            "url": "https:\/\/secure.gravatar.com\/avatar\/2ff328de248fdafa02ae16091b6c1730?s=96&d=mm&r=g",
                            "height": 96,
                            "width": 96
                        }
                    },
                    "editor": {
                        "@type": "Person",
                        "name": "Just9n",
                        "description": "",
                        "url": "https:\/\/etcgamer.com\/author\/root\/",
                        "sameAs": [],
                        "image": {
                            "@type": "ImageObject",
                            "url": "https:\/\/secure.gravatar.com\/avatar\/2ff328de248fdafa02ae16091b6c1730?s=96&d=mm&r=g",
                            "height": 96,
                            "width": 96
                        }
                    },
                    "publisher": {
                        "@id": "https:\/\/etcgamer.com#Organization"
                    },
                    "speakable": {
                        "@type": "SpeakableSpecification",
                        "xpath": [
                            "\/html\/head\/title",
                            "\/html\/head\/meta[@name='description']\/@content"
                        ]
                    },
                    "image": [{
                            "@type": "ImageObject",
                            "@id": "https:\/\/etcgamer.com\/pubg-name-generator-ideas-stylish-symbols\/#primaryimage",
                            "url": "https:\/\/etcgamer.com\/wp-content\/uploads\/2020\/08\/pubg-name-generator-stylish-symbols-1-1200x900.png",
                            "width": "1200",
                            "height": "900"
                        },
                        {
                            "@type": "ImageObject",
                            "url": "https:\/\/etcgamer.com\/wp-content\/uploads\/2020\/08\/pubg-name-generator-stylish-symbols-1-1200x720.png",
                            "width": "1200",
                            "height": "720"
                        },
                        {
                            "@type": "ImageObject",
                            "url": "https:\/\/etcgamer.com\/wp-content\/uploads\/2020\/08\/pubg-name-generator-stylish-symbols-1-1200x675.png",
                            "width": "1200",
                            "height": "675"
                        },
                        {
                            "@type": "ImageObject",
                            "url": "https:\/\/etcgamer.com\/wp-content\/uploads\/2020\/08\/how-to-change-pubg-name.jpg",
                            "width": 416,
                            "height": 340
                        },
                        {
                            "@type": "ImageObject",
                            "url": "https:\/\/etcgamer.com\/wp-content\/uploads\/2020\/08\/pubg-name-ideas.jpg",
                            "width": 480,
                            "height": 854
                        }
                    ],
                    "isPartOf": {
                        "@id": "https:\/\/etcgamer.com\/pubg-name-generator-ideas-stylish-symbols\/#webpage"
                    }
                }
            ]
        }]
    </script>
    <script id="kk-star-ratings-js-extra" ez-screx="true">
        /* <![CDATA[ */
        var kk_star_ratings = {
            "action": "kk-star-ratings",
            "endpoint": "https:\/\/etcgamer.com\/wp-admin\/admin-ajax.php",
            "nonce": "b34a95488a"
        };
        /* ]]> */
    </script>
    <script id="wpdiscuz-combo-js-js-extra" ez-screx="true">
        /* <![CDATA[ */
        var wpdiscuzAjaxObj = {
            "wc_hide_replies_text": "Hide Replies",
            "wc_show_replies_text": "View Replies",
            "wc_msg_required_fields": "Please fill out required fields",
            "wc_invalid_field": "Some of field value is invalid",
            "wc_error_empty_text": "please fill out this field to comment",
            "wc_error_url_text": "url is invalid",
            "wc_error_email_text": "email address is invalid",
            "wc_invalid_captcha": "Invalid Captcha Code",
            "wc_login_to_vote": "You Must Be Logged In To Vote",
            "wc_deny_voting_from_same_ip": "You are not allowed to vote for this comment",
            "wc_self_vote": "You cannot vote for your comment",
            "wc_vote_only_one_time": "You've already voted for this comment",
            "wc_voting_error": "Voting Error",
            "wc_comment_edit_not_possible": "Sorry, this comment is no longer possible to edit",
            "wc_comment_not_updated": "Sorry, the comment was not updated",
            "wc_comment_not_edited": "You've not made any changes",
            "wc_msg_input_min_length": "Input is too short",
            "wc_msg_input_max_length": "Input is too long",
            "wc_spoiler_title": "Spoiler Title",
            "wc_cannot_rate_again": "You cannot rate again",
            "wc_not_allowed_to_rate": "You're not allowed to rate here",
            "wc_follow_user": "Follow this user",
            "wc_unfollow_user": "Unfollow this user",
            "wc_follow_success": "You started following this comment author",
            "wc_follow_canceled": "You stopped following this comment author.",
            "wc_follow_email_confirm": "Please check your email and confirm the user following request.",
            "wc_follow_email_confirm_fail": "Sorry, we couldn't send confirmation email.",
            "wc_follow_login_to_follow": "Please login to follow users.",
            "wc_follow_impossible": "We are sorry, but you can't follow this user.",
            "wc_follow_not_added": "Following failed. Please try again later.",
            "is_user_logged_in": "",
            "commentListLoadType": "1",
            "commentListUpdateType": "0",
            "commentListUpdateTimer": "30",
            "liveUpdateGuests": "0",
            "wordpressThreadCommentsDepth": "5",
            "wordpressIsPaginate": "",
            "commentTextMaxLength": "0",
            "replyTextMaxLength": "0",
            "commentTextMinLength": "1",
            "replyTextMinLength": "1",
            "storeCommenterData": "100000",
            "socialLoginAgreementCheckbox": "0",
            "enableFbLogin": "0",
            "fbUseOAuth2": "0",
            "enableFbShare": "0",
            "facebookAppID": "",
            "facebookUseOAuth2": "0",
            "enableGoogleLogin": "0",
            "googleClientID": "",
            "googleClientSecret": "",
            "cookiehash": "2e839916ac931ecd77447883b285c97f",
            "isLoadOnlyParentComments": "1",
            "scrollToComment": "1",
            "commentFormView": "expanded",
            "enableDropAnimation": "0",
            "isNativeAjaxEnabled": "1",
            "enableBubble": "0",
            "bubbleLiveUpdate": "0",
            "bubbleHintTimeout": "45",
            "bubbleHintHideTimeout": "10",
            "cookieHideBubbleHint": "wpdiscuz_hide_bubble_hint",
            "bubbleShowNewCommentMessage": "0",
            "bubbleLocation": "content_left",
            "firstLoadWithAjax": "0",
            "wc_copied_to_clipboard": "Copied to clipboard!",
            "inlineFeedbackAttractionType": "disable",
            "loadRichEditor": "0",
            "wpDiscuzReCaptchaSK": "",
            "wpDiscuzReCaptchaTheme": "light",
            "wpDiscuzReCaptchaVersion": "2.0",
            "wc_captcha_show_for_guest": "0",
            "wc_captcha_show_for_members": "0",
            "wpDiscuzIsShowOnSubscribeForm": "0",
            "wmuEnabled": "0",
            "wmuInput": "wmu_files",
            "wmuMaxFileCount": "1",
            "wmuMaxFileSize": "2097152",
            "wmuPostMaxSize": "104857600",
            "wmuIsLightbox": "0",
            "wmuMimeTypes": {
                "jpg": "image\/jpeg",
                "jpeg": "image\/jpeg",
                "jpe": "image\/jpeg",
                "gif": "image\/gif",
                "png": "image\/png",
                "bmp": "image\/bmp",
                "tiff": "image\/tiff",
                "tif": "image\/tiff",
                "ico": "image\/x-icon"
            },
            "wmuPhraseConfirmDelete": "Are you sure you want to delete this attachment?",
            "wmuPhraseNotAllowedFile": "Not allowed file type",
            "wmuPhraseMaxFileCount": "Maximum number of uploaded files is 1",
            "wmuPhraseMaxFileSize": "Maximum upload file size is 2MB",
            "wmuPhrasePostMaxSize": "Maximum post size is 100MB",
            "msgEmptyFile": "File is empty. Please upload something more substantial. This error could also be caused by uploads being disabled in your php.ini or by post_max_size being defined as smaller than upload_max_filesize in php.ini.",
            "msgPostIdNotExists": "Post ID not exists",
            "msgUploadingNotAllowed": "Sorry, uploading not allowed for this post",
            "msgPermissionDenied": "You do not have sufficient permissions to perform this action",
            "wmuSecurity": "1cf7528e5a",
            "wmuKeyImages": "images",
            "wmuSingleImageWidth": "auto",
            "wmuSingleImageHeight": "200",
            "version": "20.7.2.2",
            "wc_post_id": "1455",
            "loadLastCommentId": "0",
            "isCookiesEnabled": "1",
            "dataFilterCallbacks": [],
            "phraseFilters": [],
            "is_email_field_required": "1",
            "url": "https:\/\/etcgamer.com\/wp-admin\/admin-ajax.php",
            "customAjaxUrl": "https:\/\/etcgamer.com\/wp-content\/plugins\/wpdiscuz\/utils\/ajax\/wpdiscuz-ajax.php",
            "bubbleUpdateUrl": "https:\/\/etcgamer.com\/wp-json\/wpdiscuz\/v1\/update",
            "restNonce": "277b578ec2"
        };
        var wpdiscuzUCObj = {
            "msgConfirmDeleteComment": "Are you sure you want to delete this comment?",
            "msgConfirmCancelSubscription": "Are you sure you want to cancel this subscription?",
            "msgConfirmCancelFollow": "Are you sure you want to cancel this follow?",
            "additionalTab": "0"
        };
        /* ]]> */
    </script>
    <script id="rocket-browser-checker-js-after" ez-screx="true">
        "use strict";
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in
                        descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key,
                            descriptor)
                }
            }
            return function (Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps &&
                    defineProperties(Constructor, staticProps), Constructor
            }
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
        }
        var RocketBrowserCompatibilityChecker = function () {
            function RocketBrowserCompatibilityChecker(options) {
                _classCallCheck(this, RocketBrowserCompatibilityChecker), this.passiveSupported = !1, this
                    ._checkPassiveOption(this), this.options = !!this.passiveSupported && options
            }
            return _createClass(RocketBrowserCompatibilityChecker, [{
                key: "_checkPassiveOption",
                value: function (self) {
                    try {
                        var options = {
                            get passive() {
                                return !(self.passiveSupported = !0)
                            }
                        };
                        window.addEventListener("test", null, options), window.removeEventListener(
                            "test", null, options)
                    } catch (err) {
                        self.passiveSupported = !1
                    }
                }
            }, {
                key: "initRequestIdleCallback",
                value: function () {
                    !1 in window && (window.requestIdleCallback = function (cb) {
                        var start = Date.now();
                        return setTimeout(function () {
                            cb({
                                didTimeout: !1,
                                timeRemaining: function () {
                                    return Math.max(0, 50 - (Date
                                    .now() - start))
                                }
                            })
                        }, 1)
                    }), !1 in window && (window.cancelIdleCallback = function (id) {
                        return clearTimeout(id)
                    })
                }
            }, {
                key: "isDataSaverModeOn",
                value: function () {
                    return "connection" in navigator && !0 === navigator.connection.saveData
                }
            }, {
                key: "supportsLinkPrefetch",
                value: function () {
                    var elem = document.createElement("link");
                    return elem.relList && elem.relList.supports && elem.relList.supports(
                            "prefetch") && window.IntersectionObserver && "isIntersecting" in
                        IntersectionObserverEntry.prototype
                }
            }, {
                key: "isSlowConnection",
                value: function () {
                    return "connection" in navigator && "effectiveType" in navigator.connection && (
                        "2g" === navigator.connection.effectiveType || "slow-2g" === navigator
                        .connection.effectiveType)
                }
            }]), RocketBrowserCompatibilityChecker
        }();
    </script>
    <script id="rocket-preload-links-js-extra" ez-screx="true">
        /* <![CDATA[ */
        var RocketPreloadLinksConfig = {
            "excludeUris": "\/(.+\/)?feed\/?.+\/?|\/(?:.+\/)?embed\/|\/(index\\.php\/)?wp\\-json(\/.*|$)|\/wp-admin\/|\/logout\/|\/wp-login.php",
            "usesTrailingSlash": "1",
            "imageExt": "jpg|jpeg|gif|png|tiff|bmp|webp|avif",
            "fileExt": "jpg|jpeg|gif|png|tiff|bmp|webp|avif|php|pdf|html|htm",
            "siteUrl": "https:\/\/etcgamer.com",
            "onHoverDelay": "100",
            "rateThrottle": "3"
        };
        /* ]]> */
    </script>
    <script id="rocket-preload-links-js-after" ez-screx="true">
        (function () {
            "use strict";
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                        "symbol" : typeof e
                },
                e = function () {
                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !
                                0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }
                }();

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var t = function () {
                function n(e, t) {
                    i(this, n), this.browser = e, this.config = t, this.options = this.browser.options, this
                        .prefetched = new Set, this.eventTime = null, this.threshold = 1111, this.numOnHover = 0
                }
                return e(n, [{
                    key: "init",
                    value: function () {
                        !this.browser.supportsLinkPrefetch() || this.browser
                        .isDataSaverModeOn() || this.browser.isSlowConnection() || (this
                            .regex = {
                                excludeUris: RegExp(this.config.excludeUris, "i"),
                                images: RegExp(".(" + this.config.imageExt + ")$", "i"),
                                fileExt: RegExp(".(" + this.config.fileExt + ")$", "i")
                            }, this._initListeners(this))
                    }
                }, {
                    key: "_initListeners",
                    value: function (e) {
                        -1 < this.config.onHoverDelay && document.addEventListener("mouseover",
                                e.listener.bind(e), e.listenerOptions), document
                            .addEventListener("mousedown", e.listener.bind(e), e
                                .listenerOptions), document.addEventListener("touchstart", e
                                .listener.bind(e), e.listenerOptions)
                    }
                }, {
                    key: "listener",
                    value: function (e) {
                        var t = e.target.closest("a"),
                            n = this._prepareUrl(t);
                        if (null !== n) switch (e.type) {
                            case "mousedown":
                            case "touchstart":
                                this._addPrefetchLink(n);
                                break;
                            case "mouseover":
                                this._earlyPrefetch(t, n, "mouseout")
                        }
                    }
                }, {
                    key: "_earlyPrefetch",
                    value: function (t, e, n) {
                        var i = this,
                            r = setTimeout(function () {
                                if (r = null, 0 === i.numOnHover) setTimeout(function () {
                                    return i.numOnHover = 0
                                }, 1e3);
                                else if (i.numOnHover > i.config.rateThrottle) return;
                                i.numOnHover++, i._addPrefetchLink(e)
                            }, this.config.onHoverDelay);
                        t.addEventListener(n, function e() {
                            t.removeEventListener(n, e, {
                                passive: !0
                            }), null !== r && (clearTimeout(r), r = null)
                        }, {
                            passive: !0
                        })
                    }
                }, {
                    key: "_addPrefetchLink",
                    value: function (i) {
                        return this.prefetched.add(i.href), new Promise(function (e, t) {
                            var n = document.createElement("link");
                            n.rel = "prefetch", n.href = i.href, n.onload = e, n
                                .onerror = t, document.head.appendChild(n)
                        }).catch(function () {})
                    }
                }, {
                    key: "_prepareUrl",
                    value: function (e) {
                        if (null === e || "object" !== (void 0 === e ? "undefined" : r(e)) || !
                            1 in e || -1 === ["http:", "https:"].indexOf(e.protocol))
                        return null;
                        var t = e.href.substring(0, this.config.siteUrl.length),
                            n = this._getPathname(e.href, t),
                            i = {
                                original: e.href,
                                protocol: e.protocol,
                                origin: t,
                                pathname: n,
                                href: t + n
                            };
                        return this._isLinkOk(i) ? i : null
                    }
                }, {
                    key: "_getPathname",
                    value: function (e, t) {
                        var n = t ? e.substring(this.config.siteUrl.length) : e;
                        return n.startsWith("/") || (n = "/" + n), this._shouldAddTrailingSlash(
                            n) ? n + "/" : n
                    }
                }, {
                    key: "_shouldAddTrailingSlash",
                    value: function (e) {
                        return this.config.usesTrailingSlash && !e.endsWith("/") && !this.regex
                            .fileExt.test(e)
                    }
                }, {
                    key: "_isLinkOk",
                    value: function (e) {
                        return null !== e && "object" === (void 0 === e ? "undefined" : r(e)) &&
                            (!this.prefetched.has(e.href) && e.origin === this.config.siteUrl &&
                                -1 === e.href.indexOf("?") && -1 === e.href.indexOf("#") && !
                                this.regex.excludeUris.test(e.href) && !this.regex.images.test(e
                                    .href))
                    }
                }], [{
                    key: "run",
                    value: function () {
                        "undefined" != typeof RocketPreloadLinksConfig && new n(
                            new RocketBrowserCompatibilityChecker({
                                capture: !0,
                                passive: !0
                            }), RocketPreloadLinksConfig).init()
                    }
                }]), n
            }();
            t.run();
        }());
    </script>
    <script ez-screx="true">
        "use strict";
        var wprRemoveCPCSS = function wprRemoveCPCSS() {
            var elem;
            document.querySelector('link[data-rocket-async="style"][rel="preload"]') ? setTimeout(wprRemoveCPCSS,
                    200) : (elem = document.getElementById("rocket-critical-css")) && "remove" in elem && elem
                .remove()
        };
        window.addEventListener ? window.addEventListener("load", wprRemoveCPCSS) : window.attachEvent && window
            .attachEvent("onload", wprRemoveCPCSS);
    </script>
    <script src="https://etcgamer.com/wp-content/cache/min/1/d3478d93bdede75d48bd13007256d430.js?screx=1&amp;sxcb=62a"
        defer="" data-minify="1" ez-screx="true"></script><noscript>
        <link rel=stylesheet href=https://etcgamer.com/wp-content/cache/min/1/c7ae2c12e82fcd169104eed261b94dda.css
            media=all data-minify=1>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel=stylesheet>
        </noscript>
    <div class="ezmob-footer ezoic-floating-bottom ezo_ad ezmob-footer-desktop" id="ezmobfooter">
        <center><span id="ezoic-pub-ad-placeholder-100"></span>
            <div class="ezmob-footer ezoic-floating-bottom ezo_ad ezmob-footer-desktop" id="ezmobfooter">
                <center><span
                        class="ezoic-ad medrectangle-2 medrectangle-2100 adtester-container adtester-container-100"
                        data-ez-name="etcgamer_com-medrectangle-2"><span id="div-gpt-ad-etcgamer_com-medrectangle-2-0"
                            ezaw="728" ezah="90"
                            style="position:relative;z-index:0;display:inline-block;padding:0;min-height:90px;min-width:728px;"
                            class="ezoic-ad">
                            <script data-ezscrex="false" data-cfasync="false" style="display:none;">
                                if (typeof __ez_fad_position != 'undefined') {
                                    __ez_fad_position('div-gpt-ad-etcgamer_com-medrectangle-2-0')
                                };
                            </script>
                        </span></span></center><span class="ezmob-footer-close"
                    onclick="document.getElementById('ezmobfooter').style.display='none';">x</span>
            </div>
        </center><span class="ezmob-footer-close"
            onclick="document.getElementById('ezmobfooter').style.display='none';">x</span>
    </div>
    <script>
        var __inScopeForCCPA = false;

        function __uspapi(command, version, callback) {
            var response = null;
            var successs = false;
            if (command === "getUSPData" && version === 1) {
                var uspString = "1"; // Version
                if (__inScopeForCCPA) {
                    uspString +=
                    "Y"; // Has Explicit Notice for Opt Out been provided (ex footer or minor consent modal)
                    var result;
                    var consentCookie = (result = new RegExp('(?:^|; )ezoccpaconsent=([^;]*)').exec(document.cookie)) ?
                        (result[1]) : null;
                    if (consentCookie === "nonconsent") {
                        uspString += "Y";
                    } else {
                        uspString += "N";
                    }
                    uspString +=
                        "N" // Is pub a signatory to the IAB Limited Service Provider Agreement (http://www.iabprivacy.com/)
                } else {
                    uspString += "---";
                }
                response = {
                    uspString: uspString,
                    version: 1
                };
                success = true;
            }
            return callback(response, success);
        };

        function __receiveUspapiMessage(event) {
            if (event.data.hasOwnProperty('__uspapiCall')) {
                __uspapi('getUSPData', 1, function (uspData, success) {
                    event.source.postMessage({
                            __uspapiReturn: {
                                returnValue: uspData,
                                success: success,
                                callId: event.data.__uspapiCall.callId
                            }
                        },
                        event.origin);
                });
            }
            return null;
        };
        window.addEventListener("message", __receiveUspapiMessage, false);
    </script>
    <script>
        function __ez_fad_ezpbinit() {
            var s = document.createElement('script');
            s.setAttribute('src',
                '//go.ezodn.com/hb/dall.js?b=medianet,oneVideo,onemobile,onetag,pubmatic,pulsepoint,smilewanted&cb=195-0-23'
                );
            document.body.appendChild(s);
        }
        var epbjs = epbjs || {};
        epbjs.que = epbjs.que || [];
        epbjs.bidderTimeout = 2000;
        epbjs.useAdj = true;
        epbjs.SS = {
            "medianet": 11307,
            "oneVideo": 11299,
            "onemobile": 11293,
            "onetag": 11291,
            "pubmatic": 10061,
            "pulsepoint": 11301,
            "smilewanted": 11313
        };
        epbjs.bidders = ['medianet,oneVideo,onemobile,onetag,pubmatic,pulsepoint,smilewanted'];
        epbjs.que.push(function () {});
        epbjs.bidderSettings = {
            'pubmatic': {
                bidCpmAdjustment: function (bidCpm) {
                    var adj1 = bidCpm * 1.000000;
                    var adj2 = adj1 * 1.000000;
                    return adj2;
                }
            },
            'medianet': {
                bidCpmAdjustment: function (bidCpm) {
                    var adj1 = bidCpm * 1.000000;
                    var adj2 = adj1 * 1.000000;
                    return adj2;
                }
            },
            'smilewanted': {
                bidCpmAdjustment: function (bidCpm) {
                    var adj1 = bidCpm * 0.900000;
                    var adj2 = adj1 * 1.000000;
                    return adj2;
                }
            },
            'onemobile': {
                bidCpmAdjustment: function (bidCpm) {
                    var adj1 = bidCpm * 1.000000;
                    var adj2 = adj1 * 1.000000;
                    return adj2;
                }
            },
            'onetag': {
                bidCpmAdjustment: function (bidCpm) {
                    var adj1 = bidCpm * 1.000000;
                    var adj2 = adj1 * 1.000000;
                    return adj2;
                }
            },
            'oneVideo': {
                bidCpmAdjustment: function (bidCpm) {
                    var adj1 = bidCpm * 0.330000;
                    var adj2 = adj1 * 1.000000;
                    return adj2;
                }
            },
            'pulsepoint': {
                bidCpmAdjustment: function (bidCpm) {
                    var adj1 = bidCpm * 1.000000;
                    var adj2 = adj1 * 1.000000;
                    return adj2;
                }
            },
        };
        epbjs.gadj = 1.000000;
        var __enableAnalytics = false;
        var __s2sbidders = [];
        var __allBidders = ['pubmatic', 'medianet', 'smilewanted', 'onemobile', 'onetag', 'oneVideo', 'pulsepoint'];
        __ez.queue.addFile('/detroitchicago/denver.js', '/detroitchicago/denver.js?gcb=0&cb=9', false, [], true, false,
            true, false);
        __ez.queue.addFunc("epbjsRequestAdUnits", "epbjsRequestAdUnits", [
            [{
                code: 'div-gpt-ad-etcgamer_com-banner-2-0',
                mediaTypes: {
                    video: {
                        context: 'outstream',
                        playerSize: [
                            [300, 250]
                        ],
                        mimes: ["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"],
                        renderer: {
                            url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2',
                            render: function (bid) {
                                if (!(bid.vastXml === undefined || bid.vastXml === null)) {
                                    try {
                                        setTimeout(() => {
                                            var configObj = {
                                                width: bid.width,
                                                height: bid.height,
                                                vastTimeout: 5000,
                                                maxAllowedVastTagRedirects: 3,
                                                allowVpaid: true,
                                                autoPlay: true,
                                                preload: false,
                                                mute: true,
                                                adText: 'Ezoic'
                                            };
                                            outstreamPlayer(bid, bid.adUnitCode, configObj);
                                        }, 3000);
                                    } catch (e) {
                                        console.log(e);
                                        console.log('Error in rendering');
                                    }
                                }
                            },
                            backupOnly: true
                        }
                    }
                },
                bids: [{
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 300,
                            playerHeight: 250,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-banner-2-0',
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '156983',
                        adSlot: 'e_sidebar_floating_1_300x250'
                    }
                }, {
                    bidder: 'medianet',
                    params: {
                        cid: '8CUBCB617',
                        crid: '188911743'
                    }
                }, {
                    bidder: 'smilewanted',
                    params: {
                        zoneId: 'ezoic.com_hb_display'
                    }
                }, {
                    bidder: 'onetag',
                    params: {
                        pubId: '62499636face9dc'
                    }
                }, {
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 300,
                            playerHeight: 250,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }, {
                    bidder: 'pulsepoint',
                    params: {
                        cf: '300x250',
                        cp: '562406',
                        ct: '719185'
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-medrectangle-2-0',
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90]
                        ]
                    }
                },
                bids: [{
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '156983',
                        adSlot: 'e_bottom_floating_728x90'
                    }
                }, {
                    bidder: 'medianet',
                    params: {
                        cid: '8CUBCB617',
                        crid: '188911743'
                    }
                }, {
                    bidder: 'smilewanted',
                    params: {
                        zoneId: 'ezoic.com_hb_display'
                    }
                }, {
                    bidder: 'onetag',
                    params: {
                        pubId: '62499636face9dc'
                    }
                }, {
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 728,
                            playerHeight: 90,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }, {
                    bidder: 'pulsepoint',
                    params: {
                        cf: '728x90',
                        cp: '562406',
                        ct: '719177'
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-medrectangle-4-0',
                mediaTypes: {
                    video: {
                        context: 'outstream',
                        playerSize: [
                            [336, 280]
                        ],
                        mimes: ["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"],
                        renderer: {
                            url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2',
                            render: function (bid) {
                                if (!(bid.vastXml === undefined || bid.vastXml === null)) {
                                    try {
                                        setTimeout(() => {
                                            var configObj = {
                                                width: bid.width,
                                                height: bid.height,
                                                vastTimeout: 5000,
                                                maxAllowedVastTagRedirects: 3,
                                                allowVpaid: true,
                                                autoPlay: true,
                                                preload: false,
                                                mute: true,
                                                adText: 'Ezoic'
                                            };
                                            outstreamPlayer(bid, bid.adUnitCode, configObj);
                                        }, 3000);
                                    } catch (e) {
                                        console.log(e);
                                        console.log('Error in rendering');
                                    }
                                }
                            },
                            backupOnly: true
                        }
                    }
                },
                bids: [{
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 336,
                            playerHeight: 280,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-medrectangle-4-0',
                mediaTypes: {
                    banner: {
                        sizes: [
                            [336, 280],
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '156983',
                        adSlot: 'e_under_second_paragraph_336x280'
                    }
                }, {
                    bidder: 'medianet',
                    params: {
                        cid: '8CUBCB617',
                        crid: '188911743'
                    }
                }, {
                    bidder: 'smilewanted',
                    params: {
                        zoneId: 'ezoic.com_hb_display'
                    }
                }, {
                    bidder: 'onetag',
                    params: {
                        pubId: '62499636face9dc'
                    }
                }, {
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 336,
                            playerHeight: 280,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }, {
                    bidder: 'pulsepoint',
                    params: {
                        cp: '562406',
                        ct: '719186',
                        cf: '336x280'
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-box-4-0',
                mediaTypes: {
                    video: {
                        context: 'outstream',
                        playerSize: [
                            [300, 250]
                        ],
                        mimes: ["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"],
                        renderer: {
                            url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2',
                            render: function (bid) {
                                if (!(bid.vastXml === undefined || bid.vastXml === null)) {
                                    try {
                                        setTimeout(() => {
                                            var configObj = {
                                                width: bid.width,
                                                height: bid.height,
                                                vastTimeout: 5000,
                                                maxAllowedVastTagRedirects: 3,
                                                allowVpaid: true,
                                                autoPlay: true,
                                                preload: false,
                                                mute: true,
                                                adText: 'Ezoic'
                                            };
                                            outstreamPlayer(bid, bid.adUnitCode, configObj);
                                        }, 3000);
                                    } catch (e) {
                                        console.log(e);
                                        console.log('Error in rendering');
                                    }
                                }
                            },
                            backupOnly: true
                        }
                    }
                },
                bids: [{
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 300,
                            playerHeight: 250,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-box-4-0',
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '156983',
                        adSlot: 'e_mid_content_300x250'
                    }
                }, {
                    bidder: 'medianet',
                    params: {
                        cid: '8CUBCB617',
                        crid: '188911743'
                    }
                }, {
                    bidder: 'smilewanted',
                    params: {
                        zoneId: 'ezoic.com_hb_display'
                    }
                }, {
                    bidder: 'onetag',
                    params: {
                        pubId: '62499636face9dc'
                    }
                }, {
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 300,
                            playerHeight: 250,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }, {
                    bidder: 'pulsepoint',
                    params: {
                        ct: '719185',
                        cf: '300x250',
                        cp: '562406'
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-box-1-0',
                mediaTypes: {
                    video: {
                        context: 'outstream',
                        playerSize: [
                            [336, 280]
                        ],
                        mimes: ["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"],
                        renderer: {
                            url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2',
                            render: function (bid) {
                                if (!(bid.vastXml === undefined || bid.vastXml === null)) {
                                    try {
                                        setTimeout(() => {
                                            var configObj = {
                                                width: bid.width,
                                                height: bid.height,
                                                vastTimeout: 5000,
                                                maxAllowedVastTagRedirects: 3,
                                                allowVpaid: true,
                                                autoPlay: true,
                                                preload: false,
                                                mute: true,
                                                adText: 'Ezoic'
                                            };
                                            outstreamPlayer(bid, bid.adUnitCode, configObj);
                                        }, 3000);
                                    } catch (e) {
                                        console.log(e);
                                        console.log('Error in rendering');
                                    }
                                }
                            },
                            backupOnly: true
                        }
                    }
                },
                bids: [{
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 336,
                            playerHeight: 280,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-box-1-0',
                mediaTypes: {
                    banner: {
                        sizes: [
                            [336, 280],
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '156983',
                        adSlot: 'e_sidebar_336x280'
                    }
                }, {
                    bidder: 'medianet',
                    params: {
                        cid: '8CUBCB617',
                        crid: '188911743'
                    }
                }, {
                    bidder: 'smilewanted',
                    params: {
                        zoneId: 'ezoic.com_hb_display'
                    }
                }, {
                    bidder: 'onetag',
                    params: {
                        pubId: '62499636face9dc'
                    }
                }, {
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 336,
                            playerHeight: 280,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }, {
                    bidder: 'pulsepoint',
                    params: {
                        ct: '719186',
                        cf: '336x280',
                        cp: '562406'
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-leader-1-0',
                mediaTypes: {
                    video: {
                        context: 'outstream',
                        playerSize: [
                            [336, 280]
                        ],
                        mimes: ["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"],
                        renderer: {
                            url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2',
                            render: function (bid) {
                                if (!(bid.vastXml === undefined || bid.vastXml === null)) {
                                    try {
                                        setTimeout(() => {
                                            var configObj = {
                                                width: bid.width,
                                                height: bid.height,
                                                vastTimeout: 5000,
                                                maxAllowedVastTagRedirects: 3,
                                                allowVpaid: true,
                                                autoPlay: true,
                                                preload: false,
                                                mute: true,
                                                adText: 'Ezoic'
                                            };
                                            outstreamPlayer(bid, bid.adUnitCode, configObj);
                                        }, 3000);
                                    } catch (e) {
                                        console.log(e);
                                        console.log('Error in rendering');
                                    }
                                }
                            },
                            backupOnly: true
                        }
                    }
                },
                bids: [{
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 336,
                            playerHeight: 280,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-leader-1-0',
                mediaTypes: {
                    banner: {
                        sizes: [
                            [336, 280],
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '156983',
                        adSlot: 'e_longest_content_336x280'
                    }
                }, {
                    bidder: 'medianet',
                    params: {
                        cid: '8CUBCB617',
                        crid: '188911743'
                    }
                }, {
                    bidder: 'smilewanted',
                    params: {
                        zoneId: 'ezoic.com_hb_display'
                    }
                }, {
                    bidder: 'onetag',
                    params: {
                        pubId: '62499636face9dc'
                    }
                }, {
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 336,
                            playerHeight: 280,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }, {
                    bidder: 'pulsepoint',
                    params: {
                        cf: '336x280',
                        cp: '562406',
                        ct: '719186'
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-box-3-0',
                mediaTypes: {
                    video: {
                        context: 'outstream',
                        playerSize: [
                            [728, 90]
                        ],
                        mimes: ["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"],
                        renderer: {
                            url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2',
                            render: function (bid) {
                                if (!(bid.vastXml === undefined || bid.vastXml === null)) {
                                    try {
                                        setTimeout(() => {
                                            var configObj = {
                                                width: bid.width,
                                                height: bid.height,
                                                vastTimeout: 5000,
                                                maxAllowedVastTagRedirects: 3,
                                                allowVpaid: true,
                                                autoPlay: true,
                                                preload: false,
                                                mute: true,
                                                adText: 'Ezoic'
                                            };
                                            outstreamPlayer(bid, bid.adUnitCode, configObj);
                                        }, 3000);
                                    } catch (e) {
                                        console.log(e);
                                        console.log('Error in rendering');
                                    }
                                }
                            },
                            backupOnly: true
                        }
                    }
                },
                bids: [{
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 728,
                            playerHeight: 90,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-box-3-0',
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90]
                        ]
                    }
                },
                bids: [{
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '156983',
                        adSlot: 'e_under_page_title_728x90'
                    }
                }, {
                    bidder: 'medianet',
                    params: {
                        cid: '8CUBCB617',
                        crid: '188911743'
                    }
                }, {
                    bidder: 'smilewanted',
                    params: {
                        zoneId: 'ezoic.com_hb_display'
                    }
                }, {
                    bidder: 'onetag',
                    params: {
                        pubId: '62499636face9dc'
                    }
                }, {
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 728,
                            playerHeight: 90,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }, {
                    bidder: 'pulsepoint',
                    params: {
                        cf: '728x90',
                        cp: '562406',
                        ct: '719177'
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-medrectangle-3-0',
                mediaTypes: {
                    video: {
                        context: 'outstream',
                        playerSize: [
                            [728, 90]
                        ],
                        mimes: ["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"],
                        renderer: {
                            url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2',
                            render: function (bid) {
                                if (!(bid.vastXml === undefined || bid.vastXml === null)) {
                                    try {
                                        setTimeout(() => {
                                            var configObj = {
                                                width: bid.width,
                                                height: bid.height,
                                                vastTimeout: 5000,
                                                maxAllowedVastTagRedirects: 3,
                                                allowVpaid: true,
                                                autoPlay: true,
                                                preload: false,
                                                mute: true,
                                                adText: 'Ezoic'
                                            };
                                            outstreamPlayer(bid, bid.adUnitCode, configObj);
                                        }, 3000);
                                    } catch (e) {
                                        console.log(e);
                                        console.log('Error in rendering');
                                    }
                                }
                            },
                            backupOnly: true
                        }
                    }
                },
                bids: [{
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 728,
                            playerHeight: 90,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-medrectangle-3-0',
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90]
                        ]
                    }
                },
                bids: [{
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '156983',
                        adSlot: 'e_under_first_paragraph_728x90'
                    }
                }, {
                    bidder: 'medianet',
                    params: {
                        cid: '8CUBCB617',
                        crid: '188911743'
                    }
                }, {
                    bidder: 'smilewanted',
                    params: {
                        zoneId: 'ezoic.com_hb_display'
                    }
                }, {
                    bidder: 'onetag',
                    params: {
                        pubId: '62499636face9dc'
                    }
                }, {
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 728,
                            playerHeight: 90,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }, {
                    bidder: 'pulsepoint',
                    params: {
                        cp: '562406',
                        ct: '719177',
                        cf: '728x90'
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-banner-1-0',
                mediaTypes: {
                    video: {
                        context: 'outstream',
                        playerSize: [
                            [300, 250]
                        ],
                        mimes: ["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"],
                        renderer: {
                            url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2',
                            render: function (bid) {
                                if (!(bid.vastXml === undefined || bid.vastXml === null)) {
                                    try {
                                        setTimeout(() => {
                                            var configObj = {
                                                width: bid.width,
                                                height: bid.height,
                                                vastTimeout: 5000,
                                                maxAllowedVastTagRedirects: 3,
                                                allowVpaid: true,
                                                autoPlay: true,
                                                preload: false,
                                                mute: true,
                                                adText: 'Ezoic'
                                            };
                                            outstreamPlayer(bid, bid.adUnitCode, configObj);
                                        }, 3000);
                                    } catch (e) {
                                        console.log(e);
                                        console.log('Error in rendering');
                                    }
                                }
                            },
                            backupOnly: true
                        }
                    }
                },
                bids: [{
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 300,
                            playerHeight: 250,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-banner-1-0',
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '156983',
                        adSlot: 'e_long_content_300x250'
                    }
                }, {
                    bidder: 'medianet',
                    params: {
                        cid: '8CUBCB617',
                        crid: '188911743'
                    }
                }, {
                    bidder: 'smilewanted',
                    params: {
                        zoneId: 'ezoic.com_hb_display'
                    }
                }, {
                    bidder: 'onetag',
                    params: {
                        pubId: '62499636face9dc'
                    }
                }, {
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 300,
                            playerHeight: 250,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }, {
                    bidder: 'pulsepoint',
                    params: {
                        cf: '300x250',
                        cp: '562406',
                        ct: '719185'
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-box-2-0',
                mediaTypes: {
                    video: {
                        context: 'outstream',
                        playerSize: [
                            [728, 90]
                        ],
                        mimes: ["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"],
                        renderer: {
                            url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2',
                            render: function (bid) {
                                if (!(bid.vastXml === undefined || bid.vastXml === null)) {
                                    try {
                                        setTimeout(() => {
                                            var configObj = {
                                                width: bid.width,
                                                height: bid.height,
                                                vastTimeout: 5000,
                                                maxAllowedVastTagRedirects: 3,
                                                allowVpaid: true,
                                                autoPlay: true,
                                                preload: false,
                                                mute: true,
                                                adText: 'Ezoic'
                                            };
                                            outstreamPlayer(bid, bid.adUnitCode, configObj);
                                        }, 3000);
                                    } catch (e) {
                                        console.log(e);
                                        console.log('Error in rendering');
                                    }
                                }
                            },
                            backupOnly: true
                        }
                    }
                },
                bids: [{
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 728,
                            playerHeight: 90,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }]
            }, {
                code: 'div-gpt-ad-etcgamer_com-box-2-0',
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90]
                        ]
                    }
                },
                bids: [{
                    bidder: 'pubmatic',
                    params: {
                        publisherId: '156983',
                        adSlot: 'e_top_of_page_728x90'
                    }
                }, {
                    bidder: 'medianet',
                    params: {
                        cid: '8CUBCB617',
                        crid: '188911743'
                    }
                }, {
                    bidder: 'smilewanted',
                    params: {
                        zoneId: 'ezoic.com_hb_display'
                    }
                }, {
                    bidder: 'onetag',
                    params: {
                        pubId: '62499636face9dc'
                    }
                }, {
                    bidder: 'oneVideo',
                    params: {
                        pubId: 'EzoicInc',
                        video: {
                            playerWidth: 728,
                            playerHeight: 90,
                            mimes: ['video/mp4', 'application/javascript'],
                            protocols: [2],
                            api: [1, 2],
                            placement: 2
                        }
                    }
                }, {
                    bidder: 'pulsepoint',
                    params: {
                        ct: '719177',
                        cf: '728x90',
                        cp: '562406'
                    }
                }]
            }]
        ], false, ['/detroitchicago/denver.js'], true, true, true, true);
    </script>
    <script>
        var __ez_tkn_evnt = function () {
            if (typeof (_ezaq) != 'undefined') {
                if (typeof window.ezogtk !== "undefined" && window.ezogtk !== "") {
                    __ez.bit.AddAndFire(_ezaq.page_view_id, [new __ezDotData("ext_user_hash", window.ezogtk)]);
                }
            }
        };
        document.addEventListener("DOMContentLoaded", __ez.queue.addFunc("__ez_tkn_evnt", "__ez_tkn_evnt", event, false,
            ['/detroitchicago/minneapolis.js', '/detroitchicago/memphis.js'], true, true, false, true));
    </script>
    <script async="" data-ezscrex="false">
        __ez_fad_load(0, 0);
        __ez_fad_doc_ht = __ez_fad_docht();
        __ez_fad_vp_ht = __ez_fad_vpht();

        function __ez_fad_scroll() {
            return window.pageYOffset || (document.documentElement || document.body.parentNode || document.body)
                .scrollTop
        }
        var __ez_fad_scrollint = setInterval(function () {
            var sy = __ez_fad_scroll();
            var isShortPage = __ez_fad_doc_ht <= (__ez_fad_vh + 100);
            var bot = (__ez_fad_vp_ht + sy);
            var botThresh = bot + __ez_fad_vp_ht;
            for (var divid in __ez_fad_divpos) {
                if (__ez_fad_fastdiv.indexOf(divid) != -1) {
                    continue;
                }
                var divPos = __ez_fad_divpos[divid];
                if (divPos > 0 && divPos > sy && divPos < (sy + 200)) {
                    if (typeof __ez_fad_instaslots[divid] == 'function') {
                        __ez_fad_instaslots[divid]();
                    }
                } else if (divPos > 0 && divPos > sy && divPos < (sy + 600)) {
                    if (typeof __ez_fad_instaslots[divid] == 'function') {
                        __ez_fad_viewslots[divid]();
                    }
                }
            }
            __ez_fad_chkpos();
            if (ezslit_run[0] != true) {
                __ez_fad_load(0, 0);
            }
            if ((sy > 0 || isShortPage) && ezslit_run[1] != true) {
                __ez_fad_load(1, null);
                __ez_fad_load(5, null);
            }
            if ((sy > 100 || isShortPage) && ezslit_run[2] != true) {
                __ez_fad_load(2, null);
            }
            if (sy > (__ez_fad_vp_ht * .75) && ezslit_run[3] != true) {
                __ez_fad_load(3, null);
            }
            if (ezslit_run[1] == true && ezslit_run[2] == true && ezslit_run[3] == true) {
                clearInterval(__ez_fad_scrollint);
            }
        }, 500);

        function __ez_fad_chkpos() {
            if (typeof __ez_fad_divs[4] != 'undefined') {
                for (var i = 0; i < __ez_fad_divs[4].length; i++) {
                    var id = __ez_fad_divs[4][i];
                    __ez_fad_divs[4][i] = null;
                    __ez_fad_position([id]);
                };
            }
        }
    </script>
    <script>
        (function (f, a) {
            function g(b, a, c) {
                b.addEventListener ? b.addEventListener(a, c) : b.attachEvent("on" + a, function () {
                    c.call(b)
                })
            }

            function k(b) {
                b && ("string" == typeof b["class"] && b["class"] && a.getElementById("uglipop_popbox")
                    .setAttribute("class", b["class"]), b.keepLayout && !b["class"] && a.getElementById(
                        "uglipop_popbox").setAttribute("style",
                        "position:relative;height:300px;width:300px;background-color:white;opacity:1;"),
                    "string" == typeof b.content && b.content && "html" == b.source && (a.getElementById(
                        "uglipop_popbox").innerHTML = b.content), "string" == typeof b.content && b.content &&
                    "div" == b.source && (a.getElementById("uglipop_popbox").innerHTML = a.getElementById(b
                        .content).innerHTML));
                a.getElementById("uglipop_overlay_wrapper").style.display = "";
                a.getElementById("uglipop_overlay").style.display = "";
                a.getElementById("uglipop_content_fixed").style.display = ""
            }

            function h() {
                a.getElementById("uglipop_overlay_wrapper").style.display = "none";
                a.getElementById("uglipop_overlay").style.display = "none";
                a.getElementById("uglipop_content_fixed").style.display = "none"
            }
            g(a, "DOMContentLoaded", function () {
                var b = a.createElement("div"),
                    e = a.createElement("div"),
                    c = a.createElement("div"),
                    d = a.createElement("div");
                e.id = "uglipop_content_fixed";
                e.setAttribute("style",
                    "position:fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);opacity:1;z-index:10000000;"
                    );
                c.id = "uglipop_popbox";
                d.id = "uglipop_overlay_wrapper";
                d.setAttribute("style", "position:absolute;top:0;bottom:0;left:0;right:0;display:none");
                b.id = "uglipop_overlay";
                b.setAttribute("style",
                    "position:fixed;top:0;bottom:0;left:0;right:0;opacity:0.3;width:100%;height:100%;background-color:black;"
                    );
                d.appendChild(b);
                e.appendChild(c);
                a.body.appendChild(d);
                a.body.appendChild(e);
                a.getElementById("uglipop_overlay_wrapper").style.display = "none";
                a.getElementById("uglipop_overlay").style.display = "none";
                a.getElementById("uglipop_content_fixed").style.display = "none";
                d.addEventListener("click", h);
                g(f, "keydown", function (a) {
                    27 == a.keyCode && h()
                });
                f.uglipop = k
            })
        })(window, document);
        var ezRBA = (function () {
            function init() {
                var reportAdsBtns = document.querySelectorAll('.ez-report-ad-button');
                for (var i = 0; i < reportAdsBtns.length; i++) {
                    reportAdsBtns[i].addEventListener('click', function (e) {
                        var url = '<iframe src="https://svc.ezoic.com/pub/reportads/reportads.html' + e
                            .target.getAttribute('name') +
                            '" width="400" height="500" style="border-radius: 10px; box-shadow: 2px 2px 30px 6px rgba(0,0,0,0.75); border: 1px solid black;"></iframe>'
                        uglipop({
                            class: 'none',
                            source: 'html',
                            content: url,
                        });
                    });
                }

                function bindEvent(element, eventName, eventHandler) {
                    if (element.addEventListener) {
                        element.addEventListener(eventName, eventHandler, false);
                    } else if (element.attachEvent) {
                        element.attachEvent('on' + eventName, eventHandler);
                    }
                }
                bindEvent(window, 'message', function (e) {
                    if (e.data === 'close-report-ad-modal') {
                        document.getElementById('uglipop_overlay_wrapper').style.display = 'none';
                        document.getElementById('uglipop_overlay').style.display = 'none';
                        document.getElementById('uglipop_content_fixed').style.display = 'none';
                    }
                })
            }
            return {
                init: init
            };
        })();
        ezRBA.init();
    </script>
    <script data-cfasync="false">
        (function () {
            var addListeners = function (eltype, els) {
                for (var en = 0; en < els.length; en++) {
                    var el = els[en];
                    if (el.complete == false || (typeof (el.readyState) != 'undefined' && el.readyState < 4)) {
                        var src = el.getAttribute('src') || el.currentSrc;
                        if (typeof (el.readyState) != 'undefined' && el.readyState == 0) {
                            el.addEventListener('loadstart', function (e) {
                                var src = e.currentTarget.getAttribute('src') || e.currentSrc;
                                window["ezorqs"](e, src);
                            });
                        } else {
                            var src = el.getAttribute('src') || el.currentSrc;
                            window["ezorqs"](el, src);
                        }
                        el.addEventListener('load', function (e) {
                            var src = e.currentTarget.getAttribute('src') || e.srcElement.currentSrc;
                            window["ezorqe"](e, src);
                        });
                        el.addEventListener('loadeddata', function (e) {
                            var src = e.currentTarget.getAttribute('src') || e.srcElement.currentSrc;
                            window["ezorqe"](e, src);
                        });
                        el.addEventListener('error', function (e) {
                            var src = e.currentTarget.getAttribute('src') || e.srcElement.currentSrc;
                            window["ezorqe"](e, src);
                        });
                    }
                }
            };
            var CssLoadedListeners = function (els) {
                for (var en = 0; en < els.length; en++) {
                    var el = els[en];
                    if ((el.getAttribute('rel') == 'preload' || el.getAttribute('rel') == 'stylesheet') && el
                        .getAttribute('href') != null) {
                        if (isStyleSheetLoaded(el.getAttribute('href'))) {
                            window["ezorqs"](el, el.getAttribute('href'));
                            var img = document.createElement('img');
                            img.onerror = function (e) {
                                if (typeof e.path != "undefined" && typeof e.path[0].currentSrc !=
                                    "undefined") {
                                    window["ezorqe"](el, e.path[0].currentSrc);
                                } else if (typeof e.srcElement != "undefined" && typeof e.srcElement.href !=
                                    "undefined") {
                                    window["ezorqe"](el, e.srcElement.href);
                                }
                            };
                            img.src = el.getAttribute('href');
                        } else {}
                    } else {}
                }
            };

            function isStyleSheetLoaded(url) {
                for (var i = 0; i < document.styleSheets.length; i++) {
                    if (document.styleSheets[i].href == url) {
                        return true
                    }
                }
                return false;
            }
            __ez_addAllListeners = function () {
                addListeners('img', document.querySelectorAll('img'));
                addListeners('video', document.querySelectorAll('video'));
                addListeners('audio', document.querySelectorAll('audio'));
                CssLoadedListeners(document.querySelectorAll('link'));
                if (typeof window["__ez"]["ssaf"] != "undefined" && window["__ez"]["ssaf"].indexOf(16) > -1) {
                    if (typeof window["__ez"]["sshsdef"] !== "undefined" && window["__ez"]["sshsdef"] ===
                        false) {
                        if (Element.prototype.addEventListener) {
                            if (typeof window["onload"] == "function") {
                                window["addEventListener"]("load", window["onload"]);
                                window["onload"] = null;
                            }
                            if (typeof document["onload"] == "function") {
                                document["addEventListener"].addEventListener("load", document["onload"]);
                                document["onload"] = null;
                            }
                        }
                    }
                }
            }
            __ez.queue.addFunc("__ez_addAllListeners", "__ez_addAllListeners", null, false, [
                '/detroitchicago/tulsa.js'
            ], true, true, true, true);
        }());
    </script>
    <script style="display:none;">
        var __ez_dims = (function () {
            var setCookie = function (name, content, expiry) {
                return document.cookie = name + '=' + content + ((expiry) ? ';expires=' + (new Date(Math
                    .floor(new Date().getTime() + expiry * 1000)).toUTCString()) : '') + ';path=/';
            };
            var ffid = 1;
            var oh = window.screen.height;
            var ow = window.screen.width;
            var h = ffid === 1 ? oh : (oh > ow) ? oh : ow;
            var w = ffid === 1 ? ow : (oh > ow) ? ow : oh;
            var uh = window.innerHeight || document.documentElement.clientHeight || document
                .getElementsByTagName('body')[0].clientHeight;
            var uw = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName(
                'body')[0].clientWidth;
            setCookie('ezds', encodeURIComponent('ffid=' + ffid + ',w=' + w + ',h=' + h), (31536e3 * 7));
            setCookie('ezohw', encodeURIComponent('w=' + uw + ',h=' + uh), (31536e3 * 7));
        })();
    </script>
    <script style="display:none;" async="">
    </script>
    <div id="uglipop_overlay_wrapper" style="position:absolute;top:0;bottom:0;left:0;right:0;display:none">
        <div id="uglipop_overlay"
            style="position: fixed; inset: 0px; opacity: 0.3; width: 100%; height: 100%; background-color: black; display: none;">
        </div>
    </div>
    <div id="uglipop_content_fixed"
        style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 1; z-index: 10000000; display: none;">
        <div id="uglipop_popbox"></div>
    </div>
    <div id="cboxOverlay" style="display: none;"></div>
    <div id="colorbox" class="" role="dialog" tabindex="-1" style="display: none;">
        <div id="cboxWrapper">
            <div>
                <div id="cboxTopLeft" style="float: left;"></div>
                <div id="cboxTopCenter" style="float: left;"></div>
                <div id="cboxTopRight" style="float: left;"></div>
            </div>
            <div style="clear: left;">
                <div id="cboxMiddleLeft" style="float: left;"></div>
                <div id="cboxContent" style="float: left;">
                    <div id="cboxTitle" style="float: left;"></div>
                    <div id="cboxCurrent" style="float: left;"></div><button type="button"
                        id="cboxPrevious"></button><button type="button" id="cboxNext"></button><button type="button"
                        id="cboxSlideshow"></button>
                    <div id="cboxLoadingOverlay" style="float: left;"></div>
                    <div id="cboxLoadingGraphic" style="float: left;"></div>
                </div>
                <div id="cboxMiddleRight" style="float: left;"></div>
            </div>
            <div style="clear: left;">
                <div id="cboxBottomLeft" style="float: left;"></div>
                <div id="cboxBottomCenter" style="float: left;"></div>
                <div id="cboxBottomRight" style="float: left;"></div>
            </div>
        </div>
        <div style="position: absolute; width: 9999px; visibility: hidden; display: none; max-width: none;"></div>
    </div>
</body>

</html>