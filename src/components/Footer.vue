<template>
  <footer class="v-footer footer v-sheet v-sheet--tile theme--dark">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3" class="footer-list-anim">
          <g-link to="/works-archives" class="c-footer-list__link">
            <div class="c-footer-menu__title">Works</div>
            <div class="c-footer-menu__subtitle">実績紹介</div>
          </g-link>
          <ul class="c-footer-list">
            <footer-works />
          </ul>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="footer-list-anim">
          <div class>
            <g-link to="/services" class="c-footer-list__link">
              <div class="c-footer-menu__title">Services</div>
              <div class="c-footer-menu__subtitle">サービス紹介</div>
            </g-link>
          </div>
          <ul class="c-footer-list">
            <li class="c-footer-list__item">
              <g-link to="/services" class="c-footer-list__link"
                >サーバーレスオペレーションズの<br />サービスと強み</g-link
              >
            </li>
            <li class="c-footer-list__item">
              <g-link to="/services/iot-serverless" class="c-footer-list__link">
                IoT × サーバーレス / コンテナ開発<br />導⼊サポート
              </g-link>
            </li>
            <li class="c-footer-list__item">
              <g-link
                to="/services/serverless-consulting"
                class="c-footer-list__link"
                >サーバーレスコンサルティング</g-link
              >
            </li>
            <li class="c-footer-list__item">
              <g-link
                to="/services/serverless-development"
                class="c-footer-list__link"
                >サーバーレスディべロプメント</g-link
              >
            </li>
            <li class="c-footer-list__item">
              <g-link to="/our-products" class="c-footer-list__link">
                自社開発プロダクト
              </g-link>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="footer-list-anim">
          <g-link to="/blog-archives" class="c-footer-list__link">
            <div class="c-footer-menu__title">Blog</div>
            <div class="c-footer-menu__subtitle">開発ブログ</div>
          </g-link>
          <ul class="c-footer-list">
            <footer-blog />
          </ul>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="footer-list-anim">
          <g-link to="/about" class="c-footer-list__link">
            <div class="c-footer-menu__title">About</div>
            <div class="c-footer-menu__subtitle">会社案内</div>
          </g-link>

          <ul class="c-footer-list">
            <li class="c-footer-list__item">
              <g-link to="/about" class="c-footer-list__link">
                会社案内
              </g-link>
            </li>
            <li class="c-footer-list__item">
              <g-link to="/news-archives/" class="c-footer-list__link">
                おしらせ
              </g-link>
            </li>
            <li class="c-footer-list__item">
              <g-link to="/privacy-policy/" class="c-footer-list__link">
                プライバシーポリシー
              </g-link>
            </li>
            <li class="c-footer-list__item">
              <a
                href="https://calendly.com/slsops/office-hours"
                class="c-footer-list__link"
              >
                オンライン無料相談
              </a>
            </li>
            <li class="c-footer-list__item">
              <g-link to="/download" class="c-footer-list__link">
                会社資料ダウンロード
              </g-link>
            </li>
            <li class="c-footer-list__item">
              <g-link to="/contact" class="c-footer-list__link">
                お問い合わせ
              </g-link>
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-row class="mt-8 mt-md-12">
        <v-col cols="12" md="2">
          <div>
            <g-link to="/">
              <img
                src="../assets/images/footer-severless-operations-logo.svg"
                alt="Severless Operations ロゴ"
              />
            </g-link>
          </div>
        </v-col>

        <v-col cols="12" md="10">
          <div class="sns-link text-md-right">
            <a
              href="https://github.com/serverless-operations"
              target="_blank"
              class="sns-link__github"
            >
              <v-icon>mdi-github</v-icon>
            </a>
            <a
              href="https://twitter.com/slsopsinc"
              class="sns-link__twitter"
              target="_blank"
            >
              <v-icon>mdi-twitter</v-icon>
            </a>
          </div>
        </v-col>
        <div class="footer-copyright">
          © Serverless Operations, inc
        </div>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
import FooterBlog from "~/components/FooterBlog.vue";
import FooterWorks from "~/components/FooterWorks.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    FooterBlog,
    FooterWorks,
  },
  mounted() {
    this.FooterListAnimation();
  },
  methods: {
    FooterListAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            // markers: true, // マーカーを表示するか（開発用）
            // scrub: 1,
            trigger: ".footer", // この要素と交差するとイベントが発火
            start: "top 95%", // ウィンドウのどの位置を発火の基準点にするか
            end: "bottom 10%", // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: "play none none none", // スクロールイベントで発火するアニメーションの種
          },
        })
        .fromTo(
          ".footer-list-anim",
          {
            opacity: 0,
            x: -24,
          },
          {
            delay: 0.3,
            opacity: 1,
            x: 0,
            ease: "Expo.easeOut",
            duration: 2.4,
            // 複数要素を扱うプロパティ
            stagger: {
              from: "start", //左側から
              axis: "x",
              amount: 0.6, // 0.8秒おきに
            },
          },
          "<"
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.footer .container {
  @include media-breakpoint-up(sm) {
    max-width: 900px;
  }
  @include media-breakpoint-up(md) {
    max-width: 928px;
  }
  @include media-breakpoint-up(lg) {
    max-width: 1200px;
  }
  @include media-breakpoint-up(xl) {
    max-width: 1232px;
  }
}

.footer {
  padding-top: 48px;
  background: url("../assets/images/footer/footer-particle.svg"),
    url("../assets/images/bg/so-blue-texture.png"),
    linear-gradient(50.89deg, #00007d 8%, #2c48ff 148.73%);
  background-size: contain, 70% 70%, auto;
  @include media-breakpoint-down(sm) {
    background-size: 120%, 70% 70%, auto;
    background-repeat: repeat, repeat, no-repeat;
  }
}

// フッターのメニュー
.c-footer-menu {
  // タイトル
  &__title {
    font-family: $font-en-normal;
    font-size: 1.8rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.9;
    line-height: 1;
  }
  // サブタイトル
  &__subtitle {
    font-family: $font-jp-regular;
    color: $mid-gray-2;
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 40px;
    @media screen and (max-width: 600px) {
      margin-bottom: 16px;
    }
  }
} // c-footer-menu

// メニューのリスト
@include linkList;

.sns-link {
  margin: 16px 0 40px 0;
  .v-icon {
    font-size: 26px;
  }

  &__github {
    text-decoration: none;
    transition: all 0.3s ease;
    margin-right: 24px;
    i {
      color: #fff;
    }
    &:hover {
      opacity: 0.5;
    }
  }
  &__facebook {
    text-decoration: none;
    margin-right: 24px;
    transition: all 0.3s ease;
    i {
      color: #fff;
    }
    &:hover {
      opacity: 0.5;
    }
  }
  &__twitter {
    text-decoration: none;
    transition: all 0.3s ease;
    i {
      color: #fff;
    }
    &:hover {
      opacity: 0.5;
    }
  }
}

.c-footer-submenu {
  margin-bottom: 28px;
  &__link {
    text-decoration: none;
    margin: 0 16px;
    font-size: 0.87rem;
    color: $white;
    opacity: 0.5;
    transition: all 0.3s ease;
    &:hover {
      opacity: 1;
    }

    &:last-child {
      &::after {
        content: none;
      }
    }
    &::after {
      content: "";
      display: inline-block;
      height: 1.2rem;
      width: 2px;
      background-color: #fff;
      position: relative;
      top: 0.15rem;
      right: -18px;
      opacity: 1;
    }
  }
}

.footer-copyright {
  color: $white;
  opacity: 0.6;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  margin-bottom: 48px;
}
</style>
