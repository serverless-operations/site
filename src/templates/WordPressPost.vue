<template>
  <Layout>
    <div class="v-content">
      <div class="v-content__wrap">

        <v-container>
          <p class="category-title">
            News
          </p>
        </v-container>

        <header class="post-header">
          <v-container>
            <v-row class="justify-center">
              <v-col cols="11" md="10">

                <h1 v-html="$page.wordPressPost.title" class="post-title" />

                <div class="post-tag-container">
                  <time 
                    class="post-date"
                    :datetime="$page.wordPressPost.date"
                  > 
                    {{$page.wordPressPost.date}}
                    
                  </time>
                  <div
                    class="post-tags"
                    v-for="tags in $page.wordPressPost.tags"
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
                <img
                  v-if="$page.wordPressPost.featuredMedia"
                  :src="$page.wordPressPost.featuredMedia.sourceUrl"
                  :width="$page.wordPressPost.featuredMedia.mediaDetails.width"
                  :alt="$page.wordPressPost.featuredMedia.altText"
                  class="post-article-main-img"
                />
                <div v-html="$page.wordPressPost.content" class="post-article" />
                
                <share-buttons :title="$page.wordPressPost.title" />

                <PostCTA />
                
              </v-col>
            </v-row>
          </v-container>

          <div class="p-news-bg"></div>

        </article>

        <v-container>
          <v-row class="justify-center">
            <g-link to="/news-archives" class="post-archives-link">
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
  wordPressPost(id: $id) {
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
import ShareButtons from '~/components/ShareButtons'
import PostCTA from '~/components/PostCTA'

export default {
  components: {
    ShareButtons,
    PostCTA
  },
  metaInfo () {
    return {
      title: this.$page.wordPressPost.title,
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: this.$page.metadata.siteUrl + this.$page.wordPressPost.path,
        },
      ],
      meta: [
        { key: `og:type`, property: `og:type`, content: `article` },
        {
          key: `og:url`,
          property: `og:url`,
          content: this.$page.metadata.siteUrl + this.$page.wordPressPost.path,
        },
        {
          key: `og:image`,
          property: `og:image`,
          content: this.$page.wordPressPost.featuredMedia.sourceUrl,
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `${this.$page.wordPressPost.title} | ${this.$page.metadata.siteName}`,
        },
        { name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image',
          content: this.$page.wordPressPost.featuredMedia.sourceUrl,
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @include PostDetails;
</style>