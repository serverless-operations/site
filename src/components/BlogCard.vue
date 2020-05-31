<template>

  <div class="c-card-border">

    <g-link :to="post.path" class="p-news-contents__card v-card v-card--link v-sheet v-sheet--tile theme--dark white">

      <v-card class="p-news-contents__card">

          <div class="p-news-contents__title-block">
            <!-- v-card-text class="p-news-contents__date">dd{{ post.date }}</v-card-text-->
            <!--time class="p-news-contents__date" v-html="post.date" /-->
            <div class="v-card__text p-news-contents__date" :datetime="post.date">{{post.date}}</div>
            <h3 v-html="post.title" class="v-card__title p-news-contents__title" />
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

<style lang="scss">
  
  // ニュースのカード部分
  .p-news-contents {
    color: $black;
    font-family: $font-jp-normal;
    z-index: 1;
    position: relative;
    // hoverしたとき、画像部分に左から右へprimaryをかける
    &__image-cover {
      &:after {
        position: absolute;
        content: '';
        display: block;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleX(0);
        transform-origin: left;
        will-change: transform;
        transition: all 0.4s cubic-bezier(0.76, 0, 0.3, 1);
        background-color: rgba($primary, 0.4);
      }
    } // &__image-cover
    // アイキャッチ部分
    &__image {
      position: relative;
      overflow: hidden;
      background: $primary;

      // アイキャッチ、左下と右上の装飾
      &::before,
      &::after {
        z-index: 2;
        content: '';
        display: block;
        width: 33.6%;
        height: 33.6%;
        background-color: $white;
        transform: rotate(-45deg);
        position: absolute;
      }
      &::before {
        top: -17.8%;
        right: -17.8%;
      }
      &::after {
        bottom: -17.8%;
        left: -17.8%;
      }

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

  .p-top-contact {
    &--title {
      color: $tertiary;
      position: relative;
      z-index: 3;
    }
    &--paragraph {
      margin-top: 32px;
      margin-bottom: 0;
      color: $tertiary;
      font-family: $font-jp-normal;
      font-size: 1rem;
      text-align: justify;
      line-height: 2;
      position: relative;
      z-index: 3;
      @include media-breakpoint-up(md) {
        margin-top: 80px;
        margin-bottom: 500px;
      }
    }
    &--form {
      position: relative;
      padding-right: 24px;
      padding-left: 12px;
      margin-top: -48px;
      bottom: -72px;

      @include media-breakpoint-up(md) {
        position: absolute;
        right: 16px;
        margin-top: 0;
      }
      @include media-breakpoint-up(lg) {
        // right: 56px;
        left: calc((100vw - 1200px) / 2 + 520px);
        max-width: 720px;
      }
      @include media-breakpoint-up(xl) {
        // right: 56px;
        left: calc((100vw - 1232px) / 2 + 534px);
        max-width: 720px;
      }
    }
    &--form-shadow {
      display: block;
      z-index: 1;
      position: absolute;
      top: 24px;
      left: 24px;
      width: calc(100% - 36px);
      height: calc(100% - 24px);
      background: linear-gradient(49.74deg, #00007d 11.76%, #2c48ff 88.21%);
      box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
      @include media-breakpoint-up(md) {
        top: 24px;
        left: 24px;
        width: calc(100% - 36px);
        height: calc(100% - 24px);
      }
    }
    &--check {
      margin-top: 0;
      margin-bottom: 8px;
      &:last-of-type {
        margin-bottom: 24px;
      }
    }
    &--check-label {
      font-family: $font-jp-normal;
    }
    &--note {
      padding-top: 28px;
      border-top: 1px solid $light-gray-1;
      color: $tertiary;
      font-family: $font-jp-normal;
      font-size: 1rem;
      a {
        text-decoration: none;
        color: $tertiary;
        font-weight: bold;
      }
    }
  }
</style>
