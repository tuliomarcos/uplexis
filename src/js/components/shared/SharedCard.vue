<template lang="pug">
  div#cards-area
    .up-card(
      :id="app.id"
      v-for="app in apps.apps"
      v-if="type === 'apps'"  
    )
      .up-card_icon
        img(height="100" src="https://pt.seaicons.com/wp-content/uploads/2016/03/crazy-cat-icon.png")
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
      v-show="filter === source.name || filter === 'Todos' || filter === ''"  
    )
      .up-card_icon
        img(height="150" src="https://images.vexels.com/media/users/3/184114/isolated/lists/8bddbe02b82396276485e9250dfcc80c-ilustracao-de-mordida-de-sapatilha-de-cachorro-bravo.png")
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
      ...mapActions(['setApps','setSources']),
    },
    created() {
      this.type === 'apps'
        ? this.setApps()
        : this.setSources()
    },
  }
</script>

<style lang="scss">
  .up-card {
    max-width : 380px;
    padding: 20px;
    display: inline-block;
    border: solid 1px #000;
    border-radius: 5px;
    margin: 15px;

    &_icon {
      display: flex;
      justify-content: center;
    }

    &_title {
      text-align: center;
    }
  }
</style>