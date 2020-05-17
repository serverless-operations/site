export default [
  {
    path: "/:year/:month/:day/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/Users/abefumito/works-space/site/src/templates/WordPressPost.vue")
  },
  {
    path: "/tag/:slug/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-post-tag-vue" */ "/Users/abefumito/works-space/site/src/templates/WordPressPostTag.vue")
  },
  {
    path: "/category/:slug/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-category-vue" */ "/Users/abefumito/works-space/site/src/templates/WordPressCategory.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/abefumito/works-space/site/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/abefumito/works-space/site/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/abefumito/works-space/site/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/abefumito/works-space/site/node_modules/gridsome/app/pages/404.vue")
  }
]

