<template lang="pug">
  div
    h1 aplicativos
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