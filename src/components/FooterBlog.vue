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
// メニューのリスト
.c-footer-list {
  list-style: none;
  padding-left: 14px;

  &__item {
    position: relative;
    font-size: 0.87rem;
    line-height: 18px;
    margin-bottom: 0.6rem;
    &:before {
      position: absolute;
      top: 50%;
      left: -12px;
      content: '';
      display: block;
      color: #fff;
      width: 5px;
      height: 1px;
      background: $mid-gray-2;
    }
  } //&__list-item

  &__link {
    text-decoration: none;
    color: $white;
    transition: all 0.3s ease;
    &:hover {
      color: $mid-gray-2;
    }
  }
} // c-footer-list

</style>