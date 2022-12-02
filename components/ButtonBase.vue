<template>
  <button
    :class="`py-2 px-5 focus:outline-none ${getType}`"
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonBase',
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
  },
  data () {
    return {
      primary: {
        active: 'bg-blue-600 text-white hover:bg-blue-700 rounded-lg active:bg-blue-800 w-full',
        disabled: 'rounded-lg text-white bg-gray-400 hover:bg-gray-400 active:bg-gray-400 w-full'
      },
      secondary: {
        active: 'rounded-lg text-blue-800 bg-blue-100 hover:bg-blue-200 w-full',
        disabled: 'rounded-lg bg-gray-100 text-gray-400 w-full'
      },
      link: {
        active: 'text-blue-600 hover:text-blue-700 active:text-blue-800',
        disabled: 'text-gray-400'
      }
    }
  },
  computed: {
    getType () : string {
      switch (this.btn) {
        case 'primary': return this.disabled ? this.primary.disabled : this.primary.active
        case 'secondary': return this.disabled ? this.secondary.disabled : this.secondary.active
        case 'link': return this.disabled ? this.link.disabled : this.link.active
        default: return this.disabled ? this.primary.disabled : this.primary.active
      }
    }
  }
})
</script>

<style scoped>

</style>
