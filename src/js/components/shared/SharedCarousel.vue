<template lang="pug">
  carousel(
    :perPage="1"
    :paginationEnabled="false"
    :autoplay="true"
    :autoplayHoverPause="true"
  )
    slide.up-carousel(v-for="(item, key) in data" :key="key")
      .up-carousel_header
        img.up-logo(src="../../../assets/logo.png", width="150")
        span.up-carousel_header--pipe
        .up-carousel_header--title {{ item.name }}
      .up-carousel_body
        p.up-carousel_body--description {{ item.description }} 
      .up-carousel_footer
        span.up-carousel_footer--price R$
        span.up-carousel_footer--value {{ item.price }}
        button.up-btn.up-btn--primary(@click="datasKnowMore(item)") Saiba Mais
</template>

<script>
  export default {
    props: {
      data: [Array, Object]
    },
    methods: {
      datasKnowMore(data) {
        this.$emit('datasKnowMore', data)
        this.$router.push('/saiba-mais')
      },
    },
  }
</script>