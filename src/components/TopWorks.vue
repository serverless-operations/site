<template>
  <div class="wrapper">
    <div class="v-content">
      <div class="v-content__wrap">
        <h2>Works</h2>
        <div class="column justify-center align-center container">
          <client-only>
            <swiper
                class="swiper"
                :options="swiperOptions"
                ref="mySwiper"
            >
              <swiper-slide
                  v-for="{ node } in $static.works.edges"
                  :key="node.id"
              >
                <WorksCard :post="node"/>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <!-- <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div> -->
            </swiper>
          </client-only>
        </div>
        <!-- <div justify="end" class="d-none d-md-block p-top-news--more col col-5 align-self-end">
          <g-link to="/works-archives">More Details</g-link>
        </div> -->
      </div>
      <!-- v-content__wrap -->
    </div>
    <div class="button-area">
      <a href="/works-archives" class="c-link-button">実績紹介</a>
    </div>
  </div>
  <!-- v-content -->
</template>

<static-query>
query ($page: Int) {
works: allWordPressWorks (page: $page, perPage: 6, sortBy: "date", order: DESC) @paginate {
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
import WorksCard from '~/components/WorksCard.vue';
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/core'
// import {Autoplay, Swiper as SwiperClass} from 'swiper/core';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';

// Swiper modules
SwiperClass.use([Autoplay, Pagination]);
const {Swiper, SwiperSlide} = getAwesomeSwiper(SwiperClass);
export default {
  components: {
    WorksCard,
    Swiper,
    SwiperSlide,
  },
  // directives: {
  //   swiper: directive,
  // },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 48, //各スライドの余白
        centeredSlides: true, //スライダーを真ん中に
        loop: true, //無限ループ
        slidesPerView: 1.1,
        freeMode: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
          //clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1888: {
            spaceBetween: 42, //各スライドの余白
            centeredSlides: true,
            slidesPerView: 2,
          },
          1600: {
            spaceBetween: 42, //各スライドの余白
            centeredSlides: true,
            slidesPerView: 1.7,
          },
          1264: {
            spaceBetween: 42, //各スライドの余白
            centeredSlides: true,
            slidesPerView: 1.4,
          },
          960: {
            spaceBetween: 80, //各スライドの余白
            centeredSlides: true, //スライダーを真ん中に
            slidesPerView: 1.5,
          },
          600: {
            spaceBetween: 48, //各スライドの余白
            centeredSlides: true, //スライダーを真ん中に
            slidesPerView: 1.5,
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      // return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper);
    // this.swiper.slideTo(3, 1000, false)
  },
  // props: ['blog']
};
</script>
<style lang="scss">
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background-color: #ffffff;
}
</style>
<style lang="scss" scoped>
@include LinkButton;
.wrapper {
  padding: 56px 0 120px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.v-content {
  position: relative;
  z-index: 1;

  h2 {
    font-size: 200px;
    color: $white;
    font-family: $font-en-normal;
    z-index: 5;
    line-height: 0.8;
    text-align: center;
    padding: 0;
    background: linear-gradient(180deg, #02007c 0%, rgba(2, 0, 124, 0) 100%);
    background-clip: text; //テキストでくり抜く
    -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    @include media-breakpoint-down(md) {
      font-size: 96px;
    }
  }

  .container {
    max-width: none;
    width: 100vw;
    padding-right: 0;
    padding-left: 0;
    margin-top: -85px;
  }
}

/deep/ .swiper-container {
  padding: 60px 0;
}

.swiper-pagination-progressbar {
  background: rgba(255,255,255,0.3);
  height: 1px;
  bottom: 0;
  top: auto;
  width: 80%;
  max-width: 1136px;
  position: relative;
  margin: 70px auto auto auto;
}

.button-area {
  margin-top: 34px;
}

/* /deep/ .swiper-wrapper {
  display: flex;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: top;
    margin-left: 32px;
    @include media-breakpoint-up(md) {
      width: 100%;
      max-width: 1024px;
    }
  }
} */
</style>
