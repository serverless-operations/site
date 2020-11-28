<template>
  <Layout>
    <div class="v-content__wrap">

      <div class="l-about-page">

        <div class="page-header-container">
        
          <div class="page-header-img-container">
            <!--背景 -->
            <img src="@/assets/images/about-so-main-bg.svg"
                class="page-header-main-bg d-none d-md-block"  alt="Serverless Operationsとは メインイメージ">
            <!-- ロゴ -->
            <img src="@/assets/images/about-so-main-logo.svg"
                class="page-header-logo d-none d-md-block" alt="Serverless Operationsとは メインイメージ ロゴ">
            <!-- 粒子 -->
            <img src="@/assets/images/about-so-main-square.svg"
                class="page-header-main-particle d-none d-md-block" alt="Serverless Operationsとは メインイメージ">

            <!--背景 -->
            <img src="@/assets/images/about-so-main-bg-sp.svg"
                class="page-header-main-bg d-md-none" alt="Serverless Operationsとは メインイメージ">
            <!-- ロゴ -->
            <img src="@/assets/images/about-so-main-logo-sp.svg"
                class="page-header-logo-sp d-md-none" alt="Serverless Operationsとは メインイメージ ロゴ">
            <!-- 粒子 -->
            <img src="@/assets/images/about-so-main-particle-sp.svg"
                class="page-header-main-particle d-md-none" alt="Serverless Operationsとは メインイメージ">

          </div>

          <v-container class="page-header-text-container">
            <v-row>
              <v-col cols="12" md="6">
                <h1 class="page-header-title text-anim">
                  <span class="text-anim">SERVICES</span> 
                  <span class="page-header-title-jp text-anim">
                    サーバーレスオペレーションズのサービスと強み
                  </span>
                  <span class="text-anim-bg"></span>
                </h1>
                <h2 class="page-header-copy">
                  お客さまと１つのチームとなり<br>支援していきます。
                </h2>
                <p class="page-header-text">
                  AWSによるサーバーレスアーキテクチャを技術的なバックボーンとして共に課題解決や提案を行い、お客様のアプリケーション設計・開発・運用までを支援します。
                </p>
              </v-col>
            </v-row>
          </v-container>

        </div><!-- p-services-header -->

      </div>
    </div>
  </Layout>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  metaInfo () {
    return {
      title: 'サーバーレスオペレーションズのサービスと強み',
      description: 'サーバーレスとは、付加価値を産まない重労働をクラウドへアウトソースし、開発者がビジネスのコアバリューに集中するための クラウドの利用方法であり開発のための手段です。'
    }
  },
  fetch({ store }) {
    store.commit('resetModal')
  },
  mounted() {
    this.PageTextAnimation()
  },
  methods: {
    PageTextAnimation() {
      gsap.fromTo('.text-anim-bg', {
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
      gsap.fromTo('.page-header-copy', {
        opacity: 0,
        y: 0,
      }, {
        delay: 1.6,
        ease: 'Expo.easeInOut',
        transformOrigin: '0 0',
        y: -6,
        duration: 1,
        opacity: 1,
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.4 // 0.8秒おきに
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.l-bg-gray {
  background: $light-gray-2;
}
.l-about-page {
  background: $white;
  position: relative;
  overflow: hidden;
}
.l-services-strength {
  position: relative;
}
// ページの見出し
.page-header-container {
  background: no-repeat url('../../assets/images/company-main-pattern.svg'),
    linear-gradient(205.01deg, #2c48ff -0.06%, #02007c 100.25%);
  overflow: hidden;
  max-height: 840px;
  position: relative;
  @include media-breakpoint-up(md) {
    max-height: 640px;
  }
  @include media-breakpoint-up(lg) {
    max-height: 840px;
  }
  // メインイメージ部分のコンテナ
  .page-header-container {
    z-index: 3;
    position: relative;
  }
  // メインイメージ部分
  .page-header-img-container {
    position: absolute;
    max-height: 840px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @include media-breakpoint-up(md) {
      max-height: 840px;
      height: 100%;
      width: 100%;
    }
  }
  // メインイメージ、ロゴ
  .page-header-logo {
    position: absolute;
    display: block;
    right: 0;
    width: 100%;
    height: auto;
    @include media-breakpoint-up(md) {
      width: auto;
      height: 100%;
    }
  }
  // メインイメージ、背景
  .page-header-main-bg {
    position: absolute;
    right: 0;
    display: block;
    mix-blend-mode: overlay;
    width: 100%;
    height: auto;
    @include media-breakpoint-up(md) {
      width: auto;
      height: 100%;
    }
  }
  // メインイメージ、粒子
  .page-header-main-particle {
    position: absolute;
    right: 0;
    display: block;
    width: 100%;
    height: auto;
    @include media-breakpoint-up(md) {
      width: auto;
      height: 100%;
    }
  }
  // スマホ時のロゴ
  .page-header-logo-sp {
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
  .page-header-title {
    font-family: $font-en-normal;
    line-height: 0.8;
    font-size: 3rem;
    margin-top: 160px;
    margin-bottom: 40;
    position: relative;
    padding: 16px 0;
    @include media-breakpoint-up(lg) {
      font-size: 6rem;
      margin-top: 180px;
      margin-bottom: 64px;
    }
  }
  // 日本語のタイトル
  .page-header-title-jp {
    display: block;
    font-family: $font-jp-bold;
    font-size: 16px;
    margin-top: 8px;
    opacity: 0.7;
    margin-left: 8px;
    @include media-breakpoint-up(lg) {
      margin-top: 16px;
    }
  }

  // タイトル下文章の見出し
  .page-header-copy {
    font-family: $font-jp-regular;
    font-size: 1.5rem;
    line-height: 1.3;
    margin-bottom: 40px;
    @include media-breakpoint-up(lg) {
      font-size: 2.1rem;
    }
  }
  // タイトル下文章
  .page-header-text {
    font-family: $font-jp-regular;
    line-height: 32px;
    margin-bottom: 212px;
    @include media-breakpoint-up(lg) {
      margin-bottom: 204px;
    }
  }
}

.text-anim-bg {
  width: 100%;
  height: 100%;
  opacity: 0.8;
  display: block;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
}

</style>
