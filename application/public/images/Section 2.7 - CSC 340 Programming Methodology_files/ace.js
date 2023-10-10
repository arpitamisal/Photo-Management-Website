(function(){var e=function(){return this}()
!e&&"undefined"!=typeof window&&(e=window)
var t=function(e,i,n){"string"==typeof e?(2==arguments.length&&(n=i),t.modules[e]||(t.payloads[e]=n,t.modules[e]=null)):t.original?t.original.apply(this,arguments):(console.error("dropping module because define wasn't a string."),console.trace())}
t.modules={},t.payloads={}
var i=function(e,t,i){if("string"==typeof t){var s=o(e,t)
if(null!=s)return i&&i(),s}else if("[object Array]"===Object.prototype.toString.call(t)){for(var r=[],a=0,l=t.length;a<l;++a){var h=o(e,t[a])
if(null==h&&n.original)return
r.push(h)}return i&&i.apply(null,r)||!0}},n=function(e,t){var s=i("",e,t)
return null==s&&n.original?n.original.apply(this,arguments):s},s=function(e,t){if(-1!==t.indexOf("!")){var i=t.split("!")
return s(e,i[0])+"!"+s(e,i[1])}if("."==t.charAt(0))for(t=e.split("/").slice(0,-1).join("/")+"/"+t;-1!==t.indexOf(".")&&n!=t;){var n=t
t=t.replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"")}return t},o=function(e,n){n=s(e,n)
var o=t.modules[n]
if(!o){if("function"==typeof(o=t.payloads[n])){var r={},a={id:n,uri:"",exports:r,packaged:!0},l=o((function(e,t){return i(n,e,t)}),r,a)
r=l||a.exports,t.modules[n]=r,delete t.payloads[n]}o=t.modules[n]=r||o}return o};(function(i){var s=e
i&&(e[i]||(e[i]={}),s=e[i]),s.define&&s.define.packaged||(t.original=s.define,s.define=t,s.define.packaged=!0),s.require&&s.require.packaged||(n.original=s.require,s.require=n,s.require.packaged=!0)})("ace")})(),ace.define("ace/lib/es6-shim",["require","exports","module"],(function(e,t,i){function n(e,t,i){Object.defineProperty(e,t,{value:i,enumerable:!1,writable:!0,configurable:!0})}String.prototype.startsWith||n(String.prototype,"startsWith",(function(e,t){return t=t||0,this.lastIndexOf(e,t)===t})),String.prototype.endsWith||n(String.prototype,"endsWith",(function(e,t){var i=this;(void 0===t||t>i.length)&&(t=i.length),t-=e.length
var n=i.indexOf(e,t)
return-1!==n&&n===t})),String.prototype.repeat||n(String.prototype,"repeat",(function(e){for(var t="",i=this;e>0;)1&e&&(t+=i),(e>>=1)&&(i+=i)
return t})),String.prototype.includes||n(String.prototype,"includes",(function(e,t){return-1!=this.indexOf(e,t)})),Object.assign||(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),i=1;i<arguments.length;i++){var n=arguments[i]
null!=n&&Object.keys(n).forEach((function(e){t[e]=n[e]}))}return t}),Object.values||(Object.values=function(e){return Object.keys(e).map((function(t){return e[t]}))}),Array.prototype.find||n(Array.prototype,"find",(function(e){for(var t=this.length,i=arguments[1],n=0;n<t;n++){var s=this[n]
if(e.call(i,s,n,this))return s}})),Array.prototype.findIndex||n(Array.prototype,"findIndex",(function(e){for(var t=this.length,i=arguments[1],n=0;n<t;n++){var s=this[n]
if(e.call(i,s,n,this))return n}})),Array.prototype.includes||n(Array.prototype,"includes",(function(e,t){return-1!=this.indexOf(e,t)})),Array.prototype.fill||n(Array.prototype,"fill",(function(e){for(var t=this,i=t.length>>>0,n=arguments[1],s=n>>0,o=s<0?Math.max(i+s,0):Math.min(s,i),r=arguments[2],a=void 0===r?i:r>>0,l=a<0?Math.max(i+a,0):Math.min(a,i);o<l;)t[o]=e,o++
return t})),Array.of||n(Array,"of",(function(){return Array.prototype.slice.call(arguments)}))})),ace.define("ace/lib/fixoldbrowsers",["require","exports","module","ace/lib/es6-shim"],(function(e,t,i){"use strict"
e("./es6-shim")})),ace.define("ace/lib/lang",["require","exports","module"],(function(e,t,i){"use strict"
t.last=function(e){return e[e.length-1]},t.stringReverse=function(e){return e.split("").reverse().join("")},t.stringRepeat=function(e,t){for(var i="";t>0;)1&t&&(i+=e),(t>>=1)&&(e+=e)
return i}
var n=/^\s\s*/,s=/\s\s*$/
t.stringTrimLeft=function(e){return e.replace(n,"")},t.stringTrimRight=function(e){return e.replace(s,"")},t.copyObject=function(e){var t={}
for(var i in e)t[i]=e[i]
return t},t.copyArray=function(e){for(var t=[],i=0,n=e.length;i<n;i++)e[i]&&"object"==typeof e[i]?t[i]=this.copyObject(e[i]):t[i]=e[i]
return t},t.deepCopy=function e(t){if("object"!=typeof t||!t)return t
var i
if(Array.isArray(t)){i=[]
for(var n=0;n<t.length;n++)i[n]=e(t[n])
return i}if("[object Object]"!==Object.prototype.toString.call(t))return t
for(var n in i={},t)i[n]=e(t[n])
return i},t.arrayToMap=function(e){for(var t={},i=0;i<e.length;i++)t[e[i]]=1
return t},t.createMap=function(e){var t=Object.create(null)
for(var i in e)t[i]=e[i]
return t},t.arrayRemove=function(e,t){for(var i=0;i<=e.length;i++)t===e[i]&&e.splice(i,1)},t.escapeRegExp=function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},t.escapeHTML=function(e){return(""+e).replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;")},t.getMatchOffsets=function(e,t){var i=[]
return e.replace(t,(function(e){i.push({offset:arguments[arguments.length-2],length:e.length})})),i},t.deferredCall=function(e){var t=null,i=function(){t=null,e()},n=function(e){return n.cancel(),t=setTimeout(i,e||0),n}
return n.schedule=n,n.call=function(){return this.cancel(),e(),n},n.cancel=function(){return clearTimeout(t),t=null,n},n.isPending=function(){return t},n},t.delayedCall=function(e,t){var i=null,n=function(){i=null,e()},s=function(e){null==i&&(i=setTimeout(n,e||t))}
return s.delay=function(e){i&&clearTimeout(i),i=setTimeout(n,e||t)},s.schedule=s,s.call=function(){this.cancel(),e()},s.cancel=function(){i&&clearTimeout(i),i=null},s.isPending=function(){return i},s}})),ace.define("ace/lib/oop",["require","exports","module"],(function(e,t,i){"use strict"
t.inherits=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})},t.mixin=function(e,t){for(var i in t)e[i]=t[i]
return e},t.implement=function(e,i){t.mixin(e,i)}})),ace.define("ace/lib/useragent",["require","exports","module"],(function(e,t,i){"use strict"
t.OS={LINUX:"LINUX",MAC:"MAC",WINDOWS:"WINDOWS"},t.getOS=function(){return t.isMac?t.OS.MAC:t.isLinux?t.OS.LINUX:t.OS.WINDOWS}
var n="object"==typeof navigator?navigator:{},s=(/mac|win|linux/i.exec(n.platform)||["other"])[0].toLowerCase(),o=n.userAgent||"",r=n.appName||""
t.isWin="win"==s,t.isMac="mac"==s,t.isLinux="linux"==s,t.isIE="Microsoft Internet Explorer"==r||r.indexOf("MSAppHost")>=0?parseFloat((o.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]):parseFloat((o.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]),t.isOldIE=t.isIE&&t.isIE<9,t.isGecko=t.isMozilla=o.match(/ Gecko\/\d+/),t.isOpera="object"==typeof opera&&"[object Opera]"==Object.prototype.toString.call(window.opera),t.isWebKit=parseFloat(o.split("WebKit/")[1])||void 0,t.isChrome=parseFloat(o.split(" Chrome/")[1])||void 0,t.isEdge=parseFloat(o.split(" Edge/")[1])||void 0,t.isAIR=o.indexOf("AdobeAIR")>=0,t.isAndroid=o.indexOf("Android")>=0,t.isChromeOS=o.indexOf(" CrOS ")>=0,t.isIOS=/iPad|iPhone|iPod/.test(o)&&!window.MSStream,t.isIOS&&(t.isMac=!0),t.isMobile=t.isIOS||t.isAndroid})),ace.define("ace/lib/dom",["require","exports","module","ace/lib/useragent"],(function(e,t,i){"use strict"
function n(){var e=a
a=null,e&&e.forEach((function(e){s(e[0],e[1])}))}function s(e,i,s){if("undefined"!=typeof document){if(a)if(s)n()
else if(!1===s)return a.push([e,i])
if(!r){var o=s
s&&s.getRootNode&&(o=s.getRootNode())&&o!=s||(o=document)
var l=o.ownerDocument||o
if(i&&t.hasCssString(i,o))return null
i&&(e+="\n/*# sourceURL=ace/css/"+i+" */")
var h=t.createElement("style")
h.appendChild(l.createTextNode(e)),i&&(h.id=i),o==l&&(o=t.getDocumentHead(l)),o.insertBefore(h,o.firstChild)}}}var o=e("./useragent")
t.buildDom=function e(t,i,n){if("string"==typeof t&&t){var s=document.createTextNode(t)
return i&&i.appendChild(s),s}if(!Array.isArray(t))return t&&t.appendChild&&i&&i.appendChild(t),t
if("string"!=typeof t[0]||!t[0]){for(var o=[],r=0;r<t.length;r++){var a=e(t[r],i,n)
a&&o.push(a)}return o}var l=document.createElement(t[0]),h=t[1],c=1
h&&"object"==typeof h&&!Array.isArray(h)&&(c=2)
for(r=c;r<t.length;r++)e(t[r],l,n)
return 2==c&&Object.keys(h).forEach((function(e){var t=h[e]
"class"===e?l.className=Array.isArray(t)?t.join(" "):t:"function"==typeof t||"value"==e||"$"==e[0]?l[e]=t:"ref"===e?n&&(n[t]=l):"style"===e?"string"==typeof t&&(l.style.cssText=t):null!=t&&l.setAttribute(e,t)})),i&&i.appendChild(l),l},t.getDocumentHead=function(e){return e||(e=document),e.head||e.getElementsByTagName("head")[0]||e.documentElement},t.createElement=function(e,t){return document.createElementNS?document.createElementNS(t||"http://www.w3.org/1999/xhtml",e):document.createElement(e)},t.removeChildren=function(e){e.innerHTML=""},t.createTextNode=function(e,t){return(t?t.ownerDocument:document).createTextNode(e)},t.createFragment=function(e){return(e?e.ownerDocument:document).createDocumentFragment()},t.hasCssClass=function(e,t){return-1!==(e.className+"").split(/\s+/g).indexOf(t)},t.addCssClass=function(e,i){t.hasCssClass(e,i)||(e.className+=" "+i)},t.removeCssClass=function(e,t){for(var i=e.className.split(/\s+/g);;){var n=i.indexOf(t)
if(-1==n)break
i.splice(n,1)}e.className=i.join(" ")},t.toggleCssClass=function(e,t){for(var i=e.className.split(/\s+/g),n=!0;;){var s=i.indexOf(t)
if(-1==s)break
n=!1,i.splice(s,1)}return n&&i.push(t),e.className=i.join(" "),n},t.setCssClass=function(e,i,n){n?t.addCssClass(e,i):t.removeCssClass(e,i)},t.hasCssString=function(e,t){var i,n=0
if(i=(t=t||document).querySelectorAll("style"))for(;n<i.length;)if(i[n++].id===e)return!0},t.removeElementById=function(e,t){(t=t||document).getElementById(e)&&t.getElementById(e).remove()}
var r,a=[]
if(t.useStrictCSP=function(e){r=e,0==e?n():a||(a=[])},t.importCssString=s,t.importCssStylsheet=function(e,i){t.buildDom(["link",{rel:"stylesheet",href:e}],t.getDocumentHead(i))},t.scrollbarWidth=function(e){var i=t.createElement("ace_inner")
i.style.width="100%",i.style.minWidth="0px",i.style.height="200px",i.style.display="block"
var n=t.createElement("ace_outer"),s=n.style
s.position="absolute",s.left="-10000px",s.overflow="hidden",s.width="200px",s.minWidth="0px",s.height="150px",s.display="block",n.appendChild(i)
var o=e&&e.documentElement||document&&document.documentElement
if(!o)return 0
o.appendChild(n)
var r=i.offsetWidth
s.overflow="scroll"
var a=i.offsetWidth
return r===a&&(a=n.clientWidth),o.removeChild(n),r-a},t.computedStyle=function(e,t){return window.getComputedStyle(e,"")||{}},t.setStyle=function(e,t,i){e[t]!==i&&(e[t]=i)},t.HAS_CSS_ANIMATION=!1,t.HAS_CSS_TRANSFORMS=!1,t.HI_DPI=!o.isWin||"undefined"!=typeof window&&window.devicePixelRatio>=1.5,o.isChromeOS&&(t.HI_DPI=!1),"undefined"!=typeof document){var l=document.createElement("div")
t.HI_DPI&&void 0!==l.style.transform&&(t.HAS_CSS_TRANSFORMS=!0),!o.isEdge&&void 0!==l.style.animationName&&(t.HAS_CSS_ANIMATION=!0),l=null}t.HAS_CSS_TRANSFORMS?t.translate=function(e,t,i){e.style.transform="translate("+Math.round(t)+"px, "+Math.round(i)+"px)"}:t.translate=function(e,t,i){e.style.top=Math.round(i)+"px",e.style.left=Math.round(t)+"px"}})),ace.define("ace/lib/net",["require","exports","module","ace/lib/dom"],(function(e,t,i){"use strict"
var n=e("./dom")
t.get=function(e,t){var i=new XMLHttpRequest
i.open("GET",e,!0),i.onreadystatechange=function(){4===i.readyState&&t(i.responseText)},i.send(null)},t.loadScript=function(e,t){var i=n.getDocumentHead(),s=document.createElement("script")
s.src=e,i.appendChild(s),s.onload=s.onreadystatechange=function(e,i){!i&&s.readyState&&"loaded"!=s.readyState&&"complete"!=s.readyState||(s=s.onload=s.onreadystatechange=null,i||t())}},t.qualifyURL=function(e){var t=document.createElement("a")
return t.href=e,t.href}})),ace.define("ace/lib/event_emitter",["require","exports","module"],(function(e,t,i){"use strict"
var n={},s=function(){this.propagationStopped=!0},o=function(){this.defaultPrevented=!0}
n._emit=n._dispatchEvent=function(e,t){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={})
var i=this._eventRegistry[e]||[],n=this._defaultHandlers[e]
if(i.length||n){"object"==typeof t&&t||(t={}),t.type||(t.type=e),t.stopPropagation||(t.stopPropagation=s),t.preventDefault||(t.preventDefault=o),i=i.slice()
for(var r=0;r<i.length&&(i[r](t,this),!t.propagationStopped);r++);return n&&!t.defaultPrevented?n(t,this):void 0}},n._signal=function(e,t){var i=(this._eventRegistry||{})[e]
if(i){i=i.slice()
for(var n=0;n<i.length;n++)i[n](t,this)}},n.once=function(e,t){var i=this
if(this.on(e,(function n(){i.off(e,n),t.apply(null,arguments)})),!t)return new Promise((function(e){t=e}))},n.setDefaultHandler=function(e,t){var i=this._defaultHandlers
if(i||(i=this._defaultHandlers={_disabled_:{}}),i[e]){var n=i[e],s=i._disabled_[e]
s||(i._disabled_[e]=s=[]),s.push(n)
var o=s.indexOf(t);-1!=o&&s.splice(o,1)}i[e]=t},n.removeDefaultHandler=function(e,t){var i=this._defaultHandlers
if(i){var n=i._disabled_[e]
if(i[e]==t)n&&this.setDefaultHandler(e,n.pop())
else if(n){var s=n.indexOf(t);-1!=s&&n.splice(s,1)}}},n.on=n.addEventListener=function(e,t,i){this._eventRegistry=this._eventRegistry||{}
var n=this._eventRegistry[e]
return n||(n=this._eventRegistry[e]=[]),-1==n.indexOf(t)&&n[i?"unshift":"push"](t),t},n.off=n.removeListener=n.removeEventListener=function(e,t){this._eventRegistry=this._eventRegistry||{}
var i=this._eventRegistry[e]
if(i){var n=i.indexOf(t);-1!==n&&i.splice(n,1)}},n.removeAllListeners=function(e){e||(this._eventRegistry=this._defaultHandlers=void 0),this._eventRegistry&&(this._eventRegistry[e]=void 0),this._defaultHandlers&&(this._defaultHandlers[e]=void 0)},t.EventEmitter=n})),ace.define("ace/lib/app_config",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],(function(e,t,i){function n(e){"undefined"!=typeof console&&console.warn&&console.warn.apply(console,arguments)}function s(e,t){var i=new Error(e)
i.data=t,"object"==typeof console&&console.error&&console.error(i),setTimeout((function(){throw i}))}var o=e("./oop"),r=e("./event_emitter").EventEmitter,a={setOptions:function(e){Object.keys(e).forEach((function(t){this.setOption(t,e[t])}),this)},getOptions:function(e){var t={}
if(e)Array.isArray(e)||(t=e,e=Object.keys(t))
else{var i=this.$options
e=Object.keys(i).filter((function(e){return!i[e].hidden}))}return e.forEach((function(e){t[e]=this.getOption(e)}),this),t},setOption:function(e,t){if(this["$"+e]!==t){var i=this.$options[e]
return i?i.forwardTo?this[i.forwardTo]&&this[i.forwardTo].setOption(e,t):(i.handlesSet||(this["$"+e]=t),void(i&&i.set&&i.set.call(this,t))):n('misspelled option "'+e+'"')}},getOption:function(e){var t=this.$options[e]
return t?t.forwardTo?this[t.forwardTo]&&this[t.forwardTo].getOption(e):t&&t.get?t.get.call(this):this["$"+e]:n('misspelled option "'+e+'"')}},l=function(){this.$defaultOptions={}};(function(){o.implement(this,r),this.defineOptions=function(e,t,i){return e.$options||(this.$defaultOptions[t]=e.$options={}),Object.keys(i).forEach((function(t){var n=i[t]
"string"==typeof n&&(n={forwardTo:n}),n.name||(n.name=t),e.$options[n.name]=n,"initialValue"in n&&(e["$"+n.name]=n.initialValue)})),o.implement(e,a),this},this.resetOptions=function(e){Object.keys(e.$options).forEach((function(t){var i=e.$options[t]
"value"in i&&e.setOption(t,i.value)}))},this.setDefaultValue=function(e,t,i){if(!e){for(e in this.$defaultOptions)if(this.$defaultOptions[e][t])break
if(!this.$defaultOptions[e][t])return!1}var n=this.$defaultOptions[e]||(this.$defaultOptions[e]={})
n[t]&&(n.forwardTo?this.setDefaultValue(n.forwardTo,t,i):n[t].value=i)},this.setDefaultValues=function(e,t){Object.keys(t).forEach((function(i){this.setDefaultValue(e,i,t[i])}),this)},this.warn=n,this.reportError=s}).call(l.prototype),t.AppConfig=l})),ace.define("ace/theme/textmate.css",["require","exports","module"],(function(e,t,i){i.exports='.ace-tm .ace_gutter {\n  background: #f0f0f0;\n  color: #333;\n}\n\n.ace-tm .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-tm .ace_fold {\n    background-color: #6B72E6;\n}\n\n.ace-tm {\n  background-color: #FFFFFF;\n  color: black;\n}\n\n.ace-tm .ace_cursor {\n  color: black;\n}\n        \n.ace-tm .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-tm .ace_storage,\n.ace-tm .ace_keyword {\n  color: blue;\n}\n\n.ace-tm .ace_constant {\n  color: rgb(197, 6, 11);\n}\n\n.ace-tm .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-tm .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-tm .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_invalid {\n  background-color: rgba(255, 0, 0, 0.1);\n  color: red;\n}\n\n.ace-tm .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-tm .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_support.ace_type,\n.ace-tm .ace_support.ace_class {\n  color: rgb(109, 121, 222);\n}\n\n.ace-tm .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-tm .ace_string {\n  color: rgb(3, 106, 7);\n}\n\n.ace-tm .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-tm .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-tm .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-tm .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-tm .ace_variable {\n  color: rgb(49, 132, 149);\n}\n\n.ace-tm .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-tm .ace_entity.ace_name.ace_function {\n  color: #0000A2;\n}\n\n\n.ace-tm .ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-tm .ace_list {\n  color:rgb(185, 6, 144);\n}\n\n.ace-tm .ace_meta.ace_tag {\n  color:rgb(0, 22, 142);\n}\n\n.ace-tm .ace_string.ace_regex {\n  color: rgb(255, 0, 0)\n}\n\n.ace-tm .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n.ace-tm.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px white;\n}\n.ace-tm .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-tm .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-tm .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-tm .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-tm .ace_gutter-active-line {\n    background-color : #dcdcdc;\n}\n\n.ace-tm .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-tm .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-tm .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n}\n'})),ace.define("ace/theme/textmate",["require","exports","module","ace/theme/textmate.css","ace/lib/dom"],(function(e,t,i){"use strict"
t.isDark=!1,t.cssClass="ace-tm",t.cssText=e("./textmate.css"),t.$id="ace/theme/textmate",e("../lib/dom").importCssString(t.cssText,t.cssClass,!1)})),ace.define("ace/config",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/lib/net","ace/lib/dom","ace/lib/app_config","ace/theme/textmate"],(function(e,t,i){var n=e("./lib/lang"),s=(e("./lib/oop"),e("./lib/net")),o=e("./lib/dom"),r=e("./lib/app_config").AppConfig
i.exports=t=new r
var a={packaged:!1,workerPath:null,modePath:null,themePath:null,basePath:"",suffix:".js",$moduleUrls:{},loadWorkerFromBlob:!0,sharedPopups:!1,useStrictCSP:null}
t.get=function(e){if(!a.hasOwnProperty(e))throw new Error("Unknown config key: "+e)
return a[e]},t.set=function(e,t){if(a.hasOwnProperty(e))a[e]=t
else if(0==this.setDefaultValue("",e,t))throw new Error("Unknown config key: "+e)
"useStrictCSP"==e&&o.useStrictCSP(t)},t.all=function(){return n.copyObject(a)},t.$modes={},t.moduleUrl=function(e,t){if(a.$moduleUrls[e])return a.$moduleUrls[e]
var i=e.split("/"),n="snippets"==(t=t||i[i.length-2]||"")?"/":"-",s=i[i.length-1]
if("worker"==t&&"-"==n){var o=new RegExp("^"+t+"[\\-_]|[\\-_]"+t+"$","g")
s=s.replace(o,"")}(!s||s==t)&&i.length>1&&(s=i[i.length-2])
var r=a[t+"Path"]
return null==r?r=a.basePath:"/"==n&&(t=n=""),r&&"/"!=r.slice(-1)&&(r+="/"),r+t+n+s+this.get("suffix")},t.setModuleUrl=function(e,t){return a.$moduleUrls[e]=t}
var l=function(t,i){return"ace/theme/textmate"==t?i(null,e("./theme/textmate")):console.error("loader is not configured")}
t.setLoader=function(e){l=e},t.$loading={},t.loadModule=function(i,n){var o,a
Array.isArray(i)&&(a=i[0],i=i[1])
try{o=e(i)}catch(r){}if(o&&!t.$loading[i])return n&&n(o)
if(t.$loading[i]||(t.$loading[i]=[]),t.$loading[i].push(n),!(t.$loading[i].length>1)){var c=function(){l(i,(function(e,n){t._emit("load.module",{name:i,module:n})
var s=t.$loading[i]
t.$loading[i]=null,s.forEach((function(e){e&&e(n)}))}))}
if(!t.get("packaged"))return c()
s.loadScript(t.moduleUrl(i,a),c),h()}}
var h=function(){!a.basePath&&!a.workerPath&&!a.modePath&&!a.themePath&&!Object.keys(a.$moduleUrls).length&&(console.error("Unable to infer path to ace from script src,","use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes","or with webpack use ace/webpack-resolver"),h=function(){})}
t.version="1.14.0"})),ace.define("ace/loader_build",["require","exports","module","ace/lib/fixoldbrowsers","ace/config"],(function(e,t,i){"use strict"
function n(t){if(r&&r.document){o.set("packaged",t||e.packaged||i.packaged||r.define&&define.packaged)
for(var n={},a="",l=document.currentScript||document._currentScript,h=(l&&l.ownerDocument||document).getElementsByTagName("script"),c=0;c<h.length;c++){var u=h[c],d=u.src||u.getAttribute("src")
if(d){for(var g=u.attributes,f=0,m=g.length;f<m;f++){var p=g[f]
0===p.name.indexOf("data-ace-")&&(n[s(p.name.replace(/^data-ace-/,""))]=p.value)}var v=d.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/)
v&&(a=v[1])}}for(var w in a&&(n.base=n.base||a,n.packaged=!0),n.basePath=n.base,n.workerPath=n.workerPath||n.base,n.modePath=n.modePath||n.base,n.themePath=n.themePath||n.base,delete n.base,n)void 0!==n[w]&&o.set(w,n[w])}}function s(e){return e.replace(/-(.)/g,(function(e,t){return t.toUpperCase()}))}e("./lib/fixoldbrowsers")
var o=e("./config")
o.setLoader((function(t,i){e([t],(function(e){i(null,e)}))}))
var r=function(){return this||"undefined"!=typeof window&&window}()
i.exports=function(t){o.init=n,t.require=e,"function"==typeof define&&(t.define=define)}})),ace.define("ace/lib/keys",["require","exports","module","ace/lib/oop"],(function(e,t,i){"use strict"
var n=e("./oop"),s=function(){var e,t,i={MODIFIER_KEYS:{16:"Shift",17:"Ctrl",18:"Alt",224:"Meta",91:"MetaLeft",92:"MetaRight",93:"ContextMenu"},KEY_MODS:{ctrl:1,alt:2,option:2,shift:4,super:8,meta:8,command:8,cmd:8,control:1},FUNCTION_KEYS:{8:"Backspace",9:"Tab",13:"Return",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9","-13":"NumpadEnter",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock"},PRINTABLE_KEYS:{32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",111:"/",106:"*"}}
for(t in i.PRINTABLE_KEYS[173]="-",i.FUNCTION_KEYS)e=i.FUNCTION_KEYS[t].toLowerCase(),i[e]=parseInt(t,10)
for(t in i.PRINTABLE_KEYS)e=i.PRINTABLE_KEYS[t].toLowerCase(),i[e]=parseInt(t,10)
return n.mixin(i,i.MODIFIER_KEYS),n.mixin(i,i.PRINTABLE_KEYS),n.mixin(i,i.FUNCTION_KEYS),i.enter=i.return,i.escape=i.esc,i.del=i.delete,function(){for(var e=["cmd","ctrl","alt","shift"],t=Math.pow(2,e.length);t--;)i.KEY_MODS[t]=e.filter((function(e){return t&i.KEY_MODS[e]})).join("-")+"-"}(),i.KEY_MODS[0]="",i.KEY_MODS[-1]="input-",i}()
n.mixin(t,s),t.keyCodeToString=function(e){var t=s[e]
return"string"!=typeof t&&(t=String.fromCharCode(e)),t.toLowerCase()}})),ace.define("ace/lib/event",["require","exports","module","ace/lib/keys","ace/lib/useragent"],(function(e,t,i){"use strict"
function n(){return null==a&&function(){a=!1
try{document.createComment("").addEventListener("test",(function(){}),{get passive(){a={passive:!1}}})}catch(e){}}(),a}function s(e,t,i){this.elem=e,this.type=t,this.callback=i}function o(e,t,i){var n=f(t)
if(!h.isMac&&c){if(t.getModifierState&&(t.getModifierState("OS")||t.getModifierState("Win"))&&(n|=8),c.altGr){if(3==(3&n))return
c.altGr=0}if(18===i||17===i){var s="location"in t?t.location:t.keyLocation
if(17===i&&1===s)1==c[i]&&(u=t.timeStamp)
else if(18===i&&3===n&&2===s){t.timeStamp-u<50&&(c.altGr=!0)}}}if((i in l.MODIFIER_KEYS&&(i=-1),!n&&13===i)&&(3===(s="location"in t?t.location:t.keyLocation)&&(e(t,n,-i),t.defaultPrevented)))return
if(h.isChromeOS&&8&n){if(e(t,n,i),t.defaultPrevented)return
n&=-9}return!!(n||i in l.FUNCTION_KEYS||i in l.PRINTABLE_KEYS)&&e(t,n,i)}function r(){c=Object.create(null)}var a,l=e("./keys"),h=e("./useragent"),c=null,u=0
s.prototype.destroy=function(){g(this.elem,this.type,this.callback),this.elem=this.type=this.callback=void 0}
var d=t.addListener=function(e,t,i,o){e.addEventListener(t,i,n()),o&&o.$toDestroy.push(new s(e,t,i))},g=t.removeListener=function(e,t,i){e.removeEventListener(t,i,n())}
t.stopEvent=function(e){return t.stopPropagation(e),t.preventDefault(e),!1},t.stopPropagation=function(e){e.stopPropagation&&e.stopPropagation()},t.preventDefault=function(e){e.preventDefault&&e.preventDefault()},t.getButton=function(e){return"dblclick"==e.type?0:"contextmenu"==e.type||h.isMac&&e.ctrlKey&&!e.altKey&&!e.shiftKey?2:e.button},t.capture=function(e,t,i){function n(e){t&&t(e),i&&i(e),g(s,"mousemove",t),g(s,"mouseup",n),g(s,"dragstart",n)}var s=e&&e.ownerDocument||document
return d(s,"mousemove",t),d(s,"mouseup",n),d(s,"dragstart",n),n},t.addMouseWheelListener=function(e,t,i){d(e,"wheel",(function(e){var i=e.deltaX||0,n=e.deltaY||0
switch(e.deltaMode){case e.DOM_DELTA_PIXEL:e.wheelX=.15*i,e.wheelY=.15*n
break
case e.DOM_DELTA_LINE:e.wheelX=15*i,e.wheelY=15*n
break
case e.DOM_DELTA_PAGE:e.wheelX=150*i,e.wheelY=150*n}t(e)}),i)},t.addMultiMouseDownListener=function(e,i,n,s,o){function r(e){if(0!==t.getButton(e)?u=0:e.detail>1?++u>4&&(u=1):u=1,h.isIE){var o=Math.abs(e.clientX-a)>5||Math.abs(e.clientY-l)>5
c&&!o||(u=1),c&&clearTimeout(c),c=setTimeout((function(){c=null}),i[u-1]||600),1==u&&(a=e.clientX,l=e.clientY)}if(e._clicks=u,n[s]("mousedown",e),u>4)u=0
else if(u>1)return n[s](g[u],e)}var a,l,c,u=0,g={2:"dblclick",3:"tripleclick",4:"quadclick"}
Array.isArray(e)||(e=[e]),e.forEach((function(e){d(e,"mousedown",r,o)}))}
var f=function(e){return 0|(e.ctrlKey?1:0)|(e.altKey?2:0)|(e.shiftKey?4:0)|(e.metaKey?8:0)}
if(t.getModifierString=function(e){return l.KEY_MODS[f(e)]},t.addCommandKeyListener=function(e,i,n){if(h.isOldGecko||h.isOpera&&!("KeyboardEvent"in window)){var s=null
d(e,"keydown",(function(e){s=e.keyCode}),n),d(e,"keypress",(function(e){return o(i,e,s)}),n)}else{var a=null
d(e,"keydown",(function(e){c[e.keyCode]=(c[e.keyCode]||0)+1
var t=o(i,e,e.keyCode)
return a=e.defaultPrevented,t}),n),d(e,"keypress",(function(e){a&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)&&(t.stopEvent(e),a=null)}),n),d(e,"keyup",(function(e){c[e.keyCode]=null}),n),c||(r(),d(window,"focus",r))}},"object"==typeof window&&window.postMessage&&!h.isOldIE){var m=1
t.nextTick=function(e,i){i=i||window
var n="zero-timeout-message-"+m++,s=function(o){o.data==n&&(t.stopPropagation(o),g(i,"message",s),e())}
d(i,"message",s),i.postMessage(n,"*")}}t.$idleBlocked=!1,t.onIdle=function(e,i){return setTimeout((function i(){t.$idleBlocked?setTimeout(i,100):e()}),i)},t.$idleBlockId=null,t.blockIdle=function(e){t.$idleBlockId&&clearTimeout(t.$idleBlockId),t.$idleBlocked=!0,t.$idleBlockId=setTimeout((function(){t.$idleBlocked=!1}),e||100)},t.nextFrame="object"==typeof window&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame),t.nextFrame?t.nextFrame=t.nextFrame.bind(window):t.nextFrame=function(e){setTimeout(e,17)}})),ace.define("ace/range",["require","exports","module"],(function(e,t,i){"use strict"
var n=function(e,t,i,n){this.start={row:e,column:t},this.end={row:i,column:n}};(function(){this.isEqual=function(e){return this.start.row===e.start.row&&this.end.row===e.end.row&&this.start.column===e.start.column&&this.end.column===e.end.column},this.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},this.contains=function(e,t){return 0==this.compare(e,t)},this.compareRange=function(e){var t,i=e.end,n=e.start
return 1==(t=this.compare(i.row,i.column))?1==(t=this.compare(n.row,n.column))?2:0==t?1:0:-1==t?-2:-1==(t=this.compare(n.row,n.column))?-1:1==t?42:0},this.comparePoint=function(e){return this.compare(e.row,e.column)},this.containsRange=function(e){return 0==this.comparePoint(e.start)&&0==this.comparePoint(e.end)},this.intersects=function(e){var t=this.compareRange(e)
return-1==t||0==t||1==t},this.isEnd=function(e,t){return this.end.row==e&&this.end.column==t},this.isStart=function(e,t){return this.start.row==e&&this.start.column==t},this.setStart=function(e,t){"object"==typeof e?(this.start.column=e.column,this.start.row=e.row):(this.start.row=e,this.start.column=t)},this.setEnd=function(e,t){"object"==typeof e?(this.end.column=e.column,this.end.row=e.row):(this.end.row=e,this.end.column=t)},this.inside=function(e,t){return 0==this.compare(e,t)&&(!this.isEnd(e,t)&&!this.isStart(e,t))},this.insideStart=function(e,t){return 0==this.compare(e,t)&&!this.isEnd(e,t)},this.insideEnd=function(e,t){return 0==this.compare(e,t)&&!this.isStart(e,t)},this.compare=function(e,t){return this.isMultiLine()||e!==this.start.row?e<this.start.row?-1:e>this.end.row?1:this.start.row===e?t>=this.start.column?0:-1:this.end.row===e?t<=this.end.column?0:1:0:t<this.start.column?-1:t>this.end.column?1:0},this.compareStart=function(e,t){return this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.compareEnd=function(e,t){return this.end.row==e&&this.end.column==t?1:this.compare(e,t)},this.compareInside=function(e,t){return this.end.row==e&&this.end.column==t?1:this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.clipRows=function(e,t){if(this.end.row>t)var i={row:t+1,column:0}
else if(this.end.row<e)i={row:e,column:0}
if(this.start.row>t)var s={row:t+1,column:0}
else if(this.start.row<e)s={row:e,column:0}
return n.fromPoints(s||this.start,i||this.end)},this.extend=function(e,t){var i=this.compare(e,t)
if(0==i)return this
if(-1==i)var s={row:e,column:t}
else var o={row:e,column:t}
return n.fromPoints(s||this.start,o||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return n.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new n(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new n(this.start.row,0,this.end.row,0)},this.toScreenRange=function(e){var t=e.documentToScreenPosition(this.start),i=e.documentToScreenPosition(this.end)
return new n(t.row,t.column,i.row,i.column)},this.moveBy=function(e,t){this.start.row+=e,this.start.column+=t,this.end.row+=e,this.end.column+=t}}).call(n.prototype),n.fromPoints=function(e,t){return new n(e.row,e.column,t.row,t.column)},n.comparePoints=function(e,t){return e.row-t.row||e.column-t.column},n.comparePoints=function(e,t){return e.row-t.row||e.column-t.column},t.Range=n})),ace.define("ace/clipboard",["require","exports","module"],(function(e,t,i){"use strict"
var n
i.exports={lineMode:!1,pasteCancelled:function(){return!!(n&&n>Date.now()-50)||(n=!1)},cancel:function(){n=Date.now()}}})),ace.define("ace/keyboard/textinput",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/dom","ace/lib/lang","ace/clipboard","ace/lib/keys"],(function(e,t,i){"use strict"
var n=e("../lib/event"),s=e("../lib/useragent"),o=e("../lib/dom"),r=e("../lib/lang"),a=e("../clipboard"),l=s.isChrome<18,h=s.isIE,c=s.isChrome>63,u=400,d=e("../lib/keys"),g=d.KEY_MODS,f=s.isIOS,m=f?/\s/:/\n/,p=s.isMobile
t.TextInput=function(e,t){function i(){x=!0,w.blur(),w.focus(),x=!1}function v(){clearTimeout(U),U=setTimeout((function(){S&&(w.style.cssText=S,S=""),t.renderer.$isMousePressed=!1,t.renderer.$keepTextAreaAtCursor&&t.renderer.$moveTextAreaToCursor()}),0)}var w=o.createElement("textarea")
w.className="ace_text-input",w.setAttribute("wrap","off"),w.setAttribute("autocorrect","off"),w.setAttribute("autocapitalize","off"),w.setAttribute("spellcheck",!1),w.style.opacity="0",e.insertBefore(w,e.firstChild)
var $=!1,b=!1,y=!1,C=!1,S=""
p||(w.style.fontSize="1px")
var k=!1,x=!1,A="",L=0,R=0,M=0
try{var T=document.activeElement===w}catch(K){}this.setAriaOptions=function(e){e.activeDescendant?(w.setAttribute("aria-haspopup","true"),w.setAttribute("aria-autocomplete","list"),w.setAttribute("aria-activedescendant",e.activeDescendant)):(w.setAttribute("aria-haspopup","false"),w.setAttribute("aria-autocomplete","both"),w.removeAttribute("aria-activedescendant")),e.role&&w.setAttribute("role",e.role)},this.setAriaOptions({role:"textbox"}),n.addListener(w,"blur",(function(e){x||(t.onBlur(e),T=!1)}),t),n.addListener(w,"focus",(function(e){if(!x){if(T=!0,s.isEdge)try{if(!document.hasFocus())return}catch(e){}t.onFocus(e),s.isEdge?setTimeout(E):E()}}),t),this.$focusScroll=!1,this.focus=function(){if(S||c||"browser"==this.$focusScroll)return w.focus({preventScroll:!0})
var e=w.style.top
w.style.position="fixed",w.style.top="0px"
try{var t=0!=w.getBoundingClientRect().top}catch(n){return}var i=[]
if(t)for(var s=w.parentElement;s&&1==s.nodeType;)i.push(s),s.setAttribute("ace_nocontext",!0),s=!s.parentElement&&s.getRootNode?s.getRootNode().host:s.parentElement
w.focus({preventScroll:!0}),t&&i.forEach((function(e){e.removeAttribute("ace_nocontext")})),setTimeout((function(){w.style.position="","0px"==w.style.top&&(w.style.top=e)}),0)},this.blur=function(){w.blur()},this.isFocused=function(){return T},t.on("beforeEndOperation",(function(){var e=t.curOp,i=e&&e.command&&e.command.name
if("insertstring"!=i){var n=i&&(e.docChanged||e.selectionChanged)
y&&n&&(A=w.value="",V()),E()}}))
var E=f?function(e){if(T&&(!$||e)&&!C){e||(e="")
var i="\n ab"+e+"cde fg\n"
i!=w.value&&(w.value=A=i)
var n=4+(e.length||(t.selection.isEmpty()?0:1));(4!=L||R!=n)&&w.setSelectionRange(4,n),L=4,R=n}}:function(){if(!y&&!C&&(T||I)){y=!0
var e=0,i=0,n=""
if(t.session){var s=t.selection,o=s.getRange(),r=s.cursor.row
if(e=o.start.column,i=o.end.column,n=t.session.getLine(r),o.start.row!=r){var a=t.session.getLine(r-1)
e=o.start.row<r-1?0:e,i+=a.length+1,n=a+"\n"+n}else if(o.end.row!=r){var l=t.session.getLine(r+1)
i=o.end.row>r+1?l.length:i,i+=n.length+1,n=n+"\n"+l}else p&&r>0&&(n="\n"+n,i+=1,e+=1)
n.length>u&&(e<u&&i<u?n=n.slice(0,u):(n="\n",e==i?e=i=0:(e=0,i=1)))}var h=n+"\n\n"
if(h!=A&&(w.value=A=h,L=R=h.length),I&&(L=w.selectionStart,R=w.selectionEnd),R!=i||L!=e||w.selectionEnd!=R)try{w.setSelectionRange(e,i),L=e,R=i}catch(d){}y=!1}}
this.resetSelection=E,T&&t.onFocus()
var _=null
this.setInputHandler=function(e){_=e},this.getInputHandler=function(){return _}
var I=!1,F=function(e,i){if(I&&(I=!1),b)return E(),e&&t.onPaste(e),b=!1,""
for(var n=w.selectionStart,o=w.selectionEnd,r=L,a=A.length-R,l=e,h=e.length-n,c=e.length-o,u=0;r>0&&A[u]==e[u];)u++,r--
for(l=l.slice(u),u=1;a>0&&A.length-u>L-1&&A[A.length-u]==e[e.length-u];)u++,a--
h-=u-1,c-=u-1
var d=l.length-u+1
if(d<0&&(r=-d,d=0),l=l.slice(0,d),!(i||l||h||r||a||c))return""
C=!0
var g=!1
return s.isAndroid&&". "==l&&(l="  ",g=!0),l&&!r&&!a&&!h&&!c||k?t.onTextInput(l):t.onTextInput(l,{extendLeft:r,extendRight:a,restoreStart:h,restoreEnd:c}),C=!1,A=e,L=n,R=o,M=c,g?"\n":l},W=function(e){if(y)return N()
if(e&&e.inputType){if("historyUndo"==e.inputType)return t.execCommand("undo")
if("historyRedo"==e.inputType)return t.execCommand("redo")}var i=w.value,n=F(i,!0);(i.length>500||m.test(n)||p&&L<1&&L==R)&&E()},O=function(e,t,i){var n=e.clipboardData||window.clipboardData
if(n&&!l){var s=h||i?"Text":"text/plain"
try{return t?!1!==n.setData(s,t):n.getData(s)}catch(e){if(!i)return O(e,t,!0)}}},H=function(e,i){var s=t.getCopyText()
if(!s)return n.preventDefault(e)
O(e,s)?(f&&(E(s),$=s,setTimeout((function(){$=!1}),10)),i?t.onCut():t.onCopy(),n.preventDefault(e)):($=!0,w.value=s,w.select(),setTimeout((function(){$=!1,E(),i?t.onCut():t.onCopy()})))},D=function(e){H(e,!0)},B=function(e){H(e,!1)},P=function(e){var i=O(e)
a.pasteCancelled()||("string"==typeof i?(i&&t.onPaste(i,e),s.isIE&&setTimeout(E),n.preventDefault(e)):(w.value="",b=!0))}
n.addCommandKeyListener(w,t.onCommandKey.bind(t),t),n.addListener(w,"select",(function(e){y||($?$=!1:function(e){return 0===e.selectionStart&&e.selectionEnd>=A.length&&e.value===A&&A&&e.selectionEnd!==R}(w)?(t.selectAll(),E()):p&&w.selectionStart!=L&&E())}),t),n.addListener(w,"input",W,t),n.addListener(w,"cut",D,t),n.addListener(w,"copy",B,t),n.addListener(w,"paste",P,t),(!("oncut"in w)||!("oncopy"in w)||!("onpaste"in w))&&n.addListener(e,"keydown",(function(e){if((!s.isMac||e.metaKey)&&e.ctrlKey)switch(e.keyCode){case 67:B(e)
break
case 86:P(e)
break
case 88:D(e)}}),t)
var N=function(){if(y&&t.onCompositionUpdate&&!t.$readOnly){if(k)return i()
if(y.useTextareaForIME)t.onCompositionUpdate(w.value)
else{var e=w.value
F(e),y.markerRange&&(y.context&&(y.markerRange.start.column=y.selectionStart=y.context.compositionStartOffset),y.markerRange.end.column=y.markerRange.start.column+R-y.selectionStart+M)}}},V=function(e){t.onCompositionEnd&&!t.$readOnly&&(y=!1,t.onCompositionEnd(),t.off("mousedown",i),e&&W())},z=r.delayedCall(N,50).schedule.bind(null,null)
n.addListener(w,"compositionstart",(function(e){if(!y&&t.onCompositionStart&&!t.$readOnly&&(y={},!k)){e.data&&(y.useTextareaForIME=!1),setTimeout(N,0),t._signal("compositionStart"),t.on("mousedown",i)
var n=t.getSelectionRange()
n.end.row=n.start.row,n.end.column=n.start.column,y.markerRange=n,y.selectionStart=L,t.onCompositionStart(y),y.useTextareaForIME?(A=w.value="",L=0,R=0):(w.msGetInputContext&&(y.context=w.msGetInputContext()),w.getInputContext&&(y.context=w.getInputContext()))}}),t),n.addListener(w,"compositionupdate",N,t),n.addListener(w,"keyup",(function(e){27==e.keyCode&&w.value.length<w.selectionStart&&(y||(A=w.value),L=R=-1,E()),z()}),t),n.addListener(w,"keydown",z,t),n.addListener(w,"compositionend",V,t),this.getElement=function(){return w},this.setCommandMode=function(e){k=e,w.readOnly=!1},this.setReadOnly=function(e){k||(w.readOnly=e)},this.setCopyWithEmptySelection=function(e){},this.onContextMenu=function(e){I=!0,E(),t._emit("nativecontextmenu",{target:t,domEvent:e}),this.moveToMouse(e,!0)},this.moveToMouse=function(e,i){S||(S=w.style.cssText),w.style.cssText=(i?"z-index:100000;":"")+(s.isIE?"opacity:0.1;":"")+"text-indent: -"+(L+R)*t.renderer.characterWidth*.5+"px;"
var r=t.container.getBoundingClientRect(),a=o.computedStyle(t.container),l=r.top+(parseInt(a.borderTopWidth)||0),h=r.left+(parseInt(r.borderLeftWidth)||0),c=r.bottom-l-w.clientHeight-2,u=function(e){o.translate(w,e.clientX-h-2,Math.min(e.clientY-l-2,c))}
u(e),"mousedown"==e.type&&(t.renderer.$isMousePressed=!0,clearTimeout(U),s.isWin&&n.capture(t.container,u,v))},this.onContextMenuClose=v
var U,G=function(e){t.textInput.onContextMenu(e),v()}
n.addListener(w,"mouseup",G,t),n.addListener(w,"mousedown",(function(e){e.preventDefault(),v()}),t),n.addListener(t.renderer.scroller,"contextmenu",G,t),n.addListener(w,"contextmenu",G,t),f&&function(e,t,i){var n=null,s=!1
i.addEventListener("keydown",(function(e){n&&clearTimeout(n),s=!0}),!0),i.addEventListener("keyup",(function(e){n=setTimeout((function(){s=!1}),100)}),!0)
var o=function(e){if(document.activeElement===i&&!(s||y||t.$mouseHandler.isMousePressed||$)){var n=i.selectionStart,o=i.selectionEnd,r=null,a=0
if(0==n?r=d.up:1==n?r=d.home:o>R&&"\n"==A[o]?r=d.end:n<L&&" "==A[n-1]?(r=d.left,a=g.option):n<L||n==L&&R!=L&&n==o?r=d.left:o>R&&A.slice(0,o).split("\n").length>2?r=d.down:o>R&&" "==A[o-1]?(r=d.right,a=g.option):(o>R||o==R&&R!=L&&n==o)&&(r=d.right),n!==o&&(a|=g.shift),r){if(!t.onCommandKey({},a,r)&&t.commands){r=d.keyCodeToString(r)
var l=t.commands.findKeyCommand(a,r)
l&&t.execCommand(l)}L=n,R=o,E("")}}}
document.addEventListener("selectionchange",o),t.on("destroy",(function(){document.removeEventListener("selectionchange",o)}))}(0,t,w),this.destroy=function(){w.parentElement&&w.parentElement.removeChild(w)}},t.$setUserAgentForTests=function(e,t){p=e,f=t}})),ace.define("ace/mouse/default_handlers",["require","exports","module","ace/lib/useragent"],(function(e,t,i){"use strict"
function n(e){e.$clickSelection=null
var t=e.editor
t.setDefaultHandler("mousedown",this.onMouseDown.bind(e)),t.setDefaultHandler("dblclick",this.onDoubleClick.bind(e)),t.setDefaultHandler("tripleclick",this.onTripleClick.bind(e)),t.setDefaultHandler("quadclick",this.onQuadClick.bind(e)),t.setDefaultHandler("mousewheel",this.onMouseWheel.bind(e));["select","startSelect","selectEnd","selectAllEnd","selectByWordsEnd","selectByLinesEnd","dragWait","dragWaitEnd","focusWait"].forEach((function(t){e[t]=this[t]}),this),e.selectByLines=this.extendSelectionBy.bind(e,"getLineRange"),e.selectByWords=this.extendSelectionBy.bind(e,"getWordRange")}function s(e,t){if(e.start.row==e.end.row)var i=2*t.column-e.start.column-e.end.column
else if(e.start.row!=e.end.row-1||e.start.column||e.end.column)i=2*t.row-e.start.row-e.end.row
else var i=t.column-4
return i<0?{cursor:e.start,anchor:e.end}:{cursor:e.end,anchor:e.start}}var o=e("../lib/useragent");(function(){this.onMouseDown=function(e){var t=e.inSelection(),i=e.getDocumentPosition()
this.mousedownEvent=e
var n=this.editor,s=e.getButton()
return 0!==s?((n.getSelectionRange().isEmpty()||1==s)&&n.selection.moveToPosition(i),void(2==s&&(n.textInput.onContextMenu(e.domEvent),o.isMozilla||e.preventDefault()))):(this.mousedownEvent.time=Date.now(),!t||n.isFocused()||(n.focus(),!this.$focusTimeout||this.$clickSelection||n.inMultiSelectMode)?(this.captureMouse(e),this.startSelect(i,e.domEvent._clicks>1),e.preventDefault()):(this.setState("focusWait"),void this.captureMouse(e)))},this.startSelect=function(e,t){e=e||this.editor.renderer.screenToTextCoordinates(this.x,this.y)
var i=this.editor
this.mousedownEvent&&(this.mousedownEvent.getShiftKey()?i.selection.selectToPosition(e):t||i.selection.moveToPosition(e),t||this.select(),i.renderer.scroller.setCapture&&i.renderer.scroller.setCapture(),i.setStyle("ace_selecting"),this.setState("select"))},this.select=function(){var e,t=this.editor,i=t.renderer.screenToTextCoordinates(this.x,this.y)
if(this.$clickSelection){var n=this.$clickSelection.comparePoint(i)
if(-1==n)e=this.$clickSelection.end
else if(1==n)e=this.$clickSelection.start
else{var o=s(this.$clickSelection,i)
i=o.cursor,e=o.anchor}t.selection.setSelectionAnchor(e.row,e.column)}t.selection.selectToPosition(i),t.renderer.scrollCursorIntoView()},this.extendSelectionBy=function(e){var t,i=this.editor,n=i.renderer.screenToTextCoordinates(this.x,this.y),o=i.selection[e](n.row,n.column)
if(this.$clickSelection){var r=this.$clickSelection.comparePoint(o.start),a=this.$clickSelection.comparePoint(o.end)
if(-1==r&&a<=0)t=this.$clickSelection.end,o.end.row==n.row&&o.end.column==n.column||(n=o.start)
else if(1==a&&r>=0)t=this.$clickSelection.start,o.start.row==n.row&&o.start.column==n.column||(n=o.end)
else if(-1==r&&1==a)n=o.end,t=o.start
else{var l=s(this.$clickSelection,n)
n=l.cursor,t=l.anchor}i.selection.setSelectionAnchor(t.row,t.column)}i.selection.selectToPosition(n),i.renderer.scrollCursorIntoView()},this.selectEnd=this.selectAllEnd=this.selectByWordsEnd=this.selectByLinesEnd=function(){this.$clickSelection=null,this.editor.unsetStyle("ace_selecting"),this.editor.renderer.scroller.releaseCapture&&this.editor.renderer.scroller.releaseCapture()},this.focusWait=function(){var e=function(e,t,i,n){return Math.sqrt(Math.pow(i-e,2)+Math.pow(n-t,2))}(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y),t=Date.now();(e>0||t-this.mousedownEvent.time>this.$focusTimeout)&&this.startSelect(this.mousedownEvent.getDocumentPosition())},this.onDoubleClick=function(e){var t=e.getDocumentPosition(),i=this.editor,n=i.session.getBracketRange(t)
n?(n.isEmpty()&&(n.start.column--,n.end.column++),this.setState("select")):(n=i.selection.getWordRange(t.row,t.column),this.setState("selectByWords")),this.$clickSelection=n,this.select()},this.onTripleClick=function(e){var t=e.getDocumentPosition(),i=this.editor
this.setState("selectByLines")
var n=i.getSelectionRange()
n.isMultiLine()&&n.contains(t.row,t.column)?(this.$clickSelection=i.selection.getLineRange(n.start.row),this.$clickSelection.end=i.selection.getLineRange(n.end.row).end):this.$clickSelection=i.selection.getLineRange(t.row),this.select()},this.onQuadClick=function(e){var t=this.editor
t.selectAll(),this.$clickSelection=t.getSelectionRange(),this.setState("selectAll")},this.onMouseWheel=function(e){if(!e.getAccelKey()){e.getShiftKey()&&e.wheelY&&!e.wheelX&&(e.wheelX=e.wheelY,e.wheelY=0)
var t=this.editor
this.$lastScroll||(this.$lastScroll={t:0,vx:0,vy:0,allowed:0})
var i=this.$lastScroll,n=e.domEvent.timeStamp,s=n-i.t,o=s?e.wheelX/s:i.vx,r=s?e.wheelY/s:i.vy
s<550&&(o=(o+i.vx)/2,r=(r+i.vy)/2)
var a=Math.abs(o/r),l=!1
if(a>=1&&t.renderer.isScrollableBy(e.wheelX*e.speed,0)&&(l=!0),a<=1&&t.renderer.isScrollableBy(0,e.wheelY*e.speed)&&(l=!0),l)i.allowed=n
else if(n-i.allowed<550){Math.abs(o)<=1.5*Math.abs(i.vx)&&Math.abs(r)<=1.5*Math.abs(i.vy)?(l=!0,i.allowed=n):i.allowed=0}return i.t=n,i.vx=o,i.vy=r,l?(t.renderer.scrollBy(e.wheelX*e.speed,e.wheelY*e.speed),e.stop()):void 0}}}).call(n.prototype),t.DefaultHandlers=n})),ace.define("ace/tooltip",["require","exports","module","ace/lib/oop","ace/lib/dom"],(function(e,t,i){"use strict"
function n(e){this.isOpen=!1,this.$element=null,this.$parentNode=e}e("./lib/oop")
var s=e("./lib/dom"),o="ace_tooltip";(function(){this.$init=function(){return this.$element=s.createElement("div"),this.$element.className=o,this.$element.style.display="none",this.$parentNode.appendChild(this.$element),this.$element},this.getElement=function(){return this.$element||this.$init()},this.setText=function(e){this.getElement().textContent=e},this.setHtml=function(e){this.getElement().innerHTML=e},this.setPosition=function(e,t){this.getElement().style.left=e+"px",this.getElement().style.top=t+"px"},this.setClassName=function(e){s.addCssClass(this.getElement(),e)},this.show=function(e,t,i){null!=e&&this.setText(e),null!=t&&null!=i&&this.setPosition(t,i),this.isOpen||(this.getElement().style.display="block",this.isOpen=!0)},this.hide=function(){this.isOpen&&(this.getElement().style.display="none",this.getElement().className=o,this.isOpen=!1)},this.getHeight=function(){return this.getElement().offsetHeight},this.getWidth=function(){return this.getElement().offsetWidth},this.destroy=function(){this.isOpen=!1,this.$element&&this.$element.parentNode&&this.$element.parentNode.removeChild(this.$element)}}).call(n.prototype),t.Tooltip=n})),ace.define("ace/mouse/default_gutter_handler",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event","ace/tooltip"],(function(e,t,i){"use strict"
function n(e){a.call(this,e)}var s=e("../lib/dom"),o=e("../lib/oop"),r=e("../lib/event"),a=e("../tooltip").Tooltip
o.inherits(n,a),function(){this.setPosition=function(e,t){var i=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight,s=this.getWidth(),o=this.getHeight();(e+=15)+s>i&&(e-=e+s-i),(t+=15)+o>n&&(t-=20+o),a.prototype.setPosition.call(this,e,t)}}.call(n.prototype),t.GutterHandler=function(e){function t(){var t=l.getDocumentPosition().row,n=u.$annotations[t]
if(!n)return i()
if(t==c.session.getLength()){var s=c.renderer.pixelToScreenCoordinates(0,l.y).row,r=l.$pos
if(s>c.session.documentToScreenRow(r.row,r.column))return i()}if(h!=n){h=n.text.join("<br/>"),d.setHtml(h)
var a=n.className
if(a&&d.setClassName(a.trim()),d.show(),c._signal("showGutterTooltip",d),c.on("mousewheel",i),e.$tooltipFollowsMouse)o(l)
else{var g=l.domEvent.target.getBoundingClientRect(),f=d.getElement().style
f.left=g.right+"px",f.top=g.bottom+"px"}}}function i(){a&&(a=clearTimeout(a)),h&&(d.hide(),h=null,c._signal("hideGutterTooltip",d),c.off("mousewheel",i))}function o(e){d.setPosition(e.x,e.y)}var a,l,h,c=e.editor,u=c.renderer.$gutterLayer,d=new n(c.container)
e.editor.setDefaultHandler("guttermousedown",(function(t){if(c.isFocused()&&0==t.getButton()&&"foldWidgets"!=u.getRegion(t)){var i=t.getDocumentPosition().row,n=c.session.selection
if(t.getShiftKey())n.selectTo(i,0)
else{if(2==t.domEvent.detail)return c.selectAll(),t.preventDefault()
e.$clickSelection=c.selection.getLineRange(i)}return e.setState("selectByLines"),e.captureMouse(t),t.preventDefault()}})),e.editor.setDefaultHandler("guttermousemove",(function(n){var r=n.domEvent.target||n.domEvent.srcElement
if(s.hasCssClass(r,"ace_fold-widget"))return i()
h&&e.$tooltipFollowsMouse&&o(n),l=n,a||(a=setTimeout((function(){a=null,l&&!e.isMousePressed?t():i()}),50))})),r.addListener(c.renderer.$gutter,"mouseout",(function(e){l=null,h&&!a&&(a=setTimeout((function(){a=null,i()}),50))}),c),c.on("changeSession",i)}})),ace.define("ace/mouse/mouse_event",["require","exports","module","ace/lib/event","ace/lib/useragent"],(function(e,t,i){"use strict"
var n=e("../lib/event"),s=e("../lib/useragent"),o=t.MouseEvent=function(e,t){this.domEvent=e,this.editor=t,this.x=this.clientX=e.clientX,this.y=this.clientY=e.clientY,this.$pos=null,this.$inSelection=null,this.propagationStopped=!1,this.defaultPrevented=!1};(function(){this.stopPropagation=function(){n.stopPropagation(this.domEvent),this.propagationStopped=!0},this.preventDefault=function(){n.preventDefault(this.domEvent),this.defaultPrevented=!0},this.stop=function(){this.stopPropagation(),this.preventDefault()},this.getDocumentPosition=function(){return this.$pos||(this.$pos=this.editor.renderer.screenToTextCoordinates(this.clientX,this.clientY)),this.$pos},this.inSelection=function(){if(null!==this.$inSelection)return this.$inSelection
var e=this.editor.getSelectionRange()
if(e.isEmpty())this.$inSelection=!1
else{var t=this.getDocumentPosition()
this.$inSelection=e.contains(t.row,t.column)}return this.$inSelection},this.getButton=function(){return n.getButton(this.domEvent)},this.getShiftKey=function(){return this.domEvent.shiftKey},this.getAccelKey=s.isMac?function(){return this.domEvent.metaKey}:function(){return this.domEvent.ctrlKey}}).call(o.prototype)})),ace.define("ace/mouse/dragdrop_handler",["require","exports","module","ace/lib/dom","ace/lib/event","ace/lib/useragent"],(function(e,t,i){"use strict"
function n(e){function t(){var e=y;(function(e,t){var i=Date.now(),n=!t||e.row!=t.row,o=!t||e.column!=t.column
!x||n||o?(f.moveCursorToPosition(e),x=i,A={x:v,y:w}):s(A.x,A.y,v,w)>c?x=null:i-x>=h&&(f.renderer.scrollCursorIntoView(),x=null)})(y=f.renderer.screenToTextCoordinates(v,w),e),function(e,t){var i=Date.now(),n=f.renderer.layerConfig.lineHeight,s=f.renderer.layerConfig.characterWidth,o=f.renderer.scroller.getBoundingClientRect(),r={x:{left:v-o.left,right:o.right-v},y:{top:w-o.top,bottom:o.bottom-w}},a=Math.min(r.x.left,r.x.right),h=Math.min(r.y.top,r.y.bottom),c={row:e.row,column:e.column}
a/s<=2&&(c.column+=r.x.left<r.x.right?-3:2),h/n<=1&&(c.row+=r.y.top<r.y.bottom?-1:1)
var u=e.row!=c.row,d=e.column!=c.column,g=!t||e.row!=t.row
u||d&&!g?k?i-k>=l&&f.renderer.scrollCursorIntoView(c):k=i:k=null}(y,e)}function i(){b=f.selection.toOrientedRange(),p=f.session.addMarker(b,"ace_selection",f.getSelectionStyle()),f.clearSelection(),f.isFocused()&&f.renderer.$cursorLayer.setBlinking(!1),clearInterval($),t(),$=setInterval(t,20),R=0,r.addListener(document,"mousemove",u)}function n(){clearInterval($),f.session.removeMarker(p),p=null,f.selection.fromOrientedRange(b),f.isFocused()&&!S&&f.$resetCursorStyle(),b=null,y=null,R=0,k=null,x=null,r.removeListener(document,"mousemove",u)}function u(){null==M&&(M=setTimeout((function(){null!=M&&p&&n()}),20))}function d(e){var t=e.types
return!t||Array.prototype.some.call(t,(function(e){return"text/plain"==e||"Text"==e}))}function g(e){var t=["copy","copymove","all","uninitialized"],i=a.isMac?e.altKey:e.ctrlKey,n="uninitialized"
try{n=e.dataTransfer.effectAllowed.toLowerCase()}catch(e){}var s="none"
return i&&t.indexOf(n)>=0?s="copy":["move","copymove","linkmove","all","uninitialized"].indexOf(n)>=0?s="move":t.indexOf(n)>=0&&(s="copy"),s}var f=e.editor,m=o.createElement("div")
m.style.cssText="top:-100px;position:absolute;z-index:2147483647;opacity:0.5",m.textContent=" ";["dragWait","dragWaitEnd","startDrag","dragReadyEnd","onMouseDrag"].forEach((function(t){e[t]=this[t]}),this),f.on("mousedown",this.onMouseDown.bind(e))
var p,v,w,$,b,y,C,S,k,x,A,L=f.container,R=0
this.onDragStart=function(e){if(this.cancelDrag||!L.draggable){var t=this
return setTimeout((function(){t.startSelect(),t.captureMouse(e)}),0),e.preventDefault()}b=f.getSelectionRange()
var i=e.dataTransfer
i.effectAllowed=f.getReadOnly()?"copy":"copyMove",f.container.appendChild(m),i.setDragImage&&i.setDragImage(m,0,0),setTimeout((function(){f.container.removeChild(m)})),i.clearData(),i.setData("Text",f.session.getTextRange()),S=!0,this.setState("drag")},this.onDragEnd=function(e){if(L.draggable=!1,S=!1,this.setState(null),!f.getReadOnly()){var t=e.dataTransfer.dropEffect
!C&&"move"==t&&f.session.remove(f.getSelectionRange()),f.$resetCursorStyle()}this.editor.unsetStyle("ace_dragging"),this.editor.renderer.setCursorStyle("")},this.onDragEnter=function(e){if(!f.getReadOnly()&&d(e.dataTransfer))return v=e.clientX,w=e.clientY,p||i(),R++,e.dataTransfer.dropEffect=C=g(e),r.preventDefault(e)},this.onDragOver=function(e){if(!f.getReadOnly()&&d(e.dataTransfer))return v=e.clientX,w=e.clientY,p||(i(),R++),null!==M&&(M=null),e.dataTransfer.dropEffect=C=g(e),r.preventDefault(e)},this.onDragLeave=function(e){if(--R<=0&&p)return n(),C=null,r.preventDefault(e)},this.onDrop=function(e){if(y){var t=e.dataTransfer
if(S)switch(C){case"move":b=b.contains(y.row,y.column)?{start:y,end:y}:f.moveText(b,y)
break
case"copy":b=f.moveText(b,y,!0)}else{var i=t.getData("Text")
b={start:y,end:f.session.insert(y,i)},f.focus(),C=null}return n(),r.preventDefault(e)}},r.addListener(L,"dragstart",this.onDragStart.bind(e),f),r.addListener(L,"dragend",this.onDragEnd.bind(e),f),r.addListener(L,"dragenter",this.onDragEnter.bind(e),f),r.addListener(L,"dragover",this.onDragOver.bind(e),f),r.addListener(L,"dragleave",this.onDragLeave.bind(e),f),r.addListener(L,"drop",this.onDrop.bind(e),f)
var M=null}function s(e,t,i,n){return Math.sqrt(Math.pow(i-e,2)+Math.pow(n-t,2))}var o=e("../lib/dom"),r=e("../lib/event"),a=e("../lib/useragent"),l=200,h=200,c=5;(function(){this.dragWait=function(){Date.now()-this.mousedownEvent.time>this.editor.getDragDelay()&&this.startDrag()},this.dragWaitEnd=function(){this.editor.container.draggable=!1,this.startSelect(this.mousedownEvent.getDocumentPosition()),this.selectEnd()},this.dragReadyEnd=function(e){this.editor.$resetCursorStyle(),this.editor.unsetStyle("ace_dragging"),this.editor.renderer.setCursorStyle(""),this.dragWaitEnd()},this.startDrag=function(){this.cancelDrag=!1
var e=this.editor
e.container.draggable=!0,e.renderer.$cursorLayer.setBlinking(!1),e.setStyle("ace_dragging")
var t=a.isWin?"default":"move"
e.renderer.setCursorStyle(t),this.setState("dragReady")},this.onMouseDrag=function(e){var t=this.editor.container
a.isIE&&"dragReady"==this.state&&(s(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y)>3&&t.dragDrop())
"dragWait"===this.state&&(s(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y)>0&&(t.draggable=!1,this.startSelect(this.mousedownEvent.getDocumentPosition())))},this.onMouseDown=function(e){if(this.$dragEnabled){this.mousedownEvent=e
var t=this.editor,i=e.inSelection(),n=e.getButton()
if(1===(e.domEvent.detail||1)&&0===n&&i){if(e.editor.inMultiSelectMode&&(e.getAccelKey()||e.getShiftKey()))return
this.mousedownEvent.time=Date.now()
var s=e.domEvent.target||e.domEvent.srcElement
if("unselectable"in s&&(s.unselectable="on"),t.getDragDelay()){if(a.isWebKit)this.cancelDrag=!0,t.container.draggable=!0
this.setState("dragWait")}else this.startDrag()
this.captureMouse(e,this.onMouseDrag.bind(this)),e.defaultPrevented=!0}}}}).call(n.prototype),t.DragdropHandler=n})),ace.define("ace/mouse/touch_handler",["require","exports","module","ace/mouse/mouse_event","ace/lib/event","ace/lib/dom"],(function(e,t,i){"use strict"
var n=e("./mouse_event").MouseEvent,s=e("../lib/event"),o=e("../lib/dom")
t.addTouchListeners=function(e,t){function i(){var e=window.navigator&&window.navigator.clipboard,i=!1,n=function(){var n=t.getCopyText(),s=t.session.getUndoManager().hasUndo()
v.replaceChild(o.buildDom(i?["span",!n&&["span",{class:"ace_mobile-button",action:"selectall"},"Select All"],n&&["span",{class:"ace_mobile-button",action:"copy"},"Copy"],n&&["span",{class:"ace_mobile-button",action:"cut"},"Cut"],e&&["span",{class:"ace_mobile-button",action:"paste"},"Paste"],s&&["span",{class:"ace_mobile-button",action:"undo"},"Undo"],["span",{class:"ace_mobile-button",action:"find"},"Find"],["span",{class:"ace_mobile-button",action:"openCommandPallete"},"Palette"]]:["span"]),v.firstChild)},s=function(s){var o=s.target.getAttribute("action")
if("more"==o||!i)return i=!i,n()
"paste"==o?e.readText().then((function(e){t.execCommand(o,e)})):o&&("cut"!=o&&"copy"!=o||(e?e.writeText(t.getCopyText()):document.execCommand("copy")),t.execCommand(o)),v.firstChild.style.display="none",i=!1,"openCommandPallete"!=o&&t.focus()}
v=o.buildDom(["div",{class:"ace_mobile-menu",ontouchstart:function(e){w="menu",e.stopPropagation(),e.preventDefault(),t.textInput.focus()},ontouchend:function(e){e.stopPropagation(),e.preventDefault(),s(e)},onclick:s},["span"],["span",{class:"ace_mobile-button",action:"more"},"..."]],t.container)}function r(){v||i()
var e=t.selection.cursor,n=t.renderer.textToScreenCoordinates(e.row,e.column),s=t.renderer.textToScreenCoordinates(0,0).pageX,o=t.renderer.scrollLeft,r=t.container.getBoundingClientRect()
v.style.top=n.pageY-r.top-3+"px",n.pageX-r.left<r.width-70?(v.style.left="",v.style.right="10px"):(v.style.right="",v.style.left=s+o-r.left+"px"),v.style.display="",v.firstChild.style.display="none",t.on("input",a)}function a(e){v&&(v.style.display="none"),t.off("input",a)}function l(){g=null,clearTimeout(g)
var e=t.selection.getRange(),i=e.contains(m.row,m.column)
!e.isEmpty()&&i||(t.selection.moveToPosition(m),t.selection.selectWord()),w="wait",r()}var h,c,u,d,g,f,m,p,v,w="scroll",$=0,b=0,y=0,C=0
s.addListener(e,"contextmenu",(function(e){p&&t.textInput.getElement().focus()}),t),s.addListener(e,"touchstart",(function(e){var i=e.touches
if(g||i.length>1)return clearTimeout(g),g=null,u=-1,void(w="zoom")
p=t.$mouseHandler.isMousePressed=!0
var s=t.renderer.layerConfig.lineHeight,o=t.renderer.layerConfig.lineHeight,r=e.timeStamp
d=r
var a=i[0],f=a.clientX,v=a.clientY
Math.abs(h-f)+Math.abs(c-v)>s&&(u=-1),h=e.clientX=f,c=e.clientY=v,y=C=0
var S=new n(e,t)
if(m=S.getDocumentPosition(),r-u<500&&1==i.length&&!$)b++,e.preventDefault(),e.button=0,function(){g=null,clearTimeout(g),t.selection.moveToPosition(m)
var e=b>=2?t.selection.getLineRange(m.row):t.session.getBracketRange(m)
e&&!e.isEmpty()?t.selection.setRange(e):t.selection.selectWord(),w="wait"}()
else{b=0
var k=t.selection.cursor,x=t.selection.isEmpty()?k:t.selection.anchor,A=t.renderer.$cursorLayer.getPixelPosition(k,!0),L=t.renderer.$cursorLayer.getPixelPosition(x,!0),R=t.renderer.scroller.getBoundingClientRect(),M=t.renderer.layerConfig.offset,T=t.renderer.scrollLeft,E=function(e,t){return(e/=o)*e+(t=t/s-.75)*t}
if(e.clientX<R.left)return void(w="zoom")
var _=E(e.clientX-R.left-A.left+T,e.clientY-R.top-A.top+M),I=E(e.clientX-R.left-L.left+T,e.clientY-R.top-L.top+M)
_<3.5&&I<3.5&&(w=_>I?"cursor":"anchor"),w=I<3.5?"anchor":_<3.5?"cursor":"scroll",g=setTimeout(l,450)}u=r}),t),s.addListener(e,"touchend",(function(e){p=t.$mouseHandler.isMousePressed=!1,f&&clearInterval(f),"zoom"==w?(w="",$=0):g?(t.selection.moveToPosition(m),$=0,r()):"scroll"==w?($+=60,f=setInterval((function(){$--<=0&&(clearInterval(f),f=null),Math.abs(y)<.01&&(y=0),Math.abs(C)<.01&&(C=0),$<20&&(y*=.9),$<20&&(C*=.9)
var e=t.session.getScrollTop()
t.renderer.scrollBy(10*y,10*C),e==t.session.getScrollTop()&&($=0)}),10),a()):r(),clearTimeout(g),g=null}),t),s.addListener(e,"touchmove",(function(e){g&&(clearTimeout(g),g=null)
var i=e.touches
if(!(i.length>1||"zoom"==w)){var s=i[0],o=h-s.clientX,r=c-s.clientY
if("wait"==w){if(!(o*o+r*r>4))return e.preventDefault()
w="cursor"}h=s.clientX,c=s.clientY,e.clientX=s.clientX,e.clientY=s.clientY
var a=e.timeStamp,l=a-d
if(d=a,"scroll"==w){var u=new n(e,t)
u.speed=1,u.wheelX=o,u.wheelY=r,10*Math.abs(o)<Math.abs(r)&&(o=0),10*Math.abs(r)<Math.abs(o)&&(r=0),0!=l&&(y=o/l,C=r/l),t._emit("mousewheel",u),u.propagationStopped||(y=C=0)}else{var f=new n(e,t).getDocumentPosition()
"cursor"==w?t.selection.moveCursorToPosition(f):"anchor"==w&&t.selection.setSelectionAnchor(f.row,f.column),t.renderer.scrollCursorIntoView(f),e.preventDefault()}}}),t)}})),ace.define("ace/mouse/mouse_handler",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/mouse/default_handlers","ace/mouse/default_gutter_handler","ace/mouse/mouse_event","ace/mouse/dragdrop_handler","ace/mouse/touch_handler","ace/config"],(function(e,t,i){"use strict"
var n=e("../lib/event"),s=e("../lib/useragent"),o=e("./default_handlers").DefaultHandlers,r=e("./default_gutter_handler").GutterHandler,a=e("./mouse_event").MouseEvent,l=e("./dragdrop_handler").DragdropHandler,h=e("./touch_handler").addTouchListeners,c=e("../config"),u=function(e){var t=this
this.editor=e,new o(this),new r(this),new l(this)
var i=function(t){(!document.hasFocus||!document.hasFocus()||!e.isFocused()&&document.activeElement==(e.textInput&&e.textInput.getElement()))&&window.focus(),e.focus(),setTimeout((function(){e.isFocused()||e.focus()}))},a=e.renderer.getMouseEventTarget()
n.addListener(a,"click",this.onMouseEvent.bind(this,"click"),e),n.addListener(a,"mousemove",this.onMouseMove.bind(this,"mousemove"),e),n.addMultiMouseDownListener([a,e.renderer.scrollBarV&&e.renderer.scrollBarV.inner,e.renderer.scrollBarH&&e.renderer.scrollBarH.inner,e.textInput&&e.textInput.getElement()].filter(Boolean),[400,300,250],this,"onMouseEvent",e),n.addMouseWheelListener(e.container,this.onMouseWheel.bind(this,"mousewheel"),e),h(e.container,e)
var c=e.renderer.$gutter
n.addListener(c,"mousedown",this.onMouseEvent.bind(this,"guttermousedown"),e),n.addListener(c,"click",this.onMouseEvent.bind(this,"gutterclick"),e),n.addListener(c,"dblclick",this.onMouseEvent.bind(this,"gutterdblclick"),e),n.addListener(c,"mousemove",this.onMouseEvent.bind(this,"guttermousemove"),e),n.addListener(a,"mousedown",i,e),n.addListener(c,"mousedown",i,e),s.isIE&&e.renderer.scrollBarV&&(n.addListener(e.renderer.scrollBarV.element,"mousedown",i,e),n.addListener(e.renderer.scrollBarH.element,"mousedown",i,e)),e.on("mousemove",(function(i){if(!t.state&&!t.$dragDelay&&t.$dragEnabled){var n=e.renderer.screenToTextCoordinates(i.x,i.y),s=e.session.selection.getRange(),o=e.renderer
!s.isEmpty()&&s.insideStart(n.row,n.column)?o.setCursorStyle("default"):o.setCursorStyle("")}}),e)};(function(){this.onMouseEvent=function(e,t){this.editor.session&&this.editor._emit(e,new a(t,this.editor))},this.onMouseMove=function(e,t){var i=this.editor._eventRegistry&&this.editor._eventRegistry.mousemove
i&&i.length&&this.editor._emit(e,new a(t,this.editor))},this.onMouseWheel=function(e,t){var i=new a(t,this.editor)
i.speed=2*this.$scrollSpeed,i.wheelX=t.wheelX,i.wheelY=t.wheelY,this.editor._emit(e,i)},this.setState=function(e){this.state=e},this.captureMouse=function(e,t){this.x=e.x,this.y=e.y,this.isMousePressed=!0
var i=this.editor,o=this.editor.renderer
o.$isMousePressed=!0
var r=this,l=function(e){if(e)return s.isWebKit&&!e.which&&r.releaseMouse?r.releaseMouse():(r.x=e.clientX,r.y=e.clientY,t&&t(e),r.mouseEvent=new a(e,r.editor),void(r.$mouseMoved=!0))},h=function(e){i.off("beforeEndOperation",u),clearInterval(d),i.session&&c(),r[r.state+"End"]&&r[r.state+"End"](e),r.state="",r.isMousePressed=o.$isMousePressed=!1,o.$keepTextAreaAtCursor&&o.$moveTextAreaToCursor(),r.$onCaptureMouseMove=r.releaseMouse=null,e&&r.onMouseEvent("mouseup",e),i.endOperation()},c=function(){r[r.state]&&r[r.state](),r.$mouseMoved=!1}
if(s.isOldIE&&"dblclick"==e.domEvent.type)return setTimeout((function(){h(e)}))
var u=function(e){r.releaseMouse&&i.curOp.command.name&&i.curOp.selectionChanged&&(r[r.state+"End"]&&r[r.state+"End"](),r.state="",r.releaseMouse())}
i.on("beforeEndOperation",u),i.startOperation({command:{name:"mouse"}}),r.$onCaptureMouseMove=l,r.releaseMouse=n.capture(this.editor.container,l,h)
var d=setInterval(c,20)},this.releaseMouse=null,this.cancelContextMenu=function(){var e=function(t){t&&t.domEvent&&"contextmenu"!=t.domEvent.type||(this.editor.off("nativecontextmenu",e),t&&t.domEvent&&n.stopEvent(t.domEvent))}.bind(this)
setTimeout(e,10),this.editor.on("nativecontextmenu",e)},this.destroy=function(){this.releaseMouse&&this.releaseMouse()}}).call(u.prototype),c.defineOptions(u.prototype,"mouseHandler",{scrollSpeed:{initialValue:2},dragDelay:{initialValue:s.isMac?150:0},dragEnabled:{initialValue:!0},focusTimeout:{initialValue:0},tooltipFollowsMouse:{initialValue:!0}}),t.MouseHandler=u})),ace.define("ace/mouse/fold_handler",["require","exports","module","ace/lib/dom"],(function(e,t,i){"use strict"
var n=e("../lib/dom")
t.FoldHandler=function(e){e.on("click",(function(t){var i=t.getDocumentPosition(),s=e.session,o=s.getFoldAt(i.row,i.column,1)
o&&(t.getAccelKey()?s.removeFold(o):s.expandFold(o),t.stop())
var r=t.domEvent&&t.domEvent.target
r&&n.hasCssClass(r,"ace_inline_button")&&n.hasCssClass(r,"ace_toggle_wrap")&&(s.setOption("wrap",!s.getUseWrapMode()),e.renderer.scrollCursorIntoView())})),e.on("gutterclick",(function(t){if("foldWidgets"==e.renderer.$gutterLayer.getRegion(t)){var i=t.getDocumentPosition().row,n=e.session
n.foldWidgets&&n.foldWidgets[i]&&e.session.onFoldWidgetClick(i,t),e.isFocused()||e.focus(),t.stop()}})),e.on("gutterdblclick",(function(t){if("foldWidgets"==e.renderer.$gutterLayer.getRegion(t)){var i=t.getDocumentPosition().row,n=e.session,s=n.getParentFoldRangeData(i,!0),o=s.range||s.firstRange
if(o){i=o.start.row
var r=n.getFoldAt(i,n.getLine(i).length,1)
r?n.removeFold(r):(n.addFold("...",o),e.renderer.scrollCursorIntoView({row:o.start.row,column:0}))}t.stop()}}))}})),ace.define("ace/keyboard/keybinding",["require","exports","module","ace/lib/keys","ace/lib/event"],(function(e,t,i){"use strict"
var n=e("../lib/keys"),s=e("../lib/event"),o=function(e){this.$editor=e,this.$data={editor:e},this.$handlers=[],this.setDefaultHandler(e.commands)};(function(){this.setDefaultHandler=function(e){this.removeKeyboardHandler(this.$defaultHandler),this.$defaultHandler=e,this.addKeyboardHandler(e,0)},this.setKeyboardHandler=function(e){var t=this.$handlers
if(t[t.length-1]!=e){for(;t[t.length-1]&&t[t.length-1]!=this.$defaultHandler;)this.removeKeyboardHandler(t[t.length-1])
this.addKeyboardHandler(e,1)}},this.addKeyboardHandler=function(e,t){if(e){"function"==typeof e&&!e.handleKeyboard&&(e.handleKeyboard=e)
var i=this.$handlers.indexOf(e);-1!=i&&this.$handlers.splice(i,1),null==t?this.$handlers.push(e):this.$handlers.splice(t,0,e),-1==i&&e.attach&&e.attach(this.$editor)}},this.removeKeyboardHandler=function(e){var t=this.$handlers.indexOf(e)
return-1!=t&&(this.$handlers.splice(t,1),e.detach&&e.detach(this.$editor),!0)},this.getKeyboardHandler=function(){return this.$handlers[this.$handlers.length-1]},this.getStatusText=function(){var e=this.$data,t=e.editor
return this.$handlers.map((function(i){return i.getStatusText&&i.getStatusText(t,e)||""})).filter(Boolean).join(" ")},this.$callKeyboardHandlers=function(e,t,i,n){for(var o,r=!1,a=this.$editor.commands,l=this.$handlers.length;l--&&!((o=this.$handlers[l].handleKeyboard(this.$data,e,t,i,n))&&o.command&&((r="null"==o.command||a.exec(o.command,this.$editor,o.args,n))&&n&&-1!=e&&1!=o.passEvent&&1!=o.command.passEvent&&s.stopEvent(n),r)););return!r&&-1==e&&(o={command:"insertstring"},r=a.exec("insertstring",this.$editor,t)),r&&this.$editor._signal&&this.$editor._signal("keyboardActivity",o),r},this.onCommandKey=function(e,t,i){var s=n.keyCodeToString(i)
return this.$callKeyboardHandlers(t,s,i,e)},this.onTextInput=function(e){return this.$callKeyboardHandlers(-1,e)}}).call(o.prototype),t.KeyBinding=o})),ace.define("ace/lib/bidiutil",["require","exports","module"],(function(e,t,i){"use strict"
function n(e,t,i,n){var s=a?g:d,f=null,m=null,p=null,v=0,w=null,$=-1,C=null,k=null,x=[]
if(!n)for(C=0,n=[];C<i;C++)n[C]=r(e[C])
for(l=a,h=!1,!1,c=!1,u=!1,k=0;k<i;k++){if(f=v,x[k]=m=o(e,n,x,k),w=240&(v=s[f][m]),v&=15,t[k]=p=s[v][5],w>0)if(16==w){for(C=$;C<k;C++)t[C]=1
$=-1}else $=-1
if(s[v][6])-1==$&&($=k)
else if($>-1){for(C=$;C<k;C++)t[C]=p
$=-1}n[k]==b&&(t[k]=0),l|=p}if(u)for(C=0;C<i;C++)if(n[C]==y){t[C]=a
for(var A=C-1;A>=0&&n[A]==S;A--)t[A]=a}}function s(e,t,i){if(!(l<e))if(1!=e||a!=f||c)for(var n,s,o,r,h=i.length,u=0;u<h;){if(t[u]>=e){for(n=u+1;n<h&&t[n]>=e;)n++
for(s=u,o=n-1;s<o;s++,o--)r=i[s],i[s]=i[o],i[o]=r
u=n}u++}else i.reverse()}function o(e,t,i,n){var s,o,r,l,d=t[n]
switch(d){case m:case p:h=!1
case $:case w:return d
case v:return h?w:v
case C:return h=!0,!0,p
case S:return $
case k:return n<1||n+1>=t.length||(s=i[n-1])!=v&&s!=w||(o=t[n+1])!=v&&o!=w?$:(h&&(o=w),o==s?o:$)
case x:return(s=n>0?i[n-1]:b)==v&&n+1<t.length&&t[n+1]==v?v:$
case A:if(n>0&&i[n-1]==v)return v
if(h)return $
for(l=n+1,r=t.length;l<r&&t[l]==A;)l++
return l<r&&t[l]==v?v:$
case L:for(r=t.length,l=n+1;l<r&&t[l]==L;)l++
if(l<r){var g=e[n],f=g>=1425&&g<=2303||64286==g
if(s=t[l],f&&(s==p||s==C))return p}return n<1||(s=t[n-1])==b?$:i[n-1]
case b:return h=!1,c=!0,a
case y:return u=!0,$
case R:case M:case E:case _:case T:h=!1
case I:return $}}function r(e){var t=e.charCodeAt(0),i=t>>8
return 0==i?t>191?m:F[t]:5==i?/[\u0591-\u05f4]/.test(e)?p:m:6==i?/[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e)?L:/[\u0660-\u0669\u066b-\u066c]/.test(e)?w:1642==t?A:/[\u06f0-\u06f9]/.test(e)?v:C:32==i&&t<=8287?W[255&t]:254==i&&t>=65136?C:$}var a=0,l=0,h=!1,c=!1,u=!1,d=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],g=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],f=1,m=0,p=1,v=2,w=3,$=4,b=5,y=6,C=7,S=8,k=9,x=10,A=11,L=12,R=13,M=14,T=15,E=16,_=17,I=18,F=[I,I,I,I,I,I,I,I,I,y,b,y,S,b,I,I,I,I,I,I,I,I,I,I,I,I,I,I,b,b,b,y,S,$,$,A,A,A,$,$,$,$,$,x,k,x,k,k,v,v,v,v,v,v,v,v,v,v,k,$,$,$,$,$,$,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,$,$,$,$,$,$,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,$,$,$,$,I,I,I,I,I,I,b,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,k,$,A,A,A,A,$,$,$,$,m,$,$,I,$,$,A,A,v,v,$,m,$,$,$,v,m,$,$,$,$,$],W=[S,S,S,S,S,S,S,S,S,S,S,I,I,I,m,p,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,S,b,R,M,T,E,_,k,A,A,A,A,A,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,k,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,S]
t.L=m,t.R=p,t.EN=v,t.ON_R=3,t.AN=4,t.R_H=5,t.B=6,t.RLE=7,t.DOT="·",t.doBidiReorder=function(e,i,o){if(e.length<2)return{}
var r=e.split(""),l=new Array(r.length),h=new Array(r.length),c=[]
a=o?f:0,n(r,c,r.length,i)
for(var u=0;u<l.length;l[u]=u,u++);s(2,c,l),s(1,c,l)
for(u=0;u<l.length-1;u++)i[u]===w?c[u]=t.AN:c[u]===p&&(i[u]>C&&i[u]<R||i[u]===$||i[u]===I)?c[u]=t.ON_R:u>0&&"ل"===r[u-1]&&/\u0622|\u0623|\u0625|\u0627/.test(r[u])&&(c[u-1]=c[u]=t.R_H,u++)
r[r.length-1]===t.DOT&&(c[r.length-1]=t.B),"‫"===r[0]&&(c[0]=t.RLE)
for(u=0;u<l.length;u++)h[u]=c[l[u]]
return{logicalFromVisual:l,bidiLevels:h}},t.hasBidiCharacters=function(e,t){for(var i=!1,n=0;n<e.length;n++)t[n]=r(e.charAt(n)),!i&&(t[n]==p||t[n]==C||t[n]==w)&&(i=!0)
return i},t.getVisualFromLogicalIdx=function(e,t){for(var i=0;i<t.logicalFromVisual.length;i++)if(t.logicalFromVisual[i]==e)return i
return 0}})),ace.define("ace/bidihandler",["require","exports","module","ace/lib/bidiutil","ace/lib/lang"],(function(e,t,i){"use strict"
var n=e("./lib/bidiutil"),s=e("./lib/lang"),o=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/,r=function(e){this.session=e,this.bidiMap={},this.currentRow=null,this.bidiUtil=n,this.charWidths=[],this.EOL="¬",this.showInvisibles=!0,this.isRtlDir=!1,this.$isRtl=!1,this.line="",this.wrapIndent=0,this.EOF="¶",this.RLE="‫",this.contentWidth=0,this.fontMetrics=null,this.rtlLineOffset=0,this.wrapOffset=0,this.isMoveLeftOperation=!1,this.seenBidi=o.test(e.getValue())};(function(){this.isBidiRow=function(e,t,i){return!!this.seenBidi&&(e!==this.currentRow&&(this.currentRow=e,this.updateRowLine(t,i),this.updateBidiMap()),this.bidiMap.bidiLevels)},this.onChange=function(e){this.seenBidi?this.currentRow=null:"insert"==e.action&&o.test(e.lines.join("\n"))&&(this.seenBidi=!0,this.currentRow=null)},this.getDocumentRow=function(){var e=0,t=this.session.$screenRowCache
if(t.length){var i=this.session.$getRowCacheIndex(t,this.currentRow)
i>=0&&(e=this.session.$docRowCache[i])}return e},this.getSplitIndex=function(){var e=0,t=this.session.$screenRowCache
if(t.length)for(var i,n=this.session.$getRowCacheIndex(t,this.currentRow);this.currentRow-e>0&&(i=this.session.$getRowCacheIndex(t,this.currentRow-e-1))===n;)n=i,e++
else e=this.currentRow
return e},this.updateRowLine=function(e,t){void 0===e&&(e=this.getDocumentRow())
var i=e===this.session.getLength()-1?this.EOF:this.EOL
if(this.wrapIndent=0,this.line=this.session.getLine(e),this.isRtlDir=this.$isRtl||this.line.charAt(0)===this.RLE,this.session.$useWrapMode){var o=this.session.$wrapData[e]
o&&(void 0===t&&(t=this.getSplitIndex()),t>0&&o.length?(this.wrapIndent=o.indent,this.wrapOffset=this.wrapIndent*this.charWidths[n.L],this.line=t<o.length?this.line.substring(o[t-1],o[t]):this.line.substring(o[o.length-1])):this.line=this.line.substring(0,o[t]),t==o.length&&(this.line+=this.showInvisibles?i:n.DOT))}else this.line+=this.showInvisibles?i:n.DOT
var r,a=this.session,l=0
this.line=this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g,(function(e,t){return"\t"===e||a.isFullWidth(e.charCodeAt(0))?(r="\t"===e?a.getScreenTabSize(t+l):2,l+=r-1,s.stringRepeat(n.DOT,r)):e})),this.isRtlDir&&(this.fontMetrics.$main.textContent=this.line.charAt(this.line.length-1)==n.DOT?this.line.substr(0,this.line.length-1):this.line,this.rtlLineOffset=this.contentWidth-this.fontMetrics.$main.getBoundingClientRect().width)},this.updateBidiMap=function(){var e=[]
n.hasBidiCharacters(this.line,e)||this.isRtlDir?this.bidiMap=n.doBidiReorder(this.line,e,this.isRtlDir):this.bidiMap={}},this.markAsDirty=function(){this.currentRow=null},this.updateCharacterWidths=function(e){if(this.characterWidth!==e.$characterSize.width){this.fontMetrics=e
var t=this.characterWidth=e.$characterSize.width,i=e.$measureCharWidth("ה")
this.charWidths[n.L]=this.charWidths[n.EN]=this.charWidths[n.ON_R]=t,this.charWidths[n.R]=this.charWidths[n.AN]=i,this.charWidths[n.R_H]=.45*i,this.charWidths[n.B]=this.charWidths[n.RLE]=0,this.currentRow=null}},this.setShowInvisibles=function(e){this.showInvisibles=e,this.currentRow=null},this.setEolChar=function(e){this.EOL=e},this.setContentWidth=function(e){this.contentWidth=e},this.isRtlLine=function(e){return!!this.$isRtl||(null!=e?this.session.getLine(e).charAt(0)==this.RLE:this.isRtlDir)},this.setRtlDirection=function(e,t){for(var i=e.getCursorPosition(),n=e.selection.getSelectionAnchor().row;n<=i.row;n++)t||e.session.getLine(n).charAt(0)!==e.session.$bidiHandler.RLE?t&&e.session.getLine(n).charAt(0)!==e.session.$bidiHandler.RLE&&e.session.doc.insert({column:0,row:n},e.session.$bidiHandler.RLE):e.session.doc.removeInLine(n,0,1)},this.getPosLeft=function(e){e-=this.wrapIndent
var t=this.line.charAt(0)===this.RLE?1:0,i=e>t?this.session.getOverwrite()?e:e-1:t,s=n.getVisualFromLogicalIdx(i,this.bidiMap),o=this.bidiMap.bidiLevels,r=0
!this.session.getOverwrite()&&e<=t&&o[s]%2!=0&&s++
for(var a=0;a<s;a++)r+=this.charWidths[o[a]]
return!this.session.getOverwrite()&&e>t&&o[s]%2==0&&(r+=this.charWidths[o[s]]),this.wrapIndent&&(r+=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset),this.isRtlDir&&(r+=this.rtlLineOffset),r},this.getSelections=function(e,t){var i,n=this.bidiMap,s=n.bidiLevels,o=[],r=0,a=Math.min(e,t)-this.wrapIndent,l=Math.max(e,t)-this.wrapIndent,h=!1,c=!1,u=0
this.wrapIndent&&(r+=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset)
for(var d,g=0;g<s.length;g++)d=n.logicalFromVisual[g],i=s[g],(h=d>=a&&d<l)&&!c?u=r:!h&&c&&o.push({left:u,width:r-u}),r+=this.charWidths[i],c=h
if(h&&g===s.length&&o.push({left:u,width:r-u}),this.isRtlDir)for(var f=0;f<o.length;f++)o[f].left+=this.rtlLineOffset
return o},this.offsetToCol=function(e){this.isRtlDir&&(e-=this.rtlLineOffset)
var t=0,i=(e=Math.max(e,0),0),n=0,s=this.bidiMap.bidiLevels,o=this.charWidths[s[n]]
for(this.wrapIndent&&(e-=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset);e>i+o/2;){if(i+=o,n===s.length-1){o=0
break}o=this.charWidths[s[++n]]}return n>0&&s[n-1]%2!=0&&s[n]%2==0?(e<i&&n--,t=this.bidiMap.logicalFromVisual[n]):n>0&&s[n-1]%2==0&&s[n]%2!=0?t=1+(e>i?this.bidiMap.logicalFromVisual[n]:this.bidiMap.logicalFromVisual[n-1]):this.isRtlDir&&n===s.length-1&&0===o&&s[n-1]%2==0||!this.isRtlDir&&0===n&&s[n]%2!=0?t=1+this.bidiMap.logicalFromVisual[n]:(n>0&&s[n-1]%2!=0&&0!==o&&n--,t=this.bidiMap.logicalFromVisual[n]),0===t&&this.isRtlDir&&t++,t+this.wrapIndent}}).call(r.prototype),t.BidiHandler=r})),ace.define("ace/selection",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/range"],(function(e,t,i){"use strict"
var n=e("./lib/oop"),s=e("./lib/lang"),o=e("./lib/event_emitter").EventEmitter,r=e("./range").Range,a=function(e){this.session=e,this.doc=e.getDocument(),this.clearSelection(),this.cursor=this.lead=this.doc.createAnchor(0,0),this.anchor=this.doc.createAnchor(0,0),this.$silent=!1
var t=this
this.cursor.on("change",(function(e){t.$cursorChanged=!0,t.$silent||t._emit("changeCursor"),!t.$isEmpty&&!t.$silent&&t._emit("changeSelection"),!t.$keepDesiredColumnOnChange&&e.old.column!=e.value.column&&(t.$desiredColumn=null)})),this.anchor.on("change",(function(){t.$anchorChanged=!0,!t.$isEmpty&&!t.$silent&&t._emit("changeSelection")}))};(function(){n.implement(this,o),this.isEmpty=function(){return this.$isEmpty||this.anchor.row==this.lead.row&&this.anchor.column==this.lead.column},this.isMultiLine=function(){return!this.$isEmpty&&this.anchor.row!=this.cursor.row},this.getCursor=function(){return this.lead.getPosition()},this.setSelectionAnchor=function(e,t){this.$isEmpty=!1,this.anchor.setPosition(e,t)},this.getAnchor=this.getSelectionAnchor=function(){return this.$isEmpty?this.getSelectionLead():this.anchor.getPosition()},this.getSelectionLead=function(){return this.lead.getPosition()},this.isBackwards=function(){var e=this.anchor,t=this.lead
return e.row>t.row||e.row==t.row&&e.column>t.column},this.getRange=function(){var e=this.anchor,t=this.lead
return this.$isEmpty?r.fromPoints(t,t):this.isBackwards()?r.fromPoints(t,e):r.fromPoints(e,t)},this.clearSelection=function(){this.$isEmpty||(this.$isEmpty=!0,this._emit("changeSelection"))},this.selectAll=function(){this.$setSelection(0,0,Number.MAX_VALUE,Number.MAX_VALUE)},this.setRange=this.setSelectionRange=function(e,t){var i=t?e.end:e.start,n=t?e.start:e.end
this.$setSelection(i.row,i.column,n.row,n.column)},this.$setSelection=function(e,t,i,n){if(!this.$silent){var s=this.$isEmpty,o=this.inMultiSelectMode
this.$silent=!0,this.$cursorChanged=this.$anchorChanged=!1,this.anchor.setPosition(e,t),this.cursor.setPosition(i,n),this.$isEmpty=!r.comparePoints(this.anchor,this.cursor),this.$silent=!1,this.$cursorChanged&&this._emit("changeCursor"),(this.$cursorChanged||this.$anchorChanged||s!=this.$isEmpty||o)&&this._emit("changeSelection")}},this.$moveSelection=function(e){var t=this.lead
this.$isEmpty&&this.setSelectionAnchor(t.row,t.column),e.call(this)},this.selectTo=function(e,t){this.$moveSelection((function(){this.moveCursorTo(e,t)}))},this.selectToPosition=function(e){this.$moveSelection((function(){this.moveCursorToPosition(e)}))},this.moveTo=function(e,t){this.clearSelection(),this.moveCursorTo(e,t)},this.moveToPosition=function(e){this.clearSelection(),this.moveCursorToPosition(e)},this.selectUp=function(){this.$moveSelection(this.moveCursorUp)},this.selectDown=function(){this.$moveSelection(this.moveCursorDown)},this.selectRight=function(){this.$moveSelection(this.moveCursorRight)},this.selectLeft=function(){this.$moveSelection(this.moveCursorLeft)},this.selectLineStart=function(){this.$moveSelection(this.moveCursorLineStart)},this.selectLineEnd=function(){this.$moveSelection(this.moveCursorLineEnd)},this.selectFileEnd=function(){this.$moveSelection(this.moveCursorFileEnd)},this.selectFileStart=function(){this.$moveSelection(this.moveCursorFileStart)},this.selectWordRight=function(){this.$moveSelection(this.moveCursorWordRight)},this.selectWordLeft=function(){this.$moveSelection(this.moveCursorWordLeft)},this.getWordRange=function(e,t){if(void 0===t){var i=e||this.lead
e=i.row,t=i.column}return this.session.getWordRange(e,t)},this.selectWord=function(){this.setSelectionRange(this.getWordRange())},this.selectAWord=function(){var e=this.getCursor(),t=this.session.getAWordRange(e.row,e.column)
this.setSelectionRange(t)},this.getLineRange=function(e,t){var i,n="number"==typeof e?e:this.lead.row,s=this.session.getFoldLine(n)
return s?(n=s.start.row,i=s.end.row):i=n,!0===t?new r(n,0,i,this.session.getLine(i).length):new r(n,0,i+1,0)},this.selectLine=function(){this.setSelectionRange(this.getLineRange())},this.moveCursorUp=function(){this.moveCursorBy(-1,0)},this.moveCursorDown=function(){this.moveCursorBy(1,0)},this.wouldMoveIntoSoftTab=function(e,t,i){var n=e.column,s=e.column+t
return i<0&&(n=e.column-t,s=e.column),this.session.isTabStop(e)&&this.doc.getLine(e.row).slice(n,s).split(" ").length-1==t},this.moveCursorLeft=function(){var e,t=this.lead.getPosition()
if(e=this.session.getFoldAt(t.row,t.column,-1))this.moveCursorTo(e.start.row,e.start.column)
else if(0===t.column)t.row>0&&this.moveCursorTo(t.row-1,this.doc.getLine(t.row-1).length)
else{var i=this.session.getTabSize()
this.wouldMoveIntoSoftTab(t,i,-1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,-i):this.moveCursorBy(0,-1)}},this.moveCursorRight=function(){var e,t=this.lead.getPosition()
if(e=this.session.getFoldAt(t.row,t.column,1))this.moveCursorTo(e.end.row,e.end.column)
else if(this.lead.column==this.doc.getLine(this.lead.row).length)this.lead.row<this.doc.getLength()-1&&this.moveCursorTo(this.lead.row+1,0)
else{var i=this.session.getTabSize()
t=this.lead
this.wouldMoveIntoSoftTab(t,i,1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,i):this.moveCursorBy(0,1)}},this.moveCursorLineStart=function(){var e=this.lead.row,t=this.lead.column,i=this.session.documentToScreenRow(e,t),n=this.session.screenToDocumentPosition(i,0),s=this.session.getDisplayLine(e,null,n.row,n.column).match(/^\s*/)
s[0].length!=t&&!this.session.$useEmacsStyleLineStart&&(n.column+=s[0].length),this.moveCursorToPosition(n)},this.moveCursorLineEnd=function(){var e=this.lead,t=this.session.getDocumentLastRowColumnPosition(e.row,e.column)
if(this.lead.column==t.column){var i=this.session.getLine(t.row)
if(t.column==i.length){var n=i.search(/\s+$/)
n>0&&(t.column=n)}}this.moveCursorTo(t.row,t.column)},this.moveCursorFileEnd=function(){var e=this.doc.getLength()-1,t=this.doc.getLine(e).length
this.moveCursorTo(e,t)},this.moveCursorFileStart=function(){this.moveCursorTo(0,0)},this.moveCursorLongWordRight=function(){var e=this.lead.row,t=this.lead.column,i=this.doc.getLine(e),n=i.substring(t)
this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0
var s=this.session.getFoldAt(e,t,1)
if(s)this.moveCursorTo(s.end.row,s.end.column)
else{if(this.session.nonTokenRe.exec(n)&&(t+=this.session.nonTokenRe.lastIndex,this.session.nonTokenRe.lastIndex=0,n=i.substring(t)),t>=i.length)return this.moveCursorTo(e,i.length),this.moveCursorRight(),void(e<this.doc.getLength()-1&&this.moveCursorWordRight())
this.session.tokenRe.exec(n)&&(t+=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(e,t)}},this.moveCursorLongWordLeft=function(){var e,t=this.lead.row,i=this.lead.column
if(e=this.session.getFoldAt(t,i,-1))this.moveCursorTo(e.start.row,e.start.column)
else{var n=this.session.getFoldStringAt(t,i,-1)
null==n&&(n=this.doc.getLine(t).substring(0,i))
var o=s.stringReverse(n)
if(this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0,this.session.nonTokenRe.exec(o)&&(i-=this.session.nonTokenRe.lastIndex,o=o.slice(this.session.nonTokenRe.lastIndex),this.session.nonTokenRe.lastIndex=0),i<=0)return this.moveCursorTo(t,0),this.moveCursorLeft(),void(t>0&&this.moveCursorWordLeft())
this.session.tokenRe.exec(o)&&(i-=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(t,i)}},this.$shortWordEndIndex=function(e){var t,i=0,n=/\s/,s=this.session.tokenRe
if(s.lastIndex=0,this.session.tokenRe.exec(e))i=this.session.tokenRe.lastIndex
else{for(;(t=e[i])&&n.test(t);)i++
if(i<1)for(s.lastIndex=0;(t=e[i])&&!s.test(t);)if(s.lastIndex=0,i++,n.test(t)){if(i>2){i--
break}for(;(t=e[i])&&n.test(t);)i++
if(i>2)break}}return s.lastIndex=0,i},this.moveCursorShortWordRight=function(){var e=this.lead.row,t=this.lead.column,i=this.doc.getLine(e),n=i.substring(t),s=this.session.getFoldAt(e,t,1)
if(s)return this.moveCursorTo(s.end.row,s.end.column)
if(t==i.length){var o=this.doc.getLength()
do{e++,n=this.doc.getLine(e)}while(e<o&&/^\s*$/.test(n));/^\s+/.test(n)||(n=""),t=0}var r=this.$shortWordEndIndex(n)
this.moveCursorTo(e,t+r)},this.moveCursorShortWordLeft=function(){var e,t=this.lead.row,i=this.lead.column
if(e=this.session.getFoldAt(t,i,-1))return this.moveCursorTo(e.start.row,e.start.column)
var n=this.session.getLine(t).substring(0,i)
if(0===i){do{t--,n=this.doc.getLine(t)}while(t>0&&/^\s*$/.test(n))
i=n.length,/\s+$/.test(n)||(n="")}var o=s.stringReverse(n),r=this.$shortWordEndIndex(o)
return this.moveCursorTo(t,i-r)},this.moveCursorWordRight=function(){this.session.$selectLongWords?this.moveCursorLongWordRight():this.moveCursorShortWordRight()},this.moveCursorWordLeft=function(){this.session.$selectLongWords?this.moveCursorLongWordLeft():this.moveCursorShortWordLeft()},this.moveCursorBy=function(e,t){var i,n=this.session.documentToScreenPosition(this.lead.row,this.lead.column)
if(0===t&&(0!==e&&(this.session.$bidiHandler.isBidiRow(n.row,this.lead.row)?(i=this.session.$bidiHandler.getPosLeft(n.column),n.column=Math.round(i/this.session.$bidiHandler.charWidths[0])):i=n.column*this.session.$bidiHandler.charWidths[0]),this.$desiredColumn?n.column=this.$desiredColumn:this.$desiredColumn=n.column),0!=e&&this.session.lineWidgets&&this.session.lineWidgets[this.lead.row]){var s=this.session.lineWidgets[this.lead.row]
e<0?e-=s.rowsAbove||0:e>0&&(e+=s.rowCount-(s.rowsAbove||0))}var o=this.session.screenToDocumentPosition(n.row+e,n.column,i)
0!==e&&0===t&&o.row===this.lead.row&&(o.column,this.lead.column),this.moveCursorTo(o.row,o.column+t,0===t)},this.moveCursorToPosition=function(e){this.moveCursorTo(e.row,e.column)},this.moveCursorTo=function(e,t,i){var n=this.session.getFoldAt(e,t,1)
n&&(e=n.start.row,t=n.start.column),this.$keepDesiredColumnOnChange=!0
var s=this.session.getLine(e);/[\uDC00-\uDFFF]/.test(s.charAt(t))&&s.charAt(t-1)&&(this.lead.row==e&&this.lead.column==t+1?t-=1:t+=1),this.lead.setPosition(e,t),this.$keepDesiredColumnOnChange=!1,i||(this.$desiredColumn=null)},this.moveCursorToScreen=function(e,t,i){var n=this.session.screenToDocumentPosition(e,t)
this.moveCursorTo(n.row,n.column,i)},this.detach=function(){this.lead.detach(),this.anchor.detach()},this.fromOrientedRange=function(e){this.setSelectionRange(e,e.cursor==e.start),this.$desiredColumn=e.desiredColumn||this.$desiredColumn},this.toOrientedRange=function(e){var t=this.getRange()
return e?(e.start.column=t.start.column,e.start.row=t.start.row,e.end.column=t.end.column,e.end.row=t.end.row):e=t,e.cursor=this.isBackwards()?e.start:e.end,e.desiredColumn=this.$desiredColumn,e},this.getRangeOfMovements=function(e){var t=this.getCursor()
try{e(this)
var i=this.getCursor()
return r.fromPoints(t,i)}catch(n){return r.fromPoints(t,t)}finally{this.moveCursorToPosition(t)}},this.toJSON=function(){if(this.rangeCount)var e=this.ranges.map((function(e){var t=e.clone()
return t.isBackwards=e.cursor==e.start,t}))
else(e=this.getRange()).isBackwards=this.isBackwards()
return e},this.fromJSON=function(e){if(null==e.start){if(this.rangeList&&e.length>1){this.toSingleRange(e[0])
for(var t=e.length;t--;){var i=r.fromPoints(e[t].start,e[t].end)
e[t].isBackwards&&(i.cursor=i.start),this.addRange(i,!0)}return}e=e[0]}this.rangeList&&this.toSingleRange(e),this.setSelectionRange(e,e.isBackwards)},this.isEqual=function(e){if((e.length||this.rangeCount)&&e.length!=this.rangeCount)return!1
if(!e.length||!this.ranges)return this.getRange().isEqual(e)
for(var t=this.ranges.length;t--;)if(!this.ranges[t].isEqual(e[t]))return!1
return!0}}).call(a.prototype),t.Selection=a})),ace.define("ace/tokenizer",["require","exports","module","ace/config"],(function(e,t,i){"use strict"
var n=e("./config"),s=2e3,o=function(e){for(var t in this.states=e,this.regExps={},this.matchMappings={},this.states){for(var i=this.states[t],n=[],s=0,o=this.matchMappings[t]={defaultToken:"text"},r="g",a=[],l=0;l<i.length;l++){var h=i[l]
if(h.defaultToken&&(o.defaultToken=h.defaultToken),h.caseInsensitive&&-1===r.indexOf("i")&&(r+="i"),h.unicode&&-1===r.indexOf("u")&&(r+="u"),null!=h.regex){h.regex instanceof RegExp&&(h.regex=h.regex.toString().slice(1,-1))
var c=h.regex,u=new RegExp("(?:("+c+")|(.))").exec("a").length-2
Array.isArray(h.token)?1==h.token.length||1==u?h.token=h.token[0]:u-1!=h.token.length?(this.reportError("number of classes and regexp groups doesn't match",{rule:h,groupCount:u-1}),h.token=h.token[0]):(h.tokenArray=h.token,h.token=null,h.onMatch=this.$arrayTokens):"function"==typeof h.token&&!h.onMatch&&(h.onMatch=u>1?this.$applyToken:h.token),u>1&&(/\\\d/.test(h.regex)?c=h.regex.replace(/\\([0-9]+)/g,(function(e,t){return"\\"+(parseInt(t,10)+s+1)})):(u=1,c=this.removeCapturingGroups(h.regex)),!h.splitRegex&&"string"!=typeof h.token&&a.push(h)),o[s]=l,s+=u,n.push(c),h.onMatch||(h.onMatch=null)}}n.length||(o[0]=0,n.push("$")),a.forEach((function(e){e.splitRegex=this.createSplitterRegexp(e.regex,r)}),this),this.regExps[t]=new RegExp("("+n.join(")|(")+")|($)",r)}};(function(){this.$setMaxTokenCount=function(e){s=0|e},this.$applyToken=function(e){var t=this.splitRegex.exec(e).slice(1),i=this.token.apply(this,t)
if("string"==typeof i)return[{type:i,value:e}]
for(var n=[],s=0,o=i.length;s<o;s++)t[s]&&(n[n.length]={type:i[s],value:t[s]})
return n},this.$arrayTokens=function(e){if(!e)return[]
var t=this.splitRegex.exec(e)
if(!t)return"text"
for(var i=[],n=this.tokenArray,s=0,o=n.length;s<o;s++)t[s+1]&&(i[i.length]={type:n[s],value:t[s+1]})
return i},this.removeCapturingGroups=function(e){return e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g,(function(e,t){return t?"(?:":e}))},this.createSplitterRegexp=function(e,t){if(-1!=e.indexOf("(?=")){var i=0,n=!1,s={}
e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,(function(e,t,o,r,a,l){return n?n="]"!=a:a?n=!0:r?(i==s.stack&&(s.end=l+1,s.stack=-1),i--):o&&(i++,1!=o.length&&(s.stack=i,s.start=l)),e})),null!=s.end&&/^\)*$/.test(e.substr(s.end))&&(e=e.substring(0,s.start)+e.substr(s.end))}return"^"!=e.charAt(0)&&(e="^"+e),"$"!=e.charAt(e.length-1)&&(e+="$"),new RegExp(e,(t||"").replace("g",""))},this.getLineTokens=function(e,t){if(t&&"string"!=typeof t){var i=t.slice(0)
"#tmp"===(t=i[0])&&(i.shift(),t=i.shift())}else i=[]
var n=t||"start",o=this.states[n]
o||(n="start",o=this.states[n])
var r=this.matchMappings[n],a=this.regExps[n]
a.lastIndex=0
for(var l,h=[],c=0,u=0,d={type:null,value:""};l=a.exec(e);){var g=r.defaultToken,f=null,m=l[0],p=a.lastIndex
if(p-m.length>c){var v=e.substring(c,p-m.length)
d.type==g?d.value+=v:(d.type&&h.push(d),d={type:g,value:v})}for(var w=0;w<l.length-2;w++)if(void 0!==l[w+1]){g=(f=o[r[w]]).onMatch?f.onMatch(m,n,i,e):f.token,f.next&&(n="string"==typeof f.next?f.next:f.next(n,i),(o=this.states[n])||(this.reportError("state doesn't exist",n),n="start",o=this.states[n]),r=this.matchMappings[n],c=p,(a=this.regExps[n]).lastIndex=p),f.consumeLineEnd&&(c=p)
break}if(m)if("string"==typeof g)f&&!1===f.merge||d.type!==g?(d.type&&h.push(d),d={type:g,value:m}):d.value+=m
else if(g){d.type&&h.push(d),d={type:null,value:""}
for(w=0;w<g.length;w++)h.push(g[w])}if(c==e.length)break
if(c=p,u++>s){for(u>2*e.length&&this.reportError("infinite loop with in ace tokenizer",{startState:t,line:e});c<e.length;)d.type&&h.push(d),d={value:e.substring(c,c+=500),type:"overflow"}
n="start",i=[]
break}}return d.type&&h.push(d),i.length>1&&i[0]!==n&&i.unshift("#tmp",n),{tokens:h,state:i.length?i:n}},this.reportError=n.reportError}).call(o.prototype),t.Tokenizer=o})),ace.define("ace/mode/text_highlight_rules",["require","exports","module","ace/lib/lang"],(function(e,t,i){"use strict"
var n=e("../lib/lang"),s=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{defaultToken:"text"}]}};(function(){this.addRules=function(e,t){if(t)for(var i in e){for(var n=e[i],s=0;s<n.length;s++){var o=n[s];(o.next||o.onMatch)&&("string"==typeof o.next&&0!==o.next.indexOf(t)&&(o.next=t+o.next),o.nextState&&0!==o.nextState.indexOf(t)&&(o.nextState=t+o.nextState))}this.$rules[t+i]=n}else for(var i in e)this.$rules[i]=e[i]},this.getRules=function(){return this.$rules},this.embedRules=function(e,t,i,s,o){var r="function"==typeof e?(new e).getRules():e
if(s)for(var a=0;a<s.length;a++)s[a]=t+s[a]
else for(var l in s=[],r)s.push(t+l)
if(this.addRules(r,t),i){var h=Array.prototype[o?"push":"unshift"]
for(a=0;a<s.length;a++)h.apply(this.$rules[s[a]],n.deepCopy(i))}this.$embeds||(this.$embeds=[]),this.$embeds.push(t)},this.getEmbeds=function(){return this.$embeds}
var e=function(e,t){return("start"!=e||t.length)&&t.unshift(this.nextState,e),this.nextState},t=function(e,t){return t.shift(),t.shift()||"start"}
this.normalizeRules=function(){var i=0,n=this.$rules
Object.keys(n).forEach((function s(o){var r=n[o]
r.processed=!0
for(var a=0;a<r.length;a++){var l=r[a],h=null
Array.isArray(l)&&(h=l,l={}),!l.regex&&l.start&&(l.regex=l.start,l.next||(l.next=[]),l.next.push({defaultToken:l.token},{token:l.token+".end",regex:l.end||l.start,next:"pop"}),l.token=l.token+".start",l.push=!0)
var c=l.next||l.push
if(c&&Array.isArray(c)){var u=l.stateName
u||("string"!=typeof(u=l.token)&&(u=u[0]||""),n[u]&&(u+=i++)),n[u]=c,l.next=u,s(u)}else"pop"==c&&(l.next=t)
if(l.push&&(l.nextState=l.next||l.push,l.next=e,delete l.push),l.rules)for(var d in l.rules)n[d]?n[d].push&&n[d].push.apply(n[d],l.rules[d]):n[d]=l.rules[d]
var g="string"==typeof l?l:l.include
if(g&&(h=Array.isArray(g)?g.map((function(e){return n[e]})):n[g]),h){var f=[a,1].concat(h)
l.noEscape&&(f=f.filter((function(e){return!e.next}))),r.splice.apply(r,f),a--}l.keywordMap&&(l.token=this.createKeywordMapper(l.keywordMap,l.defaultToken||"text",l.caseInsensitive),delete l.defaultToken)}}),this)},this.createKeywordMapper=function(e,t,i,n){var s=Object.create(null)
return this.$keywordList=[],Object.keys(e).forEach((function(t){for(var o=e[t].split(n||"|"),r=o.length;r--;){var a=o[r]
this.$keywordList.push(a),i&&(a=a.toLowerCase()),s[a]=t}}),this),e=null,i?function(e){return s[e.toLowerCase()]||t}:function(e){return s[e]||t}},this.getKeywords=function(){return this.$keywords}}).call(s.prototype),t.TextHighlightRules=s})),ace.define("ace/mode/behaviour",["require","exports","module"],(function(e,t,i){"use strict"
var n=function(){this.$behaviours={}};(function(){this.add=function(e,t,i){switch(void 0){case this.$behaviours:this.$behaviours={}
case this.$behaviours[e]:this.$behaviours[e]={}}this.$behaviours[e][t]=i},this.addBehaviours=function(e){for(var t in e)for(var i in e[t])this.add(t,i,e[t][i])},this.remove=function(e){this.$behaviours&&this.$behaviours[e]&&delete this.$behaviours[e]},this.inherit=function(e,t){if("function"==typeof e)var i=(new e).getBehaviours(t)
else i=e.getBehaviours(t)
this.addBehaviours(i)},this.getBehaviours=function(e){if(!e)return this.$behaviours
for(var t={},i=0;i<e.length;i++)this.$behaviours[e[i]]&&(t[e[i]]=this.$behaviours[e[i]])
return t}}).call(n.prototype),t.Behaviour=n})),ace.define("ace/token_iterator",["require","exports","module","ace/range"],(function(e,t,i){"use strict"
var n=e("./range").Range,s=function(e,t,i){this.$session=e,this.$row=t,this.$rowTokens=e.getTokens(t)
var n=e.getTokenAt(t,i)
this.$tokenIndex=n?n.index:-1};(function(){this.stepBackward=function(){for(this.$tokenIndex-=1;this.$tokenIndex<0;){if(this.$row-=1,this.$row<0)return this.$row=0,null
this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=this.$rowTokens.length-1}return this.$rowTokens[this.$tokenIndex]},this.stepForward=function(){var e
for(this.$tokenIndex+=1;this.$tokenIndex>=this.$rowTokens.length;){if(this.$row+=1,e||(e=this.$session.getLength()),this.$row>=e)return this.$row=e-1,null
this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=0}return this.$rowTokens[this.$tokenIndex]},this.getCurrentToken=function(){return this.$rowTokens[this.$tokenIndex]},this.getCurrentTokenRow=function(){return this.$row},this.getCurrentTokenColumn=function(){var e=this.$rowTokens,t=this.$tokenIndex,i=e[t].start
if(void 0!==i)return i
for(i=0;t>0;)i+=e[t-=1].value.length
return i},this.getCurrentTokenPosition=function(){return{row:this.$row,column:this.getCurrentTokenColumn()}},this.getCurrentTokenRange=function(){var e=this.$rowTokens[this.$tokenIndex],t=this.getCurrentTokenColumn()
return new n(this.$row,t,this.$row,t+e.value.length)}}).call(s.prototype),t.TokenIterator=s})),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],(function(e,t,i){"use strict"
var n,s=e("../../lib/oop"),o=e("../behaviour").Behaviour,r=e("../../token_iterator").TokenIterator,a=e("../../lib/lang"),l=["text","paren.rparen","rparen","paren","punctuation.operator"],h=["text","paren.rparen","rparen","paren","punctuation.operator","comment"],c={},u={'"':'"',"'":"'"},d=function(e){var t=-1
if(e.multiSelect&&(t=e.selection.index,c.rangeCount!=e.multiSelect.rangeCount&&(c={rangeCount:e.multiSelect.rangeCount})),c[t])return n=c[t]
n=c[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""}},g=function(e,t,i,n){var s=e.end.row-e.start.row
return{text:i+t+n,selection:[0,e.start.column+1,s,e.end.column+(s?0:1)]}},f=function(e){this.add("braces","insertion",(function(t,i,s,o,r){var l=s.getCursorPosition(),h=o.doc.getLine(l.row)
if("{"==r){d(s)
var c=s.getSelectionRange(),u=o.doc.getTextRange(c)
if(""!==u&&"{"!==u&&s.getWrapBehavioursEnabled())return g(c,u,"{","}")
if(f.isSaneInsertion(s,o))return/[\]\}\)]/.test(h[l.column])||s.inMultiSelectMode||e&&e.braces?(f.recordAutoInsert(s,o,"}"),{text:"{}",selection:[1,1]}):(f.recordMaybeInsert(s,o,"{"),{text:"{",selection:[1,1]})}else if("}"==r){if(d(s),"}"==h.substring(l.column,l.column+1))if(null!==o.$findOpeningBracket("}",{column:l.column+1,row:l.row})&&f.isAutoInsertedClosing(l,h,r))return f.popAutoInsertedClosing(),{text:"",selection:[1,1]}}else{if("\n"==r||"\r\n"==r){d(s)
var m=""
if(f.isMaybeInsertedClosing(l,h)&&(m=a.stringRepeat("}",n.maybeInsertedBrackets),f.clearMaybeInsertedClosing()),"}"===h.substring(l.column,l.column+1)){var p=o.findMatchingBracket({row:l.row,column:l.column+1},"}")
if(!p)return null
var v=this.$getIndent(o.getLine(p.row))}else{if(!m)return void f.clearMaybeInsertedClosing()
v=this.$getIndent(h)}var w=v+o.getTabString()
return{text:"\n"+w+"\n"+v+m,selection:[1,w.length,1,w.length]}}f.clearMaybeInsertedClosing()}})),this.add("braces","deletion",(function(e,t,i,s,o){var r=s.doc.getTextRange(o)
if(!o.isMultiLine()&&"{"==r){if(d(i),"}"==s.doc.getLine(o.start.row).substring(o.end.column,o.end.column+1))return o.end.column++,o
n.maybeInsertedBrackets--}})),this.add("parens","insertion",(function(e,t,i,n,s){if("("==s){d(i)
var o=i.getSelectionRange(),r=n.doc.getTextRange(o)
if(""!==r&&i.getWrapBehavioursEnabled())return g(o,r,"(",")")
if(f.isSaneInsertion(i,n))return f.recordAutoInsert(i,n,")"),{text:"()",selection:[1,1]}}else if(")"==s){d(i)
var a=i.getCursorPosition(),l=n.doc.getLine(a.row)
if(")"==l.substring(a.column,a.column+1))if(null!==n.$findOpeningBracket(")",{column:a.column+1,row:a.row})&&f.isAutoInsertedClosing(a,l,s))return f.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("parens","deletion",(function(e,t,i,n,s){var o=n.doc.getTextRange(s)
if(!s.isMultiLine()&&"("==o&&(d(i),")"==n.doc.getLine(s.start.row).substring(s.start.column+1,s.start.column+2)))return s.end.column++,s})),this.add("brackets","insertion",(function(e,t,i,n,s){if("["==s){d(i)
var o=i.getSelectionRange(),r=n.doc.getTextRange(o)
if(""!==r&&i.getWrapBehavioursEnabled())return g(o,r,"[","]")
if(f.isSaneInsertion(i,n))return f.recordAutoInsert(i,n,"]"),{text:"[]",selection:[1,1]}}else if("]"==s){d(i)
var a=i.getCursorPosition(),l=n.doc.getLine(a.row)
if("]"==l.substring(a.column,a.column+1))if(null!==n.$findOpeningBracket("]",{column:a.column+1,row:a.row})&&f.isAutoInsertedClosing(a,l,s))return f.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("brackets","deletion",(function(e,t,i,n,s){var o=n.doc.getTextRange(s)
if(!s.isMultiLine()&&"["==o&&(d(i),"]"==n.doc.getLine(s.start.row).substring(s.start.column+1,s.start.column+2)))return s.end.column++,s})),this.add("string_dquotes","insertion",(function(e,t,i,n,s){var o=n.$mode.$quotes||u
if(1==s.length&&o[s]){if(this.lineCommentStart&&-1!=this.lineCommentStart.indexOf(s))return
d(i)
var r=s,a=i.getSelectionRange(),l=n.doc.getTextRange(a)
if(""!==l&&(1!=l.length||!o[l])&&i.getWrapBehavioursEnabled())return g(a,l,r,r)
if(!l){var h=i.getCursorPosition(),c=n.doc.getLine(h.row),f=c.substring(h.column-1,h.column),m=c.substring(h.column,h.column+1),p=n.getTokenAt(h.row,h.column),v=n.getTokenAt(h.row,h.column+1)
if("\\"==f&&p&&/escape/.test(p.type))return null
var w,$=p&&/string|escape/.test(p.type),b=!v||/string|escape/.test(v.type)
if(m==r)(w=$!==b)&&/string\.end/.test(v.type)&&(w=!1)
else{if($&&!b)return null
if($&&b)return null
var y=n.$mode.tokenRe
y.lastIndex=0
var C=y.test(f)
y.lastIndex=0
var S=y.test(f)
if(C||S)return null
if(m&&!/[\s;,.})\]\\]/.test(m))return null
var k=c[h.column-2]
if(f==r&&(k==r||y.test(k)))return null
w=!0}return{text:w?r+r:"",selection:[1,1]}}}})),this.add("string_dquotes","deletion",(function(e,t,i,n,s){var o=n.$mode.$quotes||u,r=n.doc.getTextRange(s)
if(!s.isMultiLine()&&o.hasOwnProperty(r)&&(d(i),n.doc.getLine(s.start.row).substring(s.start.column+1,s.start.column+2)==r))return s.end.column++,s}))}
f.isSaneInsertion=function(e,t){var i=e.getCursorPosition(),n=new r(t,i.row,i.column)
if(!this.$matchTokenType(n.getCurrentToken()||"text",l)){if(/[)}\]]/.test(e.session.getLine(i.row)[i.column]))return!0
var s=new r(t,i.row,i.column+1)
if(!this.$matchTokenType(s.getCurrentToken()||"text",l))return!1}return n.stepForward(),n.getCurrentTokenRow()!==i.row||this.$matchTokenType(n.getCurrentToken()||"text",h)},f.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},f.recordAutoInsert=function(e,t,i){var s=e.getCursorPosition(),o=t.doc.getLine(s.row)
this.isAutoInsertedClosing(s,o,n.autoInsertedLineEnd[0])||(n.autoInsertedBrackets=0),n.autoInsertedRow=s.row,n.autoInsertedLineEnd=i+o.substr(s.column),n.autoInsertedBrackets++},f.recordMaybeInsert=function(e,t,i){var s=e.getCursorPosition(),o=t.doc.getLine(s.row)
this.isMaybeInsertedClosing(s,o)||(n.maybeInsertedBrackets=0),n.maybeInsertedRow=s.row,n.maybeInsertedLineStart=o.substr(0,s.column)+i,n.maybeInsertedLineEnd=o.substr(s.column),n.maybeInsertedBrackets++},f.isAutoInsertedClosing=function(e,t,i){return n.autoInsertedBrackets>0&&e.row===n.autoInsertedRow&&i===n.autoInsertedLineEnd[0]&&t.substr(e.column)===n.autoInsertedLineEnd},f.isMaybeInsertedClosing=function(e,t){return n.maybeInsertedBrackets>0&&e.row===n.maybeInsertedRow&&t.substr(e.column)===n.maybeInsertedLineEnd&&t.substr(0,e.column)==n.maybeInsertedLineStart},f.popAutoInsertedClosing=function(){n.autoInsertedLineEnd=n.autoInsertedLineEnd.substr(1),n.autoInsertedBrackets--},f.clearMaybeInsertedClosing=function(){n&&(n.maybeInsertedBrackets=0,n.maybeInsertedRow=-1)},s.inherits(f,o),t.CstyleBehaviour=f})),ace.define("ace/unicode",["require","exports","module"],(function(e,t,i){"use strict"
for(var n=[48,9,8,25,5,0,2,25,48,0,11,0,5,0,6,22,2,30,2,457,5,11,15,4,8,0,2,0,18,116,2,1,3,3,9,0,2,2,2,0,2,19,2,82,2,138,2,4,3,155,12,37,3,0,8,38,10,44,2,0,2,1,2,1,2,0,9,26,6,2,30,10,7,61,2,9,5,101,2,7,3,9,2,18,3,0,17,58,3,100,15,53,5,0,6,45,211,57,3,18,2,5,3,11,3,9,2,1,7,6,2,2,2,7,3,1,3,21,2,6,2,0,4,3,3,8,3,1,3,3,9,0,5,1,2,4,3,11,16,2,2,5,5,1,3,21,2,6,2,1,2,1,2,1,3,0,2,4,5,1,3,2,4,0,8,3,2,0,8,15,12,2,2,8,2,2,2,21,2,6,2,1,2,4,3,9,2,2,2,2,3,0,16,3,3,9,18,2,2,7,3,1,3,21,2,6,2,1,2,4,3,8,3,1,3,2,9,1,5,1,2,4,3,9,2,0,17,1,2,5,4,2,2,3,4,1,2,0,2,1,4,1,4,2,4,11,5,4,4,2,2,3,3,0,7,0,15,9,18,2,2,7,2,2,2,22,2,9,2,4,4,7,2,2,2,3,8,1,2,1,7,3,3,9,19,1,2,7,2,2,2,22,2,9,2,4,3,8,2,2,2,3,8,1,8,0,2,3,3,9,19,1,2,7,2,2,2,22,2,15,4,7,2,2,2,3,10,0,9,3,3,9,11,5,3,1,2,17,4,23,2,8,2,0,3,6,4,0,5,5,2,0,2,7,19,1,14,57,6,14,2,9,40,1,2,0,3,1,2,0,3,0,7,3,2,6,2,2,2,0,2,0,3,1,2,12,2,2,3,4,2,0,2,5,3,9,3,1,35,0,24,1,7,9,12,0,2,0,2,0,5,9,2,35,5,19,2,5,5,7,2,35,10,0,58,73,7,77,3,37,11,42,2,0,4,328,2,3,3,6,2,0,2,3,3,40,2,3,3,32,2,3,3,6,2,0,2,3,3,14,2,56,2,3,3,66,5,0,33,15,17,84,13,619,3,16,2,25,6,74,22,12,2,6,12,20,12,19,13,12,2,2,2,1,13,51,3,29,4,0,5,1,3,9,34,2,3,9,7,87,9,42,6,69,11,28,4,11,5,11,11,39,3,4,12,43,5,25,7,10,38,27,5,62,2,28,3,10,7,9,14,0,89,75,5,9,18,8,13,42,4,11,71,55,9,9,4,48,83,2,2,30,14,230,23,280,3,5,3,37,3,5,3,7,2,0,2,0,2,0,2,30,3,52,2,6,2,0,4,2,2,6,4,3,3,5,5,12,6,2,2,6,67,1,20,0,29,0,14,0,17,4,60,12,5,0,4,11,18,0,5,0,3,9,2,0,4,4,7,0,2,0,2,0,2,3,2,10,3,3,6,4,5,0,53,1,2684,46,2,46,2,132,7,6,15,37,11,53,10,0,17,22,10,6,2,6,2,6,2,6,2,6,2,6,2,6,2,6,2,31,48,0,470,1,36,5,2,4,6,1,5,85,3,1,3,2,2,89,2,3,6,40,4,93,18,23,57,15,513,6581,75,20939,53,1164,68,45,3,268,4,27,21,31,3,13,13,1,2,24,9,69,11,1,38,8,3,102,3,1,111,44,25,51,13,68,12,9,7,23,4,0,5,45,3,35,13,28,4,64,15,10,39,54,10,13,3,9,7,22,4,1,5,66,25,2,227,42,2,1,3,9,7,11171,13,22,5,48,8453,301,3,61,3,105,39,6,13,4,6,11,2,12,2,4,2,0,2,1,2,1,2,107,34,362,19,63,3,53,41,11,5,15,17,6,13,1,25,2,33,4,2,134,20,9,8,25,5,0,2,25,12,88,4,5,3,5,3,5,3,2],s=0,o=[],r=0;r<n.length;r+=2)o.push(s+=n[r]),n[r+1]&&o.push(45,s+=n[r+1])
t.wordChars=String.fromCharCode.apply(null,o)})),ace.define("ace/mode/text",["require","exports","module","ace/config","ace/tokenizer","ace/mode/text_highlight_rules","ace/mode/behaviour/cstyle","ace/unicode","ace/lib/lang","ace/token_iterator","ace/range"],(function(e,t,i){"use strict"
var n=e("../config"),s=e("../tokenizer").Tokenizer,o=e("./text_highlight_rules").TextHighlightRules,r=e("./behaviour/cstyle").CstyleBehaviour,a=e("../unicode"),l=e("../lib/lang"),h=e("../token_iterator").TokenIterator,c=e("../range").Range,u=function(){this.HighlightRules=o};(function(){this.$defaultBehaviour=new r,this.tokenRe=new RegExp("^["+a.wordChars+"\\$_]+","g"),this.nonTokenRe=new RegExp("^(?:[^"+a.wordChars+"\\$_]|\\s])+","g"),this.getTokenizer=function(){return this.$tokenizer||(this.$highlightRules=this.$highlightRules||new this.HighlightRules(this.$highlightRuleConfig),this.$tokenizer=new s(this.$highlightRules.getRules())),this.$tokenizer},this.lineCommentStart="",this.blockComment="",this.toggleCommentLines=function(e,t,i,n){function s(e){for(var t=i;t<=n;t++)e(o.getLine(t),t)}var o=t.doc,r=!0,a=!0,h=1/0,c=t.getTabSize(),u=!1
if(this.lineCommentStart){if(Array.isArray(this.lineCommentStart))p=this.lineCommentStart.map(l.escapeRegExp).join("|"),f=this.lineCommentStart[0]
else p=l.escapeRegExp(this.lineCommentStart),f=this.lineCommentStart
p=new RegExp("^(\\s*)(?:"+p+") ?"),u=t.getUseSoftTabs()
$=function(e,t){var i=e.match(p)
if(i){var n=i[1].length,s=i[0].length
!g(e,n,s)&&" "==i[0][s-1]&&s--,o.removeInLine(t,n,s)}}
var d=f+" ",g=(w=function(e,t){r&&!/\S/.test(e)||(g(e,h,h)?o.insertInLine({row:t,column:h},d):o.insertInLine({row:t,column:h},f))},b=function(e,t){return p.test(e)},function(e,t,i){for(var n=0;t--&&" "==e.charAt(t);)n++
if(n%c!=0)return!1
for(n=0;" "==e.charAt(i++);)n++
return c>2?n%c!=c-1:n%c==0})}else{if(!this.blockComment)return!1
var f=this.blockComment.start,m=this.blockComment.end,p=new RegExp("^(\\s*)(?:"+l.escapeRegExp(f)+")"),v=new RegExp("(?:"+l.escapeRegExp(m)+")\\s*$"),w=function(e,t){b(e,t)||r&&!/\S/.test(e)||(o.insertInLine({row:t,column:e.length},m),o.insertInLine({row:t,column:h},f))},$=function(e,t){var i;(i=e.match(v))&&o.removeInLine(t,e.length-i[0].length,e.length),(i=e.match(p))&&o.removeInLine(t,i[1].length,i[0].length)},b=function(e,i){if(p.test(e))return!0
for(var n=t.getTokens(i),s=0;s<n.length;s++)if("comment"===n[s].type)return!0}}var y=1/0
s((function(e,t){var i=e.search(/\S/);-1!==i?(i<h&&(h=i),a&&!b(e,t)&&(a=!1)):y>e.length&&(y=e.length)})),h==1/0&&(h=y,r=!1,a=!1),u&&h%c!=0&&(h=Math.floor(h/c)*c),s(a?$:w)},this.toggleBlockComment=function(e,t,i,n){var s=this.blockComment
if(s){!s.start&&s[0]&&(s=s[0])
var o,r,a=(m=new h(t,n.row,n.column)).getCurrentToken(),l=(t.selection,t.selection.toOrientedRange())
if(a&&/comment/.test(a.type)){for(var u,d;a&&/comment/.test(a.type);){if(-1!=(p=a.value.indexOf(s.start))){var g=m.getCurrentTokenRow(),f=m.getCurrentTokenColumn()+p
u=new c(g,f,g,f+s.start.length)
break}a=m.stepBackward()}var m
for(a=(m=new h(t,n.row,n.column)).getCurrentToken();a&&/comment/.test(a.type);){var p
if(-1!=(p=a.value.indexOf(s.end))){g=m.getCurrentTokenRow(),f=m.getCurrentTokenColumn()+p
d=new c(g,f,g,f+s.end.length)
break}a=m.stepForward()}d&&t.remove(d),u&&(t.remove(u),o=u.start.row,r=-s.start.length)}else r=s.start.length,o=i.start.row,t.insert(i.end,s.end),t.insert(i.start,s.start)
l.start.row==o&&(l.start.column+=r),l.end.row==o&&(l.end.column+=r),t.selection.fromOrientedRange(l)}},this.getNextLineIndent=function(e,t,i){return this.$getIndent(t)},this.checkOutdent=function(e,t,i){return!1},this.autoOutdent=function(e,t,i){},this.$getIndent=function(e){return e.match(/^\s*/)[0]},this.createWorker=function(e){return null},this.createModeDelegates=function(e){for(var t in this.$embeds=[],this.$modes={},e)if(e[t]){var i=e[t],s=i.prototype.$id,o=n.$modes[s]
o||(n.$modes[s]=o=new i),n.$modes[t]||(n.$modes[t]=o),this.$embeds.push(t),this.$modes[t]=o}var r=["toggleBlockComment","toggleCommentLines","getNextLineIndent","checkOutdent","autoOutdent","transformAction","getCompletions"]
for(t=0;t<r.length;t++)(function(e){var i=r[t],n=e[i]
e[r[t]]=function(){return this.$delegator(i,arguments,n)}})(this)},this.$delegator=function(e,t,i){var n=t[0]||"start"
if("string"!=typeof n){if(Array.isArray(n[2])){var s=n[2][n[2].length-1]
if(r=this.$modes[s])return r[e].apply(r,[n[1]].concat([].slice.call(t,1)))}n=n[0]||"start"}for(var o=0;o<this.$embeds.length;o++)if(this.$modes[this.$embeds[o]]){var r,a=n.split(this.$embeds[o])
if(!a[0]&&a[1])return t[0]=a[1],(r=this.$modes[this.$embeds[o]])[e].apply(r,t)}var l=i.apply(this,t)
return i?l:void 0},this.transformAction=function(e,t,i,n,s){if(this.$behaviour){var o=this.$behaviour.getBehaviours()
for(var r in o)if(o[r][t]){var a=o[r][t].apply(this,arguments)
if(a)return a}}},this.getKeywords=function(e){if(!this.completionKeywords){var t=this.$tokenizer.rules,i=[]
for(var n in t)for(var s=t[n],o=0,r=s.length;o<r;o++)if("string"==typeof s[o].token)/keyword|support|storage/.test(s[o].token)&&i.push(s[o].regex)
else if("object"==typeof s[o].token)for(var a=0,l=s[o].token.length;a<l;a++)if(/keyword|support|storage/.test(s[o].token[a])){n=s[o].regex.match(/\(.+?\)/g)[a]
i.push(n.substr(1,n.length-2))}this.completionKeywords=i}return e?i.concat(this.$keywordList||[]):this.$keywordList},this.$createKeywordList=function(){return this.$highlightRules||this.getTokenizer(),this.$keywordList=this.$highlightRules.$keywordList||[]},this.getCompletions=function(e,t,i,n){return(this.$keywordList||this.$createKeywordList()).map((function(e){return{name:e,value:e,score:0,meta:"keyword"}}))},this.$id="ace/mode/text"}).call(u.prototype),t.Mode=u})),ace.define("ace/apply_delta",["require","exports","module"],(function(e,t,i){"use strict"
t.applyDelta=function(e,t,i){var n=t.start.row,s=t.start.column,o=e[n]||""
switch(t.action){case"insert":if(1===t.lines.length)e[n]=o.substring(0,s)+t.lines[0]+o.substring(s)
else{var r=[n,1].concat(t.lines)
e.splice.apply(e,r),e[n]=o.substring(0,s)+e[n],e[n+t.lines.length-1]+=o.substring(s)}break
case"remove":var a=t.end.column,l=t.end.row
n===l?e[n]=o.substring(0,s)+o.substring(a):e.splice(n,l-n+1,o.substring(0,s)+e[l].substring(a))}}})),ace.define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],(function(e,t,i){"use strict"
var n=e("./lib/oop"),s=e("./lib/event_emitter").EventEmitter,o=t.Anchor=function(e,t,i){this.$onChange=this.onChange.bind(this),this.attach(e),void 0===i?this.setPosition(t.row,t.column):this.setPosition(t,i)};(function(){function e(e,t,i){var n=i?e.column<=t.column:e.column<t.column
return e.row<t.row||e.row==t.row&&n}function t(t,i,n){var s="insert"==t.action,o=(s?1:-1)*(t.end.row-t.start.row),r=(s?1:-1)*(t.end.column-t.start.column),a=t.start,l=s?a:t.end
return e(i,a,n)?{row:i.row,column:i.column}:e(l,i,!n)?{row:i.row+o,column:i.column+(i.row==l.row?r:0)}:{row:a.row,column:a.column}}n.implement(this,s),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(e){if(!(e.start.row==e.end.row&&e.start.row!=this.row||e.start.row>this.row)){var i=t(e,{row:this.row,column:this.column},this.$insertRight)
this.setPosition(i.row,i.column,!0)}},this.setPosition=function(e,t,i){var n
if(n=i?{row:e,column:t}:this.$clipPositionToDocument(e,t),this.row!=n.row||this.column!=n.column){var s={row:this.row,column:this.column}
this.row=n.row,this.column=n.column,this._signal("change",{old:s,value:n})}},this.detach=function(){this.document.off("change",this.$onChange)},this.attach=function(e){this.document=e||this.document,this.document.on("change",this.$onChange)},this.$clipPositionToDocument=function(e,t){var i={}
return e>=this.document.getLength()?(i.row=Math.max(0,this.document.getLength()-1),i.column=this.document.getLine(i.row).length):e<0?(i.row=0,i.column=0):(i.row=e,i.column=Math.min(this.document.getLine(i.row).length,Math.max(0,t))),t<0&&(i.column=0),i}}).call(o.prototype)})),ace.define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"],(function(e,t,i){"use strict"
var n=e("./lib/oop"),s=e("./apply_delta").applyDelta,o=e("./lib/event_emitter").EventEmitter,r=e("./range").Range,a=e("./anchor").Anchor,l=function(e){this.$lines=[""],0===e.length?this.$lines=[""]:Array.isArray(e)?this.insertMergedLines({row:0,column:0},e):this.insert({row:0,column:0},e)};(function(){n.implement(this,o),this.setValue=function(e){var t=this.getLength()-1
this.remove(new r(0,0,t,this.getLine(t).length)),this.insert({row:0,column:0},e||"")},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(e,t){return new a(this,e,t)},0==="aaa".split(/a/).length?this.$split=function(e){return e.replace(/\r\n|\r/g,"\n").split("\n")}:this.$split=function(e){return e.split(/\r\n|\r|\n/)},this.$detectNewLine=function(e){var t=e.match(/^.*?(\r\n|\r|\n)/m)
this.$autoNewLine=t?t[1]:"\n",this._signal("changeNewLineMode")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\r\n"
case"unix":return"\n"
default:return this.$autoNewLine||"\n"}},this.$autoNewLine="",this.$newLineMode="auto",this.setNewLineMode=function(e){this.$newLineMode!==e&&(this.$newLineMode=e,this._signal("changeNewLineMode"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(e){return"\r\n"==e||"\r"==e||"\n"==e},this.getLine=function(e){return this.$lines[e]||""},this.getLines=function(e,t){return this.$lines.slice(e,t+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(e){return this.getLinesForRange(e).join(this.getNewLineCharacter())},this.getLinesForRange=function(e){var t
if(e.start.row===e.end.row)t=[this.getLine(e.start.row).substring(e.start.column,e.end.column)]
else{(t=this.getLines(e.start.row,e.end.row))[0]=(t[0]||"").substring(e.start.column)
var i=t.length-1
e.end.row-e.start.row==i&&(t[i]=t[i].substring(0,e.end.column))}return t},this.insertLines=function(e,t){return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."),this.insertFullLines(e,t)},this.removeLines=function(e,t){return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."),this.removeFullLines(e,t)},this.insertNewLine=function(e){return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."),this.insertMergedLines(e,["",""])},this.insert=function(e,t){return this.getLength()<=1&&this.$detectNewLine(t),this.insertMergedLines(e,this.$split(t))},this.insertInLine=function(e,t){var i=this.clippedPos(e.row,e.column),n=this.pos(e.row,e.column+t.length)
return this.applyDelta({start:i,end:n,action:"insert",lines:[t]},!0),this.clonePos(n)},this.clippedPos=function(e,t){var i=this.getLength()
void 0===e?e=i:e<0?e=0:e>=i&&(e=i-1,t=void 0)
var n=this.getLine(e)
return null==t&&(t=n.length),{row:e,column:t=Math.min(Math.max(t,0),n.length)}},this.clonePos=function(e){return{row:e.row,column:e.column}},this.pos=function(e,t){return{row:e,column:t}},this.$clipPosition=function(e){var t=this.getLength()
return e.row>=t?(e.row=Math.max(0,t-1),e.column=this.getLine(t-1).length):(e.row=Math.max(0,e.row),e.column=Math.min(Math.max(e.column,0),this.getLine(e.row).length)),e},this.insertFullLines=function(e,t){var i=0;(e=Math.min(Math.max(e,0),this.getLength()))<this.getLength()?(t=t.concat([""]),i=0):(t=[""].concat(t),e--,i=this.$lines[e].length),this.insertMergedLines({row:e,column:i},t)},this.insertMergedLines=function(e,t){var i=this.clippedPos(e.row,e.column),n={row:i.row+t.length-1,column:(1==t.length?i.column:0)+t[t.length-1].length}
return this.applyDelta({start:i,end:n,action:"insert",lines:t}),this.clonePos(n)},this.remove=function(e){var t=this.clippedPos(e.start.row,e.start.column),i=this.clippedPos(e.end.row,e.end.column)
return this.applyDelta({start:t,end:i,action:"remove",lines:this.getLinesForRange({start:t,end:i})}),this.clonePos(t)},this.removeInLine=function(e,t,i){var n=this.clippedPos(e,t),s=this.clippedPos(e,i)
return this.applyDelta({start:n,end:s,action:"remove",lines:this.getLinesForRange({start:n,end:s})},!0),this.clonePos(n)},this.removeFullLines=function(e,t){e=Math.min(Math.max(0,e),this.getLength()-1)
var i=(t=Math.min(Math.max(0,t),this.getLength()-1))==this.getLength()-1&&e>0,n=t<this.getLength()-1,s=i?e-1:e,o=i?this.getLine(s).length:0,a=n?t+1:t,l=n?0:this.getLine(a).length,h=new r(s,o,a,l),c=this.$lines.slice(e,t+1)
return this.applyDelta({start:h.start,end:h.end,action:"remove",lines:this.getLinesForRange(h)}),c},this.removeNewLine=function(e){e<this.getLength()-1&&e>=0&&this.applyDelta({start:this.pos(e,this.getLine(e).length),end:this.pos(e+1,0),action:"remove",lines:["",""]})},this.replace=function(e,t){return e instanceof r||(e=r.fromPoints(e.start,e.end)),0===t.length&&e.isEmpty()?e.start:t==this.getTextRange(e)?e.end:(this.remove(e),t?this.insert(e.start,t):e.start)},this.applyDeltas=function(e){for(var t=0;t<e.length;t++)this.applyDelta(e[t])},this.revertDeltas=function(e){for(var t=e.length-1;t>=0;t--)this.revertDelta(e[t])},this.applyDelta=function(e,t){var i="insert"==e.action;(i?e.lines.length<=1&&!e.lines[0]:!r.comparePoints(e.start,e.end))||(i&&e.lines.length>2e4?this.$splitAndapplyLargeDelta(e,2e4):(s(this.$lines,e,t),this._signal("change",e)))},this.$safeApplyDelta=function(e){var t=this.$lines.length;("remove"==e.action&&e.start.row<t&&e.end.row<t||"insert"==e.action&&e.start.row<=t)&&this.applyDelta(e)},this.$splitAndapplyLargeDelta=function(e,t){for(var i=e.lines,n=i.length-t+1,s=e.start.row,o=e.start.column,r=0,a=0;r<n;r=a){a+=t-1
var l=i.slice(r,a)
l.push(""),this.applyDelta({start:this.pos(s+r,o),end:this.pos(s+a,o=0),action:e.action,lines:l},!0)}e.lines=i.slice(r),e.start.row=s+r,e.start.column=o,this.applyDelta(e,!0)},this.revertDelta=function(e){this.$safeApplyDelta({start:this.clonePos(e.start),end:this.clonePos(e.end),action:"insert"==e.action?"remove":"insert",lines:e.lines.slice()})},this.indexToPosition=function(e,t){for(var i=this.$lines||this.getAllLines(),n=this.getNewLineCharacter().length,s=t||0,o=i.length;s<o;s++)if((e-=i[s].length+n)<0)return{row:s,column:e+i[s].length+n}
return{row:o-1,column:e+i[o-1].length+n}},this.positionToIndex=function(e,t){for(var i=this.$lines||this.getAllLines(),n=this.getNewLineCharacter().length,s=0,o=Math.min(e.row,i.length),r=t||0;r<o;++r)s+=i[r].length+n
return s+e.column}}).call(l.prototype),t.Document=l})),ace.define("ace/background_tokenizer",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],(function(e,t,i){"use strict"
var n=e("./lib/oop"),s=e("./lib/event_emitter").EventEmitter,o=function(e,t){this.running=!1,this.lines=[],this.states=[],this.currentLine=0,this.tokenizer=e
var i=this
this.$worker=function(){if(i.running){for(var e=new Date,t=i.currentLine,n=-1,s=i.doc,o=t;i.lines[t];)t++
var r=s.getLength(),a=0
for(i.running=!1;t<r;){i.$tokenizeRow(t),n=t
do{t++}while(i.lines[t])
if(++a%5==0&&new Date-e>20){i.running=setTimeout(i.$worker,20)
break}}i.currentLine=t,-1==n&&(n=t),o<=n&&i.fireUpdateEvent(o,n)}}};(function(){n.implement(this,s),this.setTokenizer=function(e){this.tokenizer=e,this.lines=[],this.states=[],this.start(0)},this.setDocument=function(e){this.doc=e,this.lines=[],this.states=[],this.stop()},this.fireUpdateEvent=function(e,t){var i={first:e,last:t}
this._signal("update",{data:i})},this.start=function(e){this.currentLine=Math.min(e||0,this.currentLine,this.doc.getLength()),this.lines.splice(this.currentLine,this.lines.length),this.states.splice(this.currentLine,this.states.length),this.stop(),this.running=setTimeout(this.$worker,700)},this.scheduleStart=function(){this.running||(this.running=setTimeout(this.$worker,700))},this.$updateOnChange=function(e){var t=e.start.row,i=e.end.row-t
if(0===i)this.lines[t]=null
else if("remove"==e.action)this.lines.splice(t,i+1,null),this.states.splice(t,i+1,null)
else{var n=Array(i+1)
n.unshift(t,1),this.lines.splice.apply(this.lines,n),this.states.splice.apply(this.states,n)}this.currentLine=Math.min(t,this.currentLine,this.doc.getLength()),this.stop()},this.stop=function(){this.running&&clearTimeout(this.running),this.running=!1},this.getTokens=function(e){return this.lines[e]||this.$tokenizeRow(e)},this.getState=function(e){return this.currentLine==e&&this.$tokenizeRow(e),this.states[e]||"start"},this.$tokenizeRow=function(e){var t=this.doc.getLine(e),i=this.states[e-1],n=this.tokenizer.getLineTokens(t,i,e)
return this.states[e]+""!=n.state+""?(this.states[e]=n.state,this.lines[e+1]=null,this.currentLine>e+1&&(this.currentLine=e+1)):this.currentLine==e&&(this.currentLine=e+1),this.lines[e]=n.tokens},this.cleanup=function(){this.running=!1,this.lines=[],this.states=[],this.currentLine=0,this.removeAllListeners()}}).call(o.prototype),t.BackgroundTokenizer=o})),ace.define("ace/search_highlight",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],(function(e,t,i){"use strict"
var n=e("./lib/lang"),s=(e("./lib/oop"),e("./range").Range),o=function(e,t,i){this.setRegexp(e),this.clazz=t,this.type=i||"text"};(function(){this.MAX_RANGES=500,this.setRegexp=function(e){this.regExp+""!=e+""&&(this.regExp=e,this.cache=[])},this.update=function(e,t,i,o){if(this.regExp)for(var r=o.firstRow,a=o.lastRow,l={},h=r;h<=a;h++){var c=this.cache[h]
null==c&&((c=n.getMatchOffsets(i.getLine(h),this.regExp)).length>this.MAX_RANGES&&(c=c.slice(0,this.MAX_RANGES)),c=c.map((function(e){return new s(h,e.offset,h,e.offset+e.length)})),this.cache[h]=c.length?c:"")
for(var u=c.length;u--;){var d=c[u].toScreenRange(i),g=d.toString()
l[g]||(l[g]=!0,t.drawSingleLineMarker(e,d,this.clazz,o))}}}}).call(o.prototype),t.SearchHighlight=o})),ace.define("ace/edit_session/fold_line",["require","exports","module","ace/range"],(function(e,t,i){"use strict"
function n(e,t){this.foldData=e,Array.isArray(t)?this.folds=t:t=this.folds=[t]
var i=t[t.length-1]
this.range=new s(t[0].start.row,t[0].start.column,i.end.row,i.end.column),this.start=this.range.start,this.end=this.range.end,this.folds.forEach((function(e){e.setFoldLine(this)}),this)}var s=e("../range").Range;(function(){this.shiftRow=function(e){this.start.row+=e,this.end.row+=e,this.folds.forEach((function(t){t.start.row+=e,t.end.row+=e}))},this.addFold=function(e){if(e.sameRow){if(e.start.row<this.startRow||e.endRow>this.endRow)throw new Error("Can't add a fold to this FoldLine as it has no connection")
this.folds.push(e),this.folds.sort((function(e,t){return-e.range.compareEnd(t.start.row,t.start.column)})),this.range.compareEnd(e.start.row,e.start.column)>0?(this.end.row=e.end.row,this.end.column=e.end.column):this.range.compareStart(e.end.row,e.end.column)<0&&(this.start.row=e.start.row,this.start.column=e.start.column)}else if(e.start.row==this.end.row)this.folds.push(e),this.end.row=e.end.row,this.end.column=e.end.column
else{if(e.end.row!=this.start.row)throw new Error("Trying to add fold to FoldRow that doesn't have a matching row")
this.folds.unshift(e),this.start.row=e.start.row,this.start.column=e.start.column}e.foldLine=this},this.containsRow=function(e){return e>=this.start.row&&e<=this.end.row},this.walk=function(e,t,i){var n,s,o=0,r=this.folds,a=!0
null==t&&(t=this.end.row,i=this.end.column)
for(var l=0;l<r.length;l++){if(-1==(s=(n=r[l]).range.compareStart(t,i)))return void e(null,t,i,o,a)
if(!e(null,n.start.row,n.start.column,o,a)&&e(n.placeholder,n.start.row,n.start.column,o)||0===s)return
a=!n.sameRow,o=n.end.column}e(null,t,i,o,a)},this.getNextFoldTo=function(e,t){for(var i,n,s=0;s<this.folds.length;s++){if(-1==(n=(i=this.folds[s]).range.compareEnd(e,t)))return{fold:i,kind:"after"}
if(0===n)return{fold:i,kind:"inside"}}return null},this.addRemoveChars=function(e,t,i){var n,s,o=this.getNextFoldTo(e,t)
if(o)if(n=o.fold,"inside"==o.kind&&n.start.column!=t&&n.start.row!=e)window.console&&window.console.log(e,t,n)
else if(n.start.row==e){var r=(s=this.folds).indexOf(n)
for(0===r&&(this.start.column+=i);r<s.length;r++){if((n=s[r]).start.column+=i,!n.sameRow)return
n.end.column+=i}this.end.column+=i}},this.split=function(e,t){var i=this.getNextFoldTo(e,t)
if(!i||"inside"==i.kind)return null
var s=i.fold,o=this.folds,r=this.foldData,a=o.indexOf(s),l=o[a-1]
this.end.row=l.end.row,this.end.column=l.end.column
var h=new n(r,o=o.splice(a,o.length-a))
return r.splice(r.indexOf(this)+1,0,h),h},this.merge=function(e){for(var t=e.folds,i=0;i<t.length;i++)this.addFold(t[i])
var n=this.foldData
n.splice(n.indexOf(e),1)},this.toString=function(){var e=[this.range.toString()+": ["]
return this.folds.forEach((function(t){e.push("  "+t.toString())})),e.push("]"),e.join("\n")},this.idxToPosition=function(e){for(var t=0,i=0;i<this.folds.length;i++){var n=this.folds[i]
if((e-=n.start.column-t)<0)return{row:n.start.row,column:n.start.column+e}
if((e-=n.placeholder.length)<0)return n.start
t=n.end.column}return{row:this.end.row,column:this.end.column+e}}}).call(n.prototype),t.FoldLine=n})),ace.define("ace/range_list",["require","exports","module","ace/range"],(function(e,t,i){"use strict"
var n=e("./range").Range.comparePoints,s=function(){this.ranges=[],this.$bias=1};(function(){this.comparePoints=n,this.pointIndex=function(e,t,i){for(var s=this.ranges,o=i||0;o<s.length;o++){var r=s[o],a=n(e,r.end)
if(!(a>0)){var l=n(e,r.start)
return 0===a?t&&0!==l?-o-2:o:l>0||0===l&&!t?o:-o-1}}return-o-1},this.add=function(e){var t=!e.isEmpty(),i=this.pointIndex(e.start,t)
i<0&&(i=-i-1)
var n=this.pointIndex(e.end,t,i)
return n<0?n=-n-1:n++,this.ranges.splice(i,n-i,e)},this.addList=function(e){for(var t=[],i=e.length;i--;)t.push.apply(t,this.add(e[i]))
return t},this.substractPoint=function(e){var t=this.pointIndex(e)
if(t>=0)return this.ranges.splice(t,1)},this.merge=function(){var e=[],t=this.ranges
t=t.sort((function(e,t){return n(e.start,t.start)}))
for(var i,s=t[0],o=1;o<t.length;o++){i=s,s=t[o]
var r=n(i.end,s.start)
r<0||(0!=r||i.isEmpty()||s.isEmpty())&&(n(i.end,s.end)<0&&(i.end.row=s.end.row,i.end.column=s.end.column),t.splice(o,1),e.push(s),s=i,o--)}return this.ranges=t,e},this.contains=function(e,t){return this.pointIndex({row:e,column:t})>=0},this.containsPoint=function(e){return this.pointIndex(e)>=0},this.rangeAtPoint=function(e){var t=this.pointIndex(e)
if(t>=0)return this.ranges[t]},this.clipRows=function(e,t){var i=this.ranges
if(i[0].start.row>t||i[i.length-1].start.row<e)return[]
var n=this.pointIndex({row:e,column:0})
n<0&&(n=-n-1)
var s=this.pointIndex({row:t,column:0},n)
s<0&&(s=-s-1)
for(var o=[],r=n;r<s;r++)o.push(i[r])
return o},this.removeAll=function(){return this.ranges.splice(0,this.ranges.length)},this.attach=function(e){this.session&&this.detach(),this.session=e,this.onChange=this.$onChange.bind(this),this.session.on("change",this.onChange)},this.detach=function(){this.session&&(this.session.removeListener("change",this.onChange),this.session=null)},this.$onChange=function(e){for(var t=e.start,i=e.end,n=t.row,s=i.row,o=this.ranges,r=0,a=o.length;r<a;r++){if((c=o[r]).end.row>=n)break}if("insert"==e.action)for(var l=s-n,h=-t.column+i.column;r<a;r++){if((c=o[r]).start.row>n)break
if(c.start.row==n&&c.start.column>=t.column&&(c.start.column==t.column&&this.$bias<=0||(c.start.column+=h,c.start.row+=l)),c.end.row==n&&c.end.column>=t.column){if(c.end.column==t.column&&this.$bias<0)continue
c.end.column==t.column&&h>0&&r<a-1&&c.end.column>c.start.column&&c.end.column==o[r+1].start.column&&(c.end.column-=h),c.end.column+=h,c.end.row+=l}}else for(l=n-s,h=t.column-i.column;r<a;r++){if((c=o[r]).start.row>s)break
c.end.row<s&&(n<c.end.row||n==c.end.row&&t.column<c.end.column)?(c.end.row=n,c.end.column=t.column):c.end.row==s?c.end.column<=i.column?(l||c.end.column>t.column)&&(c.end.column=t.column,c.end.row=t.row):(c.end.column+=h,c.end.row+=l):c.end.row>s&&(c.end.row+=l),c.start.row<s&&(n<c.start.row||n==c.start.row&&t.column<c.start.column)?(c.start.row=n,c.start.column=t.column):c.start.row==s?c.start.column<=i.column?(l||c.start.column>t.column)&&(c.start.column=t.column,c.start.row=t.row):(c.start.column+=h,c.start.row+=l):c.start.row>s&&(c.start.row+=l)}if(0!=l&&r<a)for(;r<a;r++){var c;(c=o[r]).start.row+=l,c.end.row+=l}}}).call(s.prototype),t.RangeList=s})),ace.define("ace/edit_session/fold",["require","exports","module","ace/range_list","ace/lib/oop"],(function(e,t,i){"use strict"
function n(e,t){e.row-=t.row,0==e.row&&(e.column-=t.column)}function s(e,t){n(e.start,t),n(e.end,t)}function o(e,t){0==e.row&&(e.column+=t.column),e.row+=t.row}var r=e("../range_list").RangeList,a=e("../lib/oop"),l=t.Fold=function(e,t){this.foldLine=null,this.placeholder=t,this.range=e,this.start=e.start,this.end=e.end,this.sameRow=e.start.row==e.end.row,this.subFolds=this.ranges=[]}
a.inherits(l,r),function(){this.toString=function(){return'"'+this.placeholder+'" '+this.range.toString()},this.setFoldLine=function(e){this.foldLine=e,this.subFolds.forEach((function(t){t.setFoldLine(e)}))},this.clone=function(){var e=this.range.clone(),t=new l(e,this.placeholder)
return this.subFolds.forEach((function(e){t.subFolds.push(e.clone())})),t.collapseChildren=this.collapseChildren,t},this.addSubFold=function(e){if(!this.range.isEqual(e)){s(e,this.start)
for(var t=e.start.row,i=e.start.column,n=0,o=-1;n<this.subFolds.length&&1==(o=this.subFolds[n].range.compare(t,i));n++);var r=this.subFolds[n],a=0
if(0==o){if(r.range.containsRange(e))return r.addSubFold(e)
a=1}t=e.range.end.row,i=e.range.end.column
var l=n
for(o=-1;l<this.subFolds.length&&1==(o=this.subFolds[l].range.compare(t,i));l++);0==o&&l++
for(var h=this.subFolds.splice(n,l-n,e),c=0==o?h.length-1:h.length,u=a;u<c;u++)e.addSubFold(h[u])
return e.setFoldLine(this.foldLine),e}},this.restoreRange=function(e){return function(e,t){o(e.start,t),o(e.end,t)}(e,this.start)}}.call(l.prototype)})),ace.define("ace/edit_session/folding",["require","exports","module","ace/range","ace/edit_session/fold_line","ace/edit_session/fold","ace/token_iterator"],(function(e,t,i){"use strict"
var n=e("../range").Range,s=e("./fold_line").FoldLine,o=e("./fold").Fold,r=e("../token_iterator").TokenIterator
t.Folding=function(){this.getFoldAt=function(e,t,i){var n=this.getFoldLine(e)
if(!n)return null
for(var s=n.folds,o=0;o<s.length;o++){var r=s[o].range
if(r.contains(e,t)){if(1==i&&r.isEnd(e,t)&&!r.isEmpty())continue
if(-1==i&&r.isStart(e,t)&&!r.isEmpty())continue
return s[o]}}},this.getFoldsInRange=function(e){var t=e.start,i=e.end,n=this.$foldData,s=[]
t.column+=1,i.column-=1
for(var o=0;o<n.length;o++){var r=n[o].range.compareRange(e)
if(2!=r){if(-2==r)break
for(var a=n[o].folds,l=0;l<a.length;l++){var h=a[l]
if(-2==(r=h.range.compareRange(e)))break
if(2!=r){if(42==r)break
s.push(h)}}}}return t.column-=1,i.column+=1,s},this.getFoldsInRangeList=function(e){if(Array.isArray(e)){var t=[]
e.forEach((function(e){t=t.concat(this.getFoldsInRange(e))}),this)}else t=this.getFoldsInRange(e)
return t},this.getAllFolds=function(){for(var e=[],t=this.$foldData,i=0;i<t.length;i++)for(var n=0;n<t[i].folds.length;n++)e.push(t[i].folds[n])
return e},this.getFoldStringAt=function(e,t,i,n){if(!(n=n||this.getFoldLine(e)))return null
for(var s,o,r={end:{column:0}},a=0;a<n.folds.length;a++){var l=(o=n.folds[a]).range.compareEnd(e,t)
if(-1==l){s=this.getLine(o.start.row).substring(r.end.column,o.start.column)
break}if(0===l)return null
r=o}return s||(s=this.getLine(o.start.row).substring(r.end.column)),-1==i?s.substring(0,t-r.end.column):1==i?s.substring(t-r.end.column):s},this.getFoldLine=function(e,t){var i=this.$foldData,n=0
for(t&&(n=i.indexOf(t)),-1==n&&(n=0);n<i.length;n++){var s=i[n]
if(s.start.row<=e&&s.end.row>=e)return s
if(s.end.row>e)return null}return null},this.getNextFoldLine=function(e,t){var i=this.$foldData,n=0
for(t&&(n=i.indexOf(t)),-1==n&&(n=0);n<i.length;n++){var s=i[n]
if(s.end.row>=e)return s}return null},this.getFoldedRowCount=function(e,t){for(var i=this.$foldData,n=t-e+1,s=0;s<i.length;s++){var o=i[s],r=o.end.row,a=o.start.row
if(r>=t){a<t&&(a>=e?n-=t-a:n=0)
break}r>=e&&(n-=a>=e?r-a:r-e+1)}return n},this.$addFoldLine=function(e){return this.$foldData.push(e),this.$foldData.sort((function(e,t){return e.start.row-t.start.row})),e},this.addFold=function(e,t){var i,n=this.$foldData,r=!1
e instanceof o?i=e:(i=new o(t,e)).collapseChildren=t.collapseChildren,this.$clipRangeToDocument(i.range)
var a=i.start.row,l=i.start.column,h=i.end.row,c=i.end.column,u=this.getFoldAt(a,l,1),d=this.getFoldAt(h,c,-1)
if(u&&d==u)return u.addSubFold(i)
u&&!u.range.isStart(a,l)&&this.removeFold(u),d&&!d.range.isEnd(h,c)&&this.removeFold(d)
var g=this.getFoldsInRange(i.range)
g.length>0&&(this.removeFolds(g),i.collapseChildren||g.forEach((function(e){i.addSubFold(e)})))
for(var f=0;f<n.length;f++){var m=n[f]
if(h==m.start.row){m.addFold(i),r=!0
break}if(a==m.end.row){if(m.addFold(i),r=!0,!i.sameRow){var p=n[f+1]
if(p&&p.start.row==h){m.merge(p)
break}}break}if(h<=m.start.row)break}return r||(m=this.$addFoldLine(new s(this.$foldData,i))),this.$useWrapMode?this.$updateWrapData(m.start.row,m.start.row):this.$updateRowLengthCache(m.start.row,m.start.row),this.$modified=!0,this._signal("changeFold",{data:i,action:"add"}),i},this.addFolds=function(e){e.forEach((function(e){this.addFold(e)}),this)},this.removeFold=function(e){var t=e.foldLine,i=t.start.row,n=t.end.row,s=this.$foldData,o=t.folds
if(1==o.length)s.splice(s.indexOf(t),1)
else if(t.range.isEnd(e.end.row,e.end.column))o.pop(),t.end.row=o[o.length-1].end.row,t.end.column=o[o.length-1].end.column
else if(t.range.isStart(e.start.row,e.start.column))o.shift(),t.start.row=o[0].start.row,t.start.column=o[0].start.column
else if(e.sameRow)o.splice(o.indexOf(e),1)
else{var r=t.split(e.start.row,e.start.column);(o=r.folds).shift(),r.start.row=o[0].start.row,r.start.column=o[0].start.column}this.$updating||(this.$useWrapMode?this.$updateWrapData(i,n):this.$updateRowLengthCache(i,n)),this.$modified=!0,this._signal("changeFold",{data:e,action:"remove"})},this.removeFolds=function(e){for(var t=[],i=0;i<e.length;i++)t.push(e[i])
t.forEach((function(e){this.removeFold(e)}),this),this.$modified=!0},this.expandFold=function(e){this.removeFold(e),e.subFolds.forEach((function(t){e.restoreRange(t),this.addFold(t)}),this),e.collapseChildren>0&&this.foldAll(e.start.row+1,e.end.row,e.collapseChildren-1),e.subFolds=[]},this.expandFolds=function(e){e.forEach((function(e){this.expandFold(e)}),this)},this.unfold=function(e,t){var i,s
if(null==e)i=new n(0,0,this.getLength(),0),null==t&&(t=!0)
else if("number"==typeof e)i=new n(e,0,e,this.getLine(e).length)
else if("row"in e)i=n.fromPoints(e,e)
else{if(Array.isArray(e))return s=[],e.forEach((function(e){s=s.concat(this.unfold(e))}),this),s
i=e}for(var o=s=this.getFoldsInRangeList(i);1==s.length&&n.comparePoints(s[0].start,i.start)<0&&n.comparePoints(s[0].end,i.end)>0;)this.expandFolds(s),s=this.getFoldsInRangeList(i)
if(0!=t?this.removeFolds(s):this.expandFolds(s),o.length)return o},this.isRowFolded=function(e,t){return!!this.getFoldLine(e,t)},this.getRowFoldEnd=function(e,t){var i=this.getFoldLine(e,t)
return i?i.end.row:e},this.getRowFoldStart=function(e,t){var i=this.getFoldLine(e,t)
return i?i.start.row:e},this.getFoldDisplayLine=function(e,t,i,n,s){null==n&&(n=e.start.row),null==s&&(s=0),null==t&&(t=e.end.row),null==i&&(i=this.getLine(t).length)
var o=this.doc,r=""
return e.walk((function(e,t,i,a){if(!(t<n)){if(t==n){if(i<s)return
a=Math.max(s,a)}r+=null!=e?e:o.getLine(t).substring(a,i)}}),t,i),r},this.getDisplayLine=function(e,t,i,n){var s,o=this.getFoldLine(e)
return o?this.getFoldDisplayLine(o,e,t,i,n):(s=this.doc.getLine(e)).substring(n||0,t||s.length)},this.$cloneFoldData=function(){var e=[]
return e=this.$foldData.map((function(t){var i=t.folds.map((function(e){return e.clone()}))
return new s(e,i)})),e},this.toggleFold=function(e){var t,i,n=this.selection.getRange()
if(n.isEmpty()){var s=n.start
if(t=this.getFoldAt(s.row,s.column))return void this.expandFold(t);(i=this.findMatchingBracket(s))?1==n.comparePoint(i)?n.end=i:(n.start=i,n.start.column++,n.end.column--):(i=this.findMatchingBracket({row:s.row,column:s.column+1}))?(1==n.comparePoint(i)?n.end=i:n.start=i,n.start.column++):n=this.getCommentFoldRange(s.row,s.column)||n}else{var o=this.getFoldsInRange(n)
if(e&&o.length)return void this.expandFolds(o)
1==o.length&&(t=o[0])}if(t||(t=this.getFoldAt(n.start.row,n.start.column)),t&&t.range.toString()==n.toString())this.expandFold(t)
else{var r="..."
if(!n.isMultiLine()){if((r=this.getTextRange(n)).length<4)return
r=r.trim().substring(0,2)+".."}this.addFold(r,n)}},this.getCommentFoldRange=function(e,t,i){var s=new r(this,e,t),o=s.getCurrentToken(),a=o&&o.type
if(o&&/^comment|string/.test(a)){"comment"==(a=a.match(/comment|string/)[0])&&(a+="|doc-start")
var l=new RegExp(a),h=new n
if(1!=i){do{o=s.stepBackward()}while(o&&l.test(o.type)&&!/^comment.end/.test(o.type))
o=s.stepForward()}if(h.start.row=s.getCurrentTokenRow(),h.start.column=s.getCurrentTokenColumn()+(/^comment.start/.test(o.type)?o.value.length:2),s=new r(this,e,t),-1!=i){var c=-1
do{if(o=s.stepForward(),-1==c){var u=this.getState(s.$row)
l.test(u)||(c=s.$row)}else if(s.$row>c)break}while(o&&l.test(o.type)&&!/^comment.start/.test(o.type))
o=s.stepBackward()}else o=s.getCurrentToken()
return h.end.row=s.getCurrentTokenRow(),h.end.column=s.getCurrentTokenColumn(),/^comment.end/.test(o.type)||(h.end.column+=o.value.length-2),h}},this.foldAll=function(e,t,i,n){null==i&&(i=1e5)
var s=this.foldWidgets
if(s){t=t||this.getLength()
for(var o=e=e||0;o<t;o++)if(null==s[o]&&(s[o]=this.getFoldWidget(o)),"start"==s[o]&&(!n||n(o))){var r=this.getFoldWidgetRange(o)
r&&r.isMultiLine()&&r.end.row<=t&&r.start.row>=e&&(o=r.end.row,r.collapseChildren=i,this.addFold("...",r))}}},this.foldToLevel=function(e){for(this.foldAll();e-- >0;)this.unfold(null,!1)},this.foldAllComments=function(){var e=this
this.foldAll(null,null,null,(function(t){for(var i=e.getTokens(t),n=0;n<i.length;n++){var s=i[n]
if("text"!=s.type||!/^\s+$/.test(s.value))return!!/comment/.test(s.type)}}))},this.$foldStyles={manual:1,markbegin:1,markbeginend:1},this.$foldStyle="markbegin",this.setFoldStyle=function(e){if(!this.$foldStyles[e])throw new Error("invalid fold style: "+e+"["+Object.keys(this.$foldStyles).join(", ")+"]")
if(this.$foldStyle!=e){this.$foldStyle=e,"manual"==e&&this.unfold()
var t=this.$foldMode
this.$setFolding(null),this.$setFolding(t)}},this.$setFolding=function(e){this.$foldMode!=e&&(this.$foldMode=e,this.off("change",this.$updateFoldWidgets),this.off("tokenizerUpdate",this.$tokenizerUpdateFoldWidgets),this._signal("changeAnnotation"),e&&"manual"!=this.$foldStyle?(this.foldWidgets=[],this.getFoldWidget=e.getFoldWidget.bind(e,this,this.$foldStyle),this.getFoldWidgetRange=e.getFoldWidgetRange.bind(e,this,this.$foldStyle),this.$updateFoldWidgets=this.updateFoldWidgets.bind(this),this.$tokenizerUpdateFoldWidgets=this.tokenizerUpdateFoldWidgets.bind(this),this.on("change",this.$updateFoldWidgets),this.on("tokenizerUpdate",this.$tokenizerUpdateFoldWidgets)):this.foldWidgets=null)},this.getParentFoldRangeData=function(e,t){var i=this.foldWidgets
if(!i||t&&i[e])return{}
for(var n,s=e-1;s>=0;){var o=i[s]
if(null==o&&(o=i[s]=this.getFoldWidget(s)),"start"==o){var r=this.getFoldWidgetRange(s)
if(n||(n=r),r&&r.end.row>=e)break}s--}return{range:-1!==s&&r,firstRange:n}},this.onFoldWidgetClick=function(e,t){var i={children:(t=t.domEvent).shiftKey,all:t.ctrlKey||t.metaKey,siblings:t.altKey}
if(!this.$toggleFoldWidget(e,i)){var n=t.target||t.srcElement
n&&/ace_fold-widget/.test(n.className)&&(n.className+=" ace_invalid")}},this.$toggleFoldWidget=function(e,t){if(this.getFoldWidget){var i=this.getFoldWidget(e),n=this.getLine(e),s="end"===i?-1:1,o=this.getFoldAt(e,-1===s?0:n.length,s)
if(o)return t.children||t.all?this.removeFold(o):this.expandFold(o),o
var r=this.getFoldWidgetRange(e,!0)
if(r&&!r.isMultiLine()&&(o=this.getFoldAt(r.start.row,r.start.column,1))&&r.isEqual(o.range))return this.removeFold(o),o
if(t.siblings){var a=this.getParentFoldRangeData(e)
if(a.range)var l=a.range.start.row+1,h=a.range.end.row
this.foldAll(l,h,t.all?1e4:0)}else t.children?(h=r?r.end.row:this.getLength(),this.foldAll(e+1,h,t.all?1e4:0)):r&&(t.all&&(r.collapseChildren=1e4),this.addFold("...",r))
return r}},this.toggleFoldWidget=function(e){var t=this.selection.getCursor().row
t=this.getRowFoldStart(t)
var i=this.$toggleFoldWidget(t,{})
if(!i){var n=this.getParentFoldRangeData(t,!0)
if(i=n.range||n.firstRange){t=i.start.row
var s=this.getFoldAt(t,this.getLine(t).length,1)
s?this.removeFold(s):this.addFold("...",i)}}},this.updateFoldWidgets=function(e){var t=e.start.row,i=e.end.row-t
if(0===i)this.foldWidgets[t]=null
else if("remove"==e.action)this.foldWidgets.splice(t,i+1,null)
else{var n=Array(i+1)
n.unshift(t,1),this.foldWidgets.splice.apply(this.foldWidgets,n)}},this.tokenizerUpdateFoldWidgets=function(e){var t=e.data
t.first!=t.last&&this.foldWidgets.length>t.first&&this.foldWidgets.splice(t.first,this.foldWidgets.length)}}})),ace.define("ace/edit_session/bracket_match",["require","exports","module","ace/token_iterator","ace/range"],(function(e,t,i){"use strict"
var n=e("../token_iterator").TokenIterator,s=e("../range").Range
t.BracketMatch=function(){this.findMatchingBracket=function(e,t){if(0==e.column)return null
var i=t||this.getLine(e.row).charAt(e.column-1)
if(""==i)return null
var n=i.match(/([\(\[\{])|([\)\]\}])/)
return n?n[1]?this.$findClosingBracket(n[1],e):this.$findOpeningBracket(n[2],e):null},this.getBracketRange=function(e){var t,i=this.getLine(e.row),n=!0,o=i.charAt(e.column-1),r=o&&o.match(/([\(\[\{])|([\)\]\}])/)
if(r||(o=i.charAt(e.column),e={row:e.row,column:e.column+1},r=o&&o.match(/([\(\[\{])|([\)\]\}])/),n=!1),!r)return null
if(r[1]){if(!(a=this.$findClosingBracket(r[1],e)))return null
t=s.fromPoints(e,a),n||(t.end.column++,t.start.column--),t.cursor=t.end}else{var a
if(!(a=this.$findOpeningBracket(r[2],e)))return null
t=s.fromPoints(a,e),n||(t.start.column++,t.end.column--),t.cursor=t.start}return t},this.getMatchingBracketRanges=function(e,t){var i=this.getLine(e.row),n=/([\(\[\{])|([\)\]\}])/,o=!t&&i.charAt(e.column-1),r=o&&o.match(n)
if(r||(o=(void 0===t||t)&&i.charAt(e.column),e={row:e.row,column:e.column+1},r=o&&o.match(n)),!r)return null
var a=new s(e.row,e.column-1,e.row,e.column),l=r[1]?this.$findClosingBracket(r[1],e):this.$findOpeningBracket(r[2],e)
return l?[a,new s(l.row,l.column,l.row,l.column+1)]:[a]},this.$brackets={")":"(","(":")","]":"[","[":"]","{":"}","}":"{","<":">",">":"<"},this.$findOpeningBracket=function(e,t,i){var s=this.$brackets[e],o=1,r=new n(this,t.row,t.column),a=r.getCurrentToken()
if(a||(a=r.stepForward()),a){i||(i=new RegExp("(\\.?"+a.type.replace(".","\\.").replace("rparen",".paren").replace(/\b(?:end)\b/,"(?:start|begin|end)")+")+"))
for(var l=t.column-r.getCurrentTokenColumn()-2,h=a.value;;){for(;l>=0;){var c=h.charAt(l)
if(c==s){if(0==(o-=1))return{row:r.getCurrentTokenRow(),column:l+r.getCurrentTokenColumn()}}else c==e&&(o+=1)
l-=1}do{a=r.stepBackward()}while(a&&!i.test(a.type))
if(null==a)break
l=(h=a.value).length-1}return null}},this.$findClosingBracket=function(e,t,i){var s=this.$brackets[e],o=1,r=new n(this,t.row,t.column),a=r.getCurrentToken()
if(a||(a=r.stepForward()),a){i||(i=new RegExp("(\\.?"+a.type.replace(".","\\.").replace("lparen",".paren").replace(/\b(?:start|begin)\b/,"(?:start|begin|end)")+")+"))
for(var l=t.column-r.getCurrentTokenColumn();;){for(var h=a.value,c=h.length;l<c;){var u=h.charAt(l)
if(u==s){if(0==(o-=1))return{row:r.getCurrentTokenRow(),column:l+r.getCurrentTokenColumn()}}else u==e&&(o+=1)
l+=1}do{a=r.stepForward()}while(a&&!i.test(a.type))
if(null==a)break
l=0}return null}},this.getMatchingTags=function(e){var t=new n(this,e.row,e.column),i=this.$findTagName(t)
if(i)return"<"===t.stepBackward().value?this.$findClosingTag(t,i):this.$findOpeningTag(t,i)},this.$findTagName=function(e){var t=e.getCurrentToken(),i=!1,n=!1
if(t&&-1===t.type.indexOf("tag-name"))do{(t=n?e.stepBackward():e.stepForward())&&("/>"===t.value?n=!0:-1!==t.type.indexOf("tag-name")&&(i=!0))}while(t&&!i)
return t},this.$findClosingTag=function(e,t){var i,n=t.value,o=t.value,r=0,a=new s(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)
t=e.stepForward()
var l=new s(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length),h=!1
do{if(i=t,t=e.stepForward()){if(">"===t.value&&!h){var c=new s(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)
h=!0}if(-1!==t.type.indexOf("tag-name")){if(o===(n=t.value))if("<"===i.value)r++
else if("</"===i.value&&--r<0){e.stepBackward()
var u=new s(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+2)
t=e.stepForward()
var d=new s(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length)
if(!(t=e.stepForward())||">"!==t.value)return
var g=new s(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)}}else if(o===n&&"/>"===t.value&&--r<0)g=d=u=new s(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+2),c=new s(l.end.row,l.end.column,l.end.row,l.end.column+1)}}while(t&&r>=0)
if(a&&c&&u&&g&&l&&d)return{openTag:new s(a.start.row,a.start.column,c.end.row,c.end.column),closeTag:new s(u.start.row,u.start.column,g.end.row,g.end.column),openTagName:l,closeTagName:d}},this.$findOpeningTag=function(e,t){var i=e.getCurrentToken(),n=t.value,o=0,r=e.getCurrentTokenRow(),a=e.getCurrentTokenColumn(),l=a+2,h=new s(r,a,r,l)
e.stepForward()
var c=new s(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length)
if((t=e.stepForward())&&">"===t.value){var u=new s(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)
e.stepBackward(),e.stepBackward()
do{if(t=i,r=e.getCurrentTokenRow(),l=(a=e.getCurrentTokenColumn())+t.value.length,i=e.stepBackward(),t)if(-1!==t.type.indexOf("tag-name")){if(n===t.value)if("<"===i.value){if(++o>0){var d=new s(r,a,r,l),g=new s(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)
do{t=e.stepForward()}while(t&&">"!==t.value)
var f=new s(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)}}else"</"===i.value&&o--}else if("/>"===t.value){for(var m=0,p=i;p;){if(-1!==p.type.indexOf("tag-name")&&p.value===n){o--
break}if("<"===p.value)break
p=e.stepBackward(),m++}for(var v=0;v<m;v++)e.stepForward()}}while(i&&o<=0)
return g&&f&&h&&u&&d&&c?{openTag:new s(g.start.row,g.start.column,f.end.row,f.end.column),closeTag:new s(h.start.row,h.start.column,u.end.row,u.end.column),openTagName:d,closeTagName:c}:void 0}}}})),ace.define("ace/edit_session",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/bidihandler","ace/config","ace/lib/event_emitter","ace/selection","ace/mode/text","ace/range","ace/document","ace/background_tokenizer","ace/search_highlight","ace/edit_session/folding","ace/edit_session/bracket_match"],(function(e,t,i){"use strict"
var n=e("./lib/oop"),s=e("./lib/lang"),o=e("./bidihandler").BidiHandler,r=e("./config"),a=e("./lib/event_emitter").EventEmitter,l=e("./selection").Selection,h=e("./mode/text").Mode,c=e("./range").Range,u=e("./document").Document,d=e("./background_tokenizer").BackgroundTokenizer,g=e("./search_highlight").SearchHighlight,f=function(e,t){this.$breakpoints=[],this.$decorations=[],this.$frontMarkers={},this.$backMarkers={},this.$markerId=1,this.$undoSelect=!0,this.$foldData=[],this.id="session"+ ++f.$uid,this.$foldData.toString=function(){return this.join("\n")},this.bgTokenizer=new d((new h).getTokenizer(),this)
var i=this
this.bgTokenizer.on("update",(function(e){i._signal("tokenizerUpdate",e)})),this.on("changeFold",this.onChangeFold.bind(this)),this.$onChange=this.onChange.bind(this),"object"==typeof e&&e.getLine||(e=new u(e)),this.setDocument(e),this.selection=new l(this),this.$bidiHandler=new o(this),r.resetOptions(this),this.setMode(t),r._signal("session",this),this.destroyed=!1}
f.$uid=0,function(){function t(e){return!(e<4352)&&(e>=4352&&e<=4447||e>=4515&&e<=4519||e>=4602&&e<=4607||e>=9001&&e<=9002||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12283||e>=12288&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12589||e>=12593&&e<=12686||e>=12688&&e<=12730||e>=12736&&e<=12771||e>=12784&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=13054||e>=13056&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=55216&&e<=55238||e>=55243&&e<=55291||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=65281&&e<=65376||e>=65504&&e<=65510)}n.implement(this,a),this.setDocument=function(e){this.doc&&this.doc.off("change",this.$onChange),this.doc=e,e.on("change",this.$onChange,!0),this.bgTokenizer.setDocument(this.getDocument()),this.resetCaches()},this.getDocument=function(){return this.doc},this.$resetRowCache=function(e){if(!e)return this.$docRowCache=[],void(this.$screenRowCache=[])
var t=this.$docRowCache.length,i=this.$getRowCacheIndex(this.$docRowCache,e)+1
t>i&&(this.$docRowCache.splice(i,t),this.$screenRowCache.splice(i,t))},this.$getRowCacheIndex=function(e,t){for(var i=0,n=e.length-1;i<=n;){var s=i+n>>1,o=e[s]
if(t>o)i=s+1
else{if(!(t<o))return s
n=s-1}}return i-1},this.resetCaches=function(){this.$modified=!0,this.$wrapData=[],this.$rowLengthCache=[],this.$resetRowCache(0),this.destroyed||this.bgTokenizer.start(0)},this.onChangeFold=function(e){var t=e.data
this.$resetRowCache(t.start.row)},this.onChange=function(e){this.$modified=!0,this.$bidiHandler.onChange(e),this.$resetRowCache(e.start.row)
var t=this.$updateInternalDataOnChange(e)
!this.$fromUndo&&this.$undoManager&&(t&&t.length&&(this.$undoManager.add({action:"removeFolds",folds:t},this.mergeUndoDeltas),this.mergeUndoDeltas=!0),this.$undoManager.add(e,this.mergeUndoDeltas),this.mergeUndoDeltas=!0,this.$informUndoManager.schedule()),this.bgTokenizer.$updateOnChange(e),this._signal("change",e)},this.setValue=function(e){this.doc.setValue(e),this.selection.moveTo(0,0),this.$resetRowCache(0),this.setUndoManager(this.$undoManager),this.getUndoManager().reset()},this.getValue=this.toString=function(){return this.doc.getValue()},this.getSelection=function(){return this.selection},this.getState=function(e){return this.bgTokenizer.getState(e)},this.getTokens=function(e){return this.bgTokenizer.getTokens(e)},this.getTokenAt=function(e,t){var i,n=this.bgTokenizer.getTokens(e),s=0
if(null==t){var o=n.length-1
s=this.getLine(e).length}else for(o=0;o<n.length&&!((s+=n[o].value.length)>=t);o++);return(i=n[o])?(i.index=o,i.start=s-i.value.length,i):null},this.setUndoManager=function(e){if(this.$undoManager=e,this.$informUndoManager&&this.$informUndoManager.cancel(),e){var t=this
e.addSession(this),this.$syncInformUndoManager=function(){t.$informUndoManager.cancel(),t.mergeUndoDeltas=!1},this.$informUndoManager=s.delayedCall(this.$syncInformUndoManager)}else this.$syncInformUndoManager=function(){}},this.markUndoGroup=function(){this.$syncInformUndoManager&&this.$syncInformUndoManager()},this.$defaultUndoManager={undo:function(){},redo:function(){},hasUndo:function(){},hasRedo:function(){},reset:function(){},add:function(){},addSelection:function(){},startNewGroup:function(){},addSession:function(){}},this.getUndoManager=function(){return this.$undoManager||this.$defaultUndoManager},this.getTabString=function(){return this.getUseSoftTabs()?s.stringRepeat(" ",this.getTabSize()):"\t"},this.setUseSoftTabs=function(e){this.setOption("useSoftTabs",e)},this.getUseSoftTabs=function(){return this.$useSoftTabs&&!this.$mode.$indentWithTabs},this.setTabSize=function(e){this.setOption("tabSize",e)},this.getTabSize=function(){return this.$tabSize},this.isTabStop=function(e){return this.$useSoftTabs&&e.column%this.$tabSize==0},this.setNavigateWithinSoftTabs=function(e){this.setOption("navigateWithinSoftTabs",e)},this.getNavigateWithinSoftTabs=function(){return this.$navigateWithinSoftTabs},this.$overwrite=!1,this.setOverwrite=function(e){this.setOption("overwrite",e)},this.getOverwrite=function(){return this.$overwrite},this.toggleOverwrite=function(){this.setOverwrite(!this.$overwrite)},this.addGutterDecoration=function(e,t){this.$decorations[e]||(this.$decorations[e]=""),this.$decorations[e]+=" "+t,this._signal("changeBreakpoint",{})},this.removeGutterDecoration=function(e,t){this.$decorations[e]=(this.$decorations[e]||"").replace(" "+t,""),this._signal("changeBreakpoint",{})},this.getBreakpoints=function(){return this.$breakpoints},this.setBreakpoints=function(e){this.$breakpoints=[]
for(var t=0;t<e.length;t++)this.$breakpoints[e[t]]="ace_breakpoint"
this._signal("changeBreakpoint",{})},this.clearBreakpoints=function(){this.$breakpoints=[],this._signal("changeBreakpoint",{})},this.setBreakpoint=function(e,t){void 0===t&&(t="ace_breakpoint"),t?this.$breakpoints[e]=t:delete this.$breakpoints[e],this._signal("changeBreakpoint",{})},this.clearBreakpoint=function(e){delete this.$breakpoints[e],this._signal("changeBreakpoint",{})},this.addMarker=function(e,t,i,n){var s=this.$markerId++,o={range:e,type:i||"line",renderer:"function"==typeof i?i:null,clazz:t,inFront:!!n,id:s}
return n?(this.$frontMarkers[s]=o,this._signal("changeFrontMarker")):(this.$backMarkers[s]=o,this._signal("changeBackMarker")),s},this.addDynamicMarker=function(e,t){if(e.update){var i=this.$markerId++
return e.id=i,e.inFront=!!t,t?(this.$frontMarkers[i]=e,this._signal("changeFrontMarker")):(this.$backMarkers[i]=e,this._signal("changeBackMarker")),e}},this.removeMarker=function(e){var t=this.$frontMarkers[e]||this.$backMarkers[e]
t&&(delete(t.inFront?this.$frontMarkers:this.$backMarkers)[e],this._signal(t.inFront?"changeFrontMarker":"changeBackMarker"))},this.getMarkers=function(e){return e?this.$frontMarkers:this.$backMarkers},this.highlight=function(e){if(!this.$searchHighlight){var t=new g(null,"ace_selected-word","text")
this.$searchHighlight=this.addDynamicMarker(t)}this.$searchHighlight.setRegexp(e)},this.highlightLines=function(e,t,i,n){"number"!=typeof t&&(i=t,t=e),i||(i="ace_step")
var s=new c(e,0,t,1/0)
return s.id=this.addMarker(s,i,"fullLine",n),s},this.setAnnotations=function(e){this.$annotations=e,this._signal("changeAnnotation",{})},this.getAnnotations=function(){return this.$annotations||[]},this.clearAnnotations=function(){this.setAnnotations([])},this.$detectNewLine=function(e){var t=e.match(/^.*?(\r?\n)/m)
this.$autoNewLine=t?t[1]:"\n"},this.getWordRange=function(e,t){var i=this.getLine(e),n=!1
if(t>0&&(n=!!i.charAt(t-1).match(this.tokenRe)),n||(n=!!i.charAt(t).match(this.tokenRe)),n)var s=this.tokenRe
else if(/^\s+$/.test(i.slice(t-1,t+1)))s=/\s/
else s=this.nonTokenRe
var o=t
if(o>0){do{o--}while(o>=0&&i.charAt(o).match(s))
o++}for(var r=t;r<i.length&&i.charAt(r).match(s);)r++
return new c(e,o,e,r)},this.getAWordRange=function(e,t){for(var i=this.getWordRange(e,t),n=this.getLine(i.end.row);n.charAt(i.end.column).match(/[ \t]/);)i.end.column+=1
return i},this.setNewLineMode=function(e){this.doc.setNewLineMode(e)},this.getNewLineMode=function(){return this.doc.getNewLineMode()},this.setUseWorker=function(e){this.setOption("useWorker",e)},this.getUseWorker=function(){return this.$useWorker},this.onReloadTokenizer=function(e){var t=e.data
this.bgTokenizer.start(t.first),this._signal("tokenizerUpdate",e)},this.$modes=r.$modes,this.$mode=null,this.$modeId=null,this.setMode=function(e,t){if(e&&"object"==typeof e){if(e.getTokenizer)return this.$onChangeMode(e)
var i=e,n=i.path}else n=e||"ace/mode/text"
if(this.$modes["ace/mode/text"]||(this.$modes["ace/mode/text"]=new h),this.$modes[n]&&!i)return this.$onChangeMode(this.$modes[n]),void(t&&t())
this.$modeId=n,r.loadModule(["mode",n],function(e){if(this.$modeId!==n)return t&&t()
this.$modes[n]&&!i?this.$onChangeMode(this.$modes[n]):e&&e.Mode&&(e=new e.Mode(i),i||(this.$modes[n]=e,e.$id=n),this.$onChangeMode(e)),t&&t()}.bind(this)),this.$mode||this.$onChangeMode(this.$modes["ace/mode/text"],!0)},this.$onChangeMode=function(e,t){if(t||(this.$modeId=e.$id),this.$mode!==e){var i=this.$mode
this.$mode=e,this.$stopWorker(),this.$useWorker&&this.$startWorker()
var n=e.getTokenizer()
if(void 0!==n.on){var s=this.onReloadTokenizer.bind(this)
n.on("update",s)}this.bgTokenizer.setTokenizer(n),this.bgTokenizer.setDocument(this.getDocument()),this.tokenRe=e.tokenRe,this.nonTokenRe=e.nonTokenRe,t||(e.attachToSession&&e.attachToSession(this),this.$options.wrapMethod.set.call(this,this.$wrapMethod),this.$setFolding(e.foldingRules),this.bgTokenizer.start(0),this._emit("changeMode",{oldMode:i,mode:e}))}},this.$stopWorker=function(){this.$worker&&(this.$worker.terminate(),this.$worker=null)},this.$startWorker=function(){try{this.$worker=this.$mode.createWorker(this)}catch(e){r.warn("Could not load worker",e),this.$worker=null}},this.getMode=function(){return this.$mode},this.$scrollTop=0,this.setScrollTop=function(e){this.$scrollTop===e||isNaN(e)||(this.$scrollTop=e,this._signal("changeScrollTop",e))},this.getScrollTop=function(){return this.$scrollTop},this.$scrollLeft=0,this.setScrollLeft=function(e){this.$scrollLeft===e||isNaN(e)||(this.$scrollLeft=e,this._signal("changeScrollLeft",e))},this.getScrollLeft=function(){return this.$scrollLeft},this.getScreenWidth=function(){return this.$computeWidth(),this.lineWidgets?Math.max(this.getLineWidgetMaxWidth(),this.screenWidth):this.screenWidth},this.getLineWidgetMaxWidth=function(){if(null!=this.lineWidgetsWidth)return this.lineWidgetsWidth
var e=0
return this.lineWidgets.forEach((function(t){t&&t.screenWidth>e&&(e=t.screenWidth)})),this.lineWidgetWidth=e},this.$computeWidth=function(e){if(this.$modified||e){if(this.$modified=!1,this.$useWrapMode)return this.screenWidth=this.$wrapLimit
for(var t=this.doc.getAllLines(),i=this.$rowLengthCache,n=0,s=0,o=this.$foldData[s],r=o?o.start.row:1/0,a=t.length,l=0;l<a;l++){if(l>r){if((l=o.end.row+1)>=a)break
r=(o=this.$foldData[s++])?o.start.row:1/0}null==i[l]&&(i[l]=this.$getStringScreenWidth(t[l])[0]),i[l]>n&&(n=i[l])}this.screenWidth=n}},this.getLine=function(e){return this.doc.getLine(e)},this.getLines=function(e,t){return this.doc.getLines(e,t)},this.getLength=function(){return this.doc.getLength()},this.getTextRange=function(e){return this.doc.getTextRange(e||this.selection.getRange())},this.insert=function(e,t){return this.doc.insert(e,t)},this.remove=function(e){return this.doc.remove(e)},this.removeFullLines=function(e,t){return this.doc.removeFullLines(e,t)},this.undoChanges=function(e,t){if(e.length){this.$fromUndo=!0
for(var i=e.length-1;-1!=i;i--){var n=e[i]
"insert"==n.action||"remove"==n.action?this.doc.revertDelta(n):n.folds&&this.addFolds(n.folds)}!t&&this.$undoSelect&&(e.selectionBefore?this.selection.fromJSON(e.selectionBefore):this.selection.setRange(this.$getUndoSelection(e,!0))),this.$fromUndo=!1}},this.redoChanges=function(e,t){if(e.length){this.$fromUndo=!0
for(var i=0;i<e.length;i++){var n=e[i];("insert"==n.action||"remove"==n.action)&&this.doc.$safeApplyDelta(n)}!t&&this.$undoSelect&&(e.selectionAfter?this.selection.fromJSON(e.selectionAfter):this.selection.setRange(this.$getUndoSelection(e,!1))),this.$fromUndo=!1}},this.setUndoSelect=function(e){this.$undoSelect=e},this.$getUndoSelection=function(e,t){function i(e){return t?"insert"!==e.action:"insert"===e.action}for(var n,s,o=0;o<e.length;o++){var r=e[o]
r.start&&(n?i(r)?(s=r.start,-1==n.compare(s.row,s.column)&&n.setStart(s),s=r.end,1==n.compare(s.row,s.column)&&n.setEnd(s)):(s=r.start,-1==n.compare(s.row,s.column)&&(n=c.fromPoints(r.start,r.start))):n=i(r)?c.fromPoints(r.start,r.end):c.fromPoints(r.start,r.start))}return n},this.replace=function(e,t){return this.doc.replace(e,t)},this.moveText=function(e,t,i){var n=this.getTextRange(e),s=this.getFoldsInRange(e),o=c.fromPoints(t,t)
if(!i){this.remove(e)
var r=e.start.row-e.end.row;(h=r?-e.end.column:e.start.column-e.end.column)&&(o.start.row==e.end.row&&o.start.column>e.end.column&&(o.start.column+=h),o.end.row==e.end.row&&o.end.column>e.end.column&&(o.end.column+=h)),r&&o.start.row>=e.end.row&&(o.start.row+=r,o.end.row+=r)}if(o.end=this.insert(o.start,n),s.length){var a=e.start,l=o.start,h=(r=l.row-a.row,l.column-a.column)
this.addFolds(s.map((function(e){return(e=e.clone()).start.row==a.row&&(e.start.column+=h),e.end.row==a.row&&(e.end.column+=h),e.start.row+=r,e.end.row+=r,e})))}return o},this.indentRows=function(e,t,i){i=i.replace(/\t/g,this.getTabString())
for(var n=e;n<=t;n++)this.doc.insertInLine({row:n,column:0},i)},this.outdentRows=function(e){for(var t=e.collapseRows(),i=new c(0,0,0,0),n=this.getTabSize(),s=t.start.row;s<=t.end.row;++s){var o=this.getLine(s)
i.start.row=s,i.end.row=s
for(var r=0;r<n&&" "==o.charAt(r);++r);r<n&&"\t"==o.charAt(r)?(i.start.column=r,i.end.column=r+1):(i.start.column=0,i.end.column=r),this.remove(i)}},this.$moveLines=function(e,t,i){if(e=this.getRowFoldStart(e),t=this.getRowFoldEnd(t),i<0){if((s=this.getRowFoldStart(e+i))<0)return 0
var n=s-e}else if(i>0){var s
if((s=this.getRowFoldEnd(t+i))>this.doc.getLength()-1)return 0
n=s-t}else{e=this.$clipRowToDocument(e)
n=(t=this.$clipRowToDocument(t))-e+1}var o=new c(e,0,t,Number.MAX_VALUE),r=this.getFoldsInRange(o).map((function(e){return(e=e.clone()).start.row+=n,e.end.row+=n,e})),a=0==i?this.doc.getLines(e,t):this.doc.removeFullLines(e,t)
return this.doc.insertFullLines(e+n,a),r.length&&this.addFolds(r),n},this.moveLinesUp=function(e,t){return this.$moveLines(e,t,-1)},this.moveLinesDown=function(e,t){return this.$moveLines(e,t,1)},this.duplicateLines=function(e,t){return this.$moveLines(e,t,0)},this.$clipRowToDocument=function(e){return Math.max(0,Math.min(e,this.doc.getLength()-1))},this.$clipColumnToRow=function(e,t){return t<0?0:Math.min(this.doc.getLine(e).length,t)},this.$clipPositionToDocument=function(e,t){if(t=Math.max(0,t),e<0)e=0,t=0
else{var i=this.doc.getLength()
e>=i?(e=i-1,t=this.doc.getLine(i-1).length):t=Math.min(this.doc.getLine(e).length,t)}return{row:e,column:t}},this.$clipRangeToDocument=function(e){e.start.row<0?(e.start.row=0,e.start.column=0):e.start.column=this.$clipColumnToRow(e.start.row,e.start.column)
var t=this.doc.getLength()-1
return e.end.row>t?(e.end.row=t,e.end.column=this.doc.getLine(t).length):e.end.column=this.$clipColumnToRow(e.end.row,e.end.column),e},this.$wrapLimit=80,this.$useWrapMode=!1,this.$wrapLimitRange={min:null,max:null},this.setUseWrapMode=function(e){if(e!=this.$useWrapMode){if(this.$useWrapMode=e,this.$modified=!0,this.$resetRowCache(0),e){var t=this.getLength()
this.$wrapData=Array(t),this.$updateWrapData(0,t-1)}this._signal("changeWrapMode")}},this.getUseWrapMode=function(){return this.$useWrapMode},this.setWrapLimitRange=function(e,t){this.$wrapLimitRange.min===e&&this.$wrapLimitRange.max===t||(this.$wrapLimitRange={min:e,max:t},this.$modified=!0,this.$bidiHandler.markAsDirty(),this.$useWrapMode&&this._signal("changeWrapMode"))},this.adjustWrapLimit=function(e,t){var i=this.$wrapLimitRange
i.max<0&&(i={min:t,max:t})
var n=this.$constrainWrapLimit(e,i.min,i.max)
return n!=this.$wrapLimit&&n>1&&(this.$wrapLimit=n,this.$modified=!0,this.$useWrapMode&&(this.$updateWrapData(0,this.getLength()-1),this.$resetRowCache(0),this._signal("changeWrapLimit")),!0)},this.$constrainWrapLimit=function(e,t,i){return t&&(e=Math.max(t,e)),i&&(e=Math.min(i,e)),e},this.getWrapLimit=function(){return this.$wrapLimit},this.setWrapLimit=function(e){this.setWrapLimitRange(e,e)},this.getWrapLimitRange=function(){return{min:this.$wrapLimitRange.min,max:this.$wrapLimitRange.max}},this.$updateInternalDataOnChange=function(e){var t=this.$useWrapMode,i=e.action,n=e.start,s=e.end,o=n.row,r=s.row,a=r-o,l=null
if(this.$updating=!0,0!=a)if("remove"===i){this[t?"$wrapData":"$rowLengthCache"].splice(o,a)
var h=this.$foldData
l=this.getFoldsInRange(e),this.removeFolds(l)
var c=0
if(m=this.getFoldLine(s.row)){m.addRemoveChars(s.row,s.column,n.column-s.column),m.shiftRow(-a)
var u=this.getFoldLine(o)
u&&u!==m&&(u.merge(m),m=u),c=h.indexOf(m)+1}for(;c<h.length;c++){(m=h[c]).start.row>=s.row&&m.shiftRow(-a)}r=o}else{var d=Array(a)
d.unshift(o,0)
var g=t?this.$wrapData:this.$rowLengthCache
g.splice.apply(g,d)
h=this.$foldData,c=0
if(m=this.getFoldLine(o)){var f=m.range.compareInside(n.row,n.column)
0==f?(m=m.split(n.row,n.column))&&(m.shiftRow(a),m.addRemoveChars(r,0,s.column-n.column)):-1==f&&(m.addRemoveChars(o,0,s.column-n.column),m.shiftRow(a)),c=h.indexOf(m)+1}for(;c<h.length;c++){var m;(m=h[c]).start.row>=o&&m.shiftRow(a)}}else a=Math.abs(e.start.column-e.end.column),"remove"===i&&(l=this.getFoldsInRange(e),this.removeFolds(l),a=-a),(m=this.getFoldLine(o))&&m.addRemoveChars(o,n.column,a)
return t&&this.$wrapData.length!=this.doc.getLength()&&console.error("doc.getLength() and $wrapData.length have to be the same!"),this.$updating=!1,t?this.$updateWrapData(o,r):this.$updateRowLengthCache(o,r),l},this.$updateRowLengthCache=function(e,t,i){this.$rowLengthCache[e]=null,this.$rowLengthCache[t]=null},this.$updateWrapData=function(e,t){var n,s,r=this.doc.getAllLines(),a=this.getTabSize(),l=this.$wrapData,h=this.$wrapLimit,c=e
for(t=Math.min(t,r.length-1);c<=t;)(s=this.getFoldLine(c,s))?(n=[],s.walk(function(e,t,s,a){var l
if(null!=e){(l=this.$getDisplayTokens(e,n.length))[0]=i
for(var h=1;h<l.length;h++)l[h]=o}else l=this.$getDisplayTokens(r[t].substring(a,s),n.length)
n=n.concat(l)}.bind(this),s.end.row,r[s.end.row].length+1),l[s.start.row]=this.$computeWrapSplits(n,h,a),c=s.end.row+1):(n=this.$getDisplayTokens(r[c]),l[c]=this.$computeWrapSplits(n,h,a),c++)}
var i=3,o=4
this.$computeWrapSplits=function(e,t,n){function s(){var t=0
if(0===g)return t
if(d)for(var i=0;i<e.length;i++){var s=e[i]
if(10==s)t+=1
else{if(11!=s){if(12==s)continue
break}t+=n}}return u&&!1!==d&&(t+=n),Math.min(t,g)}function r(t){for(var i=t-h,n=h;n<t;n++){var o=e[n]
12!==o&&2!==o||(i-=1)}a.length||(f=s(),a.indent=f),c+=i,a.push(c),h=t}if(0==e.length)return[]
for(var a=[],l=e.length,h=0,c=0,u=this.$wrapAsCode,d=this.$indentedSoftWrap,g=t<=Math.max(2*n,8)||!1===d?0:Math.floor(t/2),f=0;l-h>t-f;){var m=h+t-f
if(e[m-1]>=10&&e[m]>=10)r(m)
else if(e[m]!=i&&e[m]!=o){for(var p=Math.max(m-(t-(t>>2)),h-1);m>p&&e[m]<i;)m--
if(u){for(;m>p&&e[m]<i;)m--
for(;m>p&&9==e[m];)m--}else for(;m>p&&e[m]<10;)m--
m>p?r(++m):(2==e[m=h+t]&&m--,r(m-f))}else{for(;m!=h-1&&e[m]!=i;m--);if(m>h){r(m)
continue}for(m=h+t;m<e.length&&e[m]==o;m++);if(m==e.length)break
r(m)}}return a},this.$getDisplayTokens=function(e,i){var n,s=[]
i=i||0
for(var o=0;o<e.length;o++){var r=e.charCodeAt(o)
if(9==r){n=this.getScreenTabSize(s.length+i),s.push(11)
for(var a=1;a<n;a++)s.push(12)}else 32==r?s.push(10):r>39&&r<48||r>57&&r<64?s.push(9):r>=4352&&t(r)?s.push(1,2):s.push(1)}return s},this.$getStringScreenWidth=function(e,i,n){if(0==i)return[0,0]
var s,o
for(null==i&&(i=1/0),n=n||0,o=0;o<e.length&&(9==(s=e.charCodeAt(o))?n+=this.getScreenTabSize(n):s>=4352&&t(s)?n+=2:n+=1,!(n>i));o++);return[n,o]},this.lineWidgets=null,this.getRowLength=function(e){var t=1
return this.lineWidgets&&(t+=this.lineWidgets[e]&&this.lineWidgets[e].rowCount||0),this.$useWrapMode&&this.$wrapData[e]?this.$wrapData[e].length+t:t},this.getRowLineCount=function(e){return this.$useWrapMode&&this.$wrapData[e]?this.$wrapData[e].length+1:1},this.getRowWrapIndent=function(e){if(this.$useWrapMode){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE),i=this.$wrapData[t.row]
return i.length&&i[0]<t.column?i.indent:0}return 0},this.getScreenLastRowColumn=function(e){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE)
return this.documentToScreenColumn(t.row,t.column)},this.getDocumentLastRowColumn=function(e,t){var i=this.documentToScreenRow(e,t)
return this.getScreenLastRowColumn(i)},this.getDocumentLastRowColumnPosition=function(e,t){var i=this.documentToScreenRow(e,t)
return this.screenToDocumentPosition(i,Number.MAX_VALUE/10)},this.getRowSplitData=function(e){return this.$useWrapMode?this.$wrapData[e]:void 0},this.getScreenTabSize=function(e){return this.$tabSize-(e%this.$tabSize|0)},this.screenToDocumentRow=function(e,t){return this.screenToDocumentPosition(e,t).row},this.screenToDocumentColumn=function(e,t){return this.screenToDocumentPosition(e,t).column},this.screenToDocumentPosition=function(e,t,i){if(e<0)return{row:0,column:0}
var n,s,o=0,r=0,a=0,l=0,h=this.$screenRowCache,c=this.$getRowCacheIndex(h,e),u=h.length
if(u&&c>=0){a=h[c],o=this.$docRowCache[c]
var d=e>h[u-1]}else d=!u
for(var g=this.getLength()-1,f=this.getNextFoldLine(o),m=f?f.start.row:1/0;a<=e&&!(a+(l=this.getRowLength(o))>e||o>=g);)a+=l,++o>m&&(o=f.end.row+1,m=(f=this.getNextFoldLine(o,f))?f.start.row:1/0),d&&(this.$docRowCache.push(o),this.$screenRowCache.push(a))
if(f&&f.start.row<=o)n=this.getFoldDisplayLine(f),o=f.start.row
else{if(a+l<=e||o>g)return{row:g,column:this.getLine(g).length}
n=this.getLine(o),f=null}var p=0,v=Math.floor(e-a)
if(this.$useWrapMode){var w=this.$wrapData[o]
w&&(s=w[v],v>0&&w.length&&(p=w.indent,r=w[v-1]||w[w.length-1],n=n.substring(r)))}return void 0!==i&&this.$bidiHandler.isBidiRow(a+v,o,v)&&(t=this.$bidiHandler.offsetToCol(i)),r+=this.$getStringScreenWidth(n,t-p)[1],this.$useWrapMode&&r>=s&&(r=s-1),f?f.idxToPosition(r):{row:o,column:r}},this.documentToScreenPosition=function(e,t){if(void 0===t)var i=this.$clipPositionToDocument(e.row,e.column)
else i=this.$clipPositionToDocument(e,t)
e=i.row,t=i.column
var n,s=0,o=null;(n=this.getFoldAt(e,t,1))&&(e=n.start.row,t=n.start.column)
var r,a=0,l=this.$docRowCache,h=this.$getRowCacheIndex(l,e),c=l.length
if(c&&h>=0){a=l[h],s=this.$screenRowCache[h]
var u=e>l[c-1]}else u=!c
for(var d=this.getNextFoldLine(a),g=d?d.start.row:1/0;a<e;){if(a>=g){if((r=d.end.row+1)>e)break
g=(d=this.getNextFoldLine(r,d))?d.start.row:1/0}else r=a+1
s+=this.getRowLength(a),a=r,u&&(this.$docRowCache.push(a),this.$screenRowCache.push(s))}var f=""
d&&a>=g?(f=this.getFoldDisplayLine(d,e,t),o=d.start.row):(f=this.getLine(e).substring(0,t),o=e)
var m=0
if(this.$useWrapMode){var p=this.$wrapData[o]
if(p){for(var v=0;f.length>=p[v];)s++,v++
f=f.substring(p[v-1]||0,f.length),m=v>0?p.indent:0}}return this.lineWidgets&&this.lineWidgets[a]&&this.lineWidgets[a].rowsAbove&&(s+=this.lineWidgets[a].rowsAbove),{row:s,column:m+this.$getStringScreenWidth(f)[0]}},this.documentToScreenColumn=function(e,t){return this.documentToScreenPosition(e,t).column},this.documentToScreenRow=function(e,t){return this.documentToScreenPosition(e,t).row},this.getScreenLength=function(){var e=0,t=null
if(this.$useWrapMode)for(var i=this.$wrapData.length,n=0,s=(a=0,(t=this.$foldData[a++])?t.start.row:1/0);n<i;){var o=this.$wrapData[n]
e+=o?o.length+1:1,++n>s&&(n=t.end.row+1,s=(t=this.$foldData[a++])?t.start.row:1/0)}else{e=this.getLength()
for(var r=this.$foldData,a=0;a<r.length;a++)e-=(t=r[a]).end.row-t.start.row}return this.lineWidgets&&(e+=this.$getWidgetScreenLength()),e},this.$setFontMetrics=function(e){this.$enableVarChar&&(this.$getStringScreenWidth=function(t,i,n){if(0===i)return[0,0]
var s,o
for(i||(i=1/0),n=n||0,o=0;o<t.length&&!((n+="\t"===(s=t.charAt(o))?this.getScreenTabSize(n):e.getCharacterWidth(s))>i);o++);return[n,o]})},this.destroy=function(){this.destroyed||(this.bgTokenizer.setDocument(null),this.bgTokenizer.cleanup(),this.destroyed=!0),this.$stopWorker(),this.removeAllListeners(),this.doc&&this.doc.off("change",this.$onChange),this.selection.detach()},this.isFullWidth=t}.call(f.prototype),e("./edit_session/folding").Folding.call(f.prototype),e("./edit_session/bracket_match").BracketMatch.call(f.prototype),r.defineOptions(f.prototype,"session",{wrap:{set:function(e){if(e&&"off"!=e?"free"==e?e=!0:"printMargin"==e?e=-1:"string"==typeof e&&(e=parseInt(e,10)||!1):e=!1,this.$wrap!=e)if(this.$wrap=e,e){var t="number"==typeof e?e:null
this.setWrapLimitRange(t,t),this.setUseWrapMode(!0)}else this.setUseWrapMode(!1)},get:function(){return this.getUseWrapMode()?-1==this.$wrap?"printMargin":this.getWrapLimitRange().min?this.$wrap:"free":"off"},handlesSet:!0},wrapMethod:{set:function(e){(e="auto"==e?"text"!=this.$mode.type:"text"!=e)!=this.$wrapAsCode&&(this.$wrapAsCode=e,this.$useWrapMode&&(this.$useWrapMode=!1,this.setUseWrapMode(!0)))},initialValue:"auto"},indentedSoftWrap:{set:function(){this.$useWrapMode&&(this.$useWrapMode=!1,this.setUseWrapMode(!0))},initialValue:!0},firstLineNumber:{set:function(){this._signal("changeBreakpoint")},initialValue:1},useWorker:{set:function(e){this.$useWorker=e,this.$stopWorker(),e&&this.$startWorker()},initialValue:!0},useSoftTabs:{initialValue:!0},tabSize:{set:function(e){(e=parseInt(e))>0&&this.$tabSize!==e&&(this.$modified=!0,this.$rowLengthCache=[],this.$tabSize=e,this._signal("changeTabSize"))},initialValue:4,handlesSet:!0},navigateWithinSoftTabs:{initialValue:!1},foldStyle:{set:function(e){this.setFoldStyle(e)},handlesSet:!0},overwrite:{set:function(e){this._signal("changeOverwrite")},initialValue:!1},newLineMode:{set:function(e){this.doc.setNewLineMode(e)},get:function(){return this.doc.getNewLineMode()},handlesSet:!0},mode:{set:function(e){this.setMode(e)},get:function(){return this.$modeId},handlesSet:!0}}),t.EditSession=f})),ace.define("ace/search",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],(function(e,t,i){"use strict"
var n=e("./lib/lang"),s=e("./lib/oop"),o=e("./range").Range,r=function(){this.$options={}};(function(){this.set=function(e){return s.mixin(this.$options,e),this},this.getOptions=function(){return n.copyObject(this.$options)},this.setOptions=function(e){this.$options=e},this.find=function(e){var t=this.$options,i=this.$matchIterator(e,t)
if(!i)return!1
var n=null
return i.forEach((function(e,i,s,r){return n=new o(e,i,s,r),!(i==r&&t.start&&t.start.start&&0!=t.skipCurrent&&n.isEqual(t.start))||(n=null,!1)})),n},this.findAll=function(e){var t=this.$options
if(!t.needle)return[]
this.$assembleRegExp(t)
var i=t.range,s=i?e.getLines(i.start.row,i.end.row):e.doc.getAllLines(),r=[],a=t.re
if(t.$isMultiLine){var l,h=a.length,c=s.length-h
e:for(var u=a.offset||0;u<=c;u++){for(var d=0;d<h;d++)if(-1==s[u+d].search(a[d]))continue e
var g=s[u],f=s[u+h-1],m=g.length-g.match(a[0])[0].length,p=f.match(a[h-1])[0].length
l&&l.end.row===u&&l.end.column>m||(r.push(l=new o(u,m,u+h-1,p)),h>2&&(u=u+h-2))}}else for(var v=0;v<s.length;v++){var w=n.getMatchOffsets(s[v],a)
for(d=0;d<w.length;d++){var $=w[d]
r.push(new o(v,$.offset,v,$.offset+$.length))}}if(i){var b=i.start.column,y=i.end.column
for(v=0,d=r.length-1;v<d&&r[v].start.column<b&&0==r[v].start.row;)v++
for(var C=i.end.row-i.start.row;v<d&&r[d].end.column>y&&r[d].end.row==C;)d--
for(r=r.slice(v,d+1),v=0,d=r.length;v<d;v++)r[v].start.row+=i.start.row,r[v].end.row+=i.start.row}return r},this.replace=function(e,t){var i=this.$options,n=this.$assembleRegExp(i)
if(i.$isMultiLine)return t
if(n){var s=n.exec(e)
if(!s||s[0].length!=e.length)return null
if(t=e.replace(n,t),i.preserveCase){t=t.split("")
for(var o=Math.min(e.length,e.length);o--;){var r=e[o]
r&&r.toLowerCase()!=r?t[o]=t[o].toUpperCase():t[o]=t[o].toLowerCase()}t=t.join("")}return t}},this.$assembleRegExp=function(e,t){if(e.needle instanceof RegExp)return e.re=e.needle
var i=e.needle
if(!e.needle)return e.re=!1
e.regExp||(i=n.escapeRegExp(i)),e.wholeWord&&(i=function(e,t){function i(e){return/\w/.test(e)||t.regExp?"\\b":""}return i(e[0])+e+i(e[e.length-1])}(i,e))
var s=e.caseSensitive?"gm":"gmi"
if(e.$isMultiLine=!t&&/[\n\r]/.test(i),e.$isMultiLine)return e.re=this.$assembleMultilineRegExp(i,s)
try{var o=new RegExp(i,s)}catch(r){o=!1}return e.re=o},this.$assembleMultilineRegExp=function(e,t){for(var i=e.replace(/\r\n|\r|\n/g,"$\n^").split("\n"),n=[],s=0;s<i.length;s++)try{n.push(new RegExp(i[s],t))}catch(o){return!1}return n},this.$matchIterator=function(e,t){var i=this.$assembleRegExp(t)
if(!i)return!1
var n=1==t.backwards,s=0!=t.skipCurrent,o=t.range,r=t.start
r||(r=o?o[n?"end":"start"]:e.selection.getRange()),r.start&&(r=r[s!=n?"end":"start"])
var a=o?o.start.row:0,l=o?o.end.row:e.getLength()-1
if(n)var h=function(e){var i=r.row
if(!u(i,r.column,e)){for(i--;i>=a;i--)if(u(i,Number.MAX_VALUE,e))return
if(0!=t.wrap)for(i=l,a=r.row;i>=a;i--)if(u(i,Number.MAX_VALUE,e))return}}
else h=function(e){var i=r.row
if(!u(i,r.column,e)){for(i+=1;i<=l;i++)if(u(i,0,e))return
if(0!=t.wrap)for(i=a,l=r.row;i<=l;i++)if(u(i,0,e))return}}
if(t.$isMultiLine)var c=i.length,u=function(t,s,o){var r=n?t-c+1:t
if(!(r<0||r+c>e.getLength())){var a=e.getLine(r),l=a.search(i[0])
if(!(!n&&l<s||-1===l)){for(var h=1;h<c;h++)if(-1==(a=e.getLine(r+h)).search(i[h]))return
var u=a.match(i[c-1])[0].length
if(!(n&&u>s))return!!o(r,l,r+c-1,u)||void 0}}}
else if(n)u=function(t,n,s){var o,r=e.getLine(t),a=[],l=0
for(i.lastIndex=0;o=i.exec(r);){var h=o[0].length
if(l=o.index,!h){if(l>=r.length)break
i.lastIndex=l+=1}if(o.index+h>n)break
a.push(o.index,h)}for(var c=a.length-1;c>=0;c-=2){var u=a[c-1]
if(s(t,u,t,u+(h=a[c])))return!0}}
else u=function(t,n,s){var o,r,a=e.getLine(t)
for(i.lastIndex=n;r=i.exec(a);){var l=r[0].length
if(s(t,o=r.index,t,o+l))return!0
if(!l&&(i.lastIndex=o+=1,o>=a.length))return!1}}
return{forEach:h}}}).call(r.prototype),t.Search=r})),ace.define("ace/keyboard/hash_handler",["require","exports","module","ace/lib/keys","ace/lib/useragent"],(function(e,t,i){"use strict"
function n(e,t){this.platform=t||(r.isMac?"mac":"win"),this.commands={},this.commandKeyBinding={},this.addCommands(e),this.$singleCommand=!0}function s(e,t){n.call(this,e,t),this.$singleCommand=!1}var o=e("../lib/keys"),r=e("../lib/useragent"),a=o.KEY_MODS
s.prototype=n.prototype,function(){function e(e){return"object"==typeof e&&e.bindKey&&e.bindKey.position||(e.isDefault?-100:0)}this.addCommand=function(e){this.commands[e.name]&&this.removeCommand(e),this.commands[e.name]=e,e.bindKey&&this._buildKeyHash(e)},this.removeCommand=function(e,t){var i=e&&("string"==typeof e?e:e.name)
e=this.commands[i],t||delete this.commands[i]
var n=this.commandKeyBinding
for(var s in n){var o=n[s]
if(o==e)delete n[s]
else if(Array.isArray(o)){var r=o.indexOf(e);-1!=r&&(o.splice(r,1),1==o.length&&(n[s]=o[0]))}}},this.bindKey=function(e,t,i){if("object"==typeof e&&e&&(null==i&&(i=e.position),e=e[this.platform]),e)return"function"==typeof t?this.addCommand({exec:t,bindKey:e,name:t.name||e}):void e.split("|").forEach((function(e){var n=""
if(-1!=e.indexOf(" ")){var s=e.split(/\s+/)
e=s.pop(),s.forEach((function(e){var t=this.parseKeys(e),i=a[t.hashId]+t.key
n+=(n?" ":"")+i,this._addCommandToBinding(n,"chainKeys")}),this),n+=" "}var o=this.parseKeys(e),r=a[o.hashId]+o.key
this._addCommandToBinding(n+r,t,i)}),this)},this._addCommandToBinding=function(t,i,n){var s,o=this.commandKeyBinding
if(i)if(!o[t]||this.$singleCommand)o[t]=i
else{Array.isArray(o[t])?-1!=(s=o[t].indexOf(i))&&o[t].splice(s,1):o[t]=[o[t]],"number"!=typeof n&&(n=e(i))
var r=o[t]
for(s=0;s<r.length;s++){if(e(r[s])>n)break}r.splice(s,0,i)}else delete o[t]},this.addCommands=function(e){e&&Object.keys(e).forEach((function(t){var i=e[t]
if(i){if("string"==typeof i)return this.bindKey(i,t)
"function"==typeof i&&(i={exec:i}),"object"==typeof i&&(i.name||(i.name=t),this.addCommand(i))}}),this)},this.removeCommands=function(e){Object.keys(e).forEach((function(t){this.removeCommand(e[t])}),this)},this.bindKeys=function(e){Object.keys(e).forEach((function(t){this.bindKey(t,e[t])}),this)},this._buildKeyHash=function(e){this.bindKey(e.bindKey,e)},this.parseKeys=function(e){var t=e.toLowerCase().split(/[\-\+]([\-\+])?/).filter((function(e){return e})),i=t.pop(),n=o[i]
if(o.FUNCTION_KEYS[n])i=o.FUNCTION_KEYS[n].toLowerCase()
else{if(!t.length)return{key:i,hashId:-1}
if(1==t.length&&"shift"==t[0])return{key:i.toUpperCase(),hashId:-1}}for(var s=0,r=t.length;r--;){var a=o.KEY_MODS[t[r]]
if(null==a)return"undefined"!=typeof console&&console.error("invalid modifier "+t[r]+" in "+e),!1
s|=a}return{key:i,hashId:s}},this.findKeyCommand=function(e,t){var i=a[e]+t
return this.commandKeyBinding[i]},this.handleKeyboard=function(e,t,i,n){if(!(n<0)){var s=a[t]+i,o=this.commandKeyBinding[s]
return e.$keyChain&&(e.$keyChain+=" "+s,o=this.commandKeyBinding[e.$keyChain]||o),!o||"chainKeys"!=o&&"chainKeys"!=o[o.length-1]?(e.$keyChain&&(t&&4!=t||1!=i.length?(-1==t||n>0)&&(e.$keyChain=""):e.$keyChain=e.$keyChain.slice(0,-s.length-1)),{command:o}):(e.$keyChain=e.$keyChain||s,{command:"null"})}},this.getStatusText=function(e,t){return t.$keyChain||""}}.call(n.prototype),t.HashHandler=n,t.MultiHashHandler=s})),ace.define("ace/commands/command_manager",["require","exports","module","ace/lib/oop","ace/keyboard/hash_handler","ace/lib/event_emitter"],(function(e,t,i){"use strict"
var n=e("../lib/oop"),s=e("../keyboard/hash_handler").MultiHashHandler,o=e("../lib/event_emitter").EventEmitter,r=function(e,t){s.call(this,t,e),this.byName=this.commands,this.setDefaultHandler("exec",(function(e){return e.args?e.command.exec(e.editor,e.args,e.event,!1):e.command.exec(e.editor,{},e.event,!0)}))}
n.inherits(r,s),function(){n.implement(this,o),this.exec=function(e,t,i){if(Array.isArray(e)){for(var n=e.length;n--;)if(this.exec(e[n],t,i))return!0
return!1}if("string"==typeof e&&(e=this.commands[e]),!e)return!1
if(t&&t.$readOnly&&!e.readOnly)return!1
if(0!=this.$checkCommandState&&e.isAvailable&&!e.isAvailable(t))return!1
var s={editor:t,command:e,args:i}
return s.returnValue=this._emit("exec",s),this._signal("afterExec",s),!1!==s.returnValue},this.toggleRecording=function(e){if(!this.$inReplay)return e&&e._emit("changeStatus"),this.recording?(this.macro.pop(),this.off("exec",this.$addCommandToMacro),this.macro.length||(this.macro=this.oldMacro),this.recording=!1):(this.$addCommandToMacro||(this.$addCommandToMacro=function(e){this.macro.push([e.command,e.args])}.bind(this)),this.oldMacro=this.macro,this.macro=[],this.on("exec",this.$addCommandToMacro),this.recording=!0)},this.replay=function(e){if(!this.$inReplay&&this.macro){if(this.recording)return this.toggleRecording(e)
try{this.$inReplay=!0,this.macro.forEach((function(t){"string"==typeof t?this.exec(t,e):this.exec(t[0],e,t[1])}),this)}finally{this.$inReplay=!1}}},this.trimMacro=function(e){return e.map((function(e){return"string"!=typeof e[0]&&(e[0]=e[0].name),e[1]||(e=e[0]),e}))}}.call(r.prototype),t.CommandManager=r})),ace.define("ace/commands/default_commands",["require","exports","module","ace/lib/lang","ace/config","ace/range"],(function(e,t,i){"use strict"
function n(e,t){return{win:e,mac:t}}var s=e("../lib/lang"),o=e("../config"),r=e("../range").Range
t.commands=[{name:"showSettingsMenu",description:"Show settings menu",bindKey:n("Ctrl-,","Command-,"),exec:function(e){o.loadModule("ace/ext/settings_menu",(function(t){t.init(e),e.showSettingsMenu()}))},readOnly:!0},{name:"goToNextError",description:"Go to next error",bindKey:n("Alt-E","F4"),exec:function(e){o.loadModule("./ext/error_marker",(function(t){t.showErrorMarker(e,1)}))},scrollIntoView:"animate",readOnly:!0},{name:"goToPreviousError",description:"Go to previous error",bindKey:n("Alt-Shift-E","Shift-F4"),exec:function(e){o.loadModule("./ext/error_marker",(function(t){t.showErrorMarker(e,-1)}))},scrollIntoView:"animate",readOnly:!0},{name:"selectall",description:"Select all",bindKey:n("Ctrl-A","Command-A"),exec:function(e){e.selectAll()},readOnly:!0},{name:"centerselection",description:"Center selection",bindKey:n(null,"Ctrl-L"),exec:function(e){e.centerSelection()},readOnly:!0},{name:"gotoline",description:"Go to line...",bindKey:n("Ctrl-L","Command-L"),exec:function(e,t){"number"==typeof t&&!isNaN(t)&&e.gotoLine(t),e.prompt({$type:"gotoLine"})},readOnly:!0},{name:"fold",bindKey:n("Alt-L|Ctrl-F1","Command-Alt-L|Command-F1"),exec:function(e){e.session.toggleFold(!1)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"unfold",bindKey:n("Alt-Shift-L|Ctrl-Shift-F1","Command-Alt-Shift-L|Command-Shift-F1"),exec:function(e){e.session.toggleFold(!0)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"toggleFoldWidget",description:"Toggle fold widget",bindKey:n("F2","F2"),exec:function(e){e.session.toggleFoldWidget()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"toggleParentFoldWidget",description:"Toggle parent fold widget",bindKey:n("Alt-F2","Alt-F2"),exec:function(e){e.session.toggleFoldWidget(!0)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"foldall",description:"Fold all",bindKey:n(null,"Ctrl-Command-Option-0"),exec:function(e){e.session.foldAll()},scrollIntoView:"center",readOnly:!0},{name:"foldAllComments",description:"Fold all comments",bindKey:n(null,"Ctrl-Command-Option-0"),exec:function(e){e.session.foldAllComments()},scrollIntoView:"center",readOnly:!0},{name:"foldOther",description:"Fold other",bindKey:n("Alt-0","Command-Option-0"),exec:function(e){e.session.foldAll(),e.session.unfold(e.selection.getAllRanges())},scrollIntoView:"center",readOnly:!0},{name:"unfoldall",description:"Unfold all",bindKey:n("Alt-Shift-0","Command-Option-Shift-0"),exec:function(e){e.session.unfold()},scrollIntoView:"center",readOnly:!0},{name:"findnext",description:"Find next",bindKey:n("Ctrl-K","Command-G"),exec:function(e){e.findNext()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"findprevious",description:"Find previous",bindKey:n("Ctrl-Shift-K","Command-Shift-G"),exec:function(e){e.findPrevious()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"selectOrFindNext",description:"Select or find next",bindKey:n("Alt-K","Ctrl-G"),exec:function(e){e.selection.isEmpty()?e.selection.selectWord():e.findNext()},readOnly:!0},{name:"selectOrFindPrevious",description:"Select or find previous",bindKey:n("Alt-Shift-K","Ctrl-Shift-G"),exec:function(e){e.selection.isEmpty()?e.selection.selectWord():e.findPrevious()},readOnly:!0},{name:"find",description:"Find",bindKey:n("Ctrl-F","Command-F"),exec:function(e){o.loadModule("ace/ext/searchbox",(function(t){t.Search(e)}))},readOnly:!0},{name:"overwrite",description:"Overwrite",bindKey:"Insert",exec:function(e){e.toggleOverwrite()},readOnly:!0},{name:"selecttostart",description:"Select to start",bindKey:n("Ctrl-Shift-Home","Command-Shift-Home|Command-Shift-Up"),exec:function(e){e.getSelection().selectFileStart()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotostart",description:"Go to start",bindKey:n("Ctrl-Home","Command-Home|Command-Up"),exec:function(e){e.navigateFileStart()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectup",description:"Select up",bindKey:n("Shift-Up","Shift-Up|Ctrl-Shift-P"),exec:function(e){e.getSelection().selectUp()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"golineup",description:"Go line up",bindKey:n("Up","Up|Ctrl-P"),exec:function(e,t){e.navigateUp(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttoend",description:"Select to end",bindKey:n("Ctrl-Shift-End","Command-Shift-End|Command-Shift-Down"),exec:function(e){e.getSelection().selectFileEnd()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotoend",description:"Go to end",bindKey:n("Ctrl-End","Command-End|Command-Down"),exec:function(e){e.navigateFileEnd()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectdown",description:"Select down",bindKey:n("Shift-Down","Shift-Down|Ctrl-Shift-N"),exec:function(e){e.getSelection().selectDown()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"golinedown",description:"Go line down",bindKey:n("Down","Down|Ctrl-N"),exec:function(e,t){e.navigateDown(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectwordleft",description:"Select word left",bindKey:n("Ctrl-Shift-Left","Option-Shift-Left"),exec:function(e){e.getSelection().selectWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotowordleft",description:"Go to word left",bindKey:n("Ctrl-Left","Option-Left"),exec:function(e){e.navigateWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttolinestart",description:"Select to line start",bindKey:n("Alt-Shift-Left","Command-Shift-Left|Ctrl-Shift-A"),exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotolinestart",description:"Go to line start",bindKey:n("Alt-Left|Home","Command-Left|Home|Ctrl-A"),exec:function(e){e.navigateLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectleft",description:"Select left",bindKey:n("Shift-Left","Shift-Left|Ctrl-Shift-B"),exec:function(e){e.getSelection().selectLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotoleft",description:"Go to left",bindKey:n("Left","Left|Ctrl-B"),exec:function(e,t){e.navigateLeft(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectwordright",description:"Select word right",bindKey:n("Ctrl-Shift-Right","Option-Shift-Right"),exec:function(e){e.getSelection().selectWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotowordright",description:"Go to word right",bindKey:n("Ctrl-Right","Option-Right"),exec:function(e){e.navigateWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttolineend",description:"Select to line end",bindKey:n("Alt-Shift-Right","Command-Shift-Right|Shift-End|Ctrl-Shift-E"),exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotolineend",description:"Go to line end",bindKey:n("Alt-Right|End","Command-Right|End|Ctrl-E"),exec:function(e){e.navigateLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectright",description:"Select right",bindKey:n("Shift-Right","Shift-Right"),exec:function(e){e.getSelection().selectRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotoright",description:"Go to right",bindKey:n("Right","Right|Ctrl-F"),exec:function(e,t){e.navigateRight(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectpagedown",description:"Select page down",bindKey:"Shift-PageDown",exec:function(e){e.selectPageDown()},readOnly:!0},{name:"pagedown",description:"Page down",bindKey:n(null,"Option-PageDown"),exec:function(e){e.scrollPageDown()},readOnly:!0},{name:"gotopagedown",description:"Go to page down",bindKey:n("PageDown","PageDown|Ctrl-V"),exec:function(e){e.gotoPageDown()},readOnly:!0},{name:"selectpageup",description:"Select page up",bindKey:"Shift-PageUp",exec:function(e){e.selectPageUp()},readOnly:!0},{name:"pageup",description:"Page up",bindKey:n(null,"Option-PageUp"),exec:function(e){e.scrollPageUp()},readOnly:!0},{name:"gotopageup",description:"Go to page up",bindKey:"PageUp",exec:function(e){e.gotoPageUp()},readOnly:!0},{name:"scrollup",description:"Scroll up",bindKey:n("Ctrl-Up",null),exec:function(e){e.renderer.scrollBy(0,-2*e.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"scrolldown",description:"Scroll down",bindKey:n("Ctrl-Down",null),exec:function(e){e.renderer.scrollBy(0,2*e.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"selectlinestart",description:"Select line start",bindKey:"Shift-Home",exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectlineend",description:"Select line end",bindKey:"Shift-End",exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"togglerecording",description:"Toggle recording",bindKey:n("Ctrl-Alt-E","Command-Option-E"),exec:function(e){e.commands.toggleRecording(e)},readOnly:!0},{name:"replaymacro",description:"Replay macro",bindKey:n("Ctrl-Shift-E","Command-Shift-E"),exec:function(e){e.commands.replay(e)},readOnly:!0},{name:"jumptomatching",description:"Jump to matching",bindKey:n("Ctrl-\\|Ctrl-P","Command-\\"),exec:function(e){e.jumpToMatching()},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"selecttomatching",description:"Select to matching",bindKey:n("Ctrl-Shift-\\|Ctrl-Shift-P","Command-Shift-\\"),exec:function(e){e.jumpToMatching(!0)},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"expandToMatching",description:"Expand to matching",bindKey:n("Ctrl-Shift-M","Ctrl-Shift-M"),exec:function(e){e.jumpToMatching(!0,!0)},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"passKeysToBrowser",description:"Pass keys to browser",bindKey:n(null,null),exec:function(){},passEvent:!0,readOnly:!0},{name:"copy",description:"Copy",exec:function(e){},readOnly:!0},{name:"cut",description:"Cut",exec:function(e){var t=e.$copyWithEmptySelection&&e.selection.isEmpty()?e.selection.getLineRange():e.selection.getRange()
e._emit("cut",t),t.isEmpty()||e.session.remove(t),e.clearSelection()},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"paste",description:"Paste",exec:function(e,t){e.$handlePaste(t)},scrollIntoView:"cursor"},{name:"removeline",description:"Remove line",bindKey:n("Ctrl-D","Command-D"),exec:function(e){e.removeLines()},scrollIntoView:"cursor",multiSelectAction:"forEachLine"},{name:"duplicateSelection",description:"Duplicate selection",bindKey:n("Ctrl-Shift-D","Command-Shift-D"),exec:function(e){e.duplicateSelection()},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"sortlines",description:"Sort lines",bindKey:n("Ctrl-Alt-S","Command-Alt-S"),exec:function(e){e.sortLines()},scrollIntoView:"selection",multiSelectAction:"forEachLine"},{name:"togglecomment",description:"Toggle comment",bindKey:n("Ctrl-/","Command-/"),exec:function(e){e.toggleCommentLines()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"toggleBlockComment",description:"Toggle block comment",bindKey:n("Ctrl-Shift-/","Command-Shift-/"),exec:function(e){e.toggleBlockComment()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"modifyNumberUp",description:"Modify number up",bindKey:n("Ctrl-Shift-Up","Alt-Shift-Up"),exec:function(e){e.modifyNumber(1)},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"modifyNumberDown",description:"Modify number down",bindKey:n("Ctrl-Shift-Down","Alt-Shift-Down"),exec:function(e){e.modifyNumber(-1)},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"replace",description:"Replace",bindKey:n("Ctrl-H","Command-Option-F"),exec:function(e){o.loadModule("ace/ext/searchbox",(function(t){t.Search(e,!0)}))}},{name:"undo",description:"Undo",bindKey:n("Ctrl-Z","Command-Z"),exec:function(e){e.undo()}},{name:"redo",description:"Redo",bindKey:n("Ctrl-Shift-Z|Ctrl-Y","Command-Shift-Z|Command-Y"),exec:function(e){e.redo()}},{name:"copylinesup",description:"Copy lines up",bindKey:n("Alt-Shift-Up","Command-Option-Up"),exec:function(e){e.copyLinesUp()},scrollIntoView:"cursor"},{name:"movelinesup",description:"Move lines up",bindKey:n("Alt-Up","Option-Up"),exec:function(e){e.moveLinesUp()},scrollIntoView:"cursor"},{name:"copylinesdown",description:"Copy lines down",bindKey:n("Alt-Shift-Down","Command-Option-Down"),exec:function(e){e.copyLinesDown()},scrollIntoView:"cursor"},{name:"movelinesdown",description:"Move lines down",bindKey:n("Alt-Down","Option-Down"),exec:function(e){e.moveLinesDown()},scrollIntoView:"cursor"},{name:"del",description:"Delete",bindKey:n("Delete","Delete|Ctrl-D|Shift-Delete"),exec:function(e){e.remove("right")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"backspace",description:"Backspace",bindKey:n("Shift-Backspace|Backspace","Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),exec:function(e){e.remove("left")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"cut_or_delete",description:"Cut or delete",bindKey:n("Shift-Delete",null),exec:function(e){if(!e.selection.isEmpty())return!1
e.remove("left")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolinestart",description:"Remove to line start",bindKey:n("Alt-Backspace","Command-Backspace"),exec:function(e){e.removeToLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolineend",description:"Remove to line end",bindKey:n("Alt-Delete","Ctrl-K|Command-Delete"),exec:function(e){e.removeToLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolinestarthard",description:"Remove to line start hard",bindKey:n("Ctrl-Shift-Backspace",null),exec:function(e){var t=e.selection.getRange()
t.start.column=0,e.session.remove(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolineendhard",description:"Remove to line end hard",bindKey:n("Ctrl-Shift-Delete",null),exec:function(e){var t=e.selection.getRange()
t.end.column=Number.MAX_VALUE,e.session.remove(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordleft",description:"Remove word left",bindKey:n("Ctrl-Backspace","Alt-Backspace|Ctrl-Alt-Backspace"),exec:function(e){e.removeWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordright",description:"Remove word right",bindKey:n("Ctrl-Delete","Alt-Delete"),exec:function(e){e.removeWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"outdent",description:"Outdent",bindKey:n("Shift-Tab","Shift-Tab"),exec:function(e){e.blockOutdent()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"indent",description:"Indent",bindKey:n("Tab","Tab"),exec:function(e){e.indent()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"blockoutdent",description:"Block outdent",bindKey:n("Ctrl-[","Ctrl-["),exec:function(e){e.blockOutdent()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"blockindent",description:"Block indent",bindKey:n("Ctrl-]","Ctrl-]"),exec:function(e){e.blockIndent()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"insertstring",description:"Insert string",exec:function(e,t){e.insert(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"inserttext",description:"Insert text",exec:function(e,t){e.insert(s.stringRepeat(t.text||"",t.times||1))},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"splitline",description:"Split line",bindKey:n(null,"Ctrl-O"),exec:function(e){e.splitLine()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"transposeletters",description:"Transpose letters",bindKey:n("Alt-Shift-X","Ctrl-T"),exec:function(e){e.transposeLetters()},multiSelectAction:function(e){e.transposeSelections(1)},scrollIntoView:"cursor"},{name:"touppercase",description:"To uppercase",bindKey:n("Ctrl-U","Ctrl-U"),exec:function(e){e.toUpperCase()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"tolowercase",description:"To lowercase",bindKey:n("Ctrl-Shift-U","Ctrl-Shift-U"),exec:function(e){e.toLowerCase()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"autoindent",description:"Auto Indent",bindKey:n(null,null),exec:function(e){e.autoIndent()},multiSelectAction:"forEachLine",scrollIntoView:"animate"},{name:"expandtoline",description:"Expand to line",bindKey:n("Ctrl-Shift-L","Command-Shift-L"),exec:function(e){var t=e.selection.getRange()
t.start.column=t.end.column=0,t.end.row++,e.selection.setRange(t,!1)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"openlink",bindKey:n("Ctrl+F3","F3"),exec:function(e){e.openLink()}},{name:"joinlines",description:"Join lines",bindKey:n(null,null),exec:function(e){for(var t=e.selection.isBackwards(),i=t?e.selection.getSelectionLead():e.selection.getSelectionAnchor(),n=t?e.selection.getSelectionAnchor():e.selection.getSelectionLead(),o=e.session.doc.getLine(i.row).length,a=e.session.doc.getTextRange(e.selection.getRange()).replace(/\n\s*/," ").length,l=e.session.doc.getLine(i.row),h=i.row+1;h<=n.row+1;h++){var c=s.stringTrimLeft(s.stringTrimRight(e.session.doc.getLine(h)))
0!==c.length&&(c=" "+c),l+=c}n.row+1<e.session.doc.getLength()-1&&(l+=e.session.doc.getNewLineCharacter()),e.clearSelection(),e.session.doc.replace(new r(i.row,0,n.row+2,0),l),a>0?(e.selection.moveCursorTo(i.row,i.column),e.selection.selectTo(i.row,i.column+a)):(o=e.session.doc.getLine(i.row).length>o?o+1:o,e.selection.moveCursorTo(i.row,o))},multiSelectAction:"forEach",readOnly:!0},{name:"invertSelection",description:"Invert selection",bindKey:n(null,null),exec:function(e){var t=e.session.doc.getLength()-1,i=e.session.doc.getLine(t).length,n=e.selection.rangeList.ranges,s=[]
n.length<1&&(n=[e.selection.getRange()])
for(var o=0;o<n.length;o++)o==n.length-1&&(n[o].end.row!==t||n[o].end.column!==i)&&s.push(new r(n[o].end.row,n[o].end.column,t,i)),0===o?(0!==n[o].start.row||0!==n[o].start.column)&&s.push(new r(0,0,n[o].start.row,n[o].start.column)):s.push(new r(n[o-1].end.row,n[o-1].end.column,n[o].start.row,n[o].start.column))
e.exitMultiSelectMode(),e.clearSelection()
for(o=0;o<s.length;o++)e.selection.addRange(s[o],!1)},readOnly:!0,scrollIntoView:"none"},{name:"addLineAfter",description:"Add new line after the current line",exec:function(e){e.selection.clearSelection(),e.navigateLineEnd(),e.insert("\n")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"addLineBefore",description:"Add new line before the current line",exec:function(e){e.selection.clearSelection()
var t=e.getCursorPosition()
e.selection.moveTo(t.row-1,Number.MAX_VALUE),e.insert("\n"),0===t.row&&e.navigateUp()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"openCommandPallete",description:"Open command palette",bindKey:n("F1","F1"),exec:function(e){e.prompt({$type:"commands"})},readOnly:!0},{name:"modeSelect",description:"Change language mode...",bindKey:n(null,null),exec:function(e){e.prompt({$type:"modes"})},readOnly:!0}]
for(var a=1;a<9;a++)t.commands.push({name:"foldToLevel"+a,description:"Fold To Level "+a,level:a,exec:function(e){e.session.foldToLevel(this.level)},scrollIntoView:"center",readOnly:!0})})),ace.define("ace/editor",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/keyboard/textinput","ace/mouse/mouse_handler","ace/mouse/fold_handler","ace/keyboard/keybinding","ace/edit_session","ace/search","ace/range","ace/lib/event_emitter","ace/commands/command_manager","ace/commands/default_commands","ace/config","ace/token_iterator","ace/clipboard"],(function(e,t,i){"use strict"
var n=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],n=0
if(i)return i.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},s=e("./lib/oop"),o=e("./lib/dom"),r=e("./lib/lang"),a=e("./lib/useragent"),l=e("./keyboard/textinput").TextInput,h=e("./mouse/mouse_handler").MouseHandler,c=e("./mouse/fold_handler").FoldHandler,u=e("./keyboard/keybinding").KeyBinding,d=e("./edit_session").EditSession,g=e("./search").Search,f=e("./range").Range,m=e("./lib/event_emitter").EventEmitter,p=e("./commands/command_manager").CommandManager,v=e("./commands/default_commands").commands,w=e("./config"),$=e("./token_iterator").TokenIterator,b=e("./clipboard"),y=function(e,t,i){this.$toDestroy=[]
var n=e.getContainerElement()
this.container=n,this.renderer=e,this.id="editor"+ ++y.$uid,this.commands=new p(a.isMac?"mac":"win",v),"object"==typeof document&&(this.textInput=new l(e.getTextAreaContainer(),this),this.renderer.textarea=this.textInput.getElement(),this.$mouseHandler=new h(this),new c(this)),this.keyBinding=new u(this),this.$search=(new g).set({wrap:!0}),this.$historyTracker=this.$historyTracker.bind(this),this.commands.on("exec",this.$historyTracker),this.$initOperationListeners(),this._$emitInputEvent=r.delayedCall(function(){this._signal("input",{}),this.session&&!this.session.destroyed&&this.session.bgTokenizer.scheduleStart()}.bind(this)),this.on("change",(function(e,t){t._$emitInputEvent.schedule(31)})),this.setSession(t||i&&i.session||new d("")),w.resetOptions(this),i&&this.setOptions(i),w._signal("editor",this)}
y.$uid=0,function(){s.implement(this,m),this.$initOperationListeners=function(){this.commands.on("exec",this.startOperation.bind(this),!0),this.commands.on("afterExec",this.endOperation.bind(this),!0),this.$opResetTimer=r.delayedCall(this.endOperation.bind(this,!0)),this.on("change",function(){this.curOp||(this.startOperation(),this.curOp.selectionBefore=this.$lastSel),this.curOp.docChanged=!0}.bind(this),!0),this.on("changeSelection",function(){this.curOp||(this.startOperation(),this.curOp.selectionBefore=this.$lastSel),this.curOp.selectionChanged=!0}.bind(this),!0)},this.curOp=null,this.prevOp={},this.startOperation=function(e){if(this.curOp){if(!e||this.curOp.command)return
this.prevOp=this.curOp}e||(this.previousCommand=null,e={}),this.$opResetTimer.schedule(),this.curOp=this.session.curOp={command:e.command||{},args:e.args,scrollTop:this.renderer.scrollTop},this.curOp.selectionBefore=this.selection.toJSON()},this.endOperation=function(e){if(this.curOp&&this.session){if(e&&!1===e.returnValue||!this.session)return this.curOp=null
if(1==e&&this.curOp.command&&"mouse"==this.curOp.command.name)return
if(this._signal("beforeEndOperation"),!this.curOp)return
var t=this.curOp.command,i=t&&t.scrollIntoView
if(i){switch(i){case"center-animate":i="animate"
case"center":this.renderer.scrollCursorIntoView(null,.5)
break
case"animate":case"cursor":this.renderer.scrollCursorIntoView()
break
case"selectionPart":var n=this.selection.getRange(),s=this.renderer.layerConfig;(n.start.row>=s.lastRow||n.end.row<=s.firstRow)&&this.renderer.scrollSelectionIntoView(this.selection.anchor,this.selection.lead)}"animate"==i&&this.renderer.animateScrolling(this.curOp.scrollTop)}var o=this.selection.toJSON()
this.curOp.selectionAfter=o,this.$lastSel=this.selection.toJSON(),this.session.getUndoManager().addSelection(o),this.prevOp=this.curOp,this.curOp=null}},this.$mergeableCommands=["backspace","del","insertstring"],this.$historyTracker=function(e){if(this.$mergeUndoDeltas){var t=this.prevOp,i=this.$mergeableCommands,n=t.command&&e.command.name==t.command.name
if("insertstring"==e.command.name){var s=e.args
void 0===this.mergeNextCommand&&(this.mergeNextCommand=!0),n=n&&this.mergeNextCommand&&(!/\s/.test(s)||/\s/.test(t.args)),this.mergeNextCommand=!0}else n=n&&-1!==i.indexOf(e.command.name)
"always"!=this.$mergeUndoDeltas&&Date.now()-this.sequenceStartTime>2e3&&(n=!1),n?this.session.mergeUndoDeltas=!0:-1!==i.indexOf(e.command.name)&&(this.sequenceStartTime=Date.now())}},this.setKeyboardHandler=function(e,t){if(e&&"string"==typeof e&&"ace"!=e){this.$keybindingId=e
var i=this
w.loadModule(["keybinding",e],(function(n){i.$keybindingId==e&&i.keyBinding.setKeyboardHandler(n&&n.handler),t&&t()}))}else this.$keybindingId=null,this.keyBinding.setKeyboardHandler(e),t&&t()},this.getKeyboardHandler=function(){return this.keyBinding.getKeyboardHandler()},this.setSession=function(e){if(this.session!=e){this.curOp&&this.endOperation(),this.curOp={}
var t=this.session
if(t){this.session.off("change",this.$onDocumentChange),this.session.off("changeMode",this.$onChangeMode),this.session.off("tokenizerUpdate",this.$onTokenizerUpdate),this.session.off("changeTabSize",this.$onChangeTabSize),this.session.off("changeWrapLimit",this.$onChangeWrapLimit),this.session.off("changeWrapMode",this.$onChangeWrapMode),this.session.off("changeFold",this.$onChangeFold),this.session.off("changeFrontMarker",this.$onChangeFrontMarker),this.session.off("changeBackMarker",this.$onChangeBackMarker),this.session.off("changeBreakpoint",this.$onChangeBreakpoint),this.session.off("changeAnnotation",this.$onChangeAnnotation),this.session.off("changeOverwrite",this.$onCursorChange),this.session.off("changeScrollTop",this.$onScrollTopChange),this.session.off("changeScrollLeft",this.$onScrollLeftChange)
var i=this.session.getSelection()
i.off("changeCursor",this.$onCursorChange),i.off("changeSelection",this.$onSelectionChange)}this.session=e,e?(this.$onDocumentChange=this.onDocumentChange.bind(this),e.on("change",this.$onDocumentChange),this.renderer.setSession(e),this.$onChangeMode=this.onChangeMode.bind(this),e.on("changeMode",this.$onChangeMode),this.$onTokenizerUpdate=this.onTokenizerUpdate.bind(this),e.on("tokenizerUpdate",this.$onTokenizerUpdate),this.$onChangeTabSize=this.renderer.onChangeTabSize.bind(this.renderer),e.on("changeTabSize",this.$onChangeTabSize),this.$onChangeWrapLimit=this.onChangeWrapLimit.bind(this),e.on("changeWrapLimit",this.$onChangeWrapLimit),this.$onChangeWrapMode=this.onChangeWrapMode.bind(this),e.on("changeWrapMode",this.$onChangeWrapMode),this.$onChangeFold=this.onChangeFold.bind(this),e.on("changeFold",this.$onChangeFold),this.$onChangeFrontMarker=this.onChangeFrontMarker.bind(this),this.session.on("changeFrontMarker",this.$onChangeFrontMarker),this.$onChangeBackMarker=this.onChangeBackMarker.bind(this),this.session.on("changeBackMarker",this.$onChangeBackMarker),this.$onChangeBreakpoint=this.onChangeBreakpoint.bind(this),this.session.on("changeBreakpoint",this.$onChangeBreakpoint),this.$onChangeAnnotation=this.onChangeAnnotation.bind(this),this.session.on("changeAnnotation",this.$onChangeAnnotation),this.$onCursorChange=this.onCursorChange.bind(this),this.session.on("changeOverwrite",this.$onCursorChange),this.$onScrollTopChange=this.onScrollTopChange.bind(this),this.session.on("changeScrollTop",this.$onScrollTopChange),this.$onScrollLeftChange=this.onScrollLeftChange.bind(this),this.session.on("changeScrollLeft",this.$onScrollLeftChange),this.selection=e.getSelection(),this.selection.on("changeCursor",this.$onCursorChange),this.$onSelectionChange=this.onSelectionChange.bind(this),this.selection.on("changeSelection",this.$onSelectionChange),this.onChangeMode(),this.onCursorChange(),this.onScrollTopChange(),this.onScrollLeftChange(),this.onSelectionChange(),this.onChangeFrontMarker(),this.onChangeBackMarker(),this.onChangeBreakpoint(),this.onChangeAnnotation(),this.session.getUseWrapMode()&&this.renderer.adjustWrapLimit(),this.renderer.updateFull()):(this.selection=null,this.renderer.setSession(e)),this._signal("changeSession",{session:e,oldSession:t}),this.curOp=null,t&&t._signal("changeEditor",{oldEditor:this}),e&&e._signal("changeEditor",{editor:this}),e&&!e.destroyed&&e.bgTokenizer.scheduleStart()}},this.getSession=function(){return this.session},this.setValue=function(e,t){return this.session.doc.setValue(e),t?1==t?this.navigateFileEnd():-1==t&&this.navigateFileStart():this.selectAll(),e},this.getValue=function(){return this.session.getValue()},this.getSelection=function(){return this.selection},this.resize=function(e){this.renderer.onResize(e)},this.setTheme=function(e,t){this.renderer.setTheme(e,t)},this.getTheme=function(){return this.renderer.getTheme()},this.setStyle=function(e){this.renderer.setStyle(e)},this.unsetStyle=function(e){this.renderer.unsetStyle(e)},this.getFontSize=function(){return this.getOption("fontSize")||o.computedStyle(this.container).fontSize},this.setFontSize=function(e){this.setOption("fontSize",e)},this.$highlightBrackets=function(){if(!this.$highlightPending){var e=this
this.$highlightPending=!0,setTimeout((function(){e.$highlightPending=!1
var t=e.session
if(t&&!t.destroyed){t.$bracketHighlight&&(t.$bracketHighlight.markerIds.forEach((function(e){t.removeMarker(e)})),t.$bracketHighlight=null)
var i=e.getCursorPosition(),n=e.getKeyboardHandler(),s=n&&n.$getDirectionForHighlight&&n.$getDirectionForHighlight(e),o=t.getMatchingBracketRanges(i,s)
if(!o){var r=new $(t,i.row,i.column).getCurrentToken()
if(r&&/\b(?:tag-open|tag-name)/.test(r.type)){var a=t.getMatchingTags(i)
a&&(o=[a.openTagName,a.closeTagName])}}if(!o&&t.$mode.getMatching&&(o=t.$mode.getMatching(e.session)),o){var l="ace_bracket"
Array.isArray(o)?1==o.length&&(l="ace_error_bracket"):o=[o],2==o.length&&(0==f.comparePoints(o[0].end,o[1].start)?o=[f.fromPoints(o[0].start,o[1].end)]:0==f.comparePoints(o[0].start,o[1].end)&&(o=[f.fromPoints(o[1].start,o[0].end)])),t.$bracketHighlight={ranges:o,markerIds:o.map((function(e){return t.addMarker(e,l,"text")}))},e.getHighlightIndentGuides()&&e.renderer.$textLayer.$highlightIndentGuide()}else e.getHighlightIndentGuides()&&e.renderer.$textLayer.$highlightIndentGuide()}}),50)}},this.focus=function(){this.textInput.focus()},this.isFocused=function(){return this.textInput.isFocused()},this.blur=function(){this.textInput.blur()},this.onFocus=function(e){this.$isFocused||(this.$isFocused=!0,this.renderer.showCursor(),this.renderer.visualizeFocus(),this._emit("focus",e))},this.onBlur=function(e){this.$isFocused&&(this.$isFocused=!1,this.renderer.hideCursor(),this.renderer.visualizeBlur(),this._emit("blur",e))},this.$cursorChange=function(){this.renderer.updateCursor(),this.$highlightBrackets(),this.$updateHighlightActiveLine()},this.onDocumentChange=function(e){var t=this.session.$useWrapMode,i=e.start.row==e.end.row?e.end.row:1/0
this.renderer.updateLines(e.start.row,i,t),this._signal("change",e),this.$cursorChange()},this.onTokenizerUpdate=function(e){var t=e.data
this.renderer.updateLines(t.first,t.last)},this.onScrollTopChange=function(){this.renderer.scrollToY(this.session.getScrollTop())},this.onScrollLeftChange=function(){this.renderer.scrollToX(this.session.getScrollLeft())},this.onCursorChange=function(){this.$cursorChange(),this._signal("changeSelection")},this.$updateHighlightActiveLine=function(){var e,t=this.getSession()
if(this.$highlightActiveLine&&("line"==this.$selectionStyle&&this.selection.isMultiLine()||(e=this.getCursorPosition()),this.renderer.theme&&this.renderer.theme.$selectionColorConflict&&!this.selection.isEmpty()&&(e=!1),this.renderer.$maxLines&&1===this.session.getLength()&&!(this.renderer.$minLines>1)&&(e=!1)),t.$highlightLineMarker&&!e)t.removeMarker(t.$highlightLineMarker.id),t.$highlightLineMarker=null
else if(!t.$highlightLineMarker&&e){var i=new f(e.row,e.column,e.row,1/0)
i.id=t.addMarker(i,"ace_active-line","screenLine"),t.$highlightLineMarker=i}else e&&(t.$highlightLineMarker.start.row=e.row,t.$highlightLineMarker.end.row=e.row,t.$highlightLineMarker.start.column=e.column,t._signal("changeBackMarker"))},this.onSelectionChange=function(e){var t=this.session
if(t.$selectionMarker&&t.removeMarker(t.$selectionMarker),t.$selectionMarker=null,this.selection.isEmpty())this.$updateHighlightActiveLine()
else{var i=this.selection.getRange(),n=this.getSelectionStyle()
t.$selectionMarker=t.addMarker(i,"ace_selection",n)}var s=this.$highlightSelectedWord&&this.$getSelectionHighLightRegexp()
this.session.highlight(s),this._signal("changeSelection")},this.$getSelectionHighLightRegexp=function(){var e=this.session,t=this.getSelectionRange()
if(!t.isEmpty()&&!t.isMultiLine()){var i=t.start.column,n=t.end.column,s=e.getLine(t.start.row),o=s.substring(i,n)
if(!(o.length>5e3)&&/[\w\d]/.test(o)){var r=this.$search.$assembleRegExp({wholeWord:!0,caseSensitive:!0,needle:o}),a=s.substring(i-1,n+1)
if(r.test(a))return r}}},this.onChangeFrontMarker=function(){this.renderer.updateFrontMarkers()},this.onChangeBackMarker=function(){this.renderer.updateBackMarkers()},this.onChangeBreakpoint=function(){this.renderer.updateBreakpoints()},this.onChangeAnnotation=function(){this.renderer.setAnnotations(this.session.getAnnotations())},this.onChangeMode=function(e){this.renderer.updateText(),this._emit("changeMode",e)},this.onChangeWrapLimit=function(){this.renderer.updateFull()},this.onChangeWrapMode=function(){this.renderer.onResize(!0)},this.onChangeFold=function(){this.$updateHighlightActiveLine(),this.renderer.updateFull()},this.getSelectedText=function(){return this.session.getTextRange(this.getSelectionRange())},this.getCopyText=function(){var e=this.getSelectedText(),t=this.session.doc.getNewLineCharacter(),i=!1
if(!e&&this.$copyWithEmptySelection){i=!0
for(var n=this.selection.getAllRanges(),s=0;s<n.length;s++){var o=n[s]
s&&n[s-1].start.row==o.start.row||(e+=this.session.getLine(o.start.row)+t)}}var r={text:e}
return this._signal("copy",r),b.lineMode=!!i&&r.text,r.text},this.onCopy=function(){this.commands.exec("copy",this)},this.onCut=function(){this.commands.exec("cut",this)},this.onPaste=function(e,t){var i={text:e,event:t}
this.commands.exec("paste",this,i)},this.$handlePaste=function(e){"string"==typeof e&&(e={text:e}),this._signal("paste",e)
var t=e.text,i=t===b.lineMode,n=this.session
if(!this.inMultiSelectMode||this.inVirtualSelectionMode)i?n.insert({row:this.selection.lead.row,column:0},t):this.insert(t)
else if(i)this.selection.rangeList.ranges.forEach((function(e){n.insert({row:e.start.row,column:0},t)}))
else{var s=t.split(/\r\n|\r|\n/),o=this.selection.rangeList.ranges,r=!(2!=s.length||s[0]&&s[1])
if(s.length!=o.length||r)return this.commands.exec("insertstring",this,t)
for(var a=o.length;a--;){var l=o[a]
l.isEmpty()||n.remove(l),n.insert(l.start,s[a])}}},this.execCommand=function(e,t){return this.commands.exec(e,this,t)},this.insert=function(e,t){var i=this.session,n=i.getMode(),s=this.getCursorPosition()
if(this.getBehavioursEnabled()&&!t){var o=n.transformAction(i.getState(s.row),"insertion",this,i,e)
o&&(e!==o.text&&(this.inVirtualSelectionMode||(this.session.mergeUndoDeltas=!1,this.mergeNextCommand=!1)),e=o.text)}if("\t"==e&&(e=this.session.getTabString()),this.selection.isEmpty()){if(this.session.getOverwrite()&&-1==e.indexOf("\n")){(r=new f.fromPoints(s,s)).end.column+=e.length,this.session.remove(r)}}else{var r=this.getSelectionRange()
s=this.session.remove(r),this.clearSelection()}if("\n"==e||"\r\n"==e){var a=i.getLine(s.row)
if(s.column>a.search(/\S|$/)){var l=a.substr(s.column).search(/\S|$/)
i.doc.removeInLine(s.row,s.column,s.column+l)}}this.clearSelection()
var h=s.column,c=i.getState(s.row),u=(a=i.getLine(s.row),n.checkOutdent(c,a,e))
if(i.insert(s,e),o&&o.selection&&(2==o.selection.length?this.selection.setSelectionRange(new f(s.row,h+o.selection[0],s.row,h+o.selection[1])):this.selection.setSelectionRange(new f(s.row+o.selection[0],o.selection[1],s.row+o.selection[2],o.selection[3]))),this.$enableAutoIndent){if(i.getDocument().isNewLine(e)){var d=n.getNextLineIndent(c,a.slice(0,s.column),i.getTabString())
i.insert({row:s.row+1,column:0},d)}u&&n.autoOutdent(c,i,s.row)}},this.autoIndent=function(){var e,t,i=this.session,n=i.getMode()
if(this.selection.isEmpty())e=0,t=i.doc.getLength()-1
else{var s=this.getSelectionRange()
e=s.start.row,t=s.end.row}for(var o,r,a,l="",h="",c="",u=i.getTabString(),d=e;d<=t;d++)d>0&&(l=i.getState(d-1),h=i.getLine(d-1),c=n.getNextLineIndent(l,h,u)),o=i.getLine(d),c!==(r=n.$getIndent(o))&&(r.length>0&&(a=new f(d,0,d,r.length),i.remove(a)),c.length>0&&i.insert({row:d,column:0},c)),n.autoOutdent(l,i,d)},this.onTextInput=function(e,t){if(!t)return this.keyBinding.onTextInput(e)
this.startOperation({command:{name:"insertstring"}})
var i=this.applyComposition.bind(this,e,t)
this.selection.rangeCount?this.forEachSelection(i):i(),this.endOperation()},this.applyComposition=function(e,t){var i;(t.extendLeft||t.extendRight)&&((i=this.selection.getRange()).start.column-=t.extendLeft,i.end.column+=t.extendRight,i.start.column<0&&(i.start.row--,i.start.column+=this.session.getLine(i.start.row).length+1),this.selection.setRange(i),!e&&!i.isEmpty()&&this.remove());((e||!this.selection.isEmpty())&&this.insert(e,!0),t.restoreStart||t.restoreEnd)&&((i=this.selection.getRange()).start.column-=t.restoreStart,i.end.column-=t.restoreEnd,this.selection.setRange(i))},this.onCommandKey=function(e,t,i){return this.keyBinding.onCommandKey(e,t,i)},this.setOverwrite=function(e){this.session.setOverwrite(e)},this.getOverwrite=function(){return this.session.getOverwrite()},this.toggleOverwrite=function(){this.session.toggleOverwrite()},this.setScrollSpeed=function(e){this.setOption("scrollSpeed",e)},this.getScrollSpeed=function(){return this.getOption("scrollSpeed")},this.setDragDelay=function(e){this.setOption("dragDelay",e)},this.getDragDelay=function(){return this.getOption("dragDelay")},this.setSelectionStyle=function(e){this.setOption("selectionStyle",e)},this.getSelectionStyle=function(){return this.getOption("selectionStyle")},this.setHighlightActiveLine=function(e){this.setOption("highlightActiveLine",e)},this.getHighlightActiveLine=function(){return this.getOption("highlightActiveLine")},this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)},this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},this.setHighlightSelectedWord=function(e){this.setOption("highlightSelectedWord",e)},this.getHighlightSelectedWord=function(){return this.$highlightSelectedWord},this.setAnimatedScroll=function(e){this.renderer.setAnimatedScroll(e)},this.getAnimatedScroll=function(){return this.renderer.getAnimatedScroll()},this.setShowInvisibles=function(e){this.renderer.setShowInvisibles(e)},this.getShowInvisibles=function(){return this.renderer.getShowInvisibles()},this.setDisplayIndentGuides=function(e){this.renderer.setDisplayIndentGuides(e)},this.getDisplayIndentGuides=function(){return this.renderer.getDisplayIndentGuides()},this.setHighlightIndentGuides=function(e){this.renderer.setHighlightIndentGuides(e)},this.getHighlightIndentGuides=function(){return this.renderer.getHighlightIndentGuides()},this.setShowPrintMargin=function(e){this.renderer.setShowPrintMargin(e)},this.getShowPrintMargin=function(){return this.renderer.getShowPrintMargin()},this.setPrintMarginColumn=function(e){this.renderer.setPrintMarginColumn(e)},this.getPrintMarginColumn=function(){return this.renderer.getPrintMarginColumn()},this.setReadOnly=function(e){this.setOption("readOnly",e)},this.getReadOnly=function(){return this.getOption("readOnly")},this.setBehavioursEnabled=function(e){this.setOption("behavioursEnabled",e)},this.getBehavioursEnabled=function(){return this.getOption("behavioursEnabled")},this.setWrapBehavioursEnabled=function(e){this.setOption("wrapBehavioursEnabled",e)},this.getWrapBehavioursEnabled=function(){return this.getOption("wrapBehavioursEnabled")},this.setShowFoldWidgets=function(e){this.setOption("showFoldWidgets",e)},this.getShowFoldWidgets=function(){return this.getOption("showFoldWidgets")},this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)},this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},this.remove=function(e){this.selection.isEmpty()&&("left"==e?this.selection.selectLeft():this.selection.selectRight())
var t=this.getSelectionRange()
if(this.getBehavioursEnabled()){var i=this.session,n=i.getState(t.start.row),s=i.getMode().transformAction(n,"deletion",this,i,t)
if(0===t.end.column){var o=i.getTextRange(t)
if("\n"==o[o.length-1]){var r=i.getLine(t.end.row);/^\s+$/.test(r)&&(t.end.column=r.length)}}s&&(t=s)}this.session.remove(t),this.clearSelection()},this.removeWordRight=function(){this.selection.isEmpty()&&this.selection.selectWordRight(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeWordLeft=function(){this.selection.isEmpty()&&this.selection.selectWordLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeToLineStart=function(){this.selection.isEmpty()&&this.selection.selectLineStart(),this.selection.isEmpty()&&this.selection.selectLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeToLineEnd=function(){this.selection.isEmpty()&&this.selection.selectLineEnd()
var e=this.getSelectionRange()
e.start.column==e.end.column&&e.start.row==e.end.row&&(e.end.column=0,e.end.row++),this.session.remove(e),this.clearSelection()},this.splitLine=function(){this.selection.isEmpty()||(this.session.remove(this.getSelectionRange()),this.clearSelection())
var e=this.getCursorPosition()
this.insert("\n"),this.moveCursorToPosition(e)},this.transposeLetters=function(){if(this.selection.isEmpty()){var e=this.getCursorPosition(),t=e.column
if(0!==t){var i,n,s=this.session.getLine(e.row)
t<s.length?(i=s.charAt(t)+s.charAt(t-1),n=new f(e.row,t-1,e.row,t+1)):(i=s.charAt(t-1)+s.charAt(t-2),n=new f(e.row,t-2,e.row,t)),this.session.replace(n,i),this.session.selection.moveToPosition(n.end)}}},this.toLowerCase=function(){var e=this.getSelectionRange()
this.selection.isEmpty()&&this.selection.selectWord()
var t=this.getSelectionRange(),i=this.session.getTextRange(t)
this.session.replace(t,i.toLowerCase()),this.selection.setSelectionRange(e)},this.toUpperCase=function(){var e=this.getSelectionRange()
this.selection.isEmpty()&&this.selection.selectWord()
var t=this.getSelectionRange(),i=this.session.getTextRange(t)
this.session.replace(t,i.toUpperCase()),this.selection.setSelectionRange(e)},this.indent=function(){var e=this.session,t=this.getSelectionRange()
if(!(t.start.row<t.end.row)){if(t.start.column<t.end.column){var i=e.getTextRange(t)
if(!/^\s+$/.test(i)){c=this.$getSelectedRows()
return void e.indentRows(c.first,c.last,"\t")}}var n=e.getLine(t.start.row),s=t.start,o=e.getTabSize(),a=e.documentToScreenColumn(s.row,s.column)
if(this.session.getUseSoftTabs())var l=o-a%o,h=r.stringRepeat(" ",l)
else{for(l=a%o;" "==n[t.start.column-1]&&l;)t.start.column--,l--
this.selection.setSelectionRange(t),h="\t"}return this.insert(h)}var c=this.$getSelectedRows()
e.indentRows(c.first,c.last,"\t")},this.blockIndent=function(){var e=this.$getSelectedRows()
this.session.indentRows(e.first,e.last,"\t")},this.blockOutdent=function(){var e=this.session.getSelection()
this.session.outdentRows(e.getRange())},this.sortLines=function(){for(var e=this.$getSelectedRows(),t=this.session,i=[],n=e.first;n<=e.last;n++)i.push(t.getLine(n))
i.sort((function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}))
var s=new f(0,0,0,0)
for(n=e.first;n<=e.last;n++){var o=t.getLine(n)
s.start.row=n,s.end.row=n,s.end.column=o.length,t.replace(s,i[n-e.first])}},this.toggleCommentLines=function(){var e=this.session.getState(this.getCursorPosition().row),t=this.$getSelectedRows()
this.session.getMode().toggleCommentLines(e,this.session,t.first,t.last)},this.toggleBlockComment=function(){var e=this.getCursorPosition(),t=this.session.getState(e.row),i=this.getSelectionRange()
this.session.getMode().toggleBlockComment(t,this.session,i,e)},this.getNumberAt=function(e,t){var i=/[\-]?[0-9]+(?:\.[0-9]+)?/g
i.lastIndex=0
for(var n=this.session.getLine(e);i.lastIndex<t;){var s=i.exec(n)
if(s.index<=t&&s.index+s[0].length>=t)return{value:s[0],start:s.index,end:s.index+s[0].length}}return null},this.modifyNumber=function(e){var t=this.selection.getCursor().row,i=this.selection.getCursor().column,n=new f(t,i-1,t,i),s=this.session.getTextRange(n)
if(!isNaN(parseFloat(s))&&isFinite(s)){var o=this.getNumberAt(t,i)
if(o){var r=o.value.indexOf(".")>=0?o.start+o.value.indexOf(".")+1:o.end,a=o.start+o.value.length-r,l=parseFloat(o.value)
l*=Math.pow(10,a),r!==o.end&&i<r?e*=Math.pow(10,o.end-i-1):e*=Math.pow(10,o.end-i),l+=e
var h=(l/=Math.pow(10,a)).toFixed(a),c=new f(t,o.start,t,o.end)
this.session.replace(c,h),this.moveCursorTo(t,Math.max(o.start+1,i+h.length-o.value.length))}}else this.toggleWord()},this.$toggleWordPairs=[["first","last"],["true","false"],["yes","no"],["width","height"],["top","bottom"],["right","left"],["on","off"],["x","y"],["get","set"],["max","min"],["horizontal","vertical"],["show","hide"],["add","remove"],["up","down"],["before","after"],["even","odd"],["in","out"],["inside","outside"],["next","previous"],["increase","decrease"],["attach","detach"],["&&","||"],["==","!="]],this.toggleWord=function(){var e=this.selection.getCursor().row,t=this.selection.getCursor().column
this.selection.selectWord()
var i=this.getSelectedText(),n=this.selection.getWordRange().start.column,s=i.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g,"$1 ").split(/\s/),o=t-n-1
o<0&&(o=0)
var a=0,l=0,h=this
i.match(/[A-Za-z0-9_]+/)&&s.forEach((function(t,s){l=a+t.length,o>=a&&o<=l&&(i=t,h.selection.clearSelection(),h.moveCursorTo(e,a+n),h.selection.selectTo(e,l+n)),a=l}))
for(var c,u=this.$toggleWordPairs,d=0;d<u.length;d++)for(var g=u[d],f=0;f<=1;f++){var m=+!f,p=i.match(new RegExp("^\\s?_?("+r.escapeRegExp(g[f])+")\\s?$","i"))
if(p)i.match(new RegExp("([_]|^|\\s)("+r.escapeRegExp(p[1])+")($|\\s)","g"))&&(c=i.replace(new RegExp(r.escapeRegExp(g[f]),"i"),(function(e){var t=g[m]
return e.toUpperCase()==e?t=t.toUpperCase():e.charAt(0).toUpperCase()==e.charAt(0)&&(t=t.substr(0,0)+g[m].charAt(0).toUpperCase()+t.substr(1)),t})),this.insert(c),c="")}},this.findLinkAt=function(e,t){var i,s,o=this.session.getLine(e).split(/((?:https?|ftp):\/\/[\S]+)/),r=t
r<0&&(r=0)
var a,l=0,h=0
try{for(var c=n(o),u=c.next();!u.done;u=c.next()){var d=u.value
if(h=l+d.length,r>=l&&r<=h&&d.match(/((?:https?|ftp):\/\/[\S]+)/)){a=d.replace(/[\s:.,'";}\]]+$/,"")
break}l=h}}catch(f){i={error:f}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(i)throw i.error}}return a},this.openLink=function(){var e=this.selection.getCursor(),t=this.findLinkAt(e.row,e.column)
return t&&window.open(t,"_blank"),null!=t},this.removeLines=function(){var e=this.$getSelectedRows()
this.session.removeFullLines(e.first,e.last),this.clearSelection()},this.duplicateSelection=function(){var e=this.selection,t=this.session,i=e.getRange(),n=e.isBackwards()
if(i.isEmpty()){var s=i.start.row
t.duplicateLines(s,s)}else{var o=n?i.start:i.end,r=t.insert(o,t.getTextRange(i),!1)
i.start=o,i.end=r,e.setSelectionRange(i,n)}},this.moveLinesDown=function(){this.$moveLines(1,!1)},this.moveLinesUp=function(){this.$moveLines(-1,!1)},this.moveText=function(e,t,i){return this.session.moveText(e,t,i)},this.copyLinesUp=function(){this.$moveLines(-1,!0)},this.copyLinesDown=function(){this.$moveLines(1,!0)},this.$moveLines=function(e,t){var i,n,s=this.selection
if(!s.inMultiSelectMode||this.inVirtualSelectionMode){var o=s.toOrientedRange()
i=this.$getSelectedRows(o),n=this.session.$moveLines(i.first,i.last,t?0:e),t&&-1==e&&(n=0),o.moveBy(n,0),s.fromOrientedRange(o)}else{var r=s.rangeList.ranges
s.rangeList.detach(this.session),this.inVirtualSelectionMode=!0
for(var a=0,l=0,h=r.length,c=0;c<h;c++){var u=c
r[c].moveBy(a,0)
for(var d=(i=this.$getSelectedRows(r[c])).first,g=i.last;++c<h;){l&&r[c].moveBy(l,0)
var f=this.$getSelectedRows(r[c])
if(t&&f.first!=g)break
if(!t&&f.first>g+1)break
g=f.last}for(c--,a=this.session.$moveLines(d,g,t?0:e),t&&-1==e&&(u=c+1);u<=c;)r[u].moveBy(a,0),u++
t||(a=0),l+=a}s.fromOrientedRange(s.ranges[0]),s.rangeList.attach(this.session),this.inVirtualSelectionMode=!1}},this.$getSelectedRows=function(e){return e=(e||this.getSelectionRange()).collapseRows(),{first:this.session.getRowFoldStart(e.start.row),last:this.session.getRowFoldEnd(e.end.row)}},this.onCompositionStart=function(e){this.renderer.showComposition(e)},this.onCompositionUpdate=function(e){this.renderer.setCompositionText(e)},this.onCompositionEnd=function(){this.renderer.hideComposition()},this.getFirstVisibleRow=function(){return this.renderer.getFirstVisibleRow()},this.getLastVisibleRow=function(){return this.renderer.getLastVisibleRow()},this.isRowVisible=function(e){return e>=this.getFirstVisibleRow()&&e<=this.getLastVisibleRow()},this.isRowFullyVisible=function(e){return e>=this.renderer.getFirstFullyVisibleRow()&&e<=this.renderer.getLastFullyVisibleRow()},this.$getVisibleRowCount=function(){return this.renderer.getScrollBottomRow()-this.renderer.getScrollTopRow()+1},this.$moveByPage=function(e,t){var i=this.renderer,n=this.renderer.layerConfig,s=e*Math.floor(n.height/n.lineHeight)
!0===t?this.selection.$moveSelection((function(){this.moveCursorBy(s,0)})):!1===t&&(this.selection.moveCursorBy(s,0),this.selection.clearSelection())
var o=i.scrollTop
i.scrollBy(0,s*n.lineHeight),null!=t&&i.scrollCursorIntoView(null,.5),i.animateScrolling(o)},this.selectPageDown=function(){this.$moveByPage(1,!0)},this.selectPageUp=function(){this.$moveByPage(-1,!0)},this.gotoPageDown=function(){this.$moveByPage(1,!1)},this.gotoPageUp=function(){this.$moveByPage(-1,!1)},this.scrollPageDown=function(){this.$moveByPage(1)},this.scrollPageUp=function(){this.$moveByPage(-1)},this.scrollToRow=function(e){this.renderer.scrollToRow(e)},this.scrollToLine=function(e,t,i,n){this.renderer.scrollToLine(e,t,i,n)},this.centerSelection=function(){var e=this.getSelectionRange(),t={row:Math.floor(e.start.row+(e.end.row-e.start.row)/2),column:Math.floor(e.start.column+(e.end.column-e.start.column)/2)}
this.renderer.alignCursor(t,.5)},this.getCursorPosition=function(){return this.selection.getCursor()},this.getCursorPositionScreen=function(){return this.session.documentToScreenPosition(this.getCursorPosition())},this.getSelectionRange=function(){return this.selection.getRange()},this.selectAll=function(){this.selection.selectAll()},this.clearSelection=function(){this.selection.clearSelection()},this.moveCursorTo=function(e,t){this.selection.moveCursorTo(e,t)},this.moveCursorToPosition=function(e){this.selection.moveCursorToPosition(e)},this.jumpToMatching=function(e,t){var i=this.getCursorPosition(),n=new $(this.session,i.row,i.column),s=n.getCurrentToken(),o=0
s&&-1!==s.type.indexOf("tag-name")&&(s=n.stepBackward())
var r=s||n.stepForward()
if(r){var a,l,h=!1,c={},u=i.column-r.start,d={")":"(","(":"(","]":"[","[":"[","{":"{","}":"{"}
do{if(r.value.match(/[{}()\[\]]/g)){for(;u<r.value.length&&!h;u++)if(d[r.value[u]])switch(l=d[r.value[u]]+"."+r.type.replace("rparen","lparen"),isNaN(c[l])&&(c[l]=0),r.value[u]){case"(":case"[":case"{":c[l]++
break
case")":case"]":case"}":c[l]--,-1===c[l]&&(a="bracket",h=!0)}}else-1!==r.type.indexOf("tag-name")&&(isNaN(c[r.value])&&(c[r.value]=0),"<"===s.value&&o>1?c[r.value]++:"</"===s.value&&c[r.value]--,-1===c[r.value]&&(a="tag",h=!0))
h||(s=r,o++,r=n.stepForward(),u=0)}while(r&&!h)
if(a){var g,m
if("bracket"===a)(g=this.session.getBracketRange(i))||(m=(g=new f(n.getCurrentTokenRow(),n.getCurrentTokenColumn()+u-1,n.getCurrentTokenRow(),n.getCurrentTokenColumn()+u-1)).start,(t||m.row===i.row&&Math.abs(m.column-i.column)<2)&&(g=this.session.getBracketRange(m)))
else if("tag"===a){if(!r||-1===r.type.indexOf("tag-name"))return
if(0===(g=new f(n.getCurrentTokenRow(),n.getCurrentTokenColumn()-2,n.getCurrentTokenRow(),n.getCurrentTokenColumn()-2)).compare(i.row,i.column)){var p=this.session.getMatchingTags(i)
p&&(p.openTag.contains(i.row,i.column)?m=(g=p.closeTag).start:(g=p.openTag,m=p.closeTag.start.row===i.row&&p.closeTag.start.column===i.column?g.end:g.start))}m=m||g.start}(m=g&&g.cursor||m)&&(e?g&&t?this.selection.setRange(g):g&&g.isEqual(this.getSelectionRange())?this.clearSelection():this.selection.selectTo(m.row,m.column):this.selection.moveTo(m.row,m.column))}}},this.gotoLine=function(e,t,i){this.selection.clearSelection(),this.session.unfold({row:e-1,column:t||0}),this.exitMultiSelectMode&&this.exitMultiSelectMode(),this.moveCursorTo(e-1,t||0),this.isRowFullyVisible(e-1)||this.scrollToLine(e-1,!0,i)},this.navigateTo=function(e,t){this.selection.moveTo(e,t)},this.navigateUp=function(e){if(this.selection.isMultiLine()&&!this.selection.isBackwards()){var t=this.selection.anchor.getPosition()
return this.moveCursorToPosition(t)}this.selection.clearSelection(),this.selection.moveCursorBy(-e||-1,0)},this.navigateDown=function(e){if(this.selection.isMultiLine()&&this.selection.isBackwards()){var t=this.selection.anchor.getPosition()
return this.moveCursorToPosition(t)}this.selection.clearSelection(),this.selection.moveCursorBy(e||1,0)},this.navigateLeft=function(e){if(this.selection.isEmpty())for(e=e||1;e--;)this.selection.moveCursorLeft()
else{var t=this.getSelectionRange().start
this.moveCursorToPosition(t)}this.clearSelection()},this.navigateRight=function(e){if(this.selection.isEmpty())for(e=e||1;e--;)this.selection.moveCursorRight()
else{var t=this.getSelectionRange().end
this.moveCursorToPosition(t)}this.clearSelection()},this.navigateLineStart=function(){this.selection.moveCursorLineStart(),this.clearSelection()},this.navigateLineEnd=function(){this.selection.moveCursorLineEnd(),this.clearSelection()},this.navigateFileEnd=function(){this.selection.moveCursorFileEnd(),this.clearSelection()},this.navigateFileStart=function(){this.selection.moveCursorFileStart(),this.clearSelection()},this.navigateWordRight=function(){this.selection.moveCursorWordRight(),this.clearSelection()},this.navigateWordLeft=function(){this.selection.moveCursorWordLeft(),this.clearSelection()},this.replace=function(e,t){t&&this.$search.set(t)
var i=this.$search.find(this.session),n=0
return i?(this.$tryReplace(i,e)&&(n=1),this.selection.setSelectionRange(i),this.renderer.scrollSelectionIntoView(i.start,i.end),n):n},this.replaceAll=function(e,t){t&&this.$search.set(t)
var i=this.$search.findAll(this.session),n=0
if(!i.length)return n
var s=this.getSelectionRange()
this.selection.moveTo(0,0)
for(var o=i.length-1;o>=0;--o)this.$tryReplace(i[o],e)&&n++
return this.selection.setSelectionRange(s),n},this.$tryReplace=function(e,t){var i=this.session.getTextRange(e)
return null!==(t=this.$search.replace(i,t))?(e.end=this.session.replace(e,t),e):null},this.getLastSearchOptions=function(){return this.$search.getOptions()},this.find=function(e,t,i){t||(t={}),"string"==typeof e||e instanceof RegExp?t.needle=e:"object"==typeof e&&s.mixin(t,e)
var n=this.selection.getRange()
null==t.needle&&((e=this.session.getTextRange(n)||this.$search.$options.needle)||(n=this.session.getWordRange(n.start.row,n.start.column),e=this.session.getTextRange(n)),this.$search.set({needle:e})),this.$search.set(t),t.start||this.$search.set({start:n})
var o=this.$search.find(this.session)
return t.preventScroll?o:o?(this.revealRange(o,i),o):(t.backwards?n.start=n.end:n.end=n.start,void this.selection.setRange(n))},this.findNext=function(e,t){this.find({skipCurrent:!0,backwards:!1},e,t)},this.findPrevious=function(e,t){this.find(e,{skipCurrent:!0,backwards:!0},t)},this.revealRange=function(e,t){this.session.unfold(e),this.selection.setSelectionRange(e)
var i=this.renderer.scrollTop
this.renderer.scrollSelectionIntoView(e.start,e.end,.5),!1!==t&&this.renderer.animateScrolling(i)},this.undo=function(){this.session.getUndoManager().undo(this.session),this.renderer.scrollCursorIntoView(null,.5)},this.redo=function(){this.session.getUndoManager().redo(this.session),this.renderer.scrollCursorIntoView(null,.5)},this.destroy=function(){this.$toDestroy&&(this.$toDestroy.forEach((function(e){e.destroy()})),this.$toDestroy=null),this.$mouseHandler&&this.$mouseHandler.destroy(),this.renderer.destroy(),this._signal("destroy",this),this.session&&this.session.destroy(),this._$emitInputEvent&&this._$emitInputEvent.cancel(),this.removeAllListeners()},this.setAutoScrollEditorIntoView=function(e){if(e){var t,i=this,n=!1
this.$scrollAnchor||(this.$scrollAnchor=document.createElement("div"))
var s=this.$scrollAnchor
s.style.cssText="position:absolute",this.container.insertBefore(s,this.container.firstChild)
var o=this.on("changeSelection",(function(){n=!0})),r=this.renderer.on("beforeRender",(function(){n&&(t=i.renderer.container.getBoundingClientRect())})),a=this.renderer.on("afterRender",(function(){if(n&&t&&(i.isFocused()||i.searchBox&&i.searchBox.isFocused())){var e=i.renderer,o=e.$cursorLayer.$pixelPos,r=e.layerConfig,a=o.top-r.offset
null!=(n=o.top>=0&&a+t.top<0||!(o.top<r.height&&o.top+t.top+r.lineHeight>window.innerHeight)&&null)&&(s.style.top=a+"px",s.style.left=o.left+"px",s.style.height=r.lineHeight+"px",s.scrollIntoView(n)),n=t=null}}))
this.setAutoScrollEditorIntoView=function(e){e||(delete this.setAutoScrollEditorIntoView,this.off("changeSelection",o),this.renderer.off("afterRender",a),this.renderer.off("beforeRender",r))}}},this.$resetCursorStyle=function(){var e=this.$cursorStyle||"ace",t=this.renderer.$cursorLayer
t&&(t.setSmoothBlinking(/smooth/.test(e)),t.isBlinking=!this.$readOnly&&"wide"!=e,o.setCssClass(t.element,"ace_slim-cursors",/slim/.test(e)))},this.prompt=function(e,t,i){var n=this
w.loadModule("./ext/prompt",(function(s){s.prompt(n,e,t,i)}))}}.call(y.prototype),w.defineOptions(y.prototype,"editor",{selectionStyle:{set:function(e){this.onSelectionChange(),this._signal("changeSelectionStyle",{data:e})},initialValue:"line"},highlightActiveLine:{set:function(){this.$updateHighlightActiveLine()},initialValue:!0},highlightSelectedWord:{set:function(e){this.$onSelectionChange()},initialValue:!0},readOnly:{set:function(e){this.textInput.setReadOnly(e),this.$resetCursorStyle()},initialValue:!1},copyWithEmptySelection:{set:function(e){this.textInput.setCopyWithEmptySelection(e)},initialValue:!1},cursorStyle:{set:function(e){this.$resetCursorStyle()},values:["ace","slim","smooth","wide"],initialValue:"ace"},mergeUndoDeltas:{values:[!1,!0,"always"],initialValue:!0},behavioursEnabled:{initialValue:!0},wrapBehavioursEnabled:{initialValue:!0},enableAutoIndent:{initialValue:!0},autoScrollEditorIntoView:{set:function(e){this.setAutoScrollEditorIntoView(e)}},keyboardHandler:{set:function(e){this.setKeyboardHandler(e)},get:function(){return this.$keybindingId},handlesSet:!0},value:{set:function(e){this.session.setValue(e)},get:function(){return this.getValue()},handlesSet:!0,hidden:!0},session:{set:function(e){this.setSession(e)},get:function(){return this.session},handlesSet:!0,hidden:!0},showLineNumbers:{set:function(e){this.renderer.$gutterLayer.setShowLineNumbers(e),this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER),e&&this.$relativeLineNumbers?C.attach(this):C.detach(this)},initialValue:!0},relativeLineNumbers:{set:function(e){this.$showLineNumbers&&e?C.attach(this):C.detach(this)}},placeholder:{set:function(e){this.$updatePlaceholder||(this.$updatePlaceholder=function(){var e=this.session&&(this.renderer.$composition||this.getValue())
if(e&&this.renderer.placeholderNode)this.renderer.off("afterRender",this.$updatePlaceholder),o.removeCssClass(this.container,"ace_hasPlaceholder"),this.renderer.placeholderNode.remove(),this.renderer.placeholderNode=null
else if(e||this.renderer.placeholderNode)!e&&this.renderer.placeholderNode&&(this.renderer.placeholderNode.textContent=this.$placeholder||"")
else{this.renderer.on("afterRender",this.$updatePlaceholder),o.addCssClass(this.container,"ace_hasPlaceholder")
var t=o.createElement("div")
t.className="ace_placeholder",t.textContent=this.$placeholder||"",this.renderer.placeholderNode=t,this.renderer.content.appendChild(this.renderer.placeholderNode)}}.bind(this),this.on("input",this.$updatePlaceholder)),this.$updatePlaceholder()}},customScrollbar:"renderer",hScrollBarAlwaysVisible:"renderer",vScrollBarAlwaysVisible:"renderer",highlightGutterLine:"renderer",animatedScroll:"renderer",showInvisibles:"renderer",showPrintMargin:"renderer",printMarginColumn:"renderer",printMargin:"renderer",fadeFoldWidgets:"renderer",showFoldWidgets:"renderer",displayIndentGuides:"renderer",highlightIndentGuides:"renderer",showGutter:"renderer",fontSize:"renderer",fontFamily:"renderer",maxLines:"renderer",minLines:"renderer",scrollPastEnd:"renderer",fixedWidthGutter:"renderer",theme:"renderer",hasCssTransforms:"renderer",maxPixelHeight:"renderer",useTextareaForIME:"renderer",scrollSpeed:"$mouseHandler",dragDelay:"$mouseHandler",dragEnabled:"$mouseHandler",focusTimeout:"$mouseHandler",tooltipFollowsMouse:"$mouseHandler",firstLineNumber:"session",overwrite:"session",newLineMode:"session",useWorker:"session",useSoftTabs:"session",navigateWithinSoftTabs:"session",tabSize:"session",wrap:"session",indentedSoftWrap:"session",foldStyle:"session",mode:"session"})
var C={getText:function(e,t){return(Math.abs(e.selection.lead.row-t)||t+1+(t<9?"·":""))+""},getWidth:function(e,t,i){return Math.max(t.toString().length,(i.lastRow+1).toString().length,2)*i.characterWidth},update:function(e,t){t.renderer.$loop.schedule(t.renderer.CHANGE_GUTTER)},attach:function(e){e.renderer.$gutterLayer.$renderer=this,e.on("changeSelection",this.update),this.update(null,e)},detach:function(e){e.renderer.$gutterLayer.$renderer==this&&(e.renderer.$gutterLayer.$renderer=null),e.off("changeSelection",this.update),this.update(null,e)}}
t.Editor=y})),ace.define("ace/undomanager",["require","exports","module","ace/range"],(function(e,t,i){"use strict"
function n(e){return{row:e.row,column:e.column}}function s(e){if(e=e||this,Array.isArray(e))return e.map(s).join("\n")
var t=""
return e.action?(t="insert"==e.action?"+":"-",t+="["+e.lines+"]"):e.value&&(t=Array.isArray(e.value)?e.value.map(o).join("\n"):o(e.value)),e.start&&(t+=o(e)),(e.id||e.rev)&&(t+="\t("+(e.id||e.rev)+")"),t}function o(e){return e.start.row+":"+e.start.column+"=>"+e.end.row+":"+e.end.column}function r(e,t){var i="insert"==e.action,n="insert"==t.action
if(i&&n)if(m(t.start,e.end)>=0)h(t,e,-1)
else{if(!(m(t.start,e.start)<=0))return null
h(e,t,1)}else if(i&&!n)if(m(t.start,e.end)>=0)h(t,e,-1)
else{if(!(m(t.end,e.start)<=0))return null
h(e,t,-1)}else if(!i&&n)if(m(t.start,e.start)>=0)h(t,e,1)
else{if(!(m(t.start,e.start)<=0))return null
h(e,t,1)}else if(!i&&!n)if(m(t.start,e.start)>=0)h(t,e,1)
else{if(!(m(t.end,e.start)<=0))return null
h(e,t,-1)}return[t,e]}function a(e,t){for(var i=e.length;i--;)for(var n=0;n<t.length;n++)if(!r(e[i],t[n])){for(;i<e.length;){for(;n--;)r(t[n],e[i])
n=t.length,i++}return[e,t]}return e.selectionBefore=t.selectionBefore=e.selectionAfter=t.selectionAfter=null,[t,e]}function l(e,t){var i="insert"==e.action,n="insert"==t.action
if(i&&n)m(e.start,t.start)<0?h(t,e,1):h(e,t,1)
else if(i&&!n)m(e.start,t.end)>=0?h(e,t,-1):(m(e.start,t.start)<=0||h(e,f.fromPoints(t.start,e.start),-1),h(t,e,1))
else if(!i&&n)m(t.start,e.end)>=0?h(t,e,-1):(m(t.start,e.start)<=0||h(t,f.fromPoints(e.start,t.start),-1),h(e,t,1))
else if(!i&&!n)if(m(t.start,e.end)>=0)h(t,e,-1)
else{var s,o
if(!(m(t.end,e.start)<=0))return m(e.start,t.start)<0&&(s=e,e=u(e,t.start)),m(e.end,t.end)>0&&(o=u(e,t.end)),c(t.end,e.start,e.end,-1),o&&!s&&(e.lines=o.lines,e.start=o.start,e.end=o.end,o=e),[t,s,o].filter(Boolean)
h(e,t,-1)}return[t,e]}function h(e,t,i){c(e.start,t.start,t.end,i),c(e.end,t.start,t.end,i)}function c(e,t,i,n){e.row==(1==n?t:i).row&&(e.column+=n*(i.column-t.column)),e.row+=n*(i.row-t.row)}function u(e,t){var i=e.lines,s=e.end
e.end=n(t)
var o=e.end.row-e.start.row,r=i.splice(o,i.length),a=o?t.column:t.column-e.start.column
return i.push(r[0].substring(0,a)),r[0]=r[0].substr(a),{start:n(t),end:s,lines:r,action:e.action}}function d(e,t){t=function(e){return{start:n(e.start),end:n(e.end),action:e.action,lines:e.lines.slice()}}(t)
for(var i=e.length;i--;){for(var s=e[i],o=0;o<s.length;o++){var r=l(s[o],t)
t=r[0],2!=r.length&&(r[2]?(s.splice(o+1,1,r[1],r[2]),o++):r[1]||(s.splice(o,1),o--))}s.length||e.splice(i,1)}return e}var g=function(){this.$maxRev=0,this.$fromUndo=!1,this.$undoDepth=1/0,this.reset()};(function(){this.addSession=function(e){this.$session=e},this.add=function(e,t,i){if(!this.$fromUndo&&e!=this.$lastDelta){if(this.$keepRedoStack||(this.$redoStack.length=0),!1===t||!this.lastDeltas){this.lastDeltas=[]
var n=this.$undoStack.length
n>this.$undoDepth-1&&this.$undoStack.splice(0,n-this.$undoDepth+1),this.$undoStack.push(this.lastDeltas),e.id=this.$rev=++this.$maxRev}"remove"!=e.action&&"insert"!=e.action||(this.$lastDelta=e),this.lastDeltas.push(e)}},this.addSelection=function(e,t){this.selections.push({value:e,rev:t||this.$rev})},this.startNewGroup=function(){return this.lastDeltas=null,this.$rev},this.markIgnored=function(e,t){null==t&&(t=this.$rev+1)
for(var i=this.$undoStack,n=i.length;n--;){var s=i[n][0]
if(s.id<=e)break
s.id<t&&(s.ignore=!0)}this.lastDeltas=null},this.getSelection=function(e,t){for(var i=this.selections,n=i.length;n--;){var s=i[n]
if(s.rev<e)return t&&(s=i[n+1]),s}},this.getRevision=function(){return this.$rev},this.getDeltas=function(e,t){null==t&&(t=this.$rev+1)
for(var i=this.$undoStack,n=null,s=0,o=i.length;o--;){var r=i[o][0]
if(r.id<t&&!n&&(n=o+1),r.id<=e){s=o+1
break}}return i.slice(s,n)},this.getChangedRanges=function(e,t){null==t&&(t=this.$rev+1)},this.getChangedLines=function(e,t){null==t&&(t=this.$rev+1)},this.undo=function(e,t){this.lastDeltas=null
var i=this.$undoStack
if(function(e,t){for(var i=t;i--;){var n=e[i]
if(n&&!n[0].ignore){for(;i<t-1;){var s=a(e[i],e[i+1])
e[i]=s[0],e[i+1]=s[1],i++}return!0}}}(i,i.length)){e||(e=this.$session),this.$redoStackBaseRev!==this.$rev&&this.$redoStack.length&&(this.$redoStack=[]),this.$fromUndo=!0
var n=i.pop(),s=null
return n&&(s=e.undoChanges(n,t),this.$redoStack.push(n),this.$syncRev()),this.$fromUndo=!1,s}},this.redo=function(e,t){if(this.lastDeltas=null,e||(e=this.$session),this.$fromUndo=!0,this.$redoStackBaseRev!=this.$rev){var i=this.getDeltas(this.$redoStackBaseRev,this.$rev+1);(function(e,t){for(var i=0;i<t.length;i++)for(var n=t[i],s=0;s<n.length;s++)d(e,n[s])})(this.$redoStack,i),this.$redoStackBaseRev=this.$rev,this.$redoStack.forEach((function(e){e[0].id=++this.$maxRev}),this)}var n=this.$redoStack.pop(),s=null
return n&&(s=e.redoChanges(n,t),this.$undoStack.push(n),this.$syncRev()),this.$fromUndo=!1,s},this.$syncRev=function(){var e=this.$undoStack,t=e[e.length-1],i=t&&t[0].id||0
this.$redoStackBaseRev=i,this.$rev=i},this.reset=function(){this.lastDeltas=null,this.$lastDelta=null,this.$undoStack=[],this.$redoStack=[],this.$rev=0,this.mark=0,this.$redoStackBaseRev=this.$rev,this.selections=[]},this.canUndo=function(){return this.$undoStack.length>0},this.canRedo=function(){return this.$redoStack.length>0},this.bookmark=function(e){null==e&&(e=this.$rev),this.mark=e},this.isAtBookmark=function(){return this.$rev===this.mark},this.toJSON=function(){},this.fromJSON=function(){},this.hasUndo=this.canUndo,this.hasRedo=this.canRedo,this.isClean=this.isAtBookmark,this.markClean=this.bookmark,this.$prettyPrint=function(e){return e?s(e):s(this.$undoStack)+"\n---\n"+s(this.$redoStack)}}).call(g.prototype)
var f=e("./range").Range,m=f.comparePoints
f.comparePoints
t.UndoManager=g})),ace.define("ace/layer/lines",["require","exports","module","ace/lib/dom"],(function(e,t,i){"use strict"
var n=e("../lib/dom"),s=function(e,t){this.element=e,this.canvasHeight=t||5e5,this.element.style.height=2*this.canvasHeight+"px",this.cells=[],this.cellCache=[],this.$offsetCoefficient=0};(function(){this.moveContainer=function(e){n.translate(this.element,0,-e.firstRowScreen*e.lineHeight%this.canvasHeight-e.offset*this.$offsetCoefficient)},this.pageChanged=function(e,t){return Math.floor(e.firstRowScreen*e.lineHeight/this.canvasHeight)!==Math.floor(t.firstRowScreen*t.lineHeight/this.canvasHeight)},this.computeLineTop=function(e,t,i){var n=t.firstRowScreen*t.lineHeight,s=Math.floor(n/this.canvasHeight)
return i.documentToScreenRow(e,0)*t.lineHeight-s*this.canvasHeight},this.computeLineHeight=function(e,t,i){return t.lineHeight*i.getRowLineCount(e)},this.getLength=function(){return this.cells.length},this.get=function(e){return this.cells[e]},this.shift=function(){this.$cacheCell(this.cells.shift())},this.pop=function(){this.$cacheCell(this.cells.pop())},this.push=function(e){if(Array.isArray(e)){this.cells.push.apply(this.cells,e)
for(var t=n.createFragment(this.element),i=0;i<e.length;i++)t.appendChild(e[i].element)
this.element.appendChild(t)}else this.cells.push(e),this.element.appendChild(e.element)},this.unshift=function(e){if(Array.isArray(e)){this.cells.unshift.apply(this.cells,e)
for(var t=n.createFragment(this.element),i=0;i<e.length;i++)t.appendChild(e[i].element)
this.element.firstChild?this.element.insertBefore(t,this.element.firstChild):this.element.appendChild(t)}else this.cells.unshift(e),this.element.insertAdjacentElement("afterbegin",e.element)},this.last=function(){return this.cells.length?this.cells[this.cells.length-1]:null},this.$cacheCell=function(e){e&&(e.element.remove(),this.cellCache.push(e))},this.createCell=function(e,t,i,s){var o=this.cellCache.pop()
if(!o){var r=n.createElement("div")
s&&s(r),this.element.appendChild(r),o={element:r,text:"",row:e}}return o.row=e,o}}).call(s.prototype),t.Lines=s})),ace.define("ace/layer/gutter",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/layer/lines"],(function(e,t,i){"use strict"
function n(e){var t=document.createTextNode("")
e.appendChild(t)
var i=s.createElement("span")
return e.appendChild(i),e}var s=e("../lib/dom"),o=e("../lib/oop"),r=e("../lib/lang"),a=e("../lib/event_emitter").EventEmitter,l=e("./lines").Lines,h=function(e){this.element=s.createElement("div"),this.element.className="ace_layer ace_gutter-layer",e.appendChild(this.element),this.setShowFoldWidgets(this.$showFoldWidgets),this.gutterWidth=0,this.$annotations=[],this.$updateAnnotations=this.$updateAnnotations.bind(this),this.$lines=new l(this.element),this.$lines.$offsetCoefficient=1};(function(){o.implement(this,a),this.setSession=function(e){this.session&&this.session.off("change",this.$updateAnnotations),this.session=e,e&&e.on("change",this.$updateAnnotations)},this.addGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.addGutterDecoration"),this.session.addGutterDecoration(e,t)},this.removeGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.removeGutterDecoration"),this.session.removeGutterDecoration(e,t)},this.setAnnotations=function(e){this.$annotations=[]
for(var t=0;t<e.length;t++){var i=e[t],n=i.row,s=this.$annotations[n]
s||(s=this.$annotations[n]={text:[]})
var o=i.text
o=o?r.escapeHTML(o):i.html||"",-1===s.text.indexOf(o)&&s.text.push(o)
var a=i.type,l=i.className
l?s.className=l:"error"==a?s.className=" ace_error":"warning"==a&&" ace_error"!=s.className?s.className=" ace_warning":"info"==a&&!s.className&&(s.className=" ace_info")}},this.$updateAnnotations=function(e){if(this.$annotations.length){var t=e.start.row,i=e.end.row-t
if(0!==i)if("remove"==e.action)this.$annotations.splice(t,i+1,null)
else{var n=new Array(i+1)
n.unshift(t,1),this.$annotations.splice.apply(this.$annotations,n)}}},this.update=function(e){this.config=e
var t=this.session,i=e.firstRow,s=Math.min(e.lastRow+e.gutterOffset,t.getLength()-1)
this.oldLastRow=s,this.config=e,this.$lines.moveContainer(e),this.$updateCursorRow()
for(var o=t.getNextFoldLine(i),r=o?o.start.row:1/0,a=null,l=-1,h=i;;){if(h>r&&(h=o.end.row+1,r=(o=t.getNextFoldLine(h,o))?o.start.row:1/0),h>s){for(;this.$lines.getLength()>l+1;)this.$lines.pop()
break}(a=this.$lines.get(++l))?a.row=h:(a=this.$lines.createCell(h,e,this.session,n),this.$lines.push(a)),this.$renderCell(a,e,o,h),h++}this._signal("afterRender"),this.$updateGutterWidth(e)},this.$updateGutterWidth=function(e){var t=this.session,i=t.gutterRenderer||this.$renderer,n=t.$firstLineNumber,s=this.$lines.last()?this.$lines.last().text:"";(this.$fixedWidth||t.$useWrapMode)&&(s=t.getLength()+n-1)
var o=i?i.getWidth(t,s,e):s.toString().length*e.characterWidth,r=this.$padding||this.$computePadding();(o+=r.left+r.right)!==this.gutterWidth&&!isNaN(o)&&(this.gutterWidth=o,this.element.parentNode.style.width=this.element.style.width=Math.ceil(this.gutterWidth)+"px",this._signal("changeGutterWidth",o))},this.$updateCursorRow=function(){if(this.$highlightGutterLine){var e=this.session.selection.getCursor()
this.$cursorRow!==e.row&&(this.$cursorRow=e.row)}},this.updateLineHighlight=function(){if(this.$highlightGutterLine){var e=this.session.selection.cursor.row
if(this.$cursorRow=e,!this.$cursorCell||this.$cursorCell.row!=e){this.$cursorCell&&(this.$cursorCell.element.className=this.$cursorCell.element.className.replace("ace_gutter-active-line ",""))
var t=this.$lines.cells
this.$cursorCell=null
for(var i=0;i<t.length;i++){var n=t[i]
if(n.row>=this.$cursorRow){if(n.row>this.$cursorRow){var s=this.session.getFoldLine(this.$cursorRow)
if(!(i>0&&s&&s.start.row==t[i-1].row))break
n=t[i-1]}n.element.className="ace_gutter-active-line "+n.element.className,this.$cursorCell=n
break}}}}},this.scrollLines=function(e){var t=this.config
if(this.config=e,this.$updateCursorRow(),this.$lines.pageChanged(t,e))return this.update(e)
this.$lines.moveContainer(e)
var i=Math.min(e.lastRow+e.gutterOffset,this.session.getLength()-1),n=this.oldLastRow
if(this.oldLastRow=i,!t||n<e.firstRow)return this.update(e)
if(i<t.firstRow)return this.update(e)
if(t.firstRow<e.firstRow)for(var s=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);s>0;s--)this.$lines.shift()
if(n>i)for(s=this.session.getFoldedRowCount(i+1,n);s>0;s--)this.$lines.pop()
e.firstRow<t.firstRow&&this.$lines.unshift(this.$renderLines(e,e.firstRow,t.firstRow-1)),i>n&&this.$lines.push(this.$renderLines(e,n+1,i)),this.updateLineHighlight(),this._signal("afterRender"),this.$updateGutterWidth(e)},this.$renderLines=function(e,t,i){for(var s=[],o=t,r=this.session.getNextFoldLine(o),a=r?r.start.row:1/0;o>a&&(o=r.end.row+1,a=(r=this.session.getNextFoldLine(o,r))?r.start.row:1/0),!(o>i);){var l=this.$lines.createCell(o,e,this.session,n)
this.$renderCell(l,e,r,o),s.push(l),o++}return s},this.$renderCell=function(e,t,i,n){var o=e.element,r=this.session,a=o.childNodes[0],l=o.childNodes[1],h=r.$firstLineNumber,c=r.$breakpoints,u=r.$decorations,d=r.gutterRenderer||this.$renderer,g=this.$showFoldWidgets&&r.foldWidgets,f=i?i.start.row:Number.MAX_VALUE,m="ace_gutter-cell "
if(this.$highlightGutterLine&&(n==this.$cursorRow||i&&n<this.$cursorRow&&n>=f&&this.$cursorRow<=i.end.row)&&(m+="ace_gutter-active-line ",this.$cursorCell!=e&&(this.$cursorCell&&(this.$cursorCell.element.className=this.$cursorCell.element.className.replace("ace_gutter-active-line ","")),this.$cursorCell=e)),c[n]&&(m+=c[n]),u[n]&&(m+=u[n]),this.$annotations[n]&&(m+=this.$annotations[n].className),o.className!=m&&(o.className=m),g){var p=g[n]
null==p&&(p=g[n]=r.getFoldWidget(n))}if(p){m="ace_fold-widget ace_"+p
"start"==p&&n==f&&n<i.end.row?m+=" ace_closed":m+=" ace_open",l.className!=m&&(l.className=m)
var v=t.lineHeight+"px"
s.setStyle(l.style,"height",v),s.setStyle(l.style,"display","inline-block")}else l&&s.setStyle(l.style,"display","none")
var w=(d?d.getText(r,n):n+h).toString()
return w!==a.data&&(a.data=w),s.setStyle(e.element.style,"height",this.$lines.computeLineHeight(n,t,r)+"px"),s.setStyle(e.element.style,"top",this.$lines.computeLineTop(n,t,r)+"px"),e.text=w,e},this.$fixedWidth=!1,this.$highlightGutterLine=!0,this.$renderer="",this.setHighlightGutterLine=function(e){this.$highlightGutterLine=e},this.$showLineNumbers=!0,this.$renderer="",this.setShowLineNumbers=function(e){this.$renderer=!e&&{getWidth:function(){return 0},getText:function(){return""}}},this.getShowLineNumbers=function(){return this.$showLineNumbers},this.$showFoldWidgets=!0,this.setShowFoldWidgets=function(e){e?s.addCssClass(this.element,"ace_folding-enabled"):s.removeCssClass(this.element,"ace_folding-enabled"),this.$showFoldWidgets=e,this.$padding=null},this.getShowFoldWidgets=function(){return this.$showFoldWidgets},this.$computePadding=function(){if(!this.element.firstChild)return{left:0,right:0}
var e=s.computedStyle(this.element.firstChild)
return this.$padding={},this.$padding.left=(parseInt(e.borderLeftWidth)||0)+(parseInt(e.paddingLeft)||0)+1,this.$padding.right=(parseInt(e.borderRightWidth)||0)+(parseInt(e.paddingRight)||0),this.$padding},this.getRegion=function(e){var t=this.$padding||this.$computePadding(),i=this.element.getBoundingClientRect()
return e.x<t.left+i.left?"markers":this.$showFoldWidgets&&e.x>i.right-t.right?"foldWidgets":void 0}}).call(h.prototype),t.Gutter=h})),ace.define("ace/layer/marker",["require","exports","module","ace/range","ace/lib/dom"],(function(e,t,i){"use strict"
var n=e("../range").Range,s=e("../lib/dom"),o=function(e){this.element=s.createElement("div"),this.element.className="ace_layer ace_marker-layer",e.appendChild(this.element)};(function(){function e(e,t,i,n){return(e?1:0)|(t?2:0)|(i?4:0)|(n?8:0)}this.$padding=0,this.setPadding=function(e){this.$padding=e},this.setSession=function(e){this.session=e},this.setMarkers=function(e){this.markers=e},this.elt=function(e,t){var i=-1!=this.i&&this.element.childNodes[this.i]
i?this.i++:(i=document.createElement("div"),this.element.appendChild(i),this.i=-1),i.style.cssText=t,i.className=e},this.update=function(e){if(e){var t
for(var i in this.config=e,this.i=0,this.markers){var n=this.markers[i]
if(n.range){var s=n.range.clipRows(e.firstRow,e.lastRow)
if(!s.isEmpty())if(s=s.toScreenRange(this.session),n.renderer){var o=this.$getTop(s.start.row,e),r=this.$padding+s.start.column*e.characterWidth
n.renderer(t,s,r,o,e)}else"fullLine"==n.type?this.drawFullLineMarker(t,s,n.clazz,e):"screenLine"==n.type?this.drawScreenLineMarker(t,s,n.clazz,e):s.isMultiLine()?"text"==n.type?this.drawTextMarker(t,s,n.clazz,e):this.drawMultiLineMarker(t,s,n.clazz,e):this.drawSingleLineMarker(t,s,n.clazz+" ace_start ace_br15",e)}else n.update(t,this,this.session,e)}if(-1!=this.i)for(;this.i<this.element.childElementCount;)this.element.removeChild(this.element.lastChild)}},this.$getTop=function(e,t){return(e-t.firstRowScreen)*t.lineHeight},this.drawTextMarker=function(t,i,s,o,r){for(var a=this.session,l=i.start.row,h=i.end.row,c=l,u=0,d=0,g=a.getScreenLastRowColumn(c),f=new n(c,i.start.column,c,d);c<=h;c++)f.start.row=f.end.row=c,f.start.column=c==l?i.start.column:a.getRowWrapIndent(c),f.end.column=g,u=d,d=g,g=c+1<h?a.getScreenLastRowColumn(c+1):c==h?0:i.end.column,this.drawSingleLineMarker(t,f,s+(c==l?" ace_start":"")+" ace_br"+e(c==l||c==l+1&&i.start.column,u<d,d>g,c==h),o,c==h?0:1,r)},this.drawMultiLineMarker=function(e,t,i,n,s){var o=this.$padding,r=n.lineHeight,a=this.$getTop(t.start.row,n),l=o+t.start.column*n.characterWidth;(s=s||"",this.session.$bidiHandler.isBidiRow(t.start.row))?((h=t.clone()).end.row=h.start.row,h.end.column=this.session.getLine(h.start.row).length,this.drawBidiSingleLineMarker(e,h,i+" ace_br1 ace_start",n,null,s)):this.elt(i+" ace_br1 ace_start","height:"+r+"px;right:0;top:"+a+"px;left:"+l+"px;"+(s||""))
if(this.session.$bidiHandler.isBidiRow(t.end.row)){var h;(h=t.clone()).start.row=h.end.row,h.start.column=0,this.drawBidiSingleLineMarker(e,h,i+" ace_br12",n,null,s)}else{a=this.$getTop(t.end.row,n)
var c=t.end.column*n.characterWidth
this.elt(i+" ace_br12","height:"+r+"px;width:"+c+"px;top:"+a+"px;left:"+o+"px;"+(s||""))}if(!((r=(t.end.row-t.start.row-1)*n.lineHeight)<=0)){a=this.$getTop(t.start.row+1,n)
var u=(t.start.column?1:0)|(t.end.column?0:8)
this.elt(i+(u?" ace_br"+u:""),"height:"+r+"px;right:0;top:"+a+"px;left:"+o+"px;"+(s||""))}},this.drawSingleLineMarker=function(e,t,i,n,s,o){if(this.session.$bidiHandler.isBidiRow(t.start.row))return this.drawBidiSingleLineMarker(e,t,i,n,s,o)
var r=n.lineHeight,a=(t.end.column+(s||0)-t.start.column)*n.characterWidth,l=this.$getTop(t.start.row,n),h=this.$padding+t.start.column*n.characterWidth
this.elt(i,"height:"+r+"px;width:"+a+"px;top:"+l+"px;left:"+h+"px;"+(o||""))},this.drawBidiSingleLineMarker=function(e,t,i,n,s,o){var r=n.lineHeight,a=this.$getTop(t.start.row,n),l=this.$padding
this.session.$bidiHandler.getSelections(t.start.column,t.end.column).forEach((function(e){this.elt(i,"height:"+r+"px;width:"+(e.width+(s||0))+"px;top:"+a+"px;left:"+(l+e.left)+"px;"+(o||""))}),this)},this.drawFullLineMarker=function(e,t,i,n,s){var o=this.$getTop(t.start.row,n),r=n.lineHeight
t.start.row!=t.end.row&&(r+=this.$getTop(t.end.row,n)-o),this.elt(i,"height:"+r+"px;top:"+o+"px;left:0;right:0;"+(s||""))},this.drawScreenLineMarker=function(e,t,i,n,s){var o=this.$getTop(t.start.row,n),r=n.lineHeight
this.elt(i,"height:"+r+"px;top:"+o+"px;left:0;right:0;"+(s||""))}}).call(o.prototype),t.Marker=o})),ace.define("ace/layer/text",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/layer/lines","ace/lib/event_emitter"],(function(e,t,i){"use strict"
var n=e("../lib/oop"),s=e("../lib/dom"),o=e("../lib/lang"),r=e("./lines").Lines,a=e("../lib/event_emitter").EventEmitter,l=function(e){this.dom=s,this.element=this.dom.createElement("div"),this.element.className="ace_layer ace_text-layer",e.appendChild(this.element),this.$updateEolChar=this.$updateEolChar.bind(this),this.$lines=new r(this.element)};(function(){n.implement(this,a),this.EOF_CHAR="¶",this.EOL_CHAR_LF="¬",this.EOL_CHAR_CRLF="¤",this.EOL_CHAR=this.EOL_CHAR_LF,this.TAB_CHAR="—",this.SPACE_CHAR="·",this.$padding=0,this.MAX_LINE_LENGTH=1e4,this.MAX_CHUNK_LENGTH=250,this.$updateEolChar=function(){var e=this.session.doc,t="\n"==e.getNewLineCharacter()&&"windows"!=e.getNewLineMode()?this.EOL_CHAR_LF:this.EOL_CHAR_CRLF
if(this.EOL_CHAR!=t)return this.EOL_CHAR=t,!0},this.setPadding=function(e){this.$padding=e,this.element.style.margin="0 "+e+"px"},this.getLineHeight=function(){return this.$fontMetrics.$characterSize.height||0},this.getCharacterWidth=function(){return this.$fontMetrics.$characterSize.width||0},this.$setFontMetrics=function(e){this.$fontMetrics=e,this.$fontMetrics.on("changeCharacterSize",function(e){this._signal("changeCharacterSize",e)}.bind(this)),this.$pollSizeChanges()},this.checkForSizeChanges=function(){this.$fontMetrics.checkForSizeChanges()},this.$pollSizeChanges=function(){return this.$pollSizeChangesTimer=this.$fontMetrics.$pollSizeChanges()},this.setSession=function(e){this.session=e,e&&this.$computeTabString()},this.showInvisibles=!1,this.showSpaces=!1,this.showTabs=!1,this.showEOL=!1,this.setShowInvisibles=function(e){return this.showInvisibles!=e&&(this.showInvisibles=e,"string"==typeof e?(this.showSpaces=/tab/i.test(e),this.showTabs=/space/i.test(e),this.showEOL=/eol/i.test(e)):this.showSpaces=this.showTabs=this.showEOL=e,this.$computeTabString(),!0)},this.displayIndentGuides=!0,this.setDisplayIndentGuides=function(e){return this.displayIndentGuides!=e&&(this.displayIndentGuides=e,this.$computeTabString(),!0)},this.$highlightIndentGuides=!0,this.setHighlightIndentGuides=function(e){return this.$highlightIndentGuides!==e&&(this.$highlightIndentGuides=e,e)},this.$tabStrings=[],this.onChangeTabSize=this.$computeTabString=function(){var e=this.session.getTabSize()
this.tabSize=e
for(var t=this.$tabStrings=[0],i=1;i<e+1;i++)if(this.showTabs){(n=this.dom.createElement("span")).className="ace_invisible ace_invisible_tab",n.textContent=o.stringRepeat(this.TAB_CHAR,i),t.push(n)}else t.push(this.dom.createTextNode(o.stringRepeat(" ",i),this.element))
if(this.displayIndentGuides){this.$indentGuideRe=/\s\S| \t|\t |\s$/
var n,s="ace_indent-guide",r=this.showSpaces?" ace_invisible ace_invisible_space":"",a=this.showSpaces?o.stringRepeat(this.SPACE_CHAR,this.tabSize):o.stringRepeat(" ",this.tabSize),l=this.showTabs?" ace_invisible ace_invisible_tab":"",h=this.showTabs?o.stringRepeat(this.TAB_CHAR,this.tabSize):a;(n=this.dom.createElement("span")).className=s+r,n.textContent=a,this.$tabStrings[" "]=n,(n=this.dom.createElement("span")).className=s+l,n.textContent=h,this.$tabStrings["\t"]=n}},this.updateLines=function(e,t,i){if(this.config.lastRow!=e.lastRow||this.config.firstRow!=e.firstRow)return this.update(e)
this.config=e
for(var n=Math.max(t,e.firstRow),s=Math.min(i,e.lastRow),o=this.element.childNodes,r=0,a=e.firstRow;a<n;a++){if(l=this.session.getFoldLine(a)){if(l.containsRow(n)){n=l.start.row
break}a=l.end.row}r++}for(var l,h=!1,c=(a=n,(l=this.session.getNextFoldLine(a))?l.start.row:1/0);a>c&&(a=l.end.row+1,c=(l=this.session.getNextFoldLine(a,l))?l.start.row:1/0),!(a>s);){var u=o[r++]
if(u){this.dom.removeChildren(u),this.$renderLine(u,a,a==c&&l),h&&(u.style.top=this.$lines.computeLineTop(a,e,this.session)+"px")
var d=e.lineHeight*this.session.getRowLength(a)+"px"
u.style.height!=d&&(h=!0,u.style.height=d)}a++}if(h)for(;r<this.$lines.cells.length;){var g=this.$lines.cells[r++]
g.element.style.top=this.$lines.computeLineTop(g.row,e,this.session)+"px"}},this.scrollLines=function(e){var t=this.config
if(this.config=e,this.$lines.pageChanged(t,e))return this.update(e)
this.$lines.moveContainer(e)
var i=e.lastRow,n=t?t.lastRow:-1
if(!t||n<e.firstRow)return this.update(e)
if(i<t.firstRow)return this.update(e)
if(!t||t.lastRow<e.firstRow)return this.update(e)
if(e.lastRow<t.firstRow)return this.update(e)
if(t.firstRow<e.firstRow)for(var s=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);s>0;s--)this.$lines.shift()
if(t.lastRow>e.lastRow)for(s=this.session.getFoldedRowCount(e.lastRow+1,t.lastRow);s>0;s--)this.$lines.pop()
e.firstRow<t.firstRow&&this.$lines.unshift(this.$renderLinesFragment(e,e.firstRow,t.firstRow-1)),e.lastRow>t.lastRow&&this.$lines.push(this.$renderLinesFragment(e,t.lastRow+1,e.lastRow)),this.$highlightIndentGuide()},this.$renderLinesFragment=function(e,t,i){for(var n=[],o=t,r=this.session.getNextFoldLine(o),a=r?r.start.row:1/0;o>a&&(o=r.end.row+1,a=(r=this.session.getNextFoldLine(o,r))?r.start.row:1/0),!(o>i);){var l=this.$lines.createCell(o,e,this.session),h=l.element
this.dom.removeChildren(h),s.setStyle(h.style,"height",this.$lines.computeLineHeight(o,e,this.session)+"px"),s.setStyle(h.style,"top",this.$lines.computeLineTop(o,e,this.session)+"px"),this.$renderLine(h,o,o==a&&r),this.$useLineGroups()?h.className="ace_line_group":(h.className="ace_line",h.setAttribute("role","option")),n.push(l),o++}return n},this.update=function(e){this.$lines.moveContainer(e),this.config=e
for(var t=e.firstRow,i=e.lastRow,n=this.$lines;n.getLength();)n.pop()
n.push(this.$renderLinesFragment(e,t,i))},this.$textToken={text:!0,rparen:!0,lparen:!0},this.$renderTokenInChunks=function(e,t,i,n){for(var s,o=0;o<n.length;o+=this.MAX_CHUNK_LENGTH){var r=n.substring(o,o+this.MAX_CHUNK_LENGTH),a={type:i.type,value:r}
s=this.$renderToken(e,t+o,a,r)}return s},this.$renderToken=function(e,t,i,n){for(var s,r=this,a=/(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g,l=this.dom.createFragment(this.element),h=0;s=a.exec(n);){var c=s[1],u=s[2],d=s[3],g=s[4],f=s[5]
if(r.showSpaces||!u){var m=h!=s.index?n.slice(h,s.index):""
if(h=s.index+s[0].length,m&&l.appendChild(this.dom.createTextNode(m,this.element)),c){var p=r.session.getScreenTabSize(t+s.index)
l.appendChild(r.$tabStrings[p].cloneNode(!0)),t+=p-1}else if(u)if(r.showSpaces){(v=this.dom.createElement("span")).className="ace_invisible ace_invisible_space",v.textContent=o.stringRepeat(r.SPACE_CHAR,u.length),l.appendChild(v)}else l.appendChild(this.com.createTextNode(u,this.element))
else if(d){(v=this.dom.createElement("span")).className="ace_invisible ace_invisible_space ace_invalid",v.textContent=o.stringRepeat(r.SPACE_CHAR,d.length),l.appendChild(v)}else if(g){t+=1,(v=this.dom.createElement("span")).style.width=2*r.config.characterWidth+"px",v.className=r.showSpaces?"ace_cjk ace_invisible ace_invisible_space":"ace_cjk",v.textContent=r.showSpaces?r.SPACE_CHAR:g,l.appendChild(v)}else if(f){t+=1,(v=this.dom.createElement("span")).style.width=2*r.config.characterWidth+"px",v.className="ace_cjk",v.textContent=f,l.appendChild(v)}}}l.appendChild(this.dom.createTextNode(h?n.slice(h):n,this.element))
var v=this.dom.createElement("span")
if(!this.$textToken[i.type]){var w="ace_"+i.type.replace(/\./g," ace_")
"fold"==i.type&&(v.style.width=i.value.length*this.config.characterWidth+"px"),v.className=w}return v.appendChild(l),e.appendChild(v),t+n.length},this.renderIndentGuide=function(e,t,i){var n=t.search(this.$indentGuideRe)
if(n<=0||n>=i)return t
if(" "==t[0]){for(var s=(n-=n%this.tabSize)/this.tabSize,o=0;o<s;o++)e.appendChild(this.$tabStrings[" "].cloneNode(!0))
return this.$highlightIndentGuide(),t.substr(n)}if("\t"==t[0]){for(o=0;o<n;o++)e.appendChild(this.$tabStrings["\t"].cloneNode(!0))
return this.$highlightIndentGuide(),t.substr(n)}return this.$highlightIndentGuide(),t},this.$highlightIndentGuide=function(){if(this.$highlightIndentGuides&&this.displayIndentGuides){this.$highlightIndentGuideMarker={indentLevel:void 0,start:void 0,end:void 0,dir:void 0}
var e=this.session.doc.$lines
if(e){var t=this.session.selection.getCursor(),i=/^\s*/.exec(this.session.doc.getLine(t.row))[0].length,n=Math.floor(i/this.tabSize)
if(this.$highlightIndentGuideMarker={indentLevel:n,start:t.row},this.session.$bracketHighlight)for(var s=this.session.$bracketHighlight.ranges,o=0;o<s.length;o++)if(t.row!==s[o].start.row){this.$highlightIndentGuideMarker.end=s[o].start.row,t.row>s[o].start.row?this.$highlightIndentGuideMarker.dir=-1:this.$highlightIndentGuideMarker.dir=1
break}if(!this.$highlightIndentGuideMarker.end&&""!==e[t.row]&&t.column===e[t.row].length){this.$highlightIndentGuideMarker.dir=1
for(o=t.row+1;o<e.length;o++){var r=e[o],a=/^\s*/.exec(r)[0].length
if(""!==r&&(this.$highlightIndentGuideMarker.end=o,a<=i))break}}this.$renderHighlightIndentGuide()}}},this.$clearActiveIndentGuide=function(){for(var e=this.$lines.cells,t=0;t<e.length;t++){var i=e[t].element.childNodes
if(i.length>0)for(var n=0;n<i.length;n++)if(i[n].classList&&i[n].classList.contains("ace_indent-guide-active")){i[n].classList.remove("ace_indent-guide-active")
break}}},this.$setIndentGuideActive=function(e,t){if(""!==this.session.doc.getLine(e.row)){var i=e.element.childNodes
if(i){var n=i[t-1]
n&&n.classList&&n.classList.contains("ace_indent-guide")&&n.classList.add("ace_indent-guide-active")}}},this.$renderHighlightIndentGuide=function(){if(this.$lines){var e=this.$lines.cells
this.$clearActiveIndentGuide()
var t=this.$highlightIndentGuideMarker.indentLevel
if(0!==t)if(1===this.$highlightIndentGuideMarker.dir)for(var i=0;i<e.length;i++){var n=e[i]
if(this.$highlightIndentGuideMarker.end&&n.row>=this.$highlightIndentGuideMarker.start+1){if(n.row>=this.$highlightIndentGuideMarker.end)break
this.$setIndentGuideActive(n,t)}}else for(i=e.length-1;i>=0;i--){n=e[i]
if(this.$highlightIndentGuideMarker.end&&n.row<this.$highlightIndentGuideMarker.start){if(n.row<=this.$highlightIndentGuideMarker.end)break
this.$setIndentGuideActive(n,t)}}}},this.$createLineElement=function(e){var t=this.dom.createElement("div")
return t.className="ace_line",t.style.height=this.config.lineHeight+"px",t},this.$renderWrappedLine=function(e,t,i){var n=0,s=0,r=i[0],a=0,l=this.$createLineElement()
e.appendChild(l)
for(var h=0;h<t.length;h++){var c=t[h],u=c.value
if(0==h&&this.displayIndentGuides){if(n=u.length,!(u=this.renderIndentGuide(l,u,r)))continue
n-=u.length}if(n+u.length<r)a=this.$renderTokenInChunks(l,a,c,u),n+=u.length
else{for(;n+u.length>=r;)a=this.$renderTokenInChunks(l,a,c,u.substring(0,r-n)),u=u.substring(r-n),n=r,l=this.$createLineElement(),e.appendChild(l),l.appendChild(this.dom.createTextNode(o.stringRepeat(" ",i.indent),this.element)),a=0,r=i[++s]||Number.MAX_VALUE
0!=u.length&&(n+=u.length,a=this.$renderTokenInChunks(l,a,c,u))}}i[i.length-1]>this.MAX_LINE_LENGTH&&this.$renderOverflowMessage(l,a,null,"",!0)},this.$renderSimpleLine=function(e,t){for(var i=0,n=0;n<t.length;n++){var s=t[n],o=s.value
if(0!=n||!this.displayIndentGuides||(o=this.renderIndentGuide(e,o))){if(i+o.length>this.MAX_LINE_LENGTH)return void this.$renderOverflowMessage(e,i,s,o)
i=this.$renderTokenInChunks(e,i,s,o)}}},this.$renderOverflowMessage=function(e,t,i,n,s){i&&this.$renderTokenInChunks(e,t,i,n.slice(0,this.MAX_LINE_LENGTH-t))
var o=this.dom.createElement("span")
o.className="ace_inline_button ace_keyword ace_toggle_wrap",o.textContent=s?"<hide>":"<click to see more...>",e.appendChild(o)},this.$renderLine=function(e,t,i){if(!i&&0!=i&&(i=this.session.getFoldLine(t)),i)var n=this.$getFoldLineTokens(t,i)
else n=this.session.getTokens(t)
var s=e
if(n.length){var o=this.session.getRowSplitData(t)
if(o&&o.length){this.$renderWrappedLine(e,n,o)
s=e.lastChild}else{s=e
this.$useLineGroups()&&(s=this.$createLineElement(),e.appendChild(s)),this.$renderSimpleLine(s,n)}}else this.$useLineGroups()&&(s=this.$createLineElement(),e.appendChild(s))
if(this.showEOL&&s){i&&(t=i.end.row)
var r=this.dom.createElement("span")
r.className="ace_invisible ace_invisible_eol",r.textContent=t==this.session.getLength()-1?this.EOF_CHAR:this.EOL_CHAR,s.appendChild(r)}},this.$getFoldLineTokens=function(e,t){var i=this.session,n=[],s=i.getTokens(e)
return t.walk((function(e,t,o,r,a){null!=e?n.push({type:"fold",value:e}):(a&&(s=i.getTokens(t)),s.length&&function(e,t,i){for(var s=0,o=0;o+e[s].value.length<t;)if(o+=e[s].value.length,++s==e.length)return
for(o!=t&&((r=e[s].value.substring(t-o)).length>i-t&&(r=r.substring(0,i-t)),n.push({type:e[s].type,value:r}),o=t+r.length,s+=1);o<i&&s<e.length;){var r;(r=e[s].value).length+o>i?n.push({type:e[s].type,value:r.substring(0,i-o)}):n.push(e[s]),o+=r.length,s+=1}}(s,r,o))}),t.end.row,this.session.getLine(t.end.row).length),n},this.$useLineGroups=function(){return this.session.getUseWrapMode()},this.destroy=function(){}}).call(l.prototype),t.Text=l})),ace.define("ace/layer/cursor",["require","exports","module","ace/lib/dom"],(function(e,t,i){"use strict"
var n=e("../lib/dom"),s=function(e){this.element=n.createElement("div"),this.element.className="ace_layer ace_cursor-layer",e.appendChild(this.element),this.isVisible=!1,this.isBlinking=!0,this.blinkInterval=1e3,this.smoothBlinking=!1,this.cursors=[],this.cursor=this.addCursor(),n.addCssClass(this.element,"ace_hidden-cursors"),this.$updateCursors=this.$updateOpacity.bind(this)};(function(){this.$updateOpacity=function(e){for(var t=this.cursors,i=t.length;i--;)n.setStyle(t[i].style,"opacity",e?"":"0")},this.$startCssAnimation=function(){for(var e=this.cursors,t=e.length;t--;)e[t].style.animationDuration=this.blinkInterval+"ms"
this.$isAnimating=!0,setTimeout(function(){this.$isAnimating&&n.addCssClass(this.element,"ace_animate-blinking")}.bind(this))},this.$stopCssAnimation=function(){this.$isAnimating=!1,n.removeCssClass(this.element,"ace_animate-blinking")},this.$padding=0,this.setPadding=function(e){this.$padding=e},this.setSession=function(e){this.session=e},this.setBlinking=function(e){e!=this.isBlinking&&(this.isBlinking=e,this.restartTimer())},this.setBlinkInterval=function(e){e!=this.blinkInterval&&(this.blinkInterval=e,this.restartTimer())},this.setSmoothBlinking=function(e){e!=this.smoothBlinking&&(this.smoothBlinking=e,n.setCssClass(this.element,"ace_smooth-blinking",e),this.$updateCursors(!0),this.restartTimer())},this.addCursor=function(){var e=n.createElement("div")
return e.className="ace_cursor",this.element.appendChild(e),this.cursors.push(e),e},this.removeCursor=function(){if(this.cursors.length>1){var e=this.cursors.pop()
return e.parentNode.removeChild(e),e}},this.hideCursor=function(){this.isVisible=!1,n.addCssClass(this.element,"ace_hidden-cursors"),this.restartTimer()},this.showCursor=function(){this.isVisible=!0,n.removeCssClass(this.element,"ace_hidden-cursors"),this.restartTimer()},this.restartTimer=function(){var e=this.$updateCursors
if(clearInterval(this.intervalId),clearTimeout(this.timeoutId),this.$stopCssAnimation(),this.smoothBlinking&&(this.$isSmoothBlinking=!1,n.removeCssClass(this.element,"ace_smooth-blinking")),e(!0),this.isBlinking&&this.blinkInterval&&this.isVisible)if(this.smoothBlinking&&(this.$isSmoothBlinking=!0,setTimeout(function(){this.$isSmoothBlinking&&n.addCssClass(this.element,"ace_smooth-blinking")}.bind(this))),n.HAS_CSS_ANIMATION)this.$startCssAnimation()
else{var t=function(){this.timeoutId=setTimeout((function(){e(!1)}),.6*this.blinkInterval)}.bind(this)
this.intervalId=setInterval((function(){e(!0),t()}),this.blinkInterval),t()}else this.$stopCssAnimation()},this.getPixelPosition=function(e,t){if(!this.config||!this.session)return{left:0,top:0}
e||(e=this.session.selection.getCursor())
var i=this.session.documentToScreenPosition(e)
return{left:this.$padding+(this.session.$bidiHandler.isBidiRow(i.row,e.row)?this.session.$bidiHandler.getPosLeft(i.column):i.column*this.config.characterWidth),top:(i.row-(t?this.config.firstRowScreen:0))*this.config.lineHeight}},this.isCursorInView=function(e,t){return e.top>=0&&e.top<t.maxHeight},this.update=function(e){this.config=e
var t=this.session.$selectionMarkers,i=0,s=0
void 0!==t&&0!==t.length||(t=[{cursor:null}])
i=0
for(var o=t.length;i<o;i++){var r=this.getPixelPosition(t[i].cursor,!0)
if(!((r.top>e.height+e.offset||r.top<0)&&i>1)){var a=this.cursors[s++]||this.addCursor(),l=a.style
this.drawCursor?this.drawCursor(a,r,e,t[i],this.session):this.isCursorInView(r,e)?(n.setStyle(l,"display","block"),n.translate(a,r.left,r.top),n.setStyle(l,"width",Math.round(e.characterWidth)+"px"),n.setStyle(l,"height",e.lineHeight+"px")):n.setStyle(l,"display","none")}}for(;this.cursors.length>s;)this.removeCursor()
var h=this.session.getOverwrite()
this.$setOverwrite(h),this.$pixelPos=r,this.restartTimer()},this.drawCursor=null,this.$setOverwrite=function(e){e!=this.overwrite&&(this.overwrite=e,e?n.addCssClass(this.element,"ace_overwrite-cursors"):n.removeCssClass(this.element,"ace_overwrite-cursors"))},this.destroy=function(){clearInterval(this.intervalId),clearTimeout(this.timeoutId)}}).call(s.prototype),t.Cursor=s})),ace.define("ace/scrollbar",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],(function(e,t,i){"use strict"
var n=e("./lib/oop"),s=e("./lib/dom"),o=e("./lib/event"),r=e("./lib/event_emitter").EventEmitter,a=32768,l=function(e){this.element=s.createElement("div"),this.element.className="ace_scrollbar ace_scrollbar"+this.classSuffix,this.inner=s.createElement("div"),this.inner.className="ace_scrollbar-inner",this.inner.textContent=" ",this.element.appendChild(this.inner),e.appendChild(this.element),this.setVisible(!1),this.skipEvent=!1,o.addListener(this.element,"scroll",this.onScroll.bind(this)),o.addListener(this.element,"mousedown",o.preventDefault)};(function(){n.implement(this,r),this.setVisible=function(e){this.element.style.display=e?"":"none",this.isVisible=e,this.coeff=1}}).call(l.prototype)
var h=function(e,t){l.call(this,e),this.scrollTop=0,this.scrollHeight=0,t.$scrollbarWidth=this.width=s.scrollbarWidth(e.ownerDocument),this.inner.style.width=this.element.style.width=(this.width||15)+5+"px",this.$minWidth=0}
n.inherits(h,l),function(){this.classSuffix="-v",this.onScroll=function(){if(!this.skipEvent){if(this.scrollTop=this.element.scrollTop,1!=this.coeff){var e=this.element.clientHeight/this.scrollHeight
this.scrollTop=this.scrollTop*(1-e)/(this.coeff-e)}this._emit("scroll",{data:this.scrollTop})}this.skipEvent=!1},this.getWidth=function(){return Math.max(this.isVisible?this.width:0,this.$minWidth||0)},this.setHeight=function(e){this.element.style.height=e+"px"},this.setInnerHeight=this.setScrollHeight=function(e){this.scrollHeight=e,e>a?(this.coeff=a/e,e=a):1!=this.coeff&&(this.coeff=1),this.inner.style.height=e+"px"},this.setScrollTop=function(e){this.scrollTop!=e&&(this.skipEvent=!0,this.scrollTop=e,this.element.scrollTop=e*this.coeff)}}.call(h.prototype)
var c=function(e,t){l.call(this,e),this.scrollLeft=0,this.height=t.$scrollbarWidth,this.inner.style.height=this.element.style.height=(this.height||15)+5+"px"}
n.inherits(c,l),function(){this.classSuffix="-h",this.onScroll=function(){this.skipEvent||(this.scrollLeft=this.element.scrollLeft,this._emit("scroll",{data:this.scrollLeft})),this.skipEvent=!1},this.getHeight=function(){return this.isVisible?this.height:0},this.setWidth=function(e){this.element.style.width=e+"px"},this.setInnerWidth=function(e){this.inner.style.width=e+"px"},this.setScrollWidth=function(e){this.inner.style.width=e+"px"},this.setScrollLeft=function(e){this.scrollLeft!=e&&(this.skipEvent=!0,this.scrollLeft=this.element.scrollLeft=e)}}.call(c.prototype),t.ScrollBar=h,t.ScrollBarV=h,t.ScrollBarH=c,t.VScrollBar=h,t.HScrollBar=c})),ace.define("ace/scrollbar_custom",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],(function(e,t,i){"use strict"
var n=e("./lib/oop"),s=e("./lib/dom"),o=e("./lib/event"),r=e("./lib/event_emitter").EventEmitter
s.importCssString(".ace_editor>.ace_sb-v div, .ace_editor>.ace_sb-h div{\n  position: absolute;\n  background: rgba(128, 128, 128, 0.6);\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n  z-index: 8;\n}\n.ace_editor>.ace_sb-v, .ace_editor>.ace_sb-h {\n  position: absolute;\n  z-index: 6;\n  background: none;\n  overflow: hidden!important;\n}\n.ace_editor>.ace_sb-v {\n  z-index: 6;\n  right: 0;\n  top: 0;\n  width: 12px;\n}\n.ace_editor>.ace_sb-v div {\n  z-index: 8;\n  right: 0;\n  width: 100%;\n}\n.ace_editor>.ace_sb-h {\n  bottom: 0;\n  left: 0;\n  height: 12px;\n}\n.ace_editor>.ace_sb-h div {\n  bottom: 0;\n  height: 100%;\n}\n.ace_editor>.ace_sb_grabbed {\n  z-index: 8;\n  background: #000;\n}","ace_scrollbar.css",!1)
var a=function(e){this.element=s.createElement("div"),this.element.className="ace_sb"+this.classSuffix,this.inner=s.createElement("div"),this.inner.className="",this.element.appendChild(this.inner),this.VScrollWidth=12,this.HScrollHeight=12,e.appendChild(this.element),this.setVisible(!1),this.skipEvent=!1,o.addMultiMouseDownListener(this.element,[500,300,300],this,"onMouseDown")};(function(){n.implement(this,r),this.setVisible=function(e){this.element.style.display=e?"":"none",this.isVisible=e,this.coeff=1}}).call(a.prototype)
var l=function(e,t){a.call(this,e),this.scrollTop=0,this.scrollHeight=0,this.parent=e,this.width=this.VScrollWidth,this.renderer=t,this.inner.style.width=this.element.style.width=(this.width||15)+"px",this.$minWidth=0}
n.inherits(l,a),function(){this.classSuffix="-v",n.implement(this,r),this.onMouseDown=function(e,t){if("mousedown"===e&&0===o.getButton(t)&&2!==t.detail){if(t.target===this.inner){var i=this,n=t.clientY,s=t.clientY,r=this.thumbTop
o.capture(this.inner,(function(e){n=e.clientY}),(function(){clearInterval(a)}))
var a=setInterval((function(){if(void 0!==n){var e=i.scrollTopFromThumbTop(r+n-s)
e!==i.scrollTop&&i._emit("scroll",{data:e})}}),20)
return o.preventDefault(t)}var l=t.clientY-this.element.getBoundingClientRect().top-this.thumbHeight/2
return this._emit("scroll",{data:this.scrollTopFromThumbTop(l)}),o.preventDefault(t)}},this.getHeight=function(){return this.height},this.scrollTopFromThumbTop=function(e){var t=e*(this.pageHeight-this.viewHeight)/(this.slideHeight-this.thumbHeight)
return(t>>=0)<0?t=0:t>this.pageHeight-this.viewHeight&&(t=this.pageHeight-this.viewHeight),t},this.getWidth=function(){return Math.max(this.isVisible?this.width:0,this.$minWidth||0)},this.setHeight=function(e){this.height=Math.max(0,e),this.slideHeight=this.height,this.viewHeight=this.height,this.setScrollHeight(this.pageHeight,!0)},this.setInnerHeight=this.setScrollHeight=function(e,t){(this.pageHeight!==e||t)&&(this.pageHeight=e,this.thumbHeight=this.slideHeight*this.viewHeight/this.pageHeight,this.thumbHeight>this.slideHeight&&(this.thumbHeight=this.slideHeight),this.thumbHeight<15&&(this.thumbHeight=15),this.inner.style.height=this.thumbHeight+"px",this.scrollTop>this.pageHeight-this.viewHeight&&(this.scrollTop=this.pageHeight-this.viewHeight,this.scrollTop<0&&(this.scrollTop=0),this._emit("scroll",{data:this.scrollTop})))},this.setScrollTop=function(e){this.scrollTop=e,e<0&&(e=0),this.thumbTop=e*(this.slideHeight-this.thumbHeight)/(this.pageHeight-this.viewHeight),this.inner.style.top=this.thumbTop+"px"}}.call(l.prototype)
var h=function(e,t){a.call(this,e),this.scrollLeft=0,this.scrollWidth=0,this.height=this.HScrollHeight,this.inner.style.height=this.element.style.height=(this.height||12)+"px",this.renderer=t}
n.inherits(h,a),function(){this.classSuffix="-h",n.implement(this,r),this.onMouseDown=function(e,t){if("mousedown"===e&&0===o.getButton(t)&&2!==t.detail){if(t.target===this.inner){var i=this,n=t.clientX,s=t.clientX,r=this.thumbLeft
o.capture(this.inner,(function(e){n=e.clientX}),(function(){clearInterval(a)}))
var a=setInterval((function(){if(void 0!==n){var e=i.scrollLeftFromThumbLeft(r+n-s)
e!==i.scrollLeft&&i._emit("scroll",{data:e})}}),20)
return o.preventDefault(t)}var l=t.clientX-this.element.getBoundingClientRect().left-this.thumbWidth/2
return this._emit("scroll",{data:this.scrollLeftFromThumbLeft(l)}),o.preventDefault(t)}},this.getHeight=function(){return this.isVisible?this.height:0},this.scrollLeftFromThumbLeft=function(e){var t=e*(this.pageWidth-this.viewWidth)/(this.slideWidth-this.thumbWidth)
return(t>>=0)<0?t=0:t>this.pageWidth-this.viewWidth&&(t=this.pageWidth-this.viewWidth),t},this.setWidth=function(e){this.width=Math.max(0,e),this.element.style.width=this.width+"px",this.slideWidth=this.width,this.viewWidth=this.width,this.setScrollWidth(this.pageWidth,!0)},this.setInnerWidth=this.setScrollWidth=function(e,t){(this.pageWidth!==e||t)&&(this.pageWidth=e,this.thumbWidth=this.slideWidth*this.viewWidth/this.pageWidth,this.thumbWidth>this.slideWidth&&(this.thumbWidth=this.slideWidth),this.thumbWidth<15&&(this.thumbWidth=15),this.inner.style.width=this.thumbWidth+"px",this.scrollLeft>this.pageWidth-this.viewWidth&&(this.scrollLeft=this.pageWidth-this.viewWidth,this.scrollLeft<0&&(this.scrollLeft=0),this._emit("scroll",{data:this.scrollLeft})))},this.setScrollLeft=function(e){this.scrollLeft=e,e<0&&(e=0),this.thumbLeft=e*(this.slideWidth-this.thumbWidth)/(this.pageWidth-this.viewWidth),this.inner.style.left=this.thumbLeft+"px"}}.call(h.prototype),t.ScrollBar=l,t.ScrollBarV=l,t.ScrollBarH=h,t.VScrollBar=l,t.HScrollBar=h})),ace.define("ace/renderloop",["require","exports","module","ace/lib/event"],(function(e,t,i){"use strict"
var n=e("./lib/event"),s=function(e,t){this.onRender=e,this.pending=!1,this.changes=0,this.$recursionLimit=2,this.window=t||window
var i=this
this._flush=function(e){i.pending=!1
var t=i.changes
if(t&&(n.blockIdle(100),i.changes=0,i.onRender(t)),i.changes){if(i.$recursionLimit--<0)return
i.schedule()}else i.$recursionLimit=2}};(function(){this.schedule=function(e){this.changes=this.changes|e,this.changes&&!this.pending&&(n.nextFrame(this._flush),this.pending=!0)},this.clear=function(e){var t=this.changes
return this.changes=0,t}}).call(s.prototype),t.RenderLoop=s})),ace.define("ace/layer/font_metrics",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/lib/useragent","ace/lib/event_emitter"],(function(e,t,i){var n=e("../lib/oop"),s=e("../lib/dom"),o=e("../lib/lang"),r=e("../lib/event"),a=e("../lib/useragent"),l=e("../lib/event_emitter").EventEmitter,h="function"==typeof ResizeObserver,c=200,u=t.FontMetrics=function(e,t){this.charCount=t||250,this.el=s.createElement("div"),this.$setMeasureNodeStyles(this.el.style,!0),this.$main=s.createElement("div"),this.$setMeasureNodeStyles(this.$main.style),this.$measureNode=s.createElement("div"),this.$setMeasureNodeStyles(this.$measureNode.style),this.el.appendChild(this.$main),this.el.appendChild(this.$measureNode),e.appendChild(this.el),this.$measureNode.textContent=o.stringRepeat("X",this.charCount),this.$characterSize={width:0,height:0},h?this.$addObserver():this.checkForSizeChanges()};(function(){n.implement(this,l),this.$characterSize={width:0,height:0},this.$setMeasureNodeStyles=function(e,t){e.width=e.height="auto",e.left=e.top="0px",e.visibility="hidden",e.position="absolute",e.whiteSpace="pre",a.isIE<8?e["font-family"]="inherit":e.font="inherit",e.overflow=t?"hidden":"visible"},this.checkForSizeChanges=function(e){if(void 0===e&&(e=this.$measureSizes()),e&&(this.$characterSize.width!==e.width||this.$characterSize.height!==e.height)){this.$measureNode.style.fontWeight="bold"
var t=this.$measureSizes()
this.$measureNode.style.fontWeight="",this.$characterSize=e,this.charSizes=Object.create(null),this.allowBoldFonts=t&&t.width===e.width&&t.height===e.height,this._emit("changeCharacterSize",{data:e})}},this.$addObserver=function(){var e=this
this.$observer=new window.ResizeObserver((function(t){e.checkForSizeChanges()})),this.$observer.observe(this.$measureNode)},this.$pollSizeChanges=function(){if(this.$pollSizeChangesTimer||this.$observer)return this.$pollSizeChangesTimer
var e=this
return this.$pollSizeChangesTimer=r.onIdle((function t(){e.checkForSizeChanges(),r.onIdle(t,500)}),500)},this.setPolling=function(e){e?this.$pollSizeChanges():this.$pollSizeChangesTimer&&(clearInterval(this.$pollSizeChangesTimer),this.$pollSizeChangesTimer=0)},this.$measureSizes=function(e){var t=(e=e||this.$measureNode).getBoundingClientRect(),i={height:t.height,width:t.width/this.charCount}
return 0===i.width||0===i.height?null:i},this.$measureCharWidth=function(e){return this.$main.textContent=o.stringRepeat(e,this.charCount),this.$main.getBoundingClientRect().width/this.charCount},this.getCharacterWidth=function(e){var t=this.charSizes[e]
return void 0===t&&(t=this.charSizes[e]=this.$measureCharWidth(e)/this.$characterSize.width),t},this.destroy=function(){clearInterval(this.$pollSizeChangesTimer),this.$observer&&this.$observer.disconnect(),this.el&&this.el.parentNode&&this.el.parentNode.removeChild(this.el)},this.$getZoom=function e(t){return t&&t.parentElement?(window.getComputedStyle(t).zoom||1)*e(t.parentElement):1},this.$initTransformMeasureNodes=function(){var e=function(e,t){return["div",{style:"position: absolute;top:"+e+"px;left:"+t+"px;"}]}
this.els=s.buildDom([e(0,0),e(c,0),e(0,c),e(c,c)],this.el)},this.transformCoordinates=function(e,t){function i(e,t,i){var n=e[1]*t[0]-e[0]*t[1]
return[(-t[1]*i[0]+t[0]*i[1])/n,(+e[1]*i[0]-e[0]*i[1])/n]}function n(e,t){return[e[0]-t[0],e[1]-t[1]]}function s(e,t){return[e[0]+t[0],e[1]+t[1]]}function o(e,t){return[e*t[0],e*t[1]]}function r(e){var t=e.getBoundingClientRect()
return[t.left,t.top]}e&&(e=o(1/this.$getZoom(this.el),e))
this.els||this.$initTransformMeasureNodes()
var a=r(this.els[0]),l=r(this.els[1]),h=r(this.els[2]),u=r(this.els[3]),d=i(n(u,l),n(u,h),n(s(l,h),s(u,a))),g=o(1+d[0],n(l,a)),f=o(1+d[1],n(h,a))
if(t){var m=t,p=d[0]*m[0]/c+d[1]*m[1]/c+1,v=s(o(m[0],g),o(m[1],f))
return s(o(1/p/c,v),a)}var w=n(e,a),$=i(n(g,o(d[0],w)),n(f,o(d[1],w)),w)
return o(c,$)}}).call(u.prototype)})),ace.define("ace/css/editor.css",["require","exports","module"],(function(e,t,i){i.exports='/*\nstyles = []\nfor (var i = 1; i < 16; i++) {\n    styles.push(".ace_br" + i + "{" + (\n        ["top-left", "top-right", "bottom-right", "bottom-left"]\n    ).map(function(x, j) {\n        return i & (1<<j) ? "border-" + x + "-radius: 3px;" : "" \n    }).filter(Boolean).join(" ") + "}")\n}\nstyles.join("\\n")\n*/\n.ace_br1 {border-top-left-radius    : 3px;}\n.ace_br2 {border-top-right-radius   : 3px;}\n.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}\n.ace_br4 {border-bottom-right-radius: 3px;}\n.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}\n.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}\n.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}\n.ace_br8 {border-bottom-left-radius : 3px;}\n.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}\n.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}\n.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}\n.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}\n\n\n.ace_editor {\n    position: relative;\n    overflow: hidden;\n    padding: 0;\n    font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;\n    direction: ltr;\n    text-align: left;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.ace_scroller {\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    bottom: 0;\n    background-color: inherit;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    cursor: text;\n}\n\n.ace_content {\n    position: absolute;\n    box-sizing: border-box;\n    min-width: 100%;\n    contain: style size layout;\n    font-variant-ligatures: no-common-ligatures;\n}\n\n.ace_dragging .ace_scroller:before{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: \'\';\n    background: rgba(250, 250, 250, 0.01);\n    z-index: 1000;\n}\n.ace_dragging.ace_dark .ace_scroller:before{\n    background: rgba(0, 0, 0, 0.01);\n}\n\n.ace_gutter {\n    position: absolute;\n    overflow : hidden;\n    width: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    cursor: default;\n    z-index: 4;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    contain: style size layout;\n}\n\n.ace_gutter-active-line {\n    position: absolute;\n    left: 0;\n    right: 0;\n}\n\n.ace_scroller.ace_scroll-left {\n    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;\n}\n\n.ace_gutter-cell {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding-left: 19px;\n    padding-right: 6px;\n    background-repeat: no-repeat;\n}\n\n.ace_gutter-cell.ace_error {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_warning {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_info {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");\n    background-position: 2px center;\n}\n.ace_dark .ace_gutter-cell.ace_info {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");\n}\n\n.ace_scrollbar {\n    contain: strict;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    z-index: 6;\n}\n\n.ace_scrollbar-inner {\n    position: absolute;\n    cursor: text;\n    left: 0;\n    top: 0;\n}\n\n.ace_scrollbar-v{\n    overflow-x: hidden;\n    overflow-y: scroll;\n    top: 0;\n}\n\n.ace_scrollbar-h {\n    overflow-x: scroll;\n    overflow-y: hidden;\n    left: 0;\n}\n\n.ace_print-margin {\n    position: absolute;\n    height: 100%;\n}\n\n.ace_text-input {\n    position: absolute;\n    z-index: 0;\n    width: 0.5em;\n    height: 1em;\n    opacity: 0;\n    background: transparent;\n    -moz-appearance: none;\n    appearance: none;\n    border: none;\n    resize: none;\n    outline: none;\n    overflow: hidden;\n    font: inherit;\n    padding: 0 1px;\n    margin: 0 -1px;\n    contain: strict;\n    -ms-user-select: text;\n    -moz-user-select: text;\n    -webkit-user-select: text;\n    user-select: text;\n    /*with `pre-line` chrome inserts &nbsp; instead of space*/\n    white-space: pre!important;\n}\n.ace_text-input.ace_composition {\n    background: transparent;\n    color: inherit;\n    z-index: 1000;\n    opacity: 1;\n}\n.ace_composition_placeholder { color: transparent }\n.ace_composition_marker { \n    border-bottom: 1px solid;\n    position: absolute;\n    border-radius: 0;\n    margin-top: 1px;\n}\n\n[ace_nocontext=true] {\n    transform: none!important;\n    filter: none!important;\n    clip-path: none!important;\n    mask : none!important;\n    contain: none!important;\n    perspective: none!important;\n    mix-blend-mode: initial!important;\n    z-index: auto;\n}\n\n.ace_layer {\n    z-index: 1;\n    position: absolute;\n    overflow: hidden;\n    /* workaround for chrome bug https://github.com/ajaxorg/ace/issues/2312*/\n    word-wrap: normal;\n    white-space: pre;\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    /* setting pointer-events: auto; on node under the mouse, which changes\n        during scroll, will break mouse wheel scrolling in Safari */\n    pointer-events: none;\n}\n\n.ace_gutter-layer {\n    position: relative;\n    width: auto;\n    text-align: right;\n    pointer-events: auto;\n    height: 1000000px;\n    contain: style size layout;\n}\n\n.ace_text-layer {\n    font: inherit !important;\n    position: absolute;\n    height: 1000000px;\n    width: 1000000px;\n    contain: style size layout;\n}\n\n.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {\n    contain: style size layout;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.ace_hidpi .ace_text-layer,\n.ace_hidpi .ace_gutter-layer,\n.ace_hidpi .ace_content,\n.ace_hidpi .ace_gutter {\n    contain: strict;\n    will-change: transform;\n}\n.ace_hidpi .ace_text-layer > .ace_line, \n.ace_hidpi .ace_text-layer > .ace_line_group {\n    contain: strict;\n}\n\n.ace_cjk {\n    display: inline-block;\n    text-align: center;\n}\n\n.ace_cursor-layer {\n    z-index: 4;\n}\n\n.ace_cursor {\n    z-index: 4;\n    position: absolute;\n    box-sizing: border-box;\n    border-left: 2px solid;\n    /* workaround for smooth cursor repaintng whole screen in chrome */\n    transform: translatez(0);\n}\n\n.ace_multiselect .ace_cursor {\n    border-left-width: 1px;\n}\n\n.ace_slim-cursors .ace_cursor {\n    border-left-width: 1px;\n}\n\n.ace_overwrite-cursors .ace_cursor {\n    border-left-width: 0;\n    border-bottom: 1px solid;\n}\n\n.ace_hidden-cursors .ace_cursor {\n    opacity: 0.2;\n}\n\n.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {\n    opacity: 0;\n}\n\n.ace_smooth-blinking .ace_cursor {\n    transition: opacity 0.18s;\n}\n\n.ace_animate-blinking .ace_cursor {\n    animation-duration: 1000ms;\n    animation-timing-function: step-end;\n    animation-name: blink-ace-animate;\n    animation-iteration-count: infinite;\n}\n\n.ace_animate-blinking.ace_smooth-blinking .ace_cursor {\n    animation-duration: 1000ms;\n    animation-timing-function: ease-in-out;\n    animation-name: blink-ace-animate-smooth;\n}\n    \n@keyframes blink-ace-animate {\n    from, to { opacity: 1; }\n    60% { opacity: 0; }\n}\n\n@keyframes blink-ace-animate-smooth {\n    from, to { opacity: 1; }\n    45% { opacity: 1; }\n    60% { opacity: 0; }\n    85% { opacity: 0; }\n}\n\n.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {\n    position: absolute;\n    z-index: 3;\n}\n\n.ace_marker-layer .ace_selection {\n    position: absolute;\n    z-index: 5;\n}\n\n.ace_marker-layer .ace_bracket {\n    position: absolute;\n    z-index: 6;\n}\n\n.ace_marker-layer .ace_error_bracket {\n    position: absolute;\n    border-bottom: 1px solid #DE5555;\n    border-radius: 0;\n}\n\n.ace_marker-layer .ace_active-line {\n    position: absolute;\n    z-index: 2;\n}\n\n.ace_marker-layer .ace_selected-word {\n    position: absolute;\n    z-index: 4;\n    box-sizing: border-box;\n}\n\n.ace_line .ace_fold {\n    box-sizing: border-box;\n\n    display: inline-block;\n    height: 11px;\n    margin-top: -2px;\n    vertical-align: middle;\n\n    background-image:\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");\n    background-repeat: no-repeat, repeat-x;\n    background-position: center center, top left;\n    color: transparent;\n\n    border: 1px solid black;\n    border-radius: 2px;\n\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.ace_dark .ace_fold {\n}\n\n.ace_fold:hover{\n    background-image:\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");\n}\n\n.ace_tooltip {\n    background-color: #FFF;\n    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));\n    border: 1px solid gray;\n    border-radius: 1px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n    color: black;\n    max-width: 100%;\n    padding: 3px 4px;\n    position: fixed;\n    z-index: 999999;\n    box-sizing: border-box;\n    cursor: default;\n    white-space: pre;\n    word-wrap: break-word;\n    line-height: normal;\n    font-style: normal;\n    font-weight: normal;\n    letter-spacing: normal;\n    pointer-events: none;\n}\n\n.ace_folding-enabled > .ace_gutter-cell {\n    padding-right: 13px;\n}\n\n.ace_fold-widget {\n    box-sizing: border-box;\n\n    margin: 0 -12px 0 1px;\n    display: none;\n    width: 11px;\n    vertical-align: top;\n\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: center;\n\n    border-radius: 3px;\n    \n    border: 1px solid transparent;\n    cursor: pointer;\n}\n\n.ace_folding-enabled .ace_fold-widget {\n    display: inline-block;   \n}\n\n.ace_fold-widget.ace_end {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");\n}\n\n.ace_fold-widget.ace_closed {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");\n}\n\n.ace_fold-widget:hover {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    background-color: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\n}\n\n.ace_fold-widget:active {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    background-color: rgba(0, 0, 0, 0.05);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);\n}\n/**\n * Dark version for fold widgets\n */\n.ace_dark .ace_fold-widget {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");\n}\n.ace_dark .ace_fold-widget.ace_end {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");\n}\n.ace_dark .ace_fold-widget.ace_closed {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");\n}\n.ace_dark .ace_fold-widget:hover {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n    background-color: rgba(255, 255, 255, 0.1);\n}\n.ace_dark .ace_fold-widget:active {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n}\n\n.ace_inline_button {\n    border: 1px solid lightgray;\n    display: inline-block;\n    margin: -1px 8px;\n    padding: 0 5px;\n    pointer-events: auto;\n    cursor: pointer;\n}\n.ace_inline_button:hover {\n    border-color: gray;\n    background: rgba(200,200,200,0.2);\n    display: inline-block;\n    pointer-events: auto;\n}\n\n.ace_fold-widget.ace_invalid {\n    background-color: #FFB4B4;\n    border-color: #DE5555;\n}\n\n.ace_fade-fold-widgets .ace_fold-widget {\n    transition: opacity 0.4s ease 0.05s;\n    opacity: 0;\n}\n\n.ace_fade-fold-widgets:hover .ace_fold-widget {\n    transition: opacity 0.05s ease 0.05s;\n    opacity:1;\n}\n\n.ace_underline {\n    text-decoration: underline;\n}\n\n.ace_bold {\n    font-weight: bold;\n}\n\n.ace_nobold .ace_bold {\n    font-weight: normal;\n}\n\n.ace_italic {\n    font-style: italic;\n}\n\n\n.ace_error-marker {\n    background-color: rgba(255, 0, 0,0.2);\n    position: absolute;\n    z-index: 9;\n}\n\n.ace_highlight-marker {\n    background-color: rgba(255, 255, 0,0.2);\n    position: absolute;\n    z-index: 8;\n}\n\n.ace_mobile-menu {\n    position: absolute;\n    line-height: 1.5;\n    border-radius: 4px;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    background: white;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #dcdcdc;\n    color: black;\n}\n.ace_dark > .ace_mobile-menu {\n    background: #333;\n    color: #ccc;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #444;\n\n}\n.ace_mobile-button {\n    padding: 2px;\n    cursor: pointer;\n    overflow: hidden;\n}\n.ace_mobile-button:hover {\n    background-color: #eee;\n    opacity:1;\n}\n.ace_mobile-button:active {\n    background-color: #ddd;\n}\n\n.ace_placeholder {\n    font-family: arial;\n    transform: scale(0.9);\n    transform-origin: left;\n    white-space: pre;\n    opacity: 0.7;\n    margin: 0 10px;\n}'})),ace.define("ace/layer/decorators",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter"],(function(e,t,i){"use strict"
var n=e("../lib/dom"),s=e("../lib/oop"),o=e("../lib/event_emitter").EventEmitter,r=function(e,t){this.canvas=n.createElement("canvas"),this.renderer=t,this.pixelRatio=1,this.maxHeight=t.layerConfig.maxHeight,this.lineHeight=t.layerConfig.lineHeight,this.canvasHeight=e.parent.scrollHeight,this.heightRatio=this.canvasHeight/this.maxHeight,this.canvasWidth=e.width,this.minDecorationHeight=2*this.pixelRatio|0,this.halfMinDecorationHeight=this.minDecorationHeight/2|0,this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.canvas.style.top="0px",this.canvas.style.right="0px",this.canvas.style.zIndex="7px",this.canvas.style.position="absolute",this.colors={},this.colors.dark={error:"rgba(255, 18, 18, 1)",warning:"rgba(18, 136, 18, 1)",info:"rgba(18, 18, 136, 1)"},this.colors.light={error:"rgb(255,51,51)",warning:"rgb(32,133,72)",info:"rgb(35,68,138)"},e.element.appendChild(this.canvas)};(function(){s.implement(this,o),this.$updateDecorators=function(e){var t=!0===this.renderer.theme.isDark?this.colors.dark:this.colors.light
e&&(this.maxHeight=e.maxHeight,this.lineHeight=e.lineHeight,this.canvasHeight=e.height,(e.lastRow+1)*this.lineHeight<this.canvasHeight?this.heightRatio=1:this.heightRatio=this.canvasHeight/this.maxHeight)
var i=this.canvas.getContext("2d"),n=this.renderer.session.$annotations
if(i.clearRect(0,0,this.canvas.width,this.canvas.height),n){var s={info:1,warning:2,error:3}
n.forEach((function(e){e.priority=s[e.type]||null})),n=n.sort((function(e,t){return e.priority<t.priority?-1:e.priority>t.priority?1:0}))
for(var o=this.renderer.session.$foldData,r=0;r<n.length;r++){var a=n[r].row,l=this.compensateFoldRows(a,o),h=Math.round((a-l)*this.lineHeight*this.heightRatio),c=Math.round((a-l)*this.lineHeight*this.heightRatio),u=Math.round(((a-l)*this.lineHeight+this.lineHeight)*this.heightRatio)
if(u-c<this.minDecorationHeight){var d=(c+u)/2|0
d<this.halfMinDecorationHeight?d=this.halfMinDecorationHeight:d+this.halfMinDecorationHeight>this.canvasHeight&&(d=this.canvasHeight-this.halfMinDecorationHeight),c=Math.round(d-this.halfMinDecorationHeight),u=Math.round(d+this.halfMinDecorationHeight)}i.fillStyle=t[n[r].type]||null,i.fillRect(0,h,this.canvasWidth,u-c)}}var g=this.renderer.session.selection.getCursor()
if(g){l=this.compensateFoldRows(g.row,o),h=Math.round((g.row-l)*this.lineHeight*this.heightRatio)
i.fillStyle="rgba(0, 0, 0, 0.5)",i.fillRect(0,h,this.canvasWidth,2)}},this.compensateFoldRows=function(e,t){var i=0
if(t&&t.length>0)for(var n=0;n<t.length;n++)e>t[n].start.row&&e<t[n].end.row?i+=e-t[n].start.row:e>=t[n].end.row&&(i+=t[n].end.row-t[n].start.row)
return i}}).call(r.prototype),t.Decorator=r})),ace.define("ace/virtual_renderer",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/config","ace/layer/gutter","ace/layer/marker","ace/layer/text","ace/layer/cursor","ace/scrollbar","ace/scrollbar","ace/scrollbar_custom","ace/scrollbar_custom","ace/renderloop","ace/layer/font_metrics","ace/lib/event_emitter","ace/css/editor.css","ace/layer/decorators","ace/lib/useragent"],(function(e,t,i){"use strict"
var n=e("./lib/oop"),s=e("./lib/dom"),o=e("./config"),r=e("./layer/gutter").Gutter,a=e("./layer/marker").Marker,l=e("./layer/text").Text,h=e("./layer/cursor").Cursor,c=e("./scrollbar").HScrollBar,u=e("./scrollbar").VScrollBar,d=e("./scrollbar_custom").HScrollBar,g=e("./scrollbar_custom").VScrollBar,f=e("./renderloop").RenderLoop,m=e("./layer/font_metrics").FontMetrics,p=e("./lib/event_emitter").EventEmitter,v=e("./css/editor.css"),w=e("./layer/decorators").Decorator,$=e("./lib/useragent"),b=$.isIE
s.importCssString(v,"ace_editor.css",!1)
var y=function(e,t){var i=this
this.container=e||s.createElement("div"),s.addCssClass(this.container,"ace_editor"),s.HI_DPI&&s.addCssClass(this.container,"ace_hidpi"),this.setTheme(t),null==o.get("useStrictCSP")&&o.set("useStrictCSP",!1),this.$gutter=s.createElement("div"),this.$gutter.className="ace_gutter",this.container.appendChild(this.$gutter),this.$gutter.setAttribute("aria-hidden",!0),this.scroller=s.createElement("div"),this.scroller.className="ace_scroller",this.container.appendChild(this.scroller),this.content=s.createElement("div"),this.content.className="ace_content",this.scroller.appendChild(this.content),this.$gutterLayer=new r(this.$gutter),this.$gutterLayer.on("changeGutterWidth",this.onGutterResize.bind(this)),this.$markerBack=new a(this.content)
var n=this.$textLayer=new l(this.content)
this.canvas=n.element,this.$markerFront=new a(this.content),this.$cursorLayer=new h(this.content),this.$horizScroll=!1,this.$vScroll=!1,this.scrollBar=this.scrollBarV=new u(this.container,this),this.scrollBarH=new c(this.container,this),this.scrollBarV.on("scroll",(function(e){i.$scrollAnimation||i.session.setScrollTop(e.data-i.scrollMargin.top)})),this.scrollBarH.on("scroll",(function(e){i.$scrollAnimation||i.session.setScrollLeft(e.data-i.scrollMargin.left)})),this.scrollTop=0,this.scrollLeft=0,this.cursorPos={row:0,column:0},this.$fontMetrics=new m(this.container,this.$textLayer.MAX_CHUNK_LENGTH),this.$textLayer.$setFontMetrics(this.$fontMetrics),this.$textLayer.on("changeCharacterSize",(function(e){i.updateCharacterSize(),i.onResize(!0,i.gutterWidth,i.$size.width,i.$size.height),i._signal("changeCharacterSize",e)})),this.$size={width:0,height:0,scrollerHeight:0,scrollerWidth:0,$dirty:!0},this.layerConfig={width:1,padding:0,firstRow:0,firstRowScreen:0,lastRow:0,lineHeight:0,characterWidth:0,minHeight:1,maxHeight:1,offset:0,height:1,gutterOffset:1},this.scrollMargin={left:0,right:0,top:0,bottom:0,v:0,h:0},this.margin={left:0,right:0,top:0,bottom:0,v:0,h:0},this.$keepTextAreaAtCursor=!$.isIOS,this.$loop=new f(this.$renderChanges.bind(this),this.container.ownerDocument.defaultView),this.$loop.schedule(this.CHANGE_FULL),this.updateCharacterSize(),this.setPadding(4),o.resetOptions(this),o._signal("renderer",this)};(function(){this.CHANGE_CURSOR=1,this.CHANGE_MARKER=2,this.CHANGE_GUTTER=4,this.CHANGE_SCROLL=8,this.CHANGE_LINES=16,this.CHANGE_TEXT=32,this.CHANGE_SIZE=64,this.CHANGE_MARKER_BACK=128,this.CHANGE_MARKER_FRONT=256,this.CHANGE_FULL=512,this.CHANGE_H_SCROLL=1024,n.implement(this,p),this.updateCharacterSize=function(){this.$textLayer.allowBoldFonts!=this.$allowBoldFonts&&(this.$allowBoldFonts=this.$textLayer.allowBoldFonts,this.setStyle("ace_nobold",!this.$allowBoldFonts)),this.layerConfig.characterWidth=this.characterWidth=this.$textLayer.getCharacterWidth(),this.layerConfig.lineHeight=this.lineHeight=this.$textLayer.getLineHeight(),this.$updatePrintMargin(),s.setStyle(this.scroller.style,"line-height",this.lineHeight+"px")},this.setSession=function(e){this.session&&this.session.doc.off("changeNewLineMode",this.onChangeNewLineMode),this.session=e,e&&this.scrollMargin.top&&e.getScrollTop()<=0&&e.setScrollTop(-this.scrollMargin.top),this.$cursorLayer.setSession(e),this.$markerBack.setSession(e),this.$markerFront.setSession(e),this.$gutterLayer.setSession(e),this.$textLayer.setSession(e),e&&(this.$loop.schedule(this.CHANGE_FULL),this.session.$setFontMetrics(this.$fontMetrics),this.scrollBarH.scrollLeft=this.scrollBarV.scrollTop=null,this.onChangeNewLineMode=this.onChangeNewLineMode.bind(this),this.onChangeNewLineMode(),this.session.doc.on("changeNewLineMode",this.onChangeNewLineMode))},this.updateLines=function(e,t,i){if(void 0===t&&(t=1/0),this.$changedLines?(this.$changedLines.firstRow>e&&(this.$changedLines.firstRow=e),this.$changedLines.lastRow<t&&(this.$changedLines.lastRow=t)):this.$changedLines={firstRow:e,lastRow:t},this.$changedLines.lastRow<this.layerConfig.firstRow){if(!i)return
this.$changedLines.lastRow=this.layerConfig.lastRow}this.$changedLines.firstRow>this.layerConfig.lastRow||this.$loop.schedule(this.CHANGE_LINES)},this.onChangeNewLineMode=function(){this.$loop.schedule(this.CHANGE_TEXT),this.$textLayer.$updateEolChar(),this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR)},this.onChangeTabSize=function(){this.$loop.schedule(this.CHANGE_TEXT|this.CHANGE_MARKER),this.$textLayer.onChangeTabSize()},this.updateText=function(){this.$loop.schedule(this.CHANGE_TEXT)},this.updateFull=function(e){e?this.$renderChanges(this.CHANGE_FULL,!0):this.$loop.schedule(this.CHANGE_FULL)},this.updateFontSize=function(){this.$textLayer.checkForSizeChanges()},this.$changes=0,this.$updateSizeAsync=function(){this.$loop.pending?this.$size.$dirty=!0:this.onResize()},this.onResize=function(e,t,i,n){if(!(this.resizing>2)){this.resizing>0?this.resizing++:this.resizing=e?1:0
var s=this.container
n||(n=s.clientHeight||s.scrollHeight),i||(i=s.clientWidth||s.scrollWidth)
var o=this.$updateCachedSize(e,t,i,n)
if(!this.$size.scrollerHeight||!i&&!n)return this.resizing=0
e&&(this.$gutterLayer.$padding=null),e?this.$renderChanges(o|this.$changes,!0):this.$loop.schedule(o|this.$changes),this.resizing&&(this.resizing=0),this.scrollBarH.scrollLeft=this.scrollBarV.scrollTop=null,this.$customScrollbar&&this.$updateCustomScrollbar(!0)}},this.$updateCachedSize=function(e,t,i,n){n-=this.$extraHeight||0
var o=0,r=this.$size,a={width:r.width,height:r.height,scrollerHeight:r.scrollerHeight,scrollerWidth:r.scrollerWidth}
if(n&&(e||r.height!=n)&&(r.height=n,o|=this.CHANGE_SIZE,r.scrollerHeight=r.height,this.$horizScroll&&(r.scrollerHeight-=this.scrollBarH.getHeight()),this.scrollBarV.setHeight(r.scrollerHeight),this.scrollBarV.element.style.bottom=this.scrollBarH.getHeight()+"px",o|=this.CHANGE_SCROLL),i&&(e||r.width!=i)){o|=this.CHANGE_SIZE,r.width=i,null==t&&(t=this.$showGutter?this.$gutter.offsetWidth:0),this.gutterWidth=t,s.setStyle(this.scrollBarH.element.style,"left",t+"px"),s.setStyle(this.scroller.style,"left",t+this.margin.left+"px"),r.scrollerWidth=Math.max(0,i-t-this.scrollBarV.getWidth()-this.margin.h),s.setStyle(this.$gutter.style,"left",this.margin.left+"px")
var l=this.scrollBarV.getWidth()+"px"
s.setStyle(this.scrollBarH.element.style,"right",l),s.setStyle(this.scroller.style,"right",l),s.setStyle(this.scroller.style,"bottom",this.scrollBarH.getHeight()),this.scrollBarH.setWidth(r.scrollerWidth),(this.session&&this.session.getUseWrapMode()&&this.adjustWrapLimit()||e)&&(o|=this.CHANGE_FULL)}return r.$dirty=!i||!n,o&&this._signal("resize",a),o},this.onGutterResize=function(e){var t=this.$showGutter?e:0
t!=this.gutterWidth&&(this.$changes|=this.$updateCachedSize(!0,t,this.$size.width,this.$size.height)),this.session.getUseWrapMode()&&this.adjustWrapLimit()||this.$size.$dirty?this.$loop.schedule(this.CHANGE_FULL):this.$computeLayerConfig()},this.adjustWrapLimit=function(){var e=this.$size.scrollerWidth-2*this.$padding,t=Math.floor(e/this.characterWidth)
return this.session.adjustWrapLimit(t,this.$showPrintMargin&&this.$printMarginColumn)},this.setAnimatedScroll=function(e){this.setOption("animatedScroll",e)},this.getAnimatedScroll=function(){return this.$animatedScroll},this.setShowInvisibles=function(e){this.setOption("showInvisibles",e),this.session.$bidiHandler.setShowInvisibles(e)},this.getShowInvisibles=function(){return this.getOption("showInvisibles")},this.getDisplayIndentGuides=function(){return this.getOption("displayIndentGuides")},this.setDisplayIndentGuides=function(e){this.setOption("displayIndentGuides",e)},this.getHighlightIndentGuides=function(){return this.getOption("highlightIndentGuides")},this.setHighlightIndentGuides=function(e){this.setOption("highlightIndentGuides",e)},this.setShowPrintMargin=function(e){this.setOption("showPrintMargin",e)},this.getShowPrintMargin=function(){return this.getOption("showPrintMargin")},this.setPrintMarginColumn=function(e){this.setOption("printMarginColumn",e)},this.getPrintMarginColumn=function(){return this.getOption("printMarginColumn")},this.getShowGutter=function(){return this.getOption("showGutter")},this.setShowGutter=function(e){return this.setOption("showGutter",e)},this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)},this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)},this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},this.$updatePrintMargin=function(){if(this.$showPrintMargin||this.$printMarginEl){if(!this.$printMarginEl){var e=s.createElement("div")
e.className="ace_layer ace_print-margin-layer",this.$printMarginEl=s.createElement("div"),this.$printMarginEl.className="ace_print-margin",e.appendChild(this.$printMarginEl),this.content.insertBefore(e,this.content.firstChild)}var t=this.$printMarginEl.style
t.left=Math.round(this.characterWidth*this.$printMarginColumn+this.$padding)+"px",t.visibility=this.$showPrintMargin?"visible":"hidden",this.session&&-1==this.session.$wrap&&this.adjustWrapLimit()}},this.getContainerElement=function(){return this.container},this.getMouseEventTarget=function(){return this.scroller},this.getTextAreaContainer=function(){return this.container},this.$moveTextAreaToCursor=function(){if(!this.$isMousePressed){var e=this.textarea.style,t=this.$composition
if(this.$keepTextAreaAtCursor||t){var i=this.$cursorLayer.$pixelPos
if(i){t&&t.markerRange&&(i=this.$cursorLayer.getPixelPosition(t.markerRange.start,!0))
var n=this.layerConfig,o=i.top,r=i.left
o-=n.offset
var a=t&&t.useTextareaForIME?this.lineHeight:b?0:1
if(o<0||o>n.height-a)s.translate(this.textarea,0,0)
else{var l=1,h=this.$size.height-a
if(t)if(t.useTextareaForIME){var c=this.textarea.value
l=this.characterWidth*this.session.$getStringScreenWidth(c)[0]}else o+=this.lineHeight+2
else o+=this.lineHeight;(r-=this.scrollLeft)>this.$size.scrollerWidth-l&&(r=this.$size.scrollerWidth-l),r+=this.gutterWidth+this.margin.left,s.setStyle(e,"height",a+"px"),s.setStyle(e,"width",l+"px"),s.translate(this.textarea,Math.min(r,this.$size.scrollerWidth-l),Math.min(o,h))}}}else s.translate(this.textarea,-100,0)}},this.getFirstVisibleRow=function(){return this.layerConfig.firstRow},this.getFirstFullyVisibleRow=function(){return this.layerConfig.firstRow+(0===this.layerConfig.offset?0:1)},this.getLastFullyVisibleRow=function(){var e=this.layerConfig,t=e.lastRow
return this.session.documentToScreenRow(t,0)*e.lineHeight-this.session.getScrollTop()>e.height-e.lineHeight?t-1:t},this.getLastVisibleRow=function(){return this.layerConfig.lastRow},this.$padding=null,this.setPadding=function(e){this.$padding=e,this.$textLayer.setPadding(e),this.$cursorLayer.setPadding(e),this.$markerFront.setPadding(e),this.$markerBack.setPadding(e),this.$loop.schedule(this.CHANGE_FULL),this.$updatePrintMargin()},this.setScrollMargin=function(e,t,i,n){var s=this.scrollMargin
s.top=0|e,s.bottom=0|t,s.right=0|n,s.left=0|i,s.v=s.top+s.bottom,s.h=s.left+s.right,s.top&&this.scrollTop<=0&&this.session&&this.session.setScrollTop(-s.top),this.updateFull()},this.setMargin=function(e,t,i,n){var s=this.margin
s.top=0|e,s.bottom=0|t,s.right=0|n,s.left=0|i,s.v=s.top+s.bottom,s.h=s.left+s.right,this.$updateCachedSize(!0,this.gutterWidth,this.$size.width,this.$size.height),this.updateFull()},this.getHScrollBarAlwaysVisible=function(){return this.$hScrollBarAlwaysVisible},this.setHScrollBarAlwaysVisible=function(e){this.setOption("hScrollBarAlwaysVisible",e)},this.getVScrollBarAlwaysVisible=function(){return this.$vScrollBarAlwaysVisible},this.setVScrollBarAlwaysVisible=function(e){this.setOption("vScrollBarAlwaysVisible",e)},this.$updateScrollBarV=function(){var e=this.layerConfig.maxHeight,t=this.$size.scrollerHeight
!this.$maxLines&&this.$scrollPastEnd&&(e-=(t-this.lineHeight)*this.$scrollPastEnd,this.scrollTop>e-t&&(e=this.scrollTop+t,this.scrollBarV.scrollTop=null)),this.scrollBarV.setScrollHeight(e+this.scrollMargin.v),this.scrollBarV.setScrollTop(this.scrollTop+this.scrollMargin.top)},this.$updateScrollBarH=function(){this.scrollBarH.setScrollWidth(this.layerConfig.width+2*this.$padding+this.scrollMargin.h),this.scrollBarH.setScrollLeft(this.scrollLeft+this.scrollMargin.left)},this.$frozen=!1,this.freeze=function(){this.$frozen=!0},this.unfreeze=function(){this.$frozen=!1},this.$renderChanges=function(e,t){if(this.$changes&&(e|=this.$changes,this.$changes=0),this.session&&this.container.offsetWidth&&!this.$frozen&&(e||t)){if(this.$size.$dirty)return this.$changes|=e,this.onResize(!0)
this.lineHeight||this.$textLayer.checkForSizeChanges(),this._signal("beforeRender",e),this.session&&this.session.$bidiHandler&&this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics)
var i=this.layerConfig
if(e&this.CHANGE_FULL||e&this.CHANGE_SIZE||e&this.CHANGE_TEXT||e&this.CHANGE_LINES||e&this.CHANGE_SCROLL||e&this.CHANGE_H_SCROLL){if(e|=this.$computeLayerConfig()|this.$loop.clear(),i.firstRow!=this.layerConfig.firstRow&&i.firstRowScreen==this.layerConfig.firstRowScreen){var n=this.scrollTop+(i.firstRow-this.layerConfig.firstRow)*this.lineHeight
n>0&&(this.scrollTop=n,e|=this.CHANGE_SCROLL,e|=this.$computeLayerConfig()|this.$loop.clear())}i=this.layerConfig,this.$updateScrollBarV(),e&this.CHANGE_H_SCROLL&&this.$updateScrollBarH(),s.translate(this.content,-this.scrollLeft,-i.offset)
var o=i.width+2*this.$padding+"px",r=i.minHeight+"px"
s.setStyle(this.content.style,"width",o),s.setStyle(this.content.style,"height",r)}return e&this.CHANGE_H_SCROLL&&(s.translate(this.content,-this.scrollLeft,-i.offset),this.scroller.className=this.scrollLeft<=0?"ace_scroller":"ace_scroller ace_scroll-left"),e&this.CHANGE_FULL?(this.$changedLines=null,this.$textLayer.update(i),this.$showGutter&&this.$gutterLayer.update(i),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(i),this.$markerBack.update(i),this.$markerFront.update(i),this.$cursorLayer.update(i),this.$moveTextAreaToCursor(),void this._signal("afterRender",e)):e&this.CHANGE_SCROLL?(this.$changedLines=null,e&this.CHANGE_TEXT||e&this.CHANGE_LINES?this.$textLayer.update(i):this.$textLayer.scrollLines(i),this.$showGutter&&(e&this.CHANGE_GUTTER||e&this.CHANGE_LINES?this.$gutterLayer.update(i):this.$gutterLayer.scrollLines(i)),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(i),this.$markerBack.update(i),this.$markerFront.update(i),this.$cursorLayer.update(i),this.$moveTextAreaToCursor(),void this._signal("afterRender",e)):(e&this.CHANGE_TEXT?(this.$changedLines=null,this.$textLayer.update(i),this.$showGutter&&this.$gutterLayer.update(i),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(i)):e&this.CHANGE_LINES?((this.$updateLines()||e&this.CHANGE_GUTTER&&this.$showGutter)&&this.$gutterLayer.update(i),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(i)):e&this.CHANGE_TEXT||e&this.CHANGE_GUTTER?(this.$showGutter&&this.$gutterLayer.update(i),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(i)):e&this.CHANGE_CURSOR&&(this.$highlightGutterLine&&this.$gutterLayer.updateLineHighlight(i),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(i)),e&this.CHANGE_CURSOR&&(this.$cursorLayer.update(i),this.$moveTextAreaToCursor()),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_FRONT)&&this.$markerFront.update(i),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_BACK)&&this.$markerBack.update(i),void this._signal("afterRender",e))}this.$changes|=e},this.$autosize=function(){var e=this.session.getScreenLength()*this.lineHeight,t=this.$maxLines*this.lineHeight,i=Math.min(t,Math.max((this.$minLines||1)*this.lineHeight,e))+this.scrollMargin.v+(this.$extraHeight||0)
this.$horizScroll&&(i+=this.scrollBarH.getHeight()),this.$maxPixelHeight&&i>this.$maxPixelHeight&&(i=this.$maxPixelHeight)
var n=!(i<=2*this.lineHeight)&&e>t
if(i!=this.desiredHeight||this.$size.height!=this.desiredHeight||n!=this.$vScroll){n!=this.$vScroll&&(this.$vScroll=n,this.scrollBarV.setVisible(n))
var s=this.container.clientWidth
this.container.style.height=i+"px",this.$updateCachedSize(!0,this.$gutterWidth,s,i),this.desiredHeight=i,this._signal("autosize")}},this.$computeLayerConfig=function(){var e=this.session,t=this.$size,i=t.height<=2*this.lineHeight,n=this.session.getScreenLength()*this.lineHeight,s=this.$getLongestLine(),o=!i&&(this.$hScrollBarAlwaysVisible||t.scrollerWidth-s-2*this.$padding<0),r=this.$horizScroll!==o
r&&(this.$horizScroll=o,this.scrollBarH.setVisible(o))
var a=this.$vScroll
this.$maxLines&&this.lineHeight>1&&this.$autosize()
var l=t.scrollerHeight+this.lineHeight,h=!this.$maxLines&&this.$scrollPastEnd?(t.scrollerHeight-this.lineHeight)*this.$scrollPastEnd:0
n+=h
var c=this.scrollMargin
this.session.setScrollTop(Math.max(-c.top,Math.min(this.scrollTop,n-t.scrollerHeight+c.bottom))),this.session.setScrollLeft(Math.max(-c.left,Math.min(this.scrollLeft,s+2*this.$padding-t.scrollerWidth+c.right)))
var u=!i&&(this.$vScrollBarAlwaysVisible||t.scrollerHeight-n+h<0||this.scrollTop>c.top),d=a!==u
d&&(this.$vScroll=u,this.scrollBarV.setVisible(u))
var g,f,m=this.scrollTop%this.lineHeight,p=Math.ceil(l/this.lineHeight)-1,v=Math.max(0,Math.round((this.scrollTop-m)/this.lineHeight)),w=v+p,$=this.lineHeight
v=e.screenToDocumentRow(v,0)
var b=e.getFoldLine(v)
b&&(v=b.start.row),g=e.documentToScreenRow(v,0),f=e.getRowLength(v)*$,w=Math.min(e.screenToDocumentRow(w,0),e.getLength()-1),l=t.scrollerHeight+e.getRowLength(w)*$+f,m=this.scrollTop-g*$
var y=0
return(this.layerConfig.width!=s||r)&&(y=this.CHANGE_H_SCROLL),(r||d)&&(y|=this.$updateCachedSize(!0,this.gutterWidth,t.width,t.height),this._signal("scrollbarVisibilityChanged"),d&&(s=this.$getLongestLine())),this.layerConfig={width:s,padding:this.$padding,firstRow:v,firstRowScreen:g,lastRow:w,lineHeight:$,characterWidth:this.characterWidth,minHeight:l,maxHeight:n,offset:m,gutterOffset:$?Math.max(0,Math.ceil((m+t.height-t.scrollerHeight)/$)):0,height:this.$size.scrollerHeight},this.session.$bidiHandler&&this.session.$bidiHandler.setContentWidth(s-this.$padding),y},this.$updateLines=function(){if(this.$changedLines){var e=this.$changedLines.firstRow,t=this.$changedLines.lastRow
this.$changedLines=null
var i=this.layerConfig
if(!(e>i.lastRow+1||t<i.firstRow))return t===1/0?(this.$showGutter&&this.$gutterLayer.update(i),void this.$textLayer.update(i)):(this.$textLayer.updateLines(i,e,t),!0)}},this.$getLongestLine=function(){var e=this.session.getScreenWidth()
return this.showInvisibles&&!this.session.$useWrapMode&&(e+=1),this.$textLayer&&e>this.$textLayer.MAX_LINE_LENGTH&&(e=this.$textLayer.MAX_LINE_LENGTH+30),Math.max(this.$size.scrollerWidth-2*this.$padding,Math.round(e*this.characterWidth))},this.updateFrontMarkers=function(){this.$markerFront.setMarkers(this.session.getMarkers(!0)),this.$loop.schedule(this.CHANGE_MARKER_FRONT)},this.updateBackMarkers=function(){this.$markerBack.setMarkers(this.session.getMarkers()),this.$loop.schedule(this.CHANGE_MARKER_BACK)},this.addGutterDecoration=function(e,t){this.$gutterLayer.addGutterDecoration(e,t)},this.removeGutterDecoration=function(e,t){this.$gutterLayer.removeGutterDecoration(e,t)},this.updateBreakpoints=function(e){this.$loop.schedule(this.CHANGE_GUTTER)},this.setAnnotations=function(e){this.$gutterLayer.setAnnotations(e),this.$loop.schedule(this.CHANGE_GUTTER)},this.updateCursor=function(){this.$loop.schedule(this.CHANGE_CURSOR)},this.hideCursor=function(){this.$cursorLayer.hideCursor()},this.showCursor=function(){this.$cursorLayer.showCursor()},this.scrollSelectionIntoView=function(e,t,i){this.scrollCursorIntoView(e,i),this.scrollCursorIntoView(t,i)},this.scrollCursorIntoView=function(e,t,i){if(0!==this.$size.scrollerHeight){var n=this.$cursorLayer.getPixelPosition(e),s=n.left,o=n.top,r=i&&i.top||0,a=i&&i.bottom||0
this.$scrollAnimation&&(this.$stopAnimation=!0)
var l=this.$scrollAnimation?this.session.getScrollTop():this.scrollTop
l+r>o?(t&&l+r>o+this.lineHeight&&(o-=t*this.$size.scrollerHeight),0===o&&(o=-this.scrollMargin.top),this.session.setScrollTop(o)):l+this.$size.scrollerHeight-a<o+this.lineHeight&&(t&&l+this.$size.scrollerHeight-a<o-this.lineHeight&&(o+=t*this.$size.scrollerHeight),this.session.setScrollTop(o+this.lineHeight+a-this.$size.scrollerHeight))
var h=this.scrollLeft,c=2*this.layerConfig.characterWidth
s-c<h?((s-=c)<this.$padding+c&&(s=-this.scrollMargin.left),this.session.setScrollLeft(s)):(s+=c,h+this.$size.scrollerWidth<s+this.characterWidth?this.session.setScrollLeft(Math.round(s+this.characterWidth-this.$size.scrollerWidth)):h<=this.$padding&&s-h<this.characterWidth&&this.session.setScrollLeft(0))}},this.getScrollTop=function(){return this.session.getScrollTop()},this.getScrollLeft=function(){return this.session.getScrollLeft()},this.getScrollTopRow=function(){return this.scrollTop/this.lineHeight},this.getScrollBottomRow=function(){return Math.max(0,Math.floor((this.scrollTop+this.$size.scrollerHeight)/this.lineHeight)-1)},this.scrollToRow=function(e){this.session.setScrollTop(e*this.lineHeight)},this.alignCursor=function(e,t){"number"==typeof e&&(e={row:e,column:0})
var i=this.$cursorLayer.getPixelPosition(e),n=this.$size.scrollerHeight-this.lineHeight,s=i.top-n*(t||0)
return this.session.setScrollTop(s),s},this.STEPS=8,this.$calcSteps=function(e,t){var i=0,n=this.STEPS,s=[],o=function(e,t,i){return i*(Math.pow(e-1,3)+1)+t}
for(i=0;i<n;++i)s.push(o(i/this.STEPS,e,t-e))
return s},this.scrollToLine=function(e,t,i,n){var s=this.$cursorLayer.getPixelPosition({row:e,column:0}).top
t&&(s-=this.$size.scrollerHeight/2)
var o=this.scrollTop
this.session.setScrollTop(s),!1!==i&&this.animateScrolling(o,n)},this.animateScrolling=function(e,t){function i(){s.$timer=clearInterval(s.$timer),s.$scrollAnimation=null,s.$stopAnimation=!1,t&&t()}var n=this.scrollTop
if(this.$animatedScroll){var s=this
if(e!=n){if(this.$scrollAnimation){var o=this.$scrollAnimation.steps
if(o.length&&(e=o[0])==n)return}var r=s.$calcSteps(e,n)
this.$scrollAnimation={from:e,to:n,steps:r},clearInterval(this.$timer),s.session.setScrollTop(r.shift()),s.session.$scrollTop=n,this.$timer=setInterval((function(){if(!s.$stopAnimation)return s.session?void(r.length?(s.session.setScrollTop(r.shift()),s.session.$scrollTop=n):null!=n?(s.session.$scrollTop=-1,s.session.setScrollTop(n),n=null):i()):clearInterval(s.$timer)
i()}),10)}}},this.scrollToY=function(e){this.scrollTop!==e&&(this.$loop.schedule(this.CHANGE_SCROLL),this.scrollTop=e)},this.scrollToX=function(e){this.scrollLeft!==e&&(this.scrollLeft=e),this.$loop.schedule(this.CHANGE_H_SCROLL)},this.scrollTo=function(e,t){this.session.setScrollTop(t),this.session.setScrollLeft(e)},this.scrollBy=function(e,t){t&&this.session.setScrollTop(this.session.getScrollTop()+t),e&&this.session.setScrollLeft(this.session.getScrollLeft()+e)},this.isScrollableBy=function(e,t){return t<0&&this.session.getScrollTop()>=1-this.scrollMargin.top||(t>0&&this.session.getScrollTop()+this.$size.scrollerHeight-this.layerConfig.maxHeight<-1+this.scrollMargin.bottom||(e<0&&this.session.getScrollLeft()>=1-this.scrollMargin.left||(e>0&&this.session.getScrollLeft()+this.$size.scrollerWidth-this.layerConfig.width<-1+this.scrollMargin.right||void 0)))},this.pixelToScreenCoordinates=function(e,t){var i
if(this.$hasCssTransforms){i={top:0,left:0}
var n=this.$fontMetrics.transformCoordinates([e,t])
e=n[1]-this.gutterWidth-this.margin.left,t=n[0]}else i=this.scroller.getBoundingClientRect()
var s=e+this.scrollLeft-i.left-this.$padding,o=s/this.characterWidth,r=Math.floor((t+this.scrollTop-i.top)/this.lineHeight),a=this.$blockCursor?Math.floor(o):Math.round(o)
return{row:r,column:a,side:o-a>0?1:-1,offsetX:s}},this.screenToTextCoordinates=function(e,t){var i
if(this.$hasCssTransforms){i={top:0,left:0}
var n=this.$fontMetrics.transformCoordinates([e,t])
e=n[1]-this.gutterWidth-this.margin.left,t=n[0]}else i=this.scroller.getBoundingClientRect()
var s=e+this.scrollLeft-i.left-this.$padding,o=s/this.characterWidth,r=this.$blockCursor?Math.floor(o):Math.round(o),a=Math.floor((t+this.scrollTop-i.top)/this.lineHeight)
return this.session.screenToDocumentPosition(a,Math.max(r,0),s)},this.textToScreenCoordinates=function(e,t){var i=this.scroller.getBoundingClientRect(),n=this.session.documentToScreenPosition(e,t),s=this.$padding+(this.session.$bidiHandler.isBidiRow(n.row,e)?this.session.$bidiHandler.getPosLeft(n.column):Math.round(n.column*this.characterWidth)),o=n.row*this.lineHeight
return{pageX:i.left+s-this.scrollLeft,pageY:i.top+o-this.scrollTop}},this.visualizeFocus=function(){s.addCssClass(this.container,"ace_focus")},this.visualizeBlur=function(){s.removeCssClass(this.container,"ace_focus")},this.showComposition=function(e){this.$composition=e,e.cssText||(e.cssText=this.textarea.style.cssText),null==e.useTextareaForIME&&(e.useTextareaForIME=this.$useTextareaForIME),this.$useTextareaForIME?(s.addCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText="",this.$moveTextAreaToCursor(),this.$cursorLayer.element.style.display="none"):e.markerId=this.session.addMarker(e.markerRange,"ace_composition_marker","text")},this.setCompositionText=function(e){var t=this.session.selection.cursor
this.addToken(e,"composition_placeholder",t.row,t.column),this.$moveTextAreaToCursor()},this.hideComposition=function(){if(this.$composition){this.$composition.markerId&&this.session.removeMarker(this.$composition.markerId),s.removeCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText=this.$composition.cssText
var e=this.session.selection.cursor
this.removeExtraToken(e.row,e.column),this.$composition=null,this.$cursorLayer.element.style.display=""}},this.addToken=function(e,t,i,n){var s=this.session
s.bgTokenizer.lines[i]=null
var o={type:t,value:e},r=s.getTokens(i)
if(null==n)r.push(o)
else for(var a=0,l=0;l<r.length;l++){var h=r[l]
if(n<=(a+=h.value.length)){var c=h.value.length-(a-n),u=h.value.slice(0,c),d=h.value.slice(c)
r.splice(l,1,{type:h.type,value:u},o,{type:h.type,value:d})
break}}this.updateLines(i,i)},this.removeExtraToken=function(e,t){this.updateLines(e,e)},this.setTheme=function(e,t){function i(i){if(n.$themeId!=e)return t&&t()
if(!i||!i.cssClass)throw new Error("couldn't load module "+e+" or it didn't call define")
i.$id&&(n.$themeId=i.$id),s.importCssString(i.cssText,i.cssClass,n.container),n.theme&&s.removeCssClass(n.container,n.theme.cssClass)
var o="padding"in i?i.padding:"padding"in(n.theme||{})?4:n.$padding
n.$padding&&o!=n.$padding&&n.setPadding(o),n.$theme=i.cssClass,n.theme=i,s.addCssClass(n.container,i.cssClass),s.setCssClass(n.container,"ace_dark",i.isDark),n.$size&&(n.$size.width=0,n.$updateSizeAsync()),n._dispatchEvent("themeLoaded",{theme:i}),t&&t()}var n=this
if(this.$themeId=e,n._dispatchEvent("themeChange",{theme:e}),e&&"string"!=typeof e)i(e)
else{var r=e||this.$options.theme.initialValue
o.loadModule(["theme",r],i)}},this.getTheme=function(){return this.$themeId},this.setStyle=function(e,t){s.setCssClass(this.container,e,!1!==t)},this.unsetStyle=function(e){s.removeCssClass(this.container,e)},this.setCursorStyle=function(e){s.setStyle(this.scroller.style,"cursor",e)},this.setMouseCursor=function(e){s.setStyle(this.scroller.style,"cursor",e)},this.attachToShadowRoot=function(){s.importCssString(v,"ace_editor.css",this.container)},this.destroy=function(){this.freeze(),this.$fontMetrics.destroy(),this.$cursorLayer.destroy(),this.removeAllListeners(),this.container.textContent=""},this.$updateCustomScrollbar=function(e){var t=this
this.$horizScroll=this.$vScroll=null,this.scrollBarV.element.remove(),this.scrollBarH.element.remove(),this.$scrollDecorator&&delete this.$scrollDecorator,!0===e?(this.scrollBarV=new g(this.container,this),this.scrollBarH=new d(this.container,this),this.scrollBarV.setHeight(this.$size.scrollerHeight),this.scrollBarH.setWidth(this.$size.scrollerWidth),this.scrollBarV.addEventListener("scroll",(function(e){t.$scrollAnimation||t.session.setScrollTop(e.data-t.scrollMargin.top)})),this.scrollBarH.addEventListener("scroll",(function(e){t.$scrollAnimation||t.session.setScrollLeft(e.data-t.scrollMargin.left)})),this.$scrollDecorator=new w(this.scrollBarV,this),this.$scrollDecorator.$updateDecorators()):(this.scrollBarV=new u(this.container,this),this.scrollBarH=new c(this.container,this),this.scrollBarV.addEventListener("scroll",(function(e){t.$scrollAnimation||t.session.setScrollTop(e.data-t.scrollMargin.top)})),this.scrollBarH.addEventListener("scroll",(function(e){t.$scrollAnimation||t.session.setScrollLeft(e.data-t.scrollMargin.left)})))}}).call(y.prototype),o.defineOptions(y.prototype,"renderer",{animatedScroll:{initialValue:!1},showInvisibles:{set:function(e){this.$textLayer.setShowInvisibles(e)&&this.$loop.schedule(this.CHANGE_TEXT)},initialValue:!1},showPrintMargin:{set:function(){this.$updatePrintMargin()},initialValue:!0},printMarginColumn:{set:function(){this.$updatePrintMargin()},initialValue:80},printMargin:{set:function(e){"number"==typeof e&&(this.$printMarginColumn=e),this.$showPrintMargin=!!e,this.$updatePrintMargin()},get:function(){return this.$showPrintMargin&&this.$printMarginColumn}},showGutter:{set:function(e){this.$gutter.style.display=e?"block":"none",this.$loop.schedule(this.CHANGE_FULL),this.onGutterResize()},initialValue:!0},fadeFoldWidgets:{set:function(e){s.setCssClass(this.$gutter,"ace_fade-fold-widgets",e)},initialValue:!1},showFoldWidgets:{set:function(e){this.$gutterLayer.setShowFoldWidgets(e),this.$loop.schedule(this.CHANGE_GUTTER)},initialValue:!0},displayIndentGuides:{set:function(e){this.$textLayer.setDisplayIndentGuides(e)&&this.$loop.schedule(this.CHANGE_TEXT)},initialValue:!0},highlightIndentGuides:{set:function(e){1==this.$textLayer.setHighlightIndentGuides(e)?this.$textLayer.$highlightIndentGuide():this.$textLayer.$clearActiveIndentGuide(this.$textLayer.$lines.cells)},initialValue:!0},highlightGutterLine:{set:function(e){this.$gutterLayer.setHighlightGutterLine(e),this.$loop.schedule(this.CHANGE_GUTTER)},initialValue:!0},hScrollBarAlwaysVisible:{set:function(e){(!this.$hScrollBarAlwaysVisible||!this.$horizScroll)&&this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:!1},vScrollBarAlwaysVisible:{set:function(e){(!this.$vScrollBarAlwaysVisible||!this.$vScroll)&&this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:!1},fontSize:{set:function(e){"number"==typeof e&&(e+="px"),this.container.style.fontSize=e,this.updateFontSize()},initialValue:12},fontFamily:{set:function(e){this.container.style.fontFamily=e,this.updateFontSize()}},maxLines:{set:function(e){this.updateFull()}},minLines:{set:function(e){this.$minLines<562949953421311||(this.$minLines=0),this.updateFull()}},maxPixelHeight:{set:function(e){this.updateFull()},initialValue:0},scrollPastEnd:{set:function(e){e=+e||0,this.$scrollPastEnd!=e&&(this.$scrollPastEnd=e,this.$loop.schedule(this.CHANGE_SCROLL))},initialValue:0,handlesSet:!0},fixedWidthGutter:{set:function(e){this.$gutterLayer.$fixedWidth=!!e,this.$loop.schedule(this.CHANGE_GUTTER)}},customScrollbar:{set:function(e){this.$updateCustomScrollbar(e)},initialValue:!1},theme:{set:function(e){this.setTheme(e)},get:function(){return this.$themeId||this.theme},initialValue:"./theme/textmate",handlesSet:!0},hasCssTransforms:{},useTextareaForIME:{initialValue:!$.isMobile&&!$.isIE}}),t.VirtualRenderer=y})),ace.define("ace/worker/worker_client",["require","exports","module","ace/lib/oop","ace/lib/net","ace/lib/event_emitter","ace/config"],(function(e,t,i){"use strict"
function n(e){if("undefined"==typeof Worker)return{postMessage:function(){},terminate:function(){}}
if(a.get("loadWorkerFromBlob")){var t=function(e){var t="importScripts('"+o.qualifyURL(e)+"');"
try{return new Blob([t],{type:"application/javascript"})}catch(i){var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder)
return n.append(t),n.getBlob("application/javascript")}}(e),n=(window.URL||window.webkitURL).createObjectURL(t)
return new Worker(n)}return new Worker(e)}var s=e("../lib/oop"),o=e("../lib/net"),r=e("../lib/event_emitter").EventEmitter,a=e("../config"),l=function(e){e.postMessage||(e=this.$createWorkerFromOldConfig.apply(this,arguments)),this.$worker=e,this.$sendDeltaQueue=this.$sendDeltaQueue.bind(this),this.changeListener=this.changeListener.bind(this),this.onMessage=this.onMessage.bind(this),this.callbackId=1,this.callbacks={},this.$worker.onmessage=this.onMessage};(function(){s.implement(this,r),this.$createWorkerFromOldConfig=function(t,i,s,o,r){if(e.nameToUrl&&!e.toUrl&&(e.toUrl=e.nameToUrl),a.get("packaged")||!e.toUrl)o=o||a.moduleUrl(i,"worker")
else{var l=this.$normalizePath
o=o||l(e.toUrl("ace/worker/worker.js",null,"_"))
var h={}
t.forEach((function(t){h[t]=l(e.toUrl(t,null,"_").replace(/(\.js)?(\?.*)?$/,""))}))}return this.$worker=n(o),r&&this.send("importScripts",r),this.$worker.postMessage({init:!0,tlns:h,module:i,classname:s}),this.$worker},this.onMessage=function(e){var t=e.data
switch(t.type){case"event":this._signal(t.name,{data:t.data})
break
case"call":var i=this.callbacks[t.id]
i&&(i(t.data),delete this.callbacks[t.id])
break
case"error":this.reportError(t.data)
break
case"log":window.console&&console.log&&console.log.apply(console,t.data)}},this.reportError=function(e){window.console&&console.error&&console.error(e)},this.$normalizePath=function(e){return o.qualifyURL(e)},this.terminate=function(){this._signal("terminate",{}),this.deltaQueue=null,this.$worker.terminate(),this.$worker=null,this.$doc&&this.$doc.off("change",this.changeListener),this.$doc=null},this.send=function(e,t){this.$worker.postMessage({command:e,args:t})},this.call=function(e,t,i){if(i){var n=this.callbackId++
this.callbacks[n]=i,t.push(n)}this.send(e,t)},this.emit=function(e,t){try{t.data&&t.data.err&&(t.data.err={message:t.data.err.message,stack:t.data.err.stack,code:t.data.err.code}),this.$worker&&this.$worker.postMessage({event:e,data:{data:t.data}})}catch(i){console.error(i.stack)}},this.attachToDocument=function(e){this.$doc&&this.terminate(),this.$doc=e,this.call("setValue",[e.getValue()]),e.on("change",this.changeListener,!0)},this.changeListener=function(e){this.deltaQueue||(this.deltaQueue=[],setTimeout(this.$sendDeltaQueue,0)),"insert"==e.action?this.deltaQueue.push(e.start,e.lines):this.deltaQueue.push(e.start,e.end)},this.$sendDeltaQueue=function(){var e=this.deltaQueue
e&&(this.deltaQueue=null,e.length>50&&e.length>this.$doc.getLength()>>1?this.call("setValue",[this.$doc.getValue()]):this.emit("change",{data:e}))}}).call(l.prototype)
t.UIWorkerClient=function(e,t,i){var n=null,s=!1,o=Object.create(r),h=[],c=new l({messageBuffer:h,terminate:function(){},postMessage:function(e){h.push(e),n&&(s?setTimeout(u):u())}})
c.setEmitSync=function(e){s=e}
var u=function(){var e=h.shift()
e.command?n[e.command].apply(n,e.args):e.event&&o._signal(e.event,e.data)}
return o.postMessage=function(e){c.onMessage({data:e})},o.callback=function(e,t){this.postMessage({type:"call",id:t,data:e})},o.emit=function(e,t){this.postMessage({type:"event",name:e,data:t})},a.loadModule(["worker",t],(function(e){for(n=new e[i](o);h.length;)u()})),c},t.WorkerClient=l,t.createWorker=n})),ace.define("ace/placeholder",["require","exports","module","ace/range","ace/lib/event_emitter","ace/lib/oop"],(function(e,t,i){"use strict"
var n=e("./range").Range,s=e("./lib/event_emitter").EventEmitter,o=e("./lib/oop"),r=function(e,t,i,n,s,o){var r=this
this.length=t,this.session=e,this.doc=e.getDocument(),this.mainClass=s,this.othersClass=o,this.$onUpdate=this.onUpdate.bind(this),this.doc.on("change",this.$onUpdate,!0),this.$others=n,this.$onCursorChange=function(){setTimeout((function(){r.onCursorChange()}))},this.$pos=i
var a=e.getUndoManager().$undoStack||e.getUndoManager().$undostack||{length:-1}
this.$undoStackDepth=a.length,this.setup(),e.selection.on("changeCursor",this.$onCursorChange)};(function(){o.implement(this,s),this.setup=function(){var e=this,t=this.doc,i=this.session
this.selectionBefore=i.selection.toJSON(),i.selection.inMultiSelectMode&&i.selection.toSingleRange(),this.pos=t.createAnchor(this.$pos.row,this.$pos.column)
var s=this.pos
s.$insertRight=!0,s.detach(),s.markerId=i.addMarker(new n(s.row,s.column,s.row,s.column+this.length),this.mainClass,null,!1),this.others=[],this.$others.forEach((function(i){var n=t.createAnchor(i.row,i.column)
n.$insertRight=!0,n.detach(),e.others.push(n)})),i.setUndoSelect(!1)},this.showOtherMarkers=function(){if(!this.othersActive){var e=this.session,t=this
this.othersActive=!0,this.others.forEach((function(i){i.markerId=e.addMarker(new n(i.row,i.column,i.row,i.column+t.length),t.othersClass,null,!1)}))}},this.hideOtherMarkers=function(){if(this.othersActive){this.othersActive=!1
for(var e=0;e<this.others.length;e++)this.session.removeMarker(this.others[e].markerId)}},this.onUpdate=function(e){if(this.$updating)return this.updateAnchors(e)
var t=e
if(t.start.row===t.end.row&&t.start.row===this.pos.row){this.$updating=!0
var i="insert"===e.action?t.end.column-t.start.column:t.start.column-t.end.column,s=t.start.column>=this.pos.column&&t.start.column<=this.pos.column+this.length+1,o=t.start.column-this.pos.column
if(this.updateAnchors(e),s&&(this.length+=i),s&&!this.session.$fromUndo)if("insert"===e.action)for(var r=this.others.length-1;r>=0;r--){var a={row:(l=this.others[r]).row,column:l.column+o}
this.doc.insertMergedLines(a,e.lines)}else if("remove"===e.action)for(r=this.others.length-1;r>=0;r--){var l
a={row:(l=this.others[r]).row,column:l.column+o}
this.doc.remove(new n(a.row,a.column,a.row,a.column-i))}this.$updating=!1,this.updateMarkers()}},this.updateAnchors=function(e){this.pos.onChange(e)
for(var t=this.others.length;t--;)this.others[t].onChange(e)
this.updateMarkers()},this.updateMarkers=function(){if(!this.$updating){var e=this,t=this.session,i=function(i,s){t.removeMarker(i.markerId),i.markerId=t.addMarker(new n(i.row,i.column,i.row,i.column+e.length),s,null,!1)}
i(this.pos,this.mainClass)
for(var s=this.others.length;s--;)i(this.others[s],this.othersClass)}},this.onCursorChange=function(e){if(!this.$updating&&this.session){var t=this.session.selection.getCursor()
t.row===this.pos.row&&t.column>=this.pos.column&&t.column<=this.pos.column+this.length?(this.showOtherMarkers(),this._emit("cursorEnter",e)):(this.hideOtherMarkers(),this._emit("cursorLeave",e))}},this.detach=function(){this.session.removeMarker(this.pos&&this.pos.markerId),this.hideOtherMarkers(),this.doc.off("change",this.$onUpdate),this.session.selection.off("changeCursor",this.$onCursorChange),this.session.setUndoSelect(!0),this.session=null},this.cancel=function(){if(-1!==this.$undoStackDepth){for(var e=this.session.getUndoManager(),t=(e.$undoStack||e.$undostack).length-this.$undoStackDepth,i=0;i<t;i++)e.undo(this.session,!0)
this.selectionBefore&&this.session.selection.fromJSON(this.selectionBefore)}}}).call(r.prototype),t.PlaceHolder=r})),ace.define("ace/mouse/multi_select_handler",["require","exports","module","ace/lib/event","ace/lib/useragent"],(function(e,t,i){function n(e,t){return e.row==t.row&&e.column==t.column}var s=e("../lib/event"),o=e("../lib/useragent")
t.onMouseDown=function(e){var t=e.domEvent,i=t.altKey,r=t.shiftKey,a=t.ctrlKey,l=e.getAccelKey(),h=e.getButton()
if(a&&o.isMac&&(h=t.button),e.editor.inMultiSelectMode&&2==h)e.editor.textInput.onContextMenu(e.domEvent)
else if(a||i||l){if(0===h){var c,u=e.editor,d=u.selection,g=u.inMultiSelectMode,f=e.getDocumentPosition(),m=d.getCursor(),p=e.inSelection()||d.isEmpty()&&n(f,m),v=e.x,w=e.y,$=u.session,b=u.renderer.pixelToScreenCoordinates(v,w),y=b
if(u.$mouseHandler.$enableJumpToDef)a&&i||l&&i?c=r?"block":"add":i&&u.$blockSelectEnabled&&(c="block")
else if(l&&!i){if(c="add",!g&&r)return}else i&&u.$blockSelectEnabled&&(c="block")
if(c&&o.isMac&&t.ctrlKey&&u.$mouseHandler.cancelContextMenu(),"add"==c){if(!g&&p)return
if(!g){var C=d.toOrientedRange()
u.addSelectionMarker(C)}var S=d.rangeList.rangeAtPoint(f)
u.inVirtualSelectionMode=!0,r&&(S=null,C=d.ranges[0]||C,u.removeSelectionMarker(C)),u.once("mouseup",(function(){var e=d.toOrientedRange()
S&&e.isEmpty()&&n(S.cursor,e.cursor)?d.substractPoint(e.cursor):(r?d.substractPoint(C.cursor):C&&(u.removeSelectionMarker(C),d.addRange(C)),d.addRange(e)),u.inVirtualSelectionMode=!1}))}else if("block"==c){e.stop(),u.inVirtualSelectionMode=!0
var k,x=[],A=function(){var e=u.renderer.pixelToScreenCoordinates(v,w),t=$.screenToDocumentPosition(e.row,e.column,e.offsetX)
n(y,e)&&n(t,d.lead)||(y=e,u.selection.moveToPosition(t),u.renderer.scrollCursorIntoView(),u.removeSelectionMarkers(x),x=d.rectangularRangeBlock(y,b),u.$mouseHandler.$clickSelection&&1==x.length&&x[0].isEmpty()&&(x[0]=u.$mouseHandler.$clickSelection.clone()),x.forEach(u.addSelectionMarker,u),u.updateSelectionMarkers())}
g&&!l?d.toSingleRange():!g&&l&&(k=d.toOrientedRange(),u.addSelectionMarker(k)),r?b=$.documentToScreenPosition(d.lead):d.moveToPosition(f),y={row:-1,column:-1}
var L=A
s.capture(u.container,(function(e){v=e.clientX,w=e.clientY}),(function(e){A(),clearInterval(R),u.removeSelectionMarkers(x),x.length||(x=[d.toOrientedRange()]),k&&(u.removeSelectionMarker(k),d.toSingleRange(k))
for(var t=0;t<x.length;t++)d.addRange(x[t])
u.inVirtualSelectionMode=!1,u.$mouseHandler.$clickSelection=null}))
var R=setInterval((function(){L()}),20)
return e.preventDefault()}}}else 0===h&&e.editor.inMultiSelectMode&&e.editor.exitMultiSelectMode()}})),ace.define("ace/commands/multi_select_commands",["require","exports","module","ace/keyboard/hash_handler"],(function(e,t,i){t.defaultCommands=[{name:"addCursorAbove",description:"Add cursor above",exec:function(e){e.selectMoreLines(-1)},bindKey:{win:"Ctrl-Alt-Up",mac:"Ctrl-Alt-Up"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorBelow",description:"Add cursor below",exec:function(e){e.selectMoreLines(1)},bindKey:{win:"Ctrl-Alt-Down",mac:"Ctrl-Alt-Down"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorAboveSkipCurrent",description:"Add cursor above (skip current)",exec:function(e){e.selectMoreLines(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Up",mac:"Ctrl-Alt-Shift-Up"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorBelowSkipCurrent",description:"Add cursor below (skip current)",exec:function(e){e.selectMoreLines(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Down",mac:"Ctrl-Alt-Shift-Down"},scrollIntoView:"cursor",readOnly:!0},{name:"selectMoreBefore",description:"Select more before",exec:function(e){e.selectMore(-1)},bindKey:{win:"Ctrl-Alt-Left",mac:"Ctrl-Alt-Left"},scrollIntoView:"cursor",readOnly:!0},{name:"selectMoreAfter",description:"Select more after",exec:function(e){e.selectMore(1)},bindKey:{win:"Ctrl-Alt-Right",mac:"Ctrl-Alt-Right"},scrollIntoView:"cursor",readOnly:!0},{name:"selectNextBefore",description:"Select next before",exec:function(e){e.selectMore(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Left",mac:"Ctrl-Alt-Shift-Left"},scrollIntoView:"cursor",readOnly:!0},{name:"selectNextAfter",description:"Select next after",exec:function(e){e.selectMore(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Right",mac:"Ctrl-Alt-Shift-Right"},scrollIntoView:"cursor",readOnly:!0},{name:"toggleSplitSelectionIntoLines",description:"Split into lines",exec:function(e){e.multiSelect.rangeCount>1?e.multiSelect.joinSelections():e.multiSelect.splitIntoLines()},bindKey:{win:"Ctrl-Alt-L",mac:"Ctrl-Alt-L"},readOnly:!0},{name:"splitSelectionIntoLines",description:"Split into lines",exec:function(e){e.multiSelect.splitIntoLines()},readOnly:!0},{name:"alignCursors",description:"Align cursors",exec:function(e){e.alignCursors()},bindKey:{win:"Ctrl-Alt-A",mac:"Ctrl-Alt-A"},scrollIntoView:"cursor"},{name:"findAll",description:"Find all",exec:function(e){e.findAll()},bindKey:{win:"Ctrl-Alt-K",mac:"Ctrl-Alt-G"},scrollIntoView:"cursor",readOnly:!0}],t.multiSelectCommands=[{name:"singleSelection",description:"Single selection",bindKey:"esc",exec:function(e){e.exitMultiSelectMode()},scrollIntoView:"cursor",readOnly:!0,isAvailable:function(e){return e&&e.inMultiSelectMode}}]
var n=e("../keyboard/hash_handler").HashHandler
t.keyboardHandler=new n(t.multiSelectCommands)})),ace.define("ace/multi_select",["require","exports","module","ace/range_list","ace/range","ace/selection","ace/mouse/multi_select_handler","ace/lib/event","ace/lib/lang","ace/commands/multi_select_commands","ace/search","ace/edit_session","ace/editor","ace/config"],(function(e,t,i){function n(e,t){return e.row==t.row&&e.column==t.column}function s(e){e.$multiselectOnSessionChange||(e.$onAddRange=e.$onAddRange.bind(e),e.$onRemoveRange=e.$onRemoveRange.bind(e),e.$onMultiSelect=e.$onMultiSelect.bind(e),e.$onSingleSelect=e.$onSingleSelect.bind(e),e.$multiselectOnSessionChange=t.onSessionChange.bind(e),e.$checkMultiselectChange=e.$checkMultiselectChange.bind(e),e.$multiselectOnSessionChange(e),e.on("changeSession",e.$multiselectOnSessionChange),e.on("mousedown",l),e.commands.addCommands(u.defaultCommands),function(e){function t(t){n&&(e.renderer.setMouseCursor(""),n=!1)}if(!e.textInput)return
var i=e.textInput.getElement(),n=!1
h.addListener(i,"keydown",(function(i){var s=18==i.keyCode&&!(i.ctrlKey||i.shiftKey||i.metaKey)
e.$blockSelectEnabled&&s?n||(e.renderer.setMouseCursor("crosshair"),n=!0):n&&t()}),e),h.addListener(i,"keyup",t,e),h.addListener(i,"blur",t,e)}(e))}var o=e("./range_list").RangeList,r=e("./range").Range,a=e("./selection").Selection,l=e("./mouse/multi_select_handler").onMouseDown,h=e("./lib/event"),c=e("./lib/lang"),u=e("./commands/multi_select_commands")
t.commands=u.defaultCommands.concat(u.multiSelectCommands)
var d=new(0,e("./search").Search),g=e("./edit_session").EditSession;(function(){this.getSelectionMarkers=function(){return this.$selectionMarkers}}).call(g.prototype),function(){this.ranges=null,this.rangeList=null,this.addRange=function(e,t){if(e){if(!this.inMultiSelectMode&&0===this.rangeCount){var i=this.toOrientedRange()
if(this.rangeList.add(i),this.rangeList.add(e),2!=this.rangeList.ranges.length)return this.rangeList.removeAll(),t||this.fromOrientedRange(e)
this.rangeList.removeAll(),this.rangeList.add(i),this.$onAddRange(i)}e.cursor||(e.cursor=e.end)
var n=this.rangeList.add(e)
return this.$onAddRange(e),n.length&&this.$onRemoveRange(n),this.rangeCount>1&&!this.inMultiSelectMode&&(this._signal("multiSelect"),this.inMultiSelectMode=!0,this.session.$undoSelect=!1,this.rangeList.attach(this.session)),t||this.fromOrientedRange(e)}},this.toSingleRange=function(e){e=e||this.ranges[0]
var t=this.rangeList.removeAll()
t.length&&this.$onRemoveRange(t),e&&this.fromOrientedRange(e)},this.substractPoint=function(e){var t=this.rangeList.substractPoint(e)
if(t)return this.$onRemoveRange(t),t[0]},this.mergeOverlappingRanges=function(){var e=this.rangeList.merge()
e.length&&this.$onRemoveRange(e)},this.$onAddRange=function(e){this.rangeCount=this.rangeList.ranges.length,this.ranges.unshift(e),this._signal("addRange",{range:e})},this.$onRemoveRange=function(e){if(this.rangeCount=this.rangeList.ranges.length,1==this.rangeCount&&this.inMultiSelectMode){var t=this.rangeList.ranges.pop()
e.push(t),this.rangeCount=0}for(var i=e.length;i--;){var n=this.ranges.indexOf(e[i])
this.ranges.splice(n,1)}this._signal("removeRange",{ranges:e}),0===this.rangeCount&&this.inMultiSelectMode&&(this.inMultiSelectMode=!1,this._signal("singleSelect"),this.session.$undoSelect=!0,this.rangeList.detach(this.session)),(t=t||this.ranges[0])&&!t.isEqual(this.getRange())&&this.fromOrientedRange(t)},this.$initRangeList=function(){this.rangeList||(this.rangeList=new o,this.ranges=[],this.rangeCount=0)},this.getAllRanges=function(){return this.rangeCount?this.rangeList.ranges.concat():[this.getRange()]},this.splitIntoLines=function(){for(var e=this.ranges.length?this.ranges:[this.getRange()],t=[],i=0;i<e.length;i++){var n=e[i],s=n.start.row,o=n.end.row
if(s===o)t.push(n.clone())
else{for(t.push(new r(s,n.start.column,s,this.session.getLine(s).length));++s<o;)t.push(this.getLineRange(s,!0))
t.push(new r(o,0,o,n.end.column))}0==i&&!this.isBackwards()&&(t=t.reverse())}this.toSingleRange()
for(i=t.length;i--;)this.addRange(t[i])},this.joinSelections=function(){var e=this.rangeList.ranges,t=e[e.length-1],i=r.fromPoints(e[0].start,t.end)
this.toSingleRange(),this.setSelectionRange(i,t.cursor==t.start)},this.toggleBlockSelection=function(){if(this.rangeCount>1){var e=this.rangeList.ranges,t=e[e.length-1],i=r.fromPoints(e[0].start,t.end)
this.toSingleRange(),this.setSelectionRange(i,t.cursor==t.start)}else{var n=this.session.documentToScreenPosition(this.cursor),s=this.session.documentToScreenPosition(this.anchor)
this.rectangularRangeBlock(n,s).forEach(this.addRange,this)}},this.rectangularRangeBlock=function(e,t,i){var s=[],o=e.column<t.column
if(o)var a=e.column,l=t.column,h=e.offsetX,c=t.offsetX
else a=t.column,l=e.column,h=t.offsetX,c=e.offsetX
var u,d=e.row<t.row
if(d)var g=e.row,f=t.row
else g=t.row,f=e.row
a<0&&(a=0),g<0&&(g=0),g==f&&(i=!0)
for(var m=g;m<=f;m++){var p=r.fromPoints(this.session.screenToDocumentPosition(m,a,h),this.session.screenToDocumentPosition(m,l,c))
if(p.isEmpty()){if(u&&n(p.end,u))break
u=p.end}p.cursor=o?p.start:p.end,s.push(p)}if(d&&s.reverse(),!i){for(var v=s.length-1;s[v].isEmpty()&&v>0;)v--
if(v>0)for(var w=0;s[w].isEmpty();)w++
for(var $=v;$>=w;$--)s[$].isEmpty()&&s.splice($,1)}return s}}.call(a.prototype)
var f=e("./editor").Editor;(function(){this.updateSelectionMarkers=function(){this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.addSelectionMarker=function(e){e.cursor||(e.cursor=e.end)
var t=this.getSelectionStyle()
return e.marker=this.session.addMarker(e,"ace_selection",t),this.session.$selectionMarkers.push(e),this.session.selectionMarkerCount=this.session.$selectionMarkers.length,e},this.removeSelectionMarker=function(e){if(e.marker){this.session.removeMarker(e.marker)
var t=this.session.$selectionMarkers.indexOf(e);-1!=t&&this.session.$selectionMarkers.splice(t,1),this.session.selectionMarkerCount=this.session.$selectionMarkers.length}},this.removeSelectionMarkers=function(e){for(var t=this.session.$selectionMarkers,i=e.length;i--;){var n=e[i]
if(n.marker){this.session.removeMarker(n.marker)
var s=t.indexOf(n);-1!=s&&t.splice(s,1)}}this.session.selectionMarkerCount=t.length},this.$onAddRange=function(e){this.addSelectionMarker(e.range),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onRemoveRange=function(e){this.removeSelectionMarkers(e.ranges),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onMultiSelect=function(e){this.inMultiSelectMode||(this.inMultiSelectMode=!0,this.setStyle("ace_multiselect"),this.keyBinding.addKeyboardHandler(u.keyboardHandler),this.commands.setDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers())},this.$onSingleSelect=function(e){this.session.multiSelect.inVirtualMode||(this.inMultiSelectMode=!1,this.unsetStyle("ace_multiselect"),this.keyBinding.removeKeyboardHandler(u.keyboardHandler),this.commands.removeDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers(),this._emit("changeSelection"))},this.$onMultiSelectExec=function(e){var t=e.command,i=e.editor
if(i.multiSelect){if(t.multiSelectAction)"forEach"==t.multiSelectAction?n=i.forEachSelection(t,e.args):"forEachLine"==t.multiSelectAction?n=i.forEachSelection(t,e.args,!0):"single"==t.multiSelectAction?(i.exitMultiSelectMode(),n=t.exec(i,e.args||{})):n=t.multiSelectAction(i,e.args||{})
else{var n=t.exec(i,e.args||{})
i.multiSelect.addRange(i.multiSelect.toOrientedRange()),i.multiSelect.mergeOverlappingRanges()}return n}},this.forEachSelection=function(e,t,i){if(!this.inVirtualSelectionMode){var n,s=i&&i.keepOrder,o=1==i||i&&i.$byLines,r=this.session,l=this.selection,h=l.rangeList,c=(s?l:h).ranges
if(!c.length)return e.exec?e.exec(this,t||{}):e(this,t||{})
var u=l._eventRegistry
l._eventRegistry={}
var d=new a(r)
this.inVirtualSelectionMode=!0
for(var g=c.length;g--;){if(o)for(;g>0&&c[g].start.row==c[g-1].end.row;)g--
d.fromOrientedRange(c[g]),d.index=g,this.selection=r.selection=d
var f=e.exec?e.exec(this,t||{}):e(this,t||{})
!n&&void 0!==f&&(n=f),d.toOrientedRange(c[g])}d.detach(),this.selection=r.selection=l,this.inVirtualSelectionMode=!1,l._eventRegistry=u,l.mergeOverlappingRanges(),l.ranges[0]&&l.fromOrientedRange(l.ranges[0])
var m=this.renderer.$scrollAnimation
return this.onCursorChange(),this.onSelectionChange(),m&&m.from==m.to&&this.renderer.animateScrolling(m.from),n}},this.exitMultiSelectMode=function(){this.inMultiSelectMode&&!this.inVirtualSelectionMode&&this.multiSelect.toSingleRange()},this.getSelectedText=function(){var e=""
if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){for(var t=this.multiSelect.rangeList.ranges,i=[],n=0;n<t.length;n++)i.push(this.session.getTextRange(t[n]))
var s=this.session.getDocument().getNewLineCharacter();(e=i.join(s)).length==(i.length-1)*s.length&&(e="")}else this.selection.isEmpty()||(e=this.session.getTextRange(this.getSelectionRange()))
return e},this.$checkMultiselectChange=function(e,t){if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var i=this.multiSelect.ranges[0]
if(this.multiSelect.isEmpty()&&t==this.multiSelect.anchor)return
var n=t==this.multiSelect.anchor?i.cursor==i.start?i.end:i.start:i.cursor
n.row!=t.row||this.session.$clipPositionToDocument(n.row,n.column).column!=t.column?this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()):this.multiSelect.mergeOverlappingRanges()}},this.findAll=function(e,t,i){if((t=t||{}).needle=e||t.needle,null==t.needle){var n=this.selection.isEmpty()?this.selection.getWordRange():this.selection.getRange()
t.needle=this.session.getTextRange(n)}this.$search.set(t)
var s=this.$search.findAll(this.session)
if(!s.length)return 0
var o=this.multiSelect
i||o.toSingleRange(s[0])
for(var r=s.length;r--;)o.addRange(s[r],!0)
return n&&o.rangeList.rangeAtPoint(n.start)&&o.addRange(n,!0),s.length},this.selectMoreLines=function(e,t){var i=this.selection.toOrientedRange(),n=i.cursor==i.end,s=this.session.documentToScreenPosition(i.cursor)
this.selection.$desiredColumn&&(s.column=this.selection.$desiredColumn)
var o,a=this.session.screenToDocumentPosition(s.row+e,s.column)
if(i.isEmpty())h=a
else var l=this.session.documentToScreenPosition(n?i.end:i.start),h=this.session.screenToDocumentPosition(l.row+e,l.column)
n?(o=r.fromPoints(a,h)).cursor=o.start:(o=r.fromPoints(h,a)).cursor=o.end
if(o.desiredColumn=s.column,this.selection.inMultiSelectMode){if(t)var c=i.cursor}else this.selection.addRange(i)
this.selection.addRange(o),c&&this.selection.substractPoint(c)},this.transposeSelections=function(e){for(var t=this.session,i=t.multiSelect,n=i.ranges,s=n.length;s--;){if((a=n[s]).isEmpty()){var o=t.getWordRange(a.start.row,a.start.column)
a.start.row=o.start.row,a.start.column=o.start.column,a.end.row=o.end.row,a.end.column=o.end.column}}i.mergeOverlappingRanges()
var r=[]
for(s=n.length;s--;){var a=n[s]
r.unshift(t.getTextRange(a))}e<0?r.unshift(r.pop()):r.push(r.shift())
for(s=n.length;s--;){o=(a=n[s]).clone()
t.replace(a,r[s]),a.start.row=o.start.row,a.start.column=o.start.column}i.fromOrientedRange(i.ranges[0])},this.selectMore=function(e,t,i){var n=this.session,s=n.multiSelect.toOrientedRange()
if(!s.isEmpty()||((s=n.getWordRange(s.start.row,s.start.column)).cursor=-1==e?s.start:s.end,this.multiSelect.addRange(s),!i)){var o=n.getTextRange(s),r=function(e,t,i){return d.$options.wrap=!0,d.$options.needle=t,d.$options.backwards=-1==i,d.find(e)}(n,o,e)
r&&(r.cursor=-1==e?r.start:r.end,this.session.unfold(r),this.multiSelect.addRange(r),this.renderer.scrollCursorIntoView(null,.5)),t&&this.multiSelect.substractPoint(s.cursor)}},this.alignCursors=function(){var e=this.session,t=e.multiSelect,i=t.ranges,n=-1,s=i.filter((function(e){if(e.cursor.row==n)return!0
n=e.cursor.row}))
if(i.length&&s.length!=i.length-1){s.forEach((function(e){t.substractPoint(e.cursor)}))
var o=0,a=1/0,l=i.map((function(t){var i=t.cursor,n=e.getLine(i.row).substr(i.column).search(/\S/g)
return-1==n&&(n=0),i.column>o&&(o=i.column),n<a&&(a=n),n}))
i.forEach((function(t,i){var n=t.cursor,s=o-n.column,h=l[i]-a
s>h?e.insert(n,c.stringRepeat(" ",s-h)):e.remove(new r(n.row,n.column,n.row,n.column-s+h)),t.start.column=t.end.column=o,t.start.row=t.end.row=n.row,t.cursor=t.end})),t.fromOrientedRange(i[0]),this.renderer.updateCursor(),this.renderer.updateBackMarkers()}else{var h=this.selection.getRange(),u=h.start.row,d=h.end.row,g=u==d
if(g){var f,m=this.session.getLength()
do{f=this.session.getLine(d)}while(/[=:]/.test(f)&&++d<m)
do{f=this.session.getLine(u)}while(/[=:]/.test(f)&&--u>0)
u<0&&(u=0),d>=m&&(d=m-1)}var p=this.session.removeFullLines(u,d)
p=this.$reAlignText(p,g),this.session.insert({row:u,column:0},p.join("\n")+"\n"),g||(h.start.column=0,h.end.column=p[p.length-1].length),this.selection.setRange(h)}},this.$reAlignText=function(e,t){function i(e){return c.stringRepeat(" ",e)}function n(e){return e[2]?i(s)+e[2]+i(o-e[2].length+r)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}var s,o,r,a=!0,l=!0
return e.map((function(e){var t=e.match(/(\s*)(.*?)(\s*)([=:].*)/)
return t?null==s?(s=t[1].length,o=t[2].length,r=t[3].length,t):(s+o+r!=t[1].length+t[2].length+t[3].length&&(l=!1),s!=t[1].length&&(a=!1),s>t[1].length&&(s=t[1].length),o<t[2].length&&(o=t[2].length),r>t[3].length&&(r=t[3].length),t):[e]})).map(t?n:a?l?function(e){return e[2]?i(s+o-e[2].length)+e[2]+i(r)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}:n:function(e){return e[2]?i(s)+e[2]+i(r)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]})}}).call(f.prototype),t.onSessionChange=function(e){var t=e.session
t&&!t.multiSelect&&(t.$selectionMarkers=[],t.selection.$initRangeList(),t.multiSelect=t.selection),this.multiSelect=t&&t.multiSelect
var i=e.oldSession
i&&(i.multiSelect.off("addRange",this.$onAddRange),i.multiSelect.off("removeRange",this.$onRemoveRange),i.multiSelect.off("multiSelect",this.$onMultiSelect),i.multiSelect.off("singleSelect",this.$onSingleSelect),i.multiSelect.lead.off("change",this.$checkMultiselectChange),i.multiSelect.anchor.off("change",this.$checkMultiselectChange)),t&&(t.multiSelect.on("addRange",this.$onAddRange),t.multiSelect.on("removeRange",this.$onRemoveRange),t.multiSelect.on("multiSelect",this.$onMultiSelect),t.multiSelect.on("singleSelect",this.$onSingleSelect),t.multiSelect.lead.on("change",this.$checkMultiselectChange),t.multiSelect.anchor.on("change",this.$checkMultiselectChange)),t&&this.inMultiSelectMode!=t.selection.inMultiSelectMode&&(t.selection.inMultiSelectMode?this.$onMultiSelect():this.$onSingleSelect())},t.MultiSelect=s,e("./config").defineOptions(f.prototype,"editor",{enableMultiselect:{set:function(e){s(this),e?(this.on("changeSession",this.$multiselectOnSessionChange),this.on("mousedown",l)):(this.off("changeSession",this.$multiselectOnSessionChange),this.off("mousedown",l))},value:!0},enableBlockSelect:{set:function(e){this.$blockSelectEnabled=e},value:!0}})})),ace.define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],(function(e,t,i){"use strict"
var n=e("../../range").Range,s=t.FoldMode=function(){};(function(){this.foldingStartMarker=null,this.foldingStopMarker=null,this.getFoldWidget=function(e,t,i){var n=e.getLine(i)
return this.foldingStartMarker.test(n)?"start":"markbeginend"==t&&this.foldingStopMarker&&this.foldingStopMarker.test(n)?"end":""},this.getFoldWidgetRange=function(e,t,i){return null},this.indentationBlock=function(e,t,i){var s=/\S/,o=e.getLine(t),r=o.search(s)
if(-1!=r){for(var a=i||o.length,l=e.getLength(),h=t,c=t;++t<l;){var u=e.getLine(t).search(s)
if(-1!=u){if(u<=r){var d=e.getTokenAt(t,0)
if(!d||"string"!==d.type)break}c=t}}if(c>h){var g=e.getLine(c).length
return new n(h,a,c,g)}}},this.openingBracketBlock=function(e,t,i,s,o){var r={row:i,column:s+1},a=e.$findClosingBracket(t,r,o)
if(a){var l=e.foldWidgets[a.row]
return null==l&&(l=e.getFoldWidget(a.row)),"start"==l&&a.row>r.row&&(a.row--,a.column=e.getLine(a.row).length),n.fromPoints(r,a)}},this.closingBracketBlock=function(e,t,i,s,o){var r={row:i,column:s},a=e.$findOpeningBracket(t,r)
if(a)return a.column++,r.column--,n.fromPoints(a,r)}}).call(s.prototype)})),ace.define("ace/line_widgets",["require","exports","module","ace/lib/dom"],(function(e,t,i){"use strict"
function n(e){this.session=e,this.session.widgetManager=this,this.session.getRowLength=this.getRowLength,this.session.$getWidgetScreenLength=this.$getWidgetScreenLength,this.updateOnChange=this.updateOnChange.bind(this),this.renderWidgets=this.renderWidgets.bind(this),this.measureWidgets=this.measureWidgets.bind(this),this.session._changedWidgets=[],this.$onChangeEditor=this.$onChangeEditor.bind(this),this.session.on("change",this.updateOnChange),this.session.on("changeFold",this.updateOnFold),this.session.on("changeEditor",this.$onChangeEditor)}var s=e("./lib/dom");(function(){this.getRowLength=function(e){var t
return t=this.lineWidgets&&this.lineWidgets[e]&&this.lineWidgets[e].rowCount||0,this.$useWrapMode&&this.$wrapData[e]?this.$wrapData[e].length+1+t:1+t},this.$getWidgetScreenLength=function(){var e=0
return this.lineWidgets.forEach((function(t){t&&t.rowCount&&!t.hidden&&(e+=t.rowCount)})),e},this.$onChangeEditor=function(e){this.attach(e.editor)},this.attach=function(e){e&&e.widgetManager&&e.widgetManager!=this&&e.widgetManager.detach(),this.editor!=e&&(this.detach(),this.editor=e,e&&(e.widgetManager=this,e.renderer.on("beforeRender",this.measureWidgets),e.renderer.on("afterRender",this.renderWidgets)))},this.detach=function(e){var t=this.editor
if(t){this.editor=null,t.widgetManager=null,t.renderer.off("beforeRender",this.measureWidgets),t.renderer.off("afterRender",this.renderWidgets)
var i=this.session.lineWidgets
i&&i.forEach((function(e){e&&e.el&&e.el.parentNode&&(e._inDocument=!1,e.el.parentNode.removeChild(e.el))}))}},this.updateOnFold=function(e,t){var i=t.lineWidgets
if(i&&e.action){for(var n=e.data,s=n.start.row,o=n.end.row,r="add"==e.action,a=s+1;a<o;a++)i[a]&&(i[a].hidden=r)
i[o]&&(r?i[s]?i[o].hidden=r:i[s]=i[o]:(i[s]==i[o]&&(i[s]=void 0),i[o].hidden=r))}},this.updateOnChange=function(e){var t=this.session.lineWidgets
if(t){var i=e.start.row,n=e.end.row-i
if(0!==n)if("remove"==e.action){var s=t.splice(i+1,n)
!t[i]&&s[s.length-1]&&(t[i]=s.pop()),s.forEach((function(e){e&&this.removeLineWidget(e)}),this),this.$updateRows()}else{var o=new Array(n)
t[i]&&null!=t[i].column&&e.start.column>t[i].column&&i++,o.unshift(i,0),t.splice.apply(t,o),this.$updateRows()}}},this.$updateRows=function(){var e=this.session.lineWidgets
if(e){var t=!0
e.forEach((function(e,i){if(e)for(t=!1,e.row=i;e.$oldWidget;)e.$oldWidget.row=i,e=e.$oldWidget})),t&&(this.session.lineWidgets=null)}},this.$registerLineWidget=function(e){this.session.lineWidgets||(this.session.lineWidgets=new Array(this.session.getLength()))
var t=this.session.lineWidgets[e.row]
return t&&(e.$oldWidget=t,t.el&&t.el.parentNode&&(t.el.parentNode.removeChild(t.el),t._inDocument=!1)),this.session.lineWidgets[e.row]=e,e},this.addLineWidget=function(e){if(this.$registerLineWidget(e),e.session=this.session,!this.editor)return e
var t=this.editor.renderer
e.html&&!e.el&&(e.el=s.createElement("div"),e.el.innerHTML=e.html),e.el&&(s.addCssClass(e.el,"ace_lineWidgetContainer"),e.el.style.position="absolute",e.el.style.zIndex=5,t.container.appendChild(e.el),e._inDocument=!0,e.coverGutter||(e.el.style.zIndex=3),null==e.pixelHeight&&(e.pixelHeight=e.el.offsetHeight)),null==e.rowCount&&(e.rowCount=e.pixelHeight/t.layerConfig.lineHeight)
var i=this.session.getFoldAt(e.row,0)
if(e.$fold=i,i){var n=this.session.lineWidgets
e.row!=i.end.row||n[i.start.row]?e.hidden=!0:n[i.start.row]=e}return this.session._emit("changeFold",{data:{start:{row:e.row}}}),this.$updateRows(),this.renderWidgets(null,t),this.onWidgetChanged(e),e},this.removeLineWidget=function(e){if(e._inDocument=!1,e.session=null,e.el&&e.el.parentNode&&e.el.parentNode.removeChild(e.el),e.editor&&e.editor.destroy)try{e.editor.destroy()}catch(t){}if(this.session.lineWidgets){var i=this.session.lineWidgets[e.row]
if(i==e)this.session.lineWidgets[e.row]=e.$oldWidget,e.$oldWidget&&this.onWidgetChanged(e.$oldWidget)
else for(;i;){if(i.$oldWidget==e){i.$oldWidget=e.$oldWidget
break}i=i.$oldWidget}}this.session._emit("changeFold",{data:{start:{row:e.row}}}),this.$updateRows()},this.getWidgetsAtRow=function(e){for(var t=this.session.lineWidgets,i=t&&t[e],n=[];i;)n.push(i),i=i.$oldWidget
return n},this.onWidgetChanged=function(e){this.session._changedWidgets.push(e),this.editor&&this.editor.renderer.updateFull()},this.measureWidgets=function(e,t){var i=this.session._changedWidgets,n=t.layerConfig
if(i&&i.length){for(var s=1/0,o=0;o<i.length;o++){var r=i[o]
if(r&&r.el&&r.session==this.session){if(!r._inDocument){if(this.session.lineWidgets[r.row]!=r)continue
r._inDocument=!0,t.container.appendChild(r.el)}r.h=r.el.offsetHeight,r.fixedWidth||(r.w=r.el.offsetWidth,r.screenWidth=Math.ceil(r.w/n.characterWidth))
var a=r.h/n.lineHeight
r.coverLine&&((a-=this.session.getRowLineCount(r.row))<0&&(a=0)),r.rowCount!=a&&(r.rowCount=a,r.row<s&&(s=r.row))}}s!=1/0&&(this.session._emit("changeFold",{data:{start:{row:s}}}),this.session.lineWidgetWidth=null),this.session._changedWidgets=[]}},this.renderWidgets=function(e,t){var i=t.layerConfig,n=this.session.lineWidgets
if(n){for(var s=Math.min(this.firstRow,i.firstRow),o=Math.max(this.lastRow,i.lastRow,n.length);s>0&&!n[s];)s--
this.firstRow=i.firstRow,this.lastRow=i.lastRow,t.$cursorLayer.config=i
for(var r=s;r<=o;r++){var a=n[r]
if(a&&a.el)if(a.hidden)a.el.style.top=-100-(a.pixelHeight||0)+"px"
else{a._inDocument||(a._inDocument=!0,t.container.appendChild(a.el))
var l=t.$cursorLayer.getPixelPosition({row:r,column:0},!0).top
a.coverLine||(l+=i.lineHeight*this.session.getRowLineCount(a.row)),a.el.style.top=l-i.offset+"px"
var h=a.coverGutter?0:t.gutterWidth
a.fixedWidth||(h-=t.scrollLeft),a.el.style.left=h+"px",a.fullWidth&&a.screenWidth&&(a.el.style.minWidth=i.width+2*i.padding+"px"),a.fixedWidth?a.el.style.right=t.scrollBar.getWidth()+"px":a.el.style.right=""}}}}}).call(n.prototype),t.LineWidgets=n})),ace.define("ace/ext/error_marker",["require","exports","module","ace/line_widgets","ace/lib/dom","ace/range"],(function(e,t,i){"use strict"
function n(e,t,i){var n=e.getAnnotations().sort(r.comparePoints)
if(n.length){var s=function(e,t,i){for(var n=0,s=e.length-1;n<=s;){var o=n+s>>1,r=i(t,e[o])
if(r>0)n=o+1
else{if(!(r<0))return o
s=o-1}}return-(n+1)}(n,{row:t,column:-1},r.comparePoints)
s<0&&(s=-s-1),s>=n.length?s=i>0?0:n.length-1:0===s&&i<0&&(s=n.length-1)
var o=n[s]
if(o&&i){if(o.row===t){do{o=n[s+=i]}while(o&&o.row===t)
if(!o)return n.slice()}var a=[]
t=o.row
do{a[i<0?"unshift":"push"](o),o=n[s+=i]}while(o&&o.row==t)
return a.length&&a}}}var s=e("../line_widgets").LineWidgets,o=e("../lib/dom"),r=e("../range").Range
t.showErrorMarker=function(e,t){var i=e.session
i.widgetManager||(i.widgetManager=new s(i),i.widgetManager.attach(e))
var r=e.getCursorPosition(),a=r.row,l=i.widgetManager.getWidgetsAtRow(a).filter((function(e){return"errorMarker"==e.type}))[0]
l?l.destroy():a-=t
var h,c=n(i,a,t)
if(c){var u=c[0]
r.column=(u.pos&&"number"!=typeof u.column?u.pos.sc:u.column)||0,r.row=u.row,h=e.renderer.$gutterLayer.$annotations[r.row]}else{if(l)return
h={text:["Looks good!"],className:"ace_ok"}}e.session.unfold(r.row),e.selection.moveToPosition(r)
var d={row:r.row,fixedWidth:!0,coverGutter:!0,el:o.createElement("div"),type:"errorMarker"},g=d.el.appendChild(o.createElement("div")),f=d.el.appendChild(o.createElement("div"))
f.className="error_widget_arrow "+h.className
var m=e.renderer.$cursorLayer.getPixelPosition(r).left
f.style.left=m+e.renderer.gutterWidth-5+"px",d.el.className="error_widget_wrapper",g.className="error_widget "+h.className,g.innerHTML=h.text.join("<br>"),g.appendChild(o.createElement("div"))
var p=function(e,t,i){if(0===t&&("esc"===i||"return"===i))return d.destroy(),{command:"null"}}
d.destroy=function(){e.$mouseHandler.isMousePressed||(e.keyBinding.removeKeyboardHandler(p),i.widgetManager.removeLineWidget(d),e.off("changeSelection",d.destroy),e.off("changeSession",d.destroy),e.off("mouseup",d.destroy),e.off("change",d.destroy))},e.keyBinding.addKeyboardHandler(p),e.on("changeSelection",d.destroy),e.on("changeSession",d.destroy),e.on("mouseup",d.destroy),e.on("change",d.destroy),e.session.widgetManager.addLineWidget(d),d.el.onmousedown=e.focus.bind(e),e.renderer.scrollCursorIntoView(null,.5,{bottom:d.el.offsetHeight})},o.importCssString("\n    .error_widget_wrapper {\n        background: inherit;\n        color: inherit;\n        border:none\n    }\n    .error_widget {\n        border-top: solid 2px;\n        border-bottom: solid 2px;\n        margin: 5px 0;\n        padding: 10px 40px;\n        white-space: pre-wrap;\n    }\n    .error_widget.ace_error, .error_widget_arrow.ace_error{\n        border-color: #ff5a5a\n    }\n    .error_widget.ace_warning, .error_widget_arrow.ace_warning{\n        border-color: #F1D817\n    }\n    .error_widget.ace_info, .error_widget_arrow.ace_info{\n        border-color: #5a5a5a\n    }\n    .error_widget.ace_ok, .error_widget_arrow.ace_ok{\n        border-color: #5aaa5a\n    }\n    .error_widget_arrow {\n        position: absolute;\n        border: solid 5px;\n        border-top-color: transparent!important;\n        border-right-color: transparent!important;\n        border-left-color: transparent!important;\n        top: -5px;\n    }\n","error_marker.css",!1)})),ace.define("ace/ace",["require","exports","module","ace/lib/dom","ace/lib/event","ace/range","ace/editor","ace/edit_session","ace/undomanager","ace/virtual_renderer","ace/worker/worker_client","ace/keyboard/hash_handler","ace/placeholder","ace/multi_select","ace/mode/folding/fold_mode","ace/theme/textmate","ace/ext/error_marker","ace/config","ace/loader_build"],(function(e,t,i){"use strict"
e("./loader_build")(t)
var n=e("./lib/dom"),s=e("./lib/event"),o=e("./range").Range,r=e("./editor").Editor,a=e("./edit_session").EditSession,l=e("./undomanager").UndoManager,h=e("./virtual_renderer").VirtualRenderer
e("./worker/worker_client"),e("./keyboard/hash_handler"),e("./placeholder"),e("./multi_select"),e("./mode/folding/fold_mode"),e("./theme/textmate"),e("./ext/error_marker"),t.config=e("./config"),t.edit=function(e,i){if("string"==typeof e){var o=e
if(!(e=document.getElementById(o)))throw new Error("ace.edit can't find div #"+o)}if(e&&e.env&&e.env.editor instanceof r)return e.env.editor
var a=""
if(e&&/input|textarea/i.test(e.tagName)){var l=e
a=l.value,e=n.createElement("pre"),l.parentNode.replaceChild(e,l)}else e&&(a=e.textContent,e.innerHTML="")
var c=t.createEditSession(a),u=new r(new h(e),c,i),d={document:c,editor:u,onResize:u.resize.bind(u,null)}
return l&&(d.textarea=l),s.addListener(window,"resize",d.onResize),u.on("destroy",(function(){s.removeListener(window,"resize",d.onResize),d.editor.container.env=null})),u.container.env=u.env=d,u},t.createEditSession=function(e,t){var i=new a(e,t)
return i.setUndoManager(new l),i},t.Range=o,t.Editor=r,t.EditSession=a,t.UndoManager=l,t.VirtualRenderer=h,t.version=t.config.version}))
ace.require(["ace/ace"],(function(e){for(var t in e&&(e.config.init(!0),e.define=ace.define),window.ace||(window.ace=e),e)e.hasOwnProperty(t)&&(window.ace[t]=e[t])
window.ace.default=window.ace,"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=window.ace)}))
