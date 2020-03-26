<template lang="pug">
  #app
    SharedHeader
    main
      router-view
    footer
</template>

<script>
  import SharedHeader from './js/components/shared/SharedHeader.vue'

  export default {
    name: 'App',
    components: {
      SharedHeader,
    },
  }
</script>

<style lang="scss" scoped>
  main {
    padding: 40px 20px;  
  }
</style>
