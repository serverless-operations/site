<template>
  <div>
    <section class="page-section-container">

      <div class="container services-usecase-title-container">
        <div class="row">
          <h2 class="content-section-title text-center">
            Use Case
            <span>ユースケース</span>
            <hr class="title-bottom-line">
          </h2>
        </div>
      </div>

      <v-container class="services-usecase-content-container">

        <v-row justify="center">
          <v-col cols="11" md="7" lg="7">
            <p class="usecase-text-anim">
              Serverless Operationsでは、AWSを中心とした以下のようなサーバーレスアプリケーションの開発支援が可能です。
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">

          <v-col cols="11" md="4">

            <div class="service-usecase-card">
              <div class="service-card-header">
                <h3>
                  Web & Mobile App<br>
                  Backend
                </h3>
                <p class="service-card-header-image">
                  <img
                    src="@/assets/images/services/icon-features-web-mobile-app-backend-illust.svg"
                    class="usecase-illust-01"
                    alt=""
                  >
                </p>
              </div>        
              <div class="service-card-help">
                <h4>ウェブ&モバイルアプリバックエンド</h4>
                <p>API GatewayやAppSyncといったサービスを使用すると、 Webアプリケーションやモバイルアプリケーションのバックエンドとしての機能が提供できます。<br>
                これらのサービスはアクセス数に応じで自動でスケールアウトする仕組みになっており、秒間数千数万のトランザクションを捌くことができます。また、コストはトラフィック量に比例するため、トラフィックの少ない間は大幅にコストが削減されます。</p>
              </div>
            </div>

          </v-col>

          <v-col cols="11" md="4">

            <div class="service-usecase-card">
              <div class="service-card-header">
                <h3>
                  Web Frontend
                </h3>
                <p class="service-card-header-image">
                  <img
                    src="@/assets/images/services/icon-features-web-frontend-illust.svg"
                    class="usecase-illust-02"
                    alt=""
                  >
                </p>
              </div>        
              <div class="service-card-help">
                <h4>ウェブフロントエンド</h4>
                <p>VueやReactを使用した、Webフロントエンド開発を行います。業務用のシステム管理画面やサービスのウェブアプリケーションまで対応できます。</p>
              </div>
            </div>

          </v-col>

          <v-col cols="11" md="4">

            <div class="service-usecase-card">
              <div class="service-card-header">
                <h3>
                  IoT Backend
                </h3>
                <p class="service-card-header-image">
                  <img
                    src="@/assets/images/services/icon-features-iot-backend-illust.svg"
                    class="usecase-illust-03"
                    alt=""
                  >
                </p>
              </div>        
              <div class="service-card-help">
                <h4>IoTバックエンド</h4>
                <p>AWSでは、様々はIoTに関するプロダクトをリリースしており、その中心を担っているのがAWS IoTです。AWS IoTはMQTT、WebSocket、またはHTTPを使用してIoTデバイスをバックエンドサービスに接続できます。IoTは、自動車・交通機関・物流・医療・農業といった様々な分野で活用が広がっています。<br>AWS IoTやLambda, Kinesisといったサービスを使えば、IoTの開発チームはインフラの管理に大きな時間を割かれることなく機能の開発に集中できます。</p>
              </div>
            </div>

          </v-col>

          <v-col cols="11" md="4">

            <div class="service-usecase-card">
              <div class="service-card-header">
                <h3>
                  Dataprocessing
                </h3>
                <p class="service-card-header-image">
                  <img
                    src="@/assets/images/services/icon-features-dataprocessing-illust.svg"
                    class="usecase-illust"
                    alt=""
                  >
                </p>
              </div>        
              <div class="service-card-help">
                <h4>データプロセッシング</h4>
                <p>アプリケーションやIoTのバックエンドを作るだけなく、それらのユーザの行動を分析するためのデータ分析基盤、機械学習・業務システムなどにおけるETLパイプラインを作ることも可能です。<br>AWS Lambda、Kinesis、S3、Athena、Step Functionsなどのサーバーレステクノロジを使用すると、膨大な数のカスタムデータを取得および分析するパイプラインを簡単に構築できます。</p>
              </div>
            </div>

          </v-col>

          <v-col cols="11" md="4">

            <div class="service-usecase-card">
              <div class="service-card-header">
                <h3>
                  Chatbot
                </h3>
                <p class="service-card-header-image">
                  <img
                    src="@/assets/images/services/icon-features-chatbot-illust.svg"
                    class="usecase-illust-05"
                    alt=""
                  >
                </p>
              </div>        
              <div class="service-card-help">
                <h4>チャットボット</h4>
                <p>AWSではAmazon Recognitionといった画像分析のサービスをはじめ、たくさんの学習モデルをAPIとして提供するサービスがあります。<br>それらとAPI Gateway、Lambdaを組み合わせることで容易にチャットボットのサービスを作ることができます。</p>
              </div>
            </div>

          </v-col>

        </v-row>
      </v-container>

    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.UseCaseTitleAnimation(),
    this.UseCaseAnimation()
  },
  methods: {
    UseCaseTitleAnimation() {
      let object = {
        el: '.services-usecase-title-container h2',
        duration: 1.2
      }
      gsap
        .timeline({
          defaults: { ease: 'Expo.easeInOut', duration: 1.2 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: '.services-usecase-title-container', // この要素と交差するとイベントが発火
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
    },
    UseCaseAnimation() {
      gsap.timeline({
        scrollTrigger: {
          // markers: true, // マーカーを表示するか（開発用）
          // scrub: 1,
          trigger: '.services-usecase-content-container', // この要素と交差するとイベントが発火
          start: 'top 95%', // ウィンドウのどの位置を発火の基準点にするか
          end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
        },
      })
      .fromTo( '.usecase-text-anim', {
        opacity: 0,
        y: 0,
      }, {
        delay: 0.3,
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
      .fromTo( '.service-usecase-card', {
        opacity: 0,
        y: 0,
        scale: 0.98,
      }, {
        delay: 0.3,
        y: -10, // 少し上に移動させる
        opacity: 1,
        x: 0,
        scale: 1,
        ease: 'Expo.easeInOut',
        duration: 1,
        // 複数要素を扱うプロパティ
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.3 // 0.8秒おきに
        }
      },'<')
    }
  }
}
</script>

<style lang="scss" scoped>
@include SectionTitle;

.page-section-container {
  padding: 160px 0;
  background-image: url('../assets/images/top-news-contact-bk.svg');
  background-position: top 420px;
  background-size: 100%;
  background-color: rgba($light-gray-2, 0.7);
  background-blend-mode: lighten;
  p {
    color: $text-black;
    font-family: $font-jp-regular;
    line-height: 32px;
    text-align: justify;
  }
}

.service-usecase-card {
  background: #FFFFFF;
  box-shadow: 8px 24px 50px rgba(207, 214, 226, 0.6);
  border-radius: 3px;
  color: $secondary;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  .service-card-header {
    padding: 40px 24px 0px 24px;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column-reverse;
    justify-content: center;
    @include media-breakpoint-down(md) {
      padding: 20px 20px 0px 20px;
    }
    @include media-breakpoint-down(sm) {
      padding: 8% 8% 0px 8%;
    }
    
    h3 {
      font-size: 32px;
      text-align: center;
      position: relative;
      font-family: $font-en-normal;
      line-height: 1.2;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100px;
      @include media-breakpoint-down(md) {
        font-size: 24px;
      }
    }
    .service-card-header-image {
      display: flex;
      justify-content: center;
      text-align: center;
      min-height: 200px;
      @include media-breakpoint-down(sm) {
        min-height: auto;
      }
      img {
        align-items: center;
        @include media-breakpoint-down(md) {
          width: 90%;
        }
        @include media-breakpoint-down(sm) {
          width: auto;
          height: 100px;
        }
      }
    }
  }
  .service-card-help {
    height: 100%;
    background: $light-gray-2;
    padding: 40px;
    display: flex;
    flex-direction: column;
    @include media-breakpoint-down(md) {
      padding: 20px;
    }
    @include media-breakpoint-down(sm) {
      padding: 8%;
    }
    h4 {
      font-size: 12px;
      text-align: center;
      margin: 0 auto 24px;
      color: $secondary;
      display: block;
      width: 90%;
      position: relative;
      @include media-breakpoint-down(md) {
        width: 100%;
      }
      @include media-breakpoint-down(sm) {
        width: 80%;
        max-width: 300px;
      }
      &::before {
        content: '';
        display: block;
        width: 50px;
        height: 30px;
        position: absolute;
        left: 0;
        top: 0;
        background: url('../assets/images/bg/card-title-before-texture.svg') no-repeat;
      }
      &::after {
        content: '';
        display: block;
        width: 50px;
        height: 30px;
        position: absolute;
        right: 0;
        top: 0;
        background: url('../assets/images/bg/card-title-after-texture.svg') no-repeat;
      }
    }
    p {
      line-height: 24px;
      color: $secondary;
      strong {
        font-family: $font-jp-bold;
      }
      @include media-breakpoint-down(md) {
        font-size: 14px;
      }
    }
  }
}
</style>