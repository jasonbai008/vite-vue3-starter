import{f,_ as p,g as h,h as g,i as C,j as b,k as v,l as x,r as d,o as _,c as i,a as t,t as c,b as m,w as $,d as S,u as a,F as T,p as k,e as w}from"./index-589ea16a.js";const I=f("counter",{persist:!1,state:()=>({count:0}),getters:{double(e){return e.count*2}},actions:{increment(){this.count++}}});const N=e=>(k("data-v-aa44f9ff"),e=e(),w(),e),V=N(()=>t("br",null,null,-1)),y={__name:"Counter",props:["msg"],setup(e){const o=I(),n=h({count:0,mode:"production"});console.log(n.value.mode);let r=g(()=>o.double);return C(()=>console.log("the component is mounted.")),b(()=>console.log("The component is updated.")),v(()=>console.log("The component is unmounted.")),x(n.value,s=>{console.log(`The new value is ${s.count}`)}),o.$subscribe((s,u)=>{console.log(u.count)}),(s,u)=>{const l=d("el-button");return _(),i(T,null,[t("h1",null,c(e.msg),1),m(l,{onClick:a(o).increment},{default:$(()=>[S("count is: "+c(a(o).count),1)]),_:1},8,["onClick"]),t("p",null,[t("span",null,"The ENV: "+c(a(n).mode),1),V,t("span",null,"The Double Count: "+c(a(r)),1)])],64)}}},B=p(y,[["__scopeId","data-v-aa44f9ff"]]),D={name:"counterPage",components:{Counter:B}};function E(e,o,n,r,s,u){const l=d("Counter",!0);return _(),i("div",null,[m(l)])}const U=p(D,[["render",E]]);export{U as default};