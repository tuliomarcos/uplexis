<template lang="pug">
  div
    SharedFilter(@filter="filterSource")
    SharedCard(type="sources" :filter="filter")
</template>

<script>
  import SharedCard from '../shared/SharedCard'
  import SharedFilter from '../shared/SharedFilter'

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
    methods: {
      filterSource(event) {
        this.filter = event
      }
    },
  }
</script>