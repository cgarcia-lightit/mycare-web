<template>
  <p :class="`${getFont}`">
    <slot />
  </p>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextBase',
  props: {
    type: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    getFont () {
      switch (this.type) {
        case 'header' : return 'text-3xl leading-9 font-semibold text-black'
        case 'sub' : return 'text-base leading-6 text-gray-900 font-normal'
        case 'label' : return 'text-sm text-gray-500 font-medium leading-5'
        case 'title' : return 'color-gray-900 font-medium leading-6 text-lg'
        case 'text' : return 'text-sm text-gray-800 font-normal leading-5'
        case 'comment' : return 'text-base text-gray-500 leading-6 font-normal'
        default : return 'text-sm text-gray-900 font-normal leading-5'
      }
    }
  }
})
</script>

<style scoped>

</style>
