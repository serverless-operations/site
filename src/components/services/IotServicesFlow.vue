<template>
  <div>
    <section class="page-section-container">

      <div class="container services-flow-title-container">
        <div class="row">
          <h2 class="content-section-title text-center">
            Flow
            <span>支援の具体的な流れ</span>
            <hr class="title-bottom-line">
          </h2>
        </div>
      </div>

      <v-container class="services-flow-content-container">

        <v-row justify="center">
          <v-col cols="11" md="8" lg="6">
            <p class="flow-text-anim">
              サーバーレスオペレーションズでは、以下のような流れで支援を行います。
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="11" md="10" lg="9">

            <v-row justify="center" class="services-flow-card">
              <v-col cols="12" md="5" class="flow-title-container">
                <span>Step 01</span>
                <h3>要件のヒアリング</h3>
              </v-col>
              <v-col cols="12" md="7" class="flow-desc-container">
                <p>
                  本質的に解決したい課題や事業・プロダクトの⽅向性からヒアリングを⾏い、どういったものをどのように作ればよいのか方針を決定していきます。
                </p>
              </v-col>
            </v-row>

            <v-row justify="center" class="services-flow-card">
              <v-col cols="12" md="5" class="flow-title-container">
                <span>Step 02</span>
                <h3>AWSサービス選定</h3>
              </v-col>
              <v-col cols="12" md="7" class="flow-desc-container">
                <p>
                  使⽤するAWSサービスを選定し、アーキテクチャ設計を⾏います。
                </p>
              </v-col>
            </v-row>

            <v-row justify="center" class="services-flow-card">
              <v-col cols="12" md="5" class="flow-title-container">
                <span>Step 03</span>
                <h3>実装方法・ツール選定</h3>
              </v-col>
              <v-col cols="12" md="7" class="flow-desc-container">
                <p>
                  CI/CDの⽅針や使⽤するInfrastructure as codeのツールを選定します。サンプル実装などをもとに、お客様に実装⽅法やワークフローを共有します。
                </p>
              </v-col>
            </v-row>

            <v-row justify="center" class="services-flow-card">
              <v-col cols="12" md="5" class="flow-title-container">
                <span>Step 04</span>
                <h3>開発スタート</h3>
              </v-col>
              <v-col cols="12" md="7" class="flow-desc-container">
                <p>
                  サーバーレスオペレーションズと開発を分担、ソースレビュー等の開発サポートのみなどもお選びいただけます。
                </p>
              </v-col>
            </v-row>

            <v-row justify="center" class="services-flow-card">
              <v-col cols="12" md="5" class="flow-title-container">
                <span>Step 05</span>
                <h3>運⽤開始</h3>
              </v-col>
              <v-col cols="12" md="7" class="flow-desc-container">
                <p>
                  運用開始後に、必要に応じて運⽤サポートも可能です。
                </p>
              </v-col>
            </v-row>

          </v-col>
        </v-row>

        <v-row justify="center" class="flow-cta-container">
          <v-col cols="11" md="10" lg="9">
            <PostCTA />
          </v-col>
        </v-row>

      </v-container>

    </section>
  </div>
</template>

<script>
import PostCTA from '~/components/PostCTA'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    PostCTA
  },
  mounted() {
    this.FlowTitleAnimation(),
    this.FlowAnimation()
  },
  methods: {
    FlowTitleAnimation() {
      let object = {
        el: '.services-flow-title-container h2',
        duration: 1.2
      }
      gsap
        .timeline({
          defaults: { ease: 'Expo.easeInOut', duration: 1.2 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: '.services-flow-title-container', // この要素と交差するとイベントが発火
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
    FlowAnimation() {
      gsap.timeline({
        scrollTrigger: {
          // markers: true, // マーカーを表示するか（開発用）
          // scrub: 1,
          trigger: '.services-flow-content-container', // この要素と交差するとイベントが発火
          start: 'top 95%', // ウィンドウのどの位置を発火の基準点にするか
          end: 'bottom 10%', // ウィンドウのどの位置をイベントの終了点にするか
          toggleActions: 'play none none none', // スクロールイベントで発火するアニメーションの種
        },
      })
      .fromTo( '.flow-text-anim', {
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
      .fromTo( '.services-flow-card', {
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
  background-color: $light-gray-2;
  color: $secondary;
  @include media-breakpoint-down(md) {
    padding: 120px 0 60px 0;
  }
  p {
    font-family: $font-jp-regular;
    line-height: 32px;
    text-align: justify;
  }
}

.services-flow-content-container {
  color: $text-black;
  .services-flow-card {
    border-radius: 3px;
    margin-bottom: 16px;
    box-shadow: 4px 4px 40px rgba(207, 214, 226, 0.5);
    .flow-title-container {
      background: #fff;
      padding: 32px 48px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      border-right: 1px solid $light-gray-1;
      @include media-breakpoint-down(sm) {
        border-right: 0;
        border-bottom: 1px solid $light-gray-1;
        padding: 16px 24px;
      }
      span {
        color: $primary;
        font-family: $font-en-normal;
        margin: 0 0 4px 0;
        position: relative;
        @include media-breakpoint-down(sm) {
          margin: 0;
        }
        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 40px;
          height: 1px;
          background: $primary;
          left: 80px;
          bottom: 12px;
        }
      }
      h3 {
        font-size: 18px;
        font-family: $font-jp-bold;
        color: $secondary;
      }
    }
    .flow-desc-container {
      padding: 32px 48px;
      background: $light-gray-2;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      @include media-breakpoint-down(sm) {
        padding: 16px 24px;
      }
      p {
        color: $text-black;
        margin: 0;
        line-height: 1.6;
      }
    }
  }
} // services-usecase-content-container

.flow-cta-container {
  margin-top: 120px;
  @include media-breakpoint-down(md) {
    margin-top: 80px;
  }
}


</style>