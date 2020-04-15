<template lang="pug">
  .up-select
    label.up-select_label Ordenar
    v-select(
      class="up-select_options"
      :options="options"
      :value="optionSelected || itemText"
      @input="changeValue"
    )
</template>

<script>
  import vSelect from 'vue-select'

  export default {
    props: {
      options: Array,
      itemText: String,
      optionSelected: String,
    },
    methods: {
      changeValue(event) {
        this.$emit('input', event)
      }
    },
    components: {
      vSelect,
    },
  }
</script>