<template>
  <div>
    <label class="text-gray-700 text-sm leading-5 font-medium" :for="id" @show="label !== null">{{ label }}</label><br>
    <textarea
      :id="id"
      :name="id"
      class="p-2 mt-2 border border-gray-300 w-full h-[150px]
            resize hover:border-gray-500 text-sm leading-5 font-normal
            focus:border-blue-500 color-gray-900 rounded-md"
      v-model="data"
      :required="required"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextArea',
  data () {
    return {
      data: this.value
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: null
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
  watch: {
    data (val) {
      this.$emit('input', val)
    },
    value: {
      handler (val) {
        this.data = val
      }
    }
  }
})
</script>

<style scoped>
  textarea {
    resize: both;
  }
</style>
