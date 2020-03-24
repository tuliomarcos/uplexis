<template lang="pug">
  div
    SharedOrder
    SharedCard(type="apps")
</template>

<script>
  import SharedCard from '../shared/SharedCard'
  import SharedOrder from '../shared/SharedOrder'

  export default {
    components: {
      SharedCard,
      SharedOrder,
    }
  }
</script>