<template>
  <div>
    <TextBase type="header">
      Welcome to connfirm your email asdijasdijsadia das dasd asd
    </TextBase>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {ToastOptions} from 'vue-toast-notification'

export default defineComponent({
  name: 'Verify',
  layout: 'Login',
  auth: false,
  mounted () {
    const id = this.$route.query.id
    this.$axios.$get('/sanctum/csrf-cookie')
      .then(() => {
        this.$axios.$get(`/api/email/verify?id=${id}`)
          .then(() => {
            this.$toast.success('Your email has been verified, please log in')
            this.$router.replace('/login')
          })
          .catch((error) => {
            const config = {
              message: error.response.data.error.message,
              type: 'error',
              position: 'top-right',
              duration: 10000
            } as ToastOptions
            this.$toast.open(config)
            this.$router.push('/login')
          })
      })
  }
})
</script>

<style scoped>

</style>
