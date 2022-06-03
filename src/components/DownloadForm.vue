<template>
  <v-container class="p-top-contact--container">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="8" class="p-top-contact--form">
        <div class="p-top-contact--form-shadow" />

        <form
          accept-charset="UTF-8"
          method="POST"
          class="v-form"
          enctype="multipart/form-data"
          @submit="submit"
        >
          <input type="hidden" id="captchaResponse" name="g-recaptcha-response">
          <v-row no-gutters>
            <v-col cols="12" sm="4" md="5" lg="4">
              <v-subheader>お名前<small>（漢字）</small>*</v-subheader>
            </v-col>
            <v-col cols="12" sm="8" md="7" lg="8">
              <v-text-field
                name="name1"
                :class="{ 'border-red': $v.form.name1.$error }"
                v-model.trim="$v.form.name1.$model"
              />
              <p
                class="error-text-red"
                v-if="$v.form.name1.$error && !$v.form.name1.required"
              >
                お名前<small>（漢字）</small>は必須です。
              </p>
            </v-col>

            <v-col cols="12" sm="4" md="5" lg="4">
              <v-subheader>お名前<small>（ふりがな）</small>*</v-subheader>
            </v-col>
            <v-col cols="12" sm="8" md="7" lg="8">
              <v-text-field
                name="name2"
                :class="{ 'border-red': $v.form.name2.$error }"
                v-model.trim="$v.form.name2.$model"
              />
              <p
                class="error-text-red"
                v-if="$v.form.name2.$error && !$v.form.name2.required"
              >
                お名前<small>（ふりがな）</small>は必須です。
              </p>
            </v-col>

            <v-col cols="12" sm="4" md="5" lg="4">
              <v-subheader>会社名*</v-subheader>
            </v-col>
            <v-col cols="12" sm="8" md="7" lg="8">
              <v-text-field
                name="companyname"
                :class="{ 'border-red': $v.form.companyname.$error }"
                v-model.trim="$v.form.companyname.$model"
              />
              <p
                class="error-text-red"
                v-if="
                  $v.form.companyname.$error && !$v.form.companyname.required
                "
              >
                会社名は必須です。
              </p>
            </v-col>

            <v-col cols="12" sm="4" md="5" lg="4">
              <v-subheader>Eメール*</v-subheader>
            </v-col>
            <v-col cols="12" sm="8" md="7" lg="8">
              <v-text-field
                name="email"
                :class="{ 'border-red': $v.form.email.$error }"
                v-model.trim="$v.form.email.$model"
              />
              <p
                class="error-text-red"
                v-if="$v.form.email.$error && !$v.form.email.required"
              >
                メールアドレスは必須です。
              </p>
              <p
                class="error-text-red"
                v-if="$v.form.email.$error && !$v.form.email.email"
              >
                メールアドレスの形式が不正です。
              </p>
            </v-col>

            <v-col cols="12" sm="4" md="5" lg="4">
              <v-subheader>電話番号*</v-subheader>
            </v-col>
            <v-col cols="12" sm="8" md="7" lg="8">
              <v-text-field
                name="phonenumber"
                :class="{ 'border-red': $v.form.phonenumber.$error }"
                v-model.trim="$v.form.phonenumber.$model"
              />
              <p
                class="error-text-red"
                v-if="
                  $v.form.phonenumber.$error && !$v.form.phonenumber.required
                "
              >
                電話番号は必須です。
              </p>
            </v-col>
            <v-col cols="12" sm="4" md="5" lg="4">
              <v-subheader>役職名</v-subheader>
            </v-col>
            <v-col cols="12" sm="8" md="7" lg="8">
              <v-text-field name="role" />
            </v-col>
          </v-row>

          <v-row align="center" justify="end">
            <v-col cols="12" sm="8" md="7" lg="8">
              <p class="p-top-contact--note">
                <g-link to="/privacy-policy">個人情報保護方針</g-link
                >をご覧いただき、内容に同意いただけましたら、下記の送信ボタンを押してください。
              </p>
              <p class="p-top-contact--recaptcha">This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
            </v-col>
          </v-row>

          <v-row align="center" justify="center" justify-sm="end">
            <button
              type="submit"
              class="mr-4 v-btn v-btn--depressed v-btn--tile v-size--large info"
            >
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
import { required, email } from "vuelidate/lib/validators";
import Vue from "vue";
import axios from "axios";
import { VueReCaptcha } from "vue-recaptcha-v3";
Vue.use(VueReCaptcha, { siteKey: "6LciESwgAAAAAGyjFHbx3EDyy_lkrMrajAHvo3dz" }); // テスト用

export default {
  data: () => ({
    form: {
      name1: "",
      name2: "",
      email: "",
      companyname: "",
      phonenumber: "",
    },
  }),
  validations: {
    form: {
      name1: {
        required,
      },
      name2: {
        required,
      },
      email: {
        required,
        email,
      },
      companyname: {
        required,
      },
      phonenumber: {
        required,
      },
    },
  },
  methods: {
    submit: function(event) {

      this.$v.$touch();
      if (this.$v.$invalid) {
        if (event) event.preventDefault();
        return false;
      }

      const formData = new FormData();
      formData.append("name1", this.name1);
      formData.append("name2", this.name2);
      formData.append("email", this.email);
      formData.append("companyname", this.companyname);
      formData.append("phonenumber", this.phonenumber);

      this.$recaptcha("login").then((token) => {
        formData.append("g-recaptcha-response", token);

        axios
            .post(
                "https://getform.io/f/9c63f873-9e0b-459d-bd81-df41e30ab35c", // テスト用
                formData,
                {
                  headers: {
                    Accept: "application/json",
                  },
                }
            )
            .then(
                (response) => {
                  this.isSuccess = response.data.success ? true : false;
                },
                (response) => {
                  // Error
                }
            );
      });

    },
  },
};
</script>

<style lang="scss" scoped>
@include SectionTitle;

.page-section-container {
  padding: 160px 0;
  background-color: $light-gray-2;
  color: $secondary;
  p {
    font-family: $font-jp-regular;
    line-height: 32px;
    text-align: justify;
  }
}

.p-top-contact {
  &--container {
    padding-bottom: 160px;
  }

  &--form {
    position: relative;
    padding-right: 24px;
    padding-left: 12px;
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
    font-family: $font-jp-regular;
    color: $tertiary;
    display: block;
    margin: 16px 0;
  }

  &--note {
    padding-top: 28px;
    border-top: 1px solid $light-gray-1;
    color: $tertiary;
    font-family: $font-jp-regular;
    font-size: 1rem;
    a {
      text-decoration: none;
      color: $tertiary;
      font-weight: bold;
    }
  }
  &--recaptcha {
    width: 100%;
    color: $mid-gray-1;
    font-family: $font-jp-regular;
    font-size: .7rem;
    a {
      color: $mid-gray-1;
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
  border-radius: 0;
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
  font-family: $font-jp-regular;
  align-items: baseline;
  padding-left: 0;
  padding-top: 16px;
  height: 100%;
  margin-bottom: 8px;
}

.error-text-red {
  color: red;
}

.v-btn {
  font-family: $font-jp-regular;
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
.v-text-field__details {
  display: none !important;
}
</style>
