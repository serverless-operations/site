<template>
  <Layout>
    <div class="v-content">
      <div class="v-content__wrap">

        <v-container>
          <p class="category-title">
            Blog
          </p>
        </v-container>

        <header class="post-header">
          <v-container>
            <v-row class="justify-center">
              <v-col cols="11" md="10">

                <h1 v-html="$page.wordPressBlog.title" class="post-title" />

                <div class="post-tag-container">
                  <time 
                    class="post-date"
                    :datetime="$page.wordPressBlog.date"
                  > 
                    {{$page.wordPressBlog.date}}
                    
                  </time>
                  <div
                    class="post-tags"
                    v-for="tags in $page.wordPressBlog.tags"
                    :key="tags.id"
                  >
                    <span>{{ tags.title }}</span>
                  </div>
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

                <div class="post-author-container">
                  <h5 class="post-author-title">Written by</h5>
                  <div class="post-author-text">
                    <p>
                      <span class="role" v-if="$page.wordPressBlog.author.acf.userRole">
                        {{ $page.wordPressBlog.author.acf.userRole }}
                      </span>
                      <span class="name-jp">
                        {{ $page.wordPressBlog.author.acf.userJpName }}
                      </span>
                      <span class="name-en">
                        {{ $page.wordPressBlog.author.name }}
                      </span>
                    </p>
                    <p class="author-desc">
                      {{ $page.wordPressBlog.author.description }}
                    </p>
                    <ul class="author-sns">
                      <li>
                        <a v-if="$page.wordPressBlog.author.acf.github"
                          :href="$page.wordPressBlog.author.acf.github"
                          target="_blank"
                          class="github">
                          <v-icon>mdi-github</v-icon>
                        </a>
                      </li>
                      <li>
                        <a v-if="$page.wordPressBlog.author.acf.facebook"
                          :href="$page.wordPressBlog.author.acf.facebook"
                          target="_blank"
                          class="facebook">
                          <v-icon>mdi-facebook</v-icon>
                        </a>
                      </li>
                      <li>
                        <a v-if="$page.wordPressBlog.author.acf.twitter"
                          :href="$page.wordPressBlog.author.acf.twitter"
                          class="twitter"
                          target="_blank">
                          <v-icon>mdi-twitter</v-icon>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

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
    author {
      name
      description
      avatars {
        avatar96
      }
      acf {
        userJpName
        userRole
        facebook
        twitter
        github
      }
    }
    
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
  position: relative;
}

.v-content__wrap {
  padding-top: 120px;
  background: url('../assets/images/privacy-policy-header-bg-img.svg') no-repeat;
  @include media-breakpoint-down(md) {
    padding-top: 60px;
    background: url('../assets/images/privacy-policy-header-bg-img.svg') no-repeat;
  }
}

// カテゴリータイトル
.category-title {
  font-size: 200px;
  color: $white;
  font-family: $font-en-normal;
  position: absolute;
  z-index: 0;
  line-height: 1;
  margin-bottom: 8px;
  padding: 0;
  background: linear-gradient(180deg, #02007C 0%, rgba(2, 0, 124, 0) 100%);
  background-clip: text; //テキストでくり抜く
  -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
  @include media-breakpoint-down(md) {
    font-size: 96px;
  }
}

// 投稿タイトル、タグ、日付
.post-header {
  padding-top: 120px;
  position: relative;
  @include media-breakpoint-down(md) {
    padding-top: 60px;
  }
  .post-title {
    font-family: $font-jp-bold;
    display: block;
    font-size: 48px;
    line-height: 64px;
    margin-bottom: 24px;
    text-align: justify;
    letter-spacing: -0.01em;
    @include media-breakpoint-down(md) {
      font-size: 24px;
      line-height: 32px;
    }
  }
  .post-tag-container {
    display: flex;
    .post-date {
      font-size: 12px;
      opacity: 0.5;
      padding: 4px 24px 4px 0px;
    }
    .post-tags {
      display: flex;
      span {
        display: block;
        padding: 4px 12px 4px 20px;
        background: $tertiary;
        margin-right: 8px;
        border-radius: 200px;
        font-size: 12px;
        position: relative;
        font-family: $font-en-normal, $font-jp-regular;
        &::before {
          content: '#';
          position: absolute;
          opacity: 0.5;
          left: 8px;
          top: 4px;
        }
      }
    }
  }
}

.post-article-container {
  position: relative;
  background: #fff;
  border-radius: 6px;
  padding: 72px 120px;
  margin-bottom: 240px;
  @include media-breakpoint-down(md) {
    padding: 36px 64px;
    margin-bottom: 120px;
  }
  @include media-breakpoint-down(sm) {
    padding: 36px 24px;
  }
}

.post-article {
  color: $text-black;
  padding-bottom: 96px;
  margin-bottom: 96px;
  border-bottom: 1px solid $mid-gray-3;
  @include wordpress_article_style;
  @include media-breakpoint-down(sm) {
    padding-bottom: 48px;
    margin-bottom: 48px;
  }
} // p-news-articles

.post-author-container {
  color: $text-black;
  background: $light-gray-2;
  padding: 32px 24px;
  border-radius: 4px;
  position: relative;
  .post-author-text {
    border-left: 1px solid $mid-gray-3;
    margin-left: 80px;
    padding-left: 32px;
    @include media-breakpoint-down(sm) {
      border-left: 0;
      margin-left: 0;
      padding-left: 0;
      border-top: 1px solid $mid-gray-3;
      margin-top: 8px;
      padding-top: 24px;
    }
  }
  .post-author-title {
    color: $mid-gray-3;
    font-size: 24px;
    font-family: $font-en-normal;
    transform: rotate(90deg);
    transform-origin: left top;
    display: block;
    position: absolute;
    left: 64px;
    top: 32px;
    @include media-breakpoint-down(sm) {
      position: relative;
      transform: none;
      transform-origin: initial;
      left: 0;
      top: 0;
      font-size: 16px;
    }
  }
  .role {
    color: $mid-gray-1;
    display: block;
    line-height: 3;
    font-size: 14px;
    font-family: $font-en-normal;
    letter-spacing: 2px;
  }
  .name-jp {
    color: $secondary;
    font-family: $font-jp-bold;
    display: block;
    line-height: 1;
    font-size: 24px;
    letter-spacing: 1px;
  }
  .name-en {
    color: $mid-gray-1;
    display: block;
    line-height: 2.6;
    font-size: 12px;
    font-family: $font-en-normal;
    letter-spacing: 2px;
  }
  .author-desc {
    font-size: 14px;
  }
  .author-sns {
    display: flex;
    padding: 0 0 8px 0;
    justify-content: flex-start;
    li {
      list-style: none;
      margin-right: 8px;
      a {
        display: block;
        text-decoration: none;
        transition: $soease;
        &.github i {
          color: #000;
        }
        &.facebook i {
          color:#1877F2;
        }
        &.twitter i {
          color: #1DA1F2;
        }
        :hover {
          margin-top: -2px;
          opacity: 0.8;
        }
      }
    }
  }
}

</style>