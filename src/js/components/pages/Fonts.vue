<template lang="pug">
  div
    h1 Fontes
    SharedCard(type="sources")
</template>

<script>
  import SharedCard from '../shared/SharedCard'
  import SharedOrder from '../shared/SharedOrder'

  export default {
    components: {
      SharedCard,
      SharedOrder,
    }, 
  }
</script>