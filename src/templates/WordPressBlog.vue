<template>
  <Layout>
    <div class="v-content">
      <div class="v-content__wrap">  
        <header class="p-news-header">
          <v-container>
            <v-row>
              <v-col>
                <h1 class="p-news-header__page-title">
                  Blog
                  <span class="p-news-header__page-title-ja">開発ブログ</span>
                </h1>
              </v-col>
            </v-row>
          </v-container>
        </header>
        <!-- p-news-header -->

        <article class="p-news-contents">
          <v-container class="l-news-contents-container">
            <v-row class="justify-center">

              <v-col cols="11" md="10">
                <section class="p-news-contents__article">
                  
                  <span v-for="category in $page.wordPressBlog.categories" :key="category.id" class="p-news-contents__category">
                    {{ category.title }}
                  </span>
                  
                  <time class="post-created-at p-news-contents__date">
                    <div class="p-news-contents__date" :datetime="$page.wordPressBlog.date">{{$page.wordPressBlog.date}}</div>
                  </time>

                  <h1 v-html="$page.wordPressBlog.title" class="p-news-contents__title" />
                </section>
              </v-col>

              <v-col cols="11" md="8">
                <!-- 記事の中身 -->
                <div v-html="$page.wordPressBlog.content" class="p-news-articles" />
              </v-col>
              <v-col cols="11" md="8">
                <!-- シェアボタン -->
                <share-buttons :title="$page.wordPressBlog.title" />
              </v-col>
            </v-row>
          </v-container>
          <!-- l-news-contents-container -->

          <div class="p-news-bg"></div>
        </article>
        <!-- p-news-contents -->
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  wordPressBlog(id: $id) {
    title
    content
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
  metadata {
    siteName
    siteDescription
    siteUrl
    siteOgImage
  }
}
</page-query>


<script>

import Prism from 'prismjs'
import ShareButtons from '~/components/ShareButtons'

import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-python'

export default {
  components: {
    ShareButtons
  },
  metaInfo () {
    return {
      title: this.$page.wordPressBlog.title,
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: this.$page.metadata.siteUrl + this.$page.wordPressBlog.path,
        },
      ],
      meta: [
        { key: `og:type`, property: `og:type`, content: `article` },
        {
          key: `og:url`,
          property: `og:url`,
          content: this.$page.metadata.siteUrl + this.$page.wordPressBlog.path,
        },
        {
          key: `og:image`,
          property: `og:image`,
          content: this.$page.metadata.siteOgImage,
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `${this.$page.wordPressBlog.title} | ${this.$page.metadata.siteName}`,
        },
        { name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image',
          content: this.$page.metadata.siteOgImage,
        }
      ]
    }
  },
  mounted() {
    Prism.highlightAll()
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

  // お知らせヘッダー左下の三角形
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
  } // &:before

  // ページタイトル
  &__page-title {
    font-size: 2rem;
    color: $white;
    font-family: $font-en-normal;
    line-height: 1;
    margin-bottom: 8px;
    padding: 32px 0 72px 0;
    @include media-breakpoint-up(sm) {
      font-size: 3.5rem;
      padding: 56px 0 88px 0;
      margin-bottom: 18px;
    }
    @include media-breakpoint-up(md) {
      font-size: 4rem;
      margin-bottom: 16px;
      padding: 72px 0 188px 0;
    }
    @include media-breakpoint-up(lg) {
      font-size: 6.25rem;
      padding: 72px 0 188px 0;
    }
  } // &__page-title

  // ページタイトル(日本語)
  &__page-title-ja {
    font-family: $font-jp-normal;
    display: block;
    font-size: 1rem;
    line-height: 42px;
    margin-bottom: 0;
    @include media-breakpoint-up(md) {
      font-size: 1.5rem;
    }
  }
} // p-news-header

// 記事部分のcontainer
.l-news-contents-container {
  position: relative;
  top: -104px;
  z-index: 1;
  background: $white;
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
  padding-top: 0;
  @include media-breakpoint-up(sm) {
    top: -132px;
  }
  @include media-breakpoint-up(md) {
    top: -168px;
  }
} // l-news-contents-container

.p-news-contents {
  position: relative;
  background: $white;
  color: $black;
  font-family: $font-jp-normal;
  padding-bottom: 0;
  @include media-breakpoint-up(lg) {
    padding-bottom: 352px;
  }

  // 記事部分
  &__article {
    margin-top: 24px;
    @include media-breakpoint-up(lg) {
      margin-top: 66px;
    }
  }

  // 記事カテゴリー
  &__category {
    display: inline-block;
    font-family: $font-en-normal;
    font-size: 0.875rem;
    color: $white;
    background: $primary;
    border-radius: 3px;
    padding: 5px 16px;
    line-height: 1;
    margin-right: 16px;
    @include media-breakpoint-up(md) {
      padding: 10px 34px;
      font-size: 0.875rem;
    }
  }

  // 日付
  &__date {
    display: inline-block;
    font-family: $font-en-normal;
    color: $primary;
    font-size: 0.875rem;
  }

  // 記事タイトル
  &__title {
    color: $primary;
    font-size: 1.5rem;
    font-family: $font-jp-bold;
    line-height: 30px;
    margin: 12px 0 18px;
    @include media-breakpoint-up(md) {
      margin: 24px 0 56px;
      font-size: 2rem;
      line-height: 52px;
    }
    &:after {
      content: none;
    }
  }

  .container {
    // アイキャッチ画像
    img {
      object-fit: cover;
      width: 100%;
      height: calc(98vw / 8 * 5);
      @include media-breakpoint-up(md) {
        height: 580px;
      }
      @include media-breakpoint-up(lg) {
        height: 750px;
      }
      @include media-breakpoint-up(xl) {
        height: 770px;
      }
    } // img
  } // .container
}

.p-news-bg {
  pointer-events: none;
  background: url('../assets/images/pattern-bg-right.svg') no-repeat 50% 59px;
  width: 100%;
  background-size: cover;
  position: absolute;
  height: 150px;
  bottom: 0%;
  height: 420px;
  @include media-breakpoint-up(md) {
    height: 800px;
  }
  @include media-breakpoint-up(lg) {
    height: 1300px;
  }
} // p-news-bg


.p-news-articles {
  @include wordpress_article_style;
} // p-news-contents
</style>