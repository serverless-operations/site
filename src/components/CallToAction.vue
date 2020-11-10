<template>
  <div class="">

    <div class="v-content">

      <div class="container">

        <v-row align="center" justify="center">
          <v-col cols="11">
            <h2>オンライン無料相談</h2>
            <h3>サーバーレスの悩み事、お気軽にご相談ください</h3>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col cols="10" md="6">
            <p class="cta-header-text">
              Serverless Operations の担当者がオンラインで皆さんのサーバーレスに関するご相談やお問い合わせに無料でお答えいたします。
                <a href="https://calendly.com/slsops/office-hours">カレンダー
                  <small>(Calendly)</small>
                </a>
              からお好きな日程をブッキングしていたくだけで、お申込みいただけます。
            </p>
          </v-col>
        </v-row>

        <v-row align="center" justify="center" justify-md="space-between" class="cta-task-container">
          <v-col class="cta-task-list-container" cols="12" sm="8" md="9">
            <h3>こんなお悩みや課題を抱えていませんか？</h3>
            <div class="cta-task-list">
              <ul>
                <li>サーバーレスでやりたいことがあるが<br>何から始めていいかわからない</li>
                <li>サーバーレスのアーキテクチャレビューをしてほしい</li>
                <li>サーバーレスで進めようとしているが<br>適しているのかわからない</li>
              </ul>
              <ul>
                <li>クラウド技術習得やこれからのキャリアに迷っている</li>
                <li>社内でサーバーレスを広めたいがブロッカーがある</li>
                <li>新卒エンジニアだがサーバーレスの勉強を<br>どうしたらいいのかわからない</li>
              </ul>
            </div>
            
          </v-col>

          <v-col class="cta-task-overview" align="start" justify="center" cols="12" sm="4" md="3">
            <ul>
              <li class="target">対象：法人・個人</li>
              <li class="hour">平日 10:00 – 19:00</li>
              <li class="min">1社 or 1人 / 60分</li>
              <li class="calendar">カレンダーから簡単予約</li>
            </ul>
          </v-col>

        </v-row>

      </div>

    </div>

    <a class="cta-button" href="https://calendly.com/slsops/office-hours">
      オンライン無料相談をカレンダーから予約する
    </a>

  </div>

</template>

<style lang="scss" scoped>
.v-content {
  background-image: url('../assets/images/cta/cta-particle.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  background-size: cover;
  background-color: $tertiary;

  h2 {
    margin-top: 120px;
    font-size: 1.5rem;
    text-align: center;
    font-family: $font-jp-bold;
    margin-bottom: 40px;

    @include media-breakpoint-up(md) {
      font-size: 2.5rem;
    }
    span {
      display: block;
      font-size: 1.125rem;
      margin-bottom: 8px;
      opacity: 0.5;
      font-weight: normal;
      font-family: $font-en-normal;
      @include media-breakpoint-up(md) {
        font-size: 1.5rem;
      }
    }
  }
  h3 {
    text-align: center;
    font-size: 24px;
  }
  .v-card__link:focus:before {
    opacity: 0;
  }

  .cta-header-text{
    font-family: $font-jp-normal;
    font-size: 1rem;
    text-align: justify;
    line-height: 2;
    padding: 0;
    margin-bottom: 40px;
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  } // p-cta

  .cta-task-container {
    background-color: #fff;
    border-radius: 3px;
    color: $primary;
    box-shadow: 8px 24px 50px rgba($primary, 0.4);
    position: relative;
    z-index: 1;
    .cta-task-list-container {
      font-size: 14px;
      padding: 0 48px 16px 48px;

      // こんなお悩み
      h3 {
        font-family: $font-jp-bold;
        font-size: 18px;
        padding-bottom: 16px;
        margin: 32px 0 24px 0;
        border-bottom: 1px solid $light-gray-1;
      }
      .cta-task-list {
        display: flex;
        ul {
          margin-right: 4px;
          li {
            list-style: none;
            margin-bottom: 16px;
            background-image: url("../assets/images/cta/cta-icon-check.svg");
            padding-left: 32px;
            background-position:0px 1px;
          }
        }
      }
    }
    .cta-task-overview {
      background-color: $primary;
      color: #fff;
      min-height: 270px;
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        li {
          margin-bottom: 14px;
          font-size: 14px;
          list-style: none;
          &.target {
            background-image: url("../assets/images/cta/cta-icon-target.svg");
            padding-left: 32px;
          }
          &.hour {
            background-image: url("../assets/images/cta/cta-icon-hour.svg");
            padding-left: 32px;
          }
          &.min {
            background-image: url("../assets/images/cta/cta-icon-min.svg");
            padding-left: 32px;
            background-position: 0px 3px;
          }
          &.calendar {
            background-image: url("../assets/images/cta/cta-icon-calendar.svg");
            padding-left: 32px;
          }
        }
      }
    }
  }
}
.cta-button {
  margin-top: -80px;
  display: block;
  text-align: center;
  background: $secondary;
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 0;
  min-height: 360px;
  font-size: 24px;
  font-family: $font-jp-bold;
  line-height: 360px;
  &::before {
    content: 'Office Hours';
    position: absolute;
    display: block;
    z-index: 0;
    left: 0;
    top: 24px;
    right: 0;
    bottom: 0;
    opacity: 0.1;
    font-family: $font-en-light;
    font-size: 14vw;
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    z-index: 0;
    width: 100px;
    height: 1px;
    background: #fff;
    right: 28%;
    bottom: 50%;
  }
}
</style>