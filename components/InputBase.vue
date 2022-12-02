<template>
  <div>
    <label class="text-gray-500 text-sm leading-5 font-normal" :for="id" @show="label !== null">{{ label }}</label>
    <input
      :id="id"
      v-model="content"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      :name="id"
      :type="type"
      autocomplete="current-password"
      class="input-custom"
      :required="required"
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputBase',
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      content: this.value
    }
  },
  watch: {
    content (value) {
      this.$emit('input', value)
    },
    value (value) {
      this.content = value
    }
  }
})
</script>

<style scoped>
  .input-custom {
    @apply relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2
           text-gray-900 placeholder-gray-500 hover:border-gray-500 focus:z-10 focus:border-blue-500
           focus:outline-none focus:ring-indigo-500 sm:text-sm

  }
</style>
