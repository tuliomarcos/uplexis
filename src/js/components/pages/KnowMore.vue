<template lang="pug">
  #know-more
    .banner
    router-link(to="/") < {{ apps.infoPage.name }}
    .slider
    p {{ apps.infoPage.description }}
    footer
      span {{ apps.infoPage.price }}
      button(@click="lero") Habilitar
</template>

<script>
  import {routes} from '../../utils/router'
  import { mapActions, mapState } from 'vuex'

  export default {
    data() {
      return {
        routes,
      }
    },
    computed: {
      ...mapState(['apps'])
    },
    methods: {
      ...mapActions(['cardKnowMore']),
      lero() {
        console.log(this.apps.infoPage)
      }
    }
  }
</script>