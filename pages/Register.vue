<template>
  <div class="grid gap-x-8 place-content-center">
    <text-base type="sub" class="text-center">
      Sign up to access unique features
    </text-base>
    <form-base :on-submit="register">
      <div class="grid sm:grid-col-1 md:grid-cols-2 sm:gap-1 md-gap-1 md:gap-6">
        <input-base id="name" v-model="form.name" label="Name" required/>
        <input-base id="email" v-model="form.email" label="Email" type="email" required />
      </div>
      <div class="grid sm:grid-col-1 md:grid-cols-2 sm:gap-1 md-gap-1 md:gap-6">
        <input-base id="password" v-model="form.password" label="password" type="password" required/>
        <input-base
          id="password_confirmation"
          v-model="form.password_confirmation"
          label="Repeat password"
          type="password"
          required
        />
      </div>
      <GroupRadio id="user_type" v-model="form.user_type" :options="radioGroup" label="User type" required/>
      <button-base type="submit">
        Sign up
      </button-base>
      <div class="text-center">
        <text-base type="comment">
          Already have an account?
          <NuxtLink to="/login">
            <button-base type="button" btn="link">
              Log in
            </button-base>
          </NuxtLink>
        </text-base>
      </div>
    </form-base>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Register',
  layout: 'Login',
  auth: false,
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        user_type: ''
      },
      radioGroup: [
        {
          label: 'Doctor',
          value: 'DOCTOR'
        },
        {
          label: 'Patient',
          value: 'PATIENT'
        }
      ]

    }
  },
  methods: {
    register () {
      this.$axios.$get('/sanctum/csrf-cookie')
        .then(() => {
          this.$axios.$post('/api/register', this.form)
            .then(() => {
              this.$toast.success('You have registered successfully. please confirm your email to login into your account')
              this.$router.push('/login')
            })
            .catch((error) => {
              this.$toast.error(error.response.data.error.message)
              this.$router.push('/login')
            })
        })
    }
  }
})

</script>

<style scoped>

</style>
