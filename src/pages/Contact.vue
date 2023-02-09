<template>
  <Layout>
    <div class="v-content__wrap">
      <div class="l-contact-page">
        <!-- ページヘッダー -->
        <div class="p-contact-header">
          <div class="p-contact-header__tryangle"></div>
          <div class="p-contact-header__main-img">
            <!--背景 -->
            <img
              src="@/assets/images/company-main-bg.svg"
              class="p-contact-header__main-bg d-none d-md-block"
            />
            <!-- 粒子 -->
            <img
              src="@/assets/images/company-main-particle.svg"
              class="p-contact-header__main-particle d-none d-md-block"
            />

            <!-- ロゴ -->
            <img
              src="@/assets/images/company-main-logo.svg"
              class="p-contact-header__main-logo d-none d-md-block"
            />
            <!-- スマホ時の画像 -->
            <img
              src="@/assets/images/company-main-logo-sp.svg"
              class="p-contact-header__logo-sp d-md-none"
            />
          </div>

          <v-container class="p-contact-header__container">
            <v-row>
              <v-col cols="12" md="6">
                <h2 class="p-contact-header__title">
                  Contact
                  <span class="p-contact-header__title-jp">お問い合わせ</span>
                </h2>
                <p class="p-contact-header__text">
                  サーバーレスアプリケーションの設計・開発・保守運用等についてお困りの方は、こちらのフォームから気軽にお問い合わせください。2〜3営業日以内にメールで返信いたします。
                </p>
                <!-- <div class="d-md-none p-contact-header__scroll-block">
                  <span class="p-contact-header__scroll">Scroll</span>
                  <div class="p-contact-header__scroll-line"></div>
                </div> -->
              </v-col>
            </v-row>
          </v-container>
        </div>

        <contact-form />
      </div>
    </div>
    <!-- l-contact-page -->
  </Layout>
</template>

<script>
import ContactForm from "~/components/ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
  metaInfo() {
    return {
      title: "お問い合わせ",
      meta: [
        {
          key: `og:url`,
          property: `og:url`,
          content: `https://serverless.co.jp/contact`,
        },
      ],
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: `https://serverless.co.jp/contact`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.l-contact-page {
  background: $white;
  position: relative;
}
// ページの見出し
.p-contact-header {
  // background-image: ;
  background: no-repeat url("../assets/images/company-main-pattern.svg"),
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
    font-family: $font-jp-regular;
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
    font-family: $font-jp-regular;
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
</style>
