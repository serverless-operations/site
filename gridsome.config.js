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

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        ['gridsome-plugin-remark-prismjs-all', {
            highlightClassName: "myCustomClass", //Default `gridsome-highlight`
            codeTitleClassName: "customCodeTitle", //Default 'gridsome-code-title'
            showLineNumbers: true, //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
            languageExtensions: [
              {
                language: "superscript",
                extend: "javascript",
                definition: {
                  superscript_types: /(SuperType)/,
                },
                insertBefore: {
                  function: {
                    superscript_keywords: /(superif|superelse)/,
                  },
                },
              },
            ],

        }]
      ]
    }
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
