<template>
  <header class="header-nav">

    <div class="header-nav__logo-block">
      <g-link to="/" class="header-nav__logo-link">
        <img
          src="../assets/images/header-logo.svg"
          alt="Severless Operations ロゴ"
          class="header-nav__logo"
        />
      </g-link>
    </div>

    <nav>
      <ul>
        <li><g-link to="/works-archives">Works</g-link></li>
        <li><g-link to="/blog-archives">Blog</g-link></li>
        <li><g-link to="/services">Service</g-link></li>
        <li><g-link to="/about">About</g-link></li>
        <li><g-link to="/news-archives">News</g-link></li>
        <li><g-link to="/contact">Contact</g-link></li>
      </ul>
    </nav>

    <div id="app" class="header-nav__toggler-block d-block d-md-none">
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
  top: 0;
  width: 100%;
  max-width: 1920px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  mix-blend-mode: difference;

  .header-nav__logo-block {
    
    padding: 16px;
    .header-nav__logo-link {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  // 
  nav {
    margin-right: 24px;
    @include media-breakpoint-down(sm) {
      display: none;
    }
    // display: flex;
    ul {
      display: flex;
      li {
        list-style: none;
        margin-right: 32px;
        @include media-breakpoint-down(md) {
          margin-right: 24px;
        }
        @include media-breakpoint-down(sm) {
          margin-right: 16px;
        }
        a {
          color: #fff;
          text-decoration: none;
          font-family: $font-en-normal;
          transition: $soease;
          position: relative;
          opacity: 0.9;
          letter-spacing: 0.03rem;
          
          @include media-breakpoint-down(sm) {
            font-size: 14px;
          }
          &::after {
            display: block;
            width: 100%;
            height: 1px;
            content: '';
            color: #fff;
            background-color: #fff;
            position: absolute;
            left: 0;
            bottom: -8px;
            transition: $soease;
            transform: scaleX(0);
            transform-origin: left center;
            opacity: 0.8;
          }
          &:hover {
            opacity: 1;
            &::after {
              opacity: 1;
              transform: scaleX(1);
            }
          }
        }
      }
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

.btn__content {
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