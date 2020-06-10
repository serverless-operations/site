<template>
  <v-container class="p-top-contact--container">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="8" class="p-top-contact--form">
        <div class="p-top-contact--form-shadow" />

          <form action="https://formspree.io/mlepngje" method="POST" class="v-form">
            <v-row no-gutters>
              <v-col cols="12" sm="4" md="5" lg="4">
                <v-subheader>お名前<small>（漢字）</small></v-subheader>
              </v-col>
              <v-col cols="12" sm="8" md="7" lg="8">
                <v-text-field name="name-kanji"/>
              </v-col>

              <v-col cols="12" sm="4" md="5" lg="4">
                <v-subheader>お名前<small>（ふりがな）</small></v-subheader>
              </v-col>
              <v-col cols="12" sm="8" md="7" lg="8">
                <v-text-field name="name-frigana"/>
              </v-col>

              <v-col cols="12" sm="4" md="5" lg="4">
                <v-subheader>会社名</v-subheader>
              </v-col>
              <v-col cols="12" sm="8" md="7" lg="8">
                <v-text-field name="company-name"/>
              </v-col>

              <v-col cols="12" sm="4" md="5" lg="4">
                <v-subheader>Eメール</v-subheader>
              </v-col>
              <v-col cols="12" sm="8" md="7" lg="8">
                <v-text-field name="_replyto"/>
              </v-col>

              <v-col cols="12" sm="4" md="5" lg="4">
                <v-subheader>ご検討中のサービス</v-subheader>
              </v-col>
              <v-col cols="12" sm="8" md="7" lg="8">
                <label class="info--text p-top-contact--check-label info">
                  <input type="checkbox" name="serverless-consulting" value="サーバーレスコンサルティング"> 
                  サーバーレスコンサルティング
                </label>
                <label class="info--text p-top-contact--check-label info">
                  <input type="checkbox" name="serverless-development" value="サーバーレスディベロップメント"> 
                  サーバーレスディベロップメント
                </label>
                <label class="info--text p-top-contact--check-label info">
                  <input type="checkbox" name="service-other" value="その他" > 
                  その他
                </label>
              </v-col>

              <v-col cols="12" sm="4" md="5" lg="4">
                <v-subheader>ご相談<br class="d-none d-sm-block">
                  <span class="d-block d-sm-none">・</span>お問い合わせ内容*
                </v-subheader>
              </v-col>
              <v-col cols="12" sm="8" md="7" lg="8">
                <v-textarea v-model="message" name="message"/>
              </v-col>

            </v-row>

            <v-row align="center" justify="end">
              <v-col cols="12" sm="8" md="7" lg="8">
                <p class="p-top-contact--note">
                  <nuxt-link to="/privacy-policy">個人情報保護方針</nuxt-link>をご覧いただき、内容に同意いただけましたら、下記の送信ボタンを押してください。
                </p>
              </v-col>
            </v-row>

            <v-row align="center" justify="center" justify-sm="end">
              <button type="submit" class="mr-4 v-btn v-btn--depressed v-btn--tile v-size--large info">
                <span class="v-btn__content">
                  上記の内容で送信する
                </span>
              </button>
            </v-row>

          </form>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}

</script>

<style lang="scss" scoped>
.p-top-contact {
  &--container {
    padding-bottom: 160px;
  }

  &--form {
    position: relative;
    padding-right: 24px;
    padding-left: 12px;
    margin-top: -96px;
  }
  &--form-shadow {
    display: block;
    z-index: 1;
    position: absolute;
    top: 24px;
    left: 24px;
    width: calc(100% - 36px);
    height: calc(100% - 24px);
    background: linear-gradient(49.74deg, #00007d 11.76%, #2c48ff 88.21%);
    box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
    @include media-breakpoint-up(md) {
      top: 24px;
      left: 24px;
      width: calc(100% - 36px);
      height: calc(100% - 24px);
    }
  }
  &--check {
    margin-top: 0;
    margin-bottom: 8px;
    &:last-of-type {
      margin-bottom: 24px;
    }
  }

  &--check-label {
    font-family: $font-jp-normal;
    color: $primary;
    display: block;
    margin: 16px 0;
  }

  &--note {
    padding-top: 28px;
    border-top: 1px solid $light-gray-1;
    color: $tertiary;
    font-family: $font-jp-normal;
    font-size: 1rem;
    a {
      text-decoration: none;
      color: $tertiary;
      font-weight: bold;
    }
  }
}
.v-input__slot .v-label,
.v-form label.v-label {
  color: $tertiary !important;
}
.v-form {
  background-color: $white;
  padding: 56px 32px;
  border-left: 1px solid $tertiary;
  position: relative;
  z-index: 3;
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.08);
  &::before {
    background-color: $white;
  }
  @include media-breakpoint-up(md) {
    padding: 80px 32px;
  }
  @include media-breakpoint-up(lg) {
    padding: 80px 48px;
  }
}
.v-subheader {
  color: $tertiary;
  font-size: 1rem;
  font-family: $font-jp-normal;
  align-items: baseline;
  padding-left: 0;
  padding-top: 16px;
  height: 100%;
  margin-bottom: 8px;
}
.v-btn {
  font-family: $font-jp-normal;
  background-color: $primary;
  clip-path: polygon(
    calc(100% - 8px) 0,
    0 0,
    0 calc(100% - 8px),
    8px 100%,
    100% 100%,
    100% 8px
  );
}
</style>