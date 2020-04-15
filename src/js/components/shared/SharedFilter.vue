<template lang="pug">
  ul.up-filter
    li.up-filter_button#all-icon(@click="toFilterCard")
      font-awesome-icon(icon="globe" class="up-icon")
      span.up-filter--text Todos
    li.up-filter_button(
      v-for="source in sources" 
      :id="source.id"
      @click="toFilterCard"
    )
      font-awesome-icon(:icon="source.icon" :id="source.id" class="up-icon")
      span.up-filter_button--text(:id="source.id") {{ source.name }}
</template>

<script>
  export default {
    props: {
      sources: [Array, Object]
    },
    methods: {
      toFilterCard(event) {
        // TODO: id ta pegando o id dos elementos filhos ao invés do pai
        this.$emit('filter', event.target.innerText)
      },
    },
  }
</script>

<style lang="scss">
</style>