<template>
  <Layout>
    <div class="v-content__wrap">
      <div class="l-company-page">
        <div class="page-header-container">
          <div class="page-header-img-container">
            <!--背景 -->
            <img src="@/assets/images/about-so-main-bg.svg"
                class="page-header-main-bg d-none d-md-block"  alt="Serverless Operationsとは メインイメージ">
            <!-- ロゴ -->
            <img src="@/assets/images/our-products/oss-main-icon.svg"
                class="page-header-logo d-none d-md-block" alt="Serverless Operationsとは メインイメージ ロゴ">
            <!-- 粒子 -->
            <img src="@/assets/images/about-so-main-square.svg"
                class="page-header-main-particle d-none d-md-block" alt="Serverless Operationsとは メインイメージ">

            <!--背景 -->
            <img src="@/assets/images/about-so-main-bg-sp.svg"
                class="page-header-main-bg d-md-none" alt="Serverless Operationsとは メインイメージ">
            <!-- ロゴ -->
            <img src="@/assets/images/our-products/oss-main-icon.svg"
                class="page-header-logo-sp d-md-none" alt="Serverless Operationsとは メインイメージ ロゴ">
            <!-- 粒子 -->
            <img src="@/assets/images/about-so-main-particle-sp.svg"
                class="page-header-main-particle d-md-none" alt="Serverless Operationsとは メインイメージ">
          </div>

          <v-container class="page-header-text-container">
            <v-row>
              <v-col cols="12" md="6">
                <h1 class="page-header-title text-anim">
                  <span class="text-anim">PRODUCTS</span> 
                  <span class="page-header-title-jp text-anim">
                    私たちが開発したプロダクト
                  </span>
                  <span class="page-title-anim-bg"></span>
                </h1>
                <h2 class="page-header-copy page-header-text-anim">
                  独自に開発した<br class="d-md-block d-none" />プロダクトをご紹介します。
                </h2>
                <p class="page-header-text page-header-text-anim">
                  サーバーレスアプリケーションの開発をより簡単に・容易にするために、<br class="d-md-block d-none" />私たちが独自に開発したフレームワークやツールセットなどのプロダクトをご紹介します。
                </p>
              </v-col>
            </v-row>
          </v-container>

        </div><!-- p-services-header -->

      <!-- 会社案内のテーブルのセクション -->
        <section class="p-our-products">
          <v-container>
            <div class="cards">
              <div class="cards-container">
                <v-row>
                  <v-col class="d-flex" cols="12" md="6">
                    <img class="cards-img" src="@/assets/images/our-products/costless-logo.svg" alt="Costless ロゴマーク">
                  </v-col>
                  <v-col cols="12" md="6">
                    <h3 class="cards-title costless-title">Costless</h3>
                    <p class="cards-text">
                      サーバーレスのコストをもっと分かりやすくするSaaS。AWSのサーバーレスにおけるコストの詳細を可視化し、継続的なコスト最適化・削減を支援するためのサービスです。
                    </p>
                    <a class="primary-button" href="https://costless.io/ja" v-ripple>
                      Costless Website
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
                    <h3 class="cards-title title-min-height"><br>Jeffy </h3>
                    <div class="github-buttons">
                      <gh-btns-star slug="serverless-operations/jeffy" show-count></gh-btns-star>
                    </div>
                    <p class="cards-text">
                      AWS LambdaのPython向けのサーバーレスアプリケーションフレームワーク。Lambdaをよりシンプルに実装するためのツールセットを提供しています。
                    </p>
                    <a class="github-repository-link primary-button" href="https://github.com/serverless-operations/jeffy">
                      <span>Github</span>
                    </a>
                  </div>
                  <div class="blue-drop-shadow"></div>
                </div>
              </v-col>
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
import Vue from 'vue';
import VueGitHubButtons from 'vue-github-buttons';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

Vue.use(VueGitHubButtons);
// Or if your don't want to use cache
Vue.use(VueGitHubButtons, { useCache: false });

export default {
  // mixins: [Meta],
  metaInfo() {
    return {
      title: "私達が開発したプロダクト",
      meta: [
        {
          name: `description`,
          content:
            "サーバーレスアプリケーションの開発をより簡単に・容易にするために、私たちが独自に開発したプロダクトをご紹介します。",
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `https://serverless.co.jp/our-products`,
        },
      ],
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: `https://serverless.co.jp/our-products`,
        },
      ],
    };
  },
  components: {
    VueGitHubButtons
  },
  fetch({ store }) {
    store.commit('resetModal')
  },
  scrollToTop: true,
  mounted() {
    this.PageTextAnimation()
  },
  methods: {
    PageTextAnimation() {
      gsap.fromTo('.page-title-anim-bg', {
        opacity: 1,
        scaleX: 0,
        transformOrigin: '0 0',
      }, {
        ease: 'Expo.easeInOut',
        transformOrigin: '1 0',
        scaleX: 1,
        duration: 1.6,
        opacity: 0,
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.4 // 0.8秒おきに
        }
      })
      gsap.fromTo('.text-anim', {
        opacity: 0,
        x: -32,
      }, {
        delay: 0.2,
        ease: 'Expo.easeInOut',
        transformOrigin: '1 0',
        x: 0,
        duration: 1.8,
        opacity: 1,
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.4 // 0.8秒おきに
        }
      })
      gsap.fromTo('.page-header-text-anim', {
        opacity: 0,
        y: 0,
      }, {
        delay: 1.4,
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
    },
  }
}
</script>

<style lang="scss" scoped>
.v-content__wrap {
  background-image: url('../assets/images/bg/noise.png');
  overflow: hidden;
}
@include PageHeader;

.page-header-container {
background:
  url('../assets/images/bg/so-blue-texture.png'),
  url('../assets/images/company-main-pattern.svg'),
  linear-gradient(45deg, $secondary 11.76%, $tertiary 88.21%);
  .page-header-logo {
    width: 44%;
    right: 10%;
  }
  .page-header-logo-sp {
    width: 60%;
    max-height: 812px;
    display: block;
    opacity: 0.8;
  }
}

.l-company-page {
  background: $white;
  position: relative;
  overflow: hidden;
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
        &.costless-title {
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
