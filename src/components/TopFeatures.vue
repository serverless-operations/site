<template>
  <div class="v-content">
    <h2>Features</h2>

    <div class="container">
      <v-row>
        <v-col cols="12" md="11" lg="11" offset-md="1">
          <h3>“共創”とは、<br>
            お客さまと“共につくる”こと。</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" lg="6" offset-md="6">
          <div class="p-top-features--message">
            <p class="p-top-features--message-lead">第一線で培った豊富な知見やノウハウを共有し、
              お客さまと “共に” 課題を解決へと導きます。</p>
            <p>私たちはこれまで、Serverless Frameworkを中心としたOSSコミュニティで、OSS開発やコントリビューションを続けてまいりました。グローバルの第一線で培ってきたサーバーレスアプリケーション開発に関する知見をお客さまに共有しながら、お客さまの現状やスケジュール、予算など、ご要望に合わせた支援・サポートを行います。</p>
          </div>
        </v-col>
      </v-row>
    </div><!-- container -->

    <div class="p-top-features--cards">
      <div class="container">
        <v-row>
          <v-col cols="12" sm="12" md="5" lg="5">
            <div class="p-top-features--card">
              <img class="p-top-features--card-image"
                  src="../assets/images/top-features-1.svg"
                  alt=""
              >
              <div class="p-top-features--card-box">
                <p class="p-top-features--card-subTitle">サーバーレス内製化支援</p>
                <p class="p-top-features--card-title">開発チームの内製化を<br>
                  お手伝いします</p>
                <p class="p-top-features--card-content">お客さまと一緒にプロダクト開発を行いながら、スキルの習得をサポート。最終的にはお客さまのチームだけで開発や運用が行えるよう、内製化を支援します。</p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="5" lg="5" offset-md="2">
            <div class="p-top-features--card down">
              <img class="p-top-features--card-image"
                  src="../assets/images/top-features-2.svg"
                  alt=""
              >
              <div class="p-top-features--card-box">
                <p class="p-top-features--card-subTitle">サーバーレス開発支援</p>
                <p class="p-top-features--card-title">サーバーレスの<br>
                  プロが知見を共有</p>
                <p class="p-top-features--card-content">グローバルの第一線で培ってきたサーバーレスアプリケーション開発に関する知見をお客さまに共有しながら、ご要望に合わせた支援を行います。</p>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="5" lg="5" offset-md="1">
            <div class="p-top-features--card up">
              <img class="p-top-features--card-image"
                  src="../assets/images/top-features-3.svg"
                  alt=""
              >
              <div class="p-top-features--card-box">
                <p class="p-top-features--card-subTitle">サーバーレス受託開発</p>
                <p class="p-top-features--card-title">開発も丸ごと<br>
                  お任せいただけます</p>
                <p class="p-top-features--card-content">AWSによるサーバーレスアーキテクチャをベースとして、お客さまの希望するシステムをフロントエンドからバックエンドまで一気通貫で開発します。</p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="5" lg="5" offset-md="1" class="p-top-features--service">

              <p>お客さまのチームに入り、<br>
                現状を把握しながら課題を共に解決します。</p>
              <a href="/services" class="c-link-button">サービスについて</a>

          </v-col>
        </v-row>
      </div><!-- container -->
    </div><!-- p-top-features--cards -->

    <div class="p-top-features--amazon">
      <div class="container">
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="3">
          <img class="p-top-features--amazon-image"
              src="../assets/images/top-features-amazon.svg"
              alt="AWS Partner Network"
              width="260"
              height="72"
          >
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="9">
          <div class="p-top-features--amazon-box">
            <p class="p-top-features--amazon-title">Serverless OperationsはAWSの内製化支援推進パートナーです</p>
            <p class="p-top-features--amazon-content">AWS社と連携し、「AWSパートナー」としてより幅広く効果的な内製化支援サービスを提供します。</p>
          </div>
        </v-col>
      </v-row>
    </div><!-- p-top-features--amazon -->
  </div><!-- container -->
  </div><!-- v-content -->
</template>

<script>
</script>
<style lang="scss" scoped>
@include LinkButton;
.v-content {
  position: relative;
  z-index: 1;
  flex-direction: column;

  h2 {
    font-size: 200px;
    color: $white;
    font-family: $font-en-normal;
    z-index: 5;
    line-height: 0.8;
    text-align: center;
    padding: 0;
    background: linear-gradient(180deg, #02007c 0%, rgba(2, 0, 124, 0) 100%);
    background-clip: text; //テキストでくり抜く
    -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    @include media-breakpoint-down(md) {
      font-size: 96px;
    }
    @include media-breakpoint-down(sm) {
      font-size: clamp(30px,20vw,96px);
    }
  }

  h3 {
    color: $white;
    font-family: $font-jp-bold;
    font-size: 48px;
    line-height: 133%;
    font-weight: 700;
    @include media-breakpoint-down(md) {
      font-size: 32px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 24px;
    }
  }

  .container {
    width: calc((292 / 375) * 100%);
    margin: 0 auto;
    max-width: 1136px;
  }

  .p-top-features {
    &--message {
      margin-top: 55px;
      font-family: $font-jp-regular;
      font-size: 16px;
      line-height: 200%;
      text-align: justify;
      @include media-breakpoint-down(sm) {
        font-size: 14px;
        line-height: 170%;
      }

      &-lead {
        font-family: $font-jp-bold;
        font-size: 24px;
        line-height: 140%;
        font-weight: 700;
        @include media-breakpoint-down(md) {
          font-size: 20px;
        }
      }
    }

    &--cards {
      margin-top: 32px;
      background: url("../assets/images/top-features-bg.svg") no-repeat center;
      background-size: contain;

      .p-top-features--card.down {
        @include media-breakpoint-up(md) {
          margin-top: 150px;
        }
      }

      .p-top-features--card.up {
        @include media-breakpoint-up(md) {
          margin-top: -32px;
        }
      }

      .col-12 {
        // 重み付けのためにここに記載
        padding: 0;
      }
    }

    &--card {
      background: linear-gradient(45deg, rgba(0, 0, 125, 0) 11.76%, #2C48FF 88.21%);
      border-radius: 3px;
      position: relative;
      display: flex;
      flex-direction: column;
      margin-top: 1em;
      @include media-breakpoint-down(sm) {
        margin-top: 32px;
      }

      &::before {
        content: "";
        width: 100%;
        padding-top: 65%;
      }

      &-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }

      &-box {
        padding: 0 clamp(32px, 3.4vw, 62px) clamp(32px, 3.4vw, 62px) clamp(32px, 3.4vw, 62px);
      }

      &-subTitle {
        font-family: $font-jp-bold;
        font-weight: 700;
        opacity: 0.7;
        font-size: 16px;
        line-height: 150%;
      }

      &-title {
        font-family: $font-jp-bold;
        font-weight: 700;
        font-size: clamp(22px, 1.9vw, 32px);
        line-height: 140%;
        margin-bottom: 24px;
      }

      &-content {
        border-top: 1px solid rgba(255,255,255,.3);
        font-size: 18px;
        line-height: 144%;
        text-align: justify;
        padding-top: 24px;
        @include media-breakpoint-down(sm) {
          font-size: 16px;
        }
      }
    }

    &--service {
      display: flex;
      flex-direction: column;
      justify-content: center;
      @include media-breakpoint-down(md) {
        margin-top:  80px;
      }
      @include media-breakpoint-down(sm) {
        align-items: center;
      }

      p {
        font-family: $font-jp-bold;
        font-weight: 700;
        font-size: clamp(18px, 1.3vw, 24px);
        line-height: 140%;
        text-align: justify;
      }

      a {
        margin-top: 20px;
      }
    }

    &--amazon {
      margin: 140px 0;
      @include media-breakpoint-up(md) {
        margin: 135px 0;
      }
      .container {
        border-top: 1px solid rgba(255,255,255,0.3);
        border-bottom: 1px solid rgba(255,255,255,0.3);
        padding: 68px 0 60px 0;
        @include media-breakpoint-down(sm) {
          padding: 48px 0 40px 0;
        }
      }
      &-image {
        width: 100%;
        max-width: 260px;
        margin: auto;
        display: block;
        @include media-breakpoint-down(sm) {
          max-width: 200px;
        }
      }
      &-box {
        width: fit-content;
        margin: auto;
        @include media-breakpoint-down(md) {
          margin-top: 24px;
        }
        @include media-breakpoint-down(sm) {
          margin-top: 12px;
        }
      }

      &-title {
        font-family: $font-jp-bold;
        font-weight: 700;
        font-size: 18px;
        line-height: 140%;
        @include media-breakpoint-down(md) {
          text-align:  center;
        }
        @include media-breakpoint-down(sm) {
          font-size: 16px;
          text-align:  left;
        }
      }

      &-content {
        margin-bottom: 0;
        font-size: 16px;
        line-height: 200%;
        @include media-breakpoint-down(md) {
          text-align:  center;
        }
        @include media-breakpoint-down(sm) {
          font-size: 14px;
          text-align:  left;
        }
      }
    }
  }
}

</style>
