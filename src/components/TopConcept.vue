<template>
  <div class="v-content">
    <div class="container">
      <v-row>
        <v-col class="p-top-concept--vertical-title">
          <h2 v-scroll-reveal.reset="{ delay: 500 }">Concept</h2>
        </v-col>
        <v-col cols="auto"
               class="p-top-concept--body"
               v-scroll-reveal.reset="{ delay: 250 }">
          <img class="p-top-concept--image-circles"
               src="../assets/images/top-concept-body-circles.svg"
               alt="コンセプトイメージ 中心の円筒"
               v-scroll-reveal.reset="{ delay: 1400 }">
          <img class="p-top-concept--image-square"
               src="../assets/images/top-concept-body-square.svg"
               alt="Serverless Operations Brand Square"
               v-scroll-reveal.reset="{ delay: 700 }">
          <img class="p-top-concept--image-core"
               src="../assets/images/top-concept-body-core.svg"
               alt="Serverless Operations 中心の小さい四角型のコアイメージ"
               v-scroll-reveal.reset="{ delay: 300 }">

          <v-row justify="start"
                 justify-md="end">
            <v-col class="p-top-concept--logo"
                   cols="auto">
              <img src="../assets/images/top-concept-logo.svg" alt="Serverless Operations 英語ロゴタイプフェイス" v-scroll-reveal.reset="{ delay: 1200 }">
            </v-col>
          </v-row>

          <v-row justify="center"
                 justify-md="start">
            <v-col class="p-top-concept--content"
                   cols="12"
                   md="7"
                   lg="5"
                   xl="3">

              <h3 v-scroll-reveal.reset="{ delay: 900  }">
                <transition name="top-concept-jp-1" appear>
                  <span>
                  サーバーレスで<br>
                  ビジネスのコアバリューに<br>
                  集中する
                  </span>
                </transition>
              </h3>

              <p v-scroll-reveal.reset="{ delay: 1100  }">Serverless Operationsは、これまでグローバルの第一線で培ってきたクラウド技術<small>（AWS − アマゾンウェブサービス）</small>の豊富な実績と知見を活かし、お客さまのサーバーレスによる開発や運用の支援、コンサルティングまで一貫してサポート。サーバーレスに関するさまざまな課題を解決いたします。</p>
              <span class="p-top-concept--more">
                <g-link to="/services">About Serverless Operations</g-link>
              </span>
            </v-col>
          </v-row>
        </v-col>
        <img class="p-top-concept--footer-image"
           src="../assets/images/top-concept-footer-bk.svg"
           alt="">
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.v-content {
  background-color: $white;
  width: 100vw;
  .container {
    padding-top: 62px;
    max-width: 100vw;
    width: 100vw;
    @include media-breakpoint-up(lg) {
      // max-width: 1600px;
    }
  }
  .p-top-concept {
    &--vertical-title {
      padding: 0 6px;
      @include media-breakpoint-up(sm) {
        padding: 0 12px;
      }
      h2 {
        writing-mode: vertical-rl;
        color: $primary;
        font-family: $font-en-light;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.75;
        @include media-breakpoint-up(sm) {
          font-size: 2.25rem;
          margin-right: 16px;
          margin-left: 4px;
        }
        @include media-breakpoint-up(md) {
          font-size: 3rem;
          margin-right: 32px;
          margin-left: 12px;
        }
      }
    }
    &--body {
      position: relative;
      z-index: 1;
      width: 100%;
      overflow: hidden;
      max-width: calc(100% - 40px);
      margin-bottom: 40px;
      padding: 30px 40px 104px;
      background: radial-gradient(
        81.89% 105.95% at 50.03% 40.06%,
        #2c48ff 0%,
        #00007d 100%
      );
      background-size: 150% auto;
      background-position: top center;
      background-repeat: no-repeat;
      clip-path: polygon(
        calc(100% - 64px) 0,
        0 0,
        0 calc(100% - 64px),
        64px 100%,
        100% 100%,
        100% 64px
      );
      @include media-breakpoint-up(sm) {
        max-width: calc(100% - 107px);
      }
      @include media-breakpoint-up(md) {
        max-width: calc(100% - 152px);
        padding: 74px 88px 74px;
        background: radial-gradient(
          81.89% 105.95% at 50.03% 50.06%,
          #2c48ff 0%,
          #00007d 100%
        );
        clip-path: polygon(
          calc(100% - 96px) 0,
          0 0,
          0 calc(100% - 96px),
          96px 100%,
          100% 100%,
          100% 96px
        );
      }
      @include media-breakpoint-up(md) {
        background-size: auto 112%;
        background-position: center;
        padding: 74px 88px 74px 200px;
        margin-bottom: 122px;
        clip-path: polygon(
          calc(100% - 96px) 0,
          0 0,
          0 calc(100% - 96px),
          96px 100%,
          100% 100%,
          100% 96px
        );
      }
    }

    &--image-circles,
    &--image-square,
    &--image-core {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      @include media-breakpoint-up(md) {
        top: 45%;
      }
    }
    // コンセプトイメージ 中心の円筒
    &--image-circles {
      mix-blend-mode: overlay;
      max-width: 140%;
      height: 110%;
      z-index: 2;
    }
    // Serverless Operations 中心の小さい四角型のコアイメージ
    &--image-core {
      max-width: 300px;
      z-index: 3;
      @include media-breakpoint-up(md) {
        max-width: 430px;
      }
    }
    // Serverless Operations Brand Square
    &--image-square {
      z-index: 1;
    }
    &--footer-image {
      z-index: 0;
      width: 100vw;
      position: absolute;
      left: 0;
      bottom: 0;
      display: none;
      @include media-breakpoint-up(md) {
        object-fit: fill;
        display: block;
      }
    }
    &--logo {
      text-align: left;
      @include media-breakpoint-up(md) {
        text-align: right;
      }
      img {
        width: 70%;
        max-width: 500px;
      }
    }
    &--obj {
      width: 100%;
    }

    &--content {
      margin-top: 220px;
      z-index: 4;
      h3 {
        font-family: $font-jp-normal;
        font-size: 1.375rem;
        letter-spacing: 1px;
        line-height: 1.27;
        margin-bottom: 24px;
        @include media-breakpoint-up(md) {
          font-size: 2rem;
          letter-spacing: 7px;
          line-height: 1.25;
          margin-bottom: 40px;
        }
      }
      p {
        font-family: $font-jp-normal;
        font-size: 1rem;
        line-height: 2;
        text-align: justify;
      }
    }
    // About Serverless Operations リンク
    &--more {
      text-align: right;
      padding-left: 24px;
      display: block;
      a {
        color: $white;
        font-family: $font-en-normal;
        font-size: 1rem;
        text-decoration: none;
        display: inline-block;
        position: relative;
        &::before {
          content: '';
          background-image: url('../assets/images/top-concept-more-object.svg');
          display: inline-block;
          height: 16px;
          width: 16px;
          position: absolute;
          top: 4px;
          left: -24px;
        }
      }
    }
  }
}
</style>