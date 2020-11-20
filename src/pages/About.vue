<template>
  <Layout>
    <div class="v-content__wrap">

      <div class="l-company-page">

        <div class="p-company-header">
          <div class="p-company-header__main-img">

            <!--背景 -->
            <img src="../assets/images/company-main-bg.svg"
                class="p-company-header__main-bg d-none d-md-block" alt="Serverless Operations 会社案内 メインイメージ">
            <!-- 粒子 -->
            <img src="../assets/images/company-main-particle.svg"
                class="p-company-header__main-particle d-none d-md-block" alt="Serverless Operations 会社案内 メインイメージ">
            <!-- ロゴ -->
            <img src="../assets/images/company-main-logo.svg"
                class="p-company-header__main-logo d-none d-md-block" alt="Serverless Operations 会社案内 メインイメージ ロゴ">
            <!-- スマホ時の画像 -->
            <img src="../assets/images/company-main-logo-sp.svg"
                class="p-company-header__logo-sp d-md-none" alt="Serverless Operations 会社案内 メインイメージ">
          </div>
          <v-container class="p-company-header__container">
            <v-row>
              <v-col cols="12" md="6">
                <h1 class="p-company-header__title">
                  About
                  <span class="p-company-header__title-jp">会社案内</span>
                </h1>
                <p class="p-company-header__text-header">
                  クラウドの価値を<br class="d-md-none" />最大限引き出し<br>顧客のビジネスを加速させる。
                </p>
                <p class="p-company-header__text">われわれのミッションは、サーバーレスでの開発を通しクラウドの価値そのものを最大限引き出し、顧客のビジネスを大きく加速させることにあります。</p>
                <!-- <div class="d-md-none p-company-header__scroll-block">
                  <span class="p-company-header__scroll">Scroll</span>
                  <div class="p-company-header__scroll-line"></div>
                </div> -->
              </v-col>
            </v-row>
          </v-container>
        </div>

        <!-- 会社案内のテーブルのセクション -->
        <section class="company-info">

          <div class="container about-title-container">
            <div class="row">
              <h2 class="content-section-title text-center">
                Company Information
                <span>会社概要</span>
                <hr class="title-bottom-line">
              </h2>
            </div>
          </div>

          <v-container class="comapny-info-table-container">
            <v-row justify="center">
              <v-col cols="11"
                    md="8">
                <!-- 会社案内のテーブル -->
                <table class="p-company-information__table">
                  <tr class="p-company-information__table-row">
                    <th class="p-company-information__th">社名</th>
                    <td>株式会社Serverless Operations</td>
                  </tr>
                  <tr class="p-company-information__table-row">
                    <th class="p-company-information__th">社名（英語）</th>
                    <td>Serverless Operations, Inc</td>
                  </tr>
                  <tr class="p-company-information__table-row">
                    <th class="p-company-information__th">代表者</th>
                    <td>代表取締役 堀家 隆宏</td>
                  </tr>
                  <tr class="p-company-information__table-row">
                    <th class="p-company-information__th">資本金</th>
                    <td>100万円</td>
                  </tr>
                  <tr class="p-company-information__table-row">
                    <th class="p-company-information__th">設立</th>
                    <td>2018年11月</td>
                  </tr>
                  <tr class="p-company-information__table-row">
                    <th class="p-company-information__th">決算月</th>
                    <td>10月</td>
                  </tr>
                  <tr class="p-company-information__table-row">
                    <th class="p-company-information__th">URL</th>
                    <td>https://serverless.co.jp</td>
                  </tr>
                  <tr class="p-company-information__table-row">
                    <th class="p-company-information__th">Mail</th>
                    <td>info@serverless.co.jp</td>
                  </tr>
                  <tr class="p-company-information__table-row">
                    <th class="p-company-information__th">事業内容</th>
                    <td>クラウドサービスを使ったServerlessアプリケーションの開発運用支援</td>
                  </tr>
                  <tr class="p-company-information__table-row">
                    <th class="p-company-information__th">パートナー</th>
                    <td>
                      <div class="company-partners-logo">
                        <a href="https://aws.amazon.com/jp/partners/consulting/">
                          <img
                            src="@/assets/images/our-partners/company-aws-logo.svg"
                            alt="AWS Consulting Partner"
                          >
                        </a>
                        <a href="https://spn.getshifter.io/">
                          <img
                            src="@/assets/images/our-partners/company-shifter-logo.svg"
                            alt="Digitalcube Shifter Partner Network"
                          >
                        </a>
                      </div>
                      
                    </td>
                  </tr>
                </table><!-- p-company-information__table -->
              </v-col>

            </v-row>
          </v-container><!-- p-company-information__container -->

        </section><!-- p-company-information -->


      </div><!-- l-company-page -->
  
    </div>
  </Layout>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  metaInfo () {
    return {
      title: '会社案内',
      description: 'われわれのミッションは、サーバーレスでの開発を通しクラウドの価値そのものを最大限引き出し、顧客のビジネスを大きく加速させることにあります。'
    }
  },
  components: {},
  fetch({ store }) {
    store.commit('resetModal')
  },
  scrollToTop: true,
  mounted() {
    this.titleAnimation()
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
            trigger: '.about-title-container', // この要素と交差するとイベントが発火
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
  }
}
</script>

<style lang="scss" scoped>
.l-company-page {
  background: $white;
  position: relative;
  overflow: hidden;
}
// ページの見出し
.p-company-header {
  // background-image: ;
  background: no-repeat url('../assets/images/company-main-pattern.svg'),
    linear-gradient(205.01deg, #2c48ff -0.06%, #02007c 100.25%);
  background-size: cover;
  overflow: hidden;
  // height: 80vh;
  max-height: 840px;
  position: relative;
  @include media-breakpoint-up(md) {
    max-height: 640px;
  }
  @include media-breakpoint-up(lg) {
    max-height: 840px;
  }
  &__tryangle {
    height: 150px;
    width: 150px;
    background: $white;
    position: absolute;
    bottom: -91px;
    left: -91px;
    transform: rotate(45deg);
    z-index: 3;
    @include media-breakpoint-up(lg) {
      height: 180px;
      width: 180px;
    }
  }
  // メインイメージ部分のコンテナ
  &__container {
    z-index: 3;
    position: relative;
  }
  // メインイメージ部分
  &__main-img {
    position: absolute;
    max-height: 840px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  // メインイメージ、ロゴ
  &__main-logo {
    position: absolute;
    display: block;
    width: auto;
    height: 100%;
    right: 0;
  }
  // メインイメージ、背景
  &__main-bg {
    position: absolute;
    right: 0;
    display: block;
    mix-blend-mode: soft-light;
    width: auto;
    height: 100%;
  }
  // メインイメージ、粒子
  &__main-particle {
    position: absolute;
    right: 0;
    display: block;
    width: auto;
    height: 100%;
  }
  // スマホ時のロゴ
  &__logo-sp {
    width: 100%;
    max-height: 812px;
    display: block;
    // margin-top: 48px;
    @include media-breakpoint-up(md) {
      max-height: 640px;
      // height: 50vh;
      right: 0;
      width: auto;
      margin-top: 0;
    }
    @include media-breakpoint-up(lg) {
      // height: 80vh;
      max-height: 840px;
    }
  }
  // ページタイトル
  &__title {
    font-family: $font-en-normal;
    line-height: 0.8;
    font-size: 4.5rem;
    margin-top: 160px;
    margin-bottom: 65px;
    @include media-breakpoint-up(lg) {
      font-size: 6.25rem;
      margin-top: 215px;
      margin-bottom: 80px;
    }
  }
  // 日本語のタイトル
  &__title-jp {
    display: block;
    font-family: $font-jp-regular;
    font-size: 1.5rem;
    margin-top: 8px;
    @include media-breakpoint-up(lg) {
      margin-top: 16px;
    }
  }
  // タイトル下文章の見出し
  &__text-header {
    font-family: $font-jp-bold;
    font-size: 1.5rem;
    @include media-breakpoint-up(lg) {
      font-size: 2.1rem;
    }
  }
  // タイトル下文章
  &__text {
    font-family: $font-jp-regular;
    line-height: 32px;
    margin-bottom: 212px;
    @include media-breakpoint-up(lg) {
      margin-bottom: 204px;
    }
  }
  &__scroll-block {
    position: absolute;
    bottom: 140px;
    right: 0;
  }
  &__scroll {
    writing-mode: vertical-lr;
  }
  &__scroll-line {
    position: absolute;
    bottom: -94px;
    right: 12px;
    height: 88px;
    width: 2px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
}

// 会社情報部分
.company-info {
  padding: 80px 0 160px 0;

  @include SectionTitle;
  .comapny-info-table-container {
    display: flex;
    justify-content: center;
  }
  table {
    color: $black;
    border-collapse: collapse;
    width: 100%;
    font-family: $font-jp-regular;
  }
  tr {
    border-top: 1px solid $mid-gray-3;
    height: 80px;
    @include media-breakpoint-up(md) {
      // display: table-row;
      height: 80px;
    }
    &:last-child {
      border-bottom: 1px solid $mid-gray-3;
    }
  }
  th {
    max-width: 176px;
    text-align: left;
    font-family: $font-jp-bold;
    color: $secondary;
    font-size: 0.87rem;
    @include media-breakpoint-up(md) {
      padding-left: 35px;
      width: 200px;
      font-size: 1rem;
      // display: table-cell;
    }
  }
  td {
    font-size: 0.87rem;
    @include media-breakpoint-up(md) {
      font-size: 1rem;
    }
  }
  .company-partners-logo {
    display: flex;
    a {
      display: block;
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
}

.about-message {
  background: no-repeat url('../assets/images/company-bg-img.svg');
  background-position: -100px 765px;
  background-size: cover;
  @include media-breakpoint-up(md) {
    background: no-repeat url('../assets/images/company-bg-img.svg');
    background-position: -100px 750px;
  }
}

</style>
