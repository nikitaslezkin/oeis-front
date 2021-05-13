<template>
  <div class="Papers">
    <div class="s-text-title">Search papers</div>
    <div class="s-search">
      <search placeholder="1, 2, 3, 5, 10" :select-options="selectOptions" route="papers"/>
    </div>
    <div class="s-results">
      <router-link :to="{name: 'papers-id', params: {id: paper.id}}" v-for="paper in papers"
                   class="s-result s-block-hover" :key="paper.id">
        <div class="s-result-title">{{paper.name}}</div>
        <div class="s-block" v-if="paper.authors && paper.authors.length">
          <div class="s-block-content">
            <span v-for="author in paper.authors">{{author.name}}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Search from '~/components/Search.vue';

import {SCHEME_SELECT_TYPE_TAGS, SCHEME_SELECT_TYPE_TABLES} from "../../constants/Constants";

export default {
  components: {
    Search
  },

  data() {
    return {
      selectOptions: [
        {
          value: SCHEME_SELECT_TYPE_TAGS,
          title: 'By Tags'
        },
        {
          value: SCHEME_SELECT_TYPE_TABLES,
          title: 'By Authors'
        }
      ]
      // circuits: [
      //     {
      //         id: 1,
      //         name: 'Fibonacci',
      //         description: '0 1 1 2 3 5 8'
      //     },
      //     {
      //         id: 2,
      //         name: 'Geometrical',
      //         description: '1 2 4 8 16 32'
      //     },
      //     {
      //         id: 3,
      //         name: 'Arithmetic',
      //         description: '1 2 3 4 5 6 7 8'
      //     }
      // ]
    }
  },

  watchQuery: true,

  async asyncData({$axios, query}) {
    let papers = [];

    console.log('data');

    if (query.search) {
      papers = await $axios.$get(`/api/paper/search`, {
        params: query
      });
    }

    console.log(papers);

    return {
      papers
    }
  }
}
</script>

<style lang="less">
.Papers {
}
</style>
