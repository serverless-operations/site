<template>
  <div class="works-card">

    <g-link :to="post.path" class="works-content-link">

      <g-image class="works-image object-cover h-64 w-full c-card-border"
        v-if="post.featuredMedia"
        :src="post.featuredMedia.sourceUrl"
        :width="`${post.featuredMedia.mediaDetails.width}`"
        :alt="post.featuredMedia.altText"
      />

      <div class="company-logo-container">
        <g-image :src="post.acf.companyLogo.sourceUrl" :alt="post.acf.companyLogo.altText" class="company-logo"/>
      </div>

      <div class="works-card-text-contaier">
        <div class="works-date" :datetime="post.date">{{post.date}}</div>
        <div class="works-tags-container">
          <div class="works-tags" v-for="tags in post.tags" :key="tags.id" >
            <span>{{ tags.title }}</span>
          </div>
        </div>
        <h3 v-html="post.title" class="works-card-title" />
      </div>

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
.works-card {
  position: relative;
  .works-content-link {
    width: 100%;
    max-width: 848px;
    text-decoration: none;
    display: block;
    // メインイメージ
    .works-image {
      width: 100%;
      height: 320px;
      object-fit: cover;
      border-radius: 8px;
      // background: linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, #54585A 100%);
      // mix-blend-mode: multiply;
      
      @include media-breakpoint-up(md) {
        width: 100%;
        height: 480px;
        object-fit: cover;
      }
    }
    // 企業ロゴ
    .company-logo-container {
      position: absolute;
      left: -32px;
      top: -32px;
      border-radius: 8px;
      padding: 16px;
      width: 160px;
      height: 160px;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;

      img {
        width: 100%;
      }
    }
    // テキストコンテナ
    .works-card-text-contaier {
      position: absolute;
      bottom: 8px;
      left: 0;
      z-index: 2;
      padding: 32px;
      width: 72%;
      color: #fff;
      // 日付
      .works-date {
        font-size: 12px;
        font-family: $font-en-normal;
      }
      .works-tags-container {
        display: flex;
        border-bottom: 1px solid #fff;
        padding: 16px 0 16px 0;
        margin-bottom: 16px;
      }
      .works-tags {
        span {
          display: block;
          padding: 4px 12px 4px 20px;
          background: rgba($tertiary, 0.7);
          margin: 0 8px 8px ;
          border-radius: 200px;
          font-size: 12px;
          position: relative;
          letter-spacing: 1px;
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
}
</style>
