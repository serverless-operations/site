<template>

  <div class="c-card-border">

    <g-link :to="post.path" class="p-works-contents-link">

       <g-image class="works-image object-cover h-64 w-full c-card-border"
          v-if="post.featuredMedia"
          :src="post.featuredMedia.sourceUrl"
          :width="`${post.featuredMedia.mediaDetails.width}`"
          :alt="post.featuredMedia.altText"
        />

      <v-card class="p-works-contents__card">

        <div class="p-works-contents__title-block row">
          <div class="col-3">
             <g-image :src="post.acf.companyLogo.sourceUrl" :alt="post.acf.companyLogo.altText" class="company-logo"/>
          </div>
          <div class="col-9">
            <div class="v-card__text p-works-contents__date" :datetime="post.date">{{post.date}}</div>
            <h3 v-html="post.title" class="v-card__title p-works-contents__title" />
            <div class="category-name" v-for="tags in post.tags" :key="tags.id" >
              <span>{{ tags.title }}</span>
            </div>
          </div>
        </div>

      </v-card>

    </g-link>

  </div>

</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .p-works-contents-link {
    text-decoration: none;
    .works-image {
      width: 100%;
      height: 480px;
      object-fit: cover;
    }
  }

  // ニュースのカード部分
  .p-works-contents {
    color: $black;
    font-family: $font-jp-normal;
    z-index: 1;
    position: relative;

    // お知らせのカード
    &__card {
      padding: 40px;
      position: relative;
      z-index: 3;
      box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
      width: 70%;
      margin-left: 10%;
      margin-top: -100px;
      transition: all 0.4s cubic-bezier(0.76, 0, 0.3, 1);

      &:hover {
        .p-works-contents__title {
          color: $tertiary;
        }
        //background-color: rgba($secondary, 0.05);
        // filter: blur(2px);
        // アイキャッチにprimary colorがかかる
        .p-works-contents__image-cover::after {
          // transform: scaleX(1);
          //transform-origin: right center;
        }
      }
     // clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    } // &__card

    // 日付とタイトル部分
    &__title-block {
      min-height: 100px;
      .company-logo {
        width: 100%;
      }
      @include media-breakpoint-up(sm) {
        min-height: 112px;
      }
      @include media-breakpoint-up(md) {
        min-height: 148px;
      }
    } // &__title-block

    // 記事日付
    &__date {
      line-height: 1;
      font-size: 0.75rem;
      color: $mid-gray-2;
      padding: 0;
      margin-bottom: 16px;
      @include media-breakpoint-up(sm) {
        font-size: 0.875rem;
      }
      @include media-breakpoint-up(md) {
        
      }
    } // &__date

    // 記事タイトル
    &__title {
      font-size: 18px;
      line-height: 1.5;
      text-align: justify;
      color: $primary;
      padding: 0;
      margin-bottom: 24px;
      @include media-breakpoint-up(sm) {
        font-size: 18px;
        
      }
      @include media-breakpoint-up(md) {
        
      }
    } // &__title

    .category-name {
      padding: 6px 16px;
      display: inline;
      font-size: 12px;
      background-color: $tertiary;
      color: $white;
      margin-right: 8px;
      border-radius: 100px;
    }

    .v-card--link:focus:before {
      opacity: 0;
    }

  } // p-news-contents

  .c-card-border {
    border: 1px solid none;
    position: relative;
    height: 100%;
    z-index: 1;
    // 線の設定
    &::before {
      z-index: 1;
      background-color: $primary;
      content: '';
      display: block;
      position: absolute;
      transition: transform 0.4s cubic-bezier(0.76, 0, 0.3, 1);
      transform: scaleX(0);
      transform-origin: right center;
      top: -1px;
      height: 1px;
      left: 0;
      width: 100%;
    }

    // ホバー時に右から左へ線が広がる
    &:hover::before {
      transform: scaleX(1);
      transform-origin: left center;
      transition: transform 0.4s cubic-bezier(0.76, 0, 0.3, 1);
    }
  } // .c-card-border
</style>
