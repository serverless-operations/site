<template>
  <div class="v-content">
    
    <div class="container top-clients">
      <div class="row">
        <h2 class="text-center content-section-title">
          Clients
          <span>クライアント</span>
          <hr class="title-bottom-line">
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
      let object = {
        el: '.content-section-title',
        duration: 1.2
      }
      gsap
        .timeline({
          defaults: { ease: 'Expo.easeInOut', duration: 1.2 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: '.top-clients', // この要素と交差するとイベントが発火
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
          y: -10, // 少し上に移動させる
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

  @include SectionTitle;
  
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
      background: #fff;
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