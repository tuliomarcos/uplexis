<template lang="pug">
  div.up-filter
    label.up-filter_label Ordenar
    v-select(
      class="up-filter_select"
      :options="options"
      :value="optionSelected"
      @input="changeValue"
    )

</template>

<script>
  import vSelect from 'vue-select'
  // import { mapActions, mapState } from 'vuex'

  export default {
    data() {
      return {
        options: [
          'Todos',
          'Lançamento',
          'Preço'
        ],
        optionSelected: 'Todos',
      }
    },
    methods: {
      changeValue(event) {
        this.options.forEach(opts => {
          if(event === opts) {
            this.optionSelected = opts
          }
        })
      }
    },
    components: {
      vSelect,
    },
  }
</script>