mmcore.SetCookie('mmid','621415292|FgAAAAqb3k8hLQwAAA==',365,1);mmcore.SetCookie('pd','112904318|GQAAAAoBQpveTyEtDLBk+bMFALxe7S8dmdJIDwAAAPvz5nxCjdJIAAAAAP//////////AAZEaXJlY3QBOwwCAAMAAAAAAAAAAP///////////////wAAAAAAAUU=',365);mmcore.SetCookie('srv','nycvwcgus04',365);(function(){if(typeof(mmcore.GenInfo)!='object')mmcore.GenInfo={};if(typeof mmcore.recommendations=='undefined')mmcore.recommendations={};
if(typeof mmcore.recommendationErrors=='undefined')mmcore.recommendationErrors={};
mmcore.recommendationErrors['json_InvalidFilters']='[]';
mmcore.recommendationErrors['InvalidFilters']=eval(mmcore.recommendationErrors['json_InvalidFilters']);
mmcore.EH=function(e){var s=e.message+'\r\n';if(!window.mm_error)window.mm_error=s;else window.mm_error+=s;};
try{
/*! 1.0.5 - 2015-06-22 1:55:36 */

/* !! @name addSnippets @version 0.0.1 */
!function(){"undefined"==typeof mmcore.snippets&&(mmcore.snippets={})}(),
/* !! @name inArray @version 0.0.1 */
function(a){a.inArray=function(a,b){for(var c=!1,d=0;d<b.length;d++)b[d]===a&&(c=!0);return c}}(mmcore.snippets=mmcore.snippets||{}),
/* !! @name Grep @version 0.0.1 */
function(a){a.grep=function(a,b,c){var d,e=[],f=0,g=a.length;for(c=!!c;g>f;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e}}(mmcore.snippets=mmcore.snippets||{}),
/* !! @name Style @version 0.1.6 */
function(a){mmcore.snippets=mmcore.snippets||{},mmcore.snippets.Style=function(b){var c,d=function(a){var b="";do b+=Math.random().toString(36).substr(2);while(b.length<a);return b.substr(-a)},e=function(){c=a.createElement("style"),c.type="text/css",c.media="screen",c.className="mm_"+d(7);var e=a.getElementById(mmcore.cprefix+1);e.parentNode.insertBefore(c,e),g(b)},f=function(b){return b&&(b.parentNode||(b=a.querySelector("."+b.className)),b)?b:void 0},g=function(a){c=f(c),c&&a&&(c.styleSheet?c.styleSheet.cssText+=a:c.innerHTML+=a)},h=function(){c=f(c),c&&(c.parentNode.removeChild(c),c=null)};return e(),{attach:g,detach:h}}}(document),
/* !! @name Deferred @version 0.0.4 */
function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o=[].slice;b="pending",d="resolved",c="rejected",n=function(a){for(var b=0;this.length>b;b++)a.call(this,this[b],b,this)},m=function(a){if(null===this||"undefined"==typeof this)throw new TypeError("_reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var b,c=Object(this),d=c.length>>>0,e=0;if(arguments.length>=2)b=arguments[1];else{for(;d>e&&!e in c;)e++;if(e>=d)throw new TypeError("Reduce of empty array with no initial value");b=c[e++]}for(;d>e;e++)e in c&&(b=a(b,c[e],e,c));return b},Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)}),h=function(a,b){return null!=a?a.hasOwnProperty(b):void 0},i=function(a){return h(a,"length")&&h(a,"callee")},j=function(a){return h(a,"promise")&&"function"==typeof(null!=a?a.promise:void 0)},g=function(a){return i(a)?g(Array.prototype.slice.call(a)):Array.isArray(a)?m.call(a,function(a,b){return Array.isArray(b)?a.concat(g(b)):(a.push(b),a)},[]):[a]},e=function(a,b){return 0>=a?b():function(){return--a<1?b.apply(this,arguments):void 0}},k=function(a,b){return function(){var c;return c=[a].concat(Array.prototype.slice.call(arguments,0)),b.apply(this,c)}},f=function(a,b,c){var d,e,f,h,i;for(h=g(a),i=[],e=0,f=h.length;f>e;e++)d=h[e],"[object Arguments]"!==Object.prototype.toString.call(b)&&void 0===b.length&&(b.length=0),i.push(d.call.apply(d,[c].concat(o.call(b))));return i},a=function(){var e,h,i,k,l,m,n;return n=b,k=[],l=[],m=[],i={resolved:{},rejected:{},pending:{}},this.promise=function(e){var h,p;return e=e||{},e.state=function(){return n},p=function(a,c,d){return function(){return n===b&&c.push.apply(c,g(arguments)),a()&&f(arguments,i[d]),e}},e.done=p(function(){return n===d},k,d),e.fail=p(function(){return n===c},l,c),e.progress=p(function(){return n!==b},m,b),e.always=function(){var a;return(a=e.done.apply(e,arguments)).fail.apply(a,arguments)},h=function(b,c,d){var f,g;return g=new a,f=function(a,b,c){return c?e[a](function(){var a,d;return a=1<=arguments.length?o.call(arguments,0):[],d=c.apply(null,a),j(d)?d.done(g.resolve).fail(g.reject).progress(g.notify):g[b](d)}):e[a](g[b])},f("done","resolve",b),f("fail","reject",c),f("progress","notify",d),g},e.pipe=h,e.then=h,null==e.promise&&(e.promise=function(){return e}),e},this.promise(this),e=this,h=function(a,c,d){return function(){return n===b?(n=a,i[a]=arguments,f(c,i[a],d),e):this}},this.resolve=h(d,k),this.reject=h(c,l),this.notify=h(b,m),this.resolveWith=function(a,b){return h(d,k,a).apply(null,b)},this.rejectWith=function(a,b){return h(c,l,a).apply(null,b)},this.notifyWith=function(a,c){return h(b,m,a).apply(null,c)},this},l=function(){var b,c,d,f,h,i,k;if(c=g(arguments),1===c.length)return j(c[0])?c[0]:(new a).resolve(c[0]).promise();if(h=new a,!c.length)return h.resolve().promise();for(f=[],d=e(c.length,function(){return h.resolve.apply(h,f)}),n.call(c,function(a,b){return j(a)?a.done(function(){var a;return a=1<=arguments.length?o.call(arguments,0):[],f[b]=a.length>1?a:a[0],d()}):(f[b]=a,d())}),i=0,k=c.length;k>i;i++)b=c[i],j(b)&&b.fail(h.reject);return h.promise()},mmcore.Deferred=function(){return new a},mmcore.when=l}.call(this),
/* !! @name EventManager @version 0.0.1 */
function(){mmcore.snippets=mmcore.snippets||{},mmcore.snippets.EventManager=function(){var a={},b={};this.trigger=function(c,d,e){a[c]={event_data:d,callback:e},b[c]=b[c]||[];for(var f=0;f<b[c].length;f++)try{b[c][f](d)}catch(g){mmcore.EH&&mmcore.EH(g)}e&&e()},this.on=function(c,d){var e=a[c];if(e){try{d(e.event_data)}catch(f){mmcore.EH&&mmcore.EH(f)}setTimeout(function(){e.callback&&e.callback(),e.callback=null},0)}b[c]=b[c]||[],b[c].push(d)}},mmcore.snippets.EventManager.call(mmcore)}(),
/* !! @name printFix @version 0.0.1 */
function(){function a(a,b){a.addEventListener?a.addEventListener("beforeprint",b,!1):a.attachEvent&&a.attachEvent("onbeforeprint",b)}/msie|Trident/i.test(navigator.userAgent)&&a(window,function(){for(var a=document.getElementsByTagName("script"),b=a.length;b--;)(a[b].id||"").match(mmcore.cprefix)&&a[b].removeAttribute("src")})}(),
/* !! @name WaitFor @version 0.1.1 */
function(){"use strict";mmcore.waitFor=function(a,b){var c,d;return"string"==typeof a&&(a=function(){return!!document.querySelector(a)}),d=mmcore.Deferred(),d.isComplete=function(){return"pending"!==d.state()},b=b||{},b.interval=b.interval||50,b.isNotStoppedOnDocumentReadiness=b.isNotStoppedOnDocumentReadiness||!1,b.isNotPeriodicallyChecked=b.isNotPeriodicallyChecked||!1,c=function(){d.isComplete()||(a.call(d)&&d.resolve(),d.isComplete()||(!b.isNotStoppedOnDocumentReadiness&&(mmcore.$&&mmcore.$.isReady||!mmcore.$&&"complete"===document.readyState)?d.reject():b.isNotPeriodicallyChecked||setTimeout(c,b.interval)))},b.hasOwnProperty("initializer")&&b.initializer.call(d),c(),d.isComplete()||(b.hasOwnProperty("timeout")&&!function(){var a=setTimeout(d.reject,b.timeout);d.always(function(){clearTimeout(a)})}(),b.isNotStoppedOnDocumentReadiness||(b.isNotPeriodicallyChecked?mmcore.AddDocLoadHandler(d.reject):mmcore.AddDocLoadHandler(c))),d.promise()}}(),
/* !! @name Request @version 0.0.1 */
function(a,b){var c="mmevents",d=3e3;a.request=function(e,f,g){var h=b();return a.SetPageID(e||c),a._async=!f,a.CGRequest(h.resolve),setTimeout(function(){h.reject("timeout error")},g||d),h.promise()}}(mmcore,mmcore.Deferred),
/* !! @name hooks @version 0.0.1 */
mmcore._AddRenderer=function(a){return function(){var b={arg:arguments};mmcore.trigger("core_add_renderer_before",b);var c=a.apply(this,arguments);return mmcore.trigger("core_add_renderer_after",b),c}}(mmcore._AddRenderer),
/* !! @name Campaign @version 0.1.2 */
function(a,b,c){"use strict";var d=function(a,b){this.name=a,this.elementNames=[],this.contents={},this.prefix=b||"mm_",this.preventDefaultRendering(),mmcore.HideMaxyboxes=function(){};var c=this;mmcore.on("core_request_complete",function(a){for(var b=c.getElements(),d=0;d<b.length;d++){var e=b[d];if(a.testContent){var f=a.testContent[e].c;f&&(c.contents[e]=f.join(),a.testContent[e].c=[])}}})};d.prototype.preventDefaultRendering=function(){var a=this;mmcore.on("core_add_renderer_after",function(c){var d=c.arg[0],e=a.getElements();e.length&&b(d,e)&&(mmcore._r_mbs[d]=1,a.elementNames.push(d))})},d.prototype.hide=function(b,c){c=c||"position: relative !important; left:-99999px !important";var d=b+"{"+c+"}";this.refStyle?this.refStyle.attach(d):this.refStyle=a(d)},d.prototype.show=function(){this.refStyle&&this.refStyle.detach(),this.refStyle=null},d.prototype.getElements=function(){var a=this.getExperience(),b=[];if("object"==typeof mmcore._testContent&&a)for(var c in mmcore._testContent)/undefined|Default/.test(a[c.toLowerCase().replace(this.prefix,"")])||b.push(c);return b},d.prototype.getExperience=function(){return mmcore.GenInfo.hasOwnProperty(this.name)?mmcore.GenInfo[this.name]:null},d.prototype.isDefault=function(){return!this.getElements().length},d.prototype.render=function(){var d=a(),e=this,f=this.elementNames;arguments.length&&(f=c(arguments,function(a){return-1!=b(a,f)}));for(var g in mmcore._renderers)if(b(g,f)&&"function"==typeof mmcore._renderers[g])try{d.attach(e.contents[g]),mmcore._renderers[g].call(e)}catch(h){mmcore.EH(new Error(g+" "+h))}},mmcore.Campaign=d}(mmcore.snippets.Style,mmcore.snippets.inArray,mmcore.snippets.grep);
}catch(err){mmcore.EH(err);}
try{
/**
 * @name TestContent
 * @version 0.0.2
 */
;
(function () {
	var TEST_CONTENT = '_testContent';
	mmcore[TEST_CONTENT] = mmcore[TEST_CONTENT] || {};
	if (typeof tc == 'object' && tc !== window.tc) {
		for (var key in tc) {
			if (tc.hasOwnProperty(key)) {
				mmcore[TEST_CONTENT][key] = tc[key];
			}
		}
		mmcore.trigger('core_request_complete', {
			testContent: tc
		});
	}
	
}());
}catch(err){mmcore.EH(err);}
try{
mmcore.AddDocLoadHandler(function () {
	//Use only postponed action ($Action)
	var listenerClickOnFindIt = function (page) {
		var n = 20;
		var wait = function () {
			var isSubmitted = false,
				form = $("#searchSubView\\:searchForm, #WHGWR_searchForm");
			if (form.length) {
				if(form.data('events') && form.data('events').submit){
					var searchForm = form.data('events').submit[0];
					searchForm.handler = (function (fn) {
						return function () {
							var out = fn.apply(this, arguments);
							if (out !== false && isSubmitted === false) {
								isSubmitted = true;
								mmcore.trigger('submit_find_it', {
									form: 'searchForm',
									page: page
								});
							}
							return out;
						};
					}(searchForm.handler));
				} else{
					mmcore.EH('trigger_FindIt is broken');
				}

			} else if (--n > 0) {
				setTimeout(wait, 100);
			}
		};
		wait();

	};
	$(function () {
		var linkCanonical = $('link[rel=canonical]');
		if (linkCanonical.length) {
			var page = 'http://' + location.hostname + '/';
			if (linkCanonical.attr('href').toLowerCase() === page) {
				listenerClickOnFindIt('HomePage');
			} else {
				listenerClickOnFindIt('Other');
			}
		} else if (location.pathname === '/') {
			listenerClickOnFindIt('HomePage');
		} else {
			listenerClickOnFindIt('Other');
		}
	});

});
}catch(err){mmcore.EH(err);}
if(typeof mmcore._callback=='object'&&typeof mmcore._callback[1]=='function'){try{mmcore._callback[1]();}catch(err){mmcore.EH(err);}
finally{mmcore._callback[1]=null;}}
})();