<template>
  <div>
    <section class="page-section-container">

      <v-container class="services-merit-content-container">

        <v-row justify="center">
          <v-col cols="11" md="10">

            <h1 class="merit-title-anim">Merit</h1>

            <v-row justify="end">
              <v-col cols="12" sm="10" md="8" lg="7">
                <div class="services-merit-title-container">
                  <p class="services-merit-header-text merit-text-anim">
                    サーバーレス/コンテナを採⽤することのメリット
                  </p>
                  <h2 class="services-merit-header-title merit-text-anim">
                    トラフィックの変化に柔軟に対応<br class="d-md-block d-none" />
                    運用コストも削減
                  </h2>
                </div>
              </v-col>
            </v-row>

            <div class="service-merit-card-container">

              <div class="merit-card">
                <div class="merit-card-icon">
                  <p class="merit-header-text">Scalability</p>
                  <p class="merit-header-img">
                    <img
                      src="@/assets/images/services/iot/iot-merit-1.svg"
                      class=""
                      alt="トラフィックの変化に柔軟に対応できる アイコン"
                    >
                  </p>
                </div>
                <div class="merit-card-text">
                  <p class="merit-card-text-header">Merit 01</p>
                  <h3 class="merit-card-title">トラフィックの変化に柔軟に対応できる</h3>
                  <p class="merit-card-text-desc">IoTはトラフィックのボリュームが増減しやすく、サーバーサイドのキャパシティ予測が困難となるケースが多いです。そこで、AWS Lambdaを中⼼としたマイクロサービスでバックエンドを構築することで、トラフィックの変化に柔軟に対応できるシステムを構築できます。</p>
                </div>
              </div>

              <div class="merit-card">
                <div class="merit-card-icon">
                  <p class="merit-header-text">Cost Down</p>
                  <p class="merit-header-img">
                    <img
                      src="@/assets/images/services/iot/iot-merit-2.svg"
                      class=""
                      alt="運用工数や人的コストを削減 アイコン"
                    >
                  </p>
                </div>
                <div class="merit-card-text">
                  <p class="merit-card-text-header">Merit 02</p>
                  <h3 class="merit-card-title">運用工数や人的コストを削減</h3>
                  <p class="merit-card-text-desc">インフラの運⽤⼯数も最⼩限にすることができるため、⼈的コストも削減して運⽤することが可能になります。</p>
                </div>
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
    this.MeritTitleAnimation()
    this.MeritCardAnimation()
  },
  methods: {
    MeritTitleAnimation() {
      gsap.timeline({
        scrollTrigger: {
          // markers: true, // マーカーを表示するか（開発用）
          // scrub: 1,
          trigger: '.services-merit-content-container', // この要素と交差するとイベントが発火
          start: 'top 100%', // ウィンドウのどの位置を発火の基準点にするか
          end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
        },
      })
      .fromTo( '.merit-title-anim', {
        opacity: 0,
        x: 0,
      }, {
        ease: 'Expo.easeInOut',
        transformOrigin: '0 1',
        x: 24,
        duration: 2,
        opacity: 1,
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.2 // 0.8秒おきに
        }
      },'<')
      .fromTo( '.merit-text-anim', {
        opacity: 0,
        y: 0,
      }, {
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
      },'<')
    },
    MeritCardAnimation() {
      gsap.timeline({
        scrollTrigger: {
          // markers: true, // マーカーを表示するか（開発用）
          // scrub: 1,
          trigger: '.service-merit-card-container', // この要素と交差するとイベントが発火
          start: 'top 100%', // ウィンドウのどの位置を発火の基準点にするか
          end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
        },
      })
      .fromTo( '.merit-card', {
        opacity: 0,
        y: 0,
        scale: 0.98,
      }, {
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
.page-section-container {
  background:
    url('../../assets/images/bg/service-dot-texture.svg'),
    url('../../assets/images/bg/so-blue-texture.png'),
    linear-gradient(45deg, #00007D 11.76%, #2C48FF 88.21%);
  background-size: 70% 70%, 70% 70%, 100% 100%;
  background-repeat:  repeat, repeat, no-repeat;
  color: #fff;
  padding: 160px 0;
  @include media-breakpoint-down(md) {
    padding: 120px 0;
  }
}

.services-merit-content-container {
  position: relative;
  // Merit
  h1 {
    font-size: 200px;
    color: $white;
    font-family: $font-en-normal;
    position: absolute;
    z-index: 0;
    line-height: 1;
    margin-bottom: 8px;
    padding: 0;
    background: linear-gradient(180deg, #02007C 0%, rgba(2, 0, 124, 0) 100%);
    background-clip: text; //テキストでくり抜く
    -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    @include media-breakpoint-down(md) {
      font-size: 160px;
      padding: 0;
      top: -32px;
      left: 0;
    }
    @include media-breakpoint-down(sm) {
      font-size: 120px;
      padding: 0;
      top: -56px;
      left: 0;
    }
  }
  .services-merit-title-container {
    position: relative;
    z-index: 1;
    .services-merit-header-text {
      font-family: $font-jp-bold;
      margin-bottom: 24px;
      @include media-breakpoint-down(md) {
        margin-bottom: 12px;
      }
    }
    .services-merit-header-title {
      font-family: $font-jp-bold;
      font-size: 32px;
      line-height: 1.4;
      margin-bottom: 24px;
      @include media-breakpoint-down(md) {
        font-size: 24px;
      }
    }
    .services-merit-desc {
      line-height: 2;
      font-family: $font-jp-regular;
    }
  }
}

.service-merit-card-container {
  display: flex;
  flex-direction: column;
  .merit-card {
    display: flex;
    position: relative;
    padding: 24px 64px 24px 40px;
    background: #fff;
    border-radius: 3px;
    color: $text-black;
    margin-bottom: 24px;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
      padding: 6%;
    }
    .merit-card-icon {
      flex-basis: 40%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      @include media-breakpoint-down(sm) {
        flex-basis: 50%;
        justify-content: center;
        margin-bottom: 40px;
      }
      .merit-header-text {
        writing-mode: vertical-lr;
        font-size: 32px;
        font-family: $font-en-normal;
        color: $secondary;
        opacity: 0.1;
        margin: 0 24px 0 0;
        @include media-breakpoint-down(md) {
          flex-direction: column;
          margin: 0;
        }
        @include media-breakpoint-down(sm) {
          margin: 0 12px 0 0;
          font-size: 24px;
        }
      }
      .merit-header-img {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          @include media-breakpoint-down(md) {
             width: 80%;
          }
          @include media-breakpoint-down(sm) {
             width: 100%;
          }
        }
      }
      
    }
    .merit-card-text {
      flex-basis: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .merit-card-text-header {
        color: $tertiary;
        font-family: $font-en-normal;
        margin: 0 0 16px 0;
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 40px;
          height: 1px;
          background: $tertiary;
          left: 80px;
          bottom: 12px;
        }
      }
      .merit-card-title {
        color: $secondary;
        font-size: 24px;
        margin: 0 0 8px 0;
        font-family: $font-jp-bold;
        line-height: 1.4;
        @include media-breakpoint-down(md) {
          font-size: 18px;
        }
      }
      .merit-card-text-desc {
        line-height: 1.8;
        text-align: justify;
      }
      @include media-breakpoint-down(sm) {
        flex-basis: 50%;
      }
    }
  }
}

</style>