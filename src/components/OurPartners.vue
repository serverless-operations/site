<template>
  <div class="v-content">
    <div class="container">

      <h4>Our Partners</h4>

      <client-only>
        <v-row>

          <swiper class="swiper" :options="swiperOption">

            <swiper-slide>
              <a href="https://aws.amazon.com/jp/partners/consulting/">
                <img
                  src="@/assets/images/our-partners/aws-logo.svg"
                  alt="sample1"
                >
              </a>
            </swiper-slide>

            <swiper-slide>
              <a href="https://spn.getshifter.io/">
                <img
                  src="@/assets/images/our-partners/shifter-logo.svg"
                  alt="sample2"
                >
              </a>
            </swiper-slide>

          </swiper>

        </v-row>
      </client-only>

    </div>
  </div>
</template>

<script>
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper.scss'

export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 20, //各スライドの余白
        centeredSlides: true, //スライダーを真ん中に
        loop: false, //無限ループ
        slidesPerView: 2,
        freeMode: true,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 120,
            freeMode: true,
            centeredSlides: true
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  h4 {
    text-align: center;
    font-size: 24px;
    color: $primary;
    font-family: $font-en-normal;
    font-weight: normal;
    padding: 16px;
  }
  .container {
    overflow: hidden;
  }
  /deep/ .swiper-wrapper {
    display: flex;
    .swiper-slide {
      a {
        img {
          width: 100%;
        }
      }
    }
  }
</style>