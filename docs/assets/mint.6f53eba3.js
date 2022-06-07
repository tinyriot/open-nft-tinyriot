import{S as te,i as le,s as se,e as d,t as H,a as T,d as f,u as ie,f as L,g as n,h as D,l as F,k as U,C as $,j as Q,D as ne,o as ae,B as x,p as ee,r as q,q as P,y as oe,c as re,m as ce,n as fe,v as A,z as ue}from"./index.534f2e7f.js";import{h as G,M as de}from"./MintTable.a63c07ed.js";function J(l,e,t){const s=l.slice();return s[28]=e[t],s}function V(l){let e,t,s,o,a,c,k,i,m,g,_,b,j,M,r;return{c(){e=d("div"),t=d("h2"),s=H(l[9]),o=H(" ("),a=H(l[10]),c=H(")"),k=T(),i=d("a"),m=d("img"),_=T(),b=H(l[3]),M=T(),r=d("div"),r.textContent="Mint your NFT from an invite list below.",f(t,"class","svelte-j9jkll"),ie(m.src,g="/etherscan.png")||f(m,"src",g),f(m,"class","svelte-j9jkll"),f(i,"target","_blank"),f(i,"href",j="https://"+l[12]+"etherscan.io/address/"+l[3]+"#code"),f(i,"class","svelte-j9jkll"),f(r,"class","annotation svelte-j9jkll"),f(e,"class","ns svelte-j9jkll")},m(u,w){L(u,e,w),n(e,t),n(t,s),n(t,o),n(t,a),n(t,c),n(e,k),n(e,i),n(i,m),n(i,_),n(i,b),n(e,M),n(e,r)},p(u,w){w&512&&D(s,u[9]),w&1024&&D(a,u[10]),w&8&&D(b,u[3]),w&4104&&j!==(j="https://"+u[12]+"etherscan.io/address/"+u[3]+"#code")&&f(i,"href",j)},d(u){u&&F(e)}}}function me(l){let e;return{c(){e=d("div"),e.textContent="you are not on any invite list",f(e,"class","empty")},m(t,s){L(t,e,s)},p:q,i:q,o:q,d(t){t&&F(e)}}}function ve(l){let e,t,s,o=l[0],a=[];for(let c=0;c<o.length;c+=1)a[c]=X(J(l,o,c));return{c(){e=d("table"),t=d("tr"),t.innerHTML=`<th class="svelte-j9jkll">name</th> 
          <th class="svelte-j9jkll">price</th> 
          <th class="invite-limit svelte-j9jkll">limit</th> 
          <th class="invite-mint svelte-j9jkll">mint</th>`,s=T();for(let c=0;c<a.length;c+=1)a[c].c();f(e,"class","svelte-j9jkll")},m(c,k){L(c,e,k),n(e,t),n(e,s);for(let i=0;i<a.length;i+=1)a[i].m(e,null)},p(c,k){if(k&16385){o=c[0];let i;for(i=0;i<o.length;i+=1){const m=J(c,o,i);a[i]?a[i].p(m,k):(a[i]=X(m),a[i].c(),a[i].m(e,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=o.length}},i:q,o:q,d(c){c&&F(e),oe(a,c)}}}function _e(l){let e;return{c(){e=d("div"),e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>loading invites...',f(e,"class","loading svelte-j9jkll")},m(t,s){L(t,e,s)},p:q,i:q,o:q,d(t){t&&F(e)}}}function he(l){let e,t,s,o,a,c,k=(l[4].name?l[4].name:l[4].key)+"",i,m,g,_,b,j,M,r,u,w,E,S,N,C,y,R,z,B,K,W;function Z(v,I){return v[6]?pe:ke}let O=Z(l),p=O(l),h=l[8]&&Y(l);return{c(){e=d("div"),t=d("div"),s=d("div"),o=d("div"),o.textContent="invite",a=T(),c=d("div"),i=H(k),m=T(),g=d("div"),_=T(),b=d("button"),b.innerHTML='<i class="fa-solid fa-circle-xmark"></i>',j=T(),M=d("h2"),r=H(l[11]),u=H(" ETH"),w=T(),E=d("div"),S=d("div"),S.textContent="count",N=T(),C=d("div"),y=d("input"),R=T(),p.c(),z=T(),h&&h.c(),f(o,"class","faded svelte-j9jkll"),f(s,"class","invitename svelte-j9jkll"),f(g,"class","flexible svelte-j9jkll"),f(b,"class","svelte-j9jkll"),f(t,"class","header svelte-j9jkll"),f(M,"class","svelte-j9jkll"),f(S,"class","name svelte-j9jkll"),f(y,"type","number"),f(y,"placeholder","mint count"),f(y,"class","svelte-j9jkll"),f(C,"class","value svelte-j9jkll"),f(E,"class","selector svelte-j9jkll"),f(e,"class","showauth info svelte-j9jkll")},m(v,I){L(v,e,I),n(e,t),n(t,s),n(s,o),n(s,a),n(s,c),n(c,i),n(t,m),n(t,g),n(t,_),n(t,b),n(e,j),n(e,M),n(M,r),n(M,u),n(e,w),n(e,E),n(E,S),n(E,N),n(E,C),n(C,y),A(y,l[1]),n(e,R),p.m(e,null),n(e,z),h&&h.m(e,null),B=!0,K||(W=[P(b,"click",l[17]),P(y,"input",l[18]),P(y,"input",l[19])],K=!0)},p(v,I){(!B||I&16)&&k!==(k=(v[4].name?v[4].name:v[4].key)+"")&&D(i,k),(!B||I&2048)&&D(r,v[11]),I&2&&ee(y.value)!==v[1]&&A(y,v[1]),O===(O=Z(v))&&p?p.p(v,I):(p.d(1),p=O(v),p&&(p.c(),p.m(e,z))),v[8]?h?(h.p(v,I),I&256&&Q(h,1)):(h=Y(v),h.c(),Q(h,1),h.m(e,null)):h&&(x(),U(h,1,1,()=>{h=null}),$())},i(v){B||(Q(h),B=!0)},o(v){U(h),B=!1},d(v){v&&F(e),p.d(),h&&h.d(),K=!1,ue(W)}}}function X(l){let e,t,s=(l[28].name?l[28].name:l[28].key)+"",o,a,c,k=l[28].price+"",i,m,g,_,b=l[28].limit+"",j,M,r,u,w,E,S;function N(){return l[21](l[28])}return{c(){e=d("tr"),t=d("td"),o=H(s),a=T(),c=d("td"),i=H(k),m=H(" ETH"),g=T(),_=d("td"),j=H(b),M=T(),r=d("td"),u=d("button"),u.textContent="mint",w=T(),f(t,"class","svelte-j9jkll"),f(c,"class","svelte-j9jkll"),f(_,"class","invite-limit svelte-j9jkll"),f(u,"class","display svelte-j9jkll"),f(r,"class","invite-mint svelte-j9jkll")},m(C,y){L(C,e,y),n(e,t),n(t,o),n(e,a),n(e,c),n(c,i),n(c,m),n(e,g),n(e,_),n(_,j),n(e,M),n(e,r),n(r,u),n(e,w),E||(S=P(u,"click",N),E=!0)},p(C,y){l=C,y&1&&s!==(s=(l[28].name?l[28].name:l[28].key)+"")&&D(o,s),y&1&&k!==(k=l[28].price+"")&&D(i,k),y&1&&b!==(b=l[28].limit+"")&&D(j,b)},d(C){C&&F(e),E=!1,S()}}}function ke(l){let e,t,s;return{c(){e=d("button"),e.textContent="mint",f(e,"id","mint-button"),f(e,"class","display svelte-j9jkll")},m(o,a){L(o,e,a),t||(s=P(e,"click",l[20]),t=!0)},p:q,d(o){o&&F(e),t=!1,s()}}}function pe(l){let e;return{c(){e=d("div"),e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>minting NFTs...',f(e,"class","loading svelte-j9jkll")},m(t,s){L(t,e,s)},p:q,d(t){t&&F(e)}}}function Y(l){let e,t;return e=new de({props:{tx:l[8],web3:l[13],contract:l[3]}}),{c(){re(e.$$.fragment)},m(s,o){ce(e,s,o),t=!0},p(s,o){const a={};o&256&&(a.tx=s[8]),o&8&&(a.contract=s[3]),e.$set(a)},i(s){t||(Q(e.$$.fragment,s),t=!0)},o(s){U(e.$$.fragment,s),t=!1},d(s){fe(e,s)}}}function je(l){let e,t,s,o,a,c,k,i,m,g,_=l[9]&&V(l);const b=[he,_e,ve,me],j=[];function M(r,u){return r[5]?0:r[7]?1:r[0]&&r[0].length>0?2:3}return i=M(l),m=j[i]=b[i](l),{c(){e=d("div"),t=H(l[2]),s=T(),o=d("div"),a=d("nav"),a.innerHTML=`<h1 class="svelte-j9jkll"><a href="/" class="svelte-j9jkll">factoria</a></h1> 
  <div>decentralized NFT vending machine maker</div> 
  <div class="buttons svelte-j9jkll"><a href="https://factoria.app/docs" class="svelte-j9jkll"><i class="fa-solid fa-circle-question"></i></a> 
    <a href="https://github.com/factoria-org/openfactoria" class="svelte-j9jkll"><i class="fa-brands fa-github"></i></a> 
    <a href="https://twitter.com/skogard" class="svelte-j9jkll"><i class="fa-brands fa-twitter"></i></a> 
    <a href="https://discord.gg/BZtp5F6QQM" class="svelte-j9jkll"><i class="fa-brands fa-discord"></i></a></div>`,c=T(),_&&_.c(),k=T(),m.c(),f(e,"class","error"),f(a,"class","svelte-j9jkll"),f(o,"class","container svelte-j9jkll")},m(r,u){L(r,e,u),n(e,t),L(r,s,u),L(r,o,u),n(o,a),n(o,c),_&&_.m(o,null),n(o,k),j[i].m(o,null),g=!0},p(r,[u]){(!g||u&4)&&D(t,r[2]),r[9]?_?_.p(r,u):(_=V(r),_.c(),_.m(o,k)):_&&(_.d(1),_=null);let w=i;i=M(r),i===w?j[i].p(r,u):(x(),U(j[w],1,1,()=>{j[w]=null}),$(),m=j[i],m?m.p(r,u):(m=j[i]=b[i](r),m.c()),Q(m,1),m.m(o,null))},i(r){g||(Q(m),g=!0)},o(r){U(m),g=!1},d(r){r&&F(e),r&&F(s),r&&F(o),_&&_.d(),j[i].d()}}}function be(l,e,t){ne();let s={},o=[];const a=new F0;let c=1,k="",i,m,g,_,b,j,M,r,u=0,w,E,S,N,C=new Web3(window.ethereum);const y=async p=>{t(4,g=p),t(5,_=!0),location.hash="#"+i+":"+g.key,await R()},R=async()=>{let p=g;console.log("*",p),b={key:p.key,proof:a._invites[p.key].proof},u=""+a._invites[p.key].condition.raw.price*c,t(11,S=u/10**18);try{t(2,k="");let h=await a.api.mint(b,c).estimate({value:u});console.log("estimate",h)}catch(h){console.log("error",h.message),t(2,k=G(h.message))}},z=async()=>{try{t(6,j=!0),t(2,k="");let p=g;b={key:p.key,proof:a._invites[p.key].proof},t(8,r=await a.api.mint(b,c).send({value:u}))}catch(p){t(2,k=G(p.message))}t(6,j=!1)},B=()=>{location.hash="#"+i,t(5,_=!1)};ae(async()=>{if(t(7,M=!0),location.hash.length>0){let v=location.hash.slice(1).split(":");t(3,i=v[0]),v.length>1&&(m=v[1])}else{t(2,k="[ERROR] no contract address specified");return}await a.init({web3:C,contract:i});let p=await C.eth.getChainId();t(12,N=p.toString()==="4"?"rinkeby.":""),t(9,w=await a.api.name().call()),t(10,E=await a.api.symbol().call()),s=await a.myInvites(),s&&s[m]&&await y(s[m]),t(0,o=[]);for(let h in s){let v=s[h].condition,I=new Date(v.converted.start);v.converted.limit>0&&o.push({name:s[h].name,key:h,cid:s[h].cid,limit:`${v.converted.limit}`,price:`${v.converted.eth}`,start:`${I.toDateString()} ${I.toLocaleTimeString()}`,startUnix:v.raw.start})}t(7,M=!1)});function K(){c=ee(this.value),t(1,c)}return[o,c,k,i,g,_,j,M,r,w,E,S,N,C,y,R,z,B,K,()=>{R()},()=>{z()},p=>{y(p)}]}class ge extends te{constructor(e){super(),le(this,e,be,je,se,{})}}new ge({target:document.getElementById("mint")});
