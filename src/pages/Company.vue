<template>
  <Layout>
    <div class="v-content__wrap">

  <div class="l-company-page">
    <!-- ページヘッダー -->
    <div class="p-company-header">
      <div class="p-company-header__tryangle"></div>
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
          <v-col cols="12"
                 md="6">
            <h1 class="p-company-header__title">
              About us
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
    <section class="p-company-information">
      <v-container class="p-company-information__container">
        <v-row>
          <v-col cols="1"
                 md="1"
                 class="offset-md-1">
            <h2 class="p-company-information__header">Company Infomation</h2>
          </v-col>

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
            </table><!-- p-company-information__table -->
          </v-col>

        </v-row>
      </v-container><!-- p-company-information__container -->
    </section><!-- p-company-information -->

    <!-- メッセージのセクション -->
    <v-layout wrap
              class="p-company-message"
              id="message">
      <v-flex xs12
              md6
              class="p-message-company">
        <div class="p-message-company__flex">
          <h2 class="p-message-company__header">Message</h2>

          <div class="p-message-company__block">
            <div class="p-message-company__header-paragraph-block">
              <h3 class="p-message-company__header-paragraph">
                クラウドの価値を最大限引き出し
                <br class="d-lg-block">顧客のビジネスを加速させる。
              </h3>
            </div>

            <p class="p-message-company__paragraph">Serverless Operationsの存在理由は、アプリケーション開発をもっとシンプルで簡単なものにすることです。サーバーレスファーストで開発によりインフラの管理やスケーラビリティの事前予測といった作業をクラウドにアウトソーシングすることで、ビジネスのコアバリューの創出や改善のために多くのリソースを避けるようになります。</p>
            <p class="p-message-company__paragraph">
              さらなる未来には、インフラの管理だけでなく、プログラミングも不要でアプリケーションが作れる時代が来ることでしょう。
              そうなればアプリケーション開発はもっと簡単になり、リスクやコストをかけずにたくさんのアイデアがチャレンジできるようになるはずです。
              そしてサーバーレスはそんな未来の通過点にあると信じています。
            </p>
            <p class="p-message-company__paragraph">われわれのミッションは、サーバーレスでの開発を通しクラウドの価値そのものを最大限引き出し、顧客のビジネスを大きく加速させることにあります。</p>
            <p class="p-message-company__paragraph">今後は、グローバル向けにサーバーレスの開発をより簡単にやりやすくするためのSaaSサービスの展開を実施したいと考えています。</p>
          </div>
        </div>
      </v-flex>

      <v-flex xs12
              md6
              class="p-message-ceo">
        <v-container>
          <v-row class="p-message-ceo__row">
            <v-col cols="12"
                   md="5"
                   lg="5"
                   offset="0"
                   offset-md="1">
              <p class="p-message-ceo__paragraph-header">
                サーバーレスによる開発を
                <br>より簡単に、<br class="d-none d-lg-block" />より身近なものへ。
              </p>
              <!-- 堀家さんのプロフィール画像 -->
              <div class="p-message-ceo__profile">
                <div>
                  <span class="d-block p-message-ceo__profile-post">CEO</span>
                  <span class="d-block p-message-ceo__profile-name">堀家 隆宏</span>
                  <span class="d-block p-message-ceo__profile-name-en">Takahiro Horike</span>
                </div>

                <div class="p-message-ceo__profile-img">
                  <img src="../assets/images/company-ceo-profile.png"
                         alt="Severless Operations CEO プロフィール画像" />
                </div>
                <div>
                  <a href="https://twitter.com/horike37/"
                     class="p-message-ceo__profile-sns"
                     target="_blank">
                    <v-icon>mdi-twitter</v-icon>
                  </a>
                  <a href="https://www.facebook.com/horike.takahiro"
                     target="_blank"
                     class="p-message-ceo__profile-sns">
                    <v-icon>mdi-facebook-box</v-icon>
                  </a>
                </div>
              </div>
              <div>
                <p class="p-message-ceo__paragraph">
                  大学院を卒業してからソフトウェアエンジニアとして新卒で就職をしてから10年のキャリアになります。
                  もともと、勤めていた会社でAWSは利用していたのですが、2014年にAWS LambdaとAPI Gatewayがリリースされ衝撃を受けました。それまで、AWSはインフラの世界のものでした。しかし、Lambdaが出たことで、AWSのサービスを自由に組み合わせ、AWS GatewayでAWS外の世界と接続ができるようになったのです。
                </p>
                <p class="p-message-ceo__paragraph">これはアプリケーション世界に大きな変革をもたらし、私はこれらのサーバーレスのテクノロジーにのめり込みました。そしてServerless Frameworkというサーバーレスの開発を助けるOSSのコントリビューションや国内でのミートアップ開催などのコミュニティ活動を通して、サーバーレスの開発をより簡単に、より身近なものにするための活動をするようになりました。その結果、コミュニティ活動だけでなく自分自身でも事業を興すようになり現在に至ります。</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout><!-- p-company-message -->

    <!-- 未来像・使命・存在価値 -->
    <section class="p-company-vmv"
         id="vision">
      <div class="p-company-vmv__bg"></div>
      <v-container class="p-company-vmv__container">
        <v-row class="p-company-vmv__row">
          <v-col cols="12"
                 lg="5">
            <h3 class="p-company-vmv__header text-center">
              Vision
              <span class="p-company-vmv__header-ja">未来像</span>
            </h3>
          </v-col>
          <v-col cols="12"
                 lg="6"
                 offset-lg="1">
            <p class="p-company-vmv__paragraph-header">
              人の心や人生の豊かさが
              <br>より大きくなる未来へ。
            </p>
            <p class="p-company-vmv__paragraph">アプリケーション開発をもっとシンプルで簡単なものにしたいと考えています。サーバーレスで開発を行うことは、将来的にはインフラの管理やプログラミングなしでもアプリケーション開発ができるようになる過渡期と考えています。アプリケーション開発がもっと簡単になれば敷居がさがり、たくさんのアイデアを世の中に表現することができます。それを通して、人の心や人生の豊かさをより大きなものにする未来を作ることができるのです。</p>
          </v-col>
          <v-col cols="12"
                 lg="5">
            <h3 class="p-company-vmv__header text-center">
              Mission
              <span class="p-company-vmv__header-ja">使命</span>
            </h3>
          </v-col>
          <v-col cols="12"
                 lg="6"
                 offset-lg="1">
            <p class="p-company-vmv__paragraph-header">
              サーバーレスによる開発を、
              <br>世の中でもっと当たり前のものにしたい。
            </p>
            <p class="p-company-vmv__paragraph">われわれのミッションは、サーバーレスでの開発を通してクラウドの価値そのものを最大限に引き出すこと、顧客のビジネスを大きく加速させることにあります。</p>
          </v-col>
          <v-col cols="12"
                 lg="5">
            <h3 class="p-company-vmv__header text-center">
              Value
              <span class="p-company-vmv__header-ja">存在価値</span>
            </h3>
          </v-col>
          <v-col cols="12"
                 lg="6"
                 offset-lg="1">
            <p class="p-company-vmv__paragraph-header">デベロッパーにとってより簡単に。</p>
            <p class="p-company-vmv__paragraph">
              オープンソースやSaaSの開発を通して、サーバーレスアプリケーションの開発や運用をデベロッパーにとってより簡単なものにします。
              そして、コンサルティングや開発支援を通して事例を積み上げながら、開発のノウハウを広めてまいります。
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section><!-- p-company-vmv -->

  </div>
  
    </div>
  </Layout>
</template>

<script>

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
  scrollToTop: true
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
    font-family: $font-jp-normal;
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
    font-family: $font-jp-normal;
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

.p-company-contents {
  &__mission {
    background: #f0f1f6;
    padding: 65px 70px;
  }
  &__mission-header {
    font-family: $font-jp-normal;
    font-size: 2.1rem;
    color: $secondary;
  }
  &__mission-text {
    color: $secondary;
  }
}

.p-company-message {
  color: $black;
  z-index: 3;
  position: relative;
}
.p-company-vmv {
  //仮の文字色（背景白のため文字が見えないので）
  color: $black;
}

// 会社情報部分
.p-company-information {
  background: no-repeat url('../assets/images/company-bg-img.svg');
  background-position: -100px 765px;
  background-size: cover;
  @include media-breakpoint-up(md) {
    background: no-repeat url('../assets/images/company-bg-img.svg');
    background-position: -100px 750px;
  }
  &__container {
    padding-top: 56px;
    padding-bottom: 102px;
    @include media-breakpoint-up(md) {
      padding-top: 138px;
      padding-bottom: 260px;
    }
  }
  &__table {
    color: $black;
    border-collapse: collapse;
    width: 100%;
    font-family: $font-jp-normal;
  }
  &__header {
    color: $primary;
    font-family: $font-en-light;
    font-size: 2rem;
    writing-mode: vertical-lr;
    margin-left: -16px;
    @include media-breakpoint-up(md) {
      font-size: 3rem;
      margin-left: initial;
    }
  }
  &__table-row {
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
  &__th {
    width: 104px;
    text-align: left;
    font-family: $font-jp-bold;
    color: $tertiary;
    // display: block;
    font-size: 0.87rem;
    @include media-breakpoint-up(md) {
      padding-left: 35px;
      width: 200px;
      font-size: 1rem;
      // display: table-cell;
    }
  }
  &__td {
    font-size: 0.87rem;
    @include media-breakpoint-up(md) {
      font-size: 1rem;
    }
  }
}

.p-message-company {
  background: $primary;
  color: $tertiary;
  @include media-breakpoint-up(md) {
    position: relative;
    top: -80px;
  }
  @include media-breakpoint-up(lg) {
    top: -104px;
  }
  // Messageの見出し
  &__header {
    font-size: 6rem;
    font-family: $font-en-light;
    // line-height: 1rem;
    color: $white;
    margin-top: 60px;
    @include media-breakpoint-up(md) {
      margin-top: 28px;
      font-size: 8rem;
    }
    @include media-breakpoint-up(lg) {
      font-size: 9.3rem;
    }
  }
  &__header-paragraph-block {
    font-family: $font-jp-normal;
  }
  // 会社メッセージの見出し
  &__header-paragraph {
    font-family: $font-jp-bold;
    color: $primary;
    font-size: 1.1rem;
    line-height: 36px;
    padding-left: 47px;
    margin-bottom: 18px;
    @include media-breakpoint-up(md) {
      font-size: 1.5rem;
      line-height: 42px;
      padding-left: 112px;
      margin-bottom: 36px;
    }
    &:before {
      content: '';
      display: block;
      height: 1px;
      width: 35px;
      background: $primary;
      position: relative;
      top: 30px;
      left: -44px;
      @include media-breakpoint-up(md) {
        width: 80px;
        top: 40px;
        left: -108px;
      }
    }
  }
  &__flex {
    flex-direction: column;
    display: flex;
    align-items: center;
    @include media-breakpoint-up(lg) {
      align-items: flex-end;
      position: relative;
      // height: 1112px;
      margin-right: 48px;
    }
  }
  &__block {
    background: $white;
    color: $primary;
    padding: 24px 16px 48px;
    margin: 0 16px 48px;
    position: relative;
    top: -28px;
    @include media-breakpoint-up(md) {
      position: absolute;
      top: 170px;
      right: -82px;
      max-width: 560px;
      padding: 48px 32px;
    }
    @include media-breakpoint-up(lg) {
      max-width: 670px;
      margin: 0 16px 72px;
      padding: 80px 70px;
      top: 206px;
      right: -82px;
    }
  }
  &__paragraph {
    font-family: $font-jp-normal;
    line-height: 32px;
    margin-bottom: 30px;
    font-size: 0.87rem;
    @include media-breakpoint-up(md) {
      font-size: 1rem;
      margin-bottom: 24px;
    }
    @include media-breakpoint-up(lg) {
      font-size: 1rem;
      margin-bottom: 30px;
    }
    &:last-child {
      margin-bottom: initial;
    }
  }
}
// CEOからのメッセージ
.p-message-ceo {
  background: $tertiary;
  color: $white;

  &__row {
    justify-content: center;
    @include media-breakpoint-up(md) {
      justify-content: start;
    }
  }
  // 見出し文章
  &__paragraph-header {
    font-family: $font-jp-normal;
    font-size: 1.5rem;
    @include media-breakpoint-up(md) {
      font-size: 1.8rem;
      margin-top: 80px;
    }
    @include media-breakpoint-up(lg) {
      font-size: 2.4rem;
      margin-top: 112px;
    }
  }
  // プロフィールのブロック
  &__profile {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 28px;
    @include media-breakpoint-up(md) {
      margin-bottom: 24px;
    }
    @include media-breakpoint-up(lg) {
      margin-bottom: 48px;
    }
  }
  // 役職名
  &__profile-post {
    margin-bottom: 4px;
    @include media-breakpoint-up(md) {
      margin-bottom: 8px;
    }
  }
  //名前
  &__profile-name {
    margin-bottom: 4px;
    font-family: $font-jp-bold;
    font-size: 1.5rem;
    position: relative;
    @include media-breakpoint-up(lg) {
      margin-bottom: 8px;
    }
    &:after {
      content: '';
      display: block;
      width: 47px;
      height: 1px;
      background: $white;
      position: absolute;
      bottom: 3px;
      left: 120px;
      z-index: 1;
      @include media-breakpoint-up(lg) {
        width: 108px;
      }
    }
  }
  // 英語表記の名前
  &__profile-name-en {
    margin-bottom: 0;
    font-family: $font-en-normal;
    font-size: 0.87rem;
    line-height: 1;
    opacity: 0.5;
    @include media-breakpoint-up(lg) {
      margin-bottom: 14px;
    }
  }
  // プロフィール画像
  &__profile-img {
    margin-left: 24px;
    margin-right: 10px;
    max-width: 166px;
    @include media-breakpoint-up(md) {
      margin-left: 28px;
      margin-right: 24px;
      max-width: 170px;
    }
    @include media-breakpoint-up(lg) {
      margin-left: 60px;
      margin-right: 30px;
      max-width: 240px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  // SNSへのリンク
  &__profile-sns {
    text-decoration: none;
    display: block;
    margin-bottom: 18px;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.5;
    }
    &:last-child {
      margin-bottom: initial;
    }
    .v-icon {
      font-size: 2rem;
    }
  }

  &__paragraph {
    font-family: $font-jp-normal;
    line-height: 2;
    font-size: 0.87rem;
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 72px;

      @include media-breakpoint-up(lg) {
        margin-bottom: 112px;
      }
    }
  }
} // p-message-ceo

.p-company-vmv {
  padding: 173px 0 90px 0;
  position: relative;
  z-index: 1;
  @include media-breakpoint-up(lg) {
    padding: 229px 0 200px 0;
  }
  &__bg {
    background-color: $light-gray-2;
    background: no-repeat url('../assets/images/company-bg-img.svg');
    background-position: bottom;
    background-size: cover;
    position: absolute;
    height: 800px;
    width: 100%;
    z-index: 2;
    top: -415px;
    @include media-breakpoint-up(md) {
      background-position: bottom;
      top: -450px;
    }
    @include media-breakpoint-up(lg) {
      background-position: bottom;
      top: -450px;
    }
  }
  &__container {
    position: relative;
    z-index: 3;
  }
  &__row {
    background: $white;
    box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
    padding: 42px 16px 46px 16px;
    @include media-breakpoint-up(lg) {
      padding: 140px 135px 160px 48px;
    }
  }
  // 見出し
  &__header {
    font-family: $font-en-normal;
    font-size: 5.5rem;
    color: $primary;
    line-height: 1;
    @include media-breakpoint-up(lg) {
      font-size: 8rem;
    }
  }
  // 見出し日本語
  &__header-ja {
    font-family: $font-jp-normal;
    font-size: 1.5rem;
    display: block;
    color: $primary;
    margin-top: 15px;
    @include media-breakpoint-up(lg) {
      font-size: 1.7rem;
    }
  }
  &__paragraph-header {
    color: $primary;
    font-family: $font-jp-bold;
    font-size: 1.1rem;
    @include media-breakpoint-up(lg) {
      font-size: 1.5rem;
    }
  }
  &__paragraph {
    color: $primary;
    font-family: $font-jp-normal;
    line-height: 2;
    font-size: 0.87rem;
    @include media-breakpoint-up(md) {
      font-size: 1rem;
      margin-bottom: 112px;
    }
  }
}
</style>
