import{o as d,c as i,w as _,v as S,a as e,b as p,t as h,d as b,p as y,e as $,f as m,r as g,F as w,g as A,h as x,i as P,j as C,k as F,l as R}from"./vendor.ae3e6fd2.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}};G();var D="/assets/aspendb_bw2.6daa9f62.png";var f=(n,t)=>{const l=n.__vccOpts||n;for(const[c,s]of t)l[c]=s;return l};const L={name:"SequenceForm",data(){return{read:"",db:[],error:""}},methods:{submit(){const n=/[^ATGC]/i;this.read.search(n)!==-1?this.error="only DNA sequences valid":this.read.length<20?this.error="input a DNA sequence of length 20 or higher":this.db.length===0?this.error="select a database":(this.error="",this.$emit("valid"))}},emits:["valid"]},a=n=>(y("data-v-50c51245"),n=n(),$(),n),E={class:"parent"},N=a(()=>e("div",{style:{display:"flex","justify-content":"center",margin:"0"}},[e("a",{href:"http://aspendb.uga.edu/"},[e("img",{src:D,style:{opacity:"0.9"},width:"100",height:"60  "})])],-1)),q=a(()=>e("div",{class:"divider"},null,-1)),B=a(()=>e("p",null," input primer/probe/gRNA sequence ",-1)),O=a(()=>e("p",null," select a database ",-1)),U={style:{display:"flex","flex-direction":"column"}},z={class:"checkboxes"},j=a(()=>e("label",{for:"sPta717aV1"},"sPta717aV1",-1)),M=a(()=>e("label",{for:"sPta717tV1"},"sPta717tV1",-1)),Y=a(()=>e("label",null,"PtrichocarpaV3.1",-1)),W=a(()=>e("label",null,"PtrichocarpaV4.0",-1)),H=a(()=>e("label",null,"DeltoidesWV94",-1)),K=a(()=>e("label",{for:"717V5"},"717V5",-1)),J=a(()=>e("p",null,"search",-1)),Q=[J],X={key:0,class:"error"},Z={style:{width:"fit-content","background-color":"#f5f5f7","border-radius":"2px",padding:"0 1%"}};function ee(n,t,l,c,s,o){return d(),i("div",E,[N,q,B,_(e("textarea",{rows:"2",placeholder:"GGGTTCTGCCAATTTAAGCCACATGGCTCAATGGGAGA","onUpdate:modelValue":t[0]||(t[0]=r=>s.read=r)},null,512),[[S,s.read]]),O,e("div",U,[e("div",z,[e("div",null,[_(e("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>s.db=r),type:"checkbox",name:"sPta71a7V1",value:"sPta717aV1"},null,512),[[p,s.db]]),j]),e("div",null,[_(e("input",{"onUpdate:modelValue":t[2]||(t[2]=r=>s.db=r),type:"checkbox",name:"sPta717tV1",value:"sPta717tV1"},null,512),[[p,s.db]]),M]),e("div",null,[_(e("input",{"onUpdate:modelValue":t[3]||(t[3]=r=>s.db=r),type:"checkbox",value:"PtrichocarpaV3.1"},null,512),[[p,s.db]]),Y]),e("div",null,[_(e("input",{"onUpdate:modelValue":t[4]||(t[4]=r=>s.db=r),type:"checkbox",value:"PtrichocarpaV4.0"},null,512),[[p,s.db]]),W]),e("div",null,[_(e("input",{"onUpdate:modelValue":t[5]||(t[5]=r=>s.db=r),type:"checkbox",value:"DeltoidesWV94"},null,512),[[p,s.db]]),H]),e("div",null,[_(e("input",{"onUpdate:modelValue":t[6]||(t[6]=r=>s.db=r),type:"checkbox",name:"717V5",value:"717V5"},null,512),[[p,s.db]]),K])]),e("button",{onClick:t[7]||(t[7]=r=>o.submit())},Q),s.error!=""?(d(),i("div",X,[e("div",Z,[e("p",null,h(s.error),1)])])):b("",!0)])])}var te=f(L,[["render",ee],["__scopeId","data-v-50c51245"]]);const se={name:"AlignmentResult",props:["header","data","id","total"],methods:{swapleft(){this.$emit("swap-left")},swapright(){this.$emit("swap-right")},reload(){window.location.reload(),window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop},expand(){this.$emit("expand")},download(){}},emits:["swap-left","swap-right","expand"]},k=n=>(y("data-v-324f2808"),n=n(),$(),n),ne={class:"parent"},oe=k(()=>e("p",{class:"instruction"}," maximize ",-1)),re={class:"header"},le={key:1},de=k(()=>e("p",{class:"instruction"}," previous result ",-1)),ie={key:0},ae={key:1},ce=k(()=>e("p",{class:"instruction"}," next result ",-1)),ue={style:{"white-space":"pre-line"}},_e=m("        "),pe=m(`\r
    `),he=k(()=>e("div",{class:"divider"},null,-1)),me=m("        "),fe=m(`\r
    `),ve={class:"footer"};function ge(n,t,l,c,s,o){return d(),i("div",ne,[e("p",{class:"expand",onClick:t[0]||(t[0]=r=>o.expand())}," \u26F6 "),oe,e("div",re,[e("div",null,[l.id>1?(d(),i("p",{key:0,class:"swap-left",onClick:t[1]||(t[1]=r=>o.swapleft())}," < ")):(d(),i("p",le," \xA0 ")),de]),this.total>1?(d(),i("h3",ie,"Alignment Result "+h(l.id),1)):b("",!0),e("div",null,[l.id<l.total?(d(),i("p",{key:0,class:"swap-right",onClick:t[2]||(t[2]=r=>o.swapright())}," > ")):(d(),i("p",ae," \xA0")),ce])]),e("pre",ue,[_e,e("h3",null,[e("b",null,h(l.header),1)]),pe]),he,e("pre",null,[me,e("p",null,h(l.data),1),fe]),e("div",ve,[e("p",{class:"search-again",onClick:t[3]||(t[3]=(...r)=>o.reload&&o.reload(...r))}," search again ")])])}var be=f(se,[["render",ge],["__scopeId","data-v-324f2808"]]);const ye={name:"FocusedResult",props:["data","id"],methods:{contract(){this.$emit("contract")},download(){}},emits:["contract"]},$e=n=>(y("data-v-9ac8dcc8"),n=n(),$(),n),ke={class:"parent"},we=$e(()=>e("p",{class:"instruction"}," minimize ",-1)),xe=m("            "),Ve=m(`\r
        `);function Ce(n,t,l,c,s,o){return d(),i("div",ke,[e("p",{class:"contract",onClick:t[0]||(t[0]=r=>o.contract())}," \u26F6 "),we,e("pre",null,[xe,e("p",null,h(l.data),1),Ve])])}var Ae=f(ye,[["render",Ce],["__scopeId","data-v-9ac8dcc8"]]);const Te={name:"Card",props:["header","result"],methods:{contract(){this.$emit("peek")}},emits:[]},Ie={class:"card"};function Se(n,t,l,c,s,o){return d(),i("div",Ie,[e("h3",null,h(l.header),1)])}var Pe=f(Te,[["render",Se],["__scopeId","data-v-4eb2f570"]]);const Fe={name:"Deck",components:{Card:Pe},props:["count","headers","results"],methods:{goback(){this.$emit("back")}},emits:["back"]},Re=n=>(y("data-v-0b30df64"),n=n(),$(),n),Ge={style:{width:"100%"}},De=Re(()=>e("p",{class:"instruction"}," go back ",-1)),Le={class:"board"},Ee={class:"spread"};function Ne(n,t,l,c,s,o){const r=g("Card");return d(),i(w,null,[e("div",Ge,[e("h1",{class:"goback",onClick:t[0]||(t[0]=v=>o.goback())}," \u2190 "),De]),e("div",Le,[e("div",Ee,[(d(!0),i(w,null,A(l.count,v=>(d(),x(r,{header:l.headers[v-1],result:l.results[v-1]},null,8,["header","result"]))),256))])])],64)}var qe=f(Fe,[["render",Ne],["__scopeId","data-v-0b30df64"]]);const Be={name:"Home",components:{SequenceForm:te,AlignmentResult:be,FocusedResult:Ae,Deck:qe},data(){return{count:0,results:[],headers:[],show:0,fullscreen:!1,deck:!1}},methods:{async run(){this.count=this.$refs.form.$data.db.length;for(var n=0;n<this.count;n++){const t={read:this.$refs.form.$data.read,db:this.$refs.form.$data.db[`${n}`]},l=await P.put("/",t);this.headers[n]="input read: "+this.$refs.form.$data.read+`
read length: `+this.$refs.form.$data.read.length+`
database: `+this.$refs.form.$data.db[`${n}`]+`
`,this.results[n]=l.data}this.show=1},full_screen(){document.getElementById("page").classList.add("focused"),document.getElementById("main").classList.add("blur"),this.deck=!0,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop},minimize_screen(){document.getElementById("main").classList.remove("blur"),document.getElementById("page").classList.remove("focused"),this.fullscreen=!1,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},Oe={id:"page",style:{width:"100%",margin:"0",display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},Ue={id:"main",class:"main"};function ze(n,t,l,c,s,o){const r=g("SequenceForm"),v=g("AlignmentResult"),T=g("FocusedResult"),I=g("Deck");return d(),i("div",Oe,[e("div",Ue,[C(r,{ref:"form",onValid:t[0]||(t[0]=u=>o.run())},null,512),(d(!0),i(w,null,A(this.count,u=>_((d(),i("div",{key:u},[C(v,{id:u,data:s.results[u-1],total:this.count,header:s.headers[u-1],onSwapLeft:t[1]||(t[1]=V=>this.show--),onSwapRight:t[2]||(t[2]=V=>this.show++),onExpand:t[3]||(t[3]=V=>o.full_screen())},null,8,["id","data","total","header"])])),[[F,u===this.show]])),128))]),this.fullscreen==!0?(d(),x(T,{key:0,id:this.show,data:s.results[this.show-1],onContract:t[4]||(t[4]=u=>o.minimize_screen())},null,8,["id","data"])):b("",!0),this.deck==!0?(d(),x(I,{key:1,count:this.count,headers:s.headers,results:s.results,onBack:t[5]||(t[5]=u=>o.minimize_screen())},null,8,["count","headers","results"])):b("",!0)])}var je=f(Be,[["render",ze]]);R(je).mount("#app");
