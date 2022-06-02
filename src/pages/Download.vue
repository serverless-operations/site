<template>
  <Layout>
    <div class="v-content__wrap">
      <div class="l-contact-page">
        <!-- ページヘッダー -->
        <div class="page-header-container">
          <div class="page-header-img-container">
            <!--背景 -->
            <img
              src="../assets/images/company-main-bg.svg"
              class="page-header-main-bg d-none d-md-block"
              alt="Serverless Operations 会社案内 メインイメージ"
            />
            <!-- 粒子 -->
            <img
              src="../assets/images/company-main-particle.svg"
              class="page-header-main-particle d-none d-md-block"
              alt="Serverless Operations 会社案内 メインイメージ"
            />
            <!-- ロゴ -->
            <img
              src="../assets/images/company-main-logo.svg"
              class="p-company-header__main-logo d-none d-md-block"
              alt="Serverless Operations 会社案内 メインイメージ ロゴ"
            />
            <!-- スマホ時の画像 -->
            <img
              src="../assets/images/company-main-logo-sp.svg"
              class="page-header-logo-sp d-md-none"
              alt="Serverless Operations 会社案内 メインイメージ"
            />
          </div>

          <v-container class="page-header-text-container">
            <v-row>
              <v-col cols="12" md="6">
                <h1 class="page-header-title text-anim">
                  <span class="text-anim">DOWNLOAD</span>
                  <span class="page-header-title-jp text-anim">
                    会社資料ダウンロード
                  </span>
                  <span class="page-title-anim-bg"></span>
                </h1>
                <p class="page-header-text page-header-text-anim">
                  私たちが提供するサーバーレスアーキテクチャを使用したサービスについて、詳しい内容を記載したPDF資料をご用意いたしました。ぜひダウンロードしてご活用ください。
                </p>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <section class="document">
          <div class="container download-title-container">
            <div class="row">
              <h2 class="content-section-title text-center">
                Document
                <span>資料について</span>
                <hr class="title-bottom-line" />
              </h2>
              <p>
                <img
                  src="../assets/images/download/download-form-image.png"
                  class="text-center document-image"
                  alt="Serverless Operations 会社資料イメージ画像"
                />
              </p>

              <v-row justify="center">
                <v-col cols="11" md="8">
                  <section class="document-content-header">
                    <p class="desc-text-top">
                      事業の方針や開発の方向性を決定する際に、ぜひご活用ください
                    </p>
                    <h3>
                      サーバーレスオペレーションズの<br />
                      具体的なサービスや実績をご紹介しています
                    </h3>
                    <p class="desc-text-bottom">
                      企業がサーバーレスを採用することにより得られる競争優位性やコスト面でのメリットなどを、事例を交えて詳しく紹介しています。
                    </p>
                  </section>
                  <section class="document-content-list">
                    <div class="document-title">
                      <h4>資料の内容</h4>
                      <span>[ PDF形式 / 全47ページ / 11MB / A4横]</span>
                    </div>
                    <div class="document-list-container">
                      <ul>
                        <li>
                          資料概要とサーバーレスアーキテクチャの背景 Serverless
                        </li>
                        <li>
                          Operations, Inc について
                          サーバーレスアーキテクチャとは
                        </li>
                        <li>サーバーレスアーキテクチャを採用するメリット</li>
                        <li>課題例とお手伝いできること</li>
                        <li>強みと特徴</li>
                        <li>内製化支援とその他のサービス</li>
                      </ul>
                      <ul>
                        <li>自社開発プロダクト</li>
                        <li>実績とお客さまインタビュー</li>
                        <li>ご契約の流れ メンバー紹介</li>
                        <li>認定パートナー</li>
                        <li>会社概要</li>
                      </ul>
                    </div>
                  </section>
                </v-col>
              </v-row>
            </div>
          </div>
        </section>

        <section class="download-form">
          <div class="container download-form-title-container">
            <div class="row">
              <h2 class="content-section-title text-center">
                Download Form
                <span>資料ダウンロードフォーム</span>
                <hr class="title-bottom-line" />
              </h2>
            </div>
            <v-row align="center" justify="center">
              <v-col cols="12" md="10" lg="8" class="p-top-contact--form">
                <p class="support-text-anim">
                  お手数ですが、下記フォームにご記入のうえ「上記の内容で送信する」ボタンを押してください。<br />
                  送信完了後、リンクを表示しますので、そちらよりダウンロードしてください。
                </p>
              </v-col>
            </v-row>
            <download-form />
          </div>
        </section>
      </div>
    </div>
    <!-- l-contact-page -->
  </Layout>
</template>

<script>
import DownloadForm from "~/components/DownloadForm.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  metaInfo() {
    return {
      title: "資料ダウンロード",
      description:
        "私たちが提供するサーバーレスアーキテクチャを使用したサービスについて、詳しい内容を記載したPDF資料をご用意いたしました。ぜひダウンロードしてご活用ください。",
      script: [{
        src: 'https://www.google.com/recaptcha/api.js?render=6LciESwgAAAAAGyjFHbx3EDyy_lkrMrajAHvo3dz'
      }]
    };
  },
  components: {
    DownloadForm,
  },
  fetch({ store }) {
    store.commit("resetModal");
    store.commit("resetModal");
  },
  scrollToTop: true,
  mounted() {
    this.titleAnimation(), this.titleAnimation2();
    this.PageTextAnimation();
  },
  methods: {
    PageTextAnimation() {
      gsap.fromTo(
        ".page-title-anim-bg",
        {
          opacity: 1,
          scaleX: 0,
          transformOrigin: "0 0",
        },
        {
          ease: "Expo.easeInOut",
          transformOrigin: "1 0",
          scaleX: 1,
          duration: 1.6,
          opacity: 0,
          stagger: {
            from: "start", //左側から
            axis: "x",
            amount: 0.4, // 0.8秒おきに
          },
        }
      );
      gsap.fromTo(
        ".text-anim",
        {
          opacity: 0,
          x: -32,
        },
        {
          delay: 0.2,
          ease: "Expo.easeInOut",
          transformOrigin: "1 0",
          x: 0,
          duration: 1.8,
          opacity: 1,
          stagger: {
            from: "start", //左側から
            axis: "x",
            amount: 0.4, // 0.8秒おきに
          },
        }
      );
      gsap.fromTo(
        ".page-header-text-anim",
        {
          opacity: 0,
          y: 0,
        },
        {
          delay: 1.4,
          ease: "Expo.easeInOut",
          y: -16,
          duration: 1,
          opacity: 1,
          stagger: {
            from: "start", //左側から
            axis: "x",
            amount: 0.2, // 0.8秒おきに
          },
        }
      );
    },
    titleAnimation() {
      let object = {
        el: ".download-title-container h2",
        duration: 1.2,
      };
      gsap
        .timeline({
          defaults: { ease: "Expo.easeInOut", duration: 1.2 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: ".download-title-container", // この要素と交差するとイベントが発火
            start: "top 98%", // ウィンドウのどの位置を発火の基準点にするか
            end: "bottom 10%", // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: "play none none none", // スクロールイベントで発火するアニメーションの種
          },
        })
        .fromTo(
          object.el,
          {
            opacity: 0,
            y: 0,
            scale: 0.98,
          },
          {
            opacity: 1,
            scale: 1,
            y: -20,
          }
        )
        .fromTo(
          ".title-bottom-line",
          {
            width: 0,
          },
          {
            width: 80,
          },
          "<"
        );
    },
    titleAnimation2() {
      let object = {
        el: ".download-form-title-container h2",
        duration: 1.2,
      };
      gsap
        .timeline({
          defaults: { ease: "Expo.easeInOut", duration: 1.2 }, // timelineのプロパティ
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            trigger: ".download-form-title-container", // この要素と交差するとイベントが発火
            start: "top 98%", // ウィンドウのどの位置を発火の基準点にするか
            end: "bottom 10%", // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: "play none none none", // スクロールイベントで発火するアニメーションの種
          },
        })
        .fromTo(
          object.el,
          {
            opacity: 0,
            y: 0,
            scale: 0.98,
          },
          {
            opacity: 1,
            scale: 1,
            y: -20,
          }
        )
        .fromTo(
          ".title-bottom-line",
          {
            width: 0,
          },
          {
            width: 80,
          },
          "<"
        )
        .fromTo(
          ".about-message-container",
          {
            opacity: 0,
            y: 0,
            scale: 0.98,
          },
          {
            delay: 0.2,
            opacity: 1,
            scale: 1,
            y: -20,
          },
          "<"
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.l-contact-page {
  background: $white;
  position: relative;
  overflow: hidden;
}
.page-header-container {
  background: url("../assets/images/bg/so-blue-texture.png"),
    url("../assets/images/company-main-pattern.svg"),
    linear-gradient(45deg, $secondary 11.76%, $tertiary 88.21%);
}

@include PageHeader;

@include SectionTitle;

.document {
  padding: 80px 0 160px 0;
  background-image: url("../assets/images/top-news-contact-bk.svg");
  background-position: center center;
  background-size: 100%;
  background-color: rgba($light-gray-2, 0.7);
  background-blend-mode: lighten;
  @include media-breakpoint-down(md) {
    padding: 40px 0;
    background-size: 300%;
    background-position: top 30% center;
  }
  .document-image {
    width: 100%;
    image-rendering: -webkit-optimize-contrast;
  }
}

.download-form {
  padding: 80px 0 160px 0;
  @include media-breakpoint-down(md) {
    padding: 40px 0;
  }
}

.document-content-header {
  color: $black;
  padding: 104px 0;
  .desc-text-top {
    color: $secondary;
    font-family: $font-jp-bold;
  }
  h3 {
    color: $secondary;
    font-size: 32px;
    line-height: 1.4;
    margin-bottom: 32px;
    @include media-breakpoint-down(md) {
      font-size: 24px;
    }
  }
  @include media-breakpoint-down(md) {
    padding: 64px 0;
  }
  .desc-text-bottom {
    line-height: 2;
  }
}

.document-content-list {
  color: $black;
  .document-title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $mid-gray-3;
    margin-bottom: 40px;
    padding-bottom: 8px;
    h4 {
      color: $secondary;
      font-size: 16px;
      @include media-breakpoint-down(md) {
        font-size: 14px;
      }
    }
    span {
      color: $mid-gray-1;
      font-size: 14px;
      @include media-breakpoint-down(md) {
        font-size: 12px;
      }
    }
  }
}

.document-list-container {
  display: flex;
  justify-content: space-between;
  ul {
    li {
      line-height: 1.6;
      margin-bottom: 12px;
      list-style: none;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 10px;
        left: -14px;
        width: 4px;
        height: 4px;
        background: $tertiary;
      }
    }
  }
  @include media-breakpoint-down(md) {
    flex-direction: column;
  }
}

.download-form-title-container {
  .support-text-anim {
    color: $black;
    @include media-breakpoint-down(md) {
      font-size: 14px;
    }
  }
}
</style>
