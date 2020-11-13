<template>
  <div class="v-content">
    
    <div class="container section-title">
      <div class="row">
        <h2 class="text-center">
          Clients
          <span>クライアント</span>
        </h2>
      </div>
    </div>
  
    <div class="clients-image-container d-flex">

      <img
        src="../assets/images/clients/clients-lixil.svg"
        alt="ServerlessOperations Clients LIXIL"
        class="clients-image"
      />
      <img
        src="../assets/images/clients/clients-htb.svg"
        alt="ServerlessOperations Clients HTB 北海道テレビ"
        class="clients-image"
      />
      <img
        src="../assets/images/clients/clients-tokion.svg"
        alt="ServerlessOperations Clients TOKION"
        class="clients-image"
      />
      <img
        src="../assets/images/clients/clients-serverworks.svg"
        alt="ServerlessOperations Clients Serverworks"
        class="clients-image"
      />
      <img
        src="../assets/images/clients/clients-geolonia.svg"
        alt="ServerlessOperations Clients GEOLONIA"
        class="clients-image"
      />
      <img
        src="../assets/images/clients/clients-infas.svg"
        alt="ServerlessOperations Clients INFAS PIBLICATIONS"
        class="clients-image"
      />
      <img
        src="../assets/images/clients/clients-libelize.svg"
        alt="ServerlessOperations Clients LIBELIZE"
        class="clients-image"
      />
      <img
        src="../assets/images/clients/clients-maas.svg"
        alt="ServerlessOperations Clients MAAS GLOBAL"
        class="clients-image"
      />
      <img
        src="../assets/images/clients/clients-alis.svg"
        alt="ServerlessOperations Clients ALIS"
        class="clients-image"
      />

    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.titleAnimation(),
    this.imageStagger()
  },
  methods: {
    titleAnimation() {
      gsap
        .timeline({
          defaults: { ease: 'Expo.easeInOut', duration: 1.6 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: '.section-title', // この要素と交差するとイベントが発火
            start: 'top 95%', // ウィンドウのどの位置を発火の基準点にするか
            end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
          },
        })
        .fromTo('.section-title h2', {
          opacity: 0,
          y: 0,
          scale: 0.98,
        }, {
          opacity: 1,
          scale: 1,
          y: -20,
        })
    },
    imageStagger() {
      gsap
        .timeline({
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            // scrub: 1,
            trigger: '.clients-image-container', // この要素と交差するとイベントが発火
            start: 'top 95%', // ウィンドウのどの位置を発火の基準点にするか
            end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
          },
        })
        .to('.clients-image', {
          y: 0, // 少し上に移動させる
          opacity: 1,
          x: 0,
          scale: 1,
          ease: 'Expo.easeInOut',
          duration: 1.6,
          // 複数要素を扱うプロパティ
          stagger: {
            from: 'start', //左側から
            axis: 'x',
            amount: 0.8 // 0.8秒おきに
          }
        })
      }
  }
}
</script>

<style lang="scss" scoped>
  .v-content {
    padding: 80px 0 160px 0;
    background: $light-gray-2;
    display: block;
    flex: initial;
    overflow: hidden;
    @include media-breakpoint-down(md) {
      padding: 40px 0;
    }
  }
  .section-title h2 {
    color: $secondary;
    font-size: 3.5rem;
    font-family: $font-en-normal;
    font-weight: normal;
    line-height: 1.25;
    text-align: center;
    display: block;
    width: 100%;
    margin-bottom: 64px;
    position: relative;
    @include media-breakpoint-up(md) {
      font-size: 4rem;
    }
    @include media-breakpoint-down(md) {
      margin-bottom: 32px;
    }
    span {
      display: block;
      font-size: 1rem;
      margin-top: 8px;
      font-weight: normal;
      font-family: $font-jp-normal;
    }
    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 1px;
      background-color: $secondary;
      position: absolute;
      left: 50%;
      margin-left: -40px;
      bottom: -24px;
    }
  }
  .clients-image-container {
    width: 80%;
    max-width: 1500px;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    @include media-breakpoint-down(md) {
      width: 90%;
      max-width: 90%;
    }
    @include media-breakpoint-down(sm) {
      width: 100%;
      max-width: 100%;
    }
    .clients-image {
      opacity: 0;
      width: 100%;
      height: auto;
      flex-basis: calc(20% - 24px);
      margin: 12px;
      box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
      border-radius: 3px;
      backface-visibility: hidden;
      @include media-breakpoint-down(md) {
        flex-basis: calc(25% - 36px);
        margin: 12px;
      }
      @include media-breakpoint-down(sm) {
        width: 45%;
        flex-basis: calc(50% - 24px);
        margin: 8px;
      }
    }
  }
</style>