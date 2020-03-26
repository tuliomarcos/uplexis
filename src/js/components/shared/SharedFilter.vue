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
      font-awesome-icon(:icon="source.icon" class="up-icon")
      span.up-filter_button--text {{ source.name }}
</template>

<script>
  export default {
    props: {
      sources: [Array, Object]
    },
    methods: {
      toFilterCard(event) {
        this.$emit('filter', event.target.innerText)
      },
    },
  }
</script>

<style lang="scss">
</style>