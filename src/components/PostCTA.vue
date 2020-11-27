<template>
  <div>
    <div class="post-cta-container">
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
      <a href="https://calendly.com/slsops/office-hours" target="_blank">
        <h5>オンライン無料相談</h5>
        <p>オンラインでサーバーレスに関するご相談やお問い合わせに無料でお答えいたします。カレンダーからお好きな日程をお申し込みいただけます。</p>
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
    this.SquareParticles()
  },
  methods: {
    SquareParticles() {
      let object = {
        el: '.rect',
        duration: 12
      }
      gsap.fromTo(object.el, {
        opacity: 'random(0.1, 0.15)',
        y: 'random(-100, 100)',
        x: -0.2,
        scale: 'random(0, 3)',
        repeatRefresh: true,
        transformOrigin: 'right'
      }, {
        duration: 'random(6, 30)',
        opacity: 'random(0, 0.1)',
        scale: 'random(0, 0.3)',
        x: 1,
        y: 'random(100, 600)',
        modifiers: {
          x: x => `${Math.sin(parseFloat(x)) * 1200}px`
        },
        stagger: {
          amount: 0.1, // 秒おきに
          each: 5,
          repeat: -1
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.post-cta-container {
  overflow: hidden;
  position: relative;
  background-color: $tertiary;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  margin-bottom: 64px;
  background-image: url('../assets/images/cta/cta-post-texture.svg');
  background-position: cover;
  transition: $soease;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $secondary;
    z-index: 0;
    transform: scaleX(0);
    transform-origin: 0 0;
    opacity: 1;
    transition: $soease;
  }
  &::before {
    content: 'Office Hours';
    color: #fff;
    position: absolute;
    left: 0;
    top: 6%;
    bottom: 0;
    right: 0;
    z-index: 0;
    font-family: $font-en-light;
    letter-spacing: 1px;
    font-size: 88px;
    opacity: 0.1;
    transition: $soease;
  }
  &:hover {
    &::after {
      transform: scaleX(1);
      opacity: 0.3;
      transform-origin: 1 0;
    }
    &::before {
      top: 14%;
      opacity: 0.8;
    }
    a {
      opacity: 0.1;
    }
  }
  a {
    padding: 40px 96px;
    display: block;
    height: 100%;
    color: #fff;
    text-decoration: none;
    position: relative;
    z-index: 1;
    transition: $soease;
    h5 {
      font-size: 24px;
      margin-bottom: 24px;
      letter-spacing: 2px;
      font-family: $font-jp-bold;
    }
    p {
      font-family: $font-jp-regular;
    }
  }
  // gsap 正方形ランダムアニメーション
  .rects {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }
  .rect {
    opacity: 0;
    width: 20px;
    height: 20px;
    background-color: #fff;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 0;
  }
}

</style>