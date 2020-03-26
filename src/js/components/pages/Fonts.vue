<template lang="pug">
  div
    SharedFilter(
      @filter="filterSource"
      :sources="sources.sources"
    )
    #cards-area
      SharedCard(
        type="sources" 
        :filter="filter"
        v-for="(data, key) in sources.sources"
        :key="key"
        :data="data"
        v-show="filter === data.name || filter === 'Todos' || filter === ''"
      )
</template>

<script>
  import SharedCard from '../shared/SharedCard'
  import SharedFilter from '../shared/SharedFilter'
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {
      SharedCard,
      SharedFilter,
    },
    data() {
      return {
        filter: ''
      }
    },
    computed: {
      ...mapState(['sources']),
    },
    methods: {
      ...mapActions(['setSources']),
      filterSource(event) {
        this.filter = event
      }
    },
    created() {
      this.setSources()
    },
  }
</script>