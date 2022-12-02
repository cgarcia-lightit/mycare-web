<template>
  <NuxtLink :to="to">
    <div
      class="p-2.5 mt-3 mx-2 flex items-center rounded-md font-medium leading-5 text-sm
             duration-300 cursor-pointer hover:bg-gray-900 text-white"
    >
      <div class="w-[15px]">
        <img :src="icon" alt="Home">
      </div>
      <span class="float-left ml-4 text-gray-200 font-bold">
        {{ label }}
      </span>
    </div>
  </NuxtLink>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideNavbarItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style scoped>

</style>
