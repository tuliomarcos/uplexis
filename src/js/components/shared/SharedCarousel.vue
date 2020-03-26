<template lang="pug">
  .up-carousel
    .up-carousel_header
      img.up-logo(src="../../../assets/logo.png", width="150")
      span |
      .up-carousel_header--title {{ item.name }}
    .up-carousel_body
      p.up-carousel_body--description {{ item.description }} 
    .up-carousel_footer
      span.up-carousel_footer--price R$
      span.up-carousel_footer--value {{ item.price }}
      span(@mouseover="datasKnowMore(item)")
        router-link.up-carousel_footer--know-more(to="/saiba-mais") Saiba Mais
</template>

<script>

  export default {
    props: {
      data: [Array, Object]
    },
    methods: {
      datasKnowMore(data) {
        this.$emit('datasKnowMore', data)
      },
    },
  }
</script>