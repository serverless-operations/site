<template>
  <div>
    <section class="page-section-container">

      <v-container class="services-support-content-container">

        <v-row justify="center">
          <v-col cols="11" md="7" lg="7">
            <div class="container services-merit-title-container">
              <h1>Merit</h1>
              <p>
                ここにメリットが入るねん。
              </p>
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
}
  p {
    color: #fff;
  }
</style>