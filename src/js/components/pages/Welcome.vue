<template lang="pug">
  div
    header
      img#logo(src="../../../assets/logo.png", width="150")
      nav
        ul
          li(
            v-for="(link, index) in routes"
            :key="index"
          )
            router-link.linkTabs(:to="link.path") {{ link.name }}

    main
      slot

    footer

    
</template>

<script>
  import {routes} from '../../utils/router'

  export default {
    data() {
      return {
        routes,
      }
    },
  }
</script>