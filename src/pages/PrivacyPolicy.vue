<template>
  <Layout>
    <div class="v-content__wrap">  

      <div class="page-header-container">

        <v-container class="page-header-text-container">
          <v-row>
            <v-col cols="12">
              <h1 class="page-header-title text-anim">
                <span class="text-anim">PRIVACY<br>POLICY</span> 
                <span class="page-header-title-jp text-anim">
                  プライバシーポリシー
                </span>
                <span class="page-title-anim-bg"></span>
              </h1>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- p-privacy-policy-header -->
      <div class="p-privacy-policy-contents">
        <div class="container">
          <div class="row justify-center">
            <div class="col-md-7 col-lg-6 col-11">
              <div class="p-privacy-policy-contents__block">
                <h2 class="p-privacy-policy-contents__contents-header">1.個人情報について</h2>
                <p class="p-privacy-policy-contents__contents-paragraph">株式会社Serverless Operationsは、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>
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
                  株式会社Serverless Operations<br>mail：info@serverless.co.jp
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  metaInfo() {
    return {
      title: "プライバシーポリシー",
      meta: [
        {
          name: `description`,
          content: "個人情報保護方針",
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `https://serverless.co.jp/privacy-policy`,
        },
      ],
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: `https://serverless.co.jp/privacy-policy`,
        },
      ],
    };
  },
  fetch({ store }) {
    store.commit('resetModal')
  },
  mounted() {
    this.PageTextAnimation()
  },
  methods: {
    PageTextAnimation() {
      gsap.fromTo('.page-title-anim-bg', {
        opacity: 1,
        scaleX: 0,
        transformOrigin: '0 0',
      }, {
        ease: 'Expo.easeInOut',
        transformOrigin: '1 0',
        scaleX: 1,
        duration: 1.6,
        opacity: 0,
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.4 // 0.8秒おきに
        }
      })
      gsap.fromTo('.text-anim', {
        opacity: 0,
        x: -32,
      }, {
        delay: 0.2,
        ease: 'Expo.easeInOut',
        transformOrigin: '1 0',
        x: 0,
        duration: 1.8,
        opacity: 1,
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.4 // 0.8秒おきに
        }
      })
      gsap.fromTo('.page-header-text-anim', {
        opacity: 0,
        y: 0,
      }, {
        delay: 1.4,
        ease: 'Expo.easeInOut',
        transformOrigin: '0 1',
        y: -16,
        duration: 1,
        opacity: 1,
        stagger: {
          from: 'start', //左側から
          axis: 'x',
          amount: 0.2 // 0.8秒おきに
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@include PageHeader;

.page-header-container {
background:
  url('../assets/images/bg/so-blue-texture.png'),
  url('../assets/images/company-main-pattern.svg'),
  linear-gradient(45deg, $secondary 11.76%, $tertiary 88.21%),
  url('../assets/images/bg/noise.png');
  .page-header-title {
    display: inline-block;
    margin: 64px 0;
    line-height: 0.9;
  }
}

// プライバシーポリシーのコンテンツ部分
.p-privacy-policy-contents {
  padding: 80px 0 160px 0;
  background-image: url('../assets/images/top-news-contact-bk.svg');
  background-position: center center;
  background-size: 100%;
  background-color: rgba($light-gray-2, 0.7);
  background-blend-mode: lighten;
  // 内容のブロック
  &__block {
    margin-bottom: 32px;
    @include media-breakpoint-up(lg) {
      margin-bottom: 48px;
    }
  }
  // 内容の見出し
  &__contents-header {
    color: $secondary;
    font-family: $font-jp-bold;
    padding-bottom: 16px;
    position: relative;
    @include media-breakpoint-up(lg) {
      font-size: 1.5rem;
    }
  }
  // 内容の文章
  &__contents-paragraph {
    font-family: $font-jp-regular;
    line-height: 2;
    color: $text-black;
  }
  &__contents-list {
    list-style: none;
    padding-left: 0;
    color: $text-black;
    font-family: $font-jp-regular;
  }
  &__contents-li {
    &::before {
      content: '・';
    }
  }
  // 内容の住所
  &__contents-address {
    font-family: $font-jp-regular;
    font-style: normal;
    color: $text-black;
  }
}
</style>
