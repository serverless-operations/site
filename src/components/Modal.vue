<template>
  <transition name="modal" appear>
    <!--div class="modal__overlay" @click="$emit('close')"-->

    <div class="modal__panel">
      <div class="c-modal__innner">
        <v-container>
          <!-- ロゴ -->
          <v-row>
            <v-col cols="3" offset="1" offset-md="0" class="pt-0 pb-0">
              <div class="c-modal__logo-link">
                <g-link @click.native="$emit('close');" to="/" class>
                  <img
                    src="../assets/images/header-modal-logo.svg"
                    alt="Severless Operations ロゴ"
                    class="c-modal__logo"
                  />
                </g-link>
              </div>
            </v-col>
          </v-row>

          <!-- メニュー部分 -->
          <v-row class="c-modal__menu">
            <!-- サービス -->
            <v-col cols="12" md="3" class="c-modal__menu-column">
              <g-link @click.native="$emit('close');" to="/services" class="c-modal__link pl-md-0">
                <span class="c-modal__link--menu">Services</span> 
                <span class="c-modal__link--ja">サービス</span>
              </g-link>
            </v-col><!-- c-modal__menu-column -->

            <!-- ConsultingとDevelopment(タブレット、スマホ) -->
            <v-col cols="12" md="3" class="d-block d-md-none c-modal__menu-column">
              <div class="c-modal__services-block">

                <g-link to="/services/serverless-consulting" class="c-modal__services-link pt-1" @click.native="$emit('close');">
                  <div class="c-modal__services-menu">
                    <span class="c-modal__services-menu-serverless">Serverless</span>
                      Consulting
                    <span class="c-modal__services-menu-ja">サーバーレスコンサルティング</span>
                  </div>
                </g-link><!-- c-modal__services-link -->

                <g-link to="/services/serverless-development" class="c-modal__services-link" @click.native="$emit('close');">
                  <div class="c-modal__services-menu">
                    <span class="c-modal__services-menu-serverless">Serverless</span>Development
                    <span class="c-modal__services-menu-ja">サーバーレスディべロプメント</span>
                  </div>
                </g-link><!-- c-modal__services-link -->

                <g-link to="/services/serverless-development" class="c-modal__services-link" @click.native="$emit('close');">
                  <div class="c-modal__services-menu">
                    <span class="c-modal__services-menu-serverless">Serverless</span>Products
                    <span class="c-modal__services-menu-ja">私たちが開発したプロダクト</span>
                  </div>
                </g-link><!-- c-modal__services-link -->

              </div><!-- c-modal__services-block -->
            </v-col>

            <v-col cols="6" md="3" offset-md="0" class="c-modal__menu-column mt-6 mt-md-0">
              <g-link @click.native="$emit('close');" to="/company" class="c-modal__link">
                <span class="c-modal__link--menu">Company</span> 
                <span class="c-modal__link--ja">会社案内</span>
              </g-link>
            </v-col>

            <v-col cols="6" md="3" offset-md="0" class="c-modal__menu-column mt-6 mt-md-0">
              <g-link @click.native="$emit('close');" to="/works-archives" class="c-modal__link">
                <span class="c-modal__link--menu">Works</span>
                <span class="c-modal__link--ja">導入事例</span>
              </g-link>
            </v-col>

            <v-col cols="6" md="3" offset-md="0" class="c-modal__menu-column mt-6 mt-md-0">
              <g-link @click.native="$emit('close');" to="/blog-archives" class="c-modal__link">
                <span class="c-modal__link--menu">Blog</span>
                <span class="c-modal__link--ja">開発ブログ</span>
              </g-link>
            </v-col>
            <!-- c-modal__menu-column -->

          </v-row>

          <!-- ConsultingとDdevelopment(PC) -->
          <v-row>
            <v-col cols="6" md="5" class="d-none d-md-block">
              <div class="c-modal__services-block">

                <g-link to="/services/serverless-consulting" class="c-modal__services-link" @click.native="$emit('close');">
                  <div class="c-modal__services-menu">
                    <span class="c-modal__services-menu-serverless">Serverless</span>
                    <span class="c-modal__services-name">Consulting</span>
                    <span class="c-modal__services-menu-ja">サーバーレスコンサルティング</span>
                  </div>
                </g-link>

                <g-link @click.native="$emit('close');" to="/services/serverless-development" class="c-modal__services-link">
                  <div class="c-modal__services-menu">
                    <span class="c-modal__services-menu-serverless">Serverless</span>
                    <span class="c-modal__services-name">Development</span>
                    <span class="c-modal__services-menu-ja">サーバーレスディべロプメント</span>
                  </div>
                </g-link>

                <g-link @click.native="$emit('close');" to="/our-products" class="c-modal__services-link">
                  <div class="c-modal__services-menu">
                    <span class="c-modal__services-menu-serverless">Serverless</span>
                    <span class="c-modal__services-name">Products</span>
                    <span class="c-modal__services-menu-ja">私たちが開発したプロダクト</span>
                  </div>
                </g-link>

              </div>
            </v-col>

            <v-col cols="8" md="4" lg="4" xl="3" offset="2" offset-md="1" offset-lg="0">
              <div class="c-modal__contact-button-wrapper">
                <g-link
                  to="/contact"
                  class="c-modal__contact-button"
                  @click.native="$emit('close');">
                  <span class="c-modal__contact">Contact</span>
                  <span class="c-modal__contact-ja">お問い合わせ</span>
                </g-link>
              </div><!-- c-modal__contact-button-wrapper -->
            </v-col>

          </v-row>
        </v-container>

        <span class="c-modal__copyright d-none d-md-block">© 2019 Serverless Operations</span>

        <span class="c-modal__copyright">© 2019 Serverless Operations</span>
        <transition class="fade-in" appear>
          <div class="c-modal__sns-block">
            <div class="c-modal__sns-link">
              <a href="https://www.facebook.com/horike.takahiro" target="_blank" class="c-modal__facebook">
                <v-icon>mdi-facebook-box</v-icon>
              </a>
              <a href="https://twitter.com/horike37/" class="c-modal__twitter" target="_blank">
                <v-icon>mdi-twitter</v-icon>
              </a>
            </div>
          </div>
        </transition>
      </div>
      <!-- modal__panel -->

      </div>
    <!--/div-->
  </transition>
</template>

<style lang="scss">
// モーダル
.modal {
  transition: all 0.3s ease;
  pointer-events: none;
  &__panel {
    width: 100vw;
    height: 100vh;
    background-color: $secondary;
    background-image: url('../assets/images/header-modal-bg-top.svg'),
      url('../assets/images/header-modal-bg-bottom.svg'),
      url('../assets/images/header-so-bg-img.svg');
    background-size: 95%, 95%, 100%;
    background-position: top right, bottom left, bottom 10px center;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    z-index: 9;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    //スマホの時
    @include media-breakpoint-down(sm) {
      background-image: url('../assets/images/header-modal-bg-top-sp.svg'),
        url('../assets/images/header-modal-bg-bottom-sp.svg'), none;
      flex-direction: column;
      background-size: 100%, 100%;
      background-position: top right, bottom left;
    }
    @include media-breakpoint-up(md) {
      display: initial;
    }
  } //&__panel
} //modal

.modal-enter {
  opacity: 0;
  transform: translateY(-20px);
}

.modal-leave-active {
  opacity: 0;
  transform: translateY(-20px);
}

.modal-enter .modal-enter .modal-container,
.modal-leave-active .modal-container {
  // -webkit-transform: scale(1.1);
  transform: translateY(-20px) scale(1.1);
}

.c-modal {
  // モーダルの中身
  &__innner {
    position: relative;
    height: 100%;
    width: 100%;
    align-items: center;
    display: flex;
    align-items: center;
    @include media-breakpoint-up(md) {
      position: initial;
    }
  }
  &__logo {
    width: 104px;
    margin: 15px 0 0 20px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    @include media-breakpoint-up(md) {
      width: 234px;
      margin: 0;
      position: initial;
      display: initial;
    }
  }

  // コピーライト
  &__copyright {
    display: inline-block;
    position: absolute;
    bottom: 26px;
    left: 40px;
    font-family: $font-en-normal;
    font-size: 0.75rem;
    height: fit-content;
    @include media-breakpoint-up(md) {
      writing-mode: vertical-lr;
      transform: translateY(-50%);
      top: 50%;
      left: 0;
      margin-left: 16px;
    }
  }
  // メニュー部分とロゴとの距離を調整
  &__menu {
    @include media-breakpoint-up(md) {
      margin-top: 72px;
    }
    @include media-breakpoint-up(lg) {
      margin-top: 112px;
    }
  }

  &__logo-link {
    // transition: all 0.4s ease;
    transition: all 0.4s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
  // 各メニューのリンク
  &__link {
    display: inline-block;
    text-decoration: none;
    color: $white;
    font-family: $font-en-normal;
    margin-bottom: 12px;
    position: relative;
    @include media-breakpoint-up(md) {
      font-size: 2.5rem;
      margin-bottom: 0;
    }
    @include media-breakpoint-up(lg) {
      font-size: 3rem;
    }

    // ホバーすると線が左から右へ伸び、外すと右に消えていく
    &:hover {
      .c-modal__link--menu,
      .c-modal__link--ja {
        opacity: 0.7;
      }
      &:after {
        transform: scaleX(1);
        transform-origin: right center;
        opacity: 0.5;
        transition-duration: 0.825s;
      }
    }
    &:after {
      content: '';
      width: 100%;
      height: 1px;
      display: block;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.5)
      );
      background-position: 0 -80px;
      background-size: 100% 200%;
      position: absolute;
      bottom: 4px;
      right: 0px;
      z-index: 0;
      transform: scaleX(0);
      transform-origin: left center;
      transition: all 0.55s cubic-bezier(0.76, 0, 0.3, 1);
      @include media-breakpoint-up(md) {
        bottom: 18px;
      }
    }

    // 各メニューの文字
    &--menu {
      color: white;
      font-size: 1.9rem;
      line-height: 1;
      display: block;
      transition: all 0.825s cubic-bezier(0.76, 0, 0.3, 1);
      @include media-breakpoint-up(md) {
        font-size: 2.5rem;
        display: inline-block;
      }
      @include media-breakpoint-up(lg) {
        font-size: 3rem;
      }
    } // &--menu

    // 下の日本語のメニュー
    &--ja {
      font-size: 0.62rem;
      display: block;
      color: white;
      transition: all 0.825s cubic-bezier(0.76, 0, 0.3, 1);
      @include media-breakpoint-up(md) {
        font-size: 0.75rem;
        line-height: 1;
      }
    } // &--ja
  } // &__link

  // サービスのブロック
  &__services-block {
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 8px;
    @include media-breakpoint-up(md) {
      padding-top: 18px;
      // margin-bottom: 30px;
    }
  } // &__services-block

  // サービスの各メニュー
  &__services-menu {
    position: relative;
    margin-left: 10px;
    font-size: 1.5rem;
    font-family: $font-en-normal;
    width: fit-content;
    @include media-breakpoint-up(md) {
      margin-left: 18px;
      font-size: 2rem;
      line-height: 0.9;
    }

    // ホバーしたときに右方向へ白線が伸びる
    &:hover {
      .c-modal__services-menu-serverless,
      .c-modal__services-name,
      .c-modal__services-menu-ja {
        opacity: 0.7;
      }
      &:after {
        transform: scaleX(1);
        transform-origin: right center;
        opacity: 0.6;
      }
    }

    &:after {
      content: '';
      width: 100%;
      height: 1px;
      display: block;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.5)
      );
      background-position: 0 -80px;
      background-size: 100% 200%;
      position: absolute;
      bottom: -10px;
      right: 0px;
      z-index: 0;
      transform: scaleX(0);
      transform-origin: left center;
      transition-duration: 0.55s;
      transition-timing-function: cubic-bezier(0.76, 0, 0.3, 1);
    } // &:after
  } // &__services-menu

  // Servicessの各メニュー(ConsultingとDdevelopment)
  &__services-name {
    position: relative;
    font-size: 1.5rem;
    font-family: $font-en-normal;
    transition: all 0.55s cubic-bezier(0.76, 0, 0.3, 1);
    @include media-breakpoint-up(md) {
      display: inline-block;

      font-size: 2rem;
      line-height: 0.9;
    }
  } // &__services-name

  // サービスの日本語説明
  &__services-menu-ja {
    font-size: 0.62rem;
    margin-left: 0px;
    display: block;
    font-family: $font-jp-normal;
    transition: all 0.55s cubic-bezier(0.76, 0, 0.3, 1);
    @media screen and (min-width: 960px) {
      // margin-left: 8px;
      display: inline-block;
      font-size: 0.75rem;
    }
  } // &__services-menu-ja

  // サービスのリンク
  &__services-link {
    width: fit-content;
    display: block;
    margin-top: 10px;
    text-decoration: none;
    color: $white !important;
    transition: all 0.3s ease;
    @include media-breakpoint-up(md) {
      margin-top: 20px;
    }
  } // &__services-link

  // サービスの各項目上のServerless
  &__services-menu-serverless {
    display: block;
    font-size: 0.87rem;
    font-family: $font-en-normal;
    line-height: 1;
    transition: all 0.55s cubic-bezier(0.76, 0, 0.3, 1);
    @include media-breakpoint-up(md) {
      font-size: 1rem;
      line-height: 1;
    }
  } // &__services-menu-serverless

  // コンタクトボタンのwrapper(ボタンの位置と文字位置を調整)
  &__contact-button-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
  } // &__contact-button-wrapper

  //お問い合わせボタン
  &__contact-button {
    border: 1px solid $white;
    border-radius: 3px;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    width: 100%;
    color: $white !important;
    text-decoration: none;
    outline: none;
    height: 48px;
    position: relative;
    overflow: hidden;
    @include media-breakpoint-up(md) {
      display: flex;
      margin-top: 82px;
      // margin-left: 40px;
      padding: 0;
      height: 84px;
      width: 316px;
    }
    @include media-breakpoint-up(lg) {
      margin-top: 84px;
      width: 100%;
    }

    // ボタンアニメーションを設定 背景色白で左から右に広がる
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 120%;
      height: 100%;
      transform: translateX(-100%);
      background: $white;
      transition: transform 0.55s cubic-bezier(0.76, 0, 0.3, 1);
      transform-origin: right top;
      transform: skewX(-30deg) scale(0, 1);
    } // &::before
    &:hover {
      // hover時のメニューの文字色
      .c-modal__contact,
      .c-modal__contact-ja {
        color: $primary;
        z-index: 1;
        transition: color 0.55s cubic-bezier(0.76, 0, 0.3, 1);
      }
      &::before {
        transform: translateX(0);
        transform-origin: left top;
        transform: skewX(-30deg) scale(1, 1);
      }
    } // &:hover
  }

  // お問い合わせ
  &__contact {
    font-size: 1.9rem;
    font-family: $font-en-normal;
    color: white;
    @include media-breakpoint-up(md) {
      font-size: 2.5rem;
    }
    @include media-breakpoint-up(lg) {
      font-size: 3rem;
    }
  }
  //日本語のお問い合わせ
  &__contact-ja {
    font-size: 0.6rem;
    line-height: 1;
    margin-left: 12px;
    font-family: $font-jp-normal;
    color: white;
    @include media-breakpoint-up(lg) {
      font-size: 1rem;
      margin-left: 24px;
    }
  }
  &__sns-block {
    position: absolute;
    bottom: 26px;
    right: 0px;
    height: 28px;
    display: flex;
    justify-content: flex-end;
    margin-right: 28px;
    @media screen and (min-width: 960px) {
      bottom: 154px;
    }
    .v-icon {
      font-size: 26px;
      color: #fff;
    }
  }
  &__sns-link {
    // position: absolute;
    // height: 24px;
  }
  &__facebook {
    margin-right: 16px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
  &__twitter {
    text-decoration: none;
    transition: all 0.4s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
  &__menu-column {
    padding: 0 12px;
    @include media-breakpoint-up(md) {
      padding: 12px;
    }
    &--company {
      padding: 0 12px;
      @include media-breakpoint-up(md) {
        padding: 12px;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
.fade-in-enter-active {
  transition: 0.5s;
}
.fade-in-enter {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
