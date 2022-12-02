<template>
  <div>
    <side-navbar-item icon="/icons/home.svg" label="Home" to="/home" />
    <side-navbar-item icon="/icons/inbox.svg" label="Task history" to="/doctor/history" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DoctorSideNav'
})
</script>

<style scoped>

</style>
