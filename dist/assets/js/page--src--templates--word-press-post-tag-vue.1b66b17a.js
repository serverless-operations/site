(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{207:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e(3);var s=e(89),i=(e(90),e(39),e(92),e(150),e(33),e(93),e(12)),n=e(8),r={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,r=a.data,o=a.parent,c=e.info,u=e.showLinks,p=e.showNavigation,d=e.ariaLabel,g=function(t,a){var e=t.currentPage,s=void 0===e?1:e,i=t.totalPages,n=void 0===i?1:i,r=Math.ceil(a/2),l=Math.floor(s-r),o=Math.floor(s+r);n<=a?(l=0,o=n):s<=r?(l=0,o=a):s+r>=n&&(l=n-a,o=n);for(var c=[],u=l+1;u<=o;u++)c.push(u);return{current:s,total:n,start:l,end:o,pages:c}}(c,e.range),f=g.current,v=g.total,b=g.pages,h=g.start,L=g.end,_=Object(n.d)(o.$route),w=function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;a===f&&(r=e.ariaCurrentLabel);var o={to:l(_,a),exact:!0};return e.activeLinkClass&&(o.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(o.exactActiveClass=e.exactActiveLinkClass),t(s.a,{class:e.linkClass,attrs:Object(i.a)(Object(i.a)({},o),{},{"aria-label":r.replace("%n",a),"aria-current":f===a})},[n])},C=u?b.map((function(t){return w(t,t,e.ariaLinkLabel)})):[];if(p){var y=e.firstLabel,P=e.prevLabel,m=e.nextLabel,k=e.lastLabel,x=e.ariaFirstLabel,S=e.ariaPrevLabel,j=e.ariaNextLabel,O=e.ariaLastLabel;f>1&&C.unshift(w(f-1,P,S)),h>0&&C.unshift(w(1,y,x)),f<v&&C.push(w(f+1,m,j)),L<v&&C.push(w(v,k,O))}return C.length<2?null:t("nav",Object(i.a)(Object(i.a)({},r),{},{attrs:{role:"navigation","aria-label":d}}),C)}};function l(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(n.g)(t)+"/".concat(a).concat(e):t}e(91)},208:function(t,a,e){},211:function(t,a,e){t.exports=e.p+"assets/img/top-news-thum.fa50d7c3.jpg"},220:function(t,a,e){"use strict";var s={props:{post:{type:Object,required:!0}}},i=(e(221),e(9)),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"c-card-border"},[s("g-link",{staticClass:"p-news-contents__card v-card v-card--link v-sheet v-sheet--tile theme--dark white",attrs:{to:t.post.path}},[s("v-card",{staticClass:"p-news-contents__card"},[s("div",{staticClass:"p-news-contents__image"},[s("div",{staticClass:"p-news-contents__image-cover"},[t.post.featuredMedia?s("g-image",{staticClass:"object-cover h-64 w-full",attrs:{src:t.post.featuredMedia.sourceUrl,width:""+t.post.featuredMedia.mediaDetails.width,alt:t.post.featuredMedia.altText}}):s("img",{attrs:{src:e(211)}})],1)]),s("div",{staticClass:"p-news-contents__title-block"},[s("div",{staticClass:"v-card__text p-news-contents__date",attrs:{datetime:t.post.date}},[t._v(t._s(t.post.date))]),s("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"v-card__title p-news-contents__title",domProps:{innerHTML:t._s(t.post.title)}})])])],1)],1)}),[],!1,null,null,null);a.a=n.exports},221:function(t,a,e){"use strict";var s=e(208);e.n(s).a},255:function(t,a){},323:function(t,a,e){"use strict";var s=e(255),i=e.n(s);a.default=i.a},447:function(t,a,e){"use strict";e.r(a);var s=e(207),i=e(220),n={components:{Pager:s.a,Post:i.a},metaInfo:function(){return{title:this.$page.wordPressPostTag.title}}},r=e(9),l=e(323),o=Object(r.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("h1",[this._v("Tag: "+this._s(this.$page.wordPressPostTag.title)+" ")]),a("ul",{staticClass:"post-list"},this._l(this.$page.wordPressPostTag.belongsTo.edges,(function(t){var e=t.node;return a("li",{key:e.id},[a("Post",{attrs:{post:e}})],1)})),0),a("Pager",{attrs:{info:this.$page.wordPressPostTag.belongsTo.pageInfo}})],1)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(o);a.default=o.exports}}]);