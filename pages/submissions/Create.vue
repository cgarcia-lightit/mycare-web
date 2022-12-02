<template>
  <div>
    <redirect-back to="/home" />
    <text-base type="title">New Submission</text-base>
    <divider-line/>
    <form-base :on-submit="submit" class="w-full lg:w-2/4 ">
      <input-base
        id="title"
        v-model="form.title"
        label="Title"
        required
      />
      <text-area-base
        id="symptoms"
        v-model="form.symptoms"
        label="Symptoms"
        required
      />
      <button-base type="submit" btn="primary">Send submission</button-base>
    </form-base>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Create',
  data () {
    return {
      form: {
        title: '',
        symptoms: ''
      }
    }
  },
  methods: {
    submit () {
      this.$axios.$post('/api/submissions', this.form)
        .then((response) => {
          this.$toast.success('Submission sent')
          this.$router.push('/home')
        })
        .catch((error) => {
          this.$toast.error(error.response.data.error.message)
        })
    }
  }
})
</script>

<style scoped>

</style>
