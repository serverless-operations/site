<template>
  <div class="v-content">
    <div class="container top-partners">
      <div class="row">
        <h2 class="text-center content-section-title">
          Partners
          <span>パートナー</span>
          <hr class="title-bottom-line">
        </h2>
      </div>
    </div>

    <v-container>
      <div class="row justify-center partner-card-container">

        <a class="partner-card col col-md-4 col-lg-3" href="https://aws.amazon.com/jp/partners/consulting/">
          <div class="partner-card-logo d-flex justify-center align-center">
            <img
              src="@/assets/images/partners/aws-logo.svg"
              alt="AWS Consulting Partner"
            >
          </div>
          <div class="partner-card-text">
            <p class="partner-company-name">Amazon Web Service</p>
            <h3 class="partner-name">AWS Partner Network</h3>
            <p class="partner-desc">AWS Partner Network (APN)のセレクトコンサルティングパートナー、AWS Lambdaパートナーの認定を受けています。</p>
          </div>
        </a>
      
        <a class="partner-card col col-md-4 col-lg-3" href="https://spn.getshifter.io/">
          <div class="partner-card-logo d-flex justify-center align-center">
            <img
              src="@/assets/images/partners/shifter-logo.svg"
              alt="Digitalcube Shifter Partner Network"
            >
          </div>
          <div class="partner-card-text">
            <p class="partner-company-name">Digitalcube</p>
            <h3 class="partner-name">Shifter Partner Network</h3>
            <p class="partner-desc">Serverless Static WordPress ホスティングサービス「Shifter」のPartner Networkの一員です。</p>
          </div>
        </a>
      </div>
    </v-container>
    

  </div>
</template>


<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.titleAnimation(),
    this.imageStagger()
  },
  methods: {
    titleAnimation() {
      gsap
        .timeline({
          defaults: { ease: 'Expo.easeInOut', duration: 1.2 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: '.top-partners', // この要素と交差するとイベントが発火
            start: 'top 98%', // ウィンドウのどの位置を発火の基準点にするか
            end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
          },
        })
        .fromTo( '.top-partners h2', {
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
          delay: 0.2,
          width: 80,
        },'<')
    },
    imageStagger() {
      gsap
        .timeline({
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            // scrub: 1,
            trigger: '.partner-card-container', // この要素と交差するとイベントが発火
            start: 'top 95%', // ウィンドウのどの位置を発火の基準点にするか
            end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
          },
        })
        .to('.partner-card', {
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
            amount: 0.2 // 0.8秒おきに
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-content {
  padding: 80px 0 160px 0;
  display: block;
  flex: initial;
  overflow: hidden;
  background-image: url('../assets/images/top-news-contact-bk.svg');
  background-position: top 420px;
  background-size: 100%;
  background-color:rgba(255, 255, 255, 0.7);
  background-blend-mode:lighten;
  @include media-breakpoint-down(md) {
    padding: 40px 0;
  }
}

@include SectionTitle;

.partner-card {
  opacity: 0;
  display: block;
  border-radius: 3px;
  box-shadow: 8px 24px 50px rgba(207, 214, 226, 0.6);
  padding: 64px 0 0 0;
  text-decoration: none;
  margin: 24px;
  height: 100%;
  background: #fff;
  &:hover {
    .partner-card-logo::after {
      transform: scaleX(1);
      transform-origin: left center;
      transition: transform 0.4s cubic-bezier(0.76, 0, 0.3, 1);
    }
  }
  @include media-breakpoint-down(sm) {
    margin: 6px;
  }
  .partner-card-logo {
    padding-bottom: 64px;
    border-bottom: 1px solid $light-gray-1;
    position: relative;
      // Border
      &::after {
        content: '';
        position: absolute;
        display: block;
        z-index: 0;
        width: 100%;
        height: 1px;
        background: $secondary;
        left: 0;
        bottom: 0;
        transition: transform 0.4s cubic-bezier(0.76, 0, 0.3, 1);
        transform: scaleX(0);
        transform-origin: right center;
      }
      
      img {
        max-height: 56px;
        @include media-breakpoint-down(sm) {
          max-height: 32px;
          max-width: 80%;
        }
      }
    }
  .partner-card-text {
    padding: 40px 24px;
    background: $light-gray-2;
    min-height: 240px;
    border-radius: 0 0 3px 3px;
    @include media-breakpoint-down(sm) {
      padding: 20px 12px;
      min-height: 220px;
    }
    .partner-company-name {
      color: $mid-gray-1;
      font-size: 10px;
      margin-bottom: 6px;
    }
    .partner-name {
      color: $secondary;
      font-family: $font-en-normal;
      font-size: 24px;
      margin-bottom: 16px;
      line-height: 1.2;
      @include media-breakpoint-down(sm) {
        font-size: 14px;
      }
    }
    .partner-desc {
      color: $text-black;
      font-size: 12px;
    }
  }
}


</style>