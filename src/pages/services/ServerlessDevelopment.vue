<template>
  <Layout>
    <div class="v-content__wrap">


  <div class="l-development-page">
    <section class="p-development-header">
      <div class="p-development-header__tryangle"></div>

      <v-container class="p-development-header__">
       
        <!-- ディベロップメントのサービスコピー -->
        <div class="p-development-header__copy">
          <h1 class="p-development-header__title">
            <span class="p-development-header__title--top">Serverless</span><br>Development
            <span class="p-development-header__title-jp">サーバーレスディベロップメント</span>
          </h1>
          <p class="p-development-header__text">
            サーバーレスアプリケーションの設計・開発・保守運用をおまかせいただけます。WebAPIバックエンド、 IoTバックエンド、業務システムバックエンド、チャットボット、フロントエンドのダッシュボード開発など、AWSのフルマネージドサービスを利用して行います。
          </p>
        </div>

        <!-- サービスアイコン -->
        <h2 class="">
          <img
            src="@/assets/images/service-icon-development.svg"
            class="p-development-header__main-icon d-md-block"
            alt="Serverless Development サービスイメージアイコン">
          <img
            src="@/assets/images/about-so-main-square.svg"
            class="p-development-header__main-square d-md-block"
            alt="Serverless Development Serverless Operations Brand Square">
        </h2><!-- p-development-header__main-img -->
        
      </v-container>

      
    </section>

    <!-- サービス内容の導入部分 -->
    <section class="p-development-intro">
      <v-container>

        <v-row class="justify-center">

          <v-col cols="12" md="10">
            <!-- 導入部分見出し -->
            <div class="p-development-intro__header-block">
              <span class="p-development-intro__header-small">
                社内に開発部隊がおらず、サーバーレスでの開発や運用の経験が全くない企業に！
              </span>
              <h2 class="p-development-intro__header">
                開発できる人員と経験がなくても安心！<br class="">設計・開発・保守運用までおまかせいただけます。
              </h2>
              <p class="p-development-intro__header-paragraph">
                サーバーレスアプリケーションの開発サービスです。Serverless Consultingは開発や運用はお客さまが実施しますが、それとは反対にServerless Developmentは設計・開発・保守運用までわれわれが請け負います。
              </p>
            </div>
          </v-col>

          <!-- サービス内容 -->
          <v-col cols="11" md="10" class="p-development-intro__contents-block">
            <h3 class="p-development-intro__contents-header">サービス内容</h3>
            <ul class="p-development-intro__contents-list">
              <li  class="p-development-intro__contents-item">WebAPIバックエンド開発</li>
              <li class="p-development-intro__contents-item">IoTバックエンド開発</li>
              <li class="p-development-intro__contents-item">業務システムバックエンド開発</li>
              <li class="p-development-intro__contents-item">チャットボット開発</li>
            </ul>
          </v-col>

        </v-row>

      </v-container>
      <!-- 背景画像 -->
      <div class="p-development-bg-right"></div>
    </section><!-- p-development-intro -->

    <!-- 解決できる課題 -->
    <section class="p-development-solve">
      <div class="p-development-solve__block">
        <v-row class="pr-4 pl-4 pr-lg-0 pl-lg-0">
          <v-col cols="12">
            <h2 class="p-development-solve__header">解決できる課題</h2>
          </v-col>
          <v-col cols="12" sm="6">
            <h3 class="p-development-solve__subhead">
              開発から運用までを一貫して任せられるため、無駄な時間やコストがかかりません。
            </h3>
          </v-col>
          <v-col cols="12" sm="6">
            <h3 class="p-development-solve__subhead">
              開発や運用に時間を割く必要がないため、お客さまはそのシステム上で動くコアバリューの創出のみに集中できます。
            </h3>
          </v-col>
          <v-col cols="12" sm="9">
            <p class="p-development-solve__paragraph">
              開発から運用までをトータルでお任せいただけるため、スタッフの人件費や外注費などのコストが削減できます。また、お客さまは開発や運用に時間を割く必要がなくなり、システム上で動くコアバリューの創出に集中することができます。
            </p>
          </v-col>
        </v-row>
      </div>
    </section>

    <!-- 業種によるサービスの使用例 -->
    <div class="p-development-gray-bg">

      <section class="p-development-example">
        <div class="p-development-example__block">
          <v-row class="pr-4 pl-4 pr-lg-0 pl-lg-0 justify-center">

            <!-- 見出し -->
            <v-col cols="12" md="10" offset-lg="3">
              <h2 class="p-development-example__header text-sm-left">業種によるサービスの使用例</h2>
            </v-col>

            <!-- 各例 -->
            <v-col cols="12" sm="4" lg="3" offset-sm="0" offset-lg="2" class="text-center">
              <h3 class="p-development-example__examples">
                <img src="@/assets/images/services-gear-icon-white.svg" alt="" class="p-development-example__gear-icon">
                メーカー系のIoTバックエンド
              </h3>
            </v-col>

            <v-col cols="12" sm="4" lg="3" offset-sm="0" class="text-center">
              <h3 class="p-development-example__examples">
              <img src="@/assets/images/services-gear-icon-white.svg" alt="" class="p-development-example__gear-icon">
              業務システムなどの<br>データプロセッシング
              </h3>
            </v-col>

            <v-col cols="12" sm="4" lg="3" offset-sm="0" class="text-center">
              <h3 class="p-development-example__examples">
              <img src="@/assets/images/services-gear-icon-white.svg" alt="" class="p-development-example__gear-icon">
              Webのバックエンドとして</h3>
            </v-col>

          </v-row>

        </div><!-- p-development-example__block" -->
        
      </section>
  

      <!-- 導入の流れ -->
      <section class="p-development-flow">

        <v-container>
          <v-row class="justify-center">

            <v-col>
              <h2 class="p-development-flow__header">導入の流れ</h2>
            </v-col>

            <!-- 導入の流れの内容の背景白のカラム -->
            <v-col cols="11" md="12" class="p-development-flow__column">
              <!-- 導入の流れの内容のリストの入ったブロック -->
              <div class="p-development-flow__block">

                <ul class="p-development-flow__list">
                  <li class="p-development-flow__list-item">
                    <div class="p-development-flow__list-item-block">
                      <h3 class="p-development-flow__list-item-header">お問い合わせ</h3>
                      <p class="p-development-flow__list-item-detail">サイトの問い合わせフォームもしくはチャットから、お問い合わせください。</p>
                    </div>
                  </li>

                  <li class="p-development-flow__list-item">
                    <div class="p-development-flow__list-item-block">
                      <h3 class="p-development-flow__list-item-header">ヒアリング</h3>
                      <p class="p-development-flow__list-item-detail">対面での打ち合わせにより、お客さまの現状の課題を見える化し、スケジュール、規模、予算などをヒアリングします。</p>
                    </div>
                  </li>

                  <li class="p-development-flow__list-item">
                    <div class="p-development-flow__list-item-block">
                      <h3 class="p-development-flow__list-item-header">プラン・見積りの提示</h3>
                      <p class="p-development-flow__list-item-detail">ヒアリング内容からお客さまに最適なプランと見積書を作成し、提示いたします。</p>
                    </div>
                  </li>

                  <li class="p-development-flow__list-item">
                    <div class="p-development-flow__list-item-block">
                      <h3 class="p-development-flow__list-item-header">コンサルティングスタート</h3>
                      <p class="p-development-flow__list-item-detail">プランと見積りに納得していただきましたら、早速コンサルティングを進めていきます。</p>
                    </div>
                  </li>

                </ul><!-- p-development-flow__list -->

              </div><!-- p-development-flow__block -->
            </v-col><!-- p-development-flow__column -->
            
          </v-row>
        </v-container>
      </section>

      <!-- 費用のセクション -->
      <section class="p-development-cost">
        <v-container>
          <v-row justify="center">

            <v-col cols="12" md="11" offset-md="1" class="">
              <h2 class="p-development-cost__header">費用</h2>
            </v-col>
            <v-col cols="11" md="12" class="p-development-cost__block">
               
              <p class="p-development-cost__desc">100万円〜となります。<br>
                  詳しくはお問い合わせフォームより、お気軽にご相談ください。</p>
              
              <div class="p-development-cost__contact-block">
                <g-link to="/contact" class="p-development-cost__contact-button" v-ripple="{ class:`white--text`}">
                  <span>お問い合わせ</span>
                </g-link>
              </div>
            </v-col>

          </v-row>
        </v-container>
        
      </section><!-- p-development-cost -->

    </div>

    <!-- 導入事例 -->
    <section class="p-development-consulting">
      <v-container>
        <v-row>
          <g-link to="/services/serverless-consulting" class="p-development-consulting__link">
          <v-col cols="11" md="12" class="p-development-consulting__block" v-ripple="{ class:`white--text`}">
       
            <h3 class="p-development-consulting__header">
              <span class="p-development-consulting__header--top">
                Serverless
              </span>
                Consulting
              <span class="p-development-consulting__header--ja">
                サーバーレスコンサルティング
                </span>
              </h3>

            <div class="p-development-consulting__contents">
              <p class="p-development-consulting__contents-desc">お客さまが開発・運用するサーバーレスアプリケーションの<br class="d-none d-sm-block">コンサルティングをいたします。</p>
              <h4 class="p-development-consulting__contents-list-header">解決できる課題</h4>
              <ul class="pl-0">
                <li  class="p-development-consulting__contents-item">コスト最適化</li>
                <li class="p-development-consulting__contents-item">経験不足</li>
                <li class="p-development-consulting__contents-item">知識</li>
                <li class="p-development-consulting__contents-item">業務改善</li>
              </ul>
            </div>
        
          </v-col>
          </g-link>

        </v-row>
      </v-container>
    </section>

  </div>

    </div>
  </Layout>
</template>

<script>
// import Meta from '@/assets/mixins/meta'
export default {
  // mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'サーバーレスディベロップメント',
        description:
          'サーバーレスアプリケーションの開発サービスです。Serverless Consultingは開発や運用はお客さまが実施しますが、それとは反対にServerless Developmentは設計・開発・保守運用までわれわれが請け負います。',
        type: 'article',
        url: 'https://serverless.co.jp/services/serverless-development/'
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
.l-development-page {
  background: $white;
  position: relative;
  overflow: hidden;
}

// ページの見出し
.p-development-header {
  background: url('../../assets/images/top-main-pattern-top.svg'),
    url('../../assets/images/top-main-pattern-bottom.svg'),
    linear-gradient(45deg, #02007c 11.76%, #2c48ff 88.21%);
  background-position: top right, bottom left, center;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: contain, contain, auto;
  overflow: hidden;
  height: 640px;
  position: relative;
  @include media-breakpoint-up(md) {
    height: 840px;
  }

  @include media-breakpoint-up(lg) {
    background-size: 70%, 70%, auto;
    height: 840px;
  }

  // メインイメージ左下角部分
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

  // ページタイトル、内容説明文
  &__copy {
    position: absolute;
    bottom: 56px;
    left: 12px;
    padding-right: 4px;
    max-width: 98vw;
    @include media-breakpoint-up(sm) {
      max-width: 400px;
      width: 50vw;
      bottom: 50%;
      transform: translateY(50%);
    }
    @include media-breakpoint-up(md) {
      max-width: 480px;
      left: 32px;
    }
    @include media-breakpoint-up(lg) {
      position: absolute;
      padding: initial;
      // bottom: 7%;
      left: 10%;
      width: 480px;
    }
    @include media-breakpoint-up(xl) {
      left: 16%;
    }
  }
  // ページタイトル
  &__title {
    font-family: $font-en-normal;
    line-height: 0.8;
    font-size: 3rem;
    margin-bottom: 24px;

    @include media-breakpoint-up(md) {
      margin-bottom: 65px;
      font-size: 4rem;
    }

    @include media-breakpoint-up(lg) {
      font-size: 6.25rem;
      margin-bottom: 80px;
    }
    // ページタイトルのServerless
    &--top {
      font-family: $font-en-light;
      font-size: 1.5rem;
      line-height: 1;
      @include media-breakpoint-up(lg) {
        font-size: 3.4rem;
      }
    }
  }

  // 日本語のタイトル
  &__title-jp {
    display: block;
    font-family: $font-jp-normal;
    font-size: 1rem;
    margin-top: 16px;

    @include media-breakpoint-up(lg) {
      margin-top: 16px;
      font-size: 1.5rem;
    }
  }

  // タイトル下文章
  &__text {
    font-family: $font-jp-normal;
    line-height: 32px;
    // margin-bottom: 212px;
    @include media-breakpoint-up(lg) {
      // margin-bottom: 204px;
    }
  }

  // メインイメージのアイコン
  &__main-icon {
    position: absolute;
    width: 70vw;
    right: 50%;
    transform: translateX(50%);
    top: 56px;
    z-index: 0;
    @include media-breakpoint-up(sm) {
      top: 156px;
      width: 50vw;
      right: 20px;
      transform: initial;
    }
    @include media-breakpoint-up(md) {
      right: 40px;
      width: 42vw;
      max-height: 560px;
      transform: translateY(-50%);
      top: 50%;
    }
    @include media-breakpoint-up(lg) {
      right: 112px;
      width: 42vw;
      max-height: 720px;
    }
    @include media-breakpoint-up(xl) {
      right: 16%;
      width: 42vw;
      max-height: 720px;
    }
  }

  // メインイメージのBrand square
  &__main-square {
    position: absolute;
    right: 0;
    display: block;
    width: 100%;
    height: auto;

    @include media-breakpoint-up(md) {
      width: 100%;
      height: auto;
      top: 50%;
      transform: translateY(-50%);
    }
  }
} // p-development-header

// 右下下がりの背景パターン
.p-development-bg-right {
  pointer-events: none;
  background: url('../../assets/images/pattern-bg-right.svg') no-repeat 50% 59px;
  width: 100%;
  background-size: cover;
  position: absolute;
  height: 150px;
  bottom: -180px;
  height: 420px;
  @include media-breakpoint-up(md) {
    bottom: -400px;
    height: 560px;
  }
  @include media-breakpoint-up(lg) {
    bottom: -675px;
    height: 1200px;
  }
} // p-development-bg-right

// 開発できる人員と経験〜の部分
.p-development-intro {
  position: relative;
  margin-bottom: 80px;
  @include media-breakpoint-up(md) {
    margin-bottom: 160px;
  }
  // 見出しのブロック
  &__header-block {
    margin: 32px 0 32px;
    @include media-breakpoint-up(md) {
      margin: 48px 0 48px;
    }
    @include media-breakpoint-up(lg) {
      margin: 56px 0 96px;
    }
  } // &__header-block

  // 社内に開発部隊が〜
  &__header-small {
    font-family: $font-jp-bold;
    color: $primary;
    font-size: 1rem;
    line-height: 2;
    margin-bottom: 30px;
    display: block;
    @include media-breakpoint-up(md) {
      font-size: 1.1rem;
      margin-bottom: 56px;
    }
  }

  //見出し
  &__header {
    font-family: $font-jp-bold;
    color: $primary;
    font-size: 1.2rem;
    position: relative;
    margin-bottom: 12px;
    padding-left: 32px;
    @include media-breakpoint-up(md) {
      font-size: 2rem;
      padding-left: 88px;
      margin-bottom: 25px;
    }
    @include media-breakpoint-up(lg) {
      font-size: 2rem;
      padding-left: 88px;
      margin-bottom: 25px;
    }
    &:before {
      content: '';
      height: 1px;
      width: 24px;
      background: $primary;
      display: block;
      position: absolute;
      top: 16px;
      left: 0;
      @include media-breakpoint-up(md) {
        top: 46px;
        width: 64px;
      }
      @include media-breakpoint-up(lg) {
        width: 80px;
        top: 48px;
        left: 0;
      }
    }
  } //&__header

  // サービス内容のブロック
  &__contents-block {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    z-index: 1;
    position: relative;
    @include media-breakpoint-up(md) {
      flex-direction: row;
    }
  }

  // サービス内容の見出し
  &__contents-header {
    height: auto;
    padding: 32px 0 32px 64px;
    display: block;
    white-space: nowrap;
    font-family: $font-jp-bold;
    font-size: 1.1rem;
    color: $primary;
    @include media-breakpoint-up(md) {
      padding: 88px 24px 88px 56px;
    }
    @include media-breakpoint-up(lg) {
      padding: 88px 150px 88px 90px;
    }
    // 見出し前の装飾
    &:before {
      content: '';
      display: block;
      height: 1px;
      width: 32px;
      background: $primary;
      position: absolute;
      top: 58px;
      left: 24px;
      @include media-breakpoint-up(md) {
        top: 50%;
        left: -24px;
        width: 56px;
      }
      @include media-breakpoint-up(lg) {
        width: 80px;
        top: 50%;
        left: -40px;
      }
    }
  } // &__contents-header

  // サービス内容のリスト
  &__contents-list {
    list-style: none;
    display: block;
    margin: auto 0;
    &:after {
      content: 'など';
      color: $primary;
      font-size: 0.87rem;
      @include media-breakpoint-up(md) {
        font-size: 1rem;
      }
    }
  }

  // サービス内容
  &__contents-item {
    display: inline-block;
    text-align: center;
    padding: 10px 20px;
    margin-right: 8px;
    margin-bottom: 8px;
    background: $tertiary;
    border-radius: 32px;
    color: $white;
    font-family: $font-jp-normal;
    font-size: 0.87rem;
    &:nth-child(4) {
      margin-bottom: 24px;
    }
    @include media-breakpoint-up(md) {
      font-size: 1rem;
      padding: 10px 20px;
      margin-right: 8px;
      margin-bottom: 8px;
      &:nth-child(3) {
        margin-bottom: 0;
      }
      &:nth-child(4) {
        margin-bottom: 0;
      }
    }
    @include media-breakpoint-up(lg) {
      padding: 11px 24px;
      margin-right: 16px;
      margin-bottom: 13px;
      &:nth-child(3) {
        margin-bottom: 0;
      }
      &:nth-child(4) {
        margin-bottom: 0;
      }
    }
  }

  &__header-paragraph {
    font-family: $font-jp-normal;
    line-height: 2;
    color: $black;
    margin-bottom: 0;
    @include media-breakpoint-up(md) {
      padding: 0 88px;
    }
  }
}

// 解決できる課題
.p-development-solve {
  background: $primary;
  z-index: 2;
  position: relative;
  padding: 32px 0;
  // 余白
  @include media-breakpoint-up(md) {
    padding: 72px 4.3% 160px 8.3%;
  }
  @include media-breakpoint-up(lg) {
    margin-right: calc((100vw - 1170px) / 2);
  }
  @include media-breakpoint-up(xl) {
    margin-right: calc((100vw - 1170px) / 2);
  }

  &__block {
    @include media-breakpoint-up(lg) {
      margin-left: auto;
      max-width: 1100px;
    }
  }
  // 見出し
  &__header {
    position: relative;
    font-size: 1.3rem;
    font-family: $font-jp-bold;
    padding-left: 48px;
    margin-bottom: 0px;
    @include media-breakpoint-up(md) {
      font-size: 2rem;
      padding-left: 72px;
      margin-bottom: 16px;
    }
    @include media-breakpoint-up(lg) {
      font-size: 2rem;
      padding-left: 100px;
      margin-bottom: 48px;
    }
    // タイトル前の装飾
    &:before {
      content: '';
      height: 1px;
      width: 24px;
      background: $white;
      display: block;
      position: absolute;
      top: 16px;
      left: 8px;
      @include media-breakpoint-up(sm) {
        width: 32px;
        top: 16px;
      }
      @include media-breakpoint-up(md) {
        width: 48px;
        top: 26px;
      }
      @include media-breakpoint-up(lg) {
        width: 80px;
        top: 26px;
        left: 0;
      }
    }
  } //&__header

  // 小見出し
  &__subhead {
    font-family: $font-jp-bold;
    font-size: 1rem;
    margin-bottom: 0px;
    line-height: 1.3;
    @include media-breakpoint-up(md) {
      font-size: 1.2rem;
      margin-bottom: 16px;
      line-height: 1.3;
    }
    @include media-breakpoint-up(lg) {
      font-size: 1.5rem;
      margin-bottom: 36px;
    }
  }
  // 説明文
  &__paragraph {
    font-family: $font-jp-normal;
    line-height: 2;
    @include media-breakpoint-up(md) {
      font-family: $font-jp-normal;
      line-height: 2;
    }
  }
}

// 導入の流れ以下の背景のグレー
.p-development-gray-bg {
  background: $light-gray-2;
}

// 業種によるサービスの使用例
.p-development-example {
  padding: 32px 0;
  background: $tertiary;
  @include media-breakpoint-up(lg) {
    padding: 210px 8.3% 72px 4.1%;
    margin-left: calc((100vw - 1170px) / 2);
    position: relative;
    top: -152px;
  }
  @include media-breakpoint-up(xl) {
    padding: 210px calc((100vw - 1170px) / 2) 88px 170px;
    top: -152px;
  }
  &__block {
    @include media-breakpoint-up(lg) {
      margin-right: auto;
      max-width: 1000px;
    }
  }

  // 業種によるサービスの使用例 見出し
  &__header {
    position: relative;
    font-size: 1.3rem;
    font-family: $font-jp-bold;
    padding-left: 48px;
    margin-bottom: 0px;
    @include media-breakpoint-up(md) {
      font-size: 2rem;
      padding-left: 72px;
      margin-bottom: 32px;
    }
    @include media-breakpoint-up(lg) {
      font-size: 2rem;
      padding-left: 100px;
      margin-bottom: 56px;
    }

    // 業種によるサービスの使用例 タイトル前の装飾
    &:before {
      content: '';
      height: 1px;
      width: 24px;
      background: $white;
      display: block;
      position: absolute;
      top: 16px;
      left: 8px;
      @include media-breakpoint-up(sm) {
        width: 32px;
        top: 16px;
      }
      @include media-breakpoint-up(md) {
        width: 48px;
        top: 26px;
      }
      @include media-breakpoint-up(lg) {
        width: 80px;
        top: 26px;
        left: 0;
      }
    } // &:before
  } // &__header

  // 業種によるサービスの使用例歯車のアイコン
  &__gear-icon {
    margin-bottom: 16px;
    @include media-breakpoint-up(lg) {
      max-width: 130px;
      height: auto;
      margin-bottom: 28px;
    }
  }

  // 業種によるサービスの使用例
  &__examples {
    font-family: $font-jp-bold;
    font-size: 1rem;
    margin-bottom: 16px;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include media-breakpoint-up(md) {
      font-size: 1rem;
    }
  }
} // p-development-example

// 導入の流れ
.p-development-flow {
  padding: 32px 0 0;
  position: relative;
  z-index: 1;
  background: no-repeat url('../../assets/images/services-use-case-bg.svg');
  background-position: center 2000px;
  background-size: contain;

  @include media-breakpoint-up(md) {
    padding: 60px 0;
    background: no-repeat url('../../assets/images/services-use-case-bg.svg');
    background-position: center 1800px;
    background-size: contain;
  }

  @include media-breakpoint-up(lg) {
    background-position: center 1900px;
    background-size: contain;
  }

  // 導入の流れの見出し
  &__header {
    position: relative;
    font-size: 1.5rem;
    padding-left: 48px;
    color: $secondary;
    font-family: $font-jp-bold;
    @include media-breakpoint-up(md) {
      font-size: 2rem;
      margin-bottom: 36px;
      padding-left: 72px;
    }
    @include media-breakpoint-up(lg) {
      padding-left: 96px;
    }

    // 見出しの前の装飾の線
    &:before {
      content: '';
      height: 1px;
      width: 24px;
      background: $primary;
      display: block;
      position: absolute;
      top: 16px;
      left: 8px;
      @include media-breakpoint-up(sm) {
        width: 32px;
        top: 18px;
      }
      @include media-breakpoint-up(md) {
        width: 48px;
        top: 22px;
      }
      @include media-breakpoint-up(lg) {
        width: 80px;
        top: 22px;
        left: 0;
      }
    }
  } // &__header

  // 導入の流れのカラム
  &__column {
    position: relative;
    background: $white;
    box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
    padding: 32px 24px 16px 24px;
    @include media-breakpoint-up(md) {
      padding: 32px 94px;
    }
  }

  //リストの見出しの数字 カウンターで表示
  &__list {
    counter-reset: number 0;
    padding-left: 0px;
    @include media-breakpoint-up(md) {
      // padding-left: 24px;
    }
  }

  //リストの見出しの内容
  &__list-item {
    list-style: none;
    position: relative;
    display: flex;
    @include media-breakpoint-down(sm) {
      margin-bottom: 16px;
    }

    // 導入の流れリストの数字
    &:before {
      counter-increment: number;
      content: counter(number, decimal-leading-zero);
      font-size: 2rem;
      line-height: 1;
      color: $primary;
      font-family: $font-en-normal;
      // padding: 32px 0;
      @include media-breakpoint-up(md) {
        font-size: 3rem;
        padding: 32px 0;
      }
    } //&:before

    // 流れの項目間の縦線
    &:after {
      content: '';
      height: 56px;
      width: 1px;
      background: $primary;
      position: absolute;
      bottom: 0px;
      left: 18px;
      @include media-breakpoint-up(sm) {
        height: 48px;
        left: 20px;
      }
      @include media-breakpoint-up(md) {
        height: 32px;
        left: 32px;
      }
    } // &:after

    // 最後の項目後の縦線を無しに
    &:last-child {
      &:after {
        content: initial;
      }
    } // &:last-child
  } // &__list-item

  // 各流れの内容のブロック
  &__list-item-block {
    margin-left: 16px;
    padding: 0 0 32px 0;
    @include media-breakpoint-up(md) {
      margin-left: 22px;
      padding: 32px 0;
    }
  } // &__list-item-block

  // 各流れの見出し
  &__list-item-header {
    margin-bottom: 4px;
    font-family: $font-jp-bold;
    color: $primary;
    font-size: 1rem;
    @include media-breakpoint-up(sm) {
      margin-bottom: 16px;
      font-size: 1.1rem;
    }
  } // &__list-item-header

  // フロー詳細
  &__list-item-detail {
    font-family: $font-jp-normal;
    color: $black;
    margin-bottom: 0;
    @include media-breakpoint-down(sm) {
      font-size: 0.87rem;
    }
  }
} // p-development-flow

// 費用部分
.p-development-cost {
  padding-bottom: 32px;
  @include media-breakpoint-up(md) {
    padding-bottom: 200px;
  }

  &__block {
    box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
    background: $white;
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    @include media-breakpoint-up(md) {
      flex-direction: row;
      padding: initial;
    }
  }

  // 見出し
  &__header {
    font-family: $font-jp-bold;
    color: $primary;
    font-size: 1.5rem;
    position: relative;
    padding-left: 48px;
    @include media-breakpoint-up(sm) {
      padding-left: 56px;
    }
    @include media-breakpoint-up(md) {
      font-size: 2rem;
      padding-left: 0;
    }
    @include media-breakpoint-up(lg) {
      margin-bottom: 24px;
    }

    // 見出しの前の装飾の線
    &:before {
      content: '';
      height: 1px;
      width: 24px;
      background: $primary;
      display: block;
      position: absolute;
      top: 19px;
      left: 8px;
      @include media-breakpoint-up(sm) {
        width: 32px;
        top: 20px;
        left: 8px;
      }
      @include media-breakpoint-up(md) {
        width: 48px;
        top: 22px;
        left: -64px;
      }
      @include media-breakpoint-up(lg) {
        width: 80px;
        top: 25px;
        left: -100px;
      }
    }
  } // &__header

  &__desc {
    display: block;
    font-family: $font-jp-normal;
    color: $black;
    line-height: 2;
    @include media-breakpoint-up(md) {
      padding: 52px 72px 45px 64px;
    }
    @include media-breakpoint-up(lg) {
      padding: 52px 100px 45px 100px;
    }
  }

  // お問い合わせボタンのブロック
  &__contact-block {
    margin: 24px 0 0 0;
    @include media-breakpoint-up(md) {
      margin: 60px 0 0 0;
    }
    @include media-breakpoint-down(md) {
      text-align: center;
    }
  }

  // お問い合わせボタン
  &__contact-button {
    text-align: center;
    display: inline-block;
    padding: 16px 64px;
    margin: 0 auto;
    background: $tertiary;
    // background-image: linear-gradient(
    //   to right,
    //   rgba(0, 0, 0, 0) 50%,
    //   rgba(255, 255, 255, 1) 50%
    // );
    background-position: 0 0;
    background-size: 200% auto;
    clip-path: polygon(
      calc(100% - 8px) 0,
      0 0,
      0 calc(100% - 8px),
      8px 100%,
      100% 100%,
      100% 8px
    );
    color: $white;
    text-decoration: none;
    transition: all 0.2s;
    @include media-breakpoint-up(md) {
      margin: initial;
      display: block;
    }
    &:hover {
      // opacity: 0.5;
    }
  } // &__contact-button
}

.p-development-consulting {
  margin: 32px 0 56px;
  @include media-breakpoint-up(md) {
    margin: 112px 0 145px;
  }
  &__link {
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  // consultingのブロック
  &__block {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    position: relative;
    width: 100%;
    @include media-breakpoint-up(md) {
      flex-direction: row;
    }
    // 装飾のprimary色の線
    &:after {
      content: '';
      display: block;
      height: 1px;
      width: 32px;
      background: $primary;
      position: absolute;
      left: -12px;
      top: 80px;
      @include media-breakpoint-up(md) {
        top: 50%;
        right: -24px;
        width: 48px;
        left: initial;
      }
      @include media-breakpoint-up(lg) {
        width: 80px;
        top: 50%;
        right: -40px;
      }
      @include media-breakpoint-up(xl) {
        width: 160px;
        top: 50%;
        right: -80px;
      }
    }
  }

  // サービス内容の見出し
  &__header {
    height: auto;
    padding: 32px 24px 16px 16px;
    display: block;
    white-space: nowrap;
    font-family: $font-en-normal;
    font-size: 3rem;
    color: $primary;
    line-height: 1;
    @include media-breakpoint-up(md) {
      padding: 88px 24px 88px 56px;
      font-size: 5rem;
    }
    @include media-breakpoint-up(lg) {
      padding: 88px 56px 88px 90px;
      font-size: 6.25rem;
    }
    // 上のServerless
    &--top {
      font-family: $font-en-light;
      display: block;
      font-size: 1.2rem;
      line-height: 0.8;
      @include media-breakpoint-up(md) {
        font-size: 2.5rem;
        line-height: 1;
      }
    }
    // 下のサーバレスコンサルティング
    &--ja {
      font-family: $font-jp-bold;
      display: block;
      font-size: 0.75rem;
      line-height: 1;
      @include media-breakpoint-up(md) {
        font-size: 1rem;
      }
    }
  }

  // サービス内容
  &__contents {
    list-style: none;
    display: block;
    margin: auto 0;
    @include media-breakpoint-down(sm) {
      padding-left: 16px;
    }
  }

  // Serverless Consultingの説明
  &__contents-desc {
    line-height: 1.2;
    font-family: $font-jp-normal;
    @include media-breakpoint-up(md) {
      line-height: 2;
    }
  }

  // 解決できる課題の見出し
  &__contents-list-header {
    font-size: 0.87rem;
    font-family: $font-jp-normal;
    margin-bottom: 8px;
    display: block;
  }

  // 解決できる課題
  &__contents-item {
    display: inline-block;
    text-align: center;
    padding: 10px 20px;
    margin: 0 8px 8px 0;
    background: $tertiary;
    border-radius: 32px;
    color: $white;
    font-family: $font-jp-normal;
    font-size: 0.87rem;
    line-height: 1;
    &:nth-child(4) {
      margin-bottom: 24px;
    }
    @include media-breakpoint-up(md) {
      font-size: 1rem;
      padding: 10px 20px;
      margin: 0 8px 8px 0;

      &:nth-child(4) {
        margin-bottom: 0;
      }
    }
    @include media-breakpoint-up(lg) {
      padding: 11px 24px;
      margin-right: 16px;
      margin-bottom: 13px;
      &:nth-child(4) {
        margin-bottom: 0;
      }
    }
  } // &__contents-item
} // p-development-consulting
</style>