<template>
  <div class="flex items-center pl-3">
    <input
      type="radio"
      :name="name"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      :value="value"
      @click="onClick"
    >
    <label
      v-show="label !== ''"
      for="horizontal-list-radio-license"
      class="py-3 ml-2 w-full text-sm font-medium text-gray-900 "
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputRadio',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick (e) {
      this.$emit('changeOption', e.target.value)
    }
  }
})
</script>

<style scoped>

</style>
