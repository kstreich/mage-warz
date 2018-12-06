<template>
  <div class="">
    {{book}}
  </div>
</template>

<script>
  export default {
    name: 'SpellBook',
    mounted() {
      this.$store.dispatch('getBook', this.$route.params.bookId)
    },
    data() {
      return {

      }
    },
    computed: {
      book() {
        return this.$store.state.activeBook
      }
    },
    methods: {}
  }

</script>

<style>


</style>