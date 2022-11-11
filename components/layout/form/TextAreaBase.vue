<template>
  <div>
    <label class="text-gray-700 text-sm leading-5 font-medium" :for="id" @show="label !== null">{{ label }}</label><br>
    <textarea :id="id"
              :name="id"
              class="p-2 mt-2 border border-gray-300 hover:border-gray-500 text-sm leading-5 font-normal
                     focus:border-blue-500 color-gray-900 rounded-md"
    />
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped>
  textarea {
    min-width: 320px;
    max-width: 50%;
    height: 150px;
    resize: both;
  }
</style>
