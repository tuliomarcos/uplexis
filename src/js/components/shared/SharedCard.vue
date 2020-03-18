<template lang="pug">
  div
    .up-card(:id="app.id" v-for="app in apps.apps")
      .up-card_icon
        img(src="https://pt.seaicons.com/wp-content/uploads/2016/03/crazy-cat-icon.png")
      .up-card_title
        h1 {{ app.name }}
      .up-card_text
        p {{ app.description }}
      .up-card_footer
        span R$ {{ app.price }}
        a Saiba Mais
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['apps']),
    },
    methods: {
      ...mapActions(['setApp', 'log']),
    },
    created() {
      this.setApp() | this.log()
    },
  }
</script>