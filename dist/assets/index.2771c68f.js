import{D as e,a as t,b as a,M as n,c as o,d as l,e as r,r as s,f as i,g as d,h as c,i as h,j as u,k as m,l as p,m as g,n as f,o as x,w as b,p as M,T as v,t as y,q as w,v as k,s as C,u as I,x as B,F as j,y as A,z as G,A as N,B as D,C as S,E,G as L,_ as T,H as q}from"./vendor.1384f3b5.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var H="";new Array;var V="īēū丶٭×・๛〆シ¤ヤ金帝乀乄一本ズ人ノ大き〆乁٪웃三؄乛įĠġ亞",z=["ī","ē","ū","į","į","Ġ","ġ","Ġ","ġ"],O=["《》","『』","【】","亗亗","彡彡","《》","「」","〘〙","ツツ","卍卍","؄؂","亞亞"],P=["pг๏","lเttlє","「M24」","乃丹刀","๏̯͡๏","ʘ͜ʖʘ","I乛AM","「メ」","「OP」"],Q=["٭","彡","只","๛","乛","؄","¤","シ","乄","〆","ツ","。","ヅ","・","亗","彡","・","ノ","丶","×","米","々","父","多","乂","〆","个"];function _(){return Math.floor(2*Math.random())}const F=["Dashboard"],J=["/"],K={components:{Disclosure:e,DisclosureButton:t,DisclosurePanel:a,Menu:n,MenuButton:o,MenuItem:l,MenuItems:r,BellIcon:s,MenuIcon:i,XIcon:d,BeakerIcon:c,BadgeCheckIcon:h,ClipboardIcon:u},computed:{charactersLeft(){return this.name.length+" / "+this.maxCharacters}},setup(){const e=m(!1),t=m(""),a=m("");return{navigation:F,routes:J,maxCharacters:50,open:e,name:t,result:a}},methods:{clear(){this.name="",this.result=""},copyClipboard(){var e=this,t=this.result;navigator.clipboard.writeText(t).then((function(){e.$toast.show('<div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg><div class="ml-2 whitespace-nowrap">Copied to clipboard</div></div>',{position:"top-right"})}),(function(t){e.$toast.error('<div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg><div class="ml-2 whitespace-nowrap">'+t+"</div></div>",{position:"top-right"})}))},isAllowed(e){let t=String.fromCharCode(e.keyCode);if(/^[^-\s]+$/.test(t))return!0;e.preventDefault()},generateName(){this.result=function(e){if(e.includes("a")){var t="ÃÅÂA卂ﾑÄA丹a"[Math.floor(Math.random()*"ÃÅÂA卂ﾑÄA丹a".length)];e=e.replace(/a/g,t)}e.includes("b")&&(t="B乃ɮḄBb6及ɮ"[Math.floor(Math.random()*"B乃ɮḄBb6及ɮ".length)],e=e.replace(/b/g,t));e.includes("c")&&(t="C匚८Ċc"[Math.floor(Math.random()*"C匚८Ċc".length)],e=e.replace(/c/g,t));e.includes("d")&&(t="D刀ɖḊĐĐDd"[Math.floor(Math.random()*"D刀ɖḊĐĐDd".length)],e=e.replace(/d/g,t));e.includes("e")&&(t="E乇ɛЁɛ33e3"[Math.floor(Math.random()*"E乇ɛЁɛ33e3".length)],e=e.replace(/e/g,t));e.includes("f")&&(t="F千ʄḞf"[Math.floor(Math.random()*"F千ʄḞf".length)],e=e.replace(/f/g,t));e.includes("g")&&(t="GɢGɢg"[Math.floor(Math.random()*"GɢGɢg".length)],e=e.replace(/g/g,t));e.includes("h")&&(t="H卄ɦḦɥh"[Math.floor(Math.random()*"H卄ɦḦɥh".length)],e=e.replace(/h/g,t));e.includes("i")&&(t="IɨЇɨ1i"[Math.floor(Math.random()*"IɨЇɨ1i".length)],e=e.replace(/i/g,t));e.includes("j")&&(t="JﾌʝJɟɾj"[Math.floor(Math.random()*"JﾌʝJɟɾj".length)],e=e.replace(/j/g,t));e.includes("k")&&(t="KズкḲʞk"[Math.floor(Math.random()*"KズкḲʞk".length)],e=e.replace(/k/g,t));e.includes("l")&&(t="LﾚʟḶlŁŁŁ"[Math.floor(Math.random()*"LﾚʟḶlŁŁŁ".length)],e=e.replace(/l/g,t));e.includes("m")&&(t="M爪ʍṀɯm"[Math.floor(Math.random()*"M爪ʍṀɯm".length)],e=e.replace(/m/g,t));e.includes("n")&&(t="N几nṄ几Ṅии"[Math.floor(Math.random()*"N几nṄ几Ṅии".length)],e=e.replace(/n/g,t));e.includes("o")&&(t="Oの๏Öoøø〇0ʘ"[Math.floor(Math.random()*"Oの๏Öoøø〇0ʘ".length)],e=e.replace(/o/g,t));e.includes("p")&&(t="P卩pṖ卩Ṗ"[Math.floor(Math.random()*"P卩pṖ卩Ṗ".length)],e=e.replace(/p/g,t));e.includes("q")&&(t="QQqQ"[Math.floor(Math.random()*"QQqQ".length)],e=e.replace(/q/g,t));e.includes("r")&&(t="R尺ʀṚɹr"[Math.floor(Math.random()*"R尺ʀṚɹr".length)],e=e.replace(/r/g,t));e.includes("s")&&(t="S丂ʂṠs"[Math.floor(Math.random()*"S丂ʂṠs".length)],e=e.replace(/s/g,t));e.includes("t")&&(t="TｲtṪʇ"[Math.floor(Math.random()*"TｲtṪʇ".length)],e=e.replace(/t/g,t));e.includes("u")&&(t="UひʊÜu"[Math.floor(Math.random()*"UひʊÜu".length)],e=e.replace(/u/g,t));e.includes("v")&&(t="VVvṾʌ"[Math.floor(Math.random()*"VVvṾʌ".length)],e=e.replace(/v/g,t));e.includes("w")&&(t="W山wẄ"[Math.floor(Math.random()*"W山wẄ".length)],e=e.replace(/w/g,t));e.includes("x")&&(t="X乂xẌ〆××メ乄父义"[Math.floor(Math.random()*"X乂xẌ〆××メ乄父义".length)],e=e.replace(/x/g,t));e.includes("y")&&(t="Y人ʏŸʎy"[Math.floor(Math.random()*"Y人ʏŸʎy".length)],e=e.replace(/y/g,t));e.includes("z")&&(t="Z乙ʐŻz"[Math.floor(Math.random()*"Z乙ʐŻz".length)],e=e.replace(/z/g,t));H=e.toString(),e.includes(" ")&&(t=V[Math.floor(Math.random()*V.length)],e=e.replace(/ /g,t));if((o=e.toString()).length<49)if(o.length<=25&&1==_()){var a=P[Math.floor(Math.random()*P.length)].toString(),n=V[Math.floor(Math.random()*V.length)].toString();e=a.concat(n,e)}else if(o.length>25&&1==_()&&0==_())a=Q[Math.floor(Math.random()*Q.length)].toString(),n=z[Math.floor(Math.random()*z.length)].toString(),e=a.concat(n,e);else if(H.length<=7&&1==_()){e=H.replace(/ /g,"");for(var o="",l=0;l<e.length;l++)n=z[Math.floor(Math.random()*z.length)].toString(),o=o.concat(n,e.charAt(l));e=o}else{var r=O[Math.floor(Math.random()*O.length)].toString(),s=(a=r.charAt(0),r.charAt(1));e=a.concat(e,s)}return e}(this.name)}}},X={class:"flex flex-col min-h-screen"},R={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},U={class:"flex items-center justify-between h-16"},Z={class:"flex items-center"},$=M("div",{class:"flex-shrink-0"},[M("span",{class:"text-gray-900 font-bold"},[M("span",{class:"text-indigo-300"},"BGMI"),C(),M("span",{class:"text-indigo-500"},"Name"),C(),M("span",{class:"text-indigo-700"},"Generator")])],-1),W={class:"hidden md:block"},Y={class:"ml-10 flex items-baseline space-x-4"},ee=["href"],te={key:1,href:"#",class:"text-gray-400 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"},ae={class:"-mr-2 flex md:hidden"},ne=M("span",{class:"sr-only"},"Open main menu",-1),oe={class:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},le=["href"],re={key:1,href:"#",class:"text-gray-400 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"},se=M("header",{class:"bg-indigo-500 pt-16 text-white"},[M("div",{class:"max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"},[M("h1",{class:"text-3xl font-bold"}," BGMI Name Generator ")])],-1),ie={class:"flex flex-col w-full overflow-hidden items-center justify-start flex-1"},de={class:"relative w-full max-w-lg mt-20"},ce=M("div",{class:"absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full\r\n         mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"},null,-1),he=M("div",{class:"absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full\r\n         mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"},null,-1),ue=M("div",{class:"absolute top-20 left-20 w-72 h-72 bg-pink-400 rounded-full\r\n         mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000"},null,-1),me={class:"shadow-xl mx-6  p-5 rounded-xl border relative bg-white"},pe={class:"text-indigo-500 font-bold text-md flex"},ge=C(" BGMI Name Generator"),fe={class:"px-4 py-6"},xe={key:0,class:"bg-gray-100 px-2 pt-6 pb-4 rounded-xl text-indigo-500 text-xl text-center relative"},be={class:"relative"},Me={class:"absolute right-3 top-2"},ve={class:"inline-flex items-center justify-center px-3 py-2 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full"},ye=M("label",{for:"fancy",class:"hidden"},"BGMI",-1),we={class:"sm:flex sm:justify-center lg:justify-end"},ke={class:"sm:mr-3"},Ce={class:"mt-3 sm:mt-0 rounded-md shadow"},Ie=I('<footer class="shadow-xl w-full border"><div class="mx-auto py-6 px-4 sm:px-6 lg:px-8"><div class="w-full text-center flex flex-row items-center align-middle justify-center space-x-4"><p class="text-base text-indigo-600"><span class="text-gray-900 font-bold"><span class="text-indigo-300">Fancy</span> <span class="text-indigo-500">Name</span> <span class="text-indigo-700">Generator</span></span></p><p class="text-base text-indigo-600"><span class="text-base text-indigo-600">Made with <span class="text-base text-red-400">♥</span> <a href="https://www.latirus.com/" target="_blank" class="text-base underline"><span class="text-base text-indigo-600">Latirus</span></a></span></p></div></div></footer>',1);K.render=function(e,t,a,n,o,l){const r=p("MenuIcon"),s=p("XIcon"),i=p("DisclosureButton"),d=p("DisclosurePanel"),c=p("Disclosure"),h=p("BeakerIcon"),u=p("ClipboardIcon"),m=g("tooltip");return B(),f("div",X,[x(c,{as:"nav",class:"bg-gray-50 shadow-md fixed w-full"},{default:b((({open:e})=>[M("div",R,[M("div",U,[M("div",Z,[$,M("div",W,[M("div",Y,[(B(!0),f(j,null,A(n.navigation,((e,t)=>(B(),f(j,{key:e},[0===t?(B(),f("a",{key:0,href:n.routes[t],class:"bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium"},y(e),9,ee)):(B(),f("a",te,y(e),1))],64)))),128))])])]),M("div",ae,[x(i,{class:"bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-white"},{default:b((()=>[ne,e?(B(),G(s,{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(B(),G(r,{key:0,class:"block h-6 w-6","aria-hidden":"true"}))])),_:2},1024)])])]),x(d,{class:"md:hidden"},{default:b((()=>[M("div",oe,[(B(!0),f(j,null,A(n.navigation,((e,t)=>(B(),f(j,{key:e},[0===t?(B(),f("a",{key:0,href:n.routes[t],class:"bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium"},y(e),9,le)):(B(),f("a",re,y(e),1))],64)))),128))])])),_:1})])),_:1}),se,M("main",ie,[M("div",de,[ce,he,ue,M("div",me,[M("h2",pe,[x(h,{class:"block h-6 w-6 mr-3","aria-hidden":"true"}),ge]),M("div",fe,[x(v,{name:"fade",mode:"out-in"},{default:b((()=>[""!=n.result?(B(),f("div",xe,[M("span",null,y(n.result),1),w(M("div",{class:"absolute top-2 right-4 bg-indigo-500 p-2 rounded-full text-white cursor-pointer\r\n                    hover:bg-indigo-600 hover:text-white transition-colors ease-in duration-200",onClick:t[0]||(t[0]=e=>l.copyClipboard())},[x(u,{class:"h-5 w-5"})],512),[[m,"Copy to Clipboard"]])])):N("",!0)])),_:1}),M("div",be,[M("div",Me,[M("span",ve,y(l.charactersLeft),1)]),ye,w(M("input",{autocomplete:"",type:"text",maxlength:"50",pattern:"[a-zA-Z0-9-]",class:"mt-6 shadow block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",id:"fancy",name:"fancy",placeholder:"Enter your Name here...","onUpdate:modelValue":t[1]||(t[1]=e=>n.name=e),onKeypress:t[2]||(t[2]=e=>l.isAllowed(e))},null,544),[[k,n.name]])])]),M("div",we,[M("div",ke,[M("a",{href:"#",onClick:t[3]||(t[3]=e=>l.clear()),class:"w-full flex items-center justify-center px-8 py-2 border border-transparent text-base rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:px-10"}," Clear ")]),M("div",Ce,[M("a",{href:"#",onClick:t[4]||(t[4]=e=>l.generateName()),class:"w-full flex items-center justify-center px-8 py-2 border border-transparent text-base rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:px-10"}," Generate ")])])])])]),Ie])};const Be=[{path:"/bgmi-name-generator/",name:"Home",component:K,meta:{title:"Home - BGMI Name Generator",metaTags:[{name:"description",content:"Random Name Generator"}]}}],je=D({history:S(),routes:Be});je.beforeEach(((e,t,a)=>{const n=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),l=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(n?document.title=n.meta.title:l&&(document.title=l.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!o)return a();o.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((a=>{t.setAttribute(a,e[a])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),a()}));const Ae={};Ae.render=function(e,t){const a=p("router-view");return B(),G(a)};const Ge=E(Ae);Ge.use(L),Ge.use(T),Ge.use(je),Ge.use(q,{property:{id:""}}),Ge.mount("#app");
