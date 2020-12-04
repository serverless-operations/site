<template>
  <Layout>
    <div class="v-content__wrap">

      <div class="l-company-page">

        <div class="page-header-container">
          <div class="page-header-img-container">

            <!--背景 -->
            <img src="../assets/images/company-main-bg.svg"
                class="page-header-main-bg d-none d-md-block" alt="Serverless Operations 会社案内 メインイメージ">
            <!-- 粒子 -->
            <img src="../assets/images/company-main-particle.svg"
                class="page-header-main-particle d-none d-md-block" alt="Serverless Operations 会社案内 メインイメージ">
            <!-- ロゴ -->
            <img src="../assets/images/company-main-logo.svg"
                class="p-company-header__main-logo d-none d-md-block" alt="Serverless Operations 会社案内 メインイメージ ロゴ">
            <!-- スマホ時の画像 -->
            <img src="../assets/images/company-main-logo-sp.svg"
                class="page-header-logo-sp d-md-none" alt="Serverless Operations 会社案内 メインイメージ">
          </div>

          <v-container class="page-header-text-container">
            <v-row>
              <v-col cols="12" md="6">
                <h1 class="page-header-title text-anim">
                  <span class="text-anim">ABOUT</span>
                  <span class="page-header-title-jp text-anim">
                    会社案内
                  </span>
                  <span class="page-title-anim-bg"></span>
                </h1>
                <h2 class="page-header-copy page-header-text-anim">
                  クラウドの価値を<br class="d-md-none" />最大限引き出し<br>顧客のビジネスを加速させる。
                </h2>
                <p class="page-header-text page-header-text-anim">われわれのミッションは、サーバーレスでの開発を通しクラウドの価値そのものを最大限引き出し、顧客のビジネスを大きく加速させることにあります。</p>
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

        <section class="about-message">

          <div class="container about-message-title-container">
            <div class="row">
              <h2 class="content-section-title text-center">
                Message
                <span>メッセージ</span>
                <hr class="title-bottom-line">
              </h2>
            </div>
          </div>

          <v-container class="about-message-container">
            <v-row justify="center">
              <v-col cols="11" md="7" lg="6">
                <h3>
                  サーバーレスによる開発を<br>
                  より簡単に、より身近なものへ。
                </h3>
                <p>Serverless Operationsの存在理由は、アプリケーション開発をもっとシンプルで簡単なものにすることです。サーバーレスファーストで開発によりインフラの管理やスケーラビリティの事前予測といった作業をクラウドにアウトソーシングすることで、ビジネスのコアバリューの創出や改善のために多くのリソースを避けるようになります。</p>
                <p>さらなる未来には、インフラの管理だけでなく、プログラミングも不要でアプリケーションが作れる時代が来ることでしょう。<br>そうなればアプリケーション開発はもっと簡単になり、リスクやコストをかけずにたくさんのアイデアがチャレンジできるようになるはずです。そしてサーバーレスはそんな未来の通過点にあると信じています。</p>
                <p>われわれのミッションは、サーバーレスでの開発を通しクラウドの価値そのものを最大限引き出し、顧客のビジネスを大きく加速させることにあります。</p>
                <p>今後は、グローバル向けにサーバーレスの開発をより簡単にやりやすくするためのSaaSサービスの展開を実施したいと考えています。</p>

                <div class="ceo-sign">
                  <div class="ceo-sign-container">
                    <p>
                      <span class="role">CEO</span>
                      <span class="name-jp">堀家 隆宏</span>
                      <span class="name-en">Takahiro Horike</span>
                    </p>
                    <ul class="author-sns">
                      <li>
                        <a href="https://github.com/horike37"
                          target="_blank"
                          class="github">
                          <v-icon>mdi-github</v-icon>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/horike.takahiro"
                          target="_blank"
                          class="facebook">
                          <v-icon>mdi-facebook</v-icon>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/horike37"
                          class="twitter"
                          target="_blank">
                          <v-icon>mdi-twitter</v-icon>
                        </a>
                      </li>
                    </ul>
                  </div>    
                </div>

              </v-col>
            </v-row>
          </v-container>

        </section>

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
    this.titleAnimation(),
    this.titleAnimation2()
    this.PageTextAnimation()
  },
  methods: {
    PageTextAnimation() {
      gsap.fromTo('.page-title-anim-bg', {
        opacity: 1,
        scaleX: 0,
        transformOrigin: '0 0',
      }, {
        ease: 'Expo.easeInOut',
        transformOrigin: '1 0',
        scaleX: 1,
        duration: 1.6,
        opacity: 0,
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.4 // 0.8秒おきに
        }
      })
      gsap.fromTo('.text-anim', {
        opacity: 0,
        x: -32,
      }, {
        delay: 0.2,
        ease: 'Expo.easeInOut',
        transformOrigin: '1 0',
        x: 0,
        duration: 1.8,
        opacity: 1,
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.4 // 0.8秒おきに
        }
      })
      gsap.fromTo('.page-header-text-anim', {
        opacity: 0,
        y: 0,
      }, {
        delay: 1.4,
        ease: 'Expo.easeInOut',
        y: -16,
        duration: 1,
        opacity: 1,
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.2 // 0.8秒おきに
        }
      })
    },
    titleAnimation() {
      let object = {
        el: '.about-title-container h2',
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
        .fromTo('.comapny-info-table-container', {
          opacity: 0,
          y: 0,
          scale: 0.98,
        }, {
          delay: 0.2,
          opacity: 1,
          scale: 1,
          y: -20,
        },'<')
    },
    titleAnimation2() {
      let object = {
        el: '.about-message-title-container h2',
        duration: 1.2
      }
      gsap
        .timeline({
          defaults: { ease: 'Expo.easeInOut', duration: 1.2 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: '.about-message-title-container', // この要素と交差するとイベントが発火
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
        .fromTo('.about-message-container', {
          opacity: 0,
          y: 0,
          scale: 0.98,
        }, {
          delay: 0.2,
          opacity: 1,
          scale: 1,
          y: -20,
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
.page-header-container {
background: 
  url('../assets/images/bg/so-blue-texture.png'),
  url('../assets/images/company-main-pattern.svg'),
  linear-gradient(45deg, $secondary 11.76%, $tertiary 88.21%);
}

@include PageHeader;

@include SectionTitle;

// 会社情報部分
.company-info {
  padding: 80px 0 160px 0;
  
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
    width: 30%;
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
  padding: 80px 0 160px 0;
  background-image: url('../assets/images/top-news-contact-bk.svg');
  background-position: top 420px;
  background-size: 100%;
  background-color: rgba($light-gray-2, 0.7);
  background-blend-mode: lighten;
  @include media-breakpoint-down(md) {
    padding: 40px 0;
  }
  h3 {
    color: $secondary;
    font-family: $font-jp-bold;
    font-size: 32px;
    margin-bottom: 48px;
    @include media-breakpoint-down(md) {
      margin-bottom: 24px;
      font-size: 20px;
    }
  }
  p {
    color: $text-black;
    font-family: $font-jp-regular;
    line-height: 32px;
    text-align: justify;
  }
  .ceo-sign {
    display: flex;
    justify-content: flex-end;
    padding-top: 32px;
    @include media-breakpoint-down(md) {
      padding-top: 16px;
    }
    .ceo-sign-container {
      .role {
        color: $mid-gray-1;
        display: block;
        line-height: 3;
        font-size: 12px;
        font-family: $font-en-normal;
      }
      .name-jp {
        color: $secondary;
        font-family: $font-jp-bold;
        display: block;
        line-height: 1;
        font-size: 24px;
      }
      .name-en {
        color: $mid-gray-1;
        display: block;
        line-height: 2;
        font-size: 12px;
        font-family: $font-en-normal;
      }
      .author-sns {
        display: flex;
        padding: 0;
        justify-content: space-between;
        li {
          a {
            display: block;
            text-decoration: none;
            transition: $soease;
            &.github i {
              color: #000;
            }
            &.facebook i {
              color:#1877F2;
            }
            &.twitter i {
              color: #1DA1F2;
            }
            :hover {
              margin-top: -2px;
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
}

</style>
