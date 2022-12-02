<template>
  <div class="w-full md:w-2/5">
    <redirect-back to="/home" />
    <text-base type="title">
      Patient information
    </text-base>
    <text-base type="text">
      You need to complete your profile before adding a submission
    </text-base>
    <divider-line />
    <form-base :on-submit="submit">
      <input-base
        id="phone_number"
        name="phone_number"
        type="text"
        v-model="form.phone_number"
        label="Phone number"
        required
      />
      <div class="grid gap-6 md:grid-cols-2">
        <input-base
          id="weight"
          name="weight"
          type="text"
          v-model="form.weight"
          label="Weight"
          required
        />
        <input-base
          id="height"
          name="height"
          type="text"
          v-model="form.height"
          label="Height"
          required
        />
      </div>
      <text-area-base
        id="other_info"
        label="Other info"
        v-model="form.other_info"
        required
      />
      <button-base type="submit" btn="primary" class="w-auto">
        Update profile
      </button-base>
    </form-base>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Profile',
  data () {
    return {
      form: {
        phone_number: '',
        weight: '',
        height: '',
        other_info: ''
      }
    }
  },
  methods: {
    submit () {
      this.$axios.$post('/api/user', this.form)
        .catch((error) => {
          this.$toast.error(error.message)
        })
        .finally(async () => {
          await this.$auth.fetchUser()
          this.$toast.success('Your profile has been updated successfully.')
        })
    }
  },
  async fetch () {
    await this.$auth.fetchUser()
  },
  mounted () {
    this.form.phone_number = this.$store.state.auth.user?.personal_data.contact_phone
    this.form.weight = this.$store.state.auth.user?.personal_data.weight
    this.form.height = this.$store.state.auth.user?.personal_data.height
    this.form.other_info = this.$store.state.auth.user?.personal_data.other_info
  }
})
</script>
