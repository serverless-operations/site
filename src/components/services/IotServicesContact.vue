<template>
  <div>
    <section class="page-section-container">

      <div class="container services-contact-title-container">
        <div class="row">
          <h2 class="content-section-title text-center">
            Contact
            <span>お問い合わせ</span>
            <hr class="title-bottom-line">
          </h2>
        </div>
      </div>
　
      <v-container class="services-contact-content-container">
        
        <v-row justify="center">
          <v-col cols="11" md="8">
            <p class="contact-text-anim contact-desc-text">
              AWS（アマゾンウェブサービス）などを利用したサーバーレスアプリケーションの設計・開発・保守運用等についてお困りの方は、こちらのフォームから気軽にお問い合わせください。
              2〜3営業日以内にメールで返信いたします。
            </p>
          </v-col>
        </v-row>

        <v-row class="contact-text-anim" align="center" justify="center">
          <v-col cols="12" md="8" class="p-top-contact--form">

            <form action="https://getform.io/f/c49d25a9-26c7-4da4-a475-38ff6c466543" 
              method="POST" 
              class="v-form"
              enctype="multipart/form-data"
              @submit="submit"
            >

              <v-row no-gutters>
                <v-col cols="12" sm="4" md="5" lg="4">
                  <v-subheader>お名前<small>（漢字）</small><span class="asterisk"><span class="asterisk">*</span></span></v-subheader>
                </v-col>
                <v-col cols="12" sm="8" md="7" lg="8">
                  <v-text-field
                    name="name1"
                    :class="{ 'border-red': $v.form.name1.$error }"
                    v-model.trim="$v.form.name1.$model"
                  />
                  <p
                    class="error-text-red"
                    v-if="$v.form.name1.$error && !$v.form.name1.required"
                  >
                    お名前<small>（漢字）</small>は必須です。
                  </p>
                </v-col>

                <v-col cols="12" sm="4" md="5" lg="4">
                  <v-subheader>お名前<small>（ふりがな）</small><span class="asterisk">*</span></v-subheader>
                </v-col>
                <v-col cols="12" sm="8" md="7" lg="8">
                  <v-text-field
                    name="name2"
                    :class="{ 'border-red': $v.form.name2.$error }"
                    v-model.trim="$v.form.name2.$model"
                  />
                  <p
                    class="error-text-red"
                    v-if="$v.form.name2.$error && !$v.form.name2.required"
                  >
                    お名前<small>（ふりがな）</small>は必須です。
                  </p>
                </v-col>

                <v-col cols="12" sm="4" md="5" lg="4">
                  <v-subheader>会社名</v-subheader>
                </v-col>
                <v-col cols="12" sm="8" md="7" lg="8">
                  <v-text-field name="company-name"/>
                </v-col>

                <v-col cols="12" sm="4" md="5" lg="4">
                  <v-subheader>Eメール<span class="asterisk">*</span></v-subheader>
                </v-col>
                <v-col cols="12" sm="8" md="7" lg="8">
                  <v-text-field 
                    name="email"
                    :class="{ 'border-red': $v.form.email.$error }"
                    v-model.trim="$v.form.email.$model"
                  />
                  <p
                    class="error-text-red"
                    v-if="$v.form.email.$error && !$v.form.email.required"
                  >メールアドレスは必須です。</p>
                  <p
                    class="error-text-red"
                    v-if="$v.form.email.$error && !$v.form.email.email"
                  >メールアドレスの形式が不正です。</p>
                </v-col>

                <v-col cols="12" sm="4" md="5" lg="4">
                  <v-subheader>
                    ご相談<br class="d-none d-sm-block">
                    <span class="d-block d-sm-none">・</span>
                    お問い合わせ内容<span class="asterisk">*</span>
                  </v-subheader>
                </v-col>
                <v-col cols="12" sm="8" md="7" lg="8">
                  <v-textarea
                    name="content"
                    :class="{ 'border-red': $v.form.content.$error }"
                    v-model.trim="$v.form.content.$model"
                  />
                  <p
                    class="error-text-red"
                    v-if="$v.form.content.$error && !$v.form.content.required"
                  >ご相談内容は必須です。</p>
                </v-col>

              </v-row>

              <v-row align="center" justify="center">
                <v-col cols="12">
                  <p class="p-top-contact--note">
                    <g-link to="/privacy-policy">個人情報保護方針</g-link>をご覧いただき、<br>内容に同意いただけましたら、下記の送信ボタンを押してください。
                  </p>
                </v-col>
              </v-row>

              <v-row align="center" justify="center">
                <button type="submit" class="mr-4 v-btn v-btn--depressed v-btn--tile v-size--large info">
                  <span class="v-btn__content">
                    上記の内容で送信する
                  </span>
                </button>
              </v-row>

            </form>

          </v-col>
        </v-row>

      </v-container>

    </section>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data: () => ({
    form: {
      name1: '',
      name2: '',
      email: '',
      content: '',
    },
  }),
  validations: {
    form: {
      name1: {
        required,
      },
      name2: {
        required,
      },
      email: {
        required,
        email,
      },
      content: {
        required,
        minLength: minLength(4)
      }
    }
  },
  mounted() {
    this.ContactTitleAnimation(),
    this.ContactAnimation()
  },
  methods: {
    submit: function (event) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        if (event) event.preventDefault()
        return false
      }
    },
    ContactTitleAnimation() {
      let object = {
        el: '.services-contact-title-container h2',
        duration: 1.2
      }
      gsap
        .timeline({
          defaults: { ease: 'Expo.easeInOut', duration: 1.2 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: '.services-contact-title-container', // この要素と交差するとイベントが発火
            start: 'top 98%', // ウィンドウのどの位置を発火の基準点にするか
            end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
          },
        })
        .fromTo( '.services-contact-title-container h2', {
          opacity: 0,
          y: 0,
          scale: 0.98,
        }, {
          opacity: 1,
          scale: 1,
          y: -20,
        })
        .fromTo('.title-bottom-line', {
          width: 0,
        }, {
          width: 80,
        },'<')
    },
    ContactAnimation() {
      gsap.timeline({
        scrollTrigger: {
          // markers: true, // マーカーを表示するか（開発用）
          // scrub: 1,
          trigger: '.services-contact-content-container', // この要素と交差するとイベントが発火
          start: 'top 95%', // ウィンドウのどの位置を発火の基準点にするか
          end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
        },
      })
      .fromTo( '.contact-text-anim', {
        opacity: 0,
        y: 0,
      }, {
        delay: 0.3,
        ease: 'Expo.easeInOut',
        transformOrigin: '0 1',
        y: -16,
        duration: 1,
        opacity: 1,
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.2 // 0.8秒おきに
        }
      })
    }

  }
}

</script>

<style lang="scss" scoped>

@include SectionTitle;

.page-section-container {
  padding: 160px 0;
  background-color: $light-gray-2;
  color: $secondary;
  p {
    font-family: $font-jp-regular;
    line-height: 32px;
    text-align: justify;
  }
}

.services-contact-content-container {
  
} // services-contact-content-container

</style>