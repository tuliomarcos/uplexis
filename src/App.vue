<template lang="pug">
  #app
    SharedHeader
    SharedCarousel
    main
      router-view
    footer
</template>

<script>
  import SharedHeader from './js/components/shared/SharedHeader.vue'
  import SharedCarousel from './js/components/shared/SharedCarousel.vue'

  export default {
    name: 'App',
    components: {
      SharedHeader,
      SharedCarousel,
    }
  }
</script>

<style lang="scss" scoped>
  main {
    padding: 40px 20px;  
  }
</style>
