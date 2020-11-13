<template>
  <div class="v-content">
    
    <div class="container">
      <div class="row">
        <h2 class="text-center">
          Partners
          <span>パートナー</span>
        </h2>
      </div>
    </div>

    <v-container>
      <div class="row justify-center">

        <a class="partner-card col-10 col-sm-6 col-md-4 col-lg-3" href="https://aws.amazon.com/jp/partners/consulting/">
          <div class="partner-card-logo d-flex justify-center align-center">
            <img
              src="@/assets/images/partners/aws-logo.svg"
              alt="AWS Consulting Partner"
            >
          </div>
          <div class="partner-card-text">
            <p class="partner-company-name">Amazon Web Service</p>
            <h3 class="partner-name">AWS Partner Network</h3>
            <p class="partner-desc">AWS Partner Network (APN)のセレクトコンサルティングパートナー、AWS Lambdaパートナーの認定を受けています。</p>
          </div>
        </a>
      
        <a class="partner-card col-10 col-sm-6 col-md-4 col-lg-3" href="https://spn.getshifter.io/">
          <div class="partner-card-logo d-flex justify-center align-center">
            <img
              src="@/assets/images/partners/shifter-logo.svg"
              alt="Digitalcube Shifter Partner Network"
            >
          </div>
          <div class="partner-card-text">
            <p class="partner-company-name">Digitalcube</p>
            <h3 class="partner-name">Shifter Partner Network</h3>
            <p class="partner-desc">Serverless Static WordPress ホスティングサービス「Shifter」のPartner Networkの一員です。</p>
          </div>
        </a>
      </div>

    </v-container>
    

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.v-content {
  padding: 80px 0 160px 0;
  display: block;
  flex: initial;
  overflow: hidden;
  background-image: url('../assets/images/top-news-contact-bk.svg');
  background-position: top 420px;
  background-size: 100%;
  background-color:rgba(255, 255, 255, 0.7);
  background-blend-mode:lighten;
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
  position: relative;
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
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 1px;
    background-color: $secondary;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    bottom: -24px;
  }
}
.partner-card {
  display: block;
  border-radius: 3px;
  box-shadow: 8px 24px 50px rgba(207, 214, 226, 0.6);
  padding: 64px 0 0 0;
  text-decoration: none;
  margin: 24px;
  height: 100%;
  background: #fff;
  @include media-breakpoint-down(sm) {
    margin: 12px;
  }
  .partner-card-logo {
    padding-bottom: 64px;
    border-bottom: 1px solid $light-gray-1;
    img {
      max-height: 56px;
      @include media-breakpoint-down(sm) {
        max-height: 40px;
        max-width: 80%;
      }
    }
  }
  .partner-card-text {
    padding: 40px 24px;
    background: $light-gray-2;
    min-height: 240px;
    border-radius: 0 0 3px 3px;
    @include media-breakpoint-down(sm) {
      padding: 20px 12px;
       min-height: 220px;
    }
    .partner-company-name {
      color: $mid-gray-1;
      font-size: 10px;
      margin-bottom: 6px;
    }
    .partner-name {
      color: $secondary;
      font-family: $font-en-normal;
      font-size: 24px;
      margin-bottom: 16px;
      line-height: 1.2;
      @include media-breakpoint-down(sm) {
        font-size: 14px;
      }
    }
    .partner-desc {
      color: $text-black;
      font-size: 12px;
    }
  }
}


</style>