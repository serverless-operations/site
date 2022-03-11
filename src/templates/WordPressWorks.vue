<template>
  <Layout>
    <div class="v-content">
      <div class="v-content__wrap">

        <v-container>
          <p class="category-title">
            Works
          </p>
        </v-container>

        <header class="post-header">
          <v-container>
            <v-row class="justify-center">
              <v-col cols="11" md="10">

                <h1 v-html="$page.wordPressWorks.title" class="post-title" />

                <div class="post-tag-container">
                  <time 
                    class="post-date"
                    :datetime="$page.wordPressWorks.date"
                  > 
                    {{$page.wordPressWorks.date}}
                    
                  </time>
                  <div
                    class="post-tags"
                    v-for="tags in $page.wordPressWorks.tags"
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
                  v-if="$page.wordPressWorks.featuredMedia"
                  :src="$page.wordPressWorks.featuredMedia.sourceUrl"
                  :width="$page.wordPressWorks.featuredMedia.mediaDetails.width"
                  :alt="$page.wordPressWorks.featuredMedia.altText"
                  class="post-article-main-img post-works-img"
                />
                <v-row class="justify-center">
                  <div class="works-company-profile col-12 row">

                    <v-col cols="12" sm="4" class="company-logo-container">
                      <g-image :src="$page.wordPressWorks.acf.companyLogo.sourceUrl" :alt="$page.wordPressWorks.acf.companyLogo.altText" class="company-logo"/>
                    </v-col>

                    <v-col cols="12" sm="8">
                      <h3 v-html="$page.wordPressWorks.acf.companyName" class="company-name"/>
                      <p v-html="$page.wordPressWorks.acf.companyProfile" class="company-profile"/>
                    </v-col>

                  </div>
                </v-row>

                <div v-html="$page.wordPressWorks.content" class="post-article" />

                <share-buttons :title="$page.wordPressWorks.title" />

                <!-- <PostCTA /> -->

              </v-col>
            </v-row>
          </v-container>

          <div class="p-news-bg"></div>

        </article>

        <v-container>
          <v-row class="justify-center">
            <g-link to="/works-archives" class="post-archives-link">
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
  wordPressWorks(id: $id) {
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
    acf {
      companyName,
      companyProfile,
      companyLogo {
        sourceUrl,
        altText
      }
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
      title: this.$page.wordPressWorks.title,
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: this.$page.metadata.siteUrl + this.$page.wordPressWorks.path,
        },
      ],
      meta: [
        { key: `og:type`, property: `og:type`, content: `article` },
        {
          key: `og:url`,
          property: `og:url`,
          content: this.$page.metadata.siteUrl + this.$page.wordPressWorks.path,
        },
        {
          key: `og:image`,
          property: `og:image`,
          content:  this.$page.wordPressWorks.featuredMedia.sourceUrl,
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `${this.$page.wordPressWorks.title} | ${this.$page.metadata.siteName}`,
        },
        { name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image',
          content: this.$page.wordPressWorks.featuredMedia.sourceUrl,
        }
      ]
    }
  },
  data() {
    return {
      result: [],
      title: '',
      description: '',
      bodyHtml: ''
    }
  },
}
</script>


<style lang="scss" scoped>

.works-company-profile {
  
  .company-logo-container {
    text-align: center;
    .company-logo {
      width: 100%;
      padding: 10%;
      height: auto !important;
      border: 3px solid $light-gray-1;
      border-radius: 6px;
      @include media-breakpoint-down(xs) {
        width: 40%;
        padding: 5%;
      }
    }
  }

  .company-name {
    font-size: 24px;
    font-family: $font-jp-bold;
    color: $secondary;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid $mid-gray-3;
  }
  .company-profile {
    color: $text-black;
    font-size: 14px;
    text-align: justify;
    word-break: break-all;
  }
}

@include PostDetails;

</style>