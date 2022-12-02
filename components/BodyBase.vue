<template>
  <div class="h-full w-full">
    <slot name="menu" />
    <div class="float-left">
      <section id="body-base-header">
        <slot name="header" />
      </section>
      <section id="body-base-content" class="pl-4 p-4">
        <slot name="content" />
      </section>
      <section id="body-base-footer" class="px-8">
        <slot name="footer" />
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BodyBase',
  middleware: 'auth'
})
</script>

<style scoped>

</style>
