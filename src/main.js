// v2.0
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import Prism from 'prismjs'
import '~/assets/css/prism-okaidia.css'
//import GridsomeScrollReveal from 'gridsome-scroll-reveal';

export default function (Vue, { router, head, appOptions }) {
  
  // Add an external Javascript before the closing </body> tag
  head.script.push({
    src: 'https://webfont.fontplus.jp/accessor/script/fontplus.js?LuMx0zy9taw%3D&box=ME4Rs88c3-0%3D&aa=1&ab=2',
    body: true
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  //const opts = { ... } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  Vue.use(Vuex)

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

  // Scroll Animation
  /*Vue.use(GridsomeScrollReveal, {
    reset: true,
    class: 'v-scroll-reveal',
    duration: 500,
    distance: '20px',
    mobile: true,
    interval: 600
  })*/
}
