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
  siteName: `Serverless Operations`,
  titleTemplate: `%s | Serverless Operations`,
  siteUrl: `https://serverless.co.jp`,
  siteDescription: `Serverless Operationsは、これまでグローバルの第一線で培ってきたクラウド技術（AWS − アマゾンウェブサービス）の豊富な実績と知見を活かし、お客さまのサーバーレスによる開発や運用の支援、コンサルティングまで一貫してサポート。サーバーレスに関するさまざまな課題を解決いたします。`,
  metadata: {
    siteOgImage: `https://serverless.co.jp/ogp.png`,
  },

  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/news/:id', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/tag/:slug', // adds a route for the "post_tag" post type (Optional)
    WordPressBlog: '/blog/:id',
    WordPressWorks: '/works/:id',
    WordPressPage: [
      {
        path: (node) => {
          const url = new URL(node.link);
          return `${url.pathname}`
        }
      }
    ],
  },

  plugins: [
    // Data Source WordPress
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://f6642def64a63651c07142605e040674c5441f6d.hl-a.getshifter.co', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    },
    // Google Analytics
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-149835018-1'
      }
    },
    // Sitemap.xml
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        // exclude: ['/exclude-me'],
        config: {
          '/news/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.7
          },
          '/works/*': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    }, // sitemap
    {
      use: "gridsome-plugin-htaccess",
      options: {
        redirections: [
          {
            from: "news/jeffy-ga-release",
            to: "news/66/",
          },
        ],
      },
    }
  ],

  modules: [
    ['vue-github-buttons/nuxt', {
			css: false, // Don't include CSS
			useCache: false // Don't use cache
		}]
  ],

  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
} // module.exports
