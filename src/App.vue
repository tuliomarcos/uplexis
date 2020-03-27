<template lang="pug">
  #app
    SharedHeader
    SharedCarousel(:data="apps.apps" @datasKnowMore="knowMore")
    main
      router-view
    footer
</template>

<script>
  import SharedHeader from './js/components/shared/SharedHeader.vue'
  import SharedCarousel from './js/components/shared/SharedCarousel.vue'
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'App',
    components: {
      SharedHeader,
      SharedCarousel,
    },
    computed: {
      ...mapState(['apps']),
    },
    methods: {
      ...mapActions(['setApps']),
      knowMore(app) {
        this.$store.dispatch('callCardKnowMore', app)
      },
    },
    mounted() {
      this.setApps()
    }
  }
</script>

<style lang="scss" scoped>
  main {
    padding: 40px 20px;  
  }
</style>
