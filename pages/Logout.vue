<template>
  <div/>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Logout',
  layout: 'Login',
  middleware (context) {
    const { $auth, redirect } = context
    $auth.logout()

    // console.log(router)
    // $toast.info('Session has been logged out.')
    redirect('/login')
  }
})
</script>

<style scoped>

</style>
