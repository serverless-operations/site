<template>
  <div>
    <section class="page-section-container">

      <div class="container services-usecase-title-container">
        <div class="row">
          <h2 class="content-section-title text-center">
            Pricing
            <span>４つのプランと料金</span>
            <hr class="title-bottom-line">
          </h2>
        </div>
      </div>

      <v-container class="services-usecase-content-container">

        <v-row justify="center">
          <v-col cols="11" md="8">
            <v-row justify="center">

              <v-col cols="12" md="6">

                <div class="service-card">
                  <div class="service-card-header">
                    <h3>
                      Chat & Mail
                      <span>チャットやメールでのコンサルティングサポート</span>
                    </h3>
                    <p>
                      AWSクラウド側の技術的なサポートをチャットやメールのみで⾏います。設計や実装でつまづいた時、⽅針のお悩みごとをサポートします。
                    </p>
                    <p class="client-request-text">
                      400,000 円/⽉
                    </p>
                    <a href="">
                      オンライン無料相談を予約する
                    </a>
                  </div>        
                  <div class="service-card-help">
                    <ul>
                      <li>チャット・メール対応</li>
                      <li>AWSでの設計や実装方針の相談</li>
                    </ul>
                  </div>
                </div>

              </v-col>

            </v-row>
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
  background-image: url('../../assets/images/top-news-contact-bk.svg');
  background-position: center center;
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

.service-card {
  background: #FFFFFF;
  box-shadow: 8px 24px 50px rgba(207, 214, 226, 0.6);
  border-radius: 3px;
  color: $secondary;
  height: 100%;
  display: flex;
  flex-direction: column;
  .service-card-header {
    padding: 40px 40px 0px 40px;
    @include media-breakpoint-down(md) {
      padding: 20px 20px 0px 20px;
    }
    @include media-breakpoint-down(sm) {
      padding: 8% 8% 0px 8%;
    }
    
    h4 {
      font-size: 12px;
      text-align: center;
      margin-bottom: 32px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 1px;
        left: calc(50% - 20px);
        bottom: -8px;
        background: $secondary;
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