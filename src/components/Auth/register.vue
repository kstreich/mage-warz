<template>
  <div>
    <form @submit.prevent="register">
      <span>Name <input type="text" v-model="creds.name"></span>
      <span>Email<input type="text" v-model="creds.email"></span>
      <span>Password<input type="password" v-model="creds.password"></span>
      <button type="submit">Register</button>
      <button type="reset">CLEAR</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {
        creds: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      register() {
        this.$store.dispatch('register', this.creds)
      }
    }
  }
</script>