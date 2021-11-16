<template>
  <header class="header-nav" v-bind:class="{ 'is-active': isActive }">
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
        <li><g-link to="/about">私たちについて</g-link></li>
        <li><g-link to="/services">サービス</g-link></li>
        <li><g-link to="/works-archives">実績紹介</g-link></li>
        <li><g-link to="/blog-archives">ブログ</g-link></li>
        <li><g-link to="/news-archives">お知らせ</g-link></li>
        <li><g-link to="/download">会社資料ダウンロード</g-link></li>
        <li><g-link to="/contact">お問い合わせ</g-link></li>
      </ul>
    </nav>

    <div id="app" class="header-nav__toggler-block d-block d-md-none">
      <button
        id="btn"
        class="header-nav__toggler-button btn"
        type="button"
        @click="
          $store.commit('toggleModal');
          isActive = !isActive;
        "
      >
        <div
          class="btn__content"
          v-bind:class="{ 'is-active': isActive }"
          tabindex="-1"
        >
          <span class="header-nav__toggler-top"></span>
          <span class="header-nav__toggler-middle"></span>
          <span class="header-nav__toggler-bottom"></span>
        </div>
      </button>
    </div>
    <modal
      v-if="showModal"
      @close="
        $store.commit('toggleModal');
        isActive = false;
      "
    ></modal>

    <!-- header-nav__toggler-block -->
  </header>
</template>

<script>
// モーダルの読み込み
import { mapMutations } from "vuex";
import Modal from "~/components/Modal.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  computed: {
    showModal() {
      return this.$store.state.showModal;
    },
  },
  components: {
    Modal,
  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    this.headerAnimation();
  },
  methods: {
    toggleModal() {
      $store.commit("toggleModal");
    },
    headerAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".v-content", // この要素と交差するとイベントが発火
            start: "top 0", //
            end: "bottom 1%", // ウィンドウのどの位置をイベントの終了点にするか
            toggleActions: "play none none none", // スクロールイベントで発火するアニメーションの種
            scrub: true,
          },
        })
        .fromTo(
          ".header-nav",
          {
            opacity: 1,
            ease: "power3.out",
          },
          {
            opacity: 0,
          }
        );
    },
  },
  watch: {
    $route() {
      this.isActive = false;
    },
  },
};
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

  &.is-active {
    mix-blend-mode: initial;
  }

  .header-nav__logo-block {
    padding: 16px;
    .header-nav__logo-link {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        @include media-breakpoint-down(sm) {
          width: 80%;
        }
      }
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
        margin-right: 28px;
        @include media-breakpoint-down(md) {
          margin-right: 24px;
        }
        @include media-breakpoint-down(sm) {
          margin-right: 16px;
        }
        a {
          color: #fff;
          text-decoration: none;
          font-family: $font-jp-bold;
          transition: $soease;
          position: relative;
          letter-spacing: 0.03rem;

          @include media-breakpoint-down(sm) {
            font-size: 14px;
          }
          &::after {
            display: block;
            width: 100%;
            height: 1px;
            content: "";
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
  }
  &__toggler-button {
    z-index: 10;
    right: 24px;
    top: 20px;
    position: absolute;
    height: 40px;
    width: 40px;

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
    left: 0px;
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
      width: 16px;
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
      width: 24px;
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
      width: 32px;
    }
  }
}

.is-active > .header-nav__toggler-top {
  width: 40px;
  transform: rotate(45deg);
  top: 16px;
}
.is-active > .header-nav__toggler-middle {
  width: 0px;
  opacity: 0;
}
.is-active > .header-nav__toggler-bottom {
  width: 40px;
  transform: rotate(135deg);
  top: 16px;
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
  height: 40px;
  width: 40px;
  @media screen and (max-width: 600px) {
    height: 40px;
    width: 40px;
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
