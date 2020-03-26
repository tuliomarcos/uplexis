<template lang="pug">
  header.up-header
    router-link.up-header_logo(to="/")
      img.up-logo(src="../../../assets/logo.png", width="150")
    nav.up-header_navbar
      ul
        li(
          v-for="(link, index) in routes"
          :key="index"
          v-if="link.path !== '/saiba-mais'"
        )
          router-link.linkTabs(:to="link.path") {{ link.name }}
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