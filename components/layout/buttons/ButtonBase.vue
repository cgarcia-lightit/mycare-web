<template>
  <button
    :class="`py-2 px-5 rounded-lg shadow focus:outline-none ${getType}`"
    @click="$emit('onClick')"
    :type="type"
    :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'ButtonBase',
  data () {
    return {
      primary: {
        active: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
        disabled: 'text-white bg-gray-400 hover:bg-gray-400 active:bg-gray-400'
      },
      secondary: {
        active: 'text-blue-800 bg-blue-100 hover:bg-blue-200',
        disabled: 'bg-gray-100 text-gray-400'
      },
      link: {
        active: 'bg-white text-blue-600 hover:text-blue-700 active:text-blue-800',
        disabled: 'bg-white text-gray-400'
      }
    }
  },
  computed: {
    getType () {
      switch (this.btn) {
        case 'primary':
          return `${this.disabled ? this.primary.disabled : this.primary.active}`
        case 'secondary':
          return `${this.disabled ? this.secondary.disabled : this.secondary.active}`
        case 'link':
          return `${this.disabled ? this.link.disabled : this.link.active}`
        default:
          return `${this.disabled ? this.primary.disabled : this.primary.active}`
      }
    }
  },
  props: {
    type: {
      type: String,
      default: 'button'
    },
    btn: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
