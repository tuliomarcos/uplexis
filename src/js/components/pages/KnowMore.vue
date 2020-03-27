<template lang="pug">
  .up-know-more
    .up-know-more_title
      font-awesome-icon(icon="chevron-left" class="up-icon")
      router-link(to="/") {{ apps.infoPage.name }}
    .up-know-more_slider  
      carousel(
        :perPage="2"
        :navigationEnabled="true"
        navigationPrevLabel="←"
        navigationNextLabel="→"
      )
        slide.up-know-more_slider--item(v-for="(slide, key) in sliderData" :key="key")
          img(src="../../../assets/image3.jpg")
          p.up-know-more_slider--text {{ slide.description }}
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
    data() {
      return {
        sliderData: [
          { description: 'Veniam tempor aliquip dolor proident consequat sint voluptate ad consequat Lorem ad laborum dolor. Qui amet excepteur in est.' },
          { description: 'Veniam tempor aliquip dolor proident consequat sint voluptate ad consequat Lorem ad laborum dolor. Qui amet excepteur in est.' },
          { description: 'Veniam tempor aliquip dolor proident consequat sint voluptate ad consequat Lorem ad laborum dolor. Qui amet excepteur in est.' },
        ],
      }
    },
    computed: {
      ...mapState(['apps'])
    },
  }
</script>