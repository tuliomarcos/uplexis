<template lang="pug">
  .up-know-more
    .up-know-more_title
      font-awesome-icon(icon="chevron-left" class="up-icon")
      router-link(to="/") {{ apps.infoPage.name }}
    .up-know-more_slider
    .up-know-more_description
      p {{ apps.infoPage.description }}
    footer.up-know-more_footer
      span.up-carousel_footer--price R$
      span.up-carousel_footer--value {{ apps.infoPage.price }}
      button.up-btn.up-btn--primary Habilitar
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['apps'])
    },
  }
</script>