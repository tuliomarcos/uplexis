<template lang="pug">
  div
    SharedSelect(
      @input="orderCards"
      :options="options"
    )
    #cards-area
      SharedCard(
        type="apps"
        v-for="(data, key) in apps.apps"
        :key="key"
        :data="data"
        @datasKnowMore="knowMore"
      )
</template>

<script>
  import SharedCard from '../shared/SharedCard'
  import SharedSelect from '../shared/SharedSelect'
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {
      SharedCard,
      SharedSelect,
    },
    data() {
      return {
        options: [
          'Todos',
          'Lançamento',
          'Preço'
        ],
      }
    },
    computed: {
      ...mapState(['apps', 'sources']),
    },
    methods: {
      ...mapActions(['setApps', 'callCardKnowMore']),
      knowMore(app) {
        this.$store.dispatch('callCardKnowMore', app)
      },
      orderCards(value) {
        console.log(value)
        if(value === 'Todos') {
          this.apps.apps.sort((a, b) => a.id - b.id)
        }
        if(value === 'Lançamento') {
          this.apps.apps.sort((a, b) => b.date - a.date )
        }
        if(value === 'Preço') {
          this.apps.apps.sort((a, b) => a.price - b.price)
        }
      }
    },
    created() {
      this.setApps()
    },
  }
</script>