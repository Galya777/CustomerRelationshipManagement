var Ji=Object.defineProperty;var Xi=(r,e,t)=>e in r?Ji(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var T=(r,e,t)=>Xi(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Qi="modulepreload",Zi=function(r){return"/"+r},Kt={},$=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=Zi(l),l in Kt)return;Kt[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Qi,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})};function De(r){return r=r||[],Array.isArray(r)?r:[r]}function S(r){return`[Vaadin.Router] ${r}`}function en(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const Ue="module",Fe="nomodule",ft=[Ue,Fe];function Gt(r){if(!r.match(/.+\.[m]?js$/))throw new Error(S(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Gr(r){if(!r||!A(r.path))throw new Error(S('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!Y(r.action)&&!Array.isArray(r.children)&&!Y(r.children)&&!He(e)&&!t.some(n=>A(r[n])))throw new Error(S(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(A(e))Gt(e);else if(ft.some(n=>n in e))ft.forEach(n=>n in e&&Gt(e[n]));else throw new Error(S('Expected route bundle to include either "'+Fe+'" or "'+Ue+'" keys, or both'));r.redirect&&["bundle","component"].forEach(n=>{n in r&&console.warn(S(`Route config "${r.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function Jt(r){De(r).forEach(e=>Gr(e))}function Xt(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===Ue?t.setAttribute("type",Ue):e===Fe&&t.setAttribute(Fe,""),t.async=!0),new Promise((n,i)=>{t.onreadystatechange=t.onload=o=>{t.__dynamicImportLoaded=!0,n(o)},t.onerror=o=>{t.parentNode&&t.parentNode.removeChild(t),i(o)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function tn(r){return A(r)?Xt(r):Promise.race(ft.filter(e=>e in r).map(e=>Xt(r[e],e)))}function _e(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function He(r){return typeof r=="object"&&!!r}function Y(r){return typeof r=="function"}function A(r){return typeof r=="string"}function Jr(r){const e=new Error(S(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const Z=new class{};function rn(r){const e=r.port,t=r.protocol,o=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${o}`}function Qt(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let a=0;a<t.length;a++){const l=t[a];if(l.nodeName&&l.nodeName.toLowerCase()==="a"){e=l;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||rn(e))!==window.location.origin)return;const{pathname:i,search:o,hash:s}=e;_e("go",{pathname:i,search:o,hash:s})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const nn={activate(){window.document.addEventListener("click",Qt)},inactivate(){window.document.removeEventListener("click",Qt)}},on=/Trident/.test(navigator.userAgent);on&&!Y(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Zt(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;_e("go",{pathname:e,search:t,hash:n})}const sn={activate(){window.addEventListener("popstate",Zt)},inactivate(){window.removeEventListener("popstate",Zt)}};var ae=ri,an=$t,ln=hn,cn=Zr,dn=ti,Xr="/",Qr="./",un=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function $t(r,e){for(var t=[],n=0,i=0,o="",s=e&&e.delimiter||Xr,a=e&&e.delimiters||Qr,l=!1,c;(c=un.exec(r))!==null;){var d=c[0],u=c[1],h=c.index;if(o+=r.slice(i,h),i=h+d.length,u){o+=u[1],l=!0;continue}var p="",m=r[i],v=c[2],w=c[3],y=c[4],_=c[5];if(!l&&o.length){var C=o.length-1;a.indexOf(o[C])>-1&&(p=o[C],o=o.slice(0,C))}o&&(t.push(o),o="",l=!1);var ce=p!==""&&m!==void 0&&m!==p,$e=_==="+"||_==="*",Gi=_==="?"||_==="*",Wt=p||s,Yt=w||y;t.push({name:v||n++,prefix:p,delimiter:Wt,optional:Gi,repeat:$e,partial:ce,pattern:Yt?pn(Yt):"[^"+I(Wt)+"]+?"})}return(o||i<r.length)&&t.push(o+r.substr(i)),t}function hn(r,e){return Zr($t(r,e))}function Zr(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(n,i){for(var o="",s=i&&i.encode||encodeURIComponent,a=0;a<r.length;a++){var l=r[a];if(typeof l=="string"){o+=l;continue}var c=n?n[l.name]:void 0,d;if(Array.isArray(c)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but got array');if(c.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(d=s(c[u],l),!e[a].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'"');o+=(u===0?l.prefix:l.delimiter)+d}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(d=s(String(c),l),!e[a].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but got "'+d+'"');o+=l.prefix+d;continue}if(l.optional){l.partial&&(o+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be '+(l.repeat?"an array":"a string"))}return o}}function I(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function pn(r){return r.replace(/([=!:$/()])/g,"\\$1")}function ei(r){return r&&r.sensitive?"":"i"}function fn(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function mn(r,e,t){for(var n=[],i=0;i<r.length;i++)n.push(ri(r[i],e,t).source);return new RegExp("(?:"+n.join("|")+")",ei(t))}function _n(r,e,t){return ti($t(r,t),e,t)}function ti(r,e,t){t=t||{};for(var n=t.strict,i=t.start!==!1,o=t.end!==!1,s=I(t.delimiter||Xr),a=t.delimiters||Qr,l=[].concat(t.endsWith||[]).map(I).concat("$").join("|"),c=i?"^":"",d=r.length===0,u=0;u<r.length;u++){var h=r[u];if(typeof h=="string")c+=I(h),d=u===r.length-1&&a.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+I(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.partial?c+=I(h.prefix)+"("+p+")?":c+="(?:"+I(h.prefix)+"("+p+"))?":c+=I(h.prefix)+"("+p+")"}}return o?(n||(c+="(?:"+s+")?"),c+=l==="$"?"$":"(?="+l+")"):(n||(c+="(?:"+s+"(?="+l+"))?"),d||(c+="(?="+s+"|"+l+")")),new RegExp(c,ei(t))}function ri(r,e,t){return r instanceof RegExp?fn(r,e):Array.isArray(r)?mn(r,e,t):_n(r,e,t)}ae.parse=an;ae.compile=ln;ae.tokensToFunction=cn;ae.tokensToRegExp=dn;const{hasOwnProperty:gn}=Object.prototype,mt=new Map;mt.set("|false",{keys:[],pattern:/(?:)/});function er(r){try{return decodeURIComponent(r)}catch{return r}}function yn(r,e,t,n,i){t=!!t;const o=`${r}|${t}`;let s=mt.get(o);if(!s){const c=[];s={keys:c,pattern:ae(r,c,{end:t,strict:r===""})},mt.set(o,s)}const a=s.pattern.exec(e);if(!a)return null;const l=Object.assign({},i);for(let c=1;c<a.length;c++){const d=s.keys[c-1],u=d.name,h=a[c];(h!==void 0||!gn.call(l,u))&&(d.repeat?l[u]=h?h.split(d.delimiter).map(er):[]:l[u]=h&&er(h))}return{path:a[0],keys:(n||[]).concat(s.keys),params:l}}function ii(r,e,t,n,i){let o,s,a=0,l=r.path||"";return l.charAt(0)==="/"&&(t&&(l=l.substr(1)),t=!0),{next(c){if(r===c)return{done:!0};const d=r.__children=r.__children||r.children;if(!o&&(o=yn(l,e,!d,n,i),o))return{done:!1,value:{route:r,keys:o.keys,params:o.params,path:o.path}};if(o&&d)for(;a<d.length;){if(!s){const h=d[a];h.parent=r;let p=o.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),s=ii(h,e.substr(p),t,o.keys,o.params)}const u=s.next(c);if(!u.done)return{done:!1,value:u.value};s=null,a++}return{done:!0}}}}function bn(r){if(Y(r.route.action))return r.route.action(r)}function vn(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function wn(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Pn(r,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const i={path:n,route:t};if(!r.chain)r.chain=[];else if(t.parent){let o=r.chain.length;for(;o--&&r.chain[o].route&&r.chain[o].route!==t.parent;)r.chain.pop()}r.chain.push(i)}}class ne{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||bn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Jt(e);const t=[...De(e)];this.root.__children=t}addRoutes(e){return Jt(e),this.root.__children.push(...De(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,A(e)?{pathname:e}:e),n=ii(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let o=null,s=null,a=t;function l(c,d=o.value.route,u){const h=u===null&&o.value.route;return o=s||n.next(h),s=null,!c&&(o.done||!vn(d,o.value.route))?(s=o,Promise.resolve(Z)):o.done?Promise.reject(Jr(t)):(a=Object.assign(a?{chain:a.chain?a.chain.slice(0):[]}:{},t,o.value),Pn(a,o.value),Promise.resolve(i(a)).then(p=>p!=null&&p!==Z?(a.result=p.result||p,a):l(c,d,p)))}return t.next=l,Promise.resolve().then(()=>l(!0,this.root)).catch(c=>{const d=wn(a);if(c?console.warn(d):c=new Error(d),c.context=c.context||a,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return a.result=this.errorHandler(c),a;throw c})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}ne.pathToRegexp=ae;const{pathToRegexp:tr}=ne,rr=new Map;function ni(r,e,t){const n=e.name||e.component;if(n&&(r.has(n)?r.get(n).push(e):r.set(n,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const o=t[i];o.parent=e,ni(r,o,o.__children||o.children)}}function ir(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function nr(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function En(r,e={}){if(!(r instanceof ne))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,i)=>{let o=ir(t,n);if(!o&&(t.clear(),ni(t,r.root,r.root.__children),o=ir(t,n),!o))throw new Error(`Route "${n}" not found`);let s=rr.get(o.fullPath);if(!s){let l=nr(o),c=o.parent;for(;c;){const p=nr(c);p&&(l=p.replace(/\/$/,"")+"/"+l.replace(/^\//,"")),c=c.parent}const d=tr.parse(l),u=tr.tokensToFunction(d),h=Object.create(null);for(let p=0;p<d.length;p++)A(d[p])||(h[d[p].name]=!0);s={toPath:u,keys:h},rr.set(l,s),o.fullPath=l}let a=s.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const l={},c=Object.keys(i);for(let u=0;u<c.length;u++){const h=c[u];s.keys[h]||(l[h]=i[h])}const d=e.stringifyQueryParams(l);d&&(a+=d.charAt(0)==="?"?d:`?${d}`)}return a}}let or=[];function xn(r){or.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),or=r}const An=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Sn=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function sr(r,e){return r.classList.add(e),new Promise(t=>{if(An(r)){const n=r.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;r.setAttribute("style",`position: absolute; ${i}`),Sn(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const Cn=256;function it(r){return r!=null}function Tn(r){const e=Object.assign({},r);return delete e.next,e}function x({pathname:r="",search:e="",hash:t="",chain:n=[],params:i={},redirectFrom:o,resolver:s},a){const l=n.map(c=>c.route);return{baseUrl:s&&s.baseUrl||"",pathname:r,search:e,hash:t,routes:l,route:a||l.length&&l[l.length-1]||null,params:i,redirectFrom:o,getUrl:(c={})=>Me(M.pathToRegexp.compile(oi(l))(Object.assign({},i,c)),s)}}function ar(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function $n(r,e){e.location=x(r);const t=r.chain.map(n=>n.route).indexOf(r.route);return r.chain[t].element=e,e}function Re(r,e,t){if(Y(r))return r.apply(t,e)}function lr(r,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return Re(t[r],e,t)}}function On(r,e){if(!Array.isArray(r)&&!He(r))throw new Error(S(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=De(r);for(let n=0;n<t.length;n++)Gr(t[n]),e.__children.push(t[n])}function Oe(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function Me(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function oi(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class M extends ne{constructor(e,t){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&ne.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=s=>this.__resolveRoute(s);const o=M.NavigationTrigger;M.setTriggers.apply(M,Object.keys(o).map(s=>o[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=x({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();Y(t.children)&&(n=n.then(()=>t.children(Tn(e))).then(o=>{!it(o)&&!Y(t.children)&&(o=t.children),On(o,t)}));const i={redirect:o=>ar(e,o),component:o=>{const s=document.createElement(o);return this.__createdByRouter.set(s,!0),s}};return n.then(()=>{if(this.__isLatestRender(e))return Re(t.action,[e,i],t)}).then(o=>{if(it(o)&&(o instanceof HTMLElement||o.redirect||o===Z))return o;if(A(t.redirect))return i.redirect(t.redirect);if(t.bundle)return tn(t.bundle).then(()=>{},()=>{throw new Error(S(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(o=>{if(it(o))return o;if(A(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},A(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then(o=>this.__fullyResolveChain(o)).then(o=>{if(this.__isLatestRender(o)){const s=this.__previousContext;if(o===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=x(o),t&&this.__updateBrowserHistory(o,n===1),_e("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.__copyUnchangedElements(o,s),this.__previousContext=o,this.location;this.__addAppearingContent(o,s);const a=this.__animateIfNeeded(o);return this.__runOnAfterEnterCallbacks(o),this.__runOnAfterLeaveCallbacks(o,s),a.then(()=>{if(this.__isLatestRender(o))return this.__removeDisappearingContent(),this.__previousContext=o,this.location})}}).catch(o=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),Oe(this.__outlet&&this.__outlet.children),this.location=x(Object.assign(i,{resolver:this})),_e("error",Object.assign({router:this,error:o},i)),o}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const o=n!==t?n:e,a=Me(oi(n.chain),n.resolver)===n.pathname,l=(c,d=c.route,u)=>c.next(void 0,d,u).then(h=>h===null||h===Z?a?c:d.parent!==null?l(c,d.parent,h):h:h);return l(n).then(c=>{if(c===null||c===Z)throw Jr(o);return c&&c!==Z&&c!==n?this.__fullyResolveChain(o,c):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?($n(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(S(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${en(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],i=e.chain;let o=Promise.resolve();const s=()=>({cancel:!0}),a=l=>ar(e,l);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let l=0;l<Math.min(n.length,i.length)&&!(n[l].route!==i[l].route||n[l].path!==i[l].path&&n[l].element!==i[l].element||!this.__isReusableElement(n[l].element,i[l].element));l=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let l=i.length-1;l>=0;l--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:s},n[l]);for(let l=0;l<i.length;l++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:s,redirect:a},i[l]),n[l].element.location=x(e,n[l].route)}else for(let l=n.length-1;l>=e.__divergedChainIndex;l--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:s},n[l])}if(!e.__skipAttach)for(let l=0;l<i.length;l++)l<e.__divergedChainIndex?l<n.length&&n[l].element&&(n[l].element.location=x(e,n[l].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:s,redirect:a},i[l]),i[l].element&&(i[l].element.location=x(e,i[l].route)));return o.then(l=>{if(l){if(l.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(l.redirect)return this.__redirect(l.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,i){const o=x(t);return e.then(s=>{if(this.__isLatestRender(t))return lr("onBeforeLeave",[o,n,this],i.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(e,t,n,i){const o=x(t,i.route);return e.then(s=>{if(this.__isLatestRender(t))return lr("onBeforeEnter",[o,n,this],i.element)(s)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>Cn)throw new Error(S(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(S(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const o=i?"replaceState":"pushState";window.history[o](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const o=t&&t.chain[i].element;if(o)if(o.parentNode===n)e.chain[i].element=o,n=o;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(o=>this.__addedByRouter.get(o)&&o!==e.result);let i=n;for(let o=e.__divergedChainIndex;o<e.chain.length;o++){const s=e.chain[o].element;s&&(i.appendChild(s),this.__addedByRouter.set(s,!0),i===n&&this.__appearingContent.push(s),i=s)}}__removeDisappearingContent(){this.__disappearingContent&&Oe(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Oe(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=t.chain[n].element;if(i)try{const o=x(e);Re(i.onAfterLeave,[o,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&Oe(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},i=x(e,e.chain[t].route);Re(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],o=e.chain;let s;for(let a=o.length;a>0;a--)if(o[a-1].route.animate){s=o[a-1].route.animate;break}if(t&&n&&s){const a=He(s)&&s.leave||"leaving",l=He(s)&&s.enter||"entering";i.push(sr(t,a)),i.push(sr(n,l))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:i}=e?e.detail:window.location;A(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){xn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=En(this)),Me(this.__urlForName(e,t),this)}urlForPath(e,t){return Me(M.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:i}=A(e)?this.__createUrl(e,"http://a"):e;return _e("go",{pathname:t,search:n,hash:i})}}const Nn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Le=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function kn(){function r(){return!0}return si(r)}function Rn(){try{return Mn()?!0:Ln()?Le?!zn():!kn():!1}catch{return!1}}function Mn(){return localStorage.getItem("vaadin.developmentmode.force")}function Ln(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function zn(){return!!(Le&&Object.keys(Le).map(e=>Le[e]).filter(e=>e.productionMode).length>0)}function si(r,e){if(typeof r!="function")return;const t=Nn.exec(r.toString());if(t)try{r=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return r(e)}window.Vaadin=window.Vaadin||{};const cr=function(r,e){if(window.Vaadin.developmentMode)return si(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Rn());function In(){}const Dn=function(){if(typeof cr=="function")return cr(In)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Dn();M.NavigationTrigger={POPSTATE:sn,CLICK:nn};const ve=Object.freeze(Object.defineProperty({__proto__:null,Resolver:ne,Router:M},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=globalThis,Ot=ze.ShadowRoot&&(ze.ShadyCSS===void 0||ze.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nt=Symbol(),dr=new WeakMap;let kt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ot&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=dr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&dr.set(t,e))}return e}toString(){return this.cssText}};const Un=r=>new kt(typeof r=="string"?r:r+"",void 0,Nt),E=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new kt(t,r,Nt)},ai=(r,e)=>{if(Ot)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=ze.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},ur=Ot?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Un(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fn,defineProperty:Hn,getOwnPropertyDescriptor:Bn,getOwnPropertyNames:jn,getOwnPropertySymbols:Vn,getPrototypeOf:qn}=Object,U=globalThis,hr=U.trustedTypes,Wn=hr?hr.emptyScript:"",nt=U.reactiveElementPolyfillSupport,ge=(r,e)=>r,Be={toAttribute(r,e){switch(e){case Boolean:r=r?Wn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Rt=(r,e)=>!Fn(r,e),pr={attribute:!0,type:String,converter:Be,reflect:!1,useDefault:!1,hasChanged:Rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),U.litPropertyMetadata??(U.litPropertyMetadata=new WeakMap);let Q=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Hn(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:o}=Bn(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const a=i==null?void 0:i.call(this);o==null||o.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pr}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;const e=qn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){const t=this.properties,n=[...jn(t),...Vn(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(ur(i))}else e!==void 0&&t.push(ur(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ai(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var o;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:Be).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){var o,s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=n.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Be;this._$Em=i;const c=l.fromAttribute(t,a.type);this[i]=c??((s=this._$Ej)==null?void 0:s.get(i))??c,this._$Em=null}}requestUpdate(e,t,n){var i;if(e!==void 0){const o=this.constructor,s=this[e];if(n??(n=o.getPropertyOptions(e)),!((n.hasChanged??Rt)(s,t)||n.useDefault&&n.reflect&&s===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i){const{wrapped:a}=s,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},Q[ge("elementProperties")]=new Map,Q[ge("finalized")]=new Map,nt==null||nt({ReactiveElement:Q}),(U.reactiveElementVersions??(U.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=globalThis,je=ye.trustedTypes,fr=je?je.createPolicy("lit-html",{createHTML:r=>r}):void 0,li="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,ci="?"+D,Yn=`<${ci}>`,K=document,we=()=>K.createComment(""),Pe=r=>r===null||typeof r!="object"&&typeof r!="function",Mt=Array.isArray,Kn=r=>Mt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ot=`[ 	
\f\r]`,de=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mr=/-->/g,_r=/>/g,H=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gr=/'/g,yr=/"/g,di=/^(?:script|style|textarea|title)$/i,Gn=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),ee=Gn(1),oe=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),br=new WeakMap,B=K.createTreeWalker(K,129);function ui(r,e){if(!Mt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return fr!==void 0?fr.createHTML(e):e}const Jn=(r,e)=>{const t=r.length-1,n=[];let i,o=e===2?"<svg>":e===3?"<math>":"",s=de;for(let a=0;a<t;a++){const l=r[a];let c,d,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===de?d[1]==="!--"?s=mr:d[1]!==void 0?s=_r:d[2]!==void 0?(di.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=H):d[3]!==void 0&&(s=H):s===H?d[0]===">"?(s=i??de,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?H:d[3]==='"'?yr:gr):s===yr||s===gr?s=H:s===mr||s===_r?s=de:(s=H,i=void 0);const p=s===H&&r[a+1].startsWith("/>")?" ":"";o+=s===de?l+Yn:u>=0?(n.push(c),l.slice(0,u)+li+l.slice(u)+D+p):l+D+(u===-2?a:p)}return[ui(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Ee{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[c,d]=Jn(e,t);if(this.el=Ee.createElement(c,n),B.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=B.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(li)){const h=d[s++],p=i.getAttribute(u).split(D),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:m[2],strings:p,ctor:m[1]==="."?Qn:m[1]==="?"?Zn:m[1]==="@"?eo:Qe}),i.removeAttribute(u)}else u.startsWith(D)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(di.test(i.tagName)){const u=i.textContent.split(D),h=u.length-1;if(h>0){i.textContent=je?je.emptyScript:"";for(let p=0;p<h;p++)i.append(u[p],we()),B.nextNode(),l.push({type:2,index:++o});i.append(u[h],we())}}}else if(i.nodeType===8)if(i.data===ci)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(D,u+1))!==-1;)l.push({type:7,index:o}),u+=D.length-1}o++}}static createElement(e,t){const n=K.createElement("template");return n.innerHTML=e,n}}function se(r,e,t=r,n){var s,a;if(e===oe)return e;let i=n!==void 0?(s=t._$Co)==null?void 0:s[n]:t._$Cl;const o=Pe(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=i:t._$Cl=i),i!==void 0&&(e=se(r,i._$AS(r,e.values),i,n)),e}class Xn{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??K).importNode(t,!0);B.currentNode=i;let o=B.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Ce(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new to(o,this,e)),this._$AV.push(c),l=n[++a]}s!==(l==null?void 0:l.index)&&(o=B.nextNode(),s++)}return B.currentNode=K,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Ce{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=se(this,e,t),Pe(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==oe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Kn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Pe(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ee.createElement(ui(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const s=new Xn(i,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=br.get(e.strings);return t===void 0&&br.set(e.strings,t=new Ee(e)),t}k(e){Mt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const o of e)i===t.length?t.push(n=new Ce(this.O(we()),this.O(we()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Qe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=se(this,e,t,0),s=!Pe(e)||e!==this._$AH&&e!==oe,s&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=se(this,a[n+l],t,l),c===oe&&(c=this._$AH[l]),s||(s=!Pe(c)||c!==this._$AH[l]),c===g?e=g:e!==g&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Qn extends Qe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Zn extends Qe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class eo extends Qe{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){if((e=se(this,e,t,0)??g)===oe)return;const n=this._$AH,i=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==g&&(n===g||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class to{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){se(this,e)}}const st=ye.litHtmlPolyfillSupport;st==null||st(Ee,Ce),(ye.litHtmlVersions??(ye.litHtmlVersions=[])).push("3.3.1");const ro=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const o=(t==null?void 0:t.renderBefore)??null;n._$litPart$=i=new Ce(e.insertBefore(we(),o),o,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis;class L extends Q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ro(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return oe}}var Yr;L._$litElement$=!0,L.finalized=!0,(Yr=V.litElementHydrateSupport)==null||Yr.call(V,{LitElement:L});const at=V.litElementPolyfillSupport;at==null||at({LitElement:L});(V.litElementVersions??(V.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const io={attribute:!0,type:String,converter:Be,reflect:!1,hasChanged:Rt},no=(r=io,e,t)=>{const{kind:n,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),n==="accessor"){const{name:s}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,r)},init(a){return a!==void 0&&this.C(s,void 0,r,a),a}}}if(n==="setter"){const{name:s}=t;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,r)}}throw Error("Unsupported decorator location: "+n)};function oo(r){return(e,t)=>typeof t=="object"?no(r,e,t):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(r){return oo({...r,state:!0,attribute:!1})}var hi=Object.defineProperty,so=Object.getOwnPropertyDescriptor,ao=(r,e,t)=>e in r?hi(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ze=(r,e,t,n)=>{for(var i=n>1?void 0:n?so(e,t):e,o=r.length-1,s;o>=0;o--)(s=r[o])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&hi(e,t,i),i},lo=(r,e,t)=>ao(r,e+"",t);let G=class extends L{constructor(){super();T(this,"username");T(this,"password");T(this,"error");this.username="",this.password="",this.error=null}onInput(e){const t=e.target;this[t.name]=t.value}async onSubmit(e){if(e.preventDefault(),this.error=null,!this.username.trim()||!this.password.trim()){this.error="Username and password are required";return}try{const{apiService:t}=await $(async()=>{const{apiService:n}=await Promise.resolve().then(()=>po);return{apiService:n}},void 0);await t.login({username:this.username,password:this.password}),$(async()=>{const{Router:n}=await Promise.resolve().then(()=>ve);return{Router:n}},void 0).then(({Router:n})=>n.go("/users"))}catch(t){this.error="Invalid username or password",console.error("Login error:",t)}}render(){return ee`
      <div class="container">
        <div class="card">
          <h1>Log in</h1>
          <div class="subtle">Welcome back. Please enter your credentials to continue.</div>
          ${this.error?ee`<div class="error">${this.error}</div>`:""}
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
              <button class="btn-ghost" type="button" @click=${()=>{$(async()=>{const{Router:e}=await Promise.resolve().then(()=>ve);return{Router:e}},void 0).then(({Router:e})=>e.go("/register"))}}>
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    `}};lo(G,"styles",E`
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
  `);Ze([z()],G.prototype,"username",2);Ze([z()],G.prototype,"password",2);Ze([z()],G.prototype,"error",2);G=Ze([Lt("login-view")],G);const co=Object.freeze(Object.defineProperty({__proto__:null,get LoginView(){return G}},Symbol.toStringTag,{value:"Module"})),uo="/api";class ho{async request(e,t={}){const n=`${uo}${e}`,i=await fetch(n,{headers:{"Content-Type":"application/json",...t.headers},...t});if(!i.ok)throw new Error(`API request failed: ${i.status} ${i.statusText}`);return i.json()}async getAllUsers(){return this.request("/users")}async getUserById(e){return this.request(`/users/${e}`)}async createUser(e){const t={firstName:e.name.split(" ")[0]||"",lastName:e.name.split(" ").slice(1).join(" ")||"",email:e.email,password:e.password||"defaultPassword123",phone:e.phone};return this.request("/users/register",{method:"POST",body:JSON.stringify(t)})}async updateUser(e,t){const n={firstName:t.name.split(" ")[0]||"",lastName:t.name.split(" ").slice(1).join(" ")||"",email:t.email,phone:t.phone};return this.request(`/users/${e}`,{method:"PUT",body:JSON.stringify(n)})}async deleteUser(e){await this.request(`/users/${e}`,{method:"DELETE"})}}const pi=new ho,po=Object.freeze(Object.defineProperty({__proto__:null,apiService:pi},Symbol.toStringTag,{value:"Module"}));var fi=Object.defineProperty,fo=Object.getOwnPropertyDescriptor,mo=(r,e,t)=>e in r?fi(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,J=(r,e,t,n)=>{for(var i=n>1?void 0:n?fo(e,t):e,o=r.length-1,s;o>=0;o--)(s=r[o])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&fi(e,t,i),i},_o=(r,e,t)=>mo(r,e+"",t);let O=class extends L{constructor(){super();T(this,"name");T(this,"email");T(this,"password");T(this,"phone");T(this,"error");T(this,"success");this.name="",this.email="",this.password="",this.phone="",this.error=null,this.success=null}onInput(e){const t=e.target;this[t.name]=t.value}async onSubmit(e){if(e.preventDefault(),this.error=null,this.success=null,!this.name.trim()||!this.email.trim()||!this.password.trim()){this.error="Name, username and password are required";return}try{await pi.createUser({name:this.name,email:this.email,password:this.password,phone:this.phone}),this.success="Account created successfully. Redirecting to log in...",setTimeout(()=>{$(async()=>{const{Router:t}=await Promise.resolve().then(()=>ve);return{Router:t}},void 0).then(({Router:t})=>t.go("/login"))},700)}catch(t){this.error=t instanceof Error?t.message:"Failed to register",console.error(t)}}render(){return ee`
      <div class="container">
        <div class="card">
          <h1>Create your account</h1>
          <div class="subtle">Join our CRM platform and manage your customers with confidence.</div>
          ${this.error?ee`<div class="error">${this.error}</div>`:""}
          ${this.success?ee`<div class="success">${this.success}</div>`:""}
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
              <button class="btn-ghost" type="button" @click=${()=>{$(async()=>{const{Router:e}=await Promise.resolve().then(()=>ve);return{Router:e}},void 0).then(({Router:e})=>e.go("/login"))}}>
                Back to log in
              </button>
            </div>
          </form>
        </div>
      </div>
    `}};_o(O,"styles",E`
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
  `);J([z()],O.prototype,"name",2);J([z()],O.prototype,"email",2);J([z()],O.prototype,"password",2);J([z()],O.prototype,"phone",2);J([z()],O.prototype,"error",2);J([z()],O.prototype,"success",2);O=J([Lt("register-view")],O);const go=Object.freeze(Object.defineProperty({__proto__:null,get RegisterView(){return O}},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});var Kr;(Kr=window.Vaadin).featureFlags||(Kr.featureFlags={});function yo(r){return r.replace(/-[a-z]/gu,e=>e[1].toUpperCase())}const N={};function mi(r,e="24.9.6"){if(Object.defineProperty(r,"version",{get(){return e}}),r.experimental){const n=typeof r.experimental=="string"?r.experimental:`${yo(r.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[n]&&!N[n]){N[n]=new Set,N[n].add(r),Object.defineProperty(window.Vaadin.featureFlags,n,{get(){return N[n].size===0},set(i){i&&N[n].size>0&&(N[n].forEach(o=>{customElements.define(o.is,o)}),N[n].clear())}});return}else if(N[n]){N[n].add(r);return}}const t=customElements.get(r.is);if(!t)customElements.define(r.is,r);else{const n=t.version;n&&r.version&&n===r.version?console.warn(`The component ${r.is} has been loaded twice`):console.error(`Tried to define ${r.is} version ${r.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bo extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}mi(bo);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function vo(r){const e=r.constructor,t=r.__cssInjectorStyleSheet;return t?[...e.baseStyles,t,...e.themeStyles]:e.elementStyles}function wo(r){[...r.shadowRoot.querySelectorAll("style")].forEach(e=>e.remove()),ai(r.shadowRoot,vo(r))}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Po=r=>class extends r{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,n,i){super.attributeChangedCallback(t,n,i),t==="theme"&&this._set_theme(i)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _i=[],_t=new Set,zt=new Set;function gi(r){return r&&Object.prototype.hasOwnProperty.call(r,"__themes")}function Eo(r){return gi(customElements.get(r))}function xo(r=[]){return[r].flat(1/0).filter(e=>e instanceof kt?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function yi(r,e){return(r||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(e))}function bi(r){return r.map(e=>e.cssText).join(`
`)}const Ve="vaadin-themable-mixin-style";function Ao(r,e){const t=document.createElement("style");t.id=Ve,t.textContent=bi(r),e.content.appendChild(t)}function So(r){if(!r.shadowRoot)return;const e=r.constructor;if(r instanceof L)wo(r);else{const t=r.shadowRoot.getElementById(Ve),n=e.prototype._template;t.textContent=n.content.getElementById(Ve).textContent}}function Co(r){_t.forEach(e=>{const t=e.deref();t instanceof r?So(t):t||_t.delete(e)})}function vi(r){if(r.prototype instanceof L)r.elementStyles=r.finalizeStyles(r.styles);else{const e=r.prototype._template;e.content.getElementById(Ve).textContent=bi(r.getStylesForThis())}zt.forEach(e=>{const t=customElements.get(e);t!==r&&t.prototype instanceof r&&vi(t)})}function To(r,e){const t=r.__themes;return!t||!e?!1:t.some(n=>n.styles.some(i=>e.some(o=>o.cssText===i.cssText)))}function et(r,e,t={}){e=xo(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(r,e,t):_i.push({themeFor:r,styles:e,include:t.include,moduleId:t.moduleId}),r&&zt.forEach(n=>{if(yi(r,n)&&Eo(n)){const i=customElements.get(n);To(i,e)?console.warn(`Registering styles that already exist for ${n}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${n}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),vi(i),Co(i)}})}function gt(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():_i}function $o(r=""){let e=0;return r.startsWith("lumo-")||r.startsWith("material-")?e=1:r.startsWith("vaadin-")&&(e=2),e}function wi(r){const e=[];return r.include&&[].concat(r.include).forEach(t=>{const n=gt().find(i=>i.moduleId===t);n?e.push(...wi(n),...n.styles):console.warn(`Included moduleId ${t} not found in style registry`)},r.styles),e}function Oo(r){const e=`${r}-default-theme`,t=gt().filter(n=>n.moduleId!==e&&yi(n.themeFor,r)).map(n=>({...n,styles:[...wi(n),...n.styles],includePriority:$o(n.moduleId)})).sort((n,i)=>i.includePriority-n.includePriority);return t.length>0?t:gt().filter(n=>n.moduleId===e)}const No=r=>class extends Po(r){constructor(){super(),_t.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&zt.add(this.is),this.elementStyles)return;const t=this.prototype._template;!t||gi(this)||Ao(this.getStylesForThis(),t)}static finalizeStyles(t){return this.baseStyles=t?[t].flat(1/0):[],this.themeStyles=this.getStylesForThis(),[...this.baseStyles,...this.themeStyles]}static getStylesForThis(){const t=r.__themes||[],n=Object.getPrototypeOf(this.prototype),i=(n?n.constructor.__themes:[])||[];this.__themes=[...t,...i,...Oo(this.is)];const o=this.__themes.flatMap(s=>s.styles);return o.filter((s,a)=>a===o.lastIndexOf(s))}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ko=(r,...e)=>{const t=document.createElement("style");t.id=r,t.textContent=e.map(n=>n.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",t)},Te=(r,...e)=>{ko(`lumo-${r}`,e)};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ro=E`
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
`;Te("color-props",Ro);const Mo=E`
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
`;et("",Mo,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lo=E`
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
`;Te("sizing-props",Lo);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zo=E`
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
`;Te("spacing-props",zo);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Io=E`
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
`;Te("style-props",Io);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Do=E`
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
`,Uo=E`
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
`;et("",Uo,{moduleId:"lumo-typography"});Te("typography-props",Do);const Fo=E`
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
`;et("vaadin-button",Fo,{moduleId:"lumo-button"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(r,e){return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ho=/(url\()([^)]*)(\))/g,Bo=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ne,P;function be(r,e){if(r&&Bo.test(r)||r==="//")return r;if(Ne===void 0){Ne=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",Ne=t.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Ne)try{return new URL(r,e).href}catch{return r}return P||(P=document.implementation.createHTMLDocument("temp"),P.base=P.createElement("base"),P.head.appendChild(P.base),P.anchor=P.createElement("a"),P.body.appendChild(P.anchor)),P.base.href=e,P.anchor.href=r,P.anchor.href||r}function It(r,e){return r.replace(Ho,function(t,n,i,o){return n+"'"+be(i.replace(/["']/g,""),e)+"'"+o})}function Dt(r){return r.substring(0,r.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const jo=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Vo=jo&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const r=new CSSStyleSheet;r.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[r],e.shadowRoot.adoptedStyleSheets[0]===r}catch{return!1}})();let qo=window.Polymer&&window.Polymer.rootPath||Dt(document.baseURI||window.location.href),qe=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let yt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Wo=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Yo=window.Polymer&&window.Polymer.legacyOptimizations||!1,Ko=window.Polymer&&window.Polymer.legacyWarnings||!1,Go=window.Polymer&&window.Polymer.syncInitialRender||!1,bt=window.Polymer&&window.Polymer.legacyUndefined||!1,Jo=window.Polymer&&window.Polymer.orderedComputed||!1,vr=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Xo=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Qo=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Zo=0;const le=function(r){let e=r.__mixinApplications;e||(e=new WeakMap,r.__mixinApplications=e);let t=Zo++;function n(i){let o=i.__mixinSet;if(o&&o[t])return i;let s=e,a=s.get(i);if(!a){a=r(i),s.set(i,a);let l=Object.create(a.__mixinSet||o||null);l[t]=!0,a.__mixinSet=l}return a}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ut={},Pi={};function wr(r,e){Ut[r]=Pi[r.toLowerCase()]=e}function Pr(r){return Ut[r]||Pi[r.toLowerCase()]}function es(r){r.querySelector("style")&&console.warn("dom-module %s has style outside template",r.id)}class xe extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=Pr(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,i){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=be(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Dt(t)}return this.__assetpath}register(e){if(e=e||this.id,e){if(yt&&Pr(e)!==void 0)throw wr(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,wr(e,this),es(this)}}}xe.prototype.modules=Ut;customElements.define("dom-module",xe);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ts="link[rel=import][type~=css]",rs="include",Er="shady-unscoped";function Ei(r){return xe.import(r)}function xr(r){let e=r.body?r.body:r;const t=It(e.textContent,r.baseURI),n=document.createElement("style");return n.textContent=t,n}function is(r){const e=r.trim().split(/\s+/),t=[];for(let n=0;n<e.length;n++)t.push(...ns(e[n]));return t}function ns(r){const e=Ei(r);if(!e)return console.warn("Could not find style data in module named",r),[];if(e._styles===void 0){const t=[];t.push(...Ai(e));const n=e.querySelector("template");n&&t.push(...xi(n,e.assetpath)),e._styles=t}return e._styles}function xi(r,e){if(!r._styles){const t=[],n=r.content.querySelectorAll("style");for(let i=0;i<n.length;i++){let o=n[i],s=o.getAttribute(rs);s&&t.push(...is(s).filter(function(a,l,c){return c.indexOf(a)===l})),e&&(o.textContent=It(o.textContent,e)),t.push(o)}r._styles=t}return r._styles}function os(r){let e=Ei(r);return e?Ai(e):[]}function Ai(r){const e=[],t=r.querySelectorAll(ts);for(let n=0;n<t.length;n++){let i=t[n];if(i.import){const o=i.import,s=i.hasAttribute(Er);if(s&&!o._unscopedStyle){const a=xr(o);a.setAttribute(Er,""),o._unscopedStyle=a}else o._style||(o._style=xr(o));e.push(s?o._unscopedStyle:o._style)}}return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const q=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?r=>ShadyDOM.patch(r):r=>r;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function vt(r){return r.indexOf(".")>=0}function X(r){let e=r.indexOf(".");return e===-1?r:r.slice(0,e)}function ss(r,e){return r.indexOf(e+".")===0}function We(r,e){return e.indexOf(r+".")===0}function Ye(r,e,t){return e+t.slice(r.length)}function fe(r){if(Array.isArray(r)){let e=[];for(let t=0;t<r.length;t++){let n=r[t].toString().split(".");for(let i=0;i<n.length;i++)e.push(n[i])}return e.join(".")}else return r}function Si(r){return Array.isArray(r)?fe(r).split("."):r.toString().split(".")}function b(r,e,t){let n=r,i=Si(e);for(let o=0;o<i.length;o++){if(!n)return;let s=i[o];n=n[s]}return t&&(t.path=i.join(".")),n}function Ar(r,e,t){let n=r,i=Si(e),o=i[i.length-1];if(i.length>1){for(let s=0;s<i.length-1;s++){let a=i[s];if(n=n[a],!n)return}n[o]=t}else n[e]=t;return i.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ke={},as=/-[a-z]/g,ls=/([A-Z])/g;function Ci(r){return Ke[r]||(Ke[r]=r.indexOf("-")<0?r:r.replace(as,e=>e[1].toUpperCase()))}function tt(r){return Ke[r]||(Ke[r]=r.replace(ls,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let cs=0,Ti=0,te=[],ds=0,wt=!1,$i=document.createTextNode("");new window.MutationObserver(us).observe($i,{characterData:!0});function us(){wt=!1;const r=te.length;for(let e=0;e<r;e++){let t=te[e];if(t)try{t()}catch(n){setTimeout(()=>{throw n})}}te.splice(0,r),Ti+=r}const hs={run(r){return wt||(wt=!0,$i.textContent=ds++),te.push(r),cs++},cancel(r){const e=r-Ti;if(e>=0){if(!te[e])throw new Error("invalid async handle: "+r);te[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ps=hs,Oi=le(r=>{class e extends r{static createProperties(n){const i=this.prototype;for(let o in n)o in i||i._createPropertyAccessor(o)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,i){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,i))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[n];return i||(i=this.constructor.attributeNameForProperty(n),this.__dataAttributes[i]=n),i}_definePropertyAccessor(n,i){Object.defineProperty(this,n,{get(){return this.__data[n]},set:i?function(){}:function(o){this._setPendingProperty(n,o,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,i){this._setPendingProperty(n,i)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,i,o){let s=this.__data[n],a=this._shouldPropertyChange(n,i,s);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=s),this.__data[n]=i,this.__dataPending[n]=i),a}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ps.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,i=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(n,i,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,i,o)),this.__dataCounter--}_shouldPropertiesChange(n,i,o){return!!i}_propertiesChanged(n,i,o){}_shouldPropertyChange(n,i,o){return o!==i&&(o===o||i===i)}attributeChangedCallback(n,i,o,s){i!==o&&this._attributeToProperty(n,o),super.attributeChangedCallback&&super.attributeChangedCallback(n,i,o,s)}_attributeToProperty(n,i,o){if(!this.__serializing){const s=this.__dataAttributes,a=s&&s[n]||n;this[a]=this._deserializeValue(i,o||this.constructor.typeForProperty(a))}}_propertyToAttribute(n,i,o){this.__serializing=!0,o=arguments.length<3?this[n]:o,this._valueToNodeAttribute(this,o,i||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,i,o){const s=this._serializeValue(i);(o==="class"||o==="name"||o==="slot")&&(n=q(n)),s===void 0?n.removeAttribute(o):n.setAttribute(o,s===""&&window.trustedTypes?window.trustedTypes.emptyScript:s)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n!=null?n.toString():void 0}}_deserializeValue(n,i){switch(i){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ni={};let ke=HTMLElement.prototype;for(;ke;){let r=Object.getOwnPropertyNames(ke);for(let e=0;e<r.length;e++)Ni[r[e]]=!0;ke=Object.getPrototypeOf(ke)}const fs=window.trustedTypes?r=>trustedTypes.isHTML(r)||trustedTypes.isScript(r)||trustedTypes.isScriptURL(r):()=>!1;function ms(r,e){if(!Ni[e]){let t=r[e];t!==void 0&&(r.__data?r._setPendingProperty(e,t):(r.__dataProto?r.hasOwnProperty(JSCompiler_renameProperty("__dataProto",r))||(r.__dataProto=Object.create(r.__dataProto)):r.__dataProto={},r.__dataProto[e]=t))}}const _s=le(r=>{const e=Oi(r);class t extends e{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let o=0;o<i.length;o++)this.prototype._createPropertyAccessor(Ci(i[o]))}static attributeNameForProperty(i){return tt(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let o in i)this._setProperty(o,i[o])}_ensureAttribute(i,o){const s=this;s.hasAttribute(i)||this._valueToNodeAttribute(s,o,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(fs(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,o){let s;switch(o){case Object:try{s=JSON.parse(i)}catch{s=i}break;case Array:try{s=JSON.parse(i)}catch{s=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:s=isNaN(i)?String(i):Number(i),s=new Date(s);break;default:s=super._deserializeValue(i,o);break}return s}_definePropertyAccessor(i,o){ms(this,i),super._definePropertyAccessor(i,o)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const gs={"dom-if":!0,"dom-repeat":!0};let Sr=!1,Cr=!1;function ys(){if(!Sr){Sr=!0;const r=document.createElement("textarea");r.placeholder="a",Cr=r.placeholder===r.textContent}return Cr}function bs(r){ys()&&r.localName==="textarea"&&r.placeholder&&r.placeholder===r.textContent&&(r.textContent=null)}const vs=(()=>{const r=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,t,n)=>{const i=t.getAttribute(n);if(r&&n.startsWith("on-")){e.setAttribute(n,r.createScript(i,n));return}e.setAttribute(n,i)}})();function ws(r){let e=r.getAttribute("is");if(e&&gs[e]){let t=r;for(t.removeAttribute("is"),r=t.ownerDocument.createElement(e),t.parentNode.replaceChild(r,t),r.appendChild(t);t.attributes.length;){const{name:n}=t.attributes[0];vs(r,t,n),t.removeAttribute(n)}}return r}function ki(r,e){let t=e.parentInfo&&ki(r,e.parentInfo);if(t){for(let n=t.firstChild,i=0;n;n=n.nextSibling)if(e.parentIndex===i++)return n}else return r}function Ps(r,e,t,n){n.id&&(e[n.id]=t)}function Es(r,e,t){if(t.events&&t.events.length)for(let n=0,i=t.events,o;n<i.length&&(o=i[n]);n++)r._addMethodEventListenerToNode(e,o.name,o.value,r)}function xs(r,e,t,n){t.templateInfo&&(e._templateInfo=t.templateInfo,e._parentTemplateInfo=n)}function As(r,e,t){return r=r._methodHost||r,function(i){r[t]?r[t](i,i.detail):console.warn("listener method `"+t+"` not defined")}}const Ss=le(r=>{class e extends r{static _parseTemplate(n,i){if(!n._templateInfo){let o=n._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=!!i,o.stripWhiteSpace=i&&i.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,o,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,i,o){return this._parseTemplateNode(n.content,i,o)}static _parseTemplateNode(n,i,o){let s=!1,a=n;return a.localName=="template"&&!a.hasAttribute("preserve-content")?s=this._parseTemplateNestedTemplate(a,i,o)||s:a.localName==="slot"&&(i.hasInsertionPoint=!0),bs(a),a.firstChild&&this._parseTemplateChildNodes(a,i,o),a.hasAttributes&&a.hasAttributes()&&(s=this._parseTemplateNodeAttributes(a,i,o)||s),s||o.noted}static _parseTemplateChildNodes(n,i,o){if(!(n.localName==="script"||n.localName==="style"))for(let s=n.firstChild,a=0,l;s;s=l){if(s.localName=="template"&&(s=ws(s)),l=s.nextSibling,s.nodeType===Node.TEXT_NODE){let d=l;for(;d&&d.nodeType===Node.TEXT_NODE;)s.textContent+=d.textContent,l=d.nextSibling,n.removeChild(d),d=l;if(i.stripWhiteSpace&&!s.textContent.trim()){n.removeChild(s);continue}}let c={parentIndex:a,parentInfo:o};this._parseTemplateNode(s,i,c)&&(c.infoIndex=i.nodeInfoList.push(c)-1),s.parentNode&&a++}}static _parseTemplateNestedTemplate(n,i,o){let s=n,a=this._parseTemplate(s,i);return(a.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),o.templateInfo=a,!0}static _parseTemplateNodeAttributes(n,i,o){let s=!1,a=Array.from(n.attributes);for(let l=a.length-1,c;c=a[l];l--)s=this._parseTemplateNodeAttribute(n,i,o,c.name,c.value)||s;return s}static _parseTemplateNodeAttribute(n,i,o,s,a){return s.slice(0,3)==="on-"?(n.removeAttribute(s),o.events=o.events||[],o.events.push({name:s.slice(3),value:a}),!0):s==="id"?(o.id=a,!0):!1}static _contentForTemplate(n){let i=n._templateInfo;return i&&i.content||n.content}_stampTemplate(n,i){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),i=i||this.constructor._parseTemplate(n);let o=i.nodeInfoList,s=i.content||n.content,a=document.importNode(s,!0);a.__noInsertionPoint=!i.hasInsertionPoint;let l=a.nodeList=new Array(o.length);a.$={};for(let c=0,d=o.length,u;c<d&&(u=o[c]);c++){let h=l[c]=ki(a,u);Ps(this,a.$,h,u),xs(this,h,u,i),Es(this,h,u)}return a=a,a}_addMethodEventListenerToNode(n,i,o,s){s=s||n;let a=As(s,i,o);return this._addEventListenerToNode(n,i,a),a}_addEventListenerToNode(n,i,o){n.addEventListener(i,o)}_removeEventListenerFromNode(n,i,o){n.removeEventListener(i,o)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ae=0;const Se=[],f={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ri="__computeInfo",Cs=/[A-Z]/;function lt(r,e,t){let n=r[e];if(!n)n=r[e]={};else if(!r.hasOwnProperty(e)&&(n=r[e]=Object.create(r[e]),t))for(let i in n){let o=n[i],s=n[i]=Array(o.length);for(let a=0;a<o.length;a++)s[a]=o[a]}return n}function me(r,e,t,n,i,o){if(e){let s=!1;const a=Ae++;for(let l in t){let c=i?X(l):l,d=e[c];if(d)for(let u=0,h=d.length,p;u<h&&(p=d[u]);u++)(!p.info||p.info.lastRun!==a)&&(!i||Ft(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(r,l,t,n,p.info,i,o),s=!0)}return s}return!1}function Ts(r,e,t,n,i,o,s,a){let l=!1,c=s?X(n):n,d=e[c];if(d)for(let u=0,h=d.length,p;u<h&&(p=d[u]);u++)(!p.info||p.info.lastRun!==t)&&(!s||Ft(n,p.trigger))&&(p.info&&(p.info.lastRun=t),p.fn(r,n,i,o,p.info,s,a),l=!0);return l}function Ft(r,e){if(e){let t=e.name;return t==r||!!(e.structured&&ss(t,r))||!!(e.wildcard&&We(t,r))}else return!0}function Tr(r,e,t,n,i){let o=typeof i.method=="string"?r[i.method]:i.method,s=i.property;o?o.call(r,r.__data[s],n[s]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function $s(r,e,t,n,i){let o=r[f.NOTIFY],s,a=Ae++;for(let c in e)e[c]&&(o&&Ts(r,o,a,c,t,n,i)||i&&Os(r,c,t))&&(s=!0);let l;s&&(l=r.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Os(r,e,t){let n=X(e);if(n!==e){let i=tt(n)+"-changed";return Mi(r,i,t[e],e),!0}return!1}function Mi(r,e,t,n){let i={value:t,queueProperty:!0};n&&(i.path=n),q(r).dispatchEvent(new CustomEvent(e,{detail:i}))}function Ns(r,e,t,n,i,o){let a=(o?X(e):e)!=e?e:null,l=a?b(r,a):r.__data[e];a&&l===void 0&&(l=t[e]),Mi(r,i.eventName,l,a)}function ks(r,e,t,n,i){let o,s=r.detail,a=s&&s.path;a?(n=Ye(t,n,a),o=s&&s.value):o=r.currentTarget[t],o=i?!o:o,(!e[f.READ_ONLY]||!e[f.READ_ONLY][n])&&e._setPendingPropertyOrPath(n,o,!0,!!a)&&(!s||!s.queueProperty)&&e._invalidateProperties()}function Rs(r,e,t,n,i){let o=r.__data[e];qe&&(o=qe(o,i.attrName,"attribute",r)),r._propertyToAttribute(e,i.attrName,o)}function Ms(r,e,t,n){let i=r[f.COMPUTE];if(i)if(Jo){Ae++;const o=zs(r),s=[];for(let l in e)$r(l,i,s,o,n);let a;for(;a=s.shift();)Li(r,"",e,t,a)&&$r(a.methodInfo,i,s,o,n);Object.assign(t,r.__dataOld),Object.assign(e,r.__dataPending),r.__dataPending=null}else{let o=e;for(;me(r,i,o,t,n);)Object.assign(t,r.__dataOld),Object.assign(e,r.__dataPending),o=r.__dataPending,r.__dataPending=null}}const Ls=(r,e,t)=>{let n=0,i=e.length-1,o=-1;for(;n<=i;){const s=n+i>>1,a=t.get(e[s].methodInfo)-t.get(r.methodInfo);if(a<0)n=s+1;else if(a>0)i=s-1;else{o=s;break}}o<0&&(o=i+1),e.splice(o,0,r)},$r=(r,e,t,n,i)=>{const o=i?X(r):r,s=e[o];if(s)for(let a=0;a<s.length;a++){const l=s[a];l.info.lastRun!==Ae&&(!i||Ft(r,l.trigger))&&(l.info.lastRun=Ae,Ls(l.info,t,n))}};function zs(r){let e=r.constructor.__orderedComputedDeps;if(!e){e=new Map;const t=r[f.COMPUTE];let{counts:n,ready:i,total:o}=Is(r),s;for(;s=i.shift();){e.set(s,e.size);const a=t[s];a&&a.forEach(l=>{const c=l.info.methodInfo;--o,--n[c]===0&&i.push(c)})}o!==0&&console.warn(`Computed graph for ${r.localName} incomplete; circular?`),r.constructor.__orderedComputedDeps=e}return e}function Is(r){const e=r[Ri],t={},n=r[f.COMPUTE],i=[];let o=0;for(let s in e){const a=e[s];o+=t[s]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let s in n)e[s]||i.push(s);return{counts:t,ready:i,total:o}}function Li(r,e,t,n,i){let o=Pt(r,e,t,n,i);if(o===Se)return!1;let s=i.methodInfo;return r.__dataHasAccessor&&r.__dataHasAccessor[s]?r._setPendingProperty(s,o,!0):(r[s]=o,!1)}function Ds(r,e,t){let n=r.__dataLinkedPaths;if(n){let i;for(let o in n){let s=n[o];We(o,e)?(i=Ye(o,s,e),r._setPendingPropertyOrPath(i,t,!0,!0)):We(s,e)&&(i=Ye(s,o,e),r._setPendingPropertyOrPath(i,t,!0,!0))}}}function ct(r,e,t,n,i,o,s){t.bindings=t.bindings||[];let a={kind:n,target:i,parts:o,literal:s,isCompound:o.length!==1};if(t.bindings.push(a),js(a)){let{event:c,negate:d}=a.parts[0];a.listenerEvent=c||tt(i)+"-changed",a.listenerNegate=d}let l=e.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let d=a.parts[c];d.compoundIndex=c,Us(r,e,a,d,l)}}function Us(r,e,t,n,i){if(!n.literal)if(t.kind==="attribute"&&t.target[0]==="-")console.warn("Cannot set attribute "+t.target+' because "-" is not a valid attribute starting character');else{let o=n.dependencies,s={index:i,binding:t,part:n,evaluator:r};for(let a=0;a<o.length;a++){let l=o[a];typeof l=="string"&&(l=Ii(l),l.wildcard=!0),r._addTemplatePropertyEffect(e,l.rootProperty,{fn:Fs,info:s,trigger:l})}}}function Fs(r,e,t,n,i,o,s){let a=s[i.index],l=i.binding,c=i.part;if(o&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let d=t[e];e=Ye(c.source,l.target,e),a._setPendingPropertyOrPath(e,d,!1,!0)&&r._enqueueClient(a)}else{let d=i.evaluator._evaluateBinding(r,c,e,t,n,o);d!==Se&&Hs(r,a,l,c,d)}}function Hs(r,e,t,n,i){if(i=Bs(e,i,t,n),qe&&(i=qe(i,t.target,t.kind,e)),t.kind=="attribute")r._valueToNodeAttribute(e,i,t.target);else{let o=t.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?(!e[f.READ_ONLY]||!e[f.READ_ONLY][o])&&e._setPendingProperty(o,i)&&r._enqueueClient(e):r._setUnmanagedPropertyToNode(e,o,i)}}function Bs(r,e,t,n){if(t.isCompound){let i=r.__dataCompoundStorage[t.target];i[n.compoundIndex]=e,e=i.join("")}return t.kind!=="attribute"&&(t.target==="textContent"||t.target==="value"&&(r.localName==="input"||r.localName==="textarea"))&&(e=e??""),e}function js(r){return!!r.target&&r.kind!="attribute"&&r.kind!="text"&&!r.isCompound&&r.parts[0].mode==="{"}function Vs(r,e){let{nodeList:t,nodeInfoList:n}=e;if(n.length)for(let i=0;i<n.length;i++){let o=n[i],s=t[i],a=o.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];qs(s,c),Ws(s,r,c)}s.__dataHost=r}}function qs(r,e){if(e.isCompound){let t=r.__dataCompoundStorage||(r.__dataCompoundStorage={}),n=e.parts,i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=n[s].literal;let o=e.target;t[o]=i,e.literal&&e.kind=="property"&&(o==="className"&&(r=q(r)),r[o]=e.literal)}}function Ws(r,e,t){if(t.listenerEvent){let n=t.parts[0];r.addEventListener(t.listenerEvent,function(i){ks(i,e,t.target,n.source,n.negate)})}}function Or(r,e,t,n,i,o){o=e.static||o&&(typeof o!="object"||o[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:o};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||r._addPropertyEffect(l.rootProperty,t,{fn:n,info:s,trigger:l});return o&&r._addPropertyEffect(e.methodName,t,{fn:n,info:s}),s}function Pt(r,e,t,n,i){let o=r._methodHost||r,s=o[i.methodName];if(s){let a=r._marshalArgs(i.args,e,t);return a===Se?Se:s.apply(o,a)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const Ys=[],zi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Ks="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Gs="(?:'(?:[^'\\\\]|\\\\.)*')",Js='(?:"(?:[^"\\\\]|\\\\.)*")',Xs="(?:"+Gs+"|"+Js+")",Nr="(?:("+zi+"|"+Ks+"|"+Xs+")\\s*)",Qs="(?:"+Nr+"(?:,\\s*"+Nr+")*)",Zs="(?:\\(\\s*(?:"+Qs+"?)\\)\\s*)",ea="("+zi+"\\s*"+Zs+"?)",ta="(\\[\\[|{{)\\s*",ra="(?:]]|}})",ia="(?:(!)\\s*)?",na=ta+ia+ea+ra,kr=new RegExp(na,"g");function Rr(r){let e="";for(let t=0;t<r.length;t++){let n=r[t].literal;e+=n||""}return e}function dt(r){let e=r.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let n={methodName:e[1],static:!0,args:Ys};if(e[2].trim()){let i=e[2].replace(/\\,/g,"&comma;").split(",");return oa(i,n)}else return n}return null}function oa(r,e){return e.args=r.map(function(t){let n=Ii(t);return n.literal||(e.static=!1),n},this),e}function Ii(r){let e=r.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),t={name:e,value:"",literal:!1},n=e[0];switch(n==="-"&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':t.value=e.slice(1,-1),t.literal=!0;break;case"#":t.value=Number(e),t.literal=!0;break}return t.literal||(t.rootProperty=X(e),t.structured=vt(e),t.structured&&(t.wildcard=e.slice(-2)==".*",t.wildcard&&(t.name=e.slice(0,-2)))),t}function Mr(r,e,t){let n=b(r,t);return n===void 0&&(n=e[t]),n}function Di(r,e,t,n){const i={indexSplices:n};bt&&!r._overrideLegacyUndefined&&(e.splices=i),r.notifyPath(t+".splices",i),r.notifyPath(t+".length",e.length),bt&&!r._overrideLegacyUndefined&&(i.indexSplices=[])}function ue(r,e,t,n,i,o){Di(r,e,t,[{index:n,addedCount:i,removed:o,object:e,type:"splice"}])}function sa(r){return r[0].toUpperCase()+r.substring(1)}const aa=le(r=>{const e=Ss(_s(r));class t extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return f}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(he.length){let i=he[he.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let o=this[f.READ_ONLY];for(let s in i)(!o||!o[s])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[s]=this.__dataPending[s]=i[s])}_addPropertyEffect(i,o,s){this._createPropertyAccessor(i,o==f.READ_ONLY);let a=lt(this,o,!0)[i];a||(a=this[o][i]=[]),a.push(s)}_removePropertyEffect(i,o,s){let a=lt(this,o,!0)[i],l=a.indexOf(s);l>=0&&a.splice(l,1)}_hasPropertyEffect(i,o){let s=this[o];return!!(s&&s[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,f.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,f.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,f.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,f.COMPUTE)}_setPendingPropertyOrPath(i,o,s,a){if(a||X(Array.isArray(i)?i[0]:i)!==i){if(!a){let l=b(this,i);if(i=Ar(this,i,o),!i||!super._shouldPropertyChange(i,o,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,o,s))return Ds(this,i,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,o,s);this[i]=o}return!1}_setUnmanagedPropertyToNode(i,o,s){(s!==i[o]||typeof s=="object")&&(o==="className"&&(i=q(i)),i[o]=s)}_setPendingProperty(i,o,s){let a=this.__dataHasPaths&&vt(i),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,o,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),a?this.__dataTemp[i]=o:this.__data[i]=o,this.__dataPending[i]=o,(a||this[f.NOTIFY]&&this[f.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=s),!0):!1}_setProperty(i,o){this._setPendingProperty(i,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let o=0;o<i.length;o++){let s=i[o];s.__dataEnabled?s.__dataPending&&s._flushProperties():s._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,o){for(let s in i)(o||!this[f.READ_ONLY]||!this[f.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,i[s],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,o,s){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Ms(this,o,s,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,s,a),this._flushClients(),me(this,this[f.REFLECT],o,s,a),me(this,this[f.OBSERVE],o,s,a),l&&$s(this,l,o,s,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,o,s){this[f.PROPAGATE]&&me(this,this[f.PROPAGATE],i,o,s),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,o,s)}_runEffectsForTemplate(i,o,s,a){const l=(c,d)=>{me(this,i.propertyEffects,c,s,d,i.nodeList);for(let u=i.firstChild;u;u=u.nextSibling)this._runEffectsForTemplate(u,c,s,d)};i.runEffects?i.runEffects(l,o,a):l(o,a)}linkPaths(i,o){i=fe(i),o=fe(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=o}unlinkPaths(i){i=fe(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,o){let s={path:""},a=b(this,i,s);Di(this,a,s.path,o)}get(i,o){return b(o||this,i)}set(i,o,s){s?Ar(s,i,o):(!this[f.READ_ONLY]||!this[f.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,o,!0)&&this._invalidateProperties()}push(i,...o){let s={path:""},a=b(this,i,s),l=a.length,c=a.push(...o);return o.length&&ue(this,a,s.path,l,o.length,[]),c}pop(i){let o={path:""},s=b(this,i,o),a=!!s.length,l=s.pop();return a&&ue(this,s,o.path,s.length,0,[l]),l}splice(i,o,s,...a){let l={path:""},c=b(this,i,l);o<0?o=c.length-Math.floor(-o):o&&(o=Math.floor(o));let d;return arguments.length===2?d=c.splice(o):d=c.splice(o,s,...a),(a.length||d.length)&&ue(this,c,l.path,o,a.length,d),d}shift(i){let o={path:""},s=b(this,i,o),a=!!s.length,l=s.shift();return a&&ue(this,s,o.path,0,0,[l]),l}unshift(i,...o){let s={path:""},a=b(this,i,s),l=a.unshift(...o);return o.length&&ue(this,a,s.path,0,o.length,[]),l}notifyPath(i,o){let s;if(arguments.length==1){let a={path:""};o=b(this,i,a),s=a.path}else Array.isArray(i)?s=fe(i):s=i;this._setPendingPropertyOrPath(s,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,o){this._addPropertyEffect(i,f.READ_ONLY),o&&(this["_set"+sa(i)]=function(s){this._setProperty(i,s)})}_createPropertyObserver(i,o,s){let a={property:i,method:o,dynamicFn:!!s};this._addPropertyEffect(i,f.OBSERVE,{fn:Tr,info:a,trigger:{name:i}}),s&&this._addPropertyEffect(o,f.OBSERVE,{fn:Tr,info:a,trigger:{name:o}})}_createMethodObserver(i,o){let s=dt(i);if(!s)throw new Error("Malformed observer expression '"+i+"'");Or(this,s,f.OBSERVE,Pt,null,o)}_createNotifyingProperty(i){this._addPropertyEffect(i,f.NOTIFY,{fn:Ns,info:{eventName:tt(i)+"-changed",property:i}})}_createReflectedProperty(i){let o=this.constructor.attributeNameForProperty(i);o[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,f.REFLECT,{fn:Rs,info:{attrName:o}})}_createComputedProperty(i,o,s){let a=dt(o);if(!a)throw new Error("Malformed computed expression '"+o+"'");const l=Or(this,a,f.COMPUTE,Li,i,s);lt(this,Ri)[i]=l}_marshalArgs(i,o,s){const a=this.__data,l=[];for(let c=0,d=i.length;c<d;c++){let{name:u,structured:h,wildcard:p,value:m,literal:v}=i[c];if(!v)if(p){const w=We(u,o),y=Mr(a,s,w?o:u);m={path:w?o:u,value:y,base:w?b(a,u):y}}else m=h?Mr(a,s,u):a[u];if(bt&&!this._overrideLegacyUndefined&&m===void 0&&i.length>1)return Se;l[c]=m}return l}static addPropertyEffect(i,o,s){this.prototype._addPropertyEffect(i,o,s)}static createPropertyObserver(i,o,s){this.prototype._createPropertyObserver(i,o,s)}static createMethodObserver(i,o){this.prototype._createMethodObserver(i,o)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,o){this.prototype._createReadOnlyProperty(i,o)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,o,s){this.prototype._createComputedProperty(i,o,s)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,o){let s=this.constructor._parseTemplate(i),a=this.__preBoundTemplateInfo==s;if(!a)for(let l in s.propertyEffects)this._createPropertyAccessor(l);if(o)if(s=Object.create(s),s.wasPreBound=a,!this.__templateInfo)this.__templateInfo=s;else{const l=i._parentTemplateInfo||this.__templateInfo,c=l.lastChild;s.parent=l,l.lastChild=s,s.previousSibling=c,c?c.nextSibling=s:l.firstChild=s}else this.__preBoundTemplateInfo=s;return s}static _addTemplatePropertyEffect(i,o,s){let a=i.hostProps=i.hostProps||{};a[o]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[o]=l[o]||[]).push(s)}_stampTemplate(i,o){o=o||this._bindTemplate(i,!0),he.push(this);let s=super._stampTemplate(i,o);if(he.pop(),o.nodeList=s.nodeList,!o.wasPreBound){let a=o.childNodes=[];for(let l=s.firstChild;l;l=l.nextSibling)a.push(l)}return s.templateInfo=o,Vs(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),s}_removeBoundDom(i){const o=i.templateInfo,{previousSibling:s,nextSibling:a,parent:l}=o;s?s.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=s:l&&(l.lastChild=s),o.nextSibling=o.previousSibling=null;let c=o.childNodes;for(let d=0;d<c.length;d++){let u=c[d];q(q(u).parentNode).removeChild(u)}}static _parseTemplateNode(i,o,s){let a=e._parseTemplateNode.call(this,i,o,s);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,o);l&&(i.textContent=Rr(l)||" ",ct(this,o,s,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(i,o,s,a,l){let c=this._parseBindings(l,o);if(c){let d=a,u="property";Cs.test(a)?u="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),u="attribute");let h=Rr(c);return h&&u=="attribute"&&(a=="class"&&i.hasAttribute("class")&&(h+=" "+i.getAttribute(a)),i.setAttribute(a,h)),u=="attribute"&&d=="disable-upgrade$"&&i.setAttribute(a,""),i.localName==="input"&&d==="value"&&i.setAttribute(d,""),i.removeAttribute(d),u==="property"&&(a=Ci(a)),ct(this,o,s,u,a,c,h),!0}else return e._parseTemplateNodeAttribute.call(this,i,o,s,a,l)}static _parseTemplateNestedTemplate(i,o,s){let a=e._parseTemplateNestedTemplate.call(this,i,o,s);const l=i.parentNode,c=s.templateInfo,d=l.localName==="dom-if",u=l.localName==="dom-repeat";vr&&(d||u)&&(l.removeChild(i),s=s.parentInfo,s.templateInfo=c,s.noted=!0,a=!1);let h=c.hostProps;if(Xo&&d)h&&(o.hostProps=Object.assign(o.hostProps||{},h),vr||(s.parentInfo.noted=!0));else{let p="{";for(let m in h){let v=[{mode:p,source:m,dependencies:[m],hostProp:!0}];ct(this,o,s,"property","_host_"+m,v)}}return a}static _parseBindings(i,o){let s=[],a=0,l;for(;(l=kr.exec(i))!==null;){l.index>a&&s.push({literal:i.slice(a,l.index)});let c=l[1][0],d=!!l[2],u=l[3].trim(),h=!1,p="",m=-1;c=="{"&&(m=u.indexOf("::"))>0&&(p=u.substring(m+2),u=u.substring(0,m),h=!0);let v=dt(u),w=[];if(v){let{args:y,methodName:_}=v;for(let ce=0;ce<y.length;ce++){let $e=y[ce];$e.literal||w.push($e)}let C=o.dynamicFns;(C&&C[_]||v.static)&&(w.push(_),v.dynamicFn=!0)}else w.push(u);s.push({source:u,mode:c,negate:d,customEvent:h,signature:v,dependencies:w,event:p}),a=kr.lastIndex}if(a&&a<i.length){let c=i.substring(a);c&&s.push({literal:c})}return s.length?s:null}static _evaluateBinding(i,o,s,a,l,c){let d;return o.signature?d=Pt(i,s,a,l,o.signature):s!=o.source?d=b(i,o.source):c&&vt(s)?d=b(i,s):d=i.__data[s],o.negate&&(d=!d),d}}return t}),he=[];/**
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
*/function la(r){const e={};for(let t in r){const n=r[t];e[t]=typeof n=="function"?{type:n}:n}return e}const ca=le(r=>{const e=Oi(r);function t(o){const s=Object.getPrototypeOf(o);return s.prototype instanceof i?s:null}function n(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let s=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){const a=o.properties;a&&(s=la(a))}o.__ownProperties=s}return o.__ownProperties}class i extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const s=this._properties;this.__observedAttributes=s?Object.keys(s).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const s=t(this);s&&s.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const s=n(this);s&&this.createProperties(s)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const s=t(this);this.__properties=Object.assign({},s&&s._properties,n(this))}return this.__properties}static typeForProperty(s){const a=this._properties[s];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const da="3.5.2",Lr=window.ShadyCSS&&window.ShadyCSS.cssBuild,ua=le(r=>{const e=ca(aa(r));function t(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let d in c){let u=c[d];"value"in u&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[d]=u)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,c,d,u){d.computed&&(d.readOnly=!0),d.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,d.computed,u)),d.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!d.computed):d.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),d.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):d.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),d.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):d.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),d.observer&&l._createPropertyObserver(c,d.observer,u[d.observer]),l._addPropertyToAttributeMap(c)}function o(l,c,d,u){if(!Lr){const h=c.content.querySelectorAll("style"),p=xi(c),m=os(d),v=c.content.firstElementChild;for(let y=0;y<m.length;y++){let _=m[y];_.textContent=l._processStyleText(_.textContent,u),c.content.insertBefore(_,v)}let w=0;for(let y=0;y<p.length;y++){let _=p[y],C=h[w];C!==_?(_=_.cloneNode(!0),C.parentNode.insertBefore(_,C)):w++,_.textContent=l._processStyleText(_.textContent,u)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,d),Qo&&Lr&&Vo){const h=c.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(m=>{p+=m.textContent,m.parentNode.removeChild(m)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function s(l){let c=null;if(l&&(!yt||Wo)&&(c=xe.import(l,"template"),yt&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends e{static get polymerElementVersion(){return da}static _finalizeClass(){e._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Yo||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let d in c)i(this.prototype,d,c[d],c)}static createObservers(c,d){const u=this.prototype;for(let h=0;h<c.length;h++)u._createMethodObserver(c[h],d)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&s(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=Dt(c.url);else{const d=xe.import(this.is);this._importPath=d&&d.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=qo,this.importPath=this.constructor.importPath;let c=t(this.constructor);if(c)for(let d in c){let u=c[d];if(this._canApplyPropertyDefault(d)){let h=typeof u.value=="function"?u.value.call(this):u.value;this._hasAccessor(d)?this._setPendingProperty(d,h,!0):this[d]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,d){return It(c,d)}static _finalizeTemplate(c){const d=this.prototype._template;if(d&&!d.__polymerFinalized){d.__polymerFinalized=!0;const u=this.importPath,h=u?be(u):"";o(this,d,c,h),this.prototype._bindTemplate(d)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const d=q(this);if(d.attachShadow)return c?(d.shadowRoot||(d.attachShadow({mode:"open",shadyUpgradeFragment:c}),d.shadowRoot.appendChild(c),this.constructor._styleSheet&&(d.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Go&&window.ShadyDOM&&window.ShadyDOM.flushInitial(d.shadowRoot),d.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,d){return!d&&this.importPath&&(d=be(this.importPath)),be(c,d)}static _parseTemplateContent(c,d,u){return d.dynamicFns=d.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,d,u)}static _addTemplatePropertyEffect(c,d,u){return Ko&&!(d in this._properties)&&!(u.info.part.signature&&u.info.part.signature.static)&&!u.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${d}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,d,u)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zr=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:r=>r});class Ui{constructor(e,t){Hi(e,t);const n=t.reduce((i,o,s)=>i+Fi(o)+e[s+1],e[0]);this.value=n.toString()}toString(){return this.value}}function Fi(r){if(r instanceof Ui)return r.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${r}`)}function ha(r){if(r instanceof HTMLTemplateElement)return r.innerHTML;if(r instanceof Ui)return Fi(r);throw new Error(`non-template value passed to Polymer's html function: ${r}`)}const pa=function(e,...t){Hi(e,t);const n=document.createElement("template");let i=t.reduce((o,s,a)=>o+ha(s)+e[a+1],e[0]);return zr&&(i=zr.createHTML(i)),n.innerHTML=i,n},Hi=(r,e)=>{if(!Array.isArray(r)||!Array.isArray(r.raw)||e.length!==r.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fa=ua(HTMLElement),Bi=new WeakMap;function ma(r,e){let t=e;for(;t;){if(Bi.get(t)===r)return!0;t=Object.getPrototypeOf(t)}return!1}function rt(r){return e=>{if(ma(r,e))return e;const t=r(e);return Bi.set(t,r),t}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _a=rt(r=>typeof r.prototype.addController=="function"?r:class extends r{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(t=>{t.hostConnected&&t.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(t=>{t.hostDisconnected&&t.hostDisconnected()})}addController(t){this.__controllers.add(t),this.$!==void 0&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}}),ga=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ie=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ya(){function r(){return!0}return ji(r)}function ba(){try{return va()?!0:wa()?Ie?!Pa():!ya():!1}catch{return!1}}function va(){return localStorage.getItem("vaadin.developmentmode.force")}function wa(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Pa(){return!!(Ie&&Object.keys(Ie).map(e=>Ie[e]).filter(e=>e.productionMode).length>0)}function ji(r,e){if(typeof r!="function")return;const t=ga.exec(r.toString());if(t)try{r=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return r(e)}window.Vaadin=window.Vaadin||{};const Ir=function(r,e){if(window.Vaadin.developmentMode)return ji(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ba());function Ea(){/*! vaadin-dev-mode:start
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

  vaadin-dev-mode:end **/}const xa=function(){if(typeof Ir=="function")return Ir(Ea)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Dr=0,Vi=0;const re=[];let Et=!1;function Aa(){Et=!1;const r=re.length;for(let e=0;e<r;e++){const t=re[e];if(t)try{t()}catch(n){setTimeout(()=>{throw n})}}re.splice(0,r),Vi+=r}const Sa={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}},Ca={run(r){Et||(Et=!0,queueMicrotask(()=>Aa())),re.push(r);const e=Dr;return Dr+=1,e},cancel(r){const e=r-Vi;if(e>=0){if(!re[e])throw new Error(`invalid async handle: ${r}`);re[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xt=new Set;class Ge{static debounce(e,t,n){return e instanceof Ge?e._cancelAsync():e=new Ge,e.setConfig(t,n),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,xt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),xt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function Ta(r){xt.add(r)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const k=[];function At(r,e,t=r.getAttribute("dir")){e?r.setAttribute("dir",e):t!=null&&r.removeAttribute("dir")}function St(){return document.documentElement.getAttribute("dir")}function $a(){const r=St();k.forEach(e=>{At(e,r)})}const Oa=new MutationObserver($a);Oa.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Na=r=>class extends r{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>t===""?null:t}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),At(this,St(),null))}attributeChangedCallback(t,n,i){if(super.attributeChangedCallback(t,n,i),t!=="dir")return;const o=St(),s=i===o&&k.indexOf(this)===-1,a=!i&&n&&k.indexOf(this)===-1;s||a?(this.__subscribe(),At(this,o,i)):i!==o&&n===o&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=k.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,n,i){i==="dir"&&n===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,n,i)}_attributeToProperty(t,n,i){t==="dir"&&!n?this.dir="":super._attributeToProperty(t,n,i)}__subscribe(){k.includes(this)||k.push(this)}__unsubscribe(){k.includes(this)&&k.splice(k.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){xa()};let ut;const Ur=new Set,ka=r=>class extends Na(r){static finalize(){super.finalize();const{is:t}=this;t&&!Ur.has(t)&&(window.Vaadin.registrations.push(this),Ur.add(t),window.Vaadin.developmentModeCallback&&(ut=Ge.debounce(ut,Sa,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Ta(ut)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ra(r){return r.nodeType===Node.TEXT_NODE&&r.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ma{constructor(e,t){this.slot=e,this.callback=t,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const e=this.slot.assignedNodes({flatten:!0});let t=[];const n=[],i=[];e.length&&(t=e.filter(o=>!this._storedNodes.includes(o))),this._storedNodes.length&&this._storedNodes.forEach((o,s)=>{const a=e.indexOf(o);a===-1?n.push(o):a!==s&&i.push(o)}),(t.length||n.length||i.length)&&this.callback({addedNodes:t,currentNodes:e,movedNodes:i,removedNodes:n}),this._storedNodes=e}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let La=0;function za(){return La++}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ia extends EventTarget{static generateId(e,t="default"){return`${t}-${e.localName}-${za()}`}constructor(e,t,n,i={}){super();const{initializer:o,multiple:s,observe:a,useUniqueId:l,uniqueIdPrefix:c}=i;this.host=e,this.slotName=t,this.tagName=n,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof s=="boolean"?s:!1,this.slotInitializer=o,s&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(e,c||t))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let e=this.getSlotChild();e?(this.node=e,this.initAddedNode(e)):(e=this.attachDefaultNode(),this.initNode(e))}initMultiple(){const e=this.getSlotChildren();if(e.length===0){const t=this.attachDefaultNode();t&&(this.nodes=[t],this.initNode(t))}else this.nodes=e,e.forEach(t=>{this.initAddedNode(t)})}attachDefaultNode(){const{host:e,slotName:t,tagName:n}=this;let i=this.defaultNode;return!i&&n&&(i=document.createElement(n),i instanceof Element&&(t!==""&&i.setAttribute("slot",t),this.defaultNode=i)),i&&(this.node=i,e.appendChild(i)),i}getSlotChildren(){const{slotName:e}=this;return Array.from(this.host.childNodes).filter(t=>t.nodeType===Node.ELEMENT_NODE&&t.hasAttribute("data-slot-ignore")?!1:t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&e==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(e){const{slotInitializer:t}=this;t&&t(e,this.host)}initCustomNode(e){}teardownNode(e){}initAddedNode(e){e!==this.defaultNode&&(this.initCustomNode(e),this.initNode(e))}observeSlot(){const{slotName:e}=this,t=e===""?"slot:not([name])":`slot[name=${e}]`,n=this.host.shadowRoot.querySelector(t);this.__slotObserver=new Ma(n,({addedNodes:i,removedNodes:o})=>{const s=this.multiple?this.nodes:[this.node],a=i.filter(l=>!Ra(l)&&!s.includes(l)&&!(l.nodeType===Node.ELEMENT_NODE&&l.hasAttribute("data-slot-ignore")));o.length&&(this.nodes=s.filter(l=>!o.includes(l)),o.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...s,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Da extends Ia{constructor(e){super(e,"tooltip"),this.setTarget(e),this.__onContentChange=this.__onContentChange.bind(this)}initCustomNode(e){e.target=this.target,this.ariaTarget!==void 0&&(e.ariaTarget=this.ariaTarget),this.context!==void 0&&(e.context=this.context),this.manual!==void 0&&(e.manual=this.manual),this.opened!==void 0&&(e.opened=this.opened),this.position!==void 0&&(e._position=this.position),this.shouldShow!==void 0&&(e.shouldShow=this.shouldShow),this.manual||this.host.setAttribute("has-tooltip",""),this.__notifyChange(e),e.addEventListener("content-changed",this.__onContentChange)}teardownNode(e){this.manual||this.host.removeAttribute("has-tooltip"),e.removeEventListener("content-changed",this.__onContentChange),this.__notifyChange(null)}setAriaTarget(e){this.ariaTarget=e;const t=this.node;t&&(t.ariaTarget=e)}setContext(e){this.context=e;const t=this.node;t&&(t.context=e)}setManual(e){this.manual=e;const t=this.node;t&&(t.manual=e)}setOpened(e){this.opened=e;const t=this.node;t&&(t.opened=e)}setPosition(e){this.position=e;const t=this.node;t&&(t._position=e)}setShouldShow(e){this.shouldShow=e;const t=this.node;t&&(t.shouldShow=e)}setTarget(e){this.target=e;const t=this.node;t&&(t.target=e)}__onContentChange(e){this.__notifyChange(e.target)}__notifyChange(e){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:e}}))}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ua=E`
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
*/const Fa=r=>r,qi=typeof document.head.style.touchAction=="string",Ct="__polymerGestures",ht="__polymerGesturesHandled",Tt="__polymerGesturesTouchAction",Fr=25,Hr=5,Ha=2,Ba=["mousedown","mousemove","mouseup","click"],ja=[0,1,4,2],Va=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Ht(r){return Ba.indexOf(r)>-1}let qa=!1;(function(){try{const r=Object.defineProperty({},"passive",{get(){qa=!0}});window.addEventListener("test",null,r),window.removeEventListener("test",null,r)}catch{}})();function Wa(r){Ht(r)}const Ya=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Ka={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function W(r){const e=r.type;if(!Ht(e))return!1;if(e==="mousemove"){let n=r.buttons===void 0?1:r.buttons;return r instanceof window.MouseEvent&&!Va&&(n=ja[r.which]||0),!!(n&1)}return(r.button===void 0?0:r.button)===0}function Ga(r){if(r.type==="click"){if(r.detail===0)return!0;const e=F(r);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const t=e.getBoundingClientRect(),n=r.pageX,i=r.pageY;return!(n>=t.left&&n<=t.right&&i>=t.top&&i<=t.bottom)}return!1}const R={touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Ja(r){let e="auto";const t=Yi(r);for(let n=0,i;n<t.length;n++)if(i=t[n],i[Tt]){e=i[Tt];break}return e}function Wi(r,e,t){r.movefn=e,r.upfn=t,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}function ie(r){document.removeEventListener("mousemove",r.movefn),document.removeEventListener("mouseup",r.upfn),r.movefn=null,r.upfn=null}const Yi=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:r=>r.composedPath&&r.composedPath()||[],Bt={},j=[];function Xa(r,e){let t=document.elementFromPoint(r,e),n=t;for(;n&&n.shadowRoot&&!window.ShadyDOM;){const i=n;if(n=n.shadowRoot.elementFromPoint(r,e),i===n)break;n&&(t=n)}return t}function F(r){const e=Yi(r);return e.length>0?e[0]:r.target}function Qa(r){const e=r.type,n=r.currentTarget[Ct];if(!n)return;const i=n[e];if(!i)return;if(!r[ht]&&(r[ht]={},e.startsWith("touch"))){const s=r.changedTouches[0];if(e==="touchstart"&&r.touches.length===1&&(R.touch.id=s.identifier),R.touch.id!==s.identifier)return;qi||(e==="touchstart"||e==="touchmove")&&Za(r)}const o=r[ht];if(!o.skip){for(let s=0,a;s<j.length;s++)a=j[s],i[a.name]&&!o[a.name]&&a.flow&&a.flow.start.indexOf(r.type)>-1&&a.reset&&a.reset();for(let s=0,a;s<j.length;s++)a=j[s],i[a.name]&&!o[a.name]&&(o[a.name]=!0,a[e](r))}}function Za(r){const e=r.changedTouches[0],t=r.type;if(t==="touchstart")R.touch.x=e.clientX,R.touch.y=e.clientY,R.touch.scrollDecided=!1;else if(t==="touchmove"){if(R.touch.scrollDecided)return;R.touch.scrollDecided=!0;const n=Ja(r);let i=!1;const o=Math.abs(R.touch.x-e.clientX),s=Math.abs(R.touch.y-e.clientY);r.cancelable&&(n==="none"?i=!0:n==="pan-x"?i=s>o:n==="pan-y"&&(i=o>s)),i?r.preventDefault():Je("track")}}function Br(r,e,t){return Bt[e]?(el(r,e,t),!0):!1}function el(r,e,t){const n=Bt[e],i=n.deps,o=n.name;let s=r[Ct];s||(r[Ct]=s={});for(let a=0,l,c;a<i.length;a++)l=i[a],!(Ya&&Ht(l)&&l!=="click")&&(c=s[l],c||(s[l]=c={_count:0}),c._count===0&&r.addEventListener(l,Qa,Wa(l)),c[o]=(c[o]||0)+1,c._count=(c._count||0)+1);r.addEventListener(e,t),n.touchAction&&rl(r,n.touchAction)}function jt(r){j.push(r),r.emits.forEach(e=>{Bt[e]=r})}function tl(r){for(let e=0,t;e<j.length;e++){t=j[e];for(let n=0,i;n<t.emits.length;n++)if(i=t.emits[n],i===r)return t}return null}function rl(r,e){qi&&r instanceof HTMLElement&&Ca.run(()=>{r.style.touchAction=e}),r[Tt]=e}function Vt(r,e,t){const n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=t,Fa(r).dispatchEvent(n),n.defaultPrevented){const i=t.preventer||t.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function Je(r){const e=tl(r);e.info&&(e.info.prevent=!0)}jt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){ie(this.info)},mousedown(r){if(!W(r))return;const e=F(r),t=this,n=o=>{W(o)||(pe("up",e,o),ie(t.info))},i=o=>{W(o)&&pe("up",e,o),ie(t.info)};Wi(this.info,n,i),pe("down",e,r)},touchstart(r){pe("down",F(r),r.changedTouches[0],r)},touchend(r){pe("up",F(r),r.changedTouches[0],r)}});function pe(r,e,t,n){e&&Vt(e,r,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n,prevent(i){return Je(i)}})}jt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(r){this.moves.length>Ha&&this.moves.shift(),this.moves.push(r)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ie(this.info)},mousedown(r){if(!W(r))return;const e=F(r),t=this,n=o=>{const s=o.clientX,a=o.clientY;jr(t.info,s,a)&&(t.info.state=t.info.started?o.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&Je("tap"),t.info.addMove({x:s,y:a}),W(o)||(t.info.state="end",ie(t.info)),e&&pt(t.info,e,o),t.info.started=!0)},i=o=>{t.info.started&&n(o),ie(t.info)};Wi(this.info,n,i),this.info.x=r.clientX,this.info.y=r.clientY},touchstart(r){const e=r.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(r){const e=F(r),t=r.changedTouches[0],n=t.clientX,i=t.clientY;jr(this.info,n,i)&&(this.info.state==="start"&&Je("tap"),this.info.addMove({x:n,y:i}),pt(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend(r){const e=F(r),t=r.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),pt(this.info,e,t))}});function jr(r,e,t){if(r.prevent)return!1;if(r.started)return!0;const n=Math.abs(r.x-e),i=Math.abs(r.y-t);return n>=Hr||i>=Hr}function pt(r,e,t){if(!e)return;const n=r.moves[r.moves.length-2],i=r.moves[r.moves.length-1],o=i.x-r.x,s=i.y-r.y;let a,l=0;n&&(a=i.x-n.x,l=i.y-n.y),Vt(e,"track",{state:r.state,x:t.clientX,y:t.clientY,dx:o,dy:s,ddx:a,ddy:l,sourceEvent:t,hover(){return Xa(t.clientX,t.clientY)}})}jt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(r){W(r)&&(this.info.x=r.clientX,this.info.y=r.clientY)},click(r){W(r)&&Vr(this.info,r)},touchstart(r){const e=r.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(r){Vr(this.info,r.changedTouches[0],r)}});function Vr(r,e,t){const n=Math.abs(e.clientX-r.x),i=Math.abs(e.clientY-r.y),o=F(t||e);!o||Ka[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=Fr&&i<=Fr||Ga(e))&&(r.prevent||Vt(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ki=rt(r=>class extends r{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const il=rt(r=>class extends r{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t);break}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nl=r=>class extends Ki(il(r)){get _activeKeys(){return[" "]}ready(){super.ready(),Br(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),Br(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",n=>{this._activeKeys.includes(n.key)&&this._setActive(!1)},{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let qt=!1;window.addEventListener("keydown",()=>{qt=!0},{capture:!0});window.addEventListener("mousedown",()=>{qt=!1},{capture:!0});function ol(){return qt}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sl=rt(r=>class extends r{get _keyboardActive(){return ol()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}focus(t){super.focus(t),t&&t.focusVisible===!1||this.setAttribute("focus-ring","")}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const al=r=>class extends Ki(r){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged",sync:!0},_lastTabIndex:{type:Number}}}_disabledChanged(t,n){super._disabledChanged(t,n),!this.__shouldAllowFocusWhenDisabled()&&(t?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.setAttribute("tabindex","-1")):n&&(this._lastTabIndex!==void 0?this.setAttribute("tabindex",this._lastTabIndex):this.tabindex=void 0))}_tabindexChanged(t){this.__shouldAllowFocusWhenDisabled()||this.disabled&&t!==-1&&(this._lastTabIndex=t,this.setAttribute("tabindex","-1"))}focus(t){(!this.disabled||this.__shouldAllowFocusWhenDisabled())&&super.focus(t)}__shouldAllowFocusWhenDisabled(){return!1}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ll=["mousedown","mouseup","click","dblclick","keypress","keydown","keyup"],cl=r=>class extends nl(al(sl(r))){constructor(){super(),this.__onInteractionEvent=this.__onInteractionEvent.bind(this),ll.forEach(t=>{this.addEventListener(t,this.__onInteractionEvent,!0)}),this.tabindex=0}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button"),this.__shouldAllowFocusWhenDisabled()&&this.style.setProperty("--_vaadin-button-disabled-pointer-events","auto")}_onKeyDown(t){super._onKeyDown(t),!(t.altKey||t.shiftKey||t.ctrlKey||t.metaKey)&&this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}__onInteractionEvent(t){this.__shouldSuppressInteractionEvent(t)&&t.stopImmediatePropagation()}__shouldSuppressInteractionEvent(t){return this.disabled}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */et("vaadin-button",Ua,{moduleId:"vaadin-button-styles"});class dl extends cl(ka(No(_a(fa)))){static get properties(){return{disabled:{type:Boolean,value:!1}}}static get is(){return"vaadin-button"}static get template(){return pa`
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
    `}ready(){super.ready(),this._tooltipController=new Da(this),this.addController(this._tooltipController)}__shouldAllowFocusWhenDisabled(){return window.Vaadin.featureFlags.accessibleDisabledButtons}}mi(dl);var ul=Object.defineProperty,hl=Object.getOwnPropertyDescriptor,pl=(r,e,t)=>e in r?ul(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,fl=(r,e,t,n)=>{for(var i=n>1?void 0:n?hl(e,t):e,o=r.length-1,s;o>=0;o--)(s=r[o])&&(i=s(i)||i);return i},ml=(r,e,t)=>pl(r,e+"",t);let Xe=class extends L{render(){return ee`
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
            <vaadin-button theme="primary" @click=${r=>this.onNavigate(r,"/register")}>Create Account</vaadin-button>
            <vaadin-button theme="secondary" @click=${r=>this.onNavigate(r,"/login")}>Log In</vaadin-button>
          </div>
        </div>
      </div>
    `}onNavigate(r,e){r&&typeof r.preventDefault=="function"&&r.preventDefault(),r&&typeof r.stopPropagation=="function"&&r.stopPropagation(),console.debug("[landing-view] navigate ->",e,"current=",window.location.pathname),$(async()=>{const{Router:t}=await Promise.resolve().then(()=>ve);return{Router:t}},void 0).then(({Router:t})=>{if(typeof t.go=="function"){t.go(e);return}const n=window.vaadin&&window.vaadin.router;if(n&&typeof n.go=="function"){n.go(e);return}if(n&&typeof n.render=="function"){n.render(e);return}history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate"))}).catch(t=>{console.error("[landing-view] navigation import failed, falling back to location.href",t),window.location.href=e})}};ml(Xe,"styles",E`
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
  `);Xe=fl([Lt("landing-view")],Xe);const qr=Object.freeze(Object.defineProperty({__proto__:null,get LandingView(){return Xe}},Symbol.toStringTag,{value:"Module"}));async function Wr(){try{const r=document.getElementById("outlet");if(!r)throw new Error("Could not find the outlet element");const e=new M(r);window.vaadin=window.vaadin||{},window.vaadin.router=e,e.setRoutes([{path:"/",component:"landing-view",action:()=>{$(()=>Promise.resolve().then(()=>qr),void 0)}},{path:"/login",component:"login-view",action:()=>{if(localStorage.getItem("user")){window.location.href="/";return}$(()=>Promise.resolve().then(()=>co),void 0)}},{path:"/register",component:"register-view",action:()=>{if(localStorage.getItem("user")){window.location.href="/";return}$(()=>Promise.resolve().then(()=>go),void 0)}},{path:"(.*)",component:"landing-view",action:()=>{$(()=>Promise.resolve().then(()=>qr),void 0)}}]);const t=localStorage.getItem("user")!==null,n=window.location.pathname;!t&&!["/login","/register","/"].includes(n)?window.location.href="/login":t&&["/login","/register"].includes(n)&&(window.location.href="/");const i=document.querySelector("#outlet > div");i&&i.remove()}catch(r){console.error("Failed to initialize the app:",r);const e=document.createElement("div");e.style.color="red",e.style.padding="20px",e.style.textAlign="center",e.innerHTML=`
      <h2>Application Error</h2>
      <p>Failed to initialize the application. Please check the console for more details.</p>
      <p>${r instanceof Error?r.message:String(r)}</p>
      <button onclick="window.location.reload()" style="margin-top: 10px; padding: 8px 16px; cursor: pointer;">
        Reload Application
      </button>
    `;const t=document.getElementById("app")||document.body;t.innerHTML="",t.appendChild(e)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Wr):Wr();
//# sourceMappingURL=main-4lynpRKZ.js.map
