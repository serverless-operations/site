(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{210:function(s,t,a){s.exports=a.p+"assets/img/about-so-main-square.4f9e6520.svg"},216:function(s,t,a){s.exports=a.p+"assets/img/about-so-main-bg.a2f92186.svg"},217:function(s,t,a){s.exports=a.p+"assets/img/about-so-main-bg-sp.e35bb783.svg"},218:function(s,t,a){s.exports=a.p+"assets/img/about-so-main-particle-sp.0472d297.svg"},297:function(s,t,a){},316:function(s,t,a){s.exports=a.p+"assets/img/oss-main-icon.187820ed.svg"},392:function(s,t,a){s.exports=a.p+"assets/img/costless-logo.ff134cc9.svg"},397:function(s,t,a){"use strict";var e=a(297);a.n(e).a},459:function(s,t,a){"use strict";a.r(t);var e=a(3),r=a(393),i=a(14),o=a(26);i.b.registerPlugin(o.ScrollTrigger),e.default.use(r.a),e.default.use(r.a,{useCache:!1});var n={metaInfo:function(){return{title:"私達が開発したプロダクト",meta:[{name:"description",content:"サーバーレスアプリケーションの開発をより簡単に・容易にするために、私たちが独自に開発したプロダクトをご紹介します。"},{key:"og:url",property:"og:url",content:"https://serverless.co.jp/our-products"}],link:[{key:"canonical",rel:"canonical",href:"https://serverless.co.jp/our-products"}]}},components:{VueGitHubButtons:r.a},fetch:function(s){s.store.commit("resetModal")},scrollToTop:!0,mounted:function(){this.PageTextAnimation()},methods:{PageTextAnimation:function(){i.b.fromTo(".page-title-anim-bg",{opacity:1,scaleX:0,transformOrigin:"0 0"},{ease:"Expo.easeInOut",transformOrigin:"1 0",scaleX:1,duration:1.6,opacity:0,stagger:{from:"start",axis:"x",amount:.4}}),i.b.fromTo(".text-anim",{opacity:0,x:-32},{delay:.2,ease:"Expo.easeInOut",transformOrigin:"1 0",x:0,duration:1.8,opacity:1,stagger:{from:"start",axis:"x",amount:.4}}),i.b.fromTo(".page-header-text-anim",{opacity:0,y:0},{delay:1.4,ease:"Expo.easeInOut",transformOrigin:"0 1",y:-16,duration:1,opacity:1,stagger:{from:"start",axis:"x",amount:.2}})}}},l=(a(397),a(9)),c=Object(l.a)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("Layout",[e("div",{staticClass:"v-content__wrap"},[e("div",{staticClass:"l-company-page"},[e("div",{staticClass:"page-header-container"},[e("div",{staticClass:"page-header-img-container"},[e("img",{staticClass:"page-header-main-bg d-none d-md-block",attrs:{src:a(216),alt:"Serverless Operationsとは メインイメージ"}}),e("img",{staticClass:"page-header-logo d-none d-md-block",attrs:{src:a(316),alt:"Serverless Operationsとは メインイメージ ロゴ"}}),e("img",{staticClass:"page-header-main-particle d-none d-md-block",attrs:{src:a(210),alt:"Serverless Operationsとは メインイメージ"}}),e("img",{staticClass:"page-header-main-bg d-md-none",attrs:{src:a(217),alt:"Serverless Operationsとは メインイメージ"}}),e("img",{staticClass:"page-header-logo-sp d-md-none",attrs:{src:a(316),alt:"Serverless Operationsとは メインイメージ ロゴ"}}),e("img",{staticClass:"page-header-main-particle d-md-none",attrs:{src:a(218),alt:"Serverless Operationsとは メインイメージ"}})]),e("v-container",{staticClass:"page-header-text-container"},[e("v-row",[e("v-col",{attrs:{cols:"12",md:"6"}},[e("h1",{staticClass:"page-header-title text-anim"},[e("span",{staticClass:"text-anim"},[s._v("PRODUCTS")]),e("span",{staticClass:"page-header-title-jp text-anim"},[s._v("\n                  私たちが開発したプロダクト\n                ")]),e("span",{staticClass:"page-title-anim-bg"})]),e("h2",{staticClass:"page-header-copy page-header-text-anim"},[s._v("\n                独自に開発した"),e("br",{staticClass:"d-md-block d-none"}),s._v("プロダクトをご紹介します。\n              ")]),e("p",{staticClass:"page-header-text page-header-text-anim"},[s._v("\n                サーバーレスアプリケーションの開発をより簡単に・容易にするために、"),e("br",{staticClass:"d-md-block d-none"}),s._v("私たちが独自に開発したフレームワークやツールセットなどのプロダクトをご紹介します。\n              ")])])],1)],1)],1),e("section",{staticClass:"p-our-products"},[e("v-container",[e("div",{staticClass:"cards"},[e("div",{staticClass:"cards-container"},[e("v-row",[e("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[e("img",{staticClass:"cards-img",attrs:{src:a(392),alt:"Costless ロゴマーク"}})]),e("v-col",{attrs:{cols:"12",md:"6"}},[e("h3",{staticClass:"cards-title costless-title"},[s._v("Costless")]),e("p",{staticClass:"cards-text"},[s._v("\n                    サーバーレスのコストをもっと分かりやすくするSaaS。AWSのサーバーレスにおけるコストの詳細を可視化し、継続的なコスト最適化・削減を支援するためのサービスです。\n                  ")]),e("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"primary-button",attrs:{href:"https://costless.io/ja"}},[s._v("\n                    Costless Website\n                  ")])])],1)],1),e("div",{staticClass:"blue-drop-shadow"})]),e("v-row",[e("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"cards d-flex"},[e("div",{staticClass:"cards-container"},[e("h3",{staticClass:"cards-title title-min-height"},[e("br"),s._v("Jeffy ")]),e("div",{staticClass:"github-buttons"},[e("gh-btns-star",{attrs:{slug:"serverless-operations/jeffy","show-count":""}})],1),e("p",{staticClass:"cards-text"},[s._v("\n                    AWS LambdaのPython向けのサーバーレスアプリケーションフレームワーク。Lambdaをよりシンプルに実装するためのツールセットを提供しています。\n                  ")]),e("a",{staticClass:"github-repository-link primary-button",attrs:{href:"https://github.com/serverless-operations/jeffy"}},[e("span",[s._v("Github")])])]),e("div",{staticClass:"blue-drop-shadow"})])]),e("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"cards d-flex"},[e("div",{staticClass:"cards-container"},[e("h3",{staticClass:"cards-title title-min-height"},[e("span",[s._v("Serverless")]),e("br"),s._v("\n                    Step Functions\n                  ")]),e("div",{staticClass:"github-buttons"},[e("gh-btns-star",{attrs:{slug:"serverless-operations/serverless-step-functions","show-count":""}})],1),e("p",{staticClass:"cards-text"},[s._v("\n                    AWS Step Functionsの構成を管理してデプロイするためのServerless Frameworkプラグイン\n                  ")]),e("a",{staticClass:"github-repository-link primary-button",attrs:{href:"https://github.com/serverless-operations/serverless-step-functions"}},[e("span",[s._v("Github")])])]),e("div",{staticClass:"blue-drop-shadow"})])]),e("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"cards d-flex"},[e("div",{staticClass:"cards-container"},[e("h3",{staticClass:"cards-title"},[e("span",[s._v("Serverless")]),e("br"),s._v("\n                    API Gateway Service Proxy\n                  ")]),e("div",{staticClass:"github-buttons"},[e("gh-btns-star",{attrs:{slug:"serverless-operations/serverless-apigateway-service-proxy","show-count":""}})],1),e("p",{staticClass:"cards-text"},[s._v("\n                    API Gatewayと他のAWSサービスをLambda無しで直接インテグレーションを行うAWS Service Proxyの機能を簡単に構成管理するためのServerless Frameworkプラグイン\n                  ")]),e("a",{staticClass:"github-repository-link primary-button",attrs:{href:"https://github.com/serverless-operations/serverless-apigateway-service-proxy"}},[e("span",[s._v("Github")])])]),e("div",{staticClass:"blue-drop-shadow"})])]),e("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"cards d-flex"},[e("div",{staticClass:"cards-container"},[e("h3",{staticClass:"cards-title"},[e("span",[s._v("Serverless")]),e("br"),s._v("\n                    Dashboard for Atom\n                  ")]),e("div",{staticClass:"github-buttons"},[e("gh-btns-star",{attrs:{slug:"serverless-operations/serverless-dashboard-for-atom","show-count":""}})],1),e("p",{staticClass:"cards-text"},[s._v("\n                    GUIからServerless Frameworkを使いクラウド環境へ構成をデプロイ、可視化するためのAtomエディターアドオン\n                  ")]),e("a",{staticClass:"github-repository-link primary-button",attrs:{href:"https://github.com/serverless-operations/serverless-dashboard-for-atom"}},[e("span",[s._v("Github")])])]),e("div",{staticClass:"blue-drop-shadow"})])]),e("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"cards d-flex"},[e("div",{staticClass:"cards-container"},[e("h3",{staticClass:"cards-title"},[e("span",[s._v("Serverless")]),e("br"),s._v("\n                    Delete Loggroups\n                  ")]),e("div",{staticClass:"github-buttons"},[e("gh-btns-star",{attrs:{slug:"serverless-operations/serverless-delete-loggroups","show-count":""}})],1),e("p",{staticClass:"cards-text"},[s._v("\n                    Serverless Frameworkのv1.6で発生したLog Groupの変更に対応するためのプラグイン\n                  ")]),e("a",{staticClass:"github-repository-link primary-button",attrs:{href:"https://github.com/serverless-operations/serverless-delete-loggroups"}},[e("span",[s._v("Github")])])]),e("div",{staticClass:"blue-drop-shadow"})])])],1)],1)],1)])])])}),[],!1,null,"26779dd9",null);t.default=c.exports}}]);