<template>
  <div>
    <section class="page-section-container">

      <div class="container services-features-title-container">
        <div class="row">
          <h2 class="content-section-title text-center">
            Features
            <span>サーバーレスオペレーションズの強み</span>
            <hr class="title-bottom-line">
          </h2>
        </div>
      </div>

      <v-container class="services-features-content-container">

        <v-row justify="center">
          <v-col cols="11" md="8" lg="8">
            <h3 class="features-text-anim">
              開発のスペシャリストチームが<br class="d-sm-block d-none" />
              プラン策定から開発支援までを一貫して行います。
            </h3>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="11" offset-sm="3" sm="8" offset-md="3" md="6" offset-lg="5" lg="5">
            <h4 class="features-text-anim">
              お客さまの開発チームの“内製化”を目指して
            </h4>
            <p class="features-text-anim">サーバーレスオペレーションズはAWSのサーバーレス・コンテナを使った開発のスペシャリストチームです。特に<strong>「お客さまの開発チームの内製化」</strong>を⽀援していくことをポリシーとしており、そのためのプラン策定から開発⽀援までを⼀貫して⾏うことができます。</p>
          </v-col>
        </v-row>

        <img
          src="@/assets/images/services/features-illust01.svg"
          class="features-illust-01"
          alt=""
        >
        <img
          src="@/assets/images/services/features-illust02.svg"
          class="features-illust-02"
          alt=""
        >

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
    this.FeaturesTitleAnimation(),
    this.FeaturesAnimation()
  },
  methods: {
    FeaturesTitleAnimation() {
      let object = {
        el: '.services-features-title-container h2',
        duration: 1.2
      }
      gsap
        .timeline({
          defaults: { ease: 'Expo.easeInOut', duration: 1.2 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: '.services-features-title-container', // この要素と交差するとイベントが発火
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
    FeaturesAnimation() {
      gsap.timeline({
        scrollTrigger: {
          // markers: true, // マーカーを表示するか（開発用）
          // scrub: 1,
          trigger: '.services-features-content-container', // この要素と交差するとイベントが発火
          start: 'top 100%', // ウィンドウのどの位置を発火の基準点にするか
          end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
        },
      })
      .fromTo( '.features-text-anim', {
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
    }
  }
}
</script>

<style lang="scss" scoped>
@include SectionTitle;

.page-section-container {
  padding: 160px 0;
  background-image: url('../../assets/images/bg/features-dot-texture.svg');
  background-position: top 420px;
  background-size: 200%;
  background-repeat: repeat-y;
  background-color: $light-gray-2;
  @include media-breakpoint-down(md) {
    padding: 120px 0;
  }
  @include media-breakpoint-down(sm) {
    background-size: 180%;
  }
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
  h4 {
    color: $text-black;
    font-size: 24px;
    font-family: $font-jp-bold;
    letter-spacing: -1px;
    margin-bottom: 16px;
    @include media-breakpoint-down(md) {
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

.services-features-content-container {
  position: relative;
  .features-illust-01 {
    position: absolute;
    left: 0;
    bottom: -80px;
    width: 70%;
    max-width: 552px;
    @include media-breakpoint-down(md) {
      bottom: -100px;
      width: 50%;
    }
  }
  .features-illust-02 {
    position: absolute;
    right: -100px;
    top: -200px;
    width: 70%;
    max-width: 552px;
    @include media-breakpoint-down(md) {
      right: -40px;
      bottom: -120px;
      width: 50%;
    }
  }
}
</style>