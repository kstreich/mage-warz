<template>
  <div class="">
    <h1>{{book.name}}</h1>
    <div v-for="spell in book.spells">
      <h5>{{spell.name}}</h5>
      <p>{{spell.desc[0]}}</p>
    </div>
    <h2>All Spells</h2>
    <div v-for="spell in allSpells">
      <h5>{{spell.name}}</h5>
      <p>{{spell.desc[0]}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SpellBook',
    mounted() {
      this.$store.dispatch('getBook', this.$route.params.bookId)
      this.$store.dispatch('getSpells')
    },
    data() {
      return {

      }
    },
    computed: {
      book() {
        return this.$store.state.activeBook
      },
      allSpells() {
        return this.$store.state.spells
      }
    },
    methods: {}
  }

</script>

<style>


</style>