<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    siteOgImage
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: this.$static.metadata.siteUrl
        },
      ],
      meta: [
        { key: `og:locale`, property: `og:locale`, content: `ja_JP` },
        { key: `og:type`, property: `og:type`, content: `website` },
        {
          key: `og:url`,
          property: `og:url`,
          content: this.$static.metadata.siteUrl,
        },
        {
          key: `og:site_name`,
          property: `og:site_name`,
          content: this.$static.metadata.siteName,
        },
        {
          key: `og:image`,
          property: `og:image`,
          content:  this.$static.metadata.siteOgImage,
        },
      ]
    }
  }
}
</script>