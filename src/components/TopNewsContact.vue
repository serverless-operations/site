<template>
  <div class="v-content">
    <div class="v-content__wrap">

      <div class="container">

        <div class="row align-center justify-space-between">
          
          <div class="col-md-6 col-12">
            <h2 class="d-flex flex-column justify-center align-center align-md-start p-top-news--title">News<span>お知らせ</span></h2>
          </div>

          <div justify="end" class="d-none d-md-block p-top-news--more col col-5 align-self-end">
            <g-link to="/news-archives">More Details</g-link>
          </div>

        </div><!-- row -->

        <div class="p-news-contents row">
        
            <div v-for="{ node } in $page.allWordPressPost.edges" :key="node.id" class="pr-1 pr-lg-4 pl-1 pl-lg-4 pb-1 pb-lg-4 col-md-3 col-6">
              <Post :post="node" />
            </div>
          <!-- Pager :info="$page.allWordPressPost.pageInfo"/ -->

        </div><!-- p-news-contents -->

        <div class="row mb-md-12 align-center justify-end">
          <div class="d-block d-md-none p-top-news--more col col-5 align-self-end">
            <g-link to="/news/">More Details</g-link>
          </div>
        </div><!-- row -->

      </div><!-- container -->

      <div class="p-news-bg"></div>

      <!--div class="container mt-md-12">

        <div class="row mt-md-12 align-center justify-space-between">

          <div class="col-md-4 col-lg-5 col-12">
            <h2 class="d-flex flex-column justify-center align-center align-md-start p-top-contact--title">Contact<span>お問い合わせ</span></h2>
            <p class="p-top-contact--paragraph">AWS<small>（アマゾンウェブサービス）</small>などを利用したサーバーレスアプリケーションの設計・開発・保守運用等についてお困りの方は、こちらのフォームから気軽にお問い合わせください。2〜3営業日以内にメールで返信いたします。</p>
          </div>

          <div class="p-top-contact--form col-md-7 col-lg-6 col-12">
            <div class="p-top-contact--form-shadow">
              <v-form v-model="valid"
                      name="contact"
                      netlify>
                <input type="hidden"
                      name="form-name"
                      value="contact">
                <div class="row no-gutters" >
                  <v-col cols="12"
                        md="5"
                        lg="4">
                    <v-subheader>お名前<small>（漢字）</small>*</v-subheader>
                  </v-col>
                  <v-col cols="12"
                        md="7"
                        lg="8">
                    <v-text-field v-model="name"
                                  :rules="nameRules"
                                  name="name"
                                  single-line
                                  outlined
                                  solo
                                  flat
                                  dense
                                  required
                                  filled />
                  </v-col>

                  <v-col cols="12"
                        md="5"
                        lg="4">
                    <v-subheader>お名前<small>（ふりがな）</small>*</v-subheader>
                  </v-col>
                  <v-col cols="12"
                        md="7"
                        lg="8">
                    <v-text-field v-model="nameFurigana"
                                  :rules="nameFuriganaRules"
                                  name="name-furigana"
                                  single-line
                                  outlined
                                  solo
                                  flat
                                  dense
                                  required
                                  filled />
                  </v-col>

                  <v-col cols="12"
                        md="5"
                        lg="4">
                    <v-subheader>会社名</v-subheader>
                  </v-col>
                  <v-col cols="12"
                        md="7"
                        lg="8">
                    <v-text-field v-model="companyName"
                                  name="company-name"
                                  single-line
                                  outlined
                                  solo
                                  flat
                                  dense
                                  filled />
                  </v-col>

                  <v-col cols="12"
                        md="5"
                        lg="4">
                    <v-subheader>Eメール*</v-subheader>
                  </v-col>
                  <v-col cols="12"
                        md="7"
                        lg="8">
                    <v-text-field v-model="email"
                                  :rules="emailRules"
                                  name="email"
                                  single-line
                                  outlined
                                  solo
                                  flat
                                  dense
                                  required
                                  filled />
                  </v-col>

                  <v-col cols="12"
                        md="5"
                        lg="4">
                    <v-subheader>ご検討中のサービス*</v-subheader>
                  </v-col>
                  <v-col cols="12"
                        md="7"
                        lg="8">
                    <v-checkbox v-model="serviceSelect"
                                :input-value="serviceSelect"
                                name="select-service[]"
                                class="p-top-contact--check"
                                :rules="selectRules"
                                light
                                hide-details
                                dense
                                color="info"
                                value="サーバーレスコンサルティング">
                      <template v-slot:label>
                        <div class="info--text p-top-contact--check-label">サーバーレスコンサルティング</div>
                      </template>
                    </v-checkbox>
                    <v-checkbox v-model="serviceSelect"
                                :input-value="serviceSelect"
                                name="select-service[]"
                                class="p-top-contact--check"
                                :rules="selectRules"
                                light
                                hide-details
                                dense
                                color="info"
                                value="サーバーレスディベロップメント">
                      <template v-slot:label>
                        <div class="info--text p-top-contact--check-label">サーバーレスディベロップメント</div>
                      </template>
                    </v-checkbox>
                    <v-checkbox v-model="serviceSelect"
                                :input-value="serviceSelect"
                                name="select-service[]"
                                class="p-top-contact--check"
                                :rules="selectRules"
                                light
                                dense
                                color="info"
                                value="その他">
                      <template v-slot:label>
                        <div class="info--text p-top-contact--check-label">その他</div>
                      </template>
                    </v-checkbox>
                  </v-col>

                  <v-col cols="12"
                        md="5"
                        lg="4">
                    <v-subheader>ご相談<br class="d-none d-md-block"><span class="d-block d-md-none">・</span>お問い合わせ内容*</v-subheader>
                  </v-col>
                  <v-col cols="12"
                        md="7"
                        lg="8">
                    <v-textarea v-model="message"
                                name="message"
                                :rules="messageRules"
                                solo
                                outlined
                                flat
                                required
                                filled />
                  </v-col>

                </div>
                <v-row align="center"
                      justify="end">
                  <v-col cols="12"
                        md="7"
                        lg="8">
                    <p class="p-top-contact--note">
                      <g-link to="/privacy-policy">個人情報保護方針</g-link>をご覧いただき、内容に同意いただけましたら、下記の送信ボタンを押してください。
                    </p>
                  </v-col>
                </v-row>
                <v-row align="center"
                      justify="center"
                      justify-md="end">
                  <v-btn :disabled="!valid"
                        class="mr-4"
                        large
                        depressed
                        tile
                        light
                        color="info"
                        type="submit">上記の内容で送信する</v-btn>
                </v-row>
              </v-form>
            </div><!-- p-top-contact--form-shadow -->
          <!--/div>

        </div><!-- mt-md-12 -->

      <!--/div --><!-- container -->
      
    </div><!-- v-content__wrap -->
  </div><!-- v-content -->
</template>


<static-query>
query ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "YYYY.MM.DD")
        path
        excerpt
        featuredMedia {
          sourceUrl
          altText
          mediaDetails {
            width
          }
        }
        categories {
          id
          title
          path
        }
      }
    }
  }
}
</static-query>



<script>
import Post from '~/components/Post.vue'

export default {
   components: {
    Post
  },
  props: ['news'],
  data() {
    return {
      valid: true,
      name: '',
      nameFurigana: '',
      companyName: '',
      message: '',
      serviceSelect: [],
      nameRules: [v => !!v || 'お名前（漢字）は必須です。'],
      nameFuriganaRules: [v => !!v || 'お名前（ふりがな）は必須です。'],
      email: '',
      emailRules: [
        v => !!v || 'Eメールは必須です。',
        v => /.+@.+/.test(v) || 'Eメールの形式ではありません'
      ],
      messageRules: [v => !!v || 'ご相談・お問い合わせ内容は必須です。']
    }
  },
  computed: {
    selectRules() {
      return [this.serviceSelect.length > 0 || 'ご検討中のサービスは必須です。']
    }
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = new String(date.getFullYear())
      const mm = new String(date.getMonth() + 1).padStart(2, '0')
      const dd = new String(date.getDate()).padStart(2, '0')
      return `${yyyy}.${mm}.${dd}`
    }
  }
}
</script>

<style lang="scss" scoped>
.v-content {
  width: 100vw;
  background-image: url('../assets/images/top-news-contact-bk.svg');
  background-position: center 420px;
  background-size: 300%;
  background-color: $light-gray-2;
  position: relative;
  z-index: 1;
  @include media-breakpoint-up(md) {
    background-position: center 420px;
    background-size: 100%;
  }
  @include media-breakpoint-up(lg) {
    background-position: center 350px;
  }
  h2 {
    margin-top: 24px;
    font-size: 4rem;
    font-family: $font-en-normal;
    font-weight: normal;
    line-height: 1.25;
    @include media-breakpoint-up(md) {
      margin-top: 88px;
    }
    span {
      display: block;
      font-size: 1rem;
      margin-top: 8px;
      font-weight: normal;
      font-family: $font-jp-normal;
    }
  }
  .p-top-news {
    &--title {
      color: $primary;
    }
    &--more {
      text-align: right;
      z-index: 3;
      position: relative;
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

  .v-input__slot .v-label,
  .v-form label.v-label {
    color: $tertiary !important;
  }
  .v-form {
    background-color: $white;
    padding: 56px 32px;
    border-left: 1px solid $tertiary;
    position: relative;
    z-index: 2;
    box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
    &::before {
      background-color: $white;
    }
    @include media-breakpoint-up(md) {
      padding: 80px 32px;
    }
    @include media-breakpoint-up(lg) {
      padding: 80px 48px;
    }
  }
  .v-subheader {
    color: $tertiary;
    font-size: 1rem;
    font-family: $font-jp-normal;
    align-items: baseline;
    padding-left: 0;
    height: 100%;
    margin-bottom: 8px;
  }
  .v-btn {
    font-family: $font-jp-normal;
    clip-path: polygon(
      calc(100% - 8px) 0,
      0 0,
      0 calc(100% - 8px),
      8px 100%,
      100% 100%,
      100% 8px
    );
  }
  .theme--light.v-btn.v-btn--disabled:not(.v-btn--text):not(.v-btn--outlined) {
    background-color: $light-gray-1 !important;
  }
}

// 右下下がりの背景パターン
// .p-news-bg {
//   pointer-events: none;
//   background: url('~assets/images/pattern-bg-right.svg') no-repeat 50% 59px;
//   width: 100%;
//   background-size: cover;
//   position: absolute;
//   top: 5%;
//   height: 1000px;
//   @include media-breakpoint-up(sm) {
//     top: 21%;
//     height: 1000px;
//   }
//   @include media-breakpoint-up(md) {
//     top: 18%;
//     height: 800px;
//   }
//   @include media-breakpoint-up(lg) {
//     top: 12%;
//     height: 1300px;
//   }
// } // p-news-bg
</style>