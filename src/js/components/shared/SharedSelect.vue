<template lang="pug">
  .up-select
    label.up-select_label Ordenar
    v-select(
      class="up-select_options"
      :options="options"
      :value="optionSelected"
      @input="changeValue"
    )
</template>

<script>
  import vSelect from 'vue-select'

  export default {
    data() {
      return {
        optionSelected: 'Todos',
      }
    },
    props: {
      options: Array,
    },
    methods: {
      changeValue(event) {
        this.optionSelected = event
        this.$emit('input', this.optionSelected)
      }
    },
    components: {
      vSelect,
    },
  }
</script>