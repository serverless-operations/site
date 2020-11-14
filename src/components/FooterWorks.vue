<template>
  <div>
    <li v-for="{ node } in $static.works.edges" :key="node.id" class="c-footer-list__item">
      <g-link :to="node.path" class="c-footer-list__link">
        {{ node.acf.companyName }}
      </g-link>
    </li>
  </div>
</template>

<static-query>
query ($page: Int) {
  works: allWordPressWorks (page: $page, perPage: 6, sortBy: "date", order: DESC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "YYYY.MM.DD")
        path
        acf {
          companyName
        }
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
  @include linkList;
</style>