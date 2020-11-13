<template>
  <div class="v-content">
    
    <div class="container">
      <div class="row">
        <h2 class="text-center">
          Clients
          <span>クライアント</span>
        </h2>
      </div>
    </div>
  
    <div class="clients-image-container d-flex">

      <img
        src="../assets/images/clients/clients-lixil.svg"
        alt="ServerlessOperations Clients LIXIL"
      />
      <img
        src="../assets/images/clients/clients-htb.svg"
        alt="ServerlessOperations Clients HTB 北海道テレビ"
      />
      <img
        src="../assets/images/clients/clients-tokion.svg"
        alt="ServerlessOperations Clients TOKION"
      />
      <img
        src="../assets/images/clients/clients-serverworks.svg"
        alt="ServerlessOperations Clients Serverworks"
      />
      <img
        src="../assets/images/clients/clients-geolonia.svg"
        alt="ServerlessOperations Clients GEOLONIA"
      />
      <img
        src="../assets/images/clients/clients-infas.svg"
        alt="ServerlessOperations Clients INFAS PIBLICATIONS"
      />
      <img
        src="../assets/images/clients/clients-libelize.svg"
        alt="ServerlessOperations Clients LIBELIZE"
      />
      <img
        src="../assets/images/clients/clients-maas.svg"
        alt="ServerlessOperations Clients MAAS GLOBAL"
      />
      <img
        src="../assets/images/clients/clients-alis.svg"
        alt="ServerlessOperations Clients ALIS"
      />

    </div>
  </div>
</template>

<script>
/*import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)*/

export default {
  
}
</script>

<style lang="scss" scoped>
  .v-content {
    padding: 80px 0 160px 0;
    background: $light-gray-2;
    display: block;
    flex: initial;
    overflow: hidden;
    @include media-breakpoint-down(md) {
      padding: 40px 0;
    }
  }
  h2 {
    color: $secondary;
    font-size: 3.5rem;
    font-family: $font-en-normal;
    font-weight: normal;
    line-height: 1.25;
    text-align: center;
    display: block;
    width: 100%;
    margin-bottom: 64px;
    @include media-breakpoint-up(md) {
      font-size: 4rem;
    }
    @include media-breakpoint-down(md) {
      margin-bottom: 32px;
    }
    span {
      display: block;
      font-size: 1rem;
      margin-top: 8px;
      font-weight: normal;
      font-family: $font-jp-normal;
    }
  }
  .clients-image-container {
    width: 80%;
    max-width: 1500px;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    @include media-breakpoint-down(md) {
      width: 90%;
      max-width: 90%;
    }
    @include media-breakpoint-down(sm) {
      width: 100%;
      max-width: 100%;
    }
    img {
      width: 100%;
      height: auto;
      flex-basis: calc(20% - 24px);
      margin: 12px;
      box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
      border-radius: 3px;
      backface-visibility: hidden;
      @include media-breakpoint-down(md) {
        flex-basis: calc(25% - 36px);
        margin: 12px;
      }
      @include media-breakpoint-down(sm) {
        width: 45%;
        flex-basis: calc(50% - 24px);
        margin: 8px;
      }
    }
  }
</style>