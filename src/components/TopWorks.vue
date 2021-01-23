<template>
  <div class="v-content">
    <div class="v-content__wrap">

      <h2>Works</h2>

      <div class="column justify-center align-center container">

        <client-only>
          <swiper class="swiper" :options="swiperOptions" ref="mySwiper">
            <swiper-slide v-for="{ node } in $static.works.edges" :key="node.id">
              <WorksCard :post="node" />
            </swiper-slide>
            <!--div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div -->
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
import { Swiper, SwiperSlide, directive, Navigation, Pagination, Autoplay } from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'

export default {
  components: {
    WorksCard,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 24, //各スライドの余白
        centeredSlides: false, //スライダーを真ん中に
        loop: false, //無限ループ
        slidesPerView: 1.2,
        freeMode: false,
        autoplay: {
          delay: 1000,
        },
        pagination: {
          el: '.swiper-pagination',
          // clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // breakpoints: {
        //   768: { // 768以下の時
        //     slidesPerView: 1.1, // 横幅にたいして表示するスライドの数
        //     spaceBetween: 10,
        //     freeMode: false,
        //     loop: true, //無限ループ
        //     centeredSlides: true
        //   }
        // }
      }
    }
  },
  computed: {
    swiper() {
      // return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
  // props: ['blog']
}

</script>

<style lang="scss" scoped>
.v-content {
  padding: 56px 0 120px 0;
  width: 100%;
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
    background:
      linear-gradient(180deg, #02007C 0%, rgba(2, 0, 124, 0) 100%);
    background-clip: text; //テキストでくり抜く
    -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    @include media-breakpoint-down(md) {
      font-size: 96px;
    }
  }
  .container {
    max-width: 1800px;
  }
}

/deep/ .swiper-container {
  padding: 60px 0;
}
/deep/ .swiper-wrapper {
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
}

</style>