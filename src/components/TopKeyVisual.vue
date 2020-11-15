<template>
  <div class="p-mainvisual-content">

    <div class="rects">
      <div class="rect"></div>
      <div class="rect"></div>
      <div class="rect"></div>
      <div class="rect"></div>
      <div class="rect"></div>
      <div class="rect"></div>
      <div class="rect"></div>
      <div class="rect"></div>
      <div class="rect"></div>
    </div>
   

    <v-container>
      <h1>
        <img class="p-mainvisual__logomark"
            src="@/assets/images/top-main-logo.svg"
            alt="Serverless Operations サーバーレスオペレーションズ ロゴマーク">
      </h1>

        <div class="l-mainvisual-copytext">

          <h2 class="p-mainvisual__japanese-sloagan">
            <transition name="brandslogan-jp-1" appear>
              <span>
                サーバーレスオペレーションズは<br>
              </span> 
            </transition>
            <transition name="brandslogan-jp-2" appear>
              <span>
                お客さまと1つの“チーム”になり、<br>
              </span>
            </transition>
            <transition name="brandslogan-jp-3" appear>
              <span>
                サーバーレスに関する悩みを共に解決します。
              </span>
            </transition>
          </h2>

          <transition name="brandslogan-en" appear>
            <p>
              <img class="p-mainvisual__english-sloagan"
                  src="@/assets/images/top-main-copy.svg"
                  alt="Maximize the cloud value with serverless">
            </p>
          </transition>

        </div>

      <div id="scroll-line-animation"
          class="l-scroll-animation"
      >
        <span class="p-scroll-text">Scroll</span>
        <span class="p-scroll-line"></span>
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
    this.SquareParticles()
  },
  methods: {
    SquareParticles() {
      let object = {
        el: '.rect',
        duration: 12
      }
      gsap.fromTo(object.el, {
        opacity: 'random(0, 0.4)',
        y: 'random(-600, 100)',
        x: '-1',
        scale: 'random(0.1, 2)',
        repeatRefresh: true,
        transformOrigin: 'right'
      }, {
        duration: 'random(6, 30)',
        opacity: 'random(0, 0.2)',
        scale: 'random(0.1, 1)',
        x: '1',
        y: 'random(-200, 800)',
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
.p-mainvisual-content {
  width: 100vw;
  height: 100vh;
  max-height: 1024px;
  background: url('../assets/images/top-main-pattern-top.svg'),
    url('../assets/images/top-main-pattern-bottom.svg'),
    linear-gradient(45deg, $secondary 11.76%, $tertiary 88.21%);
  background-position: top right, bottom left, center;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: contain, contain, auto;
  overflow: hidden;
  position: relative;
  @include media-breakpoint-up(md) {
    //height: 61.8vw;
  }
  // スマホ時にスローガン画像がmain部分からはみ出ないように高さを指定
  @include media-breakpoint-down(sm) {
    min-height: 700px;
  }

  .container {
    position: relative;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 1024px;
    padding: 0;
  }

  // ブランドスローガンレイアウト
  .l-mainvisual-copytext {
    position: absolute;
    z-index: 1;

    @include media-breakpoint-up(md) {
      bottom: 7%;
      left: 7%;
      width: 800px;
    }

    @include media-breakpoint-down(sm) {
      top: 30%;
      left: 7%;
    }

    @include media-breakpoint-down(xs) {
      top: 15%;
      left: 7%;
    }

    // サーバーレスでクラウドの価値を最大限に
    .p-mainvisual__japanese-sloagan {
      font-family: $font-jp-normal;
      letter-spacing: 0.16em;
      font-size: 1.4rem;

      @include media-breakpoint-down(sm) {
        font-size: 1.8rem;
        line-height: 1.6;
        margin-bottom: 0;
      }

      @include media-breakpoint-down(xs) {
        font-size: 1.4rem;
      }

      @include media-breakpoint-up(md) {
        font-size: 1.8rem;
        line-height: 2;
        margin-bottom: 48px;
      }
    }
    // Maximize the cloud value with serverless
    .p-mainvisual__english-sloagan {
      transform: rotate(90deg);
      transform-origin: bottom left;

      @include media-breakpoint-down(sm) {
        height: 96px;
        position: absolute;
        bottom: -24px;
      }

      @include media-breakpoint-down(xs) {
        height: 80px;
      }

      @include media-breakpoint-up(md) {
        transform: initial;
        width: 100%;
        height: auto;
      }
    }
  } // l-mainvisual-copytext

  // Serverless Operations Logomark
  .p-mainvisual__logomark {
    position: absolute;
    width: 70vw;
    right: 15vw;
    top: 116px;
    z-index: 0;
    @include media-breakpoint-up(sm) {
      top: 156px;
      width: 60vw;
      right: 20vw;
    }
    @include media-breakpoint-up(md) {
      right: 112px;
      width: 42vw;
    }
  }

  // Serverless Operations Brandsquare
  .p-mainvisual__brandsquare {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 15%;
    transform: rotate(90deg);
    transform-origin: left left;
    @include media-breakpoint-up(md) {
      transform: initial;
      transform-origin: top left;
      width: 100vw;
      left: 0;
      top: 0;
    }
  }

  // Scroll Animation
  .l-scroll-animation {
    position: absolute;
    right: 1%;
    bottom: 7%;
    margin: 0 auto;
    height: 140px;
    width: 26px;

    .p-scroll-text {
      font-family: $font-en-light;
      display: block;
      transform: rotate(90deg);
      transform-origin: top right;
      position: absolute;
      top: 40px;
      right: 0;
      z-index: 1;
    }

    .p-scroll-line {
      width: 1px;
      height: 80px;
      display: block;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0) 50%
      );
      background-position: 0 -80px;
      background-size: 100% 200%;
      animation: scrolldown 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
      position: absolute;
      bottom: 0;
      right: 12px;
      z-index: 0;
    }

    @keyframes scrolldown {
      0% {
        background-position: 0 -80px;
      }
      75% {
        background-position: 0 0;
      }
      100% {
        background-position: 0 80px;
        opacity: 0.2;
      }
    }
  }

  // Animation
  .brandslogan-jp-1-enter-active {
    transition: all 1.3s cubic-bezier(.93,0,.1,1);
    opacity: 1;
  }

  .brandslogan-jp-1-enter {
    opacity: 0;
    padding-left: 64px;
    background-color: #fff;
  }

  .brandslogan-jp-2-enter-active {
    transition: all 1.8s cubic-bezier(.93,0,.1,1);
    opacity: 1;
  }

  .brandslogan-jp-2-enter {
    opacity: 0;
    padding-left: 64px;
    background-color: #fff;
  }

  .brandslogan-jp-3-enter-active {
    transition: all 2.2s cubic-bezier(.93,0,.1,1);
    opacity: 1;
  }

  .brandslogan-jp-3-enter {
    opacity: 0;
    padding-left: 64px;
    background-color: #fff;
  }

  .brandslogan-en-enter-active {
    transition: all 2s ease-in-out;
    transition-delay: 1s;
    opacity: 1;
  }

  .brandslogan-en-enter {
    opacity: 0;
  }

  // gsap アニメーション
  .rects {
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }
  .rect {
    opacity: 0;
    width: 100px;
    height: 100px;
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 10;
  }

} // p-mainvisual-content
</style>