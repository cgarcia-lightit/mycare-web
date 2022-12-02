<template>
  <div class="mb-6">
    <img src="/icons/arrow-back.svg" alt="back" height="10" @click="redirectBack" >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RedirectBack',
  props: {
    to: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    redirectBack () {
      if (this.to) {
        this.$router.push(this.to)
      } else {
        this.$router.back()
      }
      this.$emit('click')
    }
  }
})
</script>

<style scoped>

</style>
