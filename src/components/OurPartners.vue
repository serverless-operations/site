<template>
  <div class="v-content">
    <div class="container">

      <h4>Our Partners</h4>

      <v-row>

        <swiper :options="swiperOption">

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
    </div>
  </div>
</template>

<script>
import VueAwesomeSwiper from 'vue-awesome-swiper'

export default {
  data() {
    return {
      swiperOption: {
        speed: 1000, //スライドの切り替わりスピード
        spaceBetween: 2, //各スライドの余白
        centeredSlides: true, //スライダーを真ん中に
        loop: true, //無限ループ
        slidesPerView: 2,
        breakpoints: {
          // when window width is >= 640px
          768: {
            slidesPerView: 5,
            spaceBetween: 2
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
  /deep/ .swiper-wrapper {
    display: flex;
    
  }
</style>