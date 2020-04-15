<template lang="pug">
  div
    SharedSelect(
      @input="orderCards"
      :options="options"
      itemText="Todos"
      :optionSelected="optionSelected"
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
        optionSelected: '',
      }
    },
    computed: {
      ...mapState(['apps', 'sources']),
    },
    methods: {
      ...mapActions(['setApps', 'cardKnowMore']),
      knowMore(app) {
        this.$store.dispatch('cardKnowMore', app)
        this.$router.push('/saiba-mais')
      },
      orderCards(value) {
        if(value !== null) {
          if(value === 'Todos') this.apps.apps.sort((a, b) => a.id - b.id)
          if(value === 'Preço') this.apps.apps.sort((a, b) => a.price - b.price)
          if(value === 'Lançamento') this.apps.apps.sort((a, b) => b.date - a.date )

          this.optionSelected = value
          return
        }

        this.apps.apps.sort((a, b) => a.id - b.id)
        this.optionSelected = 'Todos'
      }
    },
    created() {
      this.setApps()
    },
  }
</script>