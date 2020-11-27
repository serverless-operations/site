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

                <PostCTA />

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

        <v-container>
          <v-row class="justify-center">
            <g-link to="/blog-archives" class="post-archives-link">
              <span class="post-archives-link-text">BACK TO LIST</span>
              <span>
                <img src="@/assets/images/icon/icon-back-to-list.svg" alt="BACK TO LIST アイコン">
              </span>
            </g-link>
          </v-row>
        </v-container>

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
import PostCTA from '~/components/PostCTA'

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
    ShareButtons,
    PostCTA
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
  @include PostDetails;
</style>