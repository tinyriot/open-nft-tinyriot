import{S as z,i as D,s as E,e as v,t as C,a as _,d as s,f as Z,g as t,h as H,l as j,A as w,r as L}from"./index.534f2e7f.js";function T(n){let e,i,o,h,m,r,a,c;return{c(){e=v("div"),i=v("div"),o=C(n[4]),h=_(),m=v("div"),r=_(),a=v("div"),c=C(n[5]),s(m,"class","flexible"),s(a,"class","account svelte-mh3wyd"),s(e,"class","network svelte-mh3wyd")},m(l,u){Z(l,e,u),t(e,i),t(i,o),t(e,h),t(e,m),t(e,r),t(e,a),t(a,c)},p(l,u){u&16&&H(o,l[4]),u&32&&H(c,l[5])},d(l){l&&j(e)}}}function G(n){let e,i,o,h,m,r,a,c,l,u,M,g,Q,F,S,b,V,N,A,k,B,q,f=n[4]&&T(n);return{c(){e=v("nav"),i=v("a"),i.textContent="Factoria",o=_(),h=v("div"),h.innerHTML=`<a href="https://factoria.app/docs" class="svelte-mh3wyd"><i class="fa-solid fa-circle-question"></i></a> 
    <a href="https://github.com/factoria-org/openfactoria" class="svelte-mh3wyd"><i class="fa-brands fa-github"></i></a> 
    <a href="https://twitter.com/skogard" class="svelte-mh3wyd"><i class="fa-brands fa-twitter"></i></a> 
    <a href="https://discord.gg/BZtp5F6QQM" class="svelte-mh3wyd"><i class="fa-brands fa-discord"></i></a>`,m=_(),f&&f.c(),r=_(),a=v("div"),c=v("a"),l=C("V2"),M=_(),g=v("a"),Q=C("V1 (old)"),S=_(),b=v("a"),V=C("Files"),A=_(),k=v("a"),B=C("Config"),s(i,"class","brand svelte-mh3wyd"),s(i,"href","/"),s(h,"class","buttons svelte-mh3wyd"),s(c,"href","/v2/"),s(c,"class",u=w(n[1])+" svelte-mh3wyd"),s(g,"href","/v1/"),s(g,"class",F=w(n[0])+" svelte-mh3wyd"),s(b,"href","/files/"),s(b,"class",N=w(n[2])+" svelte-mh3wyd"),s(k,"href","/config/"),s(k,"class",q=w(n[3])+" svelte-mh3wyd"),s(a,"class","navbar svelte-mh3wyd"),s(e,"class","svelte-mh3wyd")},m(d,y){Z(d,e,y),t(e,i),t(e,o),t(e,h),t(e,m),f&&f.m(e,null),t(e,r),t(e,a),t(a,c),t(c,l),t(a,M),t(a,g),t(g,Q),t(a,S),t(a,b),t(b,V),t(a,A),t(a,k),t(k,B)},p(d,[y]){d[4]?f?f.p(d,y):(f=T(d),f.c(),f.m(e,r)):f&&(f.d(1),f=null),y&2&&u!==(u=w(d[1])+" svelte-mh3wyd")&&s(c,"class",u),y&1&&F!==(F=w(d[0])+" svelte-mh3wyd")&&s(g,"class",F),y&4&&N!==(N=w(d[2])+" svelte-mh3wyd")&&s(b,"class",N),y&8&&q!==(q=w(d[3])+" svelte-mh3wyd")&&s(k,"class",q)},i:L,o:L,d(d){d&&j(e),f&&f.d()}}}function I(n,e,i){let{v1:o=""}=e,{v2:h=""}=e,{files:m=""}=e,{config:r=""}=e,{network:a}=e,{account:c}=e;return n.$$set=l=>{"v1"in l&&i(0,o=l.v1),"v2"in l&&i(1,h=l.v2),"files"in l&&i(2,m=l.files),"config"in l&&i(3,r=l.config),"network"in l&&i(4,a=l.network),"account"in l&&i(5,c=l.account)},[o,h,m,r,a,c]}class K extends z{constructor(e){super(),D(this,e,I,G,E,{v1:0,v2:1,files:2,config:3,network:4,account:5})}}export{K as N};
