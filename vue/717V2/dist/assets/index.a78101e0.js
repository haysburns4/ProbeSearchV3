import{o as r,c as a,w as x,v as T,a as t,t as _,b as u,d as R,p as y,e as $,f as b,r as f,F as C,g as F,h as g,i as G,j as z,k as B,l as D}from"./vendor.569a1202.js";const E=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}};E();var L="/assets/aspendb_bw2.6daa9f62.png";var p=(s,e)=>{const i=s.__vccOpts||s;for(const[l,n]of e)i[l]=n;return i};const N={name:"SequenceForm",data(){return{read:"",db:["sPta717V2.0"],mismatches:5,error:"",loading:!1}},methods:{submit(){const s=/[^ATGC]/i;this.read.search(s)!==-1?this.error="only DNA sequences valid":this.read.length<17?this.error="input a DNA sequence of length 17 or higher":this.db.length===0?this.error="select a database":(this.error="",this.loading=!0,this.read=this.read.toUpperCase(),this.$emit("valid"))}},emits:["valid"]},h=s=>(y("data-v-9b26138c"),s=s(),$(),s),q={class:"parent"},O=R('<div style="display:flex;justify-content:center;margin:0;" data-v-9b26138c><a href="http://aspendb.uga.edu/" data-v-9b26138c><img src="'+L+'" style="opacity:0.9;" width="100" height="60  " data-v-9b26138c></a></div><div class="divider" data-v-9b26138c></div><p style="width:fit-content;padding:0 1%;border-radius:3px;background-color:#f2f2f2;" data-v-9b26138c>input primer/probe/gRNA sequence and query the <b style="font-weight:bolder;" data-v-9b26138c>sPta717V2.0</b> genome</p>',3),V={style:{display:"flex","flex-direction":"column"}},j=h(()=>t("p",{style:{width:"fit-content",padding:"0 1%","border-radius":"3px","background-color":"#f2f2f2"}},"set mismatch number",-1)),P=h(()=>t("label",null,"max",-1)),Y=h(()=>t("p",null,"search",-1)),M=[Y],U={key:0,class:"error"},H={style:{width:"fit-content","background-color":"#f5f5f7","border-radius":"2px",padding:"0 1%"}},K={style:{height:"9px",display:"flex","justify-content":"center","align-items":"center"}},J={key:0,class:"lds-ellipsis"},Q=h(()=>t("div",null,null,-1)),W=h(()=>t("div",null,null,-1)),X=h(()=>t("div",null,null,-1)),Z=h(()=>t("div",null,null,-1)),ee=[Q,W,X,Z];function te(s,e,i,l,n,o){return r(),a("div",q,[O,x(t("textarea",{rows:"2",placeholder:"GGGTTCTGCCAATTTAAGCCACATGGCTCAATGGGAGA","onUpdate:modelValue":e[0]||(e[0]=d=>n.read=d)},null,512),[[T,n.read]]),t("div",V,[t("div",null,[j,x(t("input",{"onUpdate:modelValue":e[1]||(e[1]=d=>n.mismatches=d),type:"number",class:"mismatch"},null,512),[[T,n.mismatches]]),P]),t("button",{onClick:e[2]||(e[2]=d=>o.submit())},M),n.error!=""?(r(),a("div",U,[t("div",H,[t("p",null,_(n.error),1)])])):u("",!0),t("div",K,[n.loading===!0?(r(),a("div",J,ee)):u("",!0)])])])}var se=p(N,[["render",te],["__scopeId","data-v-9b26138c"]]);const ne={name:"AlignmentResult",props:["header","data","id","total"],methods:{swapleft(){this.$emit("swap-left")},swapright(){this.$emit("swap-right")},reload(){window.location.reload(),window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop},maximize(){this.$emit("fullscreen")},get_deck(){this.$emit("deck")},download(){}},emits:["swap-left","swap-right","fullscreen","deck"]},v=s=>(y("data-v-5dddd8f8"),s=s(),$(),s),oe={class:"parent"},ie=v(()=>t("p",{class:"instruction"}," maximize ",-1)),re=v(()=>t("p",{class:"instruction"}," card deck ",-1)),de={class:"header"},ae={key:1},le=v(()=>t("p",{class:"instruction"}," previous result ",-1)),ce={key:0},ue={key:1},me=v(()=>t("p",{class:"instruction"}," next result ",-1)),_e={style:{width:"100%",height:"fit-content",display:"flex","justify-content":"center","align-items":"flex-start","flex-direction":"column","white-space":"pre"}},he={style:{"margin-bottom":"2%"}},fe=v(()=>t("h3",{style:{"margin-bottom":"2%"}},"only the top 50 hits are shown",-1)),pe=v(()=>t("div",{class:"divider"},null,-1)),ve=b("        "),ge={class:"res"},ye=b(`\r
    `),$e={class:"footer"};function be(s,e,i,l,n,o){return r(),a("div",oe,[t("p",{class:"maximize",onClick:e[0]||(e[0]=d=>o.maximize())}," \u26F6 "),ie,t("p",{class:"cards",onClick:e[1]||(e[1]=d=>o.get_deck())}," \u{1F0A0} "),re,t("div",de,[t("div",null,[i.id>1?(r(),a("p",{key:0,class:"swap-left",onClick:e[2]||(e[2]=d=>o.swapleft())}," < ")):(r(),a("p",ae," \xA0 ")),le]),this.total>1?(r(),a("h3",ce,"Alignment Result "+_(i.id),1)):u("",!0),t("div",null,[i.id<i.total?(r(),a("p",{key:0,class:"swap-right",onClick:e[3]||(e[3]=d=>o.swapright())}," > ")):(r(),a("p",ue," \xA0")),me])]),t("div",_e,[t("h3",he,_(i.header),1),fe]),pe,t("pre",null,[ve,t("p",ge,_(i.data),1),ye]),t("div",$e,[t("p",{class:"search-again",onClick:e[4]||(e[4]=(...d)=>o.reload&&o.reload(...d))}," search again ")])])}var we=p(ne,[["render",be],["__scopeId","data-v-5dddd8f8"]]);const ke={name:"FocusedResult",props:["header","data"],methods:{minimize(){this.$emit("back")}},emits:["back"]},S=s=>(y("data-v-6560f040"),s=s(),$(),s),xe={class:"parent"},Ce=S(()=>t("p",{class:"instruction"}," minimize ",-1)),Ae={style:{width:"100%",height:"fit-content",display:"flex","justify-content":"center","align-items":"center","white-space":"pre"}},Te=S(()=>t("div",{class:"divider"},null,-1)),ze=b("            "),Fe={style:{"font-family":"'DM Mono', monospace","font-size":"16px"}},Se=b(`\r
        `);function Ie(s,e,i,l,n,o){return r(),a("div",xe,[t("p",{class:"minimize",onClick:e[0]||(e[0]=d=>o.minimize())}," \u26F6 "),Ce,t("div",Ae,[t("h3",null,_(i.header),1)]),Te,t("pre",null,[ze,t("p",Fe,_(i.data),1),Se])])}var I=p(ke,[["render",Ie],["__scopeId","data-v-6560f040"]]);const Re={name:"Card",props:["title","id","header","result"],methods:{maximize(){this.$emit("fullscreen")}},emits:["fullscreen"]};function Ge(s,e,i,l,n,o){return r(),a("div",{class:"card",onClick:e[0]||(e[0]=d=>o.maximize())},[t("h3",null,_(i.title),1)])}var Be=p(Re,[["render",Ge],["__scopeId","data-v-738e587c"]]);const De={name:"Deck",data(){return{show:0,fullscreen:!1}},components:{Card:Be,FocusedResult:I},props:["count","dbnames","headers","results"],methods:{goback(){this.$emit("back")},maximize(s){this.show=s,this.fullscreen=!0,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop},minimize_screen(){this.fullscreen=!1,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}},emits:["back"]},Ee=s=>(y("data-v-c444683a"),s=s(),$(),s),Le={key:0,style:{width:"100%"}},Ne=Ee(()=>t("p",{class:"instruction"}," go back ",-1)),qe={key:1,class:"board"},Oe={class:"spread"};function Ve(s,e,i,l,n,o){const d=f("Card"),w=f("FocusedResult");return r(),a(C,null,[this.fullscreen==!1?(r(),a("div",Le,[t("h3",{class:"goback",onClick:e[0]||(e[0]=m=>o.goback())}," \u2190 "),Ne])):u("",!0),this.fullscreen==!1?(r(),a("div",qe,[t("div",Oe,[(r(!0),a(C,null,F(i.count,m=>(r(),g(d,{title:i.dbnames[m-1],id:m,onFullscreen:A=>o.maximize(m)},null,8,["title","id","onFullscreen"]))),256))])])):u("",!0),this.fullscreen==!0?(r(),g(w,{key:2,header:i.headers[this.show-1],data:i.results[this.show-1],onBack:e[1]||(e[1]=m=>o.minimize_screen())},null,8,["header","data"])):u("",!0)],64)}var je=p(De,[["render",Ve],["__scopeId","data-v-c444683a"]]);const Pe={name:"Home",components:{SequenceForm:se,AlignmentResult:we,FocusedResult:I,Deck:je},data(){return{count:0,results:[],headers:[],show:0,fullscreen:!1,deck:!1}},methods:{async run(){this.count=this.$refs.form.$data.db.length;for(var s=0;s<this.count;s++){const e={read:this.$refs.form.$data.read,db:this.$refs.form.$data.db[`${s}`],mismatches:this.$refs.form.$data.mismatches},i=await G.put("/",e);this.headers[s]="input read:		"+this.$refs.form.$data.read+`
read length:	`+this.$refs.form.$data.read.length+`
database:		`+this.$refs.form.$data.db[`${s}`]+`
`,this.results[s]=i.data}this.show=1,this.$refs.form.$data.loading=!1},switch_screen(s){document.getElementById("page").classList.add("focused"),document.getElementById("main").classList.add("blur"),s==="fullscreen"?this.fullscreen=!0:this.deck=!0,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop},minimize_screen(){document.getElementById("main").classList.remove("blur"),document.getElementById("page").classList.remove("focused"),this.fullscreen=!1,this.deck=!1,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},Ye={id:"page",style:{width:"100%",margin:"0",display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},Me={id:"main",class:"main"};function Ue(s,e,i,l,n,o){const d=f("SequenceForm"),w=f("AlignmentResult"),m=f("FocusedResult"),A=f("Deck");return r(),a("div",Ye,[t("div",Me,[z(d,{ref:"form",onValid:e[0]||(e[0]=c=>o.run())},null,512),(r(!0),a(C,null,F(this.count,c=>x((r(),a("div",{key:c},[z(w,{id:c,data:n.results[c-1],total:this.count,header:n.headers[c-1],onSwapLeft:e[1]||(e[1]=k=>this.show--),onSwapRight:e[2]||(e[2]=k=>this.show++),onFullscreen:e[3]||(e[3]=k=>o.switch_screen("fullscreen")),onDeck:e[4]||(e[4]=k=>o.switch_screen("deck"))},null,8,["id","data","total","header"])])),[[B,c===this.show]])),128))]),this.fullscreen==!0?(r(),g(m,{key:0,header:n.headers[this.show-1],data:n.results[this.show-1],onBack:e[5]||(e[5]=c=>o.minimize_screen())},null,8,["header","data"])):u("",!0),this.deck==!0?(r(),g(A,{key:1,count:this.count,dbnames:this.$refs.form.$data.db,headers:n.headers,results:n.results,onBack:e[6]||(e[6]=c=>o.minimize_screen())},null,8,["count","dbnames","headers","results"])):u("",!0)])}var He=p(Pe,[["render",Ue]]);D(He).mount("#app");
