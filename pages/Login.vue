<template>
  <div>
    <text-base class="text-center" type="sub">Log in to access unique features</text-base>
    <div class="grid sm:grid-cols-1 md:grid-cols-3 sm:gap-0 xl:gap-x-64 content-center">
      <div />
      <form-base :on-submit="login">
        <input-base id="email" label="Email" type="email" v-model="email"/>
        <input-base id="password" label="Password" type="password" v-model="password"/>
        <button-base type="submit">Log in</button-base>
        <text-base class=text-center>
          Dont have an account yet?
          <NuxtLink to="/register">
            <button-base type="button" btn="link">Sign up</button-base>
          </NuxtLink>
        </text-base>
      </form-base>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'index',
  layout: 'Login',
  loading: true,
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.email,
          password: this.password
        }
      }).catch((error) => {
        this.$toast.error(error.response.data.message)
      })
    }
  }
})

</script>

<style scoped>

</style>
