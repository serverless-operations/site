<template>
  <footer class="v-footer footer v-sheet v-sheet--tile theme--dark">
    <!-- <v-container>
      <v-col cols="12" class="c-footer-breadcrumb">
        <nuxt-link to="/" class="c-footer-breadcrumb__home">
          <span>Serverless Operations - Home</span>
        </nuxt-link>
        <span class="c-footer-breadcrumb__separater">/</span>
        <span class="c-footer-breadcrumb__category">カテゴリー名</span>
        <span class="c-footer-breadcrumb__separater">/</span>
        <span class="c-footer-breadcrumb__current">現在のページ</span>
      </v-col>
    </v-container> -->

    <v-container>
      <v-row>
        <v-col cols="12"
               sm="6"
               md="3">
          <div class>
            <g-link to="/services"
                       class="c-footer-list__link">
              <div class="c-footer-menu__title">Service</div>
              <div class="c-footer-menu__subtitle">サービス紹介</div>
            </g-link>
          </div>
          <ul class="c-footer-list">
            <li class="c-footer-list__item">
              <g-link to="/services"
                         class="c-footer-list__link">Serverless Oprationsとは</g-link>
            </li>
            <li class="c-footer-list__item">
              <g-link to="/services/serverless-consulting"
                         class="c-footer-list__link">サーバーレスコンサルティング</g-link>
            </li>
            <li class="c-footer-list__item">
              <g-link to="/services/serverless-development"
                         class="c-footer-list__link">サーバーレスディべロプメント</g-link>
            </li>
            <li class="c-footer-list__item">
              <g-link to="/our-products" class="c-footer-list__link">
                私たちが開発したプロダクト
              </g-link>
            </li>
          </ul>
        </v-col>

        <!-- <v-col cols="12" sm="6" md="3">
          <div class="c-footer-menu__title">Works</div>
          <div class="c-footer-menu__subtitle">導入事例</div>
          <ul class="c-footer-list">
            <li class="c-footer-list__item">事例一覧</li>
            <li class="c-footer-list__item">Development</li>
            <li class="c-footer-list__item">Auth0</li>
          </ul>
        </v-col> -->

        <!-- <v-col cols="12" sm="6" md="3">
          <div class="c-footer-menu__title">News</div>
          <div class="c-footer-menu__subtitle">お知らせ</div>
          <ul class="c-footer-list">
            <li class="c-footer-list__item">お知らせの記事タイトルがはいります。ダミーテキストダミーテキスト</li>
            <li
              class="c-footer-list__item"
            >お知らせの記事タイトルがはいります。ダミーテキストダミーテキストお知らせの記事タイトルがはいります。ダミーテキストダミーテキスト</li>
            <li class="c-footer-list__item">お知らせの記事タイトルがはいります。ダミーテキストダミーテキスト</li>
            <li class="c-footer-list__item">お知らせの記事タイトルがはいります。ダミーテキストダミーテキスト</li>
          </ul>
        </v-col> -->
       

        <v-col cols="12" sm="6" md="3">
          <g-link to="/company/" class="c-footer-list__link">
            <div class="c-footer-menu__title">Company</div>
            <div class="c-footer-menu__subtitle">会社案内</div>
          </g-link>

          <ul class="c-footer-list">
            <li class="c-footer-list__item">
              <g-link to="/company" class="c-footer-list__link">
                会社概要
              </g-link>
            </li>
            <li class="c-footer-list__item">
              <g-link to="/company/#message" class="c-footer-list__link">
                代表あいさつ
              </g-link>
            </li>
            <li class="c-footer-list__item">
              <g-link to="/company/#vision" class="c-footer-list__link">
                未来像
              </g-link>
            </li>
            <li class="c-footer-list__item">
              <g-link to="/news-archives/" class="c-footer-list__link">
                おしらせ
              </g-link>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" sm="6" md="3">     
          <g-link to="/our-products" class="c-footer-list__link">
            <div class="c-footer-menu__title">Works</div>
            <div class="c-footer-menu__subtitle">導入事例</div>
          </g-link>
          <ul class="c-footer-list">
            <li class="c-footer-list__item">
              <g-link to="/our-products" class="c-footer-list__link">
                事例ループ
              </g-link>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" sm="6" md="3">     
          <g-link to="/our-products" class="c-footer-list__link">
            <div class="c-footer-menu__title">Blog</div>
            <div class="c-footer-menu__subtitle">開発ブログ</div>
          </g-link>
          <ul class="c-footer-list">
            <footer-blog />
          </ul>
        </v-col>
      </v-row>

      <v-row class="mt-8 mt-md-12">
        <v-col cols="12"
               md="2">
          <div>
            <g-link to="/">
              <img src="../assets/images/footer-severless-operations-logo.svg"
                   alt="Severless Operations ロゴ" />
            </g-link>
          </div>
        </v-col>
        <v-col cols="12"
               md="10"
               class="text-center text-md-right">
          <div class="sns-link text-right">
            <a href="https://www.facebook.com/ServerlessOperations"
               target="_blank"
               class="sns-link__facebook">
              <v-icon>mdi-facebook-box</v-icon>
            </a>
            <a href="https://twitter.com/slsopsinc"
               class="sns-link__twitter"
               target="_blank">
              <v-icon>mdi-twitter</v-icon>
            </a>
          </div>

          <div class="c-footer-submenu">
            <g-link to="/contact"
                       class="c-footer-submenu__link">Contact</g-link>
            <g-link to="/privacy-policy"
                       class="c-footer-submenu__link">Privacy Policy</g-link>
          </div>

          <div class="footer-copyright">© 2019 Serverless Operations All Rights Reserved.</div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
import FooterBlog from '~/components/FooterBlog.vue'

export default {
  components: {
    FooterBlog
  },
}



if (process.client) {
  (function(){
var w=window,d=document;
var s="https://app.chatplus.jp/cp.js";
d["__cp_d"]="https://app.chatplus.jp";
d["__cp_c"]="35c32da0_1";
var a=d.createElement("script"), m=d.getElementsByTagName("script")[0];
a.async=true,a.src=s,m.parentNode.insertBefore(a,m);})();
}

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
  background: $secondary;
}

// パンくず
.c-footer-breadcrumb {
  font-size: 0.87rem;
  line-height: 2;
  padding: 0px 0 20px;
  border-bottom: 1px solid rgba(170, 170, 170, 0.1);
  @media screen and (max-width: 600px) {
    padding: 16px 0;
  }

  // トップページ
  &__home {
    color: $white;
    text-decoration: none;
    &:hover {
      color: $mid-gray-2;
      transition: all 0.3s ease;
      text-decoration: none;
    }
  }

  // 現在のページ
  &__current {
    color: $mid-gray-2;
  }

  // 区切り線
  &__separater {
    margin: 0 16px;
  }
} // c-footer-breadcrumb

// フッターのメニュー
.c-footer-menu {
  // タイトル
  &__title {
    font-family: $font-en-normal;
    font-size: 2rem;
    margin: 10px 0 0px;
  }
  // サブタイトル
  &__subtitle {
    font-family: $font-jp-normal;
    color: $mid-gray-2;
    font-size: 0.87rem;
    margin-bottom: 42px;
    @media screen and (max-width: 600px) {
      margin-bottom: 16px;
    }
  }
} // c-footer-menu

// メニューのリスト
.c-footer-list {
  list-style: none;
  padding-left: 14px;

  &__item {
    position: relative;
    font-size: 0.87rem;
    line-height: 28px;
    margin-bottom: 0.5rem;
    &:before {
      position: absolute;
      top: 50%;
      left: -12px;
      content: '';
      display: block;
      color: #fff;
      width: 5px;
      height: 1px;
      background: $mid-gray-2;
    }
  } //&__list-item

  &__link {
    text-decoration: none;
    color: $white;
    transition: all 0.3s ease;
    &:hover {
      color: $mid-gray-2;
    }
  }
} // c-footer-list

.sns-link {
  margin-bottom: 52px;
  .v-icon {
    font-size: 26px;
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
  &__facebook {
    text-decoration: none;
    margin-right: 24px;
    transition: all 0.3s ease;
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
      opacity: 0.3;
    }

    &:last-child {
      &::after {
        content: none;
      }
    }
    &::after {
      content: '';
      display: inline-block;
      height: 1.2rem;
      width: 2px;
      background-color: #fff;
      position: relative;
      top: 0.15rem;
      right: -18px;
      opacity: 0.3;
    }
  }
}

.footer-copyright {
  color: $white;
  opacity: 0.3;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
}
</style>