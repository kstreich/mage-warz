<template>
  <div>
    <form @submit.prevent="login">
      <span>Email<input type="text" v-model="creds.email"></span>
      <span>Password <input type="password" v-model="creds.password"></span>
      <button type="submit">LOGIN</button>
      <button type="reset">CLEAR</button>
    </form>
  </div>
</template>



<script>
  export default {
    name: 'Login',
    data() {
      return {
        creds: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.$store.dispatch('login', this.creds)
      }
    }
  }
</script>