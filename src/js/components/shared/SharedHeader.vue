<template lang="pug">
  header
    router-link(to="/")
      img#logo(src="../../../assets/logo.png", width="150")
    nav
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