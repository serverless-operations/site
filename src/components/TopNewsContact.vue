<template>
  <div class="v-content">
    <div class="v-content__wrap">

   
    <div class="container">

      <div class="row align-center justify-space-between">
        
        <div class="col-md-6 col-12">
          <h2 class="d-flex flex-column justify-center align-center align-md-start p-top-news--title">News<span>お知らせ</span></h2>
        </div>

        <div justify="end" class="d-none d-md-block p-top-news--more col col-5 align-self-end">
          <g-link to="/news/">More Details</g-link>
        </div>

      </div>

      <div class="p-news-contents row">
        <p>ここにポストが入る</p>
        <!--v-col v-for="(post, index) in news.items"
               :key="index"
               cols="6"
               md="3" class="pr-1 pr-lg-4 pl-1 pl-lg-4 pb-1 pb-lg-4">
          <div class="c-card-border">

            <v-card color="white"
                    :to="{ name: 'news-id', params: { id: post.fields.postname } }"
                    height="100%"
                    tile :ripple="false" class="p-news-contents__card">
            
                <div class="p-news-contents__image">
                  <div class="p-news-contents__image-cover">
                    <img v-if="post.fields.image"
                      :src="post.fields.image.fields.file.url"
                      :alt="post.fields.image.fields.description">
                  
                  <img v-else
                      src="../assets/images/top-news-thum.jpg">
                  </div>
                </div>
            
                <div class="p-news-contents__title-block">
                  <v-card-text class="p-news-contents__date">{{ formatDate(post.sys.createdAt) }}</v-card-text>
                  <v-card-title class="p-news-contents__title">{{ post.fields.title }}</v-card-title>
                </div>

            </v-card>

          </div>
        </v-col -->

      </div>

      <div class="row mb-md-12 align-center justify-end">
        <div class="d-block d-md-none p-top-news--more col col-5 align-self-end">
          <g-link to="/news/">More Details</g-link>
        </div>
      </div>

    </div>

    <div class="p-news-bg"></div>

    <div class="container mt-md-12">
      
      <div class="row mt-md-12 align-center justify-space-between">

        <div class="col-md-4 col-lg-5 col-12">
          <h2 class="d-flex flex-column justify-center align-center align-md-start p-top-contact--title">Contact<span>お問い合わせ</span></h2>
          <p class="p-top-contact--paragraph">AWS<small>（アマゾンウェブサービス）</small>などを利用したサーバーレスアプリケーションの設計・開発・保守運用等についてお困りの方は、こちらのフォームから気軽にお問い合わせください。2〜3営業日以内にメールで返信いたします。</p>
        </div>

        <div cols="12"
               md="7"
               lg="6"
               class="p-top-contact--form col">
          <div class="p-top-contact--form-shadow" />
          <v-form v-model="valid"
                  name="contact"
                  netlify>
            <input type="hidden"
                   name="form-name"
                   value="contact">
            <div class="row no-gutters" >
              <v-col cols="12"
                     md="5"
                     lg="4">
                <v-subheader>お名前<small>（漢字）</small>*</v-subheader>
              </v-col>
              <v-col cols="12"
                     md="7"
                     lg="8">
                <v-text-field v-model="name"
                              :rules="nameRules"
                              name="name"
                              single-line
                              outlined
                              solo
                              flat
                              dense
                              required
                              filled />
              </v-col>

              <v-col cols="12"
                     md="5"
                     lg="4">
                <v-subheader>お名前<small>（ふりがな）</small>*</v-subheader>
              </v-col>
              <v-col cols="12"
                     md="7"
                     lg="8">
                <v-text-field v-model="nameFurigana"
                              :rules="nameFuriganaRules"
                              name="name-furigana"
                              single-line
                              outlined
                              solo
                              flat
                              dense
                              required
                              filled />
              </v-col>

              <v-col cols="12"
                     md="5"
                     lg="4">
                <v-subheader>会社名</v-subheader>
              </v-col>
              <v-col cols="12"
                     md="7"
                     lg="8">
                <v-text-field v-model="companyName"
                              name="company-name"
                              single-line
                              outlined
                              solo
                              flat
                              dense
                              filled />
              </v-col>

              <v-col cols="12"
                     md="5"
                     lg="4">
                <v-subheader>Eメール*</v-subheader>
              </v-col>
              <v-col cols="12"
                     md="7"
                     lg="8">
                <v-text-field v-model="email"
                              :rules="emailRules"
                              name="email"
                              single-line
                              outlined
                              solo
                              flat
                              dense
                              required
                              filled />
              </v-col>

              <v-col cols="12"
                     md="5"
                     lg="4">
                <v-subheader>ご検討中のサービス*</v-subheader>
              </v-col>
              <v-col cols="12"
                     md="7"
                     lg="8">
                <v-checkbox v-model="serviceSelect"
                            :input-value="serviceSelect"
                            name="select-service[]"
                            class="p-top-contact--check"
                            :rules="selectRules"
                            light
                            hide-details
                            dense
                            color="info"
                            value="サーバーレスコンサルティング">
                  <template v-slot:label>
                    <div class="info--text p-top-contact--check-label">サーバーレスコンサルティング</div>
                  </template>
                </v-checkbox>
                <v-checkbox v-model="serviceSelect"
                            :input-value="serviceSelect"
                            name="select-service[]"
                            class="p-top-contact--check"
                            :rules="selectRules"
                            light
                            hide-details
                            dense
                            color="info"
                            value="サーバーレスディベロップメント">
                  <template v-slot:label>
                    <div class="info--text p-top-contact--check-label">サーバーレスディベロップメント</div>
                  </template>
                </v-checkbox>
                <v-checkbox v-model="serviceSelect"
                            :input-value="serviceSelect"
                            name="select-service[]"
                            class="p-top-contact--check"
                            :rules="selectRules"
                            light
                            dense
                            color="info"
                            value="その他">
                  <template v-slot:label>
                    <div class="info--text p-top-contact--check-label">その他</div>
                  </template>
                </v-checkbox>
              </v-col>

              <v-col cols="12"
                     md="5"
                     lg="4">
                <v-subheader>ご相談<br class="d-none d-md-block"><span class="d-block d-md-none">・</span>お問い合わせ内容*</v-subheader>
              </v-col>
              <v-col cols="12"
                     md="7"
                     lg="8">
                <v-textarea v-model="message"
                            name="message"
                            :rules="messageRules"
                            solo
                            outlined
                            flat
                            required
                            filled />
              </v-col>

            </div>
            <v-row align="center"
                   justify="end">
              <v-col cols="12"
                     md="7"
                     lg="8">
                <p class="p-top-contact--note">
                  <g-link to="/privacy-policy">個人情報保護方針</g-link>をご覧いただき、内容に同意いただけましたら、下記の送信ボタンを押してください。
                </p>
              </v-col>
            </v-row>
            <v-row align="center"
                   justify="center"
                   justify-md="end">
              <v-btn :disabled="!valid"
                     class="mr-4"
                     large
                     depressed
                     tile
                     light
                     color="info"
                     type="submit">上記の内容で送信する</v-btn>
            </v-row>
          </v-form>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['news'],
  data() {
    return {
      valid: true,
      name: '',
      nameFurigana: '',
      companyName: '',
      message: '',
      serviceSelect: [],
      nameRules: [v => !!v || 'お名前（漢字）は必須です。'],
      nameFuriganaRules: [v => !!v || 'お名前（ふりがな）は必須です。'],
      email: '',
      emailRules: [
        v => !!v || 'Eメールは必須です。',
        v => /.+@.+/.test(v) || 'Eメールの形式ではありません'
      ],
      messageRules: [v => !!v || 'ご相談・お問い合わせ内容は必須です。']
    }
  },
  computed: {
    selectRules() {
      return [this.serviceSelect.length > 0 || 'ご検討中のサービスは必須です。']
    }
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = new String(date.getFullYear())
      const mm = new String(date.getMonth() + 1).padStart(2, '0')
      const dd = new String(date.getDate()).padStart(2, '0')
      return `${yyyy}.${mm}.${dd}`
    }
  }
}
</script>

<style lang="scss" scoped>
.v-content {
  width: 100vw;
  background-image: url('../assets/images/top-news-contact-bk.svg');
  background-position: center 420px;
  background-size: 300%;
  background-color: $light-gray-2;
  position: relative;
  z-index: 1;
  @include media-breakpoint-up(md) {
    background-position: center 420px;
    background-size: 100%;
  }
  @include media-breakpoint-up(lg) {
    background-position: center 350px;
  }
  h2 {
    margin-top: 24px;
    font-size: 4rem;
    font-family: $font-en-normal;
    font-weight: normal;
    line-height: 1.25;
    @include media-breakpoint-up(md) {
      margin-top: 88px;
    }
    span {
      display: block;
      font-size: 1rem;
      margin-top: 8px;
      font-weight: normal;
      font-family: $font-jp-normal;
    }
  }
  .p-top-news {
    &--title {
      color: $primary;
    }
    &--more {
      text-align: right;
      z-index: 3;
      position: relative;
      a {
        color: $primary;
        font-family: $font-en-normal;
        font-size: 1rem;
        text-decoration: none;
        display: inline-block;
        position: relative;
        &::before {
          content: '';
          background-image: url('../assets/images/top-news-more-object.svg');
          display: inline-block;
          height: 16px;
          width: 16px;
          position: absolute;
          top: 4px;
          left: -24px;
        }
      }
    }
  }

  // ニュースのカード部分
  .p-news-contents {
    color: $black;
    font-family: $font-jp-normal;
    z-index: 1;
    position: relative;
    // hoverしたとき、画像部分に左から右へprimaryをかける
    &__image-cover {
      &:after {
        position: absolute;
        content: '';
        display: block;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleX(0);
        transform-origin: left;
        will-change: transform;
        transition: all 0.4s cubic-bezier(0.76, 0, 0.3, 1);
        background-color: rgba($primary, 0.4);
      }
    } // &__image-cover
    // アイキャッチ部分
    &__image {
      position: relative;
      overflow: hidden;
      background: $primary;

      // アイキャッチ、左下と右上の装飾
      &::before,
      &::after {
        z-index: 2;
        content: '';
        display: block;
        width: 33.6%;
        height: 33.6%;
        background-color: $white;
        transform: rotate(-45deg);
        position: absolute;
      }
      &::before {
        top: -17.8%;
        right: -17.8%;
      }
      &::after {
        bottom: -17.8%;
        left: -17.8%;
      }

      // アイキャッチ画像
      img {
        object-fit: cover;
        width: 100%;
        height: calc((98vw / 2) - 24px);
        display: block;
        position: relative;
        @include media-breakpoint-up(md) {
          height: 208px;
        }
        @include media-breakpoint-up(lg) {
          height: 270px;
        }
        @include media-breakpoint-up(xl) {
          height: 270px;
        }
      } // img
    } // &__image

    // お知らせのカード
    &__card {
      position: relative;
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
      &:hover {
        // アイキャッチにprimary colorがかかる
        .p-news-contents__image-cover::after {
          transform: scaleX(1);
          transform-origin: right center;
        }
        // タイトルの色がprimaryに
        .p-news-contents__title {
          color: $primary;
        }
      }
    } // &__card

    // 日付とタイトル部分
    &__title-block {
      min-height: 100px;
      @include media-breakpoint-up(sm) {
        min-height: 112px;
      }
      @include media-breakpoint-up(md) {
        min-height: 148px;
      }
    } // &__title-block

    // 記事日付
    &__date {
      padding: 24px 16px 4px 16px;
      line-height: 1;
      font-size: 0.75rem;
      color: $mid-gray-2;
      @include media-breakpoint-up(sm) {
        padding: 24px 20px 8px 20px;
        font-size: 0.875rem;
      }
      @include media-breakpoint-up(md) {
        padding: 42px 22px 5px;
      }
    } // &__date

    // 記事タイトル
    &__title {
      font-size: 0.875rem;
      padding: 4px 16px 24px 16px;
      line-height: 1.5;
      text-align: justify;
      color: $black;
      @include media-breakpoint-up(sm) {
        font-size: 1rem;
        padding: 5px 16px 24px;
      }
      @include media-breakpoint-up(md) {
        padding: 5px 22px 24px;
      }
    } // &__title

    .v-card--link:focus:before {
      opacity: 0;
    }
  } // p-news-contents

  .c-card-border {
    border: 1px solid none;
    position: relative;
    height: 100%;
    z-index: 2;
    // 線の設定
    &::before {
      z-index: 1;
      background-color: $primary;
      content: '';
      display: block;
      position: absolute;
      transition: transform 0.4s cubic-bezier(0.76, 0, 0.3, 1);
      transform: scaleX(0);
      transform-origin: right center;
      bottom: 0px;
      height: 1px;
      left: 0;
      width: 100%;
    }

    // ホバー時に右から左へ線が広がる
    &:hover::before {
      transform: scaleX(1);
      transform-origin: left center;
      transition: transform 0.4s cubic-bezier(0.76, 0, 0.3, 1);
    }
  } // .c-card-border

  .p-top-contact {
    &--title {
      color: $tertiary;
      position: relative;
      z-index: 3;
    }
    &--paragraph {
      margin-top: 32px;
      margin-bottom: 0;
      color: $tertiary;
      font-family: $font-jp-normal;
      font-size: 1rem;
      text-align: justify;
      line-height: 2;
      position: relative;
      z-index: 3;
      @include media-breakpoint-up(md) {
        margin-top: 80px;
        margin-bottom: 500px;
      }
    }
    &--form {
      position: relative;
      padding-right: 24px;
      padding-left: 12px;
      margin-top: -48px;
      bottom: -72px;

      @include media-breakpoint-up(md) {
        position: absolute;
        right: 16px;
        margin-top: 0;
      }
      @include media-breakpoint-up(lg) {
        // right: 56px;
        left: calc((100vw - 1200px) / 2 + 520px);
        max-width: 720px;
      }
      @include media-breakpoint-up(xl) {
        // right: 56px;
        left: calc((100vw - 1232px) / 2 + 534px);
        max-width: 720px;
      }
    }
    &--form-shadow {
      display: block;
      z-index: 1;
      position: absolute;
      top: 24px;
      left: 24px;
      width: calc(100% - 36px);
      height: calc(100% - 24px);
      background: linear-gradient(49.74deg, #00007d 11.76%, #2c48ff 88.21%);
      box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
      @include media-breakpoint-up(md) {
        top: 24px;
        left: 24px;
        width: calc(100% - 36px);
        height: calc(100% - 24px);
      }
    }
    &--check {
      margin-top: 0;
      margin-bottom: 8px;
      &:last-of-type {
        margin-bottom: 24px;
      }
    }
    &--check-label {
      font-family: $font-jp-normal;
    }
    &--note {
      padding-top: 28px;
      border-top: 1px solid $light-gray-1;
      color: $tertiary;
      font-family: $font-jp-normal;
      font-size: 1rem;
      a {
        text-decoration: none;
        color: $tertiary;
        font-weight: bold;
      }
    }
  }

  .v-input__slot .v-label,
  .v-form label.v-label {
    color: $tertiary !important;
  }
  .v-form {
    background-color: $white;
    padding: 56px 32px;
    border-left: 1px solid $tertiary;
    position: relative;
    z-index: 2;
    box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
    &::before {
      background-color: $white;
    }
    @include media-breakpoint-up(md) {
      padding: 80px 32px;
    }
    @include media-breakpoint-up(lg) {
      padding: 80px 48px;
    }
  }
  .v-subheader {
    color: $tertiary;
    font-size: 1rem;
    font-family: $font-jp-normal;
    align-items: baseline;
    padding-left: 0;
    height: 100%;
    margin-bottom: 8px;
  }
  .v-btn {
    font-family: $font-jp-normal;
    clip-path: polygon(
      calc(100% - 8px) 0,
      0 0,
      0 calc(100% - 8px),
      8px 100%,
      100% 100%,
      100% 8px
    );
  }
  .theme--light.v-btn.v-btn--disabled:not(.v-btn--text):not(.v-btn--outlined) {
    background-color: $light-gray-1 !important;
  }
}

// 右下下がりの背景パターン
// .p-news-bg {
//   pointer-events: none;
//   background: url('~assets/images/pattern-bg-right.svg') no-repeat 50% 59px;
//   width: 100%;
//   background-size: cover;
//   position: absolute;
//   top: 5%;
//   height: 1000px;
//   @include media-breakpoint-up(sm) {
//     top: 21%;
//     height: 1000px;
//   }
//   @include media-breakpoint-up(md) {
//     top: 18%;
//     height: 800px;
//   }
//   @include media-breakpoint-up(lg) {
//     top: 12%;
//     height: 1300px;
//   }
// } // p-news-bg
</style>