<template>
  <Layout>
    <div class="v-content__wrap">

      <div class="l-about-page">
      <div class="p-services-header">
      <div class="p-services-header__tryangle"></div>
      <div class="p-services-header__main-img">
        <!--背景 -->
        <img src="@/assets/images/about-so-main-bg.svg"
             class="p-services-header__main-bg d-none d-md-block"  alt="Serverless Operationsとは メインイメージ">
        <!-- ロゴ -->
        <img src="@/assets/images/about-so-main-logo.svg"
             class="p-services-header__main-logo d-none d-md-block" alt="Serverless Operationsとは メインイメージ ロゴ">
        <!-- 粒子 -->
        <img src="@/assets/images/about-so-main-square.svg"
             class="p-services-header__main-particle d-none d-md-block" alt="Serverless Operationsとは メインイメージ">

        <!--背景 -->
        <img src="@/assets/images/about-so-main-bg-sp.svg"
             class="p-services-header__main-bg d-md-none" alt="Serverless Operationsとは メインイメージ">
        <!-- ロゴ -->
        <img src="@/assets/images/about-so-main-logo-sp.svg"
             class="p-services-header__main-logo d-md-none" alt="Serverless Operationsとは メインイメージ ロゴ">
        <!-- 粒子 -->
        <img src="@/assets/images/about-so-main-particle-sp.svg"
             class="p-services-header__main-particle d-md-none" alt="Serverless Operationsとは メインイメージ">

      </div>
      <v-container class="p-services-header__container">
        <v-row>
          <v-col cols="12"
                 md="5">
            <h1 class="p-services-header__title">
              Serverless
              <br />Operations
              <span class="p-services-header__title-jp">サーバーレスオペレーションズ</span>
            </h1>

            <p class="p-services-header__text">
              サーバーレスとは、付加価値を産まない重労働をクラウドへアウトソースし、開発者がビジネスのコアバリューに集中するための
              クラウドの利用方法であり開発のための手段です。
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="p-services-intro">
      <v-container>
        <v-row>
          <v-col cols="12"
                 md="6"
                 lg="5"
                 offset-lg="1">
            <div class="p-services-intro__header-block">
              <h2 class="p-services-intro__header">
                こんなことでお困りでは
                <br />ありませんか？
              </h2>
              <p class="p-services-intro__header-paragraph">「サーバーレスがなんとなく良さそうだけど、どのように開発を実施していけばいいのかわからない」とお困りのエンタープライズな会社やスタートアップ企業のみなさまへ。Serverless Operationsは、開発や運用の支援、コンサルティングまで一貫してサポート。お客さまのサーバーレスに関するさまざまな課題を解決いたします。</p>
            </div>
          </v-col>
          <v-col cols="12"
                 md="6"
                 class="d-flex">
            <img src="@/assets/images/about-serverless-operations-problem-text.svg"
                 class="p-services-intro__example-img mr-auto ml-auto"  alt="サーバーレスに関するさまざまな課題の例 「サーバレスが何となく良さそうだが、開発方法が分からない」 「開発できるスタッフが自社にいない」 「サーバレスでの開発や運用経験がない」">
           
          </v-col>
        </v-row>
      </v-container>
    </div>

 <div class="l-bg-gray">

      <!-- 強み・課題・サービスのブロック -->
    <v-layout wrap
              class="l-services-strength">
      <v-flex xs12
              md6>
        <div class="p-services-strength">
          <div class="p-services-strength__flex">
            <div class="p-services-strength__block">
              
                <h2 class="p-services-strength__header">サーバーレスオペレーションズの強み</h2>

                <p class="p-services-strength__header-paragraph">
                  第一線で培った豊富な実績と知見で、
                  <br />お客さまのご要望に合わせた支援を行います。
                </p>
                <p class="p-services-strength__paragraph">これまで、Serverless Frameworkを中心としたOSSコミュニティで、OSS開発やコントリビューションを続けてまいりました。グローバルの第一線で培ってきたサーバーレスアプリケーション開発に関する知見を活かし、お客さまの現状やスケジュール、予算など、ご要望に合わせた支援・サポートを行います。</p>
             
            </div> <!-- p-services-strength__block -->
          </div>
        </div><!-- p-services-strength -->

        <div class="p-services-solve">
          <div class="p-services-solve__flex">
            <div class="p-services-solve__block">
              <div class="p-services-solve__header-block">
                <h2 class="p-services-solve__header">解決できる課題</h2>

                <p class="p-services-solve__header-paragraph">
                  「サーバーレスでの開発って最初は難しい…」
                  <br />そんな導入時の問題を解決します。
                </p>
                <p class="p-services-solve__paragraph">サーバーレスによる開発は、クラウドの制約条件やイベントドリブンなアーキテクチャであることを正しく理解してシステムを構成していくことが大切です。しかし、従来のEC2やコンテナのみを使った開発手法とは大きく異なるため、導入の敷居が高いことが事実です。Serverless Operationsは、そういった導入時の課題を乗り越えるため、お客さまにノウハウを提供し、サーバーレスのメリットを正しく享受できるアプリケーション制作をお手伝いいたします。</p>
              </div>
            </div>
          </div>
        </div>
      </v-flex>

      <!-- 2つのサービス部分 -->
      <v-flex xs12
              md6
              class="p-services">
        <v-container>
          <v-row class="p-services__row pl-lg-5">
            <v-col cols="12"
                   md="6"
                   lg="6"
                   xl="8"
                   offset="0"
                   offset-lg>
              <h2 class="p-services__header">
                サーバーレスオペレーションズ
                <br />2つのサービス
              </h2>

              <div>
                <p class="p-services__paragraph">
                  サーバーレスオペレーションズは現在、2つのサービスがあります。
                  <br />お客さまのご要望に合わせて下記よりお選びいただけます。
                </p>
                <div>
                  <v-row class="p-services__service-block">
                    <!-- コンサルティング -->
                    <v-col cols="12"
                           md="12"
                           lg="6"
                           class="pr-lg-0">
                      <g-link to="/services/serverless-consulting" class="p-services__service-column" v-ripple="{ class:`white--text`}">
                        <div class="p-services__service-column-header">
                          
                          <h3 class="p-services__service-header">
                            <img src="@/assets/images/service-icon-consulting-blue.svg"
                               class="p-services__consulting-icon" alt="Serverless Consulting サービスイメージアイコン">
                            <span class="p-services__service-header-top">Serverless</span>
                            <span>Consulting</span>
                            <span class="p-services__service-header-bottom d-block">サーバーレスコンサルテイング</span>

                          </h3>
                          <p class="p-services__service-header-desc">お客さまが開発・運用するサーバーレスアプリケーションのコンサルティングをいたします。</p>

                        </div><!-- p-services__service-column-header -->
                        <div class="p-services__service-bottom-column">
                          <span class="p-services__service-bottom-header mb-4">解決できる課題</span>
                          <span class="p-services__service-bottom-issue">コスト最適化</span>
                          <span class="p-services__service-bottom-issue">経験不足</span>
                          <span class="p-services__service-bottom-issue">知識</span>
                          <span class="p-services__service-bottom-issue">業務改善</span>
                           <!-- More Datails -->
                          <div class="p-services__more">
                            More Details
                          </div>
                        </div>

                      </g-link>
                    </v-col>

                    <!-- ディベロップメント -->
                    <v-col cols="12"
                           md="12"
                           lg="6"
                           class>
                      <g-link to="/services/serverless-development" class="p-services__service-column" v-ripple="{ class:`white--text`}">
                        <div class="p-services__service-column-header">
                          <h3 class="p-services__service-header">
                            <img src="@/assets/images/service-icon-development-blue.svg"
                               class="p-services__development-icon" alt="Serverless Development サービスイメージアイコン">
                            <span class="p-services__service-header-top">Serverless</span>
                            <span>Development</span>
                            <span class="p-services__service-header-bottom d-block">サーバーレスディベロップメント</span>
                          </h3>
                          <p class="p-services__service-header-desc">サーバーレスアプリケーションの設計・開発・保守運用をおまかせいただけます。</p>
                        </div><!-- -services__service-column-header -->
                        <div class="p-services__service-bottom-column">
                          <div>
                            <span class="p-services__service-bottom-header mb-4">解決できる課題</span>
                          <span class="p-services__service-bottom-issue">コスト最適化</span>
                          <span class="p-services__service-bottom-issue">技術者不足</span>
                          <span class="p-services__service-bottom-issue">業務改善</span>
                          </div>
                          <!-- More Datails -->
                          <div class="p-services__more">
                            More Details
                          </div>
                        </div><!-- p-services__service-bottom-column -->

                      </g-link><!-- p-services__service-column -->
                    </v-col>
                  </v-row>
                </div>
              </div>

            </v-col>
          </v-row><!-- p-services__row pl-lg-5 -->
        </v-container>
      </v-flex><!-- p-services -->
      <div class="p-services-bg-right"></div>
    </v-layout>
    <!-- 強み・課題・サービス部分ここまで -->

    <!-- ユースケース -->
    <div class="p-services-use">
      <div class="p-services-use__bg"></div>
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12"
                 class="text-center">
            <h2 class="p-services-use__header">
              Use Case
              <span class="d-block p-services-use__header-sub">ユースケース</span>
            </h2>
            <p class="p-services-use__header-text">
              Serverless Operationsでは、AWSを中心とした
              <br />以下のようなサーバーレスアプリケーションの開発支援が可能です。
            </p>
          </v-col>
          <v-col cols="11"
                 md="12"
                 class="p-services-use__column-left">
            <div class="p-services-use__column-paragraph-block">
              <img src="@/assets/images/services-gear-icon.svg" alt="" class="p-services-use__column-left-bg">
              <h3 class="p-services-use__column-header">
                Web & Mobile App
                <br />Backend
                <span class="p-services-use__column-header-sub">Web & Moblieアプリケーションバックエンド</span>
              </h3>
              <p class="p-services-use__column-paragraph--first">
                API GatewayやAppSyncといったサービスを使用すると、 Webアプリケーションやモバイルアプリケーションのバックエンドとしての機能が提供できます。
                <br />これらのサービスはアクセス数に応じで自動でスケールアウトする仕組みになっており、秒間数千数万のトランザクションを捌くことができます。また、コストはトラフィック量に比例するため、トラフィックの少ない間は大幅にコストが削減されます。
              </p>
            </div>
          </v-col>
          <v-col cols="11"
                 md="12"
                 class="p-services-use__column-right">
            <div>
              <img src="@/assets/images/services-gear-icon.svg" alt="" class="p-services-use__column-right-bg">
              <h3 class="p-services-use__column-header">
                IoT Backend
                <span class="p-services-use__column-header-sub">IoTバックエンド</span>
              </h3>
              <p class="p-services-use__column-paragraph">
                AWSでは、様々はIoTに関するプロダクトをリリースしており、その中心を担っているのがAWS IoTです。AWS IoTはMQTT、WebSocket、またはHTTPを使用してIoTデバイスをバックエンドサービスに接続できます。IoTは、自動車・交通機関・物流・医療・農業といった様々な分野で活用が広がっています。
                <br />AWS IoTやLambda, Kinesisといったサービスを使えば、IoTの開発チームはインフラの管理に大きな時間を割かれることなく機能の開発に集中できます。そして「使った分だけ」という課金モデルのため、最初から大きなコストをかけることなく、少人数のスタートアップチームでも容易に始めることができます。
              </p>
            </div>
          </v-col>
          <v-col cols="11"
                 md="12"
                 class="p-services-use__column-left">
            <div>
              <img src="@/assets/images/services-gear-icon.svg" alt="" class="p-services-use__column-left-bg">
              <h3 class="p-services-use__column-header">
                Dataprocessing
                <span class="p-services-use__column-header-sub">Web & Moblieアプリケーションバックエンド</span>
              </h3>
              <p class="p-services-use__column-paragraph">
                アプリケーションやIoTのバックエンドを作るだけなく、それらのユーザの行動を分析するためのデータ分析基盤、機械学習・業務システムなどにおけるETLパイプラインを作ることも可能です。
                <br />AWS Lambda、Kinesis、S3、Athena、Step Functionsなどのサーバーレステクノロジを使用すると、膨大な数のカスタムデータを取得および分析するパイプラインを簡単に構築できます。 WebアプリケーションやIoTと同様に、システムは自動的に拡張されコストは使った分だけになります。
              </p>
            </div>
          </v-col>
          <v-col cols="11"
                 md="12"
                 class="p-services-use__column-right">
            <div>
              <img src="@/assets/images/services-gear-icon.svg" alt="" class="p-services-use__column-right-bg">
              <h3 class="p-services-use__column-header">
                Chatbot
                <span class="p-services-use__column-header-sub">チャットボット</span>
              </h3>
              <p class="p-services-use__column-paragraph">
                AWSではAmazon Recognitionといった画像分析のサービスをはじめ、たくさんの学習モデルをAPIとして提供するサービスがあります。
                <br />それらとAPI Gateway、Lambdaを組み合わせることで容易にチャットボットのサービスを作ることができます。
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  </div>

    </div>
  </Layout>
</template>

<script>
// import Meta from '/assets/mixins/meta'
export default {
  // mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'サーバーレスオペレーションズ',
        description:
          'サーバーレスとは、付加価値を産まない重労働をクラウドへアウトソースし、開発者がビジネスのコアバリューに集中するための クラウドの利用方法であり開発のための手段です。',
        type: 'article',
        url: 'https://serverless.co.jp/serverless-operations/'
        // image: 'https://example.com/img/ogp/test.jpg'
      }
    }
  },
  fetch({ store }) {
    store.commit('resetModal')
  },
  scrollToTop: true
}
</script>

<style lang="scss" scoped>
.l-bg-gray {
  background: $light-gray-2;
}
.l-about-page {
  background: $white;
  position: relative;
  overflow: hidden;
}
.l-services-strength {
  position: relative;
}
// ページの見出し
.p-services-header {
  background: no-repeat url('../../assets/images/company-main-pattern.svg'),
    linear-gradient(205.01deg, #2c48ff -0.06%, #02007c 100.25%);
  overflow: hidden;
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
    align-items: center;
    overflow: hidden;
    @include media-breakpoint-up(md) {
      max-height: 840px;
      height: 100%;
      width: 100%;
    }
  }
  // メインイメージ、ロゴ
  &__main-logo {
    position: absolute;
    display: block;
    right: 0;
    width: 100%;
    height: auto;
    @include media-breakpoint-up(md) {
      width: auto;
      height: 100%;
    }
  }
  // メインイメージ、背景
  &__main-bg {
    position: absolute;
    right: 0;
    display: block;
    mix-blend-mode: overlay;
    width: 100%;
    height: auto;
    @include media-breakpoint-up(md) {
      width: auto;
      height: 100%;
    }
  }
  // メインイメージ、粒子
  &__main-particle {
    position: absolute;
    right: 0;
    display: block;
    width: 100%;
    height: auto;
    @include media-breakpoint-up(md) {
      width: auto;
      height: 100%;
    }
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
    font-size: 3rem;
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
    font-family: $font-jp-normal;
    font-size: 1.5rem;
    margin-top: 8px;
    @include media-breakpoint-up(lg) {
      margin-top: 16px;
    }
  }
  // タイトル下文章の見出し
  &__text-header {
    font-family: $font-jp-normal;
    font-size: 1.5rem;
    @include media-breakpoint-up(lg) {
      font-size: 2.1rem;
    }
  }
  // タイトル下文章
  &__text {
    font-family: $font-jp-normal;
    line-height: 32px;
    margin-bottom: 212px;
    @include media-breakpoint-up(lg) {
      margin-bottom: 204px;
    }
  }
  &__scroll-block {
    position: absolute;
    bottom: 120px;
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
// こんなことでお困りでは〜の部分
.p-services-intro {
  // background: no-repeat url('~assets/images/services-example-bg.svg');
  // background-position: 800px;
  // background-size: contain;
  // @include media-breakpoint-up(md) {
  //   background: no-repeat url('~assets/images/services-example-bg.svg');
  //   background-position: center 590px;
  //   background-size: cover;
  // }

  &__header-block {
    margin: 32px 0 0px;
    @include media-breakpoint-up(lg) {
      margin: 150px 0 130px;
    }
  }
  //見出し
  &__header {
    font-family: $font-jp-bold;
    color: $primary;
    font-size: 1.5rem;
    position: relative;
    padding-left: 48px;
    margin-bottom: 12px;
    @include media-breakpoint-up(md) {
      font-size: 2rem;
      padding-left: 88px;
      margin-bottom: 25px;
    }
    &:before {
      content: '';
      height: 1px;
      width: 40px;
      background: $primary;
      display: block;
      position: absolute;
      top: 16px;
      left: 0;
      @include media-breakpoint-up(md) {
        top: 46px;
      }
      @include media-breakpoint-up(lg) {
        width: 80px;
        top: 48px;
        left: 0;
      }
    }
  }
  &__header-paragraph {
    line-height: 2;
    color: $black;
    margin-bottom: 0;
  }
  &__example-img {
    font-family: $font-jp-normal;
    margin: 0 0 70px;
    max-width: 100%;
    height: auto;
    @include media-breakpoint-up(lg) {
      margin: 140px 0 220px;
    }
  }
  &__example-column {
  }
  //例部分をラップしてフィルターで内包要素の形にシャドウを付与
  // &__example-wrap {
  //   filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.2));
  //   // position: relative;
  //   &--1 {
  //     filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.2));
  //     position: relative;
  //     z-index: 3;
  //   }
  // }

  // // 例部分
  // &__example {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   text-align: center;
  //   background: rgba(255, 255, 255, 1);
  //   line-height: 1.5;
  //   // box-shadow: 0px 4px 30px rgba(0, 0, 0, 1);
  //   width: 150px;
  //   height: 150px;
  //   clip-path: polygon(0% 0, 75% 0, 100% 30%, 100% 100%, 25% 100%, 0% 75%);
  //   @include media-breakpoint-up(md) {
  //     width: 220px;
  //     height: 220px;
  //   }
  //   @include media-breakpoint-up(lg) {
  //     width: 248px;
  //     height: 248px;
  //   }
  // }
  // &__example-text {
  //   display: block;
  //   color: $primary;
  //   font-family: $font-jp-normal;
  //   font-size: 0.7rem;
  //   @include media-breakpoint-up(md) {
  //     font-size: 0.87rem;
  //   }
  //   @include media-breakpoint-up(lg) {
  //     font-size: 1.1rem;
  //   }
  // }
  // &__example-icon {
  //   display: block;
  // }
}
// 右下下がりの背景パターン
.p-services-bg-right {
  pointer-events: none;
  background: url('../../assets/images/pattern-bg-right.svg') no-repeat 50% 59px;
  width: 100%;
  background-size: cover;
  position: absolute;
  height: 150px;
  top: -180px;
  height: 420px;
  @include media-breakpoint-up(md) {
    top: -400px;
    height: 560px;
  }
  @include media-breakpoint-up(lg) {
    top: -675px;
    height: 1300px;
  }
} // p-services-bg-right

// SOの強み部分
.p-services-strength {
  background: $primary;
  color: $tertiary;
  position: relative;
  z-index: 1;
  @include media-breakpoint-up(md) {
    top: -80px;
  }
  @include media-breakpoint-up(lg) {
    top: -104px;
  }

  // 強みの見出し
  &__header {
    font-family: $font-jp-bold;
    color: $white;
    font-size: 1.5rem;
    line-height: 42px;
    padding-left: 32px;
    margin-bottom: 32px;
    @include media-breakpoint-up(md) {
      font-size: 2rem;
      padding-left: 52px;
      margin-bottom: 32px;
    }
    @include media-breakpoint-up(lg) {
      margin-bottom: 70px;
      padding-left: 72px;
    }
    @include media-breakpoint-up(xl) {
      margin-bottom: 70px;
      padding-left: 0px;
    }
    // 見出し前の装飾線
    &:before {
      content: '';
      display: block;
      height: 1px;
      width: 35px;
      background: $white;
      position: relative;
      top: 20px;
      left: -44px;
      @include media-breakpoint-up(md) {
        width: 40px;
        top: 20px;
        left: -48px;
      }
      @include media-breakpoint-up(lg) {
        width: 56px;
        top: 20px;
        left: -72px;
      }
      @include media-breakpoint-up(xl) {
        width: 80px;
        top: 20px;
        left: -108px;
      }
    } // &:before
  }

  // 見出し下の文章
  &__header-paragraph {
    font-family: $font-jp-normal;
    font-size: 1.1rem;
    margin-bottom: 16px;
    @include media-breakpoint-up(lg) {
      font-size: 1.5rem;
      margin-bottom: 28px;
    }
  } // &__header-paragraph

  // 強み部分のカラムの設定
  &__flex {
    flex-direction: column;
    display: flex;
    align-items: center;
    @include media-breakpoint-up(lg) {
      align-items: flex-end;
      position: relative;
    }
  } // &__flex

  &__block {
    background: $primary;
    color: $white;
    padding: 48px 32px 48px 32px;
    position: relative;

    @include media-breakpoint-up(md) {
      max-width: 560px;
      padding: 48px 32px;
    }
    @include media-breakpoint-up(lg) {
      max-width: 670px;
      padding: 70px 68px 80px 104px;
    }
    @include media-breakpoint-up(xl) {
      max-width: 670px;
      padding: 70px 64px 80px 104px;
    }
  } // &__block

  // 強みの文章
  &__paragraph {
    font-family: $font-jp-normal;
    line-height: 32px;
    margin-bottom: 30px;
    font-size: 0.87rem;
    @include media-breakpoint-up(md) {
      font-size: 1rem;
    }
    &:last-child {
      margin-bottom: initial;
    }
  }
} // p-services-strength

// 解決できる課題部分
.p-services-solve {
  background: $secondary;
  position: relative;
  z-index: 3;
  @include media-breakpoint-up(md) {
    position: relative;
    top: -80px;
  }
  @include media-breakpoint-up(lg) {
    top: -104px;
  }

  // 会社メッセージの見出し
  &__header {
    font-family: $font-jp-bold;
    color: $white;
    font-size: 1.5rem;
    line-height: 42px;
    padding-left: 32px;
    margin-bottom: 32px;
    @include media-breakpoint-up(md) {
      font-size: 2rem;
      padding-left: 52px;
      margin-bottom: 70px;
    }
    @include media-breakpoint-up(lg) {
      padding-left: 72px;
    }
    @include media-breakpoint-up(xl) {
      padding-left: 112px;
    }
    // 見出し前の装飾
    &:before {
      content: '';
      display: block;
      height: 1px;
      width: 35px;
      background: $white;
      position: relative;
      top: 24px;
      left: -44px;
      @include media-breakpoint-up(md) {
        width: 40px;
        top: 20px;
        left: -48px;
      }
      @include media-breakpoint-up(lg) {
        width: 56px;
        top: 20px;
        left: -72px;
      }
      @include media-breakpoint-up(xl) {
        width: 80px;
        top: 20px;
        left: -108px;
      }
    }
  }
  &__header-paragraph {
    font-family: $font-jp-normal;
    font-size: 1.1rem;
    margin-bottom: 16px;
    @include media-breakpoint-up(lg) {
      font-size: 1.5rem;
      margin-bottom: 28px;
    }
  }
  &__flex {
    flex-direction: column;
    display: flex;
    align-items: center;
    @include media-breakpoint-up(lg) {
      align-items: flex-end;
      position: relative;
    }
  }
  &__block {
    background: $secondary;
    color: $white;
    padding: 48px 32px 48px 32px;
    position: relative;

    @include media-breakpoint-up(md) {
      max-width: 560px;
      padding: 48px 32px;
    }
    @include media-breakpoint-up(lg) {
      max-width: 670px;
      padding: 70px 68px 80px 104px;
    }
    @include media-breakpoint-up(xl) {
      max-width: 670px;
      padding: 70px 64px 80px 104px;
    }
  }
  &__paragraph {
    font-family: $font-jp-normal;
    line-height: 32px;
    margin-bottom: 30px;
    font-size: 0.87rem;
    @include media-breakpoint-up(md) {
      font-size: 1rem;
    }
    &:last-child {
      margin-bottom: initial;
    }
  }
} //p-services-solve

// サービス
.p-services {
  background: $tertiary;
  color: $white;
  position: relative;
  z-index: 3;

  &__row {
    justify-content: center;
    @include media-breakpoint-up(md) {
      justify-content: start;
    }
  }
  // 見出し
  &__header {
    font-family: $font-jp-bold;
    color: $white;
    font-size: 1.3rem;
    line-height: 42px;
    padding-left: 48px;
    margin-bottom: 32px;
    @include media-breakpoint-up(md) {
      font-size: 1.8rem;
      padding-left: 32px;
      margin-bottom: 32px;
      margin-top: 32px;
    }
    @include media-breakpoint-up(lg) {
      padding-left: 45px;
      margin-top: 94px;
    }
    @include media-breakpoint-up(xl) {
      padding-left: 120px;
      margin-top: 94px;
    }
    &:before {
      content: '';
      display: block;
      height: 1px;
      width: 35px;
      background: $white;
      position: relative;
      top: 24px;
      left: -44px;
      @include media-breakpoint-up(md) {
        width: 24px;
        top: 20px;
        left: -32px;
      }
      @include media-breakpoint-up(lg) {
        width: 40px;
        top: 20px;
        left: -56px;
      }
      @include media-breakpoint-up(xl) {
        width: 80px;
        top: 20px;
        left: -96px;
      }
    }
  }

  &__paragraph {
    font-family: $font-jp-normal;
    line-height: 2;
    font-size: 0.87rem;
    padding-left: 24px;
    margin-bottom: 24px;
    @include media-breakpoint-up(xl) {
      padding-left: 120px;
    }
    &:last-child {
      margin-bottom: 72px;
      @include media-breakpoint-up(lg) {
        margin-bottom: 112px;
        padding-left: 48px;
      }
    }
  } // &__paragraph

  // サービスのブロック
  &__service-block {
    @include media-breakpoint-up(md) {
      padding-left: 32px;
    }
    @include media-breakpoint-up(xl) {
      padding-left: 56px;
    }
  }
  &__service-column {
    display: block;
    color: $primary;
    background: $white;
    text-decoration: none;
    position: relative;
    height: 100%;
    transition: all 0.2s;
    &:hover {
      box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.1);
    }
  }
  //サービスのカラムの上部分
  &__service-column-header {
    padding: 64px 38px 12px;
    @include media-breakpoint-up(md) {
      padding: 80px 32px 16px;
    }
    @include media-breakpoint-up(lg) {
      padding: 200px 22px 16px;
    }
  }
  // Consultingのアイコン
  &__consulting-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 55%;
    @include media-breakpoint-up(md) {
      width: 60%;
      top: 8px;
      right: 8px;
    }
    @include media-breakpoint-up(lg) {
      width: 90%;
      top: 24px;
      right: 16px;
    }
    @include media-breakpoint-up(xl) {
      width: 95%;
      top: 16px;
      right: 8px;
    }
  } // &__consulting-icon

  // Developmentのアイコン
  &__development-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 55%;
    @include media-breakpoint-up(md) {
      width: 60%;
      top: 8px;
      right: 8px;
    }
    @include media-breakpoint-up(lg) {
      width: 90%;
      top: 16px;
      right: 8px;
    }
    @include media-breakpoint-up(xl) {
      width: 95%;
      top: 8px;
      right: 4px;
    }
  } // &__development-icon

  // サービス名
  &__service-header {
    font-family: $font-en-normal;
    margin: 12px 0 20px;
    line-height: 1;
    font-size: 2rem;
    @include media-breakpoint-up(lg) {
      font-size: 2.5rem;
      margin: 12px 0 22px;
    }
  } // &__service-header

  // サービス名上のServerless
  &__service-header-top {
    display: block;
    line-height: 1;
    font-size: 1rem;
    @include media-breakpoint-up(md) {
      font-size: 1.2rem;
    }
  } // &__service-header-top

  // サービス名下の日本語のメニュー
  &__service-header-bottom {
    font-size: 0.8rem;
    line-height: 1.5;
    @include media-breakpoint-up(md) {
      line-height: 1.7;
    }
  } // &__service-header-bottom

  // 各サービスの説明部分
  &__service-header-desc {
    font-family: $font-jp-normal;
  }

  // カラムの解決できる課題部分
  &__service-bottom-column {
    border-top: 1px solid $light-gray-1;
    padding: 16px 42px;
    @include media-breakpoint-up(md) {
      padding: 32px 32px;
    }
    @include media-breakpoint-up(lg) {
      padding: 32px 22px;
    }
  } // &__service-bottom-column

  &__service-bottom-header {
    font-size: 0.87rem;
    display: block;
  } // 解決できる課題の見出し

  // 解決できる課題の項目
  &__service-bottom-issue {
    font-family: $font-jp-normal;
    display: inline-block;
    background: $primary;
    color: $white;
    font-size: 0.87rem;
    border-radius: 100px;
    margin-bottom: 6px;
    padding: 10px 22px;
    @include media-breakpoint-up(md) {
      margin-bottom: 12px;
      padding: 10px 22px;
      font-size: 0.87rem;
    }
  } // &__service-bottom-issue

  // More Details
  &__more {
    text-align: right;
    color: $primary;
    font-family: $font-en-normal;
    font-size: 1rem;
    text-decoration: none;
    display: block;
    position: relative;
    margin-top: 8px;
    @include media-breakpoint-up(md) {
      margin-top: 24px;
    }
    &::before {
      content: '';
      background-image: url('../../assets/images/top-news-more-object.svg');
      display: inline-block;
      height: 16px;
      width: 16px;
      // position: absolute;
      top: 4px;
      right: 100px;
    }
  } // &__more
} // p-services

//ユースケース
.p-services-use {
  padding: 60px 0 60px 0;
  position: relative;
  z-index: 2;
  color: $primary;
  background: no-repeat url('../../assets/images/services-use-case-bg.svg');
  background-position: center 2000px;
  // background-position: center 2120px;
  background-size: contain;
  @include media-breakpoint-up(md) {
    background: no-repeat url('../../assets/images/services-use-case-bg.svg');
    background-position: center 1800px;
    background-size: contain;
  }
  @include media-breakpoint-up(lg) {
    padding: 120px 0 182px 0;
    background-position: center 1900px;
    background-size: contain;
  }

  // 上部の背景
  &__bg {
    // background-color: $light-gray-2;
    background: no-repeat url('../../assets/images/company-bg-img.svg');
    background-position: bottom;
    background-size: contain;
    position: absolute;
    height: 800px;
    width: 100%;
    z-index: 1;
    top: -680px;
    @include media-breakpoint-up(md) {
      background-position: bottom;
      background-size: cover;
      top: -450px;
    }
    @include media-breakpoint-up(lg) {
      background-position: bottom;
      top: -450px;
    }
  }
  // 見出し
  &__header {
    position: relative;
    // z-index: 1;
    line-height: 1;
    font-family: $font-en-normal;
    font-size: 3rem;
    margin-bottom: 16px;
    @include media-breakpoint-up(md) {
      font-size: 7.5rem;
      margin-bottom: 42px;
    }
  }
  // 見出しの日本語部分
  &__header-sub {
    font-family: $font-jp-normal;
    font-size: 1rem;
    @include media-breakpoint-up(md) {
      font-size: 1.5rem;
      margin-top: 4px;
    }
  }

  &__header-text {
    font-family: $font-jp-normal;
    color: $primary;
    font-size: 1rem;
    margin-bottom: 48px;
    // z-index: 1;
    position: relative;
    @include media-breakpoint-up(md) {
      font-size: 1.5rem;
      margin-bottom: 100px;
    }
  }
  // 左寄りのカラム
  &__column-left {
    position: relative;
    background: $white;
    box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
    padding: 16px 24px 16px 24px;
    margin-bottom: 56px;
    @include media-breakpoint-up(md) {
      // margin-right: 8%;
      margin-bottom: 88px;
      padding: 16px 300px 40px 102px;
    }
    @include media-breakpoint-up(lg) {
      margin-right: 8%;
      margin-bottom: 64px;
      padding: 30px 468px 40px 102px;
    }
  }
  // 左寄りのカラムの背景
  &__column-left-bg {
    position: absolute;
    right: 8px;
    top: 8px;
    max-height: 120px;
    @include media-breakpoint-up(md) {
      right: 60px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      max-height: 180px;
    }
    @include media-breakpoint-up(lg) {
      right: 60px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      max-height: 233px;
    }
  } // &__column-left-bg

  // 右寄りのカラム
  &__column-right {
    position: relative;
    background: $white;
    box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
    padding: 16px 24px;
    margin-bottom: 56px;
    // margin-left: 8%;
    @include media-breakpoint-up(md) {
      padding: 16px 102px 40px 300px;
      margin-bottom: 88px;
    }
    @include media-breakpoint-up(lg) {
      margin-left: 8%;
      margin-bottom: 64px;
      padding: 30px 102px 40px 468px;
    }
  } // &__column-right

  // 左寄りのカラムの背景
  &__column-right-bg {
    position: absolute;
    right: 8px;
    top: 8px;
    max-height: 120px;
    @include media-breakpoint-up(md) {
      right: initial;
      left: 60px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      max-height: 180px;
    }
    @include media-breakpoint-up(lg) {
      left: 60px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      max-height: 233px;
    }
  } // &__column-right-bg

  // カラム内見出し
  &__column-header {
    font-family: $font-en-normal;
    font-size: 1.5rem;
    top: -18px;
    @include media-breakpoint-up(md) {
      position: absolute;
      font-size: 3rem;
      line-height: 1.2;
      top: -32px;
    }
    @include media-breakpoint-up(lg) {
      font-size: 4.5rem;
      line-height: 64px;
      top: -25px;
    }
    &:before {
      content: '';
      display: block;
      background: $primary;
      height: 1px;
      width: 24px;
      position: absolute;
      top: 33px;
      left: -8px;
      @include media-breakpoint-up(md) {
        width: 40px;
        left: -64px;
        top: 24px;
      }
      @include media-breakpoint-up(lg) {
        width: 80px;
        left: -110px;
        top: 36px;
      }
    }
  } //&__column-header

  // カラム内見出し日本語
  &__column-header-sub {
    display: block;
    font-family: $font-jp-normal;
    font-size: 0.87rem;
    line-height: 1;
    margin-top: 8px;
    @include media-breakpoint-up(lg) {
      font-size: 1rem;
      line-height: 1;
      margin-top: 16px;
    }
  } // &__column-header-sub

  &__column-paragraph {
    font-family: $font-jp-normal;
    color: $black;
    margin-top: 32px;
    font-size: 0.87rem;
    line-height: 24px;
    @include media-breakpoint-up(md) {
      margin-top: 80px;
      width: calc(100% - 120px);
    }
    @include media-breakpoint-up(lg) {
      margin-top: 92px;
      width: 100%;
    }
    &--first {
      font-family: $font-jp-normal;
      color: $black;
      margin-top: 42px;
      font-size: 0.87rem;
      line-height: 24px;
      @include media-breakpoint-up(md) {
        margin-top: 102px;
      }
      @include media-breakpoint-up(lg) {
        margin-top: 172px;
      }
    }
  } // &__column-paragraph
}
</style>
