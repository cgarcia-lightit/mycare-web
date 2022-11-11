<template>
  <p :class="`text-sm leading-5 ${getFont}`">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'TextBase',
  computed: {
    getFont () {
      switch (this.type) {
        case 'label' : return 'color-gray-500 font-medium'
        default : return 'color-gray-900 font-normal'
      }
    }
  },
  props: {
    type: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

</style>
