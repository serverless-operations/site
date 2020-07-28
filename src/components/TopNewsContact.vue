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
       
      <div class="container top-contact-form-container">
        <div class="align-center justify-center">
          <v-col cols="12" md="10" lg="8">
            <h2 class="d-flex flex-column justify-center p-top-contact--title">
            Contact<span>お問い合わせ</span>
            </h2>
            <p class="p-top-contact--paragraph">
              AWS<small>（アマゾンウェブサービス）</small>などを利用したサーバーレスアプリケーションの設計・開発・保守運用等について<br>お困りの方は、こちらのフォームから気軽にお問い合わせください。2〜3営業日以内にメールで返信いたします。
            </p>
          </v-col>
        </div>
      </div>

      <contact-form />

    </div><!-- v-content__wrap -->
  </div><!-- v-content -->
</template>


<static-query>
query ($page: Int) {
  allWordPressPost (page: $page, perPage: 4) @paginate {
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
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    Post,
    ContactForm
  },
  props: ['news'],
  
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

// お問い合わせセクション
.top-contact-form-container {
  padding: 60px 0;
  @include media-breakpoint-up(md) {
    padding: 120px 0;
  }
  h2 {
    color: $primary;
    margin-bottom: 48px;
  }
  p {
    color: $primary;
    font-size: 0.9rem;
    @include media-breakpoint-up(md) {
      padding: 120px 0;
      font-size: 1rem;
    }
  }
}

</style>