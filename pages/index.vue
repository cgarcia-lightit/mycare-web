<template>
  <div/>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  middleware ({ redirect }) {
    redirect('/home')
  }
})
</script>

<style scoped>

</style>
