<template>
  <div class="">

    <div class="v-content">

      <div class="ctarects">
        <div class="ctarect"></div>
        <div class="ctarect"></div>
        <div class="ctarect"></div>
        <div class="ctarect"></div>
        <div class="ctarect"></div>
        <div class="ctarect"></div>
        <div class="ctarect"></div>
        <div class="ctarect"></div>
        <div class="ctarect"></div>
      </div>

      <div class="container">

        <v-row align="center" justify="center">
          <v-col cols="12">
            <h2>オンライン無料相談</h2>
            <h3>サーバーレスの悩み事、お気軽にご相談ください</h3>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col cols="12" md="6">
            <p class="cta-header-text">
              サーバーレスオペレーションズの担当者がオンラインで皆さんのサーバーレスに関するご相談やお問い合わせに無料でお答えいたします。
              <a href="https://calendly.com/slsops/office-hours">カレンダー
                <small>(Calendly)</small>
              </a>
              からお好きな日程をブッキングしていたくだけで、お申込みいただけます。
            </p>
          </v-col>
        </v-row>

        <v-row align="center" justify="center" justify-md="space-between" class="cta-task-container">
          <v-col class="cta-task-list-container" cols="12" sm="7" md="9">
            <h3>こんなお悩みや課題を<br class="d-md-none" />抱えていませんか？</h3>
            <div class="cta-task-list">
              <ul>
                <li>サーバーレスでやりたいことがあるが<br>何から始めていいかわからない</li>
                <li>サーバーレスのアーキテクチャレビューをしてほしい</li>
                <li>サーバーレスで進めようとしているが<br>適しているのかわからない</li>
              </ul>
              <ul>
                <li>クラウド技術習得やこれからのキャリアに迷っている</li>
                <li>社内でサーバーレスを広めたいがブロッカーがある</li>
                <li>新卒エンジニアだがサーバーレスの勉強を<br>どうしたらいいのかわからない</li>
              </ul>
            </div>

          </v-col>

          <v-col class="cta-task-overview" align="start" justify="center" cols="12" sm="5" md="3">
            <ul>
              <li class="target">対象：法人・個人</li>
              <li class="hour">平日 10:00 – 19:00</li>
              <li class="min">1社 or 1人 / 60分</li>
              <li class="calendar">
                <a href="https://calendly.com/slsops/office-hours">
                  カレンダーから簡単予約
                </a>
              </li>
            </ul>
          </v-col>

        </v-row>

      </div>

    </div>

    <div class="cta-button-container">
      <a class="cta-button" href="https://calendly.com/slsops/office-hours">
        <span class="cta-en">Office Hours</span>
        オンライン無料相談を<br class="d-md-none" />カレンダーから予約する
      </a>
    </div>


  </div>

</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.CtaSquareParticles()
  },
  methods: {
    CtaSquareParticles() {
      let object = {
        el: '.ctarect',
        duration: 12
      }
      gsap.fromTo(object.el, {
        opacity: 'random(0, 0.4)',
        y: 'random(-800, 100)',
        x: '-1',
        scale: 'random(0, 1)',
        repeatRefresh: true,
        transformOrigin: 'right'
      }, {
        duration: 'random(6, 30)',
        opacity: 'random(0, 0.2)',
        scale: 'random(0, 0.3)',
        x: '1',
        y: 'random(-200, 900)',
        modifiers: {
          x: x => `${Math.sin(parseFloat(x)) * 1200}px`
        },
        stagger: {
          amount: 0.1, // 秒おきに
          each: 3,
          repeat: -1
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-content {
  background-image: url('../assets/images/cta/cta-particle.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  background-size: cover;
  background-color: $tertiary;
  position: relative;

  @include media-breakpoint-down(md) {
    padding-bottom: 64px;
  }

  @include media-breakpoint-down(sm) {
    background-image: url('../assets/images/cta/cta-texture-sp.svg');
  }

  .container {
    position: relative;
    z-index: 3;
    @include media-breakpoint-down(sm) {
      width: 90vw;
    }
  }

  h2 {
    margin-top: 120px;
    font-size: 48px;
    text-align: center;
    font-family: $font-jp-bold;
    margin-bottom: 40px;

    @include media-breakpoint-down(sm) {
      margin-top: 64px;
      margin-bottom: 16px;
      font-size: 24px;
    }
    span {
      display: block;
      font-size: 1.125rem;
      margin-bottom: 8px;
      opacity: 0.5;
      font-weight: normal;
      font-family: $font-en-normal;
      @include media-breakpoint-up(sm) {
        font-size: 1.5rem;
      }
    }
  }
  h3 {
    text-align: center;
    font-size: 24px;
    @include media-breakpoint-down(sm) {
      font-size: 14px;
    }
  }
  .v-card__link:focus:before {
    opacity: 0;
  }

  .cta-header-text{
    font-family: $font-jp-regular;
    font-size: 1rem;
    text-align: justify;
    line-height: 2;
    padding: 0;
    margin-bottom: 40px;
    @include media-breakpoint-down(sm) {
      font-size: 14px;
    }
    a {
      color: #fff;
      text-decoration: none;
      font-family: $font-jp-bold;
      &:hover {
        text-decoration: underline;
      }
    }
  } // p-cta

  .cta-task-container {
    background-color: #fff;
    border-radius: 3px;
    color: $primary;
    box-shadow: 8px 24px 50px rgba($primary, 0.4);
    position: relative;
    z-index: 3;
    .cta-task-list-container {
      font-size: 14px;
      padding: 0 48px 16px 48px;
      @include media-breakpoint-down(sm) {
        padding: 0 24px 24px 24px;
      }

      // こんなお悩み
      h3 {
        font-family: $font-jp-bold;
        font-size: 18px;
        padding-bottom: 16px;
        margin: 32px 0 24px 0;
        border-bottom: 1px solid $light-gray-1;
        color: $secondary;
      }
      .cta-task-list {
        display: flex;
        @include media-breakpoint-down(sm) {
          flex-direction: column;
        }
        ul {
          margin-right: 4px;
          @include media-breakpoint-down(sm) {
            padding-left: 0;
            margin-right: 0;
          }
          li {
            list-style: none;
            margin-bottom: 16px;
            background-image: url("../assets/images/cta/cta-icon-check.svg");
            padding-left: 32px;
            background-position:0px 1px;
            font-family: $font-jp-bold;
            color: $secondary;
            @include media-breakpoint-down(sm) {
              margin-bottom: 8px;
              br {
                display: none;
              }
            }
          }
        }
      }
    }
    // 対象、時間、カレンダー
    .cta-task-overview {
      background-color: $primary;
      color: #fff;
      min-height: 320px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 3px 3px 0;
      @include media-breakpoint-down(sm) {
        min-height: 480px;
      }
      @include media-breakpoint-down(xs) {
        min-height: 200px;
      }
      ul {
        padding: 0;
        li {
          margin-bottom: 14px;
          font-size: 14px;
          list-style: none;
          @include media-breakpoint-down(sm) {
            margin-bottom: 8px;
            font-size: 14px;
          }
          &.target {
            background-image: url("../assets/images/cta/cta-icon-target.svg");
            padding-left: 32px;
          }
          &.hour {
            background-image: url("../assets/images/cta/cta-icon-hour.svg");
            padding-left: 32px;
          }
          &.min {
            background-image: url("../assets/images/cta/cta-icon-min.svg");
            padding-left: 32px;
            background-position: 0px 3px;
          }
          &.calendar {
            background-image: url("../assets/images/cta/cta-icon-calendar.svg");
            padding-left: 32px;
            a {
              color: #fff;
              text-decoration: none;
              transition: all 2s cubic-bezier(0.76, 0, 0.3, 1);
              &:hover {
                opacity: 0.9;
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
}
// フルサイズのボタン
.cta-button-container {
  background-color: $tertiary;
}
.cta-button {
  margin-top: -80px;
  display: block;
  text-align: center;
  background: $secondary;
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 2;
  min-height: 360px;
  font-size: 24px;
  font-family: $font-jp-bold;
  line-height: 360px;
  transition: all 0.4s cubic-bezier(0.76, 0, 0.3, 1);
  &:hover {
    // background-color: $tertiary;
    opacity: 0.9;
  }
  @include media-breakpoint-down(md) {
    margin-top: -120px;
    min-height: 240px;
    line-height: 1.2;
    font-size: 24px;
    padding-top: 110px;
  }
  @include media-breakpoint-down(sm) {
    margin-top: 0;
    min-height: 240px;
    line-height: 1.4;
    font-size: 24px;
    padding-top: 90px;
  }
  .cta-en {
    filter: blur(2px);
    position: absolute;
    display: block;
    z-index: 0;
    left: 0;
    top: 24px;
    right: 0;
    bottom: 0;
    opacity: 0.08;
    font-family: $font-en-light;
    font-size: 15vw;
    transition: all 0.4s cubic-bezier(0.76, 0, 0.3, 1);
    @include media-breakpoint-down(md) {
      top: 10%;
      font-size: 14vw;
    }
    @include media-breakpoint-down(sm) {
      top: 20%;
      font-size: 14.5vw;
      filter: blur(1px);
    }
  }
  &:hover .cta-en {
    opacity: 0.2;
    left: 8px;
    filter: blur(0);
  }
  // Border
  &::after {
    content: '';
    position: absolute;
    display: block;
    z-index: 0;
    width: 100px;
    height: 1px;
    background: #fff;
    right: 20%;
    bottom: 50%;
    transition: transform 0.4s cubic-bezier(0.76, 0, 0.3, 1);
    transform: scaleX(0);
    transform-origin: right center;
    @include media-breakpoint-down(md) {
      right: 16%;
    }
    @include media-breakpoint-down(sm) {
      right: 20%;
      width: 80px;
    }
    @include media-breakpoint-down(xs) {
      right: 6%;
      width: 32px;
    }
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left center;
    transition: transform 0.4s cubic-bezier(0.76, 0, 0.3, 1);
  }
}
// gsap アニメーション
.ctarects {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}
.ctarect {
  opacity: 0;
  width: 100px;
  height: 100px;
  background-color: #fff;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 0;
}
</style>

