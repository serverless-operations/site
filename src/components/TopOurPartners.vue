<template>
  <div class="v-content">
    <div class="container top-partners-container">

      <v-row>

        <v-col cols="12" md="5">

          <h2>
            Partners
            <span>パートナー</span>
          </h2>
          
          <p>
            株式会社Serverless Operationsは <br>
            AWS Partner Network (APN)のセレクトコンサルティングパートナー、Serverless Static WordPress ホスティングサービス「Shifter」のパートナー企業です。
          </p>

        </v-col>

        <v-col class="top-partners-logo-container" cols="12" md="7">

          <a class="aws" href="https://aws.amazon.com/jp/partners/consulting/">
            <img
              src="@/assets/images/top-aws-logo.svg"
              alt="AWS Consulting Partner"
            >
          </a>
        
          <a class="shifter" href="https://spn.getshifter.io/">
            <img
              src="@/assets/images/top-shifter-logo.svg"
              alt="Digitalcube Shifter Partner Network"
            >
          </a>

        </v-col>

      </v-row>

    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.top-partners-container {
  padding-bottom: 120px;
  @include media-breakpoint-up(md) {
    padding-bottom: 240px;
  }
}

h2 {
  color: $primary;
  font-size: 3.5rem;
  font-family: $font-en-normal;
  font-weight: normal;
  line-height: 1.25;
  margin-bottom: 80px;
  @include media-breakpoint-up(md) {
    font-size: 4rem;
  }
  span {
    display: block;
    font-size: 1rem;
    margin-top: 8px;
    font-weight: normal;
    font-family: $font-jp-normal;
  }
}

p {
  color: $primary;
  line-height: 2;
  font-family: $font-jp-normal;
}

.top-partners-logo-container {
  display: flex;
  @include media-breakpoint-up(md) {
    position: relative;
  }
  a {
    display: block;
    position: relative;
    &.aws {
      width: 50%;
      img {
        width: 100%;
      }
    }
    &.shifter {
      width: 50%;
      img {
        width: 100%;
      }
    }
    @include media-breakpoint-up(md) {
      display: block;
      position: absolute;
      &.aws {
        left: 0;
        top: 0;
        width: auto;
      }
      &.shifter {
        right: 0;
        top: 160px;
        width: auto;
      }
    }
  }
}


</style>