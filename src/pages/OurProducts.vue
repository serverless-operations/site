<template>
  <Layout>
    <div class="v-content__wrap">

  <div class="l-company-page">
    <!-- ページヘッダー -->
    <div class="p-company-header">
      <div class="p-company-header__tryangle"></div>
      <div class="p-company-header__main-img">

        <img src="@/assets/images/company-main-bg.svg"
             class="p-company-header__main-bg d-none d-md-block" alt="メインイメージ背景イラスト">
        
        <img src="@/assets/images/company-main-particle.svg"
             class="p-company-header__main-particle d-none d-md-block" alt="Serverless Operations メインイメージパーティクル">
       
        <img src="@/assets/images/our-products/oss-main-icon.svg" class="p-company-header__main-logo d-block" alt="Serverless Operations Our Productsイラスト">

      </div>
      <v-container class="p-company-header__container">
        <v-row>
          <v-col cols="12"
                 md="6">
            <h1 class="p-company-header__title">
              Our<br>
              Products
              <span class="p-company-header__title-jp">私たちが開発したプロダクト</span>
            </h1> 
            <p class="p-company-header__text">サーバーレスアプリケーションの開発をより簡単に・容易にするために、私たちが独自に開発したプロダクトをご紹介します。</p>
          </v-col>
        </v-row>
      </v-container>
    </div>

  <!-- 会社案内のテーブルのセクション -->
    <section class="p-our-products">
      <v-container>

        <div class="cards">
          <div class="cards-container">
            <v-row>
              <v-col class="d-flex" cols="12" md="6">
                <img class="cards-img" src="@/assets/images/our-products/jeffy-logo.svg" alt="Jeffy ロゴマーク">
              </v-col>
              <v-col cols="12" md="6">
                <h3 class="cards-title jeffy-title">Jeffy</h3>
                <div class="github-buttons">
                  <gh-btns-star slug="serverless-operations/jeffy" show-count></gh-btns-star>
                </div>
                <p class="cards-text">
                  AWS LambdaのPython向けのサーバーレスアプリケーションフレームワーク。Lambdaをよりシンプルに実装するためのツールセットを提供しています。
                </p>
                <a class="github-repository-link primary-button" href="https://github.com/serverless-operations/jeffy" v-ripple>
                  <span>Github</span>
                </a>
              </v-col>
            </v-row>
          </div>
          <div class="blue-drop-shadow"></div>
        </div>

        <v-row>
          <v-col class="d-flex" cols="12" md="6">
            <div class="cards d-flex">
              <div class="cards-container">
                <h3 class="cards-title title-min-height">
                  <span>Serverless</span><br>
                  Step Functions
                </h3>
                <div class="github-buttons">
                  <gh-btns-star slug="serverless-operations/serverless-step-functions" show-count></gh-btns-star>
                </div>
                <p class="cards-text">
                  AWS Step Functionsの構成を管理してデプロイするためのServerless Frameworkプラグイン
                </p>
                <a class="github-repository-link primary-button" href="https://github.com/serverless-operations/serverless-step-functions">
                  <span>Github</span>
                </a>
              </div>
              <div class="blue-drop-shadow"></div>
            </div>
          </v-col>

          <v-col class="d-flex" cols="12" md="6">
            <div class="cards d-flex">
              <div class="cards-container">
                <h3 class="cards-title">
                  <span>Serverless</span><br>
                  API Gateway Service Proxy
                </h3>
                <div class="github-buttons">
                  <gh-btns-star slug="serverless-operations/serverless-apigateway-service-proxy" show-count></gh-btns-star>
                </div>
                <p class="cards-text">
                  API Gatewayと他のAWSサービスをLambda無しで直接インテグレーションを行うAWS Service Proxyの機能を簡単に構成管理するためのServerless Frameworkプラグイン
                </p>
                <a class="github-repository-link primary-button" href="https://github.com/serverless-operations/serverless-apigateway-service-proxy">
                  <span>Github</span>  
                </a>
              </div>
              <div class="blue-drop-shadow"></div>
            </div>
          </v-col>

          <v-col class="d-flex" cols="12" md="6">
            <div class="cards d-flex">
              <div class="cards-container">
                <h3 class="cards-title">
                  <span>Serverless</span><br>
                  Dashboard for Atom
                </h3>
                <div class="github-buttons">
                  <gh-btns-star slug="serverless-operations/serverless-dashboard-for-atom" show-count></gh-btns-star>
                </div>
                <p class="cards-text">
                   GUIからServerless Frameworkを使いクラウド環境へ構成をデプロイ、可視化するためのAtomエディターアドオン
                </p>
                <a class="github-repository-link primary-button" href="https://github.com/serverless-operations/serverless-dashboard-for-atom">
                  <span>Github</span>  
                </a>
              </div>
              <div class="blue-drop-shadow"></div>
            </div>
          </v-col>

          <v-col class="d-flex" cols="12" md="6">
            <div class="cards d-flex">
              <div class="cards-container">
                <h3 class="cards-title">
                  <span>Serverless</span><br>
                  Delete Loggroups
                </h3>
                <div class="github-buttons">
                  <gh-btns-star slug="serverless-operations/serverless-delete-loggroups" show-count></gh-btns-star>
                </div>
                <p class="cards-text">
                  Serverless Frameworkのv1.6で発生したLog Groupの変更に対応するためのプラグイン
                </p>
                <a class="github-repository-link primary-button" href="https://github.com/serverless-operations/serverless-delete-loggroups">
                  <span>Github</span>
                </a>
              </div>
              <div class="blue-drop-shadow"></div>
            </div>
          </v-col>

        </v-row>
      </v-container>   
    </section><!-- p-company-vmv -->

  </div>


    </div>
  </Layout>
</template>

<script>

//import Meta from '~/assets/mixins/meta'
import Vue from 'vue';
import VueGitHubButtons from 'vue-github-buttons';

// Stylesheet
// import 'vue-github-buttons/dist/vue-github-buttons.css';

Vue.use(VueGitHubButtons);
// Or if your don't want to use cache
Vue.use(VueGitHubButtons, { useCache: false });

export default {
  // mixins: [Meta],
  metaInfo () {
    return {
      title: '私達が開発したプロダクト',
      description: 'サーバーレスアプリケーションの開発をより簡単に・容易にするために、私たちが独自に開発したプロダクトをご紹介します。'
    }
  },
  components: {
    VueGitHubButtons
  },
  fetch({ store }) {
    store.commit('resetModal')
  },
  scrollToTop: true
}
</script>

<style lang="scss" scoped>
.l-company-page {
  background: $white;
  position: relative;
  overflow: hidden;
}
// ページの見出し
.p-company-header {
  background: no-repeat url('../assets/images/company-main-pattern.svg'),
    linear-gradient(205.01deg, #2c48ff -0.06%, #02007c 100.25%);
  background-size: cover;
  overflow: hidden;
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
    overflow: hidden;
  }
  // メインイメージ、ロゴ
  &__main-logo {
    position: absolute;
    display: block;
    width: 90%;
    margin: 0 auto;
    top: 10%;
    height: 80%;
    right: 0;
    opacity: 0.5;
    @include media-breakpoint-up(md) {
      opacity: 1;
      width: auto;
    }
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
    margin-bottom: 32px;
    @include media-breakpoint-up(lg) {
      font-size: 6.25rem;
      margin-top: 215px;
      margin-bottom: 40px;
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
    margin-bottom: 204px;
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

.p-our-products {
  padding: 120px 0;
  background: no-repeat url('../assets/images/company-bg-img.svg');
  background-position: -100px 765px;
  background-size: cover;
  @include media-breakpoint-up(md) {
    background: no-repeat url('../assets/images/company-bg-img.svg');
    background-position: -100px 750px;
  }
  .cards {
    color: $dark-gray;
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
    width: 100%;
    .cards-container {
      background: $white;
      padding: 32px;
      width: 100%;
    }
    .cards-img {
      flex:0 1 auto;
      margin:auto;
    }
    .cards-title {
      color: $primary;
      font-size: 40px;
      line-height: 1;
      margin-bottom: 16px;
      font-family: $font-en-normal;
      @include media-breakpoint-up(md) {
        min-height: 120px;
        &.jeffy-title {
          min-height: auto;
        }
      }
      span {
        font-size: 24px;
      }
    }
    .github-buttons {
      display: block;
      margin-bottom: 24px;
      clear: both;
    }
    .cards-text {
      padding: 24px 0 40px 0;
      display: block;
      clear: both;
      @include media-breakpoint-up(md) {
        min-height: 160px;
      }
    }
    .github-repository-link {
      display: block;
    }
    .primary-button {
      text-align: center;
      width: 100%;
      display: block;
      padding: 12px 0;
      margin: 0 auto;
      font-family: $font-en-normal;
      background: $tertiary;
      clip-path: polygon(
        calc(100% - 12px) 0,
        0 0,
        0 calc(100% - 12px),
        12px 100%,
        100% 100%,
        100% 12px
      );
      color: $white;
      text-decoration: none;
      span {
        &::after {
          vertical-align: middle;
          margin-left: 8px;
          content: url("../assets/images/our-products/github-icon.svg");
        }
      }
      @include media-breakpoint-up(md) {
        width: 50%;
        margin-left: 50%;
      }
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /deep/ .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-top;
  }

  /deep/ .octicon.spin {
    animation: spin 1s linear 0s infinite;
  }

  /deep/ .gh-button-container {
    display: inline-block;
    float: left;
    margin: 0 5px;
  }

  /deep/ .gh-button-container a {
    text-decoration: none !important;
    color: $primary;
  }

  /deep/ .gh-button-container.loading {
    visibility: hidden;
  }

  /deep/ .gh-button {
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
    background-position: -1px -1px;
    background-repeat: repeat-x;
    background-size: 110% 110%;
    border-radius: 0.25em;
    border: 1px solid rgba(27, 31, 35, 0.2);
    color: #24292e;
    cursor: pointer;
    display: inline-block;
    float: left;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    padding: 3px 10px;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
  }

  /deep/ .gh-button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /deep/ .gh-button:hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
    background-position: 0 -0.5em;
    background-repeat: repeat-x;
    border-color: rgba(27, 31, 35, 0.35);
    text-decoration: none !important;
  }

  /deep/ .gh-button:active {
    background-color: #e9ecef;
    background-image: none;
    border-color: rgba(27, 31, 35, 0.35);
    box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
  }

  /deep/ .gh-button:focus {
    box-shadow: 0 0 0 0.2em rgba(3, 102, 214, 0.3);
    outline: 0;
  }

  /deep/ .gh-button.with-count {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  /deep/ a.social-count {
    background-color: #fff;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    border-top: 1px solid rgba(27, 31, 35, 0.2);
    border-right: 1px solid rgba(27, 31, 35, 0.2);
    border-bottom: 1px solid rgba(27, 31, 35, 0.2);
    color: $primary;
    float: left;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    padding: 3px 10px;
    text-decoration: none !important;
    vertical-align: middle;
  }

  /deep/ a.social-count:hover {
    color: #0366d6;
    cursor: pointer;
  }

  /deep/ a.social-count.no-count::before {
    content: '\00A0';
  }

  /*# sourceMappingURL=vue-github-buttons.css.map */
  /*# sourceMappingURL=vue-github-buttons.css.map */
} // p-our-products

.blue-drop-shadow {
  display: block;
  z-index: -1;
  position: absolute;
  bottom: -8px;
  right: -8px;
  width: 100%;
  height: 100%;
  background: linear-gradient(49.74deg, #00007d 11.76%, #2c48ff 88.21%);
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
}

</style>
