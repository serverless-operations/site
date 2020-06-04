<template>
  <div class="v-content">
    <div class="v-content__wrap">

      <div class="container">

        <div class="row align-center justify-space-between">
          
          <div class="col-md-6 col-12">
            <h2 class="d-flex flex-column justify-center align-center align-md-start p-top-news--title">Blog<span>開発ブログ</span></h2>
          </div>

          <div justify="end" class="d-none d-md-block p-top-news--more col col-5 align-self-end">
            <g-link to="/blog-archives">More Details</g-link>
          </div>

        </div><!-- row -->
      
        <div class="p-blog-contents row">
          <div v-for="{ node } in $static.blog.edges" :key="node.id" class="pr-1 pr-lg-4 pl-1 pl-lg-4 pb-1 pb-lg-4 col-md-3 col-6">
            <BlogCard :post="node" />
          </div>
        </div>
        
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
query {
  blog: allWordPressBlog {
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
        tags {
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
import BlogCard from '~/components/BlogCard.vue'

export default {
  components: {
    BlogCard
  },
  // props: ['blog']
}

</script>

<style lang="scss" scoped>
.p-blog-header {
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
    padding: 56px 16px 48px 64px;
    @include media-breakpoint-up(md) {
      font-size: 4rem;
      padding: 96px 100px 88px 150px;
    }
    @include media-breakpoint-up(lg) {
      font-size: 5rem;
      padding: 128px 80px 132px 310px;
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
} // p-news-header

.p-blog-contents {
  padding: 180px 0;
}

.serverless-bg {
  display: block;
  background-color: #fff;
  width: 100vw;
  background-image: url(/assets/img/top-service-clients-bk.svg);
  background-size: contain;
  background-position: bottom 32px center;
  height: 800px;
  position: absolute;
  bottom: 0;
  z-index: 0;
  opacity: 0.5;
}


</style>