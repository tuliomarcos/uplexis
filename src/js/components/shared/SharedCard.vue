<template lang="pug">
  div#cards-area
    .up-card(
      :id="app.id"
      v-for="app in apps.apps"
      v-if="type === 'apps'"  
    )
      .up-card_icon
        font-awesome-icon(:icon="app.icon" class="up-icon--big")
      .up-card_title
        h1 {{ app.name }}
      .up-card_text
        p {{ app.description }}
      .up-card_footer
        span.up-card_footer--price R$ {{ app.price }}
        span(@click="saibaMais(app)") 
          router-link.up-card_footer--know-more(to="/saiba-mais") Saiba Mais
    .up-card(
      :id="source.id"
      v-for="source in sources.sources"
      v-if="type === 'sources'"
      v-show="filter === source.name || filter === 'Todos' || filter === ''"  
    )
      .up-card_icon
        font-awesome-icon(:icon="source.icon" class="up-icon--big")
      .up-card_title
        h1 {{ source.name }}
      .up-card_text
        p {{ source.description }}
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  
  export default {
    props: {
      type: String,
      filter: String,
    },
    computed: {
      ...mapState(['apps', 'sources']),
    },
    methods: {
      ...mapActions(['setApps','setSources', 'callCardKnowMore']),
      saibaMais(app) {
        this.$store.dispatch('callCardKnowMore', app)
      },
    },
    created() {
      this.type === 'apps'
        ? this.setApps()
        : this.setSources()
    },
  }
</script>

<style lang="scss">
</style>