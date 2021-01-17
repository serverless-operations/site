<template>
  <div class="v-content">
    <div class="v-content__wrap">

      <h2>Works</h2>

      <div class="p-works-contents row">

        <client-only>
          <swiper class="swiper" :options="swiperOption" ref="swiper">
            <swiper-slide v-for="{ node } in $static.works.edges" :key="node.id">
              <div class="r-1 pr-lg-4 pl-1 pl-lg-4 pb-1 pb-lg-4 col-md-12">
                <WorksCard :post="node" />
              </div> 
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </client-only>

      </div>

      <!--div justify="end" class="d-none d-md-block p-top-news--more col col-5 align-self-end">
        <g-link to="/works-archives">More Details</g-link>
      </div -->

    </div><!-- v-content__wrap -->
  </div><!-- v-content -->
</template>

<static-query>
query ($page: Int) {
  works: allWordPressWorks (page: $page, perPage: 6, sortBy: "date", order: ASC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
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
          companyProfile,
          companyLogo {
            sourceUrl,
            altText
          }
        }
      }
    }
  }
}
</static-query>

<script>
import WorksCard from '~/components/WorksCard.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

export default {
  components: {
    WorksCard,
    VueAwesomeSwiper
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 40, //各スライドの余白
        centeredSlides: true, //スライダーを真ん中に
        loop: false, //無限ループ
        slidesPerView: 1.1,
        freeMode: false,
        breakpoints: {
          768: { // 768以上の時
            slidesPerView: 1.7, // 横幅にたいして表示するスライドの数
            spaceBetween: 60,
            freeMode: false,
            centeredSlides: false
          }
        }
      }
    }
  }
  // props: ['blog']
}

</script>

<style lang="scss" scoped>
.v-content {
  padding: 120px 0 120px 0;
  width: 100vw;
  position: relative;
  z-index: 1;
  .p-works-contents {
    padding: 120px;
    overflow: hidden;
    @include media-breakpoint-up(md) {
      padding: 60px;
      overflow: scroll;
    }
  }
  h2 {
    font-size: 200px;
    color: $white;
    font-family: $font-en-normal;
    z-index: 0;
    line-height: 0.8;
    text-align: center;
    padding: 0;
    background:
      linear-gradient(180deg, #02007C 0%, rgba(2, 0, 124, 0) 100%);
    background-clip: text; //テキストでくり抜く
    -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    @include media-breakpoint-down(md) {
      font-size: 96px;
    }
  }
}


/deep/ .swiper-wrapper {
  display: flex;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: top;
    @include media-breakpoint-up(md) {
      width: 100%;
      max-width: 1200px;
    }
  }
}

</style>