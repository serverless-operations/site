<template>
  <div>
    <section class="page-section-container">

      <v-container class="services-support-content-container">

        <v-row justify="center">
          <v-col cols="11" md="10">

            <h1>Merit</h1>

            <v-row justify="end">
              <v-col cols="12" md="7" lg="6">
                <div class="services-merit-title-container">
                  <p>
                    サーバーレスオペレーションズが提供できるメリット
                  </p>
                  <h2>
                    一時的な開発支援だけでなく、<br>
                    中・長期的な業務改善へと導きます。</h2>
                  <p>サーバーレスオペレーションズがお客さまのチームに加わることでお客さまの現状をしっかりと把握し、経験不足や技術力不足を全面的にサポートします。<br>
                  プロジェクトの進行から技術面のアドバイスまで一貫しておこなえるため、目の前の一時的な開発・運用だけでなく、今後の組織・チームづくりや採用、マネジメント等にも活かすことができます。</p>
                </div>
              </v-col>
            </v-row>

            <div class="service-merit-card-container">



              <div class="merit-card">
                <div class="merit-card-icon">
                  <p class="merit-header-text">Optimisation</p>
                  <p class="merit-header-img">
                    <img
                      src="@/assets/images/services/icon-merit-1.svg"
                      class=""
                      alt="質・スピード・コストの最適化 アイコン"
                    >
                  </p>
                </div>
                <div class="merit-card-text">
                  <p class="merit-card-text-header">Merit 01</p>
                  <h3 class="merit-card-title">質・スピード・コストの最適化</h3>
                  <p class="merit-card-text-desc">サーバーレスのメリット・デメリットを理解して自社の開発にスムーズに導入し、サービスの質や開発スピード、開発コストの最適化を実現できます。</p>
                </div>
              </div>

              <div class="merit-card">
                <div class="merit-card-icon">
                  <p class="merit-header-text">Optimisation</p>
                  <p class="merit-header-img">
                    <img
                      src="@/assets/images/services/icon-merit-1.svg"
                      class=""
                      alt="質・スピード・コストの最適化 アイコン"
                    >
                  </p>
                </div>
                <div class="merit-card-text">
                  <p class="merit-card-text-header">Merit 01</p>
                  <h3 class="merit-card-title">質・スピード・コストの最適化</h3>
                  <p class="merit-card-text-desc">サーバーレスのメリット・デメリットを理解して自社の開発にスムーズに導入し、サービスの質や開発スピード、開発コストの最適化を実現できます。</p>
                </div>
              </div>

              <div class="merit-card">
                <div class="merit-card-icon">
                  <p class="merit-header-text">Optimisation</p>
                  <p class="merit-header-img">
                    <img
                      src="@/assets/images/services/icon-merit-1.svg"
                      class=""
                      alt="質・スピード・コストの最適化 アイコン"
                    >
                  </p>
                </div>
                <div class="merit-card-text">
                  <p class="merit-card-text-header">Merit 01</p>
                  <h3 class="merit-card-title">質・スピード・コストの最適化</h3>
                  <p class="merit-card-text-desc">サーバーレスのメリット・デメリットを理解して自社の開発にスムーズに導入し、サービスの質や開発スピード、開発コストの最適化を実現できます。</p>
                </div>
              </div>



            </div>


          </v-col>
        </v-row>

      </v-container>

    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  
}
</script>

<style lang="scss" scoped>
.page-section-container {
  background: linear-gradient(45deg, #00007D 11.76%, #2C48FF 88.21%);
  color: #fff;
}

.service-merit-card-container {
  display: flex;
  flex-direction: column;
  .merit-card {
    display: flex;
    position: relative;
    padding: 40px;
    background: #fff;
    border-radius: 6px;
    color: $text-black;
    margin-bottom: 24px;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
    .merit-card-icon {
      flex-basis: 40%;
      display: flex;
      position: relative;
      @include media-breakpoint-down(md) {
        flex-basis: 50%;
      }
      .merit-header-text {
        position: absolute;
        left: 40px;
        top: 0;
        transform: rotate(90deg);
        transform-origin: left top;
        font-size: 32px;
        font-family: $font-en-bold;
        color: $secondary;
        opacity: 10%;
        letter-spacing: -1px;
        margin: 0;
      }
      .merit-header-img {
        text-align: center;
        margin-left: 64px;
        img {
          width: 100%;
        }
      }
      
    }
    .merit-card-text {
      flex-basis: 60%;
      .merit-card-text-header {
        color: $tertiary;
        font-family: $font-en-bold;
        margin: 0 0 8px 0;
      }
      .merit-card-title {
        color: $secondary;
        font-size: 24px;
        margin: 0 0 8px 0;
        font-family: $font-jp-bold;
      }
      @include media-breakpoint-down(md) {
        flex-basis: 50%;
      }
    }
  }
}

</style>