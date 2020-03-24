<template lang="pug">
  .up-filter
    .up-filter_button#all-icon(@click="toFilterCard")
      font-awesome-icon(icon="globe" class="up-icon")
      span.up-filter--text Todos
    .up-filter_button(
      v-for="source in sources.sources" 
      :id="source.id"
      @click="toFilterCard"
    )
      font-awesome-icon(:icon="source.icon" class="up-icon")
      span.up-filter_button--text {{ source.name }}
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  
  export default {
    computed: {
      ...mapState(['sources'])
    },
    methods: {
      ...mapActions(['filterSource']),
      toFilterCard(event) {
        this.$emit('filter', event.target.innerText)
      },
    },
  }
</script>

<style lang="scss">
</style>