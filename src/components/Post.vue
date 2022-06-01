<template>

  <div class="c-card-border">

    <g-link :to="post.path" class="p-news-contents__card v-card v-card--link v-sheet v-sheet--tile theme--dark white">

      <v-card class="p-news-contents__card">
      
          <div class="p-news-contents__image">
            <div class="p-news-contents__image-cover">
              <g-image class="object-cover h-64 w-full"
                v-if="post.featuredMedia"
                :src="post.featuredMedia.sourceUrl"
                :width="`${post.featuredMedia.mediaDetails.width}`"
                :alt="post.featuredMedia.altText"
              />
            
            <img v-else
                src="../assets/images/top-news-thum.jpg">
            </div>
          </div>
      
          <div class="p-news-contents__title-block">
            <!-- v-card-text class="p-news-contents__date">dd{{ post.date }}</v-card-text-->
            <!--time class="p-news-contents__date" v-html="post.date" /-->
            <div class="v-card__text p-news-contents__date" :datetime="post.date">{{post.date}}</div>
            <h3 v-html="post.title" class="v-card__title p-news-contents__title" />
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

<style lang="scss">
  
  // ニュースのカード部分
  .p-news-contents {
    color: $black;
    font-family: $font-jp-regular;
    z-index: 1;
    position: relative;

    // アイキャッチ部分
    &__image {
      position: relative;
      overflow: hidden;
      background: $primary;
      // アイキャッチ画像
      img {
        object-fit: cover;
        width: 100%;
        height: calc((98vw / 2) - 24px);
        display: block;
        position: relative;
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
      height: 100%;
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
        padding: 5px 16px 24px;
      }
      @include media-breakpoint-up(md) {
        padding: 5px 22px 24px;
      }
    } // &__title

    .v-card--link:focus:before {
      opacity: 0;
    }
  } // p-news-contents

  .c-card-border {
    border: 1px solid none;
    position: relative;
    height: 100%;
    z-index: 2;
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
      bottom: 0;
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
