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
              <v-col cols="12" md="10">
                <h1 class="page-header-title text-anim">
                  <span class="text-anim">IoT × SERVERLESS</span> 
                  <span class="page-header-title-jp text-anim">
                    IoT × サーバーレス / コンテナ開発導⼊サポート
                  </span>
                  <span class="page-title-anim-bg"></span>
                </h1>
                <h2 class="page-header-copy page-header-text-anim">
                  AWSを使ったIoTの<br class="d-md-block d-none" />バックエンドシステム開発をサポート
                </h2>
                <p class="page-header-text page-header-text-anim">
                  サーバーレスやコンテナなどのクラウドネイティブな技術を使⽤することで、<br class="d-md-block d-none" />システム運⽤のリソースやコスト最適化などが実現できます。<br class="d-md-block d-none" />サーバーレス/コンテナのノウハウをプロジェクトを通してお伝えし、<br class="d-md-block d-none" />開発の内製化までをサポートします。
                </p>
              </v-col>
            </v-row>
          </v-container>

        </div><!-- p-services-header -->
        
        <IotServicesSupport />

        <IotServicesUseCase />

        <IotServicesMerit />

        <IotServicesFlow />

        <IotServicesPricing />

        <IotServicesFeatures />

      </div>
    </div>
  </Layout>
</template>

<script>
import IotServicesSupport from '~/components/services/IotServicesSupport'
import IotServicesUseCase from '~/components/services/IotServicesUseCase'
import IotServicesMerit from '~/components/services/IotServicesMerit'
import IotServicesFlow from '~/components/services/IotServicesFlow'
import IotServicesPricing from '~/components/services/IotServicesPricing'
import IotServicesFeatures from '~/components/services/IotServicesFeatures'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    IotServicesSupport,
    IotServicesUseCase,
    IotServicesMerit,
    IotServicesFlow,
    IotServicesPricing,
    IotServicesFeatures
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
  overflow: hidden;
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
background:
  url('../../assets/images/bg/so-blue-texture.png'),
  url('../../assets/images/company-main-pattern.svg'),
  linear-gradient(45deg, $secondary 11.76%, $tertiary 88.21%);
}
@include PageHeader;

</style>
