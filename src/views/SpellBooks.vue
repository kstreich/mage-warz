<template>
  <div class="">
    <div class="row">
      <div class="col-12">
        <h1>All of your spellbooks</h1>
        <!-- <div @click="setCurrentSpellBook()" :bookId >
          {{book.name}}
        </div> -->
        <p>
          <router-link v-for="book in spellBooks" :to="{name: 'spellbook', params: {bookId: book._id }}">{{book.name}}</router-link>
        </p>

        </ul>
        <form class="col-12 mt-5">
          Create New Spell Book
          <input type="text" v-model="newSpellBook">
          <button @click="createNewSpellBook()" type="submit">Add Book</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SpellBooks',
    mounted() {
      this.$store.dispatch('getSpellBooks')
    },
    data() {
      return {
        newSpellBook: ''
      }
    },
    computed: {
      spellBooks() {
        return this.$store.state.spellBooks
      }
    },
    methods: {
      createNewSpellBook() {
        console.log('new Book', this.newSpellBook)
        this.$store.dispatch('createNewSpellBook', { name: this.newSpellBook })
      },
      setCurrentSpellBook() {
        this.$store.dispatch('setCurrentSpellBook')
      }
    }
  }

</script>

<style>


</style>