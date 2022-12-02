<template>
  <div class="content-star">
    <div class="content-center mb-4 mt-10 md:mt-28 text-center mx-4">
      <text-base type="header">
        Welcome to the doctor's app
      </text-base>
    </div>
    <section class="content-center mx-4">
      <Nuxt />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
})
</script>

<style scoped>

</style>
