<template>
  <Layout>
    <div class="v-content">
      <div class="v-content__wrap">

        <header class="post-header">
          <v-container>
            <v-row class="justify-center">
              <v-col cols="12" md="10">

                <h1 v-html="$page.wordPressBlog.title" class="post-title" />

                <p class="category-title">
                  Blog
                </p>

                <time class="post-date">
                  <div class="p-news-contents__date" :datetime="$page.wordPressBlog.date">
                    {{$page.wordPressBlog.date}}
                  </div>
                </time>

                <div class="post-tags" v-for="tags in $page.wordPressBlog.tags" :key="tags.id" >
                  <span>{{ tags.title }}</span>
                </div>

              </v-col>
            </v-row>
          </v-container>
        </header>


        <article class="post-container">

          <v-container>
            <v-row class="justify-center">
              <v-col cols="11" md="10" class="post-article-container">

                <div v-html="$page.wordPressBlog.content" class="post-article" />

                <share-buttons :title="$page.wordPressBlog.title" />

              </v-col>
            </v-row>
          </v-container>

          <div class="p-news-bg"></div>

        </article>


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
          content: this.$page.wordPressBlog.featuredMedia.sourceUrl,
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
          content: this.$page.wordPressBlog.featuredMedia.sourceUrl,
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
.v-content {
  background: linear-gradient(272.99deg, #2C48FF -0.06%, #02007C 100.25%);
}

.post-header {
  background: url('../assets/images/privacy-policy-header-bg-img.svg') no-repeat;
  background-size: cover;
  font-family: $font-en-normal;
  height: auto;
  position: relative;
  overflow: hidden;
  @include media-breakpoint-up(lg) {
    height: auto;
    background: url('../assets/images/privacy-policy-header-bg-img.svg') no-repeat;
    background-size: cover;
  }

  // カテゴリータイトル
  .category-title {
    font-size: 200px;
    color: $white;
    font-family: $font-en-normal;
    line-height: 1;
    margin-bottom: 8px;
    padding: 32px 0 72px 0;
    background: linear-gradient(180deg, #02007C 0%, rgba(2, 0, 124, 0) 100%);
    background-clip: text; //テキストでくり抜く
    -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    
  }

  // ページタイトル
  .post-title {
    font-family: $font-jp-regular;
    display: block;
    font-size: 1rem;
    line-height: 42px;
    margin-bottom: 0;
    @include media-breakpoint-up(md) {
      font-size: 1.5rem;
    }
  }
}

.post-container {
  
}

.post-article-container {
  background: #fff;
  border-radius: 6px;
  padding: 72px 120px;
  margin-bottom: 72px;
  @include media-breakpoint-down(md) {
    padding: 36px 64px;
  }
  @include media-breakpoint-down(sm) {
    padding: 36px 32px;
  }
}

.post-article {
  color: $text-black;
  @include wordpress_article_style;
} // p-news-articles

</style>