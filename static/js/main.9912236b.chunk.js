(this["webpackJsonpmovie-web"]=this["webpackJsonpmovie-web"]||[]).push([[0],{25:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(28),o=n.n(a),c=n(16),i=(n(25),n(10)),u=n(29),l=n(11),d=n(3),p=n.n(d),h=n(7),f=n(2),v=n(19),b=n(5),j=(n(41),n(0));function m(e){return Object(j.jsx)("span",{className:"arrow",dangerouslySetInnerHTML:{__html:'\n            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather '.concat(e.left?"left":"",'"}>\n                <line x1="5" y1="12" x2="19" y2="12"></line>\n                <polyline points="12 5 19 12 12 19"></polyline>\n            </svg>\n        ')}})}function x(e){var t=s.a.useState(!1),n=Object(f.a)(t,2),r=n[0],a=n[1],o=s.a.useRef(null),c=s.a.useState(0),i=Object(f.a)(c,2),u=i[0],l=i[1];return s.a.useEffect(function(){(null==o?void 0:o.current)&&(a(e.show),l(o.current.clientHeight))},[e.show,o]),Object(j.jsx)("div",{className:"card-wrapper ".concat(e.fullWidth?"full":""," ").concat(e.doTransition?"overflow-hidden":""),style:{height:e.doTransition?r?u:0:"initial"},children:Object(j.jsx)("div",{className:"card ".concat(r?"show":""," ").concat(e.doTransition?"doTransition":""),ref:o,children:e.children})})}function w(e){var t=e.children;return Object(j.jsx)("div",{className:"errorBanner",children:t})}function g(e){var t=e.onSubmit,n=e.placeholder,r=s.a.useState(""),a=Object(f.a)(r,2),o=a[0],c=a[1];return Object(j.jsxs)("form",{className:"inputBar",onSubmit:function(e){return e.preventDefault(),t(o),!1},children:[Object(j.jsx)("input",{type:"text",className:"inputTextBox",id:"inputTextBox",placeholder:n,value:o,onChange:function(e){return c(e.target.value)},required:!0}),Object(j.jsx)("button",{className:"inputSearchButton",children:Object(j.jsxs)("span",{className:"text",children:["Search",Object(j.jsx)("span",{className:"arrow",children:Object(j.jsx)(m,{})})]})})]})}function O(e){var t=e.percentage;return t&&t>3&&(t=Math.max(20,t<90?t:100)),t>0?Object(j.jsx)("div",{className:"progressBar",children:Object(j.jsx)("div",{className:"progressBarInner",style:{width:"".concat(t,"%")}})}):Object(j.jsx)(s.a.Fragment,{})}n(43),n(44),n(45),n(46);var y={_data:{versionList:[],maxVersion:0,versions:{},storageString:null,instanceHelpers:{},staticHelpers:{}},setKey:function(e){return this._data.storageString=e,this},addVersion:function(e){var t=e.version,n=e.migrate,r=e.create;if(t<0)throw new Error("Cannot add version below 0 in store");if(t>0&&!n)throw new Error("Missing migration on version ".concat(t," (needed for any version above 0)"));return t>this._data.maxVersion&&(this._data.maxVersion=t),this._data.versionList.push(t),this._data.versions[t.toString()]={version:t,update:n?function(e){return n(e),e["--version"]=t,e}:null,init:r?function(){var e=r();return e["--version"]=t,e}:null},this},registerHelper:function(e){var t=e.name,n=e.helper,r=e.type;if(r||(r="instance"),!t||t.constructor!==String)throw new Error("helper name is not a string");if(!n||n.constructor!==Function)throw new Error("helper function is not a function");if(!["instance","static"].includes(r))throw new Error("helper type must be either 'instance' or 'static'");return"instance"===r?this._data.instanceHelpers[t]=n:"static"===r&&(this._data.staticHelpers[t]=n),this},build:function(){var e=this._data.versionList.sort(function(e,t){return e-t});if(e.forEach(function(e,t,n){if(0!==t&&e!==n[t-1]+1)throw new Error("Version list of store is not incremental")}),0!==e[0])throw new Error("Version 0 doesn't exist in version list of store");if(!this._data.versions[this._data.maxVersion.toString()].init)throw new Error("Missing create function on version ".concat(this._data.maxVersion," (needed for latest version of store)"));if(!this._data.storageString)throw new Error("storage key not set in store");return function(e){var t={versions:e.versions,currentVersion:e.maxVersion,id:e.storageString};return t.get=function(){var t=this,n=this,r=localStorage.getItem(this.id);if(r)try{if(!(r=JSON.parse(r)).constructor)throw console.error("Storage item for store ".concat(this.id," has not constructor")),new Error("storage item has no constructor");if(r.constructor!==Object)throw console.error("Storage item for store ".concat(this.id," is not an object")),new Error("storage item is not an object")}catch(e){console.error("Failed to parse storage item for store ".concat(this.id)),r=null}return r||(r=this.versions[this.currentVersion.toString()].init()),(r=this.update(r)).save=function(){localStorage.setItem(n.id,JSON.stringify(r))},Object.entries(e.instanceHelpers).forEach(function(e){var n=Object(f.a)(e,2),s=n[0],a=n[1];if(void 0!==r[s])throw new Error("helper name: ".concat(s," on instance of store ").concat(t.id," is reserved"));r[s]=a.bind(r)}),r}.bind(t),t.update=function(e){if(!e)throw new Error("object to update is not an object");for(void 0===e["--version"]&&(e["--version"]=0);e["--version"]!==this.currentVersion;){var t=e["--version"]||0;if(t=t.constructor!==Number||t<0?-42:(t+1).toString(),!this.versions[t]){console.error("Version not found for storage item in store ".concat(this.id,", resetting")),e=null;break}e=this.versions[t].update(e)}return null===e?(console.error("Storage item for store ".concat(this.id," has been reset due to faulty updates")),this.versions[this.currentVersion.toString()].init()):e}.bind(t),Object.entries(e.staticHelpers).forEach(function(e){var n=Object(f.a)(e,2),r=n[0],s=n[1];if(void 0!==t[r])throw new Error("helper name: ".concat(r," on store ").concat(t.id," is reserved"));t[r]=s.bind({})}),t}(this._data)}}.setKey("video-progress").addVersion({version:0,create:function(){return{}}}).build();function S(e){var t,n,r,s,a=y.get(),o=null;return"movie"===e.type&&(t=null==a||null===(n=a[e.source])||void 0===n||null===(r=n.movie)||void 0===r||null===(s=r[e.slug])||void 0===s?void 0:s.full)&&(o=Math.floor(t.currentlyAt/t.totalDuration*100)),Object(j.jsxs)("div",{className:"movieRow",onClick:function(){return e.onClick&&e.onClick()},children:["lookmovie"===e.source&&Object(j.jsx)("div",{className:"subtitleIcon",children:Object(j.jsx)("svg",{id:"subtitleIcon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM11 10H8V14H11V16H8C6.897 16 6 15.103 6 14V10C6 8.897 6.897 8 8 8H11V10ZM18 10H15V14H18V16H15C13.897 16 13 15.103 13 14V10C13 8.897 13.897 8 15 8H18V10Z",fill:"#EEEEEE"})})}),Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"titleWrapper",children:Object(j.jsxs)("div",{className:"titleText",children:[e.title," ",Object(j.jsxs)("span",{className:"year",children:["(",e.year,")"]}),Object(j.jsx)("span",{className:"seasonEpisodeSubtitle",children:e.place?" - S".concat(e.place.season,":E").concat(e.place.episode):""})]})})}),Object(j.jsxs)("div",{className:"watch",children:[Object(j.jsxs)("p",{children:["Watch ",e.type]}),Object(j.jsx)(m,{})]}),Object(j.jsx)(O,{percentage:e.percentage||o})]})}function k(e){return Object(j.jsxs)("div",{className:"progress ".concat(e.show?"":"hide"," ").concat(e.failed?"failed":""),children:[e.text&&e.text.length>0?Object(j.jsx)("p",{children:e.text}):null,Object(j.jsx)("div",{className:"bar",children:Object(j.jsx)("div",{className:"bar-inner",style:{width:(e.progress/e.steps*100).toFixed(0)+"%"}})})]})}n(47),n(48);var E=s.a.createContext(null);function N(e){var t=s.a.useState("search"),n=Object(f.a)(t,2),r=n[0],a=n[1],o=s.a.useState(""),c=Object(f.a)(o,2),u=c[0],l=c[1],d=s.a.useState(null),p=Object(f.a)(d,2),h=p[0],v=p[1];return Object(j.jsx)(E.Provider,{value:{navigate:function(e){a(e)},page:r,setStreamUrl:l,streamUrl:u,streamData:h,setStreamData:function(e){v(function(t){return Object(i.a)(Object(i.a)({},t),e)})},resetStreamData:function(){v(null)}},children:e.children})}function C(e){return s.a.useContext(E)}function D(e){var t=C(),n=t.streamData,r=t.resetStreamData,s=Object(b.e)(),a=e.size||"big",o=e.accentLink||"",c=e.accent||"";return Object(j.jsxs)("div",{children:[c.length>0?Object(j.jsxs)("p",{onClick:function(){o.length>0&&(s.push("/".concat(n.type)),r())},className:"title-accent ".concat(o.length>0?"title-accent-link":""),children:[o.length>0?Object(j.jsx)(m,{left:!0}):null,c]}):null,Object(j.jsx)("h1",{className:"title "+(a?"title-size-".concat(a):""),children:e.children})]})}function V(e){var t=e.setType,n=e.choices,r=e.selected,s=e.noWrap,a=void 0!==s&&s,o=n.findIndex(function(e){return e.value===r}),c={opacity:-1!==o?1:0,transform:"translateX(".concat(-1!==o?7*o:0,"rem)")};return Object(j.jsxs)("div",{className:"typeSelector ".concat(a?"nowrap":""),children:[n.map(function(e){return Object(j.jsx)("div",{className:"choice ".concat(r===e.value?"selected":""),onClick:function(){return t(e.value)},children:e.label},e.value)}),Object(j.jsx)("div",{className:"selectedBar",style:c})]})}n(49),n(52);var T,_=n(33),A=n(24),H=n.n(A),M="https://lookmovie.io",I="".concat("https://proxy-1.movie-web.workers.dev/?destination=","https://lookmovie125.xyz"),q="".concat("https://proxy-1.movie-web.workers.dev/?destination=").concat(M);function P(){return(P=Object(h.a)(p.a.mark(function e(t,n){var r,s,a,o,c,i,u,l,d,h,f,v,b,j;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(q,"/").concat(n,"s/search/?q=").concat(encodeURIComponent(t)),e.next=4,fetch(r).then(function(e){return e.text()});case 4:if(s=e.sent,a=new DOMParser,o=a.parseFromString(s,"text/html"),c=Array.from(o.querySelectorAll(".movie-item-style-1")),i=c.map(function(e){return{type:n,title:e.querySelector("h6 a").innerText.trim(),year:e.querySelector(".year").innerText.trim(),slug:e.querySelector("a").href.split("/").pop()}}),u=new _.a(i,{threshold:.3,distance:200,keys:["title"]}),0!==(l=u.search(t.toString()).map(function(e){return e.item})).length){e.next=13;break}return e.abrupt("return",{options:[]});case 13:if(!(l.length>1)){e.next=19;break}return d={options:[]},l.forEach(function(e){return d.options.push({title:e.title,slug:e.slug,type:e.type,year:e.year,source:"lookmovie"})}),e.abrupt("return",d);case 19:return h=l[0],f=h.title,v=h.slug,b=h.type,j=h.year,e.abrupt("return",{options:[{title:f,slug:v,type:b,year:j,source:"lookmovie"}]});case 21:e.next=26;break;case 23:return e.prev=23,e.t0=e.catch(0),e.abrupt("return",{options:[]});case 26:case"end":return e.stop()}},e,null,[[0,23]])}))).apply(this,arguments)}function F(e){return function(){return Object(h.a)(p.a.mark(function e(t){var n,r,s,a,o,c,i;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="","movie"===t.type?n="".concat(I,"/api/v1/security/movie-access?id_movie=").concat(t.id,"&token=1&sk=&step=1"):"show"===t.type&&(n="".concat(I,"/api/v1/security/episode-access?id_episode=").concat(t.id)),e.next=4,fetch(n,{headers:{phpsessid:T}}).then(function(e){return e.json()});case 4:for(r=e.sent,s=null==r?void 0:r.subtitles.filter(function(e){return"object"!=typeof e.file}),a="",o=0,c=["1080p","1080","720p","720","480p","480","auto"];o<c.length;o++)i=c[o],!r.streams[i]||r.streams[i].includes("dummy")||r.streams[i].includes("earth-1984")||a||(a=r.streams[i]);return e.abrupt("return",{videoUrl:a.startsWith("/")?"".concat(M).concat(a):a,subs:s});case 10:case"end":return e.stop()}},e)})).apply(this,arguments)}.apply(this,arguments)}function L(){return(L=Object(h.a)(p.a.mark(function e(t){var n,r,s,a,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(q,"/shows/view/").concat(t),e.next=3,fetch(n,{headers:{phpsessid:T}}).then(function(e){return e.text()});case 3:return r=e.sent,s=H.a.parse("{"+r.slice(r.indexOf("show_storage")).split("};")[0].split("= {")[1].trim()+"}"),a=[],o=[],s.seasons.forEach(function(e){a.includes(e.season)||a.push(e.season),o[e.season]||(o[e.season]=[]),o[e.season].push(e.episode)}),e.abrupt("return",{seasons:a,episodes:o});case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function U(){return(U=Object(h.a)(p.a.mark(function e(t,n,r,s){var a,o,c,i,u,l,d;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(q,"/").concat(n,"s/view/").concat(t),e.next=3,fetch(a);case 3:return(o=e.sent).headers.get("phpsessid")&&(T=o.headers.get("phpsessid")),e.next=7,o.text();case 7:if(c=e.sent,i=H.a.parse("{"+c.slice(c.indexOf("".concat(n,"_storage"))).split("};")[0].split("= {")[1].trim()+"}"),u="","movie"===n?u=i.id_movie:"show"===n&&(l=i.seasons.find(function(e){return e.season===r&&e.episode===s}))&&(u=l.id_episode),""!==u){e.next=13;break}return e.abrupt("return",{url:""});case 13:return e.next=15,F({slug:t,id:u,type:n});case 15:return d=e.sent,e.abrupt("return",{url:d.videoUrl,subtitles:d.subs});case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}var B={findContent:function(e,t){return P.apply(this,arguments)},getStreamUrl:function(e,t,n,r){return U.apply(this,arguments)},getEpisodes:function(e){return L.apply(this,arguments)}},R="".concat("https://proxy-1.movie-web.workers.dev/?destination=","https://theflix.to");function W(){return(W=Object(h.a)(p.a.mark(function e(t,n){var r,s,a,o,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.toLowerCase(),e.next=4,fetch("".concat("https://proxy-1.movie-web.workers.dev/?destination=","https://www.themoviedb.org/search/").concat("show"===n?"tv":n,"?query=").concat(r)).then(function(e){return e.text()});case 4:if(s=e.sent,a=(new DOMParser).parseFromString(s,"text/html"),o=Array.from(a.querySelectorAll("div.results > div > div.wrapper")),!((c=o.slice(0,10).map(function(e){var t,n,r,s=e.querySelector("div.details > div.wrapper > div.title > div > a").getAttribute("data-media-type");if("movie"===(s="tv"===s?"show":s))try{t=e.querySelector("div.details > div.wrapper > div.title > div > a").textContent,n=e.querySelector("div.details > div.wrapper > div.title > span").textContent.trim().split(" ")[2],r=e.querySelector("div.details > div.wrapper > div.title > div > a").getAttribute("href").split("/")[2]}catch(e){return}else if("show"===s)try{t=e.querySelector("div.details > div.wrapper > div.title > div > a > h2").textContent,n=e.querySelector("div.details > div.wrapper > div.title > span").textContent.trim().split(" ")[2],r=e.querySelector("div.details > div.wrapper > div.title > div > a").getAttribute("href").split("/")[2]}catch(e){return}return{type:s,title:t,year:n,slug:r+"-"+t.replace(/[^a-z0-9]+|\s+/gim," ").replace(/\s+/g,"-").toLowerCase(),source:"theflix"}})).length>1)){e.next=12;break}return e.abrupt("return",{options:c});case 12:return e.abrupt("return",{options:[c[0]]});case 13:e.next=19;break;case 15:throw e.prev=15,e.t0=e.catch(0),console.error(e.t0),new Error(e.t0);case 19:case"end":return e.stop()}},e,null,[[0,15]])}))).apply(this,arguments)}function z(){return(z=Object(h.a)(p.a.mark(function e(t){var n,r,s,a,o,c,i;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://proxy-1.movie-web.workers.dev/?destination=","https://www.themoviedb.org/tv/").concat(t,"/seasons")).then(function(e){return e.text()});case 3:n=e.sent,e.next=12;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,fetch("".concat("https://proxy-1.movie-web.workers.dev/?destination=","https://www.themoviedb.org/tv/").concat(t.split("-")[0],"/seasons")).then(function(e){return e.text()});case 10:(n=e.sent)&&(t=t.split("-")[0]);case 12:r=Array.from((new DOMParser).parseFromString(n,"text/html").querySelectorAll("div.column_wrapper > div.flex > div")),s=[],a=[],o=p.a.mark(function e(){var n,r,o,u;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i[c],(r=n.querySelector("div > section > div > div > div > h2 > a").textContent).includes("Season")){e.next=4;break}return e.abrupt("return","continue");case 4:return o=r.split(" ")[1],s.includes(o)||s.push(o),a[o]||(a[o]=[]),e.next=9,fetch("".concat("https://proxy-1.movie-web.workers.dev/?destination=","https://www.themoviedb.org/tv/").concat(t,"/season/").concat(o)).then(function(e){return e.text()});case 9:u=e.sent,Array.from((new DOMParser).parseFromString(u,"text/html").querySelectorAll("div.episode_list > div.card")).forEach(function(e,t){return a[o].push(++t)});case 12:case"end":return e.stop()}},e)}),c=0,i=r;case 17:if(!(c<i.length)){e.next=25;break}return e.delegateYield(o(),"t1",19);case 19:if("continue"!==e.t1){e.next=22;break}return e.abrupt("continue",22);case 22:c++,e.next=17;break;case 25:return e.abrupt("return",{seasons:s,episodes:a});case 26:case"end":return e.stop()}},e,null,[[0,6]])}))).apply(this,arguments)}function J(){return(J=Object(h.a)(p.a.mark(function e(t,n,r,s){var a,o,c,i,u;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="show"===n?"".concat(R,"/tv-show/").concat(t,"/season-").concat(r,"/episode-").concat(s):"".concat(R,"/movie/").concat(t,"?movieInfo=").concat(t),e.next=3,fetch(a).then(function(e){return e.text()});case 3:if(o=e.sent,c=Array.from((new DOMParser).parseFromString(o,"text/html").querySelectorAll("script")),!(i=c.find(function(e){return e.textContent.includes("theflixvd.b-cdn")}))){e.next=9;break}return u=JSON.parse(i.textContent),e.abrupt("return",{url:u.props.pageProps.videoUrl});case 9:return e.abrupt("return",{url:""});case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Z={findContent:function(e,t){return W.apply(this,arguments)},getStreamUrl:function(e,t,n,r){return J.apply(this,arguments)},getEpisodes:function(e){return z.apply(this,arguments)}};function G(e,t){return function(){return Object(h.a)(p.a.mark(function e(t,n){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={options:[]},e.next=3,Promise.all([B.findContent(t,n),Z.findContent(t,n)]);case 3:return e.sent.forEach(function(e){e&&e.options&&e.options.forEach(function(e){e&&r.options.push(e)})}),e.abrupt("return",r);case 6:case"end":return e.stop()}},e)})).apply(this,arguments)}.apply(this,arguments)}function K(e,t,n,r,s){return function(){return Object(h.a)(p.a.mark(function e(t,n,r,s,a){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r,e.next="lookmovie"===e.t0?3:"theflix"===e.t0?6:9;break;case 3:return e.next=5,B.getStreamUrl(t,n,s,a);case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,Z.getStreamUrl(t,n,s,a);case 8:return e.abrupt("return",e.sent);case 9:return e.abrupt("return");case 10:case"end":return e.stop()}},e)})).apply(this,arguments)}.apply(this,arguments)}function X(e,t){return function(){return Object(h.a)(p.a.mark(function e(t,n){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next="lookmovie"===e.t0?3:"theflix"===e.t0?6:9;break;case 3:return e.next=5,B.getEpisodes(t);case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,Z.getEpisodes(t);case 8:return e.abrupt("return",e.sent);case 9:return e.abrupt("return");case 10:case"end":return e.stop()}},e)})).apply(this,arguments)}.apply(this,arguments)}function Y(){var e,t=C(),n=t.navigate,r=t.setStreamUrl,a=t.setStreamData,o=Object(b.e)(),c=Object(b.f)("/:type"),d=null==c||null===(e=c.params)||void 0===e?void 0:e.type,O=Object(b.f)("/:type/:source/:title/:slug"),E=s.a.useState([]),N=Object(f.a)(E,2),T=N[0],_=N[1],A=s.a.useState(0),H=Object(f.a)(A,2),M=H[0],I=H[1],q=s.a.useState(""),P=Object(f.a)(q,2),F=P[0],L=P[1],U=s.a.useState(!1),B=Object(f.a)(U,2),R=B[0],W=B[1],z=s.a.useState(!1),J=Object(f.a)(z,2),Z=J[0],Y=J[1],Q=s.a.useState(!1),$=Object(f.a)(Q,2),ee=$[0],te=$[1],ne=s.a.useState("search"),re=Object(f.a)(ne,2),se=re[0],ae=re[1],oe=s.a.useState([]),ce=Object(f.a)(oe,2),ie=ce[0],ue=ce[1],le=function(e){I(4),L(e),W(!0)};function de(e,t,n,r,s){return pe.apply(this,arguments)}function pe(){return(pe=Object(h.a)(p.a.mark(function e(t,s,o,c,i){var u,l,d,h,f,v,b,j;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r(""),e.prev=1,I(2),L('Getting stream for "'.concat(t,'"')),u=[],l=[],"show"!==o){e.next=12;break}return e.next=9,X(s,c);case 9:d=e.sent,u=d.seasons,l=d.episodes;case 12:if(h="",f=[],"movie"!==o){e.next=24;break}return e.next=17,K(s,o,c);case 17:if(v=e.sent,b=v.url,j=v.subtitles,""!==b){e.next=22;break}return e.abrupt("return",le("Not found: ".concat(t)));case 22:h=b,f=j;case 24:I(4),r(h),a({title:t,type:o,seasons:u,episodes:l,slug:s,source:c,year:i,subtitles:f}),L("Streaming..."),n("movie"),e.next=35;break;case 31:e.prev=31,e.t0=e.catch(1),console.error(e.t0),le("Failed to get stream");case 35:case"end":return e.stop()}},e,null,[[1,31]])}))).apply(this,arguments)}function he(){return(he=Object(h.a)(p.a.mark(function e(t,n){var r,s,a,i,u,l,d,h;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return W(!1),L("Searching for ".concat(n,' "').concat(t,'"')),I(1),Y(!1),e.prev=4,e.next=7,G(t,n);case 7:if(r=e.sent,0!==(s=r.options).length){e.next=13;break}return e.abrupt("return",le("Could not find that ".concat(n)));case 13:if(!(s.length>1)){e.next=19;break}return I(2),L("Choose your ".concat(n)),_(s),Y(!0),e.abrupt("return");case 19:a=s[0],i=a.title,u=a.slug,l=a.type,d=a.source,h=a.year,o.push("".concat(c.url,"/").concat(d,"/").concat(i,"/").concat(u)),de(i,u,l,d,h),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(4),console.error(e.t0),le("Failed to watch ".concat(n));case 28:case"end":return e.stop()}},e,null,[[4,24]])}))).apply(this,arguments)}return s.a.useEffect(function(){function e(){return(e=Object(h.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://proxy-1.movie-web.workers.dev/?destination=").catch(function(){te("Our content provider is currently offline, apologies.")});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),s.a.useEffect(function(){if(O){if("movie"!==(null==O?void 0:O.params.type)&&"show"!==O.params.type)return te("Failed to find movie. Please try searching below.");de(O.params.title,O.params.slug,O.params.type,O.params.source)}},[]),s.a.useEffect(function(){var e=y.get(),t=[];Object.keys(e).forEach(function(n){var r,s,a,o,c,d=[].concat(Object(l.a)(Object.entries(null!==(r=null===(s=e[n])||void 0===s?void 0:s.show)&&void 0!==r?r:{})),Object(l.a)(Object.entries(null!==(a=null===(o=e[n])||void 0===o?void 0:o.movie)&&void 0!==a?a:{}))),p=Object(u.a)(d);try{for(p.s();!(c=p.n()).done;)for(var h=Object(f.a)(c.value,2),v=h[0],b=h[1],j=0,m=Object.values(b);j<m.length;j++){var x=m[j],w={slug:v,data:x,type:x.show?"show":"movie",percentageDone:Math.floor(x.currentlyAt/x.totalDuration*100),source:n};if(x.meta)if(w.percentageDone<90)t.push(w);else{var g,O,y,S,k;if(!x.show)continue;var E={};if(x.meta.episodes[x.show.season].includes("".concat(parseInt(x.show.episode)+1)))E.season=x.show.season,E.episode="".concat(parseInt(x.show.episode)+1),w.percentageDone=0;else{if(!(null===(g=x.meta.episodes)||void 0===g||null===(O=g["".concat(parseInt(x.show.season)+1)])||void 0===O?void 0:O[0]))continue;E.season="".concat(parseInt(x.show.season)+1),E.episode=x.meta.episodes["".concat(parseInt(x.show.season)+1)][0],w.percentageDone=0}if(w.data.show=Object(i.a)({},E),null==e||null===(y=e[n])||void 0===y||null===(S=y.show)||void 0===S||null===(k=S[v])||void 0===k?void 0:k["".concat(w.data.show.season,"-").concat(w.data.show.episode)])continue;t.push(w)}}}catch(e){p.e(e)}finally{p.f()}t=t.sort(function(e,t){return t.data.updatedAt-e.data.updatedAt}),ue(t)})},[]),!d||"movie"!==d&&"show"!==d?Object(j.jsx)(b.a,{to:"/movie"}):Object(j.jsxs)("div",{className:"cardView",children:[Object(j.jsx)(v.a,{children:Object(j.jsxs)("title",{children:["movie"===d?"Movies":"Shows"," | Alex"]})}),Object(j.jsxs)("nav",{children:[Object(j.jsx)("span",{className:"search"===se?"selected-link":"",onClick:function(){return ae("search")},children:"Search"}),ie.length>0?Object(j.jsx)("span",{className:"watching"===se?"selected-link":"",onClick:function(){return ae("watching")},children:"Continue watching"}):""]}),"search"===se?Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsxs)(x,{children:[ee?Object(j.jsx)(w,{children:ee}):"",Object(j.jsx)(D,{accent:"hi :3",children:"What do you wanna watch?"}),Object(j.jsx)(V,{setType:function(e){return o.push("/".concat(e))},choices:[{label:"Movie",value:"movie"},{label:"TV Show",value:"show"}],noWrap:!0,selected:d}),Object(j.jsx)(g,{placeholder:"movie"===d?"Search Movies...":"Search TV Shows...",onSubmit:function(e){return function(e,t){return he.apply(this,arguments)}(e,d)}}),Object(j.jsx)(k,{show:M>0,failed:R,progress:M,steps:4,text:F})]}),Object(j.jsxs)(x,{show:Z,doTransition:!0,children:[Object(j.jsxs)(D,{size:"medium",children:["Results for ",d,"s like that:"]}),Object.entries(T.reduce(function(e,t){return e[t.source]||(e[t.source]=[]),e[t.source].push(t),e},{})).map(function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"source",children:e[0]}),e[1].map(function(e,t){return Object(j.jsx)(S,{title:e.title,slug:e.slug,type:e.type,year:e.year,source:e.source,onClick:function(){o.push("".concat(c.url,"/").concat(e.source,"/").concat(e.title,"/").concat(e.slug)),Y(!1),de(e.title,e.slug,e.type,e.source,e.year)}},t)})]},e[0])})]})]}):Object(j.jsx)(s.a.Fragment,{}),ie.length>0&&"watching"===se?Object(j.jsxs)(x,{children:[Object(j.jsx)(D,{children:"Continue watching"}),Object(j.jsx)(k,{show:M>0,failed:R,progress:M,steps:4,text:F}),null==ie?void 0:ie.map(function(e,t){return Object(j.jsx)(S,{title:e.data.meta.title,slug:e.data.meta.slug,type:e.type,year:e.data.meta.year,source:e.source,place:e.data.show,percentage:e.percentageDone,deletable:!0,onClick:function(){"show"===e.type?o.push("/show/".concat(e.source,"/").concat(e.data.meta.title,"/").concat(e.slug,"/season/").concat(e.data.show.season,"/episode/").concat(e.data.show.episode)):o.push("/movie/".concat(e.source,"/").concat(e.data.meta.title,"/").concat(e.slug)),Y(!1),de(e.data.meta.title,e.data.meta.slug,e.type,e.source,e.data.meta.year)}},t)})]}):Object(j.jsx)(s.a.Fragment,{}),Object(j.jsxs)("div",{className:"topRightCredits",children:[Object(j.jsxs)("a",{href:"https://alex-i7.cf/",target:"_blank",rel:"noreferrer",children:["Main Site ",Object(j.jsx)(m,{})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("a",{href:"https://discord.gg/HTWuC4V5BR",target:"_blank",rel:"noreferrer",children:["Discord Server ",Object(j.jsx)(m,{})]})]})]})}n(53);var Q=n(20),$=n.n(Q);function ee(e){return Object(j.jsx)("div",{className:"videoPlaceholder",children:Object(j.jsx)("div",{className:"videoPlaceholderBox",children:Object(j.jsx)("p",{children:e.children})})})}function te(e){var t=e.streamUrl,n=e.loading,r=e.setProgress,a=e.videoRef,o=e.startTime,c=e.streamData,i=s.a.useState(!1),u=Object(f.a)(i,2),l=u[0],d=u[1];function p(){o&&(a.current.currentTime=o)}return s.a.useEffect(function(){if(!t.includes(".mp4")){if(d(!1),!a||!a.current||!t||0===t.length||n)return;var e=new $.a;if(!$.a.isSupported()&&a.current.canPlayType("application/vnd.apple.mpegurl"))return void(a.current.src=t);if(!$.a.isSupported())return void d(!0);e.attachMedia(a.current),e.loadSource(t)}},[a,t,n]),l?Object(j.jsx)(ee,{children:"Your browser is not supported"}):n?Object(j.jsx)(ee,{children:"Loading episode..."}):t&&0!==t.length?t.includes(".mp4")?Object(j.jsxs)("video",{crossOrigin:"anonymous",className:"videoElement",ref:a,controls:!0,autoPlay:!0,onProgress:r,onLoadedData:p,children:[c.subtitles&&c.subtitles.map(function(e,t){return Object(j.jsx)("track",{kind:"captions",label:e.language,src:"".concat("https://proxy-1.movie-web.workers.dev/?destination=","https://lookmovie.io").concat(e.file)},t)}),Object(j.jsx)("source",{src:t,type:"video/mp4"})]}):Object(j.jsx)("video",{crossOrigin:"anonymous",className:"videoElement",ref:a,controls:!0,autoPlay:!0,onProgress:r,onLoadedData:p,children:c.subtitles&&c.subtitles.map(function(e,t){return Object(j.jsx)("track",{kind:"captions",label:e.language,src:"".concat("https://proxy-1.movie-web.workers.dev/?destination=","https://lookmovie.io").concat(e.file)},t)})}):Object(j.jsx)(ee,{children:"No video selected"})}function ne(e){var t=e.setType,n=e.choices,r=e.selected;return Object(j.jsx)("div",{className:"numberSelector",children:n.map(function(e){return Object(j.jsx)("div",{className:"choiceWrapper",children:Object(j.jsxs)("div",{className:"choice ".concat(r&&r===e.value?"selected":""),onClick:function(){return t(e.value)},children:[e.label,Object(j.jsx)(O,{percentage:e.percentage})]})},e.value)})})}function re(e){var t=e.option,n=e.onClick;return Object(j.jsxs)("div",{className:"option",onClick:n,children:[Object(j.jsx)("input",{type:"radio",className:"radio",id:t.id}),Object(j.jsx)("label",{htmlFor:t.id,children:Object(j.jsx)("div",{className:"item",children:t.name})})]})}function se(e){var t=e.options,n=e.selectedItem,s=e.setSelectedItem;if(!Array.isArray(t))throw new Error("Items must be an array!");var a=Object(r.useState)(!1),o=Object(f.a)(a,2),c=o[0],i=o[1],u=Object(r.useRef)(),l=function(e){u.current.contains(e.target)||d()},d=function(){i(!1)};return Object(r.useEffect)(function(){return document.addEventListener("mousedown",l),function(){document.removeEventListener("mousedown",l)}},[]),Object(j.jsxs)("div",{className:"select-box",ref:u,onClick:function(){return i(function(e){return!e})},children:[Object(j.jsx)("div",{className:"options-container"+(c?" active":""),children:t.map(function(e,t){return Object(j.jsx)(re,{option:e,onClick:function(e){return function(e,t,n){e.stopPropagation(),s(n),d()}(e,0,t)}},t)})}),Object(j.jsx)("div",{className:"selected",children:t?Object(j.jsx)(re,{option:t[n]}):null})]})}function ae(e){var t=e.setSelectedSeason,n=e.selectedSeason,s=e.setEpisode,a=e.seasons,o=e.episodes,c=e.currentSeason,i=e.currentEpisode,u=e.streamData,l=o?o.map(function(e){var t,r,s,a=y.get(),o=0,c=0,i=null==a||null===(t=a[u.source])||void 0===t||null===(r=t[u.type])||void 0===r||null===(s=r[u.slug])||void 0===s?void 0:s["".concat(n,"-").concat(e)];i&&(o=i.currentlyAt,c=i.totalDuration);var l=Math.round(o/c*100);return{value:e.toString(),label:e,percentage:l}}):[],d=function(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(f.a)(e,2),n=t[0],s=t[1];return Object(r.useEffect)(function(){function e(){s({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),n}();return Object(j.jsxs)("div",{className:"episodeSelector",children:[a.length>0&&(d.width<=768||a.length>4)?Object(j.jsx)(se,{setSelectedItem:function(e){return t(a[e])},selectedItem:a.findIndex(function(e){return e===n}),options:a.map(function(e){return{id:e,name:"Season ".concat(e)}})}):Object(j.jsx)(V,{setType:t,selected:n,choices:a.map(function(e){return{value:e.toString(),label:"Season ".concat(e)}})}),Object(j.jsx)("br",{}),Object(j.jsx)(ne,{setType:function(e){return s({episode:e,season:n})},choices:l,selected:n.toString()===c?i:null})]})}function oe(e){var t=Object(b.f)("/:type/:source/:title/:slug"),n=Object(b.f)("/:type/:source/:title/:slug/season/:season/episode/:episode"),r=Object(b.e)(),a=C(),o=a.streamUrl,c=a.streamData,i=a.setStreamUrl,u=s.a.useState([]),l=Object(f.a)(u,2),d=l[0],p=l[1],h=s.a.useState([]),m=Object(f.a)(h,2),w=m[0],g=m[1],O=s.a.useState(!1),S=Object(f.a)(O,2),k=S[0],E=S[1],N=s.a.useState("1"),V=Object(f.a)(N,2),T=V[0],_=V[1],A=s.a.useState(0),H=Object(f.a)(A,2),M=H[0],I=H[1],q=s.a.useRef(null),P=s.a.useRef(!1),F=(null==n?void 0:n.params.season)||"1",L=(null==n?void 0:n.params.episode)||"1";return s.a.useEffect(function(){"show"!==c.type||n||r.replace("".concat(t.url,"/season/1/episode/1"))},[c.type,n,r,t.url]),s.a.useEffect(function(){"show"===c.type&&n&&_(n.params.season.toString())},[]),s.a.useEffect(function(){var e=!1;return"show"!==c.type?function(){e=!0}:L?(E(!0),K(c.slug,c.type,c.source,F,L).then(function(t){var n=t.url,r=t.subtitles;e||(c.subtitles=r,i(n),E(!1))}).catch(function(t){e||console.error(t)}),function(){e=!0}):(E(!1),void i(""))},[L,c,i,F]),s.a.useEffect(function(){"show"===c.type&&(p(c.seasons),g(c.episodes[T]))},[c.seasons,c.episodes,c.type,T]),s.a.useEffect(function(){var e,t,n,r,s=y.get(),a="show"===c.type?"".concat(F,"-").concat(L):"full",o=null==s||null===(e=s[c.source])||void 0===e||null===(t=e[c.type])||void 0===t||null===(n=t[c.slug])||void 0===n||null===(r=n[a])||void 0===r?void 0:r.currentlyAt;I(o)},[t,n]),Object(j.jsxs)("div",{className:"cardView showType-".concat(c.type),children:[Object(j.jsx)(v.a,{children:Object(j.jsxs)("title",{children:[c.title,"show"===c.type?" | S".concat(F,"E").concat(L):""," | Alex"]})}),Object(j.jsxs)(x,{fullWidth:!0,children:[Object(j.jsx)(D,{accent:"Return to home",accentLink:"search",children:c.title}),"show"===c.type?Object(j.jsxs)(D,{size:"small",children:["Season ",F,": Episode ",L]}):void 0,Object(j.jsx)(te,{streamUrl:o,loading:k,setProgress:function(e){var t=y.get();t[c.source]||(t[c.source]={}),t[c.source][c.type]||(t[c.source][c.type]={}),t[c.source][c.type][c.slug]||(t[c.source][c.type][c.slug]={});var n="show"===c.type?"".concat(F,"-").concat(L):"full";t[c.source][c.type][c.slug][n]={currentlyAt:Math.floor(e.currentTarget.currentTime),totalDuration:Math.floor(e.currentTarget.duration),updatedAt:Date.now(),meta:c},"show"===c.type&&(t[c.source][c.type][c.slug][n].show={season:F,episode:L}),t.save()},videoRef:q,startTime:M,streamData:c}),"show"===c.type?Object(j.jsx)(ae,{setSelectedSeason:_,selectedSeason:T,setEpisode:function(e){var n=e.season,s=e.episode;r.push("".concat(t.url,"/season/").concat(n,"/episode/").concat(s)),P.current=!1},seasons:d,episodes:w,currentSeason:F,currentEpisode:L,streamData:c}):""]})]})}function ce(){return C().streamData?Object(j.jsx)(oe,{}):Object(j.jsx)(Y,{})}n(54),n(55),n(56),n(57),n(58),n(59);o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(c.a,{children:Object(j.jsx)(function(){return Object(j.jsx)(N,{children:Object(j.jsx)(ce,{})})},{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.9912236b.chunk.js.map
//Update
