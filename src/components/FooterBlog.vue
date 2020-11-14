<template>
  <div>
    <li v-for="{ node } in $static.blog.edges" :key="node.id" class="c-footer-list__item">
      <g-link :to="node.path" class="c-footer-list__link">
        {{ node.title }}
      </g-link>
    </li>
  </div>
</template>

<static-query>
query ($page: Int) {
  blog: allWordPressBlog (page: $page, perPage: 6, sortBy: "date", order: DESC) @paginate {
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
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
  @include linkList;
</style>