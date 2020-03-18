<template lang="pug">
  #app
    Welcome
      template
        router-view
</template>

<script>
  import Welcome from './js/components/pages/Welcome.vue'

  export default {
    name: 'App',
    components: {
      Welcome,
    }
  }
</script>

<style lang="sass" scoped>

</style>
