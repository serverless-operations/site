<template>
  <div id="main-wrapper" class="v-application v-application--is-ltr theme--dark">
    <transition name="fade" appear>
      <div class="v-application--wrap">
        <header-component />
          <main class="v-content">
            <slot/>
          </main>
        <!--footer-our-partners /-->
        <!-- <call-to-action /> -->
        <footer-component />
      </div>
    </transition>
  </div>
</template>

<script>
// import Noise from "~/components/Noise.vue";
import HeaderComponent from '~/components/Header.vue'
import CallToAction from '~/components/CallToAction.vue'
import FooterComponent from '~/components/Footer.vue'
import { gsap } from 'gsap'

export default {
  components: {
    // Noise,
    HeaderComponent,
    CallToAction,
    FooterComponent
  },
  mounted() {
    if (globalThis.FONTPLUS) {
      globalThis.FONTPLUS.start();
    }
  }
}
</script>


<style lang="scss">

body {
  font-family: $font-jp-regular;
  font-size: 16px;
  color: $text-black;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  position: relative;
  z-index: 1;
}

#main-wrapper {
  font-family: $font-jp-regular;
  overflow: hidden;
}

.v-application--wrap {
  overflow: hidden;
}


.fade-enter-active {
  transition: all 0.6s cubic-bezier(.93,0,.1,1);
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}

.theme--dark.v-application {
  background: #fff;
}
.v-content .container {
  width: 98vw;
  @include media-breakpoint-up(sm) {
    max-width: 900px;
  }
  @include media-breakpoint-up(md) {
    max-width: 928px;
  }
  @include media-breakpoint-up(lg) {
    max-width: 1200px;
  }
  @include media-breakpoint-up(xl) {
    max-width: 1232px;
  }
}

.v-application code {
  background-color: transparent !important;
  color: inherit !important;
  box-shadow: none !important;
  &::before {
    content: none !important;
    letter-spacing: 0 !important;
  }
}

.grecaptcha-badge {
  visibility: hidden;
}

@include ContactForm;

</style>
