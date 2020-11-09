<template>
  <div class="v-content">
    <div class="container">

      <v-row align="center"
             justify="center">
        <v-col cols="11">
          <h2>オンライン無料相談</h2>
          <h3>サーバーレスの悩み事、お気軽にご相談ください</h3>
        </v-col>
      </v-row>
      <v-row 
        align="center"
        justify="center"
      >
        <v-col
          cols="10"
          md="6"
        >
          <p class="p-cta__paragraph">
            Serverless Operations の担当者がオンラインで皆さんのサーバーレスに関するご相談やお問い合わせに無料でお答えいたします。
              <a href="https://calendly.com/slsops/office-hours">カレンダー
                <small>(Calendly)</small>
              </a>
            からお好きな日程をブッキングしていたくだけで、お申込みいただけます。
          </p>
        </v-col>
      </v-row>

      <v-row align="center"
             justify="center"
             justify-md="space-between"
             class="mt-12 mb-12">
        <v-col cols="12"
               sm="10"
               md="6"
               >
          <v-card 
            flat
            to="/services/serverless-consulting/"
            :hover="false"
            height="158px"
            width="100%"
            class="d-flex justify-center align-center p-cta__consulting theme--dark"
          >
           
            <v-card-title class="flex-column justify-end justify-sm-center align-start p-cta__menu">
              <span class="p-cta__menu--top">Serverless</span>
              Consulting
              <span class="p-cta__menu--bottom">サーバーレスコンサルテイング</span>
            </v-card-title>
          </v-card>

          <v-card flat
                  to="/services/serverless-development"
                  height="158px"
                  width="100%"
                  class="d-flex justify-center align-center p-cta__development theme--dark">
            
            <v-card-title class="flex-column justify-end justify-sm-center align-start p-cta__menu">
              <span class="p-cta__menu--top">Serverless</span>
              Development
              <span class="p-cta__menu--bottom">サーバーレスディベロップメント</span>
            </v-card-title>
          </v-card>

        </v-col>
        <v-col cols="12"
               sm="8"
               md="5">
          <v-card color="#FFFFFF"
                  class="d-flex justify-center align-center p-cta__contact"
                  to="/contact">
            <h3 class="d-flex justify-center align-center">Contact<span>お問い合わせ</span></h3>
          </v-card>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-content {
  background: url('../assets/images/cta-logo.svg') no-repeat,
    linear-gradient(206.56deg, $tertiary -0.06%, $secondary 100.25%);
  background-repeat: no-repeat, no-repeat;
  background-position: top 88px center, center;
  background-size: 100%;
  // margin-top: -72px;
  h2 {
    margin-top: 120px;
    font-size: 1.5rem;
    text-align: center;
    font-family: $font-jp-normal;
    font-weight: normal;
    @include media-breakpoint-up(md) {
      font-size: 2.5rem;
    }
    span {
      display: block;
      font-size: 1.125rem;
      margin-bottom: 8px;
      opacity: 0.5;
      font-weight: normal;
      font-family: $font-en-normal;
      @include media-breakpoint-up(md) {
        font-size: 1.5rem;
      }
    }
  }
  h3 {
    text-align: center;
  }
  .v-card__link:focus:before {
    opacity: 0;
  }

  .p-cta {
    &__paragraph {
      font-family: $font-jp-normal;
      font-size: 1rem;
      text-align: justify;
      line-height: 2;
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    &__contact {
      height: 48px;
      @include media-breakpoint-up(md) {
        height: 100px;
      }

      h3 {
        color: $tertiary;
        font-size: 2rem;
        padding: 0;
        line-height: 1;
        font-family: $font-en-normal;
        font-weight: normal;
        @include media-breakpoint-up(md) {
          font-size: 3.5rem;
        }
        span {
          display: inline-block;
          font-size: 0.875rem;
          margin-left: 28px;
          @include media-breakpoint-up(md) {
            font-size: 1rem;
          }
        } //span
      } // h3
    }
    // コンサルティング、ディベロップメントのメニュー
    &__consulting,
    &__development {
      background-color: initial;
      background-repeat: no-repeat;
      background-position: right 20px bottom 54px;
      background-size: auto;
      @include media-breakpoint-up(sm) {
        background-position: right 20px center;
      }
      @include media-breakpoint-up(md) {
        background-size: auto;
      }
    }
    // コンサルティング
    &__consulting {
      background-image: url('../assets/images/cta-arrow.svg');
      margin-bottom: 16px;
      position: relative;
      @include media-breakpoint-up(md) {
        margin-bottom: 64px;
        position: relative;
      }

      // コンサルティングの背景のアイコン
      &:after {
        pointer-events: none;
        display: block;
        width: 100%;
        height: 100%;
        content: ' ';
        position: absolute;
        background: url('../assets/images/service-icon-consulting.svg');
        background-repeat: no-repeat;
        background-position: left top 8px;
        background-size: auto 80%;
        opacity: 0.6;
        z-index: 1;
        @include media-breakpoint-up(md) {
          background-size: auto 90%;
        }
      } //&:after
    } // &__consulting

    // ディベロップメント
    &__development {
      background-image: url('../assets/images/cta-arrow.svg');
      margin-bottom: 32px;
      position: relative;
      @include media-breakpoint-up(md) {
        margin-bottom: 0;
      }
      // 背景のアイコン
      &:after {
        pointer-events: none;
        display: block;
        width: 100%;
        height: 100%;
        content: ' ';
        position: absolute;
        background: url('../assets/images/service-icon-development.svg');
        background-repeat: no-repeat;
        background-position: left top 8px;
        background-size: auto 80%;
        opacity: 0.7;
        z-index: 1;
        @include media-breakpoint-up(md) {
          background-size: auto 90%;
        }
      } //&:after
    } // &__development

    // CTAのリンクメニュー名部分
    &__menu {
      padding-left: 0;
      font-size: 2rem;
      font-family: $font-en-normal;
      font-weight: normal;
      height: 100%;

      @include media-breakpoint-up(md) {
        padding-left: 64px;
        font-size: 3rem;
      }

      // メニュー上のServerless
      &--top {
        display: block;
        font-size: 0.75rem;
        margin: 8px 0 14px;
        font-family: $font-jp-normal;
        line-height: 1;
        @include media-breakpoint-up(lg) {
          font-size: 1.5rem;
        }
      }

      // メニュー下のサービス名(日本語)
      &--bottom {
        display: block;
        font-size: 0.875rem;
        margin-top: 12px;
        @include media-breakpoint-up(lg) {
          font-size: 1rem;
        }
      }
    }
  } // p-cta
}
</style>