(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{248:function(e,t,r){e.exports=r.p+"assets/img/company-main-bg.a2f92186.svg"},249:function(e,t,r){e.exports=r.p+"assets/img/company-main-particle.4f9e6520.svg"},250:function(e,t,r){e.exports=r.p+"assets/img/company-main-logo.48e6b553.svg"},251:function(e,t,r){e.exports=r.p+"assets/img/company-main-logo-sp.1bd423c2.svg"},300:function(e,t,r){},301:function(e,t,r){},403:function(e,t,r){"use strict";var s=r(300);r.n(s).a},404:function(e,t,r){"use strict";var s=r(301);r.n(s).a},446:function(e,t,r){"use strict";r.r(t);r(34),r(153);var s=r(88),a=r(94),o=r(219),n=r(3),c=r(317);n.default.use(c.VueReCaptcha,{siteKey:"6LdkCD4gAAAAAPvGC6eRsNW8ScaCD5wcCOfqbMIU"});var l={data:function(){return{form:{name1:"",name2:"",email:"",content:"",companyname:"",serverlessConsulting:"",serverlessDevelopment:"",serviceOther:""}}},validations:{form:{name1:{required:o.required},name2:{required:o.required},email:{required:o.required,email:o.email},content:{required:o.required,minLength:Object(o.minLength)(4)}}},methods:{onSubmit:function(){if(this.$v.$touch(),this.$v.$invalid)return event&&event.preventDefault(),!1;var e=new FormData;e.append("name1",this.form.name1),e.append("name2",this.form.name2),e.append("company-name",this.form.companyname),e.append("email",this.form.email),this.form.serverlessConsulting&&e.append("serverless-consulting","サーバーレスコンサルティング"),this.form.serverlessDevelopment&&e.append("serverless-development","サーバーレスディベロップメント"),this.form.serviceOther&&e.append("service-other","その他"),e.append("content",this.form.content),this.$recaptcha("login").then((function(t){e.append("g-recaptcha-response",t);var r,o,n,c;r="https://getform.io/f/c49d25a9-26c7-4da4-a475-38ff6c466543",o="POST",n=e,(c=document.createElement("form")).action=r,c.method=o,c.addEventListener("formdata",(function(e){var t,r=Object(a.a)(n.entries());try{for(r.s();!(t=r.n()).done;){var o=Object(s.a)(t.value,2),c=o[0],l=o[1];e.formData.append(c,l)}}catch(e){r.e(e)}finally{r.f()}})),document.body.append(c),c.submit()}))}}},m=(r(403),r(9)),i={components:{ContactForm:Object(m.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"p-top-contact--container"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"p-top-contact--form",attrs:{cols:"12",md:"10",lg:"8"}},[r("div",{staticClass:"p-top-contact--form-shadow"}),r("form",{staticClass:"v-form",attrs:{"accept-charset":"UTF-8",method:"POST",enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.onSubmit()}}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"4",md:"5",lg:"4"}},[r("v-subheader",[e._v("お名前"),r("small",[e._v("（漢字）")]),e._v("*")])],1),r("v-col",{attrs:{cols:"12",sm:"8",md:"7",lg:"8"}},[r("v-text-field",{class:{"border-red":e.$v.form.name1.$error},attrs:{name:"name1"},model:{value:e.$v.form.name1.$model,callback:function(t){e.$set(e.$v.form.name1,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.name1.$model"}}),e.$v.form.name1.$error&&!e.$v.form.name1.required?r("p",{staticClass:"error-text-red"},[e._v("\n              お名前"),r("small",[e._v("（漢字）")]),e._v("は必須です。\n            ")]):e._e()],1),r("v-col",{attrs:{cols:"12",sm:"4",md:"5",lg:"4"}},[r("v-subheader",[e._v("お名前"),r("small",[e._v("（ふりがな）")]),e._v("*")])],1),r("v-col",{attrs:{cols:"12",sm:"8",md:"7",lg:"8"}},[r("v-text-field",{class:{"border-red":e.$v.form.name2.$error},attrs:{name:"name2"},model:{value:e.$v.form.name2.$model,callback:function(t){e.$set(e.$v.form.name2,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.name2.$model"}}),e.$v.form.name2.$error&&!e.$v.form.name2.required?r("p",{staticClass:"error-text-red"},[e._v("\n              お名前"),r("small",[e._v("（ふりがな）")]),e._v("は必須です。\n            ")]):e._e()],1),r("v-col",{attrs:{cols:"12",sm:"4",md:"5",lg:"4"}},[r("v-subheader",[e._v("会社名")])],1),r("v-col",{attrs:{cols:"12",sm:"8",md:"7",lg:"8"}},[r("v-text-field",{attrs:{name:"companyname"},model:{value:e.form.companyname,callback:function(t){e.$set(e.form,"companyname",t)},expression:"form.companyname"}})],1),r("v-col",{attrs:{cols:"12",sm:"4",md:"5",lg:"4"}},[r("v-subheader",[e._v("Eメール*")])],1),r("v-col",{attrs:{cols:"12",sm:"8",md:"7",lg:"8"}},[r("v-text-field",{class:{"border-red":e.$v.form.email.$error},attrs:{name:"email"},model:{value:e.$v.form.email.$model,callback:function(t){e.$set(e.$v.form.email,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.email.$model"}}),e.$v.form.email.$error&&!e.$v.form.email.required?r("p",{staticClass:"error-text-red"},[e._v("メールアドレスは必須です。")]):e._e(),e.$v.form.email.$error&&!e.$v.form.email.email?r("p",{staticClass:"error-text-red"},[e._v("メールアドレスの形式が不正です。")]):e._e()],1),r("v-col",{attrs:{cols:"12",sm:"4",md:"5",lg:"4"}},[r("v-subheader",[e._v("ご検討中のサービス")])],1),r("v-col",{attrs:{cols:"12",sm:"8",md:"7",lg:"8"}},[r("label",{staticClass:"info--text p-top-contact--check-label info"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.serverlessConsulting,expression:"form.serverlessConsulting"}],attrs:{type:"checkbox",name:"serverlessConsulting",value:"サーバーレスコンサルティング"},domProps:{checked:Array.isArray(e.form.serverlessConsulting)?e._i(e.form.serverlessConsulting,"サーバーレスコンサルティング")>-1:e.form.serverlessConsulting},on:{change:function(t){var r=e.form.serverlessConsulting,s=t.target,a=!!s.checked;if(Array.isArray(r)){var o="サーバーレスコンサルティング",n=e._i(r,o);s.checked?n<0&&e.$set(e.form,"serverlessConsulting",r.concat([o])):n>-1&&e.$set(e.form,"serverlessConsulting",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.form,"serverlessConsulting",a)}}}),e._v("\n              サーバーレスコンサルティング\n            ")]),r("label",{staticClass:"info--text p-top-contact--check-label info"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.serverlessDevelopment,expression:"form.serverlessDevelopment"}],attrs:{type:"checkbox",name:"serverlessDevelopment",value:"サーバーレスディベロップメント"},domProps:{checked:Array.isArray(e.form.serverlessDevelopment)?e._i(e.form.serverlessDevelopment,"サーバーレスディベロップメント")>-1:e.form.serverlessDevelopment},on:{change:function(t){var r=e.form.serverlessDevelopment,s=t.target,a=!!s.checked;if(Array.isArray(r)){var o="サーバーレスディベロップメント",n=e._i(r,o);s.checked?n<0&&e.$set(e.form,"serverlessDevelopment",r.concat([o])):n>-1&&e.$set(e.form,"serverlessDevelopment",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.form,"serverlessDevelopment",a)}}}),e._v("\n              サーバーレスディベロップメント\n            ")]),r("label",{staticClass:"info--text p-top-contact--check-label info"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.serviceOther,expression:"form.serviceOther"}],attrs:{type:"checkbox",name:"serviceOther",value:"その他"},domProps:{checked:Array.isArray(e.form.serviceOther)?e._i(e.form.serviceOther,"その他")>-1:e.form.serviceOther},on:{change:function(t){var r=e.form.serviceOther,s=t.target,a=!!s.checked;if(Array.isArray(r)){var o=e._i(r,"その他");s.checked?o<0&&e.$set(e.form,"serviceOther",r.concat(["その他"])):o>-1&&e.$set(e.form,"serviceOther",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.form,"serviceOther",a)}}}),e._v("\n              その他\n            ")])]),r("v-col",{attrs:{cols:"12",sm:"4",md:"5",lg:"4"}},[r("v-subheader",[e._v("ご相談"),r("br",{staticClass:"d-none d-sm-block"}),r("span",{staticClass:"d-block d-sm-none"},[e._v("・")]),e._v("お問い合わせ内容*\n            ")])],1),r("v-col",{attrs:{cols:"12",sm:"8",md:"7",lg:"8"}},[r("v-textarea",{class:{"border-red":e.$v.form.content.$error},attrs:{name:"content"},model:{value:e.$v.form.content.$model,callback:function(t){e.$set(e.$v.form.content,"$model","string"==typeof t?t.trim():t)},expression:"$v.form.content.$model"}}),e.$v.form.content.$error&&!e.$v.form.content.required?r("p",{staticClass:"error-text-red"},[e._v("ご相談内容は必須です。")]):e._e()],1)],1),r("v-row",{attrs:{align:"center",justify:"end"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"7",lg:"8"}},[r("p",{staticClass:"p-top-contact--note"},[r("g-link",{attrs:{to:"/privacy-policy"}},[e._v("個人情報保護方針")]),e._v("\n              をご覧いただき、内容に同意いただけましたら、下記の送信ボタンを押してください。\n            ")],1),r("p",{staticClass:"p-top-contact--recaptcha"},[e._v("This site is protected by reCAPTCHA and the Google\n              "),r("a",{attrs:{href:"https://policies.google.com/privacy"}},[e._v("Privacy Policy")]),e._v(" and\n              "),r("a",{attrs:{href:"https://policies.google.com/terms"}},[e._v("Terms of Service")]),e._v(" apply.")])])],1),r("v-row",{attrs:{align:"center",justify:"center","justify-sm":"end"}},[r("button",{staticClass:"mr-4 v-btn v-btn--depressed v-btn--tile v-size--large info",attrs:{type:"submit"}},[r("span",{staticClass:"v-btn__content"},[e._v("\n                上記の内容で送信する\n              ")])])])],1)])],1)],1)}),[],!1,null,"6b0230ab",null).exports},metaInfo:function(){return{title:"お問い合わせ",meta:[{key:"og:url",property:"og:url",content:"https://serverless.co.jp/contact"}],link:[{key:"canonical",rel:"canonical",href:"https://serverless.co.jp/contact"}]}}},v=(r(404),Object(m.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("Layout",[t("div",{staticClass:"v-content__wrap"},[t("div",{staticClass:"l-contact-page"},[t("div",{staticClass:"p-contact-header"},[t("div",{staticClass:"p-contact-header__tryangle"}),t("div",{staticClass:"p-contact-header__main-img"},[t("img",{staticClass:"p-contact-header__main-bg d-none d-md-block",attrs:{src:r(248)}}),t("img",{staticClass:"p-contact-header__main-particle d-none d-md-block",attrs:{src:r(249)}}),t("img",{staticClass:"p-contact-header__main-logo d-none d-md-block",attrs:{src:r(250)}}),t("img",{staticClass:"p-contact-header__logo-sp d-md-none",attrs:{src:r(251)}})]),t("v-container",{staticClass:"p-contact-header__container"},[t("v-row",[t("v-col",{attrs:{cols:"12",md:"6"}},[t("h2",{staticClass:"p-contact-header__title"},[this._v("\n                Contact\n                "),t("span",{staticClass:"p-contact-header__title-jp"},[this._v("お問い合わせ")])]),t("p",{staticClass:"p-contact-header__text"},[this._v("\n                サーバーレスアプリケーションの設計・開発・保守運用等についてお困りの方は、こちらのフォームから気軽にお問い合わせください。2〜3営業日以内にメールで返信いたします。\n              ")])])],1)],1)],1),t("contact-form")],1)])])}),[],!1,null,"3c0b0930",null));t.default=v.exports}}]);