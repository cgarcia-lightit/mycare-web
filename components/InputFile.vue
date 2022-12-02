<template>
  <div>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="default_size">
      Default size
    </label>
    <input
      :id="id"
      :name="id"
      type="file"
      class="block w-full input-custom-blue text-sm leading-5 font-medium"
      @change="change"
      :disabled="disabled"
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputFile',
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
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    change ($event) {
      const files = $event.target.files
      this.$emit('file-update', files)
    }
  }
})
</script>

<style scoped>
  .input-custom-blue::-webkit-file-upload-button {
    background-color: #DBEAFE;
    color: #1E40AF;
    border: none;
    border-radius: 6px;
    height: 36px;
    cursor: pointer;
  }
  .input-custom-blue[disabled]::-webkit-file-upload-button {
    @apply bg-gray-100 text-sm leading-5 font-medium text-gray-400;
    border: none;
    border-radius: 6px;
    height: 36px;
    cursor: not-allowed;
  }
</style>
