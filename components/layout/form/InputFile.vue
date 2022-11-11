<template>

  <div>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="default_size">Default size</label>
    <input
      :id="id"
      :name="id"
      type="file"
      class="block w-full input-custom-blue text-sm leading-5 font-medium"
      @input="$emit('update:value', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
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
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {
      type: String,
      required: false
    }
  }
}
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
</style>
