<template>
  <body-base>
    <template v-slot:menu>
      <side-navbar >
        <div :is="navbar" />
      </side-navbar>
    </template>
    <template v-slot:header>
      <div />
    </template>
    <template v-slot:content>
      <Nuxt />
    </template>
    <template v-slot:footer>
      <div/>
    </template>
  </body-base>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'index',
  middleware: ['auth', 'patient'],
  data () {
    return {
      navbar: this.$store.state.auth.user.type_id === 'DOCTOR' ? 'DoctorSideNav' : 'PatientSideNav'
    }
  }
})
</script>

<style scoped>

</style>
