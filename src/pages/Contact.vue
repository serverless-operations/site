<template>
  <Layout>
    <div class="v-content__wrap">
  
      <div class="l-contact-page">
        <!-- ページヘッダー -->
        <div class="p-contact-header">
          <div class="p-contact-header__tryangle"></div>
          <div class="p-contact-header__main-img">
            <!--背景 -->
            <img src="@/assets/images/company-main-bg.svg"
                class="p-contact-header__main-bg d-none d-md-block">
            <!-- 粒子 -->
            <img src="@/assets/images/company-main-particle.svg"
                class="p-contact-header__main-particle d-none d-md-block">

            <!-- ロゴ -->
            <img src="@/assets/images/company-main-logo.svg"
                class="p-contact-header__main-logo d-none d-md-block">
            <!-- スマホ時の画像 -->
            <img src="@/assets/images/company-main-logo-sp.svg"
                class="p-contact-header__logo-sp d-md-none" />
          </div>
          <v-container class="p-contact-header__container">
            <v-row>
              <v-col cols="12"
                    md="6">
                <h2 class="p-contact-header__title">
                  Contact
                  <span class="p-contact-header__title-jp">お問い合わせ</span>
                </h2>
                <p class="p-contact-header__text">サーバーレスアプリケーションの設計・開発・保守運用等についてお困りの方は、こちらのフォームから気軽にお問い合わせください。2〜3営業日以内にメールで返信いたします。</p>
                <!-- <div class="d-md-none p-contact-header__scroll-block">
                  <span class="p-contact-header__scroll">Scroll</span>
                  <div class="p-contact-header__scroll-line"></div>
                </div> -->
              </v-col>
            </v-row>
          </v-container>
        </div>

        <v-container class="p-top-contact--container">
          <v-row align="center" justify="center">
            <v-col cols="12" md="10" lg="8" class="p-top-contact--form">
              <div class="p-top-contact--form-shadow" />

                <form action="https://formspree.io/xpzypqoe" method="POST" class="v-form">
                  <v-row no-gutters>
                    <v-col cols="12" sm="4" md="5" lg="4">
                      <v-subheader>お名前<small>（漢字）</small></v-subheader>
                    </v-col>
                    <v-col cols="12" sm="8" md="7" lg="8">
                      <v-text-field name="name"/>
                    </v-col>

                    <v-col cols="12" sm="4" md="5" lg="4">
                      <v-subheader>お名前<small>（ふりがな）</small></v-subheader>
                    </v-col>
                    <v-col cols="12" sm="8" md="7" lg="8">
                      <v-text-field name="name"/>
                    </v-col>

                    <v-col cols="12" sm="4" md="5" lg="4">
                      <v-subheader>会社名</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="8" md="7" lg="8">
                      <v-text-field name="name"/>
                    </v-col>

                    <v-col cols="12" sm="4" md="5" lg="4">
                      <v-subheader>Eメール</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="8" md="7" lg="8">
                      <v-text-field name="_replyto"/>
                    </v-col>

                    <v-col cols="12" sm="4" md="5" lg="4">
                      <v-subheader>ご検討中のサービス</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="8" md="7" lg="8">
                      <label class="info--text p-top-contact--check-label info">
                        <input type="checkbox" name="serverless-consulting" value="サーバーレスコンサルティング"> 
                        サーバーレスコンサルティング
                      </label>
                      <label class="info--text p-top-contact--check-label info">
                        <input type="checkbox" name="serverless-development" value="サーバーレスディベロップメント"> 
                        サーバーレスディベロップメント
                      </label>
                      <label class="info--text p-top-contact--check-label info">
                        <input type="checkbox" name="other" value="その他" > 
                        その他
                      </label>
                    </v-col>

                    <v-col cols="12" sm="4" md="5" lg="4">
                      <v-subheader>ご相談<br class="d-none d-sm-block">
                        <span class="d-block d-sm-none">・</span>お問い合わせ内容*
                      </v-subheader>
                    </v-col>
                    <v-col cols="12" sm="8" md="7" lg="8">
                      <v-textarea v-model="message" name="message"/>
                    </v-col>
  
                  </v-row>

                  <v-row align="center" justify="end">
                    <v-col cols="12" sm="8" md="7" lg="8">
                      <p class="p-top-contact--note">
                        <nuxt-link to="/privacy-policy">個人情報保護方針</nuxt-link>をご覧いただき、内容に同意いただけましたら、下記の送信ボタンを押してください。
                      </p>
                    </v-col>
                  </v-row>

                  <v-row align="center" justify="center" justify-sm="end">
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
      </div>

    </div>
  </Layout>
</template>

<script>
export default {

}

</script>

<style lang="scss" scoped>
.l-contact-page {
  background: $white;
  position: relative;
}
// ページの見出し
.p-contact-header {
  // background-image: ;
  background: no-repeat url('../assets/images/company-main-pattern.svg'),
    linear-gradient(205.01deg, #2c48ff -0.06%, #02007c 100.25%);
  overflow: hidden;
  // height: 80vh;
  max-height: 840px;
  position: relative;
  @include media-breakpoint-up(md) {
    max-height: 640px;
  }
  @include media-breakpoint-up(lg) {
    max-height: 840px;
  }
  &__tryangle {
    height: 150px;
    width: 150px;
    background: $white;
    position: absolute;
    bottom: -91px;
    left: -91px;
    transform: rotate(45deg);
    z-index: 3;
    @include media-breakpoint-up(lg) {
      height: 180px;
      width: 180px;
    }
  }
  // メインイメージ部分のコンテナ
  &__container {
    z-index: 3;
    position: relative;
  }
  // メインイメージ部分
  &__main-img {
    position: absolute;
    max-height: 840px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  // メインイメージ、ロゴ
  &__main-logo {
    position: absolute;
    display: block;
    width: auto;
    height: 100%;
    right: 0;
  }
  // メインイメージ、背景
  &__main-bg {
    position: absolute;
    right: 0;
    display: block;
    mix-blend-mode: soft-light;
    width: auto;
    height: 100%;
  }
  // メインイメージ、粒子
  &__main-particle {
    position: absolute;
    right: 0;
    display: block;
    width: auto;
    height: 100%;
  }
  // スマホ時のロゴ
  &__logo-sp {
    width: 100%;
    max-height: 812px;
    display: block;
    // margin-top: 48px;
    @include media-breakpoint-up(md) {
      max-height: 640px;
      // height: 50vh;
      right: 0;
      width: auto;
      margin-top: 0;
    }
    @include media-breakpoint-up(lg) {
      // height: 80vh;
      max-height: 840px;
    }
  }
  // ページタイトル
  &__title {
    font-family: $font-en-normal;
    line-height: 0.8;
    font-size: 4.5rem;
    margin-top: 160px;
    margin-bottom: 65px;
    @include media-breakpoint-up(lg) {
      font-size: 6.25rem;
      margin-top: 215px;
      margin-bottom: 80px;
    }
  }
  // 日本語のタイトル
  &__title-jp {
    display: block;
    font-family: $font-jp-normal;
    font-size: 1.5rem;
    margin-top: 8px;
    @include media-breakpoint-up(lg) {
      margin-top: 16px;
    }
  }
  // タイトル下文章の見出し
  &__text-header {
    font-family: $font-jp-bold;
    font-size: 1.5rem;
    @include media-breakpoint-up(lg) {
      font-size: 2.1rem;
    }
  }
  // タイトル下文章
  &__text {
    font-family: $font-jp-normal;
    line-height: 32px;
    margin-bottom: 212px;
    @include media-breakpoint-up(lg) {
      margin-bottom: 204px;
    }
  }
  &__scroll-block {
    position: absolute;
    bottom: 140px;
    right: 0;
  }
  &__scroll {
    writing-mode: vertical-lr;
  }
  &__scroll-line {
    position: absolute;
    bottom: -94px;
    right: 12px;
    height: 88px;
    width: 2px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
}

.v-content {
  .p-top-contact {
    &--container {
      padding-bottom: 160px;
    }

    &--form {
      position: relative;
      padding-right: 24px;
      padding-left: 12px;
      margin-top: -96px;
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
      color: $primary;
      display: block;
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
    z-index: 3;
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
    background-color: $primary;
    clip-path: polygon(
      calc(100% - 8px) 0,
      0 0,
      0 calc(100% - 8px),
      8px 100%,
      100% 100%,
      100% 8px
    );
  }
  
}
</style>








