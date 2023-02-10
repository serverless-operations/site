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
            <h3>エンタープライズ規模の社内向けニュースサイトWebAPIの実装例</h3>
            <p>
              Amazon API Gateway × AWS Lambda × Amazon DynamoDB を組み合わせたサーバーレスウェブAPIのデファクトスタンダードな構成です。PoC/MVPを想定した開発だけでなく、実⽤レベルで数万⼈に及ぶ全社員が⽇々利⽤するニュースサイトを構築することができます。Amazon API Gateway をAWS WAFを組み合わせることで社内利⽤のクライアントに限定することが可能で、Amazon Cognito と連携したユーザー認証認可を⾏います。
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" class="usecase-text-anim">
          <v-col cols="12" md="10">
            <p>
              <g-image src="@/assets/images/services/aws/aws-usecase-1.svg" alt="エンタープライズ規模の社内向けニュースサイトWebAPIの実装例のアーキテクチャ図" />
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" class="usecase-text-anim">
          <v-col cols="11" md="8">
            <h3>E-Commerce のリアルタイムな在庫管理実装例</h3>
            <p>
              Amazon DynamoDB に商品の情報と在庫数を管理し、Amazon API Gateway で受けた注⽂リクエストを AWS Lambda のロジックで処理します。該当商品の在庫が0未満にならないように、条件付き書き込みのオプションを利⽤して制御することが可能です。実例では約2万の同時接続ユーザーに対応し、DynamoDB Streams を活⽤した⾮同期処理・イベンドドリブンアーキテクチャを導⼊することで、リクエスト規模が⼤きく急なトラフィック増加が想定される場合でも柔軟に対応することが可能になっています。
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" class="usecase-text-anim">
          <v-col cols="12" md="10">
            <p>
              <g-image src="@/assets/images/services/aws/aws-usecase-2.svg" alt="E-Commerce のリアルタイムな在庫管理実装例のアーキテクチャ図" />
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
  @include media-breakpoint-down(md) {
    padding: 120px 0;
  }
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
