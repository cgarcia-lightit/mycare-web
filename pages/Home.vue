<template>
  <table-base class="w-full">
    <template #headers>
      <th>SUBMISSION TITLE</th>
      <th>PATIENT NAME</th>
      <th>CREATED AT</th>
      <th> STATUS</th>
      <th />
    </template>
    <template #body>
      <tr v-for="row in list" :key="row.id">
        <td>{{ row.title }}</td>
        <td>{{ row.patient.name }}</td>
        <td>{{ row.created_at }}</td>
        <td>
          <pill-base :type="getPillType(row.status)">
            {{ row.status }}
          </pill-base>
        </td>
        <td>
          <button-base btn="link" @click="() => viewSubmission(row)">
            View more
          </button-base>
        </td>
      </tr>
      <tr v-if="!list.length">
        <td colspan="5" class="text-center">
          No submissions to show
        </td>
      </tr>
    </template>
  </table-base>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Home',
  data () {
    return {
      list: []
    }
  },
  async fetch () {
    this.list = await this.getList()
  },
  computed: {
    getPillType () {
      return (status) => {
        switch (status) {
          case 'PENDING' : return 'info'
          case 'IN_PROGRESS' : return 'success'
          case 'DONE' : return 'default'
        }
      }
    }
  },
  methods: {
    async getList () {
      const url = this.$store.state.auth.user.type_id === 'DOCTOR'
        ? '/api/submissions'
        : `/api/user/${this.$store.state.auth.user.id}/submissions`
      const res = await this.$axios.$get(url, {
        params: {
          limit: 20,
          offset: 0
        }
      })
      return res.data
    },
    viewSubmission (submission) {
      this.$store.dispatch('submissions/setSubmission', submission)
      this.$router.push(`/submissions/${submission.id}`)
    }
  }
})
</script>
