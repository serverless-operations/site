<template>

  <div class="v-content">
    
    <div class="container p-top-services--container">
      <div class="row">
        <v-col class="p-top-services--body">
          <div class="row p-top-services--consulting">
            <v-col order="1"
                   order-md="1"
                   cols="12"
                   md="6"
                   class="p-top-services--consulting-title">
              <h3>
                <small>Serverless</small>
                Consulting
                <span>サーバーレスコンサルティング</span>
              </h3>
            </v-col>
            <v-col order="2"
                   order-md="2"
                   cols="12"
                   md="6"
                   class="p-top-services--consulting-text">
              <div class="p-top-services--consulting-text-block">
                <h4>
                  お客さまが開発・運用する<br>
                  サーバーレスアプリケーションの<br>
                  コンサルティングをいたします。
                </h4>
                <small>解決できる課題</small>
                <ul>
                  <li>コスト最適化</li>
                  <li>経験不足</li>
                  <li>知識</li>
                  <li>業務改善</li>
                </ul>
                <g-link to="/services/serverless-consulting" class="service-serverless-consluting__link">More Details</g-link>
              </div>
            </v-col>
          </div>
          <div class="row p-top-services--development">
            <v-col order="2"
                   order-md="1"
                   cols="12"
                   md="6"
                   class="p-top-services--development-text">
              <div class="p-top-services--development-text-block">
                <h4>
                  サーバーレスアプリケーションの<br class="">
                  設計・開発・保守運用を<br>
                  おまかせいただけます。
                </h4>
                <small>解決できる課題</small>
                <ul>
                  <li>コスト最適化</li>
                  <li>技術者不足</li>
                  <li>業務改善</li>
                </ul>
                <g-link to="/services/serverless-development" class="service-serverless-development__link">More Details</g-link>
              </div>

            </v-col>
            <v-col order="1"
                   order-md="2"
                   cols="12"
                   md="6"
                   class="p-top-services--development-title">
              <h3>
                <small>Serverless</small>
                Development
                <span>サーバーレスディベロップメント</span>
              </h3>
            </v-col>
          </div>
        </v-col>
        <v-col cols="auto"
               class="p-top-services--vertical-title">
          <h2>Services</h2>
        </v-col>
      </div>
    </div>

    <div class="container p-top-clients--container">
      <div class="p-top-clients--body-shadow" />
      <div class="p-top-clients--body">
        <div class="row">
          <v-col cols="12"
                 md="6"
                 lg="5"
                 justify-self="center"
                 align-self="center">
            <h2 class="d-flex flex-column justify-center align-center align-md-start">
              Our Clients
              <span>クライアント</span>
            </h2>
          </v-col>
          <v-col cols="12"
                 md="6"
                 lg="5"
                 offset-lg="1">
            <v-row>
              <v-col cols="6"
                     sm="4"
                     justify-self="center"
                     align-self="center">
                <img class="p-top-clients--image"
                     src="../assets/images/top-clients-infas.svg"
                     alt="ServerlessOperations Clients INFAS" />
              </v-col>

              <v-col cols="6"
                     sm="4"
                     justify-self="center"
                     align-self="center">
                <img class="p-top-clients--image"
                     src="../assets/images/top-clients-serverworks.svg"
                     alt="ServerlessOperations Clients Serverworks" />
              </v-col>

              <v-col cols="6"
                     sm="4"
                     justify-self="center"
                     align-self="center">
                <img class="p-top-clients--image"
                     src="../assets/images/top-clients-alis.svg"
                     alt="ServerlessOperations Clients ALIS" />
              </v-col>

              <v-col cols="6"
                     sm="4"
                     justify-self="center"
                     align-self="center">
                <img class="p-top-clients--image"
                     src="../assets/images/top-clients-lixil.svg"
                     alt="ServerlessOperations Clients LIXIL" />
              </v-col>

              <v-col cols="6"
                     sm="4"
                     justify-self="center"
                     align-self="center">
                <img class="p-top-clients--image"
                     src="../assets/images/top-clients-maas.svg"
                     alt="ServerlessOperations Clients MaaS Global" />
              </v-col>

              <v-col cols="6"
                     sm="4"
                     justify-self="center"
                     align-self="center">
                <img class="p-top-clients--image"
                     src="../assets/images/top-clients-libelize.svg"
                     alt="ServerlessOperations Clients Libelize" />
              </v-col>
            </v-row>
          </v-col>
          <!-- <v-col cols="12"
                 align-self="end"
                 justify="end"
                 class="p-top-clients--more">
            <g-link to="/news/">More Details</g-link>
          </v-col> -->
        </div>
      </div>
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
  display: block;
  background-color: $white;
  width: 100vw;
  background-image: url('../assets/images/top-service-clients-bk.svg');
  background-size: contain;
  background-position: bottom 32px center;
  .p-top-services {
    &--container {
      max-width: 100vw;
      width: 100vw;
      padding-top: 0;
      margin-bottom: 120px;
    }
    &--vertical-title {
      padding: 0 6px;
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
          margin-right: 12px;
          margin-left: 32px;
        }
      }
    }
    &--body {
      width: 100%;
      max-width: calc(100% - 40px);
      background-color: $tertiary;
      background-image: url('../assets/images/service-icon-consulting.svg'),
        url('../assets/images/service-icon-development.svg');
      background-position: left -16px top 40px, right 16px bottom 40%;
      background-size: 40% auto, 40% auto;
      color: $black;
      padding: 48px 0;
      @include media-breakpoint-up(sm) {
        background-position: left -16px top 40px, right 16px bottom 35%;
        max-width: calc(100% - 107px);
      }
      @include media-breakpoint-up(md) {
        max-width: calc(100% - 152px);
        padding: 120px 0;
        background-position: left 16px top 40px, right 120px bottom 24px;
        background-size: 25% auto, 25% auto;
      }
      @include media-breakpoint-up(lg) {
        padding: 165px 0;
      }
    }
    &--consulting,
    &--development {
      height: 480px;
      position: relative;
      @include media-breakpoint-up(md) {
        height: 240px;
      }
      @include media-breakpoint-up(lg) {
        height: 320px;
      }
      // 各サービスタイトル
      &-title {
        display: flex;
        align-items: center;
        position: relative;
        h3 {
          color: $white;
          font-weight: normal;
          font-family: $font-en-normal;
          font-size: calc((54 / 599) * 100vw);
          line-height: 1;
          @include media-breakpoint-up(sm) {
            font-size: calc((80 / 959) * 100vw);
          }
          @include media-breakpoint-up(md) {
            font-size: calc((54 / 1263) * 100vw);
          }
          @include media-breakpoint-up(lg) {
            font-size: calc((80 / 1887) * 100vw);
          }
          @include media-breakpoint-up(xl) {
            font-size: 5rem;
          }
        }
        small {
          font-family: $font-en-light;
          font-size: 1.5rem;
          line-height: 1;
          display: block;
          @include media-breakpoint-up(md) {
            font-size: 1.25rem;
          }
          @include media-breakpoint-up(lg) {
            font-size: 2rem;
          }
          @include media-breakpoint-up(xl) {
            font-size: 2rem;
          }
        }
        span {
          line-height: 2;
          display: block;
          font-size: 1rem;
          font-family: $font-jp-normal;
          @include media-breakpoint-up(md) {
            font-size: 0.875rem;
            line-height: 2;
          }
          @include media-breakpoint-up(lg) {
            font-size: 1rem;
            line-height: 2;
          }
          @include media-breakpoint-up(xl) {
            font-size: 1rem;
            line-height: 1.2;
          }
        }
        &::before {
          content: '';
          display: none;
          position: absolute;
          top: 0;
          height: 100%;
          width: 320px;
          @include media-breakpoint-up(md) {
            display: block;
            width: 240px;
          }
          @include media-breakpoint-up(lg) {
            width: 320px;
          }
        }
        &::after {
          content: '';
          display: block;
          position: absolute;
          height: 64px;
          width: 1px;
          bottom: -32px;
          @include media-breakpoint-up(md) {
            display: block;
            height: 1px;
            width: 134px;
            top: 50%;
          }
        }
      }
      &-text {
        display: flex;
        justify-content: center;
        background-color: $white;
        // タイトル下見出し文章
        h4 {
          font-family: $font-jp-normal;
          font-size: 1.1rem;
          line-height: 1.33;
          background: linear-gradient(12.36deg, #00007d 11.76%, #2c48ff 88.21%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 16px;
          @include media-breakpoint-up(md) {
            font-size: 1.5rem;
            line-height: 1.18;
            margin-bottom: 24px;
          }
          @include media-breakpoint-up(lg) {
            font-size: 2rem;
            line-height: 1.18;
            margin-bottom: 32px;
          }
        }
        small {
          color: $primary;
          font-size: 0.875rem;
          font-family: $font-jp-normal;
        }
        // 解決できる課題バッジ
        ul {
          margin-top: 4px;
          list-style: none;
          padding: 0;
          width: 100%;
          li {
            padding: 10px 24px;
            font-size: 0.875rem;
            font-family: $font-jp-normal;
            display: inline-block;
            color: $white;
            background-color: $tertiary;
            border-radius: 24px;
            width: 48%;
            text-align: center;
            margin-bottom: 8px;
            @include media-breakpoint-up(md) {
              padding: 10px 18px;
              font-size: 1rem;
              width: auto;
              text-align: center;
              font-size: 0.875rem;
            }
            @include media-breakpoint-up(lg) {
              padding: 10px 24px;
            }
          }
        }
      }
      &-text-block {
        width: 85%;
        padding: 40px 0 20px;
        position: relative;
        @include media-breakpoint-up(md) {
          width: 100%;
          padding: 0;
        }
      }
      // サービス詳細へのリンク
      .service-serverless-consluting__link,
      .service-serverless-development__link {
        padding-left: 24px;
        font-family: $font-en-normal;
        font-size: 1rem;
        text-decoration: none;
        display: block;
        position: absolute;
        &::before {
          content: '';
          background-image: url('../assets/images/icon-more-detail-blue.svg');
          display: block;
          height: 16px;
          width: 16px;
          position: absolute;
          top: 4px;
          left: 0;
        }
      }
      .service-serverless-consluting__link {
        bottom: 64px;
        right: 64px;
        transform: rotate(90deg);
        transform-origin: right bottom;
        @include media-breakpoint-down(md) {
          bottom: 64px;
          right: 24px;
        }
        @include media-breakpoint-down(sm) {
          transform: initial;
          position: relative;
          bottom: initial;
          right: initial;
          margin-top: 32px;
        }
      }
      .service-serverless-development__link {
        bottom: 150px;
        left: -12px;
        transform: rotate(90deg);
        transform-origin: left bottom;
        @include media-breakpoint-down(md) {
          bottom: 150px;
          left: -12px;
        }
        @include media-breakpoint-down(sm) {
          transform: initial;
          position: relative;
          bottom: initial;
          left: initial;
          margin-top: 32px;
        }
      }
    }

    &--development-text-block {
      padding: 40px 0 0 0px;
      @include media-breakpoint-up(md) {
        padding: 0 0 0 24px;
      }
      @include media-breakpoint-up(lg) {
        padding: 0 0 0 64px;
      }
    }

    &--consulting-title {
      justify-content: flex-end;
      padding-right: 40px;
      @include media-breakpoint-up(md) {
        justify-content: flex-start;
        padding-right: 0;
        padding-left: 24px;
      }
      @include media-breakpoint-up(lg) {
        padding-left: 40px;
      }

      &::before {
        border-left: 280px solid transparent;
        border-top: 280px solid $white;
        right: 0;
        @include media-breakpoint-up(md) {
          border-left: 240px solid transparent;
          border-top: 240px solid $white;
        }
        @include media-breakpoint-up(lg) {
          border-left: 320px solid transparent;
          border-top: 320px solid $white;
        }
      }
      &::after {
        right: 50%;
        background: linear-gradient(
          $white 0,
          $white 50%,
          $tertiary 50%,
          $tertiary 100%
        );
        @include media-breakpoint-up(md) {
          right: 52px;
          background: linear-gradient(
            90deg,
            $white 0,
            $white 50%,
            $tertiary 50%,
            $tertiary 100%
          );
        }
        @include media-breakpoint-up(lg) {
          right: 92px;
        }
      }
      h3 {
        margin-bottom: 24px;
        @include media-breakpoint-up(md) {
          margin-bottom: 56px;
        }
        @include media-breakpoint-up(lg) {
          margin-bottom: 24px;
        }
        @include media-breakpoint-up(xl) {
          margin-bottom: 56px;
        }
      }
    }
    &--development-title {
      justify-content: flex-start;
      padding: 48px 40px 0 40px;
      @include media-breakpoint-up(sm) {
        padding: 80px 40px 0 40px;
      }
      @include media-breakpoint-up(md) {
        padding: 120px 40px 0 40px;
        justify-content: flex-end;
        padding-top: 0;
        padding-right: 24px;
        padding-left: 0;
      }
      @include media-breakpoint-up(lg) {
        padding-right: 40px;
      }

      &::before {
        border-right: 280px solid transparent;
        border-bottom: 280px solid $white;
        left: 0;
        @include media-breakpoint-up(md) {
          border-right: 240px solid transparent;
          border-bottom: 240px solid $white;
        }
        @include media-breakpoint-up(lg) {
          border-right: 320px solid transparent;
          border-bottom: 320px solid $white;
        }
      }
      &::after {
        left: 50%;
        background: linear-gradient(
          $white 0,
          $white 50%,
          $tertiary 50%,
          $tertiary 100%
        );
        @include media-breakpoint-up(md) {
          left: 52px;
          background: linear-gradient(
            90deg,
            $tertiary 0,
            $tertiary 50%,
            $white 50%,
            $white 100%
          );
        }
        @include media-breakpoint-up(lg) {
          left: 92px;
        }
      }
      h3 {
        margin-bottom: 24px;
        padding-top: 16px;
        @include media-breakpoint-up(md) {
          padding-top: 0;
          margin-bottom: 0;
        }
        @include media-breakpoint-up(lg) {
          margin-bottom: 0;
        }
        @include media-breakpoint-up(xl) {
          margin-bottom: 20px;
        }
      }
    }

    &--consulting-text {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @include media-breakpoint-up(md) {
        align-items: flex-start;
      }
    }
    &--development-text {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // padding: 12px;
      // @include media-breakpoint-up(sm) {
      //   padding-right: 40px;
      //   padding-left: 24px;
      // }
      @include media-breakpoint-up(md) {
        align-items: flex-end;
        padding-right: 24px;
        padding-left: 40px;
      }
    }
  }

  // Our Clients
  .p-top-clients {
    &--container {
      position: relative;
      margin-bottom: 48px;
      @include media-breakpoint-up(md) {
        margin-top: 262px;
        margin-bottom: 192px;
      }
    }
    &--body-shadow {
      display: block;
      z-index: 1;
      position: absolute;
      top: 24px;
      left: 24px;
      width: calc(100% - 34px);
      height: calc(100% - 22px);
      background: linear-gradient(49.74deg, #00007d 11.76%, #2c48ff 88.21%);
      box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
      @include media-breakpoint-up(md) {
        top: 20px;
        left: 20px;
        width: calc(100% - 24px);
        height: calc(100% - 24px);
      }
    }
    &--body {
      background-color: $white;
      padding: 40px 32px 28px;
      position: relative;
      z-index: 3;
      width: calc(100% - 12px);
      box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
      @include media-breakpoint-up(md) {
        padding: 80px 64px 60px;
        width: 100%;
      }
      &::before {
        background-color: $white;
      }

      h2 {
        color: $primary;
        font-size: 3.5rem;
        font-family: $font-en-normal;
        font-weight: normal;
        line-height: 1.25;
        @include media-breakpoint-up(md) {
          font-size: 4rem;
        }
        span {
          display: block;
          font-size: 1rem;
          margin-top: 8px;
          font-weight: normal;
          font-family: $font-jp-normal;
        }
      }
    }
    &--image {
      width: 100%;
      height: auto;
    }
    &--more {
      text-align: right;
      margin-top: 10px;
      @include media-breakpoint-up(md) {
        margin-top: 44px;
      }
      a {
        color: $primary;
        font-family: $font-en-normal;
        font-size: 1rem;
        text-decoration: none;
        display: inline-block;
        position: relative;
        &::before {
          content: '';
          background-image: url('../assets/images/top-news-more-object.svg');
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