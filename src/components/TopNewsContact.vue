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
        
            <div v-for="{ node } in $static.allWordPressPost.edges" :key="node.id" class="pr-1 pr-lg-4 pl-1 pl-lg-4 pb-1 pb-lg-4 col-md-3 col-6">
              <Post :post="node" v-if="node.categories.find(c => c.slug === 'news')" />
            </div>
          <!-- Pager :info="$page.allWordPressPost.pageInfo"/ -->

        </div><!-- p-news-contents -->

        <div class="row mb-md-12 align-center justify-end">
          <div class="d-block d-md-none p-top-news--more col col-5 align-self-end">
            <g-link to="/news/">More Details</g-link>
          </div>
        </div><!-- row -->

      </div><!-- container -->

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
        path (to: "news")
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
          slug
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
    Post,
  },
  props: ['news'],
}
</script>

<style lang="scss" scoped>
.v-content {
  width: 100vw;
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
      font-family: $font-jp-regular;
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

  .p-top-contact--container {
    @include media-breakpoint-up(md) {
      width: 110% !important;
    }
    @include media-breakpoint-up(lg) {
      width: 100% !important;
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
    font-family: $font-jp-regular;
    align-items: baseline;
    padding-left: 0;
    height: 100%;
    margin-bottom: 8px;
  }
  .v-btn {
    font-family: $font-jp-regular;
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
  padding-top: 60px;
  @include media-breakpoint-up(md) {
    padding-top: 120px;
  }
  h2 {
    color: $primary;
    margin-bottom: 48px;
  }
  p {
    color: $primary;
    font-size: 0.9rem;
    @include media-breakpoint-up(md) {
      font-size: 1rem;
      line-height: 2;
    }
  }
}

</style>