<template>
  <Layout>

    <div class="v-content__wrap">
  
      <div class="p-blog-header">
        <h1 class="p-blog-header__page-title">
          Blog
          <span class="p-blog-header__page-title-ja">開発ブログ</span>
        </h1>
      </div>

      <div class="container">
  
        <div class="p-blog-contents row">
          <div v-for="{ node } in $page.allWordPressBlog.edges" :key="node.id" class="pr-1 pr-lg-4 pl-1 pl-lg-4 pb-1 pb-lg-4 col-md-6">
            <BlogCard :post="node" />
          </div>
        </div>

        <Pager :info="$page.allWordPressBlog.pageInfo" />

      </div><!-- container -->

    </div><!-- v-content__wrap -->

  </Layout>
</template>


<page-query>
query ($page: Int) {
  allWordPressBlog (page: $page, perPage: 21) @paginate {
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
</page-query>




<script>
import { Pager } from 'gridsome'
import BlogCard from '~/components/BlogCard.vue'

export default {
  components: {
    Pager,
    BlogCard
  },
  metaInfo () {
    return {
      title: `Blog ${this.$page.allWordPressBlog.pageInfo.currentPage} / ${this.$page.allWordPressBlog.pageInfo.totalPages}`
    }
  }
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

</style>