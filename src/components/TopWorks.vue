<template>
  <div class="v-content">
    <div class="v-content__wrap">

      <div class="container">

        <div class="row align-center justify-space-between">
          
          <div class="col-md-6 col-12">
            <h2 class="d-flex flex-column justify-center align-center align-md-start p-top-news--title" v-scroll-reveal.reset="{ delay: 500 }">Works<span>導入事例</span></h2>
          </div>

          <div justify="end" class="d-none d-md-block p-top-news--more col col-5 align-self-end">
            <g-link to="/works-archives">More Details</g-link>
          </div>

        </div><!-- row -->
      
        <div class="p-works-contents row">
          <div v-for="{ node } in $static.works.edges" :key="node.id" class="r-1 pr-lg-4 pl-1 pl-lg-4 pb-1 pb-lg-4 col-md-12" v-scroll-reveal.reset="{ delay: 600 }">
            <WorksCard :post="node" />
          </div>
        </div>

      </div><!-- container -->


    </div><!-- v-content__wrap -->
  </div><!-- v-content -->
</template>

<static-query>
query {
  works: allWordPressWorks {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "YYYY.MM.DD")
        path
        featuredMedia {
          sourceUrl
          altText
          mediaDetails {
            width
          }
        }
        categories {
          id
          title
          path
        }
        tags {
          id
          title
          path
        }
        acf {
          companyProfile,
          companyLogo {
            sourceUrl,
            altText
          }
        }
      }
    }
  }
}
</static-query>

<script>
import WorksCard from '~/components/WorksCard.vue'

export default {
  components: {
    WorksCard
  },
  // props: ['blog']
}

</script>

<style lang="scss" scoped>
.v-content {
  width: 100vw;
  background-image: url('../assets/images/top-news-contact-bk.svg');
  background-position: top 420px;
  background-size: 300%;
  background-color: $light-gray-2;
  position: relative;
  z-index: 1;
  @include media-breakpoint-up(md) {
    background-position: center 420px;
    background-size: 100%;
  }
  @include media-breakpoint-up(lg) {
    background-position: center 350px;
  }
  h2 {
    margin-top: 24px;
    font-size: 4rem;
    font-family: $font-en-normal;
    font-weight: normal;
    line-height: 1.25;
    @include media-breakpoint-up(md) {
      margin-top: 88px;
    }
    span {
      display: block;
      font-size: 1rem;
      margin-top: 8px;
      font-weight: normal;
      font-family: $font-jp-normal;
    }
  }
  .p-top-news {
    &--title {
      color: $primary;
    }
    &--more {
      text-align: right;
      z-index: 3;
      position: relative;
      a {
        color: $primary;
        font-family: $font-en-normal;
        font-size: 1rem;
        text-decoration: none;
        display: inline-block;
        position: relative;
        &::before {
          content: '';
          background-image: url('../assets/images/top-news-more-object.svg');
          display: inline-block;
          height: 16px;
          width: 16px;
          position: absolute;
          top: 4px;
          left: -24px;
        }
      }
    }
  }
}
.p-blog-header {
  background: url('../assets/images/privacy-policy-header-bg-img.svg') no-repeat,
    linear-gradient(206.56deg, $tertiary -0.06%, $secondary 100.25%);
  background-size: cover;
  font-family: $font-en-normal;
  height: auto;
  position: relative;
  overflow: hidden;
  @include media-breakpoint-up(lg) {
    height: auto;
    background: url('../assets/images/privacy-policy-header-bg-img.svg') no-repeat,
      linear-gradient(206.56deg, $tertiary -0.06%, $secondary 100.25%);
    background-size: cover;
  }
  &:before {
    content: '';
    display: block;
    height: 78px;
    width: 78px;
    background: $white;
    transform: rotate(45deg);
    position: absolute;
    bottom: -39px;
    left: -39px;
    @include media-breakpoint-up(md) {
      height: 132px;
      width: 132px;
      bottom: -66px;
      left: -66px;
    }
  }
  // ページタイトル
  &__page-title {
    font-size: 2rem;
    color: $white;
    font-family: $font-en-normal;
    padding: 56px 16px 48px 64px;
    @include media-breakpoint-up(md) {
      font-size: 4rem;
      padding: 96px 100px 88px 150px;
    }
    @include media-breakpoint-up(lg) {
      font-size: 5rem;
      padding: 128px 80px 132px 310px;
    }
  }
  &__page-title-ja {
    display: block;
    font-size: 1rem;
    line-height: 42px;
    margin-bottom: 0;
    @include media-breakpoint-up(md) {
      font-size: 1.5rem;
    }
  }
} // p-news-header

.p-blog-contents {
  padding: 0 0 180px 0;
}

.serverless-bg {
  display: block;
  background-color: #fff;
  width: 100vw;
  background-image: url(/assets/img/top-service-clients-bk.svg);
  background-size: contain;
  background-position: bottom 32px center;
  height: 800px;
  position: absolute;
  bottom: 0;
  z-index: 0;
  opacity: 0;
}


</style>