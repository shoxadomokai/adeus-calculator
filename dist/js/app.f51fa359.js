(function(e){function t(t){for(var a,o,r=t[0],c=t[1],l=t[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function o(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"101e7f56"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(e){var t=[],s=n[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=n[e]=[t,a]}));t.push(s[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var s=n[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,s[1](l)}n[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"12d7":function(e,t,s){"use strict";var a=s("ddad"),n=s.n(a);n.a},"12e7":function(e,t,s){e.exports=s.p+"img/electricity.db113901.svg"},"152c":function(e,t,s){e.exports=s.p+"img/home.a394a915.svg"},"29e0":function(e,t,s){},3697:function(e,t,s){"use strict";var a=s("e2b7"),n=s.n(a);n.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{attrs:{id:"app"}},[s("Navbar"),s("router-view")],1)},i=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("nav",{staticClass:"container navigation d-flex"},[s("img",{staticClass:"logo img-fluid",attrs:{src:"https://a-deus.com/wp-content/uploads/2020/05/Website_Wireframe_Assets_A-DEUS_Logo.png",alt:""}}),s("div",{staticClass:"contact text-right"},[s("h4",[e._v(" Need help? "),s("a",{attrs:{href:"mailto:information@a-deus.ng"}},[e._v("Mail information@a-deus.ng")])]),s("small",[e._v("Mon to Fri - 9am to 8pm, Sat/Sun - 9am to 5pm")])])])])}],c={},l=c,u=(s("a69c"),s("2877")),d=Object(u["a"])(l,o,r,!1,null,"98e320be",null),m=d.exports,v={components:{Navbar:m}},p=v,f=(s("5c0b"),Object(u["a"])(p,n,i,!1,null,null,null)),h=f.exports,g=(s("d3b7"),s("8c4f")),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"home container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-7 order-2 order-lg-1"},[s("Calculator",{attrs:{plan:e.plan,userDetails:e.userDetails,size:e.houseSize,savings:e.savings},on:{planSelected:e.planSelected,locationSubmitted:e.locationSubmitted,sizeSelected:e.sizeSelected,occupantsSelected:e.occupantsSelected}})],1),s("div",{staticClass:"offset-lg-1 col-lg-4 order-1 order-lg-2"},[s("Results",{staticClass:"results",attrs:{savings:e.savings}})],1)])])},_=[],S=(s("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.dataComplete,expression:"!dataComplete"}]},[a("div",{staticClass:"card-header"},[a("h4",{staticClass:"mb-3"},[e._v(" Switching with us is always fast, simple and hassle-free. We’ve just got a few quick questions. ")]),a("p",{staticClass:"info mb-5"},[e._v(" You can also contact us for a specialised quote ")]),a("hr"),a("transition-group",{staticClass:"input-grid",attrs:{name:"list-complete"}},[a("ServicePlan",{key:"services",attrs:{plans:e.plans},on:{planSelected:e.planSelected}}),e.showLocation?a("Location",{key:"location",staticClass:"location",on:{locationSubmitted:e.locationSubmitted}}):e._e(),e.userDetails?a("HouseSize",{key:"houseSize",staticClass:"house-size",attrs:{plan:e.plan},on:{sizeSelected:e.sizeSelected}}):e._e(),e.size?a("form",{key:"occupants",staticClass:"occupants",on:{submit:function(t){return t.preventDefault(),e.occupantsSelected(t)}}},[a("h6",[a("strong",[e._v("How many people live there?")])]),a("div",{key:e.size,staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.numberOfOccupants,expression:"numberOfOccupants"}],staticClass:"form-control",attrs:{required:"",list:"occupants-list",id:"occupant-input"},domProps:{value:e.numberOfOccupants},on:{input:function(t){t.target.composing||(e.numberOfOccupants=t.target.value)}}}),a("datalist",{attrs:{id:"occupants-list"}},e._l(e.size+1,(function(t){return a("option",{key:t,domProps:{value:t>1?t+" People":t+" Person"}},[e._v(" Save as much as... ")])})),0)]),a("button",{staticClass:"btn btn-outline-dark btn-block",attrs:{disabled:!e.numberOfOccupants}},[e._v(" View Complete Savings ")])]):e._e()],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.dataComplete,expression:"dataComplete"}],staticClass:"container final-results"},[a("span",{staticClass:"go-back mt-3 mb-5",on:{click:function(t){e.dataComplete=!1}}},[a("img",{attrs:{src:s("ccfe")}}),a("small",[e._v("Go Back to Inputs")])]),a("div",{staticClass:"options-grid mb-4"},[a("div",{staticClass:"card"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"110",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Image cap"}},[a("title",[e._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#868e96"}})]),a("div",{staticClass:"card-body"},[a("ul",[e._m(0),a("li",[a("p",{staticClass:"card-text"},[e._v("Save £"+e._s(e.savings/12)+" / month")])]),e._m(1)])])]),a("div",{staticClass:"card"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"110",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Image cap"}},[a("title",[e._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#868e96"}})]),a("div",{staticClass:"card-body"},[a("ul",[e._m(2),a("li",[a("p",{staticClass:"card-text"},[e._v(" Enough energy to heat a "+e._s(e.size)+" bedroom house ")])])])])]),a("div",{staticClass:"card"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"110",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Image cap"}},[a("title",[e._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#868e96"}})]),e._m(3)]),a("div",{staticClass:"card"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"110",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: Image cap"}},[a("title",[e._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#868e96"}})]),e._m(4)])])])])}),y=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",{staticClass:"card-text"},[e._v(" Pay £ / month ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",{staticClass:"card-text"},[e._v(" Save Kg CO2 / month ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",{staticClass:"card-text"},[e._v(" Recieve X KWh / month ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[e._v(" Add on our sharing service and share or trade excess you may need or require ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-body"},[s("p",[e._v("Service may require the installation of the following devices")]),s("ol",[s("li",[s("p",{staticClass:"card-text"})]),s("li",[s("p",{staticClass:"card-text"})]),s("li",[s("p",{staticClass:"card-text"})])])])}],C=(s("a9e3"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",[e._m(0),s("div",{staticClass:"checkbox service-plans"},e._l(e.plans,(function(t){return s("div",{key:t.name,staticClass:"card",class:{active:e.selectedPlan===t.name},on:{click:function(s){return e.choosePlan(t)}}},[s("img",{staticClass:"card-img-top mx-auto mt-4",attrs:{src:e.getImage(t),alt:""}}),s("div",{staticClass:"card-body text-center"},[s("p",{staticClass:"card-text mb-0"},[e._v(" "+e._s(t.name)+" ")]),s("small",[e._v("Save as much "),s("strong",[e._v("£"+e._s(t.savings)+"/year")])])])])})),0)])}),w=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h6",[s("strong",[e._v("Select a service plan:")])])}],z=s("5530"),x={props:{plans:{type:Array}},data:function(){return{selectedPlan:null,prevSavings:null}},methods:{choosePlan:function(e){if(this.selectedPlan==e.name)this.selectedPlan=null,this.$emit("planSelected",{name:null,savings:-this.prevSavings}),this.prevSavings=0;else{this.selectedPlan=e.name;var t=Object(z["a"])({},e);t.savings=e.savings-this.prevSavings,this.$emit("planSelected",t),this.prevSavings=e.savings}},getImage:function(e){var t=e.name.toLowerCase(),a=s("8b8b")("./".concat(t,".svg"));return a}}},O=x,B=(s("12d7"),Object(u["a"])(O,C,w,!1,null,"32d97108",null)),k=B.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{attrs:{name:"locationForm"}},[e._m(0),s("div",{staticClass:"form-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userDetails.name,expression:"userDetails.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your Fullname*",required:""},domProps:{value:e.userDetails.name},on:{input:function(t){t.target.composing||e.$set(e.userDetails,"name",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.userDetails.location,expression:"userDetails.location"}],staticClass:"form-control",attrs:{disabled:!e.userDetails.name},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.userDetails,"location",t.target.multiple?s:s[0])},function(t){return e.submitForm()}]}},[s("option",{attrs:{disabled:""}},[e._v("Select your location*")]),s("option",[e._v("North Scotland")]),s("option",[e._v("North West")]),s("option",[e._v("South East")]),s("option",[e._v("South Scotland")]),s("option",[e._v("South Wales")]),s("option",[e._v("Southern")]),s("option",[e._v("West Midlands")]),s("option",[e._v("Yorkshire")]),s("option",[e._v("United Kingdom")])])])])},$=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h6",[s("strong",[e._v("Tell us where you live")])])}],E={data:function(){return{userDetails:{name:null,location:"Select your location*"}}},methods:{submitForm:function(){this.userDetails.name&&this.$emit("locationSubmitted",this.userDetails)}}},j=E,D=Object(u["a"])(j,P,$,!1,null,"9d7a623a",null),N=D.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[e._m(0),a("div",{staticClass:"checkbox service-plans"},e._l(e.houseSize,(function(t,n){return a("div",{key:t.name,staticClass:"card",class:{active:e.selectedSize===t.name},on:{click:function(s){return e.chooseSize(t)}}},[a("span",{staticClass:"beds mt-4 mx-auto"},e._l(n+1,(function(e){return a("img",{key:e,attrs:{src:s("c00e"),alt:"bed"}})})),0),a("div",{staticClass:"card-body text-center"},[a("p",{staticClass:"card-text mb-0"},[e._v(" "+e._s(t.name)+" ")]),a("small",[e._v("Save as much "),a("strong",[e._v("£"+e._s(t.savings)+"/year")])])])])})),0)])},q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h6",[s("strong",[e._v("How many bedrooms do you have?")])])}],A=(s("25f0"),{props:{plan:{type:String,required:!0}},data:function(){return{selectedSize:null,prevSavings:null,plans:{electricity:[{name:"1 Bedroom",size:1,savings:100},{name:"2 Bedrooms",size:2,savings:135},{name:"3 Bedrooms",size:3,savings:160},{name:"4 Bedrooms",size:4,savings:185},{name:"5 Bedrooms",size:5,savings:215},{name:"6+ Bedrooms",size:6,savings:250}],heat:[{name:"1 Bedroom",size:1,savings:250},{name:"2 Bedrooms",size:2,savings:250},{name:"3 Bedrooms",size:3,savings:250},{name:"4 Bedrooms",size:4,savings:250},{name:"5 Bedrooms",size:5,savings:250},{name:"6+ Bedrooms",size:6,savings:250}],ev:[{name:"1 Bedroom",size:1,savings:100},{name:"2 Bedrooms",size:2,savings:135},{name:"3 Bedrooms",size:3,savings:160},{name:"4 Bedrooms",size:4,savings:250},{name:"5 Bedrooms",size:5,savings:185},{name:"6+ Bedrooms",size:6,savings:215}],home:[{name:"1 Bedroom",size:1,savings:100},{name:"2 Bedrooms",size:2,savings:135},{name:"3 Bedrooms",size:3,savings:160},{name:"4 Bedrooms",size:4,savings:250},{name:"5 Bedrooms",size:5,savings:185},{name:"6+ Bedrooms",size:6,savings:215}],lifestyle:[{name:"1 Bedroom",size:1,savings:100},{name:"2 Bedrooms",size:2,savings:135},{name:"3 Bedrooms",size:3,savings:160},{name:"4 Bedrooms",size:4,savings:250},{name:"5 Bedrooms",size:5,savings:185},{name:"6+ Bedrooms",size:6,savings:215}],mobility:[{name:"1 Bedroom",size:1,savings:100},{name:"2 Bedrooms",size:2,savings:135},{name:"3 Bedrooms",size:3,savings:160},{name:"4 Bedrooms",size:4,savings:250},{name:"5 Bedrooms",size:5,savings:185},{name:"6+ Bedrooms",size:6,savings:215}]}}},methods:{chooseSize:function(e){if(this.selectedSize===e.name)this.selectedSize=null,this.$emit("sizeSelected",{name:null,size:null,savings:-this.prevSavings}),this.prevSavings=0;else{this.selectedSize=e.name;var t=Object(z["a"])({},e);t.savings=e.savings-this.prevSavings,this.$emit("sizeSelected",t),this.prevSavings=e.savings}}},computed:{houseSize:function(){var e=this.plan.toString().toLowerCase();return this.plans[e]}}}),L=A,I=(s("bd77"),Object(u["a"])(L,M,q,!1,null,"39baeb2a",null)),T=I.exports,H={props:{plan:{type:String},userDetails:{type:Object},size:{type:Number},savings:{type:Number}},components:{ServicePlan:k,Location:N,HouseSize:T},data:function(){return{plans:[{name:"Lifestyle",savings:800},{name:"Home",savings:250},{name:"Mobility",savings:400},{name:"Electricity",savings:100},{name:"Heat",savings:80},{name:"EV",savings:250}],numberOfOccupants:null,dataComplete:!1}},methods:{planSelected:function(e){this.$emit("planSelected",e),e.name&&setTimeout((function(){document.querySelector(".location").scrollIntoView({behavior:"smooth"})}),1)},locationSubmitted:function(e){this.$emit("locationSubmitted",e),e&&setTimeout((function(){document.querySelector(".house-size").scrollIntoView({behavior:"smooth"})}),1)},sizeSelected:function(e){this.$emit("sizeSelected",e),e.size&&setTimeout((function(){document.querySelector(".occupants").scrollIntoView({behavior:"smooth"})}),1)},occupantsSelected:function(){this.$emit("occupantsSelected",this.numberOfOccupants),this.dataComplete=!0}},computed:{showLocation:function(){return this.plan||this.userDetails}}},W=H,Y=(s("b8b4"),Object(u["a"])(W,S,y,!1,null,"5a4fa72d",null)),F=Y.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("aside",{staticClass:"results"},[s("div",{staticClass:"savings mb-4"},[s("small",{staticClass:"subtitle"},[e._v("Your Savings")]),s("h1",{staticClass:"display-1"},[e._v("£"+e._s(e.animatedSavings))])]),s("p",{staticClass:"results__header mb-4 d-none d-lg-block"},[e._v(" How it works in three easy steps ")]),e._m(0)])},V=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",{staticClass:"steps d-none d-lg-block"},[s("li",{staticClass:"step"},[s("p",{staticClass:"step__header"},[e._v("Enter your details")]),s("p",{staticClass:"step__description"},[e._v(" Answer a few quick questions and then we can find you some great energy deals based on your location and usage. ")])]),s("li",{staticClass:"step"},[s("p",{staticClass:"step__header"},[e._v("See your savings")]),s("p",{staticClass:"step__description"},[e._v(" See savings in your area to see why A-deus is the best choice for you. ")])]),s("li",{staticClass:"step"},[s("p",{staticClass:"step__header"},[e._v("Complete your switch")]),s("p",{staticClass:"step__description"},[e._v(" We’ll contact your old supplier and handle the switchover on your behalf. ")])])])}],U=(s("b680"),{props:{savings:{type:Number,default:0}},data:function(){return{tweenedNumber:0}},computed:{animatedSavings:function(){return this.tweenedNumber.toFixed(0)}},watch:{savings:function(e){gsap.to(this.$data,{duration:.5,tweenedNumber:e})}}}),K=U,J=(s("fad3"),Object(u["a"])(K,R,V,!1,null,"6296aae1",null)),G=J.exports,X={name:"Home",data:function(){return{savings:0,plan:null,userDetails:null,houseSize:null,occupants:null}},components:{Calculator:F,Results:G},methods:{planSelected:function(e){this.plan=e.name,this.savings+=e.savings},locationSubmitted:function(e){this.userDetails=e},sizeSelected:function(e){this.houseSize=e.size,this.savings+=e.savings},occupantsSelected:function(e){this.occupants=e}}},Q=X,Z=(s("3697"),Object(u["a"])(Q,b,_,!1,null,"57e6707b",null)),ee=Z.exports;a["a"].use(g["a"]);var te=[{path:"/",name:"Home",component:ee},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],se=new g["a"]({mode:"history",base:"/",routes:te}),ae=se,ne=s("2f62");a["a"].use(ne["a"]);var ie=new ne["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:ae,store:ie,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("9c0c"),n=s.n(a);n.a},"5c1c":function(e,t,s){e.exports=s.p+"img/ev.6a32d1fb.svg"},"8b8b":function(e,t,s){var a={"./electricity.svg":"12e7","./ev.svg":"5c1c","./heat.svg":"e9ee","./home.svg":"152c","./lifestyle.svg":"94cb","./mobility.svg":"bfe4"};function n(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id="8b8b"},"94cb":function(e,t,s){e.exports=s.p+"img/lifestyle.0d53186d.svg"},"9c0c":function(e,t,s){},a69c:function(e,t,s){"use strict";var a=s("c2a4"),n=s.n(a);n.a},b8b4:function(e,t,s){"use strict";var a=s("d6c0"),n=s.n(a);n.a},bd77:function(e,t,s){"use strict";var a=s("29e0"),n=s.n(a);n.a},bfe4:function(e,t,s){e.exports=s.p+"img/mobility.44dfdb5b.svg"},c00e:function(e,t,s){e.exports=s.p+"img/bed.2eb9f322.svg"},c2a4:function(e,t,s){},ccfe:function(e,t,s){e.exports=s.p+"img/back.03509d2b.svg"},d6c0:function(e,t,s){},ddad:function(e,t,s){},e2b7:function(e,t,s){},e8f2:function(e,t,s){},e9ee:function(e,t,s){e.exports=s.p+"img/heat.23334528.svg"},fad3:function(e,t,s){"use strict";var a=s("e8f2"),n=s.n(a);n.a}});
//# sourceMappingURL=app.f51fa359.js.map