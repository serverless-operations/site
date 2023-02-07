<template>
  <Layout>
    <div class="v-content__wrap">

      <div class="l-about-page">

        <div class="page-header-container">

          <div class="page-header-img-container">
            <!--背景 -->
            <img src="@/assets/images/about-so-main-bg.svg"
                class="page-header-main-bg d-none d-md-block"  alt="Serverless Operationsとは メインイメージ">
            <!-- メインイメージイラスト -->
            <img src="@/assets/images/services/iot/iot-main-illust.svg"
                class="page-header-logo d-none d-md-block" alt="Serverless Operationsとは メインイメージ ロゴ">
            <!-- 粒子 -->
            <img src="@/assets/images/about-so-main-square.svg"
                class="page-header-main-particle d-none d-md-block" alt="Serverless Operationsとは メインイメージ">

            <!--背景 -->
            <img src="@/assets/images/about-so-main-bg-sp.svg"
                class="page-header-main-bg d-md-none" alt="Serverless Operationsとは メインイメージ">
            <!-- ロゴ -->
            <img src="@/assets/images/services/iot/iot-main-illust.svg"
                class="page-header-logo-sp d-md-none" alt="Serverless Operationsとは メインイメージ ロゴ">
            <!-- 粒子 -->
            <img src="@/assets/images/about-so-main-particle-sp.svg"
                class="page-header-main-particle d-md-none" alt="Serverless Operationsとは メインイメージ">
          </div>

          <v-container class="page-header-text-container">
            <v-row>
              <v-col cols="12" md="10">
                <h1 class="page-header-title text-anim">
                  <span class="text-anim">AWS × SERVERLESS</span>
                  <span class="page-header-title-jp text-anim">
                    AWSコアサーバーレスサービスの開発導⼊サポート
                  </span>
                  <span class="page-title-anim-bg"></span>
                </h1>
                <h2 class="page-header-copy page-header-text-anim">
                  AWSコアサーバーレスサービス<br class="d-md-block d-none" />（AWS Lambda, Amazon API Gateway）<br class="d-md-block d-none" />及び Amazon DynamoDBを使った<br class="d-md-block d-none" />開発導⼊サポート
                </h2>
                <p class="page-header-text page-header-text-anim">
                  「AWSサービスデリバリープログラム」認定に基づき、<br class="d-md-block d-none" />AWSサーバーレス開発の主要なサービスであるAWS Lambda（コンピューティング）、<br class="d-md-block d-none" />Amazon API Gateway（API管理）、Amazon DynamoDB（データ格納）を使った開発をサポートします。
                </p>
              </v-col>
            </v-row>
          </v-container>

        </div><!-- p-services-header -->

        <AwsServicesSupport />

        <AwsServicesUseCase />

        <AwsServicesMerit />

        <IotServicesFlow />

        <IotServicesPricing />

        <IotServicesFeatures />

        <IotServicesContact />

      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
  }
}
</static-query>

<script>
import AwsServicesSupport from '~/components/services/AwsServicesSupport'
import AwsServicesUseCase from '~/components/services/AwsServicesUseCase'
import AwsServicesMerit from '~/components/services/AwsServicesMerit'
import IotServicesFlow from '~/components/services/IotServicesFlow'
import IotServicesPricing from '~/components/services/IotServicesPricing'
import IotServicesFeatures from '~/components/services/IotServicesFeatures'
import IotServicesContact from '~/components/services/IotServicesContact'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    AwsServicesSupport,
    AwsServicesUseCase,
    AwsServicesMerit,
    IotServicesFlow,
    IotServicesPricing,
    IotServicesFeatures,
    IotServicesContact
  },
  metaInfo () {
    return {
      title: 'AWSコアサーバーレスサービスの開発導⼊サポート',
      meta: [
        {
          description: '「AWSサービスデリバリープログラム」認定に基づき、AWSサーバーレス開発の主要なサービスであるAWS Lambda（コンピューティング）、Amazon API Gateway（API管理）、Amazon DynamoDB（データ格納）を使った開発をサポートします。'
        },
        { key: `og:locale`, property: `og:locale`, content: `ja_JP` },
        { key: `og:type`, property: `og:type`, content: `website` },
        {
          key: `og:url`,
          property: `og:url`,
          content: 'https://serverless.co.jp/services/aws-serverless',
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: 'IoT × サーバーレス / コンテナ開発導⼊サポート | Serverless Operations',
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: 'IoT × サーバーレス / コンテナ開発導⼊サポート | Serverless Operations',
        },
        {
          key: `og:description`,
          property: `og:description`,
          content: '「AWSサービスデリバリープログラム」認定に基づき、AWSサーバーレス開発の主要なサービスであるAWS Lambda（コンピューティング）、Amazon API Gateway（API管理）、Amazon DynamoDB（データ格納）を使った開発をサポートします。',
        },
        {
          key: `og:image`,
          property: `og:image`,
          content:  `https://serverless.co.jp/aws-serverless-ogp.png`,
        },
        { name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image',
          content: `https://serverless.co.jp/aws-serverless-ogp.png`,
        }
      ],
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
@include PageHeader;

.page-header-container {
background:
  url('../../assets/images/bg/so-blue-texture.png'),
  url('../../assets/images/company-main-pattern.svg'),
  linear-gradient(45deg, $secondary 11.76%, $tertiary 88.21%);
  .page-header-logo {
    width: 50%;
    right: 5%;
  }
  .page-header-logo-sp {
    width: 60%;
    opacity: 0.8;
    @include media-breakpoint-down(sm) {
      width: 60%;
    }
  }
  .page-header-title {
    line-height: 1;
    margin-block: 120px 30px;
    @include media-breakpoint-down(sm) {
      margin-top: 60px;
    }
  }
  .page-header-copy {
    @include media-breakpoint-down(sm) {
      margin-bottom: 200px;
    }
  }
  .page-header-text {
    @include media-breakpoint-down(sm) {
      margin-bottom: 60px;
    }
  }
}


</style>
