<template>
  <div>
    <side-navbar-item icon="/icons/home.svg" label="Home" to="/home" />
    <side-navbar-item icon="/icons/plus-circle.svg" label="New submission" to="/submissions/create" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PatientSideNav'
})
</script>

<style scoped>

</style>
