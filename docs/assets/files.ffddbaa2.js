import{r as D,s as x,S as ce,i as ue,e as u,a as F,d as r,f as h,g as c,l as y,G as Z,H as q,t as O,q as G,h as V,y as Ie,v as $,w as ee,x as te,z as de,b as le,c as se,m as ae,j as oe,k as fe,n as re}from"./index.534f2e7f.js";import{N as Ge}from"./Nav.6c89479b.js";import"https://esm.run/localforage";import{NFTStorage as Pe}from"https://cdn.jsdelivr.net/npm/nft.storage/dist/bundle.esm.min.js";import{r as H,a as qe,g as ne}from"./db.6824b741.js";const E=[];function Ne(n,e=D){let t;const l=new Set;function i(f){if(x(n,f)&&(n=f,t)){const o=!E.length;for(const d of l)d[1](),E.push(d,n);if(o){for(let d=0;d<E.length;d+=2)E[d][0](E[d+1]);E.length=0}}}function s(f){i(f(n))}function a(f,o=D){const d=[f,o];return l.add(d),l.size===1&&(t=e(i)||D),f(n),()=>{l.delete(d),l.size===0&&(t(),t=null)}}return{set:i,update:s,subscribe:a}}let J=Ne([]),R=Ne([]);function be(n,e,t){const l=n.slice();return l[5]=e[t],l}function ve(n,e,t){const l=n.slice();return l[5]=e[t],l}function He(n){let e;return{c(){e=u("div"),e.textContent="empty",r(e,"class","empty svelte-vpkb0c")},m(t,l){h(t,e,l)},p:D,d(t){t&&y(e)}}}function Oe(n){let e,t=n[0],l=[];for(let i=0;i<t.length;i+=1)l[i]=ke(ve(n,t,i));return{c(){e=u("div");for(let i=0;i<l.length;i+=1)l[i].c();r(e,"class","info svelte-vpkb0c")},m(i,s){h(i,e,s);for(let a=0;a<l.length;a+=1)l[a].m(e,null)},p(i,s){if(s&5){t=i[0];let a;for(a=0;a<t.length;a+=1){const f=ve(i,t,a);l[a]?l[a].p(f,s):(l[a]=ke(f),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(i){i&&y(e),Ie(l,i)}}}function ke(n){let e,t,l,i=n[5].name+"",s,a,f,o=n[5].cid+"",d,v,M,p,m,k,C;function w(){return n[3](n[5])}return{c(){e=u("div"),t=u("a"),l=u("h3"),s=O(i),a=F(),f=u("div"),d=O(o),M=F(),p=u("button"),p.innerHTML='<i class="fa-solid fa-trash-can"></i>',m=F(),r(t,"target","_blank"),r(t,"class","val svelte-vpkb0c"),r(t,"href",v="https://ipfs.io/ipfs/"+n[5].cid),r(p,"class","svelte-vpkb0c"),r(e,"class","item svelte-vpkb0c")},m(b,g){h(b,e,g),c(e,t),c(t,l),c(l,s),c(t,a),c(t,f),c(f,d),c(e,M),c(e,p),c(e,m),k||(C=G(p,"click",w),k=!0)},p(b,g){n=b,g&1&&i!==(i=n[5].name+"")&&V(s,i),g&1&&o!==(o=n[5].cid+"")&&V(d,o),g&1&&v!==(v="https://ipfs.io/ipfs/"+n[5].cid)&&r(t,"href",v)},d(b){b&&y(e),k=!1,C()}}}function ze(n){let e;return{c(){e=u("div"),e.textContent="empty",r(e,"class","empty svelte-vpkb0c")},m(t,l){h(t,e,l)},p:D,d(t){t&&y(e)}}}function Le(n){let e,t=n[1],l=[];for(let i=0;i<t.length;i+=1)l[i]=he(be(n,t,i));return{c(){e=u("div");for(let i=0;i<l.length;i+=1)l[i].c();r(e,"class","info svelte-vpkb0c")},m(i,s){h(i,e,s);for(let a=0;a<l.length;a+=1)l[a].m(e,null)},p(i,s){if(s&6){t=i[1];let a;for(a=0;a<t.length;a+=1){const f=be(i,t,a);l[a]?l[a].p(f,s):(l[a]=he(f),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(i){i&&y(e),Ie(l,i)}}}function he(n){let e,t,l,i=n[5].name+"",s,a,f,o=n[5].cid+"",d,v,M,p,m,k,C;function w(){return n[4](n[5])}return{c(){e=u("div"),t=u("a"),l=u("h3"),s=O(i),a=F(),f=u("div"),d=O(o),M=F(),p=u("button"),p.innerHTML='<i class="fa-solid fa-trash-can"></i>',m=F(),r(t,"target","_blank"),r(t,"class","val svelte-vpkb0c"),r(t,"href",v="https://ipfs.io/ipfs/"+n[5].cid),r(p,"class","svelte-vpkb0c"),r(e,"class","item svelte-vpkb0c")},m(b,g){h(b,e,g),c(e,t),c(t,l),c(l,s),c(t,a),c(t,f),c(f,d),c(e,M),c(e,p),c(e,m),k||(C=G(p,"click",w),k=!0)},p(b,g){n=b,g&2&&i!==(i=n[5].name+"")&&V(s,i),g&2&&o!==(o=n[5].cid+"")&&V(d,o),g&2&&v!==(v="https://ipfs.io/ipfs/"+n[5].cid)&&r(t,"href",v)},d(b){b&&y(e),k=!1,C()}}}function je(n){let e,t,l,i,s,a,f;function o(k,C){return k[0].length>0?Oe:He}let d=o(n),v=d(n);function M(k,C){return k[1].length>0?Le:ze}let p=M(n),m=p(n);return{c(){e=u("div"),t=u("h2"),t.textContent="Files",l=F(),v.c(),i=F(),s=u("div"),a=u("h2"),a.textContent="Metadata",f=F(),m.c(),r(t,"class","svelte-vpkb0c"),r(e,"class","tab svelte-vpkb0c"),r(a,"class","svelte-vpkb0c"),r(s,"class","tab svelte-vpkb0c")},m(k,C){h(k,e,C),c(e,t),c(e,l),v.m(e,null),h(k,i,C),h(k,s,C),c(s,a),c(s,f),m.m(s,null)},p(k,[C]){d===(d=o(k))&&v?v.p(k,C):(v.d(1),v=d(k),v&&(v.c(),v.m(e,null))),p===(p=M(k))&&m?m.p(k,C):(m.d(1),m=p(k),m&&(m.c(),m.m(s,null)))},i:D,o:D,d(k){k&&y(e),v.d(),k&&y(i),k&&y(s),m.d()}}}function Ae(n,e,t){let l,i;Z(n,J,o=>t(0,l=o)),Z(n,R,o=>t(1,i=o));const s=async(o,d)=>{await qe(o,d),q(R,i=await H("metadata"),i),q(J,l=H("file"),l)},a=o=>{s("file",o.name)},f=o=>{s("metadata",o.name)};return H("metadata").then(o=>{q(R,i=o,i)}),H("file").then(o=>{q(J,l=o,l)}),[l,i,s,a,f]}class Ee extends ce{constructor(e){super(),ue(this,e,Ae,je,x,{})}}function ye(n){let e,t,l,i;return{c(){e=u("div"),t=u("button"),t.textContent="+ Upload a folder",r(e,"class","top")},m(s,a){h(s,e,a),c(e,t),l||(i=G(t,"click",n[15]),l=!0)},p:D,d(s){s&&y(e),l=!1,i()}}}function ge(n){let e,t,l,i,s,a,f,o,d,v,M,p,m,k,C,w=n[4]&&we(n),b=n[0].length>0&&Fe(n),g=n[7]=="file"&&n[0].length>0&&Ce(n);return{c(){e=u("div"),t=u("label"),t.textContent="Select a folder",l=F(),i=u("input"),s=F(),a=u("div"),f=u("div"),o=O("or "),d=u("span"),d.textContent="save folder CIDs manually",v=F(),w&&w.c(),M=F(),p=u("div"),b&&b.c(),m=F(),g&&g.c(),r(t,"class","name svelte-196kd7e"),r(i,"type","file"),r(i,"webkitdirectory",""),i.multiple=!0,r(i,"class","svelte-196kd7e"),r(d,"class","clickable svelte-196kd7e"),r(a,"class","manual svelte-196kd7e"),r(e,"class","item"),r(p,"class","item")},m(I,N){h(I,e,N),c(e,t),c(e,l),c(e,i),c(e,s),c(e,a),c(a,f),c(f,o),c(f,d),c(a,v),w&&w.m(a,null),h(I,M,N),h(I,p,N),b&&b.m(p,null),c(p,m),g&&g.m(p,null),k||(C=[G(i,"change",n[22]),G(d,"click",n[16])],k=!0)},p(I,N){I[4]?w?w.p(I,N):(w=we(I),w.c(),w.m(a,null)):w&&(w.d(1),w=null),I[0].length>0?b?b.p(I,N):(b=Fe(I),b.c(),b.m(p,m)):b&&(b.d(1),b=null),I[7]=="file"&&I[0].length>0?g?g.p(I,N):(g=Ce(I),g.c(),g.m(p,null)):g&&(g.d(1),g=null)},d(I){I&&y(e),w&&w.d(),I&&y(M),I&&y(p),b&&b.d(),g&&g.d(),k=!1,de(C)}}}function we(n){let e,t,l,i,s;function a(d,v){return d[9]?Re:Je}let f=a(n),o=f(n);return{c(){e=u("form"),t=u("input"),l=F(),o.c(),r(t,"type","text"),r(t,"placeholder","IPFS CID"),r(t,"class","svelte-196kd7e")},m(d,v){h(d,e,v),c(e,t),$(t,n[11].cid),c(e,l),o.m(e,null),i||(s=[G(t,"input",n[23]),G(e,"submit",ee(te(n[17])))],i=!0)},p(d,v){v&2048&&t.value!==d[11].cid&&$(t,d[11].cid),f!==(f=a(d))&&(o.d(1),o=f(d),o&&(o.c(),o.m(e,null)))},d(d){d&&y(e),o.d(),i=!1,de(s)}}}function Je(n){let e;return{c(){e=u("input"),r(e,"type","submit"),e.value="Save",r(e,"class","svelte-196kd7e")},m(t,l){h(t,e,l)},d(t){t&&y(e)}}}function Re(n){let e;return{c(){e=u("div"),e.textContent="Saved the folder",r(e,"class","disabled btn svelte-196kd7e")},m(t,l){h(t,e,l)},d(t){t&&y(e)}}}function Fe(n){let e;function t(s,a){return s[10].upload?Ve:s[7]=="metadata"?Qe:Ke}let l=t(n),i=l(n);return{c(){i.c(),e=le()},m(s,a){i.m(s,a),h(s,e,a)},p(s,a){l===(l=t(s))&&i?i.p(s,a):(i.d(1),i=l(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){i.d(s),s&&y(e)}}}function Ke(n){let e;return{c(){e=u("input"),r(e,"type","submit"),e.value="Upload files to IPFS",r(e,"class","svelte-196kd7e")},m(t,l){h(t,e,l)},p:D,d(t){t&&y(e)}}}function Qe(n){let e;return{c(){e=u("input"),r(e,"type","submit"),e.value="Upload metadata to IPFS",r(e,"class","svelte-196kd7e")},m(t,l){h(t,e,l)},p:D,d(t){t&&y(e)}}}function Ve(n){let e;function t(s,a){return s[7]=="metadata"?Xe:We}let l=t(n),i=l(n);return{c(){i.c(),e=le()},m(s,a){i.m(s,a),h(s,e,a)},p(s,a){l!==(l=t(s))&&(i.d(1),i=l(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){i.d(s),s&&y(e)}}}function We(n){let e;return{c(){e=u("div"),e.textContent="Uploaded files",r(e,"class","disabled btn svelte-196kd7e")},m(t,l){h(t,e,l)},d(t){t&&y(e)}}}function Xe(n){let e;return{c(){e=u("div"),e.textContent="Uploaded metadata",r(e,"class","disabled btn svelte-196kd7e")},m(t,l){h(t,e,l)},d(t){t&&y(e)}}}function Ce(n){let e;function t(s,a){return s[2]?$e:s[1].length>0?Ze:Ye}let l=t(n),i=l(n);return{c(){i.c(),e=le()},m(s,a){i.m(s,a),h(s,e,a)},p(s,a){l===(l=t(s))&&i?i.p(s,a):(i.d(1),i=l(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){i.d(s),s&&y(e)}}}function Ye(n){let e,t,l;return{c(){e=u("button"),e.textContent="Generate metadata"},m(i,s){h(i,e,s),t||(l=G(e,"click",ee(te(n[14]))),t=!0)},p:D,d(i){i&&y(e),t=!1,l()}}}function Ze(n){let e,t,l=n[10].generateMeta&&Se();function i(f,o){return f[10].uploadMeta?et:xe}let s=i(n),a=s(n);return{c(){l&&l.c(),e=F(),a.c(),t=le()},m(f,o){l&&l.m(f,o),h(f,e,o),a.m(f,o),h(f,t,o)},p(f,o){f[10].generateMeta?l||(l=Se(),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),s===(s=i(f))&&a?a.p(f,o):(a.d(1),a=s(f),a&&(a.c(),a.m(t.parentNode,t)))},d(f){l&&l.d(f),f&&y(e),a.d(f),f&&y(t)}}}function $e(n){let e,t,l,i,s,a;return{c(){e=u("div"),t=u("i"),l=u("br"),i=O("generating metadata ("),s=O(n[3]),a=O("..."),r(t,"class","fa-solid fa-circle-notch fa-spin"),r(e,"class","loading")},m(f,o){h(f,e,o),c(e,t),c(e,l),c(e,i),c(e,s),c(e,a)},p(f,o){o&8&&V(s,f[3])},d(f){f&&y(e)}}}function Se(n){let e;return{c(){e=u("div"),e.textContent="Generated metadata",r(e,"class","btn disabled svelte-196kd7e")},m(t,l){h(t,e,l)},d(t){t&&y(e)}}}function xe(n){let e,t,l;return{c(){e=u("button"),e.textContent="Upload metadata to IPFS"},m(i,s){h(i,e,s),t||(l=G(e,"click",ee(te(n[13]))),t=!0)},p:D,d(i){i&&y(e),t=!1,l()}}}function et(n){let e;return{c(){e=u("div"),e.textContent="Uploaded metadata",r(e,"class","btn disabled svelte-196kd7e")},m(t,l){h(t,e,l)},p:D,d(t){t&&y(e)}}}function Me(n){let e;return{c(){e=u("div"),e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>uploading to IPFS...',r(e,"class","loading")},m(t,l){h(t,e,l)},d(t){t&&y(e)}}}function tt(n){let e,t,l,i,s,a,f,o,d,v,M,p,m,k,C,w,b,g,I,N,W,A,K,z,P,L,Q,X,B=n[8]==="hidden"&&ye(n),T=n[7]&&n[6]&&n[6].length>0&&ge(n),S=n[5]&&Me();return P=new Ee({}),{c(){B&&B.c(),e=F(),t=u("form"),l=u("div"),i=u("label"),i.textContent="Folder type",s=F(),a=u("div"),f=u("div"),o=u("input"),d=F(),v=u("label"),v.textContent="metadata",M=F(),p=u("div"),m=u("input"),k=F(),C=u("label"),C.textContent="file",w=F(),b=u("div"),g=u("label"),g.textContent="Folder name",I=F(),N=u("input"),W=F(),T&&T.c(),K=F(),S&&S.c(),z=F(),se(P.$$.fragment),r(i,"class","name svelte-196kd7e"),r(o,"type","radio"),r(o,"name","type"),o.__value="metadata",o.value=o.__value,r(o,"class","svelte-196kd7e"),n[19][0].push(o),r(v,"class","inline svelte-196kd7e"),r(v,"for","type"),r(m,"type","radio"),r(m,"name","type"),m.__value="file",m.value=m.__value,r(m,"class","svelte-196kd7e"),n[19][0].push(m),r(C,"for","type"),r(C,"class","inline svelte-196kd7e"),r(a,"class","folder-type svelte-196kd7e"),r(l,"class","item"),r(g,"class","name svelte-196kd7e"),r(N,"type","text"),r(N,"placeholder","save the folder as (only stored locally in your browser)"),r(N,"class","svelte-196kd7e"),r(b,"class","item"),r(t,"class",A="form "+n[8]+" svelte-196kd7e")},m(_,U){B&&B.m(_,U),h(_,e,U),h(_,t,U),c(t,l),c(l,i),c(l,s),c(l,a),c(a,f),c(f,o),o.checked=o.__value===n[7],c(f,d),c(f,v),c(a,M),c(a,p),c(p,m),m.checked=m.__value===n[7],c(p,k),c(p,C),c(t,w),c(t,b),c(b,g),c(b,I),c(b,N),$(N,n[6]),c(t,W),T&&T.m(t,null),h(_,K,U),S&&S.m(_,U),h(_,z,U),ae(P,_,U),L=!0,Q||(X=[G(o,"change",n[18]),G(m,"change",n[20]),G(N,"input",n[21]),G(t,"submit",ee(te(n[24])))],Q=!0)},p(_,[U]){_[8]==="hidden"?B?B.p(_,U):(B=ye(_),B.c(),B.m(e.parentNode,e)):B&&(B.d(1),B=null),U&128&&(o.checked=o.__value===_[7]),U&128&&(m.checked=m.__value===_[7]),U&64&&N.value!==_[6]&&$(N,_[6]),_[7]&&_[6]&&_[6].length>0?T?T.p(_,U):(T=ge(_),T.c(),T.m(t,null)):T&&(T.d(1),T=null),(!L||U&256&&A!==(A="form "+_[8]+" svelte-196kd7e"))&&r(t,"class",A),_[5]?S||(S=Me(),S.c(),S.m(z.parentNode,z)):S&&(S.d(1),S=null)},i(_){L||(oe(P.$$.fragment,_),L=!0)},o(_){fe(P.$$.fragment,_),L=!1},d(_){B&&B.d(_),_&&y(e),_&&y(t),n[19][0].splice(n[19][0].indexOf(o),1),n[19][0].splice(n[19][0].indexOf(m),1),T&&T.d(),_&&y(K),S&&S.d(_),_&&y(z),re(P,_),Q=!1,de(X)}}}function lt(n,e,t){let l,i;Z(n,R,S=>t(26,l=S)),Z(n,J,S=>t(27,i=S));let s=[],a=[],f,o,d,v=!1,M,p,m="hidden",k,C,w={upload:!1,uploadMeta:!1,generateMeta:!1},b={cid:""};const g=async(S,_,U)=>{if(S&&_&&_.length>0){let j=ne(S);if(await j.getItem(_))alert("folder name already exists");else{let Y=await ne("api_key").getItem("key");Y||(alert("NFT.STORAGE api key needed. Go to the config page and set it first"),location.href="/config/"),t(5,v=!0);const Ue=Y,me=new Pe({token:Ue}),ie=await me.storeDirectory(U);console.log("cid",ie);const Be=await me.status(ie);console.log("status",Be),t(5,v=!1),await j.setItem(_,ie);let Te=await H("file");q(J,i=Te,i);let De=await H("metadata");q(R,l=De,l)}t(10,w.upload=!0,w)}else alert("the folder name and type should not be empty")},I=async()=>{await g("metadata",k,a),t(10,w.uploadMeta=!0,w)},N=async()=>{t(2,f=!0);let S=[];for(let _=0;_<s.length;_++){t(3,o=_+1);let j=await s[_].arrayBuffer();console.log("arrayBuf",j);let _e=await ipfsh.file(new Uint8Array(j)),pe={image:"ipfs://"+_e},Y=new File([JSON.stringify(pe)],`${_+1}.json`);S.push(Y)}t(1,a=S),k=M,console.log("metafiles",a),console.log("type",p),t(2,f=!1),t(10,w.generateMeta=!0,w)},W=()=>{t(8,m="")},A=()=>{t(4,d=!0)},K=async()=>{if(p&&M&&M.length>0&&b.cid.length>0){let S=ne(p);if(await S.getItem(M))alert("folder name already exists");else{await S.setItem(M,b.cid);let U=await H("file");q(J,i=U,i);let j=await H("metadata");q(R,l=j,l)}t(9,C=!0)}else error="The cid and the name should not be empty"},z=[[]];function P(){p=this.__value,t(7,p)}function L(){p=this.__value,t(7,p)}function Q(){M=this.value,t(6,M)}function X(){s=this.files,t(0,s)}function B(){b.cid=this.value,t(11,b)}return[s,a,f,o,d,v,M,p,m,C,w,b,g,I,N,W,A,K,P,z,L,Q,X,B,()=>{g(p,M,s)}]}class it extends ce{constructor(e){super(),ue(this,e,lt,tt,x,{})}}function nt(n){let e,t,l,i;return e=new Ge({props:{files:"selected"}}),l=new it({}),{c(){se(e.$$.fragment),t=F(),se(l.$$.fragment)},m(s,a){ae(e,s,a),h(s,t,a),ae(l,s,a),i=!0},p:D,i(s){i||(oe(e.$$.fragment,s),oe(l.$$.fragment,s),i=!0)},o(s){fe(e.$$.fragment,s),fe(l.$$.fragment,s),i=!1},d(s){re(e,s),s&&y(t),re(l,s)}}}class st extends ce{constructor(e){super(),ue(this,e,null,nt,x,{})}}new st({target:document.getElementById("files")});
