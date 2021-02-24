(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-376bfecc"],{"7cf4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[s("div",{staticClass:"alert-icon"},[s("span",{staticClass:"svg-icon svg-icon-lg"},[s("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),s("div",{staticClass:"alert-text"},[s("b",[t._v("Spinners")]),t._v(" The <b-spinner> component can be used to show the loading state in your projects. They're rendered only with basic HTML and CSS as a lightweight Vue functional component. Their appearance, alignment, and sizing can be easily customized with a few built-in props and/or Bootstrap v4 utility classes. "),s("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/spinner",target:"_blank"}},[t._v(" See documentation. ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("KTCodePreview",{attrs:{title:"Spinners"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v(" Spinners can be placed just about anywhere, including inside buttons, alerts, and even "),s("code",[t._v("<b-table>")]),t._v("'s busy slot."),s("br"),s("br")]),s("div",{staticClass:"text-center"},[s("b-spinner",{staticClass:"mr-3",attrs:{label:"Spinning"}}),s("b-spinner",{staticClass:"mr-3",attrs:{type:"grow",label:"Spinning"}}),s("b-spinner",{staticClass:"mr-3",attrs:{variant:"primary",label:"Spinning"}}),s("b-spinner",{staticClass:"mr-3",attrs:{variant:"primary",type:"grow",label:"Spinning"}}),s("b-spinner",{staticClass:"mr-3",attrs:{variant:"success",label:"Spinning"}}),s("b-spinner",{staticClass:"mr-3",attrs:{variant:"success",type:"grow",label:"Spinning"}})],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])}),s("KTCodePreview",{attrs:{title:"Flex"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v("Using flex utility classes")]),s("div",[s("div",{staticClass:"d-flex justify-content-center mb-3"},[s("b-spinner",{attrs:{label:"Loading..."}})],1),s("div",{staticClass:"d-flex align-items-center"},[s("strong",[t._v("Loading...")]),s("b-spinner",{staticClass:"ml-auto"})],1)])]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code3.html)+" ")]},proxy:!0}])})],1),s("div",{staticClass:"col-md-6"},[s("KTCodePreview",{attrs:{title:"Text align"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v("Using text alignment utility classes")]),s("div",{staticClass:"text-center"},[s("b-spinner",{attrs:{variant:"primary",label:"Text Centered"}})],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code4.html)+" ")]},proxy:!0}])}),s("KTCodePreview",{attrs:{title:"Spinners in buttons"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v(" Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the label text out of the spinner element and utilize button text as needed. ")]),s("div",[s("b-button",{staticClass:"mr-3",attrs:{variant:"primary",disabled:""}},[s("b-spinner",{attrs:{small:""}}),s("span",{staticClass:"sr-only"},[t._v("Loading...")])],1),s("b-button",{attrs:{variant:"primary",disabled:""}},[s("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" Loading... ")],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code5.html)+" ")]},proxy:!0}])})],1),s("div",{staticClass:"col-md-12"},[s("KTCodePreview",{attrs:{title:"Spinner color variants"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v(" Spinners use "),s("code",[t._v("currentColor")]),t._v(" for their color, meaning it inherits the current font color. You can customize the color using the standard text color variants using the "),s("code",[t._v("variant")]),t._v(" prop, or place classes or styles on the component to change its color. ")]),s("div",[s("div",{staticClass:"text-center mb-3 d-flex justify-content-between"},t._l(t.code2.variants,(function(t){return s("b-spinner",{key:t,attrs:{variant:t}})})),1),s("div",{staticClass:"text-center d-flex justify-content-between"},t._l(t.code2.variants,(function(t){return s("b-spinner",{key:t,attrs:{variant:t,type:"grow"}})})),1)])]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code2.js)+" ")]},proxy:!0}])})],1)])],1)},n=[],i=s("d968"),r=s("0bce"),l={data:function(){return{code1:{html:'<div class="text-center">\n  <b-spinner label="Spinning"></b-spinner>\n  <b-spinner type="grow" label="Spinning"></b-spinner>\n  <b-spinner variant="primary" label="Spinning"></b-spinner>\n  <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>\n  <b-spinner variant="success" label="Spinning"></b-spinner>\n  <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>\n</div>'},code2:{html:'<div>\n    <div class="text-center mb-3 d-flex justify-content-between">\n      <b-spinner\n        v-for="variant in variants"\n        :variant="variant"\n        :key="variant"\n      ></b-spinner>\n    </div>\n\n    <div class="text-center d-flex justify-content-between">\n      <b-spinner\n        v-for="variant in variants"\n        :variant="variant"\n        :key="variant"\n        type="grow"\n      ></b-spinner>\n    </div>\n  </div>',js:"export default {\n    data() {\n      return {\n        variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']\n      }\n    }\n  }",variants:["primary","secondary","danger","warning","success","info","light","dark"]},code3:{html:'<div>\n  <div class="d-flex justify-content-center mb-3">\n    <b-spinner label="Loading..."></b-spinner>\n  </div>\n\n  <div class="d-flex align-items-center">\n    <strong>Loading...</strong>\n    <b-spinner class="ml-auto"></b-spinner>\n  </div>\n</div>'},code4:{html:'<div class="text-center">\n  <b-spinner variant="primary" label="Text Centered"></b-spinner>\n</div>'},code5:{html:'<div>\n  <b-button variant="primary" disabled>\n    <b-spinner small></b-spinner>\n    <span class="sr-only">Loading...</span>\n  </b-button>\n\n  <b-button variant="primary" disabled>\n    <b-spinner small type="grow"></b-spinner>\n    Loading...\n  </b-button>\n</div>'}}},components:{KTCodePreview:i["a"]},mounted:function(){this.$store.dispatch(r["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Progress",route:"progress"},{title:"Spinner"}])}},o=l,c=s("2877"),d=Object(c["a"])(o,a,n,!1,null,null,null);e["default"]=d.exports},d968:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[s("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[s("div",{staticClass:"example-tools justify-content-center"},[s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():s("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?s("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():s("div",[s("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[s("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[s("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),s("b-tab",{staticClass:"example-highlight"},[s("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),s("b-tab",{staticClass:"example-highlight"},[s("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?s("div",{staticClass:"example-highlight"},[t.hasHtmlCode?s("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?s("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?s("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},n=[],i=(s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?s("div",{staticClass:"card-header",class:t.headClass},[s("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():s("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),s("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),s("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?s("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),r=[],l={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},o=l,c=s("2877"),d=Object(c["a"])(o,i,r,!1,null,null,null),p=d.exports,u=s("b2e9"),h={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:p},mounted:function(){var t=this;this.$nextTick((function(){u["a"].init([t.$el]);var e=t.$el.querySelectorAll(".hljs");e.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),s=e.querySelectorAll('[data-toggle="tab"]'),a=0;a<s.length;a++)s[a].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(s){t.$slots.hasOwnProperty(s)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},v=h,b=Object(c["a"])(v,a,n,!1,null,null,null);e["a"]=b.exports}}]);
//# sourceMappingURL=chunk-376bfecc.dd10c866.js.map