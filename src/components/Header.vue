<template>
  <header class="header-nav" v-scroll-reveal.reset="{ delay: 800 }">
    <div class="header-nav__logo-block">
      <g-link to="/" class="header-nav__logo-link">
        <img
          src="../assets/images/header-logo.svg"
          alt="Severless Operations ロゴ"
          class="header-nav__logo"
        />
      </g-link>
    </div>
    <div id="app" class="header-nav__toggler-block">
      <button
        id="btn"
        class="header-nav__toggler-button btn"
        type="button"
        @click="$store.commit('toggleModal'); isActive = !isActive"
      >
        <div class="btn__content" v-bind:class="{'is-active': isActive}" tabindex="-1">
          <span class="header-nav__toggler-top"></span>
          <span class="header-nav__toggler-middle"></span>
          <span class="header-nav__toggler-bottom"></span>
        </div>
      </button>
    </div>
    <modal v-if="showModal" @close="$store.commit('toggleModal'); isActive = false"></modal>

    <!-- header-nav__toggler-block -->
  </header>
</template>

<script>
// モーダルの読み込み
import { mapMutations } from 'vuex'
import Modal from '~/components/Modal.vue'

export default {
  computed: {
    showModal() {
      return this.$store.state.showModal
    }
  },
  components: {
    Modal
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleModal() {
      $store.commit('toggleModal')
    }
  },
  watch: {
    $route() {
      this.isActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
.header-nav {
  z-index: 8;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 56px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    height: 48px;
  }

  //ロゴ
  &__logo-block {
    margin-left: 32px;
    // display: flex;
    @media screen and (max-width: 600px) {
      margin-left: 12px;
      // max-height: 24px;
      // width: auto;
    }
  }
  //ロゴのリンク部分
  &__logo-link {
    display: flex;
    align-items: center;
    height: 100%;
    width: auto;
  }
  &__logo {
    max-height: 24px;
    width: auto;
    @include media-breakpoint-up(md) {
      margin-top: 12px;
      max-height: 40px;
      width: auto;
    }
  }

  //メニューボタンのブロック
  &__toggler-block {
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right: 8px;
    @include media-breakpoint-up(md) {
      margin-right: 24px;
    }
  }
  &__toggler-button {
    z-index: 10;
    position: relative;
    height: 32px;
    width: 32px;
    @media screen and (max-width: 600px) {
      height: 24px;
      width: 24px;
      // margin-right: 16px;
    }

    &:focus {
      outline: none;
    }

    /* 表示する必要がある場合のみ outline を追加する */
    &:focus-visible {
      outline: 2px solid blue;
    }
    // background: $secondary;
  }
  // メニューボタン
  &__toggler {
    position: relative;
    left: -16px;
  }
  &__toggler-top {
    transition: all 0.2s ease;
    position: absolute;
    top: 4px;
    display: block;
    width: 8px;
    height: 2px;
    background: $white;
    @media screen and (max-width: 600px) {
      top: 0px;
      width: 4px;
      height: 1.5px;
    }
    // &:before {
    //   content: '';
    //   position: absolute;
    //   background: #ffe;
    //   transform: skew(40deg);
    //   height: 2px;
    //   width: 4px;
    //   left: 5px;
    //   @media screen and (max-width: 600px) {
    //     left: 3px;
    //     height: 1.5px;
    //   }
    // }
  }
  &__toggler-middle {
    transition: all 0.2s ease;
    position: absolute;
    top: 16px;
    display: block;
    width: 18px;
    height: 2px;
    background: $white;
    @media screen and (max-width: 600px) {
      top: 8px;
      height: 1.5px;
      width: 12px;
    }
    // &:before {
    //   content: '';
    //   position: absolute;
    //   background: #ffe;
    //   transform: skew(40deg);
    //   height: 2px;
    //   width: 4px;
    //   left: 16px;
    //   @media screen and (max-width: 600px) {
    //     left: 11px;
    //     height: 1.5px;
    //   }
    // }
  }
  &__toggler-bottom {
    transition: all 0.2s ease;
    position: absolute;
    top: 28px;
    display: block;
    width: 30px;
    height: 2px;
    background: $white;
    @media screen and (max-width: 600px) {
      top: 18px;
      height: 1.5px;
      width: 22px;
    }
    // &:before {
    //   content: '';
    //   position: absolute;
    //   background: #ffe;
    //   transform: skew(40deg);
    //   height: 2px;
    //   width: 4px;
    //   left: 28px;
    //   @media screen and (max-width: 600px) {
    //     left: 20px;
    //     height: 1.5px;
    //   }
    // }
  }
}

.is-active > .header-nav__toggler-top {
  width: 24px;
  transform: rotate(45deg);
  top: 12px;
  @include media-breakpoint-up(md) {
    top: 13px;
    left: -2px;
    width: 32px;
  }
}
.is-active > .header-nav__toggler-middle {
  width: 32px;
  width: 0px;
  opacity: 0;
}
.is-active > .header-nav__toggler-bottom {
  width: 24px;
  transform: rotate(135deg);
  top: 12px;
  @include media-breakpoint-up(md) {
    top: 13px;
    left: -2px;
    width: 32px;
  }
}

button {
  -moz-appearance: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  outline: none;
  font-size: inherit;
}

// .btn {
//   // all: initial;
//   margin: 1em;
//   display: inline-block;
// }

.btn__content {
  // background: orange;
  // padding: 1em;
  cursor: pointer;
  display: inline-block;
}

/* Fixing the Safari bug for `<button>`s overflow */
.btn__content {
  position: relative;
  display: block;
  height: 32px;
  width: 32px;
  @media screen and (max-width: 600px) {
    height: 24px;
    width: 24px;
  }
}

/* All the states on the inner element */
// .btn:hover > .btn__content {
//   background: salmon;
// }

// .btn:active > .btn__content {
//   background: darkorange;
// }

.btn:focus > .btn__content {
  box-shadow: 0 0 2px 2px #5e9ed6;
  // color: lime;
}

/* Removing default outline only after we've added our custom one */
.btn:focus,
.btn__content:focus {
  outline: none;
}
</style>