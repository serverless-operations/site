<template>
  <Layout >
    <div class="column justify-center align-center">

      <top-key-visual />
      <top-concept />
      <top-services-clients />
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
import TopConcept from '~/components/TopConcept.vue'
import TopBlog from '~/components/TopBlog.vue'
import BlogCard from '~/components/BlogCard.vue'
import TopWorks from '~/components/TopWorks.vue'
import WorksCard from '~/components/WorksCard.vue'
import TopServicesClients from '~/components/TopServicesClients.vue'
import TopNewsContact from '~/components/TopNewsContact.vue'
import Post from '~/components/Post.vue'
import ContactForm from '~/components/ContactForm.vue'
import TopPartners from '~/components/TopPartners.vue'
import TopClients from '~/components/TopClients.vue'

export default {
  components: {
    Pager,
    Post,
    TopKeyVisual,
    TopConcept,
    TopBlog,
    BlogCard,
    TopWorks,
    WorksCard,
    TopServicesClients,
    TopNewsContact,
    TopPartners,
    ContactForm,
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
