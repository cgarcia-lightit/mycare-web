<template>
  <div class="bg-gray-700 flex bottom-0 absolute items-center h-[68px] w-full px-4 text-color-white">
    <nuxt-link to="/patient/profile">
      <div class="bg-gray-400  items-center flex justify-center rounded-full w-[36px] h-[36px]">
        {{ getLetterUser }}
      </div>
    </nuxt-link>
    <div class="ml-2">
      <nuxt-link to="/patient/profile">
        <h1 class="text-white text-sm leading-5 font-medium">
          {{ $auth.user.name }}
        </h1>
      </nuxt-link>
      <label class="text-gray-300 cursor-pointer" @click="logout">Sign out</label>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserNavbarItem',
  computed: {
    getLetterUser () {
      return `${this.$auth.user.name}`[0].toUpperCase()
    }
  },
  methods: {
    logout () {
      this.$auth.logout()
      this.$toast.info('Session has been logged out.')
    }
  }
})
</script>

<style scoped>

</style>
