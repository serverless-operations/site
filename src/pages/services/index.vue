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
                    サーバーレスオペレーションズの<br class="d-md-block" />サービスと強み
                  </span>
                  <span class="page-title-anim-bg"></span>
                </h1>
                <h2 class="page-header-copy page-header-text-anim">
                  お客さまと１つのチームとなり<br class="d-md-block" />支援していきます。
                </h2>
                <p class="page-header-text page-header-text-anim">
                  AWSによるサーバーレスアーキテクチャを技術的なバックボーンとして共に課題解決や提案を行い、お客様のアプリケーション設計・開発・運用までを支援します。
                </p>
              </v-col>
            </v-row>
          </v-container>

        </div><!-- p-services-header -->

        <section class="page-section-container">

          <div class="container services-support-title-container">
            <div class="row">
              <h2 class="content-section-title text-center">
                Support
                <span>お手伝いできること</span>
                <hr class="title-bottom-line">
              </h2>
            </div>
          </div>

          <v-container class="services-support-content-container">
            <v-row justify="center">
              <v-col cols="11" md="7" lg="7">
                <p>サーバーレスについてお困りではありませんか？</p>
                <h3>
                  お客さまのチームに入り、<br class="d-md-block" />
                  現状を把握しながら課題を共に解決します。
                </h3>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="4">
                カード
              </v-col>
              <v-col cols="12" md="4">
                カード
              </v-col>
              <v-col cols="12" md="4">
                カード
              </v-col>
            </v-row>
          </v-container>

        </section>

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
    this.titleAnimation(),
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
    titleAnimation() {
      let object = {
        el: '.services-support-title-container h2',
        duration: 1.2
      }
      gsap
        .timeline({
          defaults: { ease: 'Expo.easeInOut', duration: 1.2 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: '.services-support-title-container', // この要素と交差するとイベントが発火
            start: 'top 98%', // ウィンドウのどの位置を発火の基準点にするか
            end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
          },
        })
        .fromTo( object.el, {
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
      }
  }
}
</script>

<style lang="scss" scoped>
.v-content__wrap {
  background-image: url('../../assets/images/bg/noise.png');
}
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
.page-header-container {
background: no-repeat url('../../assets/images/company-main-pattern.svg'),
      linear-gradient(205.01deg, #2c48ff -0.06%, #02007c 100.25%);
}
@include PageHeader;

@include SectionTitle;

.page-section-container {
  padding: 80px 0 160px 0;
  h3 {
    color: $secondary;
    font-family: $font-jp-bold;
    font-size: 32px;
    margin-bottom: 48px;
    @include media-breakpoint-down(md) {
      margin-bottom: 24px;
      font-size: 20px;
    }
  }
  p {
    color: $text-black;
    font-family: $font-jp-regular;
    line-height: 32px;
    text-align: justify;
  }
}
</style>
