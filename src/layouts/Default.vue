<template>
  <div class="v-application v-application--is-ltr theme--dark">
    <div class="v-application--wrap">
      <header-component />
      <slot/>
      <footer-component />
    </div>
  </div>
</template>

<script>
import HeaderComponent from '~/components/Header.vue'
import FooterComponent from '~/components/Footer.vue'

export default {
  components: {
    FooterComponent,
    HeaderComponent
  }
}

</script>


<style lang="scss">
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
.p-top-contact {
  &--form {
    .v-text-field {
      &:not(.v-textarea) {
        .v-input__slot {
          height: 40px;
          min-height: 40px !important;
          background-color: $light-gray-1 !important;
          border-width: 1px !important;
          & > .v-text-field__slot {
            height: 40px;
            min-height: 40px;
          }
          & > fieldset {
            height: 44px;
            border-width: 1px !important;
          }
        }
      }
      &:not(.v-input--is-focused, .primary--text, .error--text) {
        .v-input__slot {
          border: none !important;
          & > fieldset {
            border: solid 1px $light-gray-1 !important;
          }
        }
      }
    }
    .v-textarea {
      .v-input__slot {
        background-color: $light-gray-1 !important;
        & > fieldset {
          border-width: 1px !important;
        }
        & > .v-text-field__slot textarea {
          color: $black;
        }
      }
    }

    .v-input.v-text-field input[type='text'] {
      margin: 0;
      color: $black;
    }
  }
  &--check {
    .v-icon {
      color: rgba($mid-gray-3, 0.4);
    }
  }
}
</style>
