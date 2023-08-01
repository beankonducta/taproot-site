(function(){"use strict";var e={525:function(e,t,r){var i=r(144),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("NavBar",{on:{switchAlc:function(t){return e.switchAlc(t)}}}),t("Header"),e._l(e.products,(function(r){return t("Product",{key:r.title,attrs:{img:r.img,title:r.title,caption:r.caption,color:r.color,bg:r.bg,accent:r.accent,scrollY:e.scrollY,cocktailHeader:e.alc?r.cocktailHeader:r.mocktailHeader,cocktailBody:e.alc?r.cocktailBody:r.mocktailBody,alc:e.alc,accentImage:r.accentImage,accentSide:r.accentSide}})})),t("Footer")],2)},n=[],o=function(){var e=this,t=e._self._c;return t("div",{ref:e.title,staticClass:"product",style:{background:e.bg},attrs:{id:"products"}},[t("div",{staticClass:"product-wrapper fade",class:[{visible:e.isVisible}],style:{opacity:e.opacity},attrs:{id:`${e.title.replace(" ","-")}`}},[t("img",{class:e.accentClass,attrs:{src:e.accentImage}}),t("div",{staticClass:"title",class:e.titleClass,style:{color:e.color}},[e._v(e._s(e.title))]),t("img",{staticClass:"image slide-in-can",attrs:{src:e.img}}),t("div",{staticClass:"caption",style:{color:e.accent}},[e._v(e._s(e.caption))])])])},c=[],l=r(234),s={name:"Product",props:{img:String,accentImage:String,title:String,caption:String,color:String,accent:String,bg:String,scrollY:Number,cocktailHeader:String,cocktailBody:String,alc:Boolean,accentSide:String},data(){return{isVisible:!1,yPos:0,screenWidth:0,minWidth:1100}},updated(){this.yPos=this.$refs[this.title].getBoundingClientRect().y+document.documentElement.scrollTop},mounted(){this.yPos=this.$refs[this.title].getBoundingClientRect().y+document.documentElement.scrollTop;const e={rootMargin:"0px",threshold:.1},t=new IntersectionObserver(this.handleIntersect,e);t.observe(this.$el),this.updateScreenWidth(),this.onScreenResize()},methods:{switchAlc(){this.alc=!this.alc,this.$emit("switchAlc",this.alc)},handleIntersect(e){const t=e[0];this.isVisible=t.isIntersecting},onScreenResize(){window.addEventListener("resize",(()=>{this.updateScreenWidth()}))},updateScreenWidth(){this.screenWidth=window.innerWidth}},computed:{accentClass(){return"right"===this.accentSide?"accent-image-right":"accent-image-left"},titleClass(){return"right"===this.accentSide?"title-right":"title-left"},compColor(){return(0,l.Z)(this.color).complement().toHexString()},yOffset(){return this.scrollY-this.yPos},cocktailX(){let e=this.yOffset,t=e/7;return t>=0?"0%":t+"%"},imageX(){let e=this.yOffset,t=e/7;return t>=0?"0%":-1*t+"%"},opacity(){return"100%"}}},d=s,u=r(1),h=(0,u.Z)(d,o,c,!1,null,"d491773a",null),b=h.exports,m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{attrs:{id:"inner"}},[t("img",{attrs:{id:"header-logo",src:r(783)}})])])},g=[],p={name:"Header"},v=p,f=(0,u.Z)(v,m,g,!1,null,"ccdfd30e",null),w=f.exports,y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"nav"},[t("a",{staticClass:"nav-item",attrs:{href:"#products"},on:{click:function(t){return e.scroll("products")}}},[e._v("Our Drinks")]),t("a",{staticClass:"nav-item",attrs:{href:"#about"},on:{click:function(t){return e.scroll("about")}}},[e._v("About")]),e.alc?t("div",{staticClass:"alc",attrs:{title:"Click to swap drink ideas between alcoholic and non alcoholic"},on:{click:function(t){return e.switchAlc()}}},[t("svg",{staticStyle:{"enable-background":"new 0 0 29.54 29.54"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 29.54 29.54","xml:space":"preserve"}},[t("g",[t("path",{attrs:{fill:e.compColor,d:"M16.62,5.53c0,1.02-0.83,1.85-1.85,1.85s-1.85-0.83-1.85-1.85s1.98-3.37,1.98-3.37S16.62,4.51,16.62,5.53z"}}),t("path",{attrs:{fill:e.compColor,d:"M15.29,14.26v-0.85c2.49-0.19,4.6-1.74,5.59-3.91H8.67c0.99,2.17,3.1,3.72,5.59,3.91v0.85v5.58v0.3\n\t\tc-0.3,0.2-1.24,0.85-2.17,1.9h5.38c-0.94-1.05-1.88-1.7-2.17-1.9v-0.3V14.26z"}})])])]):e._e(),e.alc?e._e():t("div",{staticClass:"alc",on:{click:function(t){return e.switchAlc()}}},[t("svg",{staticStyle:{"enable-background":"new 0 0 29.54 29.54"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 29.54 29.54","xml:space":"preserve"}},[t("g",[t("path",{attrs:{fill:e.compColor,d:"M20.87,9.51h-9.47l3.9,3.9C17.79,13.21,19.89,11.67,20.87,9.51z"}}),t("path",{attrs:{fill:e.compColor,d:"M14.25,19.84v0.3c-0.3,0.2-1.24,0.85-2.17,1.9h5.38c-0.94-1.05-1.88-1.7-2.17-1.9v-0.3v-2.65l-1.04-1.04V19.84z"}}),t("path",{attrs:{fill:e.compColor,d:"M14.77,3.97c-5.96,0-10.81,4.85-10.81,10.81s4.85,10.8,10.81,10.8s10.81-4.85,10.81-10.8S20.73,3.97,14.77,3.97z\n\t\tM20.73,22.22c-1.69,1.35-3.8,2.1-5.96,2.1c-5.26,0-9.54-4.28-9.54-9.54c0-2.15,0.75-4.27,2.1-5.96l0.23-0.28l1.28,1.28l2.88,2.88\n\t\tl2.54,2.54l1.04,1.04l5.72,5.72L20.73,22.22z M22.22,20.73l-0.23,0.28l-6.7-6.7l-4.8-4.8L8.53,7.55l0.28-0.23\n\t\tc1.69-1.35,3.8-2.1,5.96-2.1c5.26,0,9.54,4.28,9.54,9.54C24.32,16.92,23.57,19.04,22.22,20.73z"}})])])])])},k=[],S={name:"NavBar",data(){return{compColor:"#003B4A",alc:!0}},methods:{scroll(e){this.$refs[e].scrollIntoView()},switchAlc(){this.alc=!this.alc,localStorage.setItem("alc",this.alc?"true":"false"),this.$emit("switchAlc",this.alc)}},mounted(){this.alc="true"===localStorage.getItem("alc"),this.$emit("switchAlc",this.alc)}},_=S,C=(0,u.Z)(_,y,k,!1,null,"39d95990",null),x=C.exports,z=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"footer"},[e._m(0),t("WhereToBuy",{attrs:{id:"buy"}})],1),t("div",{staticClass:"footer-inner"},[t("a",{staticClass:"footer-item",attrs:{href:"mailto:hello@taprootsoda.com"}},[e._v(" Contact us")]),t("a",{staticClass:"footer-item",attrs:{href:"mailto:orders@taprootsoda.com"}},[e._v(" Wholesale Inquiry")]),t("br"),t("p",{staticClass:"a"},[e._v("© "+e._s(e.year)+" Taproot Soda ")]),t("br"),t("br"),e._m(1)])])},L=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"about"}},[t("div",{staticClass:"title"},[e._v("about")]),t("div",{staticClass:"text"},[e._v(" At Taproot Soda, we embarked on a mission to bring delightfully unique, hand-crafted soda to the amazing people in the Salt Lake City area and beyond. As proud residents of the beautiful state of Utah, we hold a special place in our hearts for our home, and it's our pleasure to give back to our community however possible. "),t("br"),t("br"),e._v(" Not only do we pride ourselves on sourcing our high-quality ingredients just a short distance away, but we're also deeply committed to supporting local causes and adopting eco-friendly practices that contribute to the well-being of our planet. "),t("br"),t("br"),e._v(" Taproot Soda exists for all those wonderful individuals who care about the beverages they enjoy and the impact their choices have on the community they treasure. Here's to a delicious and mindful soda experience! ")])])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"a"},[e._v("Site by "),t("a",{attrs:{target:"_blank",href:"https://beankonducta.com/"}},[e._v("Beankonducta")])])}],T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"where-to-buy",attrs:{id:"buy"}},[t("div",{staticClass:"title"},[e._v("Retailers")]),t("div",{staticClass:"inner"},[0===e.retailers.length?t("div",{staticClass:"text"},[e._v(" Coming soon")]):e._e(),e._l(e.retailers,(function(r){return t("div",{key:r.name,staticClass:"text"},[t("div",{staticClass:"text-title"},[e._v(" "+e._s(r.name)+" ")]),t("br"),e._v(" "+e._s(r.address)+" "),t("br"),e._v(" "+e._s(r.city)+", "+e._s(r.state)+" "+e._s(r.zip)+" "),t("br"),t("a",{attrs:{href:r.website,target:"_blank"}},[e._v(e._s(r.website))]),t("br"),t("div",{staticClass:"spacer"})])}))],2)])},B=[],A={name:"WhereToBuy",data(){return{retailers:[]}},methods:{}},I=A,W=(0,u.Z)(I,T,B,!1,null,"e608c9a6",null),G=W.exports,H={name:"Footer",components:{WhereToBuy:G},data(){return{arrowColor:"#B2E1D8"}},methods:{},computed:{year(){return(new Date).getFullYear()}}},P=H,M=(0,u.Z)(P,z,L,!1,null,"83717cb2",null),j=M.exports,O={name:"App",data(){return{alc:!1,currentProduct:0,products:[{img:r(524),accentImage:r(420),accentSide:"right",title:"Blackberry Mint",caption:"",color:"#7e224b",bg:"#00996e",accent:"#bdcce9",cocktailHeader:"Cocktail Idea",cocktailBody:"G and Tea  <br><br>\n                         - 2 oz Gin, the more herbal the better <br>\n                         - 1/2 oz lime juice <br>\n                         - 4 oz Augury Khloris <br>\n                         - lime wheel <br><br>\n                         Stir over ice and serve in a highball glass. Garnish with lime wheel.",mocktailHeader:"Mocktail Idea",mocktailBody:"Tonic and Tea <br><br>\n                         - 3 oz Augury Tonic Water <br>\n                         - 1/2 oz lime juice <br>\n                         - 3oz Augury Khloris <br>\n                         - lime wheel <br><br>\n                         Stir over ice and serve in a highball glass. Garnish with lime wheel."},{img:r(481),accentImage:r(218),accentSide:"left",title:"Cherry Limeade",caption:"",color:"#4eb748",bg:"#991b35",accent:"#fccfc6",cocktailHeader:"Cocktail Idea",cocktailBody:"Earl Grey Collins <br><br>\n                         - 2 oz Dry Gin <br>\n                         - 1 oz lemon juice <br>\n                         - 4 oz Augury Mellona <br>\n                         - orange wedge <br>\n                         - fresh mint <br><br>\n                         Stir over ice and serve in a highball glass. Garnish with orange and mint.",mocktailHeader:"Mocktail Idea",mocktailBody:"Earl Grey Collins <br><br>\n                         - 3 oz Augury Tonic Water <br>\n                         - 1 oz lemon juice <br>\n                         - 3 oz Augury Mellona <br>\n                         - orange wedge <br>\n                         - fresh mint <br><br>\n                         Stir over ice and serve in a highball glass. Garnish with orange and mint."},{img:r(500),accentImage:r(161),accentSide:"right",title:"Rootbeer",caption:"",color:"#733213",bg:"#ae8269",accent:"#e0cfc4",cocktailHeader:"Cocktail Idea",cocktailBody:"Whiskey Tonic <br><br>\n                         - 2 oz whiskey (bourbon works well) <br>\n                         - 6 oz Augury Tonic Water <br>\n                         - Lemon wheel <br><br>\n                         Stir over ice and serve in a highball glass. Garnish with lemon wheel.",mocktailHeader:"Mocktail Idea",mocktailBody:"Lemon-Lime Tonic <br><br>\n                         - 3 oz Taproot Lemon Lime Lavender Soda <br>\n                         - 1 oz fresh lemon or lime juice <br>\n                         - 4 oz Augury Tonic Water <br>\n                         - Lemon or lime wheel <br><br>\n                         Stir over ice and serve in a highball glass. Garnish with lemon wheel."},{img:r(443),accentImage:r(15),accentSide:"left",title:"Lemon Lime Lavender",caption:"",color:"#532b63",bg:"#6c8cc7",accent:"#c4d82e",cocktailHeader:"Cocktail Idea",cocktailBody:"Scotch Green Tea <br><br>\n                         - 2 oz blended scotch <br>\n                         - 6 oz Augury Pomona <br>\n                         - 1/2 oz lemon juice <br>\n                         - lemon wheel <br><br>\n                         Stir over ice and serve in your favorite glass. Garnish with lemon wheel.",mocktailHeader:"Mocktail Idea",mocktailBody:"Green Tea Ginger <br><br>\n                         - 3 oz Taproot Lemongrass Ginger Ale <br>\n                         - 3 oz Augury Pomona <br>\n                         - 1 oz lime juice <br>\n                         - fresh mint <br>\n                         - candied ginger <br><br>\n                         Stir over ice and serve in your favorite glass. Garnish with mint and candied ginger."},{img:r(368),accentImage:r(416),accentSide:"right",title:"Lemongrass Ginger",caption:"",color:"#884225",bg:"#76b043",accent:"#fede36",cocktailHeader:"Cocktail Idea",cocktailBody:"Tequila Soda <br><br>\n                         - 2 oz blanco tequila <br>\n                         - 6 oz Augury Sparkling Water <br>\n                         - Lime Wheel <br><br>\n                         Stir over ice and serve in your favorite glass. Garnish with lime wheel.",mocktailHeader:"Mocktail Idea",mocktailBody:"NA Tequila Soda <br><br>\n                         - 2 oz NA tequila (lyres is a good brand) <br>\n                         - 6 oz Augury Sparkling Water <br>\n                         - Lime Wheel <br><br>\n                         Stir over ice and serve in your favorite glass. Garnish with lime wheel."},{img:r(452),accentImage:r(963),accentSide:"left",title:"Strawberry Fields",caption:"",color:"#b70063",bg:"#d787a3",accent:"#f0d5dd",cocktailHeader:"Cocktail Idea",cocktailBody:"Whiskey Tonic <br><br>\n                         - 2 oz whiskey (bourbon works well) <br>\n                         - 6 oz Augury Tonic Water <br>\n                         - Lemon wheel <br><br>\n                         Stir over ice and serve in a highball glass. Garnish with lemon wheel.",mocktailHeader:"Mocktail Idea",mocktailBody:"Lemon-Lime Tonic <br><br>\n                         - 3 oz Taproot Lemon Lime Lavender Soda <br>\n                         - 1 oz fresh lemon or lime juice <br>\n                         - 4 oz Augury Tonic Water <br>\n                         - Lemon or lime wheel <br><br>\n                         Stir over ice and serve in a highball glass. Garnish with lemon wheel."}],scrollY:0}},methods:{switchAlc(e){this.alc=e},next(){this.currentProduct++,this.currentProduct>this.products.length-1&&(this.currentProduct=0)},prev(){this.currentProduct--,this.currentProduct<0&&(this.currentProduct=this.products.length-1)},handleScroll(e){this.scrollY=e.currentTarget.scrollY}},components:{Product:b,Header:w,NavBar:x,Footer:j},created(){window.addEventListener("scroll",this.handleScroll)},mounted(){this.alc="true"===localStorage.getItem("alc")},unmounted(){window.removeEventListener("scroll",this.handleScroll)}},E=O,Z=(0,u.Z)(E,a,n,!1,null,null,null),$=Z.exports;i.ZP.config.productionTip=!1,new i.ZP({render:e=>e($)}).$mount("#app")},420:function(e,t,r){e.exports=r.p+"img/BBM.3bae2c7a.svg"},218:function(e,t,r){e.exports=r.p+"img/CL.6e56ec23.svg"},416:function(e,t,r){e.exports=r.p+"img/LGG.f8e01180.svg"},15:function(e,t,r){e.exports=r.p+"img/LLL.48844ce7.svg"},161:function(e,t,r){e.exports=r.p+"img/RB.83f3dd5e.svg"},963:function(e,t,r){e.exports=r.p+"img/SF.5133873d.svg"},783:function(e,t,r){e.exports=r.p+"img/Taproot_Web_Logo.a46b8755.svg"},524:function(e,t,r){e.exports=r.p+"img/Blackberry-Mint-Web.18d6557a.png"},481:function(e,t,r){e.exports=r.p+"img/Cherry-Limeade-Template-Web.02f54661.png"},443:function(e,t,r){e.exports=r.p+"img/Lemon-Lime-Lavender-Web.975bab40.png"},368:function(e,t,r){e.exports=r.p+"img/Lemongrass-Ginger-Web.f587eb2a.png"},500:function(e,t,r){e.exports=r.p+"img/Rootbeer-Template-Web.dc42b9be.png"},452:function(e,t,r){e.exports=r.p+"img/Strawberry-Fields-Template-Web.feadd1ec.png"}},t={};function r(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,i,a,n){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],n=e[d][2];for(var c=!0,l=0;l<i.length;l++)(!1&n||o>=n)&&Object.keys(r.O).every((function(e){return r.O[e](i[l])}))?i.splice(l--,1):(c=!1,n<o&&(o=n));if(c){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,a,n]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,n,o=i[0],c=i[1],l=i[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(l)var d=l(r)}for(t&&t(i);s<o.length;s++)n=o[s],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},i=self["webpackChunkabc_full_site"]=self["webpackChunkabc_full_site"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(525)}));i=r.O(i)})();
//# sourceMappingURL=app.908e61fd.js.map