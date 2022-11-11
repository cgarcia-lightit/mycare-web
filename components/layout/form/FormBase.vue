<template>
  <form class="mt-8 space-y-6" :action="action" :method="method">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'FormBase',
  props: {
    action: {
      type: String,
      required: false,
      default: '#'
    },
    method: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
