import{_ as r,u as f,g as h,h as g,i as v,j as b,k as C,l as x,r as p,o as d,c as m,b as i,w as $,e as T,t as l,m as s,a as c,F as k,p as w,f as y}from"./index-6c5a1875.js";const I=e=>(w("data-v-6465a21b"),e=e(),y(),e),S=I(()=>c("br",null,null,-1)),N={__name:"Counter",props:["msg"],setup(e){const o=f(),t=h({count:0,mode:"production"});console.log(t.value.mode);let _=g(()=>o.double);return v(()=>console.log("the component is mounted.")),b(()=>console.log("The component is updated.")),C(()=>console.log("The component is unmounted.")),x(t.value,n=>{console.log(`The new value is ${n.count}`)}),o.$subscribe((n,a)=>{console.log(a.count)}),(n,a)=>{const u=p("el-button");return d(),m(k,null,[i(u,{onClick:s(o).increment,class:"mt20"},{default:$(()=>[T("count is: "+l(s(o).count),1)]),_:1},8,["onClick"]),c("p",null,[c("span",null,"The ENV: "+l(s(t).mode),1),S,c("span",null,"The Double Count: "+l(s(_)),1)])],64)}}},V=r(N,[["__scopeId","data-v-6465a21b"]]);const B={name:"counterPage",components:{Counter:V}},D={class:"countWrap flex flexCenter"};function E(e,o,t,_,n,a){const u=p("Counter",!0);return d(),m("div",D,[i(u)])}const U=r(B,[["render",E],["__scopeId","data-v-8309e71f"]]);export{U as default};
