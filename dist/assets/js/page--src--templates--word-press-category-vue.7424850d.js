(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{207:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a(3);var s=a(89),r=(a(90),a(39),a(92),a(150),a(33),a(93),a(12)),i=a(8),n={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,n=e.data,o=e.parent,c=a.info,u=a.showLinks,p=a.showNavigation,d=a.ariaLabel,g=function(t,e){var a=t.currentPage,s=void 0===a?1:a,r=t.totalPages,i=void 0===r?1:r,n=Math.ceil(e/2),l=Math.floor(s-n),o=Math.floor(s+n);i<=e?(l=0,o=i):s<=n?(l=0,o=e):s+n>=i&&(l=i-e,o=i);for(var c=[],u=l+1;u<=o;u++)c.push(u);return{current:s,total:i,start:l,end:o,pages:c}}(c,a.range),f=g.current,v=g.total,b=g.pages,h=g.start,L=g.end,C=Object(i.d)(o.$route),_=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;e===f&&(n=a.ariaCurrentLabel);var o={to:l(C,e),exact:!0};return a.activeLinkClass&&(o.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(o.exactActiveClass=a.exactActiveLinkClass),t(s.a,{class:a.linkClass,attrs:Object(r.a)(Object(r.a)({},o),{},{"aria-label":n.replace("%n",e),"aria-current":f===e})},[i])},w=u?b.map((function(t){return _(t,t,a.ariaLinkLabel)})):[];if(p){var y=a.firstLabel,m=a.prevLabel,k=a.nextLabel,P=a.lastLabel,x=a.ariaFirstLabel,S=a.ariaPrevLabel,j=a.ariaNextLabel,O=a.ariaLastLabel;f>1&&w.unshift(_(f-1,m,S)),h>0&&w.unshift(_(1,y,x)),f<v&&w.push(_(f+1,k,j)),L<v&&w.push(_(v,P,O))}return w.length<2?null:t("nav",Object(r.a)(Object(r.a)({},n),{},{attrs:{role:"navigation","aria-label":d}}),w)}};function l(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(i.g)(t)+"/".concat(e).concat(a):t}a(91)},208:function(t,e,a){},211:function(t,e,a){t.exports=a.p+"assets/img/top-news-thum.fa50d7c3.jpg"},220:function(t,e,a){"use strict";var s={props:{post:{type:Object,required:!0}}},r=(a(221),a(9)),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-card-border"},[s("g-link",{staticClass:"p-news-contents__card v-card v-card--link v-sheet v-sheet--tile theme--dark white",attrs:{to:t.post.path}},[s("v-card",{staticClass:"p-news-contents__card"},[s("div",{staticClass:"p-news-contents__image"},[s("div",{staticClass:"p-news-contents__image-cover"},[t.post.featuredMedia?s("g-image",{staticClass:"object-cover h-64 w-full",attrs:{src:t.post.featuredMedia.sourceUrl,width:""+t.post.featuredMedia.mediaDetails.width,alt:t.post.featuredMedia.altText}}):s("img",{attrs:{src:a(211)}})],1)]),s("div",{staticClass:"p-news-contents__title-block"},[s("div",{staticClass:"v-card__text p-news-contents__date",attrs:{datetime:t.post.date}},[t._v(t._s(t.post.date))]),s("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"v-card__title p-news-contents__title",domProps:{innerHTML:t._s(t.post.title)}})])])],1)],1)}),[],!1,null,null,null);e.a=i.exports},221:function(t,e,a){"use strict";var s=a(208);a.n(s).a},256:function(t,e){},324:function(t,e,a){"use strict";var s=a(256),r=a.n(s);e.default=r.a},450:function(t,e,a){"use strict";a.r(e);var s=a(207),r=a(220),i={components:{Pager:s.a,Post:r.a},metaInfo:function(){return{title:this.$page.wordPressCategory.title}}},n=a(9),l=a(324),o=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("h1",[this._v("Category: "+this._s(this.$page.wordPressCategory.title)+" ")]),e("ul",{staticClass:"post-list"},this._l(this.$page.wordPressCategory.belongsTo.edges,(function(t){var a=t.node;return e("li",{key:a.id},[e("Post",{attrs:{post:a}})],1)})),0),e("Pager",{attrs:{info:this.$page.wordPressCategory.belongsTo.pageInfo}})],1)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(o);e.default=o.exports}}]);