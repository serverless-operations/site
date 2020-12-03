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
                  お客さまと１つのチームとなり<br class="d-md-block d-none" />支援していきます。
                </h2>
                <p class="page-header-text page-header-text-anim">
                  AWSによるサーバーレスアーキテクチャを技術的なバックボーンとして共に課題解決や提案を行い、お客様のアプリケーション設計・開発・運用までを支援します。
                </p>
              </v-col>
            </v-row>
          </v-container>

        </div><!-- p-services-header -->
        
        <ServicesSupport />

        <ServicesMerit />
       
      </div>
    </div>
  </Layout>
</template>

<script>
import ServicesSupport from '~/components/ServicesSupport'
import ServicesMerit from '~/components/ServicesMerit'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    ServicesSupport,
    ServicesMerit
  },
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

</style>
