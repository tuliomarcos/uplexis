<template lang="pug">
  .up-card(:id="data.id")
    .up-card_icon
      font-awesome-icon(:icon="data.icon" class="up-icon--big")
    .up-card_title
      h1 {{ data.name }}
    .up-card_text
      p {{ data.description }}
    .up-card_footer(v-if="type === 'apps'")
      span.up-card_footer--price R$ {{ data.price }}
      span(@mouseover="datasKnowMore(data)")
        router-link.up-card_footer--know-more(to="/saiba-mais") Saiba Mais
</template>

<script>
  export default {
    props: {
      type: String,
      filter: String,
      data: [Array, Object]
    },
    methods: {
      datasKnowMore(data) {
        this.$emit('datasKnowMore', data)
      },
    }
  }
</script>

<style lang="scss">
</style>