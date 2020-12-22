<template>
  <div>
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
          <v-col cols="11" md="8" lg="8">
            <p class="support-text-anim">
              IoTデバイスから送られてきたAWSクラウド側のデータ処理について開発サポートを行います。<br class="d-md-block" />
              クラウドに蓄積したデータを可視化するためのフロントエンドの開発サポートも可能です。
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">

          <v-col cols="11" md="4">

            <div class="service-card">
              <div class="service-card-header">
                <h4>
                  ウェブ・モバイルアプリ<br>
                  設計開発
                </h4>
              </div>        
              <div class="service-card-help">
                <p>IoTデバイスと連動するウェブアプリケーションのユーザー認証、デバイスセットアップや設定のバックアップなどを行います。</p>
              </div>
            </div>

          </v-col>

          <v-col cols="11" md="4">

            <div class="service-card">
              <div class="service-card-header">
                <h4>
                  スマートデバイスとの<br>
                  連携
                </h4>
              </div>        
              <div class="service-card-help">
                <p>AlexaやGoogle HomeなどのスマートスピーカーなどのデバイスやサービスとIoTデバイスとの連携を行います。</p>
              </div>
            </div>

          </v-col>

          <v-col cols="11" md="4">

            <div class="service-card">
              <div class="service-card-header">
                <h4>
                  IoTデバイスデータの<br>
                  収集・可視化・分析
                </h4>
              </div>        
              <div class="service-card-help">
                <p>コネクテッドカーやモビリティにおける⾞両データの取集、処理、分析、および利⽤を行います。</p>
              </div>
            </div>

          </v-col>

          <v-col cols="11" md="4">

            <div class="service-card">
              <div class="service-card-header">
                <h4>
                  ⼤量なデータを<br>
                  収集・可視化・分析
                </h4>
              </div>        
              <div class="service-card-help">
                <p>センサーやログなど⼤量なデータをクラウド上へ収集、可視化、分析を行います。</p>
              </div>
            </div>

          </v-col>

          <v-col cols="11" md="4">

            <div class="service-card">
              <div class="service-card-header">
                <h4>
                  Web API 設計開発
                </h4>
              </div>        
              <div class="service-card-help">
                <p>外部サービスや他デバイスとIoTデバイスを連携するWeb APIの設計開発を行います。</p>
              </div>
            </div>

          </v-col>

          <v-col cols="11" md="4">

            <div class="service-card">
              <div class="service-card-header">
                <h4>
                  IoTプロトタイプ<br>
                  開発サポート
                </h4>
              </div>        
              <div class="service-card-help">
                <p>IoTの概念実証や製品及びシステムの簡易版の開発を通してPoCの支援を行います。</p>
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
    this.titleAnimation(),
    this.SupportAnimation()
  },
  methods: {
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
            start: 'top 100%', // ウィンドウのどの位置を発火の基準点にするか
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
    SupportAnimation() {
      gsap.timeline({
        scrollTrigger: {
          // markers: true, // マーカーを表示するか（開発用）
          // scrub: 1,
          trigger: '.services-support-content-container', // この要素と交差するとイベントが発火
          start: 'top 100%', // ウィンドウのどの位置を発火の基準点にするか
          end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
        },
      })
      .fromTo( '.support-text-anim', {
        opacity: 0,
        y: 0,
      }, {
        delay: 0.2,
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
      .fromTo( '.service-card', {
        opacity: 0,
        y: 0,
        scale: 0.98,
      }, {
        delay: 0.2,
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
  background-image: url('../../assets/images/top-news-contact-bk.svg');
  background-position: top 420px;
  background-size: 100%;
  background-color: rgba($light-gray-2, 0.7);
  background-blend-mode: lighten;
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

.service-card {
  background: #FFFFFF;
  box-shadow: 8px 24px 50px rgba(207, 214, 226, 0.6);
  border-radius: 3px;
  color: $secondary;
  height: 100%;
  display: flex;
  flex-direction: column;
  .service-card-header {
    padding: 40px;
    @include media-breakpoint-down(md) {
      padding: 20px;
    }
    @include media-breakpoint-down(sm) {
      padding: 8%;
    }
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid $light-gray-1;
    
    h4 {
      font-size: 18px;
      line-height: 1.3;
      text-align: center;
      color: $secondary;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      // width: 90%;
      min-height: 46px;
      position: relative;
      font-family: $font-jp-bold;
      @include media-breakpoint-down(md) {
        width: 90%;
      }
      @include media-breakpoint-down(sm) {
        width: 100%;
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
        background: url('../../assets/images/bg/card-title-before-texture.svg') no-repeat;
      }
      &::after {
        content: '';
        display: block;
        width: 50px;
        height: 30px;
        position: absolute;
        right: 0;
        top: 0;
        background: url('../../assets/images/bg/card-title-after-texture.svg') no-repeat;
      }
    }
    p {
      color: $secondary;
      font-family: $font-jp-bold;
      line-height: 24px;
      letter-spacing: -1px;
    }
    .client-request-text {
      border-top: 1px solid $light-gray-1;
      padding-top: 24px;
      text-align: center;
      font-size: 18px;
      font-family: $font-jp-bold;
      margin-bottom: 32px;
      position: relative;
      display: block;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - 16px);
        border-top: 16px solid $light-gray-1;
        border-right: 16px solid transparent;
        border-left: 16px solid transparent;
      }
      &::after {
        content: '';
        position: absolute;
        top: -1px;
        left: calc(50% - 16px);
        border-top: 16px solid #fff;
        border-right: 16px solid transparent;
        border-left: 16px solid transparent;
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
        background: url('../../assets/images/bg/card-title-before-texture.svg') no-repeat;
      }
      &::after {
        content: '';
        display: block;
        width: 50px;
        height: 30px;
        position: absolute;
        right: 0;
        top: 0;
        background: url('../../assets/images/bg/card-title-after-texture.svg') no-repeat;
      }
    }
    p {
      line-height: 24px;
      color: $secondary;
      strong {
        font-family: $font-jp-bold;
      }
    }
  }
}
</style>