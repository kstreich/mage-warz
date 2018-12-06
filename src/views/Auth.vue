<template>
  <div class="">
    <h1>Hello, please login to continue</h1>
    <Login v-if="showLoginForm" />
    <Register v-if="!showLoginForm" />
    <button @click="showLoginForm = !showLoginForm">{{showLoginForm ? 'Click to Register' : 'Click to Login'}}</button>
    {{user}}
  </div>
</template>


<script>

  import Login from '@/components/Auth/login.vue'
  import Register from '@/components/Auth/register.vue'


  export default {
    name: 'Auth',
    mounted() {
      if (this.user._id) {
        this.$router.push({ name: 'spellbooks' })
      }
    },
    data() {
      return {
        showLoginForm: true
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {},
    components: {
      Login,
      Register
    }
  }

</script>

<style>


</style>