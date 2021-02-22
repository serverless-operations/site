// v2.0

import gsap from "gsap";
import Vue from "vue";
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import 'vuetify/dist/vuetify.min.css'
import Prism from 'prismjs'
import '~/assets/css/prism-okaidia.css'
import Vuelidate from 'vuelidate'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '~/assets/css/swiper-bundle.min.css'
// import 'swiper/swiper-bundle.min.css'

import DefaultLayout from '~/layouts/Default.vue'

Vue.prototype.$gsap = gsap;

export default function (Vue, { router, head, isClient, appOptions }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  // Add an external Javascript before the closing </body> tag
  head.script.push({
    src: 'https://webfont.fontplus.jp/accessor/script/fontplus.js?LuMx0zy9taw%3D&box=ME4Rs88c3-0%3D&aa=1&ab=2',
    body: true
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.htmlAttrs = { lang: 'ja' }

  //const opts = { ... } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  Vue.use(Vuex)
  Vue.use(Vuelidate)
  Vue.use(Prism)
  Vue.use(VueAwesomeSwiper)

  appOptions.store = new Vuex.Store({
    state: {
      showModal: false
    },
    mutations: {
      toggleModal(state) {
        state.showModal = !state.showModal
      },
      resetModal(state) {
        state.showModal = false
      }
    }
  })
}
