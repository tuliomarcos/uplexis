<template lang="pug">
  .up-filter
    .up-filter_button#all-icon(@click="toFilterCard")
      font-awesome-icon(icon="globe")
      span.up-filter--text Todos
    .up-filter_button(
      v-for="source in sources.sources" 
      :id="source.id"
      @click="toFilterCard"
    )
      font-awesome-icon(:icon="source.icon" class="up-icone")
      span.up-filter--text {{ source.name }}
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
        //this.filterSource(event.target.innerText)
        this.$emit('filter', event.target.innerText)
      },
    },
  }
</script>

<style lang="scss">
  .up-filter {
    display: flex;
    justify-content: center;

    &_button {
      padding: 15px;
      border: solid 1px #000;
      border-radius: 5px;
      cursor: pointer;
    }
  }
</style>