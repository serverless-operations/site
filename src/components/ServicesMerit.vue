<template>
  <div>
    <section class="page-section-container">

      <v-container class="services-merit-content-container">

        <v-row justify="center">
          <v-col cols="11" md="10">

            <h1>Merit</h1>

            <v-row justify="end">
              <v-col cols="12" sm="10" md="8" lg="7">
                <div class="services-merit-title-container">
                  <p class="services-merit-header-text">
                    サーバーレスオペレーションズが提供できるメリット
                  </p>
                  <h2 class="services-merit-header-title">
                    一時的な開発支援だけでなく、<br>
                    中・長期的な業務改善へと導きます。</h2>
                  <p class="services-merit-desc">サーバーレスオペレーションズがお客さまのチームに加わることでお客さまの現状をしっかりと把握し、経験不足や技術力不足を全面的にサポートします。<br>
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
                  <p class="merit-header-text">Self-propelled</p>
                  <p class="merit-header-img">
                    <img
                      src="@/assets/images/services/icon-merit-2.svg"
                      class=""
                      alt="質・スピード・コストの最適化 アイコン"
                    >
                  </p>
                </div>
                <div class="merit-card-text">
                  <p class="merit-card-text-header">Merit 02</p>
                  <h3 class="merit-card-title">自走できるチームへ</h3>
                  <p class="merit-card-text-desc">共に手を動かすことで専門的な知識や技術が身につき、次回からはサーバーレスアプリケーションの設計や開発が自走できるようになります。</p>
                </div>
              </div>

              <div class="merit-card">
                <div class="merit-card-icon">
                  <p class="merit-header-text">Team Building</p>
                  <p class="merit-header-img">
                    <img
                      src="@/assets/images/services/icon-merit-3.svg"
                      class=""
                      alt="質・スピード・コストの最適化 アイコン"
                    >
                  </p>
                </div>
                <div class="merit-card-text">
                  <p class="merit-card-text-header">Merit 03</p>
                  <h3 class="merit-card-title">今後のプロジェクトに活かせる</h3>
                  <p class="merit-card-text-desc">お客さまが今後新しいプロジェクトを進行する際に、スケジュール調整やスタッフのアサイン等がスムーズに進みます。さらに、今後のチームづくりや採用、エンジニア育成に役立つ知識が得られます。</p>
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
  padding: 160px 0
}

.services-merit-content-container {
  position: relative;
  // Merit
  h1 {
    font-size: 200px;
    color: $white;
    font-family: $font-en-normal;
    position: absolute;
    z-index: 0;
    line-height: 1;
    margin-bottom: 8px;
    padding: 48px 0;
    background: linear-gradient(180deg, #02007C 0%, rgba(2, 0, 124, 0) 100%);
    background-clip: text; //テキストでくり抜く
    -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    @include media-breakpoint-down(md) {
      font-size: 140px;
      padding: 0;
      top: -32px;
    }
    @include media-breakpoint-down(sm) {
      font-size: 96px;
      padding: 0;
      top: -32px;
    }
  }
  .services-merit-title-container {
    position: relative;
    z-index: 1;
    .services-merit-header-text {
      font-family: $font-jp-bold;
      margin-bottom: 24px;
    }
    .services-merit-header-title {
      font-family: $font-jp-bold;
      font-size: 32px;
      line-height: 1.3;
      margin-bottom: 24px;
    }
    .services-merit-desc {
      line-height: 2;
      font-family: $font-jp-regular;
    }
  }
}

.service-merit-card-container {
  display: flex;
  flex-direction: column;
  .merit-card {
    display: flex;
    position: relative;
    padding: 40px 64px 40px 40px;
    background: #fff;
    border-radius: 3px;
    color: $text-black;
    margin-bottom: 24px;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
      padding: 8%;
    }
    .merit-card-icon {
      flex-basis: 40%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      @include media-breakpoint-down(sm) {
        flex-basis: 50%;
        justify-content: center;
        margin-bottom: 40px;
      }
      .merit-header-text {
        writing-mode: vertical-lr;
        font-size: 32px;
        font-family: $font-en-normal;
        color: $secondary;
        opacity: 10%;
        margin: 0 24px 0 0;
        @include media-breakpoint-down(md) {
          flex-direction: column;
          margin: 0;
        }
        @include media-breakpoint-down(sm) {
          margin: 0 12px 0 0;
          font-size: 24px;
        }
      }
      .merit-header-img {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          @include media-breakpoint-down(md) {
             width: 80%;
          }
          @include media-breakpoint-down(sm) {
             width: 100%;
          }
        }
      }
      
    }
    .merit-card-text {
      flex-basis: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .merit-card-text-header {
        color: $tertiary;
        font-family: $font-en-normal;
        margin: 0 0 16px 0;
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 40px;
          height: 1px;
          background: $tertiary;
          left: 80px;
          bottom: 12px;
        }
      }
      .merit-card-title {
        color: $secondary;
        font-size: 24px;
        margin: 0 0 8px 0;
        font-family: $font-jp-bold;
        line-height: 1.4;
      }
      .merit-card-text-desc {
        line-height: 1.8;
        text-align: justify;
      }
      @include media-breakpoint-down(sm) {
        flex-basis: 50%;
      }
    }
  }
}

</style>