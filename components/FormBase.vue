<template>
  <form class="mt-8 space-y-6" action="/" method="POST" @submit.prevent="onSubmit" >
    <slot />
  </form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormBase',
  props: {
    onSubmit: {
      type: Function,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
