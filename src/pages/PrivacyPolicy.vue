<template>
  <Layout>
    <div class="v-content__wrap">  

      <div class="p-privacy-policy-header">
        <h1 class="p-privacy-policy-header__page-title">
          Privacy Policy
          <span class="p-privacy-policy-header__page-title-ja">プライバシーポリシー</span>
        </h1>
      </div>

      <!-- p-privacy-policy-header -->
      <div class="p-privacy-policy-contents">
        <div class="container">
          <div class="row justify-center">
            <div class="col-md-10 col-lg-8 col-12">
              <div class="p-privacy-policy-contents__block">
                <h2 class="p-privacy-policy-contents__contents-header">1.個人情報について</h2>
                <p class="p-privacy-policy-contents__contents-paragraph">合同会社Serverless Operationsは、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>
              </div>
              <div class="p-privacy-policy-contents__block">
                <h2 class="p-privacy-policy-contents__contents-header">2.個人情報の定義</h2>
                <p class="p-privacy-policy-contents__contents-paragraph">「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。</p>
              </div>
              <div class="p-privacy-policy-contents__block">
                <h2 class="p-privacy-policy-contents__contents-header">3.個人情報の利用について</h2>
                <p class="p-privacy-policy-contents__contents-paragraph">お客さまからお預かりした個人情報は、当法人からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>
              </div>
              <div class="p-privacy-policy-contents__block">
                <h2 class="p-privacy-policy-contents__contents-header">4.個人情報の開示ついて</h2>
                <p class="p-privacy-policy-contents__contents-paragraph">当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
                <ul class="p-privacy-policy-contents__contents-list">
                  <li class="p-privacy-policy-contents__contents-li">お客さまの同意がある場合</li>
                  <li class="p-privacy-policy-contents__contents-li">お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
                  <li class="p-privacy-policy-contents__contents-li">法令に基づき開示することが必要である場合</li>
                </ul>
              </div>
              <div class="p-privacy-policy-contents__block">
                <h2 class="p-privacy-policy-contents__contents-header">5.個人情報の安全対策</h2>
                <p class="p-privacy-policy-contents__contents-paragraph">当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p>
              </div>
              <div class="p-privacy-policy-contents__block">
                <h2 class="p-privacy-policy-contents__contents-header">6.ご本人の照会</h2>
                <p class="p-privacy-policy-contents__contents-paragraph">お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</p>
              </div>
              <div class="p-privacy-policy-contents__block">
                <h2 class="p-privacy-policy-contents__contents-header">7.法令、規範の遵守と見直し</h2>
                <p class="p-privacy-policy-contents__contents-paragraph">当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>
              </div>
              <div class="p-privacy-policy-contents__block">
                <h2 class="p-privacy-policy-contents__contents-header">8.お問い合わせ</h2>
                <p class="p-privacy-policy-contents__contents-paragraph mb-7">当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。</p>
                <address class="p-privacy-policy-contents__contents-address">
                  合同会社Serverless Operations<br>mail：info@serverless.co.jp
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script>
// import Meta from '~/assets/mixins/meta'
export default {
  // mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'プライバシーポリシー',
        // description:
        // 'サーバーレスアプリケーションの設計・開発・保守運用等についてお困りの方は、こちらのフォームから気軽にお問い合わせください。2〜3営業日以内にメールで返信いたします。',
        type: 'article',
        url: 'https://serverless.co.jp/privacy-policy/'
        // image: 'https://example.com/img/ogp/test.jpg'
      }
    }
  },
  fetch({ store }) {
    store.commit('resetModal')
  }
}
</script>

<style lang="scss" scoped>
.p-privacy-policy-header {
  background: url('../assets/images/privacy-policy-header-bg-img.svg') no-repeat,
    linear-gradient(206.56deg, $tertiary -0.06%, $secondary 100.25%);
  background-size: cover;
  font-family: $font-en-normal;
  height: auto;
  position: relative;
  overflow: hidden;
  @include media-breakpoint-up(lg) {
    height: auto;
    background: url('../assets/images/privacy-policy-header-bg-img.svg') no-repeat,
      linear-gradient(206.56deg, $tertiary -0.06%, $secondary 100.25%);
    background-size: cover;
  }
  &:before {
    content: '';
    display: block;
    height: 78px;
    width: 78px;
    background: $white;
    transform: rotate(45deg);
    position: absolute;
    bottom: -39px;
    left: -39px;
    @include media-breakpoint-up(md) {
      height: 132px;
      width: 132px;
      bottom: -66px;
      left: -66px;
    }
  }
  // ページタイトル
  &__page-title {
    font-size: 2rem;
    color: $white;
    font-family: $font-en-normal;
    padding: 56px 16px 56px 16px;
    @include media-breakpoint-up(md) {
      font-size: 4rem;
      padding: 132px 100px 130px 310px;
    }
    @include media-breakpoint-up(lg) {
      font-size: 6.25rem;
      padding: 132px 80px 130px 310px;
    }
  }
  &__page-title-ja {
    display: block;
    font-size: 1rem;
    line-height: 42px;
    margin-bottom: 0;
    @include media-breakpoint-up(md) {
      font-size: 1.5rem;
    }
  }
}

// プライバシーポリシーのコンテンツ部分
.p-privacy-policy-contents {
  background: $white;
  color: $black;
  font-family: $font-jp-normal;
  padding: 48px 0 80px;
  background: url('../assets/images/privacy-policy-bg-img.svg') no-repeat center
      top 70%,
    $white;
  background-size: cover 80%;
  @include media-breakpoint-up(lg) {
    padding: 78px 0 185px;
    background-size: cover 100%;
  }
  // 内容のブロック
  &__block {
    margin-bottom: 32px;
    @include media-breakpoint-up(lg) {
      margin-bottom: 48px;
    }
  }
  // 内容の見出し
  &__contents-header {
    color: $primary;
    font-family: $font-jp-bold;
    padding-bottom: 4px;
    padding-left: 48px;
    position: relative;
    @include media-breakpoint-up(lg) {
      font-size: 1.5rem;
      padding-left: 93px;
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
      @include media-breakpoint-up(lg) {
        width: 80px;
        top: 20px;
        left: 0;
      }
    }
  }
  // 内容の文章
  &__contents-paragraph {
    font-family: $font-jp-normal;
    line-height: 2;
    color: $black;
  }
  &__contents-list {
    list-style: none;
    padding-left: 0;
  }
  &__contents-li {
    &::before {
      content: '・';
    }
  }
  // 内容の住所
  &__contents-address {
    font-family: $font-jp-normal;
    font-style: normal;
  }
}
</style>
