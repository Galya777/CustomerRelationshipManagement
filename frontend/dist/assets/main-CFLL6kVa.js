(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const Wi="modulepreload",Yi=function(t){return"/"+t},Wt={},Ce=function(e,r,n){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(r.map(l=>{if(l=Yi(l),l in Wt)return;Wt[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Wi,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})};function ze(t){return t=t||[],Array.isArray(t)?t:[t]}function S(t){return`[Vaadin.Router] ${t}`}function Ki(t){if(typeof t!="object")return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}const Ie="module",De="nomodule",ht=[Ie,De];function Yt(t){if(!t.match(/.+\.[m]?js$/))throw new Error(S(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function Yr(t){if(!t||!A(t.path))throw new Error(S('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,r=["component","redirect","bundle"];if(!q(t.action)&&!Array.isArray(t.children)&&!q(t.children)&&!Ue(e)&&!r.some(n=>A(t[n])))throw new Error(S(`Expected route config "${t.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(e)if(A(e))Yt(e);else if(ht.some(n=>n in e))ht.forEach(n=>n in e&&Yt(e[n]));else throw new Error(S('Expected route bundle to include either "'+De+'" or "'+Ie+'" keys, or both'));t.redirect&&["bundle","component"].forEach(n=>{n in t&&console.warn(S(`Route config "${t.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function Kt(t){ze(t).forEach(e=>Yr(e))}function Gt(t,e){let r=document.head.querySelector('script[src="'+t+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",t),e===Ie?r.setAttribute("type",Ie):e===De&&r.setAttribute(De,""),r.async=!0),new Promise((n,i)=>{r.onreadystatechange=r.onload=o=>{r.__dynamicImportLoaded=!0,n(o)},r.onerror=o=>{r.parentNode&&r.parentNode.removeChild(r),i(o)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&n()})}function Gi(t){return A(t)?Gt(t):Promise.race(ht.filter(e=>e in t).map(e=>Gt(t[e],e)))}function pe(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function Ue(t){return typeof t=="object"&&!!t}function q(t){return typeof t=="function"}function A(t){return typeof t=="string"}function Kr(t){const e=new Error(S(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const X=new class{};function Ji(t){const e=t.port,r=t.protocol,o=r==="http:"&&e==="80"||r==="https:"&&e==="443"?t.hostname:t.host;return`${r}//${o}`}function Jt(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const r=t.composedPath?t.composedPath():t.path||[];for(let a=0;a<r.length;a++){const l=r[a];if(l.nodeName&&l.nodeName.toLowerCase()==="a"){e=l;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Ji(e))!==window.location.origin)return;const{pathname:i,search:o,hash:s}=e;pe("go",{pathname:i,search:o,hash:s})&&(t.preventDefault(),t&&t.type==="click"&&window.scrollTo(0,0))}const Xi={activate(){window.document.addEventListener("click",Jt)},inactivate(){window.document.removeEventListener("click",Jt)}},Qi=/Trident/.test(navigator.userAgent);Qi&&!q(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var r=document.createEvent("Event");return r.initEvent(t,!!e.bubbles,!!e.cancelable),r.state=e.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function Xt(t){if(t.state==="vaadin-router-ignore")return;const{pathname:e,search:r,hash:n}=window.location;pe("go",{pathname:e,search:r,hash:n})}const Zi={activate(){window.addEventListener("popstate",Xt)},inactivate(){window.removeEventListener("popstate",Xt)}};var ne=ei,en=Ct,tn=sn,rn=Xr,nn=Zr,Gr="/",Jr="./",on=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ct(t,e){for(var r=[],n=0,i=0,o="",s=e&&e.delimiter||Gr,a=e&&e.delimiters||Jr,l=!1,c;(c=on.exec(t))!==null;){var d=c[0],u=c[1],h=c.index;if(o+=t.slice(i,h),i=h+d.length,u){o+=u[1],l=!0;continue}var p="",m=t[i],v=c[2],w=c[3],y=c[4],_=c[5];if(!l&&o.length){var C=o.length-1;a.indexOf(o[C])>-1&&(p=o[C],o=o.slice(0,C))}o&&(r.push(o),o="",l=!1);var se=p!==""&&m!==void 0&&m!==p,Se=_==="+"||_==="*",qi=_==="?"||_==="*",Vt=p||s,qt=w||y;r.push({name:v||n++,prefix:p,delimiter:Vt,optional:qi,repeat:Se,partial:se,pattern:qt?an(qt):"[^"+L(Vt)+"]+?"})}return(o||i<t.length)&&r.push(o+t.substr(i)),r}function sn(t,e){return Xr(Ct(t,e))}function Xr(t){for(var e=new Array(t.length),r=0;r<t.length;r++)typeof t[r]=="object"&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(n,i){for(var o="",s=i&&i.encode||encodeURIComponent,a=0;a<t.length;a++){var l=t[a];if(typeof l=="string"){o+=l;continue}var c=n?n[l.name]:void 0,d;if(Array.isArray(c)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but got array');if(c.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(d=s(c[u],l),!e[a].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'"');o+=(u===0?l.prefix:l.delimiter)+d}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(d=s(String(c),l),!e[a].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but got "'+d+'"');o+=l.prefix+d;continue}if(l.optional){l.partial&&(o+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be '+(l.repeat?"an array":"a string"))}return o}}function L(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function an(t){return t.replace(/([=!:$/()])/g,"\\$1")}function Qr(t){return t&&t.sensitive?"":"i"}function ln(t,e){if(!e)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}function cn(t,e,r){for(var n=[],i=0;i<t.length;i++)n.push(ei(t[i],e,r).source);return new RegExp("(?:"+n.join("|")+")",Qr(r))}function dn(t,e,r){return Zr(Ct(t,r),e,r)}function Zr(t,e,r){r=r||{};for(var n=r.strict,i=r.start!==!1,o=r.end!==!1,s=L(r.delimiter||Gr),a=r.delimiters||Jr,l=[].concat(r.endsWith||[]).map(L).concat("$").join("|"),c=i?"^":"",d=t.length===0,u=0;u<t.length;u++){var h=t[u];if(typeof h=="string")c+=L(h),d=u===t.length-1&&a.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+L(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.partial?c+=L(h.prefix)+"("+p+")?":c+="(?:"+L(h.prefix)+"("+p+"))?":c+=L(h.prefix)+"("+p+")"}}return o?(n||(c+="(?:"+s+")?"),c+=l==="$"?"$":"(?="+l+")"):(n||(c+="(?:"+s+"(?="+l+"))?"),d||(c+="(?="+s+"|"+l+")")),new RegExp(c,Qr(r))}function ei(t,e,r){return t instanceof RegExp?ln(t,e):Array.isArray(t)?cn(t,e,r):dn(t,e,r)}ne.parse=en;ne.compile=tn;ne.tokensToFunction=rn;ne.tokensToRegExp=nn;const{hasOwnProperty:un}=Object.prototype,pt=new Map;pt.set("|false",{keys:[],pattern:/(?:)/});function Qt(t){try{return decodeURIComponent(t)}catch{return t}}function hn(t,e,r,n,i){r=!!r;const o=`${t}|${r}`;let s=pt.get(o);if(!s){const c=[];s={keys:c,pattern:ne(t,c,{end:r,strict:t===""})},pt.set(o,s)}const a=s.pattern.exec(e);if(!a)return null;const l=Object.assign({},i);for(let c=1;c<a.length;c++){const d=s.keys[c-1],u=d.name,h=a[c];(h!==void 0||!un.call(l,u))&&(d.repeat?l[u]=h?h.split(d.delimiter).map(Qt):[]:l[u]=h&&Qt(h))}return{path:a[0],keys:(n||[]).concat(s.keys),params:l}}function ti(t,e,r,n,i){let o,s,a=0,l=t.path||"";return l.charAt(0)==="/"&&(r&&(l=l.substr(1)),r=!0),{next(c){if(t===c)return{done:!0};const d=t.__children=t.__children||t.children;if(!o&&(o=hn(l,e,!d,n,i),o))return{done:!1,value:{route:t,keys:o.keys,params:o.params,path:o.path}};if(o&&d)for(;a<d.length;){if(!s){const h=d[a];h.parent=t;let p=o.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),s=ti(h,e.substr(p),r,o.keys,o.params)}const u=s.next(c);if(!u.done)return{done:!1,value:u.value};s=null,a++}return{done:!0}}}}function pn(t){if(q(t.route.action))return t.route.action(t)}function fn(t,e){let r=e;for(;r;)if(r=r.parent,r===t)return!0;return!1}function mn(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const r=(t.route||{}).path;return r&&(e+=` Resolution had failed on route: '${r}'`),e}function _n(t,e){const{route:r,path:n}=e;if(r&&!r.__synthetic){const i={path:n,route:r};if(!t.chain)t.chain=[];else if(r.parent){let o=t.chain.length;for(;o--&&t.chain[o].route&&t.chain[o].route!==r.parent;)t.chain.pop()}t.chain.push(i)}}class ge{constructor(e,r={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||pn,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Kt(e);const r=[...ze(e)];this.root.__children=r}addRoutes(e){return Kt(e),this.root.__children.push(...ze(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const r=Object.assign({},this.context,A(e)?{pathname:e}:e),n=ti(this.root,this.__normalizePathname(r.pathname),this.baseUrl),i=this.resolveRoute;let o=null,s=null,a=r;function l(c,d=o.value.route,u){const h=u===null&&o.value.route;return o=s||n.next(h),s=null,!c&&(o.done||!fn(d,o.value.route))?(s=o,Promise.resolve(X)):o.done?Promise.reject(Kr(r)):(a=Object.assign(a?{chain:a.chain?a.chain.slice(0):[]}:{},r,o.value),_n(a,o.value),Promise.resolve(i(a)).then(p=>p!=null&&p!==X?(a.result=p.result||p,a):l(c,d,p)))}return r.next=l,Promise.resolve().then(()=>l(!0,this.root)).catch(c=>{const d=mn(a);if(c?console.warn(d):c=new Error(d),c.context=c.context||a,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return a.result=this.errorHandler(c),a;throw c})}static __createUrl(e,r){return new URL(e,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const r=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,r).href;if(n.slice(0,r.length)===r)return n.slice(r.length)}}ge.pathToRegexp=ne;const{pathToRegexp:Zt}=ge,er=new Map;function ri(t,e,r){const n=e.name||e.component;if(n&&(t.has(n)?t.get(n).push(e):t.set(n,[e])),Array.isArray(r))for(let i=0;i<r.length;i++){const o=r[i];o.parent=e,ri(t,o,o.__children||o.children)}}function tr(t,e){const r=t.get(e);if(r&&r.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return r&&r[0]}function rr(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function gn(t,e={}){if(!(t instanceof ge))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(n,i)=>{let o=tr(r,n);if(!o&&(r.clear(),ri(r,t.root,t.root.__children),o=tr(r,n),!o))throw new Error(`Route "${n}" not found`);let s=er.get(o.fullPath);if(!s){let l=rr(o),c=o.parent;for(;c;){const p=rr(c);p&&(l=p.replace(/\/$/,"")+"/"+l.replace(/^\//,"")),c=c.parent}const d=Zt.parse(l),u=Zt.tokensToFunction(d),h=Object.create(null);for(let p=0;p<d.length;p++)A(d[p])||(h[d[p].name]=!0);s={toPath:u,keys:h},er.set(l,s),o.fullPath=l}let a=s.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const l={},c=Object.keys(i);for(let u=0;u<c.length;u++){const h=c[u];s.keys[h]||(l[h]=i[h])}const d=e.stringifyQueryParams(l);d&&(a+=d.charAt(0)==="?"?d:`?${d}`)}return a}}let ir=[];function yn(t){ir.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),ir=t}const bn=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},vn=(t,e)=>{const r=()=>{t.removeEventListener("animationend",r),e()};t.addEventListener("animationend",r)};function nr(t,e){return t.classList.add(e),new Promise(r=>{if(bn(t)){const n=t.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;t.setAttribute("style",`position: absolute; ${i}`),vn(t,()=>{t.classList.remove(e),t.removeAttribute("style"),r()})}else t.classList.remove(e),r()})}const wn=256;function tt(t){return t!=null}function Pn(t){const e=Object.assign({},t);return delete e.next,e}function x({pathname:t="",search:e="",hash:r="",chain:n=[],params:i={},redirectFrom:o,resolver:s},a){const l=n.map(c=>c.route);return{baseUrl:s&&s.baseUrl||"",pathname:t,search:e,hash:r,routes:l,route:a||l.length&&l[l.length-1]||null,params:i,redirectFrom:o,getUrl:(c={})=>Ne(T.pathToRegexp.compile(ii(l))(Object.assign({},i,c)),s)}}function or(t,e){const r=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:r}}}function En(t,e){e.location=x(t);const r=t.chain.map(n=>n.route).indexOf(t.route);return t.chain[r].element=e,e}function ke(t,e,r){if(q(t))return t.apply(r,e)}function sr(t,e,r){return n=>{if(n&&(n.cancel||n.redirect))return n;if(r)return ke(r[t],e,r)}}function xn(t,e){if(!Array.isArray(t)&&!Ue(t))throw new Error(S(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const r=ze(t);for(let n=0;n<r.length;n++)Yr(r[n]),e.__children.push(r[n])}function Te(t){if(t&&t.length){const e=t[0].parentNode;for(let r=0;r<t.length;r++)e.removeChild(t[r])}}function Ne(t,e){const r=e.__effectiveBaseUrl;return r?e.constructor.__createUrl(t.replace(/^\//,""),r).pathname:t}function ii(t){return t.map(e=>e.path).reduce((e,r)=>r.length?e.replace(/\/$/,"")+"/"+r.replace(/^\//,""):e,"")}class T extends ge{constructor(e,r){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&ge.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},r)),this.resolveRoute=s=>this.__resolveRoute(s);const o=T.NavigationTrigger;T.setTriggers.apply(T,Object.keys(o).map(s=>o[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=x({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const r=e.route;let n=Promise.resolve();q(r.children)&&(n=n.then(()=>r.children(Pn(e))).then(o=>{!tt(o)&&!q(r.children)&&(o=r.children),xn(o,r)}));const i={redirect:o=>or(e,o),component:o=>{const s=document.createElement(o);return this.__createdByRouter.set(s,!0),s}};return n.then(()=>{if(this.__isLatestRender(e))return ke(r.action,[e,i],r)}).then(o=>{if(tt(o)&&(o instanceof HTMLElement||o.redirect||o===X))return o;if(A(r.redirect))return i.redirect(r.redirect);if(r.bundle)return Gi(r.bundle).then(()=>{},()=>{throw new Error(S(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(o=>{if(tt(o))return o;if(A(r.component))return i.component(r.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),r||this.__onNavigationEvent(),this.ready}render(e,r){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},A(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then(o=>this.__fullyResolveChain(o)).then(o=>{if(this.__isLatestRender(o)){const s=this.__previousContext;if(o===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=x(o),r&&this.__updateBrowserHistory(o,n===1),pe("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.__copyUnchangedElements(o,s),this.__previousContext=o,this.location;this.__addAppearingContent(o,s);const a=this.__animateIfNeeded(o);return this.__runOnAfterEnterCallbacks(o),this.__runOnAfterLeaveCallbacks(o,s),a.then(()=>{if(this.__isLatestRender(o))return this.__removeDisappearingContent(),this.__previousContext=o,this.location})}}).catch(o=>{if(n===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(i),Te(this.__outlet&&this.__outlet.children),this.location=x(Object.assign(i,{resolver:this})),pe("error",Object.assign({router:this,error:o},i)),o}),this.ready}__fullyResolveChain(e,r=e){return this.__findComponentContextAfterAllRedirects(r).then(n=>{const o=n!==r?n:e,a=Ne(ii(n.chain),n.resolver)===n.pathname,l=(c,d=c.route,u)=>c.next(void 0,d,u).then(h=>h===null||h===X?a?c:d.parent!==null?l(c,d.parent,h):h:h);return l(n).then(c=>{if(c===null||c===X)throw Kr(o);return c&&c!==X&&c!==n?this.__fullyResolveChain(o,c):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const r=e.result;return r instanceof HTMLElement?(En(e,r),Promise.resolve(e)):r.redirect?this.__redirect(r.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(S(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Ki(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(r=>r===this.__previousContext||r===e?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(e){const r=this.__previousContext||{},n=r.chain||[],i=e.chain;let o=Promise.resolve();const s=()=>({cancel:!0}),a=l=>or(e,l);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let l=0;l<Math.min(n.length,i.length)&&!(n[l].route!==i[l].route||n[l].path!==i[l].path&&n[l].element!==i[l].element||!this.__isReusableElement(n[l].element,i[l].element));l=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,r.result),e.__skipAttach){for(let l=i.length-1;l>=0;l--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:s},n[l]);for(let l=0;l<i.length;l++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:s,redirect:a},i[l]),n[l].element.location=x(e,n[l].route)}else for(let l=n.length-1;l>=e.__divergedChainIndex;l--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:s},n[l])}if(!e.__skipAttach)for(let l=0;l<i.length;l++)l<e.__divergedChainIndex?l<n.length&&n[l].element&&(n[l].element.location=x(e,n[l].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:s,redirect:a},i[l]),i[l].element&&(i[l].element.location=x(e,i[l].route)));return o.then(l=>{if(l){if(l.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(l.redirect)return this.__redirect(l.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,r,n,i){const o=x(r);return e.then(s=>{if(this.__isLatestRender(r))return sr("onBeforeLeave",[o,n,this],i.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(e,r,n,i){const o=x(r,i.route);return e.then(s=>{if(this.__isLatestRender(r))return sr("onBeforeEnter",[o,n,this],i.element)(s)})}__isReusableElement(e,r){return e&&r?this.__createdByRouter.get(e)&&this.__createdByRouter.get(r)?e.localName===r.localName:e===r:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,r,n){if(r>wn)throw new Error(S(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(r||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(S(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:r="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==r||window.location.hash!==n){const o=i?"replaceState":"pushState";window.history[o](null,document.title,e+r+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,r){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const o=r&&r.chain[i].element;if(o)if(o.parentNode===n)e.chain[i].element=o,n=o;else break}return n}__addAppearingContent(e,r){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,r);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(o=>this.__addedByRouter.get(o)&&o!==e.result);let i=n;for(let o=e.__divergedChainIndex;o<e.chain.length;o++){const s=e.chain[o].element;s&&(i.appendChild(s),this.__addedByRouter.set(s,!0),i===n&&this.__appearingContent.push(s),i=s)}}__removeDisappearingContent(){this.__disappearingContent&&Te(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Te(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,r){if(r)for(let n=r.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=r.chain[n].element;if(i)try{const o=x(e);ke(i.onAfterLeave,[o,{},r.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&Te(i.children)}}}__runOnAfterEnterCallbacks(e){for(let r=e.__divergedChainIndex;r<e.chain.length&&this.__isLatestRender(e);r++){const n=e.chain[r].element||{},i=x(e,e.chain[r].route);ke(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const r=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],o=e.chain;let s;for(let a=o.length;a>0;a--)if(o[a-1].route.animate){s=o[a-1].route.animate;break}if(r&&n&&s){const a=Ue(s)&&s.leave||"leaving",l=Ue(s)&&s.enter||"entering";i.push(nr(r,a)),i.push(nr(n,l))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:r,search:n,hash:i}=e?e.detail:window.location;A(this.__normalizePathname(r))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:r,search:n,hash:i},!0))}static setTriggers(...e){yn(e)}urlForName(e,r){return this.__urlForName||(this.__urlForName=gn(this)),Ne(this.__urlForName(e,r),this)}urlForPath(e,r){return Ne(T.pathToRegexp.compile(e)(r),this)}static go(e){const{pathname:r,search:n,hash:i}=A(e)?this.__createUrl(e,"http://a"):e;return pe("go",{pathname:r,search:n,hash:i})}}const An=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Me=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Sn(){function t(){return!0}return ni(t)}function Cn(){try{return Tn()?!0:$n()?Me?!On():!Sn():!1}catch{return!1}}function Tn(){return localStorage.getItem("vaadin.developmentmode.force")}function $n(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function On(){return!!(Me&&Object.keys(Me).map(e=>Me[e]).filter(e=>e.productionMode).length>0)}function ni(t,e){if(typeof t!="function")return;const r=An.exec(t.toString());if(r)try{t=new Function(r[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return t(e)}window.Vaadin=window.Vaadin||{};const ar=function(t,e){if(window.Vaadin.developmentMode)return ni(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Cn());function kn(){}const Nn=function(){if(typeof ar=="function")return ar(kn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Nn();T.NavigationTrigger={POPSTATE:Zi,CLICK:Xi};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=globalThis,Tt=Re.ShadowRoot&&(Re.ShadyCSS===void 0||Re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$t=Symbol(),lr=new WeakMap;let Ot=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==$t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Tt&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=lr.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&lr.set(r,e))}return e}toString(){return this.cssText}};const Mn=t=>new Ot(typeof t=="string"?t:t+"",void 0,$t),E=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new Ot(r,t,$t)},oi=(t,e)=>{if(Tt)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=Re.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},cr=Tt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return Mn(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Rn,defineProperty:Ln,getOwnPropertyDescriptor:zn,getOwnPropertyNames:In,getOwnPropertySymbols:Dn,getPrototypeOf:Un}=Object,I=globalThis,dr=I.trustedTypes,Fn=dr?dr.emptyScript:"",rt=I.reactiveElementPolyfillSupport,fe=(t,e)=>t,Fe={toAttribute(t,e){switch(e){case Boolean:t=t?Fn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},kt=(t,e)=>!Rn(t,e),ur={attribute:!0,type:String,converter:Fe,reflect:!1,useDefault:!1,hasChanged:kt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),I.litPropertyMetadata??(I.litPropertyMetadata=new WeakMap);let J=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ur){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Ln(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:o}=zn(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const a=i==null?void 0:i.call(this);o==null||o.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ur}static _$Ei(){if(this.hasOwnProperty(fe("elementProperties")))return;const e=Un(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(fe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fe("properties"))){const r=this.properties,n=[...In(r),...Dn(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(cr(i))}else e!==void 0&&r.push(cr(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oi(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){var o;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:Fe).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){var o,s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=n.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Fe;this._$Em=i;const c=l.fromAttribute(r,a.type);this[i]=c??((s=this._$Ej)==null?void 0:s.get(i))??c,this._$Em=null}}requestUpdate(e,r,n){var i;if(e!==void 0){const o=this.constructor,s=this[e];if(n??(n=o.getPropertyOptions(e)),!((n.hasChanged??kt)(s,r)||n.useDefault&&n.reflect&&s===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??r??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i){const{wrapped:a}=s,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[fe("elementProperties")]=new Map,J[fe("finalized")]=new Map,rt==null||rt({ReactiveElement:J}),(I.reactiveElementVersions??(I.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=globalThis,He=me.trustedTypes,hr=He?He.createPolicy("lit-html",{createHTML:t=>t}):void 0,si="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,ai="?"+z,Hn=`<${ai}>`,W=document,ye=()=>W.createComment(""),be=t=>t===null||typeof t!="object"&&typeof t!="function",Nt=Array.isArray,Bn=t=>Nt(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",it=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pr=/-->/g,fr=/>/g,U=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mr=/'/g,_r=/"/g,li=/^(?:script|style|textarea|title)$/i,jn=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Q=jn(1),re=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),gr=new WeakMap,F=W.createTreeWalker(W,129);function ci(t,e){if(!Nt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return hr!==void 0?hr.createHTML(e):e}const Vn=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":e===3?"<math>":"",s=ae;for(let a=0;a<r;a++){const l=t[a];let c,d,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===ae?d[1]==="!--"?s=pr:d[1]!==void 0?s=fr:d[2]!==void 0?(li.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=U):d[3]!==void 0&&(s=U):s===U?d[0]===">"?(s=i??ae,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?U:d[3]==='"'?_r:mr):s===_r||s===mr?s=U:s===pr||s===fr?s=ae:(s=U,i=void 0);const p=s===U&&t[a+1].startsWith("/>")?" ":"";o+=s===ae?l+Hn:u>=0?(n.push(c),l.slice(0,u)+si+l.slice(u)+z+p):l+z+(u===-2?a:p)}return[ci(t,o+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class ve{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[c,d]=Vn(e,r);if(this.el=ve.createElement(c,n),F.currentNode=this.el.content,r===2||r===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=F.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(si)){const h=d[s++],p=i.getAttribute(u).split(z),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:m[2],strings:p,ctor:m[1]==="."?Wn:m[1]==="?"?Yn:m[1]==="@"?Kn:Je}),i.removeAttribute(u)}else u.startsWith(z)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(li.test(i.tagName)){const u=i.textContent.split(z),h=u.length-1;if(h>0){i.textContent=He?He.emptyScript:"";for(let p=0;p<h;p++)i.append(u[p],ye()),F.nextNode(),l.push({type:2,index:++o});i.append(u[h],ye())}}}else if(i.nodeType===8)if(i.data===ai)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(z,u+1))!==-1;)l.push({type:7,index:o}),u+=z.length-1}o++}}static createElement(e,r){const n=W.createElement("template");return n.innerHTML=e,n}}function ie(t,e,r=t,n){var s,a;if(e===re)return e;let i=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const o=be(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=ie(t,i._$AS(t,e.values),i,n)),e}class qn{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??W).importNode(r,!0);F.currentNode=i;let o=F.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new xe(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new Gn(o,this,e)),this._$AV.push(c),l=n[++a]}s!==(l==null?void 0:l.index)&&(o=F.nextNode(),s++)}return F.currentNode=W,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class xe{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ie(this,e,r),be(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==re&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Bn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&be(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){var o;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ve.createElement(ci(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const s=new qn(i,this),a=s.u(this.options);s.p(r),this.T(a),this._$AH=s}}_$AC(e){let r=gr.get(e.strings);return r===void 0&&gr.set(e.strings,r=new ve(e)),r}k(e){Nt(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new xe(this.O(ye()),this.O(ye()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Je{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=ie(this,e,r,0),s=!be(e)||e!==this._$AH&&e!==re,s&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=ie(this,a[n+l],r,l),c===re&&(c=this._$AH[l]),s||(s=!be(c)||c!==this._$AH[l]),c===g?e=g:e!==g&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Wn extends Je{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Yn extends Je{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Kn extends Je{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){if((e=ie(this,e,r,0)??g)===re)return;const n=this._$AH,i=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==g&&(n===g||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Gn{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const nt=me.litHtmlPolyfillSupport;nt==null||nt(ve,xe),(me.litHtmlVersions??(me.litHtmlVersions=[])).push("3.3.1");const Jn=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new xe(e.insertBefore(ye(),o),o,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis;class M extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Jn(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return re}}var qr;M._$litElement$=!0,M.finalized=!0,(qr=B.litElementHydrateSupport)==null||qr.call(B,{LitElement:M});const ot=B.litElementPolyfillSupport;ot==null||ot({LitElement:M});(B.litElementVersions??(B.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xn={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:kt},Qn=(t=Xn,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),n==="accessor"){const{name:s}=r;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.C(s,void 0,t,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+n)};function Zn(t){return(e,r)=>typeof r=="object"?Qn(t,e,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(t){return Zn({...t,state:!0,attribute:!1})}const eo="/api";class to{async request(e,r={}){const n=`${eo}${e}`,i=await fetch(n,{headers:{"Content-Type":"application/json",...r.headers},...r});if(!i.ok)throw new Error(`API request failed: ${i.status} ${i.statusText}`);return i.json()}async getAllUsers(){return this.request("/users")}async getUserById(e){return this.request(`/users/${e}`)}async createUser(e){const r={firstName:e.name.split(" ")[0]||"",lastName:e.name.split(" ").slice(1).join(" ")||"",email:e.email,password:e.password||"defaultPassword123",phone:e.phone};return this.request("/users/register",{method:"POST",body:JSON.stringify(r)})}async updateUser(e,r){const n={firstName:r.name.split(" ")[0]||"",lastName:r.name.split(" ").slice(1).join(" ")||"",email:r.email,phone:r.phone};return this.request(`/users/${e}`,{method:"PUT",body:JSON.stringify(n)})}async deleteUser(e){await this.request(`/users/${e}`,{method:"DELETE"})}}const di=new to;var ro=Object.defineProperty,io=Object.getOwnPropertyDescriptor,Xe=(t,e,r,n)=>{for(var i=n>1?void 0:n?io(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&ro(e,r,i),i};let Y=class extends M{constructor(){super(),this.username="",this.password="",this.error=null}onInput(t){const e=t.target;this[e.name]=e.value}async onSubmit(t){if(t.preventDefault(),this.error=null,!this.username.trim()||!this.password.trim()){this.error="Username and password are required";return}try{await di.login({username:this.username,password:this.password}),this.navigateTo("/users")}catch(e){this.error="Invalid username or password",console.error("Login error:",e)}}navigateTo(t){console.debug("[login-view] navigateTo ->",t,"current=",window.location.pathname);const e=document.getElementById("outlet");if(e&&t==="/register"){e.innerHTML="";const r=document.createElement("register-view");e.appendChild(r),history.pushState({},"",t),console.debug("[login-view] manually rendered register");return}try{history.pushState({},"",t),window.dispatchEvent(new PopStateEvent("popstate"))}catch(r){console.warn("[login-view] navigateTo fallback failed",r),window.location.href=t}}render(){return Q`
      <div class="container">
        <div class="card">
          <h1>Log in</h1>
          <div class="subtle">Welcome back. Please enter your credentials to continue.</div>
          ${this.error?Q`<div class="error">${this.error}</div>`:""}
          <form @submit=${this.onSubmit}>
            <div class="form-group">
              <label for="username">Username</label>
              <input id="username" name="username" type="text" .value=${this.username} @input=${this.onInput} />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input id="password" name="password" type="password" .value=${this.password} @input=${this.onInput} />
            </div>
            <div class="actions">
              <button class="btn-primary" type="submit">Log in</button>
              <button class="btn-ghost" type="button" @click=${()=>{this.navigateTo("/register")}}>
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    `}};Y.styles=E`
    .container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0b3b9e 100%);
      padding: 2rem;
    }
    .card {
      background: rgba(255, 255, 255, 0.07);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      width: 100%;
      max-width: 440px;
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08);
      padding: 1.5rem 1.5rem 1.25rem;
      border: 1px solid rgba(255,255,255,0.12);
    }
    h1 {
      margin: 0 0 1.25rem 0;
      text-align: center;
      color: #ffffff;
      font-size: 1.75rem;
      letter-spacing: 0.3px;
    }
    .subtle { color: rgba(255,255,255,0.75); text-align: center; margin-bottom: 1.25rem; }
    .form-group { margin-bottom: 0.75rem; }
    label { display: block; margin-bottom: 0.5rem; font-weight: 500; color: rgba(255,255,255,0.9); }
    input {
      width: 100%;
      max-width: 400px; /* Match the full width like the buttons */
      margin: 0;       /* Align with button edges inside the card */
      display: block;
      padding: 0.5rem 0.7rem;
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 8px;
      font-size: 0.9rem;
      background: rgba(255,255,255,0.12);
      color: #fff;
      outline: none;
    }
    input::placeholder { color: rgba(255,255,255,0.65); }
    input:focus {
      border-color: #60a5fa;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.25);
      background: rgba(255,255,255,0.16);
    }
    .actions { margin-top: 0.75rem; display: grid; gap: 0.6rem; }
    .btn-primary {
      width: 100%;
      padding: 0.7rem 0.9rem;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: #fff;
      border: 0;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      letter-spacing: 0.3px;
      box-shadow: 0 10px 20px rgba(37,99,235,0.35);
      transition: transform .05s ease, box-shadow .2s ease, filter .2s ease;
    }
    .btn-primary:hover { filter: brightness(1.05); box-shadow: 0 14px 28px rgba(37,99,235,0.45); }
    .btn-primary:active { transform: translateY(1px); }
    .btn-ghost {
      width: 100%;
      padding: 0.65rem 0.9rem;
      background: transparent;
      color: #e5e7eb;
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: background .2s ease, border-color .2s ease;
    }
    .btn-ghost:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.35); }
    .error {
      background: rgba(220, 38, 38, 0.15);
      color: #fecaca;
      padding: 0.6rem 0.8rem;
      border-radius: 10px;
      margin-bottom: 0.9rem;
      font-size: 0.95rem;
      border: 1px solid rgba(220, 38, 38, 0.35);
    }
  `;Xe([R()],Y.prototype,"username",2);Xe([R()],Y.prototype,"password",2);Xe([R()],Y.prototype,"error",2);Y=Xe([Mt("login-view")],Y);const no=Object.freeze(Object.defineProperty({__proto__:null,get LoginView(){return Y}},Symbol.toStringTag,{value:"Module"}));var oo=Object.defineProperty,so=Object.getOwnPropertyDescriptor,K=(t,e,r,n)=>{for(var i=n>1?void 0:n?so(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&oo(e,r,i),i};let $=class extends M{constructor(){super(),this.name="",this.email="",this.password="",this.phone="",this.error=null,this.success=null}onInput(t){const e=t.target;this[e.name]=e.value}async onSubmit(t){if(t.preventDefault(),this.error=null,this.success=null,!this.name.trim()||!this.email.trim()||!this.password.trim()){this.error="Name, username and password are required";return}try{await di.createUser({name:this.name,email:this.email,password:this.password,phone:this.phone}),this.success="Account created successfully. Redirecting to log in...",setTimeout(()=>{this.navigateTo("/login")},700)}catch(e){this.error=e instanceof Error?e.message:"Failed to register",console.error(e)}}navigateTo(t){console.debug("[register-view] navigateTo ->",t,"current=",window.location.pathname);const e=document.getElementById("outlet");if(e&&t==="/login"){e.innerHTML="";const r=document.createElement("login-view");e.appendChild(r),history.pushState({},"",t),console.debug("[register-view] manually rendered login");return}try{history.pushState({},"",t),window.dispatchEvent(new PopStateEvent("popstate"))}catch(r){console.warn("[register-view] navigateTo fallback failed",r),window.location.href=t}}render(){return Q`
      <div class="container">
        <div class="card">
          <h1>Create your account</h1>
          <div class="subtle">Join our CRM platform and manage your customers with confidence.</div>
          ${this.error?Q`<div class="error">${this.error}</div>`:""}
          ${this.success?Q`<div class="success">${this.success}</div>`:""}
          <form @submit=${this.onSubmit} class="form-grid">
            <div>
              <label for="name">Full name</label>
              <input id="name" name="name" type="text" placeholder="e.g. Alex Johnson" .value=${this.name} @input=${this.onInput} />
            </div>
            <div>
              <label for="email">Username (used for login)</label>
              <input id="email" name="email" type="text" placeholder="e.g. test1" .value=${this.email} @input=${this.onInput} />
            </div>
            <div>
              <label for="password">Password</label>
              <input id="password" name="password" type="password" placeholder="••••••••" .value=${this.password} @input=${this.onInput} />
            </div>
            <div>
              <label for="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" placeholder="e.g. +1 (555) 123-4567" .value=${this.phone} @input=${this.onInput} />
            </div>
            <div class="actions">
              <button class="btn-primary" type="submit">Create account</button>
              <button class="btn-ghost" type="button" @click=${()=>{this.navigateTo("/login")}}>
                Back to log in
              </button>
            </div>
          </form>
        </div>
      </div>
    `}};$.styles=E`
    .container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0b3b9e 100%);
      padding: 2rem;
    }
    .card {
      background: rgba(255, 255, 255, 0.07);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      width: 100%;
      max-width: 500px;
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08);
      padding: 1.5rem 1.5rem 1.25rem;
      border: 1px solid rgba(255,255,255,0.12);
    }
    h1 {
      margin: 0 0 0.5rem 0;
      text-align: center;
      color: #ffffff;
      font-size: 1.75rem;
      letter-spacing: 0.3px;
    }
    .subtle { color: rgba(255,255,255,0.75); text-align: center; margin-bottom: 1.25rem; }
    .form-grid { display: grid; gap: 0.85rem; }
    label { display: block; margin-bottom: 0.5rem; font-weight: 500; color: rgba(255,255,255,0.9); }
    input {
      width: 100%;
      max-width: 400px; /* Match the full width like the buttons */
      margin: 0;       /* Align with button edges inside the card */
      display: block;
      padding: 0.5rem 0.7rem;
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 8px;
      font-size: 0.9rem;
      background: rgba(255,255,255,0.12);
      color: #fff;
      outline: none;
    }
    input::placeholder { color: rgba(255,255,255,0.65); }
    input:focus {
      border-color: #60a5fa;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.25);
      background: rgba(255,255,255,0.16);
    }
    .actions { margin-top: 0.75rem; display: grid; gap: 0.6rem; }
    .btn-primary {
      width: 100%;
      padding: 0.7rem 0.9rem;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: #fff;
      border: 0;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      letter-spacing: 0.3px;
      box-shadow: 0 10px 20px rgba(37,99,235,0.35);
      transition: transform .05s ease, box-shadow .2s ease, filter .2s ease;
    }
    .btn-primary:hover { filter: brightness(1.05); box-shadow: 0 14px 28px rgba(37,99,235,0.45); }
    .btn-primary:active { transform: translateY(1px); }
    .btn-ghost {
      width: 100%;
      padding: 0.65rem 0.9rem;
      background: transparent;
      color: #e5e7eb;
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: background .2s ease, border-color .2s ease;
    }
    .btn-ghost:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.35); }
    .error {
      background: rgba(220, 38, 38, 0.15);
      color: #fecaca;
      padding: 0.6rem 0.8rem;
      border-radius: 10px;
      margin-bottom: 0.9rem;
      font-size: 0.95rem;
      border: 1px solid rgba(220, 38, 38, 0.35);
    }
    .success {
      background: rgba(16, 185, 129, 0.15);
      color: #bbf7d0;
      padding: 0.6rem 0.8rem;
      border-radius: 10px;
      margin-bottom: 0.9rem;
      font-size: 0.95rem;
      border: 1px solid rgba(16, 185, 129, 0.35);
    }
  `;K([R()],$.prototype,"name",2);K([R()],$.prototype,"email",2);K([R()],$.prototype,"password",2);K([R()],$.prototype,"phone",2);K([R()],$.prototype,"error",2);K([R()],$.prototype,"success",2);$=K([Mt("register-view")],$);const ao=Object.freeze(Object.defineProperty({__proto__:null,get RegisterView(){return $}},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});var Wr;(Wr=window.Vaadin).featureFlags||(Wr.featureFlags={});function lo(t){return t.replace(/-[a-z]/gu,e=>e[1].toUpperCase())}const O={};function ui(t,e="24.9.6"){if(Object.defineProperty(t,"version",{get(){return e}}),t.experimental){const n=typeof t.experimental=="string"?t.experimental:`${lo(t.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[n]&&!O[n]){O[n]=new Set,O[n].add(t),Object.defineProperty(window.Vaadin.featureFlags,n,{get(){return O[n].size===0},set(i){i&&O[n].size>0&&(O[n].forEach(o=>{customElements.define(o.is,o)}),O[n].clear())}});return}else if(O[n]){O[n].add(t);return}}const r=customElements.get(t.is);if(!r)customElements.define(t.is,t);else{const n=r.version;n&&t.version&&n===t.version?console.warn(`The component ${t.is} has been loaded twice`):console.error(`Tried to define ${t.is} version ${t.version} when version ${r.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class co extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}ui(co);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function uo(t){const e=t.constructor,r=t.__cssInjectorStyleSheet;return r?[...e.baseStyles,r,...e.themeStyles]:e.elementStyles}function ho(t){[...t.shadowRoot.querySelectorAll("style")].forEach(e=>e.remove()),oi(t.shadowRoot,uo(t))}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const po=t=>class extends t{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(r,n,i){super.attributeChangedCallback(r,n,i),r==="theme"&&this._set_theme(i)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hi=[],ft=new Set,Rt=new Set;function pi(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}function fo(t){return pi(customElements.get(t))}function mo(t=[]){return[t].flat(1/0).filter(e=>e instanceof Ot?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function fi(t,e){return(t||"").split(" ").some(r=>new RegExp(`^${r.split("*").join(".*")}$`,"u").test(e))}function mi(t){return t.map(e=>e.cssText).join(`
`)}const Be="vaadin-themable-mixin-style";function _o(t,e){const r=document.createElement("style");r.id=Be,r.textContent=mi(t),e.content.appendChild(r)}function go(t){if(!t.shadowRoot)return;const e=t.constructor;if(t instanceof M)ho(t);else{const r=t.shadowRoot.getElementById(Be),n=e.prototype._template;r.textContent=n.content.getElementById(Be).textContent}}function yo(t){ft.forEach(e=>{const r=e.deref();r instanceof t?go(r):r||ft.delete(e)})}function _i(t){if(t.prototype instanceof M)t.elementStyles=t.finalizeStyles(t.styles);else{const e=t.prototype._template;e.content.getElementById(Be).textContent=mi(t.getStylesForThis())}Rt.forEach(e=>{const r=customElements.get(e);r!==t&&r.prototype instanceof t&&_i(r)})}function bo(t,e){const r=t.__themes;return!r||!e?!1:r.some(n=>n.styles.some(i=>e.some(o=>o.cssText===i.cssText)))}function Qe(t,e,r={}){e=mo(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,r):hi.push({themeFor:t,styles:e,include:r.include,moduleId:r.moduleId}),t&&Rt.forEach(n=>{if(fi(t,n)&&fo(n)){const i=customElements.get(n);bo(i,e)?console.warn(`Registering styles that already exist for ${n}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${n}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),_i(i),yo(i)}})}function mt(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():hi}function vo(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function gi(t){const e=[];return t.include&&[].concat(t.include).forEach(r=>{const n=mt().find(i=>i.moduleId===r);n?e.push(...gi(n),...n.styles):console.warn(`Included moduleId ${r} not found in style registry`)},t.styles),e}function wo(t){const e=`${t}-default-theme`,r=mt().filter(n=>n.moduleId!==e&&fi(n.themeFor,t)).map(n=>({...n,styles:[...gi(n),...n.styles],includePriority:vo(n.moduleId)})).sort((n,i)=>i.includePriority-n.includePriority);return r.length>0?r:mt().filter(n=>n.moduleId===e)}const Po=t=>class extends po(t){constructor(){super(),ft.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&Rt.add(this.is),this.elementStyles)return;const r=this.prototype._template;!r||pi(this)||_o(this.getStylesForThis(),r)}static finalizeStyles(r){return this.baseStyles=r?[r].flat(1/0):[],this.themeStyles=this.getStylesForThis(),[...this.baseStyles,...this.themeStyles]}static getStylesForThis(){const r=t.__themes||[],n=Object.getPrototypeOf(this.prototype),i=(n?n.constructor.__themes:[])||[];this.__themes=[...r,...i,...wo(this.is)];const o=this.__themes.flatMap(s=>s.styles);return o.filter((s,a)=>a===o.lastIndexOf(s))}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Eo=(t,...e)=>{const r=document.createElement("style");r.id=t,r.textContent=e.map(n=>n.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",r)},Ae=(t,...e)=>{Eo(`lumo-${t}`,e)};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xo=E`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;Ae("color-props",xo);const Ao=E`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;Qe("",Ao,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const So=E`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;Ae("sizing-props",So);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Co=E`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;Ae("spacing-props",Co);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const To=E`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;E`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-checkbox-disabled-checkmark-color: var(--lumo-contrast-30pct);
    --vaadin-checkbox-disabled-background: var(--lumo-contrast-10pct);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-disabled-background: var(--lumo-contrast-10pct);
    --vaadin-radio-button-disabled-dot-color: var(--lumo-contrast-30pct);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-disabled-background: var(--lumo-contrast-5pct);
    --vaadin-input-field-disabled-value-color: var(--lumo-disabled-text-color);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 500;
  }
`;Ae("style-props",To);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $o=E`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Oo=E`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Qe("",Oo,{moduleId:"lumo-typography"});Ae("typography-props",$o);const ko=E`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:not([disabled]):hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition:
      opacity 1.4s,
      transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow:
      0 0 0 calc(1px * var(--_focus-ring-gap-on, 0)) var(--_focus-ring-gap-color, var(--lumo-base-color)),
      0 0 0 calc(var(--_focus-ring-width) + 1px * var(--_focus-ring-gap-on, 0)) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    --_focus-ring-gap-on: 1;
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:not([disabled]):hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, warning, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='warning']) {
    color: var(--lumo-warning-text-color);
  }

  :host([theme~='warning'][theme~='primary']) {
    background-color: var(--lumo-warning-color);
    color: var(--lumo-warning-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;Qe("vaadin-button",ko,{moduleId:"lumo-button"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let No=/(url\()([^)]*)(\))/g,Mo=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,$e,P;function _e(t,e){if(t&&Mo.test(t)||t==="//")return t;if($e===void 0){$e=!1;try{const r=new URL("b","http://a");r.pathname="c%20d",$e=r.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),$e)try{return new URL(t,e).href}catch{return t}return P||(P=document.implementation.createHTMLDocument("temp"),P.base=P.createElement("base"),P.head.appendChild(P.base),P.anchor=P.createElement("a"),P.body.appendChild(P.anchor)),P.base.href=e,P.anchor.href=t,P.anchor.href||t}function Lt(t,e){return t.replace(No,function(r,n,i,o){return n+"'"+_e(i.replace(/["']/g,""),e)+"'"+o})}function zt(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ro=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Lo=Ro&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let zo=window.Polymer&&window.Polymer.rootPath||zt(document.baseURI||window.location.href),je=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let _t=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Io=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Do=window.Polymer&&window.Polymer.legacyOptimizations||!1,Uo=window.Polymer&&window.Polymer.legacyWarnings||!1,Fo=window.Polymer&&window.Polymer.syncInitialRender||!1,gt=window.Polymer&&window.Polymer.legacyUndefined||!1,Ho=window.Polymer&&window.Polymer.orderedComputed||!1,yr=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Bo=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let jo=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Vo=0;const oe=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let r=Vo++;function n(i){let o=i.__mixinSet;if(o&&o[r])return i;let s=e,a=s.get(i);if(!a){a=t(i),s.set(i,a);let l=Object.create(a.__mixinSet||o||null);l[r]=!0,a.__mixinSet=l}return a}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let It={},yi={};function br(t,e){It[t]=yi[t.toLowerCase()]=e}function vr(t){return It[t]||yi[t.toLowerCase()]}function qo(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class we extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,r){if(e){let n=vr(e);return n&&r?n.querySelector(r):n}return null}attributeChangedCallback(e,r,n,i){r!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,r=_e(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=zt(r)}return this.__assetpath}register(e){if(e=e||this.id,e){if(_t&&vr(e)!==void 0)throw br(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,br(e,this),qo(this)}}}we.prototype.modules=It;customElements.define("dom-module",we);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Wo="link[rel=import][type~=css]",Yo="include",wr="shady-unscoped";function bi(t){return we.import(t)}function Pr(t){let e=t.body?t.body:t;const r=Lt(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=r,n}function Ko(t){const e=t.trim().split(/\s+/),r=[];for(let n=0;n<e.length;n++)r.push(...Go(e[n]));return r}function Go(t){const e=bi(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const r=[];r.push(...wi(e));const n=e.querySelector("template");n&&r.push(...vi(n,e.assetpath)),e._styles=r}return e._styles}function vi(t,e){if(!t._styles){const r=[],n=t.content.querySelectorAll("style");for(let i=0;i<n.length;i++){let o=n[i],s=o.getAttribute(Yo);s&&r.push(...Ko(s).filter(function(a,l,c){return c.indexOf(a)===l})),e&&(o.textContent=Lt(o.textContent,e)),r.push(o)}t._styles=r}return t._styles}function Jo(t){let e=bi(t);return e?wi(e):[]}function wi(t){const e=[],r=t.querySelectorAll(Wo);for(let n=0;n<r.length;n++){let i=r[n];if(i.import){const o=i.import,s=i.hasAttribute(wr);if(s&&!o._unscopedStyle){const a=Pr(o);a.setAttribute(wr,""),o._unscopedStyle=a}else o._style||(o._style=Pr(o));e.push(s?o._unscopedStyle:o._style)}}return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const j=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function yt(t){return t.indexOf(".")>=0}function G(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function Xo(t,e){return t.indexOf(e+".")===0}function Ve(t,e){return e.indexOf(t+".")===0}function qe(t,e,r){return e+r.slice(t.length)}function ue(t){if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let n=t[r].toString().split(".");for(let i=0;i<n.length;i++)e.push(n[i])}return e.join(".")}else return t}function Pi(t){return Array.isArray(t)?ue(t).split("."):t.toString().split(".")}function b(t,e,r){let n=t,i=Pi(e);for(let o=0;o<i.length;o++){if(!n)return;let s=i[o];n=n[s]}return r&&(r.path=i.join(".")),n}function Er(t,e,r){let n=t,i=Pi(e),o=i[i.length-1];if(i.length>1){for(let s=0;s<i.length-1;s++){let a=i[s];if(n=n[a],!n)return}n[o]=r}else n[e]=r;return i.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const We={},Qo=/-[a-z]/g,Zo=/([A-Z])/g;function Ei(t){return We[t]||(We[t]=t.indexOf("-")<0?t:t.replace(Qo,e=>e[1].toUpperCase()))}function Ze(t){return We[t]||(We[t]=t.replace(Zo,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let es=0,xi=0,Z=[],ts=0,bt=!1,Ai=document.createTextNode("");new window.MutationObserver(rs).observe(Ai,{characterData:!0});function rs(){bt=!1;const t=Z.length;for(let e=0;e<t;e++){let r=Z[e];if(r)try{r()}catch(n){setTimeout(()=>{throw n})}}Z.splice(0,t),xi+=t}const is={run(t){return bt||(bt=!0,Ai.textContent=ts++),Z.push(t),es++},cancel(t){const e=t-xi;if(e>=0){if(!Z[e])throw new Error("invalid async handle: "+t);Z[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ns=is,Si=oe(t=>{class e extends t{static createProperties(n){const i=this.prototype;for(let o in n)o in i||i._createPropertyAccessor(o)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,i){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,i))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[n];return i||(i=this.constructor.attributeNameForProperty(n),this.__dataAttributes[i]=n),i}_definePropertyAccessor(n,i){Object.defineProperty(this,n,{get(){return this.__data[n]},set:i?function(){}:function(o){this._setPendingProperty(n,o,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,i){this._setPendingProperty(n,i)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,i,o){let s=this.__data[n],a=this._shouldPropertyChange(n,i,s);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=s),this.__data[n]=i,this.__dataPending[n]=i),a}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ns.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,i=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(n,i,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,i,o)),this.__dataCounter--}_shouldPropertiesChange(n,i,o){return!!i}_propertiesChanged(n,i,o){}_shouldPropertyChange(n,i,o){return o!==i&&(o===o||i===i)}attributeChangedCallback(n,i,o,s){i!==o&&this._attributeToProperty(n,o),super.attributeChangedCallback&&super.attributeChangedCallback(n,i,o,s)}_attributeToProperty(n,i,o){if(!this.__serializing){const s=this.__dataAttributes,a=s&&s[n]||n;this[a]=this._deserializeValue(i,o||this.constructor.typeForProperty(a))}}_propertyToAttribute(n,i,o){this.__serializing=!0,o=arguments.length<3?this[n]:o,this._valueToNodeAttribute(this,o,i||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,i,o){const s=this._serializeValue(i);(o==="class"||o==="name"||o==="slot")&&(n=j(n)),s===void 0?n.removeAttribute(o):n.setAttribute(o,s===""&&window.trustedTypes?window.trustedTypes.emptyScript:s)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n!=null?n.toString():void 0}}_deserializeValue(n,i){switch(i){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ci={};let Oe=HTMLElement.prototype;for(;Oe;){let t=Object.getOwnPropertyNames(Oe);for(let e=0;e<t.length;e++)Ci[t[e]]=!0;Oe=Object.getPrototypeOf(Oe)}const os=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function ss(t,e){if(!Ci[e]){let r=t[e];r!==void 0&&(t.__data?t._setPendingProperty(e,r):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=r))}}const as=oe(t=>{const e=Si(t);class r extends e{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let o=0;o<i.length;o++)this.prototype._createPropertyAccessor(Ei(i[o]))}static attributeNameForProperty(i){return Ze(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let o in i)this._setProperty(o,i[o])}_ensureAttribute(i,o){const s=this;s.hasAttribute(i)||this._valueToNodeAttribute(s,o,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(os(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,o){let s;switch(o){case Object:try{s=JSON.parse(i)}catch{s=i}break;case Array:try{s=JSON.parse(i)}catch{s=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:s=isNaN(i)?String(i):Number(i),s=new Date(s);break;default:s=super._deserializeValue(i,o);break}return s}_definePropertyAccessor(i,o){ss(this,i),super._definePropertyAccessor(i,o)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ls={"dom-if":!0,"dom-repeat":!0};let xr=!1,Ar=!1;function cs(){if(!xr){xr=!0;const t=document.createElement("textarea");t.placeholder="a",Ar=t.placeholder===t.textContent}return Ar}function ds(t){cs()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const us=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,r,n)=>{const i=r.getAttribute(n);if(t&&n.startsWith("on-")){e.setAttribute(n,t.createScript(i,n));return}e.setAttribute(n,i)}})();function hs(t){let e=t.getAttribute("is");if(e&&ls[e]){let r=t;for(r.removeAttribute("is"),t=r.ownerDocument.createElement(e),r.parentNode.replaceChild(t,r),t.appendChild(r);r.attributes.length;){const{name:n}=r.attributes[0];us(t,r,n),r.removeAttribute(n)}}return t}function Ti(t,e){let r=e.parentInfo&&Ti(t,e.parentInfo);if(r){for(let n=r.firstChild,i=0;n;n=n.nextSibling)if(e.parentIndex===i++)return n}else return t}function ps(t,e,r,n){n.id&&(e[n.id]=r)}function fs(t,e,r){if(r.events&&r.events.length)for(let n=0,i=r.events,o;n<i.length&&(o=i[n]);n++)t._addMethodEventListenerToNode(e,o.name,o.value,t)}function ms(t,e,r,n){r.templateInfo&&(e._templateInfo=r.templateInfo,e._parentTemplateInfo=n)}function _s(t,e,r){return t=t._methodHost||t,function(i){t[r]?t[r](i,i.detail):console.warn("listener method `"+r+"` not defined")}}const gs=oe(t=>{class e extends t{static _parseTemplate(n,i){if(!n._templateInfo){let o=n._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=!!i,o.stripWhiteSpace=i&&i.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,o,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,i,o){return this._parseTemplateNode(n.content,i,o)}static _parseTemplateNode(n,i,o){let s=!1,a=n;return a.localName=="template"&&!a.hasAttribute("preserve-content")?s=this._parseTemplateNestedTemplate(a,i,o)||s:a.localName==="slot"&&(i.hasInsertionPoint=!0),ds(a),a.firstChild&&this._parseTemplateChildNodes(a,i,o),a.hasAttributes&&a.hasAttributes()&&(s=this._parseTemplateNodeAttributes(a,i,o)||s),s||o.noted}static _parseTemplateChildNodes(n,i,o){if(!(n.localName==="script"||n.localName==="style"))for(let s=n.firstChild,a=0,l;s;s=l){if(s.localName=="template"&&(s=hs(s)),l=s.nextSibling,s.nodeType===Node.TEXT_NODE){let d=l;for(;d&&d.nodeType===Node.TEXT_NODE;)s.textContent+=d.textContent,l=d.nextSibling,n.removeChild(d),d=l;if(i.stripWhiteSpace&&!s.textContent.trim()){n.removeChild(s);continue}}let c={parentIndex:a,parentInfo:o};this._parseTemplateNode(s,i,c)&&(c.infoIndex=i.nodeInfoList.push(c)-1),s.parentNode&&a++}}static _parseTemplateNestedTemplate(n,i,o){let s=n,a=this._parseTemplate(s,i);return(a.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),o.templateInfo=a,!0}static _parseTemplateNodeAttributes(n,i,o){let s=!1,a=Array.from(n.attributes);for(let l=a.length-1,c;c=a[l];l--)s=this._parseTemplateNodeAttribute(n,i,o,c.name,c.value)||s;return s}static _parseTemplateNodeAttribute(n,i,o,s,a){return s.slice(0,3)==="on-"?(n.removeAttribute(s),o.events=o.events||[],o.events.push({name:s.slice(3),value:a}),!0):s==="id"?(o.id=a,!0):!1}static _contentForTemplate(n){let i=n._templateInfo;return i&&i.content||n.content}_stampTemplate(n,i){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),i=i||this.constructor._parseTemplate(n);let o=i.nodeInfoList,s=i.content||n.content,a=document.importNode(s,!0);a.__noInsertionPoint=!i.hasInsertionPoint;let l=a.nodeList=new Array(o.length);a.$={};for(let c=0,d=o.length,u;c<d&&(u=o[c]);c++){let h=l[c]=Ti(a,u);ps(this,a.$,h,u),ms(this,h,u,i),fs(this,h,u)}return a=a,a}_addMethodEventListenerToNode(n,i,o,s){s=s||n;let a=_s(s,i,o);return this._addEventListenerToNode(n,i,a),a}_addEventListenerToNode(n,i,o){n.addEventListener(i,o)}_removeEventListenerFromNode(n,i,o){n.removeEventListener(i,o)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Pe=0;const Ee=[],f={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},$i="__computeInfo",ys=/[A-Z]/;function st(t,e,r){let n=t[e];if(!n)n=t[e]={};else if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),r))for(let i in n){let o=n[i],s=n[i]=Array(o.length);for(let a=0;a<o.length;a++)s[a]=o[a]}return n}function he(t,e,r,n,i,o){if(e){let s=!1;const a=Pe++;for(let l in r){let c=i?G(l):l,d=e[c];if(d)for(let u=0,h=d.length,p;u<h&&(p=d[u]);u++)(!p.info||p.info.lastRun!==a)&&(!i||Dt(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(t,l,r,n,p.info,i,o),s=!0)}return s}return!1}function bs(t,e,r,n,i,o,s,a){let l=!1,c=s?G(n):n,d=e[c];if(d)for(let u=0,h=d.length,p;u<h&&(p=d[u]);u++)(!p.info||p.info.lastRun!==r)&&(!s||Dt(n,p.trigger))&&(p.info&&(p.info.lastRun=r),p.fn(t,n,i,o,p.info,s,a),l=!0);return l}function Dt(t,e){if(e){let r=e.name;return r==t||!!(e.structured&&Xo(r,t))||!!(e.wildcard&&Ve(r,t))}else return!0}function Sr(t,e,r,n,i){let o=typeof i.method=="string"?t[i.method]:i.method,s=i.property;o?o.call(t,t.__data[s],n[s]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function vs(t,e,r,n,i){let o=t[f.NOTIFY],s,a=Pe++;for(let c in e)e[c]&&(o&&bs(t,o,a,c,r,n,i)||i&&ws(t,c,r))&&(s=!0);let l;s&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function ws(t,e,r){let n=G(e);if(n!==e){let i=Ze(n)+"-changed";return Oi(t,i,r[e],e),!0}return!1}function Oi(t,e,r,n){let i={value:r,queueProperty:!0};n&&(i.path=n),j(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function Ps(t,e,r,n,i,o){let a=(o?G(e):e)!=e?e:null,l=a?b(t,a):t.__data[e];a&&l===void 0&&(l=r[e]),Oi(t,i.eventName,l,a)}function Es(t,e,r,n,i){let o,s=t.detail,a=s&&s.path;a?(n=qe(r,n,a),o=s&&s.value):o=t.currentTarget[r],o=i?!o:o,(!e[f.READ_ONLY]||!e[f.READ_ONLY][n])&&e._setPendingPropertyOrPath(n,o,!0,!!a)&&(!s||!s.queueProperty)&&e._invalidateProperties()}function xs(t,e,r,n,i){let o=t.__data[e];je&&(o=je(o,i.attrName,"attribute",t)),t._propertyToAttribute(e,i.attrName,o)}function As(t,e,r,n){let i=t[f.COMPUTE];if(i)if(Ho){Pe++;const o=Cs(t),s=[];for(let l in e)Cr(l,i,s,o,n);let a;for(;a=s.shift();)ki(t,"",e,r,a)&&Cr(a.methodInfo,i,s,o,n);Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let o=e;for(;he(t,i,o,r,n);)Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),o=t.__dataPending,t.__dataPending=null}}const Ss=(t,e,r)=>{let n=0,i=e.length-1,o=-1;for(;n<=i;){const s=n+i>>1,a=r.get(e[s].methodInfo)-r.get(t.methodInfo);if(a<0)n=s+1;else if(a>0)i=s-1;else{o=s;break}}o<0&&(o=i+1),e.splice(o,0,t)},Cr=(t,e,r,n,i)=>{const o=i?G(t):t,s=e[o];if(s)for(let a=0;a<s.length;a++){const l=s[a];l.info.lastRun!==Pe&&(!i||Dt(t,l.trigger))&&(l.info.lastRun=Pe,Ss(l.info,r,n))}};function Cs(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const r=t[f.COMPUTE];let{counts:n,ready:i,total:o}=Ts(t),s;for(;s=i.shift();){e.set(s,e.size);const a=r[s];a&&a.forEach(l=>{const c=l.info.methodInfo;--o,--n[c]===0&&i.push(c)})}o!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function Ts(t){const e=t[$i],r={},n=t[f.COMPUTE],i=[];let o=0;for(let s in e){const a=e[s];o+=r[s]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let s in n)e[s]||i.push(s);return{counts:r,ready:i,total:o}}function ki(t,e,r,n,i){let o=vt(t,e,r,n,i);if(o===Ee)return!1;let s=i.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,o,!0):(t[s]=o,!1)}function $s(t,e,r){let n=t.__dataLinkedPaths;if(n){let i;for(let o in n){let s=n[o];Ve(o,e)?(i=qe(o,s,e),t._setPendingPropertyOrPath(i,r,!0,!0)):Ve(s,e)&&(i=qe(s,o,e),t._setPendingPropertyOrPath(i,r,!0,!0))}}}function at(t,e,r,n,i,o,s){r.bindings=r.bindings||[];let a={kind:n,target:i,parts:o,literal:s,isCompound:o.length!==1};if(r.bindings.push(a),Rs(a)){let{event:c,negate:d}=a.parts[0];a.listenerEvent=c||Ze(i)+"-changed",a.listenerNegate=d}let l=e.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let d=a.parts[c];d.compoundIndex=c,Os(t,e,a,d,l)}}function Os(t,e,r,n,i){if(!n.literal)if(r.kind==="attribute"&&r.target[0]==="-")console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let o=n.dependencies,s={index:i,binding:r,part:n,evaluator:t};for(let a=0;a<o.length;a++){let l=o[a];typeof l=="string"&&(l=Mi(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:ks,info:s,trigger:l})}}}function ks(t,e,r,n,i,o,s){let a=s[i.index],l=i.binding,c=i.part;if(o&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let d=r[e];e=qe(c.source,l.target,e),a._setPendingPropertyOrPath(e,d,!1,!0)&&t._enqueueClient(a)}else{let d=i.evaluator._evaluateBinding(t,c,e,r,n,o);d!==Ee&&Ns(t,a,l,c,d)}}function Ns(t,e,r,n,i){if(i=Ms(e,i,r,n),je&&(i=je(i,r.target,r.kind,e)),r.kind=="attribute")t._valueToNodeAttribute(e,i,r.target);else{let o=r.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?(!e[f.READ_ONLY]||!e[f.READ_ONLY][o])&&e._setPendingProperty(o,i)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,o,i)}}function Ms(t,e,r,n){if(r.isCompound){let i=t.__dataCompoundStorage[r.target];i[n.compoundIndex]=e,e=i.join("")}return r.kind!=="attribute"&&(r.target==="textContent"||r.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function Rs(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function Ls(t,e){let{nodeList:r,nodeInfoList:n}=e;if(n.length)for(let i=0;i<n.length;i++){let o=n[i],s=r[i],a=o.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];zs(s,c),Is(s,t,c)}s.__dataHost=t}}function zs(t,e){if(e.isCompound){let r=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=n[s].literal;let o=e.target;r[o]=i,e.literal&&e.kind=="property"&&(o==="className"&&(t=j(t)),t[o]=e.literal)}}function Is(t,e,r){if(r.listenerEvent){let n=r.parts[0];t.addEventListener(r.listenerEvent,function(i){Es(i,e,r.target,n.source,n.negate)})}}function Tr(t,e,r,n,i,o){o=e.static||o&&(typeof o!="object"||o[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:o};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||t._addPropertyEffect(l.rootProperty,r,{fn:n,info:s,trigger:l});return o&&t._addPropertyEffect(e.methodName,r,{fn:n,info:s}),s}function vt(t,e,r,n,i){let o=t._methodHost||t,s=o[i.methodName];if(s){let a=t._marshalArgs(i.args,e,r);return a===Ee?Ee:s.apply(o,a)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const Ds=[],Ni="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Us="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Fs="(?:'(?:[^'\\\\]|\\\\.)*')",Hs='(?:"(?:[^"\\\\]|\\\\.)*")',Bs="(?:"+Fs+"|"+Hs+")",$r="(?:("+Ni+"|"+Us+"|"+Bs+")\\s*)",js="(?:"+$r+"(?:,\\s*"+$r+")*)",Vs="(?:\\(\\s*(?:"+js+"?)\\)\\s*)",qs="("+Ni+"\\s*"+Vs+"?)",Ws="(\\[\\[|{{)\\s*",Ys="(?:]]|}})",Ks="(?:(!)\\s*)?",Gs=Ws+Ks+qs+Ys,Or=new RegExp(Gs,"g");function kr(t){let e="";for(let r=0;r<t.length;r++){let n=t[r].literal;e+=n||""}return e}function lt(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let n={methodName:e[1],static:!0,args:Ds};if(e[2].trim()){let i=e[2].replace(/\\,/g,"&comma;").split(",");return Js(i,n)}else return n}return null}function Js(t,e){return e.args=t.map(function(r){let n=Mi(r);return n.literal||(e.static=!1),n},this),e}function Mi(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:e,value:"",literal:!1},n=e[0];switch(n==="-"&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':r.value=e.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(e),r.literal=!0;break}return r.literal||(r.rootProperty=G(e),r.structured=yt(e),r.structured&&(r.wildcard=e.slice(-2)==".*",r.wildcard&&(r.name=e.slice(0,-2)))),r}function Nr(t,e,r){let n=b(t,r);return n===void 0&&(n=e[r]),n}function Ri(t,e,r,n){const i={indexSplices:n};gt&&!t._overrideLegacyUndefined&&(e.splices=i),t.notifyPath(r+".splices",i),t.notifyPath(r+".length",e.length),gt&&!t._overrideLegacyUndefined&&(i.indexSplices=[])}function le(t,e,r,n,i,o){Ri(t,e,r,[{index:n,addedCount:i,removed:o,object:e,type:"splice"}])}function Xs(t){return t[0].toUpperCase()+t.substring(1)}const Qs=oe(t=>{const e=gs(as(t));class r extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return f}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ce.length){let i=ce[ce.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let o=this[f.READ_ONLY];for(let s in i)(!o||!o[s])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[s]=this.__dataPending[s]=i[s])}_addPropertyEffect(i,o,s){this._createPropertyAccessor(i,o==f.READ_ONLY);let a=st(this,o,!0)[i];a||(a=this[o][i]=[]),a.push(s)}_removePropertyEffect(i,o,s){let a=st(this,o,!0)[i],l=a.indexOf(s);l>=0&&a.splice(l,1)}_hasPropertyEffect(i,o){let s=this[o];return!!(s&&s[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,f.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,f.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,f.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,f.COMPUTE)}_setPendingPropertyOrPath(i,o,s,a){if(a||G(Array.isArray(i)?i[0]:i)!==i){if(!a){let l=b(this,i);if(i=Er(this,i,o),!i||!super._shouldPropertyChange(i,o,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,o,s))return $s(this,i,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,o,s);this[i]=o}return!1}_setUnmanagedPropertyToNode(i,o,s){(s!==i[o]||typeof s=="object")&&(o==="className"&&(i=j(i)),i[o]=s)}_setPendingProperty(i,o,s){let a=this.__dataHasPaths&&yt(i),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,o,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),a?this.__dataTemp[i]=o:this.__data[i]=o,this.__dataPending[i]=o,(a||this[f.NOTIFY]&&this[f.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=s),!0):!1}_setProperty(i,o){this._setPendingProperty(i,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let o=0;o<i.length;o++){let s=i[o];s.__dataEnabled?s.__dataPending&&s._flushProperties():s._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,o){for(let s in i)(o||!this[f.READ_ONLY]||!this[f.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,i[s],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,o,s){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;As(this,o,s,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,s,a),this._flushClients(),he(this,this[f.REFLECT],o,s,a),he(this,this[f.OBSERVE],o,s,a),l&&vs(this,l,o,s,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,o,s){this[f.PROPAGATE]&&he(this,this[f.PROPAGATE],i,o,s),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,o,s)}_runEffectsForTemplate(i,o,s,a){const l=(c,d)=>{he(this,i.propertyEffects,c,s,d,i.nodeList);for(let u=i.firstChild;u;u=u.nextSibling)this._runEffectsForTemplate(u,c,s,d)};i.runEffects?i.runEffects(l,o,a):l(o,a)}linkPaths(i,o){i=ue(i),o=ue(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=o}unlinkPaths(i){i=ue(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,o){let s={path:""},a=b(this,i,s);Ri(this,a,s.path,o)}get(i,o){return b(o||this,i)}set(i,o,s){s?Er(s,i,o):(!this[f.READ_ONLY]||!this[f.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,o,!0)&&this._invalidateProperties()}push(i,...o){let s={path:""},a=b(this,i,s),l=a.length,c=a.push(...o);return o.length&&le(this,a,s.path,l,o.length,[]),c}pop(i){let o={path:""},s=b(this,i,o),a=!!s.length,l=s.pop();return a&&le(this,s,o.path,s.length,0,[l]),l}splice(i,o,s,...a){let l={path:""},c=b(this,i,l);o<0?o=c.length-Math.floor(-o):o&&(o=Math.floor(o));let d;return arguments.length===2?d=c.splice(o):d=c.splice(o,s,...a),(a.length||d.length)&&le(this,c,l.path,o,a.length,d),d}shift(i){let o={path:""},s=b(this,i,o),a=!!s.length,l=s.shift();return a&&le(this,s,o.path,0,0,[l]),l}unshift(i,...o){let s={path:""},a=b(this,i,s),l=a.unshift(...o);return o.length&&le(this,a,s.path,0,o.length,[]),l}notifyPath(i,o){let s;if(arguments.length==1){let a={path:""};o=b(this,i,a),s=a.path}else Array.isArray(i)?s=ue(i):s=i;this._setPendingPropertyOrPath(s,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,o){this._addPropertyEffect(i,f.READ_ONLY),o&&(this["_set"+Xs(i)]=function(s){this._setProperty(i,s)})}_createPropertyObserver(i,o,s){let a={property:i,method:o,dynamicFn:!!s};this._addPropertyEffect(i,f.OBSERVE,{fn:Sr,info:a,trigger:{name:i}}),s&&this._addPropertyEffect(o,f.OBSERVE,{fn:Sr,info:a,trigger:{name:o}})}_createMethodObserver(i,o){let s=lt(i);if(!s)throw new Error("Malformed observer expression '"+i+"'");Tr(this,s,f.OBSERVE,vt,null,o)}_createNotifyingProperty(i){this._addPropertyEffect(i,f.NOTIFY,{fn:Ps,info:{eventName:Ze(i)+"-changed",property:i}})}_createReflectedProperty(i){let o=this.constructor.attributeNameForProperty(i);o[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,f.REFLECT,{fn:xs,info:{attrName:o}})}_createComputedProperty(i,o,s){let a=lt(o);if(!a)throw new Error("Malformed computed expression '"+o+"'");const l=Tr(this,a,f.COMPUTE,ki,i,s);st(this,$i)[i]=l}_marshalArgs(i,o,s){const a=this.__data,l=[];for(let c=0,d=i.length;c<d;c++){let{name:u,structured:h,wildcard:p,value:m,literal:v}=i[c];if(!v)if(p){const w=Ve(u,o),y=Nr(a,s,w?o:u);m={path:w?o:u,value:y,base:w?b(a,u):y}}else m=h?Nr(a,s,u):a[u];if(gt&&!this._overrideLegacyUndefined&&m===void 0&&i.length>1)return Ee;l[c]=m}return l}static addPropertyEffect(i,o,s){this.prototype._addPropertyEffect(i,o,s)}static createPropertyObserver(i,o,s){this.prototype._createPropertyObserver(i,o,s)}static createMethodObserver(i,o){this.prototype._createMethodObserver(i,o)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,o){this.prototype._createReadOnlyProperty(i,o)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,o,s){this.prototype._createComputedProperty(i,o,s)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,o){let s=this.constructor._parseTemplate(i),a=this.__preBoundTemplateInfo==s;if(!a)for(let l in s.propertyEffects)this._createPropertyAccessor(l);if(o)if(s=Object.create(s),s.wasPreBound=a,!this.__templateInfo)this.__templateInfo=s;else{const l=i._parentTemplateInfo||this.__templateInfo,c=l.lastChild;s.parent=l,l.lastChild=s,s.previousSibling=c,c?c.nextSibling=s:l.firstChild=s}else this.__preBoundTemplateInfo=s;return s}static _addTemplatePropertyEffect(i,o,s){let a=i.hostProps=i.hostProps||{};a[o]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[o]=l[o]||[]).push(s)}_stampTemplate(i,o){o=o||this._bindTemplate(i,!0),ce.push(this);let s=super._stampTemplate(i,o);if(ce.pop(),o.nodeList=s.nodeList,!o.wasPreBound){let a=o.childNodes=[];for(let l=s.firstChild;l;l=l.nextSibling)a.push(l)}return s.templateInfo=o,Ls(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),s}_removeBoundDom(i){const o=i.templateInfo,{previousSibling:s,nextSibling:a,parent:l}=o;s?s.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=s:l&&(l.lastChild=s),o.nextSibling=o.previousSibling=null;let c=o.childNodes;for(let d=0;d<c.length;d++){let u=c[d];j(j(u).parentNode).removeChild(u)}}static _parseTemplateNode(i,o,s){let a=e._parseTemplateNode.call(this,i,o,s);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,o);l&&(i.textContent=kr(l)||" ",at(this,o,s,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(i,o,s,a,l){let c=this._parseBindings(l,o);if(c){let d=a,u="property";ys.test(a)?u="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),u="attribute");let h=kr(c);return h&&u=="attribute"&&(a=="class"&&i.hasAttribute("class")&&(h+=" "+i.getAttribute(a)),i.setAttribute(a,h)),u=="attribute"&&d=="disable-upgrade$"&&i.setAttribute(a,""),i.localName==="input"&&d==="value"&&i.setAttribute(d,""),i.removeAttribute(d),u==="property"&&(a=Ei(a)),at(this,o,s,u,a,c,h),!0}else return e._parseTemplateNodeAttribute.call(this,i,o,s,a,l)}static _parseTemplateNestedTemplate(i,o,s){let a=e._parseTemplateNestedTemplate.call(this,i,o,s);const l=i.parentNode,c=s.templateInfo,d=l.localName==="dom-if",u=l.localName==="dom-repeat";yr&&(d||u)&&(l.removeChild(i),s=s.parentInfo,s.templateInfo=c,s.noted=!0,a=!1);let h=c.hostProps;if(Bo&&d)h&&(o.hostProps=Object.assign(o.hostProps||{},h),yr||(s.parentInfo.noted=!0));else{let p="{";for(let m in h){let v=[{mode:p,source:m,dependencies:[m],hostProp:!0}];at(this,o,s,"property","_host_"+m,v)}}return a}static _parseBindings(i,o){let s=[],a=0,l;for(;(l=Or.exec(i))!==null;){l.index>a&&s.push({literal:i.slice(a,l.index)});let c=l[1][0],d=!!l[2],u=l[3].trim(),h=!1,p="",m=-1;c=="{"&&(m=u.indexOf("::"))>0&&(p=u.substring(m+2),u=u.substring(0,m),h=!0);let v=lt(u),w=[];if(v){let{args:y,methodName:_}=v;for(let se=0;se<y.length;se++){let Se=y[se];Se.literal||w.push(Se)}let C=o.dynamicFns;(C&&C[_]||v.static)&&(w.push(_),v.dynamicFn=!0)}else w.push(u);s.push({source:u,mode:c,negate:d,customEvent:h,signature:v,dependencies:w,event:p}),a=Or.lastIndex}if(a&&a<i.length){let c=i.substring(a);c&&s.push({literal:c})}return s.length?s:null}static _evaluateBinding(i,o,s,a,l,c){let d;return o.signature?d=vt(i,s,a,l,o.signature):s!=o.source?d=b(i,o.source):c&&yt(s)?d=b(i,s):d=i.__data[s],o.negate&&(d=!d),d}}return r}),ce=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Zs(t){const e={};for(let r in t){const n=t[r];e[r]=typeof n=="function"?{type:n}:n}return e}const ea=oe(t=>{const e=Si(t);function r(o){const s=Object.getPrototypeOf(o);return s.prototype instanceof i?s:null}function n(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let s=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){const a=o.properties;a&&(s=Zs(a))}o.__ownProperties=s}return o.__ownProperties}class i extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const s=this._properties;this.__observedAttributes=s?Object.keys(s).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const s=r(this);s&&s.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const s=n(this);s&&this.createProperties(s)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const s=r(this);this.__properties=Object.assign({},s&&s._properties,n(this))}return this.__properties}static typeForProperty(s){const a=this._properties[s];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const ta="3.5.2",Mr=window.ShadyCSS&&window.ShadyCSS.cssBuild,ra=oe(t=>{const e=ea(Qs(t));function r(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let d in c){let u=c[d];"value"in u&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[d]=u)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,c,d,u){d.computed&&(d.readOnly=!0),d.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,d.computed,u)),d.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!d.computed):d.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),d.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):d.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),d.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):d.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),d.observer&&l._createPropertyObserver(c,d.observer,u[d.observer]),l._addPropertyToAttributeMap(c)}function o(l,c,d,u){if(!Mr){const h=c.content.querySelectorAll("style"),p=vi(c),m=Jo(d),v=c.content.firstElementChild;for(let y=0;y<m.length;y++){let _=m[y];_.textContent=l._processStyleText(_.textContent,u),c.content.insertBefore(_,v)}let w=0;for(let y=0;y<p.length;y++){let _=p[y],C=h[w];C!==_?(_=_.cloneNode(!0),C.parentNode.insertBefore(_,C)):w++,_.textContent=l._processStyleText(_.textContent,u)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,d),jo&&Mr&&Lo){const h=c.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(m=>{p+=m.textContent,m.parentNode.removeChild(m)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function s(l){let c=null;if(l&&(!_t||Io)&&(c=we.import(l,"template"),_t&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends e{static get polymerElementVersion(){return ta}static _finalizeClass(){e._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Do||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let d in c)i(this.prototype,d,c[d],c)}static createObservers(c,d){const u=this.prototype;for(let h=0;h<c.length;h++)u._createMethodObserver(c[h],d)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&s(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=zt(c.url);else{const d=we.import(this.is);this._importPath=d&&d.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=zo,this.importPath=this.constructor.importPath;let c=r(this.constructor);if(c)for(let d in c){let u=c[d];if(this._canApplyPropertyDefault(d)){let h=typeof u.value=="function"?u.value.call(this):u.value;this._hasAccessor(d)?this._setPendingProperty(d,h,!0):this[d]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,d){return Lt(c,d)}static _finalizeTemplate(c){const d=this.prototype._template;if(d&&!d.__polymerFinalized){d.__polymerFinalized=!0;const u=this.importPath,h=u?_e(u):"";o(this,d,c,h),this.prototype._bindTemplate(d)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const d=j(this);if(d.attachShadow)return c?(d.shadowRoot||(d.attachShadow({mode:"open",shadyUpgradeFragment:c}),d.shadowRoot.appendChild(c),this.constructor._styleSheet&&(d.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Fo&&window.ShadyDOM&&window.ShadyDOM.flushInitial(d.shadowRoot),d.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,d){return!d&&this.importPath&&(d=_e(this.importPath)),_e(c,d)}static _parseTemplateContent(c,d,u){return d.dynamicFns=d.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,d,u)}static _addTemplatePropertyEffect(c,d,u){return Uo&&!(d in this._properties)&&!(u.info.part.signature&&u.info.part.signature.static)&&!u.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${d}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,d,u)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rr=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class Li{constructor(e,r){Ii(e,r);const n=r.reduce((i,o,s)=>i+zi(o)+e[s+1],e[0]);this.value=n.toString()}toString(){return this.value}}function zi(t){if(t instanceof Li)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function ia(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Li)return zi(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const na=function(e,...r){Ii(e,r);const n=document.createElement("template");let i=r.reduce((o,s,a)=>o+ia(s)+e[a+1],e[0]);return Rr&&(i=Rr.createHTML(i)),n.innerHTML=i,n},Ii=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const oa=ra(HTMLElement),Di=new WeakMap;function sa(t,e){let r=e;for(;r;){if(Di.get(r)===t)return!0;r=Object.getPrototypeOf(r)}return!1}function et(t){return e=>{if(sa(t,e))return e;const r=t(e);return Di.set(r,t),r}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const aa=et(t=>typeof t.prototype.addController=="function"?t:class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(r=>{r.hostConnected&&r.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(r=>{r.hostDisconnected&&r.hostDisconnected()})}addController(r){this.__controllers.add(r),this.$!==void 0&&this.isConnected&&r.hostConnected&&r.hostConnected()}removeController(r){this.__controllers.delete(r)}}),la=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Le=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ca(){function t(){return!0}return Ui(t)}function da(){try{return ua()?!0:ha()?Le?!pa():!ca():!1}catch{return!1}}function ua(){return localStorage.getItem("vaadin.developmentmode.force")}function ha(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function pa(){return!!(Le&&Object.keys(Le).map(e=>Le[e]).filter(e=>e.productionMode).length>0)}function Ui(t,e){if(typeof t!="function")return;const r=la.exec(t.toString());if(r)try{t=new Function(r[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return t(e)}window.Vaadin=window.Vaadin||{};const Lr=function(t,e){if(window.Vaadin.developmentMode)return Ui(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=da());function fa(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const ma=function(){if(typeof Lr=="function")return Lr(fa)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let zr=0,Fi=0;const ee=[];let wt=!1;function _a(){wt=!1;const t=ee.length;for(let e=0;e<t;e++){const r=ee[e];if(r)try{r()}catch(n){setTimeout(()=>{throw n})}}ee.splice(0,t),Fi+=t}const ga={run(t){return window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16)},cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},ya={run(t){wt||(wt=!0,queueMicrotask(()=>_a())),ee.push(t);const e=zr;return zr+=1,e},cancel(t){const e=t-Fi;if(e>=0){if(!ee[e])throw new Error(`invalid async handle: ${t}`);ee[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pt=new Set;class Ye{static debounce(e,r,n){return e instanceof Ye?e._cancelAsync():e=new Ye,e.setConfig(r,n),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,r){this._asyncModule=e,this._callback=r,this._timer=this._asyncModule.run(()=>{this._timer=null,Pt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Pt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function ba(t){Pt.add(t)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const k=[];function Et(t,e,r=t.getAttribute("dir")){e?t.setAttribute("dir",e):r!=null&&t.removeAttribute("dir")}function xt(){return document.documentElement.getAttribute("dir")}function va(){const t=xt();k.forEach(e=>{Et(e,t)})}const wa=new MutationObserver(va);wa.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Pa=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:r=>r||"",toAttribute:r=>r===""?null:r}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Et(this,xt(),null))}attributeChangedCallback(r,n,i){if(super.attributeChangedCallback(r,n,i),r!=="dir")return;const o=xt(),s=i===o&&k.indexOf(this)===-1,a=!i&&n&&k.indexOf(this)===-1;s||a?(this.__subscribe(),Et(this,o,i)):i!==o&&n===o&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=k.includes(this),this.__unsubscribe()}_valueToNodeAttribute(r,n,i){i==="dir"&&n===""&&!r.hasAttribute("dir")||super._valueToNodeAttribute(r,n,i)}_attributeToProperty(r,n,i){r==="dir"&&!n?this.dir="":super._attributeToProperty(r,n,i)}__subscribe(){k.includes(this)||k.push(this)}__unsubscribe(){k.includes(this)&&k.splice(k.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){ma()};let ct;const Ir=new Set,Ea=t=>class extends Pa(t){static finalize(){super.finalize();const{is:r}=this;r&&!Ir.has(r)&&(window.Vaadin.registrations.push(this),Ir.add(r),window.Vaadin.developmentModeCallback&&(ct=Ye.debounce(ct,ga,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),ba(ct)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function xa(t){return t.nodeType===Node.TEXT_NODE&&t.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Aa{constructor(e,r){this.slot=e,this.callback=r,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const e=this.slot.assignedNodes({flatten:!0});let r=[];const n=[],i=[];e.length&&(r=e.filter(o=>!this._storedNodes.includes(o))),this._storedNodes.length&&this._storedNodes.forEach((o,s)=>{const a=e.indexOf(o);a===-1?n.push(o):a!==s&&i.push(o)}),(r.length||n.length||i.length)&&this.callback({addedNodes:r,currentNodes:e,movedNodes:i,removedNodes:n}),this._storedNodes=e}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Sa=0;function Ca(){return Sa++}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ta extends EventTarget{static generateId(e,r="default"){return`${r}-${e.localName}-${Ca()}`}constructor(e,r,n,i={}){super();const{initializer:o,multiple:s,observe:a,useUniqueId:l,uniqueIdPrefix:c}=i;this.host=e,this.slotName=r,this.tagName=n,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof s=="boolean"?s:!1,this.slotInitializer=o,s&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(e,c||r))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let e=this.getSlotChild();e?(this.node=e,this.initAddedNode(e)):(e=this.attachDefaultNode(),this.initNode(e))}initMultiple(){const e=this.getSlotChildren();if(e.length===0){const r=this.attachDefaultNode();r&&(this.nodes=[r],this.initNode(r))}else this.nodes=e,e.forEach(r=>{this.initAddedNode(r)})}attachDefaultNode(){const{host:e,slotName:r,tagName:n}=this;let i=this.defaultNode;return!i&&n&&(i=document.createElement(n),i instanceof Element&&(r!==""&&i.setAttribute("slot",r),this.defaultNode=i)),i&&(this.node=i,e.appendChild(i)),i}getSlotChildren(){const{slotName:e}=this;return Array.from(this.host.childNodes).filter(r=>r.nodeType===Node.ELEMENT_NODE&&r.hasAttribute("data-slot-ignore")?!1:r.nodeType===Node.ELEMENT_NODE&&r.slot===e||r.nodeType===Node.TEXT_NODE&&r.textContent.trim()&&e==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(e){const{slotInitializer:r}=this;r&&r(e,this.host)}initCustomNode(e){}teardownNode(e){}initAddedNode(e){e!==this.defaultNode&&(this.initCustomNode(e),this.initNode(e))}observeSlot(){const{slotName:e}=this,r=e===""?"slot:not([name])":`slot[name=${e}]`,n=this.host.shadowRoot.querySelector(r);this.__slotObserver=new Aa(n,({addedNodes:i,removedNodes:o})=>{const s=this.multiple?this.nodes:[this.node],a=i.filter(l=>!xa(l)&&!s.includes(l)&&!(l.nodeType===Node.ELEMENT_NODE&&l.hasAttribute("data-slot-ignore")));o.length&&(this.nodes=s.filter(l=>!o.includes(l)),o.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...s,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $a extends Ta{constructor(e){super(e,"tooltip"),this.setTarget(e),this.__onContentChange=this.__onContentChange.bind(this)}initCustomNode(e){e.target=this.target,this.ariaTarget!==void 0&&(e.ariaTarget=this.ariaTarget),this.context!==void 0&&(e.context=this.context),this.manual!==void 0&&(e.manual=this.manual),this.opened!==void 0&&(e.opened=this.opened),this.position!==void 0&&(e._position=this.position),this.shouldShow!==void 0&&(e.shouldShow=this.shouldShow),this.manual||this.host.setAttribute("has-tooltip",""),this.__notifyChange(e),e.addEventListener("content-changed",this.__onContentChange)}teardownNode(e){this.manual||this.host.removeAttribute("has-tooltip"),e.removeEventListener("content-changed",this.__onContentChange),this.__notifyChange(null)}setAriaTarget(e){this.ariaTarget=e;const r=this.node;r&&(r.ariaTarget=e)}setContext(e){this.context=e;const r=this.node;r&&(r.context=e)}setManual(e){this.manual=e;const r=this.node;r&&(r.manual=e)}setOpened(e){this.opened=e;const r=this.node;r&&(r.opened=e)}setPosition(e){this.position=e;const r=this.node;r&&(r._position=e)}setShouldShow(e){this.shouldShow=e;const r=this.node;r&&(r.shouldShow=e)}setTarget(e){this.target=e;const r=this.node;r&&(r.target=e)}__onContentChange(e){this.__notifyChange(e.target)}__notifyChange(e){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:e}}))}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oa=E`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: var(--_vaadin-button-disabled-pointer-events, none);
    cursor: not-allowed;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ka=t=>t,Hi=typeof document.head.style.touchAction=="string",At="__polymerGestures",dt="__polymerGesturesHandled",St="__polymerGesturesTouchAction",Dr=25,Ur=5,Na=2,Ma=["mousedown","mousemove","mouseup","click"],Ra=[0,1,4,2],La=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Ut(t){return Ma.indexOf(t)>-1}let za=!1;(function(){try{const t=Object.defineProperty({},"passive",{get(){za=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function Ia(t){Ut(t)}const Da=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Ua={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function V(t){const e=t.type;if(!Ut(e))return!1;if(e==="mousemove"){let n=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!La&&(n=Ra[t.which]||0),!!(n&1)}return(t.button===void 0?0:t.button)===0}function Fa(t){if(t.type==="click"){if(t.detail===0)return!0;const e=D(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const r=e.getBoundingClientRect(),n=t.pageX,i=t.pageY;return!(n>=r.left&&n<=r.right&&i>=r.top&&i<=r.bottom)}return!1}const N={touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Ha(t){let e="auto";const r=ji(t);for(let n=0,i;n<r.length;n++)if(i=r[n],i[St]){e=i[St];break}return e}function Bi(t,e,r){t.movefn=e,t.upfn=r,document.addEventListener("mousemove",e),document.addEventListener("mouseup",r)}function te(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const ji=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Ft={},H=[];function Ba(t,e){let r=document.elementFromPoint(t,e),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){const i=n;if(n=n.shadowRoot.elementFromPoint(t,e),i===n)break;n&&(r=n)}return r}function D(t){const e=ji(t);return e.length>0?e[0]:t.target}function ja(t){const e=t.type,n=t.currentTarget[At];if(!n)return;const i=n[e];if(!i)return;if(!t[dt]&&(t[dt]={},e.startsWith("touch"))){const s=t.changedTouches[0];if(e==="touchstart"&&t.touches.length===1&&(N.touch.id=s.identifier),N.touch.id!==s.identifier)return;Hi||(e==="touchstart"||e==="touchmove")&&Va(t)}const o=t[dt];if(!o.skip){for(let s=0,a;s<H.length;s++)a=H[s],i[a.name]&&!o[a.name]&&a.flow&&a.flow.start.indexOf(t.type)>-1&&a.reset&&a.reset();for(let s=0,a;s<H.length;s++)a=H[s],i[a.name]&&!o[a.name]&&(o[a.name]=!0,a[e](t))}}function Va(t){const e=t.changedTouches[0],r=t.type;if(r==="touchstart")N.touch.x=e.clientX,N.touch.y=e.clientY,N.touch.scrollDecided=!1;else if(r==="touchmove"){if(N.touch.scrollDecided)return;N.touch.scrollDecided=!0;const n=Ha(t);let i=!1;const o=Math.abs(N.touch.x-e.clientX),s=Math.abs(N.touch.y-e.clientY);t.cancelable&&(n==="none"?i=!0:n==="pan-x"?i=s>o:n==="pan-y"&&(i=o>s)),i?t.preventDefault():Ke("track")}}function Fr(t,e,r){return Ft[e]?(qa(t,e,r),!0):!1}function qa(t,e,r){const n=Ft[e],i=n.deps,o=n.name;let s=t[At];s||(t[At]=s={});for(let a=0,l,c;a<i.length;a++)l=i[a],!(Da&&Ut(l)&&l!=="click")&&(c=s[l],c||(s[l]=c={_count:0}),c._count===0&&t.addEventListener(l,ja,Ia(l)),c[o]=(c[o]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,r),n.touchAction&&Ya(t,n.touchAction)}function Ht(t){H.push(t),t.emits.forEach(e=>{Ft[e]=t})}function Wa(t){for(let e=0,r;e<H.length;e++){r=H[e];for(let n=0,i;n<r.emits.length;n++)if(i=r.emits[n],i===t)return r}return null}function Ya(t,e){Hi&&t instanceof HTMLElement&&ya.run(()=>{t.style.touchAction=e}),t[St]=e}function Bt(t,e,r){const n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,ka(t).dispatchEvent(n),n.defaultPrevented){const i=r.preventer||r.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function Ke(t){const e=Wa(t);e.info&&(e.info.prevent=!0)}Ht({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){te(this.info)},mousedown(t){if(!V(t))return;const e=D(t),r=this,n=o=>{V(o)||(de("up",e,o),te(r.info))},i=o=>{V(o)&&de("up",e,o),te(r.info)};Bi(this.info,n,i),de("down",e,t)},touchstart(t){de("down",D(t),t.changedTouches[0],t)},touchend(t){de("up",D(t),t.changedTouches[0],t)}});function de(t,e,r,n){e&&Bt(e,t,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent(i){return Ke(i)}})}Ht({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>Na&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,te(this.info)},mousedown(t){if(!V(t))return;const e=D(t),r=this,n=o=>{const s=o.clientX,a=o.clientY;Hr(r.info,s,a)&&(r.info.state=r.info.started?o.type==="mouseup"?"end":"track":"start",r.info.state==="start"&&Ke("tap"),r.info.addMove({x:s,y:a}),V(o)||(r.info.state="end",te(r.info)),e&&ut(r.info,e,o),r.info.started=!0)},i=o=>{r.info.started&&n(o),te(r.info)};Bi(this.info,n,i),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=D(t),r=t.changedTouches[0],n=r.clientX,i=r.clientY;Hr(this.info,n,i)&&(this.info.state==="start"&&Ke("tap"),this.info.addMove({x:n,y:i}),ut(this.info,e,r),this.info.state="track",this.info.started=!0)},touchend(t){const e=D(t),r=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),ut(this.info,e,r))}});function Hr(t,e,r){if(t.prevent)return!1;if(t.started)return!0;const n=Math.abs(t.x-e),i=Math.abs(t.y-r);return n>=Ur||i>=Ur}function ut(t,e,r){if(!e)return;const n=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],o=i.x-t.x,s=i.y-t.y;let a,l=0;n&&(a=i.x-n.x,l=i.y-n.y),Bt(e,"track",{state:t.state,x:r.clientX,y:r.clientY,dx:o,dy:s,ddx:a,ddy:l,sourceEvent:r,hover(){return Ba(r.clientX,r.clientY)}})}Ht({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){V(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){V(t)&&Br(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){Br(this.info,t.changedTouches[0],t)}});function Br(t,e,r){const n=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),o=D(r||e);!o||Ua[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=Dr&&i<=Dr||Fa(e))&&(t.prevent||Bt(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r}))}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vi=et(t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(r){this._setAriaDisabled(r)}_setAriaDisabled(r){r?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ka=et(t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",r=>{this._onKeyDown(r)}),this.addEventListener("keyup",r=>{this._onKeyUp(r)})}_onKeyDown(r){switch(r.key){case"Enter":this._onEnter(r);break;case"Escape":this._onEscape(r);break}}_onKeyUp(r){}_onEnter(r){}_onEscape(r){}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ga=t=>class extends Vi(Ka(t)){get _activeKeys(){return[" "]}ready(){super.ready(),Fr(this,"down",r=>{this._shouldSetActive(r)&&this._setActive(!0)}),Fr(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(r){return!this.disabled}_onKeyDown(r){super._onKeyDown(r),this._shouldSetActive(r)&&this._activeKeys.includes(r.key)&&(this._setActive(!0),document.addEventListener("keyup",n=>{this._activeKeys.includes(n.key)&&this._setActive(!1)},{once:!0}))}_setActive(r){this.toggleAttribute("active",r)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let jt=!1;window.addEventListener("keydown",()=>{jt=!0},{capture:!0});window.addEventListener("mousedown",()=>{jt=!1},{capture:!0});function Ja(){return jt}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xa=et(t=>class extends t{get _keyboardActive(){return Ja()}ready(){this.addEventListener("focusin",r=>{this._shouldSetFocus(r)&&this._setFocused(!0)}),this.addEventListener("focusout",r=>{this._shouldRemoveFocus(r)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}focus(r){super.focus(r),r&&r.focusVisible===!1||this.setAttribute("focus-ring","")}_setFocused(r){this.toggleAttribute("focused",r),this.toggleAttribute("focus-ring",r&&this._keyboardActive)}_shouldSetFocus(r){return!0}_shouldRemoveFocus(r){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qa=t=>class extends Vi(t){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged",sync:!0},_lastTabIndex:{type:Number}}}_disabledChanged(r,n){super._disabledChanged(r,n),!this.__shouldAllowFocusWhenDisabled()&&(r?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.setAttribute("tabindex","-1")):n&&(this._lastTabIndex!==void 0?this.setAttribute("tabindex",this._lastTabIndex):this.tabindex=void 0))}_tabindexChanged(r){this.__shouldAllowFocusWhenDisabled()||this.disabled&&r!==-1&&(this._lastTabIndex=r,this.setAttribute("tabindex","-1"))}focus(r){(!this.disabled||this.__shouldAllowFocusWhenDisabled())&&super.focus(r)}__shouldAllowFocusWhenDisabled(){return!1}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Za=["mousedown","mouseup","click","dblclick","keypress","keydown","keyup"],el=t=>class extends Ga(Qa(Xa(t))){constructor(){super(),this.__onInteractionEvent=this.__onInteractionEvent.bind(this),Za.forEach(r=>{this.addEventListener(r,this.__onInteractionEvent,!0)}),this.tabindex=0}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button"),this.__shouldAllowFocusWhenDisabled()&&this.style.setProperty("--_vaadin-button-disabled-pointer-events","auto")}_onKeyDown(r){super._onKeyDown(r),!(r.altKey||r.shiftKey||r.ctrlKey||r.metaKey)&&this._activeKeys.includes(r.key)&&(r.preventDefault(),this.click())}__onInteractionEvent(r){this.__shouldSuppressInteractionEvent(r)&&r.stopImmediatePropagation()}__shouldSuppressInteractionEvent(r){return this.disabled}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Qe("vaadin-button",Oa,{moduleId:"vaadin-button-styles"});class tl extends el(Ea(Po(aa(oa)))){static get properties(){return{disabled:{type:Boolean,value:!1}}}static get is(){return"vaadin-button"}static get template(){return na`
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>

        <slot name="tooltip"></slot>
      </div>
    `}ready(){super.ready(),this._tooltipController=new $a(this),this.addController(this._tooltipController)}__shouldAllowFocusWhenDisabled(){return window.Vaadin.featureFlags.accessibleDisabledButtons}}ui(tl);var rl=Object.getOwnPropertyDescriptor,il=(t,e,r,n)=>{for(var i=n>1?void 0:n?rl(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=s(i)||i);return i};let Ge=class extends M{connectedCallback(){super.connectedCallback(),console.log("[landing-view] connectedCallback called")}render(){return console.log("[landing-view] render called"),Q`
      <div class="landing-container">
        <div class="card">
          <h1>Welcome to <span class="premium">Aurelian</span></h1>
          <p class="subtitle">
            The CRM of distinction for those who lead.
            Where exceptional businesses cultivate lasting relationships.
          </p>

          <div class="features">
            <div class="feature">
              <h3>Easy to Use</h3>
              <p>Intuitive interface designed for both beginners and professionals.</p>
            </div>
            <div class="feature">
              <h3>Powerful Features</h3>
              <p>All the tools you need to manage your customer relationships effectively.</p>
            </div>
            <div class="feature">
              <h3>Secure & Reliable</h3>
              <p>Your data is protected with the latest security measures.</p>
            </div>
          </div>

          <div class="buttons">
            <!-- Add data-path attributes and keep inline click as a safety net -->
            <vaadin-button theme="primary" data-path="/register" @click=${()=>this.navigateTo("/register")}>Create Account</vaadin-button>
            <vaadin-button theme="secondary" data-path="/login" @click=${()=>this.navigateTo("/login")}>Log In</vaadin-button>
          </div>
        </div>
      </div>
    `}firstUpdated(){console.log("[landing-view] firstUpdated called");try{const t=this.shadowRoot;if(!t)return;const e=Array.from(t.querySelectorAll("vaadin-button"));console.log("[landing-view] found buttons:",e.length),e.forEach(r=>{r.__landingAttached||(console.log("[landing-view] attaching click listener to button:",r.textContent),r.addEventListener("click",i=>{var a,l;console.log("[landing-view] button clicked, path:",(a=i.currentTarget.dataset)==null?void 0:a.path);const o=i.currentTarget,s=(l=o==null?void 0:o.dataset)==null?void 0:l.path;if(s)this.navigateTo(s);else{const c=(o&&(o.textContent||"")).toLowerCase();c.includes("register")||c.includes("create")?this.navigateTo("/register"):(c.includes("login")||c.includes("log"))&&this.navigateTo("/login")}}),r.__landingAttached=!0)})}catch(t){console.warn("[landing-view] firstUpdated attach listeners failed",t)}}navigateTo(t){console.log("[landing-view] navigateTo called with",t,"current=",window.location.pathname);const e=document.getElementById("outlet");if(e){if(e.innerHTML="",t==="/register"){const r=document.createElement("register-view");e.appendChild(r)}else if(t==="/login"){const r=document.createElement("login-view");e.appendChild(r)}history.pushState({},"",t),console.log("[landing-view] manually rendered",t)}else console.warn("[landing-view] outlet not found")}};Ge.styles=E`
    .landing-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0b3b9e 100%);
      padding: 2rem;
      color: white;
      text-align: center;
    }
    
    .card {
      background: rgba(255, 255, 255, 0.07);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      width: 100%;
      max-width: 800px;
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08);
      padding: 2.5rem;
      border: 1px solid rgba(255,255,255,0.12);
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: #ffffff;
    }
    
    .subtitle {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin: 2.5rem 0;
      text-align: left;
    }
    
    .feature {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      padding: 1.5rem;
      border: 1px solid rgba(255,255,255,0.1);
    }
    
    .feature h3 {
      margin-top: 0;
      color: #60a5fa;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    
    .premium-glow {
      text-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
      letter-spacing: 0.5px;
    }
    
    .premium {
      color: #ffd700;
      font-weight: 600;
      position: relative;
      display: inline-block;
    }
    
    .premium:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -4px;
      left: 0;
      background: linear-gradient(90deg, transparent, #ffd700, transparent);
    }
    
    .buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
    }
    
    vaadin-button {
      padding: 0.75rem 2rem;
      font-weight: 500;
      border-radius: 8px;
      transition: all 0.2s;
      cursor: pointer; /* ensure pointer cursor */
    }
    
    vaadin-button[theme~="primary"] {
      background: #3b82f6;
      color: white;
      border: none;
    }
    
    vaadin-button[theme~="primary"]:hover {
      background: #2563eb;
      transform: translateY(-2px);
    }
    
    vaadin-button[theme~="secondary"] {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    vaadin-button[theme~="secondary"]:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
    }
  `;Ge=il([Mt("landing-view")],Ge);const jr=Object.freeze(Object.defineProperty({__proto__:null,get LandingView(){return Ge}},Symbol.toStringTag,{value:"Module"}));async function Vr(){try{const t=document.getElementById("outlet");if(!t)throw new Error("Could not find the outlet element");const e=new T(t);console.debug("[main] router created",e),window.vaadin=window.vaadin||{},window.vaadin.router=e,window.router=e,console.log("[main] router set globally:",!!e);try{window.dispatchEvent(new CustomEvent("vaadin-router-ready",{detail:{router:e}}))}catch{}e.setRoutes([{path:"/",component:"landing-view",action:()=>{Ce(()=>Promise.resolve().then(()=>jr),void 0)}},{path:"/login",component:"login-view",action:(o,s)=>localStorage.getItem("user")?s.redirect("/"):Ce(()=>Promise.resolve().then(()=>no),void 0)},{path:"/register",component:"register-view",action:(o,s)=>localStorage.getItem("user")?s.redirect("/"):Ce(()=>Promise.resolve().then(()=>ao),void 0)},{path:"(.*)",component:"landing-view",action:()=>{Ce(()=>Promise.resolve().then(()=>jr),void 0)}}]);const r=localStorage.getItem("user")!==null,n=window.location.pathname;!r&&!["/login","/register","/"].includes(n)?T.go("/login"):r&&["/login","/register"].includes(n)&&T.go("/");const i=document.querySelector("#outlet > div");i&&i.remove(),window.addEventListener("popstate",()=>{const o=window.location.pathname,s=document.getElementById("outlet");if(s){if(s.innerHTML="",o==="/"){const a=document.createElement("landing-view");s.appendChild(a)}else if(o==="/login"){const a=document.createElement("login-view");s.appendChild(a)}else if(o==="/register"){const a=document.createElement("register-view");s.appendChild(a)}}})}catch(t){console.error("Failed to initialize the app:",t);const e=document.createElement("div");e.style.color="red",e.style.padding="20px",e.style.textAlign="center",e.innerHTML=`
      <h2>Application Error</h2>
      <p>Failed to initialize the application. Please check the console for more details.</p>
      <p>${t instanceof Error?t.message:String(t)}</p>
      <button onclick="window.location.reload()" style="margin-top: 10px; padding: 8px 16px; cursor: pointer;">
        Reload Application
      </button>
    `;const r=document.getElementById("app")||document.body;r.innerHTML="",r.appendChild(e)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Vr):Vr();
//# sourceMappingURL=main-CFLL6kVa.js.map
