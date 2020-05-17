const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/style.scss'),
        path.resolve(__dirname, './src/assets/scss/*.scss'),
      ],
    })
}

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  siteName: 'Serverless Operations',
  siteDescription: 'Serverless Operationsは、これまでグローバルの第一線で培ってきたクラウド技術（AWS − アマゾンウェブサービス）の豊富な実績と知見を活かし、お客さまのサーバーレスによる開発や運用の支援、コンサルティングまで一貫してサポート。サーバーレスに関するさまざまな課題を解決いたします。',

  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds a route for the "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://f6642def64a63651c07142605e040674c5441f6d.hl-a.getshifter.co', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ],

  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
} // module.exports
