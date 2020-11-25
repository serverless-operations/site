<template>
  <section class="l-share-button">
    <aside class="p-share-button">
     <div class="p-share-button__header">SHARE</div>
      <a class="p-share-button__link--facebook "
        :href="facebookUrl()"
        target="_blank"
        title="Facebookでシェア">
        <i class="mdi mdi-facebook"/>
      </a>
  
      <a class="p-share-button__link--twitter"
        :href="twitterUrl()"
        target="_blank"
        title="Twitterでシェア">
        <i class="mdi mdi-twitter"/>
      </a>

    </aside>
  </section>
</template>

<script>
export default {
  name: 'ShareButtons',
  props: ['title'],
  data() {
    return {
      url: `https://serverless.co.jp${this.$route.path}`,
      twitter_url: 'https://twitter.com/intent/tweet?url={0}&text={1}',
      facebook_url: 'https://www.facebook.com/sharer/sharer.php?u={0}'
    }
  },
  methods: {
    formatByArr(msg) {
      // フォーマット（引数可変（配列）版）
      var args = []
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i]
      }
      // URLエンコード
      args = args.map(x => encodeURIComponent(x))
      return msg.replace(/\{(\d+)\}/g, function(m, k) {
        return args[k]
      })
    },
    // それぞれパラメータを埋め込む
    twitterUrl() {
      return this.formatByArr(this.twitter_url, this.url, this.title)
    },
    facebookUrl() {
      return this.formatByArr(this.facebook_url, this.url)
    }
  }
}
</script>

<style lang="scss" scoped>
// シェアボタンのレイアウト
.l-share-button {
  margin: 64px 0;
}

// シェアボタン
.p-share-button {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  // text-align: center;
  flex-wrap: wrap;

  // Shareの見出し
  &__header {
    width: 100%;
    font-family: $font-en-normal;
    font-size: 16px;
    color: $secondary;
    text-align: center;
    margin-bottom: 16px;
    @include media-breakpoint-up(md) {
      font-size: 24px;
      width: 25%;
      text-align: center;
      margin-bottom: 0;
    }
  } // &__header

  // シェア用リンク
  &__link {
    display: inline-block;
    text-align: center;
    width: 50%;
    padding: 12px 32px;
    font-size: 1.8rem;
    color: $white;
    line-height: 1;
    transition: all 0.3s ease;
    @include media-breakpoint-up(sm) {
      padding: 12px 32px;
    }
    @include media-breakpoint-up(md) {
      padding: 22px 80px;
      width: 37.5%;
    }
    @include media-breakpoint-up(lg) {
      padding: 22px 122px;
    }

    //hoverしたときに影がつく
    &:hover {
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      transform: translateY(0.2px);
    }

    // Facebook
    &--facebook {
      @extend .p-share-button__link;
      background: #3b5998;
    }

    // Twitter
    &--twitter {
      @extend .p-share-button__link;
      background: #00b0ed;
    }
  } // &__link
} // p-share-button
</style>
