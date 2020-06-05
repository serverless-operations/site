<template>
  <Layout >
    <div class="column justify-center align-center">

      <div class="p-mainvisual-content">
        <v-container>
          <h1>
            <img class="p-mainvisual__logomark"
                src="../assets/images/top-main-logo.svg"
                alt="Serverless Operations サーバーレスオペレーションズ ロゴマーク">
          </h1>
          <div class="l-mainvisual-copytext">
            <h2 class="p-mainvisual__japanese-sloagan">
              サーバーレスで<br>
              クラウドの価値を<br>
              最大限に
            </h2>
            <p>
              <img class="p-mainvisual__english-sloagan"
                  src="../assets/images/top-main-copy.svg"
                  alt="Maximize the cloud value with serverless">
            </p>
          </div>
          <img class="p-mainvisual__brandsquare"
              src="../assets/images/top-main-square.svg"
              alt="Serverless Operations スクエアパターン">
          <div id="scroll-line-animation"
              class="l-scroll-animation">
            <span class="p-scroll-text">Scroll</span>
            <span class="p-scroll-line"></span>
          </div>
        </v-container>
      </div>

      <top-concept />

      <top-services-clients />

      <top-works />

      <top-blog />

      <top-news-contact />

    </div>

  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        date (format: "YYYY.MM.DD")
        featuredMedia {
          sourceUrl
          altText
          mediaDetails {
            width
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import TopConcept from '~/components/TopConcept.vue'
import TopBlog from '~/components/TopBlog.vue'
import BlogCard from '~/components/BlogCard.vue'
import TopWorks from '~/components/TopWorks.vue'
import WorksCard from '~/components/WorksCard.vue'
import TopServicesClients from '~/components/TopServicesClients.vue'
import TopNewsContact from '~/components/TopNewsContact.vue'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post,
    TopConcept,
    TopBlog,
    BlogCard,
    TopWorks,
    WorksCard,
    TopServicesClients,
    TopNewsContact
  },
  metaInfo: {
    title: 'Serverless Operations'
  }
}
</script>

<style lang="scss" scoped>
.p-mainvisual-content {
  width: 100vw;
  height: 100vh;
  background: url('../assets/images/top-main-pattern-top.svg'),
    url('../assets/images/top-main-pattern-bottom.svg'),
    linear-gradient(45deg, $secondary 11.76%, $tertiary 88.21%);
  background-position: top right, bottom left, center;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: contain, contain, auto;
  overflow: hidden;
  @include media-breakpoint-up(md) {
    //height: 61.8vw;
  }
  // スマホ時にスローガン画像がmain部分からはみ出ないように高さを指定
  @include media-breakpoint-down(sm) {
    min-height: 700px;
  }

  .container {
    position: relative;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    padding: 0;
  }

  // ブランドスローガンレイアウト
  .l-mainvisual-copytext {
    position: absolute;
    z-index: 1;

    @include media-breakpoint-up(md) {
      bottom: 7%;
      left: 7%;
      width: 774px;
    }

    @include media-breakpoint-down(sm) {
      top: 30%;
      left: 7%;
    }

    @include media-breakpoint-down(xs) {
      top: 15%;
      left: 7%;
    }

    // サーバーレスでクラウドの価値を最大限に
    .p-mainvisual__japanese-sloagan {
      font-family: $font-jp-normal;
      letter-spacing: 0.17em;

      @include media-breakpoint-down(sm) {
        font-size: 2.5rem;
        line-height: 1.6;
        margin-bottom: 0;
      }

      @include media-breakpoint-down(xs) {
        font-size: 1.875rem;
      }

      @include media-breakpoint-up(md) {
        font-size: 3rem;
        line-height: 1.6;
        margin-bottom: 48px;
      }
    }
    // Maximize the cloud value with serverless
    .p-mainvisual__english-sloagan {
      transform: rotate(90deg);
      transform-origin: bottom left;

      @include media-breakpoint-down(sm) {
        height: 96px;
        position: absolute;
        bottom: -24px;
      }

      @include media-breakpoint-down(xs) {
        height: 80px;
      }

      @include media-breakpoint-up(md) {
        transform: initial;
        width: 100%;
        height: auto;
      }
    }
  } // l-mainvisual-copytext

  // Serverless Operations Logomark
  .p-mainvisual__logomark {
    position: absolute;
    width: 70vw;
    right: 15vw;
    top: 116px;
    z-index: 0;
    @include media-breakpoint-up(sm) {
      top: 156px;
      width: 60vw;
      right: 20vw;
    }
    @include media-breakpoint-up(md) {
      right: 112px;
      width: 42vw;
    }
  }

  // Serverless Operations Brandsquare
  .p-mainvisual__brandsquare {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 15%;
    transform: rotate(90deg);
    transform-origin: left left;
    @include media-breakpoint-up(md) {
      transform: initial;
      transform-origin: top left;
      width: 100vw;
      left: 0;
      top: 0;
    }
  }

  // Scroll Animation
  .l-scroll-animation {
    position: absolute;
    right: 1%;
    bottom: 7%;
    margin: 0 auto;
    height: 140px;
    width: 26px;

    .p-scroll-text {
      font-family: $font-en-light;
      display: block;
      transform: rotate(90deg);
      transform-origin: top right;
      position: absolute;
      top: 40px;
      right: 0;
      z-index: 1;
    }

    .p-scroll-line {
      width: 1px;
      height: 80px;
      display: block;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0) 50%
      );
      background-position: 0 -80px;
      background-size: 100% 200%;
      animation: scrolldown 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
      position: absolute;
      bottom: 0;
      right: 12px;
      z-index: 0;
    }

    @keyframes scrolldown {
      0% {
        background-position: 0 -80px;
      }
      75% {
        background-position: 0 0;
      }
      100% {
        background-position: 0 80px;
        opacity: 0.2;
      }
    }
  }
} // p-mainvisual-content
</style>