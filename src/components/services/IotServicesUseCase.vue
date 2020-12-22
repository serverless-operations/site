<template>
  <div>
    <section class="page-section-container">

      <div class="container services-usecase-title-container">
        <div class="row">
          <h2 class="content-section-title text-center">
            Use Case
            <span>実装例</span>
            <hr class="title-bottom-line">
          </h2>
        </div>
      </div>

      <v-container class="services-usecase-content-container">

        <v-row justify="center" class="usecase-text-anim">
          <v-col cols="11" md="8">
            <h3>
              スマートプロダクトにおけるデータ制御実装例
            </h3>
            <p>
              AWS IoTコアを使用してスマートプロダクトからのデータを収集し、クラウド上に蓄積します。そのデータをAWS Lambda及びAPI Gatewayを通して可視化し、管理デバイスからの操作を可能にします。管理デバイスからのリクエストは、デバイス制御用のAWS IoTコアを通して、各スマートデバイスの操作を可能にします。 
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" class="usecase-text-anim">
          <v-col cols="11" md="10">
            <p>
              <g-image src="@/assets/images/services/iot/iot-usecase-1.svg" alt="スマートプロダクトにおけるデータ制御実装例のアーキテクチャ図" />
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" class="usecase-text-anim">
          <v-col cols="11" md="8">
            <h3>
              製造業におけるデータ可視化・分析
            </h3>
            <p>
              AWS IoT Greengrassをゲートウェイデバイスとして、工場内や各所に点在するIoTデバイスからのデータをクラウド側で収集します。収集されたデータはAWS IoT Analytics上でクレンジング及びフィルターされ、データストアに保存されます。それらのデータはAmazon QuickSightを通して可視化され、分析が可能となります。
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" class="usecase-text-anim">
          <v-col cols="11" md="10">
            <p>
              <g-image src="@/assets/images/services/iot/iot-usecase-2.svg" alt="製造業におけるデータ可視化・分析のアーキテクチャ図" />
            </p>
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
      .fromTo( '.service-usecase-card', {
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
  background-color: rgba($light-gray-1, 0.7);
  background-blend-mode: lighten;
  color: $secondary;
  p {
    font-family: $font-jp-regular;
    line-height: 32px;
    text-align: justify;
  }
}

.services-usecase-content-container {
  h3 {
    font-size: 24px;
    margin: 64px 0 16px 0;
    padding-left: 40px;
    position: relative;
    line-height: 1.3;
    @include media-breakpoint-down(md) {
      padding-left: 24px;
      font-size: 18px;
      line-height: 24px;
      line-height: 1.4;
    }
    &:after {
      content: '';
      display: block;
      width: 24px;
      height: 1px;
      background: $primary;
      position: absolute;
      top: 50%;
      left: 0px;
      z-index: 1;
      @include media-breakpoint-down(md) {
        width: 16px;
      }
    }
    @include media-breakpoint-up(md) {
      margin-top: 56px;
    }
  }
  p {
    img {
      width: 100%;
    }
  }
}



</style>