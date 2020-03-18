<template lang="pug">
  div
    .up-card(
      :id="app.id"
      v-for="app in apps.apps"
      v-if="type === 'apps'"  
    )
      .up-card_icon
        img(src="https://pt.seaicons.com/wp-content/uploads/2016/03/crazy-cat-icon.png")
      .up-card_title
        h1 {{ app.name }}
      .up-card_text
        p {{ app.description }}
      .up-card_footer
        span R$ {{ app.price }}
        a Saiba Mais
    .up-card(
      :id="source.id"
      v-for="source in sources.sources"
      v-if="type === 'sources'"  
    )
      .up-card_icon
        img(src="https://images.vexels.com/media/users/3/184114/isolated/lists/8bddbe02b82396276485e9250dfcc80c-ilustracao-de-mordida-de-sapatilha-de-cachorro-bravo.png")
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
    },
    computed: {
      ...mapState(['apps', 'sources']),
    },
    methods: {
      ...mapActions(['setApps','setSources']),
    },
    created() {
      this.type === 'apps'
        ? this.setApp()
        : this.setSources()
    },
  }
</script>