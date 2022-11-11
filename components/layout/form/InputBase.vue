<template>
  <div>
    <label class="text-gray-500 text-sm leading-5 font-normal" :for="id" @show="label !== null">{{ label }}</label>
    <input
      :id="id"
      :name="id"
      :type="type"
      autocomplete="current-password"
      class="relative block w-full appearance-none  rounded-b-md border border-gray-300 px-3 py-2
             text-gray-900 placeholder-gray-500 hover:border-gray-500 focus:z-10 focus:border-blue-500
             focus:outline-none focus:ring-indigo-500 sm:text-sm"
      @input="$emit('update:value', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
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
      required: false
    }
  }
}
</script>

<style scoped>

</style>
