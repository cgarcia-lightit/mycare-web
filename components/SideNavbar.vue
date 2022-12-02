<template>
  <nav id="side-var-menu" class="bg-gray-800 h-full relative float-left z-0 top-0 left-0 overflow-hidden">
    <section id="menu-section" class="max-h-full relative overflow-auto">
      <slot />
    </section>
    <user-navbar-item />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SideNavbar'
})
</script>

<style scoped>

</style>
