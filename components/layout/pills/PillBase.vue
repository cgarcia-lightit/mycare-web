<template>
  <span :class="`text-xs inline-block py-1 px-2.5 leading-5 text-center whitespace-nowrap
                 align-baseline font-medium text-white rounded-full ${getType}`">
      <slot/>
  </span>
</template>

<script>
export default {
  name: 'PillBase',
  computed: {
    getType () {
      switch (this.type) {
        case 'success' : return this.success
        case 'info' : return this.info
        default: return this.default
      }
    }
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'default'
    }
  },
  data () {
    return {
      success: 'bg-green-100 text-green-800',
      info: 'bg-blue-100 text-blue-800',
      default: 'bg-gray-100 text-gray-800'
    }
  }
}
</script>

<style scoped>

</style>
