import{N as y,ba as P,bb as G,r as _,d,o as q,w as D,bc as H,aC as w,P as J,k as Q,bd as W,e as c,be as X,u as Y,bf as Z,b as M,aK as oo,a3 as T,b8 as eo,a5 as to,m as E,bg as ao,l as S,q as f,v as k,x as z,t as N,I as B,A as $,a4 as C,K as no,G as F,bh as so,E as K,_ as A,p as lo,O as ro,R as io,S as co}from"./index-BSzegCzT.js";const uo=()=>{const o=y(P,void 0),t=y(G,void 0);return{form:o,formItem:t}},Co=(o,{formItemContext:t,disableIdGeneration:e,disableIdManagement:a})=>{e||(e=_(!1)),a||(a=_(!1));const s=_();let l;const n=d(()=>{var i;return!!(!(o.label||o.ariaLabel)&&t&&t.inputIds&&((i=t.inputIds)==null?void 0:i.length)<=1)});return q(()=>{l=D([w(o,"id"),e],([i,v])=>{const u=i??(v?void 0:H().value);u!==s.value&&(t!=null&&t.removeInputId&&(s.value&&t.removeInputId(s.value),!(a!=null&&a.value)&&!v&&u&&t.addInputId(u)),s.value=u)},{immediate:!0})}),J(()=>{l&&l(),t!=null&&t.removeInputId&&s.value&&t.removeInputId(s.value)}),{isLabeledByFormItem:n,inputId:s}},U=o=>{const t=Q();return d(()=>{var e,a;return(a=(e=t==null?void 0:t.proxy)==null?void 0:e.$props)==null?void 0:a[o]})},vo=(o,t={})=>{const e=_(void 0),a=t.prop?e:U("size"),s=t.global?e:W(),l=t.form?{size:void 0}:y(P,void 0),n=t.formItem?{size:void 0}:y(G,void 0);return d(()=>a.value||c(o)||(n==null?void 0:n.size)||(l==null?void 0:l.size)||s.value||"")},R=o=>{const t=U("disabled"),e=y(P,void 0);return d(()=>t.value||c(o)||(e==null?void 0:e.disabled)||!1)},j=Symbol("buttonGroupContextKey"),bo=({from:o,replacement:t,scope:e,version:a,ref:s,type:l="API"},n)=>{D(()=>c(n),i=>{},{immediate:!0})},fo=(o,t)=>{bo({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},d(()=>o.type==="text"));const e=y(j,void 0),a=X("button"),{form:s}=uo(),l=vo(d(()=>e==null?void 0:e.size)),n=R(),i=_(),v=Y(),u=d(()=>o.type||(e==null?void 0:e.type)||""),m=d(()=>{var r,p,g;return(g=(p=o.autoInsertSpace)!=null?p:(r=a.value)==null?void 0:r.autoInsertSpace)!=null?g:!1}),h=d(()=>o.tag==="button"?{ariaDisabled:n.value||o.loading,disabled:n.value||o.loading,autofocus:o.autofocus,type:o.nativeType}:{}),I=d(()=>{var r;const p=(r=v.default)==null?void 0:r.call(v);if(m.value&&(p==null?void 0:p.length)===1){const g=p[0];if((g==null?void 0:g.type)===Z){const O=g.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(O.trim())}}return!1});return{_disabled:n,_size:l,_type:u,_ref:i,_props:h,shouldAddSpace:I,handleClick:r=>{if(n.value||o.loading){r.stopPropagation();return}o.nativeType==="reset"&&(s==null||s.resetFields()),t("click",r)}}},po=["default","primary","success","warning","info","danger","text",""],mo=["button","submit","reset"],V=M({size:oo,disabled:Boolean,type:{type:String,values:po,default:""},icon:{type:T},nativeType:{type:String,values:mo,default:"button"},loading:Boolean,loadingIcon:{type:T,default:()=>eo},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:to([String,Object]),default:"button"}}),go={click:o=>o instanceof MouseEvent};function b(o,t=20){return o.mix("#141414",t).toString()}function yo(o){const t=R(),e=E("button");return d(()=>{let a={},s=o.color;if(s){const l=s.match(/var\((.*?)\)/);l&&(s=window.getComputedStyle(window.document.documentElement).getPropertyValue(l[1]));const n=new ao(s),i=o.dark?n.tint(20).toString():b(n,20);if(o.plain)a=e.cssVarBlock({"bg-color":o.dark?b(n,90):n.tint(90).toString(),"text-color":s,"border-color":o.dark?b(n,50):n.tint(50).toString(),"hover-text-color":`var(${e.cssVarName("color-white")})`,"hover-bg-color":s,"hover-border-color":s,"active-bg-color":i,"active-text-color":`var(${e.cssVarName("color-white")})`,"active-border-color":i}),t.value&&(a[e.cssVarBlockName("disabled-bg-color")]=o.dark?b(n,90):n.tint(90).toString(),a[e.cssVarBlockName("disabled-text-color")]=o.dark?b(n,50):n.tint(50).toString(),a[e.cssVarBlockName("disabled-border-color")]=o.dark?b(n,80):n.tint(80).toString());else{const v=o.dark?b(n,30):n.tint(30).toString(),u=n.isDark()?`var(${e.cssVarName("color-white")})`:`var(${e.cssVarName("color-black")})`;if(a=e.cssVarBlock({"bg-color":s,"text-color":u,"border-color":s,"hover-bg-color":v,"hover-text-color":u,"hover-border-color":v,"active-bg-color":i,"active-border-color":i}),t.value){const m=o.dark?b(n,50):n.tint(50).toString();a[e.cssVarBlockName("disabled-bg-color")]=m,a[e.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":`var(${e.cssVarName("color-white")})`,a[e.cssVarBlockName("disabled-border-color")]=m}}}return a})}const ko=S({name:"ElButton"}),_o=S({...ko,props:V,emits:go,setup(o,{expose:t,emit:e}){const a=o,s=yo(a),l=E("button"),{_ref:n,_size:i,_type:v,_disabled:u,_props:m,shouldAddSpace:h,handleClick:I}=fo(a,e),x=d(()=>[l.b(),l.m(v.value),l.m(i.value),l.is("disabled",u.value),l.is("loading",a.loading),l.is("plain",a.plain),l.is("round",a.round),l.is("circle",a.circle),l.is("text",a.text),l.is("link",a.link),l.is("has-bg",a.bg)]);return t({ref:n,size:i,type:v,disabled:u,shouldAddSpace:h}),(r,p)=>(f(),k(C(r.tag),so({ref_key:"_ref",ref:n},c(m),{class:c(x),style:c(s),onClick:c(I)}),{default:z(()=>[r.loading?(f(),N(no,{key:0},[r.$slots.loading?B(r.$slots,"loading",{key:0}):(f(),k(c(K),{key:1,class:$(c(l).is("loading"))},{default:z(()=>[(f(),k(C(r.loadingIcon)))]),_:1},8,["class"]))],64)):r.icon||r.$slots.icon?(f(),k(c(K),{key:1},{default:z(()=>[r.icon?(f(),k(C(r.icon),{key:0})):B(r.$slots,"icon",{key:1})]),_:3})):F("v-if",!0),r.$slots.default?(f(),N("span",{key:2,class:$({[c(l).em("text","expand")]:c(h)})},[B(r.$slots,"default")],2)):F("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var ho=A(_o,[["__file","button.vue"]]);const Bo={size:V.size,type:V.type},So=S({name:"ElButtonGroup"}),Io=S({...So,props:Bo,setup(o){const t=o;lo(j,ro({size:w(t,"size"),type:w(t,"type")}));const e=E("button");return(a,s)=>(f(),N("div",{class:$(c(e).b("group"))},[B(a.$slots,"default")],2))}});var L=A(Io,[["__file","button-group.vue"]]);const wo=io(ho,{ButtonGroup:L});co(L);export{wo as E,R as a,uo as b,Co as c,bo as d,vo as u};
