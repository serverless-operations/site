<template>

  <div class="c-card-border">

    <g-link :to="post.path" class="p-blog-contents-link">

      <v-card class="p-blog-contents__card">

        <div class="p-blog-contents__title-block">
          <div class="v-card__text p-blog-contents__date" :datetime="post.date">{{post.date}}</div>
          <h3 v-html="post.title" class="v-card__title p-blog-contents__title" />
          <div class="category-name" v-for="tags in post.tags" :key="tags.id" >
            <span>{{ tags.title }}</span>
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
  
  .p-blog-contents-link {
    text-decoration: none;
  }

  // ニュースのカード部分
  .p-blog-contents {
    color: $black;
    font-family: $font-jp-normal;
    z-index: 1;
    position: relative;

    // お知らせのカード
    &__card {
      padding: 40px 40px 24px 40px;
      position: relative;
      box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
      width: 100%;
      transition: all 0.4s cubic-bezier(0.76, 0, 0.3, 1);

      &:hover {
        .p-blog-contents__title {
          color: $tertiary;
        }
        background-color: #F3F4FC;
        // filter: blur(2px);
        // アイキャッチにprimary colorがかかる
        .p-blog-contents__image-cover::after {
          transform: scaleX(1);
          transform-origin: right center;
        }
      }
     // clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
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
      font-family: $font-jp-bold;
      padding: 0;
      margin-bottom: 24px;
      @include media-breakpoint-up(sm) {
        font-size: 18px;
        
      }
      @include media-breakpoint-up(md) {
        
      }
    } // &__title

    .category-name {
      font-family: $font-en-normal;
      padding: 4px 8px;
      margin-bottom: 6px;
      display: inline-block;
      font-size: 10px;
      background-color: #2c48ff;
      color: #fff;
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
      bottom: 0px;
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
