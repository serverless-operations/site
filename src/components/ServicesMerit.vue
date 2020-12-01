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
</style>