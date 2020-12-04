<template>
  <Layout >
    <div class="column justify-center align-center">

      <top-key-visual />
      <top-works />
      <top-blog />
      <top-news-contact />
      <top-partners />
      <top-clients />

    </div>

  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 4) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        date (format: "YYYY.MM.DD")
        featuredMedia {
          sourceUrl
          altText
          mediaDetails {
            width
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome' 
import TopKeyVisual from '~/components/TopKeyVisual.vue'
import TopBlog from '~/components/TopBlog.vue'
import BlogCard from '~/components/BlogCard.vue'
import TopWorks from '~/components/TopWorks.vue'
import WorksCard from '~/components/WorksCard.vue'
import TopNewsContact from '~/components/TopNewsContact.vue'
import Post from '~/components/Post.vue'
import TopPartners from '~/components/TopPartners.vue'
import TopClients from '~/components/TopClients.vue'

export default {
  components: {
    Pager,
    Post,
    TopKeyVisual,
    TopBlog,
    BlogCard,
    TopWorks,
    WorksCard,
    TopNewsContact,
    TopPartners,
    TopClients
  },
  metaInfo :{
    title: 'サーバーレスでクラウドの価値を最大限に',
    meta:[
      {
        name: 'description',
        content: 'Serverless Operationsは、これまでグローバルの第一線で培ってきたクラウド技術（AWS − アマゾンウェブサービス）の豊富な実績と知見を活かし、お客さまのサーバーレスによる開発や運用の支援、コンサルティングまで一貫してサポート。サーバーレスに関するさまざまな課題を解決いたします。',
      }
    ]  
  },
}
</script>
