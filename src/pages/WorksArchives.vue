<template>
  <Layout>

    <div class="v-content__wrap">
  
      <div class="p-blog-header">
        <h1 class="p-blog-header__page-title">
          Works
          <span class="p-blog-header__page-title-ja">導入事例</span>
        </h1>
      </div>

      <div class="column justify-center align-center container">
        <div v-for="{ node } in $page.allWordPressWorks.edges" :key="node.id" class="justify-center align-center container column">
          <WorksArchivesCard :post="node" />
        </div>
      </div><!-- container -->

    </div><!-- v-content__wrap -->

  </Layout>
</template>


<page-query>
query ($page: Int) {
  allWordPressWorks (page: $page, perPage: 21) @paginate {
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
        acf {
          companyProfile,
          companyLogo {
            sourceUrl,
            altText
          }
        }
      }
    }
  }
}
</page-query>




<script>
import { Pager } from 'gridsome'
import WorksArchivesCard from '~/components/WorksArchivesCard.vue'

export default {
  components: {
    Pager,
    WorksArchivesCard
  },
  metaInfo () {
    return {
      title: `Works ${this.$page.allWordPressWorks.pageInfo.currentPage} / ${this.$page.allWordPressWorks.pageInfo.totalPages}`
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

.p-works-contents {
  padding: 64px 0;
  @include media-breakpoint-up(md) {
    padding: 180px 0;
  }
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