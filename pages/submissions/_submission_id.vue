<template>
  <div>
    <redirect-back to="/home" @click="clearSubmissionSelected" />
    <div v-if="user.type_id === 'DOCTOR' && submission && submission.status !== 'PENDING'">
      <button-base class="float-right w-auto" btn="primary" @click="updateSubmission">
        {{ getActionText }}
      </button-base>
    </div>
    <div v-if="submission">
      <text-base type="title">
        {{ submission.title }}
        <pill-base :type="getPillType(submission.status)">
          {{ submission.status }}
        </pill-base>
      </text-base>
      <text-base type="paragraph">
        {{ submission.doctor?.name }} - {{ submission.created_at }}
      </text-base>
      <divider-line />
      <div class="grid gap-6 grid-cols-2 mb-4">
        <text-base type="label">
          Email Address
        </text-base>
        <text-base type="label">
          Phone
        </text-base>
      </div>
      <div class="grid gap-6 grid-cols-2 mb-4">
        <text-base type="text">
          {{ submission?.patient?.email }}
        </text-base>
        <text-base type="text">
          {{ submission?.patient?.personal_data?.contact_phone }}
        </text-base>
      </div>
      <text-base type="label">
        Other info
      </text-base>
      <text-base type="text" class="mb-4">
        {{ submission.patient?.personal_data?.other_info }}
      </text-base>
      <text-base type="label">
        Symptoms
      </text-base>
      <text-base type="text" class="mb-4">
        {{ submission.symptoms }}
      </text-base>
      <text-base type="label">
        Prescription
      </text-base>
      <div v-if="user.type_id === 'PATIENT'">
        <p>No prescriptions have been added yet</p>
        <input-file
          id="prescription"
          name="prescription"
          :disabled="submission.status === 'IN_PROGRESS'"
        />
      </div>
      <div v-else>
        <input-file
          class="w-auto"
          id="prescription"
          name="prescription"
          :disabled="submission.status !== 'IN_PROGRESS'"
          @file-update="updateFile"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: '_Submission_Id',
  data () {
    return {
      submission: this.$store.state.submissions.selected,
      user: this.$auth.user,
      file: null
    }
  },
  computed: {
    getPillType () {
      return (status) => {
        switch (status) {
          case 'PENDING' :
            return 'info'
          case 'IN_PROGRESS' :
            return 'success'
          case 'DONE' :
            return 'default'
        }
      }
    },
    getActionText () {
      switch (this.submission.status) {
        case 'PENDING' :
          return 'Accept submission'
        case 'IN_PROGRESS' :
          return 'Finish submission'
        default :
          return ''
      }
    }
  },
  methods: {
    clearSubmissionSelected () {
      this.$store.dispatch('submissions/setSubmission', null)
    },
    updateFile (files) {
      this.file = files[0]
    },
    async updateSubmission () {
      if (!this.file) {
        this.$toast.error('Please select a file')
        return
      }
      if (this.submission.status === 'PENDING') {
        await this.$axios.$put(`/api/submissions/${this.submission.id}`, {
          status: 'IN_PROGRESS',
          doctor_id: this.user.id
        })
        this.$toast.success('Your took the submission.')
      } else {
        const formData = new FormData()
        formData.append('status', 'DONE')
        formData.append('_method', 'PUT')
        formData.append('prescriptions', this.file, 'prescription.txt')
        await this.$axios.$post(`/api/submissions/${this.submission.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        this.$toast.success('Your prescription was submitted successfully.')
      }
      this.submission = await this.fetchSubmission()
    },

    async fetchSubmission () {
      const res = await this.$axios.$get(`/api/submissions/${this.$route.params.submission_id}`)
      return res.data
    }
  },
  async fetch () {
    this.submission = await this.fetchSubmission()
  }
})
</script>

<style scoped>

</style>
