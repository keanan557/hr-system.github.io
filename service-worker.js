if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>n(e,r),a={module:{uri:r},exports:c,require:f};i[r]=Promise.all(o.map((e=>a[e]||f(e)))).then((e=>(s(...e),c)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hr-management-system"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/assets/newlogo.png",revision:"aaddbfefc03fcf98f0dcfbb3b3989939"},{url:"/css/app.40635cc4.css",revision:null},{url:"/img/favicon_io (1)/android-chrome-192x192.png",revision:"fd4c972d5f0a6f735dfc186767290b07"},{url:"/img/favicon_io (1)/android-chrome-512x512.png",revision:"f0672688f890aadff3894f1249b4a69c"},{url:"/img/favicon_io (1)/apple-touch-icon.png",revision:"59cbe24e4a19608acdc9b3058b5616e2"},{url:"/img/favicon_io (1)/favicon-16x16.png",revision:"3682ddff62fc0b4c0a292215979a9cf6"},{url:"/img/favicon_io (1)/favicon-32x32.png",revision:"0684319e0355da214fb40ec165d1bf06"},{url:"/img/favicon_io (1)/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/index.html",revision:"29b078e17acebdb8ba8fadebe66eadf3"},{url:"/js/125.36011219.js",revision:null},{url:"/js/179.3a17ae20.js",revision:null},{url:"/js/427.1db77966.js",revision:null},{url:"/js/app.f28e8f87.js",revision:null},{url:"/js/chunk-vendors.e7f3ea0e.js",revision:null},{url:"/manifest.json",revision:"1d99e9b9be6b66a9c1629125dc259ad5"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
