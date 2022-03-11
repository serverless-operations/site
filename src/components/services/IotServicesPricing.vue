<template>
  <div>
    <section class="page-section-container">

      <div class="container services-pricing-title-container">
        <div class="row">
          <h2 class="content-section-title text-center">
            Pricing
            <span>４つのプランと料金</span>
            <hr class="title-bottom-line">
          </h2>
        </div>
      </div>

      <v-container class="services-pricing-content-container">

        <v-row justify="center">
          <v-col cols="11" sm="9" md="12" lg="9">
            <v-row justify="center">

              <v-col cols="12" md="6">

                <div class="service-pricing-card">
                  <div class="service-card-header">
                    <span class="plan-number">Plan 01</span>
                    <h3>
                      Chat & Mail
                      <span>チャットやメールでのコンサルティングサポート</span>
                    </h3>
                    <p class="pricing-desc">
                      AWSクラウド側の技術的なサポートをチャットやメールのみで⾏います。設計や実装でつまづいた時、⽅針のお悩みごとをサポートします。
                    </p>
                    <p class="price-text">
                      400,000 <span>円/⽉</span> 
                    </p>
                    <!-- <a class="pricing-button" href="https://calendly.com/slsops/office-hours?month=2020-12">
                      オンライン無料相談を予約する
                    </a> -->
                  </div>        
                  <div class="service-pricing-list">
                    <ul>
                      <li>チャット・メール対応</li>
                      <li>AWSでの設計や実装方針の相談</li>
                    </ul>
                  </div>
                </div>

              </v-col>

              <v-col cols="12" md="6">

                <div class="service-pricing-card">
                  <div class="service-card-header">
                    <span class="plan-number">Plan 02</span>
                    <h3>
                      Architecture
                      <span>アーキテクチャ設計</span>
                    </h3>
                    <p class="pricing-desc">
                      AWSクラウド側の実装をする上で必要な設計を⾏います。お客さまの開発チームでも実装ができるような体制を整えます。
                    </p>
                    <p class="price-text">
                      1,000,000 <span>円/⽉</span> 
                    </p>
                    <!-- <a class="pricing-button" href="https://calendly.com/slsops/office-hours?month=2020-12">
                      オンライン無料相談を予約する
                    </a> -->
                  </div>
                  <div class="service-pricing-list">
                    <ul>
                      <li>アーキテクチャ設計</li>
                      <li>データ設計</li>
                      <li>プログラミング設計</li>
                      <li>CI/CD設計</li>
                    </ul>
                  </div>
                </div>

              </v-col>

              <v-col cols="12" md="6">

                <div class="service-pricing-card">
                  <div class="service-card-header">
                    <span class="plan-number">Plan 03</span>
                    <h3>
                      Proof of Concept
                      <span>PoC実装</span>
                    </h3>
                    <p class="pricing-desc">
                      PoCの計画から実装までを行います。成果に対しての計画づくり、製品やシステムの簡易版プロトタイプを作成し、目的の効果が得られるか検証します。
                    </p>
                    <p class="price-text">
                      1,200,000 <span>円/⽉</span> 
                    </p>
                    <!-- <a class="pricing-button" href="https://calendly.com/slsops/office-hours?month=2020-12">
                      オンライン無料相談を予約する
                    </a> -->
                  </div>
                  <div class="service-pricing-list">
                    <ul>
                      <li>概念実証</li>
                      <li>製品やシステムの簡易版作成</li>
                      <li>実装</li>
                    </ul>
                  </div>
                </div>

              </v-col>

              <v-col cols="12" md="6">

                <div class="service-pricing-card">
                  <div class="service-card-header">
                    <span class="plan-number">Plan 04</span>
                    <h3>
                      Production
                      <span>プロダクション実装</span>
                    </h3>
                    <p class="pricing-desc">
                      プロダクション（本番環境）にリリースするための実装を⾏います。お客さまの開発チームの⼀員としてチームを主導し、製品のリリースを⾏います。
                    </p>
                    <p class="price-text">
                      1,600,000 <span>円/⽉</span> 
                    </p>
                    <!-- <a class="pricing-button" href="https://calendly.com/slsops/office-hours?month=2020-12">
                      オンライン無料相談を予約する
                    </a> -->
                  </div>
                  <div class="service-pricing-list">
                    <ul>
                      <li>課題ヒアリング</li>
                      <li>プロジェクトサマリー</li>
                      <li>開発ガイドライン</li>
                      <li>プロダクション実装</li>
                      <li>プロダクトリリース</li>
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
        el: '.services-pricing-title-container h2',
        duration: 1.2
      }
      gsap
        .timeline({
          defaults: { ease: 'Expo.easeInOut', duration: 1.2 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: '.services-pricing-title-container', // この要素と交差するとイベントが発火
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
          trigger: '.services-pricing-content-container', // この要素と交差するとイベントが発火
          start: 'top 100%', // ウィンドウのどの位置を発火の基準点にするか
          end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
        },
      })
      .fromTo( '.pricing-text-anim', {
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
      .fromTo( '.service-pricing-card', {
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
  background-position: center center;
  background-size: 100%;
  background-color: rgba($light-gray-2, 0.7);
  background-blend-mode: lighten;
  @include media-breakpoint-down(md) {
    padding: 120px 0;
  }
  p {
    color: $text-black;
    font-family: $font-jp-regular;
    line-height: 32px;
    text-align: justify;
  }
}

.service-pricing-card {
  background: #FFFFFF;
  box-shadow: 8px 24px 50px rgba(207, 214, 226, 0.6);
  border-radius: 3px;
  color: $secondary;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  .service-card-header {
    padding: 40px 40px 24px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    @include media-breakpoint-down(md) {
      padding: 20px 20px 12px 20px;
    }
    @include media-breakpoint-down(sm) {
      padding: 8% 8% 4% 8%;
    }

    .plan-number {
      color: $mid-gray-2;
      font-family: $font-en-normal;
      margin: 0 0 16px 0;
      position: relative;
      display: block;
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 40px;
        height: 1px;
        background: $mid-gray-2;
        left: 80px;
        bottom: 12px;
      }
    }
    // タイトル
    h3 {
      font-size: 40px;
      text-align: center;
      margin-bottom: 32px;
      line-height: 1.2;
      position: relative;
      font-family: $font-en-normal;
      display: flex;
      flex-direction: column;
      span {
        display: block;
        font-size: 14px;
        font-family: $font-jp-bold;
        line-height: 1.3;
      }
    }
    .pricing-desc {
      color: $text-black;
      font-family: $font-jp-regular;
      line-height: 24px;
      letter-spacing: -1px;
    }

    // 金額
    .price-text {
      border-top: 1px solid $light-gray-1;
      padding-top: 24px;
      text-align: center;
      font-size: 32px;
      font-family: $font-jp-bold;
      margin-bottom: 0;
      position: relative;
      display: flex;
      justify-content: center;
      color: $secondary;
      span {
        font-size: 14px;
        line-height: 3;
        margin-left: 10px;
      }
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

  // 無料相談へのリンク
  .pricing-button {
    background: $tertiary;
    color: #fff;
    display: block;
    margin: 16px;
    padding: 12px 16px;
    border-radius: 3px;
    font-size: 14px;
    text-align: center;
    font-family: $font-jp-bold;
    text-decoration: none;
  }

  // 対応内容リスト
  .service-pricing-list {
    height: 100%;
    background: $light-gray-2;
    padding: 24px 40px;
    display: flex;
    flex-direction: column;
    @include media-breakpoint-down(md) {
      padding: 20px;
    }
    @include media-breakpoint-down(sm) {
      padding: 8%;
    }
    ul {
      li {
        list-style-image: url('../../assets/images/services/iot/icon-price-list-check.svg');
        font-family: $font-jp-regular;
        margin-bottom: 4px;
      }
    }
  }
}

</style>