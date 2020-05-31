<template>
  <Layout>

    <div class="v-content__wrap">
  
      <div class="p-news-header">
        <h1 class="p-news-header__page-title">
          News
          <span class="p-news-header__page-title-ja">お知らせ</span>
        </h1>
      </div>

      <div class="container">
  
        <div class="p-news-contents row">
          <div v-for="{ node } in $page.allWordPressPost.edges" :key="node.id" class="pr-1 pr-lg-4 pl-1 pl-lg-4 pb-1 pb-lg-4 col-md-3 col-6">
            <PostNewsArchives :post="node" />
          </div>
        </div>

        <Pager :info="$page.allWordPressPost.pageInfo" />

      </div><!-- container -->

    </div><!-- v-content__wrap -->

  </Layout>
</template>


<page-query>
query ($page: Int) {
  allWordPressPost (page: $page, perPage: 21) @paginate {
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
</page-query>




<script>
import { Pager } from 'gridsome'
import PostNewsArchives from '~/components/PostNewsArchives.vue'

export default {
  components: {
    Pager,
    PostNewsArchives
  },
  metaInfo () {
    return {
      title: `News ${this.$page.allWordPressPost.pageInfo.currentPage} / ${this.$page.allWordPressPost.pageInfo.totalPages}`
    }
  }
}
</script>

<style lang="scss" scoped>
.p-news-header {
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

// お知らせの記事一覧部分
.p-news-contents {
  background: $white;
  color: $black;
  font-family: $font-jp-normal;
  padding: 48px 0 80px;
  @include media-breakpoint-up(lg) {
    padding: 78px 0 185px;
  }
  &__image-cover {
    &:after {
      position: absolute;
      content: '';
      display: block;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scaleX(0);
      transform-origin: left;
      will-change: transform;
      transition: all 0.4s cubic-bezier(0.76, 0, 0.3, 1);
      background-color: rgba($primary, 0.4);
    }
  }
  // アイキャッチ部分
  &__image {
    position: relative;
    overflow: hidden;
    background: $primary;

    // アイキャッチ、左下と右上の装飾
    &::before,
    &::after {
      z-index: 2;
      content: '';
      display: block;
      width: 33.6%;
      height: 33.6%;
      background-color: $white;
      transform: rotate(-45deg);
      position: absolute;
    }
    &::before {
      top: -17.8%;
      right: -17.8%;
    }
    &::after {
      bottom: -17.8%;
      left: -17.8%;
    }

    // アイキャッチ画像
    img {
      object-fit: cover;
      width: 100%;
      height: calc((98vw / 2) - 24px);
      transition: all 0.3s cubic-bezier(0.76, 0, 0.3, 1);
      // transform: scale(1);
      // will-change: opacity;
      // opacity: 1;
      display: block;
      @include media-breakpoint-up(md) {
        height: 208px;
      }
      @include media-breakpoint-up(lg) {
        height: 270px;
      }
      @include media-breakpoint-up(xl) {
        height: 270px;
      }
    } // img
  } // &__image

  // お知らせのカード
  &__card {
    position: relative;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    &:hover {
      // アイキャッチにprimary colorがかかる
      .p-news-contents__image-cover::after {
        transform: scaleX(1);
        transform-origin: right center;
      }
      // タイトルの色がprimaryに
      .p-news-contents__title {
        color: $primary;
      }
    }
  } // &__card

  // 日付とタイトル部分
  &__title-block {
    min-height: 100px;
    @include media-breakpoint-up(sm) {
      min-height: 112px;
    }
    @include media-breakpoint-up(md) {
      min-height: 148px;
    }
  } // &__title-block

  // 記事日付
  &__date {
    padding: 24px 16px 4px 16px;
    line-height: 1;
    font-size: 0.75rem;
    color: $mid-gray-2;
    @include media-breakpoint-up(sm) {
      padding: 24px 20px 8px 20px;
      font-size: 0.875rem;
    }
    @include media-breakpoint-up(md) {
      padding: 42px 22px 5px;
      font-size: 0.875rem;
    }
  } // &__date

  // 記事タイトル
  &__title {
    font-size: 0.875rem;
    padding: 4px 16px 24px 16px;
    line-height: 1.5;
    text-align: justify;
    color: $black;
    @include media-breakpoint-up(sm) {
      font-size: 1rem;
    }
    @include media-breakpoint-up(md) {
      padding: 5px 22px 24px;
    }
  } // &__title

  .v-card--link:focus:before {
    opacity: 0;
  }
} // p-news-contents

// カードのhoverアニメーション
.p-card-border {
  position: relative;
  height: 100%;

  // 線の設定
  &::before {
    z-index: 1;
    background-color: $primary;
    content: '';
    display: block;
    position: absolute;
    transition: transform 0.55s cubic-bezier(0.76, 0, 0.3, 1);
    transform: scaleX(0);
    transform-origin: right center;
    bottom: 0px;
    height: 1px;
    left: 0;
    width: 100%;
  }

  // ホバー時に右から左へ線が広がる
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left center;
    transition: transform 0.55s cubic-bezier(0.76, 0, 0.3, 1);
  }
} // .p-card-border
</style>